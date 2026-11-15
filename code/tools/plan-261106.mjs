import fs from "node:fs";
const data=JSON.parse(fs.readFileSync(".work/261106/chunk-modules.json","utf8"));
const MANDATORY={
 settings:["729009","912008","832672","680701"],
 learning:["865314","842103","457705","816316","106556"],
 conversation:["164460","720744"],
 business:["394872","272308","737555","84934","678412","951361"],
 "workspace-agents":["935979","487049"],
 "enterprise-trust":["922492","312026","920910","85236","220821","720410","194951","150595"],
 spaces:["384375","146502","236683","156997"],
 plugins:["819365","638374","168352"],
 "image-editing":["87804"],"chatgpt-surfaces":["780452"]
};
const CAPS={learning:[17,9*1048576],settings:[26,13*1048576],conversation:[14,9*1048576],composer:[11,7*1048576],spaces:[13,6*1048576],business:[14,7*1048576],"workspace-agents":[9,4*1048576],"enterprise-trust":[13,6*1048576],"left-nav":[11,5*1048576],plugins:[10,4*1048576],"chatgpt-surfaces":[12,6*1048576],"image-editing":[8,3*1048576],"editors":[7,4*1048576],"app-shell":[8,3*1048576],writing:[6,2*1048576],voice:[5,1*1048576],"codex-micro":[2,1*1048576],misc:[9,4*1048576]};
const plan=[]; const globalSeen=new Set();
const idOf=f=>f.split(".")[0];
for(const {module,chunks} of data){
  const [maxFiles,maxBytes]=CAPS[module]??[6,2*1048576];
  const rank=c=>(c.score||c.messages);
  const sorted=[...chunks].sort((a,b)=>rank(b)-rank(a)||a.bytes-b.bytes);
  const picked=[]; const seen=new Set();
  const add=(c,why)=>{if(!c||seen.has(c.file)||globalSeen.has(c.file))return false;seen.add(c.file);globalSeen.add(c.file);picked.push({file:c.file,bytes:c.bytes,messages:c.messages,score:c.score,selected_by:why,namespaces:c.namespaces.map(([n,k])=>n+":"+k).slice(0,4)});return true};
  for(const id of MANDATORY[module]??[]) add(sorted.find(c=>idOf(c.file)===id)??chunks.find(c=>idOf(c.file)===id),"mandatory");
  let bytes=picked.reduce((s,c)=>s+c.bytes,0);
  for(const c of sorted){if(picked.length>=maxFiles||bytes+c.bytes>maxBytes)continue;if(add(c,"namespace-score"))bytes+=c.bytes}
  plan.push({module,files:picked});
  console.log(module.padEnd(20),String(picked.length).padStart(3),"files",(picked.reduce((s,c)=>s+c.bytes,0)/1048576).toFixed(1).padStart(6)+"MB");
}
fs.writeFileSync(".work/261106/extract-plan.json",JSON.stringify(plan,null,1));
console.log("total",plan.reduce((s,m)=>s+m.files.length,0),"files",(plan.reduce((s,m)=>s+m.files.reduce((x,f)=>x+f.bytes,0),0)/1048576).toFixed(1)+"MB");




