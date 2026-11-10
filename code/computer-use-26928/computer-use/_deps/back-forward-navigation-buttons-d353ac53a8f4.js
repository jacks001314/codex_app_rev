import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  BT as t,
  Bct as n,
  EE as r,
  RT as i,
  SE as a,
  TE as o,
  Vct as s,
  _dn as c,
  bE as l,
  mcn as u,
} from "./app-shared-7552fc8d5d82.js";
function d(e) {
  let t = (0, f.c)(23),
    {
      backLabel: r,
      canGoBack: a,
      canGoForward: s,
      color: c,
      forwardLabel: u,
      onBack: d,
      onForward: m,
      radius: h,
    } = e,
    g = c === void 0 ? `ghost` : c,
    _ = a ? g : `ghost`,
    v = !a,
    y;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, p.jsx)(o, { "aria-hidden": !1, asset: n })), (t[0] = y))
    : (y = t[0]);
  let b;
  t[1] !== r || t[2] !== d || t[3] !== h || t[4] !== _ || t[5] !== v
    ? ((b = (0, p.jsx)(l, {
        "aria-label": r,
        color: _,
        disabled: v,
        onClick: d,
        radius: h,
        size: `toolbar`,
        uniform: !0,
        children: y,
      })),
      (t[1] = r),
      (t[2] = d),
      (t[3] = h),
      (t[4] = _),
      (t[5] = v),
      (t[6] = b))
    : (b = t[6]);
  let x;
  t[7] !== r || t[8] !== b
    ? ((x = (0, p.jsx)(i, { tooltipContent: r, side: `bottom`, children: b })),
      (t[7] = r),
      (t[8] = b),
      (t[9] = x))
    : (x = t[9]);
  let S = s ? g : `ghost`,
    C = !s,
    w;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, p.jsx)(o, { className: `-scale-x-100 transform`, "aria-hidden": !1, asset: n })),
      (t[10] = w))
    : (w = t[10]);
  let T;
  t[11] !== u || t[12] !== m || t[13] !== h || t[14] !== S || t[15] !== C
    ? ((T = (0, p.jsx)(l, {
        "aria-label": u,
        color: S,
        disabled: C,
        onClick: m,
        radius: h,
        size: `toolbar`,
        uniform: !0,
        children: w,
      })),
      (t[11] = u),
      (t[12] = m),
      (t[13] = h),
      (t[14] = S),
      (t[15] = C),
      (t[16] = T))
    : (T = t[16]);
  let E;
  t[17] !== u || t[18] !== T
    ? ((E = (0, p.jsx)(i, { tooltipContent: u, side: `bottom`, children: T })),
      (t[17] = u),
      (t[18] = T),
      (t[19] = E))
    : (E = t[19]);
  let D;
  return (
    t[20] !== E || t[21] !== x
      ? ((D = (0, p.jsxs)(p.Fragment, { children: [x, E] })), (t[20] = E), (t[21] = x), (t[22] = D))
      : (D = t[22]),
    D
  );
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = c()), s(), a(), r(), t(), (p = u()));
  }))();
}
export { m as n, d as t };
//# sourceMappingURL=back-forward-navigation-buttons-d353ac53a8f4.js.map
