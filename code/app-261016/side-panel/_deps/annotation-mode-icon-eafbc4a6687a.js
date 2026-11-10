import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  LNt as n,
  MNt as r,
  MY as i,
  NNt as a,
  PBt as o,
  SB as s,
  fy as c,
  hy as l,
  my as u,
  py as d,
  wB as f,
} from "./app-shared-2feb3d4c6fcc.js";
var p, m, h, g;
function _() {
  return (_ = e(() => {
    ((p = `_entering_ivzvx_2`),
      (m = `_cursorPulse_ivzvx_55`),
      (h = `_frameTilt_ivzvx_55`),
      (g = { entering: p, cursorPulse: m, frameTilt: h }));
  }))();
}
function v(e) {
  let t = (0, y.c)(8),
    { active: n, size: a } = e,
    o;
  t[0] === n ? (o = t[1]) : ((o = { active: n, entering: !1 }), (t[0] = n), (t[1] = o));
  let [l, d] = (0, b.useState)(o);
  l.active !== n && d({ active: n, entering: n });
  let f = l.entering && g.entering,
    p;
  t[2] === f ? (p = t[3]) : ((p = r(`pointer-events-none shrink-0`, f)), (t[2] = f), (t[3] = p));
  let m;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { assets: { 16: i(u), 20: i(c) } }), (t[4] = m))
    : (m = t[4]);
  let h;
  return (
    t[5] !== a || t[6] !== p
      ? ((h = (0, x.jsx)(s, { className: p, icon: m, size: a })), (t[5] = a), (t[6] = p), (t[7] = h))
      : (h = t[7]),
    h
  );
}
var y, b, x;
function S() {
  return (S = e(() => {
    ((y = o()), l(), d(), a(), (b = t()), f(), _(), (x = n()));
  }))();
}
export { S as n, v as t };
//# sourceMappingURL=annotation-mode-icon-eafbc4a6687a.js.map
