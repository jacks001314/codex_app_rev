import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BE as n,
  Cot as r,
  HE as i,
  IDt as a,
  Ixt as o,
  Iz as s,
  Ll as c,
  Lz as l,
  MO as u,
  Mz as d,
  Nz as f,
  Pxt as p,
  RE as m,
  Rl as h,
  TJ as g,
  UE as _,
  VDt as v,
  Vxt as y,
  cz as b,
  hot as x,
  jDt as S,
  jH as C,
  jO as w,
  lot as T,
  sz as E,
  t3 as D,
  vzt as O,
  wot as k,
  xMt as A,
  yzt as j,
  zxt as M,
} from "./app-shared-bbfeca5e5737.js";
import { NDr as N, RDr as P, fSn as F, jDr as I, lSn as L, zDr as R } from "./app-initial-5851df3f6cb1.js";
function z(e) {
  let c = (0, B.c)(45),
    { side: l } = e,
    u = o(r),
    f = v(),
    p = (0, V.useId)(),
    g = (0, V.useId)(),
    { data: _ } = y(I),
    b = y(P),
    S = M(L, `composer.submitInBackground`),
    T = y(R),
    D;
  c[0] === f
    ? (D = c[1])
    : ((D = f.formatMessage({
        id: `lighthouseHome.quickSend.settings`,
        defaultMessage: `Quick send settings`,
        description: `Tooltip and accessible name of the button that opens the saved background-send preference in the Work home composer footer.`,
      })),
      (c[0] = f),
      (c[1] = D));
  let O = D,
    k = T ? `composerSmLabel` : `composerSm`,
    A;
  c[2] === T
    ? (A = c[3])
    : ((A = T
        ? (0, H.jsxs)(H.Fragment, {
            children: [
              (0, H.jsx)(d, { asset: h }),
              (0, H.jsx)(a, {
                id: `lighthouseHome.quickSend.button`,
                defaultMessage: `Quick send`,
                description: `Compact label in the Work home composer footer when background sending is enabled. Opens the sending preference.`,
              }),
            ],
          })
        : (0, H.jsx)(C, {})),
      (c[2] = T),
      (c[3] = A));
  let j;
  c[4] !== k || c[5] !== A || c[6] !== O
    ? ((j = (0, H.jsx)(i, {
        asChild: !0,
        children: (0, H.jsx)(t, { "aria-label": O, color: `ghostSecondary`, size: k, children: A }),
      })),
      (c[4] = k),
      (c[5] = A),
      (c[6] = O),
      (c[7] = j))
    : (j = c[7]);
  let N;
  c[8] !== j || c[9] !== O
    ? ((N = (0, H.jsx)(E, { cloneCustomTrigger: !0, tooltipContent: O, children: j })),
      (c[8] = j),
      (c[9] = O),
      (c[10] = N))
    : (N = c[10]);
  let F;
  c[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, H.jsx)(a, {
        id: `lighthouseHome.quickSend.label`,
        defaultMessage: `Quick send`,
        description: `Switch label. When enabled, normal sends start new Work tasks in the background without leaving Work home.`,
      })),
      (c[11] = F))
    : (F = c[11]);
  let z;
  c[12] === p
    ? (z = c[13])
    : ((z = (0, H.jsx)(`span`, { id: p, className: `text-sm text-default`, children: F })),
      (c[12] = p),
      (c[13] = z));
  let U;
  c[14] === S
    ? (U = c[15])
    : ((U = S == null ? null : (0, H.jsx)(s, { className: `text-tertiary`, keysLabel: S })),
      (c[14] = S),
      (c[15] = U));
  let W;
  c[16] !== z || c[17] !== U
    ? ((W = (0, H.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [z, U] })),
      (c[16] = z),
      (c[17] = U),
      (c[18] = W))
    : (W = c[18]);
  let G = _ == null || b.isPending,
    K;
  c[19] !== f || c[20] !== b || c[21] !== u
    ? ((K = (e) =>
        b.mutate(e, {
          onError: () => {
            u.get(x).warning(
              f.formatMessage({
                id: `lighthouseHome.quickSend.saveError`,
                defaultMessage: `Couldn't update Quick send. Please try again`,
                description: `Error toast when saving the Work home background-send preference fails.`,
              }),
            );
          },
        })),
      (c[19] = f),
      (c[20] = b),
      (c[21] = u),
      (c[22] = K))
    : (K = c[22]);
  let q;
  c[23] !== g || c[24] !== T || c[25] !== p || c[26] !== G || c[27] !== K
    ? ((q = (0, H.jsx)(w, {
        "aria-describedby": g,
        "aria-labelledby": p,
        checked: T,
        disabled: G,
        onChange: K,
        size: `sm`,
      })),
      (c[23] = g),
      (c[24] = T),
      (c[25] = p),
      (c[26] = G),
      (c[27] = K),
      (c[28] = q))
    : (q = c[28]);
  let J;
  c[29] !== q || c[30] !== W
    ? ((J = (0, H.jsxs)(`div`, { className: `flex items-center justify-between gap-3`, children: [W, q] })),
      (c[29] = q),
      (c[30] = W),
      (c[31] = J))
    : (J = c[31]);
  let Y;
  c[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, H.jsx)(a, {
        id: `lighthouseHome.quickSend.description`,
        defaultMessage: `Send in the background. Stay on this page.`,
        description: `Explains that new tasks start without leaving Work home when Quick send is enabled.`,
      })),
      (c[32] = Y))
    : (Y = c[32]);
  let X;
  c[33] === g
    ? (X = c[34])
    : ((X = (0, H.jsx)(`span`, { id: g, className: `text-xs text-secondary`, children: Y })),
      (c[33] = g),
      (c[34] = X));
  let Z;
  c[35] !== J || c[36] !== X
    ? ((Z = (0, H.jsxs)(`div`, { className: `flex flex-col gap-1 p-2`, children: [J, X] })),
      (c[35] = J),
      (c[36] = X),
      (c[37] = Z))
    : (Z = c[37]);
  let Q;
  c[38] !== p || c[39] !== l || c[40] !== Z
    ? ((Q = (0, H.jsx)(n, { align: `end`, "aria-labelledby": p, side: l, size: `menuWide`, children: Z })),
      (c[38] = p),
      (c[39] = l),
      (c[40] = Z),
      (c[41] = Q))
    : (Q = c[41]);
  let $;
  return (
    c[42] !== Q || c[43] !== N
      ? (($ = (0, H.jsxs)(m, { children: [N, Q] })), (c[42] = Q), (c[43] = N), (c[44] = $))
      : ($ = c[44]),
    $
  );
}
var B, V, H;
function U() {
  return (U = e(() => {
    ((B = O()), c(), p(), (V = j()), S(), N(), F(), D(), f(), g(), l(), _(), T(), u(), b(), k(), (H = A()));
  }))();
}
U();
export { z as LighthouseQuickSendSettings };
//# sourceMappingURL=quick-send-settings-75811ee7c30c.js.map
