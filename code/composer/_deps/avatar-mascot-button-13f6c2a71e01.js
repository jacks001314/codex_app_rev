import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as n,
  Amn as r,
  Eln as ee,
  F3t as i,
  O3t as a,
  Rpn as te,
  a3t as ne,
  gPt as re,
  gln as ie,
  hmn as o,
  iHt as s,
  kmn as c,
  nln as l,
  o3t as u,
  pPt as d,
  rHt as ae,
  zpn as f,
} from "./app-initial-f094ef01c64d.js";
import { n as p, t as m } from "./codex-pet-assets-16127cbc3056.js";
function h(e) {
  return `blur(max(0px, ${e}px))`;
}
var g,
  _,
  v,
  y,
  b,
  x = e(() => {
    ((g = { duration: 0.22, ease: [0.4, 0, 0.6, 1] }),
      (_ = { damping: 26.18, mass: 1, stiffness: 685.3890625, type: `spring`, velocity: 0 }),
      (v = {
        damping: 32.67256359733385,
        mass: 1,
        stiffness: 631.6546816697189,
        type: `spring`,
        velocity: 0,
      }),
      (y = { default: _, filter: { ..._, damping: 52.36 } }),
      (b = { default: v, filter: { ...v, damping: 2 * Math.sqrt(v.stiffness * v.mass) } }));
  }),
  S,
  oe,
  C = e(() => {
    ((S = `_nativeTint_v9pb8_6`), (oe = { nativeTint: S }));
  }),
  w = e(() => {}),
  T,
  E,
  D,
  se,
  O,
  ce,
  le,
  k = e(() => {
    ((T = `_Material_1cfte_2`),
      (E = `_CompactMaterial_1cfte_2`),
      (D = `_ActivityBacking_1cfte_2`),
      (se = `_QuickChatMaterial_1cfte_2`),
      (O = `_Control_1cfte_2`),
      (ce = `_ActivityText_1cfte_2`),
      (le = {
        Material: T,
        CompactMaterial: E,
        ActivityBacking: D,
        QuickChatMaterial: se,
        Control: O,
        ActivityText: ce,
        "activity-shimmer": `_activity-shimmer_1cfte_1`,
      }));
  });
function ue(e) {
  let t = (0, fe.c)(20),
    {
      ariaLabel: n,
      className: r,
      lookFrame: ee,
      notificationBadge: i,
      onContextMenu: a,
      source: ne,
      state: ie,
      style: o,
      transientState: s,
    } = e,
    c = ie === void 0 ? `idle` : ie,
    [l, u] = (0, j.useState)(!1),
    d = s ?? (l ? `jumping` : c),
    ae = d === `idle` || d === `running` || d === `waving`,
    f = i != null,
    p;
  n != null && (p = f ? `group` : `img`);
  let h;
  t[0] === r
    ? (h = t[1])
    : ((h = te(
        `codex-avatar-button relative flex cursor-interaction items-center justify-center active:cursor-grabbing`,
        r,
      )),
      (t[0] = r),
      (t[1] = h));
  let g = (n == null && !f) || void 0,
    _,
    v;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => {
        u(!0);
      }),
      (v = () => {
        u(!1);
      }),
      (t[2] = _),
      (t[3] = v))
    : ((_ = t[2]), (v = t[3]));
  let y = ae ? ee : null,
    b;
  t[4] !== d || t[5] !== ne || t[6] !== y
    ? ((b = (0, M.jsx)(re, {
        assetMap: m,
        className: `codex-avatar-root relative z-10`,
        lookFrame: y,
        source: ne,
        state: d,
      })),
      (t[4] = d),
      (t[5] = ne),
      (t[6] = y),
      (t[7] = b))
    : (b = t[7]);
  let x;
  t[8] !== f || t[9] !== i
    ? ((x = f ? (0, M.jsx)(A, { notificationBadge: i }) : null),
      (t[8] = f),
      (t[9] = i),
      (t[10] = x))
    : (x = t[10]);
  let S;
  return (
    t[11] !== n ||
    t[12] !== a ||
    t[13] !== p ||
    t[14] !== o ||
    t[15] !== h ||
    t[16] !== g ||
    t[17] !== b ||
    t[18] !== x
      ? ((S = (0, M.jsxs)(`div`, {
          className: h,
          "data-avatar-mascot": `true`,
          "data-testid": `avatar-mascot-button`,
          "aria-hidden": g,
          "aria-label": n,
          role: p,
          onContextMenu: a,
          onPointerEnter: _,
          onPointerLeave: v,
          style: o,
          children: [b, x],
        })),
        (t[11] = n),
        (t[12] = a),
        (t[13] = p),
        (t[14] = o),
        (t[15] = h),
        (t[16] = g),
        (t[17] = b),
        (t[18] = x),
        (t[19] = S))
      : (S = t[19]),
    S
  );
}
function A(e) {
  let t = (0, fe.c)(87),
    {
      animatesExit: r,
      contentVisibilityAnimation: a,
      ignoresReducedMotion: re,
      isContentVisible: o,
      notificationBadge: s,
      nativeCornerRadius: c,
      onAnimationFrame: l,
      presentationPosition: u,
    } = e,
    d = r !== void 0 && r,
    ae = re !== void 0 && re,
    f = o === void 0 || o,
    p = c === void 0 ? 12 : c,
    m = n(ne),
    g = i(ge) ?? `top-end`,
    [y, x] = (0, j.useState)(null),
    S = (0, j.useRef)(null),
    C = (0, j.useRef)(!1),
    w = ie() && !ae,
    T;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = { duration: 0 }), (t[0] = T))
    : (T = t[0]);
  let E = T;
  a != null && (E = f ? a.revealTransition : b);
  let D;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (e) => {
        e.button === 0 &&
          (e.stopPropagation(),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          (S.current = {
            hasMoved: !1,
            pointerId: e.pointerId,
            startClientX: e.clientX,
            startClientY: e.clientY,
          }));
      }),
      (t[1] = D))
    : (D = t[1]);
  let se = D,
    O;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (e) => {
        let t = S.current;
        if (t == null || t.pointerId !== e.pointerId) return;
        e.stopPropagation();
        let n = e.clientX - t.startClientX,
          r = e.clientY - t.startClientY;
        (!t.hasMoved && Math.abs(n) < pe && Math.abs(r) < pe) ||
          (e.preventDefault(), (t.hasMoved = !0), x({ x: n, y: r }));
      }),
      (t[2] = O))
    : (O = t[2]);
  let ce = O,
    k;
  t[3] === m
    ? (k = t[4])
    : ((k = (e) => {
        let t = S.current;
        if (
          !(t == null || t.pointerId !== e.pointerId) &&
          (e.stopPropagation(),
          (S.current = null),
          e.currentTarget.hasPointerCapture?.(e.pointerId) &&
            e.currentTarget.releasePointerCapture?.(e.pointerId),
          t.hasMoved)
        ) {
          let t = e.currentTarget.closest(`[data-avatar-mascot='true']`)?.getBoundingClientRect();
          (t != null && m.set(ge, de({ avatarBounds: t, clientX: e.clientX, clientY: e.clientY })),
            x(null),
            e.preventDefault(),
            (C.current = !0),
            window.setTimeout(() => {
              C.current = !1;
            }, 0));
        }
      }),
      (t[3] = m),
      (t[4] = k));
  let ue = k,
    A;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (e) => {
        let t = S.current;
        (e.stopPropagation(),
          (S.current = null),
          x(null),
          t != null &&
            e.currentTarget.hasPointerCapture?.(t.pointerId) &&
            e.currentTarget.releasePointerCapture?.(t.pointerId));
      }),
      (t[5] = A))
    : (A = t[5]);
  let _e = A,
    N;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = () => {
        ((S.current = null), x(null));
      }),
      (t[6] = N))
    : (N = t[6]);
  let ve = N,
    P;
  t[7] === s
    ? (P = t[8])
    : ((P = (e) => {
        if ((e.stopPropagation(), C.current)) {
          ((C.current = !1), e.preventDefault());
          return;
        }
        s.onClick();
      }),
      (t[7] = s),
      (t[8] = P));
  let ye = P,
    be = u == null ? he[g] : null,
    xe = y == null ? void 0 : `${y.x}px ${y.y}px`,
    F = s.isGlassy,
    I = F && s.isIconOnly,
    L = u == null,
    R = F && a != null && u != null,
    z = f ? _ : v,
    B;
  t[9] !== R || t[10] !== u
    ? ((B = R ? { height: u.height, left: u.left, top: u.top, width: u.width } : {}),
      (t[9] = R),
      (t[10] = u),
      (t[11] = B))
    : (B = t[11]);
  let Se = B,
    V = me;
  if (w) {
    let e;
    (t[12] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = { duration: 0 }), (t[12] = e))
      : (e = t[12]),
      (V = e));
  } else if (R) {
    let e;
    (t[13] === z
      ? (e = t[14])
      : ((e = { default: me, borderRadius: z, height: z, left: z, top: z, width: z }),
        (t[13] = z),
        (t[14] = e)),
      (V = e));
  }
  let Ce = F ? p : void 0,
    H;
  t[15] !== Se || t[16] !== Ce
    ? ((H = { ...Se, borderRadius: Ce, opacity: 1, scale: 1, y: 0 }),
      (t[15] = Se),
      (t[16] = Ce),
      (t[17] = H))
    : (H = t[17]);
  let we = s.ariaLabel,
    Te = F && le.Material,
    Ee = F && !I && oe.nativeTint,
    De = L ? `cursor-grab touch-none active:cursor-grabbing` : `cursor-interaction`,
    Oe = !F && `shadow-sm`,
    ke = !s.isGlassy && `border-border/60`,
    Ae =
      F &&
      `before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:content-[''] enabled:active:before:bg-text/12 forced-colors:!border-[ButtonBorder] forced-colors:!bg-[ButtonFace] forced-colors:!text-[ButtonText] forced-colors:backdrop-blur-none [.electron-dark_&]:enabled:active:before:bg-text/15 [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none`,
    je = F && !f && `!border-transparent`,
    Me = I && `text-default`,
    U;
  t[18] !== be ||
  t[19] !== Te ||
  t[20] !== Ee ||
  t[21] !== De ||
  t[22] !== Oe ||
  t[23] !== ke ||
  t[24] !== Ae ||
  t[25] !== je ||
  t[26] !== Me
    ? ((U = te(
        Te,
        Ee,
        `no-drag absolute z-40 flex select-none items-center justify-center rounded-full border text-xs leading-none font-medium focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
        De,
        be,
        Oe,
        ke,
        Ae,
        je,
        Me,
        `size-6 p-0`,
      )),
      (t[18] = be),
      (t[19] = Te),
      (t[20] = Ee),
      (t[21] = De),
      (t[22] = Oe),
      (t[23] = ke),
      (t[24] = Ae),
      (t[25] = je),
      (t[26] = Me),
      (t[27] = U))
    : (U = t[27]);
  let Ne = F ? p : void 0,
    Pe = F && !I ? s.nativeTint : void 0,
    Fe = F ? `mascot-badge` : void 0,
    Ie = u == null ? void 0 : `mascot-badge`,
    Le = F ? p : void 0,
    Re = w ? 1 : 0.7,
    ze = w ? 0 : 3,
    W;
  t[28] !== Le || t[29] !== Re || t[30] !== ze
    ? ((W = { borderRadius: Le, opacity: 0, scale: Re, y: ze }),
      (t[28] = Le),
      (t[29] = Re),
      (t[30] = ze),
      (t[31] = W))
    : (W = t[31]);
  let G;
  t[32] !== d || t[33] !== w
    ? ((G = d
        ? {
            opacity: 0,
            scale: w ? 1 : 0.7,
            transition: { duration: 0.16, ease: `easeOut` },
            y: w ? 0 : 3,
          }
        : void 0),
      (t[32] = d),
      (t[33] = w),
      (t[34] = G))
    : (G = t[34]);
  let Be = u == null || R ? void 0 : `position`,
    Ve = L ? ve : void 0,
    He = L ? _e : void 0,
    Ue = L ? se : void 0,
    We = L ? ce : void 0,
    Ge = L ? ue : void 0,
    K;
  t[35] !== R || t[36] !== u
    ? ((K = R ? {} : u), (t[35] = R), (t[36] = u), (t[37] = K))
    : (K = t[37]);
  let q;
  t[38] !== F || t[39] !== I || t[40] !== s.backgroundColor
    ? ((q = F && !I ? { "--avatar-overlay-material-background": s.backgroundColor } : {}),
      (t[38] = F),
      (t[39] = I),
      (t[40] = s.backgroundColor),
      (t[41] = q))
    : (q = t[41]);
  let Ke = F ? void 0 : s.backgroundColor,
    qe = I ? void 0 : s.foregroundColor,
    J;
  t[42] !== K || t[43] !== q || t[44] !== Ke || t[45] !== qe || t[46] !== xe
    ? ((J = { ...K, ...q, backgroundColor: Ke, color: qe, translate: xe }),
      (t[42] = K),
      (t[43] = q),
      (t[44] = Ke),
      (t[45] = qe),
      (t[46] = xe),
      (t[47] = J))
    : (J = t[47]);
  let Je = V,
    Y;
  t[48] !== F || t[49] !== w
    ? ((Y = w || F ? void 0 : { scale: 1.06 }), (t[48] = F), (t[49] = w), (t[50] = Y))
    : (Y = t[50]);
  let X;
  t[51] !== F || t[52] !== w
    ? ((X = w || F ? void 0 : { scale: 0.94 }), (t[51] = F), (t[52] = w), (t[53] = X))
    : (X = t[53]);
  let Ye = f ? 0 : (a?.hiddenBlurRadiusPx ?? 0),
    Z;
  t[54] === Ye ? (Z = t[55]) : ((Z = h(Ye)), (t[54] = Ye), (t[55] = Z));
  let Xe = +!!f,
    Ze = f || a == null ? 1 : a.hiddenScale,
    Q;
  t[56] !== Z || t[57] !== Xe || t[58] !== Ze
    ? ((Q = { filter: Z, opacity: Xe, scale: Ze }),
      (t[56] = Z),
      (t[57] = Xe),
      (t[58] = Ze),
      (t[59] = Q))
    : (Q = t[59]);
  let $;
  t[60] !== E || t[61] !== s.content || t[62] !== Q
    ? (($ = (0, M.jsx)(ee.span, {
        animate: Q,
        className: `flex items-center justify-center`,
        initial: !1,
        transition: E,
        children: s.content,
      })),
      (t[60] = E),
      (t[61] = s.content),
      (t[62] = Q),
      (t[63] = $))
    : ($ = t[63]);
  let Qe;
  return (
    t[64] !== V ||
    t[65] !== ye ||
    t[66] !== s.ariaLabel ||
    t[67] !== l ||
    t[68] !== H ||
    t[69] !== U ||
    t[70] !== Ne ||
    t[71] !== Pe ||
    t[72] !== Fe ||
    t[73] !== Ie ||
    t[74] !== W ||
    t[75] !== G ||
    t[76] !== Be ||
    t[77] !== Ve ||
    t[78] !== He ||
    t[79] !== Ue ||
    t[80] !== We ||
    t[81] !== Ge ||
    t[82] !== J ||
    t[83] !== Y ||
    t[84] !== X ||
    t[85] !== $
      ? ((Qe = (0, M.jsx)(ee.button, {
          type: `button`,
          animate: H,
          "aria-label": we,
          className: U,
          "data-avatar-overlay-native-corner-radius": Ne,
          "data-avatar-overlay-native-tint": Pe,
          "data-avatar-overlay-native-surface-id": Fe,
          "data-testid": `avatar-overlay-notification-badge`,
          "data-avatar-overlay-hit-region": Ie,
          initial: W,
          exit: G,
          onClick: ye,
          onUpdate: l,
          layout: Be,
          onLostPointerCapture: Ve,
          onPointerCancel: He,
          onPointerDown: Ue,
          onPointerMove: We,
          onPointerUp: Ge,
          style: J,
          transition: Je,
          whileHover: Y,
          whileTap: X,
          children: $,
        })),
        (t[64] = V),
        (t[65] = ye),
        (t[66] = s.ariaLabel),
        (t[67] = l),
        (t[68] = H),
        (t[69] = U),
        (t[70] = Ne),
        (t[71] = Pe),
        (t[72] = Fe),
        (t[73] = Ie),
        (t[74] = W),
        (t[75] = G),
        (t[76] = Be),
        (t[77] = Ve),
        (t[78] = He),
        (t[79] = Ue),
        (t[80] = We),
        (t[81] = Ge),
        (t[82] = J),
        (t[83] = Y),
        (t[84] = X),
        (t[85] = $),
        (t[86] = Qe))
      : (Qe = t[86]),
    Qe
  );
}
function de({ avatarBounds: e, clientX: t, clientY: n }) {
  return `${n < e.top + e.height / 2 ? `top` : `bottom`}-${t < e.left + e.width / 2 ? `start` : `end`}`;
}
var fe,
  j,
  M,
  pe,
  me,
  he,
  ge,
  _e = e(() => {
    ((fe = c()),
      d(),
      f(),
      l(),
      a(),
      (j = t(r(), 1)),
      x(),
      u(),
      ae(),
      p(),
      C(),
      w(),
      k(),
      (M = o()),
      (pe = 4),
      (me = { damping: 20, mass: 0.7, stiffness: 420, type: `spring` }),
      (he = {
        "top-start": `top-0 left-0`,
        "top-end": `top-0 right-0`,
        "bottom-start": `bottom-0 left-0`,
        "bottom-end": `right-7 bottom-0`,
      }),
      (ge = s(`avatar-mascot-notification-badge-corner`, `top-end`)));
  });
export {
  k as a,
  v as c,
  y as d,
  g as f,
  le as i,
  _ as l,
  x as m,
  A as n,
  oe as o,
  h as p,
  _e as r,
  C as s,
  ue as t,
  b as u,
};
//# sourceMappingURL=avatar-mascot-button-13f6c2a71e01.js.map
