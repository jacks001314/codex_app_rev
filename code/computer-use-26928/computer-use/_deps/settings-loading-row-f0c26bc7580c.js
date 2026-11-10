import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  CE as t,
  Cy as n,
  _dn as r,
  mcn as i,
  wE as a,
  xy as o,
} from "./app-shared-7552fc8d5d82.js";
function s(e) {
  let n = (0, c.c)(3),
    { children: r } = e,
    i;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, l.jsx)(t, { className: `icon-xs shrink-0 text-secondary` })), (n[0] = i))
    : (i = n[0]);
  let a;
  return (
    n[1] === r
      ? (a = n[2])
      : ((a = (0, l.jsx)(`div`, {
          role: `status`,
          children: (0, l.jsx)(o, {
            label: (0, l.jsxs)(`span`, {
              className: `flex items-center gap-2 font-normal text-secondary`,
              children: [i, (0, l.jsx)(`span`, { className: `text-balance`, children: r })],
            }),
            control: null,
          }),
        })),
        (n[1] = r),
        (n[2] = a)),
    a
  );
}
var c, l;
function u() {
  return (u = e(() => {
    ((c = r()), a(), n(), (l = i()));
  }))();
}
export { u as n, s as t };
//# sourceMappingURL=settings-loading-row-f0c26bc7580c.js.map
