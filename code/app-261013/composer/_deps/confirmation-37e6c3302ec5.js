import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  IDt as n,
  Rnt as r,
  _O as i,
  cO as a,
  fO as o,
  gO as s,
  jDt as c,
  lO as l,
  mO as u,
  oO as d,
  r9 as f,
  sO as p,
  t3 as m,
  vO as h,
  vzt as g,
  xMt as _,
  yzt as v,
} from "./app-shared-bbfeca5e5737.js";
import { i as y, n as b, r as x, t as S } from "./messages-97c9f02949a5.js";
function C(e) {
  let r = (0, w.c)(44),
    { findingsUrl: o, learnMoreUrl: c, onContinue: m, onClose: h, onCloseAutoFocus: g, onInteraction: _ } = e,
    [v, y] = (0, T.useState)(!1),
    [S, C] = (0, T.useState)(!1),
    D;
  r[0] !== h || r[1] !== _
    ? ((D = () => {
        (_?.(f.CODEX_PRECAUTION_UX_ACTION_DIALOG_DISMISSED), h());
      }),
      (r[0] = h),
      (r[1] = _),
      (r[2] = D))
    : (D = r[2]);
  let O = D,
    k;
  r[3] === g
    ? (k = r[4])
    : ((k = {
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), g?.());
        },
      }),
      (r[3] = g),
      (r[4] = k));
  let A;
  r[5] !== O || r[6] !== v
    ? ((A = (e) => {
        !e && !v && O();
      }),
      (r[5] = O),
      (r[6] = v),
      (r[7] = A))
    : (A = r[7]);
  let j;
  r[8] !== v || r[9] !== h || r[10] !== m || r[11] !== _
    ? ((j = (e) => {
        (e.preventDefault(),
          !v &&
            (y(!0),
            C(!1),
            _?.(f.CODEX_PRECAUTION_UX_ACTION_DIALOG_CONTINUE_CLICKED),
            m()
              .then(h)
              .catch(() => C(!0))
              .finally(() => y(!1))));
      }),
      (r[8] = v),
      (r[9] = h),
      (r[10] = m),
      (r[11] = _),
      (r[12] = j))
    : (j = r[12]);
  let M;
  r[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, E.jsx)(i, {
        children: (0, E.jsx)(n, {
          id: `orbit.safety.confirmation.title`,
          defaultMessage: `Confirm to continue`,
          description: `Title of the final confirmation dialog before resuming an assistant paused by the misalignment monitor.`,
        }),
      })),
      (r[13] = M))
    : (M = r[13]);
  let N, P;
  r[14] === _
    ? ((N = r[15]), (P = r[16]))
    : ((N = () => _?.(f.CODEX_PRECAUTION_UX_ACTION_BANNER_REVIEW_CLICKED)),
      (P = () => _?.(f.CODEX_PRECAUTION_UX_ACTION_DIALOG_LEARN_MORE_CLICKED)),
      (r[14] = _),
      (r[15] = N),
      (r[16] = P));
  let F;
  r[17] !== o || r[18] !== c || r[19] !== N || r[20] !== P
    ? ((F = (0, E.jsx)(a, {
        title: M,
        subtitle: (0, E.jsx)(s, {
          children: (0, E.jsx)(x, {
            safetyFlag: `misalignment_monitor`,
            findingsUrl: o,
            learnMoreUrl: c,
            confirmation: !0,
            onFindingsClick: N,
            onLearnMoreClick: P,
          }),
        }),
      })),
      (r[17] = o),
      (r[18] = c),
      (r[19] = N),
      (r[20] = P),
      (r[21] = F))
    : (F = r[21]);
  let I;
  r[22] === S
    ? (I = r[23])
    : ((I = S && (0, E.jsx)(`p`, { role: `alert`, children: b.resumeFailed })), (r[22] = S), (r[23] = I));
  let L;
  r[24] !== F || r[25] !== I
    ? ((L = (0, E.jsxs)(l, { children: [F, I] })), (r[24] = F), (r[25] = I), (r[26] = L))
    : (L = r[26]);
  let R;
  r[27] !== O || r[28] !== v
    ? ((R = (0, E.jsx)(t, {
        color: `secondary`,
        type: `button`,
        disabled: v,
        onClick: O,
        children: b.cancel,
      })),
      (r[27] = O),
      (r[28] = v),
      (r[29] = R))
    : (R = r[29]);
  let z;
  r[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, E.jsx)(n, {
        id: `orbit.safety.confirmation.acknowledge`,
        defaultMessage: `I understand`,
        description: `Final confirmation button that resumes the assistant after the user acknowledges reviewing the misalignment safety findings. Cancel returns without resuming.`,
      })),
      (r[30] = z))
    : (z = r[30]);
  let B;
  r[31] === v
    ? (B = r[32])
    : ((B = (0, E.jsx)(t, { autoFocus: !0, color: `primary`, type: `submit`, disabled: v, children: z })),
      (r[31] = v),
      (r[32] = B));
  let V;
  r[33] !== R || r[34] !== B
    ? ((V = (0, E.jsx)(l, { children: (0, E.jsxs)(p, { children: [R, B] }) })),
      (r[33] = R),
      (r[34] = B),
      (r[35] = V))
    : (V = r[35]);
  let H;
  r[36] !== L || r[37] !== V || r[38] !== j
    ? ((H = (0, E.jsxs)(d, { as: `form`, className: `select-none`, onSubmit: j, children: [L, V] })),
      (r[36] = L),
      (r[37] = V),
      (r[38] = j),
      (r[39] = H))
    : (H = r[39]);
  let U;
  return (
    r[40] !== H || r[41] !== k || r[42] !== A
      ? ((U = (0, E.jsx)(u, { open: !0, size: `compact`, contentProps: k, onOpenChange: A, children: H })),
        (r[40] = H),
        (r[41] = k),
        (r[42] = A),
        (r[43] = U))
      : (U = r[43]),
    U
  );
}
var w, T, E;
function D() {
  return (D = e(() => {
    ((w = g()), r(), (T = v()), c(), m(), h(), o(), y(), S(), (E = _()));
  }))();
}
D();
export { C as OrbitSafetyConfirmation };
//# sourceMappingURL=confirmation-37e6c3302ec5.js.map
