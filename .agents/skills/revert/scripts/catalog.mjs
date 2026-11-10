#!/usr/bin/env node
// catalog.mjs - mine structured facts out of the formatted bundles.
//
// Minified React code loses identifier names but keeps every string literal.
// The Codex renderer uses react-intl style descriptors
//   { id: `settings.foo.bar`, defaultMessage: `Label`, description: `...` }
// plus plain template literals for aria labels, tooltip copy, CSS class soup,
// telemetry event names and route paths. This tool pulls those out per module
// so the UI can be documented without reading megabytes of JSX.
//
// Usage:
//   node catalog.mjs <moduleDir> <outJson> [--literals-out <file>]
//
// The `literals` table is by far the bulkiest part (every string in every chunk,
// with the files it occurs in) and the least often consulted, so it can be
// diverted to a scratch file that stays out of version control. Messages,
// imports and hot props always stay in <outJson>.
//
// Output: { messages: [{id, text, description, files[<=4], file_count}],
//           imports: [{from, count, names[]}], hot_props: [{name, count}],
//           literal_count, literals | literals_file }

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
const [moduleDir, outJson] = positional;
const literalsOut = typeof opts["literals-out"] === "string" ? opts["literals-out"] : null;
if (!moduleDir || !outJson) {
  console.error("usage: node catalog.mjs <moduleDir> <outJson> [--literals-out <file>]");
  process.exit(1);
}

function* walk(p) {
  for (const e of fs.readdirSync(p, { withFileTypes: true })) {
    const full = path.join(p, e.name);
    if (e.isDirectory()) {
      if (!e.name.startsWith(".") && e.name !== "_catalog") yield* walk(full);
    } else if (/\.(js|mjs)$/.test(e.name)) yield full;
  }
}

/** All template/quoted literals in a source text, de-duplicated, order preserved. */
function literalsOf(text) {
  const out = new Set();
  const re = /`((?:[^`\\]|\\.)*)`|"((?:[^"\\]|\\.)*)"|'((?:[^'\\]|\\.)*)'/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const v = m[1] ?? m[2] ?? m[3];
    if (v !== undefined && v.length > 0 && v.length < 400) out.add(v);
  }
  return [...out];
}

const messages = new Map(); // id -> { id, text, description, files:Set }
const literals = new Map(); // literal -> Set(files)
const props = new Map(); // object property name -> count
const imports = new Map(); // source module -> Set(imported local names)
const filesScanned = [];

// react-intl descriptor: id: `...`, defaultMessage: `...` [, description: `...`]
const MSG =
  /id:\s*(`[^`\n]+`|"[^"\n]+")\s*,\s*defaultMessage:\s*(`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*")(?:\s*,\s*description:\s*(`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"))?/g;
const PROP = /(?:^|[,{(\s])([A-Za-z_$][\w$]*)\s*:/gm;
const IMPORT = /import\s*\{([^}]*)\}\s*from\s*"(?:\.\/)?([^"]+)"/g;
const unwrap = (s) => (s ? s.slice(1, -1).replace(/\\`/g, "`").replace(/\\"/g, '"') : s);

for (const f of walk(moduleDir)) {
  const rel = path.relative(moduleDir, f).replace(/\\/g, "/");
  const text = fs.readFileSync(f, "utf8");
  filesScanned.push(rel);

  let m;
  MSG.lastIndex = 0;
  while ((m = MSG.exec(text)) !== null) {
    const id = unwrap(m[1]);
    const rec = messages.get(id) ?? { id, text: unwrap(m[2]), description: null, files: new Set() };
    if (!rec.description && m[3]) rec.description = unwrap(m[3]);
    rec.files.add(rel);
    messages.set(id, rec);
  }

  for (const lit of literalsOf(text)) {
    const rec = literals.get(lit) ?? new Set();
    rec.add(rel);
    literals.set(lit, rec);
  }

  PROP.lastIndex = 0;
  while ((m = PROP.exec(text)) !== null) props.set(m[1], (props.get(m[1]) ?? 0) + 1);

  IMPORT.lastIndex = 0;
  while ((m = IMPORT.exec(text)) !== null) {
    const names = m[1]
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
      .map((s) => (s.includes(" as ") ? s.split(/\s+as\s+/)[0].trim() : s));
    const rec = imports.get(m[2]) ?? new Set();
    for (const n of names) rec.add(n);
    imports.set(m[2], rec);
  }
}

const top = (map, n) =>
  [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([k, v]) => ({ name: k, count: v }));
/** Keep the index small: at most 4 files are cited per message. */
const capFiles = (set) => [...set].sort().slice(0, 4);

const literalRows = [...literals.entries()]
  .filter(([k]) => !/^[\w-]+$/.test(k) || k.length > 3)
  .map(([k, v]) => ({ text: k, files: [...v] }))
  .sort((a, b) => a.text.localeCompare(b.text));

if (literalsOut) {
  fs.mkdirSync(path.dirname(literalsOut), { recursive: true });
  fs.writeFileSync(
    literalsOut,
    JSON.stringify(
      {
        module: path.basename(moduleDir),
        generated_at: new Date().toISOString(),
        count: literalRows.length,
        literals: literalRows,
      },
      null,
      1,
    ),
  );
}

const out = {
  module: path.basename(moduleDir),
  generated_at: new Date().toISOString(),
  files_scanned: filesScanned.length,
  message_count: messages.size,
  messages: [...messages.values()]
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((r) => ({
      id: r.id,
      text: r.text,
      description: r.description,
      files: capFiles(r.files),
      file_count: r.files.size,
    })),
  imports: [...imports.entries()]
    .sort((a, b) => b[1].size - a[1].size)
    .map(([src, names]) => ({ from: src, count: names.size, names: [...names].sort() }))
    .slice(0, 60),
  hot_props: top(props, 250),
  literal_count: literalRows.length,
  ...(literalsOut ? { literals_file: literalsOut } : { literals: literalRows }),
};
fs.mkdirSync(path.dirname(outJson), { recursive: true });
fs.writeFileSync(outJson, JSON.stringify(out, null, 1));
console.log(
  `${out.module}: ${out.files_scanned} files, ${out.message_count} i18n messages, ${out.literal_count} literals -> ${outJson}${literalsOut ? " (+" + literalsOut + ")" : ""}`,
);
