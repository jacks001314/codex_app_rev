import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  XC as t,
  YC as n,
  ZC as r,
  _Mt as i,
  gMt as a,
  vzt as o,
  xMt as s,
} from "./app-shared-bbfeca5e5737.js";
var c, l;
function u() {
  return (u = e(() => {
    ((c = `_interactive_10sh1_1`), (l = { interactive: c }));
  }))();
}
function d(e) {
  let r = (0, f.c)(6),
    { children: i, dividerInset: o, variant: s } = e,
    c = o === void 0 ? `default` : o,
    u = s === void 0 ? `default` : s,
    d = c === `none` ? t : n,
    m;
  r[0] !== d || r[1] !== u
    ? ((m = u === `interactive` ? a(`divide-y`, l.interactive) : d), (r[0] = d), (r[1] = u), (r[2] = m))
    : (m = r[2]);
  let h;
  return (
    r[3] !== i || r[4] !== m
      ? ((h = (0, p.jsx)(`div`, { className: m, children: i })), (r[3] = i), (r[4] = m), (r[5] = h))
      : (h = r[5]),
    h
  );
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = o()), i(), r(), u(), (p = s()));
  }))();
}
export { m as n, d as t };
//# sourceMappingURL=settings-rows-3e4ff6fa8232.js.map
