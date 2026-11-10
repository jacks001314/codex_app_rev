import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Dat as n, Qst as r, ZSt as i, jat as a, yCt as o } from "./app-shared-2feb3d4c6fcc.js";
import {
  $Bn as s,
  B1n as c,
  GIn as l,
  Gzn as u,
  Kbn as d,
  Kzn as f,
  VPn as p,
  WNn as m,
  Y1n as h,
  Z1n as g,
  eLn as _,
  fVn as v,
  nPt as y,
  o0n as b,
  oun as x,
  rPn as S,
  tPt as C,
  vNt as w,
  yNt as T,
} from "./app-initial-ad16eaadf81f.js";
import {
  Cv as E,
  Dv as D,
  Sv as O,
  by as k,
  hy as A,
  my as j,
  vy as M,
  yy as N,
} from "./app-primary-3e00728c2a4c.js";
function P({ scope: e, allowedModelSlug: t, conversationId: r, isTemporaryChat: i }) {
  return async (a) => {
    let o = a.action_v2;
    if (o.action_enum !== `regenerate` || (t != null && o.model_slug !== t)) return !1;
    let s = e.get(h, r);
    if (s == null) return !1;
    let c = e.get(A, { conversationId: r, messageId: s }),
      l = e.get(j, r);
    if (c == null) return !1;
    let u = n(l, o.model_slug),
      d = {
        ...M(c.message, l, { slug: o.model_slug, thinkingEffort: null, versionId: u }),
        slug: o.model_slug,
        versionId: u,
      };
    return (
      o.update_model_picker && _(e, r, { slug: o.model_slug, thinkingEffort: null, versionId: u }),
      await k(e, {
        conversationId: r,
        isTemporaryChat: i,
        messageId: s,
        retry: { model: d, source: `beacon` },
      }),
      !0
    );
  };
}
function F() {
  return (F = e(() => {
    (l(), a(), p(), N());
  }))();
}
function I({ scope: e, canShare: t, conversationId: n }) {
  if (t && n != null)
    return (t) => {
      let r = t.action_v2;
      return r.action_enum !== `share_conversation` ||
        r.conversation_id !== n ||
        r.current_node_id.trim().length === 0
        ? !1
        : T(e, n, r.title, null, r.current_node_id, C.CHATGPT_SHARE_FLOW_SOURCE_BEACON);
    };
}
function L(e) {
  return e.some(
    (e) =>
      e.action_v2.action_enum === `share_conversation` ||
      (e.action_v2.action_enum === `dropdown` &&
        e.action_v2.items.some((e) => e.action_v2.action_enum === `share_conversation`)),
  );
}
function R({ action: e, getActionOverride: t, shareConversationEligible: n, shareConversationOverride: r }) {
  return e.action_v2.action_enum === `share_conversation` ? (n == null ? O : n && r != null ? r : E) : t?.(e);
}
var z;
function B() {
  return (B = e(() => {
    (y(),
      i(),
      D(),
      t(),
      S(),
      w(),
      f(),
      s(),
      p(),
      x(),
      (z = o(r, (e, { get: t }) => {
        let n = t(c, e),
          r = t(g, e),
          i = t(m, n),
          a = i.data;
        if (!r && n != null && a == null && i.isLoading) return;
        let o = t(b, e) ?? (a == null ? null : d(a)),
          s = t(u, o),
          l = s.data;
        if (!(o != null && l == null && s.isLoading)) return (r || a != null) && (o == null || v(l));
      })));
  }))();
}
export { B as a, L as i, I as n, P as o, R as r, F as s, z as t };
//# sourceMappingURL=share-conversation-action-61d6c8ca1283.js.map
