#!/usr/bin/env node
// asar-cli.mjs - inspect and extract ASAR archives without third-party deps.
//
// Usage:
//   node asar-cli.mjs ls   <archive> [--depth N] [--dir] [--filter REGEX]
//   node asar-cli.mjs tree <archive> [--depth N]
//   node asar-cli.mjs cat  <archive> <entryPath>
//   node asar-cli.mjs get  <archive> <entryPath> <destFile>
//   node asar-cli.mjs pull <archive> <destDir> [--prefix p1,p2] [--filter REGEX]
//                          [--ext .js,.css] [--max-bytes N] [--dry-run]
//   node asar-cli.mjs grep <archive> <regex> [--ext .js,.css] [--limit N] [--ctx N]

import fs from "node:fs";
import path from "node:path";
import { AsarArchive } from "./asar.mjs";

const argv = process.argv.slice(2);
const cmd = argv[0];
const positional = [];
const opts = {};
for (let i = 1; i < argv.length; i++) {
  const a = argv[i];
  if (a.startsWith("--")) {
    const key = a.slice(2);
    const next = argv[i + 1];
    if (next === undefined || next.startsWith("--")) {
      opts[key] = true;
    } else {
      opts[key] = next;
      i++;
    }
  } else positional.push(a);
}

const num = (v, d) => (v === undefined || v === true ? d : Number(v));
const list = (v) => (v === undefined || v === true ? null : String(v).split(",").filter(Boolean));
const fmtBytes = (n) => {
  if (n < 1024) return `${n} B`;
  if (n < 1024 ** 2) return `${(n / 1024).toFixed(1)} KB`;
  if (n < 1024 ** 3) return `${(n / 1024 ** 2).toFixed(1)} MB`;
  return `${(n / 1024 ** 3).toFixed(2)} GB`;
};

if (!cmd || !positional[0]) {
  console.error(
    fs
      .readFileSync(new URL(import.meta.url), "utf8")
      .split("\n")
      .filter((l) => l.startsWith("//"))
      .join("\n"),
  );
  process.exit(cmd ? 0 : 1);
}

const archivePath = positional[0];
const ar = new AsarArchive(archivePath);

/** Collect entries once, shared by most subcommands. */
function collect() {
  const out = [];
  for (const e of ar.walk()) out.push(e);
  return out;
}

function passes(e, { filter, ext, prefix }) {
  if (
    prefix &&
    prefix.length &&
    !prefix.some((p) => e.path === p || e.path.startsWith(p.endsWith("/") ? p : p + "/"))
  )
    return false;
  if (
    ext &&
    ext.length &&
    !e.dir &&
    !ext.some((x) => e.path.toLowerCase().endsWith(x.toLowerCase()))
  )
    return false;
  if (filter && !filter.test(e.path)) return false;
  return true;
}

const filterRe = opts.filter && opts.filter !== true ? new RegExp(opts.filter) : null;
const prefix = list(opts.prefix);
const ext = list(opts.ext);

switch (cmd) {
  case "ls": {
    const depth = num(opts.depth, Infinity);
    let entries = collect();
    if (!opts["all"]) entries = entries.filter((e) => !e.dir);
    entries = entries.filter((e) => e.path.split("/").length <= depth);
    entries = entries.filter((e) => passes(e, { filter: filterRe, ext, prefix }));
    entries.sort((a, b) => Number(b.node.size ?? 0) - Number(a.node.size ?? 0));
    const rows = entries.slice(0, num(opts.limit, 400)).map((e) => ({
      size: e.dir ? "<DIR>" : fmtBytes(Number(e.node.size ?? 0)),
      unpacked: e.node.unpacked ? "U" : "",
      path: e.path,
    }));
    console.table(rows);
    const total = entries.reduce((s, e) => s + Number(e.node.size ?? 0), 0);
    console.error(`# ${entries.length} entries, ${fmtBytes(total)} total`);
    break;
  }
  case "tree": {
    const depth = num(opts.depth, 3);
    /** dir path -> aggregated { files, bytes, dirs } over the whole subtree */
    const dirs = new Map();
    const bump = (key) => {
      let r = dirs.get(key);
      if (!r) {
        r = { files: 0, bytes: 0, dirs: 0 };
        dirs.set(key, r);
      }
      return r;
    };
    for (const e of collect()) {
      const parts = e.path.split("/");
      if (e.dir) {
        if (parts.length <= depth) bump(e.path);
        continue;
      }
      // Attribute the file to every ancestor directory, then to a synthetic
      // "(root)" bucket when it sits at the archive root (flat archives such
      // as busy-bar.asar would otherwise report nothing).
      if (parts.length === 1) {
        const r = bump("(root)");
        r.files++;
        r.bytes += Number(e.node.size ?? 0);
        continue;
      }
      for (let i = 1; i < parts.length; i++) {
        const key = parts.slice(0, i).join("/");
        if (key.split("/").length > depth) continue;
        const r = bump(key);
        if (i === parts.length - 1) {
          r.files++;
          r.bytes += Number(e.node.size ?? 0);
        } else r.dirs++;
      }
    }
    const rows = [...dirs.entries()].sort().map(([p, v]) => ({
      path: p,
      files: v.files,
      subdirs: v.dirs,
      size: fmtBytes(v.bytes),
    }));
    console.table(rows);
    break;
  }
  case "cat": {
    const t = ar.readText(positional[1]);
    if (t === null) {
      console.error(`entry not found or unpacked: ${positional[1]}`);
      process.exit(2);
    }
    process.stdout.write(t);
    break;
  }
  case "get": {
    const src = positional[1];
    const dest = positional[2];
    const node = ar.stat(src);
    if (!node) {
      console.error(`missing: ${src}`);
      process.exit(2);
    }
    if (node.unpacked) {
      const up = archivePath + ".unpacked/" + src;
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.copyFileSync(up, dest);
      console.error(`copied (unpacked): ${src} -> ${dest}`);
      break;
    }
    ar.extractTo(src, dest);
    console.error(`extracted: ${src} -> ${dest} (${fmtBytes(Number(node.size))})`);
    break;
  }
  case "pull": {
    const destRoot = positional[1];
    const maxBytes = num(opts["max-bytes"], Infinity);
    const dry = Boolean(opts["dry-run"]);
    let n = 0,
      bytes = 0,
      skipped = 0;
    for (const e of collect()) {
      if (e.dir) continue;
      if (!passes(e, { filter: filterRe, ext, prefix })) continue;
      if (Number(e.node.size ?? 0) > maxBytes) {
        skipped++;
        continue;
      }
      const dest = path.join(destRoot, e.path);
      if (dry) {
        console.log(`${fmtBytes(Number(e.node.size)).padStart(10)}  ${e.path}`);
        n++;
        bytes += Number(e.node.size);
        continue;
      }
      if (e.node.unpacked) {
        const up = path.join(archivePath + ".unpacked", e.path);
        if (fs.existsSync(up)) {
          fs.mkdirSync(path.dirname(dest), { recursive: true });
          fs.copyFileSync(up, dest);
        } else skipped++;
      } else {
        ar.extractTo(e.path, dest);
      }
      n++;
      bytes += Number(e.node.size ?? 0);
    }
    console.error(
      `# ${dry ? "would extract" : "extracted"} ${n} entries (${fmtBytes(bytes)}), skipped ${skipped}`,
    );
    break;
  }
  case "grep": {
    const re = new RegExp(positional[1], opts.flags ?? "g");
    const ctx = num(opts.ctx, 0);
    const limit = num(opts.limit, 60);
    let hits = 0;
    for (const e of collect()) {
      if (e.dir || e.node.unpacked) continue;
      if (!passes(e, { filter: filterRe, ext, prefix })) continue;
      if (Number(e.node.size ?? 0) > 40 * 1024 * 1024) continue;
      const text = ar.readText(e.path);
      if (text === null) continue;
      const lines = text.split("\n");
      for (let i = 0; i < lines.length; i++) {
        re.lastIndex = 0;
        if (!re.test(lines[i])) continue;
        hits++;
        console.log(`\n${e.path}:${i + 1}`);
        for (let j = Math.max(0, i - ctx); j <= Math.min(lines.length - 1, i + ctx); j++) {
          const l = lines[j].length > 600 ? lines[j].slice(0, 600) + " …[truncated]" : lines[j];
          console.log(`${j === i ? ">" : " "} ${j + 1}: ${l}`);
        }
        if (hits >= limit) {
          console.error(`# hit limit ${limit} reached`);
          ar.close();
          process.exit(0);
        }
        break; // one hit per line-group per file keeps output readable
      }
    }
    console.error(`# ${hits} matching files/lines`);
    break;
  }
  default:
    console.error(`unknown command: ${cmd}`);
    process.exit(1);
}
ar.close();
