import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Hrt as t,
  Irt as n,
  JSt as r,
  Jht as i,
  Kht as a,
  Mot as o,
  Not as s,
  O3t as c,
  Rht as l,
  USt as u,
  _gt as d,
  _ht as f,
  a3t as p,
  egt as m,
  i6t as h,
  o3t as g,
  oCt as _,
  oht as v,
  sCt as y,
} from "./app-initial-f094ef01c64d.js";
import { il as b, og as x, rl as S, sg as C } from "./app-primary-4c40d73a1074.js";
import { a as w, i as T, n as E, r as D, t as O } from "./response-928d7dce6579.js";
function k({ scope: e, allowedModelSlug: n, conversationId: r, isTemporaryChat: i }) {
  return async (o) => {
    let s = o.action_v2;
    if (s.action_enum !== `regenerate` || (n != null && s.model_slug !== n)) return !1;
    let c = e.get(a, r);
    if (c == null) return !1;
    let l = e.get(E, { conversationId: r, messageId: c }),
      u = e.get(O, r);
    if (l == null) return !1;
    let d = _(u, s.model_slug),
      f = {
        ...D(l.message, u, { slug: s.model_slug, thinkingEffort: null, versionId: d }),
        slug: s.model_slug,
        versionId: d,
      };
    return (
      s.update_model_picker && t(e, r, { slug: s.model_slug, thinkingEffort: null, versionId: d }),
      await w(e, { conversationId: r, isTemporaryChat: i, messageId: c, retry: { model: f } }),
      !0
    );
  };
}
var A = e(() => {
  (n(), y(), d(), T());
});
function j({ scope: e, canShare: t, conversationId: n }) {
  if (!(!t || n == null))
    return (t) => {
      let r = t.action_v2;
      return r.action_enum !== `share_conversation` ||
        r.conversation_id !== n ||
        r.current_node_id.trim().length === 0
        ? !1
        : b(e, n, r.title, null, r.current_node_id);
    };
}
function M(e) {
  return e.some(
    (e) =>
      e.action_v2.action_enum === `share_conversation` ||
      (e.action_v2.action_enum === `dropdown` &&
        e.action_v2.items.some((e) => e.action_v2.action_enum === `share_conversation`)),
  );
}
function N({
  action: e,
  getActionOverride: t,
  shareConversationEligible: n,
  shareConversationOverride: r,
}) {
  return e.action_v2.action_enum === `share_conversation` ? (n && r != null ? r : null) : t?.(e);
}
var P,
  F = e(() => {
    (c(),
      g(),
      f(),
      S(),
      C(),
      u(),
      d(),
      s(),
      (P = h(p, (e, { get: t }) => {
        let n = t(l, e),
          a = t(i, e),
          s = t(v, n).data,
          c = t(m, e) ?? (s == null ? null : o(s)),
          u = t(x, c).data;
        return (a || s != null) && (c == null || r(u));
      })));
  });
export { F as a, M as i, j as n, k as o, N as r, A as s, P as t };
//# sourceMappingURL=share-conversation-action-d44b236b4916.js.map
