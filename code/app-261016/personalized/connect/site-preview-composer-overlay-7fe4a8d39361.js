import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, ZSt as r, iCt as i } from "./app-shared-2feb3d4c6fcc.js";
import { Lt as a, Rt as o } from "./app-primary-3e00728c2a4c.js";
import { n as s, t as c } from "./content-chat-surface-4e82aae84549.js";
function l(e) {
  let t = (0, u.c)(10),
    n,
    r,
    a;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (a = t[3]))
    : (({ composerOnly: r, placement: a, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = a));
  let s = r === void 0 || r,
    l = a === void 0 ? `floating` : a,
    f = i(o),
    p = f ? `floating` : l,
    m = !f && n.reserveContent,
    h = f ? !0 : n.showHeader,
    g;
  return (
    t[4] !== s || t[5] !== n || t[6] !== p || t[7] !== m || t[8] !== h
      ? ((g = (0, d.jsx)(c, { ...n, composerOnly: s, placement: p, reserveContent: m, showHeader: h })),
        (t[4] = s),
        (t[5] = n),
        (t[6] = p),
        (t[7] = m),
        (t[8] = h),
        (t[9] = g))
      : (g = t[9]),
    g
  );
}
var u, d;
function f() {
  return (f = e(() => {
    ((u = n()), r(), s(), a(), (d = t()));
  }))();
}
export { f as n, l as t };
//# sourceMappingURL=site-preview-composer-overlay-7fe4a8d39361.js.map
