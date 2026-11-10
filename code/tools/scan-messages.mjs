import fs from "node:fs";
import path from "node:path";
import { AsarArchive } from "./asar.mjs";
const archive = "C:/Program Files/WindowsApps/OpenAI.Codex_26.1103.4239.0_x64__2p2nqsd0c76g0/app/resources/app.asar";
const ar = new AsarArchive(archive);
const inv = JSON.parse(fs.readFileSync("codex_app_rev/inventories/inventory-261103.json","utf8"));
const files = inv.entries.filter(e=>!e.d && e.x===".js" && /^webview\/assets\//.test(e.p));
const MSG = /id:\s*(`[^`\n]+`|"[^"\n]+")\s*,\s*defaultMessage:\s*(`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*")(?:\s*,\s*description:\s*(`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"))?/g;
const unwrap = s => s ? s.slice(1,-1).replace(/\\`/g,"`").replace(/\\"/g,'"').replace(/\\\$/g,"$") : s;
const messages = new Map();
const chunks = [];
let scanned=0, bytes=0, withMsg=0;
for (const e of files) {
  const text = ar.readText(e.p);
  if (text == null) continue;
  scanned++; bytes += e.s;
  const ids = new Set();
  MSG.lastIndex = 0; let m;
  while ((m = MSG.exec(text)) !== null) {
    const id = unwrap(m[1]);
    if (!id || /\s/.test(id) || id.length > 180) continue;
    ids.add(id);
    const rec = messages.get(id) ?? { id, text: unwrap(m[2]), description: null, files: new Set() };
    if (!rec.description && m[3]) rec.description = unwrap(m[3]);
    rec.files.add(path.posix.basename(e.p));
    messages.set(id, rec);
  }
  if (ids.size) {
    withMsg++;
    const ns = new Map();
    for (const id of ids) { const k = id.split(".").slice(0,2).join("."); ns.set(k,(ns.get(k)??0)+1); }
    chunks.push({ file: path.posix.basename(e.p), bytes: e.s, messages: ids.size, namespaces: [...ns].sort((a,b)=>b[1]-a[1]).slice(0,6) });
  }
}
const groupOf = id => { const p=id.split("."); return p.length>=2?`${p[0]}.${p[1]}`:p[0]; };
const groups = new Map();
for (const rec of messages.values()) { const g=groupOf(rec.id); const a=groups.get(g)??[]; a.push({id:rec.id,text:rec.text,description:rec.description,files:[...rec.files].sort().slice(0,4)}); groups.set(g,a); }
for (const a of groups.values()) a.sort((x,y)=>x.id.localeCompare(y.id));
const out = { generated_at:new Date().toISOString(), source_archive:archive, files_scanned:scanned, bytes_scanned:bytes, files_with_messages:withMsg, message_count:messages.size, group_count:groups.size, groups:[...groups].sort((a,b)=>a[0].localeCompare(b[0])).map(([group,msgs])=>({group,count:msgs.length,messages:msgs})) };
fs.mkdirSync("codex_app_rev/.work",{recursive:true});
fs.writeFileSync("codex_app_rev/.work/i18n-261103.json", JSON.stringify(out,null,1));
fs.writeFileSync("codex_app_rev/.work/chunk-messages-261103.json", JSON.stringify(chunks.sort((a,b)=>b.messages-a.messages),null,1));
console.log(`scanned ${scanned} js / ${(bytes/1048576).toFixed(1)}MB, ${withMsg} chunks with messages, ${messages.size} messages in ${groups.size} groups`);
console.log("top groups:");
[...groups].sort((a,b)=>b[1].length-a[1].length).slice(0,40).forEach(([g,v])=>console.log(String(v.length).padStart(5),g));
console.log("top message chunks:");
chunks.sort((a,b)=>b.messages-a.messages).slice(0,25).forEach(c=>console.log(String(c.messages).padStart(5),(c.bytes/1024).toFixed(0).padStart(7)+"KB",c.file,c.namespaces.map(([n,k])=>n+":"+k).join(" ")));
ar.close();
