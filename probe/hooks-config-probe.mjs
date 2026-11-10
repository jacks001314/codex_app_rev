#!/usr/bin/env node
// Codex app-server 生命周期 hooks（回合结束接线）配置探活。
//
// 目的：锁定「Interrupt / Stop / SubagentStop -> cua_repl.turn_ended」这条接线在 codex
// 侧的**配置落点、形状与信任门控**。上游 unified-computer-use 插件把它写在 plugin.json
// 的 hooks 字段里（A 级原文，见 codex_app_rev/computer-use.md §5.4）；Syntropy 不物化上游
// 插件，而是自己合成 cua_repl MCP Server，所以需要知道 config.toml 里等价的写法，以及
// 「新出现的 hook 默认不执行」这个门控怎么过。
//
// 用法：
//   node codex_app_rev/probe/hooks-config-probe.mjs <codex 可执行文件路径>
//
// 脚本自带 fixture，只在临时目录里读写，不触碰用户真实的 ~/.codex。

import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const EXE = process.argv[2] ? path.resolve(process.argv[2]) : "";
if (!EXE || !fs.existsSync(EXE)) {
  console.error("用法: node hooks-config-probe.mjs <codex 可执行文件路径>");
  process.exit(2);
}
const WORK = path.join(os.tmpdir(), "codex-hooks-config-probe");

const write = (p, body) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body, "utf8");
};
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// mcpToolHandler 是 plugin.json 里那段 hooks 的逐字内容（只换掉 server 名与 session 变量）。
const mcpToolHandler = (server, sessionExpr) => ({
  type: "mcp_tool",
  server,
  tool: "turn_ended",
  input: {
    hook_event_name: "${hook_event_name}",
    session_id: sessionExpr,
    turn_id: "${turn_id}",
  },
});

// hooksFile 是插件 hooks 的完整对象（顶层 hooks -> 事件 -> matcher group）。
function hooksFile(server, kebab) {
  const groups = (sessionExpr) => [{ hooks: [mcpToolHandler(server, sessionExpr)] }];
  const events = kebab
    ? {
        interrupt: groups("${session_id}"),
        stop: groups("${session_id}"),
        "subagent-stop": groups("${agent_id}"),
      }
    : {
        Interrupt: groups("${session_id}"),
        Stop: groups("${session_id}"),
        SubagentStop: groups("${agent_id}"),
      };
  return { hooks: events };
}

// hooksToTOML 把同一份对象展开成 config.toml 的 [[<prefix>.<Event>]] 段。
function hooksToTOML(prefix, hooks) {
  const lines = [];
  for (const [event, groups] of Object.entries(hooks.hooks)) {
    for (const group of groups) {
      lines.push(`[[${prefix}.${event}]]`);
      if (group.matcher !== undefined) lines.push(`matcher = ${JSON.stringify(group.matcher)}`);
      for (const handler of group.hooks) {
        lines.push(`[[${prefix}.${event}.hooks]]`);
        lines.push(`type = ${JSON.stringify(handler.type)}`);
        lines.push(`server = ${JSON.stringify(handler.server)}`);
        lines.push(`tool = ${JSON.stringify(handler.tool)}`);
        lines.push(`[${prefix}.${event}.hooks.input]`);
        for (const [key, value] of Object.entries(handler.input)) {
          lines.push(`${key} = ${JSON.stringify(value)}`);
        }
      }
    }
  }
  return lines.join("\n") + "\n";
}

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
      resolve({ status: "TIMEOUT", message: `no response within ${timeoutMs}ms` });
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

const hookSummary = (response) =>
  (response.result?.data?.[0]?.hooks ?? []).map((hook) => ({
    eventName: hook.eventName,
    handlerType: hook.handlerType,
    server: hook.server,
    tool: hook.tool,
    trustStatus: hook.trustStatus,
    key: hook.key,
    currentHash: hook.currentHash,
  }));

// probeConfigToml 把一份 config.toml 交给真实 app-server，回读 hooks/list。
async function probeConfigToml(label, tomlBody) {
  const dir = path.join(WORK, label);
  const home = path.join(dir, "home");
  const project = path.join(dir, "project");
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(home, { recursive: true });
  fs.mkdirSync(project, { recursive: true });
  write(path.join(home, "config.toml"), tomlBody);
  const state = startServer(home, project);
  const out = { label, kind: "config.toml", body: tomlBody };
  try {
    await handshake(state);
    const response = await call(state, "hooks/list", { cwds: [project] });
    out.status = response.status;
    out.hooks = hookSummary(response);
    out.rawWhenEmpty = out.hooks.length === 0 ? response.result : undefined;
  } finally {
    state.child.kill();
  }
  out.stderr = state.stderr.trim().split("\n").slice(-4).join("\n");
  return out;
}

// probePluginToml 先用 config.toml 声明本地 marketplace（声明式安装），再触发
// plugin/list 物化，最后回读 hooks。上游 app 就是这么声明随包插件的。
async function probePlugin(label, pluginHooks) {
  const dir = path.join(WORK, label);
  const home = path.join(dir, "home");
  const root = path.join(dir, "root");
  fs.rmSync(dir, { recursive: true, force: true });
  fs.mkdirSync(home, { recursive: true });
  write(
    path.join(root, ".agents", "plugins", "marketplace.json"),
    JSON.stringify(
      {
        name: "syntropy-hooks-probe",
        interface: { displayName: "Syntropy Hooks Probe" },
        plugins: [
          {
            name: "probe-hooks",
            displayName: "Probe Hooks",
            source: { source: "local", path: "./plugins/probe-hooks" },
            policy: { installation: "AVAILABLE", authentication: "ON_INSTALL" },
            category: "Developer Tools",
            description: "hooks probe fixture",
          },
        ],
      },
      null,
      2,
    ),
  );
  write(
    path.join(root, "plugins", "probe-hooks", ".codex-plugin", "plugin.json"),
    JSON.stringify(
      {
        name: "probe-hooks",
        version: "0.0.1",
        description: "hooks probe fixture",
        hooks: pluginHooks,
      },
      null,
      2,
    ),
  );
  write(
    path.join(home, "config.toml"),
    `[marketplaces.syntropy-hooks-probe]\nsource_type = "local"\nsource = ${JSON.stringify(root)}\n\n[plugins."probe-hooks@syntropy-hooks-probe"]\nenabled = true\n`,
  );
  const state = startServer(home, root);
  const out = { label, kind: "plugin" };
  try {
    await handshake(state);
    for (let attempt = 0; attempt < 10; attempt += 1) {
      const response = await call(state, "hooks/list", { cwds: [root] });
      out.status = response.status;
      out.hooks = hookSummary(response);
      if (out.hooks.length > 0) break;
      await call(state, "plugin/list", { cwds: [root] });
      await sleep(700);
    }
  } finally {
    state.child.kill();
  }
  out.stderr = state.stderr
    .split("\n")
    .filter((line) => /trust|hook/i.test(line))
    .slice(-4)
    .join("\n");
  return out;
}

const show = (out) => {
  console.log(`\n=== ${out.label} (${out.kind}) status=${out.status ?? "-"} ===`);
  console.log(JSON.stringify(out.hooks, null, 2));
  if (out.rawWhenEmpty !== undefined)
    console.log("raw hooks/list: " + JSON.stringify(out.rawWhenEmpty));
  if (out.stderr) console.log("stderr tail:\n" + out.stderr);
};

async function main() {
  fs.rmSync(WORK, { recursive: true, force: true });
  const pascal = hooksFile("cua_repl", false);
  const kebab = hooksFile("cua_repl", true);
  const results = [];
  // 对照组：空配置，确认 hooks/list 的基线与返回形状。
  results.push(await probeConfigToml("00-baseline", ""));
  // 候选 A（成立）：config.toml [hooks] 直挂 Pascal 事件名。
  results.push(await probeConfigToml("01-config-pascal", hooksToTOML("hooks", pascal)));
  // 候选 B/C（不成立）：kebab 事件名与双层 hooks.hooks 都读不到 hook。
  results.push(await probeConfigToml("02-config-kebab", hooksToTOML("hooks", kebab)));
  results.push(await probeConfigToml("03-config-nested", hooksToTOML("hooks.hooks", pascal)));
  // 候选 D：上游插件形状（hooks 内联在 plugin.json）。
  results.push(await probePlugin("04-plugin-inline", pascal));
  for (const out of results) show(out);
  write(path.join(WORK, "report.json"), JSON.stringify(results, null, 2));
  console.log(`\nreport: ${path.join(WORK, "report.json")}`);
}

await main();
