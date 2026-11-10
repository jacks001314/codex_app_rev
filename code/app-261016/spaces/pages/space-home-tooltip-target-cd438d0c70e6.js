import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  CCt as n,
  FBt as r,
  LNt as i,
  PBt as a,
  Qst as o,
  ZSt as s,
  iCt as c,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Dlr as l,
  Ofn as u,
  Tfn as d,
  c$t as f,
  dBr as p,
  eMr as m,
  fBr as h,
  fWt as g,
  lBr as _,
  lWt as v,
  m$t as y,
  mBr as b,
  mlr as x,
  nMr as S,
  o$t as C,
  s$t as w,
} from "./app-initial-ad16eaadf81f.js";
import { ai as T, ii as E } from "./app-primary-3e00728c2a4c.js";
function D(e, t) {
  e.set(y, t);
}
function O(e) {
  let t = (0, k.c)(7),
    { children: n, onMount: r } = e,
    i;
  (t[0] === r ? (i = t[1]) : ((i = [r]), (t[0] = r), (t[1] = i)), (0, A.useLayoutEffect)(r, i));
  let a = c(N),
    o = c(M),
    s = c(w),
    l = s ?? `chatgpt`,
    u = s != null && a,
    d = s != null && o,
    f;
  return (
    t[2] !== n || t[3] !== l || t[4] !== u || t[5] !== d
      ? ((f = (0, j.jsx)(E, {
          activationAction: `click`,
          allowDesktop: !0,
          enabled: u,
          minimumVisibleRatio: 0.5,
          onReadinessChange: D,
          previewEnabled: d,
          product: l,
          side: `end`,
          target: C,
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
      s(),
      (A = r()),
      v(),
      T(),
      f(),
      S(),
      x(),
      d(),
      t(),
      _(),
      (j = i()),
      (M = n(o, ({ get: e }) => {
        if (((e(p, `2200939124`) && e(p, `3085093835`)) || (!e(b) && e(h) != null)) && e(l) !== `loading`)
          return e(u);
      })),
      (N = n(o, ({ get: e }) => {
        let t = e(M);
        if (t !== !0) return t;
        let n = e(g);
        return n == null ? !e(m).isError && void 0 : !n;
      })));
  }))();
}
P();
export { O as SpaceHomeTooltipTarget };
//# sourceMappingURL=space-home-tooltip-target-cd438d0c70e6.js.map
