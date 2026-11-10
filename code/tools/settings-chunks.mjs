import fs from "node:fs";
const cat=JSON.parse(fs.readFileSync("codex_app_rev/.work/i18n-261103.json","utf8"));
const map=JSON.parse(fs.readFileSync("codex_app_rev/code/app-261103/settings/_SETTINGS_MAP.json","utf8"));
const bySlug=new Map();
for(const g of cat.groups)for(const m of g.messages){
  for(const slug of map.slug_list){
    if(m.id===`settings.nav.${slug}`||m.id===`settings.section.${slug}`||m.id.startsWith(`settings.${slug}.`)){
      const rec=bySlug.get(slug)??new Map();
      for(const f of m.files)rec.set(f,(rec.get(f)??0)+1);
      bySlug.set(slug,rec);
    }
  }
}
const out={};
for(const slug of map.slug_list){
  const rec=bySlug.get(slug)??new Map();
  const top=[...rec].sort((a,b)=>b[1]-a[1]).slice(0,5);
  out[slug]=top.map(([file,count])=>({file,count}));
  console.log(slug.padEnd(22),top.map(([f,c])=>f+":"+c).join("  ")||"(no settings.<slug> messages)");
}
fs.writeFileSync("codex_app_rev/code/app-261103/settings/_SETTINGS_CHUNKS.json",JSON.stringify(out,null,1));
