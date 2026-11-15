import fs from "node:fs";
function parse(root){
  const out=new Map();
  for(const f of fs.readdirSync(root).filter(f=>f.endsWith(".js"))){
    const t=fs.readFileSync(root+"/"+f,"utf8");
    for(const m of t.matchAll(/\{\s*id:"([a-zA-Z][\w.-]+)",\s*titleIntlId:"(codex\.command[^"]*)"/g)){
      const id=m[1],title=m[2];
      // look ahead for defaultKeybindings and scope in the following 800 chars
      const tail=t.slice(m.index,m.index+900);
      const keys=[...tail.matchAll(/key:"([^"]+)"/g)].map(x=>x[1]).slice(0,3);
      const scope=/shortcutScope:"([^"]+)"/.exec(tail)?.[1]??null;
      const avail=/availableIn:\[([^\]]*)\]/.exec(tail)?.[1]?.replace(/"/g,"")??null;
      if(!out.has(id))out.set(id,{id,title_intl:title,default_keybindings:keys,shortcut_scope:scope,available_in:avail,files:[f]});
    }
  }
  return out;
}
const nw=parse("code/app-261106/main-process/build");
const old=parse("code/app-261103/main-process/build");
console.log("commands new",nw.size,"old",old.size);
const list=[...nw.values()].sort((a,b)=>a.id.localeCompare(b.id));
const added=list.filter(c=>!old.has(c.id)), removed=[...old.values()].filter(c=>!nw.has(c.id));
console.log("added",added.length,added.map(c=>c.id).join(", "));
console.log("removed",removed.length,removed.map(c=>c.id).join(", "));
fs.writeFileSync("code/app-261106/main-process/_COMMAND_TABLE.json",JSON.stringify({generated_at:new Date().toISOString(),app_version:"26.1106.51428",source:"main-process/build/*.js: id+titleIntlId+defaultKeybindings+availableIn",count:list.length,commands:list,diff_26_1103:{added:added.map(c=>c.id),removed:removed.map(c=>c.id)}},null,1));

