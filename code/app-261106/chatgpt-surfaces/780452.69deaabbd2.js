export const __rspack_esm_ids = [780452]
export const __webpack_modules__ = {
  UQrU(e, t, i) {
    i.d(t, { OrbitActivityPanel: () => F })
    var a = i("ABep"),
      s = i("QosV"),
      n = i("on57"),
      l = i("HFi9"),
      r = i.n(l),
      o = i("c7eY"),
      c = i.n(o),
      d = i("i5ac"),
      u = i.n(d),
      h = i("zTeN"),
      m = i("zd8w"),
      x = i("Wf1j"),
      f = i("oyxz"),
      y = i("Qgfj"),
      g = i("VEyj"),
      p = i("qRqa"),
      v = i("QcW8"),
      b = i("SPnB"),
      j = i("Sm6l"),
      _ = i("bVeK"),
      k = i("EXS8"),
      N = i("OXGn"),
      A = i("XpUB"),
      w = i("Oj9r"),
      M = i("HWx4"),
      I = i("Tk44"),
      S = i("T5Gd"),
      C = i("KFso"),
      T = i("uwcW")
    function L(e) {
      let t,
        i,
        n,
        l = (0, s.c)(6),
        { conversationId: r } = e
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(f.A, {
              id: "orbit.activity.scheduled.toggle.label",
              defaultMessage: "Scheduled",
              description:
                "Collapsible section label in the dot Activity sidebar. Expanding it shows scheduled tasks belonging to this dot. Keep dot untranslated.",
            })),
            (l[0] = t))
          : (t = l[0]),
        l[1] !== r ? ((i = (0, a.jsx)(R, { conversationId: r })), (l[1] = r), (l[2] = i)) : (i = l[2]),
        l[3] !== r || l[4] !== i
          ? ((n = (0, a.jsx)(
              M.x.Section,
              {
                sectionKey: "orbit-activity-scheduled",
                defaultCollapsed: !0,
                persistExpansion: !1,
                divider: !1,
                inset: !1,
                spacing: "standalone",
                surface: "panel",
                title: t,
                children: i,
              },
              r,
            )),
            (l[3] = r),
            (l[4] = i),
            (l[5] = n))
          : (n = l[5]),
        n
      )
    }
    function R(e) {
      let t,
        i,
        n,
        l = (0, s.c)(13),
        { conversationId: r } = e,
        o = (0, h.gh)(w.GD),
        { items: c, isLoading: d, error: u } = (0, h._U)(C.L, r)
      if (d) {
        let e
        return (
          l[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(M.x.Item, {
                className: "select-none",
                role: "status",
                tone: "muted",
                children: (0, a.jsx)(M.x.ItemLabel, {
                  children: (0, a.jsx)(T.q, {
                    children: (0, a.jsx)(f.A, {
                      id: "orbit.activity.scheduled.loading",
                      defaultMessage: "Loading schedules…",
                      description:
                        "Loading announcement in the expanded Scheduled section of the dot Activity sidebar. Keep dot untranslated.",
                    }),
                  }),
                }),
              })),
              (l[0] = e))
            : (e = l[0]),
          e
        )
      }
      if (null != u || null == c) {
        let e, t, i, s
        return (
          l[1] !== o.queryClient
            ? ((e = () => void o.queryClient.invalidateQueries({ queryKey: ["cloud-automations"] })),
              (l[1] = o.queryClient),
              (l[2] = e))
            : (e = l[2]),
          l[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(M.x.ItemLabel, {
                children: (0, a.jsx)(f.A, {
                  id: "orbit.activity.scheduled.error",
                  defaultMessage: "Couldn’t load schedules",
                  description:
                    "Error in the expanded Scheduled section of the dot Activity sidebar when its scheduled tasks cannot be loaded. Keep dot untranslated.",
                }),
              })),
              (l[3] = t))
            : (t = l[3]),
          l[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, a.jsx)(M.x.ItemMeta, {
                children: (0, a.jsx)(f.A, {
                  id: "orbit.activity.scheduled.retry",
                  defaultMessage: "Try again",
                  description:
                    "Button action that retries loading scheduled tasks in the dot Activity sidebar after an error. Keep dot untranslated.",
                }),
              })),
              (l[4] = i))
            : (i = l[4]),
          l[5] !== e
            ? ((s = (0, a.jsx)("div", {
                role: "status",
                children: (0, a.jsxs)(M.x.ItemButton, { className: "select-none", onClick: e, children: [t, i] }),
              })),
              (l[5] = e),
              (l[6] = s))
            : (s = l[6]),
          s
        )
      }
      if (l[7] !== c) {
        i = Symbol.for("react.early_return_sentinel")
        e: {
          let e = c.filter(D)
          if (0 === e.length) {
            let e
            ;(l[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(M.x.Item, {
                  className: "select-none",
                  role: "status",
                  tone: "muted",
                  children: (0, a.jsx)(M.x.ItemLabel, {
                    children: (0, a.jsx)(f.A, {
                      id: "orbit.activity.scheduled.noActiveSchedules",
                      defaultMessage: "No active schedules",
                      description:
                        "Empty state in the expanded Scheduled section of the dot Activity sidebar after loading confirms this dot has no enabled schedules. Keep dot untranslated.",
                    }),
                  }),
                })),
                (l[10] = e))
              : (e = l[10]),
              (i = e))
            break e
          }
          t = e.map(q)
        }
        ;((l[7] = c), (l[8] = t), (l[9] = i))
      } else ((t = l[8]), (i = l[9]))
      return i !== Symbol.for("react.early_return_sentinel")
        ? i
        : (l[11] !== t ? ((n = (0, a.jsx)(a.Fragment, { children: t })), (l[11] = t), (l[12] = n)) : (n = l[12]), n)
    }
    function q(e) {
      return (0, a.jsx)(S.u, { item: e }, e.automation.id)
    }
    function D(e) {
      let { automation: t } = e
      return t.is_enabled
    }
    var B = i("aNYY")
    let E = {
      a: (0, N.j$)({
        conversationId: null,
        externalLinkAppearance: "underlined-text",
        isBrowserEnabled: !1,
        openFileLinksInSidePanel: !1,
      }),
    }
    function F(e) {
      let t,
        i,
        n,
        l,
        r,
        o,
        c = (0, s.c)(10)
      c[0] !== e
        ? (({ accountId: t, userId: l, isVisible: i, ...n } = e),
          (c[0] = e),
          (c[1] = t),
          (c[2] = i),
          (c[3] = n),
          (c[4] = l))
        : ((t = c[1]), (i = c[2]), (n = c[3]), (l = c[4]))
      let d = (0, h.Ul)(B.Xr),
        u = (0, h.Ul)(b.chatGptAuthenticatedAccountId$),
        m = (0, h.Ul)(b.chatGptAuthenticatedUserId$)
      if (!d || u !== t || m !== l) return null
      let x = !1 === i ? "hidden" : "visible"
      return (
        c[5] !== n ? ((r = (0, a.jsx)(U, { ...n })), (c[5] = n), (c[6] = r)) : (r = c[6]),
        c[7] !== x || c[8] !== r
          ? ((o = (0, a.jsx)(g.Y, { mode: x, children: r })), (c[7] = x), (c[8] = r), (c[9] = o))
          : (o = c[9]),
        o
      )
    }
    function U(e) {
      let t,
        i,
        n,
        l,
        r,
        o,
        c,
        d,
        u,
        y,
        b,
        k,
        N,
        A,
        M = (0, s.c)(39),
        { tboId: I, conversationId: S, tabState: C, setTabState: T, renderSlots: R, onClose: q } = e,
        D = (0, h.gh)(w.GD),
        B = (0, x.A)(),
        E = (0, m.useRef)(null),
        F = (0, m.useRef)(null),
        U = (0, m.useRef)(null),
        K = (0, m.useRef)(void 0),
        { selectedTaskId: W } = C
      ;(M[0] !== D || M[1] !== W
        ? ((t = () => {
            "right-panel" === D.get(v.J8) &&
              K.current !== W &&
              ((K.current = W),
              null != W
                ? E.current?.focus({ preventScroll: !0 })
                : (U.current?.isConnected ? U.current : F.current)?.focus({ preventScroll: !0 }))
          }),
          (i = [D, W]),
          (M[0] = D),
          (M[1] = W),
          (M[2] = t),
          (M[3] = i))
        : ((t = M[2]), (i = M[3])),
        (0, m.useLayoutEffect)(t, i),
        M[4] !== B
          ? ((n = B.formatMessage({
              id: "orbit.activity.panel.close.label",
              defaultMessage: "Close activity",
              description: "Accessible label for the button closing the dot activity sidebar",
            })),
            (M[4] = B),
            (M[5] = n))
          : (n = M[5]),
        M[6] !== B || M[7] !== W || M[8] !== T
          ? ((l =
              null != W &&
              (0, a.jsx)(j.$, {
                ref: E,
                size: "toolbar",
                color: "ghost",
                uniform: !0,
                "aria-label": B.formatMessage({
                  id: "orbit.activity.panel.back.label",
                  defaultMessage: "Back to activity",
                  description:
                    "Accessible label for returning from a task detail to the activity list in the dot sidebar",
                }),
                onClick: () => T({ selectedTaskId: null }),
                children: (0, a.jsx)(_.KBq, {}),
              })),
            (M[6] = B),
            (M[7] = W),
            (M[8] = T),
            (M[9] = l))
          : (l = M[9]),
        M[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)("span", {
              className: "text-sm font-medium",
              children: (0, a.jsx)(f.A, {
                id: "orbit.activity.tasks.list.title",
                defaultMessage: "Activity",
                description: "Heading above the dot's recent task activity history",
              }),
            })),
            (M[10] = r))
          : (r = M[10]),
        M[11] !== l
          ? ((o = (0, a.jsxs)("div", { className: "flex min-w-0 items-center gap-2 select-none", children: [l, r] })),
            (M[11] = l),
            (M[12] = o))
          : (o = M[12]))
      let $ = null == W ? "visible" : "hidden"
      return (
        M[13] !== B
          ? ((c = B.formatMessage({
              id: "orbit.activity.panel.list.label",
              defaultMessage: "Activity history",
              description: "Accessible name for the scrollable list of recent dot tasks in the activity sidebar",
            })),
            (M[13] = B),
            (M[14] = c))
          : (c = M[14]),
        M[15] !== S ? ((d = null != S && (0, a.jsx)(L, { conversationId: S })), (M[15] = S), (M[16] = d)) : (d = M[16]),
        M[17] !== T
          ? ((u = (e) => {
              ;((U.current =
                document.activeElement instanceof HTMLButtonElement && F.current?.contains(document.activeElement)
                  ? document.activeElement
                  : null),
                T({ selectedTaskId: e }))
            }),
            (M[17] = T),
            (M[18] = u))
          : (u = M[18]),
        M[19] !== u || M[20] !== I
          ? ((y = (0, a.jsx)(G, { tboId: I, onSelect: u })), (M[19] = u), (M[20] = I), (M[21] = y))
          : (y = M[21]),
        M[22] !== y || M[23] !== c || M[24] !== d
          ? ((b = (0, a.jsxs)("div", {
              ref: F,
              className: "flex min-h-0 flex-1 flex-col gap-6 overflow-y-auto p-panel",
              role: "region",
              tabIndex: -1,
              "aria-label": c,
              children: [d, y],
            })),
            (M[22] = y),
            (M[23] = c),
            (M[24] = d),
            (M[25] = b))
          : (b = M[25]),
        M[26] !== b || M[27] !== $
          ? ((k = (0, a.jsx)(g.Y, { mode: $, children: b })), (M[26] = b), (M[27] = $), (M[28] = k))
          : (k = M[28]),
        M[29] !== W || M[30] !== I
          ? ((N =
              null != W &&
              (0, a.jsx)("div", {
                className: "min-h-0 flex-1 overflow-y-auto p-panel",
                children: (0, a.jsx)(z, { tboId: I, taskId: W }, W),
              })),
            (M[29] = W),
            (M[30] = I),
            (M[31] = N))
          : (N = M[31]),
        M[32] !== q || M[33] !== R || M[34] !== k || M[35] !== N || M[36] !== n || M[37] !== o
          ? ((A = (0, a.jsxs)(p.JR, { renderSlots: R, onClose: q, closeLabel: n, leading: o, children: [k, N] })),
            (M[32] = q),
            (M[33] = R),
            (M[34] = k),
            (M[35] = N),
            (M[36] = n),
            (M[37] = o),
            (M[38] = A))
          : (A = M[38]),
        A
      )
    }
    function G(e) {
      let t,
        i,
        n,
        l = (0, s.c)(12),
        { tboId: r, onSelect: o } = e,
        { data: c, isPending: d, isError: u, isFetching: m, refetch: x } = (0, h._U)(B.Dk, r)
      return (
        l[0] !== u || l[1] !== m || l[2] !== x
          ? ((t = u && (0, a.jsx)(I.oi, { isRetrying: m, onRetry: () => void x() })),
            (l[0] = u),
            (l[1] = m),
            (l[2] = x),
            (l[3] = t))
          : (t = l[3]),
        l[4] !== c || l[5] !== u || l[6] !== d || l[7] !== o
          ? ((i = d ? (0, a.jsx)(I.Ib, {}) : !u && null != c && (0, a.jsx)(K, { tasks: c, onSelect: o })),
            (l[4] = c),
            (l[5] = u),
            (l[6] = d),
            (l[7] = o),
            (l[8] = i))
          : (i = l[8]),
        l[9] !== t || l[10] !== i
          ? ((n = (0, a.jsxs)(a.Fragment, { children: [t, i] })), (l[9] = t), (l[10] = i), (l[11] = n))
          : (n = l[11]),
        n
      )
    }
    function K(e) {
      let t,
        i,
        l,
        o,
        d,
        u,
        h = (0, s.c)(18),
        { tasks: x, onSelect: y, now: g } = e,
        p = (0, m.useId)(),
        [v, b] = (0, m.useState)(15),
        [k] = (0, m.useState)($)
      if (h[0] !== g || h[1] !== y || h[2] !== k || h[3] !== p || h[4] !== x || h[5] !== v) {
        o = Symbol.for("react.early_return_sentinel")
        e: {
          t = c()(x, W, "desc")
          let e = r()(t.slice(0, v), (e) => {
            var t, i
            let a, s, n, l
            return (
              (t = e.updated_at),
              (i = g ?? k),
              (a = new Date(t)),
              (s = new Date(i.getFullYear(), i.getMonth(), i.getDate())),
              (n = new Date(i.getFullYear(), i.getMonth(), i.getDate() - 1)),
              (l = new Date(i.getFullYear(), i.getMonth(), i.getDate() - 7)),
              a >= s
                ? "today"
                : a >= n
                  ? "yesterday"
                  : a >= l
                    ? "week"
                    : a.getFullYear() === i.getFullYear() && a.getMonth() === i.getMonth()
                      ? "month"
                      : `month:${new Date(a.getFullYear(), a.getMonth(), 1).getTime()}`
            )
          })
          if (0 === x.length) {
            let e
            ;(h[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(I.HX, {})), (h[10] = e))
              : (e = h[10]),
              (o = e))
            break e
          }
          ;((i = "flex min-h-0 flex-col gap-6"),
            (l = Object.entries(e).map((e) => {
              let [t, i] = e
              return (0, a.jsxs)(
                "section",
                {
                  className: "flex flex-col gap-2",
                  children: [
                    (0, a.jsx)("h3", {
                      className: "text-sm text-secondary select-none",
                      children: (0, a.jsx)(Q, { group: t }),
                    }),
                    (0, a.jsx)(M.x.ItemGroup, {
                      density: "comfortable",
                      className: "select-none",
                      children: i.map((e) =>
                        (0, a.jsxs)(
                          M.x.ItemButton,
                          {
                            title: e.title,
                            "aria-label": e.title,
                            tone: V(e.status) ? "tertiary" : "default",
                            "aria-describedby": `${p}-${e.id}`,
                            onClick: () => y(e.id),
                            children: [
                              (0, a.jsx)(M.x.ItemLeading, {
                                variant: "intrinsic",
                                "aria-hidden": !0,
                                children: V(e.status) ? (0, a.jsx)(_.xch, {}) : (0, a.jsx)(_.XNe, {}),
                              }),
                              (0, a.jsx)(M.x.ItemLabel, {
                                truncate: !1,
                                children: (0, a.jsx)("span", {
                                  className: (0, n.A)("block truncate", V(e.status) && "line-through"),
                                  children: e.title,
                                }),
                              }),
                              (0, a.jsx)("span", {
                                id: `${p}-${e.id}`,
                                className: "sr-only",
                                children: (0, a.jsx)(O, { status: e.status }),
                              }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                },
                t,
              )
            })))
        }
        ;((h[0] = g),
          (h[1] = y),
          (h[2] = k),
          (h[3] = p),
          (h[4] = x),
          (h[5] = v),
          (h[6] = t),
          (h[7] = i),
          (h[8] = l),
          (h[9] = o))
      } else ((t = h[6]), (i = h[7]), (l = h[8]), (o = h[9]))
      return o !== Symbol.for("react.early_return_sentinel")
        ? o
        : (h[11] !== t.length || h[12] !== v
            ? ((d =
                t.length > v &&
                (0, a.jsx)(j.$, {
                  color: "ghost",
                  onClick: () => b(v + 15),
                  children: (0, a.jsx)(f.A, {
                    id: "orbit.activity.tasks.list.more",
                    defaultMessage: "Show more",
                    description: "Button that reveals the next fifteen items in the dot's activity history",
                  }),
                })),
              (h[11] = t.length),
              (h[12] = v),
              (h[13] = d))
            : (d = h[13]),
          h[14] !== i || h[15] !== l || h[16] !== d
            ? ((u = (0, a.jsxs)("div", { className: i, children: [l, d] })),
              (h[14] = i),
              (h[15] = l),
              (h[16] = d),
              (h[17] = u))
            : (u = h[17]),
          u)
    }
    function W(e) {
      return Date.parse(e.updated_at)
    }
    function $() {
      return new Date()
    }
    function z(e) {
      let t,
        i,
        n,
        l,
        r,
        o,
        c = (0, s.c)(22),
        { tboId: d, taskId: u } = e,
        { data: m, isPending: x, isError: y, isFetching: g, refetch: p } = (0, h._U)(B.Dk, d)
      c[0] !== m || c[1] !== y || c[2] !== u
        ? ((t = y ? void 0 : m?.find((e) => e.id === u)), (c[0] = m), (c[1] = y), (c[2] = u), (c[3] = t))
        : (t = c[3])
      let v = t
      return (
        c[4] !== y || c[5] !== g || c[6] !== p
          ? ((i = y && (0, a.jsx)(I.oi, { isRetrying: g, onRetry: () => void p() })),
            (c[4] = y),
            (c[5] = g),
            (c[6] = p),
            (c[7] = i))
          : (i = c[7]),
        c[8] !== x ? ((n = x && (0, a.jsx)(I.Ib, {})), (c[8] = x), (c[9] = n)) : (n = c[9]),
        c[10] !== v || c[11] !== d
          ? ((l = null != v && (0, a.jsx)(H, { tboId: d, task: v }, v.id)), (c[10] = v), (c[11] = d), (c[12] = l))
          : (l = c[12]),
        c[13] !== y || c[14] !== x || c[15] !== v
          ? ((r =
              !x &&
              null == v &&
              !y &&
              (0, a.jsx)("p", {
                className: "text-secondary",
                children: (0, a.jsx)(f.A, {
                  id: "orbit.activity.tasks.detail.missing",
                  defaultMessage: "This activity is no longer available",
                  description: "Message when a task cannot be found in the dot's activity history",
                }),
              })),
            (c[13] = y),
            (c[14] = x),
            (c[15] = v),
            (c[16] = r))
          : (r = c[16]),
        c[17] !== i || c[18] !== n || c[19] !== l || c[20] !== r
          ? ((o = (0, a.jsxs)(a.Fragment, { children: [i, n, l, r] })),
            (c[17] = i),
            (c[18] = n),
            (c[19] = l),
            (c[20] = r),
            (c[21] = o))
          : (o = c[21]),
        o
      )
    }
    function H(e) {
      let t,
        i,
        n = (0, s.c)(35),
        { tboId: l, task: r } = e,
        o = (0, m.useId)()
      n[0] !== r.id || n[1] !== l
        ? ((t = { tboId: l, taskId: r.id }), (n[0] = r.id), (n[1] = l), (n[2] = t))
        : (t = n[2])
      let {
        data: c,
        isPending: d,
        isError: x,
        isFetching: y,
        refetch: g,
        hasNextPage: p,
        fetchNextPage: v,
        isFetchingNextPage: b,
      } = (0, h._U)(B.Ch, t)
      if (
        n[3] !== c ||
        n[4] !== v ||
        n[5] !== p ||
        n[6] !== x ||
        n[7] !== y ||
        n[8] !== b ||
        n[9] !== d ||
        n[10] !== g ||
        n[11] !== r.created_at ||
        n[12] !== r.description ||
        n[13] !== r.status ||
        n[14] !== r.title ||
        n[15] !== o
      ) {
        let e,
          t,
          s,
          l,
          h,
          m,
          k,
          N = x ? [] : u()(c?.pages.flatMap(Y) ?? [], "id").reverse()
        ;(n[17] !== r.title || n[18] !== o
          ? ((e = (0, a.jsx)("h2", { id: o, className: "text-heading-md", children: r.title })),
            (n[17] = r.title),
            (n[18] = o),
            (n[19] = e))
          : (e = n[19]),
          n[20] !== r.description
            ? ((t =
                r.description &&
                (0, a.jsx)("div", {
                  className: "text-sm text-secondary",
                  children: (0, a.jsx)(P, { text: r.description }),
                })),
              (n[20] = r.description),
              (n[21] = t))
            : (t = n[21]),
          n[22] !== r.status
            ? ((s = (0, a.jsx)("div", {
                className: "text-sm text-tertiary",
                children: (0, a.jsx)(O, { status: r.status }),
              })),
              (n[22] = r.status),
              (n[23] = s))
            : (s = n[23]),
          n[24] !== e || n[25] !== t || n[26] !== s
            ? ((l = (0, a.jsxs)("div", { className: "flex flex-col gap-3", children: [e, t, s] })),
              (n[24] = e),
              (n[25] = t),
              (n[26] = s),
              (n[27] = l))
            : (l = n[27]),
          n[28] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (0, a.jsx)("div", { className: "border-t border-default" })), (n[28] = h))
            : (h = n[28]),
          n[29] !== x || n[30] !== y || n[31] !== g
            ? ((m = x && (0, a.jsx)(I.oi, { isRetrying: y, onRetry: () => void g() })),
              (n[29] = x),
              (n[30] = y),
              (n[31] = g),
              (n[32] = m))
            : (m = n[32]),
          n[33] !== d ? ((k = d && (0, a.jsx)(I.Ib, {})), (n[33] = d), (n[34] = k)) : (k = n[34]),
          (i = (0, a.jsxs)("section", {
            "aria-labelledby": o,
            className: "flex flex-col gap-6 select-text",
            children: [
              l,
              h,
              m,
              k,
              !d &&
                !x &&
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    p &&
                      (0, a.jsx)(j.$, {
                        color: "ghost",
                        disabled: b,
                        loading: b,
                        onClick: () => void v(),
                        children: (0, a.jsx)(f.A, {
                          id: "orbit.activity.tasks.detail.earlier",
                          defaultMessage: "Show earlier updates",
                          description:
                            "Button above the chronological activity timeline that loads older progress updates for this dot task",
                        }),
                      }),
                    (0, a.jsxs)("ol", {
                      className: "flex flex-col",
                      children: [
                        !p &&
                          (0, a.jsxs)("li", {
                            className: "flex gap-3",
                            children: [
                              (0, a.jsxs)("div", {
                                className: "flex w-5 shrink-0 flex-col items-center gap-1",
                                "aria-hidden": !0,
                                children: [
                                  (0, a.jsx)(_.hEG, { className: "text-tertiary" }),
                                  N.length > 0 && (0, a.jsx)("div", { className: "w-px flex-1 bg-border" }),
                                ],
                              }),
                              (0, a.jsxs)("div", {
                                className: "flex min-w-0 flex-1 flex-col gap-1 pb-6 text-sm",
                                children: [
                                  (0, a.jsx)("span", {
                                    className: "text-secondary",
                                    children: (0, a.jsx)(f.A, {
                                      id: "orbit.activity.tasks.detail.created",
                                      defaultMessage: "Task created",
                                      description:
                                        "First entry in the dot task's chronological activity timeline, showing when the task was created",
                                    }),
                                  }),
                                  (0, a.jsx)(X, { timestamp: r.created_at }),
                                ],
                              }),
                            ],
                          }),
                        N.map((e, t) =>
                          (0, a.jsxs)(
                            "li",
                            {
                              className: "flex gap-3",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex w-5 shrink-0 flex-col items-center gap-1",
                                  "aria-hidden": !0,
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: "flex h-5 items-center",
                                      children: (0, a.jsx)(_.QC9, { className: "text-tertiary" }),
                                    }),
                                    t < N.length - 1 && (0, a.jsx)("div", { className: "w-px flex-1 bg-border" }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex min-w-0 flex-1 flex-col gap-2 pb-6",
                                  children: [
                                    (0, a.jsx)(X, { timestamp: e.created_at }),
                                    (0, a.jsx)(P, { text: e.text }),
                                  ],
                                }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      ],
                    }),
                  ],
                }),
            ],
          })),
          (n[3] = c),
          (n[4] = v),
          (n[5] = p),
          (n[6] = x),
          (n[7] = y),
          (n[8] = b),
          (n[9] = d),
          (n[10] = g),
          (n[11] = r.created_at),
          (n[12] = r.description),
          (n[13] = r.status),
          (n[14] = r.title),
          (n[15] = o),
          (n[16] = i))
      } else i = n[16]
      return i
    }
    function Y(e) {
      return e.data
    }
    function X(e) {
      let t,
        i,
        n = (0, s.c)(5),
        { timestamp: l } = e
      return (
        n[0] !== l
          ? ((t = (0, a.jsx)(y.XU, { value: l, month: "short", day: "numeric", hour: "numeric", minute: "2-digit" })),
            (n[0] = l),
            (n[1] = t))
          : (t = n[1]),
        n[2] !== t || n[3] !== l
          ? ((i = (0, a.jsx)("time", { className: "text-sm text-tertiary", dateTime: l, children: t })),
            (n[2] = t),
            (n[3] = l),
            (n[4] = i))
          : (i = n[4]),
        i
      )
    }
    function P(e) {
      let t,
        i,
        n,
        l = (0, s.c)(5),
        { text: r } = e
      return (
        l[0] !== r ? ((t = (0, A.o)(r, void 0)), (l[0] = r), (l[1] = t)) : (t = l[1]),
        l[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = { kind: "base", tone: "inherit" }), (l[2] = i))
          : (i = l[2]),
        l[3] !== t
          ? ((n = (0, a.jsx)(k.T, { tokens: t, components: E, externalResourcePolicy: "restricted", textStyle: i })),
            (l[3] = t),
            (l[4] = n))
          : (n = l[4]),
        n
      )
    }
    function O(e) {
      let t,
        i = (0, s.c)(2),
        { status: n } = e
      return (
        i[0] !== n
          ? ((t = (0, a.jsx)(f.A, {
              id: "orbit.activity.tasks.detail.status",
              defaultMessage:
                "{status, select, active {Working} in_progress {Waiting} completed {Completed} done {Completed} cancelled {Cancelled} canceled {Cancelled} failed {Failed} other {Activity}}",
              description: "Status of the selected dot task. Unknown statuses use the neutral label Activity.",
              values: { status: n },
            })),
            (i[0] = n),
            (i[1] = t))
          : (t = i[1]),
        t
      )
    }
    function Q(e) {
      let t,
        i = (0, s.c)(8),
        { group: n } = e
      if (n.startsWith("month:")) {
        let e, t, s
        i[0] !== n ? ((e = n.slice(6)), (i[0] = n), (i[1] = e)) : (e = i[1])
        let l = Number(e)
        return (
          i[2] !== l ? ((t = new Date(l)), (i[2] = l), (i[3] = t)) : (t = i[3]),
          i[4] !== t
            ? ((s = (0, a.jsx)(y.XU, { value: t, month: "long", year: "numeric" })), (i[4] = t), (i[5] = s))
            : (s = i[5]),
          s
        )
      }
      return (
        i[6] !== n
          ? ((t = (0, a.jsx)(f.A, {
              id: "orbit.activity.tasks.list.dateGroup",
              defaultMessage:
                "{group, select, today {Today} yesterday {Yesterday} week {Previous 7 days} other {This month}}",
              description:
                "Date grouping in the dot activity history, based on when a task was last updated. Previous 7 days excludes Today and Yesterday.",
              values: { group: n },
            })),
            (i[6] = n),
            (i[7] = t))
          : (t = i[7]),
        t
      )
    }
    function V(e) {
      return "completed" === e || "done" === e
    }
  },
  T5Gd(e, t, i) {
    var a = i("ABep"),
      s = i("QosV"),
      n = i("sCnE"),
      l = i("qStL"),
      r = i("zTeN"),
      o = i("Wf1j"),
      c = i("oyxz"),
      d = i("fGpH"),
      u = i("bN4H"),
      h = i("UxN3"),
      m = i("Oj9r"),
      x = i("HWx4")
    i.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            i,
            f,
            y,
            g,
            p,
            v = (0, s.c)(19),
            { item: b } = e,
            j = (0, r.gh)(m.GD),
            _ = (0, o.A)()
          v[0] !== b ? ((t = (0, d.OK)(b)), (v[0] = b), (v[1] = t)) : (t = v[1])
          let k = t
          v[2] !== _ || v[3] !== b ? ((i = (0, d.AT)(b, _)), (v[2] = _), (v[3] = b), (v[4] = i)) : (i = v[4])
          let N = i
          if (b.automation.is_enabled) {
            if ("condition_watch" === b.automation.timing_mode) {
              let e
              ;(v[6] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(c.A, {
                    id: "orbit.automations.monitoring",
                    defaultMessage: "Monitoring",
                    description:
                      "Label for an enabled automation configured to watch for a condition; not the outcome of a particular run",
                  })),
                  (v[6] = e))
                : (e = v[6]),
                (N = e))
            }
          } else {
            let e
            ;(v[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(c.A, {
                  id: "inbox.automations.pausedRowStatus",
                  defaultMessage: "Paused",
                  description: "Visible status for a paused scheduled task in a navigation-only row",
                })),
                (v[5] = e))
              : (e = v[5]),
              (N = e))
          }
          return (
            v[7] !== b.automation.id || v[8] !== j || v[9] !== k
              ? ((f = () => (0, u.openAutomationSidePanelTab)({ scope: j, automationId: b.automation.id, title: k })),
                (v[7] = b.automation.id),
                (v[8] = j),
                (v[9] = k),
                (v[10] = f))
              : (f = v[10]),
            v[11] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = (0, a.jsx)(x.x.ItemLeading, {
                  variant: "custom",
                  children: (0, a.jsx)(h.b5, {
                    className: "text-tertiary",
                    icon: { assets: { 16: n.s, 20: l.b } },
                    size: "secondary",
                  }),
                })),
                (v[11] = y))
              : (y = v[11]),
            v[12] !== N || v[13] !== k
              ? ((g = (0, a.jsx)(x.x.ItemLabel, { description: N, children: k })),
                (v[12] = N),
                (v[13] = k),
                (v[14] = g))
              : (g = v[14]),
            v[15] !== f || v[16] !== g || v[17] !== k
              ? ((p = (0, a.jsxs)(x.x.ItemButton, {
                  className: "select-none",
                  title: k,
                  onClick: f,
                  children: [y, g],
                })),
                (v[15] = f),
                (v[16] = g),
                (v[17] = k),
                (v[18] = p))
              : (p = v[18]),
            p
          )
        },
      },
    )
  },
  KFso(e, t, i) {
    var a = i("SZCv"),
      s = i.n(a),
      n = i("zTeN"),
      l = i("WzCE"),
      r = i("SPnB"),
      o = i("fGpH"),
      c = i("Ro2M"),
      d = i("Ghh3"),
      u = i("OWtl"),
      h = i("rvFo"),
      m = i("kzhd"),
      x = i("TYK1")
    let f = (0, n.vU)(u.u, (e, { get: t, scope: i }) => {
        let a = t(r.chatGptAuthenticatedAccountId$),
          s = t(r.chatGptAuthenticatedUserId$)
        return {
          enabled: null != a && null != s,
          queryKey: ["cloud-automations", "aeon", a, s, e],
          queryFn: async ({ signal: t }) => {
            let n = i.query.getData(x.cloudAeonByThreadId$, e) ?? (await (0, m.pd)(e, t))
            if (null == n) return null
            let r = [],
              o = null
            do {
              let e = await d.Request.safeGet("/tbo/{tbo_id}/automations", {
                parameters: { path: { tbo_id: n.id }, query: { cursor: o, limit: 100 } },
                signal: t,
              })
              for (let n of (t.throwIfAborted(), e.items))
                (r.push(n.id),
                  i.queryClient.setQueryData((0, c.XZ)(n.id, a).queryKey, (e) =>
                    null != e && (0, l.$)(e.automation.updated_at, n.updated_at) > 0
                      ? e
                      : { automation: n, teamId: n.team_id ?? void 0, viewerUserId: s },
                  ))
              o = e.cursor ?? null
            } while (null != o)
            return r
          },
          retry: !1,
          refetchOnMount: !0,
          staleTime: h.D.ONE_MINUTE,
        }
      }),
      y = (0, n.i1)(
        u.u,
        (e, { get: t }) => {
          let i = t(f, e),
            a = i.data?.map((e) => t(c.jv, e))
          return {
            items: a?.flatMap(({ data: e }) => (null != e && "completed" !== (0, o.Xr)(e.automation) ? [e] : [])),
            isLoading: i.isLoading || a?.some((e) => e.isLoading) === !0,
            error: i.error ?? a?.find((e) => null != e.error)?.error ?? null,
          }
        },
        { isEqual: s() },
      )
    i.d(t, {}, { L: y })
  },
  Tk44(e, t, i) {
    var a = i("ABep"),
      s = i("QosV"),
      n = i("oyxz"),
      l = i("HZfM"),
      r = i("Sm6l"),
      o = i("FrrB"),
      c = i("RNul"),
      d = i("PCxL"),
      u = i("HWx4"),
      h = i("uwcW")
    function m(e) {
      return (0, a.jsx)(l.N_, { className: "underline", to: d.Vj, children: e }, "archivedChats")
    }
    i.d(
      t,
      {},
      {
        HX: function () {
          let e,
            t = (0, s.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(u.x.Item, {
                  className: "select-none",
                  role: "status",
                  tone: "muted",
                  children: (0, a.jsx)(u.x.ItemLabel, {
                    children: (0, a.jsx)(n.A, {
                      id: "restricted.aeonMessaging.activity.empty",
                      defaultMessage: "No recent activity",
                      description: "The dot has no recent tasks, chats, or scheduled activity to show in its profile",
                    }),
                  }),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
        Ib: function () {
          let e,
            t = (0, s.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(u.x.Item, {
                  className: "select-none",
                  role: "status",
                  tone: "muted",
                  children: (0, a.jsx)(u.x.ItemLabel, {
                    children: (0, a.jsx)(h.q, {
                      children: (0, a.jsx)(n.A, {
                        id: "restricted.aeonMessaging.activity.loading",
                        defaultMessage: "Loading activity",
                        description: "Loading announcement for the dot activity feed",
                      }),
                    }),
                  }),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
        Sd: function (e) {
          let t,
            i,
            l,
            c,
            d = (0, s.c)(12),
            { state: u, isRetrying: h, onRetry: x } = e,
            f = void 0 !== h && h
          d[0] !== u
            ? ((t = (0, a.jsx)(n.A, {
                id: "orbit.activity.detail.feedback.title",
                defaultMessage:
                  "{state, select, archived {Couldn’t load this archived chat} missing {This chat is no longer available} empty {No messages yet} other {Couldn’t load this chat}}",
                description:
                  "Title for a chat preview that has no messages or cannot load. Archived means the chat is confirmed archived; missing means the server confirmed it cannot be found; error is a temporary or unknown failure.",
                values: { state: u },
              })),
              (d[0] = u),
              (d[1] = t))
            : (t = d[1])
          let y = t
          d[2] !== u
            ? ((i = (0, a.jsx)(n.A, {
                id: "orbit.activity.detail.feedback.descriptionWithArchivedSettings",
                defaultMessage:
                  "{state, select, archived {We couldn’t retrieve its messages. View <archivedChats>archived chats</archivedChats>} missing {It may have been deleted or you may no longer have access} empty {This chat doesn’t have any messages to display} other {Check your connection and try again}}",
                description:
                  "Explanation beneath a chat preview’s empty or error state. The archivedChats tag opens the active archive surface or the Archived chats page in Settings.",
                values: { state: u, archivedChats: m },
              })),
              (d[2] = u),
              (d[3] = i))
            : (i = d[3])
          let g = i
          d[4] !== f || d[5] !== x || d[6] !== u
            ? ((l =
                "error" === u || "archived" === u
                  ? (0, a.jsx)(r.$, {
                      loading: f,
                      disabled: f,
                      onClick: x,
                      children: (0, a.jsx)(n.A, {
                        id: "orbit.activity.detail.feedback.retry",
                        defaultMessage: "Try again",
                        description: "Retry loading the chat preview’s messages",
                      }),
                    })
                  : null),
              (d[4] = f),
              (d[5] = x),
              (d[6] = u),
              (d[7] = l))
            : (l = d[7])
          let p = l
          return (
            d[8] !== p || d[9] !== g || d[10] !== y
              ? ((c = (0, a.jsx)("div", {
                  className: "flex min-h-0 flex-1",
                  role: "status",
                  children: (0, a.jsx)(o.A, { className: "flex-1", title: y, description: g, actions: p }),
                })),
                (d[8] = p),
                (d[9] = g),
                (d[10] = y),
                (d[11] = c))
              : (c = d[11]),
            c
          )
        },
        oi: function (e) {
          let t,
            i,
            l,
            r,
            o = (0, s.c)(11),
            { isRetrying: d, onRetry: h } = e,
            m = void 0 !== d && d
          return (
            o[0] !== m
              ? ((t = m
                  ? (0, a.jsx)(u.x.ItemLeading, { "aria-hidden": !0, children: (0, a.jsx)(c.y, { as: "span" }) })
                  : null),
                (o[0] = m),
                (o[1] = t))
              : (t = o[1]),
            o[2] !== m
              ? ((i = (0, a.jsx)(u.x.ItemLabel, {
                  children: m
                    ? (0, a.jsx)(n.A, {
                        id: "restricted.aeonMessaging.activity.retrying",
                        defaultMessage: "Retrying activity…",
                        description: "Status announced while retrying a failed dot activity request",
                      })
                    : (0, a.jsx)(n.A, {
                        id: "restricted.aeonMessaging.activity.error",
                        defaultMessage: "Couldn’t load activity",
                        description: "Error shown when the dot activity feed cannot be fetched",
                      }),
                })),
                (l = m
                  ? null
                  : (0, a.jsx)(u.x.ItemMeta, {
                      children: (0, a.jsx)(n.A, {
                        id: "restricted.aeonMessaging.activity.retry",
                        defaultMessage: "Try again",
                        description: "Retry loading dot activity after a failed request",
                      }),
                    })),
                (o[2] = m),
                (o[3] = i),
                (o[4] = l))
              : ((i = o[3]), (l = o[4])),
            o[5] !== m || o[6] !== h || o[7] !== t || o[8] !== i || o[9] !== l
              ? ((r = (0, a.jsx)("div", {
                  role: "status",
                  children: (0, a.jsxs)(u.x.ItemButton, {
                    className: "select-none",
                    disabled: m,
                    onClick: h,
                    children: [t, i, l],
                  }),
                })),
                (o[5] = m),
                (o[6] = h),
                (o[7] = t),
                (o[8] = i),
                (o[9] = l),
                (o[10] = r))
              : (r = o[10]),
            r
          )
        },
        t1: function (e) {
          let t,
            i,
            l = (0, s.c)(6),
            { animateContentResize: r, children: o, title: c } = e,
            d = void 0 !== r && r
          return (
            l[0] !== c
              ? ((t =
                  c ??
                  (0, a.jsx)(n.A, {
                    id: "restricted.aeonMessaging.activityHeading",
                    defaultMessage: "Recent activity",
                    description: "Heading for subtasks and subagents in the dot profile",
                  })),
                (l[0] = c),
                (l[1] = t))
              : (t = l[1]),
            l[2] !== d || l[3] !== o || l[4] !== t
              ? ((i = (0, a.jsx)(u.x.Section, {
                  animateContentResize: d,
                  sectionKey: "orbit-activity",
                  divider: !1,
                  mode: "accordion",
                  title: t,
                  children: o,
                })),
                (l[2] = d),
                (l[3] = o),
                (l[4] = t),
                (l[5] = i))
              : (i = l[5]),
            i
          )
        },
      },
    )
  },
  uwcW(e, t, i) {
    var a = i("ABep"),
      s = i("QosV"),
      n = i("X3K1")
    i.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            i,
            l,
            r = (0, s.c)(5),
            { children: o } = e
          return (
            r[0] !== o
              ? ((t = (0, a.jsx)("span", { className: "opacity-0", children: o })), (r[0] = o), (r[1] = t))
              : (t = r[1]),
            r[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (0, a.jsx)("span", {
                  className: "absolute inset-0 flex items-center",
                  "aria-hidden": !0,
                  children: (0, a.jsx)(n.X, { className: "w-full", as: "span", size: "sm" }),
                })),
                (r[2] = i))
              : (i = r[2]),
            r[3] !== t
              ? ((l = (0, a.jsxs)("span", { className: "relative inline-block", children: [t, i] })),
                (r[3] = t),
                (r[4] = l))
              : (l = r[4]),
            l
          )
        },
      },
    )
  },
  duD4(e, t, i) {
    function a(e, [t, i]) {
      return Math.min(i, Math.max(t, e))
    }
    ;((0, Object.defineProperty)(a, "name", { value: "clamp", configurable: !0 }), i.d(t, {}, { q: a }))
  },
}
//# sourceMappingURL=780452.69deaabbd2.js.map
