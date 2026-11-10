require("./rolldown-runtime-CPUxUITh.js");
const e = require("./app-protocol-DaeIspKt.js"),
  t = require("./browser-background-switches-BqIMvv24.js"),
  n = require("./build-flavor-IWwoo-v9.js"),
  r = require("./desktop-open-path-queue-BHXvnlW9.js");
let i = require("electron");
function a() {
  let e = new Set(i.app.commandLine.getSwitchValue(`enable-features`).split(`,`).filter(Boolean));
  (e.add(`DevToolsWebMCPSupport`),
    i.app.commandLine.removeSwitch(`enable-features`),
    i.app.commandLine.appendSwitch(`enable-features`, [...e].join(`,`)));
  let t = new Set(
    i.app.commandLine.getSwitchValue(`enable-blink-features`).split(`,`).filter(Boolean),
  );
  (t.add(`WebMCP`),
    i.app.commandLine.removeSwitch(`enable-blink-features`),
    i.app.commandLine.appendSwitch(`enable-blink-features`, [...t].join(`,`)));
}
function o({ buildFlavor: e, env: t }) {
  let r = t.CODEX_ELECTRON_CHROMIUM_SWITCHES?.trim();
  if (e !== n.t.Dev || !r) return [];
  let i;
  try {
    i = JSON.parse(r);
  } catch {
    throw Error(`CODEX_ELECTRON_CHROMIUM_SWITCHES must be valid JSON`);
  }
  if (typeof i != `object` || !i || Array.isArray(i))
    throw Error(`CODEX_ELECTRON_CHROMIUM_SWITCHES must be a JSON object`);
  return Object.entries(i).map(([e, t]) => {
    if (e.length === 0)
      throw Error(`CODEX_ELECTRON_CHROMIUM_SWITCHES contains an empty switch name`);
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
var u = `WebRTC-Sctp-Snap/Enabled/WebRTC-IceHandshakeDtls/Enabled/WebRTC-ForceDtls13/Enabled/`;
for (let e of o({ buildFlavor: n.t.resolve(), env: process.env }))
  i.app.commandLine.appendSwitch(e.name, e.value);
(i.app.commandLine.appendSwitch(`force-fieldtrials`, u), a());
var d = new Set(
  i.app.commandLine.getSwitchValue(`disable-blink-features`).split(`,`).filter(Boolean),
);
(d.add(`ReplacedNormalFlowStackingInlinePaint`),
  i.app.commandLine.removeSwitch(`disable-blink-features`),
  i.app.commandLine.appendSwitch(`disable-blink-features`, [...d].join(`,`)));
for (let e of l({ isPackaged: i.app.isPackaged }))
  i.app.commandLine.hasSwitch(e.name) || i.app.commandLine.appendSwitch(e.name, e.value);
if (i.app.commandLine.hasSwitch(`codex-browser-background-networking-disabled`)) {
  for (let e of t.r) i.app.commandLine.appendSwitch(e);
  i.app.commandLine.appendSwitch(
    `disable-features`,
    [i.app.commandLine.getSwitchValue(`disable-features`), ...t.t]
      .filter((e) => e !== ``)
      .join(`,`),
  );
}
(e.l(),
  r.i(process.platform === `darwin`),
  f().catch(async (e) => {
    let { getLogger: t } = await Promise.resolve()
      .then(() => require("./application-network-startup-D74LEWDz.js"))
      .then((e) => e.n);
    (t().error(`Desktop network requirements prevented startup`, {
      safe: {},
      sensitive: { error: e },
    }),
      i.app.exit(1));
  }));
async function f() {
  (process.platform === `linux` && (await i.app.whenReady()), await r.a());
  let { initializeNodeNetworkPermissions: e } = await Promise.resolve()
    .then(() => require("./startup-requirements-Da3KfG8r.js"))
    .then((e) => e.n);
  (await e()) && (await Promise.resolve().then(() => require("./bootstrap-DvSEn4qy.js")));
}
//# sourceMappingURL=early-bootstrap.js.map
