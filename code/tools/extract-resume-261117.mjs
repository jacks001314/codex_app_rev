import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { AsarArchive } from "./asar.mjs";
import { lightFormat } from "./lightformat.mjs";
import { ARCHIVE, APP_VERSION, WORK, OUT } from "./ver-261117.mjs";
const prettier=await import("file:///D:/qax/reagent/dev/git/Syntropy/desktop_app/node_modules/prettier/index.mjs");
const plan=JSON.parse(fs.readFileSync(WORK+"/extract-plan.json","utf8"));
const ar=new AsarArchive(ARCHIVE);
async function formatOne(src,bytes,file){
  const LIGHT_LIMIT=3_000_000,PRETTY_LIMIT=800*1024;
  if(bytes>LIGHT_LIMIT)return{text:lightFormat(src),formatter:"light"};
  if(bytes<=PRETTY_LIMIT){try{return{text:await prettier.format(src,{parser:"babel",printWidth:120,semi:false,filepath:file}),formatter:"prettier"}}catch{return{text:lightFormat(src),formatter:"light(prettier-failed)"}}}
  return{text:lightFormat(src),formatter:"light"};
}
let added=0,removed=0;
for(const m of plan){
  const dir=path.join(OUT,m.module); fs.mkdirSync(dir,{recursive:true});
  const wanted=new Set(m.files.map(f=>f.file));
  for(const e of fs.readdirSync(dir,{withFileTypes:true})){
    if(e.isDirectory()||!/\.(js|css|mjs)$/.test(e.name))continue;
    if(!wanted.has(e.name)){fs.unlinkSync(path.join(dir,e.name));removed++}
  }
  const entries=[];
  for(const f of m.files){
    const archivePath="webview/assets/async/"+f.file;
    const buf=ar.read(archivePath); if(!buf){console.error("missing",archivePath);continue}
    let formattedBytes;
    if(!fs.existsSync(path.join(dir,f.file))){
      const {text,formatter}=await formatOne(buf.toString("utf8"),buf.length,f.file);
      fs.writeFileSync(path.join(dir,f.file),text);
      formattedBytes=Buffer.byteLength(text);added++;
      console.log("added",m.module,f.file,formatter,formattedBytes);
    } else formattedBytes=fs.statSync(path.join(dir,f.file)).size;
    entries.push({archive_path:archivePath,file:f.file,selected_by:f.selected_by,raw_bytes:buf.length,formatted_bytes:formattedBytes,formatter:buf.length>3_000_000?"light":(buf.length<=800*1024?"prettier":"light"),sha256_raw:crypto.createHash("sha256").update(buf).digest("hex"),message_count:f.messages,namespace_score:f.score,namespaces:f.namespaces});
  }
  fs.writeFileSync(path.join(dir,"_INDEX.json"),JSON.stringify({module:m.module,generated_at:new Date().toISOString(),source_archive:ARCHIVE,app_version:APP_VERSION,files:entries},null,1));
}
const idx=JSON.parse(fs.readFileSync(OUT+"/_MODULE_INDEX.json","utf8"));
for(const m of idx.modules){
  const file=path.join(OUT,m.module,"_INDEX.json");
  if(!fs.existsSync(file))continue;
  const ix=JSON.parse(fs.readFileSync(file,"utf8"));
  m.files=ix.files.length;
  m.raw_bytes=ix.files.reduce((s,e)=>s+e.raw_bytes,0);
  m.formatted_bytes=ix.files.reduce((s,e)=>s+e.formatted_bytes,0);
}
idx.totals={chunks:idx.modules.reduce((s,m)=>s+m.files,0),raw_bytes:idx.modules.reduce((s,m)=>s+m.raw_bytes,0),formatted_bytes:idx.modules.reduce((s,m)=>s+m.formatted_bytes,0)};
idx.generated_at=new Date().toISOString();
fs.writeFileSync(OUT+"/_MODULE_INDEX.json",JSON.stringify(idx,null,1));
console.log("added",added,"removed",removed,"totals",idx.totals);
ar.close();
