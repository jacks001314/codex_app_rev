import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  ADt as n,
  Cot as r,
  Ext as i,
  HT as a,
  IDt as o,
  Iot as s,
  Ixt as c,
  JC as l,
  JG as u,
  Lot as d,
  Pxt as f,
  SJ as p,
  TJ as m,
  VDt as ee,
  VT as h,
  Vxt as g,
  Xot as _,
  Yot as v,
  _O as y,
  _xt as b,
  cO as x,
  fO as S,
  frt as C,
  gO as te,
  hot as w,
  hrt as ne,
  i3 as T,
  iw as E,
  jDt as D,
  lot as O,
  mO as k,
  nst as A,
  oO as re,
  qC as j,
  qG as M,
  r3 as N,
  sO as P,
  t3 as F,
  tst as I,
  tw as L,
  vO as R,
  vzt as z,
  wot as B,
  xG as ie,
  xMt as V,
  yzt as H,
} from "./app-shared-bbfeca5e5737.js";
import {
  DPn as ae,
  Ek as U,
  Gg as W,
  JPn as oe,
  Kg as se,
  MRt as ce,
  NRt as le,
  QDr as ue,
  TPn as G,
  Tk as de,
  XDr as fe,
  XPn as K,
  Ymr as pe,
  _F as me,
  eDr as q,
  eF as he,
  ehr as ge,
  hF as _e,
  iDr as ve,
  tF as ye,
  xPn as be,
  yPn as xe,
} from "./app-initial-5851df3f6cb1.js";
import { i as Se, n as Ce, r as we, t as Te } from "./phone-number-input-9269834fc476.js";
import { n as Ee, t as De } from "./parsePhoneNumber-4ef2d042ec5d.js";
import {
  a as Oe,
  f as ke,
  i as Ae,
  m as je,
  n as Me,
  p as Ne,
  r as Pe,
  t as Fe,
} from "./chatgpt_trusted_contact-a7fbed382f14.js";
import { i as Ie, n as Le, r as Re, t as ze } from "./client-89a8ad747a31.js";
import { n as Be, t as Ve } from "./trusted-contact-hero-1486436cbad6.js";
function He(e) {
  let n = (0, J.c)(48),
    { open: r, onClose: i, onContinue: a, korea: s } = e,
    [c, l] = (0, Y.useState)(null),
    u;
  n[0] === i
    ? (u = n[1])
    : ((u = (e) => {
        e || i();
      }),
      (n[0] = i),
      (n[1] = u));
  let d;
  n[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((d = (0, X.jsx)(Ve, {})), (n[2] = d)) : (d = n[2]);
  let f;
  n[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(x, { title: (0, X.jsx)(y, { children: (0, X.jsx)(o, { ...Z.introTitle }) }) })),
      (n[3] = f))
    : (f = n[3]);
  let m;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, X.jsx)(te, {
        asChild: !0,
        children: (0, X.jsxs)(`div`, {
          className: `space-y-4 text-sm text-secondary`,
          children: [
            (0, X.jsx)(`p`, { children: (0, X.jsx)(o, { ...Z.introOne, values: { bold: Ge } }) }),
            (0, X.jsx)(`p`, { children: (0, X.jsx)(o, { ...Z.introTwo }) }),
          ],
        }),
      })),
      (n[4] = m))
    : (m = n[4]);
  let ee = c === `expect`,
    h,
    g;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (e) => {
        (e.preventDefault(), l(We));
      }),
      (g = (0, X.jsx)(o, { ...Z.expect })),
      (n[5] = h),
      (n[6] = g))
    : ((h = n[5]), (g = n[6]));
  let _;
  n[7] === c
    ? (_ = n[8])
    : ((_ = (0, X.jsxs)(`summary`, {
        className: `flex cursor-interaction items-center justify-between gap-3 text-sm font-semibold`,
        onClick: h,
        children: [g, c === `expect` ? (0, X.jsx)(p, {}) : (0, X.jsx)(M, {})],
      })),
      (n[7] = c),
      (n[8] = _));
  let v;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, X.jsxs)(`ul`, {
        className: `mt-3 list-disc space-y-2 ps-5 text-sm text-secondary`,
        children: [
          (0, X.jsx)(`li`, { children: (0, X.jsx)(o, { ...Z.expectOne }) }),
          (0, X.jsx)(`li`, { children: (0, X.jsx)(o, { ...Z.expectTwo }) }),
          (0, X.jsx)(`li`, { children: (0, X.jsx)(o, { ...Z.expectThree }) }),
        ],
      })),
      (n[9] = v))
    : (v = n[9]);
  let b;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(xe, {
        className: `mt-3 inline-block text-sm`,
        appearance: `secondary`,
        href: Ze,
        initiator: `open_in_browser_bridge`,
        openTarget: `external-browser`,
        children: (0, X.jsx)(o, { ...Z.learn }),
      })),
      (n[10] = b))
    : (b = n[10]);
  let S;
  n[11] !== ee || n[12] !== _
    ? ((S = (0, X.jsxs)(`details`, { className: `py-3`, open: ee, children: [_, v, b] })),
      (n[11] = ee),
      (n[12] = _),
      (n[13] = S))
    : (S = n[13]);
  let C = c === `who`,
    w,
    ne;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (e) => {
        (e.preventDefault(), l(Ue));
      }),
      (ne = (0, X.jsx)(o, { ...Z.who })),
      (n[14] = w),
      (n[15] = ne))
    : ((w = n[14]), (ne = n[15]));
  let T;
  n[16] === c
    ? (T = n[17])
    : ((T = (0, X.jsxs)(`summary`, {
        className: `flex cursor-interaction items-center justify-between gap-3 text-sm font-semibold`,
        onClick: w,
        children: [ne, c === `who` ? (0, X.jsx)(p, {}) : (0, X.jsx)(M, {})],
      })),
      (n[16] = c),
      (n[17] = T));
  let E = s ? Z.whoOneKorea : Z.whoOne,
    D;
  n[18] === E
    ? (D = n[19])
    : ((D = (0, X.jsx)(`li`, { children: (0, X.jsx)(o, { ...E }) })), (n[18] = E), (n[19] = D));
  let O, A;
  n[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, X.jsx)(`li`, { children: (0, X.jsx)(o, { ...Z.whoTwo }) })),
      (A = (0, X.jsx)(`li`, { children: (0, X.jsx)(o, { ...Z.whoThree }) })),
      (n[20] = O),
      (n[21] = A))
    : ((O = n[20]), (A = n[21]));
  let j;
  n[22] === D
    ? (j = n[23])
    : ((j = (0, X.jsxs)(`ul`, {
        className: `mt-3 list-disc space-y-2 ps-5 text-sm text-secondary`,
        children: [D, O, A],
      })),
      (n[22] = D),
      (n[23] = j));
  let N;
  n[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, X.jsx)(xe, {
        className: `mt-3 inline-block text-sm`,
        appearance: `secondary`,
        href: $e,
        initiator: `open_in_browser_bridge`,
        openTarget: `external-browser`,
        children: (0, X.jsx)(o, { ...Z.learn }),
      })),
      (n[24] = N))
    : (N = n[24]);
  let F;
  n[25] !== C || n[26] !== T || n[27] !== j
    ? ((F = (0, X.jsxs)(`details`, { className: `py-3`, open: C, children: [T, j, N] })),
      (n[25] = C),
      (n[26] = T),
      (n[27] = j),
      (n[28] = F))
    : (F = n[28]);
  let I;
  n[29] !== S || n[30] !== F
    ? ((I = (0, X.jsxs)(`div`, {
        className: `flex min-h-0 flex-col gap-5 overflow-y-auto p-6`,
        children: [
          f,
          m,
          (0, X.jsxs)(`div`, {
            className: `divide-primary-outline divide-y border-y border-primary-outline`,
            children: [S, F],
          }),
        ],
      })),
      (n[29] = S),
      (n[30] = F),
      (n[31] = I))
    : (I = n[31]);
  let L;
  n[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, X.jsx)(o, { ...Z.close })), (n[32] = L))
    : (L = n[32]);
  let R;
  n[33] === i
    ? (R = n[34])
    : ((R = (0, X.jsx)(t, { color: `secondary`, radius: `full`, onClick: i, children: L })),
      (n[33] = i),
      (n[34] = R));
  let z;
  n[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, X.jsx)(o, { ...Z.continue })), (n[35] = z))
    : (z = n[35]);
  let B;
  n[36] === a
    ? (B = n[37])
    : ((B = (0, X.jsx)(t, {
        radius: `full`,
        onClick: a,
        "data-testid": `trusted-contact-intro-continue`,
        children: z,
      })),
      (n[36] = a),
      (n[37] = B));
  let ie;
  n[38] !== R || n[39] !== B
    ? ((ie = (0, X.jsxs)(P, { className: `shrink-0 p-6`, children: [R, B] })),
      (n[38] = R),
      (n[39] = B),
      (n[40] = ie))
    : (ie = n[40]);
  let V;
  n[41] !== I || n[42] !== ie
    ? ((V = (0, X.jsxs)(re, {
        variant: `chatgpt`,
        className: `max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-hidden`,
        children: [d, I, ie],
      })),
      (n[41] = I),
      (n[42] = ie),
      (n[43] = V))
    : (V = n[43]);
  let H;
  return (
    n[44] !== r || n[45] !== u || n[46] !== V
      ? ((H = (0, X.jsx)(k, {
          open: r,
          onOpenChange: u,
          size: `beacon`,
          radius: `compact`,
          overlayClassName: `bg-text/5 backdrop-blur-sm`,
          children: V,
        })),
        (n[44] = r),
        (n[45] = u),
        (n[46] = V),
        (n[47] = H))
      : (H = n[47]),
    H
  );
}
function Ue(e) {
  return e === `who` ? null : `who`;
}
function We(e) {
  return e === `expect` ? null : `expect`;
}
function Ge(e) {
  return (0, X.jsx)(`strong`, { className: `text-default`, children: e }, `trusted-contact`);
}
function Ke(e) {
  let n = (0, J.c)(72),
    { open: r, onClose: i, onSubmit: a, pending: s, korea: c, defaultPhoneCountry: l } = e,
    u = l === void 0 ? `US` : l,
    d = ee(),
    [f, p] = (0, Y.useState)(``),
    [m, g] = (0, Y.useState)(``),
    [_, v] = (0, Y.useState)(``),
    [b, S] = (0, Y.useState)(!1),
    [C, w] = (0, Y.useState)(!1),
    ne = (0, Y.useRef)(!1),
    T;
  n[0] !== b || n[1] !== _ || n[2] !== f || n[3] !== a || n[4] !== s || n[5] !== m
    ? ((T = (e) => {
        e.preventDefault();
        let t = et.test(_.trim());
        (w(!t),
          f.trim() &&
            b &&
            t &&
            !s &&
            !ne.current &&
            ((ne.current = !0),
            a({
              name: f.trim(),
              email: _.trim(),
              phone_number: m.trim() || null,
              relationship: null,
            }).finally(() => {
              ne.current = !1;
            })));
      }),
      (n[0] = b),
      (n[1] = _),
      (n[2] = f),
      (n[3] = a),
      (n[4] = s),
      (n[5] = m),
      (n[6] = T))
    : (T = n[6]);
  let E = T,
    D;
  n[7] === i
    ? (D = n[8])
    : ((D = (e) => {
        e || i();
      }),
      (n[7] = i),
      (n[8] = D));
  let O;
  n[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, X.jsx)(x, { title: (0, X.jsx)(y, { children: (0, X.jsx)(o, { ...Z.inviteTitle }) }) })),
      (n[9] = O))
    : (O = n[9]);
  let A;
  n[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, X.jsx)(te, {
        asChild: !0,
        children: (0, X.jsx)(`p`, {
          className: `text-sm`,
          children: (0, X.jsx)(o, { ...Z.inviteDescription, values: { learnMoreLink: qe } }),
        }),
      })),
      (n[10] = A))
    : (A = n[10]);
  let j;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, X.jsx)(`span`, { children: (0, X.jsx)(o, { ...Z.name }) })), (n[11] = j))
    : (j = n[11]);
  let M;
  n[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (e) => p(e.target.value)), (n[12] = M))
    : (M = n[12]);
  let N;
  n[13] === d ? (N = n[14]) : ((N = d.formatMessage(Z.namePlaceholder)), (n[13] = d), (n[14] = N));
  let F;
  n[15] !== f || n[16] !== N
    ? ((F = (0, X.jsxs)(`label`, {
        className: `block space-y-2 text-sm font-medium`,
        htmlFor: `trusted-contact-name`,
        children: [
          j,
          (0, X.jsx)(G, {
            id: `trusted-contact-name`,
            name: `trusted-contact-name`,
            value: f,
            onChange: M,
            placeholder: N,
            "data-testid": `trusted-contact-name-input`,
            autoComplete: `name`,
          }),
        ],
      })),
      (n[15] = f),
      (n[16] = N),
      (n[17] = F))
    : (F = n[17]);
  let I;
  n[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, X.jsx)(`label`, {
        htmlFor: `trusted-contact-phone`,
        children: (0, X.jsx)(o, { ...Z.phone }),
      })),
      (n[18] = I))
    : (I = n[18]);
  let L;
  n[19] === d ? (L = n[20]) : ((L = d.formatMessage(Z.phonePlaceholder)), (n[19] = d), (n[20] = L));
  let R;
  n[21] !== u || n[22] !== m || n[23] !== L
    ? ((R = (0, X.jsxs)(`div`, {
        className: `space-y-2 text-sm font-medium`,
        children: [
          I,
          (0, X.jsx)(Te, {
            id: `trusted-contact-phone`,
            name: `trusted-contact-phone`,
            value: m,
            onChange: g,
            placeholder: L,
            defaultCountry: u,
            "data-testid": `trusted-contact-phone-input`,
            autoComplete: `tel`,
          }),
        ],
      })),
      (n[21] = u),
      (n[22] = m),
      (n[23] = L),
      (n[24] = R))
    : (R = n[24]);
  let z;
  n[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, X.jsx)(`label`, {
        htmlFor: `trusted-contact-email`,
        children: (0, X.jsx)(o, { ...Z.email }),
      })),
      (n[25] = z))
    : (z = n[25]);
  let B;
  n[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => {
        (v(e.target.value), w(!1));
      }),
      (n[26] = B))
    : (B = n[26]);
  let ie = C ? `trusted-contact-email-error` : void 0,
    V;
  n[27] === d ? (V = n[28]) : ((V = d.formatMessage(Z.emailPlaceholder)), (n[27] = d), (n[28] = V));
  let H;
  n[29] !== _ || n[30] !== C || n[31] !== ie || n[32] !== V
    ? ((H = (0, X.jsx)(G, {
        id: `trusted-contact-email`,
        name: `trusted-contact-email`,
        type: `email`,
        value: _,
        onChange: B,
        "aria-invalid": C,
        "aria-describedby": ie,
        placeholder: V,
        "data-testid": `trusted-contact-email-input`,
        autoComplete: `email`,
      })),
      (n[29] = _),
      (n[30] = C),
      (n[31] = ie),
      (n[32] = V),
      (n[33] = H))
    : (H = n[33]);
  let ae;
  n[34] === C
    ? (ae = n[35])
    : ((ae = C
        ? (0, X.jsx)(`span`, {
            id: `trusted-contact-email-error`,
            className: `text-danger`,
            role: `alert`,
            children: (0, X.jsx)(o, { ...Z.invalidEmail }),
          })
        : null),
      (n[34] = C),
      (n[35] = ae));
  let U;
  n[36] !== H || n[37] !== ae
    ? ((U = (0, X.jsxs)(`div`, { className: `space-y-2 text-sm font-medium`, children: [z, H, ae] })),
      (n[36] = H),
      (n[37] = ae),
      (n[38] = U))
    : (U = n[38]);
  let W;
  n[39] !== d || n[40] !== c
    ? ((W = d.formatMessage(c ? Z.consentKorea : Z.consent)), (n[39] = d), (n[40] = c), (n[41] = W))
    : (W = n[41]);
  let oe;
  n[42] !== b || n[43] !== W
    ? ((oe = (0, X.jsx)(h, {
        id: `trusted-contact-consent-checkbox`,
        checked: b,
        onCheckedChange: S,
        "aria-label": W,
      })),
      (n[42] = b),
      (n[43] = W),
      (n[44] = oe))
    : (oe = n[44]);
  let se = c ? Z.consentKorea : Z.consent,
    ce;
  n[45] === se
    ? (ce = n[46])
    : ((ce = (0, X.jsx)(`label`, {
        htmlFor: `trusted-contact-consent-checkbox`,
        className: `cursor-interaction`,
        children: (0, X.jsx)(o, { ...se }),
      })),
      (n[45] = se),
      (n[46] = ce));
  let le;
  n[47] !== oe || n[48] !== ce
    ? ((le = (0, X.jsxs)(`div`, {
        className: `relative flex items-start gap-3 text-sm leading-5`,
        children: [oe, ce],
      })),
      (n[47] = oe),
      (n[48] = ce),
      (n[49] = le))
    : (le = n[49]);
  let ue;
  n[50] !== R || n[51] !== U || n[52] !== le || n[53] !== F
    ? ((ue = (0, X.jsxs)(`div`, { className: `space-y-4`, children: [F, R, U, le] })),
      (n[50] = R),
      (n[51] = U),
      (n[52] = le),
      (n[53] = F),
      (n[54] = ue))
    : (ue = n[54]);
  let de;
  n[55] !== b || n[56] !== _ || n[57] !== f || n[58] !== s
    ? ((de = !f.trim() || !_.trim() || !b || s),
      (n[55] = b),
      (n[56] = _),
      (n[57] = f),
      (n[58] = s),
      (n[59] = de))
    : (de = n[59]);
  let fe;
  n[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, X.jsx)(o, { ...Z.send })), (n[60] = fe))
    : (fe = n[60]);
  let K;
  n[61] !== s || n[62] !== de
    ? ((K = (0, X.jsx)(P, {
        expandSingleButton: !1,
        children: (0, X.jsx)(t, {
          radius: `full`,
          type: `submit`,
          disabled: de,
          loading: s,
          "data-testid": `trusted-contact-save-button`,
          children: fe,
        }),
      })),
      (n[61] = s),
      (n[62] = de),
      (n[63] = K))
    : (K = n[63]);
  let pe;
  n[64] !== E || n[65] !== ue || n[66] !== K
    ? ((pe = (0, X.jsxs)(re, {
        as: `form`,
        onSubmit: E,
        className: `gap-5`,
        size: `viewport`,
        noValidate: !0,
        children: [O, A, ue, K],
      })),
      (n[64] = E),
      (n[65] = ue),
      (n[66] = K),
      (n[67] = pe))
    : (pe = n[67]);
  let me;
  return (
    n[68] !== r || n[69] !== pe || n[70] !== D
      ? ((me = (0, X.jsx)(k, { open: r, onOpenChange: D, size: `default`, children: pe })),
        (n[68] = r),
        (n[69] = pe),
        (n[70] = D),
        (n[71] = me))
      : (me = n[71]),
    me
  );
}
function qe(e) {
  return (0, X.jsx)(
    xe,
    {
      appearance: `secondary`,
      href: Ze,
      initiator: `open_in_browser_bridge`,
      openTarget: `external-browser`,
      children: e,
    },
    `trusted-contact-help`,
  );
}
function Je(e) {
  let n = (0, J.c)(47),
    { kind: r, open: i, contact: a, onClose: s, onTryAgain: c, onPersonalNote: l, onSettings: u } = e,
    d = ee(),
    f = r === `success`,
    p;
  n[0] === d ? (p = n[1]) : ((p = d.formatMessage(Z.subject)), (n[0] = d), (n[1] = p));
  let m = p,
    h;
  n[2] === d
    ? (h = n[3])
    : ((h = d.formatMessage(Z.body, {
        paragraphBreak: `

`,
      })),
      (n[2] = d),
      (n[3] = h));
  let g = h,
    _ = a?.email
      ? `mailto:${encodeURIComponent(a.email)}?subject=${encodeURIComponent(m)}&body=${encodeURIComponent(g)}`
      : void 0,
    v = f ? Z.sentReference : Z.unavailableReference,
    b = f ? Z.sentFallback : Z.unavailableFallback,
    S;
  if (n[4] !== a?.email || n[5] !== a?.name || n[6] !== b || n[7] !== d || n[8] !== v) {
    let e = a?.name?.trim(),
      t = a?.email?.trim();
    ((S = e && t ? d.formatMessage(v, { contactName: e, contactMethod: t }) : e || t || d.formatMessage(b)),
      (n[4] = a?.email),
      (n[5] = a?.name),
      (n[6] = b),
      (n[7] = d),
      (n[8] = v),
      (n[9] = S));
  } else S = n[9];
  let C = S,
    w;
  n[10] === s
    ? (w = n[11])
    : ((w = (e) => {
        e || s();
      }),
      (n[10] = s),
      (n[11] = w));
  let ne = f ? void 0 : `max-sm:mx-auto max-sm:max-w-64`,
    T = f ? Z.sent : Z.unavailable,
    E;
  n[12] === T
    ? (E = n[13])
    : ((E = (0, X.jsx)(y, { children: (0, X.jsx)(o, { ...T }) })), (n[12] = T), (n[13] = E));
  let D;
  n[14] !== ne || n[15] !== E
    ? ((D = (0, X.jsx)(x, { className: `items-center`, titleClassName: ne, title: E })),
      (n[14] = ne),
      (n[15] = E),
      (n[16] = D))
    : (D = n[16]);
  let O;
  n[17] === C
    ? (O = n[18])
    : ((O = (0, X.jsx)(`p`, { className: `text-sm font-medium`, children: C })), (n[17] = C), (n[18] = O));
  let A;
  n[19] !== s || n[20] !== u || n[21] !== f
    ? ((A = (0, X.jsx)(te, {
        asChild: !0,
        children: (0, X.jsx)(`p`, {
          className: `text-sm text-secondary`,
          children: f
            ? (0, X.jsx)(o, {
                ...Z.sentDescription,
                values: {
                  settingsLink: (e) =>
                    (0, X.jsx)(
                      `button`,
                      { type: `button`, className: `underline`, onClick: u ?? s, children: e },
                      `trusted-contact-settings`,
                    ),
                },
              })
            : (0, X.jsx)(o, { ...Z.unavailableDescription, values: { helpCenterLink: Ye } }),
        }),
      })),
      (n[19] = s),
      (n[20] = u),
      (n[21] = f),
      (n[22] = A))
    : (A = n[22]);
  let j;
  n[23] !== _ || n[24] !== l || n[25] !== f
    ? ((j =
        f && _
          ? (0, X.jsx)(t, {
              className: `w-full justify-center`,
              radius: `full`,
              onClick: (e) => {
                (l?.(),
                  K({ event: e, href: _, initiator: `open_in_browser_bridge` }) || window.location.assign(_));
              },
              "data-testid": `trusted-contact-invite-success-personal-note`,
              children: (0, X.jsx)(o, { ...Z.note }),
            })
          : null),
      (n[23] = _),
      (n[24] = l),
      (n[25] = f),
      (n[26] = j))
    : (j = n[26]);
  let M;
  n[27] !== c || n[28] !== f
    ? ((M = f
        ? null
        : (0, X.jsx)(t, {
            className: `w-full justify-center`,
            radius: `full`,
            onClick: c,
            "data-testid": `trusted-contact-unavailable-add-someone-else`,
            children: (0, X.jsx)(o, { ...Z.another }),
          })),
      (n[27] = c),
      (n[28] = f),
      (n[29] = M))
    : (M = n[29]);
  let N = f ? `trusted-contact-invite-success-close` : `trusted-contact-unavailable-close`,
    F;
  n[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, X.jsx)(o, { ...Z.close })), (n[30] = F))
    : (F = n[30]);
  let I;
  n[31] !== s || n[32] !== N
    ? ((I = (0, X.jsx)(t, {
        className: `w-full justify-center`,
        radius: `full`,
        color: `secondary`,
        onClick: s,
        "data-testid": N,
        children: F,
      })),
      (n[31] = s),
      (n[32] = N),
      (n[33] = I))
    : (I = n[33]);
  let L;
  n[34] !== j || n[35] !== M || n[36] !== I
    ? ((L = (0, X.jsxs)(P, { className: `mt-4 flex-col`, children: [j, M, I] })),
      (n[34] = j),
      (n[35] = M),
      (n[36] = I),
      (n[37] = L))
    : (L = n[37]);
  let R;
  n[38] !== A || n[39] !== L || n[40] !== D || n[41] !== O
    ? ((R = (0, X.jsxs)(re, { className: `gap-5 text-center`, size: `viewport`, children: [D, O, A, L] })),
      (n[38] = A),
      (n[39] = L),
      (n[40] = D),
      (n[41] = O),
      (n[42] = R))
    : (R = n[42]);
  let z;
  return (
    n[43] !== i || n[44] !== R || n[45] !== w
      ? ((z = (0, X.jsx)(k, { open: i, onOpenChange: w, size: `default`, children: R })),
        (n[43] = i),
        (n[44] = R),
        (n[45] = w),
        (n[46] = z))
      : (z = n[46]),
    z
  );
}
function Ye(e) {
  return (0, X.jsx)(
    xe,
    {
      appearance: `secondary`,
      href: Qe,
      initiator: `open_in_browser_bridge`,
      openTarget: `external-browser`,
      children: e,
    },
    `trusted-contact-help`,
  );
}
function Xe(e) {
  let n = (0, J.c)(26),
    { open: r, name: i, pending: a, onClose: s, onConfirm: c } = e,
    l;
  n[0] === s
    ? (l = n[1])
    : ((l = (e) => {
        e || s();
      }),
      (n[0] = s),
      (n[1] = l));
  let u;
  n[2] !== c || n[3] !== a
    ? ((u = (e) => {
        (e.preventDefault(), a || c());
      }),
      (n[2] = c),
      (n[3] = a),
      (n[4] = u))
    : (u = n[4]);
  let d;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, X.jsx)(x, {
        className: `items-center`,
        title: (0, X.jsx)(y, { children: (0, X.jsx)(o, { ...Z.removeTitle }) }),
      })),
      (n[5] = d))
    : (d = n[5]);
  let f;
  n[6] === i
    ? (f = n[7])
    : ((f = (0, X.jsx)(te, { children: (0, X.jsx)(o, { ...Z.removeDescription, values: { name: i } }) })),
      (n[6] = i),
      (n[7] = f));
  let p;
  n[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, X.jsx)(o, { ...Z.remove })), (n[8] = p))
    : (p = n[8]);
  let m;
  n[9] === a
    ? (m = n[10])
    : ((m = (0, X.jsx)(t, {
        className: `w-full justify-center`,
        radius: `full`,
        type: `submit`,
        color: `danger`,
        disabled: a,
        loading: a,
        "data-testid": `trusted-contact-remove-confirm-button`,
        children: p,
      })),
      (n[9] = a),
      (n[10] = m));
  let ee;
  n[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, X.jsx)(o, { ...Z.goBack })), (n[11] = ee))
    : (ee = n[11]);
  let h;
  n[12] !== s || n[13] !== a
    ? ((h = (0, X.jsx)(t, {
        className: `w-full justify-center`,
        radius: `full`,
        type: `button`,
        disabled: a,
        color: `secondary`,
        onClick: s,
        "data-testid": `trusted-contact-remove-cancel-button`,
        children: ee,
      })),
      (n[12] = s),
      (n[13] = a),
      (n[14] = h))
    : (h = n[14]);
  let g;
  n[15] !== m || n[16] !== h
    ? ((g = (0, X.jsxs)(P, { className: `mt-4 flex-col`, children: [m, h] })),
      (n[15] = m),
      (n[16] = h),
      (n[17] = g))
    : (g = n[17]);
  let _;
  n[18] !== u || n[19] !== f || n[20] !== g
    ? ((_ = (0, X.jsxs)(re, {
        as: `form`,
        onSubmit: u,
        className: `gap-5 text-center`,
        size: `viewport`,
        children: [d, f, g],
      })),
      (n[18] = u),
      (n[19] = f),
      (n[20] = g),
      (n[21] = _))
    : (_ = n[21]);
  let v;
  return (
    n[22] !== r || n[23] !== l || n[24] !== _
      ? ((v = (0, X.jsx)(k, { open: r, onOpenChange: l, size: `compact`, children: _ })),
        (n[22] = r),
        (n[23] = l),
        (n[24] = _),
        (n[25] = v))
      : (v = n[25]),
    v
  );
}
var J, Y, X, Ze, Qe, $e, et, Z;
function tt() {
  return (tt = e(() => {
    ((J = z()),
      (Y = H()),
      D(),
      F(),
      a(),
      R(),
      S(),
      be(),
      oe(),
      m(),
      ae(),
      Be(),
      Ce(),
      (X = V()),
      (Ze = `https://help.openai.com/articles/20001105`),
      (Qe = `https://help.openai.com/en/articles/20001105-trusted-contacts-in-chatgpt#faq`),
      ($e = `https://help.openai.com/articles/20001194`),
      (et =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/),
      (Z = n({
        introTitle: {
          id: `settingsModal.trustedContacts.infoModal.title.v2`,
          defaultMessage: `Adding a trusted contact`,
          description: `Title for the trusted contact explainer.`,
        },
        introOne: {
          id: `settingsModal.trustedContacts.infoModal.introBodyPrimary.v2`,
          defaultMessage: `When things feel heavy, it can be hard to reach out for help. Having a <bold>trusted contact</bold> can make it easier to get support from someone who knows you well.`,
          description: `First paragraph in the owner's trusted contact explainer in ChatGPT settings. <bold> emphasizes 'trusted contact', an adult chosen by the user who may be notified when the user needs support.`,
        },
        introTwo: {
          id: `settingsModal.trustedContacts.infoModal.introBodySecondary.v2`,
          defaultMessage: `In the future, if you discuss suicide with ChatGPT in a way that indicates a serious safety concern, we may automatically notify your trusted contact so they can check in with you.`,
          description: `Second paragraph in the owner's trusted contact explainer. 'We' means OpenAI; 'you' is the ChatGPT user and 'your trusted contact' is the adult the user invites. Notification may follow ChatGPT's detection of a serious suicide-related safety concern, not every mention of suicide.`,
        },
        expect: {
          id: `settingsModal.trustedContacts.infoModal.whatToExpectHeading`,
          defaultMessage: `What to expect`,
          description: `Explainer accordion heading.`,
        },
        expectOne: {
          id: `settingsModal.trustedContacts.infoModal.whatToExpectBulletOne.v2`,
          defaultMessage: `You’ll invite someone to be your trusted contact. They can choose whether to participate.`,
          description: `Explainer: invitation.`,
        },
        expectTwo: {
          id: `settingsModal.trustedContacts.infoModal.whatToExpectBulletTwo.v2`,
          defaultMessage: `In the future, if it seems you may need support, we’ll let them know. We’ll only share the general reason — that suicide came up in a potentially concerning way — and encourage them to check in with you. We won’t share your chat details or transcripts.`,
          description: `Trusted contact explainer bullet on notification privacy. 'Them' refers to the invited contact and 'we' means OpenAI. ChatGPT may share only that suicide came up in a potentially concerning way, not the user's chat details or transcripts.`,
        },
        expectThree: {
          id: `settingsModal.trustedContacts.infoModal.whatToExpectBulletThree.v2`,
          defaultMessage: `Your trusted contact’s role is to check in, listen, and help you find additional support if needed. They aren’t expected to handle emergencies or be your only source of support.`,
          description: `Explainer: trusted contact role.`,
        },
        who: {
          id: `settingsModal.trustedContacts.infoModal.whoToInviteHeading`,
          defaultMessage: `Who to invite`,
          description: `Explainer accordion heading.`,
        },
        whoOne: {
          id: `settingsModal.trustedContacts.infoModal.whoToInviteBulletOne.v2`,
          defaultMessage: `You can invite a friend, family member, or another trusted adult (18+) to be your trusted contact.`,
          description: `Guidance in the owner's trusted contact explainer: the invited friend, family member, or other trusted adult must be at least 18 years old.`,
        },
        whoOneKorea: {
          id: `settingsModal.trustedContacts.infoModal.whoToInviteBulletOneKorea.v1`,
          defaultMessage: `You can invite a friend, family member, or another trusted adult (19+) to be your trusted contact.`,
          description: `Guidance shown for viewers in South Korea (KR): the invited trusted adult must be 19 or older by international age (만연령), not the traditional Korean age system.`,
        },
        whoTwo: {
          id: `settingsModal.trustedContacts.infoModal.whoToInviteBulletTwo.v2`,
          defaultMessage: `Choose someone who you feel comfortable being honest with and trust to respond with care.`,
          description: `Guidance for choosing a trusted contact.`,
        },
        whoThree: {
          id: `settingsModal.trustedContacts.infoModal.whoToInviteBulletThree.v2`,
          defaultMessage: `You can change or remove your trusted contact anytime from your ChatGPT settings.`,
          description: `Trusted contact settings remain editable.`,
        },
        learn: {
          id: `settingsModal.trustedContacts.infoModal.learnMoreLinkLabel`,
          defaultMessage: `Learn more`,
          description: `Help Center link for trusted contacts.`,
        },
        close: {
          id: `settingsModal.trustedContacts.infoModal.closeButton`,
          defaultMessage: `Close`,
          description: `Dismiss trusted contact dialog.`,
        },
        continue: {
          id: `settingsModal.trustedContacts.infoModal.continueButton.v2`,
          defaultMessage: `Add a contact`,
          description: `Continue from the explainer to the invite form.`,
        },
        inviteTitle: {
          id: `settingsModal.trustedContacts.inviteModalTitle`,
          defaultMessage: `Invite a trusted contact`,
          description: `Title of the contact invitation form.`,
        },
        inviteDescription: {
          id: `settingsModal.trustedContacts.inviteModalDescription.v2`,
          defaultMessage: `Choose a friend, family member, or another trusted adult who is readily available to offer support. We’ll invite them to be your trusted contact, and they can choose whether to participate. <learnMoreLink>Learn more</learnMoreLink>`,
          description: `Intro paragraph in the owner-side trusted contact invite modal in Settings. 'They' is a singular, gender-neutral pronoun referring to the invited trusted contact. <learnMoreLink> wraps only 'Learn more' and links to a Help Center article.`,
        },
        name: {
          id: `settingsModal.trustedContacts.modalNameLabel`,
          defaultMessage: `Name`,
          description: `Contact name field label.`,
        },
        namePlaceholder: {
          id: `settingsModal.trustedContacts.modalNamePlaceholder`,
          defaultMessage: `Enter your trusted contact's full name`,
          description: `Contact name placeholder.`,
        },
        phone: {
          id: `settingsModal.trustedContacts.modalPhoneLabel`,
          defaultMessage: `Phone`,
          description: `Optional contact phone field label.`,
        },
        phonePlaceholder: {
          id: `phoneNumberInput.phoneNumberLabel`,
          defaultMessage: `Phone number`,
          description: `Placeholder in the optional trusted contact phone field.`,
        },
        email: {
          id: `settingsModal.trustedContacts.modalEmailLabel`,
          defaultMessage: `Email`,
          description: `Contact email field label.`,
        },
        emailPlaceholder: {
          id: `settingsModal.trustedContacts.modalEmailPlaceholder`,
          defaultMessage: `contact@example.com`,
          description: `Contact email placeholder.`,
        },
        consent: {
          id: `settingsModal.trustedContacts.consentTextAdultPermissionRequired.v3`,
          defaultMessage: `I confirm this person and I are 18 or older. If this person agrees to be my trusted contact, I understand and agree that OpenAI may notify them in the future if I discuss suicide with ChatGPT in a way that indicates a serious safety concern, and I agree to my data being used for this purpose. I understand this system can make mistakes and that this feature is not an emergency service or a substitute for professional care.`,
          description: `Checkbox in the owner's trusted contact invite modal. 'This person' and 'them' refer to the invited adult. 'My data' means the user's ChatGPT messages used to assess suicide risk for this notification, not other account data. 'This system' means ChatGPT's safety detection, which may make mistakes.`,
        },
        consentKorea: {
          id: `settingsModal.trustedContacts.consentTextAdultPermissionRequiredKorea.v1`,
          defaultMessage: `I confirm this person and I are 19 or older. If this person agrees to be my trusted contact, I understand and agree that OpenAI may notify them in the future if I discuss suicide with ChatGPT in a way that indicates a serious safety concern, and I agree to my data being used for this purpose. I understand this system can make mistakes and that this feature is not an emergency service or a substitute for professional care.`,
          description: `Consent checkbox shown when the viewer is in South Korea (KR). Both the user and invited contact must be 19 or older by international age (만연령; translate as 만19세 이상). 'Them' refers to the invited contact. 'My data' means the user's ChatGPT messages used to assess suicide risk for notifying the contact, not account or billing data. 'This system' means ChatGPT's safety detection.`,
        },
        send: {
          id: `settingsModal.trustedContacts.addContactButton`,
          defaultMessage: `Send invitation`,
          description: `Submit trusted contact invitation.`,
        },
        invalidEmail: {
          id: `settingsModal.trustedContacts.invalidEmailError`,
          defaultMessage: `Please enter a valid email address.`,
          description: `Invalid trusted contact email message.`,
        },
        sent: {
          id: `settingsModal.trustedContacts.inviteSuccessModal.title`,
          defaultMessage: `Invitation sent`,
          description: `Confirmation dialog title.`,
        },
        sentReference: {
          id: `settingsModal.trustedContacts.inviteSuccessModal.contactReferenceWithMethod`,
          defaultMessage: `{contactName} ({contactMethod})`,
          description: `Confirmation reference after an invitation succeeds. {contactName} is the invited adult's name, and {contactMethod} is their email address; keep the placeholders in the same phrase.`,
        },
        sentFallback: {
          id: `settingsModal.trustedContacts.inviteSuccessModal.contactReferenceFallback`,
          defaultMessage: `Your trusted contact`,
          description: `Fallback confirmation contact name.`,
        },
        sentDescription: {
          id: `settingsModal.trustedContacts.inviteSuccessModal.description`,
          defaultMessage: `You can update or remove your trusted contact anytime from your <settingsLink>settings</settingsLink>.`,
          description: `Success confirmation for the ChatGPT user who invited a trusted contact. <settingsLink> wraps only 'settings' and returns to the user's ChatGPT settings.`,
        },
        note: {
          id: `settingsModal.trustedContacts.inviteSuccessModal.sendPersonalNote`,
          defaultMessage: `Send a personal note`,
          description: `Open an email draft to the trusted contact.`,
        },
        subject: {
          id: `settingsModal.trustedContacts.inviteSuccessModal.personalNoteEmailSubject`,
          defaultMessage: `Could we find time to chat?`,
          description: `Suggested personal note email subject.`,
        },
        body: {
          id: `settingsModal.trustedContacts.inviteSuccessModal.personalNoteEmailBody`,
          defaultMessage: `Hi there, {paragraphBreak}I’ve been thinking about ways to make sure I have support when I’m going through a tough time. Sometimes it’s hard for me to reach out in those moments. {paragraphBreak}There’s a feature in ChatGPT where I can add a trusted contact — someone who would get a heads-up if I might need support. I thought of you, and wanted to check how you’d feel about that.{paragraphBreak}You may have seen an invitation from ChatGPT about this already, but I wanted to reach out directly, too. If you’re open to it, maybe we could find a time to talk?`,
          description: `Suggested personal note email body.`,
        },
        unavailable: {
          id: `settingsModal.trustedContacts.unavailableModal.title`,
          defaultMessage: `Couldn’t add trusted contact`,
          description: `Contact cannot be added dialog title.`,
        },
        unavailableReference: {
          id: `settingsModal.trustedContacts.unavailableModal.contactReferenceWithMethod`,
          defaultMessage: `{contactName} ({contactMethod})`,
          description: `Reference to an invited adult who cannot be added. {contactName} is the adult's name; {contactMethod} is their email address.`,
        },
        unavailableFallback: {
          id: `settingsModal.trustedContacts.unavailableModal.contactReferenceFallback`,
          defaultMessage: `This person`,
          description: `Fallback unavailable contact name.`,
        },
        unavailableDescription: {
          id: `settingsModal.trustedContacts.unavailableModal.description.v2`,
          defaultMessage: `This can happen for different reasons — for example, they may not be eligible. <helpCenterLink>Learn more</helpCenterLink>`,
          description: `Shown when an invited adult cannot be added as a trusted contact. 'They' refers to the invited person; the exact reason is intentionally withheld. <helpCenterLink> wraps 'Learn more' and opens the Help Center.`,
        },
        another: {
          id: `settingsModal.trustedContacts.unavailableModal.addSomeoneElse`,
          defaultMessage: `Add someone else`,
          description: `Try a different trusted contact.`,
        },
        removeTitle: {
          id: `settingsModal.trustedContacts.removeConfirmation.title`,
          defaultMessage: `Are you sure?`,
          description: `Confirm removing a trusted contact.`,
        },
        removeDescription: {
          id: `settingsModal.trustedContacts.removeConfirmation.description`,
          defaultMessage: `You’re about to remove {name} as your trusted contact.`,
          description: `In the trusted contact removal confirmation, {name} is the invited adult's display name, or the fallback 'this person' if the name is unavailable.`,
        },
        goBack: {
          id: `settingsModal.trustedContacts.removeConfirmation.cancelButton`,
          defaultMessage: `Go back`,
          description: `Cancel removal.`,
        },
        remove: {
          id: `settingsModal.trustedContacts.removeConfirmation.confirmButton`,
          defaultMessage: `Remove contact`,
          description: `Confirm removal.`,
        },
      })));
  }))();
}
function nt() {
  let e = (0, ft.c)(11),
    n = c(r),
    i = g(W);
  if (i.status === `error`) {
    let r;
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(he, { slug: `trusted-contact` })), (e[0] = r))
      : (r = e[0]);
    let i;
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Q.jsx)(`p`, { role: `alert`, children: (0, Q.jsx)(o, { ...$.error }) })), (e[1] = i))
      : (i = e[1]);
    let a;
    e[2] === n.queryClient
      ? (a = e[3])
      : ((a = () => {
          n.queryClient.invalidateQueries({ queryKey: [`accounts`, `check`] });
        }),
        (e[2] = n.queryClient),
        (e[3] = a));
    let s;
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, Q.jsx)(o, { ...$.retry })), (e[4] = s))
      : (s = e[4]);
    let c;
    return (
      e[5] === a
        ? (c = e[6])
        : ((c = (0, Q.jsxs)(_e, {
            title: r,
            children: [i, (0, Q.jsx)(t, { className: `mt-4`, color: `secondary`, onClick: a, children: s })],
          })),
          (e[5] = a),
          (e[6] = c)),
      c
    );
  }
  if (i.status !== `allowed`) return null;
  let a = i.userId + `:` + i.accountId,
    s;
  return (
    e[7] !== i.accountId || e[8] !== i.userId || e[9] !== a
      ? ((s = (0, Q.jsx)(it, { userId: i.userId, accountId: i.accountId }, a)),
        (e[7] = i.accountId),
        (e[8] = i.userId),
        (e[9] = a),
        (e[10] = s))
      : (s = e[10]),
    s
  );
}
function rt(e) {
  let t = (0, ft.c)(8),
    { initialDialog: n, entryPoint: r, onClose: i, onSuccess: a } = e,
    o = g(W);
  if (o.status !== `allowed`) return null;
  let s = o.userId + `:` + o.accountId,
    c;
  return (
    t[0] !== o.accountId ||
    t[1] !== o.userId ||
    t[2] !== r ||
    t[3] !== n ||
    t[4] !== i ||
    t[5] !== a ||
    t[6] !== s
      ? ((c = (0, Q.jsx)(
          it,
          {
            userId: o.userId,
            accountId: o.accountId,
            initialDialog: n,
            entryPoint: r,
            onEnrollmentClose: i,
            onInvited: a,
          },
          s,
        )),
        (t[0] = o.accountId),
        (t[1] = o.userId),
        (t[2] = r),
        (t[3] = n),
        (t[4] = i),
        (t[5] = a),
        (t[6] = s),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function it(e) {
  let n = (0, ft.c)(168),
    { userId: a, accountId: s, initialDialog: l, entryPoint: f, onEnrollmentClose: p, onInvited: m } = e,
    h = l === void 0 ? null : l,
    g = f === void 0 ? Oe.CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_SETTINGS : f,
    v = c(r),
    y = ee(),
    b = i(),
    x = A(),
    { client: S } = ve(),
    C;
  if (n[0] !== S) {
    let e = S.getContext().user?.country;
    ((C = lt(e)), (n[0] = S), (n[1] = C));
  } else C = n[1];
  let te = C,
    T = te === `KR`,
    E;
  n[2] !== s || n[3] !== a ? ((E = Ie(a, s)), (n[2] = s), (n[3] = a), (n[4] = E)) : (E = n[4]);
  let D = E,
    O;
  n[5] === D.enabled ? (O = n[6]) : ((O = { ...D.enabled, staleTime: 3e4 }), (n[5] = D.enabled), (n[6] = O));
  let k = _(O),
    re = k.data === !0,
    M;
  n[7] !== D.list || n[8] !== re
    ? ((M = { ...D.list, staleTime: 3e4, enabled: re }), (n[7] = D.list), (n[8] = re), (n[9] = M))
    : (M = n[9]);
  let P = _(M),
    [F, I] = (0, pt.useState)(h),
    [R, z] = (0, pt.useState)(null),
    [B, V] = (0, pt.useState)(0),
    H = (0, pt.useRef)(0),
    ae;
  n[10] === s ? (ae = n[11]) : ((ae = ze(s)), (n[10] = s), (n[11] = ae));
  let U = ae,
    W = P.data?.contacts[0] ?? null,
    oe,
    se;
  (n[12] !== g || n[13] !== h || n[14] !== v
    ? ((se = () => {
        if (h != null) {
          ue(v, Ae, {
            entryPoint: g,
            step:
              h === `intro`
                ? Pe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_INTRO
                : Pe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_FORM,
          });
          return;
        }
        ue(v, Ne, { action: ke.CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_PAGE_VIEWED });
      }),
      (oe = [v, h, g]),
      (n[12] = g),
      (n[13] = h),
      (n[14] = v),
      (n[15] = oe),
      (n[16] = se))
    : ((oe = n[15]), (se = n[16])),
    (0, pt.useEffect)(se, oe));
  let le;
  n[17] !== g || n[18] !== v
    ? ((le = (e) => {
        ue(v, Ae, { entryPoint: g, step: e });
      }),
      (n[17] = g),
      (n[18] = v),
      (n[19] = le))
    : (le = n[19]);
  let G = le,
    fe;
  n[20] !== g || n[21] !== v
    ? ((fe = (e, t) => {
        ue(v, Me, { entryPoint: g, step: e, action: t });
      }),
      (n[20] = g),
      (n[21] = v),
      (n[22] = fe))
    : (fe = n[22]);
  let K = fe,
    me;
  n[23] === p
    ? (me = n[24])
    : ((me = () => {
        (I(null), p?.());
      }),
      (n[23] = p),
      (n[24] = me));
  let q = me,
    ge;
  n[25] === G
    ? (ge = n[26])
    : ((ge = () => {
        ((H.current += 1), V(ct), I(`invite`), G(Pe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_FORM));
      }),
      (n[25] = G),
      (n[26] = ge));
  let ye = ge,
    be;
  n[27] === U
    ? (be = n[28])
    : ((be = (e) => {
        let { payload: t } = e;
        return pe.safePost(`/trusted_contact`, { requestBody: t, additionalHeaders: U, isExpectedError: st });
      }),
      (n[27] = U),
      (n[28] = be));
  let xe;
  n[29] !== P.data?.contacts || n[30] !== m || n[31] !== D.list || n[32] !== x || n[33] !== G
    ? ((xe = async (e, t) => {
        let { payload: n, epoch: r } = t;
        (x.setQueryData(D.list.queryKey, {
          contacts: [
            e,
            ...(P.data?.contacts ?? []).filter((t) => t.trusted_contact_id !== e.trusted_contact_id),
          ],
        }),
          r === H.current &&
            (z({ ...n, name: e.name ?? n.name, email: e.email ?? n.email }),
            I(`success`),
            G(Pe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONFIRMATION),
            m?.()),
          await x.invalidateQueries({ queryKey: D.list.queryKey }));
      }),
      (n[29] = P.data?.contacts),
      (n[30] = m),
      (n[31] = D.list),
      (n[32] = x),
      (n[33] = G),
      (n[34] = xe))
    : (xe = n[34]);
  let Se;
  n[35] !== y || n[36] !== v || n[37] !== G
    ? ((Se = (e, t) => {
        let { payload: n, epoch: r } = t;
        r === H.current &&
          (e instanceof ne &&
          e.status === 400 &&
          (e.errorCode === `trusted-contacts-blocked-email` ||
            e.errorCode === `trusted-contacts-blocked-phone-number`)
            ? (z(n), I(`unavailable`), G(Pe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_UNAVAILABLE))
            : v
                .get(w)
                .danger(y.formatMessage($.saveError), {
                  errorAnalytics: { toastId: `trustedContactSettings.onError.saveError` },
                }));
      }),
      (n[35] = y),
      (n[36] = v),
      (n[37] = G),
      (n[38] = Se))
    : (Se = n[38]);
  let Ce;
  n[39] !== be || n[40] !== xe || n[41] !== Se
    ? ((Ce = { mutationFn: be, onSuccess: xe, onError: Se }),
      (n[39] = be),
      (n[40] = xe),
      (n[41] = Se),
      (n[42] = Ce))
    : (Ce = n[42]);
  let we = d(Ce),
    Te;
  n[43] !== U || n[44] !== y
    ? ((Te = (e) => {
        let t = Le(e, y.formatMessage($.fallback));
        if (t == null) throw Error(`Cannot resend an invitation without an email`);
        return pe.safePut(`/trusted_contact/{trusted_contact_id}`, {
          additionalHeaders: U,
          parameters: { path: { trusted_contact_id: e.trusted_contact_id } },
          requestBody: t,
        });
      }),
      (n[43] = U),
      (n[44] = y),
      (n[45] = Te))
    : (Te = n[45]);
  let Ee;
  n[46] !== y || n[47] !== D.list || n[48] !== x || n[49] !== v
    ? ((Ee = async () => {
        (v.get(w).success(y.formatMessage($.resent)),
          await x.invalidateQueries({ queryKey: D.list.queryKey }));
      }),
      (n[46] = y),
      (n[47] = D.list),
      (n[48] = x),
      (n[49] = v),
      (n[50] = Ee))
    : (Ee = n[50]);
  let De;
  n[51] !== y || n[52] !== v
    ? ((De = () =>
        v
          .get(w)
          .danger(y.formatMessage($.saveError), {
            errorAnalytics: { toastId: `trustedContactSettings.onError.saveError` },
          })),
      (n[51] = y),
      (n[52] = v),
      (n[53] = De))
    : (De = n[53]);
  let je;
  n[54] !== Te || n[55] !== Ee || n[56] !== De
    ? ((je = { mutationFn: Te, onSuccess: Ee, onError: De }),
      (n[54] = Te),
      (n[55] = Ee),
      (n[56] = De),
      (n[57] = je))
    : (je = n[57]);
  let Re = d(je),
    Be;
  n[58] === U
    ? (Be = n[59])
    : ((Be = (e) =>
        pe.safeDelete(`/trusted_contact/{trusted_contact_id}`, {
          additionalHeaders: U,
          parameters: { path: { trusted_contact_id: e.trusted_contact_id } },
        })),
      (n[58] = U),
      (n[59] = Be));
  let Ve;
  n[60] !== y || n[61] !== D.list || n[62] !== x || n[63] !== v
    ? ((Ve = async () => {
        (I(ot),
          v.get(w).success(y.formatMessage($.removed)),
          await x.invalidateQueries({ queryKey: D.list.queryKey }));
      }),
      (n[60] = y),
      (n[61] = D.list),
      (n[62] = x),
      (n[63] = v),
      (n[64] = Ve))
    : (Ve = n[64]);
  let Ue;
  n[65] !== y || n[66] !== v
    ? ((Ue = () =>
        v
          .get(w)
          .danger(y.formatMessage($.removeError), {
            errorAnalytics: { toastId: `trustedContactSettings.onError.removeError` },
          })),
      (n[65] = y),
      (n[66] = v),
      (n[67] = Ue))
    : (Ue = n[67]);
  let We;
  n[68] !== Be || n[69] !== Ve || n[70] !== Ue
    ? ((We = { mutationFn: Be, onSuccess: Ve, onError: Ue }),
      (n[68] = Be),
      (n[69] = Ve),
      (n[70] = Ue),
      (n[71] = We))
    : (We = n[71]);
  let Ge = d(We),
    qe;
  n[72] !== W?.name || n[73] !== y
    ? ((qe = W?.name?.trim() || y.formatMessage($.fallback)), (n[72] = W?.name), (n[73] = y), (n[74] = qe))
    : (qe = n[74]);
  let Ye = qe,
    J = k.isError || (k.data === !0 && P.isError),
    Y = k.isPending || (k.data === !0 && P.isPending),
    X;
  n[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, Q.jsx)(he, { slug: `trusted-contact` })), (n[75] = X))
    : (X = n[75]);
  let Ze;
  n[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ze = (0, Q.jsx)(`p`, { children: (0, Q.jsx)(o, { ...$.primary }) })), (n[76] = Ze))
    : (Ze = n[76]);
  let Qe = T ? $.secondaryKorea : $.secondary,
    $e;
  n[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($e = { learnMoreLink: at }), (n[77] = $e))
    : ($e = n[77]);
  let et;
  n[78] === Qe
    ? (et = n[79])
    : ((et = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-6`,
        children: [Ze, (0, Q.jsx)(`p`, { children: (0, Q.jsx)(o, { ...Qe, values: $e }) })],
      })),
      (n[78] = Qe),
      (n[79] = et));
  let Z;
  n[80] === Y
    ? (Z = n[81])
    : ((Z = Y
        ? (0, Q.jsxs)(`div`, {
            className: `mt-7 flex items-center gap-2 text-secondary`,
            role: `status`,
            children: [(0, Q.jsx)(N, {}), (0, Q.jsx)(o, { ...$.loading })],
          })
        : null),
      (n[80] = Y),
      (n[81] = Z));
  let tt;
  n[82] !== k || n[83] !== J || n[84] !== P
    ? ((tt = J
        ? (0, Q.jsxs)(`div`, {
            className: `mt-7 space-y-3`,
            role: `alert`,
            children: [
              (0, Q.jsx)(`p`, { children: (0, Q.jsx)(o, { ...$.error }) }),
              (0, Q.jsx)(t, {
                color: `secondary`,
                radius: `full`,
                onClick: () => void (k.isError ? k.refetch() : P.refetch()),
                children: (0, Q.jsx)(o, { ...$.retry }),
              }),
            ],
          })
        : null),
      (n[82] = k),
      (n[83] = J),
      (n[84] = P),
      (n[85] = tt))
    : (tt = n[85]);
  let nt;
  n[86] !== W || n[87] !== k.data || n[88] !== J || n[89] !== Y || n[90] !== v || n[91] !== G
    ? ((nt =
        !Y && !J && k.data === !0 && W == null
          ? (0, Q.jsx)(`div`, {
              className: `mt-7`,
              children: (0, Q.jsxs)(t, {
                color: `secondary`,
                radius: `full`,
                size: `toolbar`,
                onClick: () => {
                  (ue(v, Ne, { action: ke.CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_ADD_CLICKED }),
                    I(`intro`),
                    G(Pe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_INTRO));
                },
                "data-testid": `add-trusted-contact-button`,
                children: [(0, Q.jsx)(u, {}), (0, Q.jsx)(o, { ...$.add })],
              }),
            })
          : null),
      (n[86] = W),
      (n[87] = k.data),
      (n[88] = J),
      (n[89] = Y),
      (n[90] = v),
      (n[91] = G),
      (n[92] = nt))
    : (nt = n[92]);
  let rt;
  n[93] !== W || n[94] !== Ye || n[95] !== k.data || n[96] !== J || n[97] !== Y || n[98] !== Re
    ? ((rt =
        !Y && !J && k.data === !0 && W != null
          ? (0, Q.jsxs)(`div`, {
              className: `mt-7 space-y-5`,
              children: [
                (0, Q.jsx)(j, {
                  children: (0, Q.jsx)(L, {
                    icon: (0, Q.jsx)(ie, {}),
                    label: (0, Q.jsx)(`span`, { className: `block truncate`, children: Ye }),
                    description: (0, Q.jsxs)(`div`, {
                      className: `min-w-0`,
                      children: [
                        W.email ? (0, Q.jsx)(`p`, { className: `truncate`, children: W.email }) : null,
                        W.phone_number
                          ? (0, Q.jsx)(`p`, { className: `truncate`, children: dt(W.phone_number) })
                          : null,
                      ],
                    }),
                    control: (0, Q.jsx)(ce, {
                      variant: W.status === `pending` ? `default` : `success`,
                      children: (0, Q.jsx)(o, { ...(W.status === `pending` ? $.pending : $.active) }),
                    }),
                  }),
                }),
                (0, Q.jsxs)(`div`, {
                  className: `flex flex-wrap gap-3`,
                  children: [
                    W.status === `pending`
                      ? (0, Q.jsx)(t, {
                          color: `secondary`,
                          radius: `full`,
                          disabled: Re.isPending || Le(W, Ye) == null,
                          loading: Re.isPending,
                          onClick: () => Re.mutate(W),
                          "data-testid": `resend-trusted-contact-button`,
                          children: (0, Q.jsx)(o, { ...$.resend }),
                        })
                      : null,
                    (0, Q.jsx)(t, {
                      color: `danger`,
                      radius: `full`,
                      onClick: () => I(`remove`),
                      "data-testid":
                        W.status === `pending`
                          ? `cancel-trusted-contact-button`
                          : `remove-trusted-contact-button`,
                      children: (0, Q.jsx)(o, { ...(W.status === `pending` ? $.cancel : $.remove) }),
                    }),
                  ],
                }),
              ],
            })
          : null),
      (n[93] = W),
      (n[94] = Ye),
      (n[95] = k.data),
      (n[96] = J),
      (n[97] = Y),
      (n[98] = Re),
      (n[99] = rt))
    : (rt = n[99]);
  let it;
  n[100] !== et || n[101] !== Z || n[102] !== tt || n[103] !== nt || n[104] !== rt
    ? ((it = (0, Q.jsx)(_e, {
        title: X,
        children: (0, Q.jsx)(de, {
          className: `text-sm leading-6`,
          children: (0, Q.jsxs)(de.Content, { children: [et, Z, tt, nt, rt] }),
        }),
      })),
      (n[100] = et),
      (n[101] = Z),
      (n[102] = tt),
      (n[103] = nt),
      (n[104] = rt),
      (n[105] = it))
    : (it = n[105]);
  let ut = p == null ? it : null,
    mt;
  n[106] !== q || n[107] !== F || n[108] !== T || n[109] !== K || n[110] !== ye
    ? ((mt =
        F === `intro`
          ? (0, Q.jsx)(He, {
              open: F === `intro`,
              onClose: () => {
                (K(
                  Pe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_INTRO,
                  Fe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_DISMISSED,
                ),
                  q());
              },
              onContinue: () => {
                (K(
                  Pe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_INTRO,
                  Fe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_ADD_CONTACT_CLICKED,
                ),
                  ye());
              },
              korea: T,
            })
          : null),
      (n[106] = q),
      (n[107] = F),
      (n[108] = T),
      (n[109] = K),
      (n[110] = ye),
      (n[111] = mt))
    : (mt = n[111]);
  let ht = F === `invite`,
    gt;
  n[112] !== q || n[113] !== K
    ? ((gt = () => {
        ((H.current += 1),
          K(
            Pe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_FORM,
            Fe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_DISMISSED,
          ),
          q());
      }),
      (n[112] = q),
      (n[113] = K),
      (n[114] = gt))
    : (gt = n[114]);
  let _t;
  n[115] === we
    ? (_t = n[116])
    : ((_t = async (e) => {
        try {
          await we.mutateAsync({ payload: e, epoch: H.current });
        } catch {}
      }),
      (n[115] = we),
      (n[116] = _t));
  let vt;
  n[117] !== we.isPending ||
  n[118] !== te ||
  n[119] !== B ||
  n[120] !== T ||
  n[121] !== ht ||
  n[122] !== gt ||
  n[123] !== _t
    ? ((vt = (0, Q.jsx)(
        Ke,
        { open: ht, onClose: gt, onSubmit: _t, pending: we.isPending, korea: T, defaultPhoneCountry: te },
        B,
      )),
      (n[117] = we.isPending),
      (n[118] = te),
      (n[119] = B),
      (n[120] = T),
      (n[121] = ht),
      (n[122] = gt),
      (n[123] = _t),
      (n[124] = vt))
    : (vt = n[124]);
  let yt = F === `success`,
    bt;
  n[125] === K
    ? (bt = n[126])
    : ((bt = () =>
        K(
          Pe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONFIRMATION,
          Fe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_PERSONAL_NOTE_SELECTED,
        )),
      (n[125] = K),
      (n[126] = bt));
  let xt;
  n[127] !== q || n[128] !== b
    ? ((xt = () => {
        (q(), b(`/settings/trusted-contact`));
      }),
      (n[127] = q),
      (n[128] = b),
      (n[129] = xt))
    : (xt = n[129]);
  let St;
  n[130] === q ? (St = n[131]) : ((St = () => q()), (n[130] = q), (n[131] = St));
  let Ct;
  n[132] !== R || n[133] !== ye || n[134] !== yt || n[135] !== bt || n[136] !== xt || n[137] !== St
    ? ((Ct = (0, Q.jsx)(Je, {
        kind: `success`,
        open: yt,
        onPersonalNote: bt,
        contact: R,
        onSettings: xt,
        onClose: St,
        onTryAgain: ye,
      })),
      (n[132] = R),
      (n[133] = ye),
      (n[134] = yt),
      (n[135] = bt),
      (n[136] = xt),
      (n[137] = St),
      (n[138] = Ct))
    : (Ct = n[138]);
  let wt = F === `unavailable`,
    Tt;
  n[139] !== q || n[140] !== K
    ? ((Tt = () => {
        (K(
          Pe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_UNAVAILABLE,
          Fe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_DISMISSED,
        ),
          q());
      }),
      (n[139] = q),
      (n[140] = K),
      (n[141] = Tt))
    : (Tt = n[141]);
  let Et;
  n[142] !== K || n[143] !== ye
    ? ((Et = () => {
        (K(
          Pe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_UNAVAILABLE,
          Fe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_ADD_SOMEONE_ELSE_CLICKED,
        ),
          ye());
      }),
      (n[142] = K),
      (n[143] = ye),
      (n[144] = Et))
    : (Et = n[144]);
  let Dt;
  n[145] !== R || n[146] !== wt || n[147] !== Tt || n[148] !== Et
    ? ((Dt = (0, Q.jsx)(Je, { kind: `unavailable`, open: wt, contact: R, onClose: Tt, onTryAgain: Et })),
      (n[145] = R),
      (n[146] = wt),
      (n[147] = Tt),
      (n[148] = Et),
      (n[149] = Dt))
    : (Dt = n[149]);
  let Ot = F === `remove`,
    kt;
  n[150] === q ? (kt = n[151]) : ((kt = () => q()), (n[150] = q), (n[151] = kt));
  let At;
  n[152] !== W || n[153] !== Ge
    ? ((At = () => {
        W != null && !Ge.isPending && Ge.mutate(W);
      }),
      (n[152] = W),
      (n[153] = Ge),
      (n[154] = At))
    : (At = n[154]);
  let jt;
  n[155] !== Ye || n[156] !== Ge.isPending || n[157] !== Ot || n[158] !== kt || n[159] !== At
    ? ((jt = (0, Q.jsx)(Xe, { open: Ot, name: Ye, pending: Ge.isPending, onClose: kt, onConfirm: At })),
      (n[155] = Ye),
      (n[156] = Ge.isPending),
      (n[157] = Ot),
      (n[158] = kt),
      (n[159] = At),
      (n[160] = jt))
    : (jt = n[160]);
  let Mt;
  return (
    n[161] !== ut || n[162] !== mt || n[163] !== vt || n[164] !== Ct || n[165] !== Dt || n[166] !== jt
      ? ((Mt = (0, Q.jsxs)(Q.Fragment, { children: [ut, mt, vt, Ct, Dt, jt] })),
        (n[161] = ut),
        (n[162] = mt),
        (n[163] = vt),
        (n[164] = Ct),
        (n[165] = Dt),
        (n[166] = jt),
        (n[167] = Mt))
      : (Mt = n[167]),
    Mt
  );
}
function at(e) {
  return (0, Q.jsx)(
    xe,
    { appearance: `secondary`, href: mt, initiator: `open_in_browser_bridge`, children: e },
    `trusted-contact-help`,
  );
}
function ot(e) {
  return e === `remove` ? null : e;
}
function st(e) {
  return (
    e.status === 400 &&
    (e.errorCode === `trusted-contacts-blocked-email` ||
      e.errorCode === `trusted-contacts-blocked-phone-number`)
  );
}
function ct(e) {
  return e + 1;
}
function lt(e) {
  let t = e?.trim().toUpperCase();
  return t != null && ut(t) ? t : `US`;
}
function ut(e) {
  return ht.has(e);
}
function dt(e) {
  let t = Ee(e);
  return t ? `+${t.countryCallingCode} ${t.formatNational().replaceAll(`-`, ` `)}` : e;
}
var ft, pt, Q, mt, ht, $;
function gt() {
  return (gt = e(() => {
    ((ft = z()),
      je(),
      s(),
      v(),
      I(),
      Se(),
      De(),
      f(),
      (pt = H()),
      D(),
      b(),
      ge(),
      le(),
      F(),
      be(),
      m(),
      T(),
      O(),
      fe(),
      B(),
      me(),
      U(),
      E(),
      ye(),
      l(),
      q(),
      C(),
      se(),
      Re(),
      tt(),
      (Q = V()),
      (mt = `https://help.openai.com/articles/20001105`),
      (ht = new Set(we())),
      ($ = n({
        primary: {
          id: `settingsModal.trustedContacts.sectionDescriptionPrimary.v2`,
          defaultMessage: `Having a trusted contact can make it easier to get support from someone who knows you well.`,
          description: `Introduction to Trusted contact settings.`,
        },
        secondary: {
          id: `settingsModal.trustedContacts.sectionDescriptionSecondary.v2`,
          defaultMessage: `In the future, if you discuss suicide with ChatGPT in a way that indicates a serious safety concern, we may automatically notify your trusted contact so they can check in with you. They must be 18+ to participate. <learnMoreLink>Learn more</learnMoreLink>`,
          description: `Safety notification and age requirement for the trusted contact.`,
        },
        secondaryKorea: {
          id: `settingsModal.trustedContacts.sectionDescriptionSecondaryKorea.v1`,
          defaultMessage: `In the future, if you discuss suicide with ChatGPT in a way that indicates a serious safety concern, we may automatically notify your trusted contact so they can check in with you. You and they must be 19+ to participate. <learnMoreLink>Learn more</learnMoreLink>`,
          description: `Safety notification and age requirement in South Korea.`,
        },
        add: {
          id: `settingsModal.trustedContacts.addTrustedContact`,
          defaultMessage: `Add contact`,
          description: `Starts Trusted contact enrollment.`,
        },
        pending: {
          id: `settingsModal.trustedContacts.pendingStatus`,
          defaultMessage: `Pending`,
          description: `Status of an unaccepted trusted contact invitation.`,
        },
        active: {
          id: `settingsModal.trustedContacts.activeStatus`,
          defaultMessage: `Active`,
          description: `Status of an accepted trusted contact.`,
        },
        resend: {
          id: `settingsModal.trustedContacts.resendInvitation`,
          defaultMessage: `Resend invitation`,
          description: `Resends a pending trusted contact invitation.`,
        },
        cancel: {
          id: `settingsModal.trustedContacts.cancelInvitation`,
          defaultMessage: `Cancel invitation`,
          description: `Cancels a pending trusted contact invitation.`,
        },
        remove: {
          id: `settingsModal.trustedContacts.removeTrustedContact`,
          defaultMessage: `Remove contact`,
          description: `Removes an active trusted contact.`,
        },
        fallback: {
          id: `settingsModal.trustedContacts.trustedContactFallbackName`,
          defaultMessage: `Trusted contact`,
          description: `Fallback when a contact has no name.`,
        },
        loading: {
          id: `settingsModal.trustedContacts.loading`,
          defaultMessage: `Loading trusted contact...`,
          description: `Trusted contact loading status.`,
        },
        error: {
          id: `settings.chatGpt.trustedContact.loadError`,
          defaultMessage: `Couldn't load trusted contact. Please try again.`,
          description: `Trusted contact load error.`,
        },
        retry: {
          id: `settings.chatGpt.trustedContact.retry`,
          defaultMessage: `Retry`,
          description: `Retry loading Trusted contact settings.`,
        },
        saveError: {
          id: `settingsModal.trustedContacts.savedError`,
          defaultMessage: `Unable to save trusted contact. Please try again.`,
          description: `Trusted contact save error.`,
        },
        removeError: {
          id: `settingsModal.trustedContacts.removedError`,
          defaultMessage: `Unable to remove trusted contact. Please try again.`,
          description: `Trusted contact removal error.`,
        },
        removed: {
          id: `settingsModal.trustedContacts.removedSuccess`,
          defaultMessage: `Trusted contact removed`,
          description: `Successful trusted contact removal.`,
        },
        resent: {
          id: `settingsModal.trustedContacts.invitationResentSuccess`,
          defaultMessage: `Invitation resent.`,
          description: `Successful invitation resend.`,
        },
      })));
  }))();
}
gt();
export { nt as ChatGptTrustedContactSettings, rt as TrustedContactEnrollment };
//# sourceMappingURL=trusted-contact-settings-9b8ef1cace0d.js.map
