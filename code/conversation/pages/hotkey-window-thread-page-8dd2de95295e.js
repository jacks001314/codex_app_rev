import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as ee,
  Amn as n,
  B6t as r,
  BRt as i,
  F3t as a,
  Gwt as o,
  H2 as s,
  IXt as c,
  N3t as l,
  O3t as u,
  Opn as d,
  Spn as f,
  V2 as p,
  VTt as te,
  XXt as ne,
  YRt as re,
  ZTt as m,
  cS as h,
  d5t as g,
  e9t as _,
  ei as v,
  f5t as y,
  gRt as b,
  hmn as x,
  hz as S,
  kmn as C,
  ktn as w,
  mz as T,
  rTt as E,
  sS as D,
  ti as O,
  v6 as k,
  xRt as A,
  y5t as j,
  y6 as M,
  zXt as N,
} from "./app-initial-f094ef01c64d.js";
import { Fm as P, Im as F } from "./app-primary-4c40d73a1074.js";
import { a as I, r as L } from "./conversation-source-3c0ae9358599.js";
import { a as R, i as z } from "./local-conversation-thread-a2bcd054c9d2.js";
import { n as B, r as V } from "./use-hotkey-window-detail-layout-c05db7c47d12.js";
import {
  i as H,
  n as U,
  r as W,
  t as G,
} from "./local-conversation-stream-role-product-event-28e61d930003.js";
function K() {
  let e = (0, q.c)(38),
    t = ee(b),
    n = d(),
    { conversationId: r } = ne(),
    { clientThreadId: i } = t.value,
    c = a(re),
    u;
  e[0] !== i || e[1] !== c
    ? ((u = c == null && w(i) ? i : null), (e[0] = i), (e[1] = c), (e[2] = u))
    : (u = e[2]);
  let f = u,
    p = l(s, f),
    { data: h } = a(v),
    x = h == null || h.configuredHotkey != null,
    S;
  e[3] === x ? (S = e[4]) : ((S = j(x)), (e[3] = x), (e[4] = S));
  let C = S,
    E = l(M, c),
    O = l(m, c),
    k = l(te, c),
    A = l(o, c),
    F;
  e[5] === A ? (F = e[6]) : ((F = P(A ? _(A) : null)), (e[5] = A), (e[6] = F));
  let L = F,
    R = `/`;
  if (c != null) {
    let t;
    (e[7] !== c || e[8] !== k ? ((t = D(y(c), k)), (e[7] = c), (e[8] = k), (e[9] = t)) : (t = e[9]),
      (R = t));
  } else if (f != null) {
    let t;
    (e[10] === f ? (t = e[11]) : ((t = y(f)), (e[10] = f), (e[11] = t)), (R = t));
  }
  let B;
  e[12] !== i || e[13] !== c || e[14] !== k
    ? ((B = () => {
        !w(i) || c == null || T.hotkeyWindowHotkeys?.open({ path: D(g(c), k) });
      }),
      (e[12] = i),
      (e[13] = c),
      (e[14] = k),
      (e[15] = B))
    : (B = e[15]);
  let H = (0, J.useEffectEvent)(B),
    U;
  e[16] === H
    ? (U = e[17])
    : ((U = () => {
        H();
      }),
      (e[16] = H),
      (e[17] = U));
  let K;
  (e[18] !== i || e[19] !== c || e[20] !== k
    ? ((K = [i, c, k]), (e[18] = i), (e[19] = c), (e[20] = k), (e[21] = K))
    : (K = e[21]),
    (0, J.useEffect)(U, K),
    I(t));
  let X;
  if (
    (e[22] !== k ||
    e[23] !== n ||
    e[24] !== R ||
    e[25] !== p?.label ||
    e[26] !== L ||
    e[27] !== r ||
    e[28] !== O ||
    e[29] !== E
      ? ((X =
          r == null
            ? null
            : {
                title: (0, Y.jsxs)(`div`, {
                  className: `flex max-w-full min-w-0 items-baseline gap-2`,
                  children: [
                    (0, Y.jsx)(`div`, {
                      className: `min-w-0 shrink-[999] truncate text-default`,
                      children:
                        p?.label ??
                        E ??
                        n.formatMessage({
                          id: `hotkeyWindow.defaultTitle`,
                          defaultMessage: `Codex`,
                          description: `Fallback title for hotkey window thread header`,
                        }),
                    }),
                    L == null
                      ? null
                      : (0, Y.jsx)(`div`, {
                          className: `flex shrink-0 items-center gap-1 whitespace-nowrap text-codex-description`,
                          children: (0, Y.jsx)(`span`, { className: `truncate`, children: L }),
                        }),
                  ],
                }),
                mainWindowPath: R,
                onBack:
                  O == null
                    ? void 0
                    : () => {
                        T.hotkeyWindowHotkeys?.open({ path: D(g(O), k) });
                      },
              }),
        (e[22] = k),
        (e[23] = n),
        (e[24] = R),
        (e[25] = p?.label),
        (e[26] = L),
        (e[27] = r),
        (e[28] = O),
        (e[29] = E),
        (e[30] = X))
      : (X = e[30]),
    V(X),
    r == null)
  ) {
    let t;
    return (
      e[31] === C
        ? (t = e[32])
        : ((t = (0, Y.jsx)(N, { to: C, replace: !0 })), (e[31] = C), (e[32] = t)),
      t
    );
  }
  let Z;
  e[33] === c
    ? (Z = e[34])
    : ((Z =
        c == null
          ? null
          : (0, Y.jsxs)(Y.Fragment, {
              children: [
                (0, Y.jsx)(G, { conversationId: c }),
                (0, Y.jsx)(W, { conversationId: c }),
              ],
            })),
      (e[33] = c),
      (e[34] = Z));
  let Q;
  e[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Q = (0, Y.jsx)(`div`, {
        className: `h-full [--padding-panel:calc(var(--padding-panel-base)/2)]`,
        children: (0, Y.jsx)(z, { allowMissingConversation: !0, showUtilityBar: !0 }),
      })),
      (e[35] = Q))
    : (Q = e[35]);
  let $;
  return (
    e[36] === Z
      ? ($ = e[37])
      : (($ = (0, Y.jsxs)(Y.Fragment, { children: [Z, Q] })), (e[36] = Z), (e[37] = $)),
    $
  );
}
var q, J, Y;
e(() => {
  ((q = C()),
    u(),
    r(),
    (J = t(n(), 1)),
    f(),
    c(),
    E(),
    H(),
    U(),
    R(),
    k(),
    S(),
    A(),
    i(),
    F(),
    L(),
    h(),
    p(),
    O(),
    B(),
    (Y = x()));
})();
export { K as HotkeyWindowThreadPage };
//# sourceMappingURL=hotkey-window-thread-page-8dd2de95295e.js.map
