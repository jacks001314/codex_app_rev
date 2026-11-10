import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $O as t,
  $St as n,
  $st as r,
  CTt as i,
  DB as a,
  FBt as o,
  FNt as s,
  FTt as c,
  ITt as l,
  Jj as u,
  K3 as d,
  LNt as f,
  MNt as p,
  MTt as m,
  NNt as h,
  OB as g,
  OD as _,
  PBt as v,
  Qst as y,
  SY as b,
  TY as x,
  Uz as S,
  VH as C,
  Wz as w,
  XOt as ee,
  Y3 as te,
  Yj as ne,
  Z3 as re,
  ZSt as ie,
  _C as ae,
  _Tt as oe,
  bB as se,
  cC as ce,
  dB as le,
  dH as ue,
  dM as T,
  dO as de,
  dk as fe,
  eM as pe,
  ek as me,
  fB as he,
  fk as ge,
  gB as _e,
  gC as ve,
  hB as ye,
  hC as be,
  iCt as xe,
  jTt as Se,
  kD as Ce,
  lO as we,
  lf as Te,
  nCt as Ee,
  okt as De,
  sC as Oe,
  tkt as ke,
  uf as Ae,
  vB as je,
  vC as Me,
  vTt as Ne,
  wTt as E,
  yB as Pe,
  yO as Fe,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  A1n as Ie,
  AHt as Le,
  FPt as Re,
  GHt as ze,
  GZ as Be,
  IHt as D,
  J2 as Ve,
  KZ as He,
  M1n as Ue,
  N1n as O,
  P1n as We,
  Q2n as Ge,
  Z2n as Ke,
  a9n as qe,
  i9n as Je,
  k1n as Ye,
  q2 as Xe,
  qHt as Ze,
} from "./app-initial-ad16eaadf81f.js";
import { El as Qe, Tl as $e } from "./app-primary-3e00728c2a4c.js";
import {
  a as et,
  i as tt,
  n as nt,
  o as rt,
  r as it,
  s as at,
  t as ot,
} from "./quick-chat-floating-resize-handles-1b47363ec958.js";
var st, k, ct;
function lt() {
  return (lt = e(() => {
    ((st = `_minimizeButton_1esup_1`), (k = `_frame_1esup_11`), (ct = { minimizeButton: st, frame: k }));
  }))();
}
function ut(e) {
  let t = (0, dt.c)(48),
    {
      allowCompactResize: n,
      animateSurface: r,
      background: i,
      children: a,
      currentSize: o,
      heightLabel: s,
      isCompact: c,
      isCompactChromeRevealed: u,
      isMinimized: d,
      keepSurfaceInset: f,
      maximumSize: m,
      minimizedContent: h,
      minimizedSurfaceBounds: g,
      minimumSize: _,
      onResize: v,
      onResizeEnd: y,
      onResizingChange: b,
      prefersCompactPresentation: x,
      resizable: S,
      sectionProps: C,
      sectionRef: w,
      shouldReduceMotion: ee,
      variant: te,
      verticalResizeEdge: re,
      widthLabel: ie,
    } = e,
    oe = n !== void 0 && n,
    se = r === void 0 || r,
    le = S === void 0 || S,
    ue = !d && (f || (c && !u)) ? 6 : 0,
    T;
  t[0] !== d || t[1] !== g || t[2] !== ue
    ? ((T = d && g != null ? g : { top: 0, right: ue, bottom: ue, left: ue }),
      (t[0] = d),
      (t[1] = g),
      (t[2] = ue),
      (t[3] = T))
    : (T = t[3]);
  let de = T,
    fe = i !== `panel` || x,
    me;
  t[4] !== C.ref || t[5] !== w
    ? ((me = ne(w, C.ref, ce)), (t[4] = C.ref), (t[5] = w), (t[6] = me))
    : (me = t[6]);
  let he = x && ct.frame,
    ge = x && `group/chat-frame focus:outline-none`,
    _e = g == null ? `pointer-events-auto` : `pointer-events-none`,
    ve = x && ae.floatingSurface,
    ye = f && ae.singleLineSurface,
    xe =
      te === `floating`
        ? `fixed top-0 left-0 z-30 max-h-[calc(100dvh/var(--codex-window-zoom)-var(--height-toolbar)-2rem)] max-w-[calc(50vw/var(--codex-window-zoom))]`
        : `absolute top-0 left-0 z-30 max-h-full max-w-full`,
    Se = x ? `overflow-visible` : `overflow-hidden`,
    Ce;
  t[7] !== ve || t[8] !== ye || t[9] !== xe || t[10] !== Se || t[11] !== he || t[12] !== ge || t[13] !== _e
    ? ((Ce = p(`flex flex-col text-default`, he, ge, _e, ve, ye, xe, Se)),
      (t[7] = ve),
      (t[8] = ye),
      (t[9] = xe),
      (t[10] = Se),
      (t[11] = he),
      (t[12] = ge),
      (t[13] = _e),
      (t[14] = Ce))
    : (Ce = t[14]);
  let we;
  t[15] !== se || t[16] !== i || t[17] !== f || t[18] !== h || t[19] !== x || t[20] !== ee || t[21] !== de
    ? ((we = x
        ? (0, A.jsx)(be, {
            asChild: !0,
            unstyled: i !== `panel`,
            variant: f ? `single-line` : `default`,
            children: (0, A.jsx)(l.div, {
              "aria-hidden": h == null || void 0,
              animate: de,
              className: p(
                `pointer-events-none absolute group-focus-visible/chat-frame:ring-2 group-focus-visible/chat-frame:ring-ring group-focus-visible/chat-frame:ring-offset-0 forced-colors:group-focus-visible/chat-frame:outline-auto`,
                i !== `panel` && `rounded-[inherit]`,
              ),
              initial: !1,
              transition: ee || !se ? { duration: 0 } : { duration: 300 / 1e3, ease: pe },
              children: h,
            }),
          })
        : null),
      (t[15] = se),
      (t[16] = i),
      (t[17] = f),
      (t[18] = h),
      (t[19] = x),
      (t[20] = ee),
      (t[21] = de),
      (t[22] = we))
    : (we = t[22]);
  let Te;
  t[23] !== oe ||
  t[24] !== o ||
  t[25] !== s ||
  t[26] !== c ||
  t[27] !== d ||
  t[28] !== m ||
  t[29] !== _ ||
  t[30] !== v ||
  t[31] !== y ||
  t[32] !== b ||
  t[33] !== le ||
  t[34] !== de ||
  t[35] !== re ||
  t[36] !== ie
    ? ((Te =
        le && (!c || oe) && !d
          ? (0, A.jsx)(`div`, {
              className: `pointer-events-none absolute`,
              style: de,
              children: (0, A.jsx)(`div`, {
                className: `pointer-events-auto contents`,
                children: (0, A.jsx)(ot, {
                  currentSize: o,
                  defaultSize: Le,
                  extendIntoToolbar: !1,
                  heightLabel: s,
                  maximumSize: m,
                  minimumSize: _,
                  verticalEdge: c ? null : re,
                  widthLabel: ie,
                  onResize: v,
                  onResizeEnd: y,
                  onResizingChange: b,
                }),
              }),
            })
          : null),
      (t[23] = oe),
      (t[24] = o),
      (t[25] = s),
      (t[26] = c),
      (t[27] = d),
      (t[28] = m),
      (t[29] = _),
      (t[30] = v),
      (t[31] = y),
      (t[32] = b),
      (t[33] = le),
      (t[34] = de),
      (t[35] = re),
      (t[36] = ie),
      (t[37] = Te))
    : (Te = t[37]);
  let Ee;
  t[38] !== a || t[39] !== C || t[40] !== Ce || t[41] !== we || t[42] !== Te || t[43] !== me
    ? ((Ee = (0, A.jsxs)(l.section, { ...C, ref: me, className: Ce, children: [we, Te, a] })),
      (t[38] = a),
      (t[39] = C),
      (t[40] = Ce),
      (t[41] = we),
      (t[42] = Te),
      (t[43] = me),
      (t[44] = Ee))
    : (Ee = t[44]);
  let De;
  return (
    t[45] !== Ee || t[46] !== fe
      ? ((De = (0, A.jsx)(be, { asChild: !0, unstyled: fe, children: Ee })),
        (t[45] = Ee),
        (t[46] = fe),
        (t[47] = De))
      : (De = t[47]),
    De
  );
}
var dt, A;
function j() {
  return (j = e(() => {
    ((dt = v()), h(), c(), nt(), D(), ve(), d(), T(), u(), Oe(), lt(), Me(), (A = f()));
  }))();
}
function ft(e) {
  let t = (0, pt.c)(35),
    { title: n, preview: r, onOpen: i, onDismiss: a } = e,
    o = De(),
    s,
    c,
    l,
    u,
    d,
    f,
    p;
  t[0] !== o || t[1] !== n
    ? ((p =
        n ??
        o.formatMessage({
          id: `quickChat.mainConversation`,
          defaultMessage: `Chat`,
          description: `Fallback title for the task's main conversation in the floating chat`,
        })),
      (s = be),
      (u = `relative flex shrink-0 select-none`),
      (d = `status`),
      (f = `notice`),
      (c = `min-w-0 flex-1 cursor-interaction rounded-[inherit] px-4 py-3 text-start focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset`),
      (l = o.formatMessage(
        {
          id: `quickChat.openCompletedResponse`,
          defaultMessage: `Open completed response: {title}`,
          description: `Accessible label for opening a completed response from the floating chat preview`,
        },
        { title: p },
      )),
      (t[0] = o),
      (t[1] = n),
      (t[2] = s),
      (t[3] = c),
      (t[4] = l),
      (t[5] = u),
      (t[6] = d),
      (t[7] = f),
      (t[8] = p))
    : ((s = t[2]), (c = t[3]), (l = t[4]), (u = t[5]), (d = t[6]), (f = t[7]), (p = t[8]));
  let m;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, M.jsx)(C, { className: `text-success` })), (t[9] = m))
    : (m = t[9]);
  let h;
  t[10] === p
    ? (h = t[11])
    : ((h = (0, M.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-2 text-sm font-semibold text-default`,
        children: [m, (0, M.jsx)(`span`, { className: `truncate`, children: p })],
      })),
      (t[10] = p),
      (t[11] = h));
  let g;
  t[12] === r
    ? (g = t[13])
    : ((g =
        r ||
        (0, M.jsx)(ke, {
          id: `quickChat.responseReady`,
          defaultMessage: `Response ready`,
          description: `Fallback preview in the floating chat when a turn has completed without displayable text`,
        })),
      (t[12] = r),
      (t[13] = g));
  let _;
  t[14] === g
    ? (_ = t[15])
    : ((_ = (0, M.jsx)(`span`, { className: `block truncate text-sm text-secondary`, children: g })),
      (t[14] = g),
      (t[15] = _));
  let v;
  t[16] !== i || t[17] !== c || t[18] !== l || t[19] !== h || t[20] !== _
    ? ((v = (0, M.jsxs)(`button`, {
        className: c,
        "aria-label": l,
        type: `button`,
        onClick: i,
        children: [h, _],
      })),
      (t[16] = i),
      (t[17] = c),
      (t[18] = l),
      (t[19] = h),
      (t[20] = _),
      (t[21] = v))
    : (v = t[21]);
  let y;
  t[22] === o
    ? (y = t[23])
    : ((y = o.formatMessage({
        id: `quickChat.dismissCompletedResponse`,
        defaultMessage: `Dismiss and mark as read`,
        description: `Close the completed-response notification and mark its conversation as read, without closing the floating composer`,
      })),
      (t[22] = o),
      (t[23] = y));
  let x;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, M.jsx)(b, { className: `pointer-events-none` })), (t[24] = x))
    : (x = t[24]);
  let S;
  t[25] !== a || t[26] !== y
    ? ((S = (0, M.jsx)(`div`, {
        className: `absolute -top-1 -left-1 flex rounded-full bg-surface`,
        children: (0, M.jsx)(te, {
          "aria-label": y,
          color: `outlineSurface`,
          radius: `full`,
          size: `iconCircleSm`,
          onClick: a,
          children: x,
        }),
      })),
      (t[25] = a),
      (t[26] = y),
      (t[27] = S))
    : (S = t[27]);
  let w;
  return (
    t[28] !== s || t[29] !== v || t[30] !== S || t[31] !== u || t[32] !== d || t[33] !== f
      ? ((w = (0, M.jsxs)(s, { className: u, role: d, variant: f, children: [v, S] })),
        (t[28] = s),
        (t[29] = v),
        (t[30] = S),
        (t[31] = u),
        (t[32] = d),
        (t[33] = f),
        (t[34] = w))
      : (w = t[34]),
    w
  );
}
var pt, M;
function mt() {
  return (mt = e(() => {
    ((pt = v()), ee(), re(), ve(), x(), (M = f()));
  }))();
}
function ht(e) {
  let t = (0, gt.c)(20),
    { items: n, availableHeight: r, isDockedTop: i, shouldReduceMotion: a } = e,
    [o, s] = (0, _t.useState)(null),
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (e, t) => {
        let n = t.firstElementChild;
        n instanceof HTMLElement && s(n.offsetHeight);
      }),
      (t[0] = c))
    : (c = t[0]);
  let u = de(c),
    d = Math.min(o == null ? r : o * 3 + 24, Math.max(0, r - 16)),
    f = a ? 0 : 300 / 1e3,
    p;
  t[1] === f ? (p = t[2]) : ((p = { duration: f, ease: pe }), (t[1] = f), (t[2] = p));
  let m = p,
    h = d + 16,
    g;
  t[3] === h ? (g = t[4]) : ((g = { style: { maxHeight: h } }), (t[3] = h), (t[4] = g));
  let _;
  if (t[5] !== i || t[6] !== n || t[7] !== a || t[8] !== m) {
    let e;
    (t[10] !== i || t[11] !== a || t[12] !== m
      ? ((e = (e) => {
          let { id: t, content: n } = e;
          return (0, vt.jsx)(
            l.div,
            {
              className: `shrink-0`,
              layout: !a && `position`,
              transition: m,
              children: (0, vt.jsx)(l.div, {
                initial: { opacity: 0, transform: `translateY(${a ? 0 : 8 * (i ? -1 : 1)}px)` },
                animate: { opacity: 1, transform: `translateY(0px)` },
                transition: { ...m, opacity: { ease: `linear` } },
                children: n,
              }),
            },
            t,
          );
        }),
        (t[10] = i),
        (t[11] = a),
        (t[12] = m),
        (t[13] = e))
      : (e = t[13]),
      (_ = n.map(e)),
      (t[5] = i),
      (t[6] = n),
      (t[7] = a),
      (t[8] = m),
      (t[9] = _));
  } else _ = t[9];
  let v;
  t[14] !== u || t[15] !== _
    ? ((v = (0, vt.jsx)(`div`, { ref: u, className: `relative flex flex-col gap-3`, children: _ })),
      (t[14] = u),
      (t[15] = _),
      (t[16] = v))
    : (v = t[16]);
  let y;
  return (
    t[17] !== g || t[18] !== v
      ? ((y = (0, vt.jsx)(fe, {
          className: `-mx-6 -my-2`,
          fade: `mask`,
          scrollClassName: `overflow-y-auto overscroll-contain px-6 py-2`,
          scrollProps: g,
          children: v,
        })),
        (t[17] = g),
        (t[18] = v),
        (t[19] = y))
      : (y = t[19]),
    y
  );
}
var gt, _t, vt;
function yt() {
  return (yt = e(() => {
    ((gt = v()), c(), (_t = o()), ge(), we(), d(), T(), (vt = f()));
  }))();
}
var bt, xt;
function St() {
  return (St = e(() => {
    ((bt = { type: `none` }), (xt = { type: `pending` }));
  }))();
}
function Ct(e) {
  let t = (0, Tt.c)(27),
    { animateChrome: n, children: r, isChromeRevealed: i, isCompact: a, presentationToggle: o } = e,
    s = !a && `shrink-0`,
    c;
  t[0] === s ? (c = t[1]) : ((c = p(`relative min-h-0 overflow-hidden`, s)), (t[0] = s), (t[1] = c));
  let u = !i || void 0,
    d = i ? 46 : 0,
    f = +!!i,
    m;
  t[2] !== d || t[3] !== f
    ? ((m = { height: d, opacity: f }), (t[2] = d), (t[3] = f), (t[4] = m))
    : (m = t[4]);
  let h = !i || void 0,
    g;
  t[5] === n
    ? (g = t[6])
    : ((g = n ? { duration: 300 / 1e3, ease: pe } : { duration: 0 }), (t[5] = n), (t[6] = g));
  let _;
  t[7] !== a || t[8] !== o
    ? ((_ =
        o == null
          ? null
          : (0, Et.jsx)(`button`, {
              className: `pointer-events-none absolute inset-0 rounded-[inherit] focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset`,
              "aria-label": o.label,
              "aria-expanded": !a,
              type: `button`,
              onClick: o.onToggle,
            })),
      (t[7] = a),
      (t[8] = o),
      (t[9] = _))
    : (_ = t[9]);
  let v = o != null && a && `cursor-n-resize`,
    y = o != null && !a && `cursor-s-resize`,
    b = o == null && `cursor-interaction`,
    x = a && `mx-1.5 border-b border-default px-2`,
    S = !a && `px-3`,
    C;
  t[10] !== v || t[11] !== y || t[12] !== b || t[13] !== x || t[14] !== S
    ? ((C = p(`flex h-toolbar touch-none select-none items-center justify-between`, v, y, b, x, S)),
      (t[10] = v),
      (t[11] = y),
      (t[12] = b),
      (t[13] = x),
      (t[14] = S),
      (t[15] = C))
    : (C = t[15]);
  let w;
  t[16] !== r || t[17] !== C
    ? ((w = (0, Et.jsx)(`div`, { className: C, children: r })), (t[16] = r), (t[17] = C), (t[18] = w))
    : (w = t[18]);
  let ee;
  return (
    t[19] !== w || t[20] !== c || t[21] !== u || t[22] !== m || t[23] !== h || t[24] !== g || t[25] !== _
      ? ((ee = (0, Et.jsxs)(l.header, {
          className: c,
          "aria-hidden": u,
          animate: m,
          "data-quick-chat-drag-handle": !0,
          initial: !1,
          inert: h,
          transition: g,
          children: [_, w],
        })),
        (t[19] = w),
        (t[20] = c),
        (t[21] = u),
        (t[22] = m),
        (t[23] = h),
        (t[24] = g),
        (t[25] = _),
        (t[26] = ee))
      : (ee = t[26]),
    ee
  );
}
function wt(e) {
  let t = (0, Tt.c)(11),
    { isCompact: n, onMinimize: r, standalone: i } = e,
    o = i !== void 0 && i,
    s = De(),
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = s.formatMessage({
        id: `quickChat.minimize`,
        defaultMessage: `Minimize chat`,
        description: `Accessible label for minimizing a floating chat`,
      })),
      (t[0] = s),
      (t[1] = c));
  let l = o ? `outlineSurface` : `ghostSecondary`,
    u = n ? `composer` : `toolbar`,
    d;
  t[2] === o
    ? (d = t[3])
    : ((d = (e) => {
        o && e.preventDefault();
      }),
      (t[2] = o),
      (t[3] = d));
  let f;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Et.jsx)(a, { "aria-hidden": !1, asset: Ae })), (t[4] = f))
    : (f = t[4]);
  let p;
  return (
    t[5] !== r || t[6] !== c || t[7] !== l || t[8] !== u || t[9] !== d
      ? ((p = (0, Et.jsx)(te, {
          "aria-label": c,
          color: l,
          size: u,
          uniform: !0,
          onClick: r,
          onPointerDown: d,
          children: f,
        })),
        (t[5] = r),
        (t[6] = c),
        (t[7] = l),
        (t[8] = u),
        (t[9] = d),
        (t[10] = p))
      : (p = t[10]),
    p
  );
}
var Tt, Et;
function Dt() {
  return (Dt = e(() => {
    ((Tt = v()), Te(), h(), c(), ee(), re(), g(), d(), T(), (Et = f()));
  }))();
}
function Ot(e) {
  let r = (0, It.c)(412),
    {
      ref: a,
      animateOnMount: o,
      background: s,
      children: c,
      containerSize: u,
      dockThreadKey: d,
      reservedDockPosition: f,
      footer: h,
      overlay: g,
      renderHeader: v,
      renderMenu: b,
      forceExpanded: x,
      hasConversation: S,
      isHidden: C,
      isMinimized: ee,
      onDragOver: re,
      onDragEnd: ie,
      onEscape: oe,
      onMinimizedChange: T,
      presentation: fe,
      onPresentationChange: me,
      title: he,
      titleContent: ge,
      minimizedIcon: ve,
      minimizedMenuItems: ye,
      restoreLabel: be,
      statusState: Se,
      titleStatusState: Ce,
      notifications: we,
      renderTranscript: Te,
      hasTranscript: Oe,
      showComposerDivider: ke,
      showHeader: Ae,
    } = e,
    je = o !== void 0 && o,
    Me = x !== void 0 && x,
    E = C !== void 0 && C,
    Ie = Ce === void 0 ? Se : Ce,
    Re = ke !== void 0 && ke,
    D = Ae === void 0 || Ae,
    Ve = n(y),
    He = Oe ?? Te != null,
    O = xe(d) ?? void 0,
    Ke = (0, N.useContext)(Je),
    qe = xe(we) ?? bt,
    Qe = xe(Se),
    nt;
  r[0] !== Qe || r[1] !== qe.type
    ? ((nt = qe.type === `ready` ? { ...Qe, type: Qe?.type ?? `idle`, unread: !0 } : Qe),
      (r[0] = Qe),
      (r[1] = qe.type),
      (r[2] = nt))
    : (nt = r[2]);
  let at = nt,
    ot = xe(Ie),
    st = Ie === Se ? at : ot,
    k = De(),
    lt = (0, N.useId)(),
    dt = (0, N.useId)(),
    A = se(),
    j = w(),
    pt = (0, N.useSyncExternalStore)(Nt, Pt, At),
    M;
  r[3] !== pt || r[4] !== A ? ((M = Pe(pt, A)), (r[3] = pt), (r[4] = A), (r[5] = M)) : (M = r[5]);
  let mt = M,
    gt = Pe((0, N.useSyncExternalStore)(Nt, Ft, kt), A),
    [_t, vt] = (0, N.useState)(0),
    [yt, xt] = (0, N.useState)(!1),
    [St, Tt] = (0, N.useState)(0),
    [Et, Dt] = (0, N.useState)(null),
    [Ot, Ht] = (0, N.useState)(null),
    Ut;
  r[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ut = (e) => {
        Tt(Fe(e).height);
      }),
      (r[6] = Ut))
    : (Ut = r[6]);
  let Wt = de(Ut),
    Gt;
  r[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Gt = (e) => {
        vt(Fe(e).height);
      }),
      (r[7] = Gt))
    : (Gt = r[7]);
  let Kt = de(Gt),
    [qt, Jt] = (0, N.useState)(0),
    Yt;
  r[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Yt = (e) => {
        Jt(Fe(e).height);
      }),
      (r[8] = Yt))
    : (Yt = r[8]);
  let Xt = de(Yt),
    F = u?.width ?? gt,
    Zt = gt < 640,
    [Qt] = (0, N.useState)(We),
    $t = O ?? null,
    en;
  r[9] === $t ? (en = r[10]) : ((en = { threadKey: $t, minimized: !1 }), (r[9] = $t), (r[10] = en));
  let tn = Ee(Ye, en),
    nn = O ?? null,
    rn;
  r[11] === nn ? (rn = r[12]) : ((rn = { threadKey: nn, minimized: !0 }), (r[11] = nn), (r[12] = rn));
  let an = Ee(Ye, rn),
    on;
  r[13] === Symbol.for(`react.memo_cache_sentinel`) ? ((on = {}), (r[13] = on)) : (on = r[13]);
  let [sn, cn] = (0, N.useState)(on),
    ln = (O == null ? sn.minimized : null) ?? an ?? `bottom-right`,
    un = (O == null ? sn.expanded : null) ?? tn ?? Qt,
    I = rt(Zt && !ee ? `bottom-center` : ee ? ln : un, f),
    L = I.startsWith(`top`),
    dn = xe(ze),
    R = Ne(),
    fn = (0, N.useRef)(!1),
    z = m(0),
    B = m(0),
    pn = (0, N.useRef)(null),
    mn = (0, N.useRef)(null),
    hn = (0, N.useRef)(null),
    gn = (0, N.useRef)(null),
    [_n, vn] = (0, N.useState)(`compact`),
    V = fe ?? _n,
    yn;
  r[14] !== fe || r[15] !== He || r[16] !== me
    ? ((yn = (e) => {
        (e !== `expanded` || He) && (fe ?? vn(e), me?.(e));
      }),
      (r[14] = fe),
      (r[15] = He),
      (r[16] = me),
      (r[17] = yn))
    : (yn = r[17]);
  let H = yn,
    [bn, U] = (0, N.useState)(null),
    [xn, W] = (0, N.useState)(!1),
    [Sn, Cn] = (0, N.useState)(!1),
    [G, wn] = (0, N.useState)(!1),
    [Tn, En] = (0, N.useState)(!1),
    [Dn, On] = (0, N.useState)(!0),
    [K, kn] = (0, N.useState)(null),
    An = (0, N.useRef)(!1),
    [jn, Mn] = (0, N.useState)(!1),
    [Nn, Pn] = (0, N.useState)(0),
    [Fn, In] = (0, N.useState)(0),
    Ln;
  r[18] === A
    ? (Ln = r[19])
    : ((Ln = (e, t) => {
        Pn(e.contentRect.height);
        let n = t.querySelector(`[data-above-composer-portal]`)?.getBoundingClientRect().height ?? 0;
        In(Math.max(0, e.contentRect.height - Pe(n, A)));
      }),
      (r[18] = A),
      (r[19] = Ln));
  let Rn = de(Ln),
    [zn, Bn] = (0, N.useState)(null),
    [Vn, Hn] = (0, N.useState)(O);
  Vn !== O && (Hn(O), cn({}), wn(!1), En(!1), kn(null), U(null));
  let q = ee,
    J = q || K?.stage === `minimized`;
  bn?.target === `minimized` && !J && U({ target: V });
  let Y = !Me && (!He || V === `compact`),
    Un = He && !Me,
    Wn = !E && !Y && !q && !Me && !G && !jn,
    Gn;
  r[20] !== dt || r[21] !== H || r[22] !== U
    ? ((Gn = (e) => {
        mn.current != null && !jt(mn.current, e.target, dt) && (U(null), H(`compact`));
      }),
      (r[20] = dt),
      (r[21] = H),
      (r[22] = U),
      (r[23] = Gn))
    : (Gn = r[23]);
  let Kn = (0, N.useEffectEvent)(Gn),
    qn;
  r[24] !== Kn || r[25] !== Wn
    ? ((qn = () => {
        if (Wn)
          return (
            document.addEventListener(`pointerdown`, Kn, !0),
            () => {
              document.removeEventListener(`pointerdown`, Kn, !0);
            }
          );
      }),
      (r[24] = Kn),
      (r[25] = Wn),
      (r[26] = qn))
    : (qn = r[26]);
  let Jn;
  (r[27] === Wn ? (Jn = r[28]) : ((Jn = [Wn]), (r[27] = Wn), (r[28] = Jn)), (0, N.useEffect)(qn, Jn));
  let Yn = at?.type === `loading`,
    Xn;
  r[29] !== T || r[30] !== W || r[31] !== H || r[32] !== U
    ? ((Xn = () => {
        (mn.current?.focus({ preventScroll: !0 }), W(!1), U(null), H(`expanded`), T(!1));
      }),
      (r[29] = T),
      (r[30] = W),
      (r[31] = H),
      (r[32] = U),
      (r[33] = Xn))
    : (Xn = r[33]);
  let Zn = _e(Xn);
  qe.type !== `ready` && xn && W(!1);
  let Qn = qe.type === `ready` && (J ? q && xn && !G : Y),
    $n = st?.type === `loading` || (st?.unread === !0 && !Qn),
    er = Yn || (at?.unread === !0 && (q || !Qn)),
    tr;
  r[34] !== Qn || r[35] !== E || r[36] !== q || r[37] !== W
    ? ((tr = () => {
        if (E || !q || !Qn) return;
        let e = (e) => {
          e.key !== `Escape` ||
            e.defaultPrevented ||
            (e.preventDefault(),
            gn.current?.contains(document.activeElement) && hn.current?.focus({ preventScroll: !0 }),
            W(!1));
        };
        return (document.addEventListener(`keydown`, e), () => document.removeEventListener(`keydown`, e));
      }),
      (r[34] = Qn),
      (r[35] = E),
      (r[36] = q),
      (r[37] = W),
      (r[38] = tr))
    : (tr = r[38]);
  let nr;
  (r[39] !== Qn || r[40] !== E || r[41] !== q
    ? ((nr = [Qn, E, q]), (r[39] = Qn), (r[40] = E), (r[41] = q), (r[42] = nr))
    : (nr = r[42]),
    (0, N.useEffect)(tr, nr));
  let rr = !q && !J && (!Y || Sn || G || yt),
    ir = D && rr && !q && v == null,
    ar;
  r[43] === k
    ? (ar = r[44])
    : ((ar = k.formatMessage({
        id: `quickChat.running`,
        defaultMessage: `Running`,
        description: `Status of a running task in the floating composer`,
      })),
      (r[43] = k),
      (r[44] = ar));
  let or = ar,
    sr;
  r[45] === k
    ? (sr = r[46])
    : ((sr = k.formatMessage({
        id: `quickChat.unreadResponse`,
        defaultMessage: `Unread response`,
        description: `Status of a floating task with an unread response`,
      })),
      (r[45] = k),
      (r[46] = sr));
  let cr = sr,
    lr = Yn ? or : cr,
    ur = I.endsWith(`left`),
    dr = I === `bottom-center`,
    fr = ur ? `left` : `right`,
    pr = L && !J ? St : 0,
    X = (u == null ? 46 : 0) + (!L && !J ? St : 0),
    mr = zn ?? dn ?? Le,
    hr = Qn && !q ? qt : 0,
    Z = (u?.height ?? mt) - _t - (L ? hr + pr : 0),
    gr = Math.max(0, Z - 32 - X - (L ? 0 : hr)),
    _r = u == null ? F / 2 : Math.max(0, F - 20),
    vr = (Nn || 46) + (D && rr ? 46 : 0) + 6,
    yr = Math.min(Y ? vr : Math.max(Rt, vr), gr),
    br = Zt ? _r : Math.min(zt + 12, _r),
    Q = Mt(Y ? vr : mr.height, yr, gr),
    xr = m(Q),
    Sr = (0, N.useRef)(!1),
    Cr = Nn > 0,
    wr = E || j || q || jn || bn != null ? 0 : 300 / 1e3,
    Tr,
    Er;
  (r[47] !== xr || r[48] !== Q || r[49] !== Cr || r[50] !== Y || r[51] !== wr
    ? ((Tr = () => {
        let e = !Sr.current && Y;
        if ((Cr && (Sr.current = !0), e || wr === 0)) {
          xr.jump(Q);
          return;
        }
        let t = i(xr, Q, { duration: wr, ease: pe });
        return () => t.stop();
      }),
      (Er = [xr, Q, Cr, Y, wr]),
      (r[47] = xr),
      (r[48] = Q),
      (r[49] = Cr),
      (r[50] = Y),
      (r[51] = wr),
      (r[52] = Tr),
      (r[53] = Er))
    : ((Tr = r[52]), (Er = r[53])),
    (0, N.useLayoutEffect)(Tr, Er));
  let Dr = Mt(mr.width + 12, br, _r),
    Or = tt(I, { height: Q, width: Dr }, Z, F, 12, X),
    kr = { height: Math.min(36, gr), width: Math.min(36, _r) },
    Ar = rt(q ? I : (K?.dockPosition ?? ln), f),
    jr = tt(Ar, kr, Z, F, 0, X),
    Mr = q ? kr : { height: Q, width: Dr },
    Nr = q ? jr : Or,
    Pr = q ? 16 : 10,
    Fr = tt(Ar, { height: Q, width: Dr }, Z, F, 12, X),
    Ir = jr.x - Fr.x,
    Lr = jr.y - Fr.y,
    Rr = Dr - Ir - kr.width,
    zr = Q - Lr - kr.height,
    Br;
  r[54] !== Ir || r[55] !== Lr || r[56] !== Rr || r[57] !== zr
    ? ((Br = { top: Lr, right: Rr, bottom: zr, left: Ir }),
      (r[54] = Ir),
      (r[55] = Lr),
      (r[56] = Rr),
      (r[57] = zr),
      (r[58] = Br))
    : (Br = r[58]);
  let Vr = Br,
    Hr = `inset(${Vr.top}px ${Vr.right}px ${Vr.bottom}px ${Vr.left}px round var(--floating-panel-radius))`,
    Ur = L ? { top: Lr + kr.height } : { bottom: Q - Lr },
    Wr = (0, N.useRef)({ dockPosition: I, dockThreadKey: O, isMinimized: q }),
    Gr;
  r[59] === ie
    ? (Gr = r[60])
    : ((Gr = () => {
        ie?.(null);
      }),
      (r[59] = ie),
      (r[60] = Gr));
  let Kr = (0, N.useEffectEvent)(Gr),
    qr = (0, N.useEffectEvent)((e) => {
      let t = tt(e, { height: Q, width: Dr }, Z, F, 12, X);
      (z.stop(), B.stop(), z.jump(z.get() + t.x - Or.x), B.jump(B.get() + t.y - Or.y));
      let n = j ? { duration: 0 } : Vt;
      (i(z, 0, n), i(B, 0, n));
    });
  (0, N.useLayoutEffect)(() => {
    let e = Wr.current;
    if (((Wr.current = { dockPosition: I, dockThreadKey: O, isMinimized: q }), e.dockThreadKey !== O)) {
      ((fn.current = !0), (An.current = !0), R.cancel(), Kr(), z.jump(0), B.jump(0));
      return;
    }
    if (E) {
      (z.jump(0), B.jump(0));
      return;
    }
    e.isMinimized !== q && qr(e.dockPosition);
  }, [I, O, R, z, B, E, q]);
  let Jr, Yr;
  (r[61] !== z || r[62] !== B
    ? ((Jr = () => () => {
        (z.stop(), B.stop());
      }),
      (Yr = [z, B]),
      (r[61] = z),
      (r[62] = B),
      (r[63] = Jr),
      (r[64] = Yr))
    : ((Jr = r[63]), (Yr = r[64])),
    (0, N.useLayoutEffect)(Jr, Yr));
  let Xr = (e) => {
      let t = { ...Mr, left: Nr.x + z.get(), top: Nr.y + B.get() },
        n = u == null ? null : mn.current?.parentElement?.getBoundingClientRect(),
        r = { x: e.point.x - Pe(n?.left ?? 0, A), y: e.point.y - Pe(n?.top ?? 0, A) },
        i = et({ ...t, left: t.width >= F / 2 - Pr * 2 ? r.x - t.width / 2 : t.left }, Z, F, q),
        a = f == null ? i : rt(i, f),
        o = tt(a, Mr, Z, F, 12, X),
        s = { x: Math.min(r.x, F - r.x), y: Math.min(r.y - X, Z - r.y) },
        c = !q && a !== `bottom-center` && Math.abs(t.left - o.x) <= 16 && Math.abs(t.top - o.y) <= 16,
        l = s.x <= 16 + kr.width && s.y <= 16 + kr.height;
      return {
        dockPosition: a,
        requestedDockPosition: i,
        isNearDock: c,
        isPointerNearMinimizeTarget: l,
        shouldMinimize: c && l,
      };
    },
    Zr;
  r[65] !== O || r[66] !== S || r[67] !== Ve
    ? ((Zr = (e, t) => {
        O == null
          ? cn((n) => ({ expanded: t ? n.expanded : e, minimized: e }))
          : Ue(Ve, { threadKey: O, minimized: t }, e, S);
      }),
      (r[65] = O),
      (r[66] = S),
      (r[67] = Ve),
      (r[68] = Zr))
    : (Zr = r[68]);
  let Qr = Zr,
    $r = (e, t, n) => {
      let r = n === void 0 ? Mr : n,
        a = tt(I, r, Z, F, q ? 0 : 12, X),
        o = { x: a.x + z.get(), y: a.y + B.get() },
        s = tt(rt(e, f), r, Z, F, q ? 0 : 12, X);
      (z.stop(),
        B.stop(),
        z.jump(o.x - s.x),
        B.jump(o.y - s.y),
        t &&
          (0, Lt.flushSync)(() => {
            Qr(e, q);
          }));
      let c = j ? { duration: 0 } : Vt;
      (En(!0),
        Promise.all([i(z, 0, c), i(B, 0, c)]).then(() => {
          En(z.get() !== 0 || B.get() !== 0);
        }));
    },
    ei = (0, N.useEffectEvent)(() => {
      ((fn.current = !0), R.cancel(), ie?.(null), $r(I, !1), kn(null), U(null), wn(!1));
    }),
    ti;
  r[69] !== ei || r[70] !== R || r[71] !== G
    ? ((ti = () => {
        if (!G) return;
        let e = (e) => {
            e.key === `Escape` && (e.preventDefault(), e.stopPropagation(), ei());
          },
          t = () => ei();
        return (
          window.addEventListener(`keydown`, e, !0),
          window.addEventListener(`blur`, t),
          window.addEventListener(`pointercancel`, t, !0),
          () => {
            ((fn.current = !0),
              R.cancel(),
              window.removeEventListener(`keydown`, e, !0),
              window.removeEventListener(`blur`, t),
              window.removeEventListener(`pointercancel`, t, !0));
          }
        );
      }),
      (r[69] = ei),
      (r[70] = R),
      (r[71] = G),
      (r[72] = ti))
    : (ti = r[72]);
  let ni;
  (r[73] !== R || r[74] !== G ? ((ni = [R, G]), (r[73] = R), (r[74] = G), (r[75] = ni)) : (ni = r[75]),
    (0, N.useLayoutEffect)(ti, ni));
  let ri = (e, t) => {
      let n = it(I, e, { height: Q, width: Dr }, z.get(), t.width, Z, F, 12),
        r = Or.y + B.get(),
        i = tt(I, t, Z, F, 12, X),
        a = Mt(r + (L ? 0 : Q - t.height), X + 10, Z - t.height - 10);
      (z.stop(),
        B.stop(),
        (0, Lt.flushSync)(() => {
          Bn({ height: Y ? mr.height : t.height, width: t.width - 12 });
        }),
        z.jump(n),
        B.jump(a - i.y));
    },
    ii = (e) => {
      (Ze(Ve, { height: Y ? mr.height : e.height, width: e.width - 12 }, { dockPosition: I }), $r(I, !1, e));
    },
    ai;
  r[76] !== G || r[77] !== T || r[78] !== W || r[79] !== kn || r[80] !== U
    ? ((ai = () => {
        (W(!1), On(!G), kn(null), U({ target: `minimized` }), T(!0));
      }),
      (r[76] = G),
      (r[77] = T),
      (r[78] = W),
      (r[79] = kn),
      (r[80] = U),
      (r[81] = ai))
    : (ai = r[81]);
  let $ = ai,
    oi,
    si,
    ci,
    li,
    ui,
    di;
  if (
    r[82] !== Me ||
    r[83] !== Y ||
    r[84] !== E ||
    r[85] !== q ||
    r[86] !== oe ||
    r[87] !== T ||
    r[88] !== V ||
    r[89] !== W ||
    r[90] !== H ||
    r[91] !== U
  ) {
    ui = () => {
      ((0, Lt.flushSync)(() => {
        (W(!1), U({ target: V }), T(!1));
      }),
        ci());
    };
    let e;
    (r[98] !== Y || r[99] !== H || r[100] !== U
      ? ((e = () => {
          (U(null), H(Y ? `expanded` : `compact`));
        }),
        (r[98] = Y),
        (r[99] = H),
        (r[100] = U),
        (r[101] = e))
      : (e = r[101]),
      (di = e),
      (oi = !E && !q && (oe != null || (!Y && !Me))));
    let t;
    (r[102] !== oe || r[103] !== H || r[104] !== U
      ? ((t = () => {
          oe == null ? (U(null), H(`compact`)) : oe();
        }),
        (r[102] = oe),
        (r[103] = H),
        (r[104] = U),
        (r[105] = t))
      : (t = r[105]),
      (si = t));
    let n;
    (r[106] !== oi || r[107] !== si
      ? ((n = (e) => {
          !oi ||
            e.key !== `Escape` ||
            e.defaultPrevented ||
            e.repeat ||
            e.nativeEvent.isComposing ||
            (e.preventDefault(), e.stopPropagation(), si());
        }),
        (r[106] = oi),
        (r[107] = si),
        (r[108] = n))
      : (n = r[108]),
      (li = n),
      (ci = () => {
        pn.current?.querySelector(`[contenteditable='true']`)?.focus({ preventScroll: !0 });
      }),
      (r[82] = Me),
      (r[83] = Y),
      (r[84] = E),
      (r[85] = q),
      (r[86] = oe),
      (r[87] = T),
      (r[88] = V),
      (r[89] = W),
      (r[90] = H),
      (r[91] = U),
      (r[92] = oi),
      (r[93] = si),
      (r[94] = ci),
      (r[95] = li),
      (r[96] = ui),
      (r[97] = di));
  } else ((oi = r[92]), (si = r[93]), (ci = r[94]), (li = r[95]), (ui = r[96]), (di = r[97]));
  let fi = !E && !0,
    pi;
  r[109] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pi = () => {
        if (mn.current == null || mn.current.closest(`[hidden], [inert], [aria-hidden=true]`) != null)
          return !1;
        let e = pn.current?.querySelector(`[contenteditable='true']`);
        if (e == null) return !1;
        let t = e.closest(`[hidden], [inert], [aria-hidden=true]`);
        return t == null || !pn.current?.contains(t) || t === pn.current;
      }),
      (r[109] = pi))
    : (pi = r[109]);
  let mi;
  (r[110] === fi ? (mi = r[111]) : ((mi = { enabled: fi, isActive: pi }), (r[110] = fi), (r[111] = mi)),
    Ge(`focusMainChat`, q ? ui : ci, mi));
  let hi = k.formatMessage(
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
    gi = Un ? { label: hi, onToggle: di } : void 0,
    _i;
  r[112] === k
    ? (_i = r[113])
    : ((_i = k.formatMessage({
        id: `quickChat.resizeWidth`,
        defaultMessage: `Resize chat width`,
        description: `Accessible label for resizing the chat width`,
      })),
      (r[112] = k),
      (r[113] = _i));
  let vi = _i,
    yi;
  r[114] === k
    ? (yi = r[115])
    : ((yi = k.formatMessage({
        id: `quickChat.resizeHeight`,
        defaultMessage: `Resize chat height`,
        description: `Accessible label for resizing the chat height`,
      })),
      (r[114] = k),
      (r[115] = yi));
  let bi = yi,
    xi;
  r[116] === U
    ? (xi = r[117])
    : ((xi = () => {
        U(null);
      }),
      (r[116] = U),
      (r[117] = xi));
  let Si = {
      isCompact: Y,
      isChromeRevealed: rr,
      isDockedTop: L,
      isHidden: E,
      isMinimized: q,
      isMoving: G || jn || Tn,
      composerContentHeight: Fn,
      dockedReservePx: Nn > Fn ? Q + 10 : 0,
      shouldReduceMotion: j,
      onSubmitStart: xi,
    },
    Ci;
  r[118] !== E || r[119] !== b
    ? ((Ci = function (e) {
        !E &&
          b != null &&
          (e.button === 2 || (e.button === 0 && e.ctrlKey)) &&
          e.target instanceof Element &&
          (mn.current?.contains(e.target) ||
            e.target.closest(`[data-composer-overlay-floating-ui]`) != null) &&
          e.preventDefault();
      }),
      (r[118] = E),
      (r[119] = b),
      (r[120] = Ci))
    : (Ci = r[120]);
  let wi = Ci,
    Ti;
  r[121] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ti = function (e) {
        e.target instanceof Element &&
          (!mn.current?.contains(e.target) ||
            e.target.closest(`[data-composer-overlay-floating-ui]`) != null) &&
          e.stopPropagation();
      }),
      (r[121] = Ti))
    : (Ti = r[121]);
  let Ei = Ti,
    Di = c(Si),
    Oi = oi ? si : null,
    ki;
  r[122] === Rn
    ? (ki = r[123])
    : ((ki = (e) => {
        ((pn.current = e), Rn(e));
      }),
      (r[122] = Rn),
      (r[123] = ki));
  let Ai;
  r[124] !== Y || r[125] !== q || r[126] !== Re
    ? ((Ai =
        Re && !Y && !q
          ? (0, P.jsx)(`div`, { "aria-hidden": !0, className: `border-t border-default` })
          : null),
      (r[124] = Y),
      (r[125] = q),
      (r[126] = Re),
      (r[127] = Ai))
    : (Ai = r[127]);
  let ji;
  r[128] === Et
    ? (ji = r[129])
    : ((ji = { target: Et, homeBannerPlacement: `inline` }), (r[128] = Et), (r[129] = ji));
  let Mi = (0, P.jsxs)(`div`, {
      ref: ki,
      className: p(
        ae.floatingComposerInset,
        `mt-auto shrink-0`,
        Y && L && `[--composer-overlay-placement:bottom]`,
      ),
      onPointerDownCapture: wi,
      onContextMenu: Ei,
      children: [
        Ai,
        (0, P.jsx)(Je, {
          value: {
            ...Ke,
            hasComposerSurface: Re,
            isFloatingChatSurface: !0,
            floatingChatSurfaceRef: mn,
            floatingComposerPresentation: Si,
            transcriptTarget: Ot,
          },
          children: (0, P.jsx)($e, { value: Oi, children: (0, P.jsx)(_, { value: ji, children: Di }) }),
        }),
      ],
    }),
    Ni = v
      ? v({
          animateChrome: !j && !q && bn == null,
          isCompact: Y,
          isChromeRevealed: rr,
          menu: b?.({ isCompact: Y, isDragging: G, open: yt, onMinimize: $, onOpenChange: xt }),
          presentationToggle: gi,
          onMinimize: $,
        })
      : (0, P.jsxs)(Ct, {
          animateChrome: !j && !q && bn == null,
          isChromeRevealed: rr,
          isCompact: Y,
          presentationToggle: gi,
          children: [
            (0, P.jsxs)(`div`, {
              className: `flex min-w-0 flex-1 items-center gap-1`,
              children: [
                (0, P.jsx)(wt, { isCompact: Y, onMinimize: $ }),
                $n && st != null
                  ? (0, P.jsx)(`div`, {
                      className: `flex items-center justify-center`,
                      role: `status`,
                      "aria-label": st.type === `loading` ? or : cr,
                      children: (0, P.jsx)(Be, { statusState: st }),
                    })
                  : null,
                (0, P.jsx)(`h2`, {
                  id: lt,
                  className: `max-w-80 min-w-0 truncate text-base font-medium text-secondary`,
                  children: ge ?? he,
                }),
              ],
            }),
            b?.({ isCompact: Y, isDragging: G, open: yt, onMinimize: $, onOpenChange: xt }),
          ],
        }),
    Pi;
  r[130] !== wi || r[131] !== Ni
    ? ((Pi = (0, P.jsx)(`div`, {
        className: `contents`,
        onPointerDownCapture: wi,
        onContextMenu: Ei,
        children: Ni,
      })),
      (r[130] = wi),
      (r[131] = Ni),
      (r[132] = Pi))
    : (Pi = r[132]);
  let Fi = Pi,
    Ii = !q,
    Li = q ? `quick-chat` : void 0,
    Ri = +!!J,
    zi;
  r[133] === Ri ? (zi = r[134]) : ((zi = { opacity: Ri }), (r[133] = Ri), (r[134] = zi));
  let Bi = !q || void 0,
    Vi;
  r[135] === j
    ? (Vi = r[136])
    : ((Vi = j ? { duration: 0 } : { duration: 300 / 1e3, ease: pe }), (r[135] = j), (r[136] = Vi));
  let Hi = q ? `minimized` : `preview`,
    Ui = q && `pointer-events-auto`,
    Wi;
  r[137] === Ui
    ? (Wi = r[138])
    : ((Wi = p(`absolute inset-0 m-auto touch-none`, Ui)), (r[137] = Ui), (r[138] = Wi));
  let Gi = er ? lr : void 0,
    Ki;
  r[139] !== k || r[140] !== be || r[141] !== he
    ? ((Ki =
        be ??
        k.formatMessage(
          {
            id: `quickChat.restoreFloatingChat`,
            defaultMessage: `Restore floating chat: {title}`,
            description: `Accessible label for restoring a minimized floating chat`,
          },
          { title: he },
        )),
      (r[139] = k),
      (r[140] = be),
      (r[141] = he),
      (r[142] = Ki))
    : (Ki = r[142]);
  let qi = !E && q && Dn,
    Ji;
  r[143] === ui
    ? (Ji = r[144])
    : ((Ji = (e) => {
        (e.detail === 0 || !An.current) && ui();
      }),
      (r[143] = ui),
      (r[144] = Ji));
  let Yi;
  r[145] === W
    ? (Yi = r[146])
    : ((Yi = (e) => {
        e.pointerType !== `touch` && W(!0);
      }),
      (r[145] = W),
      (r[146] = Yi));
  let Xi;
  r[147] !== qe.type || r[148] !== W
    ? ((Xi = (e) => {
        qe.type === `ready` &&
          (e.key === `ArrowUp` || e.key === `ArrowDown`) &&
          (e.preventDefault(),
          (0, Lt.flushSync)(() => W(!0)),
          gn.current?.querySelector(`button`)?.focus({ preventScroll: !0 }));
      }),
      (r[147] = qe.type),
      (r[148] = W),
      (r[149] = Xi))
    : (Xi = r[149]);
  let Zi;
  r[150] !== R || r[151] !== Zt
    ? ((Zi = (e) => {
        Zt ||
          e.button !== 0 ||
          ((An.current = !1), e.currentTarget.setPointerCapture(e.pointerId), R.start(e));
      }),
      (r[150] = R),
      (r[151] = Zt),
      (r[152] = Zi))
    : (Zi = r[152]);
  let Qi;
  r[153] !== er || r[154] !== Yn || r[155] !== ve || r[156] !== at
    ? ((Qi =
        Yn && at != null && ve == null
          ? (0, P.jsx)(Be, { statusState: at })
          : (0, P.jsx)(Xe, { badgeEnabled: er, children: ve ?? (0, P.jsx)(ue, {}) })),
      (r[153] = er),
      (r[154] = Yn),
      (r[155] = ve),
      (r[156] = at),
      (r[157] = Qi))
    : (Qi = r[157]);
  let $i;
  r[158] !== Hi ||
  r[159] !== Wi ||
  r[160] !== Gi ||
  r[161] !== Ki ||
  r[162] !== qi ||
  r[163] !== Ji ||
  r[164] !== Yi ||
  r[165] !== Xi ||
  r[166] !== Zi ||
  r[167] !== Qi
    ? (($i = (0, P.jsx)(
        te,
        {
          ref: hn,
          className: Wi,
          "aria-description": Gi,
          "aria-label": Ki,
          autoFocus: qi,
          color: `ghostSecondary`,
          size: `composer`,
          uniform: !0,
          onClick: Ji,
          onPointerEnter: Yi,
          onKeyDown: Xi,
          onPointerDown: Zi,
          children: Qi,
        },
        Hi,
      )),
      (r[158] = Hi),
      (r[159] = Wi),
      (r[160] = Gi),
      (r[161] = Ki),
      (r[162] = qi),
      (r[163] = Ji),
      (r[164] = Yi),
      (r[165] = Xi),
      (r[166] = Zi),
      (r[167] = Qi),
      (r[168] = $i))
    : ($i = r[168]);
  let ea;
  r[169] !== Ii || r[170] !== Li || r[171] !== zi || r[172] !== Bi || r[173] !== Vi || r[174] !== $i
    ? ((ea = (0, P.jsx)(l.div, {
        className: `pointer-events-none absolute inset-0`,
        "aria-hidden": Ii,
        "data-pip-obstacle": Li,
        animate: zi,
        initial: !1,
        inert: Bi,
        transition: Vi,
        children: $i,
      })),
      (r[169] = Ii),
      (r[170] = Li),
      (r[171] = zi),
      (r[172] = Bi),
      (r[173] = Vi),
      (r[174] = $i),
      (r[175] = ea))
    : (ea = r[175]);
  let ta = ea,
    na = ut,
    ra = bn != null || !q,
    ia;
  r[176] !== Q || r[177] !== Dr
    ? ((ia = { height: Q, width: Dr }), (r[176] = Q), (r[177] = Dr), (r[178] = ia))
    : (ia = r[178]);
  let aa = D && rr,
    oa;
  r[179] !== gr || r[180] !== _r
    ? ((oa = { height: gr, width: _r }), (r[179] = gr), (r[180] = _r), (r[181] = oa))
    : (oa = r[181]);
  let sa;
  r[182] !== ta || r[183] !== ye
    ? ((sa =
        ye == null
          ? ta
          : (0, P.jsx)(t, {
              disableNative: !0,
              items: ye,
              children: (0, P.jsx)(`div`, { className: `contents`, children: ta }),
            })),
      (r[182] = ta),
      (r[183] = ye),
      (r[184] = sa))
    : (sa = r[184]);
  let ca;
  r[185] !== yr || r[186] !== br
    ? ((ca = { height: yr, width: br }), (r[185] = yr), (r[186] = br), (r[187] = ca))
    : (ca = r[187]);
  let la = !Zt,
    ua = J ? `panel` : s,
    da = ir ? void 0 : he,
    fa = ir ? lt : void 0,
    pa = u != null && void 0,
    ma;
  r[188] !== je || r[189] !== Cr || r[190] !== j
    ? ((ma = je ? { opacity: +!!Cr, translateY: !Cr && !j ? 8 : 0 } : {}),
      (r[188] = je),
      (r[189] = Cr),
      (r[190] = j),
      (r[191] = ma))
    : (ma = r[191]);
  let ha = K?.stage === `approaching` ? 0.95 : 1,
    ga;
  r[192] !== Dr || r[193] !== ma || r[194] !== ha
    ? ((ga = { ...ma, width: Dr, scale: ha }), (r[192] = Dr), (r[193] = ma), (r[194] = ha), (r[195] = ga))
    : (ga = r[195]);
  let _a = Y || void 0,
    va = q ? void 0 : `quick-chat`,
    ya = !Zt,
    ba =
      u == null
        ? void 0
        : {
            left: Pr - Nr.x,
            right: Math.max(Pr, F - Mr.width - Pr) - Nr.x,
            top: X + Pr - Nr.y,
            bottom: Math.max(Pr, Z - Mr.height - Pr) - Nr.y,
          },
    xa = u == null ? void 0 : 0,
    Sa;
  r[196] !== je || r[197] !== j
    ? ((Sa = je && !j ? { opacity: 0, translateY: 8 } : !1), (r[196] = je), (r[197] = j), (r[198] = Sa))
    : (Sa = r[198]);
  let Ca = u == null ? `dialog` : `region`,
    wa = L ? X + 10 : `auto`,
    Ta = L ? `auto` : 10 + _t,
    Ea = dr ? `50%` : `auto`,
    Da;
  r[199] !== fr || r[200] !== dr
    ? ((Da = !dr && { [fr]: 10 }), (r[199] = fr), (r[200] = dr), (r[201] = Da))
    : (Da = r[201]);
  let Oa = dr ? `-50% 0` : void 0,
    ka = Ar === `bottom-center` ? 0.5 : Number(Ar.endsWith(`right`)),
    Aa = +!Ar.startsWith(`top`),
    ja;
  r[202] !== xr ||
  r[203] !== z ||
  r[204] !== B ||
  r[205] !== wa ||
  r[206] !== Ta ||
  r[207] !== Ea ||
  r[208] !== Da ||
  r[209] !== Oa ||
  r[210] !== ka ||
  r[211] !== Aa
    ? ((ja = {
        height: xr,
        top: wa,
        bottom: Ta,
        left: Ea,
        right: `auto`,
        ...Da,
        translate: Oa,
        x: z,
        y: B,
        originX: ka,
        originY: Aa,
      }),
      (r[202] = xr),
      (r[203] = z),
      (r[204] = B),
      (r[205] = wa),
      (r[206] = Ta),
      (r[207] = Ea),
      (r[208] = Da),
      (r[209] = Oa),
      (r[210] = ka),
      (r[211] = Aa),
      (r[212] = ja))
    : (ja = r[212]);
  let Ma = j ? 0 : 300 / 1e3,
    Na;
  r[213] === Ma ? (Na = r[214]) : ((Na = { duration: Ma, ease: pe }), (r[213] = Ma), (r[214] = Na));
  let Pa;
  r[215] !== wr || r[216] !== Na
    ? ((Pa = { duration: wr, ease: pe, scale: Na }), (r[215] = wr), (r[216] = Na), (r[217] = Pa))
    : (Pa = r[217]);
  let Fa;
  r[218] !== E ||
  r[219] !== dt ||
  r[220] !== Cn ||
  r[221] !== W ||
  r[222] !== H ||
  r[223] !== U ||
  r[224] !== Wn
    ? ((Fa = (e) => {
        if (!(E || jt(e.currentTarget, e.relatedTarget, dt))) {
          if (e.relatedTarget == null) {
            let t = e.currentTarget;
            queueMicrotask(() => {
              (!t.ownerDocument.hasFocus() || !jt(t, t.ownerDocument.activeElement, dt)) && (Cn(!1), W(!1));
            });
            return;
          }
          (Cn(!1), W(!1), Wn && e.target.closest(`[inert]`) == null && (U(null), H(`compact`)));
        }
      }),
      (r[218] = E),
      (r[219] = dt),
      (r[220] = Cn),
      (r[221] = W),
      (r[222] = H),
      (r[223] = U),
      (r[224] = Wn),
      (r[225] = Fa))
    : (Fa = r[225]);
  let Ia;
  r[226] !== Un || r[227] !== Y || r[228] !== q || r[229] !== D || r[230] !== di
    ? ((Ia = (e) => {
        D &&
          !q &&
          Un &&
          !An.current &&
          !e.defaultPrevented &&
          e.target instanceof Element &&
          e.currentTarget.contains(e.target) &&
          !e.target.closest(`button, a, select, [role='button'], [role='menuitem']`) &&
          e.target.closest(`header[data-quick-chat-drag-handle]`) &&
          (Y &&
            !e.currentTarget.contains(document.activeElement) &&
            e.currentTarget.focus({ preventScroll: !0 }),
          di());
      }),
      (r[226] = Un),
      (r[227] = Y),
      (r[228] = q),
      (r[229] = D),
      (r[230] = di),
      (r[231] = Ia))
    : (Ia = r[231]);
  let La;
  r[232] === E
    ? (La = r[233])
    : ((La = (e) => {
        !E && An.current && e.detail > 0 && (e.preventDefault(), e.stopPropagation());
      }),
      (r[232] = E),
      (r[233] = La));
  let Ra;
  r[234] !== Xr || r[235] !== K || r[236] !== re || r[237] !== V || r[238] !== kn || r[239] !== U
    ? ((Ra = (e, t) => {
        let n = Xr(t);
        if (
          !(re?.(n.isPointerNearMinimizeTarget ? null : e) ?? !1) &&
          n.isNearDock &&
          n.dockPosition != null
        ) {
          let e = n.shouldMinimize ? `minimized` : `approaching`;
          (K?.stage !== e || K.dockPosition !== n.dockPosition) &&
            (kn({ dockPosition: n.dockPosition, stage: e }),
            (n.shouldMinimize || K?.stage === `minimized`) &&
              U({ target: n.shouldMinimize ? `minimized` : V }));
        } else
          K != null &&
            K.stage !== `restored` &&
            (kn({ ...K, stage: `restored` }), K.stage === `minimized` && U({ target: V }));
      }),
      (r[234] = Xr),
      (r[235] = K),
      (r[236] = re),
      (r[237] = V),
      (r[238] = kn),
      (r[239] = U),
      (r[240] = Ra))
    : (Ra = r[240]);
  let za;
  r[241] !== z ||
  r[242] !== B ||
  r[243] !== Xr ||
  r[244] !== $ ||
  r[245] !== K ||
  r[246] !== ie ||
  r[247] !== V ||
  r[248] !== Qr ||
  r[249] !== wn ||
  r[250] !== kn ||
  r[251] !== U ||
  r[252] !== $r
    ? ((za = (e, t) => {
        if (fn.current) return;
        let n = Xr(t);
        if (ie?.(n.isPointerNearMinimizeTarget ? null : e)) {
          (z.jump(0), B.jump(0), kn(null), U(null), wn(!1));
          return;
        }
        if (n.shouldMinimize) {
          let e = n.requestedDockPosition;
          (0, Lt.flushSync)(() => {
            (Qr(e, !0), $());
          });
        } else
          ($r(n.requestedDockPosition, !0),
            K != null &&
              K.stage !== `restored` &&
              (kn({ ...K, stage: `restored` }), K.stage === `minimized` && U({ target: V })));
        wn(!1);
      }),
      (r[241] = z),
      (r[242] = B),
      (r[243] = Xr),
      (r[244] = $),
      (r[245] = K),
      (r[246] = ie),
      (r[247] = V),
      (r[248] = Qr),
      (r[249] = wn),
      (r[250] = kn),
      (r[251] = U),
      (r[252] = $r),
      (r[253] = za))
    : (za = r[253]);
  let Ba;
  r[254] !== z || r[255] !== B || r[256] !== wn || r[257] !== W
    ? ((Ba = () => {
        (W(!1), (fn.current = !1), (An.current = !0), wn(!0), z.stop(), B.stop());
      }),
      (r[254] = z),
      (r[255] = B),
      (r[256] = wn),
      (r[257] = W),
      (r[258] = Ba))
    : (Ba = r[258]);
  let Va;
  r[259] === Cn
    ? (Va = r[260])
    : ((Va = (e) => {
        e.currentTarget.contains(e.target) && e.target.closest(`[data-composer-input]`) != null && Cn(!0);
      }),
      (r[259] = Cn),
      (r[260] = Va));
  let Ha;
  r[261] !== R || r[262] !== E
    ? ((Ha = (e) => {
        !E && e.key === `Escape` && ((An.current = !0), R.cancel());
      }),
      (r[261] = R),
      (r[262] = E),
      (r[263] = Ha))
    : (Ha = r[263]);
  let Ua;
  r[264] !== R || r[265] !== E || r[266] !== Zt
    ? ((Ua = (e) => {
        if (E || ((An.current = !1), Zt || e.button !== 0 || e.ctrlKey || !(e.target instanceof Element)))
          return;
        let t = e.target.closest(`[data-quick-chat-drag-handle]`),
          n = e.target.closest(
            `button, a, input, textarea, select, label, [contenteditable='true'], [role='button'], [role='menuitem'], [role='separator'], [data-composer-input-layout]`,
          );
        t == null ||
          (n != null && n !== t) ||
          (e.preventDefault(), t.setPointerCapture(e.pointerId), R.start(e));
      }),
      (r[264] = R),
      (r[265] = E),
      (r[266] = Zt),
      (r[267] = Ua))
    : (Ua = r[267]);
  let Wa;
  r[268] === W
    ? (Wa = r[269])
    : ((Wa = () => {
        gn.current?.contains(document.activeElement) || W(!1);
      }),
      (r[268] = W),
      (r[269] = Wa));
  let Ga;
  r[270] !== R ||
  r[271] !== li ||
  r[272] !== a ||
  r[273] !== ja ||
  r[274] !== Pa ||
  r[275] !== Fa ||
  r[276] !== Ia ||
  r[277] !== La ||
  r[278] !== Ra ||
  r[279] !== za ||
  r[280] !== Ba ||
  r[281] !== Va ||
  r[282] !== Ha ||
  r[283] !== Ua ||
  r[284] !== Wa ||
  r[285] !== da ||
  r[286] !== fa ||
  r[287] !== pa ||
  r[288] !== ga ||
  r[289] !== _a ||
  r[290] !== va ||
  r[291] !== ya ||
  r[292] !== ba ||
  r[293] !== xa ||
  r[294] !== Sa ||
  r[295] !== Ca
    ? ((Ga = {
        ref: a,
        "aria-label": da,
        "aria-labelledby": fa,
        "aria-modal": pa,
        animate: ga,
        "data-quick-chat-drag-handle": _a,
        "data-pip-obstacle": va,
        "data-state": `open`,
        drag: ya,
        dragConstraints: ba,
        dragElastic: xa,
        dragControls: R,
        dragListener: !1,
        dragMomentum: !1,
        initial: Sa,
        role: Ca,
        tabIndex: -1,
        style: ja,
        transition: Pa,
        onBlurCapture: Fa,
        onClick: Ia,
        onClickCapture: La,
        onDrag: Ra,
        onDragEnd: za,
        onDragStart: Ba,
        onFocusCapture: Va,
        onKeyDown: li,
        onKeyDownCapture: Ha,
        onPointerDownCapture: Ua,
        onPointerLeave: Wa,
      }),
      (r[270] = R),
      (r[271] = li),
      (r[272] = a),
      (r[273] = ja),
      (r[274] = Pa),
      (r[275] = Fa),
      (r[276] = Ia),
      (r[277] = La),
      (r[278] = Ra),
      (r[279] = za),
      (r[280] = Ba),
      (r[281] = Va),
      (r[282] = Ha),
      (r[283] = Ua),
      (r[284] = Wa),
      (r[285] = da),
      (r[286] = fa),
      (r[287] = pa),
      (r[288] = ga),
      (r[289] = _a),
      (r[290] = va),
      (r[291] = ya),
      (r[292] = ba),
      (r[293] = xa),
      (r[294] = Sa),
      (r[295] = Ca),
      (r[296] = Ga))
    : (Ga = r[296]);
  let Ka = u == null ? `floating` : `content`,
    qa = L ? `bottom` : `top`,
    Ja;
  r[297] !== z || r[298] !== B || r[299] !== Mn || r[300] !== U
    ? ((Ja = (e) => {
        (Mn(e), e && (U(null), z.stop(), B.stop()));
      }),
      (r[297] = z),
      (r[298] = B),
      (r[299] = Mn),
      (r[300] = U),
      (r[301] = Ja))
    : (Ja = r[301]);
  let Ya = Qn
      ? (0, P.jsx)(`div`, {
          ref: ne(gn, Xt, ce),
          className: p(
            `pointer-events-auto absolute inset-x-(--floating-panel-inset)`,
            !q && (L ? `top-full` : `bottom-full`),
            L ? `pt-3` : `pb-3`,
          ),
          "data-pip-obstacle": `quick-chat`,
          onClickCapture: () => {
            ((q ? hn.current : mn.current)?.focus({ preventScroll: !0 }), Cn(!1));
          },
          style: q ? Ur : void 0,
          children: (0, P.jsx)(ht, {
            items: qe.value.map((e) => ({
              id: e.id,
              content: (0, P.jsx)(ft, {
                title: e.title,
                preview: e.preview,
                onOpen: () => {
                  (e.onOpen(), Zn());
                },
                onDismiss: e.onDismiss,
              }),
            })),
            availableHeight: Math.max(0, (u?.height ?? mt) - X - _t - (q ? kr.height : vr) - 32 - 12),
            isDockedTop: L,
            shouldReduceMotion: j,
          }),
        })
      : null,
    Xa;
  r[302] !== Wt || r[303] !== Dt
    ? ((Xa = (e) => {
        (Dt(e), Wt(e));
      }),
      (r[302] = Wt),
      (r[303] = Dt),
      (r[304] = Xa))
    : (Xa = r[304]);
  let Za = L ? `top-full pt-2` : `bottom-full`,
    Qa;
  r[305] === Za
    ? (Qa = r[306])
    : ((Qa = p(
        `pointer-events-auto absolute inset-x-(--floating-panel-inset) flex flex-col gap-3 pb-3 empty:hidden`,
        Za,
      )),
      (r[305] = Za),
      (r[306] = Qa));
  let $a;
  r[307] !== J || r[308] !== Xa || r[309] !== Qa
    ? (($a = (0, P.jsx)(`div`, { ref: Xa, className: Qa, hidden: J })),
      (r[307] = J),
      (r[308] = Xa),
      (r[309] = Qa),
      (r[310] = $a))
    : ($a = r[310]);
  let eo = pr === 0 && `pt-2`,
    to = L ? `w-full` : `w-80`,
    no = dr && `left-1/2 -translate-x-1/2`,
    ro = !dr && (ur ? `left-0` : `right-0`),
    io = J && G && `invisible`,
    ao;
  r[311] !== eo || r[312] !== to || r[313] !== no || r[314] !== ro || r[315] !== io
    ? ((ao = p(
        ae.floatingComposerInset,
        `pointer-events-auto absolute top-full max-w-full empty:hidden`,
        eo,
        to,
        no,
        ro,
        io,
      )),
      (r[311] = eo),
      (r[312] = to),
      (r[313] = no),
      (r[314] = ro),
      (r[315] = io),
      (r[316] = ao))
    : (ao = r[316]);
  let oo;
  r[317] === pr ? (oo = r[318]) : ((oo = { marginTop: pr }), (r[317] = pr), (r[318] = oo));
  let so;
  r[319] !== h || r[320] !== Kt || r[321] !== ao || r[322] !== oo
    ? ((so = (0, P.jsx)(`div`, {
        ref: Kt,
        className: ao,
        style: oo,
        "data-pip-obstacle": `quick-chat`,
        children: h,
      })),
      (r[319] = h),
      (r[320] = Kt),
      (r[321] = ao),
      (r[322] = oo),
      (r[323] = so))
    : (so = r[323]);
  let co = J ? Hr : bn == null && !G ? `none` : Bt,
    lo = +!J,
    uo;
  r[324] !== co || r[325] !== lo
    ? ((uo = { clipPath: co, opacity: lo }), (r[324] = co), (r[325] = lo), (r[326] = uo))
    : (uo = r[326]);
  let fo = !q && `pointer-events-auto`,
    po;
  r[327] === fo
    ? (po = r[328])
    : ((po = p(`relative z-0 flex min-h-0 flex-1 flex-col`, fo)), (r[327] = fo), (r[328] = po));
  let mo = q ? !0 : void 0,
    ho;
  r[329] !== bn || r[330] !== j
    ? ((ho = j || bn == null ? { duration: 0 } : { duration: 300 / 1e3, ease: pe }),
      (r[329] = bn),
      (r[330] = j),
      (r[331] = ho))
    : (ho = r[331]);
  let go;
  r[332] !== J || r[333] !== Hr || r[334] !== V || r[335] !== bn || r[336] !== U
    ? ((go = (e) => {
        bn?.target === (J ? `minimized` : V) &&
          typeof e == `object` &&
          `clipPath` in e &&
          e.clipPath === (J ? Hr : Bt) &&
          U((e) => (e === bn ? null : e));
      }),
      (r[332] = J),
      (r[333] = Hr),
      (r[334] = V),
      (r[335] = bn),
      (r[336] = U),
      (r[337] = go))
    : (go = r[337]);
  let _o;
  r[338] !== Y || r[339] !== L || r[340] !== $ || r[341] !== D
    ? ((_o =
        !D &&
        (0, P.jsx)(`div`, {
          className: p(ct.minimizeButton, `absolute right-2 z-10`, L ? `top-full pt-1` : `bottom-full pb-1`),
          children: (0, P.jsx)(wt, { standalone: !0, isCompact: Y, onMinimize: $ }),
        })),
      (r[338] = Y),
      (r[339] = L),
      (r[340] = $),
      (r[341] = D),
      (r[342] = _o))
    : (_o = r[342]);
  let vo;
  r[343] !== Fi || r[344] !== Y || r[345] !== G || r[346] !== $ || r[347] !== b || r[348] !== D
    ? ((vo = D && (b?.({ contextMenuTrigger: Fi, isCompact: Y, isDragging: G, onMinimize: $ }) ?? Fi)),
      (r[343] = Fi),
      (r[344] = Y),
      (r[345] = G),
      (r[346] = $),
      (r[347] = b),
      (r[348] = D),
      (r[349] = vo))
    : (vo = r[349]);
  let yo = Y && `justify-end`,
    bo;
  r[350] === yo
    ? (bo = r[351])
    : ((bo = p(`relative flex min-h-0 flex-1 flex-col`, yo)), (r[350] = yo), (r[351] = bo));
  let xo = Y ? `hidden` : `flex`,
    So;
  r[352] === xo
    ? (So = r[353])
    : ((So = p(`mx-(--floating-panel-inset) min-h-0 flex-1 flex-col`, xo)), (r[352] = xo), (r[353] = So));
  let Co;
  r[354] !== Y || r[355] !== E || r[356] !== J || r[357] !== Te || r[358] !== H || r[359] !== U
    ? ((Co =
        !Y &&
        Te?.(() => {
          (U(null), H(`compact`));
        }, !E && !J)),
      (r[354] = Y),
      (r[355] = E),
      (r[356] = J),
      (r[357] = Te),
      (r[358] = H),
      (r[359] = U),
      (r[360] = Co))
    : (Co = r[360]);
  let wo;
  r[361] !== Y || r[362] !== Ht || r[363] !== So || r[364] !== Co
    ? ((wo = (0, P.jsx)(`div`, { ref: Ht, className: So, inert: Y, children: Co })),
      (r[361] = Y),
      (r[362] = Ht),
      (r[363] = So),
      (r[364] = Co),
      (r[365] = wo))
    : (wo = r[365]);
  let To = b?.({ contextMenuTrigger: Mi, isCompact: Y, isDragging: G, onMinimize: $ }) ?? Mi,
    Eo;
  r[366] !== bo || r[367] !== wo || r[368] !== To
    ? ((Eo = (0, P.jsxs)(`div`, { className: bo, children: [wo, To] })),
      (r[366] = bo),
      (r[367] = wo),
      (r[368] = To),
      (r[369] = Eo))
    : (Eo = r[369]);
  let Do;
  r[370] !== q ||
  r[371] !== uo ||
  r[372] !== po ||
  r[373] !== mo ||
  r[374] !== ho ||
  r[375] !== go ||
  r[376] !== _o ||
  r[377] !== vo ||
  r[378] !== Eo
    ? ((Do = (0, P.jsxs)(l.div, {
        "aria-hidden": q,
        animate: uo,
        className: po,
        "data-floating-chat-surface": !0,
        initial: !1,
        inert: mo,
        transition: ho,
        onAnimationComplete: go,
        children: [_o, vo, Eo],
      })),
      (r[370] = q),
      (r[371] = uo),
      (r[372] = po),
      (r[373] = mo),
      (r[374] = ho),
      (r[375] = go),
      (r[376] = _o),
      (r[377] = vo),
      (r[378] = Eo),
      (r[379] = Do))
    : (Do = r[379]);
  let Oo;
  r[380] !== na ||
  r[381] !== ii ||
  r[382] !== Y ||
  r[383] !== J ||
  r[384] !== Vr ||
  r[385] !== g ||
  r[386] !== ri ||
  r[387] !== bi ||
  r[388] !== vi ||
  r[389] !== j ||
  r[390] !== Ga ||
  r[391] !== Ka ||
  r[392] !== qa ||
  r[393] !== Ja ||
  r[394] !== Ya ||
  r[395] !== $a ||
  r[396] !== so ||
  r[397] !== Do ||
  r[398] !== ra ||
  r[399] !== ia ||
  r[400] !== aa ||
  r[401] !== oa ||
  r[402] !== sa ||
  r[403] !== ca ||
  r[404] !== la ||
  r[405] !== ua
    ? ((Oo = (0, P.jsxs)(na, {
        allowCompactResize: !0,
        animateSurface: ra,
        currentSize: ia,
        heightLabel: bi,
        isCompact: Y,
        isCompactChromeRevealed: aa,
        isMinimized: J,
        keepSurfaceInset: !0,
        maximumSize: oa,
        minimizedContent: sa,
        minimizedSurfaceBounds: Vr,
        minimumSize: ca,
        prefersCompactPresentation: !0,
        resizable: la,
        background: ua,
        sectionRef: mn,
        sectionProps: Ga,
        shouldReduceMotion: j,
        variant: Ka,
        verticalResizeEdge: qa,
        widthLabel: vi,
        onResize: ri,
        onResizeEnd: ii,
        onResizingChange: Ja,
        children: [Ya, $a, so, Do, g],
      })),
      (r[380] = na),
      (r[381] = ii),
      (r[382] = Y),
      (r[383] = J),
      (r[384] = Vr),
      (r[385] = g),
      (r[386] = ri),
      (r[387] = bi),
      (r[388] = vi),
      (r[389] = j),
      (r[390] = Ga),
      (r[391] = Ka),
      (r[392] = qa),
      (r[393] = Ja),
      (r[394] = Ya),
      (r[395] = $a),
      (r[396] = so),
      (r[397] = Do),
      (r[398] = ra),
      (r[399] = ia),
      (r[400] = aa),
      (r[401] = oa),
      (r[402] = sa),
      (r[403] = ca),
      (r[404] = la),
      (r[405] = ua),
      (r[406] = Oo))
    : (Oo = r[406]);
  let ko = Oo,
    Ao;
  r[407] === dt ? (Ao = r[408]) : ((Ao = { id: dt }), (r[407] = dt), (r[408] = Ao));
  let jo;
  return (
    r[409] !== ko || r[410] !== Ao
      ? ((jo = (0, P.jsx)(le, { value: Ao, children: ko })), (r[409] = ko), (r[410] = Ao), (r[411] = jo))
      : (jo = r[411]),
    jo
  );
}
function kt() {
  return 0;
}
function At() {
  return 0;
}
function jt(e, t, n) {
  return (
    t instanceof Node &&
    (e.contains(t) ||
      (t instanceof Element &&
        (t.closest(`[data-composer-overlay-floating-ui], [data-content-search-bar]`) != null ||
          t.closest(`[data-floating-chat-annotation-layer]`) != null ||
          t.closest(`[data-overlay-owner]`)?.getAttribute(`data-overlay-owner`) === n)))
  );
}
function Mt(e, t, n) {
  return Math.max(t, Math.min(e, n));
}
function Nt(e) {
  return (
    window.addEventListener(`resize`, e),
    () => {
      window.removeEventListener(`resize`, e);
    }
  );
}
function Pt() {
  return window.visualViewport?.height ?? window.innerHeight;
}
function Ft() {
  return window.visualViewport?.width ?? window.innerWidth;
}
var It, N, Lt, P, Rt, zt, Bt, Vt;
function Ht() {
  return (Ht = e(() => {
    ((It = v()),
      h(),
      E(),
      oe(),
      Se(),
      c(),
      ie(),
      (N = o()),
      (Lt = s()),
      ee(),
      je(),
      at(),
      D(),
      Ke(),
      Re(),
      Ce(),
      Qe(),
      Ve(),
      re(),
      me(),
      x(),
      he(),
      S(),
      we(),
      r(),
      d(),
      He(),
      qe(),
      T(),
      u(),
      ye(),
      j(),
      mt(),
      yt(),
      St(),
      Dt(),
      Oe(),
      O(),
      Ie(),
      lt(),
      Me(),
      (P = f()),
      (Rt = 400),
      (zt = 360),
      (Bt = `inset(0px 0px 0px 0px round var(--floating-panel-radius))`),
      (Vt = { type: `spring`, bounce: 0.16, duration: 0.42 }));
  }))();
}
export { Dt as a, St as c, wt as i, Ht as n, bt as o, Ct as r, xt as s, Ot as t };
//# sourceMappingURL=floating-chat-surface-1eaefa25765a.js.map
