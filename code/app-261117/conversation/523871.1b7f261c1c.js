export const __rspack_esm_ids = [523871]
export const __webpack_modules__ = {
  BXfA(e, t, n) {
    var r = n("KaH3")
    n.d(
      t,
      {},
      {
        A: function (e, t) {
          let n = (0, r.GI)(t ?? void 0) ?? e.url ?? t
          return null == n ? null : { ...e, url: n }
        },
      },
    )
  },
  fFMT(e, t, n) {
    var r = n("ABep"),
      l = n("QosV"),
      a = n("qTvt"),
      s = n("yLY7"),
      i = n("oyxz"),
      o = n("HOLv"),
      u = n("BWrV"),
      c = n("MIZk")
    function d(e) {
      let { isExpanded: t, isLoadingMore: n, onToggle: l } = e
      return (0, r.jsxs)(c.Ck, {
        tone: "tertiary",
        disabled: n,
        "aria-busy": n,
        onClick: l,
        children: [
          (0, r.jsx)(c.sW, { variant: "custom", children: (0, r.jsx)(o.I, { asset: t ? s.V : a.K }) }),
          (0, r.jsx)(c.Qw, {
            children: t
              ? (0, r.jsx)(i.A, { id: "codex.dynamicIsle.showLess", defaultMessage: "Show less" })
              : (0, r.jsx)(i.A, { id: "codex.dynamicIsle.showMore", defaultMessage: "Show more" }),
          }),
        ],
      })
    }
    n.d(
      t,
      {},
      {
        L: function (e) {
          let t,
            n = (0, l.c)(2)
          return (
            n[0] !== e ? ((t = (0, r.jsx)(u.n, { ...e, renderPagination: d })), (n[0] = e), (n[1] = t)) : (t = n[1]),
            t
          )
        },
      },
    )
  },
  KFso(e, t, n) {
    var r = n("SZCv"),
      l = n.n(r),
      a = n("qmMi"),
      s = n("WzCE"),
      i = n("SPnB"),
      o = n("fGpH"),
      u = n("Ro2M"),
      c = n("Kwur"),
      d = n("OWtl"),
      m = n("rvFo"),
      g = n("kzhd"),
      p = n("TYK1")
    let h = (0, a.vU)(d.u, (e, { get: t, scope: n }) => {
        let r = t(i.chatGptAuthenticatedAccountId$),
          l = t(i.chatGptAuthenticatedUserId$)
        return {
          enabled: null != r && null != l,
          queryKey: ["cloud-automations", "aeon", r, l, e],
          queryFn: async ({ signal: t }) => {
            let a = n.query.getData(p.cloudAeonByThreadId$, e) ?? (await (0, g.pd)(e, t))
            if (null == a) return null
            let i = [],
              o = new Set(),
              d = null
            do {
              let e = await c.Request.safeGet("/tbo/{tbo_id}/automations", {
                parameters: { path: { tbo_id: a.id }, query: { cursor: d, limit: 100 } },
                signal: t,
              })
              for (let a of (t.throwIfAborted(), e.items))
                (i.push(a.id),
                  n.queryClient.setQueryData((0, u.XZ)(a.id, r).queryKey, (e) =>
                    null != e && (0, s.$)(e.automation.updated_at, a.updated_at) > 0
                      ? e
                      : { automation: a, teamId: a.team_id ?? void 0, viewerUserId: l },
                  ))
              if (null != (d = e.cursor ?? null)) {
                if (o.has(d)) throw Error("Schedule pagination repeated a cursor")
                o.add(d)
              }
            } while (null != d)
            return i
          },
          retry: !1,
          refetchOnMount: !0,
          staleTime: m.D.ONE_MINUTE,
        }
      }),
      f = (0, a.i1)(
        d.u,
        (e, { get: t }) => {
          let n = t(h, e),
            r = n.data?.map((e) => t(u.jv, e))
          return {
            items: r?.flatMap(({ data: e }) => (null != e && "completed" !== (0, o.Xr)(e.automation) ? [e] : [])),
            isLoading: n.isLoading || r?.some((e) => e.isLoading) === !0,
            error: n.error ?? r?.find((e) => null != e.error)?.error ?? null,
          }
        },
        { isEqual: l() },
      )
    n.d(t, {}, { L: f })
  },
  Tk44(e, t, n) {
    var r = n("ABep"),
      l = n("QosV"),
      a = n("oyxz"),
      s = n("Ywss"),
      i = n("Sm6l"),
      o = n("FrrB"),
      u = n("RNul"),
      c = n("PCxL"),
      d = n("W4GL"),
      m = n("uwcW")
    function g(e) {
      return (0, r.jsx)(s.N_, { className: "underline", to: c.Vj, children: e }, "archivedChats")
    }
    n.d(
      t,
      {},
      {
        HX: function () {
          let e,
            t = (0, l.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(d.x.Item, {
                  className: "select-none",
                  role: "status",
                  tone: "muted",
                  children: (0, r.jsx)(d.x.ItemLabel, {
                    children: (0, r.jsx)(a.A, {
                      id: "restricted.aeonMessaging.activity.empty",
                      defaultMessage: "No recent activity",
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
            t = (0, l.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(d.x.Item, {
                  className: "select-none",
                  role: "status",
                  tone: "muted",
                  children: (0, r.jsx)(d.x.ItemLabel, {
                    children: (0, r.jsx)(m.q, {
                      children: (0, r.jsx)(a.A, {
                        id: "restricted.aeonMessaging.activity.loading",
                        defaultMessage: "Loading activity",
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
            n,
            s,
            u,
            c = (0, l.c)(12),
            { state: d, isRetrying: m, onRetry: p } = e,
            h = void 0 !== m && m
          c[0] !== d
            ? ((t = (0, r.jsx)(a.A, {
                id: "orbit.activity.detail.feedback.title",
                defaultMessage:
                  "{state, select, archived {Couldn\u2019t load this archived chat} missing {This chat is no longer available} empty {No messages yet} other {Couldn\u2019t load this chat}}",
                values: { state: d },
              })),
              (c[0] = d),
              (c[1] = t))
            : (t = c[1])
          let f = t
          c[2] !== d
            ? ((n = (0, r.jsx)(a.A, {
                id: "orbit.activity.detail.feedback.descriptionWithArchivedSettings",
                defaultMessage:
                  "{state, select, archived {We couldn\u2019t retrieve its messages. View <archivedChats>archived chats</archivedChats>} missing {It may have been deleted or you may no longer have access} empty {This chat doesn\u2019t have any messages to display} other {Check your connection and try again}}",
                values: { state: d, archivedChats: g },
              })),
              (c[2] = d),
              (c[3] = n))
            : (n = c[3])
          let v = n
          c[4] !== h || c[5] !== p || c[6] !== d
            ? ((s =
                "error" === d || "archived" === d
                  ? (0, r.jsx)(i.$, {
                      loading: h,
                      disabled: h,
                      onClick: p,
                      children: (0, r.jsx)(a.A, {
                        id: "orbit.activity.detail.feedback.retry",
                        defaultMessage: "Try again",
                      }),
                    })
                  : null),
              (c[4] = h),
              (c[5] = p),
              (c[6] = d),
              (c[7] = s))
            : (s = c[7])
          let y = s
          return (
            c[8] !== y || c[9] !== v || c[10] !== f
              ? ((u = (0, r.jsx)("div", {
                  className: "flex min-h-0 flex-1",
                  role: "status",
                  children: (0, r.jsx)(o.A, { className: "flex-1", title: f, description: v, actions: y }),
                })),
                (c[8] = y),
                (c[9] = v),
                (c[10] = f),
                (c[11] = u))
              : (u = c[11]),
            u
          )
        },
        oi: function (e) {
          let t,
            n,
            s,
            i,
            o = (0, l.c)(11),
            { isRetrying: c, onRetry: m } = e,
            g = void 0 !== c && c
          return (
            o[0] !== g
              ? ((t = g
                  ? (0, r.jsx)(d.x.ItemLeading, { "aria-hidden": !0, children: (0, r.jsx)(u.y, { as: "span" }) })
                  : null),
                (o[0] = g),
                (o[1] = t))
              : (t = o[1]),
            o[2] !== g
              ? ((n = (0, r.jsx)(d.x.ItemLabel, {
                  children: g
                    ? (0, r.jsx)(a.A, {
                        id: "restricted.aeonMessaging.activity.retrying",
                        defaultMessage: "Retrying activity\u2026",
                      })
                    : (0, r.jsx)(a.A, {
                        id: "restricted.aeonMessaging.activity.error",
                        defaultMessage: "Couldn\u2019t load activity",
                      }),
                })),
                (s = g
                  ? null
                  : (0, r.jsx)(d.x.ItemMeta, {
                      children: (0, r.jsx)(a.A, {
                        id: "restricted.aeonMessaging.activity.retry",
                        defaultMessage: "Try again",
                      }),
                    })),
                (o[2] = g),
                (o[3] = n),
                (o[4] = s))
              : ((n = o[3]), (s = o[4])),
            o[5] !== g || o[6] !== m || o[7] !== t || o[8] !== n || o[9] !== s
              ? ((i = (0, r.jsx)("div", {
                  role: "status",
                  children: (0, r.jsxs)(d.x.ItemButton, {
                    className: "select-none",
                    disabled: g,
                    onClick: m,
                    children: [t, n, s],
                  }),
                })),
                (o[5] = g),
                (o[6] = m),
                (o[7] = t),
                (o[8] = n),
                (o[9] = s),
                (o[10] = i))
              : (i = o[10]),
            i
          )
        },
        t1: function (e) {
          let t,
            n,
            s = (0, l.c)(6),
            { animateContentResize: i, children: o, title: u } = e,
            c = void 0 !== i && i
          return (
            s[0] !== u
              ? ((t =
                  u ??
                  (0, r.jsx)(a.A, {
                    id: "restricted.aeonMessaging.activityHeading",
                    defaultMessage: "Recent activity",
                  })),
                (s[0] = u),
                (s[1] = t))
              : (t = s[1]),
            s[2] !== c || s[3] !== o || s[4] !== t
              ? ((n = (0, r.jsx)(d.x.Section, {
                  animateContentResize: c,
                  sectionKey: "orbit-activity",
                  divider: !1,
                  mode: "accordion",
                  title: t,
                  children: o,
                })),
                (s[2] = c),
                (s[3] = o),
                (s[4] = t),
                (s[5] = n))
              : (n = s[5]),
            n
          )
        },
      },
    )
  },
  uwcW(e, t, n) {
    var r = n("ABep"),
      l = n("QosV"),
      a = n("X3K1")
    n.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            n,
            s,
            i = (0, l.c)(5),
            { children: o } = e
          return (
            i[0] !== o
              ? ((t = (0, r.jsx)("span", { className: "opacity-0", children: o })), (i[0] = o), (i[1] = t))
              : (t = i[1]),
            i[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, r.jsx)("span", {
                  className: "absolute inset-0 flex items-center",
                  "aria-hidden": !0,
                  children: (0, r.jsx)(a.X, { className: "w-full", as: "span", size: "sm" }),
                })),
                (i[2] = n))
              : (n = i[2]),
            i[3] !== t
              ? ((s = (0, r.jsxs)("span", { className: "relative inline-block", children: [t, n] })),
                (i[3] = t),
                (i[4] = s))
              : (s = i[4]),
            s
          )
        },
      },
    )
  },
  uC9c(e, t, n) {
    var r = n("ABep"),
      l = n("QosV"),
      a = n("mOzQ"),
      s = n("pVNv"),
      i = n("BKpR"),
      o = n("Z5ae"),
      u = n("tUzc"),
      c = n("nv3f"),
      d = n("ra3V"),
      m = n("Lbd1"),
      g = n("on57"),
      p = n("qmMi"),
      h = n("Wf1j"),
      f = n("myH1"),
      v = n("RNul"),
      y = n("UxN3"),
      x = n("tSEg"),
      b = n("W4GL"),
      w = n("HgAn"),
      j = n("Yz7e")
    n.d(
      t,
      {},
      {
        w: function (e) {
          let t,
            n,
            I,
            M,
            C,
            S,
            q,
            _,
            A,
            k,
            R,
            P,
            L = (0, l.c)(47)
          L[0] !== e
            ? (({ compact: I, profile: M, kind: C, onSelect: n, ...t } = e),
              (L[0] = e),
              (L[1] = t),
              (L[2] = n),
              (L[3] = I),
              (L[4] = M),
              (L[5] = C))
            : ((t = L[1]), (n = L[2]), (I = L[3]), (M = L[4]), (C = L[5]))
          let D = void 0 !== I && I,
            N = void 0 !== M && M,
            T = void 0 === C ? "agent" : C,
            U = (0, p.gh)(x.GD),
            $ = (0, h.A)(),
            B = (0, p._U)(j.e, t),
            E = (0, p._U)(!!N && f.IG, t)
          L[6] !== $ || L[7] !== B.title
            ? ((S =
                B.title ??
                $.formatMessage({ id: "restricted.aeon.topOfMind.untitledTask", defaultMessage: "Created task" })),
              (L[6] = $),
              (L[7] = B.title),
              (L[8] = S))
            : (S = L[8])
          let O = S,
            W = null
          if ("completed" === B.status && "agent" === T) {
            let e
            ;(L[9] === Symbol.for("react.memo_cache_sentinel") ? ((e = { 16: i.t, 20: o.Y }), (L[9] = e)) : (e = L[9]),
              (W = e))
          } else if ("failed" === B.status || "needsInput" === B.status) {
            let e
            ;(L[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = { 16: u.A, 20: c.X }), (L[10] = e))
              : (e = L[10]),
              (W = e))
          } else if ("interrupted" === B.status) {
            let e
            ;(L[11] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = { 16: d.G, 20: m.D }), (L[11] = e))
              : (e = L[11]),
              (W = e))
          }
          let Q = null
          if ("loading" === B.status || "inProgress" === B.status) {
            let e,
              t,
              n = N && "text-tertiary",
              l = !N && "inProgress" === B.status && "text-orange"
            ;(L[12] !== n || L[13] !== l
              ? ((e = (0, g.A)("icon-sm", n, l)), (L[12] = n), (L[13] = l), (L[14] = e))
              : (e = L[14]),
              L[15] !== e
                ? ((t = (0, r.jsx)(v.y, { className: e, as: "span" })), (L[15] = e), (L[16] = t))
                : (t = L[16]),
              (Q = t))
          } else if (null != W) {
            let e,
              t,
              n = N ? "text-tertiary" : void 0
            ;(L[17] !== W ? ((e = { assets: W }), (L[17] = W), (L[18] = e)) : (e = L[18]),
              L[19] !== n || L[20] !== e
                ? ((t = (0, r.jsx)(y.b5, { className: n, icon: e, size: "secondary" })),
                  (L[19] = n),
                  (L[20] = e),
                  (L[21] = t))
                : (t = L[21]),
              (Q = t))
          }
          L[22] !== $ || L[23] !== B.status || L[24] !== O
            ? ((q = $.formatMessage(
                {
                  id: "restricted.aeon.topOfMind.taskLabel",
                  defaultMessage:
                    "{title}, {status, select, loading {Loading} unavailable {Status unavailable} completed {Completed} failed {Failed} interrupted {Stopped} needsInput {Needs input} thinking {Starting} other {Active}}",
                },
                { title: O, status: B.status },
              )),
              (L[22] = $),
              (L[23] = B.status),
              (L[24] = O),
              (L[25] = q))
            : (q = L[25])
          let K = q
          L[26] !== t || L[27] !== n || L[28] !== U || L[29] !== O
            ? ((_ = () => {
                null != n ? n(t, O) : (0, w.E)(U, t, O)
              }),
              (L[26] = t),
              (L[27] = n),
              (L[28] = U),
              (L[29] = O),
              (L[30] = _))
            : (_ = L[30])
          let F = _,
            G = "loading" !== B.status && (N || "unavailable" !== B.status) ? "default" : "muted"
          ;(L[31] !== N || L[32] !== Q
            ? ((A =
                Q ??
                (N
                  ? (0, r.jsx)(y.b5, {
                      className: "text-tertiary",
                      icon: { assets: { 16: a._, 20: s.X } },
                      size: "secondary",
                    })
                  : null)),
              (L[31] = N),
              (L[32] = Q),
              (L[33] = A))
            : (A = L[33]),
            L[34] !== A
              ? ((k = (0, r.jsx)(b.x.ItemLeading, { variant: "custom", "aria-hidden": !0, children: A })),
                (L[34] = A),
                (L[35] = k))
              : (k = L[35]))
          let V = D ? "leading-5" : void 0
          return (
            L[36] !== V || L[37] !== O
              ? ((R = (0, r.jsx)(b.x.ItemLabel, { className: V, children: O })), (L[36] = V), (L[37] = O), (L[38] = R))
              : (R = L[38]),
            L[39] !== K || L[40] !== F || L[41] !== R || L[42] !== G || L[43] !== k || L[44] !== O || L[45] !== E
              ? ((P = (0, r.jsxs)(b.x.ItemButton, {
                  className: "select-none",
                  "aria-label": K,
                  unread: E,
                  title: O,
                  tone: G,
                  onClick: F,
                  children: [k, R],
                })),
                (L[39] = K),
                (L[40] = F),
                (L[41] = R),
                (L[42] = G),
                (L[43] = k),
                (L[44] = O),
                (L[45] = E),
                (L[46] = P))
              : (P = L[46]),
            P
          )
        },
      },
    )
  },
  Yz7e(e, t, n) {
    var r = n("SZCv"),
      l = n.n(r),
      a = n("c7eY"),
      s = n.n(a),
      i = n("pkoC"),
      o = n.n(i),
      u = n("qmMi"),
      c = n("DBCl"),
      d = n("tl5a"),
      m = n("dbK8"),
      g = n("OWtl"),
      p = n("EgLy"),
      h = n("WPuL")
    let f = (0, u.i1)(
        g.u,
        (e, { get: t }) => {
          let n = t(d.M5, e),
            r = t(d.pC, { hostId: e.hostId, conversationId: e.threadId }),
            l = (0, m.C)(e.hostId) || n?.lastTurnId == null,
            { data: a, isLoading: s, isError: i } = t(p.Jr, e, { enabled: l }),
            o = l ? a : void 0,
            u = (0, p.LK)(
              n?.threadRuntimeStatus ?? r?.threadRuntimeStatus,
              n?.lastTurnId == null ? null : n.lastTurnStatus,
            ),
            c =
              (o?.status === "thinking" ? null : o?.status) ??
              ("thinking" === u ? null : u) ??
              (s || (o?.status === "thinking" && !i) ? "loading" : "unavailable")
          return {
            title: t(d.HX, e) ?? o?.title ?? r?.title,
            threadSource: o?.threadSource ?? r?.threadSource,
            status: c,
            recencyAt:
              ("completed" === c ? o?.completedAtMs : null) ??
              Math.max((o?.liveTurnStartedAt ?? 0) * 1e3, n?.recencyAtMs ?? r?.recencyAt ?? r?.updatedAt ?? 0),
          }
        },
        { isEqual: l(), owner: (e) => e.threadId },
      ),
      v = (0, u.i1)(
        g.u,
        (e, { get: t }) => {
          if (null == e || !(0, m.C)(e.hostId)) return null
          let n = t(h.U1)
          if (null == n) return null
          let r = new Map()
          for (let t of n) {
            if (t.parent_thread_id !== e.threadId) continue
            let n = (0, c.JXB)(t.thread_id)
            r.set(`${e.hostId}:${n}`, { hostId: e.hostId, threadId: n })
          }
          let l = s()(
              Array.from(r.values()),
              [(e) => "interrupted" === t(f, e).status, (e) => t(f, e).recencyAt],
              ["asc", "desc"],
            ),
            [a, i] = o()(l, (e) => {
              let { status: n } = t(f, e)
              return "inProgress" === n || "needsInput" === n
            }),
            u = i.filter((e) => {
              let { status: n } = t(f, e)
              return "failed" !== n && "interrupted" !== n
            })
          return {
            all: [...a, ...i],
            named: [...a, ...i].filter((e) => !!t(f, e).title?.trim()),
            visible: [...a, ...u.slice(0, 3)],
          }
        },
        { isEqual: l(), owner: (e) => e?.threadId },
      )
    n.d(t, {}, { F: v, e: f })
  },
  EgaV(e, t, n) {
    n.d(t, { i: () => K })
    var r = n("ABep"),
      l = n("QosV"),
      a = n("slpy")
    let s = (0, n("ESTr").a)({
      name: "microphone-slash-fill-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 2.251953, y: 1.209961, width: 15.496826, height: 17.74707 },
        visualBounds: { x: 2.251953, y: 1.209961, width: 15.496826, height: 17.74707 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.251953, y: 1.209961, width: 15.496826, height: 17.74707 },
        center: { x: 10.000366, y: 10.083496 },
        insets: { top: 1.209961, right: 2.251221, bottom: 1.042969, left: 2.251953 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.000366, y: 10.083496 },
          foreground: { x: 10.000366, y: 10.083496 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M2.44651 2.44629C2.7062 2.18659 3.12821 2.1866 3.38791 2.44629L17.5539 16.6133C17.8136 16.873 17.8136 17.294 17.5539 17.5537C17.2942 17.813 16.8731 17.8133 16.6135 17.5537L14.092 15.0322C13.097 15.7065 11.9279 16.1434 10.6662 16.2588V18.292C10.6661 18.6591 10.3683 18.957 10.0012 18.957C9.63403 18.957 9.33633 18.6591 9.33616 18.292V16.2598C6.54756 16.0114 4.20982 14.199 3.20237 11.707C3.0651 11.3667 3.22939 10.9795 3.56956 10.8418C3.9099 10.7043 4.297 10.8688 4.43479 11.209C5.3245 13.4096 7.47915 14.9596 9.99241 14.96C11.1437 14.96 12.2182 14.6345 13.1311 14.0713L11.6311 12.5713C11.1371 12.7864 10.552 12.9433 9.98459 12.9434C7.79152 12.9431 6.00335 11.1791 6.00315 8.99121V6.94336L2.44651 3.3877C2.18696 3.12814 2.18724 2.70602 2.44651 2.44629Z" fill="currentColor"/> <path d="M15.5656 11.209C15.7029 10.8689 16.0906 10.7043 16.4309 10.8408C16.7715 10.9781 16.9372 11.3664 16.8 11.707C16.7453 11.8428 16.6858 11.9765 16.6223 12.1074C16.462 12.4377 16.064 12.5752 15.7336 12.415C15.4035 12.2546 15.2648 11.8566 15.425 11.5264C15.4754 11.4226 15.5223 11.3165 15.5656 11.209Z" fill="currentColor"/> <path d="M10.0852 1.20996C12.2371 1.21016 13.9992 2.93129 13.9992 5.0752V9.65527L6.92502 2.6875L7.45139 2.21582C8.14706 1.59092 9.07289 1.21005 10.0852 1.20996Z" fill="currentColor"/>',
    })
    var i = n("on57"),
      o = n("qmMi"),
      u = n("zd8w"),
      c = n("Wf1j"),
      d = n("oyxz"),
      m = n("Sm6l"),
      g = n("rsCP"),
      p = n("HOLv"),
      h = n("SGsN"),
      f = n("m22M"),
      v = n("GaA7"),
      y = n("OWtl"),
      x = n("jTFC"),
      b = n("TMjP"),
      w = n("tILS"),
      j = n("K45w"),
      I = n("SOml"),
      M = n("K4Cx"),
      C = n("Vzyk"),
      S = n.n(C),
      q = n("SZCv"),
      _ = n.n(q),
      A = n("v7qY"),
      k = n("wD9O"),
      R = n("i7gm"),
      P = n("T1PX"),
      L = n("W4GL"),
      D = n("V8uZ")
    function N(e) {
      let t,
        n,
        a,
        s,
        o,
        d,
        m,
        g,
        p,
        h,
        f,
        v,
        y,
        x,
        b,
        C,
        q,
        N = (0, l.c)(93),
        { children: T, dockTarget: U, embeddedSlot: $ } = e,
        B = (0, c.A)(),
        E = T.type,
        O = (0, k.dz)(),
        W = (0, P.I)(),
        Q = (0, L.E)(),
        K = (0, j.d)(1),
        F = (0, u.useRef)(!1),
        G = void 0 !== $
      N[0] !== G ? ((t = { requested: G, ready: !0 }), (N[0] = G), (N[1] = t)) : (t = N[1])
      let [V, H] = (0, u.useState)(t)
      V.requested !== G && H({ requested: G, ready: !G || U?.isDocked === !0 || W || !Q })
      let z = G && !V.ready && !W,
        X = (z ? null : $) ?? (U?.isDocked ? U.slot : null),
        Y = null != X,
        [Z, J] = (0, u.useState)(null),
        [ee, et] = (0, u.useState)(null),
        en = (0, u.useRef)(null),
        er = (0, u.useRef)(null),
        el = (0, u.useRef)(null),
        ea = (0, u.useRef)(null),
        es = (0, u.useRef)(null),
        [ei, eo] = (0, u.useState)(null),
        [eu, ec] = (0, u.useState)(null),
        ed = (0, u.useRef)(null),
        em = null == ei ? (eu?.anchor.x ?? 0) : ei.x * (eu?.travel.x ?? 0),
        eg = null == ei ? (eu?.anchor.y ?? 0) : ei.y * (eu?.travel.y ?? 0)
      N[2] !== em || N[3] !== eg ? ((n = { x: em, y: eg }), (N[2] = em), (N[3] = eg), (N[4] = n)) : (n = N[4])
      let ep = n
      N[5] !== Z || N[6] !== ee || N[7] !== Y || N[8] !== eu || N[9] !== O
        ? ((a = () => {
            let e = en.current,
              t = er.current
            if (null == Z || null == ee || null == e || null == t || 0 === Z.offsetWidth) return
            let n = Z.getBoundingClientRect(),
              r = ee.getBoundingClientRect(),
              l = Math.min(Z.offsetWidth, ee.clientWidth),
              a = Y && null != eu ? eu.height : e.offsetHeight,
              s = { x: Math.max(0, ee.clientWidth - l), y: Math.max(0, ee.clientHeight - a) },
              i = {
                anchor: { x: S()((n.left - r.left) / O, 0, s.x), y: S()((n.top - r.top) / O, 0, s.y) },
                width: l,
                height: a,
                overflowing: !Y && t.scrollHeight > ee.clientHeight,
                travel: s,
              }
            ec((e) => (_()(e, i) ? e : i))
          }),
          (N[5] = Z),
          (N[6] = ee),
          (N[7] = Y),
          (N[8] = eu),
          (N[9] = O),
          (N[10] = a))
        : (a = N[10])
      let eh = (0, u.useEffectEvent)(a)
      ;(N[11] !== Z || N[12] !== ee || N[13] !== Q || N[14] !== eh
        ? ((s = () => {
            let e = en.current
            if (!Q || null == Z || null == ee || null == e) return
            let t = (0, w.ll)(Z, e, eh),
              n = new ResizeObserver(eh)
            return (
              n.observe(ee),
              () => {
                ;(t(), n.disconnect())
              }
            )
          }),
          (N[11] = Z),
          (N[12] = ee),
          (N[13] = Q),
          (N[14] = eh),
          (N[15] = s))
        : (s = N[15]),
        N[16] !== Z || N[17] !== ee || N[18] !== X || N[19] !== Q || N[20] !== O
          ? ((o = [Z, ee, Q, X, O]), (N[16] = Z), (N[17] = ee), (N[18] = X), (N[19] = Q), (N[20] = O), (N[21] = o))
          : (o = N[21]),
        (0, u.useLayoutEffect)(s, o),
        N[22] !== U?.previewScale || N[23] !== U?.previewScale.jump || N[24] !== K
          ? ((d = () => () => {
              ;((ed.current = null), ea.current?.(), (F.current = !1), K.jump(1), U?.previewScale.jump(1))
            }),
            (N[22] = U?.previewScale),
            (N[23] = U?.previewScale.jump),
            (N[24] = K),
            (N[25] = d))
          : (d = N[25]))
      let ef = U?.surface,
        ev = U?.previewScale
      ;(N[26] !== $ || N[27] !== Q || N[28] !== K || N[29] !== W || N[30] !== ev || N[31] !== ef || N[32] !== O
        ? ((m = [Q, $, ef, O, W, K, ev]),
          (N[26] = $),
          (N[27] = Q),
          (N[28] = K),
          (N[29] = W),
          (N[30] = ev),
          (N[31] = ef),
          (N[32] = O),
          (N[33] = m))
        : (m = N[33]),
        (0, u.useLayoutEffect)(d, m),
        N[34] !== W || N[35] !== O
          ? ((g = () => {
              let e = el.current
              ;(es.current?.focus({ preventScroll: !0 }), (es.current = null), (el.current = null))
              let t = er.current
              if (null == e || null == t || W) return
              let n = t.getBoundingClientRect()
              if (0 === n.width || 0 === n.height) return
              let r = (0, I.i)(
                  t,
                  {
                    transform: [
                      `translate(${(e.left - n.left) / O}px, ${(e.top - n.top) / O}px) scale(${e.width / n.width}, ${e.height / n.height})`,
                      "translate(0px, 0px) scale(1, 1)",
                    ],
                  },
                  D.Ft,
                ),
                l = () => {
                  ;(r.stop(), (t.style.transform = ""))
                }
              return ((ea.current = l), l)
            }),
            (N[34] = W),
            (N[35] = O),
            (N[36] = g))
          : (g = N[36]),
        N[37] !== X || N[38] !== ep.x || N[39] !== ep.y || N[40] !== ei || N[41] !== W || N[42] !== O
          ? ((p = [X, ei, ep.x, ep.y, W, O]),
            (N[37] = X),
            (N[38] = ep.x),
            (N[39] = ep.y),
            (N[40] = ei),
            (N[41] = W),
            (N[42] = O),
            (N[43] = p))
          : (p = N[43]),
        (0, u.useLayoutEffect)(g, p),
        N[44] !== eu || N[45] !== ei?.x || N[46] !== ei?.y
          ? ((h = (e, t) => {
              if (null == eu) return
              let n = {
                x: 0 === eu.travel.x ? (ei?.x ?? 0) : S()(e.x / eu.travel.x, 0, 1),
                y: 0 === eu.travel.y ? (ei?.y ?? 0) : S()(e.y / eu.travel.y, 0, 1),
              }
              eo(void 0 !== t && t ? { x: Math.round(n.x), y: Math.round(n.y) } : n)
            }),
            (N[44] = eu),
            (N[45] = ei?.x),
            (N[46] = ei?.y),
            (N[47] = h))
          : (h = N[47]))
      let ey = h
      N[48] !== U?.surface || N[49] !== U?.surface.getBoundingClientRect
        ? ((f = (e) => {
            let t = U?.surface.getBoundingClientRect()
            return (
              null != t && e.clientX >= t.left && e.clientX <= t.right && e.clientY >= t.top && e.clientY <= t.bottom
            )
          }),
          (N[48] = U?.surface),
          (N[49] = U?.surface.getBoundingClientRect),
          (N[50] = f))
        : (f = N[50])
      let ex = f
      N[51] !== U || N[52] !== ex || N[53] !== ey || N[54] !== K || N[55] !== O
        ? ((v = (e) => {
            let t = ed.current
            null != t &&
              t.pointerId === e.pointerId &&
              ((el.current = er.current?.getBoundingClientRect() ?? null),
              (F.current = !1),
              K.jump(1),
              U?.previewScale.jump(1),
              "pointerup" === e.type && t.moved
                ? (ey({ x: t.offset.x + (e.clientX - t.start.x) / O, y: t.offset.y + (e.clientY - t.start.y) / O }, !0),
                  t.canDock && ex(e) && ((es.current = t.captureElement), U?.onDockChange(!0)))
                : (eo(t.position), t.wasDocked && ((es.current = t.captureElement), U?.onDockChange(!0))),
              (ed.current = null),
              t.captureElement.hasPointerCapture(e.pointerId) && t.captureElement.releasePointerCapture(e.pointerId))
          }),
          (N[51] = U),
          (N[52] = ex),
          (N[53] = ey),
          (N[54] = K),
          (N[55] = O),
          (N[56] = v))
        : (v = N[56])
      let eb = v
      N[57] === Symbol.for("react.memo_cache_sentinel")
        ? ((y = (e) => {
            null != e && J(e)
          }),
          (N[57] = y))
        : (y = N[57])
      let ew = Y ? 0 : eu?.height
      return (
        N[58] !== ew ? ((x = { height: ew }), (N[58] = ew), (N[59] = x)) : (x = N[59]),
        N[60] !== U || N[61] !== ex || N[62] !== ey || N[63] !== K || N[64] !== W || N[65] !== O
          ? ((b = (e) => {
              let t = ed.current
              if (
                null == t ||
                t.pointerId !== e.pointerId ||
                (!t.moved && Math.hypot(e.clientX - t.start.x, e.clientY - t.start.y) / O < 4)
              )
                return
              t.moved = !0
              let n = ex(e)
              n || (t.canDock = !0)
              let r = t.canDock && n
              if (r !== F.current) {
                F.current = r
                let e = W ? { duration: 0 } : D.Ft
                ;((0, I.i)(K, r ? 0.9 : 1, e), null != U && (0, I.i)(U.previewScale, r ? 1.05 : 1, e))
              }
              ey({ x: t.offset.x + (e.clientX - t.start.x) / O, y: t.offset.y + (e.clientY - t.start.y) / O })
            }),
            (N[60] = U),
            (N[61] = ex),
            (N[62] = ey),
            (N[63] = K),
            (N[64] = W),
            (N[65] = O),
            (N[66] = b))
          : (b = N[66]),
        N[67] !== E ||
        N[68] !== Z ||
        N[69] !== ee ||
        N[70] !== T.key ||
        N[71] !== T.props ||
        N[72] !== X ||
        N[73] !== U ||
        N[74] !== B ||
        N[75] !== Y ||
        N[76] !== z ||
        N[77] !== Q ||
        N[78] !== eu ||
        N[79] !== ey ||
        N[80] !== ep ||
        N[81] !== ei ||
        N[82] !== K ||
        N[83] !== W ||
        N[84] !== G ||
        N[85] !== O
          ? ((C =
              null != Z &&
              (0, r.jsx)(R.s, {
                container: Z.ownerDocument.body,
                children: (0, r.jsx)("div", {
                  ref: (e) => {
                    null != e && et(e)
                  },
                  className: (0, i.A)("pointer-events-none fixed inset-4 z-40", (!Q || null == eu) && "invisible"),
                  style: { zoom: O },
                  inert: !Q,
                  children:
                    null != ee &&
                    (0, r.jsx)(R.s, {
                      container: X ?? ee,
                      children: (0, r.jsx)("div", {
                        ref: en,
                        className: (0, i.A)(
                          "pointer-events-auto relative max-h-full max-w-full data-[pip-obstacle]:[anchor-name:--orbit-floating-call]",
                          !Q && "invisible",
                          !Y && eu?.overflowing && "overflow-y-auto",
                        ),
                        "data-pip-obstacle": Q && !Y ? "orbit-call" : void 0,
                        inert: !Q || z,
                        "aria-hidden": z,
                        style: {
                          width: Y ? void 0 : eu?.width,
                          transform: Y ? void 0 : `translate(${ep.x}px, ${ep.y}px)`,
                        },
                        children: (0, r.jsx)(M.P.div, {
                          initial: !1,
                          animate: z ? { scale: 0.9, opacity: 0 } : { scale: 1, opacity: 1 },
                          transition: { duration: 0.15 * !W, ease: D.Wu },
                          onAnimationComplete: () => {
                            z && H({ requested: G, ready: !0 })
                          },
                          children: (0, r.jsx)(M.P.div, {
                            style: { scale: Y ? 1 : K },
                            children: (0, r.jsx)("div", {
                              ref: er,
                              className: "origin-top-left",
                              children: (0, r.jsx)(
                                E,
                                {
                                  ...T.props,
                                  name: U?.isDocked && !G ? U.name : T.props.name,
                                  docked: Y,
                                  controlsOnly: G && !z,
                                  dragHandleProps: G
                                    ? void 0
                                    : {
                                        role: "button",
                                        tabIndex: 0,
                                        "aria-label": B.formatMessage({
                                          id: "orbit.voiceCall.movePanel",
                                          defaultMessage: "Move call controls",
                                        }),
                                        "aria-description": B.formatMessage({
                                          id: "orbit.voiceCall.movePanelHelp",
                                          defaultMessage:
                                            "Drag to a corner or onto the profile. Use arrow keys to move to a corner. Press Home to reset the position",
                                        }),
                                        onPointerDown: (e) => {
                                          let t = en.current
                                          if (!e.isPrimary || 0 !== e.button || null == eu || null == t || null == ee)
                                            return
                                          ;(e.preventDefault(), e.currentTarget.focus())
                                          let n = er.current?.getBoundingClientRect() ?? t.getBoundingClientRect(),
                                            r = ee.getBoundingClientRect()
                                          ;(ea.current?.(), (el.current = null))
                                          let l = { x: (n.left - r.left) / O, y: (n.top - r.top) / O }
                                          ;(ey(l),
                                            (ed.current = {
                                              pointerId: e.pointerId,
                                              start: { x: e.clientX, y: e.clientY },
                                              offset: l,
                                              position: ei,
                                              moved: !1,
                                              wasDocked: Y,
                                              canDock: !Y,
                                              captureElement: e.currentTarget,
                                            }),
                                            Y &&
                                              ((0, A.flushSync)(() => U?.onDockChange(!1)),
                                              e.currentTarget.focus({ preventScroll: !0 })),
                                            e.currentTarget.setPointerCapture(e.pointerId))
                                        },
                                        onKeyDown: (e) => {
                                          let t = er.current?.getBoundingClientRect() ?? null
                                          switch (e.key) {
                                            case "ArrowLeft":
                                              ey({ ...ep, x: 0 }, !0)
                                              break
                                            case "ArrowRight":
                                              ey({ ...ep, x: eu?.travel.x ?? 0 }, !0)
                                              break
                                            case "ArrowUp":
                                              ey({ ...ep, y: 0 }, !0)
                                              break
                                            case "ArrowDown":
                                              ey({ ...ep, y: eu?.travel.y ?? 0 }, !0)
                                              break
                                            case "Home":
                                              if (null == ei && !Y) {
                                                ;(e.preventDefault(), e.stopPropagation())
                                                return
                                              }
                                              eo(null)
                                              break
                                            case "Escape": {
                                              let e = ed.current
                                              if (null == e) return
                                              ;((F.current = !1),
                                                K.jump(1),
                                                U?.previewScale.jump(1),
                                                eo(e.position),
                                                e.wasDocked && ((es.current = e.captureElement), U?.onDockChange(!0)),
                                                (ed.current = null),
                                                e.captureElement.hasPointerCapture(e.pointerId) &&
                                                  e.captureElement.releasePointerCapture(e.pointerId))
                                              break
                                            }
                                            default:
                                              return
                                          }
                                          ;("Escape" !== e.key &&
                                            Y &&
                                            ((es.current = e.currentTarget), U?.onDockChange(!1)),
                                            (el.current = t),
                                            e.preventDefault(),
                                            e.stopPropagation())
                                        },
                                      },
                                },
                                T.key,
                              ),
                            }),
                          }),
                        }),
                      }),
                    }),
                }),
              })),
            (N[67] = E),
            (N[68] = Z),
            (N[69] = ee),
            (N[70] = T.key),
            (N[71] = T.props),
            (N[72] = X),
            (N[73] = U),
            (N[74] = B),
            (N[75] = Y),
            (N[76] = z),
            (N[77] = Q),
            (N[78] = eu),
            (N[79] = ey),
            (N[80] = ep),
            (N[81] = ei),
            (N[82] = K),
            (N[83] = W),
            (N[84] = G),
            (N[85] = O),
            (N[86] = C))
          : (C = N[86]),
        N[87] !== eb || N[88] !== G || N[89] !== x || N[90] !== b || N[91] !== C
          ? ((q = (0, r.jsx)("div", {
              ref: y,
              className: "pointer-events-none shrink-0",
              hidden: G,
              style: x,
              onPointerMove: b,
              onPointerUp: eb,
              onPointerCancel: eb,
              onLostPointerCapture: eb,
              children: C,
            })),
            (N[87] = eb),
            (N[88] = G),
            (N[89] = x),
            (N[90] = b),
            (N[91] = C),
            (N[92] = q))
          : (q = N[92]),
        q
      )
    }
    function T(e) {
      let t,
        n,
        a,
        s,
        i,
        o,
        u,
        c,
        g = (0, l.c)(17),
        { onDismiss: p, onRetry: h, onOpenSettings: f } = e
      g[0] !== f
        ? ((t = (0, r.jsx)("p", {
            className: "text-sm text-secondary",
            children:
              null != f
                ? (0, r.jsx)(d.A, {
                    id: "orbit.voiceCall.microphonePermissionSettings",
                    defaultMessage: "Allow microphone access in system settings, then try again",
                  })
                : (0, r.jsx)(d.A, {
                    id: "orbit.voiceCall.microphonePermissionManual",
                    defaultMessage: "Allow microphone access in your browser or system settings, then try again",
                  }),
          })),
          (n =
            null != f &&
            (0, r.jsx)(m.$, {
              color: "primary",
              size: "dialog",
              radius: "full",
              onClick: f,
              children: (0, r.jsx)(d.A, {
                id: "realtimeVoice.launch.openMicrophoneSettings",
                defaultMessage: "Open system settings",
              }),
            })),
          (g[0] = f),
          (g[1] = t),
          (g[2] = n))
        : ((t = g[1]), (n = g[2]))
      let v = null == h
      return (
        g[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)(d.A, { id: "realtimeVoice.launch.retry", defaultMessage: "Try again" })), (g[3] = a))
          : (a = g[3]),
        g[4] !== h || g[5] !== v
          ? ((s = (0, r.jsx)(m.$, {
              className: "flex-1 justify-center",
              color: "secondary",
              size: "dialog",
              radius: "full",
              disabled: v,
              onClick: h,
              children: a,
            })),
            (g[4] = h),
            (g[5] = v),
            (g[6] = s))
          : (s = g[6]),
        g[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)(d.A, { id: "orbit.voiceCall.dismissPermissionError", defaultMessage: "Dismiss" })),
            (g[7] = i))
          : (i = g[7]),
        g[8] !== p
          ? ((o = (0, r.jsx)(m.$, {
              className: "flex-1 justify-center",
              color: "secondary",
              size: "dialog",
              radius: "full",
              onClick: p,
              children: i,
            })),
            (g[8] = p),
            (g[9] = o))
          : (o = g[9]),
        g[10] !== s || g[11] !== o
          ? ((u = (0, r.jsxs)("div", { className: "flex items-center gap-2", children: [s, o] })),
            (g[10] = s),
            (g[11] = o),
            (g[12] = u))
          : (u = g[12]),
        g[13] !== t || g[14] !== n || g[15] !== u
          ? ((c = (0, r.jsxs)(r.Fragment, { children: [t, n, u] })), (g[13] = t), (g[14] = n), (g[15] = u), (g[16] = c))
          : (c = g[16]),
        c
      )
    }
    var U = (e) =>
        (0, r.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, r.jsx)("path", {
            d: "M19.5272 12.0709C19.5298 13.3002 18.5344 14.2954 17.3051 14.293L14.2053 14.2868C13.4087 14.2852 12.7625 13.6388 12.7607 12.8422L12.7586 12.1427C12.7581 11.87 12.7052 11.6782 12.6274 11.5378C12.5511 11.4 12.4302 11.2734 12.2345 11.1615C11.8162 10.9223 11.0991 10.7737 9.9744 10.7713C8.84935 10.769 8.13426 10.9152 7.71843 11.1518C7.52421 11.2623 7.40538 11.3873 7.33035 11.5233C7.25387 11.6621 7.20134 11.8526 7.20191 12.1255L7.2026 12.825C7.20417 13.6237 6.55743 14.2704 5.75869 14.2689L2.65888 14.2627C1.43165 14.2601 0.435172 13.2636 0.432602 12.0364V11.8541C0.428139 9.72327 1.62194 8.2775 3.40052 7.40704C5.1401 6.5557 7.4791 6.22313 9.97095 6.2283C12.6502 6.23399 14.9964 6.57466 16.6967 7.43811C17.5564 7.87473 18.2701 8.45489 18.7677 9.20933C19.2676 9.96753 19.5244 10.8636 19.5266 11.8879L19.5272 12.0709Z",
            fill: "currentColor",
          }),
        }),
      $ = n("lfLX"),
      B = n("HUHI"),
      E = n("mHH7"),
      O = n("pcVU"),
      W = n("NJmW")
    function Q(e) {
      let t,
        n,
        a,
        s,
        i,
        u = (0, l.c)(14),
        { locator: m } = e,
        g = (0, c.A)()
      u[0] !== m ? ((t = { locator: m, hideWhileResponding: !1 }), (u[0] = m), (u[1] = t)) : (t = u[1])
      let p = (0, o._U)(O.l, t),
        h = p?.type === "tool" && "mcp" === p.tool.type
      u[2] !== h ? ((n = { enabled: h }), (u[2] = h), (u[3] = n)) : (n = u[3])
      let { data: f } = (0, o._U)(B.lb, m.hostId, n)
      if (null == p) {
        let e
        return (u[4] !== m ? ((e = (0, r.jsx)(W.I, { locator: m })), (u[4] = m), (u[5] = e)) : (e = u[5]), e)
      }
      u[6] !== p || u[7] !== g || u[8] !== f
        ? ((a = (0, E.i)({ intl: g, resolvedApps: f, status: p })), (u[6] = p), (u[7] = g), (u[8] = f), (u[9] = a))
        : (a = u[9])
      let v = a
      return (
        u[10] !== v?.label
          ? ((s =
              v?.label ?? (0, r.jsx)(d.A, { id: "restricted.orbit.voiceCall.thinking", defaultMessage: "Thinking" })),
            (u[10] = v?.label),
            (u[11] = s))
          : (s = u[11]),
        u[12] !== s
          ? ((i = (0, r.jsx)("span", { role: "status", children: s })), (u[12] = s), (u[13] = i))
          : (i = u[13]),
        i
      )
    }
    function K(e) {
      let t,
        n,
        a,
        s,
        i,
        d,
        m,
        g = (0, l.c)(29),
        { locator: p, dockTarget: w, embeddedSlot: j } = e,
        I = (0, o.gh)(y.u),
        M = (0, c.A)(),
        C = (0, o._U)($.SN, p),
        S = (0, o._U)($.Hx, p),
        q = (0, o._U)($.N9, p),
        _ = v.appServices.systemPermissions,
        [A, k] = (0, u.useOptimistic)(C?.microphoneMuted ?? !1),
        R = (0, o._U)(f.NE, p.conversationId),
        P = (0, o._U)(b.T, p.conversationId)
      g[0] !== M || g[1] !== p || g[2] !== I || g[3] !== C
        ? ((t = async (e) => {
            try {
              ;("set-microphone-muted" === e.type && k(e.muted), await (0, $.gV)(I, p, e, C?.claimId))
            } catch {
              I.get(h.Id).danger(
                M.formatMessage({
                  id: "restricted.orbit.voiceCall.controlFailed",
                  defaultMessage: "Couldn\u2019t update the call. Please try again",
                }),
                { errorAnalytics: { toastId: "restricted.orbit.voiceCall.controlFailed" } },
              )
            }
          }),
          (g[0] = M),
          (g[1] = p),
          (g[2] = I),
          (g[3] = C),
          (g[4] = t))
        : (t = g[4])
      let L = t,
        D = P?.avatar ?? null
      ;(g[5] !== p.conversationId || g[6] !== D
        ? ((n = (0, r.jsx)(x.Xm, { className: "size-8", avatar: D, identity: p.conversationId })),
          (g[5] = p.conversationId),
          (g[6] = D),
          (g[7] = n))
        : (n = g[7]),
        g[8] !== q || g[9] !== p || g[10] !== S || g[11] !== I
          ? ((a = S
              ? {
                  onDismiss: () => (0, $.mC)(I),
                  onRetry: q
                    ? () => {
                        ;(0, $.xM)(I, p)
                      }
                    : void 0,
                  onOpenSettings:
                    null == _
                      ? void 0
                      : () => {
                          _.openMicrophoneSettings().catch(F)
                        },
                }
              : void 0),
            (g[8] = q),
            (g[9] = p),
            (g[10] = S),
            (g[11] = I),
            (g[12] = a))
          : (a = g[12]),
        g[13] !== p ? ((s = (0, r.jsx)(Q, { locator: p })), (g[13] = p), (g[14] = s)) : (s = g[14]))
      let T = C?.phase ?? "starting"
      return (
        g[15] !== L ? ((i = (e) => (0, u.startTransition)(() => L(e))), (g[15] = L), (g[16] = i)) : (i = g[16]),
        g[17] !== A || g[18] !== R || g[19] !== n || g[20] !== a || g[21] !== s || g[22] !== T || g[23] !== i
          ? ((d = (0, r.jsx)(G, {
              avatar: n,
              permissionError: a,
              name: R,
              status: s,
              phase: T,
              microphoneMuted: A,
              onControl: i,
            })),
            (g[17] = A),
            (g[18] = R),
            (g[19] = n),
            (g[20] = a),
            (g[21] = s),
            (g[22] = T),
            (g[23] = i),
            (g[24] = d))
          : (d = g[24]),
        g[25] !== w || g[26] !== j || g[27] !== d
          ? ((m = (0, r.jsx)(N, { dockTarget: w, embeddedSlot: j, children: d })),
            (g[25] = w),
            (g[26] = j),
            (g[27] = d),
            (g[28] = m))
          : (m = g[28]),
        m
      )
    }
    function F() {}
    function G(e) {
      let t,
        n,
        o,
        h,
        f,
        v,
        y,
        x,
        b,
        w,
        j,
        I,
        M,
        C,
        S,
        q,
        _ = (0, l.c)(58),
        {
          avatar: A,
          name: k,
          status: R,
          phase: P,
          microphoneMuted: L,
          onControl: D,
          permissionError: N,
          dragHandleProps: $,
          docked: B,
          controlsOnly: E,
        } = e,
        O = void 0 !== B && B,
        W = void 0 !== E && E,
        Q = (0, c.A)(),
        K = (0, u.useId)()
      _[0] !== Q || _[1] !== L
        ? ((t = L
            ? Q.formatMessage({ id: "restricted.orbit.voiceCall.unmuteMic", defaultMessage: "Unmute microphone" })
            : Q.formatMessage({ id: "restricted.orbit.voiceCall.muteMic", defaultMessage: "Mute microphone" })),
          (_[0] = Q),
          (_[1] = L),
          (_[2] = t))
        : (t = _[2])
      let F = t
      _[3] !== Q
        ? ((n = Q.formatMessage({ id: "restricted.orbit.voiceCall.hangUp", defaultMessage: "Hang up" })),
          (_[3] = Q),
          (_[4] = n))
        : (n = _[4])
      let G = n,
        V = L ? "mediaSolid" : "secondary"
      O && !W && (V = "primary")
      let H = R
      if (null != N) {
        let e
        ;(_[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(d.A, {
              id: "realtimeVoice.launch.microphonePermissionDeniedTitle",
              defaultMessage: "Microphone permission denied",
            })),
            (_[5] = e))
          : (e = _[5]),
          (H = e))
      } else if ("starting" === P) {
        let e
        ;(_[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(d.A, { id: "restricted.orbit.voiceCall.calling", defaultMessage: "Calling\u2026" })),
            (_[6] = e))
          : (e = _[6]),
          (H = e))
      }
      let z = O ? void 0 : "dark"
      _[7] !== Q
        ? ((o = Q.formatMessage({ id: "restricted.orbit.voiceCall.controls", defaultMessage: "Call controls" })),
          (_[7] = Q),
          (_[8] = o))
        : (o = _[8])
      let X = O && !W ? "min-w-32 gap-2" : "gap-3",
        Y = !O && "p-3"
      _[9] !== X || _[10] !== Y
        ? ((h = (0, i.A)("flex flex-col text-default select-none", X, Y)), (_[9] = X), (_[10] = Y), (_[11] = h))
        : (h = _[11])
      let Z = W && null == N,
        J = null == $ || O ? void 0 : K,
        ee = null != $ && "no-drag cursor-grab touch-none active:cursor-grabbing"
      _[12] !== ee ? ((f = (0, i.A)("flex min-w-0 items-start gap-2", ee)), (_[12] = ee), (_[13] = f)) : (f = _[13])
      let et = O ? null : A,
        en = O && "text-center text-[16px] leading-5"
      ;(_[14] !== en ? ((v = (0, i.A)("truncate font-medium", en)), (_[14] = en), (_[15] = v)) : (v = _[15]),
        _[16] !== k || _[17] !== v
          ? ((y = (0, r.jsx)("div", { className: v, children: k })), (_[16] = k), (_[17] = v), (_[18] = y))
          : (y = _[18]))
      let er = O && null == N,
        el = null == N && "truncate"
      _[19] !== el ? ((x = (0, i.A)("text-secondary", el)), (_[19] = el), (_[20] = x)) : (x = _[20])
      let ea = null == N ? void 0 : "alert"
      return (
        _[21] !== H || _[22] !== er || _[23] !== x || _[24] !== ea
          ? ((b = (0, r.jsx)("div", { hidden: er, className: x, role: ea, children: H })),
            (_[21] = H),
            (_[22] = er),
            (_[23] = x),
            (_[24] = ea),
            (_[25] = b))
          : (b = _[25]),
        _[26] !== $
          ? ((w = null != $ && (0, r.jsx)("span", { className: "sr-only", children: $["aria-description"] })),
            (_[26] = $),
            (_[27] = w))
          : (w = _[27]),
        _[28] !== K || _[29] !== y || _[30] !== b || _[31] !== w
          ? ((j = (0, r.jsxs)("div", {
              id: K,
              className: "flex min-w-0 flex-1 flex-col text-start text-sm",
              children: [y, b, w],
            })),
            (_[28] = K),
            (_[29] = y),
            (_[30] = b),
            (_[31] = w),
            (_[32] = j))
          : (j = _[32]),
        _[33] !== $ || _[34] !== Z || _[35] !== J || _[36] !== f || _[37] !== et || _[38] !== j
          ? ((I = (0, r.jsxs)("div", { ...$, hidden: Z, "aria-describedby": J, className: f, children: [et, j] })),
            (_[33] = $),
            (_[34] = Z),
            (_[35] = J),
            (_[36] = f),
            (_[37] = et),
            (_[38] = j),
            (_[39] = I))
          : (I = _[39]),
        _[40] !== G || _[41] !== V || _[42] !== F || _[43] !== L || _[44] !== D || _[45] !== N
          ? ((M =
              null != N
                ? (0, r.jsx)(T, { ...N })
                : (0, r.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      (0, r.jsx)(a.m, {
                        content: F,
                        children: (0, r.jsx)(m.$, {
                          className: "flex-1 justify-center",
                          size: "dialog",
                          color: V,
                          radius: "full",
                          "aria-label": F,
                          "aria-pressed": L,
                          onClick: () => D({ type: "set-microphone-muted", muted: !L }),
                          children: (0, r.jsx)(p.I, {
                            asset: s,
                            className: L ? "text-(--color-background-danger-solid)" : void 0,
                          }),
                        }),
                      }),
                      (0, r.jsx)(a.m, {
                        content: G,
                        children: (0, r.jsx)(m.$, {
                          className: "flex-1 justify-center",
                          size: "dialog",
                          color: "dangerSolid",
                          radius: "full",
                          "aria-label": G,
                          onClick: () => D({ type: "stop" }),
                          children: (0, r.jsx)(U, { "aria-hidden": "true" }),
                        }),
                      }),
                    ],
                  })),
            (_[40] = G),
            (_[41] = V),
            (_[42] = F),
            (_[43] = L),
            (_[44] = D),
            (_[45] = N),
            (_[46] = M))
          : (M = _[46]),
        _[47] !== I || _[48] !== M || _[49] !== h
          ? ((C = (0, r.jsxs)("div", { className: h, children: [I, M] })),
            (_[47] = I),
            (_[48] = M),
            (_[49] = h),
            (_[50] = C))
          : (C = _[50]),
        _[51] !== O || _[52] !== C || _[53] !== o
          ? ((S = (0, r.jsx)(g.kW, { unstyled: O, variant: "island", role: "region", "aria-label": o, children: C })),
            (_[51] = O),
            (_[52] = C),
            (_[53] = o),
            (_[54] = S))
          : (S = _[54]),
        _[55] !== S || _[56] !== z
          ? ((q = (0, r.jsx)("div", { className: "shrink-0", "data-theme": z, children: S })),
            (_[55] = S),
            (_[56] = z),
            (_[57] = q))
          : (q = _[57]),
        q
      )
    }
  },
  NJmW(e, t, n) {
    var r = n("ABep"),
      l = n("QosV"),
      a = n("qmMi"),
      s = n("OWtl"),
      i = n("lfLX")
    let o = (0, a.i1)(s.u, (e, { get: t }) => t(i.SN, e)?.connectedAtMs),
      u = (0, a.SZ)(s.u, Date.now, ({ set: e }) => {
        let t,
          n = () => {
            ;(window.clearInterval(t),
              (t = void 0),
              document.hidden || (e(Date.now()), (t = window.setInterval(() => e(Date.now()), 1e3))))
          }
        return (
          document.addEventListener("visibilitychange", n),
          n(),
          () => {
            ;(document.removeEventListener("visibilitychange", n), window.clearInterval(t))
          }
        )
      })
    n.d(
      t,
      {},
      {
        I: function (e) {
          let t,
            n,
            s,
            i = (0, l.c)(7),
            { locator: c } = e,
            d = (0, a._U)(o, c),
            m = (0, a.Ul)(u),
            g = null == d ? 0 : Math.max(0, Math.floor((m - d) / 1e3))
          return (
            i[0] !== g
              ? ((t = Math.floor(g / 60)
                  .toString()
                  .padStart(2, "0")),
                (i[0] = g),
                (i[1] = t))
              : (t = i[1]),
            i[2] !== g ? ((n = (g % 60).toString().padStart(2, "0")), (i[2] = g), (i[3] = n)) : (n = i[3]),
            i[4] !== t || i[5] !== n
              ? ((s = (0, r.jsxs)("span", { className: "tabular-nums", children: [t, ":", n] })),
                (i[4] = t),
                (i[5] = n),
                (i[6] = s))
              : (s = i[6]),
            s
          )
        },
      },
    )
  },
  P6qQ(e, t, n) {
    var r = n("tQ31"),
      l = n.n(r),
      a = n("i5ac"),
      s = n.n(a),
      i = n("g3QY")
    function o(e) {
      return e.content
        .flatMap((e) => ("text" === e.content_type ? [e.text] : []))
        .join("\n\n")
        .trim()
    }
    n.d(
      t,
      {},
      {
        BI: function (e) {
          return {
            line: e.position.line,
            path: e.position.path,
            side: e.position.side,
            startLine: e.position.start_line ?? void 0,
            startSide: e.position.start_side ?? void 0,
          }
        },
        GM: o,
        Xw: function ({ comments: e, filePaths: t, workspaceRoot: n }) {
          let r = l()((e) => t.find((t) => (0, i.Si)(e, t, n ?? void 0))),
            a = new Map()
          for (let t of e) {
            let e = r(t.position.path)
            null != e && a.set(e, (a.get(e) ?? 0) + 1)
          }
          return a
        },
        qm: function ({ currentComments: e, nextComments: t }) {
          let n = new Set(e.map(i.y6)),
            r = t.filter((t) =>
              e.some((e) =>
                (function ({ currentComment: e, nextComment: t }) {
                  return (
                    null != e.replyToReviewThreadId &&
                    e.replyToReviewThreadId === t.replyToReviewThreadId &&
                    0 === o(e).length &&
                    o(t).length > 0 &&
                    e.position.path === t.position.path &&
                    e.position.side === t.position.side &&
                    e.position.line === t.position.line
                  )
                })({ currentComment: e, nextComment: t }),
              ),
            ),
            l = t.filter((e) => o(e).length > 0 && !n.has((0, i.y6)(e)))
          return s()([...r, ...l], i.y6)
        },
        r8: function (e, t) {
          return { commentKey: (0, i.y6)(t), revision: e }
        },
      },
    )
  },
  d21A(e, t, n) {
    n.d(t, { B: () => I })
    var r = n("ABep"),
      l = n("QosV"),
      a = n("qmMi"),
      s = n("DBCl"),
      i = n("zd8w"),
      o = n("Wf1j"),
      u = n("EFj1"),
      c = n("SGsN"),
      d = n("MUnn"),
      m = n("OWtl"),
      g = n("RxZZ"),
      p = n("JOzF"),
      h = n("YUxQ"),
      f = n("wrup"),
      v = n("ClXH"),
      y = n("oyxz"),
      x = n("bqtn"),
      b = n("HOLv"),
      w = n("RNul")
    function j(e) {
      let t,
        n,
        a,
        s,
        i,
        o,
        u,
        c,
        d,
        m,
        g,
        p,
        h,
        f = (0, l.c)(40),
        { disabled: j, pendingStatus: I, status: M, onStatusChange: C } = e,
        S = "draft" === I || void 0,
        q = j || "closed" === M || "draft" === M,
        _ = "draft" === I
      ;(f[0] !== I || f[1] !== M
        ? ((t =
            "draft" === I
              ? (0, r.jsx)(w.y, { className: "icon-xs" })
              : "draft" === M && (0, r.jsx)(b.I, { "aria-hidden": !1, asset: v.G })),
          (f[0] = I),
          (f[1] = M),
          (f[2] = t))
        : (t = f[2]),
        f[3] !== C
          ? ((n = (e) => {
              ;(e.preventDefault(), C("draft"))
            }),
            (f[3] = C),
            (f[4] = n))
          : (n = f[4]),
        f[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, r.jsx)(y.A, { id: "pullRequestSidePanel.status.draft", defaultMessage: "Draft" })), (f[5] = a))
          : (a = f[5]),
        f[6] !== S || f[7] !== q || f[8] !== _ || f[9] !== t || f[10] !== n
          ? ((s = (0, r.jsx)(x.ms.Item, {
              "aria-busy": S,
              disabled: q,
              focusableWhenDisabled: _,
              rightIcon: t,
              onSelect: n,
              children: a,
            })),
            (f[6] = S),
            (f[7] = q),
            (f[8] = _),
            (f[9] = t),
            (f[10] = n),
            (f[11] = s))
          : (s = f[11]))
      let A = "open" === I || void 0,
        k = j || "open" === M,
        R = "open" === I
      ;(f[12] !== I || f[13] !== M
        ? ((i =
            "open" === I
              ? (0, r.jsx)(w.y, { className: "icon-xs" })
              : "open" === M && (0, r.jsx)(b.I, { "aria-hidden": !1, asset: v.G })),
          (f[12] = I),
          (f[13] = M),
          (f[14] = i))
        : (i = f[14]),
        f[15] !== C
          ? ((o = (e) => {
              ;(e.preventDefault(), C("open"))
            }),
            (f[15] = C),
            (f[16] = o))
          : (o = f[16]),
        f[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, r.jsx)(y.A, { id: "pullRequestDetail.header.openState", defaultMessage: "Open" })), (f[17] = u))
          : (u = f[17]),
        f[18] !== R || f[19] !== i || f[20] !== o || f[21] !== A || f[22] !== k
          ? ((c = (0, r.jsx)(x.ms.Item, {
              "aria-busy": A,
              disabled: k,
              focusableWhenDisabled: R,
              rightIcon: i,
              onSelect: o,
              children: u,
            })),
            (f[18] = R),
            (f[19] = i),
            (f[20] = o),
            (f[21] = A),
            (f[22] = k),
            (f[23] = c))
          : (c = f[23]))
      let P = "closed" === I || void 0,
        L = j || "closed" === M,
        D = "closed" === I
      return (
        f[24] !== I || f[25] !== M
          ? ((d =
              "closed" === I
                ? (0, r.jsx)(w.y, { className: "icon-xs" })
                : "closed" === M && (0, r.jsx)(b.I, { "aria-hidden": !1, asset: v.G })),
            (f[24] = I),
            (f[25] = M),
            (f[26] = d))
          : (d = f[26]),
        f[27] !== C
          ? ((m = (e) => {
              ;(e.preventDefault(), C("closed"))
            }),
            (f[27] = C),
            (f[28] = m))
          : (m = f[28]),
        f[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, r.jsx)(y.A, { id: "pullRequestSidePanel.status.close", defaultMessage: "Closed" })), (f[29] = g))
          : (g = f[29]),
        f[30] !== P || f[31] !== L || f[32] !== D || f[33] !== d || f[34] !== m
          ? ((p = (0, r.jsx)(x.ms.Item, {
              "aria-busy": P,
              disabled: L,
              focusableWhenDisabled: D,
              rightIcon: d,
              onSelect: m,
              children: g,
            })),
            (f[30] = P),
            (f[31] = L),
            (f[32] = D),
            (f[33] = d),
            (f[34] = m),
            (f[35] = p))
          : (p = f[35]),
        f[36] !== c || f[37] !== p || f[38] !== s
          ? ((h = (0, r.jsxs)(r.Fragment, { children: [s, c, p] })), (f[36] = c), (f[37] = p), (f[38] = s), (f[39] = h))
          : (h = f[39]),
        h
      )
    }
    function I(e) {
      let t,
        n = (0, l.c)(6),
        { account: a, defaultMergeMenuOpen: s, detail: i, placement: o, workspaceRequest: u } = e,
        c = void 0 !== s && s
      return i.isAuthor && "merged" !== i.state && ("status-menu" === o || "open" === i.state)
        ? (n[0] !== a || n[1] !== c || n[2] !== i || n[3] !== o || n[4] !== u
            ? ((t = (0, r.jsx)(M, {
                account: a,
                defaultMergeMenuOpen: c,
                detail: i,
                placement: o,
                workspaceRequest: u,
              })),
              (n[0] = a),
              (n[1] = c),
              (n[2] = i),
              (n[3] = o),
              (n[4] = u),
              (n[5] = t))
            : (t = n[5]),
          t)
        : null
    }
    function M(e) {
      var t, n, v
      let y,
        x,
        b,
        w,
        I,
        M,
        C,
        S,
        q,
        _,
        A,
        k,
        R = (0, l.c)(69),
        { account: P, defaultMergeMenuOpen: L, detail: D, placement: N, workspaceRequest: T } = e,
        U = (0, a.gh)(m.u),
        $ = (0, o.A)()
      R[0] !== P || R[1] !== D.pullRequest
        ? ((y = { account: P, pullRequest: D.pullRequest }), (R[0] = P), (R[1] = D.pullRequest), (R[2] = y))
        : (y = R[2])
      let B = y,
        E = (0, a._U)(p.Kc, B),
        O = (0, a._U)(p.RR, B),
        W = (0, a._U)(p.Cn, B),
        [Q, K] = (0, i.useState)(L),
        [F, G] = (0, i.useState)(!1),
        V = (0, g.iK)(s.Ugj.pullRequestMergeMethod),
        H = "open" !== D.state || null != D.mergeBlocker || !D.canMerge || E,
        z = O.isPending && O.variables?.action === "toggle-auto-merge" ? O.variables.enabled : null,
        X = O.isPending ? O.variables?.action : null,
        Y = null
      "mark-draft" === X
        ? (Y = "draft")
        : "close" === X
          ? (Y = "closed")
          : ("mark-ready" === X || "reopen" === X || "reopen-ready" === X) && (Y = "open")
      let Z = z ?? !0 === D.isAutoMergeEnabled,
        J = "open" !== D.state || (!Z && D.isDraft) || E,
        ee = F ? "squash" : (V ?? "merge")
      R[3] !== D.allowedMergeMethods || R[4] !== ee || R[5] !== F
        ? ((x =
            F || null == D.allowedMergeMethods || D.allowedMergeMethods.includes(ee)
              ? ee
              : (D.allowedMergeMethods[0] ?? ee)),
          (R[3] = D.allowedMergeMethods),
          (R[4] = ee),
          (R[5] = F),
          (R[6] = x))
        : (x = R[6])
      let et = x,
        en = "closed" === D.state ? "closed" : D.isDraft ? "draft" : "open"
      R[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = () => {
            K(!0)
          }),
          (R[7] = b))
        : (b = R[7])
      let er = "side-panel" === N && !0 === D.isAuthor && "open" === D.state && !D.isDraft && !Z && !E
      ;(R[8] !== er ? ((w = { enabled: er }), (R[8] = er), (R[9] = w)) : (w = R[9]),
        (0, u.K)("git.mergePullRequest", b, w),
        R[10] !== U
          ? ((I = function (e) {
              U.get(c.Id).danger(e, { errorAnalytics: { toastId: "pullRequestDetailActions.showError" } })
            }),
            (R[10] = U),
            (R[11] = I))
          : (I = R[11]))
      let el = I
      R[12] !== $ || R[13] !== V || R[14] !== U || R[15] !== F
        ? ((M = function () {
            F &&
              "squash" !== V &&
              (0, g.gc)(U, s.Ugj.pullRequestMergeMethod, "squash").catch(() => {
                U.get(c.Id).danger(
                  $.formatMessage({
                    id: "pullRequestDetail.actions.squashPreferenceError",
                    defaultMessage: "Couldn\u2019t save squash as your default merge method",
                  }),
                  { errorAnalytics: { toastId: "pullRequestDetail.actions.squashPreferenceError" } },
                )
              })
          }),
          (R[12] = $),
          (R[13] = V),
          (R[14] = U),
          (R[15] = F),
          (R[16] = M))
        : (M = R[16])
      let ea = M
      R[17] !== D || R[18] !== B || R[19] !== U || R[20] !== el || R[21] !== en || R[22] !== T
        ? ((C = function (e) {
            let t = (0, h.U)(en, e, D.isDraft)
            ;((0, d.H)(U, {
              action: (function (e) {
                switch (e) {
                  case "close":
                    return "close"
                  case "mark-draft":
                    return "mark_draft"
                  case "mark-ready":
                    return "mark_ready"
                  case "reopen":
                  case "reopen-ready":
                    return "reopen"
                }
              })(t),
              item: D,
              surface: "thread_side_panel",
            }),
              U.get(p.RR, B)
                .mutateAsync({ ...B, action: t, source: "pull_request_board", workspaceRequest: T })
                .catch((e) => {
                  el(e.message)
                }))
          }),
          (R[17] = D),
          (R[18] = B),
          (R[19] = U),
          (R[20] = el),
          (R[21] = en),
          (R[22] = T),
          (R[23] = C))
        : (C = R[23])
      let es = C
      R[24] !== $ || R[25] !== et || R[26] !== el
        ? ((S = function (e, t) {
            if (t && "merge" === et && /merge commits are not allowed on this repository/i.test(e.message)) {
              ;(G(!0),
                el(
                  $.formatMessage({
                    id: "pullRequestDetail.actions.repoRestrictionError",
                    defaultMessage: "Merge commits are disabled in this repository; try again with squash",
                  }),
                ))
              return
            }
            el(e.message)
          }),
          (R[24] = $),
          (R[25] = et),
          (R[26] = el),
          (R[27] = S))
        : (S = R[27])
      let ei = S
      R[28] !== D ||
      R[29] !== $ ||
      R[30] !== B ||
      R[31] !== et ||
      R[32] !== ea ||
      R[33] !== U ||
      R[34] !== ei ||
      R[35] !== T
        ? ((q = function (e) {
            ;((0, d.H)(U, {
              action: e ? "enable_auto_merge" : "disable_auto_merge",
              item: D,
              surface: "thread_side_panel",
            }),
              U.get(p.RR, B)
                .mutateAsync({
                  ...B,
                  action: "toggle-auto-merge",
                  enabled: e,
                  mergeMethod: et,
                  source: "pull_request_board",
                  workspaceRequest: T,
                })
                .then(() => {
                  ;(e && ea(),
                    G(!1),
                    U.get(c.Id).success(
                      $.formatMessage({
                        id: "pullRequestsPage.detail.actions.enableAutoMerge.success",
                        defaultMessage: "Updated auto-merge",
                      }),
                    ))
                })
                .catch((t) => {
                  ei(t, e)
                }))
          }),
          (R[28] = D),
          (R[29] = $),
          (R[30] = B),
          (R[31] = et),
          (R[32] = ea),
          (R[33] = U),
          (R[34] = ei),
          (R[35] = T),
          (R[36] = q))
        : (q = R[36])
      let eo = q
      R[37] !== D ||
      R[38] !== $ ||
      R[39] !== B ||
      R[40] !== et ||
      R[41] !== ea ||
      R[42] !== U ||
      R[43] !== ei ||
      R[44] !== T
        ? ((_ = function () {
            ;((0, d.H)(U, { action: "merge", item: D, surface: "thread_side_panel" }),
              U.get(p.Cn, B)
                .mutateAsync({
                  expectedHeadRevision: D.headRevision,
                  mergeMethod: et,
                  source: "pull_request_board",
                  workspaceRequest: T,
                })
                .then(() => {
                  ;(ea(),
                    G(!1),
                    U.get(c.Id).success(
                      $.formatMessage({
                        id: "pullRequestsPage.detail.merge.success",
                        defaultMessage: "Merged pull request",
                      }),
                    ))
                })
                .catch((e) => {
                  ei(e, !0)
                }))
          }),
          (R[37] = D),
          (R[38] = $),
          (R[39] = B),
          (R[40] = et),
          (R[41] = ea),
          (R[42] = U),
          (R[43] = ei),
          (R[44] = T),
          (R[45] = _))
        : (_ = R[45])
      let eu = _
      if ("status-menu" === N) {
        let e
        return (
          R[46] !== E || R[47] !== Y || R[48] !== en || R[49] !== es
            ? ((e = (0, r.jsx)(j, { disabled: E, pendingStatus: Y, status: en, onStatusChange: es })),
              (R[46] = E),
              (R[47] = Y),
              (R[48] = en),
              (R[49] = es),
              (R[50] = e))
            : (e = R[50]),
          e
        )
      }
      let ec = !1 === z,
        ed = !0 === z,
        em = O.isPending,
        eg = D.isDraft,
        ep = W.isPending
      R[51] !== D || R[52] !== $ || R[53] !== E
        ? ((t = D),
          (n = E),
          (v = $),
          (A = n
            ? v.formatMessage({
                id: "pullRequestDetail.actions.merge.disabled.pending",
                defaultMessage: "Another pull request update is in progress",
              })
            : "closed" === t.state
              ? v.formatMessage({
                  id: "pullRequestDetail.actions.merge.disabled.closed",
                  defaultMessage: "Reopen this pull request before merging",
                })
              : t.isDraft
                ? v.formatMessage({
                    id: "pullRequestDetail.actions.merge.disabled.draft",
                    defaultMessage: "Mark this pull request ready for review before merging",
                  })
                : "conflicts" === t.mergeBlocker
                  ? v.formatMessage({
                      id: "pullRequestDetail.actions.merge.disabled.conflicts",
                      defaultMessage: "Resolve merge conflicts before merging",
                    })
                  : "unknown" === t.mergeBlocker
                    ? v.formatMessage({
                        id: "pullRequestDetail.actions.merge.disabled.unknown",
                        defaultMessage: "GitHub is still checking whether this can be merged",
                      })
                    : t.canMerge
                      ? null
                      : v.formatMessage({
                          id: "pullRequestDetail.actions.merge.disabled.blocked",
                          defaultMessage: "This pull request can\u2019t be merged yet",
                        })),
          (R[51] = D),
          (R[52] = $),
          (R[53] = E),
          (R[54] = A))
        : (A = R[54])
      let eh = "merge-menu" === N
      return (
        R[55] !== J ||
        R[56] !== Z ||
        R[57] !== D.isDraft ||
        R[58] !== H ||
        R[59] !== W.isPending ||
        R[60] !== Q ||
        R[61] !== eu ||
        R[62] !== ec ||
        R[63] !== ed ||
        R[64] !== A ||
        R[65] !== eh ||
        R[66] !== eo ||
        R[67] !== O.isPending
          ? ((k = (0, r.jsx)(f.M, {
              autoMergeDisabled: J,
              isAutoMergeDisabling: ec,
              isAutoMergeEnabled: Z,
              isAutoMergeEnabling: ed,
              isAutoMergePending: em,
              isDraft: eg,
              isMergePending: ep,
              mergeDisabled: H,
              mergeDisabledMessage: A,
              menuItem: eh,
              open: Q,
              onAutoMergeChange: eo,
              onMerge: eu,
              onOpenChange: K,
            })),
            (R[55] = J),
            (R[56] = Z),
            (R[57] = D.isDraft),
            (R[58] = H),
            (R[59] = W.isPending),
            (R[60] = Q),
            (R[61] = eu),
            (R[62] = ec),
            (R[63] = ed),
            (R[64] = A),
            (R[65] = eh),
            (R[66] = eo),
            (R[67] = O.isPending),
            (R[68] = k))
          : (k = R[68]),
        k
      )
    }
  },
  YUxQ(e, t, n) {
    n.d(
      t,
      {},
      {
        B: function (e, t) {
          return null != t
            ? t.position
            : null == e.line || null == e.path || null == e.side
              ? null
              : {
                  line: e.line,
                  path: e.path,
                  side: e.side,
                  start_line: e.startLine ?? void 0,
                  start_side: e.startSide ?? void 0,
                }
        },
        U: function (e, t, n) {
          switch (t) {
            case "closed":
              return "close"
            case "draft":
              return "mark-draft"
            case "open":
              if ("closed" !== e) return "mark-ready"
              return n ? "reopen-ready" : "reopen"
          }
        },
      },
    )
  },
  wrup(e, t, n) {
    var r = n("ABep"),
      l = n("QosV"),
      a = n("slpy"),
      s = n("qTvt"),
      i = n("Wf1j"),
      o = n("oyxz"),
      u = n("Sm6l"),
      c = n("bqtn"),
      d = n("bVeK"),
      m = n("RNul"),
      g = n("UxN3"),
      p = n("GCsp"),
      h = n("kO08")
    n.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            n,
            f,
            v,
            y,
            x,
            b,
            w,
            j,
            I,
            M = (0, l.c)(67),
            {
              autoMergeDisabled: C,
              isAutoMergeDisabling: S,
              isAutoMergeEnabled: q,
              isAutoMergeEnabling: _,
              isAutoMergePending: A,
              isDraft: k,
              isMergePending: R,
              mergeDisabled: P,
              mergeDisabledMessage: L,
              menuItem: D,
              menuIcon: N,
              open: T,
              onAutoMergeChange: U,
              onMerge: $,
              onOpenChange: B,
            } = e,
            E = void 0 !== D && D,
            O = (0, i.A)()
          if (R || _ || S) {
            let e, t
            if (R) {
              let t
              ;(M[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, r.jsx)(o.A, {
                    id: "pullRequestsPage.detail.actions.merging",
                    defaultMessage: "Merging\u2026",
                  })),
                  (M[0] = t))
                : (t = M[0]),
                (e = t))
            } else if (_) {
              let t
              ;(M[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, r.jsx)(o.A, {
                    id: "pullRequestsPage.detail.actions.enablingAutoMerge",
                    defaultMessage: "Enabling auto-merge\u2026",
                  })),
                  (M[1] = t))
                : (t = M[1]),
                (e = t))
            } else {
              let t
              ;(M[2] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, r.jsx)(o.A, {
                    id: "pullRequestsPage.detail.actions.disablingAutoMerge",
                    defaultMessage: "Disabling auto-merge\u2026",
                  })),
                  (M[2] = t))
                : (t = M[2]),
                (e = t))
            }
            return (
              M[3] !== e || M[4] !== E
                ? ((t = E
                    ? (0, r.jsx)(c.ms.Item, {
                        LeftIcon: m.y,
                        "aria-busy": !0,
                        "aria-live": "polite",
                        disabled: !0,
                        focusableWhenDisabled: !0,
                        children: e,
                      })
                    : (0, r.jsxs)(u.$, {
                        "aria-live": "polite",
                        className: "w-full justify-center py-3",
                        color: "secondary",
                        disabled: !0,
                        role: "status",
                        size: "medium",
                        children: [(0, r.jsx)(m.y, { "aria-hidden": !0, className: "icon-sm" }), e],
                      })),
                  (M[3] = e),
                  (M[4] = E),
                  (M[5] = t))
                : (t = M[5]),
              t
            )
          }
          let W = E && q,
            Q = void 0 === N ? d.SGL : void 0
          M[6] !== q ||
          M[7] !== A ||
          M[8] !== k ||
          M[9] !== R ||
          M[10] !== E ||
          M[11] !== P ||
          M[12] !== L ||
          M[13] !== $
            ? ((t = q
                ? null
                : (0, r.jsx)(c.ms.Item, {
                    disabled: k || P || A || R,
                    focusableWhenDisabled: P && null != L,
                    tooltipText: P ? L : void 0,
                    onSelect: (e) => {
                      ;(E && e.preventDefault(), $())
                    },
                    children: (0, r.jsx)(o.A, {
                      id: "pullRequestsPage.detail.actions.merge.menuItem",
                      defaultMessage: "Merge",
                    }),
                  })),
              (M[6] = q),
              (M[7] = A),
              (M[8] = k),
              (M[9] = R),
              (M[10] = E),
              (M[11] = P),
              (M[12] = L),
              (M[13] = $),
              (M[14] = t))
            : (t = M[14])
          let K = W ? Q : void 0,
            F = W ? N : void 0
          ;(M[15] !== q || M[16] !== E || M[17] !== U
            ? ((n = (e) => {
                ;(E && e.preventDefault(), U(!q))
              }),
              (M[15] = q),
              (M[16] = E),
              (M[17] = U),
              (M[18] = n))
            : (n = M[18]),
            M[19] !== q
              ? ((f = q
                  ? (0, r.jsx)(o.A, {
                      id: "pullRequestsPage.detail.actions.disableAutoMerge",
                      defaultMessage: "Disable auto-merge",
                    })
                  : (0, r.jsx)(o.A, {
                      id: "pullRequestsPage.detail.actions.autoMerge.menuItem",
                      defaultMessage: "Enable auto-merge",
                    })),
                (M[19] = q),
                (M[20] = f))
              : (f = M[20]),
            M[21] !== C || M[22] !== W || M[23] !== K || M[24] !== F || M[25] !== n || M[26] !== f
              ? ((v = (0, r.jsx)(c.ms.Item, {
                  LeftIcon: K,
                  leftIcon: F,
                  disabled: C,
                  focusableWhenDisabled: W,
                  onSelect: n,
                  children: f,
                })),
                (M[21] = C),
                (M[22] = W),
                (M[23] = K),
                (M[24] = F),
                (M[25] = n),
                (M[26] = f),
                (M[27] = v))
              : (v = M[27]),
            M[28] !== t || M[29] !== v
              ? ((y = (0, r.jsxs)(r.Fragment, { children: [t, v] })), (M[28] = t), (M[29] = v), (M[30] = y))
              : (y = M[30]))
          let G = y
          if (E) {
            let e
            return (
              M[31] !== Q || M[32] !== G || M[33] !== N || M[34] !== W
                ? ((e = W
                    ? G
                    : (0, r.jsx)(c.ms.FlyoutSubmenuItem, {
                        LeftIcon: Q,
                        leftIcon: N,
                        contentWidth: "menu",
                        label: (0, r.jsx)(o.A, {
                          id: "pullRequestsPage.detail.actions.merge.trigger",
                          defaultMessage: "Merge",
                        }),
                        children: G,
                      })),
                  (M[31] = Q),
                  (M[32] = G),
                  (M[33] = N),
                  (M[34] = W),
                  (M[35] = e))
                : (e = M[35]),
              e
            )
          }
          if (q) {
            let e, t, n, l
            return (
              M[36] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(o.A, {
                    id: "pullRequestsPage.detail.actions.autoMerge.tooltip",
                    defaultMessage: "Your branch will be merged when all requirements are met",
                  })),
                  (M[36] = e))
                : (e = M[36]),
              M[37] !== U ? ((t = () => U(!1)), (M[37] = U), (M[38] = t)) : (t = M[38]),
              M[39] === Symbol.for("react.memo_cache_sentinel")
                ? ((n = (0, r.jsx)(o.A, {
                    id: "pullRequestsPage.detail.actions.disableAutoMerge",
                    defaultMessage: "Disable auto-merge",
                  })),
                  (M[39] = n))
                : (n = M[39]),
              M[40] !== C || M[41] !== t
                ? ((l = (0, r.jsx)(a.m, {
                    side: "bottom",
                    content: e,
                    children: (0, r.jsx)(u.$, {
                      className: "w-full justify-center py-3",
                      color: "secondary",
                      disabled: C,
                      size: "medium",
                      onClick: t,
                      children: n,
                    }),
                  })),
                  (M[40] = C),
                  (M[41] = t),
                  (M[42] = l))
                : (l = M[42]),
              l
            )
          }
          let V = k || (P && C) || void 0,
            H = k || A || (P && C)
          ;(M[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = (0, r.jsx)(h.A, { "aria-hidden": !0, className: "icon-sm" })),
              (b = (0, r.jsx)(o.A, { id: "pullRequestsPage.detail.actions.merge.trigger", defaultMessage: "Merge" })),
              (w = (0, r.jsx)(g.bF, {
                "aria-hidden": !0,
                className: "opacity-70",
                asset16: s.K,
                legacyIcon: p.A,
                legacyClassName: "icon-2xs",
              })),
              (M[43] = x),
              (M[44] = b),
              (M[45] = w))
            : ((x = M[43]), (b = M[44]), (w = M[45])),
            M[46] !== H || M[47] !== V
              ? ((j = (0, r.jsxs)(u.$, {
                  "aria-hidden": V,
                  className: "w-full justify-center py-3",
                  color: "secondary",
                  disabled: H,
                  size: "medium",
                  children: [x, b, w],
                })),
                (M[46] = H),
                (M[47] = V),
                (M[48] = j))
              : (j = M[48]))
          let z = j
          if (k || (P && C)) {
            let e, t, n, l
            M[49] !== O || M[50] !== k || M[51] !== L
              ? ((e = k
                  ? O.formatMessage({
                      id: "pullRequestDetail.actions.merge.disabled.draft",
                      defaultMessage: "Mark this pull request ready for review before merging",
                    })
                  : L),
                (M[49] = O),
                (M[50] = k),
                (M[51] = L),
                (M[52] = e))
              : (e = M[52])
            let s = e
            return null == s
              ? z
              : (M[53] !== O || M[54] !== s
                  ? ((t = O.formatMessage(
                      {
                        id: "pullRequestsPage.detail.actions.merge.disabled.label",
                        defaultMessage: "Merge unavailable: {reason}",
                      },
                      { reason: s },
                    )),
                    (M[53] = O),
                    (M[54] = s),
                    (M[55] = t))
                  : (t = M[55]),
                M[56] !== z || M[57] !== t
                  ? ((n = (0, r.jsx)("span", {
                      "aria-label": t,
                      "aria-disabled": "true",
                      className: "inline-flex w-full",
                      role: "button",
                      tabIndex: 0,
                      children: z,
                    })),
                    (M[56] = z),
                    (M[57] = t),
                    (M[58] = n))
                  : (n = M[58]),
                M[59] !== n || M[60] !== s
                  ? ((l = (0, r.jsx)(a.m, { content: s, children: n })), (M[59] = n), (M[60] = s), (M[61] = l))
                  : (l = M[61]),
                l)
          }
          return (
            M[62] !== G || M[63] !== z || M[64] !== B || M[65] !== T
              ? ((I = (0, r.jsx)(c.Ab, { align: "end", open: T, triggerButton: z, onOpenChange: B, children: G })),
                (M[62] = G),
                (M[63] = z),
                (M[64] = B),
                (M[65] = T),
                (M[66] = I))
              : (I = M[66]),
            I
          )
        },
      },
    )
  },
  JOzF(e, t, n) {
    var r = n("qmMi"),
      l = n("MiZI"),
      a = n("g3QY"),
      s = n("P8dk"),
      i = n("kVSf"),
      o = n("IReU"),
      u = n("zKjj"),
      c = n("OWtl"),
      d = n("tSEg"),
      m = n("M8aW"),
      g = n("P6qQ"),
      p = n("Y4Ny")
    let h = (0, r.c4)(c.u, (e) => ({
        mutationFn: (
          { body: t, onSuccess: n, replyToReviewThreadId: r, source: l = "pull_requests_page", workspaceRequest: a },
          { client: s },
        ) =>
          j(
            s,
            e,
            () =>
              (0, u.P)("gh-pr-comment", null == r ? { ...e, body: t } : { ...e, body: t, replyToReviewThreadId: r }, {
                source: l,
              }),
            {
              awaitRefresh: !1,
              onSuccess: () => {
                ;(S(s, e, t, r), n?.())
              },
              workspaceRequest: a,
            },
          ),
      })),
      f = (0, r.c4)(c.u, ({ request: e }) => ({
        mutationFn: (t, { client: n }) => {
          let { source: r = "pull_requests_page", workspaceRequest: l, ...a } = t
          return j(n, e, () => (0, u.P)("gh-pr-comment-update", { ...a, ...e }, { source: r }), {
            awaitRefresh: !1,
            onSuccess: () => {
              "update" === a.action && C(n, e, a)
            },
            refetchSearch: !1,
            workspaceRequest: l,
          })
        },
        onMutate: async (t, { client: n }) => {
          if ("delete" !== t.action) return
          let r = M(e, "gh-pr-discussion")
          await Promise.all(r.map(({ exact: e, queryKey: t }) => n.cancelQueries({ exact: e, queryKey: t })))
          let l = r.map(({ queryKey: e }) => ({ queryKey: e, status: n.getQueryData(e) }))
          return (C(n, e, t), l)
        },
        onError: (e, t, n, { client: r }) => {
          for (let { queryKey: e, status: t } of n ?? []) r.setQueryData(e, t)
        },
      })),
      v = (0, r.c4)(c.u, (e, { scope: t }) => ({
        mutationFn: (
          { action: n, onResolved: r, reviewThreadId: a, source: s = "pull_requests_page", workspaceRequest: i },
          { client: o },
        ) =>
          j(o, e, () => (0, u.P)("gh-pr-review-thread-update", { ...e, action: n, reviewThreadId: a }, { source: s }), {
            onSuccess:
              "resolve" === n
                ? () => {
                    ;(r?.(), (0, l.M9)(t, a, null))
                  }
                : void 0,
            workspaceRequest: i,
          }),
      })),
      y = (0, r.c4)(d.GD, ({ request: e, submissionKey: t }) => ({
        mutationFn: ({ comment: n, onSuccess: r }, { client: l }) => {
          let a = l.getQueryData((0, i.U)(e, "github-cli", "gh-pr-discussion")),
            s = new Set(
              a?.status === "success"
                ? a.commentAttachments.flatMap((e) => (null == e.reviewThreadId ? [] : [e.reviewThreadId]))
                : [],
            )
          return j(
            l,
            e,
            () => {
              let r = (0, g.GM)(n)
              return (0, u.P)(
                "gh-pr-comment",
                null == n.replyToReviewThreadId
                  ? { ...e, body: r, expectedHeadRevision: t.revision, inlineComment: (0, g.BI)(n) }
                  : { ...e, body: r, replyToReviewThreadId: n.replyToReviewThreadId },
                { source: "pull_requests_page" },
              )
            },
            {
              awaitRefresh: !1,
              onSuccess:
                null == n.replyToReviewThreadId
                  ? () => {
                      ;(S(l, e, (0, g.GM)(n), null, { comment: n, previousReviewThreadIds: s }), r())
                    }
                  : void 0,
            },
          )
        },
      })),
      x = (0, r.c4)(c.u, (e) => ({
        networkMode: "always",
        mutationFn: (t, { client: n }) => {
          let { source: r = "pull_requests_page", workspaceRequest: l, ...a } = t
          return j(n, e, () => (0, u.P)("gh-pr-update", { ...a, ...e }, { source: r }), {
            resources: I[a.action],
            deferRefreshWhilePending: "remove-reviewers" === a.action || "request-reviewers" === a.action,
            onSuccess: () => {
              "remove-reviewers" !== a.action && "request-reviewers" !== a.action && q(n, e, a)
            },
            workspaceRequest: l,
          })
        },
        onMutate: async (t, { client: n }) => {
          if ("remove-reviewers" !== t.action && "request-reviewers" !== t.action) return
          let r = M(e, "gh-pr-reviews")
          await Promise.all(r.map(({ exact: e, queryKey: t }) => n.cancelQueries({ exact: e, queryKey: t })))
          let l = r.map(({ queryKey: e }) => ({ queryKey: e, status: n.getQueryData(e) }))
          return (q(n, e, t), l)
        },
        onError: (e, t, n, { client: r }) => {
          if (null != n)
            for (let { queryKey: e, status: l } of n)
              r.setQueryData(e, (e) =>
                e?.status !== "success" || l?.status !== "success"
                  ? l
                  : "remove-reviewers" === t.action
                    ? {
                        ...e,
                        reviewers: {
                          ...e.reviewers,
                          requested: Array.from(
                            new Set([
                              ...l.reviewers.requested.filter(
                                (n) => e.reviewers.requested.includes(n) || t.reviewers.includes(n),
                              ),
                              ...e.reviewers.requested,
                            ]),
                          ),
                          requestedTeams: Array.from(
                            new Set([
                              ...l.reviewers.requestedTeams.filter(
                                (n) =>
                                  e.reviewers.requestedTeams.includes(n) ||
                                  t.teamReviewers.includes(l.reviewers.requestedTeamSlugs?.[n] ?? n),
                              ),
                              ...e.reviewers.requestedTeams,
                            ]),
                          ),
                        },
                      }
                    : "request-reviewers" === t.action
                      ? {
                          ...e,
                          reviewers: {
                            ...e.reviewers,
                            requested: e.reviewers.requested.filter(
                              (e) => !t.reviewers.includes(e) || l.reviewers.requested.includes(e),
                            ),
                          },
                        }
                      : l,
              )
        },
      })),
      b = (0, r.c4)(c.u, (e) => ({
        networkMode: "always",
        mutationFn: (
          { expectedHeadRevision: t, mergeMethod: n, source: r = "pull_requests_page", workspaceRequest: l },
          { client: a },
        ) =>
          j(a, e, () => (0, u.P)("gh-pr-merge", { ...e, expectedHeadRevision: t, mergeMethod: n }, { source: r }), {
            onSuccess: () => {
              q(a, e, { action: "merge" })
            },
            workspaceRequest: l,
          }),
      })),
      w = (0, r.i1)(c.u, (e, { get: t }) => t(x, e).isPending || t(b, e).isPending)
    async function j(
      e,
      t,
      n,
      {
        awaitRefresh: r = !0,
        deferRefreshWhilePending: l = !1,
        onSuccess: a,
        refetchSearch: o = !0,
        workspaceRequest: u,
        resources: c = ["gh-pr-summary", "gh-pr-mergeability", "gh-pr-metadata", "gh-pr-reviews", "gh-pr-discussion"],
      } = {},
    ) {
      let d = [
          "github",
          "pull-request",
          t.account.hostId,
          t.pullRequest.hostname,
          t.pullRequest.owner,
          t.pullRequest.repository,
          t.pullRequest.number,
        ],
        g = !1
      try {
        ;(await e
          .getMutationCache()
          .build(e, {
            mutationFn: async () => {
              let e = await n()
              if ("error" === e.status) throw Error(e.error)
            },
            mutationKey: d,
            retry: !1,
            networkMode: "always",
            scope: {
              id: [
                t.account.hostId,
                t.pullRequest.hostname.toLowerCase(),
                t.pullRequest.owner.toLowerCase(),
                t.pullRequest.repository.toLowerCase(),
                t.pullRequest.number,
              ].join("/"),
            },
          })
          .execute(void 0),
          (g = !0),
          await Promise.all(c.flatMap((e) => M(t, e)).map((t) => e.cancelQueries(t))),
          a?.())
      } finally {
        if (!l || 0 === e.isMutating({ mutationKey: d })) {
          let n =
            0 === e.isFetching({ queryKey: (0, s.Lc)(t) })
              ? []
              : ["gh-pr-summary", "gh-pr-body", "gh-pr-metadata", "gh-pr-reviews", "gh-pr-discussion"]
                  .filter((e) => !c.includes(e))
                  .map((e) => ({ queryKey: (0, i.U)(t, "github-connector", e), exact: !0 }))
                  .filter((t) => e.isFetching(t) > 0)
          await Promise.all([...n.map((t) => e.cancelQueries(t)), (0, s.zR)(e, t)])
          let l = Promise.allSettled([
            ...n.map((t) => e.invalidateQueries(t)),
            ...c.flatMap((e) => M(t, e)).map((t) => e.invalidateQueries(t)),
            e.invalidateQueries({ queryKey: (0, p.as)(t.account), refetchType: o ? "active" : "none" }),
            ...(null == u ? [] : [e.invalidateQueries({ queryKey: (0, m.IF)("gh-pr-board") })]),
          ])
          r && g && (await l)
        }
      }
    }
    let I = {
      "update-body": ["gh-pr-body"],
      "update-title": ["gh-pr-summary"],
      "request-reviewers": ["gh-pr-reviews", "gh-pr-summary", "gh-pr-mergeability"],
      "remove-reviewers": ["gh-pr-reviews", "gh-pr-summary", "gh-pr-mergeability"],
      "toggle-auto-merge": ["gh-pr-metadata", "gh-pr-summary", "gh-pr-mergeability"],
      "mark-draft": ["gh-pr-summary", "gh-pr-mergeability"],
      "mark-ready": ["gh-pr-summary", "gh-pr-mergeability"],
      close: ["gh-pr-summary", "gh-pr-metadata", "gh-pr-discussion", "gh-pr-mergeability"],
      reopen: ["gh-pr-summary", "gh-pr-metadata", "gh-pr-discussion", "gh-pr-mergeability"],
      "reopen-ready": ["gh-pr-summary", "gh-pr-metadata", "gh-pr-discussion", "gh-pr-mergeability"],
    }
    function M(e, t) {
      return ["github-cli", "github-connector"].map((n) => ({
        exact: !0,
        queryKey: (0, i.U)(e, "github-cli" === n ? "github-cli" : "github-connector", t),
      }))
    }
    function C(e, t, n) {
      for (let { queryKey: r } of M(t, "gh-pr-discussion"))
        e.setQueryData(r, (e) => {
          if (e?.status !== "success") return e
          let t =
            "delete" === n.action
              ? e.activityItems.find((e) => "event" !== e.type && "commit_group" !== e.type && e.nodeId === n.nodeId)
              : void 0
          return {
            ...e,
            activityItems: e.activityItems.flatMap((e) =>
              "event" === e.type || "commit_group" === e.type
                ? [e]
                : e.nodeId === n.nodeId
                  ? "delete" === n.action
                    ? []
                    : [{ ...e, body: n.body, rawBody: n.body }]
                  : e.replies?.some((e) => e.nodeId === n.nodeId) !== !0
                    ? [e]
                    : [
                        {
                          ...e,
                          replies: e.replies.flatMap((e) =>
                            e.nodeId !== n.nodeId
                              ? [e]
                              : "delete" === n.action
                                ? []
                                : [{ ...e, body: n.body, rawBody: n.body }],
                          ),
                        },
                      ],
            ),
            commentAttachments:
              t?.type !== "review_comment"
                ? e.commentAttachments
                : e.commentAttachments.filter((e) => e.reviewThreadId !== t.reviewThreadId),
          }
        })
    }
    function S(e, t, n, r, l) {
      let s = {
        authorLogin: t.account.login,
        body: n,
        createdAt: new Date().toISOString(),
        id: crypto.randomUUID(),
        url: null,
      }
      for (let { queryKey: i } of M(t, "gh-pr-discussion"))
        e.setQueryData(i, (e) =>
          e?.status !== "success"
            ? e
            : null != l
              ? e.commentAttachments.some(
                  (e) =>
                    null != e.reviewThreadId &&
                    !l.previousReviewThreadIds.has(e.reviewThreadId) &&
                    e.authorLogin?.toLowerCase() === t.account.login.toLowerCase() &&
                    (0, a.y6)({ ...e, content: l.comment.content }) === (0, a.y6)(l.comment) &&
                    (0, a.dj)(e).text === n,
                )
                ? e
                : {
                    ...e,
                    commentAttachments: [...e.commentAttachments, { ...l.comment, authorLogin: t.account.login }],
                  }
              : {
                  ...e,
                  activityItems:
                    null == r
                      ? [...e.activityItems, { ...s, type: "comment" }]
                      : e.activityItems.map((e) =>
                          "review_comment" === e.type && e.reviewThreadId === r
                            ? { ...e, replies: [...(e.replies ?? []), s] }
                            : e,
                        ),
                  commentAttachments:
                    null == r
                      ? e.commentAttachments
                      : e.commentAttachments.map((e) =>
                          e.reviewThreadId === r
                            ? (function (e, t, n) {
                                let r = null != e.authorLogin && null == (0, a.dj)(e).authorLogin
                                return {
                                  ...e,
                                  content: [
                                    ...e.content.map((t, n) =>
                                      0 === n && "text" === t.content_type && r
                                        ? {
                                            ...t,
                                            text: `@${e.authorLogin}:
${t.text}`,
                                          }
                                        : t,
                                    ),
                                    {
                                      content_type: "text",
                                      text: `

@${t}:
${n}`,
                                    },
                                  ],
                                }
                              })(e, t.account.login, n)
                            : e,
                        ),
                },
        )
    }
    function q(e, t, n) {
      ;(e.setQueriesData({ queryKey: (0, o.O)(t) }, (e) => {
        if (e?.status !== "success") return e
        switch (n.action) {
          case "merge":
          case "close":
            return {
              ...e,
              canMerge: !1,
              checks: [],
              checksComplete: !0,
              ciStatus: "none",
              hasPendingChecks: !1,
              hasOpenPr: !1,
              mergeBlocker: null,
              state: "merge" === n.action ? "merged" : "closed",
            }
          case "mark-draft":
            return { ...e, isDraft: !0, canMerge: !1 }
          case "mark-ready":
            return { ...e, isDraft: !1 }
          case "reopen":
          case "reopen-ready":
            return {
              ...e,
              hasOpenPr: !0,
              isDraft: !1,
              state: "open",
              checksComplete: !1,
              ciStatus: "pending",
              hasPendingChecks: !0,
              mergeBlocker: "unknown",
              canMerge: !1,
            }
          case "update-title":
            return { ...e, title: n.title }
          case "remove-reviewers":
          case "request-reviewers":
          case "toggle-auto-merge":
          case "update-body":
            return e
        }
      }),
        "update-body" === n.action
          ? e.setQueriesData({ queryKey: (0, i.U)(t, "github-cli", "gh-pr-body") }, (e) =>
              e?.status === "success" ? { ...e, body: n.body } : e,
            )
          : "toggle-auto-merge" === n.action
            ? e.setQueriesData({ queryKey: (0, i.U)(t, "github-cli", "gh-pr-metadata") }, (e) =>
                e?.status === "success" ? { ...e, isAutoMergeEnabled: n.enabled } : e,
              )
            : ("request-reviewers" === n.action || "remove-reviewers" === n.action) &&
              e.setQueriesData({ queryKey: (0, i.U)(t, "github-cli", "gh-pr-reviews") }, (e) =>
                e?.status !== "success"
                  ? e
                  : {
                      ...e,
                      reviewers: {
                        ...e.reviewers,
                        requested:
                          "request-reviewers" === n.action
                            ? Array.from(new Set([...e.reviewers.requested, ...n.reviewers]))
                            : e.reviewers.requested.filter((e) => !n.reviewers.includes(e)),
                        requestedTeams:
                          "remove-reviewers" === n.action
                            ? e.reviewers.requestedTeams.filter(
                                (t) => !n.teamReviewers.includes(e.reviewers.requestedTeamSlugs?.[t] ?? t),
                              )
                            : e.reviewers.requestedTeams,
                      },
                    },
              ))
    }
    n.d(t, {}, { Cn: b, DJ: y, Kc: w, RR: x, Su: v, nF: h, wW: f })
  },
  MUnn(e, t, n) {
    var r = n("iRMi"),
      l = n("yGJW"),
      a = n("feds")
    n.d(
      t,
      {},
      {
        H: function (e, { action: t, item: n, surface: s }) {
          var i
          ;(0, l.yy)(e, r.CodexPullRequestActionClicked, {
            action: t,
            surface: s,
            state:
              "canonical" in (i = n)
                ? "closed" === i.state
                  ? "closed"
                  : (0, a.S)({
                      canMerge: i.canMerge,
                      ciStatus: i.ciStatus,
                      hasMergeConflicts: "conflicts" === i.mergeBlocker,
                      status: "merged" === i.state ? "merged" : i.isDraft ? "draft" : "open",
                    })
                : i.state,
            isAuthor: n.isAuthor ?? void 0,
          })
        },
        s: function (e, { item: t, surface: n }) {
          ;(0, l.yy)(e, r.CodexPullRequestSelected, { surface: n, state: t.state, isAuthor: t.isAuthor ?? void 0 })
        },
      },
    )
  },
  rrDB(e, t, n) {
    var r = n("qmMi"),
      l = n("GaA7"),
      a = n("OWtl")
    let s = (0, r.un)(a.u, () => null == l.appServices || null != l.appServices.github)
    n.d(t, {}, { W: s })
  },
  mHH7(e, t, n) {
    var r = n("OZum"),
      l = n("alO6"),
      a = n("Hkqr")
    n.d(
      t,
      {},
      {
        i: function ({ intl: e, resolvedApps: t, status: n }) {
          let s
          switch (n.type) {
            case "thinking":
              s =
                n.reasoningSummaryLine ??
                e.formatMessage({ id: "realtimeVoice.codexStatus.thinking", defaultMessage: "Thinking" })
              break
            case "tool":
              switch (n.tool.type) {
                case "command":
                  s = e.formatMessage({
                    id: "realtimeVoice.codexStatus.runningCommand",
                    defaultMessage: "Running command",
                  })
                  break
                case "file-change":
                  s = e.formatMessage(
                    {
                      id: "realtimeVoice.codexStatus.editingFiles",
                      defaultMessage: "Editing {count, plural, =0 {files} one {a file} other {# files}}",
                    },
                    { count: n.tool.fileCount },
                  )
                  break
                case "mcp":
                  if (null == t && null == n.tool.appContext) return null
                  s = (0, l.EP)({
                    pluginId: n.tool.pluginId,
                    appContext: n.tool.appContext,
                    completed: !1,
                    intl: e,
                    matchingApp:
                      null == t
                        ? null
                        : (0, a.M)({
                            appContext: n.tool.appContext,
                            apps: t,
                            functionName: n.tool.functionName,
                            serverName: n.tool.invocation.server,
                            toolName: n.tool.invocation.tool,
                          }),
                    serverName: n.tool.invocation.server,
                    source: n.tool.source,
                    toolArguments: n.tool.invocation.arguments,
                    toolName: n.tool.invocation.tool,
                  })
                  break
                case "dynamic":
                  s =
                    "wait_threads" === n.tool.tool
                      ? e.formatMessage({
                          id: "realtimeVoice.codexStatus.waitingForThread",
                          defaultMessage: "Waiting for chat",
                        })
                      : (0, r.g)(n.tool.tool, { style: "sentence" })
                  break
                case "web-search":
                  s = n.tool.query.trim()
                    ? e.formatMessage(
                        {
                          id: "realtimeVoice.codexStatus.searchingWebFor",
                          defaultMessage: "Searching the web for {query}",
                        },
                        { query: n.tool.query },
                      )
                    : e.formatMessage({
                        id: "realtimeVoice.codexStatus.searchingWeb",
                        defaultMessage: "Searching the web",
                      })
              }
          }
          let i = "tool" === n.type ? n.activeToolCount - 1 : 0
          return {
            additionalToolsLabel:
              i > 0
                ? e.formatMessage(
                    { id: "realtimeVoice.codexStatus.additionalTools", defaultMessage: "+{count} more" },
                    { count: i },
                  )
                : null,
            label: s,
          }
        },
      },
    )
  },
  pcVU(e, t, n) {
    n.d(t, { l: () => m })
    var r = n("SZCv"),
      l = n.n(r),
      a = n("qmMi"),
      s = n("vdpW"),
      i = n("OWtl"),
      o = n("Faus"),
      u = n("v1hC"),
      c = n("bwpB")
    function d(e) {
      return (
        ("commandExecution" === e.type ||
          "fileChange" === e.type ||
          "mcpToolCall" === e.type ||
          "dynamicToolCall" === e.type) &&
        "inProgress" === e.status
      )
    }
    let m = (0, a.i1)(
      i.u,
      ({ locator: e, hideWhileResponding: t }, { get: n }) => {
        let r = n(s._2, null == e ? null : { hostId: e.hostId, threadId: e.conversationId }),
          l = n(s.OM, r)
        return null == r || "inProgress" !== l
          ? null
          : (function (e, { hideWhileResponding: t = !0 } = {}) {
              if (e?.status !== "inProgress") return null
              let n = e.items.at(-1),
                r = e.items.filter(d)
              n?.type === "webSearch" && r.push(n)
              let l = r.at(-1)
              if (null != l)
                return {
                  type: "tool",
                  activeToolCount: r.length,
                  tool: (function (e) {
                    switch (e.type) {
                      case "commandExecution":
                        return { type: "command" }
                      case "fileChange":
                        return { type: "file-change", fileCount: e.changes.length }
                      case "mcpToolCall":
                        if ("codex_app" === e.server) return { type: "dynamic", tool: e.tool }
                        return {
                          type: "mcp",
                          appContext: e.appContext,
                          pluginId: e.pluginId,
                          functionName: `${e.server}__${e.tool}`,
                          invocation: { arguments: e.arguments, server: e.server, tool: e.tool },
                          source: (0, c.MO)({ resultMeta: e.result?._meta ?? null, serverName: e.server }),
                        }
                      case "dynamicToolCall":
                        return { type: "dynamic", tool: e.tool }
                      case "webSearch":
                        return { type: "web-search", query: e.query }
                    }
                  })(l),
                }
              if (t && n?.type === "agentMessage" && n.text.trim().length > 0) return null
              for (let t = e.items.length - 1; t >= 0; t -= 1) {
                let n = e.items[t]
                if (n?.type !== "reasoning") continue
                let r = (0, o.S3)((0, u.W)(n.summary))
                if (null != r) return { type: "thinking", reasoningSummaryLine: r }
              }
              return { type: "thinking", reasoningSummaryLine: null }
            })(
              {
                items: (n(s.hm, r) ?? []).flatMap((e) => {
                  let t = n(s.mz, { ...r, itemId: e })
                  return null == t ? [] : [t]
                }),
                status: l,
              },
              { hideWhileResponding: t },
            )
      },
      { isEqual: l() },
    )
  },
  ijVv(e, t, n) {
    n.d(t, { openThreadPullRequestCodeTab: () => f })
    var r = n("ZU27"),
      l = n("svjy"),
      a = n("bDs9"),
      s = n("fiy3"),
      i = n("Y4Ny"),
      o = n("ABep"),
      u = n("EpL9"),
      c = n("bVeK"),
      d = n("Bbed")
    let m = (0, d._)(
        async () => {
          let { PullRequestRevisionTab: e } = await Promise.all([
            n.e(222773),
            n.e(198667),
            n.e(579325),
            n.e(712262),
            n.e(978338),
            n.e(904485),
            n.e(777710),
            n.e(923712),
            n.e(322496),
            n.e(53010),
            n.e(644312),
            n.e(198911),
            n.e(95962),
            n.e(178155),
            n.e(576312),
            n.e(289491),
            n.e(208433),
            n.e(429508),
            n.e(431390),
            n.e(830978),
            n.e(12283),
            n.e(566910),
            n.e(430073),
            n.e(973541),
            n.e(999152),
            n.e(157299),
          ]).then(n.bind(n, "KG0S"))
          return e
        },
        { fallback: ({ renderSlots: e }) => e({ headerRows: [], content: null }), propagateLoadError: !0 },
      ),
      g = (0, d._)(
        async () => {
          let { RegisteredPullRequestThumbnail: e } = await n.e(902295).then(n.bind(n, "WY1u"))
          return e
        },
        { propagateLoadError: !0 },
      )
    var p = n("XXJV")
    let h = (function ({ open: e }) {
      return (0, u.v)("pull-request-code", m, {
        defaultState: () => ({ snapshot: null, commitSha: null }),
        getIcon: () => (0, o.jsx)(c.JJf, {}),
        isAvailable: () => !0,
        open: e,
        renderThumbnail: (e, t) =>
          (0, o.jsx)(g, { props: { request: { provider: "github", ...e.request } }, title: t.title }),
      })
    })({ open: f })
    function f(e, t, n, o = !1, u = "right") {
      let c,
        d,
        m,
        g,
        v,
        y =
          ((c = {
            ...t.pullRequest,
            hostname: (0, s.jU)(t.pullRequest.hostname),
            owner: t.pullRequest.owner.toLowerCase(),
            repository: t.pullRequest.repository.toLowerCase(),
          }),
          (d = { account: (0, s.Qn)(t.account), pullRequest: c }),
          (m = (0, s.QC)(c)),
          (g = `pull-request-code:${encodeURIComponent(t.account.hostId)}|${m}`),
          {
            id: g,
            props: { request: d },
            title:
              (v = n ?? e.get(i.in, { request: t, source: "pull_requests_page" }).data?.title ?? "").trim() ||
              (0, a.g)(e.get(l.g), "github", c.number),
            tooltip: `${c.hostname}/${c.owner}/${c.repository} #${c.number} \u{2014} ${v} (${t.account.hostId})`,
          }),
        x = y.id,
        b = (0, p.KE)(e, x),
        w = b ?? (h.dropDestinations.includes(u) ? u : "right")
      return (
        (0, r.AP)(e, h, { ...y, kind: "pull-request-code", requiresWorkspaceReady: !1, target: w, revealAndFocus: !0 }),
        o && (0, p.getThreadPanelTabController)(w).updateTabState(e, x, () => ({ snapshot: null, commitSha: null })),
        (0, p.yI)(e, w),
        { tabId: x, placement: w, status: null == b ? "opened" : "existing" }
      )
    }
  },
  H1HH(e, t, n) {
    var r = n("QosV"),
      l = n("qmMi"),
      a = n("DBCl"),
      s = n("zd8w"),
      i = n("F5N3"),
      o = n("tl5a"),
      u = n("rm5A"),
      c = n("vdpW"),
      d = n("HwRo"),
      m = n("OWtl"),
      g = n("tSEg"),
      p = n("nf3G"),
      h = n("V3rO"),
      f = n("RxZZ"),
      v = n("OMIV"),
      y = n("O666")
    let x = (0, l.i1)(m.u, (e, { get: t }) => {
      !t(v.JW, "1799487541") && (0, f.CN)(t, a.Szl.showContextWindowUsage) && t(o.Pd, e)
    })
    function b() {
      return null
    }
    n.d(
      t,
      {},
      {
        E: function (e) {
          let t,
            n = (0, r.c)(5),
            { threadKey: a } = e,
            m = (0, l.gh)(g.GD),
            f = (0, s.useContext)(i.$w),
            v = (0, s.useRef)(null),
            w = a?.hostId,
            j = a?.threadId
          n[0] !== w || n[1] !== f || n[2] !== m || n[3] !== j
            ? ((t = () => {
                let e = v.current
                if (
                  (e?.cancelRelease?.(),
                  null == e ||
                    e.scope !== m ||
                    e.owner !== f ||
                    e.threadKey?.hostId !== w ||
                    e.threadKey?.threadId !== j)
                ) {
                  var t, n
                  e?.stop()
                  let r = null == w || null == j ? void 0 : { hostId: w, threadId: j }
                  v.current = e = {
                    scope: m,
                    owner: f,
                    threadKey: r,
                    stop:
                      ((t = m),
                      (n = r),
                      t.watch(({ get: e }) => {
                        let t = n?.threadId ?? e(h.dY)
                        if (null == t) return
                        let r = n ?? { hostId: e(p.threadHostId$), threadId: t }
                        ;(e(c.Ct, r),
                          e(c.fl, r),
                          e(o.K$, r),
                          e(o.Fe, r),
                          e(o.yH, t),
                          e(x, r),
                          (0, d.wH)() &&
                            e(y.H$, { layer: "2138468235", parameter: "enable_mcp_apps", disableExposureLog: !0 }) &&
                            e(u.B, r))
                      })),
                  }
                }
                let r = e
                return () => {
                  let e = () => {
                    ;(r.stop(), v.current === r && (v.current = null))
                  }
                  null == f ? e() : (r.cancelRelease = (0, i.UO)(f, e))
                }
              }),
              (n[0] = w),
              (n[1] = f),
              (n[2] = m),
              (n[3] = j),
              (n[4] = t))
            : (t = n[4])
          let I = t
          return ((0, s.useSyncExternalStore)(I, b, b), null)
        },
      },
    )
  },
  miXB(e, t, n) {
    var r = n("ABep"),
      l = n("QosV"),
      a = n("zd8w"),
      s = n("bVeK"),
      i = n("SUhA"),
      o = n("W4GL")
    n.d(
      t,
      {},
      {
        X: function (e) {
          let t,
            n,
            u,
            c = (0, l.c)(11),
            { src: d, conversationId: m, hostId: g, imageAssetResolver: p, variant: h } = e,
            f = void 0 === h ? "preview" : h,
            v = m ?? null
          c[0] !== g || c[1] !== p || c[2] !== d || c[3] !== v
            ? ((t = { src: d, conversationId: v, hostId: g, imageAssetResolver: p, shouldLoadFileDataUrl: !1 }),
              (c[0] = g),
              (c[1] = p),
              (c[2] = d),
              (c[3] = v),
              (c[4] = t))
            : (t = c[4])
          let { previewSrc: y } = (0, i.D)(t),
            [x, b] = (0, a.useState)(null)
          return (
            c[5] !== x || c[6] !== y
              ? ((n =
                  null == y || y === x
                    ? (0, r.jsx)(s.Gdf, {})
                    : (0, r.jsx)("img", {
                        alt: "",
                        className: "size-full shrink-0 rounded-[inherit] border border-default object-cover",
                        decoding: "async",
                        loading: "lazy",
                        referrerPolicy: "no-referrer",
                        src: y,
                        onError: () => b(y),
                      })),
                (c[5] = x),
                (c[6] = y),
                (c[7] = n))
              : (n = c[7]),
            c[8] !== n || c[9] !== f
              ? ((u = (0, r.jsx)(o.x.ItemLeading, { variant: f, children: n })), (c[8] = n), (c[9] = f), (c[10] = u))
              : (u = c[10]),
            u
          )
        },
      },
    )
  },
  CrJX(e, t, n) {
    n.d(t, { t: () => ec })
    var r = n("ABep"),
      l = n("QosV"),
      a = n("qmMi"),
      s = n("DBCl"),
      i = n("zd8w"),
      o = n("Wf1j"),
      u = n("oyxz"),
      c = n("Qgfj"),
      d = n("ChYf"),
      m = n("wHBU"),
      g = n("bqtn"),
      p = n("tWaO"),
      h = n("ZtSy"),
      f = n("Rcr1"),
      v = n("Ot7V"),
      y = n("bVeK"),
      x = n("KIKs"),
      b = n("x8co"),
      w = n("i6yo"),
      j = n("MdT9"),
      I = n("bDs9"),
      M = n("c1xW"),
      C = n("rBiz"),
      S = n("fiy3"),
      q = n("MUnn"),
      _ = n("Y4Ny"),
      A = n("rrDB"),
      k = n("ZS5A"),
      R = n("O3D5"),
      P = n("Sd8U"),
      L = n("ijVv"),
      D = n("NRHd"),
      N = n("a8tI"),
      T = n("tSEg"),
      U = n("gAOF")
    function $(e) {
      let t,
        n,
        s,
        o,
        u,
        c,
        d = (0, l.c)(17)
      d[0] !== e
        ? (({ onOpenChange: n, onCloseAutoFocus: t, ...s } = e), (d[0] = e), (d[1] = t), (d[2] = n), (d[3] = s))
        : ((t = d[1]), (n = d[2]), (s = d[3]))
      let m = (0, a.gh)(T.GD),
        p = (0, i.useId)(),
        h = (0, a._U)(U.o, p)
      return (
        d[4] !== p || d[5] !== t || d[6] !== m
          ? ((o = (e) => {
              let n = m.get(U.D)
              ;(null != n && n !== p && e.preventDefault(), t?.(e))
            }),
            (d[4] = p),
            (d[5] = t),
            (d[6] = m),
            (d[7] = o))
          : (o = d[7]),
        d[8] !== p || d[9] !== n || d[10] !== m
          ? ((u = (e) => {
              ;(m.set(U.D, (t) => (e ? p : t === p ? null : t)), n?.(e))
            }),
            (d[8] = p),
            (d[9] = n),
            (d[10] = m),
            (d[11] = u))
          : (u = d[11]),
        d[12] !== h || d[13] !== s || d[14] !== o || d[15] !== u
          ? ((c = (0, r.jsx)(g.Ab, { ...s, open: h, onCloseAutoFocus: o, onOpenChange: u })),
            (d[12] = h),
            (d[13] = s),
            (d[14] = o),
            (d[15] = u),
            (d[16] = c))
          : (c = d[16]),
        c
      )
    }
    var B = n("kIfn"),
      E = n("W4GL"),
      O = n("aepO"),
      W = n("jMz3"),
      Q = n("UAo1"),
      K = n("x0Jl"),
      F = n("d21A")
    function G(e) {
      let t,
        n,
        a,
        s,
        o,
        u = (0, l.c)(8)
      u[0] !== e ? (({ hostedReviewUrl: t, ...n } = e), (u[0] = e), (u[1] = t), (u[2] = n)) : ((t = u[1]), (n = u[2]))
      let c = (0, i.useRef)(null)
      return (
        u[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (e) => {
              if (null == e) return
              let t = new MutationObserver(() => {
                c.current?.isConnected === !1 &&
                  e.ownerDocument.activeElement === e.ownerDocument.body &&
                  e.querySelector('[role="menuitem"]:not([data-disabled])')?.focus()
              })
              return (t.observe(e, { childList: !0, subtree: !0 }), () => t.disconnect())
            }),
            (s = (e) => {
              c.current = e.target
            }),
            (u[3] = a),
            (u[4] = s))
          : ((a = u[3]), (s = u[4])),
        u[5] !== t || u[6] !== n
          ? ((o = (0, r.jsx)("div", {
              ref: a,
              onFocusCapture: s,
              children: null != t ? (0, r.jsx)(V, { url: t, placement: n.placement }) : (0, r.jsx)(z, { ...n }),
            })),
            (u[5] = t),
            (u[6] = n),
            (u[7] = o))
          : (o = u[7]),
        o
      )
    }
    function V(e) {
      let t,
        n,
        s = (0, l.c)(5),
        { url: i, placement: o } = e
      s[0] !== i ? ((t = { url: i }), (s[0] = i), (s[1] = t)) : (t = s[1])
      let u = (0, a._U)(K.u, t)
      return (
        s[2] !== o || s[3] !== u
          ? ((n =
              null == u
                ? (0, r.jsx)(Y, { loading: void 0 === u, placement: o })
                : (0, r.jsx)(H, { request: u, placement: o })),
            (s[2] = o),
            (s[3] = u),
            (s[4] = n))
          : (n = s[4]),
        n
      )
    }
    function H(e) {
      let t,
        n,
        s,
        i = (0, l.c)(10),
        { request: o, placement: u } = e
      i[0] !== o ? ((t = { request: o, source: "pull_request_board" }), (i[0] = o), (i[1] = t)) : (t = i[1])
      let { data: c, isPending: d, isError: m } = (0, a._U)(Q.in, t)
      i[2] !== d || i[3] !== u
        ? ((n = (0, r.jsx)(Y, { loading: d, placement: u })), (i[2] = d), (i[3] = u), (i[4] = n))
        : (n = i[4])
      let g = n
      if (null == c || m || "merged" === c.state || ("merge-menu" === u && "open" !== c.state)) return g
      let p = "status-menu" === u ? "status" : "header"
      return (
        i[5] !== c || i[6] !== o.account || i[7] !== p || i[8] !== g
          ? ((s = (0, r.jsx)(W.B, {
              account: o.account,
              detail: c,
              placement: p,
              surface: "thread_side_panel",
              unavailable: g,
              menu: !0,
            })),
            (i[5] = c),
            (i[6] = o.account),
            (i[7] = p),
            (i[8] = g),
            (i[9] = s))
          : (s = i[9]),
        s
      )
    }
    function z(e) {
      let t,
        n,
        s = (0, l.c)(9),
        { hostId: i, pullRequest: o, placement: u, workspaceRequest: c } = e
      s[0] !== i || s[1] !== o.hostname
        ? ((t = { hostId: i, hostname: o.hostname, source: "pull_request_board" }),
          (s[0] = i),
          (s[1] = o.hostname),
          (s[2] = t))
        : (t = s[2])
      let { data: d, isPending: m } = (0, a._U)(_.currentGitHubUserQuery$, t)
      return (
        s[3] !== d || s[4] !== m || s[5] !== u || s[6] !== o || s[7] !== c
          ? ((n =
              d?.status === "success"
                ? (0, r.jsx)(X, { request: { account: d.account, pullRequest: o }, placement: u, workspaceRequest: c })
                : (0, r.jsx)(Y, { loading: m, placement: u })),
            (s[3] = d),
            (s[4] = m),
            (s[5] = u),
            (s[6] = o),
            (s[7] = c),
            (s[8] = n))
          : (n = s[8]),
        n
      )
    }
    function X(e) {
      let t,
        n,
        s = (0, l.c)(10),
        { request: i, placement: o, workspaceRequest: u } = e
      s[0] !== i ? ((t = { request: i, source: "pull_request_board" }), (s[0] = i), (s[1] = t)) : (t = s[1])
      let { data: c, isPending: d } = (0, a._U)(_.in, t)
      if (
        c?.status !== "success" ||
        !c.canonical ||
        !c.isAuthor ||
        "merged" === c.state ||
        ("merge-menu" === o && "open" !== c.state)
      ) {
        let e
        return (
          s[2] !== d || s[3] !== o
            ? ((e = (0, r.jsx)(Y, { loading: d, placement: o })), (s[2] = d), (s[3] = o), (s[4] = e))
            : (e = s[4]),
          e
        )
      }
      return (
        s[5] !== c || s[6] !== o || s[7] !== i.account || s[8] !== u
          ? ((n = (0, r.jsx)(F.B, { account: i.account, detail: c, placement: o, workspaceRequest: u })),
            (s[5] = c),
            (s[6] = o),
            (s[7] = i.account),
            (s[8] = u),
            (s[9] = n))
          : (n = s[9]),
        n
      )
    }
    function Y(e) {
      let t,
        n,
        a,
        s = (0, l.c)(10),
        { loading: i, placement: o } = e
      s[0] !== i
        ? ((t = i
            ? (0, r.jsx)(u.A, {
                id: "codex.localConversation.gitSummary.loadingPrActions",
                defaultMessage: "Loading actions\u2026",
              })
            : (0, r.jsx)(u.A, {
                id: "codex.localConversation.gitSummary.unavailablePrActions",
                defaultMessage: "No available actions",
              })),
          (s[0] = i),
          (s[1] = t))
        : (t = s[1])
      let c = t,
        d = "merge-menu" === o ? y.SGL : void 0,
        m = "merge-menu" === o,
        p = "merge-menu" === o ? c : void 0
      return (
        s[2] !== c || s[3] !== o
          ? ((n =
              "merge-menu" === o
                ? (0, r.jsx)(u.A, { id: "pullRequestsPage.detail.actions.merge.trigger", defaultMessage: "Merge" })
                : c),
            (s[2] = c),
            (s[3] = o),
            (s[4] = n))
          : (n = s[4]),
        s[5] !== d || s[6] !== m || s[7] !== p || s[8] !== n
          ? ((a = (0, r.jsx)(g.ms.Item, {
              LeftIcon: d,
              disabled: !0,
              focusableWhenDisabled: m,
              tooltipText: p,
              children: n,
            })),
            (s[5] = d),
            (s[6] = m),
            (s[7] = p),
            (s[8] = n),
            (s[9] = a))
          : (a = s[9]),
        a
      )
    }
    var Z = n("Q4pM"),
      J = n("DEUe")
    function ee(e) {
      let t,
        n,
        s,
        i,
        c,
        d,
        m,
        p,
        h,
        f,
        v,
        x,
        b,
        w,
        j,
        I,
        M,
        C,
        q,
        _ = (0, l.c)(74),
        { conversationId: A, pullRequestStatus: k, target: R } = e,
        L = (0, a.gh)(P.PR),
        D = (0, o.A)(),
        N = k.details
      if (null == N || "open" !== k.state) return null
      _[0] !== N.activityItems ? ((t = (0, Z.O6)(N.activityItems)), (_[0] = N.activityItems), (_[1] = t)) : (t = _[1])
      let T = t,
        U = k.url ?? N.url ?? N.boardItem?.url ?? null,
        $ = null == U ? null : (0, S.g0)(U)?.pullRequest,
        B = null == $ ? N.repo : `${$.hostname}/${$.owner}/${$.repository}`,
        E = $?.number ?? N.number
      _[2] !== N.checks ? ((n = N.checks.filter(et)), (_[2] = N.checks), (_[3] = n)) : (n = _[3])
      let O = n,
        W = N.boardItem?.headBranch ?? k.headBranch,
        Q = null != k.baseBranch && null != W && null != E,
        K = Q && null != A && T.length > 0,
        F = Q && O.length > 0,
        G = "conflicts" === N.mergeBlocker
      _[4] !== G || _[5] !== W || _[6] !== E || _[7] !== B || _[8] !== k.baseBranch || _[9] !== U
        ? ((s =
            G && null != k.baseBranch && null != W && null != E && null != U
              ? { baseBranch: k.baseBranch, headBranch: W, number: E, repo: B, url: U }
              : null),
          (_[4] = G),
          (_[5] = W),
          (_[6] = E),
          (_[7] = B),
          (_[8] = k.baseBranch),
          (_[9] = U),
          (_[10] = s))
        : (s = _[10])
      let V = s,
        H = Q && (0 === T.length || null != A) && (!G || null != U),
        z = T.length + O.length + +!!G
      _[11] !== D
        ? ((i = D.formatMessage({ id: "codex.localConversation.gitSummary.repair", defaultMessage: "Repair" })),
          (_[11] = D),
          (_[12] = i))
        : (i = _[12])
      let X = !K && !F && null == V
      ;(_[13] !== z
        ? ((c = z > 0 ? (0, r.jsx)("span", { className: "text-danger", children: z }) : null), (_[13] = z), (_[14] = c))
        : (c = _[14]),
        _[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, r.jsx)(u.A, { id: "codex.localConversation.gitSummary.repair", defaultMessage: "Repair" })),
            (_[15] = d))
          : (d = _[15]))
      let Y = !K,
        ee = T.length > 0 ? T.length : null
      ;(_[16] !== T ||
      _[17] !== A ||
      _[18] !== W ||
      _[19] !== E ||
      _[20] !== B ||
      _[21] !== L ||
      _[22] !== k.baseBranch ||
      _[23] !== R
        ? ((m = () =>
            (0, Z.sK)(L, {
              baseBranch: k.baseBranch,
              comments: T,
              conversationId: A,
              focusComposer: !0,
              headBranch: W,
              number: E,
              repo: B,
              target: R,
            })),
          (_[16] = T),
          (_[17] = A),
          (_[18] = W),
          (_[19] = E),
          (_[20] = B),
          (_[21] = L),
          (_[22] = k.baseBranch),
          (_[23] = R),
          (_[24] = m))
        : (m = _[24]),
        _[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, r.jsx)(u.A, {
              id: "codex.localConversation.gitSummary.repairComments",
              defaultMessage: "Comments",
            })),
            (_[25] = p))
          : (p = _[25]),
        _[26] !== m || _[27] !== Y || _[28] !== ee
          ? ((h = (0, r.jsx)(g.ms.Item, { LeftIcon: y.LI0, disabled: Y, rightIcon: ee, onSelect: m, children: p })),
            (_[26] = m),
            (_[27] = Y),
            (_[28] = ee),
            (_[29] = h))
          : (h = _[29]))
      let en = !F,
        er = O.length > 0 ? O.length : null
      ;(_[30] !== O || _[31] !== W || _[32] !== E || _[33] !== B || _[34] !== L || _[35] !== k.baseBranch || _[36] !== R
        ? ((f = () =>
            (0, J.XW)(L, { baseBranch: k.baseBranch, checks: O, headBranch: W, number: E, repo: B, target: R })),
          (_[30] = O),
          (_[31] = W),
          (_[32] = E),
          (_[33] = B),
          (_[34] = L),
          (_[35] = k.baseBranch),
          (_[36] = R),
          (_[37] = f))
        : (f = _[37]),
        _[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, r.jsx)(u.A, {
              id: "codex.localConversation.gitSummary.repairChecks",
              defaultMessage: "Failing checks",
            })),
            (_[38] = v))
          : (v = _[38]),
        _[39] !== en || _[40] !== er || _[41] !== f
          ? ((x = (0, r.jsx)(g.ms.Item, { LeftIcon: y.TlE, disabled: en, rightIcon: er, onSelect: f, children: v })),
            (_[39] = en),
            (_[40] = er),
            (_[41] = f),
            (_[42] = x))
          : (x = _[42]))
      let el = null == V,
        ea = G ? 1 : null
      ;(_[43] !== V || _[44] !== L || _[45] !== R
        ? ((b = () => (0, J.wj)(L, V, R)), (_[43] = V), (_[44] = L), (_[45] = R), (_[46] = b))
        : (b = _[46]),
        _[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, r.jsx)(u.A, {
              id: "codex.localConversation.gitSummary.repairMergeConflicts",
              defaultMessage: "Merge conflicts",
            })),
            (_[47] = w))
          : (w = _[47]),
        _[48] !== el || _[49] !== ea || _[50] !== b
          ? ((j = (0, r.jsx)(g.ms.Item, { LeftIcon: y.SGL, disabled: el, rightIcon: ea, onSelect: b, children: w })),
            (_[48] = el),
            (_[49] = ea),
            (_[50] = b),
            (_[51] = j))
          : (j = _[51]))
      let es = !H || 0 === z
      return (
        _[52] !== A ||
        _[53] !== N ||
        _[54] !== W ||
        _[55] !== E ||
        _[56] !== B ||
        _[57] !== L ||
        _[58] !== k.baseBranch ||
        _[59] !== R ||
        _[60] !== U
          ? ((I = () =>
              (0, J.AD)(L, {
                baseBranch: k.baseBranch,
                conversationId: A,
                headBranch: W,
                pullRequestStatus: { ...N, number: E, repo: B, url: U },
                target: R,
              })),
            (_[52] = A),
            (_[53] = N),
            (_[54] = W),
            (_[55] = E),
            (_[56] = B),
            (_[57] = L),
            (_[58] = k.baseBranch),
            (_[59] = R),
            (_[60] = U),
            (_[61] = I))
          : (I = _[61]),
        _[62] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, r.jsx)(u.A, {
              id: "codex.localConversation.gitSummary.repairEverything",
              defaultMessage: "Everything",
            })),
            (_[62] = M))
          : (M = _[62]),
        _[63] !== es || _[64] !== I
          ? ((C = (0, r.jsx)(g.ms.Item, { LeftIcon: y.wbR, disabled: es, onSelect: I, children: M })),
            (_[63] = es),
            (_[64] = I),
            (_[65] = C))
          : (C = _[65]),
        _[66] !== h || _[67] !== x || _[68] !== j || _[69] !== C || _[70] !== i || _[71] !== X || _[72] !== c
          ? ((q = (0, r.jsxs)(g.ms.FlyoutSubmenuItem, {
              ariaLabel: i,
              LeftIcon: y.FJG,
              disabled: X,
              rightIcon: c,
              contentWidth: "menu",
              label: d,
              children: [h, x, j, C],
            })),
            (_[66] = h),
            (_[67] = x),
            (_[68] = j),
            (_[69] = C),
            (_[70] = i),
            (_[71] = X),
            (_[72] = c),
            (_[73] = q))
          : (q = _[73]),
        q
      )
    }
    function et(e) {
      return "failing" === e.status
    }
    var en = n("CiLO"),
      er = n("jEN2"),
      el = n("SGsN"),
      ea = n("svjy"),
      es = n("rkZ2")
    function ei(e, t, n, r) {
      let l = t.details,
        a = t.url ?? l?.url ?? l?.boardItem?.url,
        s = null == a ? null : (0, S.g0)(a)?.pullRequest,
        i = null == s ? t.repo : `${s.hostname}/${s.owner}/${s.repository}`,
        o = l?.activityItems.filter((e) => "comment" === e.type || "review" === e.type || "review_comment" === e.type),
        u = o?.filter((e) => !0 !== e.isResolved && e.body.trim().length > 0),
        c = l?.checks,
        d = c?.filter((e) => "failing" === e.status || "pending" === e.status),
        m = [
          `Pull request: ${a ?? t.number ?? "unknown"}`,
          null == t.title ? null : `Title: ${t.title}`,
          `Repository: ${i ?? "unknown"}; host: ${n}${null == r ? "" : `; workspace: ${r.root}`}`,
          `Branch: ${t.headBranch ?? "unknown"} -> ${t.baseBranch ?? "unknown"}`,
          `Status: ${t.state}${t.isDraft ? " (draft)" : ""}`,
          l?.headRevision == null ? null : `Head revision: ${l.headRevision}`,
          null == l
            ? "Further PR details have not loaded; consult the PR URL."
            : `${"none" === l.reviewStatus ? "" : `Review: ${l.reviewStatus}; `}CI: ${l.ciStatus}; merge blocker: ${l.mergeBlocker ?? "none"}`,
          l?.body ? `Summary: ${eu(l.body, 600)}` : null,
          null == c
            ? null
            : `Checks: ${c.length} total; ${c.filter((e) => "failing" === e.status).length} failing; ${c.filter((e) => "pending" === e.status).length} pending`,
          ...(d?.slice(0, 8).map((e) => `- ${e.status}: ${e.name}${e.link ? ` (${e.link})` : ""}`) ?? []),
          null != d && d.length > 8 ? `- ${d.length - 8} more checks; see PR` : null,
          null == o
            ? null
            : `Comments: ${o.length} total; ${l?.reviewers.unresolvedCommentCount ?? 0} unresolved review comments`,
          ...(u
            ?.slice(-5)
            .map(
              (e) =>
                `- ${e.authorLogin ?? "Unknown author"}${e.path ? ` (${e.path}${null == e.line ? "" : `:${e.line}`})` : ""}: ${eu(e.body, 280)}${e.url ? ` (${e.url})` : ""}`,
            ) ?? []),
          null != u && u.length > 5 ? `- ${u.length - 5} more comments; see PR` : null,
        ]
      ;((0, en.gP)(
        e,
        m.filter((e) => null != e).join("\n"),
        null == s ? void 0 : { kind: "pull-request", hostId: n, pullRequest: s, title: t.title },
      ),
        (0, er.xJ)())
    }
    function eo(e, t, n) {
      let { pullRequest: r, title: l } = t,
        a = [
          `Pull request: ${t.url ?? (0, S.QC)(r)}`,
          null == l ? null : `Title: ${l}`,
          `Repository: ${r.hostname}/${r.owner}/${r.repository}; host: ${n}`,
          "PR status and details have not loaded; consult the PR URL.",
        ]
          .filter((e) => null != e)
          .join("\n")
      return e.get(es.SU) || e.get(es.pp, e.value.routeConversationId)
        ? !!(0, er.tN)((0, P.eL)(e.value), a) ||
            (e
              .get(el.Id)
              .warning(
                e
                  .get(ea.g)
                  .formatMessage({
                    id: "codex.localConversation.gitSummary.pullRequestComposerUnavailable",
                    defaultMessage: "Open an editable chat to add this pull request",
                    description:
                      "Shown when Add to chat cannot add a pull request reference because the current message editor is hidden, disabled, or unavailable",
                  }),
              ),
            !1)
        : ((0, en.gP)(e, a, { kind: "pull-request", hostId: n, pullRequest: r, title: l }), (0, er.xJ)(), !0)
    }
    function eu(e, t) {
      let n = e.replace(/\s+/g, " ").trim()
      return n.length > t ? `${n.slice(0, t)}\u{2026}` : n
    }
    function ec(e) {
      let t,
        n,
        c,
        d,
        p,
        f,
        x,
        w,
        M,
        C,
        k,
        R,
        T,
        U,
        W,
        Q,
        K,
        F,
        V,
        H,
        z = (0, l.c)(88),
        {
          conversationId: X,
          hostId: Y,
          onOpenCanonicalPullRequest: Z,
          onOpenPullRequestSidePanel: J,
          onOpenChanges: et,
          onRemove: en,
          pullRequestStatus: er,
          reference: el,
          onOpenReference: ea,
          repositoryTarget: es,
          reviewUrl: eu,
          statusKey: ec,
          visualState: ef,
        } = e,
        ey = (0, a.gh)(P.PR),
        ex = (0, o.A)(),
        eb = (0, i.useRef)(!1),
        ew = (0, a.Ul)(A.W),
        ej = er?.details?.boardItem ?? null,
        eI = er?.details?.canonical ? er.details : ej
      z[0] !== ej?.url || z[1] !== er || z[2] !== el
        ? ((t = null == el ? (er.url ?? ej?.url ?? null) : (el.url ?? (0, S.QC)(el.pullRequest))),
          (z[0] = ej?.url),
          (z[1] = er),
          (z[2] = el),
          (z[3] = t))
        : (t = z[3])
      let eM = t
      if (
        z[4] !== eu ||
        z[5] !== ej ||
        z[6] !== X ||
        z[7] !== Y ||
        z[8] !== ex ||
        z[9] !== ew ||
        z[10] !== et ||
        z[11] !== J ||
        z[12] !== en ||
        z[13] !== er ||
        z[14] !== el ||
        z[15] !== es ||
        z[16] !== ec ||
        z[17] !== eM
      ) {
        M = Symbol.for("react.early_return_sentinel")
        e: {
          let e = null == eM ? null : (0, S.g0)(eM)
          if (
            ((x = eu ?? er?.hostedReviewUrl),
            (f = (null == eM ? null : (0, S.XT)(eM)) ?? (e?.preserveDestination ? e.pullRequest : null)),
            e?.provider === "gitlab" &&
              ("gitlab.com" === e.pullRequest.hostname || er?.hostedReviewUrl != null) &&
              null != eM)
          ) {
            M = (0, r.jsx)(eg, {
              onOpenChanges: et,
              conversationId: X,
              hostId: Y,
              onOpenPullRequestSidePanel: J,
              onRemove: en,
              pullRequest: e.pullRequest,
              referenceTitle: el?.title,
              reviewUrl: x,
              pullRequestStatus: er,
              repositoryTarget: es,
              url: eM,
            })
            break e
          }
          ;((C =
            null == er || null == es || null == ec.headBranch
              ? void 0
              : {
                  cwd: (0, s.DIv)(ec.cwd ?? es.cwd),
                  headBranch: ec.headBranch,
                  hostId: ec.hostId,
                  number: f?.number ?? er.number,
                  repo:
                    null == f
                      ? er.repo
                      : `${"github.com" === f.hostname ? "" : `${f.hostname}/`}${f.owner}/${f.repository}`,
                }),
            (d = !1),
            (n = null != (c = er?.hostedReviewUrl) || (!d && ew)),
            (p = null != J && (null != ej || null != f)),
            (w = (function (e, t, n, r, l) {
              if (null != t) return t
              if (null != e) return (0, I.g)(n, r, e, l)
              let a = n.formatMessage({
                id: "codex.localConversation.gitSummary.pullRequestFallbackNumber",
                defaultMessage: "-",
              })
              return n.formatMessage(
                { id: "codex.localConversation.gitSummary.pullRequestWithState", defaultMessage: "PR {number}" },
                { number: a },
              )
            })(
              er?.number ?? el?.pullRequest.number ?? null,
              er?.title ?? el?.title ?? null,
              ex,
              e?.provider ?? "github",
              eM ?? void 0,
            )))
        }
        ;((z[4] = eu),
          (z[5] = ej),
          (z[6] = X),
          (z[7] = Y),
          (z[8] = ex),
          (z[9] = ew),
          (z[10] = et),
          (z[11] = J),
          (z[12] = en),
          (z[13] = er),
          (z[14] = el),
          (z[15] = es),
          (z[16] = ec),
          (z[17] = eM),
          (z[18] = n),
          (z[19] = c),
          (z[20] = d),
          (z[21] = p),
          (z[22] = f),
          (z[23] = x),
          (z[24] = w),
          (z[25] = M),
          (z[26] = C))
      } else
        ((n = z[18]),
          (c = z[19]),
          (d = z[20]),
          (p = z[21]),
          (f = z[22]),
          (x = z[23]),
          (w = z[24]),
          (M = z[25]),
          (C = z[26]))
      if (M !== Symbol.for("react.early_return_sentinel")) return M
      let eC = w
      z[27] !== ex || z[28] !== eM
        ? ((k = null == eM ? null : (0, j.$)(eM)),
          (R = k?.filesUrl),
          (T = null == k ? void 0 : ex.formatMessage(k.openLabel)),
          (z[27] = ex),
          (z[28] = eM),
          (z[29] = k),
          (z[30] = R),
          (z[31] = T))
        : ((k = z[29]), (R = z[30]), (T = z[31]))
      let eS = T
      z[32] !== ej || z[33] !== ey
        ? ((U = () => {
            null != ej && (0, q.H)(ey, { action: "open_in_browser", item: ej, surface: "thread_side_panel" })
          }),
          (z[32] = ej),
          (z[33] = ey),
          (z[34] = U))
        : (U = z[34])
      let eq = U
      z[35] !== Y || z[36] !== eq || z[37] !== eM
        ? ((W = (e) => {
            null != eM && (eq(), (0, v.PQ)({ event: e, href: eM, initiator: "pull_request_link", originHostId: Y }))
          }),
          (z[35] = Y),
          (z[36] = eq),
          (z[37] = eM),
          (z[38] = W))
        : (W = z[38])
      let e_ = W
      z[39] !== ej ||
      z[40] !== Y ||
      z[41] !== d ||
      z[42] !== Z ||
      z[43] !== J ||
      z[44] !== ea ||
      z[45] !== p ||
      z[46] !== e_ ||
      z[47] !== f ||
      z[48] !== er?.repo ||
      z[49] !== es ||
      z[50] !== eC ||
      z[51] !== ey ||
      z[52] !== ec ||
      z[53] !== eM
        ? ((Q = (e) => {
            if (null != eM) {
              if (null != ea) return void ea(e)
              if (p)
                return (null != ej && null != es && (0, q.s)(ey, { item: ej, surface: "thread_side_panel" }),
                (0, m.C)(ey, { pullRequestUrl: eM, originHostId: Y, respectLinkPreference: !0 }))
                  ? void 0
                  : d
                    ? void e_(e)
                    : void (null != ej && null != es
                        ? J({
                            kind: "task",
                            provider: "github",
                            hostId: Y,
                            item: ej,
                            repo: er?.repo ?? null,
                            repositoryTarget: es,
                            statusKey: ec,
                          })
                        : null != Z
                          ? Z()
                          : null != f &&
                            ey.query
                              .getOrFetch(_.currentGitHubUserQuery$, {
                                hostId: Y,
                                hostname: f.hostname,
                                source: "pull_request_board",
                              })
                              .then((t) => {
                                "success" === t.status
                                  ? J({
                                      kind: "canonical",
                                      request: { provider: "github", account: t.account, pullRequest: f },
                                      repositoryTarget: es ?? void 0,
                                      title: eC,
                                    })
                                  : e_(e)
                              })
                              .catch(() => {
                                e_(e)
                              }))
              e_(e)
            }
          }),
          (z[39] = ej),
          (z[40] = Y),
          (z[41] = d),
          (z[42] = Z),
          (z[43] = J),
          (z[44] = ea),
          (z[45] = p),
          (z[46] = e_),
          (z[47] = f),
          (z[48] = er?.repo),
          (z[49] = es),
          (z[50] = eC),
          (z[51] = ey),
          (z[52] = ec),
          (z[53] = eM),
          (z[54] = Q))
        : (Q = z[54])
      let eA = Q
      ;(z[55] !== er || z[56] !== ef
        ? ((K = (0, r.jsx)(E.x.ItemLeading, {
            variant: "status",
            children: (0, r.jsx)(em, { status: er, visualState: ef }),
          })),
          (z[55] = er),
          (z[56] = ef),
          (z[57] = K))
        : (K = z[57]),
        z[58] !== eC ? ((F = (0, r.jsx)(E.x.ItemLabel, { children: eC })), (z[58] = eC), (z[59] = F)) : (F = z[59]),
        z[60] !== K || z[61] !== F
          ? ((V = (0, r.jsxs)(r.Fragment, { children: [K, F] })), (z[60] = K), (z[61] = F), (z[62] = V))
          : (V = z[62]))
      let ek = V
      return (
        z[63] !== n ||
        z[64] !== ek ||
        z[65] !== X ||
        z[66] !== k?.icon ||
        z[67] !== k?.navigationProvider ||
        z[68] !== eI ||
        z[69] !== R ||
        z[70] !== Y ||
        z[71] !== c ||
        z[72] !== ex ||
        z[73] !== eq ||
        z[74] !== et ||
        z[75] !== en ||
        z[76] !== eS ||
        z[77] !== eA ||
        z[78] !== f ||
        z[79] !== er ||
        z[80] !== el ||
        z[81] !== es ||
        z[82] !== x ||
        z[83] !== eC ||
        z[84] !== ey ||
        z[85] !== eM ||
        z[86] !== C
          ? ((H =
              null == eM
                ? (0, r.jsx)(E.x.Item, { tone: "muted", children: ek })
                : (0, r.jsxs)($, {
                    openOnHover: !0,
                    contentWidth: "menu",
                    getPlacement: N.J,
                    onCloseAutoFocus: (e) => {
                      eb.current && (e.preventDefault(), (eb.current = !1))
                    },
                    triggerButton: (0, r.jsx)(B.U, {
                      children: (0, r.jsx)(E.x.Item, {
                        interactive: !0,
                        children: (0, r.jsx)(ep, {
                          "aria-label": eC,
                          conversationId: X,
                          hostId: Y,
                          reviewUrl: x,
                          url: eM,
                          onClick: eA,
                          children: ek,
                        }),
                      }),
                    }),
                    children: [
                      (0, r.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                          (0, r.jsx)(g.ms.Item, {
                            className: "min-w-0 flex-1",
                            LeftIcon: y.Wq_,
                            onClick: eA,
                            children: (0, r.jsx)(u.A, {
                              id: "codex.localConversation.gitSummary.prSummary",
                              defaultMessage: "View PR",
                            }),
                          }),
                          (0, r.jsx)(g.ms.Item, {
                            "aria-label": ex.formatMessage(ev.copyLink),
                            tooltipText: ex.formatMessage(ev.copyLink),
                            onSelect: () => {
                              ;(0, O.lW)(eM)
                            },
                            children: (0, r.jsx)(y.ibM, {}),
                          }),
                          (0, r.jsx)(g.ms.Item, {
                            asChild: !0,
                            tooltipText: eS,
                            onClick: eq,
                            onAuxClick: (e) => {
                              1 === e.button && eq()
                            },
                            children: (0, r.jsx)(h.G, {
                              "aria-label": eS,
                              conversationId: X,
                              contextMenuInitiator: "side_panel_menu",
                              href: eM,
                              initiator: "pull_request_link",
                              openAsWebsite: !0,
                              originHostId: Y,
                              children: k?.icon,
                            }),
                          }),
                        ],
                      }),
                      (0, r.jsx)(g.ms.Item, {
                        LeftIcon: y.JJf,
                        disabled: !et && (null == f || null == R),
                        rightText:
                          eI?.additions != null && null != eI.deletions
                            ? (0, r.jsx)(b.S, { linesAdded: eI.additions, linesRemoved: eI.deletions })
                            : null,
                        onClick: (e) => {
                          if (et) return void et()
                          if (null == f || null == R) return
                          let t = () => {
                            ;(0, v.PQ)({
                              event: e,
                              href: R,
                              initiator: "pull_request_link",
                              openAsWebsite: !0,
                              originHostId: Y,
                            })
                          }
                          null != el || k?.navigationProvider !== "github"
                            ? t()
                            : ey.query
                                .getOrFetch(_.currentGitHubUserQuery$, {
                                  hostId: Y,
                                  hostname: f.hostname,
                                  source: "pull_request_board",
                                })
                                .then((e) => {
                                  "success" === e.status
                                    ? (0, L.openThreadPullRequestCodeTab)(
                                        ey,
                                        { account: e.account, pullRequest: f },
                                        eC,
                                      )
                                    : t()
                                })
                                .catch(t)
                        },
                        children: (0, r.jsx)(u.A, { ...ev.codeChanges }),
                      }),
                      null != er &&
                        (n && null != f && "merged" !== er.state
                          ? (0, r.jsx)(ed, {
                              pullRequestStatus: er,
                              children: (0, r.jsx)(G, {
                                hostedReviewUrl: c,
                                hostId: Y,
                                pullRequest: f,
                                placement: "status-menu",
                                workspaceRequest: C,
                              }),
                            })
                          : (0, r.jsx)(g.ms.Item, {
                              LeftIcon: y.ono,
                              rightIcon: (0, r.jsx)(eh, { pullRequestStatus: er }),
                              onClick: eA,
                              children: (0, r.jsx)(u.A, {
                                id: "codex.localConversation.gitSummary.prStatus",
                                defaultMessage: "Status",
                              }),
                            })),
                      null == es || null == er
                        ? null
                        : (0, r.jsx)(ee, { conversationId: X, pullRequestStatus: er, target: es }),
                      n && null != er && null != f && "open" === er.state && !er.isDraft
                        ? (0, r.jsx)(G, {
                            hostedReviewUrl: c,
                            hostId: Y,
                            pullRequest: f,
                            placement: "merge-menu",
                            workspaceRequest: C,
                          })
                        : null,
                      (0, r.jsx)(g.ms.Item, {
                        LeftIcon: y.avw,
                        onSelect: () => {
                          null != el ? (eb.current = eo(ey, el, Y)) : ei(ey, er, Y, es)
                        },
                        children: (0, r.jsx)(u.A, {
                          id: "codex.localConversation.gitSummary.addPullRequestToChat",
                          defaultMessage: "Add to chat",
                        }),
                      }),
                      null == en ? null : (0, r.jsx)(D.d, { kind: "pull-request", onRemove: en }),
                    ],
                  })),
            (z[63] = n),
            (z[64] = ek),
            (z[65] = X),
            (z[66] = k?.icon),
            (z[67] = k?.navigationProvider),
            (z[68] = eI),
            (z[69] = R),
            (z[70] = Y),
            (z[71] = c),
            (z[72] = ex),
            (z[73] = eq),
            (z[74] = et),
            (z[75] = en),
            (z[76] = eS),
            (z[77] = eA),
            (z[78] = f),
            (z[79] = er),
            (z[80] = el),
            (z[81] = es),
            (z[82] = x),
            (z[83] = eC),
            (z[84] = ey),
            (z[85] = eM),
            (z[86] = C),
            (z[87] = H))
          : (H = z[87]),
        H
      )
    }
    function ed(e) {
      let t,
        n,
        a,
        s = (0, l.c)(6),
        { pullRequestStatus: i, children: o } = e
      return (
        s[0] !== i ? ((t = (0, r.jsx)(eh, { pullRequestStatus: i })), (s[0] = i), (s[1] = t)) : (t = s[1]),
        s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsx)(u.A, { id: "codex.localConversation.gitSummary.prStatus", defaultMessage: "Status" })),
            (s[2] = n))
          : (n = s[2]),
        s[3] !== o || s[4] !== t
          ? ((a = (0, r.jsx)(g.ms.FlyoutSubmenuItem, {
              LeftIcon: y.ono,
              contentWidth: "menu",
              rightIcon: t,
              label: n,
              children: o,
            })),
            (s[3] = o),
            (s[4] = t),
            (s[5] = a))
          : (a = s[5]),
        a
      )
    }
    function em(e) {
      let t,
        n = (0, l.c)(7),
        { status: a, visualState: s } = e
      if (null == a) {
        let e
        return (
          n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(y.ibM, { className: "text-tertiary" })), (n[0] = e))
            : (e = n[0]),
          e
        )
      }
      let i = "merged" === a.state ? "status" : "currentColor"
      if (null != s) {
        let e
        return (
          n[1] !== i || n[2] !== s
            ? ((e = (0, r.jsx)(k.r, { state: s, tone: i })), (n[1] = i), (n[2] = s), (n[3] = e))
            : (e = n[3]),
          e
        )
      }
      let o = "open" === a.state && a.isDraft ? "draft" : a.state
      return (
        n[4] !== o || n[5] !== i
          ? ((t = (0, r.jsx)(k.c, { status: o, tone: i })), (n[4] = o), (n[5] = i), (n[6] = t))
          : (t = n[6]),
        t
      )
    }
    function eg(e) {
      let t,
        n,
        s,
        i,
        c,
        d,
        p,
        f,
        x,
        b,
        j,
        S,
        q,
        _,
        A,
        k,
        R,
        L,
        T,
        U = (0, l.c)(71),
        {
          conversationId: O,
          hostId: W,
          onOpenPullRequestSidePanel: Q,
          onOpenChanges: K,
          onRemove: F,
          pullRequest: V,
          pullRequestStatus: H,
          referenceTitle: z,
          reviewUrl: X,
          repositoryTarget: Y,
          url: Z,
        } = e,
        J = (0, a.gh)(P.PR),
        ee = (0, o.A)()
      if (!(0, a.Ul)(w.l)) return null
      U[0] !== ee || U[1] !== V || U[2] !== H?.title || U[3] !== z
        ? ((t = H?.title ?? z ?? (0, I.g)(ee, "gitlab", V.number)),
          (U[0] = ee),
          (U[1] = V),
          (U[2] = H?.title),
          (U[3] = z),
          (U[4] = t))
        : (t = U[4])
      let et = t,
        en = H?.state === "open" && H.isDraft ? "draft" : H?.state
      U[5] !== W || U[6] !== V || U[7] !== H
        ? ((n =
            H?.hostedReviewUrl == null
              ? null
              : { hostId: W, pullRequest: V, hostedReviewUrl: H.hostedReviewUrl, workspaceRequest: void 0 }),
          (U[5] = W),
          (U[6] = V),
          (U[7] = H),
          (U[8] = n))
        : (n = U[8])
      let er = n
      U[9] !== W || U[10] !== V || U[11] !== H || U[12] !== Y || U[13] !== J || U[14] !== Z
        ? ((s = () => {
            null == H ? eo(J, { pullRequest: V, title: null, url: Z }, W) : ei(J, H, W, Y)
          }),
          (U[9] = W),
          (U[10] = V),
          (U[11] = H),
          (U[12] = Y),
          (U[13] = J),
          (U[14] = Z),
          (U[15] = s))
        : (s = U[15])
      let el = s
      U[16] !== W || U[17] !== et || U[18] !== Q || U[19] !== V || U[20] !== J || U[21] !== Z
        ? ((i = async (e) => {
            if (!(0, m.C)(J, { pullRequestUrl: Z, originHostId: W, respectLinkPreference: !0 })) {
              if ("gitlab.com" === V.hostname && (0, w.$)(J) && null != Q)
                try {
                  let e = await (0, C.xH)(J, W)
                  if ((0, w.$)(J))
                    return void Q({
                      kind: "canonical",
                      request: { provider: "gitlab", account: e, pullRequest: V },
                      title: et,
                    })
                } catch {}
              ;(0, w.$)(J) && (0, v.PQ)({ event: e, href: Z, initiator: "pull_request_link" })
            }
          }),
          (U[16] = W),
          (U[17] = et),
          (U[18] = Q),
          (U[19] = V),
          (U[20] = J),
          (U[21] = Z),
          (U[22] = i))
        : (i = U[22])
      let ea = i
      return (
        U[23] !== ea
          ? ((c = (e) => {
              ea(e)
            }),
            (U[23] = ea),
            (U[24] = c))
          : (c = U[24]),
        U[25] !== H
          ? ((d = (0, r.jsx)(E.x.ItemLeading, { variant: "status", children: (0, r.jsx)(em, { status: H }) })),
            (U[25] = H),
            (U[26] = d))
          : (d = U[26]),
        U[27] !== et ? ((p = (0, r.jsx)(E.x.ItemLabel, { children: et })), (U[27] = et), (U[28] = p)) : (p = U[28]),
        U[29] !== en
          ? ((f =
              null != en &&
              (0, r.jsx)(E.x.ItemMeta, { className: "select-none", children: (0, r.jsx)(M.X, { status: en }) })),
            (U[29] = en),
            (U[30] = f))
          : (f = U[30]),
        U[31] !== O ||
        U[32] !== W ||
        U[33] !== X ||
        U[34] !== c ||
        U[35] !== d ||
        U[36] !== p ||
        U[37] !== f ||
        U[38] !== Z
          ? ((x = (0, r.jsx)(B.U, {
              children: (0, r.jsx)(E.x.Item, {
                interactive: !0,
                children: (0, r.jsxs)(ep, {
                  conversationId: O,
                  hostId: W,
                  reviewUrl: X,
                  url: Z,
                  onClick: c,
                  children: [d, p, f],
                }),
              }),
            })),
            (U[31] = O),
            (U[32] = W),
            (U[33] = X),
            (U[34] = c),
            (U[35] = d),
            (U[36] = p),
            (U[37] = f),
            (U[38] = Z),
            (U[39] = x))
          : (x = U[39]),
        U[40] !== Q || U[41] !== ea
          ? ((b =
              null != Q
                ? (0, r.jsx)(g.ms.Item, {
                    LeftIcon: y.Wq_,
                    onClick: (e) => {
                      ea(e)
                    },
                    children: (0, r.jsx)(u.A, { id: "gitlabMergeRequest.view", defaultMessage: "View merge request" }),
                  })
                : null),
            (U[40] = Q),
            (U[41] = ea),
            (U[42] = b))
          : (b = U[42]),
        U[43] !== K
          ? ((j =
              K &&
              (0, r.jsx)(g.ms.Item, {
                LeftIcon: y.JJf,
                onSelect: () => void K(),
                children: (0, r.jsx)(u.A, { ...ev.codeChanges }),
              })),
            (U[43] = K),
            (U[44] = j))
          : (j = U[44]),
        U[45] !== er || U[46] !== H || U[47] !== en
          ? ((S =
              null != er && null != H && "merged" !== en
                ? (0, r.jsx)(ed, { pullRequestStatus: H, children: (0, r.jsx)(G, { ...er, placement: "status-menu" }) })
                : null),
            (U[45] = er),
            (U[46] = H),
            (U[47] = en),
            (U[48] = S))
          : (S = U[48]),
        U[49] !== er || U[50] !== en
          ? ((q = null != er && "open" === en ? (0, r.jsx)(G, { ...er, placement: "merge-menu" }) : null),
            (U[49] = er),
            (U[50] = en),
            (U[51] = q))
          : (q = U[51]),
        U[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, r.jsx)(u.A, {
              id: "codex.localConversation.gitSummary.addPullRequestToChat",
              defaultMessage: "Add to chat",
            })),
            (U[52] = _))
          : (_ = U[52]),
        U[53] !== el
          ? ((A = (0, r.jsx)(g.ms.Item, { LeftIcon: y.avw, onSelect: el, children: _ })), (U[53] = el), (U[54] = A))
          : (A = U[54]),
        U[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, r.jsx)(u.A, { id: "gitlabMergeRequest.open", defaultMessage: "Open merge request on GitLab" })),
            (U[55] = k))
          : (k = U[55]),
        U[56] !== O || U[57] !== W || U[58] !== Z
          ? ((R = (0, r.jsx)(g.ms.Item, {
              asChild: !0,
              children: (0, r.jsx)(h.G, {
                conversationId: O,
                contextMenuInitiator: "side_panel_menu",
                href: Z,
                initiator: "pull_request_link",
                originHostId: W,
                children: k,
              }),
            })),
            (U[56] = O),
            (U[57] = W),
            (U[58] = Z),
            (U[59] = R))
          : (R = U[59]),
        U[60] !== F
          ? ((L = null == F ? null : (0, r.jsx)(D.d, { kind: "pull-request", onRemove: F })), (U[60] = F), (U[61] = L))
          : (L = U[61]),
        U[62] !== b ||
        U[63] !== j ||
        U[64] !== S ||
        U[65] !== q ||
        U[66] !== A ||
        U[67] !== R ||
        U[68] !== L ||
        U[69] !== x
          ? ((T = (0, r.jsxs)($, {
              openOnHover: !0,
              contentWidth: "menu",
              getPlacement: N.J,
              triggerButton: x,
              children: [b, j, S, q, A, R, L],
            })),
            (U[62] = b),
            (U[63] = j),
            (U[64] = S),
            (U[65] = q),
            (U[66] = A),
            (U[67] = R),
            (U[68] = L),
            (U[69] = x),
            (U[70] = T))
          : (T = U[70]),
        T
      )
    }
    function ep(e) {
      let t,
        n,
        s,
        o,
        u,
        c,
        m,
        g,
        p,
        v = (0, l.c)(20)
      ;(v[0] !== e
        ? (({ conversationId: n, hostId: s, reviewUrl: o, url: u, ...t } = e),
          (v[0] = e),
          (v[1] = t),
          (v[2] = n),
          (v[3] = s),
          (v[4] = o),
          (v[5] = u))
        : ((t = v[1]), (n = v[2]), (s = v[3]), (o = v[4]), (u = v[5])),
        v[6] === Symbol.for("react.memo_cache_sentinel") ? ((c = { name: "browser.in-app" }), (v[6] = c)) : (c = v[6]))
      let y = (0, a._U)(d.G, c).isCapable,
        x = (0, i.useId)(),
        b = null == o ? void 0 : x
      ;(v[7] !== x || v[8] !== o
        ? ((m =
            null != o && (0, r.jsx)("span", { hidden: !0, id: x, children: (0, r.jsx)(R.Y, { url: o, label: !0 }) })),
          (v[7] = x),
          (v[8] = o),
          (v[9] = m))
        : (m = v[9]),
        v[10] !== t || v[11] !== b || v[12] !== m
          ? ((g = (0, r.jsxs)(E.x.ItemTrigger, { ...t, "aria-describedby": b, children: [t.children, m] })),
            (v[10] = t),
            (v[11] = b),
            (v[12] = m),
            (v[13] = g))
          : (g = v[13]))
      let w = g
      return null != n && (0, f.$j)({ href: u })
        ? (v[14] !== w || v[15] !== n || v[16] !== s || v[17] !== y || v[18] !== u
            ? ((p = (0, r.jsx)(h.S, {
                conversationId: n,
                hostId: s,
                href: u,
                initiator: "side_panel_menu",
                isBrowserEnabled: y,
                children: w,
              })),
              (v[14] = w),
              (v[15] = n),
              (v[16] = s),
              (v[17] = y),
              (v[18] = u),
              (v[19] = p))
            : (p = v[19]),
          p)
        : w
    }
    function eh(e) {
      let t,
        n,
        a,
        s = (0, l.c)(14),
        { pullRequestStatus: i } = e,
        o = (0, x.wv)()
      s[0] !== i.details || s[1] !== i.mergedAt
        ? ((t = i.mergedAt ?? i.details?.activityItems.find(ef)?.createdAt ?? i.details?.boardItem?.updatedAt),
          (s[0] = i.details),
          (s[1] = i.mergedAt),
          (s[2] = t))
        : (t = s[2])
      let c = t
      if ("merged" === i.state && null != c) {
        let e, t
        s[3] !== c || s[4] !== o ? ((e = (0, p.w)(c, o)), (s[3] = c), (s[4] = o), (s[5] = e)) : (e = s[5])
        let { unit: n, value: l } = e
        return (
          s[6] !== n || s[7] !== l
            ? ((t = (0, r.jsx)(u.A, {
                id: "codex.localConversation.gitSummary.pullRequestMergedRelativeTime",
                defaultMessage:
                  "{unit, select, minute {Merged {value}m ago} hour {Merged {value}h ago} day {Merged {value}d ago} week {Merged {value}w ago} month {Merged {value}mo ago} year {Merged {value}y ago} other {Merged}}",
                values: { unit: n, value: l },
              })),
              (s[6] = n),
              (s[7] = l),
              (s[8] = t))
            : (t = s[8]),
          t
        )
      }
      let d = "open" === i.state && i.isDraft ? "draft" : i.state,
        m = "open" === d ? "text-tertiary" : void 0
      return (
        s[9] !== d ? ((n = (0, r.jsx)(M.X, { status: d })), (s[9] = d), (s[10] = n)) : (n = s[10]),
        s[11] !== m || s[12] !== n
          ? ((a = (0, r.jsx)("span", { className: m, children: n })), (s[11] = m), (s[12] = n), (s[13] = a))
          : (a = s[13]),
        a
      )
    }
    function ef(e) {
      return "event" === e.type && "merged" === e.event
    }
    let ev = (0, c.YK)({
      codeChanges: { id: "codex.localConversation.gitSummary.prCodeChanges", defaultMessage: "Code changes" },
      copyLink: { id: "codex.localConversation.gitSummary.copyPullRequestLink", defaultMessage: "Copy link" },
    })
  },
  VOO2(e, t, n) {
    var r = n("ABep"),
      l = n("QosV"),
      a = n("Wf1j"),
      s = n("XpTL"),
      i = n("jEN2"),
      o = n("gKxp")
    n.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            n,
            u = (0, l.c)(5),
            c = (0, a.A)()
          return (
            u[0] !== c ? ((t = (e) => (0, i.jf)((0, s.D)(c, e))), (u[0] = c), (u[1] = t)) : (t = u[1]),
            u[2] !== e || u[3] !== t
              ? ((n = (0, r.jsx)(o.p, { ...e, onCreate: t })), (u[2] = e), (u[3] = t), (u[4] = n))
              : (n = u[4]),
            n
          )
        },
      },
    )
  },
  rIKq(e, t, n) {
    n.d(t, { N: () => eQ })
    var r = n("ABep"),
      l = n("QosV"),
      a = n("SZCv"),
      s = n.n(a),
      i = n("i5ac"),
      o = n.n(i),
      u = n("qmMi"),
      c = n("DBCl"),
      d = n("G4E3"),
      m = n("Wf1j"),
      g = n("oyxz"),
      p = n("tl5a"),
      h = n("dbK8"),
      f = n("UOa8"),
      v = n("evwP"),
      y = n("N2Ld"),
      x = n("m22M"),
      b = n("M3k3"),
      w = n("Ygco"),
      j = n("OWtl"),
      I = n("qMca")
    let M = (0, u.i1)(
      j.u,
      (e, { get: t }) => (null != e && t(I.D0, e) ? (0, b.M)(t(w.Op, { conversationId: e, hostId: t(p.qX, e) })) : []),
      { isEqual: s() },
    )
    var C = n("liTb"),
      S = n("AXK1"),
      q = n("RNul"),
      _ = n("tSEg"),
      A = n("W4GL"),
      k = n("uwcW"),
      R = n("qcWZ")
    function P(e) {
      let t,
        n = (0, l.c)(14),
        { conversationId: a, hasOutputs: s, isInitialLoading: i } = e,
        o = void 0 !== i && i,
        c = (0, u.gh)(_.GD),
        { isPending: d, isError: m, isFetching: p } = (0, u._U)(R.xw, a)
      if (m) {
        let e, t, l, s, i
        return (
          n[0] !== a || n[1] !== c
            ? ((e = () => void (0, R.oh)(c, a)), (n[0] = a), (n[1] = c), (n[2] = e))
            : (e = n[2]),
          n[3] !== p
            ? ((t = p
                ? (0, r.jsx)(A.x.ItemLeading, { "aria-hidden": !0, children: (0, r.jsx)(q.y, { as: "span" }) })
                : null),
              (n[3] = p),
              (n[4] = t))
            : (t = n[4]),
          n[5] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, r.jsx)(A.x.ItemLabel, {
                children: (0, r.jsx)(g.A, {
                  id: "orbit.outputs.loadError",
                  defaultMessage: "Couldn\u2019t load all outputs",
                }),
              })),
              (n[5] = l))
            : (l = n[5]),
          n[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, r.jsx)(A.x.ItemMeta, {
                children: (0, r.jsx)(g.A, { id: "orbit.outputs.retry", defaultMessage: "Try again" }),
              })),
              (n[6] = s))
            : (s = n[6]),
          n[7] !== p || n[8] !== e || n[9] !== t
            ? ((i = (0, r.jsxs)(A.x.ItemButton, {
                className: "select-none",
                disabled: p,
                onClick: e,
                children: [t, l, s],
              })),
              (n[7] = p),
              (n[8] = e),
              (n[9] = t),
              (n[10] = i))
            : (i = n[10]),
          i
        )
      }
      return s && !o
        ? null
        : (n[11] !== d || n[12] !== o
            ? ((t = (0, r.jsx)(A.x.Item, {
                className: "select-none",
                role: "status",
                tone: "muted",
                children: (0, r.jsx)(A.x.ItemLabel, {
                  children:
                    d || o
                      ? (0, r.jsx)(k.q, {
                          children: (0, r.jsx)(g.A, {
                            id: "orbit.outputs.loading",
                            defaultMessage: "Loading outputs\u2026",
                          }),
                        })
                      : (0, r.jsx)(g.A, { id: "orbit.outputs.empty", defaultMessage: "No outputs yet" }),
                }),
              })),
              (n[11] = d),
              (n[12] = o),
              (n[13] = t))
            : (t = n[13]),
          t)
    }
    var L = n("Ywss"),
      D = n("Ot7V"),
      N = n("bVeK"),
      T = n("UxN3"),
      U = n("z7xo"),
      $ = n("fAUH"),
      B = n("EjHO"),
      E = n("fiy3"),
      O = n("feds"),
      W = n("b5fQ"),
      Q = n("CrJX")
    function K(e) {
      let t,
        n,
        a = (0, l.c)(9),
        { List: s, hostId: i, onOpenPullRequestSidePanel: o, outputs: u, presentation: c } = e,
        d = void 0 === s ? A.x.List : s,
        m = void 0 === c ? "summary" : c
      a[0] !== i || a[1] !== o || a[2] !== m
        ? ((t = (e) =>
            (0, r.jsx)(
              G,
              {
                hostId: i,
                onOpenPullRequestSidePanel: o,
                output: e,
                showPreview: "plain" === m,
                navigation: "navigation" === m,
              },
              (0, E.S9)(e.pullRequest),
            )),
          (a[0] = i),
          (a[1] = o),
          (a[2] = m),
          (a[3] = t))
        : (t = a[3])
      let g = t
      return (
        a[4] !== d || a[5] !== u || a[6] !== m || a[7] !== g
          ? ((n =
              "navigation" === m
                ? (0, r.jsx)(r.Fragment, { children: u.map(g) })
                : (0, r.jsx)(d, {
                    presentation: m,
                    visibleItemLimit: "summary" === m ? void 0 : 3,
                    items: u,
                    getKey: F,
                    children: g,
                  })),
            (a[4] = d),
            (a[5] = u),
            (a[6] = m),
            (a[7] = g),
            (a[8] = n))
          : (n = a[8]),
        n
      )
    }
    function F(e) {
      return (0, E.S9)(e.pullRequest)
    }
    function G(e) {
      let t,
        n,
        a,
        s,
        i,
        o,
        c = (0, l.c)(72),
        { hostId: d, onOpenPullRequestSidePanel: g, output: p, showPreview: h, navigation: f } = e,
        v = (0, u.gh)(_.GD)
      ;(c[0] !== p.pullRequest ? ((t = (0, E.QC)(p.pullRequest)), (c[0] = p.pullRequest), (c[1] = t)) : (t = c[1]),
        c[2] !== d || c[3] !== t
          ? ((n = {
              hostId: d,
              cwd: null,
              headBranch: null,
              url: t,
              operationSource: "local_conversation_git_summary",
            }),
            (c[2] = d),
            (c[3] = t),
            (c[4] = n))
          : (n = c[4]))
      let y = n,
        { data: x } = (0, u._U)(B.w, y),
        b = (0, m.A)(),
        w = (0, L.Zp)(),
        { pullRequest: j } = p
      c[5] !== b || c[6] !== p.title || c[7] !== j || c[8] !== x?.title
        ? ((a =
            x?.title ??
            p.title ??
            b.formatMessage(
              { id: "codex.localConversation.outputs.pullRequestFallbackTitle", defaultMessage: "PR #{number}" },
              { number: j.number },
            )),
          (c[5] = b),
          (c[6] = p.title),
          (c[7] = j),
          (c[8] = x?.title),
          (c[9] = a))
        : (a = c[9])
      let I = a,
        M = null == x && "gitlab.com" !== j.hostname
      c[10] !== d || c[11] !== w || c[12] !== g || c[13] !== j || c[14] !== v || c[15] !== y || c[16] !== I
        ? ((s = () => {
            if (null != g) {
              let { githubAccount: e } = v.get(B.w, y)
              if (null != e)
                return void g({
                  kind: "canonical",
                  request: { provider: "github", account: e, pullRequest: j },
                  title: I,
                })
            }
            w((0, E.yR)(j), { state: { hostId: (0, $.Es)(d), hostname: j.hostname } })
          }),
          (c[10] = d),
          (c[11] = w),
          (c[12] = g),
          (c[13] = j),
          (c[14] = v),
          (c[15] = y),
          (c[16] = I),
          (c[17] = s))
        : (s = c[17])
      let C = s
      c[18] !== C || c[19] !== M || c[20] !== j
        ? ((i = (e) => {
            M ? (0, D.PQ)({ event: e, href: (0, E.QC)(j), initiator: "pull_request_link", openAsWebsite: !0 }) : C()
          }),
          (c[18] = C),
          (c[19] = M),
          (c[20] = j),
          (c[21] = i))
        : (i = c[21])
      let S = i
      if (f) {
        let e, t, n
        return (
          c[22] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(T.b5, { icon: { 16: N.ono, 20: N.bvY }, className: "text-tertiary" })), (c[22] = e))
            : (e = c[22]),
          c[23] !== S ? ((t = (e) => S(e)), (c[23] = S), (c[24] = t)) : (t = c[24]),
          c[25] !== t || c[26] !== I
            ? ((n = (0, r.jsx)(W.jl, { label: I, title: I, icon: e, disclosure: !0, onClick: t })),
              (c[25] = t),
              (c[26] = I),
              (c[27] = n))
            : (n = c[27]),
          n
        )
      }
      let q = x?.summary
      if (null != x) {
        let e,
          t,
          n = "local-thread" === v.value.routeKind ? v.value.conversationId : null,
          l = g ?? C
        return (
          c[28] !== x || c[29] !== q
            ? ((e =
                null == q
                  ? null
                  : (0, O.S)({
                      canMerge: q.canMerge,
                      ciStatus: q.ciStatus,
                      hasMergeConflicts: "conflicts" === q.mergeBlocker,
                      status: "open" === x.state && x.isDraft ? "draft" : x.state,
                    })),
              (c[28] = x),
              (c[29] = q),
              (c[30] = e))
            : (e = c[30]),
          c[31] !== C || c[32] !== d || c[33] !== x || c[34] !== y || c[35] !== n || c[36] !== l || c[37] !== e
            ? ((t = (0, r.jsx)(Q.t, {
                conversationId: n,
                hostId: d,
                onOpenCanonicalPullRequest: C,
                onOpenPullRequestSidePanel: l,
                pullRequestStatus: x,
                repositoryTarget: null,
                statusKey: y,
                visualState: e,
              })),
              (c[31] = C),
              (c[32] = d),
              (c[33] = x),
              (c[34] = y),
              (c[35] = n),
              (c[36] = l),
              (c[37] = e),
              (c[38] = t))
            : (t = c[38]),
          t
        )
      }
      if ("gitlab.com" === j.hostname) {
        let e,
          t,
          n,
          l,
          a,
          s,
          i,
          o,
          u,
          d,
          m,
          g = `${j.owner}/${j.repository}#${j.number}`
        c[39] !== j ? ((e = (0, E.QC)(j)), (c[39] = j), (c[40] = e)) : (e = c[40])
        let p = e
        c[41] !== S ? ((t = (e) => S(e)), (c[41] = S), (c[42] = t)) : (t = c[42])
        let f = h ? "thumbnail" : "status"
        ;(c[43] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, r.jsx)(N.ono, {})), (c[43] = n)) : (n = c[43]),
          c[44] !== f
            ? ((l = (0, r.jsx)(A.x.ItemLeading, { variant: f, children: n })), (c[44] = f), (c[45] = l))
            : (l = c[45]))
        let v = h ? g : void 0
        return (
          c[46] !== v || c[47] !== I
            ? ((a = (0, r.jsx)(A.x.ItemLabel, { description: v, children: I })), (c[46] = v), (c[47] = I), (c[48] = a))
            : (a = c[48]),
          c[49] !== l || c[50] !== a || c[51] !== t || c[52] !== I
            ? ((s = (0, r.jsxs)(A.x.ItemTrigger, { "aria-label": I, onClick: t, children: [l, a] })),
              (c[49] = l),
              (c[50] = a),
              (c[51] = t),
              (c[52] = I),
              (c[53] = s))
            : (s = c[53]),
          c[54] !== b
            ? ((i = b.formatMessage({
                id: "codex.localConversation.outputs.openPullRequestInBrowser",
                defaultMessage: "Open pull request in browser",
              })),
              (c[54] = b),
              (c[55] = i))
            : (i = c[55]),
          c[56] !== p
            ? ((o = (e) => (0, D.PQ)({ event: e, href: p, initiator: "pull_request_link", openAsWebsite: !0 })),
              (c[56] = p),
              (c[57] = o))
            : (o = c[57]),
          c[58] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (0, r.jsx)(U.A, { "aria-hidden": !0 })), (c[58] = u))
            : (u = c[58]),
          c[59] !== i || c[60] !== o || c[61] !== p
            ? ((d = (0, r.jsx)(A.x.ItemActions, {
                visibility: "interaction",
                children: (0, r.jsx)(A.x.ItemActionLink, {
                  label: i,
                  href: p,
                  rel: "noreferrer",
                  target: "_blank",
                  onClick: o,
                  children: u,
                }),
              })),
              (c[59] = i),
              (c[60] = o),
              (c[61] = p),
              (c[62] = d))
            : (d = c[62]),
          c[63] !== s || c[64] !== d
            ? ((m = (0, r.jsxs)(A.x.Item, { className: "select-none", interactive: !0, children: [s, d] })),
              (c[63] = s),
              (c[64] = d),
              (c[65] = m))
            : (m = c[65]),
          m
        )
      }
      let k = "local-thread" === v.value.routeKind ? v.value.conversationId : null
      return (
        c[66] !== S || c[67] !== d || c[68] !== p || c[69] !== y || c[70] !== k
          ? ((o = (0, r.jsx)(Q.t, {
              kind: "reference",
              conversationId: k,
              hostId: d,
              onOpenReference: S,
              reference: p,
              repositoryTarget: null,
              statusKey: y,
              visualState: null,
            })),
            (c[66] = S),
            (c[67] = d),
            (c[68] = p),
            (c[69] = y),
            (c[70] = k),
            (c[71] = o))
          : (o = c[71]),
        o
      )
    }
    var V = n("e1xH"),
      H = n("tKel"),
      z = n("Ba78"),
      X = n("tv8P"),
      Y = n("aqTO"),
      Z = n("i8Vs"),
      J = n("nf3G"),
      ee = n("qixt"),
      et = n("zd8w"),
      en = n("SQbA"),
      er = n("b3Qd"),
      el = n("BXfA"),
      ea = n("FzwW"),
      es = n("aQvR"),
      ei = n("bWX0"),
      eo = n("Dxqv"),
      eu = n("ylNI"),
      ec = n("VPBa"),
      ed = n("dkxK"),
      em = n("lnSV"),
      eg = n("SPnB"),
      ep = n("Kwur"),
      eh = n("miXB"),
      ef = n("XDdZ")
    function ev(e) {
      let t,
        n,
        a,
        s = (0, l.c)(13),
        { artifact: i, variant: o } = e,
        d = (0, u.gh)(j.u),
        m = (0, u.Ul)(eg.chatGptAuthenticatedAccountId$),
        g = (0, u.Ul)(eg.chatGptAuthenticatedUserId$)
      s[0] !== m || s[1] !== d || s[2] !== g
        ? ((t = () => {
            if (d.get(eg.chatGptAuthenticatedAccountId$) !== m || d.get(eg.chatGptAuthenticatedUserId$) !== g)
              throw new DOMException("Messaging account changed", "AbortError")
          }),
          (s[0] = m),
          (s[1] = d),
          (s[2] = g),
          (s[3] = t))
        : (t = s[3])
      let p = t
      s[4] !== m || s[5] !== i || s[6] !== p || s[7] !== g
        ? ((n =
            null == m || null == g
              ? void 0
              : {
                  cacheKey: ["orbit-room-file", m, g, i.roomId],
                  resolveAsset: async (e) => {
                    p()
                    let t = await ep.Request.safeGet("/messaging/rooms/{room_id}/files/{file_id}", {
                      additionalHeaders: { [c.zBc]: m },
                      expectedErrorStatuses: [401, 403, 404],
                      retry: !1,
                      parameters: { path: { room_id: i.roomId, file_id: e } },
                    })
                    return (p(), null == t.download_url)
                      ? { kind: "permanently-deleted" }
                      : { kind: "available", ...(0, ef.o)(t.download_url, m) }
                  },
                }),
          (s[4] = m),
          (s[5] = i),
          (s[6] = p),
          (s[7] = g),
          (s[8] = n))
        : (n = s[8])
      let h = n,
        f = null == h ? "" : `file-service://${i.fileId}`
      return (
        s[9] !== h || s[10] !== f || s[11] !== o
          ? ((a = (0, r.jsx)(eh.X, { src: f, imageAssetResolver: h, variant: o })),
            (s[9] = h),
            (s[10] = f),
            (s[11] = o),
            (s[12] = a))
          : (a = s[12]),
        a
      )
    }
    n("NnV7")
    var ey = n("vADh"),
      ex = n("GaA7"),
      eb = n("bnxy"),
      ew = n("JQLC"),
      ej = n("DvSb")
    function eI(e) {
      let t,
        n,
        a,
        s,
        i = (0, l.c)(28),
        {
          List: o,
          artifacts: d,
          previewArtifacts: p,
          conversationTitle: h,
          getImagePreviewSrc: f,
          isEverydayWorkMode: v,
          itemClassName: y,
          onOpen: x,
          presentation: b,
        } = e,
        w = void 0 === o ? A.x.List : o,
        j = void 0 === p ? d : p,
        I = void 0 === h ? null : h,
        M = void 0 !== v && v,
        C = void 0 === b ? "summary" : b,
        S = (0, u.gh)(_.GD),
        q = (0, m.A)(),
        k = (0, u.Ul)(J.$q)
      i[0] !== k
        ? ((t = null != ex.appServices.fileDrags && window.electronBridge?.startFileDrag != null && !(0, c.rsL)(k)),
          (i[0] = k),
          (i[1] = t))
        : (t = i[1])
      let R = t
      i[2] !== R || i[3] !== k
        ? ((n = (e) => {
            R && ex.appServices.fileDrags?.prepareDrag({ hostId: k.id, path: e }).catch(eq)
          }),
          (i[2] = R),
          (i[3] = k),
          (i[4] = n))
        : (n = i[4])
      let P = n,
        L = eS
      i[5] !== R || i[6] !== k
        ? ((a = (e, t) => {
            R &&
              (e.preventDefault(),
              (e.currentTarget.dataset.fileDragStarted = String(
                window.electronBridge?.startFileDrag?.({ hostId: k.id, path: t }) === !0,
              )))
          }),
          (i[5] = R),
          (i[6] = k),
          (i[7] = a))
        : (a = i[7])
      let D = a
      if (
        i[8] !== w ||
        i[9] !== d ||
        i[10] !== R ||
        i[11] !== I ||
        i[12] !== f ||
        i[13] !== D ||
        i[14] !== k ||
        i[15] !== q ||
        i[16] !== M ||
        i[17] !== y ||
        i[18] !== x ||
        i[19] !== P ||
        i[20] !== C ||
        i[21] !== j ||
        i[22] !== S
      ) {
        let e,
          t,
          n = j.flatMap(eC)
        i[24] !== j ? ((e = new Set(j.flatMap(eM))), (i[24] = j), (i[25] = e)) : (e = i[25])
        let l = e,
          a = l.size > 0,
          o = new Map(n.map((e, t) => [e, a ? n.length - t : t + 1])),
          u = j
            .slice()
            .reverse()
            .flatMap((e) => {
              if (("file" !== e.type && "generated-image" !== e.type) || "always" !== (0, ei.$A)(e.path)) return []
              let t = (0, eb.Q0)(e.path),
                n = o.get((0, ew.sL)(e)),
                r =
                  null == n
                    ? t
                    : q.formatMessage(
                        {
                          id: "codex.localConversation.artifacts.generatedImage",
                          defaultMessage: "Generated image {imageNumber}",
                        },
                        { imageNumber: n },
                      ),
                l =
                  null == n || null == I
                    ? r
                    : q.formatMessage(
                        {
                          id: "codex.localConversation.generatedImageTabTitle",
                          defaultMessage: "{conversationTitle} - Generated image {imageNumber}",
                        },
                        { conversationTitle: I, imageNumber: n },
                      )
              return [
                {
                  artifactKey: (0, ew.sL)(e),
                  alt: r,
                  id: "generated-image" === e.type ? e.imageGenerationItemId : e.path,
                  previewSrc: null == e.source ? (f?.(e.path) ?? e.path) : e.path,
                  src: e.path,
                  tabTitle: l,
                },
              ]
            })
        i[26] !== l ? ((t = (e) => l.has(e.id)), (i[26] = l), (i[27] = t)) : (t = i[27])
        let m = u.filter(t),
          p = "plain" === C,
          h = (e) => {
            let t = p
              ? (function (e) {
                  if ("file" === e.type || "message-file" === e.type) {
                    let t = (0, ei.Zo)("file" === e.type ? e.path : e.name)
                    if (null != t)
                      return (0, r.jsx)(g.A, {
                        id: "codex.localConversation.artifacts.fileType",
                        defaultMessage: "{extension} file",
                        values: { extension: t.toUpperCase() },
                      })
                  }
                  let t = e.type
                  return ("message-file" === e.type
                    ? (t = e.mimeType.startsWith("image/") ? "image" : "file")
                    : "google-drive" === e.type
                      ? (t = e.resourceKind)
                      : "external-resource" === e.type
                        ? (t = (0, em.mN)(e.resource.mimeType) ?? (0, em.K5)(e.resource.url))
                        : "generated-image" === e.type
                          ? (t = "image")
                          : "appgen-app" === e.type && (t = "website"),
                  null == t && "external-resource" === e.type && null != e.resource.provider)
                    ? e.resource.provider.name
                    : (0, r.jsx)(g.A, {
                        id: "codex.localConversation.artifacts.outputType",
                        defaultMessage:
                          "{kind, select, document {Document} spreadsheet {Spreadsheet} presentation {Presentation} drive {Google Drive file} file {File} image {Image} website {Website} other {Link}}",
                        values: { kind: t },
                      })
                })(e)
              : void 0
            switch (e.type) {
              case "message-file": {
                let n = e.mimeType.startsWith("image/")
                return (0, r.jsx)(ek, {
                  className: y,
                  navigation: "navigation" === C,
                  icon: n ? { 16: N.UJ6, 20: N.pYT } : { 16: N.oQS, 20: N.hXV },
                  label: e.name,
                  description: t,
                  preview: n ? (0, r.jsx)(ev, { artifact: e, variant: p ? "thumbnail" : "preview" }) : void 0,
                  previewIsLeading: n,
                  showPreview: p,
                  title: e.name,
                  onClick: (t) => x(e, t),
                })
              }
              case "external-resource":
                return (0, r.jsx)(eA, {
                  className: y,
                  artifact: e,
                  navigation: "navigation" === C,
                  description: t,
                  showPreview: p,
                  onOpen: x,
                })
              case "website": {
                let n =
                  M && (0, c.hfz)(e.target)
                    ? (0, r.jsx)(g.A, {
                        id: "codex.localConversation.artifacts.localPreview",
                        defaultMessage: "Local preview",
                      })
                    : (function (e) {
                        if (!(0, c.hfz)(e)) {
                          let t = (0, eb.Q0)(e)
                          return t.length > 0 ? t : e.length > 0 ? e : null
                        }
                        try {
                          let t = new URL(e)
                          return `${t.host}${"/" === t.pathname ? "" : t.pathname}${t.search}`
                        } catch {
                          return e.length > 0 ? e : null
                        }
                      })(e.target)
                return (0, r.jsx)(ek, {
                  className: y,
                  navigation: "navigation" === C,
                  icon: { 16: N.ZEl, 20: N.cfl },
                  label:
                    n ??
                    (0, r.jsx)(g.A, { id: "codex.localConversation.artifacts.website", defaultMessage: "Web preview" }),
                  description: t,
                  showPreview: p,
                  title: e.target,
                  onClick: (t) => x(e, t),
                })
              }
              case "google-drive":
                return (0, r.jsx)(ek, {
                  className: y,
                  navigation: "navigation" === C,
                  icon: { 16: N.oQS, 20: N.hXV },
                  label: e.title,
                  description: t,
                  preview: (0, r.jsx)(ed.v, { className: "icon-leading", resourceKind: e.resourceKind }),
                  showPreview: p,
                  title: e.url,
                  onClick: (t) => x(e, t),
                })
              case "appgen-app":
                return (0, r.jsx)(e_, {
                  className: y,
                  artifact: e,
                  description: t,
                  showPreview: p,
                  navigation: "navigation" === C,
                  onOpen: x,
                })
              case "file":
              case "generated-image": {
                let { source: n } = e,
                  l = (0, eb.Q0)(e.path),
                  a = o.get((0, ew.sL)(e)),
                  s = u.find((t) => t.artifactKey === (0, ew.sL)(e)),
                  i =
                    null == a
                      ? l
                      : (0, r.jsx)(g.A, {
                          id: "codex.localConversation.artifacts.generatedImageGeneric",
                          defaultMessage: "Generated image",
                        })
                return (0, r.jsx)(ek, {
                  className: y,
                  navigation: "navigation" === C,
                  icon: "always" === (0, ei.$A)(e.path) ? { 16: N.UJ6, 20: N.pYT } : { 16: N.oQS, 20: N.hXV },
                  label: i,
                  description: t,
                  preview:
                    null != a || (null != n && null != s)
                      ? (0, r.jsx)(eh.X, {
                          conversationId: n?.conversationId,
                          hostId: n?.hostId ?? k.id,
                          src: null == n ? (f?.(e.path) ?? e.path) : e.path,
                          variant: p ? "thumbnail" : "preview",
                        })
                      : (0, r.jsx)(A.x.ItemLeading, {
                          variant: p ? "thumbnail" : "preview",
                          children: (0, r.jsx)(ea.y, {
                            getImagePreviewSrc: f,
                            iconClassName: p ? "icon-leading" : "icon-sm",
                            imageClassName: "size-full border border-default",
                            path: e.path,
                          }),
                        }),
                  previewIsLeading: !0,
                  "aria-label": null == a ? void 0 : s?.alt,
                  draggable: R,
                  title: null == a ? e.path : void 0,
                  onClick: (t) => {
                    let r = "true" === t.currentTarget.dataset.fileDragStarted
                    ;((t.currentTarget.dataset.fileDragStarted = "false"),
                      r ||
                        (null != s &&
                          (0, eu.openImagePreview)(
                            S,
                            {
                              alt: s.alt,
                              attachmentSrc: e.path,
                              downloadSrc: s.previewSrc,
                              generatedImages: "generated-image" === e.type && null == n ? m : void 0,
                              imageSourceContext: n,
                              sourceConversationId: n?.conversationId,
                              imageSource: "generated-image" === e.type ? "generated" : void 0,
                              initialImageId: "generated-image" === e.type ? s.id : void 0,
                              referrerPolicy: "no-referrer",
                              src: s.previewSrc,
                              title: s.tabTitle,
                            },
                            {
                              durableIdentity:
                                "generated-image" === e.type
                                  ? { imageItemId: e.imageGenerationItemId, source: "generated-image" }
                                  : (0, ec.$m)(n?.hostId ?? k.id, e.path),
                            },
                          )) ||
                        x(e, t))
                  },
                  onDragStart: (t) => {
                    D(t, e.path)
                  },
                  onKeyDown: L,
                  onPointerDown: (t) => {
                    ;(L(t), P(e.path))
                  },
                  onPointerEnter: () => {
                    P(e.path)
                  },
                })
              }
            }
          }
        ;((s =
          "navigation" === C
            ? d.map((e) => (0, r.jsx)(et.Fragment, { children: h(e) }, (0, ew.sL)(e)))
            : (0, r.jsx)(w, {
                presentation: C,
                visibleItemLimit: "summary" === C ? void 0 : 3,
                items: d,
                getKey: ew.sL,
                listClassName: "-mx-2 max-h-[28rem] overflow-y-auto px-2",
                empty: (0, r.jsx)(A.x.Item, {
                  tone: "muted",
                  children: (0, r.jsx)(A.x.ItemLabel, {
                    children: (0, r.jsx)(g.A, {
                      id: "codex.localConversation.artifacts.empty",
                      defaultMessage: "No artifacts yet",
                    }),
                  }),
                }),
                children: h,
              })),
          (i[8] = w),
          (i[9] = d),
          (i[10] = R),
          (i[11] = I),
          (i[12] = f),
          (i[13] = D),
          (i[14] = k),
          (i[15] = q),
          (i[16] = M),
          (i[17] = y),
          (i[18] = x),
          (i[19] = P),
          (i[20] = C),
          (i[21] = j),
          (i[22] = S),
          (i[23] = s))
      } else s = i[23]
      return s
    }
    function eM(e) {
      return "generated-image" === e.type ? [e.imageGenerationItemId] : []
    }
    function eC(e) {
      return "generated-image" === e.type || ("file" === e.type && (0, ew.aS)(e.path)) ? [(0, ew.sL)(e)] : []
    }
    function eS(e) {
      e.currentTarget.dataset.fileDragStarted = "false"
    }
    function eq() {}
    function e_(e) {
      let t,
        n,
        a,
        s,
        i,
        o,
        c,
        d,
        m,
        g,
        p = (0, l.c)(30),
        { className: h, artifact: f, description: v, showPreview: y, navigation: x, onOpen: b } = e,
        { data: w } = (0, u._U)(null == f.url ? en.ry : null, f.projectId) ?? {}
      ;(p[0] !== f || p[1] !== h || p[2] !== x || p[3] !== w?.current_live_url || p[4] !== w?.title
        ? ((n = (0, el.A)(f, w?.current_live_url)),
          (t = ek),
          (a = h),
          (s = x),
          p[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = { 16: N.ZEl, 20: N.cfl }), (p[11] = i))
            : (i = p[11]),
          (o = f.title ?? w?.title ?? (null == n ? null : ((0, er.Go)(n.url) ?? n.url))),
          (p[0] = f),
          (p[1] = h),
          (p[2] = x),
          (p[3] = w?.current_live_url),
          (p[4] = w?.title),
          (p[5] = t),
          (p[6] = n),
          (p[7] = a),
          (p[8] = s),
          (p[9] = i),
          (p[10] = o))
        : ((t = p[5]), (n = p[6]), (a = p[7]), (s = p[8]), (i = p[9]), (o = p[10])),
        p[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, r.jsx)(eo.A, { className: "icon-leading" })), (p[12] = c))
          : (c = p[12]),
        p[13] !== n
          ? ((d =
              null == n
                ? null
                : (0, r.jsx)(r.Fragment, {
                    children: (0, r.jsx)(A.x.ItemMeta, {
                      visibility: "interaction",
                      children: (0, r.jsx)(es.g, { size: "secondary", href: n.url }),
                    }),
                  })),
            (p[13] = n),
            (p[14] = d))
          : (d = p[14]))
      let j = null == n,
        I = n?.url
      return (
        p[15] !== n || p[16] !== b
          ? ((m = (e) => {
              null != n && b(n, e)
            }),
            (p[15] = n),
            (p[16] = b),
            (p[17] = m))
          : (m = p[17]),
        p[18] !== t ||
        p[19] !== v ||
        p[20] !== y ||
        p[21] !== a ||
        p[22] !== s ||
        p[23] !== i ||
        p[24] !== o ||
        p[25] !== d ||
        p[26] !== j ||
        p[27] !== I ||
        p[28] !== m
          ? ((g = (0, r.jsx)(t, {
              className: a,
              navigation: s,
              icon: i,
              label: o,
              description: v,
              preview: c,
              showPreview: y,
              trailing: d,
              disabled: j,
              title: I,
              onClick: m,
            })),
            (p[18] = t),
            (p[19] = v),
            (p[20] = y),
            (p[21] = a),
            (p[22] = s),
            (p[23] = i),
            (p[24] = o),
            (p[25] = d),
            (p[26] = j),
            (p[27] = I),
            (p[28] = m),
            (p[29] = g))
          : (g = p[29]),
        g
      )
    }
    function eA(e) {
      let t,
        n,
        a,
        s,
        i,
        o,
        c,
        g = (0, l.c)(30),
        { className: p, artifact: h, navigation: f, description: v, showPreview: y, onOpen: x } = e,
        b = (0, m.A)()
      g[0] !== h.resource.url ? ((t = (0, d.I0)(h.resource.url)), (g[0] = h.resource.url), (g[1] = t)) : (t = g[1])
      let w = t,
        j = (0, u._U)(H.qF, w),
        I = (0, ey.Y)(j)
      g[2] !== h.resource.title || g[3] !== b || g[4] !== j || g[5] !== w?.kind
        ? ((n = w?.kind === "page" ? (0, z.LV)(j, b) : h.resource.title),
          (g[2] = h.resource.title),
          (g[3] = b),
          (g[4] = j),
          (g[5] = w?.kind),
          (g[6] = n))
        : (n = g[6])
      let M = n
      ;(g[7] !== I ? ((a = I ?? { 16: N.oQS, 20: N.hXV }), (g[7] = I), (g[8] = a)) : (a = g[8]),
        g[9] !== v || g[10] !== I || g[11] !== y
          ? ((s = v), (g[9] = v), (g[10] = I), (g[11] = y), (g[12] = s))
          : (s = g[12]))
      let C = y ? "icon-leading" : "icon-sm"
      return (
        g[13] !== h.resource || g[14] !== C
          ? ((i = (0, r.jsx)(ej.b, { className: C, resource: h.resource })),
            (g[13] = h.resource),
            (g[14] = C),
            (g[15] = i))
          : (i = g[15]),
        g[16] !== h || g[17] !== x || g[18] !== M
          ? ((o = (e) => x({ ...h, resource: { ...h.resource, title: M } }, e)),
            (g[16] = h),
            (g[17] = x),
            (g[18] = M),
            (g[19] = o))
          : (o = g[19]),
        g[20] !== h.resource.url ||
        g[21] !== p ||
        g[22] !== f ||
        g[23] !== y ||
        g[24] !== a ||
        g[25] !== s ||
        g[26] !== i ||
        g[27] !== o ||
        g[28] !== M
          ? ((c = (0, r.jsx)(ek, {
              className: p,
              navigation: f,
              icon: a,
              label: M,
              description: s,
              preview: i,
              showPreview: y,
              title: h.resource.url,
              onClick: o,
            })),
            (g[20] = h.resource.url),
            (g[21] = p),
            (g[22] = f),
            (g[23] = y),
            (g[24] = a),
            (g[25] = s),
            (g[26] = i),
            (g[27] = o),
            (g[28] = M),
            (g[29] = c))
          : (c = g[29]),
        c
      )
    }
    function ek(e) {
      let t,
        n,
        a,
        s,
        i,
        o,
        u,
        c,
        d,
        m,
        g,
        p,
        h = (0, l.c)(29)
      h[0] !== e
        ? (({
            navigation: s,
            icon: n,
            label: a,
            description: t,
            preview: i,
            previewIsLeading: u,
            showPreview: c,
            trailing: d,
            ...o
          } = e),
          (h[0] = e),
          (h[1] = t),
          (h[2] = n),
          (h[3] = a),
          (h[4] = s),
          (h[5] = i),
          (h[6] = o),
          (h[7] = u),
          (h[8] = c),
          (h[9] = d))
        : ((t = h[1]), (n = h[2]), (a = h[3]), (s = h[4]), (i = h[5]), (o = h[6]), (u = h[7]), (c = h[8]), (d = h[9]))
      let f = void 0 !== u && u,
        v = void 0 !== c && c
      if (s) {
        let e, t
        return (
          h[10] !== n
            ? ((e = (0, r.jsx)(T.b5, { icon: n, className: "text-tertiary" })), (h[10] = n), (h[11] = e))
            : (e = h[11]),
          h[12] !== a || h[13] !== o || h[14] !== e
            ? ((t = (0, r.jsx)(W.jl, { ...o, icon: e, label: a, disclosure: !0 })),
              (h[12] = a),
              (h[13] = o),
              (h[14] = e),
              (h[15] = t))
            : (t = h[15]),
          t
        )
      }
      let y = "glyph"
      return (
        v ? (y = "thumbnail") : null == i && (y = "custom"),
        h[16] !== n || h[17] !== y || h[18] !== i || h[19] !== f
          ? ((m = f
              ? i
              : (0, r.jsx)(A.x.ItemLeading, {
                  variant: y,
                  children: i ?? (0, r.jsx)(T.b5, { className: "text-tertiary", icon: n, size: "secondary" }),
                })),
            (h[16] = n),
            (h[17] = y),
            (h[18] = i),
            (h[19] = f),
            (h[20] = m))
          : (m = h[20]),
        h[21] !== t || h[22] !== a
          ? ((g = (0, r.jsx)(A.x.ItemLabel, { description: t, children: a })), (h[21] = t), (h[22] = a), (h[23] = g))
          : (g = h[23]),
        h[24] !== o || h[25] !== m || h[26] !== g || h[27] !== d
          ? ((p = (0, r.jsxs)(A.x.ItemButton, { ...o, children: [m, g, d] })),
            (h[24] = o),
            (h[25] = m),
            (h[26] = g),
            (h[27] = d),
            (h[28] = p))
          : (p = h[28]),
        p
      )
    }
    var eR = n("aUQk"),
      eP = n("wEsY"),
      eL = n("VOO2"),
      eD = n("iRMi"),
      eN = n("ChYf"),
      eT = n("uk1V"),
      eU = n("B09n"),
      e$ = n("uqg3"),
      eB = n("ndjw")
    function eE(e, t, r) {
      let l = null == t.source ? e.get(J.$q) : e.get(eB.fm, t.source.hostId),
        a = t.source?.hostId ?? l.id
      switch (t.type) {
        case "message-file":
          n.e(713048)
            .then(n.bind(n, "YyG6"))
            .then(({ openOrbitFile: n }) => n(e, a, t))
          return
        case "external-resource":
          if ((0, e$.openSpacePageResource)(e, t.resource)) return
          ;(0, D.PQ)({ event: r, href: t.resource.url, originHostId: a, initiator: t.resource.openInitiator })
          return
        case "appgen-app":
          if (
            null == t.url ||
            (0, eT.oY)(
              e,
              { ...t, url: t.url },
              r,
              !0,
              void 0,
              "split",
              void 0,
              eD.CodexAppgenInteractionSource.CODEX_APPGEN_INTERACTION_SOURCE_RESPONSE_CARD,
            )
          )
            return
          ;(0, D.PQ)({ event: r, href: t.url, originHostId: a, initiator: "mcp_app_resource" })
          return
        case "google-drive":
          ;(0, D.PQ)({ event: r, href: t.url, originHostId: a, initiator: "mcp_app_resource" })
          return
        case "website":
          if ((0, c.hfz)(t.target))
            return void (0, D.PQ)({ event: r, href: t.target, originHostId: a, initiator: "mcp_app_resource" })
      }
      let { cwd: s } = e.get(Y.XU)
      ;(0, eU.openWorkspaceFile)({
        scope: e,
        conversationId: t.source?.conversationId,
        path: "website" === t.type ? t.target : t.path,
        cwd: null != t.source || null == s ? null : (0, c.DIv)(s),
        browserEnabled: e.get(eN.G, { name: "browser.in-app" }).isCapable,
        hostConfig: l.id === a ? l : void 0,
        hostId: a,
        openInSidePanel: "website" !== t.type,
        activatePresentationAnnotationOnboarding: "website" !== t.type,
      })
    }
    let eO = (0, u.i1)(
        j.u,
        (e, { get: t }) =>
          new Set(
            e.filter((e) => {
              let n = t(X.loadedSpacePageMetadata$, e)
              return n?.deleted_at != null || n?.access.can_read === !1
            }),
          ),
        { isEqual: s() },
      ),
      eW = (0, u.i1)(j.u, (e, { get: t }) => new Map(e.map((e) => [e, t(H.qF, { kind: "page", id: e })])), {
        isEqual: s(),
      })
    function eQ(e) {
      let t,
        n,
        a,
        s,
        i,
        b,
        w,
        j,
        I,
        q,
        k,
        L,
        D,
        N,
        T,
        U = (0, l.c)(99),
        {
          List: $,
          forceShowArtifacts: B,
          isInitialLoading: O,
          isVisible: W,
          onOpenPullRequestSidePanel: Q,
          presentation: F,
          renderCloudAeonSummary: G,
          searchQuery: H,
          showCollapsedCount: X,
        } = e,
        et = void 0 === $ ? A.x.List : $,
        en = void 0 !== O && O,
        er = void 0 === F ? "summary" : F,
        el = void 0 === H ? "" : H,
        ea = void 0 === X || X,
        es = (0, u.gh)(_.GD),
        ei = (0, m.A)(),
        eo = "local-thread" === es.value.routeKind ? es.value.conversationId : null,
        eu = (0, u._U)(p.EL, eo),
        ec = (0, u._U)(p.W3, eo),
        ed = (0, u._U)(S.v, eo),
        em = (0, u.Ul)(Y.XU),
        eg = (0, u._U)(x.Qu, eo),
        ep = (0, u.Ul)(J.$q),
        eh = (0, u.Ul)(J.threadHostId$),
        ef = (0, f.As)()
      U[0] !== ep.id ? ((t = { hostId: ep.id }), (U[0] = ep.id), (U[1] = t)) : (t = U[1])
      let ev = (0, y.H)(t)
      U[2] !== eo || U[3] !== ep.id
        ? ((n = { conversationId: eo, hostId: ep.id }), (U[2] = eo), (U[3] = ep.id), (U[4] = n))
        : (n = U[4])
      let ey = ev && !ef.isLoading && null != ef.userId
      U[5] !== ey ? ((a = { enabled: ey }), (U[5] = ey), (U[6] = a)) : (a = U[6])
      let ex = (0, u._U)(eR.a, n, a),
        eb = (0, u._U)(M, W ? eo : null) ?? []
      U[7] !== ed || U[8] !== es.value || U[9] !== ec
        ? ((s = (0, C.hi)(es.value) || (ed && "durable" === ec)),
          (U[7] = ed),
          (U[8] = es.value),
          (U[9] = ec),
          (U[10] = s))
        : (s = U[10])
      let ej = s,
        eM = (0, u._U)(R.P_, ej && W ? eo : null),
        eC = (0, u._U)(R.dQ, ej && W ? eo : null) ?? []
      ;(U[11] !== eM || U[12] !== ex || U[13] !== ej
        ? ((i = ej ? (0, ew.Uu)([[...ex, ...eM].sort(e1)]) : ex), (U[11] = eM), (U[12] = ex), (U[13] = ej), (U[14] = i))
        : (i = U[14]),
        U[15] !== eh
          ? ((b = (e) => {
              if (
                !(0, h.C)(eh) &&
                "external-resource" === e.type &&
                "markdown_link_click" === e.resource.openInitiator
              ) {
                let t = (0, E.XT)(e.resource.url)
                return null == t || !(0, Z.nv)(t.hostname)
              }
              return !0
            }),
            (U[15] = eh),
            (U[16] = b))
          : (b = U[16]))
      let eS = i.filter(b),
        eq = ej ? eC : eb,
        e_ = o()(eS.flatMap(e0), eJ),
        eA = new Map(e_.map(eZ)),
        ek = o()([...eq, ...e_], eY).map((e) => ({ ...e, title: e.title ?? eA.get((0, E.S9)(e.pullRequest)) ?? null })),
        eD = (0, ee.r9)() === ee.O$,
        eN = "projectless" !== eu && "git" === em.kind,
        eT = "summary" !== er || (void 0 !== B && B) || !eN || eD,
        eU = (0, u.Ul)(V.pagesEnabled$),
        e$ = new Set(ek.map(eX)),
        eB = (0, u._U)(eO, eS.flatMap(ez)),
        eQ = eS.filter((e) => {
          if ("external-resource" === e.type) {
            let t = (0, d.I0)(e.resource.url)
            if (t?.kind === "page" && eB.has(t.id)) return !1
            let n = (0, E.XT)(e.resource.url)
            if (null != n && e$.has((0, E.S9)(n))) return !1
            if ((null != n && (0, Z.nv)(n.hostname)) || (eU && t?.kind === "page")) return !0
          }
          return eT
        }),
        e2 = (0, u._U)(eW, 0 === el.trim().length ? [] : eQ.flatMap(eH)),
        e3 = eQ.length + ek.length,
        e4 = "local" === ep.kind ? eP._ : void 0
      if (ej && "summary" === er && null != G) {
        let e, t
        U[17] !== e3 || U[18] !== G ? ((e = G(e3)), (U[17] = e3), (U[18] = G), (U[19] = e)) : (e = U[19])
        let n =
          e_.length > 0 ? (0, r.jsx)(K, { List: et, hostId: eh, outputs: e_, onOpenPullRequestSidePanel: Q }) : null
        return (
          U[20] !== e || U[21] !== n
            ? ((t = (0, r.jsxs)(r.Fragment, { children: [e, n] })), (U[20] = e), (U[21] = n), (U[22] = t))
            : (t = U[22]),
          t
        )
      }
      let e5 = el.trim().toLocaleLowerCase(),
        e6 = eQ.filter((e) => {
          let t = "external-resource" === e.type ? (0, d.I0)(e.resource.url) : null
          return (
            "external-resource" === e.type && t?.kind === "page"
              ? `${(0, z.LV)(e2.get(t.id), ei)} ${e.resource.url}`
              : (function (e, t) {
                  switch (e.type) {
                    case "message-file":
                      return e.name
                    case "file":
                    case "generated-image":
                      return "generated-image" === e.type || (0, ew.aS)(e.path)
                        ? `${t.formatMessage({ id: "codex.localConversation.artifacts.generatedImageGeneric", defaultMessage: "Generated image" })} ${e.path}`
                        : e.path
                    case "external-resource":
                      return `${e.resource.title} ${e.resource.url}`
                    case "google-drive":
                    case "appgen-app":
                      return `${e.title} ${e.url}`
                    case "website":
                      return (0, c.hfz)(e.target)
                        ? `${t.formatMessage({ id: "codex.localConversation.artifacts.localPreview", defaultMessage: "Local preview" })} ${e.target}`
                        : e.target
                  }
                })(e, ei)
          )
            .toLocaleLowerCase()
            .includes(e5)
        }),
        e7 = ek.filter((e) => {
          let { title: t, pullRequest: n } = e
          return `${t ?? ""} ${n.owner}/${n.repository}#${n.number}`.toLocaleLowerCase().includes(e5)
        }),
        e9 = "card" === er || "plain" === er
      ;(U[23] !== et || U[24] !== eh || U[25] !== e9 || U[26] !== e7 || U[27] !== Q || U[28] !== er
        ? ((w =
            e7.length > 0
              ? (0, r.jsx)(K, {
                  List: et,
                  presentation: e9 ? er : "summary",
                  hostId: eh,
                  onOpenPullRequestSidePanel: Q,
                  outputs: e7,
                })
              : null),
          (U[23] = et),
          (U[24] = eh),
          (U[25] = e9),
          (U[26] = e7),
          (U[27] = Q),
          (U[28] = er),
          (U[29] = w))
        : (w = U[29]),
        U[30] !== et ||
        U[31] !== eg ||
        U[32] !== e4 ||
        U[33] !== eD ||
        U[34] !== e9 ||
        U[35] !== e6 ||
        U[36] !== er ||
        U[37] !== es
          ? ((j =
              e6.length > 0
                ? (0, r.jsx)(eI, {
                    List: et,
                    presentation: e9 ? er : "summary",
                    onOpen: (e, t) => eE(es, e, t),
                    artifacts: e6,
                    conversationTitle: eg,
                    getImagePreviewSrc: e4,
                    isEverydayWorkMode: eD,
                  })
                : null),
            (U[30] = et),
            (U[31] = eg),
            (U[32] = e4),
            (U[33] = eD),
            (U[34] = e9),
            (U[35] = e6),
            (U[36] = er),
            (U[37] = es),
            (U[38] = j))
          : (j = U[38]),
        U[39] !== w || U[40] !== j
          ? ((I = (0, r.jsxs)(r.Fragment, { children: [w, j] })), (U[39] = w), (U[40] = j), (U[41] = I))
          : (I = U[41]))
      let e8 = I
      if ("list" === er) {
        let e
        return (
          U[42] !== e6.length || U[43] !== e7.length || U[44] !== e8
            ? ((e =
                e6.length + e7.length > 0
                  ? e8
                  : (0, r.jsx)(v.W, {
                      children: (0, r.jsx)(g.A, {
                        id: "codex.localConversation.outputs.noMatches",
                        defaultMessage: "No outputs found",
                      }),
                    })),
              (U[42] = e6.length),
              (U[43] = e7.length),
              (U[44] = e8),
              (U[45] = e))
            : (e = U[45]),
          e
        )
      }
      if (0 === e3 && (!eT || e9 || "profile" === er)) return null
      U[46] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = (0, r.jsx)(g.A, { id: "codex.localConversation.outputs.title.v2", defaultMessage: "Outputs" })),
          (U[46] = q))
        : (q = U[46])
      let te = q
      if ("card" === er) {
        let e
        ;(U[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(g.A, {
              id: "codex.localConversation.outputs.recentFiles",
              defaultMessage: "Recent files",
            })),
            (U[47] = e))
          : (e = U[47]),
          (te = e))
      }
      if ("profile" === er) {
        let e, t, n, l, a, s
        U[48] !== e6 || U[49] !== e7
          ? ((e = [...e7.map(eV), ...e6.map(eG)]), (U[48] = e6), (U[49] = e7), (U[50] = e))
          : (e = U[50])
        let i = e
        U[51] !== eo || U[52] !== ej || U[53] !== en || U[54] !== e3
          ? ((t =
              ej && null != eo
                ? (0, r.jsx)(P, { conversationId: eo, hasOutputs: e3 > 0, isInitialLoading: en })
                : null),
            (U[51] = eo),
            (U[52] = ej),
            (U[53] = en),
            (U[54] = e3),
            (U[55] = t))
          : (t = U[55])
        let o = en ? "hidden" : "contents",
          u = en || void 0
        return (
          U[56] !== eg || U[57] !== e4 || U[58] !== eh || U[59] !== eD || U[60] !== e6 || U[61] !== Q || U[62] !== es
            ? ((n = (e) =>
                "pull-request" === e.kind
                  ? (0, r.jsx)(K, {
                      presentation: "summary",
                      hostId: eh,
                      onOpenPullRequestSidePanel: Q,
                      outputs: [e.output],
                    })
                  : (0, r.jsx)(eI, {
                      presentation: "summary",
                      artifacts: [e.output],
                      previewArtifacts: e6,
                      conversationTitle: eg,
                      getImagePreviewSrc: e4,
                      isEverydayWorkMode: eD,
                      onOpen: (e, t) => eE(es, e, t),
                    })),
              (U[56] = eg),
              (U[57] = e4),
              (U[58] = eh),
              (U[59] = eD),
              (U[60] = e6),
              (U[61] = Q),
              (U[62] = es),
              (U[63] = n))
            : (n = U[63]),
          U[64] !== et || U[65] !== i || U[66] !== n
            ? ((l = (0, r.jsx)(et, {
                items: i,
                visibleItemLimit: 3,
                visibleItemIncrement: 3,
                preserveExpandedOrder: !0,
                getNewItemPosition: eF,
                getKey: eK,
                children: n,
              })),
              (U[64] = et),
              (U[65] = i),
              (U[66] = n),
              (U[67] = l))
            : (l = U[67]),
          U[68] !== en || U[69] !== o || U[70] !== u || U[71] !== l
            ? ((a = (0, r.jsx)("div", { className: o, inert: en, "aria-hidden": u, children: l })),
              (U[68] = en),
              (U[69] = o),
              (U[70] = u),
              (U[71] = l),
              (U[72] = a))
            : (a = U[72]),
          U[73] !== t || U[74] !== a || U[75] !== te
            ? ((s = (0, r.jsxs)(A.x.Section, {
                sectionKey: "artifacts",
                analyticsControl: "outputs_disclosure",
                divider: !1,
                mode: "accordion",
                title: te,
                children: [t, a],
              })),
              (U[73] = t),
              (U[74] = a),
              (U[75] = te),
              (U[76] = s))
            : (s = U[76]),
          s
        )
      }
      let tt = "summary" === er ? "accordion" : er
      return (
        U[77] !== eT
          ? ((k = eT ? (0, r.jsx)(A.x.SectionActions, { children: (0, r.jsx)(eL.M, { variant: "icon" }) }) : null),
            (U[77] = eT),
            (U[78] = k))
          : (k = U[78]),
        U[79] !== e3 || U[80] !== ea
          ? ((L = ea ? (0, r.jsx)(A.x.SectionCount, { count: e3 }) : void 0), (U[79] = e3), (U[80] = ea), (U[81] = L))
          : (L = U[81]),
        U[82] !== e3 || U[83] !== e5 || U[84] !== eT
          ? ((D = eT && 0 === e5.length && 0 === e3 ? (0, r.jsx)(eL.M, { variant: "row" }) : null),
            (U[82] = e3),
            (U[83] = e5),
            (U[84] = eT),
            (U[85] = D))
          : (D = U[85]),
        U[86] !== e9 || U[87] !== e6.length || U[88] !== e7.length || U[89] !== e8 || U[90] !== e5
          ? ((N =
              e9 && e5.length > 0 && e6.length + e7.length === 0
                ? (0, r.jsx)(v.W, {
                    children: (0, r.jsx)(g.A, {
                      id: "codex.localConversation.outputs.noMatches",
                      defaultMessage: "No outputs found",
                    }),
                  })
                : e8),
            (U[86] = e9),
            (U[87] = e6.length),
            (U[88] = e7.length),
            (U[89] = e8),
            (U[90] = e5),
            (U[91] = N))
          : (N = U[91]),
        U[92] !== tt || U[93] !== k || U[94] !== L || U[95] !== D || U[96] !== N || U[97] !== te
          ? ((T = (0, r.jsxs)(A.x.Section, {
              sectionKey: "artifacts",
              analyticsControl: "outputs_disclosure",
              mode: tt,
              after: k,
              title: te,
              titleSuffix: L,
              children: [D, N],
            })),
            (U[92] = tt),
            (U[93] = k),
            (U[94] = L),
            (U[95] = D),
            (U[96] = N),
            (U[97] = te),
            (U[98] = T))
          : (T = U[98]),
        T
      )
    }
    function eK(e) {
      return "pull-request" === e.kind ? (0, E.S9)(e.output.pullRequest) : (0, ew.sL)(e.output)
    }
    function eF(e) {
      return "pull-request" === e.kind ? "start" : "end"
    }
    function eG(e) {
      return { kind: "artifact", output: e }
    }
    function eV(e) {
      return { kind: "pull-request", output: e }
    }
    function eH(e) {
      let t = "external-resource" === e.type ? (0, d.I0)(e.resource.url) : null
      return t?.kind === "page" ? [t.id] : []
    }
    function ez(e) {
      let t = "external-resource" === e.type ? (0, d.I0)(e.resource.url) : null
      return t?.kind === "page" ? [t.id] : []
    }
    function eX(e) {
      let { pullRequest: t } = e
      return (0, E.S9)(t)
    }
    function eY(e) {
      return (0, E.S9)(e.pullRequest)
    }
    function eZ(e) {
      let { pullRequest: t, title: n } = e
      return [(0, E.S9)(t), n]
    }
    function eJ(e) {
      return (0, E.S9)(e.pullRequest)
    }
    function e0(e) {
      if ("external-resource" !== e.type || "markdown_link_click" !== e.resource.openInitiator) return []
      let t = (0, E.XT)(e.resource.url)
      return null != t && (0, Z.nv)(t.hostname) ? [{ pullRequest: t, title: e.resource.title }] : []
    }
    function e1(e, t) {
      return (t.producedAtMs ?? 0) - (e.producedAtMs ?? 0)
    }
  },
  NRHd(e, t, n) {
    var r = n("ABep"),
      l = n("QosV"),
      a = n("cE8H"),
      s = n("xSOA"),
      i = n("qmMi"),
      o = n("Qgfj"),
      u = n("oyxz"),
      c = n("bqtn"),
      d = n("bVeK"),
      m = n("SGsN"),
      g = n("OWtl")
    let p = (0, o.YK)({
      workspace: {
        id: "taskAttachment.worktreeArchiveWorkspace",
        defaultMessage: "Remove this worktree from your projects before archiving it",
      },
      "in-use": {
        id: "taskAttachment.worktreeArchiveInUseToast",
        defaultMessage: "Another chat is using this worktree.",
      },
      owner: { id: "taskAttachment.worktreeArchiveOwner", defaultMessage: "This chat does not own this worktree" },
    })
    n.d(
      t,
      {},
      {
        d: function (e) {
          let t,
            n,
            o,
            h,
            f,
            v,
            y,
            x = (0, l.c)(23),
            { disabled: b, kind: w, onRemove: j, worktree: I } = e,
            M = (0, i.gh)(g.u),
            C = I?.hostId,
            S = I?.root
          x[0] !== C || x[1] !== S
            ? ((t = { mutationKey: ["archive-thread-worktree", C, S], exact: !0 }), (x[0] = C), (x[1] = S), (x[2] = t))
            : (t = x[2])
          let q = t,
            _ = (0, a.l)(q, M.queryClient) > 0
          x[3] !== j ? ((n = async () => j()), (x[3] = j), (x[4] = n)) : (n = x[4])
          let { isPending: A, mutate: k } = (0, s.n)(
              {
                mutationKey: null == I ? void 0 : q.mutationKey,
                mutationFn: n,
                onSuccess: (e) => {
                  e && P(e)
                },
                onError: () => P(),
              },
              M.queryClient,
            ),
            R = A || _
          function P(e) {
            let t = M.get(m.Id)
            "worktree" === w
              ? t.danger(
                  (0, r.jsx)(u.A, {
                    id: "taskAttachment.worktreeArchiveFailed",
                    defaultMessage: "Could not archive worktree",
                  }),
                  {
                    description: e && (0, r.jsx)(u.A, { ...p[e] }),
                    errorAnalytics: { toastId: "taskAttachment.worktreeArchiveFailed" },
                  },
                )
              : t.danger(
                  (0, r.jsx)(u.A, {
                    id: "taskAttachment.removeFailed",
                    defaultMessage: "Could not remove chat attachment",
                  }),
                  { errorAnalytics: { toastId: "taskAttachment.removeFailed" } },
                )
          }
          x[5] !== w
            ? ((o = "pull-request" === w ? (0, r.jsx)(c.ms.Separator, { className: "first:hidden" }) : null),
              (x[5] = w),
              (x[6] = o))
            : (o = x[6])
          let L = "worktree" === w ? d.kaj : void 0,
            D = b || R
          return (
            x[7] !== q || x[8] !== k || x[9] !== M.queryClient || x[10] !== I
              ? ((h = () => {
                  ;(null != I && M.queryClient.isMutating(q) > 0) || k()
                }),
                (x[7] = q),
                (x[8] = k),
                (x[9] = M.queryClient),
                (x[10] = I),
                (x[11] = h))
              : (h = x[11]),
            x[12] !== w
              ? ((f =
                  "pull-request" === w
                    ? (0, r.jsx)(u.A, { id: "taskAttachment.removePullRequest", defaultMessage: "Remove PR from chat" })
                    : (0, r.jsx)(u.A, { id: "taskAttachment.removeWorktree", defaultMessage: "Archive worktree" })),
                (x[12] = w),
                (x[13] = f))
              : (f = x[13]),
            x[14] !== R || x[15] !== L || x[16] !== D || x[17] !== h || x[18] !== f
              ? ((v = (0, r.jsx)(c.ms.Item, {
                  LeftIcon: L,
                  tone: "danger",
                  "aria-busy": R,
                  disabled: D,
                  onSelect: h,
                  children: f,
                })),
                (x[14] = R),
                (x[15] = L),
                (x[16] = D),
                (x[17] = h),
                (x[18] = f),
                (x[19] = v))
              : (v = x[19]),
            x[20] !== v || x[21] !== o
              ? ((y = (0, r.jsxs)(r.Fragment, { children: [o, v] })), (x[20] = v), (x[21] = o), (x[22] = y))
              : (y = x[22]),
            y
          )
        },
      },
    )
  },
  gKxp(e, t, n) {
    var r = n("ABep"),
      l = n("QosV"),
      a = n("qmMi"),
      s = n("zd8w"),
      i = n("Wf1j"),
      o = n("oyxz"),
      u = n("bqtn"),
      c = n("bVeK"),
      d = n("UxN3"),
      m = n("HFg1"),
      g = n("A3W9"),
      p = n("tSEg"),
      h = n("W4GL"),
      f = n("TUyF"),
      v = n("QyDA"),
      y = n("ZAU2")
    let x = [
      { icon: { 16: c.Wq_, 20: c.rFX }, kind: "document", label: v._.document },
      { icon: m.Q.presentation, kind: "presentation", label: v._.presentation },
      { icon: m.Q.spreadsheet, kind: "spreadsheet", label: v._.spreadsheet },
      { icon: { 16: c.q_r, 20: c.pKn }, kind: "site", label: v._.site },
    ]
    n.d(
      t,
      {},
      {
        p: function (e) {
          let t,
            n,
            m,
            b,
            w,
            j,
            I = (0, l.c)(20),
            M = (0, a.gh)(p.GD),
            C = (0, i.A)(),
            S = (0, a.Ul)(f.U),
            q = (0, s.useRef)(!1),
            { analytics: _ } = (0, s.useContext)(y.G),
            A = e.open
          I[0] !== _ || I[1] !== e
            ? ((t = (t) => {
                ;(t && (0, y.X)(_, "row" === e.variant ? "create_output_row" : "create_output_plus"),
                  e.onOpenChange?.(t))
              }),
              (I[0] = _),
              (I[1] = e),
              (I[2] = t))
            : (t = I[2])
          let k = e.onInteractOutside
          return (
            I[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (e) => {
                  q.current && (e.preventDefault(), (q.current = !1))
                }),
                (I[3] = n))
              : (n = I[3]),
            I[4] !== C || I[5] !== e.variant
              ? ((m =
                  "row" === e.variant
                    ? (0, r.jsx)(h.x.ItemButton, {
                        className: "select-none",
                        interaction: "foreground",
                        tone: "conversation-summary",
                        children: (0, r.jsx)(h.x.ItemLabel, { children: (0, r.jsx)(o.A, { ...v._.create }) }),
                      })
                    : (0, r.jsx)(h.x.IconButton, {
                        label: C.formatMessage(v._.create),
                        children: (0, r.jsx)(c.xFs, { className: "text-text/40" }),
                      })),
                (I[4] = C),
                (I[5] = e.variant),
                (I[6] = m))
              : (m = I[6]),
            I[7] !== S || I[8] !== M
              ? ((b =
                  null != S &&
                  (0, r.jsx)(u.ms.Item, {
                    disabled: !S,
                    leftIcon: (0, r.jsx)(d.b5, { icon: { 16: c.oQS, 20: c.hXV } }),
                    onSelect: () => {
                      q.current = (0, g.kJ)(M)
                    },
                    children: (0, r.jsx)(o.A, {
                      id: "codex.localConversation.artifacts.page",
                      defaultMessage: "Create page",
                    }),
                  })),
                (I[7] = S),
                (I[8] = M),
                (I[9] = b))
              : (b = I[9]),
            I[10] !== e
              ? ((w = x.map((t) => {
                  let { icon: n, kind: l, label: a } = t
                  return (0, r.jsx)(
                    u.ms.Item,
                    {
                      disabled: null != e.availableKinds && !e.availableKinds.includes(l),
                      leftIcon: (0, r.jsx)(d.b5, { icon: n }),
                      onSelect: () => {
                        q.current = e.onCreate(l)
                      },
                      children: (0, r.jsx)(o.A, { ...a }),
                    },
                    a.id,
                  )
                })),
                (I[10] = e),
                (I[11] = w))
              : (w = I[11]),
            I[12] !== e.children ||
            I[13] !== e.onInteractOutside ||
            I[14] !== e.open ||
            I[15] !== t ||
            I[16] !== m ||
            I[17] !== b ||
            I[18] !== w
              ? ((j = (0, r.jsxs)(u.Ab, {
                  align: "end",
                  contentWidth: "sm",
                  open: A,
                  onOpenChange: t,
                  onInteractOutside: k,
                  onCloseAutoFocus: n,
                  triggerButton: m,
                  children: [b, w, e.children],
                })),
                (I[12] = e.children),
                (I[13] = e.onInteractOutside),
                (I[14] = e.open),
                (I[15] = t),
                (I[16] = m),
                (I[17] = b),
                (I[18] = w),
                (I[19] = j))
              : (j = I[19]),
            j
          )
        },
      },
    )
  },
  QyDA(e, t, n) {
    let r = (0, n("Qgfj").YK)({
      create: { id: "codex.localConversation.artifacts.create", defaultMessage: "Create an output" },
      document: { id: "codex.localConversation.artifacts.document", defaultMessage: "Create document" },
      presentation: { id: "codex.localConversation.artifacts.presentation", defaultMessage: "Create presentation" },
      spreadsheet: { id: "codex.localConversation.artifacts.spreadsheet", defaultMessage: "Create spreadsheet" },
      site: { id: "codex.localConversation.artifacts.site", defaultMessage: "Create site" },
    })
    n.d(t, {}, { _: r })
  },
  a8tI(e, t, n) {
    n.d(
      t,
      {},
      {
        J: (e, t, n) => {
          let r = e.closest("[data-summary-panel-variant]")
          if (null != r && null != n) {
            let l = r.getBoundingClientRect()
            if (l.left >= (n + 8) * t + 6)
              return { align: "start", side: "left", sideOffset: e.getBoundingClientRect().left - l.left + 8 * t }
          }
          return { align: "end", side: "bottom" }
        },
      },
    )
  },
  gAOF(e, t, n) {
    var r = n("qmMi"),
      l = n("tSEg")
    let a = (0, r.vP)(l.GD, () => null),
      s = (0, r.i1)(l.GD, (e, { get: t }) => t(a) === e)
    n.d(t, {}, { D: a, o: s })
  },
  kIfn(e, t, n) {
    var r = n("ABep"),
      l = n("QosV")
    n.d(
      t,
      {},
      {
        U: function (e) {
          let t,
            n,
            a,
            s,
            i,
            o,
            u,
            c,
            d = (0, l.c)(16)
          return (
            d[0] !== e
              ? (({ onClick: t, onFocus: n, onKeyDown: a, ...s } = e),
                (d[0] = e),
                (d[1] = t),
                (d[2] = n),
                (d[3] = a),
                (d[4] = s))
              : ((t = d[1]), (n = d[2]), (a = d[3]), (s = d[4])),
            d[5] !== t
              ? ((i = (e) => {
                  ;(e.preventDefault(), t?.(e))
                }),
                (d[5] = t),
                (d[6] = i))
              : (i = d[6]),
            d[7] !== n
              ? ((o = (e) => {
                  ;(e.target === e.currentTarget && e.currentTarget.querySelector("button, a")?.focus(), n?.(e))
                }),
                (d[7] = n),
                (d[8] = o))
              : (o = d[8]),
            d[9] !== a
              ? ((u = (e) => {
                  e.target !== e.currentTarget && ("Enter" === e.key || " " === e.key) ? e.stopPropagation() : a?.(e)
                }),
                (d[9] = a),
                (d[10] = u))
              : (u = d[10]),
            d[11] !== s || d[12] !== i || d[13] !== o || d[14] !== u
              ? ((c = (0, r.jsx)("div", {
                  ...s,
                  role: "presentation",
                  tabIndex: -1,
                  onClick: i,
                  onFocus: o,
                  onKeyDown: u,
                })),
                (d[11] = s),
                (d[12] = i),
                (d[13] = o),
                (d[14] = u),
                (d[15] = c))
              : (c = d[15]),
            c
          )
        },
      },
    )
  },
  nv3f(e, t, n) {
    let r = (0, n("ESTr").a)({
      name: "exclamation-mark-triangle-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.469971, y: 2.531738, width: 17.060303, height: 14.800293 },
        visualBounds: { x: 1.469971, y: 2.531738, width: 17.060303, height: 14.800293 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.469971, y: 2.531738, width: 17.060303, height: 14.800293 },
        center: { x: 10.000123, y: 9.931884 },
        insets: { top: 2.531738, right: 1.469726, bottom: 2.667969, left: 1.469971 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.000123, y: 9.931884 },
          foreground: { x: 10.000123, y: 9.931884 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M10.1056 12.5597C10.625 12.6125 11.0304 13.0517 11.0304 13.5851C11.0304 14.154 10.5691 14.6152 10.0002 14.6153C9.46674 14.6153 9.02754 14.21 8.97476 13.6905L8.96988 13.5851L8.97476 13.4796C9.0276 12.9602 9.46678 12.5548 10.0002 12.5548L10.1056 12.5597Z" fill="currentColor"/> <path d="M10.0002 7.25205C10.3673 7.25218 10.6652 7.5499 10.6652 7.91709V10.6251C10.6652 10.9923 10.3673 11.29 10.0002 11.2901C9.63288 11.2901 9.33511 10.9924 9.33511 10.6251V7.91709C9.33511 7.54982 9.63288 7.25205 10.0002 7.25205Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00992 3.64756C8.9191 2.1598 11.0802 2.1598 11.9894 3.64756L18.1847 13.7843C19.1339 15.338 18.0153 17.3321 16.1945 17.3321H3.80484C1.9842 17.332 0.866475 15.3379 1.81558 13.7843L8.00992 3.64756ZM10.8546 4.34092C10.4641 3.70179 9.53526 3.70179 9.14468 4.34092L2.95035 14.4776C2.54284 15.145 3.02284 16.0019 3.80484 16.002H16.1945C16.9766 16.002 17.4566 15.1451 17.049 14.4776L10.8546 4.34092Z" fill="currentColor"/>',
    })
    n.d(t, {}, { X: r })
  },
}
//# sourceMappingURL=523871.1b7f261c1c.js.map
