import fs from "node:fs";import path from "node:path";
const root="codex_app_rev/code/app-261103";const seen=new Map();let dup=0,total=0;
function walk(p){for(const e of fs.readdirSync(p,{withFileTypes:true})){const f=path.join(p,e.name);if(e.isDirectory())walk(f);else if(/\.(js|css|mjs)$/.test(e.name)){total++;const k=e.name;if(seen.has(k)){dup++;console.log("DUP",k,seen.get(k),f)}else seen.set(k,f)}}}
walk(root);console.log("files",total,"duplicates",dup);
