import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { XGt as t, qGt as n } from "./app-initial-ad16eaadf81f.js";
async function r(
  e,
  {
    action: n,
    conversationId: r,
    elicitationResponse: i,
    isApiToolElicitation: a,
    isTemporaryChat: o,
    model: s,
    recipient: c,
  },
) {
  await t(e, {
    conversationId: r,
    isTemporaryChat: o,
    model: s,
    prompt: ``,
    toolApproval: {
      action: n.type,
      actionData: n,
      elicitationResponse: i,
      isApiToolElicitation: a,
      recipient: c,
      targetMessageId: n.target_message_id,
    },
  });
}
function i() {
  return (i = e(() => {
    n();
  }))();
}
export { r as n, i as t };
//# sourceMappingURL=respond-530ee9ec144a.js.map
