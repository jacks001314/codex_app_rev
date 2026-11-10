import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n } from "./app-shared-2feb3d4c6fcc.js";
import { Hpr as r, Jvn as i, Upr as a, zvn as o } from "./app-initial-ad16eaadf81f.js";
import { J as s, Q as c, t as l } from "./src-64808839b2f3.js";
function u(e) {
  let t = (0, d.c)(9),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ screenshotUrl: r, ...n } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let { data: o } = i(r),
    { platform: l } = a(),
    u = l === `windows` ? `windows` : `mac`,
    p;
  t[3] === u ? (p = t[4]) : ((p = (0, f.jsx)(s, { "aria-hidden": !0, platform: u })), (t[3] = u), (t[4] = p));
  let m;
  return (
    t[5] !== n || t[6] !== o || t[7] !== p
      ? ((m = (0, f.jsx)(c, { ...n, screenshotSrc: o, thumbnail: p })),
        (t[5] = n),
        (t[6] = o),
        (t[7] = p),
        (t[8] = m))
      : (m = t[8]),
    m
  );
}
var d, f;
function p() {
  return (p = e(() => {
    ((d = n()), l(), o(), r(), (f = t()));
  }))();
}
export { p as n, u as t };
//# sourceMappingURL=site-preview-4f8756af126e.js.map
