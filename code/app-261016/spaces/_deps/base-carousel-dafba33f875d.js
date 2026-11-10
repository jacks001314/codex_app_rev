import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, MNt as n, NNt as r } from "./app-shared-2feb3d4c6fcc.js";
import { u as i } from "./template-gallery-modal-4f828146e385.js";
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
//# sourceMappingURL=base-carousel-dafba33f875d.js.map
