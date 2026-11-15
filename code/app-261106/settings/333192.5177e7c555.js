export const __rspack_esm_ids = [333192]
export const __webpack_modules__ = {
  kg1F(e, t, s) {
    var a = s("ABep"),
      n = s("QosV"),
      i = s("oyxz"),
      r = s("moNn")
    s.d(
      t,
      {},
      {
        w: function (e) {
          let t,
            s = (0, n.c)(2),
            { effort: o } = e,
            l = r.h[o]
          return (s[0] !== l ? ((t = (0, a.jsx)(i.A, { ...l })), (s[0] = l), (s[1] = t)) : (t = s[1]), t)
        },
      },
    )
  },
  moNn(e, t, s) {
    var a = s("Qgfj")
    let n = (0, a.YK)({
        none: {
          id: "composer.mode.local.reasoning.none.label",
          defaultMessage: "None",
          description: "Reasoning effort label for a given model: none",
        },
        minimal: {
          id: "composer.mode.local.reasoning.minimal.label",
          defaultMessage: "Minimal",
          description: "Reasoning effort label for a given model: minimal",
        },
        low: {
          id: "composer.mode.local.reasoning.low.label.v2",
          defaultMessage: "Light",
          description:
            'Reasoning effort label for a given model: low. "Light" means a low level of computational/reasoning effort, not a short duration. In German, use "Gering" rather than "Kurz".',
        },
        medium: {
          id: "composer.mode.local.reasoning.medium.label",
          defaultMessage: "Medium",
          description:
            "Reasoning effort label for a given model: medium. The adjective modifies reasoning effort and should match the grammatical gender of the localized term for reasoning effort.",
        },
        high: {
          id: "composer.mode.local.reasoning.high.label",
          defaultMessage: "High",
          description:
            "Reasoning effort label for a given model: high. The adjective modifies reasoning effort and should match the grammatical gender of the localized term for reasoning effort.",
        },
        xhigh: {
          id: "composer.mode.local.reasoning.xhigh.label",
          defaultMessage: "Extra High",
          description:
            "Reasoning effort label for a given model: extra high. The adjective modifies reasoning effort and should match the grammatical gender of the localized term for reasoning effort.",
        },
        max: {
          id: "composer.mode.local.reasoning.max.label",
          defaultMessage: "Max",
          description: "Reasoning effort label for a given model: maximum",
        },
        ultra: {
          id: "composer.mode.local.reasoning.ultra.label",
          defaultMessage: "Ultra",
          description: "Reasoning effort label for a given model: ultra",
        },
        persistent: {
          id: "composer.mode.local.reasoning.persistent.label",
          defaultMessage: "Persistent",
          description:
            "Reasoning effort label for a mode that keeps the agent working through automatic continuation until paused or interrupted",
        },
      }),
      i = {
        ...n,
        medium: (0, a.zR)({
          id: "composer.modelPicker.work.reasoning.standard.label",
          defaultMessage: "Standard",
          description: "Work model picker slider label for medium reasoning effort",
        }),
        high: (0, a.zR)({
          id: "composer.modelPicker.work.reasoning.extended.label",
          defaultMessage: "Extended",
          description: "Work model picker slider label for high reasoning effort",
        }),
      }
    s.d(t, {}, { P: i, h: n })
  },
  uh7V(e, t, s) {
    s.d(t, { e: () => tF })
    var a = s("ABep"),
      n = s("QosV"),
      i = s("plV3"),
      r = s("on57"),
      o = s("zd8w"),
      l = s("Wf1j"),
      d = s("oyxz"),
      u = s("zQm0"),
      c = s("EOo5"),
      g = s("OAko"),
      h = s("HOLv"),
      m = s("evwP"),
      p = s("EShr"),
      f = s("Myba"),
      y = s("BSnr"),
      b = s("ZEx5"),
      x = s("hZax"),
      v = s("zTeN"),
      k = s("DBCl"),
      w = s("t162"),
      j = s("Qgfj"),
      _ = s("D6V5"),
      M = s("Sm6l"),
      C = s("yf2D"),
      A = s("CxEf"),
      S = s("aAWW"),
      I = s("OWtl"),
      U = s("I7Ou"),
      T = s("AWNZ"),
      N = s("bZug"),
      L = s("kfGJ"),
      D = s("WRqP"),
      E = s("QXR8"),
      P = s("Bc5r"),
      R = s("Dgwo"),
      O = s("l00C"),
      H = s("rvFo")
    let F = (0, v.vU)(I.u, ({ accountId: e, userId: t }, { get: s, scope: a }) => ({
      enabled: null != s(O.u$, L.fI),
      queryKey: ["top-consuming-chats", e, t, L.fI],
      queryFn: async ({ signal: e }) => {
        let t = (Date.now() - 2592e6) / 1e3,
          s = [],
          n = new Set(),
          i = null
        do {
          e.throwIfAborted()
          let r = await (0, R.V)(a, L.fI).sendRequest(
            "thread/list",
            { archived: !1, cursor: i, limit: 100, modelProviders: null, sortKey: "updated_at", useStateDbOnly: !0 },
            { priority: "background", source: "thread_list" },
          )
          e.throwIfAborted()
          let o = r.nextCursor
          if (null != o && n.has(o)) throw Error("App Server repeated a thread list cursor")
          let l = r.data.filter((e) => e.updatedAt >= t)
          if ((s.push(...l), l.length < r.data.length)) break
          ;(null != o && n.add(o), (i = o))
        } while (null != i)
        return s
      },
      refetchInterval: H.D.ONE_MINUTE,
      retry: !1,
      staleTime: H.D.ONE_MINUTE,
    }))
    var B = s("pbco")
    function W(e) {
      let t,
        s,
        i,
        r,
        l,
        u,
        c,
        g,
        h,
        p,
        f,
        j,
        _,
        C,
        A,
        S,
        D,
        P = (0, n.c)(53),
        { accountId: R, isUsdWorkspace: O, isPolling: H, userId: B } = e,
        W = void 0 !== O && O,
        q = void 0 === H || H,
        V = (0, v.gh)(I.u),
        [Z, Q] = (0, o.useState)(!1),
        [J, Y] = (0, o.useState)(!1),
        ee = (0, x.Zj)("2889458142")
      P[0] !== R || P[1] !== B ? ((t = { accountId: R, userId: B }), (P[0] = R), (P[1] = B), (P[2] = t)) : (t = P[2])
      let et = q || !Z
      P[3] !== et ? ((s = { enabled: et }), (P[3] = et), (P[4] = s)) : (s = P[4])
      let { data: es, isError: ea, isLoading: en, isSuccess: ei, refetch: er } = (0, v._U)(F, t, s)
      P[5] !== ee || P[6] !== es ? ((i = ee ? es?.filter(G) : es), (P[5] = ee), (P[6] = es), (P[7] = i)) : (i = P[7])
      let eo = i,
        el = W ? "usd" : "credit"
      ;(P[8] !== eo ? ((r = eo?.map(K) ?? []), (P[8] = eo), (P[9] = r)) : (r = P[9]),
        P[10] !== R || P[11] !== ee || P[12] !== el || P[13] !== r
          ? ((l = { accountId: R, balanceUnit: el, hostId: L.fI, conversationIds: r, includeSubagents: ee }),
            (P[10] = R),
            (P[11] = ee),
            (P[12] = el),
            (P[13] = r),
            (P[14] = l))
          : (l = P[14]))
      let ed = l,
        eu = q || (!ee && !J)
      P[15] !== eu ? ((u = { enabled: eu }), (P[15] = eu), (P[16] = u)) : (u = P[16])
      let { data: ec, isError: eg, isLoading: eh, isSuccess: em } = (0, v._U)(E.h, ed, u)
      ;(!Z && (ei || ea) && Q(!0), !ee && !J && (ea || (ei && (em || eg))) && Y(!0))
      let [ep, ef] = (0, o.useState)(!1)
      if (
        P[17] !== eo ||
        P[18] !== ea ||
        P[19] !== en ||
        P[20] !== eg ||
        P[21] !== eh ||
        P[22] !== W ||
        P[23] !== er ||
        P[24] !== V ||
        P[25] !== ed ||
        P[26] !== ep ||
        P[27] !== ec
      ) {
        let e
        _ = eo
          ?.flatMap((e) => {
            let t = ec?.get(e.id)
            return null == t ? [] : [{ conversationId: (0, k.JXB)(e.id), title: (0, w.Vm)(e, w.wp), usage: t }]
          })
          .sort((e, t) =>
            W ? (t.usage.costUsd ?? 0) - (e.usage.costUsd ?? 0) : t.usage.creditsUsed - e.usage.creditsUsed,
          )
        let t = en || (null != eo && eo.length > 0 && eh),
          s = ea || eg || (null != eo && eo.length > 0 && (null == ec || _?.length === 0)),
          n = W || (_?.some($) ?? !1)
        ;((h = y.X),
          P[35] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.usage.topConsumingChats.title",
                defaultMessage: "Top chats",
                description: "Title for the highest-usage Work and Codex chats",
              })),
              (P[35] = e))
            : (e = P[35]),
          P[36] !== W
            ? ((j = (0, a.jsx)(y.X.Header, {
                title: e,
                subtitle: W
                  ? (0, a.jsx)(d.A, {
                      id: "settings.usage.topConsumingChats.usdSubtitle",
                      defaultMessage: "Work and Codex chats active in the last 30 days ranked by lifetime spend",
                      description:
                        "Explains that recently active Work and Codex chats are ranked by their native USD spend",
                    })
                  : (0, a.jsx)(d.A, {
                      id: "settings.usage.topConsumingChats.subtitle",
                      defaultMessage: "Work and Codex chats active in the last 30 days ranked by lifetime credits",
                      description:
                        "Explains that recently active Work and Codex chats are ranked by lifetime credit usage",
                    }),
              })),
              (P[36] = W),
              (P[37] = j))
            : (j = P[37]),
          (g = y.X.Content),
          (f = "gap-3"),
          (c = b.t),
          (p = t
            ? (0, a.jsx)(U.u, {
                children: (0, a.jsx)(d.A, {
                  id: "settings.usage.topConsumingChats.loading",
                  defaultMessage: "Loading chat usage…",
                  description: "Loading state while fetching the highest-credit Codex chats",
                }),
              })
            : s
              ? (0, a.jsx)(T.ic, {
                  label: (0, a.jsx)(d.A, {
                    id: "settings.usage.topConsumingChats.error",
                    defaultMessage: "Could not load chat usage",
                    description: "Error state when recent Codex chat usage cannot be loaded",
                  }),
                  control: (0, a.jsx)(M.$, {
                    color: "secondary",
                    size: "toolbar",
                    onClick: () => {
                      ea ? er() : (0, E.Q)(V, ed)
                    },
                    children: (0, a.jsx)(d.A, {
                      id: "settings.usage.topConsumingChats.retry",
                      defaultMessage: "Retry",
                      description: "Retry button for loading top consuming Codex chats",
                    }),
                  }),
                })
              : null == _ || 0 === _.length
                ? (0, a.jsx)(m.W, {
                    layout: "settings-row",
                    children: (0, a.jsx)(d.A, {
                      id: "settings.usage.topConsumingChats.empty",
                      defaultMessage: "No chat activity during this period",
                      description:
                        "Empty state when no Codex chat has recorded activity during the displayed usage period",
                    }),
                  })
                : (0, a.jsxs)("div", {
                    className: `${N.r} pb-2`,
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "grid h-[37px] grid-cols-[minmax(0,1fr)_6rem_6rem] items-center gap-2 px-4 text-xs leading-4 font-medium text-secondary after:hidden",
                        children: [
                          (0, a.jsx)("span", {
                            className: n && !W ? void 0 : "col-span-2",
                            children: (0, a.jsx)(d.A, {
                              id: "settings.usage.topConsumingChats.chatColumn",
                              defaultMessage: "Chat",
                              description: "Column heading for the title of a high-usage Codex chat",
                            }),
                          }),
                          n
                            ? (0, a.jsx)("span", {
                                className: "text-end",
                                children: W
                                  ? (0, a.jsx)(d.A, {
                                      id: "settings.usage.topConsumingChats.nativeSpendColumn",
                                      defaultMessage: "Spent",
                                      description: "Column heading for native US dollar spend on a Codex chat",
                                    })
                                  : (0, a.jsx)(d.A, {
                                      id: "settings.usage.topConsumingChats.estimatedSpendColumn",
                                      defaultMessage: "Est. $ spent",
                                      description: "Column heading for estimated US dollars spent on a Codex chat",
                                    }),
                              })
                            : null,
                          W
                            ? null
                            : (0, a.jsx)("span", {
                                className: "text-end",
                                children: (0, a.jsx)(d.A, {
                                  id: "settings.usage.topConsumingChats.creditsColumn",
                                  defaultMessage: "Credits used",
                                  description: "Column heading for the lifetime credits used by a Codex chat",
                                }),
                              }),
                        ],
                      }),
                      _.slice(0, ep ? void 0 : 5).map((e) =>
                        (0, a.jsx)(X, { isUsdWorkspace: W, showEstimatedSpend: n, task: e }, e.conversationId),
                      ),
                    ],
                  })),
          (P[17] = eo),
          (P[18] = ea),
          (P[19] = en),
          (P[20] = eg),
          (P[21] = eh),
          (P[22] = W),
          (P[23] = er),
          (P[24] = V),
          (P[25] = ed),
          (P[26] = ep),
          (P[27] = ec),
          (P[28] = c),
          (P[29] = g),
          (P[30] = h),
          (P[31] = p),
          (P[32] = f),
          (P[33] = j),
          (P[34] = _))
      } else ((c = P[28]), (g = P[29]), (h = P[30]), (p = P[31]), (f = P[32]), (j = P[33]), (_ = P[34]))
      return (
        P[38] !== c || P[39] !== p
          ? ((C = (0, a.jsx)(c, { children: p })), (P[38] = c), (P[39] = p), (P[40] = C))
          : (C = P[40]),
        P[41] !== ep || P[42] !== _
          ? ((A =
              null != _ && _.length > 5
                ? (0, a.jsx)(M.$, {
                    color: "secondary",
                    className: "self-start",
                    size: "compact",
                    onClick: () => {
                      ef(z)
                    },
                    children: ep
                      ? (0, a.jsx)(d.A, {
                          id: "settings.usage.topConsumingChats.seeLess",
                          defaultMessage: "See less",
                          description: "Action to collapse the full list of top consuming Codex chats",
                        })
                      : (0, a.jsx)(d.A, {
                          id: "settings.usage.topConsumingChats.seeMore",
                          defaultMessage: "See more",
                          description: "Action to expand the full list of top consuming Codex chats",
                        }),
                  })
                : null),
            (P[41] = ep),
            (P[42] = _),
            (P[43] = A))
          : (A = P[43]),
        P[44] !== g || P[45] !== f || P[46] !== C || P[47] !== A
          ? ((S = (0, a.jsxs)(g, { className: f, children: [C, A] })),
            (P[44] = g),
            (P[45] = f),
            (P[46] = C),
            (P[47] = A),
            (P[48] = S))
          : (S = P[48]),
        P[49] !== h || P[50] !== j || P[51] !== S
          ? ((D = (0, a.jsxs)(h, { children: [j, S] })), (P[49] = h), (P[50] = j), (P[51] = S), (P[52] = D))
          : (D = P[52]),
        D
      )
    }
    function z(e) {
      return !e
    }
    function $(e) {
      let { usage: t } = e
      return null != t.costUsd
    }
    function K(e) {
      let { id: t } = e
      return (0, k.JXB)(t)
    }
    function G(e) {
      return !(0, _.I3)(e)
    }
    function X(e) {
      let t,
        s,
        i,
        r,
        l,
        u,
        c,
        g,
        h,
        m,
        p,
        f,
        y,
        b,
        x = (0, n.c)(34),
        { isUsdWorkspace: k, showEstimatedSpend: w, task: _ } = e,
        M = (0, P.M0)()
      x[0] !== _.conversationId
        ? ((t = { hostId: L.fI, threadId: _.conversationId }), (x[0] = _.conversationId), (x[1] = t))
        : (t = x[1])
      let I = (0, v._U)(D.e, t),
        U = (0, o.useRef)(null),
        T = (0, o.useRef)(null),
        N = (0, o.useRef)(!1),
        E = I ?? _.title
      x[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = () => Array.from(T.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"])') ?? [])),
          (x[2] = s))
        : (s = x[2])
      let R = s
      ;(x[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (e) => {
            N.current = e
          }),
          (x[3] = i))
        : (i = x[3]),
        x[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (e) => {
              if ("Escape" === e.key) {
                ;(e.preventDefault(), U.current?.focus(), (0, S.e)())
                return
              }
              if ("Tab" !== e.key) return
              let t = R(),
                s = t[0],
                a = t.at(-1)
              if (e.shiftKey && e.target === s) {
                ;(e.preventDefault(), U.current?.focus())
                return
              }
              if (!e.shiftKey && e.target === a) {
                let t = U.current?.nextElementSibling ?? U.current?.parentElement?.parentElement?.nextElementSibling
                if (!(t instanceof HTMLButtonElement)) return
                ;(e.preventDefault(), (0, S.e)(), t.focus())
              }
            }),
            (x[4] = r))
          : (r = x[4]),
        x[5] !== _.usage || x[6] !== E
          ? ((l = (0, a.jsx)("div", {
              ref: T,
              className: "w-96 max-w-full",
              role: "presentation",
              onKeyDown: r,
              children: (0, a.jsx)(B.x, { title: E, usage: _.usage }),
            })),
            (x[5] = _.usage),
            (x[6] = E),
            (x[7] = l))
          : (l = x[7]),
        x[8] !== M || x[9] !== _.conversationId
          ? ((u = (e) => {
              ;(e.preventDefault(), (0, S.e)(), M(_.conversationId))
            }),
            (x[8] = M),
            (x[9] = _.conversationId),
            (x[10] = u))
          : (u = x[10]),
        x[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (e) => {
              if ("Escape" === e.key && N.current) {
                ;(e.preventDefault(), (0, S.e)())
                return
              }
              if ("Tab" !== e.key || e.shiftKey) return
              let t = R()[0]
              null != t && (e.preventDefault(), t.focus())
            }),
            (x[11] = c))
          : (c = x[11]))
      let O = w && !k ? "flex min-w-0" : "col-span-2 flex min-w-0"
      return (
        x[12] !== E
          ? ((g =
              E ??
              (0, a.jsx)(d.A, {
                id: "settings.usage.topConsumingChats.untitled",
                defaultMessage: "Untitled chat",
                description: "Fallback label for a Codex chat that does not have a title",
              })),
            (x[12] = E),
            (x[13] = g))
          : (g = x[13]),
        x[14] !== g
          ? ((h = (0, a.jsx)(C.E, {
              className: "min-w-0 flex-1 underline underline-offset-2",
              animateOnGroupHover: !0,
              children: g,
            })),
            (x[14] = g),
            (x[15] = h))
          : (h = x[15]),
        x[16] !== h || x[17] !== O
          ? ((m = (0, a.jsx)("span", { className: O, children: h })), (x[16] = h), (x[17] = O), (x[18] = m))
          : (m = x[18]),
        x[19] !== k || x[20] !== w || x[21] !== _.usage
          ? ((p = w
              ? (0, a.jsx)("span", {
                  className: "text-end text-secondary",
                  children:
                    null == _.usage.costUsd
                      ? null
                      : (0, a.jsx)(j.Gr, {
                          value: _.usage.costUsd,
                          style: "currency",
                          currency: "USD",
                          maximumFractionDigits: k && 0.01 > Math.abs(_.usage.costUsd) ? 6 : 2,
                        }),
                })
              : null),
            (x[19] = k),
            (x[20] = w),
            (x[21] = _.usage),
            (x[22] = p))
          : (p = x[22]),
        x[23] !== k || x[24] !== _.usage
          ? ((f = k
              ? null
              : (0, a.jsx)("span", {
                  className: "text-end text-default",
                  children: (0, a.jsx)(j.Gr, { value: _.usage.creditsUsed, maximumFractionDigits: 0 }),
                })),
            (x[23] = k),
            (x[24] = _.usage),
            (x[25] = f))
          : (f = x[25]),
        x[26] !== m || x[27] !== p || x[28] !== f || x[29] !== u
          ? ((y = (0, a.jsxs)("button", {
              className:
                "group grid h-[35px] w-full cursor-interaction grid-cols-[minmax(0,1fr)_6rem_6rem] items-center gap-2 px-4 text-start text-xs leading-4 select-none hover:bg-secondary-ghost-hover not-last:hover:after:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring has-[+button:hover]:after:opacity-0",
              type: "button",
              onClick: u,
              onKeyDown: c,
              children: [m, p, f],
            })),
            (x[26] = m),
            (x[27] = p),
            (x[28] = f),
            (x[29] = u),
            (x[30] = y))
          : (y = x[30]),
        x[31] !== y || x[32] !== l
          ? ((b = (0, a.jsx)(A.m, {
              align: "center",
              delayDuration: 0,
              interactive: !0,
              onOpenChange: i,
              side: "top",
              sideOffset: 8,
              tooltipContent: l,
              tooltipMaxWidth: "min(24rem, calc(100vw - 16px))",
              tooltipBodyClassName: "overflow-y-auto",
              triggerRef: U,
              variant: "rich",
              children: y,
            })),
            (x[31] = y),
            (x[32] = l),
            (x[33] = b))
          : (b = x[33]),
        b
      )
    }
    function q(e, t) {
      return t.formatDate(new Date(e), {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZone: "UTC",
        timeZoneName: "short",
      })
    }
    var V = s("U4pl")
    function Z({ current: e, days: t, enabled: s, fallback: a = [], hasManualSelection: n, hasResolved: i }) {
      let r =
        s &&
        7 === t &&
        !n &&
        !i &&
        e.length > 0 &&
        e.every(({ isError: e, isLoading: t, total: s }) => !e && !t && 0 === s)
      if (!r || 0 === a.length) return { shouldProbe: r, shouldResolve: !1, shouldSelectThirtyDays: !1 }
      let o = a.some(({ total: e }) => (e ?? 0) > 0)
      return {
        shouldProbe: r,
        shouldResolve: o || a.every(({ isError: e, isLoading: t, total: s }) => e || (!t && null != s)),
        shouldSelectThirtyDays: o,
      }
    }
    var Q = s("T0Rc"),
      J = s("xBT4"),
      Y = s("qWrV"),
      ee = s("RQya")
    function et(e) {
      let t,
        s,
        i,
        r,
        u,
        g,
        h,
        m,
        b,
        x,
        v,
        k,
        w,
        j,
        _,
        M,
        C,
        A,
        S,
        I,
        U,
        T,
        N,
        L,
        D,
        E = (0, n.c)(107),
        { isActive: P, isPolling: R, reduceMotion: O, consumerAnalytics: H, scope: F } = e,
        B = void 0 === R || R,
        W = void 0 !== H && H,
        z = (0, o.use)(Y.Wj)?.scope ?? null,
        $ = (0, c.As)(),
        K = (0, l.A)(),
        [G, X] = (0, o.useState)(7),
        [q, et] = (0, o.useState)("model"),
        [ei, er] = (0, o.useState)(null),
        eo = $.accountId ?? null,
        el = $.userId ?? null
      E[0] !== F || E[1] !== eo || E[2] !== el
        ? ((t = { accountId: eo, userId: el, scope: F, hasManualSelection: !1, hasResolved: !1 }),
          (E[0] = F),
          (E[1] = eo),
          (E[2] = el),
          (E[3] = t))
        : (t = E[3])
      let [ed, eu] = (0, o.useState)(t),
        ec = ed.accountId === ($.accountId ?? null) && ed.userId === ($.userId ?? null) && ed.scope === F
      ec ||
        (eu({
          accountId: $.accountId ?? null,
          userId: $.userId ?? null,
          scope: F,
          hasManualSelection: !1,
          hasResolved: !1,
        }),
        X(7),
        er(null))
      let [eg, eh] = (0, o.useState)(!1)
      E[4] !== $ || E[5] !== G || E[6] !== P || E[7] !== B || E[8] !== F
        ? ((s = (0, f.F7)({ isPolling: B, auth: $, days: G, enabled: P, scope: F })),
          (E[4] = $),
          (E[5] = G),
          (E[6] = P),
          (E[7] = B),
          (E[8] = F),
          (E[9] = s))
        : (s = E[9])
      let em = (0, Q.I)(s),
        { data: ep, isLoading: ef, isError: ey, refetch: eb } = em
      E[10] !== $ || E[11] !== G || E[12] !== P || E[13] !== B || E[14] !== F
        ? ((i = (0, f.my)({ isPolling: B, auth: $, days: G, enabled: P, scope: F })),
          (E[10] = $),
          (E[11] = G),
          (E[12] = P),
          (E[13] = B),
          (E[14] = F),
          (E[15] = i))
        : (i = E[15])
      let ex = (0, Q.I)(i),
        { data: ev, isLoading: ek, isError: ew, refetch: ej } = ex,
        e_ = {
          current: [
            { total: ep?.byModel.total, isLoading: ef, isError: ey },
            ...("business" === F ? [{ total: ev?.total, isLoading: ek, isError: ew }] : []),
          ],
          days: G,
          enabled: P && ec,
          ...ed,
        },
        { shouldProbe: eM } = Z(e_),
        {
          data: eC,
          isLoading: eA,
          isError: eS,
        } = (0, Q.I)((0, f.F7)({ isPolling: B, auth: $, days: 30, enabled: eM, scope: F })),
        eI = eM && "business" === F && !eA && !eS && eC?.byModel.total === 0,
        {
          data: eU,
          isLoading: eT,
          isError: eN,
        } = (0, Q.I)((0, f.my)({ isPolling: B, auth: $, days: 30, enabled: eI, scope: F })),
        eL = Z({
          ...e_,
          fallback: [
            { total: eC?.byModel.total, isLoading: eA, isError: eS },
            ...(eI ? [{ total: eU?.total, isLoading: eT, isError: eN }] : []),
          ],
        }),
        eD = (eM && !eL.shouldResolve) || ("business" === F && ek && !ey)
      eL.shouldResolve && (eu(ea), eL.shouldSelectThirtyDays && X(30))
      let [eE, eP] = (0, o.useState)(null),
        eR = eE?.accountId === ($.accountId ?? null) && eE.userId === ($.userId ?? null),
        eO = ef && !ey && null == ep && eR && null != eE.data.turns,
        eH = ek && !ew && null == ev && eR && null != eE.data.linesOfCode,
        eF = eO ? eE.data.turns : ep,
        eB = eH ? eE.data.linesOfCode : ev,
        eW = eF?.["model" === q ? "byModel" : "bySurface"],
        ez = eR && (eE.data.turns?.["model" === q ? "byModel" : "bySurface"].total ?? 0) > 0 && eW?.total === 0,
        e$ = eR && (eE.data.linesOfCode?.total ?? 0) > 0 && eB?.total === 0
      ;(E[16] !== P || E[17] !== ex || E[18] !== F || E[19] !== em
        ? ((r = P
            ? (0, a.jsx)(ee.F, { chart: "product_activity", queries: [em, ...("business" === F ? [ex] : [])] })
            : null),
          (E[16] = P),
          (E[17] = ex),
          (E[18] = F),
          (E[19] = em),
          (E[20] = r))
        : (r = E[20]),
        E[21] !== W
          ? ((g = W
              ? (0, a.jsx)(d.A, {
                  id: "settings.usage.billing.messages.sectionTitle",
                  defaultMessage: "Messages",
                  description: "Heading for the Consumer message count section",
                })
              : (0, a.jsx)(d.A, {
                  id: "settings.usage.billing.productActivity.title",
                  defaultMessage: "Product activity",
                  description:
                    "Heading for a Consumer or Business user's Codex conversation turns and, when available to Business users, lines of code",
                })),
            (u = W
              ? (0, a.jsx)(d.A, {
                  id: "settings.usage.billing.messages.subtitle",
                  defaultMessage: "Track the number of messages sent over time",
                  description: "Description for Consumer message counts grouped by model or product surface",
                })
              : (0, a.jsx)(d.A, {
                  id: "settings.usage.billing.productActivity.subtitle",
                  defaultMessage: "See how your activity varies across products and models",
                  description:
                    "Description for Codex activity charts showing personal conversation turns and eligible lines of code grouped by product surface or AI model",
                })),
            (E[21] = W),
            (E[22] = u),
            (E[23] = g))
          : ((u = E[22]), (g = E[23])),
        E[24] !== W || E[25] !== K
          ? ((h = W
              ? K.formatMessage({
                  id: "settings.usage.billing.messages.periodLabel",
                  defaultMessage: "Messages time range",
                  description: "Accessible label for the Consumer message count date-range selector",
                })
              : K.formatMessage({
                  id: "settings.usage.billing.turns.periodLabel",
                  defaultMessage: "Turns and lines of code time range",
                  description:
                    "Accessible label for the shared seven-day or thirty-day time range used by the turns and lines-of-code charts",
                })),
            (E[24] = W),
            (E[25] = K),
            (E[26] = h))
          : (h = E[26]),
        E[27] !== z ||
        E[28] !== $.accountId ||
        E[29] !== $.userId ||
        E[30] !== G ||
        E[31] !== eB ||
        E[32] !== eW?.total ||
        E[33] !== eF
          ? ((m = (e) => {
              ;(e !== G && (0, Y.$c)(z, "product_activity", e),
                eh(null != eF && eW?.total === 0),
                eP(
                  (eW?.total ?? 0) > 0 || (eB?.total ?? 0) > 0
                    ? { accountId: $.accountId ?? null, data: { turns: eF, linesOfCode: eB }, userId: $.userId ?? null }
                    : null,
                ),
                eu(es),
                X(e))
            }),
            (E[27] = z),
            (E[28] = $.accountId),
            (E[29] = $.userId),
            (E[30] = G),
            (E[31] = eB),
            (E[32] = eW?.total),
            (E[33] = eF),
            (E[34] = m))
          : (m = E[34]),
        E[35] !== G || E[36] !== h || E[37] !== m
          ? ((b = (0, a.jsx)(V.tS, { ariaLabel: h, days: G, onChange: m })),
            (E[35] = G),
            (E[36] = h),
            (E[37] = m),
            (E[38] = b))
          : (b = E[38]),
        E[39] !== W || E[40] !== K
          ? ((x = W
              ? K.formatMessage({
                  id: "settings.usage.billing.messages.breakdownLabel",
                  defaultMessage: "Group messages by model or surface",
                  description: "Accessible label for grouping Consumer messages by AI model or Codex product surface",
                })
              : K.formatMessage({
                  id: "settings.usage.billing.turns.breakdownLabel",
                  defaultMessage: "Group turns by model or surface",
                  description:
                    "Accessible label for the selector that groups the turns chart by AI model or Codex product surface",
                })),
            (E[39] = W),
            (E[40] = K),
            (E[41] = x))
          : (x = E[41]),
        E[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = { id: "model", label: (0, a.jsx)(V.d1, { breakdown: "model" }) }), (E[42] = v))
          : (v = E[42]),
        E[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = [v, { id: "surface", label: (0, a.jsx)(V.d1, { breakdown: "surface" }) }]), (E[43] = k))
          : (k = E[43]),
        E[44] !== z || E[45] !== q
          ? ((w = (e) => {
              ;(e !== q && (0, Y.to)(z, "product_activity", e), er(q), et(e))
            }),
            (E[44] = z),
            (E[45] = q),
            (E[46] = w))
          : (w = E[46]),
        E[47] !== q || E[48] !== x || E[49] !== w
          ? ((j = (0, a.jsx)(p.T, { ariaLabel: x, options: k, selectedId: q, variant: "inset", onSelect: w })),
            (E[47] = q),
            (E[48] = x),
            (E[49] = w),
            (E[50] = j))
          : (j = E[50]),
        E[51] !== b || E[52] !== j
          ? ((_ = (0, a.jsxs)("div", { className: "flex flex-wrap items-center justify-end gap-2", children: [b, j] })),
            (E[51] = b),
            (E[52] = j),
            (E[53] = _))
          : (_ = E[53]),
        E[54] !== u || E[55] !== _ || E[56] !== g
          ? ((M = (0, a.jsx)(y.X.Header, {
              className: "max-sm:flex-col max-sm:items-stretch",
              actionsAlignment: "end",
              title: g,
              subtitle: u,
              actions: _,
            })),
            (E[54] = u),
            (E[55] = _),
            (E[56] = g),
            (E[57] = M))
          : (M = E[57]),
        E[58] !== W || E[59] !== eB?.total || E[60] !== eF || E[61] !== ef || E[62] !== eg || E[63] !== F
          ? ((C =
              null != eF || (ef && eg)
                ? (0, a.jsx)(en, { consumerAnalytics: W, scope: F, hasNoLinesOfCode: eB?.total === 0 })
                : void 0),
            (E[58] = W),
            (E[59] = eB?.total),
            (E[60] = eF),
            (E[61] = ef),
            (E[62] = eg),
            (E[63] = F),
            (E[64] = C))
          : (C = E[64]))
      let eK = !O && ((null != ei && ei !== q) || (null != ep && eR && null != eE.data.turns && eE.data.turns !== ep)),
        eG = ef || eD
      return (
        E[65] === Symbol.for("react.memo_cache_sentinel") ? ((A = () => er(null)), (E[65] = A)) : (A = E[65]),
        E[66] !== eb
          ? ((S = () => {
              eb()
            }),
            (E[66] = eb),
            (E[67] = S))
          : (S = E[67]),
        E[68] !== ey || E[69] !== eO || E[70] !== eg || E[71] !== O || E[72] !== eK || E[73] !== eG || E[74] !== S
          ? ((I = {
              animateDataChanges: eK,
              isError: ey,
              isLoading: eG,
              isUpdating: eO,
              preserveEmptyLayout: eg,
              reduceMotion: O,
              onAnimationEnd: A,
              onRetry: S,
            }),
            (E[68] = ey),
            (E[69] = eO),
            (E[70] = eg),
            (E[71] = O),
            (E[72] = eK),
            (E[73] = eG),
            (E[74] = S),
            (E[75] = I))
          : (I = E[75]),
        E[76] !== W
          ? ((U = W
              ? (0, a.jsx)(d.A, {
                  id: "settings.usage.billing.messages.title",
                  defaultMessage: "Messages",
                  description:
                    "Metric label for the Consumer message count chart; the underlying conversation-turn count is unchanged",
                })
              : (0, a.jsx)(d.A, {
                  id: "settings.usage.billing.turns.title",
                  defaultMessage: "Turns",
                  description: "Label for the chart showing the number of Codex conversation turns",
                })),
            (E[76] = W),
            (E[77] = U))
          : (U = E[77]),
        E[78] !== q ||
        E[79] !== W ||
        E[80] !== eW ||
        E[81] !== ez ||
        E[82] !== F ||
        E[83] !== C ||
        E[84] !== I ||
        E[85] !== U
          ? ((T = (0, a.jsx)(J.t, {
              analyticsChart: "product_activity",
              consumerAnalytics: W,
              breakdown: q,
              data: eW,
              emptyMessage: C,
              preservePopulatedCardLayout: ez,
              scope: F,
              status: I,
              title: U,
              unit: "turns",
            })),
            (E[78] = q),
            (E[79] = W),
            (E[80] = eW),
            (E[81] = ez),
            (E[82] = F),
            (E[83] = C),
            (E[84] = I),
            (E[85] = U),
            (E[86] = T))
          : (T = E[86]),
        E[87] !== W ||
        E[88] !== eB ||
        E[89] !== ew ||
        E[90] !== ek ||
        E[91] !== eH ||
        E[92] !== ev ||
        E[93] !== e$ ||
        E[94] !== eE ||
        E[95] !== eR ||
        E[96] !== O ||
        E[97] !== ej ||
        E[98] !== F
          ? ((N =
              "business" === F && ((eB?.total ?? 0) > 0 || e$ || ew)
                ? (0, a.jsx)(J.t, {
                    analyticsChart: "product_activity",
                    consumerAnalytics: W,
                    data: eB,
                    emptyMessage: (0, a.jsx)(d.A, {
                      id: "settings.usage.billing.linesOfCode.empty",
                      defaultMessage: "No lines of code during this period",
                      description:
                        "Empty state for a Business user's lines-of-code chart when the selected period has no lines of code after a previously populated period",
                    }),
                    preservePopulatedCardLayout: e$,
                    scope: F,
                    status: {
                      animateDataChanges:
                        !O && null != ev && eR && null != eE.data.linesOfCode && eE.data.linesOfCode !== ev,
                      isError: ew,
                      isLoading: ek,
                      isUpdating: eH,
                      reduceMotion: O,
                      onRetry: () => {
                        ej()
                      },
                    },
                    title: (0, a.jsx)(d.A, {
                      id: "settings.usage.billing.linesOfCode.title",
                      defaultMessage: "Lines of code",
                      description:
                        "Label for the chart showing lines of code added through Codex during the selected time range",
                    }),
                    unit: "lines",
                  })
                : null),
            (E[87] = W),
            (E[88] = eB),
            (E[89] = ew),
            (E[90] = ek),
            (E[91] = eH),
            (E[92] = ev),
            (E[93] = e$),
            (E[94] = eE),
            (E[95] = eR),
            (E[96] = O),
            (E[97] = ej),
            (E[98] = F),
            (E[99] = N))
          : (N = E[99]),
        E[100] !== T || E[101] !== N
          ? ((L = (0, a.jsxs)(y.X.Content, { className: "gap-3", children: [T, N] })),
            (E[100] = T),
            (E[101] = N),
            (E[102] = L))
          : (L = E[102]),
        E[103] !== M || E[104] !== L || E[105] !== r
          ? ((D = (0, a.jsxs)(y.X, { children: [r, M, L] })), (E[103] = M), (E[104] = L), (E[105] = r), (E[106] = D))
          : (D = E[106]),
        D
      )
    }
    function es(e) {
      return { ...e, hasManualSelection: !0 }
    }
    function ea(e) {
      return { ...e, hasResolved: !0 }
    }
    function en(e) {
      let t,
        s = (0, n.c)(3),
        { consumerAnalytics: i, scope: r, hasNoLinesOfCode: o } = e
      if (void 0 !== i && i) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.usage.billing.messages.empty",
                defaultMessage: "No messages during this period",
                description: "Empty state for the Consumer message count chart during the selected period",
              })),
              (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      if ("business" === r && o) {
        let e
        return (
          s[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.usage.billing.productActivity.empty",
                defaultMessage: "No turns or lines of code during this period",
                description:
                  "Empty state for a Business user's product activity section when there were no conversation turns and no lines of code during the selected period",
              })),
              (s[1] = e))
            : (e = s[1]),
          e
        )
      }
      return (
        s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(d.A, {
              id: "settings.usage.billing.turns.empty",
              defaultMessage: "No turns during this period",
              description:
                "Empty state for a Consumer or Business user's conversation-turns chart during the selected period",
            })),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    var ei = s("MFyU"),
      er = s("xCr9"),
      eo = s.n(er),
      el = s("x8Nb"),
      ed = s("j2jv"),
      eu = s("sGKa"),
      ec = s("NxWE"),
      eg = s("OuWM"),
      eh = s("ZOaQ"),
      em = s("V8uZ"),
      ep = s("o6lh"),
      ef = s("Rd02"),
      ey = s("RUEO"),
      eb = s("O5Ra")
    let ex = (0, j.YK)({
      desktop_app: {
        id: "settings.usage.surface.desktopApp",
        defaultMessage: "Desktop App",
        description: "Desktop app usage surface",
      },
      work_desktop: {
        id: "settings.usage.surface.workDesktop",
        defaultMessage: "Desktop (Work)",
        description:
          "Short product surface label in Codex usage settings. Identifies Codex usage from the ChatGPT Work desktop client, distinct from the Codex desktop app.",
      },
      cli: { id: "settings.usage.surface.cli", defaultMessage: "CLI", description: "CLI usage surface" },
      vscode: {
        id: "settings.usage.surface.vscode",
        defaultMessage: "Extension",
        description: "VS Code extension usage surface",
      },
      web: { id: "settings.usage.surface.web", defaultMessage: "Cloud", description: "Cloud usage surface" },
      work_web: {
        id: "settings.usage.surface.workWeb",
        defaultMessage: "Web",
        description:
          "Short product surface label in Codex usage settings. Identifies Codex usage from ChatGPT Work on the web, distinct from Codex Cloud usage.",
      },
      mobile: { id: "settings.usage.surface.mobile", defaultMessage: "Mobile", description: "Mobile usage surface" },
      work_mobile: {
        id: "settings.usage.surface.workMobile",
        defaultMessage: "Mobile",
        description:
          "Short product surface label in Codex usage settings. Identifies Codex usage from the ChatGPT Work mobile client.",
      },
      agent_identity: {
        id: "settings.usage.surface.agentIdentity",
        defaultMessage: "Access tokens",
        description: "Access token usage surface",
      },
      github: { id: "settings.usage.surface.github", defaultMessage: "GitHub", description: "GitHub usage surface" },
      github_code_review: {
        id: "settings.usage.surface.githubCodeReview",
        defaultMessage: "GitHub code review",
        description: "GitHub code review usage surface",
      },
      codex_security_cloud: {
        id: "settings.usage.surface.codexSecurityCloud",
        defaultMessage: "Codex Security Cloud",
        description:
          "Short service label in Codex usage charts and credit history for users and workspace admins. Identifies credits used by cloud security scans, distinct from GitHub code review. Preserve the product name Codex Security Cloud.",
      },
      jetbrains: {
        id: "settings.usage.surface.jetbrains",
        defaultMessage: "JetBrains",
        description: "JetBrains usage surface",
      },
      slack: { id: "settings.usage.surface.slack", defaultMessage: "Slack", description: "Slack usage surface" },
      linear: { id: "settings.usage.surface.linear", defaultMessage: "Linear", description: "Linear usage surface" },
      sdk: { id: "settings.usage.surface.sdk", defaultMessage: "SDK", description: "SDK usage surface" },
      exec: { id: "settings.usage.surface.exec", defaultMessage: "Exec", description: "Exec usage surface" },
      unknown: {
        id: "settings.usage.surface.unknown",
        defaultMessage: "Uncategorized",
        description: "Unknown usage surface",
      },
      other: { id: "settings.usage.surface.other", defaultMessage: "Other", description: "Other usage surface" },
    })
    var ev = s("qF12")
    let ek = [
      ...ep.Kj,
      "var(--color-chart-yellow)",
      "var(--color-chart-red)",
      "var(--color-chart-purple)",
      "var(--color-text-tertiary)",
    ]
    var ew = s("MIRZ"),
      ej = s("O28E"),
      e_ = s("pWo8"),
      eM = s("suct"),
      eC = s("iodE"),
      eA = s("LIss")
    let eS = {
      enter: (e) => ({ x: `${100 * e}%` }),
      visible: { x: "0%" },
      exit: (e) => ({ x: `${-(100 * e)}%`, transition: 0 === e ? { duration: 0 } : em.jl }),
    }
    function eI(e) {
      let t,
        s,
        i = (0, n.c)(7),
        { children: r, rangeKey: o, direction: l, reduceMotion: d } = e,
        u = void 0 !== d && d
      return (
        i[0] !== r || i[1] !== l || i[2] !== o || i[3] !== u
          ? ((t = u
              ? r
              : (0, a.jsx)(eM.N, {
                  initial: !1,
                  custom: l,
                  children: (0, a.jsx)(eU, { direction: l, children: r }, o),
                })),
            (i[0] = r),
            (i[1] = l),
            (i[2] = o),
            (i[3] = u),
            (i[4] = t))
          : (t = i[4]),
        i[5] !== t
          ? ((s = (0, a.jsx)("div", { className: "grid h-full min-h-0 min-w-0 overflow-hidden", children: t })),
            (i[5] = t),
            (i[6] = s))
          : (s = i[6]),
        s
      )
    }
    function eU(e) {
      let t,
        s,
        i,
        l,
        d,
        u = (0, n.c)(13),
        { children: c, direction: g } = e,
        h = (0, eC.tF)(),
        [m, p] = (0, o.useState)(!1),
        f = (!h || m) && "pointer-events-none"
      u[0] !== f
        ? ((t = (0, r.A)("col-start-1 row-start-1 h-full min-h-0 min-w-0", f)), (u[0] = f), (u[1] = t))
        : (t = u[1])
      let y = !h || void 0,
        b = !h
      return (
        u[2] !== g ? ((s = 0 === g ? { duration: 0 } : em.jl), (u[2] = g), (u[3] = s)) : (s = u[3]),
        u[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = () => p(!0)), (l = () => p(!1)), (u[4] = i), (u[5] = l))
          : ((i = u[4]), (l = u[5])),
        u[6] !== c || u[7] !== g || u[8] !== t || u[9] !== y || u[10] !== b || u[11] !== s
          ? ((d = (0, a.jsx)(eA.P.div, {
              className: t,
              "aria-hidden": y,
              inert: b,
              custom: g,
              variants: eS,
              initial: "enter",
              animate: "visible",
              exit: "exit",
              transition: s,
              onAnimationStart: i,
              onAnimationComplete: l,
              children: c,
            })),
            (u[6] = c),
            (u[7] = g),
            (u[8] = t),
            (u[9] = y),
            (u[10] = b),
            (u[11] = s),
            (u[12] = d))
          : (d = u[12]),
        d
      )
    }
    var eT = s("g2yw"),
      eN = s("BhIm")
    function eL(e) {
      let t,
        s,
        i,
        r,
        u,
        c,
        g,
        h,
        m,
        p,
        f,
        y,
        b,
        x,
        v = (0, n.c)(293),
        {
          actions: k,
          analyticsChart: w,
          ariaLabel: j,
          barSize: _,
          breakdown: M,
          data: C,
          dateRange: A,
          emptyMessage: S,
          estimatedSpendUsd: I,
          hideTotal: U,
          isPersonalUsage: T,
          preservePopulatedCardLayout: N,
          consumerAnalytics: L,
          selectedDayLegend: D,
          rangeDirection: E,
          scope: P,
          status: R,
          title: O,
          unit: H,
        } = e,
        F = void 0 !== T && T,
        B = void 0 !== N && N,
        W = void 0 !== L && L,
        z = void 0 !== D && D,
        $ = void 0 === H ? "credits" : H,
        K = (0, l.A)(),
        G = "usd" === $,
        X = null != C && "bucketTotals" in C ? C : void 0,
        q = X?.data[0]?.date
      v[0] !== X?.data || v[1] !== X?.data.at
        ? ((t = X?.data.at(-1)?.date), (v[0] = X?.data), (v[1] = X?.data.at), (v[2] = t))
        : (t = v[2])
      let V = t,
        Z = `${q}:${V}`,
        [Q, J] = (0, o.useState)(Z),
        [Y, ee] = (0, o.useState)(null),
        [et, es] = (0, o.useState)(null)
      v[3] !== Y || v[4] !== X?.data || v[5] !== X?.data.findIndex
        ? ((s =
            X?.data.findIndex((e) => {
              let { date: t } = e
              return t === Y
            }) ?? -1),
          (v[3] = Y),
          (v[4] = X?.data),
          (v[5] = X?.data.findIndex),
          (v[6] = s))
        : (s = v[6])
      let ea = s
      v[7] !== et || v[8] !== ea || v[9] !== X?.data || v[10] !== X?.data.findIndex
        ? ((i =
            ea >= 0
              ? ea
              : (X?.data.findIndex((e) => {
                  let { date: t } = e
                  return t === et
                }) ?? -1)),
          (v[7] = et),
          (v[8] = ea),
          (v[9] = X?.data),
          (v[10] = X?.data.findIndex),
          (v[11] = i))
        : (i = v[11])
      let en = i,
        er = X?.data[en],
        em = er?.date,
        eM = (0, o.useId)(),
        [eC, eA] = (0, o.useState)(null),
        [eS, eU] = (0, o.useState)(null),
        [eL, eO] = (0, o.useState)(void 0),
        [eH, eF] = (0, o.useState)(!1)
      Q !== Z && (J(Z), ee(null), es(null), eF(!1))
      let [eB, eW] = (0, o.useState)(null)
      v[12] !== C || v[13] !== eC || v[14] !== F || v[15] !== P || v[16] !== z
        ? ((r =
            z ||
            (F &&
              "workspace" !== P &&
              null != eC &&
              !C?.series.some((e) => {
                let { key: t } = e
                return t === eC
              }))
              ? null
              : eC),
          (v[12] = C),
          (v[13] = eC),
          (v[14] = F),
          (v[15] = P),
          (v[16] = z),
          (v[17] = r))
        : (r = v[17])
      let ez = r,
        [e$, eK] = (0, o.useState)(null),
        [eG, eX] = (0, o.useState)(null),
        eq = C?.total ?? 0,
        eV = null != X || (F && (null == C || !("units" in C) || "credits" !== C.units)),
        eZ = G || null == I || eq <= 0 ? null : I / eq
      v[18] !== M || v[19] !== W || v[20] !== C || v[21] !== K || v[22] !== F || v[23] !== P || v[24] !== $
        ? ((u = (function ({
            breakdown: e,
            data: t,
            intl: s,
            isPersonalUsage: a,
            unit: n,
            scope: i,
            consumerAnalytics: r,
          }) {
            let o = null != t && "bucketTotals" in t,
              l = o
                ? new Map(t.series.toSorted((e, t) => t.total - e.total).map(({ key: e }, t) => [e, ek[t % ek.length]]))
                : null,
              d = ["codex", "work", ...Object.keys(ex)],
              u = (
                o
                  ? t.series
                  : [...(t?.series ?? [])].sort((t, s) =>
                      "workspace" !== i && ("other" === t.key || "other" === s.key)
                        ? Number("other" === t.key) - Number("other" === s.key)
                        : "workspace" !== i && "product" === e
                          ? d.indexOf(t.key) - d.indexOf(s.key)
                          : s.total - t.total,
                    )
              )
                .map(({ key: t, label: a, total: n }, d) => {
                  if (o) return { key: t, name: a, total: n, color: l?.get(t) }
                  let u = r ? ep.Kj[d % ep.Kj.length] : void 0
                  return {
                    key: t,
                    name:
                      "workspace" !== i && Object.hasOwn(ex, t)
                        ? s.formatMessage(ex[t])
                        : (function (e, t, s, a, n) {
                            switch (s) {
                              case "product":
                                if ("workspace" !== n && ("codex" === e || "work" === e))
                                  return a.formatMessage(
                                    {
                                      id: "settings.usage.billing.history.productSeries",
                                      defaultMessage: "{product, select, codex {Codex} work {Work} other {Other}}",
                                      description:
                                        "Short product legend label in a Consumer or Business account holder's personal plan-usage or purchased-credit chart. Codex and Work are OpenAI product names and should remain consistent with their branding.",
                                    },
                                    { product: e },
                                  )
                                return t
                              case "model":
                                if ("workspace" === n) return t
                                return "other" === e ? a.formatMessage(ex.other) : (0, eb.K)(t)
                              case "reasoning":
                                return a.formatMessage(
                                  {
                                    id: "settings.usage.billing.credits.history.reasoningSeries",
                                    defaultMessage:
                                      "{effort, select, none {None} minimal {Minimal} low {Light} medium {Medium} high {High} xhigh {Extra High} max {Max} ultra {Ultra} unspecified {Unspecified} unknown {Unknown} other {Other}}",
                                    description: "Reasoning effort label in the credit usage history chart",
                                  },
                                  { effort: e },
                                )
                              case "speed":
                                return a.formatMessage(
                                  {
                                    id: "settings.usage.billing.credits.history.speedSeries",
                                    defaultMessage:
                                      "{speed, select, fast {Fast mode} ultrafast {Ultrafast} standard {Standard} unknown {Unknown} other {Other}}",
                                    description: "Response speed label in the credit usage history chart",
                                  },
                                  { speed: e },
                                )
                            }
                          })(t, a, e, s, i),
                    total: n,
                    color:
                      "workspace" !== i && "product" === e && ("codex" === t || "work" === t)
                        ? ep.Kj[+("work" === t)]
                        : u,
                  }
                })
                .filter(({ key: e, total: s }) =>
                  r || "usd" === n ? t?.data.some((t) => (t.values[e] ?? 0) !== 0) : s > 0,
                ),
              c = !a && u.length > 3 ? u.filter(({ key: e }) => "other" !== e).slice(0, 3) : u,
              g = u.filter(({ key: e }) => !c.some((t) => t.key === e))
            return {
              availableSeries: u,
              barSeries:
                0 === g.length
                  ? c
                  : [
                      ...c,
                      {
                        color: r ? (0, ev.AS)(c) : void 0,
                        key: ev.bG,
                        name: s.formatMessage({
                          id: "settings.usage.billing.history.other",
                          defaultMessage: "Other",
                          description: "Combined usage from models or surfaces outside the three most-used categories",
                        }),
                      },
                    ],
              otherSeries: g,
              otherSeriesKeys: g.map(({ key: e }) => e),
            }
          })({ breakdown: M, data: C, intl: K, isPersonalUsage: F, unit: $, scope: P, consumerAnalytics: W })),
          (v[18] = M),
          (v[19] = W),
          (v[20] = C),
          (v[21] = K),
          (v[22] = F),
          (v[23] = P),
          (v[24] = $),
          (v[25] = u))
        : (u = v[25])
      let { availableSeries: eQ, barSeries: eJ, otherSeries: eY, otherSeriesKeys: e1 } = u
      v[26] !== eJ || v[27] !== P || v[28] !== e$
        ? ((c =
            "workspace" === P ||
            null == e$ ||
            eJ.some((e) => {
              let { key: t } = e
              return !e$.has(t)
            })
              ? e$
              : null),
          (v[26] = eJ),
          (v[27] = P),
          (v[28] = e$),
          (v[29] = c))
        : (c = v[29])
      let e0 = c
      v[30] !== eJ || v[31] !== W || v[32] !== G || v[33] !== e0 || v[34] !== e$
        ? ((g = W || G ? (0, ev.Ft)(e$, eJ) : e0),
          (v[30] = eJ),
          (v[31] = W),
          (v[32] = G),
          (v[33] = e0),
          (v[34] = e$),
          (v[35] = g))
        : (g = v[35])
      let e2 = g
      v[36] !== eJ || v[37] !== e2 || v[38] !== eS
        ? ((h = eJ.some((e) => {
            let { key: t } = e
            return t === eS && !e2?.has(t)
          })
            ? eS
            : null),
          (v[36] = eJ),
          (v[37] = e2),
          (v[38] = eS),
          (v[39] = h))
        : (h = v[39])
      let e3 = h,
        e4 = null != eG && eG.history === C && eG.series === (W || G ? e$ : e2)
      v[40] !== eJ ||
      v[41] !== W ||
      v[42] !== e2 ||
      v[43] !== e4 ||
      v[44] !== X ||
      v[45] !== eG ||
      v[46] !== R.reduceMotion
        ? ((m =
            W && null != X
              ? X.data.map(
                  (e, t) =>
                    eo()(eJ, (s) => {
                      let { key: a } = s
                      return (
                        (!e2?.has(a) || (!R.reduceMotion && e4 && eG.topSeriesKeys?.[t] === a)) &&
                        (e.values[a] ?? 0) > 0
                      )
                    })?.key,
                )
              : void 0),
          (v[40] = eJ),
          (v[41] = W),
          (v[42] = e2),
          (v[43] = e4),
          (v[44] = X),
          (v[45] = eG),
          (v[46] = R.reduceMotion),
          (v[47] = m))
        : (m = v[47])
      let e5 = m,
        e6 = C?.total
      if (null != C && e2?.size) {
        let e = 0,
          t = 0
        if (v[48] !== eQ || v[49] !== eJ || v[50] !== e2 || v[51] !== e || v[52] !== t) {
          for (let s of eQ) {
            let a = eJ.some((e) => {
              let { key: t } = e
              return t === s.key
            })
              ? s.key
              : ev.bG
            e2.has(a) ? (e += s.total) : (t += s.total)
          }
          ;((v[48] = eQ), (v[49] = eJ), (v[50] = e2), (v[51] = e), (v[52] = t), (v[53] = e), (v[54] = t))
        } else ((e = v[53]), (t = v[54]))
        e6 = G ? t : C.total - e
      }
      v[55] !== C?.data || v[56] !== C?.data.reduce || v[57] !== X
        ? ((p = C?.data.reduce(
            (e, t) => Math.max(e, null != X ? (X.bucketTotals[t.date] ?? 0) : Object.values(t.values).reduce(eR, 0)),
            0,
          )),
          (v[55] = C?.data),
          (v[56] = C?.data.reduce),
          (v[57] = X),
          (v[58] = p))
        : (p = v[58])
      let e7 = p
      v[59] !== eJ || v[60] !== C || v[61] !== G || v[62] !== eY
        ? ((f = G
            ? C?.data.reduce(
                (e, t) => {
                  let s = 0,
                    a = 0
                  for (let e of eJ) {
                    let n =
                      e.key === ev.bG ? eY.reduce((e, s) => e + (t.values[s.key] ?? 0), 0) : (t.values[e.key] ?? 0)
                    ;((s += Math.max(0, n)), (a += Math.min(0, n)))
                  }
                  return { minimum: Math.min(e.minimum, a), maximum: Math.max(e.maximum, s) }
                },
                { minimum: 0, maximum: 0 },
              )
            : void 0),
          (v[59] = eJ),
          (v[60] = C),
          (v[61] = G),
          (v[62] = eY),
          (v[63] = f))
        : (f = v[63])
      let e8 = f
      v[64] !== X
        ? ((y = X?.data.every((e) => {
            let { date: t } = e
            return null != X.bucketTotals[t]
          })
            ? X.data.reduce((e, t) => {
                let { date: s } = t
                return e + (X.bucketTotals[s] ?? 0)
              }, 0)
            : 0),
          (v[64] = X),
          (v[65] = y))
        : (y = v[65])
      let e9 = y,
        te = null == em ? e9 : X?.bucketTotals[em],
        tt = A?.startDate ?? q,
        ts = A?.endDate ?? V
      v[66] !== K || v[67] !== em || v[68] !== ts || v[69] !== tt
        ? ((b =
            null != tt && null != ts
              ? K.formatDateTimeRange(new Date(`${em ?? tt}T00:00:00Z`), new Date(`${em ?? ts}T00:00:00Z`), {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  timeZone: "UTC",
                })
              : void 0),
          (v[66] = K),
          (v[67] = em),
          (v[68] = ts),
          (v[69] = tt),
          (v[70] = b))
        : (b = v[70])
      let ta = b
      if (
        v[71] !== k ||
        v[72] !== e3 ||
        v[73] !== ez ||
        v[74] !== w ||
        v[75] !== j ||
        v[76] !== eJ ||
        v[77] !== _ ||
        v[78] !== eL ||
        v[79] !== W ||
        v[80] !== C ||
        v[81] !== S ||
        v[82] !== I ||
        v[83] !== q ||
        v[84] !== e2 ||
        v[85] !== U ||
        v[86] !== K ||
        v[87] !== F ||
        v[88] !== eV ||
        v[89] !== e4 ||
        v[90] !== eH ||
        v[91] !== G ||
        v[92] !== V ||
        v[93] !== em ||
        v[94] !== en ||
        v[95] !== ta ||
        v[96] !== er ||
        v[97] !== te ||
        v[98] !== e7 ||
        v[99] !== eY ||
        v[100] !== e1 ||
        v[101] !== e9 ||
        v[102] !== ea ||
        v[103] !== B ||
        v[104] !== E ||
        v[105] !== Z ||
        v[106] !== X ||
        v[107] !== eG ||
        v[108] !== P ||
        v[109] !== z ||
        v[110] !== e8?.maximum ||
        v[111] !== e8?.minimum ||
        v[112] !== eB ||
        v[113] !== eM ||
        v[114] !== R ||
        v[115] !== e$ ||
        v[116] !== O ||
        v[117] !== e5 ||
        v[118] !== eq ||
        v[119] !== $ ||
        v[120] !== eZ ||
        v[121] !== e6
      ) {
        let e,
          t,
          s,
          n,
          i,
          r,
          o,
          l,
          u,
          c,
          g,
          h,
          m,
          p,
          f,
          y,
          b,
          M,
          A,
          T,
          N,
          L,
          D,
          H,
          Q,
          J,
          Y,
          et,
          eo,
          eb =
            z && null != X
              ? new Map(
                  eJ.map((e) => {
                    let { key: t, total: s } = e
                    return [t, null != te && te > 0 ? (null == er ? (s ?? 0) : (er.values[t] ?? 0)) / te : null]
                  }),
                )
              : void 0
        if (
          v[123] !== eJ ||
          v[124] !== q ||
          v[125] !== K ||
          v[126] !== V ||
          v[127] !== e9 ||
          v[128] !== X ||
          v[129] !== z
        ) {
          let t
          ;(v[131] !== q || v[132] !== K || v[133] !== V || v[134] !== e9 || v[135] !== X || v[136] !== z
            ? ((t = (e) =>
                z || null == X || e9 <= 0 || null == q || null == V
                  ? e
                  : {
                      ...e,
                      tooltip: (0, a.jsx)(d.A, {
                        id: "settings.usage.billing.chart.legend.totalUsagePeriodSummary",
                        defaultMessage: "{series} · {share} of total usage · {period} UTC",
                        description:
                          "Tooltip for a usage chart legend item, showing its share of all plan and purchased-credit usage in the selected UTC period. Hiding series does not change this denominator",
                        values: {
                          series: e.name,
                          share: K.formatNumber((e.total ?? 0) / e9, { style: "percent", maximumFractionDigits: 1 }),
                          period: K.formatDateTimeRange(new Date(`${q}T00:00:00Z`), new Date(`${V}T00:00:00Z`), {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            timeZone: "UTC",
                          }),
                        },
                      }),
                    }),
              (v[131] = q),
              (v[132] = K),
              (v[133] = V),
              (v[134] = e9),
              (v[135] = X),
              (v[136] = z),
              (v[137] = t))
            : (t = v[137]),
            (e = eJ.map(t)),
            (v[123] = eJ),
            (v[124] = q),
            (v[125] = K),
            (v[126] = V),
            (v[127] = e9),
            (v[128] = X),
            (v[129] = z),
            (v[130] = e))
        } else e = v[130]
        let ex = e,
          { onAnimationEnd: ek } = R
        v[138] !== ek || v[139] !== eG
          ? ((t = () => {
              ;(ek?.(), eX((e) => (e === eG ? null : e)))
            }),
            (v[138] = ek),
            (v[139] = eG),
            (v[140] = t))
          : (t = v[140])
        let eC = t
        v[141] !== C || v[142] !== ek
          ? ((s = () => {
              ;(eO(C), eX(null), ek?.())
            }),
            (v[141] = C),
            (v[142] = ek),
            (v[143] = s))
          : (s = v[143])
        let eS = s
        v[144] !== C || v[145] !== e5
          ? ((n = (e) => {
              ;(eO(C), eX(null == C ? null : { history: C, series: e, topSeriesKeys: e5 }), eK(e))
            }),
            (v[144] = C),
            (v[145] = e5),
            (v[146] = n))
          : (n = v[146])
        let eR = n
        v[147] !== X
          ? ((i = (e, t, s) => {
              s.stopPropagation()
              let a = X?.data[t]?.date
              null != a && (ee((e) => (e === a ? null : a)), es(null), eF(!0))
            }),
            (v[147] = X),
            (v[148] = i))
          : (i = v[148])
        let eQ = i
        v[149] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = () => {
              ;(ee(null), es(null), eF(!0))
            }),
            (v[149] = r))
          : (r = v[149])
        let e0 = r
        if (
          v[150] !== e3 ||
          v[151] !== eJ ||
          v[152] !== eL ||
          v[153] !== W ||
          v[154] !== C ||
          v[155] !== eC ||
          v[156] !== eS ||
          v[157] !== eQ ||
          v[158] !== e2 ||
          v[159] !== F ||
          v[160] !== e4 ||
          v[161] !== eH ||
          v[162] !== eY ||
          v[163] !== e1 ||
          v[164] !== ea ||
          v[165] !== Z ||
          v[166] !== P ||
          v[167] !== z ||
          v[168] !== eM ||
          v[169] !== R.animateDataChanges ||
          v[170] !== R.reduceMotion ||
          v[171] !== e5
        ) {
          let e
          ;(v[173] !== e3 ||
          v[174] !== eL ||
          v[175] !== W ||
          v[176] !== C ||
          v[177] !== eC ||
          v[178] !== eS ||
          v[179] !== eQ ||
          v[180] !== e2 ||
          v[181] !== F ||
          v[182] !== e4 ||
          v[183] !== eH ||
          v[184] !== eY ||
          v[185] !== e1 ||
          v[186] !== ea ||
          v[187] !== Z ||
          v[188] !== P ||
          v[189] !== z ||
          v[190] !== eM ||
          v[191] !== R.animateDataChanges ||
          v[192] !== R.reduceMotion ||
          v[193] !== e5
            ? ((e = (e, t) =>
                W
                  ? (0, a.jsx)(
                      ey.h,
                      {
                        seriesKey: e.key,
                        name: e.key,
                        color: e.color,
                        dimmed: null != e3 && e3 !== e.key,
                        highlightHoveredDay: z && !eH,
                        pinnedDayIndex: ea >= 0 ? ea : void 0,
                        hidden: !!e2?.has(e.key),
                        otherSeriesKeys: e.key === ev.bG ? e1 : void 0,
                        stackId: "usage",
                        stackClipId: null == e5 ? void 0 : `${eM}-${Z}`,
                        topSeriesKeys: e5,
                        stackRadius: ev.Ib,
                        grow: !!R.animateDataChanges && (!z || eL !== C) && !e4 && !R.reduceMotion,
                        restack: e4 && !R.reduceMotion,
                        onAnimationEnd: eC,
                        onClick: z ? eQ : void 0,
                        onGrowEnd: eS,
                        onHoverChange: z ? void 0 : eA,
                      },
                      e.key,
                    )
                  : (0, a.jsx)(
                      el.yP,
                      {
                        animationDuration: 150,
                        animationEasing: "ease-out",
                        dataKey: (t) =>
                          e2?.has(e.key)
                            ? null
                            : e.key === ev.bG
                              ? eY.reduce((e, s) => e + (t.values[s.key] ?? 0), 0)
                              : (t.values[e.key] ?? 0),
                        fill: e.color ?? ep.Kj[t % ep.Kj.length],
                        isAnimationActive: !R.reduceMotion && (("workspace" !== P && !!R.animateDataChanges) || e4),
                        name: e.key,
                        onAnimationEnd: eC,
                        onMouseEnter: () => {
                          eA(e.key)
                        },
                        onMouseLeave: () => {
                          eA(null)
                        },
                        radius: 0,
                        stackId: "usage",
                      },
                      F ? t : e.key,
                    )),
              (v[173] = e3),
              (v[174] = eL),
              (v[175] = W),
              (v[176] = C),
              (v[177] = eC),
              (v[178] = eS),
              (v[179] = eQ),
              (v[180] = e2),
              (v[181] = F),
              (v[182] = e4),
              (v[183] = eH),
              (v[184] = eY),
              (v[185] = e1),
              (v[186] = ea),
              (v[187] = Z),
              (v[188] = P),
              (v[189] = z),
              (v[190] = eM),
              (v[191] = R.animateDataChanges),
              (v[192] = R.reduceMotion),
              (v[193] = e5),
              (v[194] = e))
            : (e = v[194]),
            (o = eJ.map(e)),
            (v[150] = e3),
            (v[151] = eJ),
            (v[152] = eL),
            (v[153] = W),
            (v[154] = C),
            (v[155] = eC),
            (v[156] = eS),
            (v[157] = eQ),
            (v[158] = e2),
            (v[159] = F),
            (v[160] = e4),
            (v[161] = eH),
            (v[162] = eY),
            (v[163] = e1),
            (v[164] = ea),
            (v[165] = Z),
            (v[166] = P),
            (v[167] = z),
            (v[168] = eM),
            (v[169] = R.animateDataChanges),
            (v[170] = R.reduceMotion),
            (v[171] = e5),
            (v[172] = o))
        } else o = v[172]
        let tt = o
        v[195] !== W || v[196] !== K || v[197] !== F || v[198] !== P || v[199] !== $
          ? ((l = (function (e, t, s, n, i) {
              if ("usd" === i)
                return {
                  title: (0, a.jsx)(d.A, {
                    id: "settings.usage.billing.spend.title",
                    defaultMessage: "Spend",
                    description: "Metric label for an Enterprise workspace member's native USD spend",
                  }),
                  ariaLabel: e.formatMessage({
                    id: "settings.usage.billing.spend.chartLabel",
                    defaultMessage: "Spend in USD",
                    description: "Accessible label for the Enterprise workspace member's native USD spend chart",
                  }),
                  emptyMessage: (0, a.jsx)(d.A, {
                    id: "settings.usage.billing.spend.empty",
                    defaultMessage: "No spend recorded during this period",
                    description:
                      "Empty state for the Enterprise workspace member's native USD spend history when the selected period has no spend",
                  }),
                }
              let r = t
                ? (0, a.jsx)(d.A, {
                    id: "settings.usage.billing.chart.empty",
                    defaultMessage: "No usage recorded yet",
                    description: "Empty state for enterprise billing and usage charts",
                  })
                : (0, a.jsx)(d.A, {
                    id: "settings.usage.billing.credits.empty",
                    defaultMessage: "No plan usage or credits consumed during this period",
                    description:
                      "Empty state when the selected enterprise workspace usage period has no plan usage or consumed credits",
                  })
              return t
                ? {
                    emptyMessage: r,
                    title: (0, a.jsx)(d.A, {
                      id: "settings.usage.billing.personalUsage.title",
                      defaultMessage: "Plan usage",
                      description:
                        "Chart title showing a Consumer or Business user's own included-plan Codex activity or included plan credits, not separately purchased credits or remaining allowance",
                    }),
                    ariaLabel: e.formatMessage({
                      id: "settings.usage.billing.personalUsage.chartLabel",
                      defaultMessage: "Plan usage",
                      description:
                        "Accessible label for a Consumer or Business user's included-plan Codex usage chart; values represent relative activity or included plan credits, not separately purchased credits or remaining allowance",
                    }),
                  }
                : "workspace" === s || n
                  ? {
                      emptyMessage: r,
                      title: (0, a.jsx)(d.A, {
                        id: "settings.usage.billing.credits.title",
                        defaultMessage: "Credits used",
                        description: "Label for the Consumer or enterprise credits usage chart",
                      }),
                      ariaLabel: e.formatMessage({
                        id: "settings.usage.billing.credits.chartLabel",
                        defaultMessage: "Credits used",
                        description: "Accessible label for the Consumer or enterprise credits usage chart",
                      }),
                    }
                  : {
                      emptyMessage: r,
                      title: (0, a.jsx)(d.A, {
                        id: "settings.usage.billing.credits.personalTitle",
                        defaultMessage: "Credits spent",
                        description:
                          "Chart title showing separately purchased credits spent by the current Consumer or Business workspace member in Codex desktop analytics settings",
                      }),
                      ariaLabel: e.formatMessage({
                        id: "settings.usage.billing.credits.personalChartLabel",
                        defaultMessage: "Credits spent",
                        description:
                          "Accessible label for a Consumer or Business workspace member's purchased-credit spending chart in Codex desktop analytics settings",
                      }),
                    }
            })(K, F, P, W, $)),
            (v[195] = W),
            (v[196] = K),
            (v[197] = F),
            (v[198] = P),
            (v[199] = $),
            (v[200] = l))
          : (l = v[200])
        let ts = l,
          tn = void 0 === O ? ts.title : O
        if (z && null != ta) {
          let e
          ;(v[201] !== K || v[202] !== em || v[203] !== ta
            ? ((e = null == em ? ta : (0, a.jsx)("time", { dateTime: em, children: (0, ew.e)(em, K) })),
              (v[201] = K),
              (v[202] = em),
              (v[203] = ta),
              (v[204] = e))
            : (e = v[204]),
            (tn = e))
        }
        let ti = I
        ;(G ? (ti = void 0) : e2?.size && null != eZ && null != e6 && (ti = e6 * eZ),
          v[205] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = () => {
                ;(eW(null), eA(null), es(null))
              }),
              (v[205] = u))
            : (u = v[205]))
        let tr = !z
        v[206] !== z ? ((c = z ? [] : void 0), (v[206] = z), (v[207] = c)) : (c = v[207])
        let to = z ? void 0 : (j ?? ts.ariaLabel),
          tl = C?.data,
          td = null == X ? 4 : 20
        v[208] !== td ? ((g = { top: td, right: 0, left: 0, bottom: 0 }), (v[208] = td), (v[209] = g)) : (g = v[209])
        let tu = "workspace" !== P && C?.data.length === 1 ? 44 : void 0,
          tc = G ? "sign" : void 0,
          tg = z ? e0 : void 0,
          th = "workspace" === P ? void 0 : eP
        ;(v[210] !== W ? ((h = W ? () => eW(null) : void 0), (v[210] = W), (v[211] = h)) : (h = v[211]),
          v[212] !== W || v[213] !== z
            ? ((m = W
                ? (e, t) => {
                    let { activeLabel: s, isTooltipActive: a } = e
                    z ? es(a && "string" == typeof s ? s : null) : eW((0, e_.nV)(t, !1, !0))
                  }
                : void 0),
              (v[212] = W),
              (v[213] = z),
              (v[214] = m))
            : (m = v[214]),
          v[215] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = (0, a.jsx)(ed.d, { stroke: "var(--color-border-subtle)", vertical: !1 })), (v[215] = p))
            : (p = v[215]))
        let tm = null != X,
          tp = e8?.maximum ?? e7,
          tf = e8?.minimum,
          ty = eV ? "percent" : $
        ;(v[216] !== tm || v[217] !== tp || v[218] !== tf || v[219] !== ty
          ? ((f = (0, a.jsx)(ef.Qr, {
              hideValues: tm,
              maximumValue: tp,
              minimumValue: tf,
              showPercentageUnit: !1,
              unit: ty,
            })),
            (v[216] = tm),
            (v[217] = tp),
            (v[218] = tf),
            (v[219] = ty),
            (v[220] = f))
          : (f = v[220]),
          v[221] !== X
            ? ((y = null == X ? void 0 : { left: 20, right: 20 }), (v[221] = X), (v[222] = y))
            : (y = v[222]))
        let tb = null == X ? ef.ps : eE
        v[223] !== K ? ((b = (e) => (0, ew.e)(e, K)), (v[223] = K), (v[224] = b)) : (b = v[224])
        let tx = C?.data
        ;(v[225] !== tx ? ((M = (0, ew.j)(tx)), (v[225] = tx), (v[226] = M)) : (M = v[226]),
          v[227] !== y || v[228] !== tb || v[229] !== b || v[230] !== M
            ? ((A = (0, a.jsx)(eu.W, {
                axisLine: !1,
                dataKey: "date",
                height: 22,
                interval: 0,
                minTickGap: 32,
                padding: y,
                tick: tb,
                tickFormatter: b,
                tickLine: !1,
                ticks: M,
              })),
              (v[227] = y),
              (v[228] = tb),
              (v[229] = b),
              (v[230] = M),
              (v[231] = A))
            : (A = v[231]))
        let tv = !eH && void 0
        ;(v[232] !== ez ||
        v[233] !== W ||
        v[234] !== e2 ||
        v[235] !== eV ||
        v[236] !== X ||
        v[237] !== P ||
        v[238] !== z ||
        v[239] !== ex ||
        v[240] !== $ ||
        v[241] !== eZ
          ? ((T = z
              ? eD
              : (0, a.jsx)(eT.L, {
                  consumerAnalytics: W,
                  activeSeriesKey: ez,
                  hiddenSeriesKeys: e2,
                  isRelativeUsage: eV,
                  report: X,
                  scope: P,
                  series: ex,
                  unit: eV ? "percent" : $,
                  usdPerCredit: eZ,
                })),
            (v[232] = ez),
            (v[233] = W),
            (v[234] = e2),
            (v[235] = eV),
            (v[236] = X),
            (v[237] = P),
            (v[238] = z),
            (v[239] = ex),
            (v[240] = $),
            (v[241] = eZ),
            (v[242] = T))
          : (T = v[242]),
          v[243] !== z ? ((N = !z && (0, a.jsx)(ef.kr, {})), (v[243] = z), (v[244] = N)) : (N = v[244]),
          v[245] !== eB ? ((L = null != eB ? (0, e_.YZ)(eB) : void 0), (v[245] = eB), (v[246] = L)) : (L = v[246]),
          v[247] !== tv || v[248] !== T || v[249] !== N || v[250] !== L
            ? ((D = (0, a.jsx)(ec.m, { active: tv, isAnimationActive: !1, content: T, cursor: N, position: L })),
              (v[247] = tv),
              (v[248] = T),
              (v[249] = N),
              (v[250] = L),
              (v[251] = D))
            : (D = v[251]),
          v[252] !== tt || v[253] !== e5
            ? ((H = null == e5 ? (0, a.jsx)(eg.A_, { radius: ev.Ib, children: tt }) : tt),
              (v[252] = tt),
              (v[253] = e5),
              (v[254] = H))
            : (H = v[254]),
          v[255] !== _ ||
          v[256] !== tr ||
          v[257] !== c ||
          v[258] !== to ||
          v[259] !== tl ||
          v[260] !== g ||
          v[261] !== tu ||
          v[262] !== tc ||
          v[263] !== tg ||
          v[264] !== th ||
          v[265] !== h ||
          v[266] !== m ||
          v[267] !== f ||
          v[268] !== A ||
          v[269] !== D ||
          v[270] !== H
            ? ((Q = (0, a.jsxs)(eh.E, {
                accessibilityLayer: tr,
                throttledEvents: c,
                "aria-label": to,
                barSize: _,
                data: tl,
                margin: g,
                maxBarSize: tu,
                stackOffset: tc,
                onClick: tg,
                onMouseDown: th,
                onMouseLeave: h,
                onMouseMove: m,
                children: [p, f, A, D, H],
              })),
              (v[255] = _),
              (v[256] = tr),
              (v[257] = c),
              (v[258] = to),
              (v[259] = tl),
              (v[260] = g),
              (v[261] = tu),
              (v[262] = tc),
              (v[263] = tg),
              (v[264] = th),
              (v[265] = h),
              (v[266] = m),
              (v[267] = f),
              (v[268] = A),
              (v[269] = D),
              (v[270] = H),
              (v[271] = Q))
            : (Q = v[271]),
          v[272] !== W || v[273] !== eH || v[274] !== P || v[275] !== Q
            ? ((J = (0, a.jsx)(ej.H, {
                consumerAnalytics: W,
                isTooltipDismissed: eH,
                onResetHover: u,
                onTooltipDismissedChange: eF,
                scope: P,
                children: Q,
              })),
              (v[272] = W),
              (v[273] = eH),
              (v[274] = P),
              (v[275] = Q),
              (v[276] = J))
            : (J = v[276]))
        let tk = J
        ;(v[277] !== U || v[278] !== K || v[279] !== G || v[280] !== e6
          ? ((Y = G && !U && null != e6 ? (0, eN.W)(e6, K, !0) : void 0),
            (v[277] = U),
            (v[278] = K),
            (v[279] = G),
            (v[280] = e6),
            (v[281] = Y))
          : (Y = v[281]),
          v[282] !== W || v[283] !== eR || v[284] !== ex || v[285] !== e$
            ? ((et = W
                ? (e) => {
                    eR(null == e ? new Set() : (0, ev.vD)(e, ex, e$))
                  }
                : void 0),
              (v[282] = W),
              (v[283] = eR),
              (v[284] = ex),
              (v[285] = e$),
              (v[286] = et))
            : (et = v[286]),
          v[287] !== W || v[288] !== eR || v[289] !== e2 || v[290] !== ex || v[291] !== e$
            ? ((eo = (e) => {
                let t = (0, ev.OP)(e2, e, ex, W ? e$ : e2)
                t.has(e) !== !!e2?.has(e) && eR(t)
              }),
              (v[287] = W),
              (v[288] = eR),
              (v[289] = e2),
              (v[290] = ex),
              (v[291] = e$),
              (v[292] = eo))
            : (eo = v[292]),
          (x = (0, a.jsx)(ei.G, {
            analyticsChart: w,
            consumerAnalytics: W,
            actions: k,
            dailyLegend: z ? { shares: eb } : void 0,
            fillChartHeight: z || null != X,
            activeSeriesKey: ez,
            onHoverSeriesChange: z ? eU : void 0,
            emptyMessage: S ?? ts.emptyMessage,
            estimatedSpendUsd: ti,
            hasData: W || G ? 0 !== eq || ex.length > 0 : eq > 0,
            hiddenSeriesKeys: e2,
            hideTotal: eV || U,
            preservePopulatedCardLayout: B,
            scope: P,
            series: ex,
            status: R,
            title: tn,
            total: e6,
            totalLabel: Y,
            onChangeSeriesIsolation: et,
            onToggleSeries: eo,
            children:
              z && null != X
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: "h-full",
                        role: "slider",
                        tabIndex: 0,
                        "aria-label": j ?? ts.ariaLabel,
                        "aria-valuemin": 0,
                        "aria-valuemax": X.data.length,
                        "aria-valuenow": en + 1,
                        "aria-valuetext": ta,
                        onKeyDown: (e) => {
                          let t = en
                          switch (e.key) {
                            case "ArrowLeft":
                            case "ArrowDown":
                              t -= 1
                              break
                            case "ArrowRight":
                            case "ArrowUp":
                              t += 1
                              break
                            case "Home":
                              t = -1
                              break
                            case "End":
                              t = X.data.length - 1
                              break
                            case "Escape":
                              ;(e.preventDefault(), e.stopPropagation(), e0())
                              return
                            default:
                              return
                          }
                          e.preventDefault()
                          let s = X.data[Math.max(-1, Math.min(t, X.data.length - 1))]?.date ?? null
                          ;(ee(s), es(null), eF(null == s))
                        },
                        children:
                          null == E
                            ? tk
                            : (0, a.jsx)(eI, { rangeKey: Z, direction: E, reduceMotion: R.reduceMotion, children: tk }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "sr-only",
                        role: "status",
                        "aria-live": "polite",
                        children: [
                          ta,
                          ex.map((e) => {
                            let { key: t, name: s } = e,
                              n = eb?.get(t)
                            return e2?.has(t)
                              ? null
                              : (0, a.jsx)(
                                  "div",
                                  {
                                    children:
                                      null != n && n > 0 && n < 0.001
                                        ? (0, a.jsx)(d.A, {
                                            id: "settings.usage.billing.chart.smallShareAnnouncement",
                                            defaultMessage: "{series}: less than {threshold}",
                                            description:
                                              "Screen reader announcement of a usage category with a positive share below 0.1 percent for the inspected day or displayed date range",
                                            values: {
                                              series: s,
                                              threshold: K.formatNumber(0.001, {
                                                style: "percent",
                                                maximumFractionDigits: 1,
                                              }),
                                            },
                                          })
                                        : (0, a.jsx)(d.A, {
                                            id: "settings.usage.billing.chart.shareAnnouncement",
                                            defaultMessage: "{series}: {share}",
                                            description:
                                              "Screen reader announcement of a usage category and its percentage of all usage for the inspected day or displayed date range. Share is a formatted percentage, or a dash when unavailable",
                                            values: {
                                              series: s,
                                              share:
                                                null == n
                                                  ? "-"
                                                  : K.formatNumber(n, { style: "percent", maximumFractionDigits: 1 }),
                                            },
                                          }),
                                  },
                                  t,
                                )
                          }),
                        ],
                      }),
                    ],
                  })
                : tk,
          })),
          (v[71] = k),
          (v[72] = e3),
          (v[73] = ez),
          (v[74] = w),
          (v[75] = j),
          (v[76] = eJ),
          (v[77] = _),
          (v[78] = eL),
          (v[79] = W),
          (v[80] = C),
          (v[81] = S),
          (v[82] = I),
          (v[83] = q),
          (v[84] = e2),
          (v[85] = U),
          (v[86] = K),
          (v[87] = F),
          (v[88] = eV),
          (v[89] = e4),
          (v[90] = eH),
          (v[91] = G),
          (v[92] = V),
          (v[93] = em),
          (v[94] = en),
          (v[95] = ta),
          (v[96] = er),
          (v[97] = te),
          (v[98] = e7),
          (v[99] = eY),
          (v[100] = e1),
          (v[101] = e9),
          (v[102] = ea),
          (v[103] = B),
          (v[104] = E),
          (v[105] = Z),
          (v[106] = X),
          (v[107] = eG),
          (v[108] = P),
          (v[109] = z),
          (v[110] = e8?.maximum),
          (v[111] = e8?.minimum),
          (v[112] = eB),
          (v[113] = eM),
          (v[114] = R),
          (v[115] = e$),
          (v[116] = O),
          (v[117] = e5),
          (v[118] = eq),
          (v[119] = $),
          (v[120] = eZ),
          (v[121] = e6),
          (v[122] = x))
      } else x = v[122]
      return x
    }
    function eD() {
      return null
    }
    function eE(e) {
      return (0, a.jsx)(ef.ps, { ...e, centerLabels: !0 })
    }
    function eP(e, t) {
      t.preventDefault()
    }
    function eR(e, t) {
      return e + t
    }
    var eO = s("YOiQ"),
      eH = s("OivU")
    function eF(e) {
      let t,
        s,
        i,
        u,
        c,
        g,
        h,
        m,
        p,
        f,
        y,
        b,
        x,
        v,
        k,
        w,
        j,
        _,
        M,
        C,
        A,
        S,
        I,
        U,
        T,
        N,
        L,
        D,
        E,
        P,
        R,
        O,
        H,
        F,
        B,
        W,
        z,
        $,
        K,
        G,
        X,
        q,
        V,
        Z,
        Q,
        J,
        Y,
        ee,
        et,
        es,
        ea = (0, n.c)(144),
        { data: en, preservePopulatedCardLayout: er, selectedModel: eo, scope: el, status: eg } = e,
        eh = void 0 !== er && er,
        em = (0, l.A)(),
        [ey, ek] = (0, o.useState)(null),
        [eM, eC] = (0, o.useState)(!1),
        [eA, eS] = (0, o.useState)(null),
        [eI, eU] = (0, o.useState)(null)
      if (
        ea[0] !== ey ||
        ea[1] !== en ||
        ea[2] !== em ||
        ea[3] !== eM ||
        ea[4] !== eh ||
        ea[5] !== el ||
        ea[6] !== eo ||
        ea[7] !== eg ||
        ea[8] !== eI
      ) {
        let e, n
        ;((m =
          "business" === el
            ? (en?.models ?? [])
                .filter((e) => {
                  let { key: t, total: s } = e
                  return s > 0 && (null == eo || t === eo)
                })
                .map((e) => {
                  let { key: t } = e
                  return { key: t, name: "other" === t ? em.formatMessage(ex.other) : (0, eb.K)(t) }
                })
            : [
                {
                  key: "outputTokens",
                  name: em.formatMessage({
                    id: "settings.usage.billing.tokens.output",
                    defaultMessage: "Output",
                    description: "Output token series in enterprise token usage charts",
                  }),
                },
                {
                  key: "uncachedInputTokens",
                  name: em.formatMessage({
                    id: "settings.usage.billing.tokens.uncachedInput",
                    defaultMessage: "Uncached input",
                    description: "Uncached input token series in enterprise token usage charts",
                  }),
                },
                {
                  key: "cachedInputTokens",
                  name: em.formatMessage({
                    id: "settings.usage.billing.tokens.cachedInput",
                    defaultMessage: "Cached input",
                    description: "Cached input token series in enterprise token usage charts",
                  }),
                },
              ]),
          (g =
            null == eI ||
            m.some((e) => {
              let { key: t } = e
              return !eI.has(t)
            })
              ? eI
              : null),
          (c = en?.data.map((e) => {
            if ("business" === el || null == eo) return e
            let t = e.tokensByModel[eo]
            return {
              ...e,
              uncachedInputTokens: t?.uncachedInputTokens ?? 0,
              cachedInputTokens: t?.cachedInputTokens ?? 0,
              outputTokens: t?.outputTokens ?? 0,
            }
          })),
          ea[49] !== en || ea[50] !== eo
            ? ((e =
                null == eo
                  ? en?.total
                  : en?.models.find((e) => {
                      let { key: t } = e
                      return t === eo
                    })?.total),
              (ea[49] = en),
              (ea[50] = eo),
              (ea[51] = e))
            : (e = ea[51]))
        let r = e
        ;(ea[52] !== g
          ? ((n = (e) => {
              let { key: t } = e
              return !g?.has(t)
            }),
            (ea[52] = g),
            (ea[53] = n))
          : (n = ea[53]),
          (h = m.map(eW).filter(n)))
        let o =
          null != r && g?.size
            ? r -
              (c?.reduce(
                (e, t) =>
                  e +
                  m.reduce(
                    (e, s) =>
                      g.has(s.key)
                        ? e +
                          ("outputTokens" === s.key || "uncachedInputTokens" === s.key || "cachedInputTokens" === s.key
                            ? t[s.key]
                            : (t.tokensByModel[s.key]?.totalTokens ?? 0))
                        : e,
                    0,
                  ),
                0,
              ) ?? 0)
            : r
        ;((u = ei.G),
          (I = ey),
          ea[54] === Symbol.for("react.memo_cache_sentinel")
            ? ((U = (0, a.jsx)(d.A, {
                id: "settings.usage.billing.tokens.empty",
                defaultMessage: "No tokens used during this period",
                description: "Empty state when the selected enterprise workspace usage period has no tokens consumed",
              })),
              (ea[54] = U))
            : (U = ea[54]),
          (T = (r ?? 0) > 0),
          (N = eh),
          (L = (e) => {
            eU((0, ev.OP)(g, e, m, g))
          }),
          (D = el),
          (E = g),
          (R = m),
          (O = eg),
          ea[55] !== el
            ? ((H =
                "workspace" === el
                  ? (0, a.jsx)(d.A, {
                      id: "settings.usage.billing.tokens.title",
                      defaultMessage: "Tokens used",
                      description: "Label for the enterprise token usage chart",
                    })
                  : (0, a.jsx)(d.A, {
                      id: "settings.usage.billing.tokens.personalTitle",
                      defaultMessage: "Total tokens",
                      description:
                        "Chart title showing the total input, output, and cached tokens consumed by the current Business workspace member in Codex desktop analytics settings",
                    })),
              (ea[55] = el),
              (ea[56] = H))
            : (H = ea[56]),
          (F = o),
          (i = ej.H),
          (_ = eM),
          ea[57] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = () => {
                ;(eS(null), ek(null))
              }),
              (ea[57] = C))
            : (C = ea[57]),
          (A = eC),
          (S = el),
          (s = eO.Q),
          ea[58] !== em || ea[59] !== el
            ? ((f =
                "workspace" === el
                  ? em.formatMessage({
                      id: "settings.usage.billing.tokens.chartLabel",
                      defaultMessage: "Tokens used",
                      description: "Accessible label for the enterprise token usage chart",
                    })
                  : em.formatMessage({
                      id: "settings.usage.billing.tokens.personalChartLabel",
                      defaultMessage: "Total tokens",
                      description:
                        "Accessible label for a Business workspace member's chart of total input, output, and cached tokens in Codex desktop analytics settings",
                    })),
              (ea[58] = em),
              (ea[59] = el),
              (ea[60] = f))
            : (f = ea[60]),
          (y = c),
          ea[61] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = { top: 4, right: 0, left: 0, bottom: 0 }), (ea[61] = b))
            : (b = ea[61]),
          (x = "workspace" === el ? void 0 : eB),
          ea[62] !== el
            ? ((v = () => {
                ;(eS(null), "workspace" !== el && ek(null))
              }),
              (k = (e, t) => {
                eS((0, e_.nV)(t, "workspace" === el))
              }),
              (ea[62] = el),
              (ea[63] = v),
              (ea[64] = k))
            : ((v = ea[63]), (k = ea[64])),
          ea[65] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = (0, a.jsx)(ed.d, { stroke: "var(--color-border-subtle)", vertical: !1 })),
              (j = (0, a.jsx)(ef.Qr, { unit: "tokens" })),
              (ea[65] = w),
              (ea[66] = j))
            : ((w = ea[65]), (j = ea[66])),
          (t = eu.W),
          (M = !1),
          (P = "date"),
          (B = 22),
          (W = 0),
          (z = 32),
          ($ = ef.ps),
          ea[67] !== em ? ((K = (e) => (0, ew.e)(e, em)), (ea[67] = em), (ea[68] = K)) : (K = ea[68]),
          (G = !1),
          (p = (0, ew.j)(c)),
          (ea[0] = ey),
          (ea[1] = en),
          (ea[2] = em),
          (ea[3] = eM),
          (ea[4] = eh),
          (ea[5] = el),
          (ea[6] = eo),
          (ea[7] = eg),
          (ea[8] = eI),
          (ea[9] = t),
          (ea[10] = s),
          (ea[11] = i),
          (ea[12] = u),
          (ea[13] = c),
          (ea[14] = g),
          (ea[15] = h),
          (ea[16] = m),
          (ea[17] = p),
          (ea[18] = f),
          (ea[19] = y),
          (ea[20] = b),
          (ea[21] = x),
          (ea[22] = v),
          (ea[23] = k),
          (ea[24] = w),
          (ea[25] = j),
          (ea[26] = _),
          (ea[27] = M),
          (ea[28] = C),
          (ea[29] = A),
          (ea[30] = S),
          (ea[31] = I),
          (ea[32] = U),
          (ea[33] = T),
          (ea[34] = N),
          (ea[35] = L),
          (ea[36] = D),
          (ea[37] = E),
          (ea[38] = P),
          (ea[39] = R),
          (ea[40] = O),
          (ea[41] = H),
          (ea[42] = F),
          (ea[43] = B),
          (ea[44] = W),
          (ea[45] = z),
          (ea[46] = $),
          (ea[47] = K),
          (ea[48] = G))
      } else
        ((t = ea[9]),
          (s = ea[10]),
          (i = ea[11]),
          (u = ea[12]),
          (c = ea[13]),
          (g = ea[14]),
          (h = ea[15]),
          (m = ea[16]),
          (p = ea[17]),
          (f = ea[18]),
          (y = ea[19]),
          (b = ea[20]),
          (x = ea[21]),
          (v = ea[22]),
          (k = ea[23]),
          (w = ea[24]),
          (j = ea[25]),
          (_ = ea[26]),
          (M = ea[27]),
          (C = ea[28]),
          (A = ea[29]),
          (S = ea[30]),
          (I = ea[31]),
          (U = ea[32]),
          (T = ea[33]),
          (N = ea[34]),
          (L = ea[35]),
          (D = ea[36]),
          (E = ea[37]),
          (P = ea[38]),
          (R = ea[39]),
          (O = ea[40]),
          (H = ea[41]),
          (F = ea[42]),
          (B = ea[43]),
          (W = ea[44]),
          (z = ea[45]),
          ($ = ea[46]),
          (K = ea[47]),
          (G = ea[48]))
      ea[69] !== t ||
      ea[70] !== p ||
      ea[71] !== M ||
      ea[72] !== P ||
      ea[73] !== B ||
      ea[74] !== W ||
      ea[75] !== z ||
      ea[76] !== $ ||
      ea[77] !== K ||
      ea[78] !== G
        ? ((X = (0, a.jsx)(t, {
            axisLine: M,
            dataKey: P,
            height: B,
            interval: W,
            minTickGap: z,
            tick: $,
            tickFormatter: K,
            tickLine: G,
            ticks: p,
          })),
          (ea[69] = t),
          (ea[70] = p),
          (ea[71] = M),
          (ea[72] = P),
          (ea[73] = B),
          (ea[74] = W),
          (ea[75] = z),
          (ea[76] = $),
          (ea[77] = K),
          (ea[78] = G),
          (ea[79] = X))
        : (X = ea[79])
      let eN = !eM && void 0
      if (
        (ea[80] !== ey || ea[81] !== g || ea[82] !== el || ea[83] !== m
          ? ((q = (0, a.jsx)(eT.L, { activeSeriesKey: ey, hiddenSeriesKeys: g, scope: el, series: m, unit: "tokens" })),
            (ea[80] = ey),
            (ea[81] = g),
            (ea[82] = el),
            (ea[83] = m),
            (ea[84] = q))
          : (q = ea[84]),
        ea[85] !== eA ? ((V = null == eA && (0, a.jsx)(ef.kr, {})), (ea[85] = eA), (ea[86] = V)) : (V = ea[86]),
        ea[87] !== eA ? ((Z = null != eA ? (0, e_.YZ)(eA) : void 0), (ea[87] = eA), (ea[88] = Z)) : (Z = ea[88]),
        ea[89] !== eN || ea[90] !== q || ea[91] !== V || ea[92] !== Z
          ? ((Q = (0, a.jsx)(ec.m, { active: eN, isAnimationActive: !1, content: q, cursor: V, position: Z })),
            (ea[89] = eN),
            (ea[90] = q),
            (ea[91] = V),
            (ea[92] = Z),
            (ea[93] = Q))
          : (Q = ea[93]),
        ea[94] !== g || ea[95] !== el || ea[96] !== m || ea[97] !== eA || ea[98] !== eg)
      ) {
        let e
        ;(ea[100] !== g || ea[101] !== el || ea[102] !== eA || ea[103] !== eg
          ? ((e = (e, t) => {
              let s =
                "outputTokens" === e.key || "uncachedInputTokens" === e.key || "cachedInputTokens" === e.key
                  ? e.key
                  : (t) => t.tokensByModel[e.key]?.totalTokens ?? 0
              return (0, a.jsx)(
                eH.N1,
                {
                  className: (0, r.A)(
                    !eg.reduceMotion && "transition-opacity duration-basic ease-basic motion-reduce:transition-none",
                    g?.has(e.key) && "pointer-events-none opacity-0",
                  ),
                  activeDot: !1,
                  animationDuration: 200,
                  animationEasing: "ease-out",
                  animationInterpolateFn: e_.X2,
                  animationMatchBy: e_.Z5,
                  dataKey: s,
                  dot: !1,
                  isAnimationActive: !eg.reduceMotion && !!eg.animateDataChanges && ("workspace" === el || null == eA),
                  name: e.key,
                  onMouseEnter: () => {
                    ek(e.key)
                  },
                  onMouseLeave: () => {
                    ek(null)
                  },
                  shape: { visibleLength: null },
                  stroke: ep.Kj[t % ep.Kj.length],
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  type: "linear",
                },
                e.key,
              )
            }),
            (ea[100] = g),
            (ea[101] = el),
            (ea[102] = eA),
            (ea[103] = eg),
            (ea[104] = e))
          : (e = ea[104]),
          (J = m.map(e)),
          (ea[94] = g),
          (ea[95] = el),
          (ea[96] = m),
          (ea[97] = eA),
          (ea[98] = eg),
          (ea[99] = J))
      } else J = ea[99]
      return (
        ea[105] !== c || ea[106] !== h || ea[107] !== eA
          ? ((Y = (0, a.jsx)(ej.G, { data: c, pointer: eA, series: h })),
            (ea[105] = c),
            (ea[106] = h),
            (ea[107] = eA),
            (ea[108] = Y))
          : (Y = ea[108]),
        ea[109] !== s ||
        ea[110] !== f ||
        ea[111] !== y ||
        ea[112] !== b ||
        ea[113] !== x ||
        ea[114] !== v ||
        ea[115] !== k ||
        ea[116] !== w ||
        ea[117] !== j ||
        ea[118] !== X ||
        ea[119] !== Q ||
        ea[120] !== J ||
        ea[121] !== Y
          ? ((ee = (0, a.jsxs)(s, {
              "aria-label": f,
              data: y,
              margin: b,
              onMouseDown: x,
              onMouseLeave: v,
              onMouseMove: k,
              children: [w, j, X, Q, J, Y],
            })),
            (ea[109] = s),
            (ea[110] = f),
            (ea[111] = y),
            (ea[112] = b),
            (ea[113] = x),
            (ea[114] = v),
            (ea[115] = k),
            (ea[116] = w),
            (ea[117] = j),
            (ea[118] = X),
            (ea[119] = Q),
            (ea[120] = J),
            (ea[121] = Y),
            (ea[122] = ee))
          : (ee = ea[122]),
        ea[123] !== i || ea[124] !== _ || ea[125] !== C || ea[126] !== A || ea[127] !== S || ea[128] !== ee
          ? ((et = (0, a.jsx)(i, {
              isTooltipDismissed: _,
              onResetHover: C,
              onTooltipDismissedChange: A,
              scope: S,
              children: ee,
            })),
            (ea[123] = i),
            (ea[124] = _),
            (ea[125] = C),
            (ea[126] = A),
            (ea[127] = S),
            (ea[128] = ee),
            (ea[129] = et))
          : (et = ea[129]),
        ea[130] !== u ||
        ea[131] !== I ||
        ea[132] !== U ||
        ea[133] !== T ||
        ea[134] !== N ||
        ea[135] !== L ||
        ea[136] !== D ||
        ea[137] !== E ||
        ea[138] !== R ||
        ea[139] !== O ||
        ea[140] !== H ||
        ea[141] !== F ||
        ea[142] !== et
          ? ((es = (0, a.jsx)(u, {
              activeSeriesKey: I,
              emptyMessage: U,
              hasData: T,
              preservePopulatedCardLayout: N,
              onToggleSeries: L,
              scope: D,
              hiddenSeriesKeys: E,
              series: R,
              status: O,
              title: H,
              total: F,
              children: et,
            })),
            (ea[130] = u),
            (ea[131] = I),
            (ea[132] = U),
            (ea[133] = T),
            (ea[134] = N),
            (ea[135] = L),
            (ea[136] = D),
            (ea[137] = E),
            (ea[138] = R),
            (ea[139] = O),
            (ea[140] = H),
            (ea[141] = F),
            (ea[142] = et),
            (ea[143] = es))
          : (es = ea[143]),
        es
      )
    }
    function eB(e, t) {
      t.preventDefault()
    }
    function eW(e, t) {
      return {
        key: e.key,
        name: e.name,
        color: ep.Kj[t % ep.Kj.length],
        value: (t) =>
          "outputTokens" === e.key || "uncachedInputTokens" === e.key || "cachedInputTokens" === e.key
            ? t[e.key]
            : (t.tokensByModel[e.key]?.totalTokens ?? 0),
      }
    }
    var ez = s("iJY0")
    let e$ = (0, ez.a)({
        name: "chevron-left-md-regular-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 4.888184, y: 3.25, width: 5.361816, height: 9.5 },
          visualBounds: { x: 4.888184, y: 3.25, width: 5.361816, height: 9.5 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 4.888184, y: 3.25, width: 5.361816, height: 9.5 },
          center: { x: 7.569092, y: 8 },
          insets: { top: 3.25, right: 5.75, bottom: 3.25, left: 4.888184 },
          anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.569092, y: 8 }, foreground: { x: 7.569092, y: 8 } },
        },
        capabilities: ["icon"],
        body: '<path d="M10.0303 11.4697C10.3232 11.7626 10.3232 12.2373 10.0303 12.5302C9.73744 12.8231 9.26268 12.8231 8.96978 12.5302L5.20513 8.76557C4.78253 8.34259 4.78253 7.6573 5.20513 7.23432L8.96978 3.46967C9.26268 3.17678 9.73744 3.17678 10.0303 3.46967C10.3232 3.76256 10.3232 4.23732 10.0303 4.53022L6.5606 7.99994L10.0303 11.4697Z" fill="currentColor"/>',
      }),
      eK = (0, ez.a)({
        name: "chevron-right-md-regular-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 5.583496, y: 3.25, width: 5.361816, height: 9.5 },
          visualBounds: { x: 5.583496, y: 3.25, width: 5.361816, height: 9.5 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 5.583496, y: 3.25, width: 5.361816, height: 9.5 },
          center: { x: 8.264404, y: 8 },
          insets: { top: 3.25, right: 5.054688, bottom: 3.25, left: 5.583496 },
          anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.264404, y: 8 }, foreground: { x: 8.264404, y: 8 } },
        },
        capabilities: ["icon"],
        body: '<path d="M5.80317 11.4697C5.51027 11.7626 5.51027 12.2373 5.80317 12.5302C6.09606 12.8231 6.57082 12.8231 6.86371 12.5302L10.6284 8.76557C11.051 8.34259 11.051 7.6573 10.6284 7.23432L6.86371 3.46967C6.57082 3.17678 6.09606 3.17678 5.80317 3.46967C5.51027 3.76256 5.51027 4.23732 5.80317 4.53022L9.27289 7.99994L5.80317 11.4697Z" fill="currentColor"/>',
      })
    var eG = s("bqtn"),
      eX = s("bVeK"),
      eq = s("QyE3")
    let eV = ["feature", "model", "surface", "turn-start"]
    function eZ(e) {
      let t,
        s,
        i,
        o,
        l,
        d = (0, n.c)(14),
        { ariaLabel: u, breakdown: c, triggerWidth: g, onChange: h } = e,
        m = "fixed" === (void 0 === g ? "fixed" : g) && "w-32"
      return (
        d[0] !== m ? ((t = (0, r.A)("shrink-0", m)), (d[0] = m), (d[1] = t)) : (t = d[1]),
        d[2] !== c
          ? ((s = (0, a.jsx)("span", { className: "truncate", children: (0, a.jsx)(eQ, { breakdown: c }) })),
            (d[2] = c),
            (d[3] = s))
          : (s = d[3]),
        d[4] !== u || d[5] !== t || d[6] !== s
          ? ((i = (0, a.jsx)(eq.vg, { className: t, "aria-label": u, children: s })),
            (d[4] = u),
            (d[5] = t),
            (d[6] = s),
            (d[7] = i))
          : (i = d[7]),
        d[8] !== c || d[9] !== h
          ? ((o = eV.map((e) =>
              (0, a.jsx)(
                eG.ms.Item,
                {
                  "aria-checked": c === e,
                  RightIcon: c === e ? eX.ALZ : void 0,
                  role: "menuitemradio",
                  onSelect: () => h(e),
                  children: (0, a.jsx)(eQ, { breakdown: e }),
                },
                e,
              ),
            )),
            (d[8] = c),
            (d[9] = h),
            (d[10] = o))
          : (o = d[10]),
        d[11] !== i || d[12] !== o
          ? ((l = (0, a.jsx)(eG.Ab, { align: "start", contentWidth: "menuNarrow", triggerButton: i, children: o })),
            (d[11] = i),
            (d[12] = o),
            (d[13] = l))
          : (l = d[13]),
        l
      )
    }
    function eQ(e) {
      let t,
        s = (0, n.c)(2),
        { breakdown: i } = e
      return (
        s[0] !== i
          ? ((t = (0, a.jsx)(d.A, {
              id: "consumerUsage.breakdown.label",
              defaultMessage:
                "{breakdown, select, feature {By feature} model {By model} surface {By surface} other {By turn start}}",
              description:
                "Chart grouping options; all options include usage from every feature. By turn start groups usage by what started each turn",
              values: { breakdown: i },
            })),
            (s[0] = i),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    var eJ = s("dVEH"),
      eY = s.n(eJ)
    function e1(e, t, s) {
      if ("model" === s && "unknown" !== t) return t
      switch (t) {
        case "cli":
        case "mobile":
        case "slack":
        case "linear":
        case "jetbrains":
        case "sdk":
        case "exec":
        case "github":
        case "github_code_review":
        case "codex_security_cloud":
        case "other":
          return e.formatMessage(ex[t])
      }
      if ("turn-start" === s) {
        let s = t.slice(6)
        return (
          e.formatMessage(
            {
              id: "consumerUsage.series.turnTriggerLabel",
              defaultMessage: `{trigger, select,
        user {User messages}
        composer {User messages}
        composer_queue {Queued messages}
        composer_queue_run_now {Manually started queued messages}
        automation_cron_scheduled {Scheduled automations}
        automation_cron_run_now {Manually started automations}
        automation_heartbeat_scheduled {Scheduled follow-ups}
        automation_heartbeat_run_now {Manually started follow-ups}
        ambient_suggestion_task {Suggested tasks}
        environment_onboarding {Environment setup}
        pull_request_review_chat {PR review conversations}
        app_tool_create_thread {Agent-created chats}
        app_tool_send_message {Agent follow-ups}
        app_update_resume {App update resumes}
        artifact_comment {Artifact comments}
        avatar_quick_chat {Avatar chats}
        avatar_follow_up {Avatar follow-ups}
        avatar_implement_plan {Avatar plan execution}
        capacity_retry_automatic {Automatic retries after capacity limits}
        capacity_retry_manual {Manual retries after capacity limits}
        chatgpt_handoff {ChatGPT handoffs}
        code_review {Code review}
        codex_replay {Codex replay}
        conversational_onboarding {Onboarding}
        conversational_onboarding_revert {Onboarding resets}
        edit_user_message {Edited messages}
        image_edit {Image edits}
        implement_todo {TODO implementation}
        local_environment_configuration {Environment configuration}
        mcp_app_follow_up {App follow-ups}
        notification_reply {Notification replies}
        onboarding_checklist {Onboarding checklist}
        plan_feedback {Plan feedback}
        plan_implementation {Plan implementation}
        plugin_suggestion_connected {Connected plugin suggestions}
        pull_request_fix_setup {PR fix setup}
        queued_side_chat {Queued side chats}
        resume_interrupted_task {Resumed tasks}
        safety_buffer_retry {Safety retries}
        send_user_message_async_question {Replies to agent questions}
        security_remediation {Security remediation}
        security_scan {Security scans}
        side_chat {Side chats}
        slides_outline {Slide outlines}
        thread_handoff {Task handoffs}
        visualization_follow_up {Visualization follow-ups}
        visualization_repair {Visualization repairs}
        visualization_sites_handoff {Site creation from visualizations}
        guardian_classifier {Auto review checks}
        guardian_review {Auto review}
        goal {Goal continuations}
        queue {Queued turns}
        retry {Retries}
        realtime {Realtime}
        persistent_mode {Persistent continuations}
        unknown {Unknown}
        other {}
      }`,
              description:
                "Legend label for the recorded reason a chat turn started. User messages come from the composer. Automations run on a recurring schedule; follow-ups are scheduled within an existing chat. Run now means manually started. Queued messages wait for an active turn to finish. Unrecognized identifiers are shown as readable words; their underlying category is unchanged.",
            },
            { trigger: s },
          ) || e1(e, s, "feature")
        )
      }
      return e.formatMessage(
        {
          id: "consumerUsage.series.sourceLabel",
          defaultMessage: `{key, select,
        agent_created_thread {Agent-created chats}
        agent_forked_thread {Agent-forked chats}
        ambient_suggestion_safety {Suggestion safety checks}
        ambient_suggestion_task {Suggested tasks}
        ambient_suggestions {Proactive suggestions}
        automated_review {Automated code review}
        automation {Automations}
        avatar_quick_chat {Avatar chats}
        chatgpt_handoff {ChatGPT handoffs}
        code_review {Code review}
        codex_replay {Codex replay}
        codex_web_code_review {Cloud code review}
        codex_web_pr {Cloud coding}
        codex_web_qa {Cloud questions}
        codex_web_security_review {Cloud security review}
        commit_message {Commit messages}
        commit_pull_request_message {Commit and PR descriptions}
        computer_history {Computer history}
        conversation_digest {Conversation digests}
        conversational_onboarding {Onboarding}
        dictation_cleanup {Dictation cleanup}
        guardian_classifier {Auto review checks}
        guardian_review {Auto review}
        implement_todo {TODO implementation}
        inline_edit {Inline edits}
        local_environment_configuration {Environment configuration}
        mcp_app_follow_up {App follow-ups}
        mcp_extension_host {App integrations}
        memory_consolidation {Memory updates}
        onboarding_checklist {Onboarding checklist}
        pull_request_fix_automation {Automated PR fixes}
        pull_request_message {PR descriptions}
        realtime_voice {Realtime voice}
        security_remediation {Security remediation}
        security_scan {Security scans}
        subagent {Subagents}
        system {System}
        thread_description {Chat descriptions}
        thread_summary {Chat summaries}
        thread_title {Chat titles}
        thread_title_reconsideration {Chat title updates}
        title {Titles}
        title_generation {Title generation}
        user {Chats}
        voice_chat {Voice chats}
        worktree_setup_auto_fix {Worktree setup repairs}
        vscode {VS Code}
        web {Web}
        work_web {Web (Work)}
        work_mobile {Mobile (Work)}
        desktop_app {Desktop app}
        work_desktop {Desktop (Work)}
        agent_identity {Workspace agents}
        unknown {Unknown}
      other {{fallback}}
    }`,
          description:
            "Legend label for a recorded consumer usage source. Chats are user-created conversations; technical sources are separate categories. Preserve brand names. Unrecognized identifiers are shown as readable words without merging categories. Model identifiers bypass this formatter.",
        },
        { key: t, fallback: eY()(t.replace(/[_:-]+/g, " ")) },
      )
    }
    function e0(e) {
      let t,
        s,
        i,
        r,
        u,
        c,
        g,
        m,
        p,
        b,
        x,
        v,
        k,
        w,
        j,
        _,
        C,
        A,
        S,
        I = (0, n.c)(60),
        { showUnifiedUsage: U, buckets: T, days: N, onDaysChange: L, pagination: D, status: E } = e,
        P = void 0 !== U && U,
        R = (0, o.use)(Y.Wj)?.scope ?? null,
        O = (0, l.A)(),
        [H, F] = (0, o.useState)("feature"),
        [B, W] = (0, o.useState)(!1),
        [z, $] = (0, o.useState)(0)
      I[0] !== H || I[1] !== T || I[2] !== O
        ? ((t =
            null == T
              ? void 0
              : (function (e, t, s) {
                  let a = new Map(),
                    n = [],
                    i = {}
                  for (let s of e) {
                    if (null == s.attribution) return
                    let e = {}
                    for (let n of ((i[s.date] = 0), s.attribution)) {
                      i[s.date] += n.value
                      let r = {
                        feature: "aeon_child" === n.thread_source ? "agent_created_thread" : n.thread_source,
                        "turn-start": `start-${n.turn_trigger}`,
                        model: n.model,
                        surface: n.surface,
                      }[t]
                      ;((e[r] = (e[r] ?? 0) + n.value), a.set(r, (a.get(r) ?? 0) + n.value))
                    }
                    n.push({ date: s.date, values: e })
                  }
                  let r = [...a.entries()]
                    .sort(([e], [t]) => e.localeCompare(t))
                    .map(([e, t]) => ({ key: e, total: t, label: s(e) }))
                  return { data: n, series: r, total: r.reduce((e, t) => e + t.total, 0), bucketTotals: i }
                })(T, H, (e) => e1(O, e, H))),
          (I[0] = H),
          (I[1] = T),
          (I[2] = O),
          (I[3] = t))
        : (t = I[3])
      let K = t
      ;(I[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, a.jsx)(d.A, {
            id: "consumerUsage.history.title",
            defaultMessage: "Usage history",
            description: "Heading for total usage across plan allowances and purchased credits",
          })),
          (I[4] = s))
        : (s = I[4]),
        I[5] !== P
          ? ((i = (0, a.jsx)(y.X.Header, {
              subtitleWrap: "wrap",
              title: s,
              subtitle: P
                ? (0, a.jsx)(e2, {})
                : (0, a.jsx)(d.A, {
                    id: "consumerUsage.history.description",
                    defaultMessage:
                      "See how plan usage and credits were consumed in Work, Codex, and other agentic tasks. Conversations in Chat are not included.",
                    description:
                      "Description of usage history covering plan allowances and credits for agentic work, excluding Chat conversations",
                  }),
            })),
            (I[5] = P),
            (I[6] = i))
          : (i = I[6]),
        I[7] !== O
          ? ((r = O.formatMessage({
              id: "consumerAnalyticsPreview.history.period",
              defaultMessage: "Usage history date range",
              description:
                "Accessible label for the date range of total usage history, including plan usage and credits",
            })),
            (I[7] = O),
            (I[8] = r))
          : (r = I[8]),
        I[9] !== L
          ? ((u = (e) => {
              ;($(0), L(e))
            }),
            (I[9] = L),
            (I[10] = u))
          : (u = I[10]),
        I[11] !== N || I[12] !== r || I[13] !== u
          ? ((c = (0, a.jsx)(V.tS, { ariaLabel: r, days: N, onChange: u })),
            (I[11] = N),
            (I[12] = r),
            (I[13] = u),
            (I[14] = c))
          : (c = I[14]),
        I[15] !== O
          ? ((g = O.formatMessage({
              id: "consumerUsage.history.breakdown",
              defaultMessage: "Group usage history",
              description:
                "Accessible label for grouping total usage by feature, model, surface, or how each turn started",
            })),
            (I[15] = O),
            (I[16] = g))
          : (g = I[16]),
        I[17] !== R || I[18] !== H
          ? ((m = (e) => {
              e !== H && (("model" === e || "surface" === e) && (0, Y.to)(R, "usage_history", e), W(!0), F(e))
            }),
            (I[17] = R),
            (I[18] = H),
            (I[19] = m))
          : (m = I[19]),
        I[20] !== H || I[21] !== g || I[22] !== m
          ? ((p = (0, a.jsx)(eZ, { ariaLabel: g, breakdown: H, triggerWidth: "content", onChange: m })),
            (I[20] = H),
            (I[21] = g),
            (I[22] = m),
            (I[23] = p))
          : (p = I[23]),
        I[24] !== p || I[25] !== c
          ? ((b = (0, a.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-2 select-none",
              children: [c, p],
            })),
            (I[24] = p),
            (I[25] = c),
            (I[26] = b))
          : (b = I[26]),
        I[27] !== O
          ? ((x = O.formatMessage({
              id: "consumerUsage.history.chartLabel",
              defaultMessage: "Compare total usage by day, including plan usage and credits.",
              description:
                "Accessible description of relative daily usage across plan allowances and purchased credits",
            })),
            (I[27] = O),
            (I[28] = x))
          : (x = I[28]))
      let G = D?.offsetDays
      ;(I[29] !== N || I[30] !== G ? ((v = (0, f.mV)(N, G)), (I[29] = N), (I[30] = G), (I[31] = v)) : (v = I[31]),
        I[32] !== N || I[33] !== O || I[34] !== D || I[35] !== E.isLoading || I[36] !== E.isUpdating
          ? ((k =
              null == D
                ? void 0
                : (0, a.jsxs)("div", {
                    className: "flex items-center justify-end",
                    children: [
                      (0, a.jsx)(M.$, {
                        "aria-label": O.formatMessage({
                          id: "consumerUsage.history.previousPeriod",
                          defaultMessage: "Previous period",
                          description: "Move the usage history chart to the previous 7-day or 30-day period",
                        }),
                        color: "ghostActive",
                        radius: "large",
                        size: "iconCircle",
                        disabled: E.isLoading || E.isUpdating,
                        onClick: () => {
                          ;(W(!1), $(-1), D.onOffsetDaysChange(D.offsetDays + N))
                        },
                        children: (0, a.jsx)(h.I, { className: "rtl:rotate-180", asset: e$ }),
                      }),
                      (0, a.jsx)(M.$, {
                        "aria-label": O.formatMessage({
                          id: "consumerUsage.history.nextPeriod",
                          defaultMessage: "Next period",
                          description:
                            "Move the usage history chart to the next 7-day or 30-day period, up to the current period",
                        }),
                        color: "ghostActive",
                        radius: "large",
                        size: "iconCircle",
                        disabled: 0 === D.offsetDays || E.isLoading || E.isUpdating,
                        onClick: () => {
                          ;(W(!1), $(1), D.onOffsetDaysChange(Math.max(0, D.offsetDays - N)))
                        },
                        children: (0, a.jsx)(h.I, { className: "rtl:rotate-180", asset: eK }),
                      }),
                    ],
                  })),
            (I[32] = N),
            (I[33] = O),
            (I[34] = D),
            (I[35] = E.isLoading),
            (I[36] = E.isUpdating),
            (I[37] = k))
          : (k = I[37]),
        I[38] !== T || I[39] !== K
          ? ((w =
              null != T && null == K
                ? (0, a.jsx)(d.A, {
                    id: "consumerUsage.history.unavailableAttribution",
                    defaultMessage: "Usage breakdown is unavailable for this period",
                    description:
                      "Shown when historical usage exists but the API does not have category attribution for the selected dates",
                  })
                : (0, a.jsx)(d.A, {
                    id: "consumerUsage.history.emptyPeriod",
                    defaultMessage: "No usage recorded during this period",
                    description:
                      "Shown when no plan usage or purchased credits were consumed during the selected usage history period",
                  })),
            (I[38] = T),
            (I[39] = K),
            (I[40] = w))
          : (w = I[40]))
      let X = (K?.data.length ?? N) > 7 ? 18 : 38,
        q = !E.reduceMotion && (B || (0 === z && E.animateDataChanges))
      return (
        I[41] === Symbol.for("react.memo_cache_sentinel") ? ((j = () => W(!1)), (I[41] = j)) : (j = I[41]),
        I[42] !== E || I[43] !== q
          ? ((_ = { ...E, animateDataChanges: q, onAnimationEnd: j }), (I[42] = E), (I[43] = q), (I[44] = _))
          : (_ = I[44]),
        I[45] !== K ||
        I[46] !== z ||
        I[47] !== x ||
        I[48] !== v ||
        I[49] !== k ||
        I[50] !== w ||
        I[51] !== X ||
        I[52] !== _
          ? ((C = (0, a.jsx)(eL, {
              consumerAnalytics: !0,
              selectedDayLegend: !0,
              breakdown: "model",
              scope: "consumer",
              isPersonalUsage: !0,
              preservePopulatedCardLayout: !0,
              ariaLabel: x,
              data: K,
              dateRange: v,
              hideTotal: !0,
              rangeDirection: z,
              actions: k,
              emptyMessage: w,
              barSize: X,
              status: _,
            })),
            (I[45] = K),
            (I[46] = z),
            (I[47] = x),
            (I[48] = v),
            (I[49] = k),
            (I[50] = w),
            (I[51] = X),
            (I[52] = _),
            (I[53] = C))
          : (C = I[53]),
        I[54] !== b || I[55] !== C
          ? ((A = (0, a.jsxs)(y.X.Content, { className: "gap-3", children: [b, C] })),
            (I[54] = b),
            (I[55] = C),
            (I[56] = A))
          : (A = I[56]),
        I[57] !== A || I[58] !== i
          ? ((S = (0, a.jsxs)(y.X, { children: [i, A] })), (I[57] = A), (I[58] = i), (I[59] = S))
          : (S = I[59]),
        S
      )
    }
    function e2() {
      let e,
        t = (0, n.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(d.A, {
              id: "consumerUsage.history.description.unified",
              defaultMessage: "See how plan usage and credits were consumed across ChatGPT.",
              description:
                "Subtitle beneath Usage history in personal Analytics settings. The history covers included plan usage and purchased credits across ChatGPT, including chat conversations.",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    var e3 = s("slpy")
    let e4 = (0, ez.a)({
        name: "chevron-down-md-regular-12",
        canvas: {
          width: 12,
          height: 12,
          viewBox: "0 0 12 12",
          frame: { x: 0, y: 0, width: 12, height: 12 },
          inkBounds: { x: 2.5, y: 4.5, width: 7, height: 3.896484 },
          visualBounds: { x: 2.5, y: 4.5, width: 7, height: 3.896484 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.5, y: 4.5, width: 7, height: 3.896484 },
          center: { x: 6, y: 6.448242 },
          insets: { top: 4.5, right: 2.5, bottom: 3.603516, left: 2.5 },
          anchors: { frame: { x: 6, y: 6 }, ink: { x: 6, y: 6.448242 }, foreground: { x: 6, y: 6.448242 } },
        },
        capabilities: ["icon"],
        body: '<path d="M8.64645 4.64645C8.84171 4.45118 9.15822 4.45118 9.35348 4.64645C9.54874 4.84171 9.54874 5.15822 9.35348 5.35348L6.53024 8.17672C6.23735 8.46959 5.76258 8.46959 5.46969 8.17672L2.64645 5.35348C2.45118 5.15822 2.45118 4.84171 2.64645 4.64645C2.84171 4.45118 3.15822 4.45118 3.35348 4.64645L5.99996 7.29293L8.64645 4.64645Z" fill="currentColor"/>',
      }),
      e5 = (0, ez.a)({
        name: "chevron-right-md-regular-12",
        canvas: {
          width: 12,
          height: 12,
          viewBox: "0 0 12 12",
          frame: { x: 0, y: 0, width: 12, height: 12 },
          inkBounds: { x: 4, y: 2.5, width: 3.896484, height: 7 },
          visualBounds: { x: 4, y: 2.5, width: 3.896484, height: 7 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 4, y: 2.5, width: 3.896484, height: 7 },
          center: { x: 5.948242, y: 6 },
          insets: { top: 2.5, right: 4.103516, bottom: 2.5, left: 4 },
          anchors: { frame: { x: 6, y: 6 }, ink: { x: 5.948242, y: 6 }, foreground: { x: 5.948242, y: 6 } },
        },
        capabilities: ["icon"],
        body: '<path d="M4.14645 8.64645C3.95118 8.84171 3.95118 9.15822 4.14645 9.35348C4.34171 9.54874 4.65822 9.54874 4.85348 9.35348L7.67672 6.53024C7.96959 6.23735 7.96959 5.76258 7.67672 5.46969L4.85348 2.64645C4.65822 2.45118 4.34171 2.45118 4.14645 2.64645C3.95118 2.84171 3.95118 3.15822 4.14645 3.35348L6.79293 5.99996L4.14645 8.64645Z" fill="currentColor"/>',
      })
    var e6 = s("f4Vb"),
      e7 = s("nsuH")
    function e8(e) {
      let t,
        s,
        i,
        r,
        u,
        c,
        g,
        m,
        p,
        f,
        y,
        b,
        x,
        v,
        k,
        w = (0, n.c)(53),
        { period: _, asOf: C, limit: A, breakdown: S, expanded: I, onToggle: U, reduceMotion: T } = e,
        N = (0, l.A)(),
        L = (0, o.useId)()
      w[0] !== N || w[1] !== A || w[2] !== _.interval.endAt || w[3] !== _.interval.startAt || w[4] !== _.status
        ? ((t = N.formatMessage(
            {
              id: "consumerAnalyticsPreview.limitHistory.openPeriod",
              defaultMessage:
                "{limit, select, fiveHour {5-hour period} other {Weekly period}} from {start} to {end} UTC{current, select, yes {, current at last update} other {}}",
              description:
                "Expand or collapse the usage details for this exact reset period, including full dates and current-period status",
            },
            {
              limit: A,
              start: N.formatDate(_.interval.startAt, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC",
              }),
              end: N.formatDate(_.interval.endAt, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC",
              }),
              current: "current" === _.status ? "yes" : "no",
            },
          )),
          (w[0] = N),
          (w[1] = A),
          (w[2] = _.interval.endAt),
          (w[3] = _.interval.startAt),
          (w[4] = _.status),
          (w[5] = t))
        : (t = w[5])
      let D = t
      ;(w[6] !== N || w[7] !== A || w[8] !== _.interval.endAt || w[9] !== _.interval.startAt
        ? ((s = N.formatDateTimeRange(_.interval.startAt, _.interval.endAt, {
            month: "short",
            day: "numeric",
            ...("fiveHour" === A ? { hour: "numeric", minute: "2-digit" } : {}),
            timeZone: "UTC",
          })),
          (w[6] = N),
          (w[7] = A),
          (w[8] = _.interval.endAt),
          (w[9] = _.interval.startAt),
          (w[10] = s))
        : (s = w[10]),
        w[11] !== s
          ? ((i = (0, a.jsx)("span", { className: "min-w-0 whitespace-normal", children: s })),
            (w[11] = s),
            (w[12] = i))
          : (i = w[12]))
      let E = I ? e4 : e5
      ;(w[13] !== E
        ? ((r = (0, a.jsx)(h.I, { className: "shrink-0", asset: E, focusable: "false" })), (w[13] = E), (w[14] = r))
        : (r = w[14]),
        w[15] !== I || w[16] !== D || w[17] !== L || w[18] !== i || w[19] !== r
          ? ((u = (0, a.jsxs)(M.$, {
              className: "gap-2 text-start",
              "aria-controls": L,
              "aria-expanded": I,
              "aria-label": D,
              color: "ghostMuted",
              focusRing: "inset",
              size: "inline",
              onPointerDown: te,
              children: [i, r],
            })),
            (w[15] = I),
            (w[16] = D),
            (w[17] = L),
            (w[18] = i),
            (w[19] = r),
            (w[20] = u))
          : (u = w[20]),
        w[21] !== D || w[22] !== u
          ? ((c = (0, a.jsx)(e3.m, { content: D, children: u })), (w[21] = D), (w[22] = u), (w[23] = c))
          : (c = w[23]),
        w[24] !== C || w[25] !== N || w[26] !== _.status
          ? ((g =
              "current" === _.status
                ? (0, a.jsxs)("span", {
                    className: "mt-1 flex items-center gap-1 text-xs text-secondary",
                    children: [
                      (0, a.jsx)(d.A, {
                        id: "consumerUsage.limitHistory.bucketDataAsOf",
                        defaultMessage: "Usage as of {asOf}",
                        description:
                          "Data timestamp for this allowance period, rather than the time the page was refreshed",
                        values: {
                          asOf: (0, a.jsx)(j.XU, {
                            value: C,
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                            timeZone: "UTC",
                            timeZoneName: "short",
                          }),
                        },
                      }),
                      (0, a.jsx)(e3.m, {
                        content: (0, a.jsx)(d.A, {
                          id: "consumerUsage.limitHistory.dailyCalculationNotice",
                          defaultMessage: "Calculations run daily. Usage for this period may be out of date.",
                          description:
                            "Explains why the allowance period still open at the last daily calculation may not include recent usage",
                        }),
                        children: (0, a.jsx)(M.$, {
                          "aria-label": N.formatMessage({
                            id: "consumerUsage.limitHistory.staleUsage",
                            defaultMessage: "Usage may be out of date",
                            description:
                              "Accessible label for the explanation of delayed usage calculations for this period",
                          }),
                          color: "ghostTertiary",
                          size: "inline",
                          onClick: e9,
                          children: (0, a.jsx)(eX.ehD, {}),
                        }),
                      }),
                    ],
                  })
                : null),
            (w[24] = C),
            (w[25] = N),
            (w[26] = _.status),
            (w[27] = g))
          : (g = w[27]),
        w[28] !== c || w[29] !== g
          ? ((m = (0, a.jsxs)("th", { className: "px-4 py-3 text-start font-normal", scope: "row", children: [c, g] })),
            (w[28] = c),
            (w[29] = g),
            (w[30] = m))
          : (m = w[30]),
        w[31] !== _.usedBasisPoints
          ? ((p = (0, a.jsx)("td", {
              className: "px-4 py-3 text-end align-top font-semibold tabular-nums",
              children:
                null == _.usedBasisPoints
                  ? (0, a.jsx)(d.A, {
                      id: "consumerAnalyticsPreview.limitHistory.totalUnavailable",
                      defaultMessage: "Not available",
                      description: "The total for this period was not provided; never display it as zero",
                    })
                  : (0, a.jsx)(tn, { basisPoints: _.usedBasisPoints }),
            })),
            (w[31] = _.usedBasisPoints),
            (w[32] = p))
          : (p = w[32]),
        w[33] !== U || w[34] !== p || w[35] !== m
          ? ((f = (0, a.jsxs)("tr", {
              className:
                "cursor-interaction border-t border-default hover:bg-secondary-ghost-hover has-[:focus-visible]:bg-secondary-ghost-hover",
              onClick: U,
              children: [m, p],
            })),
            (w[33] = U),
            (w[34] = p),
            (w[35] = m),
            (w[36] = f))
          : (f = w[36]))
      let P = !I
      return (
        w[37] !== S || w[38] !== I || w[39] !== _ || w[40] !== T
          ? ((y = I ? (0, a.jsx)(tt, { period: _, breakdown: S, reduceMotion: T }) : null),
            (w[37] = S),
            (w[38] = I),
            (w[39] = _),
            (w[40] = T),
            (w[41] = y))
          : (y = w[41]),
        w[42] !== y ? ((b = (0, a.jsx)(eM.N, { initial: !1, children: y })), (w[42] = y), (w[43] = b)) : (b = w[43]),
        w[44] !== L || w[45] !== b
          ? ((x = (0, a.jsx)("td", { id: L, className: "p-0", colSpan: 2, children: b })),
            (w[44] = L),
            (w[45] = b),
            (w[46] = x))
          : (x = w[46]),
        w[47] !== P || w[48] !== x
          ? ((v = (0, a.jsx)("tr", { "aria-hidden": P, children: x })), (w[47] = P), (w[48] = x), (w[49] = v))
          : (v = w[49]),
        w[50] !== f || w[51] !== v
          ? ((k = (0, a.jsxs)(a.Fragment, { children: [f, v] })), (w[50] = f), (w[51] = v), (w[52] = k))
          : (k = w[52]),
        k
      )
    }
    function e9(e) {
      return e.stopPropagation()
    }
    function te(e) {
      0 === e.button && e.currentTarget.blur()
    }
    function tt(e) {
      let t,
        s,
        i,
        r,
        u,
        c,
        g,
        h,
        m,
        p = (0, n.c)(22),
        { period: f, breakdown: y, reduceMotion: b } = e,
        x = (0, l.A)(),
        [v, k] = (0, o.useState)()
      p[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => {
            k((0, e6.q)(e).height)
          }),
          (p[0] = t))
        : (t = p[0])
      let w = (0, e7.wY)(t),
        j = v ?? "auto"
      return (
        p[1] !== j ? ((s = { height: j }), (p[1] = j), (p[2] = s)) : (s = p[2]),
        p[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = { height: 0 }), (r = { height: 0 }), (p[3] = i), (p[4] = r))
          : ((i = p[3]), (r = p[4])),
        p[5] !== b ? ((u = b ? { duration: 0 } : em.X7), (p[5] = b), (p[6] = u)) : (u = p[6]),
        p[7] !== f.accountingComplete
          ? ((c = f.accountingComplete
              ? null
              : (0, a.jsx)("p", {
                  className: "text-secondary",
                  children: (0, a.jsx)(d.A, {
                    id: "consumerUsage.limitHistory.incompleteAccounting",
                    defaultMessage: "Some usage is unavailable; this period may be incomplete",
                    description:
                      "Some observations could not be accounted for, even when a known approximate amount is shown",
                  }),
                })),
            (p[7] = f.accountingComplete),
            (p[8] = c))
          : (c = p[8]),
        p[9] !== y || p[10] !== x || p[11] !== f.accountingComplete || p[12] !== f.breakdown
          ? ((g =
              null == f.breakdown
                ? (0, a.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(d.A, {
                      id: "consumerAnalyticsPreview.limitHistory.breakdownUnavailable",
                      defaultMessage: "Breakdown isn't available for this period",
                      description:
                        "A known limit period can lack attribution data; never substitute another period's data or sample rows",
                    }),
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("dl", {
                        className: "flex flex-col gap-2.5",
                        children: f.breakdown.rows
                          .filter(ta)
                          .map((e) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                  (0, a.jsx)("dt", { className: "text-secondary", children: e1(x, e.key, y) }),
                                  (0, a.jsx)("dd", {
                                    className: "text-end tabular-nums",
                                    children: (0, a.jsx)(tn, { basisPoints: e.basisPoints }),
                                  }),
                                ],
                              },
                              e.key,
                            ),
                          ),
                      }),
                      f.accountingComplete && f.breakdown.rows.every(ts)
                        ? (0, a.jsx)("p", {
                            className: "text-secondary",
                            children: (0, a.jsx)(d.A, {
                              id: "consumerAnalyticsPreview.limitHistory.noContributions",
                              defaultMessage: "No usage to show for this breakdown",
                              description: "No positive contributions exist for this grouping in the selected period",
                            }),
                          })
                        : null,
                    ],
                  })),
            (p[9] = y),
            (p[10] = x),
            (p[11] = f.accountingComplete),
            (p[12] = f.breakdown),
            (p[13] = g))
          : (g = p[13]),
        p[14] !== w || p[15] !== c || p[16] !== g
          ? ((h = (0, a.jsxs)("div", { ref: w, className: "flex flex-col gap-3 px-4 pb-3", children: [c, g] })),
            (p[14] = w),
            (p[15] = c),
            (p[16] = g),
            (p[17] = h))
          : (h = p[17]),
        p[18] !== s || p[19] !== u || p[20] !== h
          ? ((m = (0, a.jsx)(eA.P.div, {
              className: "overflow-hidden",
              animate: s,
              exit: i,
              initial: r,
              transition: u,
              children: h,
            })),
            (p[18] = s),
            (p[19] = u),
            (p[20] = h),
            (p[21] = m))
          : (m = p[21]),
        m
      )
    }
    function ts(e) {
      return 0 === e.basisPoints
    }
    function ta(e) {
      return e.basisPoints > 0
    }
    function tn(e) {
      let t,
        s = (0, n.c)(2),
        { basisPoints: i } = e
      return (
        s[0] !== i
          ? ((t =
              i > 0 && i < 10
                ? (0, a.jsx)(d.A, {
                    id: "consumerAnalyticsPreview.limitHistory.belowPrecision",
                    defaultMessage: "<{threshold}",
                    description:
                      "Positive plan usage below the displayed one-decimal percentage precision; less than 0.1 percent, not zero usage",
                    values: {
                      threshold: (0, a.jsx)(j.Gr, { value: 0.001, style: "percent", maximumFractionDigits: 1 }),
                    },
                  })
                : (0, a.jsx)(j.Gr, { value: i / 1e4, style: "percent", maximumFractionDigits: 1 })),
            (s[0] = i),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    var ti = s("HFSu"),
      tr = s("GDNt"),
      to = s("ASxG"),
      tl = s("fDv2")
    let td = to.object({
      data_as_of: tl.datetime({ offset: !0 }).nullable(),
      coverage_start: tl.datetime({ offset: !0 }).nullable(),
      coverage_complete: to.boolean(),
      approximate: to.boolean().default(!0),
      boundary_tolerance_seconds: to.number().nullable(),
      periods: to.array(
        to.object({
          id: to.string(),
          window_minutes: to.union([to.literal(300), to.literal(10080)]),
          plan_type: to.string(),
          starts_at: tl.datetime({ offset: !0 }),
          ends_at: tl.datetime({ offset: !0 }),
          accounting_complete: to.boolean(),
          used_basis_points: to.number().nullable(),
          breakdowns: to
            .array(
              to.object({
                dimension: to.enum(["thread_source", "turn_trigger", "model", "surface"]),
                rows: to.array(to.object({ key: to.string(), basis_points: to.number() })),
              }),
            )
            .nullable(),
        }),
      ),
    })
    function tu(e) {
      let t,
        s,
        i,
        u,
        g,
        h,
        m,
        p,
        f,
        b,
        x,
        v,
        k,
        w,
        j,
        _,
        C,
        A,
        S,
        I,
        U,
        T = (0, n.c)(56),
        { isActive: N, isPolling: L, reduceMotion: D } = e,
        E = void 0 === L || L,
        P = (0, c.As)()
      T[0] !== P || T[1] !== N || T[2] !== E
        ? ((t = (function ({ accountId: e, userId: t, authMethod: s }, a = !0, n = !0) {
            return {
              queryKey: ["consumer-plan-limit-history", e, t, 7],
              enabled: a && "chatgpt" === s && null != e && null != t,
              queryFn: async ({ signal: e }) => {
                try {
                  let t = await ti.CodexRequest.safeGet("/wham/usage/plan_limit_history", {
                    parameters: { query: { days: 7 } },
                    signal: e,
                    expectedErrorStatuses: [404],
                  })
                  return td.parse(t)
                } catch (e) {
                  if (e instanceof tr.fk && 404 === e.status) return null
                  throw e
                }
              },
              retry: !1,
              staleTime: H.D.FIVE_MINUTES,
              refetchInterval: !!n && H.D.FIVE_MINUTES,
              refetchOnWindowFocus: !1,
            }
          })(P, N, E)),
          (T[0] = P),
          (T[1] = N),
          (T[2] = E),
          (T[3] = t))
        : (t = T[3])
      let { data: R, isLoading: O, isError: F, refetch: B } = (0, Q.I)(t),
        W = R ?? void 0
      T[4] !== F || T[5] !== O
        ? ((s = "ready"), O ? (s = "loading") : F && (s = "error"), (T[4] = F), (T[5] = O), (T[6] = s))
        : (s = T[6])
      let z = (0, l.A)(),
        [$, K] = (0, o.useState)("feature")
      ;(T[7] === Symbol.for("react.memo_cache_sentinel") ? ((i = ["fiveHour", "weekly"]), (T[7] = i)) : (i = T[7]),
        T[8] !== W || T[9] !== s
          ? ((u = i.filter(
              (e) =>
                "ready" !== s ||
                W?.data_as_of == null ||
                0 === W.periods.length ||
                W.periods.some((t) => t.window_minutes === ("fiveHour" === e ? 300 : 10080)),
            )),
            (T[8] = W),
            (T[9] = s),
            (T[10] = u))
          : (u = T[10]))
      let G = u
      ;(T[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (0, a.jsx)(d.A, {
            id: "consumerAnalyticsPreview.limitHistory.title",
            defaultMessage: "Plan usage history",
            description:
              "Analytics section for exploring current and past five-hour and weekly plan allowances separately",
          })),
          (T[11] = g))
        : (g = T[11]),
        T[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)("p", {
              children: (0, a.jsx)(d.A, {
                id: "consumerAnalyticsPreview.limitHistory.description",
                defaultMessage: "See what used each of your plan limits",
                description:
                  "Explains the period-by-period allowance breakdown, separate from total usage and purchased credit history",
              }),
            })),
            (T[12] = h))
          : (h = T[12]),
        T[13] !== $
          ? ((m =
              "turn-start" === $
                ? (0, a.jsx)("p", {
                    children: (0, a.jsx)(d.A, {
                      id: "consumerUsage.limitHistory.tasksOnly",
                      defaultMessage: "By turn start includes Chats only; percentages use the full period limit",
                      description:
                        "Allowance history turn-trigger breakdown excludes other features and need not sum to the period total",
                    }),
                  })
                : null),
            (T[13] = $),
            (T[14] = m))
          : (m = T[14]),
        T[15] !== W?.approximate || T[16] !== s
          ? ((p =
              W?.approximate && "ready" === s
                ? (0, a.jsx)("p", {
                    children: (0, a.jsx)(d.A, {
                      id: "consumerUsage.limitHistory.approximateAmounts",
                      defaultMessage: "Amounts and period boundaries are approximate",
                      description:
                        "Explains that historical usage amounts and allowance period boundaries are estimates",
                    }),
                  })
                : null),
            (T[15] = W?.approximate),
            (T[16] = s),
            (T[17] = p))
          : (p = T[17]),
        T[18] !== W || T[19] !== s
          ? ((f =
              "ready" === s && W?.coverage_complete === !1 && W.periods.length > 0
                ? (0, a.jsx)("p", {
                    children: (0, a.jsx)(d.A, {
                      id: "consumerAnalyticsPreview.limitHistory.partial",
                      defaultMessage: "Some periods aren't available yet",
                      description:
                        "The response does not cover the full selected lookback; absence of rows must not imply no usage",
                    }),
                  })
                : null),
            (T[18] = W),
            (T[19] = s),
            (T[20] = f))
          : (f = T[20]),
        T[21] !== m || T[22] !== p || T[23] !== f
          ? ((b = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [h, m, p, f] })),
            (T[21] = m),
            (T[22] = p),
            (T[23] = f),
            (T[24] = b))
          : (b = T[24]),
        T[25] !== z
          ? ((x = z.formatMessage({
              id: "consumerUsage.limitHistory.details",
              defaultMessage: "About plan usage history",
              description: "Accessible label for the tooltip explaining plan usage history coverage and timing",
            })),
            (T[25] = z),
            (T[26] = x))
          : (x = T[26]),
        T[27] === Symbol.for("react.memo_cache_sentinel") ? ((v = (0, a.jsx)(eX.ehD, {})), (T[27] = v)) : (v = T[27]),
        T[28] !== x
          ? ((k = (0, a.jsx)(M.$, { "aria-label": x, color: "ghostTertiary", size: "inline", children: v })),
            (T[28] = x),
            (T[29] = k))
          : (k = T[29]),
        T[30] !== b || T[31] !== k
          ? ((w = (0, a.jsxs)("span", {
              className: "inline-flex items-center gap-2",
              children: [g, (0, a.jsx)(e3.m, { side: "bottom", align: "start", content: b, children: k })],
            })),
            (T[30] = b),
            (T[31] = k),
            (T[32] = w))
          : (w = T[32]),
        T[33] !== z
          ? ((j = z.formatMessage({
              id: "consumerAnalyticsPreview.limitHistory.sharedGroup",
              defaultMessage: "Group plan usage history",
              description:
                "Choose the breakdown for both the five-hour and weekly limit tables without changing their periods, total percentages, or other analytics sections",
            })),
            (T[33] = z),
            (T[34] = j))
          : (j = T[34]),
        T[35] !== $ || T[36] !== j
          ? ((_ = (0, a.jsx)(eZ, { ariaLabel: j, breakdown: $, onChange: K })), (T[35] = $), (T[36] = j), (T[37] = _))
          : (_ = T[37]),
        T[38] !== w || T[39] !== _
          ? ((C = (0, a.jsx)(y.X.Header, {
              className: "@max-2xl:flex-col @max-2xl:items-start",
              actionsAlignment: "end",
              title: w,
              actions: _,
            })),
            (T[38] = w),
            (T[39] = _),
            (T[40] = C))
          : (C = T[40]))
      let X = G.length > 1 && "@2xl:grid-cols-2"
      return (
        T[41] !== X ? ((A = (0, r.A)("grid grid-cols-1 items-start gap-6", X)), (T[41] = X), (T[42] = A)) : (A = T[42]),
        T[43] !== $ || T[44] !== W || T[45] !== G || T[46] !== D || T[47] !== B || T[48] !== s
          ? ((S = G.map((e) =>
              (0, a.jsx)(
                tc,
                { limit: e, breakdown: $, data: W, state: s, onRetry: () => void B(), reduceMotion: D },
                `${e}:${W?.data_as_of}`,
              ),
            )),
            (T[43] = $),
            (T[44] = W),
            (T[45] = G),
            (T[46] = D),
            (T[47] = B),
            (T[48] = s),
            (T[49] = S))
          : (S = T[49]),
        T[50] !== A || T[51] !== S
          ? ((I = (0, a.jsx)(y.X.Content, {
              className: "gap-4",
              children: (0, a.jsx)("div", { className: A, children: S }),
            })),
            (T[50] = A),
            (T[51] = S),
            (T[52] = I))
          : (I = T[52]),
        T[53] !== C || T[54] !== I
          ? ((U = (0, a.jsxs)(y.X, { id: "consumer-plan-limit-history", className: "@container", children: [C, I] })),
            (T[53] = C),
            (T[54] = I),
            (T[55] = U))
          : (U = T[55]),
        U
      )
    }
    function tc(e) {
      let t,
        s,
        i,
        r,
        l,
        u,
        c,
        g,
        h,
        m = (0, n.c)(31),
        { limit: p, breakdown: f, data: x, state: v, onRetry: k, reduceMotion: w } = e,
        [j, _] = (0, o.useState)(),
        [C, A] = (0, o.useState)(!1)
      m[0] !== f || m[1] !== x || m[2] !== j || m[3] !== p || m[4] !== C
        ? ((s = (function (e, t) {
            if (e?.data_as_of == null) return
            let s = Date.parse(e.data_as_of),
              a = { feature: "thread_source", "turn-start": "turn_trigger", model: "model", surface: "surface" }[
                t.breakdown
              ]
            return {
              asOf: s,
              coverage: e.coverage_complete ? "complete" : "partial",
              periods: e.periods
                .filter((e) => e.window_minutes === ("fiveHour" === t.limit ? 300 : 10080))
                .sort((e, t) => Date.parse(t.starts_at) - Date.parse(e.starts_at))
                .map((e) => {
                  let t = e.breakdowns?.find((e) => e.dimension === a)
                  return {
                    id: e.id,
                    interval: { startAt: Date.parse(e.starts_at), endAt: Date.parse(e.ends_at) },
                    status: Date.parse(e.ends_at) > s ? "current" : "ended",
                    usedBasisPoints: e.used_basis_points,
                    accountingComplete: e.accounting_complete,
                    breakdown:
                      null == t
                        ? null
                        : {
                            rows: t.rows.map((e) => ({
                              key: "turn_trigger" === a ? `start-${e.key}` : e.key,
                              basisPoints: e.basis_points,
                            })),
                          },
                  }
                }),
            }
          })(x, { limit: p, breakdown: f })),
          (t = s?.periods),
          (r = t?.slice(0, C ? void 0 : 5)),
          (i = void 0 !== j && null == j ? null : (r?.find((e) => e.id === j)?.id ?? r?.find(tg)?.id ?? r?.[0]?.id)),
          (m[0] = f),
          (m[1] = x),
          (m[2] = j),
          (m[3] = p),
          (m[4] = C),
          (m[5] = t),
          (m[6] = s),
          (m[7] = i),
          (m[8] = r))
        : ((t = m[5]), (s = m[6]), (i = m[7]), (r = m[8]))
      let S = i
      return (
        m[9] !== p
          ? ((l = (0, a.jsx)(y.X.Header, {
              size: "compact",
              title: (0, a.jsx)(d.A, {
                id: "consumerAnalyticsPreview.limitHistory.limitHeading",
                defaultMessage: "{limit, select, fiveHour {5-hour limits} other {Weekly limits}}",
                description:
                  "Separate headings for five-hour and weekly allowances; one shared grouping control applies to both tables",
                values: { limit: p },
              }),
            })),
            (m[9] = p),
            (m[10] = l))
          : (l = m[10]),
        m[11] !== f ||
        m[12] !== p ||
        m[13] !== k ||
        m[14] !== w ||
        m[15] !== s ||
        m[16] !== S ||
        m[17] !== v ||
        m[18] !== r
          ? ((u = (0, a.jsx)(b.t, {
              children: (0, a.jsx)(th, {
                limit: p,
                breakdown: f,
                report: s,
                visiblePeriods: r,
                selectedId: S,
                onSelect: _,
                state: v,
                onRetry: k,
                reduceMotion: w,
              }),
            })),
            (m[11] = f),
            (m[12] = p),
            (m[13] = k),
            (m[14] = w),
            (m[15] = s),
            (m[16] = S),
            (m[17] = v),
            (m[18] = r),
            (m[19] = u))
          : (u = m[19]),
        m[20] !== t || m[21] !== S || m[22] !== C || m[23] !== v
          ? ((c =
              "ready" === v && null != t && t.length > 5
                ? (0, a.jsx)(M.$, {
                    className: "self-start",
                    color: "secondary",
                    size: "compact",
                    onClick: () => {
                      ;(C && !t.slice(0, 5).some((e) => e.id === S) && _(void 0), A(!C))
                    },
                    children: (0, a.jsx)(d.A, {
                      id: "consumerAnalyticsPreview.limitHistory.toggleRows",
                      defaultMessage: "{expanded, select, yes {Show less} other {Show more}}",
                      description:
                        "Expand or collapse older periods in this limit table only; the other table and date range stay unchanged",
                      values: { expanded: C ? "yes" : "no" },
                    }),
                  })
                : null),
            (m[20] = t),
            (m[21] = S),
            (m[22] = C),
            (m[23] = v),
            (m[24] = c))
          : (c = m[24]),
        m[25] !== u || m[26] !== c
          ? ((g = (0, a.jsxs)(y.X.Content, { className: "gap-3", children: [u, c] })),
            (m[25] = u),
            (m[26] = c),
            (m[27] = g))
          : (g = m[27]),
        m[28] !== l || m[29] !== g
          ? ((h = (0, a.jsxs)(y.X, { className: "@container min-w-0", children: [l, g] })),
            (m[28] = l),
            (m[29] = g),
            (m[30] = h))
          : (h = m[30]),
        h
      )
    }
    function tg(e) {
      return "current" === e.status
    }
    function th(e) {
      let t,
        s,
        i,
        r,
        o,
        u,
        c = (0, n.c)(26),
        {
          limit: g,
          breakdown: h,
          report: p,
          visiblePeriods: f,
          selectedId: y,
          onSelect: b,
          state: x,
          onRetry: v,
          reduceMotion: k,
        } = e,
        w = (0, l.A)()
      if ("loading" === x) {
        let e
        return (
          c[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(U.u, {
                children: (0, a.jsx)(d.A, {
                  id: "consumerAnalyticsPreview.limitHistory.loading",
                  defaultMessage: "Loading limit history…",
                  description: "Loading state for one plan limit history table",
                }),
              })),
              (c[0] = e))
            : (e = c[0]),
          e
        )
      }
      if ("error" === x) {
        let e, t, s
        return (
          c[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "consumerAnalyticsPreview.limitHistory.error",
                defaultMessage: "Couldn't load limit history",
                description: "Error state for one plan limit history table",
              })),
              (c[1] = e))
            : (e = c[1]),
          c[2] !== v
            ? ((t =
                null == v
                  ? void 0
                  : (0, a.jsx)(M.$, {
                      color: "secondary",
                      size: "compact",
                      onClick: v,
                      children: (0, a.jsx)(d.A, {
                        id: "consumerAnalyticsPreview.limitHistory.retry",
                        defaultMessage: "Retry",
                        description: "Retry loading limit period history",
                      }),
                    })),
              (c[2] = v),
              (c[3] = t))
            : (t = c[3]),
          c[4] !== t ? ((s = (0, a.jsx)(T.ic, { label: e, control: t })), (c[4] = t), (c[5] = s)) : (s = c[5]),
          s
        )
      }
      if (null == p || ("partial" === p.coverage && 0 === p.periods.length)) {
        let e
        return (
          c[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.W, {
                layout: "settings-row",
                children: (0, a.jsx)(d.A, {
                  id: "consumerAnalyticsPreview.limitHistory.unavailable",
                  defaultMessage: "Limit history isn't available yet",
                  description:
                    "The data does not include historical periods or does not yet cover the selected range; absence of data is not zero usage and never falls back to samples",
                }),
              })),
              (c[6] = e))
            : (e = c[6]),
          e
        )
      }
      if ("empty" === x || 0 === p.periods.length) {
        let e
        return (
          c[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.W, {
                layout: "settings-row",
                children: (0, a.jsx)(d.A, {
                  id: "consumerAnalyticsPreview.limitHistory.empty",
                  defaultMessage: "No limit periods in this date range",
                  description:
                    "Empty history response for the selected lookback, distinct from unsupported or missing data",
                }),
              })),
              (c[7] = e))
            : (e = c[7]),
          e
        )
      }
      return (
        c[8] !== w || c[9] !== g
          ? ((t = w.formatMessage(
              {
                id: "consumerAnalyticsPreview.limitHistory.tableName",
                defaultMessage: "{limit, select, fiveHour {5-hour limits} other {Weekly limits}}",
                description: "Accessible names of the two independent allowance history tables",
              },
              { limit: g },
            )),
            (c[8] = w),
            (c[9] = g),
            (c[10] = t))
          : (t = c[10]),
        c[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)("th", {
              className: "px-4 py-2 text-start font-medium",
              scope: "col",
              children: (0, a.jsx)(d.A, {
                id: "consumerAnalyticsPreview.limitHistory.period",
                defaultMessage: "Period",
                description: "Column containing the actual beginning and reset time of one plan allowance",
              }),
            })),
            (c[11] = s))
          : (s = c[11]),
        c[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, a.jsx)("thead", {
              className: "bg-surface-secondary/92 text-secondary",
              children: (0, a.jsxs)("tr", {
                children: [
                  s,
                  (0, a.jsx)("th", {
                    className: "px-4 py-2 text-end font-medium",
                    scope: "col",
                    children: (0, a.jsx)(d.A, {
                      id: "consumerAnalyticsPreview.limitHistory.used",
                      defaultMessage: "% of limit used",
                      description:
                        "Percentage consumed from the particular allowance identified by this row, not a share of all usage",
                    }),
                  }),
                ],
              }),
            })),
            (c[12] = i))
          : (i = c[12]),
        c[13] !== h || c[14] !== g || c[15] !== b || c[16] !== k || c[17] !== p || c[18] !== y || c[19] !== f
          ? ((r = f?.map((e) =>
              (0, a.jsx)(
                e8,
                {
                  period: e,
                  asOf: p.asOf,
                  limit: g,
                  breakdown: h,
                  expanded: y === e.id,
                  onToggle: () => b(y === e.id ? null : e.id),
                  reduceMotion: k,
                },
                e.id,
              ),
            )),
            (c[13] = h),
            (c[14] = g),
            (c[15] = b),
            (c[16] = k),
            (c[17] = p),
            (c[18] = y),
            (c[19] = f),
            (c[20] = r))
          : (r = c[20]),
        c[21] !== r ? ((o = (0, a.jsx)("tbody", { children: r })), (c[21] = r), (c[22] = o)) : (o = c[22]),
        c[23] !== t || c[24] !== o
          ? ((u = (0, a.jsxs)("table", { className: "w-full text-xs leading-4", "aria-label": t, children: [i, o] })),
            (c[23] = t),
            (c[24] = o),
            (c[25] = u))
          : (u = c[25]),
        u
      )
    }
    function tm(e) {
      let t,
        s = (0, n.c)(5),
        { isActive: i, isPolling: r, reduceMotion: o, scope: l } = e,
        d = void 0 === r || r,
        u = (0, c.As)()
      if (!(0, x.Zj)("business" === (void 0 === l ? "consumer" : l) ? "1014047933" : "1504786190")) return null
      let g = `${u.accountId}:${u.userId}`
      return (
        s[0] !== i || s[1] !== d || s[2] !== o || s[3] !== g
          ? ((t = (0, a.jsx)(tu, { isActive: i, isPolling: d, reduceMotion: o }, g)),
            (s[0] = i),
            (s[1] = d),
            (s[2] = o),
            (s[3] = g),
            (s[4] = t))
          : (t = s[4]),
        t
      )
    }
    var tp = s("DnKW"),
      tf = s("T1PX")
    function ty(e) {
      let t,
        s = (0, n.c)(2),
        { metric: i } = e
      return (
        s[0] !== i
          ? ((t = (0, a.jsx)(d.A, {
              id: "consumerUsage.chats.metric",
              defaultMessage:
                "{metric, select, five_hour_limit_percent {% of 5h limit} weekly_limit_percent {% of weekly limit} other {Credits used}}",
              description:
                "Chat lifetime usage compared with the current full allowance, or actual purchased/granted credits debited",
              values: { metric: i },
            })),
            (s[0] = i),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function tb(e) {
      let t,
        s = (0, n.c)(5),
        { value: i, metric: r } = e
      if (null == i) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "consumerUsage.chats.unavailable",
                defaultMessage: "-",
                description: "An amount is unknown; it is not zero",
              })),
              (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      let o = "balance_usage_credits" === r,
        l = o ? i : i / 100,
        u = o ? "decimal" : "percent",
        c = 0 !== i && 0.01 > Math.abs(i) ? 2 : void 0
      return (
        s[1] !== l || s[2] !== u || s[3] !== c
          ? ((t = (0, a.jsx)(j.Gr, { value: l, style: u, maximumFractionDigits: 2, maximumSignificantDigits: c })),
            (s[1] = l),
            (s[2] = u),
            (s[3] = c),
            (s[4] = t))
          : (t = s[4]),
        t
      )
    }
    function tx(e) {
      let t,
        s = (0, n.c)(3),
        { row: i, metric: r } = e
      return (
        s[0] !== r || s[1] !== i
          ? ((t = (0, a.jsx)("div", {
              className: "flex min-w-0 flex-col gap-3 text-sm leading-5 font-normal select-none",
              children: (0, a.jsx)("dl", {
                className:
                  "grid w-fit max-w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 gap-y-1.5 @lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)]",
                children: ["model", "reasoning_effort", "speed"].map((e) => {
                  let t = (function (e, t, s) {
                    if (null == e || "unavailable" === e.data_status) return []
                    let a = null == e[s] ? null : Number(e[s]),
                      n = new Map()
                    for (let a of e.groups) {
                      let e = a[t],
                        i = null == a[s] ? null : Number(a[s]),
                        r = n.get(e)
                      n.set(e, null == i || (n.has(e) && null == r) ? null : (r ?? 0) + i)
                    }
                    return [...n]
                      .map(([e, t]) => ({ value: e, share: null != a && a > 0 && null != t ? t / a : null }))
                      .sort((e, t) => (null == e.share ? +(null != t.share) : null == t.share ? -1 : t.share - e.share))
                  })(i.usage, e, r)
                  return (0, a.jsxs)(
                    "div",
                    {
                      className: "col-span-full grid grid-cols-subgrid items-baseline",
                      children: [
                        (0, a.jsx)("dt", {
                          className: "w-16 text-xs leading-5 text-secondary",
                          children: (0, a.jsx)(d.A, {
                            id: "consumerUsage.chats.breakdownDimension",
                            defaultMessage:
                              "{dimension, select, model {Model} reasoning_effort {Effort} other {Speed}}",
                            description:
                              "Row labels for a chat's independent model, reasoning effort, and speed usage breakdowns",
                            values: { dimension: e },
                          }),
                        }),
                        (0, a.jsx)("dd", {
                          className: "col-start-2 -col-end-1 grid min-w-0 grid-cols-subgrid items-baseline gap-y-1.5",
                          children:
                            0 === t.length
                              ? (0, a.jsx)("span", {
                                  className: "text-secondary",
                                  children: (0, a.jsx)(d.A, {
                                    id: "consumerUsage.chats.breakdownUnavailable",
                                    defaultMessage: "Not available",
                                    description: "A chat has no available usage breakdown",
                                  }),
                                })
                              : t.map((s) =>
                                  (0, a.jsxs)(
                                    "span",
                                    {
                                      className:
                                        "inline-flex min-w-0 flex-wrap items-baseline gap-x-1.5 justify-self-start wrap-anywhere",
                                      children: [
                                        (0, a.jsx)(B.h, { dimension: e, value: s.value }),
                                        1 === t.length && 1 === s.share
                                          ? null
                                          : (0, a.jsx)("span", {
                                              className: "text-secondary tabular-nums",
                                              children:
                                                null == s.share
                                                  ? (0, a.jsx)(d.A, {
                                                      id: "consumerUsage.chats.unavailable",
                                                      defaultMessage: "-",
                                                      description: "An amount is unknown; it is not zero",
                                                    })
                                                  : (0, a.jsx)(j.Gr, {
                                                      value: s.share,
                                                      style: "percent",
                                                      maximumFractionDigits: 0,
                                                    }),
                                            }),
                                      ],
                                    },
                                    JSON.stringify(s.value),
                                  ),
                                ),
                        }),
                      ],
                    },
                    e,
                  )
                }),
              }),
            })),
            (s[0] = r),
            (s[1] = i),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    let tv = ["five_hour_limit_percent", "weekly_limit_percent", "balance_usage_credits"]
    var tk = s("CpsU"),
      tw = s.n(tk)
    let tj = (0, v.vU)(I.u, ({ accountId: e, userId: t, threads: s }, { scope: a }) => {
      let n = s.filter((e) => !(0, _.I3)(e)).sort((e, t) => t.updatedAt - e.updatedAt || e.id.localeCompare(t.id)),
        i = n.slice(0, 100)
      return {
        enabled: s.length > 0,
        queryKey: [
          "consumer-task-usage-v2",
          e,
          t,
          L.fI,
          i.map(({ id: e, createdAt: t }) => [e, t]).sort(([e], [t]) => e.localeCompare(t)),
          n.length > i.length,
        ],
        queryFn: async ({ signal: e }) => {
          let t = [],
            s = []
          for (let n of tw()(i, 2)) {
            e.throwIfAborted()
            let i = await Promise.all(n.map((e) => (0, R.V)(a, L.fI).getSubagentDescendantSnapshot((0, k.JXB)(e.id))))
            ;(e.throwIfAborted(),
              n.forEach((e, a) => {
                let n = i[a],
                  r = [...new Set(n.descendantThreads.map(({ id: e }) => e))]
                ;(t.push({ thread: e, usage: null, subagentCount: n.isComplete ? r.length : null }),
                  r.length >= 1e3 ||
                    s.push({
                      thread_id: e.id,
                      created_at:
                        Number.isFinite(e.createdAt) && e.createdAt > 0
                          ? new Date(1e3 * e.createdAt).toISOString()
                          : null,
                      descendant_thread_ids: r,
                    }))
              }))
          }
          let r = [],
            o = [],
            l = 0,
            d = new Set()
          for (let e of s) {
            let t = [e.thread_id, ...(e.descendant_thread_ids ?? [])]
            if (t.some((e) => d.has(e))) throw Error("Task usage groups overlap")
            ;(t.forEach((e) => d.add(e)),
              (100 === o.length || l + t.length > 1e3) && (r.push(o), (o = []), (l = 0)),
              o.push(e),
              (l += t.length))
          }
          o.length > 0 && r.push(o)
          let u = []
          for (let t of tw()(r, 2)) {
            e.throwIfAborted()
            let s = await Promise.all(
              t.map((t) =>
                ti.CodexRequest.safePost("/wham/usage/thread_usage/query_v2", {
                  requestBody: { threads: t },
                  signal: e,
                }),
              ),
            )
            u.push(...s)
          }
          let c = new Map(u.flatMap((e) => e.threads.map((e) => [e.thread_id, e]))),
            g = u.map((e) => e.data_as_of)
          return {
            isTruncated: i.length < n.length,
            dataAsOf: g.every((e) => null != e) ? (g.sort((e, t) => Date.parse(e) - Date.parse(t))[0] ?? null) : null,
            rows: t.map((e) => ({ ...e, usage: c.get(e.thread.id) ?? null })),
          }
        },
        retry: !1,
        staleTime: H.D.FIVE_MINUTES,
        refetchInterval: H.D.FIVE_MINUTES,
      }
    })
    var t_ = s("EJne")
    let tM = (0, v.vU)(I.u, ({ accountId: e, userId: t, threadIds: s }) => ({
      queryKey: ["work-usage-conversations", e, t, s],
      enabled: s.length > 0,
      queryFn: async ({ signal: e }) =>
        Object.fromEntries(
          await (0, t_.T)(s, 10, async (t) =>
            Object.entries(
              await ti.Kd.safePost("/conversations/by-work-thread", { requestBody: { thread_ids: t }, signal: e }),
            ),
          ),
        ),
      retry: !1,
      staleTime: H.D.ONE_MINUTE,
    }))
    function tC(e) {
      let t,
        s,
        i,
        r = (0, n.c)(18),
        { accountId: l, isPolling: d, userId: u } = e,
        c = void 0 === d || d,
        [g, h] = (0, o.useState)(!1)
      r[0] !== l || r[1] !== u ? ((t = { accountId: l, userId: u }), (r[0] = l), (r[1] = u), (r[2] = t)) : (t = r[2])
      let m = c || !g
      r[3] !== m ? ((s = { enabled: m }), (r[3] = m), (r[4] = s)) : (s = r[4])
      let { data: p, isPending: f, isError: y, isSuccess: b, refetch: x } = (0, v._U)(F, t, s)
      if ((!g && (b || y) && h(!0), f || y)) {
        let e, t, s
        return (
          r[5] !== y || r[6] !== f ? ((e = tD(y, f)), (r[5] = y), (r[6] = f), (r[7] = e)) : (e = r[7]),
          r[8] !== x ? ((t = () => void x()), (r[8] = x), (r[9] = t)) : (t = r[9]),
          r[10] !== e || r[11] !== t
            ? ((s = (0, a.jsx)(tS, { rows: void 0, status: e, onRetry: t })), (r[10] = e), (r[11] = t), (r[12] = s))
            : (s = r[12]),
          s
        )
      }
      return (
        r[13] !== l || r[14] !== c || r[15] !== p || r[16] !== u
          ? ((i = (0, a.jsx)(tA, { isPolling: c, accountId: l, userId: u, threads: p })),
            (r[13] = l),
            (r[14] = c),
            (r[15] = p),
            (r[16] = u),
            (r[17] = i))
          : (i = r[17]),
        i
      )
    }
    function tA(e) {
      let t,
        s,
        i,
        r,
        l,
        d,
        u,
        c = (0, n.c)(22),
        { accountId: g, isPolling: h, userId: m, threads: p } = e,
        [f, y] = (0, o.useState)(!1)
      c[0] !== g || c[1] !== p || c[2] !== m
        ? ((t = { accountId: g, userId: m, threads: p }), (c[0] = g), (c[1] = p), (c[2] = m), (c[3] = t))
        : (t = c[3])
      let b = h || !f
      c[4] !== b ? ((s = { enabled: b }), (c[4] = b), (c[5] = s)) : (s = c[5])
      let { data: x, isPending: k, isError: w, isSuccess: j, refetch: _ } = (0, v._U)(tj, t, s)
      ;(!f && (j || w) && y(!0),
        c[6] !== g || c[7] !== m ? ((i = { accountId: g, userId: m }), (c[6] = g), (c[7] = m), (c[8] = i)) : (i = c[8]),
        c[9] !== x?.rows || c[10] !== p.length
          ? ((r = 0 === p.length ? [] : x?.rows), (c[9] = x?.rows), (c[10] = p.length), (c[11] = r))
          : (r = c[11]))
      let M = p.length > 0 && k
      return (
        c[12] !== w || c[13] !== M ? ((l = tD(w, M)), (c[12] = w), (c[13] = M), (c[14] = l)) : (l = c[14]),
        c[15] !== _ ? ((d = () => void _()), (c[15] = _), (c[16] = d)) : (d = c[16]),
        c[17] !== i || c[18] !== r || c[19] !== l || c[20] !== d
          ? ((u = (0, a.jsx)(tS, { identity: i, rows: r, status: l, onRetry: d })),
            (c[17] = i),
            (c[18] = r),
            (c[19] = l),
            (c[20] = d),
            (c[21] = u))
          : (u = c[21]),
        u
      )
    }
    function tS(e) {
      let t,
        s,
        i,
        r,
        l,
        u,
        c,
        g = (0, n.c)(28),
        { rows: h, status: m, onRetry: p, defaultExpandedThreadId: f, identity: x } = e,
        v = (0, o.useId)(),
        [k, w] = (0, o.useState)(!1),
        [j, _] = (0, o.useState)("weekly_limit_percent")
      if (g[0] !== h || g[1] !== j) {
        let e
        ;(g[4] !== h
          ? ((e = (e) =>
              "balance_usage_credits" === e ||
              h?.some((t) => {
                let { usage: s } = t
                return null != tL(s, e)
              })),
            (g[4] = h),
            (g[5] = e))
          : (e = g[5]),
          (s = (t = tv.filter(e)).includes(j) ? j : (t[0] ?? "balance_usage_credits")),
          (g[0] = h),
          (g[1] = j),
          (g[2] = t),
          (g[3] = s))
      } else ((t = g[2]), (s = g[3]))
      let C = s
      g[6] !== C || g[7] !== h
        ? ((i = h?.slice().sort((e, t) => {
            let s = tL(e.usage, C),
              a = tL(t.usage, C)
            return null == s ? +(null != a) : null == a ? -1 : a - s
          })),
          (g[6] = C),
          (g[7] = h),
          (g[8] = i))
        : (i = g[8])
      let A = i
      return (
        g[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(y.X.Header, {
              title: (0, a.jsx)(d.A, {
                id: "consumerUsage.chats.title",
                defaultMessage: "Top chats",
                description: "Heading for task usage ranked by the selected allowance or credit metric",
              }),
              subtitle: (0, a.jsx)(d.A, {
                id: "consumerUsage.chats.recentDescription",
                defaultMessage: "Compare each chat’s plan and credit usage",
                description:
                  "At most the 100 most recently active local root chats from the last thirty days are checked. Amounts cover each chat's lifetime including subagents.",
              }),
            })),
            (g[9] = r))
          : (r = g[9]),
        g[10] !== f ||
        g[11] !== x ||
        g[12] !== C ||
        g[13] !== t ||
        g[14] !== p ||
        g[15] !== k ||
        g[16] !== A ||
        g[17] !== m ||
        g[18] !== v
          ? ((l = (0, a.jsx)(b.t, {
              children: (0, a.jsx)(tI, {
                id: v,
                identity: x,
                rows: A,
                status: m,
                onRetry: p,
                metric: C,
                metrics: t,
                setMetric: _,
                showAll: k,
                defaultExpandedThreadId: f,
              }),
            })),
            (g[10] = f),
            (g[11] = x),
            (g[12] = C),
            (g[13] = t),
            (g[14] = p),
            (g[15] = k),
            (g[16] = A),
            (g[17] = m),
            (g[18] = v),
            (g[19] = l))
          : (l = g[19]),
        g[20] !== h || g[21] !== k || g[22] !== m || g[23] !== v
          ? ((u =
              "ready" === m && null != h && h.length > 5
                ? (0, a.jsx)(M.$, {
                    className: "self-start",
                    "aria-controls": v,
                    "aria-expanded": k,
                    color: "secondary",
                    size: "compact",
                    onClick: () => w(!k),
                    children: (0, a.jsx)(d.A, {
                      id: "consumerAnalyticsPreview.chats.toggleRows",
                      defaultMessage: "{expanded, select, yes {Show less} other {Show more}}",
                      description: "Expand or collapse the full chat table",
                      values: { expanded: k ? "yes" : "no" },
                    }),
                  })
                : null),
            (g[20] = h),
            (g[21] = k),
            (g[22] = m),
            (g[23] = v),
            (g[24] = u))
          : (u = g[24]),
        g[25] !== l || g[26] !== u
          ? ((c = (0, a.jsxs)(y.X, {
              id: "consumer-top-chats",
              children: [r, (0, a.jsxs)(y.X.Content, { className: "gap-3", children: [l, u] })],
            })),
            (g[25] = l),
            (g[26] = u),
            (g[27] = c))
          : (c = g[27]),
        c
      )
    }
    function tI(e) {
      let t,
        s,
        i,
        l,
        u,
        c,
        g,
        h,
        p = (0, n.c)(32),
        {
          id: f,
          identity: y,
          rows: b,
          status: x,
          onRetry: k,
          metric: w,
          metrics: j,
          setMetric: _,
          showAll: C,
          defaultExpandedThreadId: A,
        } = e,
        S = (0, o.useId)(),
        I = (0, tf.I)(),
        [N, L] = (0, o.useState)(A ?? null),
        D = b?.slice(0, C ? void 0 : 5),
        E = (D ?? []).filter(tT).map(tU).sort(),
        { data: P } = (0, v._U)(tM, {
          accountId: y?.accountId ?? "",
          userId: y?.userId ?? "",
          threadIds: null == y || "ready" !== x ? [] : E,
        })
      if ((null == N || ("ready" === x && D?.some((e) => e.thread.id === N)) || L(null), "loading" === x)) {
        let e
        return (
          p[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(U.u, {
                children: (0, a.jsx)(d.A, {
                  id: "consumerAnalyticsPreview.chats.loading",
                  defaultMessage: "Loading chat usage…",
                  description: "Loading the consumer chat-usage table",
                }),
              })),
              (p[0] = e))
            : (e = p[0]),
          e
        )
      }
      if ("error" === x) {
        let e, t, s
        return (
          p[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "consumerAnalyticsPreview.chats.error",
                defaultMessage: "Couldn't load chat usage",
                description: "Chat usage could not be fetched; previous results are not presented as fresh usage",
              })),
              (p[1] = e))
            : (e = p[1]),
          p[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(d.A, {
                id: "consumerAnalyticsPreview.chats.retry",
                defaultMessage: "Retry",
                description: "Reload chat usage",
              })),
              (p[2] = t))
            : (t = p[2]),
          p[3] !== k
            ? ((s = (0, a.jsx)(T.ic, {
                label: e,
                control: (0, a.jsx)(M.$, { color: "secondary", size: "compact", onClick: k, children: t }),
              })),
              (p[3] = k),
              (p[4] = s))
            : (s = p[4]),
          s
        )
      }
      if (null == b || 0 === b.length) {
        let e
        return (
          p[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.W, {
                layout: "settings-row",
                children: (0, a.jsx)(d.A, {
                  id: "consumerUsage.chats.empty",
                  defaultMessage: "No recent chats on this device",
                  description: "No local root tasks were active in the last thirty days",
                }),
              })),
              (p[5] = e))
            : (e = p[5]),
          e
        )
      }
      if (
        (p[6] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)("col", {})), (p[6] = t)) : (t = p[6]),
        p[7] !== j)
      ) {
        let e
        ;(p[9] !== j.length
          ? ((e = (e) =>
              (0, a.jsx)(
                "col",
                {
                  className: (0, r.A)(3 === j.length && "w-1/6", 2 === j.length && "w-1/4", 1 === j.length && "w-1/3"),
                },
                e,
              )),
            (p[9] = j.length),
            (p[10] = e))
          : (e = p[10]),
          (s = j.map(e)),
          (p[7] = j),
          (p[8] = s))
      } else s = p[8]
      if (
        (p[11] !== s ? ((i = (0, a.jsxs)("colgroup", { children: [t, s] })), (p[11] = s), (p[12] = i)) : (i = p[12]),
        p[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)("th", {
              className: "py-2 ps-10 pe-4 text-start font-normal",
              scope: "col",
              children: (0, a.jsx)(d.A, {
                id: "consumerAnalyticsPreview.chats.chat",
                defaultMessage: "Chat",
                description: "Column heading for the chat title",
              }),
            })),
            (p[13] = l))
          : (l = p[13]),
        p[14] !== S || p[15] !== w || p[16] !== j || p[17] !== _)
      ) {
        let e
        ;(p[19] !== S || p[20] !== w || p[21] !== _
          ? ((e = (e) =>
              (0, a.jsx)(
                "th",
                {
                  className: "py-2 ps-2 pe-6 text-end font-normal",
                  scope: "col",
                  "aria-labelledby": `${S}-${e}`,
                  "aria-sort": e === w ? "descending" : "none",
                  children: (0, a.jsx)("div", {
                    className: "flex justify-end",
                    children: (0, a.jsx)(M.$, {
                      color: "ghostMuted",
                      size: "inline",
                      onClick: () => _(e),
                      children: (0, a.jsx)("span", {
                        id: `${S}-${e}`,
                        className: "text-end",
                        children: (0, a.jsx)(ty, { metric: e }),
                      }),
                    }),
                  }),
                },
                e,
              )),
            (p[19] = S),
            (p[20] = w),
            (p[21] = _),
            (p[22] = e))
          : (e = p[22]),
          (u = j.map(e)),
          (p[14] = S),
          (p[15] = w),
          (p[16] = j),
          (p[17] = _),
          (p[18] = u))
      } else u = p[18]
      p[23] !== u
        ? ((c = (0, a.jsx)("thead", {
            className: "text-xs leading-5 text-secondary",
            children: (0, a.jsxs)("tr", { children: [l, u] }),
          })),
          (p[23] = u),
          (p[24] = c))
        : (c = p[24])
      let R = D?.map((e) =>
        (0, a.jsx)(
          tN,
          {
            row: e,
            workConversation: P?.[e.thread.id],
            metric: w,
            metrics: j,
            expanded: e.thread.id === N,
            onToggle: () => L(e.thread.id === N ? null : e.thread.id),
            reduceMotion: I,
          },
          e.thread.id,
        ),
      )
      return (
        p[25] !== R ? ((g = (0, a.jsx)("tbody", { children: R })), (p[25] = R), (p[26] = g)) : (g = p[26]),
        p[27] !== f || p[28] !== g || p[29] !== i || p[30] !== c
          ? ((h = (0, a.jsx)("div", {
              className: "@container min-w-0 overflow-x-auto",
              children: (0, a.jsxs)("table", {
                id: f,
                className: "w-full text-sm leading-5 font-normal",
                children: [i, c, g],
              }),
            })),
            (p[27] = f),
            (p[28] = g),
            (p[29] = i),
            (p[30] = c),
            (p[31] = h))
          : (h = p[31]),
        h
      )
    }
    function tU(e) {
      let { thread: t } = e
      return t.id
    }
    function tT(e) {
      let { thread: t } = e
      return (0, tp.j)(t.originator)
    }
    function tN(e) {
      let t,
        s,
        i,
        l,
        u,
        c,
        g,
        m,
        p,
        f,
        y,
        b,
        x,
        j,
        _,
        A,
        S,
        I,
        U,
        T,
        N,
        E,
        R,
        O,
        H = (0, n.c)(80),
        { row: F, workConversation: B, metric: W, metrics: z, expanded: $, onToggle: K, reduceMotion: G } = e,
        X = (0, P.M0)(),
        q = (0, o.useId)(),
        [V, Z] = (0, o.useState)()
      H[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => {
            Z((0, e6.q)(e).height)
          }),
          (H[0] = t))
        : (t = H[0])
      let Q = (0, e7.wY)(t)
      H[1] !== F.thread.originator
        ? ((s = (0, tp.j)(F.thread.originator)), (H[1] = F.thread.originator), (H[2] = s))
        : (s = H[2])
      let J = s
      H[3] !== J || H[4] !== F.thread.id
        ? ((i = J ? null : { hostId: L.fI, threadId: (0, k.JXB)(F.thread.id) }),
          (H[3] = J),
          (H[4] = F.thread.id),
          (H[5] = i))
        : (i = H[5])
      let Y = (0, v._U)(D.e, i)
      H[6] !== J || H[7] !== Y || H[8] !== F.thread || H[9] !== B?.title
        ? ((l = J ? B?.title : (Y ?? (0, w.Vm)(F.thread, w.wp))),
          (H[6] = J),
          (H[7] = Y),
          (H[8] = F.thread),
          (H[9] = B?.title),
          (H[10] = l))
        : (l = H[10])
      let ee = l
      H[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(d.A, {
                id: "consumerUsage.chats.openInChat",
                defaultMessage: "Open chat",
                description: "Open the chat whose usage breakdown is expanded",
              }),
              (0, a.jsx)(eX.$XR, {}),
            ],
          })),
          (H[11] = u))
        : (u = H[11])
      let et = u,
        es = $ ? "bg-text/3" : "hover:bg-secondary-ghost-hover has-[:focus-visible]:bg-secondary-ghost-hover"
      H[12] !== es
        ? ((c = (0, r.A)("group cursor-interaction border-t border-default", es)), (H[12] = es), (H[13] = c))
        : (c = H[13])
      let ea = `${q}-trigger`,
        en = `${q}-details`,
        ei = `${q}-title`,
        er = $ && "rotate-90",
        eo = G && "transition-none"
      ;(H[14] !== er || H[15] !== eo
        ? ((g = (0, r.A)("shrink-0 text-secondary transition-transform duration-relaxed ease-enter-snappy", er, eo)),
          (H[14] = er),
          (H[15] = eo),
          (H[16] = g))
        : (g = H[16]),
        H[17] !== g
          ? ((m = (0, a.jsx)(h.I, { className: g, asset: eK, focusable: "false" })), (H[17] = g), (H[18] = m))
          : (m = H[18]))
      let el = `${q}-title`
      if (
        (H[19] !== ee
          ? ((p =
              ee ||
              (0, a.jsx)(d.A, {
                id: "consumerUsage.chats.untitled",
                defaultMessage: "Untitled chat",
                description: "Fallback title for a chat without a name or preview",
              })),
            (H[19] = ee),
            (H[20] = p))
          : (p = H[20]),
        H[21] !== el || H[22] !== p
          ? ((f = (0, a.jsx)(C.E, { id: el, className: "min-w-0 flex-1", animateOnGroupHover: !0, children: p })),
            (H[21] = el),
            (H[22] = p),
            (H[23] = f))
          : (f = H[23]),
        H[24] !== $ || H[25] !== ei || H[26] !== m || H[27] !== f || H[28] !== ea || H[29] !== en
          ? ((y = (0, a.jsx)("th", {
              className: "max-w-0 px-4 py-2.5 text-start font-normal text-default",
              scope: "row",
              children: (0, a.jsxs)(M.$, {
                id: ea,
                className: "w-full gap-2 text-start",
                "aria-controls": en,
                "aria-expanded": $,
                "aria-labelledby": ei,
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                children: [m, f],
              }),
            })),
            (H[24] = $),
            (H[25] = ei),
            (H[26] = m),
            (H[27] = f),
            (H[28] = ea),
            (H[29] = en),
            (H[30] = y))
          : (y = H[30]),
        H[31] !== z || H[32] !== F.usage)
      ) {
        let e
        ;(H[34] !== F.usage
          ? ((e = (e) =>
              (0, a.jsx)(
                "td",
                {
                  className: "py-2.5 ps-2 pe-6 text-end tabular-nums",
                  children: (0, a.jsx)(tb, { value: tL(F.usage, e), metric: e }),
                },
                e,
              )),
            (H[34] = F.usage),
            (H[35] = e))
          : (e = H[35]),
          (b = z.map(e)),
          (H[31] = z),
          (H[32] = F.usage),
          (H[33] = b))
      } else b = H[33]
      H[36] !== K || H[37] !== y || H[38] !== b || H[39] !== c
        ? ((x = (0, a.jsxs)("tr", { className: c, onClick: K, children: [y, b] })),
          (H[36] = K),
          (H[37] = y),
          (H[38] = b),
          (H[39] = c),
          (H[40] = x))
        : (x = H[40])
      let ed = !$,
        eu = z.length + 1,
        ec = `${q}-details`,
        eg = $ ? "opacity-100" : "opacity-0",
        eh = G && "transition-none"
      H[41] !== eg || H[42] !== eh
        ? ((j = (0, r.A)("overflow-hidden transition-opacity duration-basic ease-out", eg, eh)),
          (H[41] = eg),
          (H[42] = eh),
          (H[43] = j))
        : (j = H[43])
      let ep = `${q}-title`,
        ef = !$,
        ey = !$,
        eb = $ ? (V ?? "auto") : 0
      H[44] !== eb ? ((_ = { height: eb }), (H[44] = eb), (H[45] = _)) : (_ = H[45])
      let ex = 0.3 * !G
      return (
        H[46] !== ex ? ((A = { duration: ex, ease: em.Wu }), (H[46] = ex), (H[47] = A)) : (A = H[47]),
        H[48] !== W || H[49] !== F
          ? ((S = (0, a.jsx)(tx, { row: F, metric: W })), (H[48] = W), (H[49] = F), (H[50] = S))
          : (S = H[50]),
        H[51] !== B
          ? ((I =
              null != B
                ? (0, a.jsx)(M.z, {
                    className: "underline-offset-2 hover:underline focus-visible:underline",
                    color: "ghostMuted",
                    size: "inline",
                    to: `/c/${B.conversation_id}`,
                    children: et,
                  })
                : null),
            (H[51] = B),
            (H[52] = I))
          : (I = H[52]),
        H[53] !== J || H[54] !== X || H[55] !== F.thread.id
          ? ((U = J
              ? null
              : (0, a.jsx)(M.$, {
                  className: "underline-offset-2 hover:underline focus-visible:underline",
                  color: "ghostMuted",
                  size: "inline",
                  onClick: () => X((0, k.JXB)(F.thread.id), L.fI),
                  children: et,
                })),
            (H[53] = J),
            (H[54] = X),
            (H[55] = F.thread.id),
            (H[56] = U))
          : (U = H[56]),
        H[57] !== Q || H[58] !== S || H[59] !== I || H[60] !== U
          ? ((T = (0, a.jsxs)("div", {
              ref: Q,
              className: "flex flex-col items-start gap-3 ps-10 pe-6 pt-1.5 pb-4",
              children: [S, I, U],
            })),
            (H[57] = Q),
            (H[58] = S),
            (H[59] = I),
            (H[60] = U),
            (H[61] = T))
          : (T = H[61]),
        H[62] !== ec ||
        H[63] !== j ||
        H[64] !== ep ||
        H[65] !== ef ||
        H[66] !== ey ||
        H[67] !== _ ||
        H[68] !== A ||
        H[69] !== T
          ? ((N = (0, a.jsx)(eA.P.section, {
              id: ec,
              className: j,
              "aria-labelledby": ep,
              "aria-hidden": ef,
              inert: ey,
              animate: _,
              initial: !1,
              transition: A,
              children: T,
            })),
            (H[62] = ec),
            (H[63] = j),
            (H[64] = ep),
            (H[65] = ef),
            (H[66] = ey),
            (H[67] = _),
            (H[68] = A),
            (H[69] = T),
            (H[70] = N))
          : (N = H[70]),
        H[71] !== eu || H[72] !== N
          ? ((E = (0, a.jsx)("td", { className: "p-0", colSpan: eu, children: N })),
            (H[71] = eu),
            (H[72] = N),
            (H[73] = E))
          : (E = H[73]),
        H[74] !== ed || H[75] !== E
          ? ((R = (0, a.jsx)("tr", { className: "bg-text/3", "aria-hidden": ed, children: E })),
            (H[74] = ed),
            (H[75] = E),
            (H[76] = R))
          : (R = H[76]),
        H[77] !== x || H[78] !== R
          ? ((O = (0, a.jsxs)(a.Fragment, { children: [x, R] })), (H[77] = x), (H[78] = R), (H[79] = O))
          : (O = H[79]),
        O
      )
    }
    function tL(e, t) {
      return null == e || "unavailable" === e.data_status || null == e[t] ? null : Number(e[t])
    }
    function tD(e, t) {
      return e ? "error" : t ? "loading" : "ready"
    }
    function tE(e) {
      let t,
        s,
        i,
        r,
        u,
        c,
        g,
        h,
        m,
        p,
        b,
        x,
        v,
        k,
        w,
        j,
        _ = (0, n.c)(50),
        { enabled: M, isPolling: C, reduceMotion: A } = e,
        S = void 0 === C || C,
        I = (0, l.A)(),
        [U, T] = (0, o.useState)(7),
        [N, L] = (0, o.useState)("product"),
        [D, E] = (0, o.useState)()
      _[0] !== N || _[1] !== U || _[2] !== M || _[3] !== S
        ? ((t = { isPolling: S, balanceUnit: "usd", breakdown: N, days: U, enabled: M, scope: "workspace" }),
          (_[0] = N),
          (_[1] = U),
          (_[2] = M),
          (_[3] = S),
          (_[4] = t))
        : (t = _[4])
      let { data: P, isError: R, isLoading: O, refetch: H } = (0, f.X6)(t)
      _[5] !== D?.data || _[6] !== D?.data.some
        ? ((s = D?.data.some(tO)), (_[5] = D?.data), (_[6] = D?.data.some), (_[7] = s))
        : (s = _[7])
      let F = s,
        B = O && !R && !!F,
        W = B ? D : P,
        z = W?.dataFreshnessTimestamp
      ;(_[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, a.jsx)(d.A, {
            id: "settings.usage.billing.spend.history.title",
            defaultMessage: "Spend history",
            description: "Heading for the enterprise workspace member's native USD spend history",
          })),
          (_[8] = i))
        : (i = _[8]),
        _[9] !== I || _[10] !== z
          ? ((r =
              null == z
                ? (0, a.jsx)(d.A, {
                    id: "settings.usage.billing.spend.history.subtitle",
                    defaultMessage: "Track spend in USD over time",
                    description: "Description of the enterprise workspace member's native USD spend history",
                  })
                : (0, a.jsx)(d.A, {
                    id: "settings.usage.billing.spend.history.subtitle.updated",
                    defaultMessage: "Track spend in USD over time. Updated {date}",
                    description:
                      "Description of the enterprise workspace member's native USD spend history, with the source's last update date",
                    values: { date: q(z, I) },
                  })),
            (_[9] = I),
            (_[10] = z),
            (_[11] = r))
          : (r = _[11]),
        _[12] !== I
          ? ((u = I.formatMessage({
              id: "settings.usage.billing.spend.history.periodLabel",
              defaultMessage: "Spend history time range",
              description: "Accessible label for the seven-day or thirty-day range of the native USD spend history",
            })),
            (_[12] = I),
            (_[13] = u))
          : (u = _[13]),
        _[14] !== W
          ? ((c = (e) => {
              ;(E(W), T(e))
            }),
            (_[14] = W),
            (_[15] = c))
          : (c = _[15]),
        _[16] !== U || _[17] !== u || _[18] !== c
          ? ((g = (0, a.jsx)(V.tS, { ariaLabel: u, days: U, onChange: c })),
            (_[16] = U),
            (_[17] = u),
            (_[18] = c),
            (_[19] = g))
          : (g = _[19]),
        _[20] !== I
          ? ((h = I.formatMessage({
              id: "settings.usage.billing.spend.history.breakdownLabel",
              defaultMessage: "Group spend history",
              description:
                "Accessible label for the product, model, reasoning effort, or speed breakdown of the native USD spend history",
            })),
            (_[20] = I),
            (_[21] = h))
          : (h = _[21]),
        _[22] !== W
          ? ((m = (e) => {
              ;(E(W?.data.some(tP) ? void 0 : W), L(e))
            }),
            (_[22] = W),
            (_[23] = m))
          : (m = _[23]),
        _[24] !== N || _[25] !== m || _[26] !== h
          ? ((p = (0, a.jsx)(V.Sv, { ariaLabel: h, breakdown: N, scope: "workspace", onChange: m })),
            (_[24] = N),
            (_[25] = m),
            (_[26] = h),
            (_[27] = p))
          : (p = _[27]),
        _[28] !== p || _[29] !== g
          ? ((b = (0, a.jsxs)("div", { className: "flex flex-wrap items-center justify-end gap-2", children: [g, p] })),
            (_[28] = p),
            (_[29] = g),
            (_[30] = b))
          : (b = _[30]),
        _[31] !== b || _[32] !== r
          ? ((x = (0, a.jsx)(y.X.Header, { actionsAlignment: "end", title: i, subtitle: r, actions: b })),
            (_[31] = b),
            (_[32] = r),
            (_[33] = x))
          : (x = _[33]))
      let $ = null != D && !F
      return (
        _[34] !== H
          ? ((v = () => {
              H()
            }),
            (_[34] = H),
            (_[35] = v))
          : (v = _[35]),
        _[36] !== R || _[37] !== O || _[38] !== B || _[39] !== A || _[40] !== $ || _[41] !== v
          ? ((k = { isError: R, isLoading: O, isUpdating: B, preserveEmptyLayout: $, reduceMotion: A, onRetry: v }),
            (_[36] = R),
            (_[37] = O),
            (_[38] = B),
            (_[39] = A),
            (_[40] = $),
            (_[41] = v),
            (_[42] = k))
          : (k = _[42]),
        _[43] !== N || _[44] !== W || _[45] !== k
          ? ((w = (0, a.jsx)(y.X.Content, {
              children: (0, a.jsx)(eL, {
                breakdown: N,
                data: W,
                hideTotal: !0,
                scope: "workspace",
                status: k,
                unit: "usd",
              }),
            })),
            (_[43] = N),
            (_[44] = W),
            (_[45] = k),
            (_[46] = w))
          : (w = _[46]),
        _[47] !== x || _[48] !== w
          ? ((j = (0, a.jsxs)(y.X, { children: [x, w] })), (_[47] = x), (_[48] = w), (_[49] = j))
          : (j = _[49]),
        j
      )
    }
    function tP(e) {
      let { values: t } = e
      return Object.values(t).some(tR)
    }
    function tR(e) {
      return 0 !== e
    }
    function tO(e) {
      let { values: t } = e
      return Object.values(t).some(tH)
    }
    function tH(e) {
      return 0 !== e
    }
    function tF(e) {
      let t,
        s = (0, n.c)(8),
        {
          showUnifiedUsage: i,
          canViewCreditSettings: r,
          isUsdWorkspace: o,
          isPolling: l,
          reduceMotion: d,
          scope: u,
          workspaceTaskUsage: c,
        } = e,
        g = void 0 !== i && i,
        h = void 0 === r || r,
        m = void 0 !== o && o,
        p = void 0 === l || l,
        f = void 0 !== d && d,
        y = void 0 === u ? "workspace" : u,
        b = "workspace" === y || (void 0 !== c && c)
      return (
        s[0] !== h || s[1] !== p || s[2] !== m || s[3] !== f || s[4] !== y || s[5] !== g || s[6] !== b
          ? ((t = (0, a.jsx)(tB, {
              showUnifiedUsage: g,
              canViewCreditSettings: h,
              isUsdWorkspace: m,
              isPolling: p,
              reduceMotion: f,
              scope: y,
              workspaceTaskUsage: b,
            })),
            (s[0] = h),
            (s[1] = p),
            (s[2] = m),
            (s[3] = f),
            (s[4] = y),
            (s[5] = g),
            (s[6] = b),
            (s[7] = t))
          : (t = s[7]),
        t
      )
    }
    function tB(e) {
      let t,
        s,
        u,
        v,
        k,
        w,
        j,
        _,
        M,
        C,
        A,
        S,
        I,
        U,
        T,
        N,
        L,
        D,
        E,
        P,
        R,
        O,
        H,
        F,
        B,
        z,
        $,
        K,
        G,
        X,
        Q,
        es,
        ea,
        en,
        er,
        eo,
        el,
        ed,
        eu,
        ec,
        eg,
        eh,
        em,
        ep,
        ef,
        ey,
        eb,
        ex,
        ev,
        ek,
        ew,
        ej,
        e_ = (0, n.c)(380),
        {
          showUnifiedUsage: eM,
          canViewCreditSettings: eC,
          isActive: eA,
          isUsdWorkspace: eS,
          isPolling: eI,
          reduceMotion: eU,
          scope: eT,
          workspaceTaskUsage: eN,
        } = e,
        eL = void 0 === eA || eA,
        eD = void 0 !== eS && eS,
        eE = void 0 === eI || eI,
        eP = void 0 !== eU && eU,
        eR = (0, o.use)(Y.Wj)?.scope ?? null,
        eO = (0, l.A)(),
        { accountId: eH, userId: eB } = (0, c.As)(),
        { data: eW } = (0, g.YL)(),
        ez = "workspace" === eT ? (eW?.id ?? null) : eH,
        e$ = "consumer" === eT,
        eK = (0, x.Zj)(!!e$ && "393259752"),
        eG = (0, x.Zj)("business" === eT && "1014047933"),
        eX = (e$ && eK) || eG,
        eq = (0, x.Zj)(!!eX && !eN && "1034085511"),
        [eV, eZ] = (0, o.useState)(7),
        [eQ, eJ] = (0, o.useState)(0),
        [eY, e1] = (0, o.useState)("surface"),
        [e3, e4] = (0, o.useState)(null),
        [e5, e6] = (0, o.useState)(null),
        [e7, e8] = (0, o.useState)(7),
        [e9, te] = (0, o.useState)(null),
        [tt, ts] = (0, o.useState)("workspace" === eT ? 30 : 7),
        ta = ez ?? null,
        tn = eB ?? null
      ;(e_[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { hasManualSelection: !1, hasResolved: !1 }),
          (s = { hasManualSelection: !1, hasResolved: !1 }),
          (u = { hasManualSelection: !1, hasResolved: !1 }),
          (e_[0] = t),
          (e_[1] = s),
          (e_[2] = u))
        : ((t = e_[0]), (s = e_[1]), (u = e_[2])),
        e_[3] !== eT || e_[4] !== ta || e_[5] !== tn
          ? ((v = { accountId: ta, userId: tn, scope: eT, usage: t, tokens: s, tools: u }),
            (e_[3] = eT),
            (e_[4] = ta),
            (e_[5] = tn),
            (e_[6] = v))
          : (v = e_[6]))
      let [ti, tr] = (0, o.useState)(v),
        to = "workspace" === eT || (ti.accountId === (ez ?? null) && ti.userId === (eB ?? null) && ti.scope === eT)
      to ||
        (tr({
          accountId: ez ?? null,
          userId: eB ?? null,
          scope: eT,
          usage: { hasManualSelection: !1, hasResolved: !1 },
          tokens: { hasManualSelection: !1, hasResolved: !1 },
          tools: { hasManualSelection: !1, hasResolved: !1 },
        }),
        eZ(7),
        eJ(0),
        e1("surface"),
        e4(null),
        e6(null),
        e8(7),
        te(null),
        ts(7))
      let [tl, td] = (0, o.useState)(!1),
        [tu, tc] = (0, o.useState)(!1),
        [tg, th] = (0, o.useState)(!1),
        [tp, tf] = (0, o.useState)(!1),
        [ty, tb] = (0, o.useState)(null),
        [tx, tv] = (0, o.useState)(null),
        [tk, tw] = (0, o.useState)(null),
        [tj, t_] = (0, o.useState)(null),
        [tM, tA] = (0, o.useState)(null),
        tS = e$ || ("business" === eT && "reasoning" === e5) ? "product" : (e5 ?? "product"),
        tI = eX ? eQ : 0,
        tU = eL && "workspace" !== eT && to
      e_[7] !== eE || e_[8] !== tI || e_[9] !== tU || e_[10] !== eV
        ? ((k = { isPolling: eE, days: eV, offsetDays: tI, enabled: tU }),
          (e_[7] = eE),
          (e_[8] = tI),
          (e_[9] = tU),
          (e_[10] = eV),
          (e_[11] = k))
        : (k = e_[11])
      let tT = (0, f.ZY)(k),
        { data: tN, isLoading: tL, isError: tD, refetch: tP } = tT,
        tR = tL && !tD && null == tN && ty?.accountId === (ez ?? null) && ty.userId === (eB ?? null),
        tO = tR ? ty.data : tN,
        tH =
          "workspace" !== eT &&
          ty?.accountId === (ez ?? null) &&
          ty.userId === (eB ?? null) &&
          Math.max(ty.data.total, ty.data.byModel.total) > 0 &&
          null != tO &&
          0 === Math.max(tO.total, tO.byModel.total)
      e_[12] !== tO?.byModel.series || e_[13] !== tO?.byModel.series.some
        ? ((w = tO?.byModel.series.some(tQ) ?? !1),
          (e_[12] = tO?.byModel.series),
          (e_[13] = tO?.byModel.series.some),
          (e_[14] = w))
        : (w = e_[14])
      let tF = w,
        tB = tO?.series.some(tZ) ?? !1,
        t0 = tF && ("model" === eY || !tB) ? "model" : "surface",
        t2 = eL && !eD && (!e$ || eC)
      e_[15] !== eE || e_[16] !== eT || e_[17] !== tS || e_[18] !== t2 || e_[19] !== eV
        ? ((j = { isPolling: eE, breakdown: tS, days: eV, enabled: t2, scope: eT }),
          (e_[15] = eE),
          (e_[16] = eT),
          (e_[17] = tS),
          (e_[18] = t2),
          (e_[19] = eV),
          (e_[20] = j))
        : (j = e_[20])
      let t3 = (0, f.X6)(j),
        { data: t4, isLoading: t5, isError: t6, refetch: t7 } = t3,
        t8 = "business" === eT && null == e5 && ("model" === t0 || t4?.total === 0) && (t4?.paidModelTotal ?? 0) > 0,
        t9 = eL && t8
      e_[21] !== eE || e_[22] !== eT || e_[23] !== t9 || e_[24] !== eV
        ? ((_ = { isPolling: eE, breakdown: "model", days: eV, enabled: t9, scope: eT }),
          (e_[21] = eE),
          (e_[22] = eT),
          (e_[23] = t9),
          (e_[24] = eV),
          (e_[25] = _))
        : (_ = e_[25])
      let se = (0, f.X6)(_),
        { data: st, isLoading: ss, isError: sa, refetch: sn } = se,
        si = t8 ? st : t4,
        sr = t8 ? ss : t5,
        so = t8 ? sa : t6,
        sl = t8 ? sn : t7,
        sd = t8 ? "model" : tS,
        su = {
          current: [
            { total: null == tN ? void 0 : Math.max(tN.total, tN.byModel.total), isLoading: tL, isError: tD },
            ...(!e$ || eC
              ? [
                  {
                    total: null == si ? void 0 : Math.max(si.total, si.paidModelTotal ?? 0),
                    isLoading: sr,
                    isError: so,
                  },
                ]
              : []),
          ],
          days: eV,
          enabled: eL && "workspace" !== eT && to,
          ...ti.usage,
        },
        { shouldProbe: sc } = Z(su),
        { data: sg, isLoading: sh, isError: sm } = (0, f.ZY)({ isPolling: eE, days: 30, enabled: sc }),
        {
          data: sp,
          isLoading: sf,
          isError: sy,
        } = (0, f.X6)({ isPolling: eE, breakdown: tS, days: 30, enabled: sc && (!e$ || eC), scope: eT }),
        sb = Z({
          ...su,
          fallback: [
            { total: null == sg ? void 0 : Math.max(sg.total, sg.byModel.total), isLoading: sh, isError: sm },
            ...(!e$ || eC
              ? [
                  {
                    total: null == sp ? void 0 : Math.max(sp.total, sp.paidModelTotal ?? 0),
                    isLoading: sf,
                    isError: sy,
                  },
                ]
              : []),
          ],
        }),
        sx = (sc && !sb.shouldResolve) || (sr && !tD)
      sb.shouldResolve && (tr(tV), sb.shouldSelectThirtyDays && eZ(30))
      let sv = sr && !so && null == si && tx?.accountId === (ez ?? null) && tx.userId === (eB ?? null),
        sk = sv ? tx.data : si,
        sw =
          sk?.dataFreshnessTimestamp ??
          (sr && !so && null == si && tk?.accountId === (ez ?? null) && tk.userId === (eB ?? null) ? tk.data : null)
      e_[26] !== ez || e_[27] !== sw || e_[28] !== eB
        ? ((M = () => {
            tw(null != sw ? { accountId: ez ?? null, data: sw, userId: eB ?? null } : null)
          }),
          (e_[26] = ez),
          (e_[27] = sw),
          (e_[28] = eB),
          (e_[29] = M))
        : (M = e_[29])
      let sj = M
      e_[30] !== ez ||
      e_[31] !== eR ||
      e_[32] !== sk ||
      e_[33] !== tO ||
      e_[34] !== sj ||
      e_[35] !== eV ||
      e_[36] !== eB
        ? ((C = (e, t) => {
            e !== eV && (0, Y.$c)(eR, "usage_history", e)
            let s = null == tO ? void 0 : Math.max(tO.total, tO.byModel.total)
            ;(td(0 === s),
              tb(null != tO && (s ?? 0) > 0 ? { accountId: ez ?? null, data: tO, userId: eB ?? null } : null),
              e !== eV &&
                (sj(),
                tc(sk?.total === 0),
                tv(null != sk && sk.total > 0 ? { accountId: ez ?? null, data: sk, userId: eB ?? null } : null)),
              tr(tq),
              eZ(e),
              eJ(void 0 === t ? 0 : t))
          }),
          (e_[30] = ez),
          (e_[31] = eR),
          (e_[32] = sk),
          (e_[33] = tO),
          (e_[34] = sj),
          (e_[35] = eV),
          (e_[36] = eB),
          (e_[37] = C))
        : (C = e_[37])
      let s_ = C,
        sM = !eP && null != si && tx?.accountId === (ez ?? null) && tx.userId === (eB ?? null) && tx.data !== si
      ;(e_[38] !== sl
        ? ((A = () => {
            sl()
          }),
          (e_[38] = sl),
          (e_[39] = A))
        : (A = e_[39]),
        e_[40] !== so ||
        e_[41] !== sr ||
        e_[42] !== sv ||
        e_[43] !== tu ||
        e_[44] !== eP ||
        e_[45] !== sM ||
        e_[46] !== A
          ? ((S = {
              animateDataChanges: sM,
              isError: so,
              isLoading: sr,
              isUpdating: sv,
              preserveEmptyLayout: tu,
              reduceMotion: eP,
              onRetry: A,
            }),
            (e_[40] = so),
            (e_[41] = sr),
            (e_[42] = sv),
            (e_[43] = tu),
            (e_[44] = eP),
            (e_[45] = sM),
            (e_[46] = A),
            (e_[47] = S))
          : (S = e_[47]))
      let sC = S,
        sA = eL && !e$
      e_[48] !== eE || e_[49] !== eT || e_[50] !== sA || e_[51] !== e7
        ? ((I = { isPolling: eE, days: e7, enabled: sA, scope: eT }),
          (e_[48] = eE),
          (e_[49] = eT),
          (e_[50] = sA),
          (e_[51] = e7),
          (e_[52] = I))
        : (I = e_[52])
      let sS = (0, f.BV)(I),
        { data: sI, isLoading: sU, isError: sT, refetch: sN } = sS,
        sL = {
          current: [{ total: sI?.total, isLoading: sU, isError: sT }],
          days: e7,
          enabled: eL && "business" === eT && to,
          ...ti.tokens,
        },
        { shouldProbe: sD } = Z(sL),
        { data: sE, isLoading: sP, isError: sR } = (0, f.BV)({ isPolling: eE, days: 30, enabled: sD, scope: eT }),
        sO = Z({ ...sL, fallback: [{ total: sE?.total, isLoading: sP, isError: sR }] }),
        sH = sD && !sO.shouldResolve
      sO.shouldResolve && (tr(tX), sO.shouldSelectThirtyDays && e8(30))
      let sF = sU && !sT && null == sI && tj?.accountId === (ez ?? null) && tj.userId === (eB ?? null),
        sB = sF ? tj.data : sI
      e_[53] !== sB || e_[54] !== eT
        ? ((U = "business" === eT ? sB?.models.filter(tG) : sB?.models), (e_[53] = sB), (e_[54] = eT), (e_[55] = U))
        : (U = e_[55])
      let sW = U
      e_[56] !== e9 || e_[57] !== sW
        ? ((T =
            null != e9 &&
            sW?.some((e) => {
              let { key: t } = e
              return t === e9
            })
              ? e9
              : null),
          (e_[56] = e9),
          (e_[57] = sW),
          (e_[58] = T))
        : (T = e_[58])
      let sz = T,
        s$ = !eP && null != sI && tj?.accountId === (ez ?? null) && tj.userId === (eB ?? null) && tj.data !== sI,
        sK = sU || sH
      ;(e_[59] !== sN
        ? ((N = () => {
            sN()
          }),
          (e_[59] = sN),
          (e_[60] = N))
        : (N = e_[60]),
        e_[61] !== sT ||
        e_[62] !== sF ||
        e_[63] !== tg ||
        e_[64] !== eP ||
        e_[65] !== s$ ||
        e_[66] !== sK ||
        e_[67] !== N
          ? ((L = {
              animateDataChanges: s$,
              isError: sT,
              isLoading: sK,
              isUpdating: sF,
              preserveEmptyLayout: tg,
              reduceMotion: eP,
              onRetry: N,
            }),
            (e_[61] = sT),
            (e_[62] = sF),
            (e_[63] = tg),
            (e_[64] = eP),
            (e_[65] = s$),
            (e_[66] = sK),
            (e_[67] = N),
            (e_[68] = L))
          : (L = e_[68]))
      let sG = L
      e_[69] !== tt || e_[70] !== eL || e_[71] !== eE || e_[72] !== eT
        ? ((D = { isPolling: eE, days: tt, enabled: eL, scope: eT }),
          (e_[69] = tt),
          (e_[70] = eL),
          (e_[71] = eE),
          (e_[72] = eT),
          (e_[73] = D))
        : (D = e_[73])
      let sX = (0, f.eU)(D),
        { data: sq, isLoading: sV, isError: sZ, refetch: sQ } = sX
      e_[74] !== tt || e_[75] !== eL || e_[76] !== eE || e_[77] !== eT
        ? ((E = { isPolling: eE, days: tt, enabled: eL, scope: eT }),
          (e_[74] = tt),
          (e_[75] = eL),
          (e_[76] = eE),
          (e_[77] = eT),
          (e_[78] = E))
        : (E = e_[78])
      let sJ = (0, f.Iu)(E),
        { data: sY, isLoading: s1, isError: s0, refetch: s2 } = sJ,
        s3 = {
          current: [
            { total: sq?.total, isLoading: sV, isError: sZ },
            { total: sY?.total, isLoading: s1, isError: s0 },
          ],
          days: tt,
          enabled: eL && "workspace" !== eT && to,
          ...ti.tools,
        },
        { shouldProbe: s4 } = Z(s3),
        { data: s5, isLoading: s6, isError: s7 } = (0, f.eU)({ isPolling: eE, days: 30, enabled: s4, scope: eT }),
        { data: s8, isLoading: s9, isError: ae } = (0, f.Iu)({ isPolling: eE, days: 30, enabled: s4, scope: eT }),
        at = Z({
          ...s3,
          fallback: [
            { total: s5?.total, isLoading: s6, isError: s7 },
            { total: s8?.total, isLoading: s9, isError: ae },
          ],
        })
      at.shouldResolve && (tr(tK), at.shouldSelectThirtyDays && ts(30))
      let as = tM?.accountId === (ez ?? null) && tM.userId === (eB ?? null)
      e_[79] !== as || e_[80] !== eP
        ? ((P = (e, t) => !eP && null != e && as && null != t && t !== e), (e_[79] = as), (e_[80] = eP), (e_[81] = P))
        : (P = e_[81])
      let aa = P,
        an = sV && !sZ && null == sq && as && null != tM.data.plugins,
        ai = s1 && !s0 && null == sY && as && null != tM.data.skills,
        ar = an ? tM.data.plugins : sq,
        ao = ai ? tM.data.skills : sY,
        al = "workspace" !== eT && as && (tM.data.plugins?.total ?? 0) > 0 && ar?.total === 0,
        ad = "workspace" !== eT && as && (tM.data.skills?.total ?? 0) > 0 && ao?.total === 0
      if (
        e_[82] !== ez ||
        e_[83] !== eR ||
        e_[84] !== eH ||
        e_[85] !== eC ||
        e_[86] !== eX ||
        e_[87] !== sw ||
        e_[88] !== sC ||
        e_[89] !== sd ||
        e_[90] !== sk ||
        e_[91] !== tO ||
        e_[92] !== ar?.dataFreshnessTimestamp ||
        e_[93] !== ar?.total ||
        e_[94] !== ao?.dataFreshnessTimestamp ||
        e_[95] !== ao?.total ||
        e_[96] !== sB ||
        e_[97] !== to ||
        e_[98] !== tF ||
        e_[99] !== eO ||
        e_[100] !== eL ||
        e_[101] !== e$ ||
        e_[102] !== so ||
        e_[103] !== tD ||
        e_[104] !== tL ||
        e_[105] !== tR ||
        e_[106] !== sZ ||
        e_[107] !== sV ||
        e_[108] !== eE ||
        e_[109] !== s0 ||
        e_[110] !== s1 ||
        e_[111] !== sx ||
        e_[112] !== eD ||
        e_[113] !== se ||
        e_[114] !== tT ||
        e_[115] !== tN ||
        e_[116] !== sq ||
        e_[117] !== sX ||
        e_[118] !== tp ||
        e_[119] !== tl ||
        e_[120] !== tH ||
        e_[121] !== e3 ||
        e_[122] !== ty ||
        e_[123] !== tj ||
        e_[124] !== eP ||
        e_[125] !== tP ||
        e_[126] !== sj ||
        e_[127] !== eT ||
        e_[128] !== t3 ||
        e_[129] !== t0 ||
        e_[130] !== sz ||
        e_[131] !== s4 ||
        e_[132] !== eM ||
        e_[133] !== sY ||
        e_[134] !== sJ ||
        e_[135] !== eq ||
        e_[136] !== e7 ||
        e_[137] !== sS ||
        e_[138] !== sG ||
        e_[139] !== sW ||
        e_[140] !== at.shouldResolve ||
        e_[141] !== s_ ||
        e_[142] !== eV ||
        e_[143] !== eQ ||
        e_[144] !== t8 ||
        e_[145] !== eB ||
        e_[146] !== eN
      ) {
        var au, ac
        let e,
          t,
          s,
          n,
          r =
            ((au = ar?.dataFreshnessTimestamp),
            (ac = ao?.dataFreshnessTimestamp),
            null == au || null == ac ? null : Date.parse(au) <= Date.parse(ac) ? au : ac)
        ;((H = null != sq && null != sY && 0 === sq.total && 0 === sY.total && !sV && !s1 && !sZ && !s0),
          (F = tp && (sV || s1) && (sq?.total ?? 0) === 0 && (sY?.total ?? 0) === 0 && !sZ && !s0),
          (B =
            "workspace" !== eT &&
            ((sV && null == sq) || (s1 && null == sY) || (s4 && !at.shouldResolve)) &&
            (ar?.total ?? 0) === 0 &&
            (ao?.total ?? 0) === 0 &&
            !sZ &&
            !s0),
          e_[169] !== eX || e_[170] !== tO || e_[171] !== eQ
            ? ((e = eX && (eQ > 0 || null == tO || tO.attribution.every(t$))),
              (e_[169] = eX),
              (e_[170] = tO),
              (e_[171] = eQ),
              (e_[172] = e))
            : (e = e_[172]))
        let o = e
        e_[173] !== ez || e_[174] !== eL || e_[175] !== eE || e_[176] !== eD || e_[177] !== eB || e_[178] !== eN
          ? ((t =
              eN && eL && null != ez && null != eB
                ? (0, a.jsx)(
                    t1,
                    { children: (0, a.jsx)(W, { accountId: ez, isUsdWorkspace: eD, isPolling: eE, userId: eB }) },
                    `workspace-top-chats:${ez}:${eB}`,
                  )
                : null),
            (e_[173] = ez),
            (e_[174] = eL),
            (e_[175] = eE),
            (e_[176] = eD),
            (e_[177] = eB),
            (e_[178] = eN),
            (e_[179] = t))
          : (t = e_[179])
        let l = t
        ;((X = "flex w-full flex-col gap-[22px]"),
          e_[180] !== to || e_[181] !== eL || e_[182] !== tT || e_[183] !== eT
            ? ((s = "workspace" !== eT && eL && to ? [tT] : []),
              (e_[180] = to),
              (e_[181] = eL),
              (e_[182] = tT),
              (e_[183] = eT),
              (e_[184] = s))
            : (s = e_[184]),
          e_[185] !== eC ||
          e_[186] !== eL ||
          e_[187] !== e$ ||
          e_[188] !== eD ||
          e_[189] !== se ||
          e_[190] !== t3 ||
          e_[191] !== t8
            ? ((n = eL && !eD && (!e$ || eC) ? [t8 ? se : t3] : []),
              (e_[185] = eC),
              (e_[186] = eL),
              (e_[187] = e$),
              (e_[188] = eD),
              (e_[189] = se),
              (e_[190] = t3),
              (e_[191] = t8),
              (e_[192] = n))
            : (n = e_[192]),
          e_[193] !== s || e_[194] !== n
            ? ((Q = (0, a.jsx)(ee.F, { chart: "usage_history", queries: [...s, ...n] })),
              (e_[193] = s),
              (e_[194] = n),
              (e_[195] = Q))
            : (Q = e_[195]),
          e_[196] !== eL || e_[197] !== e$ || e_[198] !== sS
            ? ((es = !e$ && eL ? (0, a.jsx)(ee.F, { chart: "tokens", queries: [sS] }) : null),
              (e_[196] = eL),
              (e_[197] = e$),
              (e_[198] = sS),
              (e_[199] = es))
            : (es = e_[199]),
          e_[200] !== eL || e_[201] !== sX || e_[202] !== sJ
            ? ((ea = eL ? (0, a.jsx)(ee.F, { chart: "tool_activity", queries: [sX, sJ] }) : null),
              (e_[200] = eL),
              (e_[201] = sX),
              (e_[202] = sJ),
              (e_[203] = ea))
            : (ea = e_[203]),
          e_[204] !== ez ||
          e_[205] !== eX ||
          e_[206] !== tO?.attribution ||
          e_[207] !== tD ||
          e_[208] !== tL ||
          e_[209] !== tR ||
          e_[210] !== sx ||
          e_[211] !== tN ||
          e_[212] !== tl ||
          e_[213] !== ty ||
          e_[214] !== eP ||
          e_[215] !== tP ||
          e_[216] !== o ||
          e_[217] !== eM ||
          e_[218] !== s_ ||
          e_[219] !== eV ||
          e_[220] !== eQ ||
          e_[221] !== eB
            ? ((en = o
                ? (0, a.jsx)(
                    e0,
                    {
                      showUnifiedUsage: eM,
                      buckets: tO?.attribution,
                      days: eV,
                      onDaysChange: s_,
                      pagination: eX ? { offsetDays: eQ, onOffsetDaysChange: (e) => s_(eV, e) } : void 0,
                      status: {
                        animateDataChanges:
                          null != tN && ty?.accountId === (ez ?? null) && ty.userId === (eB ?? null) && ty.data !== tN,
                        isError: tD,
                        isLoading: tL || sx,
                        isUpdating: tR,
                        preserveEmptyLayout: tl,
                        reduceMotion: eP,
                        onRetry: () => {
                          tP()
                        },
                      },
                    },
                    `consumer-usage-history:${ez}:${eB}`,
                  )
                : null),
              (e_[204] = ez),
              (e_[205] = eX),
              (e_[206] = tO?.attribution),
              (e_[207] = tD),
              (e_[208] = tL),
              (e_[209] = tR),
              (e_[210] = sx),
              (e_[211] = tN),
              (e_[212] = tl),
              (e_[213] = ty),
              (e_[214] = eP),
              (e_[215] = tP),
              (e_[216] = o),
              (e_[217] = eM),
              (e_[218] = s_),
              (e_[219] = eV),
              (e_[220] = eQ),
              (e_[221] = eB),
              (e_[222] = en))
            : (en = e_[222]),
          e_[223] !== ez ||
          e_[224] !== eR ||
          e_[225] !== eX ||
          e_[226] !== tO ||
          e_[227] !== tF ||
          e_[228] !== eO ||
          e_[229] !== tD ||
          e_[230] !== tL ||
          e_[231] !== tR ||
          e_[232] !== eE ||
          e_[233] !== sx ||
          e_[234] !== tN ||
          e_[235] !== tl ||
          e_[236] !== tH ||
          e_[237] !== e3 ||
          e_[238] !== ty ||
          e_[239] !== eP ||
          e_[240] !== tP ||
          e_[241] !== eT ||
          e_[242] !== t0 ||
          e_[243] !== o ||
          e_[244] !== eM ||
          e_[245] !== s_ ||
          e_[246] !== eV ||
          e_[247] !== eB
            ? ((er =
                o || "workspace" === eT
                  ? null
                  : (0, a.jsxs)(y.X, {
                      children: [
                        (0, a.jsx)(y.X.Header, {
                          actionsAlignment: "end",
                          size: "default",
                          title: (0, a.jsx)(d.A, {
                            id: "settings.usage.billing.personalUsage.history.title",
                            defaultMessage: "Usage history",
                            description:
                              "Heading above a Consumer or Business user's own included-plan usage history in Codex desktop analytics settings; the chart does not show remaining plan allowance",
                          }),
                          subtitle: eM
                            ? (0, a.jsx)(e2, {})
                            : (0, a.jsx)(d.A, {
                                id: "settings.usage.billing.personalUsage.history.subtitle",
                                defaultMessage:
                                  "See how plan usage and credits were consumed in Work, Codex, and other agentic tasks. Conversations in Chat are not included.",
                                description:
                                  "Supporting text beneath Usage history in Codex desktop analytics settings. Explains that a Consumer or Business user's included-plan activity and credit charts include Work, Codex, and other agentic tasks, but exclude ordinary Chat conversations. Work, Codex, and Chat are OpenAI product names.",
                              }),
                          actions: (0, a.jsx)(V.tS, {
                            ariaLabel: eO.formatMessage({
                              id: "settings.usage.billing.personalUsage.history.periodLabel",
                              defaultMessage: "Personal usage history time range",
                              description:
                                "Accessible label for a Consumer or Business user's historical personal Codex usage date-range selector",
                            }),
                            days: eV,
                            onChange: s_,
                          }),
                        }),
                        (0, a.jsx)(y.X.Content, {
                          children: (0, a.jsx)(tJ, {
                            isPolling: eE,
                            consumerAnalytics: eX,
                            actions: tF
                              ? (0, a.jsx)(p.T, {
                                  ariaLabel: eO.formatMessage({
                                    id: "settings.usage.billing.personalUsage.breakdownLabel",
                                    defaultMessage: "Group personal usage by product or model",
                                    description:
                                      "Accessible label for the selector that groups a Consumer or Business account holder’s personal usage by the Codex or Work product, or by AI model",
                                  }),
                                  options: [
                                    { id: "surface", label: (0, a.jsx)(V.xn, { breakdown: "product" }) },
                                    { id: "model", label: (0, a.jsx)(V.d1, { breakdown: "model" }) },
                                  ],
                                  selectedId: t0,
                                  variant: "inset",
                                  onSelect: (e) => {
                                    ;(e !== t0 && (0, Y.to)(eR, "usage_history", "surface" === e ? "product" : e),
                                      e4(t0),
                                      e1(e))
                                  },
                                })
                              : void 0,
                            breakdown: "model" === t0 ? "model" : "product",
                            data: "model" === t0 ? tO?.byModel : tO,
                            isPersonalUsage: !0,
                            preservePopulatedCardLayout: tH,
                            scope: eT,
                            status: {
                              animateDataChanges:
                                !eP &&
                                ((null != e3 && e3 !== t0) ||
                                  (null != tN &&
                                    ty?.accountId === (ez ?? null) &&
                                    ty.userId === (eB ?? null) &&
                                    ty.data !== tN)),
                              isError: tD,
                              isLoading: tL || sx,
                              isUpdating: tR,
                              preserveEmptyLayout: tl,
                              reduceMotion: eP,
                              onAnimationEnd: () => e4(null),
                              onRetry: () => {
                                tP()
                              },
                            },
                          }),
                        }),
                        (0, a.jsxs)(y.X.Footer, {
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsx)(h.I, { className: "shrink-0", asset: i.c }),
                            (0, a.jsx)(d.A, {
                              id: "settings.usage.daily.subtitle",
                              defaultMessage: "Usage data is approximate and may be delayed by up to 6 hours",
                              description: "Description for daily usage in usage settings",
                            }),
                          ],
                        }),
                      ],
                    })),
              (e_[223] = ez),
              (e_[224] = eR),
              (e_[225] = eX),
              (e_[226] = tO),
              (e_[227] = tF),
              (e_[228] = eO),
              (e_[229] = tD),
              (e_[230] = tL),
              (e_[231] = tR),
              (e_[232] = eE),
              (e_[233] = sx),
              (e_[234] = tN),
              (e_[235] = tl),
              (e_[236] = tH),
              (e_[237] = e3),
              (e_[238] = ty),
              (e_[239] = eP),
              (e_[240] = tP),
              (e_[241] = eT),
              (e_[242] = t0),
              (e_[243] = o),
              (e_[244] = eM),
              (e_[245] = s_),
              (e_[246] = eV),
              (e_[247] = eB),
              (e_[248] = er))
            : (er = e_[248]),
          e_[249] !== ez ||
          e_[250] !== eX ||
          e_[251] !== eL ||
          e_[252] !== eE ||
          e_[253] !== eq ||
          e_[254] !== eB ||
          e_[255] !== eN
            ? ((eo =
                eX && !eN && eq && eL && null != ez && null != eB
                  ? (0, a.jsx)(
                      t1,
                      { children: (0, a.jsx)(tC, { isPolling: eE, accountId: ez, userId: eB }) },
                      `consumer-top-chats:${ez}:${eB}`,
                    )
                  : null),
              (e_[249] = ez),
              (e_[250] = eX),
              (e_[251] = eL),
              (e_[252] = eE),
              (e_[253] = eq),
              (e_[254] = eB),
              (e_[255] = eN),
              (e_[256] = eo))
            : (eo = e_[256]),
          (el = "consumer" === eT ? l : null),
          e_[257] !== eX || e_[258] !== eL || e_[259] !== eE || e_[260] !== eP || e_[261] !== eT
            ? ((ed = eX
                ? (0, a.jsx)(tm, {
                    isPolling: eE,
                    isActive: eL,
                    reduceMotion: eP,
                    scope: "business" === eT ? "business" : "consumer",
                  })
                : null),
              (e_[257] = eX),
              (e_[258] = eL),
              (e_[259] = eE),
              (e_[260] = eP),
              (e_[261] = eT),
              (e_[262] = ed))
            : (ed = e_[262]),
          e_[263] !== eH || e_[264] !== eL || e_[265] !== eE || e_[266] !== eD || e_[267] !== eP || e_[268] !== eB
            ? ((eu = eD
                ? (0, a.jsx)(
                    tE,
                    { isPolling: eE, enabled: eL, reduceMotion: eP },
                    `enterprise-spend-history:${eH}:${eB}`,
                  )
                : null),
              (e_[263] = eH),
              (e_[264] = eL),
              (e_[265] = eE),
              (e_[266] = eD),
              (e_[267] = eP),
              (e_[268] = eB),
              (e_[269] = eu))
            : (eu = e_[269]),
          e_[270] !== ez ||
          e_[271] !== eR ||
          e_[272] !== eC ||
          e_[273] !== eX ||
          e_[274] !== sw ||
          e_[275] !== sC ||
          e_[276] !== sd ||
          e_[277] !== sk ||
          e_[278] !== eO ||
          e_[279] !== e$ ||
          e_[280] !== so ||
          e_[281] !== eE ||
          e_[282] !== eD ||
          e_[283] !== sj ||
          e_[284] !== eT ||
          e_[285] !== s_ ||
          e_[286] !== eV ||
          e_[287] !== eB
            ? ((ec =
                !eD &&
                (!e$ || eC) &&
                ("workspace" === eT || so || (sk?.total ?? 0) > 0 || (sk?.paidModelTotal ?? 0) > 0)
                  ? (0, a.jsxs)(y.X, {
                      children: [
                        (0, a.jsx)(y.X.Header, {
                          className: "workspace" === eT ? void 0 : "max-sm:flex-col max-sm:items-stretch",
                          actionsAlignment: "end",
                          size: "default",
                          title: (0, a.jsx)(tY, { scope: eT, consumerAnalytics: eX }),
                          subtitle:
                            null == sw
                              ? (0, a.jsx)(d.A, {
                                  id: "settings.usage.billing.credits.history.subtitle",
                                  defaultMessage: "Track credits usage over time",
                                  description:
                                    "Description for the credit usage history chart when freshness is unavailable",
                                })
                              : (0, a.jsx)(d.A, {
                                  id: "settings.usage.billing.credits.history.subtitle.updated",
                                  defaultMessage: "Track credits usage over time. Updated {date}",
                                  description:
                                    "Description and source freshness timestamp for the credit usage history chart",
                                  values: { date: q(sw, eO) },
                                }),
                          actions: (0, a.jsxs)("div", {
                            className: "flex flex-wrap items-center justify-end gap-2",
                            children: [
                              (0, a.jsx)(V.tS, {
                                ariaLabel: eX
                                  ? eO.formatMessage({
                                      id: "settings.usage.billing.credits.consumer.history.periodLabel",
                                      defaultMessage: "Credits history time range",
                                      description:
                                        "Accessible label for the Consumer credit history date-range selector",
                                    })
                                  : eO.formatMessage({
                                      id: "settings.usage.billing.credits.history.periodLabel",
                                      defaultMessage: "Credit usage history time range",
                                      description:
                                        "Accessible label for the enterprise credit usage history date-range selector",
                                    }),
                                days: eV,
                                onChange: (e) => {
                                  "workspace" !== eT
                                    ? s_(e)
                                    : (e !== eV && (0, Y.$c)(eR, "usage_history", e),
                                      sj(),
                                      tc(sk?.total === 0),
                                      tv(
                                        null != sk && sk.total > 0
                                          ? { accountId: ez ?? null, data: sk, userId: eB ?? null }
                                          : null,
                                      ),
                                      eZ(e))
                                },
                              }),
                              (0, a.jsx)(V.Sv, {
                                breakdown: sd,
                                scope: eT,
                                onChange: (e) => {
                                  ;(e !== sd && ("model" === e || "product" === e) && (0, Y.to)(eR, "usage_history", e),
                                    sj(),
                                    tc(sk?.total === 0),
                                    tv(null),
                                    e6(e))
                                },
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)(y.X.Content, {
                          children: (0, a.jsx)(tJ, {
                            isPolling: eE,
                            consumerAnalytics: eX,
                            breakdown: sd,
                            data: sk,
                            scope: eT,
                            status: sC,
                          }),
                        }),
                      ],
                    })
                  : null),
              (e_[270] = ez),
              (e_[271] = eR),
              (e_[272] = eC),
              (e_[273] = eX),
              (e_[274] = sw),
              (e_[275] = sC),
              (e_[276] = sd),
              (e_[277] = sk),
              (e_[278] = eO),
              (e_[279] = e$),
              (e_[280] = so),
              (e_[281] = eE),
              (e_[282] = eD),
              (e_[283] = sj),
              (e_[284] = eT),
              (e_[285] = s_),
              (e_[286] = eV),
              (e_[287] = eB),
              (e_[288] = ec))
            : (ec = e_[288]),
          e_[289] !== ez ||
          e_[290] !== eR ||
          e_[291] !== sB ||
          e_[292] !== eO ||
          e_[293] !== e$ ||
          e_[294] !== tj ||
          e_[295] !== eT ||
          e_[296] !== sz ||
          e_[297] !== e7 ||
          e_[298] !== sG ||
          e_[299] !== sW ||
          e_[300] !== eB
            ? ((eg = e$
                ? null
                : (0, a.jsxs)(y.X, {
                    children: [
                      (0, a.jsx)(y.X.Header, {
                        className: "workspace" === eT ? void 0 : "max-sm:flex-col max-sm:items-stretch",
                        actionsAlignment: "end",
                        size: "default",
                        title:
                          "workspace" === eT
                            ? (0, a.jsx)(d.A, {
                                id: "settings.usage.billing.tokens.history.title",
                                defaultMessage: "Token usage history",
                                description: "Title for the token usage history chart in enterprise billing settings",
                              })
                            : (0, a.jsx)(d.A, {
                                id: "settings.usage.billing.tokens.business.history.title",
                                defaultMessage: "Tokens by model",
                                description:
                                  "Heading above a Business workspace member's own token usage grouped by AI model in Codex desktop analytics settings",
                              }),
                        subtitle:
                          sB?.dataFreshnessTimestamp == null
                            ? (0, a.jsx)(d.A, {
                                id: "settings.usage.billing.tokens.history.subtitle",
                                defaultMessage: "Track token usage over time",
                                description:
                                  "Description for the token usage history chart when freshness is unavailable",
                              })
                            : (0, a.jsx)(d.A, {
                                id: "settings.usage.billing.tokens.history.subtitle.updated",
                                defaultMessage: "Track token usage over time. Updated {date}",
                                description:
                                  "Description and source freshness timestamp for the token usage history chart",
                                values: { date: q(sB.dataFreshnessTimestamp, eO) },
                              }),
                        actions: (0, a.jsxs)("div", {
                          className: "flex flex-wrap items-center justify-end gap-2",
                          children: [
                            (0, a.jsx)(V.tS, {
                              ariaLabel: eO.formatMessage({
                                id: "settings.usage.billing.tokens.history.periodLabel",
                                defaultMessage: "Token usage history time range",
                                description:
                                  "Accessible label for the enterprise token usage history date-range selector",
                              }),
                              days: e7,
                              onChange: (e) => {
                                ;(e !== e7 && (0, Y.$c)(eR, "tokens", e),
                                  th(sB?.total === 0),
                                  t_((e) =>
                                    sB?.total
                                      ? { accountId: ez ?? null, data: sB, userId: eB ?? null }
                                      : "business" === eT && e?.accountId === (ez ?? null) && e.userId === (eB ?? null)
                                        ? e
                                        : null,
                                  ),
                                  tr(tz),
                                  e8(e))
                              },
                            }),
                            (0, a.jsx)(V.ap, {
                              models: sW ?? [],
                              selectedModel: sz,
                              onChange: (e) => {
                                ;(e !== sz && (0, Y.zJ)(eR, "tokens", e), te(e))
                              },
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)(y.X.Content, {
                        children: (0, a.jsx)(eF, {
                          data: sB,
                          preservePopulatedCardLayout:
                            "business" === eT &&
                            tj?.accountId === (ez ?? null) &&
                            tj.userId === (eB ?? null) &&
                            tj.data.total > 0 &&
                            sB?.total === 0,
                          selectedModel: sz,
                          scope: eT,
                          status: sG,
                        }),
                      }),
                    ],
                  })),
              (e_[289] = ez),
              (e_[290] = eR),
              (e_[291] = sB),
              (e_[292] = eO),
              (e_[293] = e$),
              (e_[294] = tj),
              (e_[295] = eT),
              (e_[296] = sz),
              (e_[297] = e7),
              (e_[298] = sG),
              (e_[299] = sW),
              (e_[300] = eB),
              (e_[301] = eg))
            : (eg = e_[301]),
          (eh = "workspace" === eT ? l : null),
          (O = y.X),
          (R = y.X.Header),
          (z = "end"),
          ($ = "default"),
          e_[302] === Symbol.for("react.memo_cache_sentinel")
            ? ((K = (0, a.jsx)(d.A, {
                id: "settings.usage.billing.activity.title",
                defaultMessage: "Tool activity",
                description: "Title for skill and plugin usage charts in enterprise billing settings",
              })),
              (e_[302] = K))
            : (K = e_[302]),
          (G =
            null == r
              ? (0, a.jsx)(d.A, {
                  id: "settings.usage.billing.activity.subtitle",
                  defaultMessage: "See which plugins and skills were used over time",
                  description: "Description for plugin and skill activity charts when freshness is unavailable",
                })
              : (0, a.jsx)(d.A, {
                  id: "settings.usage.billing.activity.subtitle.updated",
                  defaultMessage: "See which plugins and skills were used over time. Updated {date}",
                  description:
                    "Description and oldest source freshness timestamp for the combined plugin and skill activity charts",
                  values: { date: q(r, eO) },
                })),
          (e_[82] = ez),
          (e_[83] = eR),
          (e_[84] = eH),
          (e_[85] = eC),
          (e_[86] = eX),
          (e_[87] = sw),
          (e_[88] = sC),
          (e_[89] = sd),
          (e_[90] = sk),
          (e_[91] = tO),
          (e_[92] = ar?.dataFreshnessTimestamp),
          (e_[93] = ar?.total),
          (e_[94] = ao?.dataFreshnessTimestamp),
          (e_[95] = ao?.total),
          (e_[96] = sB),
          (e_[97] = to),
          (e_[98] = tF),
          (e_[99] = eO),
          (e_[100] = eL),
          (e_[101] = e$),
          (e_[102] = so),
          (e_[103] = tD),
          (e_[104] = tL),
          (e_[105] = tR),
          (e_[106] = sZ),
          (e_[107] = sV),
          (e_[108] = eE),
          (e_[109] = s0),
          (e_[110] = s1),
          (e_[111] = sx),
          (e_[112] = eD),
          (e_[113] = se),
          (e_[114] = tT),
          (e_[115] = tN),
          (e_[116] = sq),
          (e_[117] = sX),
          (e_[118] = tp),
          (e_[119] = tl),
          (e_[120] = tH),
          (e_[121] = e3),
          (e_[122] = ty),
          (e_[123] = tj),
          (e_[124] = eP),
          (e_[125] = tP),
          (e_[126] = sj),
          (e_[127] = eT),
          (e_[128] = t3),
          (e_[129] = t0),
          (e_[130] = sz),
          (e_[131] = s4),
          (e_[132] = eM),
          (e_[133] = sY),
          (e_[134] = sJ),
          (e_[135] = eq),
          (e_[136] = e7),
          (e_[137] = sS),
          (e_[138] = sG),
          (e_[139] = sW),
          (e_[140] = at.shouldResolve),
          (e_[141] = s_),
          (e_[142] = eV),
          (e_[143] = eQ),
          (e_[144] = t8),
          (e_[145] = eB),
          (e_[146] = eN),
          (e_[147] = R),
          (e_[148] = O),
          (e_[149] = H),
          (e_[150] = F),
          (e_[151] = B),
          (e_[152] = z),
          (e_[153] = $),
          (e_[154] = K),
          (e_[155] = G),
          (e_[156] = X),
          (e_[157] = Q),
          (e_[158] = es),
          (e_[159] = ea),
          (e_[160] = en),
          (e_[161] = er),
          (e_[162] = eo),
          (e_[163] = el),
          (e_[164] = ed),
          (e_[165] = eu),
          (e_[166] = ec),
          (e_[167] = eg),
          (e_[168] = eh))
      } else
        ((R = e_[147]),
          (O = e_[148]),
          (H = e_[149]),
          (F = e_[150]),
          (B = e_[151]),
          (z = e_[152]),
          ($ = e_[153]),
          (K = e_[154]),
          (G = e_[155]),
          (X = e_[156]),
          (Q = e_[157]),
          (es = e_[158]),
          (ea = e_[159]),
          (en = e_[160]),
          (er = e_[161]),
          (eo = e_[162]),
          (el = e_[163]),
          (ed = e_[164]),
          (eu = e_[165]),
          (ec = e_[166]),
          (eg = e_[167]),
          (eh = e_[168]))
      ;(e_[303] !== eO
        ? ((em = eO.formatMessage({
            id: "settings.usage.billing.activity.periodLabel",
            defaultMessage: "Tool activity time range",
            description: "Accessible label for the enterprise tool activity date-range selector",
          })),
          (e_[303] = eO),
          (e_[304] = em))
        : (em = e_[304]),
        e_[305] !== ez ||
        e_[306] !== tt ||
        e_[307] !== eR ||
        e_[308] !== ar ||
        e_[309] !== ao ||
        e_[310] !== H ||
        e_[311] !== eB
          ? ((ep = (e) => {
              ;(e !== tt && (0, Y.$c)(eR, "tool_activity", e),
                tf(H),
                tA(
                  (ar?.total ?? 0) > 0 || (ao?.total ?? 0) > 0
                    ? { accountId: ez ?? null, data: { plugins: ar, skills: ao }, userId: eB ?? null }
                    : null,
                ),
                tr(tW),
                ts(e))
            }),
            (e_[305] = ez),
            (e_[306] = tt),
            (e_[307] = eR),
            (e_[308] = ar),
            (e_[309] = ao),
            (e_[310] = H),
            (e_[311] = eB),
            (e_[312] = ep))
          : (ep = e_[312]),
        e_[313] !== tt || e_[314] !== em || e_[315] !== ep
          ? ((ef = (0, a.jsx)(V.tS, { ariaLabel: em, days: tt, onChange: ep })),
            (e_[313] = tt),
            (e_[314] = em),
            (e_[315] = ep),
            (e_[316] = ef))
          : (ef = e_[316]),
        e_[317] !== R || e_[318] !== z || e_[319] !== $ || e_[320] !== K || e_[321] !== G || e_[322] !== ef
          ? ((ey = (0, a.jsx)(R, { actionsAlignment: z, size: $, title: K, subtitle: G, actions: ef })),
            (e_[317] = R),
            (e_[318] = z),
            (e_[319] = $),
            (e_[320] = K),
            (e_[321] = G),
            (e_[322] = ef),
            (e_[323] = ey))
          : (ey = e_[323]))
      let ag = "workspace" === eT && "transition-all duration-relaxed ease-basic motion-reduce:transition-none",
        ah = "workspace" === eT && (H || F ? "min-h-16 justify-center" : "min-h-128")
      return (
        e_[324] !== ag || e_[325] !== ah
          ? ((eb = (0, r.A)("gap-3", ag, ah)), (e_[324] = ag), (e_[325] = ah), (e_[326] = eb))
          : (eb = e_[326]),
        e_[327] !== eX ||
        e_[328] !== ar ||
        e_[329] !== ao ||
        e_[330] !== H ||
        e_[331] !== F ||
        e_[332] !== B ||
        e_[333] !== sZ ||
        e_[334] !== sV ||
        e_[335] !== an ||
        e_[336] !== s0 ||
        e_[337] !== s1 ||
        e_[338] !== ai ||
        e_[339] !== sq ||
        e_[340] !== tp ||
        e_[341] !== al ||
        e_[342] !== ad ||
        e_[343] !== tM ||
        e_[344] !== eP ||
        e_[345] !== sQ ||
        e_[346] !== s2 ||
        e_[347] !== eT ||
        e_[348] !== aa ||
        e_[349] !== sY
          ? ((ex =
              (H && !al && !ad) || F || B
                ? (0, a.jsx)(b.t, {
                    children: (0, a.jsx)(m.W, {
                      layout: "settings-row",
                      children:
                        F || B
                          ? (0, a.jsx)(ei.L, { compact: !0, reduceMotion: eP })
                          : (0, a.jsx)(d.A, {
                              id: "settings.usage.billing.activity.empty",
                              defaultMessage: "No plugin calls or skills used during this period",
                              description:
                                "Empty state when neither plugins nor skills were used during the selected enterprise workspace usage period",
                            }),
                    }),
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      "workspace" === eT || (ar?.total ?? 0) > 0 || sZ || al
                        ? (0, a.jsx)(J.t, {
                            analyticsChart: "tool_activity",
                            consumerAnalytics: eX,
                            data: ar,
                            preservePopulatedCardLayout: al,
                            scope: eT,
                            status: {
                              animateDataChanges: aa(sq, tM?.data.plugins),
                              isError: sZ,
                              isLoading: sV,
                              isUpdating: an,
                              preserveEmptyLayout: tp,
                              reduceMotion: eP,
                              onRetry: () => {
                                sQ()
                              },
                            },
                            title:
                              "workspace" === eT || eX
                                ? (0, a.jsx)(d.A, {
                                    id: "settings.usage.billing.activity.plugins",
                                    defaultMessage: "Plugins called",
                                    description: "Label for Consumer or enterprise plugin invocation activity",
                                  })
                                : (0, a.jsx)(d.A, {
                                    id: "settings.usage.billing.activity.personalPluginCalls",
                                    defaultMessage: "Plugin calls",
                                    description:
                                      "Chart title showing the number of plugins called by the current Consumer or Business workspace member in Codex desktop analytics settings",
                                  }),
                            unit: "calls",
                          })
                        : null,
                      "workspace" === eT || (ao?.total ?? 0) > 0 || s0 || ad
                        ? (0, a.jsx)(J.t, {
                            analyticsChart: "tool_activity",
                            consumerAnalytics: eX,
                            data: ao,
                            preservePopulatedCardLayout: ad,
                            scope: eT,
                            status: {
                              animateDataChanges: aa(sY, tM?.data.skills),
                              isError: s0,
                              isLoading: s1,
                              isUpdating: ai,
                              preserveEmptyLayout: tp,
                              reduceMotion: eP,
                              onRetry: () => {
                                s2()
                              },
                            },
                            title: (0, a.jsx)(d.A, {
                              id: "settings.usage.billing.activity.skills",
                              defaultMessage: "Skills used",
                              description: "Label for enterprise skill invocation activity",
                            }),
                            unit: "uses",
                          })
                        : null,
                    ],
                  })),
            (e_[327] = eX),
            (e_[328] = ar),
            (e_[329] = ao),
            (e_[330] = H),
            (e_[331] = F),
            (e_[332] = B),
            (e_[333] = sZ),
            (e_[334] = sV),
            (e_[335] = an),
            (e_[336] = s0),
            (e_[337] = s1),
            (e_[338] = ai),
            (e_[339] = sq),
            (e_[340] = tp),
            (e_[341] = al),
            (e_[342] = ad),
            (e_[343] = tM),
            (e_[344] = eP),
            (e_[345] = sQ),
            (e_[346] = s2),
            (e_[347] = eT),
            (e_[348] = aa),
            (e_[349] = sY),
            (e_[350] = ex))
          : (ex = e_[350]),
        e_[351] !== eb || e_[352] !== ex
          ? ((ev = (0, a.jsx)(y.X.Content, { className: eb, children: ex })),
            (e_[351] = eb),
            (e_[352] = ex),
            (e_[353] = ev))
          : (ev = e_[353]),
        e_[354] !== O || e_[355] !== ey || e_[356] !== ev
          ? ((ek = (0, a.jsxs)(O, { children: [ey, ev] })),
            (e_[354] = O),
            (e_[355] = ey),
            (e_[356] = ev),
            (e_[357] = ek))
          : (ek = e_[357]),
        e_[358] !== eX || e_[359] !== eL || e_[360] !== eE || e_[361] !== eP || e_[362] !== eT
          ? ((ew =
              "consumer" === eT || "business" === eT
                ? (0, a.jsx)(et, { isPolling: eE, consumerAnalytics: eX, isActive: eL, reduceMotion: eP, scope: eT })
                : null),
            (e_[358] = eX),
            (e_[359] = eL),
            (e_[360] = eE),
            (e_[361] = eP),
            (e_[362] = eT),
            (e_[363] = ew))
          : (ew = e_[363]),
        e_[364] !== X ||
        e_[365] !== Q ||
        e_[366] !== es ||
        e_[367] !== ea ||
        e_[368] !== en ||
        e_[369] !== er ||
        e_[370] !== eo ||
        e_[371] !== el ||
        e_[372] !== ed ||
        e_[373] !== eu ||
        e_[374] !== ec ||
        e_[375] !== eg ||
        e_[376] !== eh ||
        e_[377] !== ek ||
        e_[378] !== ew
          ? ((ej = (0, a.jsxs)("div", {
              className: X,
              children: [Q, es, ea, en, er, eo, el, ed, eu, ec, eg, eh, ek, ew],
            })),
            (e_[364] = X),
            (e_[365] = Q),
            (e_[366] = es),
            (e_[367] = ea),
            (e_[368] = en),
            (e_[369] = er),
            (e_[370] = eo),
            (e_[371] = el),
            (e_[372] = ed),
            (e_[373] = eu),
            (e_[374] = ec),
            (e_[375] = eg),
            (e_[376] = eh),
            (e_[377] = ek),
            (e_[378] = ew),
            (e_[379] = ej))
          : (ej = e_[379]),
        ej
      )
    }
    function tW(e) {
      return { ...e, tools: { ...e.tools, hasManualSelection: !0 } }
    }
    function tz(e) {
      return { ...e, tokens: { ...e.tokens, hasManualSelection: !0 } }
    }
    function t$(e) {
      return null != e.attribution
    }
    function tK(e) {
      return { ...e, tools: { ...e.tools, hasResolved: !0 } }
    }
    function tG(e) {
      let { total: t } = e
      return t > 0
    }
    function tX(e) {
      return { ...e, tokens: { ...e.tokens, hasResolved: !0 } }
    }
    function tq(e) {
      return { ...e, usage: { ...e.usage, hasManualSelection: !0 } }
    }
    function tV(e) {
      return { ...e, usage: { ...e.usage, hasResolved: !0 } }
    }
    function tZ(e) {
      let { total: t } = e
      return t > 0
    }
    function tQ(e) {
      let { total: t } = e
      return t > 0
    }
    function tJ(e) {
      let t,
        s,
        i = (0, n.c)(14),
        {
          isPolling: r,
          actions: o,
          breakdown: l,
          data: d,
          isPersonalUsage: u,
          preservePopulatedCardLayout: c,
          consumerAnalytics: g,
          scope: h,
          status: m,
        } = e,
        p = void 0 !== g && g,
        y = d?.total ?? 0,
        b = "workspace" === h && (d?.total ?? 0) > 0
      i[0] !== r || i[1] !== y || i[2] !== b
        ? ((t = { isPolling: r, credits: y, enabled: b }), (i[0] = r), (i[1] = y), (i[2] = b), (i[3] = t))
        : (t = i[3])
      let { data: x } = (0, f.Q4)(t),
        v = "workspace" !== h || x?.estimated_usage_usd_micros == null ? null : x.estimated_usage_usd_micros / 1e6
      return (
        i[4] !== o ||
        i[5] !== l ||
        i[6] !== p ||
        i[7] !== d ||
        i[8] !== u ||
        i[9] !== c ||
        i[10] !== h ||
        i[11] !== m ||
        i[12] !== v
          ? ((s = (0, a.jsx)(eL, {
              analyticsChart: "usage_history",
              consumerAnalytics: p,
              actions: o,
              breakdown: l,
              data: d,
              estimatedSpendUsd: v,
              isPersonalUsage: u,
              preservePopulatedCardLayout: c,
              scope: h,
              status: m,
            })),
            (i[4] = o),
            (i[5] = l),
            (i[6] = p),
            (i[7] = d),
            (i[8] = u),
            (i[9] = c),
            (i[10] = h),
            (i[11] = m),
            (i[12] = v),
            (i[13] = s))
          : (s = i[13]),
        s
      )
    }
    function tY(e) {
      let t,
        s = (0, n.c)(3),
        { consumerAnalytics: i, scope: r } = e
      if (void 0 !== i && i) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.usage.billing.credits.consumer.history.title",
                defaultMessage: "Credits history",
                description: "Credit history section heading for Consumer analytics",
              })),
              (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      if ("workspace" === r) {
        let e
        return (
          s[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.usage.billing.credits.workspace.history.title",
                defaultMessage: "Credits usage history",
                description: "Title for the credit usage history chart in enterprise workspace usage settings",
              })),
              (s[1] = e))
            : (e = s[1]),
          e
        )
      }
      return (
        s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(d.A, {
              id: "settings.usage.billing.credits.history.title",
              defaultMessage: "Credit usage history",
              description: "Title for the credit usage history chart in usage settings",
            })),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function t1(e) {
      let t,
        s = (0, n.c)(2),
        { children: i } = e
      return (
        s[0] !== i
          ? ((t = (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(u.m, { name: "usage.local-top-chats", children: i }),
                (0, a.jsx)(u.m, { name: "codex.browser.execution", children: i }),
              ],
            })),
            (s[0] = i),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
  },
  HpQY(e, t, s) {
    var a = s("zTeN"),
      n = s("tl5a"),
      i = s("OWtl"),
      r = s("UxLy")
    let o = (0, a.i1)(i.u, (e, { get: t }) => (t(n.$h, e)?.length ?? 0) > 0),
      l = (0, a.i1)(
        i.u,
        ({ hostId: e, conversationId: t }, { get: s }) => {
          let a = [],
            i = new Set([t]),
            r = [t]
          for (let l of r) {
            let d = { hostId: e, threadId: l }
            if (l !== t && !s(o, d)) continue
            let u = s(n.$h, d)
            if (null == u) {
              if (l === t) return null
              continue
            }
            for (let e of u) i.has(e) || (i.add(e), a.push(e), r.push(e))
          }
          return a
        },
        { isEqual: (e, t) => e === t || (null != e && null != t && (0, r.v)(e, t)) },
      )
    s.d(t, {}, { h: l })
  },
  QXR8(e, t, s) {
    var a = s("SRbQ"),
      n = s("CpsU"),
      i = s.n(n),
      r = s("zTeN"),
      o = s("DBCl"),
      l = s("Dgwo"),
      d = s("tl5a"),
      u = s("OWtl"),
      c = s("HpQY"),
      g = s("rvFo"),
      h = s("rivV")
    let m = (0, r.vU)(u.u, (e, { scope: t }) => ({
        queryKey: ["task-usage-members", e.accountId, e.hostId, e.conversationId],
        queryFn: async () => {
          let s = { stack: [], error: void 0, hasError: !1 }
          try {
            let n = (0, a.mS)(
                s,
                (0, l.V)(t, e.hostId).discoverSubagentDescendantSnapshot(e.conversationId, {
                  reconcile: !1,
                  includeArchived: !0,
                }),
                !1,
              ),
              i = await n
            if (!i.isComplete) return null
            return {
              ids: Array.from(new Set([e.conversationId, ...i.descendantThreads.map(({ id: e }) => (0, o.JXB)(e))])),
              observed: e.knownDescendants,
            }
          } catch (e) {
            ;((s.error = e), (s.hasError = !0))
          } finally {
            ;(0, a.hk)(s)
          }
        },
        retry: !1,
        staleTime: (t) => (b(t.state.data, e) ? g.D.TEN_MINUTES : 0),
        gcTime: g.D.TEN_MINUTES,
      })),
      p = (0, r.vU)(u.u, ({ accountId: e, conversationIds: t, hostId: s }, { get: a, scope: n }) => {
        let r = t.map((t) => {
          let n = s ?? a(d.sb, t) ?? a(d.qX, t)
          return {
            accountId: e,
            conversationId: t,
            hostId: n,
            knownDescendants: a(c.h, { hostId: n, conversationId: t }) ?? [],
          }
        })
        return {
          queryKey: ["task-usage-groups", r],
          enabled: null != e && r.length > 0,
          queryFn: async ({ signal: e }) => {
            let t = []
            for (let s of i()(r, 2)) {
              e.throwIfAborted()
              let a = await Promise.all(
                s.map(async (e) => {
                  let t = await n.query.getOrFetch(m, e).catch(() => null)
                  return b(t, e) ? t.ids : null
                }),
              )
              t.push(...a)
            }
            return t
          },
          gcTime: 0,
          staleTime: g.D.ONE_MINUTE,
          refetchInterval: (e) => (e.state.data?.includes(null) ? g.D.ONE_MINUTE : g.D.TEN_MINUTES),
          retry: !1,
        }
      }),
      f = (0, r.i1)(u.u, (e, { get: t }) => {
        let { groups: s, usage: a } = y(t, e)
        return {
          data: a?.data,
          isLoading: !!(s?.isLoading || a?.isLoading),
          isError: !!(s?.isError || a?.isError),
          isSuccess: a?.isSuccess ?? !1,
        }
      })
    function y(e, { accountId: t, balanceUnit: s, conversationIds: a, hostId: n, includeSubagents: i }) {
      let r = i ? e(p, { accountId: t, conversationIds: a, hostId: n }) : null,
        o = null == r ? void 0 : (r.data?.filter((e) => null != e) ?? []),
        l = null == o ? a : Array.from(new Set(o.flat()))
      return {
        groups: r,
        usage: 0 === l.length ? null : e(h.yy, { accountId: t, balanceUnit: s, conversationIds: l, taskThreadIds: o }),
      }
    }
    function b(e, t) {
      if (null == e) return !1
      let s = new Set([...e.ids, ...e.observed])
      return t.knownDescendants.every((e) => s.has(e))
    }
    s.d(
      t,
      {},
      {
        Q: async function (e, t, s) {
          let { groups: a, usage: n } = y(e.get, t)
          await Promise.all([a?.isError || a?.data?.includes(null) ? a.refetch() : void 0, n?.refetch(s)])
        },
        h: f,
      },
    )
  },
  pbco(e, t, s) {
    var a = s("ABep"),
      n = s("QosV"),
      i = s("slpy"),
      r = s("FQih"),
      o = s("zd8w"),
      l = s("Qgfj"),
      d = s("oyxz"),
      u = s("Wf1j"),
      c = s("kg1F"),
      g = s("O5Ra"),
      h = s("o6lh"),
      m = s("rivV")
    function p(e) {
      let t,
        s,
        r,
        l,
        c,
        p,
        b,
        v,
        k,
        w = (0, n.c)(37),
        { dimension: j, usage: _ } = e,
        M = (0, u.A)(),
        C = (0, o.useId)()
      if (w[0] !== j || w[1] !== M || w[2] !== C || w[3] !== _.balanceUnit || w[4] !== _.groups) {
        let e,
          n,
          o,
          u,
          v = (0, m.Xz)(_.groups, j, _.balanceUnit),
          k = v.reduce(f, 0),
          A = k > 0 ? v : [],
          S = (e) => Math.round((e / k) * 100)
        ;((r = "flex flex-col gap-1.5"),
          (l = C),
          (c = "group"),
          w[12] !== j
            ? ((e =
                "model" === j
                  ? (0, a.jsx)(d.A, {
                      id: "usageCenter.thread.breakdown.model",
                      defaultMessage: "Models",
                      description: "Label for model usage in the current chat breakdown",
                    })
                  : "reasoning_effort" === j
                    ? (0, a.jsx)(d.A, {
                        id: "usageCenter.thread.breakdown.reasoning",
                        defaultMessage: "Reasoning",
                        description: "Label for reasoning effort usage in the current chat breakdown",
                      })
                    : (0, a.jsx)(d.A, {
                        id: "usageCenter.thread.breakdown.speed",
                        defaultMessage: "Speed",
                        description: "Label for response speed usage in the current chat breakdown",
                      })),
              (w[12] = j),
              (w[13] = e))
            : (e = w[13]),
          w[14] !== C || w[15] !== e
            ? ((n = (0, a.jsx)("span", { id: C, className: "text-secondary", children: e })),
              (w[14] = C),
              (w[15] = e),
              (w[16] = n))
            : (n = w[16]))
        let I =
          0 === A.length
            ? (0, a.jsx)("span", {
                className: "text-tertiary",
                children: (0, a.jsx)(d.A, {
                  id: "usageCenter.thread.breakdown.noData",
                  defaultMessage: "Not available",
                  description: "Shown when one current-chat usage breakdown category has no recorded data",
                }),
              })
            : null
        ;(w[17] !== I || w[18] !== n
          ? ((p = (0, a.jsxs)("div", { className: "flex items-center justify-between gap-2", children: [n, I] })),
            (w[17] = I),
            (w[18] = n),
            (w[19] = p))
          : (p = w[19]),
          w[20] !== j || w[21] !== S
            ? ((o = (e, t) => {
                let s = S(e.amountMicros)
                return (0, a.jsx)(
                  i.m,
                  {
                    openDelay: 0,
                    content: (0, a.jsx)(y, { dimension: j, entry: e, percentage: s }),
                    children: (0, a.jsx)("button", {
                      className: "h-full min-w-1 basis-0 cursor-interaction",
                      "aria-hidden": !0,
                      style: { backgroundColor: h.Kj[t % h.Kj.length], flexGrow: e.amountMicros },
                      tabIndex: -1,
                      type: "button",
                    }),
                  },
                  e.value ?? "unknown",
                )
              }),
              (w[20] = j),
              (w[21] = S),
              (w[22] = o))
            : (o = w[22]),
          (b = (0, a.jsx)("div", {
            className: "flex h-2 overflow-hidden rounded-full bg-text/10",
            children: A.map(o),
          })),
          (t = "flex flex-wrap gap-x-4 gap-y-1.5 text-secondary"),
          w[23] !== j || w[24] !== S || w[25] !== M
            ? ((u = (e, t) =>
                (0, a.jsx)(
                  i.m,
                  {
                    openDelay: 0,
                    content: (0, a.jsx)(y, { dimension: j, entry: e, percentage: S(e.amountMicros) }),
                    children: (0, a.jsxs)("button", {
                      className:
                        "inline-flex cursor-interaction items-center gap-1.5 rounded-sm py-px focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                      "aria-label":
                        null == e.value
                          ? M.formatMessage(
                              {
                                id: "usageCenter.thread.breakdown.segment.unknownAriaLabel",
                                defaultMessage: "Other: {percentage}% of usage",
                                description:
                                  "Accessible label for an unknown segment of the thread usage breakdown chart",
                              },
                              { percentage: S(e.amountMicros) },
                            )
                          : M.formatMessage(
                              {
                                id: "usageCenter.thread.breakdown.segment.localizedAriaLabel",
                                defaultMessage:
                                  "{dimension, select, speed {{value, select, fast {Fast mode} ultrafast {Ultrafast} standard {Standard} other {{value}}}} reasoning_effort {{value, select, none {None} minimal {Minimal} low {Light} medium {Medium} high {High} xhigh {Extra High} max {Max} ultra {Ultra} other {{value}}}} other {{value}}}: {percentage}% of usage",
                                description: "Accessible label for one segment of the thread usage breakdown chart",
                              },
                              {
                                dimension: j,
                                value: "model" === j ? (0, g.K)(e.value) : e.value,
                                percentage: S(e.amountMicros),
                              },
                            ),
                      type: "button",
                      children: [
                        (0, a.jsx)("span", {
                          className: "size-2.5 shrink-0 rounded-full",
                          style: { backgroundColor: h.Kj[t % h.Kj.length] },
                        }),
                        (0, a.jsx)(x, { dimension: j, value: e.value }),
                      ],
                    }),
                  },
                  e.value ?? "unknown",
                )),
              (w[23] = j),
              (w[24] = S),
              (w[25] = M),
              (w[26] = u))
            : (u = w[26]),
          (s = A.map(u)),
          (w[0] = j),
          (w[1] = M),
          (w[2] = C),
          (w[3] = _.balanceUnit),
          (w[4] = _.groups),
          (w[5] = t),
          (w[6] = s),
          (w[7] = r),
          (w[8] = l),
          (w[9] = c),
          (w[10] = p),
          (w[11] = b))
      } else ((t = w[5]), (s = w[6]), (r = w[7]), (l = w[8]), (c = w[9]), (p = w[10]), (b = w[11]))
      return (
        w[27] !== t || w[28] !== s
          ? ((v = (0, a.jsx)("div", { className: t, children: s })), (w[27] = t), (w[28] = s), (w[29] = v))
          : (v = w[29]),
        w[30] !== r || w[31] !== l || w[32] !== c || w[33] !== p || w[34] !== b || w[35] !== v
          ? ((k = (0, a.jsxs)("div", { className: r, "aria-labelledby": l, role: c, children: [p, b, v] })),
            (w[30] = r),
            (w[31] = l),
            (w[32] = c),
            (w[33] = p),
            (w[34] = b),
            (w[35] = v),
            (w[36] = k))
          : (k = w[36]),
        k
      )
    }
    function f(e, t) {
      return e + t.amountMicros
    }
    function y(e) {
      let t,
        s,
        i,
        r,
        o,
        u = (0, n.c)(18),
        { dimension: c, entry: g, percentage: h } = e
      return (
        u[0] !== c || u[1] !== g.value || u[2] !== h
          ? ((t = (0, a.jsx)("span", {
              className: "font-medium",
              children: (0, a.jsx)(b, { dimension: c, percentage: h, value: g.value }),
            })),
            (u[0] = c),
            (u[1] = g.value),
            (u[2] = h),
            (u[3] = t))
          : (t = u[3]),
        u[4] !== c || u[5] !== g.netNewInputTokens
          ? ((s =
              "model" === c && null != g.netNewInputTokens
                ? (0, a.jsx)("span", {
                    children: (0, a.jsx)(d.A, {
                      id: "usageCenter.thread.breakdown.tooltip.inputTokens",
                      defaultMessage: "Uncached input tokens: {count}",
                      description: "Uncached input token count for a model usage segment",
                      values: { count: (0, a.jsx)(l.Gr, { value: g.netNewInputTokens }) },
                    }),
                  })
                : null),
            (u[4] = c),
            (u[5] = g.netNewInputTokens),
            (u[6] = s))
          : (s = u[6]),
        u[7] !== c || u[8] !== g.cachedInputTokens
          ? ((i =
              "model" === c && null != g.cachedInputTokens
                ? (0, a.jsx)("span", {
                    children: (0, a.jsx)(d.A, {
                      id: "usageCenter.thread.breakdown.tooltip.cachedInputTokens",
                      defaultMessage: "Cached input tokens: {count}",
                      description: "Cached input token count for a model usage segment",
                      values: { count: (0, a.jsx)(l.Gr, { value: g.cachedInputTokens }) },
                    }),
                  })
                : null),
            (u[7] = c),
            (u[8] = g.cachedInputTokens),
            (u[9] = i))
          : (i = u[9]),
        u[10] !== c || u[11] !== g.outputTokens
          ? ((r =
              "model" === c && null != g.outputTokens
                ? (0, a.jsx)("span", {
                    children: (0, a.jsx)(d.A, {
                      id: "usageCenter.thread.breakdown.tooltip.outputTokens",
                      defaultMessage: "Output tokens: {count}",
                      description: "Output token count for a model usage segment",
                      values: { count: (0, a.jsx)(l.Gr, { value: g.outputTokens }) },
                    }),
                  })
                : null),
            (u[10] = c),
            (u[11] = g.outputTokens),
            (u[12] = r))
          : (r = u[12]),
        u[13] !== t || u[14] !== s || u[15] !== i || u[16] !== r
          ? ((o = (0, a.jsxs)("div", { className: "flex flex-col gap-0.5 text-xs", children: [t, s, i, r] })),
            (u[13] = t),
            (u[14] = s),
            (u[15] = i),
            (u[16] = r),
            (u[17] = o))
          : (o = u[17]),
        o
      )
    }
    function b(e) {
      let t,
        s,
        i = (0, n.c)(13),
        { dimension: r, percentage: o, value: l } = e
      if (null == l) {
        let e
        return (
          i[0] !== o
            ? ((e = (0, a.jsx)(d.A, {
                id: "usageCenter.thread.breakdown.tooltip.otherPercentage",
                defaultMessage: "Other: {percentage}%",
                description: "Percentage attributed to an unknown current-chat usage dimension",
                values: { percentage: o },
              })),
              (i[0] = o),
              (i[1] = e))
            : (e = i[1]),
          e
        )
      }
      if ("speed" === r) {
        let e
        return (
          i[2] !== o || i[3] !== l
            ? ((e = (0, a.jsx)(d.A, {
                id: "usageCenter.thread.breakdown.tooltip.speedPercentage",
                defaultMessage:
                  "{speed, select, fast {Fast mode} ultrafast {Ultrafast} standard {Standard} other {{speed}}}: {percentage}%",
                description: "Response speed and its percentage of the current chat's usage",
                values: { percentage: o, speed: l },
              })),
              (i[2] = o),
              (i[3] = l),
              (i[4] = e))
            : (e = i[4]),
          e
        )
      }
      if ("reasoning_effort" === r) {
        let e
        return (
          i[5] !== o || i[6] !== l
            ? ((e = (0, a.jsx)(d.A, {
                id: "usageCenter.thread.breakdown.tooltip.reasoningPercentage",
                defaultMessage:
                  "{effort, select, none {None} minimal {Minimal} low {Light} medium {Medium} high {High} xhigh {Extra High} max {Max} ultra {Ultra} other {{effort}}}: {percentage}%",
                description: "Reasoning effort and its percentage of the current chat's usage",
                values: { effort: l, percentage: o },
              })),
              (i[5] = o),
              (i[6] = l),
              (i[7] = e))
            : (e = i[7]),
          e
        )
      }
      return (
        i[8] !== l ? ((t = (0, g.K)(l)), (i[8] = l), (i[9] = t)) : (t = i[9]),
        i[10] !== o || i[11] !== t
          ? ((s = (0, a.jsx)(d.A, {
              id: "usageCenter.thread.breakdown.tooltip.modelPercentage",
              defaultMessage: "{model}: {percentage}%",
              description: "Model and its percentage of the current chat's usage",
              values: { model: t, percentage: o },
            })),
            (i[10] = o),
            (i[11] = t),
            (i[12] = s))
          : (s = i[12]),
        s
      )
    }
    function x(e) {
      let t,
        s = (0, n.c)(12),
        { dimension: i, value: o } = e
      if (null == o) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "usageCenter.thread.breakdown.other",
                defaultMessage: "Other",
                description: "Fallback label for unknown current-chat usage dimensions",
              })),
              (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      if ("model" === i) {
        let e, t
        return (
          s[1] !== o ? ((e = (0, g.K)(o)), (s[1] = o), (s[2] = e)) : (e = s[2]),
          s[3] !== e ? ((t = (0, a.jsx)(a.Fragment, { children: e })), (s[3] = e), (s[4] = t)) : (t = s[4]),
          t
        )
      }
      if ("speed" === i)
        switch (o) {
          case "fast": {
            let e
            return (
              s[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(d.A, {
                    id: "usageCenter.thread.breakdown.fast",
                    defaultMessage: "Fast mode",
                    description: "Label for fast-mode speed in the current-chat usage breakdown",
                  })),
                  (s[5] = e))
                : (e = s[5]),
              e
            )
          }
          case "ultrafast": {
            let e
            return (
              s[6] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(d.A, {
                    id: "usageCenter.thread.breakdown.ultrafast",
                    defaultMessage: "Ultrafast",
                    description: "Label for ultrafast speed in the current-chat usage breakdown",
                  })),
                  (s[6] = e))
                : (e = s[6]),
              e
            )
          }
          case "standard": {
            let e
            return (
              s[7] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(d.A, {
                    id: "usageCenter.thread.breakdown.standard",
                    defaultMessage: "Standard",
                    description: "Label for standard speed in the current-chat usage breakdown",
                  })),
                  (s[7] = e))
                : (e = s[7]),
              e
            )
          }
          default: {
            let e
            return (
              s[8] !== o ? ((e = (0, a.jsx)(a.Fragment, { children: o })), (s[8] = o), (s[9] = e)) : (e = s[9]),
              e
            )
          }
        }
      return (
        s[10] !== o
          ? ((t = (0, r.eE)(o) ? (0, a.jsx)(c.w, { effort: o }) : (0, a.jsx)(a.Fragment, { children: o })),
            (s[10] = o),
            (s[11] = t))
          : (t = s[11]),
        t
      )
    }
    s.d(
      t,
      {},
      {
        h: x,
        x: function (e) {
          let t,
            s,
            i,
            r,
            o,
            u,
            c,
            g,
            h,
            m = (0, n.c)(30),
            { usage: f, title: y, showCostUsd: b } = e
          if ("usd" === f.balanceUnit) {
            let e
            ;(m[0] !== f.costUsd
              ? ((e =
                  null == f.costUsd
                    ? null
                    : (0, a.jsx)(l.Gr, {
                        value: f.costUsd,
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0.01 > Math.abs(f.costUsd) ? 6 : 2,
                      })),
                (m[0] = f.costUsd),
                (m[1] = e))
              : (e = m[1]),
              (t = e))
          } else if ((void 0 === b || b) && null != f.costUsd) {
            let e, s, n
            m[2] !== f.creditsUsed
              ? ((e = (0, a.jsx)(l.Gr, { value: f.creditsUsed, notation: "compact", maximumFractionDigits: 1 })),
                (m[2] = f.creditsUsed),
                (m[3] = e))
              : (e = m[3])
            let i = f.costUsd < 0.01 ? 4 : 2
            ;(m[4] !== i || m[5] !== f.costUsd
              ? ((s = (0, a.jsx)(l.Gr, {
                  value: f.costUsd,
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: i,
                })),
                (m[4] = i),
                (m[5] = f.costUsd),
                (m[6] = s))
              : (s = m[6]),
              m[7] !== e || m[8] !== s
                ? ((n = (0, a.jsx)(d.A, {
                    id: "usageCenter.thread.breakdown.total",
                    defaultMessage: "{creditCount} credits · {cost}",
                    description: "Total estimated credits and dollar cost for the current chat",
                    values: { creditCount: e, cost: s },
                  })),
                  (m[7] = e),
                  (m[8] = s),
                  (m[9] = n))
                : (n = m[9]),
              (t = n))
          } else {
            let e
            ;(m[10] !== f.creditsUsed
              ? ((e = (0, a.jsx)(d.A, {
                  id: "usageCenter.thread.breakdown.totalCreditsOnly",
                  defaultMessage: "{creditCount} credits",
                  description: "Total credits used by a task when dollar amounts are unavailable",
                  values: {
                    creditCount: (0, a.jsx)(l.Gr, {
                      value: f.creditsUsed,
                      notation: "compact",
                      maximumFractionDigits: 1,
                    }),
                  },
                })),
                (m[10] = f.creditsUsed),
                (m[11] = e))
              : (e = m[11]),
              (t = e))
          }
          return (
            m[12] !== y
              ? ((s =
                  y ??
                  (0, a.jsx)(d.A, {
                    id: "usageCenter.thread.breakdown.title",
                    defaultMessage: "Usage in this chat",
                    description: "Title for the current chat's detailed usage breakdown",
                  })),
                (m[12] = y),
                (m[13] = s))
              : (s = m[13]),
            m[14] !== s
              ? ((i = (0, a.jsx)("span", { className: "min-w-0 truncate font-semibold text-default", children: s })),
                (m[14] = s),
                (m[15] = i))
              : (i = m[15]),
            m[16] !== t
              ? ((r = (0, a.jsx)("span", { className: "shrink-0 text-secondary tabular-nums", children: t })),
                (m[16] = t),
                (m[17] = r))
              : (r = m[17]),
            m[18] !== i || m[19] !== r
              ? ((o = (0, a.jsxs)("div", { className: "flex items-center justify-between gap-3", children: [i, r] })),
                (m[18] = i),
                (m[19] = r),
                (m[20] = o))
              : (o = m[20]),
            m[21] !== f
              ? ((u = (0, a.jsx)(p, { dimension: "model", usage: f })),
                (c = (0, a.jsx)(p, { dimension: "reasoning_effort", usage: f })),
                (g = (0, a.jsx)(p, { dimension: "speed", usage: f })),
                (m[21] = f),
                (m[22] = u),
                (m[23] = c),
                (m[24] = g))
              : ((u = m[22]), (c = m[23]), (g = m[24])),
            m[25] !== o || m[26] !== u || m[27] !== c || m[28] !== g
              ? ((h = (0, a.jsxs)("div", {
                  className: "flex min-w-0 flex-1 flex-col gap-3 px-3 py-2 text-xs leading-4 select-none",
                  children: [o, u, c, g],
                })),
                (m[25] = o),
                (m[26] = u),
                (m[27] = c),
                (m[28] = g),
                (m[29] = h))
              : (h = m[29]),
            h
          )
        },
      },
    )
  },
}
//# sourceMappingURL=333192.5177e7c555.js.map
