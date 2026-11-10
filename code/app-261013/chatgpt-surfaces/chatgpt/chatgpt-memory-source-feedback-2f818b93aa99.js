import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import { Cot as t, Pxt as n, aSt as r, hot as i, lot as a, wot as o } from "./app-shared-bbfeca5e5737.js";
import {
  XO as s,
  YO as c,
  Ymr as l,
  aIr as u,
  ehr as d,
  oIr as f,
  p6t as p,
} from "./app-initial-5851df3f6cb1.js";
import { n as m, t as h } from "./chatgpt-memory-citation-analytics-03fd6073aa78.js";
async function g(e, { target: t, source: n, sources: r, feedback: a, surface: o = `sources`, turn: c }) {
  let { conversationId: u, messageId: d, citationUuid: h } = t,
    g = e.get(_, t);
  if (u == null || h == null || !e.get(s) || g?.pending === !0) return;
  let v = (g == null ? n.feedback : g.feedback) === a ? null : a;
  m(e, {
    actionType:
      v == null
        ? p.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_FEEDBACK_CLEARED
        : p.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_FEEDBACK_GIVEN,
    conversationId: u,
    messageId: d,
    source: n,
    feedback: v,
    selectedFeedback: a,
    surface: o,
    experiment: c.memoryCitationExperiment ?? `none`,
  });
  let y = r.some((n) => {
    if (n.kind !== `memory` || (n.messageId ?? d) !== d) return !1;
    let r = e.get(_, { ...t, citationUuid: n.citationUuid });
    return (r == null ? n.feedback : r.feedback) != null;
  });
  (e.set(_, t, { feedback: v, pending: !0 }),
    o === `sources` &&
      v != null &&
      !y &&
      e
        .get(i)
        .success(
          e
            .get(f)
            .formatMessage({
              id: `chatgptConversations.summaryPanel.sources.memory.feedback.thanks`,
              defaultMessage: `Thanks for the feedback! I'll keep that in mind`,
              description: `Toast shown when adding feedback while no memory citation on the message is currently rated`,
            }),
        ));
  try {
    (await l.safePost(`/sidebar/conversation_context_citation_feedback`, {
      ...(t.accountId == null ? {} : { additionalHeaders: { "ChatGPT-Account-ID": t.accountId } }),
      requestBody: { conversation_id: u, message_id: d, citation_uuid: h, deleted: !1, feedback: v },
    }),
      e.set(_, t, { feedback: v, pending: !1 }));
  } catch {
    e.set(_, t, g);
  }
}
var _;
function v() {
  return (v = e(() => {
    (n(), a(), c(), u(), o(), h(), d(), (_ = r(t, (e) => null)));
  }))();
}
export { v as n, g as r, _ as t };
//# sourceMappingURL=chatgpt-memory-source-feedback-2f818b93aa99.js.map
