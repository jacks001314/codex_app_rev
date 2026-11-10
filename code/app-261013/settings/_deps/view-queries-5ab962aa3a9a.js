import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  EPt as n,
  JIt as r,
  Jbt as i,
  Pxt as a,
  TLt as o,
  Zxt as s,
  rst as c,
  wot as l,
  xLt as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  Bkr as d,
  Byt as f,
  Cjr as p,
  Djr as m,
  Ejr as h,
  GMr as g,
  Hyt as _,
  Vkr as v,
  XMr as y,
  bjr as b,
  cMn as x,
  d4n as S,
  dMn as C,
  f4n as w,
  fMn as T,
  gMn as E,
  gjr as D,
  h4n as O,
  l4n as k,
  lMn as A,
  m4n as j,
  nFr as M,
  p4n as N,
  tNr as P,
  u4n as F,
  uMn as I,
  v8n as L,
  wjr as R,
  zyt as z,
} from "./app-initial-5851df3f6cb1.js";
import { a as B, r as V } from "./resource-5df84eaadd7b.js";
function H(e, t) {
  return z(e, e.query.getOptions(Y, t));
}
async function U(e, { view: t, threadId: n }) {
  try {
    let r = G({ view: t, threadId: n });
    e.get(T, r) ?? (await E(e, r));
    let i = n ?? (await S(e, t.hostId));
    if (n == null && i !== e.query.getData(j, t.hostId)) return;
    let a = e.query.getOptions(Y, { view: t, threadId: n });
    if (a.enabled === !1) return;
    await e.queryClient.fetchQuery(a);
  } catch {}
}
function W(e, t) {
  return !N(t) && v(e, t);
}
function G({ threadId: e, view: t }) {
  let n = R(t),
    r = p({ server: t.server, tool: t.tool });
  return {
    hostId: t.hostId,
    server: t.server,
    threadId: e == null ? null : i(e),
    connectorTarget:
      (n == null ? null : { connectorId: n.connectorId, targetId: n.linkId }) ??
      (r == null
        ? null
        : { connectorId: r, targetId: t.toolScope?.kind === `target` ? t.toolScope.targetId : null }),
  };
}
function K({ threadId: e, view: t }) {
  return JSON.stringify([
    t.hostId,
    t.resourceUri,
    t.server,
    e,
    p(t),
    R(t),
    t.toolScope?.kind === `target` ? t.toolScope.targetId : null,
  ]);
}
function q({ hostToolCallMetadata: e, mcpAppId: t, threadId: n, toolArguments: r, view: i }) {
  return JSON.stringify([t, K({ threadId: n, view: i }), i.tool.name, e, r]);
}
var J, Y, X;
function Z() {
  return (Z = e(() => {
    (a(),
      c(),
      n(),
      L(),
      I(),
      h(),
      P(),
      V(),
      b(),
      _(),
      x(),
      l(),
      d(),
      w(),
      (J = u(o(), r())),
      (Y = s(
        t,
        ({ threadId: e, view: t }, { scope: n, get: r }) => {
          let i = p(t),
            a = !m(t.server) || i != null,
            o = e == null && a ? r(j, t.hostId) : void 0,
            s = e ?? o?.data,
            c = { threadId: e, view: t },
            l = G({ threadId: e, view: t }),
            u = r(T, l),
            d = r(A, l);
          return f({
            scope: n,
            identityContext: l,
            identity: u,
            uri: t.resourceUri,
            target: R(t),
            version: r(M, t.hostId),
            pluginRevision: d,
            requestKey: [`mcp-extension-view-resource`, u, e, r(g), r(y), K(c)],
            read: async () => {
              if (o?.error != null) throw o.error;
              let r = await O(
                n,
                t.hostId,
                { server: t.server, uri: t.resourceUri, threadId: e, connectorId: i, target: R(t) },
                void 0,
                () => {
                  if (!C(n.get(T, l), u)) throw Error(`MCP resource identity changed before reading`);
                },
              );
              return (
                B(r, { hostId: t.hostId, server: t.server, uri: t.resourceUri }),
                { ...r, originCallId: null }
              );
            },
            enabled: a && (s != null || o?.error != null),
            retry: (e, t) => o?.error == null && W(e, t),
          });
        },
        { key: K },
      )),
      (X = s(
        t,
        (
          { hostToolCallMetadata: e, mcpAppId: t, toolArguments: n, threadId: r, view: i },
          { scope: a, get: o },
        ) => {
          let s = G({ threadId: r, view: i }),
            c = o(T, s),
            l = i.tool.annotations?.readOnlyHint === !0 || i.tool.annotations?.idempotentHint === !0;
          return {
            queryKey: [`mcp-extension-view-tool-result`, t, c, i.hostId, i.server, r, i.tool.name, e, n],
            queryFn: async () => {
              if (c == null || !C(a.get(T, s), c))
                throw Error(`MCP app identity changed before calling its tool`);
              let t = m(i.server) ? D(i.tool) : null,
                o = e,
                u = n,
                d = J.safeParse(e ?? {});
              if (
                d.success &&
                d.data._codex_apps === void 0 &&
                c.kind === `connector` &&
                t?.connectorId === c.connectorId &&
                t.targetId === c.targetId
              ) {
                let e = J.parse(i.tool._meta?._codex_apps);
                if (((o = { ...d.data, _codex_apps: e }), e.requires_explicit_link_id === !0)) {
                  if (n.link_id !== void 0 && n.link_id !== c.targetId)
                    throw Error(`MCP tool account does not match the selected app`);
                  u = { ...n, link_id: c.targetId };
                }
              }
              let f = await F(a, i.hostId, i.server, i.tool.name, u, {
                hostToolCallMetadata: o,
                requestOptions: k,
                threadId: r,
                retryOnTransportClosed: l,
                beforeRequest: () => {
                  if (!C(a.get(T, s), c)) throw Error(`MCP app identity changed before calling its tool`);
                },
              });
              if (!C(a.get(T, s), c)) throw Error(`MCP app identity changed while calling its tool`);
              return f;
            },
            enabled: c != null,
            gcTime: 0,
            refetchOnMount: !1,
            refetchOnReconnect: !1,
            refetchOnWindowFocus: !1,
            retry: l ? W : !1,
            staleTime: 1 / 0,
          };
        },
        { key: q },
      )));
  }))();
}
export { X as a, Y as i, G as n, U as o, Z as r, H as t };
//# sourceMappingURL=view-queries-5ab962aa3a9a.js.map
