import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CSt as t,
  LNt as n,
  NSt as r,
  PBt as i,
  SSt as a,
  VSt as o,
  ZSt as s,
  iCt as c,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BOn as l,
  Dmn as u,
  Ekr as d,
  Emn as f,
  Hlr as p,
  K_r as m,
  Nkr as h,
  Okr as g,
  Ulr as _,
  VOn as v,
  Z_r as y,
  jrr as b,
  lBr as x,
  mBr as S,
} from "./app-initial-ad16eaadf81f.js";
import { n as C, t as w } from "./workspace-access-7ab3b1ba94db.js";
function T() {
  let e = (0, E.c)(8),
    n = c(_),
    r = c(y),
    i = c(u),
    s = c(S),
    f = o(),
    p;
  e[0] === f.pathname ? (p = e[1]) : ((p = f.pathname.startsWith(`${d}/`)), (e[0] = f.pathname), (e[1] = p));
  let m = p,
    h;
  e[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = b()), (e[2] = h)) : (h = e[2]);
  let v = h,
    x = c(f.pathname === g ? C : null),
    w = n || (f.pathname === g && v) || (f.pathname === g && x !== `continue`) || ((r || i) && m);
  if (!w && s) {
    let t;
    return (
      e[3] === m
        ? (t = e[4])
        : ((t = m ? (0, D.jsx)(l, { delay: !1, debugName: `FeatureNavigationRoute` }) : null),
          (e[3] = m),
          (e[4] = t)),
      t
    );
  }
  if (m && f.pathname !== g && v) {
    let t;
    return (
      e[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, D.jsx)(a, { to: g, replace: !0 })), (e[5] = t))
        : (t = e[5]),
      t
    );
  }
  let T;
  return (
    e[6] === w
      ? (T = e[7])
      : ((T = w ? (0, D.jsx)(t, {}) : (0, D.jsx)(a, { to: `/`, replace: !0 })), (e[6] = w), (e[7] = T)),
    T
  );
}
var E, D;
function O() {
  return (O = e(() => {
    ((E = i()), s(), r(), v(), f(), h(), m(), w(), p(), x(), (D = n()));
  }))();
}
O();
export { T as FeatureNavigationRoute };
//# sourceMappingURL=route-c691b5ae05a1.js.map
