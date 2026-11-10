import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import { EE as t, xE as n } from "./app-initial-f094ef01c64d.js";
function r(e) {
  let t = new Map();
  for (let r of e) {
    if (r.location.domain !== `conversation`) continue;
    let e = n(r.location.turnKey, r.location.unitId),
      i = t.get(e) ?? [];
    (i.push(r), t.set(e, i));
  }
  return t;
}
function i(e) {
  let t = new Map();
  for (let n of e) {
    if (n.location.domain !== `diff`) continue;
    let e = t.get(n.location.path) ?? [];
    (e.push(n), t.set(n.location.path, e));
  }
  return t;
}
var a = e(() => {
  t();
});
export { i as n, a as r, r as t };
//# sourceMappingURL=highlight-selectors-9d1b805d6cf4.js.map
