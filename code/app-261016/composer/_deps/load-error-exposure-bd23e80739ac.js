import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { $St as t, FBt as n, LNt as r, PBt as i, ZSt as a } from "./app-shared-2feb3d4c6fcc.js";
import { PL as o, Xgn as s, Zgn as c, jL as l } from "./app-initial-ad16eaadf81f.js";
import { n as u, r as d, t as f } from "./load-metrics-state-c687d5e55dc1.js";
function p(e, t, n, r) {
  if (e != null && e.isCurrent?.() !== !1) {
    if (e.panelTabId != null) {
      let i = e.scope.get(d, e.panelTabId),
        a = i.getLoad(e.scope.get(i.activation$));
      (a?.observeDocumentType(n), a?.finishPending(`failure`, t, r));
    } else {
      let i = c.get(e.pageId);
      (i?.observeDocumentType(n), i?.fail(`page_unavailable`, t, r));
    }
  }
}
function m() {
  return (m = e(() => {
    (s(), f());
  }))();
}
function h(e) {
  let t = (0, _.c)(6),
    { target: n, reason: r, documentType: i, error: a } = e,
    o,
    s;
  return (
    t[0] !== i || t[1] !== a || t[2] !== r || t[3] !== n
      ? ((o = () => {
          if (n != null) {
            if (n.panelTabId == null) {
              p(n, r, i, a);
              return;
            }
            return u(n.scope, n.panelTabId, (e) => {
              n.isCurrent?.() !== !1 && (e.observeDocumentType(i), e.finishPending(`failure`, r, a));
            });
          }
        }),
        (s = [n, r, i, a]),
        (t[0] = i),
        (t[1] = a),
        (t[2] = r),
        (t[3] = n),
        (t[4] = o),
        (t[5] = s))
      : ((o = t[4]), (s = t[5])),
    (0, v.useLayoutEffect)(o, s),
    null
  );
}
function g(e) {
  let n = (0, _.c)(9),
    r = t(l);
  if (
    e.surface === `inline` ||
    (e.surface === `side-panel` && e.panelTabId == null) ||
    e.isActive === !1 ||
    e.isVisible === !1
  )
    return null;
  let i;
  n[0] !== e.pageId || n[1] !== e.panelTabId || n[2] !== r
    ? ((i = { scope: r, pageId: e.pageId, panelTabId: e.panelTabId }),
      (n[0] = e.pageId),
      (n[1] = e.panelTabId),
      (n[2] = r),
      (n[3] = i))
    : (i = n[3]);
  let a;
  return (
    n[4] !== e.documentType || n[5] !== e.error || n[6] !== e.reason || n[7] !== i
      ? ((a = (0, y.jsx)(h, { target: i, reason: e.reason, documentType: e.documentType, error: e.error })),
        (n[4] = e.documentType),
        (n[5] = e.error),
        (n[6] = e.reason),
        (n[7] = i),
        (n[8] = a))
      : (a = n[8]),
    a
  );
}
var _, v, y;
function b() {
  return (b = e(() => {
    ((_ = i()), a(), (v = n()), o(), f(), m(), (y = r()));
  }))();
}
export { p as a, m as i, h as n, b as r, g as t };
//# sourceMappingURL=load-error-exposure-bd23e80739ac.js.map
