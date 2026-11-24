import fs from "node:fs";
import { WORK, INVENTORY } from "./ver-261117.mjs";
const data=JSON.parse(fs.readFileSync(WORK+"/chunk-modules.json","utf8"));
const MANDATORY={
 settings:["25051","178725","872510","71320","524289","364313","559869","468418","978336","433468"],
 conversation:["164460","154721","998447","10633","417402","827769"],
 business:["480092","281600","237710","61375","422435"],
 "workspace-agents":["648406","292001","80397"],
 "enterprise-trust":["185223","899333","583345","66689","356876"],
 spaces:["767143","919312","878742"],
 plugins:["819365","737004","958430","947156"],
 "image-editing":["216721"],
 "chatgpt-surfaces":["35015","442499","361976","135839","101248","581340","323764"],
 learning:["682103","865314","791175"],
 profile:["403035","192656","584510"],
 mobile:["996150"],
 "app-shell":["864349","975992","969257"],
 "left-nav":["881612","792740"],
 editors:["715322","687541","35702"],
 composer:["839700","122854"]
};
const CAPS={learning:[17,12*1048576],settings:[28,11*1048576],conversation:[19,10*1048576],"chatgpt-surfaces":[17,9*1048576],business:[15,8*1048576],spaces:[13,7*1048576],composer:[11,6*1048576],"left-nav":[11,6*1048576],editors:[9,5*1048576],"enterprise-trust":[14,8*1048576],plugins:[11,6*1048576],"app-shell":[9,4*1048576],"workspace-agents":[10,5*1048576],profile:[8,4*1048576],"image-editing":[8,4*1048576],misc:[10,4*1048576],writing:[6,3*1048576],voice:[5,2*1048576],mobile:[3,2*1048576],"codex-micro":[2,2*1048576]};
const plan=[]; const globalSeen=new Set();
const inv=JSON.parse(fs.readFileSync(INVENTORY,"utf8"));
const invById=new Map();
for(const e of inv.entries){if(e.d||e.x!==".js"||!e.p.startsWith("webview/assets/async/"))continue;const f=e.p.split("/").pop();invById.set(f.split(".")[0],{file:f,bytes:e.s,messages:0,score:0,namespaces:[["(no i18n)",0]]})}
const idOf=f=>f.split(".")[0];
for(const {module,chunks} of data){
  const [maxFiles,maxBytes]=CAPS[module]??[6,2*1048576];
  const rank=c=>(c.score||c.messages);
  const sorted=[...chunks].sort((a,b)=>rank(b)-rank(a)||a.bytes-b.bytes);
  const picked=[]; const seen=new Set();
  const add=(c,why)=>{if(!c||seen.has(c.file)||globalSeen.has(c.file))return false;seen.add(c.file);globalSeen.add(c.file);picked.push({file:c.file,bytes:c.bytes,messages:c.messages,score:c.score,selected_by:why,namespaces:c.namespaces.map(([n,k])=>n+":"+k).slice(0,4)});return true};
  for(const id of MANDATORY[module]??[]) add(sorted.find(c=>idOf(c.file)===id)??chunks.find(c=>idOf(c.file)===id)??invById.get(id),"mandatory");
  let bytes=picked.reduce((s,c)=>s+c.bytes,0);
  for(const c of sorted){if(picked.length>=maxFiles||bytes+c.bytes>maxBytes)continue;if(add(c,"namespace-score"))bytes+=c.bytes}
  plan.push({module,files:picked});
  console.log(module.padEnd(20),String(picked.length).padStart(3),"files",(picked.reduce((s,c)=>s+c.bytes,0)/1048576).toFixed(1).padStart(6)+"MB");
}
fs.writeFileSync(WORK+"/extract-plan.json",JSON.stringify(plan,null,1));
console.log("total",plan.reduce((s,m)=>s+m.files.length,0),"files",(plan.reduce((s,m)=>s+m.files.reduce((x,f)=>x+f.bytes,0),0)/1048576).toFixed(1)+"MB");

