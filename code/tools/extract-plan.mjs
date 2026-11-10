import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { AsarArchive } from "./asar.mjs";
import { lightFormat } from "./lightformat.mjs";
const prettier = await import("file:///D:/qax/reagent/dev/git/Syntropy/desktop_app/node_modules/prettier/index.mjs");
const archive="C:/Program Files/WindowsApps/OpenAI.Codex_26.1103.4239.0_x64__2p2nqsd0c76g0/app/resources/app.asar";
const outRoot="codex_app_rev/code/app-261103";
const plan=JSON.parse(fs.readFileSync(process.argv[2]??"codex_app_rev/.work/extract-plan.json","utf8"));
const ar=new AsarArchive(archive);
const APP_VERSION="26.1103.32239";
const PRETTY_LIMIT=800*1024, LIGHT_LIMIT=3_000_000;
const summary=[];
async function formatOne(src,bytes,file){
  if(bytes>LIGHT_LIMIT) return {text:lightFormat(src),formatter:"light"};
  if(bytes<=PRETTY_LIMIT){ try { return {text:await prettier.format(src,{parser:"babel",printWidth:120,semi:false,filepath:file}), formatter:"prettier"}; } catch(e){ return {text:lightFormat(src),formatter:"light(prettier-failed)"}; } }
  return {text:lightFormat(src),formatter:"light"};
}
function cleanStale(dir,wanted){
  let removed=0;
  if(!fs.existsSync(dir))return removed;
  for(const e of fs.readdirSync(dir,{withFileTypes:true})){
    if(e.isDirectory())continue;
    if(!/\.(js|css|mjs)$/.test(e.name))continue;
    if(wanted.has(e.name))continue;
    fs.unlinkSync(path.join(dir,e.name)); removed++;
  }
  return removed;
}
for(const m of plan){
  const dir=path.join(outRoot,m.module);
  fs.mkdirSync(dir,{recursive:true});
  const wanted=new Set(m.files.map(f=>f.file));
  const removed=cleanStale(dir,wanted);
  const entries=[];
  for(const f of m.files){
    const archivePath="webview/assets/async/"+f.file;
    const buf=ar.read(archivePath);
    if(!buf){console.error("missing",archivePath);continue}
    const raw=buf.toString("utf8");
    const {text,formatter}=await formatOne(raw,buf.length,f.file);
    fs.writeFileSync(path.join(dir,f.file),text);
    entries.push({archive_path:archivePath,file:f.file,selected_by:f.selected_by,raw_bytes:buf.length,formatted_bytes:Buffer.byteLength(text),formatter,sha256_raw:crypto.createHash("sha256").update(buf).digest("hex"),message_count:f.messages,namespace_score:f.score,namespaces:f.namespaces});
  }
  const idx={module:m.module,generated_at:new Date().toISOString(),source_archive:archive,app_version:APP_VERSION,files:entries};
  fs.writeFileSync(path.join(dir,"_INDEX.json"),JSON.stringify(idx,null,1));
  const rawBytes=entries.reduce((s,e)=>s+e.raw_bytes,0), fmtBytes=entries.reduce((s,e)=>s+e.formatted_bytes,0);
  summary.push({module:m.module,files:entries.length,removed_stale:removed,raw_bytes:rawBytes,formatted_bytes:fmtBytes});
  console.log(m.module.padEnd(20),String(entries.length).padStart(3),"/"+String(m.files.length).padStart(3),"raw",(rawBytes/1048576).toFixed(1)+"MB","stale",removed);
}
// main process: every .vite/build/*.js + preload
{
  const dir=path.join(outRoot,"main-process","build");
  fs.mkdirSync(dir,{recursive:true});
  const inv=JSON.parse(fs.readFileSync("codex_app_rev/inventories/inventory-261103.json","utf8"));
  const files=inv.entries.filter(e=>!e.d&&e.x===".js"&&e.p.startsWith(".vite/build/"));
  const wanted=new Set(files.map(e=>path.posix.basename(e.p)));
  const removed=cleanStale(dir,wanted);
  const entries=[];
  for(const e of files){
    const buf=ar.read(e.p); if(!buf)continue;
    const name=path.posix.basename(e.p);
    const {text,formatter}=await formatOne(buf.toString("utf8"),buf.length,name);
    fs.writeFileSync(path.join(dir,name),text);
    entries.push({archive_path:e.p,file:"build/"+name,selected_by:"path:.vite/build/",raw_bytes:buf.length,formatted_bytes:Buffer.byteLength(text),formatter,sha256_raw:crypto.createHash("sha256").update(buf).digest("hex")});
  }
  fs.writeFileSync(path.join(outRoot,"main-process","_INDEX.json"),JSON.stringify({module:"main-process",generated_at:new Date().toISOString(),source_archive:archive,app_version:APP_VERSION,files:entries},null,1));
  const rawBytes=entries.reduce((s,e)=>s+e.raw_bytes,0);
  summary.push({module:"main-process",files:entries.length,removed_stale:removed,raw_bytes:rawBytes,formatted_bytes:entries.reduce((s,e)=>s+e.formatted_bytes,0)});
  console.log("main-process".padEnd(20),String(entries.length).padStart(3),"raw",(rawBytes/1048576).toFixed(1)+"MB","stale",removed);
}
fs.writeFileSync(path.join(outRoot,"_MODULE_INDEX.json"),JSON.stringify({generated_at:new Date().toISOString(),app_version:APP_VERSION,archive,modules:summary,totals:{chunks:summary.reduce((s,m)=>s+m.files,0),raw_bytes:summary.reduce((s,m)=>s+m.raw_bytes,0),formatted_bytes:summary.reduce((s,m)=>s+m.formatted_bytes,0)}},null,1));
console.log("TOTAL",summary.reduce((s,m)=>s+m.files,0),"files",(summary.reduce((s,m)=>s+m.raw_bytes,0)/1048576).toFixed(1)+"MB raw");
ar.close();
