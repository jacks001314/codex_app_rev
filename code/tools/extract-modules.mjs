#!/usr/bin/env node
// extract-modules.mjs - pull the Codex desktop renderer/main bundles out of
// app.asar, classify them by UI module, beautify them and write them under
// codex_app_rev/code/<module>/<subdir>/.
//
// Usage:
//   node extract-modules.mjs <archive> <outRoot> [--inventory f.json] [--dry-run]
//                            [--no-closure] [--closure-depth N] [--jobs N] [--map module-map.json]
//                            [--only moduleA,moduleB] [--max-beautify-bytes N]
//
// Outputs per module: the formatted chunks plus _INDEX.json describing the
// provenance (archive path, original/formatted size, sha256, import graph and
// the shared bundles that were deliberately not copied).

import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import os from "node:os";
import { Worker } from "node:worker_threads";
import { AsarArchive } from "./asar.mjs";

const argv = process.argv.slice(2);
const positional = [];
const opts = {};
for (let i = 0; i < argv.length; i++) {
  const a = argv[i];
  if (a.startsWith("--")) {
    const k = a.slice(2),
      nx = argv[i + 1];
    if (nx === undefined || nx.startsWith("--")) opts[k] = true;
    else {
      opts[k] = nx;
      i++;
    }
  } else positional.push(a);
}
const num = (v, d) => (v === undefined || v === true ? d : Number(v));
const bool = (v) => Boolean(v);

const [archivePath, outRoot] = positional;
if (!archivePath || !outRoot) {
  console.error("usage: node extract-modules.mjs <archive> <outRoot> [opts]");
  process.exit(1);
}

const HERE = path.dirname(new URL(import.meta.url).pathname.replace(/^\/([A-Za-z]:)/, "$1"));
// Classification rules. --map lets you keep the map outside the skill dir so
// scripts/ stays generic; without it we fall back to ./module-map.json.
const mapPath =
  typeof opts.map === "string" ? path.resolve(opts.map) : path.join(HERE, "module-map.json");
if (!fs.existsSync(mapPath)) {
  console.error(`module map not found: ${mapPath}`);
  console.error("copy module-map.example.json to module-map.json, or pass --map <file>");
  process.exit(1);
}
const map = JSON.parse(fs.readFileSync(mapPath, "utf8"));
const ar = new AsarArchive(archivePath);

/** archive path -> { p, s, u, d, x } */
const inv = new Map();
for (const e of ar.walk())
  if (!e.dir)
    inv.set(e.path, { p: e.path, s: Number(e.node.size ?? 0), u: Boolean(e.node.unpacked) });

const baseName = (p) => path.posix.basename(p);
const stem = (p) => baseName(p).replace(/\.(js|css|mjs)$/, "");

const excludeRes = map.shared_excludes.patterns.map((s) => new RegExp(s));
const maxClosureBytes = num(opts["max-closure-bytes"], map.shared_excludes.max_closure_bytes);
const isShared = (name) => excludeRes.some((re) => re.test(name));

const rules = map.rules.map((r) => ({ ...r, re: new RegExp(r.pattern) }));
const only = bool(opts.only) ? String(opts.only).split(",").filter(Boolean) : null;

/** @returns {{module:string,subdir:string}|null} */
function classify(name) {
  for (const r of rules) if (r.re.test(name)) return { module: r.module, subdir: r.subdir };
  return null;
}

// ---------------------------------------------------------------- seeds
const ASSETS = map.asset_prefix ?? "webview/assets/";
const pathRules = map.path_rules ?? [];
const seeds = [];
for (const e of inv.values()) {
  if (e.u) continue;
  if (!/\.(js|css|mjs|json)$/.test(e.p)) continue;
  // 1) explicit path-prefix rules (Electron main process bundles, locales)
  const pr = pathRules.find((r) => e.p.startsWith(r.prefix));
  if (pr) {
    if (only && !only.includes(pr.module)) continue;
    seeds.push({ ...e, module: pr.module, subdir: pr.subdir, via: `path:${pr.prefix}` });
    continue;
  }
  // 2) renderer chunks under webview/assets, classified by chunk name
  if (!e.p.startsWith(ASSETS)) continue;
  if (!/\.(js|css)$/.test(e.p)) continue;
  const cls = classify(stem(e.p));
  if (!cls) continue;
  if (only && !only.includes(cls.module)) continue;
  seeds.push({ ...e, ...cls, via: "rule" });
}

// ------------------------------------------------------- import closure
/** Extract every local "./x.js" / "./x.css" reference from a chunk's source. */
function localRefs(text) {
  const out = new Set();
  const re = /["']\.\/([^"']+?\.(?:js|css))["']/g;
  let m;
  while ((m = re.exec(text)) !== null) out.add(m[1]);
  return [...out];
}

const closureDepth = bool(opts["no-closure"]) ? 0 : num(opts["closure-depth"], 1);
/** chunk basename -> { module, subdir, via, s, p } */
const chosen = new Map();
for (const s of seeds) chosen.set(baseName(s.p), s);

const externals = new Map(); // basename -> bytes referenced but not copied
const note = (name, bytes) => {
  if (!chosen.has(name)) externals.set(name, Math.max(externals.get(name) ?? 0, bytes ?? 0));
};

if (closureDepth > 0) {
  let frontier = [...chosen.values()];
  for (let d = 0; d < closureDepth && frontier.length; d++) {
    const next = [];
    for (const f of frontier) {
      if (!f.p.endsWith(".js")) continue;
      if (f.s > 3_000_000) continue;
      if (typeof f.via === "string" && f.via.startsWith("path:")) continue;
      const text = ar.readText(f.p);
      if (text === null) continue;
      const dir = path.posix.dirname(f.p) + "/";
      for (const ref of localRefs(text)) {
        const entry = inv.get(path.posix.normalize(dir + ref));
        if (!entry) {
          note(ref, 0);
          continue;
        }
        const name = baseName(entry.p);
        if (isShared(name) || entry.s > maxClosureBytes) {
          note(name, entry.s);
          continue;
        }
        if (chosen.has(name)) continue;
        const cls = classify(stem(entry.p)) ?? { module: f.module, subdir: "_deps" };
        if (only && !only.includes(cls.module)) {
          note(name, entry.s);
          continue;
        }
        const rec = { ...entry, ...cls, via: `closure:d${d + 1}:${baseName(f.p)}` };
        chosen.set(name, rec);
        next.push(rec);
      }
    }
    frontier = next;
  }
}

const plan = [...chosen.values()].sort(
  (a, b) => a.module.localeCompare(b.module) || a.p.localeCompare(b.p),
);

// ------------------------------------------------- stale-file cleanup
// Re-running with edited rules must not leave orphaned chunks behind: an
// earlier run may have placed the same chunk in a different subdir (e.g. a
// closure dep that a later rule now claims as a seed). Only .js/.css are
// eligible - README.md, _INDEX.json, _CATALOG.json and _SETTINGS_MAP.json are
// authored or generated by other tools and must survive.
function pruneStale(plan, outRoot, dry) {
  const wanted = new Set(
    plan.map((x) => path.join(x.module, x.subdir, baseName(x.p)).replace(/\\/g, "/")),
  );
  const modules = [...new Set(plan.map((x) => x.module))];
  const removed = [];
  for (const mod of modules) {
    const dir = path.join(outRoot, mod);
    if (!fs.existsSync(dir)) continue;
    const stack = [dir];
    while (stack.length) {
      const cur = stack.pop();
      for (const e of fs.readdirSync(cur, { withFileTypes: true })) {
        const full = path.join(cur, e.name);
        if (e.isDirectory()) {
          stack.push(full);
          continue;
        }
        if (!/\.(js|css|mjs)$/.test(e.name)) continue;
        const rel = path.relative(outRoot, full).replace(/\\/g, "/");
        if (wanted.has(rel)) continue;
        removed.push(rel);
        if (!dry) fs.unlinkSync(full);
      }
    }
  }
  // drop directories that became empty
  if (!dry)
    for (const mod of modules) {
      const dir = path.join(outRoot, mod);
      if (!fs.existsSync(dir)) continue;
      const stack = [dir];
      const all = [];
      while (stack.length) {
        const c = stack.pop();
        all.push(c);
        for (const e of fs.readdirSync(c, { withFileTypes: true }))
          if (e.isDirectory()) stack.push(path.join(c, e.name));
      }
      for (const c of all.reverse()) {
        if (c !== dir && fs.readdirSync(c).length === 0) fs.rmdirSync(c);
      }
    }
  return removed;
}
// ---------------------------------------------------------------- report
const byModule = new Map();
for (const p of plan) {
  const rec = byModule.get(p.module) ?? { files: 0, raw: 0, subdirs: new Set() };
  rec.files++;
  rec.raw += p.s;
  rec.subdirs.add(p.subdir);
  byModule.set(p.module, rec);
}
console.log(`map     : ${mapPath}`);
console.log(`archive : ${archivePath}`);
console.log(`out     : ${outRoot}`);
console.log(
  `plan    : ${plan.length} chunks, ${(plan.reduce((s, p) => s + p.s, 0) / 1048576).toFixed(1)} MB raw`,
);
for (const [m, r] of [...byModule.entries()].sort()) {
  console.log(
    `  ${m.padEnd(14)} ${String(r.files).padStart(4)} files  ${(r.raw / 1048576).toFixed(2).padStart(7)} MB  [${[...r.subdirs].join(", ")}]`,
  );
}
console.log(`shared/external refs not copied: ${externals.size}`);

const stale = pruneStale(plan, outRoot, bool(opts["dry-run"]));
if (stale.length)
  console.log(
    `stale chunks ${bool(opts["dry-run"]) ? "would be" : ""} removed: ${stale.length}${stale.length <= 6 ? " (" + stale.join(", ") + ")" : ""}`,
  );

if (bool(opts["dry-run"])) {
  fs.mkdirSync(path.join(outRoot, "_plan"), { recursive: true });
  fs.writeFileSync(
    path.join(outRoot, "_plan", "plan.json"),
    JSON.stringify({ plan, externals: [...externals.entries()] }, null, 1),
  );
  console.log(`\n[dry-run] plan written to ${path.join(outRoot, "_plan", "plan.json")}`);
  ar.close();
  process.exit(0);
}

// ------------------------------------------------------------- beautify
const jobs = num(opts.jobs, Math.max(2, Math.min(8, os.cpus().length - 1)));
const maxBeautify = num(opts["max-beautify-bytes"], 1_500_000);

/** Write the raw bytes of a planned chunk into the scratch dir for workers. */
const scratch = path.join(outRoot, ".scratch");
fs.rmSync(scratch, { recursive: true, force: true });
fs.mkdirSync(scratch, { recursive: true });

const tasks = plan.map((p, idx) => {
  const rel = path.join(p.module, p.subdir, baseName(p.p));
  const rawPath = path.join(scratch, `${idx}.raw`);
  const buf = ar.read(p.p);
  fs.writeFileSync(rawPath, buf);
  return {
    idx,
    archivePath: p.p,
    rel,
    rawPath,
    outPath: path.join(outRoot, rel),
    usePrettier: p.s <= maxBeautify,
    sha256: crypto.createHash("sha256").update(buf).digest("hex"),
    rawSize: p.s,
    module: p.module,
    subdir: p.subdir,
    via: p.via,
  };
});
ar.close();

const workerSrc = `
const { parentPort } = require("node:worker_threads");
const fs = require("node:fs");
let prettier = null;
async function loadPrettier() {
  if (prettier) return prettier;
  prettier = await import(process.env.PRETTIER_ENTRY);
  return prettier;
}
parentPort.on("message", async (t) => {
  try {
    const src = fs.readFileSync(t.rawPath, "utf8");
    let out = null, how = "light";
    if (t.usePrettier) {
      try {
        const p = await loadPrettier();
        const ext = t.rel.slice(t.rel.lastIndexOf("."));
        const parser = ext === ".css" ? "css" : ext === ".json" ? "json" : "babel";
        out = await p.format(src, { parser, printWidth: 110, singleQuote: false });
        how = "prettier";
      } catch (e) { out = null; }
    }
    if (out === null) {
      const { lightFormat } = await import(process.env.LIGHTFORMAT_ENTRY);
      out = lightFormat(src);
    }
    fs.mkdirSync(require("node:path").dirname(t.outPath), { recursive: true });
    fs.writeFileSync(t.outPath, out);
    parentPort.postMessage({ idx: t.idx, ok: true, how, outSize: Buffer.byteLength(out) });
  } catch (e) {
    parentPort.postMessage({ idx: t.idx, ok: false, error: String(e && e.message || e) });
  }
});
parentPort.postMessage({ ready: true });
`;
const workerFile = path.join(scratch, "beautify-worker.cjs");
fs.writeFileSync(workerFile, workerSrc);

process.env.PRETTIER_ENTRY =
  "file:///D:/qax/reagent/dev/git/Syntropy/desktop_app/node_modules/prettier/index.mjs";
process.env.LIGHTFORMAT_ENTRY = "file:///" + path.join(HERE, "lightformat.mjs").replace(/\\/g, "/");

const results = new Array(tasks.length);
let cursor = 0,
  done = 0;
const t0 = Date.now();

await new Promise((resolve, reject) => {
  let live = 0;
  const pump = () => {
    while (live < jobs && cursor < tasks.length) {
      const t = tasks[cursor++];
      const w = new Worker(workerFile);
      live++;
      let started = false;
      w.on("message", (m) => {
        if (m.ready && !started) {
          started = true;
          w.postMessage(t);
          return;
        }
        results[t.idx] = m;
        done++;
        if (done % 25 === 0 || done === tasks.length) {
          process.stderr.write(
            `\r  formatted ${done}/${tasks.length}  (${((Date.now() - t0) / 1000).toFixed(0)}s)   `,
          );
        }
        w.terminate();
        live--;
        if (done === tasks.length && live === 0) resolve();
        else pump();
      });
      w.on("error", (e) => {
        results[t.idx] = { idx: t.idx, ok: false, error: String(e.message) };
        done++;
        live--;
        if (done === tasks.length) resolve();
        else pump();
      });
    }
    if (tasks.length === 0) resolve();
  };
  pump();
});
process.stderr.write("\n");

// ---------------------------------------------------------------- index
const failed = results.filter((r) => !r || !r.ok);
if (failed.length)
  console.error(
    `! ${failed.length} chunks failed to format: ${failed
      .slice(0, 8)
      .map((f) => tasks[f?.idx ?? 0]?.rel)
      .join(", ")}`,
  );

for (const mod of byModule.keys()) {
  const items = tasks.filter((t) => t.module === mod);
  const index = {
    module: mod,
    generated_at: new Date().toISOString(),
    source_archive: archivePath,
    app_version: map.version_target,
    files: items.map((t) => ({
      archive_path: t.archivePath,
      file: path.posix.join(t.subdir, path.basename(t.rel)),
      selected_by: t.via,
      raw_bytes: t.rawSize,
      formatted_bytes: results[t.idx]?.outSize ?? 0,
      formatter: results[t.idx]?.how ?? "failed",
      sha256_raw: t.sha256,
    })),
  };
  fs.mkdirSync(path.join(outRoot, mod), { recursive: true });
  fs.writeFileSync(path.join(outRoot, mod, "_INDEX.json"), JSON.stringify(index, null, 1));
}

fs.writeFileSync(
  path.join(outRoot, "_MODULE_INDEX.json"),
  JSON.stringify(
    {
      generated_at: new Date().toISOString(),
      app_version: map.version_target,
      source_archive: archivePath,
      modules: [...byModule.entries()]
        .map(([m, r]) => ({
          module: m,
          files: r.files,
          raw_bytes: r.raw,
          subdirs: [...r.subdirs].sort(),
        }))
        .sort((a, b) => a.module.localeCompare(b.module)),
      shared_external_refs: [...externals.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 400)
        .map(([name, bytes]) => ({ name, bytes })),
      totals: {
        chunks: plan.length,
        raw_bytes: plan.reduce((s, p) => s + p.s, 0),
        formatted_bytes: results.reduce((s, r) => s + (r?.outSize ?? 0), 0),
      },
    },
    null,
    1,
  ),
);

fs.rmSync(scratch, { recursive: true, force: true });
console.log(`done: ${plan.length - failed.length}/${plan.length} chunks written under ${outRoot}`);
