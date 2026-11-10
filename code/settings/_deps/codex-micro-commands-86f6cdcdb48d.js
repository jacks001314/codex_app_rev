import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { BK as t, H7 as n, TK as r, U7 as i, UK as a } from "./app-initial-f094ef01c64d.js";
function o(e) {
  let t = e === `newThread` ? `newTask` : e;
  return c.find((e) => e.id === t) ?? null;
}
function s(e) {
  let t = /^recentThread([1-6])$/.exec(e);
  return t == null ? null : Number(t[1]) - 1;
}
var c,
  l = e(() => {
    (r(),
      i(),
      (c = a.filter(
        (e) =>
          (e.kind === `webview` && t(e, `electron`)) || (e.kind === `electron-only` && n(e.id)),
      )));
  });
export { l as i, o as n, s as r, c as t };
//# sourceMappingURL=codex-micro-commands-86f6cdcdb48d.js.map
