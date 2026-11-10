import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  A5t as t,
  F5t as n,
  O5t as r,
  _dn as i,
  c$ as a,
  d5t as o,
  mcn as s,
  n5t as c,
  t$ as l,
  v5t as u,
  vdn as d,
} from "./app-shared-7552fc8d5d82.js";
import {
  $_ as f,
  Crt as p,
  Drt as m,
  FP as h,
  JP as g,
  LP as _,
  Oon as v,
  Ort as y,
  Q_ as b,
  RP as x,
  Ron as S,
  Trt as C,
  VPn as w,
  XP as T,
  ZP as E,
  c5 as D,
  d5 as O,
  f5 as k,
  h5 as A,
  han as j,
  im as M,
  kon as N,
  m5 as P,
  man as F,
  nm as I,
  p5 as L,
  ptn as R,
  q5t as z,
  qPn as B,
  s5 as V,
  uan as H,
  zP as U,
} from "./app-initial-3916b423772b.js";
import { a as W, n as G } from "./actions-01f600de6534.js";
function K(e) {
  let r = (0, q.c)(16),
    i = t(l),
    a = u(),
    o = n(A),
    s;
  r[0] === a.pathname ? (s = r[1]) : ((s = k(a.pathname)), (r[0] = a.pathname), (r[1] = s));
  let d = s,
    p;
  r[2] !== a || r[3] !== i || r[4] !== d
    ? ((p = () => {
        let e = i.get(_),
          t = i.get(W);
        if (
          d == null ||
          e.workspaceId !== V(a.pathname) ||
          e.clientThreadId !== i.value.clientThreadId ||
          I(a) != null ||
          i.get(x) === a.key ||
          (t?.clientThreadId === i.value.clientThreadId && t.navigationKey === a.key)
        )
          return;
        let n = O(e.accountKey),
          r = F(i, n);
        if (r != null) {
          i.get(E) !== a.key && H(i, r, n);
          return;
        }
        i.get(m).has(n) ||
          i.get(v).has(n) ||
          (f(i),
          C(i, {
            browserTabId: n,
            initialUrl: d,
            initiator: a.state?.spaceBrowserOpen?.initiator ?? `sites_library`,
            source: a.state?.spaceBrowserOpen?.source ?? `manual`,
          }));
      }),
      (r[2] = a),
      (r[3] = i),
      (r[4] = d),
      (r[5] = p))
    : (p = r[5]);
  let h = (0, J.useEffectEvent)(p),
    y;
  r[6] !== h || r[7] !== i
    ? ((y = () =>
        i.watch((e) => {
          let { get: t } = e,
            n = t(U),
            r = t(S);
          if (n || r) return;
          let i = t(g),
            a = t(_);
          t(R) != null &&
            t(A) &&
            t(w) &&
            (a.conversationId != null || i === `ready`) &&
            i !== `failed` &&
            i !== `skipped` &&
            h();
        })),
      (r[6] = h),
      (r[7] = i),
      (r[8] = y))
    : (y = r[8]);
  let b;
  (r[9] !== a.key || r[10] !== i || r[11] !== d
    ? ((b = [a.key, i, d]), (r[9] = a.key), (r[10] = i), (r[11] = d), (r[12] = b))
    : (b = r[12]),
    (0, J.useLayoutEffect)(y, b));
  let T;
  return (
    r[13] !== d || r[14] !== o
      ? ((T = d != null && o ? null : (0, Y.jsx)(c, { to: `/space`, replace: !0 })),
        (r[13] = d),
        (r[14] = o),
        (r[15] = T))
      : (T = r[15]),
    T
  );
}
var q, J, Y;
function X() {
  return (X = e(() => {
    ((q = i()),
      r(),
      (J = d()),
      o(),
      B(),
      p(),
      y(),
      z(),
      a(),
      j(),
      N(),
      b(),
      T(),
      M(),
      G(),
      P(),
      L(),
      D(),
      h(),
      (Y = s()));
  }))();
}
X();
export { K as SpacesWorkspaceBrowserRoute };
//# sourceMappingURL=browser-route-b172db0eb050.js.map
