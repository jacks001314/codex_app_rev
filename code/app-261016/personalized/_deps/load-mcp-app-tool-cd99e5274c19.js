const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./plugin-76eb6041ab15.js",
      "./app-initial-ad16eaadf81f.js",
      "./rolldown-runtime-2d059c5e81f4.js",
      "./app-shared-2feb3d4c6fcc.js",
      "./app-shared-295ec67e1c5d.css",
      "./app-initial-9d42883ac737.css",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $mt as t,
  ACt as n,
  LNt as r,
  OFt as i,
  PBt as a,
  ZSt as o,
  kFt as s,
  nCt as c,
  sct as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  BFn as u,
  CDr as d,
  EAn as f,
  FDr as p,
  Ffr as m,
  GFr as h,
  HFr as g,
  IFn as _,
  Ifr as v,
  Jbr as y,
  Mir as b,
  NAn as x,
  Nir as S,
  PFn as C,
  RFn as w,
  UFr as T,
  XFn as E,
  XFr as ee,
  Xxr as te,
  YFn as ne,
  YFr as D,
  Yxr as O,
  Zbr as k,
  lkr as A,
  oAn as j,
  qFn as M,
  sAn as N,
  skr as P,
  wAn as F,
} from "./app-initial-ad16eaadf81f.js";
import { a as I, n as L, r as R } from "./view-queries-1f0c8f907210.js";
import { a as z, o as B } from "./widget-99db50d86406.js";
import { i as V, n as H, r as U, t as W } from "./plugin-view-frame-b4914cf87602.js";
import { i as G, r as K } from "./view-frame-468bae9642da.js";
function q(e) {
  let t = (0, J.c)(19),
    n,
    r,
    i;
  if (
    (t[0] === e
      ? ((n = t[1]), (r = t[2]), (i = t[3]))
      : (({ snapshot: i, onRetry: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i)),
    c(w, i) !== `current`)
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
    ((J = a()), o(), C(), B(), G(), V(), H(), (Y = r()));
  }))();
}
async function re({ scope: e, signal: r, mcpAppId: i, tabId: a, onClose: o, onRetry: s }, c) {
  let l = await Z(e, c, r),
    f = L({ view: l, threadId: c.threadId });
  e.get(_, f) ?? (await t(u(e, f), r));
  let p = c.citation.value.target.arguments ?? {};
  r.throwIfAborted();
  let m = e.get(_, f);
  if (m == null) throw Error(`Source connection unavailable`);
  let h = { context: f, identity: m },
    g = await t(
      e.queryClient.fetchQuery({
        ...e.query.getOptions(I, { mcpAppId: i, view: l, threadId: c.threadId, toolArguments: p }),
        retry: !1,
        staleTime: 0,
      }),
      r,
    );
  if ((r.throwIfAborted(), e.get(w, h) !== `current`)) throw Error(`Source connection unavailable`);
  return (0, Q.jsx)(q, {
    snapshot: h,
    onRetry: s,
    panelTabId: a,
    onRequestClose: o,
    lifetime: `thread`,
    mcpAppId: i,
    view: l,
    sourceThreadId: c.threadId,
    toolArguments: p,
    toolResult: g,
    recipient: n(e, d, P(e, c.threadId)),
  });
}
async function ie(e, t) {
  try {
    let n = await Z(e, t),
      { getMcpExtensionContextMenuItems: r } = await i(
        async () => {
          let { getMcpExtensionContextMenuItems: e } = await import(`./plugin-76eb6041ab15.js`);
          return { getMcpExtensionContextMenuItems: e };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5]),
        import.meta.url,
      );
    return await r(e, {
      cwd: e.get(x) === n.hostId ? e.get(f) : null,
      onNavigate: (t) => S(e, t),
      source: M(n),
    });
  } catch {
    return [];
  }
}
async function Z(e, { hostId: t, citation: n }, r) {
  if ((r?.throwIfAborted(), N(e) !== !0)) throw Error(`Source viewer unavailable`);
  let { data: i } = await e.query.getOrFetch(k, t);
  r?.throwIfAborted();
  let { server: a, connectorId: o, linkId: s, pluginId: c } = n.origin.producer,
    l = i.find(({ name: e }) => e === a),
    u = n.value,
    d = u.target;
  if (l == null || (l.pluginId ?? null) !== c || (ee(a) && (o == null || s == null)))
    throw Error(`Source connection unavailable`);
  let f = o != null && s != null ? { kind: `target`, connectorId: o, targetId: s } : null,
    p = g({ server: a, toolScope: f, tools: O(l.tools) }),
    { tool: _ } = h({ server: a, toolScope: f, toolName: d.name, toolArguments: d.arguments, tools: p }),
    v = _ == null ? null : ne(_);
  if (_ == null || v == null) throw Error(`Source tool unavailable`);
  let y = {
    hostId: t,
    server: a,
    serverTools: p,
    tool: _,
    toolScope: f,
    resourceUri: v,
    pluginId: l.pluginId,
    icon: m(u) ?? m(l.serverInfo),
    title: u.title,
  };
  if (N(e, y) !== !0) throw Error(`Source viewer unavailable`);
  return y;
}
var Q;
function $() {
  return ($ = e(() => {
    (o(), l(), b(), C(), te(), D(), T(), E(), j(), R(), y(), p(), F(), A(), v(), X(), (Q = r()), s());
  }))();
}
$();
export { ie as getMcpAppToolCitationMenu, re as loadMcpAppToolCitation };
//# sourceMappingURL=load-mcp-app-tool-cd99e5274c19.js.map
