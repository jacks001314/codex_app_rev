import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  JR as t,
  Twt as n,
  YR as r,
  _wt as i,
  gwt as a,
  vzt as o,
  wwt as s,
  xMt as c,
} from "./app-shared-bbfeca5e5737.js";
function l(e) {
  let t = (0, u.c)(22),
    { className: a, children: o, disableAnimations: s, index: c, variant: l } = e,
    f = s !== void 0 && s,
    p = r(),
    m = n(),
    h = l !== `card`,
    g = l === `feed` ? Math.min(c, 5) * 0.09 : c * 0.025,
    _ = l === `feed` ? 0.34 : 0.15;
  if (f) {
    let e;
    return (
      t[0] !== o || t[1] !== a
        ? ((e = (0, d.jsx)(`div`, { className: a, children: o })), (t[0] = o), (t[1] = a), (t[2] = e))
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
    t[14] !== o || t[15] !== a || t[16] !== E || t[17] !== v || t[18] !== y || t[19] !== x || t[20] !== S
      ? ((D = (0, d.jsx)(i.div, {
          className: a,
          inert: v,
          "aria-hidden": y,
          animate: b,
          initial: x,
          exit: S,
          transition: E,
          children: o,
        })),
        (t[14] = o),
        (t[15] = a),
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
    ((u = o()), a(), s(), t(), (d = c()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=home-suggestion-staggered-item-85bcd6ed2372.js.map
