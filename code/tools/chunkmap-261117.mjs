import fs from "node:fs";
import { AsarArchive } from "./asar.mjs";
import { ARCHIVE, INVENTORY, WORK } from "./ver-261117.mjs";
const ar=new AsarArchive(ARCHIVE);
const html=ar.readText("webview/index.html")??"";
const entries=[...html.matchAll(/<script type="module" src="\/assets\/([0-9]+\.[0-9a-f]+\.js)"><\/script>/g)].map(m=>m[1]);
let runtime=null, rt="";
for(const f of entries){const t=ar.readText("webview/assets/"+f)??"";if(t.includes('p.u=e=>"assets/async/"')){runtime=f;rt=t;break}}
if(!runtime) throw new Error("runtime chunk not found");
console.log("entry chunks",entries.join(", "));
console.log("runtime",runtime,"bytes",rt.length);
function objectAfter(text,marker){const at=text.indexOf(marker);if(at<0)return null;const open=text.indexOf("{",at);let i=open,depth=0;while(i<text.length){const c=text[i];if(c==='"'||c==="'"||c==="`"){const q=c;i++;while(i<text.length){if(text[i]==="\\"){i+=2;continue}if(text[i]===q){i++;break}i++}continue}if(c==="{")depth++;else if(c==="}"){depth--;if(!depth)return text.slice(open,i+1)}i++}return null}
const parsePairs=src=>{const out=new Map();for(const m of src.matchAll(/(\d+)\s*:\s*"([0-9a-f]+)"/g))out.set(m[1],m[2]);return out};
const jsObj=objectAfter(rt,'p.u=e=>"assets/async/"+e+"."+(');
const cssObj=objectAfter(rt,'p.miniCssF=e=>"assets/async/"+(');
const js=parsePairs(jsObj||""), css=parsePairs(cssObj||"");
const inv=JSON.parse(fs.readFileSync(INVENTORY,"utf8"));
const present=new Set(inv.entries.filter(e=>!e.d).map(e=>e.p));
const sizes=new Map(inv.entries.filter(e=>!e.d).map(e=>[e.p,e.s]));
const map={generated_at:new Date().toISOString(),source_archive:ARCHIVE,entry_chunks:entries,runtime_chunk:"webview/assets/"+runtime,js:Object.fromEntries([...js].map(([id,h])=>[id,`async/${id}.${h}.js`])),css:Object.fromEntries([...css].map(([id,h])=>[id,`async/${h}.css`]))};
let missingJs=0,missingCss=0,total=0;
const missingList=[];
for(const f of Object.values(map.js)){if(!present.has("webview/assets/"+f)){missingJs++;if(missingList.length<10)missingList.push(f)}total+=sizes.get("webview/assets/"+f)||0}
for(const f of Object.values(map.css))if(!present.has("webview/assets/"+f))missingCss++;
console.log("js ids",js.size,"css ids",css.size,"missing js",missingJs,"missing css",missingCss,"mapped js MB",(total/1048576).toFixed(1));
if(missingList.length)console.log("sample missing",missingList.join(", "));
fs.mkdirSync(WORK,{recursive:true});
fs.writeFileSync(WORK+"/chunk-map.json",JSON.stringify(map));
ar.close();
