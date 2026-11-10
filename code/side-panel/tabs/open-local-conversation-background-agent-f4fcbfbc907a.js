import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  $Tt as t,
  $wt as n,
  CFt as r,
  Mwt as i,
  SFt as a,
  ar as o,
  hmn as s,
  ir as c,
  nr as l,
  rTt as u,
  rr as d,
  tr as f,
} from "./app-initial-f094ef01c64d.js";
import { Mn as p, dS as m, fS as h, jn as g } from "./app-primary-4c40d73a1074.js";
import { r as _ } from "./open-target-ad587ef7a716.js";
async function v(
  e,
  {
    activate: t = !0,
    backgroundAgent: n,
    hostId: r,
    insertAfterTabId: a,
    tabId: o,
    TabComponent: s,
  },
) {
  e.get(i, r)?.activateThreadSummary(n.conversationId, { addToRecent: !1 });
  let c = g(e, n.conversationId, r);
  return c !== !0 && !(await c)
    ? null
    : y(e, {
        activate: t,
        backgroundAgent: n,
        hostId: r,
        insertAfterTabId: a,
        tabId: o,
        TabComponent: s,
      });
}
function y(
  e,
  {
    activate: i = !0,
    backgroundAgent: a,
    hostId: o,
    insertAfterTabId: s,
    tabId: l,
    TabComponent: u,
  },
) {
  if (!e.get(n, a.conversationId) || e.get(t, o).includes(a.conversationId)) return null;
  let f = l ?? c(a.conversationId);
  return r(e, x, {
    activate: i,
    durableRoute: { kind: d, params: { conversationId: a.conversationId }, payloadVersion: 1 },
    icon: (0, b.jsx)(m, { className: `icon-sm`, seed: a.conversationId }),
    id: f,
    insertAfterTabId: s,
    props: {
      canInteract: a.canInteract,
      conversationId: a.conversationId,
      hostId: o,
      onOpenBackgroundAgent: (t) => {
        v(e, { backgroundAgent: t, hostId: o, TabComponent: u });
      },
    },
    title: a.displayName,
  });
}
var b,
  x,
  S = e(() => {
    (u(), a(), f(), h(), o(), p(), (b = s()), _(), (x = l({ open: v })));
  });
export { S as n, v as r, x as t };
//# sourceMappingURL=open-local-conversation-background-agent-f4fcbfbc907a.js.map
