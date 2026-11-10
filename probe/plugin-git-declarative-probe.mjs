#!/usr/bin/env node
// Codex app-server「声明式 Git 来源」探活。
//
// 背景：plugin-config-probe.mjs 证明「只写 config.toml 的 [marketplaces.*] /
// [plugins."id@marketplace"]」能让 **local** 来源的插件生效。plugin-git-config-probe.mjs
// 证明 Git 来源写进 config.toml 的键是 source_type/source/ref/sparse_paths，
// 但同样声明式的 Git 来源下 plugin/installed 为空、plugins/cache 为空。
//
// 这里只回答一个问题：**声明式 Git 来源为什么没生效？**
//   A. 只写声明式配置 → plugin/list、plugin/installed、reconcile、目录状态；
//   B. 在同一份声明式配置上补一次 marketplace/add（= 让 codex 真正去拉取），
//      再 reconcile，看是否生效；
//   C. 对照组：把同一个 marketplace 改写成 source_type="local" + 本地镜像路径
//      （Master 镜像方案的形态），确认声明式 local 来源在 Git 内容上同样生效。
//
// 用法：
//   node codex_app_rev/probe/plugin-git-declarative-probe.mjs <codex 可执行文件路径> [Git 来源]
//
// 只操作自己创建的临时 CODEX_HOME，不触碰用户的 ~/.codex。

import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const EXE = process.argv[2] ? path.resolve(process.argv[2]) : "";
if (!EXE || !fs.existsSync(EXE)) {
  console.error("用法: node plugin-git-declarative-probe.mjs <codex 可执行文件路径> [Git 来源]");
  process.exit(2);
}
const SOURCE = process.argv[3] ?? "hashgraph-online/awesome-codex-plugins";
const PLUGIN = process.argv[4] ?? "a-team@awesome-codex-plugins";
const MARKETPLACE = "awesome-codex-plugins";
const WORK = path.join(os.tmpdir(), "codex-plugin-git-declarative-probe");
const FIX = path.join(WORK, "cwd");
const MIRROR = path.join(WORK, "mirror");
let HOME = path.join(WORK, "codex-home");
let CONFIG = path.join(HOME, "config.toml");

const setHome = (name) => {
  HOME = path.join(WORK, name);
  CONFIG = path.join(HOME, "config.toml");
};
const write = (p, body) => {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, body, "utf8");
};

function startServer() {
  const child = spawn(EXE, ["app-server"], {
    env: {
      ...process.env,
      CODEX_HOME: HOME,
      GIT_CONFIG_COUNT: "1",
      GIT_CONFIG_KEY_0: "core.longpaths",
      GIT_CONFIG_VALUE_0: "true",
    },
    cwd: FIX,
    stdio: ["pipe", "pipe", "pipe"],
  });
  const state = { child, buf: "", nextId: 1, pending: new Map(), stderr: "" };
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

async function openSession() {
  const state = startServer();
  await call(state, "initialize", {
    clientInfo: { name: "syntropy-git-declarative-probe", version: "0.1.0" },
    capabilities: { experimentalApi: true },
  });
  notify(state, "initialized", {});
  return state;
}

const report = [];
const log = (label, r, note) => {
  const text = typeof note === "function" ? note(r) : note;
  report.push({ label, status: r.status, code: r.code, message: r.message, note: text });
  console.log(`${r.status.padEnd(7)} ${label}${text ? "  -> " + text : ""}`);
  if (r.status === "ERROR") console.log(`        ${r.code}: ${r.message}`);
  return r;
};

const pluginIds = (result) =>
  (result?.marketplaces ?? []).flatMap((m) =>
    (m.plugins ?? []).map(
      (p) => `${p.summary?.id ?? p.name}@${m.name}:enabled=${p.summary?.enabled}`,
    ),
  );
const marketplaces = (result) =>
  (result?.marketplaces ?? []).map((m) => `${m.name}(${m.path ?? "no-path"})`);
const skillNames = (result) =>
  (result?.data ?? []).flatMap((d) => (d.skills ?? []).map((s) => s.name));

// tree 列出 CODEX_HOME 里与 marketplace/plugin 相关的目录，用来看「有没有真去拉取」。
function tree(limit = 40) {
  const out = [];
  const walk = (dir, depth) => {
    if (!fs.existsSync(dir) || out.length >= limit) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      out.push(path.relative(HOME, full) + (entry.isDirectory() ? "/" : ""));
      if (entry.isDirectory() && depth < 3 && entry.name !== ".git") walk(full, depth + 1);
      if (out.length >= limit) return;
    }
  };
  for (const rel of [".tmp/marketplaces", "plugins"]) walk(path.join(HOME, ...rel.split("/")), 0);
  return out;
}

const configText = (entries) =>
  [
    'approval_policy = "never"',
    'sandbox_mode = "danger-full-access"',
    'project_root_markers = [".syntropy"]',
    "",
    `[marketplaces.${JSON.stringify(MARKETPLACE)}]`,
    ...entries,
    "",
    `[plugins.${JSON.stringify(PLUGIN)}]`,
    "enabled = true",
    "",
  ].join("\n");

async function main() {
  fs.rmSync(WORK, { recursive: true, force: true });
  fs.mkdirSync(FIX, { recursive: true });
  console.log(`Git 来源: ${SOURCE}\n插件: ${PLUGIN}\n`);

  // --- A: 纯声明式 Git 来源 ---
  setHome("codex-home-git");
  write(CONFIG, configText(['source_type = "git"', `source = ${JSON.stringify(SOURCE)}`]));
  let state = await openSession();
  log(
    "A plugin/list",
    await call(state, "plugin/list", { cwds: [FIX] }),
    (r) => marketplaces(r.result).join(", ") || "(none)",
  );
  log(
    "A plugin/installed",
    await call(state, "plugin/installed", { cwds: [FIX] }),
    (r) => pluginIds(r.result).join(", ") || "(none)",
  );
  log(
    "A plugin/reconcile",
    await call(state, "plugin/reconcile", { reason: "declarative-git" }),
    (r) => JSON.stringify(r.result ?? {}),
  );
  log(
    "A plugin/installed（reconcile 后）",
    await call(state, "plugin/installed", { cwds: [FIX] }),
    (r) => pluginIds(r.result).join(", ") || "(none)",
  );
  log(
    "A skills/list",
    await call(state, "skills/list", { cwds: [FIX], forceReload: true }),
    (r) => skillNames(r.result).length + " skills",
  );
  console.log(`        A 目录: ${tree().join(" | ") || "(empty)"}`);
  if (state.stderr.trim())
    console.log(`        A stderr: ${state.stderr.trim().split("\n").slice(-6).join(" / ")}`);
  state.child.kill();

  // --- B: 同一份声明式配置 + 补一次 marketplace/add ---
  setHome("codex-home-git-add");
  write(CONFIG, configText(['source_type = "git"', `source = ${JSON.stringify(SOURCE)}`]));
  state = await openSession();
  log("B marketplace/add", await call(state, "marketplace/add", { source: SOURCE }), (r) =>
    JSON.stringify(r.result ?? {}).slice(0, 200),
  );
  log(
    "B plugin/list",
    await call(state, "plugin/list", { cwds: [FIX] }),
    (r) => marketplaces(r.result).join(", ") || "(none)",
  );
  log(
    "B plugin/installed",
    await call(state, "plugin/installed", { cwds: [FIX] }),
    (r) => pluginIds(r.result).join(", ") || "(none)",
  );
  log(
    "B plugin/reconcile",
    await call(state, "plugin/reconcile", { reason: "declarative-git-add" }),
    (r) => JSON.stringify(r.result ?? {}),
  );
  log(
    "B skills/list",
    await call(state, "skills/list", { cwds: [FIX], forceReload: true }),
    (r) =>
      skillNames(r.result)
        .filter((n) => n.includes(":"))
        .slice(0, 6)
        .join(", ") || "(none)",
  );
  console.log(`        B 目录: ${tree().join(" | ") || "(empty)"}`);
  state.child.kill();

  // --- C: 把 Git 内容镜像到本地目录，声明式 local 来源 ---
  const git = (...args) => {
    const r = spawnSyncGit(args);
    if (r.status !== 0) throw new Error(`git ${args.join(" ")} failed: ${r.stderr || r.stdout}`);
    return r.stdout.trim();
  };
  fs.mkdirSync(MIRROR, { recursive: true });
  git(
    "clone",
    "--depth",
    "1",
    "--filter=blob:none",
    "--sparse",
    `https://github.com/${SOURCE}.git`,
    MIRROR,
  );
  // a-team 的插件源在 ./plugins/RBraga01/a-team（marketplace.json 里的 source.path），
  // 稀疏检出必须连插件源目录一起取，否则内容缺失、物化必然失败。
  git("-C", MIRROR, "sparse-checkout", "set", ".agents/plugins", "plugins/RBraga01/a-team");
  console.log(`\n镜像完成: ${MIRROR}`);

  setHome("codex-home-local-mirror");
  write(CONFIG, configText(['source_type = "local"', `source = ${JSON.stringify(MIRROR)}`]));
  state = await openSession();
  log(
    "C plugin/list",
    await call(state, "plugin/list", { cwds: [FIX] }),
    (r) => marketplaces(r.result).join(", ") || "(none)",
  );
  log(
    "C plugin/installed",
    await call(state, "plugin/installed", { cwds: [FIX] }),
    (r) => pluginIds(r.result).join(", ") || "(none)",
  );
  log(
    "C plugin/reconcile",
    await call(state, "plugin/reconcile", { reason: "declarative-local-mirror" }),
    (r) => JSON.stringify(r.result ?? {}),
  );
  log(
    "C plugin/installed（reconcile 后）",
    await call(state, "plugin/installed", { cwds: [FIX] }),
    (r) => pluginIds(r.result).join(", ") || "(none)",
  );
  log(
    "C skills/list",
    await call(state, "skills/list", { cwds: [FIX], forceReload: true }),
    (r) =>
      skillNames(r.result)
        .filter((n) => n.includes(":"))
        .slice(0, 6)
        .join(", ") || "(none)",
  );
  console.log(`        C 目录: ${tree().join(" | ") || "(empty)"}`);
  state.child.kill();

  const out = path.join(WORK, "git-declarative-report.json");
  fs.writeFileSync(
    out,
    JSON.stringify({ exe: EXE, source: SOURCE, plugin: PLUGIN, report }, null, 2),
  );
  const ok = report.filter((r) => r.status === "OK").length;
  console.log(`\n${ok}/${report.length} 调用成功；完整结果: ${out}`);
}

function spawnSyncGit(args) {
  return spawnSync("git", args, {
    encoding: "utf8",
    env: {
      ...process.env,
      GIT_CONFIG_COUNT: "1",
      GIT_CONFIG_KEY_0: "core.longpaths",
      GIT_CONFIG_VALUE_0: "true",
    },
  });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
