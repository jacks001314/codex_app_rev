import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  $Ct as n,
  BS as r,
  Cot as i,
  Cz as a,
  Dd as o,
  FD as s,
  HS as c,
  Ixt as l,
  JR as u,
  MS as d,
  Mz as f,
  ND as p,
  NO as m,
  NS as h,
  Nz as g,
  Od as _,
  PO as v,
  Pxt as y,
  QCt as b,
  SO as x,
  Sj as S,
  TJ as ee,
  Tz as te,
  UD as ne,
  US as re,
  VDt as ie,
  VS as ae,
  Vxt as oe,
  X4 as C,
  YR as se,
  _Mt as w,
  _wt as ce,
  _z as le,
  aj as ue,
  awt as de,
  bz as fe,
  dj as pe,
  eD as me,
  fwt as he,
  gMt as ge,
  gwt as _e,
  gz as ve,
  hV as ye,
  iwt as be,
  jDt as xe,
  oj as Se,
  pwt as Ce,
  t3 as we,
  tD as Te,
  vzt as T,
  wot as Ee,
  wz as De,
  xMt as Oe,
  xO as ke,
  xz as Ae,
  yMt as je,
  yzt as Me,
  zxt as Ne,
} from "./app-shared-bbfeca5e5737.js";
import {
  AYn as Pe,
  C$n as Fe,
  D0 as Ie,
  E0 as Le,
  FYn as Re,
  Jqt as ze,
  Kqt as Be,
  Lqt as E,
  NYn as Ve,
  OLt as He,
  PYn as Ue,
  S6n as D,
  e1 as We,
  jYn as Ge,
  jqt as Ke,
  t1 as qe,
  w$n as Je,
  x6n as Ye,
} from "./app-initial-5851df3f6cb1.js";
import { hl as O, ml as Xe } from "./app-primary-fe8a450b3b04.js";
import {
  a as Ze,
  i as Qe,
  n as $e,
  o as et,
  r as tt,
  s as nt,
  t as rt,
} from "./quick-chat-floating-resize-handles-884029d75925.js";
function it(e) {
  let t = (0, k.c)(20),
    { items: n, availableHeight: r, isDockedTop: i, shouldReduceMotion: a } = e,
    [o, c] = (0, at.useState)(null),
    l;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (e, t) => {
        let n = t.firstElementChild;
        n instanceof HTMLElement && c(n.offsetHeight);
      }),
      (t[0] = l))
    : (l = t[0]);
  let u = s(l),
    d = Math.min(o == null ? r : o * 3 + 24, Math.max(0, r - 16)),
    f = a ? 0 : 300 / 1e3,
    p;
  t[1] === f ? (p = t[2]) : ((p = { duration: f, ease: pe }), (t[1] = f), (t[2] = p));
  let h = p,
    g = d + 16,
    _;
  t[3] === g ? (_ = t[4]) : ((_ = { style: { maxHeight: g } }), (t[3] = g), (t[4] = _));
  let v;
  if (t[5] !== i || t[6] !== n || t[7] !== a || t[8] !== h) {
    let e;
    (t[10] !== i || t[11] !== a || t[12] !== h
      ? ((e = (e) => {
          let { id: t, content: n } = e;
          return (0, A.jsx)(
            ce.div,
            {
              className: `shrink-0`,
              layout: !a && `position`,
              transition: h,
              children: (0, A.jsx)(ce.div, {
                initial: { opacity: 0, transform: `translateY(${a ? 0 : 8 * (i ? -1 : 1)}px)` },
                animate: { opacity: 1, transform: `translateY(0px)` },
                transition: { ...h, opacity: { ease: `linear` } },
                children: n,
              }),
            },
            t,
          );
        }),
        (t[10] = i),
        (t[11] = a),
        (t[12] = h),
        (t[13] = e))
      : (e = t[13]),
      (v = n.map(e)),
      (t[5] = i),
      (t[6] = n),
      (t[7] = a),
      (t[8] = h),
      (t[9] = v));
  } else v = t[9];
  let y;
  t[14] !== u || t[15] !== v
    ? ((y = (0, A.jsx)(`div`, { ref: u, className: `relative flex flex-col gap-3`, children: v })),
      (t[14] = u),
      (t[15] = v),
      (t[16] = y))
    : (y = t[16]);
  let b;
  return (
    t[17] !== _ || t[18] !== y
      ? ((b = (0, A.jsx)(m, {
          className: `-mx-6 -my-2`,
          fade: `mask`,
          scrollClassName: `overflow-y-auto overscroll-contain px-6 py-2`,
          scrollProps: _,
          children: y,
        })),
        (t[17] = _),
        (t[18] = y),
        (t[19] = b))
      : (b = t[19]),
    b
  );
}
var k, at, A;
function ot() {
  return (ot = e(() => {
    ((k = T()), _e(), (at = Me()), v(), p(), C(), S(), (A = Oe()));
  }))();
}
var st, j;
function ct() {
  return (ct = e(() => {
    ((st = { type: `none` }), (j = { type: `pending` }));
  }))();
}
function lt(e) {
  let t = (0, dt.c)(27),
    { animateChrome: n, children: r, isChromeRevealed: i, isCompact: a, presentationToggle: o } = e,
    s = !a && `shrink-0`,
    c;
  t[0] === s ? (c = t[1]) : ((c = ge(`relative min-h-0 overflow-hidden`, s)), (t[0] = s), (t[1] = c));
  let l = !i || void 0,
    u = i ? 46 : 0,
    d = +!!i,
    f;
  t[2] !== u || t[3] !== d
    ? ((f = { height: u, opacity: d }), (t[2] = u), (t[3] = d), (t[4] = f))
    : (f = t[4]);
  let p = !i || void 0,
    m;
  t[5] === n
    ? (m = t[6])
    : ((m = n ? { duration: 300 / 1e3, ease: pe } : { duration: 0 }), (t[5] = n), (t[6] = m));
  let h;
  t[7] !== a || t[8] !== o
    ? ((h =
        o == null
          ? null
          : (0, ft.jsx)(`button`, {
              className: `pointer-events-none absolute inset-0 rounded-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset`,
              "aria-label": o.label,
              "aria-expanded": !a,
              type: `button`,
              onClick: o.onToggle,
            })),
      (t[7] = a),
      (t[8] = o),
      (t[9] = h))
    : (h = t[9]);
  let g = o != null && a && `cursor-n-resize`,
    _ = o != null && !a && `cursor-s-resize`,
    v = o == null && `cursor-interaction`,
    y = a && `mx-1.5 border-b border-default px-2`,
    b = !a && `px-3`,
    x;
  t[10] !== g || t[11] !== _ || t[12] !== v || t[13] !== y || t[14] !== b
    ? ((x = ge(`flex h-toolbar touch-none select-none items-center justify-between`, g, _, v, y, b)),
      (t[10] = g),
      (t[11] = _),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x))
    : (x = t[15]);
  let S;
  t[16] !== r || t[17] !== x
    ? ((S = (0, ft.jsx)(`div`, { className: x, children: r })), (t[16] = r), (t[17] = x), (t[18] = S))
    : (S = t[18]);
  let ee;
  return (
    t[19] !== S || t[20] !== c || t[21] !== l || t[22] !== f || t[23] !== p || t[24] !== m || t[25] !== h
      ? ((ee = (0, ft.jsxs)(ce.header, {
          className: c,
          "aria-hidden": l,
          animate: f,
          "data-quick-chat-drag-handle": !0,
          initial: !1,
          inert: p,
          transition: m,
          children: [h, S],
        })),
        (t[19] = S),
        (t[20] = c),
        (t[21] = l),
        (t[22] = f),
        (t[23] = p),
        (t[24] = m),
        (t[25] = h),
        (t[26] = ee))
      : (ee = t[26]),
    ee
  );
}
function ut(e) {
  let n = (0, dt.c)(11),
    { isCompact: r, onMinimize: i, standalone: a } = e,
    o = a !== void 0 && a,
    s = ie(),
    c;
  n[0] === s
    ? (c = n[1])
    : ((c = s.formatMessage({
        id: `quickChat.minimize`,
        defaultMessage: `Minimize chat`,
        description: `Accessible label for minimizing a floating chat`,
      })),
      (n[0] = s),
      (n[1] = c));
  let l = o ? `outlineSurface` : `ghostSecondary`,
    u = r ? `composer` : `toolbar`,
    d;
  n[2] === o
    ? (d = n[3])
    : ((d = (e) => {
        o && e.preventDefault();
      }),
      (n[2] = o),
      (n[3] = d));
  let p;
  n[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, ft.jsx)(f, { "aria-hidden": !1, asset: _ })), (n[4] = p))
    : (p = n[4]);
  let m;
  return (
    n[5] !== i || n[6] !== c || n[7] !== l || n[8] !== u || n[9] !== d
      ? ((m = (0, ft.jsx)(t, {
          "aria-label": c,
          color: l,
          size: u,
          uniform: !0,
          onClick: i,
          onPointerDown: d,
          children: p,
        })),
        (n[5] = i),
        (n[6] = c),
        (n[7] = l),
        (n[8] = u),
        (n[9] = d),
        (n[10] = m))
      : (m = n[10]),
    m
  );
}
var dt, ft;
function pt() {
  return (pt = e(() => {
    ((dt = T()), o(), w(), _e(), xe(), we(), g(), C(), S(), (ft = Oe()));
  }))();
}
var mt, ht, gt;
function _t() {
  return (_t = e(() => {
    ((mt = `_minimizeButton_ndoew_1`), (ht = `_frame_ndoew_11`), (gt = { minimizeButton: mt, frame: ht }));
  }))();
}
function vt(e) {
  let t = (0, yt.c)(48),
    {
      allowCompactResize: n,
      animateSurface: i,
      background: a,
      children: o,
      currentSize: s,
      heightLabel: l,
      isCompact: u,
      isCompactChromeRevealed: d,
      isMinimized: f,
      keepSurfaceInset: p,
      maximumSize: m,
      minimizedContent: g,
      minimizedSurfaceBounds: _,
      minimumSize: v,
      onResize: y,
      onResizeEnd: b,
      onResizingChange: x,
      prefersCompactPresentation: S,
      resizable: ee,
      sectionProps: te,
      sectionRef: ne,
      shouldReduceMotion: re,
      variant: ie,
      verticalResizeEdge: ae,
      widthLabel: oe,
    } = e,
    C = n !== void 0 && n,
    se = i === void 0 || i,
    w = ee === void 0 || ee,
    le = !f && (p || (u && !d)) ? 6 : 0,
    ue;
  t[0] !== f || t[1] !== _ || t[2] !== le
    ? ((ue = f && _ != null ? _ : { top: 0, right: le, bottom: le, left: le }),
      (t[0] = f),
      (t[1] = _),
      (t[2] = le),
      (t[3] = ue))
    : (ue = t[3]);
  let de = ue,
    fe = a !== `panel` || S,
    me;
  t[4] !== te.ref || t[5] !== ne
    ? ((me = Se(ne, te.ref, h)), (t[4] = te.ref), (t[5] = ne), (t[6] = me))
    : (me = t[6]);
  let he = S && gt.frame,
    _e = S && `group/quick-chat-frame focus:outline-none`,
    ve = _ == null ? `pointer-events-auto` : `pointer-events-none`,
    ye = S && c.floatingSurface,
    be = p && c.singleLineSurface,
    xe =
      ie === `floating`
        ? `fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))]`
        : `absolute top-0 left-0 z-30 max-h-full max-w-full`,
    Ce = S ? `overflow-visible` : `overflow-hidden`,
    we;
  t[7] !== ye || t[8] !== be || t[9] !== xe || t[10] !== Ce || t[11] !== he || t[12] !== _e || t[13] !== ve
    ? ((we = ge(`flex flex-col text-default`, he, _e, ve, ye, be, xe, Ce)),
      (t[7] = ye),
      (t[8] = be),
      (t[9] = xe),
      (t[10] = Ce),
      (t[11] = he),
      (t[12] = _e),
      (t[13] = ve),
      (t[14] = we))
    : (we = t[14]);
  let Te;
  t[15] !== se || t[16] !== a || t[17] !== p || t[18] !== g || t[19] !== S || t[20] !== re || t[21] !== de
    ? ((Te = S
        ? (0, bt.jsx)(r, {
            asChild: !0,
            unstyled: a !== `panel`,
            variant: p ? `single-line` : `default`,
            children: (0, bt.jsx)(ce.div, {
              "aria-hidden": g == null || void 0,
              animate: de,
              className: ge(
                `pointer-events-none absolute group-focus-visible/quick-chat-frame:ring-2 group-focus-visible/quick-chat-frame:ring-ring group-focus-visible/quick-chat-frame:ring-offset-0 forced-colors:group-focus-visible/quick-chat-frame:outline-auto`,
                a !== `panel` && `rounded-[inherit]`,
              ),
              initial: !1,
              transition: re || !se ? { duration: 0 } : { duration: 300 / 1e3, ease: pe },
              children: g,
            }),
          })
        : null),
      (t[15] = se),
      (t[16] = a),
      (t[17] = p),
      (t[18] = g),
      (t[19] = S),
      (t[20] = re),
      (t[21] = de),
      (t[22] = Te))
    : (Te = t[22]);
  let T;
  t[23] !== C ||
  t[24] !== s ||
  t[25] !== l ||
  t[26] !== u ||
  t[27] !== f ||
  t[28] !== m ||
  t[29] !== v ||
  t[30] !== y ||
  t[31] !== b ||
  t[32] !== x ||
  t[33] !== w ||
  t[34] !== de ||
  t[35] !== ae ||
  t[36] !== oe
    ? ((T =
        w && (!u || C) && !f
          ? (0, bt.jsx)(`div`, {
              className: `pointer-events-none absolute`,
              style: de,
              children: (0, bt.jsx)(`div`, {
                className: `pointer-events-auto contents`,
                children: (0, bt.jsx)(rt, {
                  currentSize: s,
                  defaultSize: Ke,
                  extendIntoToolbar: !1,
                  heightLabel: l,
                  maximumSize: m,
                  minimumSize: v,
                  verticalEdge: u ? null : ae,
                  widthLabel: oe,
                  onResize: y,
                  onResizeEnd: b,
                  onResizingChange: x,
                }),
              }),
            })
          : null),
      (t[23] = C),
      (t[24] = s),
      (t[25] = l),
      (t[26] = u),
      (t[27] = f),
      (t[28] = m),
      (t[29] = v),
      (t[30] = y),
      (t[31] = b),
      (t[32] = x),
      (t[33] = w),
      (t[34] = de),
      (t[35] = ae),
      (t[36] = oe),
      (t[37] = T))
    : (T = t[37]);
  let Ee;
  t[38] !== o || t[39] !== te || t[40] !== we || t[41] !== Te || t[42] !== T || t[43] !== me
    ? ((Ee = (0, bt.jsxs)(ce.section, { ...te, ref: me, className: we, children: [Te, T, o] })),
      (t[38] = o),
      (t[39] = te),
      (t[40] = we),
      (t[41] = Te),
      (t[42] = T),
      (t[43] = me),
      (t[44] = Ee))
    : (Ee = t[44]);
  let De;
  return (
    t[45] !== Ee || t[46] !== fe
      ? ((De = (0, bt.jsx)(r, { asChild: !0, unstyled: fe, children: Ee })),
        (t[45] = Ee),
        (t[46] = fe),
        (t[47] = De))
      : (De = t[47]),
    De
  );
}
var yt, bt;
function xt() {
  return (xt = e(() => {
    ((yt = T()), w(), _e(), $e(), E(), ae(), C(), S(), ue(), d(), _t(), re(), (bt = Oe()));
  }))();
}
function St(e) {
  let r = (0, At.c)(412),
    {
      ref: a,
      animateOnMount: o,
      background: u,
      children: d,
      containerSize: f,
      dockThreadKey: p,
      reservedDockPosition: m,
      footer: g,
      overlay: _,
      renderHeader: v,
      renderMenu: y,
      forceExpanded: b,
      hasConversation: x,
      isHidden: S,
      isMinimized: ee,
      onDragOver: re,
      onDragEnd: ae,
      onEscape: C,
      onMinimizedChange: w,
      presentation: le,
      onPresentationChange: ue,
      title: de,
      titleContent: fe,
      minimizedIcon: he,
      minimizedMenuItems: _e,
      restoreLabel: xe,
      statusState: we,
      titleStatusState: Te,
      renderCompletionPreviews: T,
      renderTranscript: Ee,
      hasTranscript: Oe,
      showComposerDivider: je,
      showHeader: Me,
    } = e,
    Fe = o !== void 0 && o,
    Ie = b !== void 0 && b,
    E = S !== void 0 && S,
    He = Te === void 0 ? we : Te,
    Ue = je !== void 0 && je,
    D = Me === void 0 || Me,
    Ge = l(i),
    qe = Oe ?? Ee != null,
    O = oe(p) ?? void 0,
    $e = (0, M.useContext)(Ye),
    nt = oe(we),
    rt = oe(He),
    k = ie(),
    at = (0, M.useId)(),
    A = (0, M.useId)(),
    ot = te(),
    j = se(),
    ct = (0, M.useSyncExternalStore)(Dt, Ot, wt),
    dt;
  r[0] !== ct || r[1] !== ot ? ((dt = De(ct, ot)), (r[0] = ct), (r[1] = ot), (r[2] = dt)) : (dt = r[2]);
  let ft = dt,
    pt = De((0, M.useSyncExternalStore)(Dt, kt, Ct), ot),
    [mt, ht] = (0, M.useState)(0),
    [_t, yt] = (0, M.useState)(!1),
    [bt, xt] = (0, M.useState)(0),
    [St, It] = (0, M.useState)(null),
    [Lt, Rt] = (0, M.useState)(null),
    zt;
  r[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((zt = (e) => {
        xt(ne(e).height);
      }),
      (r[3] = zt))
    : (zt = r[3]);
  let Bt = s(zt),
    Vt;
  r[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Vt = (e) => {
        ht(ne(e).height);
      }),
      (r[4] = Vt))
    : (Vt = r[4]);
  let Ht = s(Vt),
    [Ut, Wt] = (0, M.useState)(0),
    Gt;
  r[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Gt = (e) => {
        Wt(ne(e).height);
      }),
      (r[5] = Gt))
    : (Gt = r[5]);
  let Kt = s(Gt),
    P = f?.width ?? pt,
    qt = pt < 640,
    [Jt] = (0, M.useState)(Re),
    Yt = O ?? null,
    Xt;
  r[6] === Yt ? (Xt = r[7]) : ((Xt = { threadKey: Yt, minimized: !1 }), (r[6] = Yt), (r[7] = Xt));
  let Zt = Ne(Pe, Xt),
    Qt = O ?? null,
    $t;
  r[8] === Qt ? ($t = r[9]) : (($t = { threadKey: Qt, minimized: !0 }), (r[8] = Qt), (r[9] = $t));
  let en = Ne(Pe, $t),
    tn;
  r[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((tn = {}), (r[10] = tn)) : (tn = r[10]);
  let [nn, rn] = (0, M.useState)(tn),
    an = (O == null ? nn.minimized : null) ?? en ?? `bottom-right`,
    on = (O == null ? nn.expanded : null) ?? Zt ?? Jt,
    F = et(qt && !ee ? `bottom-center` : ee ? an : on, m),
    I = F.startsWith(`top`),
    sn = oe(Be),
    L = n(),
    cn = (0, M.useRef)(!1),
    R = Ce(0),
    z = Ce(0),
    ln = (0, M.useRef)(null),
    un = (0, M.useRef)(null),
    dn = (0, M.useRef)(null),
    fn = (0, M.useRef)(null),
    [pn, mn] = (0, M.useState)(`compact`),
    B = le ?? pn,
    hn;
  r[11] !== le || r[12] !== qe || r[13] !== ue
    ? ((hn = (e) => {
        (e !== `expanded` || qe) && (le ?? mn(e), ue?.(e));
      }),
      (r[11] = le),
      (r[12] = qe),
      (r[13] = ue),
      (r[14] = hn))
    : (hn = r[14]);
  let V = hn,
    [H, U] = (0, M.useState)(null),
    [gn, W] = (0, M.useState)(!1),
    [_n, vn] = (0, M.useState)(!1),
    [G, yn] = (0, M.useState)(!1),
    [bn, xn] = (0, M.useState)(!1),
    [Sn, Cn] = (0, M.useState)(!0),
    [K, wn] = (0, M.useState)(null),
    Tn = (0, M.useRef)(!1),
    [En, Dn] = (0, M.useState)(!1),
    [On, kn] = (0, M.useState)(0),
    [An, jn] = (0, M.useState)(0),
    Mn;
  r[15] === ot
    ? (Mn = r[16])
    : ((Mn = (e, t) => {
        kn(e.contentRect.height);
        let n = t.querySelector(`[data-above-composer-portal]`)?.getBoundingClientRect().height ?? 0;
        jn(Math.max(0, e.contentRect.height - De(n, ot)));
      }),
      (r[15] = ot),
      (r[16] = Mn));
  let Nn = s(Mn),
    [Pn, Fn] = (0, M.useState)(null),
    [In, Ln] = (0, M.useState)(O);
  In !== O && (Ln(O), rn({}), yn(!1), xn(!1), wn(null), U(null));
  let q = ee,
    J = q || K?.stage === `minimized`;
  H?.target === `minimized` && !J && U({ target: B });
  let Y = !Ie && (!qe || B === `compact`),
    Rn = qe && !Ie,
    zn = !E && !Y && !q && !Ie && !G && !En,
    Bn;
  r[17] !== A || r[18] !== V || r[19] !== U
    ? ((Bn = (e) => {
        un.current != null && !Tt(un.current, e.target, A) && (U(null), V(`compact`));
      }),
      (r[17] = A),
      (r[18] = V),
      (r[19] = U),
      (r[20] = Bn))
    : (Bn = r[20]);
  let Vn = (0, M.useEffectEvent)(Bn),
    Hn;
  r[21] !== Vn || r[22] !== zn
    ? ((Hn = () => {
        if (zn)
          return (
            document.addEventListener(`pointerdown`, Vn, !0),
            () => {
              document.removeEventListener(`pointerdown`, Vn, !0);
            }
          );
      }),
      (r[21] = Vn),
      (r[22] = zn),
      (r[23] = Hn))
    : (Hn = r[23]);
  let Un;
  (r[24] === zn ? (Un = r[25]) : ((Un = [zn]), (r[24] = zn), (r[25] = Un)), (0, M.useEffect)(Hn, Un));
  let Wn = nt?.type === `loading`,
    Gn;
  r[26] !== w || r[27] !== W || r[28] !== V || r[29] !== U
    ? ((Gn = () => {
        (un.current?.focus({ preventScroll: !0 }), W(!1), U(null), V(`expanded`), w(!1));
      }),
      (r[26] = w),
      (r[27] = W),
      (r[28] = V),
      (r[29] = U),
      (r[30] = Gn))
    : (Gn = r[30]);
  let Kn = Ae(Gn),
    qn;
  r[31] !== Kn || r[32] !== T
    ? ((qn = T?.({ onOpen: Kn }) ?? st), (r[31] = Kn), (r[32] = T), (r[33] = qn))
    : (qn = r[33]);
  let Jn = qn;
  Jn.type !== `ready` && gn && W(!1);
  let Yn = Jn.type === `ready` && (J ? q && gn && !G : Y),
    Xn = rt?.type === `loading` || (rt?.unread === !0 && !Yn),
    Zn = Wn || (nt?.unread === !0 && (q || !Yn)),
    Qn;
  r[34] !== Yn || r[35] !== E || r[36] !== q || r[37] !== W
    ? ((Qn = () => {
        if (E || !q || !Yn) return;
        let e = (e) => {
          e.key !== `Escape` ||
            e.defaultPrevented ||
            (e.preventDefault(),
            fn.current?.contains(document.activeElement) && dn.current?.focus({ preventScroll: !0 }),
            W(!1));
        };
        return (document.addEventListener(`keydown`, e), () => document.removeEventListener(`keydown`, e));
      }),
      (r[34] = Yn),
      (r[35] = E),
      (r[36] = q),
      (r[37] = W),
      (r[38] = Qn))
    : (Qn = r[38]);
  let $n;
  (r[39] !== Yn || r[40] !== E || r[41] !== q
    ? (($n = [Yn, E, q]), (r[39] = Yn), (r[40] = E), (r[41] = q), (r[42] = $n))
    : ($n = r[42]),
    (0, M.useEffect)(Qn, $n));
  let er = !q && !J && (!Y || _n || G || _t),
    tr = D && er && !q && v == null,
    nr;
  r[43] === k
    ? (nr = r[44])
    : ((nr = k.formatMessage({
        id: `quickChat.running`,
        defaultMessage: `Running`,
        description: `Status of a running task in the floating composer`,
      })),
      (r[43] = k),
      (r[44] = nr));
  let rr = nr,
    ir;
  r[45] === k
    ? (ir = r[46])
    : ((ir = k.formatMessage({
        id: `quickChat.unreadResponse`,
        defaultMessage: `Unread response`,
        description: `Status of a floating task with an unread response`,
      })),
      (r[45] = k),
      (r[46] = ir));
  let ar = ir,
    or = Wn ? rr : ar,
    sr = F.endsWith(`left`),
    cr = F === `bottom-center`,
    lr = sr ? `left` : `right`,
    ur = I && !J ? bt : 0,
    X = (f == null ? 46 : 0) + (!I && !J ? bt : 0),
    dr = Pn ?? sn ?? Ke,
    fr = Yn && !q ? Ut : 0,
    Z = (f?.height ?? ft) - mt - (I ? fr + ur : 0),
    pr = Math.max(0, Z - 32 - X - (I ? 0 : fr)),
    mr = f == null ? P / 2 : Math.max(0, P - 20),
    hr = (On || 46) + (D && er ? 46 : 0) + 6,
    gr = Math.min(Y ? hr : Math.max(Mt, hr), pr),
    _r = qt ? mr : Math.min(Nt + 12, mr),
    Q = Et(Y ? hr : dr.height, gr, pr),
    vr = Ce(Q),
    yr = (0, M.useRef)(!1),
    br = On > 0,
    xr = E || j || q || En || H != null ? 0 : 300 / 1e3,
    Sr,
    Cr;
  (r[47] !== vr || r[48] !== Q || r[49] !== br || r[50] !== Y || r[51] !== xr
    ? ((Sr = () => {
        let e = !yr.current && Y;
        if ((br && (yr.current = !0), e || xr === 0)) {
          vr.jump(Q);
          return;
        }
        let t = be(vr, Q, { duration: xr, ease: pe });
        return () => t.stop();
      }),
      (Cr = [vr, Q, br, Y, xr]),
      (r[47] = vr),
      (r[48] = Q),
      (r[49] = br),
      (r[50] = Y),
      (r[51] = xr),
      (r[52] = Sr),
      (r[53] = Cr))
    : ((Sr = r[52]), (Cr = r[53])),
    (0, M.useLayoutEffect)(Sr, Cr));
  let wr = Et(dr.width + 12, _r, mr),
    Tr = Qe(F, { height: Q, width: wr }, Z, P, 12, X),
    Er = { height: Math.min(36, pr), width: Math.min(36, mr) },
    Dr = et(q ? F : (K?.dockPosition ?? an), m),
    Or = Qe(Dr, Er, Z, P, 0, X),
    kr = q ? Er : { height: Q, width: wr },
    Ar = q ? Or : Tr,
    jr = q ? 16 : 10,
    Mr = Qe(Dr, { height: Q, width: wr }, Z, P, 12, X),
    Nr = Or.x - Mr.x,
    Pr = Or.y - Mr.y,
    Fr = wr - Nr - Er.width,
    Ir = Q - Pr - Er.height,
    Lr;
  r[54] !== Nr || r[55] !== Pr || r[56] !== Fr || r[57] !== Ir
    ? ((Lr = { top: Pr, right: Fr, bottom: Ir, left: Nr }),
      (r[54] = Nr),
      (r[55] = Pr),
      (r[56] = Fr),
      (r[57] = Ir),
      (r[58] = Lr))
    : (Lr = r[58]);
  let Rr = Lr,
    zr = `inset(${Rr.top}px ${Rr.right}px ${Rr.bottom}px ${Rr.left}px round var(--floating-panel-radius))`,
    Br = I ? { top: Pr + Er.height } : { bottom: Q - Pr },
    Vr = (0, M.useRef)({ dockPosition: F, dockThreadKey: O, isMinimized: q }),
    Hr;
  r[59] === ae
    ? (Hr = r[60])
    : ((Hr = () => {
        ae?.(null);
      }),
      (r[59] = ae),
      (r[60] = Hr));
  let Ur = (0, M.useEffectEvent)(Hr),
    Wr = (0, M.useEffectEvent)((e) => {
      let t = Qe(e, { height: Q, width: wr }, Z, P, 12, X);
      (R.stop(), z.stop(), R.jump(R.get() + t.x - Tr.x), z.jump(z.get() + t.y - Tr.y));
      let n = j ? { duration: 0 } : Ft;
      (be(R, 0, n), be(z, 0, n));
    });
  (0, M.useLayoutEffect)(() => {
    let e = Vr.current;
    if (((Vr.current = { dockPosition: F, dockThreadKey: O, isMinimized: q }), e.dockThreadKey !== O)) {
      ((cn.current = !0), (Tn.current = !0), L.cancel(), Ur(), R.jump(0), z.jump(0));
      return;
    }
    if (E) {
      (R.jump(0), z.jump(0));
      return;
    }
    e.isMinimized !== q && Wr(e.dockPosition);
  }, [F, O, L, R, z, E, q]);
  let Gr, Kr;
  (r[61] !== R || r[62] !== z
    ? ((Gr = () => () => {
        (R.stop(), z.stop());
      }),
      (Kr = [R, z]),
      (r[61] = R),
      (r[62] = z),
      (r[63] = Gr),
      (r[64] = Kr))
    : ((Gr = r[63]), (Kr = r[64])),
    (0, M.useLayoutEffect)(Gr, Kr));
  let qr = (e) => {
      let t = { ...kr, left: Ar.x + R.get(), top: Ar.y + z.get() },
        n = f == null ? null : un.current?.parentElement?.getBoundingClientRect(),
        r = { x: e.point.x - De(n?.left ?? 0, ot), y: e.point.y - De(n?.top ?? 0, ot) },
        i = Ze({ ...t, left: t.width >= P / 2 - jr * 2 ? r.x - t.width / 2 : t.left }, Z, P, q),
        a = m == null ? i : et(i, m),
        o = Qe(a, kr, Z, P, 12, X),
        s = { x: Math.min(r.x, P - r.x), y: Math.min(r.y - X, Z - r.y) },
        c = !q && a !== `bottom-center` && Math.abs(t.left - o.x) <= 16 && Math.abs(t.top - o.y) <= 16,
        l = s.x <= 16 + Er.width && s.y <= 16 + Er.height;
      return {
        dockPosition: a,
        requestedDockPosition: i,
        isNearDock: c,
        isPointerNearMinimizeTarget: l,
        shouldMinimize: c && l,
      };
    },
    Jr;
  r[65] !== O || r[66] !== x || r[67] !== Ge
    ? ((Jr = (e, t) => {
        O == null
          ? rn((n) => ({
              ...n,
              [t ? `minimized` : `expanded`]: t && e === `bottom-center` ? `bottom-right` : e,
            }))
          : Ve(Ge, { threadKey: O, minimized: t }, e, x);
      }),
      (r[65] = O),
      (r[66] = x),
      (r[67] = Ge),
      (r[68] = Jr))
    : (Jr = r[68]);
  let Yr = Jr,
    Xr = (e, t, n) => {
      let r = n === void 0 ? kr : n,
        i = Qe(F, r, Z, P, q ? 0 : 12, X),
        a = { x: i.x + R.get(), y: i.y + z.get() },
        o = Qe(et(e, m), r, Z, P, q ? 0 : 12, X);
      (R.stop(),
        z.stop(),
        R.jump(a.x - o.x),
        z.jump(a.y - o.y),
        t &&
          (0, jt.flushSync)(() => {
            Yr(e, q);
          }));
      let s = j ? { duration: 0 } : Ft;
      (xn(!0),
        Promise.all([be(R, 0, s), be(z, 0, s)]).then(() => {
          xn(R.get() !== 0 || z.get() !== 0);
        }));
    },
    Zr = (0, M.useEffectEvent)(() => {
      ((cn.current = !0), L.cancel(), ae?.(null), Xr(F, !1), wn(null), U(null), yn(!1));
    }),
    Qr;
  r[69] !== Zr || r[70] !== L || r[71] !== G
    ? ((Qr = () => {
        if (!G) return;
        let e = (e) => {
            e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), Zr());
          },
          t = () => Zr();
        return (
          window.addEventListener(`keydown`, e, !0),
          window.addEventListener(`blur`, t),
          window.addEventListener(`pointercancel`, t, !0),
          () => {
            ((cn.current = !0),
              L.cancel(),
              window.removeEventListener(`keydown`, e, !0),
              window.removeEventListener(`blur`, t),
              window.removeEventListener(`pointercancel`, t, !0));
          }
        );
      }),
      (r[69] = Zr),
      (r[70] = L),
      (r[71] = G),
      (r[72] = Qr))
    : (Qr = r[72]);
  let $r;
  (r[73] !== L || r[74] !== G ? (($r = [L, G]), (r[73] = L), (r[74] = G), (r[75] = $r)) : ($r = r[75]),
    (0, M.useLayoutEffect)(Qr, $r));
  let ei = (e, t) => {
      let n = tt(F, e, { height: Q, width: wr }, R.get(), t.width, Z, P, 12),
        r = Tr.y + z.get(),
        i = Qe(F, t, Z, P, 12, X),
        a = Et(r + (I ? 0 : Q - t.height), X + 10, Z - t.height - 10);
      (R.stop(),
        z.stop(),
        (0, jt.flushSync)(() => {
          Fn({ height: Y ? dr.height : t.height, width: t.width - 12 });
        }),
        R.jump(n),
        z.jump(a - i.y));
    },
    ti = (e) => {
      (ze(Ge, { height: Y ? dr.height : e.height, width: e.width - 12 }, { dockPosition: F }), Xr(F, !1, e));
    },
    ni;
  r[76] !== G || r[77] !== w || r[78] !== W || r[79] !== wn || r[80] !== U
    ? ((ni = () => {
        (W(!1), Cn(!G), wn(null), U({ target: `minimized` }), w(!0));
      }),
      (r[76] = G),
      (r[77] = w),
      (r[78] = W),
      (r[79] = wn),
      (r[80] = U),
      (r[81] = ni))
    : (ni = r[81]);
  let $ = ni,
    ri,
    ii,
    ai,
    oi,
    si,
    ci;
  if (
    r[82] !== Ie ||
    r[83] !== Y ||
    r[84] !== E ||
    r[85] !== q ||
    r[86] !== C ||
    r[87] !== w ||
    r[88] !== B ||
    r[89] !== W ||
    r[90] !== V ||
    r[91] !== U
  ) {
    si = () => {
      ((0, jt.flushSync)(() => {
        (W(!1), U({ target: B }), w(!1));
      }),
        ai());
    };
    let e;
    (r[98] !== Y || r[99] !== V || r[100] !== U
      ? ((e = () => {
          (U(null), V(Y ? `expanded` : `compact`));
        }),
        (r[98] = Y),
        (r[99] = V),
        (r[100] = U),
        (r[101] = e))
      : (e = r[101]),
      (ci = e),
      (ri = !E && !q && (C != null || (!Y && !Ie))));
    let t;
    (r[102] !== C || r[103] !== V || r[104] !== U
      ? ((t = () => {
          C == null ? (U(null), V(`compact`)) : C();
        }),
        (r[102] = C),
        (r[103] = V),
        (r[104] = U),
        (r[105] = t))
      : (t = r[105]),
      (ii = t));
    let n;
    (r[106] !== ri || r[107] !== ii
      ? ((n = (e) => {
          !ri ||
            e.key !== `Escape` ||
            e.defaultPrevented ||
            e.repeat ||
            e.nativeEvent.isComposing ||
            (e.preventDefault(), e.stopPropagation(), ii());
        }),
        (r[106] = ri),
        (r[107] = ii),
        (r[108] = n))
      : (n = r[108]),
      (oi = n),
      (ai = () => {
        ln.current?.querySelector(`[contenteditable='true']`)?.focus({ preventScroll: !0 });
      }),
      (r[82] = Ie),
      (r[83] = Y),
      (r[84] = E),
      (r[85] = q),
      (r[86] = C),
      (r[87] = w),
      (r[88] = B),
      (r[89] = W),
      (r[90] = V),
      (r[91] = U),
      (r[92] = ri),
      (r[93] = ii),
      (r[94] = ai),
      (r[95] = oi),
      (r[96] = si),
      (r[97] = ci));
  } else ((ri = r[92]), (ii = r[93]), (ai = r[94]), (oi = r[95]), (si = r[96]), (ci = r[97]));
  let li = !E && !0,
    ui;
  r[109] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ui = () => {
        if (un.current == null || un.current.closest(`[hidden], [inert], [aria-hidden=true]`) != null)
          return !1;
        let e = ln.current?.querySelector(`[contenteditable='true']`);
        if (e == null) return !1;
        let t = e.closest(`[hidden], [inert], [aria-hidden=true]`);
        return t == null || !ln.current?.contains(t) || t === ln.current;
      }),
      (r[109] = ui))
    : (ui = r[109]);
  let di;
  (r[110] === li ? (di = r[111]) : ((di = { enabled: li, isActive: ui }), (r[110] = li), (r[111] = di)),
    Je(`focusMainChat`, q ? si : ai, di));
  let fi = k.formatMessage(
      Y
        ? {
            id: `quickChat.expandFloatingChat`,
            defaultMessage: `Expand floating chat`,
            description: `Accessible label for expanding a compact floating chat`,
          }
        : {
            id: `quickChat.showCompactFloatingChat`,
            defaultMessage: `Show compact floating chat`,
            description: `Accessible label for collapsing a floating chat`,
          },
    ),
    pi = Rn ? { label: fi, onToggle: ci } : void 0,
    mi;
  r[112] === k
    ? (mi = r[113])
    : ((mi = k.formatMessage({
        id: `quickChat.resizeWidth`,
        defaultMessage: `Resize chat width`,
        description: `Accessible label for resizing the chat width`,
      })),
      (r[112] = k),
      (r[113] = mi));
  let hi = mi,
    gi;
  r[114] === k
    ? (gi = r[115])
    : ((gi = k.formatMessage({
        id: `quickChat.resizeHeight`,
        defaultMessage: `Resize chat height`,
        description: `Accessible label for resizing the chat height`,
      })),
      (r[114] = k),
      (r[115] = gi));
  let _i = gi,
    vi;
  r[116] === U
    ? (vi = r[117])
    : ((vi = () => {
        U(null);
      }),
      (r[116] = U),
      (r[117] = vi));
  let yi = {
      isCompact: Y,
      isChromeRevealed: er,
      isDockedTop: I,
      isHidden: E,
      isMinimized: q,
      isMoving: G || En || bn,
      composerContentHeight: An,
      dockedReservePx: On > An ? Q + 10 : 0,
      shouldReduceMotion: j,
      onSubmitStart: vi,
    },
    bi;
  r[118] !== E || r[119] !== y
    ? ((bi = function (e) {
        !E &&
          y != null &&
          (e.button === 2 || (e.button === 0 && e.ctrlKey)) &&
          e.target instanceof Element &&
          (un.current?.contains(e.target) ||
            e.target.closest(`[data-composer-overlay-floating-ui]`) != null) &&
          e.preventDefault();
      }),
      (r[118] = E),
      (r[119] = y),
      (r[120] = bi))
    : (bi = r[120]);
  let xi = bi,
    Si;
  r[121] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Si = function (e) {
        e.target instanceof Element &&
          (!un.current?.contains(e.target) ||
            e.target.closest(`[data-composer-overlay-floating-ui]`) != null) &&
          e.stopPropagation();
      }),
      (r[121] = Si))
    : (Si = r[121]);
  let Ci = Si,
    wi = d(yi),
    Ti = ri ? ii : null,
    Ei;
  r[122] === Nn
    ? (Ei = r[123])
    : ((Ei = (e) => {
        ((ln.current = e), Nn(e));
      }),
      (r[122] = Nn),
      (r[123] = Ei));
  let Di;
  r[124] !== Y || r[125] !== q || r[126] !== Ue
    ? ((Di =
        Ue && !Y && !q
          ? (0, N.jsx)(`div`, { "aria-hidden": !0, className: `border-t border-default` })
          : null),
      (r[124] = Y),
      (r[125] = q),
      (r[126] = Ue),
      (r[127] = Di))
    : (Di = r[127]);
  let Oi;
  r[128] === St
    ? (Oi = r[129])
    : ((Oi = { target: St, homeBannerPlacement: `inline` }), (r[128] = St), (r[129] = Oi));
  let ki = (0, N.jsxs)(`div`, {
      ref: Ei,
      className: ge(
        c.floatingComposerInset,
        `mt-auto shrink-0`,
        Y && I && `[--composer-overlay-placement:bottom]`,
      ),
      onPointerDownCapture: xi,
      onContextMenu: Ci,
      children: [
        Di,
        (0, N.jsx)(Ye, {
          value: {
            ...$e,
            hasComposerSurface: Ue,
            isQuickChatFloatingSurface: !0,
            floatingChatSurfaceRef: un,
            quickChatComposerPresentation: yi,
            transcriptTarget: Lt,
          },
          children: (0, N.jsx)(Xe, { value: Ti, children: (0, N.jsx)(me, { value: Oi, children: wi }) }),
        }),
      ],
    }),
    Ai = v
      ? v({
          animateChrome: !j && !q && H == null,
          isCompact: Y,
          isChromeRevealed: er,
          menu: y?.({ isCompact: Y, isDragging: G, open: _t, onMinimize: $, onOpenChange: yt }),
          presentationToggle: pi,
          onMinimize: $,
        })
      : (0, N.jsxs)(lt, {
          animateChrome: !j && !q && H == null,
          isChromeRevealed: er,
          isCompact: Y,
          presentationToggle: pi,
          children: [
            (0, N.jsxs)(`div`, {
              className: `flex min-w-0 flex-1 items-center gap-1`,
              children: [
                (0, N.jsx)(ut, { isCompact: Y, onMinimize: $ }),
                Xn && rt != null
                  ? (0, N.jsx)(`div`, {
                      className: `flex items-center justify-center`,
                      role: `status`,
                      "aria-label": rt.type === `loading` ? rr : ar,
                      children: (0, N.jsx)(We, { statusState: rt }),
                    })
                  : null,
                (0, N.jsx)(`h2`, {
                  id: at,
                  className: `max-w-80 min-w-0 truncate text-base font-medium text-secondary`,
                  children: fe ?? de,
                }),
              ],
            }),
            y?.({ isCompact: Y, isDragging: G, open: _t, onMinimize: $, onOpenChange: yt }),
          ],
        }),
    ji;
  r[130] !== xi || r[131] !== Ai
    ? ((ji = (0, N.jsx)(`div`, {
        className: `contents`,
        onPointerDownCapture: xi,
        onContextMenu: Ci,
        children: Ai,
      })),
      (r[130] = xi),
      (r[131] = Ai),
      (r[132] = ji))
    : (ji = r[132]);
  let Mi = ji,
    Ni = !q,
    Pi = q ? `quick-chat` : void 0,
    Fi = +!!J,
    Ii;
  r[133] === Fi ? (Ii = r[134]) : ((Ii = { opacity: Fi }), (r[133] = Fi), (r[134] = Ii));
  let Li = !q || void 0,
    Ri;
  r[135] === j
    ? (Ri = r[136])
    : ((Ri = j ? { duration: 0 } : { duration: 300 / 1e3, ease: pe }), (r[135] = j), (r[136] = Ri));
  let zi = q ? `minimized` : `preview`,
    Bi = q && `pointer-events-auto`,
    Vi;
  r[137] === Bi
    ? (Vi = r[138])
    : ((Vi = ge(`absolute inset-0 m-auto touch-none`, Bi)), (r[137] = Bi), (r[138] = Vi));
  let Hi = Zn ? or : void 0,
    Ui;
  r[139] !== k || r[140] !== xe || r[141] !== de
    ? ((Ui =
        xe ??
        k.formatMessage(
          {
            id: `quickChat.restoreFloatingChat`,
            defaultMessage: `Restore floating chat: {title}`,
            description: `Accessible label for restoring a minimized floating chat`,
          },
          { title: de },
        )),
      (r[139] = k),
      (r[140] = xe),
      (r[141] = de),
      (r[142] = Ui))
    : (Ui = r[142]);
  let Wi = !E && q && Sn,
    Gi;
  r[143] === si
    ? (Gi = r[144])
    : ((Gi = (e) => {
        (e.detail === 0 || !Tn.current) && si();
      }),
      (r[143] = si),
      (r[144] = Gi));
  let Ki;
  r[145] === W
    ? (Ki = r[146])
    : ((Ki = (e) => {
        e.pointerType !== `touch` && W(!0);
      }),
      (r[145] = W),
      (r[146] = Ki));
  let qi;
  r[147] !== Jn.type || r[148] !== W
    ? ((qi = (e) => {
        Jn.type === `ready` &&
          (e.key === `ArrowUp` || e.key === `ArrowDown`) &&
          (e.preventDefault(),
          (0, jt.flushSync)(() => W(!0)),
          fn.current?.querySelector(`button`)?.focus({ preventScroll: !0 }));
      }),
      (r[147] = Jn.type),
      (r[148] = W),
      (r[149] = qi))
    : (qi = r[149]);
  let Ji;
  r[150] !== L || r[151] !== qt
    ? ((Ji = (e) => {
        qt ||
          e.button !== 0 ||
          ((Tn.current = !1), e.currentTarget.setPointerCapture(e.pointerId), L.start(e));
      }),
      (r[150] = L),
      (r[151] = qt),
      (r[152] = Ji))
    : (Ji = r[152]);
  let Yi;
  r[153] !== Zn || r[154] !== Wn || r[155] !== he || r[156] !== nt
    ? ((Yi =
        Wn && nt != null && he == null
          ? (0, N.jsx)(We, { statusState: nt })
          : (0, N.jsx)(Le, { badgeEnabled: Zn, children: he ?? (0, N.jsx)(ye, {}) })),
      (r[153] = Zn),
      (r[154] = Wn),
      (r[155] = he),
      (r[156] = nt),
      (r[157] = Yi))
    : (Yi = r[157]);
  let Xi;
  r[158] !== zi ||
  r[159] !== Vi ||
  r[160] !== Hi ||
  r[161] !== Ui ||
  r[162] !== Wi ||
  r[163] !== Gi ||
  r[164] !== Ki ||
  r[165] !== qi ||
  r[166] !== Ji ||
  r[167] !== Yi
    ? ((Xi = (0, N.jsx)(
        t,
        {
          ref: dn,
          className: Vi,
          "aria-description": Hi,
          "aria-label": Ui,
          autoFocus: Wi,
          color: `ghostSecondary`,
          size: `composer`,
          uniform: !0,
          onClick: Gi,
          onPointerEnter: Ki,
          onKeyDown: qi,
          onPointerDown: Ji,
          children: Yi,
        },
        zi,
      )),
      (r[158] = zi),
      (r[159] = Vi),
      (r[160] = Hi),
      (r[161] = Ui),
      (r[162] = Wi),
      (r[163] = Gi),
      (r[164] = Ki),
      (r[165] = qi),
      (r[166] = Ji),
      (r[167] = Yi),
      (r[168] = Xi))
    : (Xi = r[168]);
  let Zi;
  r[169] !== Ni || r[170] !== Pi || r[171] !== Ii || r[172] !== Li || r[173] !== Ri || r[174] !== Xi
    ? ((Zi = (0, N.jsx)(ce.div, {
        className: `pointer-events-none absolute inset-0`,
        "aria-hidden": Ni,
        "data-pip-obstacle": Pi,
        animate: Ii,
        initial: !1,
        inert: Li,
        transition: Ri,
        children: Xi,
      })),
      (r[169] = Ni),
      (r[170] = Pi),
      (r[171] = Ii),
      (r[172] = Li),
      (r[173] = Ri),
      (r[174] = Xi),
      (r[175] = Zi))
    : (Zi = r[175]);
  let Qi = Zi,
    $i = vt,
    ea = H != null || !q,
    ta;
  r[176] !== Q || r[177] !== wr
    ? ((ta = { height: Q, width: wr }), (r[176] = Q), (r[177] = wr), (r[178] = ta))
    : (ta = r[178]);
  let na = D && er,
    ra;
  r[179] !== pr || r[180] !== mr
    ? ((ra = { height: pr, width: mr }), (r[179] = pr), (r[180] = mr), (r[181] = ra))
    : (ra = r[181]);
  let ia;
  r[182] !== Qi || r[183] !== _e
    ? ((ia =
        _e == null
          ? Qi
          : (0, N.jsx)(ke, {
              disableNative: !0,
              items: _e,
              children: (0, N.jsx)(`div`, { className: `contents`, children: Qi }),
            })),
      (r[182] = Qi),
      (r[183] = _e),
      (r[184] = ia))
    : (ia = r[184]);
  let aa;
  r[185] !== gr || r[186] !== _r
    ? ((aa = { height: gr, width: _r }), (r[185] = gr), (r[186] = _r), (r[187] = aa))
    : (aa = r[187]);
  let oa = !qt,
    sa = J ? `panel` : u,
    ca = tr ? void 0 : de,
    la = tr ? at : void 0,
    ua = f != null && void 0,
    da;
  r[188] !== Fe || r[189] !== br || r[190] !== j
    ? ((da = Fe ? { opacity: +!!br, translateY: !br && !j ? 8 : 0 } : {}),
      (r[188] = Fe),
      (r[189] = br),
      (r[190] = j),
      (r[191] = da))
    : (da = r[191]);
  let fa = K?.stage === `approaching` ? 0.95 : 1,
    pa;
  r[192] !== wr || r[193] !== da || r[194] !== fa
    ? ((pa = { ...da, width: wr, scale: fa }), (r[192] = wr), (r[193] = da), (r[194] = fa), (r[195] = pa))
    : (pa = r[195]);
  let ma = Y || void 0,
    ha = q ? void 0 : `quick-chat`,
    ga = !qt,
    _a =
      f == null
        ? void 0
        : {
            left: jr - Ar.x,
            right: Math.max(jr, P - kr.width - jr) - Ar.x,
            top: X + jr - Ar.y,
            bottom: Math.max(jr, Z - kr.height - jr) - Ar.y,
          },
    va = f == null ? void 0 : 0,
    ya;
  r[196] !== Fe || r[197] !== j
    ? ((ya = Fe && !j ? { opacity: 0, translateY: 8 } : !1), (r[196] = Fe), (r[197] = j), (r[198] = ya))
    : (ya = r[198]);
  let ba = f == null ? `dialog` : `region`,
    xa = I ? X + 10 : `auto`,
    Sa = I ? `auto` : 10 + mt,
    Ca = cr ? `50%` : `auto`,
    wa;
  r[199] !== lr || r[200] !== cr
    ? ((wa = !cr && { [lr]: 10 }), (r[199] = lr), (r[200] = cr), (r[201] = wa))
    : (wa = r[201]);
  let Ta = cr ? `-50% 0` : void 0,
    Ea = Dr === `bottom-center` ? 0.5 : Number(Dr.endsWith(`right`)),
    Da = +!Dr.startsWith(`top`),
    Oa;
  r[202] !== vr ||
  r[203] !== R ||
  r[204] !== z ||
  r[205] !== xa ||
  r[206] !== Sa ||
  r[207] !== Ca ||
  r[208] !== wa ||
  r[209] !== Ta ||
  r[210] !== Ea ||
  r[211] !== Da
    ? ((Oa = {
        height: vr,
        top: xa,
        bottom: Sa,
        left: Ca,
        right: `auto`,
        ...wa,
        translate: Ta,
        x: R,
        y: z,
        originX: Ea,
        originY: Da,
      }),
      (r[202] = vr),
      (r[203] = R),
      (r[204] = z),
      (r[205] = xa),
      (r[206] = Sa),
      (r[207] = Ca),
      (r[208] = wa),
      (r[209] = Ta),
      (r[210] = Ea),
      (r[211] = Da),
      (r[212] = Oa))
    : (Oa = r[212]);
  let ka = j ? 0 : 300 / 1e3,
    Aa;
  r[213] === ka ? (Aa = r[214]) : ((Aa = { duration: ka, ease: pe }), (r[213] = ka), (r[214] = Aa));
  let ja;
  r[215] !== xr || r[216] !== Aa
    ? ((ja = { duration: xr, ease: pe, scale: Aa }), (r[215] = xr), (r[216] = Aa), (r[217] = ja))
    : (ja = r[217]);
  let Ma;
  r[218] !== E ||
  r[219] !== A ||
  r[220] !== vn ||
  r[221] !== W ||
  r[222] !== V ||
  r[223] !== U ||
  r[224] !== zn
    ? ((Ma = (e) => {
        if (!(E || Tt(e.currentTarget, e.relatedTarget, A))) {
          if (e.relatedTarget == null) {
            let t = e.currentTarget;
            queueMicrotask(() => {
              (!t.ownerDocument.hasFocus() || !Tt(t, t.ownerDocument.activeElement, A)) && (vn(!1), W(!1));
            });
            return;
          }
          (vn(!1), W(!1), zn && e.target.closest(`[inert]`) == null && (U(null), V(`compact`)));
        }
      }),
      (r[218] = E),
      (r[219] = A),
      (r[220] = vn),
      (r[221] = W),
      (r[222] = V),
      (r[223] = U),
      (r[224] = zn),
      (r[225] = Ma))
    : (Ma = r[225]);
  let Na;
  r[226] !== Rn || r[227] !== Y || r[228] !== q || r[229] !== D || r[230] !== ci
    ? ((Na = (e) => {
        D &&
          !q &&
          Rn &&
          !Tn.current &&
          !e.defaultPrevented &&
          e.target instanceof Element &&
          e.currentTarget.contains(e.target) &&
          !e.target.closest(`button, a, select, [role='button'], [role='menuitem']`) &&
          e.target.closest(`header[data-quick-chat-drag-handle]`) &&
          (Y &&
            !e.currentTarget.contains(document.activeElement) &&
            e.currentTarget.focus({ preventScroll: !0 }),
          ci());
      }),
      (r[226] = Rn),
      (r[227] = Y),
      (r[228] = q),
      (r[229] = D),
      (r[230] = ci),
      (r[231] = Na))
    : (Na = r[231]);
  let Pa;
  r[232] === E
    ? (Pa = r[233])
    : ((Pa = (e) => {
        !E && Tn.current && e.detail > 0 && (e.preventDefault(), e.stopPropagation());
      }),
      (r[232] = E),
      (r[233] = Pa));
  let Fa;
  r[234] !== qr || r[235] !== K || r[236] !== re || r[237] !== B || r[238] !== wn || r[239] !== U
    ? ((Fa = (e, t) => {
        let n = qr(t);
        if (
          !(re?.(n.isPointerNearMinimizeTarget ? null : e) ?? !1) &&
          n.isNearDock &&
          n.dockPosition != null
        ) {
          let e = n.shouldMinimize ? `minimized` : `approaching`;
          (K?.stage !== e || K.dockPosition !== n.dockPosition) &&
            (wn({ dockPosition: n.dockPosition, stage: e }),
            (n.shouldMinimize || K?.stage === `minimized`) &&
              U({ target: n.shouldMinimize ? `minimized` : B }));
        } else
          K != null &&
            K.stage !== `restored` &&
            (wn({ ...K, stage: `restored` }), K.stage === `minimized` && U({ target: B }));
      }),
      (r[234] = qr),
      (r[235] = K),
      (r[236] = re),
      (r[237] = B),
      (r[238] = wn),
      (r[239] = U),
      (r[240] = Fa))
    : (Fa = r[240]);
  let Ia;
  r[241] !== R ||
  r[242] !== z ||
  r[243] !== qr ||
  r[244] !== $ ||
  r[245] !== K ||
  r[246] !== ae ||
  r[247] !== B ||
  r[248] !== Yr ||
  r[249] !== yn ||
  r[250] !== wn ||
  r[251] !== U ||
  r[252] !== Xr
    ? ((Ia = (e, t) => {
        if (cn.current) return;
        let n = qr(t);
        if (ae?.(n.isPointerNearMinimizeTarget ? null : e)) {
          (R.jump(0), z.jump(0), wn(null), U(null), yn(!1));
          return;
        }
        if (n.shouldMinimize) {
          let e = n.requestedDockPosition;
          (0, jt.flushSync)(() => {
            (Yr(e, !0), $());
          });
        } else
          (Xr(n.requestedDockPosition, !0),
            K != null &&
              K.stage !== `restored` &&
              (wn({ ...K, stage: `restored` }), K.stage === `minimized` && U({ target: B })));
        yn(!1);
      }),
      (r[241] = R),
      (r[242] = z),
      (r[243] = qr),
      (r[244] = $),
      (r[245] = K),
      (r[246] = ae),
      (r[247] = B),
      (r[248] = Yr),
      (r[249] = yn),
      (r[250] = wn),
      (r[251] = U),
      (r[252] = Xr),
      (r[253] = Ia))
    : (Ia = r[253]);
  let La;
  r[254] !== R || r[255] !== z || r[256] !== yn || r[257] !== W
    ? ((La = () => {
        (W(!1), (cn.current = !1), (Tn.current = !0), yn(!0), R.stop(), z.stop());
      }),
      (r[254] = R),
      (r[255] = z),
      (r[256] = yn),
      (r[257] = W),
      (r[258] = La))
    : (La = r[258]);
  let Ra;
  r[259] === vn
    ? (Ra = r[260])
    : ((Ra = (e) => {
        e.currentTarget.contains(e.target) && e.target.closest(`[data-composer-input]`) != null && vn(!0);
      }),
      (r[259] = vn),
      (r[260] = Ra));
  let za;
  r[261] !== L || r[262] !== E
    ? ((za = (e) => {
        !E && e.key === `Escape` && ((Tn.current = !0), L.cancel());
      }),
      (r[261] = L),
      (r[262] = E),
      (r[263] = za))
    : (za = r[263]);
  let Ba;
  r[264] !== L || r[265] !== E || r[266] !== qt
    ? ((Ba = (e) => {
        if (E || ((Tn.current = !1), qt || e.button !== 0 || e.ctrlKey || !(e.target instanceof Element)))
          return;
        let t = e.target.closest(`[data-quick-chat-drag-handle]`),
          n = e.target.closest(
            `button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]`,
          );
        t == null ||
          (n != null && n !== t) ||
          (e.preventDefault(), t.setPointerCapture(e.pointerId), L.start(e));
      }),
      (r[264] = L),
      (r[265] = E),
      (r[266] = qt),
      (r[267] = Ba))
    : (Ba = r[267]);
  let Va;
  r[268] === W
    ? (Va = r[269])
    : ((Va = () => {
        fn.current?.contains(document.activeElement) || W(!1);
      }),
      (r[268] = W),
      (r[269] = Va));
  let Ha;
  r[270] !== L ||
  r[271] !== oi ||
  r[272] !== a ||
  r[273] !== Oa ||
  r[274] !== ja ||
  r[275] !== Ma ||
  r[276] !== Na ||
  r[277] !== Pa ||
  r[278] !== Fa ||
  r[279] !== Ia ||
  r[280] !== La ||
  r[281] !== Ra ||
  r[282] !== za ||
  r[283] !== Ba ||
  r[284] !== Va ||
  r[285] !== ca ||
  r[286] !== la ||
  r[287] !== ua ||
  r[288] !== pa ||
  r[289] !== ma ||
  r[290] !== ha ||
  r[291] !== ga ||
  r[292] !== _a ||
  r[293] !== va ||
  r[294] !== ya ||
  r[295] !== ba
    ? ((Ha = {
        ref: a,
        "aria-label": ca,
        "aria-labelledby": la,
        "aria-modal": ua,
        animate: pa,
        "data-quick-chat-drag-handle": ma,
        "data-pip-obstacle": ha,
        "data-state": `open`,
        drag: ga,
        dragConstraints: _a,
        dragElastic: va,
        dragControls: L,
        dragListener: !1,
        dragMomentum: !1,
        initial: ya,
        role: ba,
        tabIndex: -1,
        style: Oa,
        transition: ja,
        onBlurCapture: Ma,
        onClick: Na,
        onClickCapture: Pa,
        onDrag: Fa,
        onDragEnd: Ia,
        onDragStart: La,
        onFocusCapture: Ra,
        onKeyDown: oi,
        onKeyDownCapture: za,
        onPointerDownCapture: Ba,
        onPointerLeave: Va,
      }),
      (r[270] = L),
      (r[271] = oi),
      (r[272] = a),
      (r[273] = Oa),
      (r[274] = ja),
      (r[275] = Ma),
      (r[276] = Na),
      (r[277] = Pa),
      (r[278] = Fa),
      (r[279] = Ia),
      (r[280] = La),
      (r[281] = Ra),
      (r[282] = za),
      (r[283] = Ba),
      (r[284] = Va),
      (r[285] = ca),
      (r[286] = la),
      (r[287] = ua),
      (r[288] = pa),
      (r[289] = ma),
      (r[290] = ha),
      (r[291] = ga),
      (r[292] = _a),
      (r[293] = va),
      (r[294] = ya),
      (r[295] = ba),
      (r[296] = Ha))
    : (Ha = r[296]);
  let Ua = f == null ? `floating` : `content`,
    Wa = I ? `bottom` : `top`,
    Ga;
  r[297] !== R || r[298] !== z || r[299] !== Dn || r[300] !== U
    ? ((Ga = (e) => {
        (Dn(e), e && (U(null), R.stop(), z.stop()));
      }),
      (r[297] = R),
      (r[298] = z),
      (r[299] = Dn),
      (r[300] = U),
      (r[301] = Ga))
    : (Ga = r[301]);
  let Ka = Yn
      ? (0, N.jsx)(`div`, {
          ref: Se(fn, Kt, h),
          className: ge(
            `pointer-events-auto absolute inset-x-(--floating-panel-inset)`,
            !q && (I ? `top-full` : `bottom-full`),
            I ? `pt-3` : `pb-3`,
          ),
          "data-pip-obstacle": `quick-chat`,
          onClickCapture: () => {
            ((q ? dn.current : un.current)?.focus({ preventScroll: !0 }), vn(!1));
          },
          style: q ? Br : void 0,
          children: (0, N.jsx)(it, {
            items: Jn.value,
            availableHeight: Math.max(0, (f?.height ?? ft) - X - mt - (q ? Er.height : hr) - 32 - 12),
            isDockedTop: I,
            shouldReduceMotion: j,
          }),
        })
      : null,
    qa;
  r[302] !== Bt || r[303] !== It
    ? ((qa = (e) => {
        (It(e), Bt(e));
      }),
      (r[302] = Bt),
      (r[303] = It),
      (r[304] = qa))
    : (qa = r[304]);
  let Ja = I ? `top-full pt-2` : `bottom-full`,
    Ya;
  r[305] === Ja
    ? (Ya = r[306])
    : ((Ya = ge(
        `pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden`,
        Ja,
      )),
      (r[305] = Ja),
      (r[306] = Ya));
  let Xa;
  r[307] !== J || r[308] !== qa || r[309] !== Ya
    ? ((Xa = (0, N.jsx)(`div`, { ref: qa, className: Ya, hidden: J })),
      (r[307] = J),
      (r[308] = qa),
      (r[309] = Ya),
      (r[310] = Xa))
    : (Xa = r[310]);
  let Za = ur === 0 && `pt-2`,
    Qa = I ? `w-full` : `w-80`,
    $a = cr && `left-1/2 -translate-x-1/2`,
    eo = !cr && (sr ? `left-0` : `right-0`),
    to = J && G && `invisible`,
    no;
  r[311] !== Za || r[312] !== Qa || r[313] !== $a || r[314] !== eo || r[315] !== to
    ? ((no = ge(
        c.floatingComposerInset,
        `pointer-events-auto absolute top-full max-w-full empty:hidden`,
        Za,
        Qa,
        $a,
        eo,
        to,
      )),
      (r[311] = Za),
      (r[312] = Qa),
      (r[313] = $a),
      (r[314] = eo),
      (r[315] = to),
      (r[316] = no))
    : (no = r[316]);
  let ro;
  r[317] === ur ? (ro = r[318]) : ((ro = { marginTop: ur }), (r[317] = ur), (r[318] = ro));
  let io;
  r[319] !== g || r[320] !== Ht || r[321] !== no || r[322] !== ro
    ? ((io = (0, N.jsx)(`div`, {
        ref: Ht,
        className: no,
        style: ro,
        "data-pip-obstacle": `quick-chat`,
        children: g,
      })),
      (r[319] = g),
      (r[320] = Ht),
      (r[321] = no),
      (r[322] = ro),
      (r[323] = io))
    : (io = r[323]);
  let ao = J ? zr : H == null && !G ? `none` : Pt,
    oo = +!J,
    so;
  r[324] !== ao || r[325] !== oo
    ? ((so = { clipPath: ao, opacity: oo }), (r[324] = ao), (r[325] = oo), (r[326] = so))
    : (so = r[326]);
  let co = !q && `pointer-events-auto`,
    lo;
  r[327] === co
    ? (lo = r[328])
    : ((lo = ge(`relative z-0 flex min-h-0 flex-1 flex-col`, co)), (r[327] = co), (r[328] = lo));
  let uo = q ? !0 : void 0,
    fo;
  r[329] !== H || r[330] !== j
    ? ((fo = j || H == null ? { duration: 0 } : { duration: 300 / 1e3, ease: pe }),
      (r[329] = H),
      (r[330] = j),
      (r[331] = fo))
    : (fo = r[331]);
  let po;
  r[332] !== J || r[333] !== zr || r[334] !== B || r[335] !== H || r[336] !== U
    ? ((po = (e) => {
        H?.target === (J ? `minimized` : B) &&
          typeof e == `object` &&
          `clipPath` in e &&
          e.clipPath === (J ? zr : Pt) &&
          U((e) => (e === H ? null : e));
      }),
      (r[332] = J),
      (r[333] = zr),
      (r[334] = B),
      (r[335] = H),
      (r[336] = U),
      (r[337] = po))
    : (po = r[337]);
  let mo;
  r[338] !== Y || r[339] !== I || r[340] !== $ || r[341] !== D
    ? ((mo =
        !D &&
        (0, N.jsx)(`div`, {
          className: ge(gt.minimizeButton, `absolute right-2 z-10`, I ? `top-full pt-1` : `bottom-full pb-1`),
          children: (0, N.jsx)(ut, { standalone: !0, isCompact: Y, onMinimize: $ }),
        })),
      (r[338] = Y),
      (r[339] = I),
      (r[340] = $),
      (r[341] = D),
      (r[342] = mo))
    : (mo = r[342]);
  let ho;
  r[343] !== Mi || r[344] !== Y || r[345] !== G || r[346] !== $ || r[347] !== y || r[348] !== D
    ? ((ho = D && (y?.({ contextMenuTrigger: Mi, isCompact: Y, isDragging: G, onMinimize: $ }) ?? Mi)),
      (r[343] = Mi),
      (r[344] = Y),
      (r[345] = G),
      (r[346] = $),
      (r[347] = y),
      (r[348] = D),
      (r[349] = ho))
    : (ho = r[349]);
  let go = Y && `justify-end`,
    _o;
  r[350] === go
    ? (_o = r[351])
    : ((_o = ge(`relative flex min-h-0 flex-1 flex-col`, go)), (r[350] = go), (r[351] = _o));
  let vo = Y ? `hidden` : `flex`,
    yo;
  r[352] === vo
    ? (yo = r[353])
    : ((yo = ge(`mx-(--floating-panel-inset) min-h-0 flex-1 flex-col`, vo)), (r[352] = vo), (r[353] = yo));
  let bo;
  r[354] !== Y || r[355] !== E || r[356] !== J || r[357] !== Ee || r[358] !== V || r[359] !== U
    ? ((bo =
        !Y &&
        Ee?.(() => {
          (U(null), V(`compact`));
        }, !E && !J)),
      (r[354] = Y),
      (r[355] = E),
      (r[356] = J),
      (r[357] = Ee),
      (r[358] = V),
      (r[359] = U),
      (r[360] = bo))
    : (bo = r[360]);
  let xo;
  r[361] !== Y || r[362] !== Rt || r[363] !== yo || r[364] !== bo
    ? ((xo = (0, N.jsx)(`div`, { ref: Rt, className: yo, inert: Y, children: bo })),
      (r[361] = Y),
      (r[362] = Rt),
      (r[363] = yo),
      (r[364] = bo),
      (r[365] = xo))
    : (xo = r[365]);
  let So = y?.({ contextMenuTrigger: ki, isCompact: Y, isDragging: G, onMinimize: $ }) ?? ki,
    Co;
  r[366] !== _o || r[367] !== xo || r[368] !== So
    ? ((Co = (0, N.jsxs)(`div`, { className: _o, children: [xo, So] })),
      (r[366] = _o),
      (r[367] = xo),
      (r[368] = So),
      (r[369] = Co))
    : (Co = r[369]);
  let wo;
  r[370] !== q ||
  r[371] !== so ||
  r[372] !== lo ||
  r[373] !== uo ||
  r[374] !== fo ||
  r[375] !== po ||
  r[376] !== mo ||
  r[377] !== ho ||
  r[378] !== Co
    ? ((wo = (0, N.jsxs)(ce.div, {
        "aria-hidden": q,
        animate: so,
        className: lo,
        "data-floating-chat-surface": !0,
        initial: !1,
        inert: uo,
        transition: fo,
        onAnimationComplete: po,
        children: [mo, ho, Co],
      })),
      (r[370] = q),
      (r[371] = so),
      (r[372] = lo),
      (r[373] = uo),
      (r[374] = fo),
      (r[375] = po),
      (r[376] = mo),
      (r[377] = ho),
      (r[378] = Co),
      (r[379] = wo))
    : (wo = r[379]);
  let To;
  r[380] !== $i ||
  r[381] !== ti ||
  r[382] !== Y ||
  r[383] !== J ||
  r[384] !== Rr ||
  r[385] !== _ ||
  r[386] !== ei ||
  r[387] !== _i ||
  r[388] !== hi ||
  r[389] !== j ||
  r[390] !== Ha ||
  r[391] !== Ua ||
  r[392] !== Wa ||
  r[393] !== Ga ||
  r[394] !== Ka ||
  r[395] !== Xa ||
  r[396] !== io ||
  r[397] !== wo ||
  r[398] !== ea ||
  r[399] !== ta ||
  r[400] !== na ||
  r[401] !== ra ||
  r[402] !== ia ||
  r[403] !== aa ||
  r[404] !== oa ||
  r[405] !== sa
    ? ((To = (0, N.jsxs)($i, {
        allowCompactResize: !0,
        animateSurface: ea,
        currentSize: ta,
        heightLabel: _i,
        isCompact: Y,
        isCompactChromeRevealed: na,
        isMinimized: J,
        keepSurfaceInset: !0,
        maximumSize: ra,
        minimizedContent: ia,
        minimizedSurfaceBounds: Rr,
        minimumSize: aa,
        prefersCompactPresentation: !0,
        resizable: oa,
        background: sa,
        sectionRef: un,
        sectionProps: Ha,
        shouldReduceMotion: j,
        variant: Ua,
        verticalResizeEdge: Wa,
        widthLabel: hi,
        onResize: ei,
        onResizeEnd: ti,
        onResizingChange: Ga,
        children: [Ka, Xa, io, wo, _],
      })),
      (r[380] = $i),
      (r[381] = ti),
      (r[382] = Y),
      (r[383] = J),
      (r[384] = Rr),
      (r[385] = _),
      (r[386] = ei),
      (r[387] = _i),
      (r[388] = hi),
      (r[389] = j),
      (r[390] = Ha),
      (r[391] = Ua),
      (r[392] = Wa),
      (r[393] = Ga),
      (r[394] = Ka),
      (r[395] = Xa),
      (r[396] = io),
      (r[397] = wo),
      (r[398] = ea),
      (r[399] = ta),
      (r[400] = na),
      (r[401] = ra),
      (r[402] = ia),
      (r[403] = aa),
      (r[404] = oa),
      (r[405] = sa),
      (r[406] = To))
    : (To = r[406]);
  let Eo = To,
    Do;
  r[407] === A ? (Do = r[408]) : ((Do = { id: A }), (r[407] = A), (r[408] = Do));
  let Oo;
  return (
    r[409] !== Eo || r[410] !== Do
      ? ((Oo = (0, N.jsx)(ve, { value: Do, children: Eo })), (r[409] = Eo), (r[410] = Do), (r[411] = Oo))
      : (Oo = r[411]),
    Oo
  );
}
function Ct() {
  return 0;
}
function wt() {
  return 0;
}
function Tt(e, t, n) {
  return (
    t instanceof Node &&
    (e.contains(t) ||
      (t instanceof Element &&
        (t.closest(`[data-composer-overlay-floating-ui], [data-content-search-bar]`) != null ||
          t.closest(`[data-floating-chat-annotation-layer]`) != null ||
          t.closest(`[data-overlay-owner]`)?.getAttribute(`data-overlay-owner`) === n)))
  );
}
function Et(e, t, n) {
  return Math.max(t, Math.min(e, n));
}
function Dt(e) {
  return (
    window.addEventListener(`resize`, e),
    () => {
      window.removeEventListener(`resize`, e);
    }
  );
}
function Ot() {
  return window.visualViewport?.height ?? window.innerHeight;
}
function kt() {
  return window.visualViewport?.width ?? window.innerWidth;
}
var At, M, jt, N, Mt, Nt, Pt, Ft;
function It() {
  return (It = e(() => {
    ((At = T()),
      w(),
      de(),
      b(),
      he(),
      _e(),
      y(),
      (M = Me()),
      (jt = je()),
      xe(),
      a(),
      nt(),
      E(),
      Fe(),
      He(),
      Te(),
      O(),
      Ie(),
      we(),
      x(),
      ee(),
      le(),
      u(),
      p(),
      Ee(),
      C(),
      qe(),
      D(),
      S(),
      ue(),
      fe(),
      ot(),
      ct(),
      Ue(),
      Ge(),
      pt(),
      xt(),
      d(),
      _t(),
      re(),
      (N = Oe()),
      (Mt = 400),
      (Nt = 360),
      (Pt = `inset(0px 0px 0px 0px round var(--floating-panel-radius))`),
      (Ft = { type: `spring`, bounce: 0.16, duration: 0.42 }));
  }))();
}
export { pt as a, ct as c, ut as i, It as n, st as o, lt as r, j as s, St as t };
//# sourceMappingURL=quick-chat-floating-surface-51ff4a9417a5.js.map
