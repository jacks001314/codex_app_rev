import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { sct as t, uSt as n } from "./app-shared-2feb3d4c6fcc.js";
import {
  $vn as r,
  Avn as i,
  YI as a,
  ZI as o,
  iyn as s,
  nyn as c,
  zvn as l,
} from "./app-initial-ad16eaadf81f.js";
import { n as u, t as d } from "./appgen-browser-site-c0930c385c7c.js";
function f(e, t, o, l) {
  let u = d(e(a, { conversationId: n(t.conversationId), hostId: l }), o);
  if (u == null) return null;
  let { data: f } = e(i, u.projectId);
  return {
    siteUrl: o,
    projectId: u.projectId,
    canManage: r(f),
    isOwnerOnly: f != null && s(c(f.access_policy)),
  };
}
function p() {
  return (p = e(() => {
    (t(), u(), l(), o());
  }))();
}
p();
export { f as getBrowserSiteActionsState };
//# sourceMappingURL=site-actions-state-a47d558a63e1.js.map
