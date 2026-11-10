#!/usr/bin/env node
// settings-map.mjs - recover the Settings section registry from app.asar.
//
// The settings dialog is data driven. The shared app-initial bundle contains:
//   1. a "."-joined string listing every section slug
//   2. `[{slug:...},...]` - the ordered descriptor array that drives nav order
//   3. `{ slug: lazy(() => import("./<chunk>.js").<Component>) }` - the loader map
//
// Rolldown also emits tiny re-export shims, so a slug's entry chunk often just
// forwards to the chunk holding the real component (and several sections reuse
// another section's component outright). This tool resolves those shims
// transitively and reports which resolved chunks exist locally under
// codex_app_rev/code/, so the docs never cite a chunk that is not on disk.
//
// Usage: node settings-map.mjs <archive> <codeRoot> <outJson>

import fs from "node:fs";
import path from "node:path";
import { AsarArchive } from "./asar.mjs";

const [archivePath, codeRoot, outJson] = process.argv.slice(2);
if (!archivePath || !codeRoot || !outJson) {
  console.error("usage: node settings-map.mjs <archive> <codeRoot> <outJson>");
  process.exit(1);
}
const ASSETS = "webview/assets/";
const ar = new AsarArchive(archivePath);

/** The shared runtime bundle is the largest app-initial-*.js chunk. */
function findAppInitial() {
  let best = null;
  for (const e of ar.walk("webview/assets")) {
    if (e.dir) continue;
    const n = path.posix.basename(e.path);
    if (/^app-initial-[0-9a-f]+\.js$/.test(n) && (!best || Number(e.node.size) > best.size)) {
      best = { path: e.path, size: Number(e.node.size), name: n };
    }
  }
  return best;
}

const initial = findAppInitial();
if (!initial) {
  console.error("app-initial chunk not found");
  process.exit(2);
}
const text = ar.readText(initial.path);

/** Skip one string/template/comment starting at index i; returns end index. */
function skipToken(src, i) {
  const c = src[i];
  if (c === "`" || c === '"' || c === "'") {
    const q = c;
    i++;
    while (i < src.length) {
      if (src[i] === "\\") {
        i += 2;
        continue;
      }
      if (src[i] === q) return i + 1;
      i++;
    }
    return src.length;
  }
  return i + 1;
}

/**
 * Balanced-brace slice of the object literal that contains `marker`.
 * The registry is emitted as `Xx={billing:b3(...),"general-settings":b3(...)}`
 * and the object name is build specific, so anchor on the first key and walk
 * backwards to the opening brace.
 */
function enclosingObject(src, marker) {
  const at = src.indexOf(marker);
  if (at < 0) return null;
  const open = src[at] === "{" ? at : src.lastIndexOf("{", at);
  if (open < 0) return null;
  let i = open,
    depth = 0;
  while (i < src.length) {
    const c = src[i];
    if (c === "`" || c === '"' || c === "'") {
      i = skipToken(src, i);
      continue;
    }
    if (c === "/" && (src[i + 1] === "/" || src[i + 1] === "*")) {
      const n = src[i + 1] === "/" ? src.indexOf("\n", i) : src.indexOf("*/", i + 2) + 2;
      i = n < 0 ? src.length : n;
      continue;
    }
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) return src.slice(open, i + 1);
    }
    i++;
  }
  return null;
}

// --- 1. flat slug list --------------------------------------------------
const slugListMatch = /=`([a-z0-9.-]*general-settings[a-z0-9.-]*)`\.split\(`\.`\)/.exec(text);
const slugList = slugListMatch ? slugListMatch[1].split(".") : [];

// --- 2. ordered nav descriptors ----------------------------------------
const ordered = [];
const descStart = text.indexOf("=[{slug:`general-settings`}]");
const descFrom = descStart < 0 ? text.indexOf("=[{slug:`general-settings`") : descStart;
if (descFrom >= 0) {
  const re = /slug:`([a-z0-9-]+)`/g;
  re.lastIndex = descFrom;
  let m;
  while ((m = re.exec(text)) !== null && m.index < descFrom + 6000) ordered.push(m[1]);
}

// --- 3. slug -> lazy loader --------------------------------------------
// 26.903 used `billing:b3(...)`; 26.1013 uses `billing:vQ(...)` and also
// aliases a pre-declared lazy component (`general-settings:sIs`).
// The first key in this object changes between builds (26.1013 starts with
// `rosalind`; 26.1016 starts with `gateways`). Find every `slug: lazy(` entry,
// slice its enclosing object, and keep the first candidate that contains a
// realistic number of setting loaders. This avoids depending on key order or a
// build-specific object variable name.
const lazyEntryAt = /(?:[{,])\s*(?:`([a-z0-9-]+)`|"([a-z0-9-]+)"|([a-z0-9-]+))\s*:\s*(?:M\$|vQ|b3)\(/g;
let loaderBody = null;
for (let m; (m = lazyEntryAt.exec(text)); ) {
  const candidate = enclosingObject(text, m[0]);
  if (!candidate) continue;
  const loaderCount = [
    ...candidate.matchAll(
      /(?:[{,])\s*(?:`([a-z0-9-]+)`|"([a-z0-9-]+)"|([a-z0-9-]+))\s*:\s*(?:[A-Za-z0-9_$]+(?:\(\s*[A-Za-z0-9_$]*\s*\))?)/g,
    ),
  ].filter((x) => slugList.includes(x[1] ?? x[2] ?? x[3])).length;
  if (loaderCount >= 10) {
    loaderBody = candidate;
    break;
  }
}

/** Resolve a named lazy component/variable to the chunk it imports. */
function importForSymbol(src, name) {
  if (!name) return null;
  const escaped = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const candidates = [
    new RegExp(`function\\s+${escaped}\\s*\\(`),
    new RegExp(`(?<![A-Za-z0-9_$])${escaped}\\s*=\\s*(?:M\\$|vQ|b3)\\s*\\(`),
  ];
  for (const re of candidates) {
    const m = re.exec(src);
    if (!m) continue;
    const window = src.slice(m.index, m.index + 3000);
    const chunk = /await import\(`\.\/([^`]+)`\)/.exec(window)?.[1] ?? null;
    if (chunk) return chunk;
  }
  return null;
}

const sections = [];
if (loaderBody) {
  const re =
    /(?:[{,])\s*(?:`([a-z0-9-]+)`|"([a-z0-9-]+)"|([a-z0-9-]+))\s*:\s*([A-Za-z0-9_$]+)(?:\(\s*([A-Za-z0-9_$]*)\s*\))?/g;
  const hits = [];
  let m;
  while ((m = re.exec(loaderBody)) !== null) hits.push(m);
  for (let h = 0; h < hits.length; h++) {
    m = hits[h];
    const slug = m[1] ?? m[2] ?? m[3];
    if (!slug || slug.length > 40) continue;
    const symbol = m[4];
    const argument = m[5];
    const end = hits[h + 1]?.index ?? Math.min(loaderBody.length, m.index + 3000);
    const after = loaderBody.slice(m.index, end);
    // lazy(() => import(`./c.js`).Comp) compiles to
    //   let { Comp: e } = await import(`./c.js`) ... ).Comp
    const component =
      /let\s*\{\s*([A-Za-z0-9_$]+)\s*:\s*e\s*\}/.exec(after)?.[1] ?? null;
    let chunk = /await import\(`\.\/([^`]+)`\)/.exec(after)?.[1] ?? null;
    if (!chunk) {
      const target = ["M$", "vQ", "b3"].includes(symbol) ? argument : symbol;
      if (target) chunk = importForSymbol(text, target);
    }
    sections.push({ slug, component, entry_chunk: chunk });
  }
}

// --- shim resolution + local coverage -----------------------------------
const local = new Set();
for (const f of fs.readdirSync(codeRoot, { withFileTypes: true, recursive: true })) {
  if (f.isFile() && /\.(js|css)$/.test(f.name)) local.add(f.name);
}

/** Follow re-export shims until a chunk with real content is reached. */
function resolve(chunkName, seen = new Set()) {
  if (!chunkName || seen.has(chunkName)) return chunkName;
  seen.add(chunkName);
  const node = ar.stat(ASSETS + chunkName);
  if (!node) return null;
  if (Number(node.size) > 3000) return chunkName;
  const src = ar.readText(ASSETS + chunkName) ?? "";
  const froms = [...src.matchAll(/from\s*"\.\/([^"]+\.js)"/g)]
    .map((x) => x[1])
    .filter((f) => !/^rolldown-runtime-|^app-initial-|^app-primary-/.test(f));
  if (froms.length !== 1) return chunkName;
  return resolve(froms[0], seen);
}

/** Non-framework chunks a small entry page delegates to (cross-page reuse). */
function reuses(entryChunk) {
  const node = ar.stat(ASSETS + entryChunk);
  if (!node || Number(node.size) > 20000) return null;
  const src = ar.readText(ASSETS + entryChunk) ?? "";
  const froms = [...src.matchAll(/from\s*"\.\/([^"]+\.js)"/g)]
    .map((x) => x[1])
    .filter((f) => !/^rolldown-runtime-|^app-initial-|^app-primary-/.test(f));
  return froms.length ? froms : null;
}

const rows = sections.map((s) => {
  const resolved = resolve(s.entry_chunk);
  return {
    slug: s.slug,
    component: s.component,
    entry_chunk: s.entry_chunk,
    resolved_chunk: resolved,
    is_shim: s.entry_chunk !== resolved,
    delegates_to: reuses(s.entry_chunk),
    entry_bytes: Number(ar.stat(ASSETS + s.entry_chunk)?.size ?? 0),
    resolved_bytes: resolved ? Number(ar.stat(ASSETS + resolved)?.size ?? 0) : 0,
    extracted: resolved
      ? local.has(resolved) || local.has(s.entry_chunk)
      : local.has(s.entry_chunk),
  };
});
ar.close();

const out = {
  generated_at: new Date().toISOString(),
  source: {
    archive: archivePath,
    app_initial_chunk: initial.name,
    app_initial_bytes: initial.size,
  },
  slug_list: slugList,
  nav_order: ordered,
  sections: rows,
  coverage: {
    slugs_in_nav_order: ordered.length,
    slugs_with_loader: rows.length,
    slugs_missing_loader: ordered.filter((s) => !rows.some((r) => r.slug === s)),
    resolved_chunks_not_extracted: rows.filter((r) => !r.extracted).map((r) => r.slug),
  },
};
fs.mkdirSync(path.dirname(outJson), { recursive: true });
fs.writeFileSync(outJson, JSON.stringify(out, null, 1));
console.log(
  `settings map: ${rows.length} loaders, nav order ${ordered.length}, slug list ${slugList.length}`,
);
console.log(`  nav order: ${ordered.join(" > ")}`);
console.log(
  `  not extracted: ${out.coverage.resolved_chunks_not_extracted.join(", ") || "(none)"}`,
);
console.log(`  missing loader: ${out.coverage.slugs_missing_loader.join(", ") || "(none)"}`);
