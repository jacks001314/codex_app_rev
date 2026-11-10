import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $R as t,
  BE as n,
  Cwt as r,
  Cz as i,
  HE as a,
  Pxt as o,
  QR as s,
  RE as c,
  Swt as l,
  Twt as u,
  Tz as d,
  UE as f,
  Vxt as p,
  _wt as m,
  gwt as h,
  vzt as g,
  wwt as _,
  xMt as v,
  yzt as y,
  zE as b,
} from "./app-shared-bbfeca5e5737.js";
import {
  A3n as x,
  I3n as S,
  J3n as C,
  K3n as w,
  L3n as T,
  P3n as E,
  U3n as D,
  Y8t as O,
  q8t as k,
} from "./app-initial-5851df3f6cb1.js";
import { a as A, i as j, o as M } from "./thread-summary-panel-components-7e14b3bbe8fe.js";
import { i as N, o as P } from "./use-thread-summary-panel-14572b4b8411.js";
function F(e) {
  let t = (0, B.c)(22),
    { children: n, isOpen: r, onOpenChange: i, shouldPreventAutoFocus: o, trigger: s } = e,
    u = o !== void 0 && o,
    f = (0, V.useContext)(k),
    p = (0, V.useContext)(w)?.chatPaneElement,
    [m, h] = (0, V.useState)(null),
    g = 8 * d(),
    _ = m ?? void 0,
    v;
  t[0] !== p || t[1] !== f || t[2] !== _ || t[3] !== m
    ? ((v = {
        contextElement: _,
        getBoundingClientRect() {
          let e =
              (
                m?.closest(`[data-app-shell-main-titlebar]`) ??
                m?.closest(`[data-app-shell-header-toolbar], [data-app-shell-titlebar]`) ??
                m
              )?.getBoundingClientRect() ?? new DOMRect(),
            t = z(f, p);
          if (t == null) return e;
          let n = t.getBoundingClientRect(),
            r = Math.max(e.left, n.left),
            i = Math.min(e.right, n.right);
          return new DOMRect(r, e.top, Math.max(0, i - r), e.height);
        },
      }),
      (t[0] = p),
      (t[1] = f),
      (t[2] = _),
      (t[3] = m),
      (t[4] = v))
    : (v = t[4]);
  let y = v,
    x;
  t[5] === y ? (x = t[6]) : ((x = (0, H.jsx)(b, { virtualRef: { current: y } })), (t[5] = y), (t[6] = x));
  let S;
  t[7] === s
    ? (S = t[8])
    : ((S = (0, H.jsx)(a, { ref: h, asChild: !0, children: s })), (t[7] = s), (t[8] = S));
  let C;
  t[9] !== n || t[10] !== r || t[11] !== g || t[12] !== u
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
            u && e.preventDefault();
          },
          onCloseAutoFocus: (e) => {
            u && e.preventDefault();
          },
          onFocusOutside: L,
          onPointerDownOutside: I,
          style: { maxHeight: `none`, maxWidth: `none` },
          children: n,
        })),
      (t[9] = n),
      (t[10] = r),
      (t[11] = g),
      (t[12] = u),
      (t[13] = C))
    : (C = t[13]);
  let T;
  t[14] === C ? (T = t[15]) : ((T = (0, H.jsx)(l, { children: C })), (t[14] = C), (t[15] = T));
  let E;
  return (
    t[16] !== r || t[17] !== i || t[18] !== x || t[19] !== S || t[20] !== T
      ? ((E = (0, H.jsxs)(c, { open: r, onOpenChange: i, children: [x, S, T] })),
        (t[16] = r),
        (t[17] = i),
        (t[18] = x),
        (t[19] = S),
        (t[20] = T),
        (t[21] = E))
      : (E = t[21]),
    E
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
  let r = (0, B.c)(24),
    i,
    a,
    o;
  r[0] === e
    ? ((i = r[1]), (a = r[2]), (o = r[3]))
    : (({ children: i, className: a, ...o } = e), (r[0] = e), (r[1] = i), (r[2] = a), (r[3] = o));
  let s = u(),
    c = p(t),
    l = (0, V.useContext)(k),
    f = (0, V.useContext)(w)?.chatPaneElement,
    h = d(),
    g = (0, V.useRef)(null),
    _ = (0, V.useRef)(!c),
    v;
  r[4] !== f || r[5] !== l || r[6] !== h
    ? ((v = () => {
        let e = g.current,
          t = z(l, f);
        if (e == null || t == null || !_.current) return;
        let n = t.getBoundingClientRect(),
          r = e.getBoundingClientRect();
        e.style.clipPath = `inset(${(n.top - r.top) / h}px ${(r.right - n.right) / h}px ${(r.bottom - n.bottom) / h}px ${(n.left - r.left) / h}px)`;
      }),
      (r[4] = f),
      (r[5] = l),
      (r[6] = h),
      (r[7] = v))
    : (v = r[7]);
  let y = v,
    b = !s,
    x = !s,
    S;
  r[8] === y
    ? (S = r[9])
    : ((S = () => {
        ((_.current = !0), requestAnimationFrame(y));
      }),
      (r[8] = y),
      (r[9] = S));
  let C;
  r[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = () => {
        ((_.current = !1), g.current?.style.removeProperty(`clip-path`));
      }),
      (r[10] = C))
    : (C = r[10]);
  let T = !c && A.hidden,
    E;
  r[11] === c ? (E = r[12]) : ((E = c ? { duration: 0 } : j), (r[11] = c), (r[12] = E));
  let D;
  r[13] !== i || r[14] !== S || r[15] !== T || r[16] !== E
    ? ((D = (0, H.jsx)(m.div, {
        onAnimationStart: S,
        onAnimationComplete: C,
        initial: T,
        animate: A.visible,
        exit: A.hidden,
        transition: E,
        children: i,
      })),
      (r[13] = i),
      (r[14] = S),
      (r[15] = T),
      (r[16] = E),
      (r[17] = D))
    : (D = r[17]);
  let O;
  return (
    r[18] !== a || r[19] !== o || r[20] !== b || r[21] !== x || r[22] !== D
      ? ((O = (0, H.jsx)(n, {
          ...o,
          ref: g,
          className: a,
          forceMount: !0,
          "aria-hidden": b,
          inert: x,
          children: D,
        })),
        (r[18] = a),
        (r[19] = o),
        (r[20] = b),
        (r[21] = x),
        (r[22] = D),
        (r[23] = O))
      : (O = r[23]),
    O
  );
}
function z(e, t) {
  return t === void 0 ? (e?.querySelector(`[data-app-shell-main-content-layout]`) ?? e) : (t ?? e);
}
var B, V, H;
function U() {
  return (U = e(() => {
    ((B = g()), r(), h(), _(), o(), (V = y()), C(), O(), i(), f(), s(), M(), (H = v()));
  }))();
}
function W(e, t = !0) {
  let n = e.get(P),
    r = E(t === !0 ? e.get(D) : e.get(T, t), t);
  if (n.displayMode !== `overlay`) {
    t === !0 ? e.set(D, !r) : e.set(T, t, x(t, !r));
    return;
  }
  let i = n.isPopoverOpen || (typeof t != `boolean` && r);
  (typeof t != `boolean` && e.set(T, t, x(t, !i)), e.set(P, { ...n, isPopoverOpen: !i }));
}
function G() {
  return (G = e(() => {
    (S(), N());
  }))();
}
export { U as i, W as n, F as r, G as t };
//# sourceMappingURL=toggle-thread-summary-panel-6f770204f2c3.js.map
