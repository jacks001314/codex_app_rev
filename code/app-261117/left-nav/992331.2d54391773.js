export const __rspack_esm_ids = [992331]
export const __webpack_modules__ = {
  oUPQ(e, a, t) {
    t.d(a, { z: () => l })
    var i = t("ABep"),
      s = t("on57"),
      r = t("Hg3i"),
      o = t("zd8w")
    let n = (0, o.createContext)(null),
      l = ({
        onChange: e,
        children: a,
        className: t,
        direction: l = "row",
        variant: d = "default",
        disabled: u = !1,
        __isWidget: g,
        ...p
      }) => {
        let c = (0, o.useMemo)(() => ({ disabled: u, direction: l, variant: d }), [u, l, d])
        return (0, i.jsx)(n, {
          value: c,
          children: (0, i.jsx)(r.Root, {
            className: (0, s.A)("RadioGroup-qedmT_", t),
            "data-direction": l,
            "data-variant": d,
            orientation: "list" === d ? "vertical" : void 0,
            "data-w-component": g ? "radio-group" : void 0,
            onValueChange: e,
            disabled: u,
            ...p,
            children: a,
          }),
        })
      }
    l.Item = ({ value: e, disabled: a = !1, id: t, required: l, children: d, className: u, block: g = !1, ...p }) => {
      let { disabled: c, variant: v } = (() => {
          let e = (0, o.use)(n)
          if (!e) throw Error("RadioGroup components must be wrapped in <RadioGroup />")
          return e
        })(),
        y = c || a,
        m = (0, o.useId)(),
        h = t ?? `${e}-${m}`
      return (0, i.jsx)("div", {
        className: "RadioOptionWrapper-lfJup3",
        "data-variant": v,
        ...p,
        children: (0, i.jsxs)("label", {
          htmlFor: h,
          className: (0, s.A)("RadioLabel-I_wija", u),
          "data-disabled": y ? "" : void 0,
          "data-block": g ? "" : void 0,
          "data-variant": v,
          onMouseDown: (e) => {
            !e.defaultPrevented && e.detail > 1 && e.preventDefault()
          },
          children: [
            (0, i.jsx)("div", {
              className: "RadioIndicatorWrapper-SWef98",
              children: (0, i.jsx)(r.Item, {
                id: h,
                value: e,
                disabled: y,
                required: l,
                className: "RadioItem-a9cavK",
                children: (0, i.jsx)(r.Indicator, { className: "RadioIndicator-m2hnXY" }),
              }),
            }),
            d,
          ],
        }),
      })
    }
  },
  zlPn(e, a, t) {
    t.d(a, { EnterpriseSurveyDialog: () => O })
    var i = t("ABep"),
      s = t("QosV"),
      r = t("oUPQ"),
      o = t("slpy"),
      n = t("irkb"),
      l = t("qmMi"),
      d = t("zd8w"),
      u = t("oyxz"),
      g = t("Wf1j"),
      p = t("SPnB"),
      c = t("OAko"),
      v = t("Sm6l"),
      y = t("JNtf"),
      m = t("mUDD"),
      h = t("bVeK"),
      f = t("zLIa"),
      S = t("hZax"),
      b = t("UR81")
    let w = (0, t("Qgfj").YK)({
      questionLabel: { id: "navigation.survey.valueSurvey.questionLabel", defaultMessage: "{index}. {question}" },
      productivityImpactPrompt: {
        id: "navigation.survey.valueSurvey.questions.productivityImpact.prompt",
        defaultMessage: "Which of the following best reflects how ChatGPT has impacted your productivity?",
      },
      productivityImpactOptionDecreased: {
        id: "navigation.survey.valueSurvey.questions.productivityImpact.options.decreased",
        defaultMessage: "Decreased",
      },
      productivityImpactOptionNoImpact: {
        id: "navigation.survey.valueSurvey.questions.productivityImpact.options.noImpact",
        defaultMessage: "No impact",
      },
      productivityImpactOptionSlightIncrease: {
        id: "navigation.survey.valueSurvey.questions.productivityImpact.options.slightIncrease",
        defaultMessage: "Slight increase",
      },
      productivityImpactOptionModeratelyIncreased: {
        id: "navigation.survey.valueSurvey.questions.productivityImpact.options.moderatelyIncreased",
        defaultMessage: "Moderately increased",
      },
      productivityImpactOptionSignificantlyIncreased: {
        id: "navigation.survey.valueSurvey.questions.productivityImpact.options.significantlyIncreased",
        defaultMessage: "Significantly increased",
      },
      hoursSavedPrompt: {
        id: "navigation.survey.valueSurvey.questions.hoursSaved.prompt",
        defaultMessage:
          "On average, how many hours per week do you estimate ChatGPT helps you save on work-related tasks?",
      },
      hoursSavedOption0Hours: {
        id: "navigation.survey.valueSurvey.questions.hoursSaved.options.0Hours",
        defaultMessage: "0 hours (No time saved)",
      },
      hoursSavedOptionUpTo2: {
        id: "navigation.survey.valueSurvey.questions.hoursSaved.options.upTo2",
        defaultMessage: "Up to 2 hours each week",
      },
      hoursSavedOption2To5: {
        id: "navigation.survey.valueSurvey.questions.hoursSaved.options.2To5",
        defaultMessage: "Between 2 and 5 hours each week",
      },
      hoursSavedOption5To10: {
        id: "navigation.survey.valueSurvey.questions.hoursSaved.options.5To10",
        defaultMessage: "Between 5 and 10 hours each week",
      },
      hoursSavedOptionMoreThan10: {
        id: "navigation.survey.valueSurvey.questions.hoursSaved.options.moreThan10",
        defaultMessage: "More than 10 hours each week",
      },
      hoursSavedOptionDecreased: {
        id: "navigation.survey.valueSurvey.questions.hoursSaved.options.decreased",
        defaultMessage: "Decreased",
      },
      workQualityPrompt: {
        id: "navigation.survey.valueSurvey.questions.workQuality.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT has improved the quality of my work"?',
      },
      workQualityOptionStronglyDisagree: {
        id: "navigation.survey.valueSurvey.questions.workQuality.options.stronglyDisagree",
        defaultMessage: "Strongly disagree",
      },
      workQualityOptionDisagree: {
        id: "navigation.survey.valueSurvey.questions.workQuality.options.disagree",
        defaultMessage: "Disagree",
      },
      workQualityOptionNeitherAgreeNorDisagree: {
        id: "navigation.survey.valueSurvey.questions.workQuality.options.neitherAgreeNorDisagree",
        defaultMessage: "Neither agree nor disagree",
      },
      workQualityOptionAgree: {
        id: "navigation.survey.valueSurvey.questions.workQuality.options.agree",
        defaultMessage: "Agree",
      },
      workQualityOptionStronglyAgree: {
        id: "navigation.survey.valueSurvey.questions.workQuality.options.stronglyAgree",
        defaultMessage: "Strongly agree",
      },
      workSatisfactionImpactPrompt: {
        id: "navigation.survey.valueSurvey.questions.workSatisfactionImpact.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT has increased my satisfaction at work"?',
      },
      workSatisfactionImpactOptionStronglyDisagree: {
        id: "navigation.survey.valueSurvey.questions.workSatisfactionImpact.options.stronglyDisagree",
        defaultMessage: "Strongly disagree",
      },
      workSatisfactionImpactOptionDisagree: {
        id: "navigation.survey.valueSurvey.questions.workSatisfactionImpact.options.disagree",
        defaultMessage: "Disagree",
      },
      workSatisfactionImpactOptionNeitherAgreeNorDisagree: {
        id: "navigation.survey.valueSurvey.questions.workSatisfactionImpact.options.neitherAgreeNorDisagree",
        defaultMessage: "Neither agree nor disagree",
      },
      workSatisfactionImpactOptionAgree: {
        id: "navigation.survey.valueSurvey.questions.workSatisfactionImpact.options.agree",
        defaultMessage: "Agree",
      },
      workSatisfactionImpactOptionStronglyAgree: {
        id: "navigation.survey.valueSurvey.questions.workSatisfactionImpact.options.stronglyAgree",
        defaultMessage: "Strongly agree",
      },
      stakeholderServicePrompt: {
        id: "navigation.survey.valueSurvey.questions.stakeholderService.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT has improved my ability to serve customers, partners, or stakeholders"?',
      },
      stakeholderServiceOptionStronglyDisagree: {
        id: "navigation.survey.valueSurvey.questions.stakeholderService.options.stronglyDisagree",
        defaultMessage: "Strongly disagree",
      },
      stakeholderServiceOptionDisagree: {
        id: "navigation.survey.valueSurvey.questions.stakeholderService.options.disagree",
        defaultMessage: "Disagree",
      },
      stakeholderServiceOptionNeitherAgreeNorDisagree: {
        id: "navigation.survey.valueSurvey.questions.stakeholderService.options.neitherAgreeNorDisagree",
        defaultMessage: "Neither agree nor disagree",
      },
      stakeholderServiceOptionAgree: {
        id: "navigation.survey.valueSurvey.questions.stakeholderService.options.agree",
        defaultMessage: "Agree",
      },
      stakeholderServiceOptionStronglyAgree: {
        id: "navigation.survey.valueSurvey.questions.stakeholderService.options.stronglyAgree",
        defaultMessage: "Strongly agree",
      },
      newTasksAbilityPrompt: {
        id: "navigation.survey.valueSurvey.questions.newTasksAbility.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT has increased my ability to complete new tasks or activities"?',
      },
      eduProductivityImpactPrompt: {
        id: "navigation.survey.valueSurvey.questions.eduProductivityImpact.prompt",
        defaultMessage:
          "Which of the following best reflects how ChatGPT Edu has impacted your productivity in your work or studies?",
      },
      eduHoursSavedPrompt: {
        id: "navigation.survey.valueSurvey.questions.eduHoursSaved.prompt",
        defaultMessage:
          "On average, how many hours per week do you estimate ChatGPT Edu helps you save on your work or studies?",
      },
      eduWorkQualityPrompt: {
        id: "navigation.survey.valueSurvey.questions.eduWorkQuality.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT Edu improves the quality of what I produce (for example: writing, analysis, studying, lesson materials, or administrative work)"?',
      },
      eduWorkSatisfactionImpactPrompt: {
        id: "navigation.survey.valueSurvey.questions.eduWorkSatisfactionImpact.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT Edu has increased my satisfaction with my work or learning"?',
      },
      eduLearningConceptsImpactPrompt: {
        id: "navigation.survey.valueSurvey.questions.eduLearningConceptsImpact.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT Edu helps me learn, teach, or apply new concepts and approaches that would otherwise be difficult for me"?',
      },
      eduCreativeThinkingImpactPrompt: {
        id: "navigation.survey.valueSurvey.questions.eduCreativeThinkingImpact.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT Edu helps me generate new ideas and approaches, and solve problems in more creative ways"?',
      },
      newTasksAbilityOptionStronglyDisagree: {
        id: "navigation.survey.valueSurvey.questions.newTasksAbility.options.stronglyDisagree",
        defaultMessage: "Strongly disagree",
      },
      newTasksAbilityOptionDisagree: {
        id: "navigation.survey.valueSurvey.questions.newTasksAbility.options.disagree",
        defaultMessage: "Disagree",
      },
      newTasksAbilityOptionNeitherAgreeNorDisagree: {
        id: "navigation.survey.valueSurvey.questions.newTasksAbility.options.neitherAgreeNorDisagree",
        defaultMessage: "Neither agree nor disagree",
      },
      newTasksAbilityOptionAgree: {
        id: "navigation.survey.valueSurvey.questions.newTasksAbility.options.agree",
        defaultMessage: "Agree",
      },
      newTasksAbilityOptionStronglyAgree: {
        id: "navigation.survey.valueSurvey.questions.newTasksAbility.options.stronglyAgree",
        defaultMessage: "Strongly agree",
      },
      openEndedFeedbackPrompt: {
        id: "navigation.survey.valueSurvey.questions.openEndedFeedback.prompt",
        defaultMessage: "What do you wish ChatGPT could do or could do better?",
      },
      modalLabel: { id: "navigation.survey.valueSurvey.modalLabel", defaultMessage: "Value Survey" },
      close: { id: "navigation.survey.valueSurvey.close", defaultMessage: "Close survey" },
      title: { id: "navigation.survey.valueSurvey.title", defaultMessage: "We'd love your feedback" },
      submitting: { id: "navigation.survey.valueSurvey.submitting", defaultMessage: "Submitting\u2026" },
      submit: { id: "navigation.survey.valueSurvey.submit", defaultMessage: "Submit feedback" },
      dataUseSummary: {
        id: "navigation.survey.valueSurvey.dataUseSummary",
        defaultMessage:
          "Your feedback may be shared with your organization's admins for AI adoption analysis. Your identity will be associated with your responses.",
      },
      dataUseDisclosureLabel: {
        id: "navigation.survey.valueSurvey.dataUseDisclosureLabel",
        defaultMessage: "How my data will be used",
      },
      dataUseDisclosureBody: {
        id: "navigation.survey.valueSurvey.dataUseDisclosureBody",
        defaultMessage:
          "Your organization's existing agreement with OpenAI applies to your feedback shared in this survey. Your organization's administrators may access both aggregated and individual survey responses, including your User ID. This data will be used to support analysis of AI adoption and to better understand the impact of AI tools within your organization.",
      },
      completionTitle: { id: "navigation.survey.valueSurvey.completionTitle", defaultMessage: "You did it! \u{1F389}" },
      completionMessage: {
        id: "navigation.survey.valueSurvey.completionMessage",
        defaultMessage:
          "Thanks for sharing your feedback. Your input helps make ChatGPT more useful for your workspace.",
      },
      completionClose: { id: "navigation.survey.valueSurvey.completionClose", defaultMessage: "Done" },
      error: { id: "navigation.survey.valueSurvey.error", defaultMessage: "Something went wrong. Please try again." },
    })
    function k({ id: e, prompt: a, options: t }) {
      return { kind: "single_select", id: e, prompt: a, options: t }
    }
    function M(e) {
      return {
        kind: "free_text",
        id: "open_ended_feedback",
        prompt: e.formatMessage(w.openEndedFeedbackPrompt),
        maxLength: 2e3,
      }
    }
    var _ = t("Kwur")
    function O(e) {
      let a,
        t,
        r,
        o,
        n,
        d,
        g = (0, s.c)(40),
        h = (0, l.Ul)(p.chatGptAuthenticatedAccountId$),
        f = (0, l.Ul)(p.o8),
        { data: S, isPending: k, isError: M, refetch: _ } = (0, c.oV)()
      if (g[0] !== h || g[1] !== S || g[2] !== M || g[3] !== k || g[4] !== e || g[5] !== _ || g[6] !== f) {
        n = Symbol.for("react.early_return_sentinel")
        e: {
          let s = S?.accounts?.find((e) => e.id === S.account_ordering?.[0])
          if (h !== e.accountId || f !== e.userId) {
            n = null
            break e
          }
          if (s?.id !== e.accountId || "workspace" !== s.structure) {
            let a, t, s, r, o, l, d, p, c, h
            ;(g[12] !== e
              ? ((a = (a) => {
                  a || e.onClose()
                }),
                (g[12] = e),
                (g[13] = a))
              : (a = g[13]),
              g[14] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, i.jsx)(m.c7, { title: (0, i.jsx)(y.L3, { children: (0, i.jsx)(u.A, { ...w.title }) }) })),
                  (g[14] = t))
                : (t = g[14]))
            let f = M ? "alert" : "status"
            ;(g[15] !== k
              ? ((s = k
                  ? (0, i.jsx)(u.A, { id: "enterpriseSurvey.loading", defaultMessage: "Loading survey\u2026" })
                  : (0, i.jsx)(u.A, {
                      id: "enterpriseSurvey.unavailable",
                      defaultMessage: "We couldn\u2019t load this survey. Try again or close this dialog.",
                    })),
                (g[15] = k),
                (g[16] = s))
              : (s = g[16]),
              g[17] !== f || g[18] !== s
                ? ((r = (0, i.jsx)(m.OO, { children: (0, i.jsx)("p", { role: f, children: s }) })),
                  (g[17] = f),
                  (g[18] = s),
                  (g[19] = r))
                : (r = g[19]),
              g[20] === Symbol.for("react.memo_cache_sentinel")
                ? ((o = (0, i.jsx)(u.A, { id: "enterpriseSurvey.close", defaultMessage: "Close survey" })), (g[20] = o))
                : (o = g[20]),
              g[21] !== e.onClose
                ? ((l = (0, i.jsx)(v.$, { onClick: e.onClose, children: o })), (g[21] = e.onClose), (g[22] = l))
                : (l = g[22]),
              g[23] !== k || g[24] !== _
                ? ((d = k
                    ? null
                    : (0, i.jsx)(v.$, {
                        onClick: () => void _(),
                        children: (0, i.jsx)(u.A, { id: "enterpriseSurvey.retry", defaultMessage: "Try again" }),
                      })),
                  (g[23] = k),
                  (g[24] = _),
                  (g[25] = d))
                : (d = g[25]),
              g[26] !== l || g[27] !== d
                ? ((p = (0, i.jsx)(m.OO, { children: (0, i.jsxs)(m.Es, { children: [l, d] }) })),
                  (g[26] = l),
                  (g[27] = d),
                  (g[28] = p))
                : (p = g[28]),
              g[29] !== p || g[30] !== r
                ? ((c = (0, i.jsxs)(m.R4, { children: [t, r, p] })), (g[29] = p), (g[30] = r), (g[31] = c))
                : (c = g[31]),
              g[32] !== c || g[33] !== a
                ? ((h = (0, i.jsx)(y.lG, { open: !0, onOpenChange: a, children: c })),
                  (g[32] = c),
                  (g[33] = a),
                  (g[34] = h))
                : (h = g[34]),
              (n = h))
            break e
          }
          ;((a = I),
            (t = `${e.accountId}:${e.userId}:${e.surveyId}`),
            (r = e),
            (o = (0, b.V$)(s.plan_type) ? "edu" : "default"))
        }
        ;((g[0] = h),
          (g[1] = S),
          (g[2] = M),
          (g[3] = k),
          (g[4] = e),
          (g[5] = _),
          (g[6] = f),
          (g[7] = a),
          (g[8] = t),
          (g[9] = r),
          (g[10] = o),
          (g[11] = n))
      } else ((a = g[7]), (t = g[8]), (r = g[9]), (o = g[10]), (n = g[11]))
      return n !== Symbol.for("react.early_return_sentinel")
        ? n
        : (g[35] !== a || g[36] !== t || g[37] !== r || g[38] !== o
            ? ((d = (0, i.jsx)(a, { ...r, variant: o }, t)),
              (g[35] = a),
              (g[36] = t),
              (g[37] = r),
              (g[38] = o),
              (g[39] = d))
            : (d = g[39]),
          d)
    }
    function I(e) {
      let a,
        t,
        l,
        p,
        c,
        b,
        O,
        I,
        A,
        j,
        D,
        T = (0, s.c)(26),
        { accountId: q, userId: P, surveyId: N, surveyName: C, onClose: Q, onCompleted: G, variant: L } = e,
        U = (0, g.A)(),
        H = (0, n.jE)(),
        E = (function (e, a = "default", { includeOpenEndedFeedback: t = !0 } = {}) {
          if ("edu" === a) {
            let a = [
                { id: "strongly_agree", label: e.formatMessage(w.workQualityOptionStronglyAgree) },
                { id: "agree", label: e.formatMessage(w.workQualityOptionAgree) },
                {
                  id: "neither_agree_nor_disagree",
                  label: e.formatMessage(w.workQualityOptionNeitherAgreeNorDisagree),
                },
                { id: "disagree", label: e.formatMessage(w.workQualityOptionDisagree) },
                { id: "strongly_disagree", label: e.formatMessage(w.workQualityOptionStronglyDisagree) },
              ],
              i = [
                k({
                  id: "productivity_impact",
                  prompt: e.formatMessage(w.eduProductivityImpactPrompt),
                  options: [
                    {
                      id: "significantly_increased",
                      label: e.formatMessage(w.productivityImpactOptionSignificantlyIncreased),
                    },
                    {
                      id: "moderately_increased",
                      label: e.formatMessage(w.productivityImpactOptionModeratelyIncreased),
                    },
                    { id: "slight_increase", label: e.formatMessage(w.productivityImpactOptionSlightIncrease) },
                    { id: "no_impact", label: e.formatMessage(w.productivityImpactOptionNoImpact) },
                    { id: "decreased", label: e.formatMessage(w.productivityImpactOptionDecreased) },
                  ],
                }),
                k({
                  id: "hours_saved",
                  prompt: e.formatMessage(w.eduHoursSavedPrompt),
                  options: [
                    { id: "more_than_10", label: e.formatMessage(w.hoursSavedOptionMoreThan10) },
                    { id: "5_to_10", label: e.formatMessage(w.hoursSavedOption5To10) },
                    { id: "2_to_5", label: e.formatMessage(w.hoursSavedOption2To5) },
                    { id: "up_to_2", label: e.formatMessage(w.hoursSavedOptionUpTo2) },
                    { id: "0_hours", label: e.formatMessage(w.hoursSavedOption0Hours) },
                    { id: "decreased", label: e.formatMessage(w.hoursSavedOptionDecreased) },
                  ],
                }),
                k({ id: "work_quality_impact", prompt: e.formatMessage(w.eduWorkQualityPrompt), options: a }),
                k({
                  id: "work_satisfaction_impact",
                  prompt: e.formatMessage(w.eduWorkSatisfactionImpactPrompt),
                  options: a,
                }),
                k({
                  id: "learn_teach_new_concepts_approaches",
                  prompt: e.formatMessage(w.eduLearningConceptsImpactPrompt),
                  options: a,
                }),
                k({
                  id: "creative_thinking_impact",
                  prompt: e.formatMessage(w.eduCreativeThinkingImpactPrompt),
                  options: a,
                }),
              ]
            return (t && i.push(M(e)), i)
          }
          let i = [
            k({
              id: "productivity_impact",
              prompt: e.formatMessage(w.productivityImpactPrompt),
              options: [
                {
                  id: "significantly_increased",
                  label: e.formatMessage(w.productivityImpactOptionSignificantlyIncreased),
                },
                { id: "moderately_increased", label: e.formatMessage(w.productivityImpactOptionModeratelyIncreased) },
                { id: "slight_increase", label: e.formatMessage(w.productivityImpactOptionSlightIncrease) },
                { id: "no_impact", label: e.formatMessage(w.productivityImpactOptionNoImpact) },
                { id: "decreased", label: e.formatMessage(w.productivityImpactOptionDecreased) },
              ],
            }),
            k({
              id: "hours_saved",
              prompt: e.formatMessage(w.hoursSavedPrompt),
              options: [
                { id: "more_than_10", label: e.formatMessage(w.hoursSavedOptionMoreThan10) },
                { id: "5_to_10", label: e.formatMessage(w.hoursSavedOption5To10) },
                { id: "2_to_5", label: e.formatMessage(w.hoursSavedOption2To5) },
                { id: "up_to_2", label: e.formatMessage(w.hoursSavedOptionUpTo2) },
                { id: "0_hours", label: e.formatMessage(w.hoursSavedOption0Hours) },
                { id: "decreased", label: e.formatMessage(w.hoursSavedOptionDecreased) },
              ],
            }),
            k({
              id: "work_quality_impact",
              prompt: e.formatMessage(w.workQualityPrompt),
              options: [
                { id: "strongly_agree", label: e.formatMessage(w.workQualityOptionStronglyAgree) },
                { id: "agree", label: e.formatMessage(w.workQualityOptionAgree) },
                {
                  id: "neither_agree_nor_disagree",
                  label: e.formatMessage(w.workQualityOptionNeitherAgreeNorDisagree),
                },
                { id: "disagree", label: e.formatMessage(w.workQualityOptionDisagree) },
                { id: "strongly_disagree", label: e.formatMessage(w.workQualityOptionStronglyDisagree) },
              ],
            }),
            k({
              id: "work_satisfaction_impact",
              prompt: e.formatMessage(w.workSatisfactionImpactPrompt),
              options: [
                { id: "strongly_agree", label: e.formatMessage(w.workSatisfactionImpactOptionStronglyAgree) },
                { id: "agree", label: e.formatMessage(w.workSatisfactionImpactOptionAgree) },
                {
                  id: "neither_agree_nor_disagree",
                  label: e.formatMessage(w.workSatisfactionImpactOptionNeitherAgreeNorDisagree),
                },
                { id: "disagree", label: e.formatMessage(w.workSatisfactionImpactOptionDisagree) },
                { id: "strongly_disagree", label: e.formatMessage(w.workSatisfactionImpactOptionStronglyDisagree) },
              ],
            }),
            k({
              id: "new_tasks_ability",
              prompt: e.formatMessage(w.newTasksAbilityPrompt),
              options: [
                { id: "strongly_agree", label: e.formatMessage(w.newTasksAbilityOptionStronglyAgree) },
                { id: "agree", label: e.formatMessage(w.newTasksAbilityOptionAgree) },
                {
                  id: "neither_agree_nor_disagree",
                  label: e.formatMessage(w.newTasksAbilityOptionNeitherAgreeNorDisagree),
                },
                { id: "disagree", label: e.formatMessage(w.newTasksAbilityOptionDisagree) },
                { id: "strongly_disagree", label: e.formatMessage(w.newTasksAbilityOptionStronglyDisagree) },
              ],
            }),
            k({
              id: "stakeholder_service_impact",
              prompt: e.formatMessage(w.stakeholderServicePrompt),
              options: [
                { id: "strongly_agree", label: e.formatMessage(w.stakeholderServiceOptionStronglyAgree) },
                { id: "agree", label: e.formatMessage(w.stakeholderServiceOptionAgree) },
                {
                  id: "neither_agree_nor_disagree",
                  label: e.formatMessage(w.stakeholderServiceOptionNeitherAgreeNorDisagree),
                },
                { id: "disagree", label: e.formatMessage(w.stakeholderServiceOptionDisagree) },
                { id: "strongly_disagree", label: e.formatMessage(w.stakeholderServiceOptionStronglyDisagree) },
              ],
            }),
          ]
          return (t && i.push(M(e)), i)
        })(U, L, { includeOpenEndedFeedback: !(0, S.Zj)("2221440816") })
      T[0] === Symbol.for("react.memo_cache_sentinel") ? ((a = {}), (T[0] = a)) : (a = T[0])
      let [R, W] = (0, d.useState)(a),
        [z, $] = (0, d.useState)("idle"),
        B = (0, d.useRef)(null),
        Y = (0, d.useRef)(!1)
      ;(T[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => {
            B.current?.abort()
          }),
          (l = []),
          (T[1] = t),
          (T[2] = l))
        : ((t = T[1]), (l = T[2])),
        (0, d.useEffect)(t, l),
        T[3] !== R ? ((p = (e) => R[e.id]?.trim()), (T[3] = R), (T[4] = p)) : (p = T[4]))
      let F = E.some(p),
        V = "pending" === z
      T[5] !== Q
        ? ((c = () => {
            Y.current || Q()
          }),
          (T[5] = Q),
          (T[6] = c))
        : (c = T[6])
      let K = c,
        J = y.lG
      T[7] !== K
        ? ((b = (e) => {
            e || K()
          }),
          (T[7] = K),
          (T[8] = b))
        : (b = T[8])
      let Z = !V
      ;(T[9] !== U ? ((O = U.formatMessage(w.modalLabel)), (T[9] = U), (T[10] = O)) : (O = T[10]),
        T[11] !== O ? ((I = { "aria-label": O, "aria-labelledby": void 0 }), (T[11] = O), (T[12] = I)) : (I = T[12]))
      let X = m.R4,
        ee = (e) => {
          ;(e.preventDefault(),
            (async () => {
              if (Y.current) return
              ;((Y.current = !0), B.current?.abort())
              let e = new AbortController()
              ;((B.current = e), $("pending"))
              try {
                let a = await (async function ({
                  identity: e,
                  signal: a,
                  surveyId: t,
                  surveyName: i,
                  questions: s,
                  answers: r,
                }) {
                  let o = []
                  for (let e of s) {
                    let a = r[e.id],
                      s = "single_select" === e.kind ? e.options.find(({ id: e }) => e === a) : void 0,
                      n = "free_text" === e.kind ? a?.trim().slice(0, e.maxLength) : s?.label
                    n &&
                      o.push({
                        survey_id: t,
                        survey_name: i,
                        question_id: e.id,
                        question_text: e.prompt,
                        answer_id: s?.id ?? "free_text",
                        answer_text: n,
                      })
                  }
                  if (0 === o.length) return !1
                  let n = { "ChatGPT-Account-ID": e.accountId }
                  return (
                    await _.Request.safePost("/enterprise_surveys/{survey_id}/complete", {
                      parameters: { path: { survey_id: t } },
                      additionalHeaders: n,
                      expectedIdentity: e,
                      signal: a,
                    }),
                    a.throwIfAborted(),
                    Promise.allSettled(
                      o.map((a) =>
                        _.Request.safePost("/unified_user_signals", {
                          additionalHeaders: n,
                          expectedIdentity: e,
                          requestBody: {
                            signal_type: "enterprise_survey_submission",
                            product_surface: "CHAT",
                            signal_metadata: {},
                            user_metadata: {},
                            signal_detail: {
                              common_metadata: { conversation_id: null },
                              enterprise_survey_submission: a,
                            },
                          },
                        }),
                      ),
                    ),
                    !0
                  )
                })({
                  identity: { accountId: q, userId: P },
                  signal: e.signal,
                  surveyId: N,
                  surveyName: C,
                  questions: E,
                  answers: R,
                })
                ;($(a ? "completed" : "idle"), a && H.invalidateQueries({ queryKey: ["enterpriseSurvey"] }))
              } catch {
                e.signal.aborted || $("error")
              }
              Y.current = !1
            })())
        },
        ea = "completed" === z ? w.completionTitle : w.title
      T[13] !== ea
        ? ((A = (0, i.jsx)(m.c7, {
            className: "shrink-0",
            titleClassName: "pe-8",
            title: (0, i.jsx)(y.L3, { children: (0, i.jsx)(u.A, { ...ea }) }),
          })),
          (T[13] = ea),
          (T[14] = A))
        : (A = T[14])
      let et =
        "completed" === z
          ? (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(m.OO, {
                  children: (0, i.jsx)("p", { children: (0, i.jsx)(u.A, { ...w.completionMessage }) }),
                }),
                (0, i.jsx)(m.OO, {
                  children: (0, i.jsx)(m.Es, {
                    children: (0, i.jsx)(v.$, {
                      type: "button",
                      color: "primary",
                      onClick: () => {
                        ;(G?.(), Q())
                      },
                      children: (0, i.jsx)(u.A, { ...w.completionClose }),
                    }),
                  }),
                }),
              ],
            })
          : (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)("div", {
                  className: "min-h-0 overflow-y-auto",
                  children: E.map((e, a) =>
                    (0, i.jsx)(
                      m.OO,
                      {
                        children: (0, i.jsxs)("fieldset", {
                          className: "flex flex-col gap-3",
                          disabled: V,
                          children: [
                            (0, i.jsx)("legend", {
                              className: "pb-2 text-sm font-medium",
                              children: (0, i.jsx)(u.A, {
                                ...w.questionLabel,
                                values: { index: a + 1, question: e.prompt },
                              }),
                            }),
                            "free_text" === e.kind
                              ? (0, i.jsx)(f.TM, {
                                  "aria-label": e.prompt,
                                  value: R[e.id] ?? "",
                                  maxLength: e.maxLength,
                                  onChange: (a) => W({ ...R, [e.id]: a.currentTarget.value }),
                                })
                              : (0, i.jsx)(r.z, {
                                  name: e.id,
                                  value: R[e.id] ?? "",
                                  direction: "col",
                                  disabled: V,
                                  "aria-label": e.prompt,
                                  onChange: (a) => W({ ...R, [e.id]: a }),
                                  children: e.options.map(x),
                                }),
                          ],
                        }),
                      },
                      e.id,
                    ),
                  ),
                }),
                (0, i.jsx)(m.OO, {
                  className: "shrink-0",
                  children: (0, i.jsxs)("div", {
                    className: "flex items-start gap-2 text-sm text-secondary",
                    children: [
                      (0, i.jsx)("p", { children: (0, i.jsx)(u.A, { ...w.dataUseSummary }) }),
                      (0, i.jsx)(o.m, {
                        interactive: !0,
                        side: "top",
                        content: (0, i.jsx)("span", {
                          className: "select-text",
                          children: (0, i.jsx)(u.A, { ...w.dataUseDisclosureBody }),
                        }),
                        children: (0, i.jsx)(o.m.TriggerDecorator, {
                          unstyled: !0,
                          "aria-label": U.formatMessage(w.dataUseDisclosureLabel),
                          children: (0, i.jsx)("span", { children: (0, i.jsx)(h.ehD, {}) }),
                        }),
                      }),
                    ],
                  }),
                }),
                "error" === z
                  ? (0, i.jsx)(m.OO, {
                      className: "shrink-0",
                      children: (0, i.jsx)("p", {
                        role: "alert",
                        className: "text-sm text-danger",
                        children: (0, i.jsx)(u.A, { ...w.error }),
                      }),
                    })
                  : null,
                (0, i.jsx)(m.OO, {
                  className: "shrink-0",
                  children: (0, i.jsx)(m.Es, {
                    children: (0, i.jsx)(v.$, {
                      type: "submit",
                      color: "primary",
                      disabled: !F || V,
                      children: (0, i.jsx)(u.A, { ...(V ? w.submitting : w.submit) }),
                    }),
                  }),
                }),
              ],
            })
      return (
        T[15] !== X || T[16] !== ee || T[17] !== A || T[18] !== et
          ? ((j = (0, i.jsxs)(X, { as: "form", size: "scrollable", onSubmit: ee, children: [A, et] })),
            (T[15] = X),
            (T[16] = ee),
            (T[17] = A),
            (T[18] = et),
            (T[19] = j))
          : (j = T[19]),
        T[20] !== J || T[21] !== I || T[22] !== j || T[23] !== b || T[24] !== Z
          ? ((D = (0, i.jsx)(J, {
              open: !0,
              onOpenChange: b,
              size: "wide",
              showDialogClose: Z,
              contentProps: I,
              children: j,
            })),
            (T[20] = J),
            (T[21] = I),
            (T[22] = j),
            (T[23] = b),
            (T[24] = Z),
            (T[25] = D))
          : (D = T[25]),
        D
      )
    }
    function x(e) {
      return (0, i.jsx)(r.z.Item, { value: e.id, children: e.label }, e.id)
    }
  },
}
//# sourceMappingURL=992331.2d54391773.js.map
