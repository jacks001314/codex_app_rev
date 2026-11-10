import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { vzt as t, xMt as n } from "./app-shared-bbfeca5e5737.js";
import { Bnn as r, bkt as i, h9 as a, p9 as o, ykt as s, znn as c } from "./app-initial-5851df3f6cb1.js";
function l(e) {
  let t = (0, u.c)(9),
    { avatarUrl: n, colorKey: r, fadeIn: o, loading: s, loadingFallback: l, muted: f, name: p, size: m } = e,
    h = m === void 0 ? `md` : m,
    { isProfileVisible: g } = i(),
    { src: _, isError: v } = a(g ? n : null),
    y = g && (s || (n != null && _ == null && !v)) ? l : void 0,
    b;
  return (
    t[0] !== r ||
    t[1] !== o ||
    t[2] !== l ||
    t[3] !== f ||
    t[4] !== p ||
    t[5] !== h ||
    t[6] !== _ ||
    t[7] !== y
      ? ((b = (0, d.jsx)(c, {
          alt: ``,
          colorKey: r,
          fadeIn: o,
          fallback: y,
          loadingFallback: l,
          muted: f,
          name: p,
          size: h,
          src: _,
        })),
        (t[0] = r),
        (t[1] = o),
        (t[2] = l),
        (t[3] = f),
        (t[4] = p),
        (t[5] = h),
        (t[6] = _),
        (t[7] = y),
        (t[8] = b))
      : (b = t[8]),
    b
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = t()), o(), r(), s(), (d = n()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=profile-avatar-90effac925f0.js.map
