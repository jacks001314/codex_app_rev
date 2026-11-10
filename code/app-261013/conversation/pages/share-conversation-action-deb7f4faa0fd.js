import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, mit as r, nSt as i, uit as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import {
  ANn as s,
  Con as c,
  ELn as l,
  FAn as u,
  NZn as d,
  SAn as f,
  SZn as p,
  XIt as m,
  YIt as h,
  _In as g,
  lIt as _,
  pZn as v,
  son as y,
  uIt as b,
  vIn as x,
  wZn as S,
  xNn as C,
  yjn as w,
  zLn as T,
} from "./app-initial-5851df3f6cb1.js";
import {
  Kv as E,
  Qv as D,
  Xv as O,
  Zv as k,
  av as A,
  ev as j,
  qv as M,
  tv as N,
} from "./app-primary-fe8a450b3b04.js";
function P({ scope: e, allowedModelSlug: t, conversationId: n, isTemporaryChat: r }) {
  return async (i) => {
    let o = i.action_v2;
    if (o.action_enum !== `regenerate` || (t != null && o.model_slug !== t)) return !1;
    let c = e.get(p, n);
    if (c == null) return !1;
    let l = e.get(M, { conversationId: n, messageId: c }),
      u = e.get(E, n);
    if (l == null) return !1;
    let d = a(u, o.model_slug),
      f = {
        ...O(l.message, u, { slug: o.model_slug, thinkingEffort: null, versionId: d }),
        slug: o.model_slug,
        versionId: d,
      };
    return (
      o.update_model_picker && s(e, n, { slug: o.model_slug, thinkingEffort: null, versionId: d }),
      await D(e, {
        conversationId: n,
        isTemporaryChat: r,
        messageId: c,
        retry: { model: f, source: `beacon` },
      }),
      !0
    );
  };
}
function F() {
  return (F = e(() => {
    (C(), r(), w(), k());
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
        : b(e, n, r.title, null, r.current_node_id, h.CHATGPT_SHARE_FLOW_SOURCE_BEACON);
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
  return e.action_v2.action_enum === `share_conversation` ? (n == null ? j : n && r != null ? r : N) : t?.(e);
}
var z;
function B() {
  return (B = e(() => {
    (m(),
      n(),
      A(),
      o(),
      u(),
      _(),
      x(),
      l(),
      w(),
      y(),
      (z = i(t, (e, { get: t }) => {
        let n = t(v, e),
          r = t(S, e),
          i = t(f, n),
          a = i.data;
        if (!r && n != null && a == null && i.isLoading) return;
        let o = t(d, e) ?? (a == null ? null : c(a)),
          s = t(g, o),
          l = s.data;
        if (!(o != null && l == null && s.isLoading)) return (r || a != null) && (o == null || T(l));
      })));
  }))();
}
export { B as a, L as i, I as n, P as o, R as r, F as s, z as t };
//# sourceMappingURL=share-conversation-action-deb7f4faa0fd.js.map
