require("./rolldown-runtime-CPUxUITh.js");
const e = require("./browser-background-switches-oSaaOz4s.js"),
  t = require("./file-based-logger-DD0smlUs.js"),
  n = require("./node-tls-ca-policy-B8g-aV7p.js"),
  r = require("./desktop-open-path-queue-BRLR7DdW.js");
let i = require("electron");
function a() {
  let e = new Set(i.app.commandLine.getSwitchValue(`enable-features`).split(`,`).filter(Boolean));
  (e.add(`DevToolsWebMCPSupport`),
    i.app.commandLine.removeSwitch(`enable-features`),
    i.app.commandLine.appendSwitch(`enable-features`, [...e].join(`,`)));
  let t = new Set(i.app.commandLine.getSwitchValue(`enable-blink-features`).split(`,`).filter(Boolean));
  (t.add(`WebMCP`),
    i.app.commandLine.removeSwitch(`enable-blink-features`),
    i.app.commandLine.appendSwitch(`enable-blink-features`, [...t].join(`,`)));
}
function o({ buildFlavor: e, env: n }) {
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
var s = `owl-scoped-user-agent-additional-hosts`,
  c = `owl-scoped-user-agent-prefix`;
function l({ isPackaged: e }) {
  return e
    ? [
        { name: s, value: `openai.com,chatgpt.com,chatgpt.site,chatgpt-team.site` },
        { name: c, value: `CodexBrowser` },
      ]
    : [];
}
n.t();
for (let e of o({ buildFlavor: t.i.resolve(), env: process.env }))
  i.app.commandLine.appendSwitch(e.name, e.value);
a();
var u = new Set(i.app.commandLine.getSwitchValue(`disable-blink-features`).split(`,`).filter(Boolean));
(u.add(`ReplacedNormalFlowStackingInlinePaint`),
  i.app.commandLine.removeSwitch(`disable-blink-features`),
  i.app.commandLine.appendSwitch(`disable-blink-features`, [...u].join(`,`)),
  i.app.commandLine.appendSwitch(
    `enable-features`,
    [i.app.commandLine.getSwitchValue(`enable-features`), `DocumentPolicyIncludeJSCallStacksInCrashReports`]
      .filter((e) => e !== ``)
      .join(`,`),
  ));
for (let e of l({ isPackaged: i.app.isPackaged }))
  i.app.commandLine.hasSwitch(e.name) || i.app.commandLine.appendSwitch(e.name, e.value);
if (i.app.commandLine.hasSwitch(`codex-browser-background-networking-disabled`)) {
  for (let t of e.r) i.app.commandLine.appendSwitch(t);
  i.app.commandLine.appendSwitch(
    `disable-features`,
    [i.app.commandLine.getSwitchValue(`disable-features`), ...e.t].filter((e) => e !== ``).join(`,`),
  );
}
(e.f(),
  r.a(process.platform === `darwin`),
  d().catch(async (e) => {
    let { getLogger: t } = await Promise.resolve()
      .then(() => require("./application-network-startup-BG13czUt.js"))
      .then((e) => e.r);
    (t().error(`Desktop network requirements prevented startup`, { safe: {}, sensitive: { error: e } }),
      i.app.exit(1));
  }));
async function d() {
  (process.platform === `linux` && (await i.app.whenReady()), await r.o());
  let { initializeNodeNetworkPermissions: e } = await Promise.resolve()
    .then(() => require("./startup-requirements-noLGSvyx.js"))
    .then((e) => e.n);
  (await e()) && (await Promise.resolve().then(() => require("./bootstrap-CpPAbkl1.js")));
}
//# sourceMappingURL=early-bootstrap.js.map
