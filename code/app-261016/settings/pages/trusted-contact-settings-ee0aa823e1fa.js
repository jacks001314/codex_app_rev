import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $3 as t,
  $C as n,
  $St as r,
  $st as i,
  FBt as a,
  GK as o,
  HO as s,
  IO as ee,
  JO as c,
  KO as te,
  LNt as l,
  LO as ne,
  Lst as u,
  Mst as d,
  NSt as f,
  OT as p,
  Oit as m,
  PBt as h,
  Qst as g,
  RO as re,
  Rst as _,
  SY as ie,
  TY as v,
  USt as y,
  Vrt as b,
  WK as x,
  WO as S,
  XOt as C,
  Y3 as w,
  YOt as T,
  Z3 as E,
  ZSt as D,
  e6 as O,
  ew as k,
  iCt as A,
  jit as j,
  jst as M,
  kT as N,
  okt as ae,
  qO as oe,
  qrt as P,
  sw as F,
  tkt as I,
  uw as L,
  vK as se,
  vst as R,
  yst as z,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  $Ln as B,
  BFt as V,
  GLn as H,
  LF as ce,
  QF as le,
  RF as U,
  SRn as ue,
  Tjr as de,
  ZLn as fe,
  bRn as W,
  b_ as pe,
  cA as G,
  eI as me,
  iRr as he,
  qLn as K,
  sA as ge,
  tyr as _e,
  xMr as ve,
  x_ as ye,
  xjr as be,
  yMr as xe,
  zFt as Se,
} from "./app-initial-ad16eaadf81f.js";
import { i as Ce, n as we, r as Te, t as Ee } from "./phone-number-input-c1e0f7bd6044.js";
import { n as De, t as Oe } from "./parsePhoneNumber-4ef2d042ec5d.js";
import {
  a as ke,
  f as Ae,
  i as je,
  m as Me,
  n as Ne,
  p as Pe,
  r as q,
  t as Fe,
} from "./chatgpt_trusted_contact-a7fbed382f14.js";
import { i as Ie, n as Le, r as Re, t as ze } from "./client-9b6341a51cb4.js";
import { n as Be, t as Ve } from "./trusted-contact-hero-b07a937bcf0a.js";
function He(e) {
  let t = (0, J.c)(48),
    { open: n, onClose: r, onContinue: i, korea: a } = e,
    [o, s] = (0, Y.useState)(null),
    c;
  t[0] === r
    ? (c = t[1])
    : ((c = (e) => {
        e || r();
      }),
      (t[0] = r),
      (t[1] = c));
  let l;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = (0, X.jsx)(Ve, {})), (t[2] = l)) : (l = t[2]);
  let u;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, X.jsx)(re, { title: (0, X.jsx)(oe, { children: (0, X.jsx)(I, { ...Z.introTitle }) }) })),
      (t[3] = u))
    : (u = t[3]);
  let d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, X.jsx)(te, {
        asChild: !0,
        children: (0, X.jsxs)(`div`, {
          className: `space-y-4 text-sm text-secondary`,
          children: [
            (0, X.jsx)(`p`, { children: (0, X.jsx)(I, { ...Z.introOne, values: { bold: Ge } }) }),
            (0, X.jsx)(`p`, { children: (0, X.jsx)(I, { ...Z.introTwo }) }),
          ],
        }),
      })),
      (t[4] = d))
    : (d = t[4]);
  let f = o === `expect`,
    p,
    m;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (e) => {
        (e.preventDefault(), s(We));
      }),
      (m = (0, X.jsx)(I, { ...Z.expect })),
      (t[5] = p),
      (t[6] = m))
    : ((p = t[5]), (m = t[6]));
  let h;
  t[7] === o
    ? (h = t[8])
    : ((h = (0, X.jsxs)(`summary`, {
        className: `flex cursor-interaction items-center justify-between gap-3 text-sm font-semibold`,
        onClick: p,
        children: [m, o === `expect` ? (0, X.jsx)(ie, {}) : (0, X.jsx)(x, {})],
      })),
      (t[7] = o),
      (t[8] = h));
  let g;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsxs)(`ul`, {
        className: `mt-3 list-disc space-y-2 ps-5 text-sm text-secondary`,
        children: [
          (0, X.jsx)(`li`, { children: (0, X.jsx)(I, { ...Z.expectOne }) }),
          (0, X.jsx)(`li`, { children: (0, X.jsx)(I, { ...Z.expectTwo }) }),
          (0, X.jsx)(`li`, { children: (0, X.jsx)(I, { ...Z.expectThree }) }),
        ],
      })),
      (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, X.jsx)(H, {
        className: `mt-3 inline-block text-sm`,
        appearance: `secondary`,
        href: Ze,
        initiator: `open_in_browser_bridge`,
        openTarget: `external-browser`,
        children: (0, X.jsx)(I, { ...Z.learn }),
      })),
      (t[10] = _))
    : (_ = t[10]);
  let v;
  t[11] !== f || t[12] !== h
    ? ((v = (0, X.jsxs)(`details`, { className: `py-3`, open: f, children: [h, g, _] })),
      (t[11] = f),
      (t[12] = h),
      (t[13] = v))
    : (v = t[13]);
  let y = o === `who`,
    b,
    C;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (e) => {
        (e.preventDefault(), s(Ue));
      }),
      (C = (0, X.jsx)(I, { ...Z.who })),
      (t[14] = b),
      (t[15] = C))
    : ((b = t[14]), (C = t[15]));
  let T;
  t[16] === o
    ? (T = t[17])
    : ((T = (0, X.jsxs)(`summary`, {
        className: `flex cursor-interaction items-center justify-between gap-3 text-sm font-semibold`,
        onClick: b,
        children: [C, o === `who` ? (0, X.jsx)(ie, {}) : (0, X.jsx)(x, {})],
      })),
      (t[16] = o),
      (t[17] = T));
  let E = a ? Z.whoOneKorea : Z.whoOne,
    D;
  t[18] === E
    ? (D = t[19])
    : ((D = (0, X.jsx)(`li`, { children: (0, X.jsx)(I, { ...E }) })), (t[18] = E), (t[19] = D));
  let O, k;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, X.jsx)(`li`, { children: (0, X.jsx)(I, { ...Z.whoTwo }) })),
      (k = (0, X.jsx)(`li`, { children: (0, X.jsx)(I, { ...Z.whoThree }) })),
      (t[20] = O),
      (t[21] = k))
    : ((O = t[20]), (k = t[21]));
  let A;
  t[22] === D
    ? (A = t[23])
    : ((A = (0, X.jsxs)(`ul`, {
        className: `mt-3 list-disc space-y-2 ps-5 text-sm text-secondary`,
        children: [D, O, k],
      })),
      (t[22] = D),
      (t[23] = A));
  let j;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, X.jsx)(H, {
        className: `mt-3 inline-block text-sm`,
        appearance: `secondary`,
        href: $e,
        initiator: `open_in_browser_bridge`,
        openTarget: `external-browser`,
        children: (0, X.jsx)(I, { ...Z.learn }),
      })),
      (t[24] = j))
    : (j = t[24]);
  let M;
  t[25] !== y || t[26] !== T || t[27] !== A
    ? ((M = (0, X.jsxs)(`details`, { className: `py-3`, open: y, children: [T, A, j] })),
      (t[25] = y),
      (t[26] = T),
      (t[27] = A),
      (t[28] = M))
    : (M = t[28]);
  let N;
  t[29] !== v || t[30] !== M
    ? ((N = (0, X.jsxs)(`div`, {
        className: `flex min-h-0 flex-col gap-5 overflow-y-auto p-6`,
        children: [
          u,
          d,
          (0, X.jsxs)(`div`, {
            className: `divide-primary-outline divide-y border-y border-primary-outline`,
            children: [v, M],
          }),
        ],
      })),
      (t[29] = v),
      (t[30] = M),
      (t[31] = N))
    : (N = t[31]);
  let ae;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, X.jsx)(I, { ...Z.close })), (t[32] = ae))
    : (ae = t[32]);
  let P;
  t[33] === r
    ? (P = t[34])
    : ((P = (0, X.jsx)(w, { color: `secondary`, radius: `full`, onClick: r, children: ae })),
      (t[33] = r),
      (t[34] = P));
  let F;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, X.jsx)(I, { ...Z.continue })), (t[35] = F))
    : (F = t[35]);
  let L;
  t[36] === i
    ? (L = t[37])
    : ((L = (0, X.jsx)(w, {
        radius: `full`,
        onClick: i,
        "data-testid": `trusted-contact-intro-continue`,
        children: F,
      })),
      (t[36] = i),
      (t[37] = L));
  let se;
  t[38] !== P || t[39] !== L
    ? ((se = (0, X.jsxs)(ne, { className: `shrink-0 p-6`, children: [P, L] })),
      (t[38] = P),
      (t[39] = L),
      (t[40] = se))
    : (se = t[40]);
  let R;
  t[41] !== N || t[42] !== se
    ? ((R = (0, X.jsxs)(ee, {
        variant: `chatgpt`,
        className: `max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-hidden`,
        children: [l, N, se],
      })),
      (t[41] = N),
      (t[42] = se),
      (t[43] = R))
    : (R = t[43]);
  let z;
  return (
    t[44] !== n || t[45] !== c || t[46] !== R
      ? ((z = (0, X.jsx)(S, {
          open: n,
          onOpenChange: c,
          size: `beacon`,
          radius: `compact`,
          overlayClassName: `bg-text/5 backdrop-blur-sm`,
          children: R,
        })),
        (t[44] = n),
        (t[45] = c),
        (t[46] = R),
        (t[47] = z))
      : (z = t[47]),
    z
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
  let t = (0, J.c)(72),
    { open: n, onClose: r, onSubmit: i, pending: a, korea: o, defaultPhoneCountry: s } = e,
    c = s === void 0 ? `US` : s,
    l = ae(),
    [u, d] = (0, Y.useState)(``),
    [f, m] = (0, Y.useState)(``),
    [h, g] = (0, Y.useState)(``),
    [_, ie] = (0, Y.useState)(!1),
    [v, y] = (0, Y.useState)(!1),
    b = (0, Y.useRef)(!1),
    x;
  t[0] !== _ || t[1] !== h || t[2] !== u || t[3] !== i || t[4] !== a || t[5] !== f
    ? ((x = (e) => {
        e.preventDefault();
        let t = et.test(h.trim());
        (y(!t),
          u.trim() &&
            _ &&
            t &&
            !a &&
            !b.current &&
            ((b.current = !0),
            i({
              name: u.trim(),
              email: h.trim(),
              phone_number: f.trim() || null,
              relationship: null,
            }).finally(() => {
              b.current = !1;
            })));
      }),
      (t[0] = _),
      (t[1] = h),
      (t[2] = u),
      (t[3] = i),
      (t[4] = a),
      (t[5] = f),
      (t[6] = x))
    : (x = t[6]);
  let C = x,
    T;
  t[7] === r
    ? (T = t[8])
    : ((T = (e) => {
        e || r();
      }),
      (t[7] = r),
      (t[8] = T));
  let E;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, X.jsx)(re, { title: (0, X.jsx)(oe, { children: (0, X.jsx)(I, { ...Z.inviteTitle }) }) })),
      (t[9] = E))
    : (E = t[9]);
  let D;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, X.jsx)(te, {
        asChild: !0,
        children: (0, X.jsx)(`p`, {
          className: `text-sm`,
          children: (0, X.jsx)(I, { ...Z.inviteDescription, values: { learnMoreLink: qe } }),
        }),
      })),
      (t[10] = D))
    : (D = t[10]);
  let O;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (0, X.jsx)(`span`, { children: (0, X.jsx)(I, { ...Z.name }) })), (t[11] = O))
    : (O = t[11]);
  let k;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (e) => d(e.target.value)), (t[12] = k))
    : (k = t[12]);
  let A;
  t[13] === l ? (A = t[14]) : ((A = l.formatMessage(Z.namePlaceholder)), (t[13] = l), (t[14] = A));
  let j;
  t[15] !== u || t[16] !== A
    ? ((j = (0, X.jsxs)(`label`, {
        className: `block space-y-2 text-sm font-medium`,
        htmlFor: `trusted-contact-name`,
        children: [
          O,
          (0, X.jsx)(fe, {
            id: `trusted-contact-name`,
            name: `trusted-contact-name`,
            value: u,
            onChange: k,
            placeholder: A,
            "data-testid": `trusted-contact-name-input`,
            autoComplete: `name`,
          }),
        ],
      })),
      (t[15] = u),
      (t[16] = A),
      (t[17] = j))
    : (j = t[17]);
  let M;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, X.jsx)(`label`, {
        htmlFor: `trusted-contact-phone`,
        children: (0, X.jsx)(I, { ...Z.phone }),
      })),
      (t[18] = M))
    : (M = t[18]);
  let N;
  t[19] === l ? (N = t[20]) : ((N = l.formatMessage(Z.phonePlaceholder)), (t[19] = l), (t[20] = N));
  let P;
  t[21] !== c || t[22] !== f || t[23] !== N
    ? ((P = (0, X.jsxs)(`div`, {
        className: `space-y-2 text-sm font-medium`,
        children: [
          M,
          (0, X.jsx)(Ee, {
            id: `trusted-contact-phone`,
            name: `trusted-contact-phone`,
            value: f,
            onChange: m,
            placeholder: N,
            defaultCountry: c,
            "data-testid": `trusted-contact-phone-input`,
            autoComplete: `tel`,
          }),
        ],
      })),
      (t[21] = c),
      (t[22] = f),
      (t[23] = N),
      (t[24] = P))
    : (P = t[24]);
  let F;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, X.jsx)(`label`, {
        htmlFor: `trusted-contact-email`,
        children: (0, X.jsx)(I, { ...Z.email }),
      })),
      (t[25] = F))
    : (F = t[25]);
  let L;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (e) => {
        (g(e.target.value), y(!1));
      }),
      (t[26] = L))
    : (L = t[26]);
  let se = v ? `trusted-contact-email-error` : void 0,
    R;
  t[27] === l ? (R = t[28]) : ((R = l.formatMessage(Z.emailPlaceholder)), (t[27] = l), (t[28] = R));
  let z;
  t[29] !== h || t[30] !== v || t[31] !== se || t[32] !== R
    ? ((z = (0, X.jsx)(fe, {
        id: `trusted-contact-email`,
        name: `trusted-contact-email`,
        type: `email`,
        value: h,
        onChange: L,
        "aria-invalid": v,
        "aria-describedby": se,
        placeholder: R,
        "data-testid": `trusted-contact-email-input`,
        autoComplete: `email`,
      })),
      (t[29] = h),
      (t[30] = v),
      (t[31] = se),
      (t[32] = R),
      (t[33] = z))
    : (z = t[33]);
  let B;
  t[34] === v
    ? (B = t[35])
    : ((B = v
        ? (0, X.jsx)(`span`, {
            id: `trusted-contact-email-error`,
            className: `text-danger`,
            role: `alert`,
            children: (0, X.jsx)(I, { ...Z.invalidEmail }),
          })
        : null),
      (t[34] = v),
      (t[35] = B));
  let V;
  t[36] !== z || t[37] !== B
    ? ((V = (0, X.jsxs)(`div`, { className: `space-y-2 text-sm font-medium`, children: [F, z, B] })),
      (t[36] = z),
      (t[37] = B),
      (t[38] = V))
    : (V = t[38]);
  let H;
  t[39] !== l || t[40] !== o
    ? ((H = l.formatMessage(o ? Z.consentKorea : Z.consent)), (t[39] = l), (t[40] = o), (t[41] = H))
    : (H = t[41]);
  let ce;
  t[42] !== _ || t[43] !== H
    ? ((ce = (0, X.jsx)(p, {
        id: `trusted-contact-consent-checkbox`,
        checked: _,
        onCheckedChange: ie,
        "aria-label": H,
      })),
      (t[42] = _),
      (t[43] = H),
      (t[44] = ce))
    : (ce = t[44]);
  let le = o ? Z.consentKorea : Z.consent,
    U;
  t[45] === le
    ? (U = t[46])
    : ((U = (0, X.jsx)(`label`, {
        htmlFor: `trusted-contact-consent-checkbox`,
        className: `cursor-interaction`,
        children: (0, X.jsx)(I, { ...le }),
      })),
      (t[45] = le),
      (t[46] = U));
  let ue;
  t[47] !== ce || t[48] !== U
    ? ((ue = (0, X.jsxs)(`div`, {
        className: `relative flex items-start gap-3 text-sm leading-5`,
        children: [ce, U],
      })),
      (t[47] = ce),
      (t[48] = U),
      (t[49] = ue))
    : (ue = t[49]);
  let de;
  t[50] !== P || t[51] !== V || t[52] !== ue || t[53] !== j
    ? ((de = (0, X.jsxs)(`div`, { className: `space-y-4`, children: [j, P, V, ue] })),
      (t[50] = P),
      (t[51] = V),
      (t[52] = ue),
      (t[53] = j),
      (t[54] = de))
    : (de = t[54]);
  let W;
  t[55] !== _ || t[56] !== h || t[57] !== u || t[58] !== a
    ? ((W = !u.trim() || !h.trim() || !_ || a),
      (t[55] = _),
      (t[56] = h),
      (t[57] = u),
      (t[58] = a),
      (t[59] = W))
    : (W = t[59]);
  let pe;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (0, X.jsx)(I, { ...Z.send })), (t[60] = pe))
    : (pe = t[60]);
  let G;
  t[61] !== a || t[62] !== W
    ? ((G = (0, X.jsx)(ne, {
        expandSingleButton: !1,
        children: (0, X.jsx)(w, {
          radius: `full`,
          type: `submit`,
          disabled: W,
          loading: a,
          "data-testid": `trusted-contact-save-button`,
          children: pe,
        }),
      })),
      (t[61] = a),
      (t[62] = W),
      (t[63] = G))
    : (G = t[63]);
  let me;
  t[64] !== C || t[65] !== de || t[66] !== G
    ? ((me = (0, X.jsxs)(ee, {
        as: `form`,
        onSubmit: C,
        className: `gap-5`,
        size: `viewport`,
        noValidate: !0,
        children: [E, D, de, G],
      })),
      (t[64] = C),
      (t[65] = de),
      (t[66] = G),
      (t[67] = me))
    : (me = t[67]);
  let he;
  return (
    t[68] !== n || t[69] !== me || t[70] !== T
      ? ((he = (0, X.jsx)(S, { open: n, onOpenChange: T, size: `default`, children: me })),
        (t[68] = n),
        (t[69] = me),
        (t[70] = T),
        (t[71] = he))
      : (he = t[71]),
    he
  );
}
function qe(e) {
  return (0, X.jsx)(
    H,
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
  let t = (0, J.c)(47),
    { kind: n, open: r, contact: i, onClose: a, onTryAgain: o, onPersonalNote: s, onSettings: c } = e,
    l = ae(),
    u = n === `success`,
    d;
  t[0] === l ? (d = t[1]) : ((d = l.formatMessage(Z.subject)), (t[0] = l), (t[1] = d));
  let f = d,
    p;
  t[2] === l
    ? (p = t[3])
    : ((p = l.formatMessage(Z.body, {
        paragraphBreak: `

`,
      })),
      (t[2] = l),
      (t[3] = p));
  let m = p,
    h = i?.email
      ? `mailto:${encodeURIComponent(i.email)}?subject=${encodeURIComponent(f)}&body=${encodeURIComponent(m)}`
      : void 0,
    g = u ? Z.sentReference : Z.unavailableReference,
    _ = u ? Z.sentFallback : Z.unavailableFallback,
    ie;
  if (t[4] !== i?.email || t[5] !== i?.name || t[6] !== _ || t[7] !== l || t[8] !== g) {
    let e = i?.name?.trim(),
      n = i?.email?.trim();
    ((ie = e && n ? l.formatMessage(g, { contactName: e, contactMethod: n }) : e || n || l.formatMessage(_)),
      (t[4] = i?.email),
      (t[5] = i?.name),
      (t[6] = _),
      (t[7] = l),
      (t[8] = g),
      (t[9] = ie));
  } else ie = t[9];
  let v = ie,
    y;
  t[10] === a
    ? (y = t[11])
    : ((y = (e) => {
        e || a();
      }),
      (t[10] = a),
      (t[11] = y));
  let b = u ? void 0 : `max-sm:mx-auto max-sm:max-w-64`,
    x = u ? Z.sent : Z.unavailable,
    C;
  t[12] === x
    ? (C = t[13])
    : ((C = (0, X.jsx)(oe, { children: (0, X.jsx)(I, { ...x }) })), (t[12] = x), (t[13] = C));
  let T;
  t[14] !== b || t[15] !== C
    ? ((T = (0, X.jsx)(re, { className: `items-center`, titleClassName: b, title: C })),
      (t[14] = b),
      (t[15] = C),
      (t[16] = T))
    : (T = t[16]);
  let E;
  t[17] === v
    ? (E = t[18])
    : ((E = (0, X.jsx)(`p`, { className: `text-sm font-medium`, children: v })), (t[17] = v), (t[18] = E));
  let D;
  t[19] !== a || t[20] !== c || t[21] !== u
    ? ((D = (0, X.jsx)(te, {
        asChild: !0,
        children: (0, X.jsx)(`p`, {
          className: `text-sm text-secondary`,
          children: u
            ? (0, X.jsx)(I, {
                ...Z.sentDescription,
                values: {
                  settingsLink: (e) =>
                    (0, X.jsx)(
                      `button`,
                      { type: `button`, className: `underline`, onClick: c ?? a, children: e },
                      `trusted-contact-settings`,
                    ),
                },
              })
            : (0, X.jsx)(I, { ...Z.unavailableDescription, values: { helpCenterLink: Ye } }),
        }),
      })),
      (t[19] = a),
      (t[20] = c),
      (t[21] = u),
      (t[22] = D))
    : (D = t[22]);
  let O;
  t[23] !== h || t[24] !== s || t[25] !== u
    ? ((O =
        u && h
          ? (0, X.jsx)(w, {
              className: `w-full justify-center`,
              radius: `full`,
              onClick: (e) => {
                (s?.(),
                  ue({ event: e, href: h, initiator: `open_in_browser_bridge` }) ||
                    window.location.assign(h));
              },
              "data-testid": `trusted-contact-invite-success-personal-note`,
              children: (0, X.jsx)(I, { ...Z.note }),
            })
          : null),
      (t[23] = h),
      (t[24] = s),
      (t[25] = u),
      (t[26] = O))
    : (O = t[26]);
  let k;
  t[27] !== o || t[28] !== u
    ? ((k = u
        ? null
        : (0, X.jsx)(w, {
            className: `w-full justify-center`,
            radius: `full`,
            onClick: o,
            "data-testid": `trusted-contact-unavailable-add-someone-else`,
            children: (0, X.jsx)(I, { ...Z.another }),
          })),
      (t[27] = o),
      (t[28] = u),
      (t[29] = k))
    : (k = t[29]);
  let A = u ? `trusted-contact-invite-success-close` : `trusted-contact-unavailable-close`,
    j;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, X.jsx)(I, { ...Z.close })), (t[30] = j))
    : (j = t[30]);
  let M;
  t[31] !== a || t[32] !== A
    ? ((M = (0, X.jsx)(w, {
        className: `w-full justify-center`,
        radius: `full`,
        color: `secondary`,
        onClick: a,
        "data-testid": A,
        children: j,
      })),
      (t[31] = a),
      (t[32] = A),
      (t[33] = M))
    : (M = t[33]);
  let N;
  t[34] !== O || t[35] !== k || t[36] !== M
    ? ((N = (0, X.jsxs)(ne, { className: `mt-4 flex-col`, children: [O, k, M] })),
      (t[34] = O),
      (t[35] = k),
      (t[36] = M),
      (t[37] = N))
    : (N = t[37]);
  let P;
  t[38] !== D || t[39] !== N || t[40] !== T || t[41] !== E
    ? ((P = (0, X.jsxs)(ee, { className: `gap-5 text-center`, size: `viewport`, children: [T, E, D, N] })),
      (t[38] = D),
      (t[39] = N),
      (t[40] = T),
      (t[41] = E),
      (t[42] = P))
    : (P = t[42]);
  let F;
  return (
    t[43] !== r || t[44] !== P || t[45] !== y
      ? ((F = (0, X.jsx)(S, { open: r, onOpenChange: y, size: `default`, children: P })),
        (t[43] = r),
        (t[44] = P),
        (t[45] = y),
        (t[46] = F))
      : (F = t[46]),
    F
  );
}
function Ye(e) {
  return (0, X.jsx)(
    H,
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
  let t = (0, J.c)(26),
    { open: n, name: r, pending: i, onClose: a, onConfirm: o } = e,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = (e) => {
        e || a();
      }),
      (t[0] = a),
      (t[1] = s));
  let c;
  t[2] !== o || t[3] !== i
    ? ((c = (e) => {
        (e.preventDefault(), i || o());
      }),
      (t[2] = o),
      (t[3] = i),
      (t[4] = c))
    : (c = t[4]);
  let l;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, X.jsx)(re, {
        className: `items-center`,
        title: (0, X.jsx)(oe, { children: (0, X.jsx)(I, { ...Z.removeTitle }) }),
      })),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === r
    ? (u = t[7])
    : ((u = (0, X.jsx)(te, { children: (0, X.jsx)(I, { ...Z.removeDescription, values: { name: r } }) })),
      (t[6] = r),
      (t[7] = u));
  let d;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, X.jsx)(I, { ...Z.remove })), (t[8] = d))
    : (d = t[8]);
  let f;
  t[9] === i
    ? (f = t[10])
    : ((f = (0, X.jsx)(w, {
        className: `w-full justify-center`,
        radius: `full`,
        type: `submit`,
        color: `danger`,
        disabled: i,
        loading: i,
        "data-testid": `trusted-contact-remove-confirm-button`,
        children: d,
      })),
      (t[9] = i),
      (t[10] = f));
  let p;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, X.jsx)(I, { ...Z.goBack })), (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== a || t[13] !== i
    ? ((m = (0, X.jsx)(w, {
        className: `w-full justify-center`,
        radius: `full`,
        type: `button`,
        disabled: i,
        color: `secondary`,
        onClick: a,
        "data-testid": `trusted-contact-remove-cancel-button`,
        children: p,
      })),
      (t[12] = a),
      (t[13] = i),
      (t[14] = m))
    : (m = t[14]);
  let h;
  t[15] !== f || t[16] !== m
    ? ((h = (0, X.jsxs)(ne, { className: `mt-4 flex-col`, children: [f, m] })),
      (t[15] = f),
      (t[16] = m),
      (t[17] = h))
    : (h = t[17]);
  let g;
  t[18] !== c || t[19] !== u || t[20] !== h
    ? ((g = (0, X.jsxs)(ee, {
        as: `form`,
        onSubmit: c,
        className: `gap-5 text-center`,
        size: `viewport`,
        children: [l, u, h],
      })),
      (t[18] = c),
      (t[19] = u),
      (t[20] = h),
      (t[21] = g))
    : (g = t[21]);
  let _;
  return (
    t[22] !== n || t[23] !== s || t[24] !== g
      ? ((_ = (0, X.jsx)(S, { open: n, onOpenChange: s, size: `compact`, children: g })),
        (t[22] = n),
        (t[23] = s),
        (t[24] = g),
        (t[25] = _))
      : (_ = t[25]),
    _
  );
}
var J, Y, X, Ze, Qe, $e, et, Z;
function tt() {
  return (tt = e(() => {
    ((J = h()),
      (Y = a()),
      C(),
      E(),
      N(),
      c(),
      s(),
      K(),
      W(),
      v(),
      B(),
      Be(),
      we(),
      (X = l()),
      (Ze = `https://help.openai.com/articles/20001105`),
      (Qe = `https://help.openai.com/en/articles/20001105-trusted-contacts-in-chatgpt#faq`),
      ($e = `https://help.openai.com/articles/20001194`),
      (et =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/),
      (Z = T({
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
    t = r(g),
    n = A(pe);
  if (n.status === `error`) {
    let n;
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(ce, { slug: `trusted-contact` })), (e[0] = n))
      : (n = e[0]);
    let r;
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(`p`, { role: `alert`, children: (0, Q.jsx)(I, { ...$.error }) })), (e[1] = r))
      : (r = e[1]);
    let i;
    e[2] === t.queryClient
      ? (i = e[3])
      : ((i = () => {
          t.queryClient.invalidateQueries({ queryKey: [`accounts`, `check`] });
        }),
        (e[2] = t.queryClient),
        (e[3] = i));
    let a;
    e[4] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Q.jsx)(I, { ...$.retry })), (e[4] = a))
      : (a = e[4]);
    let o;
    return (
      e[5] === i
        ? (o = e[6])
        : ((o = (0, Q.jsxs)(le, {
            title: n,
            children: [r, (0, Q.jsx)(w, { className: `mt-4`, color: `secondary`, onClick: i, children: a })],
          })),
          (e[5] = i),
          (e[6] = o)),
      o
    );
  }
  if (n.status !== `allowed`) return null;
  let i = n.userId + `:` + n.accountId,
    a;
  return (
    e[7] !== n.accountId || e[8] !== n.userId || e[9] !== i
      ? ((a = (0, Q.jsx)(it, { userId: n.userId, accountId: n.accountId }, i)),
        (e[7] = n.accountId),
        (e[8] = n.userId),
        (e[9] = i),
        (e[10] = a))
      : (a = e[10]),
    a
  );
}
function rt(e) {
  let t = (0, ft.c)(8),
    { initialDialog: n, entryPoint: r, onClose: i, onSuccess: a } = e,
    o = A(pe);
  if (o.status !== `allowed`) return null;
  let s = o.userId + `:` + o.accountId,
    ee;
  return (
    t[0] !== o.accountId ||
    t[1] !== o.userId ||
    t[2] !== r ||
    t[3] !== n ||
    t[4] !== i ||
    t[5] !== a ||
    t[6] !== s
      ? ((ee = (0, Q.jsx)(
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
        (t[7] = ee))
      : (ee = t[7]),
    ee
  );
}
function it(e) {
  let i = (0, ft.c)(168),
    { userId: a, accountId: s, initialDialog: ee, entryPoint: c, onEnrollmentClose: te, onInvited: l } = e,
    ne = ee === void 0 ? null : ee,
    u = c === void 0 ? ke.CHATGPT_TRUSTED_CONTACT_ENTRY_POINT_SETTINGS : c,
    f = r(g),
    p = ae(),
    m = y(),
    h = _(),
    { client: re } = de(),
    ie;
  if (i[0] !== re) {
    let e = re.getContext().user?.country;
    ((ie = lt(e)), (i[0] = re), (i[1] = ie));
  } else ie = i[1];
  let v = ie,
    b = v === `KR`,
    x;
  i[2] !== s || i[3] !== a ? ((x = Ie(a, s)), (i[2] = s), (i[3] = a), (i[4] = x)) : (x = i[4]);
  let S = x,
    C;
  i[5] === S.enabled ? (C = i[6]) : ((C = { ...S.enabled, staleTime: 3e4 }), (i[5] = S.enabled), (i[6] = C));
  let T = d(C),
    E = T.data === !0,
    D;
  i[7] !== S.list || i[8] !== E
    ? ((D = { ...S.list, staleTime: 3e4, enabled: E }), (i[7] = S.list), (i[8] = E), (i[9] = D))
    : (D = i[9]);
  let O = d(D),
    [k, A] = (0, pt.useState)(ne),
    [M, N] = (0, pt.useState)(null),
    [oe, L] = (0, pt.useState)(0),
    R = (0, pt.useRef)(0),
    B;
  i[10] === s ? (B = i[11]) : ((B = ze(s)), (i[10] = s), (i[11] = B));
  let V = B,
    H = O.data?.contacts[0] ?? null,
    U,
    ue;
  (i[12] !== u || i[13] !== ne || i[14] !== f
    ? ((ue = () => {
        if (ne != null) {
          ve(f, je, {
            entryPoint: u,
            step:
              ne === `intro`
                ? q.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_INTRO
                : q.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_FORM,
          });
          return;
        }
        ve(f, Pe, { action: Ae.CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_PAGE_VIEWED });
      }),
      (U = [f, ne, u]),
      (i[12] = u),
      (i[13] = ne),
      (i[14] = f),
      (i[15] = U),
      (i[16] = ue))
    : ((U = i[15]), (ue = i[16])),
    (0, pt.useEffect)(ue, U));
  let fe;
  i[17] !== u || i[18] !== f
    ? ((fe = (e) => {
        ve(f, je, { entryPoint: u, step: e });
      }),
      (i[17] = u),
      (i[18] = f),
      (i[19] = fe))
    : (fe = i[19]);
  let W = fe,
    pe;
  i[20] !== u || i[21] !== f
    ? ((pe = (e, t) => {
        ve(f, Ne, { entryPoint: u, step: e, action: t });
      }),
      (i[20] = u),
      (i[21] = f),
      (i[22] = pe))
    : (pe = i[22]);
  let G = pe,
    me;
  i[23] === te
    ? (me = i[24])
    : ((me = () => {
        (A(null), te?.());
      }),
      (i[23] = te),
      (i[24] = me));
  let K = me,
    _e;
  i[25] === W
    ? (_e = i[26])
    : ((_e = () => {
        ((R.current += 1), L(ct), A(`invite`), W(q.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_FORM));
      }),
      (i[25] = W),
      (i[26] = _e));
  let ye = _e,
    be;
  i[27] === V
    ? (be = i[28])
    : ((be = (e) => {
        let { payload: t } = e;
        return he.safePost(`/trusted_contact`, { requestBody: t, additionalHeaders: V, isExpectedError: st });
      }),
      (i[27] = V),
      (i[28] = be));
  let xe;
  i[29] !== O.data?.contacts || i[30] !== l || i[31] !== S.list || i[32] !== h || i[33] !== W
    ? ((xe = async (e, t) => {
        let { payload: n, epoch: r } = t;
        (h.setQueryData(S.list.queryKey, {
          contacts: [
            e,
            ...(O.data?.contacts ?? []).filter((t) => t.trusted_contact_id !== e.trusted_contact_id),
          ],
        }),
          r === R.current &&
            (N({ ...n, name: e.name ?? n.name, email: e.email ?? n.email }),
            A(`success`),
            W(q.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONFIRMATION),
            l?.()),
          await h.invalidateQueries({ queryKey: S.list.queryKey }));
      }),
      (i[29] = O.data?.contacts),
      (i[30] = l),
      (i[31] = S.list),
      (i[32] = h),
      (i[33] = W),
      (i[34] = xe))
    : (xe = i[34]);
  let Ce;
  i[35] !== p || i[36] !== f || i[37] !== W
    ? ((Ce = (e, t) => {
        let { payload: n, epoch: r } = t;
        r === R.current &&
          (e instanceof j &&
          e.status === 400 &&
          (e.errorCode === `trusted-contacts-blocked-email` ||
            e.errorCode === `trusted-contacts-blocked-phone-number`)
            ? (N(n), A(`unavailable`), W(q.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_UNAVAILABLE))
            : f
                .get(P)
                .danger(p.formatMessage($.saveError), {
                  errorAnalytics: { toastId: `trustedContactSettings.onError.saveError` },
                }));
      }),
      (i[35] = p),
      (i[36] = f),
      (i[37] = W),
      (i[38] = Ce))
    : (Ce = i[38]);
  let we;
  i[39] !== be || i[40] !== xe || i[41] !== Ce
    ? ((we = { mutationFn: be, onSuccess: xe, onError: Ce }),
      (i[39] = be),
      (i[40] = xe),
      (i[41] = Ce),
      (i[42] = we))
    : (we = i[42]);
  let Te = z(we),
    Ee;
  i[43] !== V || i[44] !== p
    ? ((Ee = (e) => {
        let t = Le(e, p.formatMessage($.fallback));
        if (t == null) throw Error(`Cannot resend an invitation without an email`);
        return he.safePut(`/trusted_contact/{trusted_contact_id}`, {
          additionalHeaders: V,
          parameters: { path: { trusted_contact_id: e.trusted_contact_id } },
          requestBody: t,
        });
      }),
      (i[43] = V),
      (i[44] = p),
      (i[45] = Ee))
    : (Ee = i[45]);
  let De;
  i[46] !== p || i[47] !== S.list || i[48] !== h || i[49] !== f
    ? ((De = async () => {
        (f.get(P).success(p.formatMessage($.resent)),
          await h.invalidateQueries({ queryKey: S.list.queryKey }));
      }),
      (i[46] = p),
      (i[47] = S.list),
      (i[48] = h),
      (i[49] = f),
      (i[50] = De))
    : (De = i[50]);
  let Oe;
  i[51] !== p || i[52] !== f
    ? ((Oe = () =>
        f
          .get(P)
          .danger(p.formatMessage($.saveError), {
            errorAnalytics: { toastId: `trustedContactSettings.onError.saveError` },
          })),
      (i[51] = p),
      (i[52] = f),
      (i[53] = Oe))
    : (Oe = i[53]);
  let Me;
  i[54] !== Ee || i[55] !== De || i[56] !== Oe
    ? ((Me = { mutationFn: Ee, onSuccess: De, onError: Oe }),
      (i[54] = Ee),
      (i[55] = De),
      (i[56] = Oe),
      (i[57] = Me))
    : (Me = i[57]);
  let Re = z(Me),
    Be;
  i[58] === V
    ? (Be = i[59])
    : ((Be = (e) =>
        he.safeDelete(`/trusted_contact/{trusted_contact_id}`, {
          additionalHeaders: V,
          parameters: { path: { trusted_contact_id: e.trusted_contact_id } },
        })),
      (i[58] = V),
      (i[59] = Be));
  let Ve;
  i[60] !== p || i[61] !== S.list || i[62] !== h || i[63] !== f
    ? ((Ve = async () => {
        (A(ot),
          f.get(P).success(p.formatMessage($.removed)),
          await h.invalidateQueries({ queryKey: S.list.queryKey }));
      }),
      (i[60] = p),
      (i[61] = S.list),
      (i[62] = h),
      (i[63] = f),
      (i[64] = Ve))
    : (Ve = i[64]);
  let Ue;
  i[65] !== p || i[66] !== f
    ? ((Ue = () =>
        f
          .get(P)
          .danger(p.formatMessage($.removeError), {
            errorAnalytics: { toastId: `trustedContactSettings.onError.removeError` },
          })),
      (i[65] = p),
      (i[66] = f),
      (i[67] = Ue))
    : (Ue = i[67]);
  let We;
  i[68] !== Be || i[69] !== Ve || i[70] !== Ue
    ? ((We = { mutationFn: Be, onSuccess: Ve, onError: Ue }),
      (i[68] = Be),
      (i[69] = Ve),
      (i[70] = Ue),
      (i[71] = We))
    : (We = i[71]);
  let Ge = z(We),
    qe;
  i[72] !== H?.name || i[73] !== p
    ? ((qe = H?.name?.trim() || p.formatMessage($.fallback)), (i[72] = H?.name), (i[73] = p), (i[74] = qe))
    : (qe = i[74]);
  let Ye = qe,
    J = T.isError || (T.data === !0 && O.isError),
    Y = T.isPending || (T.data === !0 && O.isPending),
    X;
  i[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, Q.jsx)(ce, { slug: `trusted-contact` })), (i[75] = X))
    : (X = i[75]);
  let Ze;
  i[76] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ze = (0, Q.jsx)(`p`, { children: (0, Q.jsx)(I, { ...$.primary }) })), (i[76] = Ze))
    : (Ze = i[76]);
  let Qe = b ? $.secondaryKorea : $.secondary,
    $e;
  i[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? (($e = { learnMoreLink: at }), (i[77] = $e))
    : ($e = i[77]);
  let et;
  i[78] === Qe
    ? (et = i[79])
    : ((et = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-6`,
        children: [Ze, (0, Q.jsx)(`p`, { children: (0, Q.jsx)(I, { ...Qe, values: $e }) })],
      })),
      (i[78] = Qe),
      (i[79] = et));
  let Z;
  i[80] === Y
    ? (Z = i[81])
    : ((Z = Y
        ? (0, Q.jsxs)(`div`, {
            className: `mt-7 flex items-center gap-2 text-secondary`,
            role: `status`,
            children: [(0, Q.jsx)(t, {}), (0, Q.jsx)(I, { ...$.loading })],
          })
        : null),
      (i[80] = Y),
      (i[81] = Z));
  let tt;
  i[82] !== T || i[83] !== J || i[84] !== O
    ? ((tt = J
        ? (0, Q.jsxs)(`div`, {
            className: `mt-7 space-y-3`,
            role: `alert`,
            children: [
              (0, Q.jsx)(`p`, { children: (0, Q.jsx)(I, { ...$.error }) }),
              (0, Q.jsx)(w, {
                color: `secondary`,
                radius: `full`,
                onClick: () => void (T.isError ? T.refetch() : O.refetch()),
                children: (0, Q.jsx)(I, { ...$.retry }),
              }),
            ],
          })
        : null),
      (i[82] = T),
      (i[83] = J),
      (i[84] = O),
      (i[85] = tt))
    : (tt = i[85]);
  let nt;
  i[86] !== H || i[87] !== T.data || i[88] !== J || i[89] !== Y || i[90] !== f || i[91] !== W
    ? ((nt =
        !Y && !J && T.data === !0 && H == null
          ? (0, Q.jsx)(`div`, {
              className: `mt-7`,
              children: (0, Q.jsxs)(w, {
                color: `secondary`,
                radius: `full`,
                size: `toolbar`,
                onClick: () => {
                  (ve(f, Pe, { action: Ae.CHATGPT_TRUSTED_CONTACT_SETTINGS_ACTION_ADD_CLICKED }),
                    A(`intro`),
                    W(q.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_INTRO));
                },
                "data-testid": `add-trusted-contact-button`,
                children: [(0, Q.jsx)(o, {}), (0, Q.jsx)(I, { ...$.add })],
              }),
            })
          : null),
      (i[86] = H),
      (i[87] = T.data),
      (i[88] = J),
      (i[89] = Y),
      (i[90] = f),
      (i[91] = W),
      (i[92] = nt))
    : (nt = i[92]);
  let rt;
  i[93] !== H || i[94] !== Ye || i[95] !== T.data || i[96] !== J || i[97] !== Y || i[98] !== Re
    ? ((rt =
        !Y && !J && T.data === !0 && H != null
          ? (0, Q.jsxs)(`div`, {
              className: `mt-7 space-y-5`,
              children: [
                (0, Q.jsx)(n, {
                  children: (0, Q.jsx)(F, {
                    icon: (0, Q.jsx)(se, {}),
                    label: (0, Q.jsx)(`span`, { className: `block truncate`, children: Ye }),
                    description: (0, Q.jsxs)(`div`, {
                      className: `min-w-0`,
                      children: [
                        H.email ? (0, Q.jsx)(`p`, { className: `truncate`, children: H.email }) : null,
                        H.phone_number
                          ? (0, Q.jsx)(`p`, { className: `truncate`, children: dt(H.phone_number) })
                          : null,
                      ],
                    }),
                    control: (0, Q.jsx)(Se, {
                      variant: H.status === `pending` ? `default` : `success`,
                      children: (0, Q.jsx)(I, { ...(H.status === `pending` ? $.pending : $.active) }),
                    }),
                  }),
                }),
                (0, Q.jsxs)(`div`, {
                  className: `flex flex-wrap gap-3`,
                  children: [
                    H.status === `pending`
                      ? (0, Q.jsx)(w, {
                          color: `secondary`,
                          radius: `full`,
                          disabled: Re.isPending || Le(H, Ye) == null,
                          loading: Re.isPending,
                          onClick: () => Re.mutate(H),
                          "data-testid": `resend-trusted-contact-button`,
                          children: (0, Q.jsx)(I, { ...$.resend }),
                        })
                      : null,
                    (0, Q.jsx)(w, {
                      color: `danger`,
                      radius: `full`,
                      onClick: () => A(`remove`),
                      "data-testid":
                        H.status === `pending`
                          ? `cancel-trusted-contact-button`
                          : `remove-trusted-contact-button`,
                      children: (0, Q.jsx)(I, { ...(H.status === `pending` ? $.cancel : $.remove) }),
                    }),
                  ],
                }),
              ],
            })
          : null),
      (i[93] = H),
      (i[94] = Ye),
      (i[95] = T.data),
      (i[96] = J),
      (i[97] = Y),
      (i[98] = Re),
      (i[99] = rt))
    : (rt = i[99]);
  let it;
  i[100] !== et || i[101] !== Z || i[102] !== tt || i[103] !== nt || i[104] !== rt
    ? ((it = (0, Q.jsx)(le, {
        title: X,
        children: (0, Q.jsx)(ge, {
          className: `text-sm leading-6`,
          children: (0, Q.jsxs)(ge.Content, { children: [et, Z, tt, nt, rt] }),
        }),
      })),
      (i[100] = et),
      (i[101] = Z),
      (i[102] = tt),
      (i[103] = nt),
      (i[104] = rt),
      (i[105] = it))
    : (it = i[105]);
  let ut = te == null ? it : null,
    mt;
  i[106] !== K || i[107] !== k || i[108] !== b || i[109] !== G || i[110] !== ye
    ? ((mt =
        k === `intro`
          ? (0, Q.jsx)(He, {
              open: k === `intro`,
              onClose: () => {
                (G(
                  q.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_INTRO,
                  Fe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_DISMISSED,
                ),
                  K());
              },
              onContinue: () => {
                (G(
                  q.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_INTRO,
                  Fe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_ADD_CONTACT_CLICKED,
                ),
                  ye());
              },
              korea: b,
            })
          : null),
      (i[106] = K),
      (i[107] = k),
      (i[108] = b),
      (i[109] = G),
      (i[110] = ye),
      (i[111] = mt))
    : (mt = i[111]);
  let ht = k === `invite`,
    gt;
  i[112] !== K || i[113] !== G
    ? ((gt = () => {
        ((R.current += 1),
          G(
            q.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_FORM,
            Fe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_DISMISSED,
          ),
          K());
      }),
      (i[112] = K),
      (i[113] = G),
      (i[114] = gt))
    : (gt = i[114]);
  let _t;
  i[115] === Te
    ? (_t = i[116])
    : ((_t = async (e) => {
        try {
          await Te.mutateAsync({ payload: e, epoch: R.current });
        } catch {}
      }),
      (i[115] = Te),
      (i[116] = _t));
  let vt;
  i[117] !== Te.isPending ||
  i[118] !== v ||
  i[119] !== oe ||
  i[120] !== b ||
  i[121] !== ht ||
  i[122] !== gt ||
  i[123] !== _t
    ? ((vt = (0, Q.jsx)(
        Ke,
        { open: ht, onClose: gt, onSubmit: _t, pending: Te.isPending, korea: b, defaultPhoneCountry: v },
        oe,
      )),
      (i[117] = Te.isPending),
      (i[118] = v),
      (i[119] = oe),
      (i[120] = b),
      (i[121] = ht),
      (i[122] = gt),
      (i[123] = _t),
      (i[124] = vt))
    : (vt = i[124]);
  let yt = k === `success`,
    bt;
  i[125] === G
    ? (bt = i[126])
    : ((bt = () =>
        G(
          q.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONFIRMATION,
          Fe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_PERSONAL_NOTE_SELECTED,
        )),
      (i[125] = G),
      (i[126] = bt));
  let xt;
  i[127] !== K || i[128] !== m
    ? ((xt = () => {
        (K(), m(`/settings/trusted-contact`));
      }),
      (i[127] = K),
      (i[128] = m),
      (i[129] = xt))
    : (xt = i[129]);
  let St;
  i[130] === K ? (St = i[131]) : ((St = () => K()), (i[130] = K), (i[131] = St));
  let Ct;
  i[132] !== M || i[133] !== ye || i[134] !== yt || i[135] !== bt || i[136] !== xt || i[137] !== St
    ? ((Ct = (0, Q.jsx)(Je, {
        kind: `success`,
        open: yt,
        onPersonalNote: bt,
        contact: M,
        onSettings: xt,
        onClose: St,
        onTryAgain: ye,
      })),
      (i[132] = M),
      (i[133] = ye),
      (i[134] = yt),
      (i[135] = bt),
      (i[136] = xt),
      (i[137] = St),
      (i[138] = Ct))
    : (Ct = i[138]);
  let wt = k === `unavailable`,
    Tt;
  i[139] !== K || i[140] !== G
    ? ((Tt = () => {
        (G(
          q.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_UNAVAILABLE,
          Fe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_DISMISSED,
        ),
          K());
      }),
      (i[139] = K),
      (i[140] = G),
      (i[141] = Tt))
    : (Tt = i[141]);
  let Et;
  i[142] !== G || i[143] !== ye
    ? ((Et = () => {
        (G(
          q.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_STEP_CONTACT_UNAVAILABLE,
          Fe.CHATGPT_TRUSTED_CONTACT_ENROLLMENT_ACTION_ADD_SOMEONE_ELSE_CLICKED,
        ),
          ye());
      }),
      (i[142] = G),
      (i[143] = ye),
      (i[144] = Et))
    : (Et = i[144]);
  let Dt;
  i[145] !== M || i[146] !== wt || i[147] !== Tt || i[148] !== Et
    ? ((Dt = (0, Q.jsx)(Je, { kind: `unavailable`, open: wt, contact: M, onClose: Tt, onTryAgain: Et })),
      (i[145] = M),
      (i[146] = wt),
      (i[147] = Tt),
      (i[148] = Et),
      (i[149] = Dt))
    : (Dt = i[149]);
  let Ot = k === `remove`,
    kt;
  i[150] === K ? (kt = i[151]) : ((kt = () => K()), (i[150] = K), (i[151] = kt));
  let At;
  i[152] !== H || i[153] !== Ge
    ? ((At = () => {
        H != null && !Ge.isPending && Ge.mutate(H);
      }),
      (i[152] = H),
      (i[153] = Ge),
      (i[154] = At))
    : (At = i[154]);
  let jt;
  i[155] !== Ye || i[156] !== Ge.isPending || i[157] !== Ot || i[158] !== kt || i[159] !== At
    ? ((jt = (0, Q.jsx)(Xe, { open: Ot, name: Ye, pending: Ge.isPending, onClose: kt, onConfirm: At })),
      (i[155] = Ye),
      (i[156] = Ge.isPending),
      (i[157] = Ot),
      (i[158] = kt),
      (i[159] = At),
      (i[160] = jt))
    : (jt = i[160]);
  let Mt;
  return (
    i[161] !== ut || i[162] !== mt || i[163] !== vt || i[164] !== Ct || i[165] !== Dt || i[166] !== jt
      ? ((Mt = (0, Q.jsxs)(Q.Fragment, { children: [ut, mt, vt, Ct, Dt, jt] })),
        (i[161] = ut),
        (i[162] = mt),
        (i[163] = vt),
        (i[164] = Ct),
        (i[165] = Dt),
        (i[166] = jt),
        (i[167] = Mt))
      : (Mt = i[167]),
    Mt
  );
}
function at(e) {
  return (0, Q.jsx)(
    H,
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
  let t = De(e);
  return t ? `+${t.countryCallingCode} ${t.formatNational().replaceAll(`-`, ` `)}` : e;
}
var ft, pt, Q, mt, ht, $;
function gt() {
  return (gt = e(() => {
    ((ft = h()),
      Me(),
      R(),
      M(),
      u(),
      Ce(),
      Oe(),
      D(),
      (pt = a()),
      C(),
      f(),
      _e(),
      V(),
      E(),
      K(),
      v(),
      O(),
      b(),
      xe(),
      i(),
      me(),
      G(),
      L(),
      U(),
      k(),
      be(),
      m(),
      ye(),
      Re(),
      tt(),
      (Q = l()),
      (mt = `https://help.openai.com/articles/20001105`),
      (ht = new Set(Te())),
      ($ = T({
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
//# sourceMappingURL=trusted-contact-settings-ee0aa823e1fa.js.map
