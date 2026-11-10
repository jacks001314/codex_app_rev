import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $R as t,
  Pxt as n,
  QR as r,
  Vxt as i,
  _Mt as a,
  gMt as o,
  vzt as s,
  xMt as c,
  yzt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  Fnn as u,
  H7 as d,
  Inn as f,
  QGn as p,
  T5 as m,
  ly as h,
  nKn as g,
  o9 as _,
  t9 as v,
  uy as y,
  w5 as b,
} from "./app-initial-5851df3f6cb1.js";
function x(e) {
  let n = (0, C.c)(3),
    { artwork: r, size: a } = e,
    s = a === void 0 ? 32 : a,
    c =
      r.kind === `image` &&
      r.src ===
        `data:image/svg+xml,%3csvg%20width='1024'%20height='1024'%20viewBox='102%20102%20820%20820'%20fill='%23BAC1D3'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M512%20102C738.437%20102%20922%20285.563%20922%20512C922%20738.437%20738.437%20922%20512%20922C285.563%20922%20102%20738.437%20102%20512C102%20285.563%20285.563%20102%20512%20102ZM512%20349.796C422.417%20349.796%20349.796%20422.417%20349.796%20512C349.796%20601.583%20422.417%20674.204%20512%20674.204C601.583%20674.204%20674.204%20601.583%20674.204%20512C674.204%20422.417%20601.583%20349.796%20512%20349.796Z'/%3e%3c/svg%3e`,
    l = { 16: `size-4`, 20: `size-5`, 32: `size-8` }[s],
    u = i(t);
  if (r.kind === `snapshot`) return (0, T.jsx)(S, { artwork: r, className: l });
  if (r.kind === `pet`) {
    let e = r.working ? `running` : `idle`,
      t;
    return (
      n[0] !== u || n[1] !== e
        ? ((t = u ? _(e, !0).frames[0] : void 0), (n[0] = u), (n[1] = e), (n[2] = t))
        : (t = n[2]),
      (0, T.jsx)(b, { className: l, source: r, bounds: r.contentBounds, state: e, lookFrame: t })
    );
  }
  return r.kind === `generated`
    ? (0, T.jsx)(h, { className: l, seed: r.seed, "aria-hidden": !0 })
    : (0, T.jsx)(`img`, {
        className: o(
          `object-contain`,
          l,
          c && `brightness-75`,
          r.monochrome && `rounded-full brightness-0 dark:invert`,
        ),
        src: r.src,
        alt: ``,
        "aria-hidden": !0,
        draggable: !1,
      });
}
function S(e) {
  let t = (0, C.c)(17),
    { artwork: n, className: r } = e,
    i = n.inlineSrc == null,
    a;
  t[0] === i ? (a = t[1]) : ((a = { enabled: i }), (t[0] = i), (t[1] = a));
  let { src: s, isError: c } = g(n.assetPointer, E, a),
    l = n.inlineSrc ?? s,
    [u, d] = (0, w.useState)(null),
    [f, p] = (0, w.useState)(null),
    m;
  t[2] === r ? (m = t[3]) : ((m = o(`object-contain`, r)), (t[2] = r), (t[3] = m));
  let h = (n.inlineSrc == null && c) || (l != null && l === f) ? n.fallbackSrc : (u ?? n.fallbackSrc),
    _;
  t[4] === u
    ? (_ = t[5])
    : ((_ = () => {
        (p(u), d(null));
      }),
      (t[4] = u),
      (t[5] = _));
  let v;
  t[6] !== m || t[7] !== h || t[8] !== _
    ? ((v = (0, T.jsx)(`img`, {
        className: m,
        src: h,
        alt: ``,
        "aria-hidden": !0,
        draggable: !1,
        onError: _,
      })),
      (t[6] = m),
      (t[7] = h),
      (t[8] = _),
      (t[9] = v))
    : (v = t[9]);
  let y;
  t[10] !== f || t[11] !== u || t[12] !== l
    ? ((y =
        l != null && l !== u && l !== f
          ? (0, T.jsx)(`img`, {
              src: l,
              alt: ``,
              "aria-hidden": !0,
              hidden: !0,
              onLoad: () => d(l),
              onError: () => p(l),
            })
          : null),
      (t[10] = f),
      (t[11] = u),
      (t[12] = l),
      (t[13] = y))
    : (y = t[13]);
  let b;
  return (
    t[14] !== v || t[15] !== y
      ? ((b = (0, T.jsxs)(T.Fragment, { children: [v, y] })), (t[14] = v), (t[15] = y), (t[16] = b))
      : (b = t[16]),
    b
  );
}
var C, w, T, E;
function D() {
  return (D = e(() => {
    ((C = s()), v(), a(), n(), (w = l()), f(), r(), y(), p(), d(), m(), (T = c()), (E = u()));
  }))();
}
export { D as n, x as t };
//# sourceMappingURL=mini-orbit-artwork-caa11886b698.js.map
