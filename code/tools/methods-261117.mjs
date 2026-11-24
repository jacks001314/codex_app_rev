import fs from "node:fs";
import path from "node:path";
import { APP_VERSION, OUT, PREV_OUT } from "./ver-261117.mjs";
const root=OUT+"/main-process/build";
const allow=/^(account|app|config|item|mcpServer|plugin|skills|thread|turn|command|process|fs|hook|feedback|experimental|collab)\/|^model\/|^browser\/access$/;
const deny=/^model\/(?!list$|rerouted$|safetyBuffering\/updated$|verification$)/;
const methods=new Set(), filesByMethod=new Map();
for(const f of fs.readdirSync(root).filter(f=>f.endsWith(".js"))){
  const t=fs.readFileSync(path.join(root,f),"utf8");
  for(const m of t.matchAll(/"([a-zA-Z][A-Za-z0-9_.-]*\/[A-Za-z0-9_./-]+)"/g)){
    const s=m[1];
    if(!allow.test(s)||deny.test(s)||s.endsWith("/")||s.endsWith(":"))continue;
    methods.add(s); const arr=filesByMethod.get(s)??[]; if(!arr.includes(f))arr.push(f); filesByMethod.set(s,arr);
  }
}
const isNotification=s=>/(\/(updated|changed|started|completed|delta|closed|error|archived|deleted|unarchived|cleared|compacted|reverted|notification|progress|exited|itemAdded|environmentReady|disconnected|connected|outputDelta|legacyWarning))$/.test(s);
const groups={};
for(const s of [...methods].sort()){const k=s.split("/")[0];(groups[k]??=[]).push({method:s,kind:isNotification(s)?"notification":"request_or_response",files:filesByMethod.get(s)})}
const counts={};for(const [k,v] of Object.entries(groups))counts[k]=v.length;
const oldJson=JSON.parse(fs.readFileSync(PREV_OUT+"/main-process/_APP_SERVER_METHODS.json","utf8"));
const oldSet=new Set(Object.values(oldJson.groups).flat().map(x=>x.method));
const added=[...methods].filter(m=>!oldSet.has(m)).sort();
const removed=[...oldSet].filter(m=>!methods.has(m)).sort();
console.log(JSON.stringify(counts,null,1));console.log("TOTAL",methods.size,"added",added.length,"removed",removed.length);
console.log("added:",added.join(", "));
console.log("removed:",removed.join(", "));
fs.writeFileSync(OUT+"/main-process/_APP_SERVER_METHODS.json",JSON.stringify({generated_at:new Date().toISOString(),app_version:APP_VERSION,source:"main-process/build/*.js 字符串字面量",note:"kind 由方法名后缀推断，属 C 级；request 与 response 未区分",counts,groups,added_vs_26_1106:added,removed_vs_26_1106:removed},null,1));
