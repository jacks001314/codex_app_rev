import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  Cbt as ee,
  FBt as n,
  Jbt as r,
  KSt as i,
  LNt as a,
  NSt as o,
  PBt as s,
  SSt as te,
  XOt as c,
  ZSt as l,
  ast as u,
  cmt as d,
  iCt as f,
  ist as p,
  mbt as m,
  nCt as h,
  okt as ne,
  pbt as g,
  sct as _,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  EOn as v,
  Fer as y,
  Ger as b,
  H9n as x,
  MOr as S,
  TOn as C,
  _Cn as re,
  cw as w,
  eer as T,
  gCn as E,
  lkr as D,
  mQ as O,
  oGt as k,
  sGt as A,
  sw as j,
  ykr as M,
  zOr as N,
} from "./app-initial-ad16eaadf81f.js";
import {
  i as P,
  n as F,
  r as I,
  t as L,
} from "./local-conversation-stream-role-product-event-2bdb514a7026.js";
import { i as R, s as z } from "./local-conversation-thread-632d930bbfe2.js";
import { r as B, t as V } from "./use-thread-summary-panel-fc6ca9230767.js";
import { n as H, r as U } from "./use-hotkey-window-detail-layout-b8900124f3e8.js";
function W() {
  let e = (0, G.c)(38),
    n = t(S),
    a = ne(),
    { conversationId: o } = i(),
    { clientThreadId: s } = n.value,
    c = f(M),
    l;
  e[0] !== s || e[1] !== c
    ? ((l = c == null && r(s) ? s : null), (e[0] = s), (e[1] = c), (e[2] = l))
    : (l = e[2]);
  let u = l,
    _ = h(v, u),
    { data: C } = f(j),
    w = C == null || C.configuredHotkey != null,
    T;
  e[3] === w ? (T = e[4]) : ((T = ee(w)), (e[3] = w), (e[4] = T));
  let E = T,
    D = h(re, c),
    A = h(b, c),
    N = h(y, c),
    P = h(x, c),
    F;
  if (e[5] !== P) {
    let t = P ? d(P) : null;
    ((F = O(t)), (e[5] = P), (e[6] = F));
  } else F = e[6];
  let z = F,
    V = `/`;
  if (c != null) {
    let t;
    (e[7] !== c || e[8] !== N ? ((t = k(m(c), N)), (e[7] = c), (e[8] = N), (e[9] = t)) : (t = e[9]), (V = t));
  } else if (u != null) {
    let t;
    (e[10] === u ? (t = e[11]) : ((t = m(u)), (e[10] = u), (e[11] = t)), (V = t));
  }
  let H;
  e[12] !== s || e[13] !== c || e[14] !== N
    ? ((H = () => {
        r(s) && c != null && p.hotkeyWindowHotkeys?.open({ path: k(g(c), N) });
      }),
      (e[12] = s),
      (e[13] = c),
      (e[14] = N),
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
  (e[18] !== s || e[19] !== c || e[20] !== N
    ? ((Y = [s, c, N]), (e[18] = s), (e[19] = c), (e[20] = N), (e[21] = Y))
    : (Y = e[21]),
    (0, K.useEffect)(J, Y),
    B(n));
  let X;
  if (
    (e[22] !== N ||
    e[23] !== a ||
    e[24] !== V ||
    e[25] !== _?.label ||
    e[26] !== z ||
    e[27] !== o ||
    e[28] !== A ||
    e[29] !== D
      ? ((X =
          o == null
            ? null
            : {
                title: (0, q.jsxs)(`div`, {
                  className: `flex max-w-full min-w-0 items-baseline gap-2`,
                  children: [
                    (0, q.jsx)(`div`, {
                      className: `min-w-0 shrink-[999] truncate text-default`,
                      children:
                        _?.label ??
                        D ??
                        a.formatMessage({
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
                  A == null
                    ? void 0
                    : () => {
                        p.hotkeyWindowHotkeys?.open({ path: k(g(A), N) });
                      },
              }),
        (e[22] = N),
        (e[23] = a),
        (e[24] = V),
        (e[25] = _?.label),
        (e[26] = z),
        (e[27] = o),
        (e[28] = A),
        (e[29] = D),
        (e[30] = X))
      : (X = e[30]),
    U(X),
    o == null)
  ) {
    let t;
    return (
      e[31] === E ? (t = e[32]) : ((t = (0, q.jsx)(te, { to: E, replace: !0 })), (e[31] = E), (e[32] = t)),
      t
    );
  }
  let Z;
  e[33] === c
    ? (Z = e[34])
    : ((Z =
        c == null
          ? null
          : (0, q.jsxs)(q.Fragment, {
              children: [(0, q.jsx)(L, { conversationId: c }), (0, q.jsx)(I, { conversationId: c })],
            })),
      (e[33] = c),
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
    ((G = s()),
      l(),
      _(),
      (K = n()),
      c(),
      o(),
      T(),
      P(),
      F(),
      z(),
      E(),
      u(),
      N(),
      D(),
      V(),
      A(),
      C(),
      w(),
      H(),
      (q = a()));
  }))();
}
J();
export { W as HotkeyWindowThreadPage };
//# sourceMappingURL=hotkey-window-thread-page-26b74a9a5f87.js.map
