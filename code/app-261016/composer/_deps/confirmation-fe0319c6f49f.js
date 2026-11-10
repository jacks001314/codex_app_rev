import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  HO as n,
  IO as r,
  JO as i,
  KO as a,
  LNt as o,
  LO as s,
  PBt as c,
  RO as l,
  Rrt as u,
  WO as d,
  XOt as f,
  Y3 as p,
  Z3 as m,
  qO as h,
  ret as g,
  tkt as _,
  zO as v,
} from "./app-shared-2feb3d4c6fcc.js";
import { i as y, n as b, r as x, t as S } from "./messages-65be55433ec4.js";
function C(e) {
  let t = (0, w.c)(44),
    { findingsUrl: n, learnMoreUrl: i, onContinue: o, onClose: c, onCloseAutoFocus: u, onInteraction: f } = e,
    [m, y] = (0, T.useState)(!1),
    [S, C] = (0, T.useState)(!1),
    D;
  t[0] !== c || t[1] !== f
    ? ((D = () => {
        (f?.(g.CODEX_PRECAUTION_UX_ACTION_DIALOG_DISMISSED), c());
      }),
      (t[0] = c),
      (t[1] = f),
      (t[2] = D))
    : (D = t[2]);
  let O = D,
    k;
  t[3] === u
    ? (k = t[4])
    : ((k = {
        onCloseAutoFocus: (e) => {
          (e.preventDefault(), u?.());
        },
      }),
      (t[3] = u),
      (t[4] = k));
  let A;
  t[5] !== O || t[6] !== m
    ? ((A = (e) => {
        !e && !m && O();
      }),
      (t[5] = O),
      (t[6] = m),
      (t[7] = A))
    : (A = t[7]);
  let j;
  t[8] !== m || t[9] !== c || t[10] !== o || t[11] !== f
    ? ((j = (e) => {
        (e.preventDefault(),
          !m &&
            (y(!0),
            C(!1),
            f?.(g.CODEX_PRECAUTION_UX_ACTION_DIALOG_CONTINUE_CLICKED),
            o()
              .then(c)
              .catch(() => C(!0))
              .finally(() => y(!1))));
      }),
      (t[8] = m),
      (t[9] = c),
      (t[10] = o),
      (t[11] = f),
      (t[12] = j))
    : (j = t[12]);
  let M;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, E.jsx)(h, {
        children: (0, E.jsx)(_, {
          id: `orbit.safety.confirmation.title`,
          defaultMessage: `Confirm to continue`,
          description: `Title of the final confirmation dialog before resuming an assistant paused by the misalignment monitor.`,
        }),
      })),
      (t[13] = M))
    : (M = t[13]);
  let N, P;
  t[14] === f
    ? ((N = t[15]), (P = t[16]))
    : ((N = () => f?.(g.CODEX_PRECAUTION_UX_ACTION_BANNER_REVIEW_CLICKED)),
      (P = () => f?.(g.CODEX_PRECAUTION_UX_ACTION_DIALOG_LEARN_MORE_CLICKED)),
      (t[14] = f),
      (t[15] = N),
      (t[16] = P));
  let F;
  t[17] !== n || t[18] !== i || t[19] !== N || t[20] !== P
    ? ((F = (0, E.jsx)(l, {
        title: M,
        subtitle: (0, E.jsx)(a, {
          children: (0, E.jsx)(x, {
            safetyFlag: `misalignment_monitor`,
            findingsUrl: n,
            learnMoreUrl: i,
            confirmation: !0,
            onFindingsClick: N,
            onLearnMoreClick: P,
          }),
        }),
      })),
      (t[17] = n),
      (t[18] = i),
      (t[19] = N),
      (t[20] = P),
      (t[21] = F))
    : (F = t[21]);
  let I;
  t[22] === S
    ? (I = t[23])
    : ((I = S && (0, E.jsx)(`p`, { role: `alert`, children: b.resumeFailed })), (t[22] = S), (t[23] = I));
  let L;
  t[24] !== F || t[25] !== I
    ? ((L = (0, E.jsxs)(v, { children: [F, I] })), (t[24] = F), (t[25] = I), (t[26] = L))
    : (L = t[26]);
  let R;
  t[27] !== O || t[28] !== m
    ? ((R = (0, E.jsx)(p, {
        color: `secondary`,
        type: `button`,
        disabled: m,
        onClick: O,
        children: b.cancel,
      })),
      (t[27] = O),
      (t[28] = m),
      (t[29] = R))
    : (R = t[29]);
  let z;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, E.jsx)(_, {
        id: `orbit.safety.confirmation.acknowledge`,
        defaultMessage: `I understand`,
        description: `Final confirmation button that resumes the assistant after the user acknowledges reviewing the misalignment safety findings. Cancel returns without resuming.`,
      })),
      (t[30] = z))
    : (z = t[30]);
  let B;
  t[31] === m
    ? (B = t[32])
    : ((B = (0, E.jsx)(p, { autoFocus: !0, color: `primary`, type: `submit`, disabled: m, children: z })),
      (t[31] = m),
      (t[32] = B));
  let V;
  t[33] !== R || t[34] !== B
    ? ((V = (0, E.jsx)(v, { children: (0, E.jsxs)(s, { children: [R, B] }) })),
      (t[33] = R),
      (t[34] = B),
      (t[35] = V))
    : (V = t[35]);
  let H;
  t[36] !== L || t[37] !== V || t[38] !== j
    ? ((H = (0, E.jsxs)(r, { as: `form`, className: `select-none`, onSubmit: j, children: [L, V] })),
      (t[36] = L),
      (t[37] = V),
      (t[38] = j),
      (t[39] = H))
    : (H = t[39]);
  let U;
  return (
    t[40] !== H || t[41] !== k || t[42] !== A
      ? ((U = (0, E.jsx)(d, { open: !0, size: `compact`, contentProps: k, onOpenChange: A, children: H })),
        (t[40] = H),
        (t[41] = k),
        (t[42] = A),
        (t[43] = U))
      : (U = t[43]),
    U
  );
}
var w, T, E;
function D() {
  return (D = e(() => {
    ((w = c()), u(), (T = t()), f(), m(), i(), n(), y(), S(), (E = o()));
  }))();
}
D();
export { C as OrbitSafetyConfirmation };
//# sourceMappingURL=confirmation-fe0319c6f49f.js.map
