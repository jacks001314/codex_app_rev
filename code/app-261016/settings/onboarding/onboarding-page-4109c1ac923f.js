import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FTt as t,
  ITt as n,
  LNt as r,
  MNt as i,
  NNt as a,
  PBt as o,
  UTt as s,
  Uz as c,
  WTt as l,
  Wz as u,
} from "./app-shared-2feb3d4c6fcc.js";
function d(e) {
  let t = (0, f.c)(16),
    { children: r, className: a } = e,
    o = u(),
    s = l(),
    c;
  t[0] === a ? (c = t[1]) : ((c = i(`flex w-full flex-col items-center`, a)), (t[0] = a), (t[1] = c));
  let d = !s,
    m;
  t[2] === o ? (m = t[3]) : ((m = !o && { opacity: 0, y: 7 }), (t[2] = o), (t[3] = m));
  let h;
  t[4] === Symbol.for(`react.memo_cache_sentinel`) ? ((h = { opacity: 1, y: 0 }), (t[4] = h)) : (h = t[4]);
  let g;
  t[5] === o ? (g = t[6]) : ((g = o ? { opacity: 1, y: 0 } : { opacity: 0, y: -7 }), (t[5] = o), (t[6] = g));
  let _ = o ? 0 : 0.2,
    v;
  t[7] === _ ? (v = t[8]) : ((v = { duration: _ }), (t[7] = _), (t[8] = v));
  let y;
  return (
    t[9] !== r || t[10] !== c || t[11] !== d || t[12] !== m || t[13] !== g || t[14] !== v
      ? ((y = (0, p.jsx)(n.div, {
          className: c,
          inert: d,
          initial: m,
          animate: h,
          exit: g,
          transition: v,
          children: r,
        })),
        (t[9] = r),
        (t[10] = c),
        (t[11] = d),
        (t[12] = m),
        (t[13] = g),
        (t[14] = v),
        (t[15] = y))
      : (y = t[15]),
    y
  );
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = o()), a(), t(), s(), c(), (p = r()));
  }))();
}
export { m as n, d as t };
//# sourceMappingURL=onboarding-page-4109c1ac923f.js.map
