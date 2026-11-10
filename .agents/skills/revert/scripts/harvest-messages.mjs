#!/usr/bin/env node
// harvest-messages.mjs - build the complete react-intl message catalog for the
// app by scanning every formatted bundle (module chunks + the shared
// app-initial / app-primary bundles).
//
// Codex declares UI copy as descriptors:
//   { id: `settings.general.composer.plainTextMode.label`,
//     defaultMessage: `Plain text composer`,
//     description: `Label for a setting that disables ...` }
//
// The `description` field is developer-facing and unusually informative: it
// states the intent of each control. Together with the id namespace this gives
// a complete, versioned inventory of every user-visible string and what it is
// attached to - the single most useful artifact for reverse-engineering the UI.
//
// Usage:
//   node harvest-messages.mjs <outJson> <fileOrDir>...
//
// Output is grouped by the first two id segments, e.g. "settings.general".

import fs from "node:fs";
import path from "node:path";

const [outJson, ...inputs] = process.argv.slice(2);
if (!outJson || inputs.length === 0) {
  console.error("usage: node harvest-messages.mjs <outJson> <fileOrDir>...");
  process.exit(1);
}

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

// id: `x`, defaultMessage: `y` [, description: `z`]  — allow either quote style
const MSG =
  /id:\s*(`[^`\n]+`|"[^"\n]+")\s*,\s*defaultMessage:\s*(`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*")(?:\s*,\s*description:\s*(`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"))?/g;
const unwrap = (s) =>
  s ? s.slice(1, -1).replace(/\\`/g, "`").replace(/\\"/g, '"').replace(/\\\$/g, "$") : s;

/** @type {Map<string,{id:string,text:string,description:string|null,files:Set<string>}>} */
const messages = new Map();
let scanned = 0;

for (const input of inputs) {
  for (const f of walk(input)) {
    if (!/\.(js|mjs)$/.test(f)) continue;
    if (fs.statSync(f).size > 60 * 1024 * 1024) continue;
    scanned++;
    const text = fs.readFileSync(f, "utf8");
    let m;
    MSG.lastIndex = 0;
    while ((m = MSG.exec(text)) !== null) {
      const id = unwrap(m[1]);
      if (!id || /\s/.test(id) || id.length > 160) continue;
      const rec = messages.get(id) ?? {
        id,
        text: unwrap(m[2]),
        description: null,
        files: new Set(),
      };
      if (!rec.description && m[3]) rec.description = unwrap(m[3]);
      rec.files.add(path.basename(f));
      messages.set(id, rec);
    }
  }
}

/** Group key = first two dot segments (`settings.general`, `composer.mode`, ...). */
const groupOf = (id) => {
  const parts = id.split(".");
  return parts.length >= 2 ? `${parts[0]}.${parts[1]}` : parts[0];
};

const groups = new Map();
for (const rec of messages.values()) {
  const g = groupOf(rec.id);
  const arr = groups.get(g) ?? [];
  arr.push({
    id: rec.id,
    text: rec.text,
    description: rec.description,
    files: [...rec.files].sort(),
  });
  groups.set(g, arr);
}
for (const arr of groups.values()) arr.sort((a, b) => a.id.localeCompare(b.id));

const out = {
  generated_at: new Date().toISOString(),
  inputs,
  files_scanned: scanned,
  message_count: messages.size,
  group_count: groups.size,
  groups: [...groups.entries()]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .map(([name, msgs]) => ({ group: name, count: msgs.length, messages: msgs })),
};
fs.mkdirSync(path.dirname(outJson), { recursive: true });
fs.writeFileSync(outJson, JSON.stringify(out, null, 1));
console.log(
  `harvested ${messages.size} messages in ${groups.size} groups from ${scanned} files -> ${outJson}`,
);
const top = [...groups.entries()].sort((a, b) => b[1].length - a[1].length).slice(0, 30);
for (const [g, v] of top) console.log(`  ${g.padEnd(34)} ${String(v.length).padStart(5)}`);
