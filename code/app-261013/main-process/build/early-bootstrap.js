require("./rolldown-runtime-CPUxUITh.js");
const e = require("./browser-background-switches-DmHa3bqb.js"),
  t = require("./file-based-logger-CJvvkBIo.js"),
  n = require("./desktop-open-path-queue-CqGT6pda.js");
let r = require("electron");
function i() {
  let e = new Set(r.app.commandLine.getSwitchValue(`enable-features`).split(`,`).filter(Boolean));
  (e.add(`DevToolsWebMCPSupport`),
    r.app.commandLine.removeSwitch(`enable-features`),
    r.app.commandLine.appendSwitch(`enable-features`, [...e].join(`,`)));
  let t = new Set(r.app.commandLine.getSwitchValue(`enable-blink-features`).split(`,`).filter(Boolean));
  (t.add(`WebMCP`),
    r.app.commandLine.removeSwitch(`enable-blink-features`),
    r.app.commandLine.appendSwitch(`enable-blink-features`, [...t].join(`,`)));
}
function a({ buildFlavor: e, env: n }) {
  let r = n.CODEX_ELECTRON_CHROMIUM_SWITCHES?.trim();
  if (e !== t.i.Dev || !r) return [];
  let i;
  try {
    i = JSON.parse(r);
  } catch {
    throw Error(`CODEX_ELECTRON_CHROMIUM_SWITCHES must be valid JSON`);
  }
  if (typeof i != `object` || !i || Array.isArray(i))
    throw Error(`CODEX_ELECTRON_CHROMIUM_SWITCHES must be a JSON object`);
  return Object.entries(i).map(([e, t]) => {
    if (e.length === 0) throw Error(`CODEX_ELECTRON_CHROMIUM_SWITCHES contains an empty switch name`);
    if (t != null && typeof t != `string`)
      throw Error(`CODEX_ELECTRON_CHROMIUM_SWITCHES value for ${e} must be a string or null`);
    return t == null ? { name: e } : { name: e, value: t };
  });
}
var o = `owl-scoped-user-agent-additional-hosts`,
  s = `owl-scoped-user-agent-prefix`;
function c({ isPackaged: e }) {
  return e
    ? [
        { name: o, value: `openai.com,chatgpt.com,chatgpt.site,chatgpt-team.site` },
        { name: s, value: `CodexBrowser` },
      ]
    : [];
}
var l = `WebRTC-Sctp-Snap/Enabled/WebRTC-IceHandshakeDtls/Enabled/WebRTC-ForceDtls13/Enabled/`;
for (let e of a({ buildFlavor: t.i.resolve(), env: process.env }))
  r.app.commandLine.appendSwitch(e.name, e.value);
(r.app.commandLine.appendSwitch(`force-fieldtrials`, l), i());
var u = new Set(r.app.commandLine.getSwitchValue(`disable-blink-features`).split(`,`).filter(Boolean));
(u.add(`ReplacedNormalFlowStackingInlinePaint`),
  r.app.commandLine.removeSwitch(`disable-blink-features`),
  r.app.commandLine.appendSwitch(`disable-blink-features`, [...u].join(`,`)),
  r.app.commandLine.appendSwitch(
    `enable-features`,
    [r.app.commandLine.getSwitchValue(`enable-features`), `DocumentPolicyIncludeJSCallStacksInCrashReports`]
      .filter((e) => e !== ``)
      .join(`,`),
  ));
for (let e of c({ isPackaged: r.app.isPackaged }))
  r.app.commandLine.hasSwitch(e.name) || r.app.commandLine.appendSwitch(e.name, e.value);
if (r.app.commandLine.hasSwitch(`codex-browser-background-networking-disabled`)) {
  for (let t of e.r) r.app.commandLine.appendSwitch(t);
  r.app.commandLine.appendSwitch(
    `disable-features`,
    [r.app.commandLine.getSwitchValue(`disable-features`), ...e.t].filter((e) => e !== ``).join(`,`),
  );
}
(e.f(),
  n.a(process.platform === `darwin`),
  d().catch(async (e) => {
    let { getLogger: t } = await Promise.resolve()
      .then(() => require("./application-network-startup-DB1VeU3v.js"))
      .then((e) => e.r);
    (t().error(`Desktop network requirements prevented startup`, { safe: {}, sensitive: { error: e } }),
      r.app.exit(1));
  }));
async function d() {
  (process.platform === `linux` && (await r.app.whenReady()), await n.o());
  let { initializeNodeNetworkPermissions: e } = await Promise.resolve()
    .then(() => require("./startup-requirements-BlaoVssN.js"))
    .then((e) => e.n);
  (await e()) && (await Promise.resolve().then(() => require("./bootstrap-cdWF4rWM.js")));
}
//# sourceMappingURL=early-bootstrap.js.map
