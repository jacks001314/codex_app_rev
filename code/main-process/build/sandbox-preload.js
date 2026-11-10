let e = require("electron");
var t = `initId`,
  n = `web-sandbox.oaiusercontent.com`,
  r = `.${n}`,
  i = [
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
  a = [`notifyMcpAppsMcpNotification`],
  o = [...i, ...a];
function s(e) {
  return e === n || e.endsWith(r);
}
function c(e) {
  return /^[A-Za-z0-9_-]{1,128}$/.test(e);
}
function l(e, { requireSkybridge: t = !1 } = {}) {
  let n = f(e);
  return n == null || (t && (n.pathname !== `/` || n.searchParams.get(`app`) !== `skybridge`))
    ? null
    : `${n.protocol}//${n.host}`;
}
function u(e) {
  let n = d(e);
  if (n == null || n.hash.length === 0) return null;
  let r = new URLSearchParams(n.hash.slice(1)).get(t);
  return r != null && c(r) ? r : null;
}
function d(e) {
  if (e == null) return null;
  try {
    return new URL(e);
  } catch {
    return null;
  }
}
function f(e) {
  let t = d(e);
  return t == null ||
    (t.protocol !== `https:` && t.protocol !== `codex-sandbox:`) ||
    t.port !== `` ||
    t.username !== `` ||
    t.password !== `` ||
    !s(t.hostname)
    ? null
    : t;
}
var p = `codex_desktop:mcp-app-sandbox-guest-message`,
  m = !1;
function h() {
  return l(window.location.href, { requireSkybridge: !0 }) === window.location.origin;
}
window.addEventListener(`message`, (t) => {
  let n = t.data != null && typeof t.data == `object` ? t.data.type : void 0;
  if (t.source !== window || !h() || t.data == null || typeof t.data != `object` || n !== `init`)
    return;
  let r = t.data.ports,
    a = t.data.replyPort;
  if (typeof r != `object` || !r || !_(a) || m) return;
  let s = u(window.location.href);
  if (s == null) return;
  let c = o.filter((e) => _(Reflect.get(r, e)));
  if (i.filter((e) => !_(Reflect.get(r, e))).length > 0) return;
  let l = [...c],
    d = l.map((e) => g(r, e));
  ((m = !0),
    e.ipcRenderer.postMessage(
      p,
      { origin: window.location.origin, initId: s, portNames: l, type: `init` },
      [...d, a],
    ));
});
function g(e, t) {
  let n = Reflect.get(e, t);
  if (!_(n)) throw Error(`Missing required MCP sandbox frame port: ${t}`);
  return n;
}
function _(e) {
  return (
    typeof e == `object` &&
    !!e &&
    typeof e.postMessage == `function` &&
    typeof e.start == `function`
  );
}
//# sourceMappingURL=sandbox-preload.js.map
