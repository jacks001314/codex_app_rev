import { n as e, o as t } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as n,
  $R as r,
  $S as i,
  AG as a,
  AO as o,
  BV as s,
  CB as c,
  CO as l,
  CS as u,
  Cot as d,
  Cwt as f,
  DV as p,
  Dz as m,
  Hxt as h,
  IDt as g,
  IO as _,
  Ixt as v,
  Jq as y,
  PG as b,
  Pxt as x,
  QR as S,
  QSt as C,
  RO as w,
  Rxt as T,
  Swt as E,
  TJ as D,
  TO as O,
  Twt as k,
  Txt as A,
  VDt as j,
  Vxt as M,
  Yq as N,
  _E as P,
  _Mt as F,
  _wt as I,
  _xt as L,
  aj as R,
  cE as z,
  cW as B,
  cz as V,
  dE as ee,
  fSt as te,
  gMt as H,
  gwt as U,
  hE as ne,
  jDt as W,
  kz as G,
  lz as re,
  nE as ie,
  nSt as ae,
  oE as K,
  oj as oe,
  rW as se,
  sMt as ce,
  sW as le,
  sz as ue,
  t3 as de,
  uz as fe,
  vzt as q,
  wot as pe,
  wwt as me,
  xMt as J,
  yzt as he,
  zxt as Y,
} from "./app-shared-bbfeca5e5737.js";
import {
  $y as ge,
  Asn as _e,
  Bar as ve,
  C$n as ye,
  Cwr as be,
  Dhn as xe,
  Dor as Se,
  Ear as Ce,
  Ehn as we,
  Esn as Te,
  Fcn as Ee,
  Fsn as De,
  G3n as Oe,
  Gtn as ke,
  Icn as Ae,
  J3n as je,
  JCr as Me,
  JPn as Ne,
  Jdt as Pe,
  Lcn as Fe,
  Msn as Ie,
  Nsn as Le,
  Psn as Re,
  Qtn as ze,
  RCr as Be,
  Wtn as Ve,
  XHt as He,
  XPn as Ue,
  YHt as We,
  Zsn as Ge,
  Ztn as Ke,
  a1 as qe,
  aor as Je,
  ccn as Ye,
  cor as Xe,
  drt as Ze,
  eb as Qe,
  fSn as $e,
  gwr as et,
  hln as tt,
  i1 as nt,
  inn as rt,
  jsn as it,
  lH as at,
  lSn as ot,
  lrt as st,
  mln as ct,
  qdt as lt,
  rnn as ut,
  sH as dt,
  scn as ft,
  sor as pt,
  urt as mt,
  w$n as ht,
  wsn as gt,
  xsn as _t,
} from "./app-initial-5851df3f6cb1.js";
function vt(e) {
  let t = (0, yt.c)(22),
    {
      title: r,
      pageId: i,
      symbol: a,
      documentType: o,
      namespace: s,
      navigation: l,
      people: u,
      overflow: d,
      onExpand: f,
      onSelect: p,
    } = e,
    m = j(),
    h = M(ve),
    g = p ? `button` : `div`,
    _;
  t[0] !== g ||
  t[1] !== o ||
  t[2] !== s ||
  t[3] !== l ||
  t[4] !== p ||
  t[5] !== i ||
  t[6] !== h ||
  t[7] !== a ||
  t[8] !== r
    ? ((_ =
        h && l != null && p == null
          ? l
          : (0, bt.jsx)(Ve, {
              pageId: i,
              documentType: o,
              namespace: s,
              symbol: a,
              title: r,
              children: (e) => {
                let { icon: t, title: n } = e;
                return (0, bt.jsxs)(g, {
                  type: p ? `button` : void 0,
                  className: `flex min-w-0 items-center gap-2 text-sm font-medium`,
                  "data-popcorn-element-handle": p ? `` : void 0,
                  onClick: p,
                  children: [t, (0, bt.jsx)(`span`, { className: `truncate`, children: n })],
                });
              },
            })),
      (t[0] = g),
      (t[1] = o),
      (t[2] = s),
      (t[3] = l),
      (t[4] = p),
      (t[5] = i),
      (t[6] = h),
      (t[7] = a),
      (t[8] = r),
      (t[9] = _))
    : (_ = t[9]);
  let v;
  t[10] === _
    ? (v = t[11])
    : ((v = (0, bt.jsx)(`div`, { className: `min-w-0 flex-1`, children: _ })), (t[10] = _), (t[11] = v));
  let y;
  t[12] !== m || t[13] !== f
    ? ((y =
        f != null &&
        (0, bt.jsx)(n, {
          color: `ghost`,
          size: `toolbar`,
          uniform: !0,
          onClick: f,
          "aria-label": m.formatMessage({
            id: `codex.page.inline.expand`,
            defaultMessage: `Open in side panel`,
            description: `Accessible label for opening a Page embedded in a Canvas card in the side panel`,
          }),
          children: (0, bt.jsx)(c, {}),
        })),
      (t[12] = m),
      (t[13] = f),
      (t[14] = y))
    : (y = t[14]);
  let b;
  t[15] !== d || t[16] !== u || t[17] !== y
    ? ((b = (0, bt.jsxs)(`div`, { className: `flex items-center gap-2`, children: [u, d, y] })),
      (t[15] = d),
      (t[16] = u),
      (t[17] = y),
      (t[18] = b))
    : (b = t[18]);
  let x;
  return (
    t[19] !== v || t[20] !== b
      ? ((x = (0, bt.jsxs)(`div`, {
          className: `flex h-toolbar shrink-0 items-center justify-between gap-3 border-b border-subtle px-4 select-none`,
          children: [v, b],
        })),
        (t[19] = v),
        (t[20] = b),
        (t[21] = x))
      : (x = t[21]),
    x
  );
}
var yt, bt;
function xt() {
  return (xt = e(() => {
    ((yt = q()), x(), W(), de(), D(), Ce(), ke(), (bt = J()));
  }))();
}
var St, Ct, wt;
function Tt() {
  return (Tt = e(() => {
    ((St = `_width_vx0s9_2`), (Ct = `_column_vx0s9_16`), (wt = { width: St, column: Ct }));
  }))();
}
function Et() {
  let e = (0, Dt.c)(9),
    t = M(r),
    n = k(),
    i,
    a,
    o;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = { "--page-explorer-progress": 0, opacity: 0 }),
      (a = { "--page-explorer-progress": 1, opacity: 1 }),
      (o = { "--page-explorer-progress": 0, opacity: 0 }),
      (e[0] = i),
      (e[1] = a),
      (e[2] = o))
    : ((i = e[0]), (a = e[1]), (o = e[2]));
  let s;
  e[3] === t ? (s = e[4]) : ((s = t ? { duration: 0 } : Oe), (e[3] = t), (e[4] = s));
  let c = !n,
    l = !n,
    u;
  return (
    e[5] !== s || e[6] !== c || e[7] !== l
      ? ((u = (0, Ot.jsx)(I.div, {
          "data-page-explorer-column": !0,
          className: `${wt.width} ${wt.column} hidden min-h-0 shrink-0 @3xl/page-explorer:block`,
          initial: i,
          animate: a,
          exit: o,
          transition: s,
          "aria-hidden": c,
          inert: l,
        })),
        (e[5] = s),
        (e[6] = c),
        (e[7] = l),
        (e[8] = u))
      : (u = e[8]),
    u
  );
}
var Dt, Ot;
function kt() {
  return (kt = e(() => {
    ((Dt = q()), U(), me(), x(), je(), S(), Tt(), (Ot = J()));
  }))();
}
function At(e) {
  let t = (0, jt.c)(11),
    { children: n, explorer: r } = e;
  if (r == null) {
    let e;
    return (
      t[0] === n ? (e = t[1]) : ((e = (0, Mt.jsx)(Mt.Fragment, { children: n })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let i;
  t[2] === r?.open
    ? (i = t[3])
    : ((i = r?.open ? (0, Mt.jsx)(Et, {}, `page-explorer`) : null), (t[2] = r?.open), (t[3] = i));
  let a;
  t[4] === i ? (a = t[5]) : ((a = (0, Mt.jsx)(E, { initial: !1, children: i })), (t[4] = i), (t[5] = a));
  let o;
  t[6] === n
    ? (o = t[7])
    : ((o = (0, Mt.jsx)(`div`, { className: `relative flex min-h-0 min-w-0 flex-1 flex-col`, children: n })),
      (t[6] = n),
      (t[7] = o));
  let s;
  return (
    t[8] !== a || t[9] !== o
      ? ((s = (0, Mt.jsxs)(`div`, {
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
var jt, Mt;
function Nt() {
  return (Nt = e(() => {
    ((jt = q()), f(), kt(), (Mt = J()));
  }))();
}
var Pt, Ft, It;
function Lt() {
  return (Lt = e(() => {
    (x(),
      pe(),
      (Pt = C(`BreadcrumbMenus`, { parent: d })),
      (Ft = te(Pt, () => null)),
      (It = ae(Pt, (e, { get: t }) => t(Ft)?.id === e)));
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
      ? ((a = (0, Ut.jsx)(h, { scope: Pt, value: i, children: n })), (t[2] = n), (t[3] = i), (t[4] = a))
      : (a = t[4]),
    a
  );
}
function zt(e) {
  let t = (0, Vt.c)(37),
    { id: r, children: i, enabled: a, triggerButton: o } = e,
    s = a === void 0 || a,
    c = v(Pt),
    u = (0, Ht.useId)(),
    d = r ?? u,
    f = Y(It, d),
    p = (0, Ht.useRef)(null),
    m = (0, Ht.useRef)(null),
    h = (0, Ht.useRef)(null),
    g = (0, Ht.useRef)(null),
    _ = (0, Ht.useRef)(!1),
    y = s && f,
    b;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = function () {
        (h.current?.(),
          (h.current = null),
          g.current != null && (window.clearTimeout(g.current), (g.current = null)));
      }),
      (t[0] = b))
    : (b = t[0]);
  let x = b,
    S;
  t[1] !== d || t[2] !== c
    ? ((S = function () {
        (x(), (_.current = !0), c.set(Ft, (e) => (e?.id === d ? null : e)));
      }),
      (t[1] = d),
      (t[2] = c),
      (t[3] = S))
    : (S = t[3]);
  let C = S,
    w;
  t[4] !== C || t[5] !== c
    ? ((w = function (e) {
        if (e.pointerType !== `mouse` || c.get(Ft)?.interaction === `explicit`) return;
        x();
        let t = p.current,
          n = m.current;
        if (t == null || n == null || e.relatedTarget == null) {
          C();
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
            (g.current != null && window.clearTimeout(g.current), (g.current = window.setTimeout(C, 100)));
          };
          ((h.current = fe({
            destinationElement: n,
            destinationSide: i,
            onEnterDestination: x,
            onMoveInsideTriangle: s,
            onMoveOutsideTriangle: C,
            pointer: { x: e.clientX, y: e.clientY },
            sourceElement: a,
          })),
            s());
          return;
        }
        C();
      }),
      (t[4] = C),
      (t[5] = c),
      (t[6] = w))
    : (w = t[6]);
  let T = w,
    E;
  t[7] !== d || t[8] !== c
    ? ((E = (e) => {
        (x(),
          e
            ? ((_.current = !1), c.set(Ft, { id: d, interaction: `explicit` }))
            : c.set(Ft, (e) => (e?.id === d ? null : e)));
      }),
      (t[7] = d),
      (t[8] = c),
      (t[9] = E))
    : (E = t[9]);
  let D;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (e) => (
        (m.current = e),
        () => {
          ((m.current = null), x());
        }
      )),
      (t[10] = D))
    : (D = t[10]);
  let O, k, A;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (e) => {
        let t = e.detail.originalEvent.target;
        t instanceof Node && p.current?.contains(t) && e.preventDefault();
      }),
      (k = () => {
        _.current = !1;
      }),
      (A = (e) => {
        _.current && e.preventDefault();
      }),
      (t[11] = O),
      (t[12] = k),
      (t[13] = A))
    : ((O = t[11]), (k = t[12]), (A = t[13]));
  let j;
  t[14] === C
    ? (j = t[15])
    : ((j = (e) => {
        if (((p.current = e), e == null)) return;
        let t = new ResizeObserver(() => {
          e.getClientRects().length === 0 && C();
        });
        return (
          t.observe(e),
          () => {
            (t.disconnect(), x());
          }
        );
      }),
      (t[14] = C),
      (t[15] = j));
  let M;
  t[16] !== s || t[17] !== d || t[18] !== c
    ? ((M = (e) => {
        if (s && e.pointerType === `mouse`) {
          x();
          let e = c.get(Ft);
          if (e?.id === d && e.interaction === `explicit`) return;
          ((_.current = !0), c.set(Ft, { id: d, interaction: `hover` }));
        }
      }),
      (t[16] = s),
      (t[17] = d),
      (t[18] = c),
      (t[19] = M))
    : (M = t[19]);
  let N;
  t[20] !== d || t[21] !== y || t[22] !== c || t[23] !== o.props
    ? ((N = (e) => {
        (o.props.onPointerDown?.(e),
          !e.defaultPrevented &&
            e.button === 0 &&
            !e.ctrlKey &&
            y &&
            c.get(Ft)?.interaction === `hover` &&
            (e.preventDefault(), x(), (_.current = !1), c.set(Ft, { id: d, interaction: `explicit` })));
      }),
      (t[20] = d),
      (t[21] = y),
      (t[22] = c),
      (t[23] = o.props),
      (t[24] = N))
    : (N = t[24]);
  let P;
  t[25] !== T || t[26] !== j || t[27] !== M || t[28] !== N || t[29] !== o.props
    ? ((P = (0, Ut.jsx)(n, { ...o.props, ref: j, onPointerEnter: M, onPointerDown: N, onPointerLeave: T })),
      (t[25] = T),
      (t[26] = j),
      (t[27] = M),
      (t[28] = N),
      (t[29] = o.props),
      (t[30] = P))
    : (P = t[30]);
  let F = y && i,
    I;
  return (
    t[31] !== T || t[32] !== y || t[33] !== P || t[34] !== F || t[35] !== E
      ? ((I = (0, Ut.jsx)(l, {
          align: `start`,
          contentWidth: `menuWide`,
          contentMaxHeight: `tall`,
          open: y,
          onOpenChange: E,
          contentRef: D,
          onContentFocus: Bt,
          onContentPointerEnter: x,
          onContentPointerLeave: T,
          onInteractOutside: O,
          onEscapeKeyDown: k,
          onCloseAutoFocus: A,
          triggerButton: P,
          children: F,
        })),
        (t[31] = T),
        (t[32] = y),
        (t[33] = P),
        (t[34] = F),
        (t[35] = E),
        (t[36] = I))
      : (I = t[36]),
    I
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
    ((Vt = q()), x(), (Ht = he()), de(), o(), re(), Lt(), (Ut = J()));
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
    ((qt = q()), (Jt = J()));
  }))();
}
function Xt(e) {
  let t = (0, Qt.c)(83),
    { alwaysShowTitle: n, items: r, title: i, pageId: o, menu: s, explorer: c } = e,
    l = n !== void 0 && n,
    u = v(et),
    d = j(),
    f = (0, $t.useId)(),
    p = (0, $t.useRef)(null),
    h = (0, $t.useRef)(!1),
    x = (0, $t.useRef)(!1),
    S = Y(ot, `toggleFileTreePanel`),
    C = M(Se),
    w = M(xe),
    T = M(we),
    E;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((E = { enabled: !1 }), (t[0] = E)) : (E = t[0]);
  let { space: D } = Y(Re, o, E),
    k = Y(Ze, o),
    [A, P] = (0, $t.useState)(!1),
    F;
  t[1] !== o || t[2] !== T || t[3] !== D
    ? ((F = D?.root_page_id === o && T.includes(D.id) ? D : void 0),
      (t[1] = o),
      (t[2] = T),
      (t[3] = D),
      (t[4] = F))
    : (F = t[4]);
  let I = F,
    L;
  t[5] !== o || t[6] !== w || t[7] !== I
    ? ((L = w.includes(o) || I != null), (t[5] = o), (t[6] = w), (t[7] = I), (t[8] = L))
    : (L = t[8]);
  let R = L,
    z;
  t[9] === r ? (z = t[10]) : ((z = r.at(-1)), (t[9] = r), (t[10] = z));
  let V = z,
    te = M(Me),
    H;
  t[11] === o ? (H = t[12]) : ((H = tt(o)), (t[11] = o), (t[12] = H));
  let U = H,
    W;
  t[13] === s
    ? (W = t[14])
    : ((W = function () {
        (P(!1), s?.onOpenChange?.(!1));
      }),
      (t[13] = s),
      (t[14] = W));
  let G = W,
    re;
  t[15] === s
    ? (re = t[16])
    : ((re = function () {
        (P(!0), s?.onOpenChange?.(!0));
      }),
      (t[15] = s),
      (t[16] = re));
  let ie = re,
    ae;
  t[17] === G
    ? (ae = t[18])
    : ((ae = function () {
        ((x.current = !0), G());
      }),
      (t[17] = G),
      (t[18] = ae));
  let K = ae,
    ce = c != null && (s?.open ?? A),
    ue;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ue = () => {
        let e = p.current;
        return e?.contains(e.ownerDocument.activeElement) ?? !1;
      }),
      (t[19] = ue))
    : (ue = t[19]);
  let de;
  (t[20] === ce ? (de = t[21]) : ((de = { enabled: ce, isActive: ue }), (t[20] = ce), (t[21] = de)),
    ht(`toggleFileTreePanel`, K, de));
  let fe = !l && te?.isVisible === !0,
    q;
  t[22] === s?.icon
    ? (q = t[23])
    : ((q = s?.icon ?? (0, X.jsx)(m, { icon: { 16: y, 20: N } })), (t[22] = s?.icon), (t[23] = q));
  let pe = V?.label,
    me;
  t[24] === pe
    ? (me = t[25])
    : ((me = (0, X.jsx)(`span`, {
        className: `flex max-w-42 min-w-0 text-default`,
        "data-viewer-header-collapsible": !0,
        children: (0, X.jsx)(nt, { animateOnGroupHover: !0, children: pe }),
      })),
      (t[24] = pe),
      (t[25] = me));
  let J;
  t[26] !== fe || t[27] !== q || t[28] !== me
    ? ((J = (0, X.jsx)(ee, { titleInTab: fe, icon: q, children: me })),
      (t[26] = fe),
      (t[27] = q),
      (t[28] = me),
      (t[29] = J))
    : (J = t[29]);
  let he = J,
    ge = s?.triggerRef,
    ve = c?.triggerRef,
    ye;
  t[30] !== ge || t[31] !== ve ? ((ye = oe(ge, ve)), (t[30] = ge), (t[31] = ve), (t[32] = ye)) : (ye = t[32]);
  let be;
  t[33] !== d || t[34] !== s?.ariaLabel || t[35] !== i
    ? ((be =
        s?.ariaLabel ??
        (i?.trim()
          ? d.formatMessage(
              {
                id: `codex.space.page.navigation.filenameMenu`,
                defaultMessage: `File menu for {title}`,
                description: `Accessible name for a page's filename dropdown`,
              },
              { title: i },
            )
          : d.formatMessage({
              id: `codex.space.page.navigation.untitledFilenameMenu`,
              defaultMessage: `File menu`,
              description: `Accessible name for the filename dropdown of an untitled page`,
            }))),
      (t[33] = d),
      (t[34] = s?.ariaLabel),
      (t[35] = i),
      (t[36] = be))
    : (be = t[36]);
  let Ce, Te;
  t[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ce = () => {
        h.current = !0;
      }),
      (Te = () => {
        h.current = !1;
      }),
      (t[37] = Ce),
      (t[38] = Te))
    : ((Ce = t[37]), (Te = t[38]));
  let Ee;
  t[39] !== ye || t[40] !== be || t[41] !== f
    ? ((Ee = {
        id: f,
        ref: ye,
        className: `group max-w-full min-w-0 select-none`,
        "aria-label": be,
        onPointerDown: Ce,
        onKeyDown: Te,
      }),
      (t[39] = ye),
      (t[40] = be),
      (t[41] = f),
      (t[42] = Ee))
    : (Ee = t[42]);
  let De = Ee,
    Oe = s?.open ?? A,
    ke;
  t[43] !== G || t[44] !== ie
    ? ((ke = (e) => (e ? ie() : G())), (t[43] = G), (t[44] = ie), (t[45] = ke))
    : (ke = t[45]);
  let Ae = s == null,
    je = s?.open ?? A,
    Ne = V?.label,
    Pe;
  t[46] !== Ae || t[47] !== je || t[48] !== Ne || t[49] !== he || t[50] !== De
    ? ((Pe = (0, X.jsx)(Zt, { ...De, plain: Ae, menuOpen: je, tooltipContent: Ne, children: he })),
      (t[46] = Ae),
      (t[47] = je),
      (t[48] = Ne),
      (t[49] = he),
      (t[50] = De),
      (t[51] = Pe))
    : (Pe = t[51]);
  let Fe;
  t[52] !== c || t[53] !== s
    ? ((Fe = (e) => {
        if ((s?.onCloseAutoFocus?.(e), x.current)) {
          ((x.current = !1), e.preventDefault(), c?.onToggle());
          return;
        }
        h.current && e.preventDefault();
      }),
      (t[52] = c),
      (t[53] = s),
      (t[54] = Fe))
    : (Fe = t[54]);
  let Ie, Le;
  t[55] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = () => {
        h.current = !0;
      }),
      (Le = () => {
        h.current = !1;
      }),
      (t[55] = Ie),
      (t[56] = Le))
    : ((Ie = t[55]), (Le = t[56]));
  let ze;
  t[57] !== c || t[58] !== S || t[59] !== K
    ? ((ze =
        c != null &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(O.Item, {
              keyboardShortcut: S,
              leftIcon: (0, X.jsx)(m, { icon: { 16: le, 20: B } }),
              onClick: K,
              children: c.open
                ? (0, X.jsx)(g, {
                    id: `codex.space.page.navigation.hidePages`,
                    defaultMessage: `Hide pages`,
                    description: `Hide the page hierarchy navigator beside this page`,
                  })
                : (0, X.jsx)(g, {
                    id: `codex.space.page.navigation.showPages`,
                    defaultMessage: `Show pages`,
                    description: `Show the page hierarchy navigator beside this page`,
                  }),
            }),
            (0, X.jsx)(O.Separator, {}),
          ],
        })),
      (t[57] = c),
      (t[58] = S),
      (t[59] = K),
      (t[60] = ze))
    : (ze = t[60]);
  let Be;
  t[61] !== C ||
  t[62] !== G ||
  t[63] !== U ||
  t[64] !== R ||
  t[65] !== k ||
  t[66] !== s ||
  t[67] !== o ||
  t[68] !== I ||
  t[69] !== u
    ? ((Be =
        s == null &&
        !U &&
        (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(O.Item, {
              onClick: () => {
                u.get(Se) === C && (I != null && it(u, I.id, !1), _e(u, o, !R), G());
              },
              children: (0, X.jsx)(_, {
                leftIcon: R ? (0, X.jsx)(b, {}) : (0, X.jsx)(a, {}),
                children: R
                  ? (0, X.jsx)(g, {
                      id: `codex.space.page.navigation.unpinPage`,
                      defaultMessage: `Unpin from sidebar`,
                      description: `Filename menu action to remove this page from the pinned sidebar section`,
                    })
                  : (0, X.jsx)(g, {
                      id: `codex.space.page.navigation.pinPage`,
                      defaultMessage: `Pin to sidebar`,
                      description: `Filename menu action to keep this page in the pinned sidebar section`,
                    }),
              }),
            }),
            (0, X.jsx)(O.Item, {
              onClick: () => {
                (st(u, k), G());
              },
              children: (0, X.jsx)(_, {
                leftIcon: (0, X.jsx)(se, {}),
                children: (0, X.jsx)(g, { ...at.copyLink }),
              }),
            }),
          ],
        })),
      (t[61] = C),
      (t[62] = G),
      (t[63] = U),
      (t[64] = R),
      (t[65] = k),
      (t[66] = s),
      (t[67] = o),
      (t[68] = I),
      (t[69] = u),
      (t[70] = Be))
    : (Be = t[70]);
  let Ve = s?.editorMenuItems,
    He = s?.actions,
    Ue;
  t[71] !== ze || t[72] !== Be || t[73] !== Ve || t[74] !== He
    ? ((Ue = (0, X.jsxs)(X.Fragment, { children: [ze, Be, Ve, He] })),
      (t[71] = ze),
      (t[72] = Be),
      (t[73] = Ve),
      (t[74] = He),
      (t[75] = Ue))
    : (Ue = t[75]);
  let We;
  return (
    t[76] !== Oe || t[77] !== ke || t[78] !== Pe || t[79] !== Fe || t[80] !== Ue || t[81] !== f
      ? ((We = (0, X.jsx)(ne, {
          open: Oe,
          onOpenChange: ke,
          triggerButton: Pe,
          contentRef: p,
          contentRole: `menu`,
          contentAriaLabelledBy: f,
          contentWidth: `menu`,
          contentMaxHeight: `available`,
          scrollPeek: !0,
          onCloseAutoFocus: Fe,
          onContentPointerDownCapture: Ie,
          onContentKeyDownCapture: Le,
          children: Ue,
        })),
        (t[76] = Oe),
        (t[77] = ke),
        (t[78] = Pe),
        (t[79] = Fe),
        (t[80] = Ue),
        (t[81] = f),
        (t[82] = We))
      : (We = t[82]),
    We
  );
}
function Zt(e) {
  let t = (0, Qt.c)(12),
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]))
    : (({ plain: i, menuOpen: r, tooltipContent: o, ...a } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o));
  let s;
  t[5] !== i || t[6] !== a
    ? ((s = i
        ? (0, X.jsx)(n, { ...a, color: `ghost`, focusRing: `inset`, size: `toolbar` })
        : (0, X.jsx)(ie, { ...a, variant: `dropdown` })),
      (t[5] = i),
      (t[6] = a),
      (t[7] = s))
    : (s = t[7]);
  let c = s,
    l;
  return (
    t[8] !== c || t[9] !== r || t[10] !== o
      ? ((l = (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsx)(X.Fragment, {
              children: (0, X.jsx)(ue, {
                side: `bottom`,
                triggerPopupOpen: r,
                tooltipContent: o,
                children: c,
              }),
            }),
            null,
          ],
        })),
        (t[8] = c),
        (t[9] = r),
        (t[10] = o),
        (t[11] = l))
      : (l = t[11]),
    l
  );
}
var Qt, $t, X;
function en() {
  return (en = e(() => {
    ((Qt = q()),
      x(),
      ($t = he()),
      W(),
      Be(),
      $e(),
      ye(),
      de(),
      o(),
      D(),
      qe(),
      w(),
      G(),
      V(),
      ct(),
      dt(),
      mt(),
      _t(),
      be(),
      R(),
      u(),
      (X = J()));
  }))();
}
function tn(e) {
  let t = (0, dn.c)(57),
    {
      alwaysShowTitle: r,
      documentType: i,
      isLeaf: a,
      initialParent: o,
      loadAncestry: s,
      onOpenPage: c,
      pageId: l,
      space: u,
      title: d,
      menu: f,
      explorer: p,
    } = e,
    h = a !== void 0 && a,
    _ = s === void 0 || s,
    v = A(`/space/:pageId`),
    b = M(ve),
    x = M(Se),
    S;
  t[0] === _ ? (S = t[1]) : ((S = { enabled: _ }), (t[0] = _), (t[1] = S));
  let C = Y(Re, l, S),
    w;
  t[2] === Symbol.for(`react.memo_cache_sentinel`) ? ((w = { enabled: !1 }), (t[2] = w)) : (w = t[2]);
  let T = Y(gt, l, w),
    E = C.missingAncestorPageId === l ? o : void 0,
    D;
  t[3] === _ ? (D = t[4]) : ((D = { enabled: _ }), (t[3] = _), (t[4] = D));
  let O = Y(Re, E?.page_id ?? null, D),
    k = E == null ? C.ancestorPages : [...O.ancestorPages, E],
    j = E == null ? C : O,
    P = b,
    F = Y(De, l),
    I = j.space ?? u ?? F?.space?.response,
    L = F?.space != null || u?.root_page_id === l || I?.root_page_id === l,
    R = _ && !L && j.missingAncestorPageId != null,
    z;
  t[5] === R ? (z = t[6]) : ((z = { enabled: R }), (t[5] = R), (t[6] = z));
  let { isError: B, isFetching: V, refetch: ee } = Y(Le, j.missingAncestorPageId ?? l, z),
    te;
  t[7] !== B || t[8] !== j.missingAncestorPageId || t[9] !== T?.access || t[10] !== ee || t[11] !== V
    ? ((te =
        B && j.missingAncestorPageId != null && T?.access.can_read === !0
          ? (0, Z.jsx)(n, {
              color: `ghost`,
              size: `toolbar`,
              disabled: V,
              onClick: () => void ee({ cancelRefetch: !1 }),
              children: (0, Z.jsx)(g, {
                id: `toolbarBreadcrumb.retryNavigation`,
                defaultMessage: `Retry navigation`,
                description: `Retries loading the Page breadcrumb after a temporary error; the Page content remains readable`,
              }),
            })
          : null),
      (t[7] = B),
      (t[8] = j.missingAncestorPageId),
      (t[9] = T?.access),
      (t[10] = ee),
      (t[11] = V),
      (t[12] = te))
    : (te = t[12]);
  let H = te;
  if (f == null && v?.params.pageId === l && Pe(v.pattern.path)) {
    let e;
    t[13] === I
      ? (e = t[14])
      : ((e =
          I == null ? null : (0, Z.jsx)(Gt, { icon: (0, Z.jsx)(ut, { spaceId: I.id }), children: I.name })),
        (t[13] = I),
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
    (t[18] !== B ||
    t[19] !== j.hierarchyStatus ||
    t[20] !== j.missingAncestorPageId ||
    t[21] !== L ||
    t[22] !== I
      ? ((U = j.hierarchyStatus),
        j.missingAncestorPageId != null && B
          ? (U = `unavailable`)
          : (L || (U === `loading` && I != null && j.missingAncestorPageId == null)) && (U = `ready`),
        (t[18] = B),
        (t[19] = j.hierarchyStatus),
        (t[20] = j.missingAncestorPageId),
        (t[21] = L),
        (t[22] = I),
        (t[23] = U))
      : (U = t[23]),
    P && !h)
  ) {
    let e = k.filter(nn),
      n;
    return (
      t[24] !== d || t[25] !== i || t[26] !== l
        ? ((n =
            d === void 0
              ? (0, Z.jsx)(g, {
                  id: `codex.space.page.loadingTitle`,
                  defaultMessage: `Loading page…`,
                  description: `Page breadcrumb while its title is not yet known`,
                })
              : (0, Z.jsx)(un, { documentType: i, pageId: l, showIcon: !1, title: d, truncate: !1 })),
          (t[24] = d),
          (t[25] = i),
          (t[26] = l),
          (t[27] = n))
        : (n = t[27]),
      (0, Z.jsxs)(Z.Fragment, {
        children: [
          (0, Z.jsx)(
            Xt,
            {
              alwaysShowTitle: r,
              menu: f,
              title: d,
              items: [
                ...e.map((t, n) => ({
                  id: t.page_id,
                  parentId: e[n - 1]?.page_id,
                  label: (0, Z.jsx)(un, {
                    documentType: Xe(t),
                    pageId: t.page_id,
                    showIcon: !1,
                    title: t.title,
                    truncate: !1,
                  }),
                })),
                { id: l, parentId: e.at(-1)?.page_id, label: n },
              ],
              onOpenPage: c,
              pageId: l,
              explorer: p,
            },
            `${x}:${l}`,
          ),
          H,
        ],
      })
    );
  }
  let ne = [];
  if (I != null) {
    let e = L ? l : I.root_page_id,
      n;
    t[28] === I.id ? (n = t[29]) : ((n = (0, Z.jsx)(ut, { spaceId: I.id })), (t[28] = I.id), (t[29] = n));
    let r = L ? F?.localPageId : void 0,
      i = (L && d) || I.name,
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
      ne.push(o));
  }
  for (let e of L ? [] : k)
    e.page_id !== I?.root_page_id &&
      ne.push({
        id: e.page_id,
        isLeaf: pt(e),
        parentId: ne.at(-1)?.id,
        label: (0, Z.jsx)(un, { documentType: Xe(e), pageId: e.page_id, title: e.title }),
      });
  if (!L || I == null) {
    let e;
    t[37] === L ? (e = t[38]) : ((e = L ? (0, Z.jsx)(ut, {}) : void 0), (t[37] = L), (t[38] = e));
    let n;
    (t[39] !== F?.space?.name || t[40] !== d || t[41] !== i || t[42] !== L || t[43] !== l || t[44] !== u?.name
      ? ((n = L
          ? (0, Z.jsx)(Gt, { children: d || u?.name || F?.space?.name })
          : (0, Z.jsx)(un, { documentType: i, pageId: l, title: d })),
        (t[39] = F?.space?.name),
        (t[40] = d),
        (t[41] = i),
        (t[42] = L),
        (t[43] = l),
        (t[44] = u?.name),
        (t[45] = n))
      : (n = t[45]),
      ne.push({
        id: l,
        isLeaf: h,
        visualKey: F?.space == null ? void 0 : F.localPageId,
        parentId: ne.at(-1)?.id,
        icon: e,
        label: n,
      }));
  }
  let W = T?.namespace,
    G = T?.symbol,
    re;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, Z.jsx)(m, { icon: { 16: y, 20: N } })), (t[46] = re))
    : (re = t[46]);
  let ie = d ?? ``,
    ae = (e) =>
      (0, Z.jsx)(rn, {
        items: ne,
        space: u ?? I ?? void 0,
        pageId: l,
        status: d === void 0 && U === `ready` ? `loading` : U,
        pageIcon: ne.at(-1)?.icon ?? e.icon,
        pageLabel: L
          ? ne.at(-1)?.label
          : (0, Z.jsx)(Gt, {
              children:
                i === `granola_whiteboard` || d?.trim() ? e.title.trim() : (0, Z.jsx)(g, { ...ze.untitled }),
            }),
        onOpenPage: c,
      }),
    K;
  t[47] !== i || t[48] !== l || t[49] !== G || t[50] !== ie || t[51] !== ae || t[52] !== W
    ? ((K = (0, Z.jsx)(Ve, {
        pageId: l,
        documentType: i,
        namespace: W,
        symbol: G,
        fallbackIcon: re,
        title: ie,
        children: ae,
      })),
      (t[47] = i),
      (t[48] = l),
      (t[49] = G),
      (t[50] = ie),
      (t[51] = ae),
      (t[52] = W),
      (t[53] = K))
    : (K = t[53]);
  let oe;
  return (
    t[54] !== H || t[55] !== K
      ? ((oe = (0, Z.jsxs)(Z.Fragment, { children: [K, H] })), (t[54] = H), (t[55] = K), (t[56] = oe))
      : (oe = t[56]),
    oe
  );
}
function nn(e) {
  return !(`access` in e) || (e.access.can_read && e.deleted_at == null);
}
function rn(e) {
  let t = (0, dn.c)(35),
    { items: r, space: i, pageId: a, pageIcon: o, pageLabel: c, onOpenPage: l, status: u } = e,
    d = u === void 0 ? `ready` : u,
    f = j(),
    p;
  t[0] === r ? (p = t[1]) : ((p = r.at(-1)), (t[0] = r), (t[1] = p));
  let m = p,
    h = r[0],
    _;
  t[2] !== r || t[3] !== h?.icon
    ? ((_ = r.slice(h?.icon == null ? 0 : 1, -1)), (t[2] = r), (t[3] = h?.icon), (t[4] = _))
    : (_ = t[4]);
  let v = _,
    [y, b] = (0, pn.useState)(!1),
    x = (0, pn.useRef)(null),
    S;
  t[5] === r ? (S = t[6]) : ((S = JSON.stringify(r.map(an))), (t[5] = r), (t[6] = S));
  let C = S,
    w = y && v.length > 0,
    T;
  t[7] !== y || t[8] !== m || t[9] !== r || t[10] !== h
    ? ((T = y ? r.filter((e) => e === m || (e === h && e.icon != null)) : r),
      (t[7] = y),
      (t[8] = m),
      (t[9] = r),
      (t[10] = h),
      (t[11] = T))
    : (T = t[11]);
  let E = T,
    D;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = () => {
        let e = x.current;
        if (e == null) return;
        let t = () => {
            b(e.scrollWidth > e.clientWidth + 1);
          },
          n = new ResizeObserver(t);
        n.observe(e);
        for (let t of e.children) n.observe(t);
        return (t(), () => n.disconnect());
      }),
      (t[12] = D))
    : (D = t[12]);
  let O;
  (t[13] !== C || t[14] !== d ? ((O = [C, d]), (t[13] = C), (t[14] = d), (t[15] = O)) : (O = t[15]),
    (0, pn.useLayoutEffect)(D, O));
  let k;
  t[16] === f
    ? (k = t[17])
    : ((k = f.formatMessage({
        id: `toolbarBreadcrumb.label`,
        defaultMessage: `Breadcrumb`,
        description: `Accessible label for toolbar breadcrumb navigation`,
      })),
      (t[16] = f),
      (t[17] = k));
  let A = d === `loading`,
    M;
  t[18] !== y ||
  t[19] !== m ||
  t[20] !== v ||
  t[21] !== r ||
  t[22] !== l ||
  t[23] !== o ||
  t[24] !== a ||
  t[25] !== c ||
  t[26] !== w ||
  t[27] !== i ||
  t[28] !== d ||
  t[29] !== E
    ? ((M =
        d === `loading`
          ? (0, Z.jsxs)(`div`, {
              role: `status`,
              children: [
                (0, Z.jsx)(`span`, {
                  className: `sr-only`,
                  children: (0, Z.jsx)(g, {
                    id: `toolbarBreadcrumb.loading`,
                    defaultMessage: `Loading page navigation…`,
                    description: `Status while the Page breadcrumb's title and parent Pages are loading`,
                  }),
                }),
                m?.isLeaf
                  ? (0, Z.jsx)(`span`, {
                      className: `block max-w-full min-w-0`,
                      "aria-current": `page`,
                      children: c,
                    })
                  : (0, Z.jsx)(n, {
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
                  className: d === `unavailable` ? void 0 : `hidden @max-md/page-toolbar:block`,
                  children: m?.isLeaf
                    ? (0, Z.jsxs)(`div`, {
                        className: `flex min-w-0 items-center gap-1`,
                        children: [
                          r.length > 1 && (0, Z.jsx)(on, { items: r.slice(0, -1), onOpenPage: l }),
                          (0, Z.jsx)(`span`, {
                            className: `max-w-full min-w-0`,
                            "aria-current": `page`,
                            children: c,
                          }),
                        ],
                      })
                    : (0, Z.jsx)(on, {
                        items: r.length > 1 ? r.slice(0, -1) : r,
                        onOpenPage: l,
                        icon: o,
                        label: c,
                      }),
                }),
                d !== `unavailable` &&
                  (0, Z.jsx)(`div`, {
                    className: `flex min-w-0 items-center gap-1 @max-md/page-toolbar:hidden`,
                    children: E.map((e, t) =>
                      (0, Z.jsxs)(
                        `div`,
                        {
                          className: H(
                            `flex max-w-full items-center gap-1 overflow-hidden`,
                            !y && e !== m ? `min-w-20` : `min-w-0`,
                            ((!y && e === m) || (y && e !== m)) && `shrink-0`,
                          ),
                          children: [
                            w && e === m && (0, Z.jsx)(on, { items: v, onOpenPage: l }),
                            t > 0 && !(w && e === m) && (0, Z.jsx)(s, {}),
                            (0, Z.jsx)(sn, {
                              item: e,
                              space: i,
                              pageId: a,
                              onOpenPage: l,
                              compact: y && e !== m,
                            }),
                          ],
                        },
                        e.visualKey ?? e.id,
                      ),
                    ),
                  }),
                (0, Z.jsx)(`div`, {
                  ref: x,
                  className: `invisible absolute inset-x-0 top-0 flex w-full min-w-0 items-center gap-1`,
                  "aria-hidden": !0,
                  inert: !0,
                  children: r.map((e, t) =>
                    (0, Z.jsxs)(
                      pn.Fragment,
                      {
                        children: [
                          t > 0 && (0, Z.jsx)(s, {}),
                          (0, Z.jsx)(sn, {
                            item: e,
                            space: i,
                            pageId: a,
                            onOpenPage: l,
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
      (t[18] = y),
      (t[19] = m),
      (t[20] = v),
      (t[21] = r),
      (t[22] = l),
      (t[23] = o),
      (t[24] = a),
      (t[25] = c),
      (t[26] = w),
      (t[27] = i),
      (t[28] = d),
      (t[29] = E),
      (t[30] = M))
    : (M = t[30]);
  let N;
  return (
    t[31] !== M || t[32] !== k || t[33] !== A
      ? ((N = (0, Z.jsx)(Rt, {
          children: (0, Z.jsx)(`nav`, {
            "aria-label": k,
            className: `relative w-full min-w-0 overflow-hidden text-base text-tertiary select-none`,
            "aria-busy": A,
            children: M,
          }),
        })),
        (t[31] = M),
        (t[32] = k),
        (t[33] = A),
        (t[34] = N))
      : (N = t[34]),
    N
  );
}
function an(e) {
  return [e.visualKey ?? e.id, e.icon != null];
}
function on(e) {
  let t = (0, dn.c)(23),
    { items: r, onOpenPage: i, icon: a, label: o } = e,
    s = j(),
    c = o == null && `shrink-0`,
    l;
  t[0] === c ? (l = t[1]) : ((l = H(`max-w-full min-w-0`, c)), (t[0] = c), (t[1] = l));
  let u = o == null,
    d;
  t[2] !== a || t[3] !== s
    ? ((d =
        a == null
          ? s.formatMessage({
              id: `codex.space.page.navigation.hiddenAncestors`,
              defaultMessage: `Show hidden parent pages`,
              description: `Shows only the ancestor Pages hidden from the collapsed breadcrumb`,
            })
          : s.formatMessage({
              id: `codex.space.page.navigation`,
              defaultMessage: `Page navigation`,
              description: `Label for the collapsed Page breadcrumb navigation menu`,
            })),
      (t[2] = a),
      (t[3] = s),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === a
    ? (f = t[6])
    : ((f = a ?? (0, Z.jsx)(`span`, { "aria-hidden": !0, children: mn })), (t[5] = a), (t[6] = f));
  let p;
  t[7] === o
    ? (p = t[8])
    : ((p = o != null && (0, Z.jsx)(`span`, { className: `flex min-w-0 text-default`, children: o })),
      (t[7] = o),
      (t[8] = p));
  let m;
  t[9] !== l || t[10] !== u || t[11] !== d || t[12] !== f || t[13] !== p
    ? ((m = (0, Z.jsxs)(n, {
        className: l,
        color: `ghost`,
        focusRing: `inset`,
        size: `toolbar`,
        uniform: u,
        "aria-label": d,
        children: [f, p],
      })),
      (t[9] = l),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p),
      (t[14] = m))
    : (m = t[14]);
  let h;
  if (t[15] !== r || t[16] !== i) {
    let e;
    (t[18] === i
      ? (e = t[19])
      : ((e = (e) =>
          (0, Z.jsx)(
            O.Item,
            {
              onSelect: () => i(e.id),
              children: (0, Z.jsxs)(`span`, {
                className: `flex min-w-0 items-center gap-1`,
                children: [e.icon, e.label],
              }),
            },
            e.id,
          )),
        (t[18] = i),
        (t[19] = e)),
      (h = r.map(e)),
      (t[15] = r),
      (t[16] = i),
      (t[17] = h));
  } else h = t[17];
  let g;
  return (
    t[20] !== m || t[21] !== h
      ? ((g = (0, Z.jsx)(zt, { triggerButton: m, children: h })), (t[20] = m), (t[21] = h), (t[22] = g))
      : (g = t[22]),
    g
  );
}
function sn(e) {
  let t = (0, dn.c)(48),
    { item: r, space: i, pageId: a, onOpenPage: o, compact: s, minimumWidth: c, enabled: l } = e,
    u = s !== void 0 && s,
    d = c !== void 0 && c,
    f = l === void 0 || l,
    p = (0, pn.useId)(),
    m = Y(It, p),
    h = j();
  if (r.isLeaf && r.id === a) {
    let e;
    return (
      t[0] === r.label
        ? (e = t[1])
        : ((e = (0, Z.jsx)(`span`, {
            className: `max-w-full min-w-0`,
            "aria-current": `page`,
            children: r.label,
          })),
          (t[0] = r.label),
          (t[1] = e)),
      e
    );
  }
  let g = d && r.id !== a ? `min-w-20` : `min-w-0`,
    _ = d && r.id === a && `shrink-0`,
    v;
  t[2] !== g || t[3] !== _ ? ((v = H(`max-w-full`, g, _)), (t[2] = g), (t[3] = _), (t[4] = v)) : (v = t[4]);
  let y = r.id === a ? `page` : void 0,
    b;
  t[5] !== u || t[6] !== h
    ? ((b = u
        ? h.formatMessage({
            id: `codex.space.page.navigation`,
            defaultMessage: `Page navigation`,
            description: `Label for the collapsed Page breadcrumb navigation menu`,
          })
        : void 0),
      (t[5] = u),
      (t[6] = h),
      (t[7] = b))
    : (b = t[7]);
  let x;
  t[8] !== r.id || t[9] !== o || t[10] !== a
    ? ((x = r.id === a ? void 0 : () => o(r.id)), (t[8] = r.id), (t[9] = o), (t[10] = a), (t[11] = x))
    : (x = t[11]);
  let S;
  t[12] !== u || t[13] !== r.id || t[14] !== r.label || t[15] !== a
    ? ((S =
        !u &&
        (0, Z.jsx)(`span`, {
          className: H(`flex min-w-0 overflow-hidden`, r.id === a && `text-default`),
          children: r.label,
        })),
      (t[12] = u),
      (t[13] = r.id),
      (t[14] = r.label),
      (t[15] = a),
      (t[16] = S))
    : (S = t[16]);
  let C;
  t[17] !== u || t[18] !== r.icon || t[19] !== S || t[20] !== v || t[21] !== y || t[22] !== b || t[23] !== x
    ? ((C = (0, Z.jsxs)(n, {
        className: v,
        color: `ghost`,
        focusRing: `inset`,
        uniform: u,
        size: `toolbar`,
        "aria-current": y,
        "aria-label": b,
        onClick: x,
        children: [r.icon, S],
      })),
      (t[17] = u),
      (t[18] = r.icon),
      (t[19] = S),
      (t[20] = v),
      (t[21] = y),
      (t[22] = b),
      (t[23] = x),
      (t[24] = C))
    : (C = t[24]);
  let w = C;
  if (r.isLeaf) return w;
  let T = r.parentId ?? r.id,
    E = r.parentId == null,
    D = r.parentId ?? r.id,
    k;
  t[25] === D ? (k = t[26]) : ((k = [D]), (t[25] = D), (t[26] = k));
  let A;
  t[27] !== f ||
  t[28] !== r.icon ||
  t[29] !== r.id ||
  t[30] !== r.label ||
  t[31] !== r.parentId ||
  t[32] !== p ||
  t[33] !== o ||
  t[34] !== a ||
  t[35] !== w
    ? ((A = (e) =>
        (0, Z.jsxs)(zt, {
          id: p,
          enabled: f,
          triggerButton: w,
          children: [
            r.parentId == null &&
              (0, Z.jsx)(O.Item, {
                "data-breadcrumb-highlighted": ``,
                onSelect: () => o(r.id),
                "aria-current": r.id === a ? `page` : void 0,
                children: (0, Z.jsxs)(`span`, {
                  className: `flex min-w-0 items-center gap-1`,
                  children: [r.icon, r.label],
                }),
              }),
            e,
          ],
        })),
      (t[27] = f),
      (t[28] = r.icon),
      (t[29] = r.id),
      (t[30] = r.label),
      (t[31] = r.parentId),
      (t[32] = p),
      (t[33] = o),
      (t[34] = a),
      (t[35] = w),
      (t[36] = A))
    : (A = t[36]);
  let M;
  return (
    t[37] !== f ||
    t[38] !== r.id ||
    t[39] !== o ||
    t[40] !== m ||
    t[41] !== a ||
    t[42] !== i ||
    t[43] !== T ||
    t[44] !== E ||
    t[45] !== k ||
    t[46] !== A
      ? ((M = (0, Z.jsx)(cn, {
          open: m,
          space: i,
          parentId: T,
          pageId: a,
          highlightedPageId: r.id,
          onOpenPage: o,
          showSeparator: E,
          visited: k,
          enabled: f,
          children: A,
        })),
        (t[37] = f),
        (t[38] = r.id),
        (t[39] = o),
        (t[40] = m),
        (t[41] = a),
        (t[42] = i),
        (t[43] = T),
        (t[44] = E),
        (t[45] = k),
        (t[46] = A),
        (t[47] = M))
      : (M = t[47]),
    M
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
    h = Y(De, s),
    _ = T(Ie, m ? n.id : null),
    v = T(Fe, o),
    y = m ? _ : v,
    b;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((b = { enabled: !1 }), (t[0] = b)) : (b = t[0]);
  let { isFetched: x } = M(y, b),
    S = f && (r || (!x && h?.space == null)),
    C;
  t[1] === S ? (C = t[2]) : ((C = { enabled: S }), (t[1] = S), (t[2] = C));
  let { data: w, isPending: E, error: D } = M(y, C),
    k = Y(m ? Te : null, n?.id ?? ``),
    A = Y(m ? null : Ae, o),
    j = m ? k?.items : A,
    N = w != null && `pages` in w ? w.pages.items : w?.items,
    P = M(Ge),
    F,
    I,
    L,
    R,
    z;
  if (
    t[3] !== a ||
    t[4] !== D ||
    t[5] !== c ||
    t[6] !== E ||
    t[7] !== N ||
    t[8] !== l ||
    t[9] !== s ||
    t[10] !== o ||
    t[11] !== j ||
    t[12] !== p ||
    t[13] !== P?.items ||
    t[14] !== d
  ) {
    let e = P?.items.filter((e) => e.parent != null && `page_id` in e.parent && e.parent.page_id === o),
      n = (N ?? (j == null ? e : (0, fn.default)([...j, ...(e ?? [])], `page_id`)))
        ?.filter(
          (e) =>
            e.access.can_read &&
            e.deleted_at == null &&
            e.parent != null &&
            `page_id` in e.parent &&
            e.parent.page_id === o &&
            !d.includes(e.page_id),
        )
        .sort(ft),
      r = E && (n == null || n.length === 0);
    ((F = a),
      (I = p && (r || D != null || !!n?.length) && (0, Z.jsx)(O.Separator, {})),
      t[20] === r
        ? (L = t[21])
        : ((L =
            r &&
            (0, Z.jsx)(O.Item, {
              disabled: !0,
              children: (0, Z.jsx)(g, {
                id: `codex.space.page.navigation.loading`,
                defaultMessage: `Loading pages…`,
                description: `Status while loading sibling Pages in breadcrumb navigation`,
              }),
            })),
          (t[20] = r),
          (t[21] = L)),
      t[22] === D
        ? (R = t[23])
        : ((R =
            D != null &&
            (0, Z.jsx)(O.Item, {
              disabled: !0,
              children: (0, Z.jsx)(g, {
                id: `codex.space.page.navigation.failed`,
                defaultMessage: `Couldn’t load pages`,
                description: `Error when sibling Pages cannot be loaded in breadcrumb navigation`,
              }),
            })),
          (t[22] = D),
          (t[23] = R)),
      (z = n?.map((e, t) =>
        (0, Z.jsx)(
          ln,
          {
            page: e,
            preloadChildren: N != null && t < hn,
            pageId: s,
            highlightedPageId: c,
            onOpenPage: l,
            visited: d,
          },
          e.page_id,
        ),
      )),
      (t[3] = a),
      (t[4] = D),
      (t[5] = c),
      (t[6] = E),
      (t[7] = N),
      (t[8] = l),
      (t[9] = s),
      (t[10] = o),
      (t[11] = j),
      (t[12] = p),
      (t[13] = P?.items),
      (t[14] = d),
      (t[15] = F),
      (t[16] = I),
      (t[17] = L),
      (t[18] = R),
      (t[19] = z));
  } else ((F = t[15]), (I = t[16]), (L = t[17]), (R = t[18]), (z = t[19]));
  let B;
  t[24] !== I || t[25] !== L || t[26] !== R || t[27] !== z
    ? ((B = (0, Z.jsxs)(Z.Fragment, { children: [I, L, R, z] })),
      (t[24] = I),
      (t[25] = L),
      (t[26] = R),
      (t[27] = z),
      (t[28] = B))
    : (B = t[28]);
  let V;
  return (t[29] !== F || t[30] !== B ? ((V = F(B)), (t[29] = F), (t[30] = B), (t[31] = V)) : (V = t[31]), V);
}
function ln(e) {
  let t = (0, dn.c)(37),
    { page: n, preloadChildren: r, pageId: i, highlightedPageId: a, onOpenPage: o, visited: s } = e,
    [c, l] = (0, pn.useState)(!1),
    u = n.page_id === a ? `` : void 0,
    d = n.page_id === i ? `page` : void 0,
    f = n.page_id === i && `text-accent`,
    p;
  t[0] === f ? (p = t[1]) : ((p = H(`flex min-w-0`, f)), (t[0] = f), (t[1] = p));
  let m;
  t[2] === n ? (m = t[3]) : ((m = Xe(n)), (t[2] = n), (t[3] = m));
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
  let b;
  t[17] !== _ || t[18] !== v || t[19] !== y
    ? ((b = (0, Z.jsx)(O.Item, { "aria-current": v, onSelect: y, children: _ })),
      (t[17] = _),
      (t[18] = v),
      (t[19] = y),
      (t[20] = b))
    : (b = t[20]);
  let x = b;
  if (pt(n) || !n.has_children) return x;
  let S;
  t[21] !== n.page_id || t[22] !== s
    ? ((S = [...s, n.page_id]), (t[21] = n.page_id), (t[22] = s), (t[23] = S))
    : (S = t[23]);
  let C = c || r,
    w;
  t[24] !== _ || t[25] !== o || t[26] !== n.page_id
    ? ((w = (e) =>
        (0, Z.jsx)(O.FlyoutSubmenuItem, {
          label: _,
          onSelect: () => o(n.page_id),
          onOpenChange: l,
          contentWidth: `menuWide`,
          children: e,
        })),
      (t[24] = _),
      (t[25] = o),
      (t[26] = n.page_id),
      (t[27] = w))
    : (w = t[27]);
  let T;
  return (
    t[28] !== a ||
    t[29] !== o ||
    t[30] !== c ||
    t[31] !== n.page_id ||
    t[32] !== i ||
    t[33] !== S ||
    t[34] !== C ||
    t[35] !== w
      ? ((T = (0, Z.jsx)(cn, {
          open: c,
          parentId: n.page_id,
          pageId: i,
          highlightedPageId: a,
          onOpenPage: o,
          visited: S,
          enabled: C,
          children: w,
        })),
        (t[28] = a),
        (t[29] = o),
        (t[30] = c),
        (t[31] = n.page_id),
        (t[32] = i),
        (t[33] = S),
        (t[34] = C),
        (t[35] = w),
        (t[36] = T))
      : (T = t[36]),
    T
  );
}
function un(e) {
  let t = (0, dn.c)(13),
    { documentType: n, pageId: r, symbol: i, showIcon: a, title: o, truncate: s } = e,
    c = s === void 0 || s,
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = { enabled: !1 }), (t[0] = l)) : (l = t[0]);
  let u = Y(gt, r, l),
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
            : o?.trim() || (0, Z.jsx)(g, { ...ze.untitled });
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
      ? ((h = (0, Z.jsx)(Ve, { pageId: r, documentType: n, namespace: d, symbol: f, title: p, children: m })),
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
    ((dn = q()),
      F(),
      (fn = t(ce(), 1)),
      x(),
      (pn = he()),
      W(),
      L(),
      de(),
      o(),
      D(),
      G(),
      Je(),
      Ce(),
      lt(),
      Ee(),
      rt(),
      Ye(),
      _t(),
      ke(),
      Ke(),
      Wt(),
      Lt(),
      Yt(),
      en(),
      (Z = J()),
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
    n = j(),
    {
      inset: r,
      contentFade: a,
      navigation: o,
      actions: s,
      saveStatus: c,
      people: l,
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
    b = a !== void 0 && a,
    x;
  t[0] === g
    ? (x = t[1])
    : ((x = (e) => {
        e.pointerType !== `touch` && g?.();
      }),
      (t[0] = g),
      (t[1] = x));
  let S = !y && vn.Header,
    C;
  t[2] === S ? (C = t[3]) : ((C = H(S, `w-full`)), (t[2] = S), (t[3] = C));
  let w = b ? `overlay` : void 0,
    T;
  t[4] === o
    ? (T = t[5])
    : ((T = {
        id: `title`,
        content: (0, Q.jsx)(`div`, { className: `flex min-w-0 items-center`, children: o }),
        collapsePriority: 1,
      }),
      (t[4] = o),
      (t[5] = T));
  let E;
  t[6] !== s || t[7] !== n
    ? ((E =
        s == null
          ? null
          : (0, Q.jsx)(z, {
              label: n.formatMessage({
                id: `codex.space.page.header.editingTools`,
                defaultMessage: `Page editing tools`,
                description: `Accessible label for the Page header editing actions`,
              }),
              children: s,
            })),
      (t[6] = s),
      (t[7] = n),
      (t[8] = E))
    : (E = t[8]);
  let D;
  t[9] === E
    ? (D = t[10])
    : ((D = { id: `editing`, content: E, collapsePriority: 2 }), (t[9] = E), (t[10] = D));
  let O;
  t[11] === c ? (O = t[12]) : ((O = { id: `save-status`, content: c }), (t[11] = c), (t[12] = O));
  let k;
  t[13] !== T || t[14] !== D || t[15] !== O
    ? ((k = [T, D, O]), (t[13] = T), (t[14] = D), (t[15] = O), (t[16] = k))
    : (k = t[16]);
  let A;
  t[17] === d ? (A = t[18]) : ((A = { id: `request-edit-access`, content: d }), (t[17] = d), (t[18] = A));
  let M;
  t[19] === m
    ? (M = t[20])
    : ((M = { id: `supplemental`, content: m, hidePriority: 3 }), (t[19] = m), (t[20] = M));
  let N;
  t[21] === u
    ? (N = t[22])
    : ((N = { id: `automations`, content: u, hidePriority: 5 }), (t[21] = u), (t[22] = N));
  let P;
  t[23] !== f || t[24] !== n
    ? ((P =
        f == null || f === !1
          ? null
          : (0, Q.jsx)(z, {
              label: n.formatMessage({
                id: `codex.space.page.header.comments`,
                defaultMessage: `Comments`,
                description: `Accessible label for the Page header comments control`,
              }),
              children: f,
            })),
      (t[23] = f),
      (t[24] = n),
      (t[25] = P))
    : (P = t[25]);
  let F;
  t[26] === P ? (F = t[27]) : ((F = { id: `comments`, content: P }), (t[26] = P), (t[27] = F));
  let I;
  t[28] === p
    ? (I = t[29])
    : ((I = { id: `meeting`, content: p, collapsePriority: 3 }), (t[28] = p), (t[29] = I));
  let L;
  t[30] !== n || t[31] !== l || t[32] !== v
    ? ((L =
        v == null && l == null
          ? null
          : (0, Q.jsxs)(z, {
              hideWhenEmpty: !0,
              label: n.formatMessage({
                id: `codex.space.page.header.sharing`,
                defaultMessage: `Sharing`,
                description: `Accessible label for Page sharing controls`,
              }),
              children: [l, v],
            })),
      (t[30] = n),
      (t[31] = l),
      (t[32] = v),
      (t[33] = L))
    : (L = t[33]);
  let R;
  t[34] === L
    ? (R = t[35])
    : ((R = { id: `sharing`, content: L, collapsePriority: 4 }), (t[34] = L), (t[35] = R));
  let B;
  t[36] !== h || t[37] !== _
    ? ((B = { id: `window-controls`, content: (0, Q.jsx)(ge, { tabId: _, onClose: h }) }),
      (t[36] = h),
      (t[37] = _),
      (t[38] = B))
    : (B = t[38]);
  let V;
  t[39] !== A || t[40] !== M || t[41] !== N || t[42] !== F || t[43] !== I || t[44] !== R || t[45] !== B
    ? ((V = [A, M, N, F, I, R, B]),
      (t[39] = A),
      (t[40] = M),
      (t[41] = N),
      (t[42] = F),
      (t[43] = I),
      (t[44] = R),
      (t[45] = B),
      (t[46] = V))
    : (V = t[46]);
  let ee;
  t[47] !== b || t[48] !== y || t[49] !== k || t[50] !== V || t[51] !== C || t[52] !== w
    ? ((ee = (0, Q.jsx)(i, {
        className: C,
        contentFade: b,
        density: `surface`,
        inset: y,
        placement: w,
        leading: k,
        trailing: V,
      })),
      (t[47] = b),
      (t[48] = y),
      (t[49] = k),
      (t[50] = V),
      (t[51] = C),
      (t[52] = w),
      (t[53] = ee))
    : (ee = t[53]);
  let te;
  return (
    t[54] !== x || t[55] !== ee
      ? ((te = (0, Q.jsx)(`div`, {
          className: `@container/page-toolbar w-full min-w-0`,
          onPointerEnter: x,
          children: ee,
        })),
        (t[54] = x),
        (t[55] = ee),
        (t[56] = te))
      : (te = t[56]),
    te
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
    : ((l = r === `window` || (r !== `side-panel` && Pe(`/space/:pageId`))), (t[6] = r), (t[7] = l));
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
  if (a === `window` || (a !== `side-panel` && Pe(`/space/:pageId`))) {
    let e;
    return (
      t[0] !== n || t[1] !== s || t[2] !== i
        ? ((e = (0, Q.jsx)(We.Header, { className: `shrink-0`, contentFade: s, separator: i, children: n })),
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
    t[4] === e ? (r = t[5]) : ((r = H(`pointer-events-none z-30 shrink-0`, e)), (t[4] = e), (t[5] = r));
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
    ? ((l = (0, Q.jsx)(We.MainContentLayout, { layout: `custom-titlebar` })), (t[9] = l))
    : (l = t[9]);
  let u = c ? `absolute inset-x-0 top-0` : `relative`,
    d;
  t[10] === u
    ? (d = t[11])
    : ((d = H(
        `pointer-events-none z-30 shrink-0 [--viewer-header-start-inset:var(--app-shell-titlebar-left-inset,0px)]`,
        u,
      )),
      (t[10] = u),
      (t[11] = d));
  let f;
  return (
    t[12] !== n || t[13] !== i || t[14] !== d
      ? ((f = (0, Q.jsxs)(Q.Fragment, {
          children: [l, (0, Q.jsx)(We.Header, { className: d, inline: !0, separator: i, children: n })],
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
    ((Cn = q()), F(), W(), He(), Qe(), lt(), u(), yn(), (Q = J()));
  }))();
}
function Tn(e) {
  let t = (0, En.c)(14),
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]), (o = t[4]))
    : (({ label: r, appearance: a, color: o, ...i } = e),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i),
      (t[3] = a),
      (t[4] = o));
  let s = a === void 0 ? `toolbar` : a,
    c = o === void 0 ? `ghostActive` : o,
    l = i[`aria-expanded`] === !0,
    u;
  t[5] !== s || t[6] !== c || t[7] !== r || t[8] !== i
    ? ((u =
        s === `viewer`
          ? (0, Dn.jsx)(K, { ...i, "aria-label": r, uniform: !0 })
          : (0, Dn.jsx)(n, { ...i, "aria-label": r, color: c, size: `toolbar`, uniform: !0 })),
      (t[5] = s),
      (t[6] = c),
      (t[7] = r),
      (t[8] = i),
      (t[9] = u))
    : (u = t[9]);
  let d;
  return (
    t[10] !== r || t[11] !== l || t[12] !== u
      ? ((d = (0, Dn.jsx)(ue, { tooltipContent: r, triggerPopupOpen: l, children: u })),
        (t[10] = r),
        (t[11] = l),
        (t[12] = u),
        (t[13] = d))
      : (d = t[13]),
    d
  );
}
var En, Dn;
function On() {
  return (On = e(() => {
    ((En = q()), de(), V(), u(), (Dn = J()));
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
  let a = i,
    o;
  if (t[2] !== r || t[3] !== n || t[4] !== a) {
    let e;
    (t[6] !== n || t[7] !== a
      ? ((e = (e) => {
          if (e.type === `separator`) return (0, $.jsx)(O.Separator, {}, e.id);
          if (e.type === `label`) return (0, $.jsx)(O.Title, { children: n.renderItemContent(e) }, e.id);
          if (e.submenu != null)
            return (0, $.jsx)(
              P,
              { disabled: e.enabled === !1, label: n.renderItemContent(e), children: n.renderSubmenu(e, a) },
              e.id,
            );
          let t =
            e.type === `checkbox` || e.type === `radio`
              ? (0, $.jsx)(_, {
                  trailingContent: e.checked ? (0, $.jsx)(p, {}) : null,
                  children: n.renderItemContent({ ...e, type: void 0 }),
                })
              : n.renderItemContent(e);
          return (0, $.jsx)(
            O.Item,
            {
              tooltipText:
                e.tooltipMessage == null
                  ? void 0
                  : (0, $.jsx)(g, { ...e.tooltipMessage, values: e.tooltipMessageValues }),
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
                    (a(e, t.nativeEvent),
                    e.href != null && Ue({ event: t, href: e.href, initiator: `side_panel_menu` })));
              },
              children: e.href == null ? t : (0, $.jsx)(`a`, { href: e.href, children: t }),
            },
            e.id,
          );
        }),
        (t[6] = n),
        (t[7] = a),
        (t[8] = e))
      : (e = t[8]),
      (o = r.map(e)),
      (t[2] = r),
      (t[3] = n),
      (t[4] = a),
      (t[5] = o));
  } else o = t[5];
  let s;
  return (
    t[9] === o ? (s = t[10]) : ((s = (0, $.jsx)($.Fragment, { children: o })), (t[9] = o), (t[10] = s)),
    s
  );
}
var An, $;
function jn() {
  return (jn = e(() => {
    ((An = q()), W(), o(), Ne(), D(), w(), u(), ($ = J()));
  }))();
}
export {
  xn as a,
  wn as c,
  At as d,
  Nt as f,
  xt as g,
  vt as h,
  On as i,
  tn as l,
  wt as m,
  jn as n,
  Sn as o,
  Tt as p,
  Tn as r,
  bn as s,
  kn as t,
  gn as u,
};
//# sourceMappingURL=filename-menu-actions-c1dd81b47dd6.js.map
