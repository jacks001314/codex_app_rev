#!/usr/bin/env node
// Codex 回合结束 hooks（Interrupt / Stop / SubagentStop -> cua_repl.turn_ended）端到端探活。
//
// 目的：回答「用户打断一个回合时，codex 到底会不会去调 cua_repl.turn_ended」。hooks-config-probe.mjs
// 只证明了这份 hooks 段能被 codex 读成配置，证明不了它会被执行；这里补上后半段：
//
//   1. 反面对照：hooks 默认 untrusted，打断回合时 codex **一条 hook run 都不报**（不是报
//      blocked/failed，而是根本不进入执行）——所以「写 hooks」必须配上「写信任记录」；
//   2. 正面：按生产形状把 hooks/list 的 currentHash 写进 hooks.state."<key>" 之后，同一次
//      打断会让 codex 调 cua_repl.turn_ended，并回报一条 status=completed 的 hook/completed。
//
// 观察点是两头：
//   - codex 的推送：hook/started、hook/completed（带 eventName / status / sourcePath / entries）；
//   - cua_repl 这一侧：一个假 MCP Server 记下 codex 发来的 tools/call 原始参数。
// 假 Server 只是替身，用来在不需要构建 node_repl 的情况下看清 codex 发出的调用形状。
//
// 用法：
//   node codex_app_rev/probe/turn-ended-probe.mjs <codex 可执行文件路径>
//
// 脚本自带 fixture，只在临时目录里读写，不触碰用户真实的 ~/.codex。不需要模型鉴权：
// 回合建出来之后立刻打断，hook 在这条路径上一定会跑。

import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const EXE = process.argv[2] ? path.resolve(process.argv[2]) : "";
if (!EXE || !fs.existsSync(EXE)) {
  console.error("用法: node turn-ended-probe.mjs <codex 可执行文件路径>");
  process.exit(2);
}

const WORK = path.join(os.tmpdir(), "codex-turn-ended-probe");
const DUMMY = path.join(WORK, "dummy-mcp.mjs");
const HOOK_EVENTS = [
  { event: "Interrupt", sessionExpr: "session_id" },
  { event: "Stop", sessionExpr: "session_id" },
  { event: "SubagentStop", sessionExpr: "agent_id" },
];

const write = (p, body) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body, "utf8");
};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// dummyServer 是一个最小 MCP Server：应答 initialize / tools/list，把每次 tools/call 的
// 原始参数追加到 DUMMY_LOG 指向的文件，并按工具返回 {}。它的唯一职责是让 codex 的这次
// 调用可观察。
const dummyServer = `import fs from "node:fs";
const log = process.env.DUMMY_LOG;
function append(o) { fs.appendFileSync(log, JSON.stringify(o) + "\\n"); }
function send(o) { process.stdout.write(JSON.stringify(o) + "\\n"); }
let buffer = "";
process.stdin.on("data", (chunk) => {
  buffer += chunk.toString();
  let index;
  while ((index = buffer.indexOf("\\n")) >= 0) {
    const line = buffer.slice(0, index).trim();
    buffer = buffer.slice(index + 1);
    if (!line) continue;
    let message;
    try { message = JSON.parse(line); } catch { append({ raw: line }); continue; }
    append({ dir: "in", message });
    if (message.id === undefined) continue;
    if (message.method === "initialize") {
      send({ jsonrpc: "2.0", id: message.id, result: { protocolVersion: "2025-06-18", capabilities: { tools: {} }, serverInfo: { name: "dummy-cua-repl", version: "0.0.1" } } });
    } else if (message.method === "tools/list") {
      const tool = (name) => ({ name, description: name, inputSchema: { type: "object", properties: {} } });
      send({ jsonrpc: "2.0", id: message.id, result: { tools: [tool("js"), tool("js_reset"), tool("turn_ended")] } });
    } else if (message.method === "tools/call") {
      send({ jsonrpc: "2.0", id: message.id, result: { content: [{ type: "text", text: "{}" }] } });
    } else {
      send({ jsonrpc: "2.0", id: message.id, result: {} });
    }
  }
});
`;

// hookSection 是节点写进 per-agent config.toml 的那段 hooks 的逐字形状。
function hookSection({ event, sessionExpr }) {
  return `[[hooks.${event}]]
[[hooks.${event}.hooks]]
type = "mcp_tool"
server = "cua_repl"
tool = "turn_ended"
[hooks.${event}.hooks.input]
hook_event_name = "\${hook_event_name}"
session_id = "\${${sessionExpr}}"
turn_id = "\${turn_id}"
`;
}

function configToml(home) {
  return (
    `[mcp_servers.cua_repl]
command = ${JSON.stringify(process.execPath)}
args = [${JSON.stringify(DUMMY)}]
env = { DUMMY_LOG = ${JSON.stringify(path.join(home, "mcp.jsonl"))} }

` + HOOK_EVENTS.map(hookSection).join("\n")
  );
}

function startServer(home, cwd) {
  const child = spawn(EXE, ["app-server"], {
    env: { ...process.env, CODEX_HOME: home },
    cwd,
    stdio: ["pipe", "pipe", "pipe"],
  });
  const state = { child, buf: "", nextId: 1, pending: new Map(), notifications: [], stderr: "" };
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
      if (message.id !== undefined && message.method === undefined) {
        const settle = state.pending.get(message.id);
        if (settle) {
          state.pending.delete(message.id);
          settle(message);
        }
      } else if (message.method !== undefined) {
        state.notifications.push({ method: message.method, params: message.params });
        // 服务端发起的请求（审批、用户输入等）一律空应答，让回合继续跑。
        if (message.id !== undefined)
          child.stdin.write(JSON.stringify({ jsonrpc: "2.0", id: message.id, result: {} }) + "\n");
      }
    }
  });
  return state;
}

function call(state, method, params, timeoutMs = 60000) {
  const id = state.nextId++;
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      state.pending.delete(id);
      resolve({ status: "TIMEOUT" });
    }, timeoutMs);
    state.pending.set(id, (message) => {
      clearTimeout(timer);
      resolve(
        message.error
          ? { status: "ERROR", code: message.error.code, message: message.error.message }
          : { status: "OK", result: message.result },
      );
    });
    state.child.stdin.write(JSON.stringify({ jsonrpc: "2.0", id, method, params }) + "\n");
  });
}

// 先等一条指定方法（且可选匹配 params）的推送，再从该位置继续找下一条。
async function waitNotification(state, match, timeoutMs) {
  const deadline = Date.now() + timeoutMs;
  let cursor = 0;
  for (;;) {
    while (cursor < state.notifications.length) {
      const entry = state.notifications[cursor];
      cursor += 1;
      if (match(entry)) return entry;
    }
    if (Date.now() > deadline) return undefined;
    await sleep(100);
  }
}
const hookCompleted = (event) => (entry) =>
  entry.method === "hook/completed" && entry.params?.run?.eventName === event;
const turnStarted = (turnId) => (entry) =>
  entry.method === "turn/started" && entry.params?.turn?.id === turnId;

// runInterruptedTurn 起一条线程、注入假 cua_repl、等它起来，然后建回合并立刻打断。
async function runInterruptedTurn(state, project) {
  const started = await call(state, "thread/start", { cwd: project });
  if (started.status !== "OK") return { step: "thread/start", response: started };
  const threadId = started.result?.thread?.id ?? started.result?.threadId;
  // MCP 连接异步建立；打断前必须先让服务器 ready，否则 hook 会因为服务器没起来而失败。
  const deadline = Date.now() + 60000;
  for (;;) {
    const listed = await call(state, "mcpServerStatus/list", {
      detail: "toolsAndAuthOnly",
      threadId,
    });
    const ready = (listed.result?.data ?? []).some(
      (entry) => entry.name === "cua_repl" && entry.tools?.js,
    );
    if (ready || Date.now() > deadline) break;
    await sleep(500);
  }
  const turn = await call(state, "turn/start", {
    threadId,
    input: [{ type: "text", text: "Say only: ok" }],
  });
  if (turn.status !== "OK") return { step: "turn/start", response: turn, threadId };
  const turnId = turn.result?.turn?.id;
  await waitNotification(state, turnStarted(turnId), 15000);
  let interrupted;
  for (let attempt = 0; attempt < 10; attempt += 1) {
    interrupted = await call(state, "turn/interrupt", { threadId, turnId });
    if (interrupted.status === "OK" || !/no active turn/.test(interrupted.message ?? "")) break;
    await sleep(300);
  }
  return { threadId, turnId, interrupt: interrupted };
}

const hookSummary = (entry) => ({
  eventName: entry.params?.run?.eventName,
  handlerType: entry.params?.run?.handlerType,
  status: entry.params?.run?.status,
  source: entry.params?.run?.source,
  entitlement: entry.params?.run?.scope,
  durationMs: entry.params?.run?.durationMs,
  entries: entry.params?.run?.entries,
});

async function main() {
  fs.rmSync(WORK, { recursive: true, force: true });
  write(DUMMY, dummyServer);
  const home = path.join(WORK, "home");
  const project = path.join(WORK, "project");
  fs.mkdirSync(project, { recursive: true });
  write(path.join(home, "config.toml"), configToml(home));
  const logPath = path.join(home, "mcp.jsonl");

  const report = {
    codex: EXE,
    configToml: fs.readFileSync(path.join(home, "config.toml"), "utf8"),
  };
  const state = startServer(home, project);
  try {
    report.initialize = (
      await call(state, "initialize", {
        clientInfo: { name: "turn-ended-probe", version: "0.1" },
        capabilities: { experimentalApi: true },
      })
    ).status;
    state.child.stdin.write(
      JSON.stringify({ jsonrpc: "2.0", method: "initialized", params: {} }) + "\n",
    );

    const listed = await call(state, "hooks/list", { cwds: [project] });
    const hooks = listed.result?.data?.[0]?.hooks ?? [];
    // timeoutSec 里 interrupt 明显小于其余事件，是 codex 给打断路径的默认预算（上游插件
    // 也没有为它写 timeout，所以这是 codex 侧的行为，不是我们的配置差异）。
    report.hooksList = hooks.map((hook) => ({
      eventName: hook.eventName,
      server: hook.server,
      tool: hook.tool,
      trustStatus: hook.trustStatus,
      timeoutSec: hook.timeoutSec,
    }));

    // 第 1 阶段：untrusted。
    report.untrusted = await runInterruptedTurn(state, project);
    const untrustedRun = await waitNotification(state, hookCompleted("interrupt"), 8000);
    report.untrustedHookRun = untrustedRun ? hookSummary(untrustedRun) : null;

    // 第 2 阶段：按生产形状写信任记录。
    const edits = hooks
      .filter((hook) => hook.server === "cua_repl" && hook.tool === "turn_ended")
      .map((hook) => ({
        keyPath: `hooks.state.${JSON.stringify(hook.key)}`,
        mergeStrategy: "upsert",
        value: { trusted_hash: hook.currentHash },
      }));
    const written = await call(state, "config/batchWrite", { edits, reloadUserConfig: true });
    report.trustWrite = { status: written.status, edits: edits.length };
    const after = await call(state, "hooks/list", { cwds: [project] });
    report.trustedStatus = (after.result?.data?.[0]?.hooks ?? []).map((hook) => [
      hook.eventName,
      hook.trustStatus,
    ]);

    // 第 3 阶段：trusted。
    report.trusted = await runInterruptedTurn(state, project);
    const trustedRun = await waitNotification(state, hookCompleted("interrupt"), 30000);
    report.trustedHookRun = trustedRun ? hookSummary(trustedRun) : null;
    await sleep(1000);

    const calls = fs.existsSync(logPath)
      ? fs
          .readFileSync(logPath, "utf8")
          .trim()
          .split("\n")
          .filter(Boolean)
          .map((line) => JSON.parse(line))
          .filter((entry) => entry.message?.method === "tools/call")
          .map((entry) => ({
            name: entry.message.params?.name,
            arguments: entry.message.params?.arguments,
            meta: entry.message.params?._meta,
          }))
      : [];
    report.cuaReplToolCalls = calls;
  } finally {
    state.child.kill();
  }
  report.stderrTail = state.stderr.trim().split("\n").slice(-5).join("\n");
  write(path.join(WORK, "report.json"), JSON.stringify(report, null, 2));

  console.log(`\n=== hooks/list (${report.hooksList.length} 条) ===`);
  console.log(JSON.stringify(report.hooksList, null, 2));
  console.log(`\n=== untrusted：hook run ===`);
  console.log(JSON.stringify(report.untrustedHookRun, null, 2));
  console.log(`\n=== trusted：hook run ===`);
  console.log(JSON.stringify(report.trustedHookRun, null, 2));
  console.log(`\n=== cua_repl 收到 tools/call ===`);
  console.log(JSON.stringify(report.cuaReplToolCalls, null, 2));
  console.log(`\nreport: ${path.join(WORK, "report.json")}`);
}

await main();
