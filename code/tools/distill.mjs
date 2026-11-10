#!/usr/bin/env node
// distill.mjs - strip non-semantic bulk from formatted bundles so the actual
// component logic, i18n messages, routes and state machines are readable.
//
// Codex ships thousands of inline SVG icons directly into the JS chunks. A
// chunk such as use-visible-settings-sections is ~90% path data. Removing it
// does not lose behavioural information but makes the file reviewable.
//
// Usage:
//   node distill.mjs <inFileOrDir> <outDir> [--min-path 60] [--ext .js,.css]
//
// Transformations (all conservative, string-literal scoped):
//   1. SVG path data        d="M12 3L4 5..."      -> d="<svg-path>"
//   2. data: URIs           data:image/png;base64 -> "<data-uri>"
//   3. long base64/hex runs                        -> "<blob>"
//   4. tailwind class soup (very long className)   -> "<classes:N>"
//   5. blank-line compaction
//
// The original file is always recoverable from app.asar; see code/tools.

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
const [src, outRoot] = positional;
if (!src || !outRoot) {
  console.error("usage: node distill.mjs <inFileOrDir> <outDir> [--ext .js,.css]");
  process.exit(1);
}
const exts = String(opts.ext ?? ".js,.css,.json,.mjs")
  .split(",")
  .filter(Boolean);
const minPath = Number(opts["min-path"] ?? 60);

const SVG_PATH = /^[\sMLHVCSQTAZmlhvcsqtaz][\d.,\s\-MLHVCSQTAZmlhvcsqtaz]*$/;
const stats = { files: 0, before: 0, after: 0, paths: 0, uris: 0, blobs: 0, classes: 0 };

/**
 * Rewrite a single source string, replacing bulk literals with placeholders.
 * @param {string} text
 * @returns {string}
 */
export function distill(text) {
  let out = opts["keep-icons"] ? text : collapseSvgIcons(text);

  // 1. SVG path data in `d: "..."` / `d="..."` properties and attributes.
  out = out.replace(/(\bd\s*[:=]\s*)(`|"|')((?:[^\\`"'`]|\\.)*?)\2/g, (m, pre, q, body) => {
    if (body.length < minPath || !SVG_PATH.test(body)) return m;
    stats.paths++;
    return `${pre}${q}<svg-path ${body.length}ch>${q}`;
  });

  // 2. Standalone long path-like literals (icon `body:` fields, <path d=...> strings).
  out = out.replace(/(`|"|')((?:[^\\`"'`]|\\.)*?)\1/g, (m, q, body) => {
    if (body.length < minPath) return m;
    if (body.startsWith("data:")) {
      stats.uris++;
      return `${q}<data-uri ${body.length}ch>${q}`;
    }
    if (SVG_PATH.test(body)) {
      stats.paths++;
      return `${q}<svg-path ${body.length}ch>${q}`;
    }
    if (/^[A-Za-z0-9+/=]{120,}$/.test(body)) {
      stats.blobs++;
      return `${q}<blob ${body.length}ch>${q}`;
    }
    // tailwind/utility class soup: many space separated kebab tokens, no prose
    const toks = body.split(/\s+/);
    if (
      toks.length >= 12 &&
      toks.every((t) => /^[a-z0-9-]+(?::[a-z0-9-]+)*(?:\/[.\d]+)?(?:\[[^\]]*\])?$/i.test(t))
    ) {
      stats.classes++;
      return `${q}<classes ${toks.length}>${q}`;
    }
    return m;
  });

  // 3. collapse the empty lines the removals leave behind
  out = out.replace(/^[ \t]+$/gm, "").replace(/\n{3,}/g, "\n\n");
  return out;
}

/**
 * Collapse entire inline-SVG JSX calls, e.g.
 *   (0, x.jsx)(`svg`, { width: 20, ..., children: [...] })
 * into `<SvgIcon 20x20/>`. Uses balanced-paren scanning that skips strings,
 * template literals and comments so it cannot cut a call in half.
 * @param {string} text
 * @returns {string}
 */
export function collapseSvgIcons(text) {
  // `(0, x.jsx)(`svg`, {...})` — note the marker must not include the final
  // call paren, we locate it separately so the balanced scan covers the args.
  const marker = /\(0,\s*[A-Za-z_$][\w$]*\.jsxs?\)\(\s*[`"']svg[`"']/g;
  let out = "";
  let last = 0;
  let m;
  let removed = 0;
  while ((m = marker.exec(text)) !== null) {
    const groupOpen = m.index; // start of `(0, x.jsx)`
    // m[0] ends on the closing quote of `svg`; the arg-list paren is the one
    // right after the `(0, x.jsx)` group.
    const groupClose = text.indexOf(")(", m.index);
    if (groupClose === -1) break;
    const callOpen = groupClose + 1;
    let i = callOpen;
    let depth = 0;
    let endIdx = -1;
    while (i < text.length) {
      const c = text[i];
      if (c === "`" || c === '"' || c === "'") {
        const q = c;
        i++;
        while (i < text.length) {
          if (text[i] === "\\") {
            i += 2;
            continue;
          }
          if (text[i] === q) {
            i++;
            break;
          }
          i++;
        }
        continue;
      }
      if (c === "/" && text[i + 1] === "/") {
        const n = text.indexOf("\n", i);
        i = n === -1 ? text.length : n;
        continue;
      }
      if (c === "/" && text[i + 1] === "*") {
        const n = text.indexOf("*/", i + 2);
        i = n === -1 ? text.length : n + 2;
        continue;
      }
      if (c === "(") depth++;
      else if (c === ")") {
        depth--;
        if (depth === 0) {
          endIdx = i + 1;
          break;
        }
      }
      i++;
    }
    if (endIdx === -1) break;
    const body = text.slice(callOpen, endIdx);
    const wm = /width:\s*(\d+)[\s\S]{0,160}?height:\s*(\d+)/.exec(body);
    out += text.slice(last, groupOpen) + (wm ? `<SvgIcon ${wm[1]}x${wm[2]}/>` : `<SvgIcon/>`);
    last = endIdx;
    marker.lastIndex = endIdx;
    removed++;
  }
  stats.icons = (stats.icons ?? 0) + removed;
  return out + text.slice(last);
}

function walk(p) {
  const st = fs.statSync(p);
  if (st.isFile()) return [p];
  const out = [];
  for (const e of fs.readdirSync(p, { withFileTypes: true })) {
    if (e.name === "node_modules" || e.name.startsWith(".")) continue;
    out.push(...walk(path.join(p, e.name)));
  }
  return out;
}

const files = walk(src).filter((f) => exts.includes(path.extname(f).toLowerCase()));
const srcRoot = fs.statSync(src).isDirectory() ? src : path.dirname(src);
for (const f of files) {
  const rel = path.relative(srcRoot, f);
  const dest = path.join(outRoot, rel);
  const text = fs.readFileSync(f, "utf8");
  const d = distill(text);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, d);
  stats.files++;
  stats.before += text.length;
  stats.after += d.length;
}
console.error(
  `distilled ${stats.files} files: ${(stats.before / 1048576).toFixed(1)} MB -> ${(stats.after / 1048576).toFixed(1)} MB (${(100 - (stats.after / stats.before) * 100).toFixed(0)}% removed)`,
);
console.error(
  `  svg-icons ${stats.icons ?? 0}, svg-paths ${stats.paths}, data-uris ${stats.uris}, blobs ${stats.blobs}, class-soup ${stats.classes}`,
);
