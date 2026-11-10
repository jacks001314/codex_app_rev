import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, PBt as n, TY as r, XOt as i, okt as a, oq as o } from "./app-shared-2feb3d4c6fcc.js";
import { GLn as s, qLn as c } from "./app-initial-ad16eaadf81f.js";
import { n as l, t as u } from "./entity-sheet-header-55ca4823b65b.js";
import { r as d, t as f } from "./chatgpt-sources-side-panel-tab-5fa188776e1a.js";
function p() {
  let e = (0, m.c)(5),
    t = a(),
    n;
  e[0] === t
    ? (n = e[1])
    : ((n = t.formatMessage({
        id: `chatgptConversations.sources.memory.help`,
        defaultMessage: `Learn more about memory`,
        description: `Accessible label for a link to the Memory FAQ in the ChatGPT Sources panel header`,
      })),
      (e[0] = t),
      (e[1] = n));
  let r = n,
    i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, h.jsx)(o, { "aria-hidden": !0 })), (e[2] = i))
    : (i = e[2]);
  let c;
  return (
    e[3] === r
      ? (c = e[4])
      : ((c = (0, h.jsx)(s, {
          "aria-label": r,
          className: `flex size-5 shrink-0 cursor-interaction items-center justify-center rounded-full text-tertiary transition-colors no-drag hover:text-default focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-ring`,
          href: g,
          initiator: `external_link`,
          tooltipContent: r,
          children: i,
        })),
        (e[3] = r),
        (e[4] = c)),
    c
  );
}
var m, h, g;
function _() {
  return (_ = e(() => {
    ((m = n()), i(), c(), r(), (h = t()), (g = `https://help.openai.com/en/articles/8590148-memory-faq`));
  }))();
}
function v(e) {
  let t = (0, y.c)(20),
    n,
    r,
    i;
  t[0] === e
    ? ((n = t[1]), (r = t[2]), (i = t[3]))
    : (({ title: i, onClose: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r), (t[3] = i));
  let o = a(),
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
  t[6] === i
    ? (c = t[7])
    : ((c = (0, b.jsx)(`h2`, { className: `truncate text-sm font-semibold`, children: i })),
      (t[6] = i),
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
  t[11] !== n || t[12] !== s || t[13] !== d
    ? ((m = (0, b.jsx)(u, { autoFocusClose: !0, closeLabel: s, isTransparent: !1, title: d, onClose: n })),
      (t[11] = n),
      (t[12] = s),
      (t[13] = d),
      (t[14] = m))
    : (m = t[14]);
  let h;
  t[15] === r
    ? (h = t[16])
    : ((h = (0, b.jsx)(`div`, { className: `min-h-0 flex-1`, children: (0, b.jsx)(f, { ...r }) })),
      (t[15] = r),
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
    ((y = n()), i(), _(), d(), l(), (b = t()));
  }))();
}
x();
export { v as ChatGptSourcesFloatingPanel };
//# sourceMappingURL=chatgpt-sources-floating-panel-30d9e1170c25.js.map
