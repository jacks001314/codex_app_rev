#!/usr/bin/env node
// Codex app-server 的 MCP 热重载语义探活。
//
// 目的：把「设置改完对在跑 Agent 立即生效」落成事实，而不是猜。要看的是
// `config/mcpServer/reload` 到底重读什么、对已经在跑的线程有没有作用：
//   Q1 config.toml 新增一段 [mcp_servers.x] 后 reload，正在跑的线程能不能看到它？
//   Q2 改同一段的 env 后 reload，重新拉起的 server 进程读到的是新 env 吗？
//   Q3 删掉这一段后 reload，它会消失吗（谁负责关掉进程）？
//   Q4 thread/start 的 config 覆盖（Syntropy 现在的注入形态）与 config.toml 同名时谁赢？
//
// 用法：
//   node codex_app_rev/probe/mcp-reload-probe.mjs <codex 可执行文件路径>
//
// 脚本自带 fixture MCP server，只在临时目录里读写，不触碰用户真实的 ~/.codex。

import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const EXE = process.argv[2] ? path.resolve(process.argv[2]) : "";
if (!EXE || !fs.existsSync(EXE)) {
  console.error("用法: node mcp-reload-probe.mjs <codex 可执行文件路径>");
  process.exit(2);
}
const WORK = path.join(os.tmpdir(), "codex-mcp-reload-probe");
const NODE = process.execPath;

// fixture 是一个最小 stdio MCP server：tools/list 返回一个工具，工具名带上
// 进程启动时读到的 PROBE_MARK。工具名因此就是「这个 server 进程当前 env」的指纹，
// 用来区分「reload 只是重读配置」和「reload 真的重启了 server 进程」。
const FIXTURE = [
  'import fs from "node:fs";',
  'let buffer = "";',
  'const mark = process.env.PROBE_MARK || "unset";',
  "const log = process.env.PROBE_LOG;",
  'const note = (line) => { if (log) { try { fs.appendFileSync(log, line + "\\n"); } catch {} } };',
  'note("start mark=" + mark);',
  'process.stdin.setEncoding("utf8");',
  'process.stdin.on("data", (chunk) => {',
  "  buffer += chunk;",
  "  let index;",
  '  while ((index = buffer.indexOf("\\n")) >= 0) {',
  "    const line = buffer.slice(0, index).trim();",
  "    buffer = buffer.slice(index + 1);",
  "    if (!line) continue;",
  "    let message;",
  "    try { message = JSON.parse(line); } catch { continue; }",
  "    if (message.id === undefined) continue;",
  "    let result = {};",
  '    if (message.method === "initialize") {',
  '      result = { protocolVersion: "2025-06-18", capabilities: { tools: {} }, serverInfo: { name: "probe-fixture", version: "0.0.1" } };',
  '    } else if (message.method === "tools/list") {',
  '      result = { tools: [{ name: "mark_" + mark, description: "probe fixture", inputSchema: { type: "object", properties: {} } }] };',
  "    }",
  '    process.stdout.write(JSON.stringify({ jsonrpc: "2.0", id: message.id, result }) + "\\n");',
  "  }",
  "});",
  'process.stdin.on("end", () => process.exit(0));',
  "",
].join("\n");

const write = (p, body) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body, "utf8");
};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function startServer(home, cwd) {
  const child = spawn(EXE, ["app-server"], {
    env: { ...process.env, CODEX_HOME: home },
    cwd,
    stdio: ["pipe", "pipe", "pipe"],
  });
  const state = { child, buf: "", nextId: 1, pending: new Map(), stderr: "" };
  child.stderr.on("data", (data) => {
    state.stderr += data.toString();
  });
  child.stdout.on("data", (chunk) => {
    state.buf += chunk.toString();
    let index;
    while ((index = state.buf.indexOf("\n")) >= 0) {
      const line = state.buf.slice(0, index).trim();
      state.buf = state.buf.slice(index + 1);
      if (!line) continue;
      let message;
      try {
        message = JSON.parse(line);
      } catch {
        continue;
      }
      if (
        message.id !== undefined &&
        (message.result !== undefined || message.error !== undefined)
      ) {
        const settle = state.pending.get(message.id);
        if (settle) {
          state.pending.delete(message.id);
          settle(message);
        }
      } else if (message.id !== undefined && message.method) {
        child.stdin.write(JSON.stringify({ jsonrpc: "2.0", id: message.id, result: {} }) + "\n");
      }
    }
  });
  return state;
}

function call(state, method, params, timeoutMs = 30000) {
  const id = state.nextId++;
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      state.pending.delete(id);
      resolve({ status: "TIMEOUT", message: "no response within " + timeoutMs + "ms" });
    }, timeoutMs);
    state.pending.set(id, (message) => {
      clearTimeout(timer);
      resolve(
        message.error
          ? { status: "ERROR", code: message.error.code, message: message.error.message }
          : { status: "OK", result: message.result },
      );
    });
    state.child.stdin.write(
      JSON.stringify({ jsonrpc: "2.0", id, method, params: params ?? {} }) + "\n",
    );
  });
}

async function handshake(state) {
  await call(state, "initialize", {
    clientInfo: { name: "syntropy-probe", version: "0.1.0" },
    capabilities: { experimentalApi: true },
  });
  state.child.stdin.write(
    JSON.stringify({ jsonrpc: "2.0", method: "initialized", params: {} }) + "\n",
  );
}

const threadIdOf = (response) =>
  response?.result?.thread?.id ??
  response?.result?.threadId ??
  response?.result?.thread?.threadId ??
  "";

// mcpInventory 取出「本次 app-server 认得的 MCP server + 各自工具名」。
async function mcpInventory(state, threadId) {
  const params = { detail: "toolsAndAuthOnly" };
  if (threadId) params.threadId = threadId;
  const response = await call(state, "mcpServerStatus/list", params);
  if (response.status !== "OK") return { status: response.status, error: response.message };
  const servers = (response.result?.data ?? []).map((entry) => ({
    name: entry.name,
    auth: entry.authStatus,
    tools: Array.isArray(entry.tools) ? entry.tools.map((tool) => tool?.name) : entry.tools,
  }));
  return { status: "OK", servers, raw: JSON.stringify(response.result?.data ?? []).slice(0, 2000) };
}

const baseToml =
  'approval_policy = "never"\nsandbox_mode = "workspace-write"\nproject_root_markers = [".syntropy"]\n';

function serverToml(name, mark, logPath) {
  return [
    "",
    "[mcp_servers." + name + "]",
    "command = " + JSON.stringify(NODE),
    "args = [" + JSON.stringify(path.join(WORK, "fixture-mcp.mjs")) + "]",
    "",
    "[mcp_servers." + name + ".env]",
    "PROBE_MARK = " + JSON.stringify(mark),
    "PROBE_LOG = " + JSON.stringify(logPath),
    "",
  ].join("\n");
}

function threadServerConfig(name, mark, logPath) {
  return {
    mcp_servers: {
      [name]: {
        command: NODE,
        args: [path.join(WORK, "fixture-mcp.mjs")],
        env: { PROBE_MARK: mark, PROBE_LOG: logPath },
      },
    },
  };
}

// phaseConfigOnly：config.toml 是唯一来源，覆盖 Q1（新增）、Q2（换 env）、Q3（删除）。
async function phaseConfigOnly() {
  const dir = path.join(WORK, "config-only");
  fs.rmSync(dir, { recursive: true, force: true });
  const home = path.join(dir, "home");
  const project = path.join(dir, "project");
  fs.mkdirSync(home, { recursive: true });
  fs.mkdirSync(project, { recursive: true });
  const log = path.join(dir, "fixture.log");
  write(path.join(home, "config.toml"), baseToml);

  const state = startServer(home, project);
  const steps = [];
  try {
    await handshake(state);
    const started = await call(state, "thread/start", { cwd: project });
    const threadId = threadIdOf(started);
    steps.push({ step: "thread/start", status: started.status, threadId, error: started.message });
    steps.push({ step: "list before", inventory: await mcpInventory(state, threadId) });

    write(path.join(home, "config.toml"), baseToml + serverToml("probe", "added", log));
    steps.push({
      step: "reload after add",
      status: (await call(state, "config/mcpServer/reload", {}, 60000)).status,
    });
    await sleep(1500);
    steps.push({ step: "list after add (thread)", inventory: await mcpInventory(state, threadId) });
    steps.push({ step: "list after add (process)", inventory: await mcpInventory(state, "") });

    write(path.join(home, "config.toml"), baseToml + serverToml("probe", "changed", log));
    steps.push({
      step: "reload after env change",
      status: (await call(state, "config/mcpServer/reload", {}, 60000)).status,
    });
    await sleep(1500);
    steps.push({
      step: "list after env change (thread)",
      inventory: await mcpInventory(state, threadId),
    });

    write(path.join(home, "config.toml"), baseToml);
    steps.push({
      step: "reload after remove",
      status: (await call(state, "config/mcpServer/reload", {}, 60000)).status,
    });
    await sleep(1500);
    steps.push({
      step: "list after remove (thread)",
      inventory: await mcpInventory(state, threadId),
    });
  } finally {
    state.child.kill();
  }
  return {
    phase: "config-only",
    steps,
    stderr: state.stderr.trim().split("\n").slice(-6).join("\n"),
    fixtureLog: readLog(log),
  };
}

// phaseThreadOverride：thread/start 的 config 覆盖与 config.toml 同名时谁赢（Q4）。
async function phaseThreadOverride() {
  const dir = path.join(WORK, "thread-override");
  fs.rmSync(dir, { recursive: true, force: true });
  const home = path.join(dir, "home");
  const project = path.join(dir, "project");
  fs.mkdirSync(home, { recursive: true });
  fs.mkdirSync(project, { recursive: true });
  const log = path.join(dir, "fixture.log");
  write(path.join(home, "config.toml"), baseToml);

  const state = startServer(home, project);
  const steps = [];
  try {
    await handshake(state);
    const started = await call(state, "thread/start", {
      cwd: project,
      config: threadServerConfig("probe", "thread-first", log),
    });
    const threadId = threadIdOf(started);
    steps.push({
      step: "thread/start with override",
      status: started.status,
      threadId,
      error: started.message,
    });
    steps.push({
      step: "list with override only (thread)",
      inventory: await mcpInventory(state, threadId),
    });

    write(path.join(home, "config.toml"), baseToml + serverToml("probe", "config-second", log));
    steps.push({
      step: "reload after config.toml add",
      status: (await call(state, "config/mcpServer/reload", {}, 60000)).status,
    });
    await sleep(1500);
    steps.push({
      step: "list after reload (thread)",
      inventory: await mcpInventory(state, threadId),
    });

    write(path.join(home, "config.toml"), baseToml + serverToml("probe", "config-third", log));
    steps.push({
      step: "reload after config.toml env change",
      status: (await call(state, "config/mcpServer/reload", {}, 60000)).status,
    });
    await sleep(1500);
    steps.push({
      step: "list after env change (thread)",
      inventory: await mcpInventory(state, threadId),
    });
  } finally {
    state.child.kill();
  }
  return {
    phase: "thread-override",
    steps,
    stderr: state.stderr.trim().split("\n").slice(-6).join("\n"),
    fixtureLog: readLog(log),
  };
}

function readLog(log) {
  try {
    return fs.readFileSync(log, "utf8").trim().split("\n");
  } catch {
    return [];
  }
}

// hookToml：把上游插件那种「打断 / 停止 / 子 agent 停止就调 cua_repl.turn_ended」
// 的接线写成 config.toml 里的 hooks 段，用来验证 hooks 是否也随 reload 重读。
function hookToml(server) {
  const lines = [];
  const events = [
    ["Interrupt", "${session_id}"],
    ["Stop", "${session_id}"],
    ["SubagentStop", "${agent_id}"],
  ];
  for (const [event, sessionExpr] of events) {
    lines.push("[[hooks." + event + "]]");
    lines.push("[[hooks." + event + ".hooks]]");
    lines.push('type = "mcp_tool"');
    lines.push("server = " + JSON.stringify(server));
    lines.push('tool = "turn_ended"');
    lines.push("[hooks." + event + ".hooks.input]");
    lines.push('hook_event_name = "${hook_event_name}"');
    lines.push("session_id = " + JSON.stringify(sessionExpr));
    lines.push('turn_id = "${turn_id}"');
    lines.push("");
  }
  return lines.join("\n");
}

const hookSummary = (response) =>
  (response.result?.data?.[0]?.hooks ?? []).map((hook) => ({
    eventName: hook.eventName,
    server: hook.server,
    tool: hook.tool,
  }));

// phaseHooksReload：Q5 —— hooks 段会不会被 reload 重读（改名 / 删除都要生效）。
// 只读 hooks/list 的清单，不真的跑回合。
async function phaseHooksReload() {
  const dir = path.join(WORK, "hooks-reload");
  fs.rmSync(dir, { recursive: true, force: true });
  const home = path.join(dir, "home");
  const project = path.join(dir, "project");
  fs.mkdirSync(home, { recursive: true });
  fs.mkdirSync(project, { recursive: true });
  const log = path.join(dir, "fixture.log");
  write(
    path.join(home, "config.toml"),
    baseToml + serverToml("probe", "hooks", log) + hookToml("probe"),
  );

  const state = startServer(home, project);
  const steps = [];
  const readHooks = async (label) => {
    const response = await call(state, "hooks/list", { cwds: [project] });
    steps.push({ step: label, status: response.status, hooks: hookSummary(response) });
  };
  try {
    await handshake(state);
    await readHooks("hooks before");
    write(path.join(home, "config.toml"), baseToml + serverToml("probe", "hooks", log));
    steps.push({
      step: "reload after hooks removed",
      status: (await call(state, "config/mcpServer/reload", {}, 60000)).status,
    });
    await sleep(1500);
    await readHooks("hooks after remove");
    write(
      path.join(home, "config.toml"),
      baseToml + serverToml("probe", "hooks", log) + hookToml("probe-renamed"),
    );
    steps.push({
      step: "reload after hooks renamed",
      status: (await call(state, "config/mcpServer/reload", {}, 60000)).status,
    });
    await sleep(1500);
    await readHooks("hooks after rename");
  } finally {
    state.child.kill();
  }
  return {
    phase: "hooks-reload",
    steps,
    stderr: state.stderr.trim().split("\n").slice(-4).join("\n"),
  };
}

fs.rmSync(WORK, { recursive: true, force: true });
fs.mkdirSync(WORK, { recursive: true });
write(path.join(WORK, "fixture-mcp.mjs"), FIXTURE);

const report = [await phaseConfigOnly(), await phaseThreadOverride(), await phaseHooksReload()];
console.log(JSON.stringify(report, null, 2));
