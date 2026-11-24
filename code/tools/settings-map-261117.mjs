import fs from "node:fs";
import path from "node:path";
import { APP_VERSION, ARCHIVE, PREV_OUT, WORK, OUT } from "./ver-261117.mjs";
const S=OUT+"/settings";
const find=(re)=>fs.readdirSync(S).find(f=>re.test(f));
const descFile=find(/^364313\./), navFile=find(/^468418\./), visFile=find(/^559869\./), loaderFile=fs.readdirSync(OUT+"/left-nav").find(f=>f.startsWith("881612."));
const descText=fs.readFileSync(path.join(S,descFile),"utf8");
const navText=fs.readFileSync(path.join(S,navFile),"utf8");
const visText=fs.readFileSync(path.join(S,visFile),"utf8");
const loaderText=fs.readFileSync(path.join(OUT,"left-nav",loaderFile),"utf8");
function skipToken(s,i){const q=s[i];i++;while(i<s.length){if(s[i]==="\\"){i+=2;continue}if(s[i]===q)return i+1;i++}return s.length}
function balanced(s,open,o="{",c="}"){let i=open,d=0;while(i<s.length){const ch=s[i];if(ch==='"'||ch==="'"||ch==="`"){i=skipToken(s,i);continue}if(ch===o)d++;else if(ch===c){d--;if(!d)return s.slice(open,i+1)}i++}return null}
const arrAfter=(s,marker)=>{const at=s.indexOf(marker);if(at<0)return null;const open=s.indexOf("[",at);if(open<0)return null;return balanced(s,open,"[","]")};
const arrAfterRe=(s,re)=>{const m=re.exec(s);if(!m)return null;const open=s.indexOf("[",m.index);if(open<0)return null;return balanced(s,open,"[","]")};
const objAfterRe=(s,re)=>{const m=re.exec(s);if(!m)return null;const open=s.indexOf("{",m.index);if(open<0)return null;return balanced(s,open,"{","}")};
const objAfter=(s,marker)=>{const at=s.indexOf(marker);if(at<0)return null;const open=s.indexOf("{",at);if(open<0)return null;return balanced(s,open,"{","}")};
const descArr=arrAfterRe(descText,/HX\s*:\s*\[/)||"[]";
const descriptors=[...descArr.matchAll(/\{\s*slug:"([a-z0-9-]+)"(?:\s*,\s*appRoute:"([^"]+)")?\s*\}/g)].map(m=>({slug:m[1],appRoute:m[2]??null}));
const navOrderArr=(arrAfter(navText,"eB =")||"[]").replace(/^\[/,"").replace(/\]$/,"");
const navOrderList=navOrderArr.replace(/"/g,"").split(",").map(s=>s.trim()).filter(s=>/^[a-z0-9-]+$/.test(s));
const navArr=arrAfter(navText,"eY =")||"[]";
function splitObjects(s){const out=[];let i=0;while(i<s.length){const st=s.indexOf("{",i);if(st<0)break;const ob=balanced(s,st,"{","}");if(!ob)break;out.push(ob);i=st+ob.length}return out}
const navGroups=[];
for(const ob of splitObjects(navArr)){
  const key=/key:\s*"([a-z0-9-]+)"/.exec(ob)?.[1];
  const heading=/heading:[\s\S]{0,200}?id:\s*"([^"]+)"/.exec(ob)?.[1]??null;
  const sl=/slugs:\s*\[([\s\S]*?)\]/.exec(ob)?.[1]??"";
  const slugs=[...sl.matchAll(/"([a-z0-9-]+)"/g)].map(m=>m[1]);
  if(key)navGroups.push({key,heading_id:heading,slugs});
}
const capObj=objAfterRe(visText,/eu\s*=\s*\{/)||"";
const capability={};for(const m of capObj.matchAll(/(?:"([a-z0-9-]+)"|([a-z0-9-]+)):\s*"([A-Za-z]+)"/g))capability[m[1]??m[2]]=m[3];
const webArr=arrAfterRe(visText,/eC\s*=\s*\[/)||"[]";
const allowedOnWeb=[...webArr.matchAll(/"([a-z0-9-]+)"/g)].map(m=>m[1]);
const chunkMap=JSON.parse(fs.readFileSync(WORK+"/chunk-map.json","utf8"));
const slugChunks={};
for(const line of loaderText.split("\n")){
  const m=/^\s*"?([a-z0-9-]+)"?:\s*\(0,[A-Za-z0-9_$]+\.[A-Za-z0-9_$]+\)\((.*)$/.exec(line);
  if(!m)continue;
  const slug=m[1]; const ids=[...m[2].matchAll(/n\.e\((\d+)\)/g)].map(x=>x[1]);
  const component=/\)\.([A-Za-z0-9_$]+),?\s*$/.exec(m[2])?.[1]??null;
  if(ids.length)slugChunks[slug]={component,chunks:[...new Set(ids)].map(id=>({id,file:chunkMap.js[id]??null}))};
}
const old=JSON.parse(fs.readFileSync(PREV_OUT+"/settings/_SETTINGS_MAP.json","utf8"));
const cur=descriptors.map(d=>d.slug);
const out={generated_at:new Date().toISOString(),source:{archive:ARCHIVE,descriptor_chunk:"webview/assets/async/"+descFile,nav_chunk:"webview/assets/async/"+navFile,visibility_chunk:"webview/assets/async/"+visFile,loader_chunk:"webview/assets/async/"+loaderFile,app_version:APP_VERSION},slug_list:cur,nav_order_list:navOrderList,descriptor_order:descriptors,default_section:descriptors[0]?.slug??null,default_section_note:"取描述符表第一项；26.1106 的独立默认常量本版未找到（C 级）。",nav_groups:navGroups,allowed_on_web:allowedOnWeb,capability,slug_chunks:slugChunks,diff_26_1106:{slug_list_added:cur.filter(s=>!old.slug_list.includes(s)),slug_list_removed:old.slug_list.filter(s=>!cur.includes(s)),capability_added:Object.keys(capability).filter(k=>!(k in old.capability)),capability_removed:Object.keys(old.capability).filter(k=>!(k in capability)),allowed_on_web_added:allowedOnWeb.filter(s=>!old.allowed_on_web.includes(s)),allowed_on_web_removed:old.allowed_on_web.filter(s=>!allowedOnWeb.includes(s))},coverage:{slug_list:cur.length,nav_order_list:navOrderList.length,descriptor_order:descriptors.length,nav_groups:navGroups.length,capability:Object.keys(capability).length,allowed_on_web:allowedOnWeb.length,slug_chunks:Object.keys(slugChunks).length}};
fs.writeFileSync(S+"/_SETTINGS_MAP.json",JSON.stringify(out,null,1));
console.log(JSON.stringify(out.coverage));
console.log("slugs:",cur.join(", "));
navGroups.forEach(g=>console.log(g.key,"("+g.slugs.length+"):",g.slugs.join(",")));
console.log("default",out.default_section,"web",allowedOnWeb.join(","));
console.log("added",out.diff_26_1106.slug_list_added,"removed",out.diff_26_1106.slug_list_removed);
console.log("cap added",out.diff_26_1106.capability_added,"cap removed",out.diff_26_1106.capability_removed);
console.log("web added",out.diff_26_1106.allowed_on_web_added,"web removed",out.diff_26_1106.allowed_on_web_removed);
const cat=JSON.parse(fs.readFileSync(OUT+"/_catalog/i18n-messages.json","utf8"));
const bySlug=new Map();
for(const g of cat.groups)for(const m of g.messages){
  for(const slug of cur){
    if(m.id===`settings.nav.${slug}`||m.id===`settings.section.${slug}`||m.id.startsWith(`settings.${slug}.`)){
      const rec=bySlug.get(slug)??new Map();
      for(const f of m.files)rec.set(f,(rec.get(f)??0)+1);
      bySlug.set(slug,rec);
    }
  }
}
const chunksOut={_note:"slug → 承载该 slug 文案最多的 chunk（最多 5 个）。file 是 archive 内 basename，不一定在本次快照中抽取；要复核请按 app.asar 路径读取。"};
for(const slug of cur){const rec=bySlug.get(slug)??new Map();chunksOut[slug]=[...rec].sort((a,b)=>b[1]-a[1]).slice(0,5).map(([file,count])=>({file,count}))}
fs.writeFileSync(S+"/_SETTINGS_CHUNKS.json",JSON.stringify(chunksOut,null,1));
console.log("wrote _SETTINGS_CHUNKS.json");


