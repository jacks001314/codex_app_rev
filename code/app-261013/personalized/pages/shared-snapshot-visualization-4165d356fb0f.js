import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Ixt as n,
  Pxt as r,
  VDt as i,
  Xot as a,
  Yot as o,
  _Mt as s,
  gMt as c,
  ift as l,
  jDt as u,
  nft as d,
  vzt as f,
  xMt as p,
  yzt as m,
} from "./app-shared-bbfeca5e5737.js";
import { $tr as h, Nl as g, Pl as _, Yfr as v } from "./app-initial-5851df3f6cb1.js";
import { i as y, r as b } from "./mcp-sandbox-rpc-ca8003ff80ff.js";
import { u as x } from "./visualization-sandbox-config-193a3a874c91.js";
import { a as S, i as C } from "./visualization-theme-bedd32a367a0.js";
import {
  a as w,
  c as T,
  n as E,
  o as D,
  r as O,
  s as k,
  t as A,
} from "./visualization-sandbox-runtime-95a625b0fe0d.js";
import { i as j, r as M, t as ee } from "./shared-snapshot-asset-reference-33214426cc96.js";
import { i as N, n as P, r as F, t as I } from "./shared-snapshot-asset-scope-4757eb6c87d3.js";
function L(e) {
  let r = (0, X.c)(34),
    { attributes: i, directiveId: o } = e,
    { shareId: s, usesAssetLoader: l } = n(I).value,
    u;
  if (r[0] !== i) {
    let e = h(i, `asset`);
    ((u = e == null ? null : ee(e)), (r[0] = i), (r[1] = u));
  } else u = r[1];
  let d = u,
    [f, p] = (0, Z.useState)(null),
    [m, g] = (0, Z.useState)(R),
    v,
    y;
  (r[2] !== f || r[3] !== m
    ? ((v = () => {
        if (f == null || m || typeof IntersectionObserver > `u`) return;
        let e = new IntersectionObserver(
          (e) => {
            let [t] = e;
            t?.isIntersecting && g(!0);
          },
          { rootMargin: `400px` },
        );
        return (e.observe(f), () => e.disconnect());
      }),
      (y = [f, m]),
      (r[2] = f),
      (r[3] = m),
      (r[4] = v),
      (r[5] = y))
    : ((v = r[4]), (y = r[5])),
    (0, Z.useEffect)(v, y));
  let b = !l && s != null && d != null && o != null && m,
    x;
  r[6] !== d || r[7] !== o || r[8] !== s || r[9] !== l
    ? ((x = async (e) => {
        let { signal: t } = e;
        if (l || s == null || d == null || o == null) return null;
        let n = await F(M({ assetId: d, shareId: s }), { signal: t });
        if (!n.ok) throw Error(`Shared visualization is unavailable`);
        return n.text();
      }),
      (r[6] = d),
      (r[7] = o),
      (r[8] = s),
      (r[9] = l),
      (r[10] = x))
    : (x = r[10]);
  let S;
  r[11] !== d || r[12] !== s
    ? ((S = [`shared-codex-visualization`, s, d]), (r[11] = d), (r[12] = s), (r[13] = S))
    : (S = r[13]);
  let C;
  r[14] !== b || r[15] !== x || r[16] !== S
    ? ((C = { enabled: b, queryFn: x, queryKey: S, retry: !1, staleTime: 3e5 }),
      (r[14] = b),
      (r[15] = x),
      (r[16] = S),
      (r[17] = C))
    : (C = r[17]);
  let { data: w } = a(C);
  if (d == null || s == null || o == null) return null;
  if (l) {
    let e;
    return (
      r[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(`p`, {
            className: `text-secondary`,
            children: (0, Q.jsx)(t, {
              id: `codex.sharedSnapshot.preview.openVisualization`,
              defaultMessage: `Open shared chat to view this visualization`,
              description: `Placeholder for an interactive visualization in a shared chat hover preview, where embedded visualizations cannot run`,
            }),
          })),
          (r[18] = e))
        : (e = r[18]),
      e
    );
  }
  let T;
  r[19] === i ? (T = r[20]) : ((T = h(i, `mode`)), (r[19] = i), (r[20] = T));
  let E = T === `wide`,
    D = E && _.VisualizationWideBlock,
    O = w == null && `min-h-60`,
    k;
  r[21] !== O || r[22] !== D
    ? ((k = c(_.VisualizationBlock, D, O)), (r[21] = O), (r[22] = D), (r[23] = k))
    : (k = r[23]);
  let A = E ? `true` : void 0,
    j = E ? `visualization` : void 0,
    N;
  r[24] !== d || r[25] !== o || r[26] !== w || r[27] !== s
    ? ((N = w == null ? null : (0, Q.jsx)(z, { assetId: d, directiveId: o, embeddedHtml: w, shareId: s })),
      (r[24] = d),
      (r[25] = o),
      (r[26] = w),
      (r[27] = s),
      (r[28] = N))
    : (N = r[28]);
  let P;
  return (
    r[29] !== k || r[30] !== A || r[31] !== j || r[32] !== N
      ? ((P = (0, Q.jsx)(`div`, {
          ref: p,
          className: k,
          "data-wide-markdown-block": A,
          "data-wide-markdown-block-kind": j,
          children: N,
        })),
        (r[29] = k),
        (r[30] = A),
        (r[31] = j),
        (r[32] = N),
        (r[33] = P))
      : (P = r[33]),
    P
  );
}
function R() {
  return typeof IntersectionObserver > `u`;
}
function z(e) {
  let t = (0, X.c)(23),
    { assetId: n, directiveId: r, embeddedHtml: a, shareId: o } = e,
    s = i(),
    [c, l] = (0, Z.useState)(null),
    [u, f] = (0, Z.useState)(240),
    [p, m] = (0, Z.useState)(null),
    h = (0, Z.useSyncExternalStore)(oe, Y, Y),
    g,
    _;
  (t[0] !== n || t[1] !== r || t[2] !== a || t[3] !== c || t[4] !== s.locale || t[5] !== o
    ? ((g = () => {
        if (c == null) return;
        let e = new AbortController(),
          t = `visualization-${v(`${o}:${r}:${n}`)}`,
          i = O({ locale: s.locale, scopeId: `${o}:${r}:${n}` }),
          l = d(i, { requireSkybridge: !0 });
        if (l == null) return;
        let u = ie,
          p = (e) => {
            let t = T.safeParse(e);
            t.success && f(t.data);
          },
          h = null;
        return (
          b({
            hostApiHandlers: {
              callMcp: u,
              callTool: async (e, t) => {
                if (e !== `__codex_inline_visualization_height__`) return u();
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
              sendFollowUpMessage: u,
              sendInstrument: W,
              updateWidgetState: U,
            },
            origin: l,
            sandboxId: t,
            signal: e.signal,
            sourceUrl: i,
            webview: c,
          })
            .then(async (t) => {
              e.signal.aborted ||
                ((h = t),
                m(t),
                await ae({
                  allowInteractions: !1,
                  canExpand: !1,
                  fragment: a,
                  locale: s.locale,
                  lockDocumentOverflow: !1,
                  maxHeight: E,
                  maxWidth: c.clientWidth - A,
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
      (_ = [n, r, a, c, s.locale, o]),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = c),
      (t[4] = s.locale),
      (t[5] = o),
      (t[6] = g),
      (t[7] = _))
    : ((g = t[6]), (_ = t[7])),
    (0, Z.useEffect)(g, _));
  let y, x;
  (t[8] !== c || t[9] !== s.locale || t[10] !== h || t[11] !== p
    ? ((y = () => {
        c != null &&
          p != null &&
          k({
            canExpand: !1,
            contentWidth: c.clientWidth - A,
            displayMode: `inline`,
            locale: s.locale,
            maxHeight: E,
            sandboxApi: p,
            styleVariables: C(),
            theme: h ? `dark` : `light`,
          }).catch(B);
      }),
      (x = [c, s.locale, h, p]),
      (t[8] = c),
      (t[9] = s.locale),
      (t[10] = h),
      (t[11] = p),
      (t[12] = y),
      (t[13] = x))
    : ((y = t[12]), (x = t[13])),
    (0, Z.useEffect)(y, x));
  let S = u + A,
    w;
  t[14] === S ? (w = t[15]) : ((w = { height: S }), (t[14] = S), (t[15] = w));
  let D;
  t[16] === s
    ? (D = t[17])
    : ((D = s.formatMessage({
        id: `codex.visualization.frame.title`,
        defaultMessage: `Interactive visualization`,
        description: `Accessible title for an inline interactive visualization`,
      })),
      (t[16] = s),
      (t[17] = D));
  let j;
  t[18] === D
    ? (j = t[19])
    : ((j = (0, Q.jsx)(`iframe`, {
        ref: l,
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
    ((X = f()), o(), s(), r(), l(), (Z = m()), u(), N(), y(), x(), w(), S(), j(), P(), g(), (Q = p()));
  }))();
}
$();
export { L as SharedSnapshotVisualization };
//# sourceMappingURL=shared-snapshot-visualization-4165d356fb0f.js.map
