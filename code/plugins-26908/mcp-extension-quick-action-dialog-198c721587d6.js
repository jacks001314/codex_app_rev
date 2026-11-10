import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import { t as n } from "./react-d6ffadc57208.js";
import { t as r } from "./compiler-runtime-292acb85cdd3.js";
import {
  $Rt as i,
  C6t as a,
  H2 as o,
  JO as s,
  Sft as c,
  T6t as l,
  Tft as u,
  V2 as d,
  YO as f,
  izt as p,
  wft as m,
} from "./app-initial-bcc2ff475eb6.js";
import { t as h } from "./jsx-runtime-a96621a2647a.js";
import { eE as g, sE as _ } from "./app-primary-b36a719dba75.js";
import { sa as v, t as y } from "./src-996ff3571e1f.js";
import { r as b, t as x } from "./tooltip-779782db7c30.js";
import { n as S, t as C } from "./button-6325b3939f12.js";
import { n as w, t as T } from "./mcp-extension-view-frame-672ca3de66f6.js";
function E(e) {
  let t = (0, k.c)(42),
    { action: n, pending: r, quickActionView: a, onOpen: o, view: u } = e,
    f = l(i),
    [p] = (0, A.useState)(O),
    [h, g] = (0, A.useState)(!1),
    [v, y] = (0, A.useState)(null),
    [b, S] = (0, A.useState)(),
    w = (0, A.useRef)(0),
    E,
    M;
  (t[0] !== p || t[1] !== f
    ? ((E = () => () => {
        _(f, p);
      }),
      (M = [p, f]),
      (t[0] = p),
      (t[1] = f),
      (t[2] = E),
      (t[3] = M))
    : ((E = t[2]), (M = t[3])),
    (0, A.useLayoutEffect)(E, M));
  let N;
  t[4] !== o || t[5] !== r || t[6] !== b
    ? ((N = (e) => {
        if ((g(e), e && !r)) {
          S(D);
          let e = (w.current += 1);
          o().then((t) => {
            w.current === e && (t == null ? (b ?? g(!1)) : S(t));
          });
        }
      }),
      (t[4] = o),
      (t[5] = r),
      (t[6] = b),
      (t[7] = N))
    : (N = t[7]);
  let P = N,
    F = n.title,
    I = r && b === void 0,
    L;
  t[8] === n ? (L = t[9]) : ((L = d(n)), (t[8] = n), (t[9] = L));
  let R = u.tool._meta?.[`openai/iconStyle`] === `monochrome`,
    z;
  t[10] !== L || t[11] !== R
    ? ((z = (0, j.jsx)(s, { icon: L, monochrome: R })), (t[10] = L), (t[11] = R), (t[12] = z))
    : (z = t[12]);
  let B;
  t[13] !== n.title || t[14] !== I || t[15] !== z
    ? ((B = (0, j.jsx)(C, {
        "aria-label": F,
        color: `ghost`,
        disabled: I,
        size: `compact`,
        uniform: !0,
        children: z,
      })),
      (t[13] = n.title),
      (t[14] = I),
      (t[15] = z),
      (t[16] = B))
    : (B = t[16]);
  let V = B,
    H;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = { "aria-describedby": void 0 }), (t[17] = H))
    : (H = t[17]);
  let U;
  t[18] !== n.title || t[19] !== V
    ? ((U = (0, j.jsx)(x, {
        tooltipContent: n.title,
        cloneCustomTrigger: !0,
        delayOpen: !0,
        children: V,
      })),
      (t[18] = n.title),
      (t[19] = V),
      (t[20] = U))
    : (U = t[20]);
  let W;
  t[21] === n.title
    ? (W = t[22])
    : ((W = (0, j.jsx)(m, { className: `sr-only`, children: n.title })),
      (t[21] = n.title),
      (t[22] = W));
  let G;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = (0, j.jsx)(`div`, {
        ref: y,
        "data-mcp-app-portal-target": `true`,
        className: `relative max-h-[calc(100dvh/var(--codex-window-zoom)-6rem)] min-h-0 overflow-y-auto`,
      })),
      (t[23] = G))
    : (G = t[23]);
  let K;
  t[24] !== P || t[25] !== h || t[26] !== U || t[27] !== W
    ? ((K = (0, j.jsxs)(c, {
        open: h,
        onOpenChange: P,
        size: `compact`,
        dialogCloseClassName: `z-10`,
        contentProps: H,
        triggerContent: U,
        children: [W, G],
      })),
      (t[24] = P),
      (t[25] = h),
      (t[26] = U),
      (t[27] = W),
      (t[28] = K))
    : (K = t[28]);
  let q;
  t[29] !== n.target ||
  t[30] !== P ||
  t[31] !== v ||
  t[32] !== p ||
  t[33] !== h ||
  t[34] !== a ||
  t[35] !== b
    ? ((q =
        b === void 0
          ? null
          : (0, j.jsx)(T, {
              autoFocus: h && v != null,
              contentContainer: v,
              fullSurface: !1,
              mcpAppId: p,
              onRequestClose: () => P(!1),
              toolResult: b,
              toolArguments: n.target.arguments,
              useHostThread: !0,
              view: a,
            })),
      (t[29] = n.target),
      (t[30] = P),
      (t[31] = v),
      (t[32] = p),
      (t[33] = h),
      (t[34] = a),
      (t[35] = b),
      (t[36] = q))
    : (q = t[36]);
  let J;
  t[37] === q
    ? (J = t[38])
    : ((J = (0, j.jsx)(`div`, {
        className: `pointer-events-none invisible fixed w-96`,
        inert: !0,
        children: q,
      })),
      (t[37] = q),
      (t[38] = J));
  let Y;
  return (
    t[39] !== K || t[40] !== J
      ? ((Y = (0, j.jsxs)(j.Fragment, { children: [K, J] })), (t[39] = K), (t[40] = J), (t[41] = Y))
      : (Y = t[41]),
    Y
  );
}
function D(e) {
  return e ?? null;
}
function O() {
  return v(`quick-action:${crypto.randomUUID()}`);
}
var k, A, j;
e(() => {
  ((k = r()), a(), y(), (A = t(n(), 1)), S(), u(), b(), g(), p(), o(), w(), f(), (j = h()));
})();
export { E as McpExtensionQuickActionDialog };
//# sourceMappingURL=mcp-extension-quick-action-dialog-198c721587d6.js.map
