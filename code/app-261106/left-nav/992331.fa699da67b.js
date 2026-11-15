export const __rspack_esm_ids = [992331]
export const __webpack_modules__ = {
  oUPQ(e, t, i) {
    i.d(t, { z: () => l })
    var a = i("ABep"),
      o = i("on57"),
      r = i("Hg3i"),
      s = i("zd8w")
    let n = (0, s.createContext)(null),
      l = ({
        onChange: e,
        children: t,
        className: i,
        direction: l = "row",
        variant: d = "default",
        disabled: u = !1,
        __isWidget: p,
        ...c
      }) => {
        let g = (0, s.useMemo)(() => ({ disabled: u, direction: l, variant: d }), [u, l, d])
        return (0, a.jsx)(n, {
          value: g,
          children: (0, a.jsx)(r.Root, {
            className: (0, o.A)("RadioGroup-qedmT_", i),
            "data-direction": l,
            "data-variant": d,
            orientation: "list" === d ? "vertical" : void 0,
            "data-w-component": p ? "radio-group" : void 0,
            onValueChange: e,
            disabled: u,
            ...c,
            children: t,
          }),
        })
      }
    l.Item = ({ value: e, disabled: t = !1, id: i, required: l, children: d, className: u, block: p = !1, ...c }) => {
      let { disabled: g, variant: m } = (() => {
          let e = (0, s.use)(n)
          if (!e) throw Error("RadioGroup components must be wrapped in <RadioGroup />")
          return e
        })(),
        v = g || t,
        y = (0, s.useId)(),
        h = i ?? `${e}-${y}`
      return (0, a.jsx)("div", {
        className: "RadioOptionWrapper-lfJup3",
        "data-variant": m,
        ...c,
        children: (0, a.jsxs)("label", {
          htmlFor: h,
          className: (0, o.A)("RadioLabel-I_wija", u),
          "data-disabled": v ? "" : void 0,
          "data-block": p ? "" : void 0,
          "data-variant": m,
          onMouseDown: (e) => {
            !e.defaultPrevented && e.detail > 1 && e.preventDefault()
          },
          children: [
            (0, a.jsx)("div", {
              className: "RadioIndicatorWrapper-SWef98",
              children: (0, a.jsx)(r.Item, {
                id: h,
                value: e,
                disabled: v,
                required: l,
                className: "RadioItem-a9cavK",
                children: (0, a.jsx)(r.Indicator, { className: "RadioIndicator-m2hnXY" }),
              }),
            }),
            d,
          ],
        }),
      })
    }
  },
  zlPn(e, t, i) {
    i.d(t, { EnterpriseSurveyDialog: () => q })
    var a = i("ABep"),
      o = i("QosV"),
      r = i("oUPQ"),
      s = i("slpy"),
      n = i("irkb"),
      l = i("zTeN"),
      d = i("zd8w"),
      u = i("oyxz"),
      p = i("Wf1j"),
      c = i("SPnB"),
      g = i("OAko"),
      m = i("Sm6l"),
      v = i("JNtf"),
      y = i("mUDD"),
      h = i("bVeK"),
      f = i("zLIa"),
      S = i("hZax"),
      w = i("UR81")
    let b = (0, i("Qgfj").YK)({
      questionLabel: {
        id: "navigation.survey.valueSurvey.questionLabel",
        defaultMessage: "{index}. {question}",
        description:
          "Question label shown above each answer group in the in-product Value Survey modal. Placeholder {index} is a 1-based integer question number, and placeholder {question} is the localized question text.",
      },
      productivityImpactPrompt: {
        id: "navigation.survey.valueSurvey.questions.productivityImpact.prompt",
        defaultMessage: "Which of the following best reflects how ChatGPT has impacted your productivity?",
        description:
          "Question prompt shown in the in-product Value Survey modal after an enterprise end user opens the survey from a survey prompt. Audience is enterprise users reflecting on work outcomes; tone should stay neutral and analytical. This is a full-sentence prompt and may wrap across multiple lines.",
      },
      productivityImpactOptionDecreased: {
        id: "navigation.survey.valueSurvey.questions.productivityImpact.options.decreased",
        defaultMessage: "Decreased",
        description:
          "Single-select radio option label for the productivity-impact question in the in-product Value Survey modal for enterprise end users. Keep wording very short because options are displayed in compact tiles.",
      },
      productivityImpactOptionNoImpact: {
        id: "navigation.survey.valueSurvey.questions.productivityImpact.options.noImpact",
        defaultMessage: "No impact",
        description:
          "Single-select radio option label for the productivity-impact question in the in-product Value Survey modal for enterprise end users. Keep wording concise to fit compact option tiles.",
      },
      productivityImpactOptionSlightIncrease: {
        id: "navigation.survey.valueSurvey.questions.productivityImpact.options.slightIncrease",
        defaultMessage: "Slight increase",
        description:
          "Single-select radio option label for the productivity-impact question in the in-product Value Survey modal for enterprise end users. Keep wording concise to fit compact option tiles.",
      },
      productivityImpactOptionModeratelyIncreased: {
        id: "navigation.survey.valueSurvey.questions.productivityImpact.options.moderatelyIncreased",
        defaultMessage: "Moderately increased",
        description:
          "Single-select radio option label for the productivity-impact question in the in-product Value Survey modal for enterprise end users. Keep wording concise to fit compact option tiles.",
      },
      productivityImpactOptionSignificantlyIncreased: {
        id: "navigation.survey.valueSurvey.questions.productivityImpact.options.significantlyIncreased",
        defaultMessage: "Significantly increased",
        description:
          "Single-select radio option label for the productivity-impact question in the in-product Value Survey modal for enterprise end users. Keep wording concise to fit compact option tiles.",
      },
      hoursSavedPrompt: {
        id: "navigation.survey.valueSurvey.questions.hoursSaved.prompt",
        defaultMessage:
          "On average, how many hours per week do you estimate ChatGPT helps you save on work-related tasks?",
        description:
          "Question prompt shown in the in-product Value Survey modal asking enterprise end users to estimate weekly time savings from ChatGPT for work tasks. Tone should be neutral and self-reporting. This full-sentence prompt can wrap across lines and introduces the numeric options that follow.",
      },
      hoursSavedOption0Hours: {
        id: "navigation.survey.valueSurvey.questions.hoursSaved.options.0Hours",
        defaultMessage: "0 hours (No time saved)",
        description:
          "Single-select radio option label for the hours-saved question in the in-product Value Survey modal. The parenthetical text clarifies that zero means no time savings; keep wording compact for the option tile.",
      },
      hoursSavedOptionUpTo2: {
        id: "navigation.survey.valueSurvey.questions.hoursSaved.options.upTo2",
        defaultMessage: "Up to 2 hours each week",
        description:
          "Single-select radio option label for the hours-saved question in the in-product Value Survey modal for enterprise end users. Keep wording concise because it appears in a compact option tile.",
      },
      hoursSavedOption2To5: {
        id: "navigation.survey.valueSurvey.questions.hoursSaved.options.2To5",
        defaultMessage: "Between 2 and 5 hours each week",
        description:
          "Single-select radio option label for the hours-saved question in the in-product Value Survey modal for enterprise end users. Keep wording concise because it appears in a compact option tile.",
      },
      hoursSavedOption5To10: {
        id: "navigation.survey.valueSurvey.questions.hoursSaved.options.5To10",
        defaultMessage: "Between 5 and 10 hours each week",
        description:
          "Single-select radio option label for the hours-saved question in the in-product Value Survey modal for enterprise end users. Keep wording concise because it appears in a compact option tile.",
      },
      hoursSavedOptionMoreThan10: {
        id: "navigation.survey.valueSurvey.questions.hoursSaved.options.moreThan10",
        defaultMessage: "More than 10 hours each week",
        description:
          "Single-select radio option label for the hours-saved question in the in-product Value Survey modal for enterprise end users. Keep wording concise because it appears in a compact option tile.",
      },
      hoursSavedOptionDecreased: {
        id: "navigation.survey.valueSurvey.questions.hoursSaved.options.decreased",
        defaultMessage: "Decreased",
        description:
          "Single-select radio option label for the hours-saved question in the in-product Value Survey modal when respondents report reduced efficiency.",
      },
      workQualityPrompt: {
        id: "navigation.survey.valueSurvey.questions.workQuality.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT has improved the quality of my work"?',
        description:
          "Question prompt shown in the in-product Value Survey modal asking enterprise end users to rate whether ChatGPT improved work quality.",
      },
      workQualityOptionStronglyDisagree: {
        id: "navigation.survey.valueSurvey.questions.workQuality.options.stronglyDisagree",
        defaultMessage: "Strongly disagree",
        description:
          "Single-select radio option label in the work-quality agreement question of the in-product Value Survey modal.",
      },
      workQualityOptionDisagree: {
        id: "navigation.survey.valueSurvey.questions.workQuality.options.disagree",
        defaultMessage: "Disagree",
        description:
          "Single-select radio option label in the work-quality agreement question of the in-product Value Survey modal.",
      },
      workQualityOptionNeitherAgreeNorDisagree: {
        id: "navigation.survey.valueSurvey.questions.workQuality.options.neitherAgreeNorDisagree",
        defaultMessage: "Neither agree nor disagree",
        description:
          "Single-select radio option label in the work-quality agreement question of the in-product Value Survey modal.",
      },
      workQualityOptionAgree: {
        id: "navigation.survey.valueSurvey.questions.workQuality.options.agree",
        defaultMessage: "Agree",
        description:
          "Single-select radio option label in the work-quality agreement question of the in-product Value Survey modal.",
      },
      workQualityOptionStronglyAgree: {
        id: "navigation.survey.valueSurvey.questions.workQuality.options.stronglyAgree",
        defaultMessage: "Strongly agree",
        description:
          "Single-select radio option label in the work-quality agreement question of the in-product Value Survey modal.",
      },
      workSatisfactionImpactPrompt: {
        id: "navigation.survey.valueSurvey.questions.workSatisfactionImpact.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT has increased my satisfaction at work"?',
        description:
          "Question prompt shown in the in-product Value Survey modal asking enterprise end users about work satisfaction impact.",
      },
      workSatisfactionImpactOptionStronglyDisagree: {
        id: "navigation.survey.valueSurvey.questions.workSatisfactionImpact.options.stronglyDisagree",
        defaultMessage: "Strongly disagree",
        description:
          "Single-select radio option label in the work-satisfaction agreement question of the in-product Value Survey modal.",
      },
      workSatisfactionImpactOptionDisagree: {
        id: "navigation.survey.valueSurvey.questions.workSatisfactionImpact.options.disagree",
        defaultMessage: "Disagree",
        description:
          "Single-select radio option label in the work-satisfaction agreement question of the in-product Value Survey modal.",
      },
      workSatisfactionImpactOptionNeitherAgreeNorDisagree: {
        id: "navigation.survey.valueSurvey.questions.workSatisfactionImpact.options.neitherAgreeNorDisagree",
        defaultMessage: "Neither agree nor disagree",
        description:
          "Single-select radio option label in the work-satisfaction agreement question of the in-product Value Survey modal.",
      },
      workSatisfactionImpactOptionAgree: {
        id: "navigation.survey.valueSurvey.questions.workSatisfactionImpact.options.agree",
        defaultMessage: "Agree",
        description:
          "Single-select radio option label in the work-satisfaction agreement question of the in-product Value Survey modal.",
      },
      workSatisfactionImpactOptionStronglyAgree: {
        id: "navigation.survey.valueSurvey.questions.workSatisfactionImpact.options.stronglyAgree",
        defaultMessage: "Strongly agree",
        description:
          "Single-select radio option label in the work-satisfaction agreement question of the in-product Value Survey modal.",
      },
      stakeholderServicePrompt: {
        id: "navigation.survey.valueSurvey.questions.stakeholderService.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT has improved my ability to serve customers, partners, or stakeholders"?',
        description:
          "Question prompt shown in the in-product Value Survey modal asking about stakeholder-serving impact.",
      },
      stakeholderServiceOptionStronglyDisagree: {
        id: "navigation.survey.valueSurvey.questions.stakeholderService.options.stronglyDisagree",
        defaultMessage: "Strongly disagree",
        description:
          "Single-select radio option label in the stakeholder-service agreement question of the in-product Value Survey modal.",
      },
      stakeholderServiceOptionDisagree: {
        id: "navigation.survey.valueSurvey.questions.stakeholderService.options.disagree",
        defaultMessage: "Disagree",
        description:
          "Single-select radio option label in the stakeholder-service agreement question of the in-product Value Survey modal.",
      },
      stakeholderServiceOptionNeitherAgreeNorDisagree: {
        id: "navigation.survey.valueSurvey.questions.stakeholderService.options.neitherAgreeNorDisagree",
        defaultMessage: "Neither agree nor disagree",
        description:
          "Single-select radio option label in the stakeholder-service agreement question of the in-product Value Survey modal.",
      },
      stakeholderServiceOptionAgree: {
        id: "navigation.survey.valueSurvey.questions.stakeholderService.options.agree",
        defaultMessage: "Agree",
        description:
          "Single-select radio option label in the stakeholder-service agreement question of the in-product Value Survey modal.",
      },
      stakeholderServiceOptionStronglyAgree: {
        id: "navigation.survey.valueSurvey.questions.stakeholderService.options.stronglyAgree",
        defaultMessage: "Strongly agree",
        description:
          "Single-select radio option label in the stakeholder-service agreement question of the in-product Value Survey modal.",
      },
      newTasksAbilityPrompt: {
        id: "navigation.survey.valueSurvey.questions.newTasksAbility.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT has increased my ability to complete new tasks or activities"?',
        description:
          "Question prompt shown in the in-product Value Survey modal asking enterprise end users to rate agreement with a statement about their ability to complete new tasks. This uses Likert-style agree/disagree framing and should remain neutral and professional. Full sentence can wrap across multiple lines.",
      },
      eduProductivityImpactPrompt: {
        id: "navigation.survey.valueSurvey.questions.eduProductivityImpact.prompt",
        defaultMessage:
          "Which of the following best reflects how ChatGPT Edu has impacted your productivity in your work or studies?",
        description:
          "Question prompt shown in the in-product Value Survey modal for ChatGPT Edu workspaces asking end users to reflect on productivity across work or studies. Use consistent terminology for 'work or studies' and 'work or learning'; both refer to professional or academic activities and should be translated the same way across Edu strings.",
      },
      eduHoursSavedPrompt: {
        id: "navigation.survey.valueSurvey.questions.eduHoursSaved.prompt",
        defaultMessage:
          "On average, how many hours per week do you estimate ChatGPT Edu helps you save on your work or studies?",
        description:
          "Question prompt shown in the in-product Value Survey modal for ChatGPT Edu workspaces asking end users to estimate weekly time savings across work or studies. Use consistent terminology for 'work or studies' and 'work or learning'; both refer to professional or academic activities and should be translated the same way across Edu strings.",
      },
      eduWorkQualityPrompt: {
        id: "navigation.survey.valueSurvey.questions.eduWorkQuality.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT Edu improves the quality of what I produce (for example: writing, analysis, studying, lesson materials, or administrative work)"?',
        description:
          "Edu Likert prompt about the quality of the user's own outputs or tasks. Examples in parentheses are outputs or tasks in educational contexts, such as writing, analysis, study-related work, lesson materials, or administrative tasks. Here, 'studying' means study-related work or activity, not a research paper or study.",
      },
      eduWorkSatisfactionImpactPrompt: {
        id: "navigation.survey.valueSurvey.questions.eduWorkSatisfactionImpact.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT Edu has increased my satisfaction with my work or learning"?',
        description:
          "Question prompt shown in the in-product Value Survey modal for ChatGPT Edu workspaces asking about satisfaction with work or learning. Use consistent terminology for 'work or studies' and 'work or learning'; both refer to professional or academic activities and should be translated the same way across Edu strings.",
      },
      eduLearningConceptsImpactPrompt: {
        id: "navigation.survey.valueSurvey.questions.eduLearningConceptsImpact.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT Edu helps me learn, teach, or apply new concepts and approaches that would otherwise be difficult for me"?',
        description:
          "Edu survey Likert prompt in the modal. Audience includes educators and learners. 'Teach' means teach others, such as students or peers. 'Apply' means put into practice rather than apply for something.",
      },
      eduCreativeThinkingImpactPrompt: {
        id: "navigation.survey.valueSurvey.questions.eduCreativeThinkingImpact.prompt",
        defaultMessage:
          'How strongly do you agree or disagree with the statement: "ChatGPT Edu helps me generate new ideas and approaches, and solve problems in more creative ways"?',
        description:
          "Question prompt shown in the in-product Value Survey modal for ChatGPT Edu workspaces asking about creativity and idea exploration.",
      },
      newTasksAbilityOptionStronglyDisagree: {
        id: "navigation.survey.valueSurvey.questions.newTasksAbility.options.stronglyDisagree",
        defaultMessage: "Strongly disagree",
        description:
          "Single-select radio option label in the Likert-scale agreement question of the in-product Value Survey modal for enterprise end users. Keep wording short and standard for agreement scales.",
      },
      newTasksAbilityOptionDisagree: {
        id: "navigation.survey.valueSurvey.questions.newTasksAbility.options.disagree",
        defaultMessage: "Disagree",
        description:
          "Single-select radio option label in the Likert-scale agreement question of the in-product Value Survey modal for enterprise end users. Keep wording short and standard for agreement scales.",
      },
      newTasksAbilityOptionNeitherAgreeNorDisagree: {
        id: "navigation.survey.valueSurvey.questions.newTasksAbility.options.neitherAgreeNorDisagree",
        defaultMessage: "Neither agree nor disagree",
        description:
          "Single-select radio option label in the Likert-scale agreement question of the in-product Value Survey modal for enterprise end users. Keep wording short and standard for agreement scales.",
      },
      newTasksAbilityOptionAgree: {
        id: "navigation.survey.valueSurvey.questions.newTasksAbility.options.agree",
        defaultMessage: "Agree",
        description:
          "Single-select radio option label in the Likert-scale agreement question of the in-product Value Survey modal for enterprise end users. Keep wording short and standard for agreement scales.",
      },
      newTasksAbilityOptionStronglyAgree: {
        id: "navigation.survey.valueSurvey.questions.newTasksAbility.options.stronglyAgree",
        defaultMessage: "Strongly agree",
        description:
          "Single-select radio option label in the Likert-scale agreement question of the in-product Value Survey modal for enterprise end users. Keep wording short and standard for agreement scales.",
      },
      openEndedFeedbackPrompt: {
        id: "navigation.survey.valueSurvey.questions.openEndedFeedback.prompt",
        defaultMessage: "What do you wish ChatGPT could do or could do better?",
        description:
          "Optional free-form final question in the enterprise value survey modal. Audience is enterprise and Edu workspace users sharing product feedback. Keep the wording natural and open-ended.",
      },
      modalLabel: {
        id: "navigation.survey.valueSurvey.modalLabel",
        defaultMessage: "Value Survey",
        description:
          "Accessible aria-label announced by screen readers for the in-product Value Survey modal when it opens from a survey prompt. Audience is assistive-technology users; keep wording concise and descriptive.",
      },
      close: {
        id: "navigation.survey.valueSurvey.close",
        defaultMessage: "Close survey",
        description:
          "Accessible aria-label for the close button in the in-product Value Survey modal. Announced to screen-reader users and triggered when they navigate to the top-right dismiss control; keep wording concise and action-oriented.",
      },
      title: {
        id: "navigation.survey.valueSurvey.title",
        defaultMessage: "We'd love your feedback",
        description:
          "Visible heading at the top of the in-product Value Survey modal shown to enterprise end users after they click the survey prompt. This should be inviting and concise.",
      },
      submitting: {
        id: "navigation.survey.valueSurvey.submitting",
        defaultMessage: "Submitting…",
        description:
          "Temporary button label in the in-product Value Survey modal while answers are being submitted. Audience is enterprise end users waiting for completion; tone should indicate in-progress state. Keep very short to fit inside the submit button.",
      },
      submit: {
        id: "navigation.survey.valueSurvey.submit",
        defaultMessage: "Submit feedback",
        description:
          "Primary action button label in the in-product Value Survey modal that sends all selected answers.",
      },
      dataUseSummary: {
        id: "navigation.survey.valueSurvey.dataUseSummary",
        defaultMessage:
          "Your feedback may be shared with your organization's admins for AI adoption analysis. Your identity will be associated with your responses.",
        description:
          "Short visible disclosure shown above the submit button in the Enterprise Value Survey modal. 'Admins' means organization administrators. 'Identity' means the respondent's account, such as their name or email address; responses are not anonymous. Keep concise.",
      },
      dataUseDisclosureLabel: {
        id: "navigation.survey.valueSurvey.dataUseDisclosureLabel",
        defaultMessage: "How my data will be used",
        description:
          "ARIA label for an icon-only info button in the survey footer that opens the full data use disclosure. Not a question; use label-style text. 'My data' refers to the user's survey responses in this survey. Keep concise.",
      },
      dataUseDisclosureBody: {
        id: "navigation.survey.valueSurvey.dataUseDisclosureBody",
        defaultMessage:
          "Your organization's existing agreement with OpenAI applies to your feedback shared in this survey. Your organization's administrators may access both aggregated and individual survey responses, including your User ID. This data will be used to support analysis of AI adoption and to better understand the impact of AI tools within your organization.",
        description:
          "Full data use disclosure shown in a tooltip or popover from the survey footer in the Enterprise Value Survey modal. 'Aggregated' means summary-level data across multiple users, not data for one individual. 'User ID' is a formal UI or technical field name; preserve capitalization and translate it using the standard UI term in the target language.",
      },
      completionTitle: {
        id: "navigation.survey.valueSurvey.completionTitle",
        defaultMessage: "You did it! 🎉",
        description:
          "Title displayed after successfully submitting the enterprise value survey, with a warm appreciative tone.",
      },
      completionMessage: {
        id: "navigation.survey.valueSurvey.completionMessage",
        defaultMessage:
          "Thanks for sharing your feedback. Your input helps make ChatGPT more useful for your workspace.",
        description:
          "Supportive message shown after enterprise value survey submission succeeds; should feel appreciative and positive.",
      },
      completionClose: {
        id: "navigation.survey.valueSurvey.completionClose",
        defaultMessage: "Done",
        description:
          "Button label shown on the success screen after completing the value survey to let users close the modal.",
      },
      error: {
        id: "navigation.survey.valueSurvey.error",
        defaultMessage: "Something went wrong. Please try again.",
        description:
          "Inline error message shown inside the in-product Value Survey modal when submitting answers fails due to a network or server issue. Audience is enterprise end users; tone should be clear and reassuring with a retry cue. This appears in a small error banner, so keep text concise.",
      },
    })
    function k({ id: e, prompt: t, options: i }) {
      return { kind: "single_select", id: e, prompt: t, options: i }
    }
    function M(e) {
      return {
        kind: "free_text",
        id: "open_ended_feedback",
        prompt: e.formatMessage(b.openEndedFeedbackPrompt),
        maxLength: 2e3,
      }
    }
    var _ = i("Ghh3")
    function q(e) {
      let t,
        i,
        r,
        s,
        n,
        d,
        p = (0, o.c)(40),
        h = (0, l.Ul)(c.chatGptAuthenticatedAccountId$),
        f = (0, l.Ul)(c.o8),
        { data: S, isPending: k, isError: M, refetch: _ } = (0, g.oV)()
      if (p[0] !== h || p[1] !== S || p[2] !== M || p[3] !== k || p[4] !== e || p[5] !== _ || p[6] !== f) {
        n = Symbol.for("react.early_return_sentinel")
        e: {
          let o = S?.accounts?.find((e) => e.id === S.account_ordering?.[0])
          if (h !== e.accountId || f !== e.userId) {
            n = null
            break e
          }
          if (o?.id !== e.accountId || "workspace" !== o.structure) {
            let t, i, o, r, s, l, d, c, g, h
            ;(p[12] !== e
              ? ((t = (t) => {
                  t || e.onClose()
                }),
                (p[12] = e),
                (p[13] = t))
              : (t = p[13]),
              p[14] === Symbol.for("react.memo_cache_sentinel")
                ? ((i = (0, a.jsx)(y.c7, { title: (0, a.jsx)(v.L3, { children: (0, a.jsx)(u.A, { ...b.title }) }) })),
                  (p[14] = i))
                : (i = p[14]))
            let f = M ? "alert" : "status"
            ;(p[15] !== k
              ? ((o = k
                  ? (0, a.jsx)(u.A, {
                      id: "enterpriseSurvey.loading",
                      defaultMessage: "Loading survey…",
                      description: "Survey workspace policy is loading",
                    })
                  : (0, a.jsx)(u.A, {
                      id: "enterpriseSurvey.unavailable",
                      defaultMessage: "We couldn’t load this survey. Try again or close this dialog.",
                      description: "The survey workspace or policy could not be loaded",
                    })),
                (p[15] = k),
                (p[16] = o))
              : (o = p[16]),
              p[17] !== f || p[18] !== o
                ? ((r = (0, a.jsx)(y.OO, { children: (0, a.jsx)("p", { role: f, children: o }) })),
                  (p[17] = f),
                  (p[18] = o),
                  (p[19] = r))
                : (r = p[19]),
              p[20] === Symbol.for("react.memo_cache_sentinel")
                ? ((s = (0, a.jsx)(u.A, {
                    id: "enterpriseSurvey.close",
                    defaultMessage: "Close survey",
                    description: "Dismisses a survey that is loading or unavailable",
                  })),
                  (p[20] = s))
                : (s = p[20]),
              p[21] !== e.onClose
                ? ((l = (0, a.jsx)(m.$, { onClick: e.onClose, children: s })), (p[21] = e.onClose), (p[22] = l))
                : (l = p[22]),
              p[23] !== k || p[24] !== _
                ? ((d = k
                    ? null
                    : (0, a.jsx)(m.$, {
                        onClick: () => void _(),
                        children: (0, a.jsx)(u.A, {
                          id: "enterpriseSurvey.retry",
                          defaultMessage: "Try again",
                          description: "Retry loading the workspace policy for a survey",
                        }),
                      })),
                  (p[23] = k),
                  (p[24] = _),
                  (p[25] = d))
                : (d = p[25]),
              p[26] !== l || p[27] !== d
                ? ((c = (0, a.jsx)(y.OO, { children: (0, a.jsxs)(y.Es, { children: [l, d] }) })),
                  (p[26] = l),
                  (p[27] = d),
                  (p[28] = c))
                : (c = p[28]),
              p[29] !== c || p[30] !== r
                ? ((g = (0, a.jsxs)(y.R4, { children: [i, r, c] })), (p[29] = c), (p[30] = r), (p[31] = g))
                : (g = p[31]),
              p[32] !== g || p[33] !== t
                ? ((h = (0, a.jsx)(v.lG, { open: !0, onOpenChange: t, children: g })),
                  (p[32] = g),
                  (p[33] = t),
                  (p[34] = h))
                : (h = p[34]),
              (n = h))
            break e
          }
          ;((t = I),
            (i = `${e.accountId}:${e.userId}:${e.surveyId}`),
            (r = e),
            (s = (0, w.V$)(o.plan_type) ? "edu" : "default"))
        }
        ;((p[0] = h),
          (p[1] = S),
          (p[2] = M),
          (p[3] = k),
          (p[4] = e),
          (p[5] = _),
          (p[6] = f),
          (p[7] = t),
          (p[8] = i),
          (p[9] = r),
          (p[10] = s),
          (p[11] = n))
      } else ((t = p[7]), (i = p[8]), (r = p[9]), (s = p[10]), (n = p[11]))
      return n !== Symbol.for("react.early_return_sentinel")
        ? n
        : (p[35] !== t || p[36] !== i || p[37] !== r || p[38] !== s
            ? ((d = (0, a.jsx)(t, { ...r, variant: s }, i)),
              (p[35] = t),
              (p[36] = i),
              (p[37] = r),
              (p[38] = s),
              (p[39] = d))
            : (d = p[39]),
          d)
    }
    function I(e) {
      let t,
        i,
        l,
        c,
        g,
        w,
        q,
        I,
        x,
        A,
        T,
        j = (0, o.c)(26),
        { accountId: D, userId: P, surveyId: V, surveyName: N, onClose: C, onCompleted: Q, variant: E } = e,
        L = (0, p.A)(),
        G = (0, n.jE)(),
        U = (function (e, t = "default", { includeOpenEndedFeedback: i = !0 } = {}) {
          if ("edu" === t) {
            let t = [
                { id: "strongly_agree", label: e.formatMessage(b.workQualityOptionStronglyAgree) },
                { id: "agree", label: e.formatMessage(b.workQualityOptionAgree) },
                {
                  id: "neither_agree_nor_disagree",
                  label: e.formatMessage(b.workQualityOptionNeitherAgreeNorDisagree),
                },
                { id: "disagree", label: e.formatMessage(b.workQualityOptionDisagree) },
                { id: "strongly_disagree", label: e.formatMessage(b.workQualityOptionStronglyDisagree) },
              ],
              a = [
                k({
                  id: "productivity_impact",
                  prompt: e.formatMessage(b.eduProductivityImpactPrompt),
                  options: [
                    {
                      id: "significantly_increased",
                      label: e.formatMessage(b.productivityImpactOptionSignificantlyIncreased),
                    },
                    {
                      id: "moderately_increased",
                      label: e.formatMessage(b.productivityImpactOptionModeratelyIncreased),
                    },
                    { id: "slight_increase", label: e.formatMessage(b.productivityImpactOptionSlightIncrease) },
                    { id: "no_impact", label: e.formatMessage(b.productivityImpactOptionNoImpact) },
                    { id: "decreased", label: e.formatMessage(b.productivityImpactOptionDecreased) },
                  ],
                }),
                k({
                  id: "hours_saved",
                  prompt: e.formatMessage(b.eduHoursSavedPrompt),
                  options: [
                    { id: "more_than_10", label: e.formatMessage(b.hoursSavedOptionMoreThan10) },
                    { id: "5_to_10", label: e.formatMessage(b.hoursSavedOption5To10) },
                    { id: "2_to_5", label: e.formatMessage(b.hoursSavedOption2To5) },
                    { id: "up_to_2", label: e.formatMessage(b.hoursSavedOptionUpTo2) },
                    { id: "0_hours", label: e.formatMessage(b.hoursSavedOption0Hours) },
                    { id: "decreased", label: e.formatMessage(b.hoursSavedOptionDecreased) },
                  ],
                }),
                k({ id: "work_quality_impact", prompt: e.formatMessage(b.eduWorkQualityPrompt), options: t }),
                k({
                  id: "work_satisfaction_impact",
                  prompt: e.formatMessage(b.eduWorkSatisfactionImpactPrompt),
                  options: t,
                }),
                k({
                  id: "learn_teach_new_concepts_approaches",
                  prompt: e.formatMessage(b.eduLearningConceptsImpactPrompt),
                  options: t,
                }),
                k({
                  id: "creative_thinking_impact",
                  prompt: e.formatMessage(b.eduCreativeThinkingImpactPrompt),
                  options: t,
                }),
              ]
            return (i && a.push(M(e)), a)
          }
          let a = [
            k({
              id: "productivity_impact",
              prompt: e.formatMessage(b.productivityImpactPrompt),
              options: [
                {
                  id: "significantly_increased",
                  label: e.formatMessage(b.productivityImpactOptionSignificantlyIncreased),
                },
                { id: "moderately_increased", label: e.formatMessage(b.productivityImpactOptionModeratelyIncreased) },
                { id: "slight_increase", label: e.formatMessage(b.productivityImpactOptionSlightIncrease) },
                { id: "no_impact", label: e.formatMessage(b.productivityImpactOptionNoImpact) },
                { id: "decreased", label: e.formatMessage(b.productivityImpactOptionDecreased) },
              ],
            }),
            k({
              id: "hours_saved",
              prompt: e.formatMessage(b.hoursSavedPrompt),
              options: [
                { id: "more_than_10", label: e.formatMessage(b.hoursSavedOptionMoreThan10) },
                { id: "5_to_10", label: e.formatMessage(b.hoursSavedOption5To10) },
                { id: "2_to_5", label: e.formatMessage(b.hoursSavedOption2To5) },
                { id: "up_to_2", label: e.formatMessage(b.hoursSavedOptionUpTo2) },
                { id: "0_hours", label: e.formatMessage(b.hoursSavedOption0Hours) },
                { id: "decreased", label: e.formatMessage(b.hoursSavedOptionDecreased) },
              ],
            }),
            k({
              id: "work_quality_impact",
              prompt: e.formatMessage(b.workQualityPrompt),
              options: [
                { id: "strongly_agree", label: e.formatMessage(b.workQualityOptionStronglyAgree) },
                { id: "agree", label: e.formatMessage(b.workQualityOptionAgree) },
                {
                  id: "neither_agree_nor_disagree",
                  label: e.formatMessage(b.workQualityOptionNeitherAgreeNorDisagree),
                },
                { id: "disagree", label: e.formatMessage(b.workQualityOptionDisagree) },
                { id: "strongly_disagree", label: e.formatMessage(b.workQualityOptionStronglyDisagree) },
              ],
            }),
            k({
              id: "work_satisfaction_impact",
              prompt: e.formatMessage(b.workSatisfactionImpactPrompt),
              options: [
                { id: "strongly_agree", label: e.formatMessage(b.workSatisfactionImpactOptionStronglyAgree) },
                { id: "agree", label: e.formatMessage(b.workSatisfactionImpactOptionAgree) },
                {
                  id: "neither_agree_nor_disagree",
                  label: e.formatMessage(b.workSatisfactionImpactOptionNeitherAgreeNorDisagree),
                },
                { id: "disagree", label: e.formatMessage(b.workSatisfactionImpactOptionDisagree) },
                { id: "strongly_disagree", label: e.formatMessage(b.workSatisfactionImpactOptionStronglyDisagree) },
              ],
            }),
            k({
              id: "new_tasks_ability",
              prompt: e.formatMessage(b.newTasksAbilityPrompt),
              options: [
                { id: "strongly_agree", label: e.formatMessage(b.newTasksAbilityOptionStronglyAgree) },
                { id: "agree", label: e.formatMessage(b.newTasksAbilityOptionAgree) },
                {
                  id: "neither_agree_nor_disagree",
                  label: e.formatMessage(b.newTasksAbilityOptionNeitherAgreeNorDisagree),
                },
                { id: "disagree", label: e.formatMessage(b.newTasksAbilityOptionDisagree) },
                { id: "strongly_disagree", label: e.formatMessage(b.newTasksAbilityOptionStronglyDisagree) },
              ],
            }),
            k({
              id: "stakeholder_service_impact",
              prompt: e.formatMessage(b.stakeholderServicePrompt),
              options: [
                { id: "strongly_agree", label: e.formatMessage(b.stakeholderServiceOptionStronglyAgree) },
                { id: "agree", label: e.formatMessage(b.stakeholderServiceOptionAgree) },
                {
                  id: "neither_agree_nor_disagree",
                  label: e.formatMessage(b.stakeholderServiceOptionNeitherAgreeNorDisagree),
                },
                { id: "disagree", label: e.formatMessage(b.stakeholderServiceOptionDisagree) },
                { id: "strongly_disagree", label: e.formatMessage(b.stakeholderServiceOptionStronglyDisagree) },
              ],
            }),
          ]
          return (i && a.push(M(e)), a)
        })(L, E, { includeOpenEndedFeedback: !(0, S.Zj)("2221440816") })
      j[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = {}), (j[0] = t)) : (t = j[0])
      let [K, z] = (0, d.useState)(t),
        [H, R] = (0, d.useState)("idle"),
        W = (0, d.useRef)(null),
        $ = (0, d.useRef)(!1)
      ;(j[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = () => () => {
            W.current?.abort()
          }),
          (l = []),
          (j[1] = i),
          (j[2] = l))
        : ((i = j[1]), (l = j[2])),
        (0, d.useEffect)(i, l),
        j[3] !== K ? ((c = (e) => K[e.id]?.trim()), (j[3] = K), (j[4] = c)) : (c = j[4]))
      let B = U.some(c),
        F = "pending" === H
      j[5] !== C
        ? ((g = () => {
            $.current || C()
          }),
          (j[5] = C),
          (j[6] = g))
        : (g = j[6])
      let Y = g,
        J = v.lG
      j[7] !== Y
        ? ((w = (e) => {
            e || Y()
          }),
          (j[7] = Y),
          (j[8] = w))
        : (w = j[8])
      let Z = !F
      ;(j[9] !== L ? ((q = L.formatMessage(b.modalLabel)), (j[9] = L), (j[10] = q)) : (q = j[10]),
        j[11] !== q ? ((I = { "aria-label": q, "aria-labelledby": void 0 }), (j[11] = q), (j[12] = I)) : (I = j[12]))
      let X = y.R4,
        ee = (e) => {
          ;(e.preventDefault(),
            (async () => {
              if ($.current) return
              ;(($.current = !0), W.current?.abort())
              let e = new AbortController()
              ;((W.current = e), R("pending"))
              try {
                let t = await (async function ({
                  identity: e,
                  signal: t,
                  surveyId: i,
                  surveyName: a,
                  questions: o,
                  answers: r,
                }) {
                  let s = []
                  for (let e of o) {
                    let t = r[e.id],
                      o = "single_select" === e.kind ? e.options.find(({ id: e }) => e === t) : void 0,
                      n = "free_text" === e.kind ? t?.trim().slice(0, e.maxLength) : o?.label
                    n &&
                      s.push({
                        survey_id: i,
                        survey_name: a,
                        question_id: e.id,
                        question_text: e.prompt,
                        answer_id: o?.id ?? "free_text",
                        answer_text: n,
                      })
                  }
                  if (0 === s.length) return !1
                  let n = { "ChatGPT-Account-ID": e.accountId }
                  return (
                    await _.Request.safePost("/enterprise_surveys/{survey_id}/complete", {
                      parameters: { path: { survey_id: i } },
                      additionalHeaders: n,
                      expectedIdentity: e,
                      signal: t,
                    }),
                    t.throwIfAborted(),
                    Promise.allSettled(
                      s.map((t) =>
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
                              enterprise_survey_submission: t,
                            },
                          },
                        }),
                      ),
                    ),
                    !0
                  )
                })({
                  identity: { accountId: D, userId: P },
                  signal: e.signal,
                  surveyId: V,
                  surveyName: N,
                  questions: U,
                  answers: K,
                })
                ;(R(t ? "completed" : "idle"), t && G.invalidateQueries({ queryKey: ["enterpriseSurvey"] }))
              } catch {
                e.signal.aborted || R("error")
              }
              $.current = !1
            })())
        },
        et = "completed" === H ? b.completionTitle : b.title
      j[13] !== et
        ? ((x = (0, a.jsx)(y.c7, {
            className: "shrink-0",
            titleClassName: "pe-8",
            title: (0, a.jsx)(v.L3, { children: (0, a.jsx)(u.A, { ...et }) }),
          })),
          (j[13] = et),
          (j[14] = x))
        : (x = j[14])
      let ei =
        "completed" === H
          ? (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(y.OO, {
                  children: (0, a.jsx)("p", { children: (0, a.jsx)(u.A, { ...b.completionMessage }) }),
                }),
                (0, a.jsx)(y.OO, {
                  children: (0, a.jsx)(y.Es, {
                    children: (0, a.jsx)(m.$, {
                      type: "button",
                      color: "primary",
                      onClick: () => {
                        ;(Q?.(), C())
                      },
                      children: (0, a.jsx)(u.A, { ...b.completionClose }),
                    }),
                  }),
                }),
              ],
            })
          : (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)("div", {
                  className: "min-h-0 overflow-y-auto",
                  children: U.map((e, t) =>
                    (0, a.jsx)(
                      y.OO,
                      {
                        children: (0, a.jsxs)("fieldset", {
                          className: "flex flex-col gap-3",
                          disabled: F,
                          children: [
                            (0, a.jsx)("legend", {
                              className: "pb-2 text-sm font-medium",
                              children: (0, a.jsx)(u.A, {
                                ...b.questionLabel,
                                values: { index: t + 1, question: e.prompt },
                              }),
                            }),
                            "free_text" === e.kind
                              ? (0, a.jsx)(f.TM, {
                                  "aria-label": e.prompt,
                                  value: K[e.id] ?? "",
                                  maxLength: e.maxLength,
                                  onChange: (t) => z({ ...K, [e.id]: t.currentTarget.value }),
                                })
                              : (0, a.jsx)(r.z, {
                                  name: e.id,
                                  value: K[e.id] ?? "",
                                  direction: "col",
                                  disabled: F,
                                  "aria-label": e.prompt,
                                  onChange: (t) => z({ ...K, [e.id]: t }),
                                  children: e.options.map(O),
                                }),
                          ],
                        }),
                      },
                      e.id,
                    ),
                  ),
                }),
                (0, a.jsx)(y.OO, {
                  className: "shrink-0",
                  children: (0, a.jsxs)("div", {
                    className: "flex items-start gap-2 text-sm text-secondary",
                    children: [
                      (0, a.jsx)("p", { children: (0, a.jsx)(u.A, { ...b.dataUseSummary }) }),
                      (0, a.jsx)(s.m, {
                        interactive: !0,
                        side: "top",
                        content: (0, a.jsx)("span", {
                          className: "select-text",
                          children: (0, a.jsx)(u.A, { ...b.dataUseDisclosureBody }),
                        }),
                        children: (0, a.jsx)(s.m.TriggerDecorator, {
                          unstyled: !0,
                          "aria-label": L.formatMessage(b.dataUseDisclosureLabel),
                          children: (0, a.jsx)("span", { children: (0, a.jsx)(h.ehD, {}) }),
                        }),
                      }),
                    ],
                  }),
                }),
                "error" === H
                  ? (0, a.jsx)(y.OO, {
                      className: "shrink-0",
                      children: (0, a.jsx)("p", {
                        role: "alert",
                        className: "text-sm text-danger",
                        children: (0, a.jsx)(u.A, { ...b.error }),
                      }),
                    })
                  : null,
                (0, a.jsx)(y.OO, {
                  className: "shrink-0",
                  children: (0, a.jsx)(y.Es, {
                    children: (0, a.jsx)(m.$, {
                      type: "submit",
                      color: "primary",
                      disabled: !B || F,
                      children: (0, a.jsx)(u.A, { ...(F ? b.submitting : b.submit) }),
                    }),
                  }),
                }),
              ],
            })
      return (
        j[15] !== X || j[16] !== ee || j[17] !== x || j[18] !== ei
          ? ((A = (0, a.jsxs)(X, { as: "form", size: "scrollable", onSubmit: ee, children: [x, ei] })),
            (j[15] = X),
            (j[16] = ee),
            (j[17] = x),
            (j[18] = ei),
            (j[19] = A))
          : (A = j[19]),
        j[20] !== J || j[21] !== I || j[22] !== A || j[23] !== w || j[24] !== Z
          ? ((T = (0, a.jsx)(J, {
              open: !0,
              onOpenChange: w,
              size: "wide",
              showDialogClose: Z,
              contentProps: I,
              children: A,
            })),
            (j[20] = J),
            (j[21] = I),
            (j[22] = A),
            (j[23] = w),
            (j[24] = Z),
            (j[25] = T))
          : (T = j[25]),
        T
      )
    }
    function O(e) {
      return (0, a.jsx)(r.z.Item, { value: e.id, children: e.label }, e.id)
    }
  },
}
//# sourceMappingURL=992331.fa699da67b.js.map
