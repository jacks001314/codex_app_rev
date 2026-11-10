import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, MNt as n, NNt as r, PBt as i } from "./app-shared-2feb3d4c6fcc.js";
function a(e) {
  let t = (0, o.c)(12),
    { actions: r, ariaLabel: i, children: a, compact: c, ref: l, tabIndex: u, title: d } = e,
    f = !(c !== void 0 && c) && `flex-1`,
    p;
  t[0] === f ? (p = t[1]) : ((p = n(`flex min-h-0 flex-col gap-2`, f)), (t[0] = f), (t[1] = p));
  let m;
  t[2] !== r || t[3] !== d
    ? ((m =
        d != null || r != null
          ? (0, s.jsxs)(`div`, {
              className: `flex min-h-9 flex-wrap items-center justify-between gap-2`,
              children: [
                (0, s.jsx)(`h2`, { className: `text-base font-medium`, children: d }),
                (0, s.jsx)(`div`, { className: `flex flex-wrap items-center gap-2`, children: r }),
              ],
            })
          : null),
      (t[2] = r),
      (t[3] = d),
      (t[4] = m))
    : (m = t[4]);
  let h;
  return (
    t[5] !== i || t[6] !== a || t[7] !== l || t[8] !== p || t[9] !== m || t[10] !== u
      ? ((h = (0, s.jsxs)(`section`, {
          ref: l,
          "aria-label": i,
          className: p,
          tabIndex: u,
          children: [m, a],
        })),
        (t[5] = i),
        (t[6] = a),
        (t[7] = l),
        (t[8] = p),
        (t[9] = m),
        (t[10] = u),
        (t[11] = h))
      : (h = t[11]),
    h
  );
}
var o, s;
function c() {
  return (c = e(() => {
    ((o = i()), r(), (s = t()));
  }))();
}
export { c as n, a as t };
//# sourceMappingURL=content-section-456efce858c0.js.map
