#!/usr/bin/env node
// 导入插件的可用性探活：拿一个**已经由节点物化好的 CODEX_HOME**，
// 验证「从插件库导入的插件在这个 Agent 上真的能用」。
//
// 与其它探针的分工：
//   plugin-config-probe.mjs / plugin-git-declarative-probe.mjs  回答「codex 支持哪套声明」；
//   本探针回答「节点产出的那份 CODEX_HOME 里，插件是否被 reconcile 装上、
//   技能是否以 <插件名>:<技能名> 命名空间出现、插件自带 MCP 是否归属到这个插件」。
// 因此它直接用节点生成的文件，不自己写 config.toml：默认路径是
// <CODEX_HOME 的父目录>，配合 syntropy_node/agent 的 live 用例（见用法）。
//
// 用法：
//   node codex_app_rev/probe/plugin-mirror-usability-probe.mjs <codex 可执行文件> <CODEX_HOME> [插件标识]
//
// 只读传入的 CODEX_HOME（codex 自己会往 plugins/cache 写物化结果），
// 不触碰用户的 ~/.codex；进程结束前会杀掉自己拉起的 app-server。

import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const EXE = process.argv[2] ? path.resolve(process.argv[2]) : "";
const HOME = process.argv[3] ? path.resolve(process.argv[3]) : "";
const PLUGIN = process.argv[4] ?? "agent-deck@awesome-codex-plugins";
if (!EXE || !fs.existsSync(EXE) || !HOME || !fs.existsSync(HOME)) {
  console.error(
    "用法: node plugin-mirror-usability-probe.mjs <codex 可执行文件路径> <CODEX_HOME> [插件标识]",
  );
  process.exit(2);
}
const WORK = path.join(os.tmpdir(), "codex-plugin-mirror-usability-probe");
const FIX = path.join(WORK, "cwd");
// codex 把 local 来源的插件内容复制进 <CODEX_HOME>/plugins/cache/ 这一步是异步的，
// 所以探测不能只看第一拍：按固定间隔轮询到可用，或超时为止。
const POLL_TIMEOUT_MS = Number(process.env.PLUGIN_PROBE_TIMEOUT_MS ?? 60000);
const POLL_INTERVAL_MS = Number(process.env.PLUGIN_PROBE_INTERVAL_MS ?? 1000);
// 阶段 A 只调 plugin/reconcile，观察它单独是否物化内容（实测：不会）。
const RECONCILE_PROBE_MS = Number(process.env.PLUGIN_PROBE_RECONCILE_MS ?? 5000);
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function startServer() {
  const child = spawn(EXE, ["app-server"], {
    env: { ...process.env, CODEX_HOME: HOME },
    cwd: FIX,
    stdio: ["pipe", "pipe", "pipe"],
  });
  const state = { child, buf: "", nextId: 1, pending: new Map(), stderr: "" };
  child.stderr.on("data", (chunk) => {
    state.stderr += chunk.toString();
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
      }
    }
  });
  return state;
}

function call(state, method, params, timeoutMs = 300000) {
  return new Promise((resolve) => {
    const id = state.nextId++;
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

const notify = (state, method, params) =>
  state.child.stdin.write(JSON.stringify({ jsonrpc: "2.0", method, params: params ?? {} }) + "\n");

async function openSession() {
  const state = startServer();
  await call(state, "initialize", {
    clientInfo: { name: "syntropy-mirror-usability-probe", version: "0.1.0" },
    capabilities: { experimentalApi: true },
  });
  notify(state, "initialized", {});
  return state;
}

const installedIds = (result) =>
  (result?.marketplaces ?? []).flatMap((marketplace) =>
    (marketplace.plugins ?? []).map(
      (plugin) => `${plugin.summary?.id ?? plugin.name}@${marketplace.name}`,
    ),
  );
const skillNames = (result) =>
  (result?.data ?? []).flatMap((entry) => (entry.skills ?? []).map((skill) => skill.name));
function directorySize(root) {
  let total = 0;
  const walk = (dir) => {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else total += fs.statSync(full).size;
    }
  };
  walk(root);
  return total;
}

const report = [];
const log = (label, result, note) => {
  const text = typeof note === "function" ? note(result) : note;
  report.push({ label, status: result.status, note: text });
  console.log(`${result.status.padEnd(7)} ${label}${text ? "  -> " + text : ""}`);
  if (result.status === "ERROR") console.log(`        ${result.code}: ${result.message}`);
  return result;
};

async function main() {
  fs.rmSync(WORK, { recursive: true, force: true });
  fs.mkdirSync(FIX, { recursive: true });
  console.log(`codex    : ${EXE}\nCODEX_HOME: ${HOME}\n插件      : ${PLUGIN}\n`);

  const [pluginName, marketplaceName] = PLUGIN.includes("@")
    ? PLUGIN.split(/@(?=[^@]+$)/)
    : [PLUGIN, ""];
  const cacheDir = path.join(HOME, "plugins", "cache", marketplaceName, pluginName);
  const startedAt = Date.now();

  const state = await openSession();
  log(
    "plugin/reconcile",
    await call(state, "plugin/reconcile", { reason: "mirror-usability" }),
    (r) => JSON.stringify(r.result ?? {}).slice(0, 240),
  );

  // probe 读一次三条互相独立的证据：plugin/installed 认得这个标识、技能以
  // <插件名>:<技能名> 命名空间出现、<CODEX_HOME>/plugins/cache 里真的落了字节。
  const probe = async () => {
    const [installed, skills, mcp] = await Promise.all([
      call(state, "plugin/installed", { cwds: [FIX] }, 60000),
      call(state, "skills/list", { cwds: [FIX], forceReload: true }, 60000),
      call(state, "mcpServerStatus/list", { cwds: [FIX] }, 60000),
    ]);
    const names = skillNames(skills.result ?? {});
    return {
      installedHere: installedIds(installed.result ?? {}).includes(PLUGIN),
      pluginSkills: names.filter((name) => name.startsWith(`${pluginName}:`)),
      skillTotal: names.length,
      pluginMcp: (mcp.result?.data ?? []).filter((server) => server.pluginId === PLUGIN),
      cacheBytes: directorySize(cacheDir),
    };
  };
  const usableNow = (snapshot) => snapshot.installedHere && snapshot.pluginSkills.length > 0;

  // 阶段 A：plugin/reconcile 单独能不能把内容装上。codex 0.154.0 实测为「不能」，
  // 它是纯声明对账；把它当成物化入口正是导入插件在 Agent 上不生效的原因。
  const reconcileDeadline = Date.now() + RECONCILE_PROBE_MS;
  let attempt = 0;
  let snapshot = await probe();
  for (;;) {
    attempt += 1;
    const elapsed = Date.now() - startedAt;
    console.log(
      `阶段A t=${String(elapsed).padStart(6)}ms  第 ${String(attempt).padStart(2)} 次探测  ` +
        `已安装=${snapshot.installedHere ? "是" : "否"}  ` +
        `技能=${snapshot.skillTotal}（本插件 ${snapshot.pluginSkills.length}）  ` +
        `缓存=${(snapshot.cacheBytes / 1048576).toFixed(2)} MB`,
    );
    if (usableNow(snapshot) || Date.now() >= reconcileDeadline) break;
    await sleep(POLL_INTERVAL_MS);
    snapshot = await probe();
  }
  const reconcileAloneMs = usableNow(snapshot) ? Date.now() - startedAt : -1;
  console.log(
    `阶段A 结论：plugin/reconcile 单独物化 = ${reconcileAloneMs >= 0 ? `是（${reconcileAloneMs}ms）` : "否（预期行为）"}`,
  );

  // 阶段 B：plugin/list 才是物化入口。节点侧因此先 reconcile、再 list、
  // 然后按 installed 轮询确认（见 syntropy_node/agent/runtime_driver.go）。
  let usableMs = reconcileAloneMs;
  if (!usableNow(snapshot)) {
    log("plugin/list（物化触发点）", await call(state, "plugin/list", { cwds: [FIX] }), (r) => {
      const marketplaces = r.result?.marketplaces ?? [];
      return `${marketplaces.length} marketplaces, ${marketplaces.reduce((sum, m) => sum + (m.plugins ?? []).length, 0)} plugins`;
    });
    const deadline = Date.now() + POLL_TIMEOUT_MS;
    attempt = 0;
    for (;;) {
      attempt += 1;
      snapshot = await probe();
      const elapsed = Date.now() - startedAt;
      console.log(
        `阶段B t=${String(elapsed).padStart(6)}ms  第 ${String(attempt).padStart(2)} 次探测  ` +
          `已安装=${snapshot.installedHere ? "是" : "否"}  ` +
          `技能=${snapshot.skillTotal}（本插件 ${snapshot.pluginSkills.length}）  ` +
          `缓存=${(snapshot.cacheBytes / 1048576).toFixed(2)} MB`,
      );
      if (usableNow(snapshot)) {
        usableMs = elapsed;
        break;
      }
      if (Date.now() >= deadline) break;
      await sleep(POLL_INTERVAL_MS);
    }
  }
  if (state.stderr.trim()) {
    console.log(`        stderr: ${state.stderr.trim().split("\n").slice(-4).join(" / ")}`);
  }
  state.child.kill();

  console.log("");
  console.log(`插件已安装      : ${snapshot.installedHere}`);
  console.log(`插件技能        : ${snapshot.pluginSkills.join(", ") || "(none)"}`);
  console.log(
    `插件 MCP        : ${snapshot.pluginMcp.map((server) => server.name).join(", ") || "(none)"}`,
  );
  console.log(`缓存目录        : ${cacheDir} (${snapshot.cacheBytes} bytes)`);

  const usable = usableNow(snapshot);
  console.log(
    `可用时延        : ${usableMs >= 0 ? `${usableMs}ms` : `>${RECONCILE_PROBE_MS + POLL_TIMEOUT_MS}ms 仍未可用`}`,
  );
  console.log(`\n结论: ${usable ? "可用" : "不可用"}`);
  const out = path.join(WORK, "mirror-usability-report.json");
  fs.writeFileSync(
    out,
    JSON.stringify(
      {
        exe: EXE,
        home: HOME,
        plugin: PLUGIN,
        usable,
        usableMs,
        reconcileAloneMs,
        snapshot,
        report,
      },
      null,
      2,
    ),
  );
  console.log(`完整结果: ${out}`);
  process.exit(usable ? 0 : 1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
