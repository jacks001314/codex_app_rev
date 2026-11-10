import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  CPt as t,
  Rpn as n,
  SPt as r,
  gPt as i,
  hmn as a,
  kmn as o,
  pPt as s,
  zpn as c,
} from "./app-initial-f094ef01c64d.js";
import { n as l, t as u } from "./codex-pet-assets-16127cbc3056.js";
function d(e) {
  let t = (0, f.c)(13),
    { avatar: a, className: o, size: s, source: c } = e,
    l = s === void 0 ? `md` : s,
    d = l === `sm` ? `size-8` : `size-16`,
    m;
  t[0] !== o || t[1] !== d
    ? ((m = n(`flex shrink-0 items-center justify-center overflow-hidden rounded-lg`, d, o)),
      (t[0] = o),
      (t[1] = d),
      (t[2] = m))
    : (m = t[2]);
  let h = a?.id ?? `default`,
    g = l === `sm` ? `scale-[0.42]` : `scale-75`,
    _;
  t[3] !== a || t[4] !== c
    ? ((_ = c ?? (a == null ? { assetRef: `codex` } : r(a))), (t[3] = a), (t[4] = c), (t[5] = _))
    : (_ = t[5]);
  let v;
  t[6] !== g || t[7] !== _
    ? ((v = (0, p.jsx)(i, { assetMap: u, className: g, source: _ })),
      (t[6] = g),
      (t[7] = _),
      (t[8] = v))
    : (v = t[8]);
  let y;
  return (
    t[9] !== m || t[10] !== h || t[11] !== v
      ? ((y = (0, p.jsx)(`div`, { className: m, "data-avatar-id": h, children: v })),
        (t[9] = m),
        (t[10] = h),
        (t[11] = v),
        (t[12] = y))
      : (y = t[12]),
    y
  );
}
var f,
  p,
  m = e(() => {
    ((f = o()), s(), c(), l(), t(), (p = a()));
  });
export { m as n, d as t };
//# sourceMappingURL=avatar-artwork-a609915b617a.js.map
