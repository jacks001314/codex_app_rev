import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { B4 as t, vzt as n, xMt as r, z4 as i } from "./app-shared-bbfeca5e5737.js";
import { G4n as a, J4n as o, K4n as s, U4n as c, lIr as l, sIr as u } from "./app-initial-5851df3f6cb1.js";
import { i as d, t as f } from "./entry-c845dec45605.js";
function p(e, t, { openGrid: n, onClose: r, signal: i }) {
  if (i?.aborted) return null;
  let a = !1,
    l;
  function d(e) {
    let t = (0, m.c)(2),
      n;
    return (t[0] === e ? (n = t[1]) : ((n = (0, h.jsx)(g, { ...e })), (t[0] = e), (t[1] = n)), n);
  }
  function f() {
    a || ((a = !0), l?.(), i?.removeEventListener(`abort`, _), r?.());
  }
  let p = n?.(t, f) ?? null;
  function _() {
    (p?.(), c(e, d), f());
  }
  if (p == null) {
    let n = e.get(u).pathname;
    (o(e, d, { ...t, onClose: f }),
      (l = e.watch((e) => {
        s(e, d) ? e.get(u).pathname !== n && _() : f();
      })));
  }
  return (i?.addEventListener(`abort`, _, { once: !0 }), _);
}
var m, h, g;
function _() {
  return (_ = e(() => {
    ((m = n()), f(), l(), i(), a(), (h = r()), (g = t(d)));
  }))();
}
export { _ as n, p as r, g as t };
//# sourceMappingURL=open-viewer-92b3bc7a111d.js.map
