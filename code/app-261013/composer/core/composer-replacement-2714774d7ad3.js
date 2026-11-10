import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Ixt as t, Pxt as n, vzt as r, xMt as i, yzt as a } from "./app-shared-bbfeca5e5737.js";
import { Cwr as o, gwr as s } from "./app-initial-5851df3f6cb1.js";
import { r as c, t as l } from "./composer-replacement-state-5e5a27d05b29.js";
function u(e) {
  let n = (0, f.c)(3),
    { children: r, isActive: i } = e,
    a = t(s),
    o = i ? a : !1,
    c;
  return (
    n[0] !== r || n[1] !== o
      ? ((c = (0, m.jsx)(h, { value: o, children: r })), (n[0] = r), (n[1] = o), (n[2] = c))
      : (c = n[2]),
    c
  );
}
function d(e) {
  let t = (0, f.c)(8),
    { children: n } = e,
    r = (0, p.useContext)(h),
    i,
    a;
  (t[0] === r
    ? ((i = t[1]), (a = t[2]))
    : ((i = () => {
        if (!r) return;
        let e = Symbol();
        return (
          r.set(c, (t) => new Set([...t, e])),
          () => {
            r.set(c, (t) => {
              if (!t.has(e)) return t;
              let n = new Set(t);
              return (n.delete(e), n);
            });
          }
        );
      }),
      (a = [r]),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a)),
    (0, p.useLayoutEffect)(i, a));
  let o = r !== !1,
    s;
  t[3] !== n || t[4] !== o ? ((s = n(o)), (t[3] = n), (t[4] = o), (t[5] = s)) : (s = t[5]);
  let l;
  return (
    t[6] === s ? (l = t[7]) : ((l = (0, m.jsx)(m.Fragment, { children: s })), (t[6] = s), (t[7] = l)),
    l
  );
}
var f, p, m, h;
function g() {
  return (g = e(() => {
    ((f = r()), n(), (p = a()), o(), l(), (m = i()), (h = (0, p.createContext)(void 0)));
  }))();
}
export { u as n, g as r, d as t };
//# sourceMappingURL=composer-replacement-2714774d7ad3.js.map
