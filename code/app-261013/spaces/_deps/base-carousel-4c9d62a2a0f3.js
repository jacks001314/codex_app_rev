import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { _Mt as t, gMt as n, xMt as r } from "./app-shared-bbfeca5e5737.js";
import { u as i } from "./template-gallery-modal-336945a0604c.js";
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
    (t(), (o = r()), i());
  }))();
}
export { s as n, a as t };
//# sourceMappingURL=base-carousel-4c9d62a2a0f3.js.map
