import fs from "node:fs";
import path from "node:path";
import { AsarArchive } from "./asar.mjs";
const archive = "C:/Program Files/WindowsApps/OpenAI.Codex_26.1103.4239.0_x64__2p2nqsd0c76g0/app/resources/app.asar";
const ar = new AsarArchive(archive);
const runtime = ar.readText("webview/assets/348410.792d1c9584.js");
function objectAfter(text, marker) {
  const at = text.indexOf(marker);
  if (at < 0) return null;
  const open = text.indexOf("{", at);
  let i = open, depth = 0;
  while (i < text.length) {
    const c = text[i];
    if (c === '"' || c === "'" || c === "`") { const q=c; i++; while(i<text.length){ if(text[i]==="\\"){i+=2;continue} if(text[i]===q){i++;break} i++; } continue; }
    if (c === "{") depth++;
    else if (c === "}") { depth--; if (!depth) return text.slice(open, i+1); }
    i++;
  }
  return null;
}
const jsObj = objectAfter(runtime, 'p.u=e=>"assets/async/"+e+"."+(');
const cssObj = objectAfter(runtime, 'p.miniCssF=e=>"assets/async/"+(');
const parsePairs = (src) => { const out = new Map(); for (const m of src.matchAll(/(\d+)\s*:\s*"([0-9a-f]+)"/g)) out.set(m[1], m[2]); return out; };
const js = parsePairs(jsObj), css = parsePairs(cssObj);
console.log("js chunk ids", js.size, "css chunk ids", css.size);
const map = { generated_at:new Date().toISOString(), runtime_chunk:"webview/assets/348410.792d1c9584.js", js: Object.fromEntries([...js].map(([id,h])=>[id,`async/${id}.${h}.js`])), css: Object.fromEntries([...css].map(([id,h])=>[id,`async/${h}.css`])) };
fs.writeFileSync("codex_app_rev/.work/chunk-map.json", JSON.stringify(map));
// sanity: all referenced files exist?
const inv = JSON.parse(fs.readFileSync("codex_app_rev/inventories/inventory-261103.json","utf8"));
const present = new Set(inv.entries.filter(e=>!e.d).map(e=>e.p));
let missingJs=0, missingCss=0, sizeSum=0;
for (const [id,f] of Object.entries(map.js)) { if(!present.has("webview/assets/"+f)) missingJs++; }
for (const [id,f] of Object.entries(map.css)) { if(!present.has("webview/assets/"+f)) missingCss++; }
console.log("missing js files",missingJs,"missing css files",missingCss);
const sizes = new Map(inv.entries.filter(e=>!e.d).map(e=>[e.p,e.s]));
let total=0; for (const f of Object.values(map.js)) total += sizes.get("webview/assets/"+f)||0;
console.log("mapped js bytes", (total/1048576).toFixed(1)+"MB");
ar.close();
