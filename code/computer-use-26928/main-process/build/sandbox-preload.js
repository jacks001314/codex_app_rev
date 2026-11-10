let e = require("electron");
var t = `initId`,
  n = `web-sandbox.oaiusercontent.com`,
  r = [
    `navigate`,
    `notifyMcpAppsHostContext`,
    `notifyMcpAppsToolCancelled`,
    `notifyMcpAppsToolInput`,
    `notifyMcpAppsToolResult`,
    `requestMcpAppsResourceTeardown`,
    `runWidgetCode`,
    `setAdditionalGlobals`,
    `setSafeArea`,
    `setTheme`,
    `setWidgetData`,
    `setWidgetView`,
  ],
  i = [
    `applyAutofillCandidate`,
    `getCurrentPath`,
    `notifyMcpAppsMcpNotification`,
    `prepareEnvironment`,
    `runUserCode`,
    `screenshot`,
    `stop`,
  ],
  a = [...r, ...i];
function o(e) {
  return [n].some((t) => e === t || e.endsWith(`.${t}`));
}
function s(e) {
  return /^[A-Za-z0-9_-]{1,128}$/.test(e);
}
function c(e, { requireSkybridge: t = !1 } = {}) {
  let n = d(e);
  return n == null || (t && (n.pathname !== `/` || n.searchParams.get(`app`) !== `skybridge`))
    ? null
    : `${n.protocol}//${n.host}`;
}
function l(e) {
  let n = u(e);
  if (n == null || n.hash.length === 0) return null;
  let r = new URLSearchParams(n.hash.slice(1)).get(t);
  return r != null && s(r) ? r : null;
}
function u(e) {
  if (e == null) return null;
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function d(e) {
  let t = u(e);
  return t == null ||
    (t.protocol !== `https:` && t.protocol !== `codex-sandbox:`) ||
    t.port !== `` ||
    t.username !== `` ||
    t.password !== `` ||
    !o(t.hostname)
    ? null
    : t;
}
var f = `codex_desktop:mcp-app-sandbox-guest-message`,
  p = !1;
function m() {
  return c(window.location.href, { requireSkybridge: !0 }) === window.location.origin;
}
window.addEventListener(`message`, (t) => {
  let n = t.data != null && typeof t.data == `object` ? t.data.type : void 0;
  if (t.source !== window || !m() || t.data == null || typeof t.data != `object` || n !== `init`)
    return;
  let i = t.data.ports,
    o = t.data.replyPort;
  if (typeof i != `object` || !i || !g(o) || p) return;
  let s = l(window.location.href);
  if (s == null) return;
  let c = a.filter((e) => g(Reflect.get(i, e)));
  if (r.filter((e) => !g(Reflect.get(i, e))).length > 0) return;
  let u = [...c],
    d = u.map((e) => h(i, e));
  ((p = !0),
    e.ipcRenderer.postMessage(
      f,
      { origin: window.location.origin, initId: s, portNames: u, type: `init` },
      [...d, o],
    ));
});
function h(e, t) {
  let n = Reflect.get(e, t);
  if (!g(n)) throw Error(`Missing required MCP sandbox frame port: ${t}`);
  return n;
}
function g(e) {
  return (
    typeof e == `object` &&
    !!e &&
    typeof e.postMessage == `function` &&
    typeof e.start == `function`
  );
}
//# sourceMappingURL=sandbox-preload.js.map
