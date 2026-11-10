#!/usr/bin/env node
// inventory.mjs - dump a flat JSON inventory of an ASAR archive.
//
// Usage: node inventory.mjs <archive> <outJson> [pathPrefix]
//
// Output shape: [{ p: path, s: size, u: unpacked(bool), d: dir(bool), x: ext }]
// Sorted by path. Used by the analysis docs to pin exact bundle names per
// app version, and by extract scripts to pick inputs deterministically.

import fs from "node:fs";
import path from "node:path";
import { AsarArchive } from "./asar.mjs";

const [archivePath, outPath, prefix] = process.argv.slice(2);
if (!archivePath || !outPath) {
  console.error("usage: node inventory.mjs <archive> <outJson> [pathPrefix]");
  process.exit(1);
}

const ar = new AsarArchive(archivePath);
const rows = [];
for (const e of ar.walk()) {
  if (prefix && !e.path.startsWith(prefix)) continue;
  rows.push({
    p: e.path,
    s: e.dir ? 0 : Number(e.node.size ?? 0),
    u: Boolean(e.node.unpacked),
    d: e.dir,
    x: e.dir ? "" : path.extname(e.path).toLowerCase(),
  });
}
ar.close();
rows.sort((a, b) => (a.p < b.p ? -1 : a.p > b.p ? 1 : 0));
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(
  outPath,
  JSON.stringify(
    {
      archive: archivePath,
      generatedAt: new Date().toISOString(),
      count: rows.length,
      entries: rows,
    },
    null,
    1,
  ),
);

const byExt = new Map();
for (const r of rows) {
  if (r.d) continue;
  const rec = byExt.get(r.x || "(none)") ?? { n: 0, bytes: 0 };
  rec.n++;
  rec.bytes += r.s;
  byExt.set(r.x || "(none)", rec);
}
console.log(`entries: ${rows.length}`);
console.log(
  [...byExt.entries()]
    .sort((a, b) => b[1].bytes - a[1].bytes)
    .slice(0, 25)
    .map(
      ([ext, v]) =>
        `  ${ext.padEnd(10)} ${String(v.n).padStart(6)} files  ${(v.bytes / 1048576).toFixed(1).padStart(9)} MB`,
    )
    .join("\n"),
);
