import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { iw as t, tw as n, vzt as r, xMt as i } from "./app-shared-bbfeca5e5737.js";
import { Bnn as a, znn as o } from "./app-initial-5851df3f6cb1.js";
import { n as s, t as c } from "./workspace-avatar-fallback-5a929aeed8cb.js";
function l(e) {
  let t = (0, u.c)(18),
    { name: r, identifier: i, imageUrl: a, description: s, personal: l, openRow: f, action: p } = e,
    m = f !== void 0 && f,
    h = !m,
    g = m ? `content` : `minimum`,
    _ = m ? `row` : `sm`,
    v;
  t[0] !== m || t[1] !== l
    ? ((v = l || m ? void 0 : (0, d.jsx)(c, { size: `sm` })), (t[0] = m), (t[1] = l), (t[2] = v))
    : (v = t[2]);
  let y;
  t[3] !== a || t[4] !== r || t[5] !== _ || t[6] !== v
    ? ((y = (0, d.jsx)(o, { alt: ``, size: _, fallback: v, name: r, src: a })),
      (t[3] = a),
      (t[4] = r),
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
    t[11] !== p || t[12] !== r || t[13] !== h || t[14] !== g || t[15] !== y || t[16] !== b
      ? ((x = (0, d.jsx)(`div`, {
          role: `listitem`,
          children: (0, d.jsx)(n, {
            variant: `featured`,
            inset: h,
            controlSizing: g,
            icon: y,
            label: r,
            description: b,
            control: p,
          }),
        })),
        (t[11] = p),
        (t[12] = r),
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
    ((u = r()), a(), t(), s(), (d = i()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=workspace-picker-row-46b4bafe11d9.js.map
