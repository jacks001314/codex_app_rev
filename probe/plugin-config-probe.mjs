#!/usr/bin/env node
// Codex app-server「声明式插件配置」探活。
//
// 问题：Node 能不能只写 per-agent CODEX_HOME/config.toml 的
// [marketplaces.*] / [plugins."<id>"] 段落，然后靠 plugin/reconcile 让插件
// 生效？还是必须先走 marketplace/add + plugin/install 两个 RPC？
//
// 脚本手写 config.toml（完全不调用 marketplace/add、plugin/install），
// 只调 plugin/installed、plugin/read、plugin/reconcile、skills/list、
// mcpServerStatus/list，对比「只写配置」这一条路是否成立。
//
// 用法：
//   node codex_app_rev/probe/plugin-config-probe.mjs <codex 可执行文件路径> [工作目录]
//
// 只操作自己创建的临时 CODEX_HOME 与 fixture，不触碰用户的 ~/.codex。

import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const EXE = process.argv[2] ? path.resolve(process.argv[2]) : "";
if (!EXE || !fs.existsSync(EXE)) {
  console.error("用法: node plugin-config-probe.mjs <codex 可执行文件路径> [工作目录]");
  process.exit(2);
}
const WORK = path.resolve(process.argv[3] ?? path.join(os.tmpdir(), "codex-plugin-config-probe"));
const FIX = path.join(WORK, "fixture");
const HOME = path.join(WORK, "codex-home");
const CONFIG = path.join(HOME, "config.toml");

const write = (p, body) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body, "utf8");
};

// TOML 字面量字符串：Windows 路径里的反斜杠不需要转义。
const tomlLiteral = (value) => `'${String(value).replace(/'/g, "")}'`;

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
}

// writeDeclarativeConfig 手写节点会生成的 config.toml：模型/沙箱段 + 插件声明。
function writeDeclarativeConfig(enabled) {
  fs.mkdirSync(HOME, { recursive: true });
  write(
    CONFIG,
    [
      'approval_policy = "never"',
      'sandbox_mode = "danger-full-access"',
      'project_root_markers = [".syntropy"]',
      "",
      "[marketplaces.syntropy-probe]",
      'source_type = "local"',
      `source = ${tomlLiteral(FIX)}`,
      "",
      '[plugins."probe-skill-pack@syntropy-probe"]',
      `enabled = ${enabled ? "true" : "false"}`,
      "",
    ].join("\n"),
  );
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

const skillNames = (result) =>
  (result?.data ?? []).flatMap((d) => (d.skills ?? []).map((s) => s.name));
const installedPlugins = (result) =>
  (result?.marketplaces ?? []).flatMap((m) =>
    (m.plugins ?? []).map((p) => `${p.summary?.id ?? p.name}:enabled=${p.summary?.enabled}`),
  );

// cacheRoot 列出插件内容是否真的物化到了 CODEX_HOME。
function cacheEntries() {
  const root = path.join(HOME, "plugins", "cache");
  if (!fs.existsSync(root)) return ["(no plugins/cache)"];
  const out = [];
  const walk = (dir, depth) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      out.push(path.relative(root, full));
      if (entry.isDirectory() && depth < 3) walk(full, depth + 1);
    }
  };
  walk(root, 0);
  return out.slice(0, 20);
}

const report = [];
const log = (label, r, note) => {
  report.push({ label, status: r.status, code: r.code, message: r.message, note });
  console.log(`${r.status.padEnd(7)} ${label}${note ? "  -> " + note : ""}`);
  if (r.status === "ERROR") console.log(`        ${r.code}: ${r.message}`);
};

async function session(enabled, steps) {
  writeDeclarativeConfig(enabled);
  const state = startServer();
  log(
    `initialize (enabled=${enabled})`,
    await call(state, "initialize", {
      clientInfo: { name: "syntropy-probe", version: "0.1.0" },
      capabilities: { experimentalApi: true },
    }),
  );
  notify(state, "initialized", {});
  for (const step of steps) {
    const r = await call(state, step.method, step.params);
    log(`${step.label} (enabled=${enabled})`, r, step.note ? step.note(r) : undefined);
  }
  state.child.kill();
  return state;
}

async function main() {
  buildFixture();

  await session(true, [
    {
      label: "plugin/installed（仅靠 config.toml）",
      method: "plugin/installed",
      params: { cwds: [FIX] },
      note: (r) => installedPlugins(r.result).join(", ") || "(none)",
    },
    {
      label: "plugin/list",
      method: "plugin/list",
      params: { cwds: [FIX] },
      note: (r) => `${(r.result?.marketplaces ?? []).length} marketplaces`,
    },
    {
      label: "plugin/reconcile",
      method: "plugin/reconcile",
      params: { reason: "declarative-probe" },
      note: (r) => JSON.stringify(r.result ?? {}).slice(0, 200),
    },
    {
      label: "plugin/installed（reconcile 后）",
      method: "plugin/installed",
      params: { cwds: [FIX] },
      note: (r) => installedPlugins(r.result).join(", ") || "(none)",
    },
    {
      label: "plugin/read",
      method: "plugin/read",
      params: {
        pluginName: "probe-skill-pack",
        marketplacePath: path.join(FIX, ".agents", "plugins", "marketplace.json"),
      },
      note: (r) =>
        `id=${r.result?.plugin?.summary?.id} enabled=${r.result?.plugin?.summary?.enabled}`,
    },
    {
      label: "skills/list",
      method: "skills/list",
      params: { cwds: [FIX], forceReload: true },
      note: (r) =>
        skillNames(r.result)
          .filter((n) => n.includes("probe"))
          .join(", ") || "(none)",
    },
    {
      label: "mcpServerStatus/list",
      method: "mcpServerStatus/list",
      params: {},
      note: (r) =>
        (r.result?.data ?? [])
          .map((s) => `${s.name}(pluginId=${s.pluginId ?? "null"})`)
          .join(", ") || "(none)",
    },
    {
      label: "marketplace/add（重复注册）",
      method: "marketplace/add",
      params: { source: FIX },
      note: (r) => `alreadyAdded=${r.result?.alreadyAdded}`,
    },
  ]);
  console.log(`        plugins/cache: ${cacheEntries().join(" | ")}`);

  await session(false, [
    {
      label: "plugin/read（enabled=false）",
      method: "plugin/read",
      params: {
        pluginName: "probe-skill-pack",
        marketplacePath: path.join(FIX, ".agents", "plugins", "marketplace.json"),
      },
      note: (r) =>
        `id=${r.result?.plugin?.summary?.id} enabled=${r.result?.plugin?.summary?.enabled}`,
    },
    {
      label: "skills/list（enabled=false）",
      method: "skills/list",
      params: { cwds: [FIX], forceReload: true },
      note: (r) =>
        skillNames(r.result)
          .filter((n) => n.includes("probe"))
          .join(", ") || "(none)",
    },
  ]);

  const after = fs.existsSync(CONFIG) ? fs.readFileSync(CONFIG, "utf8") : "(config.toml missing)";
  console.log("\n--- codex 回写后的 config.toml ---");
  console.log(after.trim());

  const out = path.join(WORK, "config-probe-report.json");
  fs.writeFileSync(
    out,
    JSON.stringify({ exe: EXE, work: WORK, report, configAfter: after }, null, 2),
  );
  const ok = report.filter((r) => r.status === "OK").length;
  console.log(`\n${ok}/${report.length} 调用成功；完整结果: ${out}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
