import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
function t(e, t) {
  return e == null || t == null || !r(e, t) ? e : `"${o(n(t))}", ${e}`;
}
function n(e) {
  return `Codex selected ${e.postscriptName}`;
}
function r(e, t) {
  return i(e)?.toLowerCase() === t.family.toLowerCase();
}
function i(e) {
  return e == null
    ? void 0
    : a(e)
        .replace(/^["']|["']$/g, ``)
        .replace(/\\(.)/gsu, `$1`) || void 0;
}
function a(e) {
  let t = null;
  for (let n = 0; n < e.length; n += 1) {
    let r = e[n];
    if (r === `\\`) n += 1;
    else if (t != null) r === t && (t = null);
    else if (r === `"` || r === `'`) t = r;
    else if (r === `,`) return e.slice(0, n).trim();
  }
  return e.trim();
}
function o(e) {
  return e.replaceAll(`\\`, `\\\\`).replaceAll(`"`, `\\"`);
}
var s = e(() => {});
export { n as a, a as i, o as n, t as o, i as r, s, r as t };
//# sourceMappingURL=theme-font-family-550a581dca1f.js.map
