export const __rspack_esm_ids = [886484]
export const __webpack_modules__ = {
  kg1F(e, t, s) {
    var a = s("ABep"),
      n = s("QosV"),
      i = s("oyxz"),
      l = s("moNn")
    s.d(
      t,
      {},
      {
        w: function (e) {
          let t,
            s = (0, n.c)(2),
            { effort: r } = e,
            o = l.h[r]
          return (s[0] !== o ? ((t = (0, a.jsx)(i.A, { ...o })), (s[0] = o), (s[1] = t)) : (t = s[1]), t)
        },
      },
    )
  },
  moNn(e, t, s) {
    var a = s("Qgfj")
    let n = (0, a.YK)({
        none: { id: "composer.mode.local.reasoning.none.label", defaultMessage: "None" },
        minimal: { id: "composer.mode.local.reasoning.minimal.label", defaultMessage: "Minimal" },
        low: { id: "composer.mode.local.reasoning.low.label.v2", defaultMessage: "Light" },
        medium: { id: "composer.mode.local.reasoning.medium.label", defaultMessage: "Medium" },
        high: { id: "composer.mode.local.reasoning.high.label", defaultMessage: "High" },
        xhigh: { id: "composer.mode.local.reasoning.xhigh.label", defaultMessage: "Extra High" },
        max: { id: "composer.mode.local.reasoning.max.label", defaultMessage: "Max" },
        ultra: { id: "composer.mode.local.reasoning.ultra.label", defaultMessage: "Ultra" },
        persistent: { id: "composer.mode.local.reasoning.persistent.label", defaultMessage: "Persistent" },
      }),
      i = {
        ...n,
        medium: (0, a.zR)({ id: "composer.modelPicker.work.reasoning.standard.label", defaultMessage: "Standard" }),
        high: (0, a.zR)({ id: "composer.modelPicker.work.reasoning.extended.label", defaultMessage: "Extended" }),
      }
    s.d(t, {}, { P: i, h: n })
  },
  q0SU(e, t, s) {
    s.d(t, { e: () => tF })
    var a = s("ABep"),
      n = s("QosV"),
      i = s("NhqU"),
      l = s("on57"),
      r = s("zd8w"),
      o = s("Wf1j"),
      d = s("oyxz"),
      u = s("zQm0"),
      c = s("UOa8"),
      g = s("OAko"),
      m = s("HOLv"),
      h = s("evwP"),
      p = s("EShr"),
      f = s("Myba"),
      y = s("BSnr"),
      x = s("ZEx5"),
      b = s("hZax"),
      v = s("bFOP"),
      k = s("qmMi"),
      j = s("DBCl"),
      w = s("t162"),
      _ = s("Qgfj"),
      M = s("D6V5"),
      A = s("Sm6l"),
      C = s("yf2D"),
      S = s("OWtl"),
      I = s("I7Ou"),
      U = s("AWNZ"),
      N = s("bZug"),
      T = s("kfGJ"),
      L = s("WRqP"),
      D = s("QXR8"),
      P = s("Bc5r"),
      E = s("Dgwo"),
      O = s("l00C"),
      R = s("rvFo")
    let F = (0, k.vU)(S.u, ({ accountId: e, userId: t }, { get: s, scope: a }) => ({
      enabled: null != s(O.u$, T.fI),
      queryKey: ["top-consuming-chats", e, t, T.fI],
      queryFn: async ({ signal: e }) => {
        let t = (Date.now() - 2592e6) / 1e3,
          s = [],
          n = new Set(),
          i = null
        do {
          e.throwIfAborted()
          let l = await (0, E.V)(a, T.fI).sendRequest(
            "thread/list",
            { archived: !1, cursor: i, limit: 100, modelProviders: null, sortKey: "updated_at", useStateDbOnly: !0 },
            { priority: "background", source: "thread_list" },
          )
          e.throwIfAborted()
          let r = l.nextCursor
          if (null != r && n.has(r)) throw Error("App Server repeated a thread list cursor")
          let o = l.data.filter((e) => e.updatedAt >= t)
          if ((s.push(...o), o.length < l.data.length)) break
          ;(null != r && n.add(r), (i = r))
        } while (null != i)
        return s
      },
      refetchInterval: R.D.ONE_MINUTE,
      retry: !1,
      staleTime: R.D.ONE_MINUTE,
    }))
    var H = s("pbco")
    function $(e) {
      let t,
        s,
        i,
        l,
        o,
        u,
        c,
        g,
        m,
        p,
        f,
        v,
        _,
        M,
        C,
        L,
        P,
        E = (0, n.c)(53),
        { accountId: O, isUsdWorkspace: R, isPolling: H, userId: $ } = e,
        B = void 0 !== R && R,
        G = void 0 === H || H,
        Z = (0, k.gh)(S.u),
        [V, Q] = (0, r.useState)(!1),
        [Y, J] = (0, r.useState)(!1),
        ee = (0, b.Zj)("2889458142")
      E[0] !== O || E[1] !== $ ? ((t = { accountId: O, userId: $ }), (E[0] = O), (E[1] = $), (E[2] = t)) : (t = E[2])
      let et = G || !V
      E[3] !== et ? ((s = { enabled: et }), (E[3] = et), (E[4] = s)) : (s = E[4])
      let { data: es, isError: ea, isLoading: en, isSuccess: ei, refetch: el } = (0, k._U)(F, t, s)
      E[5] !== ee || E[6] !== es ? ((i = ee ? es?.filter(q) : es), (E[5] = ee), (E[6] = es), (E[7] = i)) : (i = E[7])
      let er = i,
        eo = B ? "usd" : "credit"
      ;(E[8] !== er ? ((l = er?.map(X) ?? []), (E[8] = er), (E[9] = l)) : (l = E[9]),
        E[10] !== O || E[11] !== ee || E[12] !== eo || E[13] !== l
          ? ((o = { accountId: O, balanceUnit: eo, hostId: T.fI, conversationIds: l, includeSubagents: ee }),
            (E[10] = O),
            (E[11] = ee),
            (E[12] = eo),
            (E[13] = l),
            (E[14] = o))
          : (o = E[14]))
      let ed = o,
        eu = G || (!ee && !Y)
      E[15] !== eu ? ((u = { enabled: eu }), (E[15] = eu), (E[16] = u)) : (u = E[16])
      let { data: ec, isError: eg, isLoading: em, isSuccess: eh } = (0, k._U)(D.h, ed, u)
      ;(!V && (ei || ea) && Q(!0), !ee && !Y && (ea || (ei && (eh || eg))) && J(!0))
      let [ep, ef] = (0, r.useState)(!1)
      if (
        E[17] !== er ||
        E[18] !== ea ||
        E[19] !== en ||
        E[20] !== eg ||
        E[21] !== em ||
        E[22] !== B ||
        E[23] !== el ||
        E[24] !== Z ||
        E[25] !== ed ||
        E[26] !== ep ||
        E[27] !== ec
      ) {
        let e
        _ = er
          ?.flatMap((e) => {
            let t = ec?.get(e.id)
            return null == t ? [] : [{ conversationId: (0, j.JXB)(e.id), title: (0, w.Vm)(e, w.wp), usage: t }]
          })
          .sort((e, t) =>
            B ? (t.usage.costUsd ?? 0) - (e.usage.costUsd ?? 0) : t.usage.creditsUsed - e.usage.creditsUsed,
          )
        let t = en || (null != er && er.length > 0 && em),
          s = ea || eg || (null != er && er.length > 0 && (null == ec || _?.length === 0)),
          n = B || (_?.some(W) ?? !1)
        ;((m = y.X),
          E[35] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, { id: "settings.usage.topConsumingChats.title", defaultMessage: "Top chats" })),
              (E[35] = e))
            : (e = E[35]),
          E[36] !== B
            ? ((v = (0, a.jsx)(y.X.Header, {
                title: e,
                subtitle: B
                  ? (0, a.jsx)(d.A, {
                      id: "settings.usage.topConsumingChats.usdSubtitle",
                      defaultMessage: "Work and Codex chats active in the last 30 days ranked by lifetime spend",
                    })
                  : (0, a.jsx)(d.A, {
                      id: "settings.usage.topConsumingChats.subtitle",
                      defaultMessage: "Work and Codex chats active in the last 30 days ranked by lifetime credits",
                    }),
              })),
              (E[36] = B),
              (E[37] = v))
            : (v = E[37]),
          (g = y.X.Content),
          (f = "gap-3"),
          (c = x.t),
          (p = t
            ? (0, a.jsx)(I.u, {
                children: (0, a.jsx)(d.A, {
                  id: "settings.usage.topConsumingChats.loading",
                  defaultMessage: "Loading chat usage\u2026",
                }),
              })
            : s
              ? (0, a.jsx)(U.ic, {
                  label: (0, a.jsx)(d.A, {
                    id: "settings.usage.topConsumingChats.error",
                    defaultMessage: "Could not load chat usage",
                  }),
                  control: (0, a.jsx)(A.$, {
                    color: "secondary",
                    size: "toolbar",
                    onClick: () => {
                      ea ? el() : (0, D.Q)(Z, ed)
                    },
                    children: (0, a.jsx)(d.A, {
                      id: "settings.usage.topConsumingChats.retry",
                      defaultMessage: "Retry",
                    }),
                  }),
                })
              : null == _ || 0 === _.length
                ? (0, a.jsx)(h.W, {
                    layout: "settings-row",
                    children: (0, a.jsx)(d.A, {
                      id: "settings.usage.topConsumingChats.empty",
                      defaultMessage: "No chat activity during this period",
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
                            className: n && !B ? void 0 : "col-span-2",
                            children: (0, a.jsx)(d.A, {
                              id: "settings.usage.topConsumingChats.chatColumn",
                              defaultMessage: "Chat",
                            }),
                          }),
                          n
                            ? (0, a.jsx)("span", {
                                className: "text-end",
                                children: B
                                  ? (0, a.jsx)(d.A, {
                                      id: "settings.usage.topConsumingChats.nativeSpendColumn",
                                      defaultMessage: "Spent",
                                    })
                                  : (0, a.jsx)(d.A, {
                                      id: "settings.usage.topConsumingChats.estimatedSpendColumn",
                                      defaultMessage: "Est. $ spent",
                                    }),
                              })
                            : null,
                          B
                            ? null
                            : (0, a.jsx)("span", {
                                className: "text-end",
                                children: (0, a.jsx)(d.A, {
                                  id: "settings.usage.topConsumingChats.creditsColumn",
                                  defaultMessage: "Credits used",
                                }),
                              }),
                        ],
                      }),
                      _.slice(0, ep ? void 0 : 5).map((e) =>
                        (0, a.jsx)(z, { isUsdWorkspace: B, showEstimatedSpend: n, task: e }, e.conversationId),
                      ),
                    ],
                  })),
          (E[17] = er),
          (E[18] = ea),
          (E[19] = en),
          (E[20] = eg),
          (E[21] = em),
          (E[22] = B),
          (E[23] = el),
          (E[24] = Z),
          (E[25] = ed),
          (E[26] = ep),
          (E[27] = ec),
          (E[28] = c),
          (E[29] = g),
          (E[30] = m),
          (E[31] = p),
          (E[32] = f),
          (E[33] = v),
          (E[34] = _))
      } else ((c = E[28]), (g = E[29]), (m = E[30]), (p = E[31]), (f = E[32]), (v = E[33]), (_ = E[34]))
      return (
        E[38] !== c || E[39] !== p
          ? ((M = (0, a.jsx)(c, { children: p })), (E[38] = c), (E[39] = p), (E[40] = M))
          : (M = E[40]),
        E[41] !== ep || E[42] !== _
          ? ((C =
              null != _ && _.length > 5
                ? (0, a.jsx)(A.$, {
                    color: "secondary",
                    className: "self-start",
                    size: "compact",
                    onClick: () => {
                      ef(K)
                    },
                    children: ep
                      ? (0, a.jsx)(d.A, { id: "settings.usage.topConsumingChats.seeLess", defaultMessage: "See less" })
                      : (0, a.jsx)(d.A, { id: "settings.usage.topConsumingChats.seeMore", defaultMessage: "See more" }),
                  })
                : null),
            (E[41] = ep),
            (E[42] = _),
            (E[43] = C))
          : (C = E[43]),
        E[44] !== g || E[45] !== f || E[46] !== M || E[47] !== C
          ? ((L = (0, a.jsxs)(g, { className: f, children: [M, C] })),
            (E[44] = g),
            (E[45] = f),
            (E[46] = M),
            (E[47] = C),
            (E[48] = L))
          : (L = E[48]),
        E[49] !== m || E[50] !== v || E[51] !== L
          ? ((P = (0, a.jsxs)(m, { children: [v, L] })), (E[49] = m), (E[50] = v), (E[51] = L), (E[52] = P))
          : (P = E[52]),
        P
      )
    }
    function K(e) {
      return !e
    }
    function W(e) {
      let { usage: t } = e
      return null != t.costUsd
    }
    function X(e) {
      let { id: t } = e
      return (0, j.JXB)(t)
    }
    function q(e) {
      return !(0, M.I3)(e)
    }
    function z(e) {
      let t,
        s,
        i,
        l,
        o,
        u,
        c,
        g,
        m,
        h,
        p,
        f,
        y = (0, n.c)(36),
        { isUsdWorkspace: x, showEstimatedSpend: b, task: j } = e,
        w = (0, P.M0)()
      y[0] !== j.conversationId
        ? ((t = { hostId: T.fI, threadId: j.conversationId }), (y[0] = j.conversationId), (y[1] = t))
        : (t = y[1])
      let M = (0, k._U)(L.e, t) ?? j.title,
        A = (0, r.useId)(),
        S = (0, r.useRef)(null),
        [I, U] = (0, r.useState)(!1)
      y[2] !== w || y[3] !== j.conversationId
        ? ((s = (e) => {
            ;(e.preventDefault(), U(!1), w(j.conversationId))
          }),
          (y[2] = w),
          (y[3] = j.conversationId),
          (y[4] = s))
        : (s = y[4])
      let N = b && !x ? "flex min-w-0" : "col-span-2 flex min-w-0"
      return (
        y[5] !== M
          ? ((i =
              M ??
              (0, a.jsx)(d.A, { id: "settings.usage.topConsumingChats.untitled", defaultMessage: "Untitled chat" })),
            (y[5] = M),
            (y[6] = i))
          : (i = y[6]),
        y[7] !== i
          ? ((l = (0, a.jsx)(C.E, {
              className: "min-w-0 flex-1 underline underline-offset-2",
              animateOnGroupHover: !0,
              children: i,
            })),
            (y[7] = i),
            (y[8] = l))
          : (l = y[8]),
        y[9] !== N || y[10] !== l || y[11] !== A
          ? ((o = (0, a.jsx)("span", { id: A, className: N, children: l })),
            (y[9] = N),
            (y[10] = l),
            (y[11] = A),
            (y[12] = o))
          : (o = y[12]),
        y[13] !== x || y[14] !== b || y[15] !== j.usage
          ? ((u = b
              ? (0, a.jsx)("span", {
                  className: "text-end text-secondary",
                  children:
                    null == j.usage.costUsd
                      ? null
                      : (0, a.jsx)(_.Gr, {
                          value: j.usage.costUsd,
                          style: "currency",
                          currency: "USD",
                          maximumFractionDigits: x && 0.01 > Math.abs(j.usage.costUsd) ? 6 : 2,
                        }),
                })
              : null),
            (y[13] = x),
            (y[14] = b),
            (y[15] = j.usage),
            (y[16] = u))
          : (u = y[16]),
        y[17] !== x || y[18] !== j.usage
          ? ((c = x
              ? null
              : (0, a.jsx)("span", {
                  className: "text-end text-default",
                  children: (0, a.jsx)(_.Gr, { value: j.usage.creditsUsed, maximumFractionDigits: 0 }),
                })),
            (y[17] = x),
            (y[18] = j.usage),
            (y[19] = c))
          : (c = y[19]),
        y[20] !== s || y[21] !== o || y[22] !== u || y[23] !== c
          ? ((g = (0, a.jsx)(v.A.Trigger, {
              children: (0, a.jsxs)("button", {
                className:
                  "group grid h-[35px] w-full cursor-interaction grid-cols-[minmax(0,1fr)_6rem_6rem] items-center gap-2 px-4 text-start text-xs leading-4 select-none hover:bg-secondary-ghost-hover not-last:hover:after:opacity-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring has-[+button:hover]:after:opacity-0",
                ref: S,
                type: "button",
                onClick: s,
                children: [o, u, c],
              }),
            })),
            (y[20] = s),
            (y[21] = o),
            (y[22] = u),
            (y[23] = c),
            (y[24] = g))
          : (g = y[24]),
        y[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (e) => {
              "Escape" === e.key && (S.current?.focus(), U(!1))
            }),
            (y[25] = m))
          : (m = y[25]),
        y[26] !== j.usage || y[27] !== M
          ? ((h = (0, a.jsx)("div", {
              role: "presentation",
              onKeyUp: m,
              children: (0, a.jsx)(H.x, { title: M, usage: j.usage }),
            })),
            (y[26] = j.usage),
            (y[27] = M),
            (y[28] = h))
          : (h = y[28]),
        y[29] !== h || y[30] !== A
          ? ((p = (0, a.jsx)(v.A.Content, {
              "aria-labelledby": A,
              side: "top",
              sideOffset: 0,
              preventCloseOnFocusOutside: !0,
              width: 384,
              minWidth: "auto",
              children: h,
            })),
            (y[29] = h),
            (y[30] = A),
            (y[31] = p))
          : (p = y[31]),
        y[32] !== I || y[33] !== p || y[34] !== g
          ? ((f = (0, a.jsxs)(v.A, { showOnHover: !0, hoverOpenDelay: 0, open: I, onOpenChange: U, children: [g, p] })),
            (y[32] = I),
            (y[33] = p),
            (y[34] = g),
            (y[35] = f))
          : (f = y[35]),
        f
      )
    }
    function B(e, t) {
      return t.formatDate(new Date(e), {
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        timeZone: "UTC",
        timeZoneName: "short",
      })
    }
    var G = s("U4pl")
    function Z({ current: e, days: t, enabled: s, fallback: a = [], hasManualSelection: n, hasResolved: i }) {
      let l =
        s &&
        7 === t &&
        !n &&
        !i &&
        e.length > 0 &&
        e.every(({ isError: e, isLoading: t, total: s }) => !e && !t && 0 === s)
      if (!l || 0 === a.length) return { shouldProbe: l, shouldResolve: !1, shouldSelectThirtyDays: !1 }
      let r = a.some(({ total: e }) => (e ?? 0) > 0)
      return {
        shouldProbe: l,
        shouldResolve: r || a.every(({ isError: e, isLoading: t, total: s }) => e || (!t && null != s)),
        shouldSelectThirtyDays: r,
      }
    }
    var V = s("T0Rc"),
      Q = s("xBT4"),
      Y = s("qWrV"),
      J = s("RQya")
    function ee(e) {
      let t,
        s,
        i,
        l,
        u,
        g,
        m,
        h,
        x,
        b,
        v,
        k,
        j,
        w,
        _,
        M,
        A,
        C,
        S,
        I,
        U,
        N,
        T,
        L,
        D,
        P = (0, n.c)(107),
        { isActive: E, isPolling: O, reduceMotion: R, consumerAnalytics: F, scope: H } = e,
        $ = void 0 === O || O,
        K = void 0 !== F && F,
        W = (0, r.use)(Y.Wj)?.scope ?? null,
        X = (0, c.As)(),
        q = (0, o.A)(),
        [z, B] = (0, r.useState)(7),
        [ee, en] = (0, r.useState)("model"),
        [ei, el] = (0, r.useState)(null),
        er = X.accountId ?? null,
        eo = X.userId ?? null
      P[0] !== H || P[1] !== er || P[2] !== eo
        ? ((t = { accountId: er, userId: eo, scope: H, hasManualSelection: !1, hasResolved: !1 }),
          (P[0] = H),
          (P[1] = er),
          (P[2] = eo),
          (P[3] = t))
        : (t = P[3])
      let [ed, eu] = (0, r.useState)(t),
        ec = ed.accountId === (X.accountId ?? null) && ed.userId === (X.userId ?? null) && ed.scope === H
      ec ||
        (eu({
          accountId: X.accountId ?? null,
          userId: X.userId ?? null,
          scope: H,
          hasManualSelection: !1,
          hasResolved: !1,
        }),
        B(7),
        el(null))
      let [eg, em] = (0, r.useState)(!1)
      P[4] !== X || P[5] !== z || P[6] !== E || P[7] !== $ || P[8] !== H
        ? ((s = (0, f.F7)({ isPolling: $, auth: X, days: z, enabled: E, scope: H })),
          (P[4] = X),
          (P[5] = z),
          (P[6] = E),
          (P[7] = $),
          (P[8] = H),
          (P[9] = s))
        : (s = P[9])
      let eh = (0, V.I)(s),
        { data: ep, isLoading: ef, isError: ey, refetch: ex } = eh
      P[10] !== X || P[11] !== z || P[12] !== E || P[13] !== $ || P[14] !== H
        ? ((i = (0, f.my)({ isPolling: $, auth: X, days: z, enabled: E, scope: H })),
          (P[10] = X),
          (P[11] = z),
          (P[12] = E),
          (P[13] = $),
          (P[14] = H),
          (P[15] = i))
        : (i = P[15])
      let eb = (0, V.I)(i),
        { data: ev, isLoading: ek, isError: ej, refetch: ew } = eb,
        e_ = {
          current: [
            { total: ep?.byModel.total, isLoading: ef, isError: ey },
            ...("business" === H ? [{ total: ev?.total, isLoading: ek, isError: ej }] : []),
          ],
          days: z,
          enabled: E && ec,
          ...ed,
        },
        { shouldProbe: eM } = Z(e_),
        {
          data: eA,
          isLoading: eC,
          isError: eS,
        } = (0, V.I)((0, f.F7)({ isPolling: $, auth: X, days: 30, enabled: eM, scope: H })),
        eI = eM && "business" === H && !eC && !eS && eA?.byModel.total === 0,
        {
          data: eU,
          isLoading: eN,
          isError: eT,
        } = (0, V.I)((0, f.my)({ isPolling: $, auth: X, days: 30, enabled: eI, scope: H })),
        eL = Z({
          ...e_,
          fallback: [
            { total: eA?.byModel.total, isLoading: eC, isError: eS },
            ...(eI ? [{ total: eU?.total, isLoading: eN, isError: eT }] : []),
          ],
        }),
        eD = (eM && !eL.shouldResolve) || ("business" === H && ek && !ey)
      eL.shouldResolve && (eu(es), eL.shouldSelectThirtyDays && B(30))
      let [eP, eE] = (0, r.useState)(null),
        eO = eP?.accountId === (X.accountId ?? null) && eP.userId === (X.userId ?? null),
        eR = ef && !ey && null == ep && eO && null != eP.data.turns,
        eF = ek && !ej && null == ev && eO && null != eP.data.linesOfCode,
        eH = eR ? eP.data.turns : ep,
        e$ = eF ? eP.data.linesOfCode : ev,
        eK = eH?.["model" === ee ? "byModel" : "bySurface"],
        eW = eO && (eP.data.turns?.["model" === ee ? "byModel" : "bySurface"].total ?? 0) > 0 && eK?.total === 0,
        eX = eO && (eP.data.linesOfCode?.total ?? 0) > 0 && e$?.total === 0
      ;(P[16] !== E || P[17] !== eb || P[18] !== H || P[19] !== eh
        ? ((l = E
            ? (0, a.jsx)(J.F, { chart: "product_activity", queries: [eh, ...("business" === H ? [eb] : [])] })
            : null),
          (P[16] = E),
          (P[17] = eb),
          (P[18] = H),
          (P[19] = eh),
          (P[20] = l))
        : (l = P[20]),
        P[21] !== K
          ? ((g = K
              ? (0, a.jsx)(d.A, { id: "settings.usage.billing.messages.sectionTitle", defaultMessage: "Messages" })
              : (0, a.jsx)(d.A, {
                  id: "settings.usage.billing.productActivity.title",
                  defaultMessage: "Product activity",
                })),
            (u = K
              ? (0, a.jsx)(d.A, {
                  id: "settings.usage.billing.messages.subtitle",
                  defaultMessage: "Track the number of messages sent over time",
                })
              : (0, a.jsx)(d.A, {
                  id: "settings.usage.billing.productActivity.subtitle",
                  defaultMessage: "See how your activity varies across products and models",
                })),
            (P[21] = K),
            (P[22] = u),
            (P[23] = g))
          : ((u = P[22]), (g = P[23])),
        P[24] !== K || P[25] !== q
          ? ((m = K
              ? q.formatMessage({
                  id: "settings.usage.billing.messages.periodLabel",
                  defaultMessage: "Messages time range",
                })
              : q.formatMessage({
                  id: "settings.usage.billing.turns.periodLabel",
                  defaultMessage: "Turns and lines of code time range",
                })),
            (P[24] = K),
            (P[25] = q),
            (P[26] = m))
          : (m = P[26]),
        P[27] !== W ||
        P[28] !== X.accountId ||
        P[29] !== X.userId ||
        P[30] !== z ||
        P[31] !== e$ ||
        P[32] !== eK?.total ||
        P[33] !== eH
          ? ((h = (e) => {
              ;(e !== z && (0, Y.$c)(W, "product_activity", e),
                em(null != eH && eK?.total === 0),
                eE(
                  (eK?.total ?? 0) > 0 || (e$?.total ?? 0) > 0
                    ? { accountId: X.accountId ?? null, data: { turns: eH, linesOfCode: e$ }, userId: X.userId ?? null }
                    : null,
                ),
                eu(et),
                B(e))
            }),
            (P[27] = W),
            (P[28] = X.accountId),
            (P[29] = X.userId),
            (P[30] = z),
            (P[31] = e$),
            (P[32] = eK?.total),
            (P[33] = eH),
            (P[34] = h))
          : (h = P[34]),
        P[35] !== z || P[36] !== m || P[37] !== h
          ? ((x = (0, a.jsx)(G.tS, { ariaLabel: m, days: z, onChange: h })),
            (P[35] = z),
            (P[36] = m),
            (P[37] = h),
            (P[38] = x))
          : (x = P[38]),
        P[39] !== K || P[40] !== q
          ? ((b = K
              ? q.formatMessage({
                  id: "settings.usage.billing.messages.breakdownLabel",
                  defaultMessage: "Group messages by model or surface",
                })
              : q.formatMessage({
                  id: "settings.usage.billing.turns.breakdownLabel",
                  defaultMessage: "Group turns by model or surface",
                })),
            (P[39] = K),
            (P[40] = q),
            (P[41] = b))
          : (b = P[41]),
        P[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = { id: "model", label: (0, a.jsx)(G.d1, { breakdown: "model" }) }), (P[42] = v))
          : (v = P[42]),
        P[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = [v, { id: "surface", label: (0, a.jsx)(G.d1, { breakdown: "surface" }) }]), (P[43] = k))
          : (k = P[43]),
        P[44] !== W || P[45] !== ee
          ? ((j = (e) => {
              ;(e !== ee && (0, Y.to)(W, "product_activity", e), el(ee), en(e))
            }),
            (P[44] = W),
            (P[45] = ee),
            (P[46] = j))
          : (j = P[46]),
        P[47] !== ee || P[48] !== b || P[49] !== j
          ? ((w = (0, a.jsx)(p.T, { ariaLabel: b, options: k, selectedId: ee, variant: "inset", onSelect: j })),
            (P[47] = ee),
            (P[48] = b),
            (P[49] = j),
            (P[50] = w))
          : (w = P[50]),
        P[51] !== x || P[52] !== w
          ? ((_ = (0, a.jsxs)("div", { className: "flex flex-wrap items-center justify-end gap-2", children: [x, w] })),
            (P[51] = x),
            (P[52] = w),
            (P[53] = _))
          : (_ = P[53]),
        P[54] !== u || P[55] !== _ || P[56] !== g
          ? ((M = (0, a.jsx)(y.X.Header, {
              className: "max-sm:flex-col max-sm:items-stretch",
              actionsAlignment: "end",
              title: g,
              subtitle: u,
              actions: _,
            })),
            (P[54] = u),
            (P[55] = _),
            (P[56] = g),
            (P[57] = M))
          : (M = P[57]),
        P[58] !== K || P[59] !== e$?.total || P[60] !== eH || P[61] !== ef || P[62] !== eg || P[63] !== H
          ? ((A =
              null != eH || (ef && eg)
                ? (0, a.jsx)(ea, { consumerAnalytics: K, scope: H, hasNoLinesOfCode: e$?.total === 0 })
                : void 0),
            (P[58] = K),
            (P[59] = e$?.total),
            (P[60] = eH),
            (P[61] = ef),
            (P[62] = eg),
            (P[63] = H),
            (P[64] = A))
          : (A = P[64]))
      let eq = !R && ((null != ei && ei !== ee) || (null != ep && eO && null != eP.data.turns && eP.data.turns !== ep)),
        ez = ef || eD
      return (
        P[65] === Symbol.for("react.memo_cache_sentinel") ? ((C = () => el(null)), (P[65] = C)) : (C = P[65]),
        P[66] !== ex
          ? ((S = () => {
              ex()
            }),
            (P[66] = ex),
            (P[67] = S))
          : (S = P[67]),
        P[68] !== ey || P[69] !== eR || P[70] !== eg || P[71] !== R || P[72] !== eq || P[73] !== ez || P[74] !== S
          ? ((I = {
              animateDataChanges: eq,
              isError: ey,
              isLoading: ez,
              isUpdating: eR,
              preserveEmptyLayout: eg,
              reduceMotion: R,
              onAnimationEnd: C,
              onRetry: S,
            }),
            (P[68] = ey),
            (P[69] = eR),
            (P[70] = eg),
            (P[71] = R),
            (P[72] = eq),
            (P[73] = ez),
            (P[74] = S),
            (P[75] = I))
          : (I = P[75]),
        P[76] !== K
          ? ((U = K
              ? (0, a.jsx)(d.A, { id: "settings.usage.billing.messages.title", defaultMessage: "Messages" })
              : (0, a.jsx)(d.A, { id: "settings.usage.billing.turns.title", defaultMessage: "Turns" })),
            (P[76] = K),
            (P[77] = U))
          : (U = P[77]),
        P[78] !== ee ||
        P[79] !== K ||
        P[80] !== eK ||
        P[81] !== eW ||
        P[82] !== H ||
        P[83] !== A ||
        P[84] !== I ||
        P[85] !== U
          ? ((N = (0, a.jsx)(Q.t, {
              analyticsChart: "product_activity",
              consumerAnalytics: K,
              breakdown: ee,
              data: eK,
              emptyMessage: A,
              preservePopulatedCardLayout: eW,
              scope: H,
              status: I,
              title: U,
              unit: "turns",
            })),
            (P[78] = ee),
            (P[79] = K),
            (P[80] = eK),
            (P[81] = eW),
            (P[82] = H),
            (P[83] = A),
            (P[84] = I),
            (P[85] = U),
            (P[86] = N))
          : (N = P[86]),
        P[87] !== K ||
        P[88] !== e$ ||
        P[89] !== ej ||
        P[90] !== ek ||
        P[91] !== eF ||
        P[92] !== ev ||
        P[93] !== eX ||
        P[94] !== eP ||
        P[95] !== eO ||
        P[96] !== R ||
        P[97] !== ew ||
        P[98] !== H
          ? ((T =
              "business" === H && ((e$?.total ?? 0) > 0 || eX || ej)
                ? (0, a.jsx)(Q.t, {
                    analyticsChart: "product_activity",
                    consumerAnalytics: K,
                    data: e$,
                    emptyMessage: (0, a.jsx)(d.A, {
                      id: "settings.usage.billing.linesOfCode.empty",
                      defaultMessage: "No lines of code during this period",
                    }),
                    preservePopulatedCardLayout: eX,
                    scope: H,
                    status: {
                      animateDataChanges:
                        !R && null != ev && eO && null != eP.data.linesOfCode && eP.data.linesOfCode !== ev,
                      isError: ej,
                      isLoading: ek,
                      isUpdating: eF,
                      reduceMotion: R,
                      onRetry: () => {
                        ew()
                      },
                    },
                    title: (0, a.jsx)(d.A, {
                      id: "settings.usage.billing.linesOfCode.title",
                      defaultMessage: "Lines of code",
                    }),
                    unit: "lines",
                  })
                : null),
            (P[87] = K),
            (P[88] = e$),
            (P[89] = ej),
            (P[90] = ek),
            (P[91] = eF),
            (P[92] = ev),
            (P[93] = eX),
            (P[94] = eP),
            (P[95] = eO),
            (P[96] = R),
            (P[97] = ew),
            (P[98] = H),
            (P[99] = T))
          : (T = P[99]),
        P[100] !== N || P[101] !== T
          ? ((L = (0, a.jsxs)(y.X.Content, { className: "gap-3", children: [N, T] })),
            (P[100] = N),
            (P[101] = T),
            (P[102] = L))
          : (L = P[102]),
        P[103] !== M || P[104] !== L || P[105] !== l
          ? ((D = (0, a.jsxs)(y.X, { children: [l, M, L] })), (P[103] = M), (P[104] = L), (P[105] = l), (P[106] = D))
          : (D = P[106]),
        D
      )
    }
    function et(e) {
      return { ...e, hasManualSelection: !0 }
    }
    function es(e) {
      return { ...e, hasResolved: !0 }
    }
    function ea(e) {
      let t,
        s = (0, n.c)(3),
        { consumerAnalytics: i, scope: l, hasNoLinesOfCode: r } = e
      if (void 0 !== i && i) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.usage.billing.messages.empty",
                defaultMessage: "No messages during this period",
              })),
              (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      if ("business" === l && r) {
        let e
        return (
          s[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.usage.billing.productActivity.empty",
                defaultMessage: "No turns or lines of code during this period",
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
            })),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    var en = s("MFyU"),
      ei = s("xCr9"),
      el = s.n(ei),
      er = s("x8Nb"),
      eo = s("j2jv"),
      ed = s("sGKa"),
      eu = s("NxWE"),
      ec = s("OuWM"),
      eg = s("ZOaQ"),
      em = s("V8uZ"),
      eh = s("o6lh"),
      ep = s("Rd02"),
      ef = s("RUEO"),
      ey = s("O5Ra")
    let ex = (0, _.YK)({
      desktop_app: { id: "settings.usage.surface.desktopApp", defaultMessage: "Desktop App" },
      work_desktop: { id: "settings.usage.surface.workDesktop", defaultMessage: "Desktop (Work)" },
      cli: { id: "settings.usage.surface.cli", defaultMessage: "CLI" },
      vscode: { id: "settings.usage.surface.vscode", defaultMessage: "Extension" },
      web: { id: "settings.usage.surface.web", defaultMessage: "Cloud" },
      work_web: { id: "settings.usage.surface.workWeb", defaultMessage: "Web" },
      mobile: { id: "settings.usage.surface.mobile", defaultMessage: "Mobile" },
      work_mobile: { id: "settings.usage.surface.workMobile", defaultMessage: "Mobile" },
      agent_identity: { id: "settings.usage.surface.agentIdentity", defaultMessage: "Access tokens" },
      github: { id: "settings.usage.surface.github", defaultMessage: "GitHub" },
      github_code_review: { id: "settings.usage.surface.githubCodeReview", defaultMessage: "GitHub code review" },
      codex_security_cloud: {
        id: "settings.usage.surface.daybreakDefenseFactory",
        defaultMessage: "Daybreak Defense Factory",
      },
      jetbrains: { id: "settings.usage.surface.jetbrains", defaultMessage: "JetBrains" },
      slack: { id: "settings.usage.surface.slack", defaultMessage: "Slack" },
      linear: { id: "settings.usage.surface.linear", defaultMessage: "Linear" },
      sdk: { id: "settings.usage.surface.sdk", defaultMessage: "SDK" },
      exec: { id: "settings.usage.surface.exec", defaultMessage: "Exec" },
      unknown: { id: "settings.usage.surface.unknown", defaultMessage: "Uncategorized" },
      other: { id: "settings.usage.surface.other", defaultMessage: "Other" },
    })
    var eb = s("qF12")
    let ev = [
      ...eh.Kj,
      "var(--color-chart-yellow)",
      "var(--color-chart-red)",
      "var(--color-chart-purple)",
      "var(--color-text-tertiary)",
    ]
    var ek = s("MIRZ"),
      ej = s("O28E"),
      ew = s("pWo8"),
      e_ = s("suct"),
      eM = s("iodE"),
      eA = s("K4Cx")
    let eC = {
      enter: (e) => ({ x: `${100 * e}%` }),
      visible: { x: "0%" },
      exit: (e) => ({ x: `${-(100 * e)}%`, transition: 0 === e ? { duration: 0 } : em.jl }),
    }
    function eS(e) {
      let t,
        s,
        i = (0, n.c)(7),
        { children: l, rangeKey: r, direction: o, reduceMotion: d } = e,
        u = void 0 !== d && d
      return (
        i[0] !== l || i[1] !== o || i[2] !== r || i[3] !== u
          ? ((t = u
              ? l
              : (0, a.jsx)(e_.N, {
                  initial: !1,
                  custom: o,
                  children: (0, a.jsx)(eI, { direction: o, children: l }, r),
                })),
            (i[0] = l),
            (i[1] = o),
            (i[2] = r),
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
    function eI(e) {
      let t,
        s,
        i,
        o,
        d,
        u = (0, n.c)(13),
        { children: c, direction: g } = e,
        m = (0, eM.tF)(),
        [h, p] = (0, r.useState)(!1),
        f = (!m || h) && "pointer-events-none"
      u[0] !== f
        ? ((t = (0, l.A)("col-start-1 row-start-1 h-full min-h-0 min-w-0", f)), (u[0] = f), (u[1] = t))
        : (t = u[1])
      let y = !m || void 0,
        x = !m
      return (
        u[2] !== g ? ((s = 0 === g ? { duration: 0 } : em.jl), (u[2] = g), (u[3] = s)) : (s = u[3]),
        u[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = () => p(!0)), (o = () => p(!1)), (u[4] = i), (u[5] = o))
          : ((i = u[4]), (o = u[5])),
        u[6] !== c || u[7] !== g || u[8] !== t || u[9] !== y || u[10] !== x || u[11] !== s
          ? ((d = (0, a.jsx)(eA.P.div, {
              className: t,
              "aria-hidden": y,
              inert: x,
              custom: g,
              variants: eC,
              initial: "enter",
              animate: "visible",
              exit: "exit",
              transition: s,
              onAnimationStart: i,
              onAnimationComplete: o,
              children: c,
            })),
            (u[6] = c),
            (u[7] = g),
            (u[8] = t),
            (u[9] = y),
            (u[10] = x),
            (u[11] = s),
            (u[12] = d))
          : (d = u[12]),
        d
      )
    }
    var eU = s("g2yw"),
      eN = s("BhIm")
    function eT(e) {
      let t,
        s,
        i,
        l,
        u,
        c,
        g,
        m,
        h,
        p,
        f,
        y,
        x,
        b,
        v = (0, n.c)(293),
        {
          actions: k,
          analyticsChart: j,
          ariaLabel: w,
          barSize: _,
          breakdown: M,
          data: A,
          dateRange: C,
          emptyMessage: S,
          estimatedSpendUsd: I,
          hideTotal: U,
          isPersonalUsage: N,
          preservePopulatedCardLayout: T,
          consumerAnalytics: L,
          selectedDayLegend: D,
          rangeDirection: P,
          scope: E,
          status: O,
          title: R,
          unit: F,
        } = e,
        H = void 0 !== N && N,
        $ = void 0 !== T && T,
        K = void 0 !== L && L,
        W = void 0 !== D && D,
        X = void 0 === F ? "credits" : F,
        q = (0, o.A)(),
        z = "usd" === X,
        B = null != A && "bucketTotals" in A ? A : void 0,
        G = B?.data[0]?.date
      v[0] !== B?.data || v[1] !== B?.data.at
        ? ((t = B?.data.at(-1)?.date), (v[0] = B?.data), (v[1] = B?.data.at), (v[2] = t))
        : (t = v[2])
      let Z = t,
        V = `${G}:${Z}`,
        [Q, Y] = (0, r.useState)(V),
        [J, ee] = (0, r.useState)(null),
        [et, es] = (0, r.useState)(null)
      v[3] !== J || v[4] !== B?.data || v[5] !== B?.data.findIndex
        ? ((s =
            B?.data.findIndex((e) => {
              let { date: t } = e
              return t === J
            }) ?? -1),
          (v[3] = J),
          (v[4] = B?.data),
          (v[5] = B?.data.findIndex),
          (v[6] = s))
        : (s = v[6])
      let ea = s
      v[7] !== et || v[8] !== ea || v[9] !== B?.data || v[10] !== B?.data.findIndex
        ? ((i =
            ea >= 0
              ? ea
              : (B?.data.findIndex((e) => {
                  let { date: t } = e
                  return t === et
                }) ?? -1)),
          (v[7] = et),
          (v[8] = ea),
          (v[9] = B?.data),
          (v[10] = B?.data.findIndex),
          (v[11] = i))
        : (i = v[11])
      let ei = i,
        em = B?.data[ei],
        e_ = em?.date,
        eM = (0, r.useId)(),
        [eA, eC] = (0, r.useState)(null),
        [eI, eT] = (0, r.useState)(null),
        [eO, eR] = (0, r.useState)(void 0),
        [eF, eH] = (0, r.useState)(!1)
      Q !== V && (Y(V), ee(null), es(null), eH(!1))
      let [e$, eK] = (0, r.useState)(null)
      v[12] !== A || v[13] !== eA || v[14] !== H || v[15] !== E || v[16] !== W
        ? ((l =
            W ||
            (H &&
              "workspace" !== E &&
              null != eA &&
              !A?.series.some((e) => {
                let { key: t } = e
                return t === eA
              }))
              ? null
              : eA),
          (v[12] = A),
          (v[13] = eA),
          (v[14] = H),
          (v[15] = E),
          (v[16] = W),
          (v[17] = l))
        : (l = v[17])
      let eW = l,
        [eX, eq] = (0, r.useState)(null),
        [ez, eB] = (0, r.useState)(null),
        eG = A?.total ?? 0,
        eZ = null != B || (H && (null == A || !("units" in A) || "credits" !== A.units)),
        eV = z || null == I || eG <= 0 ? null : I / eG
      v[18] !== M || v[19] !== K || v[20] !== A || v[21] !== q || v[22] !== H || v[23] !== E || v[24] !== X
        ? ((u = (function ({
            breakdown: e,
            data: t,
            intl: s,
            isPersonalUsage: a,
            unit: n,
            scope: i,
            consumerAnalytics: l,
          }) {
            let r = null != t && "bucketTotals" in t,
              o = r
                ? new Map(t.series.toSorted((e, t) => t.total - e.total).map(({ key: e }, t) => [e, ev[t % ev.length]]))
                : null,
              d = ["codex", "work", ...Object.keys(ex)],
              u = (
                r
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
                  if (r) return { key: t, name: a, total: n, color: o?.get(t) }
                  let u = l ? eh.Kj[d % eh.Kj.length] : void 0
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
                                    },
                                    { product: e },
                                  )
                                return t
                              case "model":
                                if ("workspace" === n) return t
                                return "other" === e ? a.formatMessage(ex.other) : (0, ey.K)(t)
                              case "reasoning":
                                return a.formatMessage(
                                  {
                                    id: "settings.usage.billing.credits.history.reasoningSeries",
                                    defaultMessage:
                                      "{effort, select, none {None} minimal {Minimal} low {Light} medium {Medium} high {High} xhigh {Extra High} max {Max} ultra {Ultra} unspecified {Unspecified} unknown {Unknown} other {Other}}",
                                  },
                                  { effort: e },
                                )
                              case "speed":
                                return a.formatMessage(
                                  {
                                    id: "settings.usage.billing.credits.history.speedSeries",
                                    defaultMessage:
                                      "{speed, select, fast {Fast mode} ultrafast {Ultrafast} standard {Standard} unknown {Unknown} other {Other}}",
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
                  l || "usd" === n ? t?.data.some((t) => (t.values[e] ?? 0) !== 0) : s > 0,
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
                        color: l ? (0, eb.AS)(c) : void 0,
                        key: eb.bG,
                        name: s.formatMessage({ id: "settings.usage.billing.history.other", defaultMessage: "Other" }),
                      },
                    ],
              otherSeries: g,
              otherSeriesKeys: g.map(({ key: e }) => e),
            }
          })({ breakdown: M, data: A, intl: q, isPersonalUsage: H, unit: X, scope: E, consumerAnalytics: K })),
          (v[18] = M),
          (v[19] = K),
          (v[20] = A),
          (v[21] = q),
          (v[22] = H),
          (v[23] = E),
          (v[24] = X),
          (v[25] = u))
        : (u = v[25])
      let { availableSeries: eQ, barSeries: eY, otherSeries: eJ, otherSeriesKeys: e1 } = u
      v[26] !== eY || v[27] !== E || v[28] !== eX
        ? ((c =
            "workspace" === E ||
            null == eX ||
            eY.some((e) => {
              let { key: t } = e
              return !eX.has(t)
            })
              ? eX
              : null),
          (v[26] = eY),
          (v[27] = E),
          (v[28] = eX),
          (v[29] = c))
        : (c = v[29])
      let e0 = c
      v[30] !== eY || v[31] !== K || v[32] !== z || v[33] !== e0 || v[34] !== eX
        ? ((g = K || z ? (0, eb.Ft)(eX, eY) : e0),
          (v[30] = eY),
          (v[31] = K),
          (v[32] = z),
          (v[33] = e0),
          (v[34] = eX),
          (v[35] = g))
        : (g = v[35])
      let e2 = g
      v[36] !== eY || v[37] !== e2 || v[38] !== eI
        ? ((m = eY.some((e) => {
            let { key: t } = e
            return t === eI && !e2?.has(t)
          })
            ? eI
            : null),
          (v[36] = eY),
          (v[37] = e2),
          (v[38] = eI),
          (v[39] = m))
        : (m = v[39])
      let e3 = m,
        e4 = null != ez && ez.history === A && ez.series === (K || z ? eX : e2)
      v[40] !== eY ||
      v[41] !== K ||
      v[42] !== e2 ||
      v[43] !== e4 ||
      v[44] !== B ||
      v[45] !== ez ||
      v[46] !== O.reduceMotion
        ? ((h =
            K && null != B
              ? B.data.map(
                  (e, t) =>
                    el()(eY, (s) => {
                      let { key: a } = s
                      return (
                        (!e2?.has(a) || (!O.reduceMotion && e4 && ez.topSeriesKeys?.[t] === a)) &&
                        (e.values[a] ?? 0) > 0
                      )
                    })?.key,
                )
              : void 0),
          (v[40] = eY),
          (v[41] = K),
          (v[42] = e2),
          (v[43] = e4),
          (v[44] = B),
          (v[45] = ez),
          (v[46] = O.reduceMotion),
          (v[47] = h))
        : (h = v[47])
      let e5 = h,
        e6 = A?.total
      if (null != A && e2?.size) {
        let e = 0,
          t = 0
        if (v[48] !== eQ || v[49] !== eY || v[50] !== e2 || v[51] !== e || v[52] !== t) {
          for (let s of eQ) {
            let a = eY.some((e) => {
              let { key: t } = e
              return t === s.key
            })
              ? s.key
              : eb.bG
            e2.has(a) ? (e += s.total) : (t += s.total)
          }
          ;((v[48] = eQ), (v[49] = eY), (v[50] = e2), (v[51] = e), (v[52] = t), (v[53] = e), (v[54] = t))
        } else ((e = v[53]), (t = v[54]))
        e6 = z ? t : A.total - e
      }
      v[55] !== A?.data || v[56] !== A?.data.reduce || v[57] !== B
        ? ((p = A?.data.reduce(
            (e, t) => Math.max(e, null != B ? (B.bucketTotals[t.date] ?? 0) : Object.values(t.values).reduce(eE, 0)),
            0,
          )),
          (v[55] = A?.data),
          (v[56] = A?.data.reduce),
          (v[57] = B),
          (v[58] = p))
        : (p = v[58])
      let e8 = p
      v[59] !== eY || v[60] !== A || v[61] !== z || v[62] !== eJ
        ? ((f = z
            ? A?.data.reduce(
                (e, t) => {
                  let s = 0,
                    a = 0
                  for (let e of eY) {
                    let n =
                      e.key === eb.bG ? eJ.reduce((e, s) => e + (t.values[s.key] ?? 0), 0) : (t.values[e.key] ?? 0)
                    ;((s += Math.max(0, n)), (a += Math.min(0, n)))
                  }
                  return { minimum: Math.min(e.minimum, a), maximum: Math.max(e.maximum, s) }
                },
                { minimum: 0, maximum: 0 },
              )
            : void 0),
          (v[59] = eY),
          (v[60] = A),
          (v[61] = z),
          (v[62] = eJ),
          (v[63] = f))
        : (f = v[63])
      let e7 = f
      v[64] !== B
        ? ((y = B?.data.every((e) => {
            let { date: t } = e
            return null != B.bucketTotals[t]
          })
            ? B.data.reduce((e, t) => {
                let { date: s } = t
                return e + (B.bucketTotals[s] ?? 0)
              }, 0)
            : 0),
          (v[64] = B),
          (v[65] = y))
        : (y = v[65])
      let e9 = y,
        te = null == e_ ? e9 : B?.bucketTotals[e_],
        tt = C?.startDate ?? G,
        ts = C?.endDate ?? Z
      v[66] !== q || v[67] !== e_ || v[68] !== ts || v[69] !== tt
        ? ((x =
            null != tt && null != ts
              ? q.formatDateTimeRange(new Date(`${e_ ?? tt}T00:00:00Z`), new Date(`${e_ ?? ts}T00:00:00Z`), {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                  timeZone: "UTC",
                })
              : void 0),
          (v[66] = q),
          (v[67] = e_),
          (v[68] = ts),
          (v[69] = tt),
          (v[70] = x))
        : (x = v[70])
      let ta = x
      if (
        v[71] !== k ||
        v[72] !== e3 ||
        v[73] !== eW ||
        v[74] !== j ||
        v[75] !== w ||
        v[76] !== eY ||
        v[77] !== _ ||
        v[78] !== eO ||
        v[79] !== K ||
        v[80] !== A ||
        v[81] !== S ||
        v[82] !== I ||
        v[83] !== G ||
        v[84] !== e2 ||
        v[85] !== U ||
        v[86] !== q ||
        v[87] !== H ||
        v[88] !== eZ ||
        v[89] !== e4 ||
        v[90] !== eF ||
        v[91] !== z ||
        v[92] !== Z ||
        v[93] !== e_ ||
        v[94] !== ei ||
        v[95] !== ta ||
        v[96] !== em ||
        v[97] !== te ||
        v[98] !== e8 ||
        v[99] !== eJ ||
        v[100] !== e1 ||
        v[101] !== e9 ||
        v[102] !== ea ||
        v[103] !== $ ||
        v[104] !== P ||
        v[105] !== V ||
        v[106] !== B ||
        v[107] !== ez ||
        v[108] !== E ||
        v[109] !== W ||
        v[110] !== e7?.maximum ||
        v[111] !== e7?.minimum ||
        v[112] !== e$ ||
        v[113] !== eM ||
        v[114] !== O ||
        v[115] !== eX ||
        v[116] !== R ||
        v[117] !== e5 ||
        v[118] !== eG ||
        v[119] !== X ||
        v[120] !== eV ||
        v[121] !== e6
      ) {
        let e,
          t,
          s,
          n,
          i,
          l,
          r,
          o,
          u,
          c,
          g,
          m,
          h,
          p,
          f,
          y,
          x,
          M,
          C,
          N,
          T,
          L,
          D,
          F,
          Q,
          Y,
          J,
          et,
          el,
          ey =
            W && null != B
              ? new Map(
                  eY.map((e) => {
                    let { key: t, total: s } = e
                    return [t, null != te && te > 0 ? (null == em ? (s ?? 0) : (em.values[t] ?? 0)) / te : null]
                  }),
                )
              : void 0
        if (
          v[123] !== eY ||
          v[124] !== G ||
          v[125] !== q ||
          v[126] !== Z ||
          v[127] !== e9 ||
          v[128] !== B ||
          v[129] !== W
        ) {
          let t
          ;(v[131] !== G || v[132] !== q || v[133] !== Z || v[134] !== e9 || v[135] !== B || v[136] !== W
            ? ((t = (e) =>
                W || null == B || e9 <= 0 || null == G || null == Z
                  ? e
                  : {
                      ...e,
                      tooltip: (0, a.jsx)(d.A, {
                        id: "settings.usage.billing.chart.legend.totalUsagePeriodSummary",
                        defaultMessage: "{series} \xb7 {share} of total usage \xb7 {period} UTC",
                        values: {
                          series: e.name,
                          share: q.formatNumber((e.total ?? 0) / e9, { style: "percent", maximumFractionDigits: 1 }),
                          period: q.formatDateTimeRange(new Date(`${G}T00:00:00Z`), new Date(`${Z}T00:00:00Z`), {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                            timeZone: "UTC",
                          }),
                        },
                      }),
                    }),
              (v[131] = G),
              (v[132] = q),
              (v[133] = Z),
              (v[134] = e9),
              (v[135] = B),
              (v[136] = W),
              (v[137] = t))
            : (t = v[137]),
            (e = eY.map(t)),
            (v[123] = eY),
            (v[124] = G),
            (v[125] = q),
            (v[126] = Z),
            (v[127] = e9),
            (v[128] = B),
            (v[129] = W),
            (v[130] = e))
        } else e = v[130]
        let ex = e,
          { onAnimationEnd: ev } = O
        v[138] !== ev || v[139] !== ez
          ? ((t = () => {
              ;(ev?.(), eB((e) => (e === ez ? null : e)))
            }),
            (v[138] = ev),
            (v[139] = ez),
            (v[140] = t))
          : (t = v[140])
        let eA = t
        v[141] !== A || v[142] !== ev
          ? ((s = () => {
              ;(eR(A), eB(null), ev?.())
            }),
            (v[141] = A),
            (v[142] = ev),
            (v[143] = s))
          : (s = v[143])
        let eI = s
        v[144] !== A || v[145] !== e5
          ? ((n = (e) => {
              ;(eR(A), eB(null == A ? null : { history: A, series: e, topSeriesKeys: e5 }), eq(e))
            }),
            (v[144] = A),
            (v[145] = e5),
            (v[146] = n))
          : (n = v[146])
        let eE = n
        v[147] !== B
          ? ((i = (e, t, s) => {
              s.stopPropagation()
              let a = B?.data[t]?.date
              null != a && (ee((e) => (e === a ? null : a)), es(null), eH(!0))
            }),
            (v[147] = B),
            (v[148] = i))
          : (i = v[148])
        let eQ = i
        v[149] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = () => {
              ;(ee(null), es(null), eH(!0))
            }),
            (v[149] = l))
          : (l = v[149])
        let e0 = l
        if (
          v[150] !== e3 ||
          v[151] !== eY ||
          v[152] !== eO ||
          v[153] !== K ||
          v[154] !== A ||
          v[155] !== eA ||
          v[156] !== eI ||
          v[157] !== eQ ||
          v[158] !== e2 ||
          v[159] !== H ||
          v[160] !== e4 ||
          v[161] !== eF ||
          v[162] !== eJ ||
          v[163] !== e1 ||
          v[164] !== ea ||
          v[165] !== V ||
          v[166] !== E ||
          v[167] !== W ||
          v[168] !== eM ||
          v[169] !== O.animateDataChanges ||
          v[170] !== O.reduceMotion ||
          v[171] !== e5
        ) {
          let e
          ;(v[173] !== e3 ||
          v[174] !== eO ||
          v[175] !== K ||
          v[176] !== A ||
          v[177] !== eA ||
          v[178] !== eI ||
          v[179] !== eQ ||
          v[180] !== e2 ||
          v[181] !== H ||
          v[182] !== e4 ||
          v[183] !== eF ||
          v[184] !== eJ ||
          v[185] !== e1 ||
          v[186] !== ea ||
          v[187] !== V ||
          v[188] !== E ||
          v[189] !== W ||
          v[190] !== eM ||
          v[191] !== O.animateDataChanges ||
          v[192] !== O.reduceMotion ||
          v[193] !== e5
            ? ((e = (e, t) =>
                K
                  ? (0, a.jsx)(
                      ef.h,
                      {
                        seriesKey: e.key,
                        name: e.key,
                        color: e.color,
                        dimmed: null != e3 && e3 !== e.key,
                        highlightHoveredDay: W && !eF,
                        pinnedDayIndex: ea >= 0 ? ea : void 0,
                        hidden: !!e2?.has(e.key),
                        otherSeriesKeys: e.key === eb.bG ? e1 : void 0,
                        stackId: "usage",
                        stackClipId: null == e5 ? void 0 : `${eM}-${V}`,
                        topSeriesKeys: e5,
                        stackRadius: eb.Ib,
                        grow: !!O.animateDataChanges && (!W || eO !== A) && !e4 && !O.reduceMotion,
                        restack: e4 && !O.reduceMotion,
                        onAnimationEnd: eA,
                        onClick: W ? eQ : void 0,
                        onGrowEnd: eI,
                        onHoverChange: W ? void 0 : eC,
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
                              ? eJ.reduce((e, s) => e + (t.values[s.key] ?? 0), 0)
                              : (t.values[e.key] ?? 0),
                        fill: e.color ?? eh.Kj[t % eh.Kj.length],
                        isAnimationActive: !O.reduceMotion && (("workspace" !== E && !!O.animateDataChanges) || e4),
                        name: e.key,
                        onAnimationEnd: eA,
                        onMouseEnter: () => {
                          eC(e.key)
                        },
                        onMouseLeave: () => {
                          eC(null)
                        },
                        radius: 0,
                        stackId: "usage",
                      },
                      H ? t : e.key,
                    )),
              (v[173] = e3),
              (v[174] = eO),
              (v[175] = K),
              (v[176] = A),
              (v[177] = eA),
              (v[178] = eI),
              (v[179] = eQ),
              (v[180] = e2),
              (v[181] = H),
              (v[182] = e4),
              (v[183] = eF),
              (v[184] = eJ),
              (v[185] = e1),
              (v[186] = ea),
              (v[187] = V),
              (v[188] = E),
              (v[189] = W),
              (v[190] = eM),
              (v[191] = O.animateDataChanges),
              (v[192] = O.reduceMotion),
              (v[193] = e5),
              (v[194] = e))
            : (e = v[194]),
            (r = eY.map(e)),
            (v[150] = e3),
            (v[151] = eY),
            (v[152] = eO),
            (v[153] = K),
            (v[154] = A),
            (v[155] = eA),
            (v[156] = eI),
            (v[157] = eQ),
            (v[158] = e2),
            (v[159] = H),
            (v[160] = e4),
            (v[161] = eF),
            (v[162] = eJ),
            (v[163] = e1),
            (v[164] = ea),
            (v[165] = V),
            (v[166] = E),
            (v[167] = W),
            (v[168] = eM),
            (v[169] = O.animateDataChanges),
            (v[170] = O.reduceMotion),
            (v[171] = e5),
            (v[172] = r))
        } else r = v[172]
        let tt = r
        v[195] !== K || v[196] !== q || v[197] !== H || v[198] !== E || v[199] !== X
          ? ((o = (function (e, t, s, n, i) {
              if ("usd" === i)
                return {
                  title: (0, a.jsx)(d.A, { id: "settings.usage.billing.spend.title", defaultMessage: "Spend" }),
                  ariaLabel: e.formatMessage({
                    id: "settings.usage.billing.spend.chartLabel",
                    defaultMessage: "Spend in USD",
                  }),
                  emptyMessage: (0, a.jsx)(d.A, {
                    id: "settings.usage.billing.spend.empty",
                    defaultMessage: "No spend recorded during this period",
                  }),
                }
              let l = t
                ? (0, a.jsx)(d.A, { id: "settings.usage.billing.chart.empty", defaultMessage: "No usage recorded yet" })
                : (0, a.jsx)(d.A, {
                    id: "settings.usage.billing.credits.empty",
                    defaultMessage: "No plan usage or credits consumed during this period",
                  })
              return t
                ? {
                    emptyMessage: l,
                    title: (0, a.jsx)(d.A, {
                      id: "settings.usage.billing.personalUsage.title",
                      defaultMessage: "Plan usage",
                    }),
                    ariaLabel: e.formatMessage({
                      id: "settings.usage.billing.personalUsage.chartLabel",
                      defaultMessage: "Plan usage",
                    }),
                  }
                : "workspace" === s || n
                  ? {
                      emptyMessage: l,
                      title: (0, a.jsx)(d.A, {
                        id: "settings.usage.billing.credits.title",
                        defaultMessage: "Credits used",
                      }),
                      ariaLabel: e.formatMessage({
                        id: "settings.usage.billing.credits.chartLabel",
                        defaultMessage: "Credits used",
                      }),
                    }
                  : {
                      emptyMessage: l,
                      title: (0, a.jsx)(d.A, {
                        id: "settings.usage.billing.credits.personalTitle",
                        defaultMessage: "Credits spent",
                      }),
                      ariaLabel: e.formatMessage({
                        id: "settings.usage.billing.credits.personalChartLabel",
                        defaultMessage: "Credits spent",
                      }),
                    }
            })(q, H, E, K, X)),
            (v[195] = K),
            (v[196] = q),
            (v[197] = H),
            (v[198] = E),
            (v[199] = X),
            (v[200] = o))
          : (o = v[200])
        let ts = o,
          tn = void 0 === R ? ts.title : R
        if (W && null != ta) {
          let e
          ;(v[201] !== q || v[202] !== e_ || v[203] !== ta
            ? ((e = null == e_ ? ta : (0, a.jsx)("time", { dateTime: e_, children: (0, ek.e)(e_, q) })),
              (v[201] = q),
              (v[202] = e_),
              (v[203] = ta),
              (v[204] = e))
            : (e = v[204]),
            (tn = e))
        }
        let ti = I
        ;(z ? (ti = void 0) : e2?.size && null != eV && null != e6 && (ti = e6 * eV),
          v[205] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = () => {
                ;(eK(null), eC(null), es(null))
              }),
              (v[205] = u))
            : (u = v[205]))
        let tl = !W
        v[206] !== W ? ((c = W ? [] : void 0), (v[206] = W), (v[207] = c)) : (c = v[207])
        let tr = W ? void 0 : (w ?? ts.ariaLabel),
          to = A?.data,
          td = null == B ? 4 : 20
        v[208] !== td ? ((g = { top: td, right: 0, left: 0, bottom: 0 }), (v[208] = td), (v[209] = g)) : (g = v[209])
        let tu = "workspace" !== E && A?.data.length === 1 ? 44 : void 0,
          tc = z ? "sign" : void 0,
          tg = W ? e0 : void 0,
          tm = "workspace" === E ? void 0 : eP
        ;(v[210] !== K ? ((m = K ? () => eK(null) : void 0), (v[210] = K), (v[211] = m)) : (m = v[211]),
          v[212] !== K || v[213] !== W
            ? ((h = K
                ? (e, t) => {
                    let { activeLabel: s, isTooltipActive: a } = e
                    W ? es(a && "string" == typeof s ? s : null) : eK((0, ew.nV)(t, !1, !0))
                  }
                : void 0),
              (v[212] = K),
              (v[213] = W),
              (v[214] = h))
            : (h = v[214]),
          v[215] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = (0, a.jsx)(eo.d, { stroke: "var(--color-border-subtle)", vertical: !1 })), (v[215] = p))
            : (p = v[215]))
        let th = null != B,
          tp = e7?.maximum ?? e8,
          tf = e7?.minimum,
          ty = eZ ? "percent" : X
        ;(v[216] !== th || v[217] !== tp || v[218] !== tf || v[219] !== ty
          ? ((f = (0, a.jsx)(ep.Qr, {
              hideValues: th,
              maximumValue: tp,
              minimumValue: tf,
              showPercentageUnit: !1,
              unit: ty,
            })),
            (v[216] = th),
            (v[217] = tp),
            (v[218] = tf),
            (v[219] = ty),
            (v[220] = f))
          : (f = v[220]),
          v[221] !== B
            ? ((y = null == B ? void 0 : { left: 20, right: 20 }), (v[221] = B), (v[222] = y))
            : (y = v[222]))
        let tx = null == B ? ep.ps : eD
        v[223] !== q ? ((x = (e) => (0, ek.e)(e, q)), (v[223] = q), (v[224] = x)) : (x = v[224])
        let tb = A?.data
        ;(v[225] !== tb ? ((M = (0, ek.j)(tb)), (v[225] = tb), (v[226] = M)) : (M = v[226]),
          v[227] !== y || v[228] !== tx || v[229] !== x || v[230] !== M
            ? ((C = (0, a.jsx)(ed.W, {
                axisLine: !1,
                dataKey: "date",
                height: 22,
                interval: 0,
                minTickGap: 32,
                padding: y,
                tick: tx,
                tickFormatter: x,
                tickLine: !1,
                ticks: M,
              })),
              (v[227] = y),
              (v[228] = tx),
              (v[229] = x),
              (v[230] = M),
              (v[231] = C))
            : (C = v[231]))
        let tv = !eF && void 0
        ;(v[232] !== eW ||
        v[233] !== K ||
        v[234] !== e2 ||
        v[235] !== eZ ||
        v[236] !== B ||
        v[237] !== E ||
        v[238] !== W ||
        v[239] !== ex ||
        v[240] !== X ||
        v[241] !== eV
          ? ((N = W
              ? eL
              : (0, a.jsx)(eU.L, {
                  consumerAnalytics: K,
                  activeSeriesKey: eW,
                  hiddenSeriesKeys: e2,
                  isRelativeUsage: eZ,
                  report: B,
                  scope: E,
                  series: ex,
                  unit: eZ ? "percent" : X,
                  usdPerCredit: eV,
                })),
            (v[232] = eW),
            (v[233] = K),
            (v[234] = e2),
            (v[235] = eZ),
            (v[236] = B),
            (v[237] = E),
            (v[238] = W),
            (v[239] = ex),
            (v[240] = X),
            (v[241] = eV),
            (v[242] = N))
          : (N = v[242]),
          v[243] !== W ? ((T = !W && (0, a.jsx)(ep.kr, {})), (v[243] = W), (v[244] = T)) : (T = v[244]),
          v[245] !== e$ ? ((L = null != e$ ? (0, ew.YZ)(e$) : void 0), (v[245] = e$), (v[246] = L)) : (L = v[246]),
          v[247] !== tv || v[248] !== N || v[249] !== T || v[250] !== L
            ? ((D = (0, a.jsx)(eu.m, { active: tv, isAnimationActive: !1, content: N, cursor: T, position: L })),
              (v[247] = tv),
              (v[248] = N),
              (v[249] = T),
              (v[250] = L),
              (v[251] = D))
            : (D = v[251]),
          v[252] !== tt || v[253] !== e5
            ? ((F = null == e5 ? (0, a.jsx)(ec.A_, { radius: eb.Ib, children: tt }) : tt),
              (v[252] = tt),
              (v[253] = e5),
              (v[254] = F))
            : (F = v[254]),
          v[255] !== _ ||
          v[256] !== tl ||
          v[257] !== c ||
          v[258] !== tr ||
          v[259] !== to ||
          v[260] !== g ||
          v[261] !== tu ||
          v[262] !== tc ||
          v[263] !== tg ||
          v[264] !== tm ||
          v[265] !== m ||
          v[266] !== h ||
          v[267] !== f ||
          v[268] !== C ||
          v[269] !== D ||
          v[270] !== F
            ? ((Q = (0, a.jsxs)(eg.E, {
                accessibilityLayer: tl,
                throttledEvents: c,
                "aria-label": tr,
                barSize: _,
                data: to,
                margin: g,
                maxBarSize: tu,
                stackOffset: tc,
                onClick: tg,
                onMouseDown: tm,
                onMouseLeave: m,
                onMouseMove: h,
                children: [p, f, C, D, F],
              })),
              (v[255] = _),
              (v[256] = tl),
              (v[257] = c),
              (v[258] = tr),
              (v[259] = to),
              (v[260] = g),
              (v[261] = tu),
              (v[262] = tc),
              (v[263] = tg),
              (v[264] = tm),
              (v[265] = m),
              (v[266] = h),
              (v[267] = f),
              (v[268] = C),
              (v[269] = D),
              (v[270] = F),
              (v[271] = Q))
            : (Q = v[271]),
          v[272] !== K || v[273] !== eF || v[274] !== E || v[275] !== Q
            ? ((Y = (0, a.jsx)(ej.H, {
                consumerAnalytics: K,
                isTooltipDismissed: eF,
                onResetHover: u,
                onTooltipDismissedChange: eH,
                scope: E,
                children: Q,
              })),
              (v[272] = K),
              (v[273] = eF),
              (v[274] = E),
              (v[275] = Q),
              (v[276] = Y))
            : (Y = v[276]))
        let tk = Y
        ;(v[277] !== U || v[278] !== q || v[279] !== z || v[280] !== e6
          ? ((J = z && !U && null != e6 ? (0, eN.W)(e6, q, !0) : void 0),
            (v[277] = U),
            (v[278] = q),
            (v[279] = z),
            (v[280] = e6),
            (v[281] = J))
          : (J = v[281]),
          v[282] !== K || v[283] !== eE || v[284] !== ex || v[285] !== eX
            ? ((et = K
                ? (e) => {
                    eE(null == e ? new Set() : (0, eb.vD)(e, ex, eX))
                  }
                : void 0),
              (v[282] = K),
              (v[283] = eE),
              (v[284] = ex),
              (v[285] = eX),
              (v[286] = et))
            : (et = v[286]),
          v[287] !== K || v[288] !== eE || v[289] !== e2 || v[290] !== ex || v[291] !== eX
            ? ((el = (e) => {
                let t = (0, eb.OP)(e2, e, ex, K ? eX : e2)
                t.has(e) !== !!e2?.has(e) && eE(t)
              }),
              (v[287] = K),
              (v[288] = eE),
              (v[289] = e2),
              (v[290] = ex),
              (v[291] = eX),
              (v[292] = el))
            : (el = v[292]),
          (b = (0, a.jsx)(en.G, {
            analyticsChart: j,
            consumerAnalytics: K,
            actions: k,
            dailyLegend: W ? { shares: ey } : void 0,
            fillChartHeight: W || null != B,
            activeSeriesKey: eW,
            onHoverSeriesChange: W ? eT : void 0,
            emptyMessage: S ?? ts.emptyMessage,
            estimatedSpendUsd: ti,
            hasData: K || z ? 0 !== eG || ex.length > 0 : eG > 0,
            hiddenSeriesKeys: e2,
            hideTotal: eZ || U,
            preservePopulatedCardLayout: $,
            scope: E,
            series: ex,
            status: O,
            title: tn,
            total: e6,
            totalLabel: J,
            onChangeSeriesIsolation: et,
            onToggleSeries: el,
            children:
              W && null != B
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("div", {
                        className: "h-full",
                        role: "slider",
                        tabIndex: 0,
                        "aria-label": w ?? ts.ariaLabel,
                        "aria-valuemin": 0,
                        "aria-valuemax": B.data.length,
                        "aria-valuenow": ei + 1,
                        "aria-valuetext": ta,
                        onKeyDown: (e) => {
                          let t = ei
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
                              t = B.data.length - 1
                              break
                            case "Escape":
                              ;(e.preventDefault(), e.stopPropagation(), e0())
                              return
                            default:
                              return
                          }
                          e.preventDefault()
                          let s = B.data[Math.max(-1, Math.min(t, B.data.length - 1))]?.date ?? null
                          ;(ee(s), es(null), eH(null == s))
                        },
                        children:
                          null == P
                            ? tk
                            : (0, a.jsx)(eS, { rangeKey: V, direction: P, reduceMotion: O.reduceMotion, children: tk }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "sr-only",
                        role: "status",
                        "aria-live": "polite",
                        children: [
                          ta,
                          ex.map((e) => {
                            let { key: t, name: s } = e,
                              n = ey?.get(t)
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
                                            values: {
                                              series: s,
                                              threshold: q.formatNumber(0.001, {
                                                style: "percent",
                                                maximumFractionDigits: 1,
                                              }),
                                            },
                                          })
                                        : (0, a.jsx)(d.A, {
                                            id: "settings.usage.billing.chart.shareAnnouncement",
                                            defaultMessage: "{series}: {share}",
                                            values: {
                                              series: s,
                                              share:
                                                null == n
                                                  ? "-"
                                                  : q.formatNumber(n, { style: "percent", maximumFractionDigits: 1 }),
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
          (v[73] = eW),
          (v[74] = j),
          (v[75] = w),
          (v[76] = eY),
          (v[77] = _),
          (v[78] = eO),
          (v[79] = K),
          (v[80] = A),
          (v[81] = S),
          (v[82] = I),
          (v[83] = G),
          (v[84] = e2),
          (v[85] = U),
          (v[86] = q),
          (v[87] = H),
          (v[88] = eZ),
          (v[89] = e4),
          (v[90] = eF),
          (v[91] = z),
          (v[92] = Z),
          (v[93] = e_),
          (v[94] = ei),
          (v[95] = ta),
          (v[96] = em),
          (v[97] = te),
          (v[98] = e8),
          (v[99] = eJ),
          (v[100] = e1),
          (v[101] = e9),
          (v[102] = ea),
          (v[103] = $),
          (v[104] = P),
          (v[105] = V),
          (v[106] = B),
          (v[107] = ez),
          (v[108] = E),
          (v[109] = W),
          (v[110] = e7?.maximum),
          (v[111] = e7?.minimum),
          (v[112] = e$),
          (v[113] = eM),
          (v[114] = O),
          (v[115] = eX),
          (v[116] = R),
          (v[117] = e5),
          (v[118] = eG),
          (v[119] = X),
          (v[120] = eV),
          (v[121] = e6),
          (v[122] = b))
      } else b = v[122]
      return b
    }
    function eL() {
      return null
    }
    function eD(e) {
      return (0, a.jsx)(ep.ps, { ...e, centerLabels: !0 })
    }
    function eP(e, t) {
      t.preventDefault()
    }
    function eE(e, t) {
      return e + t
    }
    var eO = s("YOiQ"),
      eR = s("OivU")
    function eF(e) {
      let t,
        s,
        i,
        u,
        c,
        g,
        m,
        h,
        p,
        f,
        y,
        x,
        b,
        v,
        k,
        j,
        w,
        _,
        M,
        A,
        C,
        S,
        I,
        U,
        N,
        T,
        L,
        D,
        P,
        E,
        O,
        R,
        F,
        H,
        $,
        K,
        W,
        X,
        q,
        z,
        B,
        G,
        Z,
        V,
        Q,
        Y,
        J,
        ee,
        et,
        es,
        ea = (0, n.c)(144),
        { data: ei, preservePopulatedCardLayout: el, selectedModel: er, scope: ec, status: eg } = e,
        em = void 0 !== el && el,
        ef = (0, o.A)(),
        [ev, e_] = (0, r.useState)(null),
        [eM, eA] = (0, r.useState)(!1),
        [eC, eS] = (0, r.useState)(null),
        [eI, eN] = (0, r.useState)(null)
      if (
        ea[0] !== ev ||
        ea[1] !== ei ||
        ea[2] !== ef ||
        ea[3] !== eM ||
        ea[4] !== em ||
        ea[5] !== ec ||
        ea[6] !== er ||
        ea[7] !== eg ||
        ea[8] !== eI
      ) {
        let e, n
        ;((h =
          "business" === ec
            ? (ei?.models ?? [])
                .filter((e) => {
                  let { key: t, total: s } = e
                  return s > 0 && (null == er || t === er)
                })
                .map((e) => {
                  let { key: t } = e
                  return { key: t, name: "other" === t ? ef.formatMessage(ex.other) : (0, ey.K)(t) }
                })
            : [
                {
                  key: "outputTokens",
                  name: ef.formatMessage({ id: "settings.usage.billing.tokens.output", defaultMessage: "Output" }),
                },
                {
                  key: "uncachedInputTokens",
                  name: ef.formatMessage({
                    id: "settings.usage.billing.tokens.uncachedInput",
                    defaultMessage: "Uncached input",
                  }),
                },
                {
                  key: "cachedInputTokens",
                  name: ef.formatMessage({
                    id: "settings.usage.billing.tokens.cachedInput",
                    defaultMessage: "Cached input",
                  }),
                },
              ]),
          (g =
            null == eI ||
            h.some((e) => {
              let { key: t } = e
              return !eI.has(t)
            })
              ? eI
              : null),
          (c = ei?.data.map((e) => {
            if ("business" === ec || null == er) return e
            let t = e.tokensByModel[er]
            return {
              ...e,
              uncachedInputTokens: t?.uncachedInputTokens ?? 0,
              cachedInputTokens: t?.cachedInputTokens ?? 0,
              outputTokens: t?.outputTokens ?? 0,
            }
          })),
          ea[49] !== ei || ea[50] !== er
            ? ((e =
                null == er
                  ? ei?.total
                  : ei?.models.find((e) => {
                      let { key: t } = e
                      return t === er
                    })?.total),
              (ea[49] = ei),
              (ea[50] = er),
              (ea[51] = e))
            : (e = ea[51]))
        let l = e
        ;(ea[52] !== g
          ? ((n = (e) => {
              let { key: t } = e
              return !g?.has(t)
            }),
            (ea[52] = g),
            (ea[53] = n))
          : (n = ea[53]),
          (m = h.map(e$).filter(n)))
        let r =
          null != l && g?.size
            ? l -
              (c?.reduce(
                (e, t) =>
                  e +
                  h.reduce(
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
            : l
        ;((u = en.G),
          (I = ev),
          ea[54] === Symbol.for("react.memo_cache_sentinel")
            ? ((U = (0, a.jsx)(d.A, {
                id: "settings.usage.billing.tokens.empty",
                defaultMessage: "No tokens used during this period",
              })),
              (ea[54] = U))
            : (U = ea[54]),
          (N = (l ?? 0) > 0),
          (T = em),
          (L = (e) => {
            eN((0, eb.OP)(g, e, h, g))
          }),
          (D = ec),
          (P = g),
          (O = h),
          (R = eg),
          ea[55] !== ec
            ? ((F =
                "workspace" === ec
                  ? (0, a.jsx)(d.A, { id: "settings.usage.billing.tokens.title", defaultMessage: "Tokens used" })
                  : (0, a.jsx)(d.A, {
                      id: "settings.usage.billing.tokens.personalTitle",
                      defaultMessage: "Total tokens",
                    })),
              (ea[55] = ec),
              (ea[56] = F))
            : (F = ea[56]),
          (H = r),
          (i = ej.H),
          (_ = eM),
          ea[57] === Symbol.for("react.memo_cache_sentinel")
            ? ((A = () => {
                ;(eS(null), e_(null))
              }),
              (ea[57] = A))
            : (A = ea[57]),
          (C = eA),
          (S = ec),
          (s = eO.Q),
          ea[58] !== ef || ea[59] !== ec
            ? ((f =
                "workspace" === ec
                  ? ef.formatMessage({ id: "settings.usage.billing.tokens.chartLabel", defaultMessage: "Tokens used" })
                  : ef.formatMessage({
                      id: "settings.usage.billing.tokens.personalChartLabel",
                      defaultMessage: "Total tokens",
                    })),
              (ea[58] = ef),
              (ea[59] = ec),
              (ea[60] = f))
            : (f = ea[60]),
          (y = c),
          ea[61] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = { top: 4, right: 0, left: 0, bottom: 0 }), (ea[61] = x))
            : (x = ea[61]),
          (b = "workspace" === ec ? void 0 : eH),
          ea[62] !== ec
            ? ((v = () => {
                ;(eS(null), "workspace" !== ec && e_(null))
              }),
              (k = (e, t) => {
                eS((0, ew.nV)(t, "workspace" === ec))
              }),
              (ea[62] = ec),
              (ea[63] = v),
              (ea[64] = k))
            : ((v = ea[63]), (k = ea[64])),
          ea[65] === Symbol.for("react.memo_cache_sentinel")
            ? ((j = (0, a.jsx)(eo.d, { stroke: "var(--color-border-subtle)", vertical: !1 })),
              (w = (0, a.jsx)(ep.Qr, { unit: "tokens" })),
              (ea[65] = j),
              (ea[66] = w))
            : ((j = ea[65]), (w = ea[66])),
          (t = ed.W),
          (M = !1),
          (E = "date"),
          ($ = 22),
          (K = 0),
          (W = 32),
          (X = ep.ps),
          ea[67] !== ef ? ((q = (e) => (0, ek.e)(e, ef)), (ea[67] = ef), (ea[68] = q)) : (q = ea[68]),
          (z = !1),
          (p = (0, ek.j)(c)),
          (ea[0] = ev),
          (ea[1] = ei),
          (ea[2] = ef),
          (ea[3] = eM),
          (ea[4] = em),
          (ea[5] = ec),
          (ea[6] = er),
          (ea[7] = eg),
          (ea[8] = eI),
          (ea[9] = t),
          (ea[10] = s),
          (ea[11] = i),
          (ea[12] = u),
          (ea[13] = c),
          (ea[14] = g),
          (ea[15] = m),
          (ea[16] = h),
          (ea[17] = p),
          (ea[18] = f),
          (ea[19] = y),
          (ea[20] = x),
          (ea[21] = b),
          (ea[22] = v),
          (ea[23] = k),
          (ea[24] = j),
          (ea[25] = w),
          (ea[26] = _),
          (ea[27] = M),
          (ea[28] = A),
          (ea[29] = C),
          (ea[30] = S),
          (ea[31] = I),
          (ea[32] = U),
          (ea[33] = N),
          (ea[34] = T),
          (ea[35] = L),
          (ea[36] = D),
          (ea[37] = P),
          (ea[38] = E),
          (ea[39] = O),
          (ea[40] = R),
          (ea[41] = F),
          (ea[42] = H),
          (ea[43] = $),
          (ea[44] = K),
          (ea[45] = W),
          (ea[46] = X),
          (ea[47] = q),
          (ea[48] = z))
      } else
        ((t = ea[9]),
          (s = ea[10]),
          (i = ea[11]),
          (u = ea[12]),
          (c = ea[13]),
          (g = ea[14]),
          (m = ea[15]),
          (h = ea[16]),
          (p = ea[17]),
          (f = ea[18]),
          (y = ea[19]),
          (x = ea[20]),
          (b = ea[21]),
          (v = ea[22]),
          (k = ea[23]),
          (j = ea[24]),
          (w = ea[25]),
          (_ = ea[26]),
          (M = ea[27]),
          (A = ea[28]),
          (C = ea[29]),
          (S = ea[30]),
          (I = ea[31]),
          (U = ea[32]),
          (N = ea[33]),
          (T = ea[34]),
          (L = ea[35]),
          (D = ea[36]),
          (P = ea[37]),
          (E = ea[38]),
          (O = ea[39]),
          (R = ea[40]),
          (F = ea[41]),
          (H = ea[42]),
          ($ = ea[43]),
          (K = ea[44]),
          (W = ea[45]),
          (X = ea[46]),
          (q = ea[47]),
          (z = ea[48]))
      ea[69] !== t ||
      ea[70] !== p ||
      ea[71] !== M ||
      ea[72] !== E ||
      ea[73] !== $ ||
      ea[74] !== K ||
      ea[75] !== W ||
      ea[76] !== X ||
      ea[77] !== q ||
      ea[78] !== z
        ? ((B = (0, a.jsx)(t, {
            axisLine: M,
            dataKey: E,
            height: $,
            interval: K,
            minTickGap: W,
            tick: X,
            tickFormatter: q,
            tickLine: z,
            ticks: p,
          })),
          (ea[69] = t),
          (ea[70] = p),
          (ea[71] = M),
          (ea[72] = E),
          (ea[73] = $),
          (ea[74] = K),
          (ea[75] = W),
          (ea[76] = X),
          (ea[77] = q),
          (ea[78] = z),
          (ea[79] = B))
        : (B = ea[79])
      let eT = !eM && void 0
      if (
        (ea[80] !== ev || ea[81] !== g || ea[82] !== ec || ea[83] !== h
          ? ((G = (0, a.jsx)(eU.L, { activeSeriesKey: ev, hiddenSeriesKeys: g, scope: ec, series: h, unit: "tokens" })),
            (ea[80] = ev),
            (ea[81] = g),
            (ea[82] = ec),
            (ea[83] = h),
            (ea[84] = G))
          : (G = ea[84]),
        ea[85] !== eC ? ((Z = null == eC && (0, a.jsx)(ep.kr, {})), (ea[85] = eC), (ea[86] = Z)) : (Z = ea[86]),
        ea[87] !== eC ? ((V = null != eC ? (0, ew.YZ)(eC) : void 0), (ea[87] = eC), (ea[88] = V)) : (V = ea[88]),
        ea[89] !== eT || ea[90] !== G || ea[91] !== Z || ea[92] !== V
          ? ((Q = (0, a.jsx)(eu.m, { active: eT, isAnimationActive: !1, content: G, cursor: Z, position: V })),
            (ea[89] = eT),
            (ea[90] = G),
            (ea[91] = Z),
            (ea[92] = V),
            (ea[93] = Q))
          : (Q = ea[93]),
        ea[94] !== g || ea[95] !== ec || ea[96] !== h || ea[97] !== eC || ea[98] !== eg)
      ) {
        let e
        ;(ea[100] !== g || ea[101] !== ec || ea[102] !== eC || ea[103] !== eg
          ? ((e = (e, t) => {
              let s =
                "outputTokens" === e.key || "uncachedInputTokens" === e.key || "cachedInputTokens" === e.key
                  ? e.key
                  : (t) => t.tokensByModel[e.key]?.totalTokens ?? 0
              return (0, a.jsx)(
                eR.N1,
                {
                  className: (0, l.A)(
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
                  isAnimationActive: !eg.reduceMotion && !!eg.animateDataChanges && ("workspace" === ec || null == eC),
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
            (ea[100] = g),
            (ea[101] = ec),
            (ea[102] = eC),
            (ea[103] = eg),
            (ea[104] = e))
          : (e = ea[104]),
          (Y = h.map(e)),
          (ea[94] = g),
          (ea[95] = ec),
          (ea[96] = h),
          (ea[97] = eC),
          (ea[98] = eg),
          (ea[99] = Y))
      } else Y = ea[99]
      return (
        ea[105] !== c || ea[106] !== m || ea[107] !== eC
          ? ((J = (0, a.jsx)(ej.G, { data: c, pointer: eC, series: m })),
            (ea[105] = c),
            (ea[106] = m),
            (ea[107] = eC),
            (ea[108] = J))
          : (J = ea[108]),
        ea[109] !== s ||
        ea[110] !== f ||
        ea[111] !== y ||
        ea[112] !== x ||
        ea[113] !== b ||
        ea[114] !== v ||
        ea[115] !== k ||
        ea[116] !== j ||
        ea[117] !== w ||
        ea[118] !== B ||
        ea[119] !== Q ||
        ea[120] !== Y ||
        ea[121] !== J
          ? ((ee = (0, a.jsxs)(s, {
              "aria-label": f,
              data: y,
              margin: x,
              onMouseDown: b,
              onMouseLeave: v,
              onMouseMove: k,
              children: [j, w, B, Q, Y, J],
            })),
            (ea[109] = s),
            (ea[110] = f),
            (ea[111] = y),
            (ea[112] = x),
            (ea[113] = b),
            (ea[114] = v),
            (ea[115] = k),
            (ea[116] = j),
            (ea[117] = w),
            (ea[118] = B),
            (ea[119] = Q),
            (ea[120] = Y),
            (ea[121] = J),
            (ea[122] = ee))
          : (ee = ea[122]),
        ea[123] !== i || ea[124] !== _ || ea[125] !== A || ea[126] !== C || ea[127] !== S || ea[128] !== ee
          ? ((et = (0, a.jsx)(i, {
              isTooltipDismissed: _,
              onResetHover: A,
              onTooltipDismissedChange: C,
              scope: S,
              children: ee,
            })),
            (ea[123] = i),
            (ea[124] = _),
            (ea[125] = A),
            (ea[126] = C),
            (ea[127] = S),
            (ea[128] = ee),
            (ea[129] = et))
          : (et = ea[129]),
        ea[130] !== u ||
        ea[131] !== I ||
        ea[132] !== U ||
        ea[133] !== N ||
        ea[134] !== T ||
        ea[135] !== L ||
        ea[136] !== D ||
        ea[137] !== P ||
        ea[138] !== O ||
        ea[139] !== R ||
        ea[140] !== F ||
        ea[141] !== H ||
        ea[142] !== et
          ? ((es = (0, a.jsx)(u, {
              activeSeriesKey: I,
              emptyMessage: U,
              hasData: N,
              preservePopulatedCardLayout: T,
              onToggleSeries: L,
              scope: D,
              hiddenSeriesKeys: P,
              series: O,
              status: R,
              title: F,
              total: H,
              children: et,
            })),
            (ea[130] = u),
            (ea[131] = I),
            (ea[132] = U),
            (ea[133] = N),
            (ea[134] = T),
            (ea[135] = L),
            (ea[136] = D),
            (ea[137] = P),
            (ea[138] = O),
            (ea[139] = R),
            (ea[140] = F),
            (ea[141] = H),
            (ea[142] = et),
            (ea[143] = es))
          : (es = ea[143]),
        es
      )
    }
    function eH(e, t) {
      t.preventDefault()
    }
    function e$(e, t) {
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
    var eK = s("ESTr")
    let eW = (0, eK.a)({
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
      eX = (0, eK.a)({
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
    var eq = s("bqtn"),
      ez = s("bVeK"),
      eB = s("QyE3")
    let eG = ["feature", "model", "surface", "turn-start"]
    function eZ(e) {
      let t,
        s,
        i,
        r,
        o,
        d = (0, n.c)(14),
        { ariaLabel: u, breakdown: c, triggerWidth: g, onChange: m } = e,
        h = "fixed" === (void 0 === g ? "fixed" : g) && "w-32"
      return (
        d[0] !== h ? ((t = (0, l.A)("shrink-0", h)), (d[0] = h), (d[1] = t)) : (t = d[1]),
        d[2] !== c
          ? ((s = (0, a.jsx)("span", { className: "truncate", children: (0, a.jsx)(eV, { breakdown: c }) })),
            (d[2] = c),
            (d[3] = s))
          : (s = d[3]),
        d[4] !== u || d[5] !== t || d[6] !== s
          ? ((i = (0, a.jsx)(eB.vg, { className: t, "aria-label": u, children: s })),
            (d[4] = u),
            (d[5] = t),
            (d[6] = s),
            (d[7] = i))
          : (i = d[7]),
        d[8] !== c || d[9] !== m
          ? ((r = eG.map((e) =>
              (0, a.jsx)(
                eq.ms.Item,
                {
                  "aria-checked": c === e,
                  RightIcon: c === e ? ez.ALZ : void 0,
                  role: "menuitemradio",
                  onSelect: () => m(e),
                  children: (0, a.jsx)(eV, { breakdown: e }),
                },
                e,
              ),
            )),
            (d[8] = c),
            (d[9] = m),
            (d[10] = r))
          : (r = d[10]),
        d[11] !== i || d[12] !== r
          ? ((o = (0, a.jsx)(eq.Ab, { align: "start", contentWidth: "menuNarrow", triggerButton: i, children: r })),
            (d[11] = i),
            (d[12] = r),
            (d[13] = o))
          : (o = d[13]),
        o
      )
    }
    function eV(e) {
      let t,
        s = (0, n.c)(2),
        { breakdown: i } = e
      return (
        s[0] !== i
          ? ((t = (0, a.jsx)(d.A, {
              id: "consumerUsage.breakdown.label",
              defaultMessage:
                "{breakdown, select, feature {By feature} model {By model} surface {By surface} other {By turn start}}",
              values: { breakdown: i },
            })),
            (s[0] = i),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    var eQ = s("dVEH"),
      eY = s.n(eQ)
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
        agent_forked_thread {Agent-branched chats}
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
        },
        { key: t, fallback: eY()(t.replace(/[_:-]+/g, " ")) },
      )
    }
    function e1(e) {
      let t,
        s,
        i,
        l,
        u,
        c,
        g,
        h,
        p,
        x,
        b,
        v,
        k,
        j,
        w,
        _,
        M,
        C,
        S,
        I = (0, n.c)(60),
        { showUnifiedUsage: U, buckets: N, days: T, onDaysChange: L, pagination: D, status: P } = e,
        E = void 0 !== U && U,
        O = (0, r.use)(Y.Wj)?.scope ?? null,
        R = (0, o.A)(),
        [F, H] = (0, r.useState)("feature"),
        [$, K] = (0, r.useState)(!1),
        [W, X] = (0, r.useState)(0)
      I[0] !== F || I[1] !== N || I[2] !== R
        ? ((t =
            null == N
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
                      let l = {
                        feature: "aeon_child" === n.thread_source ? "agent_created_thread" : n.thread_source,
                        "turn-start": `start-${n.turn_trigger}`,
                        model: n.model,
                        surface: n.surface,
                      }[t]
                      ;((e[l] = (e[l] ?? 0) + n.value), a.set(l, (a.get(l) ?? 0) + n.value))
                    }
                    n.push({ date: s.date, values: e })
                  }
                  let l = [...a.entries()]
                    .sort(([e], [t]) => e.localeCompare(t))
                    .map(([e, t]) => ({ key: e, total: t, label: s(e) }))
                  return { data: n, series: l, total: l.reduce((e, t) => e + t.total, 0), bucketTotals: i }
                })(N, F, (e) => eJ(R, e, F))),
          (I[0] = F),
          (I[1] = N),
          (I[2] = R),
          (I[3] = t))
        : (t = I[3])
      let q = t
      ;(I[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, a.jsx)(d.A, { id: "consumerUsage.history.title", defaultMessage: "Usage history" })), (I[4] = s))
        : (s = I[4]),
        I[5] !== E
          ? ((i = (0, a.jsx)(y.X.Header, {
              subtitleWrap: "wrap",
              title: s,
              subtitle: E
                ? (0, a.jsx)(e0, {})
                : (0, a.jsx)(d.A, {
                    id: "consumerUsage.history.description",
                    defaultMessage:
                      "See how plan usage and credits were consumed in Work, Codex, and other agentic tasks. Conversations in Chat are not included.",
                  }),
            })),
            (I[5] = E),
            (I[6] = i))
          : (i = I[6]),
        I[7] !== R
          ? ((l = R.formatMessage({
              id: "consumerAnalyticsPreview.history.period",
              defaultMessage: "Usage history date range",
            })),
            (I[7] = R),
            (I[8] = l))
          : (l = I[8]),
        I[9] !== L
          ? ((u = (e) => {
              ;(X(0), L(e))
            }),
            (I[9] = L),
            (I[10] = u))
          : (u = I[10]),
        I[11] !== T || I[12] !== l || I[13] !== u
          ? ((c = (0, a.jsx)(G.tS, { ariaLabel: l, days: T, onChange: u })),
            (I[11] = T),
            (I[12] = l),
            (I[13] = u),
            (I[14] = c))
          : (c = I[14]),
        I[15] !== R
          ? ((g = R.formatMessage({ id: "consumerUsage.history.breakdown", defaultMessage: "Group usage history" })),
            (I[15] = R),
            (I[16] = g))
          : (g = I[16]),
        I[17] !== O || I[18] !== F
          ? ((h = (e) => {
              e !== F && (("model" === e || "surface" === e) && (0, Y.to)(O, "usage_history", e), K(!0), H(e))
            }),
            (I[17] = O),
            (I[18] = F),
            (I[19] = h))
          : (h = I[19]),
        I[20] !== F || I[21] !== g || I[22] !== h
          ? ((p = (0, a.jsx)(eZ, { ariaLabel: g, breakdown: F, triggerWidth: "content", onChange: h })),
            (I[20] = F),
            (I[21] = g),
            (I[22] = h),
            (I[23] = p))
          : (p = I[23]),
        I[24] !== p || I[25] !== c
          ? ((x = (0, a.jsxs)("div", {
              className: "flex flex-wrap items-center justify-between gap-2 select-none",
              children: [c, p],
            })),
            (I[24] = p),
            (I[25] = c),
            (I[26] = x))
          : (x = I[26]),
        I[27] !== R
          ? ((b = R.formatMessage({
              id: "consumerUsage.history.chartLabel",
              defaultMessage: "Compare total usage by day, including plan usage and credits.",
            })),
            (I[27] = R),
            (I[28] = b))
          : (b = I[28]))
      let z = D?.offsetDays
      ;(I[29] !== T || I[30] !== z ? ((v = (0, f.mV)(T, z)), (I[29] = T), (I[30] = z), (I[31] = v)) : (v = I[31]),
        I[32] !== T || I[33] !== R || I[34] !== D || I[35] !== P.isLoading || I[36] !== P.isUpdating
          ? ((k =
              null == D
                ? void 0
                : (0, a.jsxs)("div", {
                    className: "flex items-center justify-end",
                    children: [
                      (0, a.jsx)(A.$, {
                        "aria-label": R.formatMessage({
                          id: "consumerUsage.history.previousPeriod",
                          defaultMessage: "Previous period",
                        }),
                        color: "ghostActive",
                        radius: "large",
                        size: "iconCircle",
                        disabled: P.isLoading || P.isUpdating,
                        onClick: () => {
                          ;(K(!1), X(-1), D.onOffsetDaysChange(D.offsetDays + T))
                        },
                        children: (0, a.jsx)(m.I, { className: "rtl:rotate-180", asset: eW }),
                      }),
                      (0, a.jsx)(A.$, {
                        "aria-label": R.formatMessage({
                          id: "consumerUsage.history.nextPeriod",
                          defaultMessage: "Next period",
                        }),
                        color: "ghostActive",
                        radius: "large",
                        size: "iconCircle",
                        disabled: 0 === D.offsetDays || P.isLoading || P.isUpdating,
                        onClick: () => {
                          ;(K(!1), X(1), D.onOffsetDaysChange(Math.max(0, D.offsetDays - T)))
                        },
                        children: (0, a.jsx)(m.I, { className: "rtl:rotate-180", asset: eX }),
                      }),
                    ],
                  })),
            (I[32] = T),
            (I[33] = R),
            (I[34] = D),
            (I[35] = P.isLoading),
            (I[36] = P.isUpdating),
            (I[37] = k))
          : (k = I[37]),
        I[38] !== N || I[39] !== q
          ? ((j =
              null != N && null == q
                ? (0, a.jsx)(d.A, {
                    id: "consumerUsage.history.unavailableAttribution",
                    defaultMessage: "Usage breakdown is unavailable for this period",
                  })
                : (0, a.jsx)(d.A, {
                    id: "consumerUsage.history.emptyPeriod",
                    defaultMessage: "No usage recorded during this period",
                  })),
            (I[38] = N),
            (I[39] = q),
            (I[40] = j))
          : (j = I[40]))
      let B = (q?.data.length ?? T) > 7 ? 18 : 38,
        Z = !P.reduceMotion && ($ || (0 === W && P.animateDataChanges))
      return (
        I[41] === Symbol.for("react.memo_cache_sentinel") ? ((w = () => K(!1)), (I[41] = w)) : (w = I[41]),
        I[42] !== P || I[43] !== Z
          ? ((_ = { ...P, animateDataChanges: Z, onAnimationEnd: w }), (I[42] = P), (I[43] = Z), (I[44] = _))
          : (_ = I[44]),
        I[45] !== q ||
        I[46] !== W ||
        I[47] !== b ||
        I[48] !== v ||
        I[49] !== k ||
        I[50] !== j ||
        I[51] !== B ||
        I[52] !== _
          ? ((M = (0, a.jsx)(eT, {
              consumerAnalytics: !0,
              selectedDayLegend: !0,
              breakdown: "model",
              scope: "consumer",
              isPersonalUsage: !0,
              preservePopulatedCardLayout: !0,
              ariaLabel: b,
              data: q,
              dateRange: v,
              hideTotal: !0,
              rangeDirection: W,
              actions: k,
              emptyMessage: j,
              barSize: B,
              status: _,
            })),
            (I[45] = q),
            (I[46] = W),
            (I[47] = b),
            (I[48] = v),
            (I[49] = k),
            (I[50] = j),
            (I[51] = B),
            (I[52] = _),
            (I[53] = M))
          : (M = I[53]),
        I[54] !== x || I[55] !== M
          ? ((C = (0, a.jsxs)(y.X.Content, { className: "gap-3", children: [x, M] })),
            (I[54] = x),
            (I[55] = M),
            (I[56] = C))
          : (C = I[56]),
        I[57] !== C || I[58] !== i
          ? ((S = (0, a.jsxs)(y.X, { children: [i, C] })), (I[57] = C), (I[58] = i), (I[59] = S))
          : (S = I[59]),
        S
      )
    }
    function e0() {
      let e,
        t = (0, n.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(d.A, {
              id: "consumerUsage.history.description.unified",
              defaultMessage: "See how plan usage and credits were consumed across ChatGPT.",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    var e2 = s("slpy")
    let e3 = (0, eK.a)({
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
      e4 = (0, eK.a)({
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
    var e5 = s("f4Vb"),
      e6 = s("nsuH")
    function e8(e) {
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
        y,
        x,
        b,
        v,
        k,
        j = (0, n.c)(53),
        { period: w, asOf: M, limit: C, breakdown: S, expanded: I, onToggle: U, reduceMotion: N } = e,
        T = (0, o.A)(),
        L = (0, r.useId)()
      j[0] !== T || j[1] !== C || j[2] !== w.interval.endAt || j[3] !== w.interval.startAt || j[4] !== w.status
        ? ((t = T.formatMessage(
            {
              id: "consumerAnalyticsPreview.limitHistory.openPeriod",
              defaultMessage:
                "{limit, select, fiveHour {5-hour period} other {Weekly period}} from {start} to {end} UTC{current, select, yes {, current at last update} other {}}",
            },
            {
              limit: C,
              start: T.formatDate(w.interval.startAt, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC",
              }),
              end: T.formatDate(w.interval.endAt, {
                year: "numeric",
                month: "short",
                day: "numeric",
                hour: "numeric",
                minute: "2-digit",
                timeZone: "UTC",
              }),
              current: "current" === w.status ? "yes" : "no",
            },
          )),
          (j[0] = T),
          (j[1] = C),
          (j[2] = w.interval.endAt),
          (j[3] = w.interval.startAt),
          (j[4] = w.status),
          (j[5] = t))
        : (t = j[5])
      let D = t
      ;(j[6] !== T || j[7] !== C || j[8] !== w.interval.endAt || j[9] !== w.interval.startAt
        ? ((s = T.formatDateTimeRange(w.interval.startAt, w.interval.endAt, {
            month: "short",
            day: "numeric",
            ...("fiveHour" === C ? { hour: "numeric", minute: "2-digit" } : {}),
            timeZone: "UTC",
          })),
          (j[6] = T),
          (j[7] = C),
          (j[8] = w.interval.endAt),
          (j[9] = w.interval.startAt),
          (j[10] = s))
        : (s = j[10]),
        j[11] !== s
          ? ((i = (0, a.jsx)("span", { className: "min-w-0 whitespace-normal", children: s })),
            (j[11] = s),
            (j[12] = i))
          : (i = j[12]))
      let P = I ? e3 : e4
      ;(j[13] !== P
        ? ((l = (0, a.jsx)(m.I, { className: "shrink-0", asset: P, focusable: "false" })), (j[13] = P), (j[14] = l))
        : (l = j[14]),
        j[15] !== I || j[16] !== D || j[17] !== L || j[18] !== i || j[19] !== l
          ? ((u = (0, a.jsxs)(A.$, {
              className: "gap-2 text-start",
              "aria-controls": L,
              "aria-expanded": I,
              "aria-label": D,
              color: "ghostMuted",
              focusRing: "inset",
              size: "inline",
              onPointerDown: e9,
              children: [i, l],
            })),
            (j[15] = I),
            (j[16] = D),
            (j[17] = L),
            (j[18] = i),
            (j[19] = l),
            (j[20] = u))
          : (u = j[20]),
        j[21] !== D || j[22] !== u
          ? ((c = (0, a.jsx)(e2.m, { content: D, children: u })), (j[21] = D), (j[22] = u), (j[23] = c))
          : (c = j[23]),
        j[24] !== M || j[25] !== T || j[26] !== w.status
          ? ((g =
              "current" === w.status
                ? (0, a.jsxs)("span", {
                    className: "mt-1 flex items-center gap-1 text-xs text-secondary",
                    children: [
                      (0, a.jsx)(d.A, {
                        id: "consumerUsage.limitHistory.bucketDataAsOf",
                        defaultMessage: "Usage as of {asOf}",
                        values: {
                          asOf: (0, a.jsx)(_.XU, {
                            value: M,
                            month: "short",
                            day: "numeric",
                            hour: "numeric",
                            minute: "2-digit",
                            timeZone: "UTC",
                            timeZoneName: "short",
                          }),
                        },
                      }),
                      (0, a.jsx)(e2.m, {
                        content: (0, a.jsx)(d.A, {
                          id: "consumerUsage.limitHistory.dailyCalculationNotice",
                          defaultMessage: "Calculations run daily. Usage for this period may be out of date.",
                        }),
                        children: (0, a.jsx)(A.$, {
                          "aria-label": T.formatMessage({
                            id: "consumerUsage.limitHistory.staleUsage",
                            defaultMessage: "Usage may be out of date",
                          }),
                          color: "ghostTertiary",
                          size: "inline",
                          onClick: e7,
                          children: (0, a.jsx)(ez.ehD, {}),
                        }),
                      }),
                    ],
                  })
                : null),
            (j[24] = M),
            (j[25] = T),
            (j[26] = w.status),
            (j[27] = g))
          : (g = j[27]),
        j[28] !== c || j[29] !== g
          ? ((h = (0, a.jsxs)("th", { className: "px-4 py-3 text-start font-normal", scope: "row", children: [c, g] })),
            (j[28] = c),
            (j[29] = g),
            (j[30] = h))
          : (h = j[30]),
        j[31] !== w.usedBasisPoints
          ? ((p = (0, a.jsx)("td", {
              className: "px-4 py-3 text-end align-top font-semibold tabular-nums",
              children:
                null == w.usedBasisPoints
                  ? (0, a.jsx)(d.A, {
                      id: "consumerAnalyticsPreview.limitHistory.totalUnavailable",
                      defaultMessage: "Not available",
                    })
                  : (0, a.jsx)(ta, { basisPoints: w.usedBasisPoints }),
            })),
            (j[31] = w.usedBasisPoints),
            (j[32] = p))
          : (p = j[32]),
        j[33] !== U || j[34] !== p || j[35] !== h
          ? ((f = (0, a.jsxs)("tr", {
              className:
                "cursor-interaction border-t border-default hover:bg-secondary-ghost-hover has-[:focus-visible]:bg-secondary-ghost-hover",
              onClick: U,
              children: [h, p],
            })),
            (j[33] = U),
            (j[34] = p),
            (j[35] = h),
            (j[36] = f))
          : (f = j[36]))
      let E = !I
      return (
        j[37] !== S || j[38] !== I || j[39] !== w || j[40] !== N
          ? ((y = I ? (0, a.jsx)(te, { period: w, breakdown: S, reduceMotion: N }) : null),
            (j[37] = S),
            (j[38] = I),
            (j[39] = w),
            (j[40] = N),
            (j[41] = y))
          : (y = j[41]),
        j[42] !== y ? ((x = (0, a.jsx)(e_.N, { initial: !1, children: y })), (j[42] = y), (j[43] = x)) : (x = j[43]),
        j[44] !== L || j[45] !== x
          ? ((b = (0, a.jsx)("td", { id: L, className: "p-0", colSpan: 2, children: x })),
            (j[44] = L),
            (j[45] = x),
            (j[46] = b))
          : (b = j[46]),
        j[47] !== E || j[48] !== b
          ? ((v = (0, a.jsx)("tr", { "aria-hidden": E, children: b })), (j[47] = E), (j[48] = b), (j[49] = v))
          : (v = j[49]),
        j[50] !== f || j[51] !== v
          ? ((k = (0, a.jsxs)(a.Fragment, { children: [f, v] })), (j[50] = f), (j[51] = v), (j[52] = k))
          : (k = j[52]),
        k
      )
    }
    function e7(e) {
      return e.stopPropagation()
    }
    function e9(e) {
      0 === e.button && e.currentTarget.blur()
    }
    function te(e) {
      let t,
        s,
        i,
        l,
        u,
        c,
        g,
        m,
        h,
        p = (0, n.c)(22),
        { period: f, breakdown: y, reduceMotion: x } = e,
        b = (0, o.A)(),
        [v, k] = (0, r.useState)()
      p[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => {
            k((0, e5.q)(e).height)
          }),
          (p[0] = t))
        : (t = p[0])
      let j = (0, e6.wY)(t),
        w = v ?? "auto"
      return (
        p[1] !== w ? ((s = { height: w }), (p[1] = w), (p[2] = s)) : (s = p[2]),
        p[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = { height: 0 }), (l = { height: 0 }), (p[3] = i), (p[4] = l))
          : ((i = p[3]), (l = p[4])),
        p[5] !== x ? ((u = x ? { duration: 0 } : em.X7), (p[5] = x), (p[6] = u)) : (u = p[6]),
        p[7] !== f.accountingComplete
          ? ((c = f.accountingComplete
              ? null
              : (0, a.jsx)("p", {
                  className: "text-secondary",
                  children: (0, a.jsx)(d.A, {
                    id: "consumerUsage.limitHistory.incompleteAccounting",
                    defaultMessage: "Some usage is unavailable; this period may be incomplete",
                  }),
                })),
            (p[7] = f.accountingComplete),
            (p[8] = c))
          : (c = p[8]),
        p[9] !== y || p[10] !== b || p[11] !== f.accountingComplete || p[12] !== f.breakdown
          ? ((g =
              null == f.breakdown
                ? (0, a.jsx)("p", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(d.A, {
                      id: "consumerAnalyticsPreview.limitHistory.breakdownUnavailable",
                      defaultMessage: "Breakdown isn't available for this period",
                    }),
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("dl", {
                        className: "flex flex-col gap-2.5",
                        children: f.breakdown.rows
                          .filter(ts)
                          .map((e) =>
                            (0, a.jsxs)(
                              "div",
                              {
                                className: "flex items-start justify-between gap-4",
                                children: [
                                  (0, a.jsx)("dt", { className: "text-secondary", children: eJ(b, e.key, y) }),
                                  (0, a.jsx)("dd", {
                                    className: "text-end tabular-nums",
                                    children: (0, a.jsx)(ta, { basisPoints: e.basisPoints }),
                                  }),
                                ],
                              },
                              e.key,
                            ),
                          ),
                      }),
                      f.accountingComplete && f.breakdown.rows.every(tt)
                        ? (0, a.jsx)("p", {
                            className: "text-secondary",
                            children: (0, a.jsx)(d.A, {
                              id: "consumerAnalyticsPreview.limitHistory.noContributions",
                              defaultMessage: "No usage to show for this breakdown",
                            }),
                          })
                        : null,
                    ],
                  })),
            (p[9] = y),
            (p[10] = b),
            (p[11] = f.accountingComplete),
            (p[12] = f.breakdown),
            (p[13] = g))
          : (g = p[13]),
        p[14] !== j || p[15] !== c || p[16] !== g
          ? ((m = (0, a.jsxs)("div", { ref: j, className: "flex flex-col gap-3 px-4 pb-3", children: [c, g] })),
            (p[14] = j),
            (p[15] = c),
            (p[16] = g),
            (p[17] = m))
          : (m = p[17]),
        p[18] !== s || p[19] !== u || p[20] !== m
          ? ((h = (0, a.jsx)(eA.P.div, {
              className: "overflow-hidden",
              animate: s,
              exit: i,
              initial: l,
              transition: u,
              children: m,
            })),
            (p[18] = s),
            (p[19] = u),
            (p[20] = m),
            (p[21] = h))
          : (h = p[21]),
        h
      )
    }
    function tt(e) {
      return 0 === e.basisPoints
    }
    function ts(e) {
      return e.basisPoints > 0
    }
    function ta(e) {
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
                    values: {
                      threshold: (0, a.jsx)(_.Gr, { value: 0.001, style: "percent", maximumFractionDigits: 1 }),
                    },
                  })
                : (0, a.jsx)(_.Gr, { value: i / 1e4, style: "percent", maximumFractionDigits: 1 })),
            (s[0] = i),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    var tn = s("kK7d"),
      ti = s("GDNt"),
      tl = s("ASxG"),
      tr = s("fDv2")
    let to = tl.Ikc({
      data_as_of: tr.w$({ offset: !0 }).nullable(),
      coverage_start: tr.w$({ offset: !0 }).nullable(),
      coverage_complete: tl.zMY(),
      approximate: tl.zMY().default(!0),
      boundary_tolerance_seconds: tl.aig().nullable(),
      periods: tl.YOg(
        tl.Ikc({
          id: tl.YjP(),
          window_minutes: tl.KCZ([tl.euz(300), tl.euz(10080)]),
          plan_type: tl.YjP(),
          starts_at: tr.w$({ offset: !0 }),
          ends_at: tr.w$({ offset: !0 }),
          accounting_complete: tl.zMY(),
          used_basis_points: tl.aig().nullable(),
          breakdowns: tl
            .YOg(
              tl.Ikc({
                dimension: tl.k5n(["thread_source", "turn_trigger", "model", "surface"]),
                rows: tl.YOg(tl.Ikc({ key: tl.YjP(), basis_points: tl.aig() })),
              }),
            )
            .nullable(),
        }),
      ),
    })
    function td(e) {
      let t,
        s,
        i,
        u,
        g,
        m,
        h,
        p,
        f,
        x,
        b,
        v,
        k,
        j,
        w,
        _,
        M,
        C,
        S,
        I,
        U,
        N = (0, n.c)(56),
        { isActive: T, isPolling: L, reduceMotion: D } = e,
        P = void 0 === L || L,
        E = (0, c.As)()
      N[0] !== E || N[1] !== T || N[2] !== P
        ? ((t = (function ({ accountId: e, userId: t, authMethod: s }, a = !0, n = !0) {
            return {
              queryKey: ["consumer-plan-limit-history", e, t, 7],
              enabled: a && "chatgpt" === s && null != e && null != t,
              queryFn: async ({ signal: e }) => {
                try {
                  let t = await tn.CodexRequest.safeGet("/wham/usage/plan_limit_history", {
                    parameters: { query: { days: 7 } },
                    signal: e,
                    expectedErrorStatuses: [404],
                  })
                  return to.parse(t)
                } catch (e) {
                  if (e instanceof ti.fk && 404 === e.status) return null
                  throw e
                }
              },
              retry: !1,
              staleTime: R.D.FIVE_MINUTES,
              refetchInterval: !!n && R.D.FIVE_MINUTES,
              refetchOnWindowFocus: !1,
            }
          })(E, T, P)),
          (N[0] = E),
          (N[1] = T),
          (N[2] = P),
          (N[3] = t))
        : (t = N[3])
      let { data: O, isLoading: F, isError: H, refetch: $ } = (0, V.I)(t),
        K = O ?? void 0
      N[4] !== H || N[5] !== F
        ? ((s = "ready"), F ? (s = "loading") : H && (s = "error"), (N[4] = H), (N[5] = F), (N[6] = s))
        : (s = N[6])
      let W = (0, o.A)(),
        [X, q] = (0, r.useState)("feature")
      ;(N[7] === Symbol.for("react.memo_cache_sentinel") ? ((i = ["fiveHour", "weekly"]), (N[7] = i)) : (i = N[7]),
        N[8] !== K || N[9] !== s
          ? ((u = i.filter(
              (e) =>
                "ready" !== s ||
                K?.data_as_of == null ||
                0 === K.periods.length ||
                K.periods.some((t) => t.window_minutes === ("fiveHour" === e ? 300 : 10080)),
            )),
            (N[8] = K),
            (N[9] = s),
            (N[10] = u))
          : (u = N[10]))
      let z = u
      ;(N[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = (0, a.jsx)(d.A, {
            id: "consumerAnalyticsPreview.limitHistory.title",
            defaultMessage: "Plan usage history",
          })),
          (N[11] = g))
        : (g = N[11]),
        N[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, a.jsx)("p", {
              children: (0, a.jsx)(d.A, {
                id: "consumerAnalyticsPreview.limitHistory.description",
                defaultMessage: "See what used each of your plan limits",
              }),
            })),
            (N[12] = m))
          : (m = N[12]),
        N[13] !== X
          ? ((h =
              "turn-start" === X
                ? (0, a.jsx)("p", {
                    children: (0, a.jsx)(d.A, {
                      id: "consumerUsage.limitHistory.tasksOnly",
                      defaultMessage: "By turn start includes Chats only; percentages use the full period limit",
                    }),
                  })
                : null),
            (N[13] = X),
            (N[14] = h))
          : (h = N[14]),
        N[15] !== K?.approximate || N[16] !== s
          ? ((p =
              K?.approximate && "ready" === s
                ? (0, a.jsx)("p", {
                    children: (0, a.jsx)(d.A, {
                      id: "consumerUsage.limitHistory.approximateAmounts",
                      defaultMessage: "Amounts and period boundaries are approximate",
                    }),
                  })
                : null),
            (N[15] = K?.approximate),
            (N[16] = s),
            (N[17] = p))
          : (p = N[17]),
        N[18] !== K || N[19] !== s
          ? ((f =
              "ready" === s && K?.coverage_complete === !1 && K.periods.length > 0
                ? (0, a.jsx)("p", {
                    children: (0, a.jsx)(d.A, {
                      id: "consumerAnalyticsPreview.limitHistory.partial",
                      defaultMessage: "Some periods aren't available yet",
                    }),
                  })
                : null),
            (N[18] = K),
            (N[19] = s),
            (N[20] = f))
          : (f = N[20]),
        N[21] !== h || N[22] !== p || N[23] !== f
          ? ((x = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [m, h, p, f] })),
            (N[21] = h),
            (N[22] = p),
            (N[23] = f),
            (N[24] = x))
          : (x = N[24]),
        N[25] !== W
          ? ((b = W.formatMessage({
              id: "consumerUsage.limitHistory.details",
              defaultMessage: "About plan usage history",
            })),
            (N[25] = W),
            (N[26] = b))
          : (b = N[26]),
        N[27] === Symbol.for("react.memo_cache_sentinel") ? ((v = (0, a.jsx)(ez.ehD, {})), (N[27] = v)) : (v = N[27]),
        N[28] !== b
          ? ((k = (0, a.jsx)(A.$, { "aria-label": b, color: "ghostTertiary", size: "inline", children: v })),
            (N[28] = b),
            (N[29] = k))
          : (k = N[29]),
        N[30] !== x || N[31] !== k
          ? ((j = (0, a.jsxs)("span", {
              className: "inline-flex items-center gap-2",
              children: [g, (0, a.jsx)(e2.m, { side: "bottom", align: "start", content: x, children: k })],
            })),
            (N[30] = x),
            (N[31] = k),
            (N[32] = j))
          : (j = N[32]),
        N[33] !== W
          ? ((w = W.formatMessage({
              id: "consumerAnalyticsPreview.limitHistory.sharedGroup",
              defaultMessage: "Group plan usage history",
            })),
            (N[33] = W),
            (N[34] = w))
          : (w = N[34]),
        N[35] !== X || N[36] !== w
          ? ((_ = (0, a.jsx)(eZ, { ariaLabel: w, breakdown: X, onChange: q })), (N[35] = X), (N[36] = w), (N[37] = _))
          : (_ = N[37]),
        N[38] !== j || N[39] !== _
          ? ((M = (0, a.jsx)(y.X.Header, {
              className: "@max-2xl:flex-col @max-2xl:items-start",
              actionsAlignment: "end",
              title: j,
              actions: _,
            })),
            (N[38] = j),
            (N[39] = _),
            (N[40] = M))
          : (M = N[40]))
      let B = z.length > 1 && "@2xl:grid-cols-2"
      return (
        N[41] !== B ? ((C = (0, l.A)("grid grid-cols-1 items-start gap-6", B)), (N[41] = B), (N[42] = C)) : (C = N[42]),
        N[43] !== X || N[44] !== K || N[45] !== z || N[46] !== D || N[47] !== $ || N[48] !== s
          ? ((S = z.map((e) =>
              (0, a.jsx)(
                tu,
                { limit: e, breakdown: X, data: K, state: s, onRetry: () => void $(), reduceMotion: D },
                `${e}:${K?.data_as_of}`,
              ),
            )),
            (N[43] = X),
            (N[44] = K),
            (N[45] = z),
            (N[46] = D),
            (N[47] = $),
            (N[48] = s),
            (N[49] = S))
          : (S = N[49]),
        N[50] !== C || N[51] !== S
          ? ((I = (0, a.jsx)(y.X.Content, {
              className: "gap-4",
              children: (0, a.jsx)("div", { className: C, children: S }),
            })),
            (N[50] = C),
            (N[51] = S),
            (N[52] = I))
          : (I = N[52]),
        N[53] !== M || N[54] !== I
          ? ((U = (0, a.jsxs)(y.X, { id: "consumer-plan-limit-history", className: "@container", children: [M, I] })),
            (N[53] = M),
            (N[54] = I),
            (N[55] = U))
          : (U = N[55]),
        U
      )
    }
    function tu(e) {
      let t,
        s,
        i,
        l,
        o,
        u,
        c,
        g,
        m,
        h = (0, n.c)(31),
        { limit: p, breakdown: f, data: b, state: v, onRetry: k, reduceMotion: j } = e,
        [w, _] = (0, r.useState)(),
        [M, C] = (0, r.useState)(!1)
      h[0] !== f || h[1] !== b || h[2] !== w || h[3] !== p || h[4] !== M
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
          })(b, { limit: p, breakdown: f })),
          (t = s?.periods),
          (l = t?.slice(0, M ? void 0 : 5)),
          (i = void 0 !== w && null == w ? null : (l?.find((e) => e.id === w)?.id ?? l?.find(tc)?.id ?? l?.[0]?.id)),
          (h[0] = f),
          (h[1] = b),
          (h[2] = w),
          (h[3] = p),
          (h[4] = M),
          (h[5] = t),
          (h[6] = s),
          (h[7] = i),
          (h[8] = l))
        : ((t = h[5]), (s = h[6]), (i = h[7]), (l = h[8]))
      let S = i
      return (
        h[9] !== p
          ? ((o = (0, a.jsx)(y.X.Header, {
              size: "compact",
              title: (0, a.jsx)(d.A, {
                id: "consumerAnalyticsPreview.limitHistory.limitHeading",
                defaultMessage: "{limit, select, fiveHour {5-hour limits} other {Weekly limits}}",
                values: { limit: p },
              }),
            })),
            (h[9] = p),
            (h[10] = o))
          : (o = h[10]),
        h[11] !== f ||
        h[12] !== p ||
        h[13] !== k ||
        h[14] !== j ||
        h[15] !== s ||
        h[16] !== S ||
        h[17] !== v ||
        h[18] !== l
          ? ((u = (0, a.jsx)(x.t, {
              children: (0, a.jsx)(tg, {
                limit: p,
                breakdown: f,
                report: s,
                visiblePeriods: l,
                selectedId: S,
                onSelect: _,
                state: v,
                onRetry: k,
                reduceMotion: j,
              }),
            })),
            (h[11] = f),
            (h[12] = p),
            (h[13] = k),
            (h[14] = j),
            (h[15] = s),
            (h[16] = S),
            (h[17] = v),
            (h[18] = l),
            (h[19] = u))
          : (u = h[19]),
        h[20] !== t || h[21] !== S || h[22] !== M || h[23] !== v
          ? ((c =
              "ready" === v && null != t && t.length > 5
                ? (0, a.jsx)(A.$, {
                    className: "self-start",
                    color: "secondary",
                    size: "compact",
                    onClick: () => {
                      ;(M && !t.slice(0, 5).some((e) => e.id === S) && _(void 0), C(!M))
                    },
                    children: (0, a.jsx)(d.A, {
                      id: "consumerAnalyticsPreview.limitHistory.toggleRows",
                      defaultMessage: "{expanded, select, yes {Show less} other {Show more}}",
                      values: { expanded: M ? "yes" : "no" },
                    }),
                  })
                : null),
            (h[20] = t),
            (h[21] = S),
            (h[22] = M),
            (h[23] = v),
            (h[24] = c))
          : (c = h[24]),
        h[25] !== u || h[26] !== c
          ? ((g = (0, a.jsxs)(y.X.Content, { className: "gap-3", children: [u, c] })),
            (h[25] = u),
            (h[26] = c),
            (h[27] = g))
          : (g = h[27]),
        h[28] !== o || h[29] !== g
          ? ((m = (0, a.jsxs)(y.X, { className: "@container min-w-0", children: [o, g] })),
            (h[28] = o),
            (h[29] = g),
            (h[30] = m))
          : (m = h[30]),
        m
      )
    }
    function tc(e) {
      return "current" === e.status
    }
    function tg(e) {
      let t,
        s,
        i,
        l,
        r,
        u,
        c = (0, n.c)(26),
        {
          limit: g,
          breakdown: m,
          report: p,
          visiblePeriods: f,
          selectedId: y,
          onSelect: x,
          state: b,
          onRetry: v,
          reduceMotion: k,
        } = e,
        j = (0, o.A)()
      if ("loading" === b) {
        let e
        return (
          c[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(I.u, {
                children: (0, a.jsx)(d.A, {
                  id: "consumerAnalyticsPreview.limitHistory.loading",
                  defaultMessage: "Loading limit history\u2026",
                }),
              })),
              (c[0] = e))
            : (e = c[0]),
          e
        )
      }
      if ("error" === b) {
        let e, t, s
        return (
          c[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "consumerAnalyticsPreview.limitHistory.error",
                defaultMessage: "Couldn't load limit history",
              })),
              (c[1] = e))
            : (e = c[1]),
          c[2] !== v
            ? ((t =
                null == v
                  ? void 0
                  : (0, a.jsx)(A.$, {
                      color: "secondary",
                      size: "compact",
                      onClick: v,
                      children: (0, a.jsx)(d.A, {
                        id: "consumerAnalyticsPreview.limitHistory.retry",
                        defaultMessage: "Retry",
                      }),
                    })),
              (c[2] = v),
              (c[3] = t))
            : (t = c[3]),
          c[4] !== t ? ((s = (0, a.jsx)(U.ic, { label: e, control: t })), (c[4] = t), (c[5] = s)) : (s = c[5]),
          s
        )
      }
      if (null == p || ("partial" === p.coverage && 0 === p.periods.length)) {
        let e
        return (
          c[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(h.W, {
                layout: "settings-row",
                children: (0, a.jsx)(d.A, {
                  id: "consumerAnalyticsPreview.limitHistory.unavailable",
                  defaultMessage: "Limit history isn't available yet",
                }),
              })),
              (c[6] = e))
            : (e = c[6]),
          e
        )
      }
      if ("empty" === b || 0 === p.periods.length) {
        let e
        return (
          c[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(h.W, {
                layout: "settings-row",
                children: (0, a.jsx)(d.A, {
                  id: "consumerAnalyticsPreview.limitHistory.empty",
                  defaultMessage: "No limit periods in this date range",
                }),
              })),
              (c[7] = e))
            : (e = c[7]),
          e
        )
      }
      return (
        c[8] !== j || c[9] !== g
          ? ((t = j.formatMessage(
              {
                id: "consumerAnalyticsPreview.limitHistory.tableName",
                defaultMessage: "{limit, select, fiveHour {5-hour limits} other {Weekly limits}}",
              },
              { limit: g },
            )),
            (c[8] = j),
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
                    }),
                  }),
                ],
              }),
            })),
            (c[12] = i))
          : (i = c[12]),
        c[13] !== m || c[14] !== g || c[15] !== x || c[16] !== k || c[17] !== p || c[18] !== y || c[19] !== f
          ? ((l = f?.map((e) =>
              (0, a.jsx)(
                e8,
                {
                  period: e,
                  asOf: p.asOf,
                  limit: g,
                  breakdown: m,
                  expanded: y === e.id,
                  onToggle: () => x(y === e.id ? null : e.id),
                  reduceMotion: k,
                },
                e.id,
              ),
            )),
            (c[13] = m),
            (c[14] = g),
            (c[15] = x),
            (c[16] = k),
            (c[17] = p),
            (c[18] = y),
            (c[19] = f),
            (c[20] = l))
          : (l = c[20]),
        c[21] !== l ? ((r = (0, a.jsx)("tbody", { children: l })), (c[21] = l), (c[22] = r)) : (r = c[22]),
        c[23] !== t || c[24] !== r
          ? ((u = (0, a.jsxs)("table", { className: "w-full text-xs leading-4", "aria-label": t, children: [i, r] })),
            (c[23] = t),
            (c[24] = r),
            (c[25] = u))
          : (u = c[25]),
        u
      )
    }
    function tm(e) {
      let t,
        s = (0, n.c)(5),
        { isActive: i, isPolling: l, reduceMotion: r, scope: o } = e,
        d = void 0 === l || l,
        u = (0, c.As)()
      if (!(0, b.Zj)("business" !== (void 0 === o ? "consumer" : o) || "1014047933")) return null
      let g = `${u.accountId}:${u.userId}`
      return (
        s[0] !== i || s[1] !== d || s[2] !== r || s[3] !== g
          ? ((t = (0, a.jsx)(td, { isActive: i, isPolling: d, reduceMotion: r }, g)),
            (s[0] = i),
            (s[1] = d),
            (s[2] = r),
            (s[3] = g),
            (s[4] = t))
          : (t = s[4]),
        t
      )
    }
    var th = s("DnKW"),
      tp = s("T1PX")
    function tf(e) {
      let t,
        s = (0, n.c)(2),
        { metric: i } = e
      return (
        s[0] !== i
          ? ((t = (0, a.jsx)(d.A, {
              id: "consumerUsage.chats.metric",
              defaultMessage:
                "{metric, select, five_hour_limit_percent {% of 5h limit} weekly_limit_percent {% of weekly limit} other {Credits used}}",
              values: { metric: i },
            })),
            (s[0] = i),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function ty(e) {
      let t,
        s = (0, n.c)(5),
        { value: i, metric: l } = e
      if (null == i) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, { id: "consumerUsage.chats.unavailable", defaultMessage: "-" })), (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      let r = "balance_usage_credits" === l,
        o = r ? i : i / 100,
        u = r ? "decimal" : "percent",
        c = 0 !== i && 0.01 > Math.abs(i) ? 2 : void 0
      return (
        s[1] !== o || s[2] !== u || s[3] !== c
          ? ((t = (0, a.jsx)(_.Gr, { value: o, style: u, maximumFractionDigits: 2, maximumSignificantDigits: c })),
            (s[1] = o),
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
        { row: i, metric: l } = e
      return (
        s[0] !== l || s[1] !== i
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
                        l = n.get(e)
                      n.set(e, null == i || (n.has(e) && null == l) ? null : (l ?? 0) + i)
                    }
                    return [...n]
                      .map(([e, t]) => ({ value: e, share: null != a && a > 0 && null != t ? t / a : null }))
                      .sort((e, t) => (null == e.share ? +(null != t.share) : null == t.share ? -1 : t.share - e.share))
                  })(i.usage, e, l)
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
                                  }),
                                })
                              : t.map((s) =>
                                  (0, a.jsxs)(
                                    "span",
                                    {
                                      className:
                                        "inline-flex min-w-0 flex-wrap items-baseline gap-x-1.5 justify-self-start wrap-anywhere",
                                      children: [
                                        (0, a.jsx)(H.h, { dimension: e, value: s.value }),
                                        1 === t.length && 1 === s.share
                                          ? null
                                          : (0, a.jsx)("span", {
                                              className: "text-secondary tabular-nums",
                                              children:
                                                null == s.share
                                                  ? (0, a.jsx)(d.A, {
                                                      id: "consumerUsage.chats.unavailable",
                                                      defaultMessage: "-",
                                                    })
                                                  : (0, a.jsx)(_.Gr, {
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
            (s[0] = l),
            (s[1] = i),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    let tb = ["five_hour_limit_percent", "weekly_limit_percent", "balance_usage_credits"]
    var tv = s("CpsU"),
      tk = s.n(tv)
    let tj = (0, k.vU)(S.u, ({ accountId: e, userId: t, threads: s }, { scope: a }) => {
      let n = s.filter((e) => !(0, M.I3)(e)).sort((e, t) => t.updatedAt - e.updatedAt || e.id.localeCompare(t.id)),
        i = n.slice(0, 100)
      return {
        enabled: s.length > 0,
        queryKey: [
          "consumer-task-usage-v2",
          e,
          t,
          T.fI,
          i.map(({ id: e, createdAt: t }) => [e, t]).sort(([e], [t]) => e.localeCompare(t)),
          n.length > i.length,
        ],
        queryFn: async ({ signal: e }) => {
          let t = [],
            s = []
          for (let n of tk()(i, 2)) {
            e.throwIfAborted()
            let i = await Promise.all(n.map((e) => (0, E.V)(a, T.fI).getSubagentDescendantSnapshot((0, j.JXB)(e.id))))
            ;(e.throwIfAborted(),
              n.forEach((e, a) => {
                let n = i[a],
                  l = [...new Set(n.descendantThreads.map(({ id: e }) => e))]
                ;(t.push({ thread: e, usage: null, subagentCount: n.isComplete ? l.length : null }),
                  l.length >= 1e3 ||
                    s.push({
                      thread_id: e.id,
                      created_at:
                        Number.isFinite(e.createdAt) && e.createdAt > 0
                          ? new Date(1e3 * e.createdAt).toISOString()
                          : null,
                      descendant_thread_ids: l,
                    }))
              }))
          }
          let l = [],
            r = [],
            o = 0,
            d = new Set()
          for (let e of s) {
            let t = [e.thread_id, ...(e.descendant_thread_ids ?? [])]
            if (t.some((e) => d.has(e))) throw Error("Task usage groups overlap")
            ;(t.forEach((e) => d.add(e)),
              (100 === r.length || o + t.length > 1e3) && (l.push(r), (r = []), (o = 0)),
              r.push(e),
              (o += t.length))
          }
          r.length > 0 && l.push(r)
          let u = []
          for (let t of tk()(l, 2)) {
            e.throwIfAborted()
            let s = await Promise.all(
              t.map((t) =>
                tn.CodexRequest.safePost("/wham/usage/thread_usage/query_v2", {
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
        staleTime: R.D.FIVE_MINUTES,
        refetchInterval: R.D.FIVE_MINUTES,
      }
    })
    var tw = s("EJne")
    let t_ = (0, k.vU)(S.u, ({ accountId: e, userId: t, threadIds: s }) => ({
      queryKey: ["work-usage-conversations", e, t, s],
      enabled: s.length > 0,
      queryFn: async ({ signal: e }) =>
        Object.fromEntries(
          await (0, tw.T)(s, 10, async (t) =>
            Object.entries(
              await tn.Kd.safePost("/conversations/by-work-thread", { requestBody: { thread_ids: t }, signal: e }),
            ),
          ),
        ),
      retry: !1,
      staleTime: R.D.ONE_MINUTE,
    }))
    function tM(e) {
      let t,
        s,
        i,
        l = (0, n.c)(18),
        { accountId: o, isPolling: d, userId: u } = e,
        c = void 0 === d || d,
        [g, m] = (0, r.useState)(!1)
      l[0] !== o || l[1] !== u ? ((t = { accountId: o, userId: u }), (l[0] = o), (l[1] = u), (l[2] = t)) : (t = l[2])
      let h = c || !g
      l[3] !== h ? ((s = { enabled: h }), (l[3] = h), (l[4] = s)) : (s = l[4])
      let { data: p, isPending: f, isError: y, isSuccess: x, refetch: b } = (0, k._U)(F, t, s)
      if ((!g && (x || y) && m(!0), f || y)) {
        let e, t, s
        return (
          l[5] !== y || l[6] !== f ? ((e = tL(y, f)), (l[5] = y), (l[6] = f), (l[7] = e)) : (e = l[7]),
          l[8] !== b ? ((t = () => void b()), (l[8] = b), (l[9] = t)) : (t = l[9]),
          l[10] !== e || l[11] !== t
            ? ((s = (0, a.jsx)(tC, { rows: void 0, status: e, onRetry: t })), (l[10] = e), (l[11] = t), (l[12] = s))
            : (s = l[12]),
          s
        )
      }
      return (
        l[13] !== o || l[14] !== c || l[15] !== p || l[16] !== u
          ? ((i = (0, a.jsx)(tA, { isPolling: c, accountId: o, userId: u, threads: p })),
            (l[13] = o),
            (l[14] = c),
            (l[15] = p),
            (l[16] = u),
            (l[17] = i))
          : (i = l[17]),
        i
      )
    }
    function tA(e) {
      let t,
        s,
        i,
        l,
        o,
        d,
        u,
        c = (0, n.c)(22),
        { accountId: g, isPolling: m, userId: h, threads: p } = e,
        [f, y] = (0, r.useState)(!1)
      c[0] !== g || c[1] !== p || c[2] !== h
        ? ((t = { accountId: g, userId: h, threads: p }), (c[0] = g), (c[1] = p), (c[2] = h), (c[3] = t))
        : (t = c[3])
      let x = m || !f
      c[4] !== x ? ((s = { enabled: x }), (c[4] = x), (c[5] = s)) : (s = c[5])
      let { data: b, isPending: v, isError: j, isSuccess: w, refetch: _ } = (0, k._U)(tj, t, s)
      ;(!f && (w || j) && y(!0),
        c[6] !== g || c[7] !== h ? ((i = { accountId: g, userId: h }), (c[6] = g), (c[7] = h), (c[8] = i)) : (i = c[8]),
        c[9] !== b?.rows || c[10] !== p.length
          ? ((l = 0 === p.length ? [] : b?.rows), (c[9] = b?.rows), (c[10] = p.length), (c[11] = l))
          : (l = c[11]))
      let M = p.length > 0 && v
      return (
        c[12] !== j || c[13] !== M ? ((o = tL(j, M)), (c[12] = j), (c[13] = M), (c[14] = o)) : (o = c[14]),
        c[15] !== _ ? ((d = () => void _()), (c[15] = _), (c[16] = d)) : (d = c[16]),
        c[17] !== i || c[18] !== l || c[19] !== o || c[20] !== d
          ? ((u = (0, a.jsx)(tC, { identity: i, rows: l, status: o, onRetry: d })),
            (c[17] = i),
            (c[18] = l),
            (c[19] = o),
            (c[20] = d),
            (c[21] = u))
          : (u = c[21]),
        u
      )
    }
    function tC(e) {
      let t,
        s,
        i,
        l,
        o,
        u,
        c,
        g = (0, n.c)(28),
        { rows: m, status: h, onRetry: p, defaultExpandedThreadId: f, identity: b } = e,
        v = (0, r.useId)(),
        [k, j] = (0, r.useState)(!1),
        [w, _] = (0, r.useState)("weekly_limit_percent")
      if (g[0] !== m || g[1] !== w) {
        let e
        ;(g[4] !== m
          ? ((e = (e) =>
              "balance_usage_credits" === e ||
              m?.some((t) => {
                let { usage: s } = t
                return null != tT(s, e)
              })),
            (g[4] = m),
            (g[5] = e))
          : (e = g[5]),
          (s = (t = tb.filter(e)).includes(w) ? w : (t[0] ?? "balance_usage_credits")),
          (g[0] = m),
          (g[1] = w),
          (g[2] = t),
          (g[3] = s))
      } else ((t = g[2]), (s = g[3]))
      let M = s
      g[6] !== M || g[7] !== m
        ? ((i = m?.slice().sort((e, t) => {
            let s = tT(e.usage, M),
              a = tT(t.usage, M)
            return null == s ? +(null != a) : null == a ? -1 : a - s
          })),
          (g[6] = M),
          (g[7] = m),
          (g[8] = i))
        : (i = g[8])
      let C = i
      return (
        g[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(y.X.Header, {
              title: (0, a.jsx)(d.A, { id: "consumerUsage.chats.title", defaultMessage: "Top chats" }),
              subtitle: (0, a.jsx)(d.A, {
                id: "consumerUsage.chats.recentDescription",
                defaultMessage: "Compare each chat\u2019s plan and credit usage",
              }),
            })),
            (g[9] = l))
          : (l = g[9]),
        g[10] !== f ||
        g[11] !== b ||
        g[12] !== M ||
        g[13] !== t ||
        g[14] !== p ||
        g[15] !== k ||
        g[16] !== C ||
        g[17] !== h ||
        g[18] !== v
          ? ((o = (0, a.jsx)(x.t, {
              children: (0, a.jsx)(tS, {
                id: v,
                identity: b,
                rows: C,
                status: h,
                onRetry: p,
                metric: M,
                metrics: t,
                setMetric: _,
                showAll: k,
                defaultExpandedThreadId: f,
              }),
            })),
            (g[10] = f),
            (g[11] = b),
            (g[12] = M),
            (g[13] = t),
            (g[14] = p),
            (g[15] = k),
            (g[16] = C),
            (g[17] = h),
            (g[18] = v),
            (g[19] = o))
          : (o = g[19]),
        g[20] !== m || g[21] !== k || g[22] !== h || g[23] !== v
          ? ((u =
              "ready" === h && null != m && m.length > 5
                ? (0, a.jsx)(A.$, {
                    className: "self-start",
                    "aria-controls": v,
                    "aria-expanded": k,
                    color: "secondary",
                    size: "compact",
                    onClick: () => j(!k),
                    children: (0, a.jsx)(d.A, {
                      id: "consumerAnalyticsPreview.chats.toggleRows",
                      defaultMessage: "{expanded, select, yes {Show less} other {Show more}}",
                      values: { expanded: k ? "yes" : "no" },
                    }),
                  })
                : null),
            (g[20] = m),
            (g[21] = k),
            (g[22] = h),
            (g[23] = v),
            (g[24] = u))
          : (u = g[24]),
        g[25] !== o || g[26] !== u
          ? ((c = (0, a.jsxs)(y.X, {
              id: "consumer-top-chats",
              children: [l, (0, a.jsxs)(y.X.Content, { className: "gap-3", children: [o, u] })],
            })),
            (g[25] = o),
            (g[26] = u),
            (g[27] = c))
          : (c = g[27]),
        c
      )
    }
    function tS(e) {
      let t,
        s,
        i,
        o,
        u,
        c,
        g,
        m,
        p = (0, n.c)(32),
        {
          id: f,
          identity: y,
          rows: x,
          status: b,
          onRetry: v,
          metric: j,
          metrics: w,
          setMetric: _,
          showAll: M,
          defaultExpandedThreadId: C,
        } = e,
        S = (0, r.useId)(),
        N = (0, tp.I)(),
        [T, L] = (0, r.useState)(C ?? null),
        D = x?.slice(0, M ? void 0 : 5),
        P = (D ?? []).filter(tU).map(tI).sort(),
        { data: E } = (0, k._U)(t_, {
          accountId: y?.accountId ?? "",
          userId: y?.userId ?? "",
          threadIds: null == y || "ready" !== b ? [] : P,
        })
      if ((null == T || ("ready" === b && D?.some((e) => e.thread.id === T)) || L(null), "loading" === b)) {
        let e
        return (
          p[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(I.u, {
                children: (0, a.jsx)(d.A, {
                  id: "consumerAnalyticsPreview.chats.loading",
                  defaultMessage: "Loading chat usage\u2026",
                }),
              })),
              (p[0] = e))
            : (e = p[0]),
          e
        )
      }
      if ("error" === b) {
        let e, t, s
        return (
          p[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "consumerAnalyticsPreview.chats.error",
                defaultMessage: "Couldn't load chat usage",
              })),
              (p[1] = e))
            : (e = p[1]),
          p[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(d.A, { id: "consumerAnalyticsPreview.chats.retry", defaultMessage: "Retry" })),
              (p[2] = t))
            : (t = p[2]),
          p[3] !== v
            ? ((s = (0, a.jsx)(U.ic, {
                label: e,
                control: (0, a.jsx)(A.$, { color: "secondary", size: "compact", onClick: v, children: t }),
              })),
              (p[3] = v),
              (p[4] = s))
            : (s = p[4]),
          s
        )
      }
      if (null == x || 0 === x.length) {
        let e
        return (
          p[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(h.W, {
                layout: "settings-row",
                children: (0, a.jsx)(d.A, {
                  id: "consumerUsage.chats.empty",
                  defaultMessage: "No recent chats on this device",
                }),
              })),
              (p[5] = e))
            : (e = p[5]),
          e
        )
      }
      if (
        (p[6] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, a.jsx)("col", {})), (p[6] = t)) : (t = p[6]),
        p[7] !== w)
      ) {
        let e
        ;(p[9] !== w.length
          ? ((e = (e) =>
              (0, a.jsx)(
                "col",
                {
                  className: (0, l.A)(3 === w.length && "w-1/6", 2 === w.length && "w-1/4", 1 === w.length && "w-1/3"),
                },
                e,
              )),
            (p[9] = w.length),
            (p[10] = e))
          : (e = p[10]),
          (s = w.map(e)),
          (p[7] = w),
          (p[8] = s))
      } else s = p[8]
      if (
        (p[11] !== s ? ((i = (0, a.jsxs)("colgroup", { children: [t, s] })), (p[11] = s), (p[12] = i)) : (i = p[12]),
        p[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)("th", {
              className: "py-2 ps-10 pe-4 text-start font-normal",
              scope: "col",
              children: (0, a.jsx)(d.A, { id: "consumerAnalyticsPreview.chats.chat", defaultMessage: "Chat" }),
            })),
            (p[13] = o))
          : (o = p[13]),
        p[14] !== S || p[15] !== j || p[16] !== w || p[17] !== _)
      ) {
        let e
        ;(p[19] !== S || p[20] !== j || p[21] !== _
          ? ((e = (e) =>
              (0, a.jsx)(
                "th",
                {
                  className: "py-2 ps-2 pe-6 text-end font-normal",
                  scope: "col",
                  "aria-labelledby": `${S}-${e}`,
                  "aria-sort": e === j ? "descending" : "none",
                  children: (0, a.jsx)("div", {
                    className: "flex justify-end",
                    children: (0, a.jsx)(A.$, {
                      color: "ghostMuted",
                      size: "inline",
                      onClick: () => _(e),
                      children: (0, a.jsx)("span", {
                        id: `${S}-${e}`,
                        className: "text-end",
                        children: (0, a.jsx)(tf, { metric: e }),
                      }),
                    }),
                  }),
                },
                e,
              )),
            (p[19] = S),
            (p[20] = j),
            (p[21] = _),
            (p[22] = e))
          : (e = p[22]),
          (u = w.map(e)),
          (p[14] = S),
          (p[15] = j),
          (p[16] = w),
          (p[17] = _),
          (p[18] = u))
      } else u = p[18]
      p[23] !== u
        ? ((c = (0, a.jsx)("thead", {
            className: "text-xs leading-5 text-secondary",
            children: (0, a.jsxs)("tr", { children: [o, u] }),
          })),
          (p[23] = u),
          (p[24] = c))
        : (c = p[24])
      let O = D?.map((e) =>
        (0, a.jsx)(
          tN,
          {
            row: e,
            workConversation: E?.[e.thread.id],
            metric: j,
            metrics: w,
            expanded: e.thread.id === T,
            onToggle: () => L(e.thread.id === T ? null : e.thread.id),
            reduceMotion: N,
          },
          e.thread.id,
        ),
      )
      return (
        p[25] !== O ? ((g = (0, a.jsx)("tbody", { children: O })), (p[25] = O), (p[26] = g)) : (g = p[26]),
        p[27] !== f || p[28] !== g || p[29] !== i || p[30] !== c
          ? ((m = (0, a.jsx)("div", {
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
            (p[31] = m))
          : (m = p[31]),
        m
      )
    }
    function tI(e) {
      let { thread: t } = e
      return t.id
    }
    function tU(e) {
      let { thread: t } = e
      return (0, th.j)(t.originator)
    }
    function tN(e) {
      let t,
        s,
        i,
        o,
        u,
        c,
        g,
        h,
        p,
        f,
        y,
        x,
        b,
        v,
        _,
        M,
        S,
        I,
        U,
        N,
        D,
        E,
        O,
        R,
        F = (0, n.c)(80),
        { row: H, workConversation: $, metric: K, metrics: W, expanded: X, onToggle: q, reduceMotion: z } = e,
        B = (0, P.M0)(),
        G = (0, r.useId)(),
        [Z, V] = (0, r.useState)()
      F[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (e) => {
            V((0, e5.q)(e).height)
          }),
          (F[0] = t))
        : (t = F[0])
      let Q = (0, e6.wY)(t)
      F[1] !== H.thread.originator
        ? ((s = (0, th.j)(H.thread.originator)), (F[1] = H.thread.originator), (F[2] = s))
        : (s = F[2])
      let Y = s
      F[3] !== Y || F[4] !== H.thread.id
        ? ((i = Y ? null : { hostId: T.fI, threadId: (0, j.JXB)(H.thread.id) }),
          (F[3] = Y),
          (F[4] = H.thread.id),
          (F[5] = i))
        : (i = F[5])
      let J = (0, k._U)(L.e, i)
      F[6] !== Y || F[7] !== J || F[8] !== H.thread || F[9] !== $?.title
        ? ((o = Y ? $?.title : (J ?? (0, w.Vm)(H.thread, w.wp))),
          (F[6] = Y),
          (F[7] = J),
          (F[8] = H.thread),
          (F[9] = $?.title),
          (F[10] = o))
        : (o = F[10])
      let ee = o
      F[11] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(d.A, { id: "consumerUsage.chats.openInChat", defaultMessage: "Open chat" }),
              (0, a.jsx)(ez.$XR, {}),
            ],
          })),
          (F[11] = u))
        : (u = F[11])
      let et = u,
        es = X ? "bg-text/3" : "hover:bg-secondary-ghost-hover has-[:focus-visible]:bg-secondary-ghost-hover"
      F[12] !== es
        ? ((c = (0, l.A)("group cursor-interaction border-t border-default", es)), (F[12] = es), (F[13] = c))
        : (c = F[13])
      let ea = `${G}-trigger`,
        en = `${G}-details`,
        ei = `${G}-title`,
        el = X && "rotate-90",
        er = z && "transition-none"
      ;(F[14] !== el || F[15] !== er
        ? ((g = (0, l.A)("shrink-0 text-secondary transition-transform duration-relaxed ease-enter-snappy", el, er)),
          (F[14] = el),
          (F[15] = er),
          (F[16] = g))
        : (g = F[16]),
        F[17] !== g
          ? ((h = (0, a.jsx)(m.I, { className: g, asset: eX, focusable: "false" })), (F[17] = g), (F[18] = h))
          : (h = F[18]))
      let eo = `${G}-title`
      if (
        (F[19] !== ee
          ? ((p = ee || (0, a.jsx)(d.A, { id: "consumerUsage.chats.untitled", defaultMessage: "Untitled chat" })),
            (F[19] = ee),
            (F[20] = p))
          : (p = F[20]),
        F[21] !== eo || F[22] !== p
          ? ((f = (0, a.jsx)(C.E, { id: eo, className: "min-w-0 flex-1", animateOnGroupHover: !0, children: p })),
            (F[21] = eo),
            (F[22] = p),
            (F[23] = f))
          : (f = F[23]),
        F[24] !== X || F[25] !== ei || F[26] !== h || F[27] !== f || F[28] !== ea || F[29] !== en
          ? ((y = (0, a.jsx)("th", {
              className: "max-w-0 px-4 py-2.5 text-start font-normal text-default",
              scope: "row",
              children: (0, a.jsxs)(A.$, {
                id: ea,
                className: "w-full gap-2 text-start",
                "aria-controls": en,
                "aria-expanded": X,
                "aria-labelledby": ei,
                color: "ghostMuted",
                focusRing: "inset",
                size: "inline",
                children: [h, f],
              }),
            })),
            (F[24] = X),
            (F[25] = ei),
            (F[26] = h),
            (F[27] = f),
            (F[28] = ea),
            (F[29] = en),
            (F[30] = y))
          : (y = F[30]),
        F[31] !== W || F[32] !== H.usage)
      ) {
        let e
        ;(F[34] !== H.usage
          ? ((e = (e) =>
              (0, a.jsx)(
                "td",
                {
                  className: "py-2.5 ps-2 pe-6 text-end tabular-nums",
                  children: (0, a.jsx)(ty, { value: tT(H.usage, e), metric: e }),
                },
                e,
              )),
            (F[34] = H.usage),
            (F[35] = e))
          : (e = F[35]),
          (x = W.map(e)),
          (F[31] = W),
          (F[32] = H.usage),
          (F[33] = x))
      } else x = F[33]
      F[36] !== q || F[37] !== y || F[38] !== x || F[39] !== c
        ? ((b = (0, a.jsxs)("tr", { className: c, onClick: q, children: [y, x] })),
          (F[36] = q),
          (F[37] = y),
          (F[38] = x),
          (F[39] = c),
          (F[40] = b))
        : (b = F[40])
      let ed = !X,
        eu = W.length + 1,
        ec = `${G}-details`,
        eg = X ? "opacity-100" : "opacity-0",
        eh = z && "transition-none"
      F[41] !== eg || F[42] !== eh
        ? ((v = (0, l.A)("overflow-hidden transition-opacity duration-basic ease-out", eg, eh)),
          (F[41] = eg),
          (F[42] = eh),
          (F[43] = v))
        : (v = F[43])
      let ep = `${G}-title`,
        ef = !X,
        ey = !X,
        ex = X ? (Z ?? "auto") : 0
      F[44] !== ex ? ((_ = { height: ex }), (F[44] = ex), (F[45] = _)) : (_ = F[45])
      let eb = 0.3 * !z
      return (
        F[46] !== eb ? ((M = { duration: eb, ease: em.Wu }), (F[46] = eb), (F[47] = M)) : (M = F[47]),
        F[48] !== K || F[49] !== H
          ? ((S = (0, a.jsx)(tx, { row: H, metric: K })), (F[48] = K), (F[49] = H), (F[50] = S))
          : (S = F[50]),
        F[51] !== $
          ? ((I =
              null != $
                ? (0, a.jsx)(A.z, {
                    className: "underline-offset-2 hover:underline focus-visible:underline",
                    color: "ghostMuted",
                    size: "inline",
                    to: `/c/${$.conversation_id}`,
                    children: et,
                  })
                : null),
            (F[51] = $),
            (F[52] = I))
          : (I = F[52]),
        F[53] !== Y || F[54] !== B || F[55] !== H.thread.id
          ? ((U = Y
              ? null
              : (0, a.jsx)(A.$, {
                  className: "underline-offset-2 hover:underline focus-visible:underline",
                  color: "ghostMuted",
                  size: "inline",
                  onClick: () => B((0, j.JXB)(H.thread.id), T.fI),
                  children: et,
                })),
            (F[53] = Y),
            (F[54] = B),
            (F[55] = H.thread.id),
            (F[56] = U))
          : (U = F[56]),
        F[57] !== Q || F[58] !== S || F[59] !== I || F[60] !== U
          ? ((N = (0, a.jsxs)("div", {
              ref: Q,
              className: "flex flex-col items-start gap-3 ps-10 pe-6 pt-1.5 pb-4",
              children: [S, I, U],
            })),
            (F[57] = Q),
            (F[58] = S),
            (F[59] = I),
            (F[60] = U),
            (F[61] = N))
          : (N = F[61]),
        F[62] !== ec ||
        F[63] !== v ||
        F[64] !== ep ||
        F[65] !== ef ||
        F[66] !== ey ||
        F[67] !== _ ||
        F[68] !== M ||
        F[69] !== N
          ? ((D = (0, a.jsx)(eA.P.section, {
              id: ec,
              className: v,
              "aria-labelledby": ep,
              "aria-hidden": ef,
              inert: ey,
              animate: _,
              initial: !1,
              transition: M,
              children: N,
            })),
            (F[62] = ec),
            (F[63] = v),
            (F[64] = ep),
            (F[65] = ef),
            (F[66] = ey),
            (F[67] = _),
            (F[68] = M),
            (F[69] = N),
            (F[70] = D))
          : (D = F[70]),
        F[71] !== eu || F[72] !== D
          ? ((E = (0, a.jsx)("td", { className: "p-0", colSpan: eu, children: D })),
            (F[71] = eu),
            (F[72] = D),
            (F[73] = E))
          : (E = F[73]),
        F[74] !== ed || F[75] !== E
          ? ((O = (0, a.jsx)("tr", { className: "bg-text/3", "aria-hidden": ed, children: E })),
            (F[74] = ed),
            (F[75] = E),
            (F[76] = O))
          : (O = F[76]),
        F[77] !== b || F[78] !== O
          ? ((R = (0, a.jsxs)(a.Fragment, { children: [b, O] })), (F[77] = b), (F[78] = O), (F[79] = R))
          : (R = F[79]),
        R
      )
    }
    function tT(e, t) {
      return null == e || "unavailable" === e.data_status || null == e[t] ? null : Number(e[t])
    }
    function tL(e, t) {
      return e ? "error" : t ? "loading" : "ready"
    }
    function tD(e) {
      let t,
        s,
        i,
        l,
        u,
        c,
        g,
        m,
        h,
        p,
        x,
        b,
        v,
        k,
        j,
        w,
        _ = (0, n.c)(50),
        { enabled: M, isPolling: A, reduceMotion: C } = e,
        S = void 0 === A || A,
        I = (0, o.A)(),
        [U, N] = (0, r.useState)(7),
        [T, L] = (0, r.useState)("product"),
        [D, P] = (0, r.useState)()
      _[0] !== T || _[1] !== U || _[2] !== M || _[3] !== S
        ? ((t = { isPolling: S, balanceUnit: "usd", breakdown: T, days: U, enabled: M, scope: "workspace" }),
          (_[0] = T),
          (_[1] = U),
          (_[2] = M),
          (_[3] = S),
          (_[4] = t))
        : (t = _[4])
      let { data: E, isError: O, isLoading: R, refetch: F } = (0, f.X6)(t)
      _[5] !== D?.data || _[6] !== D?.data.some
        ? ((s = D?.data.some(tO)), (_[5] = D?.data), (_[6] = D?.data.some), (_[7] = s))
        : (s = _[7])
      let H = s,
        $ = R && !O && !!H,
        K = $ ? D : E,
        W = K?.dataFreshnessTimestamp
      ;(_[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, a.jsx)(d.A, { id: "settings.usage.billing.spend.history.title", defaultMessage: "Spend history" })),
          (_[8] = i))
        : (i = _[8]),
        _[9] !== I || _[10] !== W
          ? ((l =
              null == W
                ? (0, a.jsx)(d.A, {
                    id: "settings.usage.billing.spend.history.subtitle",
                    defaultMessage: "Track spend in USD over time",
                  })
                : (0, a.jsx)(d.A, {
                    id: "settings.usage.billing.spend.history.subtitle.updated",
                    defaultMessage: "Track spend in USD over time. Updated {date}",
                    values: { date: B(W, I) },
                  })),
            (_[9] = I),
            (_[10] = W),
            (_[11] = l))
          : (l = _[11]),
        _[12] !== I
          ? ((u = I.formatMessage({
              id: "settings.usage.billing.spend.history.periodLabel",
              defaultMessage: "Spend history time range",
            })),
            (_[12] = I),
            (_[13] = u))
          : (u = _[13]),
        _[14] !== K
          ? ((c = (e) => {
              ;(P(K), N(e))
            }),
            (_[14] = K),
            (_[15] = c))
          : (c = _[15]),
        _[16] !== U || _[17] !== u || _[18] !== c
          ? ((g = (0, a.jsx)(G.tS, { ariaLabel: u, days: U, onChange: c })),
            (_[16] = U),
            (_[17] = u),
            (_[18] = c),
            (_[19] = g))
          : (g = _[19]),
        _[20] !== I
          ? ((m = I.formatMessage({
              id: "settings.usage.billing.spend.history.breakdownLabel",
              defaultMessage: "Group spend history",
            })),
            (_[20] = I),
            (_[21] = m))
          : (m = _[21]),
        _[22] !== K
          ? ((h = (e) => {
              ;(P(K?.data.some(tP) ? void 0 : K), L(e))
            }),
            (_[22] = K),
            (_[23] = h))
          : (h = _[23]),
        _[24] !== T || _[25] !== h || _[26] !== m
          ? ((p = (0, a.jsx)(G.Sv, { ariaLabel: m, breakdown: T, scope: "workspace", onChange: h })),
            (_[24] = T),
            (_[25] = h),
            (_[26] = m),
            (_[27] = p))
          : (p = _[27]),
        _[28] !== p || _[29] !== g
          ? ((x = (0, a.jsxs)("div", { className: "flex flex-wrap items-center justify-end gap-2", children: [g, p] })),
            (_[28] = p),
            (_[29] = g),
            (_[30] = x))
          : (x = _[30]),
        _[31] !== x || _[32] !== l
          ? ((b = (0, a.jsx)(y.X.Header, { actionsAlignment: "end", title: i, subtitle: l, actions: x })),
            (_[31] = x),
            (_[32] = l),
            (_[33] = b))
          : (b = _[33]))
      let X = null != D && !H
      return (
        _[34] !== F
          ? ((v = () => {
              F()
            }),
            (_[34] = F),
            (_[35] = v))
          : (v = _[35]),
        _[36] !== O || _[37] !== R || _[38] !== $ || _[39] !== C || _[40] !== X || _[41] !== v
          ? ((k = { isError: O, isLoading: R, isUpdating: $, preserveEmptyLayout: X, reduceMotion: C, onRetry: v }),
            (_[36] = O),
            (_[37] = R),
            (_[38] = $),
            (_[39] = C),
            (_[40] = X),
            (_[41] = v),
            (_[42] = k))
          : (k = _[42]),
        _[43] !== T || _[44] !== K || _[45] !== k
          ? ((j = (0, a.jsx)(y.X.Content, {
              children: (0, a.jsx)(eT, {
                breakdown: T,
                data: K,
                hideTotal: !0,
                scope: "workspace",
                status: k,
                unit: "usd",
              }),
            })),
            (_[43] = T),
            (_[44] = K),
            (_[45] = k),
            (_[46] = j))
          : (j = _[46]),
        _[47] !== b || _[48] !== j
          ? ((w = (0, a.jsxs)(y.X, { children: [b, j] })), (_[47] = b), (_[48] = j), (_[49] = w))
          : (w = _[49]),
        w
      )
    }
    function tP(e) {
      let { values: t } = e
      return Object.values(t).some(tE)
    }
    function tE(e) {
      return 0 !== e
    }
    function tO(e) {
      let { values: t } = e
      return Object.values(t).some(tR)
    }
    function tR(e) {
      return 0 !== e
    }
    function tF(e) {
      let t,
        s = (0, n.c)(8),
        {
          showUnifiedUsage: i,
          canViewCreditSettings: l,
          isUsdWorkspace: r,
          isPolling: o,
          reduceMotion: d,
          scope: u,
          workspaceTaskUsage: c,
        } = e,
        g = void 0 !== i && i,
        m = void 0 === l || l,
        h = void 0 !== r && r,
        p = void 0 === o || o,
        f = void 0 !== d && d,
        y = void 0 === u ? "workspace" : u,
        x = "workspace" === y || (void 0 !== c && c)
      return (
        s[0] !== m || s[1] !== p || s[2] !== h || s[3] !== f || s[4] !== y || s[5] !== g || s[6] !== x
          ? ((t = (0, a.jsx)(tH, {
              showUnifiedUsage: g,
              canViewCreditSettings: m,
              isUsdWorkspace: h,
              isPolling: p,
              reduceMotion: f,
              scope: y,
              workspaceTaskUsage: x,
            })),
            (s[0] = m),
            (s[1] = p),
            (s[2] = h),
            (s[3] = f),
            (s[4] = y),
            (s[5] = g),
            (s[6] = x),
            (s[7] = t))
          : (t = s[7]),
        t
      )
    }
    function tH(e) {
      let t,
        s,
        u,
        v,
        k,
        j,
        w,
        _,
        M,
        A,
        C,
        S,
        I,
        U,
        N,
        T,
        L,
        D,
        P,
        E,
        O,
        R,
        F,
        H,
        K,
        W,
        X,
        q,
        z,
        V,
        et,
        es,
        ea,
        ei,
        el,
        er,
        eo,
        ed,
        eu,
        ec,
        eg,
        em,
        eh,
        ep,
        ef,
        ey,
        ex,
        eb,
        ev,
        ek,
        ej,
        ew,
        e_ = (0, n.c)(380),
        {
          showUnifiedUsage: eM,
          canViewCreditSettings: eA,
          isActive: eC,
          isUsdWorkspace: eS,
          isPolling: eI,
          reduceMotion: eU,
          scope: eN,
          workspaceTaskUsage: eT,
        } = e,
        eL = void 0 === eC || eC,
        eD = void 0 !== eS && eS,
        eP = void 0 === eI || eI,
        eE = void 0 !== eU && eU,
        eO = (0, r.use)(Y.Wj)?.scope ?? null,
        eR = (0, o.A)(),
        { accountId: eH, userId: e$ } = (0, c.As)(),
        { data: eK } = (0, g.YL)(),
        eW = "workspace" === eN ? (eK?.id ?? null) : eH,
        eX = "consumer" === eN,
        eq = (0, b.Zj)("business" === eN && "1014047933"),
        ez = eX || eq,
        eB = (0, b.Zj)(!!ez && !eT && "1034085511"),
        [eG, eZ] = (0, r.useState)(7),
        [eV, eQ] = (0, r.useState)(0),
        [eY, eJ] = (0, r.useState)("surface"),
        [e2, e3] = (0, r.useState)(null),
        [e4, e5] = (0, r.useState)(null),
        [e6, e8] = (0, r.useState)(7),
        [e7, e9] = (0, r.useState)(null),
        [te, tt] = (0, r.useState)("workspace" === eN ? 30 : 7),
        ts = eW ?? null,
        ta = e$ ?? null
      ;(e_[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { hasManualSelection: !1, hasResolved: !1 }),
          (s = { hasManualSelection: !1, hasResolved: !1 }),
          (u = { hasManualSelection: !1, hasResolved: !1 }),
          (e_[0] = t),
          (e_[1] = s),
          (e_[2] = u))
        : ((t = e_[0]), (s = e_[1]), (u = e_[2])),
        e_[3] !== eN || e_[4] !== ts || e_[5] !== ta
          ? ((v = { accountId: ts, userId: ta, scope: eN, usage: t, tokens: s, tools: u }),
            (e_[3] = eN),
            (e_[4] = ts),
            (e_[5] = ta),
            (e_[6] = v))
          : (v = e_[6]))
      let [tn, ti] = (0, r.useState)(v),
        tl = "workspace" === eN || (tn.accountId === (eW ?? null) && tn.userId === (e$ ?? null) && tn.scope === eN)
      tl ||
        (ti({
          accountId: eW ?? null,
          userId: e$ ?? null,
          scope: eN,
          usage: { hasManualSelection: !1, hasResolved: !1 },
          tokens: { hasManualSelection: !1, hasResolved: !1 },
          tools: { hasManualSelection: !1, hasResolved: !1 },
        }),
        eZ(7),
        eQ(0),
        eJ("surface"),
        e3(null),
        e5(null),
        e8(7),
        e9(null),
        tt(7))
      let [tr, to] = (0, r.useState)(!1),
        [td, tu] = (0, r.useState)(!1),
        [tc, tg] = (0, r.useState)(!1),
        [th, tp] = (0, r.useState)(!1),
        [tf, ty] = (0, r.useState)(null),
        [tx, tb] = (0, r.useState)(null),
        [tv, tk] = (0, r.useState)(null),
        [tj, tw] = (0, r.useState)(null),
        [t_, tA] = (0, r.useState)(null),
        tC = eX || ("business" === eN && "reasoning" === e4) ? "product" : (e4 ?? "product"),
        tS = ez ? eV : 0,
        tI = eL && "workspace" !== eN && tl
      e_[7] !== eP || e_[8] !== tS || e_[9] !== tI || e_[10] !== eG
        ? ((k = { isPolling: eP, days: eG, offsetDays: tS, enabled: tI }),
          (e_[7] = eP),
          (e_[8] = tS),
          (e_[9] = tI),
          (e_[10] = eG),
          (e_[11] = k))
        : (k = e_[11])
      let tU = (0, f.ZY)(k),
        { data: tN, isLoading: tT, isError: tL, refetch: tP } = tU,
        tE = tT && !tL && null == tN && tf?.accountId === (eW ?? null) && tf.userId === (e$ ?? null),
        tO = tE ? tf.data : tN,
        tR =
          "workspace" !== eN &&
          tf?.accountId === (eW ?? null) &&
          tf.userId === (e$ ?? null) &&
          Math.max(tf.data.total, tf.data.byModel.total) > 0 &&
          null != tO &&
          0 === Math.max(tO.total, tO.byModel.total)
      e_[12] !== tO?.byModel.series || e_[13] !== tO?.byModel.series.some
        ? ((j = tO?.byModel.series.some(tV) ?? !1),
          (e_[12] = tO?.byModel.series),
          (e_[13] = tO?.byModel.series.some),
          (e_[14] = j))
        : (j = e_[14])
      let tF = j,
        tH = tO?.series.some(tZ) ?? !1,
        t1 = tF && ("model" === eY || !tH) ? "model" : "surface",
        t0 = eL && !eD && (!eX || eA)
      e_[15] !== eP || e_[16] !== eN || e_[17] !== tC || e_[18] !== t0 || e_[19] !== eG
        ? ((w = { isPolling: eP, breakdown: tC, days: eG, enabled: t0, scope: eN }),
          (e_[15] = eP),
          (e_[16] = eN),
          (e_[17] = tC),
          (e_[18] = t0),
          (e_[19] = eG),
          (e_[20] = w))
        : (w = e_[20])
      let t2 = (0, f.X6)(w),
        { data: t3, isLoading: t4, isError: t5, refetch: t6 } = t2,
        t8 = "business" === eN && null == e4 && ("model" === t1 || t3?.total === 0) && (t3?.paidModelTotal ?? 0) > 0,
        t7 = eL && t8
      e_[21] !== eP || e_[22] !== eN || e_[23] !== t7 || e_[24] !== eG
        ? ((_ = { isPolling: eP, breakdown: "model", days: eG, enabled: t7, scope: eN }),
          (e_[21] = eP),
          (e_[22] = eN),
          (e_[23] = t7),
          (e_[24] = eG),
          (e_[25] = _))
        : (_ = e_[25])
      let t9 = (0, f.X6)(_),
        { data: se, isLoading: st, isError: ss, refetch: sa } = t9,
        sn = t8 ? se : t3,
        si = t8 ? st : t4,
        sl = t8 ? ss : t5,
        sr = t8 ? sa : t6,
        so = t8 ? "model" : tC,
        sd = {
          current: [
            { total: null == tN ? void 0 : Math.max(tN.total, tN.byModel.total), isLoading: tT, isError: tL },
            ...(!eX || eA
              ? [
                  {
                    total: null == sn ? void 0 : Math.max(sn.total, sn.paidModelTotal ?? 0),
                    isLoading: si,
                    isError: sl,
                  },
                ]
              : []),
          ],
          days: eG,
          enabled: eL && "workspace" !== eN && tl,
          ...tn.usage,
        },
        { shouldProbe: su } = Z(sd),
        { data: sc, isLoading: sg, isError: sm } = (0, f.ZY)({ isPolling: eP, days: 30, enabled: su }),
        {
          data: sh,
          isLoading: sp,
          isError: sf,
        } = (0, f.X6)({ isPolling: eP, breakdown: tC, days: 30, enabled: su && (!eX || eA), scope: eN }),
        sy = Z({
          ...sd,
          fallback: [
            { total: null == sc ? void 0 : Math.max(sc.total, sc.byModel.total), isLoading: sg, isError: sm },
            ...(!eX || eA
              ? [
                  {
                    total: null == sh ? void 0 : Math.max(sh.total, sh.paidModelTotal ?? 0),
                    isLoading: sp,
                    isError: sf,
                  },
                ]
              : []),
          ],
        }),
        sx = (su && !sy.shouldResolve) || (si && !tL)
      sy.shouldResolve && (ti(tG), sy.shouldSelectThirtyDays && eZ(30))
      let sb = si && !sl && null == sn && tx?.accountId === (eW ?? null) && tx.userId === (e$ ?? null),
        sv = sb ? tx.data : sn,
        sk =
          sv?.dataFreshnessTimestamp ??
          (si && !sl && null == sn && tv?.accountId === (eW ?? null) && tv.userId === (e$ ?? null) ? tv.data : null)
      e_[26] !== eW || e_[27] !== sk || e_[28] !== e$
        ? ((M = () => {
            tk(null != sk ? { accountId: eW ?? null, data: sk, userId: e$ ?? null } : null)
          }),
          (e_[26] = eW),
          (e_[27] = sk),
          (e_[28] = e$),
          (e_[29] = M))
        : (M = e_[29])
      let sj = M
      e_[30] !== eW ||
      e_[31] !== eO ||
      e_[32] !== sv ||
      e_[33] !== tO ||
      e_[34] !== sj ||
      e_[35] !== eG ||
      e_[36] !== e$
        ? ((A = (e, t) => {
            e !== eG && (0, Y.$c)(eO, "usage_history", e)
            let s = null == tO ? void 0 : Math.max(tO.total, tO.byModel.total)
            ;(to(0 === s),
              ty(null != tO && (s ?? 0) > 0 ? { accountId: eW ?? null, data: tO, userId: e$ ?? null } : null),
              e !== eG &&
                (sj(),
                tu(sv?.total === 0),
                tb(null != sv && sv.total > 0 ? { accountId: eW ?? null, data: sv, userId: e$ ?? null } : null)),
              ti(tB),
              eZ(e),
              eQ(void 0 === t ? 0 : t))
          }),
          (e_[30] = eW),
          (e_[31] = eO),
          (e_[32] = sv),
          (e_[33] = tO),
          (e_[34] = sj),
          (e_[35] = eG),
          (e_[36] = e$),
          (e_[37] = A))
        : (A = e_[37])
      let sw = A,
        s_ = !eE && null != sn && tx?.accountId === (eW ?? null) && tx.userId === (e$ ?? null) && tx.data !== sn
      ;(e_[38] !== sr
        ? ((C = () => {
            sr()
          }),
          (e_[38] = sr),
          (e_[39] = C))
        : (C = e_[39]),
        e_[40] !== sl ||
        e_[41] !== si ||
        e_[42] !== sb ||
        e_[43] !== td ||
        e_[44] !== eE ||
        e_[45] !== s_ ||
        e_[46] !== C
          ? ((S = {
              animateDataChanges: s_,
              isError: sl,
              isLoading: si,
              isUpdating: sb,
              preserveEmptyLayout: td,
              reduceMotion: eE,
              onRetry: C,
            }),
            (e_[40] = sl),
            (e_[41] = si),
            (e_[42] = sb),
            (e_[43] = td),
            (e_[44] = eE),
            (e_[45] = s_),
            (e_[46] = C),
            (e_[47] = S))
          : (S = e_[47]))
      let sM = S,
        sA = eL && !eX
      e_[48] !== eP || e_[49] !== eN || e_[50] !== sA || e_[51] !== e6
        ? ((I = { isPolling: eP, days: e6, enabled: sA, scope: eN }),
          (e_[48] = eP),
          (e_[49] = eN),
          (e_[50] = sA),
          (e_[51] = e6),
          (e_[52] = I))
        : (I = e_[52])
      let sC = (0, f.BV)(I),
        { data: sS, isLoading: sI, isError: sU, refetch: sN } = sC,
        sT = {
          current: [{ total: sS?.total, isLoading: sI, isError: sU }],
          days: e6,
          enabled: eL && "business" === eN && tl,
          ...tn.tokens,
        },
        { shouldProbe: sL } = Z(sT),
        { data: sD, isLoading: sP, isError: sE } = (0, f.BV)({ isPolling: eP, days: 30, enabled: sL, scope: eN }),
        sO = Z({ ...sT, fallback: [{ total: sD?.total, isLoading: sP, isError: sE }] }),
        sR = sL && !sO.shouldResolve
      sO.shouldResolve && (ti(tz), sO.shouldSelectThirtyDays && e8(30))
      let sF = sI && !sU && null == sS && tj?.accountId === (eW ?? null) && tj.userId === (e$ ?? null),
        sH = sF ? tj.data : sS
      e_[53] !== sH || e_[54] !== eN
        ? ((U = "business" === eN ? sH?.models.filter(tq) : sH?.models), (e_[53] = sH), (e_[54] = eN), (e_[55] = U))
        : (U = e_[55])
      let s$ = U
      e_[56] !== e7 || e_[57] !== s$
        ? ((N =
            null != e7 &&
            s$?.some((e) => {
              let { key: t } = e
              return t === e7
            })
              ? e7
              : null),
          (e_[56] = e7),
          (e_[57] = s$),
          (e_[58] = N))
        : (N = e_[58])
      let sK = N,
        sW = !eE && null != sS && tj?.accountId === (eW ?? null) && tj.userId === (e$ ?? null) && tj.data !== sS,
        sX = sI || sR
      ;(e_[59] !== sN
        ? ((T = () => {
            sN()
          }),
          (e_[59] = sN),
          (e_[60] = T))
        : (T = e_[60]),
        e_[61] !== sU ||
        e_[62] !== sF ||
        e_[63] !== tc ||
        e_[64] !== eE ||
        e_[65] !== sW ||
        e_[66] !== sX ||
        e_[67] !== T
          ? ((L = {
              animateDataChanges: sW,
              isError: sU,
              isLoading: sX,
              isUpdating: sF,
              preserveEmptyLayout: tc,
              reduceMotion: eE,
              onRetry: T,
            }),
            (e_[61] = sU),
            (e_[62] = sF),
            (e_[63] = tc),
            (e_[64] = eE),
            (e_[65] = sW),
            (e_[66] = sX),
            (e_[67] = T),
            (e_[68] = L))
          : (L = e_[68]))
      let sq = L
      e_[69] !== te || e_[70] !== eL || e_[71] !== eP || e_[72] !== eN
        ? ((D = { isPolling: eP, days: te, enabled: eL, scope: eN }),
          (e_[69] = te),
          (e_[70] = eL),
          (e_[71] = eP),
          (e_[72] = eN),
          (e_[73] = D))
        : (D = e_[73])
      let sz = (0, f.eU)(D),
        { data: sB, isLoading: sG, isError: sZ, refetch: sV } = sz
      e_[74] !== te || e_[75] !== eL || e_[76] !== eP || e_[77] !== eN
        ? ((P = { isPolling: eP, days: te, enabled: eL, scope: eN }),
          (e_[74] = te),
          (e_[75] = eL),
          (e_[76] = eP),
          (e_[77] = eN),
          (e_[78] = P))
        : (P = e_[78])
      let sQ = (0, f.Iu)(P),
        { data: sY, isLoading: sJ, isError: s1, refetch: s0 } = sQ,
        s2 = {
          current: [
            { total: sB?.total, isLoading: sG, isError: sZ },
            { total: sY?.total, isLoading: sJ, isError: s1 },
          ],
          days: te,
          enabled: eL && "workspace" !== eN && tl,
          ...tn.tools,
        },
        { shouldProbe: s3 } = Z(s2),
        { data: s4, isLoading: s5, isError: s6 } = (0, f.eU)({ isPolling: eP, days: 30, enabled: s3, scope: eN }),
        { data: s8, isLoading: s7, isError: s9 } = (0, f.Iu)({ isPolling: eP, days: 30, enabled: s3, scope: eN }),
        ae = Z({
          ...s2,
          fallback: [
            { total: s4?.total, isLoading: s5, isError: s6 },
            { total: s8?.total, isLoading: s7, isError: s9 },
          ],
        })
      ae.shouldResolve && (ti(tX), ae.shouldSelectThirtyDays && tt(30))
      let at = t_?.accountId === (eW ?? null) && t_.userId === (e$ ?? null)
      e_[79] !== at || e_[80] !== eE
        ? ((E = (e, t) => !eE && null != e && at && null != t && t !== e), (e_[79] = at), (e_[80] = eE), (e_[81] = E))
        : (E = e_[81])
      let as = E,
        aa = sG && !sZ && null == sB && at && null != t_.data.plugins,
        an = sJ && !s1 && null == sY && at && null != t_.data.skills,
        ai = aa ? t_.data.plugins : sB,
        al = an ? t_.data.skills : sY,
        ar = "workspace" !== eN && at && (t_.data.plugins?.total ?? 0) > 0 && ai?.total === 0,
        ao = "workspace" !== eN && at && (t_.data.skills?.total ?? 0) > 0 && al?.total === 0
      if (
        e_[82] !== eW ||
        e_[83] !== eO ||
        e_[84] !== eH ||
        e_[85] !== eA ||
        e_[86] !== ez ||
        e_[87] !== sk ||
        e_[88] !== sM ||
        e_[89] !== so ||
        e_[90] !== sv ||
        e_[91] !== tO ||
        e_[92] !== ai?.dataFreshnessTimestamp ||
        e_[93] !== ai?.total ||
        e_[94] !== al?.dataFreshnessTimestamp ||
        e_[95] !== al?.total ||
        e_[96] !== sH ||
        e_[97] !== tl ||
        e_[98] !== tF ||
        e_[99] !== eR ||
        e_[100] !== eL ||
        e_[101] !== eX ||
        e_[102] !== sl ||
        e_[103] !== tL ||
        e_[104] !== tT ||
        e_[105] !== tE ||
        e_[106] !== sZ ||
        e_[107] !== sG ||
        e_[108] !== eP ||
        e_[109] !== s1 ||
        e_[110] !== sJ ||
        e_[111] !== sx ||
        e_[112] !== eD ||
        e_[113] !== t9 ||
        e_[114] !== tU ||
        e_[115] !== tN ||
        e_[116] !== sB ||
        e_[117] !== sz ||
        e_[118] !== th ||
        e_[119] !== tr ||
        e_[120] !== tR ||
        e_[121] !== e2 ||
        e_[122] !== tf ||
        e_[123] !== tj ||
        e_[124] !== eE ||
        e_[125] !== tP ||
        e_[126] !== sj ||
        e_[127] !== eN ||
        e_[128] !== t2 ||
        e_[129] !== t1 ||
        e_[130] !== sK ||
        e_[131] !== s3 ||
        e_[132] !== eM ||
        e_[133] !== sY ||
        e_[134] !== sQ ||
        e_[135] !== eB ||
        e_[136] !== e6 ||
        e_[137] !== sC ||
        e_[138] !== sq ||
        e_[139] !== s$ ||
        e_[140] !== ae.shouldResolve ||
        e_[141] !== sw ||
        e_[142] !== eG ||
        e_[143] !== eV ||
        e_[144] !== t8 ||
        e_[145] !== e$ ||
        e_[146] !== eT
      ) {
        var ad, au
        let e,
          t,
          s,
          n,
          l =
            ((ad = ai?.dataFreshnessTimestamp),
            (au = al?.dataFreshnessTimestamp),
            null == ad || null == au ? null : Date.parse(ad) <= Date.parse(au) ? ad : au)
        ;((F = null != sB && null != sY && 0 === sB.total && 0 === sY.total && !sG && !sJ && !sZ && !s1),
          (H = th && (sG || sJ) && (sB?.total ?? 0) === 0 && (sY?.total ?? 0) === 0 && !sZ && !s1),
          (K =
            "workspace" !== eN &&
            ((sG && null == sB) || (sJ && null == sY) || (s3 && !ae.shouldResolve)) &&
            (ai?.total ?? 0) === 0 &&
            (al?.total ?? 0) === 0 &&
            !sZ &&
            !s1),
          e_[169] !== ez || e_[170] !== tO || e_[171] !== eV
            ? ((e = ez && (eV > 0 || null == tO || tO.attribution.every(tW))),
              (e_[169] = ez),
              (e_[170] = tO),
              (e_[171] = eV),
              (e_[172] = e))
            : (e = e_[172]))
        let r = e
        e_[173] !== eW || e_[174] !== eL || e_[175] !== eP || e_[176] !== eD || e_[177] !== e$ || e_[178] !== eT
          ? ((t =
              eT && eL && null != eW && null != e$
                ? (0, a.jsx)(
                    tJ,
                    { children: (0, a.jsx)($, { accountId: eW, isUsdWorkspace: eD, isPolling: eP, userId: e$ }) },
                    `workspace-top-chats:${eW}:${e$}`,
                  )
                : null),
            (e_[173] = eW),
            (e_[174] = eL),
            (e_[175] = eP),
            (e_[176] = eD),
            (e_[177] = e$),
            (e_[178] = eT),
            (e_[179] = t))
          : (t = e_[179])
        let o = t
        ;((V = "flex w-full flex-col gap-[22px]"),
          e_[180] !== tl || e_[181] !== eL || e_[182] !== tU || e_[183] !== eN
            ? ((s = "workspace" !== eN && eL && tl ? [tU] : []),
              (e_[180] = tl),
              (e_[181] = eL),
              (e_[182] = tU),
              (e_[183] = eN),
              (e_[184] = s))
            : (s = e_[184]),
          e_[185] !== eA ||
          e_[186] !== eL ||
          e_[187] !== eX ||
          e_[188] !== eD ||
          e_[189] !== t9 ||
          e_[190] !== t2 ||
          e_[191] !== t8
            ? ((n = eL && !eD && (!eX || eA) ? [t8 ? t9 : t2] : []),
              (e_[185] = eA),
              (e_[186] = eL),
              (e_[187] = eX),
              (e_[188] = eD),
              (e_[189] = t9),
              (e_[190] = t2),
              (e_[191] = t8),
              (e_[192] = n))
            : (n = e_[192]),
          e_[193] !== s || e_[194] !== n
            ? ((et = (0, a.jsx)(J.F, { chart: "usage_history", queries: [...s, ...n] })),
              (e_[193] = s),
              (e_[194] = n),
              (e_[195] = et))
            : (et = e_[195]),
          e_[196] !== eL || e_[197] !== eX || e_[198] !== sC
            ? ((es = !eX && eL ? (0, a.jsx)(J.F, { chart: "tokens", queries: [sC] }) : null),
              (e_[196] = eL),
              (e_[197] = eX),
              (e_[198] = sC),
              (e_[199] = es))
            : (es = e_[199]),
          e_[200] !== eL || e_[201] !== sz || e_[202] !== sQ
            ? ((ea = eL ? (0, a.jsx)(J.F, { chart: "tool_activity", queries: [sz, sQ] }) : null),
              (e_[200] = eL),
              (e_[201] = sz),
              (e_[202] = sQ),
              (e_[203] = ea))
            : (ea = e_[203]),
          e_[204] !== eW ||
          e_[205] !== ez ||
          e_[206] !== tO?.attribution ||
          e_[207] !== tL ||
          e_[208] !== tT ||
          e_[209] !== tE ||
          e_[210] !== sx ||
          e_[211] !== tN ||
          e_[212] !== tr ||
          e_[213] !== tf ||
          e_[214] !== eE ||
          e_[215] !== tP ||
          e_[216] !== r ||
          e_[217] !== eM ||
          e_[218] !== sw ||
          e_[219] !== eG ||
          e_[220] !== eV ||
          e_[221] !== e$
            ? ((ei = r
                ? (0, a.jsx)(
                    e1,
                    {
                      showUnifiedUsage: eM,
                      buckets: tO?.attribution,
                      days: eG,
                      onDaysChange: sw,
                      pagination: ez ? { offsetDays: eV, onOffsetDaysChange: (e) => sw(eG, e) } : void 0,
                      status: {
                        animateDataChanges:
                          null != tN && tf?.accountId === (eW ?? null) && tf.userId === (e$ ?? null) && tf.data !== tN,
                        isError: tL,
                        isLoading: tT || sx,
                        isUpdating: tE,
                        preserveEmptyLayout: tr,
                        reduceMotion: eE,
                        onRetry: () => {
                          tP()
                        },
                      },
                    },
                    `consumer-usage-history:${eW}:${e$}`,
                  )
                : null),
              (e_[204] = eW),
              (e_[205] = ez),
              (e_[206] = tO?.attribution),
              (e_[207] = tL),
              (e_[208] = tT),
              (e_[209] = tE),
              (e_[210] = sx),
              (e_[211] = tN),
              (e_[212] = tr),
              (e_[213] = tf),
              (e_[214] = eE),
              (e_[215] = tP),
              (e_[216] = r),
              (e_[217] = eM),
              (e_[218] = sw),
              (e_[219] = eG),
              (e_[220] = eV),
              (e_[221] = e$),
              (e_[222] = ei))
            : (ei = e_[222]),
          e_[223] !== eW ||
          e_[224] !== eO ||
          e_[225] !== ez ||
          e_[226] !== tO ||
          e_[227] !== tF ||
          e_[228] !== eR ||
          e_[229] !== tL ||
          e_[230] !== tT ||
          e_[231] !== tE ||
          e_[232] !== eP ||
          e_[233] !== sx ||
          e_[234] !== tN ||
          e_[235] !== tr ||
          e_[236] !== tR ||
          e_[237] !== e2 ||
          e_[238] !== tf ||
          e_[239] !== eE ||
          e_[240] !== tP ||
          e_[241] !== eN ||
          e_[242] !== t1 ||
          e_[243] !== r ||
          e_[244] !== eM ||
          e_[245] !== sw ||
          e_[246] !== eG ||
          e_[247] !== e$
            ? ((el =
                r || "workspace" === eN
                  ? null
                  : (0, a.jsxs)(y.X, {
                      children: [
                        (0, a.jsx)(y.X.Header, {
                          actionsAlignment: "end",
                          size: "default",
                          title: (0, a.jsx)(d.A, {
                            id: "settings.usage.billing.personalUsage.history.title",
                            defaultMessage: "Usage history",
                          }),
                          subtitle: eM
                            ? (0, a.jsx)(e0, {})
                            : (0, a.jsx)(d.A, {
                                id: "settings.usage.billing.personalUsage.history.subtitle",
                                defaultMessage:
                                  "See how plan usage and credits were consumed in Work, Codex, and other agentic tasks. Conversations in Chat are not included.",
                              }),
                          actions: (0, a.jsx)(G.tS, {
                            ariaLabel: eR.formatMessage({
                              id: "settings.usage.billing.personalUsage.history.periodLabel",
                              defaultMessage: "Personal usage history time range",
                            }),
                            days: eG,
                            onChange: sw,
                          }),
                        }),
                        (0, a.jsx)(y.X.Content, {
                          children: (0, a.jsx)(tQ, {
                            isPolling: eP,
                            consumerAnalytics: ez,
                            actions: tF
                              ? (0, a.jsx)(p.T, {
                                  ariaLabel: eR.formatMessage({
                                    id: "settings.usage.billing.personalUsage.breakdownLabel",
                                    defaultMessage: "Group personal usage by product or model",
                                  }),
                                  options: [
                                    { id: "surface", label: (0, a.jsx)(G.xn, { breakdown: "product" }) },
                                    { id: "model", label: (0, a.jsx)(G.d1, { breakdown: "model" }) },
                                  ],
                                  selectedId: t1,
                                  variant: "inset",
                                  onSelect: (e) => {
                                    ;(e !== t1 && (0, Y.to)(eO, "usage_history", "surface" === e ? "product" : e),
                                      e3(t1),
                                      eJ(e))
                                  },
                                })
                              : void 0,
                            breakdown: "model" === t1 ? "model" : "product",
                            data: "model" === t1 ? tO?.byModel : tO,
                            isPersonalUsage: !0,
                            preservePopulatedCardLayout: tR,
                            scope: eN,
                            status: {
                              animateDataChanges:
                                !eE &&
                                ((null != e2 && e2 !== t1) ||
                                  (null != tN &&
                                    tf?.accountId === (eW ?? null) &&
                                    tf.userId === (e$ ?? null) &&
                                    tf.data !== tN)),
                              isError: tL,
                              isLoading: tT || sx,
                              isUpdating: tE,
                              preserveEmptyLayout: tr,
                              reduceMotion: eE,
                              onAnimationEnd: () => e3(null),
                              onRetry: () => {
                                tP()
                              },
                            },
                          }),
                        }),
                        (0, a.jsxs)(y.X.Footer, {
                          className: "flex items-center gap-2",
                          children: [
                            (0, a.jsx)(m.I, { className: "shrink-0", asset: i.c }),
                            (0, a.jsx)(d.A, {
                              id: "settings.usage.daily.subtitle",
                              defaultMessage: "Usage data is approximate and may be delayed by up to 6 hours",
                            }),
                          ],
                        }),
                      ],
                    })),
              (e_[223] = eW),
              (e_[224] = eO),
              (e_[225] = ez),
              (e_[226] = tO),
              (e_[227] = tF),
              (e_[228] = eR),
              (e_[229] = tL),
              (e_[230] = tT),
              (e_[231] = tE),
              (e_[232] = eP),
              (e_[233] = sx),
              (e_[234] = tN),
              (e_[235] = tr),
              (e_[236] = tR),
              (e_[237] = e2),
              (e_[238] = tf),
              (e_[239] = eE),
              (e_[240] = tP),
              (e_[241] = eN),
              (e_[242] = t1),
              (e_[243] = r),
              (e_[244] = eM),
              (e_[245] = sw),
              (e_[246] = eG),
              (e_[247] = e$),
              (e_[248] = el))
            : (el = e_[248]),
          e_[249] !== eW ||
          e_[250] !== ez ||
          e_[251] !== eL ||
          e_[252] !== eP ||
          e_[253] !== eB ||
          e_[254] !== e$ ||
          e_[255] !== eT
            ? ((er =
                ez && !eT && eB && eL && null != eW && null != e$
                  ? (0, a.jsx)(
                      tJ,
                      { children: (0, a.jsx)(tM, { isPolling: eP, accountId: eW, userId: e$ }) },
                      `consumer-top-chats:${eW}:${e$}`,
                    )
                  : null),
              (e_[249] = eW),
              (e_[250] = ez),
              (e_[251] = eL),
              (e_[252] = eP),
              (e_[253] = eB),
              (e_[254] = e$),
              (e_[255] = eT),
              (e_[256] = er))
            : (er = e_[256]),
          (eo = "consumer" === eN ? o : null),
          e_[257] !== ez || e_[258] !== eL || e_[259] !== eP || e_[260] !== eE || e_[261] !== eN
            ? ((ed = ez
                ? (0, a.jsx)(tm, {
                    isPolling: eP,
                    isActive: eL,
                    reduceMotion: eE,
                    scope: "business" === eN ? "business" : "consumer",
                  })
                : null),
              (e_[257] = ez),
              (e_[258] = eL),
              (e_[259] = eP),
              (e_[260] = eE),
              (e_[261] = eN),
              (e_[262] = ed))
            : (ed = e_[262]),
          e_[263] !== eH || e_[264] !== eL || e_[265] !== eP || e_[266] !== eD || e_[267] !== eE || e_[268] !== e$
            ? ((eu = eD
                ? (0, a.jsx)(
                    tD,
                    { isPolling: eP, enabled: eL, reduceMotion: eE },
                    `enterprise-spend-history:${eH}:${e$}`,
                  )
                : null),
              (e_[263] = eH),
              (e_[264] = eL),
              (e_[265] = eP),
              (e_[266] = eD),
              (e_[267] = eE),
              (e_[268] = e$),
              (e_[269] = eu))
            : (eu = e_[269]),
          e_[270] !== eW ||
          e_[271] !== eO ||
          e_[272] !== eA ||
          e_[273] !== ez ||
          e_[274] !== sk ||
          e_[275] !== sM ||
          e_[276] !== so ||
          e_[277] !== sv ||
          e_[278] !== eR ||
          e_[279] !== eX ||
          e_[280] !== sl ||
          e_[281] !== eP ||
          e_[282] !== eD ||
          e_[283] !== sj ||
          e_[284] !== eN ||
          e_[285] !== sw ||
          e_[286] !== eG ||
          e_[287] !== e$
            ? ((ec =
                !eD &&
                (!eX || eA) &&
                ("workspace" === eN || sl || (sv?.total ?? 0) > 0 || (sv?.paidModelTotal ?? 0) > 0)
                  ? (0, a.jsxs)(y.X, {
                      children: [
                        (0, a.jsx)(y.X.Header, {
                          className: "workspace" === eN ? void 0 : "max-sm:flex-col max-sm:items-stretch",
                          actionsAlignment: "end",
                          size: "default",
                          title: (0, a.jsx)(tY, { scope: eN, consumerAnalytics: ez }),
                          subtitle:
                            null == sk
                              ? (0, a.jsx)(d.A, {
                                  id: "settings.usage.billing.credits.history.subtitle",
                                  defaultMessage: "Track credits usage over time",
                                })
                              : (0, a.jsx)(d.A, {
                                  id: "settings.usage.billing.credits.history.subtitle.updated",
                                  defaultMessage: "Track credits usage over time. Updated {date}",
                                  values: { date: B(sk, eR) },
                                }),
                          actions: (0, a.jsxs)("div", {
                            className: "flex flex-wrap items-center justify-end gap-2",
                            children: [
                              (0, a.jsx)(G.tS, {
                                ariaLabel: ez
                                  ? eR.formatMessage({
                                      id: "settings.usage.billing.credits.consumer.history.periodLabel",
                                      defaultMessage: "Credits history time range",
                                    })
                                  : eR.formatMessage({
                                      id: "settings.usage.billing.credits.history.periodLabel",
                                      defaultMessage: "Credit usage history time range",
                                    }),
                                days: eG,
                                onChange: (e) => {
                                  "workspace" !== eN
                                    ? sw(e)
                                    : (e !== eG && (0, Y.$c)(eO, "usage_history", e),
                                      sj(),
                                      tu(sv?.total === 0),
                                      tb(
                                        null != sv && sv.total > 0
                                          ? { accountId: eW ?? null, data: sv, userId: e$ ?? null }
                                          : null,
                                      ),
                                      eZ(e))
                                },
                              }),
                              (0, a.jsx)(G.Sv, {
                                breakdown: so,
                                scope: eN,
                                onChange: (e) => {
                                  ;(e !== so && ("model" === e || "product" === e) && (0, Y.to)(eO, "usage_history", e),
                                    sj(),
                                    tu(sv?.total === 0),
                                    tb(null),
                                    e5(e))
                                },
                              }),
                            ],
                          }),
                        }),
                        (0, a.jsx)(y.X.Content, {
                          children: (0, a.jsx)(tQ, {
                            isPolling: eP,
                            consumerAnalytics: ez,
                            breakdown: so,
                            data: sv,
                            scope: eN,
                            status: sM,
                          }),
                        }),
                      ],
                    })
                  : null),
              (e_[270] = eW),
              (e_[271] = eO),
              (e_[272] = eA),
              (e_[273] = ez),
              (e_[274] = sk),
              (e_[275] = sM),
              (e_[276] = so),
              (e_[277] = sv),
              (e_[278] = eR),
              (e_[279] = eX),
              (e_[280] = sl),
              (e_[281] = eP),
              (e_[282] = eD),
              (e_[283] = sj),
              (e_[284] = eN),
              (e_[285] = sw),
              (e_[286] = eG),
              (e_[287] = e$),
              (e_[288] = ec))
            : (ec = e_[288]),
          e_[289] !== eW ||
          e_[290] !== eO ||
          e_[291] !== sH ||
          e_[292] !== eR ||
          e_[293] !== eX ||
          e_[294] !== tj ||
          e_[295] !== eN ||
          e_[296] !== sK ||
          e_[297] !== e6 ||
          e_[298] !== sq ||
          e_[299] !== s$ ||
          e_[300] !== e$
            ? ((eg = eX
                ? null
                : (0, a.jsxs)(y.X, {
                    children: [
                      (0, a.jsx)(y.X.Header, {
                        className: "workspace" === eN ? void 0 : "max-sm:flex-col max-sm:items-stretch",
                        actionsAlignment: "end",
                        size: "default",
                        title:
                          "workspace" === eN
                            ? (0, a.jsx)(d.A, {
                                id: "settings.usage.billing.tokens.history.title",
                                defaultMessage: "Token usage history",
                              })
                            : (0, a.jsx)(d.A, {
                                id: "settings.usage.billing.tokens.business.history.title",
                                defaultMessage: "Tokens by model",
                              }),
                        subtitle:
                          sH?.dataFreshnessTimestamp == null
                            ? (0, a.jsx)(d.A, {
                                id: "settings.usage.billing.tokens.history.subtitle",
                                defaultMessage: "Track token usage over time",
                              })
                            : (0, a.jsx)(d.A, {
                                id: "settings.usage.billing.tokens.history.subtitle.updated",
                                defaultMessage: "Track token usage over time. Updated {date}",
                                values: { date: B(sH.dataFreshnessTimestamp, eR) },
                              }),
                        actions: (0, a.jsxs)("div", {
                          className: "flex flex-wrap items-center justify-end gap-2",
                          children: [
                            (0, a.jsx)(G.tS, {
                              ariaLabel: eR.formatMessage({
                                id: "settings.usage.billing.tokens.history.periodLabel",
                                defaultMessage: "Token usage history time range",
                              }),
                              days: e6,
                              onChange: (e) => {
                                ;(e !== e6 && (0, Y.$c)(eO, "tokens", e),
                                  tg(sH?.total === 0),
                                  tw((e) =>
                                    sH?.total
                                      ? { accountId: eW ?? null, data: sH, userId: e$ ?? null }
                                      : "business" === eN && e?.accountId === (eW ?? null) && e.userId === (e$ ?? null)
                                        ? e
                                        : null,
                                  ),
                                  ti(tK),
                                  e8(e))
                              },
                            }),
                            (0, a.jsx)(G.ap, {
                              models: s$ ?? [],
                              selectedModel: sK,
                              onChange: (e) => {
                                ;(e !== sK && (0, Y.zJ)(eO, "tokens", e), e9(e))
                              },
                            }),
                          ],
                        }),
                      }),
                      (0, a.jsx)(y.X.Content, {
                        children: (0, a.jsx)(eF, {
                          data: sH,
                          preservePopulatedCardLayout:
                            "business" === eN &&
                            tj?.accountId === (eW ?? null) &&
                            tj.userId === (e$ ?? null) &&
                            tj.data.total > 0 &&
                            sH?.total === 0,
                          selectedModel: sK,
                          scope: eN,
                          status: sq,
                        }),
                      }),
                    ],
                  })),
              (e_[289] = eW),
              (e_[290] = eO),
              (e_[291] = sH),
              (e_[292] = eR),
              (e_[293] = eX),
              (e_[294] = tj),
              (e_[295] = eN),
              (e_[296] = sK),
              (e_[297] = e6),
              (e_[298] = sq),
              (e_[299] = s$),
              (e_[300] = e$),
              (e_[301] = eg))
            : (eg = e_[301]),
          (em = "workspace" === eN ? o : null),
          (R = y.X),
          (O = y.X.Header),
          (W = "end"),
          (X = "default"),
          e_[302] === Symbol.for("react.memo_cache_sentinel")
            ? ((q = (0, a.jsx)(d.A, { id: "settings.usage.billing.activity.title", defaultMessage: "Tool activity" })),
              (e_[302] = q))
            : (q = e_[302]),
          (z =
            null == l
              ? (0, a.jsx)(d.A, {
                  id: "settings.usage.billing.activity.subtitle",
                  defaultMessage: "See which plugins and skills were used over time",
                })
              : (0, a.jsx)(d.A, {
                  id: "settings.usage.billing.activity.subtitle.updated",
                  defaultMessage: "See which plugins and skills were used over time. Updated {date}",
                  values: { date: B(l, eR) },
                })),
          (e_[82] = eW),
          (e_[83] = eO),
          (e_[84] = eH),
          (e_[85] = eA),
          (e_[86] = ez),
          (e_[87] = sk),
          (e_[88] = sM),
          (e_[89] = so),
          (e_[90] = sv),
          (e_[91] = tO),
          (e_[92] = ai?.dataFreshnessTimestamp),
          (e_[93] = ai?.total),
          (e_[94] = al?.dataFreshnessTimestamp),
          (e_[95] = al?.total),
          (e_[96] = sH),
          (e_[97] = tl),
          (e_[98] = tF),
          (e_[99] = eR),
          (e_[100] = eL),
          (e_[101] = eX),
          (e_[102] = sl),
          (e_[103] = tL),
          (e_[104] = tT),
          (e_[105] = tE),
          (e_[106] = sZ),
          (e_[107] = sG),
          (e_[108] = eP),
          (e_[109] = s1),
          (e_[110] = sJ),
          (e_[111] = sx),
          (e_[112] = eD),
          (e_[113] = t9),
          (e_[114] = tU),
          (e_[115] = tN),
          (e_[116] = sB),
          (e_[117] = sz),
          (e_[118] = th),
          (e_[119] = tr),
          (e_[120] = tR),
          (e_[121] = e2),
          (e_[122] = tf),
          (e_[123] = tj),
          (e_[124] = eE),
          (e_[125] = tP),
          (e_[126] = sj),
          (e_[127] = eN),
          (e_[128] = t2),
          (e_[129] = t1),
          (e_[130] = sK),
          (e_[131] = s3),
          (e_[132] = eM),
          (e_[133] = sY),
          (e_[134] = sQ),
          (e_[135] = eB),
          (e_[136] = e6),
          (e_[137] = sC),
          (e_[138] = sq),
          (e_[139] = s$),
          (e_[140] = ae.shouldResolve),
          (e_[141] = sw),
          (e_[142] = eG),
          (e_[143] = eV),
          (e_[144] = t8),
          (e_[145] = e$),
          (e_[146] = eT),
          (e_[147] = O),
          (e_[148] = R),
          (e_[149] = F),
          (e_[150] = H),
          (e_[151] = K),
          (e_[152] = W),
          (e_[153] = X),
          (e_[154] = q),
          (e_[155] = z),
          (e_[156] = V),
          (e_[157] = et),
          (e_[158] = es),
          (e_[159] = ea),
          (e_[160] = ei),
          (e_[161] = el),
          (e_[162] = er),
          (e_[163] = eo),
          (e_[164] = ed),
          (e_[165] = eu),
          (e_[166] = ec),
          (e_[167] = eg),
          (e_[168] = em))
      } else
        ((O = e_[147]),
          (R = e_[148]),
          (F = e_[149]),
          (H = e_[150]),
          (K = e_[151]),
          (W = e_[152]),
          (X = e_[153]),
          (q = e_[154]),
          (z = e_[155]),
          (V = e_[156]),
          (et = e_[157]),
          (es = e_[158]),
          (ea = e_[159]),
          (ei = e_[160]),
          (el = e_[161]),
          (er = e_[162]),
          (eo = e_[163]),
          (ed = e_[164]),
          (eu = e_[165]),
          (ec = e_[166]),
          (eg = e_[167]),
          (em = e_[168]))
      ;(e_[303] !== eR
        ? ((eh = eR.formatMessage({
            id: "settings.usage.billing.activity.periodLabel",
            defaultMessage: "Tool activity time range",
          })),
          (e_[303] = eR),
          (e_[304] = eh))
        : (eh = e_[304]),
        e_[305] !== eW ||
        e_[306] !== te ||
        e_[307] !== eO ||
        e_[308] !== ai ||
        e_[309] !== al ||
        e_[310] !== F ||
        e_[311] !== e$
          ? ((ep = (e) => {
              ;(e !== te && (0, Y.$c)(eO, "tool_activity", e),
                tp(F),
                tA(
                  (ai?.total ?? 0) > 0 || (al?.total ?? 0) > 0
                    ? { accountId: eW ?? null, data: { plugins: ai, skills: al }, userId: e$ ?? null }
                    : null,
                ),
                ti(t$),
                tt(e))
            }),
            (e_[305] = eW),
            (e_[306] = te),
            (e_[307] = eO),
            (e_[308] = ai),
            (e_[309] = al),
            (e_[310] = F),
            (e_[311] = e$),
            (e_[312] = ep))
          : (ep = e_[312]),
        e_[313] !== te || e_[314] !== eh || e_[315] !== ep
          ? ((ef = (0, a.jsx)(G.tS, { ariaLabel: eh, days: te, onChange: ep })),
            (e_[313] = te),
            (e_[314] = eh),
            (e_[315] = ep),
            (e_[316] = ef))
          : (ef = e_[316]),
        e_[317] !== O || e_[318] !== W || e_[319] !== X || e_[320] !== q || e_[321] !== z || e_[322] !== ef
          ? ((ey = (0, a.jsx)(O, { actionsAlignment: W, size: X, title: q, subtitle: z, actions: ef })),
            (e_[317] = O),
            (e_[318] = W),
            (e_[319] = X),
            (e_[320] = q),
            (e_[321] = z),
            (e_[322] = ef),
            (e_[323] = ey))
          : (ey = e_[323]))
      let ac =
          "workspace" === eN && "transition-[min-height] duration-relaxed ease-basic motion-reduce:transition-none",
        ag = "workspace" === eN && (F || H ? "min-h-16 justify-center" : "min-h-128")
      return (
        e_[324] !== ac || e_[325] !== ag
          ? ((ex = (0, l.A)("gap-3", ac, ag)), (e_[324] = ac), (e_[325] = ag), (e_[326] = ex))
          : (ex = e_[326]),
        e_[327] !== ez ||
        e_[328] !== ai ||
        e_[329] !== al ||
        e_[330] !== F ||
        e_[331] !== H ||
        e_[332] !== K ||
        e_[333] !== sZ ||
        e_[334] !== sG ||
        e_[335] !== aa ||
        e_[336] !== s1 ||
        e_[337] !== sJ ||
        e_[338] !== an ||
        e_[339] !== sB ||
        e_[340] !== th ||
        e_[341] !== ar ||
        e_[342] !== ao ||
        e_[343] !== t_ ||
        e_[344] !== eE ||
        e_[345] !== sV ||
        e_[346] !== s0 ||
        e_[347] !== eN ||
        e_[348] !== as ||
        e_[349] !== sY
          ? ((eb =
              (F && !ar && !ao) || H || K
                ? (0, a.jsx)(x.t, {
                    children: (0, a.jsx)(h.W, {
                      layout: "settings-row",
                      children:
                        H || K
                          ? (0, a.jsx)(en.L, { compact: !0, reduceMotion: eE })
                          : (0, a.jsx)(d.A, {
                              id: "settings.usage.billing.activity.empty",
                              defaultMessage: "No plugin calls or skills used during this period",
                            }),
                    }),
                  })
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      "workspace" === eN || (ai?.total ?? 0) > 0 || sZ || ar
                        ? (0, a.jsx)(Q.t, {
                            analyticsChart: "tool_activity",
                            consumerAnalytics: ez,
                            data: ai,
                            preservePopulatedCardLayout: ar,
                            scope: eN,
                            status: {
                              animateDataChanges: as(sB, t_?.data.plugins),
                              isError: sZ,
                              isLoading: sG,
                              isUpdating: aa,
                              preserveEmptyLayout: th,
                              reduceMotion: eE,
                              onRetry: () => {
                                sV()
                              },
                            },
                            title:
                              "workspace" === eN || ez
                                ? (0, a.jsx)(d.A, {
                                    id: "settings.usage.billing.activity.plugins",
                                    defaultMessage: "Plugins called",
                                  })
                                : (0, a.jsx)(d.A, {
                                    id: "settings.usage.billing.activity.personalPluginCalls",
                                    defaultMessage: "Plugin calls",
                                  }),
                            unit: "calls",
                          })
                        : null,
                      "workspace" === eN || (al?.total ?? 0) > 0 || s1 || ao
                        ? (0, a.jsx)(Q.t, {
                            analyticsChart: "tool_activity",
                            consumerAnalytics: ez,
                            data: al,
                            preservePopulatedCardLayout: ao,
                            scope: eN,
                            status: {
                              animateDataChanges: as(sY, t_?.data.skills),
                              isError: s1,
                              isLoading: sJ,
                              isUpdating: an,
                              preserveEmptyLayout: th,
                              reduceMotion: eE,
                              onRetry: () => {
                                s0()
                              },
                            },
                            title: (0, a.jsx)(d.A, {
                              id: "settings.usage.billing.activity.skills",
                              defaultMessage: "Skills used",
                            }),
                            unit: "uses",
                          })
                        : null,
                    ],
                  })),
            (e_[327] = ez),
            (e_[328] = ai),
            (e_[329] = al),
            (e_[330] = F),
            (e_[331] = H),
            (e_[332] = K),
            (e_[333] = sZ),
            (e_[334] = sG),
            (e_[335] = aa),
            (e_[336] = s1),
            (e_[337] = sJ),
            (e_[338] = an),
            (e_[339] = sB),
            (e_[340] = th),
            (e_[341] = ar),
            (e_[342] = ao),
            (e_[343] = t_),
            (e_[344] = eE),
            (e_[345] = sV),
            (e_[346] = s0),
            (e_[347] = eN),
            (e_[348] = as),
            (e_[349] = sY),
            (e_[350] = eb))
          : (eb = e_[350]),
        e_[351] !== ex || e_[352] !== eb
          ? ((ev = (0, a.jsx)(y.X.Content, { className: ex, children: eb })),
            (e_[351] = ex),
            (e_[352] = eb),
            (e_[353] = ev))
          : (ev = e_[353]),
        e_[354] !== R || e_[355] !== ey || e_[356] !== ev
          ? ((ek = (0, a.jsxs)(R, { children: [ey, ev] })),
            (e_[354] = R),
            (e_[355] = ey),
            (e_[356] = ev),
            (e_[357] = ek))
          : (ek = e_[357]),
        e_[358] !== ez || e_[359] !== eL || e_[360] !== eP || e_[361] !== eE || e_[362] !== eN
          ? ((ej =
              "consumer" === eN || "business" === eN
                ? (0, a.jsx)(ee, { isPolling: eP, consumerAnalytics: ez, isActive: eL, reduceMotion: eE, scope: eN })
                : null),
            (e_[358] = ez),
            (e_[359] = eL),
            (e_[360] = eP),
            (e_[361] = eE),
            (e_[362] = eN),
            (e_[363] = ej))
          : (ej = e_[363]),
        e_[364] !== V ||
        e_[365] !== et ||
        e_[366] !== es ||
        e_[367] !== ea ||
        e_[368] !== ei ||
        e_[369] !== el ||
        e_[370] !== er ||
        e_[371] !== eo ||
        e_[372] !== ed ||
        e_[373] !== eu ||
        e_[374] !== ec ||
        e_[375] !== eg ||
        e_[376] !== em ||
        e_[377] !== ek ||
        e_[378] !== ej
          ? ((ew = (0, a.jsxs)("div", {
              className: V,
              children: [et, es, ea, ei, el, er, eo, ed, eu, ec, eg, em, ek, ej],
            })),
            (e_[364] = V),
            (e_[365] = et),
            (e_[366] = es),
            (e_[367] = ea),
            (e_[368] = ei),
            (e_[369] = el),
            (e_[370] = er),
            (e_[371] = eo),
            (e_[372] = ed),
            (e_[373] = eu),
            (e_[374] = ec),
            (e_[375] = eg),
            (e_[376] = em),
            (e_[377] = ek),
            (e_[378] = ej),
            (e_[379] = ew))
          : (ew = e_[379]),
        ew
      )
    }
    function t$(e) {
      return { ...e, tools: { ...e.tools, hasManualSelection: !0 } }
    }
    function tK(e) {
      return { ...e, tokens: { ...e.tokens, hasManualSelection: !0 } }
    }
    function tW(e) {
      return null != e.attribution
    }
    function tX(e) {
      return { ...e, tools: { ...e.tools, hasResolved: !0 } }
    }
    function tq(e) {
      let { total: t } = e
      return t > 0
    }
    function tz(e) {
      return { ...e, tokens: { ...e.tokens, hasResolved: !0 } }
    }
    function tB(e) {
      return { ...e, usage: { ...e.usage, hasManualSelection: !0 } }
    }
    function tG(e) {
      return { ...e, usage: { ...e.usage, hasResolved: !0 } }
    }
    function tZ(e) {
      let { total: t } = e
      return t > 0
    }
    function tV(e) {
      let { total: t } = e
      return t > 0
    }
    function tQ(e) {
      let t,
        s,
        i = (0, n.c)(14),
        {
          isPolling: l,
          actions: r,
          breakdown: o,
          data: d,
          isPersonalUsage: u,
          preservePopulatedCardLayout: c,
          consumerAnalytics: g,
          scope: m,
          status: h,
        } = e,
        p = void 0 !== g && g,
        y = d?.total ?? 0,
        x = "workspace" === m && (d?.total ?? 0) > 0
      i[0] !== l || i[1] !== y || i[2] !== x
        ? ((t = { isPolling: l, credits: y, enabled: x }), (i[0] = l), (i[1] = y), (i[2] = x), (i[3] = t))
        : (t = i[3])
      let { data: b } = (0, f.Q4)(t),
        v = "workspace" !== m || b?.estimated_usage_usd_micros == null ? null : b.estimated_usage_usd_micros / 1e6
      return (
        i[4] !== r ||
        i[5] !== o ||
        i[6] !== p ||
        i[7] !== d ||
        i[8] !== u ||
        i[9] !== c ||
        i[10] !== m ||
        i[11] !== h ||
        i[12] !== v
          ? ((s = (0, a.jsx)(eT, {
              analyticsChart: "usage_history",
              consumerAnalytics: p,
              actions: r,
              breakdown: o,
              data: d,
              estimatedSpendUsd: v,
              isPersonalUsage: u,
              preservePopulatedCardLayout: c,
              scope: m,
              status: h,
            })),
            (i[4] = r),
            (i[5] = o),
            (i[6] = p),
            (i[7] = d),
            (i[8] = u),
            (i[9] = c),
            (i[10] = m),
            (i[11] = h),
            (i[12] = v),
            (i[13] = s))
          : (s = i[13]),
        s
      )
    }
    function tY(e) {
      let t,
        s = (0, n.c)(3),
        { consumerAnalytics: i, scope: l } = e
      if (void 0 !== i && i) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.usage.billing.credits.consumer.history.title",
                defaultMessage: "Credits history",
              })),
              (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      if ("workspace" === l) {
        let e
        return (
          s[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, {
                id: "settings.usage.billing.credits.workspace.history.title",
                defaultMessage: "Credits usage history",
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
            })),
            (s[2] = t))
          : (t = s[2]),
        t
      )
    }
    function tJ(e) {
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
  QXR8(e, t, s) {
    var a = s("SRbQ"),
      n = s("CpsU"),
      i = s.n(n),
      l = s("qmMi"),
      r = s("DBCl"),
      o = s("Dgwo"),
      d = s("tl5a"),
      u = s("OWtl"),
      c = s("rvFo"),
      g = s("rivV")
    let m = (0, l.vU)(u.u, (e, { scope: t }) => ({
        queryKey: ["task-usage-members", e.accountId, e.hostId, e.conversationId],
        queryFn: async () => {
          let s = { stack: [], error: void 0, hasError: !1 }
          try {
            let n = (0, a.mS)(
                s,
                (0, o.V)(t, e.hostId).discoverSubagentDescendantSnapshot(e.conversationId, {
                  reconcile: !1,
                  includeArchived: !0,
                }),
                !1,
              ),
              i = await n
            if (!i.isComplete) return null
            return {
              ids: Array.from(new Set([e.conversationId, ...i.descendantThreads.map(({ id: e }) => (0, r.JXB)(e))])),
              observed: e.knownDescendants,
            }
          } catch (e) {
            ;((s.error = e), (s.hasError = !0))
          } finally {
            ;(0, a.hk)(s)
          }
        },
        retry: !1,
        staleTime: (t) => (y(t.state.data, e) ? c.D.TEN_MINUTES : 0),
        gcTime: c.D.TEN_MINUTES,
      })),
      h = (0, l.vU)(u.u, ({ accountId: e, conversationIds: t, hostId: s }, { get: a, scope: n }) => {
        let l = t.map((t) => {
          let n = s ?? a(d.sb, t) ?? a(d.qX, t)
          return {
            accountId: e,
            conversationId: t,
            hostId: n,
            knownDescendants: a(d.ew, { hostId: n, threadId: t }) ?? [],
          }
        })
        return {
          queryKey: ["task-usage-groups", l],
          enabled: null != e && l.length > 0,
          queryFn: async ({ signal: e }) => {
            let t = []
            for (let s of i()(l, 2)) {
              e.throwIfAborted()
              let a = await Promise.all(
                s.map(async (e) => {
                  let t = await n.query.getOrFetch(m, e).catch(() => null)
                  return y(t, e) ? t.ids : null
                }),
              )
              t.push(...a)
            }
            return t
          },
          gcTime: 0,
          staleTime: c.D.ONE_MINUTE,
          refetchInterval: (e) => (e.state.data?.includes(null) ? c.D.ONE_MINUTE : c.D.TEN_MINUTES),
          retry: !1,
        }
      }),
      p = (0, l.i1)(u.u, (e, { get: t }) => {
        let { groups: s, usage: a } = f(t, e)
        return {
          data: a?.data,
          isLoading: !!(s?.isLoading || a?.isLoading),
          isError: !!(s?.isError || a?.isError),
          isSuccess: a?.isSuccess ?? !1,
        }
      })
    function f(
      e,
      { accountId: t, balanceUnit: s, conversationIds: a, hostId: n, includeSubagents: i, showReportedTaskSpend: l },
    ) {
      let r = a[0],
        o =
          l && 1 === a.length && null != r
            ? e(g.yy, { accountId: t, balanceUnit: s, conversationIds: a, includeCreditsAvailability: !0 })
            : null
      if (null != o && null != r) {
        let e = o.data?.get(r)
        if (!i || null == e || null != e.taskCreditStatus) return { groups: null, usage: o }
      }
      let d = i ? e(h, { accountId: t, conversationIds: a, hostId: n }) : null,
        u = null == d ? void 0 : (d.data?.filter((e) => null != e) ?? []),
        c = null == u ? a : Array.from(new Set(u.flat()))
      return null != o && 1 === c.length && c[0] === r
        ? { groups: d, usage: o }
        : {
            groups: d,
            usage:
              0 === c.length ? null : e(g.yy, { accountId: t, balanceUnit: s, conversationIds: c, taskThreadIds: u }),
          }
    }
    function y(e, t) {
      if (null == e) return !1
      let s = new Set([...e.ids, ...e.observed])
      return t.knownDescendants.every((e) => s.has(e))
    }
    s.d(
      t,
      {},
      {
        Q: async function (e, t, s) {
          let { groups: a, usage: n } = f(e.get, t)
          await Promise.all([a?.isError || a?.data?.includes(null) ? a.refetch() : void 0, n?.refetch(s)])
        },
        h: p,
      },
    )
  },
  pbco(e, t, s) {
    var a = s("ABep"),
      n = s("QosV"),
      i = s("slpy"),
      l = s("FQih"),
      r = s("zd8w"),
      o = s("Qgfj"),
      d = s("oyxz"),
      u = s("Wf1j"),
      c = s("kg1F"),
      g = s("O5Ra"),
      m = s("o6lh"),
      h = s("rivV")
    function p(e) {
      let t,
        s,
        l,
        o,
        c,
        p,
        x,
        v,
        k,
        j = (0, n.c)(37),
        { dimension: w, usage: _ } = e,
        M = (0, u.A)(),
        A = (0, r.useId)()
      if (j[0] !== w || j[1] !== M || j[2] !== A || j[3] !== _.balanceUnit || j[4] !== _.groups) {
        let e,
          n,
          r,
          u,
          v = (0, h.Xz)(_.groups, w, _.balanceUnit),
          k = v.reduce(f, 0),
          C = k > 0 ? v : [],
          S = (e) => Math.round((e / k) * 100)
        ;((l = "flex flex-col gap-1.5"),
          (o = A),
          (c = "group"),
          j[12] !== w
            ? ((e =
                "model" === w
                  ? (0, a.jsx)(d.A, { id: "usageCenter.thread.breakdown.model", defaultMessage: "Models" })
                  : "reasoning_effort" === w
                    ? (0, a.jsx)(d.A, { id: "usageCenter.thread.breakdown.reasoning", defaultMessage: "Reasoning" })
                    : (0, a.jsx)(d.A, { id: "usageCenter.thread.breakdown.speed", defaultMessage: "Speed" })),
              (j[12] = w),
              (j[13] = e))
            : (e = j[13]),
          j[14] !== A || j[15] !== e
            ? ((n = (0, a.jsx)("span", { id: A, className: "text-secondary", children: e })),
              (j[14] = A),
              (j[15] = e),
              (j[16] = n))
            : (n = j[16]))
        let I =
          0 === C.length
            ? (0, a.jsx)("span", {
                className: "text-tertiary",
                children: (0, a.jsx)(d.A, {
                  id: "usageCenter.thread.breakdown.noData",
                  defaultMessage: "Not available",
                }),
              })
            : null
        ;(j[17] !== I || j[18] !== n
          ? ((p = (0, a.jsxs)("div", { className: "flex items-center justify-between gap-2", children: [n, I] })),
            (j[17] = I),
            (j[18] = n),
            (j[19] = p))
          : (p = j[19]),
          j[20] !== w || j[21] !== S
            ? ((r = (e, t) =>
                (0, a.jsx)(
                  i.m,
                  {
                    openDelay: 0,
                    content: (0, a.jsx)(y, { dimension: w, entry: e, percentage: S(e.amountMicros) }),
                    children: (0, a.jsx)("span", {
                      className: "h-full basis-0 cursor-interaction",
                      "aria-hidden": !0,
                      style: { backgroundColor: m.Kj[t % m.Kj.length], flexGrow: e.amountMicros },
                    }),
                  },
                  e.value ?? "unknown",
                )),
              (j[20] = w),
              (j[21] = S),
              (j[22] = r))
            : (r = j[22]),
          (x = (0, a.jsx)("div", {
            className: "flex h-2 bg-text/10 [clip-path:inset(0_round_9999px)]",
            children: C.map(r),
          })),
          (t = "flex flex-wrap gap-x-4 gap-y-1.5 text-secondary"),
          j[23] !== w || j[24] !== S || j[25] !== M
            ? ((u = (e, t) =>
                (0, a.jsx)(
                  i.m,
                  {
                    openDelay: 0,
                    content: (0, a.jsx)(y, { dimension: w, entry: e, percentage: S(e.amountMicros) }),
                    children: (0, a.jsxs)("button", {
                      className:
                        "inline-flex cursor-interaction items-center gap-1.5 rounded-sm py-px focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-ring",
                      "aria-label":
                        null == e.value
                          ? M.formatMessage(
                              {
                                id: "usageCenter.thread.breakdown.segment.unknownAriaLabel",
                                defaultMessage: "Other: {percentage}% of usage",
                              },
                              { percentage: S(e.amountMicros) },
                            )
                          : M.formatMessage(
                              {
                                id: "usageCenter.thread.breakdown.segment.localizedAriaLabel",
                                defaultMessage:
                                  "{dimension, select, speed {{value, select, fast {Fast mode} ultrafast {Ultrafast} standard {Standard} other {{value}}}} reasoning_effort {{value, select, none {None} minimal {Minimal} low {Light} medium {Medium} high {High} xhigh {Extra High} max {Max} ultra {Ultra} other {{value}}}} other {{value}}}: {percentage}% of usage",
                              },
                              {
                                dimension: w,
                                value: "model" === w ? (0, g.K)(e.value) : e.value,
                                percentage: S(e.amountMicros),
                              },
                            ),
                      type: "button",
                      children: [
                        (0, a.jsx)("span", {
                          className: "size-2.5 shrink-0 rounded-full",
                          style: { backgroundColor: m.Kj[t % m.Kj.length] },
                        }),
                        (0, a.jsx)(b, { dimension: w, value: e.value }),
                      ],
                    }),
                  },
                  e.value ?? "unknown",
                )),
              (j[23] = w),
              (j[24] = S),
              (j[25] = M),
              (j[26] = u))
            : (u = j[26]),
          (s = C.map(u)),
          (j[0] = w),
          (j[1] = M),
          (j[2] = A),
          (j[3] = _.balanceUnit),
          (j[4] = _.groups),
          (j[5] = t),
          (j[6] = s),
          (j[7] = l),
          (j[8] = o),
          (j[9] = c),
          (j[10] = p),
          (j[11] = x))
      } else ((t = j[5]), (s = j[6]), (l = j[7]), (o = j[8]), (c = j[9]), (p = j[10]), (x = j[11]))
      return (
        j[27] !== t || j[28] !== s
          ? ((v = (0, a.jsx)("div", { className: t, children: s })), (j[27] = t), (j[28] = s), (j[29] = v))
          : (v = j[29]),
        j[30] !== l || j[31] !== o || j[32] !== c || j[33] !== p || j[34] !== x || j[35] !== v
          ? ((k = (0, a.jsxs)("div", { className: l, "aria-labelledby": o, role: c, children: [p, x, v] })),
            (j[30] = l),
            (j[31] = o),
            (j[32] = c),
            (j[33] = p),
            (j[34] = x),
            (j[35] = v),
            (j[36] = k))
          : (k = j[36]),
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
        l,
        r,
        u = (0, n.c)(18),
        { dimension: c, entry: g, percentage: m } = e
      return (
        u[0] !== c || u[1] !== g.value || u[2] !== m
          ? ((t = (0, a.jsx)("span", {
              className: "font-medium",
              children: (0, a.jsx)(x, { dimension: c, percentage: m, value: g.value }),
            })),
            (u[0] = c),
            (u[1] = g.value),
            (u[2] = m),
            (u[3] = t))
          : (t = u[3]),
        u[4] !== c || u[5] !== g.netNewInputTokens
          ? ((s =
              "model" === c && null != g.netNewInputTokens
                ? (0, a.jsx)("span", {
                    children: (0, a.jsx)(d.A, {
                      id: "usageCenter.thread.breakdown.tooltip.inputTokens",
                      defaultMessage: "Uncached input tokens: {count}",
                      values: { count: (0, a.jsx)(o.Gr, { value: g.netNewInputTokens }) },
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
                      values: { count: (0, a.jsx)(o.Gr, { value: g.cachedInputTokens }) },
                    }),
                  })
                : null),
            (u[7] = c),
            (u[8] = g.cachedInputTokens),
            (u[9] = i))
          : (i = u[9]),
        u[10] !== c || u[11] !== g.outputTokens
          ? ((l =
              "model" === c && null != g.outputTokens
                ? (0, a.jsx)("span", {
                    children: (0, a.jsx)(d.A, {
                      id: "usageCenter.thread.breakdown.tooltip.outputTokens",
                      defaultMessage: "Output tokens: {count}",
                      values: { count: (0, a.jsx)(o.Gr, { value: g.outputTokens }) },
                    }),
                  })
                : null),
            (u[10] = c),
            (u[11] = g.outputTokens),
            (u[12] = l))
          : (l = u[12]),
        u[13] !== t || u[14] !== s || u[15] !== i || u[16] !== l
          ? ((r = (0, a.jsxs)("div", { className: "flex flex-col gap-0.5 text-xs", children: [t, s, i, l] })),
            (u[13] = t),
            (u[14] = s),
            (u[15] = i),
            (u[16] = l),
            (u[17] = r))
          : (r = u[17]),
        r
      )
    }
    function x(e) {
      let t,
        s,
        i = (0, n.c)(13),
        { dimension: l, percentage: r, value: o } = e
      if (null == o) {
        let e
        return (
          i[0] !== r
            ? ((e = (0, a.jsx)(d.A, {
                id: "usageCenter.thread.breakdown.tooltip.otherPercentage",
                defaultMessage: "Other: {percentage}%",
                values: { percentage: r },
              })),
              (i[0] = r),
              (i[1] = e))
            : (e = i[1]),
          e
        )
      }
      if ("speed" === l) {
        let e
        return (
          i[2] !== r || i[3] !== o
            ? ((e = (0, a.jsx)(d.A, {
                id: "usageCenter.thread.breakdown.tooltip.speedPercentage",
                defaultMessage:
                  "{speed, select, fast {Fast mode} ultrafast {Ultrafast} standard {Standard} other {{speed}}}: {percentage}%",
                values: { percentage: r, speed: o },
              })),
              (i[2] = r),
              (i[3] = o),
              (i[4] = e))
            : (e = i[4]),
          e
        )
      }
      if ("reasoning_effort" === l) {
        let e
        return (
          i[5] !== r || i[6] !== o
            ? ((e = (0, a.jsx)(d.A, {
                id: "usageCenter.thread.breakdown.tooltip.reasoningPercentage",
                defaultMessage:
                  "{effort, select, none {None} minimal {Minimal} low {Light} medium {Medium} high {High} xhigh {Extra High} max {Max} ultra {Ultra} other {{effort}}}: {percentage}%",
                values: { effort: o, percentage: r },
              })),
              (i[5] = r),
              (i[6] = o),
              (i[7] = e))
            : (e = i[7]),
          e
        )
      }
      return (
        i[8] !== o ? ((t = (0, g.K)(o)), (i[8] = o), (i[9] = t)) : (t = i[9]),
        i[10] !== r || i[11] !== t
          ? ((s = (0, a.jsx)(d.A, {
              id: "usageCenter.thread.breakdown.tooltip.modelPercentage",
              defaultMessage: "{model}: {percentage}%",
              values: { model: t, percentage: r },
            })),
            (i[10] = r),
            (i[11] = t),
            (i[12] = s))
          : (s = i[12]),
        s
      )
    }
    function b(e) {
      let t,
        s = (0, n.c)(12),
        { dimension: i, value: r } = e
      if (null == r) {
        let e
        return (
          s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(d.A, { id: "usageCenter.thread.breakdown.other", defaultMessage: "Other" })), (s[0] = e))
            : (e = s[0]),
          e
        )
      }
      if ("model" === i) {
        let e, t
        return (
          s[1] !== r ? ((e = (0, g.K)(r)), (s[1] = r), (s[2] = e)) : (e = s[2]),
          s[3] !== e ? ((t = (0, a.jsx)(a.Fragment, { children: e })), (s[3] = e), (s[4] = t)) : (t = s[4]),
          t
        )
      }
      if ("speed" === i)
        switch (r) {
          case "fast": {
            let e
            return (
              s[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(d.A, { id: "usageCenter.thread.breakdown.fast", defaultMessage: "Fast mode" })),
                  (s[5] = e))
                : (e = s[5]),
              e
            )
          }
          case "ultrafast": {
            let e
            return (
              s[6] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(d.A, { id: "usageCenter.thread.breakdown.ultrafast", defaultMessage: "Ultrafast" })),
                  (s[6] = e))
                : (e = s[6]),
              e
            )
          }
          case "standard": {
            let e
            return (
              s[7] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(d.A, { id: "usageCenter.thread.breakdown.standard", defaultMessage: "Standard" })),
                  (s[7] = e))
                : (e = s[7]),
              e
            )
          }
          default: {
            let e
            return (
              s[8] !== r ? ((e = (0, a.jsx)(a.Fragment, { children: r })), (s[8] = r), (s[9] = e)) : (e = s[9]),
              e
            )
          }
        }
      return (
        s[10] !== r
          ? ((t = (0, l.eE)(r) ? (0, a.jsx)(c.w, { effort: r }) : (0, a.jsx)(a.Fragment, { children: r })),
            (s[10] = r),
            (s[11] = t))
          : (t = s[11]),
        t
      )
    }
    s.d(
      t,
      {},
      {
        h: b,
        x: function (e) {
          let t,
            s,
            i,
            l,
            r,
            u,
            c,
            g,
            m,
            h = (0, n.c)(30),
            { usage: f, title: y, showCostUsd: x } = e
          if ("usd" === f.balanceUnit) {
            let e
            ;(h[0] !== f.costUsd
              ? ((e =
                  null == f.costUsd
                    ? null
                    : (0, a.jsx)(o.Gr, {
                        value: f.costUsd,
                        style: "currency",
                        currency: "USD",
                        maximumFractionDigits: 0.01 > Math.abs(f.costUsd) ? 6 : 2,
                      })),
                (h[0] = f.costUsd),
                (h[1] = e))
              : (e = h[1]),
              (t = e))
          } else if ((void 0 === x || x) && null != f.costUsd) {
            let e, s, n
            h[2] !== f.creditsUsed
              ? ((e = (0, a.jsx)(o.Gr, { value: f.creditsUsed, notation: "compact", maximumFractionDigits: 1 })),
                (h[2] = f.creditsUsed),
                (h[3] = e))
              : (e = h[3])
            let i = f.costUsd < 0.01 ? 4 : 2
            ;(h[4] !== i || h[5] !== f.costUsd
              ? ((s = (0, a.jsx)(o.Gr, {
                  value: f.costUsd,
                  style: "currency",
                  currency: "USD",
                  maximumFractionDigits: i,
                })),
                (h[4] = i),
                (h[5] = f.costUsd),
                (h[6] = s))
              : (s = h[6]),
              h[7] !== e || h[8] !== s
                ? ((n = (0, a.jsx)(d.A, {
                    id: "usageCenter.thread.breakdown.total",
                    defaultMessage: "{creditCount} credits \xb7 {cost}",
                    values: { creditCount: e, cost: s },
                  })),
                  (h[7] = e),
                  (h[8] = s),
                  (h[9] = n))
                : (n = h[9]),
              (t = n))
          } else {
            let e
            ;(h[10] !== f.creditsUsed
              ? ((e = (0, a.jsx)(d.A, {
                  id: "usageCenter.thread.breakdown.totalCreditsOnly",
                  defaultMessage: "{creditCount} credits",
                  values: {
                    creditCount: (0, a.jsx)(o.Gr, {
                      value: f.creditsUsed,
                      notation: "compact",
                      maximumFractionDigits: 1,
                    }),
                  },
                })),
                (h[10] = f.creditsUsed),
                (h[11] = e))
              : (e = h[11]),
              (t = e))
          }
          return (
            h[12] !== y
              ? ((s =
                  y ??
                  (0, a.jsx)(d.A, { id: "usageCenter.thread.breakdown.title", defaultMessage: "Usage in this chat" })),
                (h[12] = y),
                (h[13] = s))
              : (s = h[13]),
            h[14] !== s
              ? ((i = (0, a.jsx)("span", { className: "min-w-0 truncate font-semibold text-default", children: s })),
                (h[14] = s),
                (h[15] = i))
              : (i = h[15]),
            h[16] !== t
              ? ((l = (0, a.jsx)("span", { className: "shrink-0 text-secondary tabular-nums", children: t })),
                (h[16] = t),
                (h[17] = l))
              : (l = h[17]),
            h[18] !== i || h[19] !== l
              ? ((r = (0, a.jsxs)("div", { className: "flex items-center justify-between gap-3", children: [i, l] })),
                (h[18] = i),
                (h[19] = l),
                (h[20] = r))
              : (r = h[20]),
            h[21] !== f
              ? ((u = (0, a.jsx)(p, { dimension: "model", usage: f })),
                (c = (0, a.jsx)(p, { dimension: "reasoning_effort", usage: f })),
                (g = (0, a.jsx)(p, { dimension: "speed", usage: f })),
                (h[21] = f),
                (h[22] = u),
                (h[23] = c),
                (h[24] = g))
              : ((u = h[22]), (c = h[23]), (g = h[24])),
            h[25] !== r || h[26] !== u || h[27] !== c || h[28] !== g
              ? ((m = (0, a.jsxs)("div", {
                  className: "flex min-w-0 flex-1 flex-col gap-3 px-3 py-2 text-xs leading-4 select-none",
                  children: [r, u, c, g],
                })),
                (h[25] = r),
                (h[26] = u),
                (h[27] = c),
                (h[28] = g),
                (h[29] = m))
              : (m = h[29]),
            m
          )
        },
      },
    )
  },
}
//# sourceMappingURL=886484.6577e07bd8.js.map
