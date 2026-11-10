import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  FBt as r,
  HO as i,
  IO as a,
  JO as o,
  KO as s,
  LNt as c,
  LO as l,
  PBt as u,
  Pit as d,
  Qst as f,
  RO as p,
  Rrt as m,
  WO as h,
  XOt as g,
  Y3 as _,
  Z3 as v,
  ZSt as y,
  c5 as b,
  d5 as x,
  jit as S,
  l5 as C,
  qO as w,
  s5 as T,
  tkt as E,
  vD as D,
  yD as O,
  zO as k,
} from "./app-shared-2feb3d4c6fcc.js";
import { IWn as A, aHn as j, nHn as M, xMr as N, yMr as P } from "./app-initial-ad16eaadf81f.js";
function F(e, t, n) {
  let r = {
    checkoutId: t.checkoutId,
    processorEntity: t.processorEntity,
    checkoutPlanType: t.checkoutPlanType,
    checkoutKind: t.checkoutKind,
    entryPoint: t.entryPoint,
    source: t.source,
    isCheckoutModalEnabled: t.isCheckoutModalEnabled,
  };
  try {
    n == null ? N(e, j, r) : N(e, M, { ...r, outcome: n });
  } catch {}
}
function I(e, t) {
  try {
    N(e, x, { action: `enable`, entryPoint: t, source: `standalone_credit_checkout` });
  } catch {}
}
function L(e) {
  return e instanceof S && e.status === 403 && e.errorCode === `checkout_user_mismatch`
    ? `user_mismatch`
    : e instanceof S && e.status === 422
      ? `payment_failed`
      : `other_error`;
}
function R() {
  return (R = e(() => {
    (A(), m(), P(), d());
  }))();
}
function z(e, t) {
  try {
    N(e, T, { action: t, flow: C.CODEX_CREDIT_MANDATE_WARNING_FLOW_CREDIT_PURCHASE });
  } catch {}
}
function B(e) {
  let n = (0, V.c)(24),
    { onClose: r, busy: i, open: o } = e,
    c = i !== void 0 && i,
    u = o === void 0 || o,
    d = t(f),
    m = (0, H.useRef)(!1),
    g = (0, H.useRef)(!1),
    v,
    y;
  (n[0] !== u || n[1] !== d
    ? ((v = () => {
        u && !m.current && ((m.current = !0), z(d, b.CODEX_CREDIT_MANDATE_WARNING_ACTION_SHOWN));
      }),
      (y = [u, d]),
      (n[0] = u),
      (n[1] = d),
      (n[2] = v),
      (n[3] = y))
    : ((v = n[2]), (y = n[3])),
    (0, H.useEffect)(v, y));
  let x;
  n[4] !== c || n[5] !== r || n[6] !== d
    ? ((x = () => {
        c || (g.current || ((g.current = !0), z(d, b.CODEX_CREDIT_MANDATE_WARNING_ACTION_DISMISSED)), r());
      }),
      (n[4] = c),
      (n[5] = r),
      (n[6] = d),
      (n[7] = x))
    : (x = n[7]);
  let S = x,
    C;
  n[8] === S
    ? (C = n[9])
    : ((C = (e) => {
        e || S();
      }),
      (n[8] = S),
      (n[9] = C));
  let T;
  n[10] === S
    ? (T = n[11])
    : ((T = (e) => {
        (e.preventDefault(), e.stopPropagation(), S());
      }),
      (n[10] = S),
      (n[11] = T));
  let O;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, U.jsx)(p, {
        title: (0, U.jsx)(w, {
          children: (0, U.jsx)(E, {
            id: `checkout.creditPurchase.mandateWarningTitle`,
            defaultMessage: `Credits added`,
            description: `Confirmation after a personal credit purchase completes`,
          }),
        }),
      })),
      (n[12] = O))
    : (O = n[12]);
  let A;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, U.jsxs)(k, {
        children: [
          O,
          (0, U.jsx)(D, {
            type: `warning`,
            role: `alert`,
            content: (0, U.jsx)(s, {
              children: (0, U.jsx)(E, {
                id: `checkout.creditPurchase.mandateUnavailable`,
                defaultMessage: `You can continue using this card. Automatic reload may not work, so you may need to return to ChatGPT to authenticate a future payment.`,
                description: `Advisory after a completed credit purchase when the card has no reusable automatic-payment mandate. The purchase succeeded and must not be retried.`,
              }),
            }),
          }),
        ],
      })),
      (n[13] = A))
    : (A = n[13]);
  let j;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, U.jsx)(E, {
        id: `checkout.creditPurchase.mandateWarningDone`,
        defaultMessage: `Done`,
        description: `Dismiss the missing-mandate advisory after a completed credit purchase without making another payment`,
      })),
      (n[14] = j))
    : (j = n[14]);
  let M;
  n[15] === c
    ? (M = n[16])
    : ((M = (0, U.jsx)(k, {
        children: (0, U.jsx)(l, {
          children: (0, U.jsx)(_, { type: `submit`, color: `primary`, disabled: c, children: j }),
        }),
      })),
      (n[15] = c),
      (n[16] = M));
  let N;
  n[17] !== M || n[18] !== T
    ? ((N = (0, U.jsxs)(a, { as: `form`, className: `select-none`, onSubmit: T, children: [A, M] })),
      (n[17] = M),
      (n[18] = T),
      (n[19] = N))
    : (N = n[19]);
  let P;
  return (
    n[20] !== u || n[21] !== N || n[22] !== C
      ? ((P = (0, U.jsx)(h, { open: u, size: `compact`, showDialogClose: !1, onOpenChange: C, children: N })),
        (n[20] = u),
        (n[21] = N),
        (n[22] = C),
        (n[23] = P))
      : (P = n[23]),
    P
  );
}
var V, H, U;
function W() {
  return (W = e(() => {
    ((V = u()), m(), y(), (H = r()), g(), O(), v(), o(), i(), P(), n(), (U = c()));
  }))();
}
export { F as a, R as i, W as n, I as o, L as r, B as t };
//# sourceMappingURL=mandate-warning-dialog-589b511171fe.js.map
