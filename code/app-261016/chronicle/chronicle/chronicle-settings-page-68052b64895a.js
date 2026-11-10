import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $C as t,
  $St as n,
  $st as r,
  D2 as i,
  DB as a,
  FBt as o,
  HO as s,
  IO as c,
  JO as l,
  JOt as u,
  Kxt as d,
  LNt as f,
  LO as p,
  Lxt as m,
  MNt as h,
  NNt as g,
  O2 as _,
  OB as v,
  PBt as y,
  Qst as b,
  RO as x,
  Uz as S,
  Vrt as C,
  WO as w,
  Wz as T,
  XOt as E,
  Y3 as D,
  YOt as O,
  Z3 as k,
  ZSt as A,
  ast as j,
  ck as M,
  ew as N,
  git as P,
  hit as F,
  iCt as I,
  ist as L,
  lB as R,
  lit as z,
  lk as B,
  nA as ee,
  nB as te,
  nCt as ne,
  nO as re,
  oit as ie,
  okt as ae,
  qO as oe,
  qrt as V,
  rA as H,
  rB as U,
  rO as W,
  rk as G,
  sct as K,
  sw as q,
  tk as J,
  tkt as Y,
  tut as se,
  uB as ce,
  uk as le,
  uw as ue,
  vT as de,
  xyt as fe,
  yT as pe,
  zO as me,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Cqt as he,
  Dqt as ge,
  EBr as _e,
  FF as ve,
  Jbr as ye,
  LF as be,
  OBr as xe,
  Os as Se,
  QF as Ce,
  RF as we,
  SBr as Te,
  SSt as Ee,
  UFt as De,
  WFt as Oe,
  b5t as ke,
  bBr as Ae,
  cA as je,
  eI as Me,
  iat as Ne,
  ixr as Pe,
  ks as Fe,
  oat as Ie,
  sA as Le,
  v5t as Re,
  vBr as ze,
  wBr as Be,
  wSt as Ve,
  xBr as He,
  yBr as Ue,
} from "./app-initial-ad16eaadf81f.js";
import { Em as We, Tm as Ge } from "./app-primary-3e00728c2a4c.js";
import { n as Ke, t as qe } from "./color-icon-5a5a69e17a26.js";
import {
  a as Je,
  c as Ye,
  d as Xe,
  i as Ze,
  m as Qe,
  n as $e,
  o as et,
  p as tt,
  r as nt,
  u as rt,
} from "./chronicle-service-queries-10a9f98f13fc.js";
import { a as it, n as at } from "./computer-history-query-865e2a9eeb6e.js";
import { n as ot, r as st, t as ct } from "./computer-history-suggestion-prompt-b38af7618729.js";
import { o as lt, s as ut } from "./memory-settings-analytics-ff8e2bac5691.js";
import {
  S as dt,
  _ as ft,
  a as pt,
  b as mt,
  c as ht,
  d as gt,
  f as _t,
  g as vt,
  h as yt,
  i as bt,
  l as xt,
  m as St,
  n as Ct,
  o as wt,
  p as Tt,
  r as Et,
  s as Dt,
  t as Ot,
  u as kt,
  v as At,
  x as jt,
  y as Mt,
} from "./chronicle-permissions-dialog-677b8f830739.js";
function Nt(e) {
  let t = (0, Pt.c)(25),
    { open: n, onOpenChange: r, onAllowAllApps: i, onCustomizeApps: a } = e,
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = (e) => {
        (e.preventDefault(), a());
      }),
      (t[0] = a),
      (t[1] = o));
  let s;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, X.jsx)(me, {
        children: (0, X.jsx)(x, {
          title: (0, X.jsx)(oe, {
            asChild: !0,
            children: (0, X.jsx)(`h2`, {
              children: (0, X.jsx)(Y, {
                id: `settings.chronicle.consent.title`,
                defaultMessage: `You're in control.`,
                description: `Title of the Computer history privacy confirmation dialog`,
              }),
            }),
          }),
        }),
      })),
      (t[2] = s))
    : (s = t[2]);
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, X.jsxs)(`li`, {
        className: `flex items-start gap-3`,
        children: [
          (0, X.jsx)(qe, { className: `size-6 shrink-0`, name: `book-open` }),
          (0, X.jsx)(`span`, {
            children: (0, X.jsx)(Y, {
              id: `settings.chronicle.consent.controls`,
              defaultMessage: `You can pause or clear your history and manage which apps are included at any time.`,
              description: `Computer history privacy confirmation explaining that users can pause or clear their history and manage which applications are included`,
            }),
          }),
        ],
      })),
      (t[3] = l))
    : (l = t[3]);
  let u;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsxs)(`li`, {
        className: `flex items-start gap-3`,
        children: [
          (0, X.jsx)(qe, { className: `size-6 shrink-0`, name: `heart-text-clipboard` }),
          (0, X.jsx)(`span`, {
            children: (0, X.jsx)(Y, {
              id: `settings.chronicle.consent.sensitiveApps`,
              defaultMessage: `Consider pausing or excluding sensitive apps, such as health or finance, from your history.`,
              description: `Computer history privacy confirmation advising users to pause recording or exclude sensitive health and finance applications`,
            }),
          }),
        ],
      })),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, X.jsx)(me, {
        children: (0, X.jsxs)(`ul`, {
          className: `flex flex-col gap-3 text-secondary`,
          children: [
            l,
            u,
            (0, X.jsxs)(`li`, {
              className: `flex items-start gap-3`,
              children: [
                (0, X.jsx)(qe, { className: `size-6 shrink-0`, name: `person-square-video` }),
                (0, X.jsx)(`span`, {
                  children: (0, X.jsx)(Y, {
                    id: `settings.chronicle.consent.otherPeople`,
                    defaultMessage: `You also agree that you'll pause Computer History during communications with others, such as in video conference or text messaging apps, unless you have their prior express consent.`,
                    description: `Computer history privacy confirmation requiring users to pause recording during communications with other people unless they have prior express consent`,
                  }),
                }),
              ],
            }),
          ],
        }),
      })),
      (t[5] = d))
    : (d = t[5]);
  let f;
  t[6] === r ? (f = t[7]) : ((f = () => r(!1)), (t[6] = r), (t[7] = f));
  let m;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(Y, {
        id: `settings.chronicle.consent.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel turning on Computer history from the privacy confirmation dialog`,
      })),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] === f
    ? (h = t[10])
    : ((h = (0, X.jsx)(D, { color: `ghost`, type: `button`, onClick: f, children: m })),
      (t[9] = f),
      (t[10] = h));
  let g;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(Y, {
        id: `settings.chronicle.consent.allowAllApps`,
        defaultMessage: `Allow all apps`,
        description: `Accept the Computer history privacy confirmation and turn on recording without customizing application permissions`,
      })),
      (t[11] = g))
    : (g = t[11]);
  let _;
  t[12] === i
    ? (_ = t[13])
    : ((_ = (0, X.jsx)(D, { color: `ghost`, type: `button`, onClick: i, children: g })),
      (t[12] = i),
      (t[13] = _));
  let v;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(D, {
        color: `primary`,
        type: `submit`,
        children: (0, X.jsx)(Y, {
          id: `settings.chronicle.consent.customizeApps`,
          defaultMessage: `Customize apps`,
          description: `Accept the Computer history privacy confirmation and customize which applications can be recorded`,
        }),
      })),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] !== _ || t[16] !== h
    ? ((y = (0, X.jsx)(me, { children: (0, X.jsxs)(p, { children: [h, _, v] }) })),
      (t[15] = _),
      (t[16] = h),
      (t[17] = y))
    : (y = t[17]);
  let b;
  t[18] !== o || t[19] !== y
    ? ((b = (0, X.jsxs)(c, { as: `form`, className: `gap-1`, onSubmit: o, children: [s, d, y] })),
      (t[18] = o),
      (t[19] = y),
      (t[20] = b))
    : (b = t[20]);
  let S;
  return (
    t[21] !== r || t[22] !== n || t[23] !== b
      ? ((S = (0, X.jsx)(w, { open: n, onOpenChange: r, showDialogClose: !1, children: b })),
        (t[21] = r),
        (t[22] = n),
        (t[23] = b),
        (t[24] = S))
      : (S = t[24]),
    S
  );
}
var Pt, X;
function Ft() {
  return (Ft = e(() => {
    ((Pt = y()), E(), Ke(), k(), l(), s(), (X = f()));
  }))();
}
var It, Lt, Rt;
function zt() {
  return (zt = e(() => {
    ((It = `_exampleUser_e04pk_1`),
      (Lt = `_exampleWord_e04pk_8`),
      (Rt = {
        exampleUser: It,
        "example-user-send": `_example-user-send_e04pk_46`,
        exampleWord: Lt,
        "example-word-appear": `_example-word-appear_e04pk_46`,
      }));
  }))();
}
function Bt(e) {
  let n = (0, Ut.c)(110),
    { disabled: r, disabledReason: i, onTurnOn: a } = e,
    o = ae(),
    s = T(),
    [c, l] = (0, Wt.useState)(0),
    u;
  n[0] === s
    ? (u = n[1])
    : ((u = () => {
        if (s) return;
        let e = window.setTimeout(() => {
          l(Vt);
        }, 14e3);
        return () => window.clearTimeout(e);
      }),
      (n[0] = s),
      (n[1] = u));
  let d;
  (n[2] !== c || n[3] !== s ? ((d = [c, s]), (n[2] = c), (n[3] = s), (n[4] = d)) : (d = n[4]),
    (0, Wt.useEffect)(u, d));
  let f = Gt[c] ?? Gt[0],
    p = `link` in f ? f.link : null,
    m;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (e) => {
        l((t) => (t + e + Gt.length) % Gt.length);
      }),
      (n[5] = m))
    : (m = n[5]);
  let g = m,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    E,
    O,
    k,
    A,
    j,
    M,
    N;
  if (
    n[6] !== r ||
    n[7] !== i ||
    n[8] !== f.assistant ||
    n[9] !== f.key ||
    n[10] !== f.user ||
    n[11] !== c ||
    n[12] !== p ||
    n[13] !== o ||
    n[14] !== a
  ) {
    let e = o.formatMessage(f.assistant),
      s = Ht(e, o.locale);
    ((E = `flex flex-col`), (_ = t), (C = `grid min-h-[340px] grid-cols-2 max-md:grid-cols-1`));
    let l;
    n[30] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, Z.jsx)(`div`, {
          className: `text-base leading-6 font-medium text-default`,
          children: (0, Z.jsx)(ht, {}),
        })),
        (n[30] = l))
      : (l = n[30]);
    let u;
    n[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((u = (0, Z.jsxs)(`div`, {
          className: `mt-[5px] flex max-w-[300px] flex-col gap-3 text-[13px] leading-[18px] text-secondary`,
          children: [
            (0, Z.jsx)(`p`, { children: (0, Z.jsx)(wt, {}) }),
            (0, Z.jsx)(`p`, { children: (0, Z.jsx)(pt, {}) }),
          ],
        })),
        (n[31] = u))
      : (u = n[31]);
    let d = i == null,
      m;
    n[32] === i
      ? (m = n[33])
      : ((m = i == null ? null : (0, Z.jsx)(Y, { ...Kt[i] })), (n[32] = i), (n[33] = m));
    let g =
        i != null &&
        `cursor-not-allowed rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
      T;
    n[34] === g ? (T = n[35]) : ((T = h(`inline-flex`, g)), (n[34] = g), (n[35] = T));
    let P = i == null ? void 0 : 0,
      F;
    n[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((F = (0, Z.jsx)(Y, {
          id: `settings.chronicle.turnOn`,
          defaultMessage: `Turn on`,
          description: `Button to enable Computer history`,
        })),
        (n[36] = F))
      : (F = n[36]);
    let I;
    n[37] !== r || n[38] !== a
      ? ((I = (0, Z.jsx)(D, {
          className: `mt-4 !h-[30px] !border-transparent !px-3 !py-0 !text-sm !leading-[18px] !font-medium`,
          color: `primary`,
          size: `medium`,
          disabled: r,
          onClick: a,
          children: F,
        })),
        (n[37] = r),
        (n[38] = a),
        (n[39] = I))
      : (I = n[39]);
    let L;
    (n[40] !== T || n[41] !== P || n[42] !== I
      ? ((L = (0, Z.jsx)(`span`, { className: T, tabIndex: P, children: I })),
        (n[40] = T),
        (n[41] = P),
        (n[42] = I),
        (n[43] = L))
      : (L = n[43]),
      n[44] !== d || n[45] !== m || n[46] !== L
        ? ((w = (0, Z.jsxs)(`div`, {
            className: `flex min-w-0 flex-col items-start justify-center px-9 py-[30px] text-start`,
            children: [l, u, (0, Z.jsx)(te, { disabled: d, tooltipContent: m, children: L })],
          })),
          (n[44] = d),
          (n[45] = m),
          (n[46] = L),
          (n[47] = w))
        : (w = n[47]),
      (x = `relative min-h-[340px] overflow-hidden`),
      n[48] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((S = (0, Z.jsx)(`img`, {
            "aria-hidden": `true`,
            className: `absolute inset-0 size-full object-cover object-[center_44%]`,
            src: De,
            alt: ``,
          })),
          (n[48] = S))
        : (S = n[48]),
      (b = `group/example absolute inset-5 flex min-h-0 [scrollbar-width:none] flex-col overflow-y-auto rounded-xl border border-default bg-surface/95 p-5 pb-12 text-sm leading-5 text-default [&::-webkit-scrollbar]:hidden`),
      (N = c),
      (v = `flex flex-1 flex-col`));
    let R;
    (n[49] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((R = h(
          Rt.exampleUser,
          `ms-auto bg-text/5 max-w-[77%] min-w-0 overflow-hidden break-words rounded-2xl px-3 py-2`,
        )),
        (n[49] = R))
      : (R = n[49]),
      n[50] === f.user
        ? (y = n[51])
        : ((y = (0, Z.jsx)(`p`, { className: R, children: (0, Z.jsx)(Y, { ...f.user }) })),
          (n[50] = f.user),
          (n[51] = y)),
      (j = `mt-4`));
    let z;
    (n[52] === p
      ? (z = n[53])
      : ((z = p == null ? null : (0, Z.jsxs)(Z.Fragment, { children: [` `, (0, Z.jsx)(Y, { ...p })] })),
        (n[52] = p),
        (n[53] = z)),
      (M = (0, Z.jsxs)(`span`, { className: `sr-only`, children: [e, z] })),
      (O = `true`));
    let B;
    (n[54] === f.key
      ? (B = n[55])
      : ((B = (e, t) =>
          (0, Z.jsx)(
            `span`,
            {
              className: Rt.exampleWord,
              style: {
                animationDelay: `calc(var(--transition-duration-relaxed) + var(--transition-duration-basic) + ${e.wordIndex} * var(--transition-duration-basic) / 2)`,
              },
              children: e.text,
            },
            `${f.key}-${t}`,
          )),
        (n[54] = f.key),
        (n[55] = B)),
      (k = s.map(B)),
      (A =
        p == null
          ? null
          : (0, Z.jsxs)(Z.Fragment, {
              children: [
                ` `,
                (0, Z.jsx)(`span`, {
                  className: h(Rt.exampleWord, `text-info`),
                  style: {
                    animationDelay: `calc(var(--transition-duration-relaxed) + var(--transition-duration-basic) + ${(s.at(-1)?.wordIndex ?? 0) + 1} * var(--transition-duration-basic) / 2)`,
                  },
                  children: (0, Z.jsx)(Y, { ...p }),
                }),
              ],
            })),
      (n[6] = r),
      (n[7] = i),
      (n[8] = f.assistant),
      (n[9] = f.key),
      (n[10] = f.user),
      (n[11] = c),
      (n[12] = p),
      (n[13] = o),
      (n[14] = a),
      (n[15] = _),
      (n[16] = v),
      (n[17] = y),
      (n[18] = b),
      (n[19] = x),
      (n[20] = S),
      (n[21] = C),
      (n[22] = w),
      (n[23] = E),
      (n[24] = O),
      (n[25] = k),
      (n[26] = A),
      (n[27] = j),
      (n[28] = M),
      (n[29] = N));
  } else
    ((_ = n[15]),
      (v = n[16]),
      (y = n[17]),
      (b = n[18]),
      (x = n[19]),
      (S = n[20]),
      (C = n[21]),
      (w = n[22]),
      (E = n[23]),
      (O = n[24]),
      (k = n[25]),
      (A = n[26]),
      (j = n[27]),
      (M = n[28]),
      (N = n[29]));
  let P;
  n[56] !== O || n[57] !== k || n[58] !== A
    ? ((P = (0, Z.jsxs)(`span`, { "aria-hidden": O, children: [k, A] })),
      (n[56] = O),
      (n[57] = k),
      (n[58] = A),
      (n[59] = P))
    : (P = n[59]);
  let F;
  n[60] !== P || n[61] !== j || n[62] !== M
    ? ((F = (0, Z.jsxs)(`p`, { className: j, children: [M, P] })),
      (n[60] = P),
      (n[61] = j),
      (n[62] = M),
      (n[63] = F))
    : (F = n[63]);
  let I;
  n[64] !== v || n[65] !== y || n[66] !== F || n[67] !== N
    ? ((I = (0, Z.jsxs)(`div`, { className: v, children: [y, F] }, N)),
      (n[64] = v),
      (n[65] = y),
      (n[66] = F),
      (n[67] = N),
      (n[68] = I))
    : (I = n[68]);
  let L;
  n[69] === o
    ? (L = n[70])
    : ((L = o.formatMessage({
        id: `settings.chronicle.off.example.previous`,
        defaultMessage: `Previous example`,
        description: `Previous Computer history example button`,
      })),
      (n[69] = o),
      (n[70] = L));
  let R, z;
  n[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = () => g(-1)), (z = (0, Z.jsx)(Se, { className: `!size-[15px]` })), (n[71] = R), (n[72] = z))
    : ((R = n[71]), (z = n[72]));
  let B;
  n[73] === L
    ? (B = n[74])
    : ((B = (0, Z.jsx)(D, {
        "aria-label": L,
        color: `secondary`,
        size: `medium`,
        uniform: !0,
        className: `!size-[26px] !p-0`,
        onClick: R,
        children: z,
      })),
      (n[73] = L),
      (n[74] = B));
  let ee;
  n[75] === o
    ? (ee = n[76])
    : ((ee = o.formatMessage({
        id: `settings.chronicle.off.example.next`,
        defaultMessage: `Next example`,
        description: `Next Computer history example button`,
      })),
      (n[75] = o),
      (n[76] = ee));
  let ne, re;
  n[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = () => g(1)),
      (re = (0, Z.jsx)(Se, { className: `!size-[15px] -scale-x-100 transform` })),
      (n[77] = ne),
      (n[78] = re))
    : ((ne = n[77]), (re = n[78]));
  let ie;
  n[79] === ee
    ? (ie = n[80])
    : ((ie = (0, Z.jsx)(D, {
        "aria-label": ee,
        color: `secondary`,
        size: `medium`,
        uniform: !0,
        className: `!size-[26px] !p-0`,
        onClick: ne,
        children: re,
      })),
      (n[79] = ee),
      (n[80] = ie));
  let oe;
  n[81] !== B || n[82] !== ie
    ? ((oe = (0, Z.jsxs)(`div`, {
        className: `absolute right-3 bottom-3 flex gap-1 opacity-0 transition-opacity duration-basic group-focus-within/example:opacity-100 group-hover/example:opacity-100 motion-reduce:transition-none`,
        children: [B, ie],
      })),
      (n[81] = B),
      (n[82] = ie),
      (n[83] = oe))
    : (oe = n[83]);
  let V;
  n[84] !== b || n[85] !== I || n[86] !== oe
    ? ((V = (0, Z.jsxs)(`div`, { className: b, children: [I, oe] })),
      (n[84] = b),
      (n[85] = I),
      (n[86] = oe),
      (n[87] = V))
    : (V = n[87]);
  let H;
  n[88] !== c || n[89] !== o
    ? ((H = o.formatMessage(
        {
          id: `settings.chronicle.off.example.position`,
          defaultMessage: `Example {current} of {total}`,
          description: `Computer history example carousel position`,
        },
        { current: c + 1, total: Gt.length },
      )),
      (n[88] = c),
      (n[89] = o),
      (n[90] = H))
    : (H = n[90]);
  let U;
  n[91] === c
    ? (U = n[92])
    : ((U = Gt.map((e, t) =>
        (0, Z.jsx)(
          `span`,
          { className: h(`size-1 rounded-full bg-surface`, t !== c && `opacity-50`) },
          e.key,
        ),
      )),
      (n[91] = c),
      (n[92] = U));
  let W;
  n[93] !== H || n[94] !== U
    ? ((W = (0, Z.jsx)(`div`, {
        className: `absolute bottom-[9px] left-1/2 flex -translate-x-1/2 items-center gap-[5px]`,
        children: (0, Z.jsx)(`div`, { className: `contents`, "aria-label": H, role: `status`, children: U }),
      })),
      (n[93] = H),
      (n[94] = U),
      (n[95] = W))
    : (W = n[95]);
  let G;
  n[96] !== x || n[97] !== S || n[98] !== V || n[99] !== W
    ? ((G = (0, Z.jsxs)(`div`, { className: x, children: [S, V, W] })),
      (n[96] = x),
      (n[97] = S),
      (n[98] = V),
      (n[99] = W),
      (n[100] = G))
    : (G = n[100]);
  let K;
  n[101] !== _ || n[102] !== C || n[103] !== w || n[104] !== G
    ? ((K = (0, Z.jsxs)(_, { className: C, children: [w, G] })),
      (n[101] = _),
      (n[102] = C),
      (n[103] = w),
      (n[104] = G),
      (n[105] = K))
    : (K = n[105]);
  let q;
  n[106] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((q = (0, Z.jsx)(`p`, {
        className: `mt-[18px] text-[13px] leading-5 text-secondary`,
        children: (0, Z.jsx)(Dt, {}),
      })),
      (n[106] = q))
    : (q = n[106]);
  let J;
  return (
    n[107] !== E || n[108] !== K
      ? ((J = (0, Z.jsxs)(`div`, { className: E, children: [K, q] })),
        (n[107] = E),
        (n[108] = K),
        (n[109] = J))
      : (J = n[109]),
    J
  );
}
function Vt(e) {
  return (e + 1) % Gt.length;
}
function Ht(e, t) {
  let n = -1;
  return Array.from(
    new Intl.Segmenter(t, { granularity: `word` }).segment(e),
    ({ isWordLike: e, segment: t }) => (e && (n += 1), { text: t, wordIndex: Math.max(n, 0) }),
  );
}
var Ut, Wt, Z, Gt, Kt;
function qt() {
  return (qt = e(() => {
    ((Ut = y()),
      g(),
      (Wt = o()),
      E(),
      Oe(),
      k(),
      U(),
      S(),
      Fe(),
      N(),
      _t(),
      zt(),
      (Z = f()),
      (Gt = [
        {
          key: `follow-up`,
          user: u({
            id: `settings.chronicle.off.example.followUp.user`,
            defaultMessage: `What did I promise to send Sarah after yesterday’s meeting?`,
            description: `Example Computer history question about a follow-up`,
          }),
          assistant: u({
            id: `settings.chronicle.off.example.followUp.assistant`,
            defaultMessage: `You told Sarah in Slack you’d send the Q3 budget by Friday. The latest version is in Google Sheets, and your meeting notes in Google Docs list two numbers to confirm: hiring and travel.`,
            description: `Example Computer history answer about a follow-up`,
          }),
        },
        {
          key: `before-lunch`,
          user: u({
            id: `settings.chronicle.off.example.beforeLunch.user`,
            defaultMessage: `What was I working on before lunch?`,
            description: `Example Computer history question about resuming earlier work`,
          }),
          assistant: u({
            id: `settings.chronicle.off.example.beforeLunch.assistant`,
            defaultMessage: `You were revising the launch presentation in Google Slides, checking campaign numbers in Google Sheets, and reviewing feedback from Maya in Slack. You left off updating the rollout timeline.`,
            description: `Example Computer history answer about resuming earlier work`,
          }),
        },
        {
          key: `planning-document`,
          user: u({
            id: `settings.chronicle.off.example.planningDocument.user`,
            defaultMessage: `What was that planning document I was looking at today?`,
            description: `Example Computer history question about finding a planning document`,
          }),
          assistant: u({
            id: `settings.chronicle.off.example.planningDocument.assistant`,
            defaultMessage: `You were reviewing the Q4 launch plan in Google Docs this morning. Here’s the document:`,
            description: `Example Computer history answer about finding a planning document`,
          }),
          link: u({
            id: `settings.chronicle.off.example.planningDocument.link`,
            defaultMessage: `Q4 Launch Planning`,
            description: `Example planning document title shown in a Computer history answer`,
          }),
        },
        {
          key: `remodel`,
          user: u({
            id: `settings.chronicle.off.example.remodel.user`,
            defaultMessage: `Where was I on the home remodel?`,
            description: `Example Computer history question about a home project`,
          }),
          assistant: u({
            id: `settings.chronicle.off.example.remodel.assistant`,
            defaultMessage: `You narrowed the backsplash to two options in Chrome, compared quotes in Google Sheets, and saved the contractor’s revised estimate in Google Drive. The next decision is white subway tile or blue zellige.`,
            description: `Example Computer history answer about a home project`,
          }),
        },
      ]),
      (Kt = O({
        "service-unavailable": {
          id: `settings.chronicle.off.serviceUnavailableTooltip`,
          defaultMessage: `Computer history isn’t available. Restart ChatGPT and try again.`,
          description: `Tooltip explaining that Computer history cannot be enabled because the Chronicle service is unavailable`,
        },
        "configuration-loading": {
          id: `settings.chronicle.off.configurationLoadingTooltip`,
          defaultMessage: `Loading your settings…`,
          description: `Tooltip explaining that Computer history cannot be enabled while user settings are loading`,
        },
        "configuration-unavailable": {
          id: `settings.chronicle.off.configurationUnavailableTooltip`,
          defaultMessage: `Your settings couldn’t be loaded. Restart ChatGPT and try again.`,
          description: `Tooltip explaining that Computer history cannot be enabled because user settings could not be loaded`,
        },
        "memory-feature-loading": {
          id: `settings.chronicle.off.memoryFeatureLoadingTooltip`,
          defaultMessage: `Checking Memories feature availability…`,
          description: `Tooltip explaining that Computer history cannot be enabled while Memories feature availability is being checked`,
        },
        "memory-feature-unavailable": {
          id: `settings.chronicle.off.memoryFeatureUnavailableTooltip`,
          defaultMessage: `Computer history requires Memories, which isn’t available right now`,
          description: `Tooltip explaining that Computer history cannot be enabled because the Memories feature is unavailable`,
        },
      })));
  }))();
}
var Jt, Yt, Xt, Zt, Qt, $t, en, tn, nn;
function rn() {
  return (rn = e(() => {
    ((Jt = `_timelineItem_122di_1`),
      (Yt = `_timelineTime_122di_5`),
      (Xt = `_timelineRail_122di_10`),
      (Zt = `_timelineRailGapBefore_122di_29`),
      (Qt = `_timelineRailGapAfter_122di_30`),
      ($t = `_timelineDot_122di_43`),
      (en = `_timelineContent_122di_47`),
      (tn = `_timelineDelete_122di_55`),
      (nn = {
        timelineItem: Jt,
        timelineTime: Yt,
        timelineRail: Xt,
        timelineRailGapBefore: Zt,
        timelineRailGapAfter: Qt,
        timelineDot: $t,
        timelineContent: en,
        timelineDelete: tn,
      }));
  }))();
}
function an(e) {
  let r = (0, vn.c)(49),
    { currentTimeMs: i, isServiceUnavailable: o, onClearRequest: s, settings: c } = e,
    l = n(b),
    u = ae(),
    { data: d, isError: f, isLoading: p, refetch: m } = I(at),
    h = I(Xe),
    g = I(Ze),
    [_, v] = (0, yn.useState)(null),
    [y, x] = (0, yn.useState)(null),
    [S] = (0, yn.useState)(Date.now),
    C = (0, yn.useRef)(null),
    w,
    T;
  (r[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = () => {
        let e = (e) => {
            (e.target instanceof Element &&
              e.target.closest(`[data-chronicle-delete-confirming="true"]`) != null) ||
              x(null);
          },
          t = (e) => {
            e.key === `Escape` && x(null);
          };
        return (
          document.addEventListener(`pointerdown`, e),
          document.addEventListener(`keydown`, t),
          () => {
            (C.current != null && clearTimeout(C.current),
              document.removeEventListener(`pointerdown`, e),
              document.removeEventListener(`keydown`, t));
          }
        );
      }),
      (T = []),
      (r[0] = w),
      (r[1] = T))
    : ((w = r[0]), (T = r[1])),
    (0, yn.useEffect)(w, T));
  let E;
  r[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (e) => {
        if ((C.current != null && (clearTimeout(C.current), (C.current = null)), e != null)) {
          v(e);
          return;
        }
        C.current = setTimeout(() => {
          (v(null), (C.current = null));
        }, 120);
      }),
      (r[2] = E))
    : (E = r[2]);
  let O = E,
    k,
    A,
    j,
    M,
    N,
    P;
  if (
    r[3] !== y ||
    r[4] !== i ||
    r[5] !== g ||
    r[6] !== _ ||
    r[7] !== d ||
    r[8] !== u ||
    r[9] !== f ||
    r[10] !== p ||
    r[11] !== o ||
    r[12] !== S ||
    r[13] !== s ||
    r[14] !== m ||
    r[15] !== l ||
    r[16] !== c ||
    r[17] !== h
  ) {
    let e = gn(d ?? [], new Date(i ?? S));
    ((j = Le), (N = `history`));
    let n;
    r[24] === Symbol.for(`react.memo_cache_sentinel`) ? ((n = (0, Q.jsx)(gt, {})), (r[24] = n)) : (n = r[24]);
    let v;
    r[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (0, Q.jsx)(Y, {
          id: `settings.chronicle.history.description`,
          defaultMessage: `ChatGPT records text summaries of your computer activity. You can control what ChatGPT can reference by deleting individual records or clearing recent history.`,
          description: `Explanation of the Computer history timeline and its deletion controls`,
        })),
        (r[25] = v))
      : (v = r[25]);
    let b;
    r[26] === u
      ? (b = r[27])
      : ((b = u.formatMessage({
          id: `settings.chronicle.history.descriptionAriaLabel`,
          defaultMessage: `About computer history`,
          description: `Accessible label for the Computer history information button`,
        })),
        (r[26] = u),
        (r[27] = b));
    let C;
    r[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((C = (0, Q.jsx)(a, { asset: de })), (r[28] = C))
      : (C = r[28]);
    let w;
    r[29] === b
      ? (w = r[30])
      : ((w = (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            n,
            (0, Q.jsx)(te, {
              cloneCustomTrigger: !0,
              delayDuration: 0,
              tooltipContent: v,
              children: (0, Q.jsx)(D, {
                "aria-label": b,
                color: `ghostTertiary`,
                size: `inline`,
                children: C,
              }),
            }),
          ],
        })),
        (r[29] = b),
        (r[30] = w));
    let T;
    (r[31] !== d?.length || r[32] !== o || r[33] !== s
      ? ((T =
          (d?.length ?? 0) > 0
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [(0, Q.jsx)(fn, { disabled: o, onRequest: s }), (0, Q.jsx)(ln, { disabled: o })],
              })
            : null),
        (r[31] = d?.length),
        (r[32] = o),
        (r[33] = s),
        (r[34] = T))
      : (T = r[34]),
      r[35] !== w || r[36] !== T
        ? ((P = (0, Q.jsx)(Le.Header, { title: w, actions: T })), (r[35] = w), (r[36] = T), (r[37] = P))
        : (P = r[37]),
      (A = Le.Content),
      (k = t),
      (M = p
        ? (0, Q.jsx)(`div`, {
            className: `px-5 py-10 text-center text-sm text-secondary`,
            children: (0, Q.jsx)(Y, {
              id: `settings.chronicle.history.loading`,
              defaultMessage: `Loading history…`,
              description: `Computer history loading state`,
            }),
          })
        : f
          ? (0, Q.jsxs)(`div`, {
              className: `flex flex-col items-center gap-3 px-5 py-10 text-center text-sm text-secondary`,
              children: [
                (0, Q.jsx)(Y, {
                  id: `settings.chronicle.history.error`,
                  defaultMessage: `Computer history could not be loaded`,
                  description: `Computer history error state`,
                }),
                (0, Q.jsx)(D, {
                  color: `outline`,
                  onClick: () => void m(),
                  children: (0, Q.jsx)(Y, {
                    id: `settings.chronicle.history.retry`,
                    defaultMessage: `Try again`,
                    description: `Retry loading Computer history`,
                  }),
                }),
              ],
            })
          : e.length === 0
            ? (0, Q.jsx)(`div`, {
                className: `px-5 py-10 text-center text-sm text-secondary`,
                children: (0, Q.jsx)(Y, {
                  id: `settings.chronicle.history.empty`,
                  defaultMessage: `No computer history yet`,
                  description: `Computer history empty state`,
                }),
              })
            : (0, Q.jsx)(`div`, {
                className: `divide-y divide-border`,
                children: e.map((e) =>
                  (0, Q.jsx)(
                    on,
                    {
                      group: e,
                      settings: c,
                      highlightedApplication: _,
                      confirmingDeleteId: y,
                      isUpdatingApplication: h.isPending,
                      isDeletingItem: g.isPending,
                      onHighlightApplication: O,
                      onApplicationObservedChange: (e, t) =>
                        h.mutate(
                          { application: e, observed: t },
                          {
                            onError: () => {
                              l.get(V).danger(
                                (0, Q.jsx)(Y, {
                                  id: `settings.chronicle.history.applicationErrorToast`,
                                  defaultMessage: `The app's Computer history permission could not be updated`,
                                  description: `Toast shown when updating a Computer history application policy fails`,
                                }),
                                {
                                  errorAnalytics: {
                                    toastId: `settings.chronicle.history.applicationErrorToast`,
                                  },
                                },
                              );
                            },
                          },
                        ),
                      onConfirmingDeleteChange: x,
                      onDelete: (e) =>
                        g.mutate(
                          { scope: `interval`, interval: e.interval },
                          {
                            onError: () => {
                              l.get(V).danger(
                                (0, Q.jsx)(Y, {
                                  id: `settings.chronicle.history.clearErrorToast`,
                                  defaultMessage: `Computer history could not be cleared`,
                                  description: `Toast shown when clearing Computer history fails`,
                                }),
                                { errorAnalytics: { toastId: `settings.chronicle.history.clearErrorToast` } },
                              );
                            },
                          },
                        ),
                    },
                    e.key,
                  ),
                ),
              })),
      (r[3] = y),
      (r[4] = i),
      (r[5] = g),
      (r[6] = _),
      (r[7] = d),
      (r[8] = u),
      (r[9] = f),
      (r[10] = p),
      (r[11] = o),
      (r[12] = S),
      (r[13] = s),
      (r[14] = m),
      (r[15] = l),
      (r[16] = c),
      (r[17] = h),
      (r[18] = k),
      (r[19] = A),
      (r[20] = j),
      (r[21] = M),
      (r[22] = N),
      (r[23] = P));
  } else ((k = r[18]), (A = r[19]), (j = r[20]), (M = r[21]), (N = r[22]), (P = r[23]));
  let F;
  r[38] !== k || r[39] !== M
    ? ((F = (0, Q.jsx)(k, { children: M })), (r[38] = k), (r[39] = M), (r[40] = F))
    : (F = r[40]);
  let L;
  r[41] !== A || r[42] !== F
    ? ((L = (0, Q.jsx)(A, { children: F })), (r[41] = A), (r[42] = F), (r[43] = L))
    : (L = r[43]);
  let R;
  return (
    r[44] !== j || r[45] !== N || r[46] !== P || r[47] !== L
      ? ((R = (0, Q.jsxs)(j, { id: N, children: [P, L] })),
        (r[44] = j),
        (r[45] = N),
        (r[46] = P),
        (r[47] = L),
        (r[48] = R))
      : (R = r[48]),
    R
  );
}
function on(e) {
  let t = (0, vn.c)(34),
    {
      group: n,
      highlightedApplication: r,
      confirmingDeleteId: i,
      isDeletingItem: o,
      isUpdatingApplication: s,
      onApplicationObservedChange: c,
      onDelete: l,
      onConfirmingDeleteChange: u,
      onHighlightApplication: d,
      settings: f,
    } = e,
    [p, m] = (0, yn.useState)(!0),
    g;
  t[0] !== n.items || t[1] !== r
    ? ((g = r != null && !n.items.some((e) => e.applications.some((e) => e.bundleIdentifier === r))),
      (t[0] = n.items),
      (t[1] = r),
      (t[2] = g))
    : (g = t[2]);
  let _ = g && `opacity-40`,
    v;
  t[3] === _ ? (v = t[4]) : ((v = h(`transition-opacity`, _)), (t[3] = _), (t[4] = v));
  let y;
  t[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = () => m(sn)), (t[5] = y)) : (y = t[5]);
  let b;
  t[6] === n.label ? (b = t[7]) : ((b = (0, Q.jsx)(hn, { label: n.label })), (t[6] = n.label), (t[7] = b));
  let x = p && `rotate-90`,
    S;
  t[8] === x ? (S = t[9]) : ((S = h(`text-tertiary transition-transform`, x)), (t[8] = x), (t[9] = S));
  let C;
  t[10] === S
    ? (C = t[11])
    : ((C = (0, Q.jsx)(a, { className: S, "aria-hidden": !1, asset: re })), (t[10] = S), (t[11] = C));
  let w;
  t[12] !== p || t[13] !== b || t[14] !== C
    ? ((w = (0, Q.jsxs)(D, {
        className: `gap-2 text-sm leading-5 font-medium text-default`,
        "aria-expanded": p,
        color: `ghostMuted`,
        size: `inline`,
        type: `button`,
        onClick: y,
        children: [b, C],
      })),
      (t[12] = p),
      (t[13] = b),
      (t[14] = C),
      (t[15] = w))
    : (w = t[15]);
  let T;
  t[16] !== v || t[17] !== w
    ? ((T = (0, Q.jsx)(`h2`, { className: v, children: w })), (t[16] = v), (t[17] = w), (t[18] = T))
    : (T = t[18]);
  let E;
  t[19] !== i ||
  t[20] !== p ||
  t[21] !== n.items ||
  t[22] !== r ||
  t[23] !== o ||
  t[24] !== s ||
  t[25] !== c ||
  t[26] !== u ||
  t[27] !== l ||
  t[28] !== d ||
  t[29] !== f
    ? ((E = p
        ? (0, Q.jsx)(`div`, {
            className: `mt-2.5 flex flex-col`,
            children: n.items.map((e, t) =>
              (0, Q.jsx)(
                cn,
                {
                  item: e,
                  settings: f,
                  highlightedApplication: r,
                  isConfirmingDelete: i === e.id,
                  isDeletingItem: o,
                  isUpdatingApplication: s,
                  hasGapAfter:
                    t < n.items.length - 1 &&
                    e.interval.startMs > (n.items[t + 1]?.interval.endMs ?? e.interval.startMs),
                  hasGapBefore:
                    t > 0 && (n.items[t - 1]?.interval.startMs ?? e.interval.endMs) > e.interval.endMs,
                  onApplicationObservedChange: c,
                  onDelete: () => l(e),
                  onConfirmingDeleteChange: (t) => u(t ? e.id : null),
                  onHighlightApplication: d,
                },
                e.id,
              ),
            ),
          })
        : null),
      (t[19] = i),
      (t[20] = p),
      (t[21] = n.items),
      (t[22] = r),
      (t[23] = o),
      (t[24] = s),
      (t[25] = c),
      (t[26] = u),
      (t[27] = l),
      (t[28] = d),
      (t[29] = f),
      (t[30] = E))
    : (E = t[30]);
  let O;
  return (
    t[31] !== T || t[32] !== E
      ? ((O = (0, Q.jsxs)(`section`, { className: `px-5 py-4`, children: [T, E] })),
        (t[31] = T),
        (t[32] = E),
        (t[33] = O))
      : (O = t[33]),
    O
  );
}
function sn(e) {
  return !e;
}
function cn(e) {
  let t = (0, vn.c)(96),
    {
      hasGapAfter: n,
      hasGapBefore: r,
      highlightedApplication: i,
      isConfirmingDelete: a,
      isDeletingItem: o,
      isUpdatingApplication: s,
      item: c,
      onApplicationObservedChange: l,
      onDelete: u,
      onConfirmingDeleteChange: d,
      onHighlightApplication: f,
      settings: p,
    } = e,
    m = ae(),
    g;
  t[0] !== i || t[1] !== c.applications
    ? ((g = i != null && !c.applications.some((e) => e.bundleIdentifier === i)),
      (t[0] = i),
      (t[1] = c.applications),
      (t[2] = g))
    : (g = t[2]);
  let _ = g && `opacity-40`,
    v;
  t[3] === _
    ? (v = t[4])
    : ((v = h(nn.timelineItem, `group/timeline grid items-stretch gap-x-4 transition-opacity`, _)),
      (t[3] = _),
      (t[4] = v));
  let y = c.summaryLevel !== `six_hour`,
    b;
  t[5] !== m || t[6] !== c ? ((b = mn(c, m)), (t[5] = m), (t[6] = c), (t[7] = b)) : (b = t[7]);
  let x;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = h(nn.timelineTime, `text-end leading-4 font-medium text-secondary`)), (t[8] = x))
    : (x = t[8]);
  let S;
  t[9] === c.interval.startMs
    ? (S = t[10])
    : ((S = new Date(c.interval.startMs).toISOString()), (t[9] = c.interval.startMs), (t[10] = S));
  let C;
  t[11] === c ? (C = t[12]) : ((C = (0, Q.jsx)(pn, { item: c })), (t[11] = c), (t[12] = C));
  let w;
  t[13] !== S || t[14] !== C
    ? ((w = (0, Q.jsx)(`time`, { className: x, dateTime: S, children: C })),
      (t[13] = S),
      (t[14] = C),
      (t[15] = w))
    : (w = t[15]);
  let T;
  t[16] !== y || t[17] !== b || t[18] !== w
    ? ((T = (0, Q.jsx)(te, { disabled: y, tabIndex: 0, tooltipContent: b, children: w })),
      (t[16] = y),
      (t[17] = b),
      (t[18] = w),
      (t[19] = T))
    : (T = t[19]);
  let E = r && nn.timelineRailGapBefore,
    O = n && nn.timelineRailGapAfter,
    k;
  t[20] !== E || t[21] !== O
    ? ((k = h(nn.timelineRail, `relative min-h-full`, E, O)), (t[20] = E), (t[21] = O), (t[22] = k))
    : (k = t[22]);
  let A;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(`span`, {
        className: h(
          nn.timelineDot,
          `absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-text-tertiary`,
        ),
      })),
      (t[23] = A))
    : (A = t[23]);
  let j;
  t[24] === k
    ? (j = t[25])
    : ((j = (0, Q.jsx)(`span`, { className: k, "aria-hidden": `true`, children: A })),
      (t[24] = k),
      (t[25] = j));
  let M;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = h(nn.timelineContent, `min-w-0`)), (t[26] = M))
    : (M = t[26]);
  let N;
  t[27] === c.title
    ? (N = t[28])
    : ((N = (0, Q.jsx)(`h3`, {
        className: `min-w-0 truncate text-sm leading-5 font-medium text-default`,
        children: c.title,
      })),
      (t[27] = c.title),
      (t[28] = N));
  let P = a && `opacity-100`,
    F;
  t[29] === P
    ? (F = t[30])
    : ((F = h(
        `flex items-center gap-1 opacity-0 transition-opacity duration-basic group-focus-within/timeline:opacity-100 group-hover/timeline:opacity-100`,
        P,
      )),
      (t[29] = P),
      (t[30] = F));
  let I;
  t[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, Q.jsx)(Y, {
        id: `settings.chronicle.history.revealMemoryFile`,
        defaultMessage: `Reveal in Finder`,
        description: `Tooltip for revealing a Computer history memory file in Finder`,
      })),
      (t[31] = I))
    : (I = t[31]);
  let L;
  t[32] !== m || t[33] !== c.title
    ? ((L = m.formatMessage(
        {
          id: `settings.chronicle.history.revealMemoryFileAriaLabel`,
          defaultMessage: `Reveal {title} in Finder`,
          description: `Accessible label for revealing a Computer history memory file in Finder`,
        },
        { title: c.title },
      )),
      (t[32] = m),
      (t[33] = c.title),
      (t[34] = L))
    : (L = t[34]);
  let z;
  t[35] === c.memoryFilePath
    ? (z = t[36])
    : ((z = (e) => {
        (e.currentTarget.blur(), ke({ cwd: null, path: c.memoryFilePath, target: `fileManager` }));
      }),
      (t[35] = c.memoryFilePath),
      (t[36] = z));
  let B;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (0, Q.jsx)(ee, { "aria-hidden": !0, className: `icon-2xs shrink-0` })), (t[37] = B))
    : (B = t[37]);
  let ne;
  t[38] !== o || t[39] !== L || t[40] !== z
    ? ((ne = (0, Q.jsx)(te, {
        tooltipContent: I,
        children: (0, Q.jsx)(D, {
          color: `ghost`,
          size: `default`,
          radius: `large`,
          className: `size-5.5 shrink-0 justify-center`,
          disabled: o,
          "aria-label": L,
          onClick: z,
          children: B,
        }),
      })),
      (t[38] = o),
      (t[39] = L),
      (t[40] = z),
      (t[41] = ne))
    : (ne = t[41]);
  let re = !a && void 0,
    ie;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, Q.jsx)(Y, {
        id: `settings.chronicle.history.deleteItemTooltip`,
        defaultMessage: `Delete`,
        description: `Tooltip for deleting a Computer history item`,
      })),
      (t[42] = ie))
    : (ie = t[42]);
  let oe = a ? `danger` : `ghost`,
    V = a ? `w-14` : `w-5.5`,
    H;
  t[43] === V
    ? (H = t[44])
    : ((H = h(nn.timelineDelete, `h-5.5 shrink-0 justify-center`, V)), (t[43] = V), (t[44] = H));
  let U = a ? `true` : void 0,
    W;
  t[45] !== m || t[46] !== a || t[47] !== c.title
    ? ((W = a
        ? m.formatMessage(
            {
              id: `settings.chronicle.history.confirmDeleteItem`,
              defaultMessage: `Confirm delete {title}`,
              description: `Accessible label for confirming deletion of a Computer history item`,
            },
            { title: c.title },
          )
        : m.formatMessage(
            {
              id: `settings.chronicle.history.deleteItem`,
              defaultMessage: `Delete {title}`,
              description: `Accessible label for deleting a Computer history item`,
            },
            { title: c.title },
          )),
      (t[45] = m),
      (t[46] = a),
      (t[47] = c.title),
      (t[48] = W))
    : (W = t[48]);
  let G;
  t[49] !== a || t[50] !== d || t[51] !== u
    ? ((G = () => {
        if (!a) {
          (R(), d(!0));
          return;
        }
        (d(!1), u());
      }),
      (t[49] = a),
      (t[50] = d),
      (t[51] = u),
      (t[52] = G))
    : (G = t[52]);
  let K;
  t[53] === a
    ? (K = t[54])
    : ((K = a
        ? (0, Q.jsx)(Y, {
            id: `settings.chronicle.history.confirmDelete`,
            defaultMessage: `Delete`,
            description: `Inline confirmation for deleting a Computer history item`,
          })
        : (0, Q.jsx)(Ge, { "aria-hidden": !0, className: `icon-2xs shrink-0` })),
      (t[53] = a),
      (t[54] = K));
  let q;
  t[55] !== o || t[56] !== oe || t[57] !== H || t[58] !== U || t[59] !== W || t[60] !== G || t[61] !== K
    ? ((q = (0, Q.jsx)(D, {
        color: oe,
        size: `default`,
        radius: `large`,
        className: H,
        "data-chronicle-delete-confirming": U,
        disabled: o,
        "aria-label": W,
        onClick: G,
        children: K,
      })),
      (t[55] = o),
      (t[56] = oe),
      (t[57] = H),
      (t[58] = U),
      (t[59] = W),
      (t[60] = G),
      (t[61] = K),
      (t[62] = q))
    : (q = t[62]);
  let J;
  t[63] !== a || t[64] !== re || t[65] !== q
    ? ((J = (0, Q.jsx)(te, { disableHoverOpen: a, open: re, tooltipContent: ie, children: q })),
      (t[63] = a),
      (t[64] = re),
      (t[65] = q),
      (t[66] = J))
    : (J = t[66]);
  let se;
  t[67] !== F || t[68] !== ne || t[69] !== J
    ? ((se = (0, Q.jsxs)(`div`, { className: F, children: [ne, J] })),
      (t[67] = F),
      (t[68] = ne),
      (t[69] = J),
      (t[70] = se))
    : (se = t[70]);
  let ce;
  t[71] !== N || t[72] !== se
    ? ((ce = (0, Q.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [N, se] })),
      (t[71] = N),
      (t[72] = se),
      (t[73] = ce))
    : (ce = t[73]);
  let le;
  t[74] === c.description
    ? (le = t[75])
    : ((le = (0, Q.jsx)(`p`, {
        className: `mt-[3px] text-[13px] leading-5 text-secondary`,
        children: c.description,
      })),
      (t[74] = c.description),
      (t[75] = le));
  let ue;
  t[76] !== i || t[77] !== s || t[78] !== c.applications || t[79] !== l || t[80] !== f || t[81] !== p
    ? ((ue =
        c.applications.length > 0
          ? (0, Q.jsx)(`div`, {
              className: `mt-2 flex flex-wrap items-center gap-[9px]`,
              children: c.applications.map((e) =>
                (0, Q.jsx)(
                  dn,
                  {
                    application: e,
                    highlightedApplication: i,
                    isUpdatingApplication: s,
                    settings: p,
                    onApplicationObservedChange: l,
                    onHighlightApplication: f,
                  },
                  e.bundleIdentifier,
                ),
              ),
            })
          : null),
      (t[76] = i),
      (t[77] = s),
      (t[78] = c.applications),
      (t[79] = l),
      (t[80] = f),
      (t[81] = p),
      (t[82] = ue))
    : (ue = t[82]);
  let de;
  t[83] !== c.memoryFilePath || t[84] !== c.suggestion
    ? ((de =
        c.suggestion == null
          ? null
          : (0, Q.jsx)(un, { suggestion: c.suggestion, memoryFilePath: c.memoryFilePath })),
      (t[83] = c.memoryFilePath),
      (t[84] = c.suggestion),
      (t[85] = de))
    : (de = t[85]);
  let fe;
  t[86] !== ce || t[87] !== le || t[88] !== ue || t[89] !== de
    ? ((fe = (0, Q.jsxs)(`div`, { className: M, children: [ce, le, ue, de] })),
      (t[86] = ce),
      (t[87] = le),
      (t[88] = ue),
      (t[89] = de),
      (t[90] = fe))
    : (fe = t[90]);
  let pe;
  return (
    t[91] !== T || t[92] !== j || t[93] !== v || t[94] !== fe
      ? ((pe = (0, Q.jsxs)(`article`, { className: v, children: [T, j, fe] })),
        (t[91] = T),
        (t[92] = j),
        (t[93] = v),
        (t[94] = fe),
        (t[95] = pe))
      : (pe = t[95]),
    pe
  );
}
function ln(e) {
  let t = (0, vn.c)(8),
    { disabled: n } = e,
    r = ae(),
    o = ge(),
    s;
  t[0] !== r || t[1] !== o
    ? ((s = () => {
        let e = [
            bn.todayTasksPrompt,
            bn.standupPrompt,
            bn.findDocumentPrompt,
            bn.followUpsPrompt,
            bn.roastBehaviorPrompt,
            bn.distractionsPrompt,
            bn.dailyFeedbackPrompt,
            bn.writingStylePrompt,
            bn.writingStyleSkillPrompt,
            bn.keyboardShortcutsPrompt,
            bn.aiOpportunitiesPrompt,
            bn.commonPhrasePrompt,
            bn.focusPatternsPrompt,
            bn.resumeWorkPrompt,
          ],
          t = e[Math.floor(Math.random() * e.length)];
        t != null &&
          o({
            prefillPrompt: Ee({
              defaultPrompt: r.formatMessage(t),
              pluginDisplayName: r.formatMessage(ct),
              pluginId: `${m}@${d}`,
            }),
          });
      }),
      (t[0] = r),
      (t[1] = o),
      (t[2] = s))
    : (s = t[2]);
  let c, l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(a, { asset: i })),
      (l = (0, Q.jsx)(Y, {
        id: `settings.chronicle.history.askAboutHistory`,
        defaultMessage: `Ask about your history`,
        description: `Button for starting a conversation about Computer history`,
      })),
      (t[3] = c),
      (t[4] = l))
    : ((c = t[3]), (l = t[4]));
  let u;
  return (
    t[5] !== n || t[6] !== s
      ? ((u = (0, Q.jsxs)(D, {
          color: `outline`,
          size: `toolbar`,
          radius: `large`,
          disabled: n,
          onClick: s,
          children: [c, l],
        })),
        (t[5] = n),
        (t[6] = s),
        (t[7] = u))
      : (u = t[7]),
    u
  );
}
function un(e) {
  let t = (0, vn.c)(19),
    { memoryFilePath: n, suggestion: r } = e,
    i = ae(),
    a = ge(),
    o;
  t[0] === r.type
    ? (o = t[1])
    : ((o = (0, Q.jsx)(`div`, {
        className: `text-sm leading-5 font-medium text-default`,
        children:
          r.type === `skill`
            ? (0, Q.jsx)(Y, {
                id: `settings.chronicle.history.suggestedSkill`,
                defaultMessage: `Suggested skill`,
                description: `Heading for a reusable skill suggested from Computer history`,
              })
            : (0, Q.jsx)(Y, {
                id: `settings.chronicle.history.suggestedAutomation`,
                defaultMessage: `Suggested automation`,
                description: `Heading for an automation suggested from Computer history`,
              }),
      })),
      (t[0] = r.type),
      (t[1] = o));
  let s;
  t[2] === r.description
    ? (s = t[3])
    : ((s = (0, Q.jsx)(`p`, { className: `mt-1 text-sm leading-5 text-secondary`, children: r.description })),
      (t[2] = r.description),
      (t[3] = s));
  let c;
  t[4] !== i || t[5] !== n || t[6] !== a || t[7] !== r
    ? ((c = () => a({ prefillPrompt: ot({ intl: i, memoryFilePath: n, suggestion: r }) })),
      (t[4] = i),
      (t[5] = n),
      (t[6] = a),
      (t[7] = r),
      (t[8] = c))
    : (c = t[8]);
  let l;
  t[9] !== r.name || t[10] !== r.type
    ? ((l =
        r.type === `skill`
          ? (0, Q.jsx)(Y, {
              id: `settings.chronicle.history.createSuggestedSkill`,
              defaultMessage: `Create {name} skill`,
              description: `Action to create the named reusable skill suggested from Computer history`,
              values: { name: r.name },
            })
          : (0, Q.jsx)(Y, {
              id: `settings.chronicle.history.createSuggestedAutomation`,
              defaultMessage: `Create {name} automation`,
              description: `Action to create the named automation suggested from Computer history`,
              values: { name: r.name },
            })),
      (t[9] = r.name),
      (t[10] = r.type),
      (t[11] = l))
    : (l = t[11]);
  let u;
  t[12] !== c || t[13] !== l
    ? ((u = (0, Q.jsx)(`button`, {
        className: `mt-1 cursor-interaction text-sm leading-5 font-medium text-info underline-offset-2 hover:underline hover:brightness-95`,
        type: `button`,
        onClick: c,
        children: l,
      })),
      (t[12] = c),
      (t[13] = l),
      (t[14] = u))
    : (u = t[14]);
  let d;
  return (
    t[15] !== o || t[16] !== s || t[17] !== u
      ? ((d = (0, Q.jsxs)(`div`, { className: `mt-3 rounded-lg bg-text/5 px-3 py-2`, children: [o, s, u] })),
        (t[15] = o),
        (t[16] = s),
        (t[17] = u),
        (t[18] = d))
      : (d = t[18]),
    d
  );
}
function dn(e) {
  let t = (0, vn.c)(46),
    {
      application: n,
      highlightedApplication: r,
      isUpdatingApplication: i,
      onApplicationObservedChange: a,
      onHighlightApplication: o,
      settings: s,
    } = e,
    c = ae(),
    [l, u] = (0, yn.useState)(!1),
    d;
  t[0] !== n.bundleIdentifier || t[1] !== s
    ? ((d = s == null || tt(s, n.bundleIdentifier)), (t[0] = n.bundleIdentifier), (t[1] = s), (t[2] = d))
    : (d = t[2]);
  let f = d,
    p = s == null || i,
    m;
  t[3] !== n.bundleIdentifier || t[4] !== p || t[5] !== o
    ? ((m = (e) => {
        if (p) {
          (u(!1), o(null));
          return;
        }
        (u(e), o(e ? n.bundleIdentifier : null));
      }),
      (t[3] = n.bundleIdentifier),
      (t[4] = p),
      (t[5] = o),
      (t[6] = m))
    : (m = t[6]);
  let g;
  t[7] !== n.displayName || t[8] !== c
    ? ((g = c.formatMessage(
        {
          id: `settings.chronicle.history.openApplicationMenu`,
          defaultMessage: `Open {app} menu`,
          description: `Accessible label for opening a timeline application menu`,
        },
        { app: n.displayName },
      )),
      (t[7] = n.displayName),
      (t[8] = c),
      (t[9] = g))
    : (g = t[9]);
  let _ = !f && `grayscale`,
    v = r != null && r !== n.bundleIdentifier && `opacity-40`,
    y;
  t[10] !== _ || t[11] !== v
    ? ((y = h(
        `size-5 overflow-hidden rounded-[5px] transition-opacity duration-[120ms] ease-in-out aria-disabled:!opacity-100`,
        _,
        v,
      )),
      (t[10] = _),
      (t[11] = v),
      (t[12] = y))
    : (y = t[12]);
  let b;
  t[13] !== n.bundleIdentifier || t[14] !== p || t[15] !== o
    ? ((b = () => {
        p || o(n.bundleIdentifier);
      }),
      (t[13] = n.bundleIdentifier),
      (t[14] = p),
      (t[15] = o),
      (t[16] = b))
    : (b = t[16]);
  let x;
  t[17] !== o || t[18] !== l
    ? ((x = () => {
        l || o(null);
      }),
      (t[17] = o),
      (t[18] = l),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== n.displayName || t[21] !== n.iconDataURL
    ? ((S =
        n.iconDataURL == null
          ? (0, Q.jsx)(`span`, {
              className: `flex size-full items-center justify-center bg-text/5 text-[10px] font-medium text-secondary`,
              children: n.displayName.slice(0, 1),
            })
          : (0, Q.jsx)(`img`, { className: `size-full object-contain`, src: n.iconDataURL, alt: `` })),
      (t[20] = n.displayName),
      (t[21] = n.iconDataURL),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== g || t[24] !== y || t[25] !== b || t[26] !== x || t[27] !== S
    ? ((C = (0, Q.jsx)(`button`, {
        "aria-label": g,
        className: y,
        type: `button`,
        onMouseEnter: b,
        onMouseLeave: x,
        children: S,
      })),
      (t[23] = g),
      (t[24] = y),
      (t[25] = b),
      (t[26] = x),
      (t[27] = S),
      (t[28] = C))
    : (C = t[28]);
  let w;
  t[29] !== n || t[30] !== f || t[31] !== a
    ? ((w = () => a(n, !f)), (t[29] = n), (t[30] = f), (t[31] = a), (t[32] = w))
    : (w = t[32]);
  let T;
  t[33] !== n.displayName || t[34] !== f
    ? ((T = f
        ? (0, Q.jsx)(Y, {
            id: `settings.chronicle.history.excludeApplication`,
            defaultMessage: `Exclude {app} from future history`,
            description: `Timeline app action that excludes the app from future Computer history`,
            values: { app: n.displayName },
          })
        : (0, Q.jsx)(Y, {
            id: `settings.chronicle.history.includeApplication`,
            defaultMessage: `Include {app} in future history`,
            description: `Timeline app action that includes the app in future Computer history`,
            values: { app: n.displayName },
          })),
      (t[33] = n.displayName),
      (t[34] = f),
      (t[35] = T))
    : (T = t[35]);
  let E;
  t[36] !== i || t[37] !== w || t[38] !== T
    ? ((E = (0, Q.jsx)(G.Item, { disabled: i, onSelect: w, children: T })),
      (t[36] = i),
      (t[37] = w),
      (t[38] = T),
      (t[39] = E))
    : (E = t[39]);
  let D;
  return (
    t[40] !== p || t[41] !== l || t[42] !== C || t[43] !== E || t[44] !== m
      ? ((D = (0, Q.jsx)(J, {
          align: `start`,
          contentClassName: `!w-max !min-w-[180px]`,
          disabled: p,
          open: l,
          sideOffset: 6,
          onOpenChange: m,
          triggerButton: C,
          children: E,
        })),
        (t[40] = p),
        (t[41] = l),
        (t[42] = C),
        (t[43] = E),
        (t[44] = m),
        (t[45] = D))
      : (D = t[45]),
    D
  );
}
function fn(e) {
  let t = (0, vn.c)(10),
    { disabled: n, onRequest: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = [
        [
          (0, Q.jsx)(
            Y,
            {
              id: `settings.chronicle.history.clearTenMinutes`,
              defaultMessage: `Clear last 10 minutes`,
              description: `Clear Computer history range option`,
            },
            `last_ten_minutes`,
          ),
          `last_ten_minutes`,
        ],
        [
          (0, Q.jsx)(
            Y,
            {
              id: `settings.chronicle.history.clearHour`,
              defaultMessage: `Clear last hour`,
              description: `Clear Computer history range option`,
            },
            `last_hour`,
          ),
          `last_hour`,
        ],
        [
          (0, Q.jsx)(
            Y,
            {
              id: `settings.chronicle.history.clearDay`,
              defaultMessage: `Clear last day`,
              description: `Clear Computer history range option`,
            },
            `last_day`,
          ),
          `last_day`,
        ],
        [
          (0, Q.jsx)(
            Y,
            {
              id: `settings.chronicle.history.clearAll`,
              defaultMessage: `Clear all`,
              description: `Clear all Computer history range option`,
            },
            `all`,
          ),
          `all`,
        ],
      ]),
      (t[0] = i))
    : (i = t[0]);
  let a = i,
    o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, Q.jsx)(Y, {
        id: `settings.chronicle.history.clear`,
        defaultMessage: `Clear history`,
        description: `Clear Computer history menu button`,
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === n ? (s = t[3]) : ((s = (0, Q.jsx)(ve, { disabled: n, children: o })), (t[2] = n), (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = a.map((e) => {
        let [t, n] = e;
        return (0, Q.jsx)(
          G.Item,
          {
            className: n === `all` ? `!text-chart-red` : void 0,
            onSelect: () => r({ scope: n, interval: null }),
            children: t,
          },
          n,
        );
      })),
      (t[4] = r),
      (t[5] = c));
  let l;
  return (
    t[6] !== n || t[7] !== s || t[8] !== c
      ? ((l = (0, Q.jsx)(J, {
          align: `end`,
          contentWidth: `menu`,
          disabled: n,
          triggerButton: s,
          children: c,
        })),
        (t[6] = n),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function pn(e) {
  let t = (0, vn.c)(4),
    { item: n } = e,
    r = ae(),
    i = new Date(n.interval.startMs);
  if (n.summaryLevel === `ten_minute`)
    return (0, Q.jsx)(Q.Fragment, { children: r.formatTime(i, { hour: `numeric`, minute: `2-digit` }) });
  let a = i.getHours();
  if (a >= 4 && a < 10) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Y, {
            id: `settings.chronicle.history.morning`,
            defaultMessage: `Morning`,
            description: `Morning label for a six-hour Computer history summary`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (a >= 10 && a < 16) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Y, {
            id: `settings.chronicle.history.afternoon`,
            defaultMessage: `Afternoon`,
            description: `Afternoon label for a six-hour Computer history summary`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  if (a >= 16 && a < 22) {
    let e;
    return (
      t[2] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Y, {
            id: `settings.chronicle.history.evening`,
            defaultMessage: `Evening`,
            description: `Evening label for a six-hour Computer history summary`,
          })),
          (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let o;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((o = (0, Q.jsx)(Y, {
          id: `settings.chronicle.history.overnight`,
          defaultMessage: `Overnight`,
          description: `Overnight label for a six-hour Computer history summary`,
        })),
        (t[3] = o))
      : (o = t[3]),
    o
  );
}
function mn(e, t) {
  let n = { hour: `numeric`, minute: `2-digit` },
    r = t.formatTime(new Date(e.interval.startMs), n),
    i = t.formatTime(new Date(e.interval.endMs), n);
  return t.formatMessage(
    {
      id: `settings.chronicle.history.timeRange`,
      defaultMessage: `{start} – {end}`,
      description: `Local time range for a Computer history item`,
    },
    { start: r, end: i },
  );
}
function hn(e) {
  let t = (0, vn.c)(7),
    { label: n } = e,
    r = ae();
  if (n.kind === `today`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Y, {
            id: `settings.chronicle.history.today`,
            defaultMessage: `Today`,
            description: `Computer history group label for today`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n.kind === `yesterday`) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(Y, {
            id: `settings.chronicle.history.yesterday`,
            defaultMessage: `Yesterday`,
            description: `Computer history group label for yesterday`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i;
  t[2] !== r || t[3] !== n.date
    ? ((i = r.formatDate(n.date, { weekday: `long`, month: `long`, day: `numeric` })),
      (t[2] = r),
      (t[3] = n.date),
      (t[4] = i))
    : (i = t[4]);
  let a;
  return (
    t[5] === i ? (a = t[6]) : ((a = (0, Q.jsx)(Q.Fragment, { children: i })), (t[5] = i), (t[6] = a)),
    a
  );
}
function gn(e, t) {
  let n = new Map();
  for (let t of e) {
    let e = new Date(t.interval.startMs),
      r = `${e.getFullYear()}-${e.getMonth()}-${e.getDate()}`,
      i = n.get(r) ?? [];
    (i.push(t), n.set(r, i));
  }
  let r = new Date(t);
  return (
    r.setDate(t.getDate() - 1),
    [...n.entries()].flatMap(([e, n]) => {
      let i = n[0];
      if (i == null) return [];
      let a = new Date(i.interval.startMs),
        o;
      return (
        (o = _n(a, t) ? { kind: `today` } : _n(a, r) ? { kind: `yesterday` } : { kind: `date`, date: a }),
        [{ key: e, label: o, items: n }]
      );
    })
  );
}
function _n(e, t) {
  return e.getFullYear() === t.getFullYear() && e.getMonth() === t.getMonth() && e.getDate() === t.getDate();
}
var vn, yn, Q, bn;
function xn() {
  return (xn = e(() => {
    ((vn = y()),
      _(),
      W(),
      pe(),
      g(),
      A(),
      K(),
      (yn = o()),
      E(),
      it(),
      st(),
      k(),
      M(),
      v(),
      C(),
      U(),
      ce(),
      Re(),
      he(),
      H(),
      We(),
      Ve(),
      r(),
      je(),
      we(),
      N(),
      _t(),
      Je(),
      rn(),
      (Q = f()),
      (bn = O({
        todayTasksPrompt: {
          id: `settings.chronicle.history.todayTasksPrompt`,
          defaultMessage: `Give me a list of tasks I’ve worked on today and their status`,
          description: `Suggested conversation prompt asking about today's tasks and their status`,
        },
        standupPrompt: {
          id: `settings.chronicle.history.standupPrompt`,
          defaultMessage: `Prepare a summary of what I did yesterday for standup`,
          description: `Suggested conversation prompt requesting a standup summary from yesterday's Computer history`,
        },
        findDocumentPrompt: {
          id: `settings.chronicle.history.findDocumentPrompt`,
          defaultMessage: `Where can I find the proposal document I was looking for earlier today?`,
          description: `Suggested conversation prompt asking to locate a recently edited document`,
        },
        followUpsPrompt: {
          id: `settings.chronicle.history.followUpsPrompt`,
          defaultMessage: `Who contacted me today that I need to follow up with?`,
          description: `Suggested conversation prompt asking who contacted the user today and needs a follow-up`,
        },
        roastBehaviorPrompt: {
          id: `settings.chronicle.history.roastBehaviorPrompt`,
          defaultMessage: `Roast my computer behavior`,
          description: `Suggested conversation prompt requesting a humorous critique of the user's computer activity`,
        },
        distractionsPrompt: {
          id: `settings.chronicle.history.distractionsPrompt`,
          defaultMessage: `How often do I get distracted, and what usually pulls me off task?`,
          description: `Suggested conversation prompt asking how frequently the user gets distracted and what causes those distractions`,
        },
        dailyFeedbackPrompt: {
          id: `settings.chronicle.history.dailyFeedbackPrompt`,
          defaultMessage: `Give me feedback on how I operate day to day`,
          description: `Suggested conversation prompt requesting feedback on the user's everyday work habits`,
        },
        writingStylePrompt: {
          id: `settings.chronicle.history.writingStylePrompt`,
          defaultMessage: `Analyse the writing samples you have from me and describe my writing style with examples and guidelines`,
          description: `Suggested conversation prompt asking to analyze the user's writing style from Computer history`,
        },
        writingStyleSkillPrompt: {
          id: `settings.chronicle.history.writingStyleSkillPrompt`,
          defaultMessage: `Create a reusable skill that writes like me`,
          description: `Suggested conversation prompt asking to create a reusable skill that matches the user's writing style`,
        },
        keyboardShortcutsPrompt: {
          id: `settings.chronicle.history.keyboardShortcutsPrompt`,
          defaultMessage: `What keyboard shortcuts do I use most? And which should I be using more?`,
          description: `Suggested conversation prompt asking about frequently used keyboard shortcuts and shortcuts the user should use more often`,
        },
        aiOpportunitiesPrompt: {
          id: `settings.chronicle.history.aiOpportunitiesPrompt`,
          defaultMessage: `Where am I being ineffective, and what should I be using AI for instead?`,
          description: `Suggested conversation prompt asking how the user could improve their productivity by using artificial intelligence`,
        },
        commonPhrasePrompt: {
          id: `settings.chronicle.history.commonPhrasePrompt`,
          defaultMessage: `What is my most commonly used phrase?`,
          description: `Suggested conversation prompt asking which phrase the user repeats most frequently in their computer activity`,
        },
        focusPatternsPrompt: {
          id: `settings.chronicle.history.focusPatternsPrompt`,
          defaultMessage: `How do I split my time between focused work, switching tabs, and returning to unfinished tasks?`,
          description: `Suggested conversation prompt asking about focused work and task-switching patterns`,
        },
        resumeWorkPrompt: {
          id: `settings.chronicle.history.resumeWorkPrompt`,
          defaultMessage: `What was I working on before my last break?`,
          description: `Suggested conversation prompt asking to resume previous work`,
        },
      })));
  }))();
}
function Sn() {
  let e = (0, Cn.c)(5),
    t = n(b),
    r = F(se.chronicleMenuBarIndicatorEnabled),
    i = P(),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, wn.jsx)(Y, {
        id: `settings.chronicle.showIndicatorInMenuBar`,
        defaultMessage: `Show indicator in menu bar`,
        description: `Label for showing the Computer history recording dot beside the app's macOS menu bar icon`,
      })),
      (e[0] = a))
    : (a = e[0]);
  let o;
  return (
    e[1] !== r || e[2] !== i || e[3] !== t
      ? ((o = (0, wn.jsx)(q, {
          className: `select-none`,
          label: a,
          control: (e) =>
            (0, wn.jsx)(B, {
              ...e,
              checked: r,
              disabled: i,
              onChange: (e) => {
                z(t, se.chronicleMenuBarIndicatorEnabled, e).catch(() => {
                  t.get(V).danger(
                    (0, wn.jsx)(Y, {
                      id: `settings.chronicle.showIndicatorInMenuBarError`,
                      defaultMessage: `Computer history indicator visibility could not be updated`,
                      description: `Toast shown when saving the Computer history menu bar indicator visibility preference fails`,
                    }),
                    { errorAnalytics: { toastId: `settings.chronicle.showIndicatorInMenuBarError` } },
                  );
                });
              },
            }),
        })),
        (e[1] = r),
        (e[2] = i),
        (e[3] = t),
        (e[4] = o))
      : (o = e[4]),
    o
  );
}
var Cn, wn;
function Tn() {
  return (Tn = e(() => {
    ((Cn = y()), A(), K(), E(), C(), le(), r(), ie(), ue(), (wn = f()));
  }))();
}
function En() {
  let e = (0, jn.c)(68),
    t = n(b),
    { selectedHostId: r } = Ie(),
    { data: i, isLoading: a } = ne(Pe, r),
    [o, s] = (0, Mn.useState)(!1),
    [c, l] = (0, Mn.useState)(!1),
    [u, d] = (0, Mn.useState)(!1),
    [f, p] = (0, Mn.useState)(!1),
    [m, h] = (0, Mn.useState)(!1),
    [g, _] = (0, Mn.useState)(null),
    v = L.chronicle,
    y = i?.config,
    x;
  e[0] === y ? (x = e[1]) : ((x = fe(y, `chronicle`)), (e[0] = y), (e[1] = x));
  let S = x === !0,
    C;
  e[2] === S ? (C = e[3]) : ((C = { enabled: S }), (e[2] = S), (e[3] = C));
  let { data: w, dataUpdatedAt: T, errorUpdatedAt: E, isError: D } = I(nt, C),
    O = I(rt),
    k = ne(St, r),
    A = ne(yt, r),
    { isLoading: j } = ne(ze, r),
    M = ne(Tt, r),
    N;
  e[4] === r ? (N = e[5]) : ((N = { hostId: r }), (e[4] = r), (e[5] = N));
  let P = Ae(N),
    F = ut(r),
    R = I(Ye),
    z = O.isPending && O.variables?.enabled === !0,
    B = w ?? R.data ?? O.data,
    ee = z || R.isPending || B?.activationState === `starting`,
    te = z || (B?.enabled ?? S),
    re = k && A,
    ie = te && (M || !re),
    ae = D || E > T,
    oe = v == null || a || O.isPending || R.isPending,
    H = oe || !re,
    U;
  v == null
    ? (U = `service-unavailable`)
    : a
      ? (U = `configuration-loading`)
      : k
        ? j
          ? (U = `memory-feature-loading`)
          : A || (U = `memory-feature-unavailable`)
        : (U = `configuration-unavailable`);
  let W;
  e[6] !== S || e[7] !== t || e[8] !== w?.enabled
    ? ((W = () => {
        w?.enabled === !1 && S && (Te(t.queryClient, Be), Te(t.queryClient, [`user-saved-config`]));
      }),
      (e[6] = S),
      (e[7] = t),
      (e[8] = w?.enabled),
      (e[9] = W))
    : (W = e[9]);
  let G = w?.enabled,
    K;
  (e[10] !== S || e[11] !== t || e[12] !== G
    ? ((K = [S, t, G]), (e[10] = S), (e[11] = t), (e[12] = G), (e[13] = K))
    : (K = e[13]),
    (0, Mn.useEffect)(W, K));
  let q;
  e[14] !== t || e[15] !== r || e[16] !== O
    ? ((q = (e) => {
        O.mutate(
          { enabled: e, hostId: r },
          {
            onSuccess: (n) => {
              e &&
                !n.enabled &&
                t
                  .get(V)
                  .danger(
                    (0, $.jsx)(Y, {
                      id: `settings.chronicle.permissionsDeniedToast`,
                      defaultMessage: `Computer history wasn’t turned on because required permissions weren’t granted`,
                      description: `Toast shown when Computer history setup is closed before required permissions are granted`,
                    }),
                    { errorAnalytics: { toastId: `settings.chronicle.permissionsDeniedToast` } },
                  );
            },
            onError: () => {
              t.get(V)[e ? `warning` : `danger`](
                e
                  ? (0, $.jsx)(Y, {
                      id: `settings.chronicle.enableErrorToast`,
                      defaultMessage: `Computer history could not be turned on. Restart ChatGPT, and try again`,
                      description: `Toast shown when Computer history enablement fails, suggesting the user restart ChatGPT`,
                    })
                  : (0, $.jsx)(Y, {
                      id: `settings.chronicle.disableErrorToast`,
                      defaultMessage: `Computer history could not be turned off`,
                      description: `Toast shown when Computer history disablement fails`,
                    }),
                { errorAnalytics: { toastId: `settings.chronicle.disableErrorToast` } },
              );
            },
          },
        );
      }),
      (e[14] = t),
      (e[15] = r),
      (e[16] = O),
      (e[17] = q))
    : (q = e[17]);
  let J = q,
    se;
  e[18] !== R || e[19] !== t
    ? ((se = () => {
        R.mutate(void 0, {
          onError: () => {
            t.get(V).danger(
              (0, $.jsx)(Y, {
                id: `settings.chronicle.retryActivationErrorToast`,
                defaultMessage: `Computer history could not be resumed`,
                description: `Toast shown when retrying Computer history activation fails`,
              }),
              { errorAnalytics: { toastId: `settings.chronicle.retryActivationErrorToast` } },
            );
          },
        });
      }),
      (e[18] = R),
      (e[19] = t),
      (e[20] = se))
    : (se = e[20]);
  let ce = se,
    le;
  e[21] !== M || e[22] !== J
    ? ((le = () => {
        M ? J(!0) : l(!0);
      }),
      (e[21] = M),
      (e[22] = J),
      (e[23] = le))
    : (le = e[23]);
  let ue = le,
    de;
  e[24] !== ce || e[25] !== t || e[26] !== r || e[27] !== J || e[28] !== P || e[29] !== F
    ? ((de = async () => {
        v != null &&
          (d(!0),
          await (async () => {
            try {
              let e = await At({
                enableMemories: () =>
                  vt(t, {
                    hostId: r,
                    setMemoryFeatureEnabled: () => P.mutateAsync({ featureName: _e, enabled: !0 }),
                    writeMemoryConfig: (e) => F.mutateAsync({ edits: e }),
                  }),
                getChronicleState: () => v.getState(),
              });
              l(!1);
              bb156: switch (e) {
                case `already_active`:
                  break bb156;
                case `enable_required`:
                  J(!0);
                  break bb156;
                case `retry_required`:
                  ce();
              }
            } catch {
              t.get(V).danger(
                (0, $.jsx)(Y, {
                  id: `settings.chronicle.enableMemoriesErrorToast`,
                  defaultMessage: `Memories could not be turned on`,
                  description: `Toast shown when enabling Memories for Computer history fails`,
                }),
                { errorAnalytics: { toastId: `settings.chronicle.enableMemoriesErrorToast` } },
              );
            }
          })().finally(() => {
            d(!1);
          }));
      }),
      (e[24] = ce),
      (e[25] = t),
      (e[26] = r),
      (e[27] = J),
      (e[28] = P),
      (e[29] = F),
      (e[30] = de))
    : (de = e[30]);
  let pe = de,
    me;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, $.jsx)(be, { slug: `chronicle` })), (e[31] = me))
    : (me = e[31]);
  let he;
  e[32] !== ee ||
  e[33] !== oe ||
  e[34] !== B ||
  e[35] !== ae ||
  e[36] !== H ||
  e[37] !== U ||
  e[38] !== ce ||
  e[39] !== t ||
  e[40] !== J ||
  e[41] !== ie
    ? ((he = ie
        ? (0, $.jsx)(Dn, {
            activationInProgress: ee,
            currentState: B,
            isServiceUnavailable: ae,
            onClearRequest: _,
            onOpenPermissions: () => {
              (t.query.invalidate($e), p(!0));
            },
            onRetryActivation: ce,
            onToggle: J,
            toggleDisabled: oe,
          })
        : (0, $.jsx)(Bt, { disabled: H, disabledReason: U, onTurnOn: () => s(!0) })),
      (e[32] = ee),
      (e[33] = oe),
      (e[34] = B),
      (e[35] = ae),
      (e[36] = H),
      (e[37] = U),
      (e[38] = ce),
      (e[39] = t),
      (e[40] = J),
      (e[41] = ie),
      (e[42] = he))
    : (he = e[42]);
  let ge;
  e[43] === ue
    ? (ge = e[44])
    : ((ge = () => {
        (s(!1), ue());
      }),
      (e[43] = ue),
      (e[44] = ge));
  let ve;
  e[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = () => {
        (s(!1), h(!0), p(!0));
      }),
      (e[45] = ve))
    : (ve = e[45]);
  let ye;
  e[46] !== o || e[47] !== ge
    ? ((ye = (0, $.jsx)(Nt, { open: o, onOpenChange: s, onAllowAllApps: ge, onCustomizeApps: ve })),
      (e[46] = o),
      (e[47] = ge),
      (e[48] = ye))
    : (ye = e[48]);
  let xe;
  e[49] === pe
    ? (xe = e[50])
    : ((xe = () => {
        pe();
      }),
      (e[49] = pe),
      (e[50] = xe));
  let Se;
  e[51] !== c || e[52] !== u || e[53] !== xe
    ? ((Se = (0, $.jsx)(Mt, { open: c, isPending: u, onOpenChange: l, onTurnOn: xe })),
      (e[51] = c),
      (e[52] = u),
      (e[53] = xe),
      (e[54] = Se))
    : (Se = e[54]);
  let we;
  e[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((we = (e) => {
        (p(e), e || h(!1));
      }),
      (e[55] = we))
    : (we = e[55]);
  let Ee = m ? ue : void 0,
    De;
  e[56] !== f || e[57] !== Ee
    ? ((De = (0, $.jsx)(Ot, { open: f, onOpenChange: we, onSaved: Ee })),
      (e[56] = f),
      (e[57] = Ee),
      (e[58] = De))
    : (De = e[58]);
  let Oe;
  e[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (e) => {
        e || _(null);
      }),
      (e[59] = Oe))
    : (Oe = e[59]);
  let ke;
  e[60] === g
    ? (ke = e[61])
    : ((ke = (0, $.jsx)(kn, { request: g, onOpenChange: Oe })), (e[60] = g), (e[61] = ke));
  let je;
  return (
    e[62] !== he || e[63] !== ye || e[64] !== Se || e[65] !== De || e[66] !== ke
      ? ((je = (0, $.jsxs)(Ce, { title: me, children: [he, ye, Se, De, ke] })),
        (e[62] = he),
        (e[63] = ye),
        (e[64] = Se),
        (e[65] = De),
        (e[66] = ke),
        (e[67] = je))
      : (je = e[67]),
    je
  );
}
function Dn(e) {
  let r = (0, jn.c)(46),
    {
      activationInProgress: i,
      currentState: a,
      isServiceUnavailable: o,
      onClearRequest: s,
      onOpenPermissions: c,
      onRetryActivation: l,
      onToggle: u,
      toggleDisabled: d,
    } = e,
    f = n(b),
    p = ae(),
    { data: m } = I($e),
    h;
  r[0] === m ? (h = r[1]) : ((h = m == null ? null : Qe(m)), (r[0] = m), (r[1] = h));
  let g = h,
    _ = (g?.applicationBundleIdentifiers.length ?? 0) + (g?.urlDomains.length ?? 0),
    v = I(et),
    y =
      a?.activationState === `waiting_for_permissions` ||
      (a?.recorderState === `stopped` && a.activationState === `idle`),
    x = o || a?.activationState === `failed`,
    S = i || y || x,
    C = d || v.isPending,
    w;
  r[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = (0, $.jsx)(bt, {})), (r[2] = w)) : (w = r[2]);
  let T;
  r[3] === x
    ? (T = r[4])
    : ((T = x
        ? (0, $.jsx)(Y, {
            id: `settings.chronicle.unavailableWithLearnMore`,
            defaultMessage: `Computer history is temporarily unavailable. <learnMore>Learn more</learnMore>`,
            description: `Status shown when Codex cannot connect to Computer history, followed by a learn-more link`,
            values: { learnMore: On },
          })
        : (0, $.jsx)(Et, {})),
      (r[3] = x),
      (r[4] = T));
  let E;
  r[5] !== i ||
  r[6] !== y ||
  r[7] !== C ||
  r[8] !== a?.recorderState ||
  r[9] !== l ||
  r[10] !== v ||
  r[11] !== f ||
  r[12] !== S ||
  r[13] !== d
    ? ((E = S
        ? (0, $.jsx)(D, {
            color: `secondary`,
            radius: `large`,
            disabled: C,
            loading: i,
            onClick: l,
            children: i
              ? (0, $.jsx)(Y, {
                  id: `settings.chronicle.activationInProgress`,
                  defaultMessage: `Resume`,
                  description: `Computer history action shown while activation is already in progress`,
                })
              : y
                ? (0, $.jsx)(Y, {
                    id: `settings.chronicle.finishSetup`,
                    defaultMessage: `Finish setup`,
                    description: `Retry Computer history startup while waiting for permissions`,
                  })
                : (0, $.jsx)(Y, {
                    id: `settings.chronicle.tryAgain`,
                    defaultMessage: `Try again`,
                    description: `Retry Computer history startup after a failure`,
                  }),
          })
        : a?.recorderState === `running` || a?.recorderState === `paused`
          ? (0, $.jsx)(D, {
              color: `secondary`,
              radius: `large`,
              disabled: d,
              loading: v.isPending,
              onClick: () =>
                v.mutate(a?.recorderState, {
                  onError: () => {
                    f.get(V).danger(
                      (0, $.jsx)(Y, {
                        id: `settings.chronicle.pauseResumeErrorToast`,
                        defaultMessage: `Computer history could not be paused or resumed`,
                        description: `Toast shown when pausing or resuming Computer history fails`,
                      }),
                      { errorAnalytics: { toastId: `settings.chronicle.pauseResumeErrorToast` } },
                    );
                  },
                }),
              children:
                a?.recorderState === `paused`
                  ? (0, $.jsx)(Y, {
                      id: `settings.chronicle.resume`,
                      defaultMessage: `Resume`,
                      description: `Resume Computer history button`,
                    })
                  : (0, $.jsx)(Y, {
                      id: `settings.chronicle.pause`,
                      defaultMessage: `Pause`,
                      description: `Pause Computer history button`,
                    }),
            })
          : null),
      (r[5] = i),
      (r[6] = y),
      (r[7] = C),
      (r[8] = a?.recorderState),
      (r[9] = l),
      (r[10] = v),
      (r[11] = f),
      (r[12] = S),
      (r[13] = d),
      (r[14] = E))
    : (E = r[14]);
  let O;
  r[15] === p
    ? (O = r[16])
    : ((O = p.formatMessage({
        id: `settings.chronicle.turnOffAriaLabel`,
        defaultMessage: `Turn off Computer history`,
        description: `Accessible label for the Computer history toggle`,
      })),
      (r[15] = p),
      (r[16] = O));
  let k;
  r[17] !== C || r[18] !== u || r[19] !== O
    ? ((k = (0, $.jsx)(B, { checked: !0, disabled: C, ariaLabel: O, onChange: u })),
      (r[17] = C),
      (r[18] = u),
      (r[19] = O),
      (r[20] = k))
    : (k = r[20]);
  let A;
  r[21] !== E || r[22] !== k
    ? ((A = (0, $.jsxs)(`div`, { className: `flex items-center gap-3`, children: [E, k] })),
      (r[21] = E),
      (r[22] = k),
      (r[23] = A))
    : (A = r[23]);
  let j;
  r[24] !== T || r[25] !== A
    ? ((j = (0, $.jsx)(q, { label: w, description: T, control: A })), (r[24] = T), (r[25] = A), (r[26] = j))
    : (j = r[26]);
  let M;
  r[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((M = (0, $.jsx)(Sn, {})), (r[27] = M)) : (M = r[27]);
  let N, P;
  r[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, $.jsx)(kt, {})), (P = (0, $.jsx)(xt, {})), (r[28] = N), (r[29] = P))
    : ((N = r[28]), (P = r[29]));
  let F;
  r[30] === _
    ? (F = r[31])
    : ((F =
        _ === 0
          ? (0, $.jsx)(Y, {
              id: `settings.chronicle.permissions.choose`,
              defaultMessage: `Choose`,
              description: `Choose Computer history permissions button`,
            })
          : (0, $.jsx)(Y, {
              id: `settings.chronicle.permissions.selectedCount`,
              defaultMessage: `{count} selected`,
              description: `Number of selected Computer history permission entries`,
              values: { count: _ },
            })),
      (r[30] = _),
      (r[31] = F));
  let L;
  r[32] !== o || r[33] !== c || r[34] !== F
    ? ((L = (0, $.jsx)(q, {
        label: N,
        description: P,
        control: (0, $.jsx)(D, {
          color: `secondary`,
          size: `toolbar`,
          radius: `large`,
          disabled: o,
          onClick: c,
          children: F,
        }),
      })),
      (r[32] = o),
      (r[33] = c),
      (r[34] = F),
      (r[35] = L))
    : (L = r[35]);
  let R;
  r[36] !== L || r[37] !== j
    ? ((R = (0, $.jsx)(Le, {
        children: (0, $.jsx)(Le.Content, { children: (0, $.jsxs)(t, { children: [j, M, L] }) }),
      })),
      (r[36] = L),
      (r[37] = j),
      (r[38] = R))
    : (R = r[38]);
  let z;
  r[39] !== o || r[40] !== s || r[41] !== m
    ? ((z = (0, $.jsx)(an, { isServiceUnavailable: o, onClearRequest: s, settings: m })),
      (r[39] = o),
      (r[40] = s),
      (r[41] = m),
      (r[42] = z))
    : (z = r[42]);
  let ee;
  return (
    r[43] !== R || r[44] !== z
      ? ((ee = (0, $.jsxs)(`div`, { className: `flex flex-col gap-8`, children: [R, z] })),
        (r[43] = R),
        (r[44] = z),
        (r[45] = ee))
      : (ee = r[45]),
    ee
  );
}
function On(e) {
  return (0, $.jsx)(jt, { children: Mn.Children.toArray(e) }, `computer-history-unavailable-learn-more`);
}
function kn(e) {
  let t = (0, jn.c)(32),
    { onOpenChange: r, request: i } = e,
    a = n(b),
    o = I(Ze),
    s = i != null,
    l;
  t[0] !== o || t[1] !== r || t[2] !== i || t[3] !== a
    ? ((l = (e) => {
        (e.preventDefault(),
          i != null &&
            !o.isPending &&
            o.mutate(i, {
              onSuccess: () => r(!1),
              onError: () => {
                a.get(V).danger(
                  (0, $.jsx)(Y, {
                    id: `settings.chronicle.history.clearErrorToast`,
                    defaultMessage: `Computer history could not be cleared`,
                    description: `Toast shown when clearing Computer history fails`,
                  }),
                  { errorAnalytics: { toastId: `settings.chronicle.history.clearErrorToast` } },
                );
              },
            }));
      }),
      (t[0] = o),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(oe, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(Y, {
            id: `settings.chronicle.history.clearDialogAccessibleTitle`,
            defaultMessage: `Clear computer history`,
            description: `Accessible title for clear Computer history dialog`,
          }),
        }),
      })),
      (t[5] = u))
    : (u = t[5]);
  let d = i?.scope,
    f;
  t[6] === d ? (f = t[7]) : ((f = (0, $.jsx)(An, { scope: d })), (t[6] = d), (t[7] = f));
  let m;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, $.jsx)(Y, {
        id: `settings.chronicle.history.clearDialogDescription`,
        defaultMessage: `Your actions and any memories created from them will be deleted. This cannot be undone.`,
        description: `Clear Computer history confirmation description`,
      })),
      (t[8] = m))
    : (m = t[8]);
  let h;
  t[9] === f
    ? (h = t[10])
    : ((h = (0, $.jsxs)(me, { children: [u, (0, $.jsx)(x, { title: f, subtitle: m })] })),
      (t[9] = f),
      (t[10] = h));
  let g;
  t[11] === r ? (g = t[12]) : ((g = () => r(!1)), (t[11] = r), (t[12] = g));
  let _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, $.jsx)(Y, {
        id: `settings.chronicle.history.clearCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel clearing Computer history`,
      })),
      (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] === g
    ? (v = t[15])
    : ((v = (0, $.jsx)(D, { color: `ghost`, type: `button`, onClick: g, children: _ })),
      (t[14] = g),
      (t[15] = v));
  let y;
  t[16] === i?.scope
    ? (y = t[17])
    : ((y =
        i?.scope === `interval`
          ? (0, $.jsx)(Y, {
              id: `settings.chronicle.history.deleteConfirm`,
              defaultMessage: `Delete`,
              description: `Confirm deleting a Computer history item`,
            })
          : (0, $.jsx)(Y, {
              id: `settings.chronicle.history.clearConfirm`,
              defaultMessage: `Clear`,
              description: `Confirm clearing Computer history`,
            })),
      (t[16] = i?.scope),
      (t[17] = y));
  let S;
  t[18] !== o.isPending || t[19] !== y
    ? ((S = (0, $.jsx)(D, { color: `danger`, loading: o.isPending, type: `submit`, children: y })),
      (t[18] = o.isPending),
      (t[19] = y),
      (t[20] = S))
    : (S = t[20]);
  let C;
  t[21] !== v || t[22] !== S
    ? ((C = (0, $.jsx)(me, { children: (0, $.jsxs)(p, { children: [v, S] }) })),
      (t[21] = v),
      (t[22] = S),
      (t[23] = C))
    : (C = t[23]);
  let T;
  t[24] !== C || t[25] !== l || t[26] !== h
    ? ((T = (0, $.jsxs)(c, { as: `form`, onSubmit: l, children: [h, C] })),
      (t[24] = C),
      (t[25] = l),
      (t[26] = h),
      (t[27] = T))
    : (T = t[27]);
  let E;
  return (
    t[28] !== r || t[29] !== s || t[30] !== T
      ? ((E = (0, $.jsx)(w, { open: s, onOpenChange: r, showDialogClose: !0, children: T })),
        (t[28] = r),
        (t[29] = s),
        (t[30] = T),
        (t[31] = E))
      : (E = t[31]),
    E
  );
}
function An(e) {
  let t = (0, jn.c)(6),
    { scope: n } = e;
  switch (n) {
    case `application_session`:
    case `interval`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(Y, {
              id: `settings.chronicle.history.deleteItemTitle`,
              defaultMessage: `Delete this history item?`,
              description: `Delete Computer history item confirmation title`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `last_ten_minutes`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(Y, {
              id: `settings.chronicle.history.clearTenMinutesTitle`,
              defaultMessage: `Clear the last 10 minutes?`,
              description: `Clear recent Computer history confirmation title`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `last_hour`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(Y, {
              id: `settings.chronicle.history.clearHourTitle`,
              defaultMessage: `Clear the last hour?`,
              description: `Clear recent Computer history confirmation title`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `last_day`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(Y, {
              id: `settings.chronicle.history.clearDayTitle`,
              defaultMessage: `Clear the last day?`,
              description: `Clear recent Computer history confirmation title`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `all`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(Y, {
              id: `settings.chronicle.history.clearAllTitle`,
              defaultMessage: `Clear all history?`,
              description: `Clear all Computer history confirmation title`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case void 0: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)($.Fragment, {})), (t[5] = e))
          : (e = t[5]),
        e
      );
    }
  }
}
var jn, Mn, $;
function Nn() {
  return (Nn = e(() => {
    ((jn = y()),
      A(),
      K(),
      (Mn = o()),
      E(),
      k(),
      l(),
      s(),
      C(),
      le(),
      lt(),
      xe(),
      ye(),
      Ue(),
      He(),
      j(),
      r(),
      Me(),
      je(),
      Ne(),
      ue(),
      we(),
      N(),
      Ft(),
      qt(),
      mt(),
      xn(),
      Tn(),
      dt(),
      ft(),
      Ct(),
      _t(),
      Je(),
      ($ = f()));
  }))();
}
Nn();
export { En as ComputerHistorySettingsPage };
//# sourceMappingURL=chronicle-settings-page-68052b64895a.js.map
