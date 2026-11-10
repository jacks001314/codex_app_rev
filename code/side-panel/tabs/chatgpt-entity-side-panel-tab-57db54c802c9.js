import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  A3t as t,
  O3t as n,
  Rpn as r,
  gRt as i,
  hmn as a,
  kmn as o,
  xRt as s,
  yRt as c,
  zpn as l,
} from "./app-initial-f094ef01c64d.js";
import { Qo as u, es as d, ts as f } from "./app-primary-4c40d73a1074.js";
import { i as p, n as m, r as h, t as g } from "./optimistic-metadata-a01dfc49514b.js";
function _(e) {
  let n = (0, v.c)(11),
    { conversationId: a } = e,
    o = t(i),
    s;
  n[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = r(u, `relative flex min-h-full flex-col pb-8`)), (n[0] = s))
    : (s = n[0]);
  let l;
  n[1] === a ? (l = n[2]) : ((l = (0, y.jsx)(g, { conversationId: a })), (n[1] = a), (n[2] = l));
  let f;
  n[3] === o.value ? (f = n[4]) : ((f = c(o.value)), (n[3] = o.value), (n[4] = f));
  let p;
  n[5] !== a || n[6] !== f
    ? ((p = (0, y.jsx)(h, { browserConversationId: f, conversationId: a })),
      (n[5] = a),
      (n[6] = f),
      (n[7] = p))
    : (p = n[7]);
  let m;
  return (
    n[8] !== l || n[9] !== p
      ? ((m = (0, y.jsx)(d, {
          header: null,
          children: (0, y.jsx)(`div`, {
            className: `[container-type:inline-size] h-full flex-1 overflow-y-auto pt-(--thread-content-top-inset) [--thread-sticky-header-top:calc(var(--spacing)*8)] [container-name:thread-content] browser:[--thread-sticky-header-top:var(--thread-content-top-inset,0px)] electron:[scrollbar-gutter:stable_both-edges]`,
            children: (0, y.jsx)(`div`, {
              className: s,
              children: (0, y.jsxs)(`div`, {
                className: `-mx-(--padding-toolbar) flex flex-1 flex-col px-6`,
                children: [l, p],
              }),
            }),
          }),
        })),
        (n[8] = l),
        (n[9] = p),
        (n[10] = m))
      : (m = n[10]),
    m
  );
}
var v, y;
e(() => {
  ((v = o()), l(), n(), s(), f(), p(), m(), (y = a()));
})();
export { _ as ChatGptEntitySidePanelTab };
//# sourceMappingURL=chatgpt-entity-side-panel-tab-57db54c802c9.js.map
