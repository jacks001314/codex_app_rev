import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
function t(e) {
  if (!n(e)) return !1;
  let t = new Set(v);
  return e.every((e) => t.has(e));
}
function n(e) {
  if (e.some((e) => typeof e != `string`)) return !1;
  let t = new Set(e);
  return t.size === e.length && g.every((e) => t.has(e));
}
function r(e) {
  return [h].some((t) => e === t || e.endsWith(`.${t}`));
}
function i(e) {
  return /^[A-Za-z0-9_-]{1,128}$/.test(e);
}
function a(e) {
  return `${f}:${e}`;
}
function o({ locale: e, scheme: t = `https`, subdomain: n }) {
  let r = new URL(`${t}://${h}`);
  return (
    (r.hostname = `${n}.${r.hostname}`),
    (r.pathname = `/`),
    r.searchParams.set(`app`, `skybridge`),
    r.searchParams.set(`locale`, e),
    r.searchParams.set(`deviceType`, `desktop`),
    r.searchParams.set(`unsafeSkipTargetOriginCheck`, `true`),
    r.searchParams.set(`backgroundMode`, `transparent`),
    r.toString()
  );
}
function s(e, { requireSkybridge: t = !1 } = {}) {
  let n = d(e);
  return n == null || (t && (n.pathname !== `/` || n.searchParams.get(`app`) !== `skybridge`))
    ? null
    : `${n.protocol}//${n.host}`;
}
function c({ initId: e, sourceUrl: t }) {
  let n = new URL(t);
  return ((n.hash = new URLSearchParams({ [m]: e }).toString()), n.toString());
}
function l(e) {
  let t = u(e);
  if (t == null || t.hash.length === 0) return null;
  let n = new URLSearchParams(t.hash.slice(1)).get(m);
  return n != null && i(n) ? n : null;
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
    !r(t.hostname)
    ? null
    : t;
}
var f,
  p,
  m,
  h,
  g,
  _,
  v,
  y = e(() => {
    ((f = `codex-mcp-app-sandbox`),
      (p = `codex-sandbox`),
      (m = `initId`),
      (h = `web-sandbox.oaiusercontent.com`),
      (g = [
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
      ]),
      (_ = [
        `notifyMcpAppsMcpNotification`,
        `prepareEnvironment`,
        `runUserCode`,
        `screenshot`,
        `stop`,
      ]),
      (v = [...g, ..._]));
  });
export { o as a, s as c, c as i, t as l, p as n, l as o, g as r, a as s, v as t, y as u };
//# sourceMappingURL=mcp-app-sandbox-329cfd2a1eb2.js.map
