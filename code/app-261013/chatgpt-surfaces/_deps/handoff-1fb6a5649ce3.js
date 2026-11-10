import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $4 as t,
  BV as n,
  IDt as r,
  Ixt as i,
  Pxt as a,
  TJ as o,
  Vxt as s,
  jDt as c,
  mH as l,
  t3 as u,
  vzt as d,
  xMt as f,
} from "./app-shared-bbfeca5e5737.js";
import { Cwr as p, gwr as m, gy as h, vy as g, wwr as _, yy as v } from "./app-initial-5851df3f6cb1.js";
function y(e) {
  let a = (0, b.c)(8),
    { conversationId: o, handoff: c } = e,
    u = i(m),
    d = s(_),
    f = s(h);
  if (d || !f || u.value.routeKind !== `local-thread` || u.value.conversationId !== o) return null;
  let p;
  a[0] !== c || a[1] !== u
    ? ((p = () => {
        v(u, void 0, { handoff: { ...c, requestId: crypto.randomUUID() } });
      }),
      (a[0] = c),
      (a[1] = u),
      (a[2] = p))
    : (p = a[2]);
  let g;
  a[3] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = (0, x.jsx)(l, {})), (a[3] = g)) : (g = a[3]);
  let y, S;
  a[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, x.jsx)(`span`, {
        className: `flex-1 text-start wrap-anywhere whitespace-normal`,
        children: (0, x.jsx)(r, {
          id: `restricted.aeon.computer.handoffOpen`,
          defaultMessage: `Open computer`,
          description: `Opens the dot's shared computer at the offered browser tab. Taking control is a separate action.`,
        }),
      })),
      (S = (0, x.jsx)(n, {})),
      (a[4] = y),
      (a[5] = S))
    : ((y = a[4]), (S = a[5]));
  let C;
  return (
    a[6] === p
      ? (C = a[7])
      : ((C = (0, x.jsxs)(t, {
          className: `w-fit max-w-full gap-2`,
          color: `secondary`,
          radius: `full`,
          size: `large`,
          onClick: p,
          children: [g, y, S],
        })),
        (a[6] = p),
        (a[7] = C)),
    C
  );
}
var b, x;
function S() {
  return (S = e(() => {
    ((b = d()), a(), c(), u(), o(), p(), g(), (x = f()));
  }))();
}
export { S as n, y as t };
//# sourceMappingURL=handoff-1fb6a5649ce3.js.map
