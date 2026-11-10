import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as n,
  $W as r,
  $st as i,
  CH as a,
  CNt as o,
  DK as s,
  FBt as c,
  FE as l,
  FTt as u,
  HSt as d,
  HTt as f,
  IH as p,
  ITt as m,
  JJ as h,
  Jj as g,
  Jz as _,
  LNt as v,
  ME as y,
  MNt as b,
  NNt as x,
  NSt as S,
  OC as C,
  OE as w,
  PBt as T,
  Qst as E,
  SB as D,
  TE as O,
  TY as k,
  UTt as A,
  VE as j,
  VTt as M,
  WTt as N,
  XOt as P,
  XS as F,
  Y3 as I,
  YJ as L,
  Yj as R,
  Z3 as z,
  ZSt as B,
  _wt as V,
  aB as H,
  aCt as U,
  ck as W,
  gk as ee,
  iB as te,
  iCt as G,
  iG as ne,
  jK as re,
  kCt as ie,
  mk as ae,
  nB as oe,
  nCt as K,
  okt as se,
  qz as ce,
  rB as le,
  rG as ue,
  rk as q,
  tCt as de,
  tk as fe,
  tkt as J,
  wB as pe,
  yCt as me,
  yV as he,
  zE as ge,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  Afn as _e,
  Ddn as ve,
  Edn as ye,
  Gdn as be,
  JRt as xe,
  Jlr as Se,
  K_n as Ce,
  MOr as we,
  Mit as Te,
  Nit as Ee,
  O7n as De,
  Odn as Oe,
  Olr as ke,
  Q2n as Ae,
  QZ as je,
  SRn as Me,
  Sb as Ne,
  Tan as Pe,
  Tdn as Fe,
  Xlr as Ie,
  YRt as Le,
  Z2n as Re,
  ZZ as ze,
  Zlr as Be,
  bRn as Ve,
  bdn as He,
  dan as Ue,
  eOr as We,
  fan as Ge,
  gur as Ke,
  hdn as qe,
  iH as Je,
  j7n as Ye,
  jfn as Xe,
  jit as Ze,
  kdn as Qe,
  kfn as $e,
  lpn as et,
  mlr as tt,
  nfn as nt,
  npt as rt,
  oH as it,
  q_n as at,
  rpt as ot,
  tfn as st,
  uOr as ct,
  upn as lt,
  vTn as ut,
  van as dt,
  vdn as ft,
  wan as pt,
  wdn as mt,
  xTn as ht,
  xb as gt,
  yan as _t,
  zOr as vt,
} from "./app-initial-ad16eaadf81f.js";
function yt(e) {
  let t = (0, bt.c)(22),
    {
      title: n,
      pageId: r,
      symbol: i,
      documentType: a,
      namespace: o,
      navigation: s,
      people: c,
      overflow: l,
      onExpand: u,
      onSelect: d,
    } = e,
    f = se(),
    p = G(ke),
    m = d ? `button` : `div`,
    h;
  t[0] !== m ||
  t[1] !== a ||
  t[2] !== o ||
  t[3] !== s ||
  t[4] !== d ||
  t[5] !== r ||
  t[6] !== p ||
  t[7] !== i ||
  t[8] !== n
    ? ((h =
        p && s != null && d == null
          ? s
          : (0, xt.jsx)(Ue, {
              pageId: r,
              documentType: a,
              namespace: o,
              symbol: i,
              title: n,
              children: (e) => {
                let { icon: t, title: n } = e;
                return (0, xt.jsxs)(m, {
                  type: d ? `button` : void 0,
                  className: `flex min-w-0 items-center gap-2 text-sm font-medium`,
                  "data-popcorn-element-handle": d ? `` : void 0,
                  onClick: d,
                  children: [t, (0, xt.jsx)(`span`, { className: `truncate`, children: n })],
                });
              },
            })),
      (t[0] = m),
      (t[1] = a),
      (t[2] = o),
      (t[3] = s),
      (t[4] = d),
      (t[5] = r),
      (t[6] = p),
      (t[7] = i),
      (t[8] = n),
      (t[9] = h))
    : (h = t[9]);
  let g;
  t[10] === h
    ? (g = t[11])
    : ((g = (0, xt.jsx)(`div`, { className: `min-w-0 flex-1`, children: h })), (t[10] = h), (t[11] = g));
  let _;
  t[12] !== f || t[13] !== u
    ? ((_ =
        u != null &&
        (0, xt.jsx)(I, {
          color: `ghost`,
          size: `toolbar`,
          uniform: !0,
          onClick: u,
          "aria-label": f.formatMessage({
            id: `codex.page.inline.expand`,
            defaultMessage: `Open in side panel`,
            description: `Accessible label for opening a Page embedded in a Canvas card in the side panel`,
          }),
          children: (0, xt.jsx)(he, {}),
        })),
      (t[12] = f),
      (t[13] = u),
      (t[14] = _))
    : (_ = t[14]);
  let v;
  t[15] !== l || t[16] !== c || t[17] !== _
    ? ((v = (0, xt.jsxs)(`div`, { className: `flex items-center gap-2`, children: [c, l, _] })),
      (t[15] = l),
      (t[16] = c),
      (t[17] = _),
      (t[18] = v))
    : (v = t[18]);
  let y;
  return (
    t[19] !== g || t[20] !== v
      ? ((y = (0, xt.jsxs)(`div`, {
          className: `flex h-toolbar shrink-0 items-center justify-between gap-3 border-b border-subtle px-4 select-none`,
          children: [g, v],
        })),
        (t[19] = g),
        (t[20] = v),
        (t[21] = y))
      : (y = t[21]),
    y
  );
}
var bt, xt;
function St() {
  return (St = e(() => {
    ((bt = T()), B(), P(), z(), k(), tt(), Ge(), (xt = v()));
  }))();
}
var Ct, wt, Tt;
function Et() {
  return (Et = e(() => {
    ((Ct = `_width_vx0s9_2`), (wt = `_column_vx0s9_16`), (Tt = { width: Ct, column: wt }));
  }))();
}
function Dt() {
  let e = (0, Ot.c)(9),
    t = G(_),
    n = N(),
    r,
    i,
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = { "--page-explorer-progress": 0, opacity: 0 }),
      (i = { "--page-explorer-progress": 1, opacity: 1 }),
      (a = { "--page-explorer-progress": 0, opacity: 0 }),
      (e[0] = r),
      (e[1] = i),
      (e[2] = a))
    : ((r = e[0]), (i = e[1]), (a = e[2]));
  let o;
  e[3] === t ? (o = e[4]) : ((o = t ? { duration: 0 } : De), (e[3] = t), (e[4] = o));
  let s = !n,
    c = !n,
    l;
  return (
    e[5] !== o || e[6] !== s || e[7] !== c
      ? ((l = (0, kt.jsx)(m.div, {
          "data-page-explorer-column": !0,
          className: `${Tt.width} ${Tt.column} hidden min-h-0 shrink-0 @3xl/page-explorer:block`,
          initial: r,
          animate: i,
          exit: a,
          transition: o,
          "aria-hidden": s,
          inert: c,
        })),
        (e[5] = o),
        (e[6] = s),
        (e[7] = c),
        (e[8] = l))
      : (l = e[8]),
    l
  );
}
var Ot, kt;
function At() {
  return (At = e(() => {
    ((Ot = T()), u(), A(), B(), Ye(), ce(), Et(), (kt = v()));
  }))();
}
function jt(e) {
  let t = (0, Mt.c)(11),
    { children: n, explorer: r } = e;
  if (r == null) {
    let e;
    return (
      t[0] === n ? (e = t[1]) : ((e = (0, Nt.jsx)(Nt.Fragment, { children: n })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let i;
  t[2] === r?.open
    ? (i = t[3])
    : ((i = r?.open ? (0, Nt.jsx)(Dt, {}, `page-explorer`) : null), (t[2] = r?.open), (t[3] = i));
  let a;
  t[4] === i ? (a = t[5]) : ((a = (0, Nt.jsx)(M, { initial: !1, children: i })), (t[4] = i), (t[5] = a));
  let o;
  t[6] === n
    ? (o = t[7])
    : ((o = (0, Nt.jsx)(`div`, { className: `relative flex min-h-0 min-w-0 flex-1 flex-col`, children: n })),
      (t[6] = n),
      (t[7] = o));
  let s;
  return (
    t[8] !== a || t[9] !== o
      ? ((s = (0, Nt.jsxs)(`div`, {
          className: `relative flex min-h-0 min-w-0 flex-1 overflow-hidden`,
          "data-page-explorer-content": !0,
          children: [a, o],
        })),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s))
      : (s = t[10]),
    s
  );
}
var Mt, Nt;
function Pt() {
  return (Pt = e(() => {
    ((Mt = T()), f(), At(), (Nt = v()));
  }))();
}
var Ft, Y, It;
function Lt() {
  return (Lt = e(() => {
    (B(),
      i(),
      (Ft = V(`BreadcrumbMenus`, { parent: E })),
      (Y = ie(Ft, () => null)),
      (It = me(Ft, (e, { get: t }) => t(Y)?.id === e)));
  }))();
}
function Rt(e) {
  let t = (0, Vt.c)(5),
    { children: n } = e,
    r = (0, Ht.useId)(),
    i;
  t[0] === r ? (i = t[1]) : ((i = { id: r }), (t[0] = r), (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, Ut.jsx)(U, { scope: Ft, value: i, children: n })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function zt(e) {
  let t = (0, Vt.c)(37),
    { id: r, children: i, enabled: a, triggerButton: o } = e,
    s = a === void 0 || a,
    c = n(Ft),
    l = (0, Ht.useId)(),
    u = r ?? l,
    d = K(It, u),
    f = (0, Ht.useRef)(null),
    p = (0, Ht.useRef)(null),
    m = (0, Ht.useRef)(null),
    h = (0, Ht.useRef)(null),
    g = (0, Ht.useRef)(!1),
    _ = s && d,
    v;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = function () {
        (m.current?.(),
          (m.current = null),
          h.current != null && (window.clearTimeout(h.current), (h.current = null)));
      }),
      (t[0] = v))
    : (v = t[0]);
  let y = v,
    b;
  t[1] !== u || t[2] !== c
    ? ((b = function () {
        (y(), (g.current = !0), c.set(Y, (e) => (e?.id === u ? null : e)));
      }),
      (t[1] = u),
      (t[2] = c),
      (t[3] = b))
    : (b = t[3]);
  let x = b,
    S;
  t[4] !== x || t[5] !== c
    ? ((S = function (e) {
        if (e.pointerType !== `mouse` || c.get(Y)?.interaction === `explicit`) return;
        y();
        let t = f.current,
          n = p.current;
        if (t == null || n == null || e.relatedTarget == null) {
          x();
          return;
        }
        let r = [n];
        for (let e of r) {
          let t = e.querySelector(`[role="menuitem"][aria-expanded="true"]`)?.getAttribute(`aria-controls`),
            n = t == null ? null : e.ownerDocument.getElementById(t);
          n != null && !r.includes(n) && r.push(n);
        }
        let i = e.relatedTarget;
        if (i instanceof Node && [t, ...r].some((e) => e.contains(i))) return;
        let a = n;
        e.currentTarget === t
          ? (a = t)
          : e.target instanceof Element && (a = e.target.closest(`[role="menu"]`) ?? n);
        let o = a.getBoundingClientRect(),
          s = a === t ? r.slice(0, 1) : [...r, t];
        for (let n of s) {
          if (n === a) continue;
          let r = n.getBoundingClientRect(),
            i;
          if (
            (r.left >= o.right && e.clientX >= o.right
              ? (i = `right`)
              : r.right <= o.left && e.clientX <= o.left
                ? (i = `left`)
                : r.top >= o.bottom && (a === t || e.clientY >= o.bottom)
                  ? (i = `bottom`)
                  : r.bottom <= o.top && (a === t || e.clientY <= o.top) && (i = `top`),
            i == null)
          )
            continue;
          let s = () => {
            (h.current != null && window.clearTimeout(h.current), (h.current = window.setTimeout(x, 100)));
          };
          ((m.current = H({
            destinationElement: n,
            destinationSide: i,
            onEnterDestination: y,
            onMoveInsideTriangle: s,
            onMoveOutsideTriangle: x,
            pointer: { x: e.clientX, y: e.clientY },
            sourceElement: a,
          })),
            s());
          return;
        }
        x();
      }),
      (t[4] = x),
      (t[5] = c),
      (t[6] = S))
    : (S = t[6]);
  let C = S,
    w;
  t[7] !== u || t[8] !== c
    ? ((w = (e) => {
        (y(),
          e
            ? ((g.current = !1), c.set(Y, { id: u, interaction: `explicit` }))
            : c.set(Y, (e) => (e?.id === u ? null : e)));
      }),
      (t[7] = u),
      (t[8] = c),
      (t[9] = w))
    : (w = t[9]);
  let T;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (e) => (
        (p.current = e),
        () => {
          ((p.current = null), y());
        }
      )),
      (t[10] = T))
    : (T = t[10]);
  let E, D, O;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (e) => {
        let t = e.detail.originalEvent.target;
        t instanceof Node && f.current?.contains(t) && e.preventDefault();
      }),
      (D = () => {
        g.current = !1;
      }),
      (O = (e) => {
        g.current && e.preventDefault();
      }),
      (t[11] = E),
      (t[12] = D),
      (t[13] = O))
    : ((E = t[11]), (D = t[12]), (O = t[13]));
  let k;
  t[14] === x
    ? (k = t[15])
    : ((k = (e) => {
        if (((f.current = e), e == null)) return;
        let t = new ResizeObserver(() => {
          e.getClientRects().length === 0 && x();
        });
        return (
          t.observe(e),
          () => {
            (t.disconnect(), y());
          }
        );
      }),
      (t[14] = x),
      (t[15] = k));
  let A;
  t[16] !== s || t[17] !== u || t[18] !== c
    ? ((A = (e) => {
        if (s && e.pointerType === `mouse`) {
          y();
          let e = c.get(Y);
          if (e?.id === u && e.interaction === `explicit`) return;
          ((g.current = !0), c.set(Y, { id: u, interaction: `hover` }));
        }
      }),
      (t[16] = s),
      (t[17] = u),
      (t[18] = c),
      (t[19] = A))
    : (A = t[19]);
  let j;
  t[20] !== u || t[21] !== _ || t[22] !== c || t[23] !== o.props
    ? ((j = (e) => {
        (o.props.onPointerDown?.(e),
          !e.defaultPrevented &&
            e.button === 0 &&
            !e.ctrlKey &&
            _ &&
            c.get(Y)?.interaction === `hover` &&
            (e.preventDefault(), y(), (g.current = !1), c.set(Y, { id: u, interaction: `explicit` })));
      }),
      (t[20] = u),
      (t[21] = _),
      (t[22] = c),
      (t[23] = o.props),
      (t[24] = j))
    : (j = t[24]);
  let M;
  t[25] !== C || t[26] !== k || t[27] !== A || t[28] !== j || t[29] !== o.props
    ? ((M = (0, Ut.jsx)(I, { ...o.props, ref: k, onPointerEnter: A, onPointerDown: j, onPointerLeave: C })),
      (t[25] = C),
      (t[26] = k),
      (t[27] = A),
      (t[28] = j),
      (t[29] = o.props),
      (t[30] = M))
    : (M = t[30]);
  let N = _ && i,
    P;
  return (
    t[31] !== C || t[32] !== _ || t[33] !== M || t[34] !== N || t[35] !== w
      ? ((P = (0, Ut.jsx)(fe, {
          align: `start`,
          contentWidth: `menuWide`,
          contentMaxHeight: `tall`,
          open: _,
          onOpenChange: w,
          contentRef: T,
          onContentFocus: Bt,
          onContentPointerEnter: y,
          onContentPointerLeave: C,
          onInteractOutside: E,
          onEscapeKeyDown: D,
          onCloseAutoFocus: O,
          triggerButton: M,
          children: N,
        })),
        (t[31] = C),
        (t[32] = _),
        (t[33] = M),
        (t[34] = N),
        (t[35] = w),
        (t[36] = P))
      : (P = t[36]),
    P
  );
}
function Bt(e) {
  e.target === e.currentTarget &&
    e.currentTarget
      .querySelector(`[data-breadcrumb-highlighted]`)
      ?.closest(`[role="menuitem"]`)
      ?.focus({ preventScroll: !0 });
}
var Vt, Ht, Ut;
function Wt() {
  return (Wt = e(() => {
    ((Vt = T()), B(), (Ht = c()), z(), W(), te(), Lt(), (Ut = v()));
  }))();
}
function Gt(e) {
  let t = (0, qt.c)(5),
    { children: n, icon: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, Jt.jsx)(`span`, {
        ref: Kt,
        className: `block w-full min-w-0 overflow-hidden whitespace-nowrap data-[overflowing=true]:text-fade-truncate`,
        children: (0, Jt.jsx)(`span`, { className: `inline-block`, children: n }),
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, Jt.jsxs)(`span`, {
          className: `flex max-w-full min-w-0 items-center gap-1`,
          children: [r, i],
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function Kt(e) {
  if (e == null) return;
  let t = e.firstElementChild;
  if (t == null) return;
  let n = 0,
    r = 0,
    i = new ResizeObserver((t) => {
      for (let i of t) i.target === e ? (n = i.contentRect.width) : (r = i.contentRect.width);
      let i = String(Math.round(r) > Math.round(n));
      e.dataset.overflowing !== i && (e.dataset.overflowing = i);
    });
  return (i.observe(e), i.observe(t), () => i.disconnect());
}
var qt, Jt;
function Yt() {
  return (Yt = e(() => {
    ((qt = T()), (Jt = v()));
  }))();
}
function Xt(e) {
  let t = (0, Qt.c)(83),
    { alwaysShowTitle: i, items: a, title: o, pageId: c, menu: l, explorer: u } = e,
    d = i !== void 0 && i,
    f = n(we),
    p = se(),
    m = (0, $t.useId)(),
    g = (0, $t.useRef)(null),
    _ = (0, $t.useRef)(!1),
    v = (0, $t.useRef)(!1),
    b = K(ut, `toggleFileTreePanel`),
    x = G(Ke),
    S = G(at),
    C = G(Ce),
    w;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = { enabled: !1 }), (t[0] = w)) : (w = t[0]);
  let { space: T } = K(Oe, c, w),
    E = K(Ee, c),
    [O, k] = (0, $t.useState)(!1),
    A;
  t[1] !== c || t[2] !== C || t[3] !== T
    ? ((A = T?.root_page_id === c && C.includes(T.id) ? T : void 0),
      (t[1] = c),
      (t[2] = C),
      (t[3] = T),
      (t[4] = A))
    : (A = t[4]);
  let j = A,
    M;
  t[5] !== c || t[6] !== S || t[7] !== j
    ? ((M = S.includes(c) || j != null), (t[5] = c), (t[6] = S), (t[7] = j), (t[8] = M))
    : (M = t[8]);
  let N = M,
    P;
  t[9] === a ? (P = t[10]) : ((P = a.at(-1)), (t[9] = a), (t[10] = P));
  let F = P,
    I = G(ct),
    z;
  t[11] === c ? (z = t[12]) : ((z = lt(c)), (t[11] = c), (t[12] = z));
  let B = z,
    V;
  t[13] === l
    ? (V = t[14])
    : ((V = function () {
        (k(!1), l?.onOpenChange?.(!1));
      }),
      (t[13] = l),
      (t[14] = V));
  let H = V,
    U;
  t[15] === l
    ? (U = t[16])
    : ((U = function () {
        (k(!0), l?.onOpenChange?.(!0));
      }),
      (t[15] = l),
      (t[16] = U));
  let W = U,
    ee;
  t[17] === H
    ? (ee = t[18])
    : ((ee = function () {
        ((v.current = !0), H());
      }),
      (t[17] = H),
      (t[18] = ee));
  let te = ee,
    ie = u != null && (l?.open ?? O),
    oe;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = () => {
        let e = g.current;
        return e?.contains(e.ownerDocument.activeElement) ?? !1;
      }),
      (t[19] = oe))
    : (oe = t[19]);
  let ce;
  (t[20] === ie ? (ce = t[21]) : ((ce = { enabled: ie, isActive: oe }), (t[20] = ie), (t[21] = ce)),
    Ae(`toggleFileTreePanel`, te, ce));
  let le = !d && I?.isVisible === !0,
    de;
  t[22] === l?.icon
    ? (de = t[23])
    : ((de = l?.icon ?? (0, X.jsx)(D, { icon: { 16: h, 20: L } })), (t[22] = l?.icon), (t[23] = de));
  let fe = F?.label,
    pe;
  t[24] === fe
    ? (pe = t[25])
    : ((pe = (0, X.jsx)(`span`, {
        className: `flex max-w-42 min-w-0 text-default`,
        "data-viewer-header-collapsible": !0,
        children: (0, X.jsx)(ze, { animateOnGroupHover: !0, children: fe }),
      })),
      (t[24] = fe),
      (t[25] = pe));
  let me;
  t[26] !== le || t[27] !== de || t[28] !== pe
    ? ((me = (0, X.jsx)(y, { titleInTab: le, icon: de, children: pe })),
      (t[26] = le),
      (t[27] = de),
      (t[28] = pe),
      (t[29] = me))
    : (me = t[29]);
  let he = me,
    _e = l?.triggerRef,
    ve = u?.triggerRef,
    ye;
  t[30] !== _e || t[31] !== ve ? ((ye = R(_e, ve)), (t[30] = _e), (t[31] = ve), (t[32] = ye)) : (ye = t[32]);
  let be;
  t[33] !== p || t[34] !== l?.ariaLabel || t[35] !== o
    ? ((be =
        l?.ariaLabel ??
        (o?.trim()
          ? p.formatMessage(
              {
                id: `codex.space.page.navigation.filenameMenu`,
                defaultMessage: `File menu for {title}`,
                description: `Accessible name for a page's filename dropdown`,
              },
              { title: o },
            )
          : p.formatMessage({
              id: `codex.space.page.navigation.untitledFilenameMenu`,
              defaultMessage: `File menu`,
              description: `Accessible name for the filename dropdown of an untitled page`,
            }))),
      (t[33] = p),
      (t[34] = l?.ariaLabel),
      (t[35] = o),
      (t[36] = be))
    : (be = t[36]);
  let xe, Se;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((xe = () => {
        _.current = !0;
      }),
      (Se = () => {
        _.current = !1;
      }),
      (t[37] = xe),
      (t[38] = Se))
    : ((xe = t[37]), (Se = t[38]));
  let Te;
  t[39] !== ye || t[40] !== be || t[41] !== m
    ? ((Te = {
        id: m,
        ref: ye,
        className: `group max-w-full min-w-0 select-none`,
        "aria-label": be,
        onPointerDown: xe,
        onKeyDown: Se,
      }),
      (t[39] = ye),
      (t[40] = be),
      (t[41] = m),
      (t[42] = Te))
    : (Te = t[42]);
  let De = Te,
    ke = l?.open ?? O,
    je;
  t[43] !== H || t[44] !== W
    ? ((je = (e) => (e ? W() : H())), (t[43] = H), (t[44] = W), (t[45] = je))
    : (je = t[45]);
  let Me = l == null,
    Ne = l?.open ?? O,
    Pe = F?.label,
    Ie;
  t[46] !== Me || t[47] !== Ne || t[48] !== Pe || t[49] !== he || t[50] !== De
    ? ((Ie = (0, X.jsx)(Zt, { ...De, plain: Me, menuOpen: Ne, tooltipContent: Pe, children: he })),
      (t[46] = Me),
      (t[47] = Ne),
      (t[48] = Pe),
      (t[49] = he),
      (t[50] = De),
      (t[51] = Ie))
    : (Ie = t[51]);
  let Le;
  t[52] !== u || t[53] !== l
    ? ((Le = (e) => {
        if ((l?.onCloseAutoFocus?.(e), v.current)) {
          ((v.current = !1), e.preventDefault(), u?.onToggle());
          return;
        }
        _.current && e.preventDefault();
      }),
      (t[52] = u),
      (t[53] = l),
      (t[54] = Le))
    : (Le = t[54]);
  let Re, Be;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Re = () => {
        _.current = !0;
      }),
      (Be = () => {
        _.current = !1;
      }),
      (t[55] = Re),
      (t[56] = Be))
    : ((Re = t[55]), (Be = t[56]));
  let Ve;
  t[57] !== u || t[58] !== b || t[59] !== te
    ? ((Ve =
        u != null &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(q.Item, {
              keyboardShortcut: b,
              leftIcon: (0, X.jsx)(D, { icon: { 16: ue, 20: ne } }),
              onClick: te,
              children: u.open
                ? (0, X.jsx)(J, {
                    id: `codex.space.page.navigation.hidePages`,
                    defaultMessage: `Hide pages`,
                    description: `Hide the page hierarchy navigator beside this page`,
                  })
                : (0, X.jsx)(J, {
                    id: `codex.space.page.navigation.showPages`,
                    defaultMessage: `Show pages`,
                    description: `Show the page hierarchy navigator beside this page`,
                  }),
            }),
            (0, X.jsx)(q.Separator, {}),
          ],
        })),
      (t[57] = u),
      (t[58] = b),
      (t[59] = te),
      (t[60] = Ve))
    : (Ve = t[60]);
  let He;
  t[61] !== x ||
  t[62] !== H ||
  t[63] !== B ||
  t[64] !== N ||
  t[65] !== E ||
  t[66] !== l ||
  t[67] !== c ||
  t[68] !== j ||
  t[69] !== f
    ? ((He =
        l == null &&
        !B &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(q.Item, {
              onClick: () => {
                f.get(Ke) === x && (j != null && Fe(f, j.id, !1), mt(f, c, !N), H());
              },
              children: (0, X.jsx)(ae, {
                leftIcon: N ? (0, X.jsx)(re, {}) : (0, X.jsx)(s, {}),
                children: N
                  ? (0, X.jsx)(J, {
                      id: `codex.space.page.navigation.unpinPage`,
                      defaultMessage: `Unpin from sidebar`,
                      description: `Filename menu action to remove this page from the pinned sidebar section`,
                    })
                  : (0, X.jsx)(J, {
                      id: `codex.space.page.navigation.pinPage`,
                      defaultMessage: `Pin to sidebar`,
                      description: `Filename menu action to keep this page in the pinned sidebar section`,
                    }),
              }),
            }),
            (0, X.jsx)(q.Item, {
              onClick: () => {
                (Ze(f, E), H());
              },
              children: (0, X.jsx)(ae, {
                leftIcon: (0, X.jsx)(r, {}),
                children: (0, X.jsx)(J, { ...it.copyLink }),
              }),
            }),
          ],
        })),
      (t[61] = x),
      (t[62] = H),
      (t[63] = B),
      (t[64] = N),
      (t[65] = E),
      (t[66] = l),
      (t[67] = c),
      (t[68] = j),
      (t[69] = f),
      (t[70] = He))
    : (He = t[70]);
  let Ue = l?.editorMenuItems,
    We = l?.actions,
    Ge;
  t[71] !== Ve || t[72] !== He || t[73] !== Ue || t[74] !== We
    ? ((Ge = (0, X.jsxs)(X.Fragment, { children: [Ve, He, Ue, We] })),
      (t[71] = Ve),
      (t[72] = He),
      (t[73] = Ue),
      (t[74] = We),
      (t[75] = Ge))
    : (Ge = t[75]);
  let qe;
  return (
    t[76] !== ke || t[77] !== je || t[78] !== Ie || t[79] !== Le || t[80] !== Ge || t[81] !== m
      ? ((qe = (0, X.jsx)(ge, {
          open: ke,
          onOpenChange: je,
          triggerButton: Ie,
          contentRef: g,
          contentRole: `menu`,
          contentAriaLabelledBy: m,
          contentWidth: `menu`,
          contentMaxHeight: `available`,
          scrollPeek: !0,
          onCloseAutoFocus: Le,
          onContentPointerDownCapture: Re,
          onContentKeyDownCapture: Be,
          children: Ge,
        })),
        (t[76] = ke),
        (t[77] = je),
        (t[78] = Ie),
        (t[79] = Le),
        (t[80] = Ge),
        (t[81] = m),
        (t[82] = qe))
      : (qe = t[82]),
    qe
  );
}
function Zt(e) {
  let t = (0, Qt.c)(12),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ plain: r, menuOpen: n, tooltipContent: a, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o;
  t[5] !== r || t[6] !== i
    ? ((o = r
        ? (0, X.jsx)(I, { ...i, color: `ghost`, focusRing: `inset`, size: `toolbar` })
        : (0, X.jsx)(O, { ...i, variant: `dropdown` })),
      (t[5] = r),
      (t[6] = i),
      (t[7] = o))
    : (o = t[7]);
  let s = o,
    c;
  return (
    t[8] !== s || t[9] !== n || t[10] !== a
      ? ((c = (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(X.Fragment, {
              children: (0, X.jsx)(oe, {
                side: `bottom`,
                triggerPopupOpen: n,
                tooltipContent: a,
                children: s,
              }),
            }),
            null,
          ],
        })),
        (t[8] = s),
        (t[9] = n),
        (t[10] = a),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
var Qt, $t, X;
function en() {
  return (en = e(() => {
    ((Qt = T()),
      B(),
      ($t = c()),
      P(),
      We(),
      ht(),
      Re(),
      z(),
      W(),
      k(),
      je(),
      ee(),
      pe(),
      le(),
      et(),
      Je(),
      Te(),
      qe(),
      vt(),
      g(),
      F(),
      (X = v()));
  }))();
}
function tn(e) {
  let t = (0, dn.c)(57),
    {
      alwaysShowTitle: n,
      documentType: r,
      isLeaf: i,
      initialParent: a,
      loadAncestry: o,
      onOpenPage: s,
      pageId: c,
      space: l,
      title: u,
      menu: f,
      explorer: p,
    } = e,
    m = i !== void 0 && i,
    g = o === void 0 || o,
    _ = d(`/space/:pageId`),
    v = G(ke),
    y = G(Ke),
    b;
  t[0] === g ? (b = t[1]) : ((b = { enabled: g }), (t[0] = g), (t[1] = b));
  let x = K(Oe, c, b),
    S;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((S = { enabled: !1 }), (t[2] = S)) : (S = t[2]);
  let C = K(ft, c, S),
    w = x.missingAncestorPageId === c ? a : void 0,
    T;
  t[3] === g ? (T = t[4]) : ((T = { enabled: g }), (t[3] = g), (t[4] = T));
  let E = K(Oe, w?.page_id ?? null, T),
    O = w == null ? x.ancestorPages : [...E.ancestorPages, w],
    k = w == null ? x : E,
    A = v,
    j = K(Qe, c),
    M = k.space ?? l ?? j?.space?.response,
    N = j?.space != null || l?.root_page_id === c || M?.root_page_id === c,
    P = g && !N && k.missingAncestorPageId != null,
    F;
  t[5] === P ? (F = t[6]) : ((F = { enabled: P }), (t[5] = P), (t[6] = F));
  let { isError: R, isFetching: z, refetch: B } = K(ve, k.missingAncestorPageId ?? c, F),
    V;
  t[7] !== R || t[8] !== k.missingAncestorPageId || t[9] !== C?.access || t[10] !== B || t[11] !== z
    ? ((V =
        R && k.missingAncestorPageId != null && C?.access.can_read === !0
          ? (0, Z.jsx)(I, {
              color: `ghost`,
              size: `toolbar`,
              disabled: z,
              onClick: () => void B({ cancelRefetch: !1 }),
              children: (0, Z.jsx)(J, {
                id: `toolbarBreadcrumb.retryNavigation`,
                defaultMessage: `Retry navigation`,
                description: `Retries loading the Page breadcrumb after a temporary error; the Page content remains readable`,
              }),
            })
          : null),
      (t[7] = R),
      (t[8] = k.missingAncestorPageId),
      (t[9] = C?.access),
      (t[10] = B),
      (t[11] = z),
      (t[12] = V))
    : (V = t[12]);
  let H = V;
  if (f == null && _?.params.pageId === c && ot(_.pattern.path)) {
    let e;
    t[13] === M
      ? (e = t[14])
      : ((e =
          M == null ? null : (0, Z.jsx)(Gt, { icon: (0, Z.jsx)(pt, { spaceId: M.id }), children: M.name })),
        (t[13] = M),
        (t[14] = e));
    let n;
    return (
      t[15] !== H || t[16] !== e
        ? ((n = (0, Z.jsxs)(Z.Fragment, { children: [e, H] })), (t[15] = H), (t[16] = e), (t[17] = n))
        : (n = t[17]),
      n
    );
  }
  let U;
  if (
    (t[18] !== R ||
    t[19] !== k.hierarchyStatus ||
    t[20] !== k.missingAncestorPageId ||
    t[21] !== N ||
    t[22] !== M
      ? ((U = k.hierarchyStatus),
        k.missingAncestorPageId != null && R
          ? (U = `unavailable`)
          : (N || (U === `loading` && M != null && k.missingAncestorPageId == null)) && (U = `ready`),
        (t[18] = R),
        (t[19] = k.hierarchyStatus),
        (t[20] = k.missingAncestorPageId),
        (t[21] = N),
        (t[22] = M),
        (t[23] = U))
      : (U = t[23]),
    A && !m)
  ) {
    let e = O.filter(nn),
      i;
    return (
      t[24] !== u || t[25] !== r || t[26] !== c
        ? ((i =
            u === void 0
              ? (0, Z.jsx)(J, {
                  id: `codex.space.page.loadingTitle`,
                  defaultMessage: `Loading page…`,
                  description: `Page breadcrumb while its title is not yet known`,
                })
              : (0, Z.jsx)(un, { documentType: r, pageId: c, showIcon: !1, title: u, truncate: !1 })),
          (t[24] = u),
          (t[25] = r),
          (t[26] = c),
          (t[27] = i))
        : (i = t[27]),
      (0, Z.jsxs)(Z.Fragment, {
        children: [
          (0, Z.jsx)(
            Xt,
            {
              alwaysShowTitle: n,
              menu: f,
              title: u,
              items: [
                ...e.map((t, n) => ({
                  id: t.page_id,
                  parentId: e[n - 1]?.page_id,
                  label: (0, Z.jsx)(un, {
                    documentType: Be(t),
                    pageId: t.page_id,
                    showIcon: !1,
                    title: t.title,
                    truncate: !1,
                  }),
                })),
                { id: c, parentId: e.at(-1)?.page_id, label: i },
              ],
              onOpenPage: s,
              pageId: c,
              explorer: p,
            },
            `${y}:${c}`,
          ),
          H,
        ],
      })
    );
  }
  let W = [];
  if (M != null) {
    let e = N ? c : M.root_page_id,
      n;
    t[28] === M.id ? (n = t[29]) : ((n = (0, Z.jsx)(pt, { spaceId: M.id })), (t[28] = M.id), (t[29] = n));
    let r = N ? j?.localPageId : void 0,
      i = (N && u) || M.name,
      a;
    t[30] === i ? (a = t[31]) : ((a = (0, Z.jsx)(Gt, { children: i })), (t[30] = i), (t[31] = a));
    let o;
    (t[32] !== n || t[33] !== r || t[34] !== a || t[35] !== e
      ? ((o = { id: e, parentId: void 0, icon: n, visualKey: r, label: a }),
        (t[32] = n),
        (t[33] = r),
        (t[34] = a),
        (t[35] = e),
        (t[36] = o))
      : (o = t[36]),
      W.push(o));
  }
  for (let e of N ? [] : O)
    e.page_id !== M?.root_page_id &&
      W.push({
        id: e.page_id,
        isLeaf: Ie(e),
        parentId: W.at(-1)?.id,
        label: (0, Z.jsx)(un, { documentType: Be(e), pageId: e.page_id, title: e.title }),
      });
  if (!N || M == null) {
    let e;
    t[37] === N ? (e = t[38]) : ((e = N ? (0, Z.jsx)(pt, {}) : void 0), (t[37] = N), (t[38] = e));
    let n;
    (t[39] !== j?.space?.name || t[40] !== u || t[41] !== r || t[42] !== N || t[43] !== c || t[44] !== l?.name
      ? ((n = N
          ? (0, Z.jsx)(Gt, { children: u || l?.name || j?.space?.name })
          : (0, Z.jsx)(un, { documentType: r, pageId: c, title: u })),
        (t[39] = j?.space?.name),
        (t[40] = u),
        (t[41] = r),
        (t[42] = N),
        (t[43] = c),
        (t[44] = l?.name),
        (t[45] = n))
      : (n = t[45]),
      W.push({
        id: c,
        isLeaf: m,
        visualKey: j?.space == null ? void 0 : j.localPageId,
        parentId: W.at(-1)?.id,
        icon: e,
        label: n,
      }));
  }
  let ee = C?.namespace,
    te = C?.symbol,
    ne;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = (0, Z.jsx)(D, { icon: { 16: h, 20: L } })), (t[46] = ne))
    : (ne = t[46]);
  let re = u ?? ``,
    ie = (e) =>
      (0, Z.jsx)(rn, {
        items: W,
        space: l ?? M ?? void 0,
        pageId: c,
        status: u === void 0 && U === `ready` ? `loading` : U,
        pageIcon: W.at(-1)?.icon ?? e.icon,
        pageLabel: N
          ? W.at(-1)?.label
          : (0, Z.jsx)(Gt, {
              children:
                r === `granola_whiteboard` || u?.trim() ? e.title.trim() : (0, Z.jsx)(J, { ..._t.untitled }),
            }),
        onOpenPage: s,
      }),
    ae;
  t[47] !== r || t[48] !== c || t[49] !== te || t[50] !== re || t[51] !== ie || t[52] !== ee
    ? ((ae = (0, Z.jsx)(Ue, {
        pageId: c,
        documentType: r,
        namespace: ee,
        symbol: te,
        fallbackIcon: ne,
        title: re,
        children: ie,
      })),
      (t[47] = r),
      (t[48] = c),
      (t[49] = te),
      (t[50] = re),
      (t[51] = ie),
      (t[52] = ee),
      (t[53] = ae))
    : (ae = t[53]);
  let oe;
  return (
    t[54] !== H || t[55] !== ae
      ? ((oe = (0, Z.jsxs)(Z.Fragment, { children: [ae, H] })), (t[54] = H), (t[55] = ae), (t[56] = oe))
      : (oe = t[56]),
    oe
  );
}
function nn(e) {
  return !(`access` in e) || (e.access.can_read && e.deleted_at == null);
}
function rn(e) {
  let t = (0, dn.c)(35),
    { items: n, space: r, pageId: i, pageIcon: a, pageLabel: o, onOpenPage: s, status: c } = e,
    l = c === void 0 ? `ready` : c,
    u = se(),
    d;
  t[0] === n ? (d = t[1]) : ((d = n.at(-1)), (t[0] = n), (t[1] = d));
  let f = d,
    m = n[0],
    h;
  t[2] !== n || t[3] !== m?.icon
    ? ((h = n.slice(m?.icon == null ? 0 : 1, -1)), (t[2] = n), (t[3] = m?.icon), (t[4] = h))
    : (h = t[4]);
  let g = h,
    [_, v] = (0, pn.useState)(!1),
    y = (0, pn.useRef)(null),
    x;
  t[5] === n ? (x = t[6]) : ((x = JSON.stringify(n.map(an))), (t[5] = n), (t[6] = x));
  let S = x,
    C = _ && g.length > 0,
    w;
  t[7] !== _ || t[8] !== f || t[9] !== n || t[10] !== m
    ? ((w = _ ? n.filter((e) => e === f || (e === m && e.icon != null)) : n),
      (t[7] = _),
      (t[8] = f),
      (t[9] = n),
      (t[10] = m),
      (t[11] = w))
    : (w = t[11]);
  let T = w,
    E;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = () => {
        let e = y.current;
        if (e == null) return;
        let t = () => {
            v(e.scrollWidth > e.clientWidth + 1);
          },
          n = new ResizeObserver(t);
        n.observe(e);
        for (let t of e.children) n.observe(t);
        return (t(), () => n.disconnect());
      }),
      (t[12] = E))
    : (E = t[12]);
  let D;
  (t[13] !== S || t[14] !== l ? ((D = [S, l]), (t[13] = S), (t[14] = l), (t[15] = D)) : (D = t[15]),
    (0, pn.useLayoutEffect)(E, D));
  let O;
  t[16] === u
    ? (O = t[17])
    : ((O = u.formatMessage({
        id: `toolbarBreadcrumb.label`,
        defaultMessage: `Breadcrumb`,
        description: `Accessible label for toolbar breadcrumb navigation`,
      })),
      (t[16] = u),
      (t[17] = O));
  let k = l === `loading`,
    A;
  t[18] !== _ ||
  t[19] !== f ||
  t[20] !== g ||
  t[21] !== n ||
  t[22] !== s ||
  t[23] !== a ||
  t[24] !== i ||
  t[25] !== o ||
  t[26] !== C ||
  t[27] !== r ||
  t[28] !== l ||
  t[29] !== T
    ? ((A =
        l === `loading`
          ? (0, Z.jsxs)(`div`, {
              role: `status`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, Z.jsx)(J, {
                    id: `toolbarBreadcrumb.loading`,
                    defaultMessage: `Loading page navigation…`,
                    description: `Status while the Page breadcrumb's title and parent Pages are loading`,
                  }),
                }),
                f?.isLeaf
                  ? (0, Z.jsx)(`span`, {
                      className: `block max-w-full min-w-0`,
                      "aria-current": `page`,
                      children: o,
                    })
                  : (0, Z.jsx)(I, {
                      color: `ghost`,
                      size: `toolbar`,
                      disabled: !0,
                      "aria-hidden": !0,
                      children: (0, Z.jsx)(`span`, {
                        className: `inline-block h-4 w-12 rounded bg-text/10 align-middle select-none`,
                      }),
                    }),
              ],
            })
          : (0, Z.jsxs)(Z.Fragment, {
              children: [
                (0, Z.jsx)(`div`, {
                  className: l === `unavailable` ? void 0 : `hidden @max-md/page-toolbar:block`,
                  children: f?.isLeaf
                    ? (0, Z.jsxs)(`div`, {
                        className: `flex min-w-0 items-center gap-1`,
                        children: [
                          n.length > 1 && (0, Z.jsx)(on, { items: n.slice(0, -1), onOpenPage: s }),
                          (0, Z.jsx)(`span`, {
                            className: `max-w-full min-w-0`,
                            "aria-current": `page`,
                            children: o,
                          }),
                        ],
                      })
                    : (0, Z.jsx)(on, {
                        items: n.length > 1 ? n.slice(0, -1) : n,
                        onOpenPage: s,
                        icon: a,
                        label: o,
                      }),
                }),
                l !== `unavailable` &&
                  (0, Z.jsx)(`div`, {
                    className: `flex min-w-0 items-center gap-1 @max-md/page-toolbar:hidden`,
                    children: T.map((e, t) =>
                      (0, Z.jsxs)(
                        `div`,
                        {
                          className: b(
                            `flex max-w-full items-center gap-1 overflow-hidden`,
                            !_ && e !== f ? `min-w-20` : `min-w-0`,
                            ((!_ && e === f) || (_ && e !== f)) && `shrink-0`,
                          ),
                          children: [
                            C && e === f && (0, Z.jsx)(on, { items: g, onOpenPage: s }),
                            t > 0 && !(C && e === f) && (0, Z.jsx)(p, {}),
                            (0, Z.jsx)(sn, {
                              item: e,
                              space: r,
                              pageId: i,
                              onOpenPage: s,
                              compact: _ && e !== f,
                            }),
                          ],
                        },
                        e.visualKey ?? e.id,
                      ),
                    ),
                  }),
                (0, Z.jsx)(`div`, {
                  ref: y,
                  className: `invisible absolute inset-x-0 top-0 flex w-full min-w-0 items-center gap-1`,
                  "aria-hidden": !0,
                  inert: !0,
                  children: n.map((e, t) =>
                    (0, Z.jsxs)(
                      pn.Fragment,
                      {
                        children: [
                          t > 0 && (0, Z.jsx)(p, {}),
                          (0, Z.jsx)(sn, {
                            item: e,
                            space: r,
                            pageId: i,
                            onOpenPage: s,
                            minimumWidth: !0,
                            enabled: !1,
                          }),
                        ],
                      },
                      e.visualKey ?? e.id,
                    ),
                  ),
                }),
              ],
            })),
      (t[18] = _),
      (t[19] = f),
      (t[20] = g),
      (t[21] = n),
      (t[22] = s),
      (t[23] = a),
      (t[24] = i),
      (t[25] = o),
      (t[26] = C),
      (t[27] = r),
      (t[28] = l),
      (t[29] = T),
      (t[30] = A))
    : (A = t[30]);
  let j;
  return (
    t[31] !== A || t[32] !== O || t[33] !== k
      ? ((j = (0, Z.jsx)(Rt, {
          children: (0, Z.jsx)(`nav`, {
            "aria-label": O,
            className: `relative w-full min-w-0 overflow-hidden text-base text-tertiary select-none`,
            "aria-busy": k,
            children: A,
          }),
        })),
        (t[31] = A),
        (t[32] = O),
        (t[33] = k),
        (t[34] = j))
      : (j = t[34]),
    j
  );
}
function an(e) {
  return [e.visualKey ?? e.id, e.icon != null];
}
function on(e) {
  let t = (0, dn.c)(23),
    { items: n, onOpenPage: r, icon: i, label: a } = e,
    o = se(),
    s = a == null && `shrink-0`,
    c;
  t[0] === s ? (c = t[1]) : ((c = b(`max-w-full min-w-0`, s)), (t[0] = s), (t[1] = c));
  let l = a == null,
    u;
  t[2] !== i || t[3] !== o
    ? ((u =
        i == null
          ? o.formatMessage({
              id: `codex.space.page.navigation.hiddenAncestors`,
              defaultMessage: `Show hidden parent pages`,
              description: `Shows only the ancestor Pages hidden from the collapsed breadcrumb`,
            })
          : o.formatMessage({
              id: `codex.space.page.navigation`,
              defaultMessage: `Page navigation`,
              description: `Label for the collapsed Page breadcrumb navigation menu`,
            })),
      (t[2] = i),
      (t[3] = o),
      (t[4] = u))
    : (u = t[4]);
  let d;
  t[5] === i
    ? (d = t[6])
    : ((d = i ?? (0, Z.jsx)(`span`, { "aria-hidden": !0, children: mn })), (t[5] = i), (t[6] = d));
  let f;
  t[7] === a
    ? (f = t[8])
    : ((f = a != null && (0, Z.jsx)(`span`, { className: `flex min-w-0 text-default`, children: a })),
      (t[7] = a),
      (t[8] = f));
  let p;
  t[9] !== c || t[10] !== l || t[11] !== u || t[12] !== d || t[13] !== f
    ? ((p = (0, Z.jsxs)(I, {
        className: c,
        color: `ghost`,
        focusRing: `inset`,
        size: `toolbar`,
        uniform: l,
        "aria-label": u,
        children: [d, f],
      })),
      (t[9] = c),
      (t[10] = l),
      (t[11] = u),
      (t[12] = d),
      (t[13] = f),
      (t[14] = p))
    : (p = t[14]);
  let m;
  if (t[15] !== n || t[16] !== r) {
    let e;
    (t[18] === r
      ? (e = t[19])
      : ((e = (e) =>
          (0, Z.jsx)(
            q.Item,
            {
              onSelect: () => r(e.id),
              children: (0, Z.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-1`,
                children: [e.icon, e.label],
              }),
            },
            e.id,
          )),
        (t[18] = r),
        (t[19] = e)),
      (m = n.map(e)),
      (t[15] = n),
      (t[16] = r),
      (t[17] = m));
  } else m = t[17];
  let h;
  return (
    t[20] !== p || t[21] !== m
      ? ((h = (0, Z.jsx)(zt, { triggerButton: p, children: m })), (t[20] = p), (t[21] = m), (t[22] = h))
      : (h = t[22]),
    h
  );
}
function sn(e) {
  let t = (0, dn.c)(48),
    { item: n, space: r, pageId: i, onOpenPage: a, compact: o, minimumWidth: s, enabled: c } = e,
    l = o !== void 0 && o,
    u = s !== void 0 && s,
    d = c === void 0 || c,
    f = (0, pn.useId)(),
    p = K(It, f),
    m = se();
  if (n.isLeaf && n.id === i) {
    let e;
    return (
      t[0] === n.label
        ? (e = t[1])
        : ((e = (0, Z.jsx)(`span`, {
            className: `max-w-full min-w-0`,
            "aria-current": `page`,
            children: n.label,
          })),
          (t[0] = n.label),
          (t[1] = e)),
      e
    );
  }
  let h = u && n.id !== i ? `min-w-20` : `min-w-0`,
    g = u && n.id === i && `shrink-0`,
    _;
  t[2] !== h || t[3] !== g ? ((_ = b(`max-w-full`, h, g)), (t[2] = h), (t[3] = g), (t[4] = _)) : (_ = t[4]);
  let v = n.id === i ? `page` : void 0,
    y;
  t[5] !== l || t[6] !== m
    ? ((y = l
        ? m.formatMessage({
            id: `codex.space.page.navigation`,
            defaultMessage: `Page navigation`,
            description: `Label for the collapsed Page breadcrumb navigation menu`,
          })
        : void 0),
      (t[5] = l),
      (t[6] = m),
      (t[7] = y))
    : (y = t[7]);
  let x;
  t[8] !== n.id || t[9] !== a || t[10] !== i
    ? ((x = n.id === i ? void 0 : () => a(n.id)), (t[8] = n.id), (t[9] = a), (t[10] = i), (t[11] = x))
    : (x = t[11]);
  let S;
  t[12] !== l || t[13] !== n.id || t[14] !== n.label || t[15] !== i
    ? ((S =
        !l &&
        (0, Z.jsx)(`span`, {
          className: b(`flex min-w-0 overflow-hidden`, n.id === i && `text-default`),
          children: n.label,
        })),
      (t[12] = l),
      (t[13] = n.id),
      (t[14] = n.label),
      (t[15] = i),
      (t[16] = S))
    : (S = t[16]);
  let C;
  t[17] !== l || t[18] !== n.icon || t[19] !== S || t[20] !== _ || t[21] !== v || t[22] !== y || t[23] !== x
    ? ((C = (0, Z.jsxs)(I, {
        className: _,
        color: `ghost`,
        focusRing: `inset`,
        uniform: l,
        size: `toolbar`,
        "aria-current": v,
        "aria-label": y,
        onClick: x,
        children: [n.icon, S],
      })),
      (t[17] = l),
      (t[18] = n.icon),
      (t[19] = S),
      (t[20] = _),
      (t[21] = v),
      (t[22] = y),
      (t[23] = x),
      (t[24] = C))
    : (C = t[24]);
  let w = C;
  if (n.isLeaf) return w;
  let T = n.parentId ?? n.id,
    E = n.parentId == null,
    D = n.parentId ?? n.id,
    O;
  t[25] === D ? (O = t[26]) : ((O = [D]), (t[25] = D), (t[26] = O));
  let k;
  t[27] !== d ||
  t[28] !== n.icon ||
  t[29] !== n.id ||
  t[30] !== n.label ||
  t[31] !== n.parentId ||
  t[32] !== f ||
  t[33] !== a ||
  t[34] !== i ||
  t[35] !== w
    ? ((k = (e) =>
        (0, Z.jsxs)(zt, {
          id: f,
          enabled: d,
          triggerButton: w,
          children: [
            n.parentId == null &&
              (0, Z.jsx)(q.Item, {
                "data-breadcrumb-highlighted": ``,
                onSelect: () => a(n.id),
                "aria-current": n.id === i ? `page` : void 0,
                children: (0, Z.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-1`,
                  children: [n.icon, n.label],
                }),
              }),
            e,
          ],
        })),
      (t[27] = d),
      (t[28] = n.icon),
      (t[29] = n.id),
      (t[30] = n.label),
      (t[31] = n.parentId),
      (t[32] = f),
      (t[33] = a),
      (t[34] = i),
      (t[35] = w),
      (t[36] = k))
    : (k = t[36]);
  let A;
  return (
    t[37] !== d ||
    t[38] !== n.id ||
    t[39] !== a ||
    t[40] !== p ||
    t[41] !== i ||
    t[42] !== r ||
    t[43] !== T ||
    t[44] !== E ||
    t[45] !== O ||
    t[46] !== k
      ? ((A = (0, Z.jsx)(cn, {
          open: p,
          space: r,
          parentId: T,
          pageId: i,
          highlightedPageId: n.id,
          onOpenPage: a,
          showSeparator: E,
          visited: O,
          enabled: d,
          children: k,
        })),
        (t[37] = d),
        (t[38] = n.id),
        (t[39] = a),
        (t[40] = p),
        (t[41] = i),
        (t[42] = r),
        (t[43] = T),
        (t[44] = E),
        (t[45] = O),
        (t[46] = k),
        (t[47] = A))
      : (A = t[47]),
    A
  );
}
function cn(e) {
  let t = (0, dn.c)(32),
    {
      space: n,
      open: r,
      enabled: i,
      children: a,
      parentId: o,
      pageId: s,
      highlightedPageId: c,
      onOpenPage: l,
      showSeparator: u,
      visited: d,
    } = e,
    f = i === void 0 || i,
    p = u !== void 0 && u,
    m = n?.backing_type === `drive` && n.root_page_id === o,
    h = K(Qe, s),
    g = de(ye, m ? n.id : null),
    _ = de(Xe, o),
    v = m ? g : _,
    y;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((y = { enabled: !1 }), (t[0] = y)) : (y = t[0]);
  let { isFetched: b } = G(v, y),
    x = f && (r || (!b && h?.space == null)),
    S;
  t[1] === x ? (S = t[2]) : ((S = { enabled: x }), (t[1] = x), (t[2] = S));
  let { data: C, isPending: w, error: T } = G(v, S),
    E = K(m ? He : null, n?.id ?? ``),
    D = K(m ? null : _e, o),
    O = m ? E?.items : D,
    k = C != null && `pages` in C ? C.pages.items : C?.items,
    A = G(be),
    j,
    M,
    N,
    P,
    F;
  if (
    t[3] !== a ||
    t[4] !== T ||
    t[5] !== c ||
    t[6] !== w ||
    t[7] !== k ||
    t[8] !== l ||
    t[9] !== s ||
    t[10] !== o ||
    t[11] !== O ||
    t[12] !== p ||
    t[13] !== A?.items ||
    t[14] !== d
  ) {
    let e = A?.items.filter((e) => e.parent != null && `page_id` in e.parent && e.parent.page_id === o),
      n = (k ?? (O == null ? e : (0, fn.default)([...O, ...(e ?? [])], `page_id`)))
        ?.filter(
          (e) =>
            e.access.can_read &&
            e.deleted_at == null &&
            e.parent != null &&
            `page_id` in e.parent &&
            e.parent.page_id === o &&
            !d.includes(e.page_id),
        )
        .sort(st),
      r = w && (n == null || n.length === 0);
    ((j = a),
      (M = p && (r || T != null || !!n?.length) && (0, Z.jsx)(q.Separator, {})),
      t[20] === r
        ? (N = t[21])
        : ((N =
            r &&
            (0, Z.jsx)(q.Item, {
              disabled: !0,
              children: (0, Z.jsx)(J, {
                id: `codex.space.page.navigation.loading`,
                defaultMessage: `Loading pages…`,
                description: `Status while loading sibling Pages in breadcrumb navigation`,
              }),
            })),
          (t[20] = r),
          (t[21] = N)),
      t[22] === T
        ? (P = t[23])
        : ((P =
            T != null &&
            (0, Z.jsx)(q.Item, {
              disabled: !0,
              children: (0, Z.jsx)(J, {
                id: `codex.space.page.navigation.failed`,
                defaultMessage: `Couldn’t load pages`,
                description: `Error when sibling Pages cannot be loaded in breadcrumb navigation`,
              }),
            })),
          (t[22] = T),
          (t[23] = P)),
      (F = n?.map((e, t) =>
        (0, Z.jsx)(
          ln,
          {
            page: e,
            preloadChildren: k != null && t < hn,
            pageId: s,
            highlightedPageId: c,
            onOpenPage: l,
            visited: d,
          },
          e.page_id,
        ),
      )),
      (t[3] = a),
      (t[4] = T),
      (t[5] = c),
      (t[6] = w),
      (t[7] = k),
      (t[8] = l),
      (t[9] = s),
      (t[10] = o),
      (t[11] = O),
      (t[12] = p),
      (t[13] = A?.items),
      (t[14] = d),
      (t[15] = j),
      (t[16] = M),
      (t[17] = N),
      (t[18] = P),
      (t[19] = F));
  } else ((j = t[15]), (M = t[16]), (N = t[17]), (P = t[18]), (F = t[19]));
  let I;
  t[24] !== M || t[25] !== N || t[26] !== P || t[27] !== F
    ? ((I = (0, Z.jsxs)(Z.Fragment, { children: [M, N, P, F] })),
      (t[24] = M),
      (t[25] = N),
      (t[26] = P),
      (t[27] = F),
      (t[28] = I))
    : (I = t[28]);
  let L;
  return (t[29] !== j || t[30] !== I ? ((L = j(I)), (t[29] = j), (t[30] = I), (t[31] = L)) : (L = t[31]), L);
}
function ln(e) {
  let t = (0, dn.c)(37),
    { page: n, preloadChildren: r, pageId: i, highlightedPageId: a, onOpenPage: o, visited: s } = e,
    [c, l] = (0, pn.useState)(!1),
    u = n.page_id === a ? `` : void 0,
    d = n.page_id === i ? `page` : void 0,
    f = n.page_id === i && `text-accent`,
    p;
  t[0] === f ? (p = t[1]) : ((p = b(`flex min-w-0`, f)), (t[0] = f), (t[1] = p));
  let m;
  t[2] === n ? (m = t[3]) : ((m = Be(n)), (t[2] = n), (t[3] = m));
  let h;
  t[4] !== n.page_id || t[5] !== n.symbol || t[6] !== n.title || t[7] !== m
    ? ((h = (0, Z.jsx)(un, { documentType: m, pageId: n.page_id, symbol: n.symbol, title: n.title })),
      (t[4] = n.page_id),
      (t[5] = n.symbol),
      (t[6] = n.title),
      (t[7] = m),
      (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] !== u || t[10] !== d || t[11] !== p || t[12] !== h
    ? ((g = (0, Z.jsx)(`span`, {
        "data-breadcrumb-highlighted": u,
        "aria-current": d,
        className: p,
        children: h,
      })),
      (t[9] = u),
      (t[10] = d),
      (t[11] = p),
      (t[12] = h),
      (t[13] = g))
    : (g = t[13]);
  let _ = g,
    v = n.page_id === i ? `page` : void 0,
    y;
  t[14] !== o || t[15] !== n.page_id
    ? ((y = () => o(n.page_id)), (t[14] = o), (t[15] = n.page_id), (t[16] = y))
    : (y = t[16]);
  let x;
  t[17] !== _ || t[18] !== v || t[19] !== y
    ? ((x = (0, Z.jsx)(q.Item, { "aria-current": v, onSelect: y, children: _ })),
      (t[17] = _),
      (t[18] = v),
      (t[19] = y),
      (t[20] = x))
    : (x = t[20]);
  let S = x;
  if (Ie(n) || !n.has_children) return S;
  let C;
  t[21] !== n.page_id || t[22] !== s
    ? ((C = [...s, n.page_id]), (t[21] = n.page_id), (t[22] = s), (t[23] = C))
    : (C = t[23]);
  let w = c || r,
    T;
  t[24] !== _ || t[25] !== o || t[26] !== n.page_id
    ? ((T = (e) =>
        (0, Z.jsx)(q.FlyoutSubmenuItem, {
          label: _,
          onSelect: () => o(n.page_id),
          onOpenChange: l,
          contentWidth: `menuWide`,
          children: e,
        })),
      (t[24] = _),
      (t[25] = o),
      (t[26] = n.page_id),
      (t[27] = T))
    : (T = t[27]);
  let E;
  return (
    t[28] !== a ||
    t[29] !== o ||
    t[30] !== c ||
    t[31] !== n.page_id ||
    t[32] !== i ||
    t[33] !== C ||
    t[34] !== w ||
    t[35] !== T
      ? ((E = (0, Z.jsx)(cn, {
          open: c,
          parentId: n.page_id,
          pageId: i,
          highlightedPageId: a,
          onOpenPage: o,
          visited: C,
          enabled: w,
          children: T,
        })),
        (t[28] = a),
        (t[29] = o),
        (t[30] = c),
        (t[31] = n.page_id),
        (t[32] = i),
        (t[33] = C),
        (t[34] = w),
        (t[35] = T),
        (t[36] = E))
      : (E = t[36]),
    E
  );
}
function un(e) {
  let t = (0, dn.c)(13),
    { documentType: n, pageId: r, symbol: i, showIcon: a, title: o, truncate: s } = e,
    c = s === void 0 || s,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = { enabled: !1 }), (t[0] = l)) : (l = t[0]);
  let u = K(ft, r, l),
    d = u?.namespace,
    f = u == null ? i : u.symbol,
    p = o ?? ``,
    m;
  t[1] !== n || t[2] !== a || t[3] !== o || t[4] !== c
    ? ((m = (e) => {
        let t =
          n === `granola_whiteboard` ||
          n === `granola_workbook` ||
          n === `granola_presentation` ||
          n === `granola_document`
            ? e.title
            : o?.trim() || (0, Z.jsx)(J, { ..._t.untitled });
        return c
          ? (0, Z.jsx)(Gt, {
              icon:
                (a ??
                (n === `granola_whiteboard` ||
                  n === `granola_workbook` ||
                  n === `granola_presentation` ||
                  n === `granola_document`))
                  ? e.icon
                  : void 0,
              children: t,
            })
          : (0, Z.jsx)(Z.Fragment, { children: t });
      }),
      (t[1] = n),
      (t[2] = a),
      (t[3] = o),
      (t[4] = c),
      (t[5] = m))
    : (m = t[5]);
  let h;
  return (
    t[6] !== n || t[7] !== r || t[8] !== d || t[9] !== f || t[10] !== p || t[11] !== m
      ? ((h = (0, Z.jsx)(Ue, { pageId: r, documentType: n, namespace: d, symbol: f, title: p, children: m })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = d),
        (t[9] = f),
        (t[10] = p),
        (t[11] = m),
        (t[12] = h))
      : (h = t[12]),
    h
  );
}
var dn, fn, pn, Z, mn, hn;
function gn() {
  return (gn = e(() => {
    ((dn = T()),
      x(),
      (fn = t(o(), 1)),
      B(),
      (pn = c()),
      P(),
      S(),
      z(),
      W(),
      k(),
      pe(),
      Se(),
      tt(),
      rt(),
      $e(),
      Pe(),
      nt(),
      qe(),
      Ge(),
      dt(),
      Wt(),
      Lt(),
      Yt(),
      en(),
      (Z = v()),
      (mn = `»`),
      (hn = 6));
  }))();
}
var _n, vn;
function yn() {
  return (yn = e(() => {
    ((_n = `_Header_2v07i_1`), (vn = { Header: _n }));
  }))();
}
function bn(e) {
  let t = (0, Cn.c)(57),
    n = se(),
    {
      inset: r,
      contentFade: i,
      navigation: a,
      actions: o,
      saveStatus: s,
      people: c,
      automations: u,
      requestEditAccess: d,
      comments: f,
      meeting: p,
      supplementalActions: m,
      onClose: h,
      onPrewarmSharing: g,
      tabId: _,
      sharing: v,
    } = e,
    y = r !== void 0 && r,
    x = i !== void 0 && i,
    S;
  t[0] === g
    ? (S = t[1])
    : ((S = (e) => {
        e.pointerType !== `touch` && g?.();
      }),
      (t[0] = g),
      (t[1] = S));
  let w = !y && vn.Header,
    T;
  t[2] === w ? (T = t[3]) : ((T = b(w, `w-full`)), (t[2] = w), (t[3] = T));
  let E = x ? `overlay` : void 0,
    D;
  t[4] === a
    ? (D = t[5])
    : ((D = {
        id: `title`,
        content: (0, Q.jsx)(`div`, { className: `flex min-w-0 items-center`, children: a }),
        collapsePriority: 1,
      }),
      (t[4] = a),
      (t[5] = D));
  let O;
  t[6] !== o || t[7] !== n
    ? ((O =
        o == null
          ? null
          : (0, Q.jsx)(l, {
              label: n.formatMessage({
                id: `codex.space.page.header.editingTools`,
                defaultMessage: `Page editing tools`,
                description: `Accessible label for the Page header editing actions`,
              }),
              children: o,
            })),
      (t[6] = o),
      (t[7] = n),
      (t[8] = O))
    : (O = t[8]);
  let k;
  t[9] === O
    ? (k = t[10])
    : ((k = { id: `editing`, content: O, collapsePriority: 2 }), (t[9] = O), (t[10] = k));
  let A;
  t[11] === s ? (A = t[12]) : ((A = { id: `save-status`, content: s }), (t[11] = s), (t[12] = A));
  let j;
  t[13] !== D || t[14] !== k || t[15] !== A
    ? ((j = [D, k, A]), (t[13] = D), (t[14] = k), (t[15] = A), (t[16] = j))
    : (j = t[16]);
  let M;
  t[17] === d ? (M = t[18]) : ((M = { id: `request-edit-access`, content: d }), (t[17] = d), (t[18] = M));
  let N;
  t[19] === m
    ? (N = t[20])
    : ((N = { id: `supplemental`, content: m, hidePriority: 3 }), (t[19] = m), (t[20] = N));
  let P;
  t[21] === u
    ? (P = t[22])
    : ((P = { id: `automations`, content: u, hidePriority: 5 }), (t[21] = u), (t[22] = P));
  let F;
  t[23] !== f || t[24] !== n
    ? ((F =
        f == null || f === !1
          ? null
          : (0, Q.jsx)(l, {
              label: n.formatMessage({
                id: `codex.space.page.header.comments`,
                defaultMessage: `Comments`,
                description: `Accessible label for the Page header comments control`,
              }),
              children: f,
            })),
      (t[23] = f),
      (t[24] = n),
      (t[25] = F))
    : (F = t[25]);
  let I;
  t[26] === F ? (I = t[27]) : ((I = { id: `comments`, content: F }), (t[26] = F), (t[27] = I));
  let L;
  t[28] === p
    ? (L = t[29])
    : ((L = { id: `meeting`, content: p, collapsePriority: 3 }), (t[28] = p), (t[29] = L));
  let R;
  t[30] !== n || t[31] !== c || t[32] !== v
    ? ((R =
        v == null && c == null
          ? null
          : (0, Q.jsxs)(l, {
              hideWhenEmpty: !0,
              label: n.formatMessage({
                id: `codex.space.page.header.sharing`,
                defaultMessage: `Sharing`,
                description: `Accessible label for Page sharing controls`,
              }),
              children: [c, v],
            })),
      (t[30] = n),
      (t[31] = c),
      (t[32] = v),
      (t[33] = R))
    : (R = t[33]);
  let z;
  t[34] === R
    ? (z = t[35])
    : ((z = { id: `sharing`, content: R, collapsePriority: 4 }), (t[34] = R), (t[35] = z));
  let B;
  t[36] !== h || t[37] !== _
    ? ((B = { id: `window-controls`, content: (0, Q.jsx)(gt, { tabId: _, onClose: h }) }),
      (t[36] = h),
      (t[37] = _),
      (t[38] = B))
    : (B = t[38]);
  let V;
  t[39] !== M || t[40] !== N || t[41] !== P || t[42] !== I || t[43] !== L || t[44] !== z || t[45] !== B
    ? ((V = [M, N, P, I, L, z, B]),
      (t[39] = M),
      (t[40] = N),
      (t[41] = P),
      (t[42] = I),
      (t[43] = L),
      (t[44] = z),
      (t[45] = B),
      (t[46] = V))
    : (V = t[46]);
  let H;
  t[47] !== x || t[48] !== y || t[49] !== j || t[50] !== V || t[51] !== T || t[52] !== E
    ? ((H = (0, Q.jsx)(C, {
        className: T,
        contentFade: x,
        density: `surface`,
        inset: y,
        placement: E,
        leading: j,
        trailing: V,
      })),
      (t[47] = x),
      (t[48] = y),
      (t[49] = j),
      (t[50] = V),
      (t[51] = T),
      (t[52] = E),
      (t[53] = H))
    : (H = t[53]);
  let U;
  return (
    t[54] !== S || t[55] !== H
      ? ((U = (0, Q.jsx)(`div`, {
          className: `@container/page-toolbar w-full min-w-0`,
          onPointerEnter: S,
          children: H,
        })),
        (t[54] = S),
        (t[55] = H),
        (t[56] = U))
      : (U = t[56]),
    U
  );
}
function xn(e) {
  let t = (0, Cn.c)(17),
    n,
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]))
    : (({ surface: r, contentFade: i, separator: a, onClose: n, ...o } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o));
  let s = i !== void 0 && i,
    c = a === void 0 || a,
    l;
  t[6] === r
    ? (l = t[7])
    : ((l = r === `window` || (r !== `side-panel` && ot(`/space/:pageId`))), (t[6] = r), (t[7] = l));
  let u = l,
    d = s && !u,
    f = !u,
    p = u ? void 0 : n,
    m;
  t[8] !== d || t[9] !== f || t[10] !== p || t[11] !== o
    ? ((m = (0, Q.jsx)(bn, { ...o, contentFade: d, inset: f, onClose: p })),
      (t[8] = d),
      (t[9] = f),
      (t[10] = p),
      (t[11] = o),
      (t[12] = m))
    : (m = t[12]);
  let h;
  return (
    t[13] !== c || t[14] !== r || t[15] !== m
      ? ((h = (0, Q.jsx)(Sn, { surface: r, separator: c, children: m })),
        (t[13] = c),
        (t[14] = r),
        (t[15] = m),
        (t[16] = h))
      : (h = t[16]),
    h
  );
}
function Sn(e) {
  let t = (0, Cn.c)(16),
    { children: n, contentFade: r, separator: i, surface: a, overlay: o } = e,
    s = r !== void 0 && r,
    c = o ?? a === `side-panel`;
  if (a === `window` || (a !== `side-panel` && ot(`/space/:pageId`))) {
    let e;
    return (
      t[0] !== n || t[1] !== s || t[2] !== i
        ? ((e = (0, Q.jsx)(xe.Header, { className: `shrink-0`, contentFade: s, separator: i, children: n })),
          (t[0] = n),
          (t[1] = s),
          (t[2] = i),
          (t[3] = e))
        : (e = t[3]),
      e
    );
  }
  if (a === `side-panel`) {
    let e = c ? `absolute inset-x-0 top-0` : `relative`,
      r;
    t[4] === e ? (r = t[5]) : ((r = b(`pointer-events-none z-30 shrink-0`, e)), (t[4] = e), (t[5] = r));
    let i;
    return (
      t[6] !== n || t[7] !== r
        ? ((i = (0, Q.jsx)(`div`, { className: r, children: n })), (t[6] = n), (t[7] = r), (t[8] = i))
        : (i = t[8]),
      i
    );
  }
  let l;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(xe.MainContentLayout, { layout: `custom-titlebar` })), (t[9] = l))
    : (l = t[9]);
  let u = c ? `absolute inset-x-0 top-0` : `relative`,
    d;
  t[10] === u
    ? (d = t[11])
    : ((d = b(
        `pointer-events-none z-30 shrink-0 [--viewer-header-start-inset:var(--app-shell-titlebar-left-inset,0px)]`,
        u,
      )),
      (t[10] = u),
      (t[11] = d));
  let f;
  return (
    t[12] !== n || t[13] !== i || t[14] !== d
      ? ((f = (0, Q.jsxs)(Q.Fragment, {
          children: [l, (0, Q.jsx)(xe.Header, { className: d, inline: !0, separator: i, children: n })],
        })),
        (t[12] = n),
        (t[13] = i),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
var Cn, Q;
function wn() {
  return (wn = e(() => {
    ((Cn = T()), x(), P(), Le(), Ne(), rt(), F(), yn(), (Q = v()));
  }))();
}
function Tn(e) {
  let t = (0, En.c)(14),
    n,
    r,
    i,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]))
    : (({ label: n, appearance: i, color: a, ...r } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a));
  let o = i === void 0 ? `toolbar` : i,
    s = a === void 0 ? `ghostActive` : a,
    c = r[`aria-expanded`] === !0,
    l;
  t[5] !== o || t[6] !== s || t[7] !== n || t[8] !== r
    ? ((l =
        o === `viewer`
          ? (0, Dn.jsx)(w, { ...r, "aria-label": n, uniform: !0 })
          : (0, Dn.jsx)(I, { ...r, "aria-label": n, color: s, size: `toolbar`, uniform: !0 })),
      (t[5] = o),
      (t[6] = s),
      (t[7] = n),
      (t[8] = r),
      (t[9] = l))
    : (l = t[9]);
  let u;
  return (
    t[10] !== n || t[11] !== c || t[12] !== l
      ? ((u = (0, Dn.jsx)(oe, { tooltipContent: n, triggerPopupOpen: c, children: l })),
        (t[10] = n),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u))
      : (u = t[13]),
    u
  );
}
var En, Dn;
function On() {
  return (On = e(() => {
    ((En = T()), z(), le(), F(), (Dn = v()));
  }))();
}
function kn(e) {
  let t = (0, An.c)(11),
    { menu: n, items: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = function (e, t) {
        (n.onSelect(e, t), !t.defaultPrevented && e.closeOnSelect !== !1 && n.onOpenChange?.(!1));
      }),
      (t[0] = n),
      (t[1] = i));
  let o = i,
    s;
  if (t[2] !== r || t[3] !== n || t[4] !== o) {
    let e;
    (t[6] !== n || t[7] !== o
      ? ((e = (e) => {
          if (e.type === `separator`) return (0, $.jsx)(q.Separator, {}, e.id);
          if (e.type === `label`) return (0, $.jsx)(q.Title, { children: n.renderItemContent(e) }, e.id);
          if (e.submenu != null)
            return (0, $.jsx)(
              j,
              { disabled: e.enabled === !1, label: n.renderItemContent(e), children: n.renderSubmenu(e, o) },
              e.id,
            );
          let t =
            e.type === `checkbox` || e.type === `radio`
              ? (0, $.jsx)(ae, {
                  trailingContent: e.checked ? (0, $.jsx)(a, {}) : null,
                  children: n.renderItemContent({ ...e, type: void 0 }),
                })
              : n.renderItemContent(e);
          return (0, $.jsx)(
            q.Item,
            {
              tooltipText:
                e.tooltipMessage == null
                  ? void 0
                  : (0, $.jsx)(J, { ...e.tooltipMessage, values: e.tooltipMessageValues }),
              asChild: e.href != null,
              disabled: e.enabled === !1,
              "aria-disabled": e.enabled === !1 || void 0,
              tone: e.tone,
              role: e.type === `checkbox` || e.type === `radio` ? `menuitem${e.type}` : `menuitem`,
              "aria-checked": e.type === `checkbox` || e.type === `radio` ? e.checked : void 0,
              onSelect: (t) => {
                e.closeOnSelect === !1 && t.preventDefault();
              },
              onClick: (t) => {
                if (e.enabled === !1) {
                  t.preventDefault();
                  return;
                }
                (e.onClick?.(t),
                  t.defaultPrevented ||
                    (o(e, t.nativeEvent),
                    e.href != null && Me({ event: t, href: e.href, initiator: `side_panel_menu` })));
              },
              children: e.href == null ? t : (0, $.jsx)(`a`, { href: e.href, children: t }),
            },
            e.id,
          );
        }),
        (t[6] = n),
        (t[7] = o),
        (t[8] = e))
      : (e = t[8]),
      (s = r.map(e)),
      (t[2] = r),
      (t[3] = n),
      (t[4] = o),
      (t[5] = s));
  } else s = t[5];
  let c;
  return (
    t[9] === s ? (c = t[10]) : ((c = (0, $.jsx)($.Fragment, { children: s })), (t[9] = s), (t[10] = c)),
    c
  );
}
var An, $;
function jn() {
  return (jn = e(() => {
    ((An = T()), P(), W(), Ve(), k(), ee(), F(), ($ = v()));
  }))();
}
export {
  xn as a,
  wn as c,
  jt as d,
  Pt as f,
  St as g,
  yt as h,
  On as i,
  tn as l,
  Tt as m,
  jn as n,
  Sn as o,
  Et as p,
  Tn as r,
  bn as s,
  kn as t,
  gn as u,
};
//# sourceMappingURL=filename-menu-actions-39e6b8a922f7.js.map
