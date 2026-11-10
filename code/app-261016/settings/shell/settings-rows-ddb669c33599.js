import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  LNt as t,
  MNt as n,
  NNt as r,
  PBt as i,
  nw as a,
  rw as o,
  tw as s,
} from "./app-shared-2feb3d4c6fcc.js";
var c, l;
function u() {
  return (u = e(() => {
    ((c = `_interactive_10sh1_1`), (l = { interactive: c }));
  }))();
}
function d(e) {
  let t = (0, f.c)(6),
    { children: r, dividerInset: i, variant: o } = e,
    c = i === void 0 ? `default` : i,
    u = o === void 0 ? `default` : o,
    d = c === `none` ? a : s,
    m;
  t[0] !== d || t[1] !== u
    ? ((m = u === `interactive` ? n(`divide-y`, l.interactive) : d), (t[0] = d), (t[1] = u), (t[2] = m))
    : (m = t[2]);
  let h;
  return (
    t[3] !== r || t[4] !== m
      ? ((h = (0, p.jsx)(`div`, { className: m, children: r })), (t[3] = r), (t[4] = m), (t[5] = h))
      : (h = t[5]),
    h
  );
}
var f, p;
function m() {
  return (m = e(() => {
    ((f = i()), r(), o(), u(), (p = t()));
  }))();
}
export { m as n, d as t };
//# sourceMappingURL=settings-rows-ddb669c33599.js.map
