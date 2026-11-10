import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CSt as t,
  KSt as n,
  LNt as r,
  NSt as i,
  PBt as a,
  PSt as o,
  SSt as s,
  VSt as c,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $ut as l,
  EAr as u,
  Qut as d,
  Zut as f,
  edt as p,
  ndt as m,
  tdt as h,
} from "./app-initial-ad16eaadf81f.js";
import { n as g, t as _ } from "./appgen-site-detail-layout-8ded3439c229.js";
function v() {
  let e = (0, x.c)(4),
    { pathname: t } = c(),
    { projectId: r } = n();
  if (r == null) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, S.jsx)(s, { replace: !0, to: `/sites` })), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let i = `analytics`;
  o(`/sites/:projectId/settings`, t) == null
    ? o(`/sites/:projectId/plugins`, t) == null
      ? o(`/sites/:projectId/automations`, t) == null
        ? o(`/sites/:projectId/database`, t) != null && (i = `database`)
        : (i = `automations`)
      : (i = `plugins`)
    : (i = `settings`);
  let a;
  return (
    e[1] !== r || e[2] !== i
      ? ((a = (0, S.jsx)(_, { prefetchTab: b, projectId: r, selectedTab: i, children: y })),
        (e[1] = r),
        (e[2] = i),
        (e[3] = a))
      : (a = e[3]),
    a
  );
}
function y() {
  return (0, S.jsx)(t, {});
}
function b(e) {
  switch (e) {
    case `analytics`:
      return f.prefetch();
    case `database`:
      return l.prefetch();
    case `automations`:
      return d.prefetch();
    case `plugins`:
      return h.prefetch();
    case `settings`:
      return p.prefetch();
  }
}
var x, S;
function C() {
  return (C = e(() => {
    ((x = a()), i(), m(), u(), g(), (S = r()));
  }))();
}
C();
export { v as AppgenSiteDetailRoute };
//# sourceMappingURL=appgen-site-detail-route-34cf044b83d9.js.map
