import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  Cot as n,
  Cwt as r,
  Cz as i,
  IDt as a,
  Ixt as o,
  JR as s,
  Mz as c,
  Nz as l,
  Pxt as u,
  Rnt as d,
  Swt as f,
  Tz as p,
  VDt as m,
  Vxt as h,
  XD as g,
  YD as _,
  YR as v,
  _Mt as y,
  _O as b,
  _wt as x,
  aSt as S,
  cO as C,
  dwt as w,
  fO as T,
  gMt as E,
  gwt as D,
  hot as O,
  jDt as k,
  lO as A,
  lot as j,
  mO as M,
  ns as N,
  oO as P,
  oSt as F,
  t3 as I,
  ts as L,
  uet as R,
  uwt as z,
  vO as B,
  vzt as V,
  wot as H,
  xMt as U,
  yzt as W,
} from "./app-shared-bbfeca5e5737.js";
import {
  AMr as ee,
  B2t as te,
  BKt as ne,
  CKt as re,
  CPt as ie,
  Fin as G,
  G2t as ae,
  Hin as oe,
  INt as K,
  LNt as se,
  MGt as ce,
  MPt as q,
  NGt as le,
  NHn as J,
  OGt as ue,
  PHn as Y,
  PPt as de,
  QDr as fe,
  RNt as pe,
  S4t as me,
  SGt as he,
  TGt as ge,
  W2t as _e,
  XDr as ve,
  _4t as ye,
  aDr as be,
  eDr as xe,
  eNt as Se,
  g4t as Ce,
  h1 as we,
  hGt as Te,
  hMt as Ee,
  hPr as De,
  m1 as Oe,
  mGt as ke,
  mMt as Ae,
  nNt as je,
  oDr as Me,
  qin as Ne,
  rNt as Pe,
  tNt as Fe,
  x4t as Ie,
  z2t as Le,
  zNt as Re,
  zin as ze,
} from "./app-initial-5851df3f6cb1.js";
import { n as Be, t as Ve } from "./redemption-656a3e1c2834.js";
function He(e) {
  let n = (0, Ue.c)(50),
    {
      activeCreditId: r,
      credit: i,
      disabled: o,
      hasTopBorder: s,
      isConfirming: c,
      isExiting: l,
      onCreditHideComplete: u,
      onResetCredit: d,
    } = e,
    f = m(),
    p = (0, We.useId)(),
    h = (0, We.useId)(),
    g = (0, We.useId)(),
    _ = v(),
    y;
  n[0] !== i || n[1] !== f
    ? ((y =
        i?.expires_at == null
          ? null
          : f.formatDate(i.expires_at, {
              day: `numeric`,
              hour: `numeric`,
              minute: `2-digit`,
              month: `numeric`,
              timeZoneName: `short`,
            })),
      (n[0] = i),
      (n[1] = f),
      (n[2] = y))
    : (y = n[2]);
  let b = y,
    S = i?.id,
    C;
  n[3] === l
    ? (C = n[4])
    : ((C = l ? { opacity: 0, scale: 0.985, y: -4 } : { opacity: 1, scale: 1, y: 0 }),
      (n[3] = l),
      (n[4] = C));
  let w;
  n[5] === _ ? (w = n[6]) : ((w = _ ? { duration: 0 } : Ge), (n[5] = _), (n[6] = w));
  let T;
  n[7] !== l || n[8] !== u
    ? ((T = () => {
        l && u();
      }),
      (n[7] = l),
      (n[8] = u),
      (n[9] = T))
    : (T = n[9]);
  let D = s && `border-t border-default`,
    O;
  n[10] === D
    ? (O = n[11])
    : ((O = E(`grid min-h-[68px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 text-start`, D)),
      (n[10] = D),
      (n[11] = O));
  let k;
  n[12] === i?.title
    ? (k = n[13])
    : ((k =
        i?.title?.trim() ||
        (0, X.jsx)(a, {
          id: `codex.rateLimitResetPromptModal.resetCreditFallback`,
          defaultMessage: `Usage reset`,
          description: `Fallback label for a Codex usage reset`,
        })),
      (n[12] = i?.title),
      (n[13] = k));
  let A;
  n[14] !== h || n[15] !== k
    ? ((A = (0, X.jsx)(`div`, { id: h, className: `truncate font-medium text-default`, children: k })),
      (n[14] = h),
      (n[15] = k),
      (n[16] = A))
    : (A = n[16]);
  let j;
  n[17] !== g || n[18] !== b
    ? ((j =
        b == null
          ? null
          : (0, X.jsx)(`div`, {
              id: g,
              className: `truncate text-secondary`,
              children: (0, X.jsx)(a, {
                id: `codex.rateLimitResetPromptModal.resetExpiresWithTimeZone`,
                defaultMessage: `Expires {date}`,
                description: `Expiration date, time, and time zone shown for a Codex usage reset`,
                values: { date: b },
              }),
            })),
      (n[17] = g),
      (n[18] = b),
      (n[19] = j))
    : (j = n[19]);
  let M;
  n[20] !== A || n[21] !== j
    ? ((M = (0, X.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-0.5 text-sm leading-5`,
        children: [A, j],
      })),
      (n[20] = A),
      (n[21] = j),
      (n[22] = M))
    : (M = n[22]);
  let N = b == null ? void 0 : g,
    P = `${p} ${h}`,
    F = !_ && `transition-transform duration-basic ease-out active:scale-[0.98]`,
    I;
  n[23] === F
    ? (I = n[24])
    : ((I = E(`justify-center border-transparent !text-sm !leading-5 font-medium`, F)),
      (n[23] = F),
      (n[24] = I));
  let L = r === (S ?? `automatic`),
    R;
  n[25] !== S || n[26] !== d
    ? ((R = () => {
        d(S);
      }),
      (n[25] = S),
      (n[26] = d),
      (n[27] = R))
    : (R = n[27]);
  let z;
  n[28] === c
    ? (z = n[29])
    : ((z = c
        ? (0, X.jsx)(a, {
            id: `codex.rateLimitResetPromptModal.confirmReset`,
            defaultMessage: `Confirm`,
            description: `Button label confirming the redemption of one Codex usage reset`,
          })
        : (0, X.jsx)(a, {
            id: `codex.rateLimitResetPromptModal.useReset`,
            defaultMessage: `Use reset`,
            description: `Button label for redeeming one Codex usage reset`,
          })),
      (n[28] = c),
      (n[29] = z));
  let B;
  n[30] !== p || n[31] !== z
    ? ((B = (0, X.jsx)(`span`, { id: p, children: z })), (n[30] = p), (n[31] = z), (n[32] = B))
    : (B = n[32]);
  let V;
  n[33] !== o || n[34] !== N || n[35] !== P || n[36] !== I || n[37] !== L || n[38] !== R || n[39] !== B
    ? ((V = (0, X.jsx)(t, {
        "aria-describedby": N,
        "aria-labelledby": P,
        className: I,
        color: `primary`,
        disabled: o,
        loading: L,
        onClick: R,
        size: `toolbar`,
        children: B,
      })),
      (n[33] = o),
      (n[34] = N),
      (n[35] = P),
      (n[36] = I),
      (n[37] = L),
      (n[38] = R),
      (n[39] = B),
      (n[40] = V))
    : (V = n[40]);
  let H;
  n[41] !== M || n[42] !== V || n[43] !== O
    ? ((H = (0, X.jsxs)(`div`, { className: O, children: [M, V] })),
      (n[41] = M),
      (n[42] = V),
      (n[43] = O),
      (n[44] = H))
    : (H = n[44]);
  let U;
  return (
    n[45] !== C || n[46] !== H || n[47] !== w || n[48] !== T
      ? ((U = (0, X.jsx)(x.div, {
          initial: !1,
          animate: C,
          transition: w,
          onAnimationComplete: T,
          className: `origin-top`,
          children: H,
        })),
        (n[45] = C),
        (n[46] = H),
        (n[47] = w),
        (n[48] = T),
        (n[49] = U))
      : (U = n[49]),
    U
  );
}
var Ue, We, X, Ge;
function Ke() {
  return (Ke = e(() => {
    ((Ue = V()),
      y(),
      D(),
      (We = W()),
      k(),
      I(),
      s(),
      (X = U()),
      (Ge = { duration: 0.18, ease: [0.3, 0, 1, 1] }));
  }))();
}
function qe(e) {
  let t = (0, Je.c)(48),
    {
      activeCreditId: n,
      availableCount: r,
      credits: i,
      disabled: o,
      exitingCreditId: s,
      isLoading: c,
      isOpen: l,
      onCreditHideComplete: u,
      onOpenChange: d,
      onPanelExitComplete: p,
      onResetCredit: m,
      retryCreditId: h,
    } = e,
    g = (0, Ye.useId)(),
    y = v(),
    b = (0, Ye.useRef)(null),
    [S, C] = (0, Ye.useState)(null),
    w;
  t[0] !== S || t[1] !== m
    ? ((w = async (e) => {
        let t = e ?? `automatic`;
        if (S !== t) {
          C(t);
          return;
        }
        (C(null), await m(e));
      }),
      (t[0] = S),
      (t[1] = m),
      (t[2] = w))
    : (w = t[2]);
  let T = w,
    D;
  t[3] === o
    ? (D = t[4])
    : ((D = (e) => {
        o || e.button !== 0 || e.preventDefault();
      }),
      (t[3] = o),
      (t[4] = D));
  let O;
  t[5] !== o || t[6] !== l || t[7] !== d
    ? ((O = (e) => {
        o || (l && C(null), d(!l), e.detail > 0 && e.currentTarget.blur());
      }),
      (t[5] = o),
      (t[6] = l),
      (t[7] = d),
      (t[8] = O))
    : (O = t[8]);
  let k;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Z.jsx)(`span`, {
        className: `truncate`,
        children: (0, Z.jsx)(a, {
          id: `codex.rateLimitResetPromptModal.usageLimitResets`,
          defaultMessage: `Usage limit resets`,
          description: `Expandable section label for Codex usage limit resets`,
        }),
      })),
      (t[9] = k))
    : (k = t[9]);
  let A;
  t[10] === r
    ? (A = t[11])
    : ((A = (0, Z.jsx)(`span`, {
        className: `rounded-full bg-[var(--green-50)] px-2.5 py-0.5 text-[var(--green-700)] dark:bg-[var(--green-800)] dark:text-[var(--green-50)]`,
        children: (0, Z.jsx)(a, {
          id: `codex.rateLimitResetPromptModal.availableResetCount`,
          defaultMessage: `{count} available`,
          description: `Badge showing the number of Codex usage limit resets available`,
          values: { count: r },
        }),
      })),
      (t[10] = r),
      (t[11] = A));
  let j = !y && `transition-transform`,
    M = l && `rotate-180`,
    N;
  t[12] !== j || t[13] !== M
    ? ((N = E(`icon-2xs shrink-0 text-secondary`, j, M)), (t[12] = j), (t[13] = M), (t[14] = N))
    : (N = t[14]);
  let P;
  t[15] === N ? (P = t[16]) : ((P = (0, Z.jsx)(_, { className: N })), (t[15] = N), (t[16] = P));
  let F;
  t[17] !== A || t[18] !== P
    ? ((F = (0, Z.jsxs)(`span`, { className: `flex shrink-0 items-center gap-3`, children: [A, P] })),
      (t[17] = A),
      (t[18] = P),
      (t[19] = F))
    : (F = t[19]);
  let I;
  t[20] !== o || t[21] !== l || t[22] !== g || t[23] !== F || t[24] !== D || t[25] !== O
    ? ((I = (0, Z.jsxs)(`button`, {
        ref: b,
        type: `button`,
        "aria-controls": g,
        "aria-disabled": o,
        "aria-expanded": l,
        className: `flex h-12 w-full cursor-interaction items-center justify-between gap-4 border-0 bg-transparent px-4 text-start text-base leading-5 font-medium text-default shadow-none outline-none hover:bg-text/5 focus-visible:bg-text/5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset aria-disabled:cursor-not-allowed aria-disabled:opacity-60`,
        onMouseDown: D,
        onClick: O,
        children: [k, F],
      })),
      (t[20] = o),
      (t[21] = l),
      (t[22] = g),
      (t[23] = F),
      (t[24] = D),
      (t[25] = O),
      (t[26] = I))
    : (I = t[26]);
  let L;
  t[27] === p
    ? (L = t[28])
    : ((L = () => {
        (p(), b.current?.focus());
      }),
      (t[27] = p),
      (t[28] = L));
  let R;
  t[29] !== n ||
  t[30] !== S ||
  t[31] !== i ||
  t[32] !== o ||
  t[33] !== s ||
  t[34] !== T ||
  t[35] !== c ||
  t[36] !== l ||
  t[37] !== u ||
  t[38] !== g ||
  t[39] !== y ||
  t[40] !== h
    ? ((R = l
        ? (0, Z.jsx)(
            x.div,
            {
              id: g,
              className: `overflow-hidden`,
              initial: !y && { height: 0, opacity: 0 },
              animate: { height: `auto`, opacity: 1 },
              exit: y ? { opacity: 0 } : { height: 0, opacity: 0 },
              transition: y ? { duration: 0 } : Xe,
              children: c
                ? (0, Z.jsx)(`div`, {
                    className: `flex min-h-[68px] items-center px-4 text-sm text-secondary`,
                    children: (0, Z.jsx)(a, {
                      id: `codex.rateLimitResetPromptModal.loadingResets`,
                      defaultMessage: `Loading resets`,
                      description: `Loading state for available Codex usage resets`,
                    }),
                  })
                : i != null && i.length > 0
                  ? i.map((e, t) =>
                      (0, Z.jsx)(
                        He,
                        {
                          activeCreditId: n,
                          credit: e,
                          disabled: o || (h != null && h !== e.id),
                          hasTopBorder: t > 0,
                          isConfirming: e.id === S,
                          isExiting: e.id === s,
                          onCreditHideComplete: u,
                          onResetCredit: T,
                        },
                        e.id,
                      ),
                    )
                  : (0, Z.jsx)(He, {
                      activeCreditId: n,
                      credit: null,
                      disabled: o || (h != null && h !== `automatic`),
                      hasTopBorder: !1,
                      isConfirming: S === `automatic`,
                      isExiting: s === `automatic`,
                      onCreditHideComplete: u,
                      onResetCredit: T,
                    }),
            },
            `available-reset-credits`,
          )
        : null),
      (t[29] = n),
      (t[30] = S),
      (t[31] = i),
      (t[32] = o),
      (t[33] = s),
      (t[34] = T),
      (t[35] = c),
      (t[36] = l),
      (t[37] = u),
      (t[38] = g),
      (t[39] = y),
      (t[40] = h),
      (t[41] = R))
    : (R = t[41]);
  let z;
  t[42] !== L || t[43] !== R
    ? ((z = (0, Z.jsx)(f, { initial: !1, onExitComplete: L, children: R })),
      (t[42] = L),
      (t[43] = R),
      (t[44] = z))
    : (z = t[44]);
  let B;
  return (
    t[45] !== I || t[46] !== z
      ? ((B = (0, Z.jsxs)(`div`, {
          className: `overflow-hidden rounded-2xl border border-default bg-transparent`,
          children: [I, z],
        })),
        (t[45] = I),
        (t[46] = z),
        (t[47] = B))
      : (B = t[47]),
    B
  );
}
var Je, Ye, Z, Xe;
function Ze() {
  return (Ze = e(() => {
    ((Je = V()),
      y(),
      r(),
      D(),
      (Ye = W()),
      k(),
      s(),
      g(),
      Ke(),
      (Z = U()),
      (Xe = { duration: 0.3, ease: [0.4, 0, 0.2, 1] }));
  }))();
}
var Qe, $e;
function et() {
  return (et = e(() => {
    (u(),
      J(),
      H(),
      (Qe = S(n, (e) => null)),
      ($e = F(n, ({ get: e }) => {
        let { data: t, dataUpdatedAt: n } = e(Y),
          r = e(Qe, t?.account_id ?? null);
        return r != null && n <= r;
      })));
  }))();
}
function tt(e) {
  let t = (0, rt.c)(44),
    { className: n, isResetFillActive: r, resetFillAnimation: i, usageWindow: o } = e,
    s = m(),
    c;
  t[0] !== r || t[1] !== o.remainingPercent
    ? ((c = r ? 100 : Math.round(o.remainingPercent)), (t[0] = r), (t[1] = o.remainingPercent), (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] === o.remainingPercent
    ? (u = t[4])
    : ((u = (e) => o.remainingPercent + (100 - o.remainingPercent) * e),
      (t[3] = o.remainingPercent),
      (t[4] = u));
  let d = w(i.progress, u),
    f;
  t[5] !== r || t[6] !== l
    ? ((f = (e) => (r ? Math.round(e) : l)), (t[5] = r), (t[6] = l), (t[7] = f))
    : (f = t[7]);
  let p = w(d, f),
    h,
    g,
    _,
    v,
    y;
  if (t[8] !== n || t[9] !== s || t[10] !== o.resetsAt || t[11] !== o.windowMinutes) {
    let e = me(o.resetsAt),
      r;
    (t[17] !== s || t[18] !== o.windowMinutes
      ? ((r = nt(o.windowMinutes, s)), (t[17] = s), (t[18] = o.windowMinutes), (t[19] = r))
      : (r = t[19]),
      (y = r),
      t[20] === n
        ? (v = t[21])
        : ((v = E(
            `grid h-[70px] grid-cols-[minmax(0,1fr)_minmax(64px,159px)_64px] items-center gap-2 px-4 max-[400px]:grid-cols-[minmax(0,1fr)_64px]`,
            n,
          )),
          (t[20] = n),
          (t[21] = v)),
      (h = `min-w-0 text-base leading-5`),
      t[22] === y
        ? (g = t[23])
        : ((g = (0, Q.jsx)(`div`, { className: `truncate font-medium text-default`, children: y })),
          (t[22] = y),
          (t[23] = g)),
      (_ =
        e == null
          ? null
          : (0, Q.jsx)(`div`, {
              className: `truncate text-secondary`,
              children: (0, Q.jsx)(a, {
                id: `codex.rateLimitResetPromptModal.resetsAt`,
                defaultMessage: `Resets {resetTime}`,
                description: `Reset time shown for a Codex usage limit window`,
                values: { resetTime: ye(e) },
              }),
            })),
      (t[8] = n),
      (t[9] = s),
      (t[10] = o.resetsAt),
      (t[11] = o.windowMinutes),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _),
      (t[15] = v),
      (t[16] = y));
  } else ((h = t[12]), (g = t[13]), (_ = t[14]), (v = t[15]), (y = t[16]));
  let b;
  t[24] !== h || t[25] !== g || t[26] !== _
    ? ((b = (0, Q.jsxs)(`div`, { className: h, children: [g, _] })),
      (t[24] = h),
      (t[25] = g),
      (t[26] = _),
      (t[27] = b))
    : (b = t[27]);
  let S;
  t[28] !== s || t[29] !== y
    ? ((S = s.formatMessage(
        {
          id: `codex.rateLimitResetPromptModal.usageRemaining`,
          defaultMessage: `{usageLimit} remaining`,
          description: `Aria label for the remaining percentage of a specific Codex usage limit`,
        },
        { usageLimit: y },
      )),
      (t[28] = s),
      (t[29] = y),
      (t[30] = S))
    : (S = t[30]);
  let C;
  t[31] !== d || t[32] !== r || t[33] !== l || t[34] !== i || t[35] !== S
    ? ((C = (0, Q.jsx)(`div`, {
        className: `max-[400px]:hidden`,
        children: (0, Q.jsx)(Se, {
          accessibleLabel: S,
          animatedPercent: d,
          isResetFillActive: r,
          remainingPercent: l,
          resetFillAnimation: i,
        }),
      })),
      (t[31] = d),
      (t[32] = r),
      (t[33] = l),
      (t[34] = i),
      (t[35] = S),
      (t[36] = C))
    : (C = t[36]);
  let T;
  t[37] === p
    ? (T = t[38])
    : ((T = (0, Q.jsx)(`span`, {
        className: `text-end text-base leading-5 whitespace-nowrap text-secondary tabular-nums`,
        children: (0, Q.jsx)(a, {
          id: `codex.rateLimitResetPromptModal.remaining`,
          defaultMessage: `{remainingPercent}% left`,
          description: `Remaining percentage shown for a Codex usage limit window`,
          values: { remainingPercent: (0, Q.jsx)(x.span, { children: p }, `remaining-percent`) },
        }),
      })),
      (t[37] = p),
      (t[38] = T));
  let D;
  return (
    t[39] !== C || t[40] !== T || t[41] !== v || t[42] !== b
      ? ((D = (0, Q.jsxs)(`div`, { className: v, children: [b, C, T] })),
        (t[39] = C),
        (t[40] = T),
        (t[41] = v),
        (t[42] = b),
        (t[43] = D))
      : (D = t[43]),
    D
  );
}
function nt(e, t) {
  return Math.abs(e - it) <= 1
    ? t.formatMessage({
        id: `codex.rateLimitResetPromptModal.fiveHourLimit`,
        defaultMessage: `5 hour usage limit`,
        description: `Label for the five-hour usage limit in the usage modal`,
      })
    : Math.abs(e - 10080) <= 1
      ? t.formatMessage({
          id: `codex.rateLimitResetPromptModal.weeklyLimit`,
          defaultMessage: `Weekly usage limit`,
          description: `Label for the weekly usage limit in the usage modal`,
        })
      : t.formatMessage(
          {
            id: `codex.rateLimitResetPromptModal.usageLimitLabel`,
            defaultMessage: `{window} usage limit`,
            description: `Label for a Codex usage limit window`,
          },
          { window: Ce({ intl: t, minutes: e }) },
        );
}
var rt, Q, it;
function at() {
  return (at = e(() => {
    ((rt = V()), y(), D(), z(), k(), Ie(), Fe(), (Q = U()), (it = 300));
  }))();
}
function ot(e) {
  let n = (0, lt.c)(89),
    {
      availableCount: r,
      availableResetCredits: i,
      defaultResetCreditsOpen: o,
      errorMessage: s,
      isLoadingResetCredits: l,
      isResetting: u,
      onAddCredits: d,
      onClose: f,
      onResetCredit: g,
      onUpgradePlan: _,
      usageWindows: y,
    } = e,
    x = o !== void 0 && o,
    S = m(),
    w = v(),
    T = p(),
    D = h($e),
    [O, k] = (0, ut.useState)(null),
    [j, N] = (0, ut.useState)(ct),
    [F, I] = (0, ut.useState)(null),
    [R, z] = (0, ut.useState)(x),
    [B, V] = (0, ut.useState)(`idle`),
    [H, U] = (0, ut.useState)(null),
    W = Pe(w),
    ee;
  n[0] === y ? (ee = n[1]) : ((ee = y.slice(0, 2)), (n[0] = y), (n[1] = ee));
  let te = ee,
    ne;
  n[2] !== te || n[3] !== H
    ? ((ne =
        H != null &&
        (H.length === 0 ||
          H.length !== te.length ||
          H.some((e, t) => {
            let n = te[t];
            return (
              n == null ||
              e.remainingPercent !== n.remainingPercent ||
              e.resetsAt !== n.resetsAt ||
              e.windowMinutes !== n.windowMinutes
            );
          }))),
      (n[2] = te),
      (n[3] = H),
      (n[4] = ne))
    : (ne = n[4]);
  let re = ne,
    ie = B === `awaiting-refresh` && !re,
    G = H != null && B !== `idle` && !(B === `awaiting-refresh` && re) ? H : te,
    ae;
  n[5] !== O || n[6] !== i || n[7] !== j
    ? ((ae = O == null ? (i?.filter((e) => !j.has(e.id)) ?? null) : O.credits),
      (n[5] = O),
      (n[6] = i),
      (n[7] = j),
      (n[8] = ae))
    : (ae = n[8]);
  let oe = ae,
    K = O?.availableCount ?? Math.min(r, F ?? r),
    se = O?.creditId ?? null,
    ce = B === `redeeming` ? se : null,
    q = B === `retry` ? se : null,
    le = B === `hiding-row` ? se : null,
    J = d != null || _ != null,
    ue = B !== `idle` && B !== `retry` && B !== `awaiting-refresh`,
    Y = u || B === `redeeming`,
    de = Y || ue || ie || D,
    fe = Y || ue,
    pe = B === `revealing-usage` || B === `awaiting-refresh`,
    me;
  n[9] !== r || n[10] !== W
    ? ((me = (e, t) => {
        (I(Math.min(r, Math.max(0, t))),
          k(null),
          N((t) => new Set(t).add(e)),
          z(!1),
          V(`revealing-usage`),
          W.start(() => {
            V(`awaiting-refresh`);
          }));
      }),
      (n[9] = r),
      (n[10] = W),
      (n[11] = me))
    : (me = n[11]);
  let he = me,
    ge;
  n[12] !== O?.availableCount ||
  n[13] !== O?.credits ||
  n[14] !== O?.remainingCount ||
  n[15] !== de ||
  n[16] !== g ||
  n[17] !== w ||
  n[18] !== W ||
  n[19] !== q ||
  n[20] !== he ||
  n[21] !== K ||
  n[22] !== oe ||
  n[23] !== G
    ? ((ge = async (e) => {
        if (de) return;
        W.reset();
        let t = e ?? `automatic`;
        if (q != null && q !== t) return;
        let n = O?.availableCount ?? K;
        (k({
          availableCount: n,
          creditId: t,
          credits: O?.credits ?? oe,
          remainingCount: O?.remainingCount ?? null,
        }),
          U(G),
          V(`redeeming`));
        let r = await g(e, n);
        switch (r.status) {
          case `failed`:
            (k(null), U(null), V(`idle`));
            return;
          case `retry`:
            (k((e) => (e == null ? null : { ...e, creditId: r.creditId ?? `automatic` })), V(`retry`));
            return;
          case `completed`: {
            let e = r.creditId ?? `automatic`;
            if ((k((t) => (t == null ? null : { ...t, creditId: e, remainingCount: r.remainingCount })), w)) {
              he(e, r.remainingCount);
              return;
            }
            V(`hiding-row`);
          }
        }
      }),
      (n[12] = O?.availableCount),
      (n[13] = O?.credits),
      (n[14] = O?.remainingCount),
      (n[15] = de),
      (n[16] = g),
      (n[17] = w),
      (n[18] = W),
      (n[19] = q),
      (n[20] = he),
      (n[21] = K),
      (n[22] = oe),
      (n[23] = G),
      (n[24] = ge))
    : (ge = n[24]);
  let _e = ge,
    ve;
  n[25] === B
    ? (ve = n[26])
    : ((ve = () => {
        B === `hiding-row` && (V(`collapsing-panel`), z(!1));
      }),
      (n[25] = B),
      (n[26] = ve));
  let ye = ve,
    be;
  n[27] !== O || n[28] !== B || n[29] !== he
    ? ((be = () => {
        B === `collapsing-panel` && O != null && he(O.creditId, O.remainingCount ?? O.availableCount - 1);
      }),
      (n[27] = O),
      (n[28] = B),
      (n[29] = he),
      (n[30] = be))
    : (be = n[30]);
  let xe = be,
    Se;
  n[31] !== Y || n[32] !== f
    ? ((Se = (e) => {
        !e && !Y && f();
      }),
      (n[31] = Y),
      (n[32] = f),
      (n[33] = Se))
    : (Se = n[33]);
  let Ce = !Y,
    we;
  n[34] === S
    ? (we = n[35])
    : ((we = S.formatMessage({
        id: `codex.rateLimitResetPromptModal.closeUsageModal`,
        defaultMessage: `Close`,
        description: `Aria label for closing the Codex usage modal`,
      })),
      (n[34] = S),
      (n[35] = we));
  let Te;
  n[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Te = { height: `auto` }), (n[36] = Te))
    : (Te = n[36]);
  let Ee;
  n[37] === Y
    ? (Ee = n[38])
    : ((Ee = {
        "aria-describedby": void 0,
        style: Te,
        onOpenAutoFocus: st,
        onEscapeKeyDown: (e) => {
          Y && e.preventDefault();
        },
        tabIndex: -1,
      }),
      (n[37] = Y),
      (n[38] = Ee));
  let De = `calc(100dvh / ${T} - ${32 / T}px)`,
    ke;
  n[39] === De ? (ke = n[40]) : ((ke = { maxHeight: De }), (n[39] = De), (n[40] = ke));
  let Ae;
  n[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, $.jsx)(A, {
        children: (0, $.jsx)(C, {
          title: (0, $.jsx)(b, {
            asChild: !0,
            children: (0, $.jsx)(`h2`, {
              className: `m-0`,
              children: (0, $.jsx)(a, {
                id: `codex.rateLimitResetPromptModal.usageTrackingHeading`,
                defaultMessage: `Usage`,
                description: `Heading for the Codex usage limit modal`,
              }),
            }),
          }),
        }),
      })),
      (n[41] = Ae))
    : (Ae = n[41]);
  let je = G.length === 2 ? `h-[140px]` : `h-[70px]`,
    Me;
  n[42] === je
    ? (Me = n[43])
    : ((Me = E(`relative z-10 overflow-hidden rounded-2xl border border-default bg-transparent`, je)),
      (n[42] = je),
      (n[43] = Me));
  let Ne;
  n[44] !== ie || n[45] !== W || n[46] !== B || n[47] !== G
    ? ((Ne =
        G.length === 0
          ? (0, $.jsx)(`div`, {
              className: `flex h-[70px] items-center justify-center px-4 text-sm leading-5 text-secondary`,
              children: (0, $.jsx)(a, {
                id: `codex.rateLimitResetPromptModal.usageUnavailable`,
                defaultMessage: `Usage details unavailable`,
                description: `Fallback shown when Codex usage limit details are unavailable`,
              }),
            })
          : G.map((e, t) =>
              (0, $.jsx)(
                tt,
                {
                  className: E(t > 0 && `border-t border-default`),
                  isResetFillActive: B === `revealing-usage` || ie,
                  resetFillAnimation: W,
                  usageWindow: e,
                },
                `${e.windowMinutes}-${t}`,
              ),
            )),
      (n[44] = ie),
      (n[45] = W),
      (n[46] = B),
      (n[47] = G),
      (n[48] = Ne))
    : (Ne = n[48]);
  let Fe;
  n[49] !== Me || n[50] !== Ne
    ? ((Fe = (0, $.jsx)(`div`, { className: Me, children: Ne })), (n[49] = Me), (n[50] = Ne), (n[51] = Fe))
    : (Fe = n[51]);
  let Ie;
  n[52] !== ce ||
  n[53] !== le ||
  n[54] !== ye ||
  n[55] !== xe ||
  n[56] !== _e ||
  n[57] !== pe ||
  n[58] !== R ||
  n[59] !== l ||
  n[60] !== de ||
  n[61] !== q ||
  n[62] !== K ||
  n[63] !== oe
    ? ((Ie =
        K > 0 || pe
          ? (0, $.jsx)(qe, {
              activeCreditId: ce,
              availableCount: K,
              credits: oe,
              disabled: de || K === 0,
              exitingCreditId: le,
              isLoading: l,
              isOpen: R,
              onCreditHideComplete: ye,
              onOpenChange: (e) => {
                de || z(e);
              },
              onPanelExitComplete: xe,
              onResetCredit: _e,
              retryCreditId: q,
            })
          : null),
      (n[52] = ce),
      (n[53] = le),
      (n[54] = ye),
      (n[55] = xe),
      (n[56] = _e),
      (n[57] = pe),
      (n[58] = R),
      (n[59] = l),
      (n[60] = de),
      (n[61] = q),
      (n[62] = K),
      (n[63] = oe),
      (n[64] = Ie))
    : (Ie = n[64]);
  let Le;
  n[65] !== Fe || n[66] !== Ie
    ? ((Le = (0, $.jsxs)(A, { className: `gap-4 pt-4`, children: [Fe, Ie] })),
      (n[65] = Fe),
      (n[66] = Ie),
      (n[67] = Le))
    : (Le = n[67]);
  let Re;
  n[68] !== s || n[69] !== J
    ? ((Re =
        s != null || J
          ? (0, $.jsx)(A, {
              className: `pt-5`,
              children: (0, $.jsxs)(`div`, {
                className: `flex min-h-5 items-center gap-3 text-sm leading-5 text-tertiary`,
                children: [
                  (0, $.jsx)(`span`, { className: `h-px flex-1 bg-border` }),
                  (0, $.jsx)(`span`, {
                    "aria-live": `polite`,
                    className: E(`flex items-center gap-2 text-center`, s != null && `text-danger`),
                    children:
                      s ??
                      (0, $.jsx)(a, {
                        id: `codex.rateLimitResetPromptModal.getMoreUsage`,
                        defaultMessage: `Get more usage`,
                        description: `Divider label above ways to get more Codex usage`,
                      }),
                  }),
                  (0, $.jsx)(`span`, { className: `h-px flex-1 bg-border` }),
                ],
              }),
            })
          : null),
      (n[68] = s),
      (n[69] = J),
      (n[70] = Re))
    : (Re = n[70]);
  let ze;
  n[71] !== fe || n[72] !== d || n[73] !== _ || n[74] !== w || n[75] !== J
    ? ((ze = J
        ? (0, $.jsx)(A, {
            className: `pt-4`,
            children: (0, $.jsxs)(`div`, {
              className: E(`grid gap-3`, d != null && _ != null ? `grid-cols-2` : `grid-cols-1`),
              children: [
                _ == null
                  ? null
                  : (0, $.jsxs)(t, {
                      className: E(dt, !w && ft),
                      color: `secondary`,
                      disabled: fe,
                      onClick: _,
                      size: `medium`,
                      children: [
                        (0, $.jsx)(c, { "aria-hidden": !1, asset: L }),
                        (0, $.jsx)(a, {
                          id: `codex.rateLimitResetPromptModal.upgradePlan`,
                          defaultMessage: `Upgrade plan`,
                          description: `Button label for upgrading a Codex subscription plan`,
                        }),
                      ],
                    }),
                d == null
                  ? null
                  : (0, $.jsxs)(t, {
                      className: E(dt, !w && ft),
                      color: `secondary`,
                      disabled: fe,
                      onClick: d,
                      size: `medium`,
                      children: [
                        (0, $.jsx)(Oe, { className: `icon-base` }),
                        (0, $.jsx)(a, {
                          id: `codex.rateLimitResetPromptModal.addCredits`,
                          defaultMessage: `Add credits`,
                          description: `Button label for adding credits`,
                        }),
                      ],
                    }),
              ],
            }),
          })
        : null),
      (n[71] = fe),
      (n[72] = d),
      (n[73] = _),
      (n[74] = w),
      (n[75] = J),
      (n[76] = ze))
    : (ze = n[76]);
  let Be;
  n[77] !== ke || n[78] !== Le || n[79] !== Re || n[80] !== ze
    ? ((Be = (0, $.jsxs)(P, {
        className: `overflow-y-auto text-default`,
        style: ke,
        children: [Ae, Le, Re, ze],
      })),
      (n[77] = ke),
      (n[78] = Le),
      (n[79] = Re),
      (n[80] = ze),
      (n[81] = Be))
    : (Be = n[81]);
  let Ve;
  return (
    n[82] !== Y || n[83] !== Ce || n[84] !== we || n[85] !== Ee || n[86] !== Be || n[87] !== Se
      ? ((Ve = (0, $.jsx)(M, {
          open: !0,
          onOpenChange: Se,
          shouldIgnoreClickOutside: Y,
          showDialogClose: Ce,
          dialogCloseClassName: `top-[22px]`,
          contentClassName: `!max-w-[calc(100vw/var(--codex-window-zoom)-2rem)]`,
          dialogCloseLabel: we,
          contentProps: Ee,
          children: Be,
        })),
        (n[82] = Y),
        (n[83] = Ce),
        (n[84] = we),
        (n[85] = Ee),
        (n[86] = Be),
        (n[87] = Se),
        (n[88] = Ve))
      : (Ve = n[88]),
    Ve
  );
}
function st(e) {
  (e.preventDefault(), e.currentTarget instanceof HTMLElement && e.currentTarget.focus());
}
function ct() {
  return new Set();
}
var lt, ut, $, dt, ft;
function pt() {
  return (pt = e(() => {
    ((lt = V()),
      N(),
      y(),
      u(),
      (ut = W()),
      k(),
      i(),
      I(),
      B(),
      T(),
      l(),
      s(),
      we(),
      Ze(),
      je(),
      et(),
      at(),
      ($ = U()),
      (dt = `h-[84px] flex-col justify-center gap-2 !rounded-2xl !text-base !leading-5 font-medium`),
      (ft = `transition-transform duration-basic ease-out active:scale-[0.98]`));
  }))();
}
function mt(e) {
  let t = (0, ht.c)(35),
    r,
    i,
    a;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]))
    : (({ currentPlan: r, onClose: i, ...a } = e), (t[0] = e), (t[1] = r), (t[2] = i), (t[3] = a));
  let s = o(n),
    c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((c = { logExposure: !0 }), (t[4] = c)) : (c = t[4]);
  let l = le(c),
    u = Ee(),
    d = Te(),
    f = be(),
    p = Me(`931825599`),
    m;
  t[5] !== r || t[6] !== f ? ((m = pe(f, r)), (t[5] = r), (t[6] = f), (t[7] = m)) : (m = t[7]);
  let h = m,
    g;
  t[8] === r ? (g = t[9]) : ((g = he(r)), (t[8] = r), (t[9] = g));
  let _ = g,
    v;
  t[10] !== _ || t[11] !== p
    ? ((v = !_ || p.get(`enabled`, !1)), (t[10] = _), (t[11] = p), (t[12] = v))
    : (v = t[12]);
  let y = v,
    b = y && (_ || h),
    x = _,
    S;
  t[13] === x ? (S = t[14]) : ((S = { enabled: x, includePaymentMethod: !0 }), (t[13] = x), (t[14] = S));
  let { data: C } = q(S),
    w = b,
    T;
  t[15] === w ? (T = t[16]) : ((T = { enabled: w }), (t[15] = w), (t[16] = T));
  let { data: E } = de(T),
    D = E == null ? void 0 : E.payment_methods.length > 0,
    O;
  t[17] !== C?.isEnabled || t[18] !== D || t[19] !== u || t[20] !== i || t[21] !== s || t[22] !== f
    ? ((O = (e) => {
        let t = se(f, `personal`);
        (i(),
          Re(s, {
            audience: `personal`,
            checkoutKind: `standalone_credit`,
            entryPoint: `rate_limit_reset_modal`,
          }),
          u({
            event: e,
            intent: `purchase`,
            hasSavedPaymentMethod: D,
            isAutoReloadEnabled: C?.isEnabled ?? !1,
            isCustomCheckoutEnabled: t,
            legacyUrl: re,
            source: `rate_limit_reset_modal`,
          }));
      }),
      (t[17] = C?.isEnabled),
      (t[18] = D),
      (t[19] = u),
      (t[20] = i),
      (t[21] = s),
      (t[22] = f),
      (t[23] = O))
    : (O = t[23]);
  let k = b ? O : void 0,
    A;
  t[24] !== r || t[25] !== l || t[26] !== y || t[27] !== i || t[28] !== d
    ? ((A =
        !y || r === De.PRO || r === De.PROMAX
          ? void 0
          : (e) => {
              (i(),
                d({
                  currentPlan: r,
                  defaultTab: `personal`,
                  event: e,
                  getPricingUrl: l,
                  source: `rate_limit_reset_modal`,
                }));
            }),
      (t[24] = r),
      (t[25] = l),
      (t[26] = y),
      (t[27] = i),
      (t[28] = d),
      (t[29] = A))
    : (A = t[29]);
  let j;
  return (
    t[30] !== i || t[31] !== a || t[32] !== k || t[33] !== A
      ? ((j = (0, gt.jsx)(ot, { ...a, onAddCredits: k, onClose: i, onUpgradePlan: A })),
        (t[30] = i),
        (t[31] = a),
        (t[32] = k),
        (t[33] = A),
        (t[34] = j))
      : (j = t[34]),
    j
  );
}
var ht, gt;
function _t() {
  return (_t = e(() => {
    ((ht = V()), u(), ne(), ue(), ke(), ce(), ie(), Ae(), K(), H(), xe(), ee(), pt(), (gt = U()));
  }))();
}
function vt(e) {
  let t = (0, bt.c)(28),
    {
      defaultResetCreditsOpen: n,
      errorMessage: r,
      initialAvailableCount: i,
      isResetting: a,
      onClose: o,
      onResetCredit: s,
    } = e,
    { data: c } = oe(),
    { data: l } = h(Y),
    { data: u, isLoading: d } = Ne(),
    f;
  t[0] === u?.credits ? (f = t[1]) : ((f = u?.credits.filter(yt) ?? null), (t[0] = u?.credits), (t[1] = f));
  let p = f,
    m = u?.available_count ?? i ?? 0,
    g;
  t[2] !== c?.plan_type || t[3] !== l?.plan_type
    ? ((g = ge(c?.plan_type ?? l?.plan_type)?.pricePlan ?? null),
      (t[2] = c?.plan_type),
      (t[3] = l?.plan_type),
      (t[4] = g))
    : (g = t[4]);
  let _ = g,
    v = l ?? null,
    y;
  t[5] === v ? (y = t[6]) : ((y = _e(v)), (t[5] = v), (t[6] = y));
  let b = y;
  if (_ != null) {
    let e;
    return (
      t[7] !== m ||
      t[8] !== p ||
      t[9] !== _ ||
      t[10] !== n ||
      t[11] !== r ||
      t[12] !== d ||
      t[13] !== a ||
      t[14] !== o ||
      t[15] !== s ||
      t[16] !== b
        ? ((e = (0, xt.jsx)(mt, {
            availableCount: m,
            availableResetCredits: p,
            currentPlan: _,
            defaultResetCreditsOpen: n,
            errorMessage: r,
            isLoadingResetCredits: d,
            isResetting: a,
            onClose: o,
            onResetCredit: s,
            usageWindows: b,
          })),
          (t[7] = m),
          (t[8] = p),
          (t[9] = _),
          (t[10] = n),
          (t[11] = r),
          (t[12] = d),
          (t[13] = a),
          (t[14] = o),
          (t[15] = s),
          (t[16] = b),
          (t[17] = e))
        : (e = t[17]),
      e
    );
  }
  let x;
  return (
    t[18] !== m ||
    t[19] !== p ||
    t[20] !== n ||
    t[21] !== r ||
    t[22] !== d ||
    t[23] !== a ||
    t[24] !== o ||
    t[25] !== s ||
    t[26] !== b
      ? ((x = (0, xt.jsx)(ot, {
          availableCount: m,
          availableResetCredits: p,
          defaultResetCreditsOpen: n,
          errorMessage: r,
          isLoadingResetCredits: d,
          isResetting: a,
          onClose: o,
          onResetCredit: s,
          usageWindows: b,
        })),
        (t[18] = m),
        (t[19] = p),
        (t[20] = n),
        (t[21] = r),
        (t[22] = d),
        (t[23] = a),
        (t[24] = o),
        (t[25] = s),
        (t[26] = b),
        (t[27] = x))
      : (x = t[27]),
    x
  );
}
function yt(e) {
  return e.status === `available`;
}
var bt, xt;
function St() {
  return (St = e(() => {
    ((bt = V()), u(), G(), ue(), J(), ae(), _t(), pt(), (xt = U()));
  }))();
}
function Ct(e) {
  let t = (0, wt.c)(19),
    {
      defaultResetCreditsOpen: r,
      initialAvailableCount: i,
      isRateLimitReached: s,
      onClose: c,
      onResetComplete: l,
    } = e,
    u = o(n),
    d = m(),
    [f] = (0, Tt.useState)(Ve),
    [p, h] = (0, Tt.useState)(null),
    g = ze(),
    _ = g.isPending,
    v;
  t[0] !== _ || t[1] !== c
    ? ((v = () => {
        _ || c();
      }),
      (t[0] = _),
      (t[1] = c),
      (t[2] = v))
    : (v = t[2]);
  let y = v,
    b;
  t[3] !== g.mutateAsync ||
  t[4] !== i ||
  t[5] !== d ||
  t[6] !== s ||
  t[7] !== _ ||
  t[8] !== l ||
  t[9] !== f ||
  t[10] !== u
    ? ((b = async (e, t) => {
        let n = t === void 0 ? (i ?? 0) : t;
        if (_ || n === 0) return { status: `failed` };
        h(null);
        let r = u.query.getData(Y),
          o = await f.redeem({ availableCount: n, consume: g.mutateAsync, creditId: e });
        switch (o.status) {
          case `in_flight`:
            return { status: `failed` };
          case `transport_error`:
            return (
              h(
                d.formatMessage({
                  id: `codex.rateLimitResetModal.error`,
                  defaultMessage: `Couldn’t reset usage. Please try again`,
                  description: `Error shown when resetting Codex usage fails`,
                }),
              ),
              { creditId: o.creditId, status: `retry` }
            );
          case `rejected`:
            return (h(Be(o.code, d)), { status: `failed` });
          case `reset`: {
            let e = Math.max(o.availableCountBefore - 1, 0);
            return (
              h(null),
              fe(u, R, {
                availableCountBefore: o.availableCountBefore,
                componentType: `modal`,
                isRateLimitReached: s,
                redemptionMethod: o.creditId == null ? `automatic` : `selected_credit`,
                remainingCount: e,
              }),
              te(u, r, o.resetType),
              _e(r ?? null).length > 0 && u.set(Qe, r?.account_id ?? null, u.get(Y).dataUpdatedAt),
              u
                .get(O)
                .success(
                  (0, Et.jsx)(a, {
                    id: `codex.upsellBanner.resetUsage.success`,
                    defaultMessage: `Usage reset. You have {remainingCount, plural, one {# left} other {# left}}`,
                    description: `Toast shown after a Codex rate limit reset is used`,
                    values: { remainingCount: e },
                  }),
                  { hasCloseButton: !1 },
                ),
              l(e),
              { creditId: o.creditId, remainingCount: e, status: `completed` }
            );
          }
        }
      }),
      (t[3] = g.mutateAsync),
      (t[4] = i),
      (t[5] = d),
      (t[6] = s),
      (t[7] = _),
      (t[8] = l),
      (t[9] = f),
      (t[10] = u),
      (t[11] = b))
    : (b = t[11]);
  let x = b,
    S;
  return (
    t[12] !== r || t[13] !== p || t[14] !== y || t[15] !== x || t[16] !== i || t[17] !== _
      ? ((S = (0, Et.jsx)(vt, {
          defaultResetCreditsOpen: r,
          errorMessage: p,
          initialAvailableCount: i,
          isResetting: _,
          onClose: y,
          onResetCredit: x,
        })),
        (t[12] = r),
        (t[13] = p),
        (t[14] = y),
        (t[15] = x),
        (t[16] = i),
        (t[17] = _),
        (t[18] = S))
      : (S = t[18]),
    S
  );
}
var wt, Tt, Et;
function Dt() {
  return (Dt = e(() => {
    ((wt = V()), d(), u(), (Tt = W()), k(), G(), j(), J(), ve(), H(), ae(), Le(), St(), et(), (Et = U()));
  }))();
}
Dt();
export { Ct as RateLimitResetModal };
//# sourceMappingURL=modal-impl-899f58f9d5e5.js.map
