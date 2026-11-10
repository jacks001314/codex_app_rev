import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ixt as t,
  Pxt as n,
  Rxt as r,
  VDt as i,
  Vxt as a,
  iI as o,
  jDt as s,
  oI as c,
  oSt as l,
  vzt as u,
  xMt as d,
  zxt as f,
} from "./app-shared-bbfeca5e5737.js";
import {
  AI as p,
  Bar as m,
  Bcr as h,
  Cwr as g,
  Dnn as _,
  Ear as v,
  Ggr as y,
  IF as b,
  Icr as x,
  Iwr as S,
  JPn as C,
  Jlr as w,
  Kgr as T,
  LF as E,
  Mtr as D,
  Ntr as O,
  Ptr as ee,
  Tnn as te,
  XPn as ne,
  _I as re,
  _St as ie,
  a0n as ae,
  crt as k,
  gI as A,
  gwr as j,
  hI as M,
  jI as N,
  qlr as P,
  qwr as F,
  s0n as I,
  srt as L,
  uSt as R,
  vI as z,
  wnn as B,
  yI as V,
} from "./app-initial-5851df3f6cb1.js";
import { n as H, t as U } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
import { i as W, n as oe } from "./local-conversation-webmcp-tools-model-a5b27ecc68d1.js";
import { M as G, j as K } from "./mcp-tool-item-content-12f3ac06395e.js";
import {
  a as q,
  i as se,
  n as ce,
  r as le,
  t as ue,
} from "./local-conversation-summary-panel-sources-model-a2fb0c4f9590.js";
function de(e) {
  let n = (0, J.c)(26),
    { children: r, hostId: a, meta: o, presentation: s, resource: l } = e,
    u = t(j),
    d = i(),
    p;
  n[0] === l.url ? (p = n[1]) : ((p = c(l.url)), (n[0] = l.url), (n[1] = p));
  let m = p,
    h = f(te, m),
    g;
  n[2] !== a || n[3] !== l.url
    ? ((g = { hostId: a, url: l.url }), (n[2] = a), (n[3] = l.url), (n[4] = g))
    : (g = n[4]);
  let v = m == null && s === `summary`,
    y;
  n[5] === v ? (y = n[6]) : ((y = { enabled: v }), (n[5] = v), (n[6] = y));
  let { data: x } = f(K, g, y),
    S;
  n[7] !== x || n[8] !== d || n[9] !== h || n[10] !== m?.kind || n[11] !== l.title
    ? ((S = x ?? l.title),
      m?.kind === `page` &&
        (S =
          h === void 0
            ? `…`
            : h == null || h.deleted_at != null || !h.access.can_read
              ? d.formatMessage(_, { kind: `page` })
              : L(h, d)),
      (n[7] = x),
      (n[8] = d),
      (n[9] = h),
      (n[10] = m?.kind),
      (n[11] = l.title),
      (n[12] = S))
    : (S = n[12]);
  let C;
  n[13] === l ? (C = n[14]) : ((C = (0, Y.jsx)(b, { resource: l })), (n[13] = l), (n[14] = C));
  let w = C,
    T;
  n[15] !== l || n[16] !== u || n[17] !== S
    ? ((T = (e) => {
        N(u, { ...l, title: S }) || ne({ event: e, href: l.url, initiator: l.openInitiator });
      }),
      (n[15] = l),
      (n[16] = u),
      (n[17] = S),
      (n[18] = T))
    : (T = n[18]);
  let E = T,
    D;
  return (
    n[19] !== r || n[20] !== w || n[21] !== o || n[22] !== E || n[23] !== s || n[24] !== S
      ? ((D =
          s === `summary`
            ? (0, Y.jsx)(U.SourceRow, { icon: w, label: S, onOpen: E })
            : (0, Y.jsx)(U.SourceDetails, { icon: w, label: S, meta: o, onOpen: E, children: r })),
        (n[19] = r),
        (n[20] = w),
        (n[21] = o),
        (n[22] = E),
        (n[23] = s),
        (n[24] = S),
        (n[25] = D))
      : (D = n[25]),
    D
  );
}
var J, Y;
function X() {
  return (X = e(() => {
    ((J = u()), n(), o(), s(), G(), C(), B(), p(), k(), g(), E(), H(), (Y = d()));
  }))();
}
function Z(e, t, n) {
  let o = (0, Q.c)(23),
    s = i(),
    c;
  o[0] !== e || o[1] !== t
    ? ((c = e == null ? null : { hostId: t, threadId: e }), (o[0] = e), (o[1] = t), (o[2] = c))
    : (c = o[2]);
  let l = r(A, c),
    u = a(m) === !0,
    d = f(z, e),
    p;
  o[3] !== d || o[4] !== t
    ? ((p = { enabled: d, hostId: t }), (o[3] = d), (o[4] = t), (o[5] = p))
    : (p = o[5]);
  let { data: g } = I(p),
    _ = f(re, e),
    v;
  o[6] !== _ || o[7] !== t
    ? ((v = { enabled: _, hostId: t }), (o[6] = _), (o[7] = t), (o[8] = v))
    : (v = o[8]);
  let y = w(v),
    b;
  o[9] !== t || o[10] !== y
    ? ((b = { enabled: y, hostId: t, roots: void 0, resolveActiveRoots: !0 }),
      (o[9] = t),
      (o[10] = y),
      (o[11] = b))
    : (b = o[11]);
  let { data: x } = h(b),
    S;
  o[12] === d ? (S = o[13]) : ((S = { enabled: d }), (o[12] = d), (o[13] = S));
  let { data: C } = f(T, t, S),
    E;
  return (
    o[14] !== g ||
    o[15] !== e ||
    o[16] !== l ||
    o[17] !== u ||
    o[18] !== x ||
    o[19] !== s ||
    o[20] !== C ||
    o[21] !== n
      ? ((E = fe(e, g, s, C, u, x, l, n)),
        (o[14] = g),
        (o[15] = e),
        (o[16] = l),
        (o[17] = u),
        (o[18] = x),
        (o[19] = s),
        (o[20] = C),
        (o[21] = n),
        (o[22] = E))
      : (E = o[22]),
    a(E)
  );
}
function fe(e, t, n, r, i, a, o, s) {
  return l(S, ({ get: c }) => {
    let l = t ?? [],
      u = c(M, e) ?? [],
      { externalSources: d, webSearchSource: f } = se(D(u, l, i, o).filter(ee), le(u)),
      p = ce(u, l, n, c(ie), r, new Set(d.flatMap((e) => (e.provider == null ? [] : [e.provider.id]))), i, a),
      m = { externalSources: d, fileSources: ue(u), toolSources: p, webMcpCalls: oe(u), webSearchSource: f };
    return s == null ? m : s(m);
  });
}
function pe(e) {
  return {
    externalSources: e.externalSources,
    fileSources: e.fileSources,
    toolSources: e.toolSources.map(
      ({ id: e, name: t, pluginDisplayNames: n, logoUrl: r, logoUrlDark: i, mcpAppId: a }) => ({
        id: e,
        name: t,
        pluginDisplayNames: n,
        logoUrl: r,
        logoUrlDark: i,
        mcpAppId: a,
      }),
    ),
    webMcpSourceHostnames: Array.from(
      new Set(e.webMcpCalls.flatMap((e) => (e.sourceHostname == null ? [] : [e.sourceHostname]))),
    ),
    hasWebSearch: e.webSearchSource != null,
  };
}
var Q;
function $() {
  return ($ = e(() => {
    ((Q = u()), n(), s(), ae(), P(), R(), v(), x(), y(), F(), O(), V(), q(), W());
  }))();
}
export { X as a, de as i, $ as n, Z as r, pe as t };
//# sourceMappingURL=use-local-conversation-sources-5dbb8ee22e75.js.map
