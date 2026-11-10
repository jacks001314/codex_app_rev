import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  EPt as t,
  HMt as n,
  Jbt as r,
  RLt as i,
  Rpt as a,
  TLt as o,
  gNt as s,
  pIt as c,
  pLt as l,
  rst as u,
  sft as d,
  xMt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  Kyt as p,
  Ymr as m,
  ehr as h,
  fMn as g,
  hMn as _,
  nMn as v,
  qyt as y,
  rMn as b,
  uMn as x,
} from "./app-initial-5851df3f6cb1.js";
async function S(
  e,
  { citation: t, conversationId: i, conversationOrigin: s, hostId: l, messageId: u, signal: d },
) {
  d.throwIfAborted();
  let f = s === `tpp` ? `TPP` : void 0,
    h = s === `tpp` ? r(i) : void 0,
    y = {
      hostId: l,
      server: `codex_apps`,
      threadId: h ?? null,
      connectorTarget: { connectorId: t.connector_id, targetId: t.link_id ?? null },
    },
    b = e.get(g, y);
  if (b?.accountId == null) throw Error(`Source connection unavailable`);
  let x = { "ChatGPT-Account-ID": b.accountId, "OAI-Product-Sku": `PINEAPPLE_TOOL` },
    { resource: S, identitySnapshot: T } = await _(e, y, b, async () => {
      let r = await m.safeGet(`/aip/connectors/{connector_id}`, {
          additionalHeaders: x,
          parameters: { path: { connector_id: t.connector_id }, query: { include_actions: !0 } },
          signal: d,
        }),
        s = r.actions.find(({ name: e }) => e === t.tool_name);
      if (s != null && !C(s)) throw Error(`Source tool unavailable`);
      let g = s == null ? void 0 : w(s);
      if (g == null) {
        let e = r.actions.filter((e) => {
            let { data: n } = c(o()).safeParse(e.meta?.[`openai/citationAliases`]);
            return n?.includes(t.tool_name);
          }),
          n = e.length === 1 ? e[0] : void 0;
        n != null && C(n) && ((s = n), (g = w(n)));
      }
      if (s == null || g == null) throw Error(`Source viewer unavailable`);
      d.throwIfAborted();
      let _ = `connectors://${t.connector_id}`,
        y = p({
          scope: e,
          accountId: b.accountId ?? void 0,
          appUri: _,
          chatGptConversationId: i,
          threadId: h,
          productSku: f,
          messageId: u,
          originMetadata: {
            "openai/action_name": s.name,
            "openai/connector_id": t.connector_id,
            "openai/link_id": t.link_id,
          },
          signal: d,
        }),
        S = {
          hostId: l,
          accountId: b.accountId ?? void 0,
          connectorId: t.connector_id,
          targetId: t.link_id ?? null,
          appUri: _,
          template: g,
          actionName: s.name,
          productSku: f ?? `PINEAPPLE_TOOL`,
        },
        [T, { widget: E }] = await Promise.all([
          y.handleRequest({ method: `tools/call`, params: { name: s.name, arguments: t.tool_arguments } }),
          a(e.query.fetch(v, S), d),
        ]);
      d.throwIfAborted();
      let D = n.parse(T);
      if (D.isError) throw Error(`Source viewer unavailable`);
      return {
        mcpAppHostAdapter: y,
        resourceQuery: S,
        request: {
          appUri: _,
          chatGptThreadId: i,
          sourceMessageId: u,
          threadId: h,
          productSku: f,
          template: g,
          toolName: s.name,
          toolInput: t.tool_arguments,
          viewParams: { forceFullHeight: !0, layout: { isSidebarResponsive: !0 } },
        },
        toolResult: D,
        widget: E,
      };
    });
  return { ...S, resourceIdentity: T };
}
function C(e) {
  let t = e.meta ?? {},
    { data: n } = T.safeParse(t.ui),
    r = n?.visibility ?? t[`ui/visibility`];
  return (
    e.is_enabled !== !1 &&
    e.is_read_only === !0 &&
    e.is_destructive === !1 &&
    (!Array.isArray(r) || r.includes(`app`))
  );
}
function w(e) {
  return d(e.meta, { ignoreInvalidValues: !0 }) ?? o().min(1).safeParse(e.templates?.[0]?.resource_uri).data;
}
var T;
function E() {
  return (E = e(() => {
    (s(), u(), t(), x(), b(), h(), y(), (T = l({ visibility: i().optional() })));
  }))();
}
async function D({ scope: e, signal: t, mcpAppId: n }, i, a) {
  let o = await S(e, { ...i, signal: t });
  return (0, O.jsx)(a, {
    conversationId: r(i.conversationId),
    hostId: i.hostId,
    hostedInThreadScrollLayout: !1,
    lifetime: `thread`,
    mcpAppId: n,
    result: { ...o, mcpAppHostAdapter: { ...o.mcpAppHostAdapter, viewerHeader: !0 } },
    fullSurface: !0,
  });
}
var O;
function k() {
  return (k = e(() => {
    (u(), E(), (O = f()));
  }))();
}
k();
export { D as loadChatGptSourceView };
//# sourceMappingURL=load-view-9bfb493f7113.js.map
