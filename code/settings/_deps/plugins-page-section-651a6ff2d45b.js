import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $ct as n,
  A3t as r,
  AMt as i,
  Ak as a,
  Amn as o,
  Cpn as s,
  Cs as c,
  Dk as l,
  Dqt as u,
  Ek as d,
  Eln as f,
  F3t as p,
  Fs as m,
  Fx as h,
  G4t as g,
  GB as _,
  Gqt as v,
  H4t as y,
  I4t as b,
  Is as x,
  Ix as ee,
  JG as S,
  JK as C,
  Jdt as w,
  Jit as T,
  KG as E,
  KYt as D,
  Kit as O,
  Lut as k,
  Mk as A,
  N3t as j,
  No as M,
  O3t as N,
  OL as P,
  Oit as te,
  Ok as F,
  Opn as I,
  Po as L,
  Rpn as R,
  Rqt as z,
  Rut as B,
  S3t as V,
  Spn as H,
  Tk as ne,
  Ult as U,
  Uqt as re,
  Uyt as ie,
  WB as ae,
  Wlt as oe,
  Wyt as se,
  X5 as ce,
  Xdt as W,
  Yqt as G,
  ZG as le,
  ZQt as ue,
  a3t as de,
  aT as fe,
  aYt as pe,
  amt as me,
  as as he,
  ayt as ge,
  c6t as _e,
  cT as ve,
  dNt as ye,
  dYt as be,
  dit as xe,
  dk as Se,
  e0t as Ce,
  elt as we,
  eut as Te,
  f9 as Ee,
  fit as De,
  gMt as Oe,
  hIt as ke,
  hMt as Ae,
  hmn as K,
  i6t as je,
  i7 as Me,
  iHt as Ne,
  imt as Pe,
  is as Fe,
  jk as Ie,
  kL as Le,
  kMt as q,
  kit as Re,
  kk as ze,
  kmn as J,
  krn as Be,
  lIt as Ve,
  lT as He,
  mIt as Ue,
  mrn as We,
  nln as Ge,
  nlt as Ke,
  o3t as qe,
  oT as Je,
  oYt as Ye,
  out as Xe,
  pNt as Ze,
  q4t as Qe,
  qK as $e,
  qqt as et,
  r7 as tt,
  rHt as nt,
  rq as rt,
  rrn as it,
  s3t as at,
  sW as ot,
  sYt as st,
  sut as ct,
  syt as lt,
  tlt as ut,
  tut as dt,
  uIt as ft,
  uT as pt,
  uW as mt,
  uk as ht,
  uq as gt,
  wk as _t,
  ws as vt,
  y9 as yt,
  zpn as bt,
} from "./app-initial-f094ef01c64d.js";
import {
  Bw as xt,
  Gw as St,
  Hw as Ct,
  Kw as wt,
  Up as Tt,
  Vw as Et,
  Wp as Dt,
  cw as Ot,
  lm as kt,
  rm as At,
  sw as jt,
  tm as Mt,
  zw as Nt,
} from "./app-primary-4c40d73a1074.js";
import { t as Pt } from "./partition-fe47690951b4.js";
import { n as Ft, t as It } from "./sectioned-page-section-header-fe28a4700b8d.js";
function Lt(e) {
  let t = (0, Bt.c)(8),
    { container: n, sectionIds: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((i = {}), (t[0] = i)) : (i = t[0]);
  let a = (0, Vt.useRef)(i),
    o;
  t[1] !== n || t[2] !== r
    ? ((o = { container: n, sectionElementsRef: a, sectionIds: r }),
      (t[1] = n),
      (t[2] = r),
      (t[3] = o))
    : (o = t[3]);
  let s = Rt(o),
    c;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (e, t) => {
        if (t == null) {
          delete a.current[e];
          return;
        }
        a.current[e] = t;
      }),
      (t[4] = c))
    : (c = t[4]);
  let l = c,
    u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (e) => {
        a.current[e]?.scrollIntoView({ behavior: `smooth`, block: `start` });
      }),
      (t[5] = u))
    : (u = t[5]);
  let d = u,
    f;
  return (
    t[6] === s
      ? (f = t[7])
      : ((f = { activeSectionId: s, scrollToSection: d, setSectionElement: l }),
        (t[6] = s),
        (t[7] = f)),
    f
  );
}
function Rt(e) {
  let t = (0, Bt.c)(8),
    { container: n, sectionElementsRef: r, sectionIds: i } = e,
    a;
  t[0] !== n || t[1] !== r || t[2] !== i
    ? ((a = (e) => {
        if (n == null) return zt;
        let t = () => {
          e();
        };
        n.addEventListener(`scroll`, t, { passive: !0 });
        let a = typeof ResizeObserver > `u` ? null : new ResizeObserver(t);
        if (a != null) {
          a.observe(n);
          for (let e of i) {
            let t = r.current[e];
            t != null && a.observe(t);
          }
        }
        return () => {
          (n.removeEventListener(`scroll`, t), a?.disconnect());
        };
      }),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a))
    : (a = t[3]);
  let o = a,
    s;
  t[4] !== n || t[5] !== r || t[6] !== i
    ? ((s = () => {
        if (i.length === 0) return null;
        if (n == null) return i[0];
        let e = n.getBoundingClientRect().top + Ht,
          t = i[0];
        for (let n of i) {
          let i = r.current[n];
          if (i != null)
            if (i.getBoundingClientRect().top <= e) t = n;
            else break;
        }
        return t;
      }),
      (t[4] = n),
      (t[5] = r),
      (t[6] = i),
      (t[7] = s))
    : (s = t[7]);
  let c = s;
  return (0, Vt.useSyncExternalStore)(o, c, c);
}
function zt() {}
var Bt,
  Vt,
  Ht,
  Ut = e(() => {
    ((Bt = J()), (Vt = t(o(), 1)), (Ht = 96));
  });
function Wt(e) {
  let t = (0, Yt.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Y.jsx)(`div`, {
          className: `mx-auto flex w-full max-w-[var(--thread-content-max-width)] flex-col gap-1 px-panel pt-panel`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Gt(e) {
  let t = (0, Yt.c)(45),
    {
      ariaLabel: n,
      sections: r,
      children: i,
      className: a,
      contentInnerClassName: o,
      disableScrollFade: s,
      header: c,
      navOrientation: l,
      navAccessory: u,
      navFooter: d,
      navSections: f,
      onSelectNavSection: p,
      showNav: m,
    } = e,
    h = s !== void 0 && s,
    g = l === void 0 ? `vertical` : l,
    _ = m === void 0 || m,
    v = (0, Xt.useRef)(null),
    [y, b] = (0, Xt.useState)(null),
    x;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (e) => {
        v.current !== e && ((v.current = e), b(e));
      }),
      (t[0] = x))
    : (x = t[0]);
  let ee = x,
    S;
  t[1] === r ? (S = t[2]) : ((S = r.map(Kt)), (t[1] = r), (t[2] = S));
  let C;
  t[3] !== y || t[4] !== S
    ? ((C = { container: y, sectionIds: S }), (t[3] = y), (t[4] = S), (t[5] = C))
    : (C = t[5]);
  let { activeSectionId: w, scrollToSection: T, setSectionElement: E } = Lt(C),
    D = f ?? r,
    O = _ && D.length > 0,
    k;
  t[6] === a
    ? (k = t[7])
    : ((k = R(
        `flex min-h-0 w-full flex-1 flex-col gap-8 [--sectioned-page-leading-inset:0.5rem]`,
        a,
      )),
      (t[6] = a),
      (t[7] = k));
  let A;
  t[8] === c
    ? (A = t[9])
    : ((A = c == null ? null : (0, Y.jsx)(Wt, { children: c })), (t[8] = c), (t[9] = A));
  let j = O
      ? g === `vertical`
        ? `flex min-h-0 w-full flex-1 flex-col gap-8 lg:grid lg:grid-cols-[theme(spacing.32)_minmax(0,1fr)] lg:items-start lg:gap-10`
        : `flex min-h-0 w-full flex-1 flex-col gap-8`
      : `flex min-h-0 w-full flex-1 flex-col`,
    M;
  t[10] === j ? (M = t[11]) : ((M = R(j)), (t[10] = j), (t[11] = M));
  let N;
  t[12] !== w ||
  t[13] !== n ||
  t[14] !== u ||
  t[15] !== d ||
  t[16] !== g ||
  t[17] !== p ||
  t[18] !== T ||
  t[19] !== O ||
  t[20] !== D
    ? ((N = O
        ? (0, Y.jsx)(Jt, {
            activeSectionId: w,
            accessory: u,
            ariaLabel: n,
            footer: d,
            orientation: g,
            onSelectSection: p ?? T,
            sections: D,
          })
        : null),
      (t[12] = w),
      (t[13] = n),
      (t[14] = u),
      (t[15] = d),
      (t[16] = g),
      (t[17] = p),
      (t[18] = T),
      (t[19] = O),
      (t[20] = D),
      (t[21] = N))
    : (N = t[21]);
  let P;
  t[22] === E ? (P = t[23]) : ((P = { setSectionElement: E }), (t[22] = E), (t[23] = P));
  let te = !h && `vertical-scroll-fade-mask [--edge-fade-distance:1rem]`,
    F;
  t[24] === te
    ? (F = t[25])
    : ((F = R(
        `relative min-h-0 w-full flex-1 overflow-y-auto [scrollbar-gutter:stable] lg:h-full`,
        te,
      )),
      (t[24] = te),
      (t[25] = F));
  let I;
  t[26] === o
    ? (I = t[27])
    : ((I = R(`mx-auto w-full max-w-[var(--thread-content-max-width)]`, o)),
      (t[26] = o),
      (t[27] = I));
  let L;
  t[28] !== i || t[29] !== I
    ? ((L = (0, Y.jsx)(`div`, { className: I, children: i })),
      (t[28] = i),
      (t[29] = I),
      (t[30] = L))
    : (L = t[30]);
  let z;
  t[31] !== F || t[32] !== L
    ? ((z = (0, Y.jsx)(`div`, { className: F, ref: ee, children: L })),
      (t[31] = F),
      (t[32] = L),
      (t[33] = z))
    : (z = t[33]);
  let B;
  t[34] !== P || t[35] !== z
    ? ((B = (0, Y.jsx)(Zt.Provider, { value: P, children: z })),
      (t[34] = P),
      (t[35] = z),
      (t[36] = B))
    : (B = t[36]);
  let V;
  t[37] !== M || t[38] !== N || t[39] !== B
    ? ((V = (0, Y.jsxs)(`div`, { className: M, children: [N, B] })),
      (t[37] = M),
      (t[38] = N),
      (t[39] = B),
      (t[40] = V))
    : (V = t[40]);
  let H;
  return (
    t[41] !== V || t[42] !== k || t[43] !== A
      ? ((H = (0, Y.jsxs)(`div`, { className: k, children: [A, V] })),
        (t[41] = V),
        (t[42] = k),
        (t[43] = A),
        (t[44] = H))
      : (H = t[44]),
    H
  );
}
function Kt(e) {
  return e.id;
}
function qt(e) {
  let t = (0, Yt.c)(14),
    { id: n, title: r, action: i, count: a, stickyHeader: o, showDivider: s, children: c } = e,
    l = o !== void 0 && o,
    u = s === void 0 || s,
    d = (0, Xt.useContext)(Zt),
    f;
  t[0] !== n || t[1] !== d
    ? ((f = (e) => {
        d?.setSectionElement(n, e);
      }),
      (t[0] = n),
      (t[1] = d),
      (t[2] = f))
    : (f = t[2]);
  let p;
  t[3] !== i || t[4] !== a || t[5] !== u || t[6] !== l || t[7] !== r
    ? ((p =
        r == null && i == null && a == null
          ? null
          : (0, Y.jsx)(It, { action: i, count: a, showDivider: u, sticky: l, title: r })),
      (t[3] = i),
      (t[4] = a),
      (t[5] = u),
      (t[6] = l),
      (t[7] = r),
      (t[8] = p))
    : (p = t[8]);
  let m;
  return (
    t[9] !== c || t[10] !== n || t[11] !== f || t[12] !== p
      ? ((m = (0, Y.jsxs)(`section`, {
          className: `flex flex-col gap-4`,
          id: n,
          ref: f,
          children: [p, c],
        })),
        (t[9] = c),
        (t[10] = n),
        (t[11] = f),
        (t[12] = p),
        (t[13] = m))
      : (m = t[13]),
    m
  );
}
function Jt(e) {
  let t = (0, Yt.c)(11),
    {
      activeSectionId: n,
      accessory: r,
      ariaLabel: i,
      footer: a,
      orientation: o,
      onSelectSection: s,
      sections: c,
    } = e,
    l = o === `vertical` ? `hidden lg:block lg:self-start` : `w-full`,
    u;
  t[0] !== r || t[1] !== n || t[2] !== a || t[3] !== s || t[4] !== o || t[5] !== c
    ? ((u =
        o === `vertical`
          ? (0, Y.jsx)(`div`, {
              className: `flex flex-col gap-1`,
              children: c.map((e) =>
                (0, Y.jsx)(
                  `a`,
                  {
                    href: `#${e.id}`,
                    className: R(
                      `text-start text-lg leading-6 transition-colors`,
                      n === e.id ? `text-default` : `text-secondary hover:text-default`,
                    ),
                    onClick: (t) => {
                      (t.preventDefault(), s(e.id));
                    },
                    children: e.title,
                  },
                  e.id,
                ),
              ),
            })
          : (0, Y.jsx)(`div`, {
              className: `flex w-full flex-col gap-8`,
              children: (0, Y.jsxs)(`div`, {
                className: `mx-auto flex w-full flex-col gap-8 px-panel lg:max-w-none`,
                children: [
                  a,
                  (0, Y.jsxs)(`div`, {
                    className: `flex w-full min-w-0 flex-wrap items-center justify-center gap-3`,
                    children: [
                      c.map((e) =>
                        (0, Y.jsx)(
                          q,
                          {
                            color: n === e.id ? `secondary` : `ghost`,
                            size: `toolbar`,
                            onClick: () => {
                              s(e.id);
                            },
                            "aria-pressed": n === e.id,
                            children: e.title,
                          },
                          e.id,
                        ),
                      ),
                      r == null
                        ? null
                        : (0, Y.jsxs)(`div`, {
                            className: `flex items-center gap-3`,
                            children: [
                              (0, Y.jsx)(`div`, { className: `h-6 w-px bg-border-subtle` }),
                              r,
                            ],
                          }),
                    ],
                  }),
                ],
              }),
            })),
      (t[0] = r),
      (t[1] = n),
      (t[2] = a),
      (t[3] = s),
      (t[4] = o),
      (t[5] = c),
      (t[6] = u))
    : (u = t[6]);
  let d;
  return (
    t[7] !== i || t[8] !== l || t[9] !== u
      ? ((d = (0, Y.jsx)(`nav`, { "aria-label": i, className: l, children: u })),
        (t[7] = i),
        (t[8] = l),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
var Yt,
  Xt,
  Y,
  Zt,
  Qt = e(() => {
    ((Yt = J()),
      bt(),
      (Xt = t(o(), 1)),
      i(),
      Ft(),
      Ut(),
      (Y = K()),
      (Zt = (0, Xt.createContext)(null)));
  }),
  $t,
  en,
  tn = e(() => {
    (o(),
      ($t = K()),
      (en = (e) =>
        (0, $t.jsx)(`svg`, {
          preserveAspectRatio: `none`,
          width: `100%`,
          height: `100%`,
          overflow: `visible`,
          style: { display: `block` },
          viewBox: `0 0 112 80`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, $t.jsx)(`path`, {
            id: `Vector`,
            d: `M11.4867 51.9008C8.31365 49.8793 5.20186 47.9635 2.15136 46.1534C1.8082 45.9497 1.38817 45.5927 0.891267 45.0823C0.310802 44.4845 0.0188969 43.6985 0.0155545 42.7242C0.00329899 38.8251 -0.00171402 35.4878 0.000514256 32.7124C0.00218546 31.6496 0.705764 31.1597 1.65167 30.5818C13.0638 23.5928 18.8718 20.0374 19.0757 19.9156C21.1195 18.6867 24.1762 18.5506 25.7956 20.5915C26.0128 20.8649 26.2084 21.3017 26.3822 21.9017C26.6111 22.6955 26.8484 23.7799 27.6523 24.577C29.6109 26.5216 32.5105 27.2987 35.2981 27.1028C38.4784 26.8769 42.3806 25.4255 44.1905 22.6589C44.9916 21.4345 45.0924 20.235 44.493 19.0604C43.0341 16.2008 38.8594 15.774 36.0501 15.3638C35.4451 15.2753 34.9326 15.0782 34.5126 14.7726C33.1205 13.7597 33.1589 11.8267 34.2836 10.6892C34.8117 10.1567 35.5081 9.63247 36.3726 9.11657C39.724 7.11828 43.9337 4.56978 49.0019 1.47106C50.281 0.688351 51.1266 0.247179 51.5388 0.147542C53.21 -0.260972 54.7275 0.215628 56.2349 1.12399C62.7081 5.02424 68.3222 8.34991 73.0773 11.101C73.6979 11.4597 74.1993 11.6883 74.5814 11.7868C76.0733 12.1677 77.218 11.8217 78.0158 10.749C78.4987 10.0997 78.8397 9.07671 79.2541 8.47058C80.1499 7.16367 81.9581 6.25863 83.4722 5.84846C86.6442 4.98992 90.0284 5.82521 93.1886 7.10887C95.8258 8.18164 98.5315 9.95352 99.9604 12.378C100.482 13.2648 100.755 14.3143 100.779 15.5266C100.789 16.0048 100.795 17.9251 100.798 21.2873C100.798 23.0143 100.752 24.0865 100.661 24.5039C100.424 25.5778 99.947 26.5282 99.2284 27.3552C99.2191 27.3662 99.2122 27.3791 99.2084 27.393C99.2046 27.4069 99.2039 27.4214 99.2062 27.4357C99.2086 27.4499 99.2141 27.4634 99.2222 27.4753C99.2304 27.4872 99.241 27.4972 99.2534 27.5046C104.433 30.5812 107.92 32.6487 109.714 33.7071C110.214 34.0015 110.697 34.3647 111.164 34.7964C111.731 35.3223 112.01 35.9838 112 36.7809C111.985 37.9068 111.984 40.6086 111.995 44.8864C111.998 46.5868 111.833 47.5567 110.598 48.5846C110.054 49.0363 109.351 49.5273 108.49 50.0576C105.146 52.1145 102.784 53.5543 101.406 54.3768C101.395 54.3832 101.385 54.392 101.378 54.4026C101.371 54.4133 101.366 54.4254 101.365 54.4382C101.363 54.451 101.364 54.4641 101.368 54.4764C101.372 54.4888 101.379 54.5002 101.388 54.5097C102.527 55.6865 103.096 57.1102 103.092 58.7808C103.084 64.3738 103.079 67.2671 103.077 67.4609C103.064 68.9399 102.673 70.2302 101.904 71.3318C100.33 73.5852 97.5538 75.3522 94.8782 76.219C90.7186 77.5658 85.6716 76.9397 82.3576 73.934C81.7659 73.3976 81.3665 72.5241 81.0573 71.7303C80.5844 70.5148 79.7354 69.7774 78.3617 69.6844C77.1885 69.6036 76.1095 69.8638 75.1246 70.4649C74.3558 70.9332 73.6489 71.4547 72.9503 71.8931C69.1617 74.2628 65.5085 76.6557 61.3388 79.1367C59.3244 80.3346 57.261 80.2859 55.1486 78.9906C48.583 74.963 43.1527 71.6146 38.8577 68.9455C37.7792 68.2757 36.6874 68.0116 35.5822 68.1534C34.4474 68.2995 33.6135 69.0069 33.1673 69.99C32.7807 70.8447 32.5667 71.3108 32.5255 71.3883C32.0292 72.3149 31.2454 73.009 30.4064 73.6068C28.6584 74.8556 26.6674 75.4252 24.4335 75.3156C21.1814 75.1562 17.8824 73.9307 15.2152 72.2252C13.0426 70.8353 10.6177 68.4722 10.1531 65.8667C10.0818 65.467 10.0472 64.3716 10.0495 62.5803C10.0517 59.6687 10.0528 57.7534 10.0528 56.8346C10.0517 55.3798 10.0835 54.5224 10.1481 54.2622C10.3553 53.4408 10.8065 52.7201 11.5018 52.1001C11.5165 52.0874 11.5281 52.0714 11.5355 52.0535C11.543 52.0355 11.5461 52.0161 11.5446 51.9967C11.5431 51.9774 11.5371 51.9586 11.5271 51.942C11.517 51.9253 11.5032 51.9112 11.4867 51.9008ZM1.37258 32.2573C0.600478 33.0561 1.38595 33.825 2.12462 34.3198C2.8956 34.8346 4.66875 35.9301 7.44407 37.6062C14.3294 41.7622 17.7833 43.8468 17.8055 43.8601C18.7403 44.417 19.5553 44.9655 20.2505 45.5058C21.4003 46.3975 21.905 47.8838 20.8806 49.0828C20.4683 49.5666 19.8617 49.9153 19.0606 50.129C18.2963 50.3338 17.2451 50.5729 15.9071 50.8463C13.447 51.3479 10.8767 53.1729 11.1424 55.9212C11.2644 57.18 12.2705 58.4836 13.1964 59.4102C15.3689 61.5823 18.3303 63.037 21.2666 63.7577C23.0782 64.2016 24.8469 64.2786 26.5727 63.9885C28.4021 63.6819 29.9134 62.7796 31.1067 61.2817C31.6364 60.6191 31.8554 59.7639 32.1595 59.1096C33.3093 56.6419 36.5832 56.4144 38.8059 57.4656C39.3775 57.7357 39.7613 57.9317 39.9574 58.0534C44.9688 61.1654 50.2994 64.4507 55.9492 67.9092C57.5992 68.9189 59.2581 68.8984 60.926 67.8478C64.3709 65.6779 68.4609 63.1078 73.196 60.1375C74.543 59.2928 75.4087 58.7985 75.7931 58.6546C77.3389 58.075 79.0553 58.1149 80.5209 58.912C81.4033 59.3919 81.801 60.4232 82.2038 61.3747C82.6634 62.4574 83.3068 63.1316 84.2627 63.7394C88.9571 66.7186 95.8375 65.7239 99.8233 61.9078C101.033 60.7486 102.16 58.3474 101.55 56.6751C100.599 54.0746 97.0775 53.5432 94.7596 53.1048C93.3741 52.8424 91.5826 51.9507 91.3871 50.3648C91.2467 49.2372 92.236 48.4883 93.0984 47.9652C100.407 43.5158 105.1 40.6651 107.178 39.413C108.353 38.7055 109.285 38.0955 109.976 37.583C110.308 37.3372 110.55 37.0953 110.701 36.8573C111.313 35.8908 109.271 34.6702 108.56 34.2684C106.703 33.2166 103.066 31.0479 97.6491 27.762C94.1106 25.6154 91.9642 24.3306 91.2099 23.9077C90.5838 23.5557 90.1398 23.228 89.878 22.9246C88.0681 20.8173 90.4144 19.1517 92.3514 18.9059C93.9468 18.7022 94.9818 18.5589 95.4565 18.4758C97.1377 18.1802 99.3921 17.1772 99.5643 15.2459C99.6412 14.3713 99.4596 13.5759 99.0195 12.8596C97.6608 10.6477 95.1907 9.11989 92.8327 8.10525C89.2045 6.54426 84.8777 5.73056 81.3498 7.92756C80.6234 8.37925 80.127 8.95327 79.8608 9.64962C79.609 10.3039 79.419 10.7362 79.2909 10.9466C77.8587 13.308 75.1897 13.6052 72.9002 12.2701C64.9096 7.61591 59.3083 4.31238 56.0962 2.35949C55.1158 1.76499 54.4334 1.41349 54.049 1.305C52.8 0.954051 51.5828 1.14558 50.3974 1.87957C46.6338 4.20776 42.2993 6.83376 37.3938 9.75756C36.9526 10.021 36.3654 10.4058 35.6323 10.9117C35.2747 11.1586 34.9945 11.4348 34.7917 11.7403C34.0881 12.8031 34.6931 14.0851 35.9699 14.2462C39.2739 14.6614 43.9783 15.3157 45.4991 18.7166C46.6155 21.2142 45.2635 23.735 43.2463 25.2395C40.6025 27.2102 37.6377 28.206 34.3522 28.227C31.9445 28.2425 29.6956 27.4864 27.6055 25.9586C26.4457 25.11 25.7505 23.9127 25.4313 22.551C24.7377 19.6051 21.4588 19.6931 19.3882 20.9717C10.0372 26.7385 4.43701 30.181 2.58754 31.2992C2.12629 31.577 1.7213 31.8964 1.37258 32.2573ZM99.6896 17.6306C99.6897 17.6188 99.6862 17.6073 99.6797 17.5975C99.6732 17.5877 99.6639 17.58 99.6531 17.5754C99.6422 17.5708 99.6302 17.5695 99.6185 17.5716C99.6069 17.5738 99.5962 17.5792 99.5877 17.5874C97.7527 19.3228 95.5417 19.6748 93.1034 19.9073C92.3915 19.9754 90.9258 20.2461 90.5097 20.824C89.8913 21.6792 90.7704 22.3733 91.469 22.7868C94.1473 24.3722 96.3533 25.694 98.0869 26.7524C98.1333 26.7808 98.1883 26.7921 98.2423 26.7842C98.2964 26.7763 98.3461 26.7497 98.3827 26.7092C99.059 25.9575 99.4796 25.1244 99.6445 24.21C99.6891 23.9575 99.7097 23.0154 99.7063 21.3836C99.7019 19.6565 99.6963 18.4055 99.6896 17.6306ZM1.12189 35.0322C1.11625 35.029 1.10983 35.0271 1.10329 35.027C1.09675 35.0269 1.09033 35.0284 1.0847 35.0315C1.07907 35.0345 1.07444 35.039 1.07128 35.0444C1.06813 35.0497 1.06656 35.0559 1.06674 35.0621C1.07343 38.3557 1.07287 40.2942 1.06507 40.8776C1.04836 42.1663 1.06841 42.9213 1.12524 43.1427C1.46449 44.4579 2.69617 45.2218 3.7624 45.8661C6.66918 47.6198 9.48015 49.3723 12.1953 51.1237C12.2625 51.1668 12.341 51.1891 12.4208 51.1876C12.5006 51.1861 12.5781 51.161 12.6432 51.1154C14.3094 49.9463 15.9739 49.6972 18.3554 49.1724C19.3748 48.9483 20.6767 48.5115 20.2171 47.2013C19.9631 46.4789 19.0172 45.8927 18.332 45.4742C13.4075 42.4497 7.67079 38.969 1.12189 35.0322ZM110.843 38.4349C105.785 41.548 99.9793 45.0818 93.4259 49.0363C92.6338 49.5145 92.0556 50.2137 92.8143 51.0024C93.4343 51.6468 94.1847 51.8743 95.0938 52.0569C97.1043 52.4605 98.5866 52.7909 100.153 53.6478C100.219 53.6841 100.293 53.7023 100.369 53.7006C100.444 53.6988 100.518 53.6772 100.582 53.6379C102.462 52.4931 105.059 50.9023 108.375 48.8652C109.643 48.0847 110.877 47.1564 110.895 45.544C110.904 44.8343 110.904 42.474 110.895 38.4631C110.895 38.457 110.894 38.4511 110.891 38.4459C110.887 38.4407 110.883 38.4364 110.878 38.4335C110.872 38.4306 110.866 38.4292 110.86 38.4294C110.854 38.4297 110.848 38.4315 110.843 38.4349ZM11.1157 58.7509C11.0901 60.5632 11.0834 62.5681 11.0957 64.7657C11.109 66.9926 12.7485 68.9986 14.4431 70.347C17.0591 72.4295 20.0461 73.6937 23.4041 74.1399C25.8959 74.4704 28.3158 74.0237 30.2794 72.3929C30.9947 71.7995 31.4771 71.2416 31.7267 70.719C32.1768 69.7769 32.4063 69.297 32.4152 69.2793C33.6135 66.7136 36.9409 66.5658 39.1351 67.8893C44.8206 71.3202 50.4241 74.8307 55.8756 78.1918C57.7307 79.336 59.4286 79.0836 61.1984 78.0025C64.0116 76.2821 67.6443 74.0059 72.0963 71.174C73.3581 70.3719 74.4043 69.5948 75.4722 69.0982C76.1808 68.7683 77.0487 68.6095 78.0759 68.6216C79.5622 68.6383 80.6663 69.1519 81.3883 70.1627C82.0367 71.0711 82.167 72.3182 82.9976 73.0854C83.9068 73.9257 84.993 74.575 86.2565 75.0333C90.9008 76.7172 95.8943 75.5614 99.5459 72.3497C101.115 70.9714 102.019 69.4503 102.031 67.4194C102.038 66.3377 102.039 64.1396 102.034 60.825C102.035 60.8116 102.03 60.7984 102.022 60.7878C102.014 60.7772 102.002 60.7698 101.989 60.7669C101.975 60.764 101.962 60.7657 101.95 60.7717C101.937 60.7778 101.928 60.7878 101.922 60.8001C101.342 62.0257 100.184 63.1482 99.1047 63.8855C96.306 65.7964 93.2137 66.6737 89.8278 66.5176C87.0587 66.3914 84.2009 65.4216 82.2372 63.4222C81.1509 62.3163 81.2629 60.5444 79.7521 59.7805C78.3065 59.0482 76.5167 59.2906 75.1864 60.1425C71.0853 62.7729 66.461 65.6785 61.3137 68.8591C59.9444 69.706 58.6086 69.9767 57.3062 69.6712C56.7056 69.5317 55.8171 69.1088 54.6406 68.4024C49.4849 65.307 44.4262 62.1452 39.5195 59.1162C38.7931 58.6679 38.1341 58.3446 37.5425 58.1464C35.9365 57.6084 33.8241 58.0817 33.057 59.7506C32.701 60.5245 32.4637 61.3514 31.8453 62.0755C30.2176 63.9763 28.152 65.0076 25.6485 65.1692C22.3496 65.3818 19.2344 64.5083 16.3098 62.9955C14.3662 61.9908 12.4911 60.5361 11.2277 58.7177C11.2202 58.7073 11.2096 58.6995 11.1974 58.6954C11.1853 58.6913 11.1721 58.6911 11.1598 58.6947C11.1475 58.6984 11.1366 58.7057 11.1287 58.7158C11.1208 58.7259 11.1163 58.7381 11.1157 58.7509Z`,
            fill: `currentColor`,
            fillOpacity: 0.5,
          }),
        })));
  });
function nn(e) {
  let t = (0, rn.c)(24),
    {
      disableMenuLabel: n,
      enableButtonLabel: r,
      enabledStatusAriaLabel: i,
      isEnabled: a,
      isUninstallDisabled: o,
      isUninstalling: s,
      isUpdating: c,
      menuLabel: l,
      menuItems: u,
      onDisable: d,
      onEnable: f,
      onUninstall: p,
      uninstallMenuLabel: m,
    } = e,
    [h, g] = (0, an.useState)(!1),
    _ = p != null || (o && m != null),
    v = u != null || _ || (a && d != null),
    y;
  t[0] !== n ||
  t[1] !== i ||
  t[2] !== v ||
  t[3] !== _ ||
  t[4] !== a ||
  t[5] !== h ||
  t[6] !== o ||
  t[7] !== s ||
  t[8] !== u ||
  t[9] !== l ||
  t[10] !== d ||
  t[11] !== p ||
  t[12] !== m
    ? ((y = v
        ? (0, X.jsx)(`div`, {
            className: h
              ? `visible opacity-100`
              : `invisible opacity-0 group-hover:visible group-hover:opacity-100`,
            children: (0, X.jsxs)(E, {
              align: `end`,
              contentWidth: `icon`,
              open: h,
              onOpenChange: g,
              triggerButton: (0, X.jsx)(St, {
                label: l ?? i,
                className: R(
                  `!cursor-interaction px-1`,
                  h ? `opacity-100` : `opacity-50 hover:opacity-100 focus-visible:opacity-100`,
                ),
                iconClassName: `icon-sm text-codex-description`,
                size: `icon`,
                uniform: !1,
              }),
              children: [
                u,
                a && d ? (0, X.jsx)(S.Item, { LeftIcon: xe, onSelect: d, children: n }) : null,
                _
                  ? (0, X.jsx)(S.Item, {
                      LeftIcon: Nt,
                      disabled: s || o,
                      onSelect: p,
                      tone: `danger`,
                      children: m,
                    })
                  : null,
              ],
            }),
          })
        : null),
      (t[0] = n),
      (t[1] = i),
      (t[2] = v),
      (t[3] = _),
      (t[4] = a),
      (t[5] = h),
      (t[6] = o),
      (t[7] = s),
      (t[8] = u),
      (t[9] = l),
      (t[10] = d),
      (t[11] = p),
      (t[12] = m),
      (t[13] = y))
    : (y = t[13]);
  let b;
  t[14] !== r || t[15] !== i || t[16] !== a || t[17] !== s || t[18] !== c || t[19] !== f
    ? ((b =
        !a && f
          ? (0, X.jsx)(q, {
              color: `outline`,
              size: `toolbar`,
              disabled: c || s,
              onClick: (e) => {
                (e.stopPropagation(), f());
              },
              children: r,
            })
          : a
            ? (0, X.jsx)(Fe, {
                ariaLabel: i,
                icon: (0, X.jsx)($e, { className: `icon-sm opacity-60` }),
              })
            : (0, X.jsx)(`span`, { "aria-hidden": !0, className: `h-7 w-7 shrink-0` })),
      (t[14] = r),
      (t[15] = i),
      (t[16] = a),
      (t[17] = s),
      (t[18] = c),
      (t[19] = f),
      (t[20] = b))
    : (b = t[20]);
  let x;
  return (
    t[21] !== y || t[22] !== b
      ? ((x = (0, X.jsxs)(`div`, { className: `flex items-center gap-2`, children: [y, b] })),
        (t[21] = y),
        (t[22] = b),
        (t[23] = x))
      : (x = t[23]),
    x
  );
}
var rn,
  an,
  X,
  on = e(() => {
    ((rn = J()), bt(), (an = t(o(), 1)), i(), le(), wt(), C(), xt(), De(), he(), (X = K()));
  });
function sn(e) {
  let t = (0, un.c)(11),
    { hostId: n, pluginIds: r, pluginName: i, surface: a, isConnectionReady: o, children: s } = e,
    c = o !== void 0 && o,
    u = p(d),
    f = p(l),
    m;
  if (
    t[0] !== u ||
    t[1] !== s ||
    t[2] !== n ||
    t[3] !== f ||
    t[4] !== c ||
    t[5] !== r ||
    t[6] !== i ||
    t[7] !== a
  ) {
    let e;
    t[9] === r ? (e = t[10]) : ((e = (e) => r.includes(e.plugin_id)), (t[9] = r), (t[10] = e));
    let o = u.find(e);
    ((m =
      o == null || f == null
        ? s
        : (0, Z.jsx)(
            cn,
            {
              campaignId: o.campaign_id,
              hostId: n,
              identity: f,
              pluginName: i,
              surface: a,
              isConnectionReady: c,
              children: s,
            },
            JSON.stringify([f.userId, f.accountId, o.campaign_id, n, a]),
          )),
      (t[0] = u),
      (t[1] = s),
      (t[2] = n),
      (t[3] = f),
      (t[4] = c),
      (t[5] = r),
      (t[6] = i),
      (t[7] = a),
      (t[8] = m));
  } else m = t[8];
  return m;
}
function cn(e) {
  let t = (0, un.c)(64),
    {
      campaignId: n,
      hostId: i,
      identity: a,
      pluginName: o,
      surface: c,
      isConnectionReady: l,
      children: u,
    } = e,
    d = r(de),
    f = I(),
    h;
  t[0] !== n || t[1] !== i
    ? ((h = { campaignId: n, hostId: i }), (t[0] = n), (t[1] = i), (t[2] = h))
    : (h = t[2]);
  let { data: g, isError: _ } = j(F, h),
    v = p(ze),
    y =
      g?.kind === `offer` &&
      (!_ || g.offer.claim_status != null || g.offer.reward_granted_at != null)
        ? g.offer
        : null,
    b;
  t[3] !== v || t[4] !== y
    ? ((b = y == null ? null : ne(y, v)), (t[3] = v), (t[4] = y), (t[5] = b))
    : (b = t[5]);
  let x = b,
    ee = a?.accountId,
    S = a?.userId,
    C;
  t[6] !== ee || t[7] !== S
    ? ((C = Ee({ accountId: ee, userId: S })), (t[6] = ee), (t[7] = S), (t[8] = C))
    : (C = t[8]);
  let T = C,
    E = u != null && x === `pending` && l && a != null,
    D;
  t[9] !== T || t[10] !== E
    ? ((D = { ...T, staleTime: T.staleTime, enabled: E }), (t[9] = T), (t[10] = E), (t[11] = D))
    : (D = t[11]);
  let { data: k, isError: M, isFetching: N } = V(D),
    P;
  t[12] !== k || t[13] !== M || t[14] !== N || t[15] !== y
    ? ((P =
        y != null &&
        !M &&
        !N &&
        k?.some(
          (e) =>
            ve(e.connector_id) === ve(y.connector_id) &&
            e.auth_status === `ACTIVE` &&
            e.visibility !== `HIDDEN`,
        )),
      (t[12] = k),
      (t[13] = M),
      (t[14] = N),
      (t[15] = y),
      (t[16] = P))
    : (P = t[16]);
  let te = P,
    L;
  t[17] !== n || t[18] !== a?.accountId || t[19] !== a?.userId || t[20] !== y?.claim_expires_at
    ? ((L = JSON.stringify([a?.userId, a?.accountId, n, y?.claim_expires_at])),
      (t[17] = n),
      (t[18] = a?.accountId),
      (t[19] = a?.userId),
      (t[20] = y?.claim_expires_at),
      (t[21] = L))
    : (L = t[21]);
  let R = L,
    z = j(hn, R),
    B = (0, dn.useRef)(null),
    H = (0, dn.useRef)(!1),
    U = u == null && x === `available`,
    re;
  t[22] !== n || t[23] !== a || t[24] !== y || t[25] !== d || t[26] !== x || t[27] !== c
    ? ((re = () =>
        y == null || x !== `available` || !Ie(d, a)
          ? !1
          : (A(d, n, a, `impression`, { surface: gn[c] }), !0)),
      (t[22] = n),
      (t[23] = a),
      (t[24] = y),
      (t[25] = d),
      (t[26] = x),
      (t[27] = c),
      (t[28] = re))
    : (re = t[28]);
  let ie = (0, dn.useEffectEvent)(re),
    ae;
  t[29] !== U || t[30] !== ie
    ? ((ae = () => {
        let e = B.current;
        if (!U || e == null || typeof IntersectionObserver > `u`) return;
        let t = !1,
          n = !0,
          r = () => {
            n && t && document.visibilityState === `visible` && !H.current && (H.current = ie());
          },
          i = new IntersectionObserver(
            (e) => {
              ((t = e.some(ln)), r());
            },
            { threshold: 0.5 },
          );
        return (
          i.observe(e),
          document.addEventListener(`visibilitychange`, r),
          () => {
            ((n = !1), i.disconnect(), document.removeEventListener(`visibilitychange`, r));
          }
        );
      }),
      (t[29] = U),
      (t[30] = ie),
      (t[31] = ae))
    : (ae = t[31]);
  let oe;
  if (
    (t[32] === U ? (oe = t[33]) : ((oe = [U]), (t[32] = U), (t[33] = oe)),
    (0, dn.useEffect)(ae, oe),
    u != null)
  ) {
    let e = x === `pending` && l && !!te && z === !1,
      n;
    t[34] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Z.jsx)(`span`, {
          className: `min-w-0 flex-1 text-base font-semibold`,
          children: (0, Z.jsx)(s, {
            id: `plugins.incentive.almostThere`,
            defaultMessage: `Almost there!`,
            description: `Heading of the credit reminder after installing a promotional plugin`,
          }),
        })),
        (t[34] = n))
      : (n = t[34]);
    let r;
    t[35] === f
      ? (r = t[36])
      : ((r = f.formatMessage({
          id: `plugins.incentive.dismissCreditTip`,
          defaultMessage: `Dismiss credit tip`,
          description: `Accessible label for the close button on the promotional plugin credit reminder`,
        })),
        (t[35] = f),
        (t[36] = r));
    let i;
    t[37] !== R || t[38] !== d
      ? ((i = () => {
          let e = d.get(mn);
          e != null && d.set(fn, [...e.slice(-99), R]);
        }),
        (t[37] = R),
        (t[38] = d),
        (t[39] = i))
      : (i = t[39]);
    let a;
    t[40] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Z.jsx)(w, {})), (t[40] = a))
      : (a = t[40]);
    let o;
    t[41] !== r || t[42] !== i
      ? ((o = (0, Z.jsxs)(`div`, {
          className: `flex items-start gap-3`,
          children: [
            n,
            (0, Z.jsx)(q, {
              color: `ghostMuted`,
              size: `iconCircleSm`,
              "aria-label": r,
              onClick: i,
              children: a,
            }),
          ],
        })),
        (t[41] = r),
        (t[42] = i),
        (t[43] = o))
      : (o = t[43]);
    let c = y?.reward_credits,
      p;
    t[44] === c
      ? (p = t[45])
      : ((p = (0, Z.jsx)(s, {
          id: `plugins.incentive.tryPluginForWorkspaceCredits`,
          defaultMessage: `Try this plugin in Work or Codex to earn {credits, plural, one {# credit} other {# credits}} for your workspace.`,
          description: `Post-install reminder to try the installed plugin in Work or Codex to earn credits for the workspace. Work and Codex are mode names; ordinary ChatGPT chats do not qualify. credits is the server-provided reward amount.`,
          values: { credits: c },
        })),
        (t[44] = c),
        (t[45] = p));
    let m;
    t[46] !== o || t[47] !== p
      ? ((m = (0, Z.jsxs)(`div`, {
          className: `flex w-full min-w-0 flex-col gap-1 text-sm`,
          children: [o, p],
        })),
        (t[46] = o),
        (t[47] = p),
        (t[48] = m))
      : (m = t[48]);
    let h;
    return (
      t[49] !== u || t[50] !== e || t[51] !== m
        ? ((h = (0, Z.jsx)(O, {
            open: e,
            side: `top`,
            sideOffset: 20,
            align: `center`,
            variant: `coachmark`,
            tooltipMaxWidth: `min(16rem, var(--radix-tooltip-content-available-width), calc(100vw - 16px))`,
            interactive: !0,
            disableHoverOpen: !0,
            closeOnTriggerBlur: !1,
            tooltipContent: m,
            children: u,
          })),
          (t[49] = u),
          (t[50] = e),
          (t[51] = m),
          (t[52] = h))
        : (h = t[52]),
      h
    );
  }
  let se;
  t[53] !== y || t[54] !== x || t[55] !== c
    ? ((se =
        y != null && x === `available`
          ? (0, Z.jsx)(m, { ref: B, credits: y.reward_credits, showRequirements: c === `detail` })
          : null),
      (t[53] = y),
      (t[54] = x),
      (t[55] = c),
      (t[56] = se))
    : (se = t[56]);
  let ce = se;
  if (c !== `detail` || ce == null) return ce;
  let W;
  t[57] === o
    ? (W = t[58])
    : ((W = (0, Z.jsx)(s, {
        id: `plugins.incentive.rewardRequirements`,
        defaultMessage: `Earn workspace credits by installing and successfully using the {pluginName} plugin`,
        description: `Requirements shown on hover or focus of the promotional credit badge on plugin details; pluginName is the plugin's display name. Installation and successful use are both required.`,
        values: { pluginName: o },
      })),
      (t[57] = o),
      (t[58] = W));
  let G;
  t[59] === ce
    ? (G = t[60])
    : ((G = (0, Z.jsx)(`span`, { className: `inline-flex`, children: ce })),
      (t[59] = ce),
      (t[60] = G));
  let le;
  return (
    t[61] !== W || t[62] !== G
      ? ((le = (0, Z.jsx)(`div`, {
          className: `flex max-w-sm flex-col items-start gap-2 select-none`,
          children: (0, Z.jsx)(O, { tabIndex: 0, tooltipContent: W, children: G }),
        })),
        (t[61] = W),
        (t[62] = G),
        (t[63] = le))
      : (le = t[63]),
    le
  );
}
function ln(e) {
  return e.isIntersecting && e.intersectionRatio >= 0.5;
}
var un,
  dn,
  Z,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n = e(() => {
    ((un = J()),
      Ce(),
      at(),
      N(),
      (dn = t(o(), 1)),
      H(),
      it(),
      He(),
      i(),
      W(),
      T(),
      yt(),
      qe(),
      nt(),
      x(),
      a(),
      (Z = K()),
      (fn = Ne(`plugin-credit-coachmark-dismissals-v1`, [])),
      (pn = We(Be()).max(100).catch([]).optional()),
      (mn = _e(de, ({ get: e }) => pn.parse(e(fn)))),
      (hn = je(de, (e, { get: t }) => t(mn)?.includes(e))),
      (gn = {
        directory: ue.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY,
        search: ue.CODEX_PLUGIN_MARKETPLACE_SURFACE_DIRECTORY_SEARCH,
        detail: ue.CODEX_PLUGIN_MARKETPLACE_SURFACE_DETAILS,
      }));
  });
function vn(e) {
  let t = (0, Sn.c)(74),
    {
      blockedReason: n,
      connectedAccountInventory: r,
      disabledReason: i,
      installPhase: a,
      incentiveTarget: o,
      installProgressPercent: l,
      isInstallBlockedLoading: u,
      isInstallLocked: d,
      isEnabled: f,
      isInstalled: p,
      isInstalledByDefault: m,
      isUninstalling: h,
      isUpdatingEnabled: g,
      onEnable: _,
      onInstall: v,
      onOpenPlugin: y,
      onSettings: b,
      onShare: x,
      onTryInChat: C,
      onUninstall: w,
      pluginIcon: T,
      shareActions: D,
    } = e,
    k = I(),
    A = Le(),
    j = n === `disabled-by-admin`,
    N = l != null,
    P = p && !N,
    F = !P && n === `connector-unavailable`,
    L;
  if (N) {
    let e;
    t[0] !== l || t[1] !== A
      ? ((e = (0, Q.jsx)(ae, {
          percent: l,
          reducedMotion: A,
          size: 16,
          transitionDurationMs: 500,
        })),
        (t[0] = l),
        (t[1] = A),
        (t[2] = e))
      : (e = t[2]);
    let n;
    t[3] === a
      ? (n = t[4])
      : ((n =
          a === `installing`
            ? (0, Q.jsx)(s, {
                id: `plugins.detail.addingToCodex`,
                defaultMessage: `Installing`,
                description: `Primary install action on the plugin detail page while installation is in progress`,
              })
            : (0, Q.jsx)(s, {
                id: `plugins.detail.loading`,
                defaultMessage: `Loading`,
                description: `Primary install action on the plugin detail page while plugin setup is loading`,
              })),
        (t[3] = a),
        (t[4] = n));
    let r;
    (t[5] !== e || t[6] !== n
      ? ((r = (0, Q.jsxs)(q, {
          className: `disabled:opacity-100`,
          color: `primary`,
          disabled: !0,
          size: `toolbar`,
          children: [e, n],
        })),
        (t[5] = e),
        (t[6] = n),
        (t[7] = r))
      : (r = t[7]),
      (L = r));
  } else if (j) {
    let e;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(c, { className: `icon-sm` })), (t[8] = e))
      : (e = t[8]);
    let n;
    t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, Q.jsx)(s, {
          id: `plugins.detail.disabledByAdminButton`,
          defaultMessage: `Disabled by admin`,
          description: `Install button label shown when plugin install is unavailable because all included connectors are disabled by admin`,
        })),
        (t[9] = n))
      : (n = t[9]);
    let r;
    (t[10] === i
      ? (r = t[11])
      : ((r = (0, Q.jsxs)(q, {
          color: `primary`,
          disabled: !0,
          size: `toolbar`,
          children: [e, (0, Q.jsx)(M, { disabledReason: i, children: n })],
        })),
        (t[10] = i),
        (t[11] = r)),
      (L = r));
  } else if (!p) {
    let e = n != null || u || d,
      r,
      i;
    t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(Ae, { "aria-hidden": !1, asset: ee })),
        (i = (0, Q.jsx)(s, {
          id: `plugins.detail.install`,
          defaultMessage: `Install plugin`,
          description: `Primary install action on the plugin detail page`,
        })),
        (t[12] = r),
        (t[13] = i))
      : ((r = t[12]), (i = t[13]));
    let a;
    (t[14] !== v || t[15] !== e
      ? ((a = (0, Q.jsxs)(q, {
          color: `primary`,
          disabled: e,
          focusRing: `inset`,
          onClick: v,
          size: `toolbar`,
          children: [r, i],
        })),
        (t[14] = v),
        (t[15] = e),
        (t[16] = a))
      : (a = t[16]),
      (L = a));
  } else if (f && y != null) {
    let e;
    t[17] === k
      ? (e = t[18])
      : ((e = k.formatMessage({
          id: `plugins.detail.tryPluginOptions`,
          defaultMessage: `More ways to try this plugin`,
          description: `Accessible label for the dropdown of ways to open or chat with an installed plugin`,
        })),
        (t[17] = k),
        (t[18] = e));
    let n;
    t[19] === T
      ? (n = t[20])
      : ((n = (0, Q.jsx)(S.ItemIcon, { size: `xs`, children: T })), (t[19] = T), (t[20] = n));
    let r;
    t[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Q.jsx)(s, {
          id: `plugins.detail.openPlugin`,
          defaultMessage: `Open plugin`,
          description: `Action that opens an installed plugin's sidebar page`,
        })),
        (t[21] = r))
      : (r = t[21]);
    let i;
    t[22] !== y || t[23] !== n
      ? ((i = (0, Q.jsxs)(S.Item, { onSelect: y, children: [n, r] })),
        (t[22] = y),
        (t[23] = n),
        (t[24] = i))
      : (i = t[24]);
    let a;
    t[25] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, Q.jsx)(s, {
          id: `plugins.detail.tryInChat`,
          defaultMessage: `Try in chat`,
          description: `Secondary action that starts a chat using an installed plugin`,
        })),
        (t[25] = a))
      : (a = t[25]);
    let o;
    t[26] === C
      ? (o = t[27])
      : ((o = (0, Q.jsx)(S.Item, {
          LeftIcon: ht,
          leftIconClassName: `icon-xs`,
          onSelect: C,
          children: a,
        })),
        (t[26] = C),
        (t[27] = o));
    let c;
    t[28] !== i || t[29] !== o
      ? ((c = (0, Q.jsxs)(Q.Fragment, { children: [i, o] })), (t[28] = i), (t[29] = o), (t[30] = c))
      : (c = t[30]);
    let l;
    t[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((l = (0, Q.jsx)(s, {
          id: `plugins.detail.openPlugin`,
          defaultMessage: `Open plugin`,
          description: `Action that opens an installed plugin's sidebar page`,
        })),
        (t[31] = l))
      : (l = t[31]);
    let u;
    (t[32] !== h || t[33] !== g || t[34] !== y || t[35] !== e || t[36] !== c
      ? ((u = (0, Q.jsx)(jt, {
          color: `primary`,
          disabled: h,
          dropdownAlign: `end`,
          dropdownContentWidth: `sm`,
          loading: g,
          onClick: y,
          secondaryAriaLabel: e,
          size: `toolbar`,
          dropdownContent: c,
          children: l,
        })),
        (t[32] = h),
        (t[33] = g),
        (t[34] = y),
        (t[35] = e),
        (t[36] = c),
        (t[37] = u))
      : (u = t[37]),
      (L = u));
  } else {
    let e = f ? C : _,
      n;
    t[38] !== f || t[39] !== g
      ? ((n = !g && f ? (0, Q.jsx)(ht, { className: `icon-xs` }) : null),
        (t[38] = f),
        (t[39] = g),
        (t[40] = n))
      : (n = t[40]);
    let r;
    t[41] === f
      ? (r = t[42])
      : ((r = f
          ? (0, Q.jsx)(s, {
              id: `plugins.detail.tryInCodex`,
              defaultMessage: `Try now`,
              description: `Try action on the plugin detail page`,
            })
          : (0, Q.jsx)(s, {
              id: `plugins.detail.enableInCodex`,
              defaultMessage: `Enable`,
              description: `Enable action on the plugin detail page`,
            })),
        (t[41] = f),
        (t[42] = r));
    let i;
    (t[43] !== h || t[44] !== g || t[45] !== e || t[46] !== n || t[47] !== r
      ? ((i = (0, Q.jsxs)(q, {
          color: `primary`,
          disabled: h,
          focusRing: `inset`,
          loading: g,
          onClick: e,
          size: `toolbar`,
          children: [n, r],
        })),
        (t[43] = h),
        (t[44] = g),
        (t[45] = e),
        (t[46] = n),
        (t[47] = r),
        (t[48] = i))
      : (i = t[48]),
      (L = i));
  }
  let R = L;
  if (F) {
    let e;
    t[49] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Q.jsx)(s, {
          id: `plugins.install.connectorUnavailable`,
          defaultMessage: `App unavailable`,
          description: `Tooltip shown when plugin install is unavailable because the plugin's apps are not available in the current app directory`,
        })),
        (t[49] = e))
      : (e = t[49]);
    let n;
    (t[50] === L
      ? (n = t[51])
      : ((n = (0, Q.jsx)(O, { tooltipContent: e, children: L })), (t[50] = L), (t[51] = n)),
      (R = n));
  } else if (o != null && P && f) {
    let e = o.isConnectionReady && !h && !g,
      n;
    (t[52] !== o || t[53] !== L || t[54] !== e
      ? ((n = (0, Q.jsx)(sn, { ...o, isConnectionReady: e, surface: `detail`, children: L })),
        (t[52] = o),
        (t[53] = L),
        (t[54] = e),
        (t[55] = n))
      : (n = t[55]),
      (R = n));
  }
  let z;
  t[56] !== r ||
  t[57] !== k ||
  t[58] !== m ||
  t[59] !== h ||
  t[60] !== g ||
  t[61] !== b ||
  t[62] !== x ||
  t[63] !== w ||
  t[64] !== P
    ? ((z = P
        ? (0, Q.jsxs)(E, {
            align: `end`,
            contentWidth: `sm`,
            triggerButton: (0, Q.jsx)(St, {
              label: k.formatMessage({
                id: `plugins.detail.moreActions`,
                defaultMessage: `More actions`,
                description: `Aria label for the plugin detail page overflow menu`,
              }),
            }),
            children: [
              x == null
                ? null
                : (0, Q.jsx)(S.Item, {
                    LeftIcon: Et,
                    leftIconClassName: `icon-xs`,
                    onSelect: x,
                    children: (0, Q.jsx)(s, {
                      id: `plugins.detail.shareMenuItem`,
                      defaultMessage: `Share`,
                      description: `Share action on the plugin detail page`,
                    }),
                  }),
              b == null
                ? null
                : (0, Q.jsx)(S.Item, {
                    LeftIcon: te,
                    leftIconClassName: `icon-xs`,
                    onSelect: b,
                    children: (0, Q.jsx)(s, {
                      id: `plugins.detail.settings`,
                      defaultMessage: `Settings`,
                      description: `Open the plugin's dedicated settings page`,
                    }),
                  }),
              x == null ? null : (0, Q.jsx)(S.Separator, {}),
              r == null
                ? (0, Q.jsx)(bn, {
                    isInstalledByDefault: m,
                    isUninstalling: h,
                    isUpdatingEnabled: g,
                    onUninstall: w,
                  })
                : (0, Q.jsx)(yn, {
                    accountInventory: r,
                    isInstalledByDefault: m,
                    isUninstalling: h,
                    isUpdatingEnabled: g,
                    onUninstall: w,
                  }),
            ],
          })
        : null),
      (t[56] = r),
      (t[57] = k),
      (t[58] = m),
      (t[59] = h),
      (t[60] = g),
      (t[61] = b),
      (t[62] = x),
      (t[63] = w),
      (t[64] = P),
      (t[65] = z))
    : (z = t[65]);
  let B;
  t[66] !== L || t[67] !== A || t[68] !== R
    ? ((B = (0, Q.jsx)(xn, { measurement: L, reducedMotion: A, children: R })),
      (t[66] = L),
      (t[67] = A),
      (t[68] = R),
      (t[69] = B))
    : (B = t[69]);
  let V;
  return (
    t[70] !== D || t[71] !== z || t[72] !== B
      ? ((V = (0, Q.jsxs)(`div`, {
          className: `flex flex-wrap items-center justify-end gap-2`,
          children: [z, D, B],
        })),
        (t[70] = D),
        (t[71] = z),
        (t[72] = B),
        (t[73] = V))
      : (V = t[73]),
    V
  );
}
function yn(e) {
  let t = (0, Sn.c)(18),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ accountInventory: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i = st(`2907394035`),
    a = be(`157749883`),
    { value: o } = Ye(`979120159`),
    s;
  t[3] !== i || t[4] !== a
    ? ((s = i || a.get(`enable_multi_links`, !1)), (t[3] = i), (t[4] = a), (t[5] = s))
    : (s = t[5]);
  let c = s,
    l;
  t[6] === o ? (l = t[7]) : ((l = (e) => pt(e.id, o)), (t[6] = o), (t[7] = l));
  let u = n.apps.filter(l),
    d;
  t[8] === n ? (d = t[9]) : ((d = Ee(n)), (t[8] = n), (t[9] = d));
  let f = d,
    p = !!f.enabled && c && u.length > 0,
    m;
  t[10] !== f || t[11] !== p
    ? ((m = { ...f, enabled: p, staleTime: f.staleTime }), (t[10] = f), (t[11] = p), (t[12] = m))
    : (m = t[12]);
  let { data: h } = V(m),
    g;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = { enabled: !1 }), (t[13] = g))
    : (g = t[13]);
  let { isError: _ } = se(g),
    v = (!n.accountId || !n.userId) && _,
    y =
      c &&
      u.some(
        (e) =>
          (h?.filter(
            (t) =>
              ve(t.connector_id) === ve(e.id) &&
              t.visibility !== `HIDDEN` &&
              !t.id.startsWith(`implicit_link::`),
          ).length ?? 0) > 1,
      ),
    b = c && u.length > 0 && h == null && !v,
    x;
  return (
    t[14] !== y || t[15] !== r || t[16] !== b
      ? ((x = (0, Q.jsx)(bn, {
          disconnectsAllAccounts: y,
          isAccountInventoryUnavailable: b,
          ...r,
        })),
        (t[14] = y),
        (t[15] = r),
        (t[16] = b),
        (t[17] = x))
      : (x = t[17]),
    x
  );
}
function bn(e) {
  let t = (0, Sn.c)(10),
    {
      disconnectsAllAccounts: n,
      isAccountInventoryUnavailable: r,
      isInstalledByDefault: i,
      isUninstalling: a,
      isUpdatingEnabled: o,
      onUninstall: c,
    } = e,
    l = n !== void 0 && n,
    u = o || a || i || (r !== void 0 && r),
    d;
  t[0] !== l || t[1] !== i
    ? ((d =
        l && !i
          ? (0, Q.jsx)(`span`, {
              className: `text-xs`,
              children: (0, Q.jsx)(s, {
                id: `plugins.detail.uninstall.disconnectsAllAccounts`,
                defaultMessage: `Disconnects all accounts`,
                description: `Warning shown beneath the plugin Uninstall action when uninstalling will disconnect multiple connected provider accounts`,
              }),
            })
          : void 0),
      (t[0] = l),
      (t[1] = i),
      (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] === i
    ? (f = t[4])
    : ((f = i
        ? (0, Q.jsx)(s, {
            id: `plugins.installedByDefault.actionLabel`,
            defaultMessage: `Installed by admin`,
            description: `Disabled action label shown for a plugin installed by an admin`,
          })
        : (0, Q.jsx)(s, {
            id: `plugins.detail.uninstall`,
            defaultMessage: `Uninstall`,
            description: `Uninstall action on the plugin detail page`,
          })),
      (t[3] = i),
      (t[4] = f));
  let p;
  return (
    t[5] !== c || t[6] !== u || t[7] !== d || t[8] !== f
      ? ((p = (0, Q.jsx)(S.Item, {
          LeftIcon: Nt,
          disabled: u,
          onSelect: c,
          SubText: d,
          tone: `danger`,
          children: f,
        })),
        (t[5] = c),
        (t[6] = u),
        (t[7] = d),
        (t[8] = f),
        (t[9] = p))
      : (p = t[9]),
    p
  );
}
function xn(e) {
  let t = (0, Sn.c)(18),
    { children: n, measurement: r, reducedMotion: i } = e,
    [a, o] = mt(),
    [s, c] = (0, Cn.useState)(!1),
    l;
  t[0] !== r || t[1] !== a
    ? ((l = (0, Q.jsx)(`div`, {
        ref: a,
        className: `pointer-events-none invisible fixed top-0 left-0 min-w-max`,
        "aria-hidden": !0,
        inert: !0,
        children: r,
      })),
      (t[0] = r),
      (t[1] = a),
      (t[2] = l))
    : (l = t[2]);
  let u = o ?? `auto`,
    d;
  t[3] === u ? (d = t[4]) : ((d = { width: u }), (t[3] = u), (t[4] = d));
  let p = i || !s ? 0 : 0.18,
    m;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = [0.77, 0, 0.175, 1]), (t[5] = m))
    : (m = t[5]);
  let h;
  t[6] === p ? (h = t[7]) : ((h = { duration: p, ease: m }), (t[6] = p), (t[7] = h));
  let g;
  t[8] === o
    ? (g = t[9])
    : ((g = () => {
        o != null && c(!0);
      }),
      (t[8] = o),
      (t[9] = g));
  let _;
  t[10] !== n || t[11] !== d || t[12] !== h || t[13] !== g
    ? ((_ = (0, Q.jsx)(f.div, {
        animate: d,
        className: `inline-flex shrink-0 justify-end overflow-hidden [&>button]:w-full [&>button]:min-w-0 [&>button]:shrink-0 [&>button]:justify-center [&>button]:overflow-hidden`,
        initial: !1,
        transition: h,
        onAnimationComplete: g,
        children: n,
      })),
      (t[10] = n),
      (t[11] = d),
      (t[12] = h),
      (t[13] = g),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  return (
    t[15] !== l || t[16] !== _
      ? ((v = (0, Q.jsxs)(Q.Fragment, { children: [l, _] })), (t[15] = l), (t[16] = _), (t[17] = v))
      : (v = t[17]),
    v
  );
}
var Sn,
  Cn,
  Q,
  wn = e(() => {
    ((Sn = J()),
      h(),
      at(),
      Ge(),
      (Cn = t(o(), 1)),
      H(),
      He(),
      ie(),
      i(),
      Ot(),
      le(),
      Oe(),
      wt(),
      _(),
      T(),
      P(),
      Se(),
      vt(),
      Re(),
      Ct(),
      xt(),
      yt(),
      ot(),
      pe(),
      _n(),
      _t(),
      L(),
      (Q = K()));
  });
function Tn(e) {
  return e.source.type === `remote` && e.installed && e.installPolicy === `INSTALLED_BY_DEFAULT`;
}
var En = e(() => {}),
  Dn,
  On,
  kn,
  An = e(() => {
    ((Dn = [`Imagegen`, `Sora`, `PDF`, `Doc`, `Spreadsheet`, `Playwright`]),
      (On = new Set(Dn.map((e) => e.toLowerCase()))),
      (kn = new Map(Dn.map((e, t) => [e.toLowerCase(), t]))));
  });
function jn({
  currentTab: e,
  isCurrentTabLoading: t,
  isManagePage: n,
  isPluginsEnabled: r,
  tabCounts: i,
}) {
  return n
    ? r
      ? e === `mcps` || t || i[e] > 0
        ? e
        : (or.find((e) => i[e] > 0) ?? `mcps`)
      : `mcps`
    : e;
}
function Mn(e) {
  return e.trim().toLowerCase();
}
function Nn(e) {
  let t = Mn(e);
  if (t.length === 0) return [];
  let n = t.replace(/[^a-z0-9]+/g, ``);
  return n === t ? [t] : [t, n];
}
function Pn(e) {
  let t = new Set();
  for (let n of e) if (n != null) for (let e of Nn(n)) t.add(e);
  return t;
}
function Fn(e) {
  return Pn([tt(e.path), e.name, Ue(e.name), ye(e)]);
}
function In(e) {
  return Pn([e.id, e.name, Ue(e.name)]);
}
function Ln(e) {
  let t = new Set();
  for (let { skill: n } of e) for (let e of Fn(n)) t.add(e);
  return t;
}
function Rn({ installedSkillMatchKeys: e, skill: t }) {
  for (let n of In(t)) if (e.has(n)) return !0;
  return !1;
}
function zn({ installedSkills: e, skill: t }) {
  let n = In(t);
  for (let { skill: t } of e) for (let e of Fn(t)) if (n.has(e)) return t;
  return null;
}
function Bn({ installedRecommendedSkillIds: e, installedSkillMatchKeys: t, skills: n }) {
  return n.filter((n) => e.has(n.id) || !Rn({ installedSkillMatchKeys: t, skill: n }));
}
function Vn({ installedSkills: e, recommendedSkills: t }) {
  let n = new Set();
  for (let e of t) for (let t of In(e)) n.add(t);
  return e.filter(({ skill: e }) => {
    for (let t of Fn(e)) if (n.has(t)) return !1;
    return !0;
  });
}
function Hn(e, t) {
  return e.length === 0 || t.join(` `).toLowerCase().includes(e);
}
function Un({ pluginResultKeys: e, skillResultKeys: t, tab: n }) {
  switch (n) {
    case `plugins`:
      return e;
    case `skills`:
      return t;
  }
}
function Wn(e) {
  return ce(e.filter((e) => Ve(e.path)?.pluginId == null));
}
function Gn({ recommendedSkills: e, skills: t }) {
  return e == null
    ? []
    : Vn({ installedSkills: Wn(t.filter((e) => e.scope === `user`)), recommendedSkills: e });
}
function Kn({ skills: e, query: t }) {
  return e.filter(({ skill: e }) => Hn(t, [e.name, ye(e), Pe(e)]));
}
function qn({ query: e, suggestions: t }) {
  return (t ?? []).filter((t) => t.type === `skill` && Hn(e, [t.name, t.description]));
}
function Jn({ skills: e, query: t }) {
  return e.filter((e) => Hn(t, [e.name, e.description, e.shortDescription ?? ``]));
}
function Yn(e) {
  return [
    ...e.filter((e) => {
      let t = Mn(e.name),
        n = Mn(Ue(e.name));
      return On.has(t) || On.has(n);
    }),
  ].sort(
    (e, t) => (kn.get(Mn(Ue(e.name))) ?? 2 ** 53 - 1) - (kn.get(Mn(Ue(t.name))) ?? 2 ** 53 - 1),
  );
}
function Xn({ apps: e, query: t }) {
  return e.filter((e) => Hn(t, [e.name, e.description ?? ``]));
}
function Zn(e) {
  let t = e.displayName?.trim();
  return t != null && t.length > 0 ? Mt(t) : Mt(e.name);
}
function Qn(e) {
  let t = e?.marketplaces;
  if (!rr(t)) return new Set();
  let n = new Set();
  for (let [e, r] of Object.entries(t))
    rr(r) &&
      r.source_type === `git` &&
      typeof r.source == `string` &&
      r.source.length > 0 &&
      n.add(e);
  return n;
}
function $n(e) {
  let t = e?.marketplaces;
  return rr(t) ? new Set(Object.keys(t)) : new Set();
}
function er(e, t) {
  return !e.isBuiltIn && t.has(e.name);
}
function tr(e, t) {
  return !e.isBuiltIn && t.has(e.name);
}
function nr({ configuredMarketplaceNames: e, marketplaces: t, query: n }) {
  return t.filter((t) => (er(t, e) ? Hn(n, [Zn(t), t.name, t.path ?? ``]) : !1));
}
function rr(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
function ir(e) {
  let [t, n] = (0, ar.default)(e, (e) => e.isAccessible);
  return { installedApps: t, discoverApps: n };
}
var ar,
  or,
  sr = e(() => {
    ((ar = t(Pt(), 1)),
      ft(),
      At(),
      ke(),
      me(),
      Me(),
      An(),
      Ze(),
      (or = [`plugins`, `apps`, `mcps`, `skills`, `marketplace`]));
  });
function cr(e) {
  let t = (0, pr.c)(42),
    { hostId: r, plugin: i, size: a } = e,
    o = a === void 0 ? `default` : a,
    c = I(),
    l = i.origin == null ? i.marketplaceName : null,
    u;
  t[0] !== r || t[1] !== i.marketplacePath || t[2] !== i.pluginSourceType || t[3] !== l
    ? ((u = {
        hostId: r,
        marketplaceName: l,
        marketplacePath: i.marketplacePath,
        sourceType: i.pluginSourceType,
      }),
      (t[0] = r),
      (t[1] = i.marketplacePath),
      (t[2] = i.pluginSourceType),
      (t[3] = l),
      (t[4] = u))
    : (u = t[4]);
  let d = j(mr, u),
    f = i.origin;
  if (
    ((f ??=
      i.scope === `WORKSPACE` || i.marketplaceName?.startsWith(`workspace-`)
        ? `workspace`
        : i.scope === `USER` || i.marketplaceName === `created-by-me-remote`
          ? `user-cloud`
          : d),
    f == null)
  )
    return null;
  let p, m, h;
  bb0: switch (f) {
    case `workspace`: {
      let e;
      (t[5] === c
        ? (e = t[6])
        : ((e = c.formatMessage({
            id: `plugins.card.workspacePlugin`,
            defaultMessage: `Workspace plugin`,
            description: `Accessible label for the building icon identifying a plugin provided by the user's workspace`,
          })),
          (t[5] = c),
          (t[6] = e)),
        (p = e),
        (m = o === `large` ? Ke : ut));
      let n;
      (t[7] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(fr, {})), (t[7] = n))
        : (n = t[7]),
        (h = n));
      break bb0;
    }
    case `git-marketplace`: {
      let e;
      (t[8] === c
        ? (e = t[9])
        : ((e = c.formatMessage({
            id: `plugins.card.gitMarketplacePlugin`,
            defaultMessage: `Git marketplace plugin`,
            description: `Accessible label for the branch icon identifying a plugin provided by a Git-backed marketplace`,
          })),
          (t[8] = c),
          (t[9] = e)),
        (p = e),
        (m = o === `large` ? we : n));
      let a;
      (t[10] !== r || t[11] !== f || t[12] !== i
        ? ((a = (0, $.jsx)(dr, { hostId: r, origin: f, plugin: i })),
          (t[10] = r),
          (t[11] = f),
          (t[12] = i),
          (t[13] = a))
        : (a = t[13]),
        (h = a));
      break bb0;
    }
    case `folder-marketplace`: {
      let e;
      (t[14] === c
        ? (e = t[15])
        : ((e = c.formatMessage({
            id: `plugins.card.folderMarketplacePlugin`,
            defaultMessage: `Folder marketplace plugin`,
            description: `Accessible label for the folder icon identifying a plugin provided by a marketplace discovered from a local project directory`,
          })),
          (t[14] = c),
          (t[15] = e)),
        (p = e),
        (m = o === `large` ? oe : U));
      let n;
      (t[16] !== r || t[17] !== f || t[18] !== i
        ? ((n = (0, $.jsx)(dr, { hostId: r, origin: f, plugin: i })),
          (t[16] = r),
          (t[17] = f),
          (t[18] = i),
          (t[19] = n))
        : (n = t[19]),
        (h = n));
      break bb0;
    }
    case `local`:
      if (r === `local`) {
        let e;
        (t[20] === c
          ? (e = t[21])
          : ((e = c.formatMessage({
              id: `plugins.card.localPlugin`,
              defaultMessage: `Local plugin`,
              description: `Accessible label for the laptop icon identifying a plugin stored locally on the user's machine`,
            })),
            (t[20] = c),
            (t[21] = e)),
          (p = e),
          (m = o === `large` ? ct : Xe));
        let n;
        (t[22] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsx)(s, {
              id: `plugins.card.localPluginTooltip`,
              defaultMessage: `From your personal marketplace on this machine`,
              description: `Tooltip identifying a plugin from the user's personal marketplace on their local machine`,
            })),
            (t[22] = n))
          : (n = t[22]),
          (h = n));
      } else {
        let e;
        (t[23] === c
          ? (e = t[24])
          : ((e = c.formatMessage({
              id: `plugins.card.remoteHostPlugin`,
              defaultMessage: `Remote host plugin`,
              description: `Accessible label for the globe icon identifying a plugin stored on the selected remote development host`,
            })),
            (t[23] = c),
            (t[24] = e)),
          (p = e),
          (m = o === `large` ? dt : Te));
        let n;
        (t[25] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsx)(s, {
              id: `plugins.card.remoteHostPluginTooltip`,
              defaultMessage: `From your remote host`,
              description: `Tooltip identifying a plugin stored on the user's selected remote development host`,
            })),
            (t[25] = n))
          : (n = t[25]),
          (h = n));
      }
      break bb0;
    case `user-cloud`: {
      let e;
      (t[26] === c
        ? (e = t[27])
        : ((e = c.formatMessage({
            id: `plugins.card.userCloudPlugin`,
            defaultMessage: `Your cloud plugin`,
            description: `Accessible label for the person icon identifying a cloud-based plugin created by the current user`,
          })),
          (t[26] = c),
          (t[27] = e)),
        (p = e),
        (m = o === `large` ? B : k));
      let n;
      (t[28] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(s, {
            id: `plugins.card.userCloudPluginTooltip`,
            defaultMessage: `Created by you in the cloud`,
            description: `Tooltip identifying a cloud-based plugin created by the current user`,
          })),
          (t[28] = n))
        : (n = t[28]),
        (h = n));
    }
  }
  let g;
  t[29] !== r || t[30] !== f || t[31] !== i.marketplacePath || t[32] !== h
    ? ((g =
        (f === `folder-marketplace` || (f === `local` && r === `local`)) &&
        i.marketplacePath != null
          ? (0, $.jsxs)(`div`, {
              className: `flex flex-col gap-1`,
              children: [h, (0, $.jsx)(ur, { hostId: r, marketplacePath: i.marketplacePath })],
            })
          : h),
      (t[29] = r),
      (t[30] = f),
      (t[31] = i.marketplacePath),
      (t[32] = h),
      (t[33] = g))
    : (g = t[33]);
  let _;
  t[34] === m
    ? (_ = t[35])
    : ((_ = (0, $.jsx)(m, { className: `text-secondary` })), (t[34] = m), (t[35] = _));
  let v;
  t[36] !== p || t[37] !== _
    ? ((v = (0, $.jsx)(`button`, {
        type: `button`,
        onClick: lr,
        children: (0, $.jsx)(`span`, { "aria-label": p, role: `img`, children: _ }),
      })),
      (t[36] = p),
      (t[37] = _),
      (t[38] = v))
    : (v = t[38]);
  let y;
  return (
    t[39] !== g || t[40] !== v
      ? ((y = (0, $.jsx)(O, { tooltipContent: g, children: v })),
        (t[39] = g),
        (t[40] = v),
        (t[41] = y))
      : (y = t[41]),
    y
  );
}
function lr(e) {
  return e.stopPropagation();
}
function ur(e) {
  let t = (0, pr.c)(5),
    { hostId: n, marketplacePath: r } = e,
    i = j(v, { hostId: n }).data?.homeDirectory,
    a;
  t[0] !== i || t[1] !== r
    ? ((a = i != null && b([i], r) === 0 ? g(`~`, Qe(r).slice(Qe(i).length)) : r),
      (t[0] = i),
      (t[1] = r),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] === a
      ? (o = t[4])
      : ((o = (0, $.jsx)(`span`, { className: `opacity-70`, children: a })),
        (t[3] = a),
        (t[4] = o)),
    o
  );
}
function dr(e) {
  let t = (0, pr.c)(11),
    { hostId: n, origin: r, plugin: i } = e,
    a;
  t[0] !== n || t[1] !== i.marketplacePath
    ? ((a = { hostId: n, marketplacePath: i.marketplacePath }),
      (t[0] = n),
      (t[1] = i.marketplacePath),
      (t[2] = a))
    : (a = t[2]);
  let o = j(hr, a),
    c;
  t[3] !== o || t[4] !== i.marketplaceDisplayName || t[5] !== i.marketplaceName
    ? ((c = o || i.marketplaceDisplayName?.trim() || i.marketplaceName),
      (t[3] = o),
      (t[4] = i.marketplaceDisplayName),
      (t[5] = i.marketplaceName),
      (t[6] = c))
    : (c = t[6]);
  let l = c;
  if (r === `git-marketplace`) {
    let e;
    return (
      t[7] === l
        ? (e = t[8])
        : ((e =
            l == null
              ? (0, $.jsx)(s, {
                  id: `plugins.card.gitMarketplacePluginTooltip`,
                  defaultMessage: `From a Git marketplace`,
                  description: `Tooltip identifying a plugin provided by a Git-backed plugin marketplace`,
                })
              : (0, $.jsx)(s, {
                  id: `plugins.card.namedGitMarketplacePluginTooltip`,
                  defaultMessage: `From the {marketplaceName} Git marketplace`,
                  description: `Tooltip identifying a plugin provided by a Git-backed marketplace; {marketplaceName} is the name of that marketplace`,
                  values: { marketplaceName: l },
                })),
          (t[7] = l),
          (t[8] = e)),
      e
    );
  }
  let u;
  return (
    t[9] === l
      ? (u = t[10])
      : ((u =
          l == null
            ? (0, $.jsx)(s, {
                id: `plugins.card.folderMarketplacePluginTooltip`,
                defaultMessage: `From a folder marketplace`,
                description: `Tooltip identifying a plugin provided by a folder-backed plugin marketplace when the marketplace name is unavailable`,
              })
            : (0, $.jsx)(s, {
                id: `plugins.card.namedFolderMarketplacePluginTooltip`,
                defaultMessage: `From {marketplaceName}`,
                description: `Tooltip identifying a plugin provided by a folder-backed plugin marketplace; {marketplaceName} is the name of that marketplace`,
                values: { marketplaceName: l },
              })),
        (t[9] = l),
        (t[10] = u)),
    u
  );
}
function fr() {
  let e = (0, pr.c)(4),
    { data: t } = gt(),
    n;
  e[0] === t?.name ? (n = e[1]) : ((n = t?.name?.trim() || null), (e[0] = t?.name), (e[1] = n));
  let r = n,
    i;
  return (
    e[2] === r
      ? (i = e[3])
      : ((i =
          r == null
            ? (0, $.jsx)(s, {
                id: `plugins.card.workspacePluginTooltip`,
                defaultMessage: `From your workspace`,
                description: `Tooltip identifying a plugin provided by the user's workspace when the workspace name is unavailable`,
              })
            : (0, $.jsx)(s, {
                id: `plugins.card.namedWorkspacePluginTooltip`,
                defaultMessage: `From your {workspaceName} workspace`,
                description: `Tooltip identifying a plugin provided by the user's workspace; {workspaceName} is the name of the current workspace`,
                values: { workspaceName: r },
              })),
        (e[2] = r),
        (e[3] = i)),
    i
  );
}
var pr,
  $,
  mr,
  hr,
  gr = e(() => {
    ((pr = J()),
      N(),
      H(),
      rt(),
      W(),
      T(),
      fe(),
      At(),
      ge(),
      u(),
      qe(),
      et(),
      D(),
      sr(),
      y(),
      Tt(),
      ($ = K()),
      (mr = je(
        de,
        ({ hostId: e, marketplaceName: t, marketplacePath: n, sourceType: r }, { get: i }) => {
          if (t == null || n == null || r !== `local` || lt(t)) return;
          let a = i(z, e).data;
          if (a == null || !a.configReadSucceeded) return;
          let o = i(v, { hostId: e }).data;
          if (o != null) {
            if (Qn(a.config).has(t)) {
              let t = i(re, { hostId: e }).data,
                r = i(G, { hostId: e }).data;
              if (t == null || r == null || (t.codexHome == null && o.homeDirectory == null))
                return;
              if (b([t.codexHome ?? g(o.homeDirectory, `.codex`), ...r.roots], n) === 0)
                return `git-marketplace`;
            }
            return Je(o.homeDirectory, n) ? `local` : `folder-marketplace`;
          }
        },
      )),
      (hr = je(de, ({ hostId: e, marketplacePath: t }, { get: n }) => {
        if (t == null) return null;
        let r = n(Dt, e).data?.plugins;
        if (r == null) return null;
        let i = kt(r).find(({ value: e }) => e === t);
        return i == null ? null : i.subLabel == null ? i.label : `${i.label} · ${i.subLabel}`;
      })));
  });
function _r(e) {
  let t = (0, yr.c)(10),
    { children: n, className: r, isExpanded: i, onClick: a } = e,
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = R(
        `flex min-h-[var(--height-token-row)] w-full cursor-interaction items-center rounded-[var(--radius-token-row)] px-[var(--padding-row-x)] py-[var(--padding-row-y)] text-start text-sm leading-relaxed font-normal text-codex-description outline-hidden hover:text-default focus-visible:text-default`,
        r,
      )),
      (t[0] = r),
      (t[1] = o));
  let c;
  t[2] !== n || t[3] !== i
    ? ((c = i
        ? (0, xr.jsx)(s, {
            id: `skills.appsPage.section.showLess`,
            defaultMessage: `Show less`,
            description: `Label for the row that collapses an expanded plugins page section`,
          })
        : n),
      (t[2] = n),
      (t[3] = i),
      (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] !== i || t[6] !== a || t[7] !== o || t[8] !== c
      ? ((l = (0, xr.jsx)(`button`, {
          className: o,
          type: `button`,
          "aria-expanded": i,
          onClick: a,
          children: c,
        })),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function vr(e) {
  let t = (0, yr.c)(12),
    {
      children: n,
      items: r,
      batchSize: i,
      pinnedItem: a,
      renderExpandRow: o,
      visibleItemLimit: s,
    } = e,
    [c, l] = (0, br.useState)(0),
    u = s + c * (i ?? r.length),
    d,
    f;
  if (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== a ||
    t[3] !== o ||
    t[4] !== c ||
    t[5] !== u ||
    t[6] !== s
  ) {
    let e = r.slice(0, u),
      i = r.slice(u),
      p = a != null && i.includes(a),
      m = p ? i.filter((e) => e !== a) : i,
      h = c > 0 && m.length === 0;
    ((d = n(p ? [...e, a] : e)),
      (f =
        r.length > s && (h || m.length > 0)
          ? o({ hiddenItems: m, isExpanded: h, onToggle: () => l((e) => (h ? 0 : e + 1)) })
          : null),
      (t[0] = n),
      (t[1] = r),
      (t[2] = a),
      (t[3] = o),
      (t[4] = c),
      (t[5] = u),
      (t[6] = s),
      (t[7] = d),
      (t[8] = f));
  } else ((d = t[7]), (f = t[8]));
  let p;
  return (
    t[9] !== d || t[10] !== f
      ? ((p = (0, xr.jsxs)(xr.Fragment, { children: [d, f] })),
        (t[9] = d),
        (t[10] = f),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
var yr,
  br,
  xr,
  Sr = e(() => {
    ((yr = J()), bt(), (br = t(o(), 1)), H(), (xr = K()));
  });
export {
  vn as A,
  qt as B,
  Vn as C,
  Wn as D,
  Bn as E,
  nn as F,
  on as I,
  en as L,
  wn as M,
  sn as N,
  En as O,
  _n as P,
  tn as R,
  Jn as S,
  Gn as T,
  Qt as V,
  Un as _,
  gr as a,
  Kn as b,
  $n as c,
  sr as d,
  er as f,
  jn as g,
  ir as h,
  cr as i,
  xn as j,
  Tn as k,
  zn as l,
  Rn as m,
  vr as n,
  Ln as o,
  tr as p,
  Sr as r,
  Qn as s,
  _r as t,
  Zn as u,
  qn as v,
  Yn as w,
  nr as x,
  Xn as y,
  Gt as z,
};
//# sourceMappingURL=plugins-page-section-651a6ff2d45b.js.map
