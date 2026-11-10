export const __rspack_esm_ids = [457705]
export const __webpack_modules__ = {
  MLuX(e, s, t) {
    t.d(s, { CourseCustomize: () => P })
    var r = t("ABep"),
      a = t("QosV"),
      i = t("zTeN"),
      o = t("zd8w"),
      n = t("SPnB"),
      l = t("nlNF"),
      c = t("xqnZ"),
      d = t("Oj9r"),
      u = t("LtEv"),
      g = t("OOaz"),
      h = t("Wf1j"),
      m = t("oyxz"),
      p = t("Qgfj"),
      f = t("Qr2V"),
      x = t("ygO2"),
      b = t("JNtf"),
      v = t("mUDD"),
      y = t("zLIa")
    let j = (0, p.YK)({
        content: {
          id: "learning.course.customize.content",
          defaultMessage: "Content",
          description:
            "Category for changing what a language course teaches, including the amount of foundational or advanced material.",
        },
        contentPlaceholder: {
          id: "learning.course.customize.contentPlaceholder",
          defaultMessage: "For example, more grammar practice with simpler explanations",
          description: "Example of a custom request about lesson content or how advanced it should be.",
        },
        basics: {
          id: "learning.course.customize.basics",
          defaultMessage: "More basics",
          description: "Request more foundational material compared with the learner's current lessons.",
        },
        depth: {
          id: "learning.course.customize.depth",
          defaultMessage: "Go deeper",
          description: "Request more depth and advanced material compared with the learner's current lessons.",
        },
        length: {
          id: "learning.course.customize.length",
          defaultMessage: "Lesson length",
          description: "Category of changes a learner can request for their course: Lesson length.",
        },
        lengthPlaceholder: {
          id: "learning.course.customize.lengthPlaceholder",
          defaultMessage: "For example, lessons I can finish in five minutes",
          description: "Example for the optional free-text request about lesson length.",
        },
        shorter: {
          id: "learning.course.customize.shorter",
          defaultMessage: "Shorter",
          description:
            "Selectable request to change lesson length in a learning course. This is relative to the current lessons, not an absolute level.",
        },
        longer: {
          id: "learning.course.customize.longer",
          defaultMessage: "Longer",
          description:
            "Selectable request to change lesson length in a learning course. This is relative to the current lessons, not an absolute level.",
        },
        topics: {
          id: "learning.course.customize.topics",
          defaultMessage: "Topics & goals",
          description: "Category of changes a learner can request for their course: Topics & goals.",
        },
        topicsPlaceholder: {
          id: "learning.course.customize.topicsPlaceholder",
          defaultMessage: "For example, bird words, cooking, or preparing for a trip",
          description:
            "Example for the optional free-text request about topics, personal interests, and learning goals.",
        },
        workCommunication: {
          id: "learning.course.customize.workCommunication",
          defaultMessage: "Work communication",
          description: "Selectable request to change goals in a learning course.",
        },
        travelPhrases: {
          id: "learning.course.customize.travelPhrases",
          defaultMessage: "Travel phrases",
          description: "Selectable request to change goals in a learning course.",
        },
        everydayConversation: {
          id: "learning.course.customize.everydayConversation",
          defaultMessage: "Everyday conversation",
          description: "Selectable request to change goals in a learning course.",
        },
        exercises: {
          id: "learning.course.customize.exercises",
          defaultMessage: "Practice",
          description: "Category of changes a learner can request for their course: Practice.",
        },
        exercisesPlaceholder: {
          id: "learning.course.customize.exercisesPlaceholder",
          defaultMessage: "For example, use pictures of the birds we’re learning about",
          description: "Example for the optional free-text request about how we practice.",
        },
        moreSpeaking: {
          id: "learning.course.customize.moreSpeaking",
          defaultMessage: "More speaking",
          description: "Selectable request to change how we practice in a learning course.",
        },
        noWriting: {
          id: "learning.course.customize.noWriting",
          defaultMessage: "No writing",
          description: "Selectable request to change how we practice in a learning course.",
        },
        moreImages: {
          id: "learning.course.customize.moreImages",
          defaultMessage: "More images",
          description: "Selectable request to change how we practice in a learning course.",
        },
        review: {
          id: "learning.course.customize.review",
          defaultMessage: "Review",
          description: "Category of changes a learner can request for their course: Review.",
        },
        reviewPlaceholder: {
          id: "learning.course.customize.reviewPlaceholder",
          defaultMessage: "For example, revisit the words I keep forgetting",
          description: "Example for the optional free-text request about review.",
        },
        reviewMistakes: {
          id: "learning.course.customize.reviewMistakes",
          defaultMessage: "Review my mistakes",
          description: "Selectable request to change review in a learning course.",
        },
        reviewEarlier: {
          id: "learning.course.customize.reviewEarlier",
          defaultMessage: "Revisit earlier lessons",
          description: "Selectable request to change review in a learning course.",
        },
        lessRepetition: {
          id: "learning.course.customize.lessRepetition",
          defaultMessage: "Less repetition",
          description: "Selectable request to change review in a learning course.",
        },
        other: {
          id: "learning.course.customize.other",
          defaultMessage: "Other changes",
          description: "Category of changes a learner can request for their course: Other changes.",
        },
        otherPlaceholder: {
          id: "learning.course.customize.otherPlaceholder",
          defaultMessage: "For example, a different tone, lesson order, or anything else",
          description: "Example for the optional free-text request about other changes.",
        },
      }),
      w = [
        {
          id: "content",
          label: j.content,
          placeholder: j.contentPlaceholder,
          exclusive: !0,
          options: [j.basics, j.depth],
        },
        {
          id: "length",
          label: j.length,
          placeholder: j.lengthPlaceholder,
          exclusive: !0,
          options: [j.shorter, j.longer],
        },
        {
          id: "topics",
          label: j.topics,
          placeholder: j.topicsPlaceholder,
          exclusive: !1,
          options: [j.workCommunication, j.travelPhrases, j.everydayConversation],
        },
        {
          id: "exercises",
          label: j.exercises,
          placeholder: j.exercisesPlaceholder,
          exclusive: !1,
          options: [j.moreSpeaking, j.noWriting, j.moreImages],
        },
        {
          id: "review",
          label: j.review,
          placeholder: j.reviewPlaceholder,
          exclusive: !1,
          options: [j.reviewMistakes, j.reviewEarlier, j.lessRepetition],
        },
        { id: "other", label: j.other, placeholder: j.otherPlaceholder, exclusive: !1, options: [] },
      ],
      z = { selected: [], details: "", other: !1 }
    function M(e) {
      let s,
        t,
        i,
        n,
        l,
        c,
        d,
        u,
        g,
        j,
        M,
        S,
        C,
        P,
        A,
        _,
        k,
        N,
        O,
        I,
        E,
        F,
        T,
        R,
        $,
        L = (0, a.c)(68),
        { title: D, onClose: G, onSubmit: W } = e,
        K = (0, h.A)(),
        Q = (0, o.useId)(),
        [B, U] = (0, o.useState)("content")
      L[0] === Symbol.for("react.memo_cache_sentinel") ? ((s = {}), (L[0] = s)) : (s = L[0])
      let [V, Y] = (0, o.useState)(s),
        [J, X] = (0, o.useState)("idle"),
        Z = "submitting" === J,
        H = (0, o.useRef)(!1)
      L[1] !== V
        ? ((t = w.flatMap((e) => {
            let { selected: s, details: t } = V[e.id] ?? z,
              r = t.trim()
            return s.length > 0 || r.length > 0 ? [{ category: e, options: s, details: r }] : []
          })),
          (L[1] = V),
          (L[2] = t))
        : (t = L[2])
      let ee = t
      L[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = function (e, s) {
            ;(Y((t) => ({ ...t, [e]: s(t[e] ?? z) })), X("idle"))
          }),
          (L[3] = i))
        : (i = L[3])
      let es = i
      L[4] !== ee || L[5] !== K || L[6] !== G || L[7] !== W || L[8] !== D
        ? ((n = async function () {
            if (H.current || 0 === ee.length) return
            ;((H.current = !0), X("submitting"))
            let e = [
              K.formatMessage(
                {
                  id: "learning.course.customize.request",
                  defaultMessage:
                    "Please adjust my language learning course “{title}” based on these requests. Interpret changes relative to my current lessons:",
                  description:
                    "Opening of the single chat message sent when a learner submits course changes. Title is the saved course title; easier, harder, shorter, and longer are relative to current lessons.",
                },
                { title: D },
              ),
              ...ee.map((e) => {
                let { category: s, options: t, details: r } = e
                return [K.formatMessage(s.label), ...t.map((e) => `- ${K.formatMessage(e)}`), ...(r ? [r] : [])].join(
                  "\n",
                )
              }),
            ].join("\n\n")
            try {
              let s = await W(e)
              ;(X(s ? "idle" : "failed"), s && G())
            } catch {
              X("failed")
            }
            H.current = !1
          }),
          (L[4] = ee),
          (L[5] = K),
          (L[6] = G),
          (L[7] = W),
          (L[8] = D),
          (L[9] = n))
        : (n = L[9])
      let et = n
      if (
        (L[10] !== G
          ? ((l = (e) => {
              e || G()
            }),
            (L[10] = G),
            (L[11] = l))
          : (l = L[11]),
        L[12] !== et
          ? ((c = (e) => {
              ;(e.preventDefault(), et())
            }),
            (L[12] = et),
            (L[13] = c))
          : (c = L[13]),
        L[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, r.jsx)(b.L3, {
              children: (0, r.jsx)(m.A, {
                id: "learning.course.customize.title",
                defaultMessage: "Adjust your course",
                description: "Title of the dialog for composing a request to adjust a learning course",
              }),
            })),
            (L[14] = d))
          : (d = L[14]),
        L[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, r.jsx)(v.c7, {
              title: d,
              subtitle: (0, r.jsx)(b.rr, {
                children: (0, r.jsx)(m.A, {
                  id: "learning.course.customize.description",
                  defaultMessage: "Add changes in any category, then send them together to your tutor",
                  description:
                    "Explains that multiple categories and presets can be combined into one course customization request",
                }),
              }),
            })),
            (L[15] = u))
          : (u = L[15]),
        L[16] !== D
          ? ((g = (0, r.jsx)("p", { className: "text-sm text-secondary", children: D })), (L[16] = D), (L[17] = g))
          : (g = L[17]),
        L[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, r.jsx)("legend", {
              className: "sr-only",
              children: (0, r.jsx)(m.A, {
                id: "learning.course.customize.categories",
                defaultMessage: "Course changes",
                description: "Accessible name for the group of course customization categories",
              }),
            })),
            (L[18] = j))
          : (j = L[18]),
        L[19] !== B || L[20] !== V || L[21] !== K
          ? ((M = w.map((e) => {
              let s = V[e.id] ?? z,
                t = s.selected.length + +!!s.details.trim()
              return (0, r.jsx)(
                x.$,
                {
                  type: "button",
                  size: "dialog",
                  radius: "large",
                  color: B === e.id ? "primary" : "outline",
                  "aria-label": K.formatMessage(e.label),
                  "aria-pressed": B === e.id,
                  onClick: () => U(e.id),
                  children: (0, r.jsxs)("span", {
                    className: "flex w-full items-center justify-between gap-2",
                    children: [
                      (0, r.jsx)("span", { children: (0, r.jsx)(m.A, { ...e.label }) }),
                      t > 0 && (0, r.jsx)(p.Gr, { value: t }),
                    ],
                  }),
                },
                e.id,
              )
            })),
            (L[19] = B),
            (L[20] = V),
            (L[21] = K),
            (L[22] = M))
          : (M = L[22]),
        L[23] !== Z || L[24] !== M
          ? ((S = (0, r.jsxs)("fieldset", { disabled: Z, className: "grid grid-cols-2 gap-2", children: [j, M] })),
            (L[23] = Z),
            (L[24] = M),
            (L[25] = S))
          : (S = L[25]),
        L[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, r.jsx)("div", { className: "w-full border-t border-subtle", "aria-hidden": "true" })),
            (L[26] = C))
          : (C = L[26]),
        L[27] !== S || L[28] !== g
          ? ((P = (0, r.jsxs)(v.OO, { className: "gap-3", children: [u, g, S, C] })),
            (L[27] = S),
            (L[28] = g),
            (L[29] = P))
          : (P = L[29]),
        L[30] !== B || L[31] !== V || L[32] !== Q || L[33] !== K || L[34] !== Z)
      ) {
        let e, s
        ;(L[36] !== B ? ((e = (e) => e.id === B), (L[36] = B), (L[37] = e)) : (e = L[37]),
          L[38] !== V || L[39] !== Q || L[40] !== K || L[41] !== Z
            ? ((s = (e) => {
                let { selected: s, details: t, other: a } = V[e.id] ?? z,
                  i = s.length > 0 || a || t.length > 0 || 0 === e.options.length,
                  o = `${Q}-${e.id}`,
                  n = e.exclusive ? f.xu : f.b0
                return (0, r.jsxs)(
                  "fieldset",
                  {
                    disabled: Z,
                    className: "flex min-w-0 flex-col gap-3",
                    children: [
                      (0, r.jsx)("legend", { className: "sr-only", children: (0, r.jsx)(m.A, { ...e.label }) }),
                      (0, r.jsxs)("div", {
                        className: "flex items-center justify-between gap-2",
                        children: [
                          (0, r.jsx)("h3", {
                            className: "text-sm font-semibold",
                            children: (0, r.jsx)(m.A, { ...e.label }),
                          }),
                          (s.length > 0 || t.length > 0 || a) &&
                            (0, r.jsx)(x.$, {
                              type: "button",
                              size: "dialog",
                              color: "ghost",
                              disabled: Z,
                              onClick: () => es(e.id, q),
                              children: (0, r.jsx)(m.A, {
                                id: "learning.course.customize.clearCategory",
                                defaultMessage: "Clear",
                                description:
                                  "Clear the selected presets and written details in the currently open course customization category, preserving changes in other categories.",
                              }),
                            }),
                        ],
                      }),
                      (0, r.jsxs)("div", {
                        className: "flex flex-col gap-3",
                        children: [
                          e.options.length > 0 &&
                            (0, r.jsx)("p", {
                              className: "text-sm text-secondary",
                              children: e.exclusive
                                ? (0, r.jsx)(m.A, {
                                    id: "learning.course.customize.chooseOne",
                                    defaultMessage: "Choose one, relative to your current lessons",
                                    description:
                                      "Instructions above mutually exclusive course changes such as more basics versus going deeper, or shorter versus longer lessons.",
                                  })
                                : (0, r.jsx)(m.A, {
                                    id: "learning.course.customize.chooseSeveral",
                                    defaultMessage: "Select any that apply",
                                    description:
                                      "Instructions above course change checkboxes; multiple presets can be selected.",
                                  }),
                            }),
                          (0, r.jsxs)("div", {
                            className: "flex flex-col gap-1",
                            children: [
                              e.options.map((t, a) =>
                                (0, r.jsxs)(
                                  n,
                                  {
                                    autoFocus: !1,
                                    checked: s.includes(t),
                                    invalid: !1,
                                    name: `${o}-preset`,
                                    type: e.exclusive ? "radio" : "checkbox",
                                    value: t.id,
                                    onChange: () =>
                                      es(e.id, (s) => ({
                                        ...s,
                                        other: !e.exclusive && s.other,
                                        selected: s.selected.includes(t)
                                          ? s.selected.filter((e) => e !== t)
                                          : [...(e.exclusive ? [] : s.selected), t],
                                      })),
                                    children: [
                                      e.exclusive &&
                                        (0, r.jsx)(f.PP, {
                                          selected: s.includes(t),
                                          variant: "number",
                                          index: a + 1,
                                          showNumber: !1,
                                        }),
                                      (0, r.jsx)(m.A, { ...t }),
                                    ],
                                  },
                                  t.id,
                                ),
                              ),
                              e.options.length > 0 &&
                                (0, r.jsxs)(n, {
                                  autoFocus: !1,
                                  checked: a,
                                  invalid: !1,
                                  name: `${o}-preset`,
                                  type: e.exclusive ? "radio" : "checkbox",
                                  value: "other",
                                  onChange: () =>
                                    es(e.id, (s) => ({
                                      ...s,
                                      selected: e.exclusive ? [] : s.selected,
                                      other: !s.other,
                                    })),
                                  children: [
                                    e.exclusive &&
                                      (0, r.jsx)(f.PP, {
                                        selected: a,
                                        variant: "number",
                                        index: e.options.length + 1,
                                        showNumber: !1,
                                      }),
                                    (0, r.jsx)(m.A, {
                                      id: "learning.course.customize.otherOption",
                                      defaultMessage: "Other",
                                      description:
                                        "Choose to write any custom request within a course adjustment category",
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          i &&
                            (0, r.jsxs)("div", {
                              className: "flex flex-col gap-2",
                              children: [
                                (0, r.jsx)("label", {
                                  htmlFor: o,
                                  className: "text-sm text-secondary",
                                  children: (0, r.jsx)(m.A, {
                                    id: "learning.course.customize.details",
                                    defaultMessage: "Add details (optional)",
                                    description:
                                      "Label for an optional free-text request within the expanded course adjustment category",
                                  }),
                                }),
                                (0, r.jsx)(y.TM, {
                                  id: o,
                                  name: e.id,
                                  rows: 2,
                                  variant: "outlined",
                                  placeholder: K.formatMessage(e.placeholder),
                                  value: t,
                                  onChange: (s) => es(e.id, (e) => ({ ...e, details: s.target.value })),
                                }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  },
                  e.id,
                )
              }),
              (L[38] = V),
              (L[39] = Q),
              (L[40] = K),
              (L[41] = Z),
              (L[42] = s))
            : (s = L[42]),
          (A = w.filter(e).map(s)),
          (L[30] = B),
          (L[31] = V),
          (L[32] = Q),
          (L[33] = K),
          (L[34] = Z),
          (L[35] = A))
      } else A = L[35]
      ;(L[43] !== A
        ? ((_ = (0, r.jsx)(v.OO, { className: "min-h-0 overflow-y-auto", children: A })), (L[43] = A), (L[44] = _))
        : (_ = L[44]),
        L[45] !== J
          ? ((k =
              "failed" === J &&
              (0, r.jsx)("p", {
                role: "alert",
                className: "text-sm text-danger",
                children: (0, r.jsx)(m.A, {
                  id: "learning.course.customize.failed",
                  defaultMessage: "Couldn’t send your request. Your changes are still here—please try again",
                  description:
                    "Failure message when a course customization chat turn could not be submitted; selections and text are retained",
                }),
              })),
            (L[45] = J),
            (L[46] = k))
          : (k = L[46]),
        L[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, r.jsx)(m.A, {
              id: "learning.course.customize.cancel",
              defaultMessage: "Cancel",
              description: "Dismiss course customization without sending a change request",
            })),
            (L[47] = N))
          : (N = L[47]),
        L[48] !== G
          ? ((O = (0, r.jsx)(x.$, { type: "button", color: "secondary", onClick: G, children: N })),
            (L[48] = G),
            (L[49] = O))
          : (O = L[49]))
      let er = 0 === ee.length || Z
      return (
        L[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, r.jsx)(m.A, {
              id: "learning.course.customize.send",
              defaultMessage: "Send request",
              description: "Submit all selected course changes and details together as one chat turn",
            })),
            (L[50] = I))
          : (I = L[50]),
        L[51] !== Z || L[52] !== er
          ? ((E = (0, r.jsx)(x.$, { type: "submit", color: "primary", disabled: er, loading: Z, children: I })),
            (L[51] = Z),
            (L[52] = er),
            (L[53] = E))
          : (E = L[53]),
        L[54] !== O || L[55] !== E
          ? ((F = (0, r.jsxs)(v.Es, { children: [O, E] })), (L[54] = O), (L[55] = E), (L[56] = F))
          : (F = L[56]),
        L[57] !== k || L[58] !== F
          ? ((T = (0, r.jsxs)(v.OO, { children: [k, F] })), (L[57] = k), (L[58] = F), (L[59] = T))
          : (T = L[59]),
        L[60] !== P || L[61] !== _ || L[62] !== T || L[63] !== c
          ? ((R = (0, r.jsxs)(v.R4, { as: "form", size: "viewport", onSubmit: c, children: [P, _, T] })),
            (L[60] = P),
            (L[61] = _),
            (L[62] = T),
            (L[63] = c),
            (L[64] = R))
          : (R = L[64]),
        L[65] !== R || L[66] !== l
          ? (($ = (0, r.jsx)(b.lG, { open: !0, variant: "chatgpt", size: "medium", onOpenChange: l, children: R })),
            (L[65] = R),
            (L[66] = l),
            (L[67] = $))
          : ($ = L[67]),
        $
      )
    }
    function q() {
      return z
    }
    var S = t("gLtK"),
      C = t("T33u")
    function P(e) {
      let s,
        t,
        h,
        m,
        p,
        f = (0, a.c)(21),
        { title: x, courseId: b, conversationId: v, accountId: y, userId: j, onClose: w } = e,
        z = (0, i.gh)(d.GD),
        [q] = (0, o.useState)(A)
      ;(f[0] !== q ? ((s = () => q.abort()), (f[0] = q), (f[1] = s)) : (s = f[1]),
        (0, c.fP)(s, q),
        f[2] !== y || f[3] !== v || f[4] !== b || f[5] !== q.signal.aborted || f[6] !== z || f[7] !== j
          ? ((t = () =>
              !q.signal.aborted &&
              "chatgpt-thread" === z.value.routeKind &&
              z.value.conversationId === v &&
              z.get(l.x2)?.pathname === z.value.pathname &&
              z.get(n.chatGptAuthenticatedAccountId$) === y &&
              z.get(n.o8) === j &&
              z.get(C.r$, v) === b),
            (f[2] = y),
            (f[3] = v),
            (f[4] = b),
            (f[5] = q.signal.aborted),
            (f[6] = z),
            (f[7] = j),
            (f[8] = t))
          : (t = f[8]))
      let P = t
      return (
        f[9] !== q || f[10] !== w
          ? ((h = () => {
              ;(q.abort(), w())
            }),
            (f[9] = q),
            (f[10] = w),
            (f[11] = h))
          : (h = f[11]),
        f[12] !== v || f[13] !== b || f[14] !== P || f[15] !== z
          ? ((m = async (e) =>
              !!P() &&
              (await (0, u.submitChatGptFollowUp)(z, {
                conversationId: (0, g.TF)(v),
                prompt: e,
                requireDispatchAcceptance: !0,
                isSubmissionCurrent: P,
                oneTurnDeveloperInstructions: [(0, S.z)(b)],
              })) &&
              P()),
            (f[12] = v),
            (f[13] = b),
            (f[14] = P),
            (f[15] = z),
            (f[16] = m))
          : (m = f[16]),
        f[17] !== h || f[18] !== m || f[19] !== x
          ? ((p = (0, r.jsx)(M, { title: x, onClose: h, onSubmit: m })),
            (f[17] = h),
            (f[18] = m),
            (f[19] = x),
            (f[20] = p))
          : (p = f[20]),
        p
      )
    }
    function A() {
      return new AbortController()
    }
  },
}
//# sourceMappingURL=457705.f3ff9fbb70.js.map
