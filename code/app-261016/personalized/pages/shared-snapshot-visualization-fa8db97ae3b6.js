import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  FBt as n,
  LNt as r,
  MNt as i,
  Mst as a,
  NNt as o,
  PBt as s,
  XOt as c,
  ZSt as l,
  _pt as u,
  hpt as d,
  jst as f,
  okt as p,
  tkt as m,
} from "./app-shared-2feb3d4c6fcc.js";
import { Fl as h, Il as g, qgr as _, war as v } from "./app-initial-ad16eaadf81f.js";
import { i as y, r as b } from "./mcp-sandbox-rpc-251a9f57e376.js";
import { u as x } from "./visualization-sandbox-config-d6a8d5057bf3.js";
import { a as S, i as C } from "./visualization-theme-bedd32a367a0.js";
import {
  a as w,
  c as T,
  n as E,
  o as D,
  r as O,
  s as k,
  t as A,
} from "./visualization-sandbox-runtime-b31cac3a956f.js";
import { i as j, r as M, t as ee } from "./shared-snapshot-asset-reference-33214426cc96.js";
import { i as N, n as P, r as F, t as I } from "./shared-snapshot-asset-scope-470027341d3a.js";
function L(e) {
  let n = (0, X.c)(34),
    { attributes: r, directiveId: o } = e,
    { shareId: s, usesAssetLoader: c } = t(I).value,
    l;
  if (n[0] !== r) {
    let e = v(r, `asset`);
    ((l = e == null ? null : ee(e)), (n[0] = r), (n[1] = l));
  } else l = n[1];
  let u = l,
    [d, f] = (0, Z.useState)(null),
    [p, h] = (0, Z.useState)(R),
    _,
    y;
  (n[2] !== d || n[3] !== p
    ? ((_ = () => {
        if (d == null || p || typeof IntersectionObserver > `u`) return;
        let e = new IntersectionObserver(
          (e) => {
            let [t] = e;
            t?.isIntersecting && h(!0);
          },
          { rootMargin: `400px` },
        );
        return (e.observe(d), () => e.disconnect());
      }),
      (y = [d, p]),
      (n[2] = d),
      (n[3] = p),
      (n[4] = _),
      (n[5] = y))
    : ((_ = n[4]), (y = n[5])),
    (0, Z.useEffect)(_, y));
  let b = !c && s != null && u != null && o != null && p,
    x;
  n[6] !== u || n[7] !== o || n[8] !== s || n[9] !== c
    ? ((x = async (e) => {
        let { signal: t } = e;
        if (c || s == null || u == null || o == null) return null;
        let n = await F(M({ assetId: u, shareId: s }), { signal: t });
        if (!n.ok) throw Error(`Shared visualization is unavailable`);
        return n.text();
      }),
      (n[6] = u),
      (n[7] = o),
      (n[8] = s),
      (n[9] = c),
      (n[10] = x))
    : (x = n[10]);
  let S;
  n[11] !== u || n[12] !== s
    ? ((S = [`shared-codex-visualization`, s, u]), (n[11] = u), (n[12] = s), (n[13] = S))
    : (S = n[13]);
  let C;
  n[14] !== b || n[15] !== x || n[16] !== S
    ? ((C = { enabled: b, queryFn: x, queryKey: S, retry: !1, staleTime: 3e5 }),
      (n[14] = b),
      (n[15] = x),
      (n[16] = S),
      (n[17] = C))
    : (C = n[17]);
  let { data: w } = a(C);
  if (u == null || s == null || o == null) return null;
  if (c) {
    let e;
    return (
      n[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(`p`, {
            className: `text-secondary`,
            children: (0, Q.jsx)(m, {
              id: `codex.sharedSnapshot.preview.openVisualization`,
              defaultMessage: `Open shared chat to view this visualization`,
              description: `Placeholder for an interactive visualization in a shared chat hover preview, where embedded visualizations cannot run`,
            }),
          })),
          (n[18] = e))
        : (e = n[18]),
      e
    );
  }
  let T;
  n[19] === r ? (T = n[20]) : ((T = v(r, `mode`)), (n[19] = r), (n[20] = T));
  let E = T === `wide`,
    D = E && g.VisualizationWideBlock,
    O = w == null && `min-h-60`,
    k;
  n[21] !== O || n[22] !== D
    ? ((k = i(g.VisualizationBlock, D, O)), (n[21] = O), (n[22] = D), (n[23] = k))
    : (k = n[23]);
  let A = E ? `true` : void 0,
    j = E ? `visualization` : void 0,
    N;
  n[24] !== u || n[25] !== o || n[26] !== w || n[27] !== s
    ? ((N = w == null ? null : (0, Q.jsx)(z, { assetId: u, directiveId: o, embeddedHtml: w, shareId: s })),
      (n[24] = u),
      (n[25] = o),
      (n[26] = w),
      (n[27] = s),
      (n[28] = N))
    : (N = n[28]);
  let P;
  return (
    n[29] !== k || n[30] !== A || n[31] !== j || n[32] !== N
      ? ((P = (0, Q.jsx)(`div`, {
          ref: f,
          className: k,
          "data-wide-markdown-block": A,
          "data-wide-markdown-block-kind": j,
          children: N,
        })),
        (n[29] = k),
        (n[30] = A),
        (n[31] = j),
        (n[32] = N),
        (n[33] = P))
      : (P = n[33]),
    P
  );
}
function R() {
  return typeof IntersectionObserver > `u`;
}
function z(e) {
  let t = (0, X.c)(23),
    { assetId: n, directiveId: r, embeddedHtml: i, shareId: a } = e,
    o = p(),
    [s, c] = (0, Z.useState)(null),
    [l, u] = (0, Z.useState)(240),
    [f, m] = (0, Z.useState)(null),
    h = (0, Z.useSyncExternalStore)(oe, Y, Y),
    g,
    v;
  (t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== s || t[4] !== o.locale || t[5] !== a
    ? ((g = () => {
        if (s == null) return;
        let e = new AbortController(),
          t = `visualization-${_(`${a}:${r}:${n}`)}`,
          c = O({ locale: o.locale, scopeId: `${a}:${r}:${n}` }),
          l = d(c, { requireSkybridge: !0 });
        if (l == null) return;
        let f = ie,
          p = (e) => {
            let t = T.safeParse(e);
            t.success && u(t.data);
          },
          h = null;
        return (
          b({
            hostApiHandlers: {
              callMcp: f,
              callTool: async (e, t) => {
                if (e !== `__codex_inline_visualization_height__`) return f();
                p(t);
              },
              notifyBackgroundColor: re,
              notifyEnvironmentError: ne,
              notifyIntrinsicHeight: p,
              notifyIntrinsicWidth: te,
              notifyNavigation: J,
              notifySecurityPolicyViolation: q,
              openExternal: K,
              requestDisplayMode: G,
              sendFollowUpMessage: f,
              sendInstrument: W,
              updateWidgetState: U,
            },
            origin: l,
            sandboxId: t,
            signal: e.signal,
            sourceUrl: c,
            webview: s,
          })
            .then(async (t) => {
              e.signal.aborted ||
                ((h = t),
                m(t),
                await ae({
                  allowInteractions: !1,
                  canExpand: !1,
                  fragment: i,
                  locale: o.locale,
                  lockDocumentOverflow: !1,
                  maxHeight: E,
                  maxWidth: s.clientWidth - A,
                  sandboxApi: t,
                  signal: e.signal,
                  styleVariables: C(),
                }));
            })
            .catch(H),
          () => {
            (e.abort(), h?.requestMcpAppsResourceTeardown({ timeoutMs: 500 }).catch(V));
          }
        );
      }),
      (v = [n, r, i, s, o.locale, a]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = s),
      (t[4] = o.locale),
      (t[5] = a),
      (t[6] = g),
      (t[7] = v))
    : ((g = t[6]), (v = t[7])),
    (0, Z.useEffect)(g, v));
  let y, x;
  (t[8] !== s || t[9] !== o.locale || t[10] !== h || t[11] !== f
    ? ((y = () => {
        s != null &&
          f != null &&
          k({
            canExpand: !1,
            contentWidth: s.clientWidth - A,
            displayMode: `inline`,
            locale: o.locale,
            maxHeight: E,
            sandboxApi: f,
            styleVariables: C(),
            theme: h ? `dark` : `light`,
          }).catch(B);
      }),
      (x = [s, o.locale, h, f]),
      (t[8] = s),
      (t[9] = o.locale),
      (t[10] = h),
      (t[11] = f),
      (t[12] = y),
      (t[13] = x))
    : ((y = t[12]), (x = t[13])),
    (0, Z.useEffect)(y, x));
  let S = l + A,
    w;
  t[14] === S ? (w = t[15]) : ((w = { height: S }), (t[14] = S), (t[15] = w));
  let D;
  t[16] === o
    ? (D = t[17])
    : ((D = o.formatMessage({
        id: `codex.visualization.frame.title`,
        defaultMessage: `Interactive visualization`,
        description: `Accessible title for an inline interactive visualization`,
      })),
      (t[16] = o),
      (t[17] = D));
  let j;
  t[18] === D
    ? (j = t[19])
    : ((j = (0, Q.jsx)(`iframe`, {
        ref: c,
        className: `h-full w-full overflow-hidden border-0 bg-surface`,
        loading: `lazy`,
        referrerPolicy: `no-referrer`,
        sandbox: `allow-scripts allow-same-origin`,
        title: D,
      })),
      (t[18] = D),
      (t[19] = j));
  let M;
  return (
    t[20] !== w || t[21] !== j
      ? ((M = (0, Q.jsx)(`div`, {
          className: `relative !-m-[5px] w-[calc(100%+10px)]`,
          style: w,
          children: j,
        })),
        (t[20] = w),
        (t[21] = j),
        (t[22] = M))
      : (M = t[22]),
    M
  );
}
function B() {}
function V() {}
function H() {}
function U() {}
function W() {}
function G() {
  return { mode: `inline` };
}
function K() {}
function q() {}
function J() {}
function te() {}
function ne() {}
function re() {}
function ie() {
  return Promise.reject(Error(`Shared visualizations cannot call tools`));
}
async function ae(e) {
  for await (let t of D(e));
}
function oe(e) {
  let t = window.matchMedia?.(`(prefers-color-scheme: dark)`);
  return (t?.addEventListener(`change`, e), () => t?.removeEventListener(`change`, e));
}
function Y() {
  return window.matchMedia?.(`(prefers-color-scheme: dark)`).matches ?? !1;
}
var X, Z, Q;
function $() {
  return ($ = e(() => {
    ((X = s()), f(), o(), l(), u(), (Z = n()), c(), N(), y(), x(), w(), S(), j(), P(), h(), (Q = r()));
  }))();
}
$();
export { L as SharedSnapshotVisualization };
//# sourceMappingURL=shared-snapshot-visualization-fa8db97ae3b6.js.map
