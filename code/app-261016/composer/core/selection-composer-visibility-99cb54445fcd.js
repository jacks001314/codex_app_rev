import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { CCt as t, SCt as n, ZSt as r } from "./app-shared-2feb3d4c6fcc.js";
import {
  ADn as i,
  MOr as a,
  PDn as o,
  ZEn as s,
  iDn as c,
  mOn as l,
  vOn as u,
  zOr as d,
} from "./app-initial-ad16eaadf81f.js";
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
    (r(),
      i(),
      d(),
      l(),
      s(),
      (p = n(a, (e) => null)),
      (m = t(a, ({ get: e }) => {
        if (e(c) === `content`) {
          let t = e(o.activeTab$)?.tabId;
          return t != null && e(p, t) != null;
        }
        return !e(u) && e(p, null) != null;
      })));
  }))();
}
export { f as n, m as r, h as t };
//# sourceMappingURL=selection-composer-visibility-99cb54445fcd.js.map
