import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Pxt as t, _Mt as n, gMt as r, vzt as i, xMt as a, zxt as o } from "./app-shared-bbfeca5e5737.js";
import { MTn as s, cJt as c, jTn as l, kTn as u, oJt as d } from "./app-initial-5851df3f6cb1.js";
import { n as f, t as p } from "./chatgpt-entity-side-panel-content-260a9a2b9073.js";
import { i as m, t as h } from "./chatgpt-entity-detail-panel-266b8c60d2b5.js";
function g(e) {
  let t = (0, _.c)(29),
    { accountId: n, conversationId: i, params: a, onRestart: s } = e,
    c = o(d, i) ?? a,
    f = c.category === `ledger_detail_sidebar`,
    m;
  if (f) {
    let e;
    t[0] !== i || t[1] !== s || t[2] !== c
      ? ((e = (0, v.jsx)(p, { onRestart: s, conversationId: i, params: c, flushTop: !0 })),
        (t[0] = i),
        (t[1] = s),
        (t[2] = c),
        (t[3] = e))
      : (e = t[3]);
    let r;
    (t[4] !== n || t[5] !== i || t[6] !== c || t[7] !== e
      ? ((r = (0, v.jsx)(h, { accountId: n, conversationId: i, params: c, children: e })),
        (t[4] = n),
        (t[5] = i),
        (t[6] = c),
        (t[7] = e),
        (t[8] = r))
      : (r = t[8]),
      (m = r));
  } else if (c.memorySource != null) {
    let e;
    t[9] !== s || t[10] !== c
      ? ((e = c.category === `ask_sidebar` ? () => s(c, !1) : void 0), (t[9] = s), (t[10] = c), (t[11] = e))
      : (e = t[11]);
    let n;
    (t[12] !== i || t[13] !== s || t[14] !== c || t[15] !== e
      ? ((n = (0, v.jsx)(`div`, {
          className: `min-h-0 flex-1 overflow-y-auto p-panel`,
          children: (0, v.jsx)(p, { onRestart: s, conversationId: i, params: c, flushTop: !0, onRetry: e }),
        })),
        (t[12] = i),
        (t[13] = s),
        (t[14] = c),
        (t[15] = e),
        (t[16] = n))
      : (n = t[16]),
      (m = n));
  } else {
    let e;
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = r(u, `relative flex min-h-full flex-col pb-8`)), (t[17] = e))
      : (e = t[17]);
    let n;
    t[18] !== s || t[19] !== c
      ? ((n = c.category === `ask_sidebar` ? () => s(c, !1) : void 0), (t[18] = s), (t[19] = c), (t[20] = n))
      : (n = t[20]);
    let a;
    (t[21] !== i || t[22] !== s || t[23] !== c || t[24] !== n
      ? ((a = (0, v.jsx)(`div`, {
          className: `[container-type:inline-size] h-full flex-1 overflow-y-auto pt-(--thread-content-top-inset) [--thread-sticky-header-top:calc(var(--spacing)*8)] [container-name:thread-content] browser:[--thread-sticky-header-top:var(--thread-content-top-inset,0px)] electron:[scrollbar-gutter:stable_both-edges]`,
          children: (0, v.jsx)(`div`, {
            className: e,
            children: (0, v.jsx)(`div`, {
              className: `-mx-(--padding-toolbar) flex flex-1 flex-col px-6`,
              children: (0, v.jsx)(p, { onRestart: s, conversationId: i, params: c, onRetry: n }),
            }),
          }),
        })),
        (t[21] = i),
        (t[22] = s),
        (t[23] = c),
        (t[24] = n),
        (t[25] = a))
      : (a = t[25]),
      (m = a));
  }
  let g;
  t[26] === Symbol.for(`react.memo_cache_sentinel`) ? ((g = !1), (t[26] = g)) : (g = t[26]);
  let y;
  return (
    t[27] === m
      ? (y = t[28])
      : ((y = (0, v.jsxs)(l, { header: null, children: [g, m] })), (t[27] = m), (t[28] = y)),
    y
  );
}
var _, v;
function y() {
  return (y = e(() => {
    ((_ = i()), n(), t(), s(), c(), m(), f(), (v = a()));
  }))();
}
y();
export { g as ChatGptEntitySidePanelTab };
//# sourceMappingURL=chatgpt-entity-side-panel-tab-ff7d7f4c310d.js.map
