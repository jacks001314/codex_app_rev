import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FTt as t,
  ITt as n,
  LNt as r,
  PBt as i,
  UTt as a,
  Uz as o,
  WTt as s,
  Wz as c,
} from "./app-shared-2feb3d4c6fcc.js";
function l(e) {
  let t = (0, u.c)(22),
    { className: r, children: i, disableAnimations: a, index: o, variant: l } = e,
    f = a !== void 0 && a,
    p = c(),
    m = s(),
    h = l !== `card`,
    g = l === `feed` ? Math.min(o, 5) * 0.09 : o * 0.025,
    _ = l === `feed` ? 0.34 : 0.15;
  if (f) {
    let e;
    return (
      t[0] !== i || t[1] !== r
        ? ((e = (0, d.jsx)(`div`, { className: r, children: i })), (t[0] = i), (t[1] = r), (t[2] = e))
        : (e = t[2]),
      e
    );
  }
  let v = !m,
    y = !m || void 0,
    b;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = { opacity: 1, transform: `translateY(0)` }), (t[3] = b))
    : (b = t[3]);
  let x;
  t[4] !== h || t[5] !== p
    ? ((x = !p && { opacity: 0, transform: `translateY(${h ? 4 : 8}px)` }),
      (t[4] = h),
      (t[5] = p),
      (t[6] = x))
    : (x = t[6]);
  let S;
  t[7] !== p || t[8] !== l
    ? ((S = l === `feed` ? { opacity: 0, transition: { duration: p ? 0 : 0.12 } } : void 0),
      (t[7] = p),
      (t[8] = l),
      (t[9] = S))
    : (S = t[9]);
  let C = p ? 0 : g,
    w = p ? 0 : _,
    T;
  t[10] === Symbol.for(`react.memo_cache_sentinel`) ? ((T = [0.23, 1, 0.32, 1]), (t[10] = T)) : (T = t[10]);
  let E;
  t[11] !== C || t[12] !== w
    ? ((E = { delay: C, duration: w, ease: T }), (t[11] = C), (t[12] = w), (t[13] = E))
    : (E = t[13]);
  let D;
  return (
    t[14] !== i || t[15] !== r || t[16] !== E || t[17] !== v || t[18] !== y || t[19] !== x || t[20] !== S
      ? ((D = (0, d.jsx)(n.div, {
          className: r,
          inert: v,
          "aria-hidden": y,
          animate: b,
          initial: x,
          exit: S,
          transition: E,
          children: i,
        })),
        (t[14] = i),
        (t[15] = r),
        (t[16] = E),
        (t[17] = v),
        (t[18] = y),
        (t[19] = x),
        (t[20] = S),
        (t[21] = D))
      : (D = t[21]),
    D
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = i()), t(), a(), o(), (d = r()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=home-suggestion-staggered-item-113eac6d236d.js.map
