import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { FBt as t, LNt as n, PBt as r } from "./app-shared-2feb3d4c6fcc.js";
import { LF as i, QF as a, RF as o, eI as s, nI as c, tI as l } from "./app-initial-ad16eaadf81f.js";
import { n as u, s as d } from "./general-settings-27118198cef3.js";
function f() {
  let e = (0, p.c)(4),
    t = (0, m.useContext)(l),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, h.jsx)(i, { slug: `appearance` })), (e[0] = n))
    : (n = e[0]);
  let r = t?.navigationKey,
    o = t?.targetId != null || t?.targetText != null,
    s;
  return (
    e[1] !== r || e[2] !== o
      ? ((s = (0, h.jsx)(a, { title: n, children: (0, h.jsx)(u, { defaultAdvancedExpanded: o }, r) })),
        (e[1] = r),
        (e[2] = o),
        (e[3] = s))
      : (s = e[3]),
    s
  );
}
var p, m, h;
function g() {
  return (g = e(() => {
    ((p = r()), (m = t()), s(), c(), o(), d(), (h = n()));
  }))();
}
g();
export { f as AppearanceSettings };
//# sourceMappingURL=appearance-settings-3fe372197c4b.js.map
