export const __rspack_esm_ids = [143641]
export const __webpack_modules__ = {
  ZAtJ(e, t, a) {
    a.d(t, { F: () => m, x: () => p })
    var l = a("ABep"),
      r = a("QosV"),
      n = a("on57"),
      i = a("mEbU"),
      s = a("zd8w"),
      o = a("X3K1"),
      d = a("SQbA"),
      c = a("Dxqv"),
      u = (e) =>
        (0, l.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 120,
          height: 75,
          viewBox: "0 0 120 75",
          fill: "none",
          ...e,
          children: (0, l.jsxs)("g", {
            transform: "translate(48 25.5)",
            children: [
              (0, l.jsx)("path", {
                d: "M22 19.2727C22 20.779 20.779 22 19.2727 22H14.7273C13.221 22 12 20.779 12 19.2727V12H19.2727C20.779 12 22 13.221 22 14.7273V19.2727Z",
                fill: "#68C4FF",
              }),
              (0, l.jsx)("path", {
                d: "M20 2C21.1046 2 22 2.89543 22 4V7C22 8.10457 21.1046 9 20 9H17C15.8954 9 15 8.10457 15 7V4C15 2.89543 15.8954 2 17 2H20Z",
                fill: "#0C79D8",
              }),
              (0, l.jsx)("path", {
                d: "M7 15C8.10457 15 9 15.8954 9 17V20C9 21.1046 8.10457 22 7 22H4C2.89543 22 2 21.1046 2 20V17C2 15.8954 2.89543 15 4 15H7Z",
                fill: "#0C79D8",
              }),
              (0, l.jsx)("path", {
                d: "M12 12H4.72727C3.22104 12 2 10.779 2 9.27273V4.72727C2 3.22104 3.22104 2 4.72727 2H9.27273C10.779 2 12 3.22104 12 4.72727V12Z",
                fill: "#2E9EFF",
              }),
            ],
          }),
        })
    function g(e) {
      let t,
        a,
        i,
        s = (0, r.c)(7),
        { className: o, gallery: d } = e
      return (
        s[0] !== o
          ? ((t = (0, n.A)("flex aspect-8/5 items-center justify-center overflow-hidden bg-surface", o)),
            (s[0] = o),
            (s[1] = t))
          : (t = s[1]),
        s[2] !== d
          ? ((a = d ? (0, l.jsx)(u, { className: "size-full" }) : (0, l.jsx)(c.A, { className: "shrink-0" })),
            (s[2] = d),
            (s[3] = a))
          : (a = s[3]),
        s[4] !== t || s[5] !== a
          ? ((i = (0, l.jsx)("span", { "aria-hidden": !0, className: t, children: a })),
            (s[4] = t),
            (s[5] = a),
            (s[6] = i))
          : (i = s[6]),
        i
      )
    }
    function p(e) {
      let t,
        a,
        n = (0, r.c)(4),
        o = (0, s.useRef)(null)
      n[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { margin: "200px", once: !0 }), (n[0] = t)) : (t = n[0])
      let d = (0, i.W)(o, t)
      return (
        n[1] !== e || n[2] !== d
          ? ((a = d ? (0, l.jsx)(h, { ...e }) : (0, l.jsx)("span", { ref: o, className: f(e.viewMode) })),
            (n[1] = e),
            (n[2] = d),
            (n[3] = a))
          : (a = n[3]),
        a
      )
    }
    function h(e) {
      let t,
        a,
        i,
        c = (0, r.c)(11),
        { screenshotUrl: u, viewMode: p } = e,
        { data: h, isError: m } = (0, d.Xm)(u),
        [v, y] = (0, s.useState)(null),
        [b, _] = (0, s.useState)(null),
        x = null != h && h === v,
        I = null == u || m || (null != h && h === b)
      return (
        c[0] !== I || c[1] !== p
          ? ((t = (0, n.A)(f(p), !I && "bg-surface-secondary")), (c[0] = I), (c[1] = p), (c[2] = t))
          : (t = c[2]),
        c[3] !== x || c[4] !== h || c[5] !== I || c[6] !== p
          ? ((a = I
              ? (0, l.jsx)(g, { className: "size-full", gallery: "grid" === p })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsx)(o.X, {
                      as: "span",
                      animate: !x,
                      className: "absolute inset-0 rounded-none",
                      size: "fill",
                      variant: "chatgpt-project",
                    }),
                    null == h
                      ? null
                      : (0, l.jsx)("img", {
                          alt: "",
                          className: (0, n.A)(
                            "relative size-full object-cover motion-safe:transition-opacity motion-safe:duration-relaxed",
                            x ? "opacity-100" : "opacity-0",
                          ),
                          loading: "lazy",
                          src: h,
                          onLoad: () => y(h),
                          onError: () => _(h),
                        }),
                  ],
                })),
            (c[3] = x),
            (c[4] = h),
            (c[5] = I),
            (c[6] = p),
            (c[7] = a))
          : (a = c[7]),
        c[8] !== t || c[9] !== a
          ? ((i = (0, l.jsx)("span", { className: t, children: a })), (c[8] = t), (c[9] = a), (c[10] = i))
          : (i = c[10]),
        i
      )
    }
    function m(e) {
      let t,
        a,
        o,
        d,
        c = (0, r.c)(7),
        { screenshotUrl: u } = e,
        g = (0, s.useRef)(null)
      c[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { margin: "200px", once: !0 }), (c[0] = t)) : (t = c[0])
      let p = (0, i.W)(g, t)
      return (
        c[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.A)(
              "relative after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-[inherit] after:shadow-[inset_0_0_0_1px_var(--color-border)]",
              "h-7.5 w-10 shrink-0 rounded-xs",
              "pointer-events-none flex overflow-hidden bg-surface",
            )),
            (c[1] = a))
          : (a = c[1]),
        c[2] !== u || c[3] !== p
          ? ((o = p ? (0, l.jsx)(h, { screenshotUrl: u, viewMode: "grid" }) : null), (c[2] = u), (c[3] = p), (c[4] = o))
          : (o = c[4]),
        c[5] !== o
          ? ((d = (0, l.jsx)("span", {
              ref: g,
              "aria-hidden": !0,
              "data-library-item-icon": "",
              className: a,
              children: o,
            })),
            (c[5] = o),
            (c[6] = d))
          : (d = c[6]),
        d
      )
    }
    function f(e) {
      return (0, n.A)(
        "pointer-events-none relative z-10 overflow-hidden",
        "grid" === e
          ? "min-h-0 flex-1"
          : [
              "relative after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-[inherit] after:shadow-[inset_0_0_0_1px_var(--color-border)]",
              "h-[50px] w-20 shrink-0 rounded-[6px]",
            ],
      )
    }
  },
  NkHr(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      n = a("oyxz"),
      i = a("Qgfj"),
      s = a("tWaO"),
      o = a("KIKs")
    a.d(
      t,
      {},
      {
        g: function (e) {
          let t,
            a,
            d = (0, r.c)(10),
            { dateString: c } = e,
            u = (0, o.wv)()
          d[0] !== c || d[1] !== u ? ((t = (0, s.w)(c, u)), (d[0] = c), (d[1] = u), (d[2] = t)) : (t = d[2])
          let { unit: g, value: p } = t
          if ("minute" === g) {
            let e
            return (
              d[3] !== p
                ? ((e = (0, l.jsx)(n.A, {
                    id: "appgenPage.updatedMinutesAgo",
                    defaultMessage: "{value}m ago",
                    values: { value: p },
                  })),
                  (d[3] = p),
                  (d[4] = e))
                : (e = d[4]),
              e
            )
          }
          if ("hour" === g) {
            let e
            return (
              d[5] !== p
                ? ((e = (0, l.jsx)(n.A, {
                    id: "appgenPage.updatedHoursAgo",
                    defaultMessage: "{value}h ago",
                    values: { value: p },
                  })),
                  (d[5] = p),
                  (d[6] = e))
                : (e = d[6]),
              e
            )
          }
          if ("day" === g && 1 === p) {
            let e
            return (
              d[7] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, l.jsx)(n.A, { id: "appgenPage.updatedYesterday", defaultMessage: "Yesterday" })),
                  (d[7] = e))
                : (e = d[7]),
              e
            )
          }
          return (
            d[8] !== c
              ? ((a = (0, l.jsx)(i.XU, { value: c, month: "short", day: "numeric" })), (d[8] = c), (d[9] = a))
              : (a = d[9]),
            a
          )
        },
      },
    )
  },
  p690(e, t, a) {
    var l = a("qmMi"),
      r = a("SPnB"),
      n = a("xjn7"),
      i = a("OWtl"),
      s = a("Nwp9")
    let o = "list",
      d = (0, s.m3)("sites-view-mode", o, { coerceStoredValue: (e) => ("grid" === e || "list" === e ? e : o) }),
      c = (0, l.un)(i.u, ({ get: e }) => {
        let t = e(r.chatGptAuthenticatedAccountId$)
        return null == t ? null : (0, n.XS)({ accountId: t, userId: e(r.chatGptAuthenticatedUserId$) })
      }),
      u = (0, l.un)(i.u, ({ get: e }) => {
        let t = e(c)
        return (null == t ? void 0 : e(n.by, t).viewMode) ?? e(d)
      })
    a.d(
      t,
      {},
      {
        b: function (e, t) {
          let a = e.get(c)
          null == a ? e.set(d, t) : (0, n.pV)(e, a, { viewMode: t })
        },
        x: u,
      },
    )
  },
  M3lc(e, t, a) {
    var l = a("QosV"),
      r = a("qmMi"),
      n = a("zd8w"),
      i = a("Wf1j"),
      s = a("uNsz"),
      o = a("jU86"),
      d = a("QoH2"),
      c = a("jrp4"),
      u = a("yjV3"),
      g = a("hZax"),
      p = a("OMIV"),
      h = a("bIvi"),
      m = a("cyb2"),
      f = a("B1DJ")
    a("nr53")
    var v = a("YR5g")
    a.d(
      t,
      {},
      {
        O: function (e) {
          let t,
            a,
            y = (0, l.c)(9),
            { routeScope: b, isVisible: _, onNavigateToSite: x } = e,
            I = (0, r.gh)(o.Qy),
            w = (0, i.A)(),
            S = (0, g.Zj)("2881922323"),
            j = (0, r.Ul)(!!_ && o.Lo),
            P = (0, h.K)(x)
          return (
            y[0] !== w || y[1] !== _ || y[2] !== P || y[3] !== b || y[4] !== I || y[5] !== j || y[6] !== S
              ? ((t = () => {
                  if ((!S && !j) || !_) return
                  let e = { mounted: !0 },
                    t = (t, a, l, r) => {
                      let n = "node" in t,
                        i = n ? (0, d.G9)(t) : t.live_url
                      if (null == i) return !1
                      let g = !1
                      if (n) {
                        if ((0, u._)(I, i, "sites_library")) return (l(), !0)
                      } else {
                        if ("suspended" === t.status || !I.get(o.Lo)) return !1
                        let e = b.get(v.G, {
                          canEdit: "owner" === t.current_user_role || "editor" === t.current_user_role,
                          hasLiveUrl: !0,
                          canNavigateToSite: !0,
                        })
                        if (!e.opensPreview) return ((0, v.I)({ event: a, externalUrl: i, onEdit: r }), l(), !0)
                        g = e.showComposer
                      }
                      let h = n ? (0, s.h5)(t) : t.id
                      if (null == h) return !1
                      let y = I.get(o.g_)
                      return (
                        (0, f.A)(b, {
                          analyticsSource: m.Mz.CODEX_APPGEN_INTERACTION_SOURCE_LIBRARY,
                          resource: {
                            type: "appgen-app",
                            projectId: h,
                            title: n ? I.get(c.g, t) : t.title,
                            url: i,
                            publishedSiteUrl: i,
                          },
                          event: a,
                          lifecycle: e,
                          intl: w,
                          onOpened: l,
                          onNavigateToSite: P,
                          presentation: "full-width",
                          showComposer: g,
                          launchInfo: void 0,
                          isStillCurrent: () => I.get(o.g_) === y && (n ? I.get(p.JW, "2881922323") : I.get(o.Lo)),
                        }),
                        !0
                      )
                    }
                  return (
                    I.set(d.u$, () => t),
                    () => {
                      ;((e.mounted = !1), e.closeExternalOpen?.(), I.get(d.u$) === t && I.set(d.u$, null))
                    }
                  )
                }),
                (a = [S, j, w, _, P, b, I]),
                (y[0] = w),
                (y[1] = _),
                (y[2] = P),
                (y[3] = b),
                (y[4] = I),
                (y[5] = j),
                (y[6] = S),
                (y[7] = t),
                (y[8] = a))
              : ((t = y[7]), (a = y[8])),
            (0, n.useLayoutEffect)(t, a),
            null
          )
        },
      },
    )
  },
  B1DJ(e, t, a) {
    var l = a("qmMi"),
      r = a("E8Sp"),
      n = a("ZU27"),
      i = a("SPnB"),
      s = a("QdUF"),
      o = a("Ot7V"),
      d = a("SGsN"),
      c = a("tSEg"),
      u = a("uk1V")
    let g = (0, l.vP)(c.GD, Symbol())
    a.d(
      t,
      {},
      {
        A: async function (
          e,
          {
            resource: t,
            analyticsSource: a,
            event: l,
            lifecycle: c,
            intl: p,
            onNavigateToSite: h,
            presentation: m = "split",
            showComposer: f = !1,
            launchInfo: v,
            onOpened: y,
            onPreviewUnavailable: b,
            isStillCurrent: _,
          },
        ) {
          let x = e.get(r.gM),
            I = e.get(i.chatGptAuthenticatedAccountId$),
            w = e.get(n.It.activeTab$)?.tabId,
            S = null != v,
            j = Symbol(),
            P = (t = e) =>
              c.mounted &&
              (_?.() ?? !0) &&
              t.get(g) === j &&
              !(0, s.isBrowserWorkspaceSwitchPending)() &&
              t.get(r.gM) === x &&
              t.get(i.chatGptAuthenticatedAccountId$) === I &&
              t.get(n.It.activeTab$)?.tabId === w
          S && e.set(g, j)
          let A = t,
            C = !0
          if (null != v && !l?.metaKey && !l?.ctrlKey && !l?.shiftKey && !l?.altKey) {
            try {
              let e = await v
              if (null == e.live_url) {
                P() && b?.()
                return
              }
              A = { ...t, url: e.live_url, preferredLiveUrl: e.live_url, publishedSiteUrl: e.live_url }
            } catch {
              C = !1
            }
            if (!P()) return
          }
          let E = A.url
          if (null == E) return
          if (C && (0, u.oY)(e, A, l, !0, h, m, f, a)) return void y?.("preview")
          if (null != b) return void b()
          let k = (e) => {
            ;(null != e
              ? (0, o.PQ)({
                  event: e,
                  href: E,
                  initiator: "sites_library",
                  openTarget: "external-browser",
                  disposition: "new-tab",
                })
              : (0, o.E0)({
                  href: E,
                  initiator: "sites_library",
                  openTarget: "external-browser",
                  disposition: "new-tab",
                })) && y?.("external")
          }
          if (S && navigator.userActivation?.isActive === !1) {
            let t
            c.closeExternalOpen?.()
            let a = () => {
                ;(t?.(),
                  (t = void 0),
                  window.removeEventListener(s.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, r),
                  c.closeExternalOpen === l && (c.closeExternalOpen = void 0))
              },
              l = () => {
                ;(n.close(), a())
              },
              r = () => {
                P() || l()
              },
              n = e
                .get(d.Id)
                .info(
                  p.formatMessage({
                    id: "appgenPage.preview.externalOpen.title",
                    defaultMessage: "Open this Site in a new tab",
                  }),
                  {
                    id: "sites-preview-external-open",
                    duration: 0,
                    onRemove: a,
                    primaryAction: {
                      label: p.formatMessage({ id: "appgenPage.openSite.label", defaultMessage: "Open site" }),
                      onClick: () => {
                        let e = P()
                        ;(l(), e && k())
                      },
                    },
                  },
                )
            ;((c.closeExternalOpen = l),
              window.addEventListener(s.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, r),
              (t = e.watch((e) => {
                P(e) || l()
              })),
              r())
            return
          }
          k(l)
        },
      },
    )
  },
  YR5g(e, t, a) {
    var l = a("qmMi"),
      r = a("Ot7V"),
      n = a("tSEg"),
      i = a("OMIV"),
      s = a("uk1V"),
      o = a("ZIh4")
    let d = (0, l.i1)(n.GD, ({ canEdit: e, hasLiveUrl: t, canNavigateToSite: a }, { get: l, scope: r }) => {
      let n = l(i.JW, "1498265771"),
        d = !0 === s.Fg.isAvailable(r)
      return { opensPreview: n && (a || d) && t, showComposer: n && e && d && l(o.Wb) }
    })
    a.d(
      t,
      {},
      {
        G: d,
        I: function ({ event: e, externalUrl: t, onEdit: a }) {
          if (null != a) a()
          else if (null != t) {
            let a = { href: t, initiator: "sites_library", openTarget: "external-browser" }
            return null == e ? (0, r.E0)(a) : (0, r.PQ)({ ...a, event: e })
          }
          return !1
        },
      },
    )
  },
  OWcD(e, t, a) {
    var l = a("qmMi"),
      r = a("SPnB"),
      n = a("Kwur"),
      i = a("e1xH"),
      s = a("OWtl")
    let o = (0, l.vU)(s.u, (e, { get: t }) => {
      let a = t(r.chatGptAuthenticatedAccountId$),
        l = t(r.chatGptAuthenticatedUserId$)
      return {
        queryKey: ["global-search-open", e, a, l],
        enabled: null != a && null != l && t(i.gG),
        queryFn: async ({ signal: e }) =>
          (await n.Request.postResponse("/global/search/open", { signal: e, retry: !1 })).status,
        retry: !1,
        retryOnMount: !0,
        refetchOnMount: "always",
        refetchOnWindowFocus: !1,
        refetchOnReconnect: !1,
      }
    })
    a.d(t, {}, { f: o })
  },
  GigQ(e, t, a) {
    a.d(
      t,
      {},
      {
        $: function (e, t) {
          let a,
            l = e.attachments[0]
          if (l?.kind === "media_generation") {
            if (1 !== e.attachments.length || l.output_blocked || null == l.asset_pointer || null == l.messages)
              return null
            let t = l.asset_pointer.split("?")[0],
              r = l.messages
            if (
              !r.some(
                (e, a) =>
                  "assistant" === e.author.role &&
                  "string" == typeof e.recipient &&
                  r
                    .slice(a + 1)
                    .some(
                      (a) =>
                        "tool" === a.author.role &&
                        a.author.name === e.recipient &&
                        "multimodal_text" === a.content.content_type &&
                        a.content.parts.some(
                          (e) =>
                            "string" != typeof e &&
                            "content_type" in e &&
                            "image_asset_pointer" === e.content_type &&
                            e.asset_pointer.split("?")[0] === t,
                        ),
                    ),
              )
            )
              return null
            a = r
          } else {
            if (!(
              e.attachments.length > 0 &&
              e.attachments.every(
                (e) => ("message_slice" === e.kind || "deep_research" === e.kind) && e.messages.length > 0,
              )
            ))
              return null
            a = e.attachments.flatMap((e) =>
              "message_slice" === e.kind || "deep_research" === e.kind ? e.messages : [],
            )
          }
          let r = { id: "y-root", message: null, parent: null, children: [] },
            n = [r],
            i = new Set([r.id])
          for (let e of a) {
            if (!e.id || i.has(e.id)) return null
            ;(i.add(e.id), (r.children = [e.id]))
            let t = { id: e.id, message: e, parent: r.id, children: [] }
            ;(n.push(t), (r = t))
          }
          return {
            conversation_id: t,
            current_node: r.id,
            mapping: Object.fromEntries(n.map((e) => [e.id, e])),
            linear_conversation: n,
            title: null,
            moderation_results: [],
            moderation_state: {},
            has_user_editable_context: !1,
            is_public: !1,
            is_indexable: !1,
            continue_conversation_url: "",
          }
        },
      },
    )
  },
  XPCU(e, t, a) {
    var l = a("Kwur")
    a.d(
      t,
      {},
      {
        I: function (e) {
          if (null == e || 0 === e.trim().length) return null
          try {
            return new URL((0, l.CP)(e) ?? e, window.location.href).href
          } catch {
            return null
          }
        },
      },
    )
  },
  eMKR(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      n = a("qmMi"),
      i = a("zd8w"),
      s = a("SPnB"),
      o = a("OMIV"),
      d = a("zHp1"),
      c = a("QufO"),
      u = a("HBVP"),
      g = a("TCFx"),
      p = a("jU86"),
      h = a("ahQQ"),
      m = a("iMhR")
    function f(e) {
      let t,
        a,
        l = (0, r.c)(4),
        { recoverPrefetch: f } = e,
        y = (0, n.gh)(h.Qy)
      return (
        l[0] !== f || l[1] !== y
          ? ((t = () => {
              let e,
                t = !1,
                a = y.watch((a) => {
                  if ((f && !a.get(m.rV)) || !a.get(o.JW, "2092319279") || !a.get(o.JW, "2457328746"))
                    return void e?.abort()
                  let l = a.query.getOptions(p.i3),
                    r = a.get(s.chatGptAuthenticatedAccountId$),
                    n = a.get(s.chatGptAuthenticatedUserId$),
                    i = a.get(s.o8)
                  if (!1 === l.enabled || y.value.accountId !== r || y.value.userId !== n) return void e?.abort()
                  let { signal: h } = (e = e ?? new AbortController())
                  if (t || h.aborted) return
                  let b = y.queryClient.getQueryCache(),
                    _ = b.build(y.queryClient, l),
                    x = () => {
                      if (t || null == _.state.data) return
                      t = !0
                      let e = y.get(p.AH)?.filter(v).slice(0, 15)
                      if (null == e) return
                      let a = e.values()
                      Promise.all(
                        Array.from({ length: Math.min(4, e.length) }, async () => {
                          for (let e of a) {
                            if (
                              h.aborted ||
                              (f && !y.get(m.rV)) ||
                              "visible" !== document.visibilityState ||
                              y.get(s.chatGptAuthenticatedAccountId$) !== r ||
                              y.get(s.chatGptAuthenticatedUserId$) !== n ||
                              y.get(s.o8) !== i
                            )
                              return
                            if (!((0, g.zu)(e) && y.get(c.sd) && y.get(o.JW, "3795342290")))
                              try {
                                await (0, d.r1)(
                                  y.queryClient,
                                  e.node.id,
                                  (0, u.L)({
                                    accountId: r,
                                    userId: i,
                                    file: {
                                      id: e.node.id,
                                      file_id: e.node.file_id ?? e.node.id,
                                      file_name: e.node.name,
                                      gizmo_id: e.node.gizmo_id,
                                      mime_type: e.node.mime_type,
                                    },
                                    currentVersion: e.node.current_version_number,
                                    modifiedAt: e.node.updated_at,
                                    useDownloadUrlAsImageSrc: !0,
                                  }),
                                  h,
                                  () =>
                                    y.get(s.chatGptAuthenticatedAccountId$) === r &&
                                    y.get(s.chatGptAuthenticatedUserId$) === n &&
                                    y.get(s.o8) === i,
                                  f,
                                )
                              } catch {}
                          }
                        }),
                      )
                    },
                    I = b.subscribe((e) => {
                      e.query === _ && x()
                    })
                  return (x(), I)
                })
              return () => {
                ;(e?.abort(), a())
              }
            }),
            (a = [y, f]),
            (l[0] = f),
            (l[1] = y),
            (l[2] = t),
            (l[3] = a))
          : ((t = l[2]), (a = l[3])),
        (0, i.useEffect)(t, a),
        null
      )
    }
    function v(e) {
      let t = (0, g.sm)(e)
      return (
        "file" === e.node.kind &&
        "image" === e.node.library_file_category &&
        null == e.node.saved_entity &&
        ("native" === t || "native_shared" === t)
      )
    }
    a.d(
      t,
      {},
      {
        n: function () {
          let e,
            t = (0, r.c)(2),
            a = (0, n.Ul)(m.wA)
          return (
            t[0] !== a
              ? ((e =
                  null != a
                    ? (0, l.jsx)(n.Ui, {
                        scope: h.Qy,
                        value: a,
                        children: (0, l.jsx)(f, { recoverPrefetch: a === m.BG }),
                      })
                    : null),
                (t[0] = a),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        },
      },
    )
  },
  BuIP(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      n = a("on57"),
      i = a("qmMi"),
      s = a("ZAtJ"),
      o = a("NkHr"),
      d = a("bVeK"),
      c = a("OWtl"),
      u = a("T7QO"),
      g = a("BG6H"),
      p = a("W9pA")
    a.d(
      t,
      {},
      {
        G: function (e) {
          let t,
            a,
            h,
            m,
            f,
            v,
            y = (0, r.c)(31),
            {
              project: b,
              viewMode: _,
              structuredGridEnabled: x,
              previewBorder: I,
              layout: w,
              reserveDisclosureSpace: S,
              link: j,
              onOpen: P,
              actions: A,
              scheduled: C,
              owner: E,
              source: k,
              detail: M,
              status: T,
              pin: O,
            } = e,
            N = void 0 !== x && x,
            U = void 0 !== I && I,
            F = (0, i.gh)(c.u)
          y[0] !== O || y[1] !== _
            ? ((t =
                O &&
                ((e) => {
                  let { className: t } = e
                  return (0, l.jsx)(p.K, { className: t, action: O, viewMode: _ })
                })),
              (y[0] = O),
              (y[1] = _),
              (y[2] = t))
            : (t = y[2])
          let R = t
          y[3] !== j || y[4] !== P || y[5] !== b.title
            ? ((a = { name: b.title, link: j, onOpen: P }), (y[3] = j), (y[4] = P), (y[5] = b.title), (y[6] = a))
            : (a = y[6])
          let L = a
          return (
            y[7] !== O || y[8] !== F
              ? ((h = () => O?.prefetch?.(F)),
                (m = () => O?.prefetch?.(F)),
                (y[7] = O),
                (y[8] = F),
                (y[9] = h),
                (y[10] = m))
              : ((h = y[9]), (m = y[10])),
            y[11] !== A ||
            y[12] !== M ||
            y[13] !== L ||
            y[14] !== w ||
            y[15] !== E ||
            y[16] !== O ||
            y[17] !== R ||
            y[18] !== U ||
            y[19] !== b ||
            y[20] !== S ||
            y[21] !== C ||
            y[22] !== k ||
            y[23] !== T ||
            y[24] !== N ||
            y[25] !== _
              ? ((f =
                  "list" === _
                    ? (0, l.jsx)(u.kt, {
                        ...L,
                        layout: w,
                        reserveDisclosureSpace: S,
                        artwork: (0, l.jsx)(d.pKn, {}),
                        thumbnail: "stacked" === w ? (0, l.jsx)(s.F, { screenshotUrl: b.screenshot_url }) : void 0,
                        source: k,
                        favoriteMarker: T,
                        detail: M,
                        activity: b.updated_at ? (0, l.jsx)(o.g, { dateString: b.updated_at }) : null,
                        sharedBy: "stacked" === w ? (E ?? (0, l.jsx)(g.M, { item: { siteProject: b } })) : void 0,
                        actions: [
                          { key: "automations", render: C },
                          { key: "pin", render: R, alwaysVisible: O?.pinned },
                          { key: "menu", render: A },
                        ],
                      })
                    : (0, l.jsx)(u.cu, {
                        ...L,
                        structuredGridEnabled: N,
                        sitePreview: !0,
                        previewStageClassName: (0, n.A)(U && "border border-subtle"),
                        square: !0,
                        landscape: !0,
                        actions: A,
                        pinAction: R,
                        actionIndicator: O?.pinned ? (0, l.jsx)(p.L, { action: O }) : null,
                        header: (0, l.jsxs)(l.Fragment, {
                          children: [
                            !N && (0, l.jsx)(d.pKn, {}),
                            (0, l.jsx)("span", { className: "min-w-0 truncate", children: b.title }),
                            T,
                          ],
                        }),
                        children: (0, l.jsx)(s.x, { screenshotUrl: b.screenshot_url, viewMode: "grid" }),
                      })),
                (y[11] = A),
                (y[12] = M),
                (y[13] = L),
                (y[14] = w),
                (y[15] = E),
                (y[16] = O),
                (y[17] = R),
                (y[18] = U),
                (y[19] = b),
                (y[20] = S),
                (y[21] = C),
                (y[22] = k),
                (y[23] = T),
                (y[24] = N),
                (y[25] = _),
                (y[26] = f))
              : (f = y[26]),
            y[27] !== h || y[28] !== m || y[29] !== f
              ? ((v = (0, l.jsx)("div", { className: "contents", onPointerEnter: h, onFocusCapture: m, children: f })),
                (y[27] = h),
                (y[28] = m),
                (y[29] = f),
                (y[30] = v))
              : (v = y[30]),
            v
          )
        },
      },
    )
  },
  AoIz(e, t, a) {
    a.a(e, async function (e, l) {
      try {
        var r = a("ABep"),
          n = a("QosV"),
          i = a("T0Rc"),
          s = a("qmMi"),
          o = a("DBCl"),
          d = a("zd8w"),
          c = a("oyxz"),
          u = a("Ywss"),
          g = a("jNL7"),
          p = a("I7bK"),
          h = a("SPnB"),
          m = a("Sm6l"),
          f = a("FrrB"),
          v = a("Bbed"),
          y = a("uNsz"),
          b = a("zkSD"),
          _ = a("LhrG"),
          x = a("MExO"),
          I = a("heYt"),
          w = a("tSEg"),
          S = a("XXJV"),
          j = a("eShZ"),
          P = a("TCFx"),
          A = a("jU86"),
          C = a("qQj3"),
          E = a("KhCM"),
          k = a("UxLW"),
          M = a("jJ9V"),
          T = a("avsj"),
          O = a("ycWl"),
          N = a("MZ5W"),
          U = e([N])
        N = (U.then ? (await U)() : U)[0]
        let L = (0, v._)(
          async () =>
            (
              await Promise.all([
                a.e(851456),
                a.e(704809),
                a.e(192656),
                a.e(158806),
                a.e(639670),
                a.e(551927),
                a.e(55605),
              ]).then(a.bind(a, "DWJ8"))
            ).LibraryRoutedNotePreview,
          { fallback: (0, r.jsx)(T.E, {}) },
        )
        function F(e) {
          let t,
            a,
            l,
            u,
            g,
            p,
            v,
            y,
            P = (0, n.c)(50),
            { libraryFileId: A, identity: C, onClose: E, tabId: N } = e,
            U = (0, s.gh)(w.GD),
            F = (0, s.Ul)(h.qz),
            L = (0, s.Ul)(h.chatGptAuthenticatedAccountId$),
            D = (0, s.Ul)(h.chatGptAuthenticatedUserId$),
            G = (0, s.Ul)(h.cj),
            $ = (0, s.Ul)(I.Ym),
            B = "loading" === F || ("allowed" === F && !G),
            z =
              !B &&
              "allowed" === F &&
              null != L &&
              (null == C || (C.accountId === L && C.userId === D)) &&
              null != A &&
              ((0, o.PKK)(A) || null != (0, x.CN)(A))
                ? A
                : null
          P[0] !== L || P[1] !== z || P[2] !== D
            ? ((t = (0, _.h)(L, D, z)), (P[0] = L), (P[1] = z), (P[2] = D), (P[3] = t))
            : (t = P[3])
          let { data: V, error: q, isPending: Q, isFetching: H, refetch: W } = (0, i.I)(t)
          if (
            (P[4] !== V || P[5] !== q || P[6] !== z
              ? ((a = null),
                null != z && null != V && null == q && (a = "file_name" in V ? V.file_name : V.name),
                (P[4] = V),
                (P[5] = q),
                (P[6] = z),
                (P[7] = a))
              : (a = P[7]),
            P[8] !== U || P[9] !== N || P[10] !== a
              ? ((l = () => {
                  if (null == N || null == a) return
                  let e = (0, S.KE)(U, N)
                  null != e && (0, S.getThreadPanelTabController)(e).updateTab(U, N, { title: a })
                }),
                (P[8] = U),
                (P[9] = N),
                (P[10] = a),
                (P[11] = l))
              : (l = P[11]),
            P[12] !== U || P[13] !== N || P[14] !== a
              ? ((u = [U, N, a]), (P[12] = U), (P[13] = N), (P[14] = a), (P[15] = u))
              : (u = P[15]),
            (0, d.useLayoutEffect)(l, u),
            B || (null != z && Q))
          ) {
            let e, t, a
            return (
              P[16] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(T.C, {})), (P[16] = e))
                : (e = P[16]),
              P[17] !== E || P[18] !== N
                ? ((t = (0, r.jsx)(M.c, { actions: !1, onClose: E, tabId: N, title: "", children: e })),
                  (P[17] = E),
                  (P[18] = N),
                  (P[19] = t))
                : (t = P[19]),
              P[20] !== E || P[21] !== t
                ? ((a = (0, r.jsx)(O.gK, {
                    assetName: null,
                    contentOwnsHeader: !0,
                    reserveImageComposerSpace: !0,
                    onClose: E,
                    children: t,
                  })),
                  (P[20] = E),
                  (P[21] = t),
                  (P[22] = a))
                : (a = P[22]),
              a
            )
          }
          if (null != z && null != V && null == q) {
            let e, t, a
            return (
              P[23] !== L || P[24] !== z || P[25] !== D
                ? ((e = JSON.stringify([L, D, z])), (P[23] = L), (P[24] = z), (P[25] = D), (P[26] = e))
                : (e = P[26]),
              P[27] !== L || P[28] !== V || P[29] !== U || P[30] !== $ || P[31] !== D
                ? ((t =
                    $ &&
                    !1 !== V.sharing_can_manage &&
                    null != L &&
                    "saved_web_image" !== V.library_artifact_type &&
                    null == (0, k.AG)(V.id)
                      ? () => {
                          ;(0, b.Yx)(U, {
                            accountId: L,
                            fileName: "file_name" in V ? V.file_name : V.name,
                            knownOwnerUserId: "owned" === V.access_kind ? (D ?? void 0) : void 0,
                            libraryFileId: V.id,
                            sharingEntryId: V.sharing_entry_id ?? void 0,
                            resourceKind: "file",
                            showOrganizationSharing: "writing_block" !== V.library_artifact_type,
                            sharedDirectoryId: "parent_directory_id" in V ? V.parent_directory_id : void 0,
                          })
                        }
                      : void 0),
                  (P[27] = L),
                  (P[28] = V),
                  (P[29] = U),
                  (P[30] = $),
                  (P[31] = D),
                  (P[32] = t))
                : (t = P[32]),
              P[33] !== V || P[34] !== E || P[35] !== e || P[36] !== t || P[37] !== N
                ? ((a = (0, r.jsx)(R, { data: V, onClose: E, tabId: N, onShare: t }, e)),
                  (P[33] = V),
                  (P[34] = E),
                  (P[35] = e),
                  (P[36] = t),
                  (P[37] = N),
                  (P[38] = a))
                : (a = P[38]),
              a
            )
          }
          let Y = null != z && !(q instanceof j.FetchError && (403 === q.status || 404 === q.status))
          return (
            P[39] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, r.jsx)("h1", {
                  role: "alert",
                  children: (0, r.jsx)(c.A, { id: "library.file.failed", defaultMessage: "Unable to open this file" }),
                })),
                (P[39] = g))
              : (g = P[39]),
            P[40] !== Y || P[41] !== H || P[42] !== W
              ? ((p = Y
                  ? (0, r.jsx)(m.$, {
                      disabled: H,
                      onClick: () => void W(),
                      children: (0, r.jsx)(c.A, { id: "library.file.retry", defaultMessage: "Try again" }),
                    })
                  : null),
                (P[40] = Y),
                (P[41] = H),
                (P[42] = W),
                (P[43] = p))
              : (p = P[43]),
            P[44] !== E || P[45] !== N
              ? ((v =
                  null == N
                    ? (0, r.jsx)(m.$, {
                        color: "outline",
                        onClick: E,
                        children: (0, r.jsx)(c.A, {
                          id: "appgenPage.filePreview.close",
                          defaultMessage: "Close preview",
                        }),
                      })
                    : null),
                (P[44] = E),
                (P[45] = N),
                (P[46] = v))
              : (v = P[46]),
            P[47] !== p || P[48] !== v
              ? ((y = (0, r.jsx)(f.A, {
                  className: "select-none",
                  layout: "page",
                  title: g,
                  actions: (0, r.jsxs)(r.Fragment, { children: [p, v] }),
                })),
                (P[47] = p),
                (P[48] = v),
                (P[49] = y))
              : (y = P[49]),
            y
          )
        }
        function R(e) {
          let t,
            a,
            l = (0, n.c)(18),
            { data: i, onClose: o, onShare: c, tabId: u } = e,
            g = (0, s.gh)(w.GD),
            m = (0, d.useContext)(p.f$),
            f = (0, s.Ul)(h.chatGptAuthenticatedAccountId$),
            v = (0, s.Ul)(h.chatGptAuthenticatedUserId$)
          if (l[0] !== f || l[1] !== i || l[2] !== o || l[3] !== c || l[4] !== g || l[5] !== u || l[6] !== v) {
            let e,
              a,
              n = "file_name" in i ? (0, P.Jw)(i) : { node: i }
            l[8] !== i
              ? ((e =
                  (null == i.access_kind || "owned" === i.access_kind) &&
                  (!("kind" in i) || !(0, y.GS)({ node: i })) &&
                  "chat_message_snapshot" !== i.library_artifact_type &&
                  !i.id.startsWith("external-")),
                (l[8] = i),
                (l[9] = e))
              : (e = l[9])
            let d = e
            ;(l[10] !== d || l[11] !== i.id
              ? ((a = d ? (0, r.jsx)(C.V, { libraryFileId: i.id }) : null), (l[10] = d), (l[11] = i.id), (l[12] = a))
              : (a = l[12]),
              (t = (0, r.jsxs)(r.Fragment, {
                children: [
                  a,
                  null != f && (0, y.S6)(n)
                    ? (0, r.jsx)(s.Ui, {
                        scope: A.oD,
                        value: { accountId: f, userId: v },
                        children: (0, r.jsx)(s.Ui, {
                          scope: A.vn,
                          value: {},
                          children: (0, r.jsx)(
                            L,
                            {
                              routeScope: g,
                              accountId: f,
                              userId: v,
                              entry: n,
                              onClose: o,
                              showComposer: null == u,
                              tabId: u,
                            },
                            JSON.stringify([f, v, i.id]),
                          ),
                        }),
                      })
                    : (0, r.jsx)(N.f, {
                        downloadAnalyticsFile: n.node,
                        renderFavoriteAction: () =>
                          d
                            ? (0, r.jsx)(C.q, {
                                libraryFileId: i.id,
                                entityKind: (0, E.Z)(n.node),
                                surface: "image" === i.library_file_category ? "image_lightbox" : "file_preview",
                              })
                            : void 0,
                        file: {
                          originationThreadId: i.origination_thread_id,
                          originationMessageId: i.origination_message_id,
                          externalAccount: "external_account" in i ? i.external_account : void 0,
                          fileExtension: i.file_extension,
                          id: i.id,
                          fileId: "file_name" in i ? (i.file_id ?? i.id) : i.id,
                          currentVersion: "current_version_number" in i ? (i.current_version_number ?? void 0) : void 0,
                          gizmoId: i.gizmo_id,
                          libraryArtifactType: i.library_artifact_type,
                          name: "file_name" in i ? i.file_name : i.name,
                          parentDirectoryId:
                            "parent_directory_id" in i ? i.parent_directory_id : (i.directory_id ?? null),
                          category: i.library_file_category ?? "other",
                          mimeType: i.mime_type ?? null,
                          modifiedAt: i.file_upload_time ?? null,
                          provider: (0, k.AG)(i.id) ?? void 0,
                          sizeBytes: i.file_size_bytes ?? null,
                          sourceUrl: i.cloud_doc_url ?? void 0,
                        },
                        onClose: o,
                        onShare: c,
                        showComposer: null == u,
                        tabId: u,
                      }),
                ],
              })),
              (l[0] = f),
              (l[1] = i),
              (l[2] = o),
              (l[3] = c),
              (l[4] = g),
              (l[5] = u),
              (l[6] = v),
              (l[7] = t))
          } else t = l[7]
          let b = t
          if (null == u) {
            let e
            return (
              l[13] !== b
                ? ((e = (0, r.jsx)("div", {
                    className: "h-full min-h-0 [--viewer-header-start-inset:var(--app-shell-titlebar-left-inset,0px)]",
                    children: b,
                  })),
                  (l[13] = b),
                  (l[14] = e))
                : (e = l[14]),
              e
            )
          }
          return (
            l[15] !== m || l[16] !== b
              ? ((a =
                  m?.titlebarSlots == null || m.hasTitlebarHeader
                    ? b
                    : (0, r.jsx)("div", { className: "h-full min-h-0 pt-[var(--height-toolbar)]", children: b })),
                (l[15] = m),
                (l[16] = b),
                (l[17] = a))
              : (a = l[17]),
            a
          )
        }
        ;(a.d(
          t,
          {},
          {
            LibraryFileLinkPreview: R,
            LibraryFilePreview: F,
            LibraryFileRoute: function (e) {
              let t,
                a,
                l,
                i = (0, n.c)(7),
                { returnTo: s } = e,
                o = void 0 === s ? "/library" : s,
                { libraryFileId: d } = (0, u.g)(),
                c = (0, u.Zp)()
              return (
                i[0] === Symbol.for("react.memo_cache_sentinel")
                  ? ((t = (0, r.jsx)(g.G.MainContentLayout, { layout: "custom-titlebar" })), (i[0] = t))
                  : (t = i[0]),
                i[1] !== c || i[2] !== o ? ((a = () => void c(o)), (i[1] = c), (i[2] = o), (i[3] = a)) : (a = i[3]),
                i[4] !== d || i[5] !== a
                  ? ((l = (0, r.jsxs)(r.Fragment, { children: [t, (0, r.jsx)(F, { libraryFileId: d, onClose: a })] })),
                    (i[4] = d),
                    (i[5] = a),
                    (i[6] = l))
                  : (l = i[6]),
                l
              )
            },
          },
        ),
          l())
      } catch (e) {
        l(e)
      }
    })
  },
  FM08(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      n = a("zd8w")
    a.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            a = (0, r.c)(5),
            { className: i, src: s, fallback: o } = e,
            [d, c] = (0, n.useState)(null)
          return (
            a[0] !== i || a[1] !== d || a[2] !== o || a[3] !== s
              ? ((t =
                  null != s && s !== d
                    ? (0, l.jsx)("img", {
                        alt: "",
                        className: i,
                        decoding: "async",
                        draggable: !1,
                        loading: "lazy",
                        src: s,
                        onError: () => c(s),
                      })
                    : (0, l.jsx)(l.Fragment, { children: o })),
                (a[0] = i),
                (a[1] = d),
                (a[2] = o),
                (a[3] = s),
                (a[4] = t))
              : (t = a[4]),
            t
          )
        },
      },
    )
  },
  mroC(e, t, a) {
    var l = a("qmMi"),
      r = a("RU3e"),
      n = a("SPnB"),
      i = a("aXWg"),
      s = a("OWtl"),
      o = a("rvFo"),
      d = a("kK7d")
    let c = (0, l.$A)(s.u, (e) => ({ ...h(e.get), refetchOnWindowFocus: !0 })),
      u = (0, l.$A)(s.u, (e) => ({
        ...h(e.get),
        refetchInterval: !!(e.get(r.$O) && e.get(i.s)) && o.D.THIRTY_SECONDS,
      })),
      g = (0, l.N3)(s.u, (e, t) => ({
        ...h(t.get),
        refetchOnMount: (e) => !e.state.data?.pages.some((e) => e.items.length > 0) && "always",
      })),
      p = (0, l.un)(s.u, ({ get: e }) => {
        let { data: t, isSuccess: a } = e(c)
        return !!t?.pages.some((e) => e.items.length > 0) || (!a && void 0)
      })
    function h(e) {
      let t = e(n.chatGptAuthenticatedAccountId$),
        a = e(n.Kw),
        l = e(n.o8)
      return {
        enabled: null != t && null != a && null != l,
        queryKey: ["space", "assigned-tasks", t, a, l],
        initialPageParam: "",
        getNextPageParam: (e) => e.cursor || void 0,
        queryFn: async ({ pageParam: e, signal: a }) => {
          if (null == t || null == l) throw Error("Sign in to see assigned tasks")
          let r = e
          for (;;) {
            let e = await d.CodexRequest.safeGet("/pages/tasks/assigned", {
              parameters: { query: { limit: 30, cursor: r || void 0 } },
              additionalHeaders: { "ChatGPT-Account-ID": t },
              expectedIdentity: { accountId: t, userId: l },
              cache: "no-store",
              signal: a,
            })
            if (e.items.length > 0 || !e.cursor) return e
            r = e.cursor
          }
        },
        gcTime: 0,
        staleTime: o.D.THIRTY_SECONDS,
      }
    }
    a.d(t, {}, { a_: u, iR: g, kA: p })
  },
  N8b3(e, t, a) {
    a.d(t, { Yn: () => P, TA: () => A, WT: () => C })
    var l = a("qmMi"),
      r = a("DBCl"),
      n = a("PFjh"),
      i = a("E8Sp"),
      s = a("SPnB"),
      o = a("SGsN"),
      d = a("svjy"),
      c = a("mNPx"),
      u = a("e1xH"),
      g = a("BkKO"),
      p = a("tv8P"),
      h = a("yGJW"),
      m = a("H2L8"),
      f = a("OWtl"),
      v = a("kK7d"),
      y = a("eShZ"),
      b = a("NRR1"),
      _ = a("jGsJ"),
      x = a("OoIX"),
      I = a("HNZf"),
      w = a("D550"),
      S = a("PzpM")
    let j = (0, l.bD)(f.u, (e) => void 0),
      P = (0, l.i1)(f.u, (e, { get: t }) => {
        let a = t(j, e)
        return a?.accountId === t(p.spaceAccountId$) && a?.userId === t(s.chatGptAuthenticatedUserId$) ? a : void 0
      }),
      A = (0, l.un)(f.u, ({ get: e }) =>
        e(S.z$).flatMap((t) => {
          let a = e(P, t.localPageId)
          return a?.response != null && "error" !== a.status
            ? []
            : [
                {
                  id: t.localPageId,
                  name: t.name,
                  title: t.name,
                  backingType: t.backingType,
                  serverSpaceId: t.space?.spaceId,
                  status: a?.status ?? "error",
                },
              ]
        }),
      )
    function C(e, { name: t, createSpace: l, invitations: f = [], appearance: A, resume: E }) {
      let k,
        M,
        T = e.get(p.spaceAccountId$),
        O = e.get(s.chatGptAuthenticatedUserId$),
        N = e.get(s.o8)
      if (null == T) throw Error("space_account_unavailable")
      if (null != E && (E.accountId !== T || E.userId !== O || null == E.space)) throw Error("space_setup_unavailable")
      let U = e.get(s.PO).accountUserId,
        F = E?.localPageId ?? `local-page-${crypto.randomUUID()}`
      null == E &&
        (0, S.Bz)(e, {
          accountId: T,
          userId: O,
          localPageId: F,
          name: t,
          backingType: "drive",
          rootInitialization: "server",
          appearance: A,
          invitations: f.map((e) => ({ ...e, status: "pending" })),
        })
      let R = (0, w.a)((0, n.dj)(e), performance.now(), "space", { surface: "electron", emit: (t) => (0, _.V)(e, t) }),
        L = E?.space,
        D = !1,
        G = new AbortController(),
        $ = () => e.get(S.z$).find((e) => e.localPageId === F),
        B = (a) => {
          let l = { localPageId: F, accountId: T, userId: O, name: t, status: a, response: k, metrics: R, retry: z }
          ;(e.set(j, F, l), null != k && e.set(j, k.id, l))
        },
        z = () => {
          if (null != M) return M
          if (D || G.signal.aborted || null == $())
            return Promise.reject(new DOMException("Space creation cancelled", "AbortError"))
          let n = (0, p.watchSpaceAccount)(e, T, O, U, N),
            f = AbortSignal.any([G.signal, n.signal]),
            _ = e.watch(({ get: e }) => {
              e(S.z$).some((e) => e.localPageId === F) || G.abort()
            }),
            w = async () => {
              f.throwIfAborted()
              try {
                let a
                ;(null == L
                  ? ((a = await l(f)), R.creationRequestSucceeded())
                  : (a = await e
                      .get(p.createSpaceMutation$)
                      .mutateAsync({ requestBody: { name: t }, existingSpace: L, signal: f })),
                  f.throwIfAborted(),
                  (k = a),
                  (L = { spaceId: a.id, rootPageId: a.root_page_id }),
                  R.savedIdentity())
              } catch (a) {
                if (
                  (f.throwIfAborted(),
                  null != L &&
                    a instanceof y.FetchError &&
                    ((404 === a.status && "space_not_found" === a.errorCode) || 410 === a.status) &&
                    (await (async function (e, t) {
                      let a,
                        l = new Set()
                      for (;;) {
                        t.throwIfAborted()
                        let r = await v.CodexRequest.safeGet("/spaces/v2", {
                          parameters: { query: { status: "archived", limit: 50, cursor: a } },
                          signal: t,
                        })
                        if (
                          (t.throwIfAborted(),
                          r.items.some(
                            (t) => t.id === e.spaceId && t.root_page_id === e.rootPageId && null != t.deleted_at,
                          ))
                        )
                          return !0
                        if (null == (a = r.next_cursor ?? void 0) || l.has(a)) return !1
                        l.add(a)
                      }
                    })(L, f)))
                ) {
                  ;(f.throwIfAborted(),
                    _(),
                    R.cancel("creation_unavailable"),
                    (0, p.evictCachedDriveSpacePages)(e, L.spaceId, T),
                    (0, S.pu)(e, F),
                    e.set(j, F, void 0),
                    e.get(P, L.spaceId)?.localPageId === F && e.set(j, L.spaceId, void 0),
                    e
                      .get(o.Id)
                      .info(
                        e
                          .get(d.g)
                          .formatMessage({
                            id: "space.teamHome.setupUnavailable",
                            defaultMessage: "This space is no longer available",
                            description: "Shown when an unfinished Space can no longer be opened.",
                          }),
                      ))
                  return
                }
                L = (0, p.pendingSpaceInitialization)(a) ?? L
                let t = $()
                throw (
                  null != L
                    ? (R.savedIdentity(), null != t && (0, S.$q)(e, { ...t, space: L }))
                    : (a instanceof y.FetchError &&
                        a.status >= 400 &&
                        a.status < 500 &&
                        ![408, 499].includes(a.status)) ||
                      (D = !0),
                  R.fail((0, x.XY)(a)),
                  a
                )
              }
              let n = $(),
                i = null != n && !0 !== n.rootInitialized && "server" !== n.rootInitialization
              ;(null != n && (0, S.$q)(e, { ...n, space: L, rootInitialized: !i }),
                (0, p.cacheCreatedSpace)(e, T, k),
                e.query.setData(p.spaceQuery$, k.id, k),
                i || R.rootInitialized(k.root_page_id),
                await e.when(
                  ({ get: e }) =>
                    f.aborted ||
                    !e(S.z$).some((e) => e.localPageId === F) ||
                    e(p.spaceAccountId$) !== T ||
                    e(s.chatGptAuthenticatedUserId$) !== O ||
                    (void 0 !== U && e(b.jv) !== U) ||
                    e(b.$M) !== N ||
                    !e(u.pagesEnabled$) ||
                    e(g.LM)?.some((e) => e.id === k?.id) === !0,
                ),
                f.throwIfAborted(),
                B("creating"))
              let c = $()?.appearance,
                h = (0, r._R3)(c?.emoji),
                w = null == h ? null : { kind: "icon", value: h, color: (0, m.sj)(c?.theme) ?? "black" }
              if (i || null != w) {
                let { completeSpaceRootSetup: t } = await Promise.all([a.e(753405), a.e(193172), a.e(708398)]).then(
                  a.bind(a, "PluF"),
                )
                f.throwIfAborted()
                let l = await t(e, k, w, i, f)
                ;(f.throwIfAborted(),
                  (k = {
                    ...(e.query.getData(p.spaceQuery$, k.id) ?? k),
                    symbol: l,
                    can_edit_appearance: null == l && k.can_edit_appearance,
                  }),
                  e.query.setData(p.spaceQuery$, k.id, k),
                  (0, p.cacheCreatedSpace)(e, T, k))
                let r = $()
                ;(null != r && (0, S.$q)(e, { ...r, rootInitialized: !0 }), i && R.rootInitialized(k.root_page_id))
              }
              if (null == w && null != c && !0 === k.can_edit_appearance) {
                let t = await v.CodexRequest.safePatch("/spaces/v2/{space_id}/appearance", {
                  parameters: { path: { space_id: k.id } },
                  requestBody: c,
                  signal: f,
                })
                ;(f.throwIfAborted(),
                  (k = { ...(e.query.getData(p.spaceQuery$, k.id) ?? k), appearance: t }),
                  e.query.setData(p.spaceQuery$, k.id, k),
                  (0, p.cacheCreatedSpace)(e, T, k))
              }
              let A = $()
              null != A && (0, S.$q)(e, { ...A, appearance: void 0 })
              let C = $()?.invitations ?? [],
                E = C.filter((e) => "shared" !== e.status)
              if (E.length > 0) {
                let t = await (async function (e, t, a, l, n) {
                  if ((l.throwIfAborted(), 0 === a.length)) return []
                  let i = { type: "space", id: t },
                    o = a.map(({ recipient: e, label: t, secondaryLabel: a, roleId: l }) => ({
                      action: "invite",
                      target: i,
                      recipient: e,
                      roleId: l,
                      invitee: { id: (0, I.hk)(e), label: t, secondaryLabel: a },
                    })),
                    d = new Map(),
                    c = new Set(),
                    u = (e) => {
                      if (l.aborted || c.has(e)) return
                      c.add(e)
                      let t = o.indexOf(e)
                      n?.(t, d.get(e) ?? a[t].recipient)
                    },
                    g = []
                  if (
                    (await e.queryClient
                      .getMutationCache()
                      .build(e.queryClient, {
                        mutationKey: [
                          "space",
                          "save-library-sharing",
                          e.get(s.chatGptAuthenticatedUserId$),
                          e.get(p.spaceAccountId$),
                        ],
                        networkMode: "always",
                        mutationFn: async ({ changes: t }) => {
                          ;(l.throwIfAborted(),
                            await (0, I.X5)(
                              e,
                              t,
                              void 0,
                              void 0,
                              l,
                              (e, t) => d.set(e, t.recipient),
                              (e, t) => {
                                g.push(
                                  t.then(
                                    () => u(e),
                                    () => void 0,
                                  ),
                                )
                              },
                              (e, t) => {
                                ;(d.set(e, t.recipient), u(e))
                              },
                            ))
                        },
                      })
                      .execute({ changes: o }),
                    await (0, r._qC)(Promise.all(g), l),
                    l.throwIfAborted(),
                    c.size < o.length)
                  )
                    try {
                      let t = await (0, I.gv)(e, i, l, !0)
                      ;(l.throwIfAborted(),
                        (0, I.TO)(t) &&
                          o.forEach((e, l) => {
                            let r = d.get(e) ?? a[l].recipient
                            t.shares.some((e) => (0, I.je)(e, r) && e.role_id === a[l].roleId) && u(e)
                          }))
                    } catch {
                      l.throwIfAborted()
                    }
                  return a.map((e, t) => {
                    let a = d.get(o[t]) ?? e.recipient
                    return { ...e, recipient: a, status: c.has(o[t]) ? "shared" : "failed" }
                  })
                })(e, k.id, E, f, (t, a) => {
                  if (f.aborted) return
                  let l = $()
                  if (null != l) {
                    let r = C.indexOf(E[t])
                    ;(0, S.$q)(e, {
                      ...l,
                      invitations: l.invitations.map((e, t) =>
                        t === r ? { ...e, recipient: a, status: "shared" } : e,
                      ),
                    })
                  }
                })
                f.throwIfAborted()
                let a = $()
                if (
                  (null != a && (0, S.$q)(e, { ...a, invitations: [...C.filter((e) => "shared" === e.status), ...t] }),
                  t.some((e) => "failed" === e.status))
                )
                  throw Error("space_creation_invitations_incomplete")
              }
              ;(_(), (0, S.FT)(e, F), B("created"))
            }
          return (
            B("creating"),
            (M = Promise.resolve()
              .then(() =>
                null == navigator.locks
                  ? w()
                  : navigator.locks.request(`space-setup:${JSON.stringify([T, O, F])}`, { signal: f }, w),
              )
              .catch((t) => {
                if (f.aborted)
                  throw (
                    G.abort(),
                    e.set(j, F, void 0),
                    null != k && e.set(j, k.id, void 0),
                    R.cancel(n.signal.aborted ? "account_changed" : "explicit_cancel"),
                    t
                  )
                throw (
                  D ? e.set(j, F, void 0) : B("error"),
                  (0, x.XY)(t) || (0, c.ZD)(e.get(h.YV), "pages.space.create", t),
                  R.fail(),
                  (() => {
                    let { pathname: t, search: a } = e.get(i.gM)
                    e.get(p.spaceAccountId$) === T &&
                      e.get(s.chatGptAuthenticatedUserId$) === O &&
                      ("/spaces/new" !== t || new URLSearchParams(a).get("creation") !== F) &&
                      e
                        .get(o.Id)
                        .warning(
                          e
                            .get(d.g)
                            .formatMessage({
                              id: "codex.space.sidebar.spaceSetupNeedsAttention",
                              defaultMessage: "Space setup needs attention",
                              description:
                                "Toast displayed when a shared Space setup needs retry or recovery. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                            }),
                        )
                  })(),
                  t
                )
              })
              .finally(() => {
                ;(_(), n.stop(), (M = void 0))
              }))
          )
        }
      return (z().catch(() => {}), F)
    }
  },
  dc3a(e, t, a) {
    var l = a("DBCl"),
      r = a("SPnB"),
      n = a("jAir"),
      i = a("tv8P"),
      s = a("eShZ")
    a.d(
      t,
      {},
      {
        U9: async function (e) {
          let t = e.get(i.spaceAccountId$),
            a = e.get(r.chatGptAuthenticatedUserId$)
          await Promise.all([
            (0, i.invalidateSpacePages)(e),
            ...[n.vy, n.DT].map((l) =>
              e.queryClient.invalidateQueries({ queryKey: [...l, t], predicate: ({ queryKey: e }) => e[4] === a }),
            ),
            e.queryClient.invalidateQueries({ queryKey: ["library-api", t, a, "browse"] }),
          ])
        },
        cQ: function (e) {
          return (
            (e instanceof Error && "TimeoutError" === e.name) ||
            (e instanceof s.FetchError &&
              ("network" === e.errorKind || [0, 408, 429, 500, 502, 503, 504].includes(e.status)))
          )
        },
        f0: async function (e, t) {
          let a
          try {
            await (0, l._qC)(
              new Promise((t) => {
                a = setTimeout(t, Date.now() - e < 6e4 ? 2e3 : 5e3)
              }),
              t,
            )
          } finally {
            clearTimeout(a)
          }
        },
      },
    )
  },
  idI8(e, t, a) {
    var l = a("Wj4L"),
      r = a("mXik"),
      n = a("r9ga"),
      i = a("gc8z"),
      s = a("tv8P")
    a.d(
      t,
      {},
      {
        openGlobalSearchSpacePage: async function (e, t, a, o, d, c) {
          if (!d()) return
          let u = e.get(s.spaceAccountId$)
          if (null == u) return
          let g = e.get(s.loadedSpacePageMetadata$, o.page_id)
          ;(g?.access.can_read === !1 && (0, i.V)(e, o.page_id),
            (null == c && (0, n.Nk)(e, t, a, o.page_id, {})) ||
              (0, r.U)(e, t, a, u, o.page_id, {
                onOpenPage: c,
                rememberCollectionOrigin: !1,
                pagePreview:
                  g?.access.can_read &&
                  null == g.deleted_at &&
                  null == g.site_project_id &&
                  !1 !== g.display_metadata_included &&
                  "page" === (0, l.th)(g) &&
                  null != g.title
                    ? { title: g.title, documentType: "page", textPageCard: { symbol: g.symbol } }
                    : void 0,
              }))
        },
      },
    )
  },
  FiJQ(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      n = a("SZCv"),
      i = a.n(n),
      s = a("qmMi"),
      o = a("Wf1j"),
      d = a("oyxz"),
      c = a("RaBo"),
      u = a("BrP7"),
      g = a("cGrE"),
      p = a("jU86"),
      h = a("RjIR"),
      m = a("e1xH"),
      f = a("ARUL")
    let v = {
        all: "all",
        pages: "pages",
        assigned: null,
        presentations: "slides",
        spreadsheets: "sheets",
        "page-type": null,
        images: "images",
        sites: "sites",
        custom: null,
        favorites: null,
      },
      y = { all: { ...v, all: "suggested" }, your_items: { ...v, favorites: "favorites" }, shared_with_you: v }
    a.d(
      t,
      {},
      {
        h: function (e) {
          let t,
            a,
            n,
            v,
            b,
            _,
            x,
            I,
            w,
            S,
            j,
            P,
            A = (0, r.c)(44),
            { scope: C, showFavorites: E, sitesSelected: k, assignmentsEnabled: M, assignmentsSelected: T } = e,
            O = void 0 !== k && k,
            N = void 0 !== M && M,
            U = void 0 !== T && T,
            F = (0, o.A)(),
            R = (0, s.Ul)(c.ND),
            L = (0, s.Ul)(m.TV),
            D = "library:collection:shared-with-me" === C.value.directoryId,
            G = (0, s.Ul)(!D || c.rf),
            $ = "favorites" === C.value.tab,
            B = null == C.value.directoryId && ("all" === C.value.tab || $)
          if (
            (A[0] !== C.value.directoryId || A[1] !== C.value.tab
              ? ((t = {
                  key: "all",
                  name:
                    null == C.value.directoryId && "suggested" === C.value.tab
                      ? (0, l.jsx)(d.A, { id: "libraryNext.tabs.suggested", defaultMessage: "Suggested" })
                      : (0, l.jsx)(d.A, { id: "space.home.allTitle", defaultMessage: "All" }),
                }),
                (A[0] = C.value.directoryId),
                (A[1] = C.value.tab),
                (A[2] = t))
              : (t = A[2]),
            A[3] !== $ || A[4] !== C.value.includePages
              ? ((a =
                  C.value.includePages || $
                    ? [{ key: "pages", name: (0, l.jsx)(d.A, { id: "space.list.pagesTab", defaultMessage: "Pages" }) }]
                    : []),
                (A[3] = $),
                (A[4] = C.value.includePages),
                (A[5] = a))
              : (a = A[5]),
            A[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = {
                  key: "presentations",
                  name: (0, l.jsx)(d.A, { id: "space.home.slidesTitle", defaultMessage: "Slides" }),
                }),
                (A[6] = n))
              : (n = A[6]),
            A[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = {
                  key: "spreadsheets",
                  name: (0, l.jsx)(d.A, { id: "space.home.artifactTabs.sheets", defaultMessage: "Sheets" }),
                }),
                (A[7] = v))
              : (v = A[7]),
            A[8] !== C.value.pageTypeFilter ? ((b = []), (A[8] = C.value.pageTypeFilter), (A[9] = b)) : (b = A[9]),
            A[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = {
                  key: "images",
                  name: (0, l.jsx)(d.A, { id: "libraryNext.filters.images", defaultMessage: "Images" }),
                }),
                (A[10] = _))
              : (_ = A[10]),
            A[11] !== G || A[12] !== R || A[13] !== L
              ? ((x =
                  L && "available" === R && G
                    ? [
                        {
                          key: "sites",
                          name: (0, l.jsx)(d.A, { id: "codex.space.sites.title", defaultMessage: "Sites" }),
                        },
                      ]
                    : []),
                (A[11] = G),
                (A[12] = R),
                (A[13] = L),
                (A[14] = x))
              : (x = A[14]),
            A[15] !== N ||
              A[16] !== U ||
              A[17] !== $ ||
              A[18] !== C.value.categories ||
              A[19] !== C.value.pageTypeFilter ||
              A[20] !== E ||
              A[21] !== O ||
              A[22] !== x ||
              A[23] !== t ||
              A[24] !== a ||
              A[25] !== b)
          ) {
            w = [t, ...a, n, v, ...b, _, ...x]
            let e = C.value.categories,
              r = 1 === e.length ? e[0] : null
            if (
              ((I = "custom"),
              U
                ? (I = "assigned")
                : O
                  ? (I = "sites")
                  : $
                    ? (I = 0 === e.length ? "favorites" : "custom")
                    : 0 === e.length
                      ? (I = "all")
                      : null != r && (I = w.find((e) => e.key === r)?.key ?? "custom"),
              "custom" === I)
            ) {
              let e
              ;(A[28] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = {
                    key: "custom",
                    name: (0, l.jsx)(d.A, { id: "space.home.artifactTabs.filtered", defaultMessage: "Filtered" }),
                  }),
                  (A[28] = e))
                : (e = A[28]),
                w.push(e))
            }
            if (E) {
              let e
              ;(A[29] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = {
                    key: "favorites",
                    name: (0, l.jsx)(d.A, { id: "library.tabs.favorites", defaultMessage: "Favorites" }),
                  }),
                  (A[29] = e))
                : (e = A[29]),
                w.push(e))
            }
            if (N) {
              let e
              ;(A[30] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = {
                    key: "assigned",
                    name: (0, l.jsx)(d.A, { id: "space.home.artifactTabs.assigned", defaultMessage: "Assigned" }),
                  }),
                  (A[30] = e))
                : (e = A[30]),
                w.push(e))
            }
            ;((A[15] = N),
              (A[16] = U),
              (A[17] = $),
              (A[18] = C.value.categories),
              (A[19] = C.value.pageTypeFilter),
              (A[20] = E),
              (A[21] = O),
              (A[22] = x),
              (A[23] = t),
              (A[24] = a),
              (A[25] = b),
              (A[26] = I),
              (A[27] = w))
          } else ((I = A[26]), (w = A[27]))
          return (
            A[31] !== F
              ? ((S = F.formatMessage({ id: "space.home.artifactTabs.label", defaultMessage: "Artifact types" })),
                (A[31] = F),
                (A[32] = S))
              : (S = A[32]),
            A[33] !== $ || A[34] !== C || A[35] !== I || A[36] !== D || A[37] !== B
              ? ((j = (e, t) => {
                  if (e === I || "custom" === e) return
                  if ("assigned" === e) return void (0, p.zl)(C, "/space?view=assigned")
                  let a = (a) => {
                    let l = "all"
                    B ? (l = "your_items") : D && (l = "shared_with_you")
                    let r = y[l],
                      n = r[I],
                      i = r[e],
                      s =
                        "/space" === C.value.basePath &&
                        (D || B || (null == C.value.directoryId && "suggested" === C.value.tab)),
                      o = "favorites" === e || "favorites" === I,
                      d = D && ("sites" === e || "sites" === I)
                    ;(0, p.zl)(C, a, {
                      onAccepted:
                        s &&
                        null != n &&
                        null != i &&
                        (!o || C.get(h._)) &&
                        (!d || ("available" === C.get(c.ND) && C.get(c.rf)))
                          ? () => (0, f.AT)(C, l, n, i, a, t)
                          : void 0,
                    })
                  }
                  if ("sites" === e) {
                    let e = new URL(
                      (0, p.SE)({ ...C.value, tab: $ ? "all" : C.value.tab, categories: [], sources: [] }),
                      "https://chatgpt.com",
                    )
                    ;(e.searchParams.set("artifact", "sites"), a(e.pathname + e.search))
                    return
                  }
                  let l = C.value.tab
                  if ("favorites" === e || $) {
                    let t = "favorites" === e ? "favorites" : "all"
                    ;(t !== l && ((0, g.np)(C, { category: t }), (0, p.me)(C, { lastTab: t })), (l = t))
                  }
                  let r = "page-type" === e,
                    n = "all" === e || "favorites" === e ? [] : [r ? "pages" : e]
                  "favorites" === e || r || i()(n, C.value.categories) || (0, g.np)(C, { fileTypes: n })
                  let s = (0, p.SE)({
                    ...C.value,
                    tab: l,
                    categories: n,
                    pageTypeFilter: r ? "selected" : void 0,
                    sources: l !== C.value.tab ? [] : C.value.sources,
                  })
                  a("/space" === s ? "/space?tab=suggested" : s)
                }),
                (A[33] = $),
                (A[34] = C),
                (A[35] = I),
                (A[36] = D),
                (A[37] = B),
                (A[38] = j))
              : (j = A[38]),
            A[39] !== I || A[40] !== S || A[41] !== j || A[42] !== w
              ? ((P = (0, l.jsx)(u.t, {
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: S,
                  tabs: w,
                  selectedKey: I,
                  onSelect: j,
                })),
                (A[39] = I),
                (A[40] = S),
                (A[41] = j),
                (A[42] = w),
                (A[43] = P))
              : (P = A[43]),
            P
          )
        },
      },
    )
  },
  D14d(e, t, a) {
    var l = a("qmMi"),
      r = a("OWtl")
    let n = (0, l.vP)(r.u, null)
    a.d(t, {}, { t: n })
  },
  nJVl(e, t, a) {
    var l = a("l02Z"),
      r = a("rlVt"),
      n = a("eis6"),
      i = a("TbWS"),
      s = a("Qgfj"),
      o = a("xmjg"),
      d = a("TCFx"),
      c = a("jU86"),
      u = a("reVW")
    let g = [
      {
        key: "suggested",
        metricCollection: "all",
        assets: { 16: o.Z, 20: o.e },
        message: (0, s.zR)({ id: "space.home.allTitle", defaultMessage: "All" }),
      },
      {
        key: "all",
        metricCollection: "your_items",
        assets: { 16: n.x, 20: i.y },
        message: (0, s.zR)({ id: "space.home.yourItems", defaultMessage: "Your items" }),
      },
      {
        key: "shared",
        metricCollection: "shared_with_you",
        assets: { 16: l.P, 20: r.s },
        message: (0, s.zR)({ id: "space.home.sharedWithYou", defaultMessage: "Shared with you" }),
      },
    ]
    a.d(
      t,
      {},
      {
        MU: function (e, t) {
          return !t || "suggested" !== e.tab || e.search || e.categories.some(d.bI) ? e.sources : []
        },
        QB: function (e, t, a, l = "") {
          let r = new URL(
            (0, c.SE)({
              basePath: "/space",
              directoryId: "shared" === e ? "library:collection:shared-with-me" : null,
              tab: "suggested" === e ? "suggested" : "all",
              deleted: !1,
              search: l,
              categories: t,
              sources: [],
            }),
            "https://chatgpt.com",
          )
          return (
            null != a && r.searchParams.set("artifact", a),
            r.search ? r.pathname + r.search : "/space?tab=suggested"
          )
        },
        Qv: function (e, t, a) {
          let l = a.get("view")
          return e.deleted || (null != l && "assigned" !== l)
            ? null
            : (0, u.yP)(t)?.route === u.K.directory && "library:collection:shared-with-me" === e.directoryId
              ? "shared"
              : (0, u.GD)(t)
                ? "favorites" === e.tab || "all" === e.tab
                  ? "all"
                  : "suggested" === e.tab
                    ? "suggested"
                    : null
                : null
        },
        YO: g,
        eL: function (e, t, a, l = [], r = "") {
          let n = 1 === a.length ? a[0] : "items",
            i =
              a.length > 1
                ? e.formatList(
                    a.map((t) =>
                      e.formatMessage(
                        {
                          id: "space.savedSearch.listType",
                          defaultMessage:
                            "{key, select, sites {sites} dashboards {dashboards} pages {pages} presentations {slides} spreadsheets {sheets} images {images} meetings {meeting notes} documents {documents} pdfs {PDFs} other {items}}",
                        },
                        { key: t },
                      ),
                    ),
                  )
                : null,
            s = e.formatMessage(
              {
                id: "space.savedSearch.viewDescription",
                defaultMessage:
                  "{collection, select, all {Your } shared {Shared } suggested {All } favorites {Your favorite } other {}}{source, select, uploaded {uploaded } generated {generated } both {uploaded or generated } other {}}{type, select, sites {sites} dashboards {dashboards} pages {pages} presentations {slides} spreadsheets {sheets} images {images} meetings {meeting notes} documents {documents} pdfs {PDFs} other {items}}{hasQuery, select, yes { matching \u2018{query}\u2019} other {}}",
              },
              {
                collection: t ?? "standalone",
                source: l.length > 1 ? "both" : (l[0] ?? "any"),
                type: n,
                hasQuery: r ? "yes" : "no",
                query: r,
              },
            ),
            o = null == t ? s.charAt(0).toLocaleUpperCase(e.locale) + s.slice(1) : s
          return null == i ? o : `${o} \xb7 ${i}`
        },
      },
    )
  },
  iC9N(e, t, a) {
    var l = a("HGuJ"),
      r = a("QxN6")
    a.d(
      t,
      {},
      {
        w: function (e) {
          return {
            openPageFile: (t) => (0, l.openChatGptFile)(e, t),
            openLibraryFile: (t, a) => (0, r.openLibraryFileTab)(e, t, a),
          }
        },
      },
    )
  },
  xt7w(e, t, a) {
    var l = a("qmMi"),
      r = a("SPnB"),
      n = a("jU86"),
      i = a("POou"),
      s = a("RjIR"),
      o = a("OMIV")
    let d = (0, l.vU)(n.oD, (e, { get: t, scope: a }) => {
        let l = t(n.c7),
          { accountId: r, userId: i } = a.value
        return {
          queryKey: ["library-api", r, i, "favorites-presence", e],
          queryFn: async ({ signal: t }) => {
            let a = await l.safeGet("/files/library/favorites", {
              parameters: { query: { limit: 1, include_sites: e } },
              signal: t,
            })
            return (
              null != a.cursor ||
              a.items.some(({ availability: e, item: t, retryable: a }) => a || ("available" === e && null != t))
            )
          },
          initialData: null,
          initialDataUpdatedAt: 0,
          staleTime: 3e4,
          refetchOnMount: !0,
        }
      }),
      c = (0, l.un)(n.Qy, ({ get: e, scope: t }) => {
        let { accountId: a, userId: l, directoryId: n, tab: c, includeSites: u } = t.value
        if (null != n || ("all" !== c && "favorites" !== c) || !e(s._)) return !1
        if ("favorites" === c || !e(o.JW, "2498895213")) return !0
        if (a !== e(r.chatGptAuthenticatedAccountId$) || l !== e(r.chatGptAuthenticatedUserId$)) return !1
        if (Object.keys(e(i.U)).length > 0) return !0
        let { data: g, isError: p, isPaused: h } = e(d, !0 === u)
        return !0 === g || p || (h && null == g)
      })
    a.d(t, {}, { U: c })
  },
  e7M0(e, t, a) {
    var l = a("SPnB"),
      r = a("svjy"),
      n = a("kpIY"),
      i = a("e1xH"),
      s = a("QftW"),
      o = a("tv8P"),
      d = a("vHxi"),
      c = a("nndI"),
      u = a("SCmN"),
      g = a("Kw4a"),
      p = a("v5SL"),
      h = a("pyo2")
    function m(e, t) {
      let a = e.get(l.chatGptAuthenticatedUserId$)
      null != a && !0 === e.get(h.vF) && null == e.get(p.Q6)[JSON.stringify([t, a])] && (0, p.al)(e, t, a)
    }
    a.d(
      t,
      {},
      {
        provisionSpaceWelcomePage: async function (e) {
          if (!e.get(g.vy)) return
          let t = e.get(o.spaceAccountId$)
          ;(null != t && m(e, t), await e.when(({ get: e }) => null != e(o.spaceAccountId$) || !e(g.vy)))
          let a = e.get(o.spaceAccountId$)
          if (null == a || !e.get(g.vy)) return
          ;(m(e, a), await e.when(({ get: e }) => null != e(u.jm) || e(o.spaceAccountId$) !== a || !e(g.vy)))
          let l = e.get(u.jm)
          if (
            l?.accountId !== a ||
            ((0, n.EG)(p.ON, { entries: { [l.key]: { value: e.get(p.aj)[l.key] ?? Date.now() } }, maxEntries: 100 }),
            await e.when(
              ({ get: e }) => null != e(p.Q6)[l.key] || e(u.jm)?.key !== l.key || !e(g.vy) || null != e(h.vF),
            ),
            e.get(u.jm)?.key !== l.key || !e.get(g.vy)) ||
            (m(e, a), !e.get(h.aQ).includes("welcome"))
          )
            return
          let f = e.get(c.ax)[l.key],
            v = await (0, d.h)(e, e.get(r.g), f ?? null)
          null != v &&
            e.get(u.jm)?.key === l.key &&
            e.get(h.aQ).includes("welcome") &&
            e.get(i.wr) &&
            e.query.getOrFetch(s.ab, v).catch(() => {})
        },
      },
    )
  },
  i1Zq(e, t, a) {
    var l = a("QBk8"),
      r = a("qmMi"),
      n = a("PFjh"),
      i = a("Kwur"),
      s = a("yGJW"),
      o = a("OWtl"),
      d = a("eShZ"),
      c = a("OoIX"),
      u = a("tv8P"),
      g = a("WF9u"),
      p = a("nndI"),
      h = a("SCmN"),
      m = a("Kw4a"),
      f = a("pyo2"),
      v = a("JkZJ")
    let y = (0, r.bD)(o.u, (e) => "idle")
    a.d(
      t,
      {},
      {
        J: y,
        m: async function (e, t, a = !1, o = "onboarding", b) {
          let _ = e.get(h.jm)
          if (a && null != _ && ("creating" === e.get(y, _.key) || e.get(h.av, _.key)))
            throw Error("Welcome Page is busy; retry reset after it finishes")
          let x = null == _ ? void 0 : e.get(p.ax)[_.key]
          if (
            null == _ ||
            ("onboarding" === o && !a && !e.get(f.aQ).includes("welcome")) ||
            (!a && null != x) ||
            "creating" === e.get(y, _.key)
          )
            return
          let I = (0, u.watchSpaceAccount)(e, _.accountId, _.userId),
            w = new AbortController(),
            S = e.watch(({ get: e }) => {
              "onboarding" !== o || e(m.vy) || w.abort()
            }),
            j = AbortSignal.any([I.signal, w.signal]),
            P = e.get(n.T$)
          ;(P.count("codex_pages", "welcome_creation", { outcome: "failed" === e.get(y, _.key) ? "retry" : "started" }),
            e.set(y, _.key, "creating"),
            a && e.set(h.Dj, _.key, "unknown"))
          let A = e.get(p.bs)[_.key],
            C = b ?? e.get(p.DF)[_.key] ?? A?.idempotency_key ?? p.qu
          ;(A?.idempotency_key !== C && (A = void 0), null == A && null == b && (C = (0, p.t8)(C)))
          try {
            ;(null == A || a) && (0, c.Jx)(e)
            let n = () => {
              A?.idempotency_key !== C &&
                ((0, c.Jx)(e),
                (A = {
                  idempotency_key: C,
                  destination: "personal_file_drive",
                  title: (0, v.eg)(t),
                  initial_blocks: (0, v.gt)(t, g.rZ),
                  parent_page_id: null,
                }))
              let n = A
              return e.get(u.createSpacePageMutation$).mutateAsync({
                source: l.CodexSpacesSource.CODEX_SPACES_SOURCE_WELCOME,
                accountId: _.accountId,
                requestBody: n,
                assertRequestCurrent: () => {
                  ;(j.throwIfAborted(),
                    e.get(p.bs)[_.key]?.idempotency_key !== n.idempotency_key && (0, c.Jx)(e),
                    (0, r.Y)(e, (e) => {
                      ;(e.set(p.DF, (e) => ({ ...e, [_.key]: C })), e.set(p.bs, (e) => ({ ...e, [_.key]: n })))
                    }))
                },
                signal: j,
                isExpectedError: (e) =>
                  !a &&
                  !C.startsWith("space-welcome-readable:") &&
                  ((403 === e.status && "page_read_forbidden" === e.errorCode) ||
                    (404 === e.status && "page_not_found" === e.errorCode)),
              })
            }
            if (a) {
              let t = x,
                a = !1
              try {
                ;((t = t ?? (await n()).metadata.page_id), j.throwIfAborted())
                try {
                  ;(await i.Request.safePost("/pages/{page_id}/delete", {
                    parameters: { path: { page_id: t } },
                    signal: j,
                    isExpectedError: (e) =>
                      (403 === e.status && "page_write_forbidden" === e.errorCode) ||
                      (410 === e.status && "page_deleted" === e.errorCode),
                  }),
                    (a = !0))
                } catch (e) {
                  ;(j.throwIfAborted(),
                    (a = e instanceof d.FetchError && 410 === e.status && "page_deleted" === e.errorCode))
                }
              } catch (e) {
                if (!(e instanceof d.FetchError) || 410 !== e.status || "page_deleted" !== e.errorCode) throw e
                a = !0
              }
              ;(j.throwIfAborted(),
                (C = p.qu + ":reset:" + (t ?? crypto.randomUUID())),
                (0, r.Y)(e, (e) => {
                  ;(e.set(p.DF, (e) => ({ ...e, [_.key]: C })), (0, h.YB)(e, _.key))
                }),
                a && null != t && (0, u.evictCachedSpacePages)(e, [t], _.accountId, { unavailablePageIds: [t] }))
            }
            let s = await n().catch(async (t) => {
              if (
                !a &&
                t instanceof d.FetchError &&
                ((403 === t.status && "page_read_forbidden" === t.errorCode) ||
                  (404 === t.status && "page_not_found" === t.errorCode)) &&
                !C.startsWith("space-welcome-readable:")
              )
                return (
                  j.throwIfAborted(),
                  (C = "space-welcome-readable:" + C),
                  e.set(p.DF, (e) => ({ ...e, [_.key]: C })),
                  n()
                )
              if (!a || !(t instanceof d.FetchError) || 410 !== t.status || "page_deleted" !== t.errorCode) throw t
              return (
                j.throwIfAborted(),
                (C = p.qu + ":reset:" + crypto.randomUUID()),
                e.set(p.DF, (e) => ({ ...e, [_.key]: C })),
                n()
              )
            })
            if ((j.throwIfAborted(), (0, p.gC)(e, _.key, s.metadata.page_id), null == s.content))
              throw Error("Welcome Page content could not be read")
            ;((0, u.cacheCreatedSpacePage)(e, _.accountId, s, { background: !0 }),
              (0, r.Y)(e, (e) => {
                ;(e.set(h.Dj, _.key, "available"),
                  e.set(p.ax, (e) => ({ ...e, [_.key]: s.metadata.page_id })),
                  e.set(y, _.key, "idle"))
              }),
              P.count("codex_pages", "welcome_creation", { outcome: "bound" }))
          } catch (n) {
            let t = !a && !j.aborted && n instanceof d.FetchError && "page_deleted" === n.errorCode
            ;(t
              ? (0, f.$V)(e, "welcome")
              : j.aborted ||
                (e.set(h.Dj, _.key, (0, h.vd)(n)),
                (0, s.yy)(e, l.CodexSpacesOnboarding, {
                  action: l.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_WELCOME_PAGE_FAILED,
                  item: l.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
                  pageId: e.get(p.FZ)[_.key],
                  failureOperation:
                    l.CodexSpacesOnboardingFailureOperation.CODEX_SPACES_ONBOARDING_FAILURE_OPERATION_CREATE,
                })),
              e.set(y, _.key, j.aborted || t ? "idle" : "failed"))
            let r = t ? "deleted" : "failed"
            if (
              (j.aborted && (r = "cancelled"),
              P.count("codex_pages", "welcome_creation", { outcome: r }),
              a || "legacy" === o)
            )
              throw n
          } finally {
            ;(S(), I.stop())
          }
        },
      },
    )
  },
  VU3o(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      n = a("QBk8"),
      i = a("D015"),
      s = a("AFKC"),
      o = a("on57"),
      d = a("iodE"),
      c = a("qmMi"),
      u = a("zd8w"),
      g = a("oyxz"),
      p = a("Wf1j"),
      h = a("SPnB"),
      m = a("Sm6l"),
      f = a("bVeK"),
      v = a("evwP"),
      y = a("RNul"),
      b = a("Eqxm"),
      _ = a("QufO"),
      x = a("rpnz"),
      I = a("e1xH"),
      w = a("iyTF"),
      S = a("yGJW"),
      j = a("OWtl"),
      P = a("UFWi"),
      A = a("Vx7B"),
      C = a("gXUG"),
      E = a("C9Ga"),
      k = a("iOgI")
    function M(e) {
      let t,
        a,
        s,
        o,
        p,
        h,
        m = (0, r.c)(24),
        { template: f, onOpen: v, onSelect: w, templatePosition: C, surface: E, compactTitle: M, disabled: T } = e,
        O = (0, c.gh)(j.u),
        N = (0, c._U)(I.H6, "granola_presentation"),
        U = (0, c.Ul)(k.M),
        F = (0, c.Ul)(_.vH),
        R = (0, c.Ul)(x.ut),
        L = (0, d.tF)(),
        D = "onboarding" === E || "grid" === E,
        G = (0, u.useRef)(null)
      if (
        (m[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = () => () => G.current?.abort()), (a = []), (m[0] = t), (m[1] = a))
          : ((t = m[0]), (a = m[1])),
        (0, u.useEffect)(t, a),
        !N)
      )
        return null
      if (U === f.id) {
        let e
        ;(m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsxs)("span", {
              className: "inline-flex items-center gap-1",
              role: "status",
              children: [
                (0, l.jsx)(y.y, { as: "span", className: "icon-xxs" }),
                (0, l.jsx)(g.A, { id: "space.slideTemplates.opening", defaultMessage: "Opening\u2026" }),
              ],
            })),
            (m[2] = e))
          : (e = m[2]),
          (s = e))
      } else if (void 0 !== M && M) {
        let e
        ;(m[3] !== f.title
          ? ((e = (0, l.jsx)("span", { className: "text-sm", children: f.title })), (m[3] = f.title), (m[4] = e))
          : (e = m[4]),
          (s = e))
      }
      m[5] !== F || m[6] !== E || m[7] !== f
        ? ((o =
            "create" === E || F
              ? (0, l.jsx)(
                  P.gr,
                  {
                    metadata: "source" in f ? f.thumbnailMetadata : void 0,
                    src: "source" in f ? f.thumbnailUrl : f.thumbnail,
                  },
                  "source" in f ? f.thumbnailUrl : f.thumbnail,
                )
              : (0, l.jsx)("img", {
                  ref: "grid" === E ? b.b : void 0,
                  crossOrigin: "grid" === E && "source" in f ? "anonymous" : void 0,
                  className: "size-full object-cover",
                  src: "source" in f ? f.thumbnailUrl : f.thumbnail,
                  alt: "",
                  draggable: !1,
                })),
          (m[5] = F),
          (m[6] = E),
          (m[7] = f),
          (m[8] = o))
        : (o = m[8])
      let $ = (void 0 !== T && T) || null != U || (R && null == w) || !L,
        B = U === f.id ? "dimmed" : "unchanged"
      return (
        m[9] !== v || m[10] !== w || m[11] !== D || m[12] !== O || m[13] !== f || m[14] !== C
          ? ((p = () => {
              ;(D &&
                (0, S.yy)(O, n.CodexSpacesOnboarding, {
                  action: n.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_ITEM_SELECTED,
                  item: n.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_TEMPLATES,
                }),
              (0, S.yy)(O, n.CodexSpacesTemplateGallery, {
                action: D
                  ? n.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_HOME_TILE_SELECTED
                  : n.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
                category: "slides",
                templateId: f.id,
                templatePosition: null == C ? void 0 : (0, i.At)(C),
                selectionSurface: D
                  ? n.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_SPACE_HOME_TILE
                  : n.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL,
              }),
              null != w)
                ? w(f)
                : ((G.current = new AbortController()),
                  (0, k._)({ scope: O, template: f, onOpen: v, signal: G.current.signal }))
            }),
            (m[9] = v),
            (m[10] = w),
            (m[11] = D),
            (m[12] = O),
            (m[13] = f),
            (m[14] = C),
            (m[15] = p))
          : (p = m[15]),
        m[16] !== E || m[17] !== o || m[18] !== $ || m[19] !== B || m[20] !== p || m[21] !== f.title || m[22] !== s
          ? ((h = (0, l.jsx)(A.Z, {
              title: f.title,
              kind: "slides",
              surface: E,
              titleContent: s,
              preview: o,
              disabled: $,
              disabledAppearance: B,
              onOpen: p,
            })),
            (m[16] = E),
            (m[17] = o),
            (m[18] = $),
            (m[19] = B),
            (m[20] = p),
            (m[21] = f.title),
            (m[22] = s),
            (m[23] = h))
          : (h = m[23]),
        h
      )
    }
    a.d(
      t,
      {},
      {
        X: function (e) {
          let t,
            a,
            n,
            i,
            d,
            b,
            _,
            x,
            S = (0, r.c)(44),
            { onOpen: P, onSelect: A, expanded: k, stickyHeading: T, compactTitle: O, heading: N, disabled: U } = e,
            F = void 0 !== k && k,
            R = void 0 !== T && T,
            L = void 0 !== O && O,
            D = void 0 !== U && U,
            G = (0, c.gh)(j.u),
            $ = (0, c._U)(I.H6, "granola_presentation"),
            B = (0, p.A)(),
            z = (0, c.Ul)(h.o8),
            V = (0, c.Ul)($ ? C.G : null),
            { isLoading: q, isError: Q } = (0, c.Ul)($ ? w.i8 : null) ?? {},
            H = (0, u.useId)(),
            W = (0, s.g)()
          if (!$) return null
          if (q) {
            let e, a
            ;(S[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, l.jsx)(y.y, {})), (S[0] = e)) : (e = S[0]),
              S[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = (0, l.jsxs)("div", {
                    className: "flex min-h-56 items-center justify-center",
                    role: "status",
                    children: [
                      e,
                      (0, l.jsx)("span", {
                        className: "sr-only",
                        children: (0, l.jsx)(g.A, {
                          id: "space.slideTemplates.loading",
                          defaultMessage: "Loading Slides templates",
                        }),
                      }),
                    ],
                  })),
                  (S[1] = a))
                : (a = S[1]),
              (t = a))
          } else if (Q) {
            let e, a, r, n
            ;(S[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(g.A, {
                  id: "space.slideTemplates.loadFailed",
                  defaultMessage: "Couldn\u2019t load Slides templates",
                })),
                (S[2] = e))
              : (e = S[2]),
              S[3] !== G ? ((a = () => void (0, w.JF)(G)), (S[3] = G), (S[4] = a)) : (a = S[4]),
              S[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((r = (0, l.jsx)(g.A, { id: "space.slideTemplates.retry", defaultMessage: "Try again" })), (S[5] = r))
                : (r = S[5]),
              S[6] !== a
                ? ((n = (0, l.jsxs)(v.W, {
                    children: [e, (0, l.jsx)(m.$, { color: "ghost", size: "toolbar", onClick: a, children: r })],
                  })),
                  (S[6] = a),
                  (S[7] = n))
                : (n = S[7]),
              (t = n))
          } else if (V?.length === 0) {
            let e
            ;(S[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(v.W, {
                  children: (0, l.jsx)(g.A, {
                    id: "space.slideTemplates.empty",
                    defaultMessage: "No Slides templates available",
                  }),
                })),
                (S[8] = e))
              : (e = S[8]),
              (t = e))
          } else {
            let e,
              a,
              r,
              n = F ? void 0 : W.actions.viewportRef,
              i = F
                ? "-m-2 grid grid-cols-3 gap-4 p-2 [@media(max-width:48rem)]:grid-cols-2 [@media(max-width:30rem)]:grid-cols-1"
                : "-m-2 gap-3 p-3 horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased flex scrollbar-none overflow-x-auto overscroll-x-contain *:min-w-56 *:flex-[0_0_calc((100%-2.25rem)/4)]"
            ;(S[9] !== i ? ((e = (0, o.A)("min-w-0", i)), (S[9] = i), (S[10] = e)) : (e = S[10]),
              S[11] !== L || S[12] !== D || S[13] !== P || S[14] !== A || S[15] !== V || S[16] !== z
                ? ((a =
                    null != V &&
                    V.map((e, t) =>
                      (0, l.jsx)(
                        M,
                        {
                          template: e,
                          templatePosition: null == z ? void 0 : t + 1,
                          onOpen: P,
                          onSelect: A,
                          surface: "gallery",
                          compactTitle: L,
                          disabled: D,
                        },
                        e.id,
                      ),
                    )),
                  (S[11] = L),
                  (S[12] = D),
                  (S[13] = P),
                  (S[14] = A),
                  (S[15] = V),
                  (S[16] = z),
                  (S[17] = a))
                : (a = S[17]),
              S[18] !== n || S[19] !== e || S[20] !== a
                ? ((r = (0, l.jsx)("div", { ref: n, className: e, children: a })),
                  (S[18] = n),
                  (S[19] = e),
                  (S[20] = a),
                  (S[21] = r))
                : (r = S[21]),
              (t = r))
          }
          let Y = R && "sticky top-0 z-10 -mx-4 px-4 py-4"
          return (
            S[22] !== Y
              ? ((a = (0, o.A)("mb-3 flex items-center justify-between gap-2", Y)), (S[22] = Y), (S[23] = a))
              : (a = S[23]),
            S[24] !== N ? ((n = N ?? (0, l.jsx)(g.A, { ...E.a.heading })), (S[24] = N), (S[25] = n)) : (n = S[25]),
            S[26] !== H || S[27] !== n
              ? ((i = (0, l.jsx)("h3", { id: H, className: "m-0 body-md font-semibold", children: n })),
                (S[26] = H),
                (S[27] = n),
                (S[28] = i))
              : (i = S[28]),
            S[29] !== W || S[30] !== F || S[31] !== B
              ? ((d =
                  !F &&
                  (W.model.canPrevious || W.model.canNext) &&
                  (0, l.jsxs)("div", {
                    className: "flex shrink-0 items-center gap-1",
                    children: [
                      (0, l.jsx)(m.$, {
                        color: "ghostActive",
                        size: "toolbar",
                        uniform: !0,
                        disabled: !W.model.canPrevious,
                        onClick: W.actions.previous,
                        "aria-label": B.formatMessage({
                          id: "space.slideTemplates.previous",
                          defaultMessage: "Previous Slides templates",
                        }),
                        children: (0, l.jsx)(f.KBq, { className: "rtl:rotate-180" }),
                      }),
                      (0, l.jsx)(m.$, {
                        color: "ghostActive",
                        size: "toolbar",
                        uniform: !0,
                        disabled: !W.model.canNext,
                        onClick: W.actions.next,
                        "aria-label": B.formatMessage({
                          id: "space.slideTemplates.next",
                          defaultMessage: "Next Slides templates",
                        }),
                        children: (0, l.jsx)(f.j1b, { className: "rtl:rotate-180" }),
                      }),
                    ],
                  })),
                (S[29] = W),
                (S[30] = F),
                (S[31] = B),
                (S[32] = d))
              : (d = S[32]),
            S[33] !== a || S[34] !== i || S[35] !== d
              ? ((b = (0, l.jsxs)("div", { className: a, children: [i, d] })),
                (S[33] = a),
                (S[34] = i),
                (S[35] = d),
                (S[36] = b))
              : (b = S[36]),
            S[37] !== t || S[38] !== R
              ? ((_ = R ? (0, l.jsx)("div", { "data-sticky-section-content": !0, children: t }) : t),
                (S[37] = t),
                (S[38] = R),
                (S[39] = _))
              : (_ = S[39]),
            S[40] !== H || S[41] !== b || S[42] !== _
              ? ((x = (0, l.jsxs)("section", { "aria-labelledby": H, children: [b, _] })),
                (S[40] = H),
                (S[41] = b),
                (S[42] = _),
                (S[43] = x))
              : (x = S[43]),
            x
          )
        },
        q: M,
      },
    )
  },
  gXUG(e, t, a) {
    a.d(t, { G: () => g })
    var l = a("qmMi"),
      r = a("SPnB"),
      n = a("iyTF"),
      i = a("OWtl"),
      s = a("JYRT"),
      o = a("ASxG"),
      d = a("wzAt")
    let c = o.YOg(o.YjP().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)).refine((e) => new Set(e).size === e.length),
      u = o.Ikc({
        targeting: o.Ikc({ recommendations: o.Ikc({ business: c, education: c, individual: c, fallback: c }) }),
      }),
      g = (0, l.un)(i.u, ({ get: e }) => {
        let { data: t } = e(n.i8)
        if (null == t || null == e(r.o8)) return t
        let a = e(s.X, "1122994996")
        return (function (e, t, a) {
          let l = u.safeParse(t)
          if (!l.success) return e
          let r = l.data.targeting.recommendations[(0, d.r)(a)],
            n = r.flatMap((t) => e.find((e) => e.id === t) ?? [])
          if (0 === n.length) return e
          let i = e.filter(({ id: e }) => !r.includes(e))
          return [...n, ...i]
        })(t, a?.value, e(r.e0))
      })
  },
  iOgI(e, t, a) {
    var l = a("qmMi"),
      r = a("E8Sp"),
      n = a("SPnB"),
      i = a("SGsN"),
      s = a("svjy"),
      o = a("QufO"),
      d = a("nlNF"),
      c = a("rpnz"),
      u = a("dc3a"),
      g = a("e1xH"),
      p = a("SEOK"),
      h = a("kkOV"),
      m = a("tv8P"),
      f = a("iyTF"),
      v = a("OWtl"),
      y = a("kK7d")
    let b = (0, l.vP)(v.u, null)
    a.d(
      t,
      {},
      {
        M: b,
        _: async function ({ scope: e, template: t, onOpen: l, signal: v }) {
          let _,
            x,
            I = e.get(m.spaceAccountId$),
            w = e.get(n.o8)
          if (null == I || null == w || null != e.get(b) || e.get(c.ut) || !e.get(g.H6, "granola_presentation")) return
          let S = (0, m.watchSpaceAccount)(e, I, void 0, void 0, w),
            j = new AbortController(),
            P = AbortSignal.any([S.signal, j.signal]),
            A = () => {
              null == _ && j.abort(v.reason)
            }
          ;(v.addEventListener("abort", A, { once: !0 }), v.aborted && A())
          let C = e.get(d.x2)
          e.set(b, t.id)
          try {
            let [n, { preparePageHandoff: d }, { importPreparedArtifact: c }] = await Promise.all([
                (0, f.TM)(e, t, P),
                Promise.all([
                  a.e(593475),
                  a.e(923720),
                  a.e(533219),
                  a.e(944744),
                  a.e(787805),
                  a.e(68876),
                  a.e(78948),
                  a.e(811e3),
                  a.e(503482),
                  a.e(707900),
                  a.e(312541),
                  a.e(944852),
                  a.e(285683),
                ]).then(a.bind(a, "azJ3")),
                Promise.all([
                  a.e(593475),
                  a.e(923720),
                  a.e(533219),
                  a.e(944744),
                  a.e(787805),
                  a.e(68876),
                  a.e(78948),
                  a.e(811e3),
                  a.e(503482),
                  a.e(707900),
                  a.e(312541),
                  a.e(944852),
                  a.e(137660),
                ]).then(a.bind(a, "kO7B")),
              ]),
              m = await d(
                { kind: "presentation", artifactProto: n, stateVersion: 0, assets: [] },
                P,
                e.get(g.El, "granola_presentation"),
              )
            if ((P.throwIfAborted(), !e.get(g.H6, "granola_presentation"))) return
            let S = await c(e, {
              accountId: I,
              title: t.title,
              documentType: "granola_presentation",
              prepared: m,
              signal: P,
              onSaveRetry: (t) => {
                if ((x?.close(), (x = void 0), null != t && null == _ && !P.aborted)) {
                  let a = e.get(s.g)
                  x = e
                    .get(i.Id)
                    .danger(a.formatMessage(h.v.granola_presentation.syncFailed), {
                      duration: 0,
                      hasCloseButton: !1,
                      errorAnalytics: { toastId: "space.slideTemplates.saveFailed" },
                      primaryAction: {
                        label: a.formatMessage({
                          id: "pages.native.retry",
                          defaultMessage: "Retry",
                          description: "Retry native document synchronization",
                        }),
                        onClick: t,
                      },
                    })
                }
              },
              onPageCreated: (t) => {
                ;((_ = t),
                  e.set(b, null),
                  v.aborted ||
                    P.aborted ||
                    (l?.(),
                    (0, r.oo)(e, `/space/${t}`, {
                      state: { ...(null != C ? (0, p.$)(C, I, t) : void 0), spaceSidebarAccountId: I },
                    })))
              },
            })
            if ((S.releaseNativeDocument(), !P.aborted && e.get(o.vH) && e.get(g.wr))) {
              let t = await y.Kd.safePost("/pages/{page_id}/preview", {
                parameters: { path: { page_id: S.pageId } },
                expectedIdentity: { accountId: I, userId: w },
                additionalHeaders: { "ChatGPT-Account-ID": I },
                signal: P,
                retry: !1,
              })
              null == t.preview_url || P.aborted || (await (0, u.U9)(e))
            }
          } catch {
            null != _ ||
              P.aborted ||
              e
                .get(i.Id)
                .danger(
                  e
                    .get(s.g)
                    .formatMessage({
                      id: "space.slideTemplates.openFailed",
                      defaultMessage: "Couldn\u2019t open this Slides template. Try again.",
                      description: "Error when a native Slides template cannot be downloaded or opened",
                    }),
                  { errorAnalytics: { toastId: "space.slideTemplates.openFailed" } },
                )
          } finally {
            ;(x?.close(), v.removeEventListener("abort", A), S.stop(), null == _ && e.set(b, null))
          }
        },
      },
    )
  },
  JkZJ(e, t, a) {
    var l = a("SOEF"),
      r = a("WF9u")
    let n = ["\u2063\u2063", "\u2063\u2064"]
    a.d(
      t,
      {},
      {
        Qb: function (e) {
          let t = n.find((t) => e.endsWith(t))
          return null == t ? e : e.slice(0, -t.length)
        },
        eg: function (e) {
          return e.formatMessage({ id: "space.gettingStartedPages.pageTitle", defaultMessage: "Your guide to pages" })
        },
        gt: function (e, t) {
          let a = e.formatMessage(
            {
              id: "space.gettingStartedPages.starterBody.guide",
              defaultMessage: `> [!CALLOUT] \u{1F4A1}
>
> Pages are a place for you to write, build, and collaborate with ChatGPT and your teammates. Use this page as your playground to learn the basics \u{2014} and have fun!

## Getting started

- [ ] **Play with this page.** Type \`/\` to add headings, images, checklists, tables, and more. Try it out in the empty space below \u{1F447}

- [ ] **Work with ChatGPT.** Type \`@ChatGPT\`, followed by your request, and ChatGPT will jump in to help with whatever you need.

- [ ] **Get organized.** Instead of folders, organize information by nesting pages *inside of* pages. Type \`/page\` to create a page inside this one.

- [ ] When your masterpiece is ready, **share** it with your teammates (using the share button in the upper-right), **collaborate**, and fiercely debate in the **comments**.

## Imagine anything, and make it real

Create **interactive visualizations** by typing \`/visualize\` and describing your idea, whether it\u{2019}s *\u{201C}Show me how my savings could grow with an interactive calculator\u{201D}*, *\u{201C}Simulate the solar system\u{201D}*, or even *\u{201C}Create a playable mini-piano.\u{201D}*

{savings}

{solar}

{piano}

---

- [ ] Try it out yourself: In the empty space below, type \`/visualize\` and describe your idea \u{1F447}

---

## Put ChatGPT to work

You can add instructions to pages, and ChatGPT will do the work for you, like creating a self-updating to-do list or comprehensive trip planner. Here are a couple examples of pages ChatGPT can create for you.

\`\`\`codex-prompt
Create a daily list of prioritized tasks from my email, messages, and calendar, and update it every morning
\`\`\`

\`\`\`codex-prompt
Create a new trip planner page with flight details, hotel reservations, and tour info, pulled from my emails
\`\`\``,
            },
            {
              savings:
                t?.savings == null
                  ? ""
                  : (0, r._i)(
                      t.savings,
                      e.formatMessage({
                        id: "space.welcome.demo.savingsAlt",
                        defaultMessage: "Savings growth calculator",
                      }),
                    ),
              solar:
                t?.solar == null
                  ? ""
                  : (0, r._i)(
                      t.solar,
                      e.formatMessage({ id: "space.welcome.demo.solarAlt", defaultMessage: "Solar system explorer" }),
                    ),
              piano:
                t?.piano == null
                  ? ""
                  : (0, r._i)(
                      t.piano,
                      e.formatMessage({ id: "space.welcome.demo.pianoAlt", defaultMessage: "Mini Piano" }),
                    ),
            },
          )
          return (0, l.CyG)(a).flatMap((e) => (e.startsWith("- [ ] ") ? [e, ""] : [e]))
        },
      },
    )
  },
  R0Z4(e, t, a) {
    var l = a("qmMi"),
      r = a("SPnB"),
      n = a("ahQQ"),
      i = a("NRR1"),
      s = a("dH0j"),
      o = a("egOE"),
      d = a("XPum")
    let c = (0, l.vP)(n.vn, () => null),
      u = (0, l.un)(n.vn, ({ get: e, scope: t }) => {
        let a = e(r.chatGptAuthenticatedAccountId$),
          l = e(r.chatGptAuthenticatedUserId$),
          s = t.getOwnValue(n.oD)
        return null != a && null != l && s.accountId === a && (null == s.userId || s.userId === l) && e(d.Pu)
          ? JSON.stringify([a, l, e(i.jv), e(i.$M)])
          : null
      }),
      g = (0, l.un)(n.vn, ({ get: e }) => {
        let t = e(c)
        return null != t && t.identity === e(u) ? t : null
      })
    function p(e) {
      e.set(c, null)
    }
    a.d(
      t,
      {},
      {
        J8: g,
        _f: p,
        s0: function (e) {
          let t = e.watch(({ get: t }) => {
            let a = t(u)
            if (null == a) return void p(e)
            let l = e.get(c)
            return (
              l?.identity !== a && ((l = { identity: a, owner: Symbol("Home visit") }), e.set(c, l)),
              (0, o.OU)(e, l.owner, (0, s.To)(t))
            )
          })
          return () => {
            let a = e.get(c)?.owner
            ;(t(),
              null != a &&
                queueMicrotask(() => {
                  e.get(c)?.owner !== a || (0, o.H9)(e, a) || p(e)
                }))
          }
        },
      },
    )
  },
  LwtL(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      n = a("qmMi"),
      i = a("Wf1j"),
      s = a("oyxz"),
      o = a("BrP7"),
      d = a("cGrE"),
      c = a("jU86")
    a.d(
      t,
      {},
      {
        c: function () {
          let e,
            t,
            a,
            u,
            g,
            p = (0, r.c)(10),
            h = (0, n.gh)(c.Qy),
            m = (0, i.A)()
          ;(p[0] !== m
            ? ((e = m.formatMessage({ id: "space.images.tabs.label", defaultMessage: "Image sources" })),
              (p[0] = m),
              (p[1] = e))
            : (e = p[1]),
            p[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = {
                  key: "generated",
                  name: (0, l.jsx)(s.A, { id: "space.images.tabs.creations", defaultMessage: "Your creations" }),
                }),
                (p[2] = t))
              : (t = p[2]),
            p[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = [
                  t,
                  {
                    key: "uploaded",
                    name: (0, l.jsx)(s.A, { id: "space.images.tabs.uploads", defaultMessage: "Uploads" }),
                  },
                ]),
                (p[3] = a))
              : (a = p[3]))
          let f = h.value.sources[0] ?? "generated"
          return (
            p[4] !== h
              ? ((u = (e) => {
                  ;((0, d.np)(h, { sources: [e] }), (0, c.zl)(h, (0, c.SE)({ ...h.value, sources: [e] })))
                }),
                (p[4] = h),
                (p[5] = u))
              : (u = p[5]),
            p[6] !== e || p[7] !== f || p[8] !== u
              ? ((g = (0, l.jsx)(o.t, {
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: e,
                  tabs: a,
                  selectedKey: f,
                  onSelect: u,
                })),
                (p[6] = e),
                (p[7] = f),
                (p[8] = u),
                (p[9] = g))
              : (g = p[9]),
            g
          )
        },
      },
    )
  },
  XgV1(e, t, a) {
    a.d(t, { K: () => at })
    var l = a("ABep"),
      r = a("QosV"),
      n = a("dSuP"),
      i = a("D015"),
      s = a("uris"),
      o = a("on57"),
      d = a("qmMi"),
      c = a("Bl5Q"),
      u = a("zd8w"),
      g = a("Wf1j"),
      p = a("oyxz"),
      h = a("TzYl"),
      m = a("UOa8"),
      f = a("Kwur"),
      v = a("Sm6l"),
      y = a("wZQ4"),
      b = a("zkPp"),
      _ = a("cGrE"),
      x = a("TCFx"),
      I = a("jU86"),
      w = a("QufO"),
      S = a("EAun"),
      j = a("aYWA"),
      P = a("QoH2"),
      A = a("sz7l"),
      C = a("vq5I"),
      E = a("yGJW"),
      k = a("hZax"),
      M = a("OMIV"),
      T = a("Wj4L"),
      O = a("e1xH"),
      N = a("hVOg"),
      U = a("ARUL"),
      F = a("Rlv5"),
      R = a("Ekk2"),
      L = a("lJyx"),
      D = a("f67h"),
      G = a("hbwb"),
      $ = a("sO5n"),
      B = a("nTUY"),
      z = a("tv8P"),
      V = a("sg90"),
      q = a("pyo2"),
      Q = a("QBk8"),
      H = a("kMOf"),
      W = a("iodE"),
      Y = a("SPnB"),
      K = a("HOLv"),
      Z = a("W0bA"),
      J = a("iyTF"),
      X = a("OWtl"),
      ee = a("Kw4a"),
      et = a("jG6n"),
      ea = a("ibtF"),
      el = a("VU3o"),
      er = a("gXUG")
    let en = (0, a("ESTr").a)({
      name: "xmark-md-regular-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.916565, y: 3.916748, width: 8.166721, height: 8.166687 },
        visualBounds: { x: 3.916565, y: 3.916748, width: 8.166721, height: 8.166687 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.916565, y: 3.916748, width: 8.166721, height: 8.166687 },
        center: { x: 7.999926, y: 8.000092 },
        insets: { top: 3.916748, right: 3.916714, bottom: 3.916565, left: 3.916565 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999926, y: 8.000092 }, foreground: { x: 7.999926, y: 8.000092 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.8032 4.13641C11.0961 3.8436 11.5709 3.84354 11.8637 4.13641C12.1565 4.42929 12.1565 4.9041 11.8637 5.19696L9.06002 7.99969L11.8637 10.8034C12.1563 11.0963 12.1565 11.5712 11.8637 11.8639C11.5709 12.1567 11.0961 12.1565 10.8032 11.8639L7.99947 9.06024L5.19673 11.8639C4.90386 12.1565 4.42898 12.1566 4.13619 11.8639C3.8434 11.5712 3.84362 11.0963 4.13619 10.8034L6.93892 7.99969L4.13619 5.19696C3.84334 4.90409 3.84338 4.4293 4.13619 4.13641C4.42907 3.84352 4.90384 3.84353 5.19673 4.13641L7.99947 6.93914L10.8032 4.13641Z" fill="currentColor"/>',
    })
    var ei = a("T7QO"),
      es = a("LcBG"),
      eo = a("PArc"),
      ed = a("xicS"),
      ec = a.p + "assets/browse-templates.5630a0cf36.webp",
      eu = a("Ywss"),
      eg = a("g70H"),
      ep = a("Vx7B"),
      eh = a("BBQT"),
      em = a("wvfh")
    function ef(e) {
      let t,
        a,
        n,
        s,
        o = (0, r.c)(28),
        { template: c, templatePosition: u, surface: p } = e,
        h = void 0 === p ? "onboarding" : p,
        m = (0, d.gh)(X.u),
        f = (0, g.A)(),
        v = (0, eu.Zp)(),
        y = (0, W.tF)(),
        b = (0, d.Ul)(em.K),
        _ = `space-template-preview-${c.id}`
      return (
        o[0] !== c.previewDocument || o[1] !== c.previewMarkdown || o[2] !== c.title
          ? ((t = { title: c.title, markdown: c.previewMarkdown, units: c.previewDocument }),
            (o[0] = c.previewDocument),
            (o[1] = c.previewMarkdown),
            (o[2] = c.title),
            (o[3] = t))
          : (t = o[3]),
        o[4] !== h || o[5] !== _ || o[6] !== t || o[7] !== c.symbol
          ? ((a = (0, l.jsx)(eg.D, { surface: h, symbol: c.symbol, pageId: _, document: t })),
            (o[4] = h),
            (o[5] = _),
            (o[6] = t),
            (o[7] = c.symbol),
            (o[8] = a))
          : (a = o[8]),
        o[9] !== f ||
        o[10] !== v ||
        o[11] !== b ||
        o[12] !== y ||
        o[13] !== m ||
        o[14] !== h ||
        o[15] !== c.id ||
        o[16] !== c.prefillPrompt ||
        o[17] !== c.previewDocument ||
        o[18] !== c.prompt ||
        o[19] !== c.symbol ||
        o[20] !== c.title ||
        o[21] !== u
          ? ((n =
              b || !y
                ? void 0
                : () => {
                    ;((0, E.yy)(m, Q.CodexSpacesOnboarding, {
                      action: Q.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_ITEM_SELECTED,
                      item: Q.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_TEMPLATES,
                    }),
                      (0, E.yy)(m, Q.CodexSpacesTemplateGallery, {
                        action:
                          Q.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_HOME_TILE_SELECTED,
                        category: "page",
                        templateId: c.id,
                        templatePosition: null == u ? void 0 : (0, i.At)(u),
                        selectionSurface:
                          Q.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_SPACE_HOME_TILE,
                      }),
                      (0, eh.K)({
                        scope: m,
                        isAvailable: "grid" === h ? ev : void 0,
                        title: c.title,
                        prompt: c.prompt,
                        prefillPrompt: c.prefillPrompt,
                        initialDocument: c.previewDocument,
                        initialSymbol: c.symbol,
                        revealSetupComment: "project-home" === c.id || "project-tracker" === c.id,
                        navigate: v,
                        intl: f,
                      }))
                  }),
            (o[9] = f),
            (o[10] = v),
            (o[11] = b),
            (o[12] = y),
            (o[13] = m),
            (o[14] = h),
            (o[15] = c.id),
            (o[16] = c.prefillPrompt),
            (o[17] = c.previewDocument),
            (o[18] = c.prompt),
            (o[19] = c.symbol),
            (o[20] = c.title),
            (o[21] = u),
            (o[22] = n))
          : (n = o[22]),
        o[23] !== h || o[24] !== a || o[25] !== n || o[26] !== c.title
          ? ((s = (0, l.jsx)(ep.Z, { title: c.title, surface: h, preview: a, onOpen: n })),
            (o[23] = h),
            (o[24] = a),
            (o[25] = n),
            (o[26] = c.title),
            (o[27] = s))
          : (s = o[27]),
        s
      )
    }
    function ev(e) {
      return e.get(ee.xk)
    }
    function ey(e) {
      let t,
        a,
        n,
        i,
        s,
        o,
        d,
        c,
        h,
        m = (0, r.c)(32),
        {
          page: f,
          pagePending: y,
          slide: b,
          slidePending: _,
          trackPosition: x,
          visibleContentMarker: I,
          onDismiss: w,
        } = e,
        S = (0, u.useId)(),
        j = (0, g.A)()
      if (m[0] !== f || m[1] !== y || m[2] !== b || m[3] !== _ || m[4] !== x) {
        t = []
        let e = (e) => {
          t.push({ id: e, content: (0, l.jsx)(es.c5, { square: !1, layout: "uniform", index: t.length }) })
        }
        if (null != f) {
          let e,
            a = x ? 1 : void 0
          ;(m[6] !== f || m[7] !== a
            ? ((e = (0, l.jsx)(ef, { surface: "grid", template: f, templatePosition: a })),
              (m[6] = f),
              (m[7] = a),
              (m[8] = e))
            : (e = m[8]),
            t.push({ id: `page:${f.id}`, content: e }))
        } else y && e("page:pending")
        if (null != b) {
          let e,
            a = x ? t.length + 1 : void 0
          ;(m[9] !== b || m[10] !== a
            ? ((e = (0, l.jsx)(el.q, { surface: "grid", template: b, templatePosition: a })),
              (m[9] = b),
              (m[10] = a),
              (m[11] = e))
            : (e = m[11]),
            t.push({ id: `slides:${b.id}`, content: e }))
        } else _ && e("slides:pending")
        if (y || _) e("browse:pending")
        else {
          let e
          ;(m[12] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = { id: "browse", content: (0, l.jsx)(eb, {}) }), (m[12] = e))
            : (e = m[12]),
            t.push(e))
        }
        ;((m[0] = f), (m[1] = y), (m[2] = b), (m[3] = _), (m[4] = x), (m[5] = t))
      } else t = m[5]
      return (
        m[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, l.jsx)(p.A, { id: "space.gettingStarted.gridHeading", defaultMessage: "Get started" })),
            (m[13] = a))
          : (a = m[13]),
        m[14] !== S
          ? ((n = (0, l.jsx)("h2", { id: S, className: "text-sm leading-5 font-medium", children: a })),
            (m[14] = S),
            (m[15] = n))
          : (n = m[15]),
        m[16] !== j
          ? ((i = j.formatMessage({ id: "space.gettingStarted.dismissGrid", defaultMessage: "Dismiss Get started" })),
            (m[16] = j),
            (m[17] = i))
          : (i = m[17]),
        m[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, l.jsx)(K.I, { asset: en })), (m[18] = s))
          : (s = m[18]),
        m[19] !== w || m[20] !== i
          ? ((o = (0, l.jsx)(v.$, {
              color: "ghostTertiary",
              size: "inline",
              "aria-label": i,
              onClick: w,
              children: s,
            })),
            (m[19] = w),
            (m[20] = i),
            (m[21] = o))
          : (o = m[21]),
        m[22] !== n || m[23] !== o
          ? ((d = (0, l.jsxs)("div", { className: "flex items-center gap-1 text-tertiary", children: [n, o] })),
            (m[22] = n),
            (m[23] = o),
            (m[24] = d))
          : (d = m[24]),
        m[25] !== t ? ((c = (0, l.jsx)(eo.n, { items: t })), (m[25] = t), (m[26] = c)) : (c = m[26]),
        m[27] !== S || m[28] !== d || m[29] !== c || m[30] !== I
          ? ((h = (0, l.jsxs)("section", {
              "aria-labelledby": S,
              className: "flex min-w-0 flex-col gap-3",
              onPointerEnter: Z.FM,
              onFocus: Z.FM,
              children: [I, d, c],
            })),
            (m[27] = S),
            (m[28] = d),
            (m[29] = c),
            (m[30] = I),
            (m[31] = h))
          : (h = m[31]),
        h
      )
    }
    function eb() {
      let e,
        t,
        a,
        n,
        i,
        s,
        o = (0, r.c)(13),
        c = (0, d.gh)(X.u),
        p = (0, g.A)(),
        [h, m] = (0, u.useState)(null),
        f = (0, u.useRef)(null)
      return (
        o[0] !== p
          ? ((e = p.formatMessage({
              id: "space.gettingStarted.browseTemplates",
              defaultMessage: "Browse all templates",
            })),
            (o[0] = p),
            (o[1] = e))
          : (e = o[1]),
        o[2] !== c
          ? ((t = (e) => {
              ;(e?.currentTarget instanceof HTMLElement && (f.current = e.currentTarget),
                m(performance.now()),
                (0, E.yy)(c, Q.CodexSpacesTemplateGallery, {
                  action: Q.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_OPEN_REQUESTED,
                }))
            }),
            (o[2] = c),
            (o[3] = t))
          : (t = o[3]),
        o[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, l.jsx)("img", {
              src: ec,
              alt: "",
              draggable: !1,
              className: "m-auto block h-[78%] w-[87%] object-contain",
            })),
            (o[4] = a))
          : (a = o[4]),
        o[5] !== e || o[6] !== t
          ? ((n = (0, l.jsx)(ei.cu, {
              name: e,
              square: !1,
              structuredGridEnabled: !0,
              fullBleed: !0,
              onOpen: t,
              children: a,
            })),
            (o[5] = e),
            (o[6] = t),
            (o[7] = n))
          : (n = o[7]),
        o[8] !== h
          ? ((i =
              null != h &&
              (0, l.jsx)(ed.SpaceTemplateGalleryDialog, {
                openedAt: h,
                onClose: () => m(null),
                onCloseAutoFocus: (e) => {
                  ;(e.preventDefault(), f.current?.focus({ preventScroll: !0 }))
                },
              })),
            (o[8] = h),
            (o[9] = i))
          : (i = o[9]),
        o[10] !== n || o[11] !== i
          ? ((s = (0, l.jsxs)(l.Fragment, { children: [n, i] })), (o[10] = n), (o[11] = i), (o[12] = s))
          : (s = o[12]),
        s
      )
    }
    function e_(e) {
      let t,
        a,
        n,
        i,
        s,
        c,
        h,
        m,
        f,
        y,
        b,
        _,
        x,
        I,
        w,
        S,
        j,
        P,
        A,
        C = (0, r.c)(66),
        { filter: k, suggestions: M, children: T, visibleContentMarker: N, showRecommendations: U } = e,
        F = void 0 === k ? "all" : k
      C[0] !== M ? ((t = void 0 === M ? ["templates"] : M), (C[0] = M), (C[1] = t)) : (t = C[1])
      let R = t,
        L = void 0 !== U && U,
        D = (0, d.gh)(X.u),
        G = (0, g.A)(),
        $ = (0, u.useId)(),
        B = (0, d.Ul)(ee.px)
      C[2] !== R ? ((a = R.includes("templates")), (C[2] = R), (C[3] = a)) : (a = C[3])
      let z = a,
        V = (0, d._U)(O.H6, "granola_presentation"),
        en = z && "pages" !== F,
        ei = en && V,
        es = (0, d.Ul)(ei ? er.G : null) ?? [],
        { isLoading: eo } = (0, d.Ul)(ei ? J.i8 : null) ?? {},
        ed = (0, d.Ul)(B && en ? O.j9 : null),
        ec = (0, W.tF)(),
        eu = (0, d.Ul)(Y.e0),
        eg = z && "slides" !== F,
        ep = (0, d.Ul)(!B && eg ? et.ql : null),
        eh = (0, d.Ul)(B && eg ? et.Wz : null),
        em = B ? eh?.config : ep,
        ev = (0, d.Ul)(Y.o8)
      if (
        C[4] !== em ||
        C[5] !== ed?.isLoading ||
        C[6] !== F ||
        C[7] !== B ||
        C[8] !== eh?.isLoading ||
        C[9] !== G ||
        C[10] !== eu ||
        C[11] !== ec ||
        C[12] !== D ||
        C[13] !== eg ||
        C[14] !== L ||
        C[15] !== eo ||
        C[16] !== es ||
        C[17] !== R ||
        C[18] !== ev ||
        C[19] !== N
      ) {
        s = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t,
            a = (0, ea.X)(G, em?.value, eu),
            r = null != ev ? a.recommended : null,
            o = a.current
          null != r && (o = L ? r : a.catalog)
          let d = eg && void 0 !== em ? o : []
          if (
            (C[23] !== D || C[24] !== R
              ? ((e = () => {
                  for (let e of R)
                    (0, E.yy)(D, Q.CodexSpacesOnboarding, {
                      action: Q.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_ITEM_DISMISSED,
                      item:
                        "welcome" === e
                          ? Q.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME
                          : Q.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_TEMPLATES,
                    })
                  ;(0, q.Ii)(D)
                }),
                (C[23] = D),
                (C[24] = R),
                (C[25] = e))
              : (e = C[25]),
            (n = e),
            B)
          ) {
            s = (0, l.jsx)(ey, {
              page: d[0],
              pagePending: eh?.isLoading === !0,
              slide: es[0],
              slidePending: ed?.isLoading === !0 || !0 === eo,
              trackPosition: null != ev,
              visibleContentMarker: ec && N,
              onDismiss: n,
            })
            break e
          }
          C[26] !== F || C[27] !== es
            ? ((t = "all" === F ? es.slice(0, 2) : es), (C[26] = F), (C[27] = es), (C[28] = t))
            : (t = C[28])
          let c = t,
            u = d.map(eI),
            g = c.map(ex)
          i =
            null != r && L && "all" === F
              ? [...u.slice(0, 2), ...g.slice(0, 1), ...u.slice(2), ...g.slice(1)]
              : [...u, ...g]
        }
        ;((C[4] = em),
          (C[5] = ed?.isLoading),
          (C[6] = F),
          (C[7] = B),
          (C[8] = eh?.isLoading),
          (C[9] = G),
          (C[10] = eu),
          (C[11] = ec),
          (C[12] = D),
          (C[13] = eg),
          (C[14] = L),
          (C[15] = eo),
          (C[16] = es),
          (C[17] = R),
          (C[18] = ev),
          (C[19] = N),
          (C[20] = n),
          (C[21] = i),
          (C[22] = s))
      } else ((n = C[20]), (i = C[21]), (s = C[22]))
      if (s !== Symbol.for("react.early_return_sentinel")) return s
      let eb = i,
        e_ = eb.length > 0
      C[29] !== T ? ((c = u.Children.toArray(T)), (C[29] = T), (C[30] = c)) : (c = C[30])
      let eS = c
      if (0 === eS.length && !e_) return null
      let ej = ec && N
      ;(C[31] !== V
        ? ((h = V
            ? (0, l.jsx)(p.A, {
                id: "space.gettingStarted.artifactsHeading",
                defaultMessage: "Create together in Space",
              })
            : (0, l.jsx)(p.A, { id: "space.gettingStarted.heading", defaultMessage: "Create pages in Space" })),
          (C[31] = V),
          (C[32] = h))
        : (h = C[32]),
        C[33] !== $ || C[34] !== h
          ? ((m = (0, l.jsx)("h2", { id: $, className: "body-md font-normal select-none", children: h })),
            (C[33] = $),
            (C[34] = h),
            (C[35] = m))
          : (m = C[35]),
        C[36] !== G || C[37] !== V
          ? ((f = V
              ? G.formatMessage({
                  id: "space.gettingStarted.dismissArtifacts",
                  defaultMessage: "Dismiss Create together in Space",
                })
              : G.formatMessage({
                  id: "space.gettingStarted.dismiss",
                  defaultMessage: "Dismiss Create pages in Space",
                })),
            (C[36] = G),
            (C[37] = V),
            (C[38] = f))
          : (f = C[38]),
        C[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, l.jsx)(K.I, { asset: H.b })), (C[39] = y))
          : (y = C[39]),
        C[40] !== n || C[41] !== f
          ? ((b = (0, l.jsx)(v.$, {
              className:
                "pointer-events-none opacity-0 group-focus-within/getting-started:pointer-events-auto group-focus-within/getting-started:opacity-100 group-hover/getting-started:pointer-events-auto group-hover/getting-started:opacity-100 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100",
              color: "ghostTertiary",
              size: "inline",
              "aria-label": f,
              onClick: n,
              children: y,
            })),
            (C[40] = n),
            (C[41] = f),
            (C[42] = b))
          : (b = C[42]),
        C[43] !== m || C[44] !== b
          ? ((_ = (0, l.jsxs)("div", { className: "flex items-center gap-1.5", children: [m, b] })),
            (C[43] = m),
            (C[44] = b),
            (C[45] = _))
          : (_ = C[45]))
      let eP = !e_ && "invisible"
      return (
        C[46] !== eP
          ? ((x = (0, o.A)("text-onboarding-body font-normal text-tertiary select-none", eP)),
            (C[46] = eP),
            (C[47] = x))
          : (x = C[47]),
        C[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, l.jsx)(p.A, {
              id: "space.gettingStarted.description",
              defaultMessage: "Choose a template to start working with ChatGPT and your team",
            })),
            (C[48] = I))
          : (I = C[48]),
        C[49] !== x ? ((w = (0, l.jsx)("p", { className: x, children: I })), (C[49] = x), (C[50] = w)) : (w = C[50]),
        C[51] !== _ || C[52] !== w
          ? ((S = (0, l.jsxs)("div", { className: "flex flex-col gap-0.5", children: [_, w] })),
            (C[51] = _),
            (C[52] = w),
            (C[53] = S))
          : (S = C[53]),
        C[54] !== eb || C[55] !== ev
          ? ((j = eb.map((e, t) => {
              let { kind: a, template: r } = e
              return "page" === a
                ? (0, l.jsx)(ef, { template: r, templatePosition: null == ev ? void 0 : t + 1 }, `page:${r.id}`)
                : (0, l.jsx)(
                    el.q,
                    { template: r, surface: "onboarding", templatePosition: null == ev ? void 0 : t + 1 },
                    `slides:${r.id}`,
                  )
            })),
            (C[54] = eb),
            (C[55] = ev),
            (C[56] = j))
          : (j = C[56]),
        C[57] !== eS || C[58] !== ec || C[59] !== j
          ? ((P = (0, l.jsxs)(ew, { present: ec, children: [eS, j] })),
            (C[57] = eS),
            (C[58] = ec),
            (C[59] = j),
            (C[60] = P))
          : (P = C[60]),
        C[61] !== $ || C[62] !== S || C[63] !== P || C[64] !== ej
          ? ((A = (0, l.jsxs)("section", {
              className: "group/getting-started @container/getting-started flex min-w-0 flex-col gap-3",
              "aria-labelledby": $,
              onPointerEnter: Z.FM,
              onFocus: Z.FM,
              children: [ej, S, P],
            })),
            (C[61] = $),
            (C[62] = S),
            (C[63] = P),
            (C[64] = ej),
            (C[65] = A))
          : (A = C[65]),
        A
      )
    }
    function ex(e) {
      return { kind: "slides", template: e }
    }
    function eI(e) {
      return { kind: "page", template: e }
    }
    let ew = (0, u.memo)(
      function (e) {
        let t,
          a = (0, r.c)(2),
          { children: n } = e
        return (
          a[0] !== n
            ? ((t = (0, l.jsx)("div", {
                className:
                  "horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased -my-4 -ms-4 grid scrollbar-on-hover min-w-0 scroll-px-4 auto-cols-[max(9rem,calc((100%-1rem)*3/4))] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain p-4 @lg/getting-started:auto-cols-[max(9rem,calc((100%-2rem)*3/7))] @3xl/getting-started:auto-cols-[max(9rem,calc((100%-3rem)*3/10))] @5xl/getting-started:auto-cols-[max(9rem,calc((100%-4rem)*3/13))] @7xl/getting-started:auto-cols-[max(9rem,calc((100%-5rem)*3/16))]",
                onFocusCapture: eS,
                children: n,
              })),
              (a[0] = n),
              (a[1] = t))
            : (t = a[1]),
          t
        )
      },
      (e, t) => !t.present,
    )
    function eS(e) {
      e.target.matches(":focus-visible") &&
        e.currentTarget.contains(e.target) &&
        e.target.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" })
    }
    var ej = a("egOE"),
      eP = a("XPum"),
      eA = a("T0Rc"),
      eC = a("ne1e"),
      eE = a.n(eC),
      ek = a("DZee"),
      eM = a("BG6H"),
      eT = a("iRMi"),
      eO = a("nzEQ"),
      eN = a("SQbA"),
      eU = a("Gtga"),
      eF = a("Um9I"),
      eR = a("CqWC"),
      eL = a("CmGX"),
      eD = a("rH0R"),
      eG = a("rBG6"),
      e$ = a("e7El"),
      eB = a("uNsz"),
      ez = a("zkSD"),
      eV = a("heYt"),
      eq = a("jLa0")
    function eQ(e) {
      let t,
        a,
        n = (0, r.c)(12),
        { item: i, children: s } = e,
        o = void 0 === s ? eE() : s,
        c = (0, d.gh)(I.Qy),
        u = (0, d.Ul)(O.TV),
        g = (0, d.Ul)(z.spaceAccountId$),
        p = (0, d.Ul)(Y.chatGptAuthenticatedUserId$)
      if (!u || c.value.deleted || null == g || g !== c.value.accountId || null == p || p !== c.value.userId) {
        let e
        return (n[0] !== o ? ((e = o(null)), (n[0] = o), (n[1] = e)) : (e = n[1]), e)
      }
      return (
        n[2] !== g || n[3] !== i || n[4] !== p
          ? ((t = JSON.stringify([g, p, (0, x.e4)(i)])), (n[2] = g), (n[3] = i), (n[4] = p), (n[5] = t))
          : (t = n[5]),
        n[6] !== g || n[7] !== i || n[8] !== o || n[9] !== t || n[10] !== p
          ? ((a = (0, l.jsx)(eH, { item: i, accountId: g, userId: p, children: o }, t)),
            (n[6] = g),
            (n[7] = i),
            (n[8] = o),
            (n[9] = t),
            (n[10] = p),
            (n[11] = a))
          : (a = n[11]),
        a
      )
    }
    function eH(e) {
      let t,
        a,
        n,
        i,
        s,
        o,
        c,
        g,
        h,
        m = (0, r.c)(33),
        { item: f, accountId: v, userId: y, children: b } = e,
        _ = (0, d.gh)(I.Qy)
      "node" in f ? (t = f) : "libraryPage" in f ? (t = f.libraryPage) : "page" in f && (t = f.libraryItem)
      let w = "searchResult" in f ? f.searchResult.payload : null,
        S = null
      "page" in f
        ? (S = f.page.page_id)
        : t?.node.library_artifact_type === "page"
          ? (S = t.node.id)
          : w?.kind === "space_page" && (S = w.page_id)
      let j = "siteProject" in f ? f.siteProject : null,
        P = j?.id ?? (t ? (0, eB.h5)(t) : null),
        A = (0, d._U)(
          null != S &&
            t?.node.is_shared == null &&
            t?.node.access_kind !== "shared" &&
            !t?.node.page_metadata?.sharing_badge_resolved
            ? eL.D
            : null,
          S ?? "",
          { enabled: !1 },
        )?.data,
        C = (0, d._U)(
          t?.deferredSharingBadge && (0, x.sE)(t) ? eq.J : null,
          { kind: t?.node.kind ?? "file", id: t?.node.id ?? "" },
          { enabled: !1 },
        )?.data,
        E =
          t?.node.is_shared ??
          ((null != t && (0, eB.GS)(t)) ||
            !0 === A ||
            !0 === C ||
            (null != j &&
              ("editor" === j.current_user_role ||
                ("library:collection:shared-with-me" === _.value.directoryId && "owner" !== j.current_user_role) ||
                "public" === j.sharing.accessMode ||
                "workspace_all" === j.sharing.accessMode ||
                (!1 !== j.sharing.countsAvailable && (j.sharing.userCount > 0 || j.sharing.groupCount > 0))))),
        T = (0, k.Zj)(null != P && "2881922323"),
        N = (0, d.Ul)(null != S ? O.pagesEnabled$ : null),
        U = (0, d.Ul)(eV.Ym),
        F = (0, d._U)(null != t ? e$.SA : null, t?.node.id ?? ""),
        [R, L] = (0, u.useState)(!1),
        [D, G] = (0, u.useState)(null),
        $ = (0, d._U)(null != D ? eF.jy : null, D ?? S ?? ""),
        B = (0, u.useRef)(!0)
      ;(m[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => (
            (B.current = !0),
            () => {
              B.current = !1
            }
          )),
          (n = []),
          (m[0] = a),
          (m[1] = n))
        : ((a = m[0]), (n = m[1])),
        (0, u.useEffect)(a, n),
        m[2] !== v || m[3] !== _ || m[4] !== y
          ? ((i = () =>
              B.current && _.get(O.TV) && _.get(z.spaceAccountId$) === v && _.get(Y.chatGptAuthenticatedUserId$) === y),
            (m[2] = v),
            (m[3] = _),
            (m[4] = y),
            (m[5] = i))
          : (i = m[5]))
      let V = i,
        q = null != t && U && (0, eB.yU)(t)
      ;(null != S
        ? (q = !0 === N && (!("page" in f) || f.page.access.can_share))
        : null != P && (q = T && (null == j || "owner" === j.current_user_role || "editor" === j.current_user_role)),
        m[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, l.jsx)(K.I, { asset: eO.B, className: "shrink-0" })), (m[6] = s))
          : (s = m[6]),
        m[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, l.jsxs)(l.Fragment, {
              children: [
                s,
                (0, l.jsx)("span", {
                  className: "sr-only",
                  children: (0, l.jsx)(p.A, { id: "libraryNext.items.sharingStatus.shared", defaultMessage: "Shared" }),
                }),
              ],
            })),
            (m[7] = o))
          : (o = m[7]))
      let Q = o,
        H = null
      if (E) {
        let e
        ;(m[8] !== v ||
        m[9] !== q ||
        m[10] !== V ||
        m[11] !== t ||
        m[12] !== R ||
        m[13] !== S ||
        m[14] !== F ||
        m[15] !== _ ||
        m[16] !== L ||
        m[17] !== G ||
        m[18] !== j ||
        m[19] !== P ||
        m[20] !== y
          ? ((e = q
              ? (0, l.jsx)("button", {
                  type: "button",
                  className:
                    "pointer-events-auto relative z-10 inline-flex cursor-interaction items-center gap-1 rounded-sm hover:text-default focus-visible:text-default",
                  disabled: R || !0 === F,
                  onClick: (e) => {
                    ;(e.preventDefault(),
                      e.stopPropagation(),
                      !V() ||
                        R ||
                        F ||
                        (L(!0),
                        (async () => {
                          if (null != S) {
                            let e = await (0, eR.AQ)(_, S, v, y)
                            V() &&
                              _.get(O.pagesEnabled$) &&
                              e?.access.can_share === !0 &&
                              "request_changes" !== _.get(eF.jy, e) &&
                              G(e)
                          } else if (null != P) {
                            let e = j ?? (await (0, eN.vX)(P, { expectedIdentity: { accountId: v, userId: y } }))
                            V() &&
                              _.get(M.JW, "2881922323") &&
                              ("owner" === e.current_user_role || "editor" === e.current_user_role) &&
                              (0, eU.l)(_, P, {
                                initialIsOwner: "owner" === e.current_user_role,
                                initialProjectTitle: e.title,
                                source: eT.CodexSitesSharingSource.CODEX_SITES_SHARING_SOURCE_LIBRARY_ACCESS_BADGE,
                                shouldOpen: () => V() && _.get(M.JW, "2881922323"),
                              })
                          } else
                            null != t &&
                              V() &&
                              _.get(eV.Ym) &&
                              (0, eB.yU)(t) &&
                              (await (0, ez.jj)(_, { accountId: v, entry: t }, () => V() && _.get(eV.Ym)))
                        })()
                          .catch(eW)
                          .finally(() => {
                            B.current && L(!1)
                          })))
                  },
                  children: Q,
                })
              : (0, l.jsx)("span", { className: "inline-flex items-center gap-1", children: Q })),
            (m[8] = v),
            (m[9] = q),
            (m[10] = V),
            (m[11] = t),
            (m[12] = R),
            (m[13] = S),
            (m[14] = F),
            (m[15] = _),
            (m[16] = L),
            (m[17] = G),
            (m[18] = j),
            (m[19] = P),
            (m[20] = y),
            (m[21] = e))
          : (e = m[21]),
          (H = e))
      }
      return (
        m[22] !== b || m[23] !== H
          ? ((c = b(H, { iconOnly: !0 })), (m[22] = b), (m[23] = H), (m[24] = c))
          : (c = m[24]),
        m[25] !== $ || m[26] !== D || m[27] !== N || m[28] !== G
          ? ((g =
              N && D?.access.can_share === !0 && "request_changes" !== $
                ? (0, l.jsx)(eD.PageSharingDialog, { pageId: D.page_id, onClose: () => G(null) })
                : null),
            (m[25] = $),
            (m[26] = D),
            (m[27] = N),
            (m[28] = G),
            (m[29] = g))
          : (g = m[29]),
        m[30] !== c || m[31] !== g
          ? ((h = (0, l.jsxs)(l.Fragment, { children: [c, g] })), (m[30] = c), (m[31] = g), (m[32] = h))
          : (h = m[32]),
        h
      )
    }
    function eW(e) {
      ;(0, eG.dk)(e instanceof Error ? e : Error(String(e)))
    }
    var eY = a("P6OM"),
      eK = a("oNDa"),
      eZ = a("SyuA"),
      eJ = a("E8Sp"),
      eX = a("Ji1v"),
      e0 = a("QGkM"),
      e1 = a("ikCk"),
      e2 = a("nJU9"),
      e3 = a("TjgH"),
      e4 = a("Ot7V"),
      e6 = a("Q8aV"),
      e5 = a("BuIP"),
      e8 = a("i4m7"),
      e7 = a("khOd")
    function e9(e) {
      let t,
        a,
        n,
        i,
        s,
        o,
        c,
        u,
        g = (0, r.c)(54),
        {
          layout: h,
          project: f,
          viewMode: v,
          structuredGridEnabled: y,
          source: b,
          showSize: _,
          reserveDisclosureSpace: x,
          onOpenSite: I,
        } = e,
        w = void 0 !== y && y,
        S = (0, d.gh)(X.u),
        j = (0, k.Zj)("553767319"),
        P = (0, d.Ul)(O.TV),
        { accountId: A, userId: C } = (0, m.As)()
      g[0] !== A || g[1] !== f || g[2] !== C
        ? ((t = { accountId: A, userId: C, projectId: f.id, title: f.title, initialPinned: f.is_pinned, site: f }),
          (g[0] = A),
          (g[1] = f),
          (g[2] = C),
          (g[3] = t))
        : (t = g[3])
      let E = (0, d._U)(e1.X, t),
        M = (0, eu.zy)(),
        T = (0, e6.p8)(),
        N = "suspended" === f.status || "deleting" === f.status,
        U = N ? null : f.live_url,
        F = "owner" === f.current_user_role,
        R = F || "editor" === f.current_user_role
      g[4] !== A ||
      g[5] !== U ||
      g[6] !== M ||
      g[7] !== f.id ||
      g[8] !== f.latest_edit_context ||
      g[9] !== f.title ||
      g[10] !== S ||
      g[11] !== T
        ? ((a = (e) => {
            ;(0, e2.$)(
              S,
              T,
              {
                type: void 0 === e ? "edit" : e,
                projectId: f.id,
                projectTitle: f.title,
                latestEditContext: f.latest_edit_context,
                liveUrl: U,
              },
              S.get(e7.GB) ? (0, e8.E)(M, A) : void 0,
            )
          }),
          (g[4] = A),
          (g[5] = U),
          (g[6] = M),
          (g[7] = f.id),
          (g[8] = f.latest_edit_context),
          (g[9] = f.title),
          (g[10] = S),
          (g[11] = T),
          (g[12] = a))
        : (a = g[12])
      let L = a
      g[13] !== R || g[14] !== L || g[15] !== I
        ? ((n = (e) => !!I?.(e, R ? L : void 0) && (e?.preventDefault(), !0)),
          (g[13] = R),
          (g[14] = L),
          (g[15] = I),
          (g[16] = n))
        : (n = g[16])
      let D = n
      g[17] !== U || g[18] !== D
        ? ((i = null == U ? void 0 : { href: U, initiator: "sites_library", onUnmodifiedClick: D }),
          (g[17] = U),
          (g[18] = D),
          (g[19] = i))
        : (i = g[19])
      let G = i
      if (null != G) {
        let e
        ;(g[20] !== G || g[21] !== D
          ? ((e = (e) => {
              !(
                !e?.metaKey &&
                !e?.ctrlKey &&
                !e?.shiftKey &&
                !e?.altKey &&
                (null == e || !("button" in e) || 0 === e.button) &&
                D(e)
              ) && (null == e ? (0, e4.E0)(G) : (0, e4.PQ)({ ...G, event: e }))
            }),
            (g[20] = G),
            (g[21] = D),
            (g[22] = e))
          : (e = g[22]),
          (s = e))
      } else if (!N && R) {
        let e
        ;(g[23] !== L ? ((e = () => L()), (g[23] = L), (g[24] = e)) : (e = g[24]), (s = e))
      }
      g[25] !== N
        ? ((o = N
            ? (0, l.jsx)(e3.E, {
                children: (0, l.jsx)(p.A, { id: "appgenPage.disabledBadge", defaultMessage: "Disabled" }),
              })
            : null),
          (g[25] = N),
          (g[26] = o))
        : (o = g[26])
      let $ = o
      g[27] !== A ||
      g[28] !== R ||
      g[29] !== F ||
      g[30] !== N ||
      g[31] !== L ||
      g[32] !== U ||
      g[33] !== M ||
      g[34] !== j ||
      g[35] !== E?.pinned ||
      g[36] !== f ||
      g[37] !== S ||
      g[38] !== P ||
      g[39] !== v
        ? ((c = (e) => {
            let { className: t } = e
            return (0, l.jsx)(eX.u, {
              className: t,
              canEdit: R,
              canManage: F,
              disabled: N,
              disabledBy: f.disabled_by,
              isPinned: E?.pinned,
              liveUrl: U,
              onEdit: L,
              onNavigateToSite: P
                ? (e) => {
                    ;(0, eJ.oo)(S, `${S.get(O.pagesEnabled$) ? "/space" : ""}${e}`, { state: (0, e8.L)(M, A) })
                  }
                : void 0,
              projectId: f.id,
              projectTitle: f.title,
              compact: !0,
              surface: "library",
              unpublished: (0, e0.Dc)(f, j),
              viewMode: v,
            })
          }),
          (g[27] = A),
          (g[28] = R),
          (g[29] = F),
          (g[30] = N),
          (g[31] = L),
          (g[32] = U),
          (g[33] = M),
          (g[34] = j),
          (g[35] = E?.pinned),
          (g[36] = f),
          (g[37] = S),
          (g[38] = P),
          (g[39] = v),
          (g[40] = c))
        : (c = g[40])
      let B = c,
        z = _ ? "\u2014" : void 0
      return (
        g[41] !== B ||
        g[42] !== h ||
        g[43] !== G ||
        g[44] !== s ||
        g[45] !== E ||
        g[46] !== f ||
        g[47] !== x ||
        g[48] !== b ||
        g[49] !== $ ||
        g[50] !== w ||
        g[51] !== z ||
        g[52] !== v
          ? ((u = (0, l.jsx)(e5.G, {
              previewBorder: !0,
              project: f,
              viewMode: v,
              layout: h,
              structuredGridEnabled: w,
              reserveDisclosureSpace: x,
              link: G,
              onOpen: s,
              actions: B,
              pin: E,
              source: b,
              status: $,
              detail: z,
            })),
            (g[41] = B),
            (g[42] = h),
            (g[43] = G),
            (g[44] = s),
            (g[45] = E),
            (g[46] = f),
            (g[47] = x),
            (g[48] = b),
            (g[49] = $),
            (g[50] = w),
            (g[51] = z),
            (g[52] = v),
            (g[53] = u))
          : (u = g[53]),
        u
      )
    }
    var te = a("DBCl"),
      tt = a("bVeK"),
      ta = a("SGsN"),
      tl = a("bg92"),
      tr = a("yeKA"),
      tn = a("rFad"),
      ti = a("nlNF"),
      ts = a("idI8"),
      to = a("Ptto"),
      td = a("atZq"),
      tc = a("Lowz")
    a("DUyD")
    var tu = a("wN9P")
    function tg(e) {
      let t,
        a,
        n,
        i,
        s,
        o,
        c,
        u,
        h,
        m = (0, r.c)(96),
        {
          layout: f,
          isCurrent: v,
          navigation: y,
          result: b,
          viewMode: _,
          structuredGridEnabled: x,
          source: I,
          reserveDisclosureSpace: S,
          onOpen: j,
          fileActions: P,
        } = e,
        A = (0, d.gh)(X.u),
        C = (0, g.A)(),
        k = (0, eu.Zp)(),
        M = (0, eu.zy)(),
        T = (0, d.Ul)(z.spaceAccountId$),
        N = (0, d.Ul)(Y.chatGptAuthenticatedUserId$),
        { payload: U } = b,
        F = "grid" === _ && "space_page" === U.kind ? U : null,
        R = (0, d._U)(z.loadedSpacePageMetadata$, F?.page_id ?? null),
        L = F?.document_type ?? R?.document_type,
        D = (0, d.Ul)(!!x && "granola_presentation" === L && w.vH)
      if ("space_page" !== U.kind && "space_file" !== U.kind) return null
      m[0] !== C || m[1] !== b
        ? ((t =
            (0, tn.Ko)({ searchResult: b }, C) ||
            C.formatMessage({ id: "space.home.untitledSearchResult", defaultMessage: "Untitled" })),
          (m[0] = C),
          (m[1] = b),
          (m[2] = t))
        : (t = m[2])
      let G = t
      m[3] !== b.update_time || m[4] !== _
        ? ((a =
            null == b.update_time
              ? null
              : (0, l.jsx)(tl.A, {
                  timestamp: new Date(1e3 * b.update_time).toISOString(),
                  dateKind: "suggested",
                  relative: "list" === _,
                })),
          (m[3] = b.update_time),
          (m[4] = _),
          (m[5] = a))
        : (a = m[5])
      let $ = a
      m[6] !== T || m[7] !== v || m[8] !== M || m[9] !== A || m[10] !== N
        ? ((n = () =>
            A.get(z.spaceAccountId$) === T &&
            A.get(Y.chatGptAuthenticatedUserId$) === N &&
            A.get(O.pagesEnabled$) &&
            A.get(ti.x2)?.key === M.key &&
            (v?.() ?? !0)),
          (m[6] = T),
          (m[7] = v),
          (m[8] = M),
          (m[9] = A),
          (m[10] = N),
          (m[11] = n))
        : (n = m[11])
      let B = n
      m[12] !== A
        ? ((i = () => {
            ;(0, E.yy)(A, Q.CodexSpacesPageOpenRequested, {
              referrer: Q.CodexSpacesPageOpenReferrer.CODEX_SPACES_PAGE_OPEN_REFERRER_SEARCH,
            })
          }),
          (m[12] = A),
          (m[13] = i))
        : (i = m[13])
      let V = i
      m[14] !== B || m[15] !== V || m[16] !== U.kind
        ? ((s = (e) => {}), (m[14] = B), (m[15] = V), (m[16] = U.kind), (m[17] = s))
        : (s = m[17])
      let q = s
      m[18] !== T ||
      m[19] !== B ||
      m[20] !== P ||
      m[21] !== M ||
      m[22] !== V ||
      m[23] !== G ||
      m[24] !== k ||
      m[25] !== y ||
      m[26] !== j ||
      m[27] !== U ||
      m[28] !== A ||
      m[29] !== N
        ? ((o = () => {
            if (B()) {
              if ((j?.(), "space_page" !== U.kind)) {
                if ("space_file" === U.kind) {
                  let e = () => {
                    B() &&
                      A.get(ta.Id).danger(
                        (0, l.jsx)(p.A, {
                          id: "codex.chatGptSearch.previewFailed",
                          defaultMessage: "Unable to open file preview",
                        }),
                        { errorAnalytics: { toastId: "codex.chatGptSearch.previewFailed" } },
                      )
                  }
                  null != U.page_id
                    ? P.openPageFile({
                        allowTaskPreview: !0,
                        browserPreview: !0,
                        conversationId: null,
                        downloadFallback: !1,
                        fileName: G,
                        isAccessBlocked: (e) =>
                          e.get(z.spaceAccountId$) !== T ||
                          e.get(Y.chatGptAuthenticatedUserId$) !== N ||
                          !e.get(O.pagesEnabled$),
                        tabKey: `page:${T}:${U.page_id}:${U.file_id}`,
                        target: { type: "page-file", fileId: U.file_id, pageId: U.page_id },
                      }).catch(e)
                    : (0, te.PKK)(U.file_id)
                      ? null == y && A.get(td.kJ)
                        ? (0, tc.D)(A, { kind: "library", libraryFileId: U.file_id })
                        : P.openLibraryFile(U.file_id, G)
                      : e()
                }
                return
              }
              ;(V(),
                (0, ts.openGlobalSearchSpacePage)(A, k, M, U, B, y?.onOpenPage).catch(() => {
                  B() &&
                    A.get(ta.Id).danger(
                      (0, l.jsx)(p.A, {
                        id: "codex.chatGptSearch.pageOpenFailed.byDocumentType",
                        values: { documentType: A.get(z.loadedSpacePageMetadata$, U.page_id)?.document_type ?? "page" },
                        defaultMessage:
                          "{documentType, select, granola_presentation {Unable to open this slide} granola_workbook {Unable to open this sheet} other {Unable to open this page}}",
                      }),
                      { errorAnalytics: { toastId: "codex.chatGptSearch.pageOpenFailed" } },
                    )
                }))
            }
          }),
          (m[18] = T),
          (m[19] = B),
          (m[20] = P),
          (m[21] = M),
          (m[22] = V),
          (m[23] = G),
          (m[24] = k),
          (m[25] = y),
          (m[26] = j),
          (m[27] = U),
          (m[28] = A),
          (m[29] = N),
          (m[30] = o))
        : (o = m[30])
      let H = o
      if (null != F) {
        let e,
          t,
          a,
          r,
          n = "granola_presentation" === L || "granola_workbook" === L || "granola_whiteboard" === L
        ;(m[33] !== G
          ? ((e = (0, l.jsx)("span", { className: "truncate", children: G })), (m[33] = G), (m[34] = e))
          : (e = m[34]),
          m[35] !== $ || m[36] !== x
            ? ((t =
                !x && $ && (0, l.jsx)("div", { className: "truncate ps-1 pt-2 text-xs text-secondary", children: $ })),
              (m[35] = $),
              (m[36] = x),
              (m[37] = t))
            : (t = m[37]))
        let i = F.symbol ?? R?.symbol,
          s = R?.namespace,
          o = R?.image_preview,
          d = R?.updated_at
        ;(m[38] !== L ||
        m[39] !== F.page_id ||
        m[40] !== G ||
        m[41] !== D ||
        m[42] !== x ||
        m[43] !== i ||
        m[44] !== s ||
        m[45] !== o ||
        m[46] !== d
          ? ((a = (0, l.jsx)(to.e, {
              slideStack: D,
              pageId: F.page_id,
              title: G,
              documentType: L,
              symbol: i,
              namespace: s,
              imagePreview: o,
              updatedAt: d,
              iconColor: "file-type",
              structuredGridEnabled: x,
              deferDocumentMount: !0,
            })),
            (m[38] = L),
            (m[39] = F.page_id),
            (m[40] = G),
            (m[41] = D),
            (m[42] = x),
            (m[43] = i),
            (m[44] = s),
            (m[45] = o),
            (m[46] = d),
            (m[47] = a))
          : (a = m[47]),
          m[48] !== c ||
          m[49] !== G ||
          m[50] !== q ||
          m[51] !== H ||
          m[52] !== D ||
          m[53] !== x ||
          m[54] !== a ||
          m[55] !== n ||
          m[56] !== e ||
          m[57] !== t
            ? ((r = (0, l.jsx)(ei.cu, {
                name: G,
                square: !0,
                structuredGridEnabled: x,
                fullBleed: D,
                landscape: n,
                documentHeader: e,
                caption: t,
                href: c,
                onActivate: q,
                onOpen: H,
                children: a,
              })),
              (m[48] = c),
              (m[49] = G),
              (m[50] = q),
              (m[51] = H),
              (m[52] = D),
              (m[53] = x),
              (m[54] = a),
              (m[55] = n),
              (m[56] = e),
              (m[57] = t),
              (m[58] = r))
            : (r = m[58]),
          (u = r))
      } else if ("grid" === _) {
        let e, t, a
        ;(m[59] !== G || m[60] !== x
          ? ((e = x ? (0, l.jsx)("span", { className: "truncate", children: G }) : void 0),
            (m[59] = G),
            (m[60] = x),
            (m[61] = e))
          : (e = m[61]),
          m[62] !== $ || m[63] !== G || m[64] !== x
            ? ((t = x
                ? (0, l.jsx)("span", {
                    className: "relative flex min-h-0 w-full flex-1",
                    children: (0, l.jsx)("span", {
                      className: "absolute inset-0 flex items-center justify-center",
                      children: (0, l.jsx)(tr.p, {
                        fileName: void 0,
                        mimeType: void 0,
                        provider: "native",
                        style: "artwork",
                      }),
                    }),
                  })
                : (0, l.jsx)(ei.JV, {
                    heading: G,
                    artwork: (0, l.jsx)(tr.p, {
                      fileName: void 0,
                      mimeType: void 0,
                      provider: "native",
                      style: "card",
                      className: "size-14",
                    }),
                    footer: (0, l.jsx)("span", { className: "min-w-0 truncate", children: $ }),
                  })),
              (m[62] = $),
              (m[63] = G),
              (m[64] = x),
              (m[65] = t))
            : (t = m[65]),
          m[66] !== c || m[67] !== G || m[68] !== q || m[69] !== H || m[70] !== x || m[71] !== e || m[72] !== t
            ? ((a = (0, l.jsx)(ei.cu, {
                name: G,
                square: !0,
                structuredGridEnabled: x,
                documentHeader: e,
                href: c,
                onActivate: q,
                onOpen: H,
                children: t,
              })),
              (m[66] = c),
              (m[67] = G),
              (m[68] = q),
              (m[69] = H),
              (m[70] = x),
              (m[71] = e),
              (m[72] = t),
              (m[73] = a))
            : (a = m[73]),
          (u = a))
      } else {
        let e, t, a
        ;(m[74] !== U.kind
          ? ((e =
              "space_page" === U.kind
                ? (0, l.jsx)(tt.hXV, { className: "text-file-document" })
                : (0, l.jsx)(tt.o_G, {})),
            (m[74] = U.kind),
            (m[75] = e))
          : (e = m[75]),
          m[76] !== f || m[77] !== b
            ? ((t = "stacked" === f ? (0, l.jsx)(eM.M, { item: { searchResult: b } }) : void 0),
              (m[76] = f),
              (m[77] = b),
              (m[78] = t))
            : (t = m[78]),
          m[79] !== $ ||
          m[80] !== c ||
          m[81] !== f ||
          m[82] !== G ||
          m[83] !== q ||
          m[84] !== H ||
          m[85] !== S ||
          m[86] !== I ||
          m[87] !== e ||
          m[88] !== t
            ? ((a = (0, l.jsx)(ei.kt, {
                layout: f,
                reserveDisclosureSpace: S,
                name: G,
                artwork: e,
                source: I,
                sharedBy: t,
                activity: $,
                href: c,
                onActivate: q,
                onOpen: H,
              })),
              (m[79] = $),
              (m[80] = c),
              (m[81] = f),
              (m[82] = G),
              (m[83] = q),
              (m[84] = H),
              (m[85] = S),
              (m[86] = I),
              (m[87] = e),
              (m[88] = t),
              (m[89] = a))
            : (a = m[89]),
          (u = a))
      }
      return (
        m[90] !== B || m[91] !== u || m[92] !== c || m[93] !== U.kind || m[94] !== U.page_id
          ? ((h =
              "space_page" === U.kind
                ? (0, l.jsx)(tu.A, {
                    pageId: U.page_id,
                    selector: null == c ? "button" : "a[href]",
                    canPrepare: B,
                    children: u,
                  })
                : u),
            (m[90] = B),
            (m[91] = u),
            (m[92] = c),
            (m[93] = U.kind),
            (m[94] = U.page_id),
            (m[95] = h))
          : (h = m[95]),
        h
      )
    }
    var tp = a("XYGD")
    function th(e) {
      let t,
        a,
        n,
        i = (0, r.c)(38),
        { item: s, catalog: o, navigation: c, onOpenProfile: u, inline: g, children: p } = e,
        h = void 0 !== g && g,
        m = void 0 === p ? eE() : p,
        { value: f } = (0, d.gh)(I.Qy),
        v = (0, d.Ul)(void 0 === o ? z.spacesQuery$ : null),
        y = o ?? v?.data
      if ("siteProject" in s) {
        let e
        return (
          i[0] !== s || i[1] !== m
            ? ((e = (0, l.jsx)(eQ, { item: s, children: m })), (i[0] = s), (i[1] = m), (i[2] = e))
            : (e = i[2]),
          e
        )
      }
      if (!h && "suggested" === f.tab && "node" in s && null != s.node.created_by) {
        let e
        return (
          i[3] !== s || i[4] !== u || i[5] !== m
            ? ((e = (0, l.jsx)(eM.M, {
                item: s,
                column: "source",
                showFileCreator: !0,
                loadCreatorNameFirst: !0,
                onOpenProfile: u,
                children: m,
              })),
              (i[3] = s),
              (i[4] = u),
              (i[5] = m),
              (i[6] = e))
            : (e = i[6]),
          e
        )
      }
      i[7] !== s || i[8] !== y ? ((t = t_(y, s)), (i[7] = s), (i[8] = y), (i[9] = t)) : (t = i[9])
      let b = t
      if (null == b) {
        let e
        if (h) {
          let e, t
          if (null == y) {
            let e
            return (i[10] !== m ? ((e = m(null)), (i[10] = m), (i[11] = e)) : (e = i[11]), e)
          }
          if ("node" in s && null != s.node.parent_directory_id && ["native", "native_shared"].includes((0, x.sm)(s))) {
            let e
            return (
              i[12] !== s || i[13] !== c || i[14] !== m || i[15] !== y
                ? ((e = (0, l.jsx)(tf, { spaces: y, item: s, navigation: c, inline: !0, children: m })),
                  (i[12] = s),
                  (i[13] = c),
                  (i[14] = m),
                  (i[15] = y),
                  (i[16] = e))
                : (e = i[16]),
              e
            )
          }
          return (
            "libraryPage" in s
              ? (e = s.libraryPage.node.page_metadata?.drive_space_id)
              : "page" in s
                ? (e = s.page.drive_space_id)
                : "searchResult" in s &&
                  ("space_page" === s.searchResult.payload.kind || "space_file" === s.searchResult.payload.kind) &&
                  (e = s.searchResult.payload.space_id),
            i[17] !== s || i[18] !== m || i[19] !== e
              ? ((t = e ? m(null) : (0, l.jsx)(eQ, { item: s, children: m })),
                (i[17] = s),
                (i[18] = m),
                (i[19] = e),
                (i[20] = t))
              : (t = i[20]),
            t
          )
        }
        if ("page" in s || "libraryPage" in s) {
          let e,
            t = "suggested" === f.tab
          return (
            i[21] !== s || i[22] !== u || i[23] !== m || i[24] !== t
              ? ((e = (0, l.jsx)(eM.M, {
                  item: s,
                  column: "source",
                  loadCreatorNameFirst: t,
                  onOpenProfile: u,
                  children: m,
                })),
                (i[21] = s),
                (i[22] = u),
                (i[23] = m),
                (i[24] = t),
                (i[25] = e))
              : (e = i[25]),
            e
          )
        }
        return (
          i[26] !== s || i[27] !== c || i[28] !== m || i[29] !== y
            ? ((e =
                "node" in s && null != s.node.parent_directory_id && ["native", "native_shared"].includes((0, x.sm)(s))
                  ? (0, l.jsx)(tf, { spaces: y, item: s, navigation: c, children: m })
                  : m("\u2014")),
              (i[26] = s),
              (i[27] = c),
              (i[28] = m),
              (i[29] = y),
              (i[30] = e))
            : (e = i[30]),
          e
        )
      }
      return (
        i[31] !== h || i[32] !== c || i[33] !== b
          ? ((a = (0, l.jsx)(eK.Q, { navigation: c, space: b, inline: h })),
            (i[31] = h),
            (i[32] = c),
            (i[33] = b),
            (i[34] = a))
          : (a = i[34]),
        i[35] !== m || i[36] !== a ? ((n = m(a)), (i[35] = m), (i[36] = a), (i[37] = n)) : (n = i[37]),
        n
      )
    }
    function tm(e) {
      let t,
        a,
        n,
        i,
        s = (0, r.c)(76),
        {
          browseLocation: o,
          spaces: d,
          showRowThumbnails: c,
          structuredGridEnabled: u,
          searchFileActions: g,
          observeSearchResult: p,
          onOpenSearchResult: h,
          onOpenSite: m,
          isCurrent: f,
          item: v,
          exportToGoogleDrive: y,
          navigation: b,
          onOpenProfile: _,
          viewMode: x,
          source: w,
          pageTree: S,
          reserveDisclosureSpace: j,
          pinnedPresentation: P,
          reorderAction: A,
        } = e,
        C = void 0 !== c && c
      if ("searchResult" in v) {
        let e, t, a
        s[0] !== p ? ((e = (e) => (null == e ? void 0 : p(e))), (s[0] = p), (s[1] = e)) : (e = s[1])
        let r = C ? "stacked" : "columns"
        return (
          s[2] !== f ||
          s[3] !== v.searchResult ||
          s[4] !== b ||
          s[5] !== h ||
          s[6] !== j ||
          s[7] !== g ||
          s[8] !== w ||
          s[9] !== u ||
          s[10] !== r ||
          s[11] !== x
            ? ((t = (0, l.jsx)(tg, {
                layout: r,
                isCurrent: f,
                navigation: b,
                result: v.searchResult,
                structuredGridEnabled: u,
                viewMode: x,
                source: w,
                reserveDisclosureSpace: j,
                onOpen: h,
                fileActions: g,
              })),
              (s[2] = f),
              (s[3] = v.searchResult),
              (s[4] = b),
              (s[5] = h),
              (s[6] = j),
              (s[7] = g),
              (s[8] = w),
              (s[9] = u),
              (s[10] = r),
              (s[11] = x),
              (s[12] = t))
            : (t = s[12]),
          s[13] !== e || s[14] !== t
            ? ((a = (0, l.jsx)("div", { ref: e, "data-library-item": "", children: t })),
              (s[13] = e),
              (s[14] = t),
              (s[15] = a))
            : (a = s[15]),
          a
        )
      }
      if ("siteProject" in v) {
        let e,
          t,
          a = C ? "stacked" : "columns",
          r = v.siteProject
        return (
          s[16] !== o ? ((e = (0, I.fQ)(o)), (s[16] = o), (s[17] = e)) : (e = s[17]),
          s[18] !== v.siteProject ||
          s[19] !== m ||
          s[20] !== j ||
          s[21] !== w ||
          s[22] !== u ||
          s[23] !== a ||
          s[24] !== e ||
          s[25] !== x
            ? ((t = (0, l.jsx)(e9, {
                layout: a,
                structuredGridEnabled: u,
                project: r,
                onOpenSite: m,
                viewMode: x,
                source: w,
                showSize: e,
                reserveDisclosureSpace: j,
              })),
              (s[18] = v.siteProject),
              (s[19] = m),
              (s[20] = j),
              (s[21] = w),
              (s[22] = u),
              (s[23] = a),
              (s[24] = e),
              (s[25] = x),
              (s[26] = t))
            : (t = s[26]),
          t
        )
      }
      s[27] !== v || s[28] !== d ? ((t = t_(d, v)), (s[27] = v), (s[28] = d), (s[29] = t)) : (t = s[29])
      let E = t,
        k = C && "list" === x && "library:collection:shared-with-me" === o.directoryId
      if (null != S && "list" === x) {
        let e,
          t,
          a,
          r = C ? "stacked" : "columns",
          n = "page" in v ? v.page : v.libraryPage,
          i = void 0 !== w,
          c = "library:collection:shared-with-me" === o.directoryId
        return (
          s[30] !== o ? ((e = (0, I.fQ)(o)), (s[30] = o), (s[31] = e)) : (e = s[31]),
          s[32] !== o ||
          s[33] !== y ||
          s[34] !== b ||
          s[35] !== _ ||
          s[36] !== S.itemsByPageId ||
          s[37] !== E ||
          s[38] !== k ||
          s[39] !== C ||
          s[40] !== w ||
          s[41] !== d
            ? ((t = (e, t) => {
                let a = S.itemsByPageId.get("node" in e ? e.node.id : e.page_id)
                return (0, l.jsx)(tp.M, {
                  exportToGoogleDrive: 0 === t.depth ? y : void 0,
                  navigation: b,
                  showRowThumbnail: C,
                  activityDate: (0, ek.sm)(a),
                  page: null != a && "libraryPage" in a ? a.libraryPage : e,
                  libraryItem: null != a && "page" in a ? a.libraryItem : void 0,
                  parentSpace: E,
                  viewMode: "list",
                  libraryPresentation: !0,
                  browseLocation: o,
                  source:
                    void 0 !== w || k
                      ? (t) =>
                          (0, l.jsx)(th, {
                            catalog: d ?? null,
                            navigation: b,
                            onOpenProfile: _,
                            inline: C,
                            item: a ?? ("node" in e ? { libraryPage: e } : { page: e }),
                            children: t,
                          })
                      : void 0,
                  tree: t,
                })
              }),
              (s[32] = o),
              (s[33] = y),
              (s[34] = b),
              (s[35] = _),
              (s[36] = S.itemsByPageId),
              (s[37] = E),
              (s[38] = k),
              (s[39] = C),
              (s[40] = w),
              (s[41] = d),
              (s[42] = t))
            : (t = s[42]),
          s[43] !== S.expansion ||
          s[44] !== S.knownChildrenByParent ||
          s[45] !== r ||
          s[46] !== n ||
          s[47] !== i ||
          s[48] !== c ||
          s[49] !== e ||
          s[50] !== t
            ? ((a = (0, l.jsx)(eZ.Z, {
                discoverChildren: !0,
                layout: r,
                page: n,
                showSource: i,
                showSharedBy: c,
                showSize: e,
                expansion: S.expansion,
                knownChildrenByParent: S.knownChildrenByParent,
                renderPage: t,
              })),
              (s[43] = S.expansion),
              (s[44] = S.knownChildrenByParent),
              (s[45] = r),
              (s[46] = n),
              (s[47] = i),
              (s[48] = c),
              (s[49] = e),
              (s[50] = t),
              (s[51] = a))
            : (a = s[51]),
          a
        )
      }
      s[52] !== v ? ((a = (0, ek.sm)(v)), (s[52] = v), (s[53] = a)) : (a = s[53])
      let M = "page" in v ? v.page : v.libraryPage,
        T = "page" in v ? v.libraryItem : void 0
      return (
        s[54] !== v || s[55] !== b || s[56] !== _ || s[57] !== k || s[58] !== w || s[59] !== d
          ? ((n =
              w ??
              (k
                ? (e) =>
                    (0, l.jsx)(th, {
                      catalog: d ?? null,
                      item: v,
                      navigation: b,
                      onOpenProfile: _,
                      inline: !0,
                      children: e,
                    })
                : void 0)),
            (s[54] = v),
            (s[55] = b),
            (s[56] = _),
            (s[57] = k),
            (s[58] = w),
            (s[59] = d),
            (s[60] = n))
          : (n = s[60]),
        s[61] !== o ||
        s[62] !== y ||
        s[63] !== b ||
        s[64] !== E ||
        s[65] !== P ||
        s[66] !== A ||
        s[67] !== j ||
        s[68] !== C ||
        s[69] !== u ||
        s[70] !== a ||
        s[71] !== M ||
        s[72] !== T ||
        s[73] !== n ||
        s[74] !== x
          ? ((i = (0, l.jsx)(tp.M, {
              exportToGoogleDrive: y,
              structuredGridEnabled: u,
              navigation: b,
              showRowThumbnail: C,
              activityDate: a,
              page: M,
              libraryItem: T,
              parentSpace: E,
              viewMode: x,
              libraryPresentation: !0,
              pinnedPresentation: P,
              reorderAction: A,
              browseLocation: o,
              source: n,
              reserveDisclosureSpace: j,
            })),
            (s[61] = o),
            (s[62] = y),
            (s[63] = b),
            (s[64] = E),
            (s[65] = P),
            (s[66] = A),
            (s[67] = j),
            (s[68] = C),
            (s[69] = u),
            (s[70] = a),
            (s[71] = M),
            (s[72] = T),
            (s[73] = n),
            (s[74] = x),
            (s[75] = i))
          : (i = s[75]),
        i
      )
    }
    function tf(e) {
      let t,
        a,
        n,
        i,
        s,
        o,
        c,
        u = (0, r.c)(33),
        { item: g, spaces: p, navigation: h, inline: m, children: f } = e,
        v = void 0 === f ? eE() : f,
        y = (0, d.gh)(I.Qy),
        b = g.node.parent_directory_id
      ;(u[0] !== b || u[1] !== y.value.accountId || u[2] !== y.value.userId
        ? ((t = (0, eY.c)(y.value.accountId, y.value.userId, b)),
          (u[0] = b),
          (u[1] = y.value.accountId),
          (u[2] = y.value.userId),
          (u[3] = t))
        : (t = u[3]),
        u[4] !== b || u[5] !== y
          ? ((a = (e) => {
              let { signal: t } = e
              return y
                .get(I.c7)
                .safeGet("/files/library/directories/path", {
                  parameters: { query: { directory_id: b } },
                  isExpectedError: tb,
                  signal: t,
                })
            }),
            (u[4] = b),
            (u[5] = y),
            (u[6] = a))
          : (a = u[6]),
        u[7] !== b || u[8] !== p?.items || u[9] !== p?.items.some
          ? ((n = null != b && p?.items.some(ty) === !0),
            (u[7] = b),
            (u[8] = p?.items),
            (u[9] = p?.items.some),
            (u[10] = n))
          : (n = u[10]),
        u[11] !== t || u[12] !== a || u[13] !== n
          ? ((i = { queryKey: t, queryFn: a, enabled: n, staleTime: 6e4 }),
            (u[11] = t),
            (u[12] = a),
            (u[13] = n),
            (u[14] = i))
          : (i = u[14]))
      let { data: _, isPending: x, isError: w } = (0, eA.I)(i, y.queryClient)
      u[15] !== _ || u[16] !== p?.items || u[17] !== p?.items.find
        ? ((s = p?.items.find(
            (e) => null != e.root_directory_id && _?.items.some((t) => t.id === e.root_directory_id),
          )),
          (u[15] = _),
          (u[16] = p?.items),
          (u[17] = p?.items.find),
          (u[18] = s))
        : (s = u[18])
      let S = s
      if (null == S) {
        let e
        if (!m) {
          let e
          return (u[19] !== v ? ((e = v("\u2014")), (u[19] = v), (u[20] = e)) : (e = u[20]), e)
        }
        if ((x || w) && p?.items.some(tv)) {
          let e
          return (u[21] !== v ? ((e = v(null)), (u[21] = v), (u[22] = e)) : (e = u[22]), e)
        }
        return (
          u[23] !== g || u[24] !== v
            ? ((e = (0, l.jsx)(eQ, { item: g, children: v })), (u[23] = g), (u[24] = v), (u[25] = e))
            : (e = u[25]),
          e
        )
      }
      return (
        u[26] !== m || u[27] !== h || u[28] !== S
          ? ((o = (0, l.jsx)(eK.Q, { navigation: h, space: S, inline: m })),
            (u[26] = m),
            (u[27] = h),
            (u[28] = S),
            (u[29] = o))
          : (o = u[29]),
        u[30] !== v || u[31] !== o ? ((c = v(o)), (u[30] = v), (u[31] = o), (u[32] = c)) : (c = u[32]),
        c
      )
    }
    function tv(e) {
      return null != e.root_directory_id
    }
    function ty(e) {
      return null != e.root_directory_id
    }
    function tb(e) {
      return 403 === e.status || 404 === e.status
    }
    function t_(e, t) {
      return e?.items.find((e) => {
        if ("libraryPage" in t) return t.libraryPage.node.page_metadata?.drive_space_id === e.id
        if ("page" in t) return t.page.drive_space_id === e.id
        if ("node" in t) return null != e.root_directory_id && e.root_directory_id === t.node.parent_directory_id
        if (!("searchResult" in t)) return !1
        let a = t.searchResult.payload
        return ("space_page" === a.kind || "space_file" === a.kind) && a.space_id === e.id
      })
    }
    var tx = a("y67V"),
      tI = a("OOaz"),
      tw = a("GigQ")
    let tS = `${tI.Yu}opened-share-renderability`
    function tj(e, t) {
      if (!("posted_at" in e)) return !0
      let a = e.attachments[0]
      return a?.kind === "prompt_share"
        ? !t && a.prompt_share.content.prompt.trim().length > 0
        : (a?.kind === "prompt" && a.prompt.trim().length > 0 && e.attachments.every((e) => "prompt" === e.kind)) ||
            null != (0, tw.$)(e, tS) ||
            e.attachments.some(tP)
    }
    function tP(e) {
      return "media_generation" === e.kind && "image_gen" === e.generation_type && !0 !== e.output_blocked
    }
    function tA(e, t) {
      if ("posted_at" in e) {
        let a = e.attachments[0]
        return (
          (a?.kind === "prompt_share"
            ? a.prompt_share.content.title
            : e.text?.trim() || (a?.kind === "media_generation" ? a.title?.trim() : null)) ||
          t.formatMessage({ id: "space.openedSharedLinks.untitledPost", defaultMessage: "Untitled shared post" })
        )
      }
      return (
        e.title?.trim() ||
        t.formatMessage({ id: "space.openedSharedLinks.untitledChat", defaultMessage: "Untitled shared chat" })
      )
    }
    var tC = a("XPCU"),
      tE = a("FM08")
    function tk(e) {
      let t,
        a,
        s,
        c,
        u,
        p,
        h,
        m,
        f,
        y,
        b,
        x = (0, r.c)(65),
        {
          layout: w,
          item: S,
          viewMode: j,
          structuredGridEnabled: P,
          reserveDisclosureSpace: A,
          position: k,
          onDelete: M,
        } = e,
        T = void 0 !== P && P,
        O = (0, d.gh)(I.Qy),
        N = (0, g.A)(),
        U = "posted_at" in S
      x[0] !== N || x[1] !== S ? ((t = tA(S, N)), (x[0] = N), (x[1] = S), (x[2] = t)) : (t = x[2])
      let F = t
      x[3] !== U ? ((a = U ? (0, l.jsx)(tt.DIB, {}) : (0, l.jsx)(tt.VhP, {})), (x[3] = U), (x[4] = a)) : (a = x[4])
      let R = a
      x[5] !== U
        ? ((s = U ? (0, l.jsx)(tt.DIB, { className: "size-14" }) : (0, l.jsx)(tt.VhP, { className: "size-14" })),
          (x[5] = U),
          (x[6] = s))
        : (s = x[6])
      let L = s,
        D = U && S.attachments.some(tM),
        G = null
      if (U && !D)
        if (x[7] !== S.attachments) {
          for (let e of S.attachments)
            if (tP(e)) {
              G = (0, tC.I)(e.url)
              break
            }
          ;((x[7] = S.attachments), (x[8] = G))
        } else G = x[8]
      let $ = U
          ? `/s/${encodeURIComponent(S.id)}`
          : `${null == S.workspace_id ? "/share/" : "/share/e/"}${encodeURIComponent(S.id)}`,
        B = S.last_opened_at ?? S.first_opened_at
      x[9] !== B
        ? ((c = null == B ? "\u2014" : (0, l.jsx)(tl.A, { timestamp: B, dateKind: "shared" })), (x[9] = B), (x[10] = c))
        : (c = x[10])
      let z = c
      x[11] !== U || x[12] !== S.id || x[13] !== k || x[14] !== O || x[15] !== j
        ? ((u = (e) => {
            ;(0, E.yy)(O, n.pG, {
              ...(0, _.zH)(O),
              interactionType: e,
              artifactId: S.id,
              entityKind: U ? "received_post" : "received_conversation",
              libraryOrigin: _._0,
              provider: (0, C.Pw)(O.value.directoryId),
              folderKind: "CHATGPT_FILE_LIBRARY_FOLDER_KIND_SHARED_WITH_ME",
              layout: "grid" === j ? "CHATGPT_FILE_LIBRARY_LAYOUT_GRID" : "CHATGPT_FILE_LIBRARY_LAYOUT_LIST",
              position: (0, i.PZ)(k),
            })
          }),
          (x[11] = U),
          (x[12] = S.id),
          (x[13] = k),
          (x[14] = O),
          (x[15] = j),
          (x[16] = u))
        : (u = x[16])
      let V = u
      x[17] !== N || x[18] !== U || x[19] !== S.id || x[20] !== V || x[21] !== M || x[22] !== O || x[23] !== F
        ? ((p = (e) => {
            let { className: t } = e
            return (0, l.jsx)(v.$, {
              className: t,
              "aria-label": N.formatMessage(
                { id: "space.openedSharedLinks.delete", defaultMessage: "Delete {title} from Shared with you" },
                { title: F },
              ),
              color: "ghostDanger",
              onClick: () => {
                ;(V("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_INITIATED"),
                  (0, I.ZT)(O, `${U ? "post" : "conversation"}:${S.id}`, M)
                    .then(() => {
                      V("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_SUCCEEDED")
                    })
                    .catch(() => {
                      ;(V("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_FAILED"),
                        O.get(ta.Id).danger(
                          N.formatMessage({
                            id: "space.openedSharedLinks.deleteFailed",
                            defaultMessage: "Unable to delete this shared item",
                          }),
                          { errorAnalytics: { toastId: "space.openedSharedLinks.deleteFailed" } },
                        ))
                    }))
              },
              size: "actionSm",
              uniform: !0,
              children: (0, l.jsx)(tt.cSG, {}),
            })
          }),
          (x[17] = N),
          (x[18] = U),
          (x[19] = S.id),
          (x[20] = V),
          (x[21] = M),
          (x[22] = O),
          (x[23] = F),
          (x[24] = p))
        : (p = x[24])
      let q = p
      if ("grid" === j) {
        let e, t, a, r
        return (
          x[25] !== V
            ? ((e = () => V("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_OPENED")), (x[25] = V), (x[26] = e))
            : (e = x[26]),
          x[27] !== R || x[28] !== G || x[29] !== T || x[30] !== F
            ? ((t =
                T && null != G
                  ? void 0
                  : (0, l.jsxs)(l.Fragment, {
                      children: [!T && R, (0, l.jsx)("span", { className: "truncate", children: F })],
                    })),
              (x[27] = R),
              (x[28] = G),
              (x[29] = T),
              (x[30] = F),
              (x[31] = t))
            : (t = x[31]),
          x[32] !== L || x[33] !== G || x[34] !== T
            ? ((a = (0, l.jsx)("span", {
                className: "relative min-h-0 w-full flex-1",
                children:
                  null == G
                    ? (0, l.jsx)(ei.Qe, { artwork: L, structuredGridEnabled: T })
                    : (0, l.jsx)(tE.j, {
                        className: (0, o.A)(
                          "absolute inset-0",
                          T
                            ? "m-auto h-auto max-h-full w-auto max-w-full rounded-xl object-contain"
                            : "size-full object-cover",
                        ),
                        src: G,
                        fallback: (0, l.jsx)(ei.Qe, { artwork: L, structuredGridEnabled: T }),
                      }),
              })),
              (x[32] = L),
              (x[33] = G),
              (x[34] = T),
              (x[35] = a))
            : (a = x[35]),
          x[36] !== q || x[37] !== $ || x[38] !== T || x[39] !== a || x[40] !== e || x[41] !== t || x[42] !== F
            ? ((r = (0, l.jsx)(ei.cu, {
                structuredGridEnabled: T,
                name: F,
                href: $,
                onActivate: e,
                actions: q,
                square: !0,
                documentHeader: t,
                children: a,
              })),
              (x[36] = q),
              (x[37] = $),
              (x[38] = T),
              (x[39] = a),
              (x[40] = e),
              (x[41] = t),
              (x[42] = F),
              (x[43] = r))
            : (r = x[43]),
          r
        )
      }
      let Q = !U
      return (
        x[44] !== R || x[45] !== G
          ? ((h = null == G ? R : (0, l.jsx)(tE.j, { className: "size-full object-cover", src: G, fallback: R })),
            (x[44] = R),
            (x[45] = G),
            (x[46] = h))
          : (h = x[46]),
        x[47] !== S.shared_by || x[48] !== w
          ? ((m = "stacked" === w ? (0, l.jsx)(eM.M, { sharedByName: S.shared_by }) : S.shared_by?.trim() || "\u2014"),
            (x[47] = S.shared_by),
            (x[48] = w),
            (x[49] = m))
          : (m = x[49]),
        x[50] !== V
          ? ((f = () => V("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_OPENED")), (x[50] = V), (x[51] = f))
          : (f = x[51]),
        x[52] !== q ? ((y = [{ key: "delete", render: q }]), (x[52] = q), (x[53] = y)) : (y = x[53]),
        x[54] !== z ||
        x[55] !== $ ||
        x[56] !== w ||
        x[57] !== A ||
        x[58] !== m ||
        x[59] !== f ||
        x[60] !== y ||
        x[61] !== Q ||
        x[62] !== h ||
        x[63] !== F
          ? ((b = (0, l.jsx)(ei.kt, {
              layout: w,
              activateLinkFromNameCell: Q,
              reserveDisclosureSpace: A,
              name: F,
              artwork: h,
              activity: z,
              sharedBy: m,
              href: $,
              onActivate: f,
              actions: y,
            })),
            (x[54] = z),
            (x[55] = $),
            (x[56] = w),
            (x[57] = A),
            (x[58] = m),
            (x[59] = f),
            (x[60] = y),
            (x[61] = Q),
            (x[62] = h),
            (x[63] = F),
            (x[64] = b))
          : (b = x[64]),
        b
      )
    }
    function tM(e) {
      return "prompt_share" === e.kind || "message_slice" === e.kind
    }
    function tT(e) {
      let t,
        a,
        n,
        i,
        s = (0, r.c)(11),
        { paint: o, error: d, hasCachedItems: c, isFetching: u, isNextPageError: g, onRetry: h } = e
      if (!d) return null
      s[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, l.jsx)(p.A, {
            id: "space.openedSharedLinks.error",
            defaultMessage: "Unable to load opened links",
          })),
          (s[0] = t))
        : (t = s[0])
      let m = t
      if (g) {
        let e
        ;(s[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(p.A, {
              id: "space.openedSharedLinks.loadMoreError",
              defaultMessage: "Unable to load more opened links",
            })),
            (s[1] = e))
          : (e = s[1]),
          (m = e))
      } else if (c) {
        let e
        ;(s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(p.A, {
              id: "space.openedSharedLinks.refreshError",
              defaultMessage: "Unable to refresh opened links",
            })),
            (s[2] = e))
          : (e = s[2]),
          (m = e))
      }
      return (
        s[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, l.jsx)(p.A, { id: "libraryNext.results.retry", defaultMessage: "Try again" })), (s[3] = a))
          : (a = s[3]),
        s[4] !== u || s[5] !== h
          ? ((n = (0, l.jsx)(v.$, { color: "ghost", disabled: u, onClick: h, children: a })),
            (s[4] = u),
            (s[5] = h),
            (s[6] = n))
          : (n = s[6]),
        s[7] !== m || s[8] !== o || s[9] !== n
          ? ((i = (0, l.jsxs)("div", {
              className: "flex items-center gap-3 pb-4 text-secondary",
              role: "alert",
              children: [o, m, n],
            })),
            (s[7] = m),
            (s[8] = o),
            (s[9] = n),
            (s[10] = i))
          : (i = s[10]),
        i
      )
    }
    function tO(e) {
      let t,
        a,
        n = (0, r.c)(4),
        { hasNextPage: i, isFetchingNextPage: s, onLoadNextPage: o } = e
      return i
        ? (n[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, l.jsx)(p.A, { id: "space.openedSharedLinks.loadMore", defaultMessage: "Load more" })),
              (n[0] = t))
            : (t = n[0]),
          n[1] !== s || n[2] !== o
            ? ((a = (0, l.jsx)("div", {
                className: "flex justify-center pb-4",
                children: (0, l.jsx)(v.$, { color: "ghost", disabled: s, loading: s, onClick: o, children: t }),
              })),
              (n[1] = s),
              (n[2] = o),
              (n[3] = a))
            : (a = n[3]),
          a)
        : null
    }
    var tN = a("aV3j"),
      tU = a("NRh3"),
      tF = a("IFrF"),
      tR = a("atiu"),
      tL = a("T1PX"),
      tD = a("Qgfj"),
      tG = a("X3K1"),
      t$ = a("vHxi"),
      tB = a("nndI"),
      tz = a("SCmN"),
      tV = a("WP5H"),
      tq = a("I8SU"),
      tQ = a("CZSB"),
      tH = a("e7M0"),
      tW = a("i1Zq"),
      tY = a("JkZJ")
    function tK(e) {
      let t,
        a,
        n,
        i,
        s,
        o,
        c,
        u,
        p,
        h,
        m,
        f,
        v = (0, r.c)(43),
        { suggestions: y, showDivider: b, visibleContentMarker: _, navigation: x, isCurrent: I } = e,
        w = void 0 !== b && b,
        S = (0, d.gh)(X.u),
        j = (0, g.A)(),
        P = (0, eu.Zp)(),
        A = (0, d.Ul)(tz.jm),
        C = (0, d.Ul)(tq.cJ),
        k = (0, d.Ul)(tB.ax),
        M = null == A ? void 0 : k[A.key],
        T = (0, d._U)(tz.av, A?.key ?? ""),
        O = (0, d._U)(tz.Dj, A?.key ?? ""),
        N = (0, d.Ul)(ee.px),
        U = (0, d.Ul)(N ? null : q.Gd)
      v[0] !== O || v[1] !== N || v[2] !== y || v[3] !== M
        ? ((t = y.includes("welcome")),
          (n = !N && t && "unknown" === O),
          (s = (i = !N && t && "retryable" === O) || (t && null != M && "available" === O)),
          (a = y.filter((e) => "welcome" !== e || s)),
          (v[0] = O),
          (v[1] = N),
          (v[2] = y),
          (v[3] = M),
          (v[4] = t),
          (v[5] = a),
          (v[6] = n),
          (v[7] = i),
          (v[8] = s))
        : ((t = v[4]), (a = v[5]), (n = v[6]), (i = v[7]), (s = v[8]))
      let F = a
      v[9] !== I || v[10] !== S
        ? ((o = () => S.get(q.Wz) && I?.() !== !1), (v[9] = I), (v[10] = S), (v[11] = o))
        : (o = v[11])
      let R = o
      return (
        v[12] !== t ? ((c = t ? (0, l.jsx)(tZ, {}) : null), (v[12] = t), (v[13] = c)) : (c = v[13]),
        v[14] !== N ||
        v[15] !== C ||
        v[16] !== A ||
        v[17] !== j ||
        v[18] !== R ||
        v[19] !== P ||
        v[20] !== x?.onOpenPage ||
        v[21] !== T ||
        v[22] !== S ||
        v[23] !== n ||
        v[24] !== i ||
        v[25] !== s
          ? ((u =
              !N &&
              (n || s) &&
              (0, l.jsx)("div", {
                className: n ? "invisible" : void 0,
                inert: n,
                "aria-hidden": n || void 0,
                children: (0, l.jsx)(tJ, {
                  opening: !n && T,
                  creating: !1,
                  failed: i && !T,
                  highlighted: null != C,
                  onOpen: T
                    ? void 0
                    : () => {
                        if (null == A || S.get(tz.jm)?.key !== A.key || !R()) return
                        let e = S.get(tB.ax)[A.key]
                        ;(null != e || "retryable" === S.get(tz.Dj, A.key)) &&
                          ((0, E.yy)(S, Q.CodexSpacesOnboarding, {
                            action: Q.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_ITEM_SELECTED,
                            item: Q.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
                            pageId: e,
                          }),
                          (0, t$.a)(S, P, j, { pageId: e ?? null, onOpenPage: x?.onOpenPage, isCurrent: R }))
                      },
                }),
              })),
            (v[14] = N),
            (v[15] = C),
            (v[16] = A),
            (v[17] = j),
            (v[18] = R),
            (v[19] = P),
            (v[20] = x?.onOpenPage),
            (v[21] = T),
            (v[22] = S),
            (v[23] = n),
            (v[24] = i),
            (v[25] = s),
            (v[26] = u))
          : (u = v[26]),
        v[27] !== R || v[28] !== x?.onOpenPage || v[29] !== U
          ? ((p = U?.map((e) =>
              (0, l.jsx)(tQ.s, { suggestion: e, surface: "onboarding", onOpenPage: x?.onOpenPage, isCurrent: R }, e.id),
            )),
            (v[27] = R),
            (v[28] = x?.onOpenPage),
            (v[29] = U),
            (v[30] = p))
          : (p = v[30]),
        v[31] !== u || v[32] !== p || v[33] !== _ || v[34] !== F
          ? ((h = (0, l.jsxs)(e_, {
              suggestions: F,
              visibleContentMarker: _,
              showRecommendations: !0,
              children: [u, p],
            })),
            (v[31] = u),
            (v[32] = p),
            (v[33] = _),
            (v[34] = F),
            (v[35] = h))
          : (h = v[35]),
        v[36] !== N || v[37] !== w
          ? ((m = N && w && (0, l.jsx)("div", { className: "mt-8 border-t border-subtle", "aria-hidden": "true" })),
            (v[36] = N),
            (v[37] = w),
            (v[38] = m))
          : (m = v[38]),
        v[39] !== c || v[40] !== h || v[41] !== m
          ? ((f = (0, l.jsxs)(l.Fragment, { children: [c, h, m] })), (v[39] = c), (v[40] = h), (v[41] = m), (v[42] = f))
          : (f = v[42]),
        f
      )
    }
    function tZ() {
      let e,
        t,
        a,
        l = (0, r.c)(15),
        n = (0, d.gh)(X.u),
        i = (0, d.Ul)(tz.jm),
        s = (0, d._U)(tW.J, i?.key ?? ""),
        o = (0, d._U)(tz.av, i?.key ?? ""),
        c = (0, d._U)(tz.Dj, i?.key ?? ""),
        g = (0, d.Ul)(tB.ax),
        p = null == i ? null : g[i.key]
      l[0] !== n
        ? ((e = () => {
            ;(0, tH.provisionSpaceWelcomePage)(n)
          }),
          (l[0] = n),
          (l[1] = e))
        : (e = l[1])
      let h = (0, u.useEffectEvent)(e)
      l[2] !== c || l[3] !== s || l[4] !== i?.key || l[5] !== o || l[6] !== p || l[7] !== h
        ? ((t = () => {
            i?.key != null && (null == p || "unknown" === c) && ("idle" !== s || o || h())
          }),
          (l[2] = c),
          (l[3] = s),
          (l[4] = i?.key),
          (l[5] = o),
          (l[6] = p),
          (l[7] = h),
          (l[8] = t))
        : (t = l[8])
      let m = i?.key
      return (
        l[9] !== c || l[10] !== s || l[11] !== o || l[12] !== p || l[13] !== m
          ? ((a = [m, p, s, o, c]), (l[9] = c), (l[10] = s), (l[11] = o), (l[12] = p), (l[13] = m), (l[14] = a))
          : (a = l[14]),
        (0, u.useEffect)(t, a),
        null
      )
    }
    function tJ(e) {
      let t,
        a,
        n,
        i,
        s,
        o,
        d,
        c,
        u,
        h,
        m,
        f,
        v,
        y,
        b,
        _,
        x,
        I = (0, r.c)(53),
        { opening: w, creating: S, failed: j, highlighted: P, onOpen: A, actions: C } = e,
        E = (0, g.A)()
      if (I[0] !== C || I[1] !== S || I[2] !== j || I[3] !== P || I[4] !== E || I[5] !== A || I[6] !== w) {
        let e = (0, tY.gt)(E),
          r = !j && (S || w),
          g = null
        if (j) {
          let e
          ;(I[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)("div", {
                className: "flex w-full justify-center text-secondary",
                role: "status",
                children: (0, l.jsx)(p.A, { id: "space.welcome.retry", defaultMessage: "Retry" }),
              })),
              (I[21] = e))
            : (e = I[21]),
            (g = e))
        } else if (r) {
          let e, t, a
          ;(I[22] !== S
            ? ((e = (0, l.jsx)("span", {
                className: "sr-only",
                children: S
                  ? (0, l.jsx)(p.A, { id: "space.welcome.creating", defaultMessage: "Creating your Page\u2026" })
                  : (0, l.jsx)(p.A, { id: "space.welcome.opening", defaultMessage: "Opening\u2026" }),
              })),
              (I[22] = S),
              (I[23] = e))
            : (e = I[23]),
            I[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, l.jsx)(tG.P, { lines: 1 })), (I[24] = t))
              : (t = I[24]),
            I[25] !== e
              ? ((a = (0, l.jsxs)("div", {
                  className: "flex min-h-lh w-full items-center",
                  role: "status",
                  children: [e, t],
                })),
                (I[25] = e),
                (I[26] = a))
              : (a = I[26]),
            (g = a))
        }
        ;((a = ep.Z),
          I[27] !== E ? ((m = E.formatMessage(t0.welcome)), (I[27] = E), (I[28] = m)) : (m = I[28]),
          I[29] !== g ? ((f = g ?? (0, l.jsx)(p.A, { ...t0.welcome })), (I[29] = g), (I[30] = f)) : (f = I[30]),
          I[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = (0, l.jsx)(p.A, { id: "space.gettingStartedPages.startHere", defaultMessage: "Start here" })),
              (I[31] = v))
            : (v = I[31]),
          (y = P),
          (i = r),
          (s = A),
          (o = C),
          (t = eg.D),
          (u = "space-welcome-template-preview"),
          (h = tV.x),
          I[32] !== E ? ((n = E.formatMessage(t0.welcome)), (I[32] = E), (I[33] = n)) : (n = I[33]),
          (d = e.join("\n\n")),
          (c = e.map(tX)),
          (I[0] = C),
          (I[1] = S),
          (I[2] = j),
          (I[3] = P),
          (I[4] = E),
          (I[5] = A),
          (I[6] = w),
          (I[7] = t),
          (I[8] = a),
          (I[9] = n),
          (I[10] = i),
          (I[11] = s),
          (I[12] = o),
          (I[13] = d),
          (I[14] = c),
          (I[15] = u),
          (I[16] = h),
          (I[17] = m),
          (I[18] = f),
          (I[19] = v),
          (I[20] = y))
      } else
        ((t = I[7]),
          (a = I[8]),
          (n = I[9]),
          (i = I[10]),
          (s = I[11]),
          (o = I[12]),
          (d = I[13]),
          (c = I[14]),
          (u = I[15]),
          (h = I[16]),
          (m = I[17]),
          (f = I[18]),
          (v = I[19]),
          (y = I[20]))
      return (
        I[34] !== n || I[35] !== d || I[36] !== c
          ? ((b = { title: n, markdown: d, units: c }), (I[34] = n), (I[35] = d), (I[36] = c), (I[37] = b))
          : (b = I[37]),
        I[38] !== t || I[39] !== b || I[40] !== u || I[41] !== h
          ? ((_ = (0, l.jsx)(t, { pageId: u, symbol: h, document: b })),
            (I[38] = t),
            (I[39] = b),
            (I[40] = u),
            (I[41] = h),
            (I[42] = _))
          : (_ = I[42]),
        I[43] !== a ||
        I[44] !== i ||
        I[45] !== s ||
        I[46] !== o ||
        I[47] !== _ ||
        I[48] !== m ||
        I[49] !== f ||
        I[50] !== v ||
        I[51] !== y
          ? ((x = (0, l.jsx)(a, {
              title: m,
              titleContent: f,
              subtitle: v,
              highlighted: y,
              disabled: i,
              onOpen: s,
              actions: o,
              preview: _,
            })),
            (I[43] = a),
            (I[44] = i),
            (I[45] = s),
            (I[46] = o),
            (I[47] = _),
            (I[48] = m),
            (I[49] = f),
            (I[50] = v),
            (I[51] = y),
            (I[52] = x))
          : (x = I[52]),
        x
      )
    }
    function tX(e) {
      return { kind: "markdown", markdown: e }
    }
    let t0 = (0, tD.YK)({ welcome: { id: "space.gettingStartedPages.title", defaultMessage: "Your guide to pages" } })
    var t1 = a("AJdp")
    function t2(e) {
      let t,
        a,
        n,
        i = (0, r.c)(10),
        { pins: s } = e,
        { pages: o, pending: u, failed: g } = s,
        h = (0, d.gh)(X.u)
      return (
        i[0] !== o || i[1] !== u
          ? ((t =
              u && !o.length
                ? (0, l.jsx)("div", {
                    role: "status",
                    className: "text-secondary",
                    children: (0, l.jsx)(p.A, {
                      id: "space.home.loadingPinnedPages",
                      defaultMessage: "Loading pinned pages\u2026",
                    }),
                  })
                : null),
            (i[0] = o),
            (i[1] = u),
            (i[2] = t))
          : (t = i[2]),
        i[3] !== g || i[4] !== u || i[5] !== h
          ? ((a = g.length
              ? (0, l.jsxs)("div", {
                  role: "status",
                  className: "flex items-center gap-3 text-secondary",
                  children: [
                    (0, l.jsx)(p.A, {
                      id: "space.home.pinnedLoadFailed",
                      defaultMessage: "Some pinned pages could not be loaded",
                    }),
                    (0, l.jsx)(v.$, {
                      color: "ghost",
                      disabled: u,
                      onClick: () => {
                        ;(0, c.Ay)(g, (e) => h.get(z.spacePageAncestryQuery$, e).refetch(), { concurrency: 4 })
                      },
                      children: (0, l.jsx)(p.A, { id: "libraryNext.results.retry", defaultMessage: "Try again" }),
                    }),
                  ],
                })
              : null),
            (i[3] = g),
            (i[4] = u),
            (i[5] = h),
            (i[6] = a))
          : (a = i[6]),
        i[7] !== t || i[8] !== a
          ? ((n = (0, l.jsxs)(l.Fragment, { children: [t, a] })), (i[7] = t), (i[8] = a), (i[9] = n))
          : (n = i[9]),
        n
      )
    }
    function t3(e) {
      let t,
        a,
        n,
        i,
        s,
        o,
        d,
        c = (0, r.c)(29),
        { pins: g, sites: h, sitePagination: m, renderContentItem: f, animate: v, isCurrent: y } = e,
        b = (0, u.useId)()
      if (
        (c[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, l.jsx)(p.A, { id: "space.home.pinnedHeading", defaultMessage: "Pinned" })), (c[0] = t))
          : (t = c[0]),
        c[1] !== b
          ? ((a = (0, l.jsx)("h2", { id: b, className: "sr-only", children: t })), (c[1] = b), (c[2] = a))
          : (a = c[2]),
        c[3] !== g.pages || c[4] !== f || c[5] !== h)
      ) {
        let e, t, a
        ;(c[7] !== f
          ? ((e = (e) => ({
              id: e.page_id,
              content: (0, l.jsx)(t1.N, { page: e, children: (t) => f({ page: e }, "grid", void 0, t) }),
            })),
            (c[7] = f),
            (c[8] = e))
          : (e = c[8]),
          c[9] !== h ? ((t = h ?? []), (c[9] = h), (c[10] = t)) : (t = c[10]),
          c[11] !== f
            ? ((a = (e) => ({ id: `site:${e.id}`, content: f({ siteProject: e }, "grid") })), (c[11] = f), (c[12] = a))
            : (a = c[12]),
          (n = [...g.pages.map(e), ...t.map(a)]),
          (c[3] = g.pages),
          (c[4] = f),
          (c[5] = h),
          (c[6] = n))
      } else n = c[6]
      return (
        c[13] !== v || c[14] !== n
          ? ((i = (0, l.jsx)(es.bg, { animate: v, items: n })), (c[13] = v), (c[14] = n), (c[15] = i))
          : (i = c[15]),
        c[16] !== y || c[17] !== g.pages || c[18] !== f || c[19] !== i
          ? ((s = (0, l.jsx)(t1.w, { pages: g.pages, renderContentItem: f, isCurrent: y, children: i })),
            (c[16] = y),
            (c[17] = g.pages),
            (c[18] = f),
            (c[19] = i),
            (c[20] = s))
          : (s = c[20]),
        c[21] !== g ? ((o = (0, l.jsx)(t2, { pins: g })), (c[21] = g), (c[22] = o)) : (o = c[22]),
        c[23] !== b || c[24] !== m || c[25] !== a || c[26] !== s || c[27] !== o
          ? ((d = (0, l.jsxs)("section", {
              className: "flex flex-col gap-4",
              "aria-labelledby": b,
              children: [a, s, o, m],
            })),
            (c[23] = b),
            (c[24] = m),
            (c[25] = a),
            (c[26] = s),
            (c[27] = o),
            (c[28] = d))
          : (d = c[28]),
        d
      )
    }
    var t4 = a("suct"),
      t6 = a("K4Cx"),
      t5 = a("V8uZ")
    function t8(e) {
      let t,
        a,
        n,
        i,
        s = (0, r.c)(11),
        { children: o, animate: d } = e
      if (!d) {
        let e
        return (
          s[0] !== o
            ? ((e = null == o ? null : (0, l.jsx)("div", { className: "pt-4 pb-8 empty:hidden", children: o })),
              (s[0] = o),
              (s[1] = e))
            : (e = s[1]),
          e
        )
      }
      let c = null == o ? "0fr" : "1fr"
      return (
        s[2] !== c ? ((t = { gridTemplateRows: c }), (s[2] = c), (s[3] = t)) : (t = s[3]),
        s[4] !== o
          ? ((a = null == o ? null : (0, l.jsx)(t7, { children: o }, o.key)), (s[4] = o), (s[5] = a))
          : (a = s[5]),
        s[6] !== a
          ? ((n = (0, l.jsx)("div", {
              className: "min-h-0 overflow-y-clip",
              children: (0, l.jsx)(t4.N, { initial: !1, mode: "wait", children: a }),
            })),
            (s[6] = a),
            (s[7] = n))
          : (n = s[7]),
        s[8] !== t || s[9] !== n
          ? ((i = (0, l.jsx)("div", {
              className: "grid transition-[grid-template-rows] duration-basic ease-enter-snappy",
              style: t,
              children: n,
            })),
            (s[8] = t),
            (s[9] = n),
            (s[10] = i))
          : (i = s[10]),
        i
      )
    }
    function t7(e) {
      let t,
        a,
        n,
        i,
        s,
        o = (0, r.c)(8),
        { children: d } = e,
        c = (0, W.tF)(),
        u = !c,
        g = !c
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = { opacity: 0 }),
            (a = { opacity: 1 }),
            (n = { opacity: 0 }),
            (i = { duration: 0.15, ease: t5.Wu }),
            (o[0] = t),
            (o[1] = a),
            (o[2] = n),
            (o[3] = i))
          : ((t = o[0]), (a = o[1]), (n = o[2]), (i = o[3])),
        o[4] !== d || o[5] !== u || o[6] !== g
          ? ((s = (0, l.jsx)(t6.P.div, {
              className: "pt-4 pb-8 empty:hidden",
              "aria-hidden": u,
              inert: g,
              initial: t,
              animate: a,
              exit: n,
              transition: i,
              children: d,
            })),
            (o[4] = d),
            (o[5] = u),
            (o[6] = g),
            (o[7] = s))
          : (s = o[7]),
        s
      )
    }
    function t9(e) {
      let t,
        a,
        n,
        i,
        s,
        o = (0, r.c)(32),
        {
          trackHomeClick: c,
          navigation: u,
          pathname: g,
          isCurrent: p,
          renderContentItem: h,
          hiddenPinnedPageIds$: m,
          showPinnedCards: f,
          showGettingStartedDivider: v,
          pinnedSites: y,
          sitePinsError: b,
          sitePinsHaveNextPage: _,
          sitePagination: x,
        } = e,
        I = void 0 !== c && c,
        w = void 0 === f || f,
        S = void 0 !== v && v,
        j = void 0 !== b && b,
        P = (0, d.Ul)(tz.jm),
        A = (0, d.Ul)(q.Wz),
        C = (0, d.Ul)(q.aQ),
        E = (0, d.Ul)(w ? tN.V : null),
        k = (0, d.Ul)(w ? m : null)
      o[0] !== E || o[1] !== k
        ? ((t = null == E || null == k ? E : { ...E, pages: E.pages.filter((e) => !k.has(e.page_id)) }),
          (o[0] = E),
          (o[1] = k),
          (o[2] = t))
        : (t = o[2])
      let M = t,
        T = (0, d.Ul)(ee.vy),
        O = (0, tL.I)(),
        N = T && !O
      o[3] !== I ? ((a = I && (0, l.jsx)(D.k, { milestone: "visible" })), (o[3] = I), (o[4] = a)) : (a = o[4])
      let U = a,
        F = (y?.length ?? 0) > 0 || j || (void 0 !== _ && _),
        R = null
      if (A) {
        let e
        ;(o[5] !== p || o[6] !== u || o[7] !== S || o[8] !== C || o[9] !== U
          ? ((e = (0, l.jsx)(
              tK,
              { visibleContentMarker: U, suggestions: C, showDivider: S, navigation: u, isCurrent: p },
              "getting-started",
            )),
            (o[5] = p),
            (o[6] = u),
            (o[7] = S),
            (o[8] = C),
            (o[9] = U),
            (o[10] = e))
          : (e = o[10]),
          (R = e))
      } else if (null != M && (M.pages.length > 0 || M.pending || M.failed.length > 0 || F)) {
        let e
        ;(o[11] !== N || o[12] !== p || o[13] !== y || o[14] !== M || o[15] !== h || o[16] !== x
          ? ((e = (0, l.jsx)(
              t3,
              { pins: M, sites: y, sitePagination: x, animate: N, isCurrent: p, renderContentItem: h },
              "pinned",
            )),
            (o[11] = N),
            (o[12] = p),
            (o[13] = y),
            (o[14] = M),
            (o[15] = h),
            (o[16] = x),
            (o[17] = e))
          : (e = o[17]),
          (R = e))
      }
      let L = !A && null != R && (!!M?.pages.length || !!y?.length) && U
      o[18] !== p || o[19] !== A || o[20] !== g || o[21] !== M
        ? ((n = !A && null != M && p?.() !== !1 && (0, l.jsx)(ae, { pins: M, pathname: g })),
          (o[18] = p),
          (o[19] = A),
          (o[20] = g),
          (o[21] = M),
          (o[22] = n))
        : (n = o[22])
      let G = P?.key
      o[23] !== N || o[24] !== R || o[25] !== G
        ? ((i = (0, l.jsx)(t8, { animate: N, children: R }, G)), (o[23] = N), (o[24] = R), (o[25] = G), (o[26] = i))
        : (i = o[26])
      let $ = A && j ? x : null
      return (
        o[27] !== i || o[28] !== $ || o[29] !== L || o[30] !== n
          ? ((s = (0, l.jsxs)(l.Fragment, { children: [L, n, i, $] })),
            (o[27] = i),
            (o[28] = $),
            (o[29] = L),
            (o[30] = n),
            (o[31] = s))
          : (s = o[31]),
        s
      )
    }
    function ae(e) {
      let t,
        a = (0, r.c)(4),
        { pins: n, pathname: i } = e,
        { isPending: s, isFetching: o, isError: c } = (0, d.Ul)(B.IO),
        u = !s && !o && !n.pending,
        g = !o && (c || n.failed.length > 0)
      return (
        a[0] !== i || a[1] !== u || a[2] !== g
          ? ((t = (0, l.jsx)(N.N, { pathname: i, section: "pinned", ready: u, failed: g })),
            (a[0] = i),
            (a[1] = u),
            (a[2] = g),
            (a[3] = t))
          : (t = a[3]),
        t
      )
    }
    function at(e) {
      let t,
        a,
        T,
        V,
        Q,
        H,
        W,
        Y,
        K,
        Z,
        J,
        X,
        ee,
        et,
        ea,
        el,
        er,
        en,
        ei,
        es,
        eo,
        ed,
        ec,
        eu,
        eg,
        ep,
        eh,
        em,
        ef,
        ev,
        ey,
        eb,
        ex,
        eI,
        ew,
        eS,
        eA,
        eC,
        eE = (0, r.c)(292),
        {
          collectionHref: ek,
          trackHomeClick: eM,
          collectionRows: eT,
          structuredGridEnabled: eO,
          onOpenItem: eN,
          onOpenProfile: eU,
          searchFileActions: eF,
          navigation: eR,
          pathname: eL,
          isCurrent: eD,
        } = e,
        eG = void 0 !== eM && eM,
        e$ = void 0 !== eT && eT,
        eB = void 0 !== eO && eO,
        ez = (0, d.gh)(I.Qy),
        eV = (0, d.gh)(I.oD),
        eq = (0, d.Ul)(R.dy),
        eQ = (0, u.useRef)(null),
        eH = eG ? ez.get(L.a)?.startRender() : void 0,
        eW = (0, d.Ul)((!!eB || !!e$) && w.sd),
        eY = eB && eW,
        eK = (0, k.Zj)(
          eY &&
            e$ &&
            ("all" === ez.value.tab || "suggested" === ez.value.tab) &&
            !ez.value.search &&
            1 === ez.value.categories.length &&
            "images" === ez.value.categories[0] &&
            "2869403289",
        )
          ? "image-masonry"
          : "uniform",
        eZ = e$ && eW,
        eJ = (0, g.A)(),
        { items: eX, pending: e0, fetching: e1, failedPageIds: e2 } = (0, d.Ul)(tx.Uk),
        {
          data: e3,
          dataUpdatedAt: e4,
          hasNextPage: e6,
          isError: e5,
          isPending: e8,
          isFetching: e7,
          isPlaceholderData: e9,
        } = (0, d.Ul)(I.i3)
      eE[0] !== ez
        ? ((t =
            "images" === ez.value.tab &&
            1 === ez.value.sources.length &&
            "generated" === ez.value.sources[0] &&
            0 === ez.value.categories.length &&
            !ez.value.search &&
            null == ez.value.directoryId &&
            !ez.value.deleted &&
            (0, R.ao)(ez)),
          (eE[0] = ez),
          (eE[1] = t))
        : (t = eE[1])
      let te = t
      ;(eE[2] !== te || eE[3] !== eq
        ? ((a = () => {
            if (null != eq && te && eQ.current?.parentElement != null) return (0, R.jb)(eq, eQ.current.parentElement)
          }),
          (eE[2] = te),
          (eE[3] = eq),
          (eE[4] = a))
        : (a = eE[4]),
        eE[5] !== te || eE[6] !== eq || eE[7] !== ez
          ? ((T = [ez, eq, te]), (eE[5] = te), (eE[6] = eq), (eE[7] = ez), (eE[8] = T))
          : (T = eE[8]),
        (0, u.useEffect)(a, T),
        eE[9] !== e6 ||
        eE[10] !== e3 ||
        eE[11] !== te ||
        eE[12] !== eq ||
        eE[13] !== e5 ||
        eE[14] !== e7 ||
        eE[15] !== e8 ||
        eE[16] !== eX?.length
          ? ((V = () => {
              null != eq &&
                te &&
                !e8 &&
                (e5 && !eX?.length
                  ? e7 || eq.finish("listing_error")
                  : null == e3 || e7 || e6 || eX?.length !== 0 || eq.finish("empty"))
            }),
            (eE[9] = e6),
            (eE[10] = e3),
            (eE[11] = te),
            (eE[12] = eq),
            (eE[13] = e5),
            (eE[14] = e7),
            (eE[15] = e8),
            (eE[16] = eX?.length),
            (eE[17] = V))
          : (V = eE[17]),
        eE[18] !== e6 ||
        eE[19] !== e3 ||
        eE[20] !== te ||
        eE[21] !== eq ||
        eE[22] !== e5 ||
        eE[23] !== e7 ||
        eE[24] !== e8 ||
        eE[25] !== eX ||
        eE[26] !== ez
          ? ((Q = [ez, eq, te, e8, e5, e7, e6, e3, eX]),
            (eE[18] = e6),
            (eE[19] = e3),
            (eE[20] = te),
            (eE[21] = eq),
            (eE[22] = e5),
            (eE[23] = e7),
            (eE[24] = e8),
            (eE[25] = eX),
            (eE[26] = ez),
            (eE[27] = Q))
          : (Q = eE[27]),
        (0, u.useEffect)(V, Q))
      let tt = (0, d.Ul)(tF.a),
        ta = (0, d.Ul)(I.sp),
        tl = (0, d.Ul)(I.gZ),
        tr = (0, d.Ul)(eP.i),
        tn = (0, d.Ul)(tx.$q),
        ti = (0, d.Ul)(tx.o9),
        ts = (0, d.Ul)(tx.zl),
        to = (0, d.Ul)(I.oW),
        td = (0, d.Ul)(I.rk),
        tc = (0, d.Ul)(I.YH),
        { visibleItems: tu, pageTree: tg, reserveDisclosureSpace: tp } = (0, d.Ul)(tx.iF),
        { accountId: tf, userId: tv } = (0, m.As)(),
        { getExperiment: ty, isLoading: tb } = (0, k.cn)(),
        t_ = "supplemental" === (0, d.Ul)(tU.a_) && (!tn || "suggested" === ez.value.tab),
        tI = "pinned" === ez.value.slidesCollection,
        tw = (0, k.Zj)("1939400492")
      eE[28] !== eD ? ((H = eD?.()), (eE[28] = eD), (eE[29] = H)) : (H = eE[29])
      let tS = !1 !== H,
        tP = tS && ("grid" === tc ? eB : e$) ? ek : void 0,
        tC = tP ?? ""
      eE[30] !== tC || eE[31] !== tc
        ? ((W = { href: tC, layout: tc }), (eE[30] = tC), (eE[31] = tc), (eE[32] = W))
        : (W = eE[32])
      let tE = (0, d._U)(null != tP ? G.WT : null, W),
        tM =
          null != tf && null != tv && tf === eV.value.accountId && (null == eV.value.userId || tv === eV.value.userId),
        tN =
          tS &&
          tM &&
          "library:collection:shared-with-me" === ez.value.directoryId &&
          !ez.value.search &&
          0 === ez.value.categories.length &&
          0 === ez.value.sources.length &&
          !ez.value.deleted
      eE[33] !== ty || eE[34] !== tb || eE[35] !== tN
        ? ((Y = tN && !tb && !0 === ty("1021766746", { disableExposureLog: !1 }).get("show_opened_share_history", !1)),
          (eE[33] = ty),
          (eE[34] = tb),
          (eE[35] = tN),
          (eE[36] = Y))
        : (Y = eE[36])
      let tR = Y,
        tL = ["opened-shared-links", tf, tv],
        tD = [...tL, tw]
      eE[37] !== tw
        ? ((K = async (e) => {
            let { pageParam: t, signal: a } = e,
              l = t || void 0
            for (;;) {
              let e = await f.Request.safeGet("/received-shares", {
                parameters: { query: { limit: 20, cursor: l } },
                signal: a,
              })
              if (null == e.cursor || e.items.some((e) => tj(e, tw))) return e
              l = e.cursor ?? void 0
            }
          }),
          (eE[37] = tw),
          (eE[38] = K))
        : (K = eE[38])
      let {
          data: tG,
          dataUpdatedAt: t$,
          isError: tB,
          isFetchNextPageError: tz,
          isLoading: tV,
          isFetching: tq,
          hasNextPage: tQ,
          isFetchingNextPage: tH,
          fetchNextPage: tW,
          refetch: tY,
        } = (0, s.q)({
          queryKey: tD,
          subscribed: tR,
          enabled: tR && null != tf && null != tv,
          initialPageParam: "",
          queryFn: K,
          getNextPageParam: ai,
          staleTime: 15e3,
          refetchOnMount: "always",
          refetchOnWindowFocus: !0,
        }),
        tK = ez.value.includePages && "suggested" === ez.value.tab,
        tZ = tK && !ez.value.search && 0 === ez.value.categories.length && 0 === ez.value.sources.length,
        tJ = (0, d.Ul)(!!tZ && !!eZ && "list" === tc && q.Wz),
        tX = !0 === (0, d._U)(e$ && tZ && "list" === tc && null == to ? M.JW : null, "3319560513"),
        t0 = (0, d.Ul)(O.TV),
        t1 = ez.value.search.trim().toLowerCase(),
        t2 = (0, d.Ul)(tI ? B.IO : null),
        t3 = Array.from(t1)
      eE[39] !== t3 ? ((Z = t3.slice(0, 200)), (eE[39] = t3), (eE[40] = Z)) : (Z = eE[40])
      let t4 = Z.join("")
      eE[41] !== tf || eE[42] !== t4 || eE[43] !== tv
        ? ((J = { accountId: tf, userId: tv, query: t4 }), (eE[41] = tf), (eE[42] = t4), (eE[43] = tv), (eE[44] = J))
        : (J = eE[44])
      let t6 = (0, d._U)(t_ ? h.$B : null, J),
        t5 = t6?.data,
        t8 = tI ? t2 : t6,
        t7 = (0, d.Ul)(tx.Dw)
      t1 ||
        0 !== ez.value.sources.length ||
        null != ta.allowlistIds ||
        ("all" === ez.value.slidesCollection ? (X = "slides") : "all" === ez.value.pageCollection && (X = "pages"))
      let ae = (0, d._U)(q.wE, X)
      if (
        eE[45] !== ta ||
        eE[46] !== td ||
        eE[47] !== t5 ||
        eE[48] !== tt ||
        eE[49] !== ez.value.basePath ||
        eE[50] !== ez.value.deleted ||
        eE[51] !== ez.value.directoryId ||
        eE[52] !== ez.value.search ||
        eE[53] !== ez.value.tab ||
        eE[54] !== tZ ||
        eE[55] !== tn ||
        eE[56] !== t_ ||
        eE[57] !== to ||
        eE[58] !== tu
      ) {
        let e,
          t = tn ? new Set(tu?.map(tU.vN)) : void 0
        if (
          ((et =
            t_ && null != t5
              ? t5.filter(
                  (e) =>
                    ta.providers.includes("owner" === e.current_user_role ? "native" : "native_shared") &&
                    !t?.has(e.id),
                )
              : void 0),
          eE[61] !== tt ||
          eE[62] !== ez.value.basePath ||
          eE[63] !== ez.value.deleted ||
          eE[64] !== ez.value.directoryId ||
          eE[65] !== ez.value.search ||
          eE[66] !== ez.value.tab ||
          eE[67] !== tn ||
          eE[68] !== tu
            ? ((e =
                tn ||
                "/space" !== ez.value.basePath ||
                "all" !== ez.value.tab ||
                null != ez.value.directoryId ||
                ez.value.deleted
                  ? tu
                  : tu?.filter(
                      (e) =>
                        !("node" in e) ||
                        ("library:collection:shared-with-me" !== e.node.id &&
                          !(
                            !ez.value.search &&
                            (0, x.kS)(e) &&
                            tt?.some((t) => {
                              let { provider: a } = t
                              return (0, x.sm)(e) === a
                            })
                          )),
                    )),
              (eE[61] = tt),
              (eE[62] = ez.value.basePath),
              (eE[63] = ez.value.deleted),
              (eE[64] = ez.value.directoryId),
              (eE[65] = ez.value.search),
              (eE[66] = ez.value.tab),
              (eE[67] = tn),
              (eE[68] = tu),
              (eE[69] = e))
            : (e = eE[69]),
          (ee = e),
          !tn && tZ && null != et)
        ) {
          let e,
            t = new Set(et.map(an))
          ;(eE[70] !== t || eE[71] !== ee
            ? ((e = ee?.filter((e) => {
                let a = (0, tU.vN)(e)
                return null == a || !t.has(a)
              })),
              (eE[70] = t),
              (eE[71] = ee),
              (eE[72] = e))
            : (e = eE[72]),
            (ee = e))
        } else if (!tn && t_ && !tZ && null != t5) {
          let e
          ;(eE[73] !== ta || eE[74] !== td || eE[75] !== t5 || eE[76] !== ee || eE[77] !== to
            ? ((e = (0, tU.sL)(ee, t5, ta, to, td)),
              (eE[73] = ta),
              (eE[74] = td),
              (eE[75] = t5),
              (eE[76] = ee),
              (eE[77] = to),
              (eE[78] = e))
            : (e = eE[78]),
            (ee = e))
        }
        ;((eE[45] = ta),
          (eE[46] = td),
          (eE[47] = t5),
          (eE[48] = tt),
          (eE[49] = ez.value.basePath),
          (eE[50] = ez.value.deleted),
          (eE[51] = ez.value.directoryId),
          (eE[52] = ez.value.search),
          (eE[53] = ez.value.tab),
          (eE[54] = tZ),
          (eE[55] = tn),
          (eE[56] = t_),
          (eE[57] = to),
          (eE[58] = tu),
          (eE[59] = ee),
          (eE[60] = et))
      } else ((ee = eE[59]), (et = eE[60]))
      let at = (0, d.Ul)(ee?.length || (tZ && !t0) ? z.spacesQuery$ : null)?.data
      eE[79] !== ee ? ((ea = ee?.some(ar)), (eE[79] = ee), (eE[80] = ea)) : (ea = eE[80])
      let as = !!ea,
        { exportToGoogleDrive: ad, connectDialog: ac } = (0, $.i)(as),
        au = (0, u.useRef)(void 0),
        ag = tR ? (tG?.pages.flatMap((e) => e.items.filter((e) => tj(e, tw))) ?? []) : [],
        ap =
          tN &&
          !tb &&
          null != tf &&
          null != tv &&
          (null != eX || e5 || e2.length > 0) &&
          !e8 &&
          !e7 &&
          !e0 &&
          !e1 &&
          (!tR || (!tV && !tq)),
        ah = e3?.pages.some(al) ?? !1,
        am = ee?.length ?? 0,
        af = ag.length,
        av = JSON.stringify([tf, tv, e4, t$, am, af, ah, e5, e2.length, tB, tR])
      ;(eE[81] !== e2.length ||
      eE[82] !== ah ||
      eE[83] !== e5 ||
      eE[84] !== tN ||
      eE[85] !== tB ||
      eE[86] !== ez ||
      eE[87] !== av ||
      eE[88] !== ap ||
      eE[89] !== tR ||
      eE[90] !== tc ||
      eE[91] !== am ||
      eE[92] !== af
        ? ((el = () => {
            if (!tN) {
              au.current = void 0
              return
            }
            if (!ap || au.current === av) return
            au.current = av
            let e = am + af,
              t = e5 || e2.length > 0 || tB,
              a = "CHATGPT_FILE_LIBRARY_RESULTS_STATE_EMPTY"
            ;(ah || (t && e > 0)
              ? (a = "CHATGPT_FILE_LIBRARY_RESULTS_STATE_PARTIAL")
              : t
                ? (a = "CHATGPT_FILE_LIBRARY_RESULTS_STATE_ERROR")
                : e > 0 && (a = "CHATGPT_FILE_LIBRARY_RESULTS_STATE_POPULATED"),
              (0, E.yy)(ez, n.oq, {
                ...ez.get(_.Vu),
                visibleItemCount: (0, i.PZ)(e),
                emptyReason: 0 !== e || t || ah ? void 0 : "CHATGPT_FILE_LIBRARY_EMPTY_REASON_EMPTY_FOLDER",
                provider: (0, C.Pw)(ez.value.directoryId),
                folderKind: "CHATGPT_FILE_LIBRARY_FOLDER_KIND_SHARED_WITH_ME",
                openedShareItemCount: tR ? (0, i.PZ)(af) : void 0,
                layout: "grid" === tc ? "CHATGPT_FILE_LIBRARY_LAYOUT_GRID" : "CHATGPT_FILE_LIBRARY_LAYOUT_LIST",
                resultsState: a,
              }))
          }),
          (er = [e2.length, ah, e5, tB, tN, ez, av, ap, tR, tc, am, af]),
          (eE[81] = e2.length),
          (eE[82] = ah),
          (eE[83] = e5),
          (eE[84] = tN),
          (eE[85] = tB),
          (eE[86] = ez),
          (eE[87] = av),
          (eE[88] = ap),
          (eE[89] = tR),
          (eE[90] = tc),
          (eE[91] = am),
          (eE[92] = af),
          (eE[93] = el),
          (eE[94] = er))
        : ((el = eE[93]), (er = eE[94])),
        (0, u.useEffect)(el, er))
      let ay = ag.map((e) => {
        let t
        return {
          id: `${"posted_at" in e ? "post" : "conversation"}:${e.id}`,
          sortMetadata:
            ((t = e.last_opened_at ?? e.first_opened_at),
            {
              name: tA(e, eJ),
              date: null == t ? void 0 : Date.parse(t),
              size: void 0,
              isDirectory: !1,
              isNavigationRoot: !1,
            }),
          render: (t, a) =>
            (0, l.jsx)(tk, {
              layout: eZ ? "stacked" : "columns",
              structuredGridEnabled: eY,
              item: e,
              viewMode: t,
              reserveDisclosureSpace: tp,
              position: a,
              onDelete: async () => {
                let t = "posted_at" in e ? "post" : "conversation"
                await f.Request.safeDelete("/received-shares/{share_kind}/{share_id}", {
                  parameters: { path: { share_kind: t, share_id: e.id } },
                })
                let a = { queryKey: tL }
                ;(await ez.queryClient.cancelQueries(a),
                  ez.queryClient.setQueriesData(a, (a) =>
                    null == a
                      ? a
                      : {
                          ...a,
                          pages: a.pages.map((a) => ({
                            ...a,
                            items: a.items.filter(
                              (a) => a.id !== e.id || ("posted_at" in a ? "post" : "conversation") !== t,
                            ),
                          })),
                        },
                  ))
              },
            }),
        }
      })
      eE[95] !== tS ||
      eE[96] !== e3 ||
      eE[97] !== e2.length ||
      eE[98] !== e1 ||
      eE[99] !== e5 ||
      eE[100] !== e7 ||
      eE[101] !== e8 ||
      eE[102] !== eX ||
      eE[103] !== eL ||
      eE[104] !== e0 ||
      eE[105] !== ts ||
      eE[106] !== ez.value.pageCollection ||
      eE[107] !== ez.value.search ||
      eE[108] !== tZ
        ? ((en =
            tS &&
            !ez.value.search &&
            (tZ || null != ez.value.pageCollection) &&
            (0, l.jsx)(N.N, {
              pathname: eL,
              section: tZ ? "recents" : "pages",
              ready: !e8 && !e7 && !e0 && !e1 && null != eX,
              failed: !e7 && !e1 && (e5 || ts || e2.length > 0 || e3?.pages.some(aa) === !0),
            })),
          (eE[95] = tS),
          (eE[96] = e3),
          (eE[97] = e2.length),
          (eE[98] = e1),
          (eE[99] = e5),
          (eE[100] = e7),
          (eE[101] = e8),
          (eE[102] = eX),
          (eE[103] = eL),
          (eE[104] = e0),
          (eE[105] = ts),
          (eE[106] = ez.value.pageCollection),
          (eE[107] = ez.value.search),
          (eE[108] = tZ),
          (eE[109] = en))
        : (en = eE[109])
      let ab = !e0 && !e1 && null != eX && tS && (!tR || !tV),
        a_ = tS && (e5 || e2.length > 0 || (tR && tB))
      ;(eE[110] !== tS || eE[111] !== tr || eE[112] !== ab || eE[113] !== a_
        ? ((ei = (0, l.jsx)(N.B, { active: tS, homeRanking: tr, ready: ab, failed: a_ })),
          (eE[110] = tS),
          (eE[111] = tr),
          (eE[112] = ab),
          (eE[113] = a_),
          (eE[114] = ei))
        : (ei = eE[114]),
        eE[115] !== en || eE[116] !== ei
          ? ((es = (0, l.jsxs)(l.Fragment, { children: [en, ei] })), (eE[115] = en), (eE[116] = ei), (eE[117] = es))
          : (es = eE[117]))
      let ax = es
      eE[118] !== e6 ||
      eE[119] !== ek ||
      eE[120] !== tS ||
      eE[121] !== e3 ||
      eE[122] !== e2.length ||
      eE[123] !== tl ||
      eE[124] !== e1 ||
      eE[125] !== ah ||
      eE[126] !== eD ||
      eE[127] !== tM ||
      eE[128] !== e5 ||
      eE[129] !== e7 ||
      eE[130] !== e8 ||
      eE[131] !== e9 ||
      eE[132] !== tb ||
      eE[133] !== eX ||
      eE[134] !== tN ||
      eE[135] !== tG ||
      eE[136] !== tB ||
      eE[137] !== tq ||
      eE[138] !== tQ ||
      eE[139] !== e0 ||
      eE[140] !== t8?.isError ||
      eE[141] !== t8?.isFetching ||
      eE[142] !== t8?.isPending ||
      eE[143] !== ts ||
      eE[144] !== ti?.hasNextPage ||
      eE[145] !== ti?.isFetching ||
      eE[146] !== ez ||
      eE[147] !== tR ||
      eE[148] !== t6?.hasNextPage
        ? ((eo = (e) => {
            let t = e
            if (null == ek || !tS || !tM) return null
            if ("empty" === e || "error" === e) {
              let a = tN && (tb || (tR && (tq || (null == tG && !tB))))
              if (
                e0 ||
                e1 ||
                e7 ||
                ti?.isFetching ||
                (!e5 && (ti?.hasNextPage ?? e6)) ||
                a ||
                (tR && !tB && tQ) ||
                t8?.isFetching
              )
                return null
              if ("empty" === e) {
                if (e8 || null == e3 || null == eX || e9 || t8?.isPending || t6?.hasNextPage) return null
                if (ah || e5 || ts || e2.length > 0 || t8?.isError || (tR && tB)) t = "error"
                else if (tl) return null
              }
            }
            return (0, l.jsx)(F.D, { visit: (0, U.OK)(ez), href: ek, state: t, isCurrent: eD })
          }),
          (eE[118] = e6),
          (eE[119] = ek),
          (eE[120] = tS),
          (eE[121] = e3),
          (eE[122] = e2.length),
          (eE[123] = tl),
          (eE[124] = e1),
          (eE[125] = ah),
          (eE[126] = eD),
          (eE[127] = tM),
          (eE[128] = e5),
          (eE[129] = e7),
          (eE[130] = e8),
          (eE[131] = e9),
          (eE[132] = tb),
          (eE[133] = eX),
          (eE[134] = tN),
          (eE[135] = tG),
          (eE[136] = tB),
          (eE[137] = tq),
          (eE[138] = tQ),
          (eE[139] = e0),
          (eE[140] = t8?.isError),
          (eE[141] = t8?.isFetching),
          (eE[142] = t8?.isPending),
          (eE[143] = ts),
          (eE[144] = ti?.hasNextPage),
          (eE[145] = ti?.isFetching),
          (eE[146] = ez),
          (eE[147] = tR),
          (eE[148] = t6?.hasNextPage),
          (eE[149] = eo))
        : (eo = eE[149])
      let aI = eo
      eE[150] !== aI || eE[151] !== am || eE[152] !== af
        ? ((ed = 0 === am && 0 === af ? aI("error") : null),
          (eE[150] = aI),
          (eE[151] = am),
          (eE[152] = af),
          (eE[153] = ed))
        : (ed = eE[153])
      let aw = ed
      if (tR && tB) ec = null
      else if (t_ && (t8?.isPending === !0 || t6?.hasNextPage || t8?.isError === !0 || (tZ && (et?.length ?? 0) > 0)))
        ec = null
      else if (
        ("/space" === ez.value.basePath || "/space/files" === ez.value.basePath) &&
        (ez.value.includePages || "images" === ez.value.tab || ez.value.deleted || null != ez.value.directoryId) &&
        !ez.value.search &&
        0 === ez.value.categories.length &&
        0 === ez.value.sources.length &&
        !ez.value.directoryId?.startsWith("external-") &&
        !ez.value.directoryId?.startsWith("library:") &&
        "favorites" !== ez.value.tab &&
        "recent" !== ez.value.tab
      ) {
        let e, t
        ;(eE[154] !== aI ? ((e = aI("empty")), (eE[154] = aI), (eE[155] = e)) : (e = eE[155]),
          eE[156] !== e || eE[157] !== eG
            ? ((t = (0, l.jsx)(ao, { trackHomeClick: eG, emptyPaint: e })),
              (eE[156] = e),
              (eE[157] = eG),
              (eE[158] = t))
            : (t = eE[158]),
          (ec = t))
      }
      if ((t_ || tI) && t8?.isError === !0) {
        let e, t, a, r, n
        ;(eE[159] !== tI
          ? ((e = tI
              ? (0, l.jsx)(p.A, { id: "space.slides.pins.loadError", defaultMessage: "Unable to load pinned Slides" })
              : (0, l.jsx)(p.A, { id: "appgenPage.error.title", defaultMessage: "Unable to load sites" })),
            (eE[159] = tI),
            (eE[160] = e))
          : (e = eE[160]),
          eE[161] !== t8 || eE[162] !== t6
            ? ((t = () => {
                t6?.isFetchNextPageError ? t6.fetchNextPage({ cancelRefetch: !1 }) : t8.refetch()
              }),
              (eE[161] = t8),
              (eE[162] = t6),
              (eE[163] = t))
            : (t = eE[163]),
          eE[164] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, l.jsx)(p.A, { id: "libraryNext.results.retry", defaultMessage: "Try again" })), (eE[164] = a))
            : (a = eE[164]),
          eE[165] !== t8.isFetching || eE[166] !== t
            ? ((r = (0, l.jsx)(v.$, { color: "ghost", disabled: t8.isFetching, onClick: t, children: a })),
              (eE[165] = t8.isFetching),
              (eE[166] = t),
              (eE[167] = r))
            : (r = eE[167]),
          eE[168] !== aw || eE[169] !== e || eE[170] !== r
            ? ((n = (0, l.jsxs)("div", {
                className: "flex items-center gap-3 pb-4 text-secondary",
                role: "status",
                children: [aw, e, r],
              })),
              (eE[168] = aw),
              (eE[169] = e),
              (eE[170] = r),
              (eE[171] = n))
            : (n = eE[171]),
          (eu = n))
      } else if (t_ && null != t6) {
        let e,
          t,
          a = t6.hasNextPage && !t6.isFetching
        ;(eE[172] !== t6
          ? ((e = () => void t6.fetchNextPage({ cancelRefetch: !1 })), (eE[172] = t6), (eE[173] = e))
          : (e = eE[173]),
          eE[174] !== t6.isFetchingNextPage || eE[175] !== a || eE[176] !== e
            ? ((t = (0, l.jsx)(y.D, { hasNextPage: a, isFetchingNextPage: t6.isFetchingNextPage, onLoadNextPage: e })),
              (eE[174] = t6.isFetchingNextPage),
              (eE[175] = a),
              (eE[176] = e),
              (eE[177] = t))
            : (t = eE[177]),
          (eu = t))
      }
      eE[178] !== eY ||
      eE[179] !== ad ||
      eE[180] !== eD ||
      eE[181] !== eR ||
      eE[182] !== eU ||
      eE[183] !== tg ||
      eE[184] !== eZ ||
      eE[185] !== tp ||
      eE[186] !== ez ||
      eE[187] !== eF ||
      eE[188] !== at
        ? ((eg = (e) => (t, a, r, n) =>
            (0, l.jsx)(tm, {
              spaces: at,
              item: t,
              viewMode: a,
              source: e ? void 0 : r,
              browseLocation: ez.getOwnValue(I.Qy),
              navigation: eR,
              onOpenProfile: eU,
              isCurrent: eD,
              showRowThumbnails: eZ,
              pageTree: e ? void 0 : tg,
              reserveDisclosureSpace: e ? void 0 : tp,
              pinnedPresentation: e,
              structuredGridEnabled: !e && eY,
              reorderAction: n,
              exportToGoogleDrive: e ? void 0 : ad,
              searchFileActions: eF,
              observeSearchResult: (e) => (0, A.pF)(ez, t, e),
              onOpenSearchResult: () => (0, A.PP)(ez, t),
              onOpenSite:
                "siteProject" in t
                  ? (e, a) => ez.get(I.Lo) && (ez.get(P.u$)?.(t.siteProject, e, () => (0, A.PP)(ez, t), a) ?? !1)
                  : void 0,
            })),
          (eE[178] = eY),
          (eE[179] = ad),
          (eE[180] = eD),
          (eE[181] = eR),
          (eE[182] = eU),
          (eE[183] = tg),
          (eE[184] = eZ),
          (eE[185] = tp),
          (eE[186] = ez),
          (eE[187] = eF),
          (eE[188] = at),
          (eE[189] = eg))
        : (eg = eE[189])
      let aS = eg
      ;(eE[190] !== eY || eE[191] !== eZ || eE[192] !== aI || eE[193] !== tE || eE[194] !== tc
        ? ((ep = (e) =>
            "populated" === e && null != tE && ("grid" === tc ? eY : eZ)
              ? (0, l.jsxs)(l.Fragment, { children: [aI(e), (0, l.jsx)("span", { hidden: !0, ref: tE.attach })] })
              : aI(e)),
          (eE[190] = eY),
          (eE[191] = eZ),
          (eE[192] = aI),
          (eE[193] = tE),
          (eE[194] = tc),
          (eE[195] = ep))
        : (ep = eE[195]),
        eE[196] !== eG
          ? ((eh = eG && (0, l.jsx)(D.k, { milestone: "visible" })), (eE[196] = eG), (eE[197] = eh))
          : (eh = eE[197]))
      let aj = eY ? eK : void 0
      eE[198] !== ti || eE[199] !== ez
        ? ((em =
            null == ti
              ? void 0
              : { hasNextPage: ti.hasNextPage, isFetching: ti.isFetching, fetchNextPage: () => (0, tx.mS)(ez) }),
          (eE[198] = ti),
          (eE[199] = ez),
          (eE[200] = em))
        : (em = eE[200])
      let aP = eZ ? "stacked" : "columns",
        aA = ec,
        aC = ee,
        aE = e0 || (!eX?.length && (e1 || (t_ && t8?.isPending === !0) || (tR && tV)))
      ;(eE[201] !== tW ||
      eE[202] !== tB ||
      eE[203] !== tH ||
      eE[204] !== tQ ||
      eE[205] !== eu ||
      eE[206] !== tZ ||
      eE[207] !== tR
        ? ((ef =
            tZ || (null == eu && (!tR || !tQ || tB))
              ? void 0
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    eu,
                    tR
                      ? (0, l.jsx)(tO, {
                          hasNextPage: tQ && !tB,
                          isFetchingNextPage: tH,
                          onLoadNextPage: () => {
                            tW({ cancelRefetch: !1 })
                          },
                        })
                      : null,
                  ],
                })),
          (eE[201] = tW),
          (eE[202] = tB),
          (eE[203] = tH),
          (eE[204] = tQ),
          (eE[205] = eu),
          (eE[206] = tZ),
          (eE[207] = tR),
          (eE[208] = ef))
        : (ef = eE[208]),
        eE[209] !== aS ? ((ev = aS(!1)), (eE[209] = aS), (eE[210] = ev)) : (ev = eE[210]),
        eE[211] !== eR ||
        eE[212] !== eU ||
        eE[213] !== eZ ||
        eE[214] !== ez.value.deleted ||
        eE[215] !== ez.value.pageCollection ||
        eE[216] !== ez.value.search ||
        eE[217] !== at ||
        eE[218] !== tK ||
        eE[219] !== tc
          ? ((ey =
              (eZ && "list" === tc) ||
              ez.value.deleted ||
              (tK && !ez.value.search) ||
              (null != ez.value.pageCollection && "shared" !== ez.value.pageCollection)
                ? (e) => (t) =>
                    (0, l.jsx)(th, {
                      catalog: at ?? null,
                      inline: eZ,
                      item: e,
                      navigation: eR,
                      onOpenProfile: eU,
                      children: t,
                    })
                : void 0),
            (eE[211] = eR),
            (eE[212] = eU),
            (eE[213] = eZ),
            (eE[214] = ez.value.deleted),
            (eE[215] = ez.value.pageCollection),
            (eE[216] = ez.value.search),
            (eE[217] = at),
            (eE[218] = tK),
            (eE[219] = tc),
            (eE[220] = ey))
          : (ey = eE[220]),
        eE[221] !== ta ||
        eE[222] !== aw ||
        eE[223] !== e2 ||
        eE[224] !== tW ||
        eE[225] !== e1 ||
        eE[226] !== tB ||
        eE[227] !== tq ||
        eE[228] !== tz ||
        eE[229] !== e0 ||
        eE[230] !== ts ||
        eE[231] !== tY ||
        eE[232] !== ag ||
        eE[233] !== t7 ||
        eE[234] !== ez ||
        eE[235] !== tR
          ? ((eb =
              ts || e2.length > 0 || (tR && tB)
                ? (0, l.jsxs)(l.Fragment, {
                    children: [
                      ts
                        ? (0, l.jsx)(S._, {
                            paint: aw,
                            favorites: "favorites" === ta.tab,
                            folderError: null,
                            onRetry: () => (0, tx.lL)(ez),
                          })
                        : null,
                      e2.length > 0
                        ? (0, l.jsxs)("div", {
                            className: "flex items-center gap-3 pb-4 text-secondary",
                            role: "status",
                            children: [
                              aw,
                              (0, l.jsx)(p.A, {
                                id: "libraryNext.results.incompletePages",
                                defaultMessage: "Some pages could not be loaded",
                              }),
                              (0, l.jsx)(v.$, {
                                color: "ghost",
                                disabled: e0 || e1 || t7,
                                onClick: () => {
                                  ;(ez.set(tx.Dw, !0),
                                    (0, c.Ay)(
                                      e2,
                                      (e) => ez.get(z.spacePageAncestryQuery$, e, { enabled: !1 }).refetch(),
                                      { concurrency: 4 },
                                    ).finally(() => {
                                      ez.set(tx.Dw, !1)
                                    }))
                                },
                                children: (0, l.jsx)(p.A, {
                                  id: "libraryNext.results.retry",
                                  defaultMessage: "Try again",
                                }),
                              }),
                            ],
                          })
                        : null,
                      tR
                        ? (0, l.jsx)(tT, {
                            paint: aw,
                            error: tB,
                            hasCachedItems: ag.length > 0,
                            isFetching: tq,
                            isNextPageError: tz,
                            onRetry: () => {
                              tz ? tW({ cancelRefetch: !1 }) : tY()
                            },
                          })
                        : null,
                    ],
                  })
                : null),
            (eE[221] = ta),
            (eE[222] = aw),
            (eE[223] = e2),
            (eE[224] = tW),
            (eE[225] = e1),
            (eE[226] = tB),
            (eE[227] = tq),
            (eE[228] = tz),
            (eE[229] = e0),
            (eE[230] = ts),
            (eE[231] = tY),
            (eE[232] = ag),
            (eE[233] = t7),
            (eE[234] = ez),
            (eE[235] = tR),
            (eE[236] = eb))
          : (eb = eE[236]),
        eE[237] !== ec ||
        eE[238] !== tX ||
        eE[239] !== eN ||
        eE[240] !== tp ||
        eE[241] !== ee ||
        eE[242] !== tJ ||
        eE[243] !== ay ||
        eE[244] !== ep ||
        eE[245] !== eh ||
        eE[246] !== aj ||
        eE[247] !== em ||
        eE[248] !== aP ||
        eE[249] !== aE ||
        eE[250] !== ef ||
        eE[251] !== ev ||
        eE[252] !== ey ||
        eE[253] !== eb
          ? ((ex = (0, l.jsx)(j.Y, {
              renderResultPaint: ep,
              populatedContentMarker: eh,
              spaceGridLayout: aj,
              pagination: em,
              rowLayout: aP,
              showLeadingDivider: tJ,
              emptyState: aA,
              reserveDisclosureSpace: tp,
              groupByActivityDate: tX,
              items: aC,
              supplementalItems: ay,
              contentPending: aE,
              additionalPagination: ef,
              onOpenItem: eN,
              renderContentItem: ev,
              renderSource: ey,
              notice: eb,
            })),
            (eE[237] = ec),
            (eE[238] = tX),
            (eE[239] = eN),
            (eE[240] = tp),
            (eE[241] = ee),
            (eE[242] = tJ),
            (eE[243] = ay),
            (eE[244] = ep),
            (eE[245] = eh),
            (eE[246] = aj),
            (eE[247] = em),
            (eE[248] = aP),
            (eE[249] = aE),
            (eE[250] = ef),
            (eE[251] = ev),
            (eE[252] = ey),
            (eE[253] = eb),
            (eE[254] = ex))
          : (ex = eE[254]))
      let ak = ex
      eE[255] !== t0 ||
      eE[256] !== eD ||
      eE[257] !== eR ||
      eE[258] !== eL ||
      eE[259] !== t8?.isError ||
      eE[260] !== eu ||
      eE[261] !== aS ||
      eE[262] !== tZ ||
      eE[263] !== t_ ||
      eE[264] !== ae ||
      eE[265] !== t6?.hasNextPage ||
      eE[266] !== X ||
      eE[267] !== eG ||
      eE[268] !== tc ||
      eE[269] !== am ||
      eE[270] !== et ||
      eE[271] !== af
        ? ((eI = tZ
            ? (0, l.jsx)(t9, {
                trackHomeClick: eG,
                hiddenPinnedPageIds$: tx.VD,
                showPinnedCards: !t0,
                showGettingStartedDivider: "grid" === tc && (am > 0 || af > 0),
                pathname: eL,
                navigation: eR,
                isCurrent: eD,
                renderContentItem: aS(!0),
                pinnedSites: et,
                sitePinsError: t_ && t8?.isError === !0,
                sitePinsHaveNextPage: t_ && t6?.hasNextPage === !0,
                sitePagination: eu,
              })
            : ae &&
              (0, l.jsx)("div", { className: "pt-4 pb-8 empty:hidden", children: (0, l.jsx)(e_, { filter: X }) })),
          (eE[255] = t0),
          (eE[256] = eD),
          (eE[257] = eR),
          (eE[258] = eL),
          (eE[259] = t8?.isError),
          (eE[260] = eu),
          (eE[261] = aS),
          (eE[262] = tZ),
          (eE[263] = t_),
          (eE[264] = ae),
          (eE[265] = t6?.hasNextPage),
          (eE[266] = X),
          (eE[267] = eG),
          (eE[268] = tc),
          (eE[269] = am),
          (eE[270] = et),
          (eE[271] = af),
          (eE[272] = eI))
        : (eI = eE[272])
      let aM = eI
      eE[273] !== ez
        ? ((ew = (e) => {
            if (
              e.defaultPrevented ||
              e.altKey ||
              ("click" === e.type ? 0 !== e.button : 1 !== e.button) ||
              !(e.target instanceof Element)
            )
              return
            let t = e.target.closest("a[data-library-item-action][href]")
            null == t || !e.currentTarget.contains(t) || t.hasAttribute("download") || (0, ej.Uf)(ez, ez.get(eP.i))
          }),
          (eE[273] = ez),
          (eE[274] = ew))
        : (ew = eE[274])
      let aT = ew
      ;(eE[275] !== te || eE[276] !== eq
        ? ((eS = te && null != eq ? (0, l.jsx)("span", { hidden: !0, ref: eQ }) : null),
          (eE[275] = te),
          (eE[276] = eq),
          (eE[277] = eS))
        : (eS = eE[277]),
        eE[278] !== ac || eE[279] !== aM || eE[280] !== ax || eE[281] !== ak || eE[282] !== eS
          ? ((eA = (0, l.jsxs)(l.Fragment, { children: [aM, ax, ak, eS, ac] })),
            (eE[278] = ac),
            (eE[279] = aM),
            (eE[280] = ax),
            (eE[281] = ak),
            (eE[282] = eS),
            (eE[283] = eA))
          : (eA = eE[283]))
      let aO = eA
      if (tK || tr) {
        let e,
          t = tZ ? "flex min-h-0 flex-1 flex-col" : "contents"
        ;(eE[284] !== aO || eE[285] !== aT || eE[286] !== t
          ? ((e = (0, l.jsx)("div", { className: t, onClick: aT, onAuxClick: aT, role: "presentation", children: aO })),
            (eE[284] = aO),
            (eE[285] = aT),
            (eE[286] = t),
            (eE[287] = e))
          : (e = eE[287]),
          (aO = e))
      }
      return (
        eH?.(),
        eE[288] !== aO || eE[289] !== eZ || eE[290] !== tc
          ? ((eC = eZ
              ? (0, l.jsx)(b.eb, {
                  className: (0, o.A)("contents", "list" === tc && "[--padding-row-cell-x:calc(var(--spacing)*3)]"),
                  density: "preview",
                  children: aO,
                })
              : aO),
            (eE[288] = aO),
            (eE[289] = eZ),
            (eE[290] = tc),
            (eE[291] = eC))
          : (eC = eE[291]),
        eC
      )
    }
    function aa(e) {
      return !0 === e.partialResults
    }
    function al(e) {
      return e.partialResults
    }
    function ar(e) {
      return (
        ("page" in e && "page" === (0, T.th)(e.page)) ||
        ("libraryPage" in e && "page" === (0, T.th)(e.libraryPage.node.page_metadata ?? {}))
      )
    }
    function an(e) {
      return e.id
    }
    function ai(e) {
      return e.cursor ?? void 0
    }
    let as = (0, d.un)(I.Qy, ({ get: e, scope: t }) => {
      if (!t.value.includePages || "suggested" !== t.value.tab) return !1
      if (e(q.Wz)) return !0
      if (e(O.TV)) return !1
      let a = e(tN.V)
      return a.pages.length > 0 || a.pending || a.failed.length > 0
    })
    function ao(e) {
      let t,
        a,
        n,
        i = (0, r.c)(13),
        { trackHomeClick: s, emptyPaint: o } = e,
        c = (0, d.gh)(I.Qy),
        u = (0, d.Ul)(as),
        g = (0, d.Ul)(V.Q)
      if (u) return null
      if (c.value.deleted) {
        let e,
          t = g ? "trash" : "trash-files"
        return (
          i[0] !== o || i[1] !== t
            ? ((e = (0, l.jsx)(tR.n, { titleMarker: o, view: t })), (i[0] = o), (i[1] = t), (i[2] = e))
            : (e = i[2]),
          e
        )
      }
      if (null != c.value.directoryId) {
        let e
        return (
          i[3] !== o
            ? ((e = (0, l.jsx)(tR.n, { titleMarker: o, view: "folder" })), (i[3] = o), (i[4] = e))
            : (e = i[4]),
          e
        )
      }
      i[5] !== s ? ((t = s && (0, l.jsx)(D.k, { milestone: "visible" })), (i[5] = s), (i[6] = t)) : (t = i[6])
      let p = "images" === c.value.tab ? "images" : "all"
      return (
        i[7] !== o || i[8] !== p
          ? ((a = (0, l.jsx)(tR.n, { titleMarker: o, view: p })), (i[7] = o), (i[8] = p), (i[9] = a))
          : (a = i[9]),
        i[10] !== t || i[11] !== a
          ? ((n = (0, l.jsxs)(l.Fragment, { children: [t, a] })), (i[10] = t), (i[11] = a), (i[12] = n))
          : (n = i[12]),
        n
      )
    }
  },
  l7Ch(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      n = a("slpy"),
      i = a("qmMi"),
      s = a("Wf1j"),
      o = a("bVeK"),
      d = a("pIbZ"),
      c = a("OWtl"),
      u = a("vcr8")
    a.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            a,
            g,
            p,
            h,
            m = (0, r.c)(17),
            { href: f, saved: v } = e,
            y = (0, i.gh)(c.u),
            b = (0, s.A)()
          m[0] !== b || m[1] !== v
            ? ((t = v
                ? b.formatMessage({ id: "space.savedSearch.unpinView", defaultMessage: "Unpin this view" })
                : b.formatMessage({ id: "space.savedSearch.pinView", defaultMessage: "Pin this view" })),
              (m[0] = b),
              (m[1] = v),
              (m[2] = t))
            : (t = m[2])
          let _ = t
          return (
            m[3] !== v
              ? ((a = v ? { 16: o.W7X, 20: o.PsC } : { 16: o.P0k, 20: o.Qut }), (m[3] = v), (m[4] = a))
              : (a = m[4]),
            m[5] !== f || m[6] !== v || m[7] !== y
              ? ((g = () => (0, u.Ml)(y, f, !v)), (m[5] = f), (m[6] = v), (m[7] = y), (m[8] = g))
              : (g = m[8]),
            m[9] !== _ || m[10] !== v || m[11] !== a || m[12] !== g
              ? ((p = (0, l.jsx)(d.p, {
                  color: "secondary",
                  variant: "ghost",
                  uniform: !0,
                  "aria-label": _,
                  "aria-pressed": v,
                  icon: a,
                  onClick: g,
                })),
                (m[9] = _),
                (m[10] = v),
                (m[11] = a),
                (m[12] = g),
                (m[13] = p))
              : (p = m[13]),
            m[14] !== _ || m[15] !== p
              ? ((h = (0, l.jsx)(n.m, { content: _, children: p })), (m[14] = _), (m[15] = p), (m[16] = h))
              : (h = m[16]),
            h
          )
        },
      },
    )
  },
  rIom(e, t, a) {
    var l = a("Qgfj"),
      r = a("jU86"),
      n = a("Q9li"),
      i = a("nJVl")
    let s = new Map(
      Object.entries({
        ...n.s,
        ...(0, l.YK)({
          favorites: { id: "library.tabs.favorites", defaultMessage: "Favorites" },
          sites: { id: "codex.space.sites.title", defaultMessage: "Sites" },
          presentations: { id: "space.home.slidesTitle", defaultMessage: "Slides" },
          spreadsheets: { id: "space.home.artifactTabs.sheets", defaultMessage: "Sheets" },
        }),
      }),
    )
    a.d(
      t,
      {},
      {
        L: function (e, t) {
          let a = new URL(
            (0, r.SE)({
              ...e,
              categories: t ? [] : [...new Set(e.categories)].sort(),
              sources: t ? [] : [...e.sources].sort(),
            }),
            "https://chatgpt.com",
          )
          return (a.searchParams.set("tab", "library:collection:shared-with-me" === e.directoryId ? "all" : e.tab),
          t && a.searchParams.set("artifact", "sites"),
          1 === a.searchParams.size && "favorites" !== a.searchParams.get("tab"))
            ? null
            : (a.searchParams.sort(), a.pathname + a.search)
        },
        z: function (e, t) {
          if (null != t.customName) return t.customName
          let a = new URL(t.href, "https://chatgpt.com"),
            l = a.searchParams,
            r = l.get("tab"),
            n = "suggested"
          if (
            (a.pathname.startsWith("/space/d/") ? (n = "shared") : ("all" === r || "favorites" === r) && (n = "all"),
            null != t.name &&
              !(function (e, t, a, l) {
                let r = i.YO.find(({ key: e }) => e === t) ?? i.YO["0"],
                  n = e.formatMessage(r.message) + " \xb7 "
                if (!l.startsWith(n)) return !1
                let o = a.get("search"),
                  d = null == o ? "" : " \xb7 " + o
                if (!l.endsWith(d)) return !1
                let c = [a.get("tab"), a.get("artifact"), ...a.getAll("category"), ...a.getAll("source")].flatMap(
                  (t) => {
                    let a = null == t ? void 0 : s.get(t)
                    return null == a ? [] : [e.formatMessage(a)]
                  },
                )
                return 0 === c.length
                  ? null != o && l === n + o
                  : l
                      .slice(n.length, l.length - d.length)
                      .split(" \xb7 ")
                      .sort()
                      .join(" \xb7 ") === c.sort().join(" \xb7 ")
              })(e, n, l, t.name))
          )
            return t.name
          let o = l.get("artifact"),
            d = "sites" === o ? [o] : l.getAll("category"),
            c = "favorites" === r ? "favorites" : n
          return (0, i.eL)(e, "suggested" === c ? null : c, d, l.getAll("source"), l.get("search") ?? "")
        },
      },
    )
  },
  HUbZ(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      n = a("tFxw"),
      i = a("qmMi"),
      s = a("Wf1j"),
      o = a("oyxz"),
      d = a("BrP7"),
      c = a("cGrE"),
      u = a("TCFx"),
      g = a("jU86")
    a.d(
      t,
      {},
      {
        K: function () {
          let e,
            t,
            a,
            p,
            h,
            m,
            f,
            v,
            y,
            b,
            _,
            x = (0, r.c)(29),
            I = (0, i.gh)(g.Qy),
            w = (0, s.A)()
          if (x[0] !== I.value.directoryId) {
            let a = null == I.value.directoryId ? null : (0, u.oh)(I.value.directoryId)
            ;((e = "google_drive" === a), (t = (0, n.ZR)(a)), (x[0] = I.value.directoryId), (x[1] = e), (x[2] = t))
          } else ((e = x[1]), (t = x[2]))
          let S = !t
          x[3] !== I.value.directoryId
            ? ((a = (0, u.$n)(I.value.directoryId)), (x[3] = I.value.directoryId), (x[4] = a))
            : (a = x[4])
          let j = a
          x[5] !== I.value.directoryId || x[6] !== j
            ? ((p = j ? I.value.directoryId?.replace(/collection:shared-with-me$/u, "root") : I.value.directoryId),
              (x[5] = I.value.directoryId),
              (x[6] = j),
              (x[7] = p))
            : (p = x[7])
          let P = p,
            A = "all"
          return (
            j ? (A = "shared") : "recent" === I.value.tab && (A = "recent"),
            x[8] !== e || x[9] !== w
              ? ((h = e
                  ? w.formatMessage({ id: "space.googleDrive.tabs.label", defaultMessage: "Google Drive views" })
                  : w.formatMessage({ id: "space.provider.tabs.label", defaultMessage: "Provider views" })),
                (x[8] = e),
                (x[9] = w),
                (x[10] = h))
              : (h = x[10]),
            x[11] !== e || x[12] !== S
              ? ((m = S
                  ? [
                      {
                        key: "recent",
                        name: e
                          ? (0, l.jsx)(o.A, { id: "space.googleDrive.tabs.recent", defaultMessage: "Recent" })
                          : (0, l.jsx)(o.A, { id: "space.provider.tabs.recents", defaultMessage: "Recents" }),
                      },
                    ]
                  : []),
                (x[11] = e),
                (x[12] = S),
                (x[13] = m))
              : (m = x[13]),
            x[14] !== e
              ? ((f = {
                  key: "all",
                  name: e
                    ? (0, l.jsx)(o.A, { id: "space.googleDrive.tabs.myDrive", defaultMessage: "My Drive" })
                    : (0, l.jsx)(o.A, { id: "space.provider.tabs.myItems", defaultMessage: "Your items" }),
                }),
                (v = e
                  ? [
                      {
                        key: "shared",
                        name: (0, l.jsx)(o.A, {
                          id: "space.googleDrive.tabs.sharedWithMe",
                          defaultMessage: "Shared with me",
                        }),
                      },
                    ]
                  : []),
                (x[14] = e),
                (x[15] = f),
                (x[16] = v))
              : ((f = x[15]), (v = x[16])),
            x[17] !== m || x[18] !== f || x[19] !== v
              ? ((y = [...m, f, ...v]), (x[17] = m), (x[18] = f), (x[19] = v), (x[20] = y))
              : (y = x[20]),
            x[21] !== P || x[22] !== I
              ? ((b = (e) => {
                  ;(("recent" === e || "all" === e) && (0, c.np)(I, { category: e }),
                    I.set(g.C6, void 0),
                    (0, g.zl)(
                      I,
                      (0, g.SE)({
                        ...I.value,
                        directoryId:
                          "shared" === e ? (P?.replace(/root$/u, "collection:shared-with-me") ?? null) : (P ?? null),
                        tab: "recent" === e ? "recent" : "all",
                        search: "",
                        categories: [],
                        sources: [],
                      }),
                    ))
                }),
                (x[21] = P),
                (x[22] = I),
                (x[23] = b))
              : (b = x[23]),
            x[24] !== A || x[25] !== h || x[26] !== y || x[27] !== b
              ? ((_ = (0, l.jsx)(d.t, {
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: h,
                  selectedKey: A,
                  tabs: y,
                  onSelect: b,
                })),
                (x[24] = A),
                (x[25] = h),
                (x[26] = y),
                (x[27] = b),
                (x[28] = _))
              : (_ = x[28]),
            _
          )
        },
      },
    )
  },
  IFrF(e, t, a) {
    var l = a("SZCv"),
      r = a.n(l),
      n = a("qmMi"),
      i = a("jU86"),
      s = a("khOd"),
      o = a("ioFt"),
      d = a("oERU")
    let c = [
        { provider: "google_drive", href: o.UW },
        { provider: "imanage", href: "/space/d/external-imanage%3Aroot?tab=all" },
        { provider: "box", href: "/space/d/external-box%3Aroot?tab=recent" },
        { provider: "dropbox", href: "/space/d/external-dropbox%3Aroot?tab=recent" },
        { provider: "sharepoint", href: "/space/d/external-sharepoint%3Aroot?tab=all" },
        { provider: "onedrive", href: "/space/d/external-onedrive%3Aroot?tab=all" },
      ],
      u = (0, n.un)(
        i.oD,
        ({ get: e, scope: t }) => {
          if (!e(s.GB)) return
          let a = e(i.c0)
          if ("disabled" === a) return []
          if ("success" !== a) {
            let l = e(d.C)
            if (l?.accountId === t.value.accountId && l.userId === t.value.userId)
              return c.filter(({ provider: t }) => l.providers.includes(t) && e(i.m_, t))
            if ("pending" === a) return
          }
          return c.filter(({ provider: t }) => e(i.UI, t))
        },
        { isEqual: r() },
      )
    a.d(
      t,
      {},
      {
        a: u,
        j: function (e) {
          return e.watch(({ get: t }) => {
            let { accountId: a, userId: l } = e.value
            if (null == l || "success" !== t(i.c0)) return
            let n = t(u)
            if (null == n) return
            let s = { accountId: a, userId: l, providers: n.map(({ provider: e }) => e) }
            r()(e.get(d.C), s) || e.set(d.C, s)
          })
        },
      },
    )
  },
  dLrD(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      n = a("qmMi"),
      i = a("Ywss"),
      s = a("SPnB"),
      o = a("Bbed"),
      d = a("nlNF"),
      c = a("OWtl"),
      u = a("ynMj")
    let g = (0, o._)(async () => (await a.e(111855).then(a.bind(a, "cTH9"))).SpaceSiteDetails, {
      fallback: (0, l.jsx)(u.V, {}),
      errorFallback: (0, l.jsx)(u.B, {}),
    })
    a.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            a,
            o,
            u,
            p,
            h,
            m = (0, r.c)(21),
            { children: f, inlineCollection: v, href: y, onNavigate: b } = e,
            _ = void 0 !== v && v,
            x = (0, n.gh)(c.u),
            I = (0, i.zy)(),
            w = (0, i.Zp)()
          m[0] !== y || m[1] !== _ || m[2] !== I.pathname || m[3] !== I.search
            ? ((o = new URL(y ?? I.pathname + I.search, "https://chatgpt.com")),
              (t = null),
              _
                ? (t = o.searchParams.get("site_path"))
                : o.pathname.startsWith("/space/sites/") && "/space/sites/" !== o.pathname && (t = o.pathname.slice(6)),
              (a = null == t ? null : (0, i.B6)("/sites/:projectId/*", t)),
              (m[0] = y),
              (m[1] = _),
              (m[2] = I.pathname),
              (m[3] = I.search),
              (m[4] = t),
              (m[5] = a),
              (m[6] = o))
            : ((t = m[4]), (a = m[5]), (o = m[6]))
          let S = a,
            j = _ && null == S ? null : t
          m[7] !== _ || m[8] !== I.state || m[9] !== w || m[10] !== b || m[11] !== x || m[12] !== o
            ? ((u = (e, t) => {
                let a = "/sites/library" === e ? "/sites" : e,
                  l = I.state?.spaceSidebarSiteReturnLocation
                if (
                  !_ &&
                  "/sites" === a &&
                  null != l &&
                  I.state?.spaceSidebarAccountId === x.get(s.chatGptAuthenticatedAccountId$)
                )
                  return void (0, d.nQ)(x, w, l)
                let r = new URLSearchParams(o.search)
                ;("sites" === r.get("view") && r.delete("view"),
                  _ && ("/sites" === a ? r.delete("site_path") : r.set("site_path", a)))
                let n = `${_ ? o.pathname : `/space${a}`}${r.size > 0 ? `?${r}` : ""}`
                null != b ? b(n, t) : w(n, { state: I.state, ...t })
              }),
              (m[7] = _),
              (m[8] = I.state),
              (m[9] = w),
              (m[10] = b),
              (m[11] = x),
              (m[12] = o),
              (m[13] = u))
            : (u = m[13])
          let P = u
          return (
            m[14] !== P || m[15] !== j
              ? ((p = null != j ? (0, l.jsx)(g, { path: j, onNavigate: P }) : null),
                (m[14] = P),
                (m[15] = j),
                (m[16] = p))
              : (p = m[16]),
            m[17] !== f || m[18] !== P || m[19] !== p
              ? ((h = f(P, p)), (m[17] = f), (m[18] = P), (m[19] = p), (m[20] = h))
              : (h = m[20]),
            h
          )
        },
      },
    )
  },
  eM3f(e, t, a) {
    a.a(e, async function (e, l) {
      try {
        var r = a("ABep"),
          n = a("QosV"),
          i = a("SRBo"),
          s = a("QBk8"),
          o = a("qmMi"),
          d = a("zd8w"),
          c = a("v7qY"),
          u = a("Wf1j"),
          g = a("oyxz"),
          p = a("Ywss"),
          h = a("VEyj"),
          m = a("jNL7"),
          f = a("MeAu"),
          v = a("RaBo"),
          y = a("l5Vd"),
          b = a("p690"),
          _ = a("M3lc"),
          x = a("SPnB"),
          I = a("OWcD"),
          w = a("Bbed"),
          S = a("PkPj"),
          j = a("DiyT"),
          P = a("V080"),
          A = a("uNsz"),
          C = a("cGrE"),
          E = a("TCFx"),
          k = a("jU86"),
          M = a("eMKR"),
          T = a("LcBG"),
          O = a("QufO"),
          N = a("FBu8"),
          U = a("fhVa"),
          F = a("XmDk"),
          R = a("dLIb"),
          L = a("JNrZ"),
          D = a("M4Gn"),
          G = a("ORiO"),
          $ = a("QoH2"),
          B = a("NCaE"),
          z = a("AoIz"),
          V = a("heYt"),
          q = a("vGxR"),
          Q = a("u878"),
          H = a("dJBt"),
          W = a("elmM"),
          Y = a("Rj2I"),
          K = a("tSEg"),
          Z = a("V3rO"),
          J = a("khOd"),
          X = a("hZax"),
          ee = a("OMIV"),
          et = a("XXJV"),
          ea = a("moBM"),
          el = a("pZMh"),
          er = a("mroC"),
          en = a("e1xH"),
          ei = a("ynMj"),
          es = a("hVOg"),
          eo = a("ARUL"),
          ed = a("Rlv5"),
          ec = a("lJyx"),
          eu = a("f67h"),
          eg = a("sSEJ"),
          ep = a("VQtk"),
          eh = a("reVW"),
          em = a("tv8P"),
          ef = a("atZq"),
          ev = a("Lowz"),
          ey = a("EWUC"),
          eb = a("FiJQ"),
          e_ = a("D14d"),
          ex = a("nJVl"),
          eI = a("iC9N"),
          ew = a("xt7w"),
          eS = a("Kw4a"),
          ej = a("egOE"),
          eP = a("XPum"),
          eA = a("R0Z4"),
          eC = a("LwtL"),
          eE = a("XgV1"),
          ek = a("l7Ch"),
          eM = a("vcr8"),
          eT = a("rIom"),
          eO = a("HUbZ"),
          eN = a("dLrD"),
          eU = a("CJ4l"),
          eF = a("Waus"),
          eR = a("ReXg"),
          eL = a("SCmN"),
          eD = e([z, F, G, U])
        ;[z, F, G, U] = eD.then ? (await eD)() : eD
        let eY = (0, w._)(async () => (await a.e(828040).then(a.bind(a, "gp3f"))).AssignedTaskList),
          eK = (0, w._)(async () => (await a.e(977756).then(a.bind(a, "c110"))).AssignedTaskFilters),
          eZ = (0, w._)(i.Af),
          eJ = (0, w._)(
            async () =>
              (await Promise.all([a.e(784669), a.e(971172), a.e(739113)]).then(a.bind(a, "Strz"))).SpaceSitesPage,
            { suspendToParent: !0, errorFallback: (0, r.jsx)(ei.B, {}) },
          ),
          eX = (0, w._)(async () => (await Promise.resolve().then(a.bind(a, "Hu8z"))).SlateSpaceCreateMenu)
        function eG(e) {
          let t,
            a,
            l,
            r = (0, n.c)(7),
            { url: i } = e,
            s = (0, o.gh)(k.vn),
            { state: c } = (0, p.zy)()
          if (r[0] !== i) {
            let e = (t = new URL(i)).searchParams.get("pages_tab")
            ;(t.searchParams.delete("view"),
              t.searchParams.delete("pages_tab"),
              t.searchParams.set("category", "pages"),
              "owned" === e || "shared" === e ? t.searchParams.set("tab", "all") : t.searchParams.delete("tab"),
              "shared" === e && (t.pathname = `/space/d/${encodeURIComponent("library:collection:shared-with-me")}`),
              (r[0] = i),
              (r[1] = t))
          } else t = r[1]
          let u = t.pathname + t.search + t.hash
          return (
            r[2] !== u || r[3] !== s || r[4] !== c
              ? ((a = () => {
                  ;(0, k.zl)(s, u, {
                    replace: !0,
                    state: s.value.embedded ? { libraryFolderReturnLocations: s.get(k.xo) } : c,
                  })
                }),
                (l = [s, u, c]),
                (r[2] = u),
                (r[3] = s),
                (r[4] = c),
                (r[5] = a),
                (r[6] = l))
              : ((a = r[5]), (l = r[6])),
            (0, d.useEffect)(a, l),
            null
          )
        }
        function e$(e) {
          let t,
            a,
            l,
            r = (0, n.c)(7),
            { url: i } = e,
            s = (0, o.gh)(k.vn),
            { state: c } = (0, p.zy)()
          if (r[0] !== i) {
            t = new URL(y.Ve, i)
            let e = i.searchParams.get("view")
            for (let [a, l] of (("owned" === e || "shared" === e) && t.searchParams.set("tab", "all"),
            "shared" === e && (t.pathname = `/space/d/${encodeURIComponent("library:collection:shared-with-me")}`),
            i.searchParams))
              ["view", "artifact", "tab", "site_path", "deleted"].includes(a) || t.searchParams.append(a, l)
            ;((r[0] = i), (r[1] = t))
          } else t = r[1]
          let u = t.pathname + t.search + i.hash
          return (
            r[2] !== u || r[3] !== s || r[4] !== c
              ? ((a = () => {
                  ;(0, k.zl)(s, u, {
                    replace: !0,
                    state: s.value.embedded ? { libraryFolderReturnLocations: s.get(k.xo) } : c,
                  })
                }),
                (l = [s, u, c]),
                (r[2] = u),
                (r[3] = s),
                (r[4] = c),
                (r[5] = a),
                (r[6] = l))
              : ((a = r[5]), (l = r[6])),
            (0, d.useEffect)(a, l),
            null
          )
        }
        function eB(e) {
          let t,
            a,
            l,
            i,
            s,
            c,
            u,
            g,
            m = (0, n.c)(33),
            {
              routeScope: f,
              embedded: y,
              isActive: b,
              isVisible: x,
              navigation: w,
              onOpenItem: S,
              onNavigate: j,
              tabId: P,
            } = e,
            A = void 0 !== y && y,
            C = (0, o.gh)(k.vn),
            M = (0, o.Ul)(eP.i)
          ;((0, o._U)(b && x && M ? I.f : null, "space-home"),
            m[0] !== b || m[1] !== x || m[2] !== C
              ? ((t = () => {
                  if (b && x) return (0, eA.s0)(C)
                  x || (0, eA._f)(C)
                }),
                (a = [C, b, x]),
                (m[0] = b),
                (m[1] = x),
                (m[2] = C),
                (m[3] = t),
                (m[4] = a))
              : ((t = m[3]), (a = m[4])),
            (0, d.useEffect)(t, a),
            m[5] !== A || m[6] !== b || m[7] !== x || m[8] !== C
              ? ((l = () => {
                  if (!A || !b || !x) return
                  let e = (0, eo.OK)(C)
                  return () => {
                    let t = C.get(eo.h1)
                    t?.visit === e && t.cancel()
                  }
                }),
                (i = [A, b, x, C]),
                (m[5] = A),
                (m[6] = b),
                (m[7] = x),
                (m[8] = C),
                (m[9] = l),
                (m[10] = i))
              : ((l = m[9]), (i = m[10])),
            (0, d.useLayoutEffect)(l, i))
          let T = (0, X.Zj)("2881922323"),
            O = (0, o.Ul)(en.CY)
          ;(m[11] !== j || m[12] !== C
            ? ((s = () => {
                if (null != j)
                  return (
                    C.set(k.xZ, () => j),
                    () => {
                      C.get(k.xZ) === j && C.set(k.xZ, null)
                    }
                  )
              }),
              (c = [j, C]),
              (m[11] = j),
              (m[12] = C),
              (m[13] = s),
              (m[14] = c))
            : ((s = m[13]), (c = m[14])),
            (0, d.useLayoutEffect)(s, c))
          let N = (0, p.zy)(),
            U = (0, o.Ul)(k.g_),
            F = new URL(U ?? N.pathname + N.search + N.hash, "https://chatgpt.com"),
            R = F.pathname.startsWith("/space/files"),
            L = (0, o.Ul)(en.TV),
            D = F.searchParams.get("view")
          "assigned" === D && (D = null)
          let $ = (0, o.Ul)(en.pagesEnabled$),
            B = "/space"
          "/space/sites" === F.pathname || F.pathname.startsWith("/space/sites/")
            ? ((D = "sites"), (B = "/space/sites"))
            : R && ((D = "files"), (B = "/space/files"))
          let z = N.state,
            q = (0, o.Ul)(k.xo),
            Q = !0 === C.value.mainHome && b && x && "/space" === F.pathname && !F.search,
            H = (0, k.ER)(F.pathname, F.search, B, null == U ? z : { libraryFolderReturnLocations: q }),
            W = (0, o.Ul)(V.Et)
          "slides" === D && (O ? (H.slidesIncludeShared = "available" === W) : (delete H.slidesCollection, (D = null)))
          let Y = (0, o.Ul)(en.jf),
            K = L && null != (0, p.B6)("/space/sites", F.pathname) && "pinned" !== F.searchParams.get("view"),
            Z = K && "shared" === F.searchParams.get("view"),
            J = (0, o.Ul)((!Z && (!L || null != D || "library:collection:shared-with-me" !== H.directoryId)) || v.rf),
            ee =
              L &&
              J &&
              null == D &&
              "sites" === F.searchParams.get("artifact") &&
              !H.deleted &&
              (null == H.directoryId || "library:collection:shared-with-me" === H.directoryId),
            er = H.slidesCollection,
            es = "library:collection:shared-with-me" === H.directoryId || "shared" === er,
            ed = null == D && eV(H, D),
            ec = "/space" === F.pathname && ed,
            eu = $ && ed && ("suggested" === H.tab || "all" === H.tab || "favorites" === H.tab),
            eg = (0, o.Ul)(!1)
          if (
            ((0, d.useEffect)(() => {
              es &&
                "loading" !== W &&
                "available" !== W &&
                (0, k.zl)(C, null != er ? "/space?view=slides" : "/space?tab=all", {
                  expectedUrl: F.pathname + F.search,
                  replace: !0,
                })
            }, [es, C, W, er, F.pathname, F.search]),
            "/space" === F.pathname && "pages" === D)
          )
            return (0, r.jsx)(eG, { url: F })
          if (Z && J && "loading" === W) {
            let e
            return (
              m[15] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(ei.V, {})), (m[15] = e))
                : (e = m[15]),
              e
            )
          }
          if (K && (!Z || (J && "available" === W))) return (0, r.jsx)(e$, { url: F })
          if ("/space" === F.pathname && "templates" === F.searchParams.get("view"))
            return (0, r.jsx)(eQ, {
              category: F.searchParams.get("category"),
              search: F.searchParams.get("search") ?? "",
            })
          if (es && "available" !== W) {
            let e
            return (
              m[16] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(r.Fragment, {})), (m[16] = e))
                : (e = m[16]),
              e
            )
          }
          R &&
            "images" === H.tab &&
            ((D = "images"),
            null != H.directoryId ||
              H.deleted ||
              ((H.imageSourceTabs = !0),
              1 !== H.sources.length && (H.sources = ["generated"]),
              (H.categories = H.search ? ["images"] : [])))
          let ep =
            !R && "sites" !== D && ("suggested" === H.tab || "all" === H.tab) && !H.deleted && (0, E.No)(H.directoryId)
          ;(eu && (H.pageTypeFilter = eg ? "available" : "unavailable"),
            m[17] !== f || m[18] !== C || m[19] !== P || m[20] !== U
              ? ((u = () => {
                  if (C.get(k.g_) !== U) return !1
                  if (null != P) {
                    let e = (0, et.KE)(f, P)
                    return null != e && f.get((0, et.getThreadPanelTabController)(e).activeTab$)?.tabId === P
                  }
                  return "chat" === f.get(el.Em) && !f.get(ea.JJ)
                }),
                (m[17] = f),
                (m[18] = C),
                (m[19] = P),
                (m[20] = U),
                (m[21] = u))
              : (u = m[21]))
          let eh = u,
            em =
              !H.deleted &&
              ("suggested" === H.tab || "all" === H.tab || "recent" === H.tab) &&
              "sites" !== D &&
              !ee &&
              (eV(H, D) || ("/space" === B && null != H.directoryId)),
            ef = "suggested" === H.tab ? "all" : "your_items",
            ev = Y && "assigned" !== F.searchParams.get("view") ? (0, ex.Qv)(H, F.pathname, F.searchParams) : null,
            ey = null != ev ? `space-collection:${ev}` : JSON.stringify([F.pathname, D, H.tab, H.directoryId]),
            eb = (e, t) =>
              (0, r.jsxs)(o.Ui, {
                scope: k.Qy,
                value: {
                  ...H,
                  entrySurface: "spaces",
                  supportsStructuredGrid: em,
                  includePages: ep,
                  sources: (0, ex.MU)(H, ep),
                  defaultViewMode: "list",
                  includeSites: T && !R && "files" !== D && "sites" !== D,
                  includePinnedSites: !R && "files" !== D && "sites" !== D,
                },
                children: [
                  (0, r.jsx)(eq, { active: t }),
                  (0, r.jsxs)(h.Y, {
                    mode: t ? "visible" : "hidden",
                    children: [
                      t &&
                        b &&
                        x &&
                        null == D &&
                        "assigned" !== F.searchParams.get("view") &&
                        ep &&
                        (null == H.directoryId || es) &&
                        (0, r.jsx)("span", { hidden: !0, "data-drive-collection": es ? "shared_with_you" : ef }),
                      (0, r.jsx)(eH, {
                        inlineSites: ee,
                        trackHomeClick: Q && t,
                        collectionHref: t && b && x ? F.pathname + F.search : void 0,
                        embedded: A,
                        isVisible: x,
                        navigation: w,
                        view: D,
                        url: F,
                        routeScope: f,
                        tabId: P,
                        onOpenItem: e,
                        isCurrent: A ? eh : void 0,
                      }),
                      (0, r.jsx)(eN.M, {
                        href: F.pathname + F.search,
                        onNavigate: (e, t) => (0, k.zl)(C, e, { state: N.state, ...t }),
                        children: (e) => (0, r.jsx)(_.O, { routeScope: f, isVisible: x, onNavigateToSite: e }),
                      }),
                    ],
                  }),
                ],
              })
          return (
            m[22] !== A ||
            m[23] !== eh ||
            m[24] !== S ||
            m[25] !== eb ||
            m[26] !== ec ||
            m[27] !== f ||
            m[28] !== C.value.accountId ||
            m[29] !== C.value.userId ||
            m[30] !== ey ||
            m[31] !== P
              ? ((g = A
                  ? (0, r.jsx)(G.u, {
                      routeScope: f,
                      isCurrent: eh,
                      tabId: P,
                      children: (e) =>
                        (0, r.jsx)(
                          ez,
                          { retain: ec, href: ey, children: (t) => eb(e, t) },
                          JSON.stringify([C.value.accountId, C.value.userId]),
                        ),
                    })
                  : (0, r.jsx)(
                      ez,
                      { retain: ec, href: ey, children: (e) => eb(S, e) },
                      JSON.stringify([C.value.accountId, C.value.userId]),
                    )),
                (m[22] = A),
                (m[23] = eh),
                (m[24] = S),
                (m[25] = eb),
                (m[26] = ec),
                (m[27] = f),
                (m[28] = C.value.accountId),
                (m[29] = C.value.userId),
                (m[30] = ey),
                (m[31] = P),
                (m[32] = g))
              : (g = m[32]),
            g
          )
        }
        function ez(e) {
          let t,
            a,
            l,
            i,
            s,
            o,
            c = (0, n.c)(14),
            { retain: u, href: g, children: p } = e
          c[0] !== p || c[1] !== g
            ? ((t = () => ({ href: g, children: p, views: [{ href: g, children: p }] })),
              (c[0] = p),
              (c[1] = g),
              (c[2] = t))
            : (t = c[2])
          let [h, m] = (0, d.useState)(t)
          if (h.href !== g || h.children !== p) {
            let e = [{ href: g, children: p }]
            ;(u &&
              (e = h.views.some((e) => e.href === g)
                ? h.views.map((e) => (e.href === g ? { href: g, children: p } : e))
                : [...h.views.filter((e) => e.href === h.href), { href: g, children: p }]),
              m({ href: g, children: p, views: e }))
          }
          let f = (0, d.useRef)(null),
            v = (0, d.useRef)(!1)
          if (
            (c[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = () => {
                  if (v.current) {
                    let e = f.current?.querySelector('[data-active-section="true"] [role="tab"][aria-selected="true"]')
                    ;(e?.focus({ preventScroll: !0 }), e?.scrollIntoView({ block: "nearest", inline: "nearest" }))
                  }
                }),
                (c[3] = a))
              : (a = c[3]),
            c[4] !== g ? ((l = [g]), (c[4] = g), (c[5] = l)) : (l = c[5]),
            (0, d.useLayoutEffect)(a, l),
            c[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = (e) => {
                  v.current = null != e.target.closest('[role="tab"]')
                }),
                (c[6] = i))
              : (i = c[6]),
            c[7] !== h.views || c[8] !== g)
          ) {
            let e
            ;(c[10] !== g
              ? ((e = (e) =>
                  (0, r.jsxs)(
                    d.Fragment,
                    {
                      children: [
                        (0, r.jsx)(Y.A, {
                          active: e.href === g,
                          ttlSeconds: 600,
                          onExpire: () =>
                            m((t) => ({ ...t, views: t.views.filter((a) => a.href === t.href || a.href !== e.href) })),
                        }),
                        (0, r.jsx)("div", {
                          className: "contents",
                          "data-active-section": e.href === g,
                          children: e.children(e.href === g),
                        }),
                      ],
                    },
                    e.href,
                  )),
                (c[10] = g),
                (c[11] = e))
              : (e = c[11]),
              (s = h.views.map(e)),
              (c[7] = h.views),
              (c[8] = g),
              (c[9] = s))
          } else s = c[9]
          return (
            c[12] !== s
              ? ((o = (0, r.jsx)("div", { className: "contents", ref: f, onFocusCapture: i, children: s })),
                (c[12] = s),
                (c[13] = o))
              : (o = c[13]),
            o
          )
        }
        function eV(e, t) {
          return (
            !("slides" === t && (0, eF.D)(e)) &&
            "images" !== t &&
            "files" !== t &&
            !e.deleted &&
            (null == e.directoryId || "library:collection:shared-with-me" === e.directoryId)
          )
        }
        function eq(e) {
          let t,
            a,
            l = (0, n.c)(4),
            { active: r } = e,
            i = (0, o.gh)(k.Qy)
          return (
            l[0] !== r || l[1] !== i
              ? ((t = () => {
                  !r && i.get(B.oe).size > 0 && i.set(B.oe, new Set())
                }),
                (a = [r, i]),
                (l[0] = r),
                (l[1] = i),
                (l[2] = t),
                (l[3] = a))
              : ((t = l[2]), (a = l[3])),
            (0, d.useLayoutEffect)(t, a),
            null
          )
        }
        function eQ(e) {
          let t,
            a,
            l,
            i,
            s = (0, n.c)(11),
            { category: c, search: u } = e,
            g = (0, o.gh)(k.vn),
            p = (0, X.Zj)("183803860"),
            h = (0, X.DR)("183803860")
          return (s[0] !== p || s[1] !== h || s[2] !== g
            ? ((t = () => {
                p || h || (0, k.zl)(g, "/space", { replace: !0 })
              }),
              (a = [p, h, g]),
              (s[0] = p),
              (s[1] = h),
              (s[2] = g),
              (s[3] = t),
              (s[4] = a))
            : ((t = s[3]), (a = s[4])),
          (0, d.useEffect)(t, a),
          p)
            ? (s[5] !== g
                ? ((l = (e, t) => {
                    let a = new URLSearchParams({ view: "templates" })
                    ;(e && a.set("category", e), t && a.set("search", t), (0, k.zl)(g, `/space?${a}`, { replace: !0 }))
                  }),
                  (s[5] = g),
                  (s[6] = l))
                : (l = s[6]),
              s[7] !== c || s[8] !== u || s[9] !== l
                ? ((i = (0, r.jsx)(eZ, { category: c, search: u, onNavigate: l })),
                  (s[7] = c),
                  (s[8] = u),
                  (s[9] = l),
                  (s[10] = i))
                : (i = s[10]),
              i)
            : null
        }
        function eH(e) {
          let t,
            a,
            l,
            i,
            h,
            m,
            v,
            y,
            _,
            I,
            w,
            M,
            F,
            G,
            $,
            B,
            z,
            V,
            Y,
            X,
            et,
            ea,
            el,
            eg,
            ef,
            ev,
            eS,
            eP,
            eR,
            eL = (0, n.c)(199),
            {
              routeScope: eD,
              tabId: eG,
              embedded: e$,
              isVisible: eB,
              trackHomeClick: ez,
              inlineSites: eq,
              collectionHref: eQ,
              navigation: eH,
              view: eZ,
              url: e0,
              onOpenItem: e1,
              isCurrent: e2,
            } = e,
            e3 = (0, o.gh)(k.Qy),
            e4 = ez ? e3.get(ec.a)?.startRender() : void 0,
            e6 = (0, u.A)(),
            e5 = (0, p.zy)(),
            e8 = (0, o.Ul)(en.TV),
            e7 = (0, o.Ul)(en.pagesEnabled$),
            e9 = (0, o.Ul)(eq && null != eQ ? eA.J8 : null)
          eL[0] !== eq ||
          eL[1] !== eZ ||
          eL[2] !== e3.value.deleted ||
          eL[3] !== e3.value.directoryId ||
          eL[4] !== e0.searchParams
            ? ((t =
                !eq &&
                null == eZ &&
                !e3.value.deleted &&
                "library:collection:shared-with-me" === e3.value.directoryId &&
                "sites" === e0.searchParams.get("artifact")),
              (eL[0] = eq),
              (eL[1] = eZ),
              (eL[2] = e3.value.deleted),
              (eL[3] = e3.value.directoryId),
              (eL[4] = e0.searchParams),
              (eL[5] = t))
            : (t = eL[5])
          let te = t,
            tt = (0, o._U)(te ? ee.dx : null, e8 ? "476199071" : "1244723012")
          ;(eL[6] !== eQ || eL[7] !== e2 || eL[8] !== e3 || eL[9] !== te || eL[10] !== tt
            ? ((a = () => {
                if (!te || tt || null == eQ || e2?.() === !1) return
                let e = e3.get(eo.h1)
                e?.visit === (0, eo.OK)(e3) && e.targetHref === (0, eo.gK)(eQ) && e.cancel("eligibility_denied")
              }),
              (l = [eQ, e2, e3, te, tt]),
              (eL[6] = eQ),
              (eL[7] = e2),
              (eL[8] = e3),
              (eL[9] = te),
              (eL[10] = tt),
              (eL[11] = a),
              (eL[12] = l))
            : ((a = eL[11]), (l = eL[12])),
            (0, d.useEffect)(a, l),
            eL[13] !== e7 || eL[14] !== eZ || eL[15] !== e3.value.tab || eL[16] !== e0.pathname
              ? ((i =
                  e7 &&
                  null == eZ &&
                  (0, eh.GD)(e0.pathname) &&
                  ("images" === e3.value.tab || "folders" === e3.value.tab)),
                (eL[13] = e7),
                (eL[14] = eZ),
                (eL[15] = e3.value.tab),
                (eL[16] = e0.pathname),
                (eL[17] = i))
              : (i = eL[17]))
          let ta = i,
            tl = eZ
          eq ? (tl = "sites") : ta && (tl = "files")
          let tr = (0, o.Ul)("sites" === tl ? b.x : k.YH),
            tn = (0, o.Ul)(null != eQ && !!e3.value.includePages && "grid" === tr && en.wr)
          ;(eL[18] !== tn
            ? ((h = () => {
                tn && ep.I.prefetch()
              }),
              (m = [tn]),
              (eL[18] = tn),
              (eL[19] = h),
              (eL[20] = m))
            : ((h = eL[19]), (m = eL[20])),
            (0, d.useEffect)(h, m))
          let ti = (0, o.Ul)(!!eq && "grid" === tr && O.sd),
            ts = (0, o.Ul)(k.eY),
            [to, td] = (0, d.useState)(null),
            tc = (0, o.Ul)(J.GB),
            tu = (0, o.Ul)(en.CY)
          eL[21] !== tu || eL[22] !== e3.value || eL[23] !== tl
            ? ((v = tu && "slides" === tl && (0, eF.D)(e3.value)),
              (eL[21] = tu),
              (eL[22] = e3.value),
              (eL[23] = tl),
              (eL[24] = v))
            : (v = eL[24])
          let tg = v,
            tp =
              e7 &&
              (null == tl || eq) &&
              !e3.value.deleted &&
              (null == e3.value.directoryId || "library:collection:shared-with-me" === e3.value.directoryId),
            th = (0, o.Ul)(!!tp && null != eQ && ew.U),
            tm = tp && "/space" === e3.value.basePath && null == e3.value.directoryId && "suggested" === e3.value.tab,
            tf = (0, o.Ul)(!!tm && en.K8),
            tv = (0, o.Ul)(tf && null != eQ ? er.kA : void 0)
          eL[25] !== tf || eL[26] !== e0.searchParams
            ? ((y = tf && "assigned" === e0.searchParams.get("view")),
              (eL[25] = tf),
              (eL[26] = e0.searchParams),
              (eL[27] = y))
            : (y = eL[27])
          let ty = y,
            tb = (0, o._U)(ty && null != eQ ? er.iR : null, `${e5.key}:${e0.pathname}${e0.search}`)
          eL[28] !== tb
            ? ((_ = tb?.isSuccess === !0 && tb.isFetchedAfterMount && !tb.isFetching && !tb.data.pages.some(eW)),
              (eL[28] = tb),
              (eL[29] = _))
            : (_ = eL[29])
          let t_ = _,
            tx = !0 === tv || ty
          ;(eL[30] !== t_ || eL[31] !== e3 || eL[32] !== e0.pathname || eL[33] !== e0.search
            ? ((I = () => {
                t_ && (0, k.zl)(e3, "/space", { expectedUrl: e0.pathname + e0.search, replace: !0 })
              }),
              (w = [t_, e3, e0.pathname, e0.search]),
              (eL[30] = t_),
              (eL[31] = e3),
              (eL[32] = e0.pathname),
              (eL[33] = e0.search),
              (eL[34] = I),
              (eL[35] = w))
            : ((I = eL[34]), (w = eL[35])),
            (0, d.useEffect)(I, w))
          let [tI, tw] = (0, d.useState)("all"),
            [tS, tj] = (0, d.useState)("all"),
            [tP, tA] = (0, d.useState)(""),
            tC = e0.pathname + e0.search
          ;(eL[36] !== e$ || eL[37] !== eB || eL[38] !== e3 || eL[39] !== tp || eL[40] !== tC
            ? ((M = () => {
                if (!tp || e$ || !eB) return
                let e = (e, t) => {
                  t === tC &&
                    e3.value.accountId === e3.get(x.chatGptAuthenticatedAccountId$) &&
                    e3.value.userId === e3.get(x.chatGptAuthenticatedUserId$) &&
                    ("clear-filters" === e
                      ? (e3.value.categories.length > 0 && (0, C.np)(e3, { fileTypes: [] }),
                        e3.value.sources.length > 0 && (0, C.np)(e3, { sources: [] }))
                      : (0, C.np)(e3, { category: e }))
                }
                return (
                  e3.set(e_.t, () => e),
                  () => {
                    e3.get(e_.t) === e && e3.set(e_.t, null)
                  }
                )
              }),
              (F = [e$, eB, e3, tp, tC]),
              (eL[36] = e$),
              (eL[37] = eB),
              (eL[38] = e3),
              (eL[39] = tp),
              (eL[40] = tC),
              (eL[41] = M),
              (eL[42] = F))
            : ((M = eL[41]), (F = eL[42])),
            (0, d.useEffect)(M, F))
          let tE = (0, o.Ul)(q.uw),
            tk = (0, o.Ul)(!tE && q.wh)
          eL[43] !== e6
            ? ((G = e6.formatMessage({ id: "space.list.searchPlaceholder", defaultMessage: "Search" })),
              (eL[43] = e6),
              (eL[44] = G))
            : (G = eL[44])
          let tM = G
          eL[45] !== e3.value.basePath || eL[46] !== e3.value.directoryId
            ? (($ =
                null != e3.value.directoryId && (0, A.Tf)(e3.value.directoryId, e3.value.basePath)
                  ? e3.value.directoryId
                  : void 0),
              (eL[45] = e3.value.basePath),
              (eL[46] = e3.value.directoryId),
              (eL[47] = $))
            : ($ = eL[47])
          let tT = $,
            tO = null
          if (tE && !e3.value.deleted && (null == e3.value.directoryId || "native" === (0, E.oh)(e3.value.directoryId)))
            if (tg) {
              let e
              ;(eL[48] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(eX, { action: "slides" })), (eL[48] = e))
                : (e = eL[48]),
                (tO = e))
            } else if (null == tl && "/space" === e0.pathname) {
              let e
              ;(eL[49] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(eX, {})), (eL[49] = e))
                : (e = eL[49]),
                (tO = e))
            } else if (tc)
              if ("images" === tl) {
                let e
                ;(eL[51] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(eX, { action: "images" })), (eL[51] = e))
                  : (e = eL[51]),
                  (tO = e))
              } else if (
                "sites" === tl ||
                (null == tl &&
                  (null == e3.value.directoryId || "library:collection:shared-with-me" === e3.value.directoryId))
              ) {
                let e
                ;(eL[52] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, r.jsx)(eX, {})), (eL[52] = e))
                  : (e = eL[52]),
                  (tO = e))
              } else if (null == tl && null != tT) {
                let e
                ;(eL[53] !== tT
                  ? ((e = (0, r.jsx)(eX, { parentFolderId: tT })), (eL[53] = tT), (eL[54] = e))
                  : (e = eL[54]),
                  (tO = e))
              } else {
                let e,
                  t = null == tl ? "space" : void 0
                ;(eL[55] !== t
                  ? ((e = (0, r.jsx)(P.Rr, { variant: t, compactOnMobile: !0, showNote: !1 })),
                    (eL[55] = t),
                    (eL[56] = e))
                  : (e = eL[56]),
                  (tO = e))
              }
            else {
              let e
              ;(eL[50] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, r.jsx)(P.Rr, { showNote: !1 })), (eL[50] = e))
                : (e = eL[50]),
                (tO = e))
            }
          if (tk && (null == tl || "files" === tl)) {
            let e
            ;(eL[57] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(P.JA, {})), (eL[57] = e))
              : (e = eL[57]),
              (tO = e))
          }
          ;(eL[58] !== tc || eL[59] !== e2 || eL[60] !== eH?.onOpenPage
            ? ((B = tc ? null : (0, r.jsx)(Q.F, { onOpenPage: eH?.onOpenPage, isCurrent: e2 })),
              (eL[58] = tc),
              (eL[59] = e2),
              (eL[60] = eH?.onOpenPage),
              (eL[61] = B))
            : (B = eL[61]),
            eL[62] !== tO || eL[63] !== B
              ? ((z = (0, r.jsxs)(r.Fragment, { children: [tO, B] })), (eL[62] = tO), (eL[63] = B), (eL[64] = z))
              : (z = eL[64]))
          let tN = z,
            tU = tp ? (0, ex.Qv)(e3.value, e0.pathname, e0.searchParams) : null,
            tF = (0, o.Ul)(en.jf),
            tR = !tF || null == tU || ty ? null : (0, eT.L)(e3.value, eq),
            tL = (0, o.Ul)(null != tR ? eM.Iz : null),
            tD =
              null != tR && tL?.some((e) => e.href === tR && (e.id ?? e.href) === e5.state?.spacePinnedFilterId) === !0
          eL[65] !== tR || eL[66] !== tL
            ? ((V =
                null != tR && null != tL ? (0, r.jsx)(ek.C, { href: tR, saved: tL.some((e) => e.href === tR) }) : null),
              (eL[65] = tR),
              (eL[66] = tL),
              (eL[67] = V))
            : (V = eL[67])
          let tG = V
          eL[68] !== tG
            ? ((Y = tG && (0, r.jsxs)(r.Fragment, { children: [tG, (0, r.jsx)(f.Ow, {})] })),
              (eL[68] = tG),
              (eL[69] = Y))
            : (Y = eL[69])
          let t$ = Y
          if (e3.value.deleted) X = (0, r.jsx)(g.A, { id: "libraryNext.title.trash", defaultMessage: "Trash" })
          else if (
            null != e3.value.directoryId &&
            ("files" === tl || "library:collection:shared-with-me" !== e3.value.directoryId)
          ) {
            let e
            ;(eL[70] !== e6 || eL[71] !== tl
              ? ((e =
                  "files" === tl
                    ? e6.formatMessage({ id: "codex.space.files.title", defaultMessage: "Files" })
                    : e6.formatMessage({ id: "space.home.allTitle", defaultMessage: "All" })),
                (eL[70] = e6),
                (eL[71] = tl),
                (eL[72] = e))
              : (e = eL[72]),
              (X = (0, r.jsx)(D.e9, { rootName: e })))
          } else if (null != tU) {
            let e = e3.value.categories
            if (eq) {
              let t
              ;(eL[73] === Symbol.for("react.memo_cache_sentinel") ? ((t = ["sites"]), (eL[73] = t)) : (t = eL[73]),
                (e = t))
            }
            let t = "favorites" === e3.value.tab,
              a =
                ex.YO.find((e) => {
                  let { key: t } = e
                  return t === tU
                }) ?? ex.YO["0"]
            X = (0, r.jsx)(r.Fragment, {
              children:
                tF && ("suggested" !== tU || tD) && (e.length > 0 || t)
                  ? (0, ex.eL)(e6, t ? "favorites" : tU, e)
                  : (0, r.jsx)(g.A, { ...a.message }),
            })
          } else
            X = tg
              ? (0, r.jsx)(g.A, { id: "space.home.slidesTitle", defaultMessage: "Slides" })
              : "sites" !== tl || eq
                ? "images" === tl
                  ? (0, r.jsx)(g.A, { id: "libraryNext.filters.images", defaultMessage: "Images" })
                  : "files" === tl
                    ? (0, r.jsx)(g.A, { id: "codex.space.files.title", defaultMessage: "Files" })
                    : (0, r.jsx)(g.A, { id: "space.home.allTitle", defaultMessage: "All" })
                : (0, r.jsx)(g.A, { id: "codex.space.sites.title", defaultMessage: "Sites" })
          if ("sites" === tl) {
            let e, t, a, l, n, i, u, p
            if (eL[75] !== eq || eL[76] !== e3.value.directoryId || eL[77] !== e3.value.tab) {
              let a
              ;(eL[80] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = (0, r.jsx)("div", { ref: td, className: "contents" })), (eL[80] = a))
                : (a = eL[80]),
                (e = a),
                eq &&
                  ((t = "all"),
                  "library:collection:shared-with-me" === e3.value.directoryId
                    ? (t = "shared")
                    : ("all" === e3.value.tab || "favorites" === e3.value.tab) && (t = "owned")),
                (eL[75] = eq),
                (eL[76] = e3.value.directoryId),
                (eL[77] = e3.value.tab),
                (eL[78] = e),
                (eL[79] = t))
            } else ((e = eL[78]), (t = eL[79]))
            eL[81] !== e6
              ? ((a = e6.formatMessage({ id: "appgenPage.sites.search", defaultMessage: "Search sites" })),
                (eL[81] = e6),
                (eL[82] = a))
              : (a = eL[82])
            let h = a
            eL[83] !== e3 ? ((l = e3.get(em.spaceAccountId$)), (eL[83] = e3), (eL[84] = l)) : (l = eL[84])
            let m = l,
              f = e5.state?.spaceSidebarAccountId === m ? e5.state : null
            eL[85] !== m ||
            eL[86] !== e ||
            eL[87] !== eQ ||
            eL[88] !== t ||
            eL[89] !== e$ ||
            eL[90] !== tc ||
            eL[91] !== e9 ||
            eL[92] !== eq ||
            eL[93] !== e2 ||
            eL[94] !== eB ||
            eL[95] !== e5.state ||
            eL[96] !== f?.spaceSidebarRootPageId ||
            eL[97] !== eD ||
            eL[98] !== e3 ||
            eL[99] !== tx ||
            eL[100] !== th ||
            eL[101] !== t$ ||
            eL[102] !== h ||
            eL[103] !== ti ||
            eL[104] !== X ||
            eL[105] !== e0 ||
            eL[106] !== tr
              ? ((n = (a) =>
                  (0, r.jsx)(o.Ui, {
                    scope: Z.l7,
                    value: eD.getOwnValue(Z.l7),
                    children: (0, r.jsx)(o.Ui, {
                      scope: K.GD,
                      value: eD.getOwnValue(K.GD),
                      children: (0, r.jsx)(d.Suspense, {
                        fallback: eq
                          ? (0, r.jsx)(R.WI, {
                              title: X,
                              navigation: (0, r.jsx)("div", {
                                className: "w-full",
                                children: (0, r.jsxs)(S.uC, {
                                  inset: !1,
                                  wrap: !0,
                                  children: [
                                    (0, r.jsx)("div", {
                                      className: "min-w-0 flex-auto overflow-x-auto",
                                      children: (0, r.jsx)(eb.h, {
                                        scope: e3,
                                        showFavorites: th,
                                        sitesSelected: !0,
                                        assignmentsEnabled: tx,
                                      }),
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "flex shrink-0 items-center gap-1",
                                      children: [t$, (0, r.jsx)(R.E2, { value: tr, disabled: !0 })],
                                    }),
                                  ],
                                }),
                              }),
                              controls: (0, r.jsx)(R.Pu, {
                                fixedSearchWidth: !0,
                                showViewToggle: !1,
                                searchPlaceholder: h,
                                searchLabel: h,
                                searchQuery: e0.searchParams.get("search") ?? "",
                                searchMaxLength: 200,
                                onSearchQueryChange: (e) => {
                                  let t = new URL(e0)
                                  ;(e ? t.searchParams.set("search", e) : t.searchParams.delete("search"),
                                    (0, k.zl)(e3, t.pathname + t.search, { replace: !0, state: e5.state }))
                                },
                                actions: e,
                              }),
                              children:
                                "grid" === tr
                                  ? (0, r.jsx)(T.oH, { square: !0, layout: ti ? "uniform" : void 0 })
                                  : (0, r.jsx)(N.SA, {
                                      rowCount: 7,
                                      loadingLabel: (0, r.jsx)(g.A, {
                                        id: "appgenPage.loading",
                                        defaultMessage: "Loading sites",
                                      }),
                                    }),
                            })
                          : (0, r.jsx)(ei.V, {}),
                        children: (0, r.jsx)(eJ, {
                          renderResultPaint:
                            null != eQ &&
                            null != t &&
                            e3.value.accountId === e3.get(x.chatGptAuthenticatedAccountId$) &&
                            (null == e3.value.userId || e3.value.userId === e3.get(x.chatGptAuthenticatedUserId$))
                              ? (e) =>
                                  (0, r.jsxs)(r.Fragment, {
                                    children: [
                                      !e$ &&
                                        (0, r.jsx)(es.B, {
                                          ready: "populated" === e || "empty" === e,
                                          failed: "error" === e,
                                        }),
                                      null != e9 &&
                                        (0, r.jsx)(
                                          H.X,
                                          {
                                            paintIdentity: e9,
                                            requireVisibleAtPaint: !0,
                                            onPaint: () => {
                                              e2?.() !== !1 &&
                                                (0, ej.H9)(e3, e9.owner) &&
                                                (0, ej.dX)(
                                                  e3,
                                                  "populated" === e || "empty" === e
                                                    ? s.CodexSpacesHomeRankingOutcome
                                                        .CODEX_SPACES_HOME_RANKING_OUTCOME_SUCCESS
                                                    : s.CodexSpacesHomeRankingOutcome
                                                        .CODEX_SPACES_HOME_RANKING_OUTCOME_FAILURE,
                                                )
                                            },
                                          },
                                          e,
                                        ),
                                      (0, r.jsx)(ed.D, { visit: (0, eo.OK)(e3), href: eQ, state: e, isCurrent: e2 }),
                                    ],
                                  })
                              : void 0,
                          isVisible: eB,
                          collectionNavigation: {
                            href: eq ? e0.pathname + e0.search : "/space/sites" + e0.search,
                            view: t,
                            onNavigate: (e, t) => (0, k.zl)(e3, e, { state: e5.state, ...t }),
                            state: tc
                              ? {
                                  sidebarArea: "space",
                                  spaceSidebarAccountId: m ?? void 0,
                                  spaceSidebarRootPageId: f?.spaceSidebarRootPageId,
                                }
                              : void 0,
                          },
                          onNavigateToSite: a,
                          renderLayout: (t) => {
                            let {
                              tabs: a,
                              children: l,
                              searchQuery: n,
                              onSearchQueryChange: i,
                              searchPlaceholder: s,
                              searchMaxLength: o,
                              viewMode: d,
                              onViewModeChange: c,
                            } = t
                            return (0, r.jsx)(R.WI, {
                              title: X,
                              navigation: (0, r.jsx)("div", {
                                className: "w-full",
                                children: (0, r.jsxs)(S.uC, {
                                  inset: !1,
                                  wrap: !0,
                                  children: [
                                    (0, r.jsx)("div", {
                                      className: "min-w-0 flex-auto overflow-x-auto",
                                      children: eq
                                        ? (0, r.jsx)(eb.h, {
                                            scope: e3,
                                            showFavorites: th,
                                            sitesSelected: !0,
                                            assignmentsEnabled: tx,
                                          })
                                        : a,
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "flex shrink-0 items-center gap-1",
                                      children: [t$, (0, r.jsx)(R.E2, { value: d, onChange: c })],
                                    }),
                                  ],
                                }),
                              }),
                              controls: (0, r.jsx)(R.Pu, {
                                fixedSearchWidth: !0,
                                showViewToggle: !1,
                                searchPlaceholder: s,
                                searchLabel: s,
                                searchQuery: n,
                                searchMaxLength: o,
                                onSearchQueryChange: i,
                                actions: e,
                              }),
                              children: l,
                            })
                          },
                        }),
                      }),
                    }),
                  })),
                (eL[85] = m),
                (eL[86] = e),
                (eL[87] = eQ),
                (eL[88] = t),
                (eL[89] = e$),
                (eL[90] = tc),
                (eL[91] = e9),
                (eL[92] = eq),
                (eL[93] = e2),
                (eL[94] = eB),
                (eL[95] = e5.state),
                (eL[96] = f?.spaceSidebarRootPageId),
                (eL[97] = eD),
                (eL[98] = e3),
                (eL[99] = tx),
                (eL[100] = th),
                (eL[101] = t$),
                (eL[102] = h),
                (eL[103] = ti),
                (eL[104] = X),
                (eL[105] = e0),
                (eL[106] = tr),
                (eL[107] = n))
              : (n = eL[107])
            let v = n,
              y = e0.pathname + e0.search
            return (
              eL[108] !== e5.state || eL[109] !== e3
                ? ((i = (e, t) => (0, k.zl)(e3, e, { state: e5.state, ...t })),
                  (eL[108] = e5.state),
                  (eL[109] = e3),
                  (eL[110] = i))
                : (i = eL[110]),
              eL[111] !== tN || eL[112] !== v || eL[113] !== eD || eL[114] !== to
                ? ((u = (e, t) =>
                    null == t
                      ? (0, r.jsxs)(r.Fragment, { children: [v(e), to && (0, c.createPortal)(tN, to)] })
                      : (0, r.jsx)(o.Ui, {
                          scope: Z.l7,
                          value: eD.getOwnValue(Z.l7),
                          children: (0, r.jsx)(o.Ui, { scope: K.GD, value: eD.getOwnValue(K.GD), children: t }),
                        })),
                  (eL[111] = tN),
                  (eL[112] = v),
                  (eL[113] = eD),
                  (eL[114] = to),
                  (eL[115] = u))
                : (u = eL[115]),
              eL[116] !== eq || eL[117] !== y || eL[118] !== i || eL[119] !== u
                ? ((p = (0, r.jsx)(eN.M, { inlineCollection: eq, href: y, onNavigate: i, children: u })),
                  (eL[116] = eq),
                  (eL[117] = y),
                  (eL[118] = i),
                  (eL[119] = u),
                  (eL[120] = p))
                : (p = eL[120]),
              p
            )
          }
          let tB = !0 === e3.value.imageSourceTabs
          eL[121] !== e3.value || eL[122] !== tp || eL[123] !== ty || eL[124] !== tB
            ? ((et = !ty && !tB && (!tp || (0, k.cZ)(e3.value))),
              (eL[121] = e3.value),
              (eL[122] = tp),
              (eL[123] = ty),
              (eL[124] = tB),
              (eL[125] = et))
            : (et = eL[125])
          let tz = et
          eL[126] !== e3.value || eL[127] !== tz
            ? ((ea = tz && (0, k.BG)(e3.value)), (eL[126] = e3.value), (eL[127] = tz), (eL[128] = ea))
            : (ea = eL[128])
          let tV = ea
          eL[129] !== e3.value.basePath || eL[130] !== e3.value.deleted || eL[131] !== e3.value.directoryId
            ? ((el =
                "/space" === e3.value.basePath &&
                !e3.value.deleted &&
                ((0, E.vM)(e3.value.directoryId) || (0, E.$n)(e3.value.directoryId))),
              (eL[129] = e3.value.basePath),
              (eL[130] = e3.value.deleted),
              (eL[131] = e3.value.directoryId),
              (eL[132] = el))
            : (el = eL[132])
          let tq = el,
            tQ = tq || eV(e3.value, tl)
          if (tp) {
            let e
            ;(eL[133] !== e3 || eL[134] !== tx || eL[135] !== ty || eL[136] !== th
              ? ((e = (0, r.jsx)(eb.h, {
                  scope: e3,
                  showFavorites: th,
                  assignmentsEnabled: tx,
                  assignmentsSelected: ty,
                })),
                (eL[133] = e3),
                (eL[134] = tx),
                (eL[135] = ty),
                (eL[136] = th),
                (eL[137] = e))
              : (e = eL[137]),
              (eg = e))
          } else if (tg) {
            let e
            ;(eL[138] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(eU.i, {})), (eL[138] = e))
              : (e = eL[138]),
              (eg = e))
          } else if ("images" === tl && tB) {
            let e
            ;(eL[139] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(eC.c, {})), (eL[139] = e))
              : (e = eL[139]),
              (eg = e))
          } else if (!tg && !tQ && !e3.value.deleted && (!e3.value.search || ta) && null == e3.value.directoryId) {
            let e, t, a
            ;(eL[140] !== e3
              ? ((e = (e) => (0, C.np)(e3, { category: e })),
                (t = (e) => (0, k.zl)(e3, e)),
                (eL[140] = e3),
                (eL[141] = e),
                (eL[142] = t))
              : ((e = eL[141]), (t = eL[142])),
              eL[143] !== ta || eL[144] !== e3.value || eL[145] !== e || eL[146] !== t
                ? ((a = (0, r.jsx)(D.I2, {
                    basePath: e3.value.basePath,
                    browseLocation: e3.value,
                    selectedKey: e3.value.tab,
                    preserveSearch: ta,
                    onFileTabSelect: e,
                    onNavigate: t,
                  })),
                  (eL[143] = ta),
                  (eL[144] = e3.value),
                  (eL[145] = e),
                  (eL[146] = t),
                  (eL[147] = a))
                : (a = eL[147]),
              (eg = a))
          }
          eL[148] !== tN || eL[149] !== tP || eL[150] !== tM || eL[151] !== ty
            ? ((ef = ty
                ? (0, r.jsx)(R.Pu, {
                    fixedSearchWidth: !0,
                    showViewToggle: !1,
                    searchQuery: tP,
                    onSearchQueryChange: tA,
                    searchPlaceholder: tM,
                    searchLabel: tM,
                  })
                : (0, r.jsx)(D.pH, { showBrowseControls: !1, searchPlaceholder: tM, searchLabel: tM, actions: tN })),
              (eL[148] = tN),
              (eL[149] = tP),
              (eL[150] = tM),
              (eL[151] = ty),
              (eL[152] = ef))
            : (ef = eL[152])
          let tH = ef
          ;(e4?.(),
            eL[153] !== e$ || eL[154] !== eD || eL[155] !== eG
              ? ((ev = e$ ? () => (0, ey.E)(eD, eG ?? null) : void 0),
                (eL[153] = e$),
                (eL[154] = eD),
                (eL[155] = eG),
                (eL[156] = ev))
              : (ev = eL[156]))
          let tW = e3.value.deleted ? void 0 : tH
          return (
            eL[157] !== tS ||
            eL[158] !== tI ||
            eL[159] !== eg ||
            eL[160] !== ts ||
            eL[161] !== tG ||
            eL[162] !== e3 ||
            eL[163] !== tj ||
            eL[164] !== tw ||
            eL[165] !== tp ||
            eL[166] !== ty ||
            eL[167] !== tV ||
            eL[168] !== tz ||
            eL[169] !== tq ||
            eL[170] !== tg ||
            eL[171] !== ez ||
            eL[172] !== tr
              ? ((eS = e3.value.deleted
                  ? void 0
                  : (0, r.jsx)("div", {
                      className: "w-full",
                      children: (0, r.jsxs)(S.uC, {
                        inset: !1,
                        wrap: !0,
                        children: [
                          ez && (0, r.jsx)(eu.k, { milestone: "interactive" }),
                          (null != eg || tq) &&
                            (0, r.jsx)("div", {
                              className: "min-w-0 flex-auto overflow-x-auto",
                              children: eg ?? (0, r.jsx)(eO.K, {}),
                            }),
                          (0, r.jsx)("div", {
                            className: "min-w-0 flex-auto",
                            children: (0, r.jsx)(j.Tz, {
                              filterTags: tz ? (0, r.jsx)(L.l, { showCategoryFilters: !tg && !tp }) : null,
                              search: null,
                              controls: (0, r.jsxs)(r.Fragment, {
                                children: [
                                  tG,
                                  ty &&
                                    (0, r.jsx)(eK, {
                                      status: tI,
                                      assigner: tS,
                                      onStatusChange: tw,
                                      onAssignerChange: tj,
                                    }),
                                  tV && (0, r.jsx)(L.d, { showCategoryFilters: !tg && !tp }),
                                  !ts && (null != tG || tV) && (0, r.jsx)(f.Ow, {}),
                                  !ts &&
                                    !ty &&
                                    (0, r.jsx)(R.zK, {
                                      viewModeControl: { value: tr, onChange: (e) => (0, k.ul)(e3, e) },
                                      onViewModeChange: (e) => (0, C.np)(e3, { layout: e }),
                                    }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    })),
                (eL[157] = tS),
                (eL[158] = tI),
                (eL[159] = eg),
                (eL[160] = ts),
                (eL[161] = tG),
                (eL[162] = e3),
                (eL[163] = tj),
                (eL[164] = tw),
                (eL[165] = tp),
                (eL[166] = ty),
                (eL[167] = tV),
                (eL[168] = tz),
                (eL[169] = tq),
                (eL[170] = tg),
                (eL[171] = ez),
                (eL[172] = tr),
                (eL[173] = eS))
              : (eS = eL[173]),
            eL[174] !== tS ||
            eL[175] !== tP ||
            eL[176] !== tI ||
            eL[177] !== eQ ||
            eL[178] !== e2 ||
            eL[179] !== eB ||
            eL[180] !== eH ||
            eL[181] !== e1 ||
            eL[182] !== eD ||
            eL[183] !== e3.value.supportsStructuredGrid ||
            eL[184] !== te ||
            eL[185] !== tp ||
            eL[186] !== ty ||
            eL[187] !== ez ||
            eL[188] !== e0.pathname ||
            eL[189] !== tr
              ? ((eP = ty
                  ? eB && (0, r.jsx)(eY, { status: tI, assigner: tS, search: tP, onOpenPage: eH?.onOpenPage })
                  : (0, r.jsx)(eE.K, {
                      collectionHref: te ? void 0 : eQ,
                      trackHomeClick: ez,
                      structuredGridEnabled: "grid" === tr && !0 === e3.value.supportsStructuredGrid,
                      collectionRows: tp,
                      pathname: e0.pathname,
                      navigation: eH,
                      isCurrent: e2,
                      onOpenItem: e1,
                      onOpenProfile: (e) => {
                        ;(0, W.openProfileTab)(eD, e)
                      },
                      searchFileActions: (0, eI.w)(eD),
                    })),
                (eL[174] = tS),
                (eL[175] = tP),
                (eL[176] = tI),
                (eL[177] = eQ),
                (eL[178] = e2),
                (eL[179] = eB),
                (eL[180] = eH),
                (eL[181] = e1),
                (eL[182] = eD),
                (eL[183] = e3.value.supportsStructuredGrid),
                (eL[184] = te),
                (eL[185] = tp),
                (eL[186] = ty),
                (eL[187] = ez),
                (eL[188] = e0.pathname),
                (eL[189] = tr),
                (eL[190] = eP))
              : (eP = eL[190]),
            eL[191] !== eB ||
            eL[192] !== e1 ||
            eL[193] !== ev ||
            eL[194] !== tW ||
            eL[195] !== eS ||
            eL[196] !== eP ||
            eL[197] !== X
              ? ((eR = (0, r.jsx)(U.b, {
                  isVisible: eB,
                  onSelectionToolbarMount: ev,
                  title: X,
                  controls: tW,
                  navigation: eS,
                  onOpenItem: e1,
                  results: eP,
                })),
                (eL[191] = eB),
                (eL[192] = e1),
                (eL[193] = ev),
                (eL[194] = tW),
                (eL[195] = eS),
                (eL[196] = eP),
                (eL[197] = X),
                (eL[198] = eR))
              : (eR = eL[198]),
            eR
          )
        }
        function eW(e) {
          return e.items.length > 0
        }
        ;(a.d(
          t,
          {},
          {
            SlateSpacePage: function (e) {
              let t,
                a,
                l,
                i,
                s,
                c,
                u,
                g,
                h = (0, n.c)(47),
                {
                  embedded: f,
                  mainHome: v,
                  isActive: y,
                  isVisible: b,
                  navigation: _,
                  initialHref: x,
                  initialFolderReturnLocations: I,
                  onNavigate: w,
                  tabId: S,
                } = e,
                j = void 0 !== f && f,
                P = void 0 !== v && v,
                A = void 0 === y || y,
                C = void 0 === b || b,
                E = (0, o.gh)(K.GD),
                T = (0, d.useId)(),
                O = (0, o.Ul)(eS.vy)
              ;(h[0] !== A || h[1] !== C || h[2] !== P || h[3] !== E
                ? ((t = () => {
                    if (P && A && C)
                      return E.watch((e) => {
                        let { get: t } = e
                        if (null == t(eL.jm)) return
                        let a = () => {
                          ;(0, eL.Hh)(E)
                        }
                        return (
                          a(),
                          window.addEventListener("online", a),
                          window.addEventListener("focus", a),
                          () => {
                            ;(window.removeEventListener("online", a), window.removeEventListener("focus", a))
                          }
                        )
                      })
                  }),
                  (a = [A, C, P, E]),
                  (h[0] = A),
                  (h[1] = C),
                  (h[2] = P),
                  (h[3] = E),
                  (h[4] = t),
                  (h[5] = a))
                : ((t = h[4]), (a = h[5])),
                (0, d.useEffect)(t, a))
              let N = (0, p.zy)(),
                U = (0, p.Zp)(),
                { libraryFileId: R } = (0, p.g)(),
                L = N.state
              h[6] !== j || h[7] !== R || h[8] !== N.pathname || h[9] !== L?.libraryPreview || h[10] !== U
                ? ((l =
                    !j && (0, eR.z_)(N.pathname) && null != R && L?.libraryPreview == null
                      ? (0, r.jsx)(z.LibraryFilePreview, {
                          libraryFileId: R,
                          onClose: () => void U("/space", { replace: !0 }),
                        })
                      : void 0),
                  (h[6] = j),
                  (h[7] = R),
                  (h[8] = N.pathname),
                  (h[9] = L?.libraryPreview),
                  (h[10] = U),
                  (h[11] = l))
                : (l = h[11])
              let D = l
              h[12] !== x || h[13] !== N.pathname || h[14] !== N.search
                ? ((i = () => x ?? N.pathname + N.search),
                  (h[12] = x),
                  (h[13] = N.pathname),
                  (h[14] = N.search),
                  (h[15] = i))
                : (i = h[15])
              let [G] = (0, d.useState)(i)
              if (j) {
                let e,
                  t,
                  a,
                  l,
                  n = O ? T : void 0
                return (
                  h[16] !== I || h[17] !== P || h[18] !== n || h[19] !== G
                    ? ((e = { embedded: !0, mainHome: P, initialHref: G, initialFolderReturnLocations: I, visitId: n }),
                      (h[16] = I),
                      (h[17] = P),
                      (h[18] = n),
                      (h[19] = G),
                      (h[20] = e))
                    : (e = h[20]),
                  h[21] !== C ? ((t = C ? (0, r.jsx)(M.n, {}) : null), (h[21] = C), (h[22] = t)) : (t = h[22]),
                  h[23] !== A || h[24] !== C || h[25] !== _ || h[26] !== w || h[27] !== E || h[28] !== S
                    ? ((a = (0, r.jsx)(eB, {
                        embedded: !0,
                        isActive: A,
                        isVisible: C,
                        navigation: _,
                        onNavigate: w,
                        tabId: S,
                        routeScope: E,
                      })),
                      (h[23] = A),
                      (h[24] = C),
                      (h[25] = _),
                      (h[26] = w),
                      (h[27] = E),
                      (h[28] = S),
                      (h[29] = a))
                    : (a = h[29]),
                  h[30] !== e || h[31] !== t || h[32] !== a
                    ? ((l = (0, r.jsx)(F.$, {
                        embedded: !0,
                        children: (0, r.jsxs)(o.Ui, { scope: k.vn, value: e, children: [t, a] }),
                      })),
                      (h[30] = e),
                      (h[31] = t),
                      (h[32] = a),
                      (h[33] = l))
                    : (l = h[33]),
                  l
                )
              }
              return (
                h[34] === Symbol.for("react.memo_cache_sentinel")
                  ? ((c = (0, r.jsx)(m.G.MainContentLayout, { layout: "custom-titlebar" })),
                    (s = (0, r.jsx)(eg.y, {})),
                    (h[34] = s),
                    (h[35] = c))
                  : ((s = h[34]), (c = h[35])),
                h[36] !== x || h[37] !== A || h[38] !== C || h[39] !== N || h[40] !== P || h[41] !== _ || h[42] !== E
                  ? ((u = (e) =>
                      (0, r.jsxs)(o.Ui, {
                        scope: k.vn,
                        value: { mainHome: P, initialHref: x, routeHref: N.pathname + N.search },
                        children: [
                          C ? (0, r.jsx)(M.n, {}) : null,
                          (0, r.jsx)(eB, {
                            isActive: A,
                            isVisible: C,
                            routeScope: E,
                            navigation: _,
                            onOpenItem: (t, a) => {
                              let l = (0, eR.rV)(t),
                                r = E.get($.Hb),
                                n = r?.entry === t && (r.imageVersions?.length ?? 0) > 1
                              if (null != l && !n && (0, ev.D)(E, { kind: "library", libraryFileId: t.node.id }))
                                return void E.set($.Hb, null)
                              let i = {
                                ...N,
                                state: {
                                  ...N.state,
                                  sidebarArea: "space",
                                  spaceSidebarAccountId: E.get(em.spaceAccountId$) ?? void 0,
                                },
                              }
                              e(t, a, i, n && E.get(ef.kJ) ? void 0 : l)
                            },
                          }),
                        ],
                      })),
                    (h[36] = x),
                    (h[37] = A),
                    (h[38] = C),
                    (h[39] = N),
                    (h[40] = P),
                    (h[41] = _),
                    (h[42] = E),
                    (h[43] = u))
                  : (u = h[43]),
                h[44] !== D || h[45] !== u
                  ? ((g = (0, r.jsxs)(r.Fragment, {
                      children: [c, s, (0, r.jsx)(F.$, { routePreview: D, children: u })],
                    })),
                    (h[44] = D),
                    (h[45] = u),
                    (h[46] = g))
                  : (g = h[46]),
                g
              )
            },
          },
        ),
          l())
      } catch (e) {
        l(e)
      }
    })
  },
  CJ4l(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      n = a("qmMi"),
      i = a("Wf1j"),
      s = a("oyxz"),
      o = a("BrP7"),
      d = a("jU86")
    a.d(
      t,
      {},
      {
        i: function () {
          let e,
            t,
            a,
            c,
            u,
            g,
            p,
            h = (0, r.c)(14),
            m = (0, n.gh)(d.Qy),
            f = (0, i.A)()
          h[0] !== f
            ? ((e = f.formatMessage({ id: "space.slides.tabs.label", defaultMessage: "Slide collections" })),
              (h[0] = f),
              (h[1] = e))
            : (e = h[1])
          let v = m.value.slidesCollection ?? "all"
          return (
            h[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = { key: "all", name: (0, l.jsx)(s.A, { id: "space.slides.tabs.all", defaultMessage: "All" }) }),
                (h[2] = t))
              : (t = h[2]),
            h[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = {
                  key: "pinned",
                  name: (0, l.jsx)(s.A, { id: "space.slides.tabs.pinned", defaultMessage: "Pinned" }),
                }),
                (h[3] = a))
              : (a = h[3]),
            h[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = {
                  key: "owned",
                  name: (0, l.jsx)(s.A, { id: "space.slides.tabs.owned", defaultMessage: "Yours" }),
                }),
                (h[4] = c))
              : (c = h[4]),
            h[5] !== m.value.slidesIncludeShared
              ? ((u = [
                  t,
                  a,
                  c,
                  ...(m.value.slidesIncludeShared
                    ? [
                        {
                          key: "shared",
                          name: (0, l.jsx)(s.A, { id: "space.slides.tabs.shared", defaultMessage: "Shared with you" }),
                        },
                      ]
                    : []),
                ]),
                (h[5] = m.value.slidesIncludeShared),
                (h[6] = u))
              : (u = h[6]),
            h[7] !== m
              ? ((g = (e) => (0, d.zl)(m, (0, d.SE)({ ...m.value, slidesCollection: e, search: "" }))),
                (h[7] = m),
                (h[8] = g))
              : (g = h[8]),
            h[9] !== e || h[10] !== v || h[11] !== u || h[12] !== g
              ? ((p = (0, l.jsx)(o.t, {
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: e,
                  selectedKey: v,
                  tabs: u,
                  onSelect: g,
                })),
                (h[9] = e),
                (h[10] = v),
                (h[11] = u),
                (h[12] = g),
                (h[13] = p))
              : (p = h[13]),
            p
          )
        },
      },
    )
  },
  Waus(e, t, a) {
    a.d(
      t,
      {},
      {
        D: function (e) {
          return "/space" === e.basePath && null == e.directoryId && !e.deleted && null != e.slidesCollection
        },
        y: "/space?view=slides",
      },
    )
  },
  vHxi(e, t, a) {
    var l = a("QBk8"),
      r = a("qmMi"),
      n = a("E8Sp"),
      i = a("SGsN"),
      s = a("e1xH"),
      o = a("yGJW"),
      d = a("WFY2"),
      c = a("eShZ"),
      u = a("tv8P"),
      g = a("Kw4a"),
      p = a("i1Zq"),
      h = a("pyo2"),
      m = a("nndI"),
      f = a("SCmN"),
      v = a("WP5H")
    async function y(e, t, a, { showErrorToast: n = !1 } = {}) {
      let d = e.get(f.jm)
      if (
        !e.get(s.pagesEnabled$) ||
        null == d ||
        e.get(f.av, d.key) ||
        ("creating" === e.get(p.J, d.key) && (null != a || null != e.get(m.ax)[d.key]))
      )
        return null
      let v = e.get(g.vy),
        b = (0, u.watchSpaceAccount)(e, d.accountId, d.userId)
      e.set(f.av, d.key, !0)
      let _ = e.get(f.Ev),
        x = e.get(m.ax)[d.key],
        I = a ?? x ?? (_?.identityKey === d.key ? _.pageId : null)
      try {
        if (
          null == I &&
          (await (0, p.m)(e, t, !1, v ? "onboarding" : "legacy"),
          await e.when(({ get: e }) => e(f.jm)?.key !== d.key || "creating" !== e(p.J, d.key)),
          b.signal.throwIfAborted(),
          (I = e.get(m.ax)[d.key] ?? null),
          null == I)
        )
          return null
        ;(_?.identityKey !== d.key || _.pageId !== I) &&
          e.set(f.Ev, { identityKey: d.key, pageId: I, awaitingPaint: !1 })
        try {
          await e.query.fetch(u.spacePageQuery$, I)
        } catch (n) {
          b.signal.throwIfAborted()
          let a = e.get(m.DF)[d.key] ?? e.get(m.bs)[d.key]?.idempotency_key,
            l = a ?? m.qu
          if (
            !v ||
            !e.get(g.vy) ||
            !e.get(h.aQ).includes("welcome") ||
            I !== x ||
            !(n instanceof c.FetchError) ||
            ((403 !== n.status || "page_read_forbidden" !== n.errorCode) &&
              (404 !== n.status || ("page_not_found" !== n.errorCode && "page_trashed" !== n.errorCode))) ||
            (404 !== n.status && l.startsWith("space-welcome-readable:"))
          )
            throw n
          if (404 === n.status && null == a)
            return (
              (0, r.Y)(e, (e) => {
                ;((0, h.$V)(e, "welcome"), e.set(f.Dj, d.key, "failed"), e.set(f.Ev, null))
              }),
              null
            )
          if (
            ((0, r.Y)(e, (e) => {
              ;(404 !== n.status && e.set(m.DF, (e) => ({ ...e, [d.key]: "space-welcome-readable:" + l })),
                (0, f.YB)(e, d.key))
            }),
            await (0, p.m)(e, t, !1, "onboarding", 404 === n.status ? l : void 0),
            b.signal.throwIfAborted(),
            (I = e.get(m.ax)[d.key] ?? null),
            null == I)
          )
            return null
          ;(e.set(f.Ev, { identityKey: d.key, pageId: I, awaitingPaint: !1 }),
            await e.query.fetch(u.spacePageQuery$, I))
        }
        return (
          b.signal.throwIfAborted(),
          v && e.get(g.vy) && e.get(m.ax)[d.key] === I && (0, m.gC)(e, d.key, I),
          e.set(m.ax, (e) => ({ ...e, [d.key]: I })),
          e.set(f.Dj, d.key, "available"),
          I
        )
      } catch (a) {
        if (!b.signal.aborted) {
          if (v && a instanceof c.FetchError && "page_deleted" === a.errorCode)
            return ((0, h.$V)(e, "welcome"), e.set(f.Ev, null), null)
          if (
            (v &&
              e.get(g.vy) &&
              (0, o.yy)(e, l.CodexSpacesOnboarding, {
                action: l.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_WELCOME_PAGE_FAILED,
                item: l.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
                pageId: I ?? void 0,
                failureOperation:
                  l.CodexSpacesOnboardingFailureOperation.CODEX_SPACES_ONBOARDING_FAILURE_OPERATION_OPEN,
              }),
            e.set(f.Dj, d.key, (0, f.vd)(a)),
            !n)
          )
            return null
          e.get(i.Id).danger(
            t.formatMessage({
              id: "space.gettingStartedPages.openError",
              defaultMessage: "Could not open the Getting Started Page. Try again.",
            }),
            { errorAnalytics: { toastId: "space.gettingStartedPages.openError" } },
          )
        }
        return null
      } finally {
        ;(b.stop(), e.set(f.av, d.key, !1))
      }
    }
    a.d(
      t,
      {},
      {
        a: async function (e, t, a, l) {
          let r = e.get(f.jm),
            { pathname: i, search: s } = e.get(n.gM)
          if (null == r) return
          let o = await y(e, a, l.pageId, { showErrorToast: !0 })
          if (
            null == o ||
            e.get(f.jm)?.key !== r.key ||
            e.get(n.gM).pathname !== i ||
            e.get(n.gM).search !== s ||
            l.isCurrent?.() === !1
          )
            return
          let c = e.get(f.Ev)
          ;(null != l.onOpenPage
            ? l.onOpenPage(o)
            : await t(`/space/${o}`, { state: { spaceSidebarAccountId: r.accountId } }),
            null != c && e.get(f.Ev) === c && e.get(f.jm)?.key === r.key && e.set(f.Ev, { ...c, awaitingPaint: !0 }),
            (0, v.Q)(e, o, () => e.get(f.jm)?.key === r.key && e.get(m.ax)[r.key] === o).catch(() => {
              d.v.warning("Failed to save the Welcome Page's default icon")
            }))
        },
        h: y,
      },
    )
  },
  ynMj(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      n = a("oyxz"),
      i = a("FrrB"),
      s = a("RNul")
    a.d(
      t,
      {},
      {
        B: function () {
          let e,
            t = (0, r.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(i.A, {
                  layout: "page",
                  title: (0, l.jsx)(n.A, {
                    id: "codex.space.libraryAsset.loadError",
                    defaultMessage: "Unable to load items",
                  }),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
        V: function () {
          let e,
            t = (0, r.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)("div", {
                  className: "flex min-h-96 items-center justify-center",
                  children: (0, l.jsx)(s.y, {}),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
      },
    )
  },
  ARUL(e, t, a) {
    var l = a("Hl6a"),
      r = a("PFjh"),
      n = a("CWeU"),
      i = a("ahQQ"),
      s = a("nlNF"),
      o = a("OWtl"),
      d = a("DHW4")
    function c(e) {
      let t = e.getOwnValue(i.vn).embedded ? i.vn : o.u
      return e.chain.get(t.id) ?? e.node
    }
    let u = (0, l.vP)(o.u, null)
    function g(e) {
      let t = new URL(e, "https://chatgpt.com")
      return (
        "/space" === t.pathname && "suggested" === t.searchParams.get("tab") && t.searchParams.delete("tab"),
        t.searchParams.sort(),
        t.pathname + t.search
      )
    }
    function p(e) {
      return null == e ? null : g(e.pathname + e.search)
    }
    function h(e, t, a, l, o, h) {
      let m,
        f,
        v = e.get(u)
      v?.cancel("superseded")
      let y = e.get(n.tE),
        b = e.get(n.hp),
        _ = {
          targetHref: l,
          visit: h && c(h),
          finish(t) {
            e.get(u) === _ &&
              x.isPending() &&
              (document.hidden
                ? x.finish("excluded", "backgrounded")
                : "favorites_unavailable" === t
                  ? x.finish("failure", t)
                  : "error" === t
                    ? x.finish("failure", "collection_failed")
                    : ((a.content_state = t), x.milestone("content_usable")))
          },
          cancel(e = "navigation_away") {
            "superseded" === e ? x.finish("superseded") : x.finish("cancelled", e)
          },
        },
        x = (0, d.r)((0, r.dj)(e), {
          action: t,
          metricFamily: "ui_experience",
          documentType: "home",
          backingType: "drive",
          completionMilestone: "content_usable",
          startedAtMs: o,
          driveCollection: a,
          onTerminal() {
            ;(f?.(), m?.(), e.get(u) === _ && e.set(u, null))
          },
        })
      if (!x.isPending()) return
      let I = e.get(s.x2),
        w = null != h ? v?.targetHref : void 0
      f = e.watch(({ get: e }) => {
        let t = e(s.x2)
        if (e(n.tE) !== y || e(n.hp) !== b) x.finish("excluded", "account_changed")
        else if (t !== I) {
          let e = p(t)
          ;((e === l || e !== p(I)) && (e !== l && e !== w && _.cancel(), (w = void 0)), (I = t))
        }
      })
      let S = h?.get(i.g_)
      ;(null != h &&
        null != S &&
        (m = h.watch(({ get: e }) => {
          let t = e(i.g_)
          t !== S && ((S = t), (null == t || g(t) !== l) && _.cancel())
        })),
        e.set(u, _))
    }
    a.d(
      t,
      {},
      {
        AT: function (e, t, a, l, r, n) {
          a === l ||
            document.hidden ||
            h(e, `switch_drive_${t}_tab`, { collection: t, previous_tab: a, next_tab: l }, g(r), n, e)
        },
        OK: c,
        RP: function (e, t, a, l, r, n) {
          let i = g(l)
          if (!document.hidden) {
            if (
              g(a) === i &&
              null ==
                n
                  ?.closest("[data-app-shell-frame]")
                  ?.querySelector(
                    `[data-app-shell-focus-area="main"][inert] [data-drive-collection="${t}"]:not([data-app-shell-active-page="false"] *)`,
                  )
            )
              return
            h(e, "open_drive_collection", { collection: t }, i, r)
          }
        },
        gK: g,
        h1: u,
      },
    )
  },
  Rlv5(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      n = a("qmMi"),
      i = a("ARUL"),
      s = a("nKwv")
    a.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            a = (0, r.c)(6),
            { href: o, visit: d, state: c, isCurrent: u } = e,
            g = (0, n.Ul)(i.h1)
          return (
            a[0] !== g || a[1] !== o || a[2] !== u || a[3] !== c || a[4] !== d
              ? ((t =
                  null != g && (null == g.visit || g.visit === d) && g.targetHref === (0, i.gK)(o)
                    ? (0, l.jsx)(s.W, { state: c, onPaint: g.finish, isCurrent: u })
                    : null),
                (a[0] = g),
                (a[1] = o),
                (a[2] = u),
                (a[3] = c),
                (a[4] = d),
                (a[5] = t))
              : (t = a[5]),
            t
          )
        },
      },
    )
  },
  f67h(e, t, a) {
    var l = a("ABep"),
      r = a("QosV"),
      n = a("qmMi"),
      i = a("dJBt"),
      s = a("lJyx")
    a.d(
      t,
      {},
      {
        k: function (e) {
          let t,
            a = (0, r.c)(3),
            { milestone: o } = e,
            d = (0, n.Ul)(s.a)
          return (
            a[0] !== d || a[1] !== o
              ? ((t =
                  null == d
                    ? null
                    : (0, l.jsx)(i.X, { requireVisibleAtPaint: !0, paintIdentity: d, onPaint: () => d.paint(o) })),
                (a[0] = d),
                (a[1] = o),
                (a[2] = t))
              : (t = a[2]),
            t
          )
        },
      },
    )
  },
  CYRu(e, t, a) {
    var l = a("qmMi"),
      r = a("mNPx"),
      n = a("yGJW"),
      i = a("GaA7"),
      s = a("OWtl"),
      o = a("WFY2")
    let d = (0, l.vP)(s.u, () => []),
      c = (0, l.SZ)(
        s.u,
        () => null,
        ({ get: e, set: t }) => {
          let a = i.appServices?.pageCreationIntents
          if (null == a) return void t([])
          let l = !0,
            s = a.subscribe((e) => {
              l && t(e)
            })
          return (
            Promise.resolve(s).catch((a) => {
              l && ((0, r.ZD)(e(n.YV), "pages.native.creation-intents.load", a), t(null))
            }),
            () => {
              ;((l = !1), s[Symbol.dispose]())
            }
          )
        },
      )
    a.d(
      t,
      {},
      {
        Fp: async function (e) {
          let t = i.appServices?.pageCreationIntents
          if (null != t) return t.claim({ accountId: e.accountId, userId: e.userId, localPageId: e.localPageId })
        },
        J7: async function (e, t, a) {
          if (i.appServices?.pageCreationIntents == null) throw Error("native_page_creation_storage_unavailable")
          await i.appServices?.pageCreationIntents.update({
            kind: t,
            accountId: e.accountId,
            userId: e.userId,
            localPageId: e.localPageId,
            updateIds: a,
          })
        },
        Oy: async function (e) {
          if (i.appServices?.pageCreationIntents == null) throw Error("native_page_creation_storage_unavailable")
          await i.appServices?.pageCreationIntents.update({ kind: "save", entry: e })
        },
        Q_: c,
        Ru: async function (e, t) {
          if (i.appServices?.pageCreationIntents == null) throw Error("native_page_creation_storage_unavailable")
          await i.appServices?.pageCreationIntents.update({
            kind: "progress",
            accountId: e.accountId,
            userId: e.userId,
            localPageId: e.localPageId,
            progress: t,
          })
        },
        Uv: async function (e) {
          if ("string" == typeof e.initialUpdate) return e.initialUpdate
          if (i.appServices?.pageCreationIntents?.readInitialUpdate == null)
            throw Error("native_page_creation_storage_unavailable")
          return i.appServices?.pageCreationIntents.readInitialUpdate({
            accountId: e.accountId,
            userId: e.userId,
            localPageId: e.localPageId,
          })
        },
        m: async function (e) {
          try {
            if (i.appServices?.pageCreationIntents == null) return !1
            return (
              await i.appServices?.pageCreationIntents.update({
                kind: "forget",
                accountId: e.accountId,
                userId: e.userId,
                localPageId: e.localPageId,
              }),
              !0
            )
          } catch (e) {
            return (
              o.v.warning("Could not remove completed Page creation intent", { safe: {}, sensitive: { error: e } }),
              !1
            )
          }
        },
        qI: function (e, t) {
          let a = { ...t }
          return (
            e.set(d, (e) => [...e, a]),
            () => {
              e.set(d, (e) => e.filter((e) => e !== a))
            }
          )
        },
        s7: d,
        u9: async function (e) {
          let t = await i.appServices?.pageCreationIntents?.list()
          return t?.find((t) => t.accountId === e.accountId && t.userId === e.userId && t.localPageId === e.localPageId)
        },
      },
    )
  },
  sSEJ(e, t, a) {
    var l = a("QosV"),
      r = a("SZCv"),
      n = a.n(r),
      i = a("qmMi"),
      s = a("zd8w"),
      o = a("SPnB"),
      d = a("rpnz"),
      c = a("mNPx"),
      u = a("e1xH"),
      g = a("tv8P"),
      p = a("yGJW"),
      h = a("OWtl"),
      m = a("OMIV"),
      f = a("CYRu")
    let v = (0, i.un)(h.u, ({ get: e }) => null != e(m.M9) && !e(m.RS) && "loading" !== e(u.GU))
    a.d(
      t,
      {},
      {
        y: function () {
          let e,
            t,
            r = (0, l.c)(3),
            u = (0, i.gh)(h.u)
          return (
            r[0] !== u
              ? ((e = () =>
                  (function (e) {
                    let t = !0,
                      l = new Map(),
                      r = !1,
                      i = !1,
                      s = (e) => JSON.stringify([e.accountId, e.userId, e.localPageId])
                    function u(e, a) {
                      let r = s(e),
                        i = l.get(r)
                      clearTimeout(i?.timer)
                      let o = n()(i?.entry, a) ? (i?.attempts ?? 0) + 1 : 1,
                        d = { entry: a, attempts: o, ready: !1 }
                      ;(l.set(r, d),
                        o < 3 &&
                          (d.timer = setTimeout(() => {
                            t && l.get(r) === d && ((d.ready = !0), h())
                          }, 1e3 * o)))
                    }
                    function h() {
                      ;((r = !0),
                        i ||
                          ((i = !0),
                          (async () => {
                            for (; t && r;)
                              ((r = !1),
                                await (async function () {
                                  let r = e.get(g.spaceAccountId$),
                                    i = e.get(o.chatGptAuthenticatedUserId$),
                                    h = e.get(f.Q_)
                                  if (null == r || null == i || null == h) return
                                  let m = e.get(d.Sq, r),
                                    y = e.get(f.s7),
                                    b = e.get(v),
                                    _ = new Set(h.map(s))
                                  for (let e of l.keys()) _.has(e) || (clearTimeout(l.get(e)?.timer), l.delete(e))
                                  let x = h.filter(
                                    (e) =>
                                      e.accountId === r &&
                                      e.userId === i &&
                                      !y.some(
                                        (t) => t.accountId === r && t.userId === i && t.localPageId === e.localPageId,
                                      ) &&
                                      (l.get(s(e))?.ready === !0 || !n()(l.get(s(e))?.entry, e)) &&
                                      (e.progress?.serverPageId != null || e.progress?.outcome === "rejected" || b) &&
                                      !m.some((t) => t.localPageId === e.localPageId && t.native?.userId === i),
                                  )
                                  0 !== x.length &&
                                    (await Promise.all([
                                      a.e(593475),
                                      a.e(166239),
                                      a.e(923720),
                                      a.e(533219),
                                      a.e(944744),
                                      a.e(787805),
                                      a.e(68876),
                                      a.e(78948),
                                      a.e(811e3),
                                      a.e(503482),
                                      a.e(707900),
                                      a.e(312541),
                                      a.e(364455),
                                      a.e(612858),
                                    ])
                                      .then(a.bind(a, "LWSA"))
                                      .then(async ({ startNativePageCreation: a }) => {
                                        if (
                                          t &&
                                          e.get(g.spaceAccountId$) === r &&
                                          e.get(o.chatGptAuthenticatedUserId$) === i
                                        )
                                          for (let n of x) {
                                            let d,
                                              h,
                                              m = n
                                            try {
                                              if (((d = await (0, f.Fp)(m)), void 0 !== d && null == d)) continue
                                              let e = await (0, f.u9)(m)
                                              if (null == e) {
                                                d?.[Symbol.dispose]()
                                                continue
                                              }
                                              ;((m = e), (h = await (0, f.Uv)(m)))
                                            } catch (a) {
                                              ;(u(n, m),
                                                d?.[Symbol.dispose](),
                                                t &&
                                                  e.get(g.spaceAccountId$) === r &&
                                                  e.get(o.chatGptAuthenticatedUserId$) === i &&
                                                  (0, c.ZD)(e.get(p.YV), "pages.native.creation.recover", a))
                                              continue
                                            }
                                            if (
                                              !t ||
                                              e.get(g.spaceAccountId$) !== r ||
                                              e.get(o.chatGptAuthenticatedUserId$) !== i
                                            )
                                              return void d?.[Symbol.dispose]()
                                            if (
                                              !e
                                                .get(f.Q_)
                                                ?.some(
                                                  (e) =>
                                                    e.localPageId === m.localPageId &&
                                                    e.accountId === r &&
                                                    e.userId === i,
                                                ) ||
                                              (m.progress?.serverPageId == null &&
                                                m.progress?.outcome !== "rejected" &&
                                                !e.get(v))
                                            ) {
                                              d?.[Symbol.dispose]()
                                              continue
                                            }
                                            try {
                                              ;(a(e, r, m.documentType, m.parentPageId, void 0, void 0, {
                                                ...m,
                                                initialUpdate: h,
                                              })
                                                .completion.catch(() => void 0)
                                                .finally(() => d?.[Symbol.dispose]()),
                                                clearTimeout(l.get(s(m))?.timer),
                                                l.delete(s(m)))
                                            } catch (t) {
                                              ;(u(n, m),
                                                d?.[Symbol.dispose](),
                                                (0, c.ZD)(e.get(p.YV), "pages.native.creation.recover", t))
                                            }
                                          }
                                      }))
                                })())
                          })()
                            .catch((t) => {
                              ;(0, c.ZD)(e.get(p.YV), "pages.native.creation.recover", t)
                            })
                            .finally(() => {
                              ;((i = !1), t && r && h())
                            })))
                    }
                    let m = e.watch(({ get: e }) => {
                      let t = e(g.spaceAccountId$)
                      ;(e(o.chatGptAuthenticatedUserId$), e(f.Q_), e(f.s7), e(v), null != t && e(d.Sq, t), h())
                    })
                    return () => {
                      for (let e of ((t = !1), l.values())) clearTimeout(e.timer)
                      m()
                    }
                  })(u)),
                (t = [u]),
                (r[0] = u),
                (r[1] = e),
                (r[2] = t))
              : ((e = r[1]), (t = r[2])),
            (0, s.useEffect)(e, t),
            null
          )
        },
      },
    )
  },
  yjV3(e, t, a) {
    var l = a("Ywss"),
      r = a("SPnB"),
      n = a("TL6G"),
      i = a("nlNF"),
      s = a("atZq"),
      o = a("GZWF")
    function d(e, t, a) {
      if (!e.get(s.kJ) || null == e.get(r.chatGptAuthenticatedAccountId$)) return !1
      let l = (0, o.v_)(e, t)
      if (null == l) return !1
      let d = e.get(i.x2)
      return (
        n.O1.dispatchHostMessage({
          type: "navigate-to-route",
          path: l,
          state: { ...d?.state, spaceBrowserOpen: { initiator: a, source: "manual", returnLocation: d ?? void 0 } },
        }),
        !0
      )
    }
    a.d(
      t,
      {},
      {
        L: function (e, t) {
          let { pathname: a, routeKind: r } = e.value
          return (
            "other" === r &&
            !0 === t.open &&
            !1 !== t.active &&
            null != t.url &&
            "manual" === t.source &&
            null == t.conversationId &&
            null == t.browserTabId &&
            ("sites_library" === t.initiator || "mcp_app_resource" === t.initiator) &&
            null == (0, l.B6)("/spaces/new", a) &&
            null == (0, l.B6)("/library/share/*", a) &&
            !![
              "/space",
              "/space/files",
              "/space/d/:directoryId",
              "/space/files/d/:directoryId",
              "/space/sites/*",
              "/spaces/:spaceId",
              "/library/*",
              "/sites",
              "/sites/:projectId",
            ].some((e) => null != (0, l.B6)(e, a)) &&
            d(e, t.url, t.initiator)
          )
        },
        _: d,
      },
    )
  },
  Lowz(e, t, a) {
    var l = a("E8Sp"),
      r = a("SPnB"),
      n = a("nlNF"),
      i = a("atZq"),
      s = a("GZWF")
    a.d(
      t,
      {},
      {
        D: function (e, t) {
          if (!e.get(i.kJ) || null == e.get(r.chatGptAuthenticatedAccountId$)) return !1
          let a = (0, s.v_)(e, t)
          if (null == a) return !1
          let o = e.get(n.x2)
          return (
            (0, l.oo)(e, a, {
              state: {
                ...o?.state,
                libraryPreview: void 0,
                sidebarArea: "space",
                spaceFileOpen: { returnLocation: o ?? void 0 },
              },
            }),
            !0
          )
        },
      },
    )
  },
  nzEQ(e, t, a) {
    let l = (0, a("ESTr").a)({
      name: "person-2-light-12",
      canvas: {
        width: 12,
        height: 12,
        viewBox: "0 0 12 12",
        frame: { x: 0, y: 0, width: 12, height: 12 },
        inkBounds: { x: 0.313232, y: 1.369141, width: 11.344788, height: 8.909668 },
        visualBounds: { x: 0.313232, y: 1.369141, width: 11.344788, height: 8.909668 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.313232, y: 1.369141, width: 11.344788, height: 8.909668 },
        center: { x: 5.985626, y: 5.823975 },
        insets: { top: 1.369141, right: 0.34198, bottom: 1.721191, left: 0.313232 },
        anchors: { frame: { x: 6, y: 6 }, ink: { x: 5.985626, y: 5.823975 }, foreground: { x: 5.985626, y: 5.823975 } },
      },
      capabilities: ["icon"],
      body: '<path d="M4.02569 6.44531C5.973 6.44553 7.57122 7.94005 7.73663 9.84473C7.75571 10.0647 7.59223 10.258 7.37237 10.2773C7.1525 10.2962 6.95894 10.1339 6.93975 9.91406C6.80994 8.41922 5.55438 7.24632 4.02569 7.24609C2.49682 7.24609 1.24148 8.41909 1.11163 9.91406C1.09247 10.1338 0.898718 10.296 0.679011 10.2773C0.458925 10.2582 0.29564 10.0648 0.314753 9.84473C0.480192 7.93993 2.0782 6.44531 4.02569 6.44531Z" fill="currentColor"/> <path d="M8.49835 6.47363C10.1555 6.47363 11.5157 7.74538 11.6566 9.36621C11.6754 9.58611 11.5122 9.7807 11.2923 9.7998C11.0727 9.81844 10.879 9.65514 10.8597 9.43555C10.7545 8.22448 9.73693 7.27441 8.49835 7.27441C8.43229 7.27443 8.36659 7.27694 8.30206 7.28223C8.08221 7.30006 7.88872 7.13582 7.87042 6.91602C7.85243 6.69618 8.01595 6.50288 8.23565 6.48438C8.32208 6.47727 8.41025 6.47365 8.49835 6.47363Z" fill="currentColor"/> <path d="M4.02569 1.36914C5.19328 1.36943 6.13995 2.31671 6.13995 3.48438C6.13979 4.6519 5.19319 5.59835 4.02569 5.59863C2.85795 5.59863 1.91061 4.65208 1.91046 3.48438C1.91046 2.31654 2.85785 1.36914 4.02569 1.36914ZM4.02569 2.16992C3.29968 2.16992 2.71124 2.75837 2.71124 3.48438C2.71139 4.21025 3.29978 4.79883 4.02569 4.79883C4.75136 4.79854 5.33999 4.21008 5.34014 3.48438C5.34014 2.75854 4.75146 2.17021 4.02569 2.16992Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/> <path d="M9.0169 1.81152C10.0262 1.81204 10.845 2.63124 10.845 3.64062C10.8445 4.64957 10.0258 5.46823 9.0169 5.46875C8.00752 5.46875 7.18832 4.64989 7.1878 3.64062C7.1878 2.63092 8.0072 1.81152 9.0169 1.81152ZM9.0169 2.6123C8.44902 2.6123 7.98858 3.07275 7.98858 3.64062C7.9891 4.20806 8.44934 4.66797 9.0169 4.66797C9.58402 4.66745 10.0437 4.20774 10.0442 3.64062C10.0442 3.07307 9.58434 2.61283 9.0169 2.6123Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    a.d(t, {}, { B: l })
  },
}
//# sourceMappingURL=143641.dd9eda399b.js.map
