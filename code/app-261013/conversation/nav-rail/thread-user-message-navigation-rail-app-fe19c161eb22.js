import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  JR as t,
  Pxt as n,
  Rnt as r,
  Vxt as i,
  YR as a,
  net as o,
  vzt as s,
  xMt as c,
  yzt as l,
} from "./app-shared-bbfeca5e5737.js";
import {
  HF as u,
  UF as d,
  XDr as f,
  Y8t as p,
  eOr as m,
  fa as h,
  ha as g,
  q8t as _,
} from "./app-initial-5851df3f6cb1.js";
import { n as v, r as y } from "./thread-scroll-controller-context-value-f766898c7055.js";
import { n as b, t as x } from "./thread-user-message-navigation-rail-62e0ef87d48f.js";
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
    { items: n, onBookmarkChange: r, onPreviewItem: s, onRevealItem: c } = e,
    { getScrollElement: l } = y(),
    u = (0, T.useContext)(_),
    d = i(m),
    f = a(),
    p;
  t[0] === d ? (p = t[1]) : ((p = () => d.logProductEvent(o, {})), (t[0] = d), (t[1] = p));
  let h;
  return (
    t[2] !== l ||
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== s ||
    t[6] !== c ||
    t[7] !== f ||
    t[8] !== p ||
    t[9] !== u
      ? ((h = (0, E.jsx)(x, {
          getScrollElement: l,
          items: n,
          prefersReducedMotion: f,
          tooltipComponents: D,
          tooltipPortalContainer: u,
          onBookmarkChange: r,
          onNavigationClick: p,
          onPreviewItem: s,
          onRevealItem: c,
        })),
        (t[2] = l),
        (t[3] = n),
        (t[4] = r),
        (t[5] = s),
        (t[6] = c),
        (t[7] = f),
        (t[8] = p),
        (t[9] = u),
        (t[10] = h))
      : (h = t[10]),
    h
  );
}
var w, T, E, D;
function O() {
  return (O = e(() => {
    ((w = s()),
      r(),
      n(),
      (T = l()),
      p(),
      d(),
      t(),
      h(),
      f(),
      v(),
      b(),
      (E = c()),
      (D = { ExternalLinkIcon: u, Markdown: g }));
  }))();
}
O();
export { S as AppThreadUserMessageNavigationRail };
//# sourceMappingURL=thread-user-message-navigation-rail-app-fe19c161eb22.js.map
