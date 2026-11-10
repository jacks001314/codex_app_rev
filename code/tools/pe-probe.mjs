// pe-probe.mjs — 原生二进制的**身份识别**探针（只读）。
//
// 读 PE 头 / 段表 / 导入表，并对文件做字面量签名扫描（Go / Rust / MSVC / Swift /
// Node-V8 / Zig / .NET / 扩展宿主标记）。**不做反汇编、不含反汇编器、不还原控制流**，
// 目标是回答"这是什么、谁写的、链了哪些库"，不是"它怎么工作"。
//
// 引入背景：`browser-extension.md` 需要判定 `extension-host.exe` 的身份与链路方向。
// 用法: node pe-probe.mjs <file.exe>
import fs from "node:fs";

const file = process.argv[2];
if (!file) throw new Error("usage: node pe-probe.mjs <file.exe>");
const buf = fs.readFileSync(file);

const MACHINE = { 0x014c: "i386", 0x8664: "x86-64", 0xaa64: "ARM64", 0x01c4: "ARMv7" };
const SUBSYS = {
  1: "NATIVE",
  2: "WINDOWS_GUI",
  3: "WINDOWS_CUI",
  9: "WINDOWS_CE",
  16: "WINDOWS_BOOT",
};

const e_lfanew = buf.readUInt32LE(0x3c);
const coff = e_lfanew + 4;
const machine = buf.readUInt16LE(coff);
const numSections = buf.readUInt16LE(coff + 2);
const timeStamp = buf.readUInt32LE(coff + 4);
const sizeOfOptional = buf.readUInt16LE(coff + 16);
const characteristics = buf.readUInt16LE(coff + 18);
const magic = buf.readUInt16LE(coff + 20);

const opt = coff + 20;
const subsystem = buf.readUInt16LE(opt + 68);
const numDirsOff = opt + (magic === 0x20b ? 108 : 92);
const dirsBase = numDirsOff + 4;
const importRva = buf.readUInt32LE(dirsBase + 8);
const resourceRva = buf.readUInt32LE(dirsBase + 16);
const debugRva = buf.readUInt32LE(dirsBase + 48);

const secBase = opt + sizeOfOptional;
const sections = [];
for (let i = 0; i < numSections; i++) {
  const off = secBase + i * 40;
  sections.push({
    name: buf.toString("latin1", off, off + 8).replace(/\0+$/, ""),
    vsize: buf.readUInt32LE(off + 8),
    vaddr: buf.readUInt32LE(off + 12),
    rawsize: buf.readUInt32LE(off + 16),
    rawptr: buf.readUInt32LE(off + 20),
    chars: buf.readUInt32LE(off + 36),
  });
}

const rvaToOff = (rva) => {
  for (const s of sections) {
    if (rva >= s.vaddr && rva < s.vaddr + Math.max(s.vsize, s.rawsize))
      return s.rawptr + (rva - s.vaddr);
  }
  return null;
};

console.log("== file ==");
console.log("size        :", buf.length);
console.log("machine     :", MACHINE[machine] ?? `0x${machine.toString(16)}`);
console.log("magic       :", magic === 0x20b ? "PE32+ (64-bit)" : "PE32");
console.log("subsystem   :", SUBSYS[subsystem] ?? subsystem);
console.log("sections    :", numSections);
console.log(
  "timestamp   :",
  new Date(timeStamp * 1000).toISOString(),
  `(0x${(timeStamp >>> 0).toString(16)})`,
);
console.log(
  "characterist: no-reloc:",
  !!(characteristics & 0x1),
  "dynamic-base:",
  !!(characteristics & 0x40),
);
console.log("has import  :", importRva, "| has resource:", resourceRva, "| has debug:", debugRva);

console.log("\n== sections ==");
for (const s of sections) {
  const flags = [
    (s.chars >> 31) & 1 ? "R" : "-",
    (s.chars >> 30) & 1 ? "W" : "-",
    (s.chars >> 29) & 1 ? "X" : "-",
  ].join("");
  console.log(
    `  ${s.name.padEnd(9)} vsize=${String(s.vsize).padStart(9)} raw=${String(s.rawsize).padStart(9)} ${flags} rawptr=0x${s.rawptr.toString(16)}`,
  );
}

// ---- imports
if (importRva) {
  let off = rvaToOff(importRva);
  const dlls = [];
  if (off != null) {
    for (let i = 0; i < 512; i++, off += 20) {
      const nameRva = buf.readUInt32LE(off + 12);
      if (nameRva === 0) break;
      const nameOff = rvaToOff(nameRva);
      if (nameOff == null) break;
      let end = nameOff;
      while (buf[end] !== 0) end++;
      dlls.push(buf.toString("latin1", nameOff, end));
    }
  }
  console.log(`\n== imported DLLs (${dlls.length}) ==`);
  console.log(dlls.length ? dlls.map((d) => "  " + d).join("\n") : "  (none / unreadable)");
} else {
  console.log(
    "\n== imported DLLs ==\n  (no import directory — statically linked / import by hash)",
  );
}

// ---- runtime signature scan
const sigs = {
  "Go runtime": [
    /golang\.org|\bgo1\.\d+/,
    /\.gopclntab/,
    /go:buildid|\bGo build ID\b/,
    /\bruntime\.main\b/,
  ],
  Rust: [
    /rustc[- ]|\bcargo\b/,
    /RUST_BACKTRACE|rust_begin_unwind/,
    /library\/std\/src|rustc\/.*\.rs/,
    /panicked at/,
  ],
  "MSVC / C++": [
    /Microsoft Visual C\+\+|MSVC/,
    /VCRUNTIME140|msvcp140|ucrtbase\.dll/,
    /api-ms-win-crt-/,
  ],
  Swift: [
    /swift_|Swift[A-Z]\w+/,
    /Foundation_Swift|libswiftCore|swiftCore\.dll/,
    /\/swift\/stdlib/,
  ],
  "Node / V8": [/node\.js|Node\.js|\bnode:fs\b/, /v8::|V8_|libv8/, /node_modules/],
  Zig: [/zig (?:lang|compiler)|ziglang\.org/, /\.zig\b/],
  "Electron/CEF": [/electron|CEF|libcef|chromium/i],
  DotNet: [/mscoree\.dll|\.NET Framework|System\.Private\.CoreLib/],
  "Extension host markers": [
    /codexextension|native messaging|allowed_origins|extension-host-config/,
    /schemaVersion|proxyPort|proxyHost/,
  ],
  "Bundle/CI paths": [/[A-Za-z]:\\\\[\w.$ -]{2,}\\\\/, /\/(?:home|Users|build|workdir)\/[\w.-]+\//],
};

const ascii = buf.toString("latin1");
console.log("\n== signature scan ==");
for (const [label, pats] of Object.entries(sigs)) {
  const hits = [];
  for (const re of pats) {
    const reG = new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g");
    let m;
    let n = 0;
    while ((m = reG.exec(ascii)) !== null && n < 3) {
      hits.push(m[0]);
      n++;
      if (m.index === reG.lastIndex) reG.lastIndex++;
    }
  }
  console.log(
    `  ${label.padEnd(22)} ${hits.length ? "HIT  " + JSON.stringify([...new Set(hits)].slice(0, 4)) : "-"}`,
  );
}

// ---- a few concrete strings for the record
console.log("\n== selected literals ==");
const wanted = [
  "extension-host-config.json",
  "com.openai.codexextension",
  "allowed_origins",
  "proxyPort",
  "browserClientPath",
  "codexCliPath",
  "nodeReplPath",
  "ChatGPT browser native messaging host",
];
for (const w of wanted) {
  const i = ascii.indexOf(w);
  console.log(`  ${w.padEnd(38)} ${i >= 0 ? `found @0x${i.toString(16)}` : "-"}`);
}

// ---- count printable strings >= 6 (rough size of the string table)
const strs = ascii.match(/[\x20-\x7e]{6,}/g) ?? [];
console.log(`\nascii strings >=6: ${strs.length}`);
