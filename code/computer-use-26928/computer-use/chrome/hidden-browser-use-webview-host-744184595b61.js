import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  $T as t,
  RJt as n,
  X6t as r,
  _dn as i,
  k6t as a,
  mcn as o,
  tE as s,
  vdn as c,
} from "./app-shared-7552fc8d5d82.js";
import { BUt as l, zUt as u } from "./app-initial-3916b423772b.js";
import { n as d, t as f } from "./webview-22a11e8fd7ea.js";
function p(e) {
  let t = (0, _.c)(7),
    { browserUseTabIdsKey: n, conversationId: i } = e,
    a;
  if (t[0] !== n || t[1] !== i) {
    let e;
    (t[3] === i
      ? (e = t[4])
      : ((e = (e) => (0, y.jsx)(m, { browserTabId: e, conversationId: i }, e)),
        (t[3] = i),
        (t[4] = e)),
      (a = n.split(`\0`).map(r).map(e)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a));
  } else a = t[2];
  let o;
  return (
    t[5] === a
      ? (o = t[6])
      : ((o = (0, y.jsx)(y.Fragment, { children: a })), (t[5] = a), (t[6] = o)),
    o
  );
}
function m(e) {
  let t = (0, _.c)(11),
    { browserTabId: n, conversationId: r } = e,
    i = s(),
    o = (0, v.useRef)(null),
    c;
  t[0] !== n || t[1] !== r
    ? ((c = () => u.getSnapshot(r, n)), (t[0] = n), (t[1] = r), (t[2] = c))
    : (c = t[2]);
  let l = (0, v.useSyncExternalStore)(u.subscribe, c, g),
    d;
  if (
    (t[3] !== n || t[4] !== r
      ? ((d = () => u.pages.hasPresentedMount(r, n) || u.isTabPresented(r, n)),
        (t[3] = n),
        (t[4] = r),
        (t[5] = d))
      : (d = t[5]),
    (0, v.useSyncExternalStore)(u.subscribe, d, h) || (l != null && l.tabType !== a.WEB))
  )
    return null;
  let p = l == null || l.url.length === 0 ? `about:blank` : l.url,
    m;
  return (
    t[6] !== n || t[7] !== r || t[8] !== p || t[9] !== i
      ? ((m = (0, y.jsx)(f, {
          bounds: null,
          browserTabId: n,
          conversationId: r,
          hostKind: `hidden-browser-use`,
          initialUrl: p,
          isVisible: !1,
          scale: 1,
          shouldBootstrapWhenHidden: !0,
          shouldPaint: !1,
          webviewRef: o,
          windowZoom: i,
        })),
        (t[6] = n),
        (t[7] = r),
        (t[8] = p),
        (t[9] = i),
        (t[10] = m))
      : (m = t[10]),
    m
  );
}
function h() {
  return !1;
}
function g() {
  return null;
}
var _, v, y;
function b() {
  return (b = e(() => {
    ((_ = i()), n(), (v = c()), t(), l(), d(), (y = o()));
  }))();
}
b();
export { p as HiddenBrowserUseWebviewHost };
//# sourceMappingURL=hidden-browser-use-webview-host-744184595b61.js.map
