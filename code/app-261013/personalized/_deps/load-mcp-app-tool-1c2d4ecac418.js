const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./plugin-2363059c389d.js",
      "./app-initial-5851df3f6cb1.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-bbfeca5e5737.js",
      "./app-shared-dc7535e633d7.css",
      "./app-initial-e7c27dd40beb.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Pxt as t,
  Rpt as n,
  fPt as r,
  pPt as i,
  pSt as a,
  rst as o,
  vzt as s,
  xMt as c,
  zxt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  CMn as u,
  Djr as d,
  EMn as f,
  Ejr as p,
  Ggr as m,
  Gwr as h,
  J_r as g,
  Jgr as _,
  Kcr as v,
  LEn as y,
  REn as b,
  Sjr as ee,
  TMn as x,
  bjr as S,
  fMn as C,
  gMn as w,
  lIr as T,
  mMn as E,
  q_r as te,
  qcr as ne,
  qwr as D,
  rDn as O,
  sCr as k,
  tDn as A,
  uDn as j,
  uIr as M,
  uMn as N,
  yCr as P,
  yjr as F,
} from "./app-initial-5851df3f6cb1.js";
import { a as I, n as L, r as R } from "./view-queries-5ab962aa3a9a.js";
import { a as z, o as B } from "./widget-ea192a210472.js";
import { i as V, n as H, r as U, t as W } from "./plugin-view-frame-aa4c893f33ff.js";
import { i as G, r as K } from "./view-frame-c8d02fef58da.js";
function q(e) {
  let t = (0, J.c)(19),
    n,
    r,
    i;
  if (
    (t[0] === e
      ? ((n = t[1]), (r = t[2]), (i = t[3]))
      : (({ snapshot: i, onRetry: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i)),
    l(E, i) !== `current`)
  ) {
    let e;
    return (
      t[4] === n ? (e = t[5]) : ((e = (0, Y.jsx)(U, { isLoading: !1, onRetry: n })), (t[4] = n), (t[5] = e)),
      e
    );
  }
  if (r.toolResult?.isError) {
    let e, i;
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = { data: null, error: Error(`Source viewer unavailable`), isLoading: !1 }),
        (i = [`inline`]),
        (t[6] = e),
        (t[7] = i))
      : ((e = t[6]), (i = t[7]));
    let a;
    t[8] !== r.sourceThreadId || t[9] !== r.toolResult || t[10] !== r.view
      ? ((a = (e) =>
          (0, Y.jsx)(K, {
            view: r.view,
            threadId: r.sourceThreadId,
            result: r.toolResult,
            fullSurface: !0,
            children: e,
          })),
        (t[8] = r.sourceThreadId),
        (t[9] = r.toolResult),
        (t[10] = r.view),
        (t[11] = a))
      : (a = t[11]);
    let o;
    return (
      t[12] !== n || t[13] !== r.mcpAppId || t[14] !== r.view.title || t[15] !== a
        ? ((o = (0, Y.jsx)(z, {
            resource: e,
            hostDisplayModes: i,
            fullSurface: !0,
            mcpAppId: r.mcpAppId,
            pluginName: r.view.title,
            presentation: `inline`,
            onRetryResourceRead: n,
            renderErrorActions: a,
          })),
          (t[12] = n),
          (t[13] = r.mcpAppId),
          (t[14] = r.view.title),
          (t[15] = a),
          (t[16] = o))
        : (o = t[16]),
      o
    );
  }
  let a;
  return (t[17] === r ? (a = t[18]) : ((a = (0, Y.jsx)(W, { ...r })), (t[17] = r), (t[18] = a)), a);
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = s()), t(), N(), B(), G(), V(), H(), (Y = c()));
  }))();
}
async function re({ scope: e, signal: t, mcpAppId: r, tabId: i, onClose: o, onRetry: s }, c) {
  let l = await Z(e, c, t),
    u = L({ view: l, threadId: c.threadId });
  e.get(C, u) ?? (await n(w(e, u), t));
  let d = c.citation.value.target.arguments ?? {};
  t.throwIfAborted();
  let f = e.get(C, u);
  if (f == null) throw Error(`Source connection unavailable`);
  let p = { context: u, identity: f },
    m = await n(
      e.queryClient.fetchQuery({
        ...e.query.getOptions(I, { mcpAppId: r, view: l, threadId: c.threadId, toolArguments: d }),
        retry: !1,
        staleTime: 0,
      }),
      t,
    );
  if ((t.throwIfAborted(), e.get(E, p) !== `current`)) throw Error(`Source connection unavailable`);
  return (0, Q.jsx)(q, {
    snapshot: p,
    onRetry: s,
    panelTabId: i,
    onRequestClose: o,
    lifetime: `thread`,
    mcpAppId: r,
    view: l,
    sourceThreadId: c.threadId,
    toolArguments: d,
    toolResult: m,
    recipient: a(e, k, h(e, c.threadId)),
  });
}
async function ie(e, t) {
  try {
    let n = await Z(e, t),
      { getMcpExtensionContextMenuItems: i } = await r(
        async () => {
          let { getMcpExtensionContextMenuItems: e } = await import(`./plugin-2363059c389d.js`);
          return { getMcpExtensionContextMenuItems: e };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5]),
        import.meta.url,
      );
    return await i(e, {
      cwd: e.get(j) === n.hostId ? e.get(O) : null,
      onNavigate: (t) => M(e, t),
      source: u(n),
    });
  } catch {
    return [];
  }
}
async function Z(e, { hostId: t, citation: n }, r) {
  if ((r?.throwIfAborted(), b(e) !== !0)) throw Error(`Source viewer unavailable`);
  let { data: i } = await e.query.getOrFetch(_, t);
  r?.throwIfAborted();
  let { server: a, connectorId: o, linkId: s, pluginId: c } = n.origin.producer,
    l = i.find(({ name: e }) => e === a),
    u = n.value,
    f = u.target;
  if (l == null || (l.pluginId ?? null) !== c || (d(a) && (o == null || s == null)))
    throw Error(`Source connection unavailable`);
  let p = o != null && s != null ? { kind: `target`, connectorId: o, targetId: s } : null,
    m = F({ server: a, toolScope: p, tools: te(l.tools) }),
    { tool: h } = ee({ server: a, toolScope: p, toolName: f.name, toolArguments: f.arguments, tools: m }),
    g = h == null ? null : x(h);
  if (h == null || g == null) throw Error(`Source tool unavailable`);
  let y = {
    hostId: t,
    server: a,
    serverTools: m,
    tool: h,
    toolScope: p,
    resourceUri: g,
    pluginId: l.pluginId,
    icon: v(u) ?? v(l.serverInfo),
    title: u.title,
  };
  if (b(e, y) !== !0) throw Error(`Source viewer unavailable`);
  return y;
}
var Q;
function $() {
  return ($ = e(() => {
    (t(), o(), T(), N(), g(), p(), S(), f(), y(), R(), m(), P(), A(), D(), ne(), X(), (Q = c()), i());
  }))();
}
$();
export { ie as getMcpAppToolCitationMenu, re as loadMcpAppToolCitation };
//# sourceMappingURL=load-mcp-app-tool-1c2d4ecac418.js.map
