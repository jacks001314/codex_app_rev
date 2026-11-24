import fs from "node:fs";
import { WORK } from "./ver-261117.mjs";
const chunks=JSON.parse(fs.readFileSync(WORK+"/chunk-messages.json","utf8"));
const RULES=[
 ["learning",/^learning[-_.]?[bB]locks?\.|^learning\.|^learningHub\.|^widgets\.hermes\./],
 ["business",/^businessProfiles\.|^ads_manager\.|^adManager\.|^merchantSettings\.|^shopping\.|^pricing|^checkout\.|^Checkout|^personalFinance\.|^bazaar\.|^wham\./],
 ["workspace-agents",/^workspaceAgents\.|^workspaceOwnerOnboarding\.|^teams\.|^Hermes\./],
 ["enterprise-trust",/^restricted\.|^environmentSetup\.|^security\.|^rosalind\.|^chatgpt\.rosalind_access|^chatgpt\.privacy_center|^healthcareVerificationPage|^trustedContact\.|^businessProfiles\.verification|^admin\.plugins|^advancedAuthenticationSettings\./],
 ["spaces",/^codex\.space$|^codex\.space\.|^space\.|^pages\.|^codex\.page|^sharedDot\.|^codex\.pages|^sharing\.|^projectSetup\./],
 ["plugins",/^plugins\.|^skills\.|^browserSkills\.|^mcp|^workspace-plugins\.|^beacons\.|^connectedApps\.|^externalAgentConfig\./],
 ["profile",/^codex\.projectAppearance|^profile\.|^symbolPicker\.|^emoji\.|^codex\.profileDropdown|^codex\.referralInviteModal|^referral/],
 ["mobile",/^codexMobile\./],
 ["settings",/^settings\.|^settingsModal\.|^keyboardShortcutsDialog\.|^appgenSettings\.|^browserPluginSettings\.|^browserAuth\./],
 ["conversation",/^localConversation\.|^localConversationPage|^thread\.|^codeReview\.|^pullRequest|^review\.|^codex\.(userMessage|assistantMessage|tool|patch|unifiedDiff|status|turn|message|mcpTool|localConversation|review|threadFindBar|joinApproval|sharedSnapshot|postResponseFeedback|safetyComposerBanner|cme)\.|^chatgptConversations\.|^threadEnvironment\.|^worktreeInit|^threadWorkspace\.|^shareDialog\./],
 ["composer",/^composer\.|^dictation\.|^avatarOverlay\.|^safetyBuffering\.|^implementPlanRequest\.|^codex\.composer/],
 ["left-nav",/^sidebarElectron\.|^sidebar\.|^libraryNext\.|^library\.|^inbox\.|^automations\.|^navigation\.|^librarySharing\.|^libraryPicker\./],
 ["voice",/^realtimeVoice|^voice\.|^speech|^audio/],
 ["writing",/^writing|^codex\.writingBlock/],
 ["chronicle",/^chronicle/],
 ["codex-micro",/^codexMicro|^codex-micro/],
 ["editors",/^spreadsheetEditor|^presentationEditor|^markdown|^fileEditor|^fileTabTopBar|^pageDocumentActionsMenu|^chatgptFilePreview\.|^artifactTab\.|^artifactViewer\.|^codex\.visualization/],
 ["app-shell",/^codex\.command|^codex\.commandDescription|^codex\.commandMenu|^browser\.|^actionTranscript\.|^feedback\.dialog|^appServer\.|^downloads\./],
 ["chatgpt-surfaces",/^chatgpt\.|^chatgptProject|^gptBuilder|^gizmo\.|^home\.|^collegePlan|^onboarding\.|^electron\.onboarding|^orbit\.|^appgenPage\.|^tpp\.|^classroom\.|^maps\./],
 ["image-editing",/^imageTextEditing\.|^imageMarkup\.|^imageSidePanel\.|^images\.|^imageGen|^artifacts\.image/],
];
const byMod=new Map();
const unknown=new Map();
for(const c of chunks){
  let best="misc", bestScore=0;
  for(const [mod,re] of RULES){let s=0;for(const [ns,n] of c.namespaces){if(re.test(ns+"."))s+=n}if(s>bestScore){bestScore=s;best=mod}}
  for(const [ns,n] of c.namespaces){let hit=false;for(const [,re] of RULES)if(re.test(ns+"."))hit=true;if(!hit)unknown.set(ns,(unknown.get(ns)??0)+n)}
  const rec={...c,module:best,score:bestScore};
  (byMod.get(best)??byMod.set(best,[]).get(best)).push(rec);
}
console.log("module,chunks,messages,bytes");
[...byMod].map(([m,a])=>[m,a.length,a.reduce((s,c)=>s+c.messages,0),a.reduce((s,c)=>s+c.bytes,0)]).sort((a,b)=>b[3]-a[3]).forEach(([m,n,msg,b])=>console.log(m.padEnd(20),String(n).padStart(5),String(msg).padStart(6),(b/1048576).toFixed(1).padStart(8)+"MB"));
console.log("\n== unmatched namespace prefixes (top 25) ==");
[...unknown].sort((a,b)=>b[1]-a[1]).slice(0,25).forEach(([ns,n])=>console.log(String(n).padStart(4),ns));
console.log("\n== top chunks per module ==");
for(const [m,a] of [...byMod].sort((x,y)=>y[1].length-x[1].length)){
  console.log("\n## "+m);
  a.sort((x,y)=>y.score-x.score).slice(0,6).forEach(c=>console.log("  "+String(c.messages).padStart(5)+" msg "+String((c.bytes/1024).toFixed(0)).padStart(7)+"KB "+c.file+"  "+c.namespaces.slice(0,3).map(([n,k])=>n+":"+k).join(" ")));
}
fs.writeFileSync(WORK+"/chunk-modules.json",JSON.stringify([...byMod].map(([module,a])=>({module,chunks:a})),null,1));
