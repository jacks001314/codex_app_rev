import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Bj as t, LNt as n, MNt as r, NNt as i, PBt as a, Rj as o } from "./app-shared-2feb3d4c6fcc.js";
import { C1n as s, c1n as c } from "./app-initial-ad16eaadf81f.js";
import { ec as l, tc as u } from "./app-primary-3e00728c2a4c.js";
function d(e) {
  let t = c(e);
  return t == null ? null : (o(t) ?? null);
}
function f() {
  return (f = e(() => {
    (s(), t());
  }))();
}
function p(e) {
  let t = (0, m.c)(8),
    n,
    i;
  t[0] === e ? ((n = t[1]), (i = t[2])) : (({ className: n, ...i } = e), (t[0] = e), (t[1] = n), (t[2] = i));
  let a;
  t[3] === n ? (a = t[4]) : ((a = r(`cursor-interaction`, n)), (t[3] = n), (t[4] = a));
  let o;
  return (
    t[5] !== i || t[6] !== a
      ? ((o = (0, h.jsx)(l, { ...i, className: a, initiator: `markdown_link_click` })),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = a()), i(), u(), (h = n()));
  }))();
}
export { f as i, g as n, d as r, p as t };
//# sourceMappingURL=inline-link-1fab6bef5499.js.map
