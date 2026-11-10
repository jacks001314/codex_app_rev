import fs from "node:fs";
import { AsarArchive } from "./asar.mjs";
const ar=new AsarArchive("C:/Program Files/WindowsApps/OpenAI.Codex_26.1103.4239.0_x64__2p2nqsd0c76g0/app/resources/app.asar");
const src=p=>ar.readText("webview/assets/async/"+p);
const t405=src("405910.89912dbb76.js"), t499=src("499225.6d2e47bea2.js"), t324=src("324957.776af63e2a.js");
function skipToken(s,i){const q=s[i];i++;while(i<s.length){if(s[i]==="\\"){i+=2;continue}if(s[i]===q)return i+1;i++}return s.length}
function balanced(s,open,o="[",c="]"){let i=open,d=0;while(i<s.length){const ch=s[i];if(ch==='"'||ch==="'"||ch==="`"){i=skipToken(s,i);continue}if(ch===o)d++;else if(ch===c){d--;if(!d)return s.slice(open,i+1)}i++}return null}
function arrAfter(s,needle){const at=s.indexOf(needle);if(at<0)return null;return balanced(s,s.lastIndexOf("[",at))}
function objAfter(s,needle){const at=s.indexOf(needle);if(at<0)return null;return balanced(s,s.lastIndexOf("{",at),"{","}")}
const lits=f=>[...f.matchAll(/"([a-z0-9-]+)"/g)].map(m=>m[1]);
const descriptorSrc=arrAfter(t499,'[{slug:"general-settings"},{');
const slugList=lits(descriptorSrc||"");
const navSrc=arrAfter(t405,'[{key:"personal",heading:');
const navGroups=[];
if(navSrc){for(const seg of navSrc.split('{key:"').slice(1)){const key=/^([a-z]+)"/.exec(seg)?.[1];const heading_id=/heading:\(0,[A-Za-z0-9_$.]+\)\(\{id:"([^"]+)"/.exec(seg)?.[1]??null;const slugs=lits(/slugs:(\[[^\]]*\])/.exec(seg)?.[1]??"");navGroups.push({key,heading_id,slugs})}}
const allowedOnWeb=lits(arrAfter(t324,'["profile","agent","personalization"')||"");
const capSrc=objAfter(t324,'{account:"chatGpt"')||"";
const capability={};for(const m of capSrc.matchAll(/(?:"([a-z0-9-]+)"|([a-z0-9-]+)):"(chatGpt|codex|codexOrWorkLocal|codexLocal|chatGptOrCodex)"/g))capability[m[1]??m[2]]=m[3];
const defaultSection=/yF:"([a-z0-9-]+)"/.exec(t499)?.[1]??null;
const old=JSON.parse(fs.readFileSync("codex_app_rev/code/app-261016/settings/_SETTINGS_MAP.json","utf8"));
const oldSlugs=new Set(old.slug_list);
const out={generated_at:new Date().toISOString(),source:{archive:"C:/Program Files/WindowsApps/OpenAI.Codex_26.1103.4239.0_x64__2p2nqsd0c76g0/app/resources/app.asar",descriptor_chunk:"webview/assets/async/499225.6d2e47bea2.js",nav_chunk:"webview/assets/async/405910.89912dbb76.js",visibility_chunk:"webview/assets/async/324957.776af63e2a.js",app_version:"26.1103.32239"},slug_list:slugList,nav_order:slugList,default_section:defaultSection,nav_groups:navGroups,allowed_on_web:allowedOnWeb,capability,hardcoded_hidden:["family","skills-settings","time-management","billing","security","extension"],always_visible:["appearance","git-settings","worktrees","local-environments","environments","general-settings","personalization","hooks-settings","mcp-settings","keyboard-shortcuts"],diff_26_1016:{slug_list_added:slugList.filter(s=>!oldSlugs.has(s)),slug_list_removed:old.slug_list.filter(s=>!slugList.includes(s))},coverage:{slug_list:slugList.length,descriptor_order:slugList.length,nav_groups:navGroups.length,capability:Object.keys(capability).length,allowed_on_web:allowedOnWeb.length}};
fs.writeFileSync("codex_app_rev/code/app-261103/settings/_SETTINGS_MAP.json",JSON.stringify(out,null,1));
console.log(JSON.stringify(out.coverage));
console.log("slugs:",slugList.join(", "));
navGroups.forEach(g=>console.log(g.key,"("+g.slugs.length+"):",g.slugs.join(",")));
console.log("added",out.diff_26_1016.slug_list_added,"removed",out.diff_26_1016.slug_list_removed);
console.log("default",defaultSection,"web",allowedOnWeb);
ar.close();
