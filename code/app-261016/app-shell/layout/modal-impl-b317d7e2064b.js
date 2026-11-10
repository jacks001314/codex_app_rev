import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  ATt as r,
  CCt as i,
  DB as a,
  EO as o,
  FBt as s,
  FTt as c,
  Fs as l,
  HO as u,
  HTt as d,
  IO as f,
  ITt as p,
  Is as m,
  JO as h,
  LNt as g,
  MNt as _,
  NNt as v,
  OB as y,
  PBt as b,
  Qst as x,
  RO as S,
  Rrt as C,
  SCt as w,
  TO as T,
  Uz as E,
  VTt as D,
  Vrt as O,
  WO as k,
  Wz as A,
  XOt as j,
  Y3 as M,
  Z3 as N,
  ZSt as P,
  bB as F,
  iCt as I,
  kTt as L,
  okt as R,
  qO as z,
  qrt as B,
  tkt as V,
  utt as H,
  vB as U,
  zO as ee,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Ajt as te,
  CZt as ne,
  Djr as re,
  Ejr as ie,
  GAt as ae,
  HXt as W,
  IVt as oe,
  Icn as se,
  KAt as G,
  KXt as ce,
  N0 as le,
  OBt as ue,
  Ocn as K,
  P0 as de,
  UAt as fe,
  VXt as pe,
  Vjt as q,
  WAt as J,
  XGn as me,
  Xzr as he,
  ZGn as Y,
  aAt as ge,
  cAt as _e,
  dBt as ve,
  gkt as ye,
  hkt as be,
  jcn as xe,
  kBt as Se,
  oAt as Ce,
  qXt as we,
  sAt as Te,
  tLr as Ee,
  uBt as De,
  vBt as Oe,
  vZt as ke,
  wBt as Ae,
  wZt as je,
  wcn as Me,
  xBt as Ne,
  xMr as Pe,
  xjr as Fe,
  yMr as Ie,
  yVt as Le,
  yZt as Re,
  zjt as ze,
} from "./app-initial-ad16eaadf81f.js";
import { n as Be, t as Ve } from "./redemption-656a3e1c2834.js";
function He(e) {
  let t = (0, Ue.c)(50),
    {
      activeCreditId: n,
      credit: r,
      disabled: i,
      hasTopBorder: a,
      isConfirming: o,
      isExiting: s,
      onCreditHideComplete: c,
      onResetCredit: l,
    } = e,
    u = R(),
    d = (0, We.useId)(),
    f = (0, We.useId)(),
    m = (0, We.useId)(),
    h = A(),
    g;
  t[0] !== r || t[1] !== u
    ? ((g =
        r?.expires_at == null
          ? null
          : u.formatDate(r.expires_at, {
              day: `numeric`,
              hour: `numeric`,
              minute: `2-digit`,
              month: `numeric`,
              timeZoneName: `short`,
            })),
      (t[0] = r),
      (t[1] = u),
      (t[2] = g))
    : (g = t[2]);
  let v = g,
    y = r?.id,
    b;
  t[3] === s
    ? (b = t[4])
    : ((b = s ? { opacity: 0, scale: 0.985, y: -4 } : { opacity: 1, scale: 1, y: 0 }),
      (t[3] = s),
      (t[4] = b));
  let x;
  t[5] === h ? (x = t[6]) : ((x = h ? { duration: 0 } : Ge), (t[5] = h), (t[6] = x));
  let S;
  t[7] !== s || t[8] !== c
    ? ((S = () => {
        s && c();
      }),
      (t[7] = s),
      (t[8] = c),
      (t[9] = S))
    : (S = t[9]);
  let C = a && `border-t border-default`,
    w;
  t[10] === C
    ? (w = t[11])
    : ((w = _(`grid min-h-[68px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 text-start`, C)),
      (t[10] = C),
      (t[11] = w));
  let T;
  t[12] === r?.title
    ? (T = t[13])
    : ((T =
        r?.title?.trim() ||
        (0, X.jsx)(V, {
          id: `codex.rateLimitResetPromptModal.resetCreditFallback`,
          defaultMessage: `Usage reset`,
          description: `Fallback label for a Codex usage reset`,
        })),
      (t[12] = r?.title),
      (t[13] = T));
  let E;
  t[14] !== f || t[15] !== T
    ? ((E = (0, X.jsx)(`div`, { id: f, className: `truncate font-medium text-default`, children: T })),
      (t[14] = f),
      (t[15] = T),
      (t[16] = E))
    : (E = t[16]);
  let D;
  t[17] !== m || t[18] !== v
    ? ((D =
        v == null
          ? null
          : (0, X.jsx)(`div`, {
              id: m,
              className: `truncate text-secondary`,
              children: (0, X.jsx)(V, {
                id: `codex.rateLimitResetPromptModal.resetExpiresWithTimeZone`,
                defaultMessage: `Expires {date}`,
                description: `Expiration date, time, and time zone shown for a Codex usage reset`,
                values: { date: v },
              }),
            })),
      (t[17] = m),
      (t[18] = v),
      (t[19] = D))
    : (D = t[19]);
  let O;
  t[20] !== E || t[21] !== D
    ? ((O = (0, X.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-0.5 text-sm leading-5`,
        children: [E, D],
      })),
      (t[20] = E),
      (t[21] = D),
      (t[22] = O))
    : (O = t[22]);
  let k = v == null ? void 0 : m,
    j = `${d} ${f}`,
    N = !h && `transition-transform duration-basic ease-out active:scale-[0.98]`,
    P;
  t[23] === N
    ? (P = t[24])
    : ((P = _(`justify-center border-transparent !text-sm !leading-5 font-medium`, N)),
      (t[23] = N),
      (t[24] = P));
  let F = n === (y ?? `automatic`),
    I;
  t[25] !== y || t[26] !== l
    ? ((I = () => {
        l(y);
      }),
      (t[25] = y),
      (t[26] = l),
      (t[27] = I))
    : (I = t[27]);
  let L;
  t[28] === o
    ? (L = t[29])
    : ((L = o
        ? (0, X.jsx)(V, {
            id: `codex.rateLimitResetPromptModal.confirmReset`,
            defaultMessage: `Confirm`,
            description: `Button label confirming the redemption of one Codex usage reset`,
          })
        : (0, X.jsx)(V, {
            id: `codex.rateLimitResetPromptModal.useReset`,
            defaultMessage: `Use reset`,
            description: `Button label for redeeming one Codex usage reset`,
          })),
      (t[28] = o),
      (t[29] = L));
  let z;
  t[30] !== d || t[31] !== L
    ? ((z = (0, X.jsx)(`span`, { id: d, children: L })), (t[30] = d), (t[31] = L), (t[32] = z))
    : (z = t[32]);
  let B;
  t[33] !== i || t[34] !== k || t[35] !== j || t[36] !== P || t[37] !== F || t[38] !== I || t[39] !== z
    ? ((B = (0, X.jsx)(M, {
        "aria-describedby": k,
        "aria-labelledby": j,
        className: P,
        color: `primary`,
        disabled: i,
        loading: F,
        onClick: I,
        size: `toolbar`,
        children: z,
      })),
      (t[33] = i),
      (t[34] = k),
      (t[35] = j),
      (t[36] = P),
      (t[37] = F),
      (t[38] = I),
      (t[39] = z),
      (t[40] = B))
    : (B = t[40]);
  let H;
  t[41] !== O || t[42] !== B || t[43] !== w
    ? ((H = (0, X.jsxs)(`div`, { className: w, children: [O, B] })),
      (t[41] = O),
      (t[42] = B),
      (t[43] = w),
      (t[44] = H))
    : (H = t[44]);
  let U;
  return (
    t[45] !== b || t[46] !== H || t[47] !== x || t[48] !== S
      ? ((U = (0, X.jsx)(p.div, {
          initial: !1,
          animate: b,
          transition: x,
          onAnimationComplete: S,
          className: `origin-top`,
          children: H,
        })),
        (t[45] = b),
        (t[46] = H),
        (t[47] = x),
        (t[48] = S),
        (t[49] = U))
      : (U = t[49]),
    U
  );
}
var Ue, We, X, Ge;
function Ke() {
  return (Ke = e(() => {
    ((Ue = b()),
      v(),
      c(),
      (We = s()),
      j(),
      N(),
      E(),
      (X = g()),
      (Ge = { duration: 0.18, ease: [0.3, 0, 1, 1] }));
  }))();
}
function qe(e) {
  let t = (0, Je.c)(48),
    {
      activeCreditId: n,
      availableCount: r,
      credits: i,
      disabled: a,
      exitingCreditId: o,
      isLoading: s,
      isOpen: c,
      onCreditHideComplete: l,
      onOpenChange: u,
      onPanelExitComplete: d,
      onResetCredit: f,
      retryCreditId: m,
    } = e,
    h = (0, Ye.useId)(),
    g = A(),
    v = (0, Ye.useRef)(null),
    [y, b] = (0, Ye.useState)(null),
    x;
  t[0] !== y || t[1] !== f
    ? ((x = async (e) => {
        let t = e ?? `automatic`;
        if (y !== t) {
          b(t);
          return;
        }
        (b(null), await f(e));
      }),
      (t[0] = y),
      (t[1] = f),
      (t[2] = x))
    : (x = t[2]);
  let S = x,
    C;
  t[3] === a
    ? (C = t[4])
    : ((C = (e) => {
        a || e.button !== 0 || e.preventDefault();
      }),
      (t[3] = a),
      (t[4] = C));
  let w;
  t[5] !== a || t[6] !== c || t[7] !== u
    ? ((w = (e) => {
        a || (c && b(null), u(!c), e.detail > 0 && e.currentTarget.blur());
      }),
      (t[5] = a),
      (t[6] = c),
      (t[7] = u),
      (t[8] = w))
    : (w = t[8]);
  let E;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, Z.jsx)(`span`, {
        className: `truncate`,
        children: (0, Z.jsx)(V, {
          id: `codex.rateLimitResetPromptModal.usageLimitResets`,
          defaultMessage: `Usage limit resets`,
          description: `Expandable section label for Codex usage limit resets`,
        }),
      })),
      (t[9] = E))
    : (E = t[9]);
  let O;
  t[10] === r
    ? (O = t[11])
    : ((O = (0, Z.jsx)(`span`, {
        className: `rounded-full bg-[var(--green-50)] px-2.5 py-0.5 text-[var(--green-700)] dark:bg-[var(--green-800)] dark:text-[var(--green-50)]`,
        children: (0, Z.jsx)(V, {
          id: `codex.rateLimitResetPromptModal.availableResetCount`,
          defaultMessage: `{count} available`,
          description: `Badge showing the number of Codex usage limit resets available`,
          values: { count: r },
        }),
      })),
      (t[10] = r),
      (t[11] = O));
  let k = !g && `transition-transform`,
    j = c && `rotate-180`,
    M;
  t[12] !== k || t[13] !== j
    ? ((M = _(`icon-2xs shrink-0 text-secondary`, k, j)), (t[12] = k), (t[13] = j), (t[14] = M))
    : (M = t[14]);
  let N;
  t[15] === M ? (N = t[16]) : ((N = (0, Z.jsx)(T, { className: M })), (t[15] = M), (t[16] = N));
  let P;
  t[17] !== O || t[18] !== N
    ? ((P = (0, Z.jsxs)(`span`, { className: `flex shrink-0 items-center gap-3`, children: [O, N] })),
      (t[17] = O),
      (t[18] = N),
      (t[19] = P))
    : (P = t[19]);
  let F;
  t[20] !== a || t[21] !== c || t[22] !== h || t[23] !== P || t[24] !== C || t[25] !== w
    ? ((F = (0, Z.jsxs)(`button`, {
        ref: v,
        type: `button`,
        "aria-controls": h,
        "aria-disabled": a,
        "aria-expanded": c,
        className: `flex h-12 w-full cursor-interaction items-center justify-between gap-4 border-0 bg-transparent px-4 text-start text-base leading-5 font-medium text-default shadow-none outline-none hover:bg-text/5 focus-visible:bg-text/5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset aria-disabled:cursor-not-allowed aria-disabled:opacity-60`,
        onMouseDown: C,
        onClick: w,
        children: [E, P],
      })),
      (t[20] = a),
      (t[21] = c),
      (t[22] = h),
      (t[23] = P),
      (t[24] = C),
      (t[25] = w),
      (t[26] = F))
    : (F = t[26]);
  let I;
  t[27] === d
    ? (I = t[28])
    : ((I = () => {
        (d(), v.current?.focus());
      }),
      (t[27] = d),
      (t[28] = I));
  let L;
  t[29] !== n ||
  t[30] !== y ||
  t[31] !== i ||
  t[32] !== a ||
  t[33] !== o ||
  t[34] !== S ||
  t[35] !== s ||
  t[36] !== c ||
  t[37] !== l ||
  t[38] !== h ||
  t[39] !== g ||
  t[40] !== m
    ? ((L = c
        ? (0, Z.jsx)(
            p.div,
            {
              id: h,
              className: `overflow-hidden`,
              initial: !g && { height: 0, opacity: 0 },
              animate: { height: `auto`, opacity: 1 },
              exit: g ? { opacity: 0 } : { height: 0, opacity: 0 },
              transition: g ? { duration: 0 } : Xe,
              children: s
                ? (0, Z.jsx)(`div`, {
                    className: `flex min-h-[68px] items-center px-4 text-sm text-secondary`,
                    children: (0, Z.jsx)(V, {
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
                          disabled: a || (m != null && m !== e.id),
                          hasTopBorder: t > 0,
                          isConfirming: e.id === y,
                          isExiting: e.id === o,
                          onCreditHideComplete: l,
                          onResetCredit: S,
                        },
                        e.id,
                      ),
                    )
                  : (0, Z.jsx)(He, {
                      activeCreditId: n,
                      credit: null,
                      disabled: a || (m != null && m !== `automatic`),
                      hasTopBorder: !1,
                      isConfirming: y === `automatic`,
                      isExiting: o === `automatic`,
                      onCreditHideComplete: l,
                      onResetCredit: S,
                    }),
            },
            `available-reset-credits`,
          )
        : null),
      (t[29] = n),
      (t[30] = y),
      (t[31] = i),
      (t[32] = a),
      (t[33] = o),
      (t[34] = S),
      (t[35] = s),
      (t[36] = c),
      (t[37] = l),
      (t[38] = h),
      (t[39] = g),
      (t[40] = m),
      (t[41] = L))
    : (L = t[41]);
  let R;
  t[42] !== I || t[43] !== L
    ? ((R = (0, Z.jsx)(D, { initial: !1, onExitComplete: I, children: L })),
      (t[42] = I),
      (t[43] = L),
      (t[44] = R))
    : (R = t[44]);
  let z;
  return (
    t[45] !== F || t[46] !== R
      ? ((z = (0, Z.jsxs)(`div`, {
          className: `overflow-hidden rounded-2xl border border-default bg-transparent`,
          children: [F, R],
        })),
        (t[45] = F),
        (t[46] = R),
        (t[47] = z))
      : (z = t[47]),
    z
  );
}
var Je, Ye, Z, Xe;
function Ze() {
  return (Ze = e(() => {
    ((Je = b()),
      v(),
      d(),
      c(),
      (Ye = s()),
      j(),
      E(),
      o(),
      Ke(),
      (Z = g()),
      (Xe = { duration: 0.3, ease: [0.4, 0, 0.2, 1] }));
  }))();
}
var Qe, $e;
function et() {
  return (et = e(() => {
    (P(),
      me(),
      n(),
      (Qe = w(x, (e) => null)),
      ($e = i(x, ({ get: e }) => {
        let { data: t, dataUpdatedAt: n } = e(Y),
          r = e(Qe, t?.account_id ?? null);
        return r != null && n <= r;
      })));
  }))();
}
function tt(e) {
  let t = (0, rt.c)(44),
    { className: n, isResetFillActive: i, resetFillAnimation: a, usageWindow: o } = e,
    s = R(),
    c;
  t[0] !== i || t[1] !== o.remainingPercent
    ? ((c = i ? 100 : Math.round(o.remainingPercent)), (t[0] = i), (t[1] = o.remainingPercent), (t[2] = c))
    : (c = t[2]);
  let l = c,
    u;
  t[3] === o.remainingPercent
    ? (u = t[4])
    : ((u = (e) => o.remainingPercent + (100 - o.remainingPercent) * e),
      (t[3] = o.remainingPercent),
      (t[4] = u));
  let d = r(a.progress, u),
    f;
  t[5] !== i || t[6] !== l
    ? ((f = (e) => (i ? Math.round(e) : l)), (t[5] = i), (t[6] = l), (t[7] = f))
    : (f = t[7]);
  let m = r(d, f),
    h,
    g,
    v,
    y,
    b;
  if (t[8] !== n || t[9] !== s || t[10] !== o.resetsAt || t[11] !== o.windowMinutes) {
    let e = je(o.resetsAt),
      r;
    (t[17] !== s || t[18] !== o.windowMinutes
      ? ((r = nt(o.windowMinutes, s)), (t[17] = s), (t[18] = o.windowMinutes), (t[19] = r))
      : (r = t[19]),
      (b = r),
      t[20] === n
        ? (y = t[21])
        : ((y = _(
            `grid h-[70px] grid-cols-[minmax(0,1fr)_minmax(64px,159px)_64px] items-center gap-2 px-4 max-[400px]:grid-cols-[minmax(0,1fr)_64px]`,
            n,
          )),
          (t[20] = n),
          (t[21] = y)),
      (h = `min-w-0 text-base leading-5`),
      t[22] === b
        ? (g = t[23])
        : ((g = (0, Q.jsx)(`div`, { className: `truncate font-medium text-default`, children: b })),
          (t[22] = b),
          (t[23] = g)),
      (v =
        e == null
          ? null
          : (0, Q.jsx)(`div`, {
              className: `truncate text-secondary`,
              children: (0, Q.jsx)(V, {
                id: `codex.rateLimitResetPromptModal.resetsAt`,
                defaultMessage: `Resets {resetTime}`,
                description: `Reset time shown for a Codex usage limit window`,
                values: { resetTime: Re(e) },
              }),
            })),
      (t[8] = n),
      (t[9] = s),
      (t[10] = o.resetsAt),
      (t[11] = o.windowMinutes),
      (t[12] = h),
      (t[13] = g),
      (t[14] = v),
      (t[15] = y),
      (t[16] = b));
  } else ((h = t[12]), (g = t[13]), (v = t[14]), (y = t[15]), (b = t[16]));
  let x;
  t[24] !== h || t[25] !== g || t[26] !== v
    ? ((x = (0, Q.jsxs)(`div`, { className: h, children: [g, v] })),
      (t[24] = h),
      (t[25] = g),
      (t[26] = v),
      (t[27] = x))
    : (x = t[27]);
  let S;
  t[28] !== s || t[29] !== b
    ? ((S = s.formatMessage(
        {
          id: `codex.rateLimitResetPromptModal.usageRemaining`,
          defaultMessage: `{usageLimit} remaining`,
          description: `Aria label for the remaining percentage of a specific Codex usage limit`,
        },
        { usageLimit: b },
      )),
      (t[28] = s),
      (t[29] = b),
      (t[30] = S))
    : (S = t[30]);
  let C;
  t[31] !== d || t[32] !== i || t[33] !== l || t[34] !== a || t[35] !== S
    ? ((C = (0, Q.jsx)(`div`, {
        className: `max-[400px]:hidden`,
        children: (0, Q.jsx)(ge, {
          accessibleLabel: S,
          animatedPercent: d,
          isResetFillActive: i,
          remainingPercent: l,
          resetFillAnimation: a,
        }),
      })),
      (t[31] = d),
      (t[32] = i),
      (t[33] = l),
      (t[34] = a),
      (t[35] = S),
      (t[36] = C))
    : (C = t[36]);
  let w;
  t[37] === m
    ? (w = t[38])
    : ((w = (0, Q.jsx)(`span`, {
        className: `text-end text-base leading-5 whitespace-nowrap text-secondary tabular-nums`,
        children: (0, Q.jsx)(V, {
          id: `codex.rateLimitResetPromptModal.remaining`,
          defaultMessage: `{remainingPercent}% left`,
          description: `Remaining percentage shown for a Codex usage limit window`,
          values: { remainingPercent: (0, Q.jsx)(p.span, { children: m }, `remaining-percent`) },
        }),
      })),
      (t[37] = m),
      (t[38] = w));
  let T;
  return (
    t[39] !== C || t[40] !== w || t[41] !== y || t[42] !== x
      ? ((T = (0, Q.jsxs)(`div`, { className: y, children: [x, C, w] })),
        (t[39] = C),
        (t[40] = w),
        (t[41] = y),
        (t[42] = x),
        (t[43] = T))
      : (T = t[43]),
    T
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
          { window: ke({ intl: t, minutes: e }) },
        );
}
var rt, Q, it;
function at() {
  return (at = e(() => {
    ((rt = b()), v(), c(), L(), j(), ne(), Ce(), (Q = g()), (it = 300));
  }))();
}
function ot(e) {
  let t = (0, lt.c)(89),
    {
      availableCount: n,
      availableResetCredits: r,
      defaultResetCreditsOpen: i,
      errorMessage: o,
      isLoadingResetCredits: s,
      isResetting: c,
      onAddCredits: u,
      onClose: d,
      onResetCredit: p,
      onUpgradePlan: m,
      usageWindows: h,
    } = e,
    g = i !== void 0 && i,
    v = R(),
    y = A(),
    b = F(),
    x = I($e),
    [C, w] = (0, ut.useState)(null),
    [T, E] = (0, ut.useState)(ct),
    [D, O] = (0, ut.useState)(null),
    [j, N] = (0, ut.useState)(g),
    [P, L] = (0, ut.useState)(`idle`),
    [B, H] = (0, ut.useState)(null),
    U = _e(y),
    te;
  t[0] === h ? (te = t[1]) : ((te = h.slice(0, 2)), (t[0] = h), (t[1] = te));
  let ne = te,
    re;
  t[2] !== ne || t[3] !== B
    ? ((re =
        B != null &&
        (B.length === 0 ||
          B.length !== ne.length ||
          B.some((e, t) => {
            let n = ne[t];
            return (
              n == null ||
              e.remainingPercent !== n.remainingPercent ||
              e.resetsAt !== n.resetsAt ||
              e.windowMinutes !== n.windowMinutes
            );
          }))),
      (t[2] = ne),
      (t[3] = B),
      (t[4] = re))
    : (re = t[4]);
  let ie = re,
    ae = P === `awaiting-refresh` && !ie,
    W = B != null && P !== `idle` && !(P === `awaiting-refresh` && ie) ? B : ne,
    oe;
  t[5] !== C || t[6] !== r || t[7] !== T
    ? ((oe = C == null ? (r?.filter((e) => !T.has(e.id)) ?? null) : C.credits),
      (t[5] = C),
      (t[6] = r),
      (t[7] = T),
      (t[8] = oe))
    : (oe = t[8]);
  let se = oe,
    G = C?.availableCount ?? Math.min(n, D ?? n),
    ce = C?.creditId ?? null,
    ue = P === `redeeming` ? ce : null,
    K = P === `retry` ? ce : null,
    de = P === `hiding-row` ? ce : null,
    fe = u != null || m != null,
    pe = P !== `idle` && P !== `retry` && P !== `awaiting-refresh`,
    q = c || P === `redeeming`,
    J = q || pe || ae || x,
    me = q || pe,
    he = P === `revealing-usage` || P === `awaiting-refresh`,
    Y;
  t[9] !== n || t[10] !== U
    ? ((Y = (e, t) => {
        (O(Math.min(n, Math.max(0, t))),
          w(null),
          E((t) => new Set(t).add(e)),
          N(!1),
          L(`revealing-usage`),
          U.start(() => {
            L(`awaiting-refresh`);
          }));
      }),
      (t[9] = n),
      (t[10] = U),
      (t[11] = Y))
    : (Y = t[11]);
  let ge = Y,
    ve;
  t[12] !== C?.availableCount ||
  t[13] !== C?.credits ||
  t[14] !== C?.remainingCount ||
  t[15] !== J ||
  t[16] !== p ||
  t[17] !== y ||
  t[18] !== U ||
  t[19] !== K ||
  t[20] !== ge ||
  t[21] !== G ||
  t[22] !== se ||
  t[23] !== W
    ? ((ve = async (e) => {
        if (J) return;
        U.reset();
        let t = e ?? `automatic`;
        if (K != null && K !== t) return;
        let n = C?.availableCount ?? G;
        (w({
          availableCount: n,
          creditId: t,
          credits: C?.credits ?? se,
          remainingCount: C?.remainingCount ?? null,
        }),
          H(W),
          L(`redeeming`));
        let r = await p(e, n);
        switch (r.status) {
          case `failed`:
            (w(null), H(null), L(`idle`));
            return;
          case `retry`:
            (w((e) => (e == null ? null : { ...e, creditId: r.creditId ?? `automatic` })), L(`retry`));
            return;
          case `completed`: {
            let e = r.creditId ?? `automatic`;
            if ((w((t) => (t == null ? null : { ...t, creditId: e, remainingCount: r.remainingCount })), y)) {
              ge(e, r.remainingCount);
              return;
            }
            L(`hiding-row`);
          }
        }
      }),
      (t[12] = C?.availableCount),
      (t[13] = C?.credits),
      (t[14] = C?.remainingCount),
      (t[15] = J),
      (t[16] = p),
      (t[17] = y),
      (t[18] = U),
      (t[19] = K),
      (t[20] = ge),
      (t[21] = G),
      (t[22] = se),
      (t[23] = W),
      (t[24] = ve))
    : (ve = t[24]);
  let ye = ve,
    be;
  t[25] === P
    ? (be = t[26])
    : ((be = () => {
        P === `hiding-row` && (L(`collapsing-panel`), N(!1));
      }),
      (t[25] = P),
      (t[26] = be));
  let xe = be,
    Se;
  t[27] !== C || t[28] !== P || t[29] !== ge
    ? ((Se = () => {
        P === `collapsing-panel` && C != null && ge(C.creditId, C.remainingCount ?? C.availableCount - 1);
      }),
      (t[27] = C),
      (t[28] = P),
      (t[29] = ge),
      (t[30] = Se))
    : (Se = t[30]);
  let Ce = Se,
    we;
  t[31] !== q || t[32] !== d
    ? ((we = (e) => {
        !e && !q && d();
      }),
      (t[31] = q),
      (t[32] = d),
      (t[33] = we))
    : (we = t[33]);
  let Te = !q,
    Ee;
  t[34] === v
    ? (Ee = t[35])
    : ((Ee = v.formatMessage({
        id: `codex.rateLimitResetPromptModal.closeUsageModal`,
        defaultMessage: `Close`,
        description: `Aria label for closing the Codex usage modal`,
      })),
      (t[34] = v),
      (t[35] = Ee));
  let De;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = { height: `auto` }), (t[36] = De))
    : (De = t[36]);
  let Oe;
  t[37] === q
    ? (Oe = t[38])
    : ((Oe = {
        "aria-describedby": void 0,
        style: De,
        onOpenAutoFocus: st,
        onEscapeKeyDown: (e) => {
          q && e.preventDefault();
        },
        tabIndex: -1,
      }),
      (t[37] = q),
      (t[38] = Oe));
  let ke = `calc(100dvh / ${b} - ${32 / b}px)`,
    Ae;
  t[39] === ke ? (Ae = t[40]) : ((Ae = { maxHeight: ke }), (t[39] = ke), (t[40] = Ae));
  let je;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((je = (0, $.jsx)(ee, {
        children: (0, $.jsx)(S, {
          title: (0, $.jsx)(z, {
            asChild: !0,
            children: (0, $.jsx)(`h2`, {
              className: `m-0`,
              children: (0, $.jsx)(V, {
                id: `codex.rateLimitResetPromptModal.usageTrackingHeading`,
                defaultMessage: `Usage`,
                description: `Heading for the Codex usage limit modal`,
              }),
            }),
          }),
        }),
      })),
      (t[41] = je))
    : (je = t[41]);
  let Me = W.length === 2 ? `h-[140px]` : `h-[70px]`,
    Ne;
  t[42] === Me
    ? (Ne = t[43])
    : ((Ne = _(`relative z-10 overflow-hidden rounded-2xl border border-default bg-transparent`, Me)),
      (t[42] = Me),
      (t[43] = Ne));
  let Pe;
  t[44] !== ae || t[45] !== U || t[46] !== P || t[47] !== W
    ? ((Pe =
        W.length === 0
          ? (0, $.jsx)(`div`, {
              className: `flex h-[70px] items-center justify-center px-4 text-sm leading-5 text-secondary`,
              children: (0, $.jsx)(V, {
                id: `codex.rateLimitResetPromptModal.usageUnavailable`,
                defaultMessage: `Usage details unavailable`,
                description: `Fallback shown when Codex usage limit details are unavailable`,
              }),
            })
          : W.map((e, t) =>
              (0, $.jsx)(
                tt,
                {
                  className: _(t > 0 && `border-t border-default`),
                  isResetFillActive: P === `revealing-usage` || ae,
                  resetFillAnimation: U,
                  usageWindow: e,
                },
                `${e.windowMinutes}-${t}`,
              ),
            )),
      (t[44] = ae),
      (t[45] = U),
      (t[46] = P),
      (t[47] = W),
      (t[48] = Pe))
    : (Pe = t[48]);
  let Fe;
  t[49] !== Ne || t[50] !== Pe
    ? ((Fe = (0, $.jsx)(`div`, { className: Ne, children: Pe })), (t[49] = Ne), (t[50] = Pe), (t[51] = Fe))
    : (Fe = t[51]);
  let Ie;
  t[52] !== ue ||
  t[53] !== de ||
  t[54] !== xe ||
  t[55] !== Ce ||
  t[56] !== ye ||
  t[57] !== he ||
  t[58] !== j ||
  t[59] !== s ||
  t[60] !== J ||
  t[61] !== K ||
  t[62] !== G ||
  t[63] !== se
    ? ((Ie =
        G > 0 || he
          ? (0, $.jsx)(qe, {
              activeCreditId: ue,
              availableCount: G,
              credits: se,
              disabled: J || G === 0,
              exitingCreditId: de,
              isLoading: s,
              isOpen: j,
              onCreditHideComplete: xe,
              onOpenChange: (e) => {
                J || N(e);
              },
              onPanelExitComplete: Ce,
              onResetCredit: ye,
              retryCreditId: K,
            })
          : null),
      (t[52] = ue),
      (t[53] = de),
      (t[54] = xe),
      (t[55] = Ce),
      (t[56] = ye),
      (t[57] = he),
      (t[58] = j),
      (t[59] = s),
      (t[60] = J),
      (t[61] = K),
      (t[62] = G),
      (t[63] = se),
      (t[64] = Ie))
    : (Ie = t[64]);
  let Le;
  t[65] !== Fe || t[66] !== Ie
    ? ((Le = (0, $.jsxs)(ee, { className: `gap-4 pt-4`, children: [Fe, Ie] })),
      (t[65] = Fe),
      (t[66] = Ie),
      (t[67] = Le))
    : (Le = t[67]);
  let Re;
  t[68] !== o || t[69] !== fe
    ? ((Re =
        o != null || fe
          ? (0, $.jsx)(ee, {
              className: `pt-5`,
              children: (0, $.jsxs)(`div`, {
                className: `flex min-h-5 items-center gap-3 text-sm leading-5 text-tertiary`,
                children: [
                  (0, $.jsx)(`span`, { className: `h-px flex-1 bg-border` }),
                  (0, $.jsx)(`span`, {
                    "aria-live": `polite`,
                    className: _(`flex items-center gap-2 text-center`, o != null && `text-danger`),
                    children:
                      o ??
                      (0, $.jsx)(V, {
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
      (t[68] = o),
      (t[69] = fe),
      (t[70] = Re))
    : (Re = t[70]);
  let ze;
  t[71] !== me || t[72] !== u || t[73] !== m || t[74] !== y || t[75] !== fe
    ? ((ze = fe
        ? (0, $.jsx)(ee, {
            className: `pt-4`,
            children: (0, $.jsxs)(`div`, {
              className: _(`grid gap-3`, u != null && m != null ? `grid-cols-2` : `grid-cols-1`),
              children: [
                m == null
                  ? null
                  : (0, $.jsxs)(M, {
                      className: _(dt, !y && ft),
                      color: `secondary`,
                      disabled: me,
                      onClick: m,
                      size: `medium`,
                      children: [
                        (0, $.jsx)(a, { "aria-hidden": !1, asset: l }),
                        (0, $.jsx)(V, {
                          id: `codex.rateLimitResetPromptModal.upgradePlan`,
                          defaultMessage: `Upgrade plan`,
                          description: `Button label for upgrading a Codex subscription plan`,
                        }),
                      ],
                    }),
                u == null
                  ? null
                  : (0, $.jsxs)(M, {
                      className: _(dt, !y && ft),
                      color: `secondary`,
                      disabled: me,
                      onClick: u,
                      size: `medium`,
                      children: [
                        (0, $.jsx)(le, { className: `icon-base` }),
                        (0, $.jsx)(V, {
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
      (t[71] = me),
      (t[72] = u),
      (t[73] = m),
      (t[74] = y),
      (t[75] = fe),
      (t[76] = ze))
    : (ze = t[76]);
  let Be;
  t[77] !== Ae || t[78] !== Le || t[79] !== Re || t[80] !== ze
    ? ((Be = (0, $.jsxs)(f, {
        className: `overflow-y-auto text-default`,
        style: Ae,
        children: [je, Le, Re, ze],
      })),
      (t[77] = Ae),
      (t[78] = Le),
      (t[79] = Re),
      (t[80] = ze),
      (t[81] = Be))
    : (Be = t[81]);
  let Ve;
  return (
    t[82] !== q || t[83] !== Te || t[84] !== Ee || t[85] !== Oe || t[86] !== Be || t[87] !== we
      ? ((Ve = (0, $.jsx)(k, {
          open: !0,
          onOpenChange: we,
          shouldIgnoreClickOutside: q,
          showDialogClose: Te,
          dialogCloseClassName: `top-[22px]`,
          contentClassName: `!max-w-[calc(100vw/var(--codex-window-zoom)-2rem)]`,
          dialogCloseLabel: Ee,
          contentProps: Oe,
          children: Be,
        })),
        (t[82] = q),
        (t[83] = Te),
        (t[84] = Ee),
        (t[85] = Oe),
        (t[86] = Be),
        (t[87] = we),
        (t[88] = Ve))
      : (Ve = t[88]),
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
    ((lt = b()),
      m(),
      v(),
      P(),
      (ut = s()),
      j(),
      U(),
      N(),
      h(),
      u(),
      y(),
      E(),
      de(),
      Ze(),
      Te(),
      et(),
      at(),
      ($ = g()),
      (dt = `h-[84px] flex-col justify-center gap-2 !rounded-2xl !text-base !leading-5 font-medium`),
      (ft = `transition-transform duration-basic ease-out active:scale-[0.98]`));
  }))();
}
function mt(e) {
  let n = (0, ht.c)(35),
    r,
    i,
    a;
  n[0] === e
    ? ((r = n[1]), (i = n[2]), (a = n[3]))
    : (({ currentPlan: r, onClose: i, ...a } = e), (n[0] = e), (n[1] = r), (n[2] = i), (n[3] = a));
  let o = t(x),
    s;
  n[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = { logExposure: !0 }), (n[4] = s)) : (s = n[4]);
  let c = Se(s),
    l = ye(),
    u = ve(),
    d = ie(),
    f = re(`931825599`),
    p;
  n[5] !== r || n[6] !== d ? ((p = ae(d, r)), (n[5] = r), (n[6] = d), (n[7] = p)) : (p = n[7]);
  let m = p,
    h;
  n[8] === r ? (h = n[9]) : ((h = Oe(r)), (n[8] = r), (n[9] = h));
  let g = h,
    _;
  n[10] !== g || n[11] !== f
    ? ((_ = !g || f.get(`enabled`, !1)), (n[10] = g), (n[11] = f), (n[12] = _))
    : (_ = n[12]);
  let v = _,
    y = v && (g || m),
    b = g,
    S;
  n[13] === b ? (S = n[14]) : ((S = { enabled: b, includePaymentMethod: !0 }), (n[13] = b), (n[14] = S));
  let { data: C } = ze(S),
    w = y,
    T;
  n[15] === w ? (T = n[16]) : ((T = { enabled: w }), (n[15] = w), (n[16] = T));
  let { data: E } = q(T),
    D = E == null ? void 0 : E.payment_methods.length > 0,
    O;
  n[17] !== C?.isEnabled || n[18] !== D || n[19] !== l || n[20] !== i || n[21] !== o || n[22] !== d
    ? ((O = (e) => {
        let t = J(d, `personal`);
        (i(),
          G(o, {
            audience: `personal`,
            checkoutKind: `standalone_credit`,
            entryPoint: `rate_limit_reset_modal`,
          }),
          l({
            event: e,
            intent: `purchase`,
            hasSavedPaymentMethod: D,
            isAutoReloadEnabled: C?.isEnabled ?? !1,
            isCustomCheckoutEnabled: t,
            legacyUrl: Le,
            source: `rate_limit_reset_modal`,
          }));
      }),
      (n[17] = C?.isEnabled),
      (n[18] = D),
      (n[19] = l),
      (n[20] = i),
      (n[21] = o),
      (n[22] = d),
      (n[23] = O))
    : (O = n[23]);
  let k = y ? O : void 0,
    A;
  n[24] !== r || n[25] !== c || n[26] !== v || n[27] !== i || n[28] !== u
    ? ((A =
        !v || r === he.PRO || r === he.PROMAX
          ? void 0
          : (e) => {
              (i(),
                u({
                  currentPlan: r,
                  defaultTab: `personal`,
                  event: e,
                  getPricingUrl: c,
                  source: `rate_limit_reset_modal`,
                }));
            }),
      (n[24] = r),
      (n[25] = c),
      (n[26] = v),
      (n[27] = i),
      (n[28] = u),
      (n[29] = A))
    : (A = n[29]);
  let j;
  return (
    n[30] !== i || n[31] !== a || n[32] !== k || n[33] !== A
      ? ((j = (0, gt.jsx)(ot, { ...a, onAddCredits: k, onClose: i, onUpgradePlan: A })),
        (n[30] = i),
        (n[31] = a),
        (n[32] = k),
        (n[33] = A),
        (n[34] = j))
      : (j = n[34]),
    j
  );
}
var ht, gt;
function _t() {
  return (_t = e(() => {
    ((ht = b()), P(), oe(), Ae(), De(), ue(), te(), be(), fe(), n(), Fe(), Ee(), pt(), (gt = g()));
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
    { data: c } = xe(),
    { data: l } = I(Y),
    { data: u, isLoading: d } = se(),
    f;
  t[0] === u?.credits ? (f = t[1]) : ((f = u?.credits.filter(yt) ?? null), (t[0] = u?.credits), (t[1] = f));
  let p = f,
    m = u?.available_count ?? i ?? 0,
    h;
  t[2] !== c?.plan_type || t[3] !== l?.plan_type
    ? ((h = Ne(c?.plan_type ?? l?.plan_type)?.pricePlan ?? null),
      (t[2] = c?.plan_type),
      (t[3] = l?.plan_type),
      (t[4] = h))
    : (h = t[4]);
  let g = h,
    _ = l ?? null,
    v;
  t[5] === _ ? (v = t[6]) : ((v = ce(_)), (t[5] = _), (t[6] = v));
  let y = v;
  if (g != null) {
    let e;
    return (
      t[7] !== m ||
      t[8] !== p ||
      t[9] !== g ||
      t[10] !== n ||
      t[11] !== r ||
      t[12] !== d ||
      t[13] !== a ||
      t[14] !== o ||
      t[15] !== s ||
      t[16] !== y
        ? ((e = (0, xt.jsx)(mt, {
            availableCount: m,
            availableResetCredits: p,
            currentPlan: g,
            defaultResetCreditsOpen: n,
            errorMessage: r,
            isLoadingResetCredits: d,
            isResetting: a,
            onClose: o,
            onResetCredit: s,
            usageWindows: y,
          })),
          (t[7] = m),
          (t[8] = p),
          (t[9] = g),
          (t[10] = n),
          (t[11] = r),
          (t[12] = d),
          (t[13] = a),
          (t[14] = o),
          (t[15] = s),
          (t[16] = y),
          (t[17] = e))
        : (e = t[17]),
      e
    );
  }
  let b;
  return (
    t[18] !== m ||
    t[19] !== p ||
    t[20] !== n ||
    t[21] !== r ||
    t[22] !== d ||
    t[23] !== a ||
    t[24] !== o ||
    t[25] !== s ||
    t[26] !== y
      ? ((b = (0, xt.jsx)(ot, {
          availableCount: m,
          availableResetCredits: p,
          defaultResetCreditsOpen: n,
          errorMessage: r,
          isLoadingResetCredits: d,
          isResetting: a,
          onClose: o,
          onResetCredit: s,
          usageWindows: y,
        })),
        (t[18] = m),
        (t[19] = p),
        (t[20] = n),
        (t[21] = r),
        (t[22] = d),
        (t[23] = a),
        (t[24] = o),
        (t[25] = s),
        (t[26] = y),
        (t[27] = b))
      : (b = t[27]),
    b
  );
}
function yt(e) {
  return e.status === `available`;
}
var bt, xt;
function St() {
  return (St = e(() => {
    ((bt = b()), P(), Me(), Ae(), me(), we(), _t(), pt(), (xt = g()));
  }))();
}
function Ct(e) {
  let n = (0, wt.c)(19),
    {
      defaultResetCreditsOpen: r,
      initialAvailableCount: i,
      isRateLimitReached: a,
      onClose: o,
      onResetComplete: s,
    } = e,
    c = t(x),
    l = R(),
    [u] = (0, Tt.useState)(Ve),
    [d, f] = (0, Tt.useState)(null),
    p = K(),
    m = p.isPending,
    h;
  n[0] !== m || n[1] !== o
    ? ((h = () => {
        m || o();
      }),
      (n[0] = m),
      (n[1] = o),
      (n[2] = h))
    : (h = n[2]);
  let g = h,
    _;
  n[3] !== p.mutateAsync ||
  n[4] !== i ||
  n[5] !== l ||
  n[6] !== a ||
  n[7] !== m ||
  n[8] !== s ||
  n[9] !== u ||
  n[10] !== c
    ? ((_ = async (e, t) => {
        let n = t === void 0 ? (i ?? 0) : t;
        if (m || n === 0) return { status: `failed` };
        f(null);
        let r = c.query.getData(Y),
          o = await u.redeem({ availableCount: n, consume: p.mutateAsync, creditId: e });
        switch (o.status) {
          case `in_flight`:
            return { status: `failed` };
          case `transport_error`:
            return (
              f(
                l.formatMessage({
                  id: `codex.rateLimitResetModal.error`,
                  defaultMessage: `Couldn’t reset usage. Please try again`,
                  description: `Error shown when resetting Codex usage fails`,
                }),
              ),
              { creditId: o.creditId, status: `retry` }
            );
          case `rejected`:
            return (f(Be(o.code, l)), { status: `failed` });
          case `reset`: {
            let e = Math.max(o.availableCountBefore - 1, 0);
            return (
              f(null),
              Pe(c, H, {
                availableCountBefore: o.availableCountBefore,
                componentType: `modal`,
                isRateLimitReached: a,
                redemptionMethod: o.creditId == null ? `automatic` : `selected_credit`,
                remainingCount: e,
              }),
              W(c, r, o.resetType),
              ce(r ?? null).length > 0 && c.set(Qe, r?.account_id ?? null, c.get(Y).dataUpdatedAt),
              c
                .get(B)
                .success(
                  (0, Et.jsx)(V, {
                    id: `codex.upsellBanner.resetUsage.success`,
                    defaultMessage: `Usage reset. You have {remainingCount, plural, one {# left} other {# left}}`,
                    description: `Toast shown after a Codex rate limit reset is used`,
                    values: { remainingCount: e },
                  }),
                  { hasCloseButton: !1 },
                ),
              s(e),
              { creditId: o.creditId, remainingCount: e, status: `completed` }
            );
          }
        }
      }),
      (n[3] = p.mutateAsync),
      (n[4] = i),
      (n[5] = l),
      (n[6] = a),
      (n[7] = m),
      (n[8] = s),
      (n[9] = u),
      (n[10] = c),
      (n[11] = _))
    : (_ = n[11]);
  let v = _,
    y;
  return (
    n[12] !== r || n[13] !== d || n[14] !== g || n[15] !== v || n[16] !== i || n[17] !== m
      ? ((y = (0, Et.jsx)(vt, {
          defaultResetCreditsOpen: r,
          errorMessage: d,
          initialAvailableCount: i,
          isResetting: m,
          onClose: g,
          onResetCredit: v,
        })),
        (n[12] = r),
        (n[13] = d),
        (n[14] = g),
        (n[15] = v),
        (n[16] = i),
        (n[17] = m),
        (n[18] = y))
      : (y = n[18]),
    y
  );
}
var wt, Tt, Et;
function Dt() {
  return (Dt = e(() => {
    ((wt = b()), C(), P(), (Tt = s()), j(), Me(), O(), me(), Ie(), n(), we(), pe(), St(), et(), (Et = g()));
  }))();
}
Dt();
export { Ct as RateLimitResetModal };
//# sourceMappingURL=modal-impl-b317d7e2064b.js.map
