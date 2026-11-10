import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Ft as n,
  $bt as r,
  A3t as i,
  AF as a,
  Amn as o,
  B6t as s,
  BRt as c,
  Cpn as l,
  Eln as u,
  F3t as d,
  HLt as f,
  KX as p,
  O3t as m,
  OL as h,
  QFt as g,
  Qbt as _,
  Rpn as v,
  SFt as ee,
  Spn as y,
  TFt as te,
  VLt as b,
  YFt as ne,
  YRt as re,
  ZFt as ie,
  _zt as x,
  aR as ae,
  bmn as S,
  cFt as oe,
  dI as C,
  gRt as se,
  hmn as ce,
  hz as w,
  kF as le,
  kL as ue,
  kmn as T,
  lI as de,
  mz as fe,
  nFt as pe,
  nln as E,
  oR as me,
  pmn as he,
  qX as ge,
  vit as _e,
  vzt as D,
  wtn as O,
  xRt as k,
  xmn as ve,
  yit as A,
  yzt as ye,
  zpn as j,
} from "./app-initial-f094ef01c64d.js";
import {
  $b as be,
  $y as xe,
  Qb as Se,
  Qo as Ce,
  Xy as we,
  Zy as Te,
  ab as Ee,
  cb as De,
  db as Oe,
  eb as M,
  ex as ke,
  fy as N,
  ib as Ae,
  nb as je,
  ns as Me,
  nx as Ne,
  ob as Pe,
  py as Fe,
  rb as Ie,
  rs as Le,
  rx as Re,
  sb as ze,
  tb as Be,
  ts as Ve,
  tx as P,
} from "./app-primary-4c40d73a1074.js";
import { n as He, t as Ue } from "./messages-e7d64bad4efd.js";
function We(e) {
  let t = (0, qe.c)(12),
    { isVisible: n, onClick: r, onWheel: i } = e,
    a = !n,
    o =
      n &&
      `group-hover/floating-composer:pointer-events-auto group-hover/floating-composer:translate-y-0 group-hover/floating-composer:delay-75 group-focus-within/floating-composer:pointer-events-auto group-focus-within/floating-composer:translate-y-0 group-focus-within/floating-composer:delay-0 focus-visible:pointer-events-auto focus-visible:translate-y-0 focus-visible:delay-0`,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = v(
        `composer-surface-chrome pointer-events-none absolute top-full left-1/2 z-0 mt-0.5 flex h-3 w-8 -translate-x-1/2 -translate-y-4 origin-top cursor-interaction items-center justify-center rounded-full bg-surface-elevated-secondary text-tertiary transition-[color,scale,translate] duration-basic ease-enter-snappy before:absolute before:-inset-x-2 before:-top-1 before:h-8 before:content-[''] hover:scale-105 hover:text-default focus:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95 motion-reduce:transition-none`,
        o,
      )),
      (t[0] = o),
      (t[1] = s));
  let c = !n,
    u;
  t[2] === i ? (u = t[3]) : ((u = (e) => Ke(e, `hide`, i)), (t[2] = i), (t[3] = u));
  let d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, F.jsx)(_e, { className: `icon-xxs`, "aria-hidden": !0 })), (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, F.jsx)(`span`, {
        className: `sr-only`,
        children: (0, F.jsx)(l, { ...Ue.hideFloatingComposer }),
      })),
      (t[5] = f))
    : (f = t[5]);
  let p;
  return (
    t[6] !== r || t[7] !== a || t[8] !== s || t[9] !== c || t[10] !== u
      ? ((p = (0, F.jsxs)(`button`, {
          "aria-hidden": a,
          className: s,
          inert: c,
          type: `button`,
          onClick: r,
          onWheel: u,
          children: [d, f],
        })),
        (t[6] = r),
        (t[7] = a),
        (t[8] = s),
        (t[9] = c),
        (t[10] = u),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
function Ge(e) {
  let t = (0, qe.c)(17),
    {
      isActive: n,
      isVisible: r,
      onClick: i,
      onPointerEnter: a,
      onPointerLeave: o,
      onTransitionEnd: s,
      onWheel: c,
    } = e,
    u = n !== void 0 && n,
    d = !r,
    f = r && u ? `pointer-events-auto translate-y-0` : `pointer-events-none translate-y-full`,
    p = r && !u ? `duration-relaxed ease-(--cubic-exit)` : `duration-basic ease-enter-snappy`,
    m =
      r &&
      `group-focus-within/floating-composer-reveal-zone:pointer-events-auto group-focus-within/floating-composer-reveal-zone:translate-y-0 focus-visible:pointer-events-auto focus-visible:translate-y-0`,
    h;
  t[0] !== f || t[1] !== p || t[2] !== m
    ? ((h = v(
        `group/floating-composer-reveal composer-surface-chrome relative flex h-7 w-15 origin-bottom cursor-interaction items-center justify-center rounded-t-2xl bg-surface-elevated-secondary text-codex-description transition-[height,scale,translate] hover:h-8 focus:outline-none focus-visible:h-8 focus-visible:ring-2 focus-visible:ring-ring active:scale-95 motion-reduce:transition-none`,
        f,
        p,
        m,
      )),
      (t[0] = f),
      (t[1] = p),
      (t[2] = m),
      (t[3] = h))
    : (h = t[3]);
  let g = !r,
    _;
  t[4] === c ? (_ = t[5]) : ((_ = (e) => Ke(e, `reveal`, c)), (t[4] = c), (t[5] = _));
  let ee;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, F.jsx)(ae, {
        "aria-hidden": !0,
        className: `icon-xs shrink-0 opacity-60 transition-[color,rotate] duration-relaxed ease-enter-snappy group-hover/floating-composer-reveal:rotate-90 group-hover/floating-composer-reveal:text-secondary group-hover/floating-composer-reveal:opacity-100 group-focus-visible/floating-composer-reveal:rotate-90 group-focus-visible/floating-composer-reveal:text-secondary group-focus-visible/floating-composer-reveal:opacity-100 motion-reduce:transition-none`,
      })),
      (t[6] = ee))
    : (ee = t[6]);
  let y;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, F.jsx)(`span`, {
        className: `sr-only`,
        children: (0, F.jsx)(l, { ...Ue.showFloatingComposer }),
      })),
      (t[7] = y))
    : (y = t[7]);
  let te;
  return (
    t[8] !== i ||
    t[9] !== a ||
    t[10] !== o ||
    t[11] !== s ||
    t[12] !== d ||
    t[13] !== h ||
    t[14] !== g ||
    t[15] !== _
      ? ((te = (0, F.jsxs)(`button`, {
          "aria-hidden": d,
          className: h,
          "data-testid": `floating-composer-reveal-handle`,
          inert: g,
          type: `button`,
          onClick: i,
          onPointerEnter: a,
          onPointerLeave: o,
          onTransitionEnd: s,
          onWheel: _,
          children: [ee, y],
        })),
        (t[8] = i),
        (t[9] = a),
        (t[10] = o),
        (t[11] = s),
        (t[12] = d),
        (t[13] = h),
        (t[14] = g),
        (t[15] = _),
        (t[16] = te))
      : (te = t[16]),
    te
  );
}
function Ke(e, t, n) {
  !(t === `hide` ? e.deltaY < 0 : e.deltaY > 0) ||
    Math.abs(e.deltaY) <= Math.abs(e.deltaX) ||
    (e.stopPropagation(), n?.(e));
}
var qe,
  F,
  Je = e(() => {
    ((qe = T()), j(), y(), He(), A(), me(), (F = ce()));
  });
function Ye(e) {
  let t = (0, L.c)(19),
    {
      enabled: n,
      shouldRenderOverlay: r,
      isComposerPeeked: i,
      interactiveContentRef: a,
      composerGestureSurfaceRef: o,
      latestTurnContentRef: s,
      isCompact: c,
      hasComposerFocus: l,
      onLatestTurnExpandedChange: u,
    } = e,
    [d] = (0, R.useState)(I),
    f;
  t[0] !== o ||
  t[1] !== n ||
  t[2] !== d ||
  t[3] !== l ||
  t[4] !== a ||
  t[5] !== c ||
  t[6] !== i ||
  t[7] !== s ||
  t[8] !== u
    ? ((f = (e) => {
        d.handleWheel(e, {
          enabled: n && !i,
          interactiveContent: a.current,
          composerGestureSurface: o.current,
          latestTurnContent: s.current,
          isCompact: c,
          hasComposerFocus: l,
          onLatestTurnExpandedChange: u,
        });
      }),
      (t[0] = o),
      (t[1] = n),
      (t[2] = d),
      (t[3] = l),
      (t[4] = a),
      (t[5] = c),
      (t[6] = i),
      (t[7] = s),
      (t[8] = u),
      (t[9] = f))
    : (f = t[9]);
  let p = (0, R.useEffectEvent)(f),
    m;
  t[10] !== n || t[11] !== p || t[12] !== a || t[13] !== r
    ? ((m = () => {
        let e = a.current;
        if (!n || !r || e == null) return;
        let t = (e) => {
            p(e);
          },
          i = e.ownerDocument;
        return (
          i.addEventListener(`wheel`, t, { capture: !0, passive: !1 }),
          () => {
            i.removeEventListener(`wheel`, t, !0);
          }
        );
      }),
      (t[10] = n),
      (t[11] = p),
      (t[12] = a),
      (t[13] = r),
      (t[14] = m))
    : (m = t[14]);
  let h;
  return (
    t[15] !== n || t[16] !== a || t[17] !== r
      ? ((h = [n, a, r]), (t[15] = n), (t[16] = a), (t[17] = r), (t[18] = h))
      : (h = t[18]),
    (0, R.useEffect)(m, h),
    d
  );
}
function I() {
  return new Qe();
}
var L,
  R,
  Xe,
  Ze,
  Qe,
  $e = e(() => {
    ((L = T()),
      (R = t(o(), 1)),
      Fe(),
      (Xe = 400),
      (Ze = 150),
      (Qe = class {
        swipeTracker = new N();
        beginSwipe(e, t) {
          this.swipeTracker.begin(e, t === `peek` ? Xe : Ze);
        }
        handleWheel(
          e,
          {
            enabled: t,
            interactiveContent: n,
            composerGestureSurface: r,
            latestTurnContent: i,
            isCompact: a,
            hasComposerFocus: o,
            onLatestTurnExpandedChange: s,
          },
        ) {
          if (
            !t ||
            Math.abs(e.deltaY) <= Math.abs(e.deltaX) ||
            !(e.target instanceof Element) ||
            n == null ||
            r == null
          )
            return;
          let c = r.contains(e.target)
            ? e.target
            : n.ownerDocument.elementFromPoint?.(e.clientX, e.clientY);
          if (!(c instanceof Element) || !r.contains(c) || i?.contains(c)) return;
          let l = r.querySelector(`[data-codex-composer]`),
            u = l?.parentElement;
          if (a) {
            e.deltaY > 0 &&
              l != null &&
              (e.preventDefault(), e.stopPropagation(), this.beginSwipe(e, `composer`), l.focus());
            return;
          }
          if (this.swipeTracker.isContinuation(e)) {
            (e.preventDefault(), e.stopPropagation());
            return;
          }
          o &&
            u != null &&
            u.scrollHeight <= u.clientHeight &&
            s != null &&
            (e.preventDefault(), e.stopPropagation(), s(e.deltaY > 0));
        }
      }));
  });
function et(e, t) {
  let n = (0, tt.c)(3),
    r;
  n[0] !== e || n[1] !== t
    ? ((r = () => {
        if (e == null || t == null) return `ready`;
        let n = p.getSnapshot(e, t);
        return n == null ||
          n.tabType !== O.WEB ||
          n.url.trim().length === 0 ||
          n.isSuspended ||
          n.securityState != null
          ? `unavailable`
          : n.isLoading
            ? `loading`
            : `ready`;
      }),
      (n[0] = e),
      (n[1] = t),
      (n[2] = r))
    : (r = n[2]);
  let i = r;
  return (0, z.useSyncExternalStore)(p.subscribe, i, i);
}
var tt,
  z,
  nt = e(() => {
    ((tt = T()), s(), (z = t(o(), 1)), ge());
  }),
  B,
  rt,
  it,
  V = e(() => {
    ((B = `_Overlay_cm04e_1`),
      (rt = `_composerOverlayEnter_cm04e_1`),
      (it = { Overlay: B, composerOverlayEnter: rt }));
  });
function at(e) {
  let t = (0, ut.c)(237),
    {
      children: r,
      expandComposerContentImmediately: a,
      forceExpanded: o,
      latestTurnContentRef: s,
      reserveFullComposerHeight: c,
      onLatestTurnExpandedChange: l,
    } = e,
    p = a !== void 0 && a,
    m = o !== void 0 && o,
    h = c !== void 0 && c,
    g = i(se),
    ee = (0, H.useContext)(de),
    y = ue(),
    b = ye(),
    x = (0, H.useContext)(le),
    ae = (0, H.useContext)(Me),
    S = d(te.activeTab$),
    oe;
  t[0] === S ? (oe = t[1]) : ((oe = ie(S)), (t[0] = S), (t[1] = oe));
  let C = oe,
    ce = d(Ne),
    w = C != null && ce === C,
    T;
  t[2] === g ? (T = t[3]) : ((T = ne(g)), (t[2] = g), (t[3] = T));
  let E = T,
    me = et(E, C),
    he = me === `ready`,
    ge = d(f),
    _e;
  t[4] !== S || t[5] !== ge
    ? ((_e = n(S) && ge), (t[4] = S), (t[5] = ge), (t[6] = _e))
    : (_e = t[6]);
  let O = _e,
    k = d(O ? Re : !1),
    A = d(Ie),
    j = d(ze),
    M = O && he && j && !A && !k,
    N = d(Pe),
    Fe = d(Ae),
    Le = (0, H.useRef)(null),
    Ve = (0, H.useRef)(null),
    P = (0, H.useRef)(null),
    He = (0, H.useRef)(null),
    Ue = (0, H.useRef)(null),
    Ke = (0, H.useRef)(null),
    qe = s ?? Ke,
    F = (0, H.useRef)(!1),
    Je = (0, H.useRef)(k),
    I = (0, H.useRef)(null),
    L = (0, H.useRef)(null),
    R = (0, H.useRef)(null),
    [Xe, Ze] = (0, H.useState)(0),
    [Qe, $e] = (0, H.useState)(null),
    [tt, z] = (0, H.useState)(!1),
    [nt, B] = (0, H.useState)(!1),
    [rt, V] = (0, H.useState)(!0),
    at;
  t[7] === C
    ? (at = t[8])
    : ((at = { browserTabId: C, shouldAnimate: !0 }), (t[7] = C), (t[8] = at));
  let [mt, ht] = (0, H.useState)(at),
    gt = mt.browserTabId !== C,
    W = mt.shouldAnimate && !gt;
  gt && (ht({ browserTabId: C, shouldAnimate: !1 }), V(!0));
  let _t = l != null,
    vt = O && he,
    G = !O || !he || A || k,
    yt;
  t[9] !== N || t[10] !== G
    ? ((yt = lt(G, N)), (t[9] = N), (t[10] = G), (t[11] = yt))
    : (yt = t[11]);
  let K = yt,
    bt = M ? 16 : G ? 118 + Xe : 0,
    q = K !== `hidden` || M,
    J = K === `visible`,
    Y;
  t[12] !== m || t[13] !== w || t[14] !== k || t[15] !== O
    ? ((Y = `default`),
      O && (Y = m || w || k ? `expanded` : `compact`),
      (t[12] = m),
      (t[13] = w),
      (t[14] = k),
      (t[15] = O),
      (t[16] = Y))
    : (Y = t[16]);
  let [xt, St] = (0, H.useState)(Y);
  xt !== Y && (St(Y), xt === `compact` && Y === `expanded` && !y && W && !p && V(!1));
  let Ct = K === `entering` || K === `exiting`,
    wt = Ct ? Fe : bt,
    X = O ? 0 : wt,
    Tt = O ? `0px` : `${118 - Math.min(wt, 118)}px`,
    Et;
  t[17] !== X || t[18] !== x?.style
    ? ((Et = () => {
        x?.style.setProperty(Te, `${X}px`);
      }),
      (t[17] = X),
      (t[18] = x?.style),
      (t[19] = Et))
    : (Et = t[19]);
  let Dt = (0, H.useEffectEvent)(Et),
    Ot;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ot = () => {
        R.current != null && (window.clearTimeout(R.current), (R.current = null));
      }),
      (t[20] = Ot))
    : (Ot = t[20]);
  let kt = Ot,
    At;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((At = () => {
        (kt(),
          B(!0),
          (R.current = window.setTimeout(() => {
            ((R.current = null), z(!1), B(!1));
          }, pt)));
      }),
      (t[21] = At))
    : (At = t[21]);
  let jt = At,
    Mt;
  t[22] === l
    ? (Mt = t[23])
    : ((Mt = () => {
        l?.(!1);
      }),
      (t[22] = l),
      (t[23] = Mt));
  let Nt = (0, H.useEffectEvent)(Mt),
    Pt;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Pt = (e, t) => {
        if (t) {
          (kt(), B(!1), $e(e));
          return;
        }
        ($e(null), z(!1));
      }),
      (t[24] = Pt))
    : (Pt = t[24]);
  let Ft = (0, H.useEffectEvent)(Pt),
    It;
  t[25] !== M || t[26] !== x || t[27] !== h || t[28] !== g || t[29] !== b
    ? ((It = () => {
        let e = Le.current,
          t = x?.getBoundingClientRect();
        if (t != null && e != null) {
          let n = {
            height: `${D(t.height, b)}px`,
            left: `${D(t.left, b)}px`,
            top: `${D(t.top, b)}px`,
            width: `${D(t.width, b)}px`,
          };
          (Object.assign(e.style, n), Ve.current != null && Object.assign(Ve.current.style, n));
        }
        let n = M ? null : P.current?.getBoundingClientRect(),
          r = t == null || n == null ? 0 : Math.max(0, D(t.right - n.right, b));
        g.get(Ee) !== r && g.set(Ee, r);
        let i =
            M || P.current == null ? null : P.current.querySelector(ft)?.getBoundingClientRect(),
          a = i == null ? 0 : Math.max(0, Math.ceil(D(i.height, b)));
        Ze(Math.max(a, h && n != null ? Math.ceil(D(n.height, b)) - 102 : 0));
      }),
      (t[25] = M),
      (t[26] = x),
      (t[27] = h),
      (t[28] = g),
      (t[29] = b),
      (t[30] = It))
    : (It = t[30]);
  let Z = It,
    Lt,
    Rt;
  (t[31] === g
    ? ((Lt = t[32]), (Rt = t[33]))
    : ((Lt = () => () => {
        (((g.value.routeKind !== `home` && g.value.routeKind !== `new-thread-panel`) ||
          g.get(re) == null) &&
          g.set(Ne, null),
          xe(g),
          g.get(Ae) !== 0 && g.set(Ae, 0),
          g.get(Ee) !== 0 && g.set(Ee, 0),
          g.get(je) && g.set(je, !1),
          I.current != null && window.cancelAnimationFrame(I.current),
          L.current != null && window.cancelAnimationFrame(L.current),
          R.current != null && window.clearTimeout(R.current));
      }),
      (Rt = [g]),
      (t[31] = g),
      (t[32] = Lt),
      (t[33] = Rt)),
    (0, H.useLayoutEffect)(Lt, Rt));
  let zt, Bt;
  (t[34] !== me || t[35] !== j || t[36] !== A || t[37] !== O || t[38] !== g
    ? ((zt = () => {
        !O || me !== `unavailable` || !j || A || Be(g, { prefersReducedMotion: !0 });
      }),
      (Bt = [me, j, A, g, O]),
      (t[34] = me),
      (t[35] = j),
      (t[36] = A),
      (t[37] = O),
      (t[38] = g),
      (t[39] = zt),
      (t[40] = Bt))
    : ((zt = t[39]), (Bt = t[40])),
    (0, H.useLayoutEffect)(zt, Bt));
  let Vt, Ht;
  (t[41] !== C || t[42] !== O
    ? ((Vt = () => {
        if (!O || C == null) return;
        let e = He.current,
          t = e?.ownerDocument.activeElement;
        t instanceof HTMLElement &&
          e?.contains(t) &&
          ((F.current = !0), t.blur(), (F.current = !1));
      }),
      (Ht = [C, O]),
      (t[41] = C),
      (t[42] = O),
      (t[43] = Vt),
      (t[44] = Ht))
    : ((Vt = t[43]), (Ht = t[44])),
    (0, H.useLayoutEffect)(Vt, Ht));
  let Ut;
  t[45] !== w || t[46] !== O || t[47] !== G
    ? ((Ut = () => {
        O && w && G && pe();
      }),
      (t[45] = w),
      (t[46] = O),
      (t[47] = G),
      (t[48] = Ut))
    : (Ut = t[48]);
  let Wt = (0, H.useEffectEvent)(Ut),
    Gt;
  t[49] !== k || t[50] !== Wt
    ? ((Gt = () => {
        let e = Je.current;
        ((Je.current = k), e && !k && Wt());
      }),
      (t[49] = k),
      (t[50] = Wt),
      (t[51] = Gt))
    : (Gt = t[51]);
  let Kt;
  (t[52] === k ? (Kt = t[53]) : ((Kt = [k]), (t[52] = k), (t[53] = Kt)), (0, H.useEffect)(Gt, Kt));
  let qt, Jt;
  (t[54] !== x || t[55] !== g || t[56] !== q || t[57] !== Z
    ? ((qt = () => {
        if (!q) {
          g.get(Ee) !== 0 && g.set(Ee, 0);
          return;
        }
        Z();
        let e = P.current;
        if (e == null || typeof ResizeObserver > `u`) return;
        let t = new ResizeObserver(Z);
        return (
          t.observe(e),
          x != null && t.observe(x),
          window.addEventListener(`resize`, Z),
          () => {
            (t.disconnect(), window.removeEventListener(`resize`, Z));
          }
        );
      }),
      (Jt = [x, g, q, Z]),
      (t[54] = x),
      (t[55] = g),
      (t[56] = q),
      (t[57] = Z),
      (t[58] = qt),
      (t[59] = Jt))
    : ((qt = t[58]), (Jt = t[59])),
    (0, H.useLayoutEffect)(qt, Jt));
  let Yt;
  t[60] !== Dt || t[61] !== x || t[62] !== q
    ? ((Yt = () => {
        if (!(!q || x == null))
          return (
            x.style.setProperty(we, `102px`),
            Dt(),
            () => {
              (x.style.removeProperty(we), x.style.removeProperty(Te));
            }
          );
      }),
      (t[60] = Dt),
      (t[61] = x),
      (t[62] = q),
      (t[63] = Yt))
    : (Yt = t[63]);
  let Xt;
  (t[64] !== x || t[65] !== q
    ? ((Xt = [x, q]), (t[64] = x), (t[65] = q), (t[66] = Xt))
    : (Xt = t[66]),
    (0, H.useLayoutEffect)(Yt, Xt));
  let Zt, Qt;
  (t[67] !== A || t[68] !== O || t[69] !== N || t[70] !== g
    ? ((Zt = () => {
        O || (N !== `entering` && N !== `exiting`) || (xe(g), g.set(Pe, A ? `visible` : `hidden`));
      }),
      (Qt = [A, O, N, g]),
      (t[67] = A),
      (t[68] = O),
      (t[69] = N),
      (t[70] = g),
      (t[71] = Zt),
      (t[72] = Qt))
    : ((Zt = t[71]), (Qt = t[72])),
    (0, H.useLayoutEffect)(Zt, Qt));
  let $t, en;
  (t[73] !== Ct || t[74] !== g || t[75] !== bt
    ? (($t = () => {
        Ct || De(g, bt);
      }),
      (en = [Ct, g, bt]),
      (t[73] = Ct),
      (t[74] = g),
      (t[75] = bt),
      (t[76] = $t),
      (t[77] = en))
    : (($t = t[76]), (en = t[77])),
    (0, H.useLayoutEffect)($t, en));
  let tn, nn;
  (t[78] !== X || t[79] !== x || t[80] !== q
    ? ((tn = () => {
        !q || x == null || x.style.setProperty(Te, `${X}px`);
      }),
      (nn = [X, x, q]),
      (t[78] = X),
      (t[79] = x),
      (t[80] = q),
      (t[81] = tn),
      (t[82] = nn))
    : ((tn = t[81]), (nn = t[82])),
    (0, H.useLayoutEffect)(tn, nn));
  let rn = Y === `compact`,
    an;
  t[83] !== w ||
  t[84] !== M ||
  t[85] !== O ||
  t[86] !== qe ||
  t[87] !== l ||
  t[88] !== q ||
  t[89] !== rn
    ? ((an = {
        enabled: O,
        shouldRenderOverlay: q,
        isComposerPeeked: M,
        interactiveContentRef: He,
        composerGestureSurfaceRef: Ue,
        latestTurnContentRef: qe,
        isCompact: rn,
        hasComposerFocus: w,
        onLatestTurnExpandedChange: l,
      }),
      (t[83] = w),
      (t[84] = M),
      (t[85] = O),
      (t[86] = qe),
      (t[87] = l),
      (t[88] = q),
      (t[89] = rn),
      (t[90] = an))
    : (an = t[90]);
  let on = Ye(an),
    sn;
  t[91] !== Nt || t[92] !== _t || t[93] !== J
    ? ((sn = () => {
        if (!_t || !J) return;
        let e = (e) => {
          let t = e.target;
          t instanceof Node && (He.current?.contains(t) || ct(t) || Nt());
        };
        return (
          document.addEventListener(`pointerdown`, e, !0),
          () => {
            document.removeEventListener(`pointerdown`, e, !0);
          }
        );
      }),
      (t[91] = Nt),
      (t[92] = _t),
      (t[93] = J),
      (t[94] = sn))
    : (sn = t[94]);
  let cn;
  (t[95] !== _t || t[96] !== J
    ? ((cn = [_t, J]), (t[95] = _t), (t[96] = J), (t[97] = cn))
    : (cn = t[97]),
    (0, H.useEffect)(sn, cn));
  let ln;
  t[98] !== E || t[99] !== C || t[100] !== Ft || t[101] !== M || t[102] !== b
    ? ((ln = () => {
        let e = fe?.browserHost;
        if (!M || C == null || E == null || e == null) return;
        let t = ve.subscribe(`browser-sidebar-floating-composer-reveal`, (e) => {
          e.browserTabId === C &&
            e.conversationId === E &&
            Ft(e.browserTabId, e.isPointerNearBottom);
        });
        return (
          e.setFloatingComposerRevealTracking({
            activationHeightPx: 48 * b,
            browserTabId: C,
            conversationId: E,
            enabled: !0,
          }),
          () => {
            (t(),
              e.setFloatingComposerRevealTracking({
                activationHeightPx: 48 * b,
                browserTabId: C,
                conversationId: E,
                enabled: !1,
              }));
          }
        );
      }),
      (t[98] = E),
      (t[99] = C),
      (t[100] = Ft),
      (t[101] = M),
      (t[102] = b),
      (t[103] = ln))
    : (ln = t[103]);
  let un;
  if (
    (t[104] !== E || t[105] !== C || t[106] !== M || t[107] !== b
      ? ((un = [E, C, M, b]), (t[104] = E), (t[105] = C), (t[106] = M), (t[107] = b), (t[108] = un))
      : (un = t[108]),
    (0, H.useEffect)(ln, un),
    !q)
  )
    return null;
  let dn = ee ?? `0px`,
    fn;
  t[109] === dn
    ? (fn = t[110])
    : ((fn = {
        "--right-panel-composer-overlay-bottom-panel-height": dn,
        bottom: `var(--right-panel-composer-overlay-bottom-panel-height)`,
      }),
      (t[109] = dn),
      (t[110] = fn));
  let pn = fn,
    mn = `translateY(${Tt})`,
    hn;
  t[111] !== pn || t[112] !== mn
    ? ((hn = { ...pn, transform: mn }), (t[111] = pn), (t[112] = mn), (t[113] = hn))
    : (hn = t[113]);
  let gn = hn,
    _n;
  t[114] !== C || t[115] !== l || t[116] !== y || t[117] !== g || t[118] !== b
    ? ((_n = (e) => {
        l?.(!1);
        let t = e.type === `click` && e.detail === 0,
          n = Ve.current?.firstElementChild?.getBoundingClientRect().bottom ?? window.innerHeight;
        (C != null && !t && e.clientY <= n && n - e.clientY <= 48 * b && ($e(C), jt()),
          Oe(g, { prefersReducedMotion: y || t }));
      }),
      (t[114] = C),
      (t[115] = l),
      (t[116] = y),
      (t[117] = g),
      (t[118] = b),
      (t[119] = _n))
    : (_n = t[119]);
  let vn = _n,
    yn;
  t[120] !== y || t[121] !== g
    ? ((yn = (e) => {
        (kt(),
          $e(null),
          z(!1),
          B(!1),
          Be(g, { prefersReducedMotion: y || (e.type === `click` && e.detail === 0) }),
          pe());
      }),
      (t[120] = y),
      (t[121] = g),
      (t[122] = yn))
    : (yn = t[122]);
  let bn = yn,
    xn;
  t[123] !== C || t[124] !== Y || t[125] !== g
    ? ((xn = () => {
        Y !== `compact` ||
          C == null ||
          ie(g.get(te.activeTab$)) !== C ||
          (Be(g, { prefersReducedMotion: !0 }), g.set(Ne, C), pe());
      }),
      (t[123] = C),
      (t[124] = Y),
      (t[125] = g),
      (t[126] = xn))
    : (xn = t[126]);
  let Sn = xn,
    Cn;
  t[127] !== C || t[128] !== O || t[129] !== l || t[130] !== g || t[131] !== W
    ? ((Cn = () => {
        (!W && !F.current && ht({ browserTabId: C, shouldAnimate: !0 }),
          g.set(Ne, null),
          O && !F.current && l?.(!1));
      }),
      (t[127] = C),
      (t[128] = O),
      (t[129] = l),
      (t[130] = g),
      (t[131] = W),
      (t[132] = Cn))
    : (Cn = t[132]);
  let wn = Cn,
    Tn = !O && !J,
    En = O ? `floating` : `default`,
    Dn = O ? `pb-8` : `pb-4`,
    On;
  t[133] === Dn ? (On = t[134]) : ((On = v(Ce, Dn)), (t[133] = Dn), (t[134] = On));
  let kn = !y && W && `transition-[max-width,opacity] duration-basic ease-enter-snappy`,
    An = M || Y === `compact` ? `max-w-56` : `max-w-full`,
    jn = M ? `opacity-0` : `opacity-100`,
    Mn;
  t[135] !== kn || t[136] !== An || t[137] !== jn
    ? ((Mn = v(`mx-auto w-full`, kn, An, jn)),
      (t[135] = kn),
      (t[136] = An),
      (t[137] = jn),
      (t[138] = Mn))
    : (Mn = t[138]);
  let Nn;
  t[139] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Nn = (e) => {
        e.target === e.currentTarget && e.propertyName === `max-width` && V(!0);
      }),
      (t[139] = Nn))
    : (Nn = t[139]);
  let Pn = J ? `pointer-events-auto` : `pointer-events-none`,
    Fn;
  t[140] === Pn
    ? (Fn = t[141])
    : ((Fn = v(`group/floating-composer relative isolate`, Pn)), (t[140] = Pn), (t[141] = Fn));
  let In = Y === `expanded` && !rt && W,
    Q;
  t[142] !== C || t[143] !== Sn || t[144] !== W || t[145] !== In
    ? ((Q = {
        activeBrowserTabId: C,
        isExpanding: In,
        isInsideOverlay: !0,
        onAttachmentAdded: Sn,
        shouldAnimate: W,
      }),
      (t[142] = C),
      (t[143] = Sn),
      (t[144] = W),
      (t[145] = In),
      (t[146] = Q))
    : (Q = t[146]);
  let Ln = Y,
    Rn = M ? `opacity-0` : `opacity-100`,
    zn;
  t[147] === Rn
    ? (zn = t[148])
    : ((zn = v(
        `relative z-10 min-w-0 transition-opacity duration-basic ease-enter-snappy motion-reduce:transition-none`,
        Rn,
      )),
      (t[147] = Rn),
      (t[148] = zn));
  let Bn = k && !w,
    Vn;
  t[149] !== C ||
  t[150] !== Y ||
  t[151] !== p ||
  t[152] !== w ||
  t[153] !== k ||
  t[154] !== M ||
  t[155] !== O ||
  t[156] !== y ||
  t[157] !== g ||
  t[158] !== W
    ? ((Vn = () => {
        O &&
          !M &&
          (W || ht({ browserTabId: C, shouldAnimate: !0 }),
          L.current != null && (window.cancelAnimationFrame(L.current), (L.current = null)),
          !y && Y === `compact` && !p
            ? (V(!1),
              I.current != null && window.cancelAnimationFrame(I.current),
              (I.current = window.requestAnimationFrame(() => {
                I.current = window.requestAnimationFrame(() => {
                  I.current = null;
                  let e = P.current;
                  if (e?.getAnimations?.().some(ot)) return;
                  let t = e?.parentElement;
                  if (e != null && t != null) {
                    let n = window.getComputedStyle(t),
                      r =
                        t.clientWidth -
                        Number.parseFloat(n.paddingLeft) -
                        Number.parseFloat(n.paddingRight);
                    if (r > 0 && e.getBoundingClientRect().width < r - 1) return;
                  }
                  V(!0);
                });
              })))
            : p && V(!0),
          (!k || w) && g.set(Ne, C));
      }),
      (t[149] = C),
      (t[150] = Y),
      (t[151] = p),
      (t[152] = w),
      (t[153] = k),
      (t[154] = M),
      (t[155] = O),
      (t[156] = y),
      (t[157] = g),
      (t[158] = W),
      (t[159] = Vn))
    : (Vn = t[159]);
  let Hn;
  t[160] !== wn || t[161] !== w || t[162] !== k || t[163] !== O || t[164] !== g
    ? ((Hn = (e) => {
        if ((k && w) || (O && e.target.closest(`[inert]`) != null)) return;
        let t = e.relatedTarget;
        if (
          !(
            t instanceof Element &&
            (He.current?.contains(t) ||
              ct(t) ||
              (t.closest(`[data-radix-popper-content-wrapper]`) != null &&
                e.currentTarget.querySelector(`[aria-haspopup][data-state="open"]`) != null))
          )
        ) {
          if (t == null && O && !F.current) {
            if (g.get(_) === !1) return;
            (L.current != null && window.cancelAnimationFrame(L.current),
              (L.current = window.requestAnimationFrame(() => {
                ((L.current = null), g.get(_) !== !1 && wn());
              })));
            return;
          }
          wn();
        }
      }),
      (t[160] = wn),
      (t[161] = w),
      (t[162] = k),
      (t[163] = O),
      (t[164] = g),
      (t[165] = Hn))
    : (Hn = t[165]);
  let Un = O ? (x ?? ae) : ae,
    Wn;
  t[166] !== r || t[167] !== Un
    ? ((Wn = (0, U.jsx)(Me, { value: Un, children: r })),
      (t[166] = r),
      (t[167] = Un),
      (t[168] = Wn))
    : (Wn = t[168]);
  let Gn;
  t[169] !== M || t[170] !== zn || t[171] !== Bn || t[172] !== Vn || t[173] !== Hn || t[174] !== Wn
    ? ((Gn = (0, U.jsx)(`div`, {
        ref: Ue,
        "aria-hidden": M,
        className: zn,
        "data-prevent-composer-focus-restoration": Bn,
        inert: M,
        onPointerDownCapture: st,
        onFocusCapture: Vn,
        onBlurCapture: Hn,
        children: Wn,
      })),
      (t[169] = M),
      (t[170] = zn),
      (t[171] = Bn),
      (t[172] = Vn),
      (t[173] = Hn),
      (t[174] = Wn),
      (t[175] = Gn))
    : (Gn = t[175]);
  let Kn;
  t[176] !== Y || t[177] !== Gn
    ? ((Kn = (0, U.jsx)(be, { value: Ln, children: Gn })),
      (t[176] = Y),
      (t[177] = Gn),
      (t[178] = Kn))
    : (Kn = t[178]);
  let qn;
  t[179] !== Q || t[180] !== Kn
    ? ((qn = (0, U.jsx)(ke, { value: Q, children: Kn })),
      (t[179] = Q),
      (t[180] = Kn),
      (t[181] = qn))
    : (qn = t[181]);
  let Jn;
  t[182] !== M || t[183] !== qn
    ? ((Jn = (0, U.jsx)(Se, { value: M, children: qn })),
      (t[182] = M),
      (t[183] = qn),
      (t[184] = Jn))
    : (Jn = t[184]);
  let Yn;
  t[185] !== vt || t[186] !== vn || t[187] !== J
    ? ((Yn = vt ? (0, U.jsx)(We, { isVisible: J, onClick: vn, onWheel: vn }) : null),
      (t[185] = vt),
      (t[186] = vn),
      (t[187] = J),
      (t[188] = Yn))
    : (Yn = t[188]);
  let Xn;
  t[189] !== Fn || t[190] !== Jn || t[191] !== Yn
    ? ((Xn = (0, U.jsxs)(`div`, { ref: He, className: Fn, children: [Jn, Yn] })),
      (t[189] = Fn),
      (t[190] = Jn),
      (t[191] = Yn),
      (t[192] = Xn))
    : (Xn = t[192]);
  let Zn;
  t[193] !== Mn || t[194] !== Xn
    ? ((Zn = (0, U.jsx)(`div`, {
        ref: P,
        "data-right-panel-composer-overlay-content": `true`,
        className: Mn,
        onTransitionEnd: Nn,
        children: Xn,
      })),
      (t[193] = Mn),
      (t[194] = Xn),
      (t[195] = Zn))
    : (Zn = t[195]);
  let Qn;
  t[196] !== On || t[197] !== Zn
    ? ((Qn = (0, U.jsx)(`div`, { className: On, children: Zn })),
      (t[196] = On),
      (t[197] = Zn),
      (t[198] = Qn))
    : (Qn = t[198]);
  let $n;
  t[199] !== K || t[200] !== M || t[201] !== gn || t[202] !== Tn || t[203] !== En || t[204] !== Qn
    ? (($n = (0, U.jsx)(u.div, {
        "aria-hidden": Tn,
        className: it.Overlay,
        "data-composer-peeked": M,
        "data-presentation": En,
        "data-testid": `right-panel-composer-overlay`,
        "data-transition-state": K,
        style: gn,
        children: Qn,
      })),
      (t[199] = K),
      (t[200] = M),
      (t[201] = gn),
      (t[202] = Tn),
      (t[203] = En),
      (t[204] = Qn),
      (t[205] = $n))
    : ($n = t[205]);
  let er = $n,
    tr;
  t[206] !== C ||
  t[207] !== pn ||
  t[208] !== vt ||
  t[209] !== on ||
  t[210] !== bn ||
  t[211] !== Qe ||
  t[212] !== M ||
  t[213] !== tt ||
  t[214] !== nt
    ? ((tr = vt
        ? (0, U.jsx)(u.div, {
            className: `group/floating-composer-reveal-zone pointer-events-none absolute inset-x-0 z-[42] flex h-12 items-end justify-center overflow-hidden`,
            style: pn,
            children: (0, U.jsx)(Ge, {
              isActive: Qe === C || tt || nt,
              isVisible: M,
              onPointerEnter: () => {
                (kt(), B(!1), z(!0));
              },
              onPointerLeave: () => z(!1),
              onTransitionEnd: (e) => {
                e.target === e.currentTarget &&
                  e.propertyName === `translate` &&
                  nt &&
                  (kt(), B(!1));
              },
              onWheel: (e) => {
                (on.beginSwipe(e, `peek`), bn(e));
              },
              onClick: bn,
            }),
          })
        : null),
      (t[206] = C),
      (t[207] = pn),
      (t[208] = vt),
      (t[209] = on),
      (t[210] = bn),
      (t[211] = Qe),
      (t[212] = M),
      (t[213] = tt),
      (t[214] = nt),
      (t[215] = tr))
    : (tr = t[215]);
  let $ = tr;
  if (x == null) {
    let e;
    return (
      t[216] !== er || t[217] !== $
        ? ((e = (0, U.jsxs)(U.Fragment, { children: [er, $] })),
          (t[216] = er),
          (t[217] = $),
          (t[218] = e))
        : (e = t[218]),
      e
    );
  }
  let nr = O ? `overflow-hidden` : `overflow-visible`,
    rr;
  t[219] === nr
    ? (rr = t[220])
    : ((rr = v(`pointer-events-none fixed z-[41]`, nr)), (t[219] = nr), (t[220] = rr));
  let ir;
  t[221] === b ? (ir = t[222]) : ((ir = { zoom: b }), (t[221] = b), (t[222] = ir));
  let ar;
  t[223] !== er || t[224] !== rr || t[225] !== ir
    ? ((ar = (0, U.jsx)(`div`, {
        ref: Le,
        className: rr,
        "data-testid": `right-panel-composer-overlay-host`,
        style: ir,
        children: er,
      })),
      (t[223] = er),
      (t[224] = rr),
      (t[225] = ir),
      (t[226] = ar))
    : (ar = t[226]);
  let or;
  t[227] !== x.ownerDocument.body || t[228] !== ar
    ? ((or = (0, dt.createPortal)(ar, x.ownerDocument.body)),
      (t[227] = x.ownerDocument.body),
      (t[228] = ar),
      (t[229] = or))
    : (or = t[229]);
  let sr;
  t[230] !== x.ownerDocument.body || t[231] !== $ || t[232] !== b
    ? ((sr =
        $ == null
          ? null
          : (0, dt.createPortal)(
              (0, U.jsx)(`div`, {
                ref: Ve,
                className: `pointer-events-none fixed z-[42] overflow-hidden`,
                style: { zoom: b },
                children: $,
              }),
              x.ownerDocument.body,
            )),
      (t[230] = x.ownerDocument.body),
      (t[231] = $),
      (t[232] = b),
      (t[233] = sr))
    : (sr = t[233]);
  let cr;
  return (
    t[234] !== or || t[235] !== sr
      ? ((cr = (0, U.jsxs)(U.Fragment, { children: [or, sr] })),
        (t[234] = or),
        (t[235] = sr),
        (t[236] = cr))
      : (cr = t[236]),
    cr
  );
}
function ot(e) {
  return (
    `transitionProperty` in e && e.transitionProperty === `max-width` && e.playState === `running`
  );
}
function st(e) {
  e.target instanceof Element &&
    e.target.closest(`:disabled, [aria-disabled="true"]`) != null &&
    e.preventDefault();
}
function ct(e) {
  return (
    e instanceof Element &&
    e.closest(`[role="dialog"], [role="alertdialog"]`) != null &&
    e.ownerDocument.querySelector(
      `[data-right-panel-composer-overlay-content="true"] [aria-haspopup="dialog"][aria-expanded="true"]`,
    ) != null
  );
}
function lt(e, t) {
  return e ? (t === `entering` ? `entering` : `visible`) : t === `exiting` ? `exiting` : `hidden`;
}
var ut,
  H,
  dt,
  U,
  ft,
  pt,
  mt = e(() => {
    ((ut = T()),
      j(),
      E(),
      m(),
      s(),
      (H = t(o(), 1)),
      (dt = t(he(), 1)),
      C(),
      a(),
      b(),
      ee(),
      r(),
      x(),
      g(),
      Le(),
      oe(),
      h(),
      S(),
      w(),
      k(),
      c(),
      Je(),
      $e(),
      P(),
      M(),
      Ve(),
      nt(),
      V(),
      (U = ce()),
      (ft = `[data-right-panel-composer-overlay-safe-area-header="true"]`),
      (pt = 150));
  });
export { mt as n, at as t };
//# sourceMappingURL=right-panel-composer-overlay-7bbacd6f9f94.js.map
