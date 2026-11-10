import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  IDt as t,
  VDt as n,
  jDt as r,
  lgt as i,
  rst as a,
  vzt as o,
  xMt as s,
  yzt as c,
} from "./app-shared-bbfeca5e5737.js";
import { Cwr as l, Mct as u, Pct as d, SG as f, _wr as p, xG as m } from "./app-initial-5851df3f6cb1.js";
import {
  i as h,
  n as g,
  r as _,
  t as v,
} from "./local-conversation-summary-panel-artifacts-section-de99ba817abb.js";
function y(e) {
  let r = (0, b.c)(19),
    { conversationId: a, onOpenPullRequestSidePanel: o } = e,
    s = n(),
    c = (0, x.useId)(),
    [l, d] = (0, x.useState)(``),
    f;
  r[0] === s
    ? (f = r[1])
    : ((f = s.formatMessage({
        id: `restricted.aeon.outputs.search`,
        defaultMessage: `Search outputs`,
        description: `Accessible label and placeholder for searching outputs produced by this dot`,
      })),
      (r[0] = s),
      (r[1] = f));
  let h = f,
    g = `/local/${a}`,
    y;
  r[2] === g
    ? (y = r[3])
    : ((y = p({ pathname: g, routeTemplate: `/local/:conversationId`, search: `?hostId=${i}` })),
      (r[2] = g),
      (r[3] = y));
  let C, w;
  r[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, S.jsx)(t, {
        id: `codex.localConversation.outputs.title.v2`,
        defaultMessage: `Outputs`,
        description: `Title for files, documents, links, and other results produced by Codex. 'Outputs' means produced results or artifacts, not exits or audio/video ports.`,
      })),
      (w = (0, S.jsx)(_, { variant: `icon` })),
      (r[4] = C),
      (r[5] = w))
    : ((C = r[4]), (w = r[5]));
  let T;
  r[6] !== c || r[7] !== h || r[8] !== l
    ? ((T = { id: c, label: h, placeholder: h, searchQuery: l, onSearchQueryChange: d }),
      (r[6] = c),
      (r[7] = h),
      (r[8] = l),
      (r[9] = T))
    : (T = r[9]);
  let E;
  r[10] !== o || r[11] !== l
    ? ((E = (0, S.jsx)(v, {
        isVisible: !0,
        presentation: `list`,
        searchQuery: l,
        onOpenPullRequestSidePanel: o,
      })),
      (r[10] = o),
      (r[11] = l),
      (r[12] = E))
    : (E = r[12]);
  let D;
  r[13] !== T || r[14] !== E
    ? ((D = (0, S.jsx)(`div`, {
        className: `flex h-full min-h-0 flex-col bg-surface`,
        children: (0, S.jsx)(u, {
          headerPlacement: `toolbar`,
          title: C,
          toolbarActions: w,
          search: T,
          children: E,
        }),
      })),
      (r[13] = T),
      (r[14] = E),
      (r[15] = D))
    : (D = r[15]);
  let O;
  return (
    r[16] !== y || r[17] !== D
      ? ((O = (0, S.jsx)(m, { route: y, children: D })), (r[16] = y), (r[17] = D), (r[18] = O))
      : (O = r[18]),
    O
  );
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = o()), a(), (x = c()), r(), d(), l(), f(), h(), g(), (S = s()));
  }))();
}
C();
export { y as AeonOutputsTabContent };
//# sourceMappingURL=tab-content-5664aea30da6.js.map
