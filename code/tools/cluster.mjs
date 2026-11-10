import fs from "node:fs";
const chunks=JSON.parse(fs.readFileSync("codex_app_rev/.work/chunk-messages-261103.json","utf8"));
const RULES=[
 ["learning",/^learning[-_.]?[bB]locks?\.|^learning\.|^widgets\.hermes\./],
 ["business",/^businessProfiles\.|^ads_manager\.|^adManager\.|^merchantSettings\.|^shopping\.|^pricing|^checkout\.|^Checkout|^personalFinance\./],
 ["workspace-agents",/^workspaceAgents\.|^workspaceOwnerOnboarding\.|^teams\./],
 ["enterprise-trust",/^restricted\.|^environmentSetup\.|^security\.|^rosalind\.|^chatgpt\.rosalind_access|^chatgpt\.privacy_center|^healthcareVerificationPage|^trustedContact\.|^businessProfiles\.verification/],
 ["spaces",/^codex\.space$|^codex\.space\.|^space\.|^pages\.|^codex\.page|^sharedDot\.|^codex\.pages/],
 ["settings",/^settings\.|^settingsModal\.|^keyboardShortcutsDialog\.|^appgenSettings\.|^browserPluginSettings\.|^browserAuth\./],
 ["conversation",/^localConversation\.|^localConversationPage|^thread\.|^codeReview\.|^pullRequest|^review\.|^codex\.(userMessage|assistantMessage|tool|patch|unifiedDiff|status|turn|message)|^chatgptConversations\./],
 ["composer",/^composer\.|^dictation\.|^avatarOverlay\./],
 ["left-nav",/^sidebarElectron\.|^sidebar\.|^libraryNext\.|^library\.|^inbox\.|^automations\.|^navigation\./],
 ["plugins",/^plugins\.|^skills\.|^browserSkills\.|^mcp/],
 ["voice",/^realtimeVoice|^voice\.|^speech|^audio/],
 ["writing",/^writing|^codex\.writingBlock/],
 ["chronicle",/^chronicle/],
 ["codex-micro",/^codexMicro|^codex-micro/],
 ["editors",/^spreadsheetEditor|^presentationEditor|^markdown|^fileEditor/],
 ["app-shell",/^codex\.command|^codex\.commandDescription|^codex\.commandMenu|^browser\./],
 ["chatgpt-surfaces",/^chatgpt\.|^chatgptProject|^home\.|^gptBuilder|^collegePlan|^onboarding\.|^electron\.onboarding|^orbit\./],
];
const byMod=new Map();
for(const c of chunks){
  let best="misc", bestScore=0;
  for(const [mod,re] of RULES){
    let s=0;
    for(const [ns,n] of c.namespaces){ if(re.test(ns+".")) s+=n; }
    if(s>bestScore){bestScore=s;best=mod}
  }
  const rec={...c,module:best,score:bestScore};
  (byMod.get(best)??byMod.set(best,[]).get(best)).push(rec);
}
console.log("module,chunks,messages,bytes");
[...byMod].map(([m,a])=>[m,a.length,a.reduce((s,c)=>s+c.messages,0),a.reduce((s,c)=>s+c.bytes,0)]).sort((a,b)=>b[3]-a[3]).forEach(([m,n,msg,b])=>console.log(m.padEnd(20),String(n).padStart(5),String(msg).padStart(6),(b/1048576).toFixed(1).padStart(8)+"MB"));
console.log("\n== top chunks per module ==");
for(const [m,a] of [...byMod].sort((x,y)=>y[1].length-x[1].length)){
  console.log("\n## "+m);
  a.sort((x,y)=>y.score-x.score).slice(0,6).forEach(c=>console.log("  "+String(c.messages).padStart(5)+" msg "+String((c.bytes/1024).toFixed(0)).padStart(7)+"KB "+c.file+"  "+c.namespaces.slice(0,3).map(([n,k])=>n+":"+k).join(" ")));
}
fs.writeFileSync("codex_app_rev/.work/chunk-modules-261103.json",JSON.stringify([...byMod].map(([module,a])=>({module,chunks:a})),null,1));
