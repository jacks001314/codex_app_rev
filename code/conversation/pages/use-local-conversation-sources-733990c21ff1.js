import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AIt as t,
  B6t as n,
  Dqt as r,
  F3t as i,
  Jen as a,
  M3t as o,
  MIt as s,
  N3t as c,
  O3t as l,
  Opn as u,
  S9 as d,
  Spn as f,
  Ust as p,
  Vst as m,
  Xdt as h,
  fk as g,
  hmn as _,
  jIt as v,
  kmn as y,
  kqt as b,
  pk as x,
  y9 as S,
} from "./app-initial-f094ef01c64d.js";
import {
  Ex as C,
  Iy as w,
  Tx as T,
  Vy as E,
  nw as D,
  rw as O,
} from "./app-primary-4c40d73a1074.js";
import { i as k, r as ee } from "./artifact-file-preview-icon-70a3fde11749.js";
import {
  i as A,
  l as j,
  n as M,
  o as N,
  s as P,
} from "./local-conversation-webmcp-tools-model-40d1a7153ca0.js";
import { i as F, n as I, t as L } from "./local-conversation-sources-signals-4de97ec9f993.js";
import {
  a as R,
  i as z,
  n as B,
  r as V,
  t as H,
} from "./local-conversation-summary-panel-sources-model-aebd81465a06.js";
function U(e) {
  for (let t of [e.id, e.name, ...e.pluginDisplayNames]) if (m(t) != null) return t;
  return null;
}
var W = e(() => {
  p();
});
function G(e) {
  let n = (0, K.c)(23),
    { className: r, resource: a } = e,
    o = r === void 0 ? `icon-sm` : r;
  if ((i(null), a.activities.includes(`provided`))) {
    let e;
    return (
      n[1] === o
        ? (e = n[2])
        : ((e = (0, q.jsx)(T, { "aria-hidden": !0, className: o })), (n[1] = o), (n[2] = e)),
      e
    );
  }
  let s;
  n[3] !== a.mimeType || n[4] !== a.url
    ? ((s = t(a.mimeType) ?? v(a.url)), (n[3] = a.mimeType), (n[4] = a.url), (n[5] = s))
    : (s = n[5]);
  let c = s;
  if (c != null) {
    let e;
    return (
      n[6] !== o || n[7] !== c
        ? ((e = (0, q.jsx)(ee, { className: o, resourceKind: c })),
          (n[6] = o),
          (n[7] = c),
          (n[8] = e))
        : (e = n[8]),
      e
    );
  }
  let l = a.provider;
  if (l == null) {
    let e;
    return (
      n[9] !== o || n[10] !== a.url
        ? ((e = (0, q.jsx)(D, { className: o, href: a.url })),
          (n[9] = o),
          (n[10] = a.url),
          (n[11] = e))
        : (e = n[11]),
      e
    );
  }
  let u;
  n[12] !== o || n[13] !== a.url
    ? ((u = (0, q.jsx)(D, { className: o, href: a.url })),
      (n[12] = o),
      (n[13] = a.url),
      (n[14] = u))
    : (u = n[14]);
  let d;
  n[15] === l ? (d = n[16]) : ((d = U(l)), (n[15] = l), (n[16] = d));
  let f;
  return (
    n[17] !== o || n[18] !== l.logoUrl || n[19] !== l.logoUrlDark || n[20] !== u || n[21] !== d
      ? ((f = (0, q.jsx)(g, {
          alt: ``,
          className: o,
          fallback: u,
          knownAppId: d,
          logoDarkUrl: l.logoUrlDark,
          logoUrl: l.logoUrl,
        })),
        (n[17] = o),
        (n[18] = l.logoUrl),
        (n[19] = l.logoUrlDark),
        (n[20] = u),
        (n[21] = d),
        (n[22] = f))
      : (f = n[22]),
    f
  );
}
var K,
  q,
  J = e(() => {
    ((K = y()), l(), x(), O(), h(), C(), k(), s(), W(), (q = _()));
  });
function Y(e, t) {
  let n = (0, $.c)(13),
    r = u(),
    a;
  n[0] !== e || n[1] !== t
    ? ((a = e == null ? null : { hostId: t, threadId: e }), (n[0] = e), (n[1] = t), (n[2] = a))
    : (a = n[2]);
  let s = o(F, a),
    l = i(null) === !0,
    f = c(L, e) ?? [],
    p = i(E),
    m = f.some(Z),
    { data: h } = d({ enabled: m, hostId: t }),
    g = h === void 0 ? [] : h,
    { data: _ } = c(b, t, { enabled: m }),
    { externalSources: v, webSearchSource: y } = z(N(f, g, l, s).filter(j), V(f)),
    x = B(f, g, r, p, _, new Set(v.flatMap(X)), l),
    S;
  n[3] === f ? (S = n[4]) : ((S = H(f)), (n[3] = f), (n[4] = S));
  let C;
  n[5] === f ? (C = n[6]) : ((C = M(f)), (n[5] = f), (n[6] = C));
  let w;
  return (
    n[7] !== v || n[8] !== S || n[9] !== C || n[10] !== x || n[11] !== y
      ? ((w = {
          externalSources: v,
          fileSources: S,
          toolSources: x,
          webMcpCalls: C,
          webSearchSource: y,
        }),
        (n[7] = v),
        (n[8] = S),
        (n[9] = C),
        (n[10] = x),
        (n[11] = y),
        (n[12] = w))
      : (w = n[12]),
    w
  );
}
function X(e) {
  return e.provider == null ? [] : [e.provider.id];
}
function Z(e) {
  return e.items.some(Q);
}
function Q(e) {
  return e.type === `mcpToolCall` && !a(e.server);
}
var $,
  te = e(() => {
    (($ = y()), l(), n(), f(), w(), S(), r(), P(), I(), R(), A());
  });
export { U as a, J as i, Y as n, W as o, G as r, te as t };
//# sourceMappingURL=use-local-conversation-sources-733990c21ff1.js.map
