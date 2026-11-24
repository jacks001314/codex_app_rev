import fs from "node:fs";
import path from "node:path";
import { AsarArchive } from "./asar.mjs";
import { ARCHIVE, INVENTORY, WORK } from "./ver-261117.mjs";
const ar=new AsarArchive(ARCHIVE);
const inv=JSON.parse(fs.readFileSync(INVENTORY,"utf8"));
const files=inv.entries.filter(e=>!e.d&&e.x===".js"&&/^webview\/assets\//.test(e.p));
const MSG=/id:\s*(`[^`\n]+`|"[^"\n]+")\s*,\s*defaultMessage:\s*(`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*")(?:\s*,\s*description:\s*(`(?:[^`\\]|\\.)*`|"(?:[^"\\]|\\.)*"))?/g;
const decode=s=>s.slice(1,-1).replace(/\\(u\{([0-9a-fA-F]+)\}|u([0-9a-fA-F]{4})|x([0-9a-fA-F]{2})|n|r|t|b|f|v|0|'|"|`|\$|\\)/g,(m,u,brace,hex4,hex2)=>{
  if(brace)return String.fromCodePoint(parseInt(brace,16));
  if(hex4)return String.fromCharCode(parseInt(hex4,16));
  if(hex2)return String.fromCharCode(parseInt(hex2,16));
  return {"n":"\n","r":"\r","t":"\t","b":"\b","f":"\f","v":"\v","0":"\0","'":"'",'"':'"',"`":"`","$":"$","\\":"\\"}[u]??m;
});
const messages=new Map(); const chunks=[]; let scanned=0,bytes=0,withMsg=0;
for(const e of files){
  const text=ar.readText(e.p); if(text==null)continue;
  scanned++; bytes+=e.s;
  if(scanned%2500===0)console.error("scanned",scanned);
  const ids=new Set(); MSG.lastIndex=0; let m;
  while((m=MSG.exec(text))!==null){
    const id=decode(m[1]); if(!id||/\s/.test(id)||id.length>180)continue;
    ids.add(id);
    const rec=messages.get(id)??{id,text:decode(m[2]),description:null,files:new Set()};
    if(!rec.description&&m[3])rec.description=decode(m[3]);
    rec.files.add(path.posix.basename(e.p)); messages.set(id,rec);
  }
  if(ids.size){withMsg++;const ns=new Map();for(const id of ids){const k=id.split(".").slice(0,2).join(".");ns.set(k,(ns.get(k)??0)+1)}
    chunks.push({file:path.posix.basename(e.p),bytes:e.s,messages:ids.size,namespaces:[...ns].sort((a,b)=>b[1]-a[1]).slice(0,6)});}
}
const groupOf=id=>{const p=id.split(".");return p.length>=2?`${p[0]}.${p[1]}`:p[0]};
const groups=new Map();
for(const rec of messages.values()){const g=groupOf(rec.id);const a=groups.get(g)??[];a.push({id:rec.id,text:rec.text,description:rec.description,files:[...rec.files].sort().slice(0,4)});groups.set(g,a)}
for(const a of groups.values())a.sort((x,y)=>x.id.localeCompare(y.id));
const out={generated_at:new Date().toISOString(),source_archive:ARCHIVE,files_scanned:scanned,bytes_scanned:bytes,files_with_messages:withMsg,message_count:messages.size,group_count:groups.size,groups:[...groups].sort((a,b)=>a[0].localeCompare(b[0])).map(([group,msgs])=>({group,count:msgs.length,messages:msgs}))};
fs.writeFileSync(WORK+"/i18n.json",JSON.stringify(out,null,1));
fs.writeFileSync(WORK+"/chunk-messages.json",JSON.stringify(chunks.sort((a,b)=>b.messages-a.messages),null,1));
console.log(`scanned ${scanned} js / ${(bytes/1048576).toFixed(1)}MB, ${withMsg} chunks with messages, ${messages.size} messages in ${groups.size} groups`);
ar.close();
