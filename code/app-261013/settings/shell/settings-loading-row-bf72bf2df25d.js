import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { i3 as t, iw as n, r3 as r, tw as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
function s(e) {
  let t = (0, c.c)(3),
    { children: n } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, l.jsx)(r, { className: `icon-xs shrink-0 text-secondary` })), (t[0] = a))
    : (a = t[0]);
  let o;
  return (
    t[1] === n
      ? (o = t[2])
      : ((o = (0, l.jsx)(`div`, {
          role: `status`,
          children: (0, l.jsx)(i, {
            label: (0, l.jsxs)(`span`, {
              className: `flex items-center gap-2 font-normal text-secondary`,
              children: [a, (0, l.jsx)(`span`, { className: `text-balance`, children: n })],
            }),
            control: null,
          }),
        })),
        (t[1] = n),
        (t[2] = o)),
    o
  );
}
var c, l;
function u() {
  return (u = e(() => {
    ((c = a()), t(), n(), (l = o()));
  }))();
}
export { u as n, s as t };
//# sourceMappingURL=settings-loading-row-bf72bf2df25d.js.map
