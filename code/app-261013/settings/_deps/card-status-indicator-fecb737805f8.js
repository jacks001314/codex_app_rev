import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { vzt as t, xMt as n } from "./app-shared-bbfeca5e5737.js";
function r(e) {
  let t = (0, i.c)(3),
    { ariaLabel: n, icon: r } = e,
    o;
  return (
    t[0] !== n || t[1] !== r
      ? ((o = (0, a.jsx)(`span`, {
          role: `img`,
          "aria-label": n,
          className: `flex h-7 w-7 items-center justify-center rounded-md text-codex-description`,
          children: r,
        })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = o))
      : (o = t[2]),
    o
  );
}
var i, a;
function o() {
  return (o = e(() => {
    ((i = t()), (a = n()));
  }))();
}
export { o as n, r as t };
//# sourceMappingURL=card-status-indicator-fecb737805f8.js.map
