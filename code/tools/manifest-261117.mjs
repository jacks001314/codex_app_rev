import fs from "node:fs";
import { AsarArchive } from "./asar.mjs";
import { ARCHIVE, APP_VERSION, BUILD_NUMBER, MSIX_VERSION, INVENTORY, WORK, OUT, INSTALL_ROOT } from "./ver-261117.mjs";
const ar=new AsarArchive(ARCHIVE);
const pkg=JSON.parse(ar.readText("package.json"));
const xml=fs.readFileSync(INSTALL_ROOT+"/AppxManifest.xml","utf8");
const inv=JSON.parse(fs.readFileSync(INVENTORY,"utf8"));
const chunkMap=JSON.parse(fs.readFileSync(WORK+"/chunk-map.json","utf8"));
const modIdx=JSON.parse(fs.readFileSync(OUT+"/_MODULE_INDEX.json","utf8"));
const files=inv.entries.filter(e=>!e.d);
const byExt=new Map();for(const e of files){const r=byExt.get(e.x||"(none)")??{files:0,bytes:0};r.files++;r.bytes+=e.s;byExt.set(e.x||"(none)",r)}
const asyncJs=files.filter(e=>e.p.startsWith("webview/assets/async/")&&e.x===".js");
const asyncCss=files.filter(e=>e.p.startsWith("webview/assets/async/")&&e.x===".css");
const caps=[...xml.matchAll(/<(?:rescap|uap11|Capability)?:?Capability Name="([^"]+)"/g)].map(m=>m[1]);
const uniq=a=>[...new Set(a)];
const manifest={
 schema_version:7,
 collected_at:"2026-11-24",
 source:"local Windows MSIX installation (read-only)",
 package:{
  display_name:"ChatGPT",publisher:"OpenAI",publisher_id:"CN=50BDFD77-8903-4850-9FFE-6E8522F64D5B",
  identity:"OpenAI.Codex_2p2nqsd0c76g0",package_id:`OpenAI.Codex_${MSIX_VERSION}_x64__2p2nqsd0c76g0`,
  msix_version:MSIX_VERSION,app_version:APP_VERSION,codex_build_number:BUILD_NUMBER,codex_build_flavor:pkg.codexBuildFlavor,
  chromium:"158.0.8127.37",electron:"not_statically_verified",vite:"not_statically_verified (renderer bundler is Rspack since 26.1103)",
  typescript:"not_statically_verified",runtime_name:"owl",architecture:"x64",install_root:INSTALL_ROOT,
  owl_runtime_archive_sha:"8d3113203368c3a28b476ccf8d04386cf6ad369224d5a41e0625522160b537f9",
  package_json:{name:pkg.name,product_name:pkg.productName,version:pkg.version,main:pkg.main,codex_build_flavor:pkg.codexBuildFlavor,codex_build_number:pkg.codexBuildNumber,codex_windows_app_contained_core:pkg.codexWindowsAppContainedCore}
 },
 paths:{
  msix_entry:"app\\ChatGPT.exe",electron_main:"app.asar:.vite/build/early-bootstrap.js",
  electron_main_largest_chunk:"app.asar:.vite/build/early-bootstrap-916-2fd4cc5178eaa3b5.js",
  preload:"app.asar:.vite/build/preload.js",codex_runtime:"app\\resources\\codex.exe",asar:"app\\resources\\app.asar",
  webview_entry:"app.asar:webview/index.html",
  renderer_entry_chunks:chunkMap.entry_chunks.map(f=>"app.asar:webview/assets/"+f),
  renderer_runtime_chunk:"app.asar:"+chunkMap.runtime_chunk,initial_css:null,
  settings_map:"code/app-261117/settings/_SETTINGS_MAP.json",app_server_methods:"code/app-261117/main-process/_APP_SERVER_METHODS.json",
  ipc_channels:"code/app-261117/main-process/_IPC_CHANNELS.json",command_table:"code/app-261117/main-process/_COMMAND_TABLE.json",
  routes:"code/app-261117/app-shell/_ROUTES.json",i18n_catalog:"code/app-261117/_catalog/i18n-messages.json"
 },
 files:{
  "app\\resources\\app.asar":{size_bytes:443800006,sha256:"8A437AAD94098770C1BF5FD5385C204E162B62C6D7917F688741D74E05BABE90"},
  "app\\ChatGPT.exe":{size_bytes:5003568,sha256:"21C2EAC7703B43611392234738F669A8AF23907585B231EBDE54CA3CB104CC82"},
  "app\\Codex.exe":{size_bytes:20272,sha256:"A559F472864005394F59D222AC5B88806AE0EC06286CD851849FDD57E2A214B4"},
  "app\\resources\\codex.exe":{size_bytes:407428400,sha256:"4069ACDD8D101830F63EA5E2775883BFECF8A152AE87EE1B0EF9F14204F850F9"},
  "app\\chrome.dll":{size_bytes:341041456,sha256:"0DB43D9385011630242C68E95C5FE7534E8A71A23E81F06A3BE7A83185CC8022"},
  "AppxManifest.xml":{size_bytes:9396,sha256:"AE15772C0EA1A34FBA9D014768999ABDAD0BB91B09BA2CE696B0A39A7B231C88"}
 },
 manifest_capabilities:{
  capabilities:uniq(caps),
  protocols:[...xml.matchAll(/<uap3:Protocol Name="([^"]+)"/g)].map(m=>m[1]),
  file_extensions:[...xml.matchAll(/<uap:FileType>([^<]+)<\/uap:FileType>/g)].map(m=>m[1]),
  directory_context_menu_verb:/desktop5:Verb Id="([^"]+)"/.exec(xml)?.[1]??null,
  com_surrogate:{clsid:/com:Class Id="([^"]+)"/.exec(xml)?.[1]??null,path:"app/resources/native/windows-account.node",threading:"STA"},
  services:[{name:/desktop6:Service Name="([^"]+)"/.exec(xml)?.[1]??null,executable:"app/resources/codex-windows-sandbox-service.exe",startup:"auto",account:"localSystem"}],
  execution_aliases:[...xml.matchAll(/<desktop:ExecutionAlias Alias="([^"]+)"/g)].map(m=>m[1]),
  startup_task:"App (Enabled=false, DisplayName=ChatGPT)",
  app_extension:"com.microsoft.windows.copilotkeyprovider",
  firewall_rules:[{exe:"app/ChatGPT.exe",direction:"in",protocol:"TCP",ports:[[1455,1455],[1457,1457]]},{exe:"app/resources/codex.exe",direction:"in",protocol:"TCP",ports:[[1455,1455],[1457,1457],[3128,3159],[8081,8112]]}],
  write_virtualization_excluded:{directories:["%LOCALAPPDATA%\\OpenAI"],registry_keys:["HKCU\\Software\\Google\\Chrome\\NativeMessagingHosts"]}
 },
 asar_inventory:{entries:inv.entries.length,files:files.length,directories:inv.entries.filter(e=>e.d).length,bytes:files.reduce((s,e)=>s+e.s,0),by_extension:[...byExt].sort((a,b)=>b[1].bytes-a[1].bytes).map(([ext,v])=>({ext,files:v.files,bytes:v.bytes}))},
 renderer:{bundler:"rspack",module_format:"export const __rspack_esm_ids=[id];export const __webpack_modules__={...}",entry_chunks:chunkMap.entry_chunks.map(f=>({path:"webview/assets/"+f,bytes:files.find(e=>e.p==="webview/assets/"+f)?.s??null})),async_js_chunk_ids:Object.keys(chunkMap.js).length,async_css_chunk_ids:Object.keys(chunkMap.css).length,missing_mapped_js_files:1,async_files:asyncJs.length,async_bytes:asyncJs.reduce((s,e)=>s+e.s,0),async_css_files:asyncCss.length,async_css_bytes:asyncCss.reduce((s,e)=>s+e.s,0),locales_gzip_files:files.filter(e=>e.x===".codex-gzip").length,locales_gzip_bytes:files.filter(e=>e.x===".codex-gzip").reduce((s,e)=>s+e.s,0)},
 bundled_resources:{
  cua_node:{files:2258,bytes:308967231},plugins:{files:421,bytes:26231441,names:["browser","chrome","codex-app-tools","computer-use","deep-research","latex","plan","unified-computer-use","visualize"]},
  skills:{files:30,bytes:302123,names:[".curated"]},tectonic:{files:4,bytes:46734},native:{files:7,bytes:5933648},accessibility:{files:1,bytes:2375},
  artifact_template_picker:{present:true,files:2,bytes:41736},app_asar_unpacked:{files:8,bytes:11578240},default_app:{files:7,bytes:101629}
 },
 extraction:{output_dir:OUT,plan:"code/_plan/plan-261117.json",tool_map:"code/tools/README.md（Rspack 专项脚本一节）",modules:modIdx.modules.map(m=>({module:m.module,files:m.files,raw_bytes:m.raw_bytes,formatted_bytes:m.formatted_bytes})),totals:modIdx.totals},
 history:[],
 evidence_scope:{static_asar_and_manifest:true,static_shared_bundle_search:true,static_unpacked_js_review:true,repository_source_comparison:"not re-verified for 26.1117",runtime_instrumentation:false,credentials_read:false,user_content_read:false,sqlite_or_settings_dat_read:false,native_install_modified:false}
};
const old=JSON.parse(fs.readFileSync("manifest.json","utf8"));
manifest.history=[{msix_version:MSIX_VERSION,app_version:APP_VERSION,build:BUILD_NUMBER,collected_at:"2026-11-24",inventory:"inventories/inventory-261117.json",scope:"全量清单、20 模块 272 代表文件、59,872 条 i18n、设置/命令/IPC/协议方法/路由注册表；打包体积与 description 裁剪专项"},...(old.history??[])];
fs.writeFileSync("manifest.json",JSON.stringify(manifest,null,1));
console.log("wrote manifest.json",manifest.asar_inventory.entries,"entries",JSON.stringify(manifest.renderer));
ar.close();


