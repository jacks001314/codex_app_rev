import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, sw as r, uw as i } from "./app-shared-2feb3d4c6fcc.js";
import { oon as a, son as o } from "./app-initial-ad16eaadf81f.js";
import { n as s, t as c } from "./workspace-avatar-fallback-a91361d9829b.js";
function l(e) {
  let t = (0, u.c)(18),
    { name: n, identifier: i, imageUrl: o, description: s, personal: l, openRow: f, action: p } = e,
    m = f !== void 0 && f,
    h = !m,
    g = m ? `content` : `minimum`,
    _ = m ? `row` : `sm`,
    v;
  t[0] !== m || t[1] !== l
    ? ((v = l || m ? void 0 : (0, d.jsx)(c, { size: `sm` })), (t[0] = m), (t[1] = l), (t[2] = v))
    : (v = t[2]);
  let y;
  t[3] !== o || t[4] !== n || t[5] !== _ || t[6] !== v
    ? ((y = (0, d.jsx)(a, { alt: ``, size: _, fallback: v, name: n, src: o })),
      (t[3] = o),
      (t[4] = n),
      (t[5] = _),
      (t[6] = v),
      (t[7] = y))
    : (y = t[7]);
  let b;
  t[8] !== s || t[9] !== i
    ? ((b =
        i == null
          ? s
          : (0, d.jsxs)(d.Fragment, {
              children: [i, s != null && (0, d.jsxs)(d.Fragment, { children: [(0, d.jsx)(`br`, {}), s] })],
            })),
      (t[8] = s),
      (t[9] = i),
      (t[10] = b))
    : (b = t[10]);
  let x;
  return (
    t[11] !== p || t[12] !== n || t[13] !== h || t[14] !== g || t[15] !== y || t[16] !== b
      ? ((x = (0, d.jsx)(`div`, {
          role: `listitem`,
          children: (0, d.jsx)(r, {
            variant: `featured`,
            inset: h,
            controlSizing: g,
            icon: y,
            label: n,
            description: b,
            control: p,
          }),
        })),
        (t[11] = p),
        (t[12] = n),
        (t[13] = h),
        (t[14] = g),
        (t[15] = y),
        (t[16] = b),
        (t[17] = x))
      : (x = t[17]),
    x
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = n()), o(), i(), s(), (d = t()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=workspace-picker-row-c31eb90f1084.js.map
