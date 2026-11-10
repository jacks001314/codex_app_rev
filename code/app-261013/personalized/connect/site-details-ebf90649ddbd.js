import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, Vxt as n, _xt as r, vxt as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
import {
  Jlt as s,
  Klt as c,
  Xlt as l,
  Ylt as u,
  Zlt as d,
  aEr as f,
  cEr as p,
  eDr as m,
  lun as h,
  nDr as g,
  qlt as _,
  uun as v,
} from "./app-initial-5851df3f6cb1.js";
import { m as y, n as b, p as x, t as S } from "./appgen-site-detail-layout-f1525d985a83.js";
function C(e) {
  let t = (0, w.c)(19),
    { path: r, onNavigate: a } = e,
    o = n(h),
    d = g(`262557526`),
    p = g(`663642302`),
    m,
    v,
    y,
    b,
    C;
  if (t[0] !== d || t[1] !== o || t[2] !== a || t[3] !== r) {
    C = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = i(`/sites/:projectId/*`, r);
      if (((v = e?.params.projectId), v == null || o === `loading`)) {
        C = null;
        break bb0;
      }
      if (((m = { projectId: v, onNavigate: a }), o === `unavailable`)) {
        C = (0, T.jsx)(x, { navigation: m, to: `/sites` });
        break bb0;
      }
      if (((b = e?.params[`*`]), b === ``)) {
        C = (0, T.jsx)(x, { navigation: m, to: f(v) });
        break bb0;
      }
      if (
        ((y = `settings`),
        b === `database` || b === `automations` || b === `plugins`
          ? (y = b)
          : b?.startsWith(`analytics`) && (y = `analytics`),
        y === `analytics` && !d)
      ) {
        C = (0, T.jsx)(x, { navigation: m, to: f(v) });
        break bb0;
      }
    }
    ((t[0] = d),
      (t[1] = o),
      (t[2] = a),
      (t[3] = r),
      (t[4] = m),
      (t[5] = v),
      (t[6] = y),
      (t[7] = b),
      (t[8] = C));
  } else ((m = t[4]), (v = t[5]), (y = t[6]), (b = t[7]), (C = t[8]));
  if (C !== Symbol.for(`react.early_return_sentinel`)) return C;
  let E;
  t[9] !== p || t[10] !== m || t[11] !== y || t[12] !== b
    ? ((E = () => {
        switch (y) {
          case `settings`:
            return (0, T.jsx)(u, { navigation: m });
          case `analytics`:
            return (0, T.jsx)(c, {
              navigation: m,
              section: b === `analytics/events` && p ? `events` : `overview`,
            });
          case `database`:
            return (0, T.jsx)(s, { navigation: m });
          case `plugins`:
            return (0, T.jsx)(l, { navigation: m });
          case `automations`:
            return (0, T.jsx)(_, { navigation: m });
        }
      }),
      (t[9] = p),
      (t[10] = m),
      (t[11] = y),
      (t[12] = b),
      (t[13] = E))
    : (E = t[13]);
  let D;
  return (
    t[14] !== m || t[15] !== v || t[16] !== y || t[17] !== E
      ? ((D = (0, T.jsx)(S, { navigation: m, projectId: v, selectedTab: y, children: E })),
        (t[14] = m),
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
    ((w = a()), t(), r(), v(), d(), p(), b(), y(), m(), (T = o()));
  }))();
}
E();
export { C as SpaceSiteDetails };
//# sourceMappingURL=site-details-ebf90649ddbd.js.map
