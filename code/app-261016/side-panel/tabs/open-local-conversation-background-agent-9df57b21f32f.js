import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { LNt as t, P_t as n, sct as r } from "./app-shared-2feb3d4c6fcc.js";
import {
  ADn as i,
  Cit as a,
  FBr as o,
  IBr as s,
  MDn as c,
  My as l,
  Sit as u,
  Yer as d,
  bit as f,
  eer as p,
  jy as m,
  wit as h,
  xit as g,
} from "./app-initial-ad16eaadf81f.js";
import { cm as _ } from "./app-primary-3e00728c2a4c.js";
import { i as v } from "./open-target-5498e42c741b.js";
async function y(
  e,
  {
    revealAndFocus: t = !0,
    backgroundAgent: r,
    hostId: i,
    insertPosition: a,
    shouldResume: s = !n(i),
    tabId: c,
  },
) {
  return (
    await o(e, i).activateThreadSummary(r.conversationId, { addToRecent: !1 }),
    (await o(e, i).ensureConversationFirstPage(r.conversationId))
      ? b(e, {
          revealAndFocus: t,
          backgroundAgent: r,
          hostId: i,
          insertPosition: a,
          shouldResume: s,
          tabId: c,
        })
      : null
  );
}
function b(
  e,
  { revealAndFocus: t = !0, backgroundAgent: n, hostId: r, insertPosition: i, shouldResume: o, tabId: s },
) {
  if (e.get(d, r).includes(n.conversationId)) return null;
  let l = s ?? a(n.conversationId);
  return c(e, S, {
    revealAndFocus: t,
    durableRoute: { kind: u, params: { conversationId: n.conversationId }, payloadVersion: 1 },
    icon: (0, x.jsx)(m, { className: `icon-sm`, seed: n.conversationId }),
    id: l,
    insertPosition: i,
    props: {
      canInteract: n.canInteract,
      conversationId: n.conversationId,
      hostId: r,
      shouldResume: o,
      onOpenBackgroundAgent: (t) => {
        y(e, { backgroundAgent: t, hostId: r, shouldResume: o });
      },
    },
    title: n.displayName,
  });
}
var x, S;
function C() {
  return (C = e(() => {
    (r(), s(), p(), i(), f(), l(), h(), (x = t()), v(), _(), (S = g({ open: y })));
  }))();
}
export { C as n, y as r, S as t };
//# sourceMappingURL=open-local-conversation-background-agent-9df57b21f32f.js.map
