import { a as e, n as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $Dt as n,
  $Et as r,
  ADt as i,
  BDt as a,
  BOt as o,
  COt as s,
  DOt as c,
  EDt as l,
  EOt as u,
  FBt as d,
  FDt as f,
  FEt as p,
  FOt as m,
  GEt as h,
  HDt as g,
  HOt as ee,
  IDt as te,
  IEt as ne,
  IOt as re,
  JEt as ie,
  KDt as ae,
  KEt as oe,
  LDt as se,
  LEt as ce,
  LNt as le,
  LOt as ue,
  MDt as de,
  MEt as fe,
  MOt as pe,
  NEt as me,
  NOt as he,
  ODt as ge,
  OOt as _,
  PEt as _e,
  POt as ve,
  QDt as ye,
  QEt as be,
  RDt as xe,
  REt as Se,
  ROt as Ce,
  SOt as v,
  TDt as we,
  TOt as Te,
  UDt as Ee,
  UEt as De,
  UOt as Oe,
  VDt as ke,
  VEt as y,
  VOt as Ae,
  WDt as je,
  WEt as Me,
  XDt as Ne,
  XEt as Pe,
  YEt as Fe,
  ZDt as Ie,
  ZEt as Le,
  _Dt as Re,
  aDt as ze,
  aOt as Be,
  cDt as Ve,
  dDt as He,
  eDt as Ue,
  eOt as We,
  fDt as Ge,
  gDt as Ke,
  hDt as b,
  iDt as qe,
  iOt as Je,
  jDt as Ye,
  jEt as Xe,
  jOt as Ze,
  lDt as Qe,
  mDt as x,
  nDt as $e,
  oDt as et,
  qDt as tt,
  qEt as nt,
  rDt as rt,
  rOt as it,
  sDt as at,
  tDt as ot,
  tOt as st,
  uDt as ct,
  vDt as lt,
  wDt as ut,
  wOt as dt,
  xOt as ft,
  zDt as pt,
  zEt as S,
  zOt as C,
} from "./app-shared-2feb3d4c6fcc.js";
var mt, w;
function T() {
  return (T = t(() => {
    ((mt = d()), (w = (0, mt.createContext)({})));
  }))();
}
function ht(e) {
  let t = (0, gt.useRef)(null);
  return (t.current === null && (t.current = e()), t.current);
}
var gt;
function _t() {
  return (_t = t(() => {
    gt = d();
  }))();
}
var vt;
function E() {
  return (E = t(() => {
    vt = typeof window < `u`;
  }))();
}
var yt, bt;
function xt() {
  return (xt = t(() => {
    ((yt = d()), E(), (bt = vt ? yt.useLayoutEffect : yt.useEffect));
  }))();
}
var St, D;
function O() {
  return (O = t(() => {
    ((St = d()), (D = (0, St.createContext)(null)));
  }))();
}
var Ct, k;
function A() {
  return (A = t(() => {
    ((Ct = d()),
      (k = (0, Ct.createContext)({ transformPagePoint: (e) => e, isStatic: !1, reducedMotion: `never` })));
  }))();
}
function wt(e = !0) {
  let t = (0, j.useContext)(D);
  if (t === null) return [!0, null];
  let { isPresent: n, onExitComplete: r, register: i } = t,
    a = (0, j.useId)();
  (0, j.useEffect)(() => {
    if (e) return i(a);
  }, [e]);
  let o = (0, j.useCallback)(() => e && r && r(a), [a, r, e]);
  return !n && r ? [!1, o] : [!0];
}
var j;
function Tt() {
  return (Tt = t(() => {
    ((j = d()), O());
  }))();
}
var Et, Dt;
function Ot() {
  return (Ot = t(() => {
    ((Et = d()), (Dt = (0, Et.createContext)({ strict: !1 })));
  }))();
}
function kt() {
  if (Mt) return;
  let e = {};
  for (let t in jt) e[t] = { isEnabled: (e) => jt[t].some((t) => !!e[t]) };
  (lt(e), (Mt = !0));
}
function At() {
  return (kt(), Ke());
}
var jt, Mt;
function Nt() {
  return (Nt = t(() => {
    (Re(),
      (jt = {
        animation: [
          `animate`,
          `variants`,
          `whileHover`,
          `whileTap`,
          `exit`,
          `whileInView`,
          `whileFocus`,
          `whileDrag`,
        ],
        exit: [`exit`],
        drag: [`drag`, `dragControls`],
        focus: [`whileFocus`],
        hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
        tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
        pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
        inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
        layout: [`layout`, `layoutId`],
      }),
      (Mt = !1));
  }))();
}
function Pt(e) {
  let t = At();
  for (let n in e) t[n] = { ...t[n], ...e[n] };
  lt(t);
}
function Ft() {
  return (Ft = t(() => {
    (Re(), Nt());
  }))();
}
function M(e) {
  return (
    e.startsWith(`while`) ||
    (e.startsWith(`drag`) && e !== `draggable`) ||
    e.startsWith(`layout`) ||
    e.startsWith(`onTap`) ||
    e.startsWith(`onPan`) ||
    e.startsWith(`onLayout`) ||
    It.has(e)
  );
}
var It;
function Lt() {
  return (Lt = t(() => {
    It = new Set(
      `animate.exit.variants.initial.style.values.variants.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.ignoreStrict.viewport`.split(
        `.`,
      ),
    );
  }))();
}
function Rt(e) {
  typeof e == `function` && (Bt = (t) => (t.startsWith(`on`) ? !M(t) : e(t)));
}
function zt(e, t, n) {
  let r = {};
  for (let i in e)
    (i !== `values` || typeof e.values != `object`) &&
      (Bt(i) || (n === !0 && M(i)) || (!t && !M(i)) || (e.draggable && i.startsWith(`onDrag`))) &&
      (r[i] = e[i]);
  return r;
}
var Bt;
function Vt() {
  return (Vt = t(() => {
    (Lt(), (Bt = (e) => !M(e)));
    try {
      Rt((Xe(), e(fe)).default);
    } catch {}
  }))();
}
var Ht, N;
function P() {
  return (P = t(() => {
    ((Ht = d()), (N = (0, Ht.createContext)({})));
  }))();
}
function Ut(e, t) {
  if (we(e)) {
    let { initial: t, animate: n } = e;
    return { initial: t === !1 || ge(t) ? t : void 0, animate: ge(n) ? n : void 0 };
  }
  return e.inherit === !1 ? {} : t;
}
function Wt() {
  return (Wt = t(() => {
    ut();
  }))();
}
function Gt(e) {
  let { initial: t, animate: n } = Ut(e, (0, qt.useContext)(N));
  return (0, qt.useMemo)(() => ({ initial: t, animate: n }), [Kt(t), Kt(n)]);
}
function Kt(e) {
  return Array.isArray(e) ? e.join(` `) : e;
}
var qt;
function Jt() {
  return (Jt = t(() => {
    ((qt = d()), P(), Wt());
  }))();
}
var F;
function I() {
  return (I = t(() => {
    F = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
  }))();
}
function Yt(e, t, n) {
  for (let r in t) !st(t[r]) && !et(r, n) && (e[r] = t[r]);
}
function Xt({ transformTemplate: e }, t) {
  return (0, $t.useMemo)(() => {
    let n = F();
    return (at(n, t, e), Object.assign({}, n.vars, n.style));
  }, [t]);
}
function Zt(e, t) {
  let n = e.style || {},
    r = {};
  return (Yt(r, n, e), Object.assign(r, Xt(e, t)), r);
}
function Qt(e, t) {
  let n = {},
    r = Zt(e, t);
  return (
    e.drag &&
      e.dragListener !== !1 &&
      ((n.draggable = !1),
      (r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`),
      (r.touchAction = e.drag === !0 ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`)),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    (n.style = r),
    n
  );
}
var $t;
function en() {
  return (en = t(() => {
    (We(), ze(), Ve(), ($t = d()), I());
  }))();
}
var tn;
function nn() {
  return (nn = t(() => {
    (I(), (tn = () => ({ ...F(), attrs: {} })));
  }))();
}
function rn(e, t, n, i) {
  let a = (0, an.useMemo)(() => {
    let n = tn();
    return (r(n, t, be(i), e.transformTemplate, e.style), { ...n.attrs, style: { ...n.style } });
  }, [t]);
  if (e.style) {
    let t = {};
    (Yt(t, e.style, e), (a.style = { ...t, ...a.style }));
  }
  return a;
}
var an;
function on() {
  return (on = t(() => {
    (Ue(), Le(), (an = d()), en(), nn());
  }))();
}
var sn;
function cn() {
  return (cn = t(() => {
    sn = [
      `animate`,
      `circle`,
      `defs`,
      `desc`,
      `ellipse`,
      `g`,
      `image`,
      `line`,
      `filter`,
      `marker`,
      `mask`,
      `metadata`,
      `path`,
      `pattern`,
      `polygon`,
      `polyline`,
      `rect`,
      `stop`,
      `switch`,
      `symbol`,
      `svg`,
      `text`,
      `tspan`,
      `use`,
      `view`,
    ];
  }))();
}
function ln(e) {
  return typeof e != `string` || e.includes(`-`) ? !1 : !!(sn.indexOf(e) > -1 || /[A-Z]/u.test(e));
}
function L() {
  return (L = t(() => {
    cn();
  }))();
}
function un(e, t, n, { latestValues: r }, i, a = !1, o) {
  let s = ((o ?? ln(e)) ? rn : Qt)(t, r, i, e),
    c = zt(t, typeof e == `string`, a),
    l = e === R.Fragment ? {} : { ...c, ...s, ref: n },
    { children: u } = t,
    d = (0, R.useMemo)(() => (st(u) ? u.get() : u), [u]);
  return (0, R.createElement)(e, { ...l, children: d });
}
var R;
function dn() {
  return (dn = t(() => {
    (We(), (R = d()), en(), on(), Vt(), L());
  }))();
}
function fn({ scrapeMotionValuesFromProps: e, createRenderState: t }, n, r, i) {
  return { latestValues: pn(n, r, i, e), renderState: t() };
}
function pn(e, t, n, r) {
  let a = {},
    o = r(e, {});
  for (let e in o) a[e] = Se(o[e]);
  let { initial: s, animate: c } = e,
    u = we(e),
    d = l(e);
  t && d && !u && e.inherit !== !1 && (s === void 0 && (s = t.initial), c === void 0 && (c = t.animate));
  let f = n ? n.initial === !1 : !1;
  f ||= s === !1;
  let p = f ? c : s;
  if (p && typeof p != `boolean` && !i(p)) {
    let t = Array.isArray(p) ? p : [p];
    for (let n = 0; n < t.length; n++) {
      let r = it(e, t[n]);
      if (r) {
        let { transitionEnd: e, transition: t, ...n } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = f ? t.length - 1 : 0;
            t = t[e];
          }
          t !== null && (a[e] = t);
        }
        for (let t in e) a[t] = e[t];
      }
    }
  }
  return a;
}
var mn, hn;
function gn() {
  return (gn = t(() => {
    (ce(),
      ut(),
      (mn = d()),
      P(),
      O(),
      _t(),
      (hn = (e) => (t, n) => {
        let r = (0, mn.useContext)(N),
          i = (0, mn.useContext)(D),
          a = () => fn(e, t, r, i);
        return n ? a() : ht(a);
      }));
  }))();
}
var _n;
function vn() {
  return (vn = t(() => {
    (rt(), gn(), I(), (_n = hn({ scrapeMotionValuesFromProps: qe, createRenderState: F })));
  }))();
}
var yn;
function bn() {
  return (bn = t(() => {
    (Fe(), gn(), nn(), (yn = hn({ scrapeMotionValuesFromProps: Pe, createRenderState: tn })));
  }))();
}
var xn;
function Sn() {
  return (Sn = t(() => {
    xn = Symbol.for(`motionComponentSymbol`);
  }))();
}
function Cn(e, t, n) {
  let r = (0, z.useRef)(n);
  (0, z.useInsertionEffect)(() => {
    r.current = n;
  });
  let i = (0, z.useRef)(null);
  return (0, z.useCallback)(
    (n) => {
      (n && e.onMount?.(n), t && (n ? t.mount(n) : t.unmount()));
      let a = r.current;
      if (typeof a == `function`) {
        if (n) {
          let e = a(n);
          typeof e == `function` && (i.current = e);
        } else i.current ? (i.current(), (i.current = null)) : a(n);
      } else a && (a.current = n);
    },
    [t],
  );
}
var z;
function wn() {
  return (wn = t(() => {
    z = d();
  }))();
}
var Tn, En;
function Dn() {
  return (Dn = t(() => {
    ((Tn = d()), (En = (0, Tn.createContext)({})));
  }))();
}
function B(e) {
  return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`);
}
function On(e, t, n, r, i, a) {
  let { visualElement: o } = (0, V.useContext)(N),
    s = (0, V.useContext)(Dt),
    c = (0, V.useContext)(D),
    l = (0, V.useContext)(k).reducedMotion,
    u = (0, V.useRef)(null),
    d = (0, V.useRef)(!1);
  ((r ||= s.renderer),
    !u.current &&
      r &&
      ((u.current = r(e, {
        visualState: t,
        parent: o,
        props: n,
        presenceContext: c,
        blockInitialAnimation: c ? c.initial === !1 : !1,
        reducedMotionConfig: l,
        isSVG: a,
      })),
      d.current && u.current && (u.current.manuallyAnimateOnMount = !0)));
  let f = u.current,
    p = (0, V.useContext)(En);
  f && !f.projection && i && (f.type === `html` || f.type === `svg`) && kn(u.current, n, i, p);
  let m = (0, V.useRef)(!1);
  (0, V.useInsertionEffect)(() => {
    f && m.current && f.update(n, c);
  });
  let h = n[Ie],
    g = (0, V.useRef)(!!h && !window.MotionHandoffIsComplete?.(h) && window.MotionHasOptimisedAnimation?.(h));
  return (
    bt(() => {
      ((d.current = !0),
        f &&
          ((m.current = !0),
          (window.MotionIsMounted = !0),
          f.updateFeatures(),
          f.scheduleRenderMicrotask(),
          g.current && f.animationState && f.animationState.animateChanges()));
    }),
    (0, V.useEffect)(() => {
      f &&
        (!g.current && f.animationState && f.animationState.animateChanges(),
        (g.current &&=
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(h);
          }),
          !1)),
        (f.enteringChildren = void 0));
    }),
    f
  );
}
function kn(e, t, n, r) {
  let {
    layoutId: i,
    layout: a,
    drag: o,
    dragConstraints: s,
    layoutScroll: c,
    layoutRoot: l,
    layoutCrossfade: u,
  } = t;
  ((e.projection = new n(e.latestValues, t[`data-framer-portal-id`] ? void 0 : An(e.parent))),
    e.projection.setOptions({
      layoutId: i,
      layout: a,
      alwaysMeasureLayout: !!o || (s && B(s)),
      visualElement: e,
      animationType: typeof a == `string` ? a : `both`,
      initialPromotionConfig: r,
      crossfade: u,
      layoutScroll: c,
      layoutRoot: l,
    }));
}
function An(e) {
  if (e) return e.options.allowProjection === !1 ? An(e.parent) : e.projection;
}
var V;
function jn() {
  return (jn = t(() => {
    (Ne(), (V = d()), Ot(), A(), P(), O(), Dn(), xt());
  }))();
}
function Mn(e, { forwardMotionProps: t = !1, type: n } = {}, r, i) {
  r && Pt(r);
  let a = n ? n === `svg` : ln(e),
    o = a ? yn : _n;
  function s(n, s) {
    let c,
      l = { ...(0, H.useContext)(k), ...n, layoutId: Nn(n) },
      { isStatic: u } = l,
      d = Gt(n),
      f = o(n, u);
    if (!u && vt) {
      Pn(l, r);
      let t = Fn(l);
      ((c = t.MeasureLayout), (d.visualElement = On(e, f, l, i, t.ProjectionNode, a)));
    }
    return (0, In.jsxs)(N.Provider, {
      value: d,
      children: [
        c && d.visualElement ? (0, In.jsx)(c, { visualElement: d.visualElement, ...l }) : null,
        un(e, n, Cn(f, d.visualElement, s), f, u, t, a),
      ],
    });
  }
  s.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
  let c = (0, H.forwardRef)(s);
  return ((c[xn] = e), c);
}
function Nn({ layoutId: e }) {
  let t = (0, H.useContext)(w).id;
  return t && e !== void 0 ? t + `-` + e : e;
}
function Pn(e, t) {
  (0, H.useContext)(Dt).strict;
}
function Fn(e) {
  let { drag: t, layout: n } = At();
  if (!t && !n) return {};
  let r = { ...t, ...n };
  return {
    MeasureLayout: t?.isEnabled(e) || n?.isEnabled(e) ? r.MeasureLayout : void 0,
    ProjectionNode: r.ProjectionNode,
  };
}
var In, H;
function Ln() {
  return (Ln = t(() => {
    ((In = le()),
      (H = d()),
      T(),
      Ot(),
      A(),
      P(),
      Jt(),
      dn(),
      L(),
      vn(),
      bn(),
      E(),
      Nt(),
      Ft(),
      Sn(),
      wn(),
      jn());
  }))();
}
function Rn(e, t) {
  if (typeof Proxy > `u`) return Mn;
  let n = new Map(),
    r = (n, r) => Mn(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) => (a === `create` ? r : (n.has(a) || n.set(a, Mn(a, void 0, e, t)), n.get(a))),
  });
}
function zn() {
  return (zn = t(() => {
    Ln();
  }))();
}
var Bn, Vn;
function Hn() {
  return (Hn = t(() => {
    (ie(),
      $e(),
      (Bn = d()),
      L(),
      (Vn = (e, t) => ((t.isSVG ?? ln(e)) ? new nt(t) : new ot(t, { allowProjection: e !== Bn.Fragment }))));
  }))();
}
var Un;
function Wn() {
  return (Wn = t(() => {
    (b(),
      oe(),
      (Un = class extends x {
        constructor(e) {
          (super(e), (e.animationState ||= h(e)));
        }
        updateAnimationControlsSubscription() {
          let { animate: e } = this.node.getProps();
          i(e) && (this.unmountControls = e.subscribe(this.node));
        }
        mount() {
          this.updateAnimationControlsSubscription();
        }
        update() {
          let { animate: e } = this.node.getProps(),
            { animate: t } = this.node.prevProps || {};
          e !== t && this.updateAnimationControlsSubscription();
        }
        unmount() {
          (this.node.animationState.reset(), this.unmountControls?.());
        }
      }));
  }))();
}
var Gn, Kn;
function qn() {
  return (qn = t(() => {
    (b(),
      (Gn = 0),
      (Kn = class extends x {
        constructor() {
          (super(...arguments), (this.id = Gn++));
        }
        update() {
          if (!this.node.presenceContext) return;
          let { isPresent: e, onExitComplete: t } = this.node.presenceContext,
            { isPresent: n } = this.node.prevPresenceContext || {};
          if (!this.node.animationState || e === n) return;
          let r = this.node.animationState.setActive(`exit`, !e);
          t &&
            !e &&
            r.then(() => {
              t(this.id);
            });
        }
        mount() {
          let { register: e, onExitComplete: t } = this.node.presenceContext || {};
          (t && t(this.id), e && (this.unmount = e(this.id)));
        }
        unmount() {}
      }));
  }))();
}
var Jn;
function Yn() {
  return (Yn = t(() => {
    (Wn(), qn(), (Jn = { animation: { Feature: Un }, exit: { Feature: Kn } }));
  }))();
}
function U(e) {
  return { point: { x: e.pageX, y: e.pageY } };
}
var Xn;
function W() {
  return (W = t(() => {
    (pt(), (Xn = (e) => (t) => a(t) && e(t, U(t))));
  }))();
}
function G(e, t, n, r) {
  return S(e, t, Xn(n), r);
}
function K() {
  return (K = t(() => {
    W();
  }))();
}
var Zn;
function Qn() {
  return (Qn = t(() => {
    Zn = ({ current: e }) => (e ? e.ownerDocument.defaultView : null);
  }))();
}
function $n(e, t) {
  let n = er(e.x, t.x),
    r = er(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var er;
function tr() {
  return (tr = t(() => {
    er = (e, t) => Math.abs(e - t);
  }))();
}
function nr(e, t) {
  return t ? { point: t(e.point) } : e;
}
function rr(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ir({ point: e }, t) {
  return { point: e, delta: rr(e, or(t)), offset: rr(e, ar(t)), velocity: sr(t, 0.1) };
}
function ar(e) {
  return e[0];
}
function or(e) {
  return e[e.length - 1];
}
function sr(e, t) {
  if (e.length < 2) return { x: 0, y: 0 };
  let n = e.length - 1,
    r = null,
    i = or(e);
  for (; n >= 0 && ((r = e[n]), !(i.timestamp - r.timestamp > he(t)));) n--;
  if (!r) return { x: 0, y: 0 };
  let a = pe(i.timestamp - r.timestamp);
  if (a === 0) return { x: 0, y: 0 };
  let o = { x: (i.x - r.x) / a, y: (i.y - r.y) / a };
  return (o.x === 1 / 0 && (o.x = 0), o.y === 1 / 0 && (o.y = 0), o);
}
var cr, lr;
function ur() {
  return (ur = t(() => {
    (_(),
      pt(),
      re(),
      Ze(),
      K(),
      W(),
      tr(),
      (cr = new Set([`auto`, `scroll`])),
      (lr = class {
        constructor(
          e,
          t,
          {
            transformPagePoint: n,
            contextWindow: r = window,
            dragSnapToOrigin: i = !1,
            distanceThreshold: o = 3,
            element: s,
          } = {},
        ) {
          if (
            ((this.startEvent = null),
            (this.lastMoveEvent = null),
            (this.lastMoveEventInfo = null),
            (this.handlers = {}),
            (this.contextWindow = window),
            (this.scrollPositions = new Map()),
            (this.removeScrollListeners = null),
            (this.onElementScroll = (e) => {
              this.handleScroll(e.target);
            }),
            (this.onWindowScroll = () => {
              this.handleScroll(window);
            }),
            (this.updatePoint = () => {
              if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
              let e = ir(this.lastMoveEventInfo, this.history),
                t = this.startEvent !== null,
                n = $n(e.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
              if (!t && !n) return;
              let { point: r } = e,
                { timestamp: i } = c;
              this.history.push({ ...r, timestamp: i });
              let { onStart: a, onMove: o } = this.handlers;
              (t || (a && a(this.lastMoveEvent, e), (this.startEvent = this.lastMoveEvent)),
                o && o(this.lastMoveEvent, e));
            }),
            (this.handlePointerMove = (e, t) => {
              ((this.lastMoveEvent = e),
                (this.lastMoveEventInfo = nr(t, this.transformPagePoint)),
                u.update(this.updatePoint, !0));
            }),
            (this.handlePointerUp = (e, t) => {
              this.end();
              let { onEnd: n, onSessionEnd: r, resumeAnimation: i } = this.handlers;
              if (
                ((this.dragSnapToOrigin || !this.startEvent) && i && i(),
                !(this.lastMoveEvent && this.lastMoveEventInfo))
              )
                return;
              let a = ir(
                e.type === `pointercancel` ? this.lastMoveEventInfo : nr(t, this.transformPagePoint),
                this.history,
              );
              (this.startEvent && n && n(e, a), r && r(e, a));
            }),
            !a(e))
          )
            return;
          ((this.dragSnapToOrigin = i),
            (this.handlers = t),
            (this.transformPagePoint = n),
            (this.distanceThreshold = o),
            (this.contextWindow = r || window));
          let l = nr(U(e), this.transformPagePoint),
            { point: d } = l,
            { timestamp: f } = c;
          this.history = [{ ...d, timestamp: f }];
          let { onSessionStart: p } = t;
          (p && p(e, ir(l, this.history)),
            (this.removeListeners = ue(
              G(this.contextWindow, `pointermove`, this.handlePointerMove),
              G(this.contextWindow, `pointerup`, this.handlePointerUp),
              G(this.contextWindow, `pointercancel`, this.handlePointerUp),
            )),
            s && this.startScrollTracking(s));
        }
        startScrollTracking(e) {
          let t = e.parentElement;
          for (; t;) {
            let e = getComputedStyle(t);
            ((cr.has(e.overflowX) || cr.has(e.overflowY)) &&
              this.scrollPositions.set(t, { x: t.scrollLeft, y: t.scrollTop }),
              (t = t.parentElement));
          }
          (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
            window.addEventListener(`scroll`, this.onElementScroll, { capture: !0, passive: !0 }),
            window.addEventListener(`scroll`, this.onWindowScroll, { passive: !0 }),
            (this.removeScrollListeners = () => {
              (window.removeEventListener(`scroll`, this.onElementScroll, { capture: !0 }),
                window.removeEventListener(`scroll`, this.onWindowScroll));
            }));
        }
        handleScroll(e) {
          let t = this.scrollPositions.get(e);
          if (!t) return;
          let n = e === window,
            r = n ? { x: window.scrollX, y: window.scrollY } : { x: e.scrollLeft, y: e.scrollTop },
            i = { x: r.x - t.x, y: r.y - t.y };
          (i.x !== 0 || i.y !== 0) &&
            (n
              ? this.lastMoveEventInfo &&
                ((this.lastMoveEventInfo.point.x += i.x), (this.lastMoveEventInfo.point.y += i.y))
              : this.history.length > 0 && ((this.history[0].x -= i.x), (this.history[0].y -= i.y)),
            this.scrollPositions.set(e, r),
            u.update(this.updatePoint, !0));
        }
        updateHandlers(e) {
          this.handlers = e;
        }
        end() {
          (this.removeListeners && this.removeListeners(),
            this.removeScrollListeners && this.removeScrollListeners(),
            this.scrollPositions.clear(),
            Te(this.updatePoint));
        }
      }));
  }))();
}
function dr(e, { min: t, max: n }, r) {
  return (
    t !== void 0 && e < t
      ? (e = r ? v(t, e, r.min) : Math.max(e, t))
      : n !== void 0 && e > n && (e = r ? v(n, e, r.max) : Math.min(e, n)),
    e
  );
}
function fr(e, t, n) {
  return { min: t === void 0 ? void 0 : e.min + t, max: n === void 0 ? void 0 : e.max + n - (e.max - e.min) };
}
function pr(e, { top: t, left: n, bottom: r, right: i }) {
  return { x: fr(e.x, n, i), y: fr(e.y, t, r) };
}
function mr(e, t) {
  let n = t.min - e.min,
    r = t.max - e.max;
  return (t.max - t.min < e.max - e.min && ([n, r] = [r, n]), { min: n, max: r });
}
function hr(e, t) {
  return { x: mr(e.x, t.x), y: mr(e.y, t.y) };
}
function gr(e, t) {
  let n = 0.5,
    r = De(e),
    i = De(t);
  return (i > r ? (n = m(t.min, t.max - r, e.min)) : r > i && (n = m(e.min, e.max - i, t.min)), ee(0, 1, n));
}
function _r(e, t) {
  let n = {};
  return (t.min !== void 0 && (n.min = t.min - e.min), t.max !== void 0 && (n.max = t.max - e.min), n);
}
function vr(e = q) {
  return (e === !1 ? (e = 0) : e === !0 && (e = q), { x: yr(e, `left`, `right`), y: yr(e, `top`, `bottom`) });
}
function yr(e, t, n) {
  return { min: br(e, t), max: br(e, n) };
}
function br(e, t) {
  return typeof e == `number` ? e : e[t] || 0;
}
var q;
function xr() {
  return (xr = t(() => {
    (ft(), Me(), ve(), Oe(), (q = 0.35));
  }))();
}
function J(e, t, n) {
  return (t === !0 || t === e) && (n === null || n === e);
}
function Sr(e, t = 10) {
  let n = null;
  return (Math.abs(e.y) > t ? (n = `y`) : Math.abs(e.x) > t && (n = `x`), n);
}
var Cr, wr;
function Tr() {
  return (Tr = t(() => {
    (de(),
      _(),
      Qe(),
      n(),
      Be(),
      ft(),
      se(),
      Ee(),
      s(),
      Me(),
      o(),
      K(),
      W(),
      Qn(),
      ur(),
      xr(),
      (Cr = new WeakMap()),
      (wr = class {
        constructor(e) {
          ((this.openDragLock = null),
            (this.isDragging = !1),
            (this.currentDirection = null),
            (this.originPoint = { x: 0, y: 0 }),
            (this.constraints = !1),
            (this.hasMutatedConstraints = !1),
            (this.elastic = Ye()),
            (this.latestPointerEvent = null),
            (this.latestPanInfo = null),
            (this.visualElement = e));
        }
        start(e, { snapToCursor: t = !1, distanceThreshold: n } = {}) {
          let { presenceContext: r } = this.visualElement;
          if (r && r.isPresent === !1) return;
          let i = (e) => {
              t ? (this.stopAnimation(), this.snapToCursor(U(e).point)) : this.pauseAnimation();
            },
            a = (e, t) => {
              this.stopAnimation();
              let { drag: n, dragPropagation: r, onDragStart: i } = this.getProps();
              if (
                n &&
                !r &&
                (this.openDragLock && this.openDragLock(), (this.openDragLock = je(n)), !this.openDragLock)
              )
                return;
              ((this.latestPointerEvent = e),
                (this.latestPanInfo = t),
                (this.isDragging = !0),
                (this.currentDirection = null),
                this.resolveConstraints(),
                this.visualElement.projection &&
                  ((this.visualElement.projection.isAnimationBlocked = !0),
                  (this.visualElement.projection.target = void 0)),
                y((e) => {
                  let t = this.getAxisMotionValue(e).get() || 0;
                  if (dt.test(t)) {
                    let { projection: n } = this.visualElement;
                    if (n && n.layout) {
                      let r = n.layout.layoutBox[e];
                      r && (t = De(r) * (parseFloat(t) / 100));
                    }
                  }
                  this.originPoint[e] = t;
                }),
                i && u.postRender(() => i(e, t)),
                ye(this.visualElement, `transform`));
              let { animationState: a } = this.visualElement;
              a && a.setActive(`whileDrag`, !0);
            },
            o = (e, t) => {
              ((this.latestPointerEvent = e), (this.latestPanInfo = t));
              let {
                dragPropagation: n,
                dragDirectionLock: r,
                onDirectionLock: i,
                onDrag: a,
              } = this.getProps();
              if (!n && !this.openDragLock) return;
              let { offset: o } = t;
              if (r && this.currentDirection === null) {
                ((this.currentDirection = Sr(o)),
                  this.currentDirection !== null && i && i(this.currentDirection));
                return;
              }
              (this.updateAxis(`x`, t.point, o),
                this.updateAxis(`y`, t.point, o),
                this.visualElement.render(),
                a && a(e, t));
            },
            s = (e, t) => {
              ((this.latestPointerEvent = e),
                (this.latestPanInfo = t),
                this.stop(e, t),
                (this.latestPointerEvent = null),
                (this.latestPanInfo = null));
            },
            c = () =>
              y(
                (e) => this.getAnimationState(e) === `paused` && this.getAxisMotionValue(e).animation?.play(),
              ),
            { dragSnapToOrigin: l } = this.getProps();
          this.panSession = new lr(
            e,
            { onSessionStart: i, onStart: a, onMove: o, onSessionEnd: s, resumeAnimation: c },
            {
              transformPagePoint: this.visualElement.getTransformPagePoint(),
              dragSnapToOrigin: l,
              distanceThreshold: n,
              contextWindow: Zn(this.visualElement),
              element: this.visualElement.current,
            },
          );
        }
        stop(e, t) {
          let n = e || this.latestPointerEvent,
            r = t || this.latestPanInfo,
            i = this.isDragging;
          if ((this.cancel(), !i || !r || !n)) return;
          let { velocity: a } = r;
          this.startAnimation(a);
          let { onDragEnd: o } = this.getProps();
          o && u.postRender(() => o(n, r));
        }
        cancel() {
          this.isDragging = !1;
          let { projection: e, animationState: t } = this.visualElement;
          (e && (e.isAnimationBlocked = !1), this.endPanSession());
          let { dragPropagation: n } = this.getProps();
          (!n && this.openDragLock && (this.openDragLock(), (this.openDragLock = null)),
            t && t.setActive(`whileDrag`, !1));
        }
        endPanSession() {
          (this.panSession && this.panSession.end(), (this.panSession = void 0));
        }
        updateAxis(e, t, n) {
          let { drag: r } = this.getProps();
          if (!n || !J(e, r, this.currentDirection)) return;
          let i = this.getAxisMotionValue(e),
            a = this.originPoint[e] + n[e];
          (this.constraints && this.constraints[e] && (a = dr(a, this.constraints[e], this.elastic[e])),
            i.set(a));
        }
        resolveConstraints() {
          let { dragConstraints: e, dragElastic: t } = this.getProps(),
            n =
              this.visualElement.projection && !this.visualElement.projection.layout
                ? this.visualElement.projection.measure(!1)
                : this.visualElement.projection?.layout,
            r = this.constraints;
          (e && B(e)
            ? (this.constraints ||= this.resolveRefConstraints())
            : (this.constraints = e && n ? pr(n.layoutBox, e) : !1),
            (this.elastic = vr(t)),
            r !== this.constraints &&
              n &&
              this.constraints &&
              !this.hasMutatedConstraints &&
              y((e) => {
                this.constraints !== !1 &&
                  this.getAxisMotionValue(e) &&
                  (this.constraints[e] = _r(n.layoutBox[e], this.constraints[e]));
              }));
        }
        resolveRefConstraints() {
          let { dragConstraints: e, onMeasureDragConstraints: t } = this.getProps();
          if (!e || !B(e)) return !1;
          let n = e.current;
          Ae(
            n !== null,
            "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.",
            `drag-constraints-ref`,
          );
          let { projection: r } = this.visualElement;
          if (!r || !r.layout) return !1;
          let i = ct(n, r.root, this.visualElement.getTransformPagePoint()),
            a = hr(r.layout.layoutBox, i);
          if (t) {
            let e = t(Ge(a));
            ((this.hasMutatedConstraints = !!e), e && (a = He(e)));
          }
          return a;
        }
        startAnimation(e) {
          let {
              drag: t,
              dragMomentum: n,
              dragElastic: r,
              dragTransition: i,
              dragSnapToOrigin: a,
              onDragTransitionEnd: o,
            } = this.getProps(),
            s = this.constraints || {},
            c = y((o) => {
              if (!J(o, t, this.currentDirection)) return;
              let c = (s && s[o]) || {};
              a && (c = { min: 0, max: 0 });
              let l = r ? 200 : 1e6,
                u = r ? 40 : 1e7,
                d = {
                  type: `inertia`,
                  velocity: n ? e[o] : 0,
                  bounceStiffness: l,
                  bounceDamping: u,
                  timeConstant: 750,
                  restDelta: 1,
                  restSpeed: 10,
                  ...i,
                  ...c,
                };
              return this.startAxisValueAnimation(o, d);
            });
          return Promise.all(c).then(o);
        }
        startAxisValueAnimation(e, t) {
          let n = this.getAxisMotionValue(e);
          return (ye(this.visualElement, e), n.start(Je(e, n, 0, t, this.visualElement, !1)));
        }
        stopAnimation() {
          y((e) => this.getAxisMotionValue(e).stop());
        }
        pauseAnimation() {
          y((e) => this.getAxisMotionValue(e).animation?.pause());
        }
        getAnimationState(e) {
          return this.getAxisMotionValue(e).animation?.state;
        }
        getAxisMotionValue(e) {
          let t = `_drag${e.toUpperCase()}`,
            n = this.visualElement.getProps();
          return n[t] || this.visualElement.getValue(e, (n.initial ? n.initial[e] : void 0) || 0);
        }
        snapToCursor(e) {
          y((t) => {
            let { drag: n } = this.getProps();
            if (!J(t, n, this.currentDirection)) return;
            let { projection: r } = this.visualElement,
              i = this.getAxisMotionValue(t);
            if (r && r.layout) {
              let { min: n, max: a } = r.layout.layoutBox[t],
                o = i.get() || 0;
              i.set(e[t] - v(n, a, 0.5) + o);
            }
          });
        }
        scalePositionWithinConstraints() {
          if (!this.visualElement.current) return;
          let { drag: e, dragConstraints: t } = this.getProps(),
            { projection: n } = this.visualElement;
          if (!B(t) || !n || !this.constraints) return;
          this.stopAnimation();
          let r = { x: 0, y: 0 };
          y((e) => {
            let t = this.getAxisMotionValue(e);
            if (t && this.constraints !== !1) {
              let n = t.get();
              r[e] = gr({ min: n, max: n }, this.constraints[e]);
            }
          });
          let { transformTemplate: i } = this.visualElement.getProps();
          ((this.visualElement.current.style.transform = i ? i({}, ``) : `none`),
            n.root && n.root.updateScroll(),
            n.updateLayout(),
            this.resolveConstraints(),
            y((t) => {
              if (!J(t, e, null)) return;
              let n = this.getAxisMotionValue(t),
                { min: i, max: a } = this.constraints[t];
              n.set(v(i, a, r[t]));
            }));
        }
        addListeners() {
          if (!this.visualElement.current) return;
          Cr.set(this.visualElement, this);
          let e = this.visualElement.current,
            t = G(e, `pointerdown`, (t) => {
              let { drag: n, dragListener: r = !0 } = this.getProps(),
                i = t.target,
                a = i !== e && xe(i);
              n && r && !a && this.start(t);
            }),
            n = () => {
              let { dragConstraints: e } = this.getProps();
              B(e) && e.current && (this.constraints = this.resolveRefConstraints());
            },
            { projection: r } = this.visualElement,
            i = r.addEventListener(`measure`, n);
          (r && !r.layout && (r.root && r.root.updateScroll(), r.updateLayout()), u.read(n));
          let a = S(window, `resize`, () => this.scalePositionWithinConstraints()),
            o = r.addEventListener(`didUpdate`, ({ delta: e, hasLayoutChanged: t }) => {
              this.isDragging &&
                t &&
                (y((t) => {
                  let n = this.getAxisMotionValue(t);
                  n && ((this.originPoint[t] += e[t].translate), n.set(n.get() + e[t].translate));
                }),
                this.visualElement.render());
            });
          return () => {
            (a(), t(), i(), o && o());
          };
        }
        getProps() {
          let e = this.visualElement.getProps(),
            {
              drag: t = !1,
              dragDirectionLock: n = !1,
              dragPropagation: r = !1,
              dragConstraints: i = !1,
              dragElastic: a = q,
              dragMomentum: o = !0,
            } = e;
          return {
            ...e,
            drag: t,
            dragDirectionLock: n,
            dragPropagation: r,
            dragConstraints: i,
            dragElastic: a,
            dragMomentum: o,
          };
        }
      }));
  }))();
}
var Er;
function Dr() {
  return (Dr = t(() => {
    (b(),
      Ce(),
      Tr(),
      (Er = class extends x {
        constructor(e) {
          (super(e), (this.removeGroupControls = C), (this.removeListeners = C), (this.controls = new wr(e)));
        }
        mount() {
          let { dragControls: e } = this.node.getProps();
          (e && (this.removeGroupControls = e.subscribe(this.controls)),
            (this.removeListeners = this.controls.addListeners() || C));
        }
        update() {
          let { dragControls: e } = this.node.getProps(),
            { dragControls: t } = this.node.prevProps || {};
          e !== t &&
            (this.removeGroupControls(), e && (this.removeGroupControls = e.subscribe(this.controls)));
        }
        unmount() {
          (this.removeGroupControls(),
            this.removeListeners(),
            this.controls.isDragging || this.controls.endPanSession());
        }
      }));
  }))();
}
var Y, Or;
function kr() {
  return (kr = t(() => {
    (b(),
      _(),
      Ce(),
      K(),
      Qn(),
      ur(),
      (Y = (e) => (t, n) => {
        e && u.postRender(() => e(t, n));
      }),
      (Or = class extends x {
        constructor() {
          (super(...arguments), (this.removePointerDownListener = C));
        }
        onPointerDown(e) {
          this.session = new lr(e, this.createPanHandlers(), {
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Zn(this.node),
          });
        }
        createPanHandlers() {
          let { onPanSessionStart: e, onPanStart: t, onPan: n, onPanEnd: r } = this.node.getProps();
          return {
            onSessionStart: Y(e),
            onStart: Y(t),
            onMove: n,
            onEnd: (e, t) => {
              (delete this.session, r && u.postRender(() => r(e, t)));
            },
          };
        }
        mount() {
          this.removePointerDownListener = G(this.node.current, `pointerdown`, (e) => this.onPointerDown(e));
        }
        update() {
          this.session && this.session.updateHandlers(this.createPanHandlers());
        }
        unmount() {
          (this.removePointerDownListener(), this.session && this.session.end());
        }
      }));
  }))();
}
function Ar(e) {
  let [t, n] = wt(),
    r = (0, X.useContext)(w);
  return (0, jr.jsx)(Mr, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: (0, X.useContext)(En),
    isPresent: t,
    safeToRemove: n,
  });
}
var jr, X, Z, Mr;
function Nr() {
  return (Nr = t(() => {
    ((jr = le()),
      ne(),
      _(),
      ae(),
      (X = d()),
      Tt(),
      T(),
      Dn(),
      (Z = !1),
      (Mr = class extends X.Component {
        componentDidMount() {
          let { visualElement: e, layoutGroup: t, switchLayoutGroup: n, layoutId: r } = this.props,
            { projection: i } = e;
          (i &&
            (t.group && t.group.add(i),
            n && n.register && r && n.register(i),
            Z && i.root.didUpdate(),
            i.addEventListener(`animationComplete`, () => {
              this.safeToRemove();
            }),
            i.setOptions({
              ...i.options,
              layoutDependency: this.props.layoutDependency,
              onExitComplete: () => this.safeToRemove(),
            })),
            (p.hasEverUpdated = !0));
        }
        getSnapshotBeforeUpdate(e) {
          let { layoutDependency: t, visualElement: n, drag: r, isPresent: i } = this.props,
            { projection: a } = n;
          return a
            ? ((a.isPresent = i),
              e.layoutDependency !== t && a.setOptions({ ...a.options, layoutDependency: t }),
              (Z = !0),
              r || e.layoutDependency !== t || t === void 0 || e.isPresent !== i
                ? a.willUpdate()
                : this.safeToRemove(),
              e.isPresent !== i &&
                (i
                  ? a.promote()
                  : a.relegate() ||
                    u.postRender(() => {
                      let e = a.getStack();
                      (!e || !e.members.length) && this.safeToRemove();
                    })),
              null)
            : null;
        }
        componentDidUpdate() {
          let { projection: e } = this.props.visualElement;
          e &&
            (e.root.didUpdate(),
            tt.postRender(() => {
              !e.currentAnimation && e.isLead() && this.safeToRemove();
            }));
        }
        componentWillUnmount() {
          let { visualElement: e, layoutGroup: t, switchLayoutGroup: n } = this.props,
            { projection: r } = e;
          ((Z = !0),
            r &&
              (r.scheduleCheckAfterUnmount(),
              t && t.group && t.group.remove(r),
              n && n.deregister && n.deregister(r)));
        }
        safeToRemove() {
          let { safeToRemove: e } = this.props;
          e && e();
        }
        render() {
          return null;
        }
      }));
  }))();
}
var Pr;
function Fr() {
  return (Fr = t(() => {
    (Dr(),
      kr(),
      Nr(),
      _e(),
      (Pr = { pan: { Feature: Or }, drag: { Feature: Er, ProjectionNode: me, MeasureLayout: Ar } }));
  }))();
}
function Ir(e, t, n) {
  let { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive(`whileHover`, n === `Start`);
  let i = r[`onHover` + n];
  i && u.postRender(() => i(t, U(t)));
}
var Lr;
function Rr() {
  return (Rr = t(() => {
    (b(),
      g(),
      _(),
      W(),
      (Lr = class extends x {
        mount() {
          let { current: e } = this.node;
          e && (this.unmount = ke(e, (e, t) => (Ir(this.node, t, `Start`), (e) => Ir(this.node, e, `End`))));
        }
        unmount() {}
      }));
  }))();
}
var zr;
function Br() {
  return (Br = t(() => {
    (b(),
      re(),
      (zr = class extends x {
        constructor() {
          (super(...arguments), (this.isActive = !1));
        }
        onFocus() {
          let e = !1;
          try {
            e = this.node.current.matches(`:focus-visible`);
          } catch {
            e = !0;
          }
          e &&
            this.node.animationState &&
            (this.node.animationState.setActive(`whileFocus`, !0), (this.isActive = !0));
        }
        onBlur() {
          this.isActive &&
            this.node.animationState &&
            (this.node.animationState.setActive(`whileFocus`, !1), (this.isActive = !1));
        }
        mount() {
          this.unmount = ue(
            S(this.node.current, `focus`, () => this.onFocus()),
            S(this.node.current, `blur`, () => this.onBlur()),
          );
        }
        unmount() {}
      }));
  }))();
}
function Vr(e, t, n) {
  let { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled) return;
  e.animationState && r.whileTap && e.animationState.setActive(`whileTap`, n === `Start`);
  let i = r[`onTap` + (n === `End` ? `` : n)];
  i && u.postRender(() => i(t, U(t)));
}
var Hr;
function Ur() {
  return (Ur = t(() => {
    (b(),
      f(),
      _(),
      W(),
      (Hr = class extends x {
        mount() {
          let { current: e } = this.node;
          e &&
            (this.unmount = te(
              e,
              (e, t) => (
                Vr(this.node, t, `Start`),
                (e, { success: t }) => Vr(this.node, e, t ? `End` : `Cancel`)
              ),
              { useGlobalTarget: this.node.props.globalTapTarget },
            ));
        }
        unmount() {}
      }));
  }))();
}
function Wr({ root: e, ...t }) {
  let n = e || document;
  $.has(n) || $.set(n, {});
  let r = $.get(n),
    i = JSON.stringify(t);
  return (r[i] || (r[i] = new IntersectionObserver(qr, { root: e, ...t })), r[i]);
}
function Gr(e, t, n) {
  let r = Wr(t);
  return (
    Q.set(e, n),
    r.observe(e),
    () => {
      (Q.delete(e), r.unobserve(e));
    }
  );
}
var Q, $, Kr, qr;
function Jr() {
  return (Jr = t(() => {
    ((Q = new WeakMap()),
      ($ = new WeakMap()),
      (Kr = (e) => {
        let t = Q.get(e.target);
        t && t(e);
      }),
      (qr = (e) => {
        e.forEach(Kr);
      }));
  }))();
}
function Yr({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (n) => e[n] !== t[n];
}
var Xr, Zr;
function Qr() {
  return (Qr = t(() => {
    (b(),
      Jr(),
      (Xr = { some: 0, all: 1 }),
      (Zr = class extends x {
        constructor() {
          (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
        }
        startObserver() {
          this.unmount();
          let { viewport: e = {} } = this.node.getProps(),
            { root: t, margin: n, amount: r = `some`, once: i } = e,
            a = { root: t ? t.current : void 0, rootMargin: n, threshold: typeof r == `number` ? r : Xr[r] };
          return Gr(this.node.current, a, (e) => {
            let { isIntersecting: t } = e;
            if (this.isInView === t || ((this.isInView = t), i && !t && this.hasEnteredView)) return;
            (t && (this.hasEnteredView = !0),
              this.node.animationState && this.node.animationState.setActive(`whileInView`, t));
            let { onViewportEnter: n, onViewportLeave: r } = this.node.getProps(),
              a = t ? n : r;
            a && a(e);
          });
        }
        mount() {
          this.startObserver();
        }
        update() {
          if (typeof IntersectionObserver > `u`) return;
          let { props: e, prevProps: t } = this.node;
          [`amount`, `margin`, `root`].some(Yr(e, t)) && this.startObserver();
        }
        unmount() {}
      }));
  }))();
}
var $r;
function ei() {
  return (ei = t(() => {
    (Rr(),
      Br(),
      Ur(),
      Qr(),
      ($r = {
        inView: { Feature: Zr },
        tap: { Feature: Hr },
        focus: { Feature: zr },
        hover: { Feature: Lr },
      }));
  }))();
}
var ti;
function ni() {
  return (ni = t(() => {
    (_e(), Nr(), (ti = { layout: { ProjectionNode: me, MeasureLayout: Ar } }));
  }))();
}
var ri;
function ii() {
  return (ii = t(() => {
    (Yn(), Fr(), ei(), ni(), (ri = { ...Jn, ...$r, ...Pr, ...ti }));
  }))();
}
var ai;
function oi() {
  return (oi = t(() => {
    (Hn(), zn(), ii(), (ai = Rn(ri, Vn)));
  }))();
}
export {
  k as a,
  O as c,
  _t as d,
  ht as f,
  wt as i,
  xt as l,
  T as m,
  ai as n,
  A as o,
  w as p,
  Tt as r,
  D as s,
  oi as t,
  bt as u,
};
//# sourceMappingURL=proxy-1375ea912d9a.js.map
