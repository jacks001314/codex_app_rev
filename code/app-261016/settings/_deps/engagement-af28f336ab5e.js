import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Qit as t, nat as n } from "./app-shared-2feb3d4c6fcc.js";
import {
  B1n as r,
  Cx as i,
  Mx as a,
  VPn as o,
  cGn as s,
  o2n as c,
  s2n as l,
  uGn as u,
  xMr as d,
  yMr as f,
} from "./app-initial-ad16eaadf81f.js";
function p(e, t) {
  try {
    d(e, i, {
      ...t,
      conversationId: t.conversationId == null ? void 0 : (e.get(r, t.conversationId) ?? void 0),
      turnOrdinal: m(e, t.conversationId, t.assistantMessageId ?? t.messageId),
    });
  } catch {}
}
function m(e, n, r) {
  if (n == null || r == null) return;
  let i = 0,
    a = !1;
  for (let o of e.get(s, n) ?? [])
    if ((l(o) && (a = !1), o.author.role === `assistant` && !a && ((i += 1), (a = !0)), o.id === r))
      return i > 0 ? t(i) : void 0;
}
function h() {
  return (h = e(() => {
    (a(), n(), f(), u(), o(), c());
  }))();
}
export { h as n, p as r, m as t };
//# sourceMappingURL=engagement-af28f336ab5e.js.map
