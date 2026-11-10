import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  Cot as t,
  Ixt as n,
  Pxt as r,
  _xt as i,
  iot as a,
  ixt as o,
  vzt as s,
  wot as c,
  xMt as l,
} from "./app-shared-bbfeca5e5737.js";
import { Rrt as u, oFr as d, zrt as f } from "./app-initial-5851df3f6cb1.js";
function p(e) {
  let r = (0, m.c)(6),
    { children: i, teamId: s } = e,
    c = n(t),
    l = `/settings/teams/${encodeURIComponent(s)}`,
    u;
  r[0] === c
    ? (u = r[1])
    : ((u = (e) => {
        !e.defaultPrevented &&
          e.button === 0 &&
          !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
          f(c, a);
      }),
      (r[0] = c),
      (r[1] = u));
  let d;
  return (
    r[2] !== i || r[3] !== l || r[4] !== u
      ? ((d = (0, h.jsx)(o, {
          className: `-mx-1 -my-0.5 inline-flex min-w-0 cursor-interaction items-center gap-1.5 rounded-sm px-1 py-0.5 text-inherit! no-underline select-none hover:bg-primary-ghost-hover hover:text-default! focus:outline-none! focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0`,
          to: l,
          onClick: u,
          children: i,
        })),
        (r[2] = i),
        (r[3] = l),
        (r[4] = u),
        (r[5] = d))
      : (d = r[5]),
    d
  );
}
var m, h;
function g() {
  return (g = e(() => {
    ((m = s()), r(), i(), c(), u(), d(), (h = l()));
  }))();
}
export { g as n, p as t };
//# sourceMappingURL=team-settings-link-f7f3b8c7933c.js.map
