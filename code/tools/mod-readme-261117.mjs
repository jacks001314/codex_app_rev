import fs from "node:fs";
import path from "node:path";

const root = "code/app-261117";
const version = "26.1117";
const modules = fs
  .readdirSync(root, { withFileTypes: true })
  .filter((e) => e.isDirectory() && !e.name.startsWith("_"))
  .map((e) => e.name);

const mb = (n) => (n / 1048576).toFixed(1) + " MB";

for (const mod of modules) {
  const dir = path.join(root, mod);
  const idx = JSON.parse(fs.readFileSync(path.join(dir, "_INDEX.json"), "utf8"));
  const cat = JSON.parse(fs.readFileSync(path.join(dir, "_CATALOG.json"), "utf8"));
  const files = idx.files ?? [];
  const raw = files.reduce((s, f) => s + f.raw_bytes, 0);
  const fmt = files.reduce((s, f) => s + f.formatted_bytes, 0);
  const messages = cat.messages ?? [];

  const groups = new Map();
  for (const msg of messages) {
    const key = msg.id.split(".").slice(0, 2).join(".");
    groups.set(key, (groups.get(key) ?? 0) + 1);
  }
  const topGroups = [...groups].sort((a, b) => b[1] - a[1]).slice(0, 8);
  const described = messages.filter((m) => m.description);
  const sample = [...described].sort((a, b) => a.id.localeCompare(b.id)).slice(0, 6);
  const subdirs = [...new Set(files.map((f) => path.posix.dirname(f.file)).filter((d) => d !== "."))].sort();

  const lines = [];
  lines.push(`# ${mod}`, "");
  lines.push(
    `> 来源：\`app.asar\` → ${version} Rspack 数字 chunk；本目录 ${files.length} 个文件 / raw ${mb(raw)} / formatted ${mb(fmt)}，` +
      `模块级文案 ${messages.length} 条（${groups.size} 组）。`,
    "",
  );
  lines.push("> 生产包无 sourcemap，符号名已压缩；下文出现的语义化名称是按用途重命名，不是原始名。", "");

  lines.push("## 文件", "");
  lines.push("| 文件 | 原始字节 | 消息数 | 选中原因 |", "| --- | ---: | ---: | --- |");
  for (const f of [...files].sort((a, b) => b.raw_bytes - a.raw_bytes))
    lines.push(`| \`${f.file}\` | ${f.raw_bytes} | ${f.message_count ?? "—"} | ${f.selected_by} |`);

  if (subdirs.length) {
    lines.push("", `子目录：${subdirs.map((d) => `\`${d}/\``).join("、")}。`);
  }

  lines.push("", "## 文案命名空间", "", "| 命名空间 | 条数 |", "| --- | ---: |");
  for (const [g, n] of topGroups) lines.push(`| \`${g}\` | ${n} |`);

  if (sample.length) {
    lines.push("", "## 开发者描述（节选）", "");
    for (const m of sample) lines.push(`- \`${m.id}\` — ${m.text}`, `  - ${m.description}`);
  } else {
    lines.push(
      "",
      "## 开发者描述",
      "",
      `本模块 ${messages.length} 条文案在生产构建里都没有保留 \`description\`（26.1117 起）——` +
        "要理解意图只能用 id / 文案本身，或按同名 id 回溯 26.1106 目录（B 级）。",
    );
  }

  lines.push(
    "",
    "## 复核",
    "",
    "所有文件位于本目录；原始路径见 `_INDEX.json` 的 `archive_path`，模块级文案与 import 图见 `_CATALOG.json`。" +
      "跨版本请勿用 chunk id 比对——每周重新编号。",
    "",
  );

  fs.writeFileSync(path.join(dir, "README.md"), lines.join("\n"));
}

console.log("wrote", modules.length, "module READMEs");