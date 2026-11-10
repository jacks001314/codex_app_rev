import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  FTt as n,
  HTt as r,
  ITt as i,
  Jz as a,
  LNt as o,
  PBt as s,
  UTt as c,
  VTt as l,
  WTt as u,
  ZSt as d,
  _D as f,
  bB as p,
  fD as m,
  gD as h,
  iCt as g,
  mD as _,
  pD as v,
  qz as y,
  vB as b,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  E7n as x,
  _7n as S,
  b7n as C,
  g9t as w,
  j7n as T,
  k7n as E,
  m9t as D,
  p7n as O,
  y7n as k,
} from "./app-initial-ad16eaadf81f.js";
import { a as A, i as j, o as M } from "./thread-summary-panel-components-10c7926d4688.js";
import { i as N, o as P } from "./use-thread-summary-panel-fc6ca9230767.js";
function F(e) {
  let t = (0, B.c)(22),
    { children: n, isOpen: r, onOpenChange: i, shouldPreventAutoFocus: a, trigger: o } = e,
    s = a !== void 0 && a,
    c = (0, V.useContext)(D),
    u = (0, V.useContext)(E)?.chatPaneElement,
    [d, f] = (0, V.useState)(null),
    g = 8 * p(),
    _ = d ?? void 0,
    y;
  t[0] !== u || t[1] !== c || t[2] !== _ || t[3] !== d
    ? ((y = {
        contextElement: _,
        getBoundingClientRect() {
          let e =
              (
                d?.closest(`[data-app-shell-main-titlebar]`) ??
                d?.closest(`[data-app-shell-header-toolbar], [data-app-shell-titlebar]`) ??
                d
              )?.getBoundingClientRect() ?? new DOMRect(),
            t = z(c, u);
          if (t == null) return e;
          let n = t.getBoundingClientRect(),
            r = Math.max(e.left, n.left),
            i = Math.min(e.right, n.right);
          return new DOMRect(r, e.top, Math.max(0, i - r), e.height);
        },
      }),
      (t[0] = u),
      (t[1] = c),
      (t[2] = _),
      (t[3] = d),
      (t[4] = y))
    : (y = t[4]);
  let b = y,
    x;
  t[5] === b ? (x = t[6]) : ((x = (0, H.jsx)(v, { virtualRef: { current: b } })), (t[5] = b), (t[6] = x));
  let S;
  t[7] === o
    ? (S = t[8])
    : ((S = (0, H.jsx)(h, { ref: f, asChild: !0, children: o })), (t[7] = o), (t[8] = S));
  let C;
  t[9] !== n || t[10] !== r || t[11] !== g || t[12] !== s
    ? ((C =
        r &&
        (0, H.jsx)(R, {
          className: `z-50 flex flex-col text-default outline-hidden`,
          align: `end`,
          alignOffset: g,
          collisionPadding: g,
          side: `bottom`,
          sideOffset: g,
          unstyled: !0,
          onOpenAutoFocus: (e) => {
            s && e.preventDefault();
          },
          onCloseAutoFocus: (e) => {
            s && e.preventDefault();
          },
          onFocusOutside: L,
          onPointerDownOutside: I,
          style: { maxHeight: `none`, maxWidth: `none` },
          children: n,
        })),
      (t[9] = n),
      (t[10] = r),
      (t[11] = g),
      (t[12] = s),
      (t[13] = C))
    : (C = t[13]);
  let w;
  t[14] === C ? (w = t[15]) : ((w = (0, H.jsx)(l, { children: C })), (t[14] = C), (t[15] = w));
  let T;
  return (
    t[16] !== r || t[17] !== i || t[18] !== x || t[19] !== S || t[20] !== w
      ? ((T = (0, H.jsxs)(m, { open: r, onOpenChange: i, children: [x, S, w] })),
        (t[16] = r),
        (t[17] = i),
        (t[18] = x),
        (t[19] = S),
        (t[20] = w),
        (t[21] = T))
      : (T = t[21]),
    T
  );
}
function I(e) {
  e.target instanceof Element &&
    e.target.closest(`[data-app-shell-tab-strip-controller="right"]`) != null &&
    e.preventDefault();
}
function L(e) {
  e.target instanceof Element &&
    e.target.matches(`[role="tabpanel"][data-app-shell-tab-panel-controller="right"]`) &&
    e.preventDefault();
}
function R(e) {
  let t = (0, B.c)(24),
    n,
    r,
    o;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (o = t[3]))
    : (({ children: n, className: r, ...o } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = o));
  let s = u(),
    c = g(a),
    l = (0, V.useContext)(D),
    d = (0, V.useContext)(E)?.chatPaneElement,
    f = p(),
    m = (0, V.useRef)(null),
    h = (0, V.useRef)(!c),
    v;
  t[4] !== d || t[5] !== l || t[6] !== f
    ? ((v = () => {
        let e = m.current,
          t = z(l, d);
        if (e == null || t == null || !h.current) return;
        let n = t.getBoundingClientRect(),
          r = e.getBoundingClientRect();
        e.style.clipPath = `inset(${(n.top - r.top) / f}px ${(r.right - n.right) / f}px ${(r.bottom - n.bottom) / f}px ${(n.left - r.left) / f}px)`;
      }),
      (t[4] = d),
      (t[5] = l),
      (t[6] = f),
      (t[7] = v))
    : (v = t[7]);
  let y = v,
    b = !s,
    x = !s,
    S;
  t[8] === y
    ? (S = t[9])
    : ((S = () => {
        ((h.current = !0), requestAnimationFrame(y));
      }),
      (t[8] = y),
      (t[9] = S));
  let C;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        ((h.current = !1), m.current?.style.removeProperty(`clip-path`));
      }),
      (t[10] = C))
    : (C = t[10]);
  let w = !c && A.hidden,
    T;
  t[11] === c ? (T = t[12]) : ((T = c ? { duration: 0 } : j), (t[11] = c), (t[12] = T));
  let O;
  t[13] !== n || t[14] !== S || t[15] !== w || t[16] !== T
    ? ((O = (0, H.jsx)(i.div, {
        onAnimationStart: S,
        onAnimationComplete: C,
        initial: w,
        animate: A.visible,
        exit: A.hidden,
        transition: T,
        children: n,
      })),
      (t[13] = n),
      (t[14] = S),
      (t[15] = w),
      (t[16] = T),
      (t[17] = O))
    : (O = t[17]);
  let k;
  return (
    t[18] !== r || t[19] !== o || t[20] !== b || t[21] !== x || t[22] !== O
      ? ((k = (0, H.jsx)(_, {
          ...o,
          ref: m,
          className: r,
          forceMount: !0,
          "aria-hidden": b,
          inert: x,
          children: O,
        })),
        (t[18] = r),
        (t[19] = o),
        (t[20] = b),
        (t[21] = x),
        (t[22] = O),
        (t[23] = k))
      : (k = t[23]),
    k
  );
}
function z(e, t) {
  return t === void 0 ? (e?.querySelector(`[data-app-shell-main-content-layout]`) ?? e) : (t ?? e);
}
var B, V, H;
function U() {
  return (U = e(() => {
    ((B = s()), r(), n(), c(), d(), (V = t()), T(), w(), b(), f(), y(), M(), (H = o()));
  }))();
}
function W(e, t = !0) {
  let n = e.get(P),
    r = S(t === !0 ? e.get(x) : e.get(C, t), t);
  if (n.displayMode !== `overlay`) {
    t === !0 ? e.set(x, !r) : e.set(C, t, O(t, !r));
    return;
  }
  let i = n.isPopoverOpen || (typeof t != `boolean` && r);
  (typeof t != `boolean` && e.set(C, t, O(t, !i)), e.set(P, { ...n, isPopoverOpen: !i }));
}
function G() {
  return (G = e(() => {
    (k(), N());
  }))();
}
export { U as i, W as n, F as r, G as t };
//# sourceMappingURL=toggle-thread-summary-panel-8090102114c0.js.map
