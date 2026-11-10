import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $St as t,
  $st as n,
  ETt as r,
  FBt as ee,
  FTt as i,
  ITt as a,
  LNt as o,
  MNt as te,
  NNt as s,
  PBt as c,
  Qst as ne,
  TTt as l,
  ZSt as u,
  iCt as re,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  ALr as d,
  Cet as f,
  Df as p,
  Eet as ie,
  Of as m,
  Set as h,
  kLr as g,
  xet as ae,
} from "./app-initial-ad16eaadf81f.js";
function _(e) {
  return `blur(max(0px, ${e}px))`;
}
var v, y, b, x, S;
function C() {
  return (C = e(() => {
    ((v = { duration: 0.22, ease: [0.4, 0, 0.6, 1] }),
      (y = { damping: 26.18, mass: 1, stiffness: 685.3890625, type: `spring`, velocity: 0 }),
      (b = {
        damping: 32.67256359733385,
        mass: 1,
        stiffness: 631.6546816697189,
        type: `spring`,
        velocity: 0,
      }),
      (x = { default: y, filter: { ...y, damping: 52.36 } }),
      (S = { default: b, filter: { ...b, damping: 2 * Math.sqrt(b.stiffness * b.mass) } }));
  }))();
}
var w, oe;
function T() {
  return (T = e(() => {
    ((w = `_nativeTint_9fqu7_6`), (oe = { nativeTint: w }));
  }))();
}
function E(e) {
  let t = (0, ce.c)(20),
    {
      ariaLabel: n,
      className: r,
      lookFrame: ee,
      notificationBadge: i,
      onContextMenu: a,
      source: o,
      state: s,
      style: c,
      transientState: ne,
    } = e,
    l = s === void 0 ? `idle` : s,
    [u, re] = (0, O.useState)(!1),
    d = ne ?? (u ? `jumping` : l),
    f = d === `idle` || d === `running` || d === `waving`,
    p = i != null,
    m;
  n != null && (m = p ? `group` : `img`);
  let h;
  t[0] === r
    ? (h = t[1])
    : ((h = te(
        `codex-avatar-button relative flex cursor-interaction items-center justify-center active:cursor-grabbing`,
        r,
      )),
      (t[0] = r),
      (t[1] = h));
  let g = (n == null && !p) || void 0,
    _,
    v;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = () => {
        re(!0);
      }),
      (v = () => {
        re(!1);
      }),
      (t[2] = _),
      (t[3] = v))
    : ((_ = t[2]), (v = t[3]));
  let y = f ? ee : null,
    b;
  t[4] !== d || t[5] !== o || t[6] !== y
    ? ((b = (0, k.jsx)(ie, {
        assetMap: ae,
        className: `codex-avatar-root relative z-10`,
        lookFrame: y,
        source: o,
        state: d,
      })),
      (t[4] = d),
      (t[5] = o),
      (t[6] = y),
      (t[7] = b))
    : (b = t[7]);
  let x;
  t[8] !== p || t[9] !== i
    ? ((x = p ? (0, k.jsx)(D, { notificationBadge: i }) : null), (t[8] = p), (t[9] = i), (t[10] = x))
    : (x = t[10]);
  let S;
  return (
    t[11] !== n ||
    t[12] !== a ||
    t[13] !== m ||
    t[14] !== c ||
    t[15] !== h ||
    t[16] !== g ||
    t[17] !== b ||
    t[18] !== x
      ? ((S = (0, k.jsxs)(`div`, {
          className: h,
          "data-avatar-mascot": `true`,
          "data-testid": `avatar-mascot-button`,
          "aria-hidden": g,
          "aria-label": n,
          role: m,
          onContextMenu: a,
          onPointerEnter: _,
          onPointerLeave: v,
          style: c,
          children: [b, x],
        })),
        (t[11] = n),
        (t[12] = a),
        (t[13] = m),
        (t[14] = c),
        (t[15] = h),
        (t[16] = g),
        (t[17] = b),
        (t[18] = x),
        (t[19] = S))
      : (S = t[19]),
    S
  );
}
function D(e) {
  let n = (0, ce.c)(87),
    {
      animatesExit: ee,
      contentVisibilityAnimation: i,
      ignoresReducedMotion: o,
      isContentVisible: s,
      notificationBadge: c,
      nativeCornerRadius: l,
      onAnimationFrame: u,
      presentationPosition: d,
    } = e,
    f = ee !== void 0 && ee,
    ie = o !== void 0 && o,
    m = s === void 0 || s,
    h = l === void 0 ? 12 : l,
    g = t(ne),
    ae = re(fe) ?? `top-end`,
    [v, x] = (0, O.useState)(null),
    C = (0, O.useRef)(null),
    w = (0, O.useRef)(!1),
    T = r() && !ie,
    E;
  n[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((E = { duration: 0 }), (n[0] = E)) : (E = n[0]);
  let D = E;
  i != null && (D = m ? i.revealTransition : S);
  let A;
  n[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (e) => {
        e.button === 0 &&
          (e.stopPropagation(),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          (C.current = {
            hasMoved: !1,
            pointerId: e.pointerId,
            startClientX: e.clientX,
            startClientY: e.clientY,
          }));
      }),
      (n[1] = A))
    : (A = n[1]);
  let pe = A,
    j;
  n[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (e) => {
        let t = C.current;
        if (t == null || t.pointerId !== e.pointerId) return;
        e.stopPropagation();
        let n = e.clientX - t.startClientX,
          r = e.clientY - t.startClientY;
        (!t.hasMoved && Math.abs(n) < le && Math.abs(r) < le) ||
          (e.preventDefault(), (t.hasMoved = !0), x({ x: n, y: r }));
      }),
      (n[2] = j))
    : (j = n[2]);
  let me = j,
    M;
  n[3] === g
    ? (M = n[4])
    : ((M = (e) => {
        let t = C.current;
        if (
          t != null &&
          t.pointerId === e.pointerId &&
          (e.stopPropagation(),
          (C.current = null),
          e.currentTarget.hasPointerCapture?.(e.pointerId) &&
            e.currentTarget.releasePointerCapture?.(e.pointerId),
          t.hasMoved)
        ) {
          let t = e.currentTarget.closest(`[data-avatar-mascot='true']`)?.getBoundingClientRect();
          (t != null && g.set(fe, se({ avatarBounds: t, clientX: e.clientX, clientY: e.clientY })),
            x(null),
            e.preventDefault(),
            (w.current = !0),
            window.setTimeout(() => {
              w.current = !1;
            }, 0));
        }
      }),
      (n[3] = g),
      (n[4] = M));
  let he = M,
    N;
  n[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (e) => {
        let t = C.current;
        (e.stopPropagation(),
          (C.current = null),
          x(null),
          t != null &&
            e.currentTarget.hasPointerCapture?.(t.pointerId) &&
            e.currentTarget.releasePointerCapture?.(t.pointerId));
      }),
      (n[5] = N))
    : (N = n[5]);
  let ge = N,
    P;
  n[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = () => {
        ((C.current = null), x(null));
      }),
      (n[6] = P))
    : (P = n[6]);
  let _e = P,
    F;
  n[7] === c
    ? (F = n[8])
    : ((F = (e) => {
        if ((e.stopPropagation(), w.current)) {
          ((w.current = !1), e.preventDefault());
          return;
        }
        c.onClick();
      }),
      (n[7] = c),
      (n[8] = F));
  let ve = F,
    ye = d == null ? de[ae] : null,
    be = v == null ? void 0 : `${v.x}px ${v.y}px`,
    I = c.isGlassy,
    L = I && c.isIconOnly,
    R = d == null,
    z = I && i != null && d != null,
    B = m ? y : b,
    xe;
  n[9] !== z || n[10] !== d
    ? ((xe = z ? { height: d.height, left: d.left, top: d.top, width: d.width } : {}),
      (n[9] = z),
      (n[10] = d),
      (n[11] = xe))
    : (xe = n[11]);
  let Se = xe,
    V = ue;
  if (T) {
    let e;
    (n[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = { duration: 0 }), (n[12] = e)) : (e = n[12]),
      (V = e));
  } else if (z) {
    let e;
    (n[13] === B
      ? (e = n[14])
      : ((e = { default: ue, borderRadius: B, height: B, left: B, top: B, width: B }),
        (n[13] = B),
        (n[14] = e)),
      (V = e));
  }
  let Ce = I ? h : void 0,
    H;
  n[15] !== Se || n[16] !== Ce
    ? ((H = { ...Se, borderRadius: Ce, opacity: 1, scale: 1, y: 0 }), (n[15] = Se), (n[16] = Ce), (n[17] = H))
    : (H = n[17]);
  let we = c.ariaLabel,
    Te = I && p.Material,
    Ee = I && !L && oe.nativeTint,
    De = R ? `cursor-grab touch-none active:cursor-grabbing` : `cursor-interaction`,
    Oe = !I && `shadow-sm`,
    ke = !c.isGlassy && `border-border/60`,
    Ae =
      I &&
      `before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:content-[''] enabled:active:before:bg-text/12 forced-colors:!border-[ButtonBorder] forced-colors:!bg-[ButtonFace] forced-colors:!text-[ButtonText] forced-colors:backdrop-blur-none dark:enabled:active:before:bg-text/15 [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none`,
    je = I && !m && `!border-transparent`,
    Me = L && `text-default`,
    U;
  n[18] !== ye ||
  n[19] !== Te ||
  n[20] !== Ee ||
  n[21] !== De ||
  n[22] !== Oe ||
  n[23] !== ke ||
  n[24] !== Ae ||
  n[25] !== je ||
  n[26] !== Me
    ? ((U = te(
        Te,
        Ee,
        `no-drag absolute z-40 flex select-none items-center justify-center rounded-full border text-xs leading-none font-medium focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none`,
        De,
        ye,
        Oe,
        ke,
        Ae,
        je,
        Me,
        `size-6 p-0`,
      )),
      (n[18] = ye),
      (n[19] = Te),
      (n[20] = Ee),
      (n[21] = De),
      (n[22] = Oe),
      (n[23] = ke),
      (n[24] = Ae),
      (n[25] = je),
      (n[26] = Me),
      (n[27] = U))
    : (U = n[27]);
  let Ne = I ? h : void 0,
    Pe = I && !L ? c.nativeTint : void 0,
    Fe = I ? `mascot-badge` : void 0,
    Ie = d == null ? void 0 : `mascot-badge`,
    Le = I ? h : void 0,
    Re = T ? 1 : 0.7,
    ze = T ? 0 : 3,
    W;
  n[28] !== Le || n[29] !== Re || n[30] !== ze
    ? ((W = { borderRadius: Le, opacity: 0, scale: Re, y: ze }),
      (n[28] = Le),
      (n[29] = Re),
      (n[30] = ze),
      (n[31] = W))
    : (W = n[31]);
  let G;
  n[32] !== f || n[33] !== T
    ? ((G = f
        ? { opacity: 0, scale: T ? 1 : 0.7, transition: { duration: 0.16, ease: `easeOut` }, y: T ? 0 : 3 }
        : void 0),
      (n[32] = f),
      (n[33] = T),
      (n[34] = G))
    : (G = n[34]);
  let Be = d == null || z ? void 0 : `position`,
    Ve = R ? _e : void 0,
    He = R ? ge : void 0,
    Ue = R ? pe : void 0,
    We = R ? me : void 0,
    Ge = R ? he : void 0,
    K;
  n[35] !== z || n[36] !== d ? ((K = z ? {} : d), (n[35] = z), (n[36] = d), (n[37] = K)) : (K = n[37]);
  let q;
  n[38] !== I || n[39] !== L || n[40] !== c.backgroundColor
    ? ((q = I && !L ? { "--avatar-overlay-material-background": c.backgroundColor } : {}),
      (n[38] = I),
      (n[39] = L),
      (n[40] = c.backgroundColor),
      (n[41] = q))
    : (q = n[41]);
  let Ke = I ? void 0 : c.backgroundColor,
    qe = L ? void 0 : c.foregroundColor,
    J;
  n[42] !== K || n[43] !== q || n[44] !== Ke || n[45] !== qe || n[46] !== be
    ? ((J = { ...K, ...q, backgroundColor: Ke, color: qe, translate: be }),
      (n[42] = K),
      (n[43] = q),
      (n[44] = Ke),
      (n[45] = qe),
      (n[46] = be),
      (n[47] = J))
    : (J = n[47]);
  let Je = V,
    Y;
  n[48] !== I || n[49] !== T
    ? ((Y = T || I ? void 0 : { scale: 1.06 }), (n[48] = I), (n[49] = T), (n[50] = Y))
    : (Y = n[50]);
  let X;
  n[51] !== I || n[52] !== T
    ? ((X = T || I ? void 0 : { scale: 0.94 }), (n[51] = I), (n[52] = T), (n[53] = X))
    : (X = n[53]);
  let Ye = m ? 0 : (i?.hiddenBlurRadiusPx ?? 0),
    Z;
  n[54] === Ye ? (Z = n[55]) : ((Z = _(Ye)), (n[54] = Ye), (n[55] = Z));
  let Xe = +!!m,
    Ze = m || i == null ? 1 : i.hiddenScale,
    Q;
  n[56] !== Z || n[57] !== Xe || n[58] !== Ze
    ? ((Q = { filter: Z, opacity: Xe, scale: Ze }), (n[56] = Z), (n[57] = Xe), (n[58] = Ze), (n[59] = Q))
    : (Q = n[59]);
  let $;
  n[60] !== D || n[61] !== c.content || n[62] !== Q
    ? (($ = (0, k.jsx)(a.span, {
        animate: Q,
        className: `flex items-center justify-center`,
        initial: !1,
        transition: D,
        children: c.content,
      })),
      (n[60] = D),
      (n[61] = c.content),
      (n[62] = Q),
      (n[63] = $))
    : ($ = n[63]);
  let Qe;
  return (
    n[64] !== V ||
    n[65] !== ve ||
    n[66] !== c.ariaLabel ||
    n[67] !== u ||
    n[68] !== H ||
    n[69] !== U ||
    n[70] !== Ne ||
    n[71] !== Pe ||
    n[72] !== Fe ||
    n[73] !== Ie ||
    n[74] !== W ||
    n[75] !== G ||
    n[76] !== Be ||
    n[77] !== Ve ||
    n[78] !== He ||
    n[79] !== Ue ||
    n[80] !== We ||
    n[81] !== Ge ||
    n[82] !== J ||
    n[83] !== Y ||
    n[84] !== X ||
    n[85] !== $
      ? ((Qe = (0, k.jsx)(a.button, {
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
          onClick: ve,
          onUpdate: u,
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
        (n[64] = V),
        (n[65] = ve),
        (n[66] = c.ariaLabel),
        (n[67] = u),
        (n[68] = H),
        (n[69] = U),
        (n[70] = Ne),
        (n[71] = Pe),
        (n[72] = Fe),
        (n[73] = Ie),
        (n[74] = W),
        (n[75] = G),
        (n[76] = Be),
        (n[77] = Ve),
        (n[78] = He),
        (n[79] = Ue),
        (n[80] = We),
        (n[81] = Ge),
        (n[82] = J),
        (n[83] = Y),
        (n[84] = X),
        (n[85] = $),
        (n[86] = Qe))
      : (Qe = n[86]),
    Qe
  );
}
function se({ avatarBounds: e, clientX: t, clientY: n }) {
  return `${n < e.top + e.height / 2 ? `top` : `bottom`}-${t < e.left + e.width / 2 ? `start` : `end`}`;
}
var ce, O, k, le, ue, de, fe;
function A() {
  return (A = e(() => {
    ((ce = c()),
      f(),
      s(),
      i(),
      l(),
      u(),
      (O = ee()),
      C(),
      n(),
      g(),
      h(),
      T(),
      m(),
      (k = o()),
      (le = 4),
      (ue = { damping: 20, mass: 0.7, stiffness: 420, type: `spring` }),
      (de = {
        "top-start": `top-0 left-0`,
        "top-end": `top-0 right-0`,
        "bottom-start": `bottom-0 left-0`,
        "bottom-end": `right-7 bottom-0`,
      }),
      (fe = d(`avatar-mascot-notification-badge-corner`, `top-end`)));
  }))();
}
export { T as a, S as c, _ as d, C as f, oe as i, x as l, D as n, b as o, A as r, y as s, E as t, v as u };
//# sourceMappingURL=avatar-mascot-button-e7fcb276ea86.js.map
