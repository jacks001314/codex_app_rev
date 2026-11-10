import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $st as t, Qst as n, ZSt as r, kCt as i, yCt as a } from "./app-shared-2feb3d4c6fcc.js";
import {
  $cr as o,
  Aq as s,
  Eq as c,
  I$n as l,
  JCr as u,
  P$n as d,
  QCr as f,
  RMr as p,
  Sbn as m,
  VPn as h,
  WCr as g,
  WNn as _,
  Y1n as v,
  Ycr as y,
  aPn as b,
  jq as x,
  kE as S,
  n0n as C,
  nZn as w,
  o2n as T,
  p0n as E,
  rPn as D,
  s2n as O,
  wLr as k,
  xbn as A,
} from "./app-initial-ad16eaadf81f.js";
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
  let n = g(e),
    r = n.findIndex((e) => u(e) === t);
  if (r < 0) return !0;
  let i = (e) => O(e) && e.metadata?.is_visually_hidden_from_conversation !== !0,
    a = n.findLast(i),
    o = n.slice(0, r + 1).findLast(i);
  if (a === o && n.findLast(O)?.metadata?.is_visually_hidden_from_conversation === !0) return !1;
  let s = w(n).get(t);
  return s == null ? a != null && o != null && a !== o : !s;
}
async function N(e, t) {
  let n = e.get(y)?.key,
    r = () => !1;
  if (!r()) return !1;
  if (e.get(C, t.conversationId) == null)
    try {
      await e.query.fetch(_, t.conversationId);
    } catch {
      return !1;
    }
  if (!r() || e.get(E, t.conversationId) != null) return !1;
  let i = e.get(C, t.conversationId),
    a = i?.[t.messageId]?.message,
    o = a == null ? null : d(a, void 0);
  if (i == null || o == null || !j(o)) return !1;
  let c = x
      .safeParse(o.toolResult.structuredContent)
      .data?.suggestions.find((e) => e.plugin_id === t.pluginId),
    l = A(e, t.conversationId, t.messageId, o.metadata),
    u = s.safeParse(l?.getState(e) ?? {});
  if (c == null || l == null || !u.success) return !1;
  if (u.data.connectedPluginIds?.includes(t.pluginId)) return !0;
  let f = { ...u.data, connectedPluginIds: [...(u.data.connectedPluginIds ?? []), t.pluginId] },
    p = await l.save(f, !0, { optimistic: !1 });
  if (!r() || !p.ok || l.getState(e) !== f) return !1;
  let m = e.get(y);
  return (
    m != null &&
      m.key === n &&
      b(e, t.conversationId) &&
      !e.get(F, { conversationId: t.conversationId, messageId: t.messageId }) &&
      e.set(P, { ...t, pluginName: c.display_name, locationKey: m.key }),
    !0
  );
}
var P, F;
function I() {
  return (I = e(() => {
    (r(),
      f(),
      S(),
      p(),
      k(),
      c(),
      o(),
      t(),
      D(),
      h(),
      T(),
      m(),
      l(),
      (P = i(n, () => null)),
      (F = a(n, (e, { get: t }) => {
        if (e == null) return !1;
        let { conversationId: n, messageId: r } = e,
          i = t(C, n);
        return i != null && M({ mapping: i, current_node: t(v, n) }, r);
      })));
  }))();
}
export { F as a, M as i, P as n, N as o, j as r, I as t };
//# sourceMappingURL=plugin-suggestion-lifecycle-b8500eb519c3.js.map
