import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { vzt as t, xMt as n } from "./app-shared-bbfeca5e5737.js";
import { $lr as r, Ogn as i, eur as a, ygn as o } from "./app-initial-5851df3f6cb1.js";
import { J as s, Q as c, t as l } from "./src-c65a930b3c0e.js";
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
    ((d = t()), l(), o(), r(), (f = n()));
  }))();
}
export { p as n, u as t };
//# sourceMappingURL=site-preview-b226ffd1d9b7.js.map
