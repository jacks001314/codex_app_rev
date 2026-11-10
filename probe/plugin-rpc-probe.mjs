#!/usr/bin/env node
// Codex app-server 插件/MCP/技能能力探活。
//
// 目的：验证节点实际 spawn 的 codex 二进制是否支持插件能力，以及
// install / list / installed / uninstall / reconcile、marketplace 注册、
// skills/extraRoots、skills/config/write 在真实调用下的行为。
//
// 用法：
//   node codex_app_rev/probe/plugin-rpc-probe.mjs <codex 可执行文件路径> [工作目录]
//
// 脚本自带 fixture（本地 marketplace + 插件 + skill + .mcp.json），
// 不读取、不写入用户真实的 CODEX_HOME；所有状态落在临时目录里。
//
// 只读性说明：脚本会启动 codex app-server 子进程并调用 RPC，但只操作
// 自己创建的临时 CODEX_HOME 与 fixture，不触碰用户的 ~/.codex 状态。

import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

// 必须绝对化：子进程的 cwd 是 fixture，相对路径会解析到 fixture 下。
const EXE = process.argv[2] ? path.resolve(process.argv[2]) : "";
if (!EXE || !fs.existsSync(EXE)) {
  console.error("用法: node plugin-rpc-probe.mjs <codex 可执行文件路径> [工作目录]");
  process.exit(2);
}
const WORK = path.resolve(process.argv[3] ?? path.join(os.tmpdir(), "codex-plugin-probe"));
const FIX = path.join(WORK, "fixture");
const PLAIN = path.join(WORK, "plain-skills");
const HOME = path.join(WORK, "codex-home");

const write = (p, body) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body, "utf8");
};

function buildFixture() {
  fs.rmSync(WORK, { recursive: true, force: true });
  write(
    path.join(FIX, ".agents", "plugins", "marketplace.json"),
    JSON.stringify(
      {
        name: "syntropy-probe",
        interface: { displayName: "Syntropy Probe" },
        plugins: [
          {
            name: "probe-skill-pack",
            displayName: "Probe Skill Pack",
            source: { source: "local", path: "./plugins/probe-skill-pack" },
            policy: { installation: "AVAILABLE", authentication: "ON_INSTALL" },
            category: "Developer Tools",
            description: "Syntropy delegation probe fixture.",
          },
        ],
      },
      null,
      2,
    ),
  );
  write(
    path.join(FIX, "plugins", "probe-skill-pack", ".codex-plugin", "plugin.json"),
    JSON.stringify(
      {
        name: "probe-skill-pack",
        version: "0.0.1",
        description: "Syntropy probe fixture plugin",
        author: { name: "Syntropy" },
        license: "MIT",
        keywords: ["probe", "syntropy"],
        skills: "./skills/",
        mcpServers: "./.mcp.json",
        interface: {
          displayName: "Probe Skill Pack",
          shortDescription: "Probe fixture",
          category: "Developer Tools",
          capabilities: ["Read"],
        },
      },
      null,
      2,
    ),
  );
  write(
    path.join(FIX, "plugins", "probe-skill-pack", "skills", "probe-skill", "SKILL.md"),
    "---\nname: probe-skill\ndescription: Syntropy delegation probe skill.\n---\n\n# Probe Skill\n\nFixture skill injected by the probe.\n",
  );
  write(
    path.join(FIX, "plugins", "probe-skill-pack", ".mcp.json"),
    JSON.stringify(
      { mcpServers: { "probe-echo": { command: "node", args: ["-e", "process.exit(0)"] } } },
      null,
      2,
    ),
  );
  write(
    path.join(PLAIN, "probe-plain", "SKILL.md"),
    "---\nname: probe-plain\ndescription: Plain shared-skill fixture mirroring data/skills/<key>.\n---\n\n# Probe Plain\n",
  );
  fs.mkdirSync(HOME, { recursive: true });
}

function startServer() {
  const child = spawn(EXE, ["app-server"], {
    env: { ...process.env, CODEX_HOME: HOME },
    cwd: FIX,
    stdio: ["pipe", "pipe", "pipe"],
  });
  const state = { child, buf: "", nextId: 1, pending: new Map(), stderr: "", notifications: [] };
  child.stderr.on("data", (d) => {
    state.stderr += d.toString();
  });
  child.stdout.on("data", (chunk) => {
    state.buf += chunk.toString();
    let idx;
    while ((idx = state.buf.indexOf("\n")) >= 0) {
      const line = state.buf.slice(0, idx).trim();
      state.buf = state.buf.slice(idx + 1);
      if (!line) continue;
      let msg;
      try {
        msg = JSON.parse(line);
      } catch {
        continue;
      }
      if (msg.id !== undefined && (msg.result !== undefined || msg.error !== undefined)) {
        const settle = state.pending.get(msg.id);
        if (settle) {
          state.pending.delete(msg.id);
          settle(msg);
        }
      } else if (msg.id !== undefined && msg.method) {
        // 探针不处理审批类服务端请求，直接空响应避免阻塞。
        child.stdin.write(JSON.stringify({ jsonrpc: "2.0", id: msg.id, result: {} }) + "\n");
      } else if (msg.method) {
        state.notifications.push(msg.method);
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
    state.pending.set(id, (msg) => {
      clearTimeout(timer);
      resolve(
        msg.error
          ? { status: "ERROR", code: msg.error.code, message: msg.error.message }
          : { status: "OK", result: msg.result },
      );
    });
    state.child.stdin.write(
      JSON.stringify({ jsonrpc: "2.0", id, method, params: params ?? {} }) + "\n",
    );
  });
}

const notify = (state, method, params) =>
  state.child.stdin.write(JSON.stringify({ jsonrpc: "2.0", method, params: params ?? {} }) + "\n");

const MARKETPLACE = path.join(FIX, ".agents", "plugins", "marketplace.json");
const skillNames = (result) =>
  (result?.data ?? []).flatMap((d) => (d.skills ?? []).map((s) => s.name));

async function main() {
  buildFixture();
  const state = startServer();
  const report = [];
  const log = (label, r, note) => {
    report.push({ label, status: r.status, code: r.code, message: r.message, note });
    console.log(`${r.status.padEnd(7)} ${label}${note ? "  -> " + note : ""}`);
    if (r.status === "ERROR") console.log(`        ${r.code}: ${r.message}`);
  };
  const run = async (label, method, params, note) => {
    const r = await call(state, method, params);
    log(label, r, note ? note(r) : undefined);
    return r;
  };

  log(
    "initialize",
    await call(state, "initialize", {
      clientInfo: { name: "syntropy-probe", version: "0.1.0" },
      capabilities: { experimentalApi: true },
    }),
  );
  notify(state, "initialized", {});

  await run(
    "skills/list (baseline)",
    "skills/list",
    { cwds: [FIX], forceReload: true },
    (r) => `${skillNames(r.result).length} skills`,
  );
  await run("skills/extraRoots/set (plain dir)", "skills/extraRoots/set", { extraRoots: [PLAIN] });
  await run(
    "skills/list (plain extra root)",
    "skills/list",
    { cwds: [FIX], forceReload: true },
    (r) =>
      `probe skills: ${
        skillNames(r.result)
          .filter((n) => n.includes("probe"))
          .join(", ") || "(none)"
      }`,
  );

  await run(
    "marketplace/add",
    "marketplace/add",
    { source: FIX },
    (r) => `installedRoot=${r.result?.installedRoot} alreadyAdded=${r.result?.alreadyAdded}`,
  );
  await run(
    "plugin/list",
    "plugin/list",
    { cwds: [FIX] },
    (r) => `${(r.result?.marketplaces ?? []).length} marketplaces`,
  );
  await run(
    "plugin/install",
    "plugin/install",
    { pluginName: "probe-skill-pack", marketplacePath: MARKETPLACE },
    (r) => `authPolicy=${r.result?.authPolicy}`,
  );
  await run(
    "plugin/installed",
    "plugin/installed",
    { cwds: [FIX] },
    (r) => `${(r.result?.marketplaces ?? []).flatMap((m) => m.plugins ?? []).length} installed`,
  );
  await run(
    "plugin/read",
    "plugin/read",
    { pluginName: "probe-skill-pack", marketplacePath: MARKETPLACE },
    (r) => `id=${r.result?.plugin?.summary?.id} enabled=${r.result?.plugin?.summary?.enabled}`,
  );
  await run("plugin/reconcile", "plugin/reconcile", { reason: "syntropy-probe" });
  await run(
    "skills/list (after install)",
    "skills/list",
    { cwds: [FIX], forceReload: true },
    (r) =>
      `probe skills: ${
        skillNames(r.result)
          .filter((n) => n.includes("probe"))
          .join(", ") || "(none)"
      }`,
  );
  await run("mcpServerStatus/list", "mcpServerStatus/list", {}, (r) => {
    const servers = r.result?.data ?? [];
    return servers.map((s) => `${s.name}(pluginId=${s.pluginId ?? "null"})`).join(", ") || "(none)";
  });
  await run(
    "skills/config/write (disable)",
    "skills/config/write",
    { enabled: false, name: "probe-skill-pack:probe-skill" },
    (r) => `effectiveEnabled=${r.result?.effectiveEnabled}`,
  );
  await run(
    "skills/config/write (enable)",
    "skills/config/write",
    { enabled: true, name: "probe-skill-pack:probe-skill" },
    (r) => `effectiveEnabled=${r.result?.effectiveEnabled}`,
  );

  const ef = await run("experimentalFeature/list", "experimentalFeature/list", {}, (r) => {
    const feats = r.result?.data ?? [];
    const pick = feats.filter((f) =>
      /^(plugins|apps|hooks|remote_plugin|recommended_plugins|enable_mcp_apps)$/.test(f.name),
    );
    return pick.map((f) => `${f.name}=${f.stage}/${f.enabled}`).join(" ");
  });

  await run("plugin/uninstall", "plugin/uninstall", {
    pluginId: "probe-skill-pack@syntropy-probe",
  });
  await run(
    "plugin/installed (after uninstall)",
    "plugin/installed",
    { cwds: [FIX] },
    (r) => `${(r.result?.marketplaces ?? []).length} marketplaces`,
  );
  await run("marketplace/remove", "marketplace/remove", { marketplaceName: "syntropy-probe" });

  state.child.kill();
  const out = path.join(WORK, "probe-report.json");
  fs.writeFileSync(
    out,
    JSON.stringify(
      { exe: EXE, work: WORK, report, notifications: state.notifications, stderr: state.stderr },
      null,
      2,
    ),
  );
  const ok = report.filter((r) => r.status === "OK").length;
  console.log(`\n${ok}/${report.length} 调用成功；完整结果: ${out}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
