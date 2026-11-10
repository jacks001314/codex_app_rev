import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { IDt as t, i3 as n, jDt as r, r3 as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
function s() {
  let e = (0, c.c)(2),
    n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, l.jsx)(i, { className: `icon-lg` })), (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, l.jsxs)(`div`, {
          className: `flex h-full items-center justify-center`,
          role: `status`,
          children: [
            n,
            (0, l.jsx)(`span`, {
              className: `sr-only`,
              children: (0, l.jsx)(t, {
                id: `inbox.automations.teams.runs.loadingChat`,
                defaultMessage: `Loading scheduled run…`,
                description: `Status announced while a scheduled run chat is loading in the side panel`,
              }),
            }),
          ],
        })),
        (e[1] = r))
      : (r = e[1]),
    r
  );
}
var c, l;
function u() {
  return (u = e(() => {
    ((c = a()), r(), n(), (l = o()));
  }))();
}
export { u as n, s as t };
//# sourceMappingURL=loading-55b192407552.js.map
