import fs from "node:fs";
const data=JSON.parse(fs.readFileSync("codex_app_rev/.work/chunk-modules-261103.json","utf8"));
const MANDATORY={
 settings:["405910.89912dbb76.js","499225.6d2e47bea2.js","324957.776af63e2a.js","832672.5d5bbf639a.js","680701.36ae631051.js","837769.5833a3e219.js","615197.759a20d54a.js","851065.6d7fb580fa.js","424391.8693f01cd4.js"],
 learning:["865314.861ab492d6.js","842103.e91c773d63.js","457705.f3ff9fbb70.js","816316.7fb0d0e0c7.js","106556.4ebe1efe51.js"],
 conversation:["164460.5d9128b2db.js"],
 business:["394872.b88ad78e2a.js","272308.2509930e34.js","737555.f649d57c11.js","84934.9d3243b2ca.js","678412.6ba379eee2.js"],
 "workspace-agents":["935979.a5260b2a69.js"],
 "enterprise-trust":["922492.8f97ddc9a7.js","312026.87adc043a1.js","920910.8d98fd9b96.js","85236.c194df1024.js","220821.b4a9b80850.js","720410.9eca2290fe.js"],
 spaces:["384375.45e1f0cefc.js","146502.f329604e0b.js","236683.463da52c65.js"]
};
const CAPS={learning:[17,9*1048576],settings:[24,12*1048576],conversation:[12,8*1048576],composer:[10,6*1048576],spaces:[12,5*1048576],business:[12,6*1048576],"workspace-agents":[8,3*1048576],"enterprise-trust":[12,5*1048576],"left-nav":[10,4*1048576],plugins:[8,3*1048576],"chatgpt-surfaces":[10,5*1048576],"app-shell":[8,2*1048576],editors:[6,3*1048576],writing:[5,1*1048576],voice:[4,1*1048576],"codex-micro":[2,1*1048576],misc:[8,3*1048576]};
const plan=[]; const globalSeen=new Set();
for(const {module,chunks} of data){
  const [maxFiles,maxBytes]=CAPS[module]??[6,2*1048576];
  const rank=c=>(c.score||c.messages);
  const sorted=[...chunks].sort((a,b)=>rank(b)-rank(a)||a.bytes-b.bytes);
  const picked=[]; const seen=new Set();
  const add=(c,why)=>{ if(!c||seen.has(c.file)||globalSeen.has(c.file))return false; seen.add(c.file); globalSeen.add(c.file); picked.push({file:c.file,bytes:c.bytes,messages:c.messages,score:c.score,selected_by:why,namespaces:c.namespaces.map(([n,k])=>n+":"+k).slice(0,4)}); return true; };
  for(const f of MANDATORY[module]??[]) add(sorted.find(c=>c.file===f)??chunks.find(c=>c.file===f),"mandatory");
  let bytes=picked.reduce((s,c)=>s+c.bytes,0);
  for(const c of sorted){ if(picked.length>=maxFiles||bytes+c.bytes>maxBytes)continue; if(add(c,"namespace-score")) bytes+=c.bytes; }
  plan.push({module,files:picked});
  console.log(module.padEnd(20),String(picked.length).padStart(3),"files",(picked.reduce((s,c)=>s+c.bytes,0)/1048576).toFixed(1).padStart(6)+"MB");
}
fs.writeFileSync("codex_app_rev/.work/extract-plan.json",JSON.stringify(plan,null,1));
console.log("total",plan.reduce((s,m)=>s+m.files.length,0),"files",(plan.reduce((s,m)=>s+m.files.reduce((x,f)=>x+f.bytes,0),0)/1048576).toFixed(1)+"MB");
