import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  Vxt as ee,
  _Mt as i,
  _wt as a,
  gMt as te,
  gwt as o,
  owt as s,
  swt as ne,
  vzt as re,
  wot as c,
  xMt as l,
  yzt as u,
} from "./app-shared-bbfeca5e5737.js";
import {
  $7 as d,
  Ef as f,
  Tf as ie,
  e9 as p,
  i9 as m,
  iNr as h,
  rNr as g,
  t9 as _,
} from "./app-initial-5851df3f6cb1.js";
function v(e) {
  return `blur(max(0px, ${e}px))`;
}
var y, b, x, S, C;
function w() {
  return (w = e(() => {
    ((y = { duration: 0.22, ease: [0.4, 0, 0.6, 1] }),
      (b = { damping: 26.18, mass: 1, stiffness: 685.3890625, type: `spring`, velocity: 0 }),
      (x = {
        damping: 32.67256359733385,
        mass: 1,
        stiffness: 631.6546816697189,
        type: `spring`,
        velocity: 0,
      }),
      (S = { default: b, filter: { ...b, damping: 52.36 } }),
      (C = { default: x, filter: { ...x, damping: 2 * Math.sqrt(x.stiffness * x.mass) } }));
  }))();
}
var T, ae;
function E() {
  return (E = e(() => {
    ((T = `_nativeTint_9fqu7_6`), (ae = { nativeTint: T }));
  }))();
}
function D(e) {
  let t = (0, se.c)(20),
    {
      ariaLabel: n,
      className: r,
      lookFrame: ee,
      notificationBadge: i,
      onContextMenu: a,
      source: o,
      state: s,
      style: ne,
      transientState: re,
    } = e,
    c = s === void 0 ? `idle` : s,
    [l, u] = (0, k.useState)(!1),
    f = re ?? (l ? `jumping` : c),
    ie = f === `idle` || f === `running` || f === `waving`,
    p = i != null,
    h;
  n != null && (h = p ? `group` : `img`);
  let g;
  t[0] === r
    ? (g = t[1])
    : ((g = te(
        `codex-avatar-button relative flex cursor-interaction items-center justify-center active:cursor-grabbing`,
        r,
      )),
      (t[0] = r),
      (t[1] = g));
  let _ = (n == null && !p) || void 0,
    v,
    y;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = () => {
        u(!0);
      }),
      (y = () => {
        u(!1);
      }),
      (t[2] = v),
      (t[3] = y))
    : ((v = t[2]), (y = t[3]));
  let b = ie ? ee : null,
    x;
  t[4] !== f || t[5] !== o || t[6] !== b
    ? ((x = (0, A.jsx)(m, {
        assetMap: d,
        className: `codex-avatar-root relative z-10`,
        lookFrame: b,
        source: o,
        state: f,
      })),
      (t[4] = f),
      (t[5] = o),
      (t[6] = b),
      (t[7] = x))
    : (x = t[7]);
  let S;
  t[8] !== p || t[9] !== i
    ? ((S = p ? (0, A.jsx)(O, { notificationBadge: i }) : null), (t[8] = p), (t[9] = i), (t[10] = S))
    : (S = t[10]);
  let C;
  return (
    t[11] !== n ||
    t[12] !== a ||
    t[13] !== h ||
    t[14] !== ne ||
    t[15] !== g ||
    t[16] !== _ ||
    t[17] !== x ||
    t[18] !== S
      ? ((C = (0, A.jsxs)(`div`, {
          className: g,
          "data-avatar-mascot": `true`,
          "data-testid": `avatar-mascot-button`,
          "aria-hidden": _,
          "aria-label": n,
          role: h,
          onContextMenu: a,
          onPointerEnter: v,
          onPointerLeave: y,
          style: ne,
          children: [x, S],
        })),
        (t[11] = n),
        (t[12] = a),
        (t[13] = h),
        (t[14] = ne),
        (t[15] = g),
        (t[16] = _),
        (t[17] = x),
        (t[18] = S),
        (t[19] = C))
      : (C = t[19]),
    C
  );
}
function O(e) {
  let r = (0, se.c)(87),
    {
      animatesExit: i,
      contentVisibilityAnimation: o,
      ignoresReducedMotion: s,
      isContentVisible: re,
      notificationBadge: c,
      nativeCornerRadius: l,
      onAnimationFrame: u,
      presentationPosition: d,
    } = e,
    f = i !== void 0 && i,
    p = s !== void 0 && s,
    m = re === void 0 || re,
    h = l === void 0 ? 12 : l,
    g = n(t),
    _ = ee(de) ?? `top-end`,
    [y, S] = (0, k.useState)(null),
    w = (0, k.useRef)(null),
    T = (0, k.useRef)(!1),
    E = ne() && !p,
    D;
  r[0] === Symbol.for(`react.memo_cache_sentinel`) ? ((D = { duration: 0 }), (r[0] = D)) : (D = r[0]);
  let O = D;
  o != null && (O = m ? o.revealTransition : C);
  let j;
  r[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (e) => {
        e.button === 0 &&
          (e.stopPropagation(),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          (w.current = {
            hasMoved: !1,
            pointerId: e.pointerId,
            startClientX: e.clientX,
            startClientY: e.clientY,
          }));
      }),
      (r[1] = j))
    : (j = r[1]);
  let fe = j,
    M;
  r[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (e) => {
        let t = w.current;
        if (t == null || t.pointerId !== e.pointerId) return;
        e.stopPropagation();
        let n = e.clientX - t.startClientX,
          r = e.clientY - t.startClientY;
        (!t.hasMoved && Math.abs(n) < ce && Math.abs(r) < ce) ||
          (e.preventDefault(), (t.hasMoved = !0), S({ x: n, y: r }));
      }),
      (r[2] = M))
    : (M = r[2]);
  let pe = M,
    N;
  r[3] === g
    ? (N = r[4])
    : ((N = (e) => {
        let t = w.current;
        if (
          t != null &&
          t.pointerId === e.pointerId &&
          (e.stopPropagation(),
          (w.current = null),
          e.currentTarget.hasPointerCapture?.(e.pointerId) &&
            e.currentTarget.releasePointerCapture?.(e.pointerId),
          t.hasMoved)
        ) {
          let t = e.currentTarget.closest(`[data-avatar-mascot='true']`)?.getBoundingClientRect();
          (t != null && g.set(de, oe({ avatarBounds: t, clientX: e.clientX, clientY: e.clientY })),
            S(null),
            e.preventDefault(),
            (T.current = !0),
            window.setTimeout(() => {
              T.current = !1;
            }, 0));
        }
      }),
      (r[3] = g),
      (r[4] = N));
  let me = N,
    P;
  r[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (e) => {
        let t = w.current;
        (e.stopPropagation(),
          (w.current = null),
          S(null),
          t != null &&
            e.currentTarget.hasPointerCapture?.(t.pointerId) &&
            e.currentTarget.releasePointerCapture?.(t.pointerId));
      }),
      (r[5] = P))
    : (P = r[5]);
  let he = P,
    ge;
  r[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = () => {
        ((w.current = null), S(null));
      }),
      (r[6] = ge))
    : (ge = r[6]);
  let _e = ge,
    ve;
  r[7] === c
    ? (ve = r[8])
    : ((ve = (e) => {
        if ((e.stopPropagation(), T.current)) {
          ((T.current = !1), e.preventDefault());
          return;
        }
        c.onClick();
      }),
      (r[7] = c),
      (r[8] = ve));
  let ye = ve,
    be = d == null ? ue[_] : null,
    xe = y == null ? void 0 : `${y.x}px ${y.y}px`,
    F = c.isGlassy,
    I = F && c.isIconOnly,
    L = d == null,
    R = F && o != null && d != null,
    z = m ? b : x,
    B;
  r[9] !== R || r[10] !== d
    ? ((B = R ? { height: d.height, left: d.left, top: d.top, width: d.width } : {}),
      (r[9] = R),
      (r[10] = d),
      (r[11] = B))
    : (B = r[11]);
  let Se = B,
    V = le;
  if (E) {
    let e;
    (r[12] === Symbol.for(`react.memo_cache_sentinel`) ? ((e = { duration: 0 }), (r[12] = e)) : (e = r[12]),
      (V = e));
  } else if (R) {
    let e;
    (r[13] === z
      ? (e = r[14])
      : ((e = { default: le, borderRadius: z, height: z, left: z, top: z, width: z }),
        (r[13] = z),
        (r[14] = e)),
      (V = e));
  }
  let Ce = F ? h : void 0,
    H;
  r[15] !== Se || r[16] !== Ce
    ? ((H = { ...Se, borderRadius: Ce, opacity: 1, scale: 1, y: 0 }), (r[15] = Se), (r[16] = Ce), (r[17] = H))
    : (H = r[17]);
  let we = c.ariaLabel,
    Te = F && ie.Material,
    Ee = F && !I && ae.nativeTint,
    De = L ? `cursor-grab touch-none active:cursor-grabbing` : `cursor-interaction`,
    Oe = !F && `shadow-sm`,
    ke = !c.isGlassy && `border-border/60`,
    Ae =
      F &&
      `before:pointer-events-none before:absolute before:inset-0 before:rounded-full before:content-[''] enabled:active:before:bg-text/12 forced-colors:!border-[ButtonBorder] forced-colors:!bg-[ButtonFace] forced-colors:!text-[ButtonText] forced-colors:backdrop-blur-none dark:enabled:active:before:bg-text/15 [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none`,
    je = F && !m && `!border-transparent`,
    Me = I && `text-default`,
    U;
  r[18] !== be ||
  r[19] !== Te ||
  r[20] !== Ee ||
  r[21] !== De ||
  r[22] !== Oe ||
  r[23] !== ke ||
  r[24] !== Ae ||
  r[25] !== je ||
  r[26] !== Me
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
      (r[18] = be),
      (r[19] = Te),
      (r[20] = Ee),
      (r[21] = De),
      (r[22] = Oe),
      (r[23] = ke),
      (r[24] = Ae),
      (r[25] = je),
      (r[26] = Me),
      (r[27] = U))
    : (U = r[27]);
  let Ne = F ? h : void 0,
    Pe = F && !I ? c.nativeTint : void 0,
    Fe = F ? `mascot-badge` : void 0,
    Ie = d == null ? void 0 : `mascot-badge`,
    Le = F ? h : void 0,
    Re = E ? 1 : 0.7,
    ze = E ? 0 : 3,
    W;
  r[28] !== Le || r[29] !== Re || r[30] !== ze
    ? ((W = { borderRadius: Le, opacity: 0, scale: Re, y: ze }),
      (r[28] = Le),
      (r[29] = Re),
      (r[30] = ze),
      (r[31] = W))
    : (W = r[31]);
  let G;
  r[32] !== f || r[33] !== E
    ? ((G = f
        ? { opacity: 0, scale: E ? 1 : 0.7, transition: { duration: 0.16, ease: `easeOut` }, y: E ? 0 : 3 }
        : void 0),
      (r[32] = f),
      (r[33] = E),
      (r[34] = G))
    : (G = r[34]);
  let Be = d == null || R ? void 0 : `position`,
    Ve = L ? _e : void 0,
    He = L ? he : void 0,
    Ue = L ? fe : void 0,
    We = L ? pe : void 0,
    Ge = L ? me : void 0,
    K;
  r[35] !== R || r[36] !== d ? ((K = R ? {} : d), (r[35] = R), (r[36] = d), (r[37] = K)) : (K = r[37]);
  let q;
  r[38] !== F || r[39] !== I || r[40] !== c.backgroundColor
    ? ((q = F && !I ? { "--avatar-overlay-material-background": c.backgroundColor } : {}),
      (r[38] = F),
      (r[39] = I),
      (r[40] = c.backgroundColor),
      (r[41] = q))
    : (q = r[41]);
  let Ke = F ? void 0 : c.backgroundColor,
    qe = I ? void 0 : c.foregroundColor,
    J;
  r[42] !== K || r[43] !== q || r[44] !== Ke || r[45] !== qe || r[46] !== xe
    ? ((J = { ...K, ...q, backgroundColor: Ke, color: qe, translate: xe }),
      (r[42] = K),
      (r[43] = q),
      (r[44] = Ke),
      (r[45] = qe),
      (r[46] = xe),
      (r[47] = J))
    : (J = r[47]);
  let Je = V,
    Y;
  r[48] !== F || r[49] !== E
    ? ((Y = E || F ? void 0 : { scale: 1.06 }), (r[48] = F), (r[49] = E), (r[50] = Y))
    : (Y = r[50]);
  let X;
  r[51] !== F || r[52] !== E
    ? ((X = E || F ? void 0 : { scale: 0.94 }), (r[51] = F), (r[52] = E), (r[53] = X))
    : (X = r[53]);
  let Ye = m ? 0 : (o?.hiddenBlurRadiusPx ?? 0),
    Z;
  r[54] === Ye ? (Z = r[55]) : ((Z = v(Ye)), (r[54] = Ye), (r[55] = Z));
  let Xe = +!!m,
    Ze = m || o == null ? 1 : o.hiddenScale,
    Q;
  r[56] !== Z || r[57] !== Xe || r[58] !== Ze
    ? ((Q = { filter: Z, opacity: Xe, scale: Ze }), (r[56] = Z), (r[57] = Xe), (r[58] = Ze), (r[59] = Q))
    : (Q = r[59]);
  let $;
  r[60] !== O || r[61] !== c.content || r[62] !== Q
    ? (($ = (0, A.jsx)(a.span, {
        animate: Q,
        className: `flex items-center justify-center`,
        initial: !1,
        transition: O,
        children: c.content,
      })),
      (r[60] = O),
      (r[61] = c.content),
      (r[62] = Q),
      (r[63] = $))
    : ($ = r[63]);
  let Qe;
  return (
    r[64] !== V ||
    r[65] !== ye ||
    r[66] !== c.ariaLabel ||
    r[67] !== u ||
    r[68] !== H ||
    r[69] !== U ||
    r[70] !== Ne ||
    r[71] !== Pe ||
    r[72] !== Fe ||
    r[73] !== Ie ||
    r[74] !== W ||
    r[75] !== G ||
    r[76] !== Be ||
    r[77] !== Ve ||
    r[78] !== He ||
    r[79] !== Ue ||
    r[80] !== We ||
    r[81] !== Ge ||
    r[82] !== J ||
    r[83] !== Y ||
    r[84] !== X ||
    r[85] !== $
      ? ((Qe = (0, A.jsx)(a.button, {
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
        (r[64] = V),
        (r[65] = ye),
        (r[66] = c.ariaLabel),
        (r[67] = u),
        (r[68] = H),
        (r[69] = U),
        (r[70] = Ne),
        (r[71] = Pe),
        (r[72] = Fe),
        (r[73] = Ie),
        (r[74] = W),
        (r[75] = G),
        (r[76] = Be),
        (r[77] = Ve),
        (r[78] = He),
        (r[79] = Ue),
        (r[80] = We),
        (r[81] = Ge),
        (r[82] = J),
        (r[83] = Y),
        (r[84] = X),
        (r[85] = $),
        (r[86] = Qe))
      : (Qe = r[86]),
    Qe
  );
}
function oe({ avatarBounds: e, clientX: t, clientY: n }) {
  return `${n < e.top + e.height / 2 ? `top` : `bottom`}-${t < e.left + e.width / 2 ? `start` : `end`}`;
}
var se, k, A, ce, le, ue, de;
function j() {
  return (j = e(() => {
    ((se = re()),
      _(),
      i(),
      o(),
      s(),
      r(),
      (k = u()),
      w(),
      c(),
      g(),
      p(),
      E(),
      f(),
      (A = l()),
      (ce = 4),
      (le = { damping: 20, mass: 0.7, stiffness: 420, type: `spring` }),
      (ue = {
        "top-start": `top-0 left-0`,
        "top-end": `top-0 right-0`,
        "bottom-start": `bottom-0 left-0`,
        "bottom-end": `right-7 bottom-0`,
      }),
      (de = h(`avatar-mascot-notification-badge-corner`, `top-end`)));
  }))();
}
export { E as a, C as c, v as d, w as f, ae as i, S as l, O as n, x as o, j as r, b as s, D as t, y as u };
//# sourceMappingURL=avatar-mascot-button-8eddbeaf6243.js.map
