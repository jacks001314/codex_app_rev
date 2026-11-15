import fs from "node:fs";
const f885=fs.readdirSync("code/app-261106/left-nav").find(f=>f.startsWith("885910."));
const f212=fs.readdirSync("code/app-261106/settings").find(f=>f.startsWith("21225."));
const t885=fs.readFileSync("code/app-261106/left-nav/"+f885,"utf8");
const t212=fs.readFileSync("code/app-261106/settings/"+f212,"utf8");
const t160=fs.readFileSync(".work/261106/160740.8d93ddc2e4.js","utf8");
function skipToken(s,i){const q=s[i];i++;while(i<s.length){if(s[i]==="\\"){i+=2;continue}if(s[i]===q)return i+1;i++}return s.length}
function balanced(s,open,o="{",c="}"){let i=open,d=0;while(i<s.length){const ch=s[i];if(ch==='"'||ch==="'"||ch==="`"){i=skipToken(s,i);continue}if(ch===o)d++;else if(ch===c){d--;if(!d)return s.slice(open,i+1)}i++}return null}
const arrAfter=(s,marker,o="[",c="]")=>{const at=s.indexOf(marker);if(at<0)return null;const open=s.indexOf(o,at);if(open<0)return null;return balanced(s,open,o,c)};
const objAfter=(s,marker)=>{const at=s.indexOf(marker);if(at<0)return null;const open=s.indexOf("{",at);if(open<0)return null;return balanced(s,open,"{","}")};
// 1. descriptor order + appRoute
const descArr=arrAfter(t885,"HX:");
const descriptors=[...descArr.matchAll(/\{\s*slug:\s*"([a-z0-9-]+)"(?:\s*,\s*appRoute:\s*"([^"]+)")?\s*\}/g)].map(m=>({slug:m[1],appRoute:m[2]??null}));
// 2. nav groups
const navAnchor=t212.indexOf('key: "personal",');const navArr=balanced(t212,t212.lastIndexOf("[",navAnchor),"[","]");
function splitObjects(s){const out=[];let i=0;while(i<s.length){const st=s.indexOf("{",i);if(st<0)break;const ob=balanced(s,st,"{","}");if(!ob)break;out.push(ob);i=st+ob.length}return out}
const navGroups=[];
for(const ob of splitObjects(navArr)){
  const key=/key:\s*"([a-z]+)"/.exec(ob)?.[1];
  const heading=/heading:[\s\S]{0,240}?id:\s*"([^"]+)"/.exec(ob)?.[1]??null;
  const sl=/slugs:\s*\[([\s\S]*?)\]/.exec(ob)?.[1]??"";
  const slugs=[...sl.matchAll(/"([a-z0-9-]+)"/g)].map(m=>m[1]);
  if(key)navGroups.push({key,heading_id:heading,slugs});
}
const defaultSection=/yF:\s*"([a-z0-9-]+)"/.exec(t885)?.[1]??null;
// 3. capability + allowed_on_web
const epObj=objAfter(t160,"ep={")||"";
const capability={};for(const m of epObj.matchAll(/(?:"([a-z0-9-]+)"|([a-z0-9-]+)):\s*"([A-Za-z]+)"/g))capability[m[1]??m[2]]=m[3];
const ehArr=arrAfter(t160,"let eh=")||"[]";
const allowedOnWeb=[...ehArr.matchAll(/"([a-z0-9-]+)"/g)].map(m=>m[1]);
const old=JSON.parse(fs.readFileSync("code/app-261103/settings/_SETTINGS_MAP.json","utf8"));
const cur=descriptors.map(d=>d.slug);
const out={generated_at:new Date().toISOString(),source:{archive:"C:/Program Files/WindowsApps/OpenAI.Codex_26.1106.6628.0_x64__2p2nqsd0c76g0/app/resources/app.asar",descriptor_chunk:"webview/assets/async/"+f885,nav_chunk:"webview/assets/async/"+f212,visibility_chunk:"webview/assets/async/160740.8d93ddc2e4.js",app_version:"26.1106.51428"},slug_list:cur,descriptor_order:descriptors,default_section:defaultSection,nav_groups:navGroups,allowed_on_web:allowedOnWeb,capability,always_visible:["appearance","git-settings","worktrees","local-environments","general-settings","personalization","hooks-settings","mcp-settings","keyboard-shortcuts"],diff_26_1103:{slug_list_added:cur.filter(s=>!old.slug_list.includes(s)),slug_list_removed:old.slug_list.filter(s=>!cur.includes(s)),capability_added:Object.keys(capability).filter(k=>!(k in old.capability)),capability_removed:Object.keys(old.capability).filter(k=>!(k in capability)),allowed_on_web_added:allowedOnWeb.filter(s=>!old.allowed_on_web.includes(s)),allowed_on_web_removed:old.allowed_on_web.filter(s=>!allowedOnWeb.includes(s))},coverage:{slug_list:cur.length,descriptor_order:descriptors.length,nav_groups:navGroups.length,capability:Object.keys(capability).length,allowed_on_web:allowedOnWeb.length}};
fs.writeFileSync("code/app-261106/settings/_SETTINGS_MAP.json",JSON.stringify(out,null,1));
console.log(JSON.stringify(out.coverage));
console.log("slugs:",cur.join(", "));
navGroups.forEach(g=>console.log(g.key,"("+g.slugs.length+"):",g.slugs.join(",")));
console.log("default",defaultSection,"web",allowedOnWeb.join(","));
console.log("added",out.diff_26_1103.slug_list_added,"removed",out.diff_26_1103.slug_list_removed);
console.log("cap added",out.diff_26_1103.capability_added,"cap removed",out.diff_26_1103.capability_removed);
console.log("web added",out.diff_26_1103.allowed_on_web_added,"web removed",out.diff_26_1103.allowed_on_web_removed);


