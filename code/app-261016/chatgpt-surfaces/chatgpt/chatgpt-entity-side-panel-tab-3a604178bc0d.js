import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, MNt as n, NNt as r, PBt as i, ZSt as a, nCt as o } from "./app-shared-2feb3d4c6fcc.js";
import { QOn as s, aUt as c, ekn as l, sUt as u, tkn as d } from "./app-initial-ad16eaadf81f.js";
import { n as f, t as p } from "./chatgpt-entity-side-panel-content-e1216b8017bd.js";
import { i as m, t as h } from "./chatgpt-entity-detail-panel-6d8027b11c9a.js";
function g(e) {
  let t = (0, _.c)(29),
    { accountId: r, conversationId: i, params: a, onRestart: u } = e,
    d = o(c, i) ?? a,
    f = d.category === `ledger_detail_sidebar`,
    m;
  if (f) {
    let e;
    t[0] !== i || t[1] !== u || t[2] !== d
      ? ((e = (0, v.jsx)(p, { onRestart: u, conversationId: i, params: d, flushTop: !0 })),
        (t[0] = i),
        (t[1] = u),
        (t[2] = d),
        (t[3] = e))
      : (e = t[3]);
    let n;
    (t[4] !== r || t[5] !== i || t[6] !== d || t[7] !== e
      ? ((n = (0, v.jsx)(h, { accountId: r, conversationId: i, params: d, children: e })),
        (t[4] = r),
        (t[5] = i),
        (t[6] = d),
        (t[7] = e),
        (t[8] = n))
      : (n = t[8]),
      (m = n));
  } else if (d.memorySource != null) {
    let e;
    t[9] !== u || t[10] !== d
      ? ((e = d.category === `ask_sidebar` ? () => u(d, !1) : void 0), (t[9] = u), (t[10] = d), (t[11] = e))
      : (e = t[11]);
    let n;
    (t[12] !== i || t[13] !== u || t[14] !== d || t[15] !== e
      ? ((n = (0, v.jsx)(`div`, {
          className: `min-h-0 flex-1 overflow-y-auto p-panel`,
          children: (0, v.jsx)(p, { onRestart: u, conversationId: i, params: d, flushTop: !0, onRetry: e }),
        })),
        (t[12] = i),
        (t[13] = u),
        (t[14] = d),
        (t[15] = e),
        (t[16] = n))
      : (n = t[16]),
      (m = n));
  } else {
    let e;
    t[17] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = n(s, `relative flex min-h-full flex-col pb-8`)), (t[17] = e))
      : (e = t[17]);
    let r;
    t[18] !== u || t[19] !== d
      ? ((r = d.category === `ask_sidebar` ? () => u(d, !1) : void 0), (t[18] = u), (t[19] = d), (t[20] = r))
      : (r = t[20]);
    let a;
    (t[21] !== i || t[22] !== u || t[23] !== d || t[24] !== r
      ? ((a = (0, v.jsx)(`div`, {
          className: `[container-type:inline-size] h-full flex-1 overflow-y-auto pt-(--thread-content-top-inset) [--thread-sticky-header-top:calc(var(--spacing)*8)] [container-name:thread-content] browser:[--thread-sticky-header-top:var(--thread-content-top-inset,0px)] electron:[scrollbar-gutter:stable_both-edges]`,
          children: (0, v.jsx)(`div`, {
            className: e,
            children: (0, v.jsx)(`div`, {
              className: `-mx-(--padding-toolbar) flex flex-1 flex-col px-6`,
              children: (0, v.jsx)(p, { onRestart: u, conversationId: i, params: d, onRetry: r }),
            }),
          }),
        })),
        (t[21] = i),
        (t[22] = u),
        (t[23] = d),
        (t[24] = r),
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
    ((_ = i()), r(), a(), d(), u(), m(), f(), (v = t()));
  }))();
}
y();
export { g as ChatGptEntitySidePanelTab };
//# sourceMappingURL=chatgpt-entity-side-panel-tab-3a604178bc0d.js.map
