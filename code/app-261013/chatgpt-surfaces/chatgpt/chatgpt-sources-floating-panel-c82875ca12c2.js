import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { TJ as t, VDt as n, jDt as r, lK as i, vzt as a, xMt as o } from "./app-shared-bbfeca5e5737.js";
import { xPn as s, yPn as c } from "./app-initial-5851df3f6cb1.js";
import { n as l, t as u } from "./entity-sheet-header-1fd7792019f5.js";
import { r as d, t as f } from "./chatgpt-sources-side-panel-tab-b92069372600.js";
function p() {
  let e = (0, m.c)(5),
    t = n(),
    r;
  e[0] === t
    ? (r = e[1])
    : ((r = t.formatMessage({
        id: `chatgptConversations.sources.memory.help`,
        defaultMessage: `Learn more about memory`,
        description: `Accessible label for a link to the Memory FAQ in the ChatGPT Sources panel header`,
      })),
      (e[0] = t),
      (e[1] = r));
  let a = r,
    o;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, h.jsx)(i, { "aria-hidden": !0 })), (e[2] = o))
    : (o = e[2]);
  let s;
  return (
    e[3] === a
      ? (s = e[4])
      : ((s = (0, h.jsx)(c, {
          "aria-label": a,
          className: `flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-tertiary transition-colors no-drag hover:text-default focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring`,
          href: g,
          initiator: `external_link`,
          tooltipContent: a,
          children: o,
        })),
        (e[3] = a),
        (e[4] = s)),
    s
  );
}
var m, h, g;
function _() {
  return (_ = e(() => {
    ((m = a()), r(), s(), t(), (h = o()), (g = `https://help.openai.com/en/articles/8590148-memory-faq`));
  }))();
}
function v(e) {
  let t = (0, y.c)(20),
    r,
    i,
    a;
  t[0] === e
    ? ((r = t[1]), (i = t[2]), (a = t[3]))
    : (({ title: a, onClose: r, ...i } = e), (t[0] = e), (t[1] = r), (t[2] = i), (t[3] = a));
  let o = n(),
    s;
  t[4] === o
    ? (s = t[5])
    : ((s = o.formatMessage({
        id: `chatgpt.sourcesFloatingPanel.close`,
        defaultMessage: `Close sources`,
        description: `Accessible label for closing the floating Sources panel`,
      })),
      (t[4] = o),
      (t[5] = s));
  let c;
  t[6] === a
    ? (c = t[7])
    : ((c = (0, b.jsx)(`h2`, { className: `truncate text-sm font-semibold`, children: a })),
      (t[6] = a),
      (t[7] = c));
  let l;
  t[8] === Symbol.for(`react.memo_cache_sentinel`) ? ((l = (0, b.jsx)(p, {})), (t[8] = l)) : (l = t[8]);
  let d;
  t[9] === c
    ? (d = t[10])
    : ((d = (0, b.jsxs)(`div`, { className: `flex min-w-0 flex-1 items-center gap-2`, children: [c, l] })),
      (t[9] = c),
      (t[10] = d));
  let m;
  t[11] !== r || t[12] !== s || t[13] !== d
    ? ((m = (0, b.jsx)(u, { autoFocusClose: !0, closeLabel: s, isTransparent: !1, title: d, onClose: r })),
      (t[11] = r),
      (t[12] = s),
      (t[13] = d),
      (t[14] = m))
    : (m = t[14]);
  let h;
  t[15] === i
    ? (h = t[16])
    : ((h = (0, b.jsx)(`div`, { className: `min-h-0 flex-1`, children: (0, b.jsx)(f, { ...i }) })),
      (t[15] = i),
      (t[16] = h));
  let g;
  return (
    t[17] !== m || t[18] !== h
      ? ((g = (0, b.jsxs)(b.Fragment, { children: [m, h] })), (t[17] = m), (t[18] = h), (t[19] = g))
      : (g = t[19]),
    g
  );
}
var y, b;
function x() {
  return (x = e(() => {
    ((y = a()), r(), _(), d(), l(), (b = o()));
  }))();
}
x();
export { v as ChatGptSourcesFloatingPanel };
//# sourceMappingURL=chatgpt-sources-floating-panel-c82875ca12c2.js.map
