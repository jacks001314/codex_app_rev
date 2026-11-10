import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, aSt as n, oSt as r } from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as i,
  Jwn as a,
  MCn as o,
  Zwn as s,
  dwn as c,
  gwr as l,
  hwn as u,
  zCn as d,
} from "./app-initial-5851df3f6cb1.js";
function f(e, t) {
  let n = Symbol();
  return (
    e.set(p, t, n),
    () => {
      e.get(p, t) === n && e.set(p, t, null);
    }
  );
}
var p, m;
function h() {
  return (h = e(() => {
    (t(),
      c(),
      i(),
      a(),
      o(),
      (p = n(l, (e) => null)),
      (m = r(l, ({ get: e }) => {
        if (e(d) === `content`) {
          let t = e(u.activeTab$)?.tabId;
          return t != null && e(p, t) != null;
        }
        return !e(s) && e(p, null) != null;
      })));
  }))();
}
export { f as n, m as r, h as t };
//# sourceMappingURL=selection-composer-visibility-81abee1029e4.js.map
