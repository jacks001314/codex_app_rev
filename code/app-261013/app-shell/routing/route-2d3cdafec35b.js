import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Pxt as t,
  Vxt as n,
  _xt as r,
  oxt as i,
  sxt as a,
  vzt as o,
  wxt as s,
  xMt as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  Aun as l,
  Jpr as u,
  NPr as d,
  OPr as f,
  Upr as p,
  _Tn as m,
  _Tr as h,
  dTr as g,
  eor as _,
  fTr as v,
  jun as y,
  lTr as b,
  tor as x,
  vTn as S,
  yer as C,
} from "./app-initial-5851df3f6cb1.js";
import { n as w, t as T } from "./workspace-access-8ba94c08e772.js";
function E() {
  let e = (0, D.c)(9),
    t = n(x),
    r = n(u),
    o = n(y),
    c = n(d),
    l = s(),
    f;
  e[0] === l.pathname ? (f = e[1]) : ((f = l.pathname.startsWith(`${b}/`)), (e[0] = l.pathname), (e[1] = f));
  let p = f,
    h;
  e[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = C()), (e[2] = h)) : (h = e[2]);
  let _ = h,
    S = n(l.pathname === v ? w : null),
    T = t || (l.pathname === v && _) || (l.pathname === v && S !== `continue`) || ((r || o) && p);
  if (!T && c) {
    let t;
    return (
      e[3] === p
        ? (t = e[4])
        : ((t = p ? (0, O.jsx)(m, { delay: !1, debugName: `FeatureNavigationRoute` }) : null),
          (e[3] = p),
          (e[4] = t)),
      t
    );
  }
  if (p && l.pathname !== v && _) {
    let t;
    return (
      e[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, O.jsx)(i, { to: v, replace: !0 })), (e[5] = t))
        : (t = e[5]),
      t
    );
  }
  if (T && l.pathname === g && (l.state?.aeonDraft == null || l.state.prefillAeonStartTarget == null)) {
    let t;
    return (
      e[6] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, O.jsx)(i, { to: v, replace: !0 })), (e[6] = t))
        : (t = e[6]),
      t
    );
  }
  let E;
  return (
    e[7] === T
      ? (E = e[8])
      : ((E = T ? (0, O.jsx)(a, {}) : (0, O.jsx)(i, { to: `/`, replace: !0 })), (e[7] = T), (e[8] = E)),
    E
  );
}
var D, O;
function k() {
  return (k = e(() => {
    ((D = o()), t(), r(), S(), l(), h(), p(), T(), _(), f(), (O = c()));
  }))();
}
k();
export { E as FeatureNavigationRoute };
//# sourceMappingURL=route-2d3cdafec35b.js.map
