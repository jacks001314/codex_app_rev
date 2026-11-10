import { n as e, o as t } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $wt as n,
  A6 as r,
  Amn as i,
  CFt as a,
  QPt as o,
  SFt as s,
  VTt as c,
  Xdt as l,
  ZPt as u,
  _6 as d,
  _n as f,
  bn as p,
  dGt as m,
  fGt as h,
  g6 as g,
  i3t as _,
  j6 as v,
  r3t as y,
  rTt as b,
  vlt as x,
  vn as S,
  yn as C,
} from "./app-initial-f094ef01c64d.js";
function w(
  e,
  { automationId: t, targetConversationId: n, title: r },
  { activate: i = !0, insertAfterTabId: o, tabId: s, target: c = `right` } = {},
) {
  let l = s ?? `pull-request-auto-fix:${n}`,
    d = u(e, l) ?? c;
  return a(e, D, {
    activate: i,
    durableRoute:
      t.trim() === `` || n.trim() === ``
        ? void 0
        : { kind: C, params: { automationId: t, targetConversationId: n }, payloadVersion: 1 },
    icon: (0, E.createElement)(x, { "aria-hidden": !1 }),
    id: l,
    insertAfterTabId: o,
    props: { conversationId: n },
    target: d,
    title: r,
    tooltip: r,
  });
}
async function T(
  e,
  { automationId: t, targetConversationId: r },
  { activate: i, insertAfterTabId: a, tabId: o, target: s },
) {
  if (e.value.routeKind !== `local-thread`) return !1;
  let l = e.get(c, e.value.conversationId);
  if (!h(l)) return !1;
  try {
    let { items: u } = await e.query.getOrFetch(v),
      f = u.find(({ id: e }) => e === t);
    return f == null ||
      f.status === `DELETED` ||
      !d(f) ||
      f.targetThreadId !== r ||
      (!e.get(n, r) && (await y(e, l).hydrateBackgroundThreads([r]), !e.get(n, r))) ||
      e.get(c, r) !== l
      ? !1
      : w(
          e,
          { automationId: t, targetConversationId: r, title: f.name },
          { activate: i, insertAfterTabId: a, tabId: o, target: s },
        ) === o;
  } catch {
    return !1;
  }
}
var E,
  D,
  O = e(() => {
    ((E = t(i(), 1)),
      _(),
      b(),
      s(),
      m(),
      r(),
      l(),
      f(),
      o(),
      g(),
      p(),
      (D = S({ open: w, restore: T })));
  });
export { w as n, T as r, O as t };
//# sourceMappingURL=open-pull-request-fix-automation-panel-8776b11b39da.js.map
