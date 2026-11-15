import fs from "node:fs";
import { AsarArchive } from "./asar.mjs";
const ar=new AsarArchive("C:/Program Files/WindowsApps/OpenAI.Codex_26.1106.6628.0_x64__2p2nqsd0c76g0/app/resources/app.asar");
const inv=JSON.parse(fs.readFileSync("inventories/inventory-261106.json","utf8"));
const files=inv.entries.filter(e=>!e.d&&e.x===".js"&&/^webview\/assets\//.test(e.p));
const PATTERNS=[
  ["route",/path:"(\/[^"]*)"/g],
  ["match",/RQ\)\(\s*"(\/[^"]*)"\s*\)/g],
  ["navigate",/navigate\(\s*"(\/[^"]*)"/g],
  ["link",/to:"(\/[^"]*)"/g]
];
const out=new Map();
for(const e of files){const t=ar.readText(e.p);if(!t)continue;const base=e.p.split("/").pop();
  for(const [kind,re] of PATTERNS){re.lastIndex=0;let m;while((m=re.exec(t))!==null){const r=m[1];if(r.length>90)continue;
    const rec=out.get(r)??{route:r,kinds:new Set(),files:new Map()};rec.kinds.add(kind);rec.files.set(base,(rec.files.get(base)??0)+1);out.set(r,rec)}}}
const list=[...out.values()].map(x=>({route:x.route,kinds:[...x.kinds].sort(),files:[...x.files].sort((a,b)=>b[1]-a[1]).slice(0,6).map(([f,c])=>({file:f,count:c})),hits:[...x.files.values()].reduce((a,b)=>a+b,0)})).sort((a,b)=>a.route.localeCompare(b.route));
const byKind={};for(const x of list)for(const k of x.kinds)byKind[k]=(byKind[k]??0)+1;
console.log("distinct routes",list.length,"byKind",JSON.stringify(byKind));
console.log("top-level prefixes:");
const pref=new Map();for(const x of list){const p=x.route.split("/")[1]||"(root)";pref.set(p,(pref.get(p)??0)+1)}
[...pref].sort((a,b)=>b[1]-a[1]).forEach(([p,n])=>console.log("  "+String(n).padStart(3),"/"+p));
// old baseline from extracted 261103 chunks
const old=new Set();
const walk=(d)=>{for(const e of fs.readdirSync(d,{withFileTypes:true})){const f=d+"/"+e.name;if(e.isDirectory()){if(!e.name.startsWith("_"))walk(f)}else if(f.endsWith(".js")){const t=fs.readFileSync(f,"utf8");for(const [kind,re] of PATTERNS){re.lastIndex=0;let m;while((m=re.exec(t))!==null)old.add(m[1])}}}};
walk("code/app-261103");
const cur=new Set(list.map(x=>x.route));
console.log("\nbaseline(partial 261103 extracted) routes",old.size);
console.log("added vs partial baseline:",[...cur].filter(r=>!old.has(r)).join(", ")||"(none)");
console.log("missing vs partial baseline:",[...old].filter(r=>!cur.has(r)).join(", ")||"(none)");
fs.writeFileSync("code/app-261106/app-shell/_ROUTES.json",JSON.stringify({generated_at:new Date().toISOString(),app_version:"26.1106.51428",source:"webview/assets/**/*.js: path:\"/…\" (route table), RQ)() match, navigate(), to: link",note:"Route strings are registration evidence; component ownership is inferred from the containing chunk.",by_kind:byKind,count:list.length,prefixes:[...pref].sort((a,b)=>b[1]-a[1]).map(([prefix,count])=>({prefix:"/"+prefix,count})),routes:list,diff_26_1103_extracted:{added:[...cur].filter(r=>!old.has(r)),missing:[...old].filter(r=>!cur.has(r))}},null,1));
ar.close();

