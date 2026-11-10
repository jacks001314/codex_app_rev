import fs from "node:fs";
import path from "node:path";
import { AsarArchive } from "./asar.mjs";
const [pattern, ...rest] = process.argv.slice(2);
const opts = { before: 160, after: 420, limit: 20, ext: ".js", scope: "webview/assets/" };
for (let i=0;i<rest.length;i++){ const a=rest[i]; if(a==="--before")opts.before=+rest[++i]; else if(a==="--after")opts.after=+rest[++i]; else if(a==="--limit")opts.limit=+rest[++i]; else if(a==="--scope")opts.scope=rest[++i]; }
const archive="C:/Program Files/WindowsApps/OpenAI.Codex_26.1103.4239.0_x64__2p2nqsd0c76g0/app/resources/app.asar";
const ar=new AsarArchive(archive);
const inv=JSON.parse(fs.readFileSync("codex_app_rev/inventories/inventory-261103.json","utf8"));
const re=new RegExp(pattern,"g");
let hits=0, filesHit=0;
for(const e of inv.entries){ if(e.d||e.x!==".js"||!e.p.startsWith(opts.scope))continue;
  const text=ar.readText(e.p); if(!text)continue;
  re.lastIndex=0; let m; let first=true;
  while((m=re.exec(text))!==null){
    if(first){filesHit++;first=false}
    const s=Math.max(0,m.index-opts.before), en=Math.min(text.length,m.index+(m[0]?.length??0)+opts.after);
    console.log("### "+e.p+"@"+m.index+" ("+e.s+"B)");
    console.log(text.slice(s,en).replace(/\n/g," "));
    if(++hits>=opts.limit){console.log("\n# limit reached; files hit "+filesHit);ar.close();process.exit(0)}
  }
}
console.log("\n# hits "+hits+", files hit "+filesHit);
ar.close();
