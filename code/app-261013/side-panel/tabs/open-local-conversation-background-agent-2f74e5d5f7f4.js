import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { rst as t, xMt as n, ygt as r } from "./app-shared-bbfeca5e5737.js";
import {
  $nt as i,
  Qnt as a,
  XPr as o,
  YPr as s,
  dwn as c,
  ert as l,
  ly as u,
  nrt as d,
  p5n as f,
  pwn as p,
  trt as m,
  uy as h,
  v8n as g,
} from "./app-initial-5851df3f6cb1.js";
import { Yp as _ } from "./app-primary-fe8a450b3b04.js";
import { i as v } from "./open-target-c28262e3c35c.js";
async function y(
  e,
  {
    revealAndFocus: t = !0,
    backgroundAgent: n,
    hostId: i,
    insertPosition: a,
    shouldResume: o = !r(i),
    tabId: c,
  },
) {
  return (
    await s(e, i).activateThreadSummary(n.conversationId, { addToRecent: !1 }),
    (await s(e, i).ensureConversationFirstPage(n.conversationId))
      ? b(e, {
          revealAndFocus: t,
          backgroundAgent: n,
          hostId: i,
          insertPosition: a,
          shouldResume: o,
          tabId: c,
        })
      : null
  );
}
function b(
  e,
  { revealAndFocus: t = !0, backgroundAgent: n, hostId: r, insertPosition: i, shouldResume: a, tabId: o },
) {
  if (e.get(f, r).includes(n.conversationId)) return null;
  let s = o ?? m(n.conversationId);
  return p(e, S, {
    revealAndFocus: t,
    durableRoute: { kind: l, params: { conversationId: n.conversationId }, payloadVersion: 1 },
    icon: (0, x.jsx)(u, { className: `icon-sm`, seed: n.conversationId }),
    id: s,
    insertPosition: i,
    props: {
      canInteract: n.canInteract,
      conversationId: n.conversationId,
      hostId: r,
      shouldResume: a,
      onOpenBackgroundAgent: (t) => {
        y(e, { backgroundAgent: t, hostId: r, shouldResume: a });
      },
    },
    title: n.displayName,
  });
}
var x, S;
function C() {
  return (C = e(() => {
    (t(), o(), g(), c(), a(), h(), d(), (x = n()), v(), _(), (S = i({ open: y })));
  }))();
}
export { C as n, y as r, S as t };
//# sourceMappingURL=open-local-conversation-background-agent-2f74e5d5f7f4.js.map
