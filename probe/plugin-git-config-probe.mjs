#!/usr/bin/env node
// Codex app-server「Git 来源插件声明」配置键探活。
//
// 问题：Node 要写出 [marketplaces.*] 的 Git 来源声明，但 config.toml 里的键名
// 只在 local 来源上被证实过。这里做三段验证：
//   A1. marketplace/add 注册 Git 来源（只给 source），读回 codex 自己写出的
//       config.toml，确认 source_type / source 的取值与写法；
//   A2. 再注册一次并带 refName，确认分支/标签写到哪个键；
//   A3. 再注册一次并带 refName + sparsePaths，确认稀疏检出写到哪个键；
//   B.  用 A2/A3 拿到的键名手写 config.toml（不调 marketplace/add、
//       plugin/install），确认 plugin/reconcile 仍能把 Git 插件物化并生效。
//
// 用法：
//   node codex_app_rev/probe/plugin-git-config-probe.mjs <codex 可执行文件路径> [Git 来源]
//
// 默认来源是 hashgraph-online/awesome-codex-plugins（需网络）；只操作自己创建的
// 临时 CODEX_HOME，不触碰用户的 ~/.codex。

import { spawn } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const EXE = process.argv[2] ? path.resolve(process.argv[2]) : "";
if (!EXE || !fs.existsSync(EXE)) {
  console.error("用法: node plugin-git-config-probe.mjs <codex 可执行文件路径> [Git 来源]");
  process.exit(2);
}
const SOURCE = process.argv[3] ?? "hashgraph-online/awesome-codex-plugins";
const WORK = path.join(os.tmpdir(), "codex-plugin-git-probe");
const FIX = path.join(WORK, "cwd");
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
const readConfig = () => (fs.existsSync(CONFIG) ? fs.readFileSync(CONFIG, "utf8") : "(missing)");

function startServer() {
  const child = spawn(EXE, ["app-server"], {
    env: {
      ...process.env,
      CODEX_HOME: HOME,
      // codex 用 git 子进程克隆来源，长路径仓库在 Windows 上会 checkout 失败；
      // 这里通过 git 的 GIT_CONFIG_* 环境变量把 core.longpaths 传给子进程。
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
    clientInfo: { name: "syntropy-git-probe", version: "0.1.0" },
    capabilities: { experimentalApi: true },
  });
  notify(state, "initialized", {});
  return state;
}

const report = [];
// log 接受字符串或 (result) => string 两种形式的说明文本。
const log = (label, r, note) => {
  const text = typeof note === "function" ? note(r) : note;
  report.push({ label, status: r.status, code: r.code, message: r.message, note: text });
  console.log(`${r.status.padEnd(7)} ${label}${text ? "  -> " + text : ""}`);
  if (r.status === "ERROR") console.log(`        ${r.code}: ${r.message}`);
  return r;
};

// marketplaceSections 从 config.toml 文本里截出 [marketplaces.*] 段落。
function marketplaceSections(text) {
  const lines = text.split(/\r?\n/);
  const out = [];
  let current = null;
  for (const line of lines) {
    const header = /^\[(.+)\]\s*$/.exec(line);
    if (header) {
      current = /^marketplaces[.[]/.test(header[1]) ? { header: header[1], body: [] } : null;
      if (current) out.push(current);
      continue;
    }
    if (current && line.trim() !== "") current.body.push(line);
  }
  return out;
}

function parseSection(section) {
  const keys = {};
  for (const line of section.body) {
    const m = /^([A-Za-z0-9_-]+)\s*=\s*(.*)$/.exec(line);
    if (m) keys[m[1]] = m[2];
  }
  const nameMatch = /^marketplaces\.(?:"(.+)"|(.+))$/.exec(section.header);
  return { keys, name: nameMatch ? (nameMatch[1] ?? nameMatch[2]) : section.header };
}

const pluginIds = (result) =>
  (result?.marketplaces ?? []).flatMap((m) =>
    (m.plugins ?? []).map((p) => ({
      id: p.summary?.id ?? p.name,
      name: p.name,
      marketplace: m.name,
      enabled: p.summary?.enabled,
    })),
  );

const skillNames = (result) =>
  (result?.data ?? []).flatMap((d) => (d.skills ?? []).map((s) => s.name));

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
  return out.slice(0, 30);
}

// registerAndDump 在一个全新 CODEX_HOME 里注册来源，返回 codex 写出的 marketplace 段。
async function registerAndDump(label, homeName, params) {
  setHome(homeName);
  write(
    CONFIG,
    ['approval_policy = "never"', 'sandbox_mode = "danger-full-access"', ""].join("\n"),
  );
  const state = await openSession();
  const added = log(label, await call(state, "marketplace/add", params), (r) =>
    JSON.stringify(r.result ?? {}).slice(0, 300),
  );
  const listed = await call(state, "plugin/list", { cwds: [FIX] });
  state.child.kill();
  const sections = marketplaceSections(readConfig());
  console.log(`--- ${label} 写出的 [marketplaces.*] ---`);
  for (const section of sections) console.log(`[${section.header}]\n${section.body.join("\n")}`);
  console.log("");
  const parsed = sections[0] ? parseSection(sections[0]) : null;
  return { added, listed, parsed, plugins: pluginIds(listed.result) };
}

async function main() {
  fs.rmSync(WORK, { recursive: true, force: true });
  fs.mkdirSync(FIX, { recursive: true });
  console.log(`Git 来源: ${SOURCE}\n`);

  const noRef = await registerAndDump("marketplace/add (git, 无 ref)", "codex-home", {
    source: SOURCE,
  });
  const withRef = await registerAndDump("marketplace/add (git, refName=main)", "codex-home-ref", {
    source: SOURCE,
    refName: "main",
  });
  const withSparse = await registerAndDump(
    "marketplace/add (git, refName=main, sparsePaths)",
    "codex-home-sparse",
    {
      source: SOURCE,
      refName: "main",
      // 稀疏检出必须覆盖 marketplace.json 所在目录，否则 codex 报
      // 「marketplace root does not contain a supported manifest」。
      sparsePaths: [".agents/plugins", "plugins"],
    },
  );

  const chosen = withSparse.parsed ? withSparse : withRef.parsed ? withRef : noRef;
  const declarativeSource = chosen.parsed;
  const first = (withSparse.plugins.length ? withSparse.plugins : noRef.plugins)[0];

  let declarative = "";
  let reconcile = null;
  if (declarativeSource && first) {
    setHome("codex-home-declarative");
    declarative = [
      'approval_policy = "never"',
      'sandbox_mode = "danger-full-access"',
      'project_root_markers = [".syntropy"]',
      "",
      `[marketplaces.${JSON.stringify(declarativeSource.name)}]`,
      ...(chosen.parsed
        ? Object.entries(declarativeSource.keys).map(([k, v]) => `${k} = ${v}`)
        : []),
      "",
      `[plugins.${JSON.stringify(`${first.name}@${declarativeSource.name}`)}]`,
      "enabled = true",
      "",
    ].join("\n");
    write(CONFIG, declarative);
    console.log("--- 手写的声明式 config.toml（Git 来源，未调 marketplace/add）---");
    console.log(declarative.trim());
    console.log("");

    const state = await openSession();
    log(
      "plugin/installed（声明式）",
      await call(state, "plugin/installed", { cwds: [FIX] }),
      (r) =>
        pluginIds(r.result)
          .map((p) => `${p.id}:enabled=${p.enabled}`)
          .join(", ") || "(none)",
    );
    reconcile = await call(state, "plugin/reconcile", { reason: "git-declarative-probe" });
    log("plugin/reconcile（声明式）", reconcile, (r) =>
      JSON.stringify(r.result ?? {}).slice(0, 300),
    );
    log(
      "plugin/installed（reconcile 后）",
      await call(state, "plugin/installed", { cwds: [FIX] }),
      (r) =>
        pluginIds(r.result)
          .map((p) => `${p.id}:enabled=${p.enabled}`)
          .join(", ") || "(none)",
    );
    log(
      "skills/list（声明式）",
      await call(state, "skills/list", { cwds: [FIX], forceReload: true }),
      (r) =>
        skillNames(r.result)
          .filter((n) => n.includes("a-team") || n.includes("probe"))
          .join(", ") || "(none)",
    );
    log(
      "mcpServerStatus/list（声明式）",
      await call(state, "mcpServerStatus/list", {}),
      (r) =>
        (r.result?.data ?? [])
          .map((s) => `${s.name}(pluginId=${s.pluginId ?? "null"})`)
          .join(", ") || "(none)",
    );
    console.log(`        plugins/cache: ${cacheEntries().join(" | ")}`);
    state.child.kill();
  }

  const out = path.join(WORK, "git-probe-report.json");
  fs.writeFileSync(
    out,
    JSON.stringify(
      {
        exe: EXE,
        source: SOURCE,
        noRefKeys: noRef.parsed?.keys,
        withRefKeys: withRef.parsed?.keys,
        withSparseKeys: withSparse.parsed?.keys,
        declarativeConfig: declarative,
        reconcile: reconcile?.result ?? null,
        report,
      },
      null,
      2,
    ),
  );
  const ok = report.filter((r) => r.status === "OK").length;
  console.log(`\n${ok}/${report.length} 调用成功`);
  console.log(`无 ref 键: ${JSON.stringify(noRef.parsed?.keys ?? null)}`);
  console.log(`带 ref 键: ${JSON.stringify(withRef.parsed?.keys ?? null)}`);
  console.log(`带 sparse 键: ${JSON.stringify(withSparse.parsed?.keys ?? null)}`);
  console.log(`完整结果: ${out}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
