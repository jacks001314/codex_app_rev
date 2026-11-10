import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, NSt as n, PBt as r, PSt as i, ZSt as a, iCt as o } from "./app-shared-2feb3d4c6fcc.js";
import {
  $ut as s,
  CAr as c,
  Cjr as l,
  EAr as u,
  Qut as d,
  Zut as f,
  amn as p,
  edt as m,
  ndt as h,
  omn as g,
  tdt as _,
  xjr as v,
} from "./app-initial-ad16eaadf81f.js";
import { m as y, n as b, p as x, t as S } from "./appgen-site-detail-layout-8ded3439c229.js";
function C(e) {
  let t = (0, w.c)(19),
    { path: n, onNavigate: r } = e,
    a = o(p),
    u = l(`262557526`),
    h = l(`663642302`),
    g,
    v,
    y,
    b,
    C;
  if (t[0] !== u || t[1] !== a || t[2] !== r || t[3] !== n) {
    C = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = i(`/sites/:projectId/*`, n);
      if (((v = e?.params.projectId), v == null || a === `loading`)) {
        C = null;
        break bb0;
      }
      if (((g = { projectId: v, onNavigate: r }), a === `unavailable`)) {
        C = (0, T.jsx)(x, { navigation: g, to: `/sites` });
        break bb0;
      }
      if (((b = e?.params[`*`]), b === ``)) {
        C = (0, T.jsx)(x, { navigation: g, to: c(v) });
        break bb0;
      }
      if (
        ((y = `settings`),
        b === `database` || b === `automations` || b === `plugins`
          ? (y = b)
          : b?.startsWith(`analytics`) && (y = `analytics`),
        y === `analytics` && !u)
      ) {
        C = (0, T.jsx)(x, { navigation: g, to: c(v) });
        break bb0;
      }
    }
    ((t[0] = u),
      (t[1] = a),
      (t[2] = r),
      (t[3] = n),
      (t[4] = g),
      (t[5] = v),
      (t[6] = y),
      (t[7] = b),
      (t[8] = C));
  } else ((g = t[4]), (v = t[5]), (y = t[6]), (b = t[7]), (C = t[8]));
  if (C !== Symbol.for(`react.early_return_sentinel`)) return C;
  let E;
  t[9] !== h || t[10] !== g || t[11] !== y || t[12] !== b
    ? ((E = () => {
        switch (y) {
          case `settings`:
            return (0, T.jsx)(m, { navigation: g });
          case `analytics`:
            return (0, T.jsx)(f, {
              navigation: g,
              section: b === `analytics/events` && h ? `events` : `overview`,
            });
          case `database`:
            return (0, T.jsx)(s, { navigation: g });
          case `plugins`:
            return (0, T.jsx)(_, { navigation: g });
          case `automations`:
            return (0, T.jsx)(d, { navigation: g });
        }
      }),
      (t[9] = h),
      (t[10] = g),
      (t[11] = y),
      (t[12] = b),
      (t[13] = E))
    : (E = t[13]);
  let D;
  return (
    t[14] !== g || t[15] !== v || t[16] !== y || t[17] !== E
      ? ((D = (0, T.jsx)(S, { navigation: g, projectId: v, selectedTab: y, children: E })),
        (t[14] = g),
        (t[15] = v),
        (t[16] = y),
        (t[17] = E),
        (t[18] = D))
      : (D = t[18]),
    D
  );
}
var w, T;
function E() {
  return (E = e(() => {
    ((w = r()), a(), n(), g(), h(), u(), b(), y(), v(), (T = t()));
  }))();
}
E();
export { C as SpaceSiteDetails };
//# sourceMappingURL=site-details-28ff9bd6e665.js.map
