import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Ixt as t,
  Kat as n,
  Myt as r,
  Pxt as i,
  Qvt as a,
  VDt as ee,
  Vxt as o,
  Zvt as s,
  _xt as c,
  jDt as l,
  kxt as u,
  oxt as d,
  qat as f,
  qft as p,
  rst as m,
  syt as h,
  vzt as g,
  xMt as _,
  yzt as v,
  zxt as y,
} from "./app-shared-bbfeca5e5737.js";
import {
  $8n as te,
  Cwr as b,
  EX as x,
  MC as S,
  NC as C,
  _Ct as w,
  aTn as ne,
  abn as T,
  gwr as E,
  iTn as D,
  l5n as O,
  o8n as k,
  obn as A,
  qwr as j,
  rTr as M,
  v8n as N,
  vCt as P,
} from "./app-initial-5851df3f6cb1.js";
import {
  i as F,
  n as I,
  r as re,
  t as L,
} from "./local-conversation-stream-role-product-event-1367a4b33883.js";
import { i as R, s as z } from "./local-conversation-thread-6999d2419a30.js";
import { r as B, t as V } from "./use-thread-summary-panel-14572b4b8411.js";
import { n as H, r as U } from "./use-hotkey-window-detail-layout-b2abbfb40f7f.js";
function W() {
  let e = (0, G.c)(38),
    i = t(E),
    c = ee(),
    { conversationId: l } = u(),
    { clientThreadId: f } = i.value,
    m = o(M),
    g;
  e[0] !== f || e[1] !== m
    ? ((g = m == null && r(f) ? f : null), (e[0] = f), (e[1] = m), (e[2] = g))
    : (g = e[2]);
  let _ = g,
    v = y(ne, _),
    { data: b } = o(S),
    C = b == null || b.configuredHotkey != null,
    T;
  e[3] === C ? (T = e[4]) : ((T = h(C)), (e[3] = C), (e[4] = T));
  let D = T,
    j = y(A, m),
    N = y(O, m),
    P = y(te, m),
    F = y(k, m),
    I;
  if (e[5] !== F) {
    let t = F ? p(F) : null;
    ((I = x(t)), (e[5] = F), (e[6] = I));
  } else I = e[6];
  let z = I,
    V = `/`;
  if (m != null) {
    let t;
    (e[7] !== m || e[8] !== P ? ((t = w(a(m), P)), (e[7] = m), (e[8] = P), (e[9] = t)) : (t = e[9]), (V = t));
  } else if (_ != null) {
    let t;
    (e[10] === _ ? (t = e[11]) : ((t = a(_)), (e[10] = _), (e[11] = t)), (V = t));
  }
  let H;
  e[12] !== f || e[13] !== m || e[14] !== P
    ? ((H = () => {
        r(f) && m != null && n.hotkeyWindowHotkeys?.open({ path: w(s(m), P) });
      }),
      (e[12] = f),
      (e[13] = m),
      (e[14] = P),
      (e[15] = H))
    : (H = e[15]);
  let W = (0, K.useEffectEvent)(H),
    J;
  e[16] === W
    ? (J = e[17])
    : ((J = () => {
        W();
      }),
      (e[16] = W),
      (e[17] = J));
  let Y;
  (e[18] !== f || e[19] !== m || e[20] !== P
    ? ((Y = [f, m, P]), (e[18] = f), (e[19] = m), (e[20] = P), (e[21] = Y))
    : (Y = e[21]),
    (0, K.useEffect)(J, Y),
    B(i));
  let X;
  if (
    (e[22] !== P ||
    e[23] !== c ||
    e[24] !== V ||
    e[25] !== v?.label ||
    e[26] !== z ||
    e[27] !== l ||
    e[28] !== N ||
    e[29] !== j
      ? ((X =
          l == null
            ? null
            : {
                title: (0, q.jsxs)(`div`, {
                  className: `flex max-w-full min-w-0 items-baseline gap-2`,
                  children: [
                    (0, q.jsx)(`div`, {
                      className: `min-w-0 shrink-[999] truncate text-default`,
                      children:
                        v?.label ??
                        j ??
                        c.formatMessage({
                          id: `hotkeyWindow.defaultTitle`,
                          defaultMessage: `Codex`,
                          description: `Fallback title for hotkey window thread header`,
                        }),
                    }),
                    z == null
                      ? null
                      : (0, q.jsx)(`div`, {
                          className: `flex shrink-0 items-center gap-1 whitespace-nowrap text-codex-description`,
                          children: (0, q.jsx)(`span`, { className: `truncate`, children: z }),
                        }),
                  ],
                }),
                mainWindowPath: V,
                onBack:
                  N == null
                    ? void 0
                    : () => {
                        n.hotkeyWindowHotkeys?.open({ path: w(s(N), P) });
                      },
              }),
        (e[22] = P),
        (e[23] = c),
        (e[24] = V),
        (e[25] = v?.label),
        (e[26] = z),
        (e[27] = l),
        (e[28] = N),
        (e[29] = j),
        (e[30] = X))
      : (X = e[30]),
    U(X),
    l == null)
  ) {
    let t;
    return (
      e[31] === D ? (t = e[32]) : ((t = (0, q.jsx)(d, { to: D, replace: !0 })), (e[31] = D), (e[32] = t)),
      t
    );
  }
  let Z;
  e[33] === m
    ? (Z = e[34])
    : ((Z =
        m == null
          ? null
          : (0, q.jsxs)(q.Fragment, {
              children: [(0, q.jsx)(L, { conversationId: m }), (0, q.jsx)(re, { conversationId: m })],
            })),
      (e[33] = m),
      (e[34] = Z));
  let Q;
  e[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Q = (0, q.jsx)(`div`, {
        className: `h-full [--padding-panel:calc(var(--padding-panel-base)/2)]`,
        children: (0, q.jsx)(R, { allowMissingConversation: !0, showUtilityBar: !0 }),
      })),
      (e[35] = Q))
    : (Q = e[35]);
  let $;
  return (
    e[36] === Z
      ? ($ = e[37])
      : (($ = (0, q.jsxs)(q.Fragment, { children: [Z, Q] })), (e[36] = Z), (e[37] = $)),
    $
  );
}
var G, K, q;
function J() {
  return (J = e(() => {
    ((G = g()),
      i(),
      m(),
      (K = v()),
      l(),
      c(),
      N(),
      F(),
      I(),
      z(),
      T(),
      f(),
      b(),
      j(),
      V(),
      P(),
      D(),
      C(),
      H(),
      (q = _()));
  }))();
}
J();
export { W as HotkeyWindowThreadPage };
//# sourceMappingURL=hotkey-window-thread-page-21822771506e.js.map
