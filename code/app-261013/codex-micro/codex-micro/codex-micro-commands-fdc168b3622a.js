import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { BSn as t, E$n as n, T$n as r, VSn as i, vSn as a } from "./app-initial-5851df3f6cb1.js";
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
    (a(),
      n(),
      (c = i.filter(
        (e) => (e.kind === `webview` && t(e, `electron`)) || (e.kind === `electron-only` && r(e.id)),
      )));
  }))();
}
export { l as i, o as n, s as r, c as t };
//# sourceMappingURL=codex-micro-commands-fdc168b3622a.js.map
