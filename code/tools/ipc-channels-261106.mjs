import fs from "node:fs";import path from "node:path";
const root="code/app-261106/main-process/build";
const chan=new Map();
for(const f of fs.readdirSync(root).filter(f=>f.endsWith(".js"))){
  const t=fs.readFileSync(path.join(root,f),"utf8");
  for(const m of t.matchAll(/"(codex_desktop:[A-Za-z0-9:${}_.-]+)"/g)){const c=m[1];const s=chan.get(c)??new Set();s.add(f);chan.set(c,s)}
}
const list=[...chan].map(([channel,files])=>({channel,files:[...files].sort()})).sort((a,b)=>a.channel.localeCompare(b.channel));
const old=fs.readFileSync("ipc-protocol.md","utf8");
const oldSet=new Set([...old.matchAll(/`(codex_desktop:[A-Za-z0-9:${}_.-]+)`/g)].map(m=>m[1]));
console.log("channels",list.length,"old",oldSet.size);
for(const c of list) console.log((oldSet.has(c.channel)?"  ":"+ ")+c.channel.padEnd(56),c.files.join(","));
console.log("\nmissing vs old:",[...oldSet].filter(c=>!chan.has(c)).join(", ")||"(none)");
fs.writeFileSync("code/app-261106/main-process/_IPC_CHANNELS.json",JSON.stringify({generated_at:new Date().toISOString(),app_version:"26.1106.51428",source:"main-process/build/*.js",count:list.length,channels:list,added_vs_26_1103:list.filter(c=>!oldSet.has(c.channel)).map(c=>c.channel),removed_vs_26_1103:[...oldSet].filter(c=>!chan.has(c))},null,1));

