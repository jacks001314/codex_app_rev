import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { YA as t, ZA as n, _Mt as r, gMt as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
import { UXn as s, iZn as c } from "./app-initial-5851df3f6cb1.js";
import { Us as l, Ws as u } from "./app-primary-fe8a450b3b04.js";
function d(e) {
  let n = s(e);
  return n == null ? null : (t(n) ?? null);
}
function f() {
  return (f = e(() => {
    (c(), n());
  }))();
}
function p(e) {
  let t = (0, m.c)(8),
    n,
    r;
  t[0] === e ? ((n = t[1]), (r = t[2])) : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let a;
  t[3] === n ? (a = t[4]) : ((a = i(`cursor-interaction`, n)), (t[3] = n), (t[4] = a));
  let o;
  return (
    t[5] !== r || t[6] !== a
      ? ((o = (0, h.jsx)(l, { ...r, className: a, initiator: `markdown_link_click` })),
        (t[5] = r),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = a()), r(), u(), (h = o()));
  }))();
}
export { f as i, g as n, d as r, p as t };
//# sourceMappingURL=inline-link-aa89c0848eb0.js.map
