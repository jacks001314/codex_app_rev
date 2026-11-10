import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Brt as t, Irt as n } from "./app-shared-bbfeca5e5737.js";
import {
  GVn as r,
  NQn as i,
  PQn as a,
  QDr as o,
  XDr as s,
  Zb as c,
  ox as l,
  pZn as u,
  qVn as d,
  yjn as f,
} from "./app-initial-5851df3f6cb1.js";
function p(e, t) {
  try {
    o(e, c, {
      ...t,
      conversationId: t.conversationId == null ? void 0 : (e.get(u, t.conversationId) ?? void 0),
      turnOrdinal: m(e, t.conversationId, t.assistantMessageId ?? t.messageId),
    });
  } catch {}
}
function m(e, t, i) {
  if (t == null || i == null) return;
  let o = 0,
    s = !1;
  for (let c of e.get(r, t) ?? [])
    if ((a(c) && (s = !1), c.author.role === `assistant` && !s && ((o += 1), (s = !0)), c.id === i))
      return o > 0 ? n(o) : void 0;
}
function h() {
  return (h = e(() => {
    (l(), t(), s(), d(), f(), i());
  }))();
}
export { h as n, p as r, m as t };
//# sourceMappingURL=engagement-4e2b4c5a0bbe.js.map
