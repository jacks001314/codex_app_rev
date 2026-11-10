import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, ZSt as r, aCt as i } from "./app-shared-2feb3d4c6fcc.js";
import {
  CDr as a,
  DDr as o,
  FDr as s,
  a9n as c,
  lkr as l,
  okr as u,
  r9n as d,
} from "./app-initial-ad16eaadf81f.js";
import { n as f, t as p } from "./side-chat-composer-4eb5d93ed4a2.js";
function m(e) {
  let t = (0, h.c)(8),
    { conversationId: n, presentation: r } = e,
    s;
  t[0] === n ? (s = t[1]) : ((s = o(n, `main`, null, u(n))), (t[0] = n), (t[1] = s));
  let c;
  t[2] !== n || t[3] !== r
    ? ((c = (0, g.jsx)(d, {
        value: `expanded`,
        children: (0, g.jsx)(p, { conversationId: n, presentation: r }),
      })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = c))
    : (c = t[4]);
  let l;
  return (
    t[5] !== s || t[6] !== c
      ? ((l = (0, g.jsx)(i, { scope: a, value: s, children: c })), (t[5] = s), (t[6] = c), (t[7] = l))
      : (l = t[7]),
    l
  );
}
var h, g;
function _() {
  return (_ = e(() => {
    ((h = n()), r(), f(), s(), l(), c(), (g = t()));
  }))();
}
_();
export { m as PageTaskRequestComposer };
//# sourceMappingURL=request-composer-885c99d13fa8.js.map
