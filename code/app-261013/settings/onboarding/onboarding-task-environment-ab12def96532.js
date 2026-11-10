import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  Cot as r,
  EPt as i,
  FD as a,
  GV as o,
  HT as s,
  IDt as c,
  JR as l,
  LT as u,
  MO as d,
  Mz as f,
  ND as p,
  Nz as m,
  Pxt as h,
  RT as g,
  TJ as _,
  TLt as v,
  VDt as y,
  VT as b,
  Vxt as x,
  YR as S,
  _Mt as C,
  _O as w,
  _wt as T,
  bz as E,
  cO as D,
  cz as O,
  fO as k,
  fSt as A,
  gMt as j,
  gwt as M,
  iot as N,
  jDt as P,
  jO as F,
  lO as I,
  mO as L,
  oD as R,
  oIt as z,
  oO as ee,
  oSt as te,
  owt as ne,
  pIt as re,
  pLt as ie,
  qft as ae,
  rst as oe,
  sD as se,
  sO as ce,
  swt as le,
  sz as ue,
  t3 as de,
  vO as fe,
  vzt as B,
  wot as pe,
  xMt as V,
  xz as me,
  yzt as H,
} from "./app-shared-bbfeca5e5737.js";
import {
  Czt as he,
  GMr as ge,
  Gk as _e,
  Kk as ve,
  NPr as ye,
  OPr as be,
  Szt as xe,
  Tdn as Se,
  Tzt as Ce,
  YMr as we,
  ZMr as Te,
  eDr as Ee,
  hHt as De,
  jdn as Oe,
  kPr as ke,
  oDr as Ae,
  oFr as je,
  pHt as Me,
  tDr as Ne,
  tNr as Pe,
  vzt as Fe,
  yzt as Ie,
} from "./app-initial-5851df3f6cb1.js";
import { $ as Le, J as Re, X as ze, Z as Be, it as Ve, rt as U } from "./tasks-e5a6331c5cca.js";
import { n as He, t as Ue } from "./streaming-text-7dc4acdfd418.js";
import { n as We, t as Ge } from "./onboarding-entrypoint-38023edb9c27.js";
var Ke, qe, Je;
function Ye() {
  return (Ye = e(() => {
    (h(),
      Ge(),
      be(),
      Le(),
      Ve(),
      (Ke = A(Re, () => `visible`)),
      (qe = te(Re, ({ get: e }) =>
        e(We) === `life_sciences` &&
        [U.WelcomeAnimation, U.RosalindWelcome, U.ConversationalOnboarding, U.RoleSelection].some(
          (t) => t === e(ze),
        ) &&
        e(ke, `2744470156`)
          ? `hidden`
          : e(Ke),
      )),
      (Je = A(Re, !1)));
  }))();
}
var Xe;
function Ze() {
  return (Ze = e(() => {
    (h(),
      Pe(),
      pe(),
      be(),
      (Xe = te(r, ({ get: e }) => {
        if (e(ye)) return `loading`;
        if (!e(ke, `3294441402`)) return `disabled`;
        let t = e(Te);
        return t.status === `loading` || (t.status === `denied` && t.reason === `account-mismatch`)
          ? `loading`
          : t.status === `allowed`
            ? e(ge) != null && e(we) != null
              ? `enabled`
              : `loading`
            : `disabled`;
      })));
  }))();
}
var W, Qe;
function $e() {
  return ($e = e(() => {
    (H(),
      (W = V()),
      (Qe = (e) =>
        (0, W.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, W.jsx)(`path`, {
              d: `M3.333 8.333h13.334v8.334H3.333V8.333Z`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinejoin: `round`,
            }),
            (0, W.jsx)(`path`, {
              d: `M2.5 5.833h15v2.5h-15v-2.5Z`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinejoin: `round`,
            }),
            (0, W.jsx)(`path`, {
              d: `M10 5.833v10.834`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinecap: `round`,
            }),
            (0, W.jsx)(`path`, {
              d: `M10 5.833H7.917A2.083 2.083 0 1 1 10 3.75v2.083Z`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinejoin: `round`,
            }),
            (0, W.jsx)(`path`, {
              d: `M10 5.833h2.083A2.083 2.083 0 1 0 10 3.75v2.083Z`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinejoin: `round`,
            }),
          ],
        })));
  }))();
}
function et(e) {
  let n = (0, tt.c)(32),
    { creditRewardAmount: r, skipDisabled: i, onClose: a, onSkip: o } = e,
    s = i !== void 0 && i,
    l = r == null,
    u = r == null ? `compact` : `feature`,
    d;
  n[0] === a
    ? (d = n[1])
    : ((d = (e) => {
        e || a();
      }),
      (n[0] = a),
      (n[1] = d));
  let f;
  n[2] === a
    ? (f = n[3])
    : ((f = (e) => {
        (e.preventDefault(), a());
      }),
      (n[2] = a),
      (n[3] = f));
  let p;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, G.jsx)(w, {
        className: `sr-only`,
        children: (0, G.jsx)(c, {
          id: `electron.onboarding.conversationalOnboarding.skipDialog.title`,
          defaultMessage: `Skip setup?`,
          description: `Title for the confirmation dialog shown before skipping conversational onboarding`,
        }),
      })),
      (n[4] = p))
    : (p = n[4]);
  let m, h;
  n[5] === r
    ? ((m = n[6]), (h = n[7]))
    : ((m = (0, G.jsx)(I, {
        children: (0, G.jsx)(D, {
          title:
            r == null
              ? (0, G.jsx)(c, {
                  id: `electron.onboarding.conversationalOnboarding.skipDialog.heading`,
                  defaultMessage: `Skip setup?`,
                  description: `Heading for the confirmation dialog shown before skipping conversational onboarding`,
                })
              : (0, G.jsx)(c, {
                  id: `electron.onboarding.conversationalOnboarding.skipDialog.creditRewardHeading`,
                  defaultMessage: `Finish set up and get {creditAmount, plural, one {# credit} other {# credits}}`,
                  description: `Heading explaining how many Codex credits users can receive by finishing conversational onboarding`,
                  values: { creditAmount: r },
                }),
          subtitle:
            r == null
              ? (0, G.jsx)(c, {
                  id: `electron.onboarding.conversationalOnboarding.skipDialog.subtitle`,
                  defaultMessage: `You’ll go straight to ChatGPT`,
                  description: `Subtitle explaining what happens when conversational onboarding is skipped`,
                })
              : (0, G.jsx)(c, {
                  id: `electron.onboarding.conversationalOnboarding.skipDialog.creditRewardSubtitleWithAmount`,
                  defaultMessage: `Finish setting up your account and get {creditAmount, plural, one {# credit} other {# credits}} added to your balance`,
                  description: `Subtitle explaining that users can add the displayed onboarding reward to their balance by finishing setup`,
                  values: { creditAmount: r },
                }),
        }),
      })),
      (h =
        r != null &&
        (0, G.jsx)(I, {
          children: (0, G.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3 rounded-2xl bg-chart-blue/10 px-4 py-4 text-chart-blue`,
            children: [
              (0, G.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-4`,
                children: [
                  (0, G.jsx)(Qe, { "aria-hidden": !0, className: `icon-sm shrink-0` }),
                  (0, G.jsx)(`span`, {
                    className: `text-base leading-6 font-semibold tabular-nums`,
                    children: (0, G.jsx)(c, {
                      id: `electron.onboarding.conversationalOnboarding.skipDialog.creditRewardAmount`,
                      defaultMessage: `+{creditAmount, plural, one {# credit} other {# credits}}`,
                      description: `Number of Codex credits available for finishing conversational onboarding`,
                      values: { creditAmount: r },
                    }),
                  }),
                ],
              }),
              (0, G.jsx)(`span`, {
                className: `text-base leading-6`,
                children: (0, G.jsx)(c, {
                  id: `electron.onboarding.conversationalOnboarding.skipDialog.creditRewardLabel`,
                  defaultMessage: `Onboarding bonus`,
                  description: `Label for the Codex credits available for finishing conversational onboarding`,
                }),
              }),
            ],
          }),
        })),
      (n[5] = r),
      (n[6] = m),
      (n[7] = h));
  let g;
  n[8] === r
    ? (g = n[9])
    : ((g = (0, G.jsx)(t, {
        color: `primary`,
        type: `submit`,
        children:
          r == null
            ? (0, G.jsx)(c, {
                id: `electron.onboarding.conversationalOnboarding.skipDialog.keepSettingUp`,
                defaultMessage: `Keep setting up`,
                description: `Button that closes the skip confirmation and returns to conversational onboarding`,
              })
            : (0, G.jsx)(c, {
                id: `electron.onboarding.conversationalOnboarding.skipDialog.keepSettingUpForCredits`,
                defaultMessage: `Finish set up`,
                description: `Button that closes the skip confirmation and continues conversational onboarding so the user can receive Codex credits`,
              }),
      })),
      (n[8] = r),
      (n[9] = g));
  let _;
  n[10] !== a || n[11] !== o
    ? ((_ = () => {
        (a(), o());
      }),
      (n[10] = a),
      (n[11] = o),
      (n[12] = _))
    : (_ = n[12]);
  let v;
  n[13] === r
    ? (v = n[14])
    : ((v =
        r == null
          ? (0, G.jsx)(c, {
              id: `electron.onboarding.conversationalOnboarding.skipDialog.goToApp`,
              defaultMessage: `Go to ChatGPT`,
              description: `Button that confirms skipping conversational onboarding and opens the app`,
            })
          : (0, G.jsx)(c, {
              id: `electron.onboarding.conversationalOnboarding.skipDialog.skipForCredits`,
              defaultMessage: `Skip`,
              description: `Button that confirms skipping conversational onboarding and forfeits the available Codex credits`,
            })),
      (n[13] = r),
      (n[14] = v));
  let y;
  n[15] !== s || n[16] !== _ || n[17] !== v
    ? ((y = (0, G.jsx)(t, { color: `outline`, disabled: s, type: `button`, onClick: _, children: v })),
      (n[15] = s),
      (n[16] = _),
      (n[17] = v),
      (n[18] = y))
    : (y = n[18]);
  let b;
  n[19] !== y || n[20] !== g
    ? ((b = (0, G.jsx)(I, { children: (0, G.jsxs)(ce, { className: `gap-2`, children: [g, y] }) })),
      (n[19] = y),
      (n[20] = g),
      (n[21] = b))
    : (b = n[21]);
  let x;
  n[22] !== b || n[23] !== f || n[24] !== m || n[25] !== h
    ? ((x = (0, G.jsxs)(ee, { as: `form`, className: `select-none`, onSubmit: f, children: [p, m, h, b] })),
      (n[22] = b),
      (n[23] = f),
      (n[24] = m),
      (n[25] = h),
      (n[26] = x))
    : (x = n[26]);
  let S;
  return (
    n[27] !== x || n[28] !== l || n[29] !== u || n[30] !== d
      ? ((S = (0, G.jsx)(L, { open: !0, showDialogClose: l, size: u, onOpenChange: d, children: x })),
        (n[27] = x),
        (n[28] = l),
        (n[29] = u),
        (n[30] = d),
        (n[31] = S))
      : (S = n[31]),
    S
  );
}
var tt, G;
function nt() {
  return (nt = e(() => {
    ((tt = B()), P(), de(), fe(), k(), $e(), (G = V()));
  }))();
}
function rt(e) {
  let t = (0, it.c)(41),
    {
      children: n,
      followContent: r,
      hasSelectedTurn: i,
      anchorHostId: o,
      onScrollEnd: s,
      onScrolledContentUnderHeaderChange: c,
    } = e,
    l = r !== void 0 && r,
    u = i !== void 0 && i,
    d = S(),
    f = (0, K.useRef)(null),
    [p, m] = (0, K.useState)(u),
    [h, g] = (0, K.useState)(!1),
    _;
  t[0] === c
    ? (_ = t[1])
    : ((_ = (e) => {
        let t = f.current;
        if (t == null) {
          (g(!1), c(!1));
          return;
        }
        let n = e.getBoundingClientRect(),
          r = t.getBoundingClientRect();
        (g(r.bottom > n.bottom + ot), c(r.top < n.top + at));
      }),
      (t[0] = c),
      (t[1] = _));
  let v = _,
    y;
  t[2] === v ? (y = t[3]) : ((y = (e, t) => v(t)), (t[2] = v), (t[3] = y));
  let b = a(y),
    x;
  t[4] !== l || t[5] !== v
    ? ((x = (e, t) => {
        (t.parentElement != null && v(t.parentElement),
          l && t.scrollIntoView({ behavior: `auto`, block: `end`, inline: `nearest` }));
      }),
      (t[4] = l),
      (t[5] = v),
      (t[6] = x))
    : (x = t[6]);
  let C = a(x),
    w;
  t[7] !== p || t[8] !== d
    ? ((w = (e, t) => {
        if (e == null || (p && !(t !== void 0 && t))) return;
        let n = d ? `auto` : `smooth`;
        (e.scrollIntoView({ behavior: p ? `instant` : n, block: p ? `end` : `start`, inline: `nearest` }),
          m(!1));
      }),
      (t[7] = p),
      (t[8] = d),
      (t[9] = w))
    : (w = t[9]);
  let T = me(w),
    E;
  t[10] !== u || t[11] !== p || t[12] !== d
    ? ((E = (e) => {
        if (e == null || (p && u)) return;
        let t = d ? `auto` : `smooth`;
        (e.scrollIntoView({ behavior: p ? `instant` : t, block: `nearest`, inline: `nearest` }), m(!1));
      }),
      (t[10] = u),
      (t[11] = p),
      (t[12] = d),
      (t[13] = E))
    : (E = t[13]);
  let D = me(E),
    O = p && `invisible`,
    k;
  t[14] === O ? (k = t[15]) : ((k = j(`relative flex min-h-0 flex-1`, O)), (t[14] = O), (t[15] = k));
  let A;
  t[16] === v ? (A = t[17]) : ((A = (e) => v(e.currentTarget)), (t[16] = v), (t[17] = A));
  let M;
  t[18] !== n || t[19] !== D || t[20] !== T
    ? ((M = n({ scrollCurrentTurnIntoView: T, scrollChoicesIntoView: D })),
      (t[18] = n),
      (t[19] = D),
      (t[20] = T),
      (t[21] = M))
    : (M = t[21]);
  let N;
  t[22] === M
    ? (N = t[23])
    : ((N = (0, q.jsx)(`div`, {
        ref: f,
        className: `mx-auto flex w-full max-w-[820px] flex-col font-normal`,
        children: M,
      })),
      (t[22] = M),
      (t[23] = N));
  let P;
  t[24] !== C || t[25] !== N
    ? ((P = (0, q.jsx)(`div`, {
        ref: C,
        className: `min-h-full shrink-0 px-10 pt-[clamp(104px,18vh,120px)] pb-10`,
        children: N,
      })),
      (t[24] = C),
      (t[25] = N),
      (t[26] = P))
    : (P = t[26]);
  let F;
  t[27] !== s || t[28] !== b || t[29] !== A || t[30] !== P
    ? ((F = (0, q.jsx)(`div`, {
        ref: b,
        className: `[container-type:size] flex min-h-0 flex-1 [scrollbar-width:none] flex-col overflow-x-hidden overflow-y-auto [overflow-anchor:none] [&::-webkit-scrollbar]:hidden`,
        onScroll: A,
        onScrollEnd: s,
        children: P,
      })),
      (t[27] = s),
      (t[28] = b),
      (t[29] = A),
      (t[30] = P),
      (t[31] = F))
    : (F = t[31]);
  let I = h ? `opacity-100` : `opacity-0`,
    L;
  t[32] === I
    ? (L = t[33])
    : ((L = j(
        `pointer-events-none absolute inset-x-6 -bottom-14 mx-auto h-28 max-w-4xl bg-gradient-to-b from-transparent via-surface to-transparent blur-sm transition-opacity duration-basic`,
        I,
      )),
      (t[32] = I),
      (t[33] = L));
  let R;
  t[34] === L
    ? (R = t[35])
    : ((R = (0, q.jsx)(`div`, { "aria-hidden": !0, className: L })), (t[34] = L), (t[35] = R));
  let z;
  return (
    t[36] !== o || t[37] !== F || t[38] !== R || t[39] !== k
      ? ((z = (0, q.jsxs)(`div`, { className: k, "data-pip-anchor-host": o, children: [F, R] })),
        (t[36] = o),
        (t[37] = F),
        (t[38] = R),
        (t[39] = k),
        (t[40] = z))
      : (z = t[40]),
    z
  );
}
var it, K, q, at, ot;
function st() {
  return (st = e(() => {
    ((it = B()), C(), (K = H()), l(), p(), E(), (q = V()), (at = 48), (ot = 1));
  }))();
}
function ct(e) {
  let t = (0, lt.c)(25),
    { checked: n, onChange: r, variant: i } = e,
    a = i === void 0 ? `toggle` : i,
    o = y(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, J.jsx)(c, {
        id: `electron.onboarding.welcomeV2.personalizedSuggestions.title`,
        defaultMessage: `Suggest personalized tasks`,
        description: `Label for the welcome v2 personalized suggestions control`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let l = s,
    d = a === `checkbox` ? `py-[13px]` : `mt-7`,
    p;
  t[1] === d
    ? (p = t[2])
    : ((p = j(`relative flex items-center justify-center gap-2`, d)), (t[1] = d), (t[2] = p));
  let m;
  t[3] !== n || t[4] !== o || t[5] !== r || t[6] !== a
    ? ((m =
        a === `checkbox`
          ? (0, J.jsx)(b, {
              id: `personalized-suggestions`,
              className: `size-5 !rounded-[7px] [&_svg]:size-4`,
              checked: n,
              onCheckedChange: r,
            })
          : (0, J.jsx)(F, {
              checked: n,
              ariaLabel: o.formatMessage({
                id: `electron.onboarding.welcomeV2.personalizedSuggestions.toggle`,
                defaultMessage: `Enable personalized suggestions`,
                description: `Accessible label for the welcome v2 personalized suggestions toggle`,
              }),
              onChange: r,
            })),
      (t[3] = n),
      (t[4] = o),
      (t[5] = r),
      (t[6] = a),
      (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] !== n || t[9] !== r || t[10] !== a
    ? ((h =
        a === `checkbox`
          ? (0, J.jsx)(`label`, {
              htmlFor: `personalized-suggestions`,
              className: `cursor-interaction text-[14px] leading-5 font-normal text-default focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
              children: l,
            })
          : (0, J.jsx)(`button`, {
              type: `button`,
              className: `cursor-interaction text-lg leading-6 font-normal text-default focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
              "aria-pressed": n,
              onClick: () => r(!n),
              children: l,
            })),
      (t[8] = n),
      (t[9] = r),
      (t[10] = a),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, J.jsx)(`span`, {
        className: `block text-xs leading-4 font-medium`,
        children: (0, J.jsx)(c, {
          id: `electron.onboarding.welcomeV2.personalizedSuggestions.description.chatgpt`,
          defaultMessage: `ChatGPT can suggest what to do next by searching project files and connected apps`,
          description: `Tooltip for the welcome v2 personalized suggestions control in the ChatGPT app`,
        }),
      })),
      (t[12] = g))
    : (g = t[12]);
  let _;
  t[13] === o
    ? (_ = t[14])
    : ((_ = o.formatMessage({
        id: `electron.onboarding.welcomeV2.personalizedSuggestions.info`,
        defaultMessage: `About personalized suggestions`,
        description: `Accessible label for the welcome v2 personalized suggestions info tooltip`,
      })),
      (t[13] = o),
      (t[14] = _));
  let v;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, J.jsx)(f, { asset: u })), (t[15] = v))
    : (v = t[15]);
  let x;
  t[16] === _
    ? (x = t[17])
    : ((x = (0, J.jsx)(ue, {
        side: `top`,
        sideOffset: 6,
        delayDuration: 0,
        disablePadding: !0,
        tooltipClassName: `px-1.5 py-1.5 text-center shadow-lg`,
        tooltipMaxWidth: `17rem`,
        tooltipContent: g,
        children: (0, J.jsx)(`button`, {
          type: `button`,
          className: `inline-flex size-4 items-center justify-center rounded-full text-tertiary focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
          "aria-label": _,
          children: v,
        }),
      })),
      (t[16] = _),
      (t[17] = x));
  let S;
  t[18] !== x || t[19] !== h
    ? ((S = (0, J.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [h, x] })),
      (t[18] = x),
      (t[19] = h),
      (t[20] = S))
    : (S = t[20]);
  let C;
  return (
    t[21] !== S || t[22] !== p || t[23] !== m
      ? ((C = (0, J.jsxs)(`div`, { className: p, children: [m, S] })),
        (t[21] = S),
        (t[22] = p),
        (t[23] = m),
        (t[24] = C))
      : (C = t[24]),
    C
  );
}
var lt, J;
function ut() {
  return (ut = e(() => {
    ((lt = B()), g(), C(), P(), s(), m(), d(), O(), (J = V()));
  }))();
}
function dt(e) {
  let n = (0, pt.c)(15),
    {
      personalizedSuggestionsEnabled: r,
      disabled: i,
      pending: a,
      continueDisabled: o,
      continueType: s,
      onPersonalizedSuggestionsChange: l,
      onContinue: u,
    } = e,
    d = s === void 0 ? `button` : s,
    f;
  n[0] !== l || n[1] !== r
    ? ((f = (0, Y.jsx)(ct, { checked: r, onChange: l, variant: `checkbox` })),
      (n[0] = l),
      (n[1] = r),
      (n[2] = f))
    : (f = n[2]);
  let p;
  n[3] !== i || n[4] !== f
    ? ((p = (0, Y.jsx)(`fieldset`, { disabled: i, children: f })), (n[3] = i), (n[4] = f), (n[5] = p))
    : (p = n[5]);
  let m = o || i,
    h;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Y.jsx)(c, {
        id: `electron.onboarding.conversationalOnboarding.continue`,
        defaultMessage: `Continue`,
        description: `Button that continues from conversational onboarding role selection`,
      })),
      (n[6] = h))
    : (h = n[6]);
  let g;
  n[7] !== d || n[8] !== u || n[9] !== a || n[10] !== m
    ? ((g = (0, Y.jsx)(t, {
        className: `h-11.5 w-80 justify-center !text-lg !leading-6`,
        type: d,
        "aria-busy": a,
        color: `primary`,
        disabled: m,
        loading: a,
        radius: `full`,
        size: `large`,
        onClick: u,
        children: h,
      })),
      (n[7] = d),
      (n[8] = u),
      (n[9] = a),
      (n[10] = m),
      (n[11] = g))
    : (g = n[11]);
  let _;
  return (
    n[12] !== p || n[13] !== g
      ? ((_ = (0, Y.jsxs)(Y.Fragment, { children: [p, g] })), (n[12] = p), (n[13] = g), (n[14] = _))
      : (_ = n[14]),
    _
  );
}
function ft(e) {
  let t = (0, pt.c)(12),
    { children: n, bottomAction: r } = e,
    i = le() === !0,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = { opacity: 1 }), (t[0] = a)) : (a = t[0]);
  let o;
  t[1] === i ? (o = t[2]) : ((o = !i && { opacity: 0 }), (t[1] = i), (t[2] = o));
  let s;
  t[3] === i
    ? (s = t[4])
    : ((s = i ? { duration: 0 } : { duration: 0.4, ease: [0.23, 1, 0.32, 1] }), (t[3] = i), (t[4] = s));
  let c;
  t[5] === r
    ? (c = t[6])
    : ((c =
        r != null &&
        (0, Y.jsx)(`div`, { className: `absolute inset-x-0 bottom-4 flex justify-center`, children: r })),
      (t[5] = r),
      (t[6] = c));
  let l;
  return (
    t[7] !== n || t[8] !== o || t[9] !== s || t[10] !== c
      ? ((l = (0, Y.jsx)(`div`, {
          className: `relative flex shrink-0 flex-col items-center gap-3 px-10 pt-8 pb-12`,
          children: (0, Y.jsxs)(T.div, {
            animate: a,
            className: `flex flex-col items-center gap-3`,
            initial: o,
            transition: s,
            children: [n, c],
          }),
        })),
        (t[7] = n),
        (t[8] = o),
        (t[9] = s),
        (t[10] = c),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
var pt, Y;
function mt() {
  return (mt = e(() => {
    ((pt = B()), M(), ne(), P(), de(), ut(), (Y = V()));
  }))();
}
function ht(e) {
  let t = (0, gt.c)(15),
    { phase: n, isPhaseComplete: r, includesStarterTasks: i, includesFinance: a } = e,
    o = r !== void 0 && r,
    s = (i === void 0 || i ? 3 : 1) + +!!a,
    c;
  t[0] !== a || t[1] !== o || t[2] !== n
    ? ((c = +!!a),
      n === `finance` ? (c = 0) : n === `task` && (c += o ? 2 : 1),
      (t[0] = a),
      (t[1] = o),
      (t[2] = n),
      (t[3] = c))
    : (c = t[3]);
  let l = c,
    u = a ? `w-25` : `w-20`,
    d;
  t[4] === u
    ? (d = t[5])
    : ((d = j(`absolute inset-x-0 bottom-4 mx-auto flex h-0.75 gap-1.5`, u)), (t[4] = u), (t[5] = d));
  let f;
  if (t[6] !== c || t[7] !== s) {
    let e;
    (t[9] === c
      ? (e = t[10])
      : ((e = (e, t) =>
          (0, _t.jsx)(
            `span`,
            { className: j(`h-full flex-1 rounded-full`, t === c ? `bg-primary-solid` : `bg-text/10`) },
            t,
          )),
        (t[9] = c),
        (t[10] = e)),
      (f = Array.from({ length: s }, e)),
      (t[6] = c),
      (t[7] = s),
      (t[8] = f));
  } else f = t[8];
  let p;
  return (
    t[11] !== c || t[12] !== d || t[13] !== f
      ? ((p = (0, _t.jsx)(`div`, {
          "aria-hidden": `true`,
          "data-active-index": l,
          "data-testid": `onboarding-progress-bar`,
          className: d,
          children: f,
        })),
        (t[11] = c),
        (t[12] = d),
        (t[13] = f),
        (t[14] = p))
      : (p = t[14]),
    p
  );
}
var gt, _t;
function vt() {
  return (vt = e(() => {
    ((gt = B()), C(), (_t = V()));
  }))();
}
function yt(e) {
  let t = (0, bt.c)(3),
    n = x(Be),
    r = e.phase === `finance` || n,
    i;
  return (
    t[0] !== e || t[1] !== r
      ? ((i = (0, xt.jsx)(ht, { ...e, includesFinance: r })), (t[0] = e), (t[1] = r), (t[2] = i))
      : (i = t[2]),
    i
  );
}
var bt, xt;
function St() {
  return (St = e(() => {
    ((bt = B()), h(), Le(), vt(), (xt = V()));
  }))();
}
function Ct(e) {
  let n = (0, Tt.c)(55),
    {
      progress: r,
      isAdvancePending: i,
      isPhaseComplete: a,
      onboardingCreditRewardAmount: o,
      phase: s,
      showAdvancedCapabilities: l,
      skipDisabled: u,
      chooseAnotherTaskDisabled: d,
      onSkipDialogOpened: f,
      onSkipConfirmationBypassed: p,
      onContinueRole: m,
      onGetStarted: h,
      onSkip: g,
      onCancelTask: _,
      onChooseAnotherTask: v,
    } = e,
    y = l !== void 0 && l,
    b = u !== void 0 && u,
    x = d !== void 0 && d,
    S = Ae(`717608661`),
    [C, w] = (0, Et.useState)(!1),
    [T, E] = (0, Et.useState)(!0),
    D;
  n[0] === f
    ? (D = n[1])
    : ((D = () => {
        (f?.(), w(!0));
      }),
      (n[0] = f),
      (n[1] = D));
  let O = D,
    k;
  bb0: switch (s) {
    case `role`: {
      let e = !a,
        t;
      n[2] !== m || n[3] !== T ? ((t = () => m?.(T)), (n[2] = m), (n[3] = T), (n[4] = t)) : (t = n[4]);
      let r;
      (n[5] !== i || n[6] !== T || n[7] !== e || n[8] !== t
        ? ((r = (0, X.jsx)(dt, {
            personalizedSuggestionsEnabled: T,
            disabled: i,
            pending: i,
            continueDisabled: e,
            onPersonalizedSuggestionsChange: E,
            onContinue: t,
          })),
          (n[5] = i),
          (n[6] = T),
          (n[7] = e),
          (n[8] = t),
          (n[9] = r))
        : (r = n[9]),
        (k = r));
      break bb0;
    }
    case `task`: {
      if (!a && _ != null) {
        let e;
        n[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(c, {
              id: `electron.onboarding.conversationalOnboarding.cancelTask`,
              defaultMessage: `Cancel task`,
              description: `Stops the current onboarding task without leaving setup`,
            })),
            (n[10] = e))
          : (e = n[10]);
        let t;
        (n[11] !== i || n[12] !== _
          ? ((t = (0, X.jsx)(wt, { disabled: i, onClick: _, children: e })),
            (n[11] = i),
            (n[12] = _),
            (n[13] = t))
          : (t = n[13]),
          (k = t));
        break bb0;
      }
      if (a) {
        let e;
        n[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, X.jsx)(c, {
              id: `electron.onboarding.conversationalOnboarding.getStarted`,
              defaultMessage: `Get Started`,
              description: `Button that completes conversational onboarding after task access is resolved`,
            })),
            (n[14] = e))
          : (e = n[14]);
        let r;
        (n[15] !== i || n[16] !== h
          ? ((r = (0, X.jsx)(t, {
              className: `h-[46px] w-[320px] justify-center rounded-[24px] !text-lg !leading-6`,
              "aria-busy": i,
              color: `primary`,
              loading: i,
              size: `large`,
              onClick: h,
              children: e,
            })),
            (n[15] = i),
            (n[16] = h),
            (n[17] = r))
          : (r = n[17]),
          (k = r));
        break bb0;
      }
      if (y || g == null) {
        k = null;
        break bb0;
      }
      let e;
      n[18] !== g || n[19] !== p || n[20] !== o || n[21] !== O || n[22] !== S
        ? ((e = () => {
            if (o == null && S.get(`skip_confirmation`, !1)) {
              (p?.(), g());
              return;
            }
            O();
          }),
          (n[18] = g),
          (n[19] = p),
          (n[20] = o),
          (n[21] = O),
          (n[22] = S),
          (n[23] = e))
        : (e = n[23]);
      let r;
      (n[24] !== b || n[25] !== e
        ? ((r = (0, X.jsxs)(X.Fragment, {
            children: [
              (0, X.jsx)(X.Fragment, { children: (0, X.jsx)(wt, { disabled: b, onClick: e }) }),
              null,
            ],
          })),
          (n[24] = b),
          (n[25] = e),
          (n[26] = r))
        : (r = n[26]),
        (k = r));
    }
  }
  let A;
  n[27] !== i || n[28] !== a || n[29] !== g || n[30] !== y
    ? ((A =
        y &&
        !a &&
        g != null &&
        (0, X.jsx)(t, {
          color: `ghostTertiary`,
          disabled: i,
          onClick: g,
          children: (0, X.jsx)(c, {
            id: `electron.onboarding.conversationalOnboarding.skipCapabilities`,
            defaultMessage: `Skip`,
            description: `Button that skips optional desktop capability setup after completing a starter task`,
          }),
        })),
      (n[27] = i),
      (n[28] = a),
      (n[29] = g),
      (n[30] = y),
      (n[31] = A))
    : (A = n[31]);
  let j;
  n[32] !== x || n[33] !== v
    ? ((j =
        v != null &&
        (0, X.jsx)(t, {
          color: `ghostTertiary`,
          disabled: x,
          onClick: v,
          children: (0, X.jsx)(c, {
            id: `electron.onboarding.conversationalOnboarding.chooseAnotherTask`,
            defaultMessage: `Choose another task`,
            description: `Button shown after completing an onboarding task to return to task selection`,
          }),
        })),
      (n[32] = x),
      (n[33] = v),
      (n[34] = j))
    : (j = n[34]);
  let M;
  n[35] !== a || n[36] !== s || n[37] !== r
    ? ((M = r ?? (0, X.jsx)(yt, { isPhaseComplete: a, phase: s })),
      (n[35] = a),
      (n[36] = s),
      (n[37] = r),
      (n[38] = M))
    : (M = n[38]);
  let N;
  n[39] !== k || n[40] !== A || n[41] !== j || n[42] !== M
    ? ((N = (0, X.jsxs)(ft, { children: [k, A, j, M] })),
      (n[39] = k),
      (n[40] = A),
      (n[41] = j),
      (n[42] = M),
      (n[43] = N))
    : (N = n[43]);
  let P;
  n[44] !== a || n[45] !== C || n[46] !== g || n[47] !== o || n[48] !== s || n[49] !== y || n[50] !== b
    ? ((P =
        s === `task` &&
        !y &&
        !a &&
        g != null &&
        C &&
        (0, X.jsx)(et, { creditRewardAmount: o, skipDisabled: b, onClose: () => w(!1), onSkip: g })),
      (n[44] = a),
      (n[45] = C),
      (n[46] = g),
      (n[47] = o),
      (n[48] = s),
      (n[49] = y),
      (n[50] = b),
      (n[51] = P))
    : (P = n[51]);
  let F;
  return (
    n[52] !== N || n[53] !== P
      ? ((F = (0, X.jsxs)(X.Fragment, { children: [N, P] })), (n[52] = N), (n[53] = P), (n[54] = F))
      : (F = n[54]),
    F
  );
}
function wt(e) {
  let n = (0, Tt.c)(6),
    { children: r, disabled: i, onClick: a } = e,
    o;
  n[0] === r
    ? (o = n[1])
    : ((o =
        r ??
        (0, X.jsx)(c, {
          id: `electron.onboarding.conversationalOnboarding.skipAfterRole`,
          defaultMessage: `Skip`,
          description: `Button that skips the remainder of conversational onboarding, either immediately or after a confirmation dialog`,
        })),
      (n[0] = r),
      (n[1] = o));
  let s;
  return (
    n[2] !== i || n[3] !== a || n[4] !== o
      ? ((s = (0, X.jsx)(t, {
          className: `h-[46px] w-[320px] justify-center !text-lg !leading-6`,
          color: `ghostTertiary`,
          disabled: i,
          size: `large`,
          onClick: a,
          children: o,
        })),
        (n[2] = i),
        (n[3] = a),
        (n[4] = o),
        (n[5] = s))
      : (s = n[5]),
    s
  );
}
var Tt, Et, X;
function Dt() {
  return (Dt = e(() => {
    ((Tt = B()), (Et = H()), P(), de(), mt(), St(), Ee(), nt(), (X = V()));
  }))();
}
function Ot(e) {
  let t = (0, At.c)(30),
    {
      greeting: n,
      welcome: r,
      question: i,
      initiallyComplete: a,
      loading: o,
      onInitialContentReady: s,
      onComplete: c,
    } = e,
    l = le() === !0,
    u;
  t[0] === a ? (u = t[1]) : ((u = () => (a ? `complete` : `thinking`)), (t[0] = a), (t[1] = u));
  let [d, f] = (0, jt.useState)(u),
    p;
  t[2] === c
    ? (p = t[3])
    : ((p = (e, t) => {
        window.setTimeout(() => {
          (f(e), e === `complete` && c());
        }, t);
      }),
      (t[2] = c),
      (t[3] = p));
  let m = p;
  if (d === `thinking`) {
    let e;
    t[4] !== c || t[5] !== s || t[6] !== l
      ? ((e = () => {
          if ((s(), l)) {
            (f(`complete`), c());
            return;
          }
          f(`greeting`);
        }),
        (t[4] = c),
        (t[5] = s),
        (t[6] = l),
        (t[7] = e))
      : (e = t[7]);
    let n;
    return (
      t[8] !== o || t[9] !== e
        ? ((n = (0, Z.jsx)(_e, { fadeIn: !0, loading: o, loadingTimeoutSeconds: Nt, onComplete: e })),
          (t[8] = o),
          (t[9] = e),
          (t[10] = n))
        : (n = t[10]),
      n
    );
  }
  let h = d !== `complete`,
    g;
  t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = { p: `h1` }), (t[11] = g)) : (g = t[11]);
  let _;
  t[12] === m ? (_ = t[13]) : ((_ = () => m(`welcome`, Pt)), (t[12] = m), (t[13] = _));
  let v;
  t[14] !== n || t[15] !== h || t[16] !== _
    ? ((v = (0, Z.jsx)(Ue, {
        animate: h,
        className: `flex flex-col [&>h1]:text-heading-lg [&>h1]:leading-[1.2] [&>h1]:font-medium`,
        completionFallbackMs: Mt,
        components: g,
        fadeSegmentDelayMs: 120,
        onComplete: _,
        children: n,
      })),
      (t[14] = n),
      (t[15] = h),
      (t[16] = _),
      (t[17] = v))
    : (v = t[17]);
  let y;
  t[18] !== d || t[19] !== m || t[20] !== r
    ? ((y =
        kt(d, `welcome`) &&
        (0, Z.jsx)(`div`, {
          className: `mt-10`,
          children: (0, Z.jsx)(Ue, {
            animate: d !== `complete`,
            className: Lt,
            onComplete: () => m(`question`, Ft),
            children: r,
          }),
        })),
      (t[18] = d),
      (t[19] = m),
      (t[20] = r),
      (t[21] = y))
    : (y = t[21]);
  let b;
  t[22] !== d || t[23] !== i || t[24] !== m
    ? ((b =
        kt(d, `question`) &&
        (0, Z.jsx)(`div`, {
          className: `mt-8`,
          children: (0, Z.jsx)(Ue, {
            animate: d !== `complete`,
            className: Lt,
            onComplete: () => m(`complete`, It),
            children: i,
          }),
        })),
      (t[22] = d),
      (t[23] = i),
      (t[24] = m),
      (t[25] = b))
    : (b = t[25]);
  let x;
  return (
    t[26] !== v || t[27] !== y || t[28] !== b
      ? ((x = (0, Z.jsxs)(`div`, { children: [v, y, b] })),
        (t[26] = v),
        (t[27] = y),
        (t[28] = b),
        (t[29] = x))
      : (x = t[29]),
    x
  );
}
function kt(e, t) {
  return Rt[e] >= Rt[t];
}
var At, jt, Z, Mt, Nt, Pt, Ft, It, Lt, Rt;
function zt() {
  return (zt = e(() => {
    ((At = B()),
      ne(),
      (jt = H()),
      He(),
      ve(),
      (Z = V()),
      (Mt = 700),
      (Nt = 3),
      (Pt = 500),
      (Ft = 300),
      (It = 240),
      (Lt = `flex flex-col [&>p]:mb-8 [&>p]:max-w-[760px] [&>p:last-child]:mb-0`),
      (Rt = { thinking: 0, greeting: 1, welcome: 2, question: 3, complete: 4 }));
  }))();
}
var Bt;
function Vt() {
  return (Vt = e(() => {
    (P(),
      (Bt = n({
        greeting: {
          id: `electron.onboarding.conversationalOnboarding.greeting`,
          defaultMessage: `Hey!`,
          description: `Short heading greeting at the start of the conversational onboarding role-selection screen`,
        },
        greetingWithName: {
          id: `electron.onboarding.conversationalOnboarding.greetingWithName`,
          defaultMessage: `Hey, {firstName}!`,
          description: `Short heading greeting at the start of the conversational onboarding role-selection screen. The {firstName} placeholder is the user's first name`,
        },
        welcomeIntroduction: {
          id: `electron.onboarding.conversationalOnboarding.welcomeIntroduction`,
          defaultMessage: `Welcome to the ChatGPT desktop app. I’m going to ask you a few quick questions to help me tailor things for how you work.`,
          description: `Body copy below the greeting on the conversational onboarding role-selection screen. Explains that ChatGPT will ask questions to personalize setup`,
        },
      })));
  }))();
}
function Ht(e) {
  let t = (0, Wt.c)(29),
    {
      name: n,
      options: r,
      legend: i,
      selectedValue: a,
      disabled: o,
      customValue: s,
      freeTextPlaceholder: c,
      onSelect: l,
      onCustomValueChange: u,
    } = e,
    d = le() === !0,
    f;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((f = { opacity: 1 }), (t[0] = f)) : (f = t[0]);
  let p;
  t[1] === d ? (p = t[2]) : ((p = !d && { opacity: 0 }), (t[1] = d), (t[2] = p));
  let m;
  t[3] === d
    ? (m = t[4])
    : ((m = d ? { duration: 0 } : { duration: 0.4, ease: [0.23, 1, 0.32, 1] }), (t[3] = d), (t[4] = m));
  let h;
  t[5] === i
    ? (h = t[6])
    : ((h = (0, Q.jsx)(`legend`, { className: `sr-only`, children: i })), (t[5] = i), (t[6] = h));
  let g;
  if (t[7] !== n || t[8] !== l || t[9] !== r || t[10] !== a) {
    let e;
    (t[12] !== n || t[13] !== l || t[14] !== a
      ? ((e = (e) =>
          (0, Q.jsx)(
            Ut,
            { name: n, checked: a === e.value, value: e.value, label: e.label, onSelect: () => l(e.value) },
            e.value,
          )),
        (t[12] = n),
        (t[13] = l),
        (t[14] = a),
        (t[15] = e))
      : (e = t[15]),
      (g = r.map(e)),
      (t[7] = n),
      (t[8] = l),
      (t[9] = r),
      (t[10] = a),
      (t[11] = g));
  } else g = t[11];
  let _;
  t[16] === g
    ? (_ = t[17])
    : ((_ = (0, Q.jsx)(`div`, { className: `grid grid-cols-3 gap-x-1 gap-y-1 p-2`, children: g })),
      (t[16] = g),
      (t[17] = _));
  let v;
  t[18] !== s || t[19] !== c || t[20] !== u
    ? ((v =
        c != null &&
        (0, Q.jsxs)(`div`, {
          className: `flex h-12 w-full items-center gap-2 border-t border-subtle px-4 text-tertiary`,
          children: [
            (0, Q.jsx)(R, { "aria-hidden": `true`, className: `size-[18px] shrink-0` }),
            (0, Q.jsx)(`input`, {
              "aria-label": c,
              className: `min-w-0 flex-1 bg-transparent text-default placeholder:text-tertiary focus:outline-none`,
              maxLength: 1e3,
              placeholder: c,
              value: s,
              onChange: (e) => {
                u(e.currentTarget.value);
              },
            }),
          ],
        })),
      (t[18] = s),
      (t[19] = c),
      (t[20] = u),
      (t[21] = v))
    : (v = t[21]);
  let y;
  return (
    t[22] !== o || t[23] !== p || t[24] !== m || t[25] !== h || t[26] !== _ || t[27] !== v
      ? ((y = (0, Q.jsxs)(T.fieldset, {
          animate: f,
          className: `mt-8 w-full overflow-hidden rounded-2xl border border-default bg-surface text-lg leading-6 shadow-[0_2px_6px_-1px_rgba(0,0,0,0.03)]`,
          disabled: o,
          initial: p,
          transition: m,
          children: [h, _, v],
        })),
        (t[22] = o),
        (t[23] = p),
        (t[24] = m),
        (t[25] = h),
        (t[26] = _),
        (t[27] = v),
        (t[28] = y))
      : (y = t[28]),
    y
  );
}
function Ut(e) {
  let t = (0, Wt.c)(18),
    { name: n, checked: r, value: i, label: a, onSelect: o } = e,
    s;
  t[0] !== r || t[1] !== n || t[2] !== o || t[3] !== i
    ? ((s = (0, Q.jsx)(`input`, {
        checked: r,
        className: `sr-only`,
        name: n,
        type: `radio`,
        value: i,
        onChange: o,
      })),
      (t[0] = r),
      (t[1] = n),
      (t[2] = o),
      (t[3] = i),
      (t[4] = s))
    : (s = t[4]);
  let c = r ? `border-text-emphasis bg-text-emphasis` : `border-codex-radio-inactive`,
    l;
  t[5] === c
    ? (l = t[6])
    : ((l = j(`flex size-[18px] shrink-0 items-center justify-center rounded-full border`, c)),
      (t[5] = c),
      (t[6] = l));
  let u;
  t[7] === r
    ? (u = t[8])
    : ((u = r ? (0, Q.jsx)(`span`, { className: `size-[7px] rounded-full bg-surface` }) : null),
      (t[7] = r),
      (t[8] = u));
  let d;
  t[9] !== l || t[10] !== u
    ? ((d = (0, Q.jsx)(`span`, { className: l, children: u })), (t[9] = l), (t[10] = u), (t[11] = d))
    : (d = t[11]);
  let f;
  t[12] === a
    ? (f = t[13])
    : ((f = (0, Q.jsx)(`span`, { className: `truncate`, children: a })), (t[12] = a), (t[13] = f));
  let p;
  return (
    t[14] !== s || t[15] !== d || t[16] !== f
      ? ((p = (0, Q.jsxs)(`label`, {
          className: `flex min-w-0 cursor-interaction items-center gap-2 rounded-[10px] p-1.5 has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-ring`,
          children: [s, d, f],
        })),
        (t[14] = s),
        (t[15] = d),
        (t[16] = f),
        (t[17] = p))
      : (p = t[17]),
    p
  );
}
var Wt, Q;
function Gt() {
  return (Gt = e(() => {
    ((Wt = B()), C(), M(), ne(), se(), (Q = V()));
  }))();
}
function Kt(e) {
  let t = (0, qt.c)(6),
    { ref: n, className: r, children: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = j(`mt-4 flex min-h-[calc(67cqh-2.5rem)] scroll-mt-[33cqh] flex-col gap-6 text-lg leading-6`, r)),
      (t[0] = r),
      (t[1] = a));
  let o;
  return (
    t[2] !== i || t[3] !== n || t[4] !== a
      ? ((o = (0, Jt.jsx)(`div`, { ref: n, className: a, children: i })),
        (t[2] = i),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
var qt, Jt;
function Yt() {
  return (Yt = e(() => {
    ((qt = B()), C(), (Jt = V()));
  }))();
}
function Xt(e) {
  let t = (0, Zt.c)(20),
    { label: n, icon: r, selected: i, disabled: a, onSelect: s } = e,
    c = i ? `bg-chart-blue/10` : `bg-surface`,
    l = a ? `cursor-default` : `cursor-interaction enabled:hover:bg-primary-ghost-hover`,
    u = !a && `shadow-[0_2px_6px_-1px_rgba(0,0,0,0.03)]`,
    d;
  t[0] !== c || t[1] !== l || t[2] !== u
    ? ((d = j(
        `relative flex h-[120px] min-w-0 flex-col items-start gap-4 rounded-2xl border border-default p-4 text-start focus-visible:outline-2 focus-visible:outline-ring`,
        c,
        l,
        u,
      )),
      (t[0] = c),
      (t[1] = l),
      (t[2] = u),
      (t[3] = d))
    : (d = t[3]);
  let f = a && !i && `opacity-50`,
    p;
  t[4] === f ? (p = t[5]) : ((p = j(`w-full min-w-0`, f)), (t[4] = f), (t[5] = p));
  let m;
  t[6] === n
    ? (m = t[7])
    : ((m = (0, $.jsx)(`span`, { className: `line-clamp-2`, children: n })), (t[6] = n), (t[7] = m));
  let h;
  t[8] !== p || t[9] !== m
    ? ((h = (0, $.jsx)(`span`, { className: p, children: m })), (t[8] = p), (t[9] = m), (t[10] = h))
    : (h = t[10]);
  let g;
  t[11] === i
    ? (g = t[12])
    : ((g = i
        ? (0, $.jsx)(`span`, {
            className: `absolute top-4 right-4 flex size-6 items-center justify-center`,
            children: (0, $.jsx)(o, { className: `text-chart-blue` }),
          })
        : null),
      (t[11] = i),
      (t[12] = g));
  let _;
  return (
    t[13] !== r || t[14] !== a || t[15] !== s || t[16] !== d || t[17] !== h || t[18] !== g
      ? ((_ = (0, $.jsxs)(`button`, {
          className: d,
          disabled: a,
          type: `button`,
          onClick: s,
          children: [r, h, g],
        })),
        (t[13] = r),
        (t[14] = a),
        (t[15] = s),
        (t[16] = d),
        (t[17] = h),
        (t[18] = g),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
var Zt, $;
function Qt() {
  return (Qt = e(() => {
    ((Zt = B()), C(), _(), ($ = V()));
  }))();
}
function $t(e) {
  let t = re(tn).min(1).safeParse(e.models);
  return t.success ? t.data : null;
}
function en(e, t) {
  return (
    t?.find((t) =>
      e?.models.some(
        (e) =>
          e.model === t.model &&
          e.supportedReasoningEfforts.some(({ reasoningEffort: e }) => e === t.reasoning_effort),
      ),
    ) ?? null
  );
}
var tn;
function nn() {
  return (nn = e(() => {
    (i(),
      (tn = ie({
        model: v().trim().min(1),
        reasoning_effort: z([`none`, `minimal`, `low`, `medium`, `high`, `xhigh`, `max`, `ultra`]),
      })));
  }))();
}
function rn(e) {
  let t = (0, sn.c)(2),
    { children: n } = e,
    { installPlugin: r } = Oe(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { conversationId: null, cwdOverride: cn, hostId: N }), (t[0] = i))
    : (i = t[0]);
  let { isConfigDataPending: a, requirements: o } = he(i),
    s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { conversationId: null, cwdOverride: cn, hostId: N }), (t[1] = s))
    : (s = t[1]);
  let { agentMode: c, permissionProfileId: l, shouldSendPermissionOverrides: u } = Ce(s),
    { serviceTierSettings: d } = Ie(null),
    { value: f } = Ne(`2916892840`),
    p = $t(f),
    {
      data: m,
      isLoading: h,
      refetch: g,
    } = De({
      hostId: N,
      additionalAvailableModels: new Set(p?.map(on)),
      enabledReasoningEfforts: p?.map(an),
    });
  return n({
    agentMode: c,
    hostId: N,
    installPlugin: r,
    isConfigDataPending: a,
    isModelsLoading: h,
    loadModelConfig: async () => {
      let e = en(m ?? (await g()).data, p);
      if (e == null) throw Error(`The conversational onboarding model is unavailable`);
      return e;
    },
    permissionProfileId: l,
    permissionsRequirements: o,
    projectRoot: cn,
    serviceTier: d.serviceTierForRequest,
    shouldSendPermissionOverrides: u,
  });
}
function an(e) {
  let { reasoning_effort: t } = e;
  return t;
}
function on(e) {
  let { model: t } = e;
  return t;
}
var sn, cn;
function ln() {
  return (ln = e(() => {
    ((sn = B()), oe(), xe(), Fe(), Se(), Me(), je(), Ee(), nn(), (cn = ae(`~`)));
  }))();
}
export {
  Ye as A,
  ut as C,
  nt as D,
  et as E,
  Ke as M,
  Je as N,
  Xe as O,
  ct as S,
  st as T,
  ht as _,
  Kt as a,
  dt as b,
  Gt as c,
  Ot as d,
  zt as f,
  St as g,
  yt as h,
  Qt as i,
  qe as j,
  Ze as k,
  Vt as l,
  Dt as m,
  ln as n,
  Yt as o,
  Ct as p,
  Xt as r,
  Ht as s,
  rn as t,
  Bt as u,
  vt as v,
  rt as w,
  mt as x,
  ft as y,
};
//# sourceMappingURL=onboarding-task-environment-ab12def96532.js.map
