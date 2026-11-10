import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  MMt as t,
  Xu as n,
  hmn as r,
  jMt as i,
  kmn as a,
  qu as o,
} from "./app-initial-f094ef01c64d.js";
function s(e) {
  let t = (0, c.c)(3),
    { children: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, l.jsx)(i, { className: `icon-xs shrink-0 text-secondary` })), (t[0] = r))
    : (r = t[0]);
  let a;
  return (
    t[1] === n
      ? (a = t[2])
      : ((a = (0, l.jsx)(`div`, {
          role: `status`,
          children: (0, l.jsx)(o, {
            label: (0, l.jsxs)(`span`, {
              className: `flex items-center gap-2 font-normal text-secondary`,
              children: [r, (0, l.jsx)(`span`, { className: `text-balance`, children: n })],
            }),
            control: null,
          }),
        })),
        (t[1] = n),
        (t[2] = a)),
    a
  );
}
var c,
  l,
  u = e(() => {
    ((c = a()), t(), n(), (l = r()));
  });
export { u as n, s as t };
//# sourceMappingURL=settings-loading-row-de4ab81779d6.js.map
