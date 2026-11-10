export const __rspack_esm_ids = [106556]
export const __webpack_modules__ = {
  zFHW(e, t, s) {
    var o = s("ABep"),
      i = s("QosV"),
      n = s("on57"),
      r = s("suct"),
      a = s("iodE"),
      l = s("LIss"),
      c = s("zd8w"),
      u = s("Wf1j"),
      d = s("oyxz"),
      g = s("ygO2"),
      p = s("X3K1"),
      m = s("T1PX")
    function h(e) {
      let t,
        s,
        h,
        f,
        b,
        v,
        x,
        y,
        w,
        M,
        j,
        S,
        _ = (0, i.c)(44),
        { loading: z, suggestions: E, visible: A, onLoadingVisible: k, onSelect: N, onVisible: P } = e,
        T = (0, u.A)(),
        C = (0, a.tF)(),
        F = z || E.length > 0,
        W = A && C && F,
        X = (0, m.I)(),
        q = (0, c.useRef)(null)
      _[0] !== W || _[1] !== P
        ? ((t = (e) => {
            W && P(e)
          }),
          (_[0] = W),
          (_[1] = P),
          (_[2] = t))
        : (t = _[2])
      let G = (0, c.useEffectEvent)(t),
        I = 0.35 * !X
      _[3] !== I ? ((s = { duration: I, ease: "easeOut" }), (_[3] = I), (_[4] = s)) : (s = _[4])
      let L = s
      ;(_[5] !== W || _[6] !== z || _[7] !== G
        ? ((h = () => {
            let e = q.current
            if (null == e || z || !W) return
            let t = new IntersectionObserver(
              (e) => {
                for (let t of e) {
                  let e = t.target.getAttribute("data-suggestion-index")
                  t.isIntersecting &&
                    t.intersectionRect.width > 0 &&
                    t.intersectionRect.height > 0 &&
                    null != e &&
                    G(Number(e))
                }
              },
              { root: e },
            )
            for (let s of e.querySelectorAll("[data-suggestion-index]")) t.observe(s)
            return () => t.disconnect()
          }),
          (_[5] = W),
          (_[6] = z),
          (_[7] = G),
          (_[8] = h))
        : (h = _[8]),
        _[9] !== W || _[10] !== z || _[11] !== E
          ? ((f = [W, z, E]), (_[9] = W), (_[10] = z), (_[11] = E), (_[12] = f))
          : (f = _[12]),
        (0, c.useEffect)(h, f))
      let O = !W && "pointer-events-none"
      _[13] !== O
        ? ((b = (0, n.A)("flow-root h-14 min-w-0 pb-4 select-none", O)), (_[13] = O), (_[14] = b))
        : (b = _[14])
      let R = !W,
        B = !W
      _[15] !== T
        ? ((v = T.formatMessage({
            id: "chatgptConversations.followups.label",
            defaultMessage: "Follow-up suggestions",
            description: "Accessible label for suggested questions above the ChatGPT conversation composer",
          })),
          (_[15] = T),
          (_[16] = v))
        : (v = _[16])
      let H = W ? void 0 : "true"
      _[17] !== X ? ((x = !X && { opacity: 0 }), (_[17] = X), (_[18] = x)) : (x = _[18])
      let V = +!!A
      return (
        _[19] !== V ? ((y = { opacity: V }), (_[19] = V), (_[20] = y)) : (y = _[20]),
        _[21] === Symbol.for("react.memo_cache_sentinel") ? ((w = { opacity: 0 }), (_[21] = w)) : (w = _[21]),
        _[22] !== F ||
        _[23] !== W ||
        _[24] !== z ||
        _[25] !== k ||
        _[26] !== N ||
        _[27] !== X ||
        _[28] !== E ||
        _[29] !== L
          ? ((M = F
              ? (0, o.jsxs)(l.P.div, {
                  ref: (e) => {
                    ;((q.current = e), null != e && z && W && k?.())
                  },
                  className:
                    "horizontal-scroll-fade-mask -my-2 hide-scrollbar flex min-w-0 overflow-x-auto overflow-y-hidden overscroll-x-none py-2 [--edge-fade-distance:2rem]",
                  layoutScroll: !0,
                  initial: !1,
                  animate: { opacity: 1 },
                  exit: { opacity: 0 },
                  transition: L,
                  children: [
                    z
                      ? (0, o.jsx)("span", {
                          role: "status",
                          className: "sr-only",
                          children: (0, o.jsx)(d.A, {
                            id: "chatgptConversations.followups.loading",
                            defaultMessage: "Loading suggestions",
                            description:
                              "Screen reader status while follow-up suggestions for the completed ChatGPT answer are loading",
                          }),
                        })
                      : null,
                    (0, o.jsx)("div", {
                      className: "flex w-max shrink-0 items-center gap-2 px-toolbar md:mx-auto md:px-0",
                      children: (z ? [null, null, null] : E).map((e, t) =>
                        (0, o.jsx)(
                          l.P.div,
                          {
                            className: "shrink-0",
                            layout: !X,
                            initial: !z && !X && { opacity: 0 },
                            animate: { opacity: 1 },
                            transition: L,
                            children:
                              null == e
                                ? (0, o.jsx)(p.X, { variant: "conversation-followup" })
                                : (0, o.jsx)(g.$, {
                                    color: "conversationFollowup",
                                    size: "conversationFollowup",
                                    "data-suggestion-index": t,
                                    onClick: (e) => {
                                      W && N(t, e)
                                    },
                                    children: (0, o.jsxs)(
                                      l.P.span,
                                      {
                                        className: "block",
                                        layout: !X,
                                        initial: !X && { opacity: 0 },
                                        animate: { opacity: 1 },
                                        transition: L,
                                        children: [
                                          e.action?.type === "link"
                                            ? (0, o.jsxs)("span", {
                                                "aria-hidden": "true",
                                                children: [e.icon || "🔗", " "],
                                              })
                                            : null,
                                          e.title,
                                        ],
                                      },
                                      e.id,
                                    ),
                                  }),
                          },
                          t,
                        ),
                      ),
                    }),
                  ],
                })
              : null),
            (_[22] = F),
            (_[23] = W),
            (_[24] = z),
            (_[25] = k),
            (_[26] = N),
            (_[27] = X),
            (_[28] = E),
            (_[29] = L),
            (_[30] = M))
          : (M = _[30]),
        _[31] !== M ? ((j = (0, o.jsx)(r.N, { initial: !1, children: M })), (_[31] = M), (_[32] = j)) : (j = _[32]),
        _[33] !== z ||
        _[34] !== v ||
        _[35] !== H ||
        _[36] !== x ||
        _[37] !== y ||
        _[38] !== j ||
        _[39] !== b ||
        _[40] !== R ||
        _[41] !== B ||
        _[42] !== L
          ? ((S = (0, o.jsx)(l.P.div, {
              className: b,
              role: "group",
              "aria-hidden": R,
              inert: B,
              "aria-label": v,
              "aria-busy": z,
              "data-conversation-followup-shelf": !0,
              "data-conversation-followup-reserved-hidden": H,
              initial: x,
              animate: y,
              exit: w,
              transition: L,
              children: j,
            })),
            (_[33] = z),
            (_[34] = v),
            (_[35] = H),
            (_[36] = x),
            (_[37] = y),
            (_[38] = j),
            (_[39] = b),
            (_[40] = R),
            (_[41] = B),
            (_[42] = L),
            (_[43] = S))
          : (S = _[43]),
        S
      )
    }
    s.d(
      t,
      {},
      {
        o: function (e) {
          let t,
            s,
            n = (0, i.c)(5),
            a = e.loading || e.suggestions.length > 0
          return (
            n[0] !== a || n[1] !== e
              ? ((t = a || e.reserveSpace ? (0, o.jsx)(h, { ...e }) : null), (n[0] = a), (n[1] = e), (n[2] = t))
              : (t = n[2]),
            n[3] !== t ? ((s = (0, o.jsx)(r.N, { initial: !1, children: t })), (n[3] = t), (n[4] = s)) : (s = n[4]),
            s
          )
        },
      },
    )
  },
  mBHE(e, t, s) {
    var o = s("ABep"),
      i = s("QosV"),
      n = s("LPKZ"),
      r = s.n(n),
      a = s("zTeN"),
      l = s("Wf1j"),
      c = s("ASxG"),
      u = s("OWtl"),
      d = s("JYRT"),
      g = s("sWz1"),
      p = s("zFHW")
    let m = c
      .array(
        c.object({
          id: c.string().trim().min(1),
          label: c.string().trim().min(1).max(100),
          prompt: c.string().trim().min(1).max(2e3),
        }),
      )
      .max(6)
      .refine((e) => new Set(e.map(({ id: e }) => e)).size === e.length)
    function h(e) {
      let { id: t, label: s, prompt: o } = e
      return { id: t, title: s, body: o, tier: "t1" }
    }
    s.d(
      t,
      {},
      {
        CourseEditSuggestions: function (e) {
          let t,
            s,
            n,
            c,
            f,
            b,
            v,
            x = (0, i.c)(19),
            { conversationId: y, composerController: w } = e,
            M = (0, a.gh)(u.u),
            j = (0, l.A)(),
            S = (0, a._U)(d.X, "1851602600"),
            _ = (0, a._U)(g.X, y)
          if (x[0] !== S || x[1] !== j || x[2] !== _?.courseEdit) {
            f = Symbol.for("react.early_return_sentinel")
            e: {
              let e = [
                  {
                    id: "shorter",
                    label: j.formatMessage({
                      id: "learning.course.customize.composer.shorter.label",
                      defaultMessage: "Shorter lessons",
                      description:
                        "Short suggestion pill above the course editing composer. Selecting it fills a draft requesting shorter lessons without sending it.",
                    }),
                    prompt: j.formatMessage({
                      id: "learning.course.customize.composer.shorter.prompt",
                      defaultMessage: "Make the lessons in my course shorter",
                      description:
                        "Editable chat draft inserted when a learner selects the Shorter lessons course suggestion. The learner can change this text before sending.",
                    }),
                  },
                  {
                    id: "basics",
                    label: j.formatMessage({
                      id: "learning.course.customize.composer.basics.label",
                      defaultMessage: "More basics",
                      description:
                        "Short suggestion pill above the course editing composer for requesting more foundational material.",
                    }),
                    prompt: j.formatMessage({
                      id: "learning.course.customize.composer.basics.prompt",
                      defaultMessage: "Focus my course more on the basics, with simpler explanations",
                      description:
                        "Editable chat draft inserted by the More basics course suggestion. The learner can change it before sending.",
                    }),
                  },
                  {
                    id: "conversation",
                    label: j.formatMessage({
                      id: "learning.course.customize.composer.conversation.label",
                      defaultMessage: "More conversation practice",
                      description:
                        "Short suggestion pill above the course editing composer for requesting more conversation practice in language lessons.",
                    }),
                    prompt: j.formatMessage({
                      id: "learning.course.customize.composer.conversation.prompt",
                      defaultMessage: "Add more conversation practice to my course",
                      description:
                        "Editable chat draft inserted by the More conversation practice course suggestion. The learner can change it before sending.",
                    }),
                  },
                ],
                o = m.safeParse(S?.get("suggestions", e))
              if (((s = o.success ? o.data : e), _?.courseEdit == null || 0 === s.length)) {
                f = null
                break e
              }
              ;((t = p.o), (n = !1), (c = s.map(h)))
            }
            ;((x[0] = S),
              (x[1] = j),
              (x[2] = _?.courseEdit),
              (x[3] = t),
              (x[4] = s),
              (x[5] = n),
              (x[6] = c),
              (x[7] = f))
          } else ((t = x[3]), (s = x[4]), (n = x[5]), (c = x[6]), (f = x[7]))
          return f !== Symbol.for("react.early_return_sentinel")
            ? f
            : (x[8] !== w || x[9] !== y || x[10] !== M || x[11] !== s || x[12] !== _
                ? ((b = (e) => {
                    let t = s[e]
                    null == t ||
                      M.get(g.X, y) !== _ ||
                      w.getChatGptPrompt().prompt.trim().length > 0 ||
                      (w.updateLiteralText(t.prompt, "append"), w.focus())
                  }),
                  (x[8] = w),
                  (x[9] = y),
                  (x[10] = M),
                  (x[11] = s),
                  (x[12] = _),
                  (x[13] = b))
                : (b = x[13]),
              x[14] !== t || x[15] !== n || x[16] !== c || x[17] !== b
                ? ((v = (0, o.jsx)(t, { loading: n, suggestions: c, visible: !0, onVisible: r(), onSelect: b })),
                  (x[14] = t),
                  (x[15] = n),
                  (x[16] = c),
                  (x[17] = b),
                  (x[18] = v))
                : (v = x[18]),
              v)
        },
      },
    )
  },
}
//# sourceMappingURL=106556.4ebe1efe51.js.map
