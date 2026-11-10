import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  FBt as t,
  LNt as n,
  PBt as r,
  Rrt as i,
  Uz as a,
  Wz as o,
  ZSt as s,
  iCt as c,
  ntt as l,
} from "./app-shared-2feb3d4c6fcc.js";
import {
  CMr as u,
  EI as d,
  TI as f,
  g9t as p,
  la as m,
  m9t as h,
  oa as g,
  yMr as _,
} from "./app-initial-ad16eaadf81f.js";
import { cv as v, lv as y } from "./app-primary-3e00728c2a4c.js";
import { n as b, t as x } from "./thread-user-message-navigation-rail-71d610062b7f.js";
function S(e) {
  let t = (0, w.c)(5),
    { items: n, onBookmarkChange: r, onPreviewItem: i, onRevealItem: a } = e;
  if (n.length < 4) return null;
  let o;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i || t[3] !== a
      ? ((o = (0, E.jsx)(C, { items: n, onBookmarkChange: r, onPreviewItem: i, onRevealItem: a })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function C(e) {
  let t = (0, w.c)(11),
    { items: n, onBookmarkChange: r, onPreviewItem: i, onRevealItem: a } = e,
    { getScrollElement: s } = y(),
    d = (0, T.useContext)(h),
    f = c(u),
    p = o(),
    m;
  t[0] === f ? (m = t[1]) : ((m = () => f.logProductEvent(l, {})), (t[0] = f), (t[1] = m));
  let g;
  return (
    t[2] !== s ||
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== i ||
    t[6] !== a ||
    t[7] !== p ||
    t[8] !== m ||
    t[9] !== d
      ? ((g = (0, E.jsx)(x, {
          getScrollElement: s,
          items: n,
          prefersReducedMotion: p,
          tooltipComponents: D,
          tooltipPortalContainer: d,
          onBookmarkChange: r,
          onNavigationClick: m,
          onPreviewItem: i,
          onRevealItem: a,
        })),
        (t[2] = s),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = a),
        (t[7] = p),
        (t[8] = m),
        (t[9] = d),
        (t[10] = g))
      : (g = t[10]),
    g
  );
}
var w, T, E, D;
function O() {
  return (O = e(() => {
    ((w = r()),
      i(),
      s(),
      (T = t()),
      p(),
      d(),
      a(),
      g(),
      _(),
      v(),
      b(),
      (E = n()),
      (D = { ExternalLinkIcon: f, Markdown: m }));
  }))();
}
O();
export { S as AppThreadUserMessageNavigationRail };
//# sourceMappingURL=thread-user-message-navigation-rail-app-b29244c8e531.js.map
