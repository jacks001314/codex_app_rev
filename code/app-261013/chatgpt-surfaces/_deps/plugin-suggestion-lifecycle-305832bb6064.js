import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, fSt as r, nSt as i, wot as a } from "./app-shared-bbfeca5e5737.js";
import {
  BZn as o,
  Byr as s,
  FAn as c,
  FFr as l,
  Jyr as u,
  LAn as d,
  NQn as f,
  PQn as p,
  SAn as m,
  SZn as h,
  Wyr as g,
  X_n as _,
  YT as v,
  Z_n as y,
  _Xn as b,
  cK as x,
  hOr as S,
  hXn as C,
  kZn as w,
  kqn as T,
  rK as E,
  sK as D,
  tNr as O,
  yjn as k,
  zFr as A,
} from "./app-initial-5851df3f6cb1.js";
function j(e) {
  let t = e.metadata.attribution_id;
  return (
    e.metadata.html_asset_pointer === `internal://plugin-management-suggestions` &&
    e.metadata.distribution_channel === `openai` &&
    t === `connector_openai_plugin_management` &&
    e.metadata.resolved_pineapple_uri === `connectors://${t}` &&
    e.toolResult.isError !== !0
  );
}
function M(e, t) {
  let n = s(e),
    r = n.findIndex((e) => g(e) === t);
  if (r < 0) return !0;
  let i = (e) => p(e) && e.metadata?.is_visually_hidden_from_conversation !== !0,
    a = n.findLast(i),
    o = n.slice(0, r + 1).findLast(i);
  if (a === o && n.findLast(p)?.metadata?.is_visually_hidden_from_conversation === !0) return !1;
  let c = T(n).get(t);
  return c == null ? a != null && o != null && a !== o : !c;
}
async function N(e, t) {
  let n = e.get(l)?.key,
    r = () => !1;
  if (!r()) return !1;
  if (e.get(w, t.conversationId) == null)
    try {
      await e.query.fetch(m, t.conversationId);
    } catch {
      return !1;
    }
  if (!r() || e.get(o, t.conversationId) != null) return !1;
  let i = e.get(w, t.conversationId),
    a = i?.[t.messageId]?.message,
    s = a == null ? null : C(a, void 0);
  if (i == null || s == null || !j(s)) return !1;
  let c = x
      .safeParse(s.toolResult.structuredContent)
      .data?.suggestions.find((e) => e.plugin_id === t.pluginId),
    u = _(e, t.conversationId, t.messageId, s.metadata),
    f = D.safeParse(u?.getState(e) ?? {});
  if (c == null || u == null || !f.success) return !1;
  if (f.data.connectedPluginIds?.includes(t.pluginId)) return !0;
  let p = { ...f.data, connectedPluginIds: [...(f.data.connectedPluginIds ?? []), t.pluginId] },
    h = await u.save(p, !0, { optimistic: !1 });
  if (!r() || !h.ok || u.getState(e) !== p) return !1;
  let g = e.get(l);
  return (
    g != null &&
      g.key === n &&
      d(e, t.conversationId) &&
      !e.get(F, { conversationId: t.conversationId, messageId: t.messageId }) &&
      e.set(P, { ...t, pluginName: c.display_name, locationKey: g.key }),
    !0
  );
}
var P, F;
function I() {
  return (I = e(() => {
    (n(),
      u(),
      v(),
      S(),
      O(),
      E(),
      A(),
      a(),
      c(),
      k(),
      f(),
      y(),
      b(),
      (P = r(t, () => null)),
      (F = i(t, (e, { get: t }) => {
        if (e == null) return !1;
        let { conversationId: n, messageId: r } = e,
          i = t(w, n);
        return i != null && M({ mapping: i, current_node: t(h, n) }, r);
      })));
  }))();
}
export { F as a, M as i, P as n, N as o, j as r, I as t };
//# sourceMappingURL=plugin-suggestion-lifecycle-305832bb6064.js.map
