import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { FNt as t, LNt as n, MNt as r, NNt as i, PBt as a } from "./app-shared-2feb3d4c6fcc.js";
import { n as o, t as s } from "./image-edit-toolbar-b4c63cc4a779.js";
function c(e) {
  let t = (0, l.c)(15),
    { children: n, container: i, ref: a, zoom: o } = e,
    c = i == null && `absolute start-button-toolbar-inline top-1/2 z-30 -translate-y-1/2`,
    f;
  t[0] === c ? (f = t[1]) : ((f = r(`pointer-events-none`, c)), (t[0] = c), (t[1] = f));
  let p;
  t[2] !== i || t[3] !== o
    ? ((p = i == null ? { zoom: o } : void 0), (t[2] = i), (t[3] = o), (t[4] = p))
    : (p = t[4]);
  let m;
  t[5] === n
    ? (m = t[6])
    : ((m = (0, d.jsx)(s, { className: `pointer-events-auto`, children: n })), (t[5] = n), (t[6] = m));
  let h;
  t[7] !== a || t[8] !== f || t[9] !== p || t[10] !== m
    ? ((h = (0, d.jsx)(`div`, {
        ref: a,
        className: f,
        style: p,
        "data-annotation-control": ``,
        children: m,
      })),
      (t[7] = a),
      (t[8] = f),
      (t[9] = p),
      (t[10] = m),
      (t[11] = h))
    : (h = t[11]);
  let g = h,
    _;
  return (
    t[12] !== i || t[13] !== g
      ? ((_ = i == null ? g : (0, u.createPortal)(g, i)), (t[12] = i), (t[13] = g), (t[14] = _))
      : (_ = t[14]),
    _
  );
}
var l, u, d;
function f() {
  return (f = e(() => {
    ((l = a()), i(), (u = t()), o(), (d = n()));
  }))();
}
export { f as n, c as t };
//# sourceMappingURL=image-edit-size-control-b617380ec325.js.map
