import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ixt as t,
  Jbt as n,
  Pxt as r,
  Rnt as i,
  byt as a,
  cyt as o,
  dft as s,
  iot as c,
  n7 as l,
  pSt as u,
  rSt as d,
  rst as f,
  vzt as p,
  xMt as m,
  yzt as h,
  zxt as g,
} from "./app-shared-bbfeca5e5737.js";
import {
  CMn as _,
  Cwr as v,
  Dft as y,
  EMn as b,
  Eft as x,
  FFr as ee,
  GVt as S,
  Gwr as C,
  IEn as w,
  LEn as T,
  Oft as te,
  QDr as ne,
  SG as E,
  Swr as D,
  TEn as O,
  UVt as k,
  WEn as re,
  XDr as A,
  YEn as j,
  bft as ie,
  dxn as M,
  gft as N,
  gwr as P,
  oFr as F,
  qwr as I,
  sCr as L,
  uxn as ae,
  wEn as oe,
  xG as R,
  yCr as z,
  zFr as se,
} from "./app-initial-5851df3f6cb1.js";
import { i as ce, t as le } from "./chatgpt-ecosystem-widget-86361a1e1747.js";
import { d as ue, f as B } from "./widget-ea192a210472.js";
import { i as V, n as de, r as H, t as U } from "./plugin-view-frame-aa4c893f33ff.js";
import { n as fe, t as pe } from "./view-frame-c8d02fef58da.js";
import { n as me, t as he } from "./global-view-b02f3e8505fd.js";
function ge(e) {
  let t = (0, W.c)(15),
    {
      recipient: n,
      panelTabId: r,
      onRequestClose: i,
      className: a,
      filePath: o,
      fileViewer: c,
      mcpAppId: l,
      lifetime: u,
    } = e,
    d;
  t[0] === l ? (d = t[1]) : ((d = () => l ?? s()), (t[0] = l), (t[1] = d));
  let [f] = (0, G.useState)(d),
    p = l ?? f,
    m = `codex-resource://${p}`,
    h;
  t[2] !== o || t[3] !== c || t[4] !== m
    ? ((h = k({ fileViewer: c, hostId: c.hostId, path: o, resourceUri: m })),
      (t[2] = o),
      (t[3] = c),
      (t[4] = m),
      (t[5] = h))
    : (h = t[5]);
  let g = h,
    _;
  return (
    t[6] !== a ||
    t[7] !== c ||
    t[8] !== g ||
    t[9] !== u ||
    t[10] !== p ||
    t[11] !== i ||
    t[12] !== r ||
    t[13] !== n
      ? ((_ = (0, K.jsx)(
          pe,
          {
            className: a,
            panelTabId: r,
            onRequestClose: i,
            recipient: n,
            lifetime: u,
            ...g,
            source: `file`,
            readHostResource: g.readHostResource,
            mcpAppId: p,
            view: c,
          },
          p,
        )),
        (t[6] = a),
        (t[7] = c),
        (t[8] = g),
        (t[9] = u),
        (t[10] = p),
        (t[11] = i),
        (t[12] = r),
        (t[13] = n),
        (t[14] = _))
      : (_ = t[14]),
    _
  );
}
var W, G, K;
function q() {
  return (q = e(() => {
    ((W = p()), f(), (G = h()), S(), fe(), (K = m()));
  }))();
}
var _e;
function ve() {
  return (ve = e(() => {
    (r(),
      v(),
      y(),
      (_e = d(
        P,
        (e) => !1,
        (e, { get: t, set: n }) => {
          let r = t(x, e).data?.accessSignal,
            i = () => n(r?.aborted === !0);
          return (
            i(),
            r?.addEventListener(`abort`, i, { once: !0 }),
            () => r?.removeEventListener(`abort`, i)
          );
        },
        { autoDispose: !0 },
      )));
  }))();
}
function ye(e) {
  let r = (0, xe.c)(46),
    { view: i, mcpAppId: s, thread: c, tabId: u, recovery: d, deepLink: f, onRequestClose: p } = e,
    m = t(L),
    h = t(P),
    _;
  r[0] !== c.id || r[1] !== c.kind
    ? ((_ = c.kind === `chatgpt` ? n(`chatgpt:${c.id}`) : c.id), (r[0] = c.id), (r[1] = c.kind), (r[2] = _))
    : (_ = r[2]);
  let v = _,
    y;
  r[3] !== s || r[4] !== d || r[5] !== c || r[6] !== i
    ? ((y = { mcpAppId: s, view: i, thread: c, recovery: d }),
      (r[3] = s),
      (r[4] = d),
      (r[5] = c),
      (r[6] = i),
      (r[7] = y))
    : (y = r[7]);
  let b = y,
    S = g(w, i),
    C = g(_e, b),
    { data: T, isFetching: E } = g(x, b);
  if (T == null || S || C) {
    let e = !S && E,
      t;
    r[8] !== b || r[9] !== m || r[10] !== i
      ? ((t = () => {
          m.get(w, i) || te(m, b).catch(be);
        }),
        (r[8] = b),
        (r[9] = m),
        (r[10] = i),
        (r[11] = t))
      : (t = r[11]);
    let n;
    return (
      r[12] !== e || r[13] !== t
        ? ((n = (0, J.jsx)(H, { isLoading: e, onRetry: t })), (r[12] = e), (r[13] = t), (r[14] = n))
        : (n = r[14]),
      n
    );
  }
  let D;
  r[15] !== T.accessSignal ||
  r[16] !== T.mcpAppHostAdapter ||
  r[17] !== h ||
  r[18] !== m ||
  r[19] !== u ||
  r[20] !== i
    ? ((D = (e) => {
        let t = a(e);
        if (t?.pluginId !== `self` || t.entrypoint !== `global`) return !1;
        let n = m.get(ee);
        if (T.accessSignal.aborted || (n != null && n.pathname !== h.value.pathname)) return !0;
        (T.mcpAppHostAdapter.assertActive?.(),
          ne(m, l, { ...oe(m, i), feature: `deep_link`, action: `requested` }));
        let r = ae(h, u),
          s = m
            .get(re, { hostId: i.hostId, productContext: i.productContext })
            .find(
              (e) =>
                e.accountId === i.accountId &&
                e.pluginId === i.pluginId &&
                e.appId === i.appId &&
                e.toolName === t.toolName,
            );
        return (
          r != null &&
            s != null &&
            ie(h, s, {
              target: r,
              tabId: s.toolName === i.toolName ? u : void 0,
              replaceTabId: u,
              deepLink: { url: t.target == null ? `/` : o(t.target) },
            }),
          !0
        );
      }),
      (r[15] = T.accessSignal),
      (r[16] = T.mcpAppHostAdapter),
      (r[17] = h),
      (r[18] = m),
      (r[19] = u),
      (r[20] = i),
      (r[21] = D))
    : (D = r[21]);
  let O = D,
    k = f ?? d?.deepLink ?? void 0,
    A = d?.widgetState,
    j;
  r[22] === Symbol.for(`react.memo_cache_sentinel`) ? ((j = {}), (r[22] = j)) : (j = r[22]);
  let M;
  r[23] === T.mcpAppHostAdapter.experimentalCapabilities
    ? (M = r[24])
    : ((M = { ...T.mcpAppHostAdapter.experimentalCapabilities, "openai/selfDeepLinks": j }),
      (r[23] = T.mcpAppHostAdapter.experimentalCapabilities),
      (r[24] = M));
  let N;
  r[25] !== T.mcpAppHostAdapter || r[26] !== i
    ? ((N = (e) => e(w, i) || T.mcpAppHostAdapter.isAccessRevoked?.(e) === !0),
      (r[25] = T.mcpAppHostAdapter),
      (r[26] = i),
      (r[27] = N))
    : (N = r[27]);
  let F;
  r[28] !== T.mcpAppHostAdapter || r[29] !== O || r[30] !== p || r[31] !== M || r[32] !== N
    ? ((F = {
        ...T.mcpAppHostAdapter,
        onRequestClose: p,
        onOpenLink: O,
        experimentalCapabilities: M,
        isAccessRevoked: N,
      }),
      (r[28] = T.mcpAppHostAdapter),
      (r[29] = O),
      (r[30] = p),
      (r[31] = M),
      (r[32] = N),
      (r[33] = F))
    : (F = r[33]);
  let I;
  r[34] !== T || r[35] !== F
    ? ((I = { ...T, mcpAppHostAdapter: F }), (r[34] = T), (r[35] = F), (r[36] = I))
    : (I = r[36]);
  let R;
  return (
    r[37] !== v ||
    r[38] !== s ||
    r[39] !== m ||
    r[40] !== I ||
    r[41] !== k ||
    r[42] !== A ||
    r[43] !== i.hostId ||
    r[44] !== i.pluginId
      ? ((R = (0, J.jsx)(le, {
          fullSurface: !0,
          hostedInThreadScrollLayout: !1,
          recipient: m,
          conversationId: v,
          deepLink: k,
          initialWidgetState: A,
          pluginId: i.pluginId,
          hostId: i.hostId,
          lifetime: `thread`,
          mcpAppId: s,
          result: I,
        })),
        (r[37] = v),
        (r[38] = s),
        (r[39] = m),
        (r[40] = I),
        (r[41] = k),
        (r[42] = A),
        (r[43] = i.hostId),
        (r[44] = i.pluginId),
        (r[45] = R))
      : (R = r[45]),
    R
  );
}
function be() {}
var xe, J;
function Se() {
  return (Se = e(() => {
    ((xe = p()), i(), r(), f(), ce(), se(), A(), z(), v(), M(), O(), ve(), y(), T(), N(), V(), (J = m()));
  }))();
}
function Ce(e) {
  let n = (0, Y.c)(13),
    { children: r } = e,
    i = t(P),
    { pathname: a, routeTemplate: o, search: s } = i.value,
    c;
  n[0] === i ? (c = n[1]) : ((c = D(i)), (n[0] = i), (n[1] = c));
  let l;
  n[2] !== a || n[3] !== o || n[4] !== s || n[5] !== c
    ? ((l = { routeKind: `other`, pathname: a, routeTemplate: o, search: s, workspaceFilePanel: c }),
      (n[2] = a),
      (n[3] = o),
      (n[4] = s),
      (n[5] = c),
      (n[6] = l))
    : (l = n[6]);
  let u;
  n[7] === i ? (u = n[8]) : ((u = (0, X.jsx)(we, { workspace: i })), (n[7] = i), (n[8] = u));
  let d;
  return (
    n[9] !== r || n[10] !== l || n[11] !== u
      ? ((d = (0, X.jsxs)(R, { route: l, children: [u, r] })),
        (n[9] = r),
        (n[10] = l),
        (n[11] = u),
        (n[12] = d))
      : (d = n[12]),
    d
  );
}
function we(e) {
  let n = (0, Y.c)(4),
    { workspace: r } = e,
    i = t(P),
    a,
    o;
  return (
    n[0] !== i || n[1] !== r
      ? ((a = () => (
          i.set(B, r),
          () => {
            i.get(B) === r && i.set(B, null);
          }
        )),
        (o = [i, r]),
        (n[0] = i),
        (n[1] = r),
        (n[2] = a),
        (n[3] = o))
      : ((a = n[2]), (o = n[3])),
    (0, Te.useLayoutEffect)(a, o),
    null
  );
}
var Y, Te, X;
function Ee() {
  return (Ee = e(() => {
    ((Y = p()), r(), (Te = h()), ue(), v(), E(), (X = m()));
  }))();
}
function De(e) {
  let r = (0, Z.c)(43),
    { content: i, deepLink: a, isActive: o, isVisible: s, onClose: c, tabId: l, tabState: d } = e,
    f = t(L);
  if (i.type === `hosted-view`) {
    let e;
    return (
      r[0] !== i.recovery ||
      r[1] !== i.thread ||
      r[2] !== i.view ||
      r[3] !== a ||
      r[4] !== c ||
      r[5] !== l ||
      r[6] !== d.mcpAppId
        ? ((e = (0, Q.jsx)(ye, {
            view: i.view,
            thread: i.thread,
            mcpAppId: d.mcpAppId,
            tabId: l,
            recovery: i.recovery,
            deepLink: a,
            onRequestClose: c,
          })),
          (r[0] = i.recovery),
          (r[1] = i.thread),
          (r[2] = i.view),
          (r[3] = a),
          (r[4] = c),
          (r[5] = l),
          (r[6] = d.mcpAppId),
          (r[7] = e))
        : (e = r[7]),
      e
    );
  }
  if (i.type === `saved`) {
    let e;
    return (
      r[8] === i.params
        ? (e = r[9])
        : ((e = (0, Q.jsx)(Oe, { params: i.params })), (r[8] = i.params), (r[9] = e)),
      e
    );
  }
  let p = f.value.kind === `other` ? null : f,
    m = i.type === `view` ? i.sourceThreadId : null;
  if (m != null && (f.value.kind !== `local` || m !== f.value.conversationId)) {
    let e;
    (r[10] !== f || r[11] !== m
      ? ((e = u(f, L, C(f, n(m)))), (r[10] = f), (r[11] = m), (r[12] = e))
      : (e = r[12]),
      (p = e));
  }
  if (i.type === `file-viewer`) {
    let e;
    return (
      r[13] !== i.path ||
      r[14] !== i.view ||
      r[15] !== c ||
      r[16] !== p ||
      r[17] !== l ||
      r[18] !== d.mcpAppId
        ? ((e = (0, Q.jsx)(ge, {
            panelTabId: l,
            onRequestClose: c,
            recipient: p,
            lifetime: `thread`,
            mcpAppId: d.mcpAppId,
            filePath: i.path,
            fileViewer: i.view,
          })),
          (r[13] = i.path),
          (r[14] = i.view),
          (r[15] = c),
          (r[16] = p),
          (r[17] = l),
          (r[18] = d.mcpAppId),
          (r[19] = e))
        : (e = r[19]),
      e
    );
  }
  if (i.type === `global`) {
    let e = i.view.title,
      t;
    r[20] === i.view ? (t = r[21]) : ((t = _(i.view)), (r[20] = i.view), (r[21] = t));
    let n;
    r[22] !== i.deepLink || r[23] !== i.mcpAppId || r[24] !== i.view || r[25] !== p || r[26] !== l
      ? ((n = (0, Q.jsx)(U, {
          globalSurface: !0,
          source: `global`,
          panelTabId: l,
          lifetime: `app`,
          view: i.view,
          mcpAppId: i.mcpAppId,
          deepLink: i.deepLink,
          recipient: p,
        })),
        (r[22] = i.deepLink),
        (r[23] = i.mcpAppId),
        (r[24] = i.view),
        (r[25] = p),
        (r[26] = l),
        (r[27] = n))
      : (n = r[27]);
    let a;
    return (
      r[28] !== i.view.title || r[29] !== o || r[30] !== s || r[31] !== t || r[32] !== n
        ? ((a = (0, Q.jsx)(Ce, {
            children: (0, Q.jsx)(he, { isActive: o, isVisible: s, title: e, source: t, children: n }),
          })),
          (r[28] = i.view.title),
          (r[29] = o),
          (r[30] = s),
          (r[31] = t),
          (r[32] = n),
          (r[33] = a))
        : (a = r[33]),
      a
    );
  }
  let h;
  if (r[34] !== i) {
    let { type: e, ...t } = i;
    ((h = t), (r[34] = i), (r[35] = h));
  } else h = r[35];
  let g;
  return (
    r[36] !== a || r[37] !== c || r[38] !== h || r[39] !== p || r[40] !== l || r[41] !== d.mcpAppId
      ? ((g = (0, Q.jsx)(U, {
          panelTabId: l,
          lifetime: `thread`,
          source: `thread`,
          ...h,
          deepLink: a,
          onRequestClose: c,
          mcpAppId: d.mcpAppId,
          recipient: p,
        })),
        (r[36] = a),
        (r[37] = c),
        (r[38] = h),
        (r[39] = p),
        (r[40] = l),
        (r[41] = d.mcpAppId),
        (r[42] = g))
      : (g = r[42]),
    g
  );
}
function Oe(e) {
  let t = (0, Z.c)(8),
    { params: n } = e,
    r = n.type === `view` && n.server === `code-review` ? c : n.hostId,
    i;
  t[0] !== n.server || t[1] !== r
    ? ((i = { hostId: r, server: n.server }), (t[0] = n.server), (t[1] = r), (t[2] = i))
    : (i = t[2]);
  let a = g(j, i),
    o = a.isPending || a.isFetching,
    s;
  t[3] === a ? (s = t[4]) : ((s = () => void a.refetch().catch(ke)), (t[3] = a), (t[4] = s));
  let l;
  return (
    t[5] !== o || t[6] !== s
      ? ((l = (0, Q.jsx)(H, { isLoading: o, onRetry: s })), (t[5] = o), (t[6] = s), (t[7] = l))
      : (l = t[7]),
    l
  );
}
function ke() {}
var Z, Q;
function $() {
  return ($ = e(() => {
    ((Z = p()), r(), f(), de(), z(), I(), F(), b(), q(), me(), Se(), T(), V(), Ee(), (Q = m()));
  }))();
}
$();
export { De as McpExtensionSidePanelTabFrame };
//# sourceMappingURL=side-panel-tab-frame-92d6fe472b73.js.map
