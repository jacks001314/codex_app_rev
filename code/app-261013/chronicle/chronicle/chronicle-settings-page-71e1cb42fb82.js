import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $nt as n,
  ADt as r,
  AO as i,
  Abt as a,
  CO as o,
  Cot as s,
  D0 as c,
  DD as l,
  ED as u,
  IDt as d,
  Ixt as f,
  JC as p,
  JR as m,
  Kat as h,
  LT as g,
  MO as _,
  Mz as v,
  Nz as y,
  O0 as b,
  Pxt as x,
  RT as S,
  TO as C,
  Tk as w,
  VDt as T,
  Vxt as E,
  Wnt as D,
  YR as O,
  Zct as k,
  _Mt as A,
  _O as j,
  avt as M,
  cO as N,
  cz as P,
  ert as F,
  fO as I,
  gMt as L,
  hot as R,
  hz as z,
  iw as B,
  jDt as V,
  jO as ee,
  kDt as H,
  lO as te,
  lot as ne,
  mO as re,
  mz as ie,
  oO as U,
  qC as ae,
  qat as oe,
  qnt as W,
  rst as G,
  sO as K,
  sz as se,
  t3 as q,
  tw as J,
  vO as ce,
  vzt as Y,
  wk as le,
  wot as ue,
  xMt as de,
  xbt as fe,
  yzt as pe,
  zxt as me,
} from "./app-shared-bbfeca5e5737.js";
import {
  BPr as he,
  BYt as ge,
  Brt as _e,
  Ek as ve,
  Es as ye,
  GPr as be,
  Ggr as xe,
  IYt as Se,
  LPr as Ce,
  QP as we,
  RPr as Te,
  Rrt as Ee,
  Tk as De,
  Ts as Oe,
  UPr as ke,
  US as Ae,
  VPr as je,
  WS as Me,
  _F as Ne,
  _Vt as Pe,
  dxt as Fe,
  eF as Ie,
  hF as Le,
  lxt as Re,
  qPr as ze,
  tF as Be,
  t_r as Ve,
  yVt as He,
  zPr as Ue,
} from "./app-initial-5851df3f6cb1.js";
import { fm as We, pm as Ge } from "./app-primary-fe8a450b3b04.js";
import { n as Ke, t as qe } from "./color-icon-d7fde048c9aa.js";
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
} from "./chronicle-service-queries-fa2c40e5d4fe.js";
import { a as it, n as at } from "./computer-history-query-30a12dff18c6.js";
import { n as ot, r as st, t as ct } from "./computer-history-suggestion-prompt-64e6bcbf5cac.js";
import { o as lt, s as ut } from "./memory-settings-analytics-a53949a1e312.js";
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
} from "./chronicle-permissions-dialog-606ef439299b.js";
function Nt(e) {
  let n = (0, Pt.c)(25),
    { open: r, onOpenChange: i, onAllowAllApps: a, onCustomizeApps: o } = e,
    s;
  n[0] === o
    ? (s = n[1])
    : ((s = (e) => {
        (e.preventDefault(), o());
      }),
      (n[0] = o),
      (n[1] = s));
  let c;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(te, {
        children: (0, X.jsx)(N, {
          title: (0, X.jsx)(j, {
            asChild: !0,
            children: (0, X.jsx)(`h2`, {
              children: (0, X.jsx)(d, {
                id: `settings.chronicle.consent.title`,
                defaultMessage: `You're in control.`,
                description: `Title of the Computer history privacy confirmation dialog`,
              }),
            }),
          }),
        }),
      })),
      (n[2] = c))
    : (c = n[2]);
  let l;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, X.jsxs)(`li`, {
        className: `flex items-start gap-3`,
        children: [
          (0, X.jsx)(qe, { className: `size-6 shrink-0`, name: `book-open` }),
          (0, X.jsx)(`span`, {
            children: (0, X.jsx)(d, {
              id: `settings.chronicle.consent.controls`,
              defaultMessage: `You can pause or clear your history and manage which apps are included at any time.`,
              description: `Computer history privacy confirmation explaining that users can pause or clear their history and manage which applications are included`,
            }),
          }),
        ],
      })),
      (n[3] = l))
    : (l = n[3]);
  let u;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsxs)(`li`, {
        className: `flex items-start gap-3`,
        children: [
          (0, X.jsx)(qe, { className: `size-6 shrink-0`, name: `heart-text-clipboard` }),
          (0, X.jsx)(`span`, {
            children: (0, X.jsx)(d, {
              id: `settings.chronicle.consent.sensitiveApps`,
              defaultMessage: `Consider pausing or excluding sensitive apps, such as health or finance, from your history.`,
              description: `Computer history privacy confirmation advising users to pause recording or exclude sensitive health and finance applications`,
            }),
          }),
        ],
      })),
      (n[4] = u))
    : (u = n[4]);
  let f;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(te, {
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
                  children: (0, X.jsx)(d, {
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
      (n[5] = f))
    : (f = n[5]);
  let p;
  n[6] === i ? (p = n[7]) : ((p = () => i(!1)), (n[6] = i), (n[7] = p));
  let m;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(d, {
        id: `settings.chronicle.consent.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel turning on Computer history from the privacy confirmation dialog`,
      })),
      (n[8] = m))
    : (m = n[8]);
  let h;
  n[9] === p
    ? (h = n[10])
    : ((h = (0, X.jsx)(t, { color: `ghost`, type: `button`, onClick: p, children: m })),
      (n[9] = p),
      (n[10] = h));
  let g;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(d, {
        id: `settings.chronicle.consent.allowAllApps`,
        defaultMessage: `Allow all apps`,
        description: `Accept the Computer history privacy confirmation and turn on recording without customizing application permissions`,
      })),
      (n[11] = g))
    : (g = n[11]);
  let _;
  n[12] === a
    ? (_ = n[13])
    : ((_ = (0, X.jsx)(t, { color: `ghost`, type: `button`, onClick: a, children: g })),
      (n[12] = a),
      (n[13] = _));
  let v;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsx)(t, {
        color: `primary`,
        type: `submit`,
        children: (0, X.jsx)(d, {
          id: `settings.chronicle.consent.customizeApps`,
          defaultMessage: `Customize apps`,
          description: `Accept the Computer history privacy confirmation and customize which applications can be recorded`,
        }),
      })),
      (n[14] = v))
    : (v = n[14]);
  let y;
  n[15] !== _ || n[16] !== h
    ? ((y = (0, X.jsx)(te, { children: (0, X.jsxs)(K, { children: [h, _, v] }) })),
      (n[15] = _),
      (n[16] = h),
      (n[17] = y))
    : (y = n[17]);
  let b;
  n[18] !== s || n[19] !== y
    ? ((b = (0, X.jsxs)(U, { as: `form`, className: `gap-1`, onSubmit: s, children: [c, f, y] })),
      (n[18] = s),
      (n[19] = y),
      (n[20] = b))
    : (b = n[20]);
  let x;
  return (
    n[21] !== i || n[22] !== r || n[23] !== b
      ? ((x = (0, X.jsx)(re, { open: r, onOpenChange: i, showDialogClose: !1, children: b })),
        (n[21] = i),
        (n[22] = r),
        (n[23] = b),
        (n[24] = x))
      : (x = n[24]),
    x
  );
}
var Pt, X;
function Ft() {
  return (Ft = e(() => {
    ((Pt = Y()), V(), Ke(), q(), ce(), I(), (X = de()));
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
    o = T(),
    s = O(),
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
  let f;
  (n[2] !== c || n[3] !== s ? ((f = [c, s]), (n[2] = c), (n[3] = s), (n[4] = f)) : (f = n[4]),
    (0, Wt.useEffect)(u, f));
  let p = Gt[c] ?? Gt[0],
    m = `link` in p ? p.link : null,
    h;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (e) => {
        l((t) => (t + e + Gt.length) % Gt.length);
      }),
      (n[5] = h))
    : (h = n[5]);
  let g = h,
    _,
    v,
    y,
    b,
    x,
    S,
    C,
    w,
    E,
    D,
    k,
    A,
    j,
    M,
    N;
  if (
    n[6] !== r ||
    n[7] !== i ||
    n[8] !== p.assistant ||
    n[9] !== p.key ||
    n[10] !== p.user ||
    n[11] !== c ||
    n[12] !== m ||
    n[13] !== o ||
    n[14] !== a
  ) {
    let e = o.formatMessage(p.assistant),
      s = Ht(e, o.locale);
    ((E = `flex flex-col`), (_ = ae), (C = `grid min-h-[340px] grid-cols-2 max-md:grid-cols-1`));
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
    let f = i == null,
      h;
    n[32] === i
      ? (h = n[33])
      : ((h = i == null ? null : (0, Z.jsx)(d, { ...Kt[i] })), (n[32] = i), (n[33] = h));
    let g =
        i != null &&
        `cursor-not-allowed rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
      T;
    n[34] === g ? (T = n[35]) : ((T = L(`inline-flex`, g)), (n[34] = g), (n[35] = T));
    let O = i == null ? void 0 : 0,
      P;
    n[36] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((P = (0, Z.jsx)(d, {
          id: `settings.chronicle.turnOn`,
          defaultMessage: `Turn on`,
          description: `Button to enable Computer history`,
        })),
        (n[36] = P))
      : (P = n[36]);
    let F;
    n[37] !== r || n[38] !== a
      ? ((F = (0, Z.jsx)(t, {
          className: `mt-4 !h-[30px] !border-transparent !px-3 !py-0 !text-sm !leading-[18px] !font-medium`,
          color: `primary`,
          size: `medium`,
          disabled: r,
          onClick: a,
          children: P,
        })),
        (n[37] = r),
        (n[38] = a),
        (n[39] = F))
      : (F = n[39]);
    let I;
    (n[40] !== T || n[41] !== O || n[42] !== F
      ? ((I = (0, Z.jsx)(`span`, { className: T, tabIndex: O, children: F })),
        (n[40] = T),
        (n[41] = O),
        (n[42] = F),
        (n[43] = I))
      : (I = n[43]),
      n[44] !== f || n[45] !== h || n[46] !== I
        ? ((w = (0, Z.jsxs)(`div`, {
            className: `flex min-w-0 flex-col items-start justify-center px-9 py-[30px] text-start`,
            children: [l, u, (0, Z.jsx)(se, { disabled: f, tooltipContent: h, children: I })],
          })),
          (n[44] = f),
          (n[45] = h),
          (n[46] = I),
          (n[47] = w))
        : (w = n[47]),
      (x = `relative min-h-[340px] overflow-hidden`),
      n[48] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((S = (0, Z.jsx)(`img`, {
            "aria-hidden": `true`,
            className: `absolute inset-0 size-full object-cover object-[center_44%]`,
            src: Ae,
            alt: ``,
          })),
          (n[48] = S))
        : (S = n[48]),
      (b = `group/example absolute inset-5 flex min-h-0 [scrollbar-width:none] flex-col overflow-y-auto rounded-xl border border-default bg-surface/95 p-5 pb-12 text-sm leading-5 text-default [&::-webkit-scrollbar]:hidden`),
      (N = c),
      (v = `flex flex-1 flex-col`));
    let R;
    (n[49] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((R = L(
          Rt.exampleUser,
          `ms-auto bg-text/5 max-w-[77%] min-w-0 overflow-hidden break-words rounded-2xl px-3 py-2`,
        )),
        (n[49] = R))
      : (R = n[49]),
      n[50] === p.user
        ? (y = n[51])
        : ((y = (0, Z.jsx)(`p`, { className: R, children: (0, Z.jsx)(d, { ...p.user }) })),
          (n[50] = p.user),
          (n[51] = y)),
      (j = `mt-4`));
    let z;
    (n[52] === m
      ? (z = n[53])
      : ((z = m == null ? null : (0, Z.jsxs)(Z.Fragment, { children: [` `, (0, Z.jsx)(d, { ...m })] })),
        (n[52] = m),
        (n[53] = z)),
      (M = (0, Z.jsxs)(`span`, { className: `sr-only`, children: [e, z] })),
      (D = `true`));
    let B;
    (n[54] === p.key
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
            `${p.key}-${t}`,
          )),
        (n[54] = p.key),
        (n[55] = B)),
      (k = s.map(B)),
      (A =
        m == null
          ? null
          : (0, Z.jsxs)(Z.Fragment, {
              children: [
                ` `,
                (0, Z.jsx)(`span`, {
                  className: L(Rt.exampleWord, `text-info`),
                  style: {
                    animationDelay: `calc(var(--transition-duration-relaxed) + var(--transition-duration-basic) + ${(s.at(-1)?.wordIndex ?? 0) + 1} * var(--transition-duration-basic) / 2)`,
                  },
                  children: (0, Z.jsx)(d, { ...m }),
                }),
              ],
            })),
      (n[6] = r),
      (n[7] = i),
      (n[8] = p.assistant),
      (n[9] = p.key),
      (n[10] = p.user),
      (n[11] = c),
      (n[12] = m),
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
      (n[24] = D),
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
      (D = n[24]),
      (k = n[25]),
      (A = n[26]),
      (j = n[27]),
      (M = n[28]),
      (N = n[29]));
  let P;
  n[56] !== D || n[57] !== k || n[58] !== A
    ? ((P = (0, Z.jsxs)(`span`, { "aria-hidden": D, children: [k, A] })),
      (n[56] = D),
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
  let R;
  n[69] === o
    ? (R = n[70])
    : ((R = o.formatMessage({
        id: `settings.chronicle.off.example.previous`,
        defaultMessage: `Previous example`,
        description: `Previous Computer history example button`,
      })),
      (n[69] = o),
      (n[70] = R));
  let z, B;
  n[71] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = () => g(-1)), (B = (0, Z.jsx)(Oe, { className: `!size-[15px]` })), (n[71] = z), (n[72] = B))
    : ((z = n[71]), (B = n[72]));
  let V;
  n[73] === R
    ? (V = n[74])
    : ((V = (0, Z.jsx)(t, {
        "aria-label": R,
        color: `secondary`,
        size: `medium`,
        uniform: !0,
        className: `!size-[26px] !p-0`,
        onClick: z,
        children: B,
      })),
      (n[73] = R),
      (n[74] = V));
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
  let H, te;
  n[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = () => g(1)),
      (te = (0, Z.jsx)(Oe, { className: `!size-[15px] -scale-x-100 transform` })),
      (n[77] = H),
      (n[78] = te))
    : ((H = n[77]), (te = n[78]));
  let ne;
  n[79] === ee
    ? (ne = n[80])
    : ((ne = (0, Z.jsx)(t, {
        "aria-label": ee,
        color: `secondary`,
        size: `medium`,
        uniform: !0,
        className: `!size-[26px] !p-0`,
        onClick: H,
        children: te,
      })),
      (n[79] = ee),
      (n[80] = ne));
  let re;
  n[81] !== V || n[82] !== ne
    ? ((re = (0, Z.jsxs)(`div`, {
        className: `absolute right-3 bottom-3 flex gap-1 opacity-0 transition-opacity duration-basic group-focus-within/example:opacity-100 group-hover/example:opacity-100 motion-reduce:transition-none`,
        children: [V, ne],
      })),
      (n[81] = V),
      (n[82] = ne),
      (n[83] = re))
    : (re = n[83]);
  let ie;
  n[84] !== b || n[85] !== I || n[86] !== re
    ? ((ie = (0, Z.jsxs)(`div`, { className: b, children: [I, re] })),
      (n[84] = b),
      (n[85] = I),
      (n[86] = re),
      (n[87] = ie))
    : (ie = n[87]);
  let U;
  n[88] !== c || n[89] !== o
    ? ((U = o.formatMessage(
        {
          id: `settings.chronicle.off.example.position`,
          defaultMessage: `Example {current} of {total}`,
          description: `Computer history example carousel position`,
        },
        { current: c + 1, total: Gt.length },
      )),
      (n[88] = c),
      (n[89] = o),
      (n[90] = U))
    : (U = n[90]);
  let oe;
  n[91] === c
    ? (oe = n[92])
    : ((oe = Gt.map((e, t) =>
        (0, Z.jsx)(
          `span`,
          { className: L(`size-1 rounded-full bg-surface`, t !== c && `opacity-50`) },
          e.key,
        ),
      )),
      (n[91] = c),
      (n[92] = oe));
  let W;
  n[93] !== U || n[94] !== oe
    ? ((W = (0, Z.jsx)(`div`, {
        className: `absolute bottom-[9px] left-1/2 flex -translate-x-1/2 items-center gap-[5px]`,
        children: (0, Z.jsx)(`div`, { className: `contents`, "aria-label": U, role: `status`, children: oe }),
      })),
      (n[93] = U),
      (n[94] = oe),
      (n[95] = W))
    : (W = n[95]);
  let G;
  n[96] !== x || n[97] !== S || n[98] !== ie || n[99] !== W
    ? ((G = (0, Z.jsxs)(`div`, { className: x, children: [S, ie, W] })),
      (n[96] = x),
      (n[97] = S),
      (n[98] = ie),
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
    ((Ut = Y()),
      A(),
      (Wt = pe()),
      V(),
      Me(),
      q(),
      P(),
      m(),
      ye(),
      p(),
      _t(),
      zt(),
      (Z = de()),
      (Gt = [
        {
          key: `follow-up`,
          user: H({
            id: `settings.chronicle.off.example.followUp.user`,
            defaultMessage: `What did I promise to send Sarah after yesterday’s meeting?`,
            description: `Example Computer history question about a follow-up`,
          }),
          assistant: H({
            id: `settings.chronicle.off.example.followUp.assistant`,
            defaultMessage: `You told Sarah in Slack you’d send the Q3 budget by Friday. The latest version is in Google Sheets, and your meeting notes in Google Docs list two numbers to confirm: hiring and travel.`,
            description: `Example Computer history answer about a follow-up`,
          }),
        },
        {
          key: `before-lunch`,
          user: H({
            id: `settings.chronicle.off.example.beforeLunch.user`,
            defaultMessage: `What was I working on before lunch?`,
            description: `Example Computer history question about resuming earlier work`,
          }),
          assistant: H({
            id: `settings.chronicle.off.example.beforeLunch.assistant`,
            defaultMessage: `You were revising the launch presentation in Google Slides, checking campaign numbers in Google Sheets, and reviewing feedback from Maya in Slack. You left off updating the rollout timeline.`,
            description: `Example Computer history answer about resuming earlier work`,
          }),
        },
        {
          key: `planning-document`,
          user: H({
            id: `settings.chronicle.off.example.planningDocument.user`,
            defaultMessage: `What was that planning document I was looking at today?`,
            description: `Example Computer history question about finding a planning document`,
          }),
          assistant: H({
            id: `settings.chronicle.off.example.planningDocument.assistant`,
            defaultMessage: `You were reviewing the Q4 launch plan in Google Docs this morning. Here’s the document:`,
            description: `Example Computer history answer about finding a planning document`,
          }),
          link: H({
            id: `settings.chronicle.off.example.planningDocument.link`,
            defaultMessage: `Q4 Launch Planning`,
            description: `Example planning document title shown in a Computer history answer`,
          }),
        },
        {
          key: `remodel`,
          user: H({
            id: `settings.chronicle.off.example.remodel.user`,
            defaultMessage: `Where was I on the home remodel?`,
            description: `Example Computer history question about a home project`,
          }),
          assistant: H({
            id: `settings.chronicle.off.example.remodel.assistant`,
            defaultMessage: `You narrowed the backsplash to two options in Chrome, compared quotes in Google Sheets, and saved the contractor’s revised estimate in Google Drive. The next decision is white subway tile or blue zellige.`,
            description: `Example Computer history answer about a home project`,
          }),
        },
      ]),
      (Kt = r({
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
  let n = (0, vn.c)(49),
    { currentTimeMs: r, isServiceUnavailable: i, onClearRequest: a, settings: o } = e,
    c = f(s),
    l = T(),
    { data: u, isError: p, isLoading: m, refetch: h } = E(at),
    _ = E(Xe),
    y = E(Ze),
    [b, x] = (0, yn.useState)(null),
    [S, C] = (0, yn.useState)(null),
    [w] = (0, yn.useState)(Date.now),
    D = (0, yn.useRef)(null),
    O,
    k;
  (n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = () => {
        let e = (e) => {
            (e.target instanceof Element &&
              e.target.closest(`[data-chronicle-delete-confirming="true"]`) != null) ||
              C(null);
          },
          t = (e) => {
            e.key === `Escape` && C(null);
          };
        return (
          document.addEventListener(`pointerdown`, e),
          document.addEventListener(`keydown`, t),
          () => {
            (D.current != null && clearTimeout(D.current),
              document.removeEventListener(`pointerdown`, e),
              document.removeEventListener(`keydown`, t));
          }
        );
      }),
      (k = []),
      (n[0] = O),
      (n[1] = k))
    : ((O = n[0]), (k = n[1])),
    (0, yn.useEffect)(O, k));
  let A;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (e) => {
        if ((D.current != null && (clearTimeout(D.current), (D.current = null)), e != null)) {
          x(e);
          return;
        }
        D.current = setTimeout(() => {
          (x(null), (D.current = null));
        }, 120);
      }),
      (n[2] = A))
    : (A = n[2]);
  let j = A,
    M,
    N,
    P,
    F,
    I,
    L;
  if (
    n[3] !== S ||
    n[4] !== r ||
    n[5] !== y ||
    n[6] !== b ||
    n[7] !== u ||
    n[8] !== l ||
    n[9] !== p ||
    n[10] !== m ||
    n[11] !== i ||
    n[12] !== w ||
    n[13] !== a ||
    n[14] !== h ||
    n[15] !== c ||
    n[16] !== o ||
    n[17] !== _
  ) {
    let e = gn(u ?? [], new Date(r ?? w));
    ((P = De), (I = `history`));
    let s;
    n[24] === Symbol.for(`react.memo_cache_sentinel`) ? ((s = (0, Q.jsx)(gt, {})), (n[24] = s)) : (s = n[24]);
    let f;
    n[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, Q.jsx)(d, {
          id: `settings.chronicle.history.description`,
          defaultMessage: `ChatGPT records text summaries of your computer activity. You can control what ChatGPT can reference by deleting individual records or clearing recent history.`,
          description: `Explanation of the Computer history timeline and its deletion controls`,
        })),
        (n[25] = f))
      : (f = n[25]);
    let x;
    n[26] === l
      ? (x = n[27])
      : ((x = l.formatMessage({
          id: `settings.chronicle.history.descriptionAriaLabel`,
          defaultMessage: `About computer history`,
          description: `Accessible label for the Computer history information button`,
        })),
        (n[26] = l),
        (n[27] = x));
    let T;
    n[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((T = (0, Q.jsx)(v, { asset: g })), (n[28] = T))
      : (T = n[28]);
    let E;
    n[29] === x
      ? (E = n[30])
      : ((E = (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            s,
            (0, Q.jsx)(se, {
              cloneCustomTrigger: !0,
              delayDuration: 0,
              tooltipContent: f,
              children: (0, Q.jsx)(t, {
                "aria-label": x,
                color: `ghostTertiary`,
                size: `inline`,
                children: T,
              }),
            }),
          ],
        })),
        (n[29] = x),
        (n[30] = E));
    let D;
    (n[31] !== u?.length || n[32] !== i || n[33] !== a
      ? ((D =
          (u?.length ?? 0) > 0
            ? (0, Q.jsxs)(Q.Fragment, {
                children: [(0, Q.jsx)(fn, { disabled: i, onRequest: a }), (0, Q.jsx)(ln, { disabled: i })],
              })
            : null),
        (n[31] = u?.length),
        (n[32] = i),
        (n[33] = a),
        (n[34] = D))
      : (D = n[34]),
      n[35] !== E || n[36] !== D
        ? ((L = (0, Q.jsx)(De.Header, { title: E, actions: D })), (n[35] = E), (n[36] = D), (n[37] = L))
        : (L = n[37]),
      (N = De.Content),
      (M = ae),
      (F = m
        ? (0, Q.jsx)(`div`, {
            className: `px-5 py-10 text-center text-sm text-secondary`,
            children: (0, Q.jsx)(d, {
              id: `settings.chronicle.history.loading`,
              defaultMessage: `Loading history…`,
              description: `Computer history loading state`,
            }),
          })
        : p
          ? (0, Q.jsxs)(`div`, {
              className: `flex flex-col items-center gap-3 px-5 py-10 text-center text-sm text-secondary`,
              children: [
                (0, Q.jsx)(d, {
                  id: `settings.chronicle.history.error`,
                  defaultMessage: `Computer history could not be loaded`,
                  description: `Computer history error state`,
                }),
                (0, Q.jsx)(t, {
                  color: `outline`,
                  onClick: () => void h(),
                  children: (0, Q.jsx)(d, {
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
                children: (0, Q.jsx)(d, {
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
                      settings: o,
                      highlightedApplication: b,
                      confirmingDeleteId: S,
                      isUpdatingApplication: _.isPending,
                      isDeletingItem: y.isPending,
                      onHighlightApplication: j,
                      onApplicationObservedChange: (e, t) =>
                        _.mutate(
                          { application: e, observed: t },
                          {
                            onError: () => {
                              c.get(R).danger(
                                (0, Q.jsx)(d, {
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
                      onConfirmingDeleteChange: C,
                      onDelete: (e) =>
                        y.mutate(
                          { scope: `interval`, interval: e.interval },
                          {
                            onError: () => {
                              c.get(R).danger(
                                (0, Q.jsx)(d, {
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
      (n[3] = S),
      (n[4] = r),
      (n[5] = y),
      (n[6] = b),
      (n[7] = u),
      (n[8] = l),
      (n[9] = p),
      (n[10] = m),
      (n[11] = i),
      (n[12] = w),
      (n[13] = a),
      (n[14] = h),
      (n[15] = c),
      (n[16] = o),
      (n[17] = _),
      (n[18] = M),
      (n[19] = N),
      (n[20] = P),
      (n[21] = F),
      (n[22] = I),
      (n[23] = L));
  } else ((M = n[18]), (N = n[19]), (P = n[20]), (F = n[21]), (I = n[22]), (L = n[23]));
  let z;
  n[38] !== M || n[39] !== F
    ? ((z = (0, Q.jsx)(M, { children: F })), (n[38] = M), (n[39] = F), (n[40] = z))
    : (z = n[40]);
  let B;
  n[41] !== N || n[42] !== z
    ? ((B = (0, Q.jsx)(N, { children: z })), (n[41] = N), (n[42] = z), (n[43] = B))
    : (B = n[43]);
  let V;
  return (
    n[44] !== P || n[45] !== I || n[46] !== L || n[47] !== B
      ? ((V = (0, Q.jsxs)(P, { id: I, children: [L, B] })),
        (n[44] = P),
        (n[45] = I),
        (n[46] = L),
        (n[47] = B),
        (n[48] = V))
      : (V = n[48]),
    V
  );
}
function on(e) {
  let n = (0, vn.c)(34),
    {
      group: r,
      highlightedApplication: i,
      confirmingDeleteId: a,
      isDeletingItem: o,
      isUpdatingApplication: s,
      onApplicationObservedChange: c,
      onDelete: l,
      onConfirmingDeleteChange: d,
      onHighlightApplication: f,
      settings: p,
    } = e,
    [m, h] = (0, yn.useState)(!0),
    g;
  n[0] !== r.items || n[1] !== i
    ? ((g = i != null && !r.items.some((e) => e.applications.some((e) => e.bundleIdentifier === i))),
      (n[0] = r.items),
      (n[1] = i),
      (n[2] = g))
    : (g = n[2]);
  let _ = g && `opacity-40`,
    y;
  n[3] === _ ? (y = n[4]) : ((y = L(`transition-opacity`, _)), (n[3] = _), (n[4] = y));
  let b;
  n[5] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = () => h(sn)), (n[5] = b)) : (b = n[5]);
  let x;
  n[6] === r.label ? (x = n[7]) : ((x = (0, Q.jsx)(hn, { label: r.label })), (n[6] = r.label), (n[7] = x));
  let S = m && `rotate-90`,
    C;
  n[8] === S ? (C = n[9]) : ((C = L(`text-tertiary transition-transform`, S)), (n[8] = S), (n[9] = C));
  let w;
  n[10] === C
    ? (w = n[11])
    : ((w = (0, Q.jsx)(v, { className: C, "aria-hidden": !1, asset: u })), (n[10] = C), (n[11] = w));
  let T;
  n[12] !== m || n[13] !== x || n[14] !== w
    ? ((T = (0, Q.jsxs)(t, {
        className: `gap-2 text-sm leading-5 font-medium text-default`,
        "aria-expanded": m,
        color: `ghostMuted`,
        size: `inline`,
        type: `button`,
        onClick: b,
        children: [x, w],
      })),
      (n[12] = m),
      (n[13] = x),
      (n[14] = w),
      (n[15] = T))
    : (T = n[15]);
  let E;
  n[16] !== y || n[17] !== T
    ? ((E = (0, Q.jsx)(`h2`, { className: y, children: T })), (n[16] = y), (n[17] = T), (n[18] = E))
    : (E = n[18]);
  let D;
  n[19] !== a ||
  n[20] !== m ||
  n[21] !== r.items ||
  n[22] !== i ||
  n[23] !== o ||
  n[24] !== s ||
  n[25] !== c ||
  n[26] !== d ||
  n[27] !== l ||
  n[28] !== f ||
  n[29] !== p
    ? ((D = m
        ? (0, Q.jsx)(`div`, {
            className: `mt-2.5 flex flex-col`,
            children: r.items.map((e, t) =>
              (0, Q.jsx)(
                cn,
                {
                  item: e,
                  settings: p,
                  highlightedApplication: i,
                  isConfirmingDelete: a === e.id,
                  isDeletingItem: o,
                  isUpdatingApplication: s,
                  hasGapAfter:
                    t < r.items.length - 1 &&
                    e.interval.startMs > (r.items[t + 1]?.interval.endMs ?? e.interval.startMs),
                  hasGapBefore:
                    t > 0 && (r.items[t - 1]?.interval.startMs ?? e.interval.endMs) > e.interval.endMs,
                  onApplicationObservedChange: c,
                  onDelete: () => l(e),
                  onConfirmingDeleteChange: (t) => d(t ? e.id : null),
                  onHighlightApplication: f,
                },
                e.id,
              ),
            ),
          })
        : null),
      (n[19] = a),
      (n[20] = m),
      (n[21] = r.items),
      (n[22] = i),
      (n[23] = o),
      (n[24] = s),
      (n[25] = c),
      (n[26] = d),
      (n[27] = l),
      (n[28] = f),
      (n[29] = p),
      (n[30] = D))
    : (D = n[30]);
  let O;
  return (
    n[31] !== E || n[32] !== D
      ? ((O = (0, Q.jsxs)(`section`, { className: `px-5 py-4`, children: [E, D] })),
        (n[31] = E),
        (n[32] = D),
        (n[33] = O))
      : (O = n[33]),
    O
  );
}
function sn(e) {
  return !e;
}
function cn(e) {
  let n = (0, vn.c)(96),
    {
      hasGapAfter: r,
      hasGapBefore: i,
      highlightedApplication: a,
      isConfirmingDelete: o,
      isDeletingItem: s,
      isUpdatingApplication: c,
      item: l,
      onApplicationObservedChange: u,
      onDelete: f,
      onConfirmingDeleteChange: p,
      onHighlightApplication: m,
      settings: h,
    } = e,
    g = T(),
    _;
  n[0] !== a || n[1] !== l.applications
    ? ((_ = a != null && !l.applications.some((e) => e.bundleIdentifier === a)),
      (n[0] = a),
      (n[1] = l.applications),
      (n[2] = _))
    : (_ = n[2]);
  let v = _ && `opacity-40`,
    y;
  n[3] === v
    ? (y = n[4])
    : ((y = L(nn.timelineItem, `group/timeline grid items-stretch gap-x-4 transition-opacity`, v)),
      (n[3] = v),
      (n[4] = y));
  let b = l.summaryLevel !== `six_hour`,
    x;
  n[5] !== g || n[6] !== l ? ((x = mn(l, g)), (n[5] = g), (n[6] = l), (n[7] = x)) : (x = n[7]);
  let S;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = L(nn.timelineTime, `text-end leading-4 font-medium text-secondary`)), (n[8] = S))
    : (S = n[8]);
  let C;
  n[9] === l.interval.startMs
    ? (C = n[10])
    : ((C = new Date(l.interval.startMs).toISOString()), (n[9] = l.interval.startMs), (n[10] = C));
  let w;
  n[11] === l ? (w = n[12]) : ((w = (0, Q.jsx)(pn, { item: l })), (n[11] = l), (n[12] = w));
  let E;
  n[13] !== C || n[14] !== w
    ? ((E = (0, Q.jsx)(`time`, { className: S, dateTime: C, children: w })),
      (n[13] = C),
      (n[14] = w),
      (n[15] = E))
    : (E = n[15]);
  let D;
  n[16] !== b || n[17] !== x || n[18] !== E
    ? ((D = (0, Q.jsx)(se, { disabled: b, tabIndex: 0, tooltipContent: x, children: E })),
      (n[16] = b),
      (n[17] = x),
      (n[18] = E),
      (n[19] = D))
    : (D = n[19]);
  let O = i && nn.timelineRailGapBefore,
    k = r && nn.timelineRailGapAfter,
    A;
  n[20] !== O || n[21] !== k
    ? ((A = L(nn.timelineRail, `relative min-h-full`, O, k)), (n[20] = O), (n[21] = k), (n[22] = A))
    : (A = n[22]);
  let j;
  n[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, Q.jsx)(`span`, {
        className: L(
          nn.timelineDot,
          `absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full bg-text-tertiary`,
        ),
      })),
      (n[23] = j))
    : (j = n[23]);
  let M;
  n[24] === A
    ? (M = n[25])
    : ((M = (0, Q.jsx)(`span`, { className: A, "aria-hidden": `true`, children: j })),
      (n[24] = A),
      (n[25] = M));
  let N;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = L(nn.timelineContent, `min-w-0`)), (n[26] = N))
    : (N = n[26]);
  let P;
  n[27] === l.title
    ? (P = n[28])
    : ((P = (0, Q.jsx)(`h3`, {
        className: `min-w-0 truncate text-sm leading-5 font-medium text-default`,
        children: l.title,
      })),
      (n[27] = l.title),
      (n[28] = P));
  let F = o && `opacity-100`,
    I;
  n[29] === F
    ? (I = n[30])
    : ((I = L(
        `flex items-center gap-1 opacity-0 transition-opacity duration-basic group-focus-within/timeline:opacity-100 group-hover/timeline:opacity-100`,
        F,
      )),
      (n[29] = F),
      (n[30] = I));
  let R;
  n[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((R = (0, Q.jsx)(d, {
        id: `settings.chronicle.history.revealMemoryFile`,
        defaultMessage: `Reveal in Finder`,
        description: `Tooltip for revealing a Computer history memory file in Finder`,
      })),
      (n[31] = R))
    : (R = n[31]);
  let z;
  n[32] !== g || n[33] !== l.title
    ? ((z = g.formatMessage(
        {
          id: `settings.chronicle.history.revealMemoryFileAriaLabel`,
          defaultMessage: `Reveal {title} in Finder`,
          description: `Accessible label for revealing a Computer history memory file in Finder`,
        },
        { title: l.title },
      )),
      (n[32] = g),
      (n[33] = l.title),
      (n[34] = z))
    : (z = n[34]);
  let B;
  n[35] === l.memoryFilePath
    ? (B = n[36])
    : ((B = (e) => {
        (e.currentTarget.blur(), He({ cwd: null, path: l.memoryFilePath, target: `fileManager` }));
      }),
      (n[35] = l.memoryFilePath),
      (n[36] = B));
  let V;
  n[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Q.jsx)(le, { "aria-hidden": !0, className: `icon-2xs shrink-0` })), (n[37] = V))
    : (V = n[37]);
  let ee;
  n[38] !== s || n[39] !== z || n[40] !== B
    ? ((ee = (0, Q.jsx)(se, {
        tooltipContent: R,
        children: (0, Q.jsx)(t, {
          color: `ghost`,
          size: `default`,
          radius: `large`,
          className: `size-5.5 shrink-0 justify-center`,
          disabled: s,
          "aria-label": z,
          onClick: B,
          children: V,
        }),
      })),
      (n[38] = s),
      (n[39] = z),
      (n[40] = B),
      (n[41] = ee))
    : (ee = n[41]);
  let H = !o && void 0,
    te;
  n[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Q.jsx)(d, {
        id: `settings.chronicle.history.deleteItemTooltip`,
        defaultMessage: `Delete`,
        description: `Tooltip for deleting a Computer history item`,
      })),
      (n[42] = te))
    : (te = n[42]);
  let ne = o ? `danger` : `ghost`,
    re = o ? `w-14` : `w-5.5`,
    U;
  n[43] === re
    ? (U = n[44])
    : ((U = L(nn.timelineDelete, `h-5.5 shrink-0 justify-center`, re)), (n[43] = re), (n[44] = U));
  let ae = o ? `true` : void 0,
    oe;
  n[45] !== g || n[46] !== o || n[47] !== l.title
    ? ((oe = o
        ? g.formatMessage(
            {
              id: `settings.chronicle.history.confirmDeleteItem`,
              defaultMessage: `Confirm delete {title}`,
              description: `Accessible label for confirming deletion of a Computer history item`,
            },
            { title: l.title },
          )
        : g.formatMessage(
            {
              id: `settings.chronicle.history.deleteItem`,
              defaultMessage: `Delete {title}`,
              description: `Accessible label for deleting a Computer history item`,
            },
            { title: l.title },
          )),
      (n[45] = g),
      (n[46] = o),
      (n[47] = l.title),
      (n[48] = oe))
    : (oe = n[48]);
  let W;
  n[49] !== o || n[50] !== p || n[51] !== f
    ? ((W = () => {
        if (!o) {
          (ie(), p(!0));
          return;
        }
        (p(!1), f());
      }),
      (n[49] = o),
      (n[50] = p),
      (n[51] = f),
      (n[52] = W))
    : (W = n[52]);
  let G;
  n[53] === o
    ? (G = n[54])
    : ((G = o
        ? (0, Q.jsx)(d, {
            id: `settings.chronicle.history.confirmDelete`,
            defaultMessage: `Delete`,
            description: `Inline confirmation for deleting a Computer history item`,
          })
        : (0, Q.jsx)(We, { "aria-hidden": !0, className: `icon-2xs shrink-0` })),
      (n[53] = o),
      (n[54] = G));
  let K;
  n[55] !== s || n[56] !== ne || n[57] !== U || n[58] !== ae || n[59] !== oe || n[60] !== W || n[61] !== G
    ? ((K = (0, Q.jsx)(t, {
        color: ne,
        size: `default`,
        radius: `large`,
        className: U,
        "data-chronicle-delete-confirming": ae,
        disabled: s,
        "aria-label": oe,
        onClick: W,
        children: G,
      })),
      (n[55] = s),
      (n[56] = ne),
      (n[57] = U),
      (n[58] = ae),
      (n[59] = oe),
      (n[60] = W),
      (n[61] = G),
      (n[62] = K))
    : (K = n[62]);
  let q;
  n[63] !== o || n[64] !== H || n[65] !== K
    ? ((q = (0, Q.jsx)(se, { disableHoverOpen: o, open: H, tooltipContent: te, children: K })),
      (n[63] = o),
      (n[64] = H),
      (n[65] = K),
      (n[66] = q))
    : (q = n[66]);
  let J;
  n[67] !== I || n[68] !== ee || n[69] !== q
    ? ((J = (0, Q.jsxs)(`div`, { className: I, children: [ee, q] })),
      (n[67] = I),
      (n[68] = ee),
      (n[69] = q),
      (n[70] = J))
    : (J = n[70]);
  let ce;
  n[71] !== P || n[72] !== J
    ? ((ce = (0, Q.jsxs)(`div`, { className: `flex min-w-0 items-center gap-2`, children: [P, J] })),
      (n[71] = P),
      (n[72] = J),
      (n[73] = ce))
    : (ce = n[73]);
  let Y;
  n[74] === l.description
    ? (Y = n[75])
    : ((Y = (0, Q.jsx)(`p`, {
        className: `mt-[3px] text-[13px] leading-5 text-secondary`,
        children: l.description,
      })),
      (n[74] = l.description),
      (n[75] = Y));
  let ue;
  n[76] !== a || n[77] !== c || n[78] !== l.applications || n[79] !== u || n[80] !== m || n[81] !== h
    ? ((ue =
        l.applications.length > 0
          ? (0, Q.jsx)(`div`, {
              className: `mt-2 flex flex-wrap items-center gap-[9px]`,
              children: l.applications.map((e) =>
                (0, Q.jsx)(
                  dn,
                  {
                    application: e,
                    highlightedApplication: a,
                    isUpdatingApplication: c,
                    settings: h,
                    onApplicationObservedChange: u,
                    onHighlightApplication: m,
                  },
                  e.bundleIdentifier,
                ),
              ),
            })
          : null),
      (n[76] = a),
      (n[77] = c),
      (n[78] = l.applications),
      (n[79] = u),
      (n[80] = m),
      (n[81] = h),
      (n[82] = ue))
    : (ue = n[82]);
  let de;
  n[83] !== l.memoryFilePath || n[84] !== l.suggestion
    ? ((de =
        l.suggestion == null
          ? null
          : (0, Q.jsx)(un, { suggestion: l.suggestion, memoryFilePath: l.memoryFilePath })),
      (n[83] = l.memoryFilePath),
      (n[84] = l.suggestion),
      (n[85] = de))
    : (de = n[85]);
  let fe;
  n[86] !== ce || n[87] !== Y || n[88] !== ue || n[89] !== de
    ? ((fe = (0, Q.jsxs)(`div`, { className: N, children: [ce, Y, ue, de] })),
      (n[86] = ce),
      (n[87] = Y),
      (n[88] = ue),
      (n[89] = de),
      (n[90] = fe))
    : (fe = n[90]);
  let pe;
  return (
    n[91] !== D || n[92] !== M || n[93] !== y || n[94] !== fe
      ? ((pe = (0, Q.jsxs)(`article`, { className: y, children: [D, M, fe] })),
        (n[91] = D),
        (n[92] = M),
        (n[93] = y),
        (n[94] = fe),
        (n[95] = pe))
      : (pe = n[95]),
    pe
  );
}
function ln(e) {
  let n = (0, vn.c)(8),
    { disabled: r } = e,
    i = T(),
    o = ge(),
    s;
  n[0] !== i || n[1] !== o
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
            prefillPrompt: Re({
              defaultPrompt: i.formatMessage(t),
              pluginDisplayName: i.formatMessage(ct),
              pluginId: `${fe}@${a}`,
            }),
          });
      }),
      (n[0] = i),
      (n[1] = o),
      (n[2] = s))
    : (s = n[2]);
  let l, u;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(v, { asset: c })),
      (u = (0, Q.jsx)(d, {
        id: `settings.chronicle.history.askAboutHistory`,
        defaultMessage: `Ask about your history`,
        description: `Button for starting a conversation about Computer history`,
      })),
      (n[3] = l),
      (n[4] = u))
    : ((l = n[3]), (u = n[4]));
  let f;
  return (
    n[5] !== r || n[6] !== s
      ? ((f = (0, Q.jsxs)(t, {
          color: `outline`,
          size: `toolbar`,
          radius: `large`,
          disabled: r,
          onClick: s,
          children: [l, u],
        })),
        (n[5] = r),
        (n[6] = s),
        (n[7] = f))
      : (f = n[7]),
    f
  );
}
function un(e) {
  let t = (0, vn.c)(19),
    { memoryFilePath: n, suggestion: r } = e,
    i = T(),
    a = ge(),
    o;
  t[0] === r.type
    ? (o = t[1])
    : ((o = (0, Q.jsx)(`div`, {
        className: `text-sm leading-5 font-medium text-default`,
        children:
          r.type === `skill`
            ? (0, Q.jsx)(d, {
                id: `settings.chronicle.history.suggestedSkill`,
                defaultMessage: `Suggested skill`,
                description: `Heading for a reusable skill suggested from Computer history`,
              })
            : (0, Q.jsx)(d, {
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
          ? (0, Q.jsx)(d, {
              id: `settings.chronicle.history.createSuggestedSkill`,
              defaultMessage: `Create {name} skill`,
              description: `Action to create the named reusable skill suggested from Computer history`,
              values: { name: r.name },
            })
          : (0, Q.jsx)(d, {
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
  let f;
  return (
    t[15] !== o || t[16] !== s || t[17] !== u
      ? ((f = (0, Q.jsxs)(`div`, { className: `mt-3 rounded-lg bg-text/5 px-3 py-2`, children: [o, s, u] })),
        (t[15] = o),
        (t[16] = s),
        (t[17] = u),
        (t[18] = f))
      : (f = t[18]),
    f
  );
}
function dn(e) {
  let t = (0, vn.c)(46),
    {
      application: n,
      highlightedApplication: r,
      isUpdatingApplication: i,
      onApplicationObservedChange: a,
      onHighlightApplication: s,
      settings: c,
    } = e,
    l = T(),
    [u, f] = (0, yn.useState)(!1),
    p;
  t[0] !== n.bundleIdentifier || t[1] !== c
    ? ((p = c == null || tt(c, n.bundleIdentifier)), (t[0] = n.bundleIdentifier), (t[1] = c), (t[2] = p))
    : (p = t[2]);
  let m = p,
    h = c == null || i,
    g;
  t[3] !== n.bundleIdentifier || t[4] !== h || t[5] !== s
    ? ((g = (e) => {
        if (h) {
          (f(!1), s(null));
          return;
        }
        (f(e), s(e ? n.bundleIdentifier : null));
      }),
      (t[3] = n.bundleIdentifier),
      (t[4] = h),
      (t[5] = s),
      (t[6] = g))
    : (g = t[6]);
  let _;
  t[7] !== n.displayName || t[8] !== l
    ? ((_ = l.formatMessage(
        {
          id: `settings.chronicle.history.openApplicationMenu`,
          defaultMessage: `Open {app} menu`,
          description: `Accessible label for opening a timeline application menu`,
        },
        { app: n.displayName },
      )),
      (t[7] = n.displayName),
      (t[8] = l),
      (t[9] = _))
    : (_ = t[9]);
  let v = !m && `grayscale`,
    y = r != null && r !== n.bundleIdentifier && `opacity-40`,
    b;
  t[10] !== v || t[11] !== y
    ? ((b = L(
        `size-5 overflow-hidden rounded-[5px] transition-opacity duration-[120ms] ease-in-out aria-disabled:!opacity-100`,
        v,
        y,
      )),
      (t[10] = v),
      (t[11] = y),
      (t[12] = b))
    : (b = t[12]);
  let x;
  t[13] !== n.bundleIdentifier || t[14] !== h || t[15] !== s
    ? ((x = () => {
        h || s(n.bundleIdentifier);
      }),
      (t[13] = n.bundleIdentifier),
      (t[14] = h),
      (t[15] = s),
      (t[16] = x))
    : (x = t[16]);
  let S;
  t[17] !== s || t[18] !== u
    ? ((S = () => {
        u || s(null);
      }),
      (t[17] = s),
      (t[18] = u),
      (t[19] = S))
    : (S = t[19]);
  let w;
  t[20] !== n.displayName || t[21] !== n.iconDataURL
    ? ((w =
        n.iconDataURL == null
          ? (0, Q.jsx)(`span`, {
              className: `flex size-full items-center justify-center bg-text/5 text-[10px] font-medium text-secondary`,
              children: n.displayName.slice(0, 1),
            })
          : (0, Q.jsx)(`img`, { className: `size-full object-contain`, src: n.iconDataURL, alt: `` })),
      (t[20] = n.displayName),
      (t[21] = n.iconDataURL),
      (t[22] = w))
    : (w = t[22]);
  let E;
  t[23] !== _ || t[24] !== b || t[25] !== x || t[26] !== S || t[27] !== w
    ? ((E = (0, Q.jsx)(`button`, {
        "aria-label": _,
        className: b,
        type: `button`,
        onMouseEnter: x,
        onMouseLeave: S,
        children: w,
      })),
      (t[23] = _),
      (t[24] = b),
      (t[25] = x),
      (t[26] = S),
      (t[27] = w),
      (t[28] = E))
    : (E = t[28]);
  let D;
  t[29] !== n || t[30] !== m || t[31] !== a
    ? ((D = () => a(n, !m)), (t[29] = n), (t[30] = m), (t[31] = a), (t[32] = D))
    : (D = t[32]);
  let O;
  t[33] !== n.displayName || t[34] !== m
    ? ((O = m
        ? (0, Q.jsx)(d, {
            id: `settings.chronicle.history.excludeApplication`,
            defaultMessage: `Exclude {app} from future history`,
            description: `Timeline app action that excludes the app from future Computer history`,
            values: { app: n.displayName },
          })
        : (0, Q.jsx)(d, {
            id: `settings.chronicle.history.includeApplication`,
            defaultMessage: `Include {app} in future history`,
            description: `Timeline app action that includes the app in future Computer history`,
            values: { app: n.displayName },
          })),
      (t[33] = n.displayName),
      (t[34] = m),
      (t[35] = O))
    : (O = t[35]);
  let k;
  t[36] !== i || t[37] !== D || t[38] !== O
    ? ((k = (0, Q.jsx)(C.Item, { disabled: i, onSelect: D, children: O })),
      (t[36] = i),
      (t[37] = D),
      (t[38] = O),
      (t[39] = k))
    : (k = t[39]);
  let A;
  return (
    t[40] !== h || t[41] !== u || t[42] !== E || t[43] !== k || t[44] !== g
      ? ((A = (0, Q.jsx)(o, {
          align: `start`,
          contentClassName: `!w-max !min-w-[180px]`,
          disabled: h,
          open: u,
          sideOffset: 6,
          onOpenChange: g,
          triggerButton: E,
          children: k,
        })),
        (t[40] = h),
        (t[41] = u),
        (t[42] = E),
        (t[43] = k),
        (t[44] = g),
        (t[45] = A))
      : (A = t[45]),
    A
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
            d,
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
            d,
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
            d,
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
            d,
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
    s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(d, {
        id: `settings.chronicle.history.clear`,
        defaultMessage: `Clear history`,
        description: `Clear Computer history menu button`,
      })),
      (t[1] = s))
    : (s = t[1]);
  let c;
  t[2] === n ? (c = t[3]) : ((c = (0, Q.jsx)(we, { disabled: n, children: s })), (t[2] = n), (t[3] = c));
  let l;
  t[4] === r
    ? (l = t[5])
    : ((l = a.map((e) => {
        let [t, n] = e;
        return (0, Q.jsx)(
          C.Item,
          {
            className: n === `all` ? `!text-chart-red` : void 0,
            onSelect: () => r({ scope: n, interval: null }),
            children: t,
          },
          n,
        );
      })),
      (t[4] = r),
      (t[5] = l));
  let u;
  return (
    t[6] !== n || t[7] !== c || t[8] !== l
      ? ((u = (0, Q.jsx)(o, {
          align: `end`,
          contentWidth: `menu`,
          disabled: n,
          triggerButton: c,
          children: l,
        })),
        (t[6] = n),
        (t[7] = c),
        (t[8] = l),
        (t[9] = u))
      : (u = t[9]),
    u
  );
}
function pn(e) {
  let t = (0, vn.c)(4),
    { item: n } = e,
    r = T(),
    i = new Date(n.interval.startMs);
  if (n.summaryLevel === `ten_minute`)
    return (0, Q.jsx)(Q.Fragment, { children: r.formatTime(i, { hour: `numeric`, minute: `2-digit` }) });
  let a = i.getHours();
  if (a >= 4 && a < 10) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, {
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
        ? ((e = (0, Q.jsx)(d, {
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
        ? ((e = (0, Q.jsx)(d, {
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
      ? ((o = (0, Q.jsx)(d, {
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
    r = T();
  if (n.kind === `today`) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Q.jsx)(d, {
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
        ? ((e = (0, Q.jsx)(d, {
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
    ((vn = Y()),
      b(),
      l(),
      S(),
      A(),
      x(),
      G(),
      (yn = pe()),
      V(),
      it(),
      st(),
      q(),
      i(),
      y(),
      ne(),
      P(),
      z(),
      Pe(),
      Se(),
      w(),
      Ge(),
      Fe(),
      ue(),
      ve(),
      Be(),
      p(),
      _t(),
      Je(),
      rn(),
      (Q = de()),
      (bn = r({
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
    t = f(s),
    r = n(k.chronicleMenuBarIndicatorEnabled),
    i = F(),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, wn.jsx)(d, {
        id: `settings.chronicle.showIndicatorInMenuBar`,
        defaultMessage: `Show indicator in menu bar`,
        description: `Label for showing the Computer history recording dot beside the app's macOS menu bar icon`,
      })),
      (e[0] = a))
    : (a = e[0]);
  let o;
  return (
    e[1] !== r || e[2] !== i || e[3] !== t
      ? ((o = (0, wn.jsx)(J, {
          className: `select-none`,
          label: a,
          control: (e) =>
            (0, wn.jsx)(ee, {
              ...e,
              checked: r,
              disabled: i,
              onChange: (e) => {
                W(t, k.chronicleMenuBarIndicatorEnabled, e).catch(() => {
                  t.get(R).danger(
                    (0, wn.jsx)(d, {
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
    ((Cn = Y()), x(), G(), V(), ne(), _(), ue(), D(), B(), (wn = de()));
  }))();
}
function En() {
  let e = (0, jn.c)(68),
    t = f(s),
    { selectedHostId: n } = _e(),
    { data: r, isLoading: i } = me(Ve, n),
    [a, o] = (0, Mn.useState)(!1),
    [c, l] = (0, Mn.useState)(!1),
    [u, p] = (0, Mn.useState)(!1),
    [m, g] = (0, Mn.useState)(!1),
    [_, v] = (0, Mn.useState)(!1),
    [y, b] = (0, Mn.useState)(null),
    x = h.chronicle,
    S = r?.config,
    C;
  e[0] === S ? (C = e[1]) : ((C = M(S, `chronicle`)), (e[0] = S), (e[1] = C));
  let w = C === !0,
    T;
  e[2] === w ? (T = e[3]) : ((T = { enabled: w }), (e[2] = w), (e[3] = T));
  let { data: D, dataUpdatedAt: O, errorUpdatedAt: k, isError: A } = E(nt, T),
    j = E(rt),
    N = me(St, n),
    P = me(yt, n),
    { isLoading: F } = me(Ce, n),
    I = me(Tt, n),
    L;
  e[4] === n ? (L = e[5]) : ((L = { hostId: n }), (e[4] = n), (e[5] = L));
  let z = Ue(L),
    B = ut(n),
    V = E(Ye),
    ee = j.isPending && j.variables?.enabled === !0,
    H = D ?? V.data ?? j.data,
    te = ee || V.isPending || H?.activationState === `starting`,
    ne = ee || (H?.enabled ?? w),
    re = N && P,
    ie = ne && (I || !re),
    U = A || k > O,
    ae = x == null || i || j.isPending || V.isPending,
    oe = ae || !re,
    W;
  x == null
    ? (W = `service-unavailable`)
    : i
      ? (W = `configuration-loading`)
      : N
        ? F
          ? (W = `memory-feature-loading`)
          : P || (W = `memory-feature-unavailable`)
        : (W = `configuration-unavailable`);
  let G;
  e[6] !== w || e[7] !== t || e[8] !== D?.enabled
    ? ((G = () => {
        D?.enabled === !1 && w && (je(t.queryClient, ke), je(t.queryClient, [`user-saved-config`]));
      }),
      (e[6] = w),
      (e[7] = t),
      (e[8] = D?.enabled),
      (e[9] = G))
    : (G = e[9]);
  let K = D?.enabled,
    se;
  (e[10] !== w || e[11] !== t || e[12] !== K
    ? ((se = [w, t, K]), (e[10] = w), (e[11] = t), (e[12] = K), (e[13] = se))
    : (se = e[13]),
    (0, Mn.useEffect)(G, se));
  let q;
  e[14] !== t || e[15] !== n || e[16] !== j
    ? ((q = (e) => {
        j.mutate(
          { enabled: e, hostId: n },
          {
            onSuccess: (n) => {
              e &&
                !n.enabled &&
                t
                  .get(R)
                  .danger(
                    (0, $.jsx)(d, {
                      id: `settings.chronicle.permissionsDeniedToast`,
                      defaultMessage: `Computer history wasn’t turned on because required permissions weren’t granted`,
                      description: `Toast shown when Computer history setup is closed before required permissions are granted`,
                    }),
                    { errorAnalytics: { toastId: `settings.chronicle.permissionsDeniedToast` } },
                  );
            },
            onError: () => {
              t.get(R)[e ? `warning` : `danger`](
                e
                  ? (0, $.jsx)(d, {
                      id: `settings.chronicle.enableErrorToast`,
                      defaultMessage: `Computer history could not be turned on. Restart ChatGPT, and try again`,
                      description: `Toast shown when Computer history enablement fails, suggesting the user restart ChatGPT`,
                    })
                  : (0, $.jsx)(d, {
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
      (e[15] = n),
      (e[16] = j),
      (e[17] = q))
    : (q = e[17]);
  let J = q,
    ce;
  e[18] !== V || e[19] !== t
    ? ((ce = () => {
        V.mutate(void 0, {
          onError: () => {
            t.get(R).danger(
              (0, $.jsx)(d, {
                id: `settings.chronicle.retryActivationErrorToast`,
                defaultMessage: `Computer history could not be resumed`,
                description: `Toast shown when retrying Computer history activation fails`,
              }),
              { errorAnalytics: { toastId: `settings.chronicle.retryActivationErrorToast` } },
            );
          },
        });
      }),
      (e[18] = V),
      (e[19] = t),
      (e[20] = ce))
    : (ce = e[20]);
  let Y = ce,
    le;
  e[21] !== I || e[22] !== J
    ? ((le = () => {
        I ? J(!0) : l(!0);
      }),
      (e[21] = I),
      (e[22] = J),
      (e[23] = le))
    : (le = e[23]);
  let ue = le,
    de;
  e[24] !== Y || e[25] !== t || e[26] !== n || e[27] !== J || e[28] !== z || e[29] !== B
    ? ((de = async () => {
        x != null &&
          (p(!0),
          await (async () => {
            try {
              let e = await At({
                enableMemories: () =>
                  vt(t, {
                    hostId: n,
                    setMemoryFeatureEnabled: () => z.mutateAsync({ featureName: be, enabled: !0 }),
                    writeMemoryConfig: (e) => B.mutateAsync({ edits: e }),
                  }),
                getChronicleState: () => x.getState(),
              });
              l(!1);
              bb156: switch (e) {
                case `already_active`:
                  break bb156;
                case `enable_required`:
                  J(!0);
                  break bb156;
                case `retry_required`:
                  Y();
              }
            } catch {
              t.get(R).danger(
                (0, $.jsx)(d, {
                  id: `settings.chronicle.enableMemoriesErrorToast`,
                  defaultMessage: `Memories could not be turned on`,
                  description: `Toast shown when enabling Memories for Computer history fails`,
                }),
                { errorAnalytics: { toastId: `settings.chronicle.enableMemoriesErrorToast` } },
              );
            }
          })().finally(() => {
            p(!1);
          }));
      }),
      (e[24] = Y),
      (e[25] = t),
      (e[26] = n),
      (e[27] = J),
      (e[28] = z),
      (e[29] = B),
      (e[30] = de))
    : (de = e[30]);
  let fe = de,
    pe;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, $.jsx)(Ie, { slug: `chronicle` })), (e[31] = pe))
    : (pe = e[31]);
  let he;
  e[32] !== te ||
  e[33] !== ae ||
  e[34] !== H ||
  e[35] !== U ||
  e[36] !== oe ||
  e[37] !== W ||
  e[38] !== Y ||
  e[39] !== t ||
  e[40] !== J ||
  e[41] !== ie
    ? ((he = ie
        ? (0, $.jsx)(Dn, {
            activationInProgress: te,
            currentState: H,
            isServiceUnavailable: U,
            onClearRequest: b,
            onOpenPermissions: () => {
              (t.query.invalidate($e), g(!0));
            },
            onRetryActivation: Y,
            onToggle: J,
            toggleDisabled: ae,
          })
        : (0, $.jsx)(Bt, { disabled: oe, disabledReason: W, onTurnOn: () => o(!0) })),
      (e[32] = te),
      (e[33] = ae),
      (e[34] = H),
      (e[35] = U),
      (e[36] = oe),
      (e[37] = W),
      (e[38] = Y),
      (e[39] = t),
      (e[40] = J),
      (e[41] = ie),
      (e[42] = he))
    : (he = e[42]);
  let ge;
  e[43] === ue
    ? (ge = e[44])
    : ((ge = () => {
        (o(!1), ue());
      }),
      (e[43] = ue),
      (e[44] = ge));
  let ve;
  e[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ve = () => {
        (o(!1), v(!0), g(!0));
      }),
      (e[45] = ve))
    : (ve = e[45]);
  let ye;
  e[46] !== a || e[47] !== ge
    ? ((ye = (0, $.jsx)(Nt, { open: a, onOpenChange: o, onAllowAllApps: ge, onCustomizeApps: ve })),
      (e[46] = a),
      (e[47] = ge),
      (e[48] = ye))
    : (ye = e[48]);
  let xe;
  e[49] === fe
    ? (xe = e[50])
    : ((xe = () => {
        fe();
      }),
      (e[49] = fe),
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
        (g(e), e || v(!1));
      }),
      (e[55] = we))
    : (we = e[55]);
  let Te = _ ? ue : void 0,
    Ee;
  e[56] !== m || e[57] !== Te
    ? ((Ee = (0, $.jsx)(Ot, { open: m, onOpenChange: we, onSaved: Te })),
      (e[56] = m),
      (e[57] = Te),
      (e[58] = Ee))
    : (Ee = e[58]);
  let De;
  e[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((De = (e) => {
        e || b(null);
      }),
      (e[59] = De))
    : (De = e[59]);
  let Oe;
  e[60] === y
    ? (Oe = e[61])
    : ((Oe = (0, $.jsx)(kn, { request: y, onOpenChange: De })), (e[60] = y), (e[61] = Oe));
  let Ae;
  return (
    e[62] !== he || e[63] !== ye || e[64] !== Se || e[65] !== Ee || e[66] !== Oe
      ? ((Ae = (0, $.jsxs)(Le, { title: pe, children: [he, ye, Se, Ee, Oe] })),
        (e[62] = he),
        (e[63] = ye),
        (e[64] = Se),
        (e[65] = Ee),
        (e[66] = Oe),
        (e[67] = Ae))
      : (Ae = e[67]),
    Ae
  );
}
function Dn(e) {
  let n = (0, jn.c)(46),
    {
      activationInProgress: r,
      currentState: i,
      isServiceUnavailable: a,
      onClearRequest: o,
      onOpenPermissions: c,
      onRetryActivation: l,
      onToggle: u,
      toggleDisabled: p,
    } = e,
    m = f(s),
    h = T(),
    { data: g } = E($e),
    _;
  n[0] === g ? (_ = n[1]) : ((_ = g == null ? null : Qe(g)), (n[0] = g), (n[1] = _));
  let v = _,
    y = (v?.applicationBundleIdentifiers.length ?? 0) + (v?.urlDomains.length ?? 0),
    b = E(et),
    x =
      i?.activationState === `waiting_for_permissions` ||
      (i?.recorderState === `stopped` && i.activationState === `idle`),
    S = a || i?.activationState === `failed`,
    C = r || x || S,
    w = p || b.isPending,
    D;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = (0, $.jsx)(bt, {})), (n[2] = D)) : (D = n[2]);
  let O;
  n[3] === S
    ? (O = n[4])
    : ((O = S
        ? (0, $.jsx)(d, {
            id: `settings.chronicle.unavailableWithLearnMore`,
            defaultMessage: `Computer history is temporarily unavailable. <learnMore>Learn more</learnMore>`,
            description: `Status shown when Codex cannot connect to Computer history, followed by a learn-more link`,
            values: { learnMore: On },
          })
        : (0, $.jsx)(Et, {})),
      (n[3] = S),
      (n[4] = O));
  let k;
  n[5] !== r ||
  n[6] !== x ||
  n[7] !== w ||
  n[8] !== i?.recorderState ||
  n[9] !== l ||
  n[10] !== b ||
  n[11] !== m ||
  n[12] !== C ||
  n[13] !== p
    ? ((k = C
        ? (0, $.jsx)(t, {
            color: `secondary`,
            radius: `large`,
            disabled: w,
            loading: r,
            onClick: l,
            children: r
              ? (0, $.jsx)(d, {
                  id: `settings.chronicle.activationInProgress`,
                  defaultMessage: `Resume`,
                  description: `Computer history action shown while activation is already in progress`,
                })
              : x
                ? (0, $.jsx)(d, {
                    id: `settings.chronicle.finishSetup`,
                    defaultMessage: `Finish setup`,
                    description: `Retry Computer history startup while waiting for permissions`,
                  })
                : (0, $.jsx)(d, {
                    id: `settings.chronicle.tryAgain`,
                    defaultMessage: `Try again`,
                    description: `Retry Computer history startup after a failure`,
                  }),
          })
        : i?.recorderState === `running` || i?.recorderState === `paused`
          ? (0, $.jsx)(t, {
              color: `secondary`,
              radius: `large`,
              disabled: p,
              loading: b.isPending,
              onClick: () =>
                b.mutate(i?.recorderState, {
                  onError: () => {
                    m.get(R).danger(
                      (0, $.jsx)(d, {
                        id: `settings.chronicle.pauseResumeErrorToast`,
                        defaultMessage: `Computer history could not be paused or resumed`,
                        description: `Toast shown when pausing or resuming Computer history fails`,
                      }),
                      { errorAnalytics: { toastId: `settings.chronicle.pauseResumeErrorToast` } },
                    );
                  },
                }),
              children:
                i?.recorderState === `paused`
                  ? (0, $.jsx)(d, {
                      id: `settings.chronicle.resume`,
                      defaultMessage: `Resume`,
                      description: `Resume Computer history button`,
                    })
                  : (0, $.jsx)(d, {
                      id: `settings.chronicle.pause`,
                      defaultMessage: `Pause`,
                      description: `Pause Computer history button`,
                    }),
            })
          : null),
      (n[5] = r),
      (n[6] = x),
      (n[7] = w),
      (n[8] = i?.recorderState),
      (n[9] = l),
      (n[10] = b),
      (n[11] = m),
      (n[12] = C),
      (n[13] = p),
      (n[14] = k))
    : (k = n[14]);
  let A;
  n[15] === h
    ? (A = n[16])
    : ((A = h.formatMessage({
        id: `settings.chronicle.turnOffAriaLabel`,
        defaultMessage: `Turn off Computer history`,
        description: `Accessible label for the Computer history toggle`,
      })),
      (n[15] = h),
      (n[16] = A));
  let j;
  n[17] !== w || n[18] !== u || n[19] !== A
    ? ((j = (0, $.jsx)(ee, { checked: !0, disabled: w, ariaLabel: A, onChange: u })),
      (n[17] = w),
      (n[18] = u),
      (n[19] = A),
      (n[20] = j))
    : (j = n[20]);
  let M;
  n[21] !== k || n[22] !== j
    ? ((M = (0, $.jsxs)(`div`, { className: `flex items-center gap-3`, children: [k, j] })),
      (n[21] = k),
      (n[22] = j),
      (n[23] = M))
    : (M = n[23]);
  let N;
  n[24] !== O || n[25] !== M
    ? ((N = (0, $.jsx)(J, { label: D, description: O, control: M })), (n[24] = O), (n[25] = M), (n[26] = N))
    : (N = n[26]);
  let P;
  n[27] === Symbol.for(`react.memo_cache_sentinel`) ? ((P = (0, $.jsx)(Sn, {})), (n[27] = P)) : (P = n[27]);
  let F, I;
  n[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(kt, {})), (I = (0, $.jsx)(xt, {})), (n[28] = F), (n[29] = I))
    : ((F = n[28]), (I = n[29]));
  let L;
  n[30] === y
    ? (L = n[31])
    : ((L =
        y === 0
          ? (0, $.jsx)(d, {
              id: `settings.chronicle.permissions.choose`,
              defaultMessage: `Choose`,
              description: `Choose Computer history permissions button`,
            })
          : (0, $.jsx)(d, {
              id: `settings.chronicle.permissions.selectedCount`,
              defaultMessage: `{count} selected`,
              description: `Number of selected Computer history permission entries`,
              values: { count: y },
            })),
      (n[30] = y),
      (n[31] = L));
  let z;
  n[32] !== a || n[33] !== c || n[34] !== L
    ? ((z = (0, $.jsx)(J, {
        label: F,
        description: I,
        control: (0, $.jsx)(t, {
          color: `secondary`,
          size: `toolbar`,
          radius: `large`,
          disabled: a,
          onClick: c,
          children: L,
        }),
      })),
      (n[32] = a),
      (n[33] = c),
      (n[34] = L),
      (n[35] = z))
    : (z = n[35]);
  let B;
  n[36] !== z || n[37] !== N
    ? ((B = (0, $.jsx)(De, {
        children: (0, $.jsx)(De.Content, { children: (0, $.jsxs)(ae, { children: [N, P, z] }) }),
      })),
      (n[36] = z),
      (n[37] = N),
      (n[38] = B))
    : (B = n[38]);
  let V;
  n[39] !== a || n[40] !== o || n[41] !== g
    ? ((V = (0, $.jsx)(an, { isServiceUnavailable: a, onClearRequest: o, settings: g })),
      (n[39] = a),
      (n[40] = o),
      (n[41] = g),
      (n[42] = V))
    : (V = n[42]);
  let H;
  return (
    n[43] !== B || n[44] !== V
      ? ((H = (0, $.jsxs)(`div`, { className: `flex flex-col gap-8`, children: [B, V] })),
        (n[43] = B),
        (n[44] = V),
        (n[45] = H))
      : (H = n[45]),
    H
  );
}
function On(e) {
  return (0, $.jsx)(jt, { children: Mn.Children.toArray(e) }, `computer-history-unavailable-learn-more`);
}
function kn(e) {
  let n = (0, jn.c)(32),
    { onOpenChange: r, request: i } = e,
    a = f(s),
    o = E(Ze),
    c = i != null,
    l;
  n[0] !== o || n[1] !== r || n[2] !== i || n[3] !== a
    ? ((l = (e) => {
        (e.preventDefault(),
          i != null &&
            !o.isPending &&
            o.mutate(i, {
              onSuccess: () => r(!1),
              onError: () => {
                a.get(R).danger(
                  (0, $.jsx)(d, {
                    id: `settings.chronicle.history.clearErrorToast`,
                    defaultMessage: `Computer history could not be cleared`,
                    description: `Toast shown when clearing Computer history fails`,
                  }),
                  { errorAnalytics: { toastId: `settings.chronicle.history.clearErrorToast` } },
                );
              },
            }));
      }),
      (n[0] = o),
      (n[1] = r),
      (n[2] = i),
      (n[3] = a),
      (n[4] = l))
    : (l = n[4]);
  let u;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, $.jsx)(j, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(d, {
            id: `settings.chronicle.history.clearDialogAccessibleTitle`,
            defaultMessage: `Clear computer history`,
            description: `Accessible title for clear Computer history dialog`,
          }),
        }),
      })),
      (n[5] = u))
    : (u = n[5]);
  let p = i?.scope,
    m;
  n[6] === p ? (m = n[7]) : ((m = (0, $.jsx)(An, { scope: p })), (n[6] = p), (n[7] = m));
  let h;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(d, {
        id: `settings.chronicle.history.clearDialogDescription`,
        defaultMessage: `Your actions and any memories created from them will be deleted. This cannot be undone.`,
        description: `Clear Computer history confirmation description`,
      })),
      (n[8] = h))
    : (h = n[8]);
  let g;
  n[9] === m
    ? (g = n[10])
    : ((g = (0, $.jsxs)(te, { children: [u, (0, $.jsx)(N, { title: m, subtitle: h })] })),
      (n[9] = m),
      (n[10] = g));
  let _;
  n[11] === r ? (_ = n[12]) : ((_ = () => r(!1)), (n[11] = r), (n[12] = _));
  let v;
  n[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, $.jsx)(d, {
        id: `settings.chronicle.history.clearCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel clearing Computer history`,
      })),
      (n[13] = v))
    : (v = n[13]);
  let y;
  n[14] === _
    ? (y = n[15])
    : ((y = (0, $.jsx)(t, { color: `ghost`, type: `button`, onClick: _, children: v })),
      (n[14] = _),
      (n[15] = y));
  let b;
  n[16] === i?.scope
    ? (b = n[17])
    : ((b =
        i?.scope === `interval`
          ? (0, $.jsx)(d, {
              id: `settings.chronicle.history.deleteConfirm`,
              defaultMessage: `Delete`,
              description: `Confirm deleting a Computer history item`,
            })
          : (0, $.jsx)(d, {
              id: `settings.chronicle.history.clearConfirm`,
              defaultMessage: `Clear`,
              description: `Confirm clearing Computer history`,
            })),
      (n[16] = i?.scope),
      (n[17] = b));
  let x;
  n[18] !== o.isPending || n[19] !== b
    ? ((x = (0, $.jsx)(t, { color: `danger`, loading: o.isPending, type: `submit`, children: b })),
      (n[18] = o.isPending),
      (n[19] = b),
      (n[20] = x))
    : (x = n[20]);
  let S;
  n[21] !== y || n[22] !== x
    ? ((S = (0, $.jsx)(te, { children: (0, $.jsxs)(K, { children: [y, x] }) })),
      (n[21] = y),
      (n[22] = x),
      (n[23] = S))
    : (S = n[23]);
  let C;
  n[24] !== S || n[25] !== l || n[26] !== g
    ? ((C = (0, $.jsxs)(U, { as: `form`, onSubmit: l, children: [g, S] })),
      (n[24] = S),
      (n[25] = l),
      (n[26] = g),
      (n[27] = C))
    : (C = n[27]);
  let w;
  return (
    n[28] !== r || n[29] !== c || n[30] !== C
      ? ((w = (0, $.jsx)(re, { open: c, onOpenChange: r, showDialogClose: !0, children: C })),
        (n[28] = r),
        (n[29] = c),
        (n[30] = C),
        (n[31] = w))
      : (w = n[31]),
    w
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
          ? ((e = (0, $.jsx)(d, {
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
          ? ((e = (0, $.jsx)(d, {
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
          ? ((e = (0, $.jsx)(d, {
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
          ? ((e = (0, $.jsx)(d, {
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
          ? ((e = (0, $.jsx)(d, {
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
    ((jn = Y()),
      x(),
      G(),
      (Mn = pe()),
      V(),
      q(),
      ce(),
      I(),
      ne(),
      _(),
      lt(),
      ze(),
      xe(),
      Te(),
      he(),
      oe(),
      ue(),
      Ne(),
      ve(),
      Ee(),
      B(),
      Be(),
      p(),
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
      ($ = de()));
  }))();
}
Nn();
export { En as ComputerHistorySettingsPage };
//# sourceMappingURL=chronicle-settings-page-71e1cb42fb82.js.map
