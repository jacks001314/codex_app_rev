import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Bv as t,
  Dz as n,
  Hv as r,
  MJ as i,
  Uv as a,
  Vv as o,
  _Mt as s,
  gMt as c,
  kz as l,
  vzt as u,
  xMt as d,
  yzt as f,
} from "./app-shared-bbfeca5e5737.js";
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
  let a = (0, y.c)(8),
    { active: o, size: s } = e,
    l;
  a[0] === o ? (l = a[1]) : ((l = { active: o, entering: !1 }), (a[0] = o), (a[1] = l));
  let [u, d] = (0, b.useState)(l);
  u.active !== o && d({ active: o, entering: o });
  let f = u.entering && g.entering,
    p;
  a[2] === f ? (p = a[3]) : ((p = c(`pointer-events-none shrink-0`, f)), (a[2] = f), (a[3] = p));
  let m;
  a[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = { assets: { 16: i(r), 20: i(t) } }), (a[4] = m))
    : (m = a[4]);
  let h;
  return (
    a[5] !== s || a[6] !== p
      ? ((h = (0, x.jsx)(n, { className: p, icon: m, size: s })), (a[5] = s), (a[6] = p), (a[7] = h))
      : (h = a[7]),
    h
  );
}
var y, b, x;
function S() {
  return (S = e(() => {
    ((y = u()), a(), o(), s(), (b = f()), l(), _(), (x = d()));
  }))();
}
export { S as n, v as t };
//# sourceMappingURL=annotation-mode-icon-c9f59d42793c.js.map
