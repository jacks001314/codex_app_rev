export const __rspack_esm_ids = [556836]
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
  uF4h(e, t, s) {
    s.d(t, { e: () => tT })
    var a = s("ABep"),
      n = s("QosV"),
      i = s("h818"),
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
      _ = s("ygO2"),
      M = s("yf2D"),
      C = s("CqQF"),
      A = s("aAWW"),
      S = s("I7Ou"),
      I = s("AWNZ"),
      U = s("bZug"),
      L = s("kfGJ"),
      N = s("WRqP"),
      T = s("rivV"),
      D = s("Bc5r"),
      E = s("Dgwo"),
      P = s("l00C"),
      R = s("OWtl"),
      H = s("rvFo")
    let O = (0, v.vU)(R.u, ({ accountId: e, userId: t }, { get: s, scope: a }) => ({
      enabled: null != s(P.u$, L.fI),
      queryKey: ["top-consuming-chats", e, t, L.fI],
      queryFn: async ({ signal: e }) => {
        let t = (Date.now() - 2592e6) / 1e3,
          s = [],
          n = new Set(),
          i = null
        do {
          e.throwIfAborted()
          let r = await (0, E.V)(a, L.fI).sendRequest(
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
    function F(e) {
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
        x,
        j,
        M,
        C,
        A,
        L = (0, n.c)(48),
        { accountId: N, isUsdWorkspace: D, isPolling: E, userId: P } = e,
        R = void 0 !== D && D,
        H = void 0 === E || E,
        [B, F] = (0, o.useState)(!1),
        [K, X] = (0, o.useState)(!1)
      L[0] !== N || L[1] !== P ? ((t = { accountId: N, userId: P }), (L[0] = N), (L[1] = P), (L[2] = t)) : (t = L[2])
      let q = H || !B
      L[3] !== q ? ((s = { enabled: q }), (L[3] = q), (L[4] = s)) : (s = L[4])
      let { data: Z, isError: V, isLoading: Q, isSuccess: J, refetch: Y } = (0, v._U)(O, t, s),
        ee = R ? "usd" : "credit"
      ;(L[5] !== Z ? ((i = Z?.map(z) ?? []), (L[5] = Z), (L[6] = i)) : (i = L[6]),
        L[7] !== N || L[8] !== ee || L[9] !== i
          ? ((r = { accountId: N, balanceUnit: ee, conversationIds: i }),
            (L[7] = N),
            (L[8] = ee),
            (L[9] = i),
            (L[10] = r))
          : (r = L[10]))
      let et = H || !K
      L[11] !== et ? ((l = { enabled: et }), (L[11] = et), (L[12] = l)) : (l = L[12])
      let { data: es, isError: ea, isLoading: en, isSuccess: ei, refetch: er } = (0, v._U)(T.yy, r, l)
      ;(!B && (J || V) && F(!0), !K && (V || (J && (ei || ea))) && X(!0))
      let [eo, el] = (0, o.useState)(!1)
      if (
        L[13] !== V ||
        L[14] !== Q ||
        L[15] !== ea ||
        L[16] !== en ||
        L[17] !== R ||
        L[18] !== Z ||
        L[19] !== Y ||
        L[20] !== er ||
        L[21] !== eo ||
        L[22] !== es
      ) {
        let e
        x = Z?.flatMap((e) => {
          let t = es?.get(e.id)
          return null == t ? [] : [{ conversationId: (0, k.JXB)(e.id), title: (0, w.Vm)(e, w.wp), usage: t }]
        }).sort((e, t) =>
          R ? (t.usage.costUsd ?? 0) - (e.usage.costUsd ?? 0) : t.usage.creditsUsed - e.usage.creditsUsed,
        )
        let t = Q || (null != Z && Z.length > 0 && en),
          s = V || ea || (null != Z && Z.length > 0 && (null == es || x?.length === 0)),
          n = R || (x?.some($) ?? !1)
        ;((g = y.X),
          L[30] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.usage.topConsumingChats.title",
                defaultMessage: "Top chats",
                description: "Title for the highest-usage Work and Codex chats",
              })),
              (L[30] = e))
            : (e = L[30]),
          L[31] !== R
            ? ((f = (0, a.jsx)(y.X.Header, {
                title: e,
                subtitle: R
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
              (L[31] = R),
              (L[32] = f))
            : (f = L[32]),
          (c = y.X.Content),
          (p = "gap-3"),
          (u = b.t),
          (h = t
            ? (0, a.jsx)(S.u, {
                children: (0, a.jsx)(d.A, {
                  id: "settings.usage.topConsumingChats.loading",
                  defaultMessage: "Loading chat usage…",
                  description: "Loading state while fetching the highest-credit Codex chats",
                }),
              })
            : s
              ? (0, a.jsx)(I.ic, {
                  label: (0, a.jsx)(d.A, {
                    id: "settings.usage.topConsumingChats.error",
                    defaultMessage: "Could not load chat usage",
                    description: "Error state when recent Codex chat usage cannot be loaded",
                  }),
                  control: (0, a.jsx)(_.$, {
                    color: "secondary",
                    size: "toolbar",
                    onClick: () => {
                      V ? Y() : er()
                    },
                    children: (0, a.jsx)(d.A, {
                      id: "settings.usage.topConsumingChats.retry",
                      defaultMessage: "Retry",
                      description: "Retry button for loading top consuming Codex chats",
                    }),
                  }),
                })
              : null == x || 0 === x.length
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
                    className: `${U.r} pb-2`,
                    children: [
                      (0, a.jsxs)("div", {
                        className:
                          "grid h-[37px] grid-cols-[minmax(0,1fr)_6rem_6rem] items-center gap-2 px-4 text-xs leading-4 font-medium text-secondary after:hidden",
                        children: [
                          (0, a.jsx)("span", {
                            className: n && !R ? void 0 : "col-span-2",
                            children: (0, a.jsx)(d.A, {
                              id: "settings.usage.topConsumingChats.chatColumn",
                              defaultMessage: "Chat",
                              description: "Column heading for the title of a high-usage Codex chat",
                            }),
                          }),
                          n
                            ? (0, a.jsx)("span", {
                                className: "text-end",
                                children: R
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
                          R
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
                      x
                        .slice(0, eo ? void 0 : 5)
                        .map((e) =>
                          (0, a.jsx)(G, { isUsdWorkspace: R, showEstimatedSpend: n, task: e }, e.conversationId),
                        ),
                    ],
                  })),
          (L[13] = V),
          (L[14] = Q),
          (L[15] = ea),
          (L[16] = en),
          (L[17] = R),
          (L[18] = Z),
          (L[19] = Y),
          (L[20] = er),
          (L[21] = eo),
          (L[22] = es),
          (L[23] = u),
          (L[24] = c),
          (L[25] = g),
          (L[26] = h),
          (L[27] = p),
          (L[28] = f),
          (L[29] = x))
      } else ((u = L[23]), (c = L[24]), (g = L[25]), (h = L[26]), (p = L[27]), (f = L[28]), (x = L[29]))
      return (
        L[33] !== u || L[34] !== h
          ? ((j = (0, a.jsx)(u, { children: h })), (L[33] = u), (L[34] = h), (L[35] = j))
          : (j = L[35]),
        L[36] !== eo || L[37] !== x
          ? ((M =
              null != x && x.length > 5
                ? (0, a.jsx)(_.$, {
                    color: "secondary",
                    className: "self-start",
                    size: "compact",
                    onClick: () => {
                      el(W)
                    },
                    children: eo
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
            (L[36] = eo),
            (L[37] = x),
            (L[38] = M))
          : (M = L[38]),
        L[39] !== c || L[40] !== p || L[41] !== j || L[42] !== M
          ? ((C = (0, a.jsxs)(c, { className: p, children: [j, M] })),
            (L[39] = c),
            (L[40] = p),
            (L[41] = j),
            (L[42] = M),
            (L[43] = C))
          : (C = L[43]),
        L[44] !== g || L[45] !== f || L[46] !== C
          ? ((A = (0, a.jsxs)(g, { children: [f, C] })), (L[44] = g), (L[45] = f), (L[46] = C), (L[47] = A))
          : (A = L[47]),
        A
      )
    }
    function W(e) {
      return !e
    }
    function $(e) {
      let { usage: t } = e
      return null != t.costUsd
    }
    function z(e) {
      let { id: t } = e
      return (0, k.JXB)(t)
    }
    function G(e) {
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
        S = (0, D.M0)()
      x[0] !== _.conversationId
        ? ((t = { hostId: L.fI, threadId: _.conversationId }), (x[0] = _.conversationId), (x[1] = t))
        : (t = x[1])
      let I = (0, v._U)(N.e, t),
        U = (0, o.useRef)(null),
        T = (0, o.useRef)(null),
        E = (0, o.useRef)(!1),
        P = I ?? _.title
      x[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = () => Array.from(T.current?.querySelectorAll('button:not([disabled]):not([tabindex="-1"])') ?? [])),
          (x[2] = s))
        : (s = x[2])
      let R = s
      ;(x[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (e) => {
            E.current = e
          }),
          (x[3] = i))
        : (i = x[3]),
        x[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (e) => {
              if ("Escape" === e.key) {
                ;(e.preventDefault(), U.current?.focus(), (0, A.e)())
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
                ;(e.preventDefault(), (0, A.e)(), t.focus())
              }
            }),
            (x[4] = r))
          : (r = x[4]),
        x[5] !== _.usage || x[6] !== P
          ? ((l = (0, a.jsx)("div", {
              ref: T,
              className: "w-96 max-w-full",
              role: "presentation",
              onKeyDown: r,
              children: (0, a.jsx)(B.x, { title: P, usage: _.usage }),
            })),
            (x[5] = _.usage),
            (x[6] = P),
            (x[7] = l))
          : (l = x[7]),
        x[8] !== S || x[9] !== _.conversationId
          ? ((u = (e) => {
              ;(e.preventDefault(), (0, A.e)(), S(_.conversationId))
            }),
            (x[8] = S),
            (x[9] = _.conversationId),
            (x[10] = u))
          : (u = x[10]),
        x[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (e) => {
              if ("Escape" === e.key && E.current) {
                ;(e.preventDefault(), (0, A.e)())
                return
              }
              if ("Tab" !== e.key || e.shiftKey) return
              let t = R()[0]
              null != t && (e.preventDefault(), t.focus())
            }),
            (x[11] = c))
          : (c = x[11]))
      let H = w && !k ? "flex min-w-0" : "col-span-2 flex min-w-0"
      return (
        x[12] !== P
          ? ((g =
              P ??
              (0, a.jsx)(d.A, {
                id: "settings.usage.topConsumingChats.untitled",
                defaultMessage: "Untitled chat",
                description: "Fallback label for a Codex chat that does not have a title",
              })),
            (x[12] = P),
            (x[13] = g))
          : (g = x[13]),
        x[14] !== g
          ? ((h = (0, a.jsx)(M.E, {
              className: "min-w-0 flex-1 underline underline-offset-2",
              animateOnGroupHover: !0,
              children: g,
            })),
            (x[14] = g),
            (x[15] = h))
          : (h = x[15]),
        x[16] !== h || x[17] !== H
          ? ((m = (0, a.jsx)("span", { className: H, children: h })), (x[16] = h), (x[17] = H), (x[18] = m))
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
                "group grid h-[35px] w-full cursor-interaction grid-cols-[minmax(0,1fr)_6rem_6rem] items-center gap-2 px-4 text-start text-xs leading-4 select-none hover:bg-primary-ghost-hover not-last:hover:after:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring has-[+button:hover]:after:opacity-0",
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
          ? ((b = (0, a.jsx)(C.m, {
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
    function K(e, t) {
      return t.formatDate(new Date(e), {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZone: "UTC",
        timeZoneName: "short",
      })
    }
    var X = s("U4pl")
    function q({ current: e, days: t, enabled: s, fallback: a = [], hasManualSelection: n, hasResolved: i }) {
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
    var Z = s("T0Rc"),
      V = s("xBT4"),
      Q = s("qWrV"),
      J = s("RQya")
    function Y(e) {
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
        L,
        N,
        T,
        D,
        E = (0, n.c)(107),
        { isActive: P, isPolling: R, reduceMotion: H, consumerAnalytics: O, scope: B } = e,
        F = void 0 === R || R,
        W = void 0 !== O && O,
        $ = (0, o.use)(Q.Wj)?.scope ?? null,
        z = (0, c.As)(),
        G = (0, l.A)(),
        [K, Y] = (0, o.useState)(7),
        [ea, en] = (0, o.useState)("model"),
        [ei, er] = (0, o.useState)(null),
        eo = z.accountId ?? null,
        el = z.userId ?? null
      E[0] !== B || E[1] !== eo || E[2] !== el
        ? ((t = { accountId: eo, userId: el, scope: B, hasManualSelection: !1, hasResolved: !1 }),
          (E[0] = B),
          (E[1] = eo),
          (E[2] = el),
          (E[3] = t))
        : (t = E[3])
      let [ed, eu] = (0, o.useState)(t),
        ec = ed.accountId === (z.accountId ?? null) && ed.userId === (z.userId ?? null) && ed.scope === B
      ec ||
        (eu({
          accountId: z.accountId ?? null,
          userId: z.userId ?? null,
          scope: B,
          hasManualSelection: !1,
          hasResolved: !1,
        }),
        Y(7),
        er(null))
      let [eg, eh] = (0, o.useState)(!1)
      E[4] !== z || E[5] !== K || E[6] !== P || E[7] !== F || E[8] !== B
        ? ((s = (0, f.F7)({ isPolling: F, auth: z, days: K, enabled: P, scope: B })),
          (E[4] = z),
          (E[5] = K),
          (E[6] = P),
          (E[7] = F),
          (E[8] = B),
          (E[9] = s))
        : (s = E[9])
      let em = (0, Z.I)(s),
        { data: ep, isLoading: ef, isError: ey, refetch: eb } = em
      E[10] !== z || E[11] !== K || E[12] !== P || E[13] !== F || E[14] !== B
        ? ((i = (0, f.my)({ isPolling: F, auth: z, days: K, enabled: P, scope: B })),
          (E[10] = z),
          (E[11] = K),
          (E[12] = P),
          (E[13] = F),
          (E[14] = B),
          (E[15] = i))
        : (i = E[15])
      let ex = (0, Z.I)(i),
        { data: ev, isLoading: ek, isError: ew, refetch: ej } = ex,
        e_ = {
          current: [
            { total: ep?.byModel.total, isLoading: ef, isError: ey },
            ...("business" === B ? [{ total: ev?.total, isLoading: ek, isError: ew }] : []),
          ],
          days: K,
          enabled: P && ec,
          ...ed,
        },
        { shouldProbe: eM } = q(e_),
        {
          data: eC,
          isLoading: eA,
          isError: eS,
        } = (0, Z.I)((0, f.F7)({ isPolling: F, auth: z, days: 30, enabled: eM, scope: B })),
        eI = eM && "business" === B && !eA && !eS && eC?.byModel.total === 0,
        {
          data: eU,
          isLoading: eL,
          isError: eN,
        } = (0, Z.I)((0, f.my)({ isPolling: F, auth: z, days: 30, enabled: eI, scope: B })),
        eT = q({
          ...e_,
          fallback: [
            { total: eC?.byModel.total, isLoading: eA, isError: eS },
            ...(eI ? [{ total: eU?.total, isLoading: eL, isError: eN }] : []),
          ],
        }),
        eD = (eM && !eT.shouldResolve) || ("business" === B && ek && !ey)
      eT.shouldResolve && (eu(et), eT.shouldSelectThirtyDays && Y(30))
      let [eE, eP] = (0, o.useState)(null),
        eR = eE?.accountId === (z.accountId ?? null) && eE.userId === (z.userId ?? null),
        eH = ef && !ey && null == ep && eR && null != eE.data.turns,
        eO = ek && !ew && null == ev && eR && null != eE.data.linesOfCode,
        eB = eH ? eE.data.turns : ep,
        eF = eO ? eE.data.linesOfCode : ev,
        eW = eB?.["model" === ea ? "byModel" : "bySurface"],
        e$ = eR && (eE.data.turns?.["model" === ea ? "byModel" : "bySurface"].total ?? 0) > 0 && eW?.total === 0,
        ez = eR && (eE.data.linesOfCode?.total ?? 0) > 0 && eF?.total === 0
      ;(E[16] !== P || E[17] !== ex || E[18] !== B || E[19] !== em
        ? ((r = P
            ? (0, a.jsx)(J.F, { chart: "product_activity", queries: [em, ...("business" === B ? [ex] : [])] })
            : null),
          (E[16] = P),
          (E[17] = ex),
          (E[18] = B),
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
        E[24] !== W || E[25] !== G
          ? ((h = W
              ? G.formatMessage({
                  id: "settings.usage.billing.messages.periodLabel",
                  defaultMessage: "Messages time range",
                  description: "Accessible label for the Consumer message count date-range selector",
                })
              : G.formatMessage({
                  id: "settings.usage.billing.turns.periodLabel",
                  defaultMessage: "Turns and lines of code time range",
                  description:
                    "Accessible label for the shared seven-day or thirty-day time range used by the turns and lines-of-code charts",
                })),
            (E[24] = W),
            (E[25] = G),
            (E[26] = h))
          : (h = E[26]),
        E[27] !== $ ||
        E[28] !== z.accountId ||
        E[29] !== z.userId ||
        E[30] !== K ||
        E[31] !== eF ||
        E[32] !== eW?.total ||
        E[33] !== eB
          ? ((m = (e) => {
              ;(e !== K && (0, Q.$c)($, "product_activity", e),
                eh(null != eB && eW?.total === 0),
                eP(
                  (eW?.total ?? 0) > 0 || (eF?.total ?? 0) > 0
                    ? { accountId: z.accountId ?? null, data: { turns: eB, linesOfCode: eF }, userId: z.userId ?? null }
                    : null,
                ),
                eu(ee),
                Y(e))
            }),
            (E[27] = $),
            (E[28] = z.accountId),
            (E[29] = z.userId),
            (E[30] = K),
            (E[31] = eF),
            (E[32] = eW?.total),
            (E[33] = eB),
            (E[34] = m))
          : (m = E[34]),
        E[35] !== K || E[36] !== h || E[37] !== m
          ? ((b = (0, a.jsx)(X.tS, { ariaLabel: h, days: K, onChange: m })),
            (E[35] = K),
            (E[36] = h),
            (E[37] = m),
            (E[38] = b))
          : (b = E[38]),
        E[39] !== W || E[40] !== G
          ? ((x = W
              ? G.formatMessage({
                  id: "settings.usage.billing.messages.breakdownLabel",
                  defaultMessage: "Group messages by model or surface",
                  description: "Accessible label for grouping Consumer messages by AI model or Codex product surface",
                })
              : G.formatMessage({
                  id: "settings.usage.billing.turns.breakdownLabel",
                  defaultMessage: "Group turns by model or surface",
                  description:
                    "Accessible label for the selector that groups the turns chart by AI model or Codex product surface",
                })),
            (E[39] = W),
            (E[40] = G),
            (E[41] = x))
          : (x = E[41]),
        E[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = { id: "model", label: (0, a.jsx)(X.d1, { breakdown: "model" }) }), (E[42] = v))
          : (v = E[42]),
        E[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = [v, { id: "surface", label: (0, a.jsx)(X.d1, { breakdown: "surface" }) }]), (E[43] = k))
          : (k = E[43]),
        E[44] !== $ || E[45] !== ea
          ? ((w = (e) => {
              ;(e !== ea && (0, Q.to)($, "product_activity", e), er(ea), en(e))
            }),
            (E[44] = $),
            (E[45] = ea),
            (E[46] = w))
          : (w = E[46]),
        E[47] !== ea || E[48] !== x || E[49] !== w
          ? ((j = (0, a.jsx)(p.T, { ariaLabel: x, options: k, selectedId: ea, variant: "inset", onSelect: w })),
            (E[47] = ea),
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
        E[58] !== W || E[59] !== eF?.total || E[60] !== eB || E[61] !== ef || E[62] !== eg || E[63] !== B
          ? ((C =
              null != eB || (ef && eg)
                ? (0, a.jsx)(es, { consumerAnalytics: W, scope: B, hasNoLinesOfCode: eF?.total === 0 })
                : void 0),
            (E[58] = W),
            (E[59] = eF?.total),
            (E[60] = eB),
            (E[61] = ef),
            (E[62] = eg),
            (E[63] = B),
            (E[64] = C))
          : (C = E[64]))
      let eG = !H && ((null != ei && ei !== ea) || (null != ep && eR && null != eE.data.turns && eE.data.turns !== ep)),
        eK = ef || eD
      return (
        E[65] === Symbol.for("react.memo_cache_sentinel") ? ((A = () => er(null)), (E[65] = A)) : (A = E[65]),
        E[66] !== eb
          ? ((S = () => {
              eb()
            }),
            (E[66] = eb),
            (E[67] = S))
          : (S = E[67]),
        E[68] !== ey || E[69] !== eH || E[70] !== eg || E[71] !== H || E[72] !== eG || E[73] !== eK || E[74] !== S
          ? ((I = {
              animateDataChanges: eG,
              isError: ey,
              isLoading: eK,
              isUpdating: eH,
              preserveEmptyLayout: eg,
              reduceMotion: H,
              onAnimationEnd: A,
              onRetry: S,
            }),
            (E[68] = ey),
            (E[69] = eH),
            (E[70] = eg),
            (E[71] = H),
            (E[72] = eG),
            (E[73] = eK),
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
        E[78] !== ea ||
        E[79] !== W ||
        E[80] !== eW ||
        E[81] !== e$ ||
        E[82] !== B ||
        E[83] !== C ||
        E[84] !== I ||
        E[85] !== U
          ? ((L = (0, a.jsx)(V.t, {
              analyticsChart: "product_activity",
              consumerAnalytics: W,
              breakdown: ea,
              data: eW,
              emptyMessage: C,
              preservePopulatedCardLayout: e$,
              scope: B,
              status: I,
              title: U,
              unit: "turns",
            })),
            (E[78] = ea),
            (E[79] = W),
            (E[80] = eW),
            (E[81] = e$),
            (E[82] = B),
            (E[83] = C),
            (E[84] = I),
            (E[85] = U),
            (E[86] = L))
          : (L = E[86]),
        E[87] !== W ||
        E[88] !== eF ||
        E[89] !== ew ||
        E[90] !== ek ||
        E[91] !== eO ||
        E[92] !== ev ||
        E[93] !== ez ||
        E[94] !== eE ||
        E[95] !== eR ||
        E[96] !== H ||
        E[97] !== ej ||
        E[98] !== B
          ? ((N =
              "business" === B && ((eF?.total ?? 0) > 0 || ez || ew)
                ? (0, a.jsx)(V.t, {
                    analyticsChart: "product_activity",
                    consumerAnalytics: W,
                    data: eF,
                    emptyMessage: (0, a.jsx)(d.A, {
                      id: "settings.usage.billing.linesOfCode.empty",
                      defaultMessage: "No lines of code during this period",
                      description:
                        "Empty state for a Business user's lines-of-code chart when the selected period has no lines of code after a previously populated period",
                    }),
                    preservePopulatedCardLayout: ez,
                    scope: B,
                    status: {
                      animateDataChanges:
                        !H && null != ev && eR && null != eE.data.linesOfCode && eE.data.linesOfCode !== ev,
                      isError: ew,
                      isLoading: ek,
                      isUpdating: eO,
                      reduceMotion: H,
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
            (E[88] = eF),
            (E[89] = ew),
            (E[90] = ek),
            (E[91] = eO),
            (E[92] = ev),
            (E[93] = ez),
            (E[94] = eE),
            (E[95] = eR),
            (E[96] = H),
            (E[97] = ej),
            (E[98] = B),
            (E[99] = N))
          : (N = E[99]),
        E[100] !== L || E[101] !== N
          ? ((T = (0, a.jsxs)(y.X.Content, { className: "gap-3", children: [L, N] })),
            (E[100] = L),
            (E[101] = N),
            (E[102] = T))
          : (T = E[102]),
        E[103] !== M || E[104] !== T || E[105] !== r
          ? ((D = (0, a.jsxs)(y.X, { children: [r, M, T] })), (E[103] = M), (E[104] = T), (E[105] = r), (E[106] = D))
          : (D = E[106]),
        D
      )
    }
    function ee(e) {
      return { ...e, hasManualSelection: !0 }
    }
    function et(e) {
      return { ...e, hasResolved: !0 }
    }
    function es(e) {
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
    var ea = s("MFyU"),
      en = s("xCr9"),
      ei = s.n(en),
      er = s("x8Nb"),
      eo = s("j2jv"),
      el = s("sGKa"),
      ed = s("NxWE"),
      eu = s("OuWM"),
      ec = s("ZOaQ"),
      eg = s("V8uZ"),
      eh = s("o6lh"),
      em = s("Rd02"),
      ep = s("RUEO"),
      ef = s("O5Ra")
    let ey = (0, j.YK)({
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
    var eb = s("qF12")
    let ex = [
      ...eh.Kj,
      "var(--color-chart-yellow)",
      "var(--color-chart-red)",
      "var(--color-chart-purple)",
      "var(--color-text-tertiary)",
    ]
    var ev = s("MIRZ"),
      ek = s("O28E"),
      ew = s("pWo8"),
      ej = s("suct"),
      e_ = s("iodE"),
      eM = s("LIss")
    let eC = {
      enter: (e) => ({ x: `${100 * e}%` }),
      visible: { x: "0%" },
      exit: (e) => ({ x: `${-(100 * e)}%`, transition: 0 === e ? { duration: 0 } : eg.jl }),
    }
    function eA(e) {
      let t,
        s,
        i = (0, n.c)(7),
        { children: r, rangeKey: o, direction: l, reduceMotion: d } = e,
        u = void 0 !== d && d
      return (
        i[0] !== r || i[1] !== l || i[2] !== o || i[3] !== u
          ? ((t = u
              ? r
              : (0, a.jsx)(ej.N, {
                  initial: !1,
                  custom: l,
                  children: (0, a.jsx)(eS, { direction: l, children: r }, o),
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
    function eS(e) {
      let t,
        s,
        i,
        l,
        d,
        u = (0, n.c)(13),
        { children: c, direction: g } = e,
        h = (0, e_.tF)(),
        [m, p] = (0, o.useState)(!1),
        f = (!h || m) && "pointer-events-none"
      u[0] !== f
        ? ((t = (0, r.A)("col-start-1 row-start-1 h-full min-h-0 min-w-0", f)), (u[0] = f), (u[1] = t))
        : (t = u[1])
      let y = !h || void 0,
        b = !h
      return (
        u[2] !== g ? ((s = 0 === g ? { duration: 0 } : eg.jl), (u[2] = g), (u[3] = s)) : (s = u[3]),
        u[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = () => p(!0)), (l = () => p(!1)), (u[4] = i), (u[5] = l))
          : ((i = u[4]), (l = u[5])),
        u[6] !== c || u[7] !== g || u[8] !== t || u[9] !== y || u[10] !== b || u[11] !== s
          ? ((d = (0, a.jsx)(eM.P.div, {
              className: t,
              "aria-hidden": y,
              inert: b,
              custom: g,
              variants: eC,
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
    var eI = s("g2yw"),
      eU = s("BhIm")
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
        v = (0, n.c)(259),
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
          isPersonalUsage: L,
          preservePopulatedCardLayout: N,
          consumerAnalytics: T,
          selectedDayLegend: D,
          rangeDirection: E,
          scope: P,
          status: R,
          title: H,
          unit: O,
        } = e,
        B = void 0 !== L && L,
        F = void 0 !== N && N,
        W = void 0 !== T && T,
        $ = void 0 !== D && D,
        z = void 0 === O ? "credits" : O,
        G = (0, l.A)(),
        K = "usd" === z,
        X = null != C && "bucketTotals" in C ? C : void 0,
        q = X?.data[0]?.date
      v[0] !== X?.data ? ((t = X?.data.at(-1)?.date), (v[0] = X?.data), (v[1] = t)) : (t = v[1])
      let Z = t,
        V = `${q}:${Z}`,
        [Q, J] = (0, o.useState)(V),
        [Y, ee] = (0, o.useState)(null),
        [et, es] = (0, o.useState)(null)
      v[2] !== Y || v[3] !== X?.data
        ? ((s =
            X?.data.findIndex((e) => {
              let { date: t } = e
              return t === Y
            }) ?? -1),
          (v[2] = Y),
          (v[3] = X?.data),
          (v[4] = s))
        : (s = v[4])
      let en = s
      v[5] !== et || v[6] !== en || v[7] !== X?.data
        ? ((i =
            en >= 0
              ? en
              : (X?.data.findIndex((e) => {
                  let { date: t } = e
                  return t === et
                }) ?? -1)),
          (v[5] = et),
          (v[6] = en),
          (v[7] = X?.data),
          (v[8] = i))
        : (i = v[8])
      let eg = i,
        ej = X?.data[eg],
        e_ = ej?.date,
        eM = (0, o.useId)(),
        [eC, eS] = (0, o.useState)(null),
        [eL, eP] = (0, o.useState)(null),
        [eR, eH] = (0, o.useState)(void 0),
        [eO, eB] = (0, o.useState)(!1)
      Q !== V && (J(V), ee(null), es(null), eB(!1))
      let [eF, eW] = (0, o.useState)(null)
      v[9] !== C?.series || v[10] !== eC || v[11] !== B || v[12] !== P || v[13] !== $
        ? ((r =
            $ ||
            (B &&
              "workspace" !== P &&
              null != eC &&
              !C?.series.some((e) => {
                let { key: t } = e
                return t === eC
              }))
              ? null
              : eC),
          (v[9] = C?.series),
          (v[10] = eC),
          (v[11] = B),
          (v[12] = P),
          (v[13] = $),
          (v[14] = r))
        : (r = v[14])
      let e$ = r,
        [ez, eG] = (0, o.useState)(null),
        [eK, eX] = (0, o.useState)(null),
        eq = C?.total ?? 0,
        eZ = null != X || (B && (null == C || !("units" in C) || "credits" !== C.units)),
        eV = K || null == I || eq <= 0 ? null : I / eq
      v[15] !== M || v[16] !== W || v[17] !== C || v[18] !== G || v[19] !== B || v[20] !== P || v[21] !== z
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
                ? new Map(t.series.toSorted((e, t) => t.total - e.total).map(({ key: e }, t) => [e, ex[t % ex.length]]))
                : null,
              d = ["codex", "work", ...Object.keys(ey)],
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
                  let u = r ? eh.Kj[d % eh.Kj.length] : void 0
                  return {
                    key: t,
                    name:
                      "workspace" !== i && Object.hasOwn(ey, t)
                        ? s.formatMessage(ey[t])
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
                                return "other" === e ? a.formatMessage(ey.other) : (0, ef.K)(t)
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
                        ? eh.Kj[+("work" === t)]
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
                        color: r ? (0, eb.AS)(c) : void 0,
                        key: eb.bG,
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
          })({ breakdown: M, data: C, intl: G, isPersonalUsage: B, unit: z, scope: P, consumerAnalytics: W })),
          (v[15] = M),
          (v[16] = W),
          (v[17] = C),
          (v[18] = G),
          (v[19] = B),
          (v[20] = P),
          (v[21] = z),
          (v[22] = u))
        : (u = v[22])
      let { availableSeries: eQ, barSeries: eJ, otherSeries: eY, otherSeriesKeys: e1 } = u
      v[23] !== eJ || v[24] !== P || v[25] !== ez
        ? ((c =
            "workspace" === P ||
            null == ez ||
            eJ.some((e) => {
              let { key: t } = e
              return !ez.has(t)
            })
              ? ez
              : null),
          (v[23] = eJ),
          (v[24] = P),
          (v[25] = ez),
          (v[26] = c))
        : (c = v[26])
      let e0 = c
      v[27] !== eJ || v[28] !== W || v[29] !== K || v[30] !== e0 || v[31] !== ez
        ? ((g = W || K ? (0, eb.Ft)(ez, eJ) : e0),
          (v[27] = eJ),
          (v[28] = W),
          (v[29] = K),
          (v[30] = e0),
          (v[31] = ez),
          (v[32] = g))
        : (g = v[32])
      let e2 = g
      v[33] !== eJ || v[34] !== e2 || v[35] !== eL
        ? ((h = eJ.some((e) => {
            let { key: t } = e
            return t === eL && !e2?.has(t)
          })
            ? eL
            : null),
          (v[33] = eJ),
          (v[34] = e2),
          (v[35] = eL),
          (v[36] = h))
        : (h = v[36])
      let e3 = h,
        e4 = null != eK && eK.history === C && eK.series === (W || K ? ez : e2)
      v[37] !== eJ ||
      v[38] !== W ||
      v[39] !== e2 ||
      v[40] !== e4 ||
      v[41] !== X ||
      v[42] !== eK ||
      v[43] !== R.reduceMotion
        ? ((m =
            W && null != X
              ? X.data.map(
                  (e, t) =>
                    ei()(eJ, (s) => {
                      let { key: a } = s
                      return (
                        (!e2?.has(a) || (!R.reduceMotion && e4 && eK.topSeriesKeys?.[t] === a)) &&
                        (e.values[a] ?? 0) > 0
                      )
                    })?.key,
                )
              : void 0),
          (v[37] = eJ),
          (v[38] = W),
          (v[39] = e2),
          (v[40] = e4),
          (v[41] = X),
          (v[42] = eK),
          (v[43] = R.reduceMotion),
          (v[44] = m))
        : (m = v[44])
      let e5 = m,
        e6 = C?.total
      if (null != C && e2?.size) {
        let e = 0,
          t = 0
        if (v[45] !== eQ || v[46] !== eJ || v[47] !== e2 || v[48] !== e || v[49] !== t) {
          for (let s of eQ) {
            let a = eJ.some((e) => {
              let { key: t } = e
              return t === s.key
            })
              ? s.key
              : eb.bG
            e2.has(a) ? (e += s.total) : (t += s.total)
          }
          ;((v[45] = eQ), (v[46] = eJ), (v[47] = e2), (v[48] = e), (v[49] = t), (v[50] = e), (v[51] = t))
        } else ((e = v[50]), (t = v[51]))
        e6 = K ? t : C.total - e
      }
      v[52] !== C?.data || v[53] !== X
        ? ((p = C?.data.reduce(
            (e, t) => Math.max(e, null != X ? (X.bucketTotals[t.date] ?? 0) : Object.values(t.values).reduce(eE, 0)),
            0,
          )),
          (v[52] = C?.data),
          (v[53] = X),
          (v[54] = p))
        : (p = v[54])
      let e8 = p
      v[55] !== eJ || v[56] !== C?.data || v[57] !== K || v[58] !== eY
        ? ((f = K
            ? C?.data.reduce(
                (e, t) => {
                  let s = 0,
                    a = 0
                  for (let e of eJ) {
                    let n =
                      e.key === eb.bG ? eY.reduce((e, s) => e + (t.values[s.key] ?? 0), 0) : (t.values[e.key] ?? 0)
                    ;((s += Math.max(0, n)), (a += Math.min(0, n)))
                  }
                  return { minimum: Math.min(e.minimum, a), maximum: Math.max(e.maximum, s) }
                },
                { minimum: 0, maximum: 0 },
              )
            : void 0),
          (v[55] = eJ),
          (v[56] = C?.data),
          (v[57] = K),
          (v[58] = eY),
          (v[59] = f))
        : (f = v[59])
      let e7 = f
      v[60] !== X
        ? ((y = X?.data.every((e) => {
            let { date: t } = e
            return null != X.bucketTotals[t]
          })
            ? X.data.reduce((e, t) => {
                let { date: s } = t
                return e + (X.bucketTotals[s] ?? 0)
              }, 0)
            : 0),
          (v[60] = X),
          (v[61] = y))
        : (y = v[61])
      let e9 = y,
        te = null == e_ ? e9 : X?.bucketTotals[e_],
        tt = A?.startDate ?? q,
        ts = A?.endDate ?? Z
      v[62] !== G || v[63] !== e_ || v[64] !== ts || v[65] !== tt
        ? ((b =
            null != tt && null != ts
              ? G.formatDateTimeRange(new Date(`${e_ ?? tt}T00:00:00Z`), new Date(`${e_ ?? ts}T00:00:00Z`), {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  timeZone: "UTC",
                })
              : void 0),
          (v[62] = G),
          (v[63] = e_),
          (v[64] = ts),
          (v[65] = tt),
          (v[66] = b))
        : (b = v[66])
      let ta = b
      if (
        v[67] !== k ||
        v[68] !== e3 ||
        v[69] !== e$ ||
        v[70] !== w ||
        v[71] !== j ||
        v[72] !== eJ ||
        v[73] !== _ ||
        v[74] !== eR ||
        v[75] !== W ||
        v[76] !== C ||
        v[77] !== S ||
        v[78] !== I ||
        v[79] !== q ||
        v[80] !== e2 ||
        v[81] !== U ||
        v[82] !== G ||
        v[83] !== B ||
        v[84] !== eZ ||
        v[85] !== e4 ||
        v[86] !== eO ||
        v[87] !== K ||
        v[88] !== Z ||
        v[89] !== e_ ||
        v[90] !== eg ||
        v[91] !== ta ||
        v[92] !== ej ||
        v[93] !== te ||
        v[94] !== e8 ||
        v[95] !== eY ||
        v[96] !== e1 ||
        v[97] !== e9 ||
        v[98] !== en ||
        v[99] !== F ||
        v[100] !== E ||
        v[101] !== V ||
        v[102] !== X ||
        v[103] !== eK ||
        v[104] !== P ||
        v[105] !== $ ||
        v[106] !== e7?.maximum ||
        v[107] !== e7?.minimum ||
        v[108] !== eF ||
        v[109] !== eM ||
        v[110] !== R ||
        v[111] !== ez ||
        v[112] !== H ||
        v[113] !== e5 ||
        v[114] !== eq ||
        v[115] !== z ||
        v[116] !== eV ||
        v[117] !== e6
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
          L,
          N,
          T,
          D,
          O,
          Q,
          J,
          Y =
            $ && null != X
              ? new Map(
                  eJ.map((e) => {
                    let { key: t, total: s } = e
                    return [t, null != te && te > 0 ? (null == ej ? (s ?? 0) : (ej.values[t] ?? 0)) / te : null]
                  }),
                )
              : void 0
        v[119] !== q || v[120] !== G || v[121] !== Z || v[122] !== e9 || v[123] !== X || v[124] !== $
          ? ((e = (e) =>
              $ || null == X || e9 <= 0 || null == q || null == Z
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
                        share: G.formatNumber((e.total ?? 0) / e9, { style: "percent", maximumFractionDigits: 1 }),
                        period: G.formatDateTimeRange(new Date(`${q}T00:00:00Z`), new Date(`${Z}T00:00:00Z`), {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          timeZone: "UTC",
                        }),
                      },
                    }),
                  }),
            (v[119] = q),
            (v[120] = G),
            (v[121] = Z),
            (v[122] = e9),
            (v[123] = X),
            (v[124] = $),
            (v[125] = e))
          : (e = v[125])
        let et = eJ.map(e),
          { onAnimationEnd: ei } = R
        v[126] !== ei || v[127] !== eK
          ? ((t = () => {
              ;(ei?.(), eX((e) => (e === eK ? null : e)))
            }),
            (v[126] = ei),
            (v[127] = eK),
            (v[128] = t))
          : (t = v[128])
        let ef = t
        v[129] !== C || v[130] !== ei
          ? ((s = () => {
              ;(eH(C), eX(null), ei?.())
            }),
            (v[129] = C),
            (v[130] = ei),
            (v[131] = s))
          : (s = v[131])
        let ey = s
        v[132] !== C || v[133] !== e5
          ? ((n = (e) => {
              ;(eH(C), eX(null == C ? null : { history: C, series: e, topSeriesKeys: e5 }), eG(e))
            }),
            (v[132] = C),
            (v[133] = e5),
            (v[134] = n))
          : (n = v[134])
        let ex = n
        v[135] !== X?.data
          ? ((i = (e, t, s) => {
              s.stopPropagation()
              let a = X?.data[t]?.date
              null != a && (ee((e) => (e === a ? null : a)), es(null), eB(!0))
            }),
            (v[135] = X?.data),
            (v[136] = i))
          : (i = v[136])
        let eC = i
        v[137] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = () => {
              ;(ee(null), es(null), eB(!0))
            }),
            (v[137] = r))
          : (r = v[137])
        let eL = r
        if (
          v[138] !== e3 ||
          v[139] !== eJ ||
          v[140] !== eR ||
          v[141] !== W ||
          v[142] !== C ||
          v[143] !== ef ||
          v[144] !== ey ||
          v[145] !== eC ||
          v[146] !== e2 ||
          v[147] !== B ||
          v[148] !== e4 ||
          v[149] !== eO ||
          v[150] !== eY ||
          v[151] !== e1 ||
          v[152] !== en ||
          v[153] !== V ||
          v[154] !== P ||
          v[155] !== $ ||
          v[156] !== eM ||
          v[157] !== R.animateDataChanges ||
          v[158] !== R.reduceMotion ||
          v[159] !== e5
        ) {
          let e
          ;(v[161] !== e3 ||
          v[162] !== eR ||
          v[163] !== W ||
          v[164] !== C ||
          v[165] !== ef ||
          v[166] !== ey ||
          v[167] !== eC ||
          v[168] !== e2 ||
          v[169] !== B ||
          v[170] !== e4 ||
          v[171] !== eO ||
          v[172] !== eY ||
          v[173] !== e1 ||
          v[174] !== en ||
          v[175] !== V ||
          v[176] !== P ||
          v[177] !== $ ||
          v[178] !== eM ||
          v[179] !== R.animateDataChanges ||
          v[180] !== R.reduceMotion ||
          v[181] !== e5
            ? ((e = (e, t) =>
                W
                  ? (0, a.jsx)(
                      ep.h,
                      {
                        seriesKey: e.key,
                        name: e.key,
                        color: e.color,
                        dimmed: null != e3 && e3 !== e.key,
                        highlightHoveredDay: $ && !eO,
                        pinnedDayIndex: en >= 0 ? en : void 0,
                        hidden: !!e2?.has(e.key),
                        otherSeriesKeys: e.key === eb.bG ? e1 : void 0,
                        stackId: "usage",
                        stackClipId: null == e5 ? void 0 : `${eM}-${V}`,
                        topSeriesKeys: e5,
                        stackRadius: eb.Ib,
                        grow: !!R.animateDataChanges && (!$ || eR !== C) && !e4 && !R.reduceMotion,
                        restack: e4 && !R.reduceMotion,
                        onAnimationEnd: ef,
                        onClick: $ ? eC : void 0,
                        onGrowEnd: ey,
                        onHoverChange: $ ? void 0 : eS,
                      },
                      e.key,
                    )
                  : (0, a.jsx)(
                      er.yP,
                      {
                        animationDuration: 150,
                        animationEasing: "ease-out",
                        dataKey: (t) =>
                          e2?.has(e.key)
                            ? null
                            : e.key === eb.bG
                              ? eY.reduce((e, s) => e + (t.values[s.key] ?? 0), 0)
                              : (t.values[e.key] ?? 0),
                        fill: e.color ?? eh.Kj[t % eh.Kj.length],
                        isAnimationActive: !R.reduceMotion && (("workspace" !== P && !!R.animateDataChanges) || e4),
                        name: e.key,
                        onAnimationEnd: ef,
                        onMouseEnter: () => {
                          eS(e.key)
                        },
                        onMouseLeave: () => {
                          eS(null)
                        },
                        radius: 0,
                        stackId: "usage",
                      },
                      B ? t : e.key,
                    )),
              (v[161] = e3),
              (v[162] = eR),
              (v[163] = W),
              (v[164] = C),
              (v[165] = ef),
              (v[166] = ey),
              (v[167] = eC),
              (v[168] = e2),
              (v[169] = B),
              (v[170] = e4),
              (v[171] = eO),
              (v[172] = eY),
              (v[173] = e1),
              (v[174] = en),
              (v[175] = V),
              (v[176] = P),
              (v[177] = $),
              (v[178] = eM),
              (v[179] = R.animateDataChanges),
              (v[180] = R.reduceMotion),
              (v[181] = e5),
              (v[182] = e))
            : (e = v[182]),
            (o = eJ.map(e)),
            (v[138] = e3),
            (v[139] = eJ),
            (v[140] = eR),
            (v[141] = W),
            (v[142] = C),
            (v[143] = ef),
            (v[144] = ey),
            (v[145] = eC),
            (v[146] = e2),
            (v[147] = B),
            (v[148] = e4),
            (v[149] = eO),
            (v[150] = eY),
            (v[151] = e1),
            (v[152] = en),
            (v[153] = V),
            (v[154] = P),
            (v[155] = $),
            (v[156] = eM),
            (v[157] = R.animateDataChanges),
            (v[158] = R.reduceMotion),
            (v[159] = e5),
            (v[160] = o))
        } else o = v[160]
        let eE = o
        v[183] !== W || v[184] !== G || v[185] !== B || v[186] !== P || v[187] !== z
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
            })(G, B, P, W, z)),
            (v[183] = W),
            (v[184] = G),
            (v[185] = B),
            (v[186] = P),
            (v[187] = z),
            (v[188] = l))
          : (l = v[188])
        let eQ = l,
          e0 = void 0 === H ? eQ.title : H
        if ($ && null != ta) {
          let e
          ;(v[189] !== G || v[190] !== e_ || v[191] !== ta
            ? ((e = null == e_ ? ta : (0, a.jsx)("time", { dateTime: e_, children: (0, ev.e)(e_, G) })),
              (v[189] = G),
              (v[190] = e_),
              (v[191] = ta),
              (v[192] = e))
            : (e = v[192]),
            (e0 = e))
        }
        let tt = I
        ;(K ? (tt = void 0) : e2?.size && null != eV && null != e6 && (tt = e6 * eV),
          v[193] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = () => {
                ;(eW(null), eS(null), es(null))
              }),
              (v[193] = u))
            : (u = v[193]))
        let ts = !$
        v[194] !== $ ? ((c = $ ? [] : void 0), (v[194] = $), (v[195] = c)) : (c = v[195])
        let tn = $ ? void 0 : (j ?? eQ.ariaLabel),
          ti = C?.data,
          tr = null == X ? 4 : 20
        v[196] !== tr ? ((g = { top: tr, right: 0, left: 0, bottom: 0 }), (v[196] = tr), (v[197] = g)) : (g = v[197])
        let to = "workspace" !== P && C?.data.length === 1 ? 44 : void 0,
          tl = K ? "sign" : void 0,
          td = $ ? eL : void 0,
          tu = "workspace" === P ? void 0 : eD
        ;(v[198] !== W ? ((h = W ? () => eW(null) : void 0), (v[198] = W), (v[199] = h)) : (h = v[199]),
          v[200] !== W || v[201] !== $
            ? ((m = W
                ? (e, t) => {
                    let { activeLabel: s, isTooltipActive: a } = e
                    $ ? es(a && "string" == typeof s ? s : null) : eW((0, ew.nV)(t, !1, !0))
                  }
                : void 0),
              (v[200] = W),
              (v[201] = $),
              (v[202] = m))
            : (m = v[202]),
          v[203] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = (0, a.jsx)(eo.d, { stroke: "var(--color-border-subtle)", vertical: !1 })), (v[203] = p))
            : (p = v[203]))
        let tc = null != X,
          tg = e7?.maximum ?? e8,
          th = e7?.minimum,
          tm = eZ ? "percent" : z
        ;(v[204] !== tc || v[205] !== tg || v[206] !== th || v[207] !== tm
          ? ((f = (0, a.jsx)(em.Qr, {
              hideValues: tc,
              maximumValue: tg,
              minimumValue: th,
              showPercentageUnit: !1,
              unit: tm,
            })),
            (v[204] = tc),
            (v[205] = tg),
            (v[206] = th),
            (v[207] = tm),
            (v[208] = f))
          : (f = v[208]),
          v[209] !== X
            ? ((y = null == X ? void 0 : { left: 20, right: 20 }), (v[209] = X), (v[210] = y))
            : (y = v[210]))
        let tp = null == X ? em.ps : eT
        v[211] !== G ? ((b = (e) => (0, ev.e)(e, G)), (v[211] = G), (v[212] = b)) : (b = v[212])
        let tf = C?.data
        ;(v[213] !== tf ? ((M = (0, ev.j)(tf)), (v[213] = tf), (v[214] = M)) : (M = v[214]),
          v[215] !== y || v[216] !== tp || v[217] !== b || v[218] !== M
            ? ((A = (0, a.jsx)(el.W, {
                axisLine: !1,
                dataKey: "date",
                height: 22,
                interval: 0,
                minTickGap: 32,
                padding: y,
                tick: tp,
                tickFormatter: b,
                tickLine: !1,
                ticks: M,
              })),
              (v[215] = y),
              (v[216] = tp),
              (v[217] = b),
              (v[218] = M),
              (v[219] = A))
            : (A = v[219]))
        let ty = !eO && void 0,
          tb = $
            ? eN
            : (0, a.jsx)(eI.L, {
                consumerAnalytics: W,
                activeSeriesKey: e$,
                hiddenSeriesKeys: e2,
                isRelativeUsage: eZ,
                report: X,
                scope: P,
                series: et,
                unit: eZ ? "percent" : z,
                usdPerCredit: eV,
              })
        ;(v[220] !== $ ? ((L = !$ && (0, a.jsx)(em.kr, {})), (v[220] = $), (v[221] = L)) : (L = v[221]),
          v[222] !== eF ? ((N = null != eF ? (0, ew.YZ)(eF) : void 0), (v[222] = eF), (v[223] = N)) : (N = v[223]),
          v[224] !== ty || v[225] !== tb || v[226] !== L || v[227] !== N
            ? ((T = (0, a.jsx)(ed.m, { active: ty, isAnimationActive: !1, content: tb, cursor: L, position: N })),
              (v[224] = ty),
              (v[225] = tb),
              (v[226] = L),
              (v[227] = N),
              (v[228] = T))
            : (T = v[228]),
          v[229] !== eE || v[230] !== e5
            ? ((D = null == e5 ? (0, a.jsx)(eu.A_, { radius: eb.Ib, children: eE }) : eE),
              (v[229] = eE),
              (v[230] = e5),
              (v[231] = D))
            : (D = v[231]),
          v[232] !== _ ||
          v[233] !== ts ||
          v[234] !== c ||
          v[235] !== tn ||
          v[236] !== ti ||
          v[237] !== g ||
          v[238] !== to ||
          v[239] !== tl ||
          v[240] !== td ||
          v[241] !== tu ||
          v[242] !== h ||
          v[243] !== m ||
          v[244] !== f ||
          v[245] !== A ||
          v[246] !== T ||
          v[247] !== D
            ? ((O = (0, a.jsxs)(ec.E, {
                accessibilityLayer: ts,
                throttledEvents: c,
                "aria-label": tn,
                barSize: _,
                data: ti,
                margin: g,
                maxBarSize: to,
                stackOffset: tl,
                onClick: td,
                onMouseDown: tu,
                onMouseLeave: h,
                onMouseMove: m,
                children: [p, f, A, T, D],
              })),
              (v[232] = _),
              (v[233] = ts),
              (v[234] = c),
              (v[235] = tn),
              (v[236] = ti),
              (v[237] = g),
              (v[238] = to),
              (v[239] = tl),
              (v[240] = td),
              (v[241] = tu),
              (v[242] = h),
              (v[243] = m),
              (v[244] = f),
              (v[245] = A),
              (v[246] = T),
              (v[247] = D),
              (v[248] = O))
            : (O = v[248]),
          v[249] !== W || v[250] !== eO || v[251] !== P || v[252] !== O
            ? ((Q = (0, a.jsx)(ek.H, {
                consumerAnalytics: W,
                isTooltipDismissed: eO,
                onResetHover: u,
                onTooltipDismissedChange: eB,
                scope: P,
                children: O,
              })),
              (v[249] = W),
              (v[250] = eO),
              (v[251] = P),
              (v[252] = O),
              (v[253] = Q))
            : (Q = v[253]))
        let tx = Q
        ;(v[254] !== U || v[255] !== G || v[256] !== K || v[257] !== e6
          ? ((J = K && !U && null != e6 ? (0, eU.W)(e6, G, !0) : void 0),
            (v[254] = U),
            (v[255] = G),
            (v[256] = K),
            (v[257] = e6),
            (v[258] = J))
          : (J = v[258]),
          (x = (0, a.jsx)(ea.G, {
            analyticsChart: w,
            consumerAnalytics: W,
            actions: k,
            dailyLegend: $ ? { shares: Y } : void 0,
            fillChartHeight: $ || null != X,
            activeSeriesKey: e$,
            onHoverSeriesChange: $ ? eP : void 0,
            emptyMessage: S ?? eQ.emptyMessage,
            estimatedSpendUsd: tt,
            hasData: W || K ? 0 !== eq || et.length > 0 : eq > 0,
            hiddenSeriesKeys: e2,
            hideTotal: eZ || U,
            preservePopulatedCardLayout: F,
            scope: P,
            series: et,
            status: R,
            title: e0,
            total: e6,
            totalLabel: J,
            onChangeSeriesIsolation: W
              ? (e) => {
                  ex(null == e ? new Set() : (0, eb.vD)(e, et, ez))
                }
              : void 0,
            onToggleSeries: (e) => {
              let t = (0, eb.OP)(e2, e, et, W ? ez : e2)
              t.has(e) !== !!e2?.has(e) && ex(t)
            },
            children:
              $ && null != X
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: "h-full",
                        role: "slider",
                        tabIndex: 0,
                        "aria-label": j ?? eQ.ariaLabel,
                        "aria-valuemin": 0,
                        "aria-valuemax": X.data.length,
                        "aria-valuenow": eg + 1,
                        "aria-valuetext": ta,
                        onKeyDown: (e) => {
                          let t = eg
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
                              ;(e.preventDefault(), e.stopPropagation(), eL())
                              return
                            default:
                              return
                          }
                          e.preventDefault()
                          let s = X.data[Math.max(-1, Math.min(t, X.data.length - 1))]?.date ?? null
                          ;(ee(s), es(null), eB(null == s))
                        },
                        children:
                          null == E
                            ? tx
                            : (0, a.jsx)(eA, { rangeKey: V, direction: E, reduceMotion: R.reduceMotion, children: tx }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "sr-only",
                        role: "status",
                        "aria-live": "polite",
                        children: [
                          ta,
                          et.map((e) => {
                            let { key: t, name: s } = e,
                              n = Y?.get(t)
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
                                              threshold: G.formatNumber(0.001, {
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
                                                  : G.formatNumber(n, { style: "percent", maximumFractionDigits: 1 }),
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
                : tx,
          })),
          (v[67] = k),
          (v[68] = e3),
          (v[69] = e$),
          (v[70] = w),
          (v[71] = j),
          (v[72] = eJ),
          (v[73] = _),
          (v[74] = eR),
          (v[75] = W),
          (v[76] = C),
          (v[77] = S),
          (v[78] = I),
          (v[79] = q),
          (v[80] = e2),
          (v[81] = U),
          (v[82] = G),
          (v[83] = B),
          (v[84] = eZ),
          (v[85] = e4),
          (v[86] = eO),
          (v[87] = K),
          (v[88] = Z),
          (v[89] = e_),
          (v[90] = eg),
          (v[91] = ta),
          (v[92] = ej),
          (v[93] = te),
          (v[94] = e8),
          (v[95] = eY),
          (v[96] = e1),
          (v[97] = e9),
          (v[98] = en),
          (v[99] = F),
          (v[100] = E),
          (v[101] = V),
          (v[102] = X),
          (v[103] = eK),
          (v[104] = P),
          (v[105] = $),
          (v[106] = e7?.maximum),
          (v[107] = e7?.minimum),
          (v[108] = eF),
          (v[109] = eM),
          (v[110] = R),
          (v[111] = ez),
          (v[112] = H),
          (v[113] = e5),
          (v[114] = eq),
          (v[115] = z),
          (v[116] = eV),
          (v[117] = e6),
          (v[118] = x))
      } else x = v[118]
      return x
    }
    function eN() {
      return null
    }
    function eT(e) {
      return (0, a.jsx)(em.ps, { ...e, centerLabels: !0 })
    }
    function eD(e, t) {
      t.preventDefault()
    }
    function eE(e, t) {
      return e + t
    }
    var eP = s("YOiQ"),
      eR = s("OivU")
    function eH(e) {
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
        L,
        N,
        T,
        D,
        E,
        P,
        R,
        H,
        O,
        B,
        F,
        W,
        $,
        z,
        G,
        K,
        X,
        q,
        Z,
        V,
        Q,
        J,
        Y,
        ee,
        et,
        es,
        en = (0, n.c)(147),
        { data: ei, preservePopulatedCardLayout: er, selectedModel: eu, scope: ec, status: eg } = e,
        ep = void 0 !== er && er,
        ex = (0, l.A)(),
        [ej, e_] = (0, o.useState)(null),
        [eM, eC] = (0, o.useState)(!1),
        [eA, eS] = (0, o.useState)(null),
        [eU, eL] = (0, o.useState)(null)
      if (
        en[0] !== ej ||
        en[1] !== ei?.data ||
        en[2] !== ei?.models ||
        en[3] !== ei?.total ||
        en[4] !== ex ||
        en[5] !== eM ||
        en[6] !== ep ||
        en[7] !== ec ||
        en[8] !== eu ||
        en[9] !== eg ||
        en[10] !== eU
      ) {
        let e, n
        ;((m =
          "business" === ec
            ? (ei?.models ?? [])
                .filter((e) => {
                  let { key: t, total: s } = e
                  return s > 0 && (null == eu || t === eu)
                })
                .map((e) => {
                  let { key: t } = e
                  return { key: t, name: "other" === t ? ex.formatMessage(ey.other) : (0, ef.K)(t) }
                })
            : [
                {
                  key: "outputTokens",
                  name: ex.formatMessage({
                    id: "settings.usage.billing.tokens.output",
                    defaultMessage: "Output",
                    description: "Output token series in enterprise token usage charts",
                  }),
                },
                {
                  key: "uncachedInputTokens",
                  name: ex.formatMessage({
                    id: "settings.usage.billing.tokens.uncachedInput",
                    defaultMessage: "Uncached input",
                    description: "Uncached input token series in enterprise token usage charts",
                  }),
                },
                {
                  key: "cachedInputTokens",
                  name: ex.formatMessage({
                    id: "settings.usage.billing.tokens.cachedInput",
                    defaultMessage: "Cached input",
                    description: "Cached input token series in enterprise token usage charts",
                  }),
                },
              ]),
          (g =
            null == eU ||
            m.some((e) => {
              let { key: t } = e
              return !eU.has(t)
            })
              ? eU
              : null),
          (c = ei?.data.map((e) => {
            if ("business" === ec || null == eu) return e
            let t = e.tokensByModel[eu]
            return {
              ...e,
              uncachedInputTokens: t?.uncachedInputTokens ?? 0,
              cachedInputTokens: t?.cachedInputTokens ?? 0,
              outputTokens: t?.outputTokens ?? 0,
            }
          })),
          en[51] !== ei?.models || en[52] !== ei?.total || en[53] !== eu
            ? ((e =
                null == eu
                  ? ei?.total
                  : ei?.models.find((e) => {
                      let { key: t } = e
                      return t === eu
                    })?.total),
              (en[51] = ei?.models),
              (en[52] = ei?.total),
              (en[53] = eu),
              (en[54] = e))
            : (e = en[54]))
        let r = e
        ;(en[55] !== g
          ? ((n = (e) => {
              let { key: t } = e
              return !g?.has(t)
            }),
            (en[55] = g),
            (en[56] = n))
          : (n = en[56]),
          (h = m.map(eB).filter(n)))
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
        ;((u = ea.G),
          (I = ej),
          en[57] === Symbol.for("react.memo_cache_sentinel")
            ? ((U = (0, a.jsx)(d.A, {
                id: "settings.usage.billing.tokens.empty",
                defaultMessage: "No tokens used during this period",
                description: "Empty state when the selected enterprise workspace usage period has no tokens consumed",
              })),
              (en[57] = U))
            : (U = en[57]),
          (L = (r ?? 0) > 0),
          (N = ep),
          (T = (e) => {
            eL((0, eb.OP)(g, e, m, g))
          }),
          (D = ec),
          (E = g),
          (R = m),
          (H = eg),
          en[58] !== ec
            ? ((O =
                "workspace" === ec
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
              (en[58] = ec),
              (en[59] = O))
            : (O = en[59]),
          (B = o),
          (i = ek.H),
          (_ = eM),
          en[60] === Symbol.for("react.memo_cache_sentinel")
            ? ((C = () => {
                ;(eS(null), e_(null))
              }),
              (en[60] = C))
            : (C = en[60]),
          (A = eC),
          (S = ec),
          (s = eP.Q),
          en[61] !== ex || en[62] !== ec
            ? ((f =
                "workspace" === ec
                  ? ex.formatMessage({
                      id: "settings.usage.billing.tokens.chartLabel",
                      defaultMessage: "Tokens used",
                      description: "Accessible label for the enterprise token usage chart",
                    })
                  : ex.formatMessage({
                      id: "settings.usage.billing.tokens.personalChartLabel",
                      defaultMessage: "Total tokens",
                      description:
                        "Accessible label for a Business workspace member's chart of total input, output, and cached tokens in Codex desktop analytics settings",
                    })),
              (en[61] = ex),
              (en[62] = ec),
              (en[63] = f))
            : (f = en[63]),
          (y = c),
          en[64] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = { top: 4, right: 0, left: 0, bottom: 0 }), (en[64] = b))
            : (b = en[64]),
          (x = "workspace" === ec ? void 0 : eO),
          en[65] !== ec
            ? ((v = () => {
                ;(eS(null), "workspace" !== ec && e_(null))
              }),
              (k = (e, t) => {
                eS((0, ew.nV)(t, "workspace" === ec))
              }),
              (en[65] = ec),
              (en[66] = v),
              (en[67] = k))
            : ((v = en[66]), (k = en[67])),
          en[68] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = (0, a.jsx)(eo.d, { stroke: "var(--color-border-subtle)", vertical: !1 })),
              (j = (0, a.jsx)(em.Qr, { unit: "tokens" })),
              (en[68] = w),
              (en[69] = j))
            : ((w = en[68]), (j = en[69])),
          (t = el.W),
          (M = !1),
          (P = "date"),
          (F = 22),
          (W = 0),
          ($ = 32),
          (z = em.ps),
          en[70] !== ex ? ((G = (e) => (0, ev.e)(e, ex)), (en[70] = ex), (en[71] = G)) : (G = en[71]),
          (K = !1),
          (p = (0, ev.j)(c)),
          (en[0] = ej),
          (en[1] = ei?.data),
          (en[2] = ei?.models),
          (en[3] = ei?.total),
          (en[4] = ex),
          (en[5] = eM),
          (en[6] = ep),
          (en[7] = ec),
          (en[8] = eu),
          (en[9] = eg),
          (en[10] = eU),
          (en[11] = t),
          (en[12] = s),
          (en[13] = i),
          (en[14] = u),
          (en[15] = c),
          (en[16] = g),
          (en[17] = h),
          (en[18] = m),
          (en[19] = p),
          (en[20] = f),
          (en[21] = y),
          (en[22] = b),
          (en[23] = x),
          (en[24] = v),
          (en[25] = k),
          (en[26] = w),
          (en[27] = j),
          (en[28] = _),
          (en[29] = M),
          (en[30] = C),
          (en[31] = A),
          (en[32] = S),
          (en[33] = I),
          (en[34] = U),
          (en[35] = L),
          (en[36] = N),
          (en[37] = T),
          (en[38] = D),
          (en[39] = E),
          (en[40] = P),
          (en[41] = R),
          (en[42] = H),
          (en[43] = O),
          (en[44] = B),
          (en[45] = F),
          (en[46] = W),
          (en[47] = $),
          (en[48] = z),
          (en[49] = G),
          (en[50] = K))
      } else
        ((t = en[11]),
          (s = en[12]),
          (i = en[13]),
          (u = en[14]),
          (c = en[15]),
          (g = en[16]),
          (h = en[17]),
          (m = en[18]),
          (p = en[19]),
          (f = en[20]),
          (y = en[21]),
          (b = en[22]),
          (x = en[23]),
          (v = en[24]),
          (k = en[25]),
          (w = en[26]),
          (j = en[27]),
          (_ = en[28]),
          (M = en[29]),
          (C = en[30]),
          (A = en[31]),
          (S = en[32]),
          (I = en[33]),
          (U = en[34]),
          (L = en[35]),
          (N = en[36]),
          (T = en[37]),
          (D = en[38]),
          (E = en[39]),
          (P = en[40]),
          (R = en[41]),
          (H = en[42]),
          (O = en[43]),
          (B = en[44]),
          (F = en[45]),
          (W = en[46]),
          ($ = en[47]),
          (z = en[48]),
          (G = en[49]),
          (K = en[50]))
      en[72] !== t ||
      en[73] !== p ||
      en[74] !== M ||
      en[75] !== P ||
      en[76] !== F ||
      en[77] !== W ||
      en[78] !== $ ||
      en[79] !== z ||
      en[80] !== G ||
      en[81] !== K
        ? ((X = (0, a.jsx)(t, {
            axisLine: M,
            dataKey: P,
            height: F,
            interval: W,
            minTickGap: $,
            tick: z,
            tickFormatter: G,
            tickLine: K,
            ticks: p,
          })),
          (en[72] = t),
          (en[73] = p),
          (en[74] = M),
          (en[75] = P),
          (en[76] = F),
          (en[77] = W),
          (en[78] = $),
          (en[79] = z),
          (en[80] = G),
          (en[81] = K),
          (en[82] = X))
        : (X = en[82])
      let eN = !eM && void 0
      if (
        (en[83] !== ej || en[84] !== g || en[85] !== ec || en[86] !== m
          ? ((q = (0, a.jsx)(eI.L, { activeSeriesKey: ej, hiddenSeriesKeys: g, scope: ec, series: m, unit: "tokens" })),
            (en[83] = ej),
            (en[84] = g),
            (en[85] = ec),
            (en[86] = m),
            (en[87] = q))
          : (q = en[87]),
        en[88] !== eA ? ((Z = null == eA && (0, a.jsx)(em.kr, {})), (en[88] = eA), (en[89] = Z)) : (Z = en[89]),
        en[90] !== eA ? ((V = null != eA ? (0, ew.YZ)(eA) : void 0), (en[90] = eA), (en[91] = V)) : (V = en[91]),
        en[92] !== eN || en[93] !== q || en[94] !== Z || en[95] !== V
          ? ((Q = (0, a.jsx)(ed.m, { active: eN, isAnimationActive: !1, content: q, cursor: Z, position: V })),
            (en[92] = eN),
            (en[93] = q),
            (en[94] = Z),
            (en[95] = V),
            (en[96] = Q))
          : (Q = en[96]),
        en[97] !== g || en[98] !== ec || en[99] !== m || en[100] !== eA || en[101] !== eg)
      ) {
        let e
        ;(en[103] !== g || en[104] !== ec || en[105] !== eA || en[106] !== eg
          ? ((e = (e, t) => {
              let s =
                "outputTokens" === e.key || "uncachedInputTokens" === e.key || "cachedInputTokens" === e.key
                  ? e.key
                  : (t) => t.tokensByModel[e.key]?.totalTokens ?? 0
              return (0, a.jsx)(
                eR.N1,
                {
                  className: (0, r.A)(
                    !eg.reduceMotion && "transition-opacity duration-basic ease-basic motion-reduce:transition-none",
                    g?.has(e.key) && "pointer-events-none opacity-0",
                  ),
                  activeDot: !1,
                  animationDuration: 200,
                  animationEasing: "ease-out",
                  animationInterpolateFn: ew.X2,
                  animationMatchBy: ew.Z5,
                  dataKey: s,
                  dot: !1,
                  isAnimationActive: !eg.reduceMotion && !!eg.animateDataChanges && ("workspace" === ec || null == eA),
                  name: e.key,
                  onMouseEnter: () => {
                    e_(e.key)
                  },
                  onMouseLeave: () => {
                    e_(null)
                  },
                  shape: { visibleLength: null },
                  stroke: eh.Kj[t % eh.Kj.length],
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                  type: "linear",
                },
                e.key,
              )
            }),
            (en[103] = g),
            (en[104] = ec),
            (en[105] = eA),
            (en[106] = eg),
            (en[107] = e))
          : (e = en[107]),
          (J = m.map(e)),
          (en[97] = g),
          (en[98] = ec),
          (en[99] = m),
          (en[100] = eA),
          (en[101] = eg),
          (en[102] = J))
      } else J = en[102]
      return (
        en[108] !== c || en[109] !== h || en[110] !== eA
          ? ((Y = (0, a.jsx)(ek.G, { data: c, pointer: eA, series: h })),
            (en[108] = c),
            (en[109] = h),
            (en[110] = eA),
            (en[111] = Y))
          : (Y = en[111]),
        en[112] !== s ||
        en[113] !== f ||
        en[114] !== y ||
        en[115] !== b ||
        en[116] !== x ||
        en[117] !== v ||
        en[118] !== k ||
        en[119] !== w ||
        en[120] !== j ||
        en[121] !== X ||
        en[122] !== Q ||
        en[123] !== J ||
        en[124] !== Y
          ? ((ee = (0, a.jsxs)(s, {
              "aria-label": f,
              data: y,
              margin: b,
              onMouseDown: x,
              onMouseLeave: v,
              onMouseMove: k,
              children: [w, j, X, Q, J, Y],
            })),
            (en[112] = s),
            (en[113] = f),
            (en[114] = y),
            (en[115] = b),
            (en[116] = x),
            (en[117] = v),
            (en[118] = k),
            (en[119] = w),
            (en[120] = j),
            (en[121] = X),
            (en[122] = Q),
            (en[123] = J),
            (en[124] = Y),
            (en[125] = ee))
          : (ee = en[125]),
        en[126] !== i || en[127] !== _ || en[128] !== C || en[129] !== A || en[130] !== S || en[131] !== ee
          ? ((et = (0, a.jsx)(i, {
              isTooltipDismissed: _,
              onResetHover: C,
              onTooltipDismissedChange: A,
              scope: S,
              children: ee,
            })),
            (en[126] = i),
            (en[127] = _),
            (en[128] = C),
            (en[129] = A),
            (en[130] = S),
            (en[131] = ee),
            (en[132] = et))
          : (et = en[132]),
        en[133] !== u ||
        en[134] !== I ||
        en[135] !== U ||
        en[136] !== L ||
        en[137] !== N ||
        en[138] !== T ||
        en[139] !== D ||
        en[140] !== E ||
        en[141] !== R ||
        en[142] !== H ||
        en[143] !== O ||
        en[144] !== B ||
        en[145] !== et
          ? ((es = (0, a.jsx)(u, {
              activeSeriesKey: I,
              emptyMessage: U,
              hasData: L,
              preservePopulatedCardLayout: N,
              onToggleSeries: T,
              scope: D,
              hiddenSeriesKeys: E,
              series: R,
              status: H,
              title: O,
              total: B,
              children: et,
            })),
            (en[133] = u),
            (en[134] = I),
            (en[135] = U),
            (en[136] = L),
            (en[137] = N),
            (en[138] = T),
            (en[139] = D),
            (en[140] = E),
            (en[141] = R),
            (en[142] = H),
            (en[143] = O),
            (en[144] = B),
            (en[145] = et),
            (en[146] = es))
          : (es = en[146]),
        es
      )
    }
    function eO(e, t) {
      t.preventDefault()
    }
    function eB(e, t) {
      return {
        key: e.key,
        name: e.name,
        color: eh.Kj[t % eh.Kj.length],
        value: (t) =>
          "outputTokens" === e.key || "uncachedInputTokens" === e.key || "cachedInputTokens" === e.key
            ? t[e.key]
            : (t.tokensByModel[e.key]?.totalTokens ?? 0),
      }
    }
    var eF = s("nkTT")
    let eW = (0, eF.a)({
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
      e$ = (0, eF.a)({
        name: "chevron-right-md-regular-16",
        canvas: {
          width: 16,
          height: 16,
          viewBox: "0 0 16 16",
          frame: { x: 0, y: 0, width: 16, height: 16 },
          inkBounds: { x: 5.583374, y: 3.25, width: 5.361816, height: 9.5 },
          visualBounds: { x: 5.583374, y: 3.25, width: 5.361816, height: 9.5 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 5.583374, y: 3.25, width: 5.361816, height: 9.5 },
          center: { x: 8.264282, y: 8 },
          insets: { top: 3.25, right: 5.05481, bottom: 3.25, left: 5.583374 },
          anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.264282, y: 8 }, foreground: { x: 8.264282, y: 8 } },
        },
        capabilities: ["icon"],
        body: '<path d="M5.80317 11.4697C5.51027 11.7626 5.51027 12.2373 5.80317 12.5302C6.09606 12.8231 6.57082 12.8231 6.86371 12.5302L10.6284 8.76557C11.051 8.34259 11.051 7.6573 10.6284 7.23432L6.86371 3.46967C6.57082 3.17678 6.09606 3.17678 5.80317 3.46967C5.51027 3.76256 5.51027 4.23732 5.80317 4.53022L9.27289 7.99994L5.80317 11.4697Z" fill="currentColor"/>',
      })
    var ez = s("bqtn"),
      eG = s("GO7r"),
      eK = s("QyE3")
    let eX = ["feature", "model", "surface", "turn-start"]
    function eq(e) {
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
          ? ((s = (0, a.jsx)("span", { className: "truncate", children: (0, a.jsx)(eZ, { breakdown: c }) })),
            (d[2] = c),
            (d[3] = s))
          : (s = d[3]),
        d[4] !== u || d[5] !== t || d[6] !== s
          ? ((i = (0, a.jsx)(eK.vg, { className: t, "aria-label": u, children: s })),
            (d[4] = u),
            (d[5] = t),
            (d[6] = s),
            (d[7] = i))
          : (i = d[7]),
        d[8] !== c || d[9] !== h
          ? ((o = eX.map((e) =>
              (0, a.jsx)(
                ez.ms.Item,
                {
                  "aria-checked": c === e,
                  RightIcon: c === e ? eG.ALZ : void 0,
                  role: "menuitemradio",
                  onSelect: () => h(e),
                  children: (0, a.jsx)(eZ, { breakdown: e }),
                },
                e,
              ),
            )),
            (d[8] = c),
            (d[9] = h),
            (d[10] = o))
          : (o = d[10]),
        d[11] !== i || d[12] !== o
          ? ((l = (0, a.jsx)(ez.Ab, { align: "start", contentWidth: "menuNarrow", triggerButton: i, children: o })),
            (d[11] = i),
            (d[12] = o),
            (d[13] = l))
          : (l = d[13]),
        l
      )
    }
    function eZ(e) {
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
    var eV = s("dVEH"),
      eQ = s.n(eV)
    function eJ(e, t, s) {
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
          return e.formatMessage(ey[t])
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
          ) || eJ(e, s, "feature")
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
        { key: t, fallback: eQ()(t.replace(/[_:-]+/g, " ")) },
      )
    }
    function eY(e) {
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
        M,
        C,
        A = (0, n.c)(55),
        { buckets: S, days: I, onDaysChange: U, pagination: L, status: N } = e,
        T = (0, o.use)(Q.Wj)?.scope ?? null,
        D = (0, l.A)(),
        [E, P] = (0, o.useState)("feature"),
        [R, H] = (0, o.useState)(!1),
        [O, B] = (0, o.useState)(0)
      A[0] !== E || A[1] !== S || A[2] !== D
        ? ((t =
            null == S
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
                })(S, E, (e) => eJ(D, e, E))),
          (A[0] = E),
          (A[1] = S),
          (A[2] = D),
          (A[3] = t))
        : (t = A[3])
      let F = t
      ;(A[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, a.jsx)(y.X.Header, {
            subtitleWrap: "wrap",
            title: (0, a.jsx)(d.A, {
              id: "consumerUsage.history.title",
              defaultMessage: "Usage history",
              description: "Heading for total usage across plan allowances and purchased credits",
            }),
            subtitle: (0, a.jsx)(d.A, {
              id: "consumerUsage.history.description",
              defaultMessage:
                "See how plan usage and credits were consumed in Work, Codex, and other agentic tasks. Conversations in Chat are not included.",
              description:
                "Description of usage history covering plan allowances and credits for agentic work, excluding Chat conversations",
            }),
          })),
          (A[4] = s))
        : (s = A[4]),
        A[5] !== D
          ? ((i = D.formatMessage({
              id: "consumerAnalyticsPreview.history.period",
              defaultMessage: "Usage history date range",
              description:
                "Accessible label for the date range of total usage history, including plan usage and credits",
            })),
            (A[5] = D),
            (A[6] = i))
          : (i = A[6]),
        A[7] !== U
          ? ((r = (e) => {
              ;(B(0), U(e))
            }),
            (A[7] = U),
            (A[8] = r))
          : (r = A[8]),
        A[9] !== I || A[10] !== i || A[11] !== r
          ? ((u = (0, a.jsx)(X.tS, { ariaLabel: i, days: I, onChange: r })),
            (A[9] = I),
            (A[10] = i),
            (A[11] = r),
            (A[12] = u))
          : (u = A[12]),
        A[13] !== D
          ? ((c = D.formatMessage({
              id: "consumerUsage.history.breakdown",
              defaultMessage: "Group usage history",
              description:
                "Accessible label for grouping total usage by feature, model, surface, or how each turn started",
            })),
            (A[13] = D),
            (A[14] = c))
          : (c = A[14]),
        A[15] !== T || A[16] !== E
          ? ((g = (e) => {
              e !== E && (("model" === e || "surface" === e) && (0, Q.to)(T, "usage_history", e), H(!0), P(e))
            }),
            (A[15] = T),
            (A[16] = E),
            (A[17] = g))
          : (g = A[17]),
        A[18] !== E || A[19] !== c || A[20] !== g
          ? ((m = (0, a.jsx)(eq, { ariaLabel: c, breakdown: E, triggerWidth: "content", onChange: g })),
            (A[18] = E),
            (A[19] = c),
            (A[20] = g),
            (A[21] = m))
          : (m = A[21]),
        A[22] !== u || A[23] !== m
          ? ((p = (0, a.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-2 select-none",
              children: [u, m],
            })),
            (A[22] = u),
            (A[23] = m),
            (A[24] = p))
          : (p = A[24]),
        A[25] !== D
          ? ((b = D.formatMessage({
              id: "consumerUsage.history.chartLabel",
              defaultMessage: "Compare total usage by day, including plan usage and credits.",
              description:
                "Accessible description of relative daily usage across plan allowances and purchased credits",
            })),
            (A[25] = D),
            (A[26] = b))
          : (b = A[26]))
      let W = L?.offsetDays
      ;(A[27] !== I || A[28] !== W ? ((x = (0, f.mV)(I, W)), (A[27] = I), (A[28] = W), (A[29] = x)) : (x = A[29]),
        A[30] !== I || A[31] !== D || A[32] !== L || A[33] !== N.isLoading || A[34] !== N.isUpdating
          ? ((v =
              null == L
                ? void 0
                : (0, a.jsxs)("div", {
                    className: "flex items-center justify-end",
                    children: [
                      (0, a.jsx)(_.$, {
                        "aria-label": D.formatMessage({
                          id: "consumerUsage.history.previousPeriod",
                          defaultMessage: "Previous period",
                          description: "Move the usage history chart to the previous 7-day or 30-day period",
                        }),
                        color: "ghostActive",
                        radius: "large",
                        size: "iconCircle",
                        disabled: N.isLoading || N.isUpdating,
                        onClick: () => {
                          ;(H(!1), B(-1), L.onOffsetDaysChange(L.offsetDays + I))
                        },
                        children: (0, a.jsx)(h.I, { className: "rtl:rotate-180", asset: eW }),
                      }),
                      (0, a.jsx)(_.$, {
                        "aria-label": D.formatMessage({
                          id: "consumerUsage.history.nextPeriod",
                          defaultMessage: "Next period",
                          description:
                            "Move the usage history chart to the next 7-day or 30-day period, up to the current period",
                        }),
                        color: "ghostActive",
                        radius: "large",
                        size: "iconCircle",
                        disabled: 0 === L.offsetDays || N.isLoading || N.isUpdating,
                        onClick: () => {
                          ;(H(!1), B(1), L.onOffsetDaysChange(Math.max(0, L.offsetDays - I)))
                        },
                        children: (0, a.jsx)(h.I, { className: "rtl:rotate-180", asset: e$ }),
                      }),
                    ],
                  })),
            (A[30] = I),
            (A[31] = D),
            (A[32] = L),
            (A[33] = N.isLoading),
            (A[34] = N.isUpdating),
            (A[35] = v))
          : (v = A[35]),
        A[36] !== S || A[37] !== F
          ? ((k =
              null != S && null == F
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
            (A[36] = S),
            (A[37] = F),
            (A[38] = k))
          : (k = A[38]))
      let $ = (F?.data.length ?? I) > 7 ? 18 : 38,
        z = !N.reduceMotion && (R || (0 === O && N.animateDataChanges))
      return (
        A[39] === Symbol.for("react.memo_cache_sentinel") ? ((w = () => H(!1)), (A[39] = w)) : (w = A[39]),
        A[40] !== N || A[41] !== z
          ? ((j = { ...N, animateDataChanges: z, onAnimationEnd: w }), (A[40] = N), (A[41] = z), (A[42] = j))
          : (j = A[42]),
        A[43] !== F ||
        A[44] !== O ||
        A[45] !== b ||
        A[46] !== x ||
        A[47] !== v ||
        A[48] !== k ||
        A[49] !== $ ||
        A[50] !== j
          ? ((M = (0, a.jsx)(eL, {
              consumerAnalytics: !0,
              selectedDayLegend: !0,
              breakdown: "model",
              scope: "consumer",
              isPersonalUsage: !0,
              preservePopulatedCardLayout: !0,
              ariaLabel: b,
              data: F,
              dateRange: x,
              hideTotal: !0,
              rangeDirection: O,
              actions: v,
              emptyMessage: k,
              barSize: $,
              status: j,
            })),
            (A[43] = F),
            (A[44] = O),
            (A[45] = b),
            (A[46] = x),
            (A[47] = v),
            (A[48] = k),
            (A[49] = $),
            (A[50] = j),
            (A[51] = M))
          : (M = A[51]),
        A[52] !== M || A[53] !== p
          ? ((C = (0, a.jsxs)(y.X, {
              children: [s, (0, a.jsxs)(y.X.Content, { className: "gap-3", children: [p, M] })],
            })),
            (A[52] = M),
            (A[53] = p),
            (A[54] = C))
          : (C = A[54]),
        C
      )
    }
    var e1 = s("slpy")
    let e0 = (0, eF.a)({
        name: "chevron-down-md-regular-12",
        canvas: {
          width: 12,
          height: 12,
          viewBox: "0 0 12 12",
          frame: { x: 0, y: 0, width: 12, height: 12 },
          inkBounds: { x: 2.5, y: 4.5, width: 6.999878, height: 3.896484 },
          visualBounds: { x: 2.5, y: 4.5, width: 6.999878, height: 3.896484 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.5, y: 4.5, width: 6.999878, height: 3.896484 },
          center: { x: 5.999939, y: 6.448242 },
          insets: { top: 4.5, right: 2.500122, bottom: 3.603516, left: 2.5 },
          anchors: {
            frame: { x: 6, y: 6 },
            ink: { x: 5.999939, y: 6.448242 },
            foreground: { x: 5.999939, y: 6.448242 },
          },
        },
        capabilities: ["icon"],
        body: '<path d="M8.64645 4.64645C8.84171 4.45118 9.15822 4.45118 9.35348 4.64645C9.54874 4.84171 9.54874 5.15822 9.35348 5.35348L6.53024 8.17672C6.23735 8.46959 5.76258 8.46959 5.46969 8.17672L2.64645 5.35348C2.45118 5.15822 2.45118 4.84171 2.64645 4.64645C2.84171 4.45118 3.15822 4.45118 3.35348 4.64645L5.99996 7.29293L8.64645 4.64645Z" fill="currentColor"/>',
      }),
      e2 = (0, eF.a)({
        name: "chevron-right-md-regular-12",
        canvas: {
          width: 12,
          height: 12,
          viewBox: "0 0 12 12",
          frame: { x: 0, y: 0, width: 12, height: 12 },
          inkBounds: { x: 4, y: 2.5, width: 3.896362, height: 7 },
          visualBounds: { x: 4, y: 2.5, width: 3.896362, height: 7 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 4, y: 2.5, width: 3.896362, height: 7 },
          center: { x: 5.948181, y: 6 },
          insets: { top: 2.5, right: 4.103638, bottom: 2.5, left: 4 },
          anchors: { frame: { x: 6, y: 6 }, ink: { x: 5.948181, y: 6 }, foreground: { x: 5.948181, y: 6 } },
        },
        capabilities: ["icon"],
        body: '<path d="M4.14645 8.64645C3.95118 8.84171 3.95118 9.15822 4.14645 9.35348C4.34171 9.54874 4.65822 9.54874 4.85348 9.35348L7.67672 6.53024C7.96959 6.23735 7.96959 5.76258 7.67672 5.46969L4.85348 2.64645C4.65822 2.45118 4.34171 2.45118 4.14645 2.64645C3.95118 2.84171 3.95118 3.15822 4.14645 3.35348L6.79293 5.99996L4.14645 8.64645Z" fill="currentColor"/>',
      })
    var e3 = s("f4Vb"),
      e4 = s("nsuH")
    function e5(e) {
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
        { period: M, asOf: C, limit: A, breakdown: S, expanded: I, onToggle: U, reduceMotion: L } = e,
        N = (0, l.A)(),
        T = (0, o.useId)()
      w[0] !== N || w[1] !== A || w[2] !== M.interval.endAt || w[3] !== M.interval.startAt || w[4] !== M.status
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
              start: N.formatDate(M.interval.startAt, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC",
              }),
              end: N.formatDate(M.interval.endAt, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC",
              }),
              current: "current" === M.status ? "yes" : "no",
            },
          )),
          (w[0] = N),
          (w[1] = A),
          (w[2] = M.interval.endAt),
          (w[3] = M.interval.startAt),
          (w[4] = M.status),
          (w[5] = t))
        : (t = w[5])
      let D = t
      ;(w[6] !== N || w[7] !== A || w[8] !== M.interval.endAt || w[9] !== M.interval.startAt
        ? ((s = N.formatDateTimeRange(M.interval.startAt, M.interval.endAt, {
            month: "short",
            day: "numeric",
            ...("fiveHour" === A ? { hour: "numeric", minute: "2-digit" } : {}),
            timeZone: "UTC",
          })),
          (w[6] = N),
          (w[7] = A),
          (w[8] = M.interval.endAt),
          (w[9] = M.interval.startAt),
          (w[10] = s))
        : (s = w[10]),
        w[11] !== s
          ? ((i = (0, a.jsx)("span", { className: "min-w-0 whitespace-normal", children: s })),
            (w[11] = s),
            (w[12] = i))
          : (i = w[12]))
      let E = I ? e0 : e2
      ;(w[13] !== E
        ? ((r = (0, a.jsx)(h.I, { className: "shrink-0", asset: E, focusable: "false" })), (w[13] = E), (w[14] = r))
        : (r = w[14]),
        w[15] !== I || w[16] !== D || w[17] !== T || w[18] !== i || w[19] !== r
          ? ((u = (0, a.jsxs)(_.$, {
              className: "gap-2 text-start",
              "aria-controls": T,
              "aria-expanded": I,
              "aria-label": D,
              color: "ghostMuted",
              focusRing: "inset",
              size: "inline",
              onPointerDown: e8,
              children: [i, r],
            })),
            (w[15] = I),
            (w[16] = D),
            (w[17] = T),
            (w[18] = i),
            (w[19] = r),
            (w[20] = u))
          : (u = w[20]),
        w[21] !== D || w[22] !== u
          ? ((c = (0, a.jsx)(e1.m, { content: D, children: u })), (w[21] = D), (w[22] = u), (w[23] = c))
          : (c = w[23]),
        w[24] !== C || w[25] !== N || w[26] !== M.status
          ? ((g =
              "current" === M.status
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
                      (0, a.jsx)(e1.m, {
                        content: (0, a.jsx)(d.A, {
                          id: "consumerUsage.limitHistory.dailyCalculationNotice",
                          defaultMessage: "Calculations run daily. Usage for this period may be out of date.",
                          description:
                            "Explains why the allowance period still open at the last daily calculation may not include recent usage",
                        }),
                        children: (0, a.jsx)(_.$, {
                          "aria-label": N.formatMessage({
                            id: "consumerUsage.limitHistory.staleUsage",
                            defaultMessage: "Usage may be out of date",
                            description:
                              "Accessible label for the explanation of delayed usage calculations for this period",
                          }),
                          color: "ghostTertiary",
                          size: "inline",
                          onClick: e6,
                          children: (0, a.jsx)(eG.ehD, {}),
                        }),
                      }),
                    ],
                  })
                : null),
            (w[24] = C),
            (w[25] = N),
            (w[26] = M.status),
            (w[27] = g))
          : (g = w[27]),
        w[28] !== c || w[29] !== g
          ? ((m = (0, a.jsxs)("th", { className: "px-4 py-3 text-start font-normal", scope: "row", children: [c, g] })),
            (w[28] = c),
            (w[29] = g),
            (w[30] = m))
          : (m = w[30]),
        w[31] !== M.usedBasisPoints
          ? ((p = (0, a.jsx)("td", {
              className: "px-4 py-3 text-end align-top font-semibold tabular-nums",
              children:
                null == M.usedBasisPoints
                  ? (0, a.jsx)(d.A, {
                      id: "consumerAnalyticsPreview.limitHistory.totalUnavailable",
                      defaultMessage: "Not available",
                      description: "The total for this period was not provided; never display it as zero",
                    })
                  : (0, a.jsx)(tt, { basisPoints: M.usedBasisPoints }),
            })),
            (w[31] = M.usedBasisPoints),
            (w[32] = p))
          : (p = w[32]),
        w[33] !== U || w[34] !== p || w[35] !== m
          ? ((f = (0, a.jsxs)("tr", {
              className:
                "cursor-interaction border-t border-default hover:bg-primary-ghost-hover has-[:focus-visible]:bg-primary-ghost-hover",
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
        w[37] !== S || w[38] !== I || w[39] !== M || w[40] !== L
          ? ((y = I ? (0, a.jsx)(e7, { period: M, breakdown: S, reduceMotion: L }) : null),
            (w[37] = S),
            (w[38] = I),
            (w[39] = M),
            (w[40] = L),
            (w[41] = y))
          : (y = w[41]),
        w[42] !== y ? ((b = (0, a.jsx)(ej.N, { initial: !1, children: y })), (w[42] = y), (w[43] = b)) : (b = w[43]),
        w[44] !== T || w[45] !== b
          ? ((x = (0, a.jsx)("td", { id: T, className: "p-0", colSpan: 2, children: b })),
            (w[44] = T),
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
    function e6(e) {
      return e.stopPropagation()
    }
    function e8(e) {
      0 === e.button && e.currentTarget.blur()
    }
    function e7(e) {
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
            k((0, e3.q)(e).height)
          }),
          (p[0] = t))
        : (t = p[0])
      let w = (0, e4.wY)(t),
        j = v ?? "auto"
      return (
        p[1] !== j ? ((s = { height: j }), (p[1] = j), (p[2] = s)) : (s = p[2]),
        p[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = { height: 0 }), (r = { height: 0 }), (p[3] = i), (p[4] = r))
          : ((i = p[3]), (r = p[4])),
        p[5] !== b ? ((u = b ? { duration: 0 } : eg.X7), (p[5] = b), (p[6] = u)) : (u = p[6]),
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
                          .filter(te)
                          .map((e) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                  (0, a.jsx)("dt", { className: "text-secondary", children: eJ(x, e.key, y) }),
                                  (0, a.jsx)("dd", {
                                    className: "text-end tabular-nums",
                                    children: (0, a.jsx)(tt, { basisPoints: e.basisPoints }),
                                  }),
                                ],
                              },
                              e.key,
                            ),
                          ),
                      }),
                      f.accountingComplete && f.breakdown.rows.every(e9)
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
          ? ((m = (0, a.jsx)(eM.P.div, {
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
    function e9(e) {
      return 0 === e.basisPoints
    }
    function te(e) {
      return e.basisPoints > 0
    }
    function tt(e) {
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
    var ts = s("HFSu"),
      ta = s("GDNt"),
      tn = s("ASxG"),
      ti = s("fDv2")
    let tr = tn.object({
      data_as_of: ti.datetime({ offset: !0 }).nullable(),
      coverage_start: ti.datetime({ offset: !0 }).nullable(),
      coverage_complete: tn.boolean(),
      approximate: tn.boolean().default(!0),
      boundary_tolerance_seconds: tn.number().nullable(),
      periods: tn.array(
        tn.object({
          id: tn.string(),
          window_minutes: tn.union([tn.literal(300), tn.literal(10080)]),
          plan_type: tn.string(),
          starts_at: ti.datetime({ offset: !0 }),
          ends_at: ti.datetime({ offset: !0 }),
          accounting_complete: tn.boolean(),
          used_basis_points: tn.number().nullable(),
          breakdowns: tn
            .array(
              tn.object({
                dimension: tn.enum(["thread_source", "turn_trigger", "model", "surface"]),
                rows: tn.array(tn.object({ key: tn.string(), basis_points: tn.number() })),
              }),
            )
            .nullable(),
        }),
      ),
    })
    function to(e) {
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
        M,
        C,
        A,
        S,
        I,
        U,
        L = (0, n.c)(56),
        { isActive: N, isPolling: T, reduceMotion: D } = e,
        E = void 0 === T || T,
        P = (0, c.As)()
      L[0] !== P || L[1] !== N || L[2] !== E
        ? ((t = (function ({ accountId: e, userId: t, authMethod: s }, a = !0, n = !0) {
            return {
              queryKey: ["consumer-plan-limit-history", e, t, 7],
              enabled: a && "chatgpt" === s && null != e && null != t,
              queryFn: async ({ signal: e }) => {
                try {
                  let t = await ts.CodexRequest.safeGet("/wham/usage/plan_limit_history", {
                    parameters: { query: { days: 7 } },
                    signal: e,
                    expectedErrorStatuses: [404],
                  })
                  return tr.parse(t)
                } catch (e) {
                  if (e instanceof ta.fk && 404 === e.status) return null
                  throw e
                }
              },
              retry: !1,
              staleTime: H.D.FIVE_MINUTES,
              refetchInterval: !!n && H.D.FIVE_MINUTES,
              refetchOnWindowFocus: !1,
            }
          })(P, N, E)),
          (L[0] = P),
          (L[1] = N),
          (L[2] = E),
          (L[3] = t))
        : (t = L[3])
      let { data: R, isLoading: O, isError: B, refetch: F } = (0, Z.I)(t),
        W = R ?? void 0
      L[4] !== B || L[5] !== O
        ? ((s = "ready"), O ? (s = "loading") : B && (s = "error"), (L[4] = B), (L[5] = O), (L[6] = s))
        : (s = L[6])
      let $ = (0, l.A)(),
        [z, G] = (0, o.useState)("feature")
      ;(L[7] === Symbol.for("react.memo_cache_sentinel") ? ((i = ["fiveHour", "weekly"]), (L[7] = i)) : (i = L[7]),
        L[8] !== W || L[9] !== s
          ? ((u = i.filter(
              (e) =>
                "ready" !== s ||
                W?.data_as_of == null ||
                0 === W.periods.length ||
                W.periods.some((t) => t.window_minutes === ("fiveHour" === e ? 300 : 10080)),
            )),
            (L[8] = W),
            (L[9] = s),
            (L[10] = u))
          : (u = L[10]))
      let K = u
      ;(L[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (0, a.jsx)(d.A, {
            id: "consumerAnalyticsPreview.limitHistory.title",
            defaultMessage: "Plan usage history",
            description:
              "Analytics section for exploring current and past five-hour and weekly plan allowances separately",
          })),
          (L[11] = g))
        : (g = L[11]),
        L[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, a.jsx)("p", {
              children: (0, a.jsx)(d.A, {
                id: "consumerAnalyticsPreview.limitHistory.description",
                defaultMessage: "See what used each of your plan limits",
                description:
                  "Explains the period-by-period allowance breakdown, separate from total usage and purchased credit history",
              }),
            })),
            (L[12] = h))
          : (h = L[12]),
        L[13] !== z
          ? ((m =
              "turn-start" === z
                ? (0, a.jsx)("p", {
                    children: (0, a.jsx)(d.A, {
                      id: "consumerUsage.limitHistory.tasksOnly",
                      defaultMessage: "By turn start includes Chats only; percentages use the full period limit",
                      description:
                        "Allowance history turn-trigger breakdown excludes other features and need not sum to the period total",
                    }),
                  })
                : null),
            (L[13] = z),
            (L[14] = m))
          : (m = L[14]),
        L[15] !== W?.approximate || L[16] !== s
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
            (L[15] = W?.approximate),
            (L[16] = s),
            (L[17] = p))
          : (p = L[17]),
        L[18] !== W || L[19] !== s
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
            (L[18] = W),
            (L[19] = s),
            (L[20] = f))
          : (f = L[20]),
        L[21] !== m || L[22] !== p || L[23] !== f
          ? ((b = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [h, m, p, f] })),
            (L[21] = m),
            (L[22] = p),
            (L[23] = f),
            (L[24] = b))
          : (b = L[24]),
        L[25] !== $
          ? ((x = $.formatMessage({
              id: "consumerUsage.limitHistory.details",
              defaultMessage: "About plan usage history",
              description: "Accessible label for the tooltip explaining plan usage history coverage and timing",
            })),
            (L[25] = $),
            (L[26] = x))
          : (x = L[26]),
        L[27] === Symbol.for("react.memo_cache_sentinel") ? ((v = (0, a.jsx)(eG.ehD, {})), (L[27] = v)) : (v = L[27]),
        L[28] !== x
          ? ((k = (0, a.jsx)(_.$, { "aria-label": x, color: "ghostTertiary", size: "inline", children: v })),
            (L[28] = x),
            (L[29] = k))
          : (k = L[29]),
        L[30] !== b || L[31] !== k
          ? ((w = (0, a.jsxs)("span", {
              className: "inline-flex items-center gap-2",
              children: [g, (0, a.jsx)(e1.m, { side: "bottom", align: "start", content: b, children: k })],
            })),
            (L[30] = b),
            (L[31] = k),
            (L[32] = w))
          : (w = L[32]),
        L[33] !== $
          ? ((j = $.formatMessage({
              id: "consumerAnalyticsPreview.limitHistory.sharedGroup",
              defaultMessage: "Group plan usage history",
              description:
                "Choose the breakdown for both the five-hour and weekly limit tables without changing their periods, total percentages, or other analytics sections",
            })),
            (L[33] = $),
            (L[34] = j))
          : (j = L[34]),
        L[35] !== z || L[36] !== j
          ? ((M = (0, a.jsx)(eq, { ariaLabel: j, breakdown: z, onChange: G })), (L[35] = z), (L[36] = j), (L[37] = M))
          : (M = L[37]),
        L[38] !== w || L[39] !== M
          ? ((C = (0, a.jsx)(y.X.Header, {
              className: "@max-2xl:flex-col @max-2xl:items-start",
              actionsAlignment: "end",
              title: w,
              actions: M,
            })),
            (L[38] = w),
            (L[39] = M),
            (L[40] = C))
          : (C = L[40]))
      let X = K.length > 1 && "@2xl:grid-cols-2"
      return (
        L[41] !== X ? ((A = (0, r.A)("grid grid-cols-1 items-start gap-6", X)), (L[41] = X), (L[42] = A)) : (A = L[42]),
        L[43] !== z || L[44] !== W || L[45] !== K || L[46] !== D || L[47] !== F || L[48] !== s
          ? ((S = K.map((e) =>
              (0, a.jsx)(
                tl,
                { limit: e, breakdown: z, data: W, state: s, onRetry: () => void F(), reduceMotion: D },
                `${e}:${W?.data_as_of}`,
              ),
            )),
            (L[43] = z),
            (L[44] = W),
            (L[45] = K),
            (L[46] = D),
            (L[47] = F),
            (L[48] = s),
            (L[49] = S))
          : (S = L[49]),
        L[50] !== A || L[51] !== S
          ? ((I = (0, a.jsx)(y.X.Content, {
              className: "gap-4",
              children: (0, a.jsx)("div", { className: A, children: S }),
            })),
            (L[50] = A),
            (L[51] = S),
            (L[52] = I))
          : (I = L[52]),
        L[53] !== C || L[54] !== I
          ? ((U = (0, a.jsxs)(y.X, { id: "consumer-plan-limit-history", className: "@container", children: [C, I] })),
            (L[53] = C),
            (L[54] = I),
            (L[55] = U))
          : (U = L[55]),
        U
      )
    }
    function tl(e) {
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
        [j, M] = (0, o.useState)(),
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
          (i = void 0 !== j && null == j ? null : (r?.find((e) => e.id === j)?.id ?? r?.find(td)?.id ?? r?.[0]?.id)),
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
              children: (0, a.jsx)(tu, {
                limit: p,
                breakdown: f,
                report: s,
                visiblePeriods: r,
                selectedId: S,
                onSelect: M,
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
                ? (0, a.jsx)(_.$, {
                    className: "self-start",
                    color: "secondary",
                    size: "compact",
                    onClick: () => {
                      ;(C && !t.slice(0, 5).some((e) => e.id === S) && M(void 0), A(!C))
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
    function td(e) {
      return "current" === e.status
    }
    function tu(e) {
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
            ? ((e = (0, a.jsx)(S.u, {
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
                  : (0, a.jsx)(_.$, {
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
          c[4] !== t ? ((s = (0, a.jsx)(I.ic, { label: e, control: t })), (c[4] = t), (c[5] = s)) : (s = c[5]),
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
                e5,
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
    function tc(e) {
      let t,
        s = (0, n.c)(5),
        { isActive: i, isPolling: r, reduceMotion: o, scope: l } = e,
        d = void 0 === r || r,
        u = (0, c.As)()
      if (!(0, x.Zj)("business" === (void 0 === l ? "consumer" : l) ? "1014047933" : "1504786190")) return null
      let g = `${u.accountId}:${u.userId}`
      return (
        s[0] !== i || s[1] !== d || s[2] !== o || s[3] !== g
          ? ((t = (0, a.jsx)(to, { isActive: i, isPolling: d, reduceMotion: o }, g)),
            (s[0] = i),
            (s[1] = d),
            (s[2] = o),
            (s[3] = g),
            (s[4] = t))
          : (t = s[4]),
        t
      )
    }
    var tg = s("T1PX")
    function th(e) {
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
    function tm(e) {
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
    function tp(e) {
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
    let tf = ["five_hour_limit_percent", "weekly_limit_percent", "balance_usage_credits"]
    var ty = s("CpsU"),
      tb = s.n(ty),
      tx = s("D6V5")
    let tv = (0, v.vU)(R.u, ({ accountId: e, userId: t, threads: s }, { scope: a }) => {
      let n = s.filter((e) => !(0, tx.I3)(e)).sort((e, t) => t.updatedAt - e.updatedAt || e.id.localeCompare(t.id)),
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
          for (let n of tb()(i, 2)) {
            e.throwIfAborted()
            let i = await Promise.all(n.map((e) => (0, E.V)(a, L.fI).getSubagentDescendantSnapshot((0, k.JXB)(e.id))))
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
          for (let t of tb()(r, 2)) {
            e.throwIfAborted()
            let s = await Promise.all(
              t.map((t) =>
                ts.CodexRequest.safePost("/wham/usage/thread_usage/query_v2", {
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
    function tk(e) {
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
      let { data: p, isPending: f, isError: y, isSuccess: b, refetch: x } = (0, v._U)(O, t, s)
      if ((!g && (b || y) && h(!0), f || y)) {
        let e, t, s
        return (
          r[5] !== y || r[6] !== f ? ((e = tA(y, f)), (r[5] = y), (r[6] = f), (r[7] = e)) : (e = r[7]),
          r[8] !== x ? ((t = () => void x()), (r[8] = x), (r[9] = t)) : (t = r[9]),
          r[10] !== e || r[11] !== t
            ? ((s = (0, a.jsx)(tj, { rows: void 0, status: e, onRetry: t })), (r[10] = e), (r[11] = t), (r[12] = s))
            : (s = r[12]),
          s
        )
      }
      return (
        r[13] !== l || r[14] !== c || r[15] !== p || r[16] !== u
          ? ((i = (0, a.jsx)(tw, { isPolling: c, accountId: l, userId: u, threads: p })),
            (r[13] = l),
            (r[14] = c),
            (r[15] = p),
            (r[16] = u),
            (r[17] = i))
          : (i = r[17]),
        i
      )
    }
    function tw(e) {
      let t,
        s,
        i,
        r,
        l,
        d,
        u = (0, n.c)(18),
        { accountId: c, isPolling: g, userId: h, threads: m } = e,
        [p, f] = (0, o.useState)(!1)
      u[0] !== c || u[1] !== m || u[2] !== h
        ? ((t = { accountId: c, userId: h, threads: m }), (u[0] = c), (u[1] = m), (u[2] = h), (u[3] = t))
        : (t = u[3])
      let y = g || !p
      u[4] !== y ? ((s = { enabled: y }), (u[4] = y), (u[5] = s)) : (s = u[5])
      let { data: b, isPending: x, isError: k, isSuccess: w, refetch: j } = (0, v._U)(tv, t, s)
      ;(!p && (w || k) && f(!0),
        u[6] !== b?.rows || u[7] !== m.length
          ? ((i = 0 === m.length ? [] : b?.rows), (u[6] = b?.rows), (u[7] = m.length), (u[8] = i))
          : (i = u[8]))
      let _ = m.length > 0 && x
      return (
        u[9] !== k || u[10] !== _ ? ((r = tA(k, _)), (u[9] = k), (u[10] = _), (u[11] = r)) : (r = u[11]),
        u[12] !== j ? ((l = () => void j()), (u[12] = j), (u[13] = l)) : (l = u[13]),
        u[14] !== i || u[15] !== r || u[16] !== l
          ? ((d = (0, a.jsx)(tj, { rows: i, status: r, onRetry: l })),
            (u[14] = i),
            (u[15] = r),
            (u[16] = l),
            (u[17] = d))
          : (d = u[17]),
        d
      )
    }
    function tj(e) {
      let t,
        s,
        i,
        r,
        l,
        u,
        c,
        g = (0, n.c)(27),
        { rows: h, status: m, onRetry: p, defaultExpandedThreadId: f } = e,
        x = (0, o.useId)(),
        [v, k] = (0, o.useState)(!1),
        [w, j] = (0, o.useState)("weekly_limit_percent")
      if (g[0] !== h || g[1] !== w) {
        let e
        ;(g[4] !== h
          ? ((e = (e) =>
              "balance_usage_credits" === e ||
              h?.some((t) => {
                let { usage: s } = t
                return null != tC(s, e)
              })),
            (g[4] = h),
            (g[5] = e))
          : (e = g[5]),
          (s = (t = tf.filter(e)).includes(w) ? w : (t[0] ?? "balance_usage_credits")),
          (g[0] = h),
          (g[1] = w),
          (g[2] = t),
          (g[3] = s))
      } else ((t = g[2]), (s = g[3]))
      let M = s
      g[6] !== M || g[7] !== h
        ? ((i = h?.slice().sort((e, t) => {
            let s = tC(e.usage, M),
              a = tC(t.usage, M)
            return null == s ? +(null != a) : null == a ? -1 : a - s
          })),
          (g[6] = M),
          (g[7] = h),
          (g[8] = i))
        : (i = g[8])
      let C = i
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
        g[11] !== M ||
        g[12] !== t ||
        g[13] !== p ||
        g[14] !== v ||
        g[15] !== C ||
        g[16] !== m ||
        g[17] !== x
          ? ((l = (0, a.jsx)(b.t, {
              children: (0, a.jsx)(t_, {
                id: x,
                rows: C,
                status: m,
                onRetry: p,
                metric: M,
                metrics: t,
                setMetric: j,
                showAll: v,
                defaultExpandedThreadId: f,
              }),
            })),
            (g[10] = f),
            (g[11] = M),
            (g[12] = t),
            (g[13] = p),
            (g[14] = v),
            (g[15] = C),
            (g[16] = m),
            (g[17] = x),
            (g[18] = l))
          : (l = g[18]),
        g[19] !== h || g[20] !== v || g[21] !== m || g[22] !== x
          ? ((u =
              "ready" === m && null != h && h.length > 5
                ? (0, a.jsx)(_.$, {
                    className: "self-start",
                    "aria-controls": x,
                    "aria-expanded": v,
                    color: "secondary",
                    size: "compact",
                    onClick: () => k(!v),
                    children: (0, a.jsx)(d.A, {
                      id: "consumerAnalyticsPreview.chats.toggleRows",
                      defaultMessage: "{expanded, select, yes {Show less} other {Show more}}",
                      description: "Expand or collapse the full chat table",
                      values: { expanded: v ? "yes" : "no" },
                    }),
                  })
                : null),
            (g[19] = h),
            (g[20] = v),
            (g[21] = m),
            (g[22] = x),
            (g[23] = u))
          : (u = g[23]),
        g[24] !== l || g[25] !== u
          ? ((c = (0, a.jsxs)(y.X, {
              id: "consumer-top-chats",
              children: [r, (0, a.jsxs)(y.X.Content, { className: "gap-3", children: [l, u] })],
            })),
            (g[24] = l),
            (g[25] = u),
            (g[26] = c))
          : (c = g[26]),
        c
      )
    }
    function t_(e) {
      let t,
        s,
        i,
        l,
        u,
        c,
        g,
        h,
        p,
        f,
        y = (0, n.c)(54),
        {
          id: b,
          rows: x,
          status: v,
          onRetry: k,
          metric: w,
          metrics: j,
          setMetric: M,
          showAll: C,
          defaultExpandedThreadId: A,
        } = e,
        U = (0, o.useId)(),
        L = (0, tg.I)(),
        [N, T] = (0, o.useState)(A ?? null)
      if (
        y[0] !== N ||
        y[1] !== U ||
        y[2] !== b ||
        y[3] !== w ||
        y[4] !== j ||
        y[5] !== k ||
        y[6] !== L ||
        y[7] !== x ||
        y[8] !== M ||
        y[9] !== C ||
        y[10] !== v
      ) {
        g = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            n,
            o,
            h,
            p = x?.slice(0, C ? void 0 : 5)
          if ((null == N || ("ready" === v && p?.some((e) => e.thread.id === N)) || T(null), "loading" === v)) {
            let e
            ;(y[18] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(S.u, {
                  children: (0, a.jsx)(d.A, {
                    id: "consumerAnalyticsPreview.chats.loading",
                    defaultMessage: "Loading chat usage…",
                    description: "Loading the consumer chat-usage table",
                  }),
                })),
                (y[18] = e))
              : (e = y[18]),
              (g = e))
            break e
          }
          if ("error" === v) {
            let e, t, s
            ;(y[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(d.A, {
                  id: "consumerAnalyticsPreview.chats.error",
                  defaultMessage: "Couldn't load chat usage",
                  description: "Chat usage could not be fetched; previous results are not presented as fresh usage",
                })),
                (y[19] = e))
              : (e = y[19]),
              y[20] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, a.jsx)(d.A, {
                    id: "consumerAnalyticsPreview.chats.retry",
                    defaultMessage: "Retry",
                    description: "Reload chat usage",
                  })),
                  (y[20] = t))
                : (t = y[20]),
              y[21] !== k
                ? ((s = (0, a.jsx)(I.ic, {
                    label: e,
                    control: (0, a.jsx)(_.$, { color: "secondary", size: "compact", onClick: k, children: t }),
                  })),
                  (y[21] = k),
                  (y[22] = s))
                : (s = y[22]),
              (g = s))
            break e
          }
          if (null == x || 0 === x.length) {
            let e
            ;(y[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(m.W, {
                  layout: "settings-row",
                  children: (0, a.jsx)(d.A, {
                    id: "consumerUsage.chats.empty",
                    defaultMessage: "No recent chats on this device",
                    description: "No local root tasks were active in the last thirty days",
                  }),
                })),
                (y[23] = e))
              : (e = y[23]),
              (g = e))
            break e
          }
          if (
            ((c = "@container min-w-0 overflow-x-auto"),
            (s = b),
            (i = "w-full text-sm leading-5 font-normal"),
            y[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)("col", {})), (y[24] = e))
              : (e = y[24]),
            y[25] !== j)
          ) {
            let e
            ;(y[27] !== j.length
              ? ((e = (e) =>
                  (0, a.jsx)(
                    "col",
                    {
                      className: (0, r.A)(
                        3 === j.length && "w-1/6",
                        2 === j.length && "w-1/4",
                        1 === j.length && "w-1/3",
                      ),
                    },
                    e,
                  )),
                (y[27] = j.length),
                (y[28] = e))
              : (e = y[28]),
              (n = j.map(e)),
              (y[25] = j),
              (y[26] = n))
          } else n = y[26]
          if (
            (y[29] !== n
              ? ((l = (0, a.jsxs)("colgroup", { children: [e, n] })), (y[29] = n), (y[30] = l))
              : (l = y[30]),
            y[31] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (0, a.jsx)("th", {
                  className: "py-2 ps-10 pe-4 text-start font-normal",
                  scope: "col",
                  children: (0, a.jsx)(d.A, {
                    id: "consumerAnalyticsPreview.chats.chat",
                    defaultMessage: "Chat",
                    description: "Column heading for the chat title",
                  }),
                })),
                (y[31] = o))
              : (o = y[31]),
            y[32] !== U || y[33] !== w || y[34] !== j || y[35] !== M)
          ) {
            let e
            ;(y[37] !== U || y[38] !== w || y[39] !== M
              ? ((e = (e) =>
                  (0, a.jsx)(
                    "th",
                    {
                      className: "py-2 ps-2 pe-6 text-end font-normal",
                      scope: "col",
                      "aria-labelledby": `${U}-${e}`,
                      "aria-sort": e === w ? "descending" : "none",
                      children: (0, a.jsx)("div", {
                        className: "flex justify-end",
                        children: (0, a.jsx)(_.$, {
                          color: "ghostMuted",
                          size: "inline",
                          onClick: () => M(e),
                          children: (0, a.jsx)("span", {
                            id: `${U}-${e}`,
                            className: "text-end",
                            children: (0, a.jsx)(th, { metric: e }),
                          }),
                        }),
                      }),
                    },
                    e,
                  )),
                (y[37] = U),
                (y[38] = w),
                (y[39] = M),
                (y[40] = e))
              : (e = y[40]),
              (h = j.map(e)),
              (y[32] = U),
              (y[33] = w),
              (y[34] = j),
              (y[35] = M),
              (y[36] = h))
          } else h = y[36]
          ;(y[41] !== h
            ? ((u = (0, a.jsx)("thead", {
                className: "text-xs leading-5 text-secondary",
                children: (0, a.jsxs)("tr", { children: [o, h] }),
              })),
              (y[41] = h),
              (y[42] = u))
            : (u = y[42]),
            (t = p?.map((e) =>
              (0, a.jsx)(
                tM,
                {
                  row: e,
                  metric: w,
                  metrics: j,
                  expanded: e.thread.id === N,
                  onToggle: () => T(e.thread.id === N ? null : e.thread.id),
                  reduceMotion: L,
                },
                e.thread.id,
              ),
            )))
        }
        ;((y[0] = N),
          (y[1] = U),
          (y[2] = b),
          (y[3] = w),
          (y[4] = j),
          (y[5] = k),
          (y[6] = L),
          (y[7] = x),
          (y[8] = M),
          (y[9] = C),
          (y[10] = v),
          (y[11] = t),
          (y[12] = s),
          (y[13] = i),
          (y[14] = l),
          (y[15] = u),
          (y[16] = c),
          (y[17] = g))
      } else ((t = y[11]), (s = y[12]), (i = y[13]), (l = y[14]), (u = y[15]), (c = y[16]), (g = y[17]))
      return g !== Symbol.for("react.early_return_sentinel")
        ? g
        : (y[43] !== t ? ((h = (0, a.jsx)("tbody", { children: t })), (y[43] = t), (y[44] = h)) : (h = y[44]),
          y[45] !== s || y[46] !== i || y[47] !== l || y[48] !== u || y[49] !== h
            ? ((p = (0, a.jsxs)("table", { id: s, className: i, children: [l, u, h] })),
              (y[45] = s),
              (y[46] = i),
              (y[47] = l),
              (y[48] = u),
              (y[49] = h),
              (y[50] = p))
            : (p = y[50]),
          y[51] !== c || y[52] !== p
            ? ((f = (0, a.jsx)("div", { className: c, children: p })), (y[51] = c), (y[52] = p), (y[53] = f))
            : (f = y[53]),
          f)
    }
    function tM(e) {
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
        C,
        A,
        S,
        I,
        U,
        T,
        E,
        P,
        R = (0, n.c)(69),
        { row: H, metric: O, metrics: B, expanded: F, onToggle: W, reduceMotion: $ } = e,
        z = (0, D.M0)(),
        G = (0, o.useId)(),
        [K, X] = (0, o.useState)()
      R[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => {
            X((0, e3.q)(e).height)
          }),
          (R[0] = t))
        : (t = R[0])
      let q = (0, e4.wY)(t),
        Z = (0, v._U)(N.e, { hostId: L.fI, threadId: (0, k.JXB)(H.thread.id) }) ?? (0, w.Vm)(H.thread, w.wp),
        V = F ? "bg-text/3" : "hover:bg-primary-ghost-hover has-[:focus-visible]:bg-primary-ghost-hover"
      R[1] !== V
        ? ((s = (0, r.A)("group cursor-interaction border-t border-default", V)), (R[1] = V), (R[2] = s))
        : (s = R[2])
      let Q = `${G}-trigger`,
        J = `${G}-details`,
        Y = `${G}-title`,
        ee = F && "rotate-90",
        et = $ && "transition-none"
      ;(R[3] !== ee || R[4] !== et
        ? ((i = (0, r.A)("shrink-0 text-secondary transition-transform duration-relaxed ease-enter-snappy", ee, et)),
          (R[3] = ee),
          (R[4] = et),
          (R[5] = i))
        : (i = R[5]),
        R[6] !== i
          ? ((l = (0, a.jsx)(h.I, { className: i, asset: e$, focusable: "false" })), (R[6] = i), (R[7] = l))
          : (l = R[7]))
      let es = `${G}-title`
      if (
        (R[8] !== Z
          ? ((u =
              Z ||
              (0, a.jsx)(d.A, {
                id: "consumerUsage.chats.untitled",
                defaultMessage: "Untitled chat",
                description: "Fallback title for a chat without a name or preview",
              })),
            (R[8] = Z),
            (R[9] = u))
          : (u = R[9]),
        R[10] !== es || R[11] !== u
          ? ((c = (0, a.jsx)(M.E, { id: es, className: "min-w-0 flex-1", animateOnGroupHover: !0, children: u })),
            (R[10] = es),
            (R[11] = u),
            (R[12] = c))
          : (c = R[12]),
        R[13] !== F || R[14] !== l || R[15] !== c || R[16] !== Q || R[17] !== J || R[18] !== Y
          ? ((g = (0, a.jsx)("th", {
              className: "max-w-0 px-4 py-2.5 text-start font-normal text-default",
              scope: "row",
              children: (0, a.jsxs)(_.$, {
                id: Q,
                className: "w-full gap-2 text-start",
                "aria-controls": J,
                "aria-expanded": F,
                "aria-labelledby": Y,
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                children: [l, c],
              }),
            })),
            (R[13] = F),
            (R[14] = l),
            (R[15] = c),
            (R[16] = Q),
            (R[17] = J),
            (R[18] = Y),
            (R[19] = g))
          : (g = R[19]),
        R[20] !== B || R[21] !== H.usage)
      ) {
        let e
        ;(R[23] !== H.usage
          ? ((e = (e) =>
              (0, a.jsx)(
                "td",
                {
                  className: "py-2.5 ps-2 pe-6 text-end tabular-nums",
                  children: (0, a.jsx)(tm, { value: tC(H.usage, e), metric: e }),
                },
                e,
              )),
            (R[23] = H.usage),
            (R[24] = e))
          : (e = R[24]),
          (m = B.map(e)),
          (R[20] = B),
          (R[21] = H.usage),
          (R[22] = m))
      } else m = R[22]
      R[25] !== W || R[26] !== g || R[27] !== m || R[28] !== s
        ? ((p = (0, a.jsxs)("tr", { className: s, onClick: W, children: [g, m] })),
          (R[25] = W),
          (R[26] = g),
          (R[27] = m),
          (R[28] = s),
          (R[29] = p))
        : (p = R[29])
      let ea = !F,
        en = B.length + 1,
        ei = `${G}-details`,
        er = F ? "opacity-100" : "opacity-0",
        eo = $ && "transition-none"
      R[30] !== er || R[31] !== eo
        ? ((f = (0, r.A)("overflow-hidden transition-opacity duration-basic ease-out", er, eo)),
          (R[30] = er),
          (R[31] = eo),
          (R[32] = f))
        : (f = R[32])
      let el = `${G}-title`,
        ed = !F,
        eu = !F,
        ec = F ? (K ?? "auto") : 0
      R[33] !== ec ? ((y = { height: ec }), (R[33] = ec), (R[34] = y)) : (y = R[34])
      let eh = 0.3 * !$
      return (
        R[35] !== eh ? ((b = { duration: eh, ease: eg.Wu }), (R[35] = eh), (R[36] = b)) : (b = R[36]),
        R[37] !== O || R[38] !== H
          ? ((x = (0, a.jsx)(tp, { row: H, metric: O })), (R[37] = O), (R[38] = H), (R[39] = x))
          : (x = R[39]),
        R[40] !== z || R[41] !== H.thread.id
          ? ((j = () => z((0, k.JXB)(H.thread.id), L.fI)), (R[40] = z), (R[41] = H.thread.id), (R[42] = j))
          : (j = R[42]),
        R[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)(d.A, {
              id: "consumerUsage.chats.openInChat",
              defaultMessage: "Open chat",
              description: "Open the chat whose usage breakdown is expanded",
            })),
            (A = (0, a.jsx)(eG.$XR, {})),
            (R[43] = C),
            (R[44] = A))
          : ((C = R[43]), (A = R[44])),
        R[45] !== j
          ? ((S = (0, a.jsxs)(_.$, {
              className: "underline-offset-2 hover:underline focus-visible:underline",
              color: "ghostMuted",
              size: "inline",
              onClick: j,
              children: [C, A],
            })),
            (R[45] = j),
            (R[46] = S))
          : (S = R[46]),
        R[47] !== q || R[48] !== x || R[49] !== S
          ? ((I = (0, a.jsxs)("div", {
              ref: q,
              className: "flex flex-col items-start gap-3 ps-10 pe-6 pt-1.5 pb-4",
              children: [x, S],
            })),
            (R[47] = q),
            (R[48] = x),
            (R[49] = S),
            (R[50] = I))
          : (I = R[50]),
        R[51] !== ei ||
        R[52] !== f ||
        R[53] !== el ||
        R[54] !== ed ||
        R[55] !== eu ||
        R[56] !== y ||
        R[57] !== b ||
        R[58] !== I
          ? ((U = (0, a.jsx)(eM.P.section, {
              id: ei,
              className: f,
              "aria-labelledby": el,
              "aria-hidden": ed,
              inert: eu,
              animate: y,
              initial: !1,
              transition: b,
              children: I,
            })),
            (R[51] = ei),
            (R[52] = f),
            (R[53] = el),
            (R[54] = ed),
            (R[55] = eu),
            (R[56] = y),
            (R[57] = b),
            (R[58] = I),
            (R[59] = U))
          : (U = R[59]),
        R[60] !== en || R[61] !== U
          ? ((T = (0, a.jsx)("td", { className: "p-0", colSpan: en, children: U })),
            (R[60] = en),
            (R[61] = U),
            (R[62] = T))
          : (T = R[62]),
        R[63] !== ea || R[64] !== T
          ? ((E = (0, a.jsx)("tr", { className: "bg-text/3", "aria-hidden": ea, children: T })),
            (R[63] = ea),
            (R[64] = T),
            (R[65] = E))
          : (E = R[65]),
        R[66] !== p || R[67] !== E
          ? ((P = (0, a.jsxs)(a.Fragment, { children: [p, E] })), (R[66] = p), (R[67] = E), (R[68] = P))
          : (P = R[68]),
        P
      )
    }
    function tC(e, t) {
      return null == e || "unavailable" === e.data_status || null == e[t] ? null : Number(e[t])
    }
    function tA(e, t) {
      return e ? "error" : t ? "loading" : "ready"
    }
    function tS(e) {
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
        _ = (0, n.c)(49),
        { enabled: M, isPolling: C, reduceMotion: A } = e,
        S = void 0 === C || C,
        I = (0, l.A)(),
        [U, L] = (0, o.useState)(7),
        [N, T] = (0, o.useState)("product"),
        [D, E] = (0, o.useState)()
      _[0] !== N || _[1] !== U || _[2] !== M || _[3] !== S
        ? ((t = { isPolling: S, balanceUnit: "usd", breakdown: N, days: U, enabled: M, scope: "workspace" }),
          (_[0] = N),
          (_[1] = U),
          (_[2] = M),
          (_[3] = S),
          (_[4] = t))
        : (t = _[4])
      let { data: P, isError: R, isLoading: H, refetch: O } = (0, f.X6)(t)
      _[5] !== D?.data ? ((s = D?.data.some(tL)), (_[5] = D?.data), (_[6] = s)) : (s = _[6])
      let B = s,
        F = H && !R && !!B,
        W = F ? D : P,
        $ = W?.dataFreshnessTimestamp
      ;(_[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, a.jsx)(d.A, {
            id: "settings.usage.billing.spend.history.title",
            defaultMessage: "Spend history",
            description: "Heading for the enterprise workspace member's native USD spend history",
          })),
          (_[7] = i))
        : (i = _[7]),
        _[8] !== I || _[9] !== $
          ? ((r =
              null == $
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
                    values: { date: K($, I) },
                  })),
            (_[8] = I),
            (_[9] = $),
            (_[10] = r))
          : (r = _[10]),
        _[11] !== I
          ? ((u = I.formatMessage({
              id: "settings.usage.billing.spend.history.periodLabel",
              defaultMessage: "Spend history time range",
              description: "Accessible label for the seven-day or thirty-day range of the native USD spend history",
            })),
            (_[11] = I),
            (_[12] = u))
          : (u = _[12]),
        _[13] !== W
          ? ((c = (e) => {
              ;(E(W), L(e))
            }),
            (_[13] = W),
            (_[14] = c))
          : (c = _[14]),
        _[15] !== U || _[16] !== u || _[17] !== c
          ? ((g = (0, a.jsx)(X.tS, { ariaLabel: u, days: U, onChange: c })),
            (_[15] = U),
            (_[16] = u),
            (_[17] = c),
            (_[18] = g))
          : (g = _[18]),
        _[19] !== I
          ? ((h = I.formatMessage({
              id: "settings.usage.billing.spend.history.breakdownLabel",
              defaultMessage: "Group spend history",
              description:
                "Accessible label for the product, model, reasoning effort, or speed breakdown of the native USD spend history",
            })),
            (_[19] = I),
            (_[20] = h))
          : (h = _[20]),
        _[21] !== W
          ? ((m = (e) => {
              ;(E(W?.data.some(tI) ? void 0 : W), T(e))
            }),
            (_[21] = W),
            (_[22] = m))
          : (m = _[22]),
        _[23] !== N || _[24] !== m || _[25] !== h
          ? ((p = (0, a.jsx)(X.Sv, { ariaLabel: h, breakdown: N, scope: "workspace", onChange: m })),
            (_[23] = N),
            (_[24] = m),
            (_[25] = h),
            (_[26] = p))
          : (p = _[26]),
        _[27] !== p || _[28] !== g
          ? ((b = (0, a.jsxs)("div", { className: "flex flex-wrap items-center justify-end gap-2", children: [g, p] })),
            (_[27] = p),
            (_[28] = g),
            (_[29] = b))
          : (b = _[29]),
        _[30] !== b || _[31] !== r
          ? ((x = (0, a.jsx)(y.X.Header, { actionsAlignment: "end", title: i, subtitle: r, actions: b })),
            (_[30] = b),
            (_[31] = r),
            (_[32] = x))
          : (x = _[32]))
      let z = null != D && !B
      return (
        _[33] !== O
          ? ((v = () => {
              O()
            }),
            (_[33] = O),
            (_[34] = v))
          : (v = _[34]),
        _[35] !== R || _[36] !== H || _[37] !== F || _[38] !== A || _[39] !== z || _[40] !== v
          ? ((k = { isError: R, isLoading: H, isUpdating: F, preserveEmptyLayout: z, reduceMotion: A, onRetry: v }),
            (_[35] = R),
            (_[36] = H),
            (_[37] = F),
            (_[38] = A),
            (_[39] = z),
            (_[40] = v),
            (_[41] = k))
          : (k = _[41]),
        _[42] !== N || _[43] !== W || _[44] !== k
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
            (_[42] = N),
            (_[43] = W),
            (_[44] = k),
            (_[45] = w))
          : (w = _[45]),
        _[46] !== x || _[47] !== w
          ? ((j = (0, a.jsxs)(y.X, { children: [x, w] })), (_[46] = x), (_[47] = w), (_[48] = j))
          : (j = _[48]),
        j
      )
    }
    function tI(e) {
      let { values: t } = e
      return Object.values(t).some(tU)
    }
    function tU(e) {
      return 0 !== e
    }
    function tL(e) {
      let { values: t } = e
      return Object.values(t).some(tN)
    }
    function tN(e) {
      return 0 !== e
    }
    function tT(e) {
      let t,
        s = (0, n.c)(7),
        {
          canViewCreditSettings: i,
          isUsdWorkspace: r,
          isPolling: o,
          reduceMotion: l,
          scope: d,
          workspaceTaskUsage: u,
        } = e,
        c = void 0 === i || i,
        g = void 0 !== r && r,
        h = void 0 === o || o,
        m = void 0 !== l && l,
        p = void 0 === d ? "workspace" : d,
        f = "workspace" === p || (void 0 !== u && u)
      return (
        s[0] !== c || s[1] !== h || s[2] !== g || s[3] !== m || s[4] !== p || s[5] !== f
          ? ((t = (0, a.jsx)(tD, {
              canViewCreditSettings: c,
              isUsdWorkspace: g,
              isPolling: h,
              reduceMotion: m,
              scope: p,
              workspaceTaskUsage: f,
            })),
            (s[0] = c),
            (s[1] = h),
            (s[2] = g),
            (s[3] = m),
            (s[4] = p),
            (s[5] = f),
            (s[6] = t))
          : (t = s[6]),
        t
      )
    }
    function tD(e) {
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
        L,
        N,
        T,
        D,
        E,
        P,
        R,
        H,
        O,
        B,
        W,
        $,
        z,
        G,
        Z,
        ee,
        et,
        es,
        en,
        ei,
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
        e_ = (0, n.c)(376),
        {
          canViewCreditSettings: eM,
          isActive: eC,
          isUsdWorkspace: eA,
          isPolling: eS,
          reduceMotion: eI,
          scope: eU,
          workspaceTaskUsage: eL,
        } = e,
        eN = void 0 === eC || eC,
        eT = void 0 !== eA && eA,
        eD = void 0 === eS || eS,
        eE = void 0 !== eI && eI,
        eP = (0, o.use)(Q.Wj)?.scope ?? null,
        eR = (0, l.A)(),
        { accountId: eO, userId: eB } = (0, c.As)(),
        { data: eF } = (0, g.YL)(),
        eW = "workspace" === eU ? (eF?.id ?? null) : eO,
        e$ = "consumer" === eU,
        ez = (0, x.Zj)(!!e$ && "393259752"),
        eG = (0, x.Zj)("business" === eU && "1014047933"),
        eK = (e$ && ez) || eG,
        eX = (0, x.Zj)(!!eK && !eL && "1034085511"),
        [eq, eZ] = (0, o.useState)(7),
        [eV, eQ] = (0, o.useState)(0),
        [eJ, e1] = (0, o.useState)("surface"),
        [e0, e2] = (0, o.useState)(null),
        [e3, e4] = (0, o.useState)(null),
        [e5, e6] = (0, o.useState)(7),
        [e8, e7] = (0, o.useState)(null),
        [e9, te] = (0, o.useState)("workspace" === eU ? 30 : 7),
        tt = eW ?? null,
        ts = eB ?? null
      ;(e_[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { hasManualSelection: !1, hasResolved: !1 }),
          (s = { hasManualSelection: !1, hasResolved: !1 }),
          (u = { hasManualSelection: !1, hasResolved: !1 }),
          (e_[0] = t),
          (e_[1] = s),
          (e_[2] = u))
        : ((t = e_[0]), (s = e_[1]), (u = e_[2])),
        e_[3] !== eU || e_[4] !== tt || e_[5] !== ts
          ? ((v = { accountId: tt, userId: ts, scope: eU, usage: t, tokens: s, tools: u }),
            (e_[3] = eU),
            (e_[4] = tt),
            (e_[5] = ts),
            (e_[6] = v))
          : (v = e_[6]))
      let [ta, tn] = (0, o.useState)(v),
        ti = "workspace" === eU || (ta.accountId === (eW ?? null) && ta.userId === (eB ?? null) && ta.scope === eU)
      ti ||
        (tn({
          accountId: eW ?? null,
          userId: eB ?? null,
          scope: eU,
          usage: { hasManualSelection: !1, hasResolved: !1 },
          tokens: { hasManualSelection: !1, hasResolved: !1 },
          tools: { hasManualSelection: !1, hasResolved: !1 },
        }),
        eZ(7),
        eQ(0),
        e1("surface"),
        e2(null),
        e4(null),
        e6(7),
        e7(null),
        te(7))
      let [tr, to] = (0, o.useState)(!1),
        [tl, td] = (0, o.useState)(!1),
        [tu, tg] = (0, o.useState)(!1),
        [th, tm] = (0, o.useState)(!1),
        [tp, tf] = (0, o.useState)(null),
        [ty, tb] = (0, o.useState)(null),
        [tx, tv] = (0, o.useState)(null),
        [tw, tj] = (0, o.useState)(null),
        [t_, tM] = (0, o.useState)(null),
        tC = e$ || ("business" === eU && "reasoning" === e3) ? "product" : (e3 ?? "product"),
        tA = eK ? eV : 0,
        tI = eN && "workspace" !== eU && ti
      e_[7] !== eD || e_[8] !== tA || e_[9] !== tI || e_[10] !== eq
        ? ((k = { isPolling: eD, days: eq, offsetDays: tA, enabled: tI }),
          (e_[7] = eD),
          (e_[8] = tA),
          (e_[9] = tI),
          (e_[10] = eq),
          (e_[11] = k))
        : (k = e_[11])
      let tU = (0, f.ZY)(k),
        { data: tL, isLoading: tN, isError: tT, refetch: tD } = tU,
        tq = tN && !tT && null == tL && tp?.accountId === (eW ?? null) && tp.userId === (eB ?? null),
        tZ = tq ? tp.data : tL,
        tV =
          "workspace" !== eU &&
          tp?.accountId === (eW ?? null) &&
          tp.userId === (eB ?? null) &&
          Math.max(tp.data.total, tp.data.byModel.total) > 0 &&
          null != tZ &&
          0 === Math.max(tZ.total, tZ.byModel.total)
      e_[12] !== tZ?.byModel.series
        ? ((w = tZ?.byModel.series.some(tz) ?? !1), (e_[12] = tZ?.byModel.series), (e_[13] = w))
        : (w = e_[13])
      let tQ = w,
        tJ = tZ?.series.some(t$) ?? !1,
        tY = tQ && ("model" === eJ || !tJ) ? "model" : "surface",
        t1 = eN && !eT && (!e$ || eM)
      e_[14] !== eD || e_[15] !== eU || e_[16] !== tC || e_[17] !== t1 || e_[18] !== eq
        ? ((j = { isPolling: eD, breakdown: tC, days: eq, enabled: t1, scope: eU }),
          (e_[14] = eD),
          (e_[15] = eU),
          (e_[16] = tC),
          (e_[17] = t1),
          (e_[18] = eq),
          (e_[19] = j))
        : (j = e_[19])
      let t0 = (0, f.X6)(j),
        { data: t2, isLoading: t3, isError: t4, refetch: t5 } = t0,
        t6 = "business" === eU && null == e3 && ("model" === tY || t2?.total === 0) && (t2?.paidModelTotal ?? 0) > 0,
        t8 = eN && t6
      e_[20] !== eD || e_[21] !== eU || e_[22] !== t8 || e_[23] !== eq
        ? ((_ = { isPolling: eD, breakdown: "model", days: eq, enabled: t8, scope: eU }),
          (e_[20] = eD),
          (e_[21] = eU),
          (e_[22] = t8),
          (e_[23] = eq),
          (e_[24] = _))
        : (_ = e_[24])
      let t7 = (0, f.X6)(_),
        { data: t9, isLoading: se, isError: st, refetch: ss } = t7,
        sa = t6 ? t9 : t2,
        sn = t6 ? se : t3,
        si = t6 ? st : t4,
        sr = t6 ? ss : t5,
        so = t6 ? "model" : tC,
        sl = {
          current: [
            { total: null == tL ? void 0 : Math.max(tL.total, tL.byModel.total), isLoading: tN, isError: tT },
            ...(!e$ || eM
              ? [
                  {
                    total: null == sa ? void 0 : Math.max(sa.total, sa.paidModelTotal ?? 0),
                    isLoading: sn,
                    isError: si,
                  },
                ]
              : []),
          ],
          days: eq,
          enabled: eN && "workspace" !== eU && ti,
          ...ta.usage,
        },
        { shouldProbe: sd } = q(sl),
        { data: su, isLoading: sc, isError: sg } = (0, f.ZY)({ isPolling: eD, days: 30, enabled: sd }),
        {
          data: sh,
          isLoading: sm,
          isError: sp,
        } = (0, f.X6)({ isPolling: eD, breakdown: tC, days: 30, enabled: sd && (!e$ || eM), scope: eU }),
        sf = q({
          ...sl,
          fallback: [
            { total: null == su ? void 0 : Math.max(su.total, su.byModel.total), isLoading: sc, isError: sg },
            ...(!e$ || eM
              ? [
                  {
                    total: null == sh ? void 0 : Math.max(sh.total, sh.paidModelTotal ?? 0),
                    isLoading: sm,
                    isError: sp,
                  },
                ]
              : []),
          ],
        }),
        sy = (sd && !sf.shouldResolve) || (sn && !tT)
      sf.shouldResolve && (tn(tW), sf.shouldSelectThirtyDays && eZ(30))
      let sb = sn && !si && null == sa && ty?.accountId === (eW ?? null) && ty.userId === (eB ?? null),
        sx = sb ? ty.data : sa,
        sv =
          sx?.dataFreshnessTimestamp ??
          (sn && !si && null == sa && tx?.accountId === (eW ?? null) && tx.userId === (eB ?? null) ? tx.data : null)
      e_[25] !== eW || e_[26] !== sv || e_[27] !== eB
        ? ((M = () => {
            tv(null != sv ? { accountId: eW ?? null, data: sv, userId: eB ?? null } : null)
          }),
          (e_[25] = eW),
          (e_[26] = sv),
          (e_[27] = eB),
          (e_[28] = M))
        : (M = e_[28])
      let sk = M
      e_[29] !== eW ||
      e_[30] !== eP ||
      e_[31] !== sx ||
      e_[32] !== tZ ||
      e_[33] !== sk ||
      e_[34] !== eq ||
      e_[35] !== eB
        ? ((C = (e, t) => {
            e !== eq && (0, Q.$c)(eP, "usage_history", e)
            let s = null == tZ ? void 0 : Math.max(tZ.total, tZ.byModel.total)
            ;(to(0 === s),
              tf(null != tZ && (s ?? 0) > 0 ? { accountId: eW ?? null, data: tZ, userId: eB ?? null } : null),
              e !== eq &&
                (sk(),
                td(sx?.total === 0),
                tb(null != sx && sx.total > 0 ? { accountId: eW ?? null, data: sx, userId: eB ?? null } : null)),
              tn(tF),
              eZ(e),
              eQ(void 0 === t ? 0 : t))
          }),
          (e_[29] = eW),
          (e_[30] = eP),
          (e_[31] = sx),
          (e_[32] = tZ),
          (e_[33] = sk),
          (e_[34] = eq),
          (e_[35] = eB),
          (e_[36] = C))
        : (C = e_[36])
      let sw = C,
        sj = !eE && null != sa && ty?.accountId === (eW ?? null) && ty.userId === (eB ?? null) && ty.data !== sa
      ;(e_[37] !== sr
        ? ((A = () => {
            sr()
          }),
          (e_[37] = sr),
          (e_[38] = A))
        : (A = e_[38]),
        e_[39] !== si ||
        e_[40] !== sn ||
        e_[41] !== sb ||
        e_[42] !== tl ||
        e_[43] !== eE ||
        e_[44] !== sj ||
        e_[45] !== A
          ? ((S = {
              animateDataChanges: sj,
              isError: si,
              isLoading: sn,
              isUpdating: sb,
              preserveEmptyLayout: tl,
              reduceMotion: eE,
              onRetry: A,
            }),
            (e_[39] = si),
            (e_[40] = sn),
            (e_[41] = sb),
            (e_[42] = tl),
            (e_[43] = eE),
            (e_[44] = sj),
            (e_[45] = A),
            (e_[46] = S))
          : (S = e_[46]))
      let s_ = S,
        sM = eN && !e$
      e_[47] !== eD || e_[48] !== eU || e_[49] !== sM || e_[50] !== e5
        ? ((I = { isPolling: eD, days: e5, enabled: sM, scope: eU }),
          (e_[47] = eD),
          (e_[48] = eU),
          (e_[49] = sM),
          (e_[50] = e5),
          (e_[51] = I))
        : (I = e_[51])
      let sC = (0, f.BV)(I),
        { data: sA, isLoading: sS, isError: sI, refetch: sU } = sC,
        sL = {
          current: [{ total: sA?.total, isLoading: sS, isError: sI }],
          days: e5,
          enabled: eN && "business" === eU && ti,
          ...ta.tokens,
        },
        { shouldProbe: sN } = q(sL),
        { data: sT, isLoading: sD, isError: sE } = (0, f.BV)({ isPolling: eD, days: 30, enabled: sN, scope: eU }),
        sP = q({ ...sL, fallback: [{ total: sT?.total, isLoading: sD, isError: sE }] }),
        sR = sN && !sP.shouldResolve
      sP.shouldResolve && (tn(tB), sP.shouldSelectThirtyDays && e6(30))
      let sH = sS && !sI && null == sA && tw?.accountId === (eW ?? null) && tw.userId === (eB ?? null),
        sO = sH ? tw.data : sA
      e_[52] !== sO?.models || e_[53] !== eU
        ? ((U = "business" === eU ? sO?.models.filter(tO) : sO?.models),
          (e_[52] = sO?.models),
          (e_[53] = eU),
          (e_[54] = U))
        : (U = e_[54])
      let sB = U
      e_[55] !== e8 || e_[56] !== sB
        ? ((L =
            null != e8 &&
            sB?.some((e) => {
              let { key: t } = e
              return t === e8
            })
              ? e8
              : null),
          (e_[55] = e8),
          (e_[56] = sB),
          (e_[57] = L))
        : (L = e_[57])
      let sF = L,
        sW = !eE && null != sA && tw?.accountId === (eW ?? null) && tw.userId === (eB ?? null) && tw.data !== sA,
        s$ = sS || sR
      ;(e_[58] !== sU
        ? ((N = () => {
            sU()
          }),
          (e_[58] = sU),
          (e_[59] = N))
        : (N = e_[59]),
        e_[60] !== sI ||
        e_[61] !== sH ||
        e_[62] !== tu ||
        e_[63] !== eE ||
        e_[64] !== sW ||
        e_[65] !== s$ ||
        e_[66] !== N
          ? ((T = {
              animateDataChanges: sW,
              isError: sI,
              isLoading: s$,
              isUpdating: sH,
              preserveEmptyLayout: tu,
              reduceMotion: eE,
              onRetry: N,
            }),
            (e_[60] = sI),
            (e_[61] = sH),
            (e_[62] = tu),
            (e_[63] = eE),
            (e_[64] = sW),
            (e_[65] = s$),
            (e_[66] = N),
            (e_[67] = T))
          : (T = e_[67]))
      let sz = T
      e_[68] !== e9 || e_[69] !== eN || e_[70] !== eD || e_[71] !== eU
        ? ((D = { isPolling: eD, days: e9, enabled: eN, scope: eU }),
          (e_[68] = e9),
          (e_[69] = eN),
          (e_[70] = eD),
          (e_[71] = eU),
          (e_[72] = D))
        : (D = e_[72])
      let sG = (0, f.eU)(D),
        { data: sK, isLoading: sX, isError: sq, refetch: sZ } = sG
      e_[73] !== e9 || e_[74] !== eN || e_[75] !== eD || e_[76] !== eU
        ? ((E = { isPolling: eD, days: e9, enabled: eN, scope: eU }),
          (e_[73] = e9),
          (e_[74] = eN),
          (e_[75] = eD),
          (e_[76] = eU),
          (e_[77] = E))
        : (E = e_[77])
      let sV = (0, f.Iu)(E),
        { data: sQ, isLoading: sJ, isError: sY, refetch: s1 } = sV,
        s0 = {
          current: [
            { total: sK?.total, isLoading: sX, isError: sq },
            { total: sQ?.total, isLoading: sJ, isError: sY },
          ],
          days: e9,
          enabled: eN && "workspace" !== eU && ti,
          ...ta.tools,
        },
        { shouldProbe: s2 } = q(s0),
        { data: s3, isLoading: s4, isError: s5 } = (0, f.eU)({ isPolling: eD, days: 30, enabled: s2, scope: eU }),
        { data: s6, isLoading: s8, isError: s7 } = (0, f.Iu)({ isPolling: eD, days: 30, enabled: s2, scope: eU }),
        s9 = q({
          ...s0,
          fallback: [
            { total: s3?.total, isLoading: s4, isError: s5 },
            { total: s6?.total, isLoading: s8, isError: s7 },
          ],
        })
      s9.shouldResolve && (tn(tH), s9.shouldSelectThirtyDays && te(30))
      let ae = t_?.accountId === (eW ?? null) && t_.userId === (eB ?? null)
      e_[78] !== ae || e_[79] !== eE
        ? ((P = (e, t) => !eE && null != e && ae && null != t && t !== e), (e_[78] = ae), (e_[79] = eE), (e_[80] = P))
        : (P = e_[80])
      let at = P,
        as = sX && !sq && null == sK && ae && null != t_.data.plugins,
        aa = sJ && !sY && null == sQ && ae && null != t_.data.skills,
        an = as ? t_.data.plugins : sK,
        ai = aa ? t_.data.skills : sQ,
        ar = "workspace" !== eU && ae && (t_.data.plugins?.total ?? 0) > 0 && an?.total === 0,
        ao = "workspace" !== eU && ae && (t_.data.skills?.total ?? 0) > 0 && ai?.total === 0
      if (
        e_[81] !== eW ||
        e_[82] !== eP ||
        e_[83] !== eO ||
        e_[84] !== eM ||
        e_[85] !== eK ||
        e_[86] !== sv ||
        e_[87] !== s_ ||
        e_[88] !== so ||
        e_[89] !== sx ||
        e_[90] !== tZ ||
        e_[91] !== an?.dataFreshnessTimestamp ||
        e_[92] !== an?.total ||
        e_[93] !== ai?.dataFreshnessTimestamp ||
        e_[94] !== ai?.total ||
        e_[95] !== sO ||
        e_[96] !== ti ||
        e_[97] !== tQ ||
        e_[98] !== eR ||
        e_[99] !== eN ||
        e_[100] !== e$ ||
        e_[101] !== si ||
        e_[102] !== tT ||
        e_[103] !== tN ||
        e_[104] !== tq ||
        e_[105] !== sq ||
        e_[106] !== sX ||
        e_[107] !== eD ||
        e_[108] !== sY ||
        e_[109] !== sJ ||
        e_[110] !== sy ||
        e_[111] !== eT ||
        e_[112] !== t7 ||
        e_[113] !== tU ||
        e_[114] !== tL ||
        e_[115] !== sK ||
        e_[116] !== sG ||
        e_[117] !== th ||
        e_[118] !== tr ||
        e_[119] !== tV ||
        e_[120] !== e0 ||
        e_[121] !== tp ||
        e_[122] !== tw ||
        e_[123] !== eE ||
        e_[124] !== tD ||
        e_[125] !== sk ||
        e_[126] !== eU ||
        e_[127] !== t0 ||
        e_[128] !== tY ||
        e_[129] !== sF ||
        e_[130] !== s2 ||
        e_[131] !== sQ ||
        e_[132] !== sV ||
        e_[133] !== eX ||
        e_[134] !== e5 ||
        e_[135] !== sC ||
        e_[136] !== sz ||
        e_[137] !== sB ||
        e_[138] !== s9.shouldResolve ||
        e_[139] !== sw ||
        e_[140] !== eq ||
        e_[141] !== eV ||
        e_[142] !== t6 ||
        e_[143] !== eB ||
        e_[144] !== eL
      ) {
        var al, ad
        let e,
          t,
          s,
          n,
          r =
            ((al = an?.dataFreshnessTimestamp),
            (ad = ai?.dataFreshnessTimestamp),
            null == al || null == ad ? null : Date.parse(al) <= Date.parse(ad) ? al : ad)
        ;((O = null != sK && null != sQ && 0 === sK.total && 0 === sQ.total && !sX && !sJ && !sq && !sY),
          (B = th && (sX || sJ) && (sK?.total ?? 0) === 0 && (sQ?.total ?? 0) === 0 && !sq && !sY),
          (W =
            "workspace" !== eU &&
            ((sX && null == sK) || (sJ && null == sQ) || (s2 && !s9.shouldResolve)) &&
            (an?.total ?? 0) === 0 &&
            (ai?.total ?? 0) === 0 &&
            !sq &&
            !sY),
          e_[167] !== eK || e_[168] !== tZ || e_[169] !== eV
            ? ((e = eK && (eV > 0 || null == tZ || tZ.attribution.every(tR))),
              (e_[167] = eK),
              (e_[168] = tZ),
              (e_[169] = eV),
              (e_[170] = e))
            : (e = e_[170]))
        let o = e
        e_[171] !== eW || e_[172] !== eN || e_[173] !== eD || e_[174] !== eT || e_[175] !== eB || e_[176] !== eL
          ? ((t =
              eL && eN && null != eW && null != eB
                ? (0, a.jsx)(
                    tX,
                    { children: (0, a.jsx)(F, { accountId: eW, isUsdWorkspace: eT, isPolling: eD, userId: eB }) },
                    `workspace-top-chats:${eW}:${eB}`,
                  )
                : null),
            (e_[171] = eW),
            (e_[172] = eN),
            (e_[173] = eD),
            (e_[174] = eT),
            (e_[175] = eB),
            (e_[176] = eL),
            (e_[177] = t))
          : (t = e_[177])
        let l = t
        ;((ee = "flex w-full flex-col gap-[22px]"),
          e_[178] !== ti || e_[179] !== eN || e_[180] !== tU || e_[181] !== eU
            ? ((s = "workspace" !== eU && eN && ti ? [tU] : []),
              (e_[178] = ti),
              (e_[179] = eN),
              (e_[180] = tU),
              (e_[181] = eU),
              (e_[182] = s))
            : (s = e_[182]),
          e_[183] !== eM ||
          e_[184] !== eN ||
          e_[185] !== e$ ||
          e_[186] !== eT ||
          e_[187] !== t7 ||
          e_[188] !== t0 ||
          e_[189] !== t6
            ? ((n = eN && !eT && (!e$ || eM) ? [t6 ? t7 : t0] : []),
              (e_[183] = eM),
              (e_[184] = eN),
              (e_[185] = e$),
              (e_[186] = eT),
              (e_[187] = t7),
              (e_[188] = t0),
              (e_[189] = t6),
              (e_[190] = n))
            : (n = e_[190]),
          e_[191] !== s || e_[192] !== n
            ? ((et = (0, a.jsx)(J.F, { chart: "usage_history", queries: [...s, ...n] })),
              (e_[191] = s),
              (e_[192] = n),
              (e_[193] = et))
            : (et = e_[193]),
          e_[194] !== eN || e_[195] !== e$ || e_[196] !== sC
            ? ((es = !e$ && eN ? (0, a.jsx)(J.F, { chart: "tokens", queries: [sC] }) : null),
              (e_[194] = eN),
              (e_[195] = e$),
              (e_[196] = sC),
              (e_[197] = es))
            : (es = e_[197]),
          e_[198] !== eN || e_[199] !== sG || e_[200] !== sV
            ? ((en = eN ? (0, a.jsx)(J.F, { chart: "tool_activity", queries: [sG, sV] }) : null),
              (e_[198] = eN),
              (e_[199] = sG),
              (e_[200] = sV),
              (e_[201] = en))
            : (en = e_[201]),
          e_[202] !== eW ||
          e_[203] !== eK ||
          e_[204] !== tZ?.attribution ||
          e_[205] !== tT ||
          e_[206] !== tN ||
          e_[207] !== tq ||
          e_[208] !== sy ||
          e_[209] !== tL ||
          e_[210] !== tr ||
          e_[211] !== tp ||
          e_[212] !== eE ||
          e_[213] !== tD ||
          e_[214] !== o ||
          e_[215] !== sw ||
          e_[216] !== eq ||
          e_[217] !== eV ||
          e_[218] !== eB
            ? ((ei = o
                ? (0, a.jsx)(
                    eY,
                    {
                      buckets: tZ?.attribution,
                      days: eq,
                      onDaysChange: sw,
                      pagination: eK ? { offsetDays: eV, onOffsetDaysChange: (e) => sw(eq, e) } : void 0,
                      status: {
                        animateDataChanges:
                          null != tL && tp?.accountId === (eW ?? null) && tp.userId === (eB ?? null) && tp.data !== tL,
                        isError: tT,
                        isLoading: tN || sy,
                        isUpdating: tq,
                        preserveEmptyLayout: tr,
                        reduceMotion: eE,
                        onRetry: () => {
                          tD()
                        },
                      },
                    },
                    `consumer-usage-history:${eW}:${eB}`,
                  )
                : null),
              (e_[202] = eW),
              (e_[203] = eK),
              (e_[204] = tZ?.attribution),
              (e_[205] = tT),
              (e_[206] = tN),
              (e_[207] = tq),
              (e_[208] = sy),
              (e_[209] = tL),
              (e_[210] = tr),
              (e_[211] = tp),
              (e_[212] = eE),
              (e_[213] = tD),
              (e_[214] = o),
              (e_[215] = sw),
              (e_[216] = eq),
              (e_[217] = eV),
              (e_[218] = eB),
              (e_[219] = ei))
            : (ei = e_[219]),
          e_[220] !== eW ||
          e_[221] !== eP ||
          e_[222] !== eK ||
          e_[223] !== tZ ||
          e_[224] !== tQ ||
          e_[225] !== eR ||
          e_[226] !== tT ||
          e_[227] !== tN ||
          e_[228] !== tq ||
          e_[229] !== eD ||
          e_[230] !== sy ||
          e_[231] !== tL ||
          e_[232] !== tr ||
          e_[233] !== tV ||
          e_[234] !== e0 ||
          e_[235] !== tp ||
          e_[236] !== eE ||
          e_[237] !== tD ||
          e_[238] !== eU ||
          e_[239] !== tY ||
          e_[240] !== o ||
          e_[241] !== sw ||
          e_[242] !== eq ||
          e_[243] !== eB
            ? ((er =
                o || "workspace" === eU
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
                          subtitle: (0, a.jsx)(d.A, {
                            id: "settings.usage.billing.personalUsage.history.subtitle",
                            defaultMessage:
                              "See how plan usage and credits were consumed in Work, Codex, and other agentic tasks. Conversations in Chat are not included.",
                            description:
                              "Supporting text beneath Usage history in Codex desktop analytics settings. Explains that a Consumer or Business user's included-plan activity and credit charts include Work, Codex, and other agentic tasks, but exclude ordinary Chat conversations. Work, Codex, and Chat are OpenAI product names.",
                          }),
                          actions: (0, a.jsx)(X.tS, {
                            ariaLabel: eR.formatMessage({
                              id: "settings.usage.billing.personalUsage.history.periodLabel",
                              defaultMessage: "Personal usage history time range",
                              description:
                                "Accessible label for a Consumer or Business user's historical personal Codex usage date-range selector",
                            }),
                            days: eq,
                            onChange: sw,
                          }),
                        }),
                        (0, a.jsx)(y.X.Content, {
                          children: (0, a.jsx)(tG, {
                            isPolling: eD,
                            consumerAnalytics: eK,
                            actions: tQ
                              ? (0, a.jsx)(p.T, {
                                  ariaLabel: eR.formatMessage({
                                    id: "settings.usage.billing.personalUsage.breakdownLabel",
                                    defaultMessage: "Group personal usage by product or model",
                                    description:
                                      "Accessible label for the selector that groups a Consumer or Business account holder’s personal usage by the Codex or Work product, or by AI model",
                                  }),
                                  options: [
                                    { id: "surface", label: (0, a.jsx)(X.xn, { breakdown: "product" }) },
                                    { id: "model", label: (0, a.jsx)(X.d1, { breakdown: "model" }) },
                                  ],
                                  selectedId: tY,
                                  variant: "inset",
                                  onSelect: (e) => {
                                    ;(e !== tY && (0, Q.to)(eP, "usage_history", "surface" === e ? "product" : e),
                                      e2(tY),
                                      e1(e))
                                  },
                                })
                              : void 0,
                            breakdown: "model" === tY ? "model" : "product",
                            data: "model" === tY ? tZ?.byModel : tZ,
                            isPersonalUsage: !0,
                            preservePopulatedCardLayout: tV,
                            scope: eU,
                            status: {
                              animateDataChanges:
                                !eE &&
                                ((null != e0 && e0 !== tY) ||
                                  (null != tL &&
                                    tp?.accountId === (eW ?? null) &&
                                    tp.userId === (eB ?? null) &&
                                    tp.data !== tL)),
                              isError: tT,
                              isLoading: tN || sy,
                              isUpdating: tq,
                              preserveEmptyLayout: tr,
                              reduceMotion: eE,
                              onAnimationEnd: () => e2(null),
                              onRetry: () => {
                                tD()
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
              (e_[220] = eW),
              (e_[221] = eP),
              (e_[222] = eK),
              (e_[223] = tZ),
              (e_[224] = tQ),
              (e_[225] = eR),
              (e_[226] = tT),
              (e_[227] = tN),
              (e_[228] = tq),
              (e_[229] = eD),
              (e_[230] = sy),
              (e_[231] = tL),
              (e_[232] = tr),
              (e_[233] = tV),
              (e_[234] = e0),
              (e_[235] = tp),
              (e_[236] = eE),
              (e_[237] = tD),
              (e_[238] = eU),
              (e_[239] = tY),
              (e_[240] = o),
              (e_[241] = sw),
              (e_[242] = eq),
              (e_[243] = eB),
              (e_[244] = er))
            : (er = e_[244]),
          e_[245] !== eW ||
          e_[246] !== eK ||
          e_[247] !== eN ||
          e_[248] !== eD ||
          e_[249] !== eX ||
          e_[250] !== eB ||
          e_[251] !== eL
            ? ((eo =
                eK && !eL && eX && eN && null != eW && null != eB
                  ? (0, a.jsx)(
                      tX,
                      { children: (0, a.jsx)(tk, { isPolling: eD, accountId: eW, userId: eB }) },
                      `consumer-top-chats:${eW}:${eB}`,
                    )
                  : null),
              (e_[245] = eW),
              (e_[246] = eK),
              (e_[247] = eN),
              (e_[248] = eD),
              (e_[249] = eX),
              (e_[250] = eB),
              (e_[251] = eL),
              (e_[252] = eo))
            : (eo = e_[252]),
          (el = "consumer" === eU ? l : null),
          e_[253] !== eK || e_[254] !== eN || e_[255] !== eD || e_[256] !== eE || e_[257] !== eU
            ? ((ed = eK
                ? (0, a.jsx)(tc, {
                    isPolling: eD,
                    isActive: eN,
                    reduceMotion: eE,
                    scope: "business" === eU ? "business" : "consumer",
                  })
                : null),
              (e_[253] = eK),
              (e_[254] = eN),
              (e_[255] = eD),
              (e_[256] = eE),
              (e_[257] = eU),
              (e_[258] = ed))
            : (ed = e_[258]),
          e_[259] !== eO || e_[260] !== eN || e_[261] !== eD || e_[262] !== eT || e_[263] !== eE || e_[264] !== eB
            ? ((eu = eT
                ? (0, a.jsx)(
                    tS,
                    { isPolling: eD, enabled: eN, reduceMotion: eE },
                    `enterprise-spend-history:${eO}:${eB}`,
                  )
                : null),
              (e_[259] = eO),
              (e_[260] = eN),
              (e_[261] = eD),
              (e_[262] = eT),
              (e_[263] = eE),
              (e_[264] = eB),
              (e_[265] = eu))
            : (eu = e_[265]),
          e_[266] !== eW ||
          e_[267] !== eP ||
          e_[268] !== eM ||
          e_[269] !== eK ||
          e_[270] !== sv ||
          e_[271] !== s_ ||
          e_[272] !== so ||
          e_[273] !== sx ||
          e_[274] !== eR ||
          e_[275] !== e$ ||
          e_[276] !== si ||
          e_[277] !== eD ||
          e_[278] !== eT ||
          e_[279] !== sk ||
          e_[280] !== eU ||
          e_[281] !== sw ||
          e_[282] !== eq ||
          e_[283] !== eB
            ? ((ec =
                !eT &&
                (!e$ || eM) &&
                ("workspace" === eU || si || (sx?.total ?? 0) > 0 || (sx?.paidModelTotal ?? 0) > 0)
                  ? (0, a.jsxs)(y.X, {
                      children: [
                        (0, a.jsx)(y.X.Header, {
                          className: "workspace" === eU ? void 0 : "max-sm:flex-col max-sm:items-stretch",
                          actionsAlignment: "end",
                          size: "default",
                          title: (0, a.jsx)(tK, { scope: eU, consumerAnalytics: eK }),
                          subtitle:
                            null == sv
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
                                  values: { date: K(sv, eR) },
                                }),
                          actions: (0, a.jsxs)("div", {
                            className: "flex flex-wrap items-center justify-end gap-2",
                            children: [
                              (0, a.jsx)(X.tS, {
                                ariaLabel: eK
                                  ? eR.formatMessage({
                                      id: "settings.usage.billing.credits.consumer.history.periodLabel",
                                      defaultMessage: "Credits history time range",
                                      description:
                                        "Accessible label for the Consumer credit history date-range selector",
                                    })
                                  : eR.formatMessage({
                                      id: "settings.usage.billing.credits.history.periodLabel",
                                      defaultMessage: "Credit usage history time range",
                                      description:
                                        "Accessible label for the enterprise credit usage history date-range selector",
                                    }),
                                days: eq,
                                onChange: (e) => {
                                  "workspace" !== eU
                                    ? sw(e)
                                    : (e !== eq && (0, Q.$c)(eP, "usage_history", e),
                                      sk(),
                                      td(sx?.total === 0),
                                      tb(
                                        null != sx && sx.total > 0
                                          ? { accountId: eW ?? null, data: sx, userId: eB ?? null }
                                          : null,
                                      ),
                                      eZ(e))
                                },
                              }),
                              (0, a.jsx)(X.Sv, {
                                breakdown: so,
                                scope: eU,
                                onChange: (e) => {
                                  ;(e !== so && ("model" === e || "product" === e) && (0, Q.to)(eP, "usage_history", e),
                                    sk(),
                                    td(sx?.total === 0),
                                    tb(null),
                                    e4(e))
                                },
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)(y.X.Content, {
                          children: (0, a.jsx)(tG, {
                            isPolling: eD,
                            consumerAnalytics: eK,
                            breakdown: so,
                            data: sx,
                            scope: eU,
                            status: s_,
                          }),
                        }),
                      ],
                    })
                  : null),
              (e_[266] = eW),
              (e_[267] = eP),
              (e_[268] = eM),
              (e_[269] = eK),
              (e_[270] = sv),
              (e_[271] = s_),
              (e_[272] = so),
              (e_[273] = sx),
              (e_[274] = eR),
              (e_[275] = e$),
              (e_[276] = si),
              (e_[277] = eD),
              (e_[278] = eT),
              (e_[279] = sk),
              (e_[280] = eU),
              (e_[281] = sw),
              (e_[282] = eq),
              (e_[283] = eB),
              (e_[284] = ec))
            : (ec = e_[284]),
          e_[285] !== eW ||
          e_[286] !== eP ||
          e_[287] !== sO ||
          e_[288] !== eR ||
          e_[289] !== e$ ||
          e_[290] !== tw ||
          e_[291] !== eU ||
          e_[292] !== sF ||
          e_[293] !== e5 ||
          e_[294] !== sz ||
          e_[295] !== sB ||
          e_[296] !== eB
            ? ((eg = e$
                ? null
                : (0, a.jsxs)(y.X, {
                    children: [
                      (0, a.jsx)(y.X.Header, {
                        className: "workspace" === eU ? void 0 : "max-sm:flex-col max-sm:items-stretch",
                        actionsAlignment: "end",
                        size: "default",
                        title:
                          "workspace" === eU
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
                          sO?.dataFreshnessTimestamp == null
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
                                values: { date: K(sO.dataFreshnessTimestamp, eR) },
                              }),
                        actions: (0, a.jsxs)("div", {
                          className: "flex flex-wrap items-center justify-end gap-2",
                          children: [
                            (0, a.jsx)(X.tS, {
                              ariaLabel: eR.formatMessage({
                                id: "settings.usage.billing.tokens.history.periodLabel",
                                defaultMessage: "Token usage history time range",
                                description:
                                  "Accessible label for the enterprise token usage history date-range selector",
                              }),
                              days: e5,
                              onChange: (e) => {
                                ;(e !== e5 && (0, Q.$c)(eP, "tokens", e),
                                  tg(sO?.total === 0),
                                  tj((e) =>
                                    sO?.total
                                      ? { accountId: eW ?? null, data: sO, userId: eB ?? null }
                                      : "business" === eU && e?.accountId === (eW ?? null) && e.userId === (eB ?? null)
                                        ? e
                                        : null,
                                  ),
                                  tn(tP),
                                  e6(e))
                              },
                            }),
                            (0, a.jsx)(X.ap, {
                              models: sB ?? [],
                              selectedModel: sF,
                              onChange: (e) => {
                                ;(e !== sF && (0, Q.zJ)(eP, "tokens", e), e7(e))
                              },
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)(y.X.Content, {
                        children: (0, a.jsx)(eH, {
                          data: sO,
                          preservePopulatedCardLayout:
                            "business" === eU &&
                            tw?.accountId === (eW ?? null) &&
                            tw.userId === (eB ?? null) &&
                            tw.data.total > 0 &&
                            sO?.total === 0,
                          selectedModel: sF,
                          scope: eU,
                          status: sz,
                        }),
                      }),
                    ],
                  })),
              (e_[285] = eW),
              (e_[286] = eP),
              (e_[287] = sO),
              (e_[288] = eR),
              (e_[289] = e$),
              (e_[290] = tw),
              (e_[291] = eU),
              (e_[292] = sF),
              (e_[293] = e5),
              (e_[294] = sz),
              (e_[295] = sB),
              (e_[296] = eB),
              (e_[297] = eg))
            : (eg = e_[297]),
          (eh = "workspace" === eU ? l : null),
          (H = y.X),
          (R = y.X.Header),
          ($ = "end"),
          (z = "default"),
          e_[298] === Symbol.for("react.memo_cache_sentinel")
            ? ((G = (0, a.jsx)(d.A, {
                id: "settings.usage.billing.activity.title",
                defaultMessage: "Tool activity",
                description: "Title for skill and plugin usage charts in enterprise billing settings",
              })),
              (e_[298] = G))
            : (G = e_[298]),
          (Z =
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
                  values: { date: K(r, eR) },
                })),
          (e_[81] = eW),
          (e_[82] = eP),
          (e_[83] = eO),
          (e_[84] = eM),
          (e_[85] = eK),
          (e_[86] = sv),
          (e_[87] = s_),
          (e_[88] = so),
          (e_[89] = sx),
          (e_[90] = tZ),
          (e_[91] = an?.dataFreshnessTimestamp),
          (e_[92] = an?.total),
          (e_[93] = ai?.dataFreshnessTimestamp),
          (e_[94] = ai?.total),
          (e_[95] = sO),
          (e_[96] = ti),
          (e_[97] = tQ),
          (e_[98] = eR),
          (e_[99] = eN),
          (e_[100] = e$),
          (e_[101] = si),
          (e_[102] = tT),
          (e_[103] = tN),
          (e_[104] = tq),
          (e_[105] = sq),
          (e_[106] = sX),
          (e_[107] = eD),
          (e_[108] = sY),
          (e_[109] = sJ),
          (e_[110] = sy),
          (e_[111] = eT),
          (e_[112] = t7),
          (e_[113] = tU),
          (e_[114] = tL),
          (e_[115] = sK),
          (e_[116] = sG),
          (e_[117] = th),
          (e_[118] = tr),
          (e_[119] = tV),
          (e_[120] = e0),
          (e_[121] = tp),
          (e_[122] = tw),
          (e_[123] = eE),
          (e_[124] = tD),
          (e_[125] = sk),
          (e_[126] = eU),
          (e_[127] = t0),
          (e_[128] = tY),
          (e_[129] = sF),
          (e_[130] = s2),
          (e_[131] = sQ),
          (e_[132] = sV),
          (e_[133] = eX),
          (e_[134] = e5),
          (e_[135] = sC),
          (e_[136] = sz),
          (e_[137] = sB),
          (e_[138] = s9.shouldResolve),
          (e_[139] = sw),
          (e_[140] = eq),
          (e_[141] = eV),
          (e_[142] = t6),
          (e_[143] = eB),
          (e_[144] = eL),
          (e_[145] = R),
          (e_[146] = H),
          (e_[147] = O),
          (e_[148] = B),
          (e_[149] = W),
          (e_[150] = $),
          (e_[151] = z),
          (e_[152] = G),
          (e_[153] = Z),
          (e_[154] = ee),
          (e_[155] = et),
          (e_[156] = es),
          (e_[157] = en),
          (e_[158] = ei),
          (e_[159] = er),
          (e_[160] = eo),
          (e_[161] = el),
          (e_[162] = ed),
          (e_[163] = eu),
          (e_[164] = ec),
          (e_[165] = eg),
          (e_[166] = eh))
      } else
        ((R = e_[145]),
          (H = e_[146]),
          (O = e_[147]),
          (B = e_[148]),
          (W = e_[149]),
          ($ = e_[150]),
          (z = e_[151]),
          (G = e_[152]),
          (Z = e_[153]),
          (ee = e_[154]),
          (et = e_[155]),
          (es = e_[156]),
          (en = e_[157]),
          (ei = e_[158]),
          (er = e_[159]),
          (eo = e_[160]),
          (el = e_[161]),
          (ed = e_[162]),
          (eu = e_[163]),
          (ec = e_[164]),
          (eg = e_[165]),
          (eh = e_[166]))
      ;(e_[299] !== eR
        ? ((em = eR.formatMessage({
            id: "settings.usage.billing.activity.periodLabel",
            defaultMessage: "Tool activity time range",
            description: "Accessible label for the enterprise tool activity date-range selector",
          })),
          (e_[299] = eR),
          (e_[300] = em))
        : (em = e_[300]),
        e_[301] !== eW ||
        e_[302] !== e9 ||
        e_[303] !== eP ||
        e_[304] !== an ||
        e_[305] !== ai ||
        e_[306] !== O ||
        e_[307] !== eB
          ? ((ep = (e) => {
              ;(e !== e9 && (0, Q.$c)(eP, "tool_activity", e),
                tm(O),
                tM(
                  (an?.total ?? 0) > 0 || (ai?.total ?? 0) > 0
                    ? { accountId: eW ?? null, data: { plugins: an, skills: ai }, userId: eB ?? null }
                    : null,
                ),
                tn(tE),
                te(e))
            }),
            (e_[301] = eW),
            (e_[302] = e9),
            (e_[303] = eP),
            (e_[304] = an),
            (e_[305] = ai),
            (e_[306] = O),
            (e_[307] = eB),
            (e_[308] = ep))
          : (ep = e_[308]),
        e_[309] !== e9 || e_[310] !== em || e_[311] !== ep
          ? ((ef = (0, a.jsx)(X.tS, { ariaLabel: em, days: e9, onChange: ep })),
            (e_[309] = e9),
            (e_[310] = em),
            (e_[311] = ep),
            (e_[312] = ef))
          : (ef = e_[312]),
        e_[313] !== R || e_[314] !== $ || e_[315] !== z || e_[316] !== G || e_[317] !== Z || e_[318] !== ef
          ? ((ey = (0, a.jsx)(R, { actionsAlignment: $, size: z, title: G, subtitle: Z, actions: ef })),
            (e_[313] = R),
            (e_[314] = $),
            (e_[315] = z),
            (e_[316] = G),
            (e_[317] = Z),
            (e_[318] = ef),
            (e_[319] = ey))
          : (ey = e_[319]))
      let au = "workspace" === eU && "transition-all duration-relaxed ease-basic motion-reduce:transition-none",
        ac = "workspace" === eU && (O || B ? "min-h-16 justify-center" : "min-h-128")
      return (
        e_[320] !== au || e_[321] !== ac
          ? ((eb = (0, r.A)("gap-3", au, ac)), (e_[320] = au), (e_[321] = ac), (e_[322] = eb))
          : (eb = e_[322]),
        e_[323] !== eK ||
        e_[324] !== an ||
        e_[325] !== ai ||
        e_[326] !== O ||
        e_[327] !== B ||
        e_[328] !== W ||
        e_[329] !== sq ||
        e_[330] !== sX ||
        e_[331] !== as ||
        e_[332] !== sY ||
        e_[333] !== sJ ||
        e_[334] !== aa ||
        e_[335] !== sK ||
        e_[336] !== th ||
        e_[337] !== ar ||
        e_[338] !== ao ||
        e_[339] !== t_?.data ||
        e_[340] !== eE ||
        e_[341] !== sZ ||
        e_[342] !== s1 ||
        e_[343] !== eU ||
        e_[344] !== at ||
        e_[345] !== sQ
          ? ((ex =
              (O && !ar && !ao) || B || W
                ? (0, a.jsx)(b.t, {
                    children: (0, a.jsx)(m.W, {
                      layout: "settings-row",
                      children:
                        B || W
                          ? (0, a.jsx)(ea.L, { compact: !0, reduceMotion: eE })
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
                      "workspace" === eU || (an?.total ?? 0) > 0 || sq || ar
                        ? (0, a.jsx)(V.t, {
                            analyticsChart: "tool_activity",
                            consumerAnalytics: eK,
                            data: an,
                            preservePopulatedCardLayout: ar,
                            scope: eU,
                            status: {
                              animateDataChanges: at(sK, t_?.data.plugins),
                              isError: sq,
                              isLoading: sX,
                              isUpdating: as,
                              preserveEmptyLayout: th,
                              reduceMotion: eE,
                              onRetry: () => {
                                sZ()
                              },
                            },
                            title:
                              "workspace" === eU || eK
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
                      "workspace" === eU || (ai?.total ?? 0) > 0 || sY || ao
                        ? (0, a.jsx)(V.t, {
                            analyticsChart: "tool_activity",
                            consumerAnalytics: eK,
                            data: ai,
                            preservePopulatedCardLayout: ao,
                            scope: eU,
                            status: {
                              animateDataChanges: at(sQ, t_?.data.skills),
                              isError: sY,
                              isLoading: sJ,
                              isUpdating: aa,
                              preserveEmptyLayout: th,
                              reduceMotion: eE,
                              onRetry: () => {
                                s1()
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
            (e_[323] = eK),
            (e_[324] = an),
            (e_[325] = ai),
            (e_[326] = O),
            (e_[327] = B),
            (e_[328] = W),
            (e_[329] = sq),
            (e_[330] = sX),
            (e_[331] = as),
            (e_[332] = sY),
            (e_[333] = sJ),
            (e_[334] = aa),
            (e_[335] = sK),
            (e_[336] = th),
            (e_[337] = ar),
            (e_[338] = ao),
            (e_[339] = t_?.data),
            (e_[340] = eE),
            (e_[341] = sZ),
            (e_[342] = s1),
            (e_[343] = eU),
            (e_[344] = at),
            (e_[345] = sQ),
            (e_[346] = ex))
          : (ex = e_[346]),
        e_[347] !== eb || e_[348] !== ex
          ? ((ev = (0, a.jsx)(y.X.Content, { className: eb, children: ex })),
            (e_[347] = eb),
            (e_[348] = ex),
            (e_[349] = ev))
          : (ev = e_[349]),
        e_[350] !== H || e_[351] !== ey || e_[352] !== ev
          ? ((ek = (0, a.jsxs)(H, { children: [ey, ev] })),
            (e_[350] = H),
            (e_[351] = ey),
            (e_[352] = ev),
            (e_[353] = ek))
          : (ek = e_[353]),
        e_[354] !== eK || e_[355] !== eN || e_[356] !== eD || e_[357] !== eE || e_[358] !== eU
          ? ((ew =
              "consumer" === eU || "business" === eU
                ? (0, a.jsx)(Y, { isPolling: eD, consumerAnalytics: eK, isActive: eN, reduceMotion: eE, scope: eU })
                : null),
            (e_[354] = eK),
            (e_[355] = eN),
            (e_[356] = eD),
            (e_[357] = eE),
            (e_[358] = eU),
            (e_[359] = ew))
          : (ew = e_[359]),
        e_[360] !== ee ||
        e_[361] !== et ||
        e_[362] !== es ||
        e_[363] !== en ||
        e_[364] !== ei ||
        e_[365] !== er ||
        e_[366] !== eo ||
        e_[367] !== el ||
        e_[368] !== ed ||
        e_[369] !== eu ||
        e_[370] !== ec ||
        e_[371] !== eg ||
        e_[372] !== eh ||
        e_[373] !== ek ||
        e_[374] !== ew
          ? ((ej = (0, a.jsxs)("div", {
              className: ee,
              children: [et, es, en, ei, er, eo, el, ed, eu, ec, eg, eh, ek, ew],
            })),
            (e_[360] = ee),
            (e_[361] = et),
            (e_[362] = es),
            (e_[363] = en),
            (e_[364] = ei),
            (e_[365] = er),
            (e_[366] = eo),
            (e_[367] = el),
            (e_[368] = ed),
            (e_[369] = eu),
            (e_[370] = ec),
            (e_[371] = eg),
            (e_[372] = eh),
            (e_[373] = ek),
            (e_[374] = ew),
            (e_[375] = ej))
          : (ej = e_[375]),
        ej
      )
    }
    function tE(e) {
      return { ...e, tools: { ...e.tools, hasManualSelection: !0 } }
    }
    function tP(e) {
      return { ...e, tokens: { ...e.tokens, hasManualSelection: !0 } }
    }
    function tR(e) {
      return null != e.attribution
    }
    function tH(e) {
      return { ...e, tools: { ...e.tools, hasResolved: !0 } }
    }
    function tO(e) {
      let { total: t } = e
      return t > 0
    }
    function tB(e) {
      return { ...e, tokens: { ...e.tokens, hasResolved: !0 } }
    }
    function tF(e) {
      return { ...e, usage: { ...e.usage, hasManualSelection: !0 } }
    }
    function tW(e) {
      return { ...e, usage: { ...e.usage, hasResolved: !0 } }
    }
    function t$(e) {
      let { total: t } = e
      return t > 0
    }
    function tz(e) {
      let { total: t } = e
      return t > 0
    }
    function tG(e) {
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
    function tK(e) {
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
    function tX(e) {
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
        w = (0, n.c)(39),
        { dimension: j, usage: _ } = e,
        M = (0, u.A)(),
        C = (0, o.useId)()
      if (w[0] !== j || w[1] !== M || w[2] !== C || w[3] !== _.balanceUnit || w[4] !== _.groups) {
        let e,
          n,
          o,
          u,
          v,
          k = (0, m.Xz)(_.groups, j, _.balanceUnit),
          A = k.reduce(f, 0),
          S = A > 0 ? k : []
        w[12] !== A ? ((e = (e) => Math.round((e / A) * 100)), (w[12] = A), (w[13] = e)) : (e = w[13])
        let I = e
        ;((r = "flex flex-col gap-1.5"),
          (l = C),
          (c = "group"),
          w[14] !== j
            ? ((n =
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
              (w[14] = j),
              (w[15] = n))
            : (n = w[15]),
          w[16] !== C || w[17] !== n
            ? ((o = (0, a.jsx)("span", { id: C, className: "text-secondary", children: n })),
              (w[16] = C),
              (w[17] = n),
              (w[18] = o))
            : (o = w[18]))
        let U =
          0 === S.length
            ? (0, a.jsx)("span", {
                className: "text-tertiary",
                children: (0, a.jsx)(d.A, {
                  id: "usageCenter.thread.breakdown.noData",
                  defaultMessage: "Not available",
                  description: "Shown when one current-chat usage breakdown category has no recorded data",
                }),
              })
            : null
        ;(w[19] !== o || w[20] !== U
          ? ((p = (0, a.jsxs)("div", { className: "flex items-center justify-between gap-2", children: [o, U] })),
            (w[19] = o),
            (w[20] = U),
            (w[21] = p))
          : (p = w[21]),
          w[22] !== j || w[23] !== I
            ? ((u = (e, t) => {
                let s = I(e.amountMicros)
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
              (w[22] = j),
              (w[23] = I),
              (w[24] = u))
            : (u = w[24]),
          (b = (0, a.jsx)("div", {
            className: "flex h-2 overflow-hidden rounded-full bg-text/10",
            children: S.map(u),
          })),
          (t = "flex flex-wrap gap-x-4 gap-y-1.5 text-secondary"),
          w[25] !== j || w[26] !== I || w[27] !== M
            ? ((v = (e, t) =>
                (0, a.jsx)(
                  i.m,
                  {
                    openDelay: 0,
                    content: (0, a.jsx)(y, { dimension: j, entry: e, percentage: I(e.amountMicros) }),
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
                              { percentage: I(e.amountMicros) },
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
                                percentage: I(e.amountMicros),
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
              (w[25] = j),
              (w[26] = I),
              (w[27] = M),
              (w[28] = v))
            : (v = w[28]),
          (s = S.map(v)),
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
        w[29] !== t || w[30] !== s
          ? ((v = (0, a.jsx)("div", { className: t, children: s })), (w[29] = t), (w[30] = s), (w[31] = v))
          : (v = w[31]),
        w[32] !== r || w[33] !== l || w[34] !== c || w[35] !== p || w[36] !== b || w[37] !== v
          ? ((k = (0, a.jsxs)("div", { className: r, "aria-labelledby": l, role: c, children: [p, b, v] })),
            (w[32] = r),
            (w[33] = l),
            (w[34] = c),
            (w[35] = p),
            (w[36] = b),
            (w[37] = v),
            (w[38] = k))
          : (k = w[38]),
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
//# sourceMappingURL=556836.e4f3db1dc6.js.map
