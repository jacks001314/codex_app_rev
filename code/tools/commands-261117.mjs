import fs from "node:fs";
import { APP_VERSION, OUT, PREV_OUT } from "./ver-261117.mjs";
const parse=(root)=>{
  const out=new Map();
  for(const f of fs.readdirSync(root).filter(f=>f.endsWith(".js"))){
    const t=fs.readFileSync(root+"/"+f,"utf8");
    for(const m of t.matchAll(/\{\s*id:\s*"([a-zA-Z][\w.-]+)",\s*titleIntlId:\s*"(codex\.command[^"]*)"/g)){
      const id=m[1],title=m[2];
      const tail=t.slice(m.index,m.index+1200);
      const keys=[...tail.matchAll(/key:\s*"([^"]+)"/g)].map(x=>x[1]).slice(0,4);
      const scope=/shortcutScope:\s*"([^"]+)"/.exec(tail)?.[1]??null;
      const avail=/availableIn:\s*\[([^\]]*)\]/.exec(tail)?.[1]?.replace(/"/g,"")??null;
      if(!out.has(id))out.set(id,{id,title_intl:title,default_keybindings:keys,shortcut_scope:scope,available_in:avail,files:[f]});
    }
  }
  return out;
};
const nw=parse(OUT+"/main-process/build");
const oldJson=JSON.parse(fs.readFileSync(PREV_OUT+"/main-process/_COMMAND_TABLE.json","utf8"));
const old=new Map(oldJson.commands.map(c=>[c.id,c]));
const list=[...nw.values()].sort((a,b)=>a.id.localeCompare(b.id));
const added=list.filter(c=>!old.has(c.id)), removed=[...old.values()].filter(c=>!nw.has(c.id));
console.log("commands new",nw.size,"old",old.size,"added",added.length,"removed",removed.length);
console.log("added:",added.map(c=>c.id).join(", "));
console.log("removed:",removed.map(c=>c.id).join(", "));
const kb=[...nw.values()].filter(c=>c.default_keybindings.length);
console.log("with keybindings",kb.length);
fs.writeFileSync(OUT+"/main-process/_COMMAND_TABLE.json",JSON.stringify({generated_at:new Date().toISOString(),app_version:APP_VERSION,source:"main-process/build/*.js: id+titleIntlId+defaultKeybindings+availableIn",count:list.length,commands:list,diff_26_1106:{added:added.map(c=>c.id),removed:removed.map(c=>c.id)}},null,1));
