import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $2t as n,
  $g as r,
  A3t as i,
  AMt as a,
  Amn as o,
  B6t as s,
  BH as c,
  BO as l,
  Bft as u,
  Bit as d,
  Cpn as f,
  DW as p,
  EW as m,
  F3t as h,
  Fit as g,
  GD as _,
  GK as v,
  GL as y,
  H4t as b,
  HH as x,
  JD as S,
  JG as C,
  Jft as w,
  Jit as T,
  KG as E,
  KK as D,
  Kit as ee,
  Kqt as O,
  ME as k,
  MMt as A,
  M_ as j,
  Mit as M,
  N3t as N,
  Nit as P,
  O3t as F,
  Opn as te,
  PE as I,
  P_ as L,
  Pit as R,
  QKt as z,
  Qg as B,
  Qit as V,
  Qq as H,
  Rpn as U,
  Spn as W,
  U3t as ne,
  UD as re,
  VD as ie,
  VH as ae,
  Vit as G,
  W8t as K,
  WD as q,
  WL as J,
  X2t as oe,
  Y2t as se,
  YD as ce,
  ZG as Y,
  Zit as X,
  _Jt as le,
  _T as ue,
  _zt as de,
  a3t as fe,
  a_ as pe,
  b4t as me,
  bMt as he,
  bT as ge,
  ck as _e,
  dD as ve,
  eMt as ye,
  ev as be,
  gMt as xe,
  gRt as Se,
  gin as Ce,
  hMt as we,
  hO as Te,
  hmn as Ee,
  i6t as De,
  jMt as Oe,
  kMt as ke,
  kin as Ae,
  kmn as je,
  lW as Me,
  lk as Ne,
  mJt as Pe,
  o3t as Fe,
  oO as Ie,
  o_ as Le,
  q4t as Re,
  qKt as ze,
  qft as Be,
  qqt as Ve,
  rMt as He,
  sW as Ue,
  tMt as We,
  tv as Ge,
  w4t as Ke,
  wD as qe,
  xRt as Je,
  yMt as Ye,
  yRt as Xe,
  yzt as Ze,
  zH as Qe,
  zO as $e,
  zft as et,
  zpn as tt,
} from "./app-initial-f094ef01c64d.js";
import {
  Aw as nt,
  Dw as rt,
  Js as it,
  Ow as at,
  Qy as ot,
  Xs as st,
  Ys as ct,
  dw as lt,
  eb as ut,
  mw as dt,
} from "./app-primary-4c40d73a1074.js";
import { r as ft, t as pt } from "./review-preferences-model-c2edfefe5a2c.js";
import { n as mt, t as ht } from "./arrow-curved-right-c429570ec5db.js";
import {
  n as gt,
  o as _t,
  r as vt,
  s as yt,
} from "./pull-request-readonly-comment-6e9ac0779fb8.js";
import { i as bt, n as xt, t as St } from "./pull-request-revision-queries-822a229a11df.js";
import {
  C as Ct,
  S as wt,
  _ as Tt,
  a as Et,
  b as Dt,
  c as Ot,
  d as kt,
  f as At,
  g as jt,
  h as Mt,
  i as Nt,
  l as Pt,
  m as Ft,
  n as It,
  o as Lt,
  p as Rt,
  s as zt,
  t as Bt,
  u as Vt,
  v as Ht,
  x as Ut,
  y as Wt,
} from "./pull-request-code-review-navigation-c0a64db532da.js";
import {
  a as Gt,
  c as Kt,
  i as qt,
  l as Jt,
  n as Yt,
  r as Xt,
  t as Zt,
} from "./pull-request-comment-72460362f3f8.js";
import { c as Qt, l as $t } from "./pull-request-detail-model-6c8655a9e7d6.js";
import {
  i as en,
  n as tn,
  r as nn,
  t as rn,
} from "./review-diff-virtualizer-metrics-92681c84005e.js";
import {
  a as an,
  c as on,
  i as sn,
  n as cn,
  r as ln,
  s as un,
} from "./review-file-tree-pane-b743a8f06e62.js";
import { n as dn, t as fn } from "./eye-3fd8cd7cd66d.js";
import {
  c as pn,
  i as mn,
  l as hn,
  n as gn,
  r as _n,
  s as vn,
  t as yn,
  u as bn,
} from "./code-diff-dbee820b6963.js";
import { n as xn, t as Sn } from "./text-shorter-588de2d999a8.js";
import { n as Cn, t as wn } from "./pull-request-error-description-aebc9b65d45f.js";
import { n as Tn, t as En } from "./middle-truncated-text-3230b5cffad1.js";
function Dn({ containerWidth: e, maxWidth: t, minWidth: n, visibleInset: r = 0 }) {
  let i = Math.min(n, e),
    a = Math.min(t ?? e, Math.max(0, e - r)),
    o = Math.min(e * On, a);
  return Math.min(e, Math.max(i, o));
}
var On,
  kn = e(() => {
    On = 0.9;
  });
function An(e) {
  let t = (0, qn.c)(184),
    {
      id: n,
      left: r,
      right: i,
      className: a,
      leftClassName: o,
      rightClassName: s,
      handleClassName: c,
      defaultLeftPercent: l,
      minLeftWidth: u,
      minRightWidth: d,
      handleWidth: f,
      drawerBreakpoint: p,
      drawerMaxWidth: m,
      drawerVisibleInset: h,
      isLeftOpen: g,
      isRightOpen: _,
      onLeftOpenChange: v,
      onRightOpenChange: y,
    } = e,
    b = u === void 0 ? Xn : u,
    x = d === void 0 ? Xn : d,
    S = f === void 0 ? Yn : f,
    C = p === void 0 ? $n : p,
    w = h === void 0 ? 0 : h,
    T = g === void 0 || g,
    E = _ === void 0 || _,
    D = te(),
    ee = jn(),
    O = i != null,
    k = O ? E : !1,
    A = !O || T,
    j = `${n}:split-left-width`,
    M = se(j, NaN),
    N = Number.isFinite(M) && M <= 1,
    P;
  t[0] === l ? (P = t[1]) : ((P = Rn(l)), (t[0] = l), (t[1] = P));
  let F = N ? Ln(M) : P,
    [I, L] = (0, Z.useState)(0),
    [R, z] = (0, Z.useState)(!1),
    B = (0, Z.useRef)(null),
    V = (0, Z.useRef)(null),
    H = (0, Z.useRef)(null),
    W = (0, Z.useRef)(null),
    ne = (0, Z.useRef)(!1),
    re = (0, Z.useRef)(null),
    ie = (0, Z.useRef)(null),
    ae = (0, Z.useRef)(null),
    G = (0, Z.useRef)(null),
    K = (0, Z.useRef)(null),
    q = (0, Z.useRef)(F),
    J = (0, Z.useRef)(0),
    oe = (0, Z.useRef)(N ? Ln(M) : null),
    ce = O && !A && k,
    Y = C > 0 && O && I > 0 && I <= C && !ce,
    X = Y ? 0 : S,
    le;
  t[2] === L
    ? (le = t[3])
    : ((le = () => {
        let e = B.current;
        if (!e) return;
        let t = e.getBoundingClientRect().width;
        L(t);
      }),
      (t[2] = L),
      (t[3] = le));
  let ue;
  (t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((ue = []), (t[4] = ue)) : (ue = t[4]),
    (0, Z.useLayoutEffect)(le, ue));
  let de;
  t[5] === L
    ? (de = t[6])
    : ((de = () => {
        let e = B.current;
        if (!e || typeof ResizeObserver > `u`) return;
        let t = new ResizeObserver((e) => {
          let t = e[0]?.contentRect.width ?? 0;
          L(t);
        });
        return (
          t.observe(e),
          () => {
            t.disconnect();
          }
        );
      }),
      (t[5] = L),
      (t[6] = de));
  let fe;
  (t[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((fe = []), (t[7] = fe)) : (fe = t[7]),
    (0, Z.useEffect)(de, fe));
  let pe, me;
  (t[8] !== I || t[9] !== O || t[10] !== T || t[11] !== E || t[12] !== v
    ? ((pe = () => {
        !I || !O || (!T && !E && v?.(!0));
      }),
      (me = [I, O, T, E, v]),
      (t[8] = I),
      (t[9] = O),
      (t[10] = T),
      (t[11] = E),
      (t[12] = v),
      (t[13] = pe),
      (t[14] = me))
    : ((pe = t[13]), (me = t[14])),
    (0, Z.useEffect)(pe, me));
  let he;
  t[15] !== I ||
  t[16] !== C ||
  t[17] !== m ||
  t[18] !== w ||
  t[19] !== X ||
  t[20] !== A ||
  t[21] !== k ||
  t[22] !== ce ||
  t[23] !== O ||
  t[24] !== T ||
  t[25] !== E ||
  t[26] !== q ||
  t[27] !== b ||
  t[28] !== x ||
  t[29] !== j
    ? ((he = () => {
        let e = B.current;
        if (!e) return;
        let t = I || e.getBoundingClientRect().width;
        if (!t) return;
        let n = re.current,
          r = ie.current,
          i = (n != null && Math.abs(n - t) >= 1) || (r != null && r !== A);
        ne.current ? i && Mn([ae, G, K], H) : (Mn([ae, G, K], H), (ne.current = !0));
        let a = () => {
          ((re.current = t), (ie.current = A));
        };
        if (C > 0 && O && t <= C && !ce) {
          (Wn({
            containerWidth: t,
            drawerMaxWidth: m,
            drawerVisibleInset: w,
            minRightWidth: x,
            isOpen: k,
            node: e,
            rafRef: V,
          }),
            a());
          return;
        }
        let o = Fn(t);
        if (!O) {
          (Kn({
            containerWidth: t,
            handleWidth: 0,
            nextLeftWidth: t,
            rightWidth: 0,
            rightTranslate: 0,
            node: e,
            rafRef: V,
            opts: { immediate: !0 },
          }),
            a());
          return;
        }
        if (!k) {
          let n = o * Ln(q.current),
            { rightWidth: r, boundedLeftRatio: i } = Un({
              containerWidth: t,
              minLeftWidth: b,
              minRightWidth: x,
              leftWidth: n,
            });
          q.current = i;
          let s = Hn(J.current > 0 ? J.current : r, o);
          ((J.current = s),
            Kn({
              containerWidth: t,
              handleWidth: 0,
              nextLeftWidth: t,
              rightWidth: s,
              rightTranslate: s,
              node: e,
              rafRef: V,
              opts: { immediate: !0 },
            }),
            a());
          return;
        }
        if (!T) {
          let n = o;
          ((J.current = n),
            Kn({
              containerWidth: t,
              handleWidth: X,
              nextLeftWidth: 0,
              rightWidth: n,
              rightTranslate: 0,
              node: e,
              rafRef: V,
              opts: { immediate: !0 },
            }),
            a());
          return;
        }
        let s = o * Ln(q.current),
          {
            boundedLeftWidth: c,
            rightWidth: l,
            boundedLeftRatio: u,
          } = Un({ containerWidth: t, minLeftWidth: b, minRightWidth: x, leftWidth: s });
        ((J.current = l),
          (q.current = u),
          T && E && Gn(j, oe, u),
          Kn({
            containerWidth: t,
            handleWidth: X,
            nextLeftWidth: c,
            rightWidth: l,
            rightTranslate: 0,
            node: e,
            rafRef: V,
            opts: { immediate: !0 },
          }),
          a());
        let d = V.current;
        return () => {
          (d != null && (cancelAnimationFrame(d), V.current === d && (V.current = null)),
            H.current != null && (cancelAnimationFrame(H.current), (H.current = null)));
        };
      }),
      (t[15] = I),
      (t[16] = C),
      (t[17] = m),
      (t[18] = w),
      (t[19] = X),
      (t[20] = A),
      (t[21] = k),
      (t[22] = ce),
      (t[23] = O),
      (t[24] = T),
      (t[25] = E),
      (t[26] = q),
      (t[27] = b),
      (t[28] = x),
      (t[29] = j),
      (t[30] = he))
    : (he = t[30]);
  let ge;
  (t[31] !== I ||
  t[32] !== C ||
  t[33] !== m ||
  t[34] !== w ||
  t[35] !== X ||
  t[36] !== A ||
  t[37] !== k ||
  t[38] !== ce ||
  t[39] !== O ||
  t[40] !== ee ||
  t[41] !== Y ||
  t[42] !== T ||
  t[43] !== R ||
  t[44] !== E ||
  t[45] !== b ||
  t[46] !== x ||
  t[47] !== j
    ? ((ge = [I, A, k, X, C, m, w, ce, O, Y, T, E, R, b, x, ee, j]),
      (t[31] = I),
      (t[32] = C),
      (t[33] = m),
      (t[34] = w),
      (t[35] = X),
      (t[36] = A),
      (t[37] = k),
      (t[38] = ce),
      (t[39] = O),
      (t[40] = ee),
      (t[41] = Y),
      (t[42] = T),
      (t[43] = R),
      (t[44] = E),
      (t[45] = b),
      (t[46] = x),
      (t[47] = j),
      (t[48] = ge))
    : (ge = t[48]),
    (0, Z.useLayoutEffect)(he, ge));
  let _e;
  t[49] !== I ||
  t[50] !== Y ||
  t[51] !== T ||
  t[52] !== E ||
  t[53] !== v ||
  t[54] !== y ||
  t[55] !== z
    ? ((_e = (e) => {
        if (e.button !== 0) return;
        let t = B.current,
          n = In(I, t);
        if (Y || !t || !n) return;
        (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId));
        let r = t.getBoundingClientRect();
        ((W.current = r.left), T || v?.(!0), E || y?.(!0), z(!0));
      }),
      (t[49] = I),
      (t[50] = Y),
      (t[51] = T),
      (t[52] = E),
      (t[53] = v),
      (t[54] = y),
      (t[55] = z),
      (t[56] = _e))
    : (_e = t[56]);
  let ve = _e,
    ye;
  t[57] !== I ||
  t[58] !== X ||
  t[59] !== E ||
  t[60] !== q ||
  t[61] !== b ||
  t[62] !== x ||
  t[63] !== j
    ? ((ye = (e) => {
        let t = B.current;
        if (!t || !I || !E) return;
        let n = I * q.current;
        if (e.key === `ArrowLeft`) n -= Qn;
        else if (e.key === `ArrowRight`) n += Qn;
        else if (e.key === `Home`) n = 0;
        else if (e.key === `End`) n = I;
        else return;
        (e.preventDefault(), e.stopPropagation());
        let {
          boundedLeftWidth: r,
          rightWidth: i,
          boundedLeftRatio: a,
        } = Un({ containerWidth: I, minLeftWidth: b, minRightWidth: x, leftWidth: n });
        ((q.current = a),
          (J.current = i),
          Kn({
            containerWidth: I,
            handleWidth: X,
            nextLeftWidth: r,
            node: t,
            rafRef: V,
            opts: { immediate: !0 },
          }),
          Gn(j, oe, a));
      }),
      (t[57] = I),
      (t[58] = X),
      (t[59] = E),
      (t[60] = q),
      (t[61] = b),
      (t[62] = x),
      (t[63] = j),
      (t[64] = ye))
    : (ye = t[64]);
  let be = ye,
    xe;
  t[65] !== I ||
  t[66] !== X ||
  t[67] !== T ||
  t[68] !== R ||
  t[69] !== E ||
  t[70] !== q ||
  t[71] !== b ||
  t[72] !== x ||
  t[73] !== z ||
  t[74] !== j
    ? ((xe = () => {
        if (!R) return;
        let e = (e) => {
            e.preventDefault();
            let t = B.current,
              n = In(I, t);
            if (!t || !n) return;
            let r = Pn(e, t, W),
              {
                boundedLeftWidth: i,
                rightWidth: a,
                boundedLeftRatio: o,
              } = Un({ containerWidth: n, minLeftWidth: b, minRightWidth: x, leftWidth: r });
            ((J.current = a),
              (q.current = o),
              Kn({
                containerWidth: n,
                handleWidth: X,
                nextLeftWidth: i,
                rightWidth: a,
                rightTranslate: 0,
                node: t,
                rafRef: V,
              }));
          },
          t = (e) => {
            e.preventDefault();
            let t = B.current,
              n = In(I, t);
            if (!t || !n) {
              z(!1);
              return;
            }
            let r = Pn(e, t, W),
              {
                boundedLeftWidth: i,
                rightWidth: a,
                boundedLeftRatio: o,
              } = Un({ containerWidth: n, minLeftWidth: b, minRightWidth: x, leftWidth: r });
            ((J.current = a),
              (q.current = o),
              Kn({
                containerWidth: n,
                handleWidth: X,
                nextLeftWidth: i,
                rightWidth: a,
                rightTranslate: 0,
                node: t,
                rafRef: V,
                opts: { immediate: !0 },
              }),
              T && E && Gn(j, oe, o),
              (W.current = null),
              z(!1));
          },
          n = () => {
            ((W.current = null), z(!1));
          };
        return (
          window.addEventListener(`pointermove`, e),
          window.addEventListener(`pointerup`, t),
          window.addEventListener(`pointercancel`, t),
          window.addEventListener(`blur`, n),
          () => {
            (window.removeEventListener(`pointermove`, e),
              window.removeEventListener(`pointerup`, t),
              window.removeEventListener(`pointercancel`, t),
              window.removeEventListener(`blur`, n),
              (W.current = null));
          }
        );
      }),
      (t[65] = I),
      (t[66] = X),
      (t[67] = T),
      (t[68] = R),
      (t[69] = E),
      (t[70] = q),
      (t[71] = b),
      (t[72] = x),
      (t[73] = z),
      (t[74] = j),
      (t[75] = xe))
    : (xe = t[75]);
  let Se;
  (t[76] !== I ||
  t[77] !== X ||
  t[78] !== T ||
  t[79] !== R ||
  t[80] !== E ||
  t[81] !== b ||
  t[82] !== x ||
  t[83] !== j
    ? ((Se = [I, X, T, R, E, b, x, j]),
      (t[76] = I),
      (t[77] = X),
      (t[78] = T),
      (t[79] = R),
      (t[80] = E),
      (t[81] = b),
      (t[82] = x),
      (t[83] = j),
      (t[84] = Se))
    : (Se = t[84]),
    (0, Z.useEffect)(xe, Se));
  let Ce;
  t[85] !== I ||
  t[86] !== m ||
  t[87] !== w ||
  t[88] !== X ||
  t[89] !== O ||
  t[90] !== Y ||
  t[91] !== T ||
  t[92] !== E ||
  t[93] !== q ||
  t[94] !== b ||
  t[95] !== x ||
  t[96] !== v ||
  t[97] !== y
    ? ((Ce = (e) => {
        if (e === `left`) {
          if (!T) return;
          (Nn([ae, G, K], H), v?.(!1));
          let e = B.current,
            t = In(I, e);
          if (!e || !t) return;
          let n = Fn(t);
          ((J.current = n),
            Kn({
              containerWidth: t,
              handleWidth: X,
              nextLeftWidth: 0,
              rightWidth: n,
              rightTranslate: 0,
              node: e,
              rafRef: V,
              opts: { immediate: !0 },
            }));
          return;
        }
        if (!E || !O) return;
        (Nn([ae, G, K], H), y?.(!1));
        let t = B.current,
          n = In(I, t);
        if (!t || !n) return;
        if (Y) {
          Wn({
            containerWidth: n,
            drawerMaxWidth: m,
            drawerVisibleInset: w,
            minRightWidth: x,
            isOpen: !1,
            node: t,
            rafRef: V,
          });
          return;
        }
        let r = Fn(n),
          i = r * Ln(q.current),
          { rightWidth: a, boundedLeftRatio: o } = Un({
            containerWidth: n,
            minLeftWidth: b,
            minRightWidth: x,
            leftWidth: i,
          });
        q.current = o;
        let s = Hn(J.current > 0 ? J.current : a, r);
        ((J.current = s),
          Kn({
            containerWidth: n,
            handleWidth: 0,
            nextLeftWidth: n,
            rightWidth: s,
            rightTranslate: s,
            node: t,
            rafRef: V,
            opts: { immediate: !0 },
          }));
      }),
      (t[85] = I),
      (t[86] = m),
      (t[87] = w),
      (t[88] = X),
      (t[89] = O),
      (t[90] = Y),
      (t[91] = T),
      (t[92] = E),
      (t[93] = q),
      (t[94] = b),
      (t[95] = x),
      (t[96] = v),
      (t[97] = y),
      (t[98] = Ce))
    : (Ce = t[98]);
  let we = Ce,
    Te;
  t[99] !== I ||
  t[100] !== m ||
  t[101] !== w ||
  t[102] !== X ||
  t[103] !== O ||
  t[104] !== Y ||
  t[105] !== T ||
  t[106] !== E ||
  t[107] !== q ||
  t[108] !== b ||
  t[109] !== x ||
  t[110] !== v ||
  t[111] !== y ||
  t[112] !== j
    ? ((Te = (e) => {
        let t = B.current,
          n = In(I, t);
        if (!t || !n) return;
        if (e === `left`) {
          if (T) return;
          (Nn([ae, G, K], H), v?.(!0));
          let e = Fn(n) * Ln(q.current),
            {
              boundedLeftWidth: r,
              rightWidth: i,
              boundedLeftRatio: a,
            } = Un({ containerWidth: n, minLeftWidth: b, minRightWidth: x, leftWidth: e });
          ((q.current = a),
            E && Gn(j, oe, a),
            (J.current = i),
            Kn({
              containerWidth: n,
              handleWidth: X,
              nextLeftWidth: r,
              rightWidth: i,
              rightTranslate: 0,
              node: t,
              rafRef: V,
              opts: { immediate: !0 },
            }));
          return;
        }
        if (E || !O) return;
        if ((Nn([ae, G, K], H), y?.(!0), Y)) {
          Wn({
            containerWidth: n,
            drawerMaxWidth: m,
            drawerVisibleInset: w,
            minRightWidth: x,
            isOpen: !0,
            node: t,
            rafRef: V,
          });
          return;
        }
        let r = Fn(n) * Ln(q.current),
          {
            boundedLeftWidth: i,
            rightWidth: a,
            boundedLeftRatio: o,
          } = Un({ containerWidth: n, minLeftWidth: b, minRightWidth: x, leftWidth: r });
        ((q.current = o),
          T && Gn(j, oe, o),
          (J.current = a),
          Kn({
            containerWidth: n,
            handleWidth: X,
            nextLeftWidth: i,
            rightWidth: a,
            rightTranslate: 0,
            node: t,
            rafRef: V,
            opts: { immediate: !0 },
          }));
      }),
      (t[99] = I),
      (t[100] = m),
      (t[101] = w),
      (t[102] = X),
      (t[103] = O),
      (t[104] = Y),
      (t[105] = T),
      (t[106] = E),
      (t[107] = q),
      (t[108] = b),
      (t[109] = x),
      (t[110] = v),
      (t[111] = y),
      (t[112] = j),
      (t[113] = Te))
    : (Te = t[113]);
  let Ee = Te,
    De;
  t[114] !== we || t[115] !== Ee || t[116] !== T || t[117] !== E
    ? ((De = (e) => {
        if (e === `left`) {
          if (T) {
            we(`left`);
            return;
          }
          Ee(`left`);
          return;
        }
        if (E) {
          we(`right`);
          return;
        }
        Ee(`right`);
      }),
      (t[114] = we),
      (t[115] = Ee),
      (t[116] = T),
      (t[117] = E),
      (t[118] = De))
    : (De = t[118]);
  let Oe = De,
    ke;
  t[119] !== we || t[120] !== A || t[121] !== k || t[122] !== Ee || t[123] !== R || t[124] !== Oe
    ? ((ke = {
        isLeftOpen: A,
        isRightOpen: k,
        isResizing: R,
        collapse: we,
        expand: Ee,
        toggle: Oe,
      }),
      (t[119] = we),
      (t[120] = A),
      (t[121] = k),
      (t[122] = Ee),
      (t[123] = R),
      (t[124] = Oe),
      (t[125] = ke))
    : (ke = t[125]);
  let Ae = ke,
    je = O && !Y && A && k,
    Me = `min(calc(100% - ${S}px), max(0px, ${A && k ? `calc(var(--split-left-width, 100%) - (${S}px / 2))` : `calc(100% - (${S}px / 2))`}))`,
    Ne = R && `cursor-col-resize`,
    Pe;
  t[126] !== a || t[127] !== Ne
    ? ((Pe = U(`group/split-view relative h-full w-full min-w-0 overflow-hidden`, Ne, a)),
      (t[126] = a),
      (t[127] = Ne),
      (t[128] = Pe))
    : (Pe = t[128]);
  let Fe = `${n}-left`,
    Ie = !A && `pointer-events-none`,
    Le;
  t[129] !== o || t[130] !== Ie
    ? ((Le = U(
        `absolute inset-y-0 left-0 min-w-0 overflow-hidden [will-change:width]`,
        Ie,
        `duration-relaxed ease-basic`,
        o,
      )),
      (t[129] = o),
      (t[130] = Ie),
      (t[131] = Le))
    : (Le = t[131]);
  let Re = R ? `none` : `width`,
    ze;
  t[132] === Re
    ? (ze = t[133])
    : ((ze = { width: `var(--split-left-width, 100%)`, contain: `strict`, transitionProperty: Re }),
      (t[132] = Re),
      (t[133] = ze));
  let Be = A ? `visible` : `hidden`,
    Ve = `${n}-left`,
    He;
  t[134] !== r || t[135] !== Be || t[136] !== Ve
    ? ((He = (0, Jn.jsx)(`div`, {
        className: `h-full min-w-0`,
        children: (0, Jn.jsx)(Z.Activity, { mode: Be, name: Ve, children: r }),
      })),
      (t[134] = r),
      (t[135] = Be),
      (t[136] = Ve),
      (t[137] = He))
    : (He = t[137]);
  let Ue;
  t[138] !== Fe || t[139] !== Le || t[140] !== ze || t[141] !== He
    ? ((Ue = (0, Jn.jsx)(`div`, { ref: ae, id: Fe, className: Le, style: ze, children: He })),
      (t[138] = Fe),
      (t[139] = Le),
      (t[140] = ze),
      (t[141] = He),
      (t[142] = Ue))
    : (Ue = t[142]);
  let We;
  t[143] !== I ||
  t[144] !== A ||
  t[145] !== c ||
  t[146] !== be ||
  t[147] !== Me ||
  t[148] !== ve ||
  t[149] !== S ||
  t[150] !== O ||
  t[151] !== n ||
  t[152] !== F ||
  t[153] !== D ||
  t[154] !== Y ||
  t[155] !== je ||
  t[156] !== R ||
  t[157] !== b ||
  t[158] !== x
    ? ((We =
        O && !Y && A
          ? (0, Jn.jsx)(`div`, {
              ref: G,
              role: `separator`,
              "aria-controls": `${n}-left`,
              "aria-hidden": !je,
              "aria-label": D.formatMessage({
                id: `splitView.resize`,
                defaultMessage: `Resize panels`,
                description: `Accessible name for the split-view resize handle`,
              }),
              "aria-orientation": `vertical`,
              "aria-valuemax": Bn(I, b, x),
              "aria-valuemin": Math.min(b, I),
              "aria-valuenow": Vn(I * F, I, b, x),
              className: U(
                `group absolute inset-y-0 z-20 select-none touch-none`,
                `cursor-col-resize duration-relaxed ease-basic [will-change:left]`,
                `focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,
                je ? `opacity-100` : `opacity-0 pointer-events-none`,
                c,
              ),
              style: {
                width: `${S}px`,
                left: Me,
                transitionProperty: R ? `none` : `left, opacity`,
              },
              onKeyDown: be,
              onPointerDown: ve,
              tabIndex: je ? 0 : -1,
              children: (0, Jn.jsx)(`div`, {
                className: U(
                  `pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border transition-colors duration-relaxed ease-basic`,
                  R
                    ? `bg-text/25`
                    : `group-hover:bg-text/25 group-active:bg-text/25 group-focus-visible:bg-text/25`,
                ),
              }),
            })
          : null),
      (t[143] = I),
      (t[144] = A),
      (t[145] = c),
      (t[146] = be),
      (t[147] = Me),
      (t[148] = ve),
      (t[149] = S),
      (t[150] = O),
      (t[151] = n),
      (t[152] = F),
      (t[153] = D),
      (t[154] = Y),
      (t[155] = je),
      (t[156] = R),
      (t[157] = b),
      (t[158] = x),
      (t[159] = We))
    : (We = t[159]);
  let Ge = Y
      ? `z-30 shadow-[-16px_0_32px_rgba(0,0,0,0.28)] electron:bg-surface electron:elevation-prominent windows:rounded-tl-lg`
      : `z-10`,
    Ke = k ? `opacity-100` : `opacity-0`,
    qe = !k && `pointer-events-none`,
    Je;
  t[160] !== s || t[161] !== Ge || t[162] !== Ke || t[163] !== qe
    ? ((Je = U(
        `absolute inset-y-0 min-w-0 overflow-hidden [will-change:transform]`,
        Ge,
        Ke,
        qe,
        `duration-relaxed ease-basic`,
        s,
      )),
      (t[160] = s),
      (t[161] = Ge),
      (t[162] = Ke),
      (t[163] = qe),
      (t[164] = Je))
    : (Je = t[164]);
  let Ye = R ? `none` : `width, transform, opacity`,
    Xe;
  t[165] === Ye
    ? (Xe = t[166])
    : ((Xe = {
        width: `var(--split-right-width, 0px)`,
        minWidth: 0,
        maxWidth: `var(--split-right-width, 0px)`,
        right: 0,
        transform: `translateX(var(--split-right-translate, 0px))`,
        contain: `strict`,
        transitionProperty: Ye,
      }),
      (t[165] = Ye),
      (t[166] = Xe));
  let Ze;
  t[167] !== k || t[168] !== O || t[169] !== n || t[170] !== i
    ? ((Ze = O
        ? (0, Jn.jsx)(`div`, {
            className: `h-full min-w-0`,
            children: (0, Jn.jsx)(Z.Activity, {
              mode: k ? `visible` : `hidden`,
              name: `${n}-right`,
              children: (0, Jn.jsx)(`div`, {
                className: U(
                  `h-full w-full min-w-0 transition-opacity duration-relaxed ease-basic`,
                  k ? `opacity-100` : `opacity-0`,
                ),
                style: { transitionDelay: k ? `${er}ms` : `0ms` },
                children: i,
              }),
            }),
          })
        : null),
      (t[167] = k),
      (t[168] = O),
      (t[169] = n),
      (t[170] = i),
      (t[171] = Ze))
    : (Ze = t[171]);
  let Qe;
  t[172] !== Je || t[173] !== Xe || t[174] !== Ze
    ? ((Qe = (0, Jn.jsx)(`div`, { ref: K, className: Je, style: Xe, children: Ze })),
      (t[172] = Je),
      (t[173] = Xe),
      (t[174] = Ze),
      (t[175] = Qe))
    : (Qe = t[175]);
  let $e;
  t[176] !== Pe || t[177] !== Ue || t[178] !== We || t[179] !== Qe
    ? (($e = (0, Jn.jsxs)(`div`, { ref: B, className: Pe, children: [Ue, We, Qe] })),
      (t[176] = Pe),
      (t[177] = Ue),
      (t[178] = We),
      (t[179] = Qe),
      (t[180] = $e))
    : ($e = t[180]);
  let et;
  return (
    t[181] !== Ae || t[182] !== $e
      ? ((et = (0, Jn.jsx)(nr.Provider, { value: Ae, children: $e })),
        (t[181] = Ae),
        (t[182] = $e),
        (t[183] = et))
      : (et = t[183]),
    et
  );
}
function jn() {
  let e = (0, qn.c)(2),
    [t, n] = (0, Z.useState)(tr.version),
    r,
    i;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = () => {}), (i = []), (e[0] = r), (e[1] = i))
      : ((r = e[0]), (i = e[1])),
    (0, Z.useEffect)(r, i),
    t
  );
}
function Mn(e, t) {
  for (let t of e) t.current?.style.setProperty(`transition`, `none`);
  (t.current != null && cancelAnimationFrame(t.current),
    (t.current = requestAnimationFrame(() => {
      t.current = requestAnimationFrame(() => {
        for (let t of e) t.current?.style.removeProperty(`transition`);
        t.current = null;
      });
    })));
}
function Nn(e, t) {
  t.current != null && (cancelAnimationFrame(t.current), (t.current = null));
  for (let t of e) t.current?.style.removeProperty(`transition`);
}
function Pn(e, t, n) {
  let r = n.current;
  return (r ?? ((r = t.getBoundingClientRect().left), (n.current = r)), e.clientX - r);
}
function Fn(e) {
  return Math.max(0, e);
}
function In(e, t) {
  return e || (t?.getBoundingClientRect().width ?? 0);
}
function Ln(e) {
  return Math.min(Math.max(e, 0), 1);
}
function Rn(e) {
  return e == null ? Zn : Ln(e / 100);
}
function zn(e, t) {
  return e === 0 ? 0 : Ln(t / e);
}
function Bn(e, t, n) {
  let r = Fn(e),
    i = r - n;
  return i <= t ? Math.max(0, r) : Math.max(t, i);
}
function Vn(e, t, n, r) {
  let i = Fn(t);
  if (i === 0) return 0;
  let a = Math.min(n, i),
    o = Bn(t, n, r);
  return o <= a ? Math.max(0, i) : Math.min(Math.max(e, a), o);
}
function Hn(e, t) {
  return Math.min(Math.max(e, 0), t);
}
function Un({ containerWidth: e, minLeftWidth: t, minRightWidth: n, leftWidth: r }) {
  let i = Fn(e),
    a = Vn(r, e, t, n),
    o = Hn(Math.max(0, i - a), i);
  return { openAvailableWidth: i, boundedLeftWidth: a, boundedLeftRatio: zn(i, a), rightWidth: o };
}
function Wn({
  containerWidth: e,
  drawerMaxWidth: t,
  drawerVisibleInset: n,
  minRightWidth: r,
  isOpen: i,
  node: a,
  rafRef: o,
}) {
  let s = Dn({ containerWidth: e, maxWidth: t, minWidth: r, visibleInset: n });
  Kn({
    containerWidth: e,
    handleWidth: 0,
    nextLeftWidth: e,
    rightWidth: s,
    rightTranslate: i ? 0 : s,
    node: a,
    rafRef: o,
    opts: { immediate: !0 },
  });
}
function Gn(e, t, r) {
  t.current !== r && (n(e, r), (t.current = r));
}
function Kn({
  containerWidth: e,
  handleWidth: t,
  nextLeftWidth: n,
  rightWidth: r,
  rightTranslate: i,
  node: a,
  rafRef: o,
  opts: s,
}) {
  let c = Fn(e),
    l = Math.min(Math.max(n, 0), c),
    u = Math.max(0, c - l),
    d = Hn(r ?? u, c),
    f = Hn(i ?? 0, d),
    p = () => {
      (a.style.setProperty(`--split-left-width`, `${l}px`),
        a.style.setProperty(`--split-handle-width`, `${t}px`),
        a.style.setProperty(`--split-right-width`, `${d}px`),
        a.style.setProperty(`--split-right-translate`, `${f}px`),
        a.querySelector(`:scope > [role="separator"]`)?.setAttribute(`aria-valuenow`, String(l)));
    };
  if ((o.current != null && (cancelAnimationFrame(o.current), (o.current = null)), s?.immediate)) {
    p();
    return;
  }
  o.current = requestAnimationFrame(p);
}
var qn,
  Z,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr = e(() => {
    ((qn = je()),
      tt(),
      (Z = t(o(), 1)),
      W(),
      oe(),
      kn(),
      (Jn = Ee()),
      (Yn = 12),
      (Xn = 160),
      (Zn = 0.5),
      (Qn = 10),
      ($n = 720),
      (er = 150),
      (tr = { version: 0, listeners: new Set() }),
      (nr = (0, Z.createContext)(null)));
  });
function ir(e) {
  let t = (0, or.c)(41),
    n,
    r,
    i,
    a,
    o,
    s;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]))
    : (({
        ref: a,
        bottomInset: n,
        children: r,
        disableScrollAnchoring: s,
        isFileTreeOpen: i,
        ...o
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s));
  let c = s !== void 0 && s,
    l = z(K.codeFontSize),
    [u] = (0, sr.useState)(ar);
  Ze();
  let d;
  t[7] === l ? (d = t[8]) : ((d = nn(l)), (t[7] = l), (t[8] = d));
  let f = d,
    [m, h] = (0, sr.useState)(null),
    g;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (e) => {
        if (e == null) return;
        let t = tn(e);
        h((e) => (e != null && rn(e, t) ? e : t));
      }),
      (t[9] = g))
    : (g = t[9]);
  let _ = g,
    v;
  (t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (e, t) => {
        _(t);
      }),
      (t[10] = v))
    : (v = t[10]),
    Me(v));
  let y;
  t[11] === u
    ? (y = t[12])
    : ((y = (e) => {
        if (e != null) {
          u.setup(e);
          return;
        }
        u.cleanUp();
      }),
      (t[11] = u),
      (t[12] = y));
  let b = y,
    x;
  t[13] !== a || t[14] !== b ? ((x = p(a, b)), (t[13] = a), (t[14] = b), (t[15] = x)) : (x = t[15]);
  let S = x,
    C;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, cr.jsx)(`span`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute h-0 w-0 overflow-hidden`,
        dangerouslySetInnerHTML: { __html: lr },
      })),
      (t[16] = C))
    : (C = t[16]);
  let w = n !== `composer` && (n === `actions` ? `pb-16` : `pb-3`),
    T = c && `[overflow-anchor:none]`,
    E;
  t[17] !== w || t[18] !== T
    ? ((E = U(
        `electron:bg-surface flex h-full min-w-0 flex-1 flex-col overflow-x-hidden overflow-y-auto`,
        w,
        T,
      )),
      (t[17] = w),
      (t[18] = T),
      (t[19] = E))
    : (E = t[19]);
  let D;
  t[20] === n
    ? (D = t[21])
    : ((D = n === `composer` ? { paddingBottom: ot } : void 0), (t[20] = n), (t[21] = D));
  let ee = i ? `extension:pe-1` : `extension:pe-3`,
    O;
  t[22] === ee
    ? (O = t[23])
    : ((O = U(`flex w-full flex-col extension:ps-4`, ee)), (t[22] = ee), (t[23] = O));
  let k = m ?? f,
    A;
  t[24] !== r || t[25] !== k ? ((A = r(k)), (t[24] = r), (t[25] = k), (t[26] = A)) : (A = t[26]);
  let j;
  t[27] === A
    ? (j = t[28])
    : ((j = (0, cr.jsx)(`div`, { className: `flex flex-col extension:gap-2`, children: A })),
      (t[27] = A),
      (t[28] = j));
  let M;
  t[29] !== O || t[30] !== j
    ? ((M = (0, cr.jsxs)(`div`, { className: O, children: [null, j] })),
      (t[29] = O),
      (t[30] = j),
      (t[31] = M))
    : (M = t[31]);
  let N;
  t[32] !== S || t[33] !== o || t[34] !== E || t[35] !== D || t[36] !== M
    ? ((N = (0, cr.jsxs)(`div`, {
        className: `relative flex h-full min-w-0 flex-1`,
        children: [C, (0, cr.jsx)(`div`, { ...o, ref: S, className: E, style: D, children: M })],
      })),
      (t[32] = S),
      (t[33] = o),
      (t[34] = E),
      (t[35] = D),
      (t[36] = M),
      (t[37] = N))
    : (N = t[37]);
  let P;
  return (
    t[38] !== N || t[39] !== u
      ? ((P = (0, cr.jsx)(dt.Provider, { value: u, children: N })),
        (t[38] = N),
        (t[39] = u),
        (t[40] = P))
      : (P = t[40]),
    P
  );
}
function ar() {
  return new Ae({ intersectionObserverMargin: 1e3 });
}
var or,
  sr,
  cr,
  lr,
  ur = e(() => {
    ((or = je()),
      Ce(),
      lt(),
      Ie(),
      tt(),
      s(),
      (sr = t(o(), 1)),
      de(),
      Ue(),
      ze(),
      ut(),
      m(),
      en(),
      (cr = Ee()),
      (lr = Te(`complete`)));
  }),
  dr,
  fr,
  pr = e(() => {
    (o(),
      (dr = Ee()),
      (fr = (e) =>
        (0, dr.jsx)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, dr.jsx)(`path`, {
            d: `M11.8352 4.58331C11.8352 3.56995 11.0136 2.74848 10.0002 2.74835C8.9868 2.74835 8.16528 3.56987 8.16528 4.58331C8.16528 4.67625 8.24033 4.75123 8.33325 4.75128H11.6663C11.7592 4.75128 11.8352 4.67628 11.8352 4.58331ZM16.7063 13.0833C16.7063 13.7724 16.707 14.3294 16.6702 14.7796C16.6374 15.1802 16.5731 15.541 16.429 15.8773L16.3616 16.0198C16.096 16.541 15.6924 16.9775 15.1965 17.2816L14.9788 17.4036C14.602 17.5956 14.1956 17.6748 13.7376 17.7122C13.2874 17.749 12.7302 17.7484 12.0413 17.7484H7.95825C7.26916 17.7484 6.71221 17.749 6.26196 17.7122C5.86132 17.6795 5.5006 17.6143 5.16431 17.47L5.02173 17.4036C4.50069 17.1381 4.06411 16.7343 3.76001 16.2386L3.63794 16.0198C3.44614 15.6432 3.36676 15.2374 3.32935 14.7796C3.29256 14.3294 3.29321 13.7724 3.29321 13.0833V7.4339C3.29321 6.89108 3.2926 6.45196 3.31568 6.09503C3.33912 5.73276 3.38938 5.40917 3.51001 5.09991C3.83166 4.27546 4.48341 3.62273 5.30786 3.30109L5.54321 3.22394C5.78184 3.15798 6.03209 3.12531 6.30396 3.10773C6.56114 3.0911 6.86075 3.08745 7.21118 3.08624C7.74527 2.0934 8.79389 1.41827 10.0002 1.41827C11.2064 1.41836 12.2542 2.09359 12.7883 3.08624C13.139 3.08744 13.4392 3.09109 13.6965 3.10773C14.0587 3.13116 14.3825 3.18053 14.6917 3.30109L14.844 3.36554C15.5964 3.7052 16.1889 4.32679 16.4905 5.09991L16.5686 5.33527C16.6344 5.5736 16.6663 5.82355 16.6838 6.09503C16.7069 6.45195 16.7063 6.89108 16.7063 7.4339V13.0833ZM13.1653 4.58331C13.1653 5.41082 12.4938 6.08136 11.6663 6.08136H8.33325C7.50579 6.08131 6.83521 5.41079 6.83521 4.58331C6.83521 4.52829 6.83634 4.47359 6.83911 4.41925C6.66887 4.42205 6.52147 4.42638 6.38989 4.43488C6.16579 4.44937 6.01318 4.47293 5.89673 4.50519L5.79126 4.54034C5.31326 4.72683 4.93477 5.10531 4.74829 5.58331C4.69813 5.71204 4.66211 5.88293 4.64282 6.18097C4.62316 6.48503 4.62329 6.87387 4.62329 7.4339V13.0833C4.62329 13.7944 4.62418 14.2877 4.65552 14.6712C4.68622 15.0469 4.74298 15.2583 4.82349 15.4163L4.8938 15.5423C5.07011 15.8299 5.32299 16.0641 5.62525 16.2181L5.75513 16.2747C5.89888 16.3262 6.08851 16.363 6.37036 16.386C6.75388 16.4174 7.24721 16.4183 7.95825 16.4183H12.0413C12.7521 16.4183 13.2457 16.4174 13.6292 16.386C14.0047 16.3554 14.2163 16.2985 14.3743 16.2181L14.5012 16.1478C14.7887 15.9715 15.0231 15.7185 15.177 15.4163L15.2327 15.2864C15.2841 15.1427 15.3219 14.9532 15.345 14.6712C15.3763 14.2877 15.3762 13.7944 15.3762 13.0833V7.4339C15.3762 6.87387 15.3764 6.48503 15.3567 6.18097C15.3422 5.95722 15.3186 5.80513 15.2864 5.68878L15.2512 5.58331C15.0881 5.16509 14.7781 4.8233 14.3831 4.61945L14.2083 4.54034C14.0795 4.49017 13.9087 4.45416 13.6106 4.43488C13.4788 4.42636 13.331 4.42205 13.1604 4.41925C13.1632 4.47359 13.1653 4.52828 13.1653 4.58331Z`,
          }),
        })));
  }),
  mr,
  hr,
  gr = e(() => {
    (o(),
      (mr = Ee()),
      (hr = (e) =>
        (0, mr.jsxs)(`svg`, {
          width: 24,
          height: 24,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, mr.jsx)(`path`, {
              d: `M12.8 8L19.8 8`,
              stroke: `currentColor`,
              strokeWidth: 2,
              strokeLinecap: `round`,
            }),
            (0, mr.jsx)(`path`, {
              d: `M12.8 12L19.8 12.002`,
              stroke: `currentColor`,
              strokeWidth: 2,
              strokeLinecap: `round`,
            }),
            (0, mr.jsx)(`path`, {
              d: `M12.8 16L16.8 16`,
              stroke: `currentColor`,
              strokeWidth: 2,
              strokeLinecap: `round`,
            }),
            (0, mr.jsx)(`path`, {
              d: `M6.24013 6V18`,
              stroke: `currentColor`,
              strokeWidth: 1.8,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
            (0, mr.jsx)(`path`, {
              d: `M3.74022 7.50012L6.24022 5.00012L8.74022 7.50012`,
              stroke: `currentColor`,
              strokeWidth: 2,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
            (0, mr.jsx)(`path`, {
              d: `M8.74022 16.5L6.24022 19L3.74022 16.5`,
              stroke: `currentColor`,
              strokeWidth: 2,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
          ],
        })));
  }),
  _r,
  vr,
  yr = e(() => {
    (o(),
      (_r = Ee()),
      (vr = (e) =>
        (0, _r.jsx)(`svg`, {
          xmlns: `http://www.w3.org/2000/svg`,
          width: 20,
          height: 20,
          fill: `currentColor`,
          viewBox: `0 0 20 20`,
          ...e,
          children: (0, _r.jsx)(`path`, {
            fill: `currentColor`,
            d: `M14.375 9.502a3.165 3.165 0 0 1 0 6.33h-2.77l.949.948a.666.666 0 0 1-.942.94L9.53 15.639a.667.667 0 0 1 0-.942l2.083-2.083a.666.666 0 0 1 .942.94l-.949.949h2.77a1.836 1.836 0 0 0 0-3.67H3.333a.666.666 0 0 1 0-1.33h11.042Zm-7.709 5a.665.665 0 1 1 0 1.33H3.333a.666.666 0 0 1 0-1.33h3.333Zm10-10a.665.665 0 1 1 0 1.33H3.333a.666.666 0 0 1 0-1.33h13.333Z`,
          }),
        })));
  }),
  br,
  xr = e(() => {
    (he(),
      (br = Ye({
        name: `document-badge-magnifyingglass-light-16`,
        canvas: {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 2.337891, y: 1.808105, width: 12.189941, height: 13.406738 },
          visualBounds: { x: 2.337891, y: 1.808105, width: 12.189941, height: 13.406738 },
        },
        paint: { kind: `monochrome` },
        optical: {
          shape: `non-circular`,
          bounds: { x: 2.337891, y: 1.808105, width: 12.189941, height: 13.406738 },
          center: { x: 8.432862, y: 8.511474 },
          insets: { top: 1.808105, right: 1.472168, bottom: 0.785157, left: 2.337891 },
          anchors: {
            frame: { x: 8, y: 8 },
            ink: { x: 8.432862, y: 8.511474 },
            foreground: { x: 8.432862, y: 8.511474 },
          },
        },
        capabilities: [`icon`],
        body: `<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8711 8.80615C12.3848 8.80615 13.6123 10.0336 13.6123 11.5474C13.6123 12.1172 13.4374 12.646 13.1396 13.0845L14.374 14.3179C14.579 14.5228 14.5789 14.856 14.374 15.061C14.169 15.266 13.8359 15.266 13.6309 15.061L12.3945 13.8237C11.9586 14.1161 11.4353 14.2886 10.8711 14.2886C9.35746 14.2886 8.13001 13.061 8.12988 11.5474C8.12989 10.0337 9.35738 8.80616 10.8711 8.80615ZM10.8711 9.85693C9.93728 9.85694 9.18067 10.6136 9.18066 11.5474C9.1808 12.4811 9.93736 13.2378 10.8711 13.2378C11.8048 13.2378 12.5614 12.4811 12.5615 11.5474C12.5615 10.6135 11.8049 9.85693 10.8711 9.85693Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.36816 1.80811C10.0378 1.80811 10.6798 2.07482 11.1533 2.54834L12.6484 4.04346C13.122 4.51699 13.3887 5.15895 13.3887 5.82861V7.16357C13.3886 7.45346 13.1532 7.68799 12.8633 7.68799C12.5734 7.68799 12.338 7.45346 12.3379 7.16357V6.85889H10.833C9.80694 6.85871 8.97479 6.02656 8.97461 5.00049V2.85889H4.86328C4.04866 2.85889 3.38867 3.51888 3.38867 4.3335V11.6665C3.38867 12.4811 4.04866 13.1421 4.86328 13.1421H6.36328C6.65312 13.1421 6.8885 13.3767 6.88867 13.6665C6.88867 13.9565 6.65323 14.1919 6.36328 14.1919H4.86328C3.46876 14.1919 2.33789 13.061 2.33789 11.6665V4.3335C2.33789 2.93898 3.46876 1.80811 4.86328 1.80811H9.36816ZM10.0254 5.00049C10.0256 5.44666 10.3868 5.80793 10.833 5.80811H12.3369C12.3316 5.42434 12.178 5.05742 11.9062 4.78564L10.4111 3.29053C10.2975 3.17693 10.1665 3.08541 10.0254 3.01514V5.00049Z" fill="currentColor"/>`,
      })));
  });
function Sr(e, t) {
  let n = t.trim();
  if (n.length === 0) return [...e].sort(Cr);
  let r = j(n);
  return e
    .map((e) => {
      let t = r(wr(e.displayPath).fileName);
      return { entry: e, score: t > 0 ? t : r(e.displayPath) };
    })
    .filter(({ score: e }) => e > 0)
    .sort((e, t) => t.score - e.score)
    .map(({ entry: e }) => e);
}
function Cr(e, t) {
  let n = wr(e.displayPath),
    r = wr(t.displayPath);
  return n.fileName.localeCompare(r.fileName) || n.parentPath.localeCompare(r.parentPath);
}
function wr(e) {
  let t = e.lastIndexOf(`/`);
  return t === -1
    ? { fileName: e, parentPath: `` }
    : { fileName: e.slice(t + 1), parentPath: e.slice(0, t) };
}
var Tr = e(() => {
  L();
});
function Er() {
  let e = (0, kr.c)(5),
    t = i(Se),
    n = h(I),
    r;
  e[0] === t ? (r = e[1]) : ((r = (e) => ge(t, e)), (e[0] = t), (e[1] = r));
  let a;
  return (
    e[2] !== n || e[3] !== r
      ? ((a = (0, jr.jsx)(Dr, { entries: n, onSelectPath: r })), (e[2] = n), (e[3] = r), (e[4] = a))
      : (a = e[4]),
    a
  );
}
function Dr(e) {
  let t = (0, kr.c)(46),
    { entries: n, onSelectPath: r } = e,
    i = te(),
    [a, o] = (0, Ar.useState)(``),
    [s, c] = (0, Ar.useState)(!1),
    l,
    u,
    d,
    p,
    m,
    h,
    g,
    _,
    v,
    y,
    b,
    x;
  if (t[0] !== n || t[1] !== i || t[2] !== r || t[3] !== s || t[4] !== a) {
    let e = Sr(n, a),
      S;
    t[17] === i
      ? (S = t[18])
      : ((S = i.formatMessage({
          id: `codex.review.jumpToFile`,
          defaultMessage: `Jump to file`,
          description: `Button label for opening diff file jump search`,
        })),
        (t[17] = i),
        (t[18] = S));
    let w = S;
    ((d = it),
      (g = s),
      t[19] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((_ = (e) => {
            (e && o(``), c(e));
          }),
          (t[19] = _))
        : (_ = t[19]),
      (v = `end`),
      (y = `panelWide`),
      (b = `list`));
    let T;
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((T = (0, jr.jsx)(we, {
          className: `text-codex-description`,
          "aria-hidden": !1,
          asset: br,
        })),
        (t[20] = T))
      : (T = t[20]);
    let E;
    (t[21] === w
      ? (E = t[22])
      : ((E = (0, jr.jsx)(ke, {
          "aria-label": w,
          color: `ghost`,
          size: `toolbar`,
          uniform: !0,
          children: T,
        })),
        (t[21] = w),
        (t[22] = E)),
      t[23] !== w || t[24] !== E
        ? ((x = (0, jr.jsx)(ee, { tooltipContent: w, delayOpen: !0, children: E })),
          (t[23] = w),
          (t[24] = E),
          (t[25] = x))
        : (x = t[25]),
      (u = ct.Root),
      (m = w),
      t[26] !== w || t[27] !== a
        ? ((h = (0, jr.jsx)(ct.Input, { placeholder: w, value: a, onValueChange: o })),
          (t[26] = w),
          (t[27] = a),
          (t[28] = h))
        : (h = t[28]),
      (l = ct.List),
      (p =
        e.length === 0
          ? (0, jr.jsx)(C.Message, {
              compact: !0,
              children: (0, jr.jsx)(f, {
                id: `codex.review.jumpToFile.empty`,
                defaultMessage: `No matching files`,
                description: `Empty state for review file jump search`,
              }),
            })
          : e.map((e) =>
              (0, jr.jsx)(
                ct.Item,
                {
                  value: encodeURIComponent(e.path),
                  onSelect: () => {
                    (r(e.path), c(!1));
                  },
                  children: (0, jr.jsx)(Or, { displayPath: e.displayPath }),
                },
                e.path,
              ),
            )),
      (t[0] = n),
      (t[1] = i),
      (t[2] = r),
      (t[3] = s),
      (t[4] = a),
      (t[5] = l),
      (t[6] = u),
      (t[7] = d),
      (t[8] = p),
      (t[9] = m),
      (t[10] = h),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y),
      (t[15] = b),
      (t[16] = x));
  } else
    ((l = t[5]),
      (u = t[6]),
      (d = t[7]),
      (p = t[8]),
      (m = t[9]),
      (h = t[10]),
      (g = t[11]),
      (_ = t[12]),
      (v = t[13]),
      (y = t[14]),
      (b = t[15]),
      (x = t[16]));
  let S;
  t[29] !== l || t[30] !== p
    ? ((S = (0, jr.jsx)(l, { children: p })), (t[29] = l), (t[30] = p), (t[31] = S))
    : (S = t[31]);
  let w;
  t[32] !== u || t[33] !== S || t[34] !== m || t[35] !== h
    ? ((w = (0, jr.jsxs)(u, { label: m, children: [h, S] })),
      (t[32] = u),
      (t[33] = S),
      (t[34] = m),
      (t[35] = h),
      (t[36] = w))
    : (w = t[36]);
  let T;
  return (
    t[37] !== d ||
    t[38] !== w ||
    t[39] !== g ||
    t[40] !== _ ||
    t[41] !== v ||
    t[42] !== y ||
    t[43] !== b ||
    t[44] !== x
      ? ((T = (0, jr.jsx)(d, {
          open: g,
          onOpenChange: _,
          align: v,
          contentWidth: y,
          contentMaxHeight: b,
          triggerButton: x,
          children: w,
        })),
        (t[37] = d),
        (t[38] = w),
        (t[39] = g),
        (t[40] = _),
        (t[41] = v),
        (t[42] = y),
        (t[43] = b),
        (t[44] = x),
        (t[45] = T))
      : (T = t[45]),
    T
  );
}
function Or(e) {
  let t = (0, kr.c)(9),
    { displayPath: n } = e,
    r;
  t[0] === n ? (r = t[1]) : ((r = wr(n)), (t[0] = n), (t[1] = r));
  let { fileName: i, parentPath: a } = r,
    o;
  t[2] === i
    ? (o = t[3])
    : ((o = (0, jr.jsx)(`span`, { className: `shrink-0 text-default`, children: i })),
      (t[2] = i),
      (t[3] = o));
  let s;
  t[4] === a
    ? (s = t[5])
    : ((s =
        a.length > 0
          ? (0, jr.jsx)(En, { className: `min-w-0 flex-1 text-codex-description`, text: a })
          : null),
      (t[4] = a),
      (t[5] = s));
  let c;
  return (
    t[6] !== o || t[7] !== s
      ? ((c = (0, jr.jsxs)(`span`, {
          className: `flex min-w-0 items-center gap-2`,
          children: [o, s],
        })),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c))
      : (c = t[8]),
    c
  );
}
var kr,
  Ar,
  jr,
  Mr = e(() => {
    ((kr = je()),
      xr(),
      F(),
      (Ar = t(o(), 1)),
      W(),
      a(),
      st(),
      Y(),
      xe(),
      Tn(),
      T(),
      Je(),
      Tr(),
      k(),
      ue(),
      (jr = Ee()));
  });
function Nr(e) {
  let t = (0, Rr.c)(59),
    {
      copyGitApplyCommandDisabled: n,
      diffControls: r,
      onClickCopyGitApplyCommand: i,
      onRefreshGitQueries: a,
      refreshGitQueriesDisabled: o,
      showCopyGitApplyCommand: s,
      showHideWhitespace: c,
      showLoadFullFiles: l,
      showRefreshGitQueries: u,
    } = e,
    d = c === void 0 || c,
    f = l === void 0 || l,
    p = te(),
    m = h(qe),
    [g, _] = (0, zr.useState)(!1),
    v;
  t[0] === p
    ? (v = t[1])
    : ((v = p.formatMessage({
        id: `codex.review.refreshGitQueries`,
        defaultMessage: `Refresh`,
        description: `Menu item to refresh git queries for the current repository`,
      })),
      (t[0] = p),
      (t[1] = v));
  let y = v,
    b;
  t[2] !== r.wrap || t[3] !== p
    ? ((b = r.wrap
        ? p.formatMessage({
            id: `codex.review.wrap.disable`,
            defaultMessage: `Disable word wrap`,
            description: `Menu item to disable word wrap in diff view`,
          })
        : p.formatMessage({
            id: `codex.review.wrap.enable`,
            defaultMessage: `Enable word wrap`,
            description: `Menu item to enable word wrap in diff view`,
          })),
      (t[2] = r.wrap),
      (t[3] = p),
      (t[4] = b))
    : (b = t[4]);
  let x = b,
    S;
  t[5] !== r.expanded || t[6] !== p
    ? ((S = r.expanded
        ? p.formatMessage({
            id: `codex.review.expandOrCollapseDiffMenu.collapse`,
            defaultMessage: `Collapse all diffs`,
            description: `Menu item to collapse all diffs in the review options menu`,
          })
        : p.formatMessage({
            id: `codex.review.expandOrCollapseDiffMenu.expand`,
            defaultMessage: `Expand all diffs`,
            description: `Menu item to expand all diffs in the review options menu`,
          })),
      (t[5] = r.expanded),
      (t[6] = p),
      (t[7] = S))
    : (S = t[7]);
  let C = S,
    w;
  t[8] === p
    ? (w = t[9])
    : ((w = p.formatMessage({
        id: `codex.review.header.moreOptions`,
        defaultMessage: `Review options`,
        description: `Aria label for review header dropdown menu button`,
      })),
      (t[8] = p),
      (t[9] = w));
  let T = w,
    D;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        _(!1);
      }),
      (t[10] = D))
    : (D = t[10]);
  let O = D,
    k;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(we, { className: `text-codex-description`, "aria-hidden": !1, asset: Be })),
      (t[11] = k))
    : (k = t[11]);
  let A;
  t[12] === T
    ? (A = t[13])
    : ((A = (0, Q.jsx)(ke, {
        "aria-label": T,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        children: k,
      })),
      (t[12] = T),
      (t[13] = A));
  let j;
  t[14] !== T || t[15] !== A
    ? ((j = (0, Q.jsx)(ee, { tooltipContent: T, delayOpen: !0, children: A })),
      (t[14] = T),
      (t[15] = A),
      (t[16] = j))
    : (j = t[16]);
  let M;
  t[17] !== n ||
  t[18] !== r.hideWhitespace ||
  t[19] !== r.loadFullFilesEnabled ||
  t[20] !== r.onToggleHideWhitespace ||
  t[21] !== r.onToggleLoadFullFiles ||
  t[22] !== r.onToggleRichPreview ||
  t[23] !== r.onToggleWordDiffs ||
  t[24] !== r.richPreviewEnabled ||
  t[25] !== r.wordDiffsEnabled ||
  t[26] !== i ||
  t[27] !== s ||
  t[28] !== d ||
  t[29] !== f
    ? ((M = (0, Q.jsx)(Lr, {
        onClose: O,
        wordDiffsEnabled: r.wordDiffsEnabled,
        showCopyGitApplyCommand: s,
        showHideWhitespace: d,
        showLoadFullFiles: f,
        copyGitApplyCommandDisabled: n,
        onClickCopyGitApplyCommand: i,
        richPreviewEnabled: r.richPreviewEnabled,
        onToggleRichPreview: r.onToggleRichPreview,
        onToggleWordDiffs: r.onToggleWordDiffs,
        hideWhitespace: r.hideWhitespace,
        onToggleHideWhitespace: r.onToggleHideWhitespace,
        loadFullFilesEnabled: r.loadFullFilesEnabled,
        onToggleLoadFullFiles: r.onToggleLoadFullFiles,
      })),
      (t[17] = n),
      (t[18] = r.hideWhitespace),
      (t[19] = r.loadFullFilesEnabled),
      (t[20] = r.onToggleHideWhitespace),
      (t[21] = r.onToggleLoadFullFiles),
      (t[22] = r.onToggleRichPreview),
      (t[23] = r.onToggleWordDiffs),
      (t[24] = r.richPreviewEnabled),
      (t[25] = r.wordDiffsEnabled),
      (t[26] = i),
      (t[27] = s),
      (t[28] = d),
      (t[29] = f),
      (t[30] = M))
    : (M = t[30]);
  let N;
  t[31] !== g || t[32] !== j || t[33] !== M
    ? ((N = (0, Q.jsx)(E, {
        open: g,
        onOpenChange: _,
        align: `end`,
        contentWidth: `menu`,
        triggerButton: j,
        children: M,
      })),
      (t[31] = g),
      (t[32] = j),
      (t[33] = M),
      (t[34] = N))
    : (N = t[34]);
  let P;
  t[35] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Q.jsx)(Er, {})), (t[35] = P))
    : (P = t[35]);
  let F;
  t[36] !== m || t[37] !== a || t[38] !== o || t[39] !== y || t[40] !== u
    ? ((F = u
        ? (0, Q.jsx)(Ir, {
            Icon: m ? Oe : _e,
            busy: m,
            label: y,
            onClick: () => a?.(),
            disabled: o || !a,
          })
        : null),
      (t[36] = m),
      (t[37] = a),
      (t[38] = o),
      (t[39] = y),
      (t[40] = u),
      (t[41] = F))
    : (F = t[41]);
  let I = r.wrap ? Qe : ae,
    L;
  t[42] !== r.onToggleWrap || t[43] !== I || t[44] !== x
    ? ((L = (0, Q.jsx)(Ir, { Icon: I, label: x, onClick: r.onToggleWrap })),
      (t[42] = r.onToggleWrap),
      (t[43] = I),
      (t[44] = x),
      (t[45] = L))
    : (L = t[45]);
  let R = r.expanded ? Sn : hr,
    z;
  t[46] !== r.onToggleExpanded || t[47] !== C || t[48] !== R
    ? ((z = (0, Q.jsx)(Ir, { Icon: R, label: C, onClick: r.onToggleExpanded })),
      (t[46] = r.onToggleExpanded),
      (t[47] = C),
      (t[48] = R),
      (t[49] = z))
    : (z = t[49]);
  let B;
  t[50] !== r.diffMode || t[51] !== r.onSelectDiffMode
    ? ((B = (0, Q.jsx)(Fr, { diffMode: r.diffMode, onSelectDiffMode: r.onSelectDiffMode })),
      (t[50] = r.diffMode),
      (t[51] = r.onSelectDiffMode),
      (t[52] = B))
    : (B = t[52]);
  let V;
  return (
    t[53] !== N || t[54] !== F || t[55] !== L || t[56] !== z || t[57] !== B
      ? ((V = (0, Q.jsxs)(`div`, {
          className: `flex items-center gap-1.5`,
          children: [N, P, F, L, z, B],
        })),
        (t[53] = N),
        (t[54] = F),
        (t[55] = L),
        (t[56] = z),
        (t[57] = B),
        (t[58] = V))
      : (V = t[58]),
    V
  );
}
function Pr(e) {
  let t = (0, Rr.c)(69),
    {
      copyGitApplyCommandDisabled: n,
      expanded: r,
      onClickCopyGitApplyCommand: a,
      onRefreshGitQueries: o,
      onToggleExpanded: s,
      refreshGitQueriesDisabled: c,
      showCopyGitApplyCommand: l,
      showHideWhitespace: u,
      showLoadFullFiles: d,
      showRefreshGitQueries: f,
    } = e,
    p = u === void 0 || u,
    m = d === void 0 || d,
    g = i(fe),
    v = te(),
    y = h(re),
    b = h(ft),
    x = h(_),
    w = h(S),
    T = h(ce),
    [D, O] = (0, zr.useState)(!1),
    k;
  t[0] === v
    ? (k = t[1])
    : ((k = v.formatMessage({
        id: `codex.review.refreshGitQueries`,
        defaultMessage: `Refresh`,
        description: `Menu item to refresh git queries for the current repository`,
      })),
      (t[0] = v),
      (t[1] = k));
  let A = k,
    j;
  t[2] !== v || t[3] !== T
    ? ((j = T
        ? v.formatMessage({
            id: `codex.review.wrap.disable`,
            defaultMessage: `Disable word wrap`,
            description: `Menu item to disable word wrap in diff view`,
          })
        : v.formatMessage({
            id: `codex.review.wrap.enable`,
            defaultMessage: `Enable word wrap`,
            description: `Menu item to enable word wrap in diff view`,
          })),
      (t[2] = v),
      (t[3] = T),
      (t[4] = j))
    : (j = t[4]);
  let M = j,
    N;
  t[5] !== r || t[6] !== v
    ? ((N = r
        ? v.formatMessage({
            id: `codex.review.expandOrCollapseDiffMenu.collapse`,
            defaultMessage: `Collapse all diffs`,
            description: `Menu item to collapse all diffs in the review options menu`,
          })
        : v.formatMessage({
            id: `codex.review.expandOrCollapseDiffMenu.expand`,
            defaultMessage: `Expand all diffs`,
            description: `Menu item to expand all diffs in the review options menu`,
          })),
      (t[5] = r),
      (t[6] = v),
      (t[7] = N))
    : (N = t[7]);
  let P = N,
    F;
  t[8] === v
    ? (F = t[9])
    : ((F = v.formatMessage({
        id: `codex.review.header.moreOptions`,
        defaultMessage: `Review options`,
        description: `Aria label for review header dropdown menu button`,
      })),
      (t[8] = v),
      (t[9] = F));
  let I = F,
    L;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = () => {
        O(!1);
      }),
      (t[10] = L))
    : (L = t[10]);
  let R = L,
    z;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Q.jsx)(we, { "aria-hidden": !1, asset: Be })), (t[11] = z))
    : (z = t[11]);
  let B;
  t[12] === I
    ? (B = t[13])
    : ((B = (0, Q.jsx)(ke, {
        "aria-label": I,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        children: z,
      })),
      (t[12] = I),
      (t[13] = B));
  let V;
  t[14] !== I || t[15] !== B
    ? ((V = (0, Q.jsx)(ee, { tooltipContent: I, delayOpen: !0, children: B })),
      (t[14] = I),
      (t[15] = B),
      (t[16] = V))
    : (V = t[16]);
  let H;
  t[17] !== o || t[18] !== c || t[19] !== A || t[20] !== f
    ? ((H = f
        ? (0, Q.jsx)(C.Item, {
            onSelect: (e) => {
              (e.preventDefault(), o?.(), R());
            },
            LeftIcon: _e,
            disabled: c || !o,
            children: A,
          })
        : null),
      (t[17] = o),
      (t[18] = c),
      (t[19] = A),
      (t[20] = f),
      (t[21] = H))
    : (H = t[21]);
  let U;
  t[22] !== g || t[23] !== T
    ? ((U = (e) => {
        (e.preventDefault(), g.set(ce, !T), R());
      }),
      (t[22] = g),
      (t[23] = T),
      (t[24] = U))
    : (U = t[24]);
  let W = T ? Qe : ae,
    ne;
  t[25] !== U || t[26] !== W || t[27] !== M
    ? ((ne = (0, Q.jsx)(C.Item, { onSelect: U, LeftIcon: W, children: M })),
      (t[25] = U),
      (t[26] = W),
      (t[27] = M),
      (t[28] = ne))
    : (ne = t[28]);
  let ie;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ie = (0, Q.jsx)(C.Separator, {})), (t[29] = ie))
    : (ie = t[29]);
  let G;
  t[30] !== x || t[31] !== g
    ? ((G = () => {
        g.set(_, !x);
      }),
      (t[30] = x),
      (t[31] = g),
      (t[32] = G))
    : (G = t[32]);
  let K;
  t[33] !== g || t[34] !== w
    ? ((K = () => {
        g.set(S, !w);
      }),
      (t[33] = g),
      (t[34] = w),
      (t[35] = K))
    : (K = t[35]);
  let q;
  t[36] !== y || t[37] !== g
    ? ((q = () => {
        g.set(re, !y);
      }),
      (t[36] = y),
      (t[37] = g),
      (t[38] = q))
    : (q = t[38]);
  let J;
  t[39] !== b || t[40] !== g
    ? ((J = () => {
        g.set(ft, !b);
      }),
      (t[39] = b),
      (t[40] = g),
      (t[41] = J))
    : (J = t[41]);
  let oe;
  t[42] !== n ||
  t[43] !== y ||
  t[44] !== b ||
  t[45] !== a ||
  t[46] !== x ||
  t[47] !== l ||
  t[48] !== p ||
  t[49] !== m ||
  t[50] !== G ||
  t[51] !== K ||
  t[52] !== q ||
  t[53] !== J ||
  t[54] !== w
    ? ((oe = (0, Q.jsx)(Lr, {
        onClose: R,
        wordDiffsEnabled: w,
        showCopyGitApplyCommand: l,
        showHideWhitespace: p,
        showLoadFullFiles: m,
        copyGitApplyCommandDisabled: n,
        onClickCopyGitApplyCommand: a,
        richPreviewEnabled: x,
        onToggleRichPreview: G,
        onToggleWordDiffs: K,
        hideWhitespace: y,
        onToggleHideWhitespace: q,
        loadFullFilesEnabled: b,
        onToggleLoadFullFiles: J,
      })),
      (t[42] = n),
      (t[43] = y),
      (t[44] = b),
      (t[45] = a),
      (t[46] = x),
      (t[47] = l),
      (t[48] = p),
      (t[49] = m),
      (t[50] = G),
      (t[51] = K),
      (t[52] = q),
      (t[53] = J),
      (t[54] = w),
      (t[55] = oe))
    : (oe = t[55]);
  let se;
  t[56] !== D || t[57] !== V || t[58] !== H || t[59] !== ne || t[60] !== oe
    ? ((se = (0, Q.jsxs)(E, {
        open: D,
        onOpenChange: O,
        align: `end`,
        contentWidth: `menu`,
        triggerButton: V,
        children: [H, ne, ie, oe],
      })),
      (t[56] = D),
      (t[57] = V),
      (t[58] = H),
      (t[59] = ne),
      (t[60] = oe),
      (t[61] = se))
    : (se = t[61]);
  let Y = r ? Sn : hr,
    X;
  t[62] !== P || t[63] !== s || t[64] !== Y
    ? ((X = (0, Q.jsx)(Ir, { Icon: Y, label: P, onClick: s })),
      (t[62] = P),
      (t[63] = s),
      (t[64] = Y),
      (t[65] = X))
    : (X = t[65]);
  let le;
  return (
    t[66] !== se || t[67] !== X
      ? ((le = (0, Q.jsxs)(Q.Fragment, { children: [se, X] })),
        (t[66] = se),
        (t[67] = X),
        (t[68] = le))
      : (le = t[68]),
    le
  );
}
function Fr(e) {
  let t = (0, Rr.c)(10),
    { diffMode: n, onSelectDiffMode: r } = e,
    i = te(),
    a;
  t[0] !== n || t[1] !== i
    ? ((a =
        n === `unified`
          ? i.formatMessage({
              id: `codex.review.switchToSplit`,
              defaultMessage: `Switch to split diff`,
              description: `Button label to switch to split diff view`,
            })
          : i.formatMessage({
              id: `codex.review.switchToUnified`,
              defaultMessage: `Switch to unified diff`,
              description: `Button label to switch to unified diff view`,
            })),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o = a,
    s = n === `unified` ? hn : vn,
    c;
  t[3] !== n || t[4] !== r
    ? ((c = () => r(n === `unified` ? `right` : `left`)), (t[3] = n), (t[4] = r), (t[5] = c))
    : (c = t[5]);
  let l;
  return (
    t[6] !== o || t[7] !== s || t[8] !== c
      ? ((l = (0, Q.jsx)(Ir, { Icon: s, label: o, onClick: c })),
        (t[6] = o),
        (t[7] = s),
        (t[8] = c),
        (t[9] = l))
      : (l = t[9]),
    l
  );
}
function Ir(e) {
  let t = (0, Rr.c)(13),
    { Icon: n, busy: r, label: i, onClick: a, disabled: o, pressed: s } = e,
    c = r !== void 0 && r,
    l = o !== void 0 && o,
    u = s !== void 0 && s,
    d = u ? `ghostActive` : `ghost`,
    f;
  t[0] === n ? (f = t[1]) : ((f = (0, Q.jsx)(n, { className: `icon-xs` })), (t[0] = n), (t[1] = f));
  let p;
  t[2] !== c || t[3] !== l || t[4] !== i || t[5] !== a || t[6] !== u || t[7] !== d || t[8] !== f
    ? ((p = (0, Q.jsx)(ke, {
        "aria-label": i,
        "aria-busy": c,
        "aria-pressed": u,
        color: d,
        size: `toolbar`,
        uniform: !0,
        onClick: a,
        disabled: l,
        children: f,
      })),
      (t[2] = c),
      (t[3] = l),
      (t[4] = i),
      (t[5] = a),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f),
      (t[9] = p))
    : (p = t[9]);
  let m;
  return (
    t[10] !== i || t[11] !== p
      ? ((m = (0, Q.jsx)(ee, { tooltipContent: i, children: p })),
        (t[10] = i),
        (t[11] = p),
        (t[12] = m))
      : (m = t[12]),
    m
  );
}
function Lr(e) {
  let t = (0, Rr.c)(50),
    {
      onClose: n,
      wordDiffsEnabled: r,
      showCopyGitApplyCommand: i,
      showHideWhitespace: a,
      showLoadFullFiles: o,
      copyGitApplyCommandDisabled: s,
      onClickCopyGitApplyCommand: c,
      richPreviewEnabled: l,
      onToggleRichPreview: u,
      onToggleWordDiffs: p,
      hideWhitespace: m,
      onToggleHideWhitespace: h,
      loadFullFilesEnabled: g,
      onToggleLoadFullFiles: _,
    } = e,
    v = a === void 0 || a,
    y = o === void 0 || o,
    b = te(),
    x;
  t[0] !== b || t[1] !== l
    ? ((x = l
        ? b.formatMessage({
            id: `codex.diffView.richPreviewDisable`,
            defaultMessage: `Disable rich preview`,
            description: `Aria label for disabling rich previews in the diff view`,
          })
        : b.formatMessage({
            id: `codex.diffView.richPreviewEnable`,
            defaultMessage: `Enable rich preview`,
            description: `Aria label for enabling rich previews in the diff view`,
          })),
      (t[0] = b),
      (t[1] = l),
      (t[2] = x))
    : (x = t[2]);
  let S = x,
    w;
  t[3] !== n || t[4] !== u
    ? ((w = (e) => {
        (e.preventDefault(), u(), n());
      }),
      (t[3] = n),
      (t[4] = u),
      (t[5] = w))
    : (w = t[5]);
  let T = w,
    E;
  t[6] !== n || t[7] !== p
    ? ((E = (e) => {
        (e.preventDefault(), p(), n());
      }),
      (t[6] = n),
      (t[7] = p),
      (t[8] = E))
    : (E = t[8]);
  let D = E,
    ee;
  t[9] !== n || t[10] !== h
    ? ((ee = (e) => {
        (e.preventDefault(), h(), n());
      }),
      (t[9] = n),
      (t[10] = h),
      (t[11] = ee))
    : (ee = t[11]);
  let O = ee,
    k;
  t[12] !== n || t[13] !== _
    ? ((k = (e) => {
        (e.preventDefault(), _(), n());
      }),
      (t[12] = n),
      (t[13] = _),
      (t[14] = k))
    : (k = t[14]);
  let A = k,
    j;
  t[15] !== c || t[16] !== n
    ? ((j = (e) => {
        (e.preventDefault(), c?.(), n());
      }),
      (t[15] = c),
      (t[16] = n),
      (t[17] = j))
    : (j = t[17]);
  let N = j,
    P;
  t[18] !== A || t[19] !== g || t[20] !== y
    ? ((P = y
        ? (0, Q.jsx)(C.Item, {
            onSelect: A,
            LeftIcon: d,
            children: g
              ? (0, Q.jsx)(f, {
                  id: `codex.review.loadFullFiles.disable`,
                  defaultMessage: `Don't load full files`,
                  description: `Menu item to avoid loading full file contents for partial diffs`,
                })
              : (0, Q.jsx)(f, {
                  id: `codex.review.loadFullFiles.enable`,
                  defaultMessage: `Load full files`,
                  description: `Menu item to load full file contents for partial diffs`,
                }),
          })
        : null),
      (t[18] = A),
      (t[19] = g),
      (t[20] = y),
      (t[21] = P))
    : (P = t[21]);
  let F = l ? M : R,
    I;
  t[22] === l
    ? (I = t[23])
    : ((I = l
        ? (0, Q.jsx)(f, {
            id: `codex.review.richPreview.disable`,
            defaultMessage: `Disable rich preview`,
            description: `Menu item to disable rich previews in the diff view`,
          })
        : (0, Q.jsx)(f, {
            id: `codex.review.richPreview.enable`,
            defaultMessage: `Enable rich preview`,
            description: `Menu item to enable rich previews in the diff view`,
          })),
      (t[22] = l),
      (t[23] = I));
  let L;
  t[24] !== T || t[25] !== S || t[26] !== F || t[27] !== I
    ? ((L = (0, Q.jsx)(C.Item, { onSelect: T, "aria-label": S, LeftIcon: F, children: I })),
      (t[24] = T),
      (t[25] = S),
      (t[26] = F),
      (t[27] = I),
      (t[28] = L))
    : (L = t[28]);
  let z = r ? be : vr,
    B;
  t[29] === r
    ? (B = t[30])
    : ((B = r
        ? (0, Q.jsx)(f, {
            id: `codex.review.wordDiffs.disable`,
            defaultMessage: `Disable word diffs`,
            description: `Menu item to disable word-level diff highlights`,
          })
        : (0, Q.jsx)(f, {
            id: `codex.review.wordDiffs.enable`,
            defaultMessage: `Enable word diffs`,
            description: `Menu item to enable word-level diff highlights`,
          })),
      (t[29] = r),
      (t[30] = B));
  let V;
  t[31] !== D || t[32] !== z || t[33] !== B
    ? ((V = (0, Q.jsx)(C.Item, { onSelect: D, LeftIcon: z, children: B })),
      (t[31] = D),
      (t[32] = z),
      (t[33] = B),
      (t[34] = V))
    : (V = t[34]);
  let H;
  t[35] !== O || t[36] !== m || t[37] !== v
    ? ((H = v
        ? (0, Q.jsx)(C.Item, {
            onSelect: O,
            LeftIcon: fn,
            children: m
              ? (0, Q.jsx)(f, {
                  id: `codex.review.whitespace.show`,
                  defaultMessage: `Show white space`,
                  description: `Menu item to show whitespace-only diff changes`,
                })
              : (0, Q.jsx)(f, {
                  id: `codex.review.whitespace.hide`,
                  defaultMessage: `Hide white space`,
                  description: `Menu item to hide whitespace-only diff changes`,
                }),
          })
        : null),
      (t[35] = O),
      (t[36] = m),
      (t[37] = v),
      (t[38] = H))
    : (H = t[38]);
  let U;
  t[39] !== s || t[40] !== N || t[41] !== c || t[42] !== i
    ? ((U = i
        ? (0, Q.jsx)(C.Item, {
            onSelect: N,
            disabled: s || !c,
            LeftIcon: fr,
            children: (0, Q.jsx)(f, {
              id: `codex.review.copyGitApplyCommand`,
              defaultMessage: `Copy git apply command`,
              description: `Menu item to copy a git apply command`,
            }),
          })
        : null),
      (t[39] = s),
      (t[40] = N),
      (t[41] = c),
      (t[42] = i),
      (t[43] = U))
    : (U = t[43]);
  let W;
  return (
    t[44] !== L || t[45] !== V || t[46] !== H || t[47] !== U || t[48] !== P
      ? ((W = (0, Q.jsxs)(Q.Fragment, { children: [P, L, V, H, U] })),
        (t[44] = L),
        (t[45] = V),
        (t[46] = H),
        (t[47] = U),
        (t[48] = P),
        (t[49] = W))
      : (W = t[49]),
    W
  );
}
var Rr,
  zr,
  Q,
  Br = e(() => {
    ((Rr = je()),
      w(),
      F(),
      (zr = t(o(), 1)),
      W(),
      a(),
      Y(),
      xe(),
      A(),
      T(),
      q(),
      pr(),
      bn(),
      pn(),
      Ge(),
      dn(),
      G(),
      g(),
      P(),
      x(),
      Ne(),
      gr(),
      xn(),
      yr(),
      c(),
      Fe(),
      Mr(),
      pt(),
      ve(),
      (Q = Ee()));
  });
function Vr(e) {
  let t = (0, Hr.c)(34),
    { request: n, onRefresh: r, isRefreshing: a } = e,
    o = i(Se),
    s = te(),
    c = h(ie),
    l = N(Pt, n),
    [u, d] = (0, Ur.useState)(!0),
    f = mn(d, `pull-request-review`),
    p;
  t[0] !== s || t[1] !== l
    ? ((p = l
        ? s.formatMessage({
            id: `pullRequestsPage.codeReview.hideFileTree`,
            defaultMessage: `Hide file tree`,
            description: `Tooltip to hide the pull request code review file tree`,
          })
        : s.formatMessage({
            id: `pullRequestsPage.codeReview.showFileTree`,
            defaultMessage: `Show file tree`,
            description: `Tooltip to show the pull request code review file tree`,
          })),
      (t[0] = s),
      (t[1] = l),
      (t[2] = p))
    : (p = t[2]);
  let m = p,
    g;
  t[3] !== u || t[4] !== f
    ? ((g = () => {
        f(!u);
      }),
      (t[3] = u),
      (t[4] = f),
      (t[5] = g))
    : (g = t[5]);
  let _ = r != null,
    v;
  t[6] !== u || t[7] !== a || t[8] !== r || t[9] !== g || t[10] !== _
    ? ((v = (0, Wr.jsx)(Pr, {
        expanded: u,
        onRefreshGitQueries: r,
        onToggleExpanded: g,
        showHideWhitespace: !1,
        showLoadFullFiles: !1,
        showRefreshGitQueries: _,
        refreshGitQueriesDisabled: a,
      })),
      (t[6] = u),
      (t[7] = a),
      (t[8] = r),
      (t[9] = g),
      (t[10] = _),
      (t[11] = v))
    : (v = t[11]);
  let y;
  t[12] === o
    ? (y = t[13])
    : ((y = (e) => {
        o.set(ie, e === `left` ? `unified` : `split`);
      }),
      (t[12] = o),
      (t[13] = y));
  let b;
  t[14] !== c || t[15] !== y
    ? ((b = (0, Wr.jsx)(Fr, { diffMode: c, onSelectDiffMode: y })),
      (t[14] = c),
      (t[15] = y),
      (t[16] = b))
    : (b = t[16]);
  let x = l ? `secondary` : `ghost`,
    S;
  t[17] !== l || t[18] !== n || t[19] !== o
    ? ((S = () => {
        wt(o, n, !l);
      }),
      (t[17] = l),
      (t[18] = n),
      (t[19] = o),
      (t[20] = S))
    : (S = t[20]);
  let C;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Wr.jsx)(we, { "aria-hidden": !1, asset: et })), (t[21] = C))
    : (C = t[21]);
  let w;
  t[22] !== m || t[23] !== l || t[24] !== x || t[25] !== S
    ? ((w = (0, Wr.jsx)(ke, {
        "aria-label": m,
        "aria-pressed": l,
        color: x,
        size: `toolbar`,
        uniform: !0,
        onClick: S,
        children: C,
      })),
      (t[22] = m),
      (t[23] = l),
      (t[24] = x),
      (t[25] = S),
      (t[26] = w))
    : (w = t[26]);
  let T;
  t[27] !== m || t[28] !== w
    ? ((T = (0, Wr.jsx)(ee, { tooltipContent: m, delayOpen: !0, children: w })),
      (t[27] = m),
      (t[28] = w),
      (t[29] = T))
    : (T = t[29]);
  let E;
  return (
    t[30] !== T || t[31] !== v || t[32] !== b
      ? ((E = (0, Wr.jsxs)(`div`, { className: `flex items-center gap-px`, children: [v, b, T] })),
        (t[30] = T),
        (t[31] = v),
        (t[32] = b),
        (t[33] = E))
      : (E = t[33]),
    E
  );
}
var Hr,
  Ur,
  Wr,
  Gr = e(() => {
    ((Hr = je()),
      u(),
      F(),
      (Ur = t(o(), 1)),
      W(),
      a(),
      xe(),
      T(),
      q(),
      _n(),
      Br(),
      Je(),
      Nt(),
      (Wr = Ee()));
  });
function Kr(e) {
  let t = (0, qr.c)(13),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ diff: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let a = i(fe),
    o = h(_),
    s = h(ce),
    c = n.metadata.additionLines ? `line-info` : `metadata`,
    l;
  t[3] !== a || t[4] !== s
    ? ((l = () => {
        a.set(ce, !s);
      }),
      (t[3] = a),
      (t[4] = s),
      (t[5] = l))
    : (l = t[5]);
  let u;
  return (
    t[6] !== n || t[7] !== r || t[8] !== o || t[9] !== c || t[10] !== l || t[11] !== s
      ? ((u = (0, Jr.jsx)(yn, {
          ...r,
          containerClassName: `extension:rounded-lg extension:[--codex-diffs-surface-override:var(--color-codex-diff-surface)]`,
          diff: n,
          diffViewWrap: s,
          headerVariant: `full-review`,
          hunkSeparators: c,
          onToggleWrap: l,
          richPreviewEnabled: o,
          roundedCorners: !1,
        })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = o),
        (t[9] = c),
        (t[10] = l),
        (t[11] = s),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
var qr,
  Jr,
  Yr = e(() => {
    ((qr = je()), F(), gn(), q(), Fe(), (Jr = Ee()));
  }),
  Xr,
  Zr,
  Qr,
  $r,
  ei = e(() => {
    ((Xr = t(H(), 1)),
      F(),
      an(),
      pe(),
      Je(),
      le(),
      Nt(),
      xt(),
      (Zr = ne(Se, (e, { get: t }) => {
        let n = t(Lt, e).data,
          r = t(Vt, e),
          i =
            n?.status === `success` && r != null
              ? {
                  account: e.account,
                  pullRequest: e.pullRequest,
                  headRevision: n.headRevision,
                  paths: r.map((e) => e.metadata.name),
                }
              : null;
        return {
          enabled: i != null && i.paths.length > 0 && t(bt, e) === `available`,
          queryKey: Pe(`gh-pr-gitattributes`, i ?? void 0),
          queryFn: ({ signal: e }) => {
            if (i == null) throw Error(`Pull request diff unavailable`);
            return Le(`gh-pr-gitattributes`, i, { signal: e, source: `pull_requests_page` });
          },
          staleTime: (e) => (e.state.data?.status === `success` ? 1 / 0 : 0),
        };
      })),
      (Qr = De(Se, (e, { get: t }) => {
        let n = t(Zr, e).data;
        return n?.status === `success`
          ? (0, Xr.default)(n.files, (e) => e.basePath.length, `desc`).map(
              ({ basePath: e, contents: t }) => sn(t, { basePath: e || null }),
            )
          : void 0;
      })),
      ($r = De(Se, ({ request: e, path: t }, { get: n }) => {
        let r = n(Qr, e);
        if (r == null) return !1;
        for (let e of r) {
          let n = e?.(t);
          if (n != null) return n === `set`;
        }
        return !1;
      })));
  });
function ti(e) {
  let t = (0, ni.c)(76),
    {
      request: n,
      canWrite: r,
      commentAuthorAvatarUrl: a,
      commentAuthorLabel: o,
      cwd: s,
      diffMode: c,
      file: l,
      hostConfig: u,
      path: d,
      reviewDiffMetrics: p,
      renderReadonlyComment: m,
      renderReadonlyCommentBody: h,
      onRequestChanges: g,
    } = e,
    _ = r === void 0 || r,
    v = i(Se),
    y = te(),
    b;
  t[0] !== n || t[1] !== v
    ? ((b = `comparison` in n && v.value.routeKind !== `chatgpt-thread` ? Xe(v.value) : null),
      (t[0] = n),
      (t[1] = v),
      (t[2] = b))
    : (b = t[2]);
  let x = b,
    S;
  t[3] === n
    ? (S = t[4])
    : ((S =
        `comparison` in n
          ? JSON.stringify([
              ye(n.account),
              We(n.pullRequest),
              n.comparison.baseRevision,
              n.comparison.headRevision,
            ])
          : null),
      (t[3] = n),
      (t[4] = S));
  let C;
  t[5] !== x || t[6] !== d || t[7] !== S
    ? ((C = { conversationId: x, path: d, pullRequestReviewKey: S }),
      (t[5] = x),
      (t[6] = d),
      (t[7] = S),
      (t[8] = C))
    : (C = t[8]);
  let w = C,
    T = N(at, w),
    E = _ || x != null,
    D;
  t[9] !== d || t[10] !== n
    ? ((D = { path: d, request: n }), (t[9] = d), (t[10] = n), (t[11] = D))
    : (D = t[11]);
  let ee = N(zt, D),
    O;
  t[12] !== d || t[13] !== n
    ? ((O = { path: d, request: n }), (t[12] = d), (t[13] = n), (t[14] = O))
    : (O = t[14]);
  let k = N(kt, O),
    A;
  t[15] !== d || t[16] !== n
    ? ((A = { path: d, request: n }), (t[15] = d), (t[16] = n), (t[17] = A))
    : (A = t[17]);
  let j = N(jt, A),
    M;
  t[18] !== d || t[19] !== n
    ? ((M = { path: d, request: n }), (t[18] = d), (t[19] = n), (t[20] = M))
    : (M = t[20]);
  let P = N(Mt, M),
    F;
  t[21] !== d || t[22] !== n
    ? ((F = { request: n, path: d }), (t[21] = d), (t[22] = n), (t[23] = F))
    : (F = t[23]);
  let I = N($r, F),
    [L, R] = (0, ri.useState)(),
    z;
  if (t[24] !== y || t[25] !== d || t[26] !== n || t[27] !== v || t[28] !== P) {
    let e;
    (t[30] !== y || t[31] !== d || t[32] !== n || t[33] !== v
      ? ((e = (e) => {
          let { error: t, submissionKey: r } = e;
          return (0, ii.jsx)(
            `div`,
            {
              className: `mx-1`,
              children: (0, ii.jsx)($e, {
                content:
                  t instanceof Error
                    ? t.message
                    : y.formatMessage({
                        id: `pullRequestDetail.code.commentError`,
                        defaultMessage: `GitHub could not post this comment`,
                        description: `Fallback error for a pull request code comment`,
                      }),
                role: `alert`,
                type: `error`,
                variant: `callout`,
                stackOnNarrow: !0,
                primaryCtaColor: `secondary`,
                onPrimaryCtaClick: () => {
                  Ht(v, n, d, r);
                },
                primaryCtaText: (0, ii.jsx)(f, {
                  id: `pullRequestDetail.code.retryComment`,
                  defaultMessage: `Retry`,
                  description: `Action to retry a failed pull request code comment`,
                }),
              }),
            },
            `${r.revision}:${r.commentKey}`,
          );
        }),
        (t[30] = y),
        (t[31] = d),
        (t[32] = n),
        (t[33] = v),
        (t[34] = e))
      : (e = t[34]),
      (z = P.map(e)),
      (t[24] = y),
      (t[25] = d),
      (t[26] = n),
      (t[27] = v),
      (t[28] = P),
      (t[29] = z));
  } else z = t[29];
  let B = x ?? void 0,
    V = x == null ? ee : T,
    H = `comparison` in n ? void 0 : k,
    U = x == null ? a : void 0,
    W = x == null ? o : void 0,
    ne;
  t[35] !== x || t[36] !== E || t[37] !== w || t[38] !== d || t[39] !== n || t[40] !== v
    ? ((ne = E
        ? (e) => {
            if (x != null) {
              nt(v, w, e);
              return;
            }
            Ct(v, n, d, e);
          }
        : void 0),
      (t[35] = x),
      (t[36] = E),
      (t[37] = w),
      (t[38] = d),
      (t[39] = n),
      (t[40] = v),
      (t[41] = ne))
    : (ne = t[41]);
  let re;
  t[42] !== _ || t[43] !== ee || t[44] !== d || t[45] !== n || t[46] !== v
    ? ((re = _
        ? (e) => {
            Ct(v, n, d, [
              ...ee,
              {
                ...e,
                content: [{ content_type: `text`, text: `` }],
                replyToReviewThreadId: e.reviewThreadId ?? null,
              },
            ]);
          }
        : void 0),
      (t[42] = _),
      (t[43] = ee),
      (t[44] = d),
      (t[45] = n),
      (t[46] = v),
      (t[47] = re))
    : (re = t[47]);
  let ie = `comparison` in n,
    ae;
  t[48] !== l || t[49] !== n || t[50] !== v
    ? ((ae = `comparison` in n ? St(v, n, l) : void 0),
      (t[48] = l),
      (t[49] = n),
      (t[50] = v),
      (t[51] = ae))
    : (ae = t[51]);
  let G = L ?? (l.metadata.type !== `deleted` && !I),
    K;
  t[52] !== s ||
  t[53] !== c ||
  t[54] !== E ||
  t[55] !== l ||
  t[56] !== u ||
  t[57] !== g ||
  t[58] !== m ||
  t[59] !== h ||
  t[60] !== p ||
  t[61] !== j ||
  t[62] !== B ||
  t[63] !== V ||
  t[64] !== H ||
  t[65] !== U ||
  t[66] !== W ||
  t[67] !== ne ||
  t[68] !== re ||
  t[69] !== ie ||
  t[70] !== ae ||
  t[71] !== G
    ? ((K = (0, ii.jsx)(Kr, {
        conversationId: B,
        cwd: s,
        diff: l,
        expandScope: `pull-request-review`,
        enableComments: E,
        comments: V,
        readonlyComments: H,
        renderReadonlyComment: m,
        renderReadonlyCommentBody: h,
        submittingCommentKeys: j,
        commentAuthorAvatarUrl: U,
        commentAuthorLabel: W,
        onCommentsChange: ne,
        onOpenChange: R,
        onRequestChanges: g,
        onReadonlyCommentReply: re,
        hostConfig: u,
        loadFullContent: ie,
        fullContentLoader: ae,
        showPartialWhileLoadingFullContent: !0,
        open: G,
        metrics: p,
        stickyHeader: !0,
        viewType: c,
      })),
      (t[52] = s),
      (t[53] = c),
      (t[54] = E),
      (t[55] = l),
      (t[56] = u),
      (t[57] = g),
      (t[58] = m),
      (t[59] = h),
      (t[60] = p),
      (t[61] = j),
      (t[62] = B),
      (t[63] = V),
      (t[64] = H),
      (t[65] = U),
      (t[66] = W),
      (t[67] = ne),
      (t[68] = re),
      (t[69] = ie),
      (t[70] = ae),
      (t[71] = G),
      (t[72] = K))
    : (K = t[72]);
  let q;
  return (
    t[73] !== z || t[74] !== K
      ? ((q = (0, ii.jsxs)(ii.Fragment, { children: [z, K] })),
        (t[73] = z),
        (t[74] = K),
        (t[75] = q))
      : (q = t[75]),
    q
  );
}
var ni,
  ri,
  ii,
  ai = e(() => {
    ((ni = je()),
      F(),
      (ri = t(o(), 1)),
      W(),
      rt(),
      l(),
      Yr(),
      Je(),
      He(),
      Nt(),
      ei(),
      xt(),
      (ii = Ee()));
  });
function oi(e) {
  let t = (0, ui.c)(93),
    {
      request: n,
      baseBranch: a,
      headRevision: o,
      headBranch: s,
      onRequestChanges: c,
      sourceControl: l,
      onRefresh: u,
      isRefreshing: d,
    } = e,
    p = i(Se),
    m = h($t) && !(`comparison` in n),
    g;
  t[0] !== d || t[1] !== u || t[2] !== n
    ? ((g = (0, $.jsx)(Vr, { request: n, onRefresh: u, isRefreshing: d })),
      (t[0] = d),
      (t[1] = u),
      (t[2] = n),
      (t[3] = g))
    : (g = t[3]);
  let _ = g,
    y = h(ie),
    b = N(Lt, n),
    x = N(Vt, n),
    S = N(Tt, n),
    C = N(At, n),
    w = N(Ot, n),
    T = N(Pt, n),
    E = N(Et, n),
    D = n.account,
    ee = N(O, D.hostId),
    k = (0, di.useRef)(null),
    A;
  t[4] !== n || t[5] !== p
    ? ((A = (e) => {
        if (e == null) {
          (k.current != null && Wt(p, n, k.current.scrollTop), (k.current = null));
          return;
        }
        ((k.current = e), (e.scrollTop = p.get(Ft, n)));
      }),
      (t[4] = n),
      (t[5] = p),
      (t[6] = A))
    : (A = t[6]);
  let j = V(A);
  if (b?.isLoading === !0) {
    let e;
    t[7] === l
      ? (e = t[8])
      : ((e =
          l == null
            ? null
            : (0, $.jsx)(`div`, { className: `flex min-w-0 items-center gap-2 p-2`, children: l })),
        (t[7] = l),
        (t[8] = e));
    let n;
    t[9] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(Oe, {})), (t[9] = n))
      : (n = t[9]);
    let r;
    t[10] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsxs)(`div`, {
          className: `flex h-full items-center justify-center`,
          role: `status`,
          children: [
            n,
            (0, $.jsx)(`span`, {
              className: `sr-only`,
              children: (0, $.jsx)(f, {
                id: `pullRequestDetail.code.loading`,
                defaultMessage: `Loading pull request changes`,
                description: `Loading state for the pull request Code tab`,
              }),
            }),
          ],
        })),
        (t[10] = r))
      : (r = t[10]);
    let i;
    return (
      t[11] === e
        ? (i = t[12])
        : ((i = (0, $.jsxs)(`div`, {
            className: `flex h-full min-h-0 flex-col`,
            children: [e, r],
          })),
          (t[11] = e),
          (t[12] = i)),
      i
    );
  }
  if (b?.data?.status !== `success` || b.data.headRevision !== o) {
    let e = null;
    if (b?.data?.status === `error`) {
      let n;
      (t[13] !== D || t[14] !== b.data.error
        ? ((n = (0, $.jsx)(wn, { account: D, error: b.data.error })),
          (t[13] = D),
          (t[14] = b.data.error),
          (t[15] = n))
        : (n = t[15]),
        (e = n));
    } else if (b?.data?.status === `success`) {
      let n;
      (t[16] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((n = (0, $.jsx)(f, {
            id: `pullRequestDetail.code.stale`,
            defaultMessage: `The pull request changed while its diff was loading.`,
            description: `Error shown when a pull request diff revision is stale`,
          })),
          (t[16] = n))
        : (n = t[16]),
        (e = n));
    } else if (b?.error != null) {
      let n;
      (t[17] !== D || t[18] !== b.error.message
        ? ((n = (0, $.jsx)(wn, { account: D, error: b.error.message })),
          (t[17] = D),
          (t[18] = b.error.message),
          (t[19] = n))
        : (n = t[19]),
        (e = n));
    }
    let n = u == null ? null : _,
      i;
    t[20] !== D.hostId || t[21] !== b || t[22] !== p.queryClient
      ? ((i = () => {
          r(p.queryClient, D.hostId).then(() => b?.refetch());
        }),
        (t[20] = D.hostId),
        (t[21] = b),
        (t[22] = p.queryClient),
        (t[23] = i))
      : (i = t[23]);
    let a;
    t[24] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, $.jsx)(f, {
          id: `pullRequestDetail.code.retry`,
          defaultMessage: `Try again`,
          description: `Action to retry loading a pull request diff`,
        })),
        (t[24] = a))
      : (a = t[24]);
    let o;
    t[25] === i
      ? (o = t[26])
      : ((o = (0, $.jsx)(ke, { color: `secondary`, onClick: i, children: a })),
        (t[25] = i),
        (t[26] = o));
    let s;
    t[27] !== l || t[28] !== n || t[29] !== o
      ? ((s = (0, $.jsxs)($.Fragment, { children: [l, n, o] })),
        (t[27] = l),
        (t[28] = n),
        (t[29] = o),
        (t[30] = s))
      : (s = t[30]);
    let c;
    t[31] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((c = (0, $.jsx)(f, {
          id: `pullRequestDetail.code.unavailable`,
          defaultMessage: `Changes unavailable`,
          description: `Error title for an unavailable pull request diff`,
        })),
        (t[31] = c))
      : (c = t[31]);
    let d;
    return (
      t[32] !== s || t[33] !== e
        ? ((d = (0, $.jsx)(J, { className: `h-full`, actions: s, description: e, title: c })),
          (t[32] = s),
          (t[33] = e),
          (t[34] = d))
        : (d = t[34]),
      d
    );
  }
  if (x?.length === 0) {
    let e = u == null ? null : _,
      n;
    t[35] !== l || t[36] !== e
      ? ((n = (0, $.jsxs)($.Fragment, { children: [l, e] })), (t[35] = l), (t[36] = e), (t[37] = n))
      : (n = t[37]);
    let r;
    t[38] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, $.jsx)(f, {
          id: `pullRequestDetail.code.empty`,
          defaultMessage: `No changed files`,
          description: `Empty state for a pull request without a diff`,
        })),
        (t[38] = r))
      : (r = t[38]);
    let i;
    return (
      t[39] === n
        ? (i = t[40])
        : ((i = (0, $.jsx)(J, { className: `h-full`, actions: n, title: r })),
          (t[39] = n),
          (t[40] = i)),
      i
    );
  }
  let M;
  t[41] === s ? (M = t[42]) : ((M = s?.trim() || null), (t[41] = s), (t[42] = M));
  let P = M,
    F;
  t[43] === a ? (F = t[44]) : ((F = a?.trim() || null), (t[43] = a), (t[44] = F));
  let te = F,
    I;
  t[45] !== D ||
  t[46] !== m ||
  t[47] !== y ||
  t[48] !== x ||
  t[49] !== ee ||
  t[50] !== c ||
  t[51] !== n ||
  t[52] !== p
    ? ((I = (e) =>
        (x ?? []).map((t) => {
          let r = Re(t.metadata.name);
          return (0, $.jsx)(
            `div`,
            {
              id: Bt(p, n, r),
              ...me.reviewFile(r),
              children: (0, $.jsx)(ti, {
                request: n,
                canWrite: m,
                commentAuthorAvatarUrl: _t(D.login, 48, D.hostname),
                commentAuthorLabel: D.login,
                cwd: null,
                diffMode: y,
                file: t,
                hostConfig: ee,
                path: r,
                reviewDiffMetrics: e,
                renderReadonlyComment: m
                  ? (e) => (0, $.jsx)(si, { comment: e, request: n })
                  : void 0,
                renderReadonlyCommentBody: (e, t) =>
                  (0, $.jsx)(Kt, {
                    account: D,
                    allowBasicHtml: !0,
                    className: t ? void 0 : `ps-11.5 pe-3 pt-2 pb-2.5`,
                    cwd: null,
                    children: e,
                  }),
                onRequestChanges: c,
              }),
            },
            r,
          );
        })),
      (t[45] = D),
      (t[46] = m),
      (t[47] = y),
      (t[48] = x),
      (t[49] = ee),
      (t[50] = c),
      (t[51] = n),
      (t[52] = p),
      (t[53] = I))
    : (I = t[53]);
  let L;
  t[54] !== T || t[55] !== j || t[56] !== I
    ? ((L = (0, $.jsx)(ir, {
        ref: j,
        "data-pull-request-code-scroll": !0,
        disableScrollAnchoring: !0,
        isFileTreeOpen: T,
        children: I,
      })),
      (t[54] = T),
      (t[55] = j),
      (t[56] = I),
      (t[57] = L))
    : (L = t[57]);
  let R = L,
    z;
  t[58] !== n || t[59] !== p
    ? ((z = (e) => {
        Ut(p, n, e);
      }),
      (t[58] = n),
      (t[59] = p),
      (t[60] = z))
    : (z = t[60]);
  let B;
  t[61] !== w || t[62] !== z
    ? ((B = (0, $.jsx)(`div`, {
        className: `shrink-0 pb-1`,
        children: (0, $.jsx)(un, {
          inputId: `pull-request-code-file-search`,
          searchQuery: w,
          onQueryChange: z,
        }),
      })),
      (t[61] = w),
      (t[62] = z),
      (t[63] = B))
    : (B = t[63]);
  let H = C ?? void 0,
    U;
  t[64] !== n || t[65] !== p
    ? ((U = (e) => {
        (Dt(p, n, e), document.getElementById(Bt(p, n, e))?.scrollIntoView({ block: `start` }));
      }),
      (t[64] = n),
      (t[65] = p),
      (t[66] = U))
    : (U = t[66]);
  let W;
  t[67] !== E || t[68] !== U || t[69] !== H || t[70] !== S
    ? ((W = (0, $.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, $.jsx)(cn, {
          activePath: H,
          commentCountByPath: E,
          cwd: null,
          entries: S,
          onSelectPath: U,
        }),
      })),
      (t[67] = E),
      (t[68] = U),
      (t[69] = H),
      (t[70] = S),
      (t[71] = W))
    : (W = t[71]);
  let ne;
  t[72] !== W || t[73] !== B
    ? ((ne = (0, $.jsxs)(`div`, {
        className: `flex h-full min-h-0 flex-col pt-2`,
        children: [B, W],
      })),
      (t[72] = W),
      (t[73] = B),
      (t[74] = ne))
    : (ne = t[74]);
  let re = ne,
    ae;
  t[75] !== te || t[76] !== P || t[77] !== l
    ? ((ae =
        l ??
        (0, $.jsxs)(`div`, {
          className: `flex min-w-0 items-center gap-2 text-sm text-tertiary [@container_(max-width:399px)]:hidden`,
          children: [
            P == null ? null : (0, $.jsx)(`span`, { className: `truncate`, children: P }),
            P != null && te != null
              ? (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsx)(`span`, {
                      className: `sr-only`,
                      children: (0, $.jsx)(f, {
                        id: `pullRequestDetail.code.branchDirection`,
                        defaultMessage: `into`,
                        description: `Accessible relationship between the head and base branches in the pull request Code toolbar`,
                      }),
                    }),
                    (0, $.jsx)(v, { "aria-hidden": !0, className: `icon-2xs shrink-0` }),
                  ],
                })
              : null,
            te == null ? null : (0, $.jsx)(`span`, { className: `truncate`, children: te }),
          ],
        })),
      (t[75] = te),
      (t[76] = P),
      (t[77] = l),
      (t[78] = ae))
    : (ae = t[78]);
  let G;
  t[79] !== _ || t[80] !== ae
    ? ((G = (0, $.jsxs)(`div`, {
        className: `@container flex h-toolbar-pane shrink-0 items-center justify-between gap-2 overflow-hidden border-b border-default px-2`,
        children: [ae, _],
      })),
      (t[79] = _),
      (t[80] = ae),
      (t[81] = G))
    : (G = t[81]);
  let K;
  t[82] !== n || t[83] !== p
    ? ((K = (e) => {
        wt(p, n, e);
      }),
      (t[82] = n),
      (t[83] = p),
      (t[84] = K))
    : (K = t[84]);
  let q;
  t[85] !== R || t[86] !== re || t[87] !== T || t[88] !== K
    ? ((q = (0, $.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, $.jsx)(An, {
          id: `pull-request-code-review-files-right`,
          className: `h-full min-h-0`,
          defaultLeftPercent: 76,
          drawerBreakpoint: 680,
          drawerMaxWidth: 360,
          drawerVisibleInset: 56,
          isRightOpen: T,
          left: R,
          minLeftWidth: 420,
          minRightWidth: 220,
          onRightOpenChange: K,
          right: re,
          rightClassName: `pe-4 ps-2`,
        }),
      })),
      (t[85] = R),
      (t[86] = re),
      (t[87] = T),
      (t[88] = K),
      (t[89] = q))
    : (q = t[89]);
  let oe;
  return (
    t[90] !== G || t[91] !== q
      ? ((oe = (0, $.jsxs)(`div`, { className: `flex h-full min-h-0 flex-col`, children: [G, q] })),
        (t[90] = G),
        (t[91] = q),
        (t[92] = oe))
      : (oe = t[92]),
    oe
  );
}
function si(e) {
  let t = (0, ui.c)(22),
    { comment: n, request: r } = e,
    i;
  t[0] !== n.reviewThreadId || t[1] !== r
    ? ((i = { request: r, threadId: n.reviewThreadId }),
      (t[0] = n.reviewThreadId),
      (t[1] = r),
      (t[2] = i))
    : (i = t[2]);
  let a = N(Rt, i);
  if (a != null) {
    let e;
    return (
      t[3] !== n || t[4] !== r.account || t[5] !== r.pullRequest || t[6] !== a
        ? ((e = (0, $.jsx)(Zt, {
            account: r.account,
            comment: a,
            commentAttachment: n,
            inline: !0,
            pullRequest: r.pullRequest,
            source: `pull_requests_page`,
          })),
          (t[3] = n),
          (t[4] = r.account),
          (t[5] = r.pullRequest),
          (t[6] = a),
          (t[7] = e))
        : (e = t[7]),
      e
    );
  }
  let o = n.isResolved === !0,
    s;
  t[8] === n.isResolved
    ? (s = t[9])
    : ((s =
        n.isResolved === !0
          ? (0, $.jsx)(f, {
              id: `pullRequestDetail.comment.resolved`,
              defaultMessage: `Resolved`,
              description: `Status shown on a resolved pull request code review thread`,
            })
          : void 0),
      (t[8] = n.isResolved),
      (t[9] = s));
  let c = n.reviewThreadId != null,
    l;
  t[10] !== n || t[11] !== r || t[12] !== c
    ? ((l = (0, $.jsx)(ci, { canReply: c, comment: n, request: r })),
      (t[10] = n),
      (t[11] = r),
      (t[12] = c),
      (t[13] = l))
    : (l = t[13]);
  let u;
  t[14] === r.account
    ? (u = t[15])
    : ((u = (e, t) =>
        (0, $.jsx)(Kt, {
          account: r.account,
          allowBasicHtml: !0,
          className: t ? void 0 : `ps-11.5 pe-3 pt-2 pb-2.5`,
          cwd: null,
          children: e,
        })),
      (t[14] = r.account),
      (t[15] = u));
  let d;
  return (
    t[16] !== n || t[17] !== o || t[18] !== s || t[19] !== l || t[20] !== u
      ? ((d = (0, $.jsx)(gt, {
          comment: n,
          createdAt: n.createdAt,
          defaultCollapsed: o,
          headerAccessory: s,
          metadataAccessory: l,
          replies: n.replies,
          renderBody: u,
          surfaceVariant: `inline`,
          url: n.url,
        })),
        (t[16] = n),
        (t[17] = o),
        (t[18] = s),
        (t[19] = l),
        (t[20] = u),
        (t[21] = d))
      : (d = t[21]),
    d
  );
}
function ci(e) {
  let t = (0, ui.c)(17),
    { canReply: n, comment: r, request: i } = e,
    [a, o] = (0, di.useState)(!1),
    s =
      r.reviewThreadId != null &&
      (r.isResolved === !0 ? r.viewerCanUnresolve === !0 : r.viewerCanResolve === !0);
  if (!n && !s) return null;
  if (a && r.reviewThreadId != null) {
    let e, n;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = () => {
          o(!1);
        }),
        (n = () => {
          o(!1);
        }),
        (t[0] = e),
        (t[1] = n))
      : ((e = t[0]), (n = t[1]));
    let a;
    return (
      t[2] !== r.authorLogin ||
      t[3] !== r.reviewThreadId ||
      t[4] !== i.account ||
      t[5] !== i.pullRequest
        ? ((a = (0, $.jsx)(`div`, {
            className: `w-full ps-6.5`,
            children: (0, $.jsx)(Xt, {
              account: i.account,
              pullRequest: i.pullRequest,
              replyToAuthorLogin: r.authorLogin,
              replyToReviewThreadId: r.reviewThreadId,
              source: `pull_requests_page`,
              onCancel: e,
              onSuccess: n,
            }),
          })),
          (t[2] = r.authorLogin),
          (t[3] = r.reviewThreadId),
          (t[4] = i.account),
          (t[5] = i.pullRequest),
          (t[6] = a))
        : (a = t[6]),
      a
    );
  }
  let c;
  t[7] === n
    ? (c = t[8])
    : ((c = n
        ? (0, $.jsxs)(ke, {
            color: `ghost`,
            size: `default`,
            onClick: () => {
              o(!0);
            },
            children: [
              (0, $.jsx)(ht, { "aria-hidden": !0, className: `icon-sm` }),
              (0, $.jsx)(`span`, {
                className: `ps-1`,
                children: (0, $.jsx)(f, {
                  id: `pullRequestsPage.codeReview.comment.reply`,
                  defaultMessage: `Reply`,
                  description: `Action button shown on a pull request review comment in the code review tab`,
                }),
              }),
            ],
          })
        : null),
      (t[7] = n),
      (t[8] = c));
  let l;
  t[9] !== s || t[10] !== r.isResolved || t[11] !== r.reviewThreadId || t[12] !== i
    ? ((l =
        s && r.reviewThreadId != null
          ? (0, $.jsx)(qt, {
              account: i.account,
              action: r.isResolved === !0 ? `unresolve` : `resolve`,
              pullRequest: i.pullRequest,
              reviewThreadId: r.reviewThreadId,
              source: `pull_requests_page`,
            })
          : null),
      (t[9] = s),
      (t[10] = r.isResolved),
      (t[11] = r.reviewThreadId),
      (t[12] = i),
      (t[13] = l))
    : (l = t[13]);
  let u;
  return (
    t[14] !== c || t[15] !== l
      ? ((u = (0, $.jsxs)(`div`, {
          className: `flex w-full items-start gap-2 ps-8.5`,
          role: `presentation`,
          onClick: li,
          children: [c, l],
        })),
        (t[14] = c),
        (t[15] = l),
        (t[16] = u))
      : (u = t[16]),
    u
  );
}
function li(e) {
  (e.preventDefault(), e.stopPropagation());
}
var ui,
  di,
  $,
  fi = e(() => {
    ((ui = je()),
      F(),
      (di = t(o(), 1)),
      W(),
      Ke(),
      a(),
      y(),
      A(),
      rr(),
      q(),
      on(),
      mt(),
      D(),
      B(),
      ur(),
      ln(),
      Je(),
      Ve(),
      b(),
      X(),
      Yt(),
      Gt(),
      Jt(),
      Cn(),
      Qt(),
      yt(),
      vt(),
      Gr(),
      ai(),
      It(),
      Nt(),
      ($ = Ee()));
  });
export {
  Fr as a,
  Br as c,
  ir as d,
  ur as f,
  Yr as i,
  Er as l,
  fi as n,
  Pr as o,
  Kr as r,
  Nr as s,
  oi as t,
  Mr as u,
};
//# sourceMappingURL=pull-request-code-review-c745f0e9b91d.js.map
