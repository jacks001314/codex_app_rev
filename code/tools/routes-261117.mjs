import fs from "node:fs";
import { AsarArchive } from "./asar.mjs";
import { ARCHIVE, APP_VERSION, INVENTORY, OUT, PREV_OUT } from "./ver-261117.mjs";
const ar=new AsarArchive(ARCHIVE);
const inv=JSON.parse(fs.readFileSync(INVENTORY,"utf8"));
const files=inv.entries.filter(e=>!e.d&&e.x===".js"&&/^webview\/assets\//.test(e.p));
const PATTERNS=[
  ["route",/path:"(\/[^"]*)"/g],
  ["match",/RQ\)\(\s*"(\/[^"]*)"\s*\)/g],
  ["navigate",/navigate\(\s*"(\/[^"]*)"/g],
  ["link",/to:"(\/[^"]*)"/g],
  ["navigateTemplate",/navigate\(`(\/[^`]*)`/g]
];
const out=new Map();
for(const e of files){const t=ar.readText(e.p);if(!t)continue;const base=e.p.split("/").pop();
  for(const [kind,re] of PATTERNS){re.lastIndex=0;let m;while((m=re.exec(t))!==null){const r=m[1];if(r.length>90)continue;
    const rec=out.get(r)??{route:r,kinds:new Set(),files:new Map()};rec.kinds.add(kind);rec.files.set(base,(rec.files.get(base)??0)+1);out.set(r,rec)}}}
const list=[...out.values()].map(x=>({route:x.route,kinds:[...x.kinds].sort(),files:[...x.files].sort((a,b)=>b[1]-a[1]).slice(0,6).map(([f,c])=>({file:f,count:c})),hits:[...x.files.values()].reduce((a,b)=>a+b,0)})).sort((a,b)=>a.route.localeCompare(b.route));
const byKind={};for(const x of list)for(const k of x.kinds)byKind[k]=(byKind[k]??0)+1;
const pref=new Map();for(const x of list){const p=x.route.split("/")[1]||"(root)";pref.set(p,(pref.get(p)??0)+1)}
console.log("distinct routes",list.length,"byKind",JSON.stringify(byKind));
console.log("top-level prefixes:");[...pref].sort((a,b)=>b[1]-a[1]).slice(0,20).forEach(([p,n])=>console.log("  "+String(n).padStart(3),"/"+p));
const oldJson=JSON.parse(fs.readFileSync(PREV_OUT+"/app-shell/_ROUTES.json","utf8"));
const old=new Set(oldJson.routes.map(r=>r.route));
const cur=new Set(list.map(x=>x.route));
const added=[...cur].filter(r=>!old.has(r)), removed=[...old].filter(r=>!cur.has(r));
console.log("added vs 26.1106:",added.length,added.slice(0,40).join(", "));
console.log("missing vs 26.1106:",removed.length,removed.slice(0,40).join(", "));
fs.writeFileSync(OUT+"/app-shell/_ROUTES.json",JSON.stringify({generated_at:new Date().toISOString(),app_version:APP_VERSION,source:"webview/assets/**/*.js: path:\"/…\" (route table), RQ)() match, navigate(), to: link",note:"Route strings are registration evidence; component ownership is inferred from the containing chunk.",by_kind:byKind,count:list.length,prefixes:[...pref].sort((a,b)=>b[1]-a[1]).map(([prefix,count])=>({prefix:"/"+prefix,count})),routes:list,diff_26_1106:{added,removed}},null,1));
ar.close();
