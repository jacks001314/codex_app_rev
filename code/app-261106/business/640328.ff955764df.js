export const __rspack_esm_ids = [640328]
export const __webpack_modules__ = {
  y1Va(e, t, s) {
    var a = s("ABep"),
      i = s("QosV")
    t.default = (e) => {
      let t,
        s,
        n = (0, i.c)(3)
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("path", {
              fillRule: "evenodd",
              d: "M15.707 4.293a1 1 0 0 1 0 1.414L9.414 12l6.293 6.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0Z",
              clipRule: "evenodd",
            })),
            (n[0] = t))
          : (t = n[0]),
        n[1] !== e
          ? ((s = (0, a.jsx)("svg", {
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              ...e,
              children: t,
            })),
            (n[1] = e),
            (n[2] = s))
          : (s = n[2]),
        s
      )
    }
  },
  ZAig(e, t, s) {
    var a = s("ABep"),
      i = s("QosV")
    t.default = (e) => {
      let t,
        s,
        n,
        r,
        o = (0, i.c)(5)
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("path", {
              d: "M13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V12Z",
              fill: "currentColor",
            })),
            (s = (0, a.jsx)("path", {
              d: "M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z",
              fill: "currentColor",
            })),
            (n = (0, a.jsx)("path", {
              d: "M12 9.30005C12.6351 9.30005 13.15 8.78518 13.15 8.15005C13.15 7.51492 12.6351 7.00005 12 7.00005C11.3649 7.00005 10.85 7.51492 10.85 8.15005C10.85 8.78518 11.3649 9.30005 12 9.30005Z",
              fill: "currentColor",
            })),
            (o[0] = t),
            (o[1] = s),
            (o[2] = n))
          : ((t = o[0]), (s = o[1]), (n = o[2])),
        o[3] !== e
          ? ((r = (0, a.jsxs)("svg", {
              width: "1em",
              height: "1em",
              viewBox: "0 0 24 24",
              fill: "currentColor",
              ...e,
              children: [t, s, n],
            })),
            (o[3] = e),
            (o[4] = r))
          : (r = o[4]),
        r
      )
    }
  },
  ULZ9(e, t, s) {
    ;(s.d(t, { z: () => r }), s("iYCA"), s("yCBR"))
    var a = s("ABep"),
      i = s("QosV"),
      n = s("ylLY")
    function r(e) {
      let t,
        s,
        r = (0, i.c)(8),
        { children: o, linkComponent: l, allowedWidgetTypes: d, radixPortalContainer: c, hydrationSafe: u } = e,
        g = void 0 === l ? "a" : l,
        m = void 0 === d ? "GA" : d,
        p = void 0 !== u && u
      return (
        r[0] !== m || r[1] !== p || r[2] !== g || r[3] !== c
          ? ((t = { linkComponent: g, allowedWidgetTypes: m, radixPortalContainer: c, hydrationSafe: p }),
            (r[0] = m),
            (r[1] = p),
            (r[2] = g),
            (r[3] = c),
            (r[4] = t))
          : (t = r[4]),
        r[5] !== o || r[6] !== t
          ? ((s = (0, a.jsx)(n.t.Provider, { value: t, children: o })), (r[5] = o), (r[6] = t), (r[7] = s))
          : (s = r[7]),
        s
      )
    }
  },
  H9xj(e, t, s) {
    s.d(t, { BusinessProfileAgentInsights: () => $ })
    var a = s("ABep"),
      i = s("QosV"),
      n = s("MnTr"),
      r = s("M0sY"),
      o = s("zd8w"),
      l = s("Wf1j"),
      d = s("oyxz"),
      c = s("BNR2"),
      u = s("AxvA"),
      g = s("NxWE"),
      m = s("zRZS"),
      p = s("on57"),
      h = s("y1Va"),
      f = s("McuO"),
      v = "card-uQQTCU",
      y = s("ZAig"),
      b = s("H7JM"),
      x = s("ZpWd")
    let _ = (0, s("Qgfj").YK)({
      summary: {
        id: "ads_manager.agent_insights.details.summary",
        defaultMessage: "Conversation summary",
        description: "Section heading above conversation quality and customer topics.",
      },
      summaryPeriod: {
        id: "ads_manager.agent_insights.details.summaryPeriod",
        defaultMessage: "Conversation summary reporting period",
        description: "Accessible name for the period shared by conversation quality and customer topics.",
      },
      summaryDays: {
        id: "ads_manager.agent_insights.details.summaryDays",
        defaultMessage: "Last {days, plural, one {# day} other {# days}}",
        description: "Selected reporting-window length for the conversation summary.",
      },
      qualityReportDates: {
        id: "ads_manager.agent_insights.details.qualityReportDates",
        defaultMessage: "Reporting period: {start}–{end} (UTC). Separate from the chart date range.",
        description:
          "Actual inclusive UTC dates for the independent conversation quality report, unaffected by the chart date filter.",
      },
      quality: {
        id: "ads_manager.agent_insights.details.quality",
        defaultMessage: "Conversation quality",
        description: "Heading for the Agent Insights conversation quality card.",
      },
      helpful: {
        id: "ads_manager.agent_insights.details.helpful",
        defaultMessage: "Helpful",
        description: "Label for the helpful conversation count in Agent Insights.",
      },
      needsImprovement: {
        id: "ads_manager.agent_insights.details.needsImprovement",
        defaultMessage: "Needs improvement",
        description: "Label for conversations assessed as needs_review in Agent Insights.",
      },
      unavailable: {
        id: "ads_manager.agent_insights.details.unavailable",
        defaultMessage: "Unavailable",
        description: "Accessible replacement for a dash when an insight count is unavailable.",
      },
      suggestion: {
        id: "ads_manager.agent_insights.details.suggestion",
        defaultMessage: "Suggested improvements",
        description: "Label above the current Agent Insights improvement suggestion.",
      },
      previousSuggestion: {
        id: "ads_manager.agent_insights.details.previousSuggestion",
        defaultMessage: "Previous suggestion",
        description: "Accessible name for navigating to the previous improvement suggestion.",
      },
      nextSuggestion: {
        id: "ads_manager.agent_insights.details.nextSuggestion",
        defaultMessage: "Next suggestion",
        description: "Accessible name for navigating to the next improvement suggestion.",
      },
      qualityNoAssessments: {
        id: "ads_manager.agent_insights.details.qualityNoAssessments",
        defaultMessage: "No conversation assessments are available for these dates.",
        description:
          "Neutral status below blank conversation quality counts after a successful report read found no AI assessments in the selected dates. It does not mean there were no conversations or that the request failed.",
      },
      qualityUnavailable: {
        id: "ads_manager.agent_insights.details.qualityUnavailable",
        defaultMessage: "Conversation quality is unavailable for this date range.",
        description: "Unavailable quality assessments, distinct from zero counts.",
      },
      loading: {
        id: "ads_manager.agent_insights.details.loading",
        defaultMessage: "Loading",
        description: "Accessible replacement for a count while conversation quality loads.",
      },
      qualityLoading: {
        id: "ads_manager.agent_insights.details.qualityLoading",
        defaultMessage: "Loading conversation quality…",
        description: "Status while the selected conversation quality report loads.",
      },
      qualityError: {
        id: "ads_manager.agent_insights.details.qualityError",
        defaultMessage: "Conversation quality couldn't be loaded. It may not be available for these dates.",
        description: "Quality request failure without affecting the performance chart.",
      },
      retry: {
        id: "ads_manager.agent_insights.details.retry",
        defaultMessage: "Retry",
        description: "Retry the conversation quality request.",
      },
      qualityCampaignUnavailable: {
        id: "ads_manager.agent_insights.details.qualityCampaignUnavailable",
        defaultMessage: "Select All campaigns to view conversation quality.",
        description: "Quality source has agent scope and cannot attribute assessments to a campaign.",
      },
      qualityCoverage: {
        id: "ads_manager.agent_insights.details.qualityCoverage",
        defaultMessage:
          "Based on conversation snapshots collected during the dates shown. AI assessment coverage is partial.",
        description:
          "Dates select snapshot collection hours; assessment coverage is partial, not complete conversation or event coverage.",
      },
      qualityUpdated: {
        id: "ads_manager.agent_insights.details.qualityUpdated",
        defaultMessage: "Latest assessment: {date} UTC",
        description: "Most recent grading timestamp among counted assessments, not a completeness watermark.",
      },
      suggestionsUnavailable: {
        id: "ads_manager.agent_insights.details.suggestionsUnavailable",
        defaultMessage: "Suggested improvements are not available yet.",
        description: "No published improvements report is available for this agent.",
      },
      suggestionsLoading: {
        id: "ads_manager.agent_insights.details.suggestionsLoading",
        defaultMessage: "Loading suggested improvements…",
        description: "Status while the independent improvements report loads.",
      },
      suggestionsReportDates: {
        id: "ads_manager.agent_insights.details.suggestionsReportDates",
        defaultMessage: "Latest seven-day report: {start}–{end} (UTC). Unaffected by date filters.",
        description:
          "Actual inclusive UTC dates of suggestions, independent of both performance and conversation summary filters.",
      },
      suggestionsEmpty: {
        id: "ads_manager.agent_insights.details.suggestionsEmpty",
        defaultMessage: "No suggested improvements were found in this report.",
        description: "A successful improvement analysis returned no approved suggestions.",
      },
      suggestionsNotRun: {
        id: "ads_manager.agent_insights.details.suggestionsNotRun",
        defaultMessage: "Suggested improvements have not been generated for this report yet.",
        description: "The published report explicitly states that improvement analysis has not run.",
      },
      suggestionsDisabled: {
        id: "ads_manager.agent_insights.details.suggestionsDisabled",
        defaultMessage: "Suggested improvements are not enabled for this agent.",
        description: "Improvement generation is disabled for the published agent.",
      },
      suggestionsContextUnavailable: {
        id: "ads_manager.agent_insights.details.suggestionsContextUnavailable",
        defaultMessage: "Agent guidance was unavailable when this report was generated.",
        description: "The analysis could not obtain the guidance context it needs.",
      },
      suggestionsFailed: {
        id: "ads_manager.agent_insights.details.suggestionsFailed",
        defaultMessage: "Suggested improvements could not be generated for this report.",
        description: "The published analysis run failed, distinct from a failed request.",
      },
      suggestionsExpired: {
        id: "ads_manager.agent_insights.details.suggestionsExpired",
        defaultMessage: "These suggestions have expired. A newer report is not available yet.",
        description: "Previously generated suggestions are too old to display.",
      },
      suggestionsError: {
        id: "ads_manager.agent_insights.details.suggestionsError",
        defaultMessage: "Suggested improvements couldn't be loaded.",
        description: "A retryable request failure, without implying no suggestions exist.",
      },
      suggestionCharacterLimit: {
        id: "ads_manager.agent_insights.details.suggestionCharacterLimit",
        defaultMessage:
          "This suggestion may take your guidance over its character limit. Review the length before making changes.",
        description: "A source-provided warning that adding this guidance may exceed the character limit.",
      },
      apply: {
        id: "ads_manager.agent_insights.details.apply",
        defaultMessage: "Apply suggestion",
        description: "Disabled action to apply a suggested improvement; not yet supported.",
      },
      skip: {
        id: "ads_manager.agent_insights.details.skip",
        defaultMessage: "Skip",
        description: "Disabled action to skip an improvement suggestion; not yet supported.",
      },
      actionsUnavailable: {
        id: "ads_manager.agent_insights.details.actionsUnavailable",
        defaultMessage: "Suggestion actions are not available yet.",
        description: "Explanation for disabled suggestion actions in Agent Insights.",
      },
      topics: {
        id: "ads_manager.agent_insights.details.topics",
        defaultMessage: "What customers are looking for",
        description: "Heading for the Agent Insights customer topic table.",
      },
      topic: {
        id: "ads_manager.agent_insights.details.topic",
        defaultMessage: "Topic",
        description: "Customer topic column heading in Agent Insights.",
      },
      conversations: {
        id: "ads_manager.agent_insights.details.conversations",
        defaultMessage: "Conversations",
        description: "Conversation count column heading in the Agent Insights topic table.",
      },
      multiTurn: {
        id: "ads_manager.agent_insights.details.multiTurn",
        defaultMessage: "Multi-turn conversations",
        description: "Multi-turn conversation count column heading in the customer topic table.",
      },
      topicsPeriod: {
        id: "ads_manager.agent_insights.details.topicsPeriod",
        defaultMessage: "Topics and return visits reporting period",
        description: "Accessible name for the period shared by customer topics and return visits.",
      },
      topicsDays: {
        id: "ads_manager.agent_insights.details.topicsDays",
        defaultMessage: "{days, plural, one {# day} other {# days}}",
        description: "Length of a published customer topic report.",
      },
      topicsIndependentPeriod: {
        id: "ads_manager.agent_insights.details.topicsIndependentPeriod",
        defaultMessage: "This reporting period is separate from the date range above.",
        description: "Makes the topic report period explicit independently of the performance graph.",
      },
      topicsReportDetails: {
        id: "ads_manager.agent_insights.details.topicsReportDetails",
        defaultMessage: "About this customer topics report",
        description: "Accessible label for the customer topics report information tooltip",
      },
      topicsPagination: {
        id: "ads_manager.agent_insights.details.topicsPagination",
        defaultMessage: "Customer topics pages",
        description: "Accessible label for customer topics pagination",
      },
      topicsPageRange: {
        id: "ads_manager.agent_insights.details.topicsPageRange",
        defaultMessage: "{start, number}–{end, number} of {total, number} topics",
        description: "Range of customer topics shown on the current page",
      },
      topicsPreviousPage: {
        id: "ads_manager.agent_insights.details.topicsPreviousPage",
        defaultMessage: "Previous topics page",
        description: "Accessible label for the previous customer topics page button",
      },
      topicsNextPage: {
        id: "ads_manager.agent_insights.details.topicsNextPage",
        defaultMessage: "Next topics page",
        description: "Accessible label for the next customer topics page button",
      },
      topicsReportDates: {
        id: "ads_manager.agent_insights.details.topicsReportDates",
        defaultMessage: "Latest published report: {start}–{end} (UTC)",
        description: "Actual inclusive dates of the published report, not a refresh timestamp.",
      },
      topicsCoverage: {
        id: "ads_manager.agent_insights.details.topicsCoverage",
        defaultMessage: "Based on observed conversations. Capture is partial.",
        description: "All topic reports have partial observed-conversation coverage.",
      },
      topicsIncompleteHistory: {
        id: "ads_manager.agent_insights.details.topicsIncompleteHistory",
        defaultMessage: "Source history is incomplete: {observed, number} of {expected, number} hours available.",
        description: "Discloses incomplete ingestion history separately from partial capture.",
      },
      topicsUnclassified: {
        id: "ads_manager.agent_insights.details.topicsUnclassified",
        defaultMessage:
          "{count, plural, one {# conversation lacks a usable summary.} other {# conversations lack usable summaries.}}",
        description: "Number of conversations with missing or oversized source summaries.",
      },
      topicsEmpty: {
        id: "ads_manager.agent_insights.details.topicsEmpty",
        defaultMessage: "No observed conversations in this report.",
        description: "A valid published zero report, distinct from unavailable reporting.",
      },
      topicsLoading: {
        id: "ads_manager.agent_insights.details.topicsLoading",
        defaultMessage: "Loading customer topics…",
        description: "Loading state for an independently requested customer topic report.",
      },
      topicsError: {
        id: "ads_manager.agent_insights.details.topicsError",
        defaultMessage: "Customer topics couldn't be loaded. A report may not be available for this account.",
        description: "Independent customer topic request failure.",
      },
      topicsCampaignUnavailable: {
        id: "ads_manager.agent_insights.details.topicsCampaignUnavailable",
        defaultMessage: "Select All campaigns to view customer topics.",
        description: "Topic reports cannot be attributed to a campaign.",
      },
      topicsUnavailable: {
        id: "ads_manager.agent_insights.details.topicsUnavailable",
        defaultMessage: "Customer topic insights are not available yet.",
        description: "Unavailable customer topic data; does not imply zero activity.",
      },
      summaryPrompt: {
        id: "ads_manager.agent_insights.details.summaryPrompt",
        defaultMessage: "“Summarize insights from my agent’s conversations”",
        description: "Suggested question submitted to the embedded Ads agent.",
      },
      improvePrompt: {
        id: "ads_manager.agent_insights.details.improvePrompt",
        defaultMessage: "“What should I improve about my agent first?”",
        description: "Suggested question submitted to the embedded Ads agent.",
      },
      questionContext: {
        id: "ads_manager.agent_insights.details.questionContext",
        defaultMessage:
          "Use the available insights from this account's Business Agent conversations to answer the following question.",
        description: "Context grounding the suggested question in this account's agent insights.",
      },
    })
    function j(e) {
      let t,
        s,
        n,
        d,
        u,
        g,
        m,
        p,
        j,
        C,
        A,
        w,
        S,
        N,
        q,
        D,
        U,
        T = (0, i.c)(46),
        { state: k, windowDays: I, onWindowChange: L, windows: P } = e
      T[0] !== k ? ((t = void 0 === k ? { status: "unavailable" } : k), (T[0] = k), (T[1] = t)) : (t = T[1])
      let R = t,
        E = void 0 === I ? 7 : I,
        z = void 0 === P ? r.xf : P,
        F = (0, l.A)(),
        Z = (0, o.useId)(),
        B = "ready" === R.status ? R.data : null
      T[2] !== F
        ? ((s = (e) =>
            F.formatDate(`${e}T00:00:00Z`, { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })),
          (T[2] = F),
          (T[3] = s))
        : (s = T[3])
      let J = s,
        Q = B ? [...B.intents].sort(M) : []
      T[4] !== B ? ((n = { report: B, page: 0 }), (T[4] = B), (T[5] = n)) : (n = T[5])
      let [G, $] = (0, o.useState)(n)
      G.report !== B && $({ report: B, page: 0 })
      let O = Math.max(0, Math.ceil(Q.length / 5) - 1),
        V = G.report === B ? Math.min(G.page, O) : 0,
        W = 5 * V
      return (
        T[6] !== F ? ((d = F.formatMessage(_.topics)), (T[6] = F), (T[7] = d)) : (d = T[7]),
        T[8] !== d || T[9] !== Z
          ? ((u = (0, a.jsx)("h3", { id: Z, className: "text-primary text-base font-semibold", children: d })),
            (T[8] = d),
            (T[9] = Z),
            (T[10] = u))
          : (u = T[10]),
        T[11] !== J || T[12] !== F || T[13] !== B
          ? ((g =
              B &&
              (0, a.jsx)(x.m_, {
                content: F.formatMessage(_.topicsReportDates, { start: J(B.window_start), end: J(B.report_date) }),
                children: (0, a.jsx)(c.$, {
                  color: "secondary",
                  variant: "ghost",
                  size: "md",
                  uniform: !0,
                  pill: !0,
                  "aria-label": F.formatMessage(_.topicsReportDetails),
                  children: (0, a.jsx)(y.default, { "aria-hidden": "true" }),
                }),
              })),
            (T[11] = J),
            (T[12] = F),
            (T[13] = B),
            (T[14] = g))
          : (g = T[14]),
        T[15] !== u || T[16] !== g
          ? ((m = (0, a.jsxs)("div", { className: "flex items-center gap-1", children: [u, g] })),
            (T[15] = u),
            (T[16] = g),
            (T[17] = m))
          : (m = T[17]),
        T[18] !== F || T[19] !== L || T[20] !== R.status || T[21] !== E || T[22] !== z
          ? ((p =
              L &&
              (0, a.jsx)("div", {
                className: "w-32 shrink-0",
                children: (0, a.jsx)(b.l6, {
                  "aria-label": F.formatMessage(_.topicsPeriod),
                  size: "md",
                  pill: !0,
                  dropdownIconType: "chevronDown",
                  value: String(E),
                  options: z.map((e) => ({ value: String(e), label: F.formatMessage(_.topicsDays, { days: e }) })),
                  disabled: !L || "campaign" === R.status,
                  onChange: (e) => L?.(Number(e.value)),
                }),
              })),
            (T[18] = F),
            (T[19] = L),
            (T[20] = R.status),
            (T[21] = E),
            (T[22] = z),
            (T[23] = p))
          : (p = T[23]),
        T[24] !== m || T[25] !== p
          ? ((j = (0, a.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-3",
              children: [m, p],
            })),
            (T[24] = m),
            (T[25] = p),
            (T[26] = j))
          : (j = T[26]),
        T[27] !== F || T[28] !== B?.conversations
          ? ((C =
              B?.conversations === 0 &&
              (0, a.jsx)("p", {
                className: "text-secondary text-xs",
                role: "status",
                children: F.formatMessage(_.topicsEmpty),
              })),
            (T[27] = F),
            (T[28] = B?.conversations),
            (T[29] = C))
          : (C = T[29]),
        T[30] !== F ? ((A = F.formatMessage(_.topic)), (T[30] = F), (T[31] = A)) : (A = T[31]),
        T[32] !== A ? ((w = (0, a.jsx)("th", { scope: "col", children: A })), (T[32] = A), (T[33] = w)) : (w = T[33]),
        T[34] !== F ? ((S = F.formatMessage(_.conversations)), (T[34] = F), (T[35] = S)) : (S = T[35]),
        T[36] !== S ? ((N = (0, a.jsx)("th", { scope: "col", children: S })), (T[36] = S), (T[37] = N)) : (N = T[37]),
        T[38] !== F ? ((q = F.formatMessage(_.multiTurn)), (T[38] = F), (T[39] = q)) : (q = T[39]),
        T[40] !== q ? ((D = (0, a.jsx)("th", { scope: "col", children: q })), (T[40] = q), (T[41] = D)) : (D = T[41]),
        T[42] !== w || T[43] !== N || T[44] !== D
          ? ((U = (0, a.jsx)("thead", { children: (0, a.jsxs)("tr", { children: [w, N, D] }) })),
            (T[42] = w),
            (T[43] = N),
            (T[44] = D),
            (T[45] = U))
          : (U = T[45]),
        (0, a.jsxs)("section", {
          className: v,
          "aria-labelledby": Z,
          "aria-busy": "loading" === R.status,
          children: [
            j,
            C,
            (0, a.jsx)("div", {
              className: "tableScroller-yS_xhf",
              children: (0, a.jsxs)("table", {
                className: "topicsTable-JErjhX",
                "aria-labelledby": Z,
                children: [
                  U,
                  (0, a.jsx)("tbody", {
                    children: B
                      ? Q.slice(W, W + 5).map((e) =>
                          (0, a.jsxs)(
                            "tr",
                            {
                              children: [
                                (0, a.jsx)("th", { scope: "row", children: e.label }),
                                (0, a.jsx)("td", {
                                  className: "text-primary",
                                  children: F.formatNumber(e.conversations),
                                }),
                                (0, a.jsx)("td", { children: F.formatNumber(e.multi_turn_conversations) }),
                              ],
                            },
                            e.intent_id,
                          ),
                        )
                      : (0, a.jsx)("tr", {
                          children: (0, a.jsx)("td", {
                            colSpan: 3,
                            className: "unavailableTopics-iPrimT",
                            children:
                              "error" === R.status
                                ? (0, a.jsxs)("div", {
                                    role: "alert",
                                    children: [
                                      (0, a.jsx)("p", { children: F.formatMessage(_.topicsError) }),
                                      (0, a.jsx)(c.$, {
                                        color: "secondary",
                                        variant: "ghost",
                                        size: "md",
                                        onClick: R.onRetry,
                                        children: F.formatMessage(_.retry),
                                      }),
                                    ],
                                  })
                                : (0, a.jsx)("span", {
                                    role: "status",
                                    children: F.formatMessage(
                                      "campaign" === R.status
                                        ? _.topicsCampaignUnavailable
                                        : "loading" === R.status
                                          ? _.topicsLoading
                                          : _.topicsUnavailable,
                                    ),
                                  }),
                          }),
                        }),
                  }),
                ],
              }),
            }),
            Q.length > 5 &&
              (0, a.jsxs)("nav", {
                className: "mt-auto flex flex-wrap items-center justify-end gap-3",
                "aria-label": F.formatMessage(_.topicsPagination),
                children: [
                  (0, a.jsx)("span", {
                    className: "text-secondary text-sm",
                    role: "status",
                    children: F.formatMessage(_.topicsPageRange, {
                      start: W + 1,
                      end: Math.min(W + 5, Q.length),
                      total: Q.length,
                    }),
                  }),
                  (0, a.jsx)(c.$, {
                    color: "secondary",
                    variant: "outline",
                    size: "md",
                    uniform: !0,
                    pill: !0,
                    "aria-label": F.formatMessage(_.topicsPreviousPage),
                    disabled: 0 === V,
                    onClick: () => $({ report: B, page: V - 1 }),
                    children: (0, a.jsx)(h.default, { "aria-hidden": "true" }),
                  }),
                  (0, a.jsx)(c.$, {
                    color: "secondary",
                    variant: "outline",
                    size: "md",
                    uniform: !0,
                    pill: !0,
                    "aria-label": F.formatMessage(_.topicsNextPage),
                    disabled: V === O,
                    onClick: () => $({ report: B, page: V + 1 }),
                    children: (0, a.jsx)(f.default, { "aria-hidden": "true" }),
                  }),
                ],
              }),
          ],
        })
      )
    }
    function M(e, t) {
      return t.conversations - e.conversations || e.intent_id.localeCompare(t.intent_id)
    }
    function C(e) {
      let t,
        s,
        n,
        r,
        u,
        g,
        m,
        h,
        f,
        y,
        b,
        x,
        M,
        C,
        S,
        N,
        q = (0, i.c)(39),
        { dateControls: D, activityChart: U, improvements: T, quality: k, qualityDates: I, topics: L } = e
      q[0] !== T ? ((t = void 0 === T ? { status: "unavailable" } : T), (q[0] = T), (q[1] = t)) : (t = q[1])
      let P = t,
        R = void 0 === k ? { status: "unavailable" } : k,
        E = (0, l.A)(),
        z = (0, o.useId)(),
        F = (0, o.useId)(),
        Z = (0, o.useId)(),
        B = "ready" === R.status ? R.data : I
      q[2] !== E
        ? ((s = (e) =>
            E.formatDate(`${e}T00:00:00Z`, { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })),
          (q[2] = E),
          (q[3] = s))
        : (s = q[3])
      let J = s,
        Q = (e) =>
          void 0 === e
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("span", { "aria-hidden": "true", children: "—" }),
                  (0, a.jsx)("span", {
                    className: "sr-only",
                    children: E.formatMessage("loading" === R.status ? _.loading : _.unavailable),
                  }),
                ],
              })
            : E.formatNumber(e),
        G = U ? "sr-only" : "flex flex-wrap items-center justify-between gap-3"
      ;(q[4] !== E ? ((n = E.formatMessage(_.summary)), (q[4] = E), (q[5] = n)) : (n = q[5]),
        q[6] !== z || q[7] !== n
          ? ((r = (0, a.jsx)("h2", { id: z, className: "text-primary text-base font-semibold", children: n })),
            (q[6] = z),
            (q[7] = n),
            (q[8] = r))
          : (r = q[8]),
        q[9] !== D || q[10] !== G || q[11] !== r
          ? ((u = (0, a.jsxs)("div", { className: G, children: [r, D] })),
            (q[9] = D),
            (q[10] = G),
            (q[11] = r),
            (q[12] = u))
          : (u = q[12]),
        q[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, p.A)(v, "quality-JSewOZ")), (q[13] = g))
          : (g = q[13]),
        q[14] !== E ? ((m = E.formatMessage(_.quality)), (q[14] = E), (q[15] = m)) : (m = q[15]),
        q[16] !== F || q[17] !== m
          ? ((h = (0, a.jsx)("h3", { id: F, className: "text-primary text-base font-semibold", children: m })),
            (q[16] = F),
            (q[17] = m),
            (q[18] = h))
          : (h = q[18]))
      let $ = B
        ? (0, a.jsx)("p", {
            className: "text-secondary text-xs",
            children: E.formatMessage(_.qualityReportDates, { start: J(B.start_date), end: J(B.end_date) }),
          })
        : null
      ;(q[19] !== h || q[20] !== $
        ? ((f = (0, a.jsxs)("div", { className: "space-y-1", children: [h, $] })),
          (q[19] = h),
          (q[20] = $),
          (q[21] = f))
        : (f = q[21]),
        q[22] !== E ? ((y = E.formatMessage(_.helpful)), (q[22] = E), (q[23] = y)) : (y = q[23]),
        q[24] !== y
          ? ((b = (0, a.jsx)("dt", { className: "text-secondary text-sm", children: y })), (q[24] = y), (q[25] = b))
          : (b = q[25]),
        q[26] !== E ? ((x = E.formatMessage(_.needsImprovement)), (q[26] = E), (q[27] = x)) : (x = q[27]),
        q[28] !== x
          ? ((M = (0, a.jsx)("dt", { className: "text-secondary text-sm", children: x })), (q[28] = x), (q[29] = M))
          : (M = q[29]))
      let O = "error" === R.status ? "alert" : "status",
        V =
          "ready" === R.status
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("p", { children: E.formatMessage(_.qualityCoverage) }),
                  (0, a.jsx)("p", {
                    className: "mt-1",
                    children: E.formatMessage(_.qualityUpdated, {
                      date: E.formatDate(R.data.updated_at, {
                        month: "short",
                        day: "numeric",
                        hour: "numeric",
                        minute: "2-digit",
                        timeZone: "UTC",
                      }),
                    }),
                  }),
                ],
              })
            : "error" === R.status
              ? (0, a.jsxs)(a.Fragment, {
                  children: [
                    E.formatMessage(_.qualityError),
                    " ",
                    (0, a.jsx)(c.$, {
                      color: "secondary",
                      variant: "ghost",
                      size: "md",
                      onClick: R.onRetry,
                      children: E.formatMessage(_.retry),
                    }),
                  ],
                })
              : "unavailable" === R.status && "no-assessments" === R.reason
                ? (0, a.jsx)(d.A, { ..._.qualityNoAssessments })
                : E.formatMessage(
                    "campaign" === R.status
                      ? _.qualityCampaignUnavailable
                      : "loading" === R.status
                        ? _.qualityLoading
                        : _.qualityUnavailable,
                  )
      return (
        q[30] !== Z || q[31] !== O || q[32] !== V
          ? ((C = (0, a.jsx)("div", { id: Z, className: "text-secondary -mt-4 text-xs", role: O, children: V })),
            (q[30] = Z),
            (q[31] = O),
            (q[32] = V),
            (q[33] = C))
          : (C = q[33]),
        q[34] !== U || q[35] !== P
          ? ((S =
              !U &&
              (0, a.jsx)(
                w,
                { state: P },
                "ready" === P.status
                  ? `${P.data.business_agent_id}:${P.data.report_date}:${P.data.suggestions.map(A).join(",")}`
                  : P.status,
              )),
            (q[34] = U),
            (q[35] = P),
            (q[36] = S))
          : (S = q[36]),
        q[37] !== L ? ((N = L ?? (0, a.jsx)(j, {})), (q[37] = L), (q[38] = N)) : (N = q[38]),
        (0, a.jsxs)("section", {
          className: "mt-8 space-y-3",
          "aria-labelledby": z,
          children: [
            u,
            (0, a.jsxs)("div", {
              className: U ? "space-y-6" : "details-vvWhiE",
              children: [
                U,
                (0, a.jsxs)("section", {
                  className: g,
                  "aria-labelledby": F,
                  "aria-busy": "loading" === R.status,
                  children: [
                    f,
                    (0, a.jsxs)("dl", {
                      className: "grid grid-cols-2 gap-4",
                      "aria-describedby": Z,
                      children: [
                        (0, a.jsxs)("div", {
                          className: "flex flex-col-reverse gap-1.5",
                          children: [
                            b,
                            (0, a.jsx)("dd", {
                              className: "text-primary text-2xl font-semibold",
                              children: Q("ready" === R.status ? R.data.helpful_conversations : void 0),
                            }),
                          ],
                        }),
                        (0, a.jsxs)("div", {
                          className: "flex flex-col-reverse gap-1.5",
                          children: [
                            M,
                            (0, a.jsx)("dd", {
                              className: "text-primary text-2xl font-semibold",
                              children: Q("ready" === R.status ? R.data.needs_improvement_conversations : void 0),
                            }),
                          ],
                        }),
                      ],
                    }),
                    C,
                    S,
                  ],
                }),
                N,
              ],
            }),
          ],
        })
      )
    }
    function A(e) {
      let { id: t } = e
      return t
    }
    function w(e) {
      let t,
        s,
        n,
        r,
        d,
        u,
        g,
        m,
        p,
        v,
        y,
        b,
        x,
        j,
        M,
        C,
        A,
        w,
        S,
        N,
        q = (0, i.c)(87),
        { state: D } = e,
        U = (0, l.A)(),
        T = (0, o.useId)(),
        k = (0, o.useId)(),
        [I, L] = (0, o.useState)(0)
      if ("hidden" === D.status) return null
      let P = "ready" === D.status ? D.data : null
      q[0] !== U
        ? ((t = (e) =>
            U.formatDate(`${e}T00:00:00Z`, { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" })),
          (q[0] = U),
          (q[1] = t))
        : (t = q[1])
      let R = t
      q[2] !== P ? ((s = P?.status === "available" ? P.suggestions : []), (q[2] = P), (q[3] = s)) : (s = q[3])
      let E = s,
        z = Math.min(I, Math.max(0, E.length - 1)),
        F = E[z]
      if (
        q[4] !== z ||
        q[5] !== P ||
        q[6] !== T ||
        q[7] !== U ||
        q[8] !== R ||
        q[9] !== D.onRetry ||
        q[10] !== D.status ||
        q[11] !== F ||
        q[12] !== E.length
      ) {
        let e,
          t,
          s,
          i,
          o,
          l,
          b,
          x,
          j,
          M,
          C,
          A = {
            available: _.suggestionsUnavailable,
            empty: _.suggestionsEmpty,
            not_run: _.suggestionsNotRun,
            disabled: _.suggestionsDisabled,
            context_unavailable: _.suggestionsContextUnavailable,
            failed: _.suggestionsFailed,
            expired: _.suggestionsExpired,
            unavailable: _.suggestionsUnavailable,
          }
        ;((p = "suggestion-NAqmN1"),
          (v = T),
          (y = "loading" === D.status),
          q[22] !== U ? ((e = U.formatMessage(_.suggestion)), (q[22] = U), (q[23] = e)) : (e = q[23]),
          q[24] !== T || q[25] !== e
            ? ((t = (0, a.jsx)("h3", { id: T, className: "text-secondary text-xs", children: e })),
              (q[24] = T),
              (q[25] = e),
              (q[26] = t))
            : (t = q[26]))
        let w = 0 === z
        ;(q[27] !== U ? ((s = U.formatMessage(_.previousSuggestion)), (q[27] = U), (q[28] = s)) : (s = q[28]),
          q[29] !== z ? ((i = () => L(z - 1)), (q[29] = z), (q[30] = i)) : (i = q[30]),
          q[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, a.jsx)(h.default, { "aria-hidden": "true" })), (q[31] = o))
            : (o = q[31]),
          q[32] !== w || q[33] !== s || q[34] !== i
            ? ((l = (0, a.jsx)(c.$, {
                color: "secondary",
                variant: "outline",
                size: "md",
                uniform: !0,
                pill: !0,
                iconSize: "sm",
                disabled: w,
                "aria-label": s,
                onClick: i,
                children: o,
              })),
              (q[32] = w),
              (q[33] = s),
              (q[34] = i),
              (q[35] = l))
            : (l = q[35]))
        let S = z >= E.length - 1
        ;(q[36] !== U ? ((b = U.formatMessage(_.nextSuggestion)), (q[36] = U), (q[37] = b)) : (b = q[37]),
          q[38] !== z ? ((x = () => L(z + 1)), (q[38] = z), (q[39] = x)) : (x = q[39]),
          q[40] === Symbol.for("react.memo_cache_sentinel")
            ? ((j = (0, a.jsx)(f.default, { "aria-hidden": "true" })), (q[40] = j))
            : (j = q[40]),
          q[41] !== S || q[42] !== b || q[43] !== x
            ? ((M = (0, a.jsx)(c.$, {
                color: "secondary",
                variant: "outline",
                size: "md",
                uniform: !0,
                pill: !0,
                iconSize: "sm",
                disabled: S,
                "aria-label": b,
                onClick: x,
                children: j,
              })),
              (q[41] = S),
              (q[42] = b),
              (q[43] = x),
              (q[44] = M))
            : (M = q[44]),
          q[45] !== l || q[46] !== M
            ? ((C = (0, a.jsxs)("div", { className: "flex gap-2", children: [l, M] })),
              (q[45] = l),
              (q[46] = M),
              (q[47] = C))
            : (C = q[47]),
          q[48] !== t || q[49] !== C
            ? ((n = (0, a.jsxs)("div", { className: "flex items-center justify-between gap-2", children: [t, C] })),
              (q[48] = t),
              (q[49] = C),
              (q[50] = n))
            : (n = q[50]),
          q[51] !== P || q[52] !== U || q[53] !== R
            ? ((r =
                P?.window_start && P.report_date
                  ? (0, a.jsx)("p", {
                      className: "text-secondary text-xs",
                      children: U.formatMessage(_.suggestionsReportDates, {
                        start: R(P.window_start),
                        end: R(P.report_date),
                      }),
                    })
                  : null),
              (q[51] = P),
              (q[52] = U),
              (q[53] = R),
              (q[54] = r))
            : (r = q[54]),
          (d = "flex flex-col gap-2"),
          (u = "polite"),
          (g = "true"),
          (m = F
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("p", { className: "text-primary text-sm font-semibold", children: F.title }),
                  (0, a.jsxs)("p", {
                    className: "text-secondary text-sm",
                    children: [F.observed_pattern, " ", F.suggested_action],
                  }),
                  F.warnings.includes("guidance_character_limit")
                    ? (0, a.jsx)("p", {
                        className: "text-secondary mt-2 text-xs",
                        children: U.formatMessage(_.suggestionCharacterLimit),
                      })
                    : null,
                ],
              })
            : "error" === D.status
              ? (0, a.jsxs)("div", {
                  role: "alert",
                  className: "text-secondary text-sm",
                  children: [
                    U.formatMessage(_.suggestionsError),
                    " ",
                    (0, a.jsx)(c.$, {
                      color: "secondary",
                      variant: "ghost",
                      size: "md",
                      onClick: D.onRetry,
                      children: U.formatMessage(_.retry),
                    }),
                  ],
                })
              : (0, a.jsx)("p", {
                  className: "text-secondary text-sm",
                  children: U.formatMessage(
                    "loading" === D.status
                      ? _.suggestionsLoading
                      : (A[P?.status ?? "unavailable"] ?? _.suggestionsUnavailable),
                  ),
                })),
          (q[4] = z),
          (q[5] = P),
          (q[6] = T),
          (q[7] = U),
          (q[8] = R),
          (q[9] = D.onRetry),
          (q[10] = D.status),
          (q[11] = F),
          (q[12] = E.length),
          (q[13] = n),
          (q[14] = r),
          (q[15] = d),
          (q[16] = u),
          (q[17] = g),
          (q[18] = m),
          (q[19] = p),
          (q[20] = v),
          (q[21] = y))
      } else
        ((n = q[13]),
          (r = q[14]),
          (d = q[15]),
          (u = q[16]),
          (g = q[17]),
          (m = q[18]),
          (p = q[19]),
          (v = q[20]),
          (y = q[21]))
      return (
        q[55] !== d || q[56] !== u || q[57] !== g || q[58] !== m
          ? ((b = (0, a.jsx)("div", { className: d, "aria-live": u, "aria-atomic": g, children: m })),
            (q[55] = d),
            (q[56] = u),
            (q[57] = g),
            (q[58] = m),
            (q[59] = b))
          : (b = q[59]),
        q[60] !== U ? ((x = U.formatMessage(_.apply)), (q[60] = U), (q[61] = x)) : (x = q[61]),
        q[62] !== k || q[63] !== x
          ? ((j = (0, a.jsx)(c.$, {
              color: "secondary",
              variant: "outline",
              size: "md",
              pill: !0,
              disabled: !0,
              "aria-describedby": k,
              children: x,
            })),
            (q[62] = k),
            (q[63] = x),
            (q[64] = j))
          : (j = q[64]),
        q[65] !== U ? ((M = U.formatMessage(_.skip)), (q[65] = U), (q[66] = M)) : (M = q[66]),
        q[67] !== k || q[68] !== M
          ? ((C = (0, a.jsx)(c.$, {
              color: "secondary",
              variant: "ghost",
              size: "md",
              pill: !0,
              disabled: !0,
              "aria-describedby": k,
              children: M,
            })),
            (q[67] = k),
            (q[68] = M),
            (q[69] = C))
          : (C = q[69]),
        q[70] !== j || q[71] !== C
          ? ((A = (0, a.jsxs)("div", { className: "mt-auto flex items-center gap-2", children: [j, C] })),
            (q[70] = j),
            (q[71] = C),
            (q[72] = A))
          : (A = q[72]),
        q[73] !== U ? ((w = U.formatMessage(_.actionsUnavailable)), (q[73] = U), (q[74] = w)) : (w = q[74]),
        q[75] !== k || q[76] !== w
          ? ((S = (0, a.jsx)("p", { id: k, className: "text-secondary text-xs", children: w })),
            (q[75] = k),
            (q[76] = w),
            (q[77] = S))
          : (S = q[77]),
        q[78] !== n ||
        q[79] !== r ||
        q[80] !== b ||
        q[81] !== A ||
        q[82] !== S ||
        q[83] !== p ||
        q[84] !== v ||
        q[85] !== y
          ? ((N = (0, a.jsxs)("section", {
              className: p,
              "aria-labelledby": v,
              "aria-busy": y,
              children: [n, r, b, A, S],
            })),
            (q[78] = n),
            (q[79] = r),
            (q[80] = b),
            (q[81] = A),
            (q[82] = S),
            (q[83] = p),
            (q[84] = v),
            (q[85] = y),
            (q[86] = N))
          : (N = q[86]),
        N
      )
    }
    var S = s("tnGT")
    function N(e) {
      return e.isFetching || e.isPending
        ? { status: "loading" }
        : e.error instanceof r.zx
          ? { status: "unavailable", reason: e.error.reason }
          : e.isError
            ? {
                status: "error",
                onRetry: () => {
                  e.refetch()
                },
              }
            : e.data
              ? { status: "ready", data: e.data }
              : { status: "unavailable" }
    }
    function q(e) {
      let t,
        s,
        n,
        r,
        o,
        g,
        m,
        p,
        h,
        f = (0, i.c)(27),
        { status: v, onRetry: y, onOpenAgentBuilder: b } = e,
        x = (0, l.A)()
      ;(f[0] !== x ? ((t = x.formatMessage(S.D.title)), (f[0] = x), (f[1] = t)) : (t = f[1]),
        f[2] !== x ? ((s = x.formatMessage(S.D.title)), (f[2] = x), (f[3] = s)) : (s = f[3]),
        f[4] !== s
          ? ((n = (0, a.jsx)("h2", { className: "text-primary mb-4 text-base font-semibold", children: s })),
            (f[4] = s),
            (f[5] = n))
          : (n = f[5]))
      let _ = "error" === v || "access-changed" === v ? "alert" : "status"
      return (
        f[6] !== v ? ((r = "loading" === v && (0, a.jsx)(u.I, {})), (f[6] = v), (f[7] = r)) : (r = f[7]),
        f[8] !== v
          ? ((o = (0, a.jsx)("p", {
              children:
                "loading" === v
                  ? (0, a.jsx)(d.A, { ...S.D.loading })
                  : "error" === v
                    ? (0, a.jsx)(d.A, { ...S.D.insightsLoadError })
                    : "access-changed" === v
                      ? (0, a.jsx)(d.A, { ...S.D.insightsAccessChanged })
                      : "missing-agent" === v
                        ? (0, a.jsx)(d.A, { ...S.D.agentMissing })
                        : (0, a.jsx)(d.A, { ...S.D.insightsUnavailable }),
            })),
            (f[8] = v),
            (f[9] = o))
          : (o = f[9]),
        f[10] !== b || f[11] !== v
          ? ((g =
              "missing-agent" === v &&
              b &&
              (0, a.jsx)(c.$, {
                type: "button",
                color: "primary",
                variant: "solid",
                size: "md",
                onClick: b,
                children: (0, a.jsx)(d.A, { ...S.D.openAgentBuilder }),
              })),
            (f[10] = b),
            (f[11] = v),
            (f[12] = g))
          : (g = f[12]),
        f[13] !== x || f[14] !== y || f[15] !== v
          ? ((m =
              y &&
              "loading" !== v &&
              (0, a.jsx)(c.$, {
                color: "secondary",
                variant: "outline",
                size: "md",
                onClick: y,
                children: x.formatMessage(S.D.retry),
              })),
            (f[13] = x),
            (f[14] = y),
            (f[15] = v),
            (f[16] = m))
          : (m = f[16]),
        f[17] !== _ || f[18] !== r || f[19] !== o || f[20] !== g || f[21] !== m
          ? ((p = (0, a.jsxs)("div", {
              role: _,
              className: "text-secondary flex flex-wrap items-center gap-3",
              children: [r, o, g, m],
            })),
            (f[17] = _),
            (f[18] = r),
            (f[19] = o),
            (f[20] = g),
            (f[21] = m),
            (f[22] = p))
          : (p = f[22]),
        f[23] !== t || f[24] !== n || f[25] !== p
          ? ((h = (0, a.jsxs)("section", {
              "aria-label": t,
              className: "border-default mb-8 rounded-3xl border p-6",
              children: [n, p],
            })),
            (f[23] = t),
            (f[24] = n),
            (f[25] = p),
            (f[26] = h))
          : (h = f[26]),
        h
      )
    }
    function D(e) {
      let t,
        s,
        n,
        r,
        d,
        u,
        p,
        h,
        f,
        v,
        y,
        b = (0, i.c)(34),
        { performance: x, quality: _, report: M, range: A, windowDays: w, onWindowChange: N } = e,
        q = (0, l.A)(),
        D = [
          { key: "observed_conversations", label: S.D.agent_conversations },
          { key: "multi_turn_conversations", label: S.D.multi_turn_conversations },
          { key: "product_clicks", label: S.D.productClicks },
        ],
        [k, I] = (0, o.useState)("observed_conversations"),
        L = "ready" === x.status ? x.data : void 0,
        P = L?.points
      b[0] !== P ? ((t = new Map(P?.map(T))), (b[0] = P), (b[1] = t)) : (t = b[1])
      let R = t
      if (b[2] !== R || b[3] !== L || b[4] !== P || b[5] !== A || b[6] !== k) {
        if (((s = []), L && P))
          for (let e = Date.parse(A.start_date); e <= Date.parse(A.end_date); e += 864e5) {
            let t = new Date(e).toISOString().slice(0, 10),
              a = e < Date.parse(L.facts_through) && e + 864e5 > Date.parse(L.retained_from)
            s.push({ date: t, value: R.get(t)?.[k] ?? (a ? 0 : null) })
          }
        ;((b[2] = R), (b[3] = L), (b[4] = P), (b[5] = A), (b[6] = k), (b[7] = s))
      } else s = b[7]
      ;(b[8] !== q ? ((n = q.formatMessage(S.D.performance)), (b[8] = q), (b[9] = n)) : (n = b[9]),
        b[10] !== q || b[11] !== x.status
          ? ((r =
              "unavailable" === x.status &&
              (0, a.jsx)("p", { role: "status", children: q.formatMessage(S.D.activityUnavailable) })),
            (b[10] = q),
            (b[11] = x.status),
            (b[12] = r))
          : (r = b[12]))
      let E = (0, a.jsxs)("section", {
        className: "border-default bg-surface rounded-3xl border p-6",
        children: [
          (0, a.jsx)("select", {
            className: "text-primary text-xl font-semibold",
            "aria-label": n,
            value: k,
            onChange: (e) => {
              let t = D.find((t) => t.key === e.target.value)
              t && I(t.key)
            },
            children: D.map((e) => (0, a.jsx)("option", { value: e.key, children: q.formatMessage(e.label) }, e.key)),
          }),
          r,
          P &&
            (0, a.jsx)("div", {
              className: "h-64 w-full",
              children: (0, a.jsx)(m.v, {
                points: s,
                values: s.map(U),
                dataKey: "value",
                label: q.formatMessage(D.find((e) => e.key === k).label),
                tooltip: (0, a.jsx)(g.m, { isAnimationActive: !1 }),
              }),
            }),
        ],
      })
      ;(b[13] !== q ? ((d = q.formatMessage(S.D.title)), (b[13] = q), (b[14] = d)) : (d = b[14]),
        b[15] !== q ? ((u = q.formatMessage(S.D.performance)), (b[15] = q), (b[16] = u)) : (u = b[16]))
      let z = "loading" === x.status,
        F = D.map((e) =>
          (0, a.jsxs)(
            "button",
            {
              type: "button",
              "aria-label": q.formatMessage(e.label),
              "aria-pressed": k === e.key,
              onClick: () => I(e.key),
              className: "p-5 text-start",
              children: [
                (0, a.jsx)("span", { children: q.formatMessage(e.label) }),
                (0, a.jsx)("strong", { className: "block text-2xl", children: L ? q.formatNumber(L[e.key]) : "—" }),
              ],
            },
            e.key,
          ),
        )
      return (
        b[17] !== u || b[18] !== z || b[19] !== F
          ? ((p = (0, a.jsx)("section", {
              "aria-label": u,
              "aria-busy": z,
              className: "border-default grid grid-cols-3 divide-x rounded-3xl border",
              children: F,
            })),
            (b[17] = u),
            (b[18] = z),
            (b[19] = F),
            (b[20] = p))
          : (p = b[20]),
        b[21] !== L || b[22] !== q || b[23] !== D
          ? ((h =
              L &&
              D.every((e) => 0 === L[e.key]) &&
              (0, a.jsx)("p", { role: "status", children: q.formatMessage(S.D.activityEmpty) })),
            (b[21] = L),
            (b[22] = q),
            (b[23] = D),
            (b[24] = h))
          : (h = b[24]),
        b[25] !== q || b[26] !== x.onRetry || b[27] !== x.status
          ? ((f =
              "error" === x.status &&
              (0, a.jsxs)("div", {
                role: "alert",
                children: [
                  q.formatMessage(S.D.error),
                  " ",
                  (0, a.jsx)(c.$, { color: "secondary", onClick: x.onRetry, children: q.formatMessage(S.D.retry) }),
                ],
              })),
            (b[25] = q),
            (b[26] = x.onRetry),
            (b[27] = x.status),
            (b[28] = f))
          : (f = b[28]),
        b[29] === Symbol.for("react.memo_cache_sentinel") ? ((v = [7, 30]), (b[29] = v)) : (v = b[29]),
        b[30] !== N || b[31] !== M || b[32] !== w
          ? ((y = (0, a.jsx)(j, { state: M, windows: v, windowDays: w, onWindowChange: N })),
            (b[30] = N),
            (b[31] = M),
            (b[32] = w),
            (b[33] = y))
          : (y = b[33]),
        (0, a.jsxs)("section", {
          "aria-label": d,
          className: "space-y-6",
          children: [p, h, f, (0, a.jsx)(C, { quality: _, activityChart: E, topics: y })],
        })
      )
    }
    function U(e) {
      return e.value
    }
    function T(e) {
      return [e.date, e]
    }
    var k = s("bDwj"),
      I = s("TjQQ"),
      L = s("T0Rc"),
      P = s("zTeN"),
      R = s("HZfM"),
      E = s("EOo5"),
      z = s("OMIV"),
      F = s("iC84"),
      Z = s("C1dV"),
      B = s("W7Gu"),
      J = s("Gnfq"),
      Q = s("Ghh3"),
      G = s("YNKM")
    function $(e) {
      let t,
        s,
        o,
        l,
        d,
        c,
        u,
        g,
        m,
        p,
        h = (0, i.c)(50),
        { period: f, businessProfileId: v, adminView: y } = e,
        b = (0, P._U)(z.JW, F.iL),
        x = (0, I.n)(v),
        { accountId: _, userId: j } = (0, E.As)(),
        M = (0, R.Zp)()
      if (null != y) {
        let e, t, s, i, r, o, l, d, c
        if (h[0] !== y || h[1] !== v) {
          let t
          ;((t = {
            additionalHeaders: { "ChatGPT-Account-ID": y.accountId },
            expectedIdentity: y,
            expectedErrorStatuses: [400, 401, 403, 404, 409, 422, 429, 503],
            retry: "never",
          }),
            (e = {
              loadTarget: async (e) => {
                let s = await Q.Request.safeGet(
                  "/shopping/business-profiles/{business_profile_id}/agent-builder/insights/target",
                  {
                    ...t,
                    signal: e,
                    parameters: { path: { business_profile_id: encodeURIComponent(v) }, query: (0, Z.C0)(y) },
                  },
                )
                return null == s.business_agent_id ? null : { businessAgentId: s.business_agent_id, adAccountId: null }
              },
              insights: (0, G.i)(v, t, void 0, y),
            }),
            (h[0] = y),
            (h[1] = v),
            (h[2] = e))
        } else e = h[2]
        let u = e
        return (
          h[3] !== y || h[4] !== v || h[5] !== f
            ? ((i = [...(0, Z.L)(y, v), "agent-insights"]),
              (s = n.C),
              (l = "min-w-0"),
              (t = V),
              (r = f),
              (o = JSON.stringify(i)),
              (h[3] = y),
              (h[4] = v),
              (h[5] = f),
              (h[6] = t),
              (h[7] = s),
              (h[8] = i),
              (h[9] = r),
              (h[10] = o),
              (h[11] = l))
            : ((t = h[6]), (s = h[7]), (i = h[8]), (r = h[9]), (o = h[10]), (l = h[11])),
          h[12] !== t || h[13] !== u.insights || h[14] !== u.loadTarget || h[15] !== i || h[16] !== r || h[17] !== o
            ? ((d = (0, a.jsx)(t, { period: r, loadTarget: u.loadTarget, insights: u.insights, scopeKey: i }, o)),
              (h[12] = t),
              (h[13] = u.insights),
              (h[14] = u.loadTarget),
              (h[15] = i),
              (h[16] = r),
              (h[17] = o),
              (h[18] = d))
            : (d = h[18]),
          h[19] !== s || h[20] !== l || h[21] !== d
            ? ((c = (0, a.jsx)(s, { className: l, children: d })), (h[19] = s), (h[20] = l), (h[21] = d), (h[22] = c))
            : (c = h[22]),
          c
        )
      }
      return b && x?.insights && null != _ && null != j
        ? (h[23] !== _ || h[24] !== v || h[25] !== f || h[26] !== j
            ? ((o = ["business-profiles", _, j, v, "agent-insights"]),
              (s = n.C),
              (c = "min-w-0"),
              (t = V),
              (l = f),
              (d = JSON.stringify(o)),
              (h[23] = _),
              (h[24] = v),
              (h[25] = f),
              (h[26] = j),
              (h[27] = t),
              (h[28] = s),
              (h[29] = o),
              (h[30] = l),
              (h[31] = d),
              (h[32] = c))
            : ((t = h[27]), (s = h[28]), (o = h[29]), (l = h[30]), (d = h[31]), (c = h[32])),
          h[33] !== x ? ((u = async (e) => (0, r.sI)(await x.load(e))), (h[33] = x), (h[34] = u)) : (u = h[34]),
          h[35] !== v || h[36] !== M
            ? ((g = () => {
                M((0, J.Ds)(v, "agent"))
              }),
              (h[35] = v),
              (h[36] = M),
              (h[37] = g))
            : (g = h[37]),
          h[38] !== t || h[39] !== x.insights || h[40] !== o || h[41] !== l || h[42] !== d || h[43] !== u || h[44] !== g
            ? ((m = (0, a.jsx)(
                t,
                { period: l, loadTarget: u, insights: x.insights, scopeKey: o, onOpenAgentBuilder: g },
                d,
              )),
              (h[38] = t),
              (h[39] = x.insights),
              (h[40] = o),
              (h[41] = l),
              (h[42] = d),
              (h[43] = u),
              (h[44] = g),
              (h[45] = m))
            : (m = h[45]),
          h[46] !== s || h[47] !== c || h[48] !== m
            ? ((p = (0, a.jsx)(s, { className: c, children: m })), (h[46] = s), (h[47] = c), (h[48] = m), (h[49] = p))
            : (p = h[49]),
          p)
        : null
    }
    let O = { ...B.I, retry: !1, gcTime: 9e5 }
    function V(e) {
      let t,
        s,
        n,
        l,
        d,
        c,
        u,
        g = (0, i.c)(28),
        { period: m, loadTarget: p, insights: h, scopeKey: f, onOpenAgentBuilder: v } = e,
        [y, b] = (0, o.useState)(0)
      ;(g[0] !== f ? ((t = [...f, "snapshot"]), (g[0] = f), (g[1] = t)) : (t = g[1]),
        g[2] !== p
          ? ((s = (e) => {
              let { signal: t } = e
              return p(t)
            }),
            (g[2] = p),
            (g[3] = s))
          : (s = g[3]),
        g[4] !== t || g[5] !== s
          ? ((n = { ...O, staleTime: 3e5, queryKey: t, queryFn: s }), (g[4] = t), (g[5] = s), (g[6] = n))
          : (n = g[6]))
      let { data: x, isPending: _, isError: j, error: M, refetch: C } = (0, L.I)(n)
      if (_) {
        let e
        return (
          g[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(q, { status: "loading" })), (g[7] = e))
            : (e = g[7]),
          e
        )
      }
      if (j) {
        let e
        if (M instanceof k.Qj && "missing-agent" === M.reason) {
          let e
          return (
            g[8] !== v
              ? ((e = (0, a.jsx)(q, { status: "missing-agent", onOpenAgentBuilder: v })), (g[8] = v), (g[9] = e))
              : (e = g[9]),
            e
          )
        }
        return (
          g[10] !== C
            ? ((e = (0, a.jsx)(q, {
                status: "error",
                onRetry: () => {
                  C()
                },
              })),
              (g[10] = C),
              (g[11] = e))
            : (e = g[11]),
          e
        )
      }
      if (!x) {
        let e
        return (
          g[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(q, { status: "unavailable" })), (g[12] = e))
            : (e = g[12]),
          e
        )
      }
      g[13] !== C
        ? ((l = async () => {
            ;(await C()).isError || b(W)
          }),
          (g[13] = C),
          (g[14] = l))
        : (l = g[14])
      let A = l
      g[15] !== y || g[16] !== x
        ? ((d = JSON.stringify([...(0, r.LK)(x), y])), (g[15] = y), (g[16] = x), (g[17] = d))
        : (d = g[17])
      let w = String(y)
      return (
        g[18] !== f || g[19] !== w ? ((c = [...f, w]), (g[18] = f), (g[19] = w), (g[20] = c)) : (c = g[20]),
        g[21] !== h || g[22] !== m || g[23] !== A || g[24] !== d || g[25] !== c || g[26] !== x
          ? ((u = (0, a.jsx)(Y, { period: m, insights: h, scopeKey: c, target: x, onRetry: A }, d)),
            (g[21] = h),
            (g[22] = m),
            (g[23] = A),
            (g[24] = d),
            (g[25] = c),
            (g[26] = x),
            (g[27] = u))
          : (u = g[27]),
        u
      )
    }
    function W(e) {
      return e + 1
    }
    function Y(e) {
      let t,
        s,
        n,
        l,
        d,
        c,
        u,
        g,
        m,
        p,
        h,
        f,
        v,
        y,
        b,
        x = (0, i.c)(51),
        { period: _, insights: j, scopeKey: M, target: C, onRetry: A } = e,
        [w, S] = (0, o.useState)(7),
        [U] = (0, o.useState)(X)
      x[0] !== M || x[1] !== C ? ((t = [...M, ...(0, r.LK)(C)]), (x[0] = M), (x[1] = C), (x[2] = t)) : (t = x[2])
      let T = t
      x[3] !== _ || x[4] !== U
        ? ((s = (0, r.HP)(_, { available_end_date: U })), (x[3] = _), (x[4] = U), (x[5] = s))
        : (s = x[5])
      let k = s
      ;(x[6] !== T || x[7] !== k ? ((n = [...T, "overview", k]), (x[6] = T), (x[7] = k), (x[8] = n)) : (n = x[8]),
        x[9] !== j || x[10] !== k || x[11] !== C
          ? ((l = (e) => {
              let { signal: t } = e
              return j.overview(C, k, t)
            }),
            (x[9] = j),
            (x[10] = k),
            (x[11] = C),
            (x[12] = l))
          : (l = x[12]),
        x[13] !== n || x[14] !== l
          ? ((d = { ...O, staleTime: 3e5, queryKey: n, queryFn: l }), (x[13] = n), (x[14] = l), (x[15] = d))
          : (d = x[15]))
      let I = (0, L.I)(d)
      x[16] !== T || x[17] !== k ? ((c = [...T, "quality", k]), (x[16] = T), (x[17] = k), (x[18] = c)) : (c = x[18])
      let P = !I.isPending
      ;(x[19] !== j || x[20] !== k || x[21] !== C
        ? ((u = (e) => {
            let { signal: t } = e
            return j.quality(C, k, t)
          }),
          (x[19] = j),
          (x[20] = k),
          (x[21] = C),
          (x[22] = u))
        : (u = x[22]),
        x[23] !== c || x[24] !== P || x[25] !== u
          ? ((g = { ...O, staleTime: 3e5, queryKey: c, enabled: P, queryFn: u }),
            (x[23] = c),
            (x[24] = P),
            (x[25] = u),
            (x[26] = g))
          : (g = x[26]))
      let R = (0, L.I)(g)
      ;(x[27] !== T || x[28] !== w ? ((m = [...T, "intents", w]), (x[27] = T), (x[28] = w), (x[29] = m)) : (m = x[29]),
        x[30] !== j || x[31] !== C || x[32] !== w
          ? ((p = (e) => {
              let { signal: t } = e
              return j.intents(C, { window_days: w }, t)
            }),
            (x[30] = j),
            (x[31] = C),
            (x[32] = w),
            (x[33] = p))
          : (p = x[33]),
        x[34] !== m || x[35] !== p
          ? ((h = { ...O, staleTime: 3e5, queryKey: m, queryFn: p }), (x[34] = m), (x[35] = p), (x[36] = h))
          : (h = x[36]))
      let E = (0, L.I)(h)
      if ([I, R, E].some(K)) {
        let e
        return (
          x[37] !== A
            ? ((e = (0, a.jsx)(q, {
                status: "access-changed",
                onRetry: () => {
                  A()
                },
              })),
              (x[37] = A),
              (x[38] = e))
            : (e = x[38]),
          e
        )
      }
      return (
        x[39] !== I ? ((f = N(I)), (x[39] = I), (x[40] = f)) : (f = x[40]),
        x[41] !== R ? ((v = N(R)), (x[41] = R), (x[42] = v)) : (v = x[42]),
        x[43] !== E ? ((y = N(E)), (x[43] = E), (x[44] = y)) : (y = x[44]),
        x[45] !== k || x[46] !== f || x[47] !== v || x[48] !== y || x[49] !== w
          ? ((b = (0, a.jsx)(D, { performance: f, quality: v, report: y, range: k, windowDays: w, onWindowChange: S })),
            (x[45] = k),
            (x[46] = f),
            (x[47] = v),
            (x[48] = y),
            (x[49] = w),
            (x[50] = b))
          : (b = x[50]),
        b
      )
    }
    function K(e) {
      return e.error instanceof r.Bz
    }
    function X() {
      return new Date().toISOString().slice(0, 10)
    }
  },
  MnTr(e, t, s) {
    s.d(t, { C: () => u, s: () => g })
    var a = s("ABep"),
      i = s("QosV"),
      n = s("ULZ9"),
      r = s("on57"),
      o = s("zd8w"),
      l = s("v7qY"),
      d = "PortalBoundary-TFj9W2"
    let c = (0, o.createContext)({ container: null })
    function u(e) {
      let t,
        s,
        l,
        u,
        g,
        m,
        p,
        h,
        f = (0, i.c)(20),
        { children: v, className: y, theme: b, themeClassName: x } = e,
        [_, j] = (0, o.useState)(null)
      ;(f[0] !== _
        ? ((t = () => {
            if (null == _) return
            let e = () => {
              let e = String(_.currentCSSZoom ?? 1)
              _.style.getPropertyValue("--puik-portal-zoom") !== e && _.style.setProperty("--puik-portal-zoom", e)
            }
            e()
            let t = new MutationObserver(e)
            for (let e = _; null != e; e = e.parentElement)
              t.observe(e, { attributes: !0, attributeFilter: ["class", "style"] })
            return () => t.disconnect()
          }),
          (s = [_]),
          (f[0] = _),
          (f[1] = t),
          (f[2] = s))
        : ((t = f[1]), (s = f[2])),
        (0, o.useLayoutEffect)(t, s),
        f[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (e) => {
              null != e && j(e)
            }),
            (f[3] = l))
          : (l = f[3]),
        f[4] !== y || f[5] !== x
          ? ((u = (0, r.A)("relative", d, x, y)), (f[4] = y), (f[5] = x), (f[6] = u))
          : (u = f[6]))
      let M = _ ?? void 0
      return (
        f[7] !== _ || f[8] !== x
          ? ((g = { container: _, themeClassName: x }), (f[7] = _), (f[8] = x), (f[9] = g))
          : (g = f[9]),
        f[10] !== v || f[11] !== g
          ? ((m = (0, a.jsx)(c.Provider, { value: g, children: v })), (f[10] = v), (f[11] = g), (f[12] = m))
          : (m = f[12]),
        f[13] !== M || f[14] !== m
          ? ((p = (0, a.jsx)(n.z, { radixPortalContainer: M, children: m })), (f[13] = M), (f[14] = m), (f[15] = p))
          : (p = f[15]),
        f[16] !== u || f[17] !== p || f[18] !== b
          ? ((h = (0, a.jsx)("div", { ref: l, className: u, "data-theme": b, children: p })),
            (f[16] = u),
            (f[17] = p),
            (f[18] = b),
            (f[19] = h))
          : (h = f[19]),
        h
      )
    }
    function g(e) {
      let t,
        s,
        u,
        g,
        m,
        p,
        h,
        f = (0, i.c)(24),
        { children: v, theme: y } = e,
        { container: b, themeClassName: x } = (0, o.useContext)(c)
      f[0] !== b ? ((t = b?.closest("dialog:modal")), (f[0] = b), (f[1] = t)) : (t = f[1])
      let _ = t,
        [j, M] = (0, o.useState)(null)
      ;(f[2] !== b || f[3] !== _?.currentCSSZoom || f[4] !== j
        ? ((s = () => {
            if (null == b || null == j) return
            let e = b.ownerDocument.defaultView
            if (null == e) return
            let t = []
            for (let e = b; null != e; e = e.parentElement) t.push(e)
            let s = () => {
                let s = b.currentCSSZoom ?? 1,
                  a = _?.currentCSSZoom ?? 1,
                  i = t.map((t) => e.getComputedStyle(t)),
                  n = t.some((e, t) => {
                    let s = i[t]
                    return (
                      e.hasAttribute("inert") ||
                      e.hidden ||
                      "true" === e.getAttribute("aria-hidden") ||
                      "none" === s.display ||
                      "hidden" === s.visibility ||
                      "collapse" === s.visibility ||
                      "hidden" === s.contentVisibility
                    )
                  })
                ;(j.style.setProperty("zoom", String(s / a)),
                  j.style.setProperty("--puik-portal-zoom", String(s)),
                  j.toggleAttribute("inert", n),
                  j.toggleAttribute("hidden", n))
              },
              a = new MutationObserver(s),
              i = !1,
              n = () => {
                let n = null != j.querySelector('[data-radix-popper-content-wrapper], [role="tooltip"]')
                if (n !== i)
                  if (((i = n), n)) {
                    for (let e of (s(), t))
                      a.observe(e, {
                        attributes: !0,
                        attributeFilter: ["class", "style", "hidden", "inert", "aria-hidden", "data-theme"],
                      })
                    e.addEventListener("resize", s)
                  } else (a.disconnect(), e.removeEventListener("resize", s))
              },
              r = new MutationObserver(n)
            return (
              r.observe(j, { childList: !0, subtree: !0 }),
              n(),
              () => {
                ;(r.disconnect(),
                  a.disconnect(),
                  e.removeEventListener("resize", s),
                  j.setAttribute("hidden", ""),
                  j.setAttribute("inert", ""))
              }
            )
          }),
          (f[2] = b),
          (f[3] = _?.currentCSSZoom),
          (f[4] = j),
          (f[5] = s))
        : (s = f[5]),
        f[6] !== b || f[7] !== _ || f[8] !== j
          ? ((u = [b, _, j]), (f[6] = b), (f[7] = _), (f[8] = j), (f[9] = u))
          : (u = f[9]),
        (0, o.useLayoutEffect)(s, u))
      let C = j ?? void 0
      return (
        f[10] !== v || f[11] !== j
          ? ((g = "function" == typeof v ? v(j) : v), (f[10] = v), (f[11] = j), (f[12] = g))
          : (g = f[12]),
        f[13] !== C || f[14] !== g
          ? ((m = (0, a.jsx)(n.z, { radixPortalContainer: C, children: g })), (f[13] = C), (f[14] = g), (f[15] = m))
          : (m = f[15]),
        f[16] !== b || f[17] !== _ || f[18] !== y || f[19] !== x
          ? ((p =
              null != b &&
              (0, l.createPortal)(
                (0, a.jsx)("div", {
                  ref: (e) => {
                    null != e && M(e)
                  },
                  className: (0, r.A)("relative", d, "PortalSurface-LW3Uz2", x),
                  "data-theme": y,
                }),
                _ ?? b.ownerDocument.body,
              )),
            (f[16] = b),
            (f[17] = _),
            (f[18] = y),
            (f[19] = x),
            (f[20] = p))
          : (p = f[20]),
        f[21] !== m || f[22] !== p
          ? ((h = (0, a.jsxs)(a.Fragment, { children: [m, p] })), (f[21] = m), (f[22] = p), (f[23] = h))
          : (h = f[23]),
        h
      )
    }
  },
  iYCA(e, t, s) {
    ;(s("QLGt"), (e.exports = s("TQhG")))
  },
  yCBR(e, t, s) {
    var a = s("W0XS")
    ;(s("xZl2"), (e.exports = a))
  },
  UlFl(e, t, s) {
    ;(s("o1bS"), (e.exports = s("ogbS")("Array", "findLast")))
  },
  gXPe(e, t, s) {
    ;(s("Y4C5"), s("Fuyw"), (e.exports = s("ogbS")("Array", "toSorted")))
  },
  XnQF(e, t, s) {
    var a = s("eUVA"),
      i = s("beJj"),
      n = s("oP4q").f,
      r = a("unscopables"),
      o = Array.prototype
    ;(void 0 === o[r] && n(o, r, { configurable: !0, value: i(null) }),
      (e.exports = function (e) {
        o[r][e] = !0
      }))
  },
  uHOi(e, t, s) {
    var a = s("f6Go")
    e.exports = function (e, t, s) {
      for (var i = 0, n = arguments.length > 2 ? s : a(t), r = new e(n); n > i;) r[i] = t[i++]
      return r
    }
  },
  wAJj(e, t, s) {
    var a = s("OwA9"),
      i = s("EzAB"),
      n = s("fuV1"),
      r = s("f6Go"),
      o = function (e) {
        var t = 1 === e
        return function (s, o, l) {
          for (var d, c = n(s), u = i(c), g = r(u), m = a(o, l); g-- > 0;)
            if (m((d = u[g]), g, c))
              switch (e) {
                case 0:
                  return d
                case 1:
                  return g
              }
          return t ? -1 : void 0
        }
      }
    e.exports = { findLast: o(0), findLastIndex: o(1) }
  },
  jXET(e, t, s) {
    var a = s("MGoG")
    e.exports = function (e, t) {
      var s = [][e]
      return (
        !!s &&
        a(function () {
          s.call(
            null,
            t ||
              function () {
                return 1
              },
            1,
          )
        })
      )
    }
  },
  U1ht(e, t, s) {
    e.exports = s("lbJk")([].slice)
  },
  FtMJ(e, t, s) {
    var a = s("U1ht"),
      i = Math.floor,
      n = function (e, t) {
        var s = e.length
        if (s < 8)
          for (var r, o, l = 1; l < s;) {
            for (o = l, r = e[l]; o && t(e[o - 1], r) > 0;) e[o] = e[--o]
            o !== l++ && (e[o] = r)
          }
        else
          for (
            var d = i(s / 2), c = n(a(e, 0, d), t), u = n(a(e, d), t), g = c.length, m = u.length, p = 0, h = 0;
            p < g || h < m;
          )
            e[p + h] = p < g && h < m ? (0 >= t(c[p], u[h]) ? c[p++] : u[h++]) : p < g ? c[p++] : u[h++]
        return e
      }
    e.exports = n
  },
  JBAm(e, t, s) {
    var a = s("v5Cs"),
      i = TypeError
    e.exports = function (e, t) {
      if (!delete e[t]) throw new i("Cannot delete property " + a(t) + " of " + a(e))
    }
  },
  ogbS(e, t, s) {
    var a = s("vlAc"),
      i = s("lbJk")
    e.exports = function (e, t) {
      return i(a[e].prototype[t])
    }
  },
  BN3d(e, t, s) {
    var a = s("RpEq").match(/firefox\/(\d+)/i)
    e.exports = !!a && +a[1]
  },
  mFA1(e, t, s) {
    var a = s("RpEq")
    e.exports = /MSIE|Trident/.test(a)
  },
  YX7I(e, t, s) {
    var a = s("RpEq").match(/AppleWebKit\/(\d+)\./)
    e.exports = !!a && +a[1]
  },
  yUY1(e, t, s) {
    var a = s("vlAc")
    e.exports = function (e, t) {
      var s = a[e],
        i = s && s.prototype
      return i && i[t]
    }
  },
  o1bS(e, t, s) {
    var a = s("Ywrr"),
      i = s("wAJj").findLast,
      n = s("XnQF")
    ;(a(
      { target: "Array", proto: !0 },
      {
        findLast: function (e) {
          return i(this, e, arguments.length > 1 ? arguments[1] : void 0)
        },
      },
    ),
      n("findLast"))
  },
  Y4C5(e, t, s) {
    var a = s("Ywrr"),
      i = s("lbJk"),
      n = s("dS6X"),
      r = s("fuV1"),
      o = s("f6Go"),
      l = s("JBAm"),
      d = s("qCMJ"),
      c = s("MGoG"),
      u = s("FtMJ"),
      g = s("jXET"),
      m = s("BN3d"),
      p = s("mFA1"),
      h = s("cOJA"),
      f = s("YX7I"),
      v = [],
      y = i(v.sort),
      b = i(v.push),
      x = c(function () {
        v.sort(void 0)
      }),
      _ = c(function () {
        v.sort(null)
      }),
      j = g("sort"),
      M = !c(function () {
        if (h) return h < 70
        if (!m || !(m > 3)) {
          if (p) return !0
          if (f) return f < 603
          var e,
            t,
            s,
            a,
            i = ""
          for (e = 65; e < 76; e++) {
            switch (((t = String.fromCharCode(e)), e)) {
              case 66:
              case 69:
              case 70:
              case 72:
                s = 3
                break
              case 68:
              case 71:
                s = 4
                break
              default:
                s = 2
            }
            for (a = 0; a < 47; a++) v.push({ k: t + a, v: s })
          }
          for (
            v.sort(function (e, t) {
              return t.v - e.v
            }),
              a = 0;
            a < v.length;
            a++
          )
            ((t = v[a].k.charAt(0)), i.charAt(i.length - 1) !== t && (i += t))
          return "DGBEFHACIJK" !== i
        }
      })
    a(
      { target: "Array", proto: !0, forced: x || !_ || !j || !M },
      {
        sort: function (e) {
          void 0 !== e && n(e)
          var t,
            s,
            a = r(this)
          if (M) return void 0 === e ? y(a) : y(a, e)
          var i = [],
            c = o(a)
          for (s = 0; s < c; s++) s in a && b(i, a[s])
          for (
            u(i, function (t, s) {
              return void 0 === s ? -1 : void 0 === t ? 1 : void 0 !== e ? +e(t, s) || 0 : d(t) > d(s) ? 1 : -1
            }),
              t = o(i),
              s = 0;
            s < t;
          )
            a[s] = i[s++]
          for (; s < c;) l(a, s++)
          return a
        },
      },
    )
  },
  Fuyw(e, t, s) {
    var a = s("Ywrr"),
      i = s("lbJk"),
      n = s("dS6X"),
      r = s("MV5a"),
      o = s("uHOi"),
      l = s("yUY1"),
      d = s("XnQF"),
      c = Array,
      u = i(l("Array", "sort"))
    ;(a(
      { target: "Array", proto: !0 },
      {
        toSorted: function (e) {
          return (void 0 !== e && n(e), u(o(c, r(this)), e))
        },
      },
    ),
      d("toSorted"))
  },
  QLGt(e, t, s) {
    s("o1bS")
  },
  xZl2(e, t, s) {
    s("Fuyw")
  },
  TQhG(e, t, s) {
    e.exports = s("UlFl")
  },
  W0XS(e, t, s) {
    e.exports = s("gXPe")
  },
}
//# sourceMappingURL=640328.ff955764df.js.map
