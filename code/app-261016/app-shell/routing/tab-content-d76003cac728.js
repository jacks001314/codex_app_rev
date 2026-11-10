import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  LNt as n,
  PBt as r,
  XOt as i,
  okt as a,
  sct as o,
  tkt as s,
  w_t as c,
} from "./app-shared-2feb3d4c6fcc.js";
import { GK as l, Llt as u, NOr as d, WK as f, zOr as p, zlt as m } from "./app-initial-ad16eaadf81f.js";
import {
  i as h,
  n as g,
  r as _,
  t as v,
} from "./local-conversation-summary-panel-artifacts-section-d8157b10ca72.js";
function y(e) {
  let t = (0, b.c)(19),
    { conversationId: n, onOpenPullRequestSidePanel: r } = e,
    i = a(),
    o = (0, x.useId)(),
    [l, p] = (0, x.useState)(``),
    m;
  t[0] === i
    ? (m = t[1])
    : ((m = i.formatMessage({
        id: `restricted.aeon.outputs.search`,
        defaultMessage: `Search outputs`,
        description: `Accessible label and placeholder for searching outputs produced by this dot`,
      })),
      (t[0] = i),
      (t[1] = m));
  let h = m,
    g = `/local/${n}`,
    y;
  t[2] === g
    ? (y = t[3])
    : ((y = d({ pathname: g, routeTemplate: `/local/:conversationId`, search: `?hostId=${c}` })),
      (t[2] = g),
      (t[3] = y));
  let C, w;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, S.jsx)(s, {
        id: `codex.localConversation.outputs.title.v2`,
        defaultMessage: `Outputs`,
        description: `Title for files, documents, links, and other results produced by Codex. 'Outputs' means produced results or artifacts, not exits or audio/video ports.`,
      })),
      (w = (0, S.jsx)(_, { variant: `icon` })),
      (t[4] = C),
      (t[5] = w))
    : ((C = t[4]), (w = t[5]));
  let T;
  t[6] !== o || t[7] !== h || t[8] !== l
    ? ((T = { id: o, label: h, placeholder: h, searchQuery: l, onSearchQueryChange: p }),
      (t[6] = o),
      (t[7] = h),
      (t[8] = l),
      (t[9] = T))
    : (T = t[9]);
  let E;
  t[10] !== r || t[11] !== l
    ? ((E = (0, S.jsx)(v, {
        isVisible: !0,
        presentation: `list`,
        searchQuery: l,
        onOpenPullRequestSidePanel: r,
      })),
      (t[10] = r),
      (t[11] = l),
      (t[12] = E))
    : (E = t[12]);
  let D;
  t[13] !== T || t[14] !== E
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
      (t[13] = T),
      (t[14] = E),
      (t[15] = D))
    : (D = t[15]);
  let O;
  return (
    t[16] !== y || t[17] !== D
      ? ((O = (0, S.jsx)(f, { route: y, children: D })), (t[16] = y), (t[17] = D), (t[18] = O))
      : (O = t[18]),
    O
  );
}
var b, x, S;
function C() {
  return (C = e(() => {
    ((b = r()), o(), (x = t()), i(), m(), p(), l(), h(), g(), (S = n()));
  }))();
}
C();
export { y as AeonOutputsTabContent };
//# sourceMappingURL=tab-content-d76003cac728.js.map
