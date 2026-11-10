#!/usr/bin/env node
// ctx.mjs - character-window search across the formatted bundles.
//
// Bundled code keeps very long logical lines, so line-oriented grep either
// dumps thousands of characters or hides the surrounding context that actually
// identifies a construct. This tool prints a fixed character window around each
// match instead, which is what you want when reverse-engineering minified JS.
//
// Usage:
//   node ctx.mjs <pattern> <fileOrDir>... [--before N] [--after N] [--limit N]
//                [--flags gi] [--ext .js,.css]
//
// Example:
//   node ctx.mjs 'localSources' ../side-panel ../../../.work/big --after 240

import fs from "node:fs";
import path from "node:path";

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
const [pattern, ...inputs] = positional;
if (!pattern || inputs.length === 0) {
  console.error(
    fs
      .readFileSync(new URL(import.meta.url), "utf8")
      .split("\n")
      .filter((l) => l.startsWith("//"))
      .join("\n"),
  );
  process.exit(1);
}
const re = new RegExp(pattern, opts.flags ?? "g");
const before = Number(opts.before ?? 90);
const after = Number(opts.after ?? 220);
const limit = Number(opts.limit ?? 25);
const exts = String(opts.ext ?? ".js,.mjs,.css,.json").split(",");

function* walk(p) {
  const st = fs.statSync(p);
  if (st.isFile()) {
    yield p;
    return;
  }
  for (const e of fs.readdirSync(p, { withFileTypes: true })) {
    if (e.name.startsWith(".") || e.name === "node_modules") continue;
    yield* walk(path.join(p, e.name));
  }
}

let shown = 0;
outer: for (const input of inputs) {
  for (const f of walk(input)) {
    if (!exts.includes(path.extname(f).toLowerCase())) continue;
    if (fs.statSync(f).size > 80 * 1024 * 1024) continue;
    const text = fs.readFileSync(f, "utf8");
    re.lastIndex = 0;
    let m;
    while ((m = re.exec(text)) !== null) {
      const from = Math.max(0, m.index - before);
      const to = Math.min(text.length, m.index + m[0].length + after);
      const line = text.slice(0, m.index).split("\n").length;
      const snippet = text.slice(from, to).replace(/\s+/g, " ");
      console.log(`\n### ${path.basename(f)}:${line}`);
      console.log(`    …${snippet}…`);
      if (++shown >= limit) break outer;
      if (m[0].length === 0) re.lastIndex++;
    }
  }
}
console.error(`\n# ${shown} match window(s)`);
