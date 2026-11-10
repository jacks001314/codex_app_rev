import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { TJ as t, XV as n, yzt as r } from "./app-shared-bbfeca5e5737.js";
import {
  $8n as i,
  $yn as a,
  Cgr as o,
  Dbn as s,
  Gtt as c,
  Ktt as l,
  Obn as u,
  Wtt as d,
  XPr as f,
  YPr as p,
  dwn as m,
  dxn as h,
  ebn as g,
  m8n as _,
  pwn as v,
  qtt as y,
  uxn as b,
  v8n as x,
  wgr as S,
} from "./app-initial-5851df3f6cb1.js";
function C(
  e,
  { automationId: t, targetConversationId: r, title: i },
  { revealAndFocus: a = !0, insertPosition: o, tabId: s, target: c = `right` } = {},
) {
  let u = s ?? `pull-request-auto-fix:${r}`,
    d = b(e, u) ?? c;
  return v(e, E, {
    revealAndFocus: a,
    durableRoute:
      t.trim() === `` || r.trim() === ``
        ? void 0
        : { kind: l, params: { automationId: t, targetConversationId: r }, payloadVersion: 1 },
    icon: (0, T.createElement)(n, { "aria-hidden": !1 }),
    id: u,
    insertPosition: o,
    props: { conversationId: r },
    target: d,
    title: i,
    tooltip: i,
  });
}
async function w(
  e,
  { automationId: t, targetConversationId: n },
  { revealAndFocus: r, insertPosition: a, tabId: o, target: s },
) {
  if (e.value.routeKind !== `local-thread`) return !1;
  let c = e.get(i, e.value.conversationId);
  if (!S(c)) return !1;
  try {
    let { items: l } = await e.query.getOrFetch(u),
      d = l.find(({ id: e }) => e === t);
    return d == null ||
      d.status === `DELETED` ||
      !g(d) ||
      d.targetThreadId !== n ||
      (!e.get(_, n) && (await p(e, c).hydrateBackgroundThreads([n]), !e.get(_, n))) ||
      e.get(i, n) !== c
      ? !1
      : C(
          e,
          { automationId: t, targetConversationId: n, title: d.name },
          { revealAndFocus: r, insertPosition: a, tabId: o, target: s },
        ) === o;
  } catch {
    return !1;
  }
}
var T, E;
function D() {
  return (D = e(() => {
    ((T = r()), f(), x(), m(), o(), s(), t(), d(), h(), a(), y(), (E = c({ open: C, restore: w })));
  }))();
}
export { C as n, w as r, D as t };
//# sourceMappingURL=open-pull-request-fix-automation-panel-fbdbb23333b6.js.map
