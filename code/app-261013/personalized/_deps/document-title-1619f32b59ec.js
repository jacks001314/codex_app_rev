import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Kat as r,
  Pxt as i,
  fSt as a,
  qat as o,
  vzt as s,
  wot as c,
  xMt as l,
  yzt as u,
  zxt as d,
} from "./app-shared-bbfeca5e5737.js";
import { Cwr as f, F1 as p, P1 as m, gwr as h } from "./app-initial-5851df3f6cb1.js";
function g(e) {
  let t = (0, x.c)(2),
    { title: r } = e,
    i = n(h),
    a = d(p, `${i.value.pathname}${i.value.search ?? ``}`),
    o = r ?? a,
    s;
  return (t[0] === o ? (s = t[1]) : ((s = (0, C.jsx)(_, { title: o })), (t[0] = o), (t[1] = s)), s);
}
function _(e) {
  let i = (0, x.c)(13),
    { title: a, nativeTitle: o } = e,
    s = o === void 0 ? a : o,
    c = n(t),
    [l] = (0, S.useState)(v),
    u,
    d;
  (i[0] !== s || i[1] !== l || i[2] !== c || i[3] !== a
    ? ((u = () => {
        if (r?.windowTitle == null) return;
        let e = { owner: l, title: a == null ? void 0 : (s ?? null) };
        (c.set(w, (t) => (t.some((e) => e.owner === l) ? t.map((t) => (t.owner === l ? e : t)) : [...t, e])),
          b(c));
      }),
      (d = [c, l, a, s]),
      (i[0] = s),
      (i[1] = l),
      (i[2] = c),
      (i[3] = a),
      (i[4] = u),
      (i[5] = d))
    : ((u = i[4]), (d = i[5])),
    (0, S.useEffect)(u, d));
  let f, p;
  (i[6] !== l || i[7] !== c
    ? ((f = () => () => {
        r?.windowTitle != null && (c.set(w, (e) => e.filter((e) => e.owner !== l)), b(c));
      }),
      (p = [c, l]),
      (i[6] = l),
      (i[7] = c),
      (i[8] = f),
      (i[9] = p))
    : ((f = i[8]), (p = i[9])),
    (0, S.useEffect)(f, p));
  let m, h;
  return (
    i[10] === a
      ? ((m = i[11]), (h = i[12]))
      : ((m = () => {
          if (a == null) return;
          let e = document.title;
          y(a);
          let t = document.title;
          return () => {
            document.title === t && y(e);
          };
        }),
        (h = [a]),
        (i[10] = a),
        (i[11] = m),
        (i[12] = h)),
    (0, S.useEffect)(m, h),
    null
  );
}
function v() {
  return Symbol();
}
function y(e) {
  let t = document.head.querySelector(`title`)?.firstChild;
  t instanceof Text && t.nextSibling == null ? (t.data = e) : (document.title = e);
}
function b(e) {
  r.windowTitle?.setTitle(e.get(w).findLast((e) => e.title !== void 0)?.title ?? null);
}
var x, S, C, w;
function T() {
  return (T = e(() => {
    ((x = s()), i(), (S = u()), o(), c(), f(), m(), (C = l()), (w = a(t, () => [])));
  }))();
}
export { g as n, T as r, _ as t };
//# sourceMappingURL=document-title-1619f32b59ec.js.map
