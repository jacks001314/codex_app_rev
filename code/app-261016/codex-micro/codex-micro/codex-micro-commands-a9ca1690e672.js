import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $2n as t, LTn as n, aEn as r, e4n as i, oEn as a } from "./app-initial-ad16eaadf81f.js";
function o(e) {
  let t = e === `newThread` ? `newTask` : e;
  return c.find((e) => e.id === t) ?? null;
}
function s(e) {
  let t = /^recentThread([1-6])$/.exec(e);
  return t == null ? null : Number(t[1]) - 1;
}
var c;
function l() {
  return (l = e(() => {
    (n(),
      i(),
      (c = a.filter(
        (e) => (e.kind === `webview` && r(e, `electron`)) || (e.kind === `electron-only` && t(e.id)),
      )));
  }))();
}
export { l as i, o as n, s as r, c as t };
//# sourceMappingURL=codex-micro-commands-a9ca1690e672.js.map
