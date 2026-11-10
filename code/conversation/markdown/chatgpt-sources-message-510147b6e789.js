import { n as e } from "./rolldown-runtime-c05d78c594d1.js";
import {
  Jtt as t,
  QXt as n,
  Qtt as r,
  Spn as i,
  Xtt as a,
  Ytt as o,
  Ztt as s,
  _rt as c,
  bUt as l,
  bpn as u,
  eZt as d,
  irt as f,
  kht as p,
  nZt as m,
  qtt as h,
  rnt as g,
  vrt as _,
  xUt as v,
  xht as y,
  xpn as b,
} from "./app-initial-f094ef01c64d.js";
function x(
  e,
  {
    actionType: n,
    conversationId: r,
    experiment: i,
    messageId: c,
    source: l,
    feedback: u,
    selectedFeedback: f,
  },
) {
  let p = h.CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_UNSPECIFIED;
  (u === `positive`
    ? (p = h.CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE)
    : u === `negative`
      ? (p = h.CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE)
      : Object.is(u, null) && (p = h.CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_CLEARED),
    d(e, t, {
      actionType: n,
      conversationId: r ?? void 0,
      messageId: c,
      citationUuid: l?.citationUuid ?? void 0,
      sourceType: w(l),
      feedback: p,
      selectedFeedback:
        f == null
          ? void 0
          : {
              positive: h.CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_POSITIVE,
              negative: h.CHATGPT_WEB_MEMORY_CITATION_FEEDBACK_NEGATIVE,
            }[f],
      entrypoint:
        l == null
          ? a.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_TURN_SOURCES_BUTTON
          : a.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ENTRYPOINT_SOURCES_SIDEBAR_ACTION_MENU,
      target: s.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_TARGET_SEARCH_SOURCES_SIDEBAR,
      memoryCitationExperiment: i,
    }),
    n === o.CHATGPT_WEB_MEMORY_CITATION_INTERACTION_ACTION_TYPE_SIDEBAR_OPENED &&
      S(e, `chatgpt_memory_citations_sidebar_open_clicked`, i));
}
function S(e, t, n) {
  let r = {
    entrypoint: `turn_sources_button`,
    memory_citation_experiment: n,
    target: `search_sources_sidebar`,
  };
  (e.get(m).logEventWithStatsig?.(t, r), e.get(l).count(`default`, t, r));
}
function C(e, t) {
  (e
    .get(m)
    .logEventWithStatsig?.(
      t === `shown` ? `announcement_tooltip_shown` : `announcement_tooltip_dismissed`,
      {
        announcement_key: y,
      },
    ),
    t === `shown` &&
      d(e, f, { eventId: `${y}_tooltip_shown`, type: c.UPSELL_OR_MODAL_TYPE_NUX_TOOLTIP }));
}
function w(e) {
  switch (e?.conversationContextType) {
    case `user_memory`:
      return r.CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_SAVED_MEMORY;
    case `general_memory`:
      return r.CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_GENERAL_MEMORY;
    case `past_conversation`:
      return r.CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_PAST_CONVERSATION;
    case `user_instructions`:
      return r.CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_CUSTOM_INSTRUCTIONS;
    case null:
    case void 0:
      return r.CHATGPT_WEB_MEMORY_CITATION_SOURCE_TYPE_UNSPECIFIED;
  }
}
var T = e(() => {
    (_(), g(), v(), n(), p());
  }),
  E,
  D,
  O,
  k = e(() => {
    (i(),
      (E = u({
        id: `chatgptConversations.summaryPanel.sources.title`,
        defaultMessage: `Sources`,
        description: `Title for the sources section in the ChatGPT summary panel`,
      })),
      (D = b({
        links: {
          id: `chatgptConversations.sources.category.links`,
          defaultMessage: `Links`,
          description: `Heading and accessible list label for suggested navigation links in the ChatGPT Sources panel`,
        },
        more: {
          id: `chatgptConversations.sources.category.more`,
          defaultMessage: `More`,
          description: `Heading and accessible list label for additional search results that were not cited in the ChatGPT answer, below its cited sources`,
        },
        apps: {
          id: `chatgptConversations.sources.category.apps`,
          defaultMessage: `Apps`,
          description: `Heading and accessible list label for connected app sources in a ChatGPT Sources side panel`,
        },
        memory: {
          id: `chatgptConversations.sources.category.memory`,
          defaultMessage: `Memory`,
          description: `Heading and accessible list label for remembered information and past conversations in a ChatGPT Sources side panel`,
        },
        web: {
          id: `chatgptConversations.sources.category.web`,
          defaultMessage: `Web`,
          description: `Heading and accessible list label for cited websites in a ChatGPT Sources side panel`,
        },
      })),
      (O = b({
        userInstructions: {
          id: `chatgptConversations.sources.memory.attribution.userInstructions`,
          defaultMessage: `Custom instructions`,
          description: `Attribution label for a ChatGPT Sources row backed by the user's account custom instructions`,
        },
        userMemory: {
          id: `chatgptConversations.sources.memory.attribution.userMemory`,
          defaultMessage: `Saved memory`,
          description: `Attribution label for a ChatGPT Sources row backed by a saved account memory`,
        },
        generalMemory: {
          id: `chatgptConversations.sources.memory.attribution.generalMemory`,
          defaultMessage: `Memory`,
          description: `Attribution label for a ChatGPT Sources row backed by general account memory context`,
        },
      })));
  });
export { T as a, S as c, k as i, D as n, x as o, E as r, C as s, O as t };
//# sourceMappingURL=chatgpt-sources-message-510147b6e789.js.map
