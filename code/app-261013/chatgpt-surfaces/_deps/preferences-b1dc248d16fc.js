import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Pxt as n,
  nSt as r,
  uSt as i,
  vzt as a,
  wot as o,
  xMt as s,
} from "./app-shared-bbfeca5e5737.js";
import {
  Cwr as c,
  _zt as l,
  bFr as u,
  gwr as d,
  gzt as f,
  iNr as p,
  rNr as m,
  rWt as h,
  tWt as g,
  xFr as _,
} from "./app-initial-5851df3f6cb1.js";
function v(e) {
  let t = (0, y.c)(8),
    { children: n, icon: r, logoUrl: i } = e,
    a;
  t[0] !== r || t[1] !== i
    ? ((a = i
        ? (0, b.jsx)(
            f,
            { className: `size-5 shrink-0`, alt: ``, src: i, fallback: r ?? (0, b.jsx)(b.Fragment, {}) },
            i,
          )
        : r),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === n
    ? (o = t[4])
    : ((o = (0, b.jsx)(`div`, { className: `min-w-0 flex-1 truncate`, children: n })),
      (t[3] = n),
      (t[4] = o));
  let s;
  return (
    t[5] !== a || t[6] !== o
      ? ((s = (0, b.jsxs)(`div`, {
          className: `flex min-w-0 flex-1 items-center gap-2.5 text-base leading-6 font-semibold text-default`,
          children: [a, o],
        })),
        (t[5] = a),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
var y, b;
function x() {
  return (x = e(() => {
    ((y = a()), l(), (b = s()));
  }))();
}
function S(e) {
  return e.watch((t) => {
    h(e, t.get(w));
  });
}
var C, w;
function T() {
  return (T = e(() => {
    (n(),
      c(),
      g(),
      (C = `(max-width: 767px)`),
      (w = i(d, !1, ({ set: e }) => {
        let t = window.matchMedia(C),
          n = () => e(t.matches);
        return (n(), t.addEventListener(`change`, n), () => t.removeEventListener(`change`, n));
      })));
  }))();
}
function E() {
  try {
    return typeof window < `u` && window.localStorage.getItem(k) === `true`;
  } catch {
    return !1;
  }
}
function D(e, t, n) {
  e.set(A, (e) => ({ ...e, [t]: n }));
}
var O, k, A, j;
function M() {
  return (M = e(() => {
    (n(),
      o(),
      _(),
      m(),
      (O = `personal-finance-sensitive-values-hidden-by-account-v1`),
      (k = `mattress.ledger.sensitiveValuesHidden`),
      (A = p(O, {})),
      (j = r(t, (e, { get: t }) => {
        let n = t(A) ?? u(`personal-finance-sensitive-values-hidden-by-account-v1`, {});
        return e == null ? !1 : Object.hasOwn(n, e) ? n[e] === !0 : E();
      })));
  }))();
}
export { T as a, x as c, w as i, j as n, S as o, D as r, v as s, M as t };
//# sourceMappingURL=preferences-b1dc248d16fc.js.map
