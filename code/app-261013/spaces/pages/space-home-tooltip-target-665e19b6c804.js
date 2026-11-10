import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Pxt as n,
  Vxt as r,
  oSt as i,
  vzt as a,
  wot as o,
  xMt as s,
  yzt as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  APr as l,
  Ear as u,
  NDr as d,
  NPr as f,
  O8t as p,
  OPr as m,
  Pcn as h,
  T8t as g,
  dQt as _,
  fQt as v,
  jDr as y,
  jPr as b,
  jcn as x,
  pQt as S,
  yQt as C,
  zar as w,
} from "./app-initial-5851df3f6cb1.js";
import { Kr as T, qr as E } from "./app-primary-fe8a450b3b04.js";
function D(e, t) {
  e.set(C, t);
}
function O(e) {
  let t = (0, k.c)(7),
    { children: n, onMount: i } = e,
    a;
  (t[0] === i ? (a = t[1]) : ((a = [i]), (t[0] = i), (t[1] = a)), (0, A.useLayoutEffect)(i, a));
  let o = r(N),
    s = r(M),
    c = r(v),
    l = c ?? `chatgpt`,
    u = c != null && o,
    d = c != null && s,
    f;
  return (
    t[2] !== n || t[3] !== l || t[4] !== u || t[5] !== d
      ? ((f = (0, j.jsx)(T, {
          activationAction: `click`,
          allowDesktop: !0,
          enabled: u,
          minimumVisibleRatio: 0.5,
          onReadinessChange: D,
          previewEnabled: d,
          product: l,
          side: `end`,
          target: _,
          children: n,
        })),
        (t[2] = n),
        (t[3] = l),
        (t[4] = u),
        (t[5] = d),
        (t[6] = f))
      : (f = t[6]),
    f
  );
}
var k, A, j, M, N;
function P() {
  return (P = e(() => {
    ((k = a()),
      n(),
      (A = c()),
      g(),
      E(),
      S(),
      d(),
      u(),
      x(),
      o(),
      m(),
      (j = s()),
      (M = i(t, ({ get: e }) => {
        if (((e(l, `2200939124`) && e(l, `3085093835`)) || (!e(f) && e(b) != null)) && e(w) !== `loading`)
          return e(h);
      })),
      (N = i(t, ({ get: e }) => {
        let t = e(M);
        if (t !== !0) return t;
        let n = e(p);
        return n == null ? !e(y).isError && void 0 : !n;
      })));
  }))();
}
P();
export { O as SpaceHomeTooltipTarget };
//# sourceMappingURL=space-home-tooltip-target-665e19b6c804.js.map
