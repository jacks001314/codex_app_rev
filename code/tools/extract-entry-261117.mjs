import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { AsarArchive } from "./asar.mjs";
import { lightFormat } from "./lightformat.mjs";
import { ARCHIVE, APP_VERSION, WORK, OUT } from "./ver-261117.mjs";
const prettier=await import("file:///D:/qax/reagent/dev/git/Syntropy/desktop_app/node_modules/prettier/index.mjs");
const ar=new AsarArchive(ARCHIVE);
const map=JSON.parse(fs.readFileSync(WORK+"/chunk-map.json","utf8"));
const dir=OUT+"/app-shell/entry"; fs.mkdirSync(dir,{recursive:true});
const idxFile=OUT+"/app-shell/_INDEX.json";
const idx=JSON.parse(fs.readFileSync(idxFile,"utf8"));
idx.files=idx.files.filter(e=>!e.selected_by?.startsWith("entry"));
let added=0;
for(const f of map.entry_chunks){
  const archivePath="webview/assets/"+f;
  const buf=ar.read(archivePath); if(!buf){console.log("missing",archivePath);continue}
  const raw=buf.toString("utf8");
  let text,formatter;
  try{text=await prettier.format(raw,{parser:"babel",printWidth:120,semi:false,filepath:f});formatter="prettier"}catch{text=lightFormat(raw);formatter="light(prettier-failed)"}
  fs.writeFileSync(path.join(dir,f),text); added++;
  idx.files.push({archive_path:archivePath,file:"entry/"+f,selected_by:"entry",raw_bytes:buf.length,formatted_bytes:Buffer.byteLength(text),formatter,sha256_raw:crypto.createHash("sha256").update(buf).digest("hex")});
}
idx.generated_at=new Date().toISOString();
fs.writeFileSync(idxFile,JSON.stringify(idx,null,1));
const mod=JSON.parse(fs.readFileSync(OUT+"/_MODULE_INDEX.json","utf8"));
const m=mod.modules.find(x=>x.module==="app-shell");
m.files=idx.files.length; m.raw_bytes=idx.files.reduce((s,e)=>s+e.raw_bytes,0); m.formatted_bytes=idx.files.reduce((s,e)=>s+e.formatted_bytes,0);
mod.totals={chunks:mod.modules.reduce((s,x)=>s+x.files,0),raw_bytes:mod.modules.reduce((s,x)=>s+x.raw_bytes,0),formatted_bytes:mod.modules.reduce((s,x)=>s+x.formatted_bytes,0)};
fs.writeFileSync(OUT+"/_MODULE_INDEX.json",JSON.stringify(mod,null,1));
console.log("entry added",added,"app-shell files",m.files,"totals",mod.totals);
ar.close();
