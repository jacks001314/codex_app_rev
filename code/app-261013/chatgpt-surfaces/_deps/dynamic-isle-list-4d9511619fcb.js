import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  Mz as n,
  Nz as r,
  cf as i,
  jDt as a,
  l0 as o,
  sf as s,
  u0 as c,
  vzt as l,
  xMt as u,
} from "./app-shared-bbfeca5e5737.js";
import { m as d, n as f, p, t as m, u as h, y as g } from "./summary-panel-expandable-list-7e5eade158bb.js";
function _(e) {
  let t = (0, y.c)(2),
    n;
  return (
    t[0] === e ? (n = t[1]) : ((n = (0, b.jsx)(m, { ...e, renderPagination: v })), (t[0] = e), (t[1] = n)),
    n
  );
}
function v(e) {
  let { isExpanded: r, isLoadingMore: i, onToggle: a } = e;
  return (0, b.jsxs)(h, {
    tone: `tertiary`,
    disabled: i,
    "aria-busy": i,
    onClick: a,
    children: [
      (0, b.jsx)(d, { variant: `custom`, children: (0, b.jsx)(n, { asset: r ? s : o }) }),
      (0, b.jsx)(p, {
        children: r
          ? (0, b.jsx)(t, {
              id: `codex.dynamicIsle.showLess`,
              defaultMessage: `Show less`,
              description: `Restore the initial page of items in a Dynamic Isle section`,
            })
          : (0, b.jsx)(t, {
              id: `codex.dynamicIsle.showMore`,
              defaultMessage: `Show more`,
              description: `Show the next page of items in a Dynamic Isle section`,
            }),
      }),
    ],
  });
}
var y, b;
function x() {
  return (x = e(() => {
    ((y = l()), c(), i(), a(), r(), f(), g(), (b = u()));
  }))();
}
export { x as n, _ as t };
//# sourceMappingURL=dynamic-isle-list-4d9511619fcb.js.map
