import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Jbt as t, rst as n } from "./app-shared-bbfeca5e5737.js";
import {
  Ign as r,
  Ngn as i,
  Rgn as a,
  fI as o,
  mI as s,
  ugn as c,
  ygn as l,
} from "./app-initial-5851df3f6cb1.js";
import { n as u, t as d } from "./appgen-browser-site-aaf8d7b34c43.js";
function f(e, n, s, l) {
  let u = d(e(o, { conversationId: t(n.conversationId), hostId: l }), s);
  if (u == null) return null;
  let { data: f } = e(c, u.projectId);
  return {
    siteUrl: s,
    projectId: u.projectId,
    canManage: i(f),
    isOwnerOnly: f != null && a(r(f.access_policy)),
  };
}
function p() {
  return (p = e(() => {
    (n(), u(), l(), s());
  }))();
}
p();
export { f as getBrowserSiteActionsState };
//# sourceMappingURL=site-actions-state-1163c2dd6945.js.map
