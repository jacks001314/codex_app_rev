import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n } from "./app-shared-2feb3d4c6fcc.js";
import { Fet as r, Let as i, nEt as a, oon as o, rEt as s, son as c } from "./app-initial-ad16eaadf81f.js";
function l(e) {
  let t = (0, u.c)(9),
    { avatarUrl: n, colorKey: r, fadeIn: a, loading: c, loadingFallback: l, muted: f, name: p, size: m } = e,
    h = m === void 0 ? `md` : m,
    { isProfileVisible: g } = s(),
    { src: _, isError: v } = i(g ? n : null),
    y = g && (c || (n != null && _ == null && !v)) ? l : void 0,
    b;
  return (
    t[0] !== r ||
    t[1] !== a ||
    t[2] !== l ||
    t[3] !== f ||
    t[4] !== p ||
    t[5] !== h ||
    t[6] !== _ ||
    t[7] !== y
      ? ((b = (0, d.jsx)(o, {
          alt: ``,
          colorKey: r,
          fadeIn: a,
          fallback: y,
          loadingFallback: l,
          muted: f,
          name: p,
          size: h,
          src: _,
        })),
        (t[0] = r),
        (t[1] = a),
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
    ((u = n()), r(), c(), a(), (d = t()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=profile-avatar-bc7371feb0c0.js.map
