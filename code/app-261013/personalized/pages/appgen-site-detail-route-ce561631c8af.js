import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  _xt as t,
  kxt as n,
  oxt as r,
  sxt as i,
  vxt as a,
  vzt as o,
  wxt as s,
  xMt as c,
} from "./app-shared-bbfeca5e5737.js";
import {
  Jlt as l,
  Klt as u,
  Xlt as d,
  Ylt as f,
  Zlt as p,
  cEr as m,
  qlt as h,
} from "./app-initial-5851df3f6cb1.js";
import { n as g, t as _ } from "./appgen-site-detail-layout-f1525d985a83.js";
function v() {
  let e = (0, x.c)(4),
    { pathname: t } = s(),
    { projectId: i } = n();
  if (i == null) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, S.jsx)(r, { replace: !0, to: `/sites` })), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let o = `analytics`;
  a(`/sites/:projectId/settings`, t) == null
    ? a(`/sites/:projectId/plugins`, t) == null
      ? a(`/sites/:projectId/automations`, t) == null
        ? a(`/sites/:projectId/database`, t) != null && (o = `database`)
        : (o = `automations`)
      : (o = `plugins`)
    : (o = `settings`);
  let c;
  return (
    e[1] !== i || e[2] !== o
      ? ((c = (0, S.jsx)(_, { prefetchTab: b, projectId: i, selectedTab: o, children: y })),
        (e[1] = i),
        (e[2] = o),
        (e[3] = c))
      : (c = e[3]),
    c
  );
}
function y() {
  return (0, S.jsx)(i, {});
}
function b(e) {
  switch (e) {
    case `analytics`:
      return u.prefetch();
    case `database`:
      return l.prefetch();
    case `automations`:
      return h.prefetch();
    case `plugins`:
      return d.prefetch();
    case `settings`:
      return f.prefetch();
  }
}
var x, S;
function C() {
  return (C = e(() => {
    ((x = o()), t(), p(), m(), g(), (S = c()));
  }))();
}
C();
export { v as AppgenSiteDetailRoute };
//# sourceMappingURL=appgen-site-detail-route-ce561631c8af.js.map
