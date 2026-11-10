import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  VDt as t,
  _Mt as n,
  gMt as r,
  jDt as i,
  vzt as a,
  xMt as o,
  yzt as s,
} from "./app-shared-bbfeca5e5737.js";
import { bFr as ee, wFr as c, xFr as l } from "./app-initial-5851df3f6cb1.js";
function u({ containerWidth: e, maxWidth: t, minWidth: n, visibleInset: r = 0 }) {
  let i = Math.min(n, e),
    a = Math.min(t ?? e, Math.max(0, e - r)),
    o = Math.min(e * d, a);
  return Math.min(e, Math.max(i, o));
}
var d;
function f() {
  return (f = e(() => {
    d = 0.9;
  }))();
}
function te(e) {
  let n = (0, me.c)(184),
    {
      id: i,
      left: a,
      right: o,
      className: s,
      leftClassName: c,
      rightClassName: l,
      handleClassName: u,
      defaultLeftPercent: d,
      minLeftWidth: f,
      minRightWidth: te,
      handleWidth: ce,
      drawerBreakpoint: _e,
      drawerMaxWidth: y,
      drawerVisibleInset: Se,
      isLeftOpen: Ce,
      isRightOpen: we,
      onLeftOpenChange: b,
      onRightOpenChange: x,
    } = e,
    S = f === void 0 ? ge : f,
    C = te === void 0 ? ge : te,
    w = ce === void 0 ? he : ce,
    T = _e === void 0 ? ye : _e,
    E = Se === void 0 ? 0 : Se,
    D = Ce === void 0 || Ce,
    O = we === void 0 || we,
    Te = t(),
    Ee = ne(),
    k = o != null,
    A = k ? O : !1,
    j = !k || D,
    M = `${i}:split-left-width`,
    De = ee(M, NaN),
    Oe = Number.isFinite(De) && De <= 1,
    ke;
  n[0] === d ? (ke = n[1]) : ((ke = se(d)), (n[0] = d), (n[1] = ke));
  let Ae = Oe ? m(De) : ke,
    [N, P] = (0, _.useState)(0),
    [F, I] = (0, _.useState)(!1),
    L = (0, _.useRef)(null),
    R = (0, _.useRef)(null),
    z = (0, _.useRef)(null),
    B = (0, _.useRef)(null),
    je = (0, _.useRef)(!1),
    Me = (0, _.useRef)(null),
    Ne = (0, _.useRef)(null),
    V = (0, _.useRef)(null),
    H = (0, _.useRef)(null),
    U = (0, _.useRef)(null),
    W = (0, _.useRef)(Ae),
    G = (0, _.useRef)(0),
    Pe = (0, _.useRef)(Oe ? m(De) : null),
    K = k && !j && A,
    q = T > 0 && k && N > 0 && N <= T && !K,
    J = q ? 0 : w,
    Fe;
  n[2] === P
    ? (Fe = n[3])
    : ((Fe = () => {
        let e = L.current;
        if (!e) return;
        let t = e.getBoundingClientRect().width;
        P(t);
      }),
      (n[2] = P),
      (n[3] = Fe));
  let Ie;
  (n[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((Ie = []), (n[4] = Ie)) : (Ie = n[4]),
    (0, _.useLayoutEffect)(Fe, Ie));
  let Le;
  n[5] === P
    ? (Le = n[6])
    : ((Le = () => {
        let e = L.current;
        if (!e || typeof ResizeObserver > `u`) return;
        let t = new ResizeObserver((e) => {
          let t = e[0]?.contentRect.width ?? 0;
          P(t);
        });
        return (
          t.observe(e),
          () => {
            t.disconnect();
          }
        );
      }),
      (n[5] = P),
      (n[6] = Le));
  let Re;
  (n[7] === Symbol.for(`react.memo_cache_sentinel`) ? ((Re = []), (n[7] = Re)) : (Re = n[7]),
    (0, _.useEffect)(Le, Re));
  let ze, Be;
  (n[8] !== N || n[9] !== k || n[10] !== D || n[11] !== O || n[12] !== b
    ? ((ze = () => {
        N && k && !D && !O && b?.(!0);
      }),
      (Be = [N, k, D, O, b]),
      (n[8] = N),
      (n[9] = k),
      (n[10] = D),
      (n[11] = O),
      (n[12] = b),
      (n[13] = ze),
      (n[14] = Be))
    : ((ze = n[13]), (Be = n[14])),
    (0, _.useEffect)(ze, Be));
  let Ve;
  n[15] !== N ||
  n[16] !== T ||
  n[17] !== y ||
  n[18] !== E ||
  n[19] !== J ||
  n[20] !== j ||
  n[21] !== A ||
  n[22] !== K ||
  n[23] !== k ||
  n[24] !== D ||
  n[25] !== O ||
  n[26] !== W ||
  n[27] !== S ||
  n[28] !== C ||
  n[29] !== M
    ? ((Ve = () => {
        let e = L.current;
        if (!e) return;
        let t = N || e.getBoundingClientRect().width;
        if (!t) return;
        let n = Me.current,
          r = Ne.current,
          i = (n != null && Math.abs(n - t) >= 1) || (r != null && r !== j);
        je.current ? i && re([V, H, U], z) : (re([V, H, U], z), (je.current = !0));
        let a = () => {
          ((Me.current = t), (Ne.current = j));
        };
        if (T > 0 && k && t <= T && !K) {
          (fe({
            containerWidth: t,
            drawerMaxWidth: y,
            drawerVisibleInset: E,
            minRightWidth: C,
            isOpen: A,
            node: e,
            rafRef: R,
          }),
            a());
          return;
        }
        let o = p(t);
        if (!k) {
          (g({
            containerWidth: t,
            handleWidth: 0,
            nextLeftWidth: t,
            rightWidth: 0,
            rightTranslate: 0,
            node: e,
            rafRef: R,
            opts: { immediate: !0 },
          }),
            a());
          return;
        }
        if (!A) {
          let n = o * m(W.current),
            { rightWidth: r, boundedLeftRatio: i } = h({
              containerWidth: t,
              minLeftWidth: S,
              minRightWidth: C,
              leftWidth: n,
            });
          W.current = i;
          let s = de(G.current > 0 ? G.current : r, o);
          ((G.current = s),
            g({
              containerWidth: t,
              handleWidth: 0,
              nextLeftWidth: t,
              rightWidth: s,
              rightTranslate: s,
              node: e,
              rafRef: R,
              opts: { immediate: !0 },
            }),
            a());
          return;
        }
        if (!D) {
          let n = o;
          ((G.current = n),
            g({
              containerWidth: t,
              handleWidth: J,
              nextLeftWidth: 0,
              rightWidth: n,
              rightTranslate: 0,
              node: e,
              rafRef: R,
              opts: { immediate: !0 },
            }),
            a());
          return;
        }
        let s = o * m(W.current),
          {
            boundedLeftWidth: ee,
            rightWidth: c,
            boundedLeftRatio: l,
          } = h({ containerWidth: t, minLeftWidth: S, minRightWidth: C, leftWidth: s });
        ((G.current = c),
          (W.current = l),
          D && O && pe(M, Pe, l),
          g({
            containerWidth: t,
            handleWidth: J,
            nextLeftWidth: ee,
            rightWidth: c,
            rightTranslate: 0,
            node: e,
            rafRef: R,
            opts: { immediate: !0 },
          }),
          a());
        let u = R.current;
        return () => {
          (u != null && (cancelAnimationFrame(u), R.current === u && (R.current = null)),
            z.current != null && (cancelAnimationFrame(z.current), (z.current = null)));
        };
      }),
      (n[15] = N),
      (n[16] = T),
      (n[17] = y),
      (n[18] = E),
      (n[19] = J),
      (n[20] = j),
      (n[21] = A),
      (n[22] = K),
      (n[23] = k),
      (n[24] = D),
      (n[25] = O),
      (n[26] = W),
      (n[27] = S),
      (n[28] = C),
      (n[29] = M),
      (n[30] = Ve))
    : (Ve = n[30]);
  let He;
  (n[31] !== N ||
  n[32] !== T ||
  n[33] !== y ||
  n[34] !== E ||
  n[35] !== J ||
  n[36] !== j ||
  n[37] !== A ||
  n[38] !== K ||
  n[39] !== k ||
  n[40] !== Ee ||
  n[41] !== q ||
  n[42] !== D ||
  n[43] !== F ||
  n[44] !== O ||
  n[45] !== S ||
  n[46] !== C ||
  n[47] !== M
    ? ((He = [N, j, A, J, T, y, E, K, k, q, D, O, F, S, C, Ee, M]),
      (n[31] = N),
      (n[32] = T),
      (n[33] = y),
      (n[34] = E),
      (n[35] = J),
      (n[36] = j),
      (n[37] = A),
      (n[38] = K),
      (n[39] = k),
      (n[40] = Ee),
      (n[41] = q),
      (n[42] = D),
      (n[43] = F),
      (n[44] = O),
      (n[45] = S),
      (n[46] = C),
      (n[47] = M),
      (n[48] = He))
    : (He = n[48]),
    (0, _.useLayoutEffect)(Ve, He));
  let Ue;
  n[49] !== N || n[50] !== q || n[51] !== D || n[52] !== O || n[53] !== b || n[54] !== x || n[55] !== I
    ? ((Ue = (e) => {
        if (e.button !== 0) return;
        let t = L.current,
          n = oe(N, t);
        if (q || !t || !n) return;
        (e.preventDefault(), e.currentTarget.setPointerCapture(e.pointerId));
        let r = t.getBoundingClientRect();
        ((B.current = r.left), D || b?.(!0), O || x?.(!0), I(!0));
      }),
      (n[49] = N),
      (n[50] = q),
      (n[51] = D),
      (n[52] = O),
      (n[53] = b),
      (n[54] = x),
      (n[55] = I),
      (n[56] = Ue))
    : (Ue = n[56]);
  let We = Ue,
    Ge;
  n[57] !== N || n[58] !== J || n[59] !== O || n[60] !== W || n[61] !== S || n[62] !== C || n[63] !== M
    ? ((Ge = (e) => {
        let t = L.current;
        if (!t || !N || !O) return;
        let n = N * W.current;
        if (e.key === `ArrowLeft`) n -= ve;
        else if (e.key === `ArrowRight`) n += ve;
        else if (e.key === `Home`) n = 0;
        else if (e.key === `End`) n = N;
        else return;
        (e.preventDefault(), e.stopPropagation());
        let {
          boundedLeftWidth: r,
          rightWidth: i,
          boundedLeftRatio: a,
        } = h({ containerWidth: N, minLeftWidth: S, minRightWidth: C, leftWidth: n });
        ((W.current = a),
          (G.current = i),
          g({
            containerWidth: N,
            handleWidth: J,
            nextLeftWidth: r,
            node: t,
            rafRef: R,
            opts: { immediate: !0 },
          }),
          pe(M, Pe, a));
      }),
      (n[57] = N),
      (n[58] = J),
      (n[59] = O),
      (n[60] = W),
      (n[61] = S),
      (n[62] = C),
      (n[63] = M),
      (n[64] = Ge))
    : (Ge = n[64]);
  let Ke = Ge,
    qe;
  n[65] !== N ||
  n[66] !== J ||
  n[67] !== D ||
  n[68] !== F ||
  n[69] !== O ||
  n[70] !== W ||
  n[71] !== S ||
  n[72] !== C ||
  n[73] !== I ||
  n[74] !== M
    ? ((qe = () => {
        if (!F) return;
        let e = (e) => {
            e.preventDefault();
            let t = L.current,
              n = oe(N, t);
            if (!t || !n) return;
            let r = ae(e, t, B),
              {
                boundedLeftWidth: i,
                rightWidth: a,
                boundedLeftRatio: o,
              } = h({ containerWidth: n, minLeftWidth: S, minRightWidth: C, leftWidth: r });
            ((G.current = a),
              (W.current = o),
              g({
                containerWidth: n,
                handleWidth: J,
                nextLeftWidth: i,
                rightWidth: a,
                rightTranslate: 0,
                node: t,
                rafRef: R,
              }));
          },
          t = (e) => {
            e.preventDefault();
            let t = L.current,
              n = oe(N, t);
            if (!t || !n) {
              I(!1);
              return;
            }
            let r = ae(e, t, B),
              {
                boundedLeftWidth: i,
                rightWidth: a,
                boundedLeftRatio: o,
              } = h({ containerWidth: n, minLeftWidth: S, minRightWidth: C, leftWidth: r });
            ((G.current = a),
              (W.current = o),
              g({
                containerWidth: n,
                handleWidth: J,
                nextLeftWidth: i,
                rightWidth: a,
                rightTranslate: 0,
                node: t,
                rafRef: R,
                opts: { immediate: !0 },
              }),
              D && O && pe(M, Pe, o),
              (B.current = null),
              I(!1));
          },
          n = () => {
            ((B.current = null), I(!1));
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
              (B.current = null));
          }
        );
      }),
      (n[65] = N),
      (n[66] = J),
      (n[67] = D),
      (n[68] = F),
      (n[69] = O),
      (n[70] = W),
      (n[71] = S),
      (n[72] = C),
      (n[73] = I),
      (n[74] = M),
      (n[75] = qe))
    : (qe = n[75]);
  let Je;
  (n[76] !== N ||
  n[77] !== J ||
  n[78] !== D ||
  n[79] !== F ||
  n[80] !== O ||
  n[81] !== S ||
  n[82] !== C ||
  n[83] !== M
    ? ((Je = [N, J, D, F, O, S, C, M]),
      (n[76] = N),
      (n[77] = J),
      (n[78] = D),
      (n[79] = F),
      (n[80] = O),
      (n[81] = S),
      (n[82] = C),
      (n[83] = M),
      (n[84] = Je))
    : (Je = n[84]),
    (0, _.useEffect)(qe, Je));
  let Ye;
  n[85] !== N ||
  n[86] !== y ||
  n[87] !== E ||
  n[88] !== J ||
  n[89] !== k ||
  n[90] !== q ||
  n[91] !== D ||
  n[92] !== O ||
  n[93] !== W ||
  n[94] !== S ||
  n[95] !== C ||
  n[96] !== b ||
  n[97] !== x
    ? ((Ye = (e) => {
        if (e === `left`) {
          if (!D) return;
          (ie([V, H, U], z), b?.(!1));
          let e = L.current,
            t = oe(N, e);
          if (!e || !t) return;
          let n = p(t);
          ((G.current = n),
            g({
              containerWidth: t,
              handleWidth: J,
              nextLeftWidth: 0,
              rightWidth: n,
              rightTranslate: 0,
              node: e,
              rafRef: R,
              opts: { immediate: !0 },
            }));
          return;
        }
        if (!O || !k) return;
        (ie([V, H, U], z), x?.(!1));
        let t = L.current,
          n = oe(N, t);
        if (!t || !n) return;
        if (q) {
          fe({
            containerWidth: n,
            drawerMaxWidth: y,
            drawerVisibleInset: E,
            minRightWidth: C,
            isOpen: !1,
            node: t,
            rafRef: R,
          });
          return;
        }
        let r = p(n),
          i = r * m(W.current),
          { rightWidth: a, boundedLeftRatio: o } = h({
            containerWidth: n,
            minLeftWidth: S,
            minRightWidth: C,
            leftWidth: i,
          });
        W.current = o;
        let s = de(G.current > 0 ? G.current : a, r);
        ((G.current = s),
          g({
            containerWidth: n,
            handleWidth: 0,
            nextLeftWidth: n,
            rightWidth: s,
            rightTranslate: s,
            node: t,
            rafRef: R,
            opts: { immediate: !0 },
          }));
      }),
      (n[85] = N),
      (n[86] = y),
      (n[87] = E),
      (n[88] = J),
      (n[89] = k),
      (n[90] = q),
      (n[91] = D),
      (n[92] = O),
      (n[93] = W),
      (n[94] = S),
      (n[95] = C),
      (n[96] = b),
      (n[97] = x),
      (n[98] = Ye))
    : (Ye = n[98]);
  let Y = Ye,
    Xe;
  n[99] !== N ||
  n[100] !== y ||
  n[101] !== E ||
  n[102] !== J ||
  n[103] !== k ||
  n[104] !== q ||
  n[105] !== D ||
  n[106] !== O ||
  n[107] !== W ||
  n[108] !== S ||
  n[109] !== C ||
  n[110] !== b ||
  n[111] !== x ||
  n[112] !== M
    ? ((Xe = (e) => {
        let t = L.current,
          n = oe(N, t);
        if (!t || !n) return;
        if (e === `left`) {
          if (D) return;
          (ie([V, H, U], z), b?.(!0));
          let e = p(n) * m(W.current),
            {
              boundedLeftWidth: r,
              rightWidth: i,
              boundedLeftRatio: a,
            } = h({ containerWidth: n, minLeftWidth: S, minRightWidth: C, leftWidth: e });
          ((W.current = a),
            O && pe(M, Pe, a),
            (G.current = i),
            g({
              containerWidth: n,
              handleWidth: J,
              nextLeftWidth: r,
              rightWidth: i,
              rightTranslate: 0,
              node: t,
              rafRef: R,
              opts: { immediate: !0 },
            }));
          return;
        }
        if (O || !k) return;
        if ((ie([V, H, U], z), x?.(!0), q)) {
          fe({
            containerWidth: n,
            drawerMaxWidth: y,
            drawerVisibleInset: E,
            minRightWidth: C,
            isOpen: !0,
            node: t,
            rafRef: R,
          });
          return;
        }
        let r = p(n) * m(W.current),
          {
            boundedLeftWidth: i,
            rightWidth: a,
            boundedLeftRatio: o,
          } = h({ containerWidth: n, minLeftWidth: S, minRightWidth: C, leftWidth: r });
        ((W.current = o),
          D && pe(M, Pe, o),
          (G.current = a),
          g({
            containerWidth: n,
            handleWidth: J,
            nextLeftWidth: i,
            rightWidth: a,
            rightTranslate: 0,
            node: t,
            rafRef: R,
            opts: { immediate: !0 },
          }));
      }),
      (n[99] = N),
      (n[100] = y),
      (n[101] = E),
      (n[102] = J),
      (n[103] = k),
      (n[104] = q),
      (n[105] = D),
      (n[106] = O),
      (n[107] = W),
      (n[108] = S),
      (n[109] = C),
      (n[110] = b),
      (n[111] = x),
      (n[112] = M),
      (n[113] = Xe))
    : (Xe = n[113]);
  let X = Xe,
    Ze;
  n[114] !== Y || n[115] !== X || n[116] !== D || n[117] !== O
    ? ((Ze = (e) => {
        if (e === `left`) {
          if (D) {
            Y(`left`);
            return;
          }
          X(`left`);
          return;
        }
        if (O) {
          Y(`right`);
          return;
        }
        X(`right`);
      }),
      (n[114] = Y),
      (n[115] = X),
      (n[116] = D),
      (n[117] = O),
      (n[118] = Ze))
    : (Ze = n[118]);
  let Qe = Ze,
    $e;
  n[119] !== Y || n[120] !== j || n[121] !== A || n[122] !== X || n[123] !== F || n[124] !== Qe
    ? (($e = { isLeftOpen: j, isRightOpen: A, isResizing: F, collapse: Y, expand: X, toggle: Qe }),
      (n[119] = Y),
      (n[120] = j),
      (n[121] = A),
      (n[122] = X),
      (n[123] = F),
      (n[124] = Qe),
      (n[125] = $e))
    : ($e = n[125]);
  let et = $e,
    tt = k && !q && j && A,
    nt = `min(calc(100% - ${w}px), max(0px, ${j && A ? `calc(var(--split-left-width, 100%) - (${w}px / 2))` : `calc(100% - (${w}px / 2))`}))`,
    rt = F && `cursor-col-resize`,
    Z;
  n[126] !== s || n[127] !== rt
    ? ((Z = r(`group/split-view relative h-full w-full min-w-0 overflow-hidden`, rt, s)),
      (n[126] = s),
      (n[127] = rt),
      (n[128] = Z))
    : (Z = n[128]);
  let it = `${i}-left`,
    at = !j && `pointer-events-none`,
    Q;
  n[129] !== c || n[130] !== at
    ? ((Q = r(
        `absolute inset-y-0 left-0 min-w-0 overflow-hidden [will-change:width]`,
        at,
        `duration-relaxed ease-basic`,
        c,
      )),
      (n[129] = c),
      (n[130] = at),
      (n[131] = Q))
    : (Q = n[131]);
  let ot = F ? `none` : `width`,
    st;
  n[132] === ot
    ? (st = n[133])
    : ((st = { width: `var(--split-left-width, 100%)`, contain: `strict`, transitionProperty: ot }),
      (n[132] = ot),
      (n[133] = st));
  let ct = j ? `visible` : `hidden`,
    lt = `${i}-left`,
    ut;
  n[134] !== a || n[135] !== ct || n[136] !== lt
    ? ((ut = (0, v.jsx)(`div`, {
        className: `h-full min-w-0`,
        children: (0, v.jsx)(_.Activity, { mode: ct, name: lt, children: a }),
      })),
      (n[134] = a),
      (n[135] = ct),
      (n[136] = lt),
      (n[137] = ut))
    : (ut = n[137]);
  let dt;
  n[138] !== it || n[139] !== Q || n[140] !== st || n[141] !== ut
    ? ((dt = (0, v.jsx)(`div`, { ref: V, id: it, className: Q, style: st, children: ut })),
      (n[138] = it),
      (n[139] = Q),
      (n[140] = st),
      (n[141] = ut),
      (n[142] = dt))
    : (dt = n[142]);
  let ft;
  n[143] !== N ||
  n[144] !== j ||
  n[145] !== u ||
  n[146] !== Ke ||
  n[147] !== nt ||
  n[148] !== We ||
  n[149] !== w ||
  n[150] !== k ||
  n[151] !== i ||
  n[152] !== Ae ||
  n[153] !== Te ||
  n[154] !== q ||
  n[155] !== tt ||
  n[156] !== F ||
  n[157] !== S ||
  n[158] !== C
    ? ((ft =
        k && !q && j
          ? (0, v.jsx)(`div`, {
              ref: H,
              role: `separator`,
              "aria-controls": `${i}-left`,
              "aria-hidden": !tt,
              "aria-label": Te.formatMessage({
                id: `splitView.resize`,
                defaultMessage: `Resize panels`,
                description: `Accessible name for the split-view resize handle`,
              }),
              "aria-orientation": `vertical`,
              "aria-valuemax": le(N, S, C),
              "aria-valuemin": Math.min(S, N),
              "aria-valuenow": ue(N * Ae, N, S, C),
              className: r(
                `group absolute inset-y-0 z-20 select-none touch-none`,
                `cursor-col-resize duration-relaxed ease-basic [will-change:left]`,
                `focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-ring`,
                tt ? `opacity-100` : `opacity-0 pointer-events-none`,
                u,
              ),
              style: { width: `${w}px`, left: nt, transitionProperty: F ? `none` : `left, opacity` },
              onKeyDown: Ke,
              onPointerDown: We,
              tabIndex: tt ? 0 : -1,
              children: (0, v.jsx)(`div`, {
                className: r(
                  `pointer-events-none absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-border transition-colors duration-relaxed ease-basic`,
                  F
                    ? `bg-text/25`
                    : `group-hover:bg-text/25 group-active:bg-text/25 group-focus-visible:bg-text/25`,
                ),
              }),
            })
          : null),
      (n[143] = N),
      (n[144] = j),
      (n[145] = u),
      (n[146] = Ke),
      (n[147] = nt),
      (n[148] = We),
      (n[149] = w),
      (n[150] = k),
      (n[151] = i),
      (n[152] = Ae),
      (n[153] = Te),
      (n[154] = q),
      (n[155] = tt),
      (n[156] = F),
      (n[157] = S),
      (n[158] = C),
      (n[159] = ft))
    : (ft = n[159]);
  let pt = q
      ? `z-30 shadow-[-16px_0_32px_rgba(0,0,0,0.28)] electron:bg-surface electron:elevation-prominent windows:rounded-tl-lg`
      : `z-10`,
    mt = A ? `opacity-100` : `opacity-0`,
    ht = !A && `pointer-events-none`,
    gt;
  n[160] !== l || n[161] !== pt || n[162] !== mt || n[163] !== ht
    ? ((gt = r(
        `absolute inset-y-0 min-w-0 overflow-hidden [will-change:transform]`,
        pt,
        mt,
        ht,
        `duration-relaxed ease-basic`,
        l,
      )),
      (n[160] = l),
      (n[161] = pt),
      (n[162] = mt),
      (n[163] = ht),
      (n[164] = gt))
    : (gt = n[164]);
  let _t = F ? `none` : `width, transform, opacity`,
    vt;
  n[165] === _t
    ? (vt = n[166])
    : ((vt = {
        width: `var(--split-right-width, 0px)`,
        minWidth: 0,
        maxWidth: `var(--split-right-width, 0px)`,
        right: 0,
        transform: `translateX(var(--split-right-translate, 0px))`,
        contain: `strict`,
        transitionProperty: _t,
      }),
      (n[165] = _t),
      (n[166] = vt));
  let yt;
  n[167] !== A || n[168] !== k || n[169] !== i || n[170] !== o
    ? ((yt = k
        ? (0, v.jsx)(`div`, {
            className: `h-full min-w-0`,
            children: (0, v.jsx)(_.Activity, {
              mode: A ? `visible` : `hidden`,
              name: `${i}-right`,
              children: (0, v.jsx)(`div`, {
                className: r(
                  `h-full w-full min-w-0 transition-opacity duration-relaxed ease-basic`,
                  A ? `opacity-100` : `opacity-0`,
                ),
                style: { transitionDelay: A ? `${be}ms` : `0ms` },
                children: o,
              }),
            }),
          })
        : null),
      (n[167] = A),
      (n[168] = k),
      (n[169] = i),
      (n[170] = o),
      (n[171] = yt))
    : (yt = n[171]);
  let bt;
  n[172] !== gt || n[173] !== vt || n[174] !== yt
    ? ((bt = (0, v.jsx)(`div`, { ref: U, className: gt, style: vt, children: yt })),
      (n[172] = gt),
      (n[173] = vt),
      (n[174] = yt),
      (n[175] = bt))
    : (bt = n[175]);
  let $;
  n[176] !== Z || n[177] !== dt || n[178] !== ft || n[179] !== bt
    ? (($ = (0, v.jsxs)(`div`, { ref: L, className: Z, children: [dt, ft, bt] })),
      (n[176] = Z),
      (n[177] = dt),
      (n[178] = ft),
      (n[179] = bt),
      (n[180] = $))
    : ($ = n[180]);
  let xt;
  return (
    n[181] !== et || n[182] !== $
      ? ((xt = (0, v.jsx)(xe.Provider, { value: et, children: $ })),
        (n[181] = et),
        (n[182] = $),
        (n[183] = xt))
      : (xt = n[183]),
    xt
  );
}
function ne() {
  let e = (0, me.c)(2),
    [t, n] = (0, _.useState)(y.version),
    r,
    i;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = () => {}), (i = []), (e[0] = r), (e[1] = i))
      : ((r = e[0]), (i = e[1])),
    (0, _.useEffect)(r, i),
    t
  );
}
function re(e, t) {
  for (let t of e) t.current?.style.setProperty(`transition`, `none`);
  (t.current != null && cancelAnimationFrame(t.current),
    (t.current = requestAnimationFrame(() => {
      t.current = requestAnimationFrame(() => {
        for (let t of e) t.current?.style.removeProperty(`transition`);
        t.current = null;
      });
    })));
}
function ie(e, t) {
  t.current != null && (cancelAnimationFrame(t.current), (t.current = null));
  for (let t of e) t.current?.style.removeProperty(`transition`);
}
function ae(e, t, n) {
  let r = n.current;
  return (r ?? ((r = t.getBoundingClientRect().left), (n.current = r)), e.clientX - r);
}
function p(e) {
  return Math.max(0, e);
}
function oe(e, t) {
  return e || (t?.getBoundingClientRect().width ?? 0);
}
function m(e) {
  return Math.min(Math.max(e, 0), 1);
}
function se(e) {
  return e == null ? _e : m(e / 100);
}
function ce(e, t) {
  return e === 0 ? 0 : m(t / e);
}
function le(e, t, n) {
  let r = p(e),
    i = r - n;
  return i <= t ? Math.max(0, r) : Math.max(t, i);
}
function ue(e, t, n, r) {
  let i = p(t);
  if (i === 0) return 0;
  let a = Math.min(n, i),
    o = le(t, n, r);
  return o <= a ? Math.max(0, i) : Math.min(Math.max(e, a), o);
}
function de(e, t) {
  return Math.min(Math.max(e, 0), t);
}
function h({ containerWidth: e, minLeftWidth: t, minRightWidth: n, leftWidth: r }) {
  let i = p(e),
    a = ue(r, e, t, n),
    o = de(Math.max(0, i - a), i);
  return { openAvailableWidth: i, boundedLeftWidth: a, boundedLeftRatio: ce(i, a), rightWidth: o };
}
function fe({
  containerWidth: e,
  drawerMaxWidth: t,
  drawerVisibleInset: n,
  minRightWidth: r,
  isOpen: i,
  node: a,
  rafRef: o,
}) {
  let s = u({ containerWidth: e, maxWidth: t, minWidth: r, visibleInset: n });
  g({
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
function pe(e, t, n) {
  t.current !== n && (c(e, n), (t.current = n));
}
function g({
  containerWidth: e,
  handleWidth: t,
  nextLeftWidth: n,
  rightWidth: r,
  rightTranslate: i,
  node: a,
  rafRef: o,
  opts: s,
}) {
  let ee = p(e),
    c = Math.min(Math.max(n, 0), ee),
    l = Math.max(0, ee - c),
    u = de(r ?? l, ee),
    d = de(i ?? 0, u),
    f = () => {
      (a.style.setProperty(`--split-left-width`, `${c}px`),
        a.style.setProperty(`--split-handle-width`, `${t}px`),
        a.style.setProperty(`--split-right-width`, `${u}px`),
        a.style.setProperty(`--split-right-translate`, `${d}px`),
        a.querySelector(`:scope > [role="separator"]`)?.setAttribute(`aria-valuenow`, String(c)));
    };
  if ((o.current != null && (cancelAnimationFrame(o.current), (o.current = null)), s?.immediate)) {
    f();
    return;
  }
  o.current = requestAnimationFrame(f);
}
var me, _, v, he, ge, _e, ve, ye, be, y, xe;
function Se() {
  return (Se = e(() => {
    ((me = a()),
      n(),
      (_ = s()),
      i(),
      l(),
      f(),
      (v = o()),
      (he = 12),
      (ge = 160),
      (_e = 0.5),
      (ve = 10),
      (ye = 720),
      (be = 150),
      (y = { version: 0, listeners: new Set() }),
      (xe = (0, _.createContext)(null)));
  }))();
}
export { Se as n, te as t };
//# sourceMappingURL=split-view-9cde6d2314a9.js.map
