export const __rspack_esm_ids = [442953]
export const __webpack_modules__ = {
  waJL(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      o = n("MnTr"),
      a = n("CqQF")
    n.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            n,
            l = (0, i.c)(6),
            { children: s, content: c, theme: d } = e
          return (
            l[0] !== s || l[1] !== c
              ? ((t = (e) =>
                  (0, r.jsx)(a.m, { cloneCustomTrigger: !0, portalContainer: e, tooltipContent: c, children: s })),
                (l[0] = s),
                (l[1] = c),
                (l[2] = t))
              : (t = l[2]),
            l[3] !== t || l[4] !== d
              ? ((n = (0, r.jsx)(o.s, { theme: d, children: t })), (l[3] = t), (l[4] = d), (l[5] = n))
              : (n = l[5]),
            n
          )
        },
      },
    )
  },
  gLtK(e, t, n) {
    n.d(
      t,
      {},
      {
        z: function (e) {
          return `The user's course adjustment request is for course_id ${JSON.stringify(e)}. Read that course and use the sectioned-conversations plugin to apply the requested changes. Treat relative adjustments as relative to the current lessons.`
        },
      },
    )
  },
  lbEC(e, t, n) {
    n.d(t, { CoursePanelTab: () => q })
    var r = n("ABep"),
      i = n("QosV"),
      o = n("AS6J"),
      a = n("gPi3"),
      l = n("FgYa"),
      s = n("T0Rc"),
      c = n("zTeN"),
      d = n("zd8w"),
      u = n("oyxz"),
      f = n("Wf1j"),
      h = n("ASxG"),
      m = n("E8Sp"),
      p = n("ZU27"),
      g = n("gbrq"),
      v = n("sdtd"),
      b = n("SPnB"),
      y = n("jEN2"),
      x = n("ygO2"),
      w = n("evwP"),
      S = n("Bbed"),
      E = n("nlNF"),
      C = n("Oj9r"),
      _ = n("JYRT"),
      M = n("a6Zv"),
      j = n("YYmx"),
      A = n("sWz1"),
      k = n("waJL"),
      I = n("jAnS"),
      L = n("SZCv"),
      N = n.n(L),
      T = n("Ghh3"),
      R = n("SeOM"),
      O = n("gLtK"),
      D = n("T33u")
    let F = { "learning-course-icon": R.t },
      P = h.object({
        handler: h.literal("client"),
        type: h.literal("open_conversation"),
        payload: h.object({ conversation_id: h.string() }),
      }),
      W = (0, S._)(async () => (await n.e(457705).then(n.bind(n, "MLuX"))).CourseCustomize)
    function q(e) {
      let t,
        n = (0, i.c)(19),
        { conversationId: o, courseId: a, accountId: l, userId: s, renderSlots: d, isActive: u, isVisible: f } = e,
        h = (0, c.gh)(C.GD),
        m = (0, c._U)(D.r$, o),
        p = (0, c.Ul)(b.chatGptAuthenticatedAccountId$),
        v = (0, c.Ul)(b.o8),
        y = (0, c.Ul)(g.SZ),
        x = (0, c.Ul)(g.yN),
        w = (0, c.Ul)(E.x2),
        S =
          u &&
          !1 !== f &&
          y &&
          x &&
          "chatgpt-thread" === h.value.routeKind &&
          h.value.conversationId === o &&
          m === a &&
          w?.pathname === h.value.pathname
      if (
        n[0] !== p ||
        n[1] !== o ||
        n[2] !== a ||
        n[3] !== l ||
        n[4] !== s ||
        n[5] !== d ||
        n[6] !== v ||
        n[7] !== S
      ) {
        let e, i
        ;(n[9] !== p || n[10] !== o || n[11] !== a || n[12] !== l || n[13] !== s || n[14] !== v || n[15] !== S
          ? ((e =
              S &&
              (null != p && null != v && l === p && s === v
                ? (0, r.jsx)(
                    z,
                    { accountId: p, userId: v, conversationId: o, courseId: a },
                    JSON.stringify([p, v, o, a]),
                  )
                : (0, r.jsx)(K, {}))),
            (n[9] = p),
            (n[10] = o),
            (n[11] = a),
            (n[12] = l),
            (n[13] = s),
            (n[14] = v),
            (n[15] = S),
            (n[16] = e))
          : (e = n[16]),
          n[17] !== e
            ? ((i = (0, r.jsx)("div", {
                className: "h-full min-h-0 overflow-y-auto bg-surface text-start",
                children: (0, r.jsx)("div", {
                  className: "mx-auto h-full w-full max-w-(--thread-content-max-width)",
                  children: e,
                }),
              })),
              (n[17] = e),
              (n[18] = i))
            : (i = n[18]),
          (t = d({ headerRows: [], content: i })),
          (n[0] = p),
          (n[1] = o),
          (n[2] = a),
          (n[3] = l),
          (n[4] = s),
          (n[5] = d),
          (n[6] = v),
          (n[7] = S),
          (n[8] = t))
      } else t = n[8]
      return t
    }
    function z(e) {
      let t,
        n,
        o,
        a,
        l,
        f,
        h,
        g,
        x,
        S = (0, i.c)(49),
        { accountId: M, userId: k, conversationId: L, courseId: R } = e,
        F = (0, c.gh)(C.GD),
        [P, q] = (0, d.useState)(!1),
        z = (0, c._U)(_.X, "1851602600"),
        $ = z?.get("mode", "composer") === "menu" ? "menu" : "composer"
      ;(S[0] !== M || S[1] !== L || S[2] !== R || S[3] !== k
        ? ((t = ["learning-course-panel", M, k, L, R]), (S[0] = M), (S[1] = L), (S[2] = R), (S[3] = k), (S[4] = t))
        : (t = S[4]),
        S[5] !== M || S[6] !== L || S[7] !== R || S[8] !== F || S[9] !== k
          ? ((n = (e) => {
              let { signal: t } = e
              return (async function ({
                scope: e,
                conversationId: t,
                courseId: n,
                accountId: r,
                userId: i,
                signal: o,
              }) {
                let a,
                  l,
                  s = () => {
                    if (
                      (o.throwIfAborted(),
                      "chatgpt-thread" !== e.value.routeKind ||
                        e.value.conversationId !== t ||
                        e.get(E.x2)?.pathname !== e.value.pathname ||
                        e.get(b.chatGptAuthenticatedAccountId$) !== r ||
                        e.get(b.o8) !== i)
                    )
                      throw Error("Course panel is unavailable")
                  },
                  c = new Map(),
                  d = new Map(),
                  u = new Set()
                do {
                  s()
                  let e = await T.Request.safeGet("/learning/courses/{course_id}", {
                    parameters: { path: { course_id: n }, query: { lesson_limit: 100, lesson_cursor: a } },
                    signal: o,
                    assertRequestCurrent: s,
                    expectedIdentity: { accountId: r, userId: i },
                    additionalHeaders: { "ChatGPT-Account-ID": r, "x-openai-use-sheep": "1" },
                  })
                  if ((s(), e.course_id !== n)) throw Error("Course response does not match the request")
                  for (let t of (null == l && (l = e.course_metadata), e.lessons.items)) {
                    let e = c.get(t.lesson_id)
                    if (null != e && !N()(e, t)) throw Error("Conflicting course lesson")
                    let n = d.get(t.lesson_number)
                    if (null != n && n !== t.lesson_id) throw Error("Duplicate course lesson number")
                    ;(c.set(t.lesson_id, t), d.set(t.lesson_number, t.lesson_id))
                  }
                  if (null != (a = e.lessons.next_cursor ?? void 0) && u.has(a)) throw Error("Repeated course cursor")
                  null != a && u.add(a)
                } while (null != a)
                return {
                  courseId: n,
                  title: l?.title ?? "",
                  iconUrlOrEmoji: l?.icon_url_or_emoji ?? null,
                  lessons: Array.from(c.values()).sort((e, t) => e.lesson_number - t.lesson_number),
                }
              })({ scope: F, accountId: M, userId: k, conversationId: L, courseId: R, signal: t })
            }),
            (S[5] = M),
            (S[6] = L),
            (S[7] = R),
            (S[8] = F),
            (S[9] = k),
            (S[10] = n))
          : (n = S[10]),
        S[11] !== t || S[12] !== n
          ? ((o = {
              queryKey: t,
              queryFn: n,
              staleTime: 0,
              refetchOnMount: "always",
              retryOnMount: !0,
              refetchOnWindowFocus: !1,
              refetchOnReconnect: !1,
              retry: !1,
            }),
            (S[11] = t),
            (S[12] = n),
            (S[13] = o))
          : (o = S[13]))
      let { data: H, isPending: K, isError: G, refetch: V } = (0, s.I)(o)
      S[14] !== V
        ? ((a = () => {
            V()
          }),
          (S[14] = V),
          (S[15] = a))
        : (a = S[15])
      let J = a
      if (K) {
        let e
        return (
          S[16] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(v.w, {})), (S[16] = e)) : (e = S[16]),
          e
        )
      }
      if (G) {
        let e
        return (S[17] !== J ? ((e = (0, r.jsx)(U, { onRetry: J })), (S[17] = J), (S[18] = e)) : (e = S[18]), e)
      }
      if (0 === H.lessons.length) {
        let e
        return (
          S[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(w.W, {
                className: "h-full",
                children: (0, r.jsx)(u.A, {
                  id: "chatgptConversations.coursePanel.empty",
                  defaultMessage: "This course has no lessons yet",
                  description: "Empty state for a learning course with no lessons",
                }),
              })),
              (S[19] = e))
            : (e = S[19]),
          e
        )
      }
      return (
        S[20] !== M || S[21] !== L || S[22] !== H.title || S[23] !== R || S[24] !== $ || S[25] !== F || S[26] !== k
          ? ((l = () => {
              "menu" === $
                ? q(!0)
                : F.get(b.chatGptAuthenticatedAccountId$) === M &&
                  F.get(b.o8) === k &&
                  F.get(D.r$, L) === R &&
                  ((0, j.aT)(F, L),
                  (0, A.G)(F, L, {
                    accountId: M,
                    label: H.title,
                    instruction: (0, O.z)(R),
                    disableWebSearch: !1,
                    courseEdit: { courseId: R, userId: k },
                    isCurrent: (e) => e(b.o8) === k && e(D.r$, L) === R,
                  }),
                  (0, p.kO)(F),
                  (0, y.te)(`chatgpt:${L}`))
            }),
            (S[20] = M),
            (S[21] = L),
            (S[22] = H.title),
            (S[23] = R),
            (S[24] = $),
            (S[25] = F),
            (S[26] = k),
            (S[27] = l))
          : (l = S[27]),
        S[28] !== F ? ((f = (e) => (0, m.oo)(F, (0, I.mv)(e))), (S[28] = F), (S[29] = f)) : (f = S[29]),
        S[30] !== L ||
        S[31] !== H.iconUrlOrEmoji ||
        S[32] !== H.lessons ||
        S[33] !== H.title ||
        S[34] !== R ||
        S[35] !== $ ||
        S[36] !== l ||
        S[37] !== f
          ? ((h = (0, r.jsx)(B, {
              courseId: R,
              title: H.title,
              iconUrlOrEmoji: H.iconUrlOrEmoji,
              lessons: H.lessons,
              currentConversationId: L,
              editMode: $,
              onEdit: l,
              onOpenConversation: f,
            })),
            (S[30] = L),
            (S[31] = H.iconUrlOrEmoji),
            (S[32] = H.lessons),
            (S[33] = H.title),
            (S[34] = R),
            (S[35] = $),
            (S[36] = l),
            (S[37] = f),
            (S[38] = h))
          : (h = S[38]),
        S[39] !== M || S[40] !== L || S[41] !== H.title || S[42] !== R || S[43] !== P || S[44] !== k
          ? ((g =
              P &&
              (0, r.jsx)(W, {
                title: H.title,
                courseId: R,
                conversationId: L,
                accountId: M,
                userId: k,
                onClose: () => q(!1),
              })),
            (S[39] = M),
            (S[40] = L),
            (S[41] = H.title),
            (S[42] = R),
            (S[43] = P),
            (S[44] = k),
            (S[45] = g))
          : (g = S[45]),
        S[46] !== h || S[47] !== g
          ? ((x = (0, r.jsxs)(r.Fragment, { children: [h, g] })), (S[46] = h), (S[47] = g), (S[48] = x))
          : (x = S[48]),
        x
      )
    }
    function B(e) {
      let t,
        n,
        c,
        d,
        h,
        m,
        p,
        g,
        b,
        y,
        w,
        S,
        E,
        C,
        _,
        j,
        A,
        I,
        L,
        N,
        T,
        R = (0, i.c)(75),
        {
          courseId: O,
          title: D,
          iconUrlOrEmoji: W,
          lessons: q,
          currentConversationId: z,
          onOpenConversation: B,
          onEdit: H,
          editMode: G,
        } = e,
        V = void 0 === G ? "menu" : G,
        J = (0, f.A)(),
        Z = (0, M.Y)()
      R[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = {
            queryKey: ["dil-response-component", "LearningCourse"],
            queryFn: l.Gz.LearningCourse,
            staleTime: 1 / 0,
            gcTime: 1 / 0,
            retry: !1,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
          }),
          (R[0] = t))
        : (t = R[0])
      let { data: Q, isPending: Y, isError: X, refetch: ee } = (0, s.I)(t)
      R[1] !== J
        ? ((n = (e, t) =>
            J.formatMessage(
              {
                id: "chatgptConversations.coursePanel.localizedLessonAriaLabel",
                defaultMessage:
                  "Lesson {number}: {title}. {status, select, completed {{number}. Completed} in_progress {{number}. In progress} other {{number}. Not started}}{current, select, true {. Current lesson} other {}}",
                description:
                  "Complete screen-reader label for a lesson in the learning course panel. Title is the saved lesson title. Number is an already localized number string; do not apply number formatting. Status is completed, in_progress, or pending (the other case). Current identifies the first incomplete lesson, or the open lesson after the whole course is completed. Translators control the complete order and punctuation.",
              },
              { number: "{number}", title: "{title}", status: e, current: String(void 0 !== t && t) },
            )),
          (R[1] = J),
          (R[2] = n))
        : (n = R[2])
      let et = n,
        en = J.locale
      ;(R[3] !== q ? ((c = q.map($)), (R[3] = q), (R[4] = c)) : (c = R[4]),
        R[5] !== J
          ? ((d = J.formatMessage(
              {
                id: "chatgptConversations.coursePanel.timelineLesson",
                defaultMessage: "Lesson {number}: {title}",
                description:
                  "Lesson title in the learning course timeline. Number is the saved lesson number, already localized. Title is the saved lesson title. Keep both placeholders.",
              },
              { number: "{number}", title: "{title}" },
            )),
            (R[5] = J),
            (R[6] = d))
          : (d = R[6]),
        R[7] !== d ? ((h = { lesson: d }), (R[7] = d), (R[8] = h)) : (h = R[8]),
        R[9] !== et ? ((m = et("pending")), (R[9] = et), (R[10] = m)) : (m = R[10]),
        R[11] !== et ? ((p = et("in_progress")), (R[11] = et), (R[12] = p)) : (p = R[12]),
        R[13] !== et ? ((g = et("completed")), (R[13] = et), (R[14] = g)) : (g = R[14]),
        R[15] !== g || R[16] !== m || R[17] !== p
          ? ((b = { pending: m, in_progress: p, completed: g }), (R[15] = g), (R[16] = m), (R[17] = p), (R[18] = b))
          : (b = R[18]),
        R[19] !== et ? ((y = et("pending", !0)), (R[19] = et), (R[20] = y)) : (y = R[20]),
        R[21] !== et ? ((w = et("in_progress", !0)), (R[21] = et), (R[22] = w)) : (w = R[22]),
        R[23] !== et ? ((S = et("completed", !0)), (R[23] = et), (R[24] = S)) : (S = R[24]),
        R[25] !== y || R[26] !== w || R[27] !== S
          ? ((E = { pending: y, in_progress: w, completed: S }), (R[25] = y), (R[26] = w), (R[27] = S), (R[28] = E))
          : (E = R[28]),
        R[29] !== J
          ? ((C = J.formatMessage({
              id: "chatgptConversations.coursePanel.pending",
              defaultMessage: "Not started",
              description: "Status of a lesson the learner has not started",
            })),
            (R[29] = J),
            (R[30] = C))
          : (C = R[30]),
        R[31] !== J
          ? ((_ = J.formatMessage({
              id: "chatgptConversations.coursePanel.inProgress",
              defaultMessage: "In progress",
              description: "Status of a lesson the learner has started but not completed",
            })),
            (R[31] = J),
            (R[32] = _))
          : (_ = R[32]),
        R[33] !== J
          ? ((j = J.formatMessage({
              id: "chatgptConversations.coursePanel.completed",
              defaultMessage: "Completed",
              description: "Status of a lesson the learner has completed",
            })),
            (R[33] = J),
            (R[34] = j))
          : (j = R[34]),
        R[35] !== C || R[36] !== _ || R[37] !== j
          ? ((A = { pending: C, in_progress: _, completed: j }), (R[35] = C), (R[36] = _), (R[37] = j), (R[38] = A))
          : (A = R[38]),
        R[39] !== O ||
        R[40] !== z ||
        R[41] !== W ||
        R[42] !== J.locale ||
        R[43] !== b ||
        R[44] !== E ||
        R[45] !== A ||
        R[46] !== c ||
        R[47] !== h ||
        R[48] !== D
          ? ((I = {
              course_id: O,
              layout: "panel",
              locale: en,
              title: D,
              icon_url_or_emoji: W,
              current_conversation_id: z,
              lessons: c,
              timeline_label_templates: h,
              lesson_aria_label_templates: b,
              current_lesson_aria_label_templates: E,
              status_labels: A,
            }),
            (R[39] = O),
            (R[40] = z),
            (R[41] = W),
            (R[42] = J.locale),
            (R[43] = b),
            (R[44] = E),
            (R[45] = A),
            (R[46] = c),
            (R[47] = h),
            (R[48] = D),
            (R[49] = I))
          : (I = R[49]))
      let er = I
      if (Y) {
        let e
        ;(R[50] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, r.jsx)(v.w, {})), (R[50] = e)) : (e = R[50]),
          (L = e))
      } else if (X) {
        let e
        ;(R[51] !== ee ? ((e = (0, r.jsx)(U, { onRetry: () => void ee() })), (R[51] = ee), (R[52] = e)) : (e = R[52]),
          (L = e))
      } else {
        let e, t, n, i, s, c, d
        ;(R[53] !== Q ? ((e = { ...l.Hy, LearningCourse: Q }), (R[53] = Q), (R[54] = e)) : (e = R[54]),
          R[55] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = Object.keys(F)), (n = { supportedClientActions: ["open_conversation"] }), (R[55] = t), (R[56] = n))
            : ((t = R[55]), (n = R[56])),
          R[57] !== er
            ? ((i = { ...er, nativeComponentNames: t, opGenui: n }), (R[57] = er), (R[58] = i))
            : (i = R[58]),
          R[59] !== z || R[60] !== q || R[61] !== B
            ? ((s = {
                GenUI: {
                  dispatchAction: (e) => {
                    let t = P.safeParse(e)
                    t.success &&
                      t.data.payload.conversation_id !== z &&
                      q.some((e) => e.conversation_id === t.data.payload.conversation_id) &&
                      (0, a.Ut)() &&
                      B(t.data.payload.conversation_id)
                  },
                },
              }),
              (R[59] = z),
              (R[60] = q),
              (R[61] = B),
              (R[62] = s))
            : (s = R[62]))
        let u = Z ? "dark" : "light"
        ;(R[63] === Symbol.for("react.memo_cache_sentinel") ? ((c = (0, r.jsx)(K, {})), (R[63] = c)) : (c = R[63]),
          R[64] !== e || R[65] !== i || R[66] !== s || R[67] !== u
            ? ((d = (0, r.jsx)(o.y, {
                dil: "DIL.render(__dil.jsx(() => __dil.jsx(LearningCourse, { __state: DIL.useAppData() }), {}));",
                dilComponents: e,
                components: F,
                appData: i,
                globals: s,
                theme: u,
                tooltipComponent: k.W,
                errorFallback: c,
              })),
              (R[64] = e),
              (R[65] = i),
              (R[66] = s),
              (R[67] = u),
              (R[68] = d))
            : (d = R[68]),
          (L = d))
      }
      return (
        R[69] !== V || R[70] !== H
          ? ((N =
              H &&
              (0, r.jsx)("div", {
                className: "flex justify-end",
                children: (0, r.jsx)(x.$, {
                  type: "button",
                  color: "secondary",
                  size: "actionSm",
                  "aria-haspopup": "menu" === V ? "dialog" : void 0,
                  onClick: H,
                  children: (0, r.jsx)(u.A, {
                    id: "learning.course.customize.edit",
                    defaultMessage: "Edit",
                    description: "Start a request to change the learning course shown in the Lesson plan side pane",
                  }),
                }),
              })),
            (R[69] = V),
            (R[70] = H),
            (R[71] = N))
          : (N = R[71]),
        R[72] !== N || R[73] !== L
          ? ((T = (0, r.jsxs)("section", { className: "flex w-full flex-col gap-3 p-4", children: [L, N] })),
            (R[72] = N),
            (R[73] = L),
            (R[74] = T))
          : (T = R[74]),
        T
      )
    }
    function $(e) {
      return {
        id: e.lesson_id,
        number: e.lesson_number,
        title: e.lesson_metadata.title,
        conversation_id: e.conversation_id,
        status: "completed" === e.status || "in_progress" === e.status ? e.status : "pending",
      }
    }
    function U(e) {
      let t,
        n,
        o,
        a = (0, i.c)(4),
        { onRetry: l } = e
      return (
        a[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, r.jsx)(H, {})), (a[0] = t)) : (t = a[0]),
        a[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsx)(u.A, {
              id: "chatgptConversations.coursePanel.retry",
              defaultMessage: "Retry",
              description: "Retry loading the learning course panel",
            })),
            (a[1] = n))
          : (n = a[1]),
        a[2] !== l
          ? ((o = (0, r.jsxs)(w.W, {
              className: "h-full flex-col gap-3",
              children: [t, (0, r.jsx)(x.$, { color: "secondary", onClick: l, children: n })],
            })),
            (a[2] = l),
            (a[3] = o))
          : (o = a[3]),
        o
      )
    }
    function H() {
      let e,
        t = (0, i.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(u.A, {
              id: "chatgptConversations.coursePanel.unavailable",
              defaultMessage: "This course is unavailable",
              description: "Shown when the learning course cannot be loaded",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function K() {
      let e,
        t = (0, i.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(w.W, { className: "h-full", children: (0, r.jsx)(H, {}) })), (t[0] = e))
          : (e = t[0]),
        e
      )
    }
  },
  r1rH(e, t, n) {
    let r, i
    n.d(t, { wK: () => o.wK, Y8: () => o.Y8, vA: () => _ })
    var o = n("AfTn"),
      a = n("Egm2"),
      l = n("ABep"),
      s = n("OYbv"),
      c = n("rpnM")
    let d = [0.64, 0.88, 1, 1, 0.82, 0.58]
    function u(e, t) {
      return t > 1 ? ((d.length - 1) * e) / (t - 1) : 0
    }
    function f(e) {
      return Array.from({ length: e }, (t, n) => {
        let r = u(n, e),
          i = Math.floor(r),
          o = d[i] ?? 0,
          a = d[i + 1] ?? o
        return { weight: o + (a - o) * (r - i), frequency: 4.6 + 0.71 * r, phase: 1.67 * r }
      })
    }
    let h = f(d.length),
      m =
        ((r = 42),
        (i = () => (r = (1664525 * r + 0x3c6ef35f) % 0x100000000) / 0x100000000),
        Array.from({ length: 100 }, () => ({
          weight: 0.45 + 0.55 * i(),
          frequency: 4.6 + 3.55 * i(),
          phase: 2 * Math.PI * i(),
        })))
    class p {
      static barCount = d.length
      levels = d.map(() => 0)
      motion = h
      audioLevels = d.map(() => 0)
      inputLevel = 0
      inputTimeSeconds = -1 / 0
      elapsedSeconds = 0
      fitToWidth(e) {
        let t = void 0 !== e && Number.isFinite(e) ? Math.max(0, Math.floor((e + 3) / 5)) : d.length
        if (this.levels.length !== t) {
          for (this.motion = t > d.length ? m : t === d.length ? h : f(t); this.levels.length < t;)
            (this.levels.push(0), this.audioLevels.push(0))
          this.levels.length = this.audioLevels.length = t
        }
      }
      receive(e, t) {
        Number.isFinite(e) && ((this.inputLevel = Math.min(1, Math.max(0, e))), (this.inputTimeSeconds = t))
      }
      advance(e, t, n) {
        let r = Math.min(Math.max(e, 0), 1 / 15)
        this.elapsedSeconds += r
        let i = t - this.inputTimeSeconds <= 0.3 ? this.inputLevel : 0
        for (let e = 0; e < this.levels.length; e++) {
          var o
          let t = this.motion[e % this.motion.length]
          if (!t) continue
          let { weight: a, frequency: l, phase: s } = t,
            c = Math.min(Math.max(i * a * (n ? 0.8 : 0.72 + 0.28 * Math.sin(this.elapsedSeconds * l + s)), 0), 1),
            d = this.audioLevels[e] ?? 0,
            f = c > d ? 0.04 : 0.16,
            h = d + (c - d) * (1 - Math.exp(-r / f))
          this.audioLevels[e] = h
          let m =
            n || (o = 2 * this.elapsedSeconds - 0.055 * u(e, this.levels.length)) < 0
              ? 0
              : o < 0.18
                ? 0.5 - 0.5 * Math.cos((Math.PI * o) / 0.18)
                : o < 0.23
                  ? 1
                  : o < 0.53
                    ? 0.5 + 0.5 * Math.cos((Math.PI * (o - 0.23)) / 0.3)
                    : 0
          this.levels[e] = Math.max(h, m)
        }
      }
    }
    var g = n("zd8w"),
      v = n("QosV"),
      b = n("MnTr"),
      y = n("k5JT")
    function x(e) {
      let t,
        n = (0, v.c)(3),
        { children: r } = e,
        i = (0, g.useContext)(c.EM)
      return (
        n[0] !== r || n[1] !== i
          ? ((t = (0, l.jsx)(b.s, { theme: i, children: r })), (n[0] = r), (n[1] = i), (n[2] = t))
          : (t = n[2]),
        t
      )
    }
    o.p.youtube
    let w = o.p.link,
      { "html-view": S, markdown: E, ...C } = o.p,
      _ = {
        ...C,
        ...{
          "recording-waveform": function ({ sessionId: e, running: t, fitToWidth: n = !1, reducedMotion: r = !1 }) {
            let i = (0, g.useRef)(null),
              o = (0, g.useRef)(new p()),
              a = (0, g.useRef)(!1),
              s = (0, g.useRef)(null),
              u = (0, g.useContext)(c.EM),
              f = (0, g.useContext)(c.t$)
            return (
              (0, g.useLayoutEffect)(() => {
                let e = i.current
                if (!e) return
                let l = e.getContext("2d")
                if (!l) return
                let c = 0,
                  u = performance.now(),
                  f = !1,
                  h = window.matchMedia("(prefers-reduced-motion: reduce)"),
                  m = () => {
                    let t = e.clientWidth,
                      r = e.clientHeight
                    if (0 === t || 0 === r) return
                    o.current.fitToWidth(n ? t : void 0)
                    let i = (window.devicePixelRatio || 1) * (e.getBoundingClientRect().width / t)
                    ;((e.width !== Math.round(t * i) || e.height !== Math.round(r * i)) &&
                      ((e.width = Math.round(t * i)), (e.height = Math.round(r * i))),
                      l.setTransform(i, 0, 0, i, 0, 0),
                      l.clearRect(0, 0, t, r),
                      (l.fillStyle = getComputedStyle(e).color),
                      (function (e, t, n, r, i = 1) {
                        if (i > 0)
                          for (let [o, a] of ((e.globalAlpha = i), t.entries())) {
                            let i = (function (e, t, n, r, i = d.length) {
                              let o = 3 + t * (Math.min(r, 20) - 3)
                              return {
                                x: (n - (5 * i - 3)) / 2 + 5 * e,
                                y: (r - o) / 2,
                                width: 2,
                                height: o,
                                radius: 1,
                              }
                            })(o, a, n, r, t.length)
                            ;(e.beginPath(), e.roundRect(i.x, i.y, i.width, i.height, i.radius), e.fill())
                          }
                        e.globalAlpha = 1
                      })(l, o.current.levels, t, r))
                  },
                  p = (e) => {
                    ;(o.current.advance((e - u) / 1e3, e / 1e3, r || h.matches),
                      (u = e),
                      m(),
                      (c = requestAnimationFrame(p)))
                  },
                  g = () => {
                    ;(cancelAnimationFrame(c),
                      m(),
                      (u = performance.now()),
                      t &&
                        a.current &&
                        f &&
                        !document.hidden &&
                        e.clientWidth > 0 &&
                        e.clientHeight > 0 &&
                        (c = requestAnimationFrame(p)))
                  }
                s.current = g
                let v = new ResizeObserver(g),
                  b = new IntersectionObserver(([e]) => {
                    ;((f = e?.isIntersecting ?? !1), g())
                  })
                return (
                  v.observe(e),
                  b.observe(e),
                  document.addEventListener("visibilitychange", g),
                  h.addEventListener("change", g),
                  g(),
                  () => {
                    ;((s.current = null),
                      cancelAnimationFrame(c),
                      v.disconnect(),
                      b.disconnect(),
                      document.removeEventListener("visibilitychange", g),
                      h.removeEventListener("change", g))
                  }
                )
              }, [t, r, n, u]),
              (0, g.useLayoutEffect)(() => {
                ;((o.current = new p()), (a.current = !1))
                let t = !0,
                  n = f?.(e, (e) => {
                    if (t) {
                      ;((t = !1), (a.current = !0))
                      return
                    }
                    null === e
                      ? ((a.current = !1), o.current.levels.fill(0), s.current?.())
                      : o.current.receive(Math.min(1, Math.max(0, e - 0.006) / 0.154) ** 0.6, performance.now() / 1e3)
                  })
                return (s.current?.(), n)
              }, [e, f]),
              (0, l.jsx)("canvas", { ref: i, className: "Canvas-LQd28U", "aria-hidden": "true" })
            )
          },
        },
        "date-picker": function (e) {
          let t,
            n = (0, v.c)(3),
            r = (0, y.useDirection)()
          return (
            n[0] !== r || n[1] !== e
              ? ((t = (0, l.jsx)(x, { children: (0, l.jsx)(o.lr, { ...e, dir: r }) })),
                (n[0] = r),
                (n[1] = e),
                (n[2] = t))
              : (t = n[2]),
            t
          )
        },
        "popover-content": function (e) {
          let t,
            n = (0, v.c)(2)
          return (
            n[0] !== e
              ? ((t = (0, l.jsx)(x, { children: (0, l.jsx)(o.hl, { ...e }) })), (n[0] = e), (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        select: function (e) {
          let t,
            n = (0, v.c)(2)
          return (
            n[0] !== e
              ? ((t = (0, l.jsx)(x, { children: (0, l.jsx)(o.l6, { ...e }) })), (n[0] = e), (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        "swipe-stack": a.N,
        "text-only-markdown": function ({
          children: e,
          includeMath: t = !1,
          fontSize: n,
          lineHeight: r,
          textAlign: i,
          whiteSpace: o,
        }) {
          let a = (0, l.jsx)(s.o, {
            breakNewLines: !0,
            includeMath: t,
            disallowedElements: ["a", "img"],
            unwrapDisallowed: !0,
            skipHtml: !0,
            copyableCodeBlocks: !1,
            children: "string" == typeof e ? e : "",
          })
          return void 0 === n && void 0 === r && void 0 === i && void 0 === o
            ? a
            : (0, l.jsx)("div", {
                style: {
                  fontSize: null != n && Number.isFinite(n) && n > 0 ? n : void 0,
                  lineHeight: null != r && Number.isFinite(r) && r > 0 ? `${r}px` : void 0,
                  textAlign: i,
                  whiteSpace: "normal" === o ? "normal" : void 0,
                },
                children: a,
              })
        },
        youtube: function (e) {
          let t,
            n = (0, v.c)(5)
          if ("string" != typeof e.videoId || !/^[A-Za-z0-9_-]{11}$/.test(e.videoId)) return null
          let r = `https://www.youtube.com/watch?v=${e.videoId}`
          return (
            n[2] !== e.title || n[3] !== r
              ? ((t = (0, l.jsx)(w, { href: r, children: e.title })), (n[2] = e.title), (n[3] = r), (n[4] = t))
              : (t = n[4]),
            t
          )
        },
      }
  },
  AS6J(e, t, n) {
    n.d(t, { y: () => K, H: () => G })
    var r = n("ABep"),
      i = n("QosV"),
      o = n("MnTr"),
      a = n("zc1D"),
      l = n("zd8w"),
      s = "DilRenderer-tB76Jj",
      c = "DilResponseRoot-HfQrEh",
      d = {
        Reveal: "Reveal-k2IWvM",
        reveal: "Reveal-k2IWvM",
        LegacyReveal: "LegacyReveal-lIiswq",
        legacyReveal: "LegacyReveal-lIiswq",
        "d-legacy-entrance-reveal": "d-legacy-entrance-reveal-jckL2e",
        dLegacyEntranceReveal: "d-legacy-entrance-reveal-jckL2e",
        "d-accent-settle": "d-accent-settle-akUfCe",
        dAccentSettle: "d-accent-settle-akUfCe",
        "d-quote-enter": "d-quote-enter-gtvZgb",
        dQuoteEnter: "d-quote-enter-gtvZgb",
        "d-marker-enter": "d-marker-enter-N5KrVA",
        dMarkerEnter: "d-marker-enter-N5KrVA",
        "d-fade-in": "d-fade-in-pZ5Fqj",
        dFadeIn: "d-fade-in-pZ5Fqj",
        "d-placeholder-exit": "d-placeholder-exit-pQiU_7",
        dPlaceholderExit: "d-placeholder-exit-pQiU_7",
        "d-chart-draw": "d-chart-draw-LbYBQf",
        dChartDraw: "d-chart-draw-LbYBQf",
        "d-badge-fade-in": "d-badge-fade-in-kAfN_p",
        dBadgeFadeIn: "d-badge-fade-in-kAfN_p",
        "d-badge-enter": "d-badge-enter-HG69rr",
        dBadgeEnter: "d-badge-enter-HG69rr",
        "d-link-decoration": "d-link-decoration-_ER7sK",
        dLinkDecoration: "d-link-decoration-_ER7sK",
        "d-control-border": "d-control-border-T6x5wC",
        dControlBorder: "d-control-border-T6x5wC",
        "d-primary-button-enter": "d-primary-button-enter-BDZHIG",
        dPrimaryButtonEnter: "d-primary-button-enter-BDZHIG",
        "d-entrance-reveal": "d-entrance-reveal-x2xcsE",
        dEntranceReveal: "d-entrance-reveal-x2xcsE",
        "d-badge-settle": "d-badge-settle-CgiGcI",
        dBadgeSettle: "d-badge-settle-CgiGcI",
        "d-highlight-sweep": "d-highlight-sweep-dBKO0T",
        dHighlightSweep: "d-highlight-sweep-dBKO0T",
      }
    let u = { duration: 320, easing: "cubic-bezier(0.2, 0, 0, 1)", fill: "backwards" }
    function f(e, t = 0) {
      let n = document.createTreeWalker(e, NodeFilter.SHOW_TEXT)
      for (let e = n.nextNode(); e; e = n.nextNode()) {
        let n = e.textContent?.length ?? 0
        if (t < n) {
          let n = document.createRange()
          return (n.setStart(e, t), n.setEnd(e, t + 1), n.getBoundingClientRect().left)
        }
        t -= n
      }
      return e.getBoundingClientRect().left
    }
    function h(e, t) {
      return e < 105
        ? Math.max(0, Math.floor(e / 15))
        : !t || e >= 700
          ? -1
          : 7 + Math.max(0, Math.floor((e - 315) / 55))
    }
    let m = '[data-d-text-flow="run"]',
      p = "[data-d-stream-inline]",
      g = "[data-d-text-flow]",
      v = '[data-d-component="list-item"] > [data-d-marker]',
      b = '[data-d-component="list-item"], [data-d-component="blockquote"]',
      y = new Set(
        Object.entries(d)
          .filter(([e]) => e.startsWith("d-"))
          .map(([, e]) => e),
      )
    var x = n("rpnM")
    let w = Object.entries({ xs: 380, sm: 576, md: 768, lg: 1024, xl: 1280, "2xl": 1536 }),
      S = (e) => {
        if (null == e) return []
        let t = Math.round(e)
        return w.filter(([, e]) => t >= e).map(([e]) => e)
      },
      E = (e, { fallbackToWindow: t = !0 } = {}) =>
        e ? e.getBoundingClientRect().width : !t || "u" < typeof window ? null : window.innerWidth,
      C = (e, t = {}) => {
        let { fallbackToWindow: n = !0, syncInitialMeasurement: r = !1 } = t,
          [i, o] = (0, l.useState)(() => S(E(e, { fallbackToWindow: n })))
        return (
          (0, l.useLayoutEffect)(() => {
            if (!r || !e) return
            let t = S(E(e, { fallbackToWindow: n }))
            o((e) => (e.length === t.length && e.every((e, n) => e === t[n]) ? e : t))
          }, [e, n, r]),
          (0, l.useEffect)(() => {
            if (!e || "u" < typeof ResizeObserver) return
            let t = (function (e) {
              let t = null
              function n() {
                ;(t && clearTimeout(t),
                  (t = window.setTimeout(() => {
                    ;(e(), (t = null))
                  }, 100)))
              }
              return (
                (n.cancel = () => {
                  t && (clearTimeout(t), (t = null))
                }),
                n
              )
            })(() => {
              let t = S(E(e, { fallbackToWindow: n }))
              o((e) => (e.length === t.length && e.every((e, n) => e === t[n]) ? e : t))
            })
            t()
            let r = new ResizeObserver(t)
            return (
              r.observe(e),
              () => {
                ;(r.disconnect(), t.cancel())
              }
            )
          }, [e, n]),
          i
        )
      },
      _ = {},
      M = {},
      j = (e, t) => new a.zN(e, t)
    function A({
      className: e,
      components: t,
      disableExternalMedia: n,
      onNodeError: i,
      rootRef: o,
      theme: a,
      tree: d,
    }) {
      let [u, f] = (0, l.useState)(null),
        h = C(u),
        m = (0, l.useMemo)(() => {
          let e, t
          return (
            (e = Object.freeze({ error: null, tree: d, version: 0 })),
            {
              dispose: (t = () => void 0),
              getSnapshot: () => e,
              registerDilMessengerTransport: () => t,
              setCompiledDil: t,
              setData: t,
              setStateSnapshot: t,
              subscribe: () => t,
              trigger: t,
              triggerWithError: t,
              triggerWithInteraction: t,
              update: t,
            }
          )
        }, [d])
      ;(0, l.useImperativeHandle)(o, () => u, [u])
      let p = (0, l.useCallback)(() => void 0, [])
      return (0, r.jsx)("div", {
        ref: f,
        className: [s, c, e].filter(Boolean).join(" "),
        "data-d-direction": "col",
        dir: "auto",
        inert: !0,
        children: (0, r.jsx)(x.gA.Provider, {
          value: !1,
          children:
            u &&
            (0, r.jsx)(N, {
              activeBreakpoints: h,
              components: t,
              disableExternalMedia: n,
              errorFallback: null,
              getInteractionCapability: p,
              onInteraction: p,
              onNodeError: i,
              onSnapshot: void 0,
              onCommittedInputSnapshot: void 0,
              onInputRenderState: void 0,
              settledInputSnapshot: void 0,
              runner: m,
              theme: a,
            }),
        }),
      })
    }
    function k({
      frameUrl: e,
      preparing: t = !1,
      recoverSafeStartupPeers: n,
      recoverPreReadyFrame: i,
      diagnostics: o,
      onDiagnostics: s,
      onLifecycleEvent: c,
      onPreparationEnd: d,
      ...u
    }) {
      let f = (0, l.useRef)(s)
      f.current = s
      let h = (0, l.useRef)(c)
      h.current = c
      let m = (0, l.useRef)(d)
      m.current = d
      let p = (0, l.useRef)(t)
      p.current = t
      let g = (0, l.useRef)(null),
        v = (0, l.useMemo)(
          () => (t, r) => {
            let l = new a.n1(
              t,
              {
                ...r,
                frameUrl: e,
                recoverSafeStartupPeers: n,
                recoverPreReadyFrame: i,
                diagnostics: o,
                onDiagnostics: (e, t) => f.current?.(e, t),
                onLifecycleEvent: (e) => h.current?.(e),
                onPreparationEnd: m.current ? (e) => m.current?.(e) : void 0,
              },
              p.current ? "preparation" : "render",
            )
            return ((g.current = l), l)
          },
          [e, o, n, i],
        )
      return (
        (0, l.useLayoutEffect)(() => {
          t || g.current?.promoteToRender()
        }, [t]),
        (0, r.jsx)(I, { ...u, runnerFactory: v })
      )
    }
    function I({ runnerFactory: e, onInteraction: t, ...n }) {
      let [i, o] = (0, l.useState)(null),
        [w, S] = (0, l.useState)(!1),
        E = (0, l.useRef)(null),
        C = !0 === n.enableFluidStreamingAnimations
      ;(0, l.useLayoutEffect)(() => {
        if (i && C)
          return (function (e) {
            let t = matchMedia("(prefers-reduced-motion: no-preference) and (forced-colors: none)"),
              n = new WeakMap(),
              r = new WeakMap(),
              i = (function () {
                let e = new Map(),
                  t = 0
                function n(e, t, n) {
                  if (t !== n) {
                    if (-1 !== t) {
                      let n = `dil-word-${t}`,
                        r = CSS.highlights.get(n)
                      ;(r?.delete(e), r?.size === 0 && CSS.highlights.delete(n))
                    }
                    if (-1 !== n) {
                      let t = `dil-word-${n}`,
                        r = CSS.highlights.get(t)
                      r ? r.add(e) : CSS.highlights.set(t, new Highlight(e))
                    }
                  }
                }
                function r(i) {
                  for (let [t, r] of e) {
                    let o = t.startContainer.isConnected ? h(i - r.start, r.accent) : -1
                    ;(n(t, r.paint, o), -1 === o ? e.delete(t) : (r.paint = o))
                  }
                  t = e.size ? requestAnimationFrame(r) : 0
                }
                return {
                  add(i, o, a, l, s, c) {
                    let d = h(s - l, c)
                    if (-1 === d) return
                    let u = new StaticRange({ startContainer: i, startOffset: o, endContainer: i, endOffset: a })
                    ;(n(u, -1, d), e.set(u, { start: l, accent: c, paint: d }), t || (t = requestAnimationFrame(r)))
                  },
                  clear(r) {
                    for (let [t, i] of e) (!r || r.contains(t.startContainer)) && (n(t, i.paint, -1), e.delete(t))
                    e.size || (cancelAnimationFrame(t), (t = 0))
                  },
                }
              })(),
              o = new WeakSet(),
              a = new Set(),
              l = new Set(),
              s = new WeakSet(),
              c = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
                acceptNode: (e) =>
                  e.parentElement?.closest(`${p}, ${v}`)
                    ? NodeFilter.FILTER_REJECT
                    : e.matches(m)
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP,
              }),
              d = !1
            function u(e, t = !1) {
              for (let n of e.getAnimations({ subtree: !0 }))
                n instanceof CSSAnimation &&
                  y.has(n.animationName) &&
                  (!t || (n.effect instanceof KeyframeEffect && n.effect.target !== e)) &&
                  n.finish()
            }
            function f(t, n = !1) {
              let i = new Set(t),
                o = [],
                a = [],
                l = new Map(),
                c = (e) => {
                  let t = l.get(e)
                  return (null == t && ((t = getComputedStyle(e).display), l.set(e, t)), t)
                },
                d = (e) => e.matches(g) || null != e.querySelector(`:scope > ${m}`)
              for (let l of t) {
                if (!e.contains(l)) continue
                let t = !1,
                  f = !1,
                  h = !1
                for (let n = l.parentElement; n && n !== e; n = n.parentElement) {
                  if (s.has(n) || n.matches(v)) {
                    ;(u(l), (f = !0))
                    break
                  }
                  if (i.has(n)) {
                    f = !0
                    break
                  }
                  if (!h)
                    if (d(n)) ((t = !0), (h = !0))
                    else {
                      let e = c(n)
                      h = "inline" !== e && "contents" !== e
                    }
                }
                f ||
                  (function e(t, i) {
                    if (!s.has(t)) {
                      if (t.matches(v)) return void u(t, !0)
                      if (t.matches(m)) return n && !r.has(t) ? void r.set(t, t.textContent ?? "") : void o.push(t)
                      if (d(t)) i = !0
                      else if (i) {
                        let e = c(t)
                        if (e.startsWith("inline-") || ("inline" === e && !t.querySelector(g))) {
                          ;(s.add(t), n || (a.push(t), o.push(t)))
                          return
                        }
                        i = "inline" === e || "contents" === e
                      }
                      for (let n of t.children) e(n, i)
                    }
                  })(l, t)
              }
              for (let e of a) e.setAttribute("data-d-stream-inline", "")
              return o
            }
            function x(e) {
              c.currentNode = e
              for (let e = c.previousNode(); e; e = c.previousNode()) {
                let t = n.get(e)
                if (null != t) return t
              }
            }
            function w(e, t) {
              ;((e.startTime = t), a.add(e))
              let n = () => a.delete(e)
              ;(e.addEventListener("finish", n, { once: !0 }), e.addEventListener("cancel", n, { once: !0 }))
            }
            function S(a) {
              let l = document.timeline.currentTime
              if ("number" == typeof l)
                for (let s of (a.sort((e, t) =>
                  e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1,
                ),
                a.flatMap((o) => {
                  if (!e.contains(o) || o.parentElement?.closest(`${p}, ${v}`)) return []
                  if (o instanceof HTMLElement && o.matches(m)) {
                    let a = o.firstChild,
                      l = o.textContent ?? "",
                      s = r.get(o) ?? "",
                      c = Math.max(s.length, Number(o.getAttribute("data-d-stream-visible-prefix")))
                    if ((o.removeAttribute("data-d-stream-visible-prefix"), r.set(o, l), l === s)) return []
                    let d =
                      t.matches && !document.hidden && e.hasAttribute("data-d-streaming-reveal") && l.startsWith(s)
                        ? getComputedStyle(o)
                        : null
                    return !d || d.getPropertyValue("--d-stream-group-reveal")
                      ? (i.clear(o), n.delete(o), [])
                      : a instanceof Text && !(c >= l.length)
                        ? (o.toggleAttribute("data-d-stream-run", !0),
                          o.style.setProperty("--d-stream-ink", d.color),
                          [{ element: o, text: a, prefix: c }])
                        : []
                  }
                  if (!t.matches || o.closest('[data-d-component="table"]')) return []
                  u(o)
                  let a = getComputedStyle(o),
                    l = Number(a.opacity),
                    s = a.color,
                    c = e.hasAttribute("data-d-streaming-color") ? "var(--d-stream-accent)" : void 0,
                    d = o.animate(
                      [
                        { opacity: 0, offset: 0, easing: "ease-out", color: c },
                        { opacity: 0.18 * l, offset: 0.06 },
                        { opacity: 0.72 * l, offset: 0.12 },
                        { opacity: l, offset: 0.15 },
                        { opacity: l, offset: 0.45, color: c, easing: "ease-in-out" },
                        { opacity: l, offset: 1, color: null == c ? void 0 : s },
                      ],
                      { duration: 700, fill: "backwards" },
                    )
                  return [{ element: o, animation: d }]
                }))) {
                  let t,
                    { element: r } = s
                  if ("text" in s) {
                    let o = (function (t, r, o, a) {
                      let l
                      if (!globalThis.CSS?.highlights) return a
                      let s = e.hasAttribute("data-d-streaming-color")
                      for (let e of r.data.slice(o).matchAll(/\S+/gu)) {
                        let c = o + e.index,
                          d = c === o && o > 0 && /\S/u.test(r.data[o - 1]),
                          u = n.get(t),
                          f = d
                            ? u
                            : (function (e, t) {
                                if (null == e) return t
                                let n = Math.max(0, e - t - 300)
                                return Math.max(t, e + 35 / (1 + (n / 1e3) * 20))
                              })(u ?? x(t), a)
                        null != f && (i.add(r, c, c + e[0].length, f, a, s), (l ??= f), n.set(t, f))
                      }
                      return l
                    })(r, s.text, s.prefix, l)
                    if (null == o) continue
                    t = o
                  } else ((t = Math.max(l, x(r) ?? l)), w(s.animation, t))
                  for (let n = r.closest(b); n && e.contains(n); n = n.parentElement?.closest(b) ?? null)
                    if (!o.has(n)) {
                      for (let e of (o.add(n), [n, ...n.querySelectorAll(v)]))
                        if (e === n || e.closest(b) === n)
                          for (let n of e.getAnimations({ subtree: !0 }))
                            n instanceof CSSAnimation &&
                              n.effect instanceof KeyframeEffect &&
                              n.effect.target === e &&
                              (null == n.currentTime || ("number" == typeof n.currentTime && n.currentTime <= 0)) &&
                              w(n, t)
                    }
                }
            }
            let E = new MutationObserver((t) => {
              let n = l.size > 0
              for (let e of t) {
                let t = e.target instanceof Element ? e.target : e.target.parentElement
                for (let n of (t?.matches(m) && l.add(t), e.addedNodes)) n instanceof Element && l.add(n)
              }
              l.size &&
                !n &&
                queueMicrotask(() => {
                  ;(d || S(f([...l], !e.hasAttribute("data-d-streaming-reveal"))), l.clear())
                })
            })
            ;(E.observe(e, { childList: !0, subtree: !0, characterData: !0 }), S(f([...e.children], !0)))
            let C = () => {
              if (((!t.matches || document.hidden) && i.clear(), !t.matches)) for (let e of a) e.finish()
            }
            return (
              t.addEventListener("change", C),
              document.addEventListener("visibilitychange", C),
              () => {
                for (let e of ((d = !0),
                E.disconnect(),
                t.removeEventListener("change", C),
                document.removeEventListener("visibilitychange", C),
                a))
                  e.finish()
                ;(i.clear(), a.clear(), e.querySelectorAll(p).forEach((e) => e.removeAttribute("data-d-stream-inline")))
              }
            )
          })(i)
      }, [i, C])
      let _ = !0 === n.animateStreamingReveal && C
      ;(0, l.useEffect)(() => {
        if (_) S(!0)
        else if (w) {
          let e = setTimeout(() => S(!1), 1120)
          return () => clearTimeout(e)
        }
      }, [_, w])
      let M = C && (_ || w)
      ;((0, l.useEffect)(() => {
        if ((C || E.current?.(!1), i && M)) {
          let e = (function (e) {
              if ("function" != typeof e.animate) return () => {}
              let t = window.matchMedia("(prefers-reduced-motion: reduce), (forced-colors: active)"),
                n = new Map(),
                r = new Set(),
                i = !1
              function o() {
                for (let e of r)
                  Array.from(n.values()).some(({ table: t, motion: n }) => t.parentElement === e && n) ||
                    (e.removeAttribute("data-d-streaming-table-motion"), r.delete(e))
              }
              function a(e, t, r, a) {
                let l = e.animate([{ translate: `${r}px 0` }, { translate: "0px 0" }], u),
                  s = { animation: l, from: r, offset: r }
                ;((t.motion = s),
                  a?.animation.startTime != null && (l.startTime = a.animation.startTime),
                  (l.onfinish = () => {
                    t.motion === s && ((t.motion = void 0), l.cancel(), i && n.delete(e), o())
                  }))
              }
              function l() {
                for (let [e, { motion: t }] of n)
                  t && (t.offset = Number.parseFloat(getComputedStyle(e).translate) || 0)
                for (let { motion: e } of n.values())
                  e?.animation.effect instanceof KeyframeEffect && (e.animation.effect.target = null)
                let i = new Map()
                for (let [t, { motion: r }] of (e
                  .querySelectorAll(
                    '[data-d-component="table"] > table, [data-d-component="table"] > [data-d-table-viewport] > table',
                  )
                  .forEach((e, t) => {
                    let n = e.parentElement
                    if (!n || e.closest("[data-dimension]")) return
                    let r = e.getBoundingClientRect(),
                      o = Number.parseFloat(getComputedStyle(e).width)
                    if (!o || !r.width) return
                    let a = r.width / o,
                      l = n.scrollWidth <= n.clientWidth + 1
                    Array.from(e.rows)
                      .flatMap((e) => Array.from(e.cells))
                      .flatMap((e) => Array.from(e.children))
                      .forEach((n) => {
                        if (!(n instanceof HTMLElement) || n.closest("[data-dimension]")) return
                        let o = getComputedStyle(n)
                        if (["inline", "contents", "none"].includes(o.display) || "none" !== o.translate) return
                        let s = n.getBoundingClientRect(),
                          c =
                            "center" === o.textAlign
                              ? 0.5
                              : "right" === o.textAlign
                                ? 1
                                : "left" === o.textAlign
                                  ? 0
                                  : +(("end" === o.textAlign) != ("rtl" === o.direction)),
                          d = (s.left - r.left + s.width * c) / a
                        i.set(n, { table: e, fits: l, anchor: d, key: `${t}:${c}:${d.toFixed(2)}` })
                      })
                  }),
                n))
                  r?.animation.effect instanceof KeyframeEffect && (r.animation.effect.target = t)
                let l = new Map()
                for (let [e, r] of n) {
                  let o = i.get(e)
                  if (!o) {
                    ;(r.motion?.animation.cancel(), n.delete(e))
                    continue
                  }
                  let { table: s, anchor: c, key: d } = o
                  if (t.matches || r.table !== s || Math.abs(r.anchor - c) >= 0.5) {
                    let n = r.anchor + (r.motion?.offset ?? 0) - c
                    ;(r.motion?.animation.cancel(),
                      (r.motion = void 0),
                      !t.matches && r.table === s && Math.abs(n) >= 0.5 && a(e, r, n),
                      (r.table = s),
                      (r.anchor = c))
                  }
                  r.motion && l.set(d, r.motion)
                }
                for (let [e, { table: t, anchor: o, key: s, fits: c }] of i) {
                  if (!n.has(e)) {
                    let r = { table: t, anchor: o }
                    n.set(e, r)
                    let i = l.get(s)
                    i && a(e, r, i.from, i)
                  }
                  let i = t.parentElement
                  c && n.get(e)?.motion && (i.setAttribute("data-d-streaming-table-motion", ""), r.add(i))
                }
                o()
              }
              let s = new MutationObserver(l)
              return (
                s.observe(e, {
                  subtree: !0,
                  childList: !0,
                  characterData: !0,
                  attributes: !0,
                  attributeFilter: ["class", "style", "hidden", "colspan", "rowspan"],
                }),
                t.addEventListener("change", l),
                l(),
                (r = !0) => {
                  for (let [o, { motion: a }] of (r && e.isConnected && !i && l(),
                  (i = !0),
                  s.disconnect(),
                  t.removeEventListener("change", l),
                  n))
                    r && e.isConnected ? null == a && n.delete(o) : (a?.animation.cancel(), n.delete(o))
                  o()
                }
              )
            })(i),
            t = (function (e) {
              if ("function" != typeof e.animate) return () => {}
              let t = window.matchMedia("(prefers-reduced-motion: reduce), (forced-colors: active)"),
                n = new Map(),
                r = !1
              function i(e, t) {
                ;(t.animation?.cancel(), (t.animation = void 0), e.removeAttribute("data-d-streaming-height"))
              }
              function o() {
                let o = new Map()
                for (let [e, t] of n) t.animation && o.set(e, parseFloat(getComputedStyle(e).height))
                for (let { animation: e } of n.values()) e?.effect instanceof KeyframeEffect && (e.effect.target = null)
                let a = new Map()
                for (let [t, { animation: r }] of (e
                  .querySelectorAll(
                    ':is([data-d-component="box"], [data-d-component="card"]):not([data-d-has-height], [data-d-scrollable="true"], [data-d-clip="true"])',
                  )
                  .forEach((e) => {
                    if (
                      e.closest('[data-dimension], [data-d-component="table"]') ||
                      e.querySelector('[data-d-component="table"]')
                    )
                      return
                    let t = getComputedStyle(e)
                    "flex" === t.display &&
                      "column" === t.flexDirection &&
                      "none" === t.maxHeight &&
                      ("rgba(0, 0, 0, 0)" !== t.backgroundColor || e.hasAttribute("data-d-has-border")) &&
                      a.set(e, parseFloat(t.height))
                  }),
                n))
                  r?.effect instanceof KeyframeEffect && (r.effect.target = t)
                for (let [e, l] of n) {
                  let s = a.get(e)
                  if (void 0 === s || t.matches) (i(e, l), n.delete(e))
                  else if (Math.abs(s - l.height) > 0.5) {
                    let t = o.get(e) ?? l.height
                    ;(i(e, l), (l.height = s), e.setAttribute("data-d-streaming-height", ""))
                    let a = e.animate([{ height: `${t}px` }, { height: `${s}px` }], {
                      duration: 320,
                      easing: "cubic-bezier(0.2, 0, 0, 1)",
                      fill: "backwards",
                    })
                    ;((l.animation = a),
                      (a.onfinish = () => {
                        l.animation === a && (i(e, l), r && n.delete(e))
                      }))
                  }
                }
                for (let [e, t] of a) n.has(e) || n.set(e, { height: t })
              }
              let a = new MutationObserver(o)
              return (
                a.observe(e, {
                  subtree: !0,
                  childList: !0,
                  characterData: !0,
                  attributes: !0,
                  attributeFilter: ["class", "style", "hidden"],
                }),
                t.addEventListener("change", o),
                o(),
                (l = !0) => {
                  for (let [s, c] of (l && e.isConnected && !r && o(),
                  (r = !0),
                  a.disconnect(),
                  t.removeEventListener("change", o),
                  n))
                    ((l && e.isConnected) || i(s, c), null == c.animation && n.delete(s))
                }
              )
            })(i),
            n = (function (e) {
              let t = [],
                n = new Set(),
                r = window.matchMedia("(prefers-reduced-motion: reduce), (forced-colors: active)")
              function i() {
                let i = '[data-d-component="text"], [data-d-component="list"]'
                t = Array.from(e.querySelectorAll(i))
                  .filter((e) => !e.parentElement?.closest(i))
                  .map((e, i) => {
                    if ("text" === e.dataset.dComponent) {
                      let t = /^(\d+[.)]|[-+*])\s+(.+)/su.exec(e.textContent ?? "")
                      return t
                        ? { element: e, marker: t[1], text: t[2], left: f(e, t[0].length - t[2].length) }
                        : void 0
                    }
                    let o = t[i],
                      a = e.firstElementChild,
                      l = a?.textContent ?? ""
                    if (
                      !o ||
                      !a ||
                      !l ||
                      e.children.length < 2 ||
                      "native" !== e.dataset.dMarkerLayout ||
                      !(l.startsWith(o.text) || o.text.startsWith(l)) ||
                      ("OL" === e.tagName
                        ? Number.parseInt(o.marker, 10) !== Number(e.getAttribute("start") ?? 1)
                        : !/^[-+*]$/u.test(o.marker))
                    )
                      return
                    let s = { ...o, element: e, text: l, left: void 0 }
                    if (o.element !== e) {
                      let t = document.createRange()
                      for (let e of (t.setStart(a, 0), a.querySelectorAll("[data-d-stream-run]"))) {
                        t.setEndBefore(e)
                        let n = o.text.length - t.toString().length
                        if (n <= 0) break
                        ;(n >= (e.textContent?.length ?? 0) && e.removeAttribute("data-d-stream-run"),
                          e.setAttribute("data-d-stream-visible-prefix", String(n)))
                      }
                      if (o.animation && o.animation.effect instanceof KeyframeEffect) o.animation.effect.target = e
                      else if (null != o.left && !r.matches && "function" == typeof e.animate) {
                        let t = e.getBoundingClientRect().width / e.offsetWidth || 1,
                          r = (o.left - f(a)) / t,
                          i = e.animate([{ translate: `${r}px 0` }, { translate: "0px 0" }], {
                            duration: 240,
                            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
                          })
                        ;((s.animation = i), n.add(i), (i.onfinish = () => n.delete(i)))
                      }
                    }
                    return s
                  })
              }
              let o = new MutationObserver(i)
              return (
                o.observe(e, { subtree: !0, childList: !0, characterData: !0 }),
                i(),
                (r = !0) => {
                  if ((r && e.isConnected && i(), o.disconnect(), (t = []), !r || !e.isConnected)) {
                    for (let e of n) e.cancel()
                    n.clear()
                  }
                }
              )
            })(i),
            r = (r = !0) => {
              ;(e(r), t(r), n(r))
            }
          return ((E.current = r), () => r())
        }
      }, [i, M, C]),
        (0, l.useImperativeHandle)(n.rootRef, () => i, [i]))
      let j = (0, l.useRef)(null),
        A = (0, l.useRef)(null),
        k = (0, l.useCallback)((e) => {
          let t = e.nativeEvent,
            n = (0, a.ty)(t)
          if (!n) return
          let r = A.current,
            i =
              r?.target === t.target ||
              (r?.target instanceof Node &&
                t.target instanceof Node &&
                (r.target.contains(t.target) || t.target.contains(r.target))),
            o = "click" === t.type && r && i,
            l = o ? r.interaction : { capability: n, claimed: !1 }
          if (o) ((0, a.v9)(n), clearTimeout(r.timeout), (A.current = null))
          else if ("pointerup" === t.type) {
            r && (clearTimeout(r.timeout), r.interaction.claimed || (0, a.v9)(r.interaction.capability))
            let e = {
              interaction: l,
              target: t.target,
              timeout: setTimeout(() => {
                ;(A.current === e && (A.current = null), l.claimed || (0, a.v9)(l.capability))
              }, 0),
            }
            A.current = e
          }
          ;((j.current = l),
            setTimeout(() => {
              ;(j.current === l && (j.current = null),
                l.claimed || A.current?.interaction === l || (0, a.v9)(l.capability))
            }, 0))
        }, []),
        N = (0, l.useCallback)(() => {
          let e = j.current
          if (e) return ((e.claimed = !0), e.capability)
        }, []),
        T = (0, l.useCallback)(
          (e) => {
            let n = j.current?.capability
            t?.(n ? { ...e, capability: n } : e)
          },
          [t],
        )
      return (0, r.jsx)("div", {
        ref: o,
        dir: "auto",
        className: [s, c, C ? d.Reveal : d.LegacyReveal, n.className].filter(Boolean).join(" "),
        "data-d-direction": "col",
        "data-d-streaming-reveal": n.animateStreamingReveal || M ? "" : void 0,
        "data-d-streaming-color": C && n.enableFluidStreamingAnimationColor ? "" : void 0,
        onClickCapture: k,
        onKeyDownCapture: k,
        onPointerUpCapture: k,
        children: (0, r.jsx)(x.gA.Provider, {
          value: M,
          children:
            i &&
            (0, r.jsx)(L, {
              ...n,
              getInteractionCapability: N,
              onInteraction: t ? T : void 0,
              runnerFactory: e,
              wrapper: i,
            }),
        }),
      })
    }
    function L({
      appData: e,
      constants: t,
      theme: n,
      cspNonce: i,
      dil: o,
      dilComponents: s,
      disableExternalMedia: c,
      components: d = {},
      globals: u,
      getInteractionCapability: f,
      onInteraction: h,
      onNodeError: m,
      onSnapshot: p,
      onInputRenderState: g,
      onCommittedInputSnapshot: v,
      errorFallback: b,
      isMobile: y,
      runnerFactory: x,
      persistState: w,
      wrapper: S,
      ...E
    }) {
      let A = (function ({ speechSynthesis: e, dictation: t, deferredTurn: n }) {
          return (0, l.useMemo)(() => ({ speechSynthesis: e, dictation: t, deferredTurn: n }), [e, t, n])
        })(E),
        k = C(S, { syncInitialMeasurement: !0 }),
        I = (0, l.useRef)({
          appData: e ?? _,
          constants: t ?? M,
          theme: n ?? "light",
          activeBreakpoints: k,
          isMobile: y ?? !1,
        })
      I.current = { appData: e ?? _, constants: t ?? M, theme: n ?? "light", activeBreakpoints: k, isMobile: y ?? !1 }
      let T = (0, l.useRef)(o)
      T.current = o
      let R = (0, l.useRef)(s)
      R.current = s
      let [O, D] = (0, l.useState)({ sources: s, version: 0 })
      if (O.sources !== s) {
        let e =
          x !== j &&
          Object.hasOwn(u ?? {}, "__modelGenUI") &&
          Object.entries(O.sources ?? {}).every(([e, t]) => void 0 !== s && Object.hasOwn(s, e) && s[e] === t)
        D({ sources: s, version: O.version + +!e })
      }
      let F = (0, l.useRef)(w)
      F.current = w
      let P = null != w,
        W = (0, l.useRef)(null),
        q = (0, l.useMemo)(
          () =>
            P
              ? {
                  getItem: (e) => F.current?.getItem(e) ?? null,
                  setItem: (e, t) => {
                    F.current?.setItem(e, t)
                  },
                }
              : void 0,
          [P],
        ),
        [z, B] = (0, l.useState)(null),
        $ = (0, l.useRef)(null)
      ;(0, l.useEffect)(() => {
        let e = T.current,
          t = {
            cspNonce: i,
            componentLibraryVersion: O.version,
            globals: u,
            hostExtensions: A,
            runner: x(e, { cspNonce: i, data: I.current, dilComponents: R.current, globals: u, ...A, persistState: q }),
            runnerFactory: x,
          }
        return (
          ($.current = { runner: t.runner, compiledDil: e, dilComponents: R.current }),
          B(t),
          () => {
            t.runner.dispose()
          }
        )
      }, [i, O.version, u, A, x, q])
      let U =
          null != z &&
          z.cspNonce === i &&
          z.componentLibraryVersion === O.version &&
          z.globals === u &&
          z.hostExtensions === A &&
          z.runnerFactory === x
            ? z.runner
            : null,
        [H, K] = (0, l.useState)(null),
        G = null != v
      return ((0, l.useLayoutEffect)(() => {
        g?.("pending")
      }, [g, U, o, s, e, t, n, k, y]),
      (0, l.useEffect)(() => {
        if (!U) return
        let r = { appData: e ?? _, constants: t ?? M, theme: n ?? "light", activeBreakpoints: k, isMobile: y ?? !1 }
        $.current?.runner === U && $.current.compiledDil === o && $.current.dilComponents === s
          ? U.setData(r)
          : (U instanceof a.n1 ? U.setCompiledDil(o, r, s) : U.setCompiledDil(o, r),
            ($.current = { runner: U, compiledDil: o, dilComponents: s }))
      }, [o, s, U, e, t, n, k, y]),
      (0, l.useEffect)(() => {
        if ((!g && !G) || !U) return
        let r = () => {
          ;(G && K(null), g?.("failed"))
        }
        if (!(U instanceof a.n1)) return void r()
        let i = !0
        return (
          U.getInputSettledSnapshot().then(
            (a) => {
              if (i) {
                if (!a) return void r()
                K({
                  runner: U,
                  compiledDil: o,
                  dilComponents: s,
                  appData: e,
                  constants: t,
                  theme: n,
                  activeBreakpoints: k,
                  isMobile: y,
                  snapshot: a,
                })
              }
            },
            () => {
              i && r()
            },
          ),
          () => {
            i = !1
          }
        )
      }, [g, G, U, o, s, e, t, n, k, y]),
      (0, l.useEffect)(() => {
        let e
        if (!P || !U) return
        try {
          let t = F.current?.getItem(a.IS)
          e = null == t ? void 0 : (0, a.L4)(JSON.parse(t))
        } catch {
          e = void 0
        }
        let t = (0, a.dv)(F.current),
          n = W.current?.runner === U ? W.current : null
        ;(n && n.root === e?.serialized) || U.setStateSnapshot(e?.state)
        let r = n?.widgets ?? {}
        for (let e of new Set([...Object.keys(r), ...Object.keys(t)]))
          JSON.stringify(r[e]) !== JSON.stringify(t[e]) && U.setStateSnapshot(t[e], e)
        W.current = { runner: U, root: e?.serialized, widgets: t }
      }),
      null == U)
        ? null
        : (0, r.jsx)(N, {
            activeBreakpoints: k,
            components: d,
            disableExternalMedia: c,
            errorFallback: b,
            getInteractionCapability: f,
            onInteraction: h,
            onNodeError: m,
            onSnapshot: p,
            onInputRenderState: g,
            onCommittedInputSnapshot: v,
            settledInputSnapshot:
              H?.runner === U &&
              H.compiledDil === o &&
              H.dilComponents === s &&
              H.appData === e &&
              H.constants === t &&
              H.theme === n &&
              H.activeBreakpoints === k &&
              H.isMobile === y
                ? H.snapshot
                : void 0,
            runner: U,
            theme: n,
          })
    }
    function N({
      activeBreakpoints: e,
      components: t,
      disableExternalMedia: n,
      errorFallback: i,
      getInteractionCapability: o,
      onInteraction: s,
      onNodeError: c,
      onSnapshot: d,
      onInputRenderState: u,
      onCommittedInputSnapshot: f,
      settledInputSnapshot: h,
      runner: m,
      theme: p,
    }) {
      let g,
        v = (0, l.useMemo)(x.T2, [m]),
        b = (0, l.useSyncExternalStore)(m.subscribe, m.getSnapshot, m.getSnapshot),
        y = null != f,
        w = (0, l.useMemo)(() => (y && m instanceof a.n1 ? new W() : void 0), [y, m]),
        S = m instanceof a.n1 && m.diagnosticsEnabled ? m : void 0,
        E = (0, l.useRef)(0),
        C = S ? ++E.current : 0
      if (
        (S?.recordDiagnostic("react_snapshot", "decision", {
          snapshotVersion: b.version,
          renderPass: C,
          treePresent: null != b.tree,
          hasError: null != b.error,
        }),
        (0, l.useLayoutEffect)(() => {
          ;(S?.recordDiagnostic("react_commit", "resolved", { snapshotVersion: b.version, renderPass: C }),
            S?.publishDiagnostics())
        }, [S, C, b.version]),
        (0, l.useLayoutEffect)(() => {
          u && h && b.version >= h.version && u(b.error ? "failed" : "ready")
        }, [u, h, b]),
        (0, l.useLayoutEffect)(() => {
          if (f && w)
            return w.subscribe(f, (e) =>
              h && !e && !b.error && null != b.tree && b.version >= h.version && m.getSnapshot() === b ? b : void 0,
            )
        }, [w, f, m, h, b]),
        (0, l.useLayoutEffect)(() => () => w?.invalidate(), [w]),
        (0, l.useEffect)(() => {
          ;(S?.recordDiagnostic("react_snapshot_effect", "begin", { snapshotVersion: b.version }),
            S?.publishDiagnostics(),
            d?.(b))
        }, [S, d, b]),
        b.error && null == b.tree)
      )
        return i ?? (0, r.jsx)("div", { role: "alert", children: b.error.message })
      let _ = null == b.tree || Array.isArray(b.tree) ? b.tree : [b.tree],
        M = S
          ? (e, t) => {
              ;(S.recordDiagnostic("react_node_error", "threw", {
                snapshotVersion: b.version,
                renderPass: C,
                error: e,
              }),
                S.publishDiagnostics(),
                c?.(e, t))
            }
          : c
      S?.recordDiagnostic("react_materialize", "begin", { snapshotVersion: b.version, renderPass: C })
      try {
        g = R(_, {
          components: t,
          eventStore: v,
          getInteractionCapability: o,
          onNodeError: M,
          failureTracker: w,
          runner: m,
        })
      } catch (e) {
        throw (
          S?.recordDiagnostic("react_materialize", "threw", { snapshotVersion: b.version, renderPass: C, error: e }),
          S?.publishDiagnostics(),
          e
        )
      }
      return (
        S?.recordDiagnostic("react_materialize", "returned", { snapshotVersion: b.version, renderPass: C }),
        (0, r.jsx)(x.EM.Provider, {
          value: p ?? "light",
          children: (0, r.jsx)(x.Ob.Provider, {
            value: n ?? !1,
            children: (0, r.jsx)(x.Cd.Provider, {
              value: v,
              children: (0, r.jsx)(x.nn.Provider, {
                value: s,
                children: (0, r.jsx)(x.XI.Provider, {
                  value: e,
                  children: (0, r.jsx)(x.t$.Provider, { value: m.subscribeDictationAudioLevels, children: g }),
                }),
              }),
            }),
          }),
        })
      )
    }
    let T = new Set(["__proto__", "as", "class", "className", "dangerouslySetInnerHTML", "style"])
    function R(e, t) {
      return null == e || "boolean" == typeof e
        ? null
        : "string" == typeof e || "number" == typeof e
          ? e
          : Array.isArray(e)
            ? e.map((e, n) => {
                var i, o
                return (0, r.jsx)(
                  l.Fragment,
                  { children: R(e, t) },
                  ((i = e),
                  (o = n),
                  null == i || "object" != typeof i || Array.isArray(i) || null == i.key
                    ? JSON.stringify(["dil-renderer", "fallback", o])
                    : q(i.key)),
                )
              })
            : O(e, t)
    }
    function O(e, t) {
      var n, i, o
      let s = Object.hasOwn(t.components, e.type) ? t.components[e.type] : void 0,
        c = s
          ? (0, l.createElement)(
              s,
              ((n = e.props),
              (i = t),
              (o = e),
              Object.fromEntries(
                Object.entries(n)
                  .filter(([e]) => !T.has(e))
                  .map(([e, t]) => [
                    e,
                    (function e(t, n, r, i) {
                      var o, l, s, c
                      if ((0, a.OI)(t)) {
                        let e = (e, o) => {
                            var a, l
                            let s =
                                1 === (a = e).length &&
                                (z((l = a[0])) ||
                                  (null != l && "object" == typeof l && "nativeEvent" in l && z(l.nativeEvent)))
                                  ? []
                                  : a,
                              c =
                                "onVisible" === i || "onLoad" === i || "onError" === i
                                  ? void 0
                                  : n.getInteractionCapability()
                            return c
                              ? n.runner.triggerWithInteraction(t, { capability: c, source: r }, o, ...s)
                              : o
                                ? n.runner.triggerWithError(t, ...s)
                                : n.runner.trigger(t, ...s)
                          },
                          o = (...t) => e(t, !1)
                        return (0, x.Z4)(
                          (0, x.tu)(o, (e, ...t) => {
                            let r
                            try {
                              r = o(...t)
                            } catch (t) {
                              throw (n.eventStore.complete(e), t)
                            }
                            return (
                              Promise.resolve(r).then(
                                () => n.eventStore.complete(e),
                                () => n.eventStore.complete(e),
                              ),
                              r
                            )
                          }),
                          (...t) => {
                            let n = e(t, !0)
                            return (Promise.resolve(n).catch(() => void 0), n)
                          },
                        )
                      }
                      return (0, a.kP)(t)
                        ? {
                            __dilMessenger: t.__dilMessenger,
                            channelId: t.channelId,
                            commands:
                              ((o = t.commands),
                              (l = n),
                              (s = t.command),
                              (0, a.OI)(s)
                                ? new Proxy(Object.create(null), {
                                    get(e, t) {
                                      if ("string" == typeof t && "then" !== t)
                                        return (e) => l.runner.triggerWithError(s, t, e)
                                    },
                                  })
                                : Object.fromEntries(
                                    Object.entries(o).map(([t, n]) => [
                                      t,
                                      (0, a.OI)(n) ? (e) => l.runner.triggerWithError(n, e) : e(n, l),
                                    ]),
                                  )),
                            onEvent: e(t.onEvent, n, r),
                            registerTransport: (e) => n.runner.registerDilMessengerTransport(t.channelId, e),
                          }
                        : null != (c = t) &&
                            "object" == typeof c &&
                            !Array.isArray(c) &&
                            "string" == typeof c.type &&
                            Array.isArray(c.children) &&
                            null != c.props &&
                            "object" == typeof c.props &&
                            !Array.isArray(c.props)
                          ? O(t, n)
                          : Array.isArray(t)
                            ? t.map((t) => e(t, n, r))
                            : null != t && "object" == typeof t
                              ? Object.fromEntries(Object.entries(t).map(([t, i]) => [t, e(i, n, r)]))
                              : t
                    })(t, i, o, e),
                  ]),
              )),
              ...("opaque" === s.childHandling && e.children.length > 0
                ? [e.children]
                : e.children.map((e) => R(e, t))),
            )
          : (0, l.createElement)(D, { component: e.type })
      return (0, r.jsx)(
        F,
        {
          __dilHostElement: c,
          component: e.type,
          onError: t.onNodeError,
          failureTracker: t.failureTracker,
          resetKey: e,
          children: c,
        },
        null == e.key ? void 0 : q(e.key),
      )
    }
    function D({ component: e }) {
      throw Error(`Unknown DIL React component <${e}>`)
    }
    class F extends l.Component {
      state = { failed: !1 }
      static getDerivedStateFromError() {
        return { failed: !0 }
      }
      componentDidMount() {
        this.state.failed && this.props.failureTracker?.fail(this)
      }
      componentDidCatch(e) {
        this.props.failureTracker?.fail(this)
        try {
          this.props.onError?.(e, this.props.component)
        } catch {}
      }
      componentDidUpdate(e, t) {
        ;(e.failureTracker !== this.props.failureTracker
          ? (e.failureTracker?.forget(this), this.state.failed && this.props.failureTracker?.fail(this))
          : t.failed && !this.state.failed && this.props.failureTracker?.recover(this),
          this.state.failed && e.resetKey !== this.props.resetKey && this.setState({ failed: !1 }))
      }
      componentWillUnmount() {
        this.state.failed && this.props.failureTracker?.forget(this)
      }
      render() {
        return this.state.failed ? null : this.props.children
      }
    }
    function P(e, t) {
      try {
        e(t)
      } catch {}
    }
    class W {
      failedNodes = new Set()
      listener
      observer
      subscribe(e, t) {
        this.observer = e
        let n = (n) => P(e, t(n))
        return (
          (this.listener = n),
          n(this.failedNodes.size > 0),
          () => {
            this.listener === n && (this.listener = void 0)
          }
        )
      }
      invalidate() {
        ;(this.observer && P(this.observer, void 0), (this.observer = void 0))
      }
      fail(e) {
        let t = 0 === this.failedNodes.size
        ;(this.failedNodes.add(e), t && this.listener?.(!0))
      }
      recover(e) {
        this.failedNodes.delete(e) && 0 === this.failedNodes.size && this.listener?.(!1)
      }
      forget(e) {
        this.failedNodes.delete(e)
      }
    }
    function q(e) {
      return JSON.stringify(["dil-renderer", "semantic", typeof e, String(e)])
    }
    function z(e) {
      return "u" > typeof Event && e instanceof Event
    }
    var B = n("AfTn"),
      $ = n("r1rH"),
      U = n("gPi3"),
      H = "Renderer-ojZscX"
    function K(e) {
      let t,
        n,
        a,
        l,
        s,
        c,
        d,
        u,
        f,
        h,
        m,
        p = (0, i.c)(23)
      return (
        p[0] !== e
          ? (({ className: t, errorFallback: a, components: n, theme: s, tooltipComponent: c, ...l } = e),
            (p[0] = e),
            (p[1] = t),
            (p[2] = n),
            (p[3] = a),
            (p[4] = l),
            (p[5] = s),
            (p[6] = c))
          : ((t = p[1]), (n = p[2]), (a = p[3]), (l = p[4]), (s = p[5]), (c = p[6])),
        p[7] !== n ? ((d = { ...$.vA, ...n }), (p[7] = n), (p[8] = d)) : (d = p[8]),
        p[9] !== a ? ((u = a ?? (0, r.jsx)(r.Fragment, {})), (p[9] = a), (p[10] = u)) : (u = p[10]),
        p[11] !== l || p[12] !== d || p[13] !== u || p[14] !== s
          ? ((f = (0, r.jsx)(k, { ...l, components: d, errorFallback: u, frameUrl: U.runnerUrl, theme: s })),
            (p[11] = l),
            (p[12] = d),
            (p[13] = u),
            (p[14] = s),
            (p[15] = f))
          : (f = p[15]),
        p[16] !== f || p[17] !== c
          ? ((h = (0, r.jsx)(B.Mk, { component: c, children: f })), (p[16] = f), (p[17] = c), (p[18] = h))
          : (h = p[18]),
        p[19] !== t || p[20] !== h || p[21] !== s
          ? ((m = (0, r.jsx)(o.C, { className: t, theme: s, themeClassName: H, children: h })),
            (p[19] = t),
            (p[20] = h),
            (p[21] = s),
            (p[22] = m))
          : (m = p[22]),
        m
      )
    }
    function G(e) {
      let t,
        n,
        a,
        l,
        s,
        c,
        d,
        u,
        f,
        h = (0, i.c)(19)
      return (
        h[0] !== e
          ? (({ className: t, components: n, theme: l, tooltipComponent: s, ...a } = e),
            (h[0] = e),
            (h[1] = t),
            (h[2] = n),
            (h[3] = a),
            (h[4] = l),
            (h[5] = s))
          : ((t = h[1]), (n = h[2]), (a = h[3]), (l = h[4]), (s = h[5])),
        h[6] !== n ? ((c = { ...$.vA, ...n }), (h[6] = n), (h[7] = c)) : (c = h[7]),
        h[8] !== a || h[9] !== c || h[10] !== l
          ? ((d = (0, r.jsx)(A, { ...a, components: c, theme: l })), (h[8] = a), (h[9] = c), (h[10] = l), (h[11] = d))
          : (d = h[11]),
        h[12] !== d || h[13] !== s
          ? ((u = (0, r.jsx)(B.Mk, { component: s, children: d })), (h[12] = d), (h[13] = s), (h[14] = u))
          : (u = h[14]),
        h[15] !== t || h[16] !== u || h[17] !== l
          ? ((f = (0, r.jsx)(o.C, { className: t, theme: l, themeClassName: H, children: u })),
            (h[15] = t),
            (h[16] = u),
            (h[17] = l),
            (h[18] = f))
          : (f = h[18]),
        f
      )
    }
  },
  abZZ(e, t, n) {
    n.d(
      t,
      {},
      {
        A: function (e, t) {
          let n = t || {}
          return ("" === e[e.length - 1] ? [...e, ""] : e)
            .join((n.padRight ? " " : "") + "," + (!1 === n.padLeft ? "" : " "))
            .trim()
        },
        q: function (e) {
          let t = [],
            n = String(e || ""),
            r = n.indexOf(","),
            i = 0,
            o = !1
          for (; !o;) {
            ;-1 === r && ((r = n.length), (o = !0))
            let e = n.slice(i, r).trim()
            ;((e || !o) && t.push(e), (i = r + 1), (r = n.indexOf(",", i)))
          }
          return t
        },
      },
    )
  },
  N3yO(e, t, n) {
    let r = /[ \t\n\f\r]/g
    function i(e) {
      return "" === e.replace(r, "")
    }
    n.d(
      t,
      {},
      {
        m: function (e) {
          return "object" == typeof e ? "text" === e.type && i(e.value) : i(e)
        },
      },
    )
  },
  gMH0(e, t, n) {
    n.d(
      t,
      {},
      {
        A: function (e) {
          return e.join(" ").trim()
        },
        q: function (e) {
          let t = String(e || "").trim()
          return t ? t.split(/[ \t\n\r\f]+/g) : []
        },
      },
    )
  },
}
//# sourceMappingURL=442953.6e80574cdf.js.map
