import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  AMt as n,
  Amn as r,
  B6t as i,
  Bct as a,
  C8t as o,
  E as s,
  Eln as c,
  G as l,
  J_ as u,
  K as d,
  Mut as f,
  Opn as p,
  QKt as m,
  Rpn as h,
  Sln as g,
  Spn as _,
  T as v,
  Udt as y,
  Xdt as b,
  Y_ as x,
  atn as S,
  bln as C,
  ctn as w,
  dit as T,
  fit as E,
  gln as D,
  hmn as O,
  hz as k,
  it as A,
  itn as j,
  jfn as ee,
  kMt as M,
  kmn as N,
  lit as te,
  ltn as P,
  mtn as F,
  mz as ne,
  n as re,
  nln as I,
  plt as ie,
  qKt as ae,
  r as oe,
  rt as L,
  stn as se,
  t as ce,
  uit as le,
  utn as ue,
  vtn as R,
  wdt as de,
  xpn as fe,
  ytn as z,
  zpn as pe,
} from "./app-initial-f094ef01c64d.js";
import {
  a as me,
  i as he,
  m as ge,
  o as _e,
  p as ve,
  s as B,
  u as ye,
} from "./avatar-mascot-button-13f6c2a71e01.js";
import { n as be, t as xe } from "./realtime-voice-handoff-target-8621c40e6e89.js";
function Se() {
  let e = (0, Te.c)(4),
    t = m(o.petSize),
    n;
  e[0] === t ? (n = e[1]) : ((n = t === Ee ? null : we(t)), (e[0] = t), (e[1] = n));
  let r;
  return (e[2] === n ? (r = e[3]) : ((r = { mascotWidthPx: n }), (e[2] = n), (e[3] = r)), r);
}
function Ce(e) {
  if (e != null) return { [Oe]: `${we(e)}px` };
}
function we(e) {
  return Number.isFinite(e) ? Math.round(Math.min(224, Math.max(80, e))) : Ee;
}
var Te,
  Ee,
  De,
  Oe,
  ke = e(() => {
    ((Te = N()), i(), ae(), (Ee = o.petSize.default), (De = 192 / 208), (Oe = `--codex-pet-width`));
  });
function Ae(e) {
  return e.compactControlWidth * 2 + e.compactControlGap;
}
function V({ mascot: e, petControlsAppearance: t, showsNotificationBadge: n }) {
  let r = Fe({
    controlGap: t.hoverControlGap,
    controlSize: t.hoverControlSize,
    mascot: e,
    offsetX: t.hoverOffsetX,
    offsetY: t.hoverOffsetY,
    showsNotificationBadge: n,
    surfaceId: `voice-controls`,
  });
  return { left: e.left + e.width / 2 + r.x, top: e.top + r.y + t.hoverControlSize + Be };
}
function H({
  belowAnchorTop: e,
  mascotTop: t,
  pillHeight: n,
  visibleViewportBottom: r,
  visibleViewportTop: i,
}) {
  return e + n > r ? Math.max(i + ze, t - n - Be) : e;
}
function je({ mascot: e, orbScale: t = 1 }) {
  return { left: e.left + e.width / 2, top: e.top + (e.height * (1 + t)) / 2 - Ie - Le };
}
function Me({ mascot: e, visibleBounds: t }) {
  return Pe({ centerX: e.left + e.width / 2, visibleBounds: t });
}
function Ne({ anchor: e, visibleBounds: t }) {
  return Pe({ centerX: e.left, visibleBounds: t });
}
function Pe({ centerX: e, visibleBounds: t }) {
  return Math.max(0, 2 * Math.min(e - t.left - ze, t.left + t.width - e - ze));
}
function Fe({
  controlGap: e = Le,
  controlSize: t = Ie,
  layout: n = `arc`,
  mascot: r,
  offsetX: i = 0,
  offsetY: a = 0,
  showsNotificationBadge: o,
  surfaceId: s,
}) {
  let c = o ? 4 : 3,
    l;
  switch (s) {
    case `voice-microphone`:
      l = 0;
      break;
    case `voice-controls`:
      l = 1;
      break;
    case `mascot-badge`:
      l = 2;
      break;
    case `voice-output`:
      l = c - 1;
      break;
  }
  if (n === `row`) {
    let n = Math.max(0, t + e);
    return { x: Math.round((l - (c - 1) / 2) * n + i), y: Math.round(r.height + a) };
  }
  let u = t / 2,
    d = r.width / 2 + Re + u,
    f = 2 * Math.asin((t + e) / (2 * d)),
    p = (l - (c - 1) / 2) * f;
  return {
    x: Math.round(Math.sin(p) * d + i),
    y: Math.round(r.height / 2 + Math.cos(p) * d - u + a),
  };
}
var Ie,
  Le,
  Re,
  ze,
  Be,
  Ve = e(() => {
    ((Ie = 24), (Le = 8), (Re = 0), (ze = 8), (Be = 8));
  });
function He(e) {
  return e === `primary` ? `activity-primary` : `activity-secondary`;
}
var Ue,
  We = e(() => {
    Ue = [`activity-primary`, `activity-secondary`, `activity-tertiary`];
  });
function Ge(e) {
  let t = (0, U.c)(56),
    {
      children: n,
      className: r,
      animatesCssEntry: i,
      cssHeight: a,
      cssWidth: o,
      foregroundTransition: s,
      hidesForegroundImmediately: l,
      isStackedBehindPrimary: u,
      retainsForeground: d,
      nativeSurfaceId: f,
      publishesLayoutMeasurement: p,
      onContextMenu: m,
      onFocusCapture: g,
      onPointerEnter: _,
      onPointerLeave: v,
      onPointerMove: y,
      onMaterialUpdate: b,
      onUpdate: x,
      overflowContent: S,
      prefersReducedMotion: C,
      presentedHeight: w,
      prominence: T,
    } = e,
    E = i === void 0 || i,
    D = l !== void 0 && l,
    O = u !== void 0 && u,
    k = d !== void 0 && d,
    A = p === void 0 || p,
    j = C !== void 0 && C,
    ee = a == null ? o : void 0,
    M;
  t[0] !== a || t[1] !== ee
    ? ((M = { opacity: 1, height: a, width: ee }), (t[0] = a), (t[1] = ee), (t[2] = M))
    : (M = t[2]);
  let N;
  t[3] === E ? (N = t[4]) : ((N = E ? { opacity: 0 } : !1), (t[3] = E), (t[4] = N));
  let te = A ? `notification-tray-row` : void 0,
    P;
  t[5] !== a || t[6] !== o || t[7] !== w
    ? ((P = a == null ? void 0 : { height: w, width: o }),
      (t[5] = a),
      (t[6] = o),
      (t[7] = w),
      (t[8] = P))
    : (P = t[8]);
  let F;
  t[9] === j
    ? (F = t[10])
    : ((F = {
        duration: 0.18,
        ease: `easeOut`,
        height: j ? { duration: 0 } : { duration: 0.22, ease: [0.23, 1, 0.32, 1] },
      }),
      (t[9] = j),
      (t[10] = F));
  let ne;
  t[11] !== b || t[12] !== x
    ? ((ne = (e) => {
        (b?.(e), x?.());
      }),
      (t[11] = b),
      (t[12] = x),
      (t[13] = ne))
    : (ne = t[13]);
  let re = a != null && `h-full`,
    I;
  t[14] !== r || t[15] !== re
    ? ((I = h(r, re)), (t[14] = r), (t[15] = re), (t[16] = I))
    : (I = t[16]);
  let ie = O || void 0,
    ae;
  t[17] !== f || t[18] !== T
    ? ((ae = f ?? He(T)), (t[17] = f), (t[18] = T), (t[19] = ae))
    : (ae = t[19]);
  let oe = O && !k ? 0 : 1,
    L;
  t[20] === oe ? (L = t[21]) : ((L = { opacity: oe }), (t[20] = oe), (t[21] = L));
  let se = a == null ? `flow-root` : `h-full rounded-[inherit]`,
    ce = D && O && `invisible`,
    le;
  t[22] !== se || t[23] !== ce
    ? ((le = h(se, ce)), (t[22] = se), (t[23] = ce), (t[24] = le))
    : (le = t[24]);
  let ue;
  t[25] === s
    ? (ue = t[26])
    : ((ue = s ?? { duration: 0.18, ease: `easeOut` }), (t[25] = s), (t[26] = ue));
  let R = a == null ? void 0 : `relative h-full overflow-clip rounded-[inherit]`,
    de;
  t[27] === n
    ? (de = t[28])
    : ((de = (0, W.jsx)(`div`, {
        className: `flow-root`,
        "data-avatar-overlay-activity-content": !0,
        children: n,
      })),
      (t[27] = n),
      (t[28] = de));
  let fe;
  t[29] !== R || t[30] !== de
    ? ((fe = (0, W.jsx)(`div`, { className: R, children: de })),
      (t[29] = R),
      (t[30] = de),
      (t[31] = fe))
    : (fe = t[31]);
  let z;
  t[32] !== S || t[33] !== L || t[34] !== le || t[35] !== ue || t[36] !== fe
    ? ((z = (0, W.jsxs)(c.div, {
        animate: L,
        className: le,
        initial: !1,
        transition: ue,
        children: [fe, S],
      })),
      (t[32] = S),
      (t[33] = L),
      (t[34] = le),
      (t[35] = ue),
      (t[36] = fe),
      (t[37] = z))
    : (z = t[37]);
  let pe;
  t[38] !== I || t[39] !== ie || t[40] !== ae || t[41] !== z
    ? ((pe = (0, W.jsx)(Ye, {
        className: I,
        "data-avatar-overlay-stacked-behind-primary": ie,
        nativeSurfaceId: ae,
        variant: `activity`,
        children: z,
      })),
      (t[38] = I),
      (t[39] = ie),
      (t[40] = ae),
      (t[41] = z),
      (t[42] = pe))
    : (pe = t[42]);
  let me;
  return (
    t[43] !== m ||
    t[44] !== g ||
    t[45] !== _ ||
    t[46] !== v ||
    t[47] !== y ||
    t[48] !== te ||
    t[49] !== P ||
    t[50] !== F ||
    t[51] !== ne ||
    t[52] !== pe ||
    t[53] !== M ||
    t[54] !== N
      ? ((me = (0, W.jsx)(c.div, {
          animate: M,
          initial: N,
          className: `group relative z-10 w-full text-start no-drag`,
          "data-avatar-overlay-measure": te,
          role: `listitem`,
          style: P,
          transition: F,
          onContextMenu: m,
          onFocusCapture: g,
          onPointerEnter: _,
          onPointerLeave: v,
          onPointerMove: y,
          onUpdate: ne,
          children: pe,
        })),
        (t[43] = m),
        (t[44] = g),
        (t[45] = _),
        (t[46] = v),
        (t[47] = y),
        (t[48] = te),
        (t[49] = P),
        (t[50] = F),
        (t[51] = ne),
        (t[52] = pe),
        (t[53] = M),
        (t[54] = N),
        (t[55] = me))
      : (me = t[55]),
    me
  );
}
function Ke(e) {
  let t = (0, U.c)(16),
    n,
    r,
    i,
    a,
    o,
    s;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]), (s = t[6]))
    : (({ children: n, className: r, nativeSurfaceId: i, size: o, tone: s, ...a } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s));
  let c = s === void 0 ? `neutral` : s,
    l;
  t[7] === r ? (l = t[8]) : ((l = h(he.CompactMaterial, r)), (t[7] = r), (t[8] = l));
  let u = o === `small` ? `compact-small` : `compact-micro`,
    d;
  return (
    t[9] !== n || t[10] !== i || t[11] !== a || t[12] !== l || t[13] !== u || t[14] !== c
      ? ((d = (0, W.jsx)(Ye, {
          ...a,
          className: l,
          nativeSurfaceId: i,
          tone: c,
          variant: u,
          children: n,
        })),
        (t[9] = n),
        (t[10] = i),
        (t[11] = a),
        (t[12] = l),
        (t[13] = u),
        (t[14] = c),
        (t[15] = d))
      : (d = t[15]),
    d
  );
}
function qe(e) {
  let t = (0, U.c)(12),
    { notificationCount: n } = e,
    r = F[1],
    i = F[2],
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = z({ height: 54, left: 0, top: 0, width: 315 }, r)), (t[0] = a))
    : (a = t[0]);
  let o = a,
    s;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = z({ height: 54, left: 0, top: 0, width: 315 }, i)), (t[1] = s))
    : (s = t[1]);
  let c = s,
    l;
  t[2] === n ? (l = t[3]) : ((l = R(n)), (t[2] = n), (t[3] = l));
  let u;
  t[4] === l ? (u = t[5]) : ((u = { height: l }), (t[4] = l), (t[5] = u));
  let d;
  t[6] === n
    ? (d = t[7])
    : ((d =
        n > 2
          ? (0, W.jsx)(Ye, {
              className: he.ActivityBacking,
              "data-avatar-overlay-stacked-behind-primary": !0,
              nativeSurfaceId: `activity-tertiary`,
              style: c,
              variant: `activity`,
            })
          : null),
      (t[6] = n),
      (t[7] = d));
  let f;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, W.jsx)(Ye, {
        className: he.ActivityBacking,
        "data-avatar-overlay-stacked-behind-primary": !0,
        nativeSurfaceId: `activity-secondary`,
        style: o,
        variant: `activity`,
      })),
      (t[8] = f))
    : (f = t[8]);
  let p;
  return (
    t[9] !== u || t[10] !== d
      ? ((p = (0, W.jsxs)(`div`, {
          "aria-hidden": `true`,
          className: `absolute top-0 right-0 left-0`,
          "data-avatar-overlay-measure": `notification-tray-row`,
          style: u,
          children: [d, f],
        })),
        (t[9] = u),
        (t[10] = d),
        (t[11] = p))
      : (p = t[11]),
    p
  );
}
function Je(e) {
  let t = (0, U.c)(19),
    {
      children: n,
      emptyWidth: r,
      onBlurCapture: i,
      onFocusCapture: a,
      onPointerDown: o,
      onPointerEnter: s,
      onPointerLeave: l,
      onSubmit: u,
      onUpdate: d,
      width: f,
    } = e,
    p;
  t[0] === f ? (p = t[1]) : ((p = { opacity: 1, width: f }), (t[0] = f), (t[1] = p));
  let m;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { opacity: 0 }), (t[2] = m))
    : (m = t[2]);
  let g;
  t[3] === r ? (g = t[4]) : ((g = { opacity: 0, width: r }), (t[3] = r), (t[4] = g));
  let _, v;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = {
        opacity: { duration: 0.18, ease: [0.16, 1, 0.3, 1] },
        width: { bounce: 0.22, type: `spring`, visualDuration: 0.32 },
      }),
      (v = h(he.Material, he.QuickChatMaterial)),
      (t[5] = _),
      (t[6] = v))
    : ((_ = t[5]), (v = t[6]));
  let y;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = { maxWidth: `calc(100vw - 12px)` }), (t[7] = y))
    : (y = t[7]);
  let b;
  return (
    t[8] !== n ||
    t[9] !== i ||
    t[10] !== a ||
    t[11] !== o ||
    t[12] !== s ||
    t[13] !== l ||
    t[14] !== u ||
    t[15] !== d ||
    t[16] !== p ||
    t[17] !== g
      ? ((b = (0, W.jsx)(c.form, {
          animate: p,
          exit: m,
          initial: g,
          transition: _,
          className: v,
          "data-avatar-overlay-hit-region": `notification-composer`,
          "data-avatar-overlay-material": `css`,
          "data-avatar-overlay-native-corner-radius": `20`,
          "data-avatar-overlay-native-surface-id": `composer`,
          style: y,
          onBlurCapture: i,
          onFocusCapture: a,
          onPointerDown: o,
          onPointerEnter: s,
          onPointerLeave: l,
          onSubmit: u,
          onUpdate: d,
          children: n,
        })),
        (t[8] = n),
        (t[9] = i),
        (t[10] = a),
        (t[11] = o),
        (t[12] = s),
        (t[13] = l),
        (t[14] = u),
        (t[15] = d),
        (t[16] = p),
        (t[17] = g),
        (t[18] = b))
      : (b = t[18]),
    b
  );
}
function Ye(e) {
  let t = (0, U.c)(15),
    n,
    r,
    i,
    a,
    o;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]), (a = t[4]), (o = t[5]))
    : (({ className: n, nativeSurfaceId: r, tone: a, variant: o, ...i } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o));
  let s = o ?? r,
    c = (o === `quick-chat` || o === `quick-chat-stash`) && he.QuickChatMaterial,
    l;
  t[6] !== n || t[7] !== c
    ? ((l = h(he.Material, c, n)), (t[6] = n), (t[7] = c), (t[8] = l))
    : (l = t[8]);
  let u;
  return (
    t[9] !== s || t[10] !== r || t[11] !== i || t[12] !== l || t[13] !== a
      ? ((u = (0, W.jsx)(`div`, {
          ...i,
          className: l,
          "data-avatar-overlay-compact-tone": a,
          "data-avatar-overlay-material": `css`,
          "data-avatar-overlay-material-variant": s,
          "data-avatar-overlay-native-surface-id": r,
        })),
        (t[9] = s),
        (t[10] = r),
        (t[11] = i),
        (t[12] = l),
        (t[13] = a),
        (t[14] = u))
      : (u = t[14]),
    u
  );
}
function Xe(e) {
  let t = (0, U.c)(10),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ className: n, variant: i, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let a;
  t[4] === n ? (a = t[5]) : ((a = h(he.Control, n)), (t[4] = n), (t[5] = a));
  let o;
  return (
    t[6] !== r || t[7] !== a || t[8] !== i
      ? ((o = (0, W.jsx)(M, {
          ...r,
          className: a,
          "data-avatar-overlay-control": i,
          "data-avatar-overlay-material": `css`,
        })),
        (t[6] = r),
        (t[7] = a),
        (t[8] = i),
        (t[9] = o))
      : (o = t[9]),
    o
  );
}
function Ze(e) {
  let t = (0, U.c)(27),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]),
      (f = t[11]))
    : (({
        className: n,
        as: a,
        hasInlineSubtitle: o,
        hasWaitingRequest: s,
        isExpanded: c,
        isLoading: l,
        isOverflowContent: u,
        notificationKind: r,
        truncate: d,
        variant: f,
        ...i
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f));
  let p = a === void 0 ? `span` : a,
    m = o !== void 0 && o,
    g = s !== void 0 && s,
    _ = c !== void 0 && c,
    v = l !== void 0 && l,
    y = u !== void 0 && u,
    b = d !== void 0 && d,
    x = f === void 0 ? `subtitle` : f,
    S = v && `loading-shimmer-pure-text`,
    C;
  t[12] !== n || t[13] !== S
    ? ((C = h(he.ActivityText, S, n)), (t[12] = n), (t[13] = S), (t[14] = C))
    : (C = t[14]);
  let w = (g && _) || void 0,
    T = m || void 0,
    E = v || void 0,
    D = y ? `true` : void 0,
    O = b && v ? `truncate` : void 0,
    k = g || void 0,
    A;
  return (
    t[15] !== p ||
    t[16] !== r ||
    t[17] !== i ||
    t[18] !== C ||
    t[19] !== w ||
    t[20] !== T ||
    t[21] !== E ||
    t[22] !== D ||
    t[23] !== O ||
    t[24] !== k ||
    t[25] !== x
      ? ((A = (0, W.jsx)(p, {
          ...i,
          className: C,
          "data-avatar-overlay-activity-text": x,
          "data-avatar-overlay-expanded-waiting-request": w,
          "data-avatar-overlay-inline-subtitle": T,
          "data-avatar-overlay-loading": E,
          "data-avatar-overlay-notification-kind": r,
          "data-avatar-overlay-overflow-content": D,
          "data-avatar-overlay-shimmer-overflow": O,
          "data-avatar-overlay-waiting-request": k,
        })),
        (t[15] = p),
        (t[16] = r),
        (t[17] = i),
        (t[18] = C),
        (t[19] = w),
        (t[20] = T),
        (t[21] = E),
        (t[22] = D),
        (t[23] = O),
        (t[24] = k),
        (t[25] = x),
        (t[26] = A))
      : (A = t[26]),
    A
  );
}
var U,
  W,
  Qe = e(() => {
    ((U = N()), pe(), I(), i(), n(), We(), me(), (W = O()));
  });
function $e(e, t) {
  let n = e.closest(`[data-avatar-overlay-content-frame="true"]`);
  if (n == null) return null;
  let r = e.getBoundingClientRect(),
    i = n.getBoundingClientRect(),
    a = window.getComputedStyle(e),
    o = document.createElement(`div`);
  Object.assign(o.style, {
    border: a.border,
    boxSizing: a.boxSizing,
    direction: a.direction,
    font: a.font,
    left: `0`,
    letterSpacing: a.letterSpacing,
    overflowWrap: a.overflowWrap,
    padding: a.padding,
    position: `fixed`,
    tabSize: a.tabSize,
    textAlign: a.textAlign,
    textIndent: a.textIndent,
    textTransform: a.textTransform,
    top: `0`,
    visibility: `hidden`,
    whiteSpace: e instanceof HTMLInputElement ? `pre` : a.whiteSpace,
    width: a.width,
    wordBreak: a.wordBreak,
  });
  let s = t ?? (e.selectionDirection === `backward` ? e.selectionStart : e.selectionEnd);
  o.textContent = e.value.slice(0, s ?? e.value.length);
  let c = document.createElement(`span`);
  ((c.textContent = `​`), o.append(c), document.body.append(o));
  let l = o.getBoundingClientRect(),
    u = c.getBoundingClientRect();
  o.remove();
  let d = e.offsetWidth === 0 ? 1 : r.width / e.offsetWidth;
  return {
    x: (r.left - i.left + u.left - l.left) / d - e.scrollLeft,
    y: (r.top - i.top + u.top - l.top + u.height / 2) / d - e.scrollTop,
  };
}
function et(e) {
  return [
    e.value,
    e.selectionStart,
    e.selectionEnd,
    e.selectionDirection,
    e.scrollLeft,
    e.scrollTop,
  ].join(`\0`);
}
var tt = e(() => {});
function nt(e) {
  let t = (0, rt.c)(46),
    { children: n, getBounds: r, opacity: i, shape: a } = e,
    o = (0, it.useId)(),
    s;
  t[0] === r ? (s = t[1]) : ((s = () => r().left - 28), (t[0] = r), (t[1] = s));
  let l = C(s),
    u;
  t[2] === r ? (u = t[3]) : ((u = () => r().top - 28), (t[2] = r), (t[3] = u));
  let d = C(u),
    f;
  t[4] === r ? (f = t[5]) : ((f = () => r().width + 56), (t[4] = r), (t[5] = f));
  let p = C(f),
    m;
  t[6] === r ? (m = t[7]) : ((m = () => r().height + 56), (t[6] = r), (t[7] = m));
  let h = C(m),
    g = `${o}-filter`,
    _,
    v,
    y;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, G.jsx)(`feGaussianBlur`, { in: `SourceAlpha`, stdDeviation: `8` })),
      (v = (0, G.jsx)(`feOffset`, { dy: `3` })),
      (y = (0, G.jsx)(`feComponentTransfer`, {
        children: (0, G.jsx)(`feFuncA`, { type: `linear`, slope: `0.2` }),
      })),
      (t[8] = _),
      (t[9] = v),
      (t[10] = y))
    : ((_ = t[8]), (v = t[9]), (y = t[10]));
  let b;
  t[11] !== h || t[12] !== g || t[13] !== p || t[14] !== l || t[15] !== d
    ? ((b = (0, G.jsxs)(c.filter, {
        id: g,
        colorInterpolationFilters: `sRGB`,
        filterUnits: `userSpaceOnUse`,
        x: l,
        y: d,
        width: p,
        height: h,
        children: [_, v, y],
      })),
      (t[11] = h),
      (t[12] = g),
      (t[13] = p),
      (t[14] = l),
      (t[15] = d),
      (t[16] = b))
    : (b = t[16]);
  let x = `${o}-mask`,
    S;
  t[17] !== h || t[18] !== p || t[19] !== l || t[20] !== d
    ? ((S = (0, G.jsx)(c.rect, { x: l, y: d, width: p, height: h, fill: `white` })),
      (t[17] = h),
      (t[18] = p),
      (t[19] = l),
      (t[20] = d),
      (t[21] = S))
    : (S = t[21]);
  let w;
  t[22] === a
    ? (w = t[23])
    : ((w = (0, G.jsx)(c.path, { d: a, fill: `black` })), (t[22] = a), (t[23] = w));
  let T;
  t[24] !== n ||
  t[25] !== h ||
  t[26] !== x ||
  t[27] !== S ||
  t[28] !== w ||
  t[29] !== p ||
  t[30] !== l ||
  t[31] !== d
    ? ((T = (0, G.jsxs)(c.mask, {
        id: x,
        maskUnits: `userSpaceOnUse`,
        x: l,
        y: d,
        width: p,
        height: h,
        children: [S, w, n],
      })),
      (t[24] = n),
      (t[25] = h),
      (t[26] = x),
      (t[27] = S),
      (t[28] = w),
      (t[29] = p),
      (t[30] = l),
      (t[31] = d),
      (t[32] = T))
    : (T = t[32]);
  let E;
  t[33] !== T || t[34] !== b
    ? ((E = (0, G.jsxs)(`defs`, { children: [b, T] })), (t[33] = T), (t[34] = b), (t[35] = E))
    : (E = t[35]);
  let D = `url(#${o}-mask)`,
    O = `url(#${o}-filter)`,
    k;
  t[36] !== a || t[37] !== O
    ? ((k = (0, G.jsx)(c.path, { d: a, fill: `black`, filter: O })),
      (t[36] = a),
      (t[37] = O),
      (t[38] = k))
    : (k = t[38]);
  let A;
  t[39] !== i || t[40] !== D || t[41] !== k
    ? ((A = (0, G.jsx)(c.g, { mask: D, opacity: i, children: k })),
      (t[39] = i),
      (t[40] = D),
      (t[41] = k),
      (t[42] = A))
    : (A = t[42]);
  let j;
  return (
    t[43] !== E || t[44] !== A
      ? ((j = (0, G.jsxs)(G.Fragment, { children: [E, A] })), (t[43] = E), (t[44] = A), (t[45] = j))
      : (j = t[45]),
    j
  );
}
var rt,
  it,
  G,
  at = e(() => {
    ((rt = N()), I(), i(), (it = t(r(), 1)), (G = O()));
  });
function ot({ left: e, top: t, width: n, height: r }, i) {
  let a = Math.min(i, n / 2, r / 2),
    o = e + n,
    s = t + r;
  return `M${e + a},${t}H${o - a}A${a},${a} 0 0 1 ${o},${t + a}V${s - a}A${a},${a} 0 0 1 ${o - a},${s}H${e + a}A${a},${a} 0 0 1 ${e},${s - a}V${t + a}A${a},${a} 0 0 1 ${e + a},${t}Z`;
}
var st = e(() => {});
function ct(e, t, n = !1) {
  let r = se(e, n),
    i = e.quickChat?.workArea ?? e.visibleBounds,
    a = 172 + (t ? 48 : 0);
  return {
    ...r,
    left: Math.max(
      i.left + 16,
      Math.min(i.left + i.width - a - 16, e.mascot.left + e.mascot.width / 2 - 110),
    ),
    width: a,
  };
}
var lt = e(() => {
  i();
});
function ut(e) {
  return {
    left: e.bar.left + e.target.composerLeft,
    top: e.bar.top + e.target.composerTop,
    width: e.target.composerWidth,
    height: e.target.composerHeight,
  };
}
function dt({
  draft: e,
  hasNotifications: t,
  hasAppshots: n = !1,
  hasPetAccessory: r = !1,
  isEditorActive: i = !1,
  isExpanded: a,
  isVoiceActive: o = !1,
  layout: s,
  stashAppearance: c = S,
}) {
  let l = a ? `expanded` : `collapsed`;
  (o && !i && !e.length && !n ? (l = `voice`) : (e.length > 0 || n) && !o && (l = `composing`),
    s.quickChat?.stashedEdge != null && (l = `stashed`));
  let u = l === `stashed`,
    d = s.quickChat?.workArea ?? s.visibleBounds,
    f = 40;
  u ? (f = Math.min(c.tabHeight, d.height)) : n && (f = pt);
  let p = n && s.placement.startsWith(`top`),
    m = se(s, r),
    h = { ...m, left: s.mascot.left + (s.mascot.width - 368) / 2 },
    g = m.left - h.left,
    _ = u ? c.tabWidth : ue(t),
    v = w(s, _, r).left - h.left;
  u && (v += ((_ - 26) / 2) * (s.quickChat?.stashedEdge === `left` ? 1 : -1));
  let y = u ? 12 : 20,
    b = u ? y : 0,
    x = h.width - mt * (t ? 2 : 1),
    C = l === `collapsed` || u,
    T = l === `composing`,
    E = l === `voice`,
    D = 1;
  u ? (D = 0) : T && (D = 0.65);
  let O = C ? v + _ - h.width : g,
    k = u ? v + _ / 2 - 40 / 2 : x + 8 + (T ? g - mt : O),
    A = x,
    ee = C ? v : g;
  C
    ? ((A = _), u || (k = P(v, 1)))
    : T
      ? (A = h.width)
      : E && ((ee = ct(s, t, r).left - h.left), (A = 40), (k = ee + mt));
  let M = k;
  t && !u && (M = E ? k + 124 + 8 : C ? P(v, 2) : k + (T ? 0 : mt));
  let N = 0;
  return (
    u
      ? (N = (0, ft.default)((40 - f) / 2, d.top - h.top, d.top + d.height - h.top - f))
      : p && (N = (0, ft.default)(40 - f, d.top - h.top, d.top + d.height - h.top - f)),
    {
      bar: h,
      state: l,
      target: {
        composerLeft: ee - (s.quickChat?.stashedEdge === `left` ? b : 0),
        composerWidth: A + b,
        composerHeight: f,
        composerTop: N,
        composerRadius: y,
        composerEdgeBleed: b,
        stashProgress: +!!u,
        voiceLeft: k,
        voiceWidth: E ? 124 : 40,
        badgeLeft: M,
        orbScale: D,
        compactProgress: +!!C,
        inputOpacity: C || E ? 0 : 1,
        orbIconOpacity: +!T,
        orbIconBlurRadius: T ? j.contentHiddenBlurRadiusPx : 0,
      },
    }
  );
}
var ft,
  pt,
  mt,
  ht = e(() => {
    ((ft = t(oe(), 1)), i(), lt(), (pt = 116), (mt = 48));
  }),
  gt,
  K,
  _t = e(() => {
    (r(),
      (gt = O()),
      (K = (e) =>
        (0, gt.jsx)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, gt.jsx)(`path`, {
            d: `M11.3493 11.5281V12.063C11.3493 13.1798 10.0585 13.8018 9.18511 13.1058L7.23518 11.5521C7.05811 11.411 6.83841 11.3342 6.61201 11.3342H5.49994C4.67151 11.3342 3.99994 10.6626 3.99994 9.83422V6.55767C3.99994 5.9113 4.17933 5.32893 4.64255 4.98367M7.69879 4.08067L9.19314 2.87858C10.0513 2.25762 11.3493 2.61663 11.3493 4.20164V7.68849M2.4375 2.43744L13.6875 13.6874`,
            stroke: `currentColor`,
            strokeWidth: 1.05,
            strokeLinecap: `round`,
          }),
        })));
  });
function vt(e) {
  let t = (0, St.c)(30),
    { reduceMotion: n } = e,
    r = (0, Ct.useId)(),
    i = (0, Ct.useId)(),
    [a, o] = (0, Ct.useState)(!1),
    s = n ? 0.15 : Dt,
    l = !n && `pulsing-dot`,
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = h(`flex size-10 items-center justify-center`, l)), (t[0] = l), (t[1] = u));
  let d;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = { animationDelay: `${Dt}s` }), (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] !== s || t[4] !== n
    ? ((f = n
        ? null
        : (0, q.jsx)(`animate`, {
            attributeName: `stdDeviation`,
            calcMode: `linear`,
            dur: `${s}s`,
            fill: `freeze`,
            keyTimes: Ot.join(`;`),
            values: Ot.map(yt).join(`;`),
          })),
      (t[3] = s),
      (t[4] = n),
      (t[5] = f))
    : (f = t[5]);
  let p;
  t[6] === f
    ? (p = t[7])
    : ((p = (0, q.jsx)(`feGaussianBlur`, { in: `SourceGraphic`, result: `blur`, children: f })),
      (t[6] = f),
      (t[7] = p));
  let m;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, q.jsx)(`feColorMatrix`, {
        in: `blur`,
        type: `matrix`,
        values: `1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 24 -10`,
      })),
      (t[8] = m))
    : (m = t[8]);
  let g;
  t[9] !== r || t[10] !== p
    ? ((g = (0, q.jsx)(`defs`, {
        children: (0, q.jsxs)(`filter`, {
          id: r,
          colorInterpolationFilters: `sRGB`,
          height: `200%`,
          width: `200%`,
          x: `-50%`,
          y: `-50%`,
          children: [p, m],
        }),
      })),
      (t[9] = r),
      (t[10] = p),
      (t[11] = g))
    : (g = t[11]);
  let _ = a ? void 0 : `url(#${r})`,
    v;
  t[12] !== s || t[13] !== a
    ? ((v = kt.map((e, t) => {
        let n = Math.abs(t - (kt.length - 1) / 2),
          r = t === Math.floor(kt.length / 2),
          i = 0.14 - n * 0.014,
          l = 0.2 + n * 0.018,
          u = 0.26 + n * 0.018,
          d = Et + e.x + e.width / 2,
          f = Et + e.y + e.height / 2,
          p = Ot.map((t) => bt(e.width, wt, xt(l, 1, t))),
          m = Ot.map((t) => bt(e.height, wt, xt(u, 1, t))),
          h = Ot.map((e, t) => {
            let n = xt(i, 0.72, e);
            return bt(d, Tt, n) - p[t] / 2;
          }),
          g = Ot.map((e, t) => bt(f, Tt, e) - m[t] / 2);
        return (0, q.jsx)(
          c.rect,
          {
            animate: {
              height: m,
              rx: p.map((e, t) => Math.min(e, m[t]) / 2),
              width: p,
              x: h,
              y: g,
            },
            display: a && !r ? `none` : void 0,
            initial: {
              height: e.height,
              rx: e.width / 2,
              width: e.width,
              x: Et + e.x,
              y: Et + e.y,
            },
            onAnimationComplete: r
              ? () => {
                  o(!0);
                }
              : void 0,
            transition: { duration: s, ease: `linear`, times: Ot },
          },
          e.x,
        );
      })),
      (t[12] = s),
      (t[13] = a),
      (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] !== _ || t[16] !== v
    ? ((y = (0, q.jsx)(`g`, { fill: `white`, filter: _, children: v })),
      (t[15] = _),
      (t[16] = v),
      (t[17] = y))
    : (y = t[17]);
  let b;
  t[18] !== i || t[19] !== y
    ? ((b = (0, q.jsx)(`mask`, {
        id: i,
        height: `40`,
        maskUnits: `userSpaceOnUse`,
        width: `40`,
        x: `0`,
        y: `0`,
        children: y,
      })),
      (t[18] = i),
      (t[19] = y),
      (t[20] = b))
    : (b = t[20]);
  let x = `url(#${i})`,
    S;
  t[21] === x
    ? (S = t[22])
    : ((S = (0, q.jsx)(`rect`, { fill: `currentColor`, height: `40`, mask: x, width: `40` })),
      (t[21] = x),
      (t[22] = S));
  let C;
  t[23] !== b || t[24] !== S || t[25] !== g
    ? ((C = (0, q.jsxs)(`svg`, {
        "aria-hidden": `true`,
        className: `size-10`,
        viewBox: `0 0 40 40`,
        children: [g, b, S],
      })),
      (t[23] = b),
      (t[24] = S),
      (t[25] = g),
      (t[26] = C))
    : (C = t[26]);
  let w;
  return (
    t[27] !== C || t[28] !== u
      ? ((w = (0, q.jsx)(`span`, { className: u, style: d, children: C })),
        (t[27] = C),
        (t[28] = u),
        (t[29] = w))
      : (w = t[29]),
    w
  );
}
function yt(e) {
  return Math.sin(e * Math.PI) * 6 * J;
}
function bt(e, t, n) {
  return e + (t - e) * n;
}
function xt(e, t, n) {
  let r = Math.min(Math.max((n - e) / (t - e), 0), 1);
  return r * r * (3 - 2 * r);
}
var St,
  Ct,
  q,
  J,
  wt,
  Tt,
  Et,
  Dt,
  Ot,
  kt,
  At = e(() => {
    ((St = N()),
      pe(),
      I(),
      (Ct = t(r(), 1)),
      (q = O()),
      (J = 40 / 112),
      (wt = 30 * J),
      (Tt = 20),
      (Et = 12),
      (Dt = 0.36),
      (Ot = Array.from({ length: 21 }, (e, t) => t / 20)),
      (kt = [
        { height: 5.16699, width: 1.5, x: 2.25, y: 5.41675 },
        { height: 12.16695, width: 1.5, x: 5.69434, y: 1.91675 },
        { height: 8.16694, width: 1.5, x: 9.13867, y: 3.74976 },
        { height: 4.16695, width: 1.5, x: 12.584, y: 5.91675 },
      ]));
  });
function jt(e) {
  let t = (0, Mt.c)(75),
    {
      audioControlOpacity: n,
      audioControlWidth: r,
      reduceMotion: i,
      showsAudioControls: a,
      voice: o,
    } = e,
    s = p(),
    d = !a || void 0,
    f;
  t[0] !== s || t[1] !== o.microphoneMuted
    ? ((f = s.formatMessage(o.microphoneMuted ? Nt.unmuteMicrophone : Nt.muteMicrophone)),
      (t[0] = s),
      (t[1] = o.microphoneMuted),
      (t[2] = f))
    : (f = t[2]);
  let m = o.phase !== `active`,
    h = !a,
    g;
  t[3] !== n || t[4] !== r
    ? ((g = { opacity: n, width: r }), (t[3] = n), (t[4] = r), (t[5] = g))
    : (g = t[5]);
  let _;
  t[6] === o.microphoneMuted
    ? (_ = t[7])
    : ((_ = o.microphoneMuted
        ? (0, Y.jsx)(ce, { className: `icon-sm shrink-0` })
        : (0, Y.jsx)(u, { className: `icon-sm shrink-0` })),
      (t[6] = o.microphoneMuted),
      (t[7] = _));
  let v;
  t[8] !== d ||
  t[9] !== f ||
  t[10] !== m ||
  t[11] !== h ||
  t[12] !== g ||
  t[13] !== _ ||
  t[14] !== o.microphoneMuted ||
  t[15] !== o.onToggleMicrophoneMute
    ? ((v = (0, Y.jsx)(c.button, {
        "aria-hidden": d,
        "aria-label": f,
        "aria-pressed": o.microphoneMuted,
        className: `flex h-full shrink-0 cursor-interaction items-center justify-center overflow-hidden text-default focus-visible:outline-none`,
        "data-quick-chat-control": !0,
        disabled: m,
        inert: h,
        initial: !1,
        style: g,
        type: `button`,
        onClick: o.onToggleMicrophoneMute,
        children: _,
      })),
      (t[8] = d),
      (t[9] = f),
      (t[10] = m),
      (t[11] = h),
      (t[12] = g),
      (t[13] = _),
      (t[14] = o.microphoneMuted),
      (t[15] = o.onToggleMicrophoneMute),
      (t[16] = v))
    : (v = t[16]);
  let y;
  t[17] !== r || t[18] !== a
    ? ((y = a
        ? (0, Y.jsx)(c.span, {
            "aria-hidden": `true`,
            className: `pointer-events-none absolute inset-y-2 w-px bg-border`,
            "data-quick-chat-divider": `voice`,
            style: { left: r },
          })
        : null),
      (t[17] = r),
      (t[18] = a),
      (t[19] = y))
    : (y = t[19]);
  let b;
  t[20] === s ? (b = t[21]) : ((b = s.formatMessage(Nt.stop)), (t[20] = s), (t[21] = b));
  let x = a ? `` : `surface`,
    S;
  t[22] === o ? (S = t[23]) : ((S = () => void o.onStop?.()), (t[22] = o), (t[23] = S));
  let C;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { scale: 1 }), (t[24] = C))
    : (C = t[24]);
  let w;
  t[25] === i ? (w = t[26]) : ((w = !i && { scale: wt / 28 }), (t[25] = i), (t[26] = w));
  let E;
  t[27] === i ? (E = t[28]) : ((E = i ? { duration: 0 } : ye.filter), (t[27] = i), (t[28] = E));
  let D;
  t[29] !== o.activity || t[30] !== o.phase || t[31] !== o.presentationAnchorRef
    ? ((D = (0, Y.jsx)(l, {
        glowEnabled: !1,
        placement: `center`,
        presentationAnchorRef: o.presentationAnchorRef,
        phase: o.phase,
        voiceActivity: o.activity,
      })),
      (t[29] = o.activity),
      (t[30] = o.phase),
      (t[31] = o.presentationAnchorRef),
      (t[32] = D))
    : (D = t[32]);
  let O;
  t[33] !== D || t[34] !== o.handoff || t[35] !== o.usesPresentationFadeTransition
    ? ((O = (0, Y.jsx)(xe, {
        className: `pointer-events-none relative size-full overflow-hidden rounded-full group-hover:opacity-70`,
        handoff: o.handoff,
        surface: `global-overlay`,
        usesFadeTransition: o.usesPresentationFadeTransition,
        children: D,
      })),
      (t[33] = D),
      (t[34] = o.handoff),
      (t[35] = o.usesPresentationFadeTransition),
      (t[36] = O))
    : (O = t[36]);
  let k;
  t[37] === a
    ? (k = t[38])
    : ((k = a
        ? (0, Y.jsx)(T, {
            className: `icon-sm pointer-events-none absolute inset-0 m-auto opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100`,
          })
        : null),
      (t[37] = a),
      (t[38] = k));
  let A;
  t[39] !== w || t[40] !== E || t[41] !== O || t[42] !== k
    ? ((A = (0, Y.jsxs)(c.span, {
        animate: C,
        className: `relative size-7 shrink-0`,
        initial: w,
        transition: E,
        children: [O, k],
      })),
      (t[39] = w),
      (t[40] = E),
      (t[41] = O),
      (t[42] = k),
      (t[43] = A))
    : (A = t[43]);
  let j;
  t[44] !== x || t[45] !== S || t[46] !== A || t[47] !== b
    ? ((j = (0, Y.jsx)(`button`, {
        "aria-label": b,
        className: `group relative flex h-full min-w-0 flex-1 cursor-interaction items-center justify-center text-secondary focus-visible:outline-none`,
        "data-quick-chat-control": x,
        type: `button`,
        onClick: S,
        children: A,
      })),
      (t[44] = x),
      (t[45] = S),
      (t[46] = A),
      (t[47] = b),
      (t[48] = j))
    : (j = t[48]);
  let ee;
  t[49] !== r || t[50] !== a
    ? ((ee = a
        ? (0, Y.jsx)(c.span, {
            "aria-hidden": `true`,
            className: `pointer-events-none absolute inset-y-2 w-px bg-border`,
            "data-quick-chat-divider": `voice`,
            style: { right: r },
          })
        : null),
      (t[49] = r),
      (t[50] = a),
      (t[51] = ee))
    : (ee = t[51]);
  let M = !a || void 0,
    N;
  t[52] !== s || t[53] !== o.muted
    ? ((N = s.formatMessage(o.muted ? Nt.unmuteOutput : Nt.muteOutput)),
      (t[52] = s),
      (t[53] = o.muted),
      (t[54] = N))
    : (N = t[54]);
  let te = o.phase !== `active`,
    P = !a,
    F;
  t[55] !== n || t[56] !== r
    ? ((F = { opacity: n, width: r }), (t[55] = n), (t[56] = r), (t[57] = F))
    : (F = t[57]);
  let ne;
  t[58] === o.muted
    ? (ne = t[59])
    : ((ne = o.muted
        ? (0, Y.jsx)(K, { className: `icon-sm shrink-0` })
        : (0, Y.jsx)(L, { className: `icon-sm shrink-0` })),
      (t[58] = o.muted),
      (t[59] = ne));
  let re;
  t[60] !== M ||
  t[61] !== N ||
  t[62] !== te ||
  t[63] !== P ||
  t[64] !== F ||
  t[65] !== ne ||
  t[66] !== o.muted ||
  t[67] !== o.onToggleMute
    ? ((re = (0, Y.jsx)(c.button, {
        "aria-hidden": M,
        "aria-label": N,
        "aria-pressed": o.muted,
        className: `flex h-full shrink-0 cursor-interaction items-center justify-center overflow-hidden text-default focus-visible:outline-none`,
        "data-quick-chat-control": !0,
        disabled: te,
        inert: P,
        initial: !1,
        style: F,
        type: `button`,
        onClick: o.onToggleMute,
        children: ne,
      })),
      (t[60] = M),
      (t[61] = N),
      (t[62] = te),
      (t[63] = P),
      (t[64] = F),
      (t[65] = ne),
      (t[66] = o.muted),
      (t[67] = o.onToggleMute),
      (t[68] = re))
    : (re = t[68]);
  let I;
  return (
    t[69] !== j || t[70] !== ee || t[71] !== re || t[72] !== v || t[73] !== y
      ? ((I = (0, Y.jsxs)(`div`, {
          className: `relative flex size-full items-center rounded-full select-none`,
          children: [v, y, j, ee, re],
        })),
        (t[69] = j),
        (t[70] = ee),
        (t[71] = re),
        (t[72] = v),
        (t[73] = y),
        (t[74] = I))
      : (I = t[74]),
    I
  );
}
var Mt,
  Y,
  Nt,
  Pt = e(() => {
    ((Mt = N()),
      I(),
      _(),
      ge(),
      re(),
      x(),
      _t(),
      A(),
      E(),
      d(),
      be(),
      At(),
      (Y = O()),
      (Nt = fe({
        stop: {
          id: `avatarOverlay.stopRealtimeVoice`,
          defaultMessage: `Stop voice chat`,
          description: `Accessible label and tooltip for stopping realtime voice from the floating avatar`,
        },
        muteMicrophone: {
          id: `avatarOverlay.muteMicrophone`,
          defaultMessage: `Mute microphone`,
          description: `Accessible label and tooltip for muting microphone input from the floating avatar`,
        },
        unmuteMicrophone: {
          id: `avatarOverlay.unmuteMicrophone`,
          defaultMessage: `Unmute microphone`,
          description: `Accessible label and tooltip for unmuting microphone input from the floating avatar`,
        },
        muteOutput: {
          id: `avatarOverlay.muteOutput`,
          defaultMessage: `Mute voice chat`,
          description: `Accessible label and tooltip for showing realtime voice output as captions from the floating avatar`,
        },
        unmuteOutput: {
          id: `avatarOverlay.unmuteOutput`,
          defaultMessage: `Unmute voice chat`,
          description: `Accessible label and tooltip for resuming realtime voice audio output from the floating avatar`,
        },
      })));
  }),
  Ft,
  It,
  Lt,
  Rt,
  zt,
  Bt,
  Vt,
  Ht = e(() => {
    ((Ft = `_glassGroup_1mxqq_1`),
      (It = `_quickChatCompactSecondDivider_1mxqq_93`),
      (Lt = `_quickChatCompactFirstDivider_1mxqq_97`),
      (Rt = `_activityBell_1mxqq_114`),
      (zt = `_activityBadge_1mxqq_114`),
      (Bt = `_orb_1mxqq_134`),
      (Vt = {
        glassGroup: Ft,
        quickChatCompactSecondDivider: It,
        quickChatCompactFirstDivider: Lt,
        activityBell: Rt,
        activityBadge: zt,
        orb: Bt,
      }));
  });
function Ut(e) {
  let t = (0, rn.c)(424),
    {
      animatesPresentation: n,
      appshotCaptureResponse: r,
      appshotCaptureStartsCollapsed: i,
      appshots: o,
      areActivityPillsVisible: s,
      areControlsVisible: l,
      canStash: u,
      canStartVoice: d,
      children: m,
      draft: _,
      flightGlassRects: b,
      hasNotifications: x,
      isExpanded: T,
      isAppshotCapturePending: E,
      isSending: O,
      isEditorActive: k,
      isMinimized: A,
      isVoiceSelected: M,
      layout: N,
      notificationBadge: P,
      petAccessory: F,
      stashAppearance: re,
      realtimeVoiceSurface: I,
      onCaretPointChange: ae,
      onDragPointerCancel: oe,
      onDragPointerDown: L,
      onDragPointerMove: se,
      onDragPointerUp: ce,
      onDraftChange: le,
      onFocusChange: R,
      onGeometryAnimationFrame: fe,
      onLostDragPointerCapture: z,
      onRemoveAppshot: pe,
      onStartVoice: me,
      onSubmit: he,
      onToggleActivity: ge,
      onVoiceSelectionChange: B,
      presentedComposerHeight: ye,
      presentedComposerTop: be,
    } = e,
    xe = n === void 0 || n,
    Se = i !== void 0 && i,
    Ce = l === void 0 || l,
    we = u !== void 0 && u,
    Te = T === void 0 || T,
    Ee = E !== void 0 && E,
    De = O !== void 0 && O,
    Oe = k !== void 0 && k,
    ke = A !== void 0 && A,
    V = re === void 0 ? S : re,
    H = p(),
    je = (0, X.useId)(),
    Me = (0, X.useRef)(null),
    Ne = (0, X.useRef)(null),
    Pe = (0, X.useRef)(null),
    Fe = (0, X.useRef)(null),
    Ie;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ie = { distance: 0, startedAt: 0, lastAt: 0, triggered: !1 }), (t[0] = Ie))
    : (Ie = t[0]);
  let Le = (0, X.useRef)(Ie),
    Re = (0, X.useRef)(!1),
    ze = (0, X.useRef)(!1),
    Be = (0, X.useRef)(!1),
    Ve = D(),
    He = I?.phase === `starting`,
    Ue = I != null && I.phase !== `inactive`,
    We = !!o?.length || Ee,
    Ge = r !== void 0,
    Ke = !!o?.length || (Ee && Ge),
    qe = Se && Ee && !Ge,
    Je,
    Xe,
    Ze,
    U,
    W,
    Qe;
  if (
    t[1] !== _ ||
    t[2] !== x ||
    t[3] !== Ke ||
    t[4] !== We ||
    t[5] !== Oe ||
    t[6] !== Te ||
    t[7] !== Ue ||
    t[8] !== He ||
    t[9] !== N ||
    t[10] !== F ||
    t[11] !== V ||
    t[12] !== qe
  ) {
    Xe = dt({
      draft: _,
      hasAppshots: Ke,
      hasPetAccessory: F != null,
      hasNotifications: x,
      isEditorActive: Oe,
      isExpanded: Te && !qe,
      isVoiceActive: Ue && !He,
      layout: N,
      stashAppearance: V,
    });
    let e =
      We && !Ke
        ? dt({
            draft: _,
            hasAppshots: !0,
            hasPetAccessory: F != null,
            hasNotifications: x,
            isEditorActive: Oe,
            isExpanded: !0,
            isVoiceActive: Ue && !He,
            layout: N,
            stashAppearance: V,
          })
        : Xe;
    (({ left: Je, top: W, width: Qe } = Xe.bar),
      ({ target: U } = Xe),
      (Ze = ut(e)),
      (t[1] = _),
      (t[2] = x),
      (t[3] = Ke),
      (t[4] = We),
      (t[5] = Oe),
      (t[6] = Te),
      (t[7] = Ue),
      (t[8] = He),
      (t[9] = N),
      (t[10] = F),
      (t[11] = V),
      (t[12] = qe),
      (t[13] = Je),
      (t[14] = Xe),
      (t[15] = Ze),
      (t[16] = U),
      (t[17] = W),
      (t[18] = Qe));
  } else ((Je = t[13]), (Xe = t[14]), (Ze = t[15]), (U = t[16]), (W = t[17]), (Qe = t[18]));
  let tt = Ze,
    rt;
  t[19] !== x || t[20] !== N || t[21] !== F
    ? ((rt = w(N, ue(x), F != null)), (t[19] = x), (t[20] = N), (t[21] = F), (t[22] = rt))
    : (rt = t[22]);
  let it = rt,
    G = I?.petControlsAppearance ?? j,
    at = Ae(G) / it.width,
    st = G.compactControlHeight / 40,
    ct = g(+!ke),
    lt;
  t[23] !== at || t[24] !== ct
    ? ((lt = () => at + (1 - at) * ct.get()), (t[23] = at), (t[24] = ct), (t[25] = lt))
    : (lt = t[25]);
  let ft = C(lt),
    pt;
  t[26] !== st || t[27] !== ct
    ? ((pt = () => {
        let e = 40 * window.devicePixelRatio;
        return Math.round((st + (1 - st) * ct.get()) * e) / e;
      }),
      (t[26] = st),
      (t[27] = ct),
      (t[28] = pt))
    : (pt = t[28]);
  let mt = C(pt),
    ht = g(+!ke),
    gt = ke ? P?.nativeTint : void 0,
    K = Xe.state === `stashed`,
    _t =
      N.quickChat?.stashedEdge ??
      N.quickChat?.nearestStashEdge ??
      (N.placement.endsWith(`start`) ? `left` : `right`),
    yt =
      N.visibleBounds.left -
      Je +
      (_t === `left` ? -V.width - V.offsetX : N.visibleBounds.width + V.offsetX),
    bt = U.composerTop + (U.composerHeight - V.height) / 2 + V.offsetY,
    xt;
  t[29] !== V.height || t[30] !== V.width || t[31] !== yt || t[32] !== bt
    ? ((xt = { left: yt, top: bt, width: V.width, height: V.height }),
      (t[29] = V.height),
      (t[30] = V.width),
      (t[31] = yt),
      (t[32] = bt),
      (t[33] = xt))
    : (xt = t[33]);
  let St = xt,
    Ct = _.length > 0,
    q = Xe.state === `composing`,
    J = Xe.state === `voice`,
    wt = Xe.state === `expanded` || q,
    Tt = De && !Ct && !wt,
    Et = wt ? cn : ln,
    Dt = sn.damping / Et,
    Ot = sn.stiffness / Et ** 2,
    kt;
  t[34] !== Dt || t[35] !== Ot
    ? ((kt = { type: sn.type, damping: Dt, mass: sn.mass, stiffness: Ot }),
      (t[34] = Dt),
      (t[35] = Ot),
      (t[36] = kt))
    : (kt = t[36]);
  let At = kt,
    Mt = r?.transitionSpringDampingFraction,
    Y = r?.transitionSpringResponse,
    Nt;
  t[37] !== Mt || t[38] !== Y
    ? ((Nt = v({ transitionSpringDampingFraction: Mt, transitionSpringResponse: Y })),
      (t[37] = Mt),
      (t[38] = Y),
      (t[39] = Nt))
    : (Nt = t[39]);
  let Pt = Nt,
    Ft = Se && Ee && Ge ? Pt : At,
    It = g(U.composerLeft),
    Lt = g(U.composerWidth),
    Rt = g(U.composerHeight),
    zt = ye ?? Rt,
    Bt = g(U.composerTop),
    Ht = be ?? Bt,
    Ut = g(U.composerRadius),
    dn = g(U.composerEdgeBleed),
    fn = g(U.stashProgress),
    pn = C(fn, nn),
    mn = C(fn, tn),
    hn = g(U.voiceLeft),
    Q = g(U.voiceWidth),
    gn;
  t[40] === Q
    ? (gn = t[41])
    : ((gn = () => Math.max(0, ((Q.get() - 40) * un) / 84)), (t[40] = Q), (t[41] = gn));
  let _n = C(gn),
    vn;
  t[42] === _n
    ? (vn = t[43])
    : ((vn = () => (0, an.default)((_n.get() / un - 0.5) * 2, 0, 1)), (t[42] = _n), (t[43] = vn));
  let yn = C(vn),
    bn = g(U.badgeLeft),
    xn = g(U.orbScale),
    Sn = g(ke ? 0 : U.compactProgress),
    Cn = C(Sn, en),
    wn = g(U.inputOpacity),
    Tn = g(U.orbIconOpacity),
    En = g(U.orbIconBlurRadius),
    Dn = C(En, ve),
    On;
  t[44] !== bn || t[45] !== hn || t[46] !== Q || t[47] !== J
    ? ((On = () =>
        J ? 1 : (0, an.default)((bn.get() - hn.get() - Q.get() + 40) / (40 / 2) - 1, 0, 1)),
      (t[44] = bn),
      (t[45] = hn),
      (t[46] = Q),
      (t[47] = J),
      (t[48] = On))
    : (On = t[48]);
  let kn = C(On),
    An;
  t[49] !== kn || t[50] !== pn || t[51] !== Tn
    ? ((An = () => Tn.get() * pn.get() * kn.get()),
      (t[49] = kn),
      (t[50] = pn),
      (t[51] = Tn),
      (t[52] = An))
    : (An = t[52]);
  let jn = C(An),
    Mn;
  t[53] !== kn || t[54] !== Sn
    ? ((Mn = () => Sn.get() * kn.get()), (t[53] = kn), (t[54] = Sn), (t[55] = Mn))
    : (Mn = t[55]);
  let Nn = C(Mn),
    Pn;
  t[56] === kn
    ? (Pn = t[57])
    : ((Pn = () => (kn.get() === 1 ? `auto` : `none`)), (t[56] = kn), (t[57] = Pn));
  let Fn = C(Pn),
    In;
  t[58] !== x ||
  t[59] !== bn ||
  t[60] !== Cn ||
  t[61] !== zt ||
  t[62] !== It ||
  t[63] !== Ht ||
  t[64] !== Lt ||
  t[65] !== xn ||
  t[66] !== hn ||
  t[67] !== Q
    ? ((In = function () {
        let e = Cn.get(),
          t = e * xn.get(),
          n = (Q.get() - 40 + e) * xn.get(),
          r = [
            { left: It.get(), top: Ht.get(), width: Lt.get(), height: zt.get() },
            { left: hn.get() + (Q.get() - n) / 2, top: (40 - t) / 2, width: n, height: t },
          ];
        return (
          x && r.push({ left: bn.get() + (40 - t) / 2, top: (40 - t) / 2, width: t, height: t }), r
        );
      }),
      (t[58] = x),
      (t[59] = bn),
      (t[60] = Cn),
      (t[61] = zt),
      (t[62] = It),
      (t[63] = Ht),
      (t[64] = Lt),
      (t[65] = xn),
      (t[66] = hn),
      (t[67] = Q),
      (t[68] = In))
    : (In = t[68]);
  let Ln = In,
    Rn;
  t[69] !== Ln || t[70] !== fn || t[71] !== V.glassSpacing
    ? ((Rn = function () {
        let [e, t] = Ln(),
          n = t.left - e.left - e.width,
          r = Math.min(j.compactGlassSpacing, Math.max(0, j.hoverControlGap - n)),
          i = (0, an.default)(fn.get(), 0, 1);
        return r + (V.glassSpacing - r) * i;
      }),
      (t[69] = Ln),
      (t[70] = fn),
      (t[71] = V.glassSpacing),
      (t[72] = Rn))
    : (Rn = t[72]);
  let zn = Rn,
    Bn = C(zn),
    Vn;
  t[73] !== b || t[74] !== Ln || t[75] !== K || t[76] !== St
    ? ((Vn = function () {
        return [
          { ...St, width: K ? St.width : 0 },
          ...Ln(),
          ...(K ? [] : (b?.get().values() ?? [])),
        ];
      }),
      (t[73] = b),
      (t[74] = Ln),
      (t[75] = K),
      (t[76] = St),
      (t[77] = Vn))
    : (Vn = t[77]);
  let Hn = Vn,
    Un;
  t[78] !== Hn || t[79] !== Qe
    ? ((Un = function () {
        let e = Hn(),
          t = Math.min(0, ...e.map($t)),
          n = Math.min(0, ...e.map(Qt));
        return {
          left: t,
          top: n,
          width: Math.max(Qe, ...e.map(Zt)) - t,
          height: Math.max(40, ...e.map(Xt)) - n,
        };
      }),
      (t[78] = Hn),
      (t[79] = Qe),
      (t[80] = Un))
    : (Un = t[80]);
  let Wn = Un,
    Gn = C(Wn),
    Kn;
  t[81] !== Hn || t[82] !== Ut
    ? ((Kn = () =>
        Hn()
          .map((e, t) => {
            if (e.width <= 0 || e.height <= 0) return ``;
            let n = e.height / 2;
            return (t === 0 ? (n = 12) : t === 1 && (n = Ut.get()), ot(e, n));
          })
          .join(``)),
      (t[81] = Hn),
      (t[82] = Ut),
      (t[83] = Kn))
    : (Kn = t[83]);
  let qn = C(Kn),
    Jn;
  t[84] === zn ? (Jn = t[85]) : ((Jn = () => zn() / 4), (t[84] = zn), (t[85] = Jn));
  let Yn = C(Jn),
    Xn = +!ke,
    Zn = +!ke,
    Qn = ke ? 0 : U.compactProgress,
    $n;
  t[86] !== Xn ||
  t[87] !== Zn ||
  t[88] !== Qn ||
  t[89] !== U.badgeLeft ||
  t[90] !== U.composerEdgeBleed ||
  t[91] !== U.composerHeight ||
  t[92] !== U.composerLeft ||
  t[93] !== U.composerRadius ||
  t[94] !== U.composerTop ||
  t[95] !== U.composerWidth ||
  t[96] !== U.inputOpacity ||
  t[97] !== U.orbIconBlurRadius ||
  t[98] !== U.orbIconOpacity ||
  t[99] !== U.orbScale ||
  t[100] !== U.stashProgress ||
  t[101] !== U.voiceLeft ||
  t[102] !== U.voiceWidth
    ? (($n = {
        "--quick-chat-expansion": Xn,
        "--quick-chat-controls-opacity": Zn,
        "--quick-chat-composer-left": U.composerLeft,
        "--quick-chat-composer-width": U.composerWidth,
        "--quick-chat-composer-height": U.composerHeight,
        "--quick-chat-composer-top": U.composerTop,
        "--quick-chat-composer-radius": U.composerRadius,
        "--quick-chat-composer-edge-bleed": U.composerEdgeBleed,
        "--quick-chat-stash-progress": U.stashProgress,
        "--quick-chat-voice-left": U.voiceLeft,
        "--quick-chat-voice-width": U.voiceWidth,
        "--quick-chat-badge-left": U.badgeLeft,
        "--quick-chat-orb-scale": U.orbScale,
        "--quick-chat-compact-progress": Qn,
        "--quick-chat-input-opacity": U.inputOpacity,
        "--quick-chat-orb-icon-opacity": U.orbIconOpacity,
        "--quick-chat-orb-icon-blur": U.orbIconBlurRadius,
      }),
      (t[86] = Xn),
      (t[87] = Zn),
      (t[88] = Qn),
      (t[89] = U.badgeLeft),
      (t[90] = U.composerEdgeBleed),
      (t[91] = U.composerHeight),
      (t[92] = U.composerLeft),
      (t[93] = U.composerRadius),
      (t[94] = U.composerTop),
      (t[95] = U.composerWidth),
      (t[96] = U.inputOpacity),
      (t[97] = U.orbIconBlurRadius),
      (t[98] = U.orbIconOpacity),
      (t[99] = U.orbScale),
      (t[100] = U.stashProgress),
      (t[101] = U.voiceLeft),
      (t[102] = U.voiceWidth),
      (t[103] = $n))
    : ($n = t[103]);
  let er = $n,
    tr;
  t[104] !== bn ||
  t[105] !== Sn ||
  t[106] !== dn ||
  t[107] !== zt ||
  t[108] !== It ||
  t[109] !== Ut ||
  t[110] !== Ht ||
  t[111] !== Lt ||
  t[112] !== ht ||
  t[113] !== ct ||
  t[114] !== wn ||
  t[115] !== En ||
  t[116] !== Tn ||
  t[117] !== xn ||
  t[118] !== fn ||
  t[119] !== hn ||
  t[120] !== Q
    ? ((tr = {
        "--quick-chat-expansion": ct,
        "--quick-chat-controls-opacity": ht,
        "--quick-chat-composer-left": It,
        "--quick-chat-composer-width": Lt,
        "--quick-chat-composer-height": zt,
        "--quick-chat-composer-top": Ht,
        "--quick-chat-composer-radius": Ut,
        "--quick-chat-composer-edge-bleed": dn,
        "--quick-chat-stash-progress": fn,
        "--quick-chat-voice-left": hn,
        "--quick-chat-voice-width": Q,
        "--quick-chat-badge-left": bn,
        "--quick-chat-orb-scale": xn,
        "--quick-chat-compact-progress": Sn,
        "--quick-chat-input-opacity": wn,
        "--quick-chat-orb-icon-opacity": Tn,
        "--quick-chat-orb-icon-blur": En,
      }),
      (t[104] = bn),
      (t[105] = Sn),
      (t[106] = dn),
      (t[107] = zt),
      (t[108] = It),
      (t[109] = Ut),
      (t[110] = Ht),
      (t[111] = Lt),
      (t[112] = ht),
      (t[113] = ct),
      (t[114] = wn),
      (t[115] = En),
      (t[116] = Tn),
      (t[117] = xn),
      (t[118] = fn),
      (t[119] = hn),
      (t[120] = Q),
      (t[121] = tr))
    : (tr = t[121]);
  let nr = tr,
    rr;
  t[122] !== nr || t[123] !== er
    ? ((rr = () => {
        for (let [e, t] of Object.entries(er)) nr[e].jump(t);
      }),
      (t[122] = nr),
      (t[123] = er),
      (t[124] = rr))
    : (rr = t[124]);
  let ir = (0, X.useEffectEvent)(rr),
    ar;
  t[125] !== xe || t[126] !== ir
    ? ((ar = () => {
        xe || ir();
      }),
      (t[125] = xe),
      (t[126] = ir),
      (t[127] = ar))
    : (ar = t[127]);
  let or;
  (t[128] !== xe || t[129] !== ke || t[130] !== U
    ? ((or = [xe, ke, U]), (t[128] = xe), (t[129] = ke), (t[130] = U), (t[131] = or))
    : (or = t[131]),
    (0, X.useLayoutEffect)(ar, or));
  let sr = (it.left + it.width / 2 - Je) / Qe,
    cr;
  t[132] !== Je ||
  t[133] !== nr ||
  t[134] !== Cn ||
  t[135] !== Bn ||
  t[136] !== ft ||
  t[137] !== mt ||
  t[138] !== sr ||
  t[139] !== W ||
  t[140] !== Qe
    ? ((cr = {
        left: Je,
        top: W,
        width: Qe,
        originX: sr,
        originY: 0,
        scaleX: ft,
        scaleY: mt,
        "--quick-chat-glass-spacing": Bn,
        "--quick-chat-compact-control-step": 40,
        "--quick-chat-compact-control-size": 40,
        "--quick-chat-compact-background-size": Cn,
        "--quick-chat-compact-divider-padding": 10,
        "--quick-chat-compact-edge-padding": 10,
        "--quick-chat-compact-icon-size": 20,
        ...nr,
      }),
      (t[132] = Je),
      (t[133] = nr),
      (t[134] = Cn),
      (t[135] = Bn),
      (t[136] = ft),
      (t[137] = mt),
      (t[138] = sr),
      (t[139] = W),
      (t[140] = Qe),
      (t[141] = cr))
    : (cr = t[141]);
  let lr = cr,
    ur;
  t[142] !== R || t[143] !== me || t[144] !== B
    ? ((ur = () => {
        ((Re.current = !1), B?.(!1), Me.current?.blur(), R?.(null), me?.());
      }),
      (t[142] = R),
      (t[143] = me),
      (t[144] = B),
      (t[145] = ur))
    : (ur = t[145]);
  let dr = ur,
    fr;
  t[146] === ae
    ? (fr = t[147])
    : ((fr = (e) => {
        if (ae == null || document.activeElement !== e || !document.hasFocus()) return;
        let t = e.getBoundingClientRect(),
          n = [et(e), t.x, t.y, t.width, t.height, e.offsetWidth].join(`\0`);
        Pe.current !== n && ((Pe.current = n), ae($e(e)));
      }),
      (t[146] = ae),
      (t[147] = fr));
  let $ = fr,
    pr;
  t[148] === ae
    ? (pr = t[149])
    : ((pr = () => {
        ((Pe.current = null), ae?.(null));
      }),
      (t[148] = ae),
      (t[149] = pr));
  let mr = pr,
    hr;
  t[150] === mr
    ? (hr = t[151])
    : ((hr = () => {
        ((Be.current = !1), mr());
        let e = document.activeElement;
        e instanceof HTMLButtonElement && Fe.current?.contains(e) && e.blur();
      }),
      (t[150] = mr),
      (t[151] = hr));
  let gr = (0, X.useEffectEvent)(hr),
    _r;
  t[152] === $
    ? (_r = t[153])
    : ((_r = () => {
        Me.current != null && $(Me.current);
      }),
      (t[152] = $),
      (t[153] = _r));
  let vr = (0, X.useEffectEvent)(_r),
    yr;
  t[154] !== gr || t[155] !== vr
    ? ((yr = () => (
        window.addEventListener(`blur`, gr),
        window.addEventListener(`focus`, vr),
        () => {
          (window.removeEventListener(`blur`, gr), window.removeEventListener(`focus`, vr), gr());
        }
      )),
      (t[154] = gr),
      (t[155] = vr),
      (t[156] = yr))
    : (yr = t[156]);
  let br;
  (t[157] === Symbol.for(`react.memo_cache_sentinel`) ? ((br = []), (t[157] = br)) : (br = t[157]),
    (0, X.useEffect)(yr, br));
  let xr;
  t[158] !== we ||
  t[159] !== K ||
  t[160] !== N.quickChat?.nearestStashEdge ||
  t[161] !== R ||
  t[162] !== F
    ? ((xr = (e) => {
        let t = ne.avatarOverlay;
        if (
          t == null ||
          !we ||
          F != null ||
          e.ctrlKey ||
          e.deltaMode !== WheelEvent.DOM_DELTA_PIXEL ||
          Math.abs(e.deltaX) < Math.abs(e.deltaY) * 2 ||
          e.deltaX === 0
        )
          return;
        e.preventDefault();
        let n = performance.now(),
          r = Le.current;
        if (
          ((n - r.lastAt > 180 ||
            (!r.triggered &&
              (n - r.startedAt > 220 || Math.sign(r.distance) !== Math.sign(e.deltaX)))) &&
            ((r = { distance: 0, startedAt: n, lastAt: n, triggered: !1 }), (Le.current = r)),
          (r.lastAt = n),
          (r.distance += e.deltaX),
          !K && !r.triggered && Math.abs(r.distance) >= 80)
        ) {
          r.triggered = !0;
          let e = r.distance > 0 ? `left` : `right`,
            n = N.quickChat?.nearestStashEdge;
          if (n != null && e !== n) return;
          (R?.(null, !0), t.setQuickChatStashed(e));
        }
      }),
      (t[158] = we),
      (t[159] = K),
      (t[160] = N.quickChat?.nearestStashEdge),
      (t[161] = R),
      (t[162] = F),
      (t[163] = xr))
    : (xr = t[163]);
  let Sr = (0, X.useEffectEvent)(xr),
    Cr;
  t[164] === Sr
    ? (Cr = t[165])
    : ((Cr = () => {
        let e = Fe.current;
        if (e != null)
          return (
            e.addEventListener(`wheel`, Sr, { passive: !1 }),
            () => e.removeEventListener(`wheel`, Sr)
          );
      }),
      (t[164] = Sr),
      (t[165] = Cr));
  let wr;
  (t[166] === Symbol.for(`react.memo_cache_sentinel`) ? ((wr = []), (t[166] = wr)) : (wr = t[166]),
    (0, X.useEffect)(Cr, wr));
  let Tr;
  t[167] !== Ce || t[168] !== it || t[169] !== F
    ? ((Tr =
        F != null && Ce
          ? (0, Z.jsx)(`div`, {
              "aria-hidden": `true`,
              className: `pointer-events-none absolute`,
              "data-avatar-overlay-proximity-region": `quick-chat`,
              style: it,
            })
          : null),
      (t[167] = Ce),
      (t[168] = it),
      (t[169] = F),
      (t[170] = Tr))
    : (Tr = t[170]);
  let Er = !Ce && `invisible`,
    Dr;
  t[171] === Er
    ? (Dr = t[172])
    : ((Dr = h(`absolute z-20 h-10`, Vt.glassGroup, Er)), (t[171] = Er), (t[172] = Dr));
  let Or = ke || !Ce || void 0,
    kr = ke || !Ce,
    Ar = ke ? `minimized` : Xe.state,
    jr = q || void 0,
    Mr;
  t[173] !== xe ||
  t[174] !== Pt ||
  t[175] !== Ke ||
  t[176] !== q ||
  t[177] !== At ||
  t[178] !== Ve ||
  t[179] !== Ft ||
  t[180] !== wt
    ? ((Mr =
        Ve || !xe
          ? { duration: 0 }
          : {
              default: Ft,
              "--quick-chat-composer-height": Ke ? Pt : At,
              "--quick-chat-composer-top": Ke ? Pt : At,
              "--quick-chat-input-opacity": wt ? Ft : { duration: 0 },
              "--quick-chat-orb-icon-opacity": q ? { duration: 0 } : Ft,
              "--quick-chat-orb-icon-blur": q ? { duration: 0 } : Ft,
            }),
      (t[173] = xe),
      (t[174] = Pt),
      (t[175] = Ke),
      (t[176] = q),
      (t[177] = At),
      (t[178] = Ve),
      (t[179] = Ft),
      (t[180] = wt),
      (t[181] = Mr))
    : (Mr = t[181]);
  let Nr;
  t[182] !== R || t[183] !== B
    ? ((Nr = (e) => {
        let t = Be.current;
        ((Be.current = !1),
          !(
            (e.relatedTarget instanceof Node && e.currentTarget.contains(e.relatedTarget)) ||
            (e.relatedTarget == null && t)
          ) && (R?.(null, ze.current), (ze.current = !1), (Re.current = !1), B?.(!1)));
      }),
      (t[182] = R),
      (t[183] = B),
      (t[184] = Nr))
    : (Nr = t[184]);
  let Pr;
  t[185] !== K || t[186] !== R
    ? ((Pr = (e) => {
        K || R?.(e.target === Me.current ? `editor` : `controls`);
      }),
      (t[185] = K),
      (t[186] = R),
      (t[187] = Pr))
    : (Pr = t[187]);
  let Fr, Ir, Lr, Rr;
  t[188] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Fr = (e) => {
        Be.current = e.key === `Tab` && !e.altKey && !e.ctrlKey && !e.metaKey;
      }),
      (Ir = () => {
        Be.current = !1;
      }),
      (Lr = () => {
        Be.current = !1;
      }),
      (Rr = (e) => {
        e.key === `Escape` &&
          e.target instanceof HTMLElement &&
          (e.preventDefault(), (ze.current = !0), e.target.blur());
      }),
      (t[188] = Fr),
      (t[189] = Ir),
      (t[190] = Lr),
      (t[191] = Rr))
    : ((Fr = t[188]), (Ir = t[189]), (Lr = t[190]), (Rr = t[191]));
  let zr;
  t[192] !== fe || t[193] !== $
    ? ((zr = () => {
        (fe?.(),
          ee.postRender(() => {
            Me.current != null && $(Me.current);
          }));
      }),
      (t[192] = fe),
      (t[193] = $),
      (t[194] = zr))
    : (zr = t[194]);
  let Br = C(Gn, Yt),
    Vr = C(Gn, Jt),
    Hr = C(Gn, qt),
    Ur = C(Gn, Kt),
    Wr;
  t[195] === Yn
    ? (Wr = t[196])
    : ((Wr = (0, Z.jsx)(c.feGaussianBlur, { stdDeviation: Yn })), (t[195] = Yn), (t[196] = Wr));
  let Gr;
  t[197] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Gr = (0, Z.jsx)(`feComponentTransfer`, {
        children: (0, Z.jsx)(`feFuncA`, { type: `discrete`, tableValues: `0 1` }),
      })),
      (t[197] = Gr))
    : (Gr = t[197]);
  let Kr;
  t[198] !== je || t[199] !== Br || t[200] !== Vr || t[201] !== Hr || t[202] !== Ur || t[203] !== Wr
    ? ((Kr = (0, Z.jsx)(`defs`, {
        children: (0, Z.jsxs)(c.filter, {
          id: je,
          colorInterpolationFilters: `sRGB`,
          filterUnits: `userSpaceOnUse`,
          x: Br,
          y: Vr,
          width: Hr,
          height: Ur,
          children: [Wr, Gr],
        }),
      })),
      (t[198] = je),
      (t[199] = Br),
      (t[200] = Vr),
      (t[201] = Hr),
      (t[202] = Ur),
      (t[203] = Wr),
      (t[204] = Kr))
    : (Kr = t[204]);
  let qr = `url(#${je})`,
    Jr;
  t[205] !== qn || t[206] !== qr
    ? ((Jr = (0, Z.jsx)(c.path, { d: qn, fill: `black`, filter: qr })),
      (t[205] = qn),
      (t[206] = qr),
      (t[207] = Jr))
    : (Jr = t[207]);
  let Yr;
  t[208] !== Wn || t[209] !== qn || t[210] !== Jr
    ? ((Yr = (0, Z.jsx)(nt, { getBounds: Wn, shape: qn, children: Jr })),
      (t[208] = Wn),
      (t[209] = qn),
      (t[210] = Jr),
      (t[211] = Yr))
    : (Yr = t[211]);
  let Xr;
  t[212] !== Kr || t[213] !== Yr || t[214] !== Qe
    ? ((Xr = (0, Z.jsxs)(`svg`, {
        "aria-hidden": `true`,
        className: `pointer-events-none absolute inset-0 overflow-visible`,
        width: Qe,
        height: 40,
        children: [Kr, Yr],
      })),
      (t[212] = Kr),
      (t[213] = Yr),
      (t[214] = Qe),
      (t[215] = Xr))
    : (Xr = t[215]);
  let Zr = !K,
    Qr;
  t[216] !== St || t[217] !== Zr
    ? ((Qr = (0, Z.jsx)(Ye, {
        "aria-hidden": `true`,
        className: `pointer-events-none absolute`,
        hidden: Zr,
        nativeSurfaceId: `quick-chat-stash-extension`,
        style: St,
        variant: `quick-chat-stash-extension`,
      })),
      (t[216] = St),
      (t[217] = Zr),
      (t[218] = Qr))
    : (Qr = t[218]);
  let $r;
  t[219] !== It || t[220] !== Ht || t[221] !== Lt
    ? (($r = { left: It, top: Ht, width: Lt }),
      (t[219] = It),
      (t[220] = Ht),
      (t[221] = Lt),
      (t[222] = $r))
    : ($r = t[222]);
  let ei;
  t[223] !== _ || t[224] !== M || t[225] !== he || t[226] !== dr
    ? ((ei = (e) => {
        e.preventDefault();
        let t = Me.current?.value ?? _,
          n = t.trim().length > 0;
        if ((M || Re.current) && !n) dr();
        else if (n) {
          let n = e.currentTarget.getBoundingClientRect();
          if (n.width <= 0 || n.height <= 0) {
            he?.(t);
            return;
          }
          he?.(t, {
            left: window.screenX + n.left,
            top: window.screenY + n.top,
            width: n.width,
            height: n.height,
          });
        }
      }),
      (t[223] = _),
      (t[224] = M),
      (t[225] = he),
      (t[226] = dr),
      (t[227] = ei))
    : (ei = t[227]);
  let ti;
  t[228] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ti = h(`w-full`, _e.nativeTint)), (t[228] = ti))
    : (ti = t[228]);
  let ni = tt.left,
    ri = tt.top,
    ii = J || void 0,
    ai = Xe.state === `collapsed` || void 0,
    oi = K ? `quick-chat-stash` : `quick-chat`,
    si = K || void 0,
    ci = K ? `items-center` : `h-full flex-col items-stretch`,
    li;
  t[229] === ci
    ? (li = t[230])
    : ((li = h(`relative flex min-w-0 flex-1`, ci)), (t[229] = ci), (t[230] = li));
  let ui;
  t[231] === pn ? (ui = t[232]) : ((ui = { opacity: pn }), (t[231] = pn), (t[232] = ui));
  let di;
  t[233] !== o ||
  t[234] !== We ||
  t[235] !== H ||
  t[236] !== Ee ||
  t[237] !== pe ||
  t[238] !== zt ||
  t[239] !== Ht
    ? ((di = We
        ? (0, Z.jsxs)(`div`, {
            className: `absolute top-0 right-0 left-0 flex h-18 min-w-0 items-start gap-2 overflow-hidden`,
            children: [
              o?.map((e) => {
                let t = e.transitionSnapshotDataUrl?.length ? e.transitionSnapshotDataUrl : null,
                  n = t ?? e.imageDataUrl ?? e.imagePath;
                return (0, Z.jsxs)(
                  `span`,
                  {
                    className: `group/appshot relative h-18 w-24 shrink-0`,
                    children: [
                      n == null
                        ? null
                        : (0, Z.jsx)(`img`, {
                            alt: e.appName,
                            className: h(
                              `size-full object-contain`,
                              t == null &&
                                `composer-attachment-surface rounded-lg border border-strong`,
                            ),
                            draggable: !1,
                            src: n,
                          }),
                      pe && !Ee
                        ? (0, Z.jsx)(te, {
                            className: `pointer-events-none top-1 right-1 opacity-0 group-hover/appshot:pointer-events-auto group-hover/appshot:opacity-100 focus-visible:pointer-events-auto focus-visible:opacity-100`,
                            ariaLabel: H.formatMessage(
                              {
                                id: `appshotAttachment.removeAriaLabel`,
                                defaultMessage: `Remove {title}`,
                                description: `Aria label for the remove appshot attachment button`,
                              },
                              { title: e.appName },
                            ),
                            onRemove: () => {
                              (o?.length === 1 && !Ee && (zt.jump(40), Ht.jump(0)), pe(e));
                            },
                          })
                        : null,
                    ],
                  },
                  `${e.bundleIdentifier}-${e.imageName ?? n}`,
                );
              }),
              Ee
                ? (0, Z.jsx)(`span`, {
                    "aria-hidden": `true`,
                    className: `pointer-events-none invisible h-18 w-24 shrink-0 rounded-lg`,
                    "data-avatar-overlay-quick-chat-appshot-destination": !0,
                  })
                : null,
            ],
          })
        : null),
      (t[233] = o),
      (t[234] = We),
      (t[235] = H),
      (t[236] = Ee),
      (t[237] = pe),
      (t[238] = zt),
      (t[239] = Ht),
      (t[240] = di))
    : (di = t[240]);
  let fi = !K && (We ? `mt-auto mb-1 h-5 shrink-0 translate-y-px` : `my-auto h-5 shrink-0`),
    pi = J ? `justify-center` : `gap-3`,
    mi;
  t[241] !== fi || t[242] !== pi
    ? ((mi = h(`relative flex w-full min-w-0 items-center`, fi, pi)),
      (t[241] = fi),
      (t[242] = pi),
      (t[243] = mi))
    : (mi = t[243]);
  let hi;
  t[244] !== Tt || t[245] !== H || t[246] !== R || t[247] !== J || t[248] !== wt
    ? ((hi = wt
        ? (0, Z.jsx)(f, { className: `text-default` })
        : (0, Z.jsx)(`button`, {
            "aria-label": H.formatMessage(on.startNewChat),
            className: `flex shrink-0 cursor-interaction items-center justify-center text-default`,
            "data-quick-chat-control": J ? `surface` : ``,
            type: `button`,
            onClick: () => {
              (R?.(`editor`), Me.current?.focus());
            },
            children: (0, Z.jsx)(de, { className: Tt ? `invisible` : void 0 }),
          })),
      (t[244] = Tt),
      (t[245] = H),
      (t[246] = R),
      (t[247] = J),
      (t[248] = wt),
      (t[249] = hi))
    : (hi = t[249]);
  let gi;
  t[250] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((gi = h(`pointer-events-none absolute h-5 w-px bg-border`, Vt.quickChatCompactFirstDivider)),
      (t[250] = gi))
    : (gi = t[250]);
  let _i = Tt ? `hidden` : void 0,
    vi;
  t[251] !== Sn || t[252] !== _i
    ? ((vi = (0, Z.jsx)(c.span, {
        "aria-hidden": `true`,
        className: gi,
        "data-quick-chat-divider": `compact`,
        style: { opacity: Sn, visibility: _i },
      })),
      (t[251] = Sn),
      (t[252] = _i),
      (t[253] = vi))
    : (vi = t[253]);
  let yi;
  t[254] !== x || t[255] !== Tt || t[256] !== Nn
    ? ((yi = x
        ? (0, Z.jsx)(c.span, {
            "aria-hidden": `true`,
            className: h(
              `pointer-events-none absolute h-5 w-px bg-border`,
              Vt.quickChatCompactSecondDivider,
            ),
            "data-quick-chat-divider": `compact`,
            style: { opacity: Nn, visibility: Tt ? `hidden` : void 0 },
          })
        : null),
      (t[254] = x),
      (t[255] = Tt),
      (t[256] = Nn),
      (t[257] = yi))
    : (yi = t[257]);
  let bi;
  t[258] === H
    ? (bi = t[259])
    : ((bi = H.formatMessage(on.startNewChat)), (t[258] = H), (t[259] = bi));
  let xi = !wt && `pointer-events-none`,
    Si = Tt && `invisible`,
    Ci;
  t[260] !== xi || t[261] !== Si
    ? ((Ci = h(
        `min-w-0 flex-1 bg-transparent text-sm font-medium text-default placeholder:text-tertiary focus:outline-none`,
        xi,
        Si,
      )),
      (t[260] = xi),
      (t[261] = Si),
      (t[262] = Ci))
    : (Ci = t[262]);
  let wi;
  t[263] === H
    ? (wi = t[264])
    : ((wi = H.formatMessage(on.startNewChat)), (t[263] = H), (t[264] = wi));
  let Ti;
  t[265] === wn ? (Ti = t[266]) : ((Ti = { opacity: wn }), (t[265] = wn), (t[266] = Ti));
  let Ei = wt ? void 0 : -1,
    Di;
  t[267] !== le || t[268] !== B || t[269] !== $
    ? ((Di = (e) => {
        ((Re.current = !1), B?.(!1), le?.(e.currentTarget.value), $(e.currentTarget));
      }),
      (t[267] = le),
      (t[268] = B),
      (t[269] = $),
      (t[270] = Di))
    : (Di = t[270]);
  let Oi;
  t[271] !== B || t[272] !== $
    ? ((Oi = (e) => {
        ((Re.current = !1), B?.(!1), $(e.currentTarget));
      }),
      (t[271] = B),
      (t[272] = $),
      (t[273] = Oi))
    : (Oi = t[273]);
  let ki;
  t[274] !== d || t[275] !== Ct || t[276] !== B
    ? ((ki = (e) => {
        e.key === `ArrowRight` && !Ct && d
          ? (e.preventDefault(), (Re.current = !0), B?.(!0), Ne.current?.focus())
          : e.key === `ArrowLeft` && ((Re.current = !1), B?.(!1));
      }),
      (t[274] = d),
      (t[275] = Ct),
      (t[276] = B),
      (t[277] = ki))
    : (ki = t[277]);
  let Ai, ji;
  t[278] === $
    ? ((Ai = t[279]), (ji = t[280]))
    : ((Ai = (e) => $(e.currentTarget)),
      (ji = (e) => $(e.currentTarget)),
      (t[278] = $),
      (t[279] = Ai),
      (t[280] = ji));
  let Mi;
  t[281] !== mr ||
  t[282] !== _ ||
  t[283] !== bi ||
  t[284] !== Ci ||
  t[285] !== wi ||
  t[286] !== Ti ||
  t[287] !== Ei ||
  t[288] !== Di ||
  t[289] !== Oi ||
  t[290] !== ki ||
  t[291] !== Ai ||
  t[292] !== ji
    ? ((Mi = (0, Z.jsx)(c.input, {
        ref: Me,
        "aria-label": bi,
        className: Ci,
        "data-avatar-overlay-composition-autofocus": `true`,
        placeholder: wi,
        style: Ti,
        tabIndex: Ei,
        value: _,
        onBlur: mr,
        onChange: Di,
        onFocus: Oi,
        onKeyDown: ki,
        onPointerDown: Gt,
        onScroll: Ai,
        onSelect: ji,
      })),
      (t[281] = mr),
      (t[282] = _),
      (t[283] = bi),
      (t[284] = Ci),
      (t[285] = wi),
      (t[286] = Ti),
      (t[287] = Ei),
      (t[288] = Di),
      (t[289] = Oi),
      (t[290] = ki),
      (t[291] = Ai),
      (t[292] = ji),
      (t[293] = Mi))
    : (Mi = t[293]);
  let Ni;
  t[294] !== mi || t[295] !== hi || t[296] !== vi || t[297] !== yi || t[298] !== Mi
    ? ((Ni = (0, Z.jsxs)(`div`, { className: mi, children: [hi, vi, yi, Mi] })),
      (t[294] = mi),
      (t[295] = hi),
      (t[296] = vi),
      (t[297] = yi),
      (t[298] = Mi),
      (t[299] = Ni))
    : (Ni = t[299]);
  let Pi;
  t[300] !== K || t[301] !== Ni || t[302] !== si || t[303] !== li || t[304] !== ui || t[305] !== di
    ? ((Pi = (0, Z.jsxs)(c.div, {
        "aria-hidden": si,
        className: li,
        inert: K,
        style: ui,
        children: [di, Ni],
      })),
      (t[300] = K),
      (t[301] = Ni),
      (t[302] = si),
      (t[303] = li),
      (t[304] = ui),
      (t[305] = di),
      (t[306] = Pi))
    : (Pi = t[306]);
  let Fi;
  t[307] === H ? (Fi = t[308]) : ((Fi = H.formatMessage(on.restore)), (t[307] = H), (t[308] = Fi));
  let Ii = !K || void 0,
    Li = !K,
    Ri = _t === `left` ? dn : 0,
    zi = _t === `right` ? dn : 0,
    Bi;
  t[309] !== mn || t[310] !== Ri || t[311] !== zi
    ? ((Bi = { opacity: mn, paddingLeft: Ri, paddingRight: zi }),
      (t[309] = mn),
      (t[310] = Ri),
      (t[311] = zi),
      (t[312] = Bi))
    : (Bi = t[312]);
  let Vi = _t === `left` ? `-rotate-90` : `rotate-90`,
    Hi;
  t[313] === Vi
    ? (Hi = t[314])
    : ((Hi = (0, Z.jsx)(ie, { className: Vi })), (t[313] = Vi), (t[314] = Hi));
  let Ui;
  t[315] !== Fi || t[316] !== Ii || t[317] !== Li || t[318] !== Bi || t[319] !== Hi
    ? ((Ui = (0, Z.jsx)(c.button, {
        "aria-label": Fi,
        "aria-hidden": Ii,
        className: `focus-visible:ring-primary-outline absolute inset-0 flex size-full cursor-interaction items-center justify-center text-default select-none focus-visible:ring-2 focus-visible:outline-none`,
        "data-avatar-overlay-hit-region": `quick-chat-stash`,
        inert: Li,
        style: Bi,
        type: `button`,
        onClick: Wt,
        children: Hi,
      })),
      (t[315] = Fi),
      (t[316] = Ii),
      (t[317] = Li),
      (t[318] = Bi),
      (t[319] = Hi),
      (t[320] = Ui))
    : (Ui = t[320]);
  let Wi;
  t[321] !== tt.left ||
  t[322] !== tt.top ||
  t[323] !== gt ||
  t[324] !== Pi ||
  t[325] !== Ui ||
  t[326] !== ii ||
  t[327] !== ai ||
  t[328] !== oi
    ? ((Wi = (0, Z.jsxs)(Ye, {
        className: ti,
        "data-avatar-overlay-native-tint": gt,
        "data-avatar-overlay-quick-chat-target-left": ni,
        "data-avatar-overlay-quick-chat-target-top": ri,
        "data-avatar-overlay-quick-chat-icon-only": ii,
        "data-avatar-overlay-quick-chat-collapsed": ai,
        "data-avatar-overlay-hit-region": `notification-composer`,
        nativeSurfaceId: `composer`,
        variant: oi,
        children: [Pi, Ui],
      })),
      (t[321] = tt.left),
      (t[322] = tt.top),
      (t[323] = gt),
      (t[324] = Pi),
      (t[325] = Ui),
      (t[326] = ii),
      (t[327] = ai),
      (t[328] = oi),
      (t[329] = Wi))
    : (Wi = t[329]);
  let Gi;
  t[330] !== oe ||
  t[331] !== L ||
  t[332] !== se ||
  t[333] !== ce ||
  t[334] !== z ||
  t[335] !== Wi ||
  t[336] !== $r ||
  t[337] !== ei
    ? ((Gi = (0, Z.jsx)(c.form, {
        className: `absolute top-0 left-0 min-w-0 cursor-grab active:cursor-grabbing`,
        style: $r,
        onLostPointerCapture: z,
        onPointerCancel: oe,
        onPointerDown: L,
        onPointerMove: se,
        onPointerUp: ce,
        onSubmit: ei,
        children: Wi,
      })),
      (t[330] = oe),
      (t[331] = L),
      (t[332] = se),
      (t[333] = ce),
      (t[334] = z),
      (t[335] = Wi),
      (t[336] = $r),
      (t[337] = ei),
      (t[338] = Gi))
    : (Gi = t[338]);
  let Ki = q || K || void 0,
    qi;
  t[339] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qi = h(`absolute top-0`, Vt.orb)), (t[339] = qi))
    : (qi = t[339]);
  let Ji = q || K,
    Yi;
  t[340] !== xn || t[341] !== hn || t[342] !== Q
    ? ((Yi = { left: hn, scale: xn, width: Q }),
      (t[340] = xn),
      (t[341] = hn),
      (t[342] = Q),
      (t[343] = Yi))
    : (Yi = t[343]);
  let Xi = (!J && !K) || void 0,
    Zi;
  t[344] === pn ? (Zi = t[345]) : ((Zi = { opacity: pn }), (t[344] = pn), (t[345] = Zi));
  let Qi;
  t[346] !== d ||
  t[347] !== H ||
  t[348] !== Ue ||
  t[349] !== M ||
  t[350] !== He ||
  t[351] !== Ve ||
  t[352] !== yn ||
  t[353] !== _n ||
  t[354] !== Dn ||
  t[355] !== Tn ||
  t[356] !== I ||
  t[357] !== J ||
  t[358] !== dr
    ? ((Qi =
        Ue && !He && I != null
          ? (0, Z.jsx)(jt, {
              audioControlOpacity: yn,
              audioControlWidth: _n,
              reduceMotion: !!Ve,
              showsAudioControls: J,
              voice: I,
            })
          : (0, Z.jsx)(`button`, {
              ref: Ne,
              "aria-label": H.formatMessage(He ? on.stopVoice : on.startVoice),
              "aria-busy": He || void 0,
              "aria-pressed": M,
              className: `flex size-full cursor-interaction items-center justify-center rounded-full text-default`,
              "data-quick-chat-control": `surface`,
              disabled: He ? I?.onStop == null : !d,
              type: `button`,
              onClick: () => {
                if (He) {
                  I?.onStop?.();
                  return;
                }
                dr();
              },
              onKeyDown: (e) => {
                e.key === `ArrowLeft` && (e.preventDefault(), Me.current?.focus());
              },
              children: (0, Z.jsx)(c.span, {
                className: `flex items-center justify-center`,
                style: { filter: Dn, opacity: Tn },
                children: He ? (0, Z.jsx)(vt, { reduceMotion: !!Ve }) : (0, Z.jsx)(y, {}),
              }),
            })),
      (t[346] = d),
      (t[347] = H),
      (t[348] = Ue),
      (t[349] = M),
      (t[350] = He),
      (t[351] = Ve),
      (t[352] = yn),
      (t[353] = _n),
      (t[354] = Dn),
      (t[355] = Tn),
      (t[356] = I),
      (t[357] = J),
      (t[358] = dr),
      (t[359] = Qi))
    : (Qi = t[359]);
  let $i;
  t[360] !== Zi || t[361] !== Qi
    ? (($i = (0, Z.jsx)(c.div, { className: `size-full`, style: Zi, children: Qi })),
      (t[360] = Zi),
      (t[361] = Qi),
      (t[362] = $i))
    : ($i = t[362]);
  let ea;
  t[363] !== gt || t[364] !== Xi || t[365] !== $i
    ? ((ea = (0, Z.jsx)(Ye, {
        className: _e.nativeTint,
        "data-avatar-overlay-quick-chat-resizable-background": Xi,
        "data-avatar-overlay-hit-region": `realtime-voice`,
        "data-avatar-overlay-native-tint": gt,
        nativeSurfaceId: `voice-controls`,
        variant: `quick-chat-voice`,
        children: $i,
      })),
      (t[363] = gt),
      (t[364] = Xi),
      (t[365] = $i),
      (t[366] = ea))
    : (ea = t[366]);
  let ta;
  t[367] !== oe ||
  t[368] !== L ||
  t[369] !== se ||
  t[370] !== ce ||
  t[371] !== z ||
  t[372] !== Ki ||
  t[373] !== Ji ||
  t[374] !== Yi ||
  t[375] !== ea
    ? ((ta = (0, Z.jsx)(c.div, {
        "aria-hidden": Ki,
        className: qi,
        inert: Ji,
        style: Yi,
        onLostPointerCapture: z,
        onPointerCancel: oe,
        onPointerDown: L,
        onPointerMove: se,
        onPointerUp: ce,
        children: ea,
      })),
      (t[367] = oe),
      (t[368] = L),
      (t[369] = se),
      (t[370] = ce),
      (t[371] = z),
      (t[372] = Ki),
      (t[373] = Ji),
      (t[374] = Yi),
      (t[375] = ea),
      (t[376] = ta))
    : (ta = t[376]);
  let na;
  t[377] !== s ||
  t[378] !== x ||
  t[379] !== H ||
  t[380] !== K ||
  t[381] !== q ||
  t[382] !== N.placement ||
  t[383] !== gt ||
  t[384] !== P ||
  t[385] !== oe ||
  t[386] !== L ||
  t[387] !== se ||
  t[388] !== ce ||
  t[389] !== z ||
  t[390] !== ge ||
  t[391] !== jn ||
  t[392] !== bn ||
  t[393] !== Fn ||
  t[394] !== Dn ||
  t[395] !== xn ||
  t[396] !== J
    ? ((na = x
        ? (0, Z.jsx)(c.div, {
            "aria-hidden": q || K || void 0,
            className: h(`absolute top-0`, Vt.orb),
            inert: q || K,
            style: { left: bn, pointerEvents: Fn, scale: xn },
            onLostPointerCapture: z,
            onPointerCancel: oe,
            onPointerDown: L,
            onPointerMove: se,
            onPointerUp: ce,
            children: (0, Z.jsx)(Ye, {
              className: _e.nativeTint,
              "data-avatar-overlay-quick-chat-resizable-background": (!J && !K) || void 0,
              "data-avatar-overlay-hit-region": `mascot-badge`,
              "data-avatar-overlay-native-tint": q ? void 0 : gt,
              nativeSurfaceId: `mascot-badge`,
              variant: `quick-chat-orb`,
              children: (0, Z.jsx)(`button`, {
                "aria-label":
                  P?.ariaLabel ?? H.formatMessage(s ? on.hideActivity : on.showActivity),
                className: `flex size-full cursor-interaction items-center justify-center rounded-full text-default select-none`,
                "data-quick-chat-control": `surface`,
                type: `button`,
                onClick: P?.onClick ?? ge,
                children: (0, Z.jsx)(c.span, {
                  "aria-hidden": `true`,
                  className: `relative flex items-center justify-center`,
                  style: { filter: Dn, opacity: jn },
                  children: s
                    ? (0, Z.jsx)(ie, {
                        className: N.placement.startsWith(`top`)
                          ? `translate-y-px rotate-180`
                          : `-translate-y-px`,
                      })
                    : (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(a, { className: h(`text-default`, Vt.activityBell) }),
                          P != null && !P.isIconOnly
                            ? (0, Z.jsx)(`span`, {
                                className: h(
                                  `absolute top-0.75 right-0.75 flex size-3 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[8px] leading-none font-medium text-white tabular-nums`,
                                  _e.nativeTint,
                                  Vt.activityBadge,
                                ),
                                "data-avatar-overlay-native-tint": P.nativeTint,
                                children: P.content,
                              })
                            : null,
                        ],
                      }),
                }),
              }),
            }),
          })
        : null),
      (t[377] = s),
      (t[378] = x),
      (t[379] = H),
      (t[380] = K),
      (t[381] = q),
      (t[382] = N.placement),
      (t[383] = gt),
      (t[384] = P),
      (t[385] = oe),
      (t[386] = L),
      (t[387] = se),
      (t[388] = ce),
      (t[389] = z),
      (t[390] = ge),
      (t[391] = jn),
      (t[392] = bn),
      (t[393] = Fn),
      (t[394] = Dn),
      (t[395] = xn),
      (t[396] = J),
      (t[397] = na))
    : (na = t[397]);
  let ra = K ? `invisible` : void 0,
    ia;
  t[398] !== m || t[399] !== K || t[400] !== ra
    ? ((ia = (0, Z.jsx)(`div`, { className: ra, inert: K, children: m })),
      (t[398] = m),
      (t[399] = K),
      (t[400] = ra),
      (t[401] = ia))
    : (ia = t[401]);
  let aa;
  t[402] !== lr ||
  t[403] !== er ||
  t[404] !== Gi ||
  t[405] !== ta ||
  t[406] !== na ||
  t[407] !== ia ||
  t[408] !== Dr ||
  t[409] !== Or ||
  t[410] !== kr ||
  t[411] !== Ar ||
  t[412] !== jr ||
  t[413] !== Mr ||
  t[414] !== Nr ||
  t[415] !== Pr ||
  t[416] !== zr ||
  t[417] !== Xr ||
  t[418] !== Qr
    ? ((aa = (0, Z.jsxs)(c.div, {
        ref: Fe,
        animate: er,
        className: Dr,
        "aria-hidden": Or,
        inert: kr,
        "data-quick-chat-presentation": Ar,
        "data-quick-chat-glass-group": `true`,
        "data-quick-chat-typing": jr,
        initial: !1,
        role: `group`,
        style: lr,
        transition: Mr,
        onBlurCapture: Nr,
        onFocusCapture: Pr,
        onKeyDownCapture: Fr,
        onKeyUpCapture: Ir,
        onPointerDownCapture: Lr,
        onKeyDown: Rr,
        onUpdate: zr,
        children: [Xr, Qr, Gi, ta, na, ia],
      })),
      (t[402] = lr),
      (t[403] = er),
      (t[404] = Gi),
      (t[405] = ta),
      (t[406] = na),
      (t[407] = ia),
      (t[408] = Dr),
      (t[409] = Or),
      (t[410] = kr),
      (t[411] = Ar),
      (t[412] = jr),
      (t[413] = Mr),
      (t[414] = Nr),
      (t[415] = Pr),
      (t[416] = zr),
      (t[417] = Xr),
      (t[418] = Qr),
      (t[419] = aa))
    : (aa = t[419]);
  let oa;
  return (
    t[420] !== F || t[421] !== aa || t[422] !== Tr
      ? ((oa = (0, Z.jsxs)(Z.Fragment, { children: [F, Tr, aa] })),
        (t[420] = F),
        (t[421] = aa),
        (t[422] = Tr),
        (t[423] = oa))
      : (oa = t[423]),
    oa
  );
}
function Wt() {
  ne.avatarOverlay?.setQuickChatStashed(null);
}
function Gt(e) {
  let t = e.currentTarget.closest(`[data-avatar-overlay-content-frame="true"]`),
    n = $e(e.currentTarget, e.currentTarget.value.length);
  if (t == null || n == null) {
    e.stopPropagation();
    return;
  }
  let r = e.currentTarget.getBoundingClientRect(),
    i = e.currentTarget.offsetWidth === 0 ? 1 : r.width / e.currentTarget.offsetWidth,
    a = t.getBoundingClientRect().left + n.x * i;
  if (
    !(window.getComputedStyle(e.currentTarget).direction === `rtl` ? e.clientX < a : e.clientX > a)
  ) {
    e.stopPropagation();
    return;
  }
  e.currentTarget.setSelectionRange(e.currentTarget.value.length, e.currentTarget.value.length);
}
function Kt(e) {
  return e.height + 56;
}
function qt(e) {
  return e.width + 56;
}
function Jt(e) {
  return e.top - 28;
}
function Yt(e) {
  return e.left - 28;
}
function Xt(e) {
  return e.top + e.height;
}
function Zt(e) {
  return e.left + e.width;
}
function Qt(e) {
  return e.top;
}
function $t(e) {
  return e.left;
}
function en(e) {
  return 40 - 20 * e;
}
function tn(e) {
  return (0, an.default)(e * 2 - 1, 0, 1);
}
function nn(e) {
  return (0, an.default)(1 - e * 2, 0, 1);
}
var rn,
  an,
  X,
  Z,
  on,
  sn,
  cn,
  ln,
  un,
  dn = e(() => {
    ((rn = N()),
      pe(),
      I(),
      (an = t(oe(), 1)),
      i(),
      (X = t(r(), 1)),
      _(),
      ge(),
      s(),
      le(),
      b(),
      k(),
      tt(),
      at(),
      st(),
      Ve(),
      Qe(),
      ht(),
      Pt(),
      lt(),
      At(),
      B(),
      Ht(),
      (Z = O()),
      (on = fe({
        restore: {
          id: `avatarOverlay.quickChatBar.restore`,
          defaultMessage: `Restore Quick Chat`,
          description: `Accessible label for the screen-edge tab that brings a stashed floating Quick Chat back onscreen`,
        },
        startNewChat: {
          id: `avatarOverlay.quickChatBar.startNewChat`,
          defaultMessage: `Start new chat`,
          description: `Placeholder and accessible label for the floating Quick Chat bar, shown alone or below a pet`,
        },
        startVoice: {
          id: `avatarOverlay.quickChatBar.startVoice`,
          defaultMessage: `Start voice chat`,
          description: `Accessible label for the voice control in the floating Quick Chat bar`,
        },
        stopVoice: {
          id: `avatarOverlay.stopRealtimeVoice`,
          defaultMessage: `Stop voice chat`,
          description: `Accessible label and tooltip for stopping realtime voice from the floating avatar`,
        },
        hideActivity: {
          id: `avatarOverlay.quickChatBar.hideActivity`,
          defaultMessage: `Hide activity`,
          description: `Accessible label for hiding activity beside the floating quick-chat bar`,
        },
        showActivity: {
          id: `avatarOverlay.quickChatBar.showActivity`,
          defaultMessage: `Show activity`,
          description: `Accessible label for showing activity beside the floating quick-chat bar`,
        },
      })),
      (sn = ye.filter),
      (cn = 0.9),
      (ln = 1.25),
      (un = 38));
  });
export {
  Ce as A,
  Ne as C,
  Ve as D,
  Me as E,
  Se as M,
  Ee as O,
  V as S,
  je as T,
  Qe as _,
  ct as a,
  Ae as b,
  et as c,
  Ze as d,
  Xe as f,
  Je as g,
  Ke as h,
  ht as i,
  ke as j,
  De as k,
  tt as l,
  qe as m,
  dn as n,
  lt as o,
  Ye as p,
  dt as r,
  $e as s,
  Ut as t,
  Ge as u,
  Ue as v,
  H as w,
  Fe as x,
  We as y,
};
//# sourceMappingURL=avatar-overlay-quick-chat-bar-6faa49a506f3.js.map
