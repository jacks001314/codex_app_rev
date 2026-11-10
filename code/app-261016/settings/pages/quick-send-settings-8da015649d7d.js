import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  DB as r,
  FBt as i,
  LNt as a,
  MB as o,
  OB as s,
  OU as c,
  PBt as l,
  Qst as u,
  Su as d,
  TY as f,
  Vrt as p,
  XOt as m,
  Y3 as h,
  Z3 as g,
  ZSt as _,
  _D as v,
  fD as y,
  gD as b,
  iCt as x,
  jB as S,
  lk as C,
  mD as w,
  nB as T,
  nCt as E,
  okt as D,
  qrt as O,
  rB as k,
  tkt as A,
  uk as j,
  xu as M,
} from "./app-shared-2feb3d4c6fcc.js";
import { cMr as N, eMr as P, nMr as F, sMr as I, vTn as L, xTn as R } from "./app-initial-ad16eaadf81f.js";
function z(e) {
  let n = (0, B.c)(45),
    { side: i } = e,
    a = t(u),
    o = D(),
    s = (0, V.useId)(),
    l = (0, V.useId)(),
    { data: f } = x(P),
    p = x(I),
    m = E(L, `composer.submitInBackground`),
    g = x(N),
    _;
  n[0] === o
    ? (_ = n[1])
    : ((_ = o.formatMessage({
        id: `lighthouseHome.quickSend.settings`,
        defaultMessage: `Quick send settings`,
        description: `Tooltip and accessible name of the button that opens the saved background-send preference in the Work home composer footer.`,
      })),
      (n[0] = o),
      (n[1] = _));
  let v = _,
    k = g ? `composerSmLabel` : `composerSm`,
    j;
  n[2] === g
    ? (j = n[3])
    : ((j = g
        ? (0, H.jsxs)(H.Fragment, {
            children: [
              (0, H.jsx)(r, { asset: d }),
              (0, H.jsx)(A, {
                id: `lighthouseHome.quickSend.button`,
                defaultMessage: `Quick send`,
                description: `Compact label in the Work home composer footer when background sending is enabled. Opens the sending preference.`,
              }),
            ],
          })
        : (0, H.jsx)(c, {})),
      (n[2] = g),
      (n[3] = j));
  let M;
  n[4] !== k || n[5] !== j || n[6] !== v
    ? ((M = (0, H.jsx)(b, {
        asChild: !0,
        children: (0, H.jsx)(h, { "aria-label": v, color: `ghostSecondary`, size: k, children: j }),
      })),
      (n[4] = k),
      (n[5] = j),
      (n[6] = v),
      (n[7] = M))
    : (M = n[7]);
  let F;
  n[8] !== M || n[9] !== v
    ? ((F = (0, H.jsx)(T, { cloneCustomTrigger: !0, tooltipContent: v, children: M })),
      (n[8] = M),
      (n[9] = v),
      (n[10] = F))
    : (F = n[10]);
  let R;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, H.jsx)(A, {
        id: `lighthouseHome.quickSend.label`,
        defaultMessage: `Quick send`,
        description: `Switch label. When enabled, normal sends start new Work tasks in the background without leaving Work home.`,
      })),
      (n[11] = R))
    : (R = n[11]);
  let z;
  n[12] === s
    ? (z = n[13])
    : ((z = (0, H.jsx)(`span`, { id: s, className: `text-sm text-default`, children: R })),
      (n[12] = s),
      (n[13] = z));
  let U;
  n[14] === m
    ? (U = n[15])
    : ((U = m == null ? null : (0, H.jsx)(S, { className: `text-tertiary`, keysLabel: m })),
      (n[14] = m),
      (n[15] = U));
  let W;
  n[16] !== z || n[17] !== U
    ? ((W = (0, H.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [z, U] })),
      (n[16] = z),
      (n[17] = U),
      (n[18] = W))
    : (W = n[18]);
  let G = f == null || p.isPending,
    K;
  n[19] !== o || n[20] !== p || n[21] !== a
    ? ((K = (e) =>
        p.mutate(e, {
          onError: () => {
            a.get(O).warning(
              o.formatMessage({
                id: `lighthouseHome.quickSend.saveError`,
                defaultMessage: `Couldn't update Quick send. Please try again`,
                description: `Error toast when saving the Work home background-send preference fails.`,
              }),
            );
          },
        })),
      (n[19] = o),
      (n[20] = p),
      (n[21] = a),
      (n[22] = K))
    : (K = n[22]);
  let q;
  n[23] !== l || n[24] !== g || n[25] !== s || n[26] !== G || n[27] !== K
    ? ((q = (0, H.jsx)(C, {
        "aria-describedby": l,
        "aria-labelledby": s,
        checked: g,
        disabled: G,
        onChange: K,
        size: `sm`,
      })),
      (n[23] = l),
      (n[24] = g),
      (n[25] = s),
      (n[26] = G),
      (n[27] = K),
      (n[28] = q))
    : (q = n[28]);
  let J;
  n[29] !== q || n[30] !== W
    ? ((J = (0, H.jsxs)(`div`, { className: `flex items-center justify-between gap-3`, children: [W, q] })),
      (n[29] = q),
      (n[30] = W),
      (n[31] = J))
    : (J = n[31]);
  let Y;
  n[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = (0, H.jsx)(A, {
        id: `lighthouseHome.quickSend.description`,
        defaultMessage: `Send in the background. Stay on this page.`,
        description: `Explains that new tasks start without leaving Work home when Quick send is enabled.`,
      })),
      (n[32] = Y))
    : (Y = n[32]);
  let X;
  n[33] === l
    ? (X = n[34])
    : ((X = (0, H.jsx)(`span`, { id: l, className: `text-xs text-secondary`, children: Y })),
      (n[33] = l),
      (n[34] = X));
  let Z;
  n[35] !== J || n[36] !== X
    ? ((Z = (0, H.jsxs)(`div`, { className: `flex flex-col gap-1 p-2`, children: [J, X] })),
      (n[35] = J),
      (n[36] = X),
      (n[37] = Z))
    : (Z = n[37]);
  let Q;
  n[38] !== s || n[39] !== i || n[40] !== Z
    ? ((Q = (0, H.jsx)(w, { align: `end`, "aria-labelledby": s, side: i, size: `menuWide`, children: Z })),
      (n[38] = s),
      (n[39] = i),
      (n[40] = Z),
      (n[41] = Q))
    : (Q = n[41]);
  let $;
  return (
    n[42] !== Q || n[43] !== F
      ? (($ = (0, H.jsxs)(y, { children: [F, Q] })), (n[42] = Q), (n[43] = F), (n[44] = $))
      : ($ = n[44]),
    $
  );
}
var B, V, H;
function U() {
  return (U = e(() => {
    ((B = l()), M(), _(), (V = i()), m(), F(), R(), g(), s(), f(), o(), v(), p(), j(), k(), n(), (H = a()));
  }))();
}
U();
export { z as LighthouseQuickSendSettings };
//# sourceMappingURL=quick-send-settings-8da015649d7d.js.map
