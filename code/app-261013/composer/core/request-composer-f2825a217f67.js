import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Hxt as t, Pxt as n, vzt as r, xMt as i } from "./app-shared-bbfeca5e5737.js";
import {
  S6n as a,
  Wwr as o,
  b6n as s,
  dCr as c,
  qwr as l,
  sCr as u,
  yCr as d,
} from "./app-initial-5851df3f6cb1.js";
import { n as f, t as p } from "./side-chat-composer-7be547a39e2e.js";
function m(e) {
  let n = (0, h.c)(8),
    { conversationId: r, presentation: i } = e,
    a;
  n[0] === r ? (a = n[1]) : ((a = c(r, `main`, null, o(r))), (n[0] = r), (n[1] = a));
  let l;
  n[2] !== r || n[3] !== i
    ? ((l = (0, g.jsx)(s, {
        value: `expanded`,
        children: (0, g.jsx)(p, { conversationId: r, presentation: i }),
      })),
      (n[2] = r),
      (n[3] = i),
      (n[4] = l))
    : (l = n[4]);
  let d;
  return (
    n[5] !== a || n[6] !== l
      ? ((d = (0, g.jsx)(t, { scope: u, value: a, children: l })), (n[5] = a), (n[6] = l), (n[7] = d))
      : (d = n[7]),
    d
  );
}
var h, g;
function _() {
  return (_ = e(() => {
    ((h = r()), n(), f(), d(), l(), a(), (g = i()));
  }))();
}
_();
export { m as PageTaskRequestComposer };
//# sourceMappingURL=request-composer-f2825a217f67.js.map
