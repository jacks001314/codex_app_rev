import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $mt as t,
  HFt as n,
  LNt as r,
  MPt as i,
  VRt as a,
  ezt as o,
  iPt as s,
  kLt as c,
  kRt as l,
  sct as u,
  uSt as d,
  xpt as f,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  DFn as p,
  EFn as m,
  IFn as h,
  PFn as g,
  iRr as _,
  oxt as v,
  sxt as y,
  tyr as b,
  zFn as x,
} from "./app-initial-ad16eaadf81f.js";
async function S(
  e,
  { citation: n, conversationId: r, conversationOrigin: i, hostId: o, messageId: l, signal: u },
) {
  u.throwIfAborted();
  let f = i === `tpp` ? `TPP` : void 0,
    p = i === `tpp` ? d(r) : void 0,
    g = {
      hostId: o,
      server: `codex_apps`,
      threadId: p ?? null,
      connectorTarget: { connectorId: n.connector_id, targetId: n.link_id ?? null },
    },
    y = e.get(h, g);
  if (y?.accountId == null) throw Error(`Source connection unavailable`);
  let b = { "ChatGPT-Account-ID": y.accountId, "OAI-Product-Sku": `PINEAPPLE_TOOL` },
    { resource: S, identitySnapshot: T } = await x(e, g, y, async () => {
      let i = await _.safeGet(`/aip/connectors/{connector_id}`, {
          additionalHeaders: b,
          parameters: { path: { connector_id: n.connector_id }, query: { include_actions: !0 } },
          signal: u,
        }),
        d = i.actions.find(({ name: e }) => e === n.tool_name);
      if (d != null && !C(d)) throw Error(`Source tool unavailable`);
      let h = d == null ? void 0 : w(d);
      if (h == null) {
        let e = i.actions.filter((e) => {
            let { data: t } = c(a()).safeParse(e.meta?.[`openai/citationAliases`]);
            return t?.includes(n.tool_name);
          }),
          t = e.length === 1 ? e[0] : void 0;
        t != null && C(t) && ((d = t), (h = w(t)));
      }
      if (d == null || h == null) throw Error(`Source viewer unavailable`);
      u.throwIfAborted();
      let g = `connectors://${n.connector_id}`,
        x = v({
          scope: e,
          accountId: y.accountId ?? void 0,
          appUri: g,
          chatGptConversationId: r,
          threadId: p,
          productSku: f,
          messageId: l,
          originMetadata: {
            "openai/action_name": d.name,
            "openai/connector_id": n.connector_id,
            "openai/link_id": n.link_id,
          },
          signal: u,
        }),
        S = {
          hostId: o,
          accountId: y.accountId ?? void 0,
          connectorId: n.connector_id,
          targetId: n.link_id ?? null,
          appUri: g,
          template: h,
          actionName: d.name,
          productSku: f ?? `PINEAPPLE_TOOL`,
        },
        [T, { widget: E }] = await Promise.all([
          x.handleRequest({ method: `tools/call`, params: { name: d.name, arguments: n.tool_arguments } }),
          t(e.query.fetch(m, S), u),
        ]);
      u.throwIfAborted();
      let D = s.parse(T);
      if (D.isError) throw Error(`Source viewer unavailable`);
      return {
        mcpAppHostAdapter: x,
        resourceQuery: S,
        request: {
          appUri: g,
          chatGptThreadId: r,
          sourceMessageId: l,
          threadId: p,
          productSku: f,
          template: h,
          toolName: d.name,
          toolInput: n.tool_arguments,
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
  return f(e.meta, { ignoreInvalidValues: !0 }) ?? a().min(1).safeParse(e.templates?.[0]?.resource_uri).data;
}
var T;
function E() {
  return (E = e(() => {
    (i(), u(), n(), g(), p(), b(), y(), (T = l({ visibility: o().optional() })));
  }))();
}
async function D({ scope: e, signal: t, mcpAppId: n }, r, i) {
  let a = await S(e, { ...r, signal: t });
  return (0, O.jsx)(i, {
    conversationId: d(r.conversationId),
    hostId: r.hostId,
    hostedInThreadScrollLayout: !1,
    lifetime: `thread`,
    mcpAppId: n,
    result: { ...a, mcpAppHostAdapter: { ...a.mcpAppHostAdapter, viewerHeader: !0 } },
    fullSurface: !0,
  });
}
var O;
function k() {
  return (k = e(() => {
    (u(), E(), (O = r()));
  }))();
}
k();
export { D as loadChatGptSourceView };
//# sourceMappingURL=load-view-c5fe81d0a2fa.js.map
