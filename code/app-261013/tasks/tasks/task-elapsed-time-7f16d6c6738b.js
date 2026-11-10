import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { vzt as t, xMt as n, yzt as r } from "./app-shared-bbfeca5e5737.js";
import { GHt as i, J5t as a, K5t as o, KHt as s, Rp as c, zp as l } from "./app-initial-5851df3f6cb1.js";
function u(e) {
  let t = (0, d.c)(7),
    { startedAtMs: n } = e,
    r = a(),
    i;
  t[0] === r ? (i = t[1]) : ((i = r.getTime()), (t[0] = r), (t[1] = i));
  let [o, l] = (0, f.useState)(i),
    u;
  (t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((u = () => l(Date.now())), (t[2] = u)) : (u = t[2]),
    s(u, 1e3));
  let m = Math.max(o - n, 0),
    h;
  t[3] === m ? (h = t[4]) : ((h = c(m)), (t[3] = m), (t[4] = h));
  let g;
  return (t[5] === h ? (g = t[6]) : ((g = (0, p.jsx)(`span`, { children: h })), (t[5] = h), (t[6] = g)), g);
}
var d, f, p;
function m() {
  return (m = e(() => {
    ((d = t()), (f = r()), o(), l(), i(), (p = n()));
  }))();
}
export { m as n, u as t };
//# sourceMappingURL=task-elapsed-time-7f16d6c6738b.js.map
