import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $Nt as r,
  $R as i,
  AO as a,
  BS as o,
  CO as s,
  Cwt as c,
  DDt as l,
  Dz as u,
  FV as d,
  IDt as f,
  Ixt as p,
  OO as m,
  Pxt as h,
  QR as g,
  Sj as _,
  Swt as v,
  TJ as y,
  Twt as b,
  Uh as x,
  VDt as S,
  VS as C,
  Vxt as w,
  Wh as T,
  XD as E,
  YD as D,
  _Mt as O,
  _wt as k,
  aSt as A,
  cz as j,
  gMt as M,
  gg as N,
  gwt as ee,
  hg as te,
  jDt as P,
  kz as ne,
  nwt as F,
  rwt as I,
  sj as L,
  sz as re,
  t3 as R,
  vzt as z,
  wwt as B,
  xMt as V,
  yMt as H,
  yzt as U,
  zxt as W,
} from "./app-shared-bbfeca5e5737.js";
import {
  BCr as ie,
  Cwr as ae,
  G3n as oe,
  I3n as se,
  J3n as ce,
  RCr as le,
  S3n as ue,
  W3n as de,
  X7t as fe,
  Z7t as G,
  aNr as pe,
  ewn as me,
  gwr as he,
  lwr as K,
  rNr as q,
  twn as J,
  xPn as ge,
  yPn as _e,
} from "./app-initial-5851df3f6cb1.js";
import { n as ve, t as ye } from "./bullet-separator-9aa986eaf7a4.js";
import {
  _ as be,
  a as xe,
  c as Se,
  d as Ce,
  f as we,
  g as Te,
  h as Ee,
  i as De,
  l as Oe,
  m as ke,
  n as Ae,
  o as je,
  p as Me,
  r as Ne,
  s as Pe,
  t as Fe,
  u as Ie,
  v as Le,
  y as Re,
} from "./summary-panel-expandable-list-7e5eade158bb.js";
function ze(e) {
  let t = (0, He.c)(100),
    {
      autoCollapse: n,
      animateContentResize: r,
      sectionKey: a,
      after: o,
      children: s,
      mode: c,
      ref: l,
      sectionOptions: u,
      defaultCollapsed: d,
      inset: f,
      divider: m,
      surface: h,
      spacing: g,
      persistExpansion: _,
      title: y,
      titleSuffix: b,
      collapsedSummary: x,
      onChange: S,
    } = e,
    C = r !== void 0 && r,
    T = c === void 0 ? `accordion` : c,
    E = d !== void 0 && d,
    D = f === void 0 || f,
    O = m === void 0 || m,
    k = h === void 0 ? `elevated` : h,
    A = g === void 0 ? `section` : g,
    j = _ === void 0 || _,
    N = p(he),
    ee = W(X, a),
    te = W(Xe, a),
    [P, ne] = (0, We.useState)(!E),
    F = n != null && ee !== `canceled`,
    I = (n !== !0 || ee !== `collapsed`) && (j ? (te ?? !E) : P),
    L = w(i),
    re = D
      ? `px-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:px-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:px-5`
      : `px-2`,
    R;
  t[0] === re
    ? (R = t[1])
    : ((R = M(
        `flex flex-col gap-0.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:gap-0`,
        re,
      )),
      (t[0] = re),
      (t[1] = R));
  let z = R,
    B,
    V,
    H,
    U;
  if (t[2] !== C || t[3] !== D || t[4] !== I || t[5] !== T || t[6] !== j || t[7] !== N || t[8] !== a) {
    B = M(`relative z-0`, (T !== `headerless` || C) && `overflow-hidden`, !D && `-mx-2`);
    let e;
    (t[13] !== j || t[14] !== N || t[15] !== a
      ? ((e = (e) => {
          j ? N.set(Xe, a, e) : ne(e);
        }),
        (t[13] = j),
        (t[14] = N),
        (t[15] = a),
        (t[16] = e))
      : (e = t[16]),
      (V = e),
      (H = T === `headerless` || T === `heading` || I || T === `dropdown`),
      (U = M(B, `mt-0.5`)),
      (t[2] = C),
      (t[3] = D),
      (t[4] = I),
      (t[5] = T),
      (t[6] = j),
      (t[7] = N),
      (t[8] = a),
      (t[9] = B),
      (t[10] = V),
      (t[11] = H),
      (t[12] = U));
  } else ((B = t[9]), (V = t[10]), (H = t[11]), (U = t[12]));
  let ie;
  t[17] !== s || t[18] !== z
    ? ((ie = (0, Y.jsx)(`div`, { className: z, children: s })), (t[17] = s), (t[18] = z), (t[19] = ie))
    : (ie = t[19]);
  let ae;
  t[20] !== U || t[21] !== ie
    ? ((ae = (0, Y.jsx)(`div`, { className: U, children: ie })), (t[20] = U), (t[21] = ie), (t[22] = ae))
    : (ae = t[22]);
  let oe = ae,
    se;
  (t[23] === V
    ? (se = t[24])
    : ((se = () => ({ collapse: () => V(!1), expand: () => V(!0) })), (t[23] = V), (t[24] = se)),
    (0, We.useImperativeHandle)(l, se));
  let ce, le;
  (t[25] !== n || t[26] !== ee || t[27] !== F || t[28] !== N || t[29] !== a
    ? ((ce = () => {
        if (!F) return;
        if (!n) {
          ee === `collapsed` && N.set(X, a, `pending`);
          return;
        }
        if (ee !== `pending`) return;
        let e = window.setTimeout(() => {
          N.set(X, a, `collapsed`);
        }, Ge);
        return () => window.clearTimeout(e);
      }),
      (le = [n, ee, F, N, a]),
      (t[25] = n),
      (t[26] = ee),
      (t[27] = F),
      (t[28] = N),
      (t[29] = a),
      (t[30] = ce),
      (t[31] = le))
    : ((ce = t[30]), (le = t[31])),
    (0, We.useEffect)(ce, le));
  let ue;
  t[32] !== C || t[33] !== s || t[34] !== oe || t[35] !== B || t[36] !== z || t[37] !== H || t[38] !== L
    ? ((ue = L
        ? H && oe
        : (0, Y.jsx)(v, {
            initial: !1,
            children:
              H &&
              (0, Y.jsx)(
                Be,
                { className: B, animateContentResize: C, sectionContentClassName: z, children: s },
                `content`,
              ),
          })),
      (t[32] = C),
      (t[33] = s),
      (t[34] = oe),
      (t[35] = B),
      (t[36] = z),
      (t[37] = H),
      (t[38] = L),
      (t[39] = ue))
    : (ue = t[39]);
  let de = ue;
  if (T === `row`) {
    let e = s != null,
      n;
    t[40] !== s || t[41] !== I || t[42] !== V || t[43] !== y
      ? ((n =
          s == null
            ? y
            : (0, Y.jsx)(be, {
                "aria-expanded": I,
                className: `select-none`,
                onClick: () => V(!I),
                children: y,
              })),
        (t[40] = s),
        (t[41] = I),
        (t[42] = V),
        (t[43] = y),
        (t[44] = n))
      : (n = t[44]);
    let r;
    t[45] !== o || t[46] !== I
      ? ((r = (0, Ue.default)(o) ? o({ isExpanded: I }) : o), (t[45] = o), (t[46] = I), (t[47] = r))
      : (r = t[47]);
    let i;
    t[48] !== e || t[49] !== n || t[50] !== r
      ? ((i = (0, Y.jsx)(`div`, {
          className: `px-5`,
          children: (0, Y.jsxs)(De, { interactive: e, children: [n, r] }),
        })),
        (t[48] = e),
        (t[49] = n),
        (t[50] = r),
        (t[51] = i))
      : (i = t[51]);
    let a = s == null ? null : de,
      c;
    return (
      t[52] !== i || t[53] !== a
        ? ((c = (0, Y.jsxs)(`section`, {
            className: `flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4`,
            children: [i, a],
          })),
          (t[52] = i),
          (t[53] = a),
          (t[54] = c))
        : (c = t[54]),
      c
    );
  }
  if (T === `card` || T === `plain`) {
    let e = T === `card` ? `gap-1` : `gap-2`,
      n;
    t[55] === e
      ? (n = t[56])
      : ((n = M(
          `flex min-w-0 flex-col group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-4`,
          e,
        )),
        (t[55] = e),
        (t[56] = n));
    let r;
    t[57] !== o || t[58] !== T || t[59] !== y
      ? ((r =
          y != null || o != null
            ? (0, Y.jsxs)(`header`, {
                className: M(
                  `flex min-w-0 items-center justify-between gap-2 text-sm text-secondary select-none group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row`,
                  T === `card` && `px-1`,
                ),
                children: [
                  y == null ? null : (0, Y.jsx)(`h3`, { className: `truncate`, children: y }),
                  (0, Ue.default)(o) ? o({ isExpanded: !0 }) : o,
                ],
              })
            : null),
        (t[57] = o),
        (t[58] = T),
        (t[59] = y),
        (t[60] = r))
      : (r = t[60]);
    let i =
        T === `card`
          ? `group/summary-card overflow-hidden rounded-2xl border border-default`
          : `flex min-w-0 flex-col`,
      a = T === `card` ? `card` : void 0,
      c;
    t[61] !== C || t[62] !== s || t[63] !== L
      ? ((c =
          C && !L
            ? (0, Y.jsx)(Be, {
                className: `overflow-hidden`,
                animateContentResize: !0,
                collapsible: !1,
                sectionContentClassName: ``,
                children: s,
              })
            : s),
        (t[61] = C),
        (t[62] = s),
        (t[63] = L),
        (t[64] = c))
      : (c = t[64]);
    let l;
    t[65] !== i || t[66] !== a || t[67] !== c
      ? ((l = (0, Y.jsx)(`div`, { className: i, "data-variant": a, children: c })),
        (t[65] = i),
        (t[66] = a),
        (t[67] = c),
        (t[68] = l))
      : (l = t[68]);
    let u;
    return (
      t[69] !== n || t[70] !== r || t[71] !== l
        ? ((u = (0, Y.jsxs)(`section`, { className: n, children: [r, l] })),
          (t[69] = n),
          (t[70] = r),
          (t[71] = l),
          (t[72] = u))
        : (u = t[72]),
      u
    );
  }
  let fe =
      A === `nested`
        ? `pt-3`
        : `pb-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:py-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:first:pt-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:first:pt-2 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:last:pb-4`,
    G =
      O &&
      `after:absolute after:bottom-0 after:h-[0.5px] after:bg-border after:content-[''] last:after:hidden`,
    pe = D
      ? `after:inset-x-5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:after:inset-x-4`
      : `after:inset-x-0`,
    me = T === `accordion` && !I ? `last:pb-0.5` : `last:pb-0`,
    K;
  t[73] !== fe || t[74] !== G || t[75] !== pe || t[76] !== me
    ? ((K = M(`relative z-0 flex flex-col`, fe, G, pe, me)),
      (t[73] = fe),
      (t[74] = G),
      (t[75] = pe),
      (t[76] = me),
      (t[77] = K))
    : (K = t[77]);
  let q;
  t[78] !== F || t[79] !== N || t[80] !== a
    ? ((q = F
        ? () => {
            N.set(X, a, `canceled`);
          }
        : void 0),
      (t[78] = F),
      (t[79] = N),
      (t[80] = a),
      (t[81] = q))
    : (q = t[81]);
  let J;
  t[82] !== o ||
  t[83] !== x ||
  t[84] !== D ||
  t[85] !== I ||
  t[86] !== T ||
  t[87] !== S ||
  t[88] !== u ||
  t[89] !== V ||
  t[90] !== L ||
  t[91] !== k ||
  t[92] !== y ||
  t[93] !== b
    ? ((J =
        T === `headerless`
          ? null
          : (0, Y.jsx)(Ve, {
              inset: D,
              surface: k,
              after: (0, Ue.default)(o) ? o({ isExpanded: I }) : o,
              sectionOptions: u,
              mode: T,
              isExpanded: I,
              onChange: S,
              onToggle: () => {
                T !== `dropdown` && V(!I);
              },
              shouldUseReducedMotion: L,
              titleSuffix: b,
              collapsedSummary: x,
              children: y,
            })),
      (t[82] = o),
      (t[83] = x),
      (t[84] = D),
      (t[85] = I),
      (t[86] = T),
      (t[87] = S),
      (t[88] = u),
      (t[89] = V),
      (t[90] = L),
      (t[91] = k),
      (t[92] = y),
      (t[93] = b),
      (t[94] = J))
    : (J = t[94]);
  let ge;
  return (
    t[95] !== de || t[96] !== K || t[97] !== q || t[98] !== J
      ? ((ge = (0, Y.jsxs)(`section`, { role: `presentation`, className: K, onClick: q, children: [J, de] })),
        (t[95] = de),
        (t[96] = K),
        (t[97] = q),
        (t[98] = J),
        (t[99] = ge))
      : (ge = t[99]),
    ge
  );
}
function Be(e) {
  let t = (0, He.c)(19),
    { className: n, animateContentResize: r, children: i, collapsible: a, sectionContentClassName: o } = e,
    s = a === void 0 || a,
    c = b(),
    [l, u] = (0, We.useState)(null),
    d = !c,
    f = !c,
    p = s ? Je : !1,
    m;
  t[0] === s ? (m = t[1]) : ((m = s ? Ye : {}), (t[0] = s), (t[1] = m));
  let h = r ? (l ?? `auto`) : `auto`,
    g;
  t[2] !== m || t[3] !== h ? ((g = { ...m, height: h }), (t[2] = m), (t[3] = h), (t[4] = g)) : (g = t[4]);
  let _ = s ? Je : void 0,
    v;
  t[5] === r
    ? (v = t[6])
    : ((v = r
        ? (e) =>
            fe({
              axis: `height`,
              target: e,
              onChange: (e) => {
                let { height: t } = e;
                return u(t);
              },
            })
        : void 0),
      (t[5] = r),
      (t[6] = v));
  let y;
  t[7] !== i || t[8] !== o || t[9] !== v
    ? ((y = (0, Y.jsx)(`div`, { ref: v, className: o, children: i })),
      (t[7] = i),
      (t[8] = o),
      (t[9] = v),
      (t[10] = y))
    : (y = t[10]);
  let x;
  return (
    t[11] !== n || t[12] !== y || t[13] !== d || t[14] !== f || t[15] !== p || t[16] !== g || t[17] !== _
      ? ((x = (0, Y.jsx)(k.div, {
          className: n,
          "aria-hidden": d,
          inert: f,
          initial: p,
          animate: g,
          exit: _,
          transition: L,
          children: y,
        })),
        (t[11] = n),
        (t[12] = y),
        (t[13] = d),
        (t[14] = f),
        (t[15] = p),
        (t[16] = g),
        (t[17] = _),
        (t[18] = x))
      : (x = t[18]),
    x
  );
}
function Ve(e) {
  let t = (0, He.c)(35),
    {
      inset: n,
      surface: r,
      mode: i,
      sectionOptions: a,
      after: o,
      children: c,
      isExpanded: l,
      onToggle: u,
      onChange: d,
      shouldUseReducedMotion: f,
      titleSuffix: p,
      collapsedSummary: h,
    } = e,
    g = a != null && a.length > 1,
    _ = i === `accordion` ? u : void 0,
    v;
  t[0] === c
    ? (v = t[1])
    : ((v = (0, Y.jsx)(`span`, { className: `truncate`, children: c })), (t[0] = c), (t[1] = v));
  let y = l ? null : p,
    b;
  t[2] !== g || t[3] !== l || t[4] !== i || t[5] !== f
    ? ((b =
        (i === `accordion` || g) &&
        (0, Y.jsx)(D, {
          "aria-hidden": `true`,
          className: M(
            `icon-2xs shrink-0 group-hover/section-toggle:opacity-100 group-focus-visible/section-toggle:opacity-100`,
            !f && `transition-transform`,
            l ? `opacity-0` : `opacity-100`,
            l ? `rotate-0` : `-rotate-90`,
          ),
        })),
      (t[2] = g),
      (t[3] = l),
      (t[4] = i),
      (t[5] = f),
      (t[6] = b))
    : (b = t[6]);
  let x;
  t[7] !== h || t[8] !== l
    ? ((x =
        !l && h != null
          ? (0, Y.jsx)(`span`, { className: `ms-auto flex min-w-0 items-center`, children: h })
          : null),
      (t[7] = h),
      (t[8] = l),
      (t[9] = x))
    : (x = t[9]);
  let S;
  t[10] !== l || t[11] !== _ || t[12] !== v || t[13] !== y || t[14] !== b || t[15] !== x
    ? ((S = (0, Y.jsxs)(`button`, {
        "aria-expanded": l,
        className: `group/section-toggle -ms-[3.5px] inline-flex min-w-0 flex-1 cursor-interaction items-center gap-1.5 rounded-xl py-0.5 ps-[3.5px] pe-1 text-start focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring`,
        onClick: _,
        type: `button`,
        children: [v, y, b, x],
      })),
      (t[10] = l),
      (t[11] = _),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S))
    : (S = t[16]);
  let C = S,
    w = C;
  if (i === `heading`) {
    let e;
    (t[17] === c
      ? (e = t[18])
      : ((e = (0, Y.jsx)(`h3`, { className: `min-w-0 truncate select-none`, children: c })),
        (t[17] = c),
        (t[18] = e)),
      (w = e));
  } else if (i === `dropdown` && g) {
    let e;
    t[19] !== d || t[20] !== a
      ? ((e = a?.map((e) => (0, Y.jsx)(m, { onSelect: () => d?.(e), children: e }, e))),
        (t[19] = d),
        (t[20] = a),
        (t[21] = e))
      : (e = t[21]);
    let n;
    (t[22] !== e || t[23] !== C
      ? ((n = (0, Y.jsx)(s, { triggerButton: C, children: e })), (t[22] = e), (t[23] = C), (t[24] = n))
      : (n = t[24]),
      (w = n));
  }
  let T =
      r === `panel`
        ? `bg-[var(--app-shell-panel-background,var(--color-surface))] before:bg-[var(--app-shell-panel-background,var(--color-surface))]`
        : `bg-surface-elevated-secondary before:bg-surface-elevated-secondary`,
    E =
      n &&
      `ps-5 pe-3.5 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:ps-4 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:ps-5`,
    O;
  t[25] !== T || t[26] !== E
    ? ((O = M(
        `sticky top-2 z-10 flex h-7 w-full min-w-0 items-center justify-start gap-2 pb-0.5 text-sm font-normal text-secondary before:pointer-events-none before:absolute before:inset-x-0 before:-top-2 before:h-2 before:content-[''] group-data-[summary-panel-variant=dynamic-isle]/summary-panel:h-6 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:group-data-[summary-panel-density=comfortable]/summary-panel:h-7 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:pb-0 group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row`,
        T,
        E,
      )),
      (t[25] = T),
      (t[26] = E),
      (t[27] = O))
    : (O = t[27]);
  let k;
  t[28] !== o || t[29] !== i
    ? ((k =
        o == null
          ? null
          : (0, Y.jsx)(`div`, {
              className: M(`relative flex`, i === `heading` ? `min-w-0 flex-1` : `shrink-0`),
              children: o,
            })),
      (t[28] = o),
      (t[29] = i),
      (t[30] = k))
    : (k = t[30]);
  let A;
  return (
    t[31] !== w || t[32] !== k || t[33] !== O
      ? ((A = (0, Y.jsxs)(`header`, { className: O, children: [w, k] })),
        (t[31] = w),
        (t[32] = k),
        (t[33] = O),
        (t[34] = A))
      : (A = t[34]),
    A
  );
}
var He, Ue, We, Y, Ge, Ke, qe, Je, Ye, Xe, X;
function Ze() {
  return (Ze = e(() => {
    ((He = z()),
      O(),
      c(),
      ee(),
      B(),
      (Ue = t(r(), 1)),
      h(),
      (We = U()),
      a(),
      E(),
      ae(),
      g(),
      _(),
      G(),
      q(),
      Re(),
      (Y = V()),
      (Ge = 3e4),
      (Ke = `thread-summary-panel-section-expanded-`),
      (qe = null),
      (Je = { height: 0, opacity: 0, marginTop: 0 }),
      (Ye = { height: `auto`, opacity: 1, marginTop: 2 }),
      (Xe = pe((e) => `${Ke}${e}`, qe)),
      (X = A(he, (e) => `pending`)));
  }))();
}
var Qe, $e;
function et() {
  return (et = e(() => {
    ((Qe = {
      visible: { opacity: 1, transform: `translateX(0%)` },
      hidden: { opacity: 0, transform: `translateX(100%)` },
    }),
      ($e = { type: `spring`, duration: 0.3, bounce: 0.01 }));
  }))();
}
var tt, nt;
function rt() {
  return (rt = e(() => {
    (U(),
      (tt = V()),
      (nt = (e) =>
        (0, tt.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, tt.jsx)(`path`, {
            d: `M16.6345 5.83331C16.6345 4.81987 15.813 3.99835 14.7996 3.99835C13.7863 3.99855 12.9646 4.81999 12.9646 5.83331C12.9646 6.84663 13.7863 7.66808 14.7996 7.66827C15.813 7.66827 16.6345 6.84676 16.6345 5.83331ZM3.36499 14.1663C3.36499 15.1798 4.18651 16.0013 5.19995 16.0013C6.21339 16.0013 7.03491 15.1798 7.03491 14.1663C7.03471 13.153 6.21327 12.3314 5.19995 12.3314C4.18663 12.3314 3.36519 13.153 3.36499 14.1663ZM17.9646 5.83331C17.9646 7.58129 16.5475 8.99835 14.7996 8.99835C13.2785 8.99818 12.0078 7.92497 11.7039 6.49445L11.6667 6.49835H11.3347C10.5362 6.49835 9.96426 6.49872 9.54565 6.52081C9.21098 6.53848 9.04089 6.56873 8.96069 6.59113L8.90796 6.60968C8.41777 6.86301 8.2248 7.46527 8.47632 7.95636L8.50757 8.00323C8.55968 8.068 8.68066 8.19148 8.94312 8.4007C9.27097 8.66203 9.73648 8.99501 10.3865 9.45929L11.239 10.0716C11.489 10.2539 11.7044 10.4155 11.8855 10.5599C12.2255 10.8309 12.5425 11.1144 12.7078 11.4368L12.8054 11.6536C13.206 12.6785 12.8306 13.8502 11.9089 14.4515L11.7029 14.5716C11.381 14.7379 10.9584 14.785 10.5242 14.8079C10.0619 14.8323 9.44766 14.8314 8.66479 14.8314H8.33276C8.31992 14.8314 8.30734 14.8282 8.29468 14.8275C7.9907 16.2581 6.72124 17.3314 5.19995 17.3314C3.45197 17.3314 2.03491 15.9143 2.03491 14.1663C2.03511 12.4185 3.45209 11.0013 5.19995 11.0013C6.72066 11.0013 7.99008 12.0743 8.29468 13.5042C8.30731 13.5035 8.31995 13.5013 8.33276 13.5013H8.66479C9.46362 13.5013 10.0362 13.5019 10.4548 13.4798C10.9013 13.4562 11.0544 13.4096 11.0925 13.39L11.1804 13.3382C11.5766 13.0799 11.7385 12.5765 11.5662 12.136L11.5242 12.0433C11.5046 12.0051 11.4062 11.8788 11.0564 11.5999C10.8925 11.4693 10.6943 11.3206 10.4558 11.1468L9.61304 10.5413C8.97593 10.0862 8.47599 9.72927 8.11401 9.44073C7.81659 9.20364 7.53702 8.95681 7.36108 8.68292L7.29272 8.56378C6.70695 7.42066 7.15568 6.0189 8.29663 5.42902L8.42163 5.3714C8.7241 5.25059 9.09524 5.21275 9.47534 5.19269C9.93756 5.16829 10.5518 5.16827 11.3347 5.16827H11.6667L11.7039 5.1712C12.0082 3.74114 13.2788 2.66845 14.7996 2.66827C16.5475 2.66827 17.9646 4.08533 17.9646 5.83331Z`,
            fill: `currentColor`,
          }),
        })));
  }))();
}
function it(e) {
  let t = (0, ut.c)(8),
    n,
    r;
  t[0] === e ? ((n = t[1]), (r = t[2])) : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = M(
        `vertical-scroll-fade-mask -mx-2 max-h-52 overflow-x-hidden overflow-y-auto overscroll-contain px-2`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, Z.jsx)(`div`, { ...r, className: i })), (t[5] = r), (t[6] = i), (t[7] = a))
      : (a = t[7]),
    a
  );
}
function at(e) {
  let t = (0, ut.c)(17),
    { children: n, getKey: r, label: i, onShowAll: a, sources: o } = e,
    s;
  if (t[0] !== n || t[1] !== r || t[2] !== o) {
    let e;
    (t[4] !== n || t[5] !== r
      ? ((e = (e) => (0, Z.jsx)(`div`, { role: `listitem`, children: n(e) }, r(e))),
        (t[4] = n),
        (t[5] = r),
        (t[6] = e))
      : (e = t[6]),
      (s = o.slice(0, dt).map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = o),
      (t[3] = s));
  } else s = t[3];
  let c;
  t[7] !== i || t[8] !== s
    ? ((c = (0, Z.jsx)(we, { "aria-label": i, role: `list`, children: s })),
      (t[7] = i),
      (t[8] = s),
      (t[9] = c))
    : (c = t[9]);
  let l;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Z.jsx)(ke, { children: (0, Z.jsx)(nt, {}) })), (t[10] = l))
    : (l = t[10]);
  let u;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Z.jsx)(Me, {
        children: (0, Z.jsx)(f, {
          id: `codex.localConversation.sources.showAll`,
          defaultMessage: `View all`,
          description: `Button that opens the complete source list in the side panel`,
        }),
      })),
      (t[11] = u))
    : (u = t[11]);
  let d;
  t[12] === a
    ? (d = t[13])
    : ((d = (0, Z.jsxs)(Ie, {
        interaction: `foreground`,
        onClick: a,
        tone: `conversation-summary`,
        children: [l, u],
      })),
      (t[12] = a),
      (t[13] = d));
  let p;
  return (
    t[14] !== c || t[15] !== d
      ? ((p = (0, Z.jsxs)(Z.Fragment, { children: [c, d] })), (t[14] = c), (t[15] = d), (t[16] = p))
      : (p = t[16]),
    p
  );
}
function ot(e) {
  let t = (0, ut.c)(30),
    {
      controls: n,
      expanded: r,
      href: i,
      icon: a,
      label: o,
      multiline: s,
      onOpen: c,
      onOpenLink: l,
      requiresConfirmation: u,
      showHoverActions: f,
    } = e,
    p = s !== void 0 && s,
    m;
  t[0] === a
    ? (m = t[1])
    : ((m = (0, Z.jsx)(ke, { variant: `custom`, children: a })), (t[0] = a), (t[1] = m));
  let h = p ? `line-clamp-2` : void 0,
    g = !p,
    _;
  t[2] !== o || t[3] !== h || t[4] !== g
    ? ((_ = (0, Z.jsx)(Me, { className: h, truncate: g, children: o })),
      (t[2] = o),
      (t[3] = h),
      (t[4] = g),
      (t[5] = _))
    : (_ = t[5]);
  let v;
  t[6] === r
    ? (v = t[7])
    : ((v =
        r == null
          ? null
          : (0, Z.jsx)(Te, {
              visibility: `interaction`,
              children: (0, Z.jsx)(d, { className: r ? void 0 : `-rotate-90` }),
            })),
      (t[6] = r),
      (t[7] = v));
  let y;
  t[8] !== m || t[9] !== _ || t[10] !== v
    ? ((y = (0, Z.jsxs)(Z.Fragment, { children: [m, _, v] })),
      (t[8] = m),
      (t[9] = _),
      (t[10] = v),
      (t[11] = y))
    : (y = t[11]);
  let b = y;
  if (i != null) {
    let e = f ? i : void 0,
      n = f ? void 0 : o,
      r;
    return (
      t[12] !== b ||
      t[13] !== i ||
      t[14] !== o ||
      t[15] !== l ||
      t[16] !== u ||
      t[17] !== f ||
      t[18] !== e ||
      t[19] !== n
        ? ((r = (0, Z.jsx)(Ee, {
            "aria-label": o,
            className: `select-none`,
            href: i,
            initiator: `markdown_link_click`,
            requiresConfirmation: u,
            onUnmodifiedClick: l,
            showHoverActions: f,
            tooltipContent: e,
            title: n,
            tone: `muted`,
            children: b,
          })),
          (t[12] = b),
          (t[13] = i),
          (t[14] = o),
          (t[15] = l),
          (t[16] = u),
          (t[17] = f),
          (t[18] = e),
          (t[19] = n),
          (t[20] = r))
        : (r = t[20]),
      r
    );
  }
  if (c != null) {
    let e;
    return (
      t[21] !== b || t[22] !== n || t[23] !== r || t[24] !== o || t[25] !== c
        ? ((e = (0, Z.jsx)(Ie, {
            "aria-controls": n,
            "aria-expanded": r,
            "aria-label": o,
            className: `select-none`,
            onClick: c,
            title: o,
            tone: `muted`,
            children: b,
          })),
          (t[21] = b),
          (t[22] = n),
          (t[23] = r),
          (t[24] = o),
          (t[25] = c),
          (t[26] = e))
        : (e = t[26]),
      e
    );
  }
  let x;
  return (
    t[27] !== b || t[28] !== o
      ? ((x = (0, Z.jsx)(De, { className: `select-none`, tone: `muted`, title: o, children: b })),
        (t[27] = b),
        (t[28] = o),
        (t[29] = x))
      : (x = t[29]),
    x
  );
}
function st(e) {
  let t = (0, ut.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Z.jsx)(`div`, { className: `h-full min-h-0 overflow-y-auto bg-surface`, children: n })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function ct(e) {
  let t = (0, ut.c)(3),
    { children: n, label: r } = e,
    i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, Z.jsx)(`ul`, { "aria-label": r, className: `flex flex-col px-4`, children: n })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function lt(e) {
  let t = (0, ut.c)(40),
    {
      children: n,
      href: r,
      icon: i,
      label: a,
      meta: o,
      presentation: s,
      onOpen: c,
      onOpenLink: l,
      requiresConfirmation: u,
      showHoverActions: d,
    } = e;
  if ((s === void 0 ? `side-panel` : s) === `summary`) {
    let e;
    return (
      t[0] !== r || t[1] !== i || t[2] !== a || t[3] !== c || t[4] !== l || t[5] !== u || t[6] !== d
        ? ((e = (0, Z.jsx)(`li`, {
            children: (0, Z.jsx)(ot, {
              href: r,
              icon: i,
              label: a,
              onOpen: c,
              onOpenLink: l,
              requiresConfirmation: u,
              showHoverActions: d,
            }),
          })),
          (t[0] = r),
          (t[1] = i),
          (t[2] = a),
          (t[3] = c),
          (t[4] = l),
          (t[5] = u),
          (t[6] = d),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let f;
  t[8] === i
    ? (f = t[9])
    : ((f = (0, Z.jsx)(`span`, {
        className: `flex h-5 w-[18px] shrink-0 items-center justify-center`,
        children: i,
      })),
      (t[8] = i),
      (t[9] = f));
  let p;
  t[10] === a
    ? (p = t[11])
    : ((p = (0, Z.jsx)(`span`, { className: `text-sm font-medium break-words text-default`, children: a })),
      (t[10] = a),
      (t[11] = p));
  let m;
  t[12] === o
    ? (m = t[13])
    : ((m =
        o == null ? null : (0, Z.jsx)(`span`, { className: `text-xs break-all text-tertiary`, children: o })),
      (t[12] = o),
      (t[13] = m));
  let h;
  t[14] !== p || t[15] !== m
    ? ((h = (0, Z.jsxs)(`span`, { className: `flex min-w-0 flex-1 flex-col gap-0.5`, children: [p, m] })),
      (t[14] = p),
      (t[15] = m),
      (t[16] = h))
    : (h = t[16]);
  let g;
  t[17] !== f || t[18] !== h
    ? ((g = (0, Z.jsxs)(Z.Fragment, { children: [f, h] })), (t[17] = f), (t[18] = h), (t[19] = g))
    : (g = t[19]);
  let _ = g,
    v;
  if (r != null) {
    let e = d ? r : void 0,
      n = d ? void 0 : r,
      i;
    (t[20] !== _ ||
    t[21] !== r ||
    t[22] !== a ||
    t[23] !== l ||
    t[24] !== u ||
    t[25] !== d ||
    t[26] !== e ||
    t[27] !== n
      ? ((i = (0, Z.jsx)(_e, {
          "aria-label": a,
          className: `flex w-full cursor-interaction items-center gap-2 rounded-md text-start focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
          href: r,
          initiator: `markdown_link_click`,
          requiresConfirmation: u,
          onUnmodifiedClick: l,
          showHoverActions: d,
          tooltipContent: e,
          title: n,
          children: _,
        })),
        (t[20] = _),
        (t[21] = r),
        (t[22] = a),
        (t[23] = l),
        (t[24] = u),
        (t[25] = d),
        (t[26] = e),
        (t[27] = n),
        (t[28] = i))
      : (i = t[28]),
      (v = i));
  } else if (c != null) {
    let e;
    (t[29] !== _ || t[30] !== a || t[31] !== c
      ? ((e = (0, Z.jsx)(`button`, {
          "aria-label": a,
          className: `flex w-full cursor-interaction items-center gap-2 rounded-md text-start focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring`,
          type: `button`,
          onClick: c,
          children: _,
        })),
        (t[29] = _),
        (t[30] = a),
        (t[31] = c),
        (t[32] = e))
      : (e = t[32]),
      (v = e));
  } else {
    let e;
    (t[33] === _
      ? (e = t[34])
      : ((e = (0, Z.jsx)(`div`, { className: `flex w-full items-center gap-2 text-start`, children: _ })),
        (t[33] = _),
        (t[34] = e)),
      (v = e));
  }
  let y;
  t[35] === n
    ? (y = t[36])
    : ((y =
        n == null
          ? null
          : (0, Z.jsx)(`div`, {
              className: `mt-3 flex flex-col gap-1 ps-6 text-sm leading-5 text-secondary`,
              children: n,
            })),
      (t[35] = n),
      (t[36] = y));
  let b;
  return (
    t[37] !== v || t[38] !== y
      ? ((b = (0, Z.jsxs)(`li`, {
          className: `border-b border-default py-4 last:border-b-0`,
          children: [v, y],
        })),
        (t[37] = v),
        (t[38] = y),
        (t[39] = b))
      : (b = t[39]),
    b
  );
}
var ut, Z, dt, ft;
function pt() {
  return (pt = e(() => {
    ((ut = z()),
      O(),
      P(),
      ge(),
      y(),
      rt(),
      Re(),
      (Z = V()),
      (dt = 3),
      (ft = { Details: lt, List: at, Row: ot, SidePanel: st, SidePanelList: ct, Viewport: it }));
  }))();
}
var mt, ht, gt;
function _t() {
  return (_t = e(() => {
    ((mt = `_portalLayout_pha1e_1`),
      (ht = `_belowToolbar_pha1e_15`),
      (gt = { portalLayout: mt, belowToolbar: ht }));
  }))();
}
function vt(e) {
  let t = (0, wt.c)(2),
    n;
  t[0] === e ? (n = t[1]) : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { afterAnimation: r } = n,
    i = r !== void 0 && r,
    { isVisible: a, isAnimating: o } = (0, Q.useContext)(Ot);
  return a && (!i || !o);
}
function yt(e) {
  let t = (0, wt.c)(121),
    {
      animateOnExit: n,
      animateOnMount: r,
      children: a,
      fillHeight: o,
      fullWidth: s,
      fullWidthTransition: c,
      isPIPObstacle: l,
      maxHeight: u,
      placement: d,
      portalContainer: f,
      reserveToolbarSpace: p,
      resizer: m,
      shouldHideInlineImmediately: h,
      shouldShow: g,
      width: _,
    } = e,
    v = n === void 0 || n,
    y = r !== void 0 && r,
    x = o !== void 0 && o,
    C = s !== void 0 && s,
    T = c === void 0 ? `default` : c,
    E = l === void 0 || l,
    D = d === void 0 ? `floating` : d,
    O = p !== void 0 && p,
    A = _ === void 0 ? 300 : _,
    j = S(),
    [N, ee] = (0, Q.useState)(null),
    te = N == null ? null : N / 2,
    P = w(ie),
    ne = w(ue),
    F = w(i),
    L = b(),
    re = g && L && !h,
    R = I(),
    [z, B] = (0, Q.useState)(g),
    [V, H] = (0, Q.useState)(y && !F && !P),
    U = D === `docked` ? Et : Qe.hidden,
    W = g ? Qe.visible : U,
    ae = (0, Q.useRef)(null),
    se = (0, Q.useRef)(P),
    ce = (0, Q.useRef)(ne),
    le = (0, Q.useRef)(!1),
    fe = (0, Q.useRef)(y),
    G;
  if (F || P) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = { duration: 0 }), (t[0] = e)) : (e = t[0]),
      (G = e));
  } else G = D === `docked` ? oe : $e;
  let pe;
  t[1] === T
    ? (pe = t[2])
    : ((pe = T === `relaxed` ? { ...de, duration: 300 / 1e3 } : de), (t[1] = T), (t[2] = pe));
  let he = pe,
    K;
  t[3] !== P || t[4] !== L || t[5] !== ne || t[6] !== h || t[7] !== F || t[8] !== R || t[9] !== W
    ? ((K = () => {
        if (!L) return;
        le.current ||
          queueMicrotask(() => {
            le.current = !0;
          });
        let e = se.current !== P,
          t = ce.current !== ne,
          n = ae.current !== W;
        ((ae.current = W),
          (se.current = P),
          (ce.current = ne),
          R.stop(),
          (!le.current && !fe.current) || e || t || (!n && le.current) || h || F
            ? (R.set(W), B(W.opacity > 0), H(!1))
            : R.start(W));
      }),
      (t[3] = P),
      (t[4] = L),
      (t[5] = ne),
      (t[6] = h),
      (t[7] = F),
      (t[8] = R),
      (t[9] = W),
      (t[10] = K))
    : (K = t[10]);
  let q;
  (t[11] !== P ||
  t[12] !== L ||
  t[13] !== ne ||
  t[14] !== f ||
  t[15] !== h ||
  t[16] !== F ||
  t[17] !== R ||
  t[18] !== W
    ? ((q = [P, L, ne, f, h, F, R, W]),
      (t[11] = P),
      (t[12] = L),
      (t[13] = ne),
      (t[14] = f),
      (t[15] = h),
      (t[16] = F),
      (t[17] = R),
      (t[18] = W),
      (t[19] = q))
    : (q = t[19]),
    (0, Q.useLayoutEffect)(K, q));
  let J;
  t[20] !== D || t[21] !== m
    ? ((J = (e) => {
        let t = e?.parentElement;
        if (m == null || D !== `docked` || t == null) return;
        let n = () => ee(t.clientWidth);
        n();
        let r = new ResizeObserver(n);
        return (r.observe(t), () => r.disconnect());
      }),
      (t[20] = D),
      (t[21] = m),
      (t[22] = J))
    : (J = t[22]);
  let ge =
      D === `docked`
        ? `relative order-last min-w-0 max-w-1/2 shrink-0 overflow-hidden mt-[calc(var(--thread-floating-content-top-inset)-var(--spacing)*2-var(--thread-docked-panel-header-overlap,0px))]`
        : `absolute`,
    _e;
  t[23] !== C || t[24] !== D || t[25] !== f || t[26] !== O || t[27] !== ge
    ? ((_e = M(
        `pointer-events-none z-40`,
        ge,
        D === `floating` && [
          f != null && [gt.portalLayout, O && gt.belowToolbar],
          f == null &&
            (C
              ? `inset-0`
              : `top-(--thread-floating-content-top-inset) right-0 bottom-(--thread-floating-content-bottom-inset) max-w-full`),
        ],
      )),
      (t[23] = C),
      (t[24] = D),
      (t[25] = f),
      (t[26] = O),
      (t[27] = ge),
      (t[28] = _e))
    : (_e = t[28]);
  let ve;
  t[29] === u ? (ve = t[30]) : ((ve = { maxHeight: u }), (t[29] = u), (t[30] = ve));
  let ye = !re,
    be = !re,
    xe;
  t[31] !== y || t[32] !== D || t[33] !== F
    ? ((xe = D === `docked` && y && !F ? { width: 0 } : !1),
      (t[31] = y),
      (t[32] = D),
      (t[33] = F),
      (t[34] = xe))
    : (xe = t[34]);
  let Se;
  t[35] !== C || t[36] !== D || t[37] !== f || t[38] !== g || t[39] !== A
    ? ((Se =
        D === `docked`
          ? { width: g ? `auto` : 0 }
          : {
              "--thread-floating-panel-full-width-progress": +!!C,
              width:
                f == null
                  ? `auto`
                  : `calc(min(${A}px, 100% - var(--spacing) * 5) * var(--thread-floating-panel-compact-progress) + 100% * (1 - var(--thread-floating-panel-compact-progress)))`,
            }),
      (t[35] = C),
      (t[36] = D),
      (t[37] = f),
      (t[38] = g),
      (t[39] = A),
      (t[40] = Se))
    : (Se = t[40]);
  let Ce;
  t[41] !== v || t[42] !== D
    ? ((Ce = v && D === `docked` ? { width: 0 } : void 0), (t[41] = v), (t[42] = D), (t[43] = Ce))
    : (Ce = t[43]);
  let we = D === `docked` || F ? G : he,
    Te = D === `docked` ? `w-max max-w-[50cqw]` : `max-w-full`,
    Ee = D === `floating` && f == null && !C && `pe-2`,
    De = x && `h-full`,
    Oe = (f != null || C) && `w-full`,
    ke;
  t[44] !== Te || t[45] !== Ee || t[46] !== De || t[47] !== Oe
    ? ((ke = M(`relative isolate flex max-h-full`, Te, Ee, De, Oe)),
      (t[44] = Te),
      (t[45] = Ee),
      (t[46] = De),
      (t[47] = Oe),
      (t[48] = ke))
    : (ke = t[48]);
  let Ae = re && E ? `thread-summary-panel` : void 0,
    je = (f != null || C) && `w-full`,
    Me;
  t[49] === je
    ? (Me = t[50])
    : ((Me = M(`pointer-events-none absolute inset-y-0 start-0 max-w-full`, je)), (t[49] = je), (t[50] = Me));
  let Ne;
  t[51] !== C || t[52] !== f || t[53] !== A
    ? ((Ne = f != null || C ? void 0 : { width: A }), (t[51] = C), (t[52] = f), (t[53] = A), (t[54] = Ne))
    : (Ne = t[54]);
  let Pe;
  t[55] !== Ae || t[56] !== Me || t[57] !== Ne
    ? ((Pe = (0, $.jsx)(`div`, { "data-pip-obstacle": Ae, className: Me, style: Ne, "aria-hidden": !0 })),
      (t[55] = Ae),
      (t[56] = Me),
      (t[57] = Ne),
      (t[58] = Pe))
    : (Pe = t[58]);
  let Fe = !g || (y && !F) ? U : Qe.visible,
    Ie = x && `h-full`,
    Le = (f != null || C) && `w-full`,
    Re = h && `invisible`,
    ze;
  t[59] !== Ie || t[60] !== Le || t[61] !== Re
    ? ((ze = M(`pointer-events-none max-h-full min-h-0 min-w-0 max-w-full`, Ie, Le, Re)),
      (t[59] = Ie),
      (t[60] = Le),
      (t[61] = Re),
      (t[62] = ze))
    : (ze = t[62]);
  let Be = v ? U : void 0,
    Ve = G,
    He;
  t[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = () => {
        (B(!0), H(!0));
      }),
      (t[63] = He))
    : (He = t[63]);
  let Ue;
  t[64] !== L || t[65] !== g
    ? ((Ue = () => {
        (B(g && L), H(!1));
      }),
      (t[64] = L),
      (t[65] = g),
      (t[66] = Ue))
    : (Ue = t[66]);
  let We =
      D === `docked` &&
      `border-l border-default bg-surface pt-[var(--thread-docked-panel-header-overlap,0px)]`,
    Y = x && `h-full`,
    Ge = (f != null || C) && `w-full`,
    Ke = re ? `pointer-events-auto` : `pointer-events-none`,
    qe;
  t[67] !== We || t[68] !== Y || t[69] !== Ge || t[70] !== Ke
    ? ((qe = M(`flex max-h-full min-h-0 max-w-full flex-col gap-3`, We, Y, Ge, Ke)),
      (t[67] = We),
      (t[68] = Y),
      (t[69] = Ge),
      (t[70] = Ke),
      (t[71] = qe))
    : (qe = t[71]);
  let Je;
  t[72] !== C || t[73] !== f || t[74] !== A
    ? ((Je = f != null || C ? void 0 : { width: A }), (t[72] = C), (t[73] = f), (t[74] = A), (t[75] = Je))
    : (Je = t[75]);
  let Ye = (re || z) && !h,
    Xe;
  t[76] !== C || t[77] !== V || t[78] !== D || t[79] !== Ye
    ? ((Xe = { fullWidth: C, isAnimating: V, isVisible: Ye, placement: D }),
      (t[76] = C),
      (t[77] = V),
      (t[78] = D),
      (t[79] = Ye),
      (t[80] = Xe))
    : (Xe = t[80]);
  let X;
  t[81] !== a || t[82] !== Xe
    ? ((X = (0, $.jsx)(Ot.Provider, { value: Xe, children: a })), (t[81] = a), (t[82] = Xe), (t[83] = X))
    : (X = t[83]);
  let Ze;
  t[84] !== qe || t[85] !== Je || t[86] !== X
    ? ((Ze = (0, $.jsx)(`div`, { className: qe, style: Je, children: X })),
      (t[84] = qe),
      (t[85] = Je),
      (t[86] = X),
      (t[87] = Ze))
    : (Ze = t[87]);
  let et;
  t[88] !== Fe || t[89] !== ze || t[90] !== Be || t[91] !== Ue || t[92] !== Ze || t[93] !== G || t[94] !== R
    ? ((et = (0, $.jsx)(k.div, {
        initial: Fe,
        className: ze,
        animate: R,
        exit: Be,
        transition: Ve,
        onAnimationStart: He,
        onAnimationComplete: Ue,
        children: Ze,
      })),
      (t[88] = Fe),
      (t[89] = ze),
      (t[90] = Be),
      (t[91] = Ue),
      (t[92] = Ze),
      (t[93] = G),
      (t[94] = R),
      (t[95] = et))
    : (et = t[95]);
  let tt;
  t[96] !== ke || t[97] !== Pe || t[98] !== et
    ? ((tt = (0, $.jsxs)(`div`, { className: ke, children: [Pe, et] })),
      (t[96] = ke),
      (t[97] = Pe),
      (t[98] = et),
      (t[99] = tt))
    : (tt = t[99]);
  let nt;
  t[100] !== j || t[101] !== te || t[102] !== D || t[103] !== m || t[104] !== A
    ? ((nt =
        D === `docked` &&
        m != null &&
        te != null &&
        te > 320 &&
        (0, $.jsx)(`div`, {
          className: `pointer-events-auto`,
          children: (0, $.jsx)(me, {
            ariaLabel: j.formatMessage({
              id: `splitView.resize`,
              defaultMessage: `Resize panels`,
              description: `Accessible name for the split-view resize handle`,
            }),
            edge: `left`,
            extendIntoToolbar: !1,
            defaultSize: m.defaultWidth,
            getCurrentSize: () => Math.min(A, te),
            minimumSize: 320,
            maximumSize: te,
            setSize: m.onWidthChange,
          }),
        })),
      (t[100] = j),
      (t[101] = te),
      (t[102] = D),
      (t[103] = m),
      (t[104] = A),
      (t[105] = nt))
    : (nt = t[105]);
  let rt;
  t[106] !== J ||
  t[107] !== _e ||
  t[108] !== ve ||
  t[109] !== ye ||
  t[110] !== be ||
  t[111] !== xe ||
  t[112] !== Se ||
  t[113] !== Ce ||
  t[114] !== we ||
  t[115] !== tt ||
  t[116] !== nt
    ? ((rt = (0, $.jsxs)(k.div, {
        ref: J,
        className: _e,
        style: ve,
        "aria-hidden": ye,
        inert: be,
        initial: xe,
        animate: Se,
        exit: Ce,
        transition: we,
        children: [tt, nt],
      })),
      (t[106] = J),
      (t[107] = _e),
      (t[108] = ve),
      (t[109] = ye),
      (t[110] = be),
      (t[111] = xe),
      (t[112] = Se),
      (t[113] = Ce),
      (t[114] = we),
      (t[115] = tt),
      (t[116] = nt),
      (t[117] = rt))
    : (rt = t[117]);
  let it = rt,
    at;
  return (
    t[118] !== it || t[119] !== f
      ? ((at = f == null ? it : (0, Tt.createPortal)(it, f)), (t[118] = it), (t[119] = f), (t[120] = at))
      : (at = t[120]),
    at
  );
}
function bt(e) {
  let t = (0, wt.c)(7),
    { children: n, isPIPObstacle: r } = e,
    i = r !== void 0 && r ? `thread-summary-panel-popover` : void 0,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((a = { width: 300 }), (t[0] = a)) : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { fullWidth: !1, isVisible: !0, isAnimating: !1, placement: `floating` }), (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, $.jsx)(Ot.Provider, { value: o, children: n })), (t[2] = n), (t[3] = s));
  let c;
  return (
    t[4] !== i || t[5] !== s
      ? ((c = (0, $.jsx)(`div`, {
          "data-pip-obstacle": i,
          className: `flex max-h-[min(var(--radix-popover-content-available-height),calc(100vh-16px))] flex-col gap-3`,
          style: a,
          children: s,
        })),
        (t[4] = i),
        (t[5] = s),
        (t[6] = c))
      : (c = t[6]),
    c
  );
}
function xt(e) {
  let t = (0, wt.c)(30),
    n,
    r,
    i,
    a,
    s,
    c,
    l,
    u;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (s = t[5]), (c = t[6]), (l = t[7]), (u = t[8]))
    : (({
        children: n,
        className: r,
        isHidden: s,
        variant: c,
        density: l,
        scrollable: u,
        onScroll: i,
        ...a
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u));
  let d = s !== void 0 && s,
    f = c === void 0 ? `summary` : c,
    p = l === void 0 ? `default` : l,
    m = u === void 0 || u,
    { fullWidth: h, isVisible: g, placement: _ } = (0, Q.useContext)(Ot),
    v = g && !d,
    y = (0, Q.useRef)(null),
    b = (0, Q.useRef)(0),
    x,
    S;
  (t[9] === v
    ? ((x = t[10]), (S = t[11]))
    : ((x = () => {
        if (v && b.current !== 0 && y.current != null) {
          let e = b.current,
            t = () => {
              y.current != null && (y.current.scrollTop = e);
            };
          t();
          let n = requestAnimationFrame(t);
          return () => cancelAnimationFrame(n);
        }
      }),
      (S = [v]),
      (t[9] = v),
      (t[10] = x),
      (t[11] = S)),
    (0, Q.useLayoutEffect)(x, S));
  let C = !m && `isolate`,
    w = h && `bg-surface`,
    T;
  t[12] !== r || t[13] !== C || t[14] !== w
    ? ((T = M(`group/summary-panel relative flex max-h-full min-h-0 flex-col overflow-hidden`, C, w, r)),
      (t[12] = r),
      (t[13] = C),
      (t[14] = w),
      (t[15] = T))
    : (T = t[15]);
  let E = h || _ === `docked`,
    D = m ? void 0 : i,
    O;
  t[16] !== n || t[17] !== v || t[18] !== i || t[19] !== m || t[20] !== f
    ? ((O = m
        ? (0, $.jsx)(k.div, {
            ref: y,
            className: `flex h-fit max-h-full min-h-0 min-w-0 flex-col overflow-x-hidden overflow-y-auto`,
            layoutScroll: !0,
            onScroll: (e) => {
              v && y.current != null && ((b.current = e.currentTarget.scrollTop), i?.(e));
            },
            children: (0, $.jsx)(`div`, {
              className: M(`flex flex-col`, f === `summary` && `gap-2 py-2.5`),
              children: n,
            }),
          })
        : n),
      (t[16] = n),
      (t[17] = v),
      (t[18] = i),
      (t[19] = m),
      (t[20] = f),
      (t[21] = O))
    : (O = t[21]);
  let A;
  return (
    t[22] !== p || t[23] !== a || t[24] !== E || t[25] !== D || t[26] !== O || t[27] !== T || t[28] !== f
      ? ((A = (0, $.jsx)(o, {
          className: T,
          "data-summary-panel-variant": f,
          "data-summary-panel-density": p,
          unstyled: E,
          variant: `island`,
          ...a,
          onScroll: D,
          children: O,
        })),
        (t[22] = p),
        (t[23] = a),
        (t[24] = E),
        (t[25] = D),
        (t[26] = O),
        (t[27] = T),
        (t[28] = f),
        (t[29] = A))
      : (A = t[29]),
    A
  );
}
function St(e) {
  let t = (0, wt.c)(17),
    r,
    i,
    a,
    o,
    s;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]), (s = t[5]))
    : (({ label: i, onClick: a, pressed: o, shortcut: s, ...r } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s));
  let c = o ? `secondary` : `ghost`,
    l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(u, { "aria-hidden": !1, icon: { assets: { 16: N, 20: T } } })), (t[6] = l))
    : (l = t[6]);
  let d;
  t[7] !== r || t[8] !== i || t[9] !== a || t[10] !== o || t[11] !== c
    ? ((d = (0, $.jsx)(n, {
        size: `toolbar`,
        color: c,
        "aria-label": i,
        "aria-pressed": o,
        title: i,
        onClick: a,
        uniform: !0,
        ...r,
        children: l,
      })),
      (t[7] = r),
      (t[8] = i),
      (t[9] = a),
      (t[10] = o),
      (t[11] = c),
      (t[12] = d))
    : (d = t[12]);
  let f;
  return (
    t[13] !== i || t[14] !== s || t[15] !== d
      ? ((f = (0, $.jsx)(re, { tooltipContent: i, shortcut: s, delayOpen: !0, children: d })),
        (t[13] = i),
        (t[14] = s),
        (t[15] = d),
        (t[16] = f))
      : (f = t[16]),
    f
  );
}
function Ct(e) {
  let t = (0, wt.c)(3),
    { count: n } = e;
  if (n === 0) return null;
  let r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((r = (0, $.jsx)(ye, {})), (t[0] = r)) : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, $.jsxs)(`span`, {
          className: `inline-flex items-center gap-1 text-sm text-tertiary group-data-[summary-panel-variant=dynamic-isle]/summary-panel:text-dynamic-isle-row`,
          children: [r, (0, $.jsx)(`span`, { children: (0, $.jsx)(l, { value: n }) })],
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
var wt, Q, Tt, $, Et, Dt, Ot;
function kt() {
  return (kt = e(() => {
    ((wt = z()),
      te(),
      x(),
      O(),
      ee(),
      F(),
      B(),
      h(),
      (Q = U()),
      (Tt = H()),
      P(),
      ce(),
      le(),
      K(),
      J(),
      se(),
      ve(),
      R(),
      C(),
      ne(),
      j(),
      g(),
      _(),
      Ae(),
      Re(),
      Ze(),
      et(),
      pt(),
      _t(),
      ($ = V()),
      (Et = { opacity: 0, transform: `translateX(0%)` }),
      (Dt = {
        Content: xt,
        HeaderButton: St,
        IconButton: Ne,
        Item: De,
        ItemActionButton: xe,
        ItemActionLink: je,
        ItemActions: Pe,
        ItemAvatarGroup: Oe,
        ItemAvatarButton: Se,
        ItemButton: Ie,
        ItemChevron: Ce,
        ItemGroup: we,
        ItemLabel: Me,
        ItemLeading: ke,
        ItemMeta: Te,
        ItemTrigger: be,
        List: Fe,
        PopoverContent: bt,
        Root: yt,
        Section: ze,
        SectionActions: Le,
        SectionCount: Ct,
        SourceDetails: ft.Details,
        SourceRow: ft.Row,
        Sources: ft.List,
        SourcesSidePanel: ft.SidePanel,
        SourcesSidePanelList: ft.SidePanelList,
        SourcesViewport: ft.Viewport,
      }),
      (Ot = (0, Q.createContext)({ fullWidth: !1, isVisible: !0, isAnimating: !1, placement: `floating` })));
  }))();
}
export { Qe as a, $e as i, kt as n, et as o, vt as r, Dt as t };
//# sourceMappingURL=thread-summary-panel-components-7e14b3bbe8fe.js.map
