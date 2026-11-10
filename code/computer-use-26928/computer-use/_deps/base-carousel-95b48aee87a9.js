import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { mcn as t, ncn as n, rcn as r } from "./app-shared-7552fc8d5d82.js";
import { KR as i } from "./app-initial-3916b423772b.js";
function a({ viewportRef: e, label: t, children: r, className: i }) {
  return (0, o.jsx)(`section`, {
    ref: e,
    "aria-label": t,
    tabIndex: 0,
    className: n(
      `tortilla-carousel-viewport flex min-w-0 gap-4 overflow-x-auto overscroll-x-contain pb-1 scrollbar-none [&::-webkit-scrollbar]:hidden`,
      i,
    ),
    children: r,
  });
}
var o;
function s() {
  return (s = e(() => {
    (r(), (o = t()), i());
  }))();
}
export { s as n, a as t };
//# sourceMappingURL=base-carousel-95b48aee87a9.js.map
