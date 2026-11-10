import { n as e } from "./rolldown-runtime-2d059c5e81f4.js";
import {
  AUn as t,
  EUn as n,
  G6t as r,
  NDr as i,
  PBn as a,
  QDr as o,
  SDr as s,
  TUn as c,
  XDr as l,
  _$n as u,
  d6t as d,
  f6t as f,
  g$n as p,
  g6t as m,
  h6t as h,
  m6t as g,
  p6t as _,
  vVn as v,
  yVn as y,
} from "./app-initial-5851df3f6cb1.js";
function b(
  e,
  {
    actionType: t,
    conversationId: n,
    experiment: r,
    messageId: i,
    source: a,
    feedback: s,
    selectedFeedback: c,
    surface: l = `sources`,
  },
) {
  let u = d.CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED;
  s === `positive`
    ? (u = d.CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE)
    : s === `negative`
      ? (u = d.CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE)
      : Object.is(s, null) && (u = d.CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED);
  let p =
    a == null
      ? g.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON
      : g.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU;
  (l === `explainer` &&
    (p = g.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_ENTITY_SIDEBAR_FEEDBACK_BUTTON),
    o(e, f, {
      actionType: t,
      conversationId: n ?? void 0,
      messageId: i,
      citationUuid: a?.citationUuid ?? void 0,
      sourceType: C(a),
      feedback: u,
      selectedFeedback:
        c == null
          ? void 0
          : {
              positive: d.CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE,
              negative: d.CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE,
            }[c],
      entrypoint: p,
      target:
        l === `explainer` ||
        t === _.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_CITATION_CLICKED
          ? h.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_ENTITY_SIDEBAR
          : h.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_SEARCH_SOURCES_SIDEBAR,
      memoryCitationExperiment: r,
    }),
    t === _.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED &&
      x(e, `chatgpt_memory_citations_sidebar_open_clicked`, r));
}
function x(e, t, n) {
  let r = {
    entrypoint: `turn_sources_button`,
    memory_citation_experiment: n,
    target: `search_sources_sidebar`,
  };
  (t === `memory_footnote_shown` && o(e, c, { memoryCitationExperiment: n }),
    e.get(p).count(`default`, t, r));
}
function S(e, t) {
  (t === `dismissed` && o(e, n, { announcementKey: s }),
    t === `shown` && o(e, a, { eventId: `${s}_tooltip_shown`, type: v.UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP }));
}
function C(e) {
  switch (e?.conversationContextType) {
    case `user_memory`:
      return m.CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_SAVED_MEMORY;
    case `general_memory`:
      return m.CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_GENERAL_MEMORY;
    case `past_conversation`:
      return m.CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_PAST_CONVERSATION;
    case `user_instructions`:
      return m.CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_CUSTOM_INSTRUCTIONS;
    case null:
    case void 0:
      return m.CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_UNSPECIFIED;
  }
}
function w() {
  return (w = e(() => {
    (y(), r(), t(), u(), l(), i());
  }))();
}
export { x as i, b as n, S as r, w as t };
//# sourceMappingURL=chatgpt-memory-citation-analytics-03fd6073aa78.js.map
