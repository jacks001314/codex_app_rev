import fs from "node:fs";
import { AsarArchive } from "./asar.mjs";
const archive="C:/Program Files/WindowsApps/OpenAI.Codex_26.1106.6628.0_x64__2p2nqsd0c76g0/app/resources/app.asar";
const ar=new AsarArchive(archive);
const runtimePath="webview/assets/348410.1a97dde15f.js";
const rt=ar.readText(runtimePath);
console.log("runtime bytes",rt.length);
for(const needle of ['p.u=e=>"assets/async/"','p.miniCssF=e=>"assets/async/"','__rspack_esm_ids','p.p=']) console.log(JSON.stringify(needle), rt.indexOf(needle));
function objectAfter(text,marker){const at=text.indexOf(marker);if(at<0)return null;const open=text.indexOf("{",at);let i=open,depth=0;while(i<text.length){const c=text[i];if(c==='"'||c==="'"||c==="`"){const q=c;i++;while(i<text.length){if(text[i]==="\\"){i+=2;continue}if(text[i]===q){i++;break}i++}continue}if(c==="{")depth++;else if(c==="}"){depth--;if(!depth)return text.slice(open,i+1)}i++}return null}
const parsePairs=src=>{const out=new Map();for(const m of src.matchAll(/(\d+)\s*:\s*"([0-9a-f]+)"/g))out.set(m[1],m[2]);return out};
const jsObj=objectAfter(rt,'p.u=e=>"assets/async/"+e+"."+(');
const cssObj=objectAfter(rt,'p.miniCssF=e=>"assets/async/"+(');
const js=parsePairs(jsObj||""), css=parsePairs(cssObj||"");
console.log("js ids",js.size,"css ids",css.size);
const inv=JSON.parse(fs.readFileSync("inventories/inventory-261106.json","utf8"));
const present=new Set(inv.entries.filter(e=>!e.d).map(e=>e.p));
const sizes=new Map(inv.entries.filter(e=>!e.d).map(e=>[e.p,e.s]));
const map={generated_at:new Date().toISOString(),source_archive:archive,runtime_chunk:runtimePath,js:Object.fromEntries([...js].map(([id,h])=>[id,`async/${id}.${h}.js`])),css:Object.fromEntries([...css].map(([id,h])=>[id,`async/${h}.css`]))};
let missingJs=0,missingCss=0,total=0;
for(const f of Object.values(map.js)){if(!present.has("webview/assets/"+f))missingJs++;total+=sizes.get("webview/assets/"+f)||0}
for(const f of Object.values(map.css))if(!present.has("webview/assets/"+f))missingCss++;
console.log("missing js",missingJs,"missing css",missingCss,"mapped js MB",(total/1048576).toFixed(1));
fs.writeFileSync(".work/261106/chunk-map.json",JSON.stringify(map));
ar.close();

