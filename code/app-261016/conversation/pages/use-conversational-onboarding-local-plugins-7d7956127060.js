import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $st as t,
  Bst as n,
  CCt as r,
  DB as i,
  ETt as a,
  FBt as o,
  FD as s,
  FTt as c,
  HFt as l,
  HO as u,
  IO as d,
  ITt as f,
  JO as p,
  LNt as m,
  LO as h,
  MNt as g,
  NNt as _,
  OB as v,
  OT as y,
  PBt as b,
  PD as x,
  Qst as S,
  RFt as C,
  RO as w,
  SLt as T,
  TTt as E,
  TY as D,
  Uz as O,
  VH as k,
  VRt as A,
  WO as j,
  Wz as M,
  XOt as N,
  Y3 as P,
  YOt as F,
  Yst as I,
  Z3 as L,
  ZSt as R,
  cmt as ee,
  dO as te,
  gB as ne,
  hB as re,
  iCt as ie,
  kCt as ae,
  kLt as oe,
  kRt as se,
  kT as ce,
  lO as le,
  lk as ue,
  mCt as de,
  nB as fe,
  nCt as pe,
  okt as me,
  qO as he,
  rB as ge,
  sct as _e,
  tkt as z,
  uk as ve,
  vT as ye,
  yT as be,
  zFt as xe,
  zO as Se,
  zst as Ce,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  AIt as we,
  CIt as Te,
  DA as Ee,
  DIt as De,
  Djr as Oe,
  FBr as ke,
  IBr as Ae,
  Ipr as je,
  Jfr as Me,
  KBr as Ne,
  Lfr as Pe,
  Lpr as Fe,
  OA as Ie,
  OIt as Le,
  Sjr as Re,
  Vfr as ze,
  Yfr as Be,
  _fr as Ve,
  bLr as He,
  bnn as Ue,
  dRt as We,
  hpr as Ge,
  lBr as Ke,
  mBr as qe,
  mnn as Je,
  pRt as Ye,
  uBr as Xe,
  vfr as Ze,
  wIt as Qe,
  wLr as $e,
  xLr as et,
  xjr as tt,
  zRr as nt,
} from "./app-initial-ad16eaadf81f.js";
import { a as rt, i as it } from "./mojito-locales-7ddf8b1d7b97.js";
import { at, ct as ot, ft as B, ot as st, pt as ct, rt as lt } from "./tasks-fe81dbed229b.js";
import { n as ut, t as dt } from "./streaming-text-a5cde5d775f5.js";
import { n as ft, t as pt } from "./onboarding-entrypoint-5c5039cf7620.js";
var V, mt, ht;
function gt() {
  return (gt = e(() => {
    (R(),
      pt(),
      Ke(),
      ot(),
      ct(),
      (V = ae(lt, () => `visible`)),
      (mt = r(lt, ({ get: e }) =>
        e(ft) === `life_sciences` &&
        [B.WelcomeAnimation, B.RosalindWelcome, B.ConversationalOnboarding, B.RoleSelection].some(
          (t) => t === e(at),
        ) &&
        e(Xe, `2744470156`)
          ? `hidden`
          : e(V),
      )),
      (ht = ae(lt, !1)));
  }))();
}
var _t;
function vt() {
  return (vt = e(() => {
    (R(),
      $e(),
      t(),
      Ke(),
      (_t = r(S, ({ get: e }) => {
        if (e(qe)) return `loading`;
        if (!e(Xe, `3294441402`)) return `disabled`;
        let t = e(et);
        return t.status === `loading` || (t.status === `denied` && t.reason === `account-mismatch`)
          ? `loading`
          : t.status === `allowed`
            ? e(nt) != null && e(He) != null
              ? `enabled`
              : `loading`
            : `disabled`;
      })));
  }))();
}
var H, yt;
function bt() {
  return (bt = e(() => {
    (o(),
      (H = m()),
      (yt = (e) =>
        (0, H.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, H.jsx)(`path`, {
              d: `M3.333 8.333h13.334v8.334H3.333V8.333Z`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinejoin: `round`,
            }),
            (0, H.jsx)(`path`, {
              d: `M2.5 5.833h15v2.5h-15v-2.5Z`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinejoin: `round`,
            }),
            (0, H.jsx)(`path`, {
              d: `M10 5.833v10.834`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinecap: `round`,
            }),
            (0, H.jsx)(`path`, {
              d: `M10 5.833H7.917A2.083 2.083 0 1 1 10 3.75v2.083Z`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinejoin: `round`,
            }),
            (0, H.jsx)(`path`, {
              d: `M10 5.833h2.083A2.083 2.083 0 1 0 10 3.75v2.083Z`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinejoin: `round`,
            }),
          ],
        })));
  }))();
}
function xt(e) {
  let t = (0, St.c)(32),
    { creditRewardAmount: n, skipDisabled: r, onClose: i, onSkip: a } = e,
    o = r !== void 0 && r,
    s = n == null,
    c = n == null ? `compact` : `feature`,
    l;
  t[0] === i
    ? (l = t[1])
    : ((l = (e) => {
        e || i();
      }),
      (t[0] = i),
      (t[1] = l));
  let u;
  t[2] === i
    ? (u = t[3])
    : ((u = (e) => {
        (e.preventDefault(), i());
      }),
      (t[2] = i),
      (t[3] = u));
  let f;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, U.jsx)(he, {
        className: `sr-only`,
        children: (0, U.jsx)(z, {
          id: `electron.onboarding.conversationalOnboarding.skipDialog.title`,
          defaultMessage: `Skip setup?`,
          description: `Title for the confirmation dialog shown before skipping conversational onboarding`,
        }),
      })),
      (t[4] = f))
    : (f = t[4]);
  let p, m;
  t[5] === n
    ? ((p = t[6]), (m = t[7]))
    : ((p = (0, U.jsx)(Se, {
        children: (0, U.jsx)(w, {
          title:
            n == null
              ? (0, U.jsx)(z, {
                  id: `electron.onboarding.conversationalOnboarding.skipDialog.heading`,
                  defaultMessage: `Skip setup?`,
                  description: `Heading for the confirmation dialog shown before skipping conversational onboarding`,
                })
              : (0, U.jsx)(z, {
                  id: `electron.onboarding.conversationalOnboarding.skipDialog.creditRewardHeading`,
                  defaultMessage: `Finish set up and get {creditAmount, plural, one {# credit} other {# credits}}`,
                  description: `Heading explaining how many Codex credits users can receive by finishing conversational onboarding`,
                  values: { creditAmount: n },
                }),
          subtitle:
            n == null
              ? (0, U.jsx)(z, {
                  id: `electron.onboarding.conversationalOnboarding.skipDialog.subtitle`,
                  defaultMessage: `You’ll go straight to ChatGPT`,
                  description: `Subtitle explaining what happens when conversational onboarding is skipped`,
                })
              : (0, U.jsx)(z, {
                  id: `electron.onboarding.conversationalOnboarding.skipDialog.creditRewardSubtitleWithAmount`,
                  defaultMessage: `Finish setting up your account and get {creditAmount, plural, one {# credit} other {# credits}} added to your balance`,
                  description: `Subtitle explaining that users can add the displayed onboarding reward to their balance by finishing setup`,
                  values: { creditAmount: n },
                }),
        }),
      })),
      (m =
        n != null &&
        (0, U.jsx)(Se, {
          children: (0, U.jsxs)(`div`, {
            className: `flex items-center justify-between gap-3 rounded-2xl bg-chart-blue/10 px-4 py-4 text-chart-blue`,
            children: [
              (0, U.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-4`,
                children: [
                  (0, U.jsx)(yt, { "aria-hidden": !0, className: `icon-sm shrink-0` }),
                  (0, U.jsx)(`span`, {
                    className: `text-base leading-6 font-semibold tabular-nums`,
                    children: (0, U.jsx)(z, {
                      id: `electron.onboarding.conversationalOnboarding.skipDialog.creditRewardAmount`,
                      defaultMessage: `+{creditAmount, plural, one {# credit} other {# credits}}`,
                      description: `Number of Codex credits available for finishing conversational onboarding`,
                      values: { creditAmount: n },
                    }),
                  }),
                ],
              }),
              (0, U.jsx)(`span`, {
                className: `text-base leading-6`,
                children: (0, U.jsx)(z, {
                  id: `electron.onboarding.conversationalOnboarding.skipDialog.creditRewardLabel`,
                  defaultMessage: `Onboarding bonus`,
                  description: `Label for the Codex credits available for finishing conversational onboarding`,
                }),
              }),
            ],
          }),
        })),
      (t[5] = n),
      (t[6] = p),
      (t[7] = m));
  let g;
  t[8] === n
    ? (g = t[9])
    : ((g = (0, U.jsx)(P, {
        color: `primary`,
        type: `submit`,
        children:
          n == null
            ? (0, U.jsx)(z, {
                id: `electron.onboarding.conversationalOnboarding.skipDialog.keepSettingUp`,
                defaultMessage: `Keep setting up`,
                description: `Button that closes the skip confirmation and returns to conversational onboarding`,
              })
            : (0, U.jsx)(z, {
                id: `electron.onboarding.conversationalOnboarding.skipDialog.keepSettingUpForCredits`,
                defaultMessage: `Finish set up`,
                description: `Button that closes the skip confirmation and continues conversational onboarding so the user can receive Codex credits`,
              }),
      })),
      (t[8] = n),
      (t[9] = g));
  let _;
  t[10] !== i || t[11] !== a
    ? ((_ = () => {
        (i(), a());
      }),
      (t[10] = i),
      (t[11] = a),
      (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] === n
    ? (v = t[14])
    : ((v =
        n == null
          ? (0, U.jsx)(z, {
              id: `electron.onboarding.conversationalOnboarding.skipDialog.goToApp`,
              defaultMessage: `Go to ChatGPT`,
              description: `Button that confirms skipping conversational onboarding and opens the app`,
            })
          : (0, U.jsx)(z, {
              id: `electron.onboarding.conversationalOnboarding.skipDialog.skipForCredits`,
              defaultMessage: `Skip`,
              description: `Button that confirms skipping conversational onboarding and forfeits the available Codex credits`,
            })),
      (t[13] = n),
      (t[14] = v));
  let y;
  t[15] !== o || t[16] !== _ || t[17] !== v
    ? ((y = (0, U.jsx)(P, { color: `outline`, disabled: o, type: `button`, onClick: _, children: v })),
      (t[15] = o),
      (t[16] = _),
      (t[17] = v),
      (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] !== y || t[20] !== g
    ? ((b = (0, U.jsx)(Se, { children: (0, U.jsxs)(h, { className: `gap-2`, children: [g, y] }) })),
      (t[19] = y),
      (t[20] = g),
      (t[21] = b))
    : (b = t[21]);
  let x;
  t[22] !== b || t[23] !== u || t[24] !== p || t[25] !== m
    ? ((x = (0, U.jsxs)(d, { as: `form`, className: `select-none`, onSubmit: u, children: [f, p, m, b] })),
      (t[22] = b),
      (t[23] = u),
      (t[24] = p),
      (t[25] = m),
      (t[26] = x))
    : (x = t[26]);
  let S;
  return (
    t[27] !== x || t[28] !== s || t[29] !== c || t[30] !== l
      ? ((S = (0, U.jsx)(j, { open: !0, showDialogClose: s, size: c, onOpenChange: l, children: x })),
        (t[27] = x),
        (t[28] = s),
        (t[29] = c),
        (t[30] = l),
        (t[31] = S))
      : (S = t[31]),
    S
  );
}
var St, U;
function W() {
  return (W = e(() => {
    ((St = b()), N(), L(), p(), u(), bt(), (U = m()));
  }))();
}
function Ct(e) {
  let t = (0, wt.c)(41),
    {
      children: n,
      followContent: r,
      hasSelectedTurn: i,
      anchorHostId: a,
      onScrollEnd: o,
      onScrolledContentUnderHeaderChange: s,
    } = e,
    c = r !== void 0 && r,
    l = i !== void 0 && i,
    u = M(),
    d = (0, G.useRef)(null),
    [f, p] = (0, G.useState)(l),
    [m, h] = (0, G.useState)(!1),
    _;
  t[0] === s
    ? (_ = t[1])
    : ((_ = (e) => {
        let t = d.current;
        if (t == null) {
          (h(!1), s(!1));
          return;
        }
        let n = e.getBoundingClientRect(),
          r = t.getBoundingClientRect();
        (h(r.bottom > n.bottom + Et), s(r.top < n.top + Tt));
      }),
      (t[0] = s),
      (t[1] = _));
  let v = _,
    y;
  t[2] === v ? (y = t[3]) : ((y = (e, t) => v(t)), (t[2] = v), (t[3] = y));
  let b = te(y),
    x;
  t[4] !== c || t[5] !== v
    ? ((x = (e, t) => {
        (t.parentElement != null && v(t.parentElement),
          c && t.scrollIntoView({ behavior: `auto`, block: `end`, inline: `nearest` }));
      }),
      (t[4] = c),
      (t[5] = v),
      (t[6] = x))
    : (x = t[6]);
  let S = te(x),
    C;
  t[7] !== f || t[8] !== u
    ? ((C = (e, t) => {
        if (e == null || (f && !(t !== void 0 && t))) return;
        let n = u ? `auto` : `smooth`;
        (e.scrollIntoView({ behavior: f ? `instant` : n, block: f ? `end` : `start`, inline: `nearest` }),
          p(!1));
      }),
      (t[7] = f),
      (t[8] = u),
      (t[9] = C))
    : (C = t[9]);
  let w = ne(C),
    T;
  t[10] !== l || t[11] !== f || t[12] !== u
    ? ((T = (e) => {
        if (e == null || (f && l)) return;
        let t = u ? `auto` : `smooth`;
        (e.scrollIntoView({ behavior: f ? `instant` : t, block: `nearest`, inline: `nearest` }), p(!1));
      }),
      (t[10] = l),
      (t[11] = f),
      (t[12] = u),
      (t[13] = T))
    : (T = t[13]);
  let E = ne(T),
    D = f && `invisible`,
    O;
  t[14] === D ? (O = t[15]) : ((O = g(`relative flex min-h-0 flex-1`, D)), (t[14] = D), (t[15] = O));
  let k;
  t[16] === v ? (k = t[17]) : ((k = (e) => v(e.currentTarget)), (t[16] = v), (t[17] = k));
  let A;
  t[18] !== n || t[19] !== E || t[20] !== w
    ? ((A = n({ scrollCurrentTurnIntoView: w, scrollChoicesIntoView: E })),
      (t[18] = n),
      (t[19] = E),
      (t[20] = w),
      (t[21] = A))
    : (A = t[21]);
  let j;
  t[22] === A
    ? (j = t[23])
    : ((j = (0, K.jsx)(`div`, {
        ref: d,
        className: `mx-auto flex w-full max-w-[820px] flex-col font-normal`,
        children: A,
      })),
      (t[22] = A),
      (t[23] = j));
  let N;
  t[24] !== S || t[25] !== j
    ? ((N = (0, K.jsx)(`div`, {
        ref: S,
        className: `min-h-full shrink-0 px-10 pt-[clamp(104px,18vh,120px)] pb-10`,
        children: j,
      })),
      (t[24] = S),
      (t[25] = j),
      (t[26] = N))
    : (N = t[26]);
  let P;
  t[27] !== o || t[28] !== b || t[29] !== k || t[30] !== N
    ? ((P = (0, K.jsx)(`div`, {
        ref: b,
        className: `[container-type:size] flex min-h-0 flex-1 [scrollbar-width:none] flex-col overflow-x-hidden overflow-y-auto [overflow-anchor:none] [&::-webkit-scrollbar]:hidden`,
        onScroll: k,
        onScrollEnd: o,
        children: N,
      })),
      (t[27] = o),
      (t[28] = b),
      (t[29] = k),
      (t[30] = N),
      (t[31] = P))
    : (P = t[31]);
  let F = m ? `opacity-100` : `opacity-0`,
    I;
  t[32] === F
    ? (I = t[33])
    : ((I = g(
        `pointer-events-none absolute inset-x-6 -bottom-14 mx-auto h-28 max-w-4xl bg-gradient-to-b from-transparent via-surface to-transparent blur-sm transition-opacity duration-basic`,
        F,
      )),
      (t[32] = F),
      (t[33] = I));
  let L;
  t[34] === I
    ? (L = t[35])
    : ((L = (0, K.jsx)(`div`, { "aria-hidden": !0, className: I })), (t[34] = I), (t[35] = L));
  let R;
  return (
    t[36] !== a || t[37] !== P || t[38] !== L || t[39] !== O
      ? ((R = (0, K.jsxs)(`div`, { className: O, "data-pip-anchor-host": a, children: [P, L] })),
        (t[36] = a),
        (t[37] = P),
        (t[38] = L),
        (t[39] = O),
        (t[40] = R))
      : (R = t[40]),
    R
  );
}
var wt, G, K, Tt, Et;
function Dt() {
  return (Dt = e(() => {
    ((wt = b()), _(), (G = o()), O(), le(), re(), (K = m()), (Tt = 48), (Et = 1));
  }))();
}
function Ot(e) {
  let t = (0, kt.c)(25),
    { checked: n, onChange: r, variant: a } = e,
    o = a === void 0 ? `toggle` : a,
    s = me(),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, q.jsx)(z, {
        id: `electron.onboarding.welcomeV2.personalizedSuggestions.title`,
        defaultMessage: `Suggest personalized tasks`,
        description: `Label for the welcome v2 personalized suggestions control`,
      })),
      (t[0] = c))
    : (c = t[0]);
  let l = c,
    u = o === `checkbox` ? `py-[13px]` : `mt-7`,
    d;
  t[1] === u
    ? (d = t[2])
    : ((d = g(`relative flex items-center justify-center gap-2`, u)), (t[1] = u), (t[2] = d));
  let f;
  t[3] !== n || t[4] !== s || t[5] !== r || t[6] !== o
    ? ((f =
        o === `checkbox`
          ? (0, q.jsx)(y, {
              id: `personalized-suggestions`,
              className: `size-5 !rounded-[7px] [&_svg]:size-4`,
              checked: n,
              onCheckedChange: r,
            })
          : (0, q.jsx)(ue, {
              checked: n,
              ariaLabel: s.formatMessage({
                id: `electron.onboarding.welcomeV2.personalizedSuggestions.toggle`,
                defaultMessage: `Enable personalized suggestions`,
                description: `Accessible label for the welcome v2 personalized suggestions toggle`,
              }),
              onChange: r,
            })),
      (t[3] = n),
      (t[4] = s),
      (t[5] = r),
      (t[6] = o),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== n || t[9] !== r || t[10] !== o
    ? ((p =
        o === `checkbox`
          ? (0, q.jsx)(`label`, {
              htmlFor: `personalized-suggestions`,
              className: `cursor-interaction text-[14px] leading-5 font-normal text-default focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
              children: l,
            })
          : (0, q.jsx)(`button`, {
              type: `button`,
              className: `cursor-interaction text-lg leading-6 font-normal text-default focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
              "aria-pressed": n,
              onClick: () => r(!n),
              children: l,
            })),
      (t[8] = n),
      (t[9] = r),
      (t[10] = o),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, q.jsx)(`span`, {
        className: `block text-xs leading-4 font-medium`,
        children: (0, q.jsx)(z, {
          id: `electron.onboarding.welcomeV2.personalizedSuggestions.description.chatgpt`,
          defaultMessage: `ChatGPT can suggest what to do next by searching project files and connected apps`,
          description: `Tooltip for the welcome v2 personalized suggestions control in the ChatGPT app`,
        }),
      })),
      (t[12] = m))
    : (m = t[12]);
  let h;
  t[13] === s
    ? (h = t[14])
    : ((h = s.formatMessage({
        id: `electron.onboarding.welcomeV2.personalizedSuggestions.info`,
        defaultMessage: `About personalized suggestions`,
        description: `Accessible label for the welcome v2 personalized suggestions info tooltip`,
      })),
      (t[13] = s),
      (t[14] = h));
  let _;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, q.jsx)(i, { asset: ye })), (t[15] = _))
    : (_ = t[15]);
  let v;
  t[16] === h
    ? (v = t[17])
    : ((v = (0, q.jsx)(fe, {
        side: `top`,
        sideOffset: 6,
        delayDuration: 0,
        disablePadding: !0,
        tooltipClassName: `px-1.5 py-1.5 text-center shadow-lg`,
        tooltipMaxWidth: `17rem`,
        tooltipContent: m,
        children: (0, q.jsx)(`button`, {
          type: `button`,
          className: `inline-flex size-4 items-center justify-center rounded-full text-tertiary focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
          "aria-label": h,
          children: _,
        }),
      })),
      (t[16] = h),
      (t[17] = v));
  let b;
  t[18] !== v || t[19] !== p
    ? ((b = (0, q.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [p, v] })),
      (t[18] = v),
      (t[19] = p),
      (t[20] = b))
    : (b = t[20]);
  let x;
  return (
    t[21] !== b || t[22] !== d || t[23] !== f
      ? ((x = (0, q.jsxs)(`div`, { className: d, children: [f, b] })),
        (t[21] = b),
        (t[22] = d),
        (t[23] = f),
        (t[24] = x))
      : (x = t[24]),
    x
  );
}
var kt, q;
function At() {
  return (At = e(() => {
    ((kt = b()), be(), _(), N(), ce(), v(), ve(), ge(), (q = m()));
  }))();
}
function jt(e) {
  let t = (0, Nt.c)(15),
    {
      personalizedSuggestionsEnabled: n,
      disabled: r,
      pending: i,
      continueDisabled: a,
      continueType: o,
      onPersonalizedSuggestionsChange: s,
      onContinue: c,
    } = e,
    l = o === void 0 ? `button` : o,
    u;
  t[0] !== s || t[1] !== n
    ? ((u = (0, J.jsx)(Ot, { checked: n, onChange: s, variant: `checkbox` })),
      (t[0] = s),
      (t[1] = n),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== r || t[4] !== u
    ? ((d = (0, J.jsx)(`fieldset`, { disabled: r, children: u })), (t[3] = r), (t[4] = u), (t[5] = d))
    : (d = t[5]);
  let f = a || r,
    p;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, J.jsx)(z, {
        id: `electron.onboarding.conversationalOnboarding.continue`,
        defaultMessage: `Continue`,
        description: `Button that continues from conversational onboarding role selection`,
      })),
      (t[6] = p))
    : (p = t[6]);
  let m;
  t[7] !== l || t[8] !== c || t[9] !== i || t[10] !== f
    ? ((m = (0, J.jsx)(P, {
        className: `h-11.5 w-80 justify-center !text-lg !leading-6`,
        type: l,
        "aria-busy": i,
        color: `primary`,
        disabled: f,
        loading: i,
        radius: `full`,
        size: `large`,
        onClick: c,
        children: p,
      })),
      (t[7] = l),
      (t[8] = c),
      (t[9] = i),
      (t[10] = f),
      (t[11] = m))
    : (m = t[11]);
  let h;
  return (
    t[12] !== d || t[13] !== m
      ? ((h = (0, J.jsxs)(J.Fragment, { children: [d, m] })), (t[12] = d), (t[13] = m), (t[14] = h))
      : (h = t[14]),
    h
  );
}
function Mt(e) {
  let t = (0, Nt.c)(12),
    { children: n, bottomAction: r } = e,
    i = a() === !0,
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((o = { opacity: 1 }), (t[0] = o)) : (o = t[0]);
  let s;
  t[1] === i ? (s = t[2]) : ((s = !i && { opacity: 0 }), (t[1] = i), (t[2] = s));
  let c;
  t[3] === i
    ? (c = t[4])
    : ((c = i ? { duration: 0 } : { duration: 0.4, ease: [0.23, 1, 0.32, 1] }), (t[3] = i), (t[4] = c));
  let l;
  t[5] === r
    ? (l = t[6])
    : ((l =
        r != null &&
        (0, J.jsx)(`div`, { className: `absolute inset-x-0 bottom-4 flex justify-center`, children: r })),
      (t[5] = r),
      (t[6] = l));
  let u;
  return (
    t[7] !== n || t[8] !== s || t[9] !== c || t[10] !== l
      ? ((u = (0, J.jsx)(`div`, {
          className: `relative flex shrink-0 flex-col items-center gap-3 px-10 pt-8 pb-12`,
          children: (0, J.jsxs)(f.div, {
            animate: o,
            className: `flex flex-col items-center gap-3`,
            initial: s,
            transition: c,
            children: [n, l],
          }),
        })),
        (t[7] = n),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u))
      : (u = t[11]),
    u
  );
}
var Nt, J;
function Pt() {
  return (Pt = e(() => {
    ((Nt = b()), c(), E(), N(), L(), At(), (J = m()));
  }))();
}
function Ft(e) {
  let t = (0, It.c)(15),
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
    : ((d = g(`absolute inset-x-0 bottom-4 mx-auto flex h-0.75 gap-1.5`, u)), (t[4] = u), (t[5] = d));
  let f;
  if (t[6] !== c || t[7] !== s) {
    let e;
    (t[9] === c
      ? (e = t[10])
      : ((e = (e, t) =>
          (0, Lt.jsx)(
            `span`,
            { className: g(`h-full flex-1 rounded-full`, t === c ? `bg-primary-solid` : `bg-text/10`) },
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
      ? ((p = (0, Lt.jsx)(`div`, {
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
var It, Lt;
function Rt() {
  return (Rt = e(() => {
    ((It = b()), _(), (Lt = m()));
  }))();
}
function zt(e) {
  let t = (0, Bt.c)(3),
    n = ie(st),
    r = e.phase === `finance` || n,
    i;
  return (
    t[0] !== e || t[1] !== r
      ? ((i = (0, Vt.jsx)(Ft, { ...e, includesFinance: r })), (t[0] = e), (t[1] = r), (t[2] = i))
      : (i = t[2]),
    i
  );
}
var Bt, Vt;
function Ht() {
  return (Ht = e(() => {
    ((Bt = b()), R(), ot(), Rt(), (Vt = m()));
  }))();
}
function Ut(e) {
  let t = (0, Gt.c)(55),
    {
      progress: n,
      isAdvancePending: r,
      isPhaseComplete: i,
      onboardingCreditRewardAmount: a,
      phase: o,
      showAdvancedCapabilities: s,
      skipDisabled: c,
      chooseAnotherTaskDisabled: l,
      onSkipDialogOpened: u,
      onSkipConfirmationBypassed: d,
      onContinueRole: f,
      onGetStarted: p,
      onSkip: m,
      onCancelTask: h,
      onChooseAnotherTask: g,
    } = e,
    _ = s !== void 0 && s,
    v = c !== void 0 && c,
    y = l !== void 0 && l,
    b = Oe(`717608661`),
    [x, S] = (0, Kt.useState)(!1),
    [C, w] = (0, Kt.useState)(!0),
    T;
  t[0] === u
    ? (T = t[1])
    : ((T = () => {
        (u?.(), S(!0));
      }),
      (t[0] = u),
      (t[1] = T));
  let E = T,
    D;
  bb0: switch (o) {
    case `role`: {
      let e = !i,
        n;
      t[2] !== f || t[3] !== C ? ((n = () => f?.(C)), (t[2] = f), (t[3] = C), (t[4] = n)) : (n = t[4]);
      let a;
      (t[5] !== r || t[6] !== C || t[7] !== e || t[8] !== n
        ? ((a = (0, Y.jsx)(jt, {
            personalizedSuggestionsEnabled: C,
            disabled: r,
            pending: r,
            continueDisabled: e,
            onPersonalizedSuggestionsChange: w,
            onContinue: n,
          })),
          (t[5] = r),
          (t[6] = C),
          (t[7] = e),
          (t[8] = n),
          (t[9] = a))
        : (a = t[9]),
        (D = a));
      break bb0;
    }
    case `task`: {
      if (!i && h != null) {
        let e;
        t[10] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(z, {
              id: `electron.onboarding.conversationalOnboarding.cancelTask`,
              defaultMessage: `Cancel task`,
              description: `Stops the current onboarding task without leaving setup`,
            })),
            (t[10] = e))
          : (e = t[10]);
        let n;
        (t[11] !== r || t[12] !== h
          ? ((n = (0, Y.jsx)(Wt, { disabled: r, onClick: h, children: e })),
            (t[11] = r),
            (t[12] = h),
            (t[13] = n))
          : (n = t[13]),
          (D = n));
        break bb0;
      }
      if (i) {
        let e;
        t[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Y.jsx)(z, {
              id: `electron.onboarding.conversationalOnboarding.getStarted`,
              defaultMessage: `Get Started`,
              description: `Button that completes conversational onboarding after task access is resolved`,
            })),
            (t[14] = e))
          : (e = t[14]);
        let n;
        (t[15] !== r || t[16] !== p
          ? ((n = (0, Y.jsx)(P, {
              className: `h-[46px] w-[320px] justify-center rounded-[24px] !text-lg !leading-6`,
              "aria-busy": r,
              color: `primary`,
              loading: r,
              size: `large`,
              onClick: p,
              children: e,
            })),
            (t[15] = r),
            (t[16] = p),
            (t[17] = n))
          : (n = t[17]),
          (D = n));
        break bb0;
      }
      if (_ || m == null) {
        D = null;
        break bb0;
      }
      let e;
      t[18] !== m || t[19] !== d || t[20] !== a || t[21] !== E || t[22] !== b
        ? ((e = () => {
            if (a == null && b.get(`skip_confirmation`, !1)) {
              (d?.(), m());
              return;
            }
            E();
          }),
          (t[18] = m),
          (t[19] = d),
          (t[20] = a),
          (t[21] = E),
          (t[22] = b),
          (t[23] = e))
        : (e = t[23]);
      let n;
      (t[24] !== v || t[25] !== e
        ? ((n = (0, Y.jsxs)(Y.Fragment, {
            children: [
              (0, Y.jsx)(Y.Fragment, { children: (0, Y.jsx)(Wt, { disabled: v, onClick: e }) }),
              null,
            ],
          })),
          (t[24] = v),
          (t[25] = e),
          (t[26] = n))
        : (n = t[26]),
        (D = n));
    }
  }
  let O;
  t[27] !== r || t[28] !== i || t[29] !== m || t[30] !== _
    ? ((O =
        _ &&
        !i &&
        m != null &&
        (0, Y.jsx)(P, {
          color: `ghostTertiary`,
          disabled: r,
          onClick: m,
          children: (0, Y.jsx)(z, {
            id: `electron.onboarding.conversationalOnboarding.skipCapabilities`,
            defaultMessage: `Skip`,
            description: `Button that skips optional desktop capability setup after completing a starter task`,
          }),
        })),
      (t[27] = r),
      (t[28] = i),
      (t[29] = m),
      (t[30] = _),
      (t[31] = O))
    : (O = t[31]);
  let k;
  t[32] !== y || t[33] !== g
    ? ((k =
        g != null &&
        (0, Y.jsx)(P, {
          color: `ghostTertiary`,
          disabled: y,
          onClick: g,
          children: (0, Y.jsx)(z, {
            id: `electron.onboarding.conversationalOnboarding.chooseAnotherTask`,
            defaultMessage: `Choose another task`,
            description: `Button shown after completing an onboarding task to return to task selection`,
          }),
        })),
      (t[32] = y),
      (t[33] = g),
      (t[34] = k))
    : (k = t[34]);
  let A;
  t[35] !== i || t[36] !== o || t[37] !== n
    ? ((A = n ?? (0, Y.jsx)(zt, { isPhaseComplete: i, phase: o })),
      (t[35] = i),
      (t[36] = o),
      (t[37] = n),
      (t[38] = A))
    : (A = t[38]);
  let j;
  t[39] !== D || t[40] !== O || t[41] !== k || t[42] !== A
    ? ((j = (0, Y.jsxs)(Mt, { children: [D, O, k, A] })),
      (t[39] = D),
      (t[40] = O),
      (t[41] = k),
      (t[42] = A),
      (t[43] = j))
    : (j = t[43]);
  let M;
  t[44] !== i || t[45] !== x || t[46] !== m || t[47] !== a || t[48] !== o || t[49] !== _ || t[50] !== v
    ? ((M =
        o === `task` &&
        !_ &&
        !i &&
        m != null &&
        x &&
        (0, Y.jsx)(xt, { creditRewardAmount: a, skipDisabled: v, onClose: () => S(!1), onSkip: m })),
      (t[44] = i),
      (t[45] = x),
      (t[46] = m),
      (t[47] = a),
      (t[48] = o),
      (t[49] = _),
      (t[50] = v),
      (t[51] = M))
    : (M = t[51]);
  let N;
  return (
    t[52] !== j || t[53] !== M
      ? ((N = (0, Y.jsxs)(Y.Fragment, { children: [j, M] })), (t[52] = j), (t[53] = M), (t[54] = N))
      : (N = t[54]),
    N
  );
}
function Wt(e) {
  let t = (0, Gt.c)(6),
    { children: n, disabled: r, onClick: i } = e,
    a;
  t[0] === n
    ? (a = t[1])
    : ((a =
        n ??
        (0, Y.jsx)(z, {
          id: `electron.onboarding.conversationalOnboarding.skipAfterRole`,
          defaultMessage: `Skip`,
          description: `Button that skips the remainder of conversational onboarding, either immediately or after a confirmation dialog`,
        })),
      (t[0] = n),
      (t[1] = a));
  let o;
  return (
    t[2] !== r || t[3] !== i || t[4] !== a
      ? ((o = (0, Y.jsx)(P, {
          className: `h-[46px] w-[320px] justify-center !text-lg !leading-6`,
          color: `ghostTertiary`,
          disabled: r,
          size: `large`,
          onClick: i,
          children: a,
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
var Gt, Kt, Y;
function qt() {
  return (qt = e(() => {
    ((Gt = b()), (Kt = o()), N(), L(), Pt(), Ht(), tt(), W(), (Y = m()));
  }))();
}
function Jt(e) {
  let t = (0, Xt.c)(30),
    {
      greeting: n,
      welcome: r,
      question: i,
      initiallyComplete: o,
      loading: s,
      onInitialContentReady: c,
      onComplete: l,
    } = e,
    u = a() === !0,
    d;
  t[0] === o ? (d = t[1]) : ((d = () => (o ? `complete` : `thinking`)), (t[0] = o), (t[1] = d));
  let [f, p] = (0, Zt.useState)(d),
    m;
  t[2] === l
    ? (m = t[3])
    : ((m = (e, t) => {
        window.setTimeout(() => {
          (p(e), e === `complete` && l());
        }, t);
      }),
      (t[2] = l),
      (t[3] = m));
  let h = m;
  if (f === `thinking`) {
    let e;
    t[4] !== l || t[5] !== c || t[6] !== u
      ? ((e = () => {
          if ((c(), u)) {
            (p(`complete`), l());
            return;
          }
          p(`greeting`);
        }),
        (t[4] = l),
        (t[5] = c),
        (t[6] = u),
        (t[7] = e))
      : (e = t[7]);
    let n;
    return (
      t[8] !== s || t[9] !== e
        ? ((n = (0, X.jsx)(Ee, { fadeIn: !0, loading: s, loadingTimeoutSeconds: $t, onComplete: e })),
          (t[8] = s),
          (t[9] = e),
          (t[10] = n))
        : (n = t[10]),
      n
    );
  }
  let g = f !== `complete`,
    _;
  t[11] === Symbol.for(`react.memo_cache_sentinel`) ? ((_ = { p: `h1` }), (t[11] = _)) : (_ = t[11]);
  let v;
  t[12] === h ? (v = t[13]) : ((v = () => h(`welcome`, en)), (t[12] = h), (t[13] = v));
  let y;
  t[14] !== n || t[15] !== g || t[16] !== v
    ? ((y = (0, X.jsx)(dt, {
        animate: g,
        className: `flex flex-col [&>h1]:text-heading-lg [&>h1]:leading-[1.2] [&>h1]:font-medium`,
        completionFallbackMs: Qt,
        components: _,
        fadeSegmentDelayMs: 120,
        onComplete: v,
        children: n,
      })),
      (t[14] = n),
      (t[15] = g),
      (t[16] = v),
      (t[17] = y))
    : (y = t[17]);
  let b;
  t[18] !== f || t[19] !== h || t[20] !== r
    ? ((b =
        Yt(f, `welcome`) &&
        (0, X.jsx)(`div`, {
          className: `mt-10`,
          children: (0, X.jsx)(dt, {
            animate: f !== `complete`,
            className: rn,
            onComplete: () => h(`question`, tn),
            children: r,
          }),
        })),
      (t[18] = f),
      (t[19] = h),
      (t[20] = r),
      (t[21] = b))
    : (b = t[21]);
  let x;
  t[22] !== f || t[23] !== i || t[24] !== h
    ? ((x =
        Yt(f, `question`) &&
        (0, X.jsx)(`div`, {
          className: `mt-8`,
          children: (0, X.jsx)(dt, {
            animate: f !== `complete`,
            className: rn,
            onComplete: () => h(`complete`, nn),
            children: i,
          }),
        })),
      (t[22] = f),
      (t[23] = i),
      (t[24] = h),
      (t[25] = x))
    : (x = t[25]);
  let S;
  return (
    t[26] !== y || t[27] !== b || t[28] !== x
      ? ((S = (0, X.jsxs)(`div`, { children: [y, b, x] })),
        (t[26] = y),
        (t[27] = b),
        (t[28] = x),
        (t[29] = S))
      : (S = t[29]),
    S
  );
}
function Yt(e, t) {
  return an[e] >= an[t];
}
var Xt, Zt, X, Qt, $t, en, tn, nn, rn, an;
function on() {
  return (on = e(() => {
    ((Xt = b()),
      E(),
      (Zt = o()),
      ut(),
      Ie(),
      (X = m()),
      (Qt = 700),
      ($t = 3),
      (en = 500),
      (tn = 300),
      (nn = 240),
      (rn = `flex flex-col [&>p]:mb-8 [&>p]:max-w-[760px] [&>p:last-child]:mb-0`),
      (an = { thinking: 0, greeting: 1, welcome: 2, question: 3, complete: 4 }));
  }))();
}
var sn;
function cn() {
  return (cn = e(() => {
    (N(),
      (sn = F({
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
function ln(e) {
  let t = (0, dn.c)(29),
    {
      name: n,
      options: r,
      legend: i,
      selectedValue: o,
      disabled: s,
      customValue: c,
      freeTextPlaceholder: l,
      onSelect: u,
      onCustomValueChange: d,
    } = e,
    p = a() === !0,
    m;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((m = { opacity: 1 }), (t[0] = m)) : (m = t[0]);
  let h;
  t[1] === p ? (h = t[2]) : ((h = !p && { opacity: 0 }), (t[1] = p), (t[2] = h));
  let g;
  t[3] === p
    ? (g = t[4])
    : ((g = p ? { duration: 0 } : { duration: 0.4, ease: [0.23, 1, 0.32, 1] }), (t[3] = p), (t[4] = g));
  let _;
  t[5] === i
    ? (_ = t[6])
    : ((_ = (0, Z.jsx)(`legend`, { className: `sr-only`, children: i })), (t[5] = i), (t[6] = _));
  let v;
  if (t[7] !== n || t[8] !== u || t[9] !== r || t[10] !== o) {
    let e;
    (t[12] !== n || t[13] !== u || t[14] !== o
      ? ((e = (e) =>
          (0, Z.jsx)(
            un,
            { name: n, checked: o === e.value, value: e.value, label: e.label, onSelect: () => u(e.value) },
            e.value,
          )),
        (t[12] = n),
        (t[13] = u),
        (t[14] = o),
        (t[15] = e))
      : (e = t[15]),
      (v = r.map(e)),
      (t[7] = n),
      (t[8] = u),
      (t[9] = r),
      (t[10] = o),
      (t[11] = v));
  } else v = t[11];
  let y;
  t[16] === v
    ? (y = t[17])
    : ((y = (0, Z.jsx)(`div`, { className: `grid grid-cols-3 gap-x-1 gap-y-1 p-2`, children: v })),
      (t[16] = v),
      (t[17] = y));
  let b;
  t[18] !== c || t[19] !== l || t[20] !== d
    ? ((b =
        l != null &&
        (0, Z.jsxs)(`div`, {
          className: `flex h-12 w-full items-center gap-2 border-t border-subtle px-4 text-tertiary`,
          children: [
            (0, Z.jsx)(x, { "aria-hidden": `true`, className: `size-[18px] shrink-0` }),
            (0, Z.jsx)(`input`, {
              "aria-label": l,
              className: `min-w-0 flex-1 bg-transparent text-default placeholder:text-tertiary focus:outline-none`,
              maxLength: 1e3,
              placeholder: l,
              value: c,
              onChange: (e) => {
                d(e.currentTarget.value);
              },
            }),
          ],
        })),
      (t[18] = c),
      (t[19] = l),
      (t[20] = d),
      (t[21] = b))
    : (b = t[21]);
  let S;
  return (
    t[22] !== s || t[23] !== h || t[24] !== g || t[25] !== _ || t[26] !== y || t[27] !== b
      ? ((S = (0, Z.jsxs)(f.fieldset, {
          animate: m,
          className: `mt-8 w-full overflow-hidden rounded-2xl border border-default bg-surface text-lg leading-6 shadow-[0_2px_6px_-1px_rgba(0,0,0,0.03)]`,
          disabled: s,
          initial: h,
          transition: g,
          children: [_, y, b],
        })),
        (t[22] = s),
        (t[23] = h),
        (t[24] = g),
        (t[25] = _),
        (t[26] = y),
        (t[27] = b),
        (t[28] = S))
      : (S = t[28]),
    S
  );
}
function un(e) {
  let t = (0, dn.c)(18),
    { name: n, checked: r, value: i, label: a, onSelect: o } = e,
    s;
  t[0] !== r || t[1] !== n || t[2] !== o || t[3] !== i
    ? ((s = (0, Z.jsx)(`input`, {
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
    : ((l = g(`flex size-[18px] shrink-0 items-center justify-center rounded-full border`, c)),
      (t[5] = c),
      (t[6] = l));
  let u;
  t[7] === r
    ? (u = t[8])
    : ((u = r ? (0, Z.jsx)(`span`, { className: `size-[7px] rounded-full bg-surface` }) : null),
      (t[7] = r),
      (t[8] = u));
  let d;
  t[9] !== l || t[10] !== u
    ? ((d = (0, Z.jsx)(`span`, { className: l, children: u })), (t[9] = l), (t[10] = u), (t[11] = d))
    : (d = t[11]);
  let f;
  t[12] === a
    ? (f = t[13])
    : ((f = (0, Z.jsx)(`span`, { className: `truncate`, children: a })), (t[12] = a), (t[13] = f));
  let p;
  return (
    t[14] !== s || t[15] !== d || t[16] !== f
      ? ((p = (0, Z.jsxs)(`label`, {
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
var dn, Z;
function fn() {
  return (fn = e(() => {
    ((dn = b()), _(), c(), E(), s(), (Z = m()));
  }))();
}
function pn(e) {
  let t = (0, mn.c)(6),
    { ref: n, className: r, children: i } = e,
    a;
  t[0] === r
    ? (a = t[1])
    : ((a = g(`mt-4 flex min-h-[calc(67cqh-2.5rem)] scroll-mt-[33cqh] flex-col gap-6 text-lg leading-6`, r)),
      (t[0] = r),
      (t[1] = a));
  let o;
  return (
    t[2] !== i || t[3] !== n || t[4] !== a
      ? ((o = (0, hn.jsx)(`div`, { ref: n, className: a, children: i })),
        (t[2] = i),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
var mn, hn;
function gn() {
  return (gn = e(() => {
    ((mn = b()), _(), (hn = m()));
  }))();
}
function _n(e) {
  let t = (0, vn.c)(20),
    { label: n, icon: r, selected: i, disabled: a, onSelect: o } = e,
    s = i ? `bg-chart-blue/10` : `bg-surface`,
    c = a ? `cursor-default` : `cursor-interaction enabled:hover:bg-primary-ghost-hover`,
    l = !a && `shadow-[0_2px_6px_-1px_rgba(0,0,0,0.03)]`,
    u;
  t[0] !== s || t[1] !== c || t[2] !== l
    ? ((u = g(
        `relative flex h-[120px] min-w-0 flex-col items-start gap-4 rounded-2xl border border-default p-4 text-start focus-visible:outline-2 focus-visible:outline-ring`,
        s,
        c,
        l,
      )),
      (t[0] = s),
      (t[1] = c),
      (t[2] = l),
      (t[3] = u))
    : (u = t[3]);
  let d = a && !i && `opacity-50`,
    f;
  t[4] === d ? (f = t[5]) : ((f = g(`w-full min-w-0`, d)), (t[4] = d), (t[5] = f));
  let p;
  t[6] === n
    ? (p = t[7])
    : ((p = (0, Q.jsx)(`span`, { className: `line-clamp-2`, children: n })), (t[6] = n), (t[7] = p));
  let m;
  t[8] !== f || t[9] !== p
    ? ((m = (0, Q.jsx)(`span`, { className: f, children: p })), (t[8] = f), (t[9] = p), (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] === i
    ? (h = t[12])
    : ((h = i
        ? (0, Q.jsx)(`span`, {
            className: `absolute top-4 right-4 flex size-6 items-center justify-center`,
            children: (0, Q.jsx)(k, { className: `text-chart-blue` }),
          })
        : null),
      (t[11] = i),
      (t[12] = h));
  let _;
  return (
    t[13] !== r || t[14] !== a || t[15] !== o || t[16] !== u || t[17] !== m || t[18] !== h
      ? ((_ = (0, Q.jsxs)(`button`, {
          className: u,
          disabled: a,
          type: `button`,
          onClick: o,
          children: [r, m, h],
        })),
        (t[13] = r),
        (t[14] = a),
        (t[15] = o),
        (t[16] = u),
        (t[17] = m),
        (t[18] = h),
        (t[19] = _))
      : (_ = t[19]),
    _
  );
}
var vn, Q;
function yn() {
  return (yn = e(() => {
    ((vn = b()), _(), D(), (Q = m()));
  }))();
}
function bn(e) {
  let t = oe(Sn).min(1).safeParse(e.models);
  return t.success ? t.data : null;
}
function xn(e, t) {
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
var Sn;
function Cn() {
  return (Cn = e(() => {
    (l(),
      (Sn = se({
        model: A().trim().min(1),
        reasoning_effort: T([`none`, `minimal`, `low`, `medium`, `high`, `xhigh`, `max`, `ultra`]),
      })));
  }))();
}
function wn(e) {
  let t = (0, Dn.c)(2),
    { children: n } = e,
    { installPlugin: r } = Ue(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { conversationId: null, cwdOverride: $, hostId: I }), (t[0] = i))
    : (i = t[0]);
  let { isConfigDataPending: a, requirements: o } = Le(i),
    s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { conversationId: null, cwdOverride: $, hostId: I }), (t[1] = s))
    : (s = t[1]);
  let { agentMode: c, permissionProfileId: l, shouldSendPermissionOverrides: u } = we(s),
    { serviceTierSettings: d } = Qe(null),
    { value: f } = Re(`2916892840`),
    p = bn(f),
    {
      data: m,
      isLoading: h,
      refetch: g,
    } = Ye({
      hostId: I,
      additionalAvailableModels: new Set(p?.map(En)),
      enabledReasoningEfforts: p?.map(Tn),
    });
  return n({
    agentMode: c,
    hostId: I,
    installPlugin: r,
    isConfigDataPending: a,
    isModelsLoading: h,
    loadModelConfig: async () => {
      let e = xn(m ?? (await g()).data, p);
      if (e == null) throw Error(`The conversational onboarding model is unavailable`);
      return e;
    },
    permissionProfileId: l,
    permissionsRequirements: o,
    projectRoot: $,
    serviceTier: d.serviceTierForRequest,
    shouldSendPermissionOverrides: u,
  });
}
function Tn(e) {
  let { reasoning_effort: t } = e;
  return t;
}
function En(e) {
  let { model: t } = e;
  return t;
}
var Dn, $;
function On() {
  return (On = e(() => {
    ((Dn = b()), _e(), De(), Te(), Je(), We(), Ne(), tt(), Cn(), ($ = ee(`~`)));
  }))();
}
function kn(e) {
  let t = (0, Mn.c)(8),
    { authMethod: n, enabled: r, hostId: i, pluginNames: a } = e,
    o = r === void 0 || r,
    s;
  t[0] === i ? (s = t[1]) : ((s = { hostId: i }), (t[0] = i), (t[1] = s));
  let c = Fe(s),
    l;
  t[2] !== n || t[3] !== i || t[4] !== a
    ? ((l = { authMethod: n, hostId: i, pluginNames: a }), (t[2] = n), (t[3] = i), (t[4] = a), (t[5] = l))
    : (l = t[5]);
  let u = o && a.length > 0 && c,
    d;
  return (t[6] === u ? (d = t[7]) : ((d = { enabled: u }), (t[6] = u), (t[7] = d)), pe(Nn, l, d));
}
function An({ cachedPlugins: e, pluginNames: t, plugins: n }) {
  return t.flatMap((t) => {
    let r =
      n.find((e) => e.marketplacePath != null && e.plugin.name === t) ??
      e?.find((e) => e.marketplacePath != null && e.plugin.name === t);
    if (r == null) {
      let e = n.find(
        (e) =>
          e.plugin.name === t &&
          e.plugin.installed &&
          (e.marketplaceName === `openai-bundled` ||
            e.marketplaceName === `openai-curated` ||
            e.marketplaceName === `openai-curated-remote`),
      );
      return e == null ? [] : [e];
    }
    let i = n.find(
      (e) => e.plugin.installed && (e.plugin.source.type === `remote` ? e.plugin.name === t : jn(e, r)),
    );
    return i == null
      ? [r]
      : [
          {
            ...r,
            plugin: {
              ...r.plugin,
              enabled: i.plugin.enabled,
              installed: !0,
              installPolicy: i.plugin.installPolicy,
              installPolicySource: i.plugin.installPolicySource,
              mustShowInstallationInterstitial: i.plugin.mustShowInstallationInterstitial,
              localVersion: i.plugin.localVersion,
              remotePluginId: r.plugin.remotePluginId ?? i.plugin.remotePluginId,
            },
          },
        ];
  });
}
function jn(e, t) {
  return (
    e.plugin.id === t.plugin.id ||
    (e.plugin.remotePluginId != null && e.plugin.remotePluginId === t.plugin.remotePluginId) ||
    (e.plugin.source.type === `local` &&
      t.plugin.source.type === `local` &&
      e.plugin.source.path === t.plugin.source.path) ||
    (e.marketplaceName === t.marketplaceName && e.plugin.name === t.plugin.name)
  );
}
var Mn, Nn;
function Pn() {
  return (Pn = e(() => {
    ((Mn = b()),
      R(),
      _e(),
      Ae(),
      je(),
      it(),
      Ve(),
      Me(),
      t(),
      C(),
      n(),
      (Nn = de(S, ({ authMethod: e, hostId: t, pluginNames: n }, { queryClient: r, scope: i }) => {
        let a = [...Pe, `conversational-onboarding`, t, n, e];
        return {
          queryKey: a,
          queryFn: async () => {
            let o = r.getQueryData(a),
              { marketplaces: s } = await ke(i, t).sendRequest(`plugin/list`, {
                marketplaceKinds: [`local`],
              }),
              c = An({ cachedPlugins: o, pluginNames: n, plugins: ze(s, o) });
            return (
              e !== `chatgpt` &&
                (c = (
                  await Promise.all(
                    c.map(async (n) => {
                      try {
                        let r = await i.query.getOrFetch(Ze, {
                          hostId: t,
                          marketplacePath: n.marketplacePath,
                          pluginName: Ge(n),
                          remoteMarketplaceName: n.remoteMarketplaceName ?? null,
                        });
                        return rt(r, e) ? [n] : [];
                      } catch (e) {
                        return (
                          xe.warning(`Failed to check onboarding plugin auth eligibility`, {
                            safe: { pluginName: n.plugin.name },
                            sensitive: { error: e },
                          }),
                          []
                        );
                      }
                    }),
                  )
                ).flat()),
              Be({ hostId: t, plugins: c, queryClient: r })
            );
          },
          staleTime: Ce.SIX_HOURS,
        };
      })));
  }))();
}
export {
  _t as A,
  Pt as C,
  Dt as D,
  Ct as E,
  ht as F,
  gt as M,
  mt as N,
  xt as O,
  V as P,
  jt as S,
  At as T,
  zt as _,
  _n as a,
  Rt as b,
  gn as c,
  cn as d,
  sn as f,
  qt as g,
  Ut as h,
  On as i,
  vt as j,
  W as k,
  ln as l,
  on as m,
  kn as n,
  yn as o,
  Jt as p,
  wn as r,
  pn as s,
  Pn as t,
  fn as u,
  Ht as v,
  Ot as w,
  Mt as x,
  Ft as y,
};
//# sourceMappingURL=use-conversational-onboarding-local-plugins-7d7956127060.js.map
