export const __rspack_esm_ids = [3184]
export const __webpack_modules__ = {
  LpCf(e, t, a) {
    a.d(
      t,
      {},
      {
        w: {
          "--oai-wb-spacing": "var(--spacing,0.25rem)",
          "--oai-wb-text-primary": "var(--wb-text-primary,var(--color-token-text-primary,var(--text-primary,#0d0d0d)))",
          "--oai-wb-text-secondary":
            "var(--wb-text-secondary,var(--color-token-text-secondary,var(--text-secondary,#5d5d5d)))",
          "--oai-wb-text-tertiary":
            "var(--wb-text-tertiary,var(--color-token-text-tertiary,var(--text-tertiary,#8f8f8f)))",
          "--oai-wb-surface-primary":
            "var(--wb-surface-primary,var(--color-token-main-surface-primary,var(--main-surface-primary,#fff)))",
          "--oai-wb-surface-secondary":
            "var(--wb-surface-secondary,var(--color-token-bg-tertiary,var(--main-surface-secondary,#f5f5f5)))",
          "--oai-wb-interactive-secondary-hover":
            "var(--wb-interactive-secondary-hover,var(--color-token-interactive-bg-secondary-hover,var(--oai-wb-surface-secondary)))",
          "--oai-wb-border": "var(--wb-border,var(--color-token-border,var(--border-light,rgb(0 0 0/8%))))",
          "--oai-wb-border-hover":
            "var(--wb-border-hover,var(--color-token-border-default,var(--border-medium,rgb(0 0 0/12%))))",
          "--oai-wb-divider": "var(--wb-divider,var(--color-token-border-light,var(--border-light,rgb(0 0 0/5%))))",
          "--oai-wb-focus": "var(--wb-focus,var(--color-token-focus-border,var(--border-strong,#5b9dd9)))",
          "--oai-wb-control-border": "var(--wb-control-border,var(--interactive-border-focus,var(--oai-wb-focus)))",
          "--oai-wb-entity-accent": "var(--wb-entity-accent,var(--theme-entity-accent,var(--oai-wb-accent)))",
          "--oai-wb-accent": "var(--wb-accent,var(--interactive-label-accent-default,#0285ff))",
          "--oai-wb-on-accent": "var(--wb-on-accent,var(--bg-primary,#fff))",
          "--oai-wb-interactive-background":
            "var(--wb-interactive-background,var(--interactive-bg-accent-default,color-mix(in srgb,#0285ff 12%,transparent)))",
          "--oai-wb-selection": "var(--wb-selection,var(--theme-user-selection-bg,var(--selection,#93c5fd)))",
          "--oai-wb-radius": "var(--wb-radius,1.5rem)",
          "--oai-wb-radius-sm": "var(--wb-radius-sm,0.5rem)",
          "--oai-wb-shadow": "var(--wb-shadow,0 4px 80px rgb(0 0 0/2%))",
          "--oai-wb-shadow-lg": "var(--wb-shadow-lg,0 10px 30px rgb(0 0 0/12%))",
          "--oai-wb-font-sans": "var(--wb-font-sans,var(--font-sans,sans-serif))",
          "--oai-wb-font-mono": "var(--wb-font-mono,var(--font-mono,monospace))",
          "--oai-wb-font-size": "var(--wb-font-size,0.875rem)",
          "--oai-wb-shimmer-dark-contrast": "var(--wb-shimmer-dark-contrast,var(--oai-wb-text-tertiary))",
          "--oai-wb-shimmer-dark-secondary": "var(--wb-shimmer-dark-secondary,var(--oai-wb-text-tertiary))",
        },
      },
    )
  },
  u3Vl(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("on57"),
      n = a("mEbU"),
      s = a("zd8w"),
      o = a("X3K1"),
      d = a("SQbA"),
      c = a("y1ho"),
      u = a("ezjE")
    function p(e) {
      let t,
        a,
        n,
        p = (0, l.c)(11),
        { screenshotUrl: g, viewMode: h } = e,
        { data: m, isError: f } = (0, d.useAppgenScreenshotSrc)(g),
        [v, y] = (0, s.useState)(null),
        [b, x] = (0, s.useState)(null),
        _ = null != m && m === v,
        w = null == g || f || (null != m && m === b),
        S = !w && "bg-surface-secondary"
      return (
        p[0] !== S || p[1] !== h
          ? ((t = (0, r.A)(
              "pointer-events-none relative z-10 overflow-hidden",
              S,
              "grid" === h ? "min-h-0 flex-1" : [u.A.siteRowThumbnail, "h-[50px] w-20 shrink-0 rounded-[6px]"],
            )),
            (p[0] = S),
            (p[1] = h),
            (p[2] = t))
          : (t = p[2]),
        p[3] !== _ || p[4] !== m || p[5] !== w || p[6] !== h
          ? ((a = w
              ? (0, i.jsx)(c.o, { className: "size-full", gallery: "grid" === h })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(o.X, {
                      as: "span",
                      animate: !_,
                      className: "absolute inset-0 rounded-none",
                      size: "fill",
                      variant: "chatgpt-project",
                    }),
                    null == m
                      ? null
                      : (0, i.jsx)("img", {
                          alt: "",
                          className: (0, r.A)(
                            "relative size-full object-cover motion-safe:transition-opacity motion-safe:duration-relaxed",
                            _ ? "opacity-100" : "opacity-0",
                          ),
                          loading: "lazy",
                          src: m,
                          onLoad: () => y(m),
                          onError: () => x(m),
                        }),
                  ],
                })),
            (p[3] = _),
            (p[4] = m),
            (p[5] = w),
            (p[6] = h),
            (p[7] = a))
          : (a = p[7]),
        p[8] !== t || p[9] !== a
          ? ((n = (0, i.jsx)("span", { className: t, children: a })), (p[8] = t), (p[9] = a), (p[10] = n))
          : (n = p[10]),
        n
      )
    }
    a.d(
      t,
      {},
      {
        F: function (e) {
          let t,
            a,
            o,
            d,
            c = (0, l.c)(7),
            { screenshotUrl: g } = e,
            h = (0, s.useRef)(null)
          c[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = { margin: "200px", once: !0 }), (c[0] = t))
            : (t = c[0])
          let m = (0, n.W)(h, t)
          return (
            c[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, r.A)(
                  u.A.siteRowThumbnail,
                  "pointer-events-none flex h-7.5 w-10 shrink-0 overflow-hidden rounded-xs bg-surface",
                )),
                (c[1] = a))
              : (a = c[1]),
            c[2] !== g || c[3] !== m
              ? ((o = m ? (0, i.jsx)(p, { screenshotUrl: g, viewMode: "grid" }) : null),
                (c[2] = g),
                (c[3] = m),
                (c[4] = o))
              : (o = c[4]),
            c[5] !== o
              ? ((d = (0, i.jsx)("span", {
                  ref: h,
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
        },
        x: p,
      },
    )
  },
  NkHr(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("oyxz"),
      n = a("Qgfj"),
      s = a("tWaO"),
      o = a("KIKs")
    a.d(
      t,
      {},
      {
        g: function (e) {
          let t,
            a,
            d = (0, l.c)(10),
            { dateString: c } = e,
            u = (0, o.wv)()
          d[0] !== c || d[1] !== u ? ((t = (0, s.w)(c, u)), (d[0] = c), (d[1] = u), (d[2] = t)) : (t = d[2])
          let { unit: p, value: g } = t
          if ("minute" === p) {
            let e
            return (
              d[3] !== g
                ? ((e = (0, i.jsx)(r.A, {
                    id: "appgenPage.updatedMinutesAgo",
                    defaultMessage: "{value}m ago",
                    description: "Last edit time for a Site, in minutes; m abbreviates minutes",
                    values: { value: g },
                  })),
                  (d[3] = g),
                  (d[4] = e))
                : (e = d[4]),
              e
            )
          }
          if ("hour" === p) {
            let e
            return (
              d[5] !== g
                ? ((e = (0, i.jsx)(r.A, {
                    id: "appgenPage.updatedHoursAgo",
                    defaultMessage: "{value}h ago",
                    description: "Last edit time for a Site, in hours; h abbreviates hours",
                    values: { value: g },
                  })),
                  (d[5] = g),
                  (d[6] = e))
                : (e = d[6]),
              e
            )
          }
          if ("day" === p && 1 === g) {
            let e
            return (
              d[7] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(r.A, {
                    id: "appgenPage.updatedYesterday",
                    defaultMessage: "Yesterday",
                    description: "Last edit time for a Site edited yesterday",
                  })),
                  (d[7] = e))
                : (e = d[7]),
              e
            )
          }
          return (
            d[8] !== c
              ? ((a = (0, i.jsx)(n.XU, { value: c, month: "short", day: "numeric" })), (d[8] = c), (d[9] = a))
              : (a = d[9]),
            a
          )
        },
      },
    )
  },
  p690(e, t, a) {
    var i = a("zTeN"),
      l = a("SPnB"),
      r = a("xjn7"),
      n = a("OWtl"),
      s = a("Nwp9")
    let o = "list",
      d = (0, s.m3)("sites-view-mode", o, { coerceStoredValue: (e) => ("grid" === e || "list" === e ? e : o) }),
      c = (0, i.un)(n.u, ({ get: e }) => {
        let t = e(l.chatGptAuthenticatedAccountId$)
        return null == t ? null : (0, r.XS)({ accountId: t, userId: e(l.chatGptAuthenticatedUserId$) })
      }),
      u = (0, i.un)(n.u, ({ get: e }) => {
        let t = e(c)
        return (null == t ? void 0 : e(r.by, t).viewMode) ?? e(d)
      })
    a.d(
      t,
      {},
      {
        b: function (e, t) {
          let a = e.get(c)
          null == a ? e.set(d, t) : (0, r.pV)(e, a, { viewMode: t })
        },
        x: u,
      },
    )
  },
  M3lc(e, t, a) {
    var i = a("QosV"),
      l = a("zTeN"),
      r = a("zd8w"),
      n = a("Wf1j"),
      s = a("uNsz"),
      o = a("jU86"),
      d = a("QoH2"),
      c = a("jrp4"),
      u = a("yjV3"),
      p = a("hZax"),
      g = a("OMIV"),
      h = a("jDom"),
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
            y = (0, i.c)(9),
            { routeScope: b, isVisible: x, onNavigateToSite: _ } = e,
            w = (0, l.gh)(o.Qy),
            S = (0, n.A)(),
            C = (0, p.Zj)("2881922323"),
            I = (0, l.Ul)(!!x && o.Lo),
            j = (0, h.K)(_)
          return (
            y[0] !== S || y[1] !== x || y[2] !== j || y[3] !== b || y[4] !== w || y[5] !== I || y[6] !== C
              ? ((t = () => {
                  if ((!C && !I) || !x) return
                  let e = { mounted: !0 },
                    t = (t, a, i, l) => {
                      let r = "node" in t,
                        n = r ? (0, d.G9)(t) : t.live_url
                      if (null == n) return !1
                      let p = !1
                      if (r) {
                        if ((0, u._)(w, n, "sites_library")) return (i(), !0)
                      } else {
                        if ("suspended" === t.status || !w.get(o.Lo)) return !1
                        let e = b.get(v.G, {
                          canEdit: "owner" === t.current_user_role || "editor" === t.current_user_role,
                          hasLiveUrl: !0,
                          canNavigateToSite: !0,
                        })
                        if (!e.opensPreview) return ((0, v.I)({ event: a, externalUrl: n, onEdit: l }), i(), !0)
                        p = e.showComposer
                      }
                      let h = r ? (0, s.h5)(t) : t.id
                      if (null == h) return !1
                      let y = w.get(o.g_)
                      return (
                        (0, f.A)(b, {
                          analyticsSource: m.Mz.CODEX_APPGEN_INTERACTION_SOURCE_LIBRARY,
                          resource: { type: "appgen-app", projectId: h, title: r ? w.get(c.g, t) : t.title, url: n },
                          event: a,
                          lifecycle: e,
                          intl: S,
                          onOpened: i,
                          onNavigateToSite: j,
                          presentation: "full-width",
                          showComposer: p,
                          launchInfo: void 0,
                          isStillCurrent: () => w.get(o.g_) === y && (r ? w.get(g.JW, "2881922323") : w.get(o.Lo)),
                        }),
                        !0
                      )
                    }
                  return (
                    w.set(d.u$, () => t),
                    () => {
                      ;((e.mounted = !1), e.closeExternalOpen?.(), w.get(d.u$) === t && w.set(d.u$, null))
                    }
                  )
                }),
                (a = [C, I, S, x, j, b, w]),
                (y[0] = S),
                (y[1] = x),
                (y[2] = j),
                (y[3] = b),
                (y[4] = w),
                (y[5] = I),
                (y[6] = C),
                (y[7] = t),
                (y[8] = a))
              : ((t = y[7]), (a = y[8])),
            (0, r.useLayoutEffect)(t, a),
            null
          )
        },
      },
    )
  },
  B1DJ(e, t, a) {
    var i = a("zTeN"),
      l = a("E8Sp"),
      r = a("ZU27"),
      n = a("SPnB"),
      s = a("Au4v"),
      o = a("Ot7V"),
      d = a("SGsN"),
      c = a("Oj9r"),
      u = a("uk1V")
    let p = (0, i.vP)(c.GD, Symbol())
    a.d(
      t,
      {},
      {
        A: async function (
          e,
          {
            resource: t,
            analyticsSource: a,
            event: i,
            lifecycle: c,
            intl: g,
            onNavigateToSite: h,
            presentation: m = "split",
            showComposer: f = !1,
            launchInfo: v,
            onOpened: y,
            onPreviewUnavailable: b,
            isStillCurrent: x,
          },
        ) {
          let _ = e.get(l.gM),
            w = e.get(n.chatGptAuthenticatedAccountId$),
            S = e.get(r.It.activeTab$)?.tabId,
            C = null != v,
            I = Symbol(),
            j = (t = e) =>
              c.mounted &&
              (x?.() ?? !0) &&
              t.get(p) === I &&
              !(0, s.isBrowserWorkspaceSwitchPending)() &&
              t.get(l.gM) === _ &&
              t.get(n.chatGptAuthenticatedAccountId$) === w &&
              t.get(r.It.activeTab$)?.tabId === S
          C && e.set(p, I)
          let A = t.url,
            P = !0
          if (null != v && !i?.metaKey && !i?.ctrlKey && !i?.shiftKey && !i?.altKey) {
            try {
              let e = await v
              if (null == e.live_url) {
                j() && b?.()
                return
              }
              A = e.live_url
            } catch {
              P = !1
            }
            if (!j()) return
          }
          if (null == A) return
          if (P && (0, u.oY)(e, { ...t, url: A }, i, !0, h, m, f, a)) return void y?.("preview")
          if (null != b) return void b()
          let E = (e) => {
            ;(null != e
              ? (0, o.PQ)({
                  event: e,
                  href: A,
                  initiator: "sites_library",
                  openTarget: "external-browser",
                  disposition: "new-tab",
                })
              : (0, o.E0)({
                  href: A,
                  initiator: "sites_library",
                  openTarget: "external-browser",
                  disposition: "new-tab",
                })) && y?.("external")
          }
          if (C && navigator.userActivation?.isActive === !1) {
            let t
            c.closeExternalOpen?.()
            let a = () => {
                ;(t?.(),
                  (t = void 0),
                  window.removeEventListener(s.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, l),
                  c.closeExternalOpen === i && (c.closeExternalOpen = void 0))
              },
              i = () => {
                ;(r.close(), a())
              },
              l = () => {
                j() || i()
              },
              r = e
                .get(d.Id)
                .info(
                  g.formatMessage({
                    id: "appgenPage.preview.externalOpen.title",
                    defaultMessage: "Open this Site in a new tab",
                    description:
                      "Persistent notification offering a fresh click when a selected Site needs to open externally after its preview capability lookup outlives browser popup activation. No placeholders.",
                  }),
                  {
                    id: "sites-preview-external-open",
                    duration: 0,
                    onRemove: a,
                    primaryAction: {
                      label: g.formatMessage({
                        id: "appgenPage.openSite.label",
                        defaultMessage: "Open site",
                        description: "Menu item for opening a published Site",
                      }),
                      onClick: () => {
                        let e = j()
                        ;(i(), e && E())
                      },
                    },
                  },
                )
            ;((c.closeExternalOpen = i),
              window.addEventListener(s.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, l),
              (t = e.watch((e) => {
                j(e) || i()
              })),
              l())
            return
          }
          E(i)
        },
      },
    )
  },
  YR5g(e, t, a) {
    var i = a("zTeN"),
      l = a("Ot7V"),
      r = a("Oj9r"),
      n = a("OMIV"),
      s = a("uk1V"),
      o = a("ZIh4")
    let d = (0, i.i1)(r.GD, ({ canEdit: e, hasLiveUrl: t, canNavigateToSite: a }, { get: i, scope: l }) => {
      let r = i(n.JW, "1498265771")
      i(n.JW, "792923027")
      let d = !0 === s.Fg.isAvailable(l)
      return { opensPreview: r && (a || d) && t, showComposer: r && e && d && i(o.Wb) }
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
            null == e ? (0, l.E0)(a) : (0, l.PQ)({ ...a, event: e })
          }
        },
      },
    )
  },
  y1ho(e, t, a) {
    a.d(t, { o: () => o })
    var i = a("ABep"),
      l = a("QosV"),
      r = a("on57"),
      n = a("yS0J")
    a("zd8w")
    var s = (e) =>
      (0, i.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: 120,
        height: 75,
        viewBox: "0 0 120 75",
        fill: "none",
        ...e,
        children: (0, i.jsxs)("g", {
          transform: "translate(48 25.5)",
          children: [
            (0, i.jsx)("path", {
              d: "M22 19.2727C22 20.779 20.779 22 19.2727 22H14.7273C13.221 22 12 20.779 12 19.2727V12H19.2727C20.779 12 22 13.221 22 14.7273V19.2727Z",
              fill: "#68C4FF",
            }),
            (0, i.jsx)("path", {
              d: "M20 2C21.1046 2 22 2.89543 22 4V7C22 8.10457 21.1046 9 20 9H17C15.8954 9 15 8.10457 15 7V4C15 2.89543 15.8954 2 17 2H20Z",
              fill: "#0C79D8",
            }),
            (0, i.jsx)("path", {
              d: "M7 15C8.10457 15 9 15.8954 9 17V20C9 21.1046 8.10457 22 7 22H4C2.89543 22 2 21.1046 2 20V17C2 15.8954 2.89543 15 4 15H7Z",
              fill: "#0C79D8",
            }),
            (0, i.jsx)("path", {
              d: "M12 12H4.72727C3.22104 12 2 10.779 2 9.27273V4.72727C2 3.22104 3.22104 2 4.72727 2H9.27273C10.779 2 12 3.22104 12 4.72727V12Z",
              fill: "#2E9EFF",
            }),
          ],
        }),
      })
    function o(e) {
      let t,
        a,
        o,
        d = (0, l.c)(7),
        { className: c, gallery: u } = e
      return (
        d[0] !== c
          ? ((t = (0, r.A)("flex aspect-8/5 items-center justify-center overflow-hidden bg-surface", c)),
            (d[0] = c),
            (d[1] = t))
          : (t = d[1]),
        d[2] !== u
          ? ((a = u ? (0, i.jsx)(s, { className: "size-full" }) : (0, i.jsx)(n.A, { className: "shrink-0" })),
            (d[2] = u),
            (d[3] = a))
          : (a = d[3]),
        d[4] !== t || d[5] !== a
          ? ((o = (0, i.jsx)("span", { "aria-hidden": !0, className: t, children: a })),
            (d[4] = t),
            (d[5] = a),
            (d[6] = o))
          : (o = d[6]),
        o
      )
    }
  },
  OWcD(e, t, a) {
    var i = a("zTeN"),
      l = a("SPnB"),
      r = a("Ghh3"),
      n = a("e1xH"),
      s = a("OWtl")
    let o = (0, i.vU)(s.u, (e, { get: t }) => {
      let a = t(l.chatGptAuthenticatedAccountId$),
        i = t(l.chatGptAuthenticatedUserId$)
      return {
        queryKey: ["global-search-open", e, a, i],
        enabled: null != a && null != i && t(n.gG),
        queryFn: async ({ signal: e }) =>
          (await r.Request.postResponse("/global/search/open", { signal: e, retry: !1 })).status,
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
            i = e.attachments[0]
          if (i?.kind === "media_generation") {
            if (1 !== e.attachments.length || i.output_blocked || null == i.asset_pointer || null == i.messages)
              return null
            let t = i.asset_pointer.split("?")[0],
              l = i.messages
            if (
              !l.some(
                (e, a) =>
                  "assistant" === e.author.role &&
                  "string" == typeof e.recipient &&
                  l
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
            a = l
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
          let l = { id: "y-root", message: null, parent: null, children: [] },
            r = [l],
            n = new Set([l.id])
          for (let e of a) {
            if (!e.id || n.has(e.id)) return null
            ;(n.add(e.id), (l.children = [e.id]))
            let t = { id: e.id, message: e, parent: l.id, children: [] }
            ;(r.push(t), (l = t))
          }
          return {
            conversation_id: t,
            current_node: l.id,
            mapping: Object.fromEntries(r.map((e) => [e.id, e])),
            linear_conversation: r,
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
    var i = a("Ghh3")
    a.d(
      t,
      {},
      {
        I: function (e) {
          if (null == e || 0 === e.trim().length) return null
          try {
            return new URL((0, i.CP)(e) ?? e, window.location.href).href
          } catch {
            return null
          }
        },
      },
    )
  },
  eMKR(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("zTeN"),
      n = a("zd8w"),
      s = a("SPnB"),
      o = a("OMIV"),
      d = a("zHp1"),
      c = a("HBVP"),
      u = a("TCFx"),
      p = a("jU86"),
      g = a("ahQQ"),
      h = a("iMhR")
    function m() {
      let e,
        t,
        a = (0, l.c)(3),
        i = (0, r.gh)(g.Qy)
      return (
        a[0] !== i
          ? ((e = () => {
              let e,
                t = !1,
                a = i.watch((a) => {
                  if (!a.get(o.JW, "2092319279") || !a.get(o.JW, "2457328746")) return void e?.abort()
                  let l = a.query.getOptions(p.i3),
                    r = a.get(s.chatGptAuthenticatedAccountId$),
                    n = a.get(s.chatGptAuthenticatedUserId$),
                    u = a.get(s.o8)
                  if (!1 === l.enabled || i.value.accountId !== r || i.value.userId !== n) return void e?.abort()
                  let { signal: g } = (e = e ?? new AbortController())
                  if (t || g.aborted) return
                  let h = i.queryClient.getQueryCache(),
                    m = h.build(i.queryClient, l),
                    v = () => {
                      if (t || null == m.state.data) return
                      t = !0
                      let e = i.get(p.AH)?.filter(f).slice(0, 15)
                      if (null == e) return
                      let a = e.values()
                      Promise.all(
                        Array.from({ length: Math.min(4, e.length) }, async () => {
                          for (let e of a) {
                            if (
                              g.aborted ||
                              "visible" !== document.visibilityState ||
                              i.get(s.chatGptAuthenticatedAccountId$) !== r ||
                              i.get(s.chatGptAuthenticatedUserId$) !== n ||
                              i.get(s.o8) !== u
                            )
                              return
                            try {
                              await (0, d.r1)(
                                i.queryClient,
                                e.node.id,
                                (0, c.L)({
                                  accountId: r,
                                  userId: u,
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
                                g,
                                () =>
                                  i.get(s.chatGptAuthenticatedAccountId$) === r &&
                                  i.get(s.chatGptAuthenticatedUserId$) === n &&
                                  i.get(s.o8) === u,
                              )
                            } catch {}
                          }
                        }),
                      )
                    },
                    y = h.subscribe((e) => {
                      e.query === m && v()
                    })
                  return (v(), y)
                })
              return () => {
                ;(e?.abort(), a())
              }
            }),
            (t = [i]),
            (a[0] = i),
            (a[1] = e),
            (a[2] = t))
          : ((e = a[1]), (t = a[2])),
        (0, n.useEffect)(e, t),
        null
      )
    }
    function f(e) {
      let t = (0, u.sm)(e)
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
            t = (0, l.c)(2),
            a = (0, r.Ul)(h.d)
          return (
            t[0] !== a
              ? ((e = a ? (0, i.jsx)(r.Ui, { scope: g.Qy, value: h.B, children: (0, i.jsx)(m, {}) }) : null),
                (t[0] = a),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        },
      },
    )
  },
  AoIz(e, t, a) {
    a.a(e, async function (e, i) {
      try {
        var l = a("ABep"),
          r = a("QosV"),
          n = a("D7Ms"),
          s = a("T0Rc"),
          o = a("zTeN"),
          d = a("DBCl"),
          c = a("zd8w"),
          u = a("oyxz"),
          p = a("HZfM"),
          g = a("bJfu"),
          h = a("I7bK"),
          m = a("SPnB"),
          f = a("Sm6l"),
          v = a("FrrB"),
          y = a("Bbed"),
          b = a("uNsz"),
          x = a("zkSD"),
          _ = a("LhrG"),
          w = a("MExO"),
          S = a("heYt"),
          C = a("Oj9r"),
          I = a("XXJV"),
          j = a("eShZ"),
          A = a("TCFx"),
          P = a("jU86"),
          E = a("qQj3"),
          k = a("KhCM"),
          T = a("R1rp"),
          M = a("UxLW"),
          O = a("jJ9V"),
          N = a("avsj"),
          L = a("ycWl"),
          U = a("MZ5W"),
          R = e([U])
        U = (R.then ? (await R)() : R)[0]
        let G = (0, y._)(
          async () =>
            (
              await Promise.all([
                a.e(851456),
                a.e(393442),
                a.e(486125),
                a.e(232817),
                a.e(740827),
                a.e(720436),
                a.e(208123),
                a.e(178420),
                a.e(939673),
              ]).then(a.bind(a, "DWJ8"))
            ).LibraryRoutedNotePreview,
          { fallback: (0, l.jsx)(N.E, {}) },
        )
        function F(e) {
          let t,
            a,
            i,
            p,
            g,
            h,
            y,
            b,
            A,
            P,
            E = (0, r.c)(55),
            { libraryFileId: k, identity: T, onClose: U, tabId: R } = e,
            F = (0, o.gh)(C.GD),
            G = (0, o.Ul)(m.qz),
            B = (0, o.Ul)(m.chatGptAuthenticatedAccountId$),
            z = (0, o.Ul)(m.chatGptAuthenticatedUserId$),
            H = (0, o.Ul)(m.cj),
            $ = (0, o.Ul)(S.Ym),
            V = "loading" === G || ("allowed" === G && !H),
            Q =
              !V &&
              "allowed" === G &&
              null != B &&
              (null == T || (T.accountId === B && T.userId === z)) &&
              null != k &&
              ((0, d.PKK)(k) || null != (0, w.CN)(k))
                ? k
                : null
          ;(E[0] !== B || E[1] !== Q || E[2] !== z
            ? ((t = ["library-api", B, z, "file", Q]), (E[0] = B), (E[1] = Q), (E[2] = z), (E[3] = t))
            : (t = E[3]),
            E[4] !== B || E[5] !== Q
              ? ((a =
                  null != Q && null != B
                    ? (e) => {
                        let { signal: t } = e
                        return (0, _.F)(Q, B, t)
                      }
                    : n.hT),
                (E[4] = B),
                (E[5] = Q),
                (E[6] = a))
              : (a = E[6]),
            E[7] !== t || E[8] !== a
              ? ((i = { queryKey: t, queryFn: a, gcTime: 0, staleTime: 0, retry: !1, refetchOnWindowFocus: !1 }),
                (E[7] = t),
                (E[8] = a),
                (E[9] = i))
              : (i = E[9]))
          let { data: W, error: Z, isPending: Y, isFetching: q, refetch: K } = (0, s.I)(i)
          if (
            (E[10] !== W || E[11] !== Z || E[12] !== Q
              ? ((p = null),
                null != Q && null != W && null == Z && (p = "file_name" in W ? W.file_name : W.name),
                (E[10] = W),
                (E[11] = Z),
                (E[12] = Q),
                (E[13] = p))
              : (p = E[13]),
            E[14] !== F || E[15] !== R || E[16] !== p
              ? ((g = () => {
                  if (null == R || null == p) return
                  let e = (0, I.KE)(F, R)
                  null != e && (0, I.getThreadPanelTabController)(e).updateTab(F, R, { title: p })
                }),
                (E[14] = F),
                (E[15] = R),
                (E[16] = p),
                (E[17] = g))
              : (g = E[17]),
            E[18] !== F || E[19] !== R || E[20] !== p
              ? ((h = [F, R, p]), (E[18] = F), (E[19] = R), (E[20] = p), (E[21] = h))
              : (h = E[21]),
            (0, c.useLayoutEffect)(g, h),
            V || (null != Q && Y))
          ) {
            let e, t, a
            return (
              E[22] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, l.jsx)(N.C, {})), (E[22] = e))
                : (e = E[22]),
              E[23] !== U || E[24] !== R
                ? ((t = (0, l.jsx)(O.c, { actions: !1, onClose: U, tabId: R, title: "", children: e })),
                  (E[23] = U),
                  (E[24] = R),
                  (E[25] = t))
                : (t = E[25]),
              E[26] !== U || E[27] !== t
                ? ((a = (0, l.jsx)(L.gK, {
                    assetName: null,
                    contentOwnsHeader: !0,
                    reserveImageComposerSpace: !0,
                    onClose: U,
                    children: t,
                  })),
                  (E[26] = U),
                  (E[27] = t),
                  (E[28] = a))
                : (a = E[28]),
              a
            )
          }
          if (null != Q && null != W && null == Z) {
            let e, t, a
            return (
              E[29] !== B || E[30] !== Q || E[31] !== z
                ? ((e = JSON.stringify([B, z, Q])), (E[29] = B), (E[30] = Q), (E[31] = z), (E[32] = e))
                : (e = E[32]),
              E[33] !== B || E[34] !== W || E[35] !== F || E[36] !== $
                ? ((t =
                    $ &&
                    !1 !== W.sharing_can_manage &&
                    null != B &&
                    "saved_web_image" !== W.library_artifact_type &&
                    null == (0, M.AG)(W.id)
                      ? () => {
                          ;(0, x.Yx)(F, {
                            accountId: B,
                            fileName: "file_name" in W ? W.file_name : W.name,
                            libraryFileId: W.id,
                            sharingEntryId: W.sharing_entry_id ?? void 0,
                            resourceKind: "file",
                            showOrganizationSharing: "writing_block" !== W.library_artifact_type,
                            sharedDirectoryId: "parent_directory_id" in W ? W.parent_directory_id : void 0,
                          })
                        }
                      : void 0),
                  (E[33] = B),
                  (E[34] = W),
                  (E[35] = F),
                  (E[36] = $),
                  (E[37] = t))
                : (t = E[37]),
              E[38] !== W || E[39] !== U || E[40] !== e || E[41] !== t || E[42] !== R
                ? ((a = (0, l.jsx)(D, { data: W, onClose: U, tabId: R, onShare: t }, e)),
                  (E[38] = W),
                  (E[39] = U),
                  (E[40] = e),
                  (E[41] = t),
                  (E[42] = R),
                  (E[43] = a))
                : (a = E[43]),
              a
            )
          }
          let J = null != Q && !(Z instanceof j.fk && (403 === Z.status || 404 === Z.status))
          return (
            E[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = (0, l.jsx)("h1", {
                  role: "alert",
                  children: (0, l.jsx)(u.A, {
                    id: "library.file.failed",
                    defaultMessage: "Unable to open this file",
                    description: "Shown when a Library file link is invalid, inaccessible, or fails to load",
                  }),
                })),
                (E[44] = y))
              : (y = E[44]),
            E[45] !== J || E[46] !== q || E[47] !== K
              ? ((b = J
                  ? (0, l.jsx)(f.$, {
                      disabled: q,
                      onClick: () => void K(),
                      children: (0, l.jsx)(u.A, {
                        id: "library.file.retry",
                        defaultMessage: "Try again",
                        description: "Retry loading the file selected by a Library file link",
                      }),
                    })
                  : null),
                (E[45] = J),
                (E[46] = q),
                (E[47] = K),
                (E[48] = b))
              : (b = E[48]),
            E[49] !== U || E[50] !== R
              ? ((A =
                  null == R
                    ? (0, l.jsx)(f.$, {
                        color: "outline",
                        onClick: U,
                        children: (0, l.jsx)(u.A, {
                          id: "appgenPage.filePreview.close",
                          defaultMessage: "Close preview",
                          description: "Accessible label for closing a Library file preview",
                        }),
                      })
                    : null),
                (E[49] = U),
                (E[50] = R),
                (E[51] = A))
              : (A = E[51]),
            E[52] !== b || E[53] !== A
              ? ((P = (0, l.jsx)(v.A, {
                  className: "select-none",
                  layout: "page",
                  title: y,
                  actions: (0, l.jsxs)(l.Fragment, { children: [b, A] }),
                })),
                (E[52] = b),
                (E[53] = A),
                (E[54] = P))
              : (P = E[54]),
            P
          )
        }
        function D(e) {
          let t,
            a,
            i,
            n,
            s = (0, r.c)(13),
            { data: d, onClose: u, onShare: p, tabId: g } = e,
            f = (0, o.gh)(C.GD),
            v = (0, c.useContext)(h.f$),
            y = (0, o.Ul)(m.chatGptAuthenticatedAccountId$),
            x = (0, o.Ul)(m.chatGptAuthenticatedUserId$),
            _ = "file_name" in d ? (0, A.Jw)(d) : { node: d },
            w = "writing_block" === d.library_artifact_type,
            S = (0, o.Ul)(!!w && T.V1),
            I = (0, o.Ul)(!!w && T.lY)
          s[0] !== d
            ? ((t =
                (null == d.access_kind || "owned" === d.access_kind) &&
                (!("kind" in d) || !(0, b.GS)({ node: d })) &&
                "chat_message_snapshot" !== d.library_artifact_type &&
                !d.id.startsWith("external-")),
              (s[0] = d),
              (s[1] = t))
            : (t = s[1])
          let j = t
          s[2] !== j || s[3] !== d.id
            ? ((a = j ? (0, l.jsx)(E.V, { libraryFileId: d.id }) : null), (s[2] = j), (s[3] = d.id), (s[4] = a))
            : (a = s[4])
          let O =
            null != y && (0, b.S6)(_) && !S && !I
              ? (0, l.jsx)(o.Ui, {
                  scope: P.oD,
                  value: { accountId: y, userId: x },
                  children: (0, l.jsx)(o.Ui, {
                    scope: P.vn,
                    value: {},
                    children: (0, l.jsx)(
                      G,
                      {
                        routeScope: f,
                        accountId: y,
                        userId: x,
                        entry: _,
                        onClose: u,
                        showComposer: null == g,
                        tabId: g,
                      },
                      JSON.stringify([y, x, d.id]),
                    ),
                  }),
                })
              : (0, l.jsx)(U.f, {
                  downloadAnalyticsFile: _.node,
                  renderFavoriteAction: () =>
                    j
                      ? (0, l.jsx)(E.q, {
                          libraryFileId: d.id,
                          entityKind: (0, k.Z)(_.node),
                          surface: "image" === d.library_file_category ? "image_lightbox" : "file_preview",
                        })
                      : void 0,
                  file: {
                    originationThreadId: d.origination_thread_id,
                    originationMessageId: d.origination_message_id,
                    externalAccount: "external_account" in d ? d.external_account : void 0,
                    fileExtension: d.file_extension,
                    id: d.id,
                    fileId: "file_name" in d ? (d.file_id ?? d.id) : d.id,
                    currentVersion: "current_version_number" in d ? (d.current_version_number ?? void 0) : void 0,
                    gizmoId: d.gizmo_id,
                    libraryArtifactType: d.library_artifact_type,
                    name: "file_name" in d ? d.file_name : d.name,
                    parentDirectoryId: "parent_directory_id" in d ? d.parent_directory_id : (d.directory_id ?? null),
                    category: d.library_file_category ?? "other",
                    mimeType: d.mime_type ?? null,
                    modifiedAt: d.file_upload_time ?? null,
                    provider: (0, M.AG)(d.id) ?? void 0,
                    sizeBytes: d.file_size_bytes ?? null,
                    sourceUrl: d.cloud_doc_url ?? void 0,
                  },
                  onClose: u,
                  onShare: p,
                  showComposer: null == g,
                  tabId: g,
                })
          s[5] !== a || s[6] !== O
            ? ((i = (0, l.jsxs)(l.Fragment, { children: [a, O] })), (s[5] = a), (s[6] = O), (s[7] = i))
            : (i = s[7])
          let N = i
          if (null == g) {
            let e
            return (
              s[8] !== N
                ? ((e = (0, l.jsx)("div", {
                    className: "h-full min-h-0 [--viewer-header-start-inset:var(--app-shell-titlebar-left-inset,0px)]",
                    children: N,
                  })),
                  (s[8] = N),
                  (s[9] = e))
                : (e = s[9]),
              e
            )
          }
          return (
            s[10] !== v || s[11] !== N
              ? ((n =
                  v?.titlebarSlots == null || v.hasTitlebarHeader
                    ? N
                    : (0, l.jsx)("div", { className: "h-full min-h-0 pt-[var(--height-toolbar)]", children: N })),
                (s[10] = v),
                (s[11] = N),
                (s[12] = n))
              : (n = s[12]),
            n
          )
        }
        ;(a.d(
          t,
          {},
          {
            LibraryFileLinkPreview: D,
            LibraryFilePreview: F,
            LibraryFileRoute: function (e) {
              let t,
                a,
                i,
                n = (0, r.c)(7),
                { returnTo: s } = e,
                o = void 0 === s ? "/library" : s,
                { libraryFileId: d } = (0, p.g)(),
                c = (0, p.Zp)()
              return (
                n[0] === Symbol.for("react.memo_cache_sentinel")
                  ? ((t = (0, l.jsx)(g.G.MainContentLayout, { layout: "custom-titlebar" })), (n[0] = t))
                  : (t = n[0]),
                n[1] !== c || n[2] !== o ? ((a = () => void c(o)), (n[1] = c), (n[2] = o), (n[3] = a)) : (a = n[3]),
                n[4] !== d || n[5] !== a
                  ? ((i = (0, l.jsxs)(l.Fragment, { children: [t, (0, l.jsx)(F, { libraryFileId: d, onClose: a })] })),
                    (n[4] = d),
                    (n[5] = a),
                    (n[6] = i))
                  : (i = n[6]),
                i
              )
            },
          },
        ),
          i())
      } catch (e) {
        i(e)
      }
    })
  },
  FM08(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("zd8w")
    a.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            a = (0, l.c)(5),
            { className: n, src: s, fallback: o } = e,
            [d, c] = (0, r.useState)(null)
          return (
            a[0] !== n || a[1] !== d || a[2] !== o || a[3] !== s
              ? ((t =
                  null != s && s !== d
                    ? (0, i.jsx)("img", {
                        alt: "",
                        className: n,
                        decoding: "async",
                        draggable: !1,
                        loading: "lazy",
                        src: s,
                        onError: () => c(s),
                      })
                    : (0, i.jsx)(i.Fragment, { children: o })),
                (a[0] = n),
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
  idI8(e, t, a) {
    var i = a("zd8w"),
      l = a("khOd"),
      r = a("eShZ"),
      n = a("r9ga"),
      s = a("pyoT")
    a.d(
      t,
      {},
      {
        openGlobalSearchSpacePage: async function (e, t, a, o, d, c) {
          let u, p
          if (!d()) return
          let g = e.get(s.spaceAccountId$)
          if (null != g) {
            if (null != o.space_id)
              try {
                let t = await e.queryClient.fetchQuery({
                  ...e.query.getOptions(s.spaceQuery$, o.space_id),
                  staleTime: 0,
                })
                if (null == t.root_page_id) throw Error("space_unavailable")
                u = t.root_page_id
              } catch (e) {
                if (!(e instanceof r.fk) || ![403, 404, 410].includes(e.status)) throw e
                p = e
              }
            if (null == u) {
              if (!d()) return
              let a = await e.queryClient.fetchQuery({
                ...e.query.getOptions(s.spacePageAncestryQuery$, o.page_id),
                staleTime: 0,
              })
              if (a.metadata.page_id !== o.page_id || !a.metadata.access.can_read || null != a.metadata.deleted_at)
                throw p ?? Error("page_unavailable")
              if (d()) {
                if (null != c) return void c(o.page_id)
                let a = { spaceSidebarAccountId: g, sidebarArea: e.get(l.GB) ? "space" : void 0 },
                  r = (0, n.mI)(e, o.page_id)
                ;(0, i.startTransition)(() => {
                  t(r, { state: a })
                })
              }
              return
            }
            if (d()) {
              if (null != c) return void c(o.page_id)
              ;(0, n.C_)(e, t, a, g, u, o.page_id)
            }
          }
        },
      },
    )
  },
  FiJQ(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("SZCv"),
      n = a.n(r),
      s = a("zTeN"),
      o = a("Wf1j"),
      d = a("oyxz"),
      c = a("RaBo"),
      u = a("BrP7"),
      p = a("cGrE"),
      g = a("jU86"),
      h = a("RjIR"),
      m = a("hZax")
    a.d(
      t,
      {},
      {
        h: function (e) {
          let t,
            a,
            r,
            f,
            v,
            y,
            b,
            x,
            _,
            w,
            S,
            C = (0, l.c)(34),
            { scope: I, sitesSelected: j } = e,
            A = void 0 !== j && j,
            P = (0, o.A)(),
            E = (0, s.Ul)(c.ND),
            k = (0, m.Zj)("library:collection:shared-with-me" !== I.value.directoryId || "476199071"),
            T = "favorites" === I.value.tab,
            M = null == I.value.directoryId && ("all" === I.value.tab || T),
            O = (0, s.Ul)(!!M && h._)
          if (
            (C[0] !== I.value.directoryId || C[1] !== I.value.tab
              ? ((t = {
                  key: "all",
                  name:
                    null == I.value.directoryId && "suggested" === I.value.tab
                      ? (0, i.jsx)(d.A, {
                          id: "libraryNext.tabs.suggested",
                          defaultMessage: "Suggested",
                          description: "Library tab for backend-ranked suggested items",
                        })
                      : (0, i.jsx)(d.A, {
                          id: "space.home.allTitle",
                          defaultMessage: "All",
                          description: "Title of the combined Library and Pages homepage",
                        }),
                }),
                (C[0] = I.value.directoryId),
                (C[1] = I.value.tab),
                (C[2] = t))
              : (t = C[2]),
            C[3] !== T || C[4] !== I.value.includePages
              ? ((a =
                  I.value.includePages || T
                    ? [
                        {
                          key: "pages",
                          name: (0, i.jsx)(d.A, {
                            id: "space.list.pagesTab",
                            defaultMessage: "Pages",
                            description: "Filter showing all Pages",
                          }),
                        },
                      ]
                    : []),
                (C[3] = T),
                (C[4] = I.value.includePages),
                (C[5] = a))
              : (a = C[5]),
            C[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = {
                  key: "presentations",
                  name: (0, i.jsx)(d.A, {
                    id: "space.home.slidesTitle",
                    defaultMessage: "Slides",
                    description:
                      "Heading and sidebar navigation label for the Space collection containing native Slides and presentation files",
                  }),
                }),
                (C[6] = r))
              : (r = C[6]),
            C[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = {
                  key: "spreadsheets",
                  name: (0, i.jsx)(d.A, {
                    id: "space.home.artifactTabs.sheets",
                    defaultMessage: "Sheets",
                    description: "Space type filter for native Sheets and spreadsheet files",
                  }),
                }),
                (C[7] = f))
              : (f = C[7]),
            C[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = {
                  key: "images",
                  name: (0, i.jsx)(d.A, {
                    id: "libraryNext.filters.images",
                    defaultMessage: "Images",
                    description: "Library image category, shown as a tab, filter menu option, or selected filter chip",
                  }),
                }),
                (C[8] = v))
              : (v = C[8]),
            C[9] !== k || C[10] !== E
              ? ((y =
                  "available" === E && k
                    ? [
                        {
                          key: "sites",
                          name: (0, i.jsx)(d.A, {
                            id: "codex.space.sites.title",
                            defaultMessage: "Sites",
                            description: "Title of the built-in Sites page in Spaces",
                          }),
                        },
                      ]
                    : []),
                (C[9] = k),
                (C[10] = E),
                (C[11] = y))
              : (y = C[11]),
            C[12] !== T ||
              C[13] !== O ||
              C[14] !== I.value.categories ||
              C[15] !== A ||
              C[16] !== t ||
              C[17] !== a ||
              C[18] !== y)
          ) {
            x = [t, ...a, r, f, v, ...y]
            let e = I.value.categories,
              l = 1 === e.length ? e[0] : null
            if (
              ((b = "custom"),
              A
                ? (b = "sites")
                : T
                  ? (b = 0 === e.length ? "favorites" : "custom")
                  : 0 === e.length
                    ? (b = "all")
                    : null != l && x.some((e) => e.key === l) && (b = l),
              "custom" === b)
            ) {
              let e
              ;(C[21] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = {
                    key: "custom",
                    name: (0, i.jsx)(d.A, {
                      id: "space.home.artifactTabs.filtered",
                      defaultMessage: "Filtered",
                      description:
                        "Selected artifact type tab when existing filters contain multiple types or another file type",
                    }),
                  }),
                  (C[21] = e))
                : (e = C[21]),
                x.push(e))
            }
            if (O) {
              let e
              ;(C[22] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = {
                    key: "favorites",
                    name: (0, i.jsx)(d.A, {
                      id: "library.tabs.favorites",
                      defaultMessage: "Favorites",
                      description: "Library tab for items the user saved as favorites",
                    }),
                  }),
                  (C[22] = e))
                : (e = C[22]),
                x.push(e))
            }
            ;((C[12] = T),
              (C[13] = O),
              (C[14] = I.value.categories),
              (C[15] = A),
              (C[16] = t),
              (C[17] = a),
              (C[18] = y),
              (C[19] = b),
              (C[20] = x))
          } else ((b = C[19]), (x = C[20]))
          return (
            C[23] !== P
              ? ((_ = P.formatMessage({
                  id: "space.home.artifactTabs.label",
                  defaultMessage: "Artifact types",
                  description: "Accessible label for Space artifact type filters",
                })),
                (C[23] = P),
                (C[24] = _))
              : (_ = C[24]),
            C[25] !== T || C[26] !== I || C[27] !== b
              ? ((w = (e) => {
                  if (e === b || "custom" === e) return
                  if ("sites" === e) {
                    let e = new URL(
                      (0, g.SE)({ ...I.value, tab: T ? "all" : I.value.tab, categories: [], sources: [] }),
                      "https://chatgpt.com",
                    )
                    ;(e.searchParams.set("artifact", "sites"), (0, g.zl)(I, e.pathname + e.search))
                    return
                  }
                  let t = I.value.tab
                  if ("favorites" === e || T) {
                    let a = "favorites" === e ? "favorites" : "all"
                    ;(a !== t && ((0, p.np)(I, { category: a }), (0, g.me)(I, { lastTab: a })), (t = a))
                  }
                  let a = "all" === e || "favorites" === e ? [] : [e]
                  "favorites" === e || n()(a, I.value.categories) || (0, p.np)(I, { fileTypes: a })
                  let i = (0, g.SE)({
                    ...I.value,
                    tab: t,
                    categories: a,
                    sources: t !== I.value.tab ? [] : I.value.sources,
                  })
                  ;(0, g.zl)(I, "/space" === i ? "/space?tab=suggested" : i)
                }),
                (C[25] = T),
                (C[26] = I),
                (C[27] = b),
                (C[28] = w))
              : (w = C[28]),
            C[29] !== b || C[30] !== _ || C[31] !== w || C[32] !== x
              ? ((S = (0, i.jsx)(u.t, {
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: _,
                  tabs: x,
                  selectedKey: b,
                  onSelect: w,
                })),
                (C[29] = b),
                (C[30] = _),
                (C[31] = w),
                (C[32] = x),
                (C[33] = S))
              : (S = C[33]),
            S
          )
        },
      },
    )
  },
  D14d(e, t, a) {
    var i = a("zTeN"),
      l = a("OWtl")
    let r = (0, i.vP)(l.u, null)
    a.d(t, {}, { t: r })
  },
  iC9N(e, t, a) {
    var i = a("HGuJ"),
      l = a("QxN6")
    a.d(
      t,
      {},
      {
        w: function (e) {
          return {
            openPageFile: (t) => (0, i.openChatGptFile)(e, t),
            openLibraryFile: (t, a) => (0, l.openLibraryFileTab)(e, t, a),
          }
        },
      },
    )
  },
  g70H(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("zTeN"),
      n = a("QinB"),
      s = a("htN9"),
      o = a("Kw4a")
    a.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            a,
            d = (0, l.c)(12),
            { document: c, pageId: u, surface: p, symbol: g } = e,
            h = void 0 === p ? "onboarding" : p,
            m = (0, r._U)(o.Pu, h),
            f = "onboarding" === h && "default" === m
          d[0] !== c || d[1] !== u || d[2] !== g || d[3] !== f || d[4] !== m
            ? ((t = (0, i.jsx)(n.N, { document: c, pageId: u, horizontalInset: f, symbol: g, variant: m })),
              (d[0] = c),
              (d[1] = u),
              (d[2] = g),
              (d[3] = f),
              (d[4] = m),
              (d[5] = t))
            : (t = d[5])
          let v = t
          if ("onboarding" !== h) {
            let e,
              t = "create" === h ? "h-full overflow-hidden bg-surface" : "h-full overflow-hidden bg-surface px-4"
            return (
              d[6] !== v || d[7] !== t
                ? ((e = (0, i.jsx)("div", { className: t, children: v })), (d[6] = v), (d[7] = t), (d[8] = e))
                : (e = d[8]),
              e
            )
          }
          return (
            d[9] !== v || d[10] !== m
              ? ((a =
                  "template" === m
                    ? (0, i.jsx)(s.FG, { kind: "page", children: v })
                    : (0, i.jsx)("div", {
                        className: "h-full bg-surface-secondary px-6 pt-5",
                        children: (0, i.jsx)("div", {
                          className: "h-full overflow-hidden rounded-[4px] border border-subtle bg-surface",
                          children: v,
                        }),
                      })),
                (d[9] = v),
                (d[10] = m),
                (d[11] = a))
              : (a = d[11]),
            a
          )
        },
      },
    )
  },
  ibtF(e, t, a) {
    var i = a("ASxG"),
      l = a("W0tK"),
      r = a("UR81"),
      n = a("LjYy"),
      s = a("jG6n"),
      o = a("dUuO")
    let d = new Map([
        ["feature-backlog", { kind: "icon", value: "logs", color: "orange" }],
        ["learning-plan", { kind: "icon", value: "graduation-cap", color: "purple" }],
        ["weekly-planner", { kind: "emoji", value: "📅" }],
        ["trip-planner", { kind: "icon", value: "plane", color: "blue" }],
        ["budget-tracker", { kind: "icon", value: "currency-dollar", color: "green" }],
        ["apartment-hunter", { kind: "emoji", value: "🏠" }],
        ["event-plan", { kind: "emoji", value: "🎉" }],
        ["personal-goals", { kind: "emoji", value: "🎯" }],
      ]),
      c = i.object({
        targeting: i.object({
          templates: s.xN.refine((e) => new Set(e.map(({ id: e }) => e)).size === e.length),
          recommendations: i.object({ business: s.CQ, education: s.CQ, individual: s.CQ, fallback: s.CQ }),
        }),
      })
    a.d(
      t,
      {},
      {
        X: function (e, t, a) {
          let i = (0, o.l)(e, t),
            s = { current: i, catalog: i, recommended: null }
          if (0 === i.length || (0, l.bW)(e.locale)?.split("-")[0] !== "en") return s
          let u = c.safeParse(t)
          if (!u.success) return s
          let p = u.data.targeting,
            g = new Set(i.map(({ id: e }) => e)),
            h = p.templates.filter(({ id: e }) => !g.has(e)),
            m = (0, o.l)(e, { templates: h })
          if (m.length !== h.length || m.some(({ id: e }, t) => e !== h[t]?.id)) return s
          let f = [...i, ...m.map((e) => ({ ...e, symbol: d.get(e.id) ?? e.symbol }))],
            v = new Map(f.map((e) => [e.id, e]))
          if (Object.values(p.recommendations).some((e) => e.some((e) => !v.has(e)))) return s
          let y =
              p.recommendations[
                (function (e) {
                  if ((0, r.V$)(e)) return "education"
                  if ((0, r.J8)(e) || (0, r.Hw)(e)) return "business"
                  switch (e) {
                    case n.x.FREE:
                    case n.x.GO:
                    case n.x.PLUS:
                    case n.x.PRO:
                    case n.x.PROMAX:
                    case n.x.PROLITE:
                      return "individual"
                    default:
                      return "fallback"
                  }
                })(a)
              ],
            b = y.flatMap((e) => v.get(e) ?? []),
            x = new Set(y)
          return { current: i, catalog: [...b, ...f.filter(({ id: e }) => !x.has(e))], recommended: b }
        },
      },
    )
  },
  CZSB(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("QBk8"),
      n = a("zTeN"),
      s = a("DBCl"),
      o = a("Wf1j"),
      d = a("HZfM"),
      c = a("SPnB"),
      u = a("Ghh3"),
      p = a("Sm6l"),
      g = a("bVeK"),
      h = a("Ankf"),
      m = a("OBB8"),
      f = a("iIsU"),
      v = a("pyoT"),
      y = a("yGJW"),
      b = a("OWtl"),
      x = a("eShZ"),
      _ = a("Kw4a"),
      w = a("g70H"),
      S = a("o72y"),
      C = a("Vx7B"),
      I = a("pyo2"),
      j = a("BBQT"),
      A = a("wvfh")
    function P(e) {
      let t,
        a,
        r,
        s,
        d = (0, l.c)(15),
        { suggestion: c, surface: u } = e,
        p = (0, n._U)(_.Pu, u),
        g = (0, o.A)()
      if (d[0] !== g.formatMessage || d[1] !== c.description || d[2] !== c.title || d[3] !== p) {
        let e = (0, f.Je)(g.formatMessage),
          a = e.schema()
        ;((t = e.serialize(
          a.nodes.doc.create(null, [
            ...("default" === p ? [a.nodes.heading.create({ level: 1 }, a.text(c.title))] : []),
            a.nodes.paragraph.create(null, c.description ? a.text(c.description) : null),
          ]),
        )),
          (d[0] = g.formatMessage),
          (d[1] = c.description),
          (d[2] = c.title),
          (d[3] = p),
          (d[4] = t))
      } else t = d[4]
      let h = t,
        m = `personalized-template-preview-${c.id}`
      return (
        d[5] !== h ? ((a = [{ kind: "markdown", markdown: h }]), (d[5] = h), (d[6] = a)) : (a = d[6]),
        d[7] !== h || d[8] !== c.title || d[9] !== a
          ? ((r = { title: c.title, markdown: h, units: a }), (d[7] = h), (d[8] = c.title), (d[9] = a), (d[10] = r))
          : (r = d[10]),
        d[11] !== u || d[12] !== m || d[13] !== r
          ? ((s = (0, i.jsx)(w.D, { symbol: null, surface: u, pageId: m, document: r })),
            (d[11] = u),
            (d[12] = m),
            (d[13] = r),
            (d[14] = s))
          : (s = d[14]),
        s
      )
    }
    a.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            a,
            f,
            _,
            w = (0, l.c)(27),
            { suggestion: E, surface: k, selectionSurface: T, onOpen: M, onOpenPage: O, isCurrent: N } = e,
            L = (0, n.gh)(b.u),
            U = (0, o.A)(),
            R = (0, d.Zp)(),
            F = (0, n.Ul)(A.K)
          w[0] !== U ||
          w[1] !== N ||
          w[2] !== R ||
          w[3] !== M ||
          w[4] !== O ||
          w[5] !== L ||
          w[6] !== T ||
          w[7] !== E ||
          w[8] !== k
            ? ((t = () => {
                ;((0, y.yy)(L, r.CodexSpacesTemplateGallery, {
                  action:
                    "onboarding" !== k
                      ? r.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED
                      : r.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_HOME_TILE_SELECTED,
                  category: "personalized_page",
                  selectionSurface:
                    "onboarding" !== k
                      ? (T ?? r.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL)
                      : r.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_SPACE_HOME_TILE,
                }),
                  (async function ({
                    scope: e,
                    suggestion: t,
                    navigate: a,
                    intl: i,
                    onOpen: l,
                    onOpenPage: n,
                    isCurrent: o,
                  }) {
                    let d = e.get(v.spaceAccountId$),
                      p = e.get(c.chatGptAuthenticatedUserId$)
                    if (null == d || null == p || Date.parse(t.expires_at) <= Date.now() || o?.() === !1) return
                    let g = null
                    await (0, j.K)({
                      scope: e,
                      title: t.title,
                      prompt: t.description ?? t.title,
                      prefillPrompt: t.description ?? t.title,
                      createPage: async (a, i) => {
                        let l = await u.Request.safePost("/pages/suggestions/{suggestion_id}/create", {
                          parameters: { path: { suggestion_id: t.id } },
                          additionalHeaders: { "ChatGPT-Account-ID": d, [s.zBc]: d },
                          signal: a,
                        }).catch((t) => {
                          throw (
                            i.requestFailed(t),
                            !a.aborted &&
                              ((0, m.o)(
                                e,
                                r.CodexSpacesCreationTarget.CODEX_SPACES_CREATION_TARGET_PAGE,
                                void 0,
                                t,
                                e.query.getData(v.spacesQuery$)?.items,
                                r.CodexSpacesSource.CODEX_SPACES_SOURCE_TEMPLATE,
                              ),
                              t instanceof x.fk &&
                                (403 === t.status || 404 === t.status || "page_deleted" === t.errorCode) &&
                                e.query.invalidate(S.ps)),
                            t
                          )
                        })
                        return (
                          a.throwIfAborted(),
                          e.query.invalidate(S.ps),
                          i.creationRequestSucceeded(),
                          (0, m.o)(
                            e,
                            r.CodexSpacesCreationTarget.CODEX_SPACES_CREATION_TARGET_PAGE,
                            l,
                            void 0,
                            e.query.getData(v.spacesQuery$)?.items,
                            r.CodexSpacesSource.CODEX_SPACES_SOURCE_TEMPLATE,
                          ),
                          (0, h.K)(e, l.metadata.page_id, r.CodexSpacesSource.CODEX_SPACES_SOURCE_TEMPLATE),
                          (g = l.setup_prompt ?? null),
                          l
                        )
                      },
                      getSetupPrompt: () => g,
                      isAvailable: (e) => e.get(S.fH),
                      navigate: (e) => {
                        if (null == n || "string" != typeof e)
                          return a(e, { state: { spaceSidebarAccountId: d, spaceSidebarPersonal: !0 } })
                        n(e.slice(7))
                      },
                      intl: i,
                      onOpen: l,
                    })
                  })({ scope: L, suggestion: E, navigate: R, intl: U, onOpen: M, onOpenPage: O, isCurrent: N }))
              }),
              (w[0] = U),
              (w[1] = N),
              (w[2] = R),
              (w[3] = M),
              (w[4] = O),
              (w[5] = L),
              (w[6] = T),
              (w[7] = E),
              (w[8] = k),
              (w[9] = t))
            : (t = w[9])
          let D = t
          return (
            w[10] !== E || w[11] !== k
              ? ((a = (0, i.jsx)(P, { suggestion: E, surface: k })), (w[10] = E), (w[11] = k), (w[12] = a))
              : (a = w[12]),
            w[13] !== U || w[14] !== F || w[15] !== L || w[16] !== E.id || w[17] !== E.title || w[18] !== k
              ? ((f =
                  "onboarding" === k
                    ? (0, i.jsx)(p.$, {
                        color: "ghostMuted",
                        size: "compact",
                        uniform: !0,
                        disabled: F,
                        "aria-label": U.formatMessage(
                          {
                            id: "space.gettingStarted.dismissPersonalizedPage",
                            defaultMessage: "Dismiss {title}",
                            description:
                              "Accessible label for removing a personalized Page suggestion from Space Getting started. The title is the suggestion's name; dismissing does not create or delete a Page and leaves it available in the template gallery.",
                          },
                          { title: E.title },
                        ),
                        onClick: () => {
                          ;((0, y.yy)(L, r.CodexSpacesOnboarding, {
                            action: r.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_ITEM_DISMISSED,
                            item: r.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_PERSONALIZED_PAGE,
                          }),
                            (0, I.$V)(L, `personalized:${E.id}`))
                        },
                        children: (0, i.jsx)(g.Gmf, {}),
                      })
                    : void 0),
                (w[13] = U),
                (w[14] = F),
                (w[15] = L),
                (w[16] = E.id),
                (w[17] = E.title),
                (w[18] = k),
                (w[19] = f))
              : (f = w[19]),
            w[20] !== D || w[21] !== F || w[22] !== E.title || w[23] !== k || w[24] !== a || w[25] !== f
              ? ((_ = (0, i.jsx)(C.Z, { title: E.title, surface: k, preview: a, disabled: F, onOpen: D, actions: f })),
                (w[20] = D),
                (w[21] = F),
                (w[22] = E.title),
                (w[23] = k),
                (w[24] = a),
                (w[25] = f),
                (w[26] = _))
              : (_ = w[26]),
            _
          )
        },
      },
    )
  },
  e7M0(e, t, a) {
    var i = a("SPnB"),
      l = a("svjy"),
      r = a("kpIY"),
      n = a("e1xH"),
      s = a("QftW"),
      o = a("pyoT"),
      d = a("vHxi"),
      c = a("nndI"),
      u = a("SCmN"),
      p = a("Kw4a"),
      g = a("v5SL"),
      h = a("pyo2")
    function m(e, t) {
      let a = e.get(i.chatGptAuthenticatedUserId$)
      null != a && !0 === e.get(h.vF) && null == e.get(g.Q6)[JSON.stringify([t, a])] && (0, g.al)(e, t, a)
    }
    a.d(
      t,
      {},
      {
        provisionSpaceWelcomePage: async function (e) {
          if (!e.get(p.vy)) return
          let t = e.get(o.spaceAccountId$)
          ;(null != t && m(e, t), await e.when(({ get: e }) => null != e(o.spaceAccountId$) || !e(p.vy)))
          let a = e.get(o.spaceAccountId$)
          if (null == a || !e.get(p.vy)) return
          ;(m(e, a), await e.when(({ get: e }) => null != e(u.jm) || e(o.spaceAccountId$) !== a || !e(p.vy)))
          let i = e.get(u.jm)
          if (
            i?.accountId !== a ||
            ((0, r.EG)(g.ON, { entries: { [i.key]: { value: e.get(g.aj)[i.key] ?? Date.now() } }, maxEntries: 100 }),
            await e.when(
              ({ get: e }) => null != e(g.Q6)[i.key] || e(u.jm)?.key !== i.key || !e(p.vy) || null != e(h.vF),
            ),
            e.get(u.jm)?.key !== i.key || !e.get(p.vy)) ||
            (m(e, a), !e.get(h.aQ).includes("welcome"))
          )
            return
          let f = e.get(c.ax)[i.key],
            v = await (0, d.h)(e, e.get(l.g), f ?? null)
          null != v &&
            e.get(u.jm)?.key === i.key &&
            e.get(h.aQ).includes("welcome") &&
            e.get(n.wr) &&
            e.query.getOrFetch(s.ab, v).catch(() => {})
        },
      },
    )
  },
  i1Zq(e, t, a) {
    var i = a("QBk8"),
      l = a("zTeN"),
      r = a("PFjh"),
      n = a("Ghh3"),
      s = a("yGJW"),
      o = a("OWtl"),
      d = a("eShZ"),
      c = a("OoIX"),
      u = a("pyoT"),
      p = a("WF9u"),
      g = a("nndI"),
      h = a("SCmN"),
      m = a("Kw4a"),
      f = a("pyo2"),
      v = a("JkZJ")
    let y = (0, l.bD)(o.u, (e) => "idle")
    a.d(
      t,
      {},
      {
        J: y,
        m: async function (e, t, a = !1, o = "onboarding", b) {
          let x = e.get(h.jm)
          if (a && null != x && ("creating" === e.get(y, x.key) || e.get(h.av, x.key)))
            throw Error("Welcome Page is busy; retry reset after it finishes")
          let _ = null == x ? void 0 : e.get(g.ax)[x.key]
          if (
            null == x ||
            ("onboarding" === o && !a && !e.get(f.aQ).includes("welcome")) ||
            (!a && null != _) ||
            "creating" === e.get(y, x.key)
          )
            return
          let w = (0, u.watchSpaceAccount)(e, x.accountId, x.userId),
            S = new AbortController(),
            C = e.watch(({ get: e }) => {
              "onboarding" !== o || e(m.vy) || S.abort()
            }),
            I = AbortSignal.any([w.signal, S.signal]),
            j = e.get(r.T$)
          ;(j.count("codex_pages", "welcome_creation", { outcome: "failed" === e.get(y, x.key) ? "retry" : "started" }),
            e.set(y, x.key, "creating"),
            a && e.set(h.Dj, x.key, "unknown"))
          let A = e.get(g.bs)[x.key],
            P = b ?? e.get(g.DF)[x.key] ?? A?.idempotency_key ?? g.qu
          ;(A?.idempotency_key !== P && (A = void 0), null == A && null == b && (P = (0, g.t8)(P)))
          try {
            ;(null == A || a) && (0, c.Jx)(e)
            let r = () => {
              A?.idempotency_key !== P &&
                ((0, c.Jx)(e),
                (A = {
                  idempotency_key: P,
                  destination: "personal_file_drive",
                  title: (0, v.eg)(t),
                  initial_blocks: (0, v.gt)(t, p.rZ),
                  parent_page_id: null,
                }))
              let r = A
              return e.get(u.createSpacePageMutation$).mutateAsync({
                source: i.CodexSpacesSource.CODEX_SPACES_SOURCE_WELCOME,
                accountId: x.accountId,
                requestBody: r,
                assertRequestCurrent: () => {
                  ;(I.throwIfAborted(),
                    e.get(g.bs)[x.key]?.idempotency_key !== r.idempotency_key && (0, c.Jx)(e),
                    (0, l.Y)(e, (e) => {
                      ;(e.set(g.DF, (e) => ({ ...e, [x.key]: P })), e.set(g.bs, (e) => ({ ...e, [x.key]: r })))
                    }))
                },
                signal: I,
                isExpectedError: (e) =>
                  !a &&
                  !P.startsWith("space-welcome-readable:") &&
                  ((403 === e.status && "page_read_forbidden" === e.errorCode) ||
                    (404 === e.status && "page_not_found" === e.errorCode)),
              })
            }
            if (a) {
              let t = _,
                a = !1
              try {
                ;((t = t ?? (await r()).metadata.page_id), I.throwIfAborted())
                try {
                  ;(await n.Request.safePost("/pages/{page_id}/delete", {
                    parameters: { path: { page_id: t } },
                    signal: I,
                    isExpectedError: (e) =>
                      (403 === e.status && "page_write_forbidden" === e.errorCode) ||
                      (410 === e.status && "page_deleted" === e.errorCode),
                  }),
                    (a = !0))
                } catch (e) {
                  ;(I.throwIfAborted(), (a = e instanceof d.fk && 410 === e.status && "page_deleted" === e.errorCode))
                }
              } catch (e) {
                if (!(e instanceof d.fk) || 410 !== e.status || "page_deleted" !== e.errorCode) throw e
                a = !0
              }
              ;(I.throwIfAborted(),
                (P = g.qu + ":reset:" + (t ?? crypto.randomUUID())),
                (0, l.Y)(e, (e) => {
                  ;(e.set(g.DF, (e) => ({ ...e, [x.key]: P })), (0, h.YB)(e, x.key))
                }),
                a && null != t && (0, u.evictCachedSpacePages)(e, [t], x.accountId, { unavailablePageIds: [t] }))
            }
            let s = await r().catch(async (t) => {
              if (
                !a &&
                t instanceof d.fk &&
                ((403 === t.status && "page_read_forbidden" === t.errorCode) ||
                  (404 === t.status && "page_not_found" === t.errorCode)) &&
                !P.startsWith("space-welcome-readable:")
              )
                return (
                  I.throwIfAborted(),
                  (P = "space-welcome-readable:" + P),
                  e.set(g.DF, (e) => ({ ...e, [x.key]: P })),
                  r()
                )
              if (!a || !(t instanceof d.fk) || 410 !== t.status || "page_deleted" !== t.errorCode) throw t
              return (
                I.throwIfAborted(),
                (P = g.qu + ":reset:" + crypto.randomUUID()),
                e.set(g.DF, (e) => ({ ...e, [x.key]: P })),
                r()
              )
            })
            if ((I.throwIfAborted(), (0, g.gC)(e, x.key, s.metadata.page_id), null == s.content))
              throw Error("Welcome Page content could not be read")
            ;((0, u.cacheCreatedSpacePage)(e, x.accountId, s),
              (0, l.Y)(e, (e) => {
                ;(e.set(h.Dj, x.key, "available"),
                  e.set(g.ax, (e) => ({ ...e, [x.key]: s.metadata.page_id })),
                  e.set(y, x.key, "idle"))
              }),
              j.count("codex_pages", "welcome_creation", { outcome: "bound" }))
          } catch (r) {
            let t = !a && !I.aborted && r instanceof d.fk && "page_deleted" === r.errorCode
            ;(t
              ? (0, f.$V)(e, "welcome")
              : I.aborted ||
                (e.set(h.Dj, x.key, "failed"),
                (0, s.yy)(e, i.CodexSpacesOnboarding, {
                  action: i.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_WELCOME_PAGE_FAILED,
                  item: i.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
                  pageId: e.get(g.FZ)[x.key],
                  failureOperation:
                    i.CodexSpacesOnboardingFailureOperation.CODEX_SPACES_ONBOARDING_FAILURE_OPERATION_CREATE,
                })),
              e.set(y, x.key, I.aborted || t ? "idle" : "failed"))
            let l = t ? "deleted" : "failed"
            if (
              (I.aborted && (l = "cancelled"),
              j.count("codex_pages", "welcome_creation", { outcome: l }),
              a || "legacy" === o)
            )
              throw r
          } finally {
            ;(C(), w.stop())
          }
        },
      },
    )
  },
  VU3o(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("QBk8"),
      n = a("D015"),
      s = a("AFKC"),
      o = a("on57"),
      d = a("iodE"),
      c = a("zTeN"),
      u = a("zd8w"),
      p = a("oyxz"),
      g = a("Wf1j"),
      h = a("SPnB"),
      m = a("Sm6l"),
      f = a("bVeK"),
      v = a("evwP"),
      y = a("RNul"),
      b = a("rpnz"),
      x = a("e1xH"),
      _ = a("iyTF"),
      w = a("yGJW"),
      S = a("OWtl"),
      C = a("htN9"),
      I = a("Vx7B"),
      j = a("C9Ga"),
      A = a("iOgI")
    function P(e) {
      let t,
        a,
        s,
        o,
        g,
        h,
        m = (0, l.c)(23),
        { template: f, onOpen: v, onSelect: _, templatePosition: j, surface: P, compactTitle: E, disabled: k } = e,
        T = (0, c.gh)(S.u),
        M = (0, c._U)(x.H6, "granola_presentation"),
        O = (0, c.Ul)(A.M),
        N = (0, c.Ul)(b.ut),
        L = (0, d.tF)(),
        U = (0, u.useRef)(null)
      if (
        (m[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = () => () => U.current?.abort()), (a = []), (m[0] = t), (m[1] = a))
          : ((t = m[0]), (a = m[1])),
        (0, u.useEffect)(t, a),
        !M)
      )
        return null
      if (O === f.id) {
        let e
        ;(m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsxs)("span", {
              className: "inline-flex items-center gap-1",
              role: "status",
              children: [
                (0, i.jsx)(y.y, { as: "span", className: "icon-xxs" }),
                (0, i.jsx)(p.A, {
                  id: "space.slideTemplates.opening",
                  defaultMessage: "Opening…",
                  description: "Status while loading and creating a native Slides template",
                }),
              ],
            })),
            (m[2] = e))
          : (e = m[2]),
          (s = e))
      } else if (void 0 !== E && E) {
        let e
        ;(m[3] !== f.title
          ? ((e = (0, i.jsx)("span", { className: "text-sm", children: f.title })), (m[3] = f.title), (m[4] = e))
          : (e = m[4]),
          (s = e))
      }
      m[5] !== P || m[6] !== f
        ? ((o =
            "create" === P
              ? (0, i.jsx)(
                  C.gr,
                  {
                    metadata: "source" in f ? f.thumbnailMetadata : void 0,
                    src: "source" in f ? f.thumbnailUrl : f.thumbnail,
                  },
                  "source" in f ? f.thumbnailUrl : f.thumbnail,
                )
              : (0, i.jsx)("img", {
                  className: "size-full object-cover",
                  src: "source" in f ? f.thumbnailUrl : f.thumbnail,
                  alt: "",
                  draggable: !1,
                })),
          (m[5] = P),
          (m[6] = f),
          (m[7] = o))
        : (o = m[7])
      let R = (void 0 !== k && k) || null != O || (N && null == _) || !L,
        F = O === f.id ? "dimmed" : "unchanged"
      return (
        m[8] !== v || m[9] !== _ || m[10] !== T || m[11] !== P || m[12] !== f || m[13] !== j
          ? ((g = () => {
              ;("onboarding" === P &&
                (0, w.yy)(T, r.CodexSpacesOnboarding, {
                  action: r.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_ITEM_SELECTED,
                  item: r.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_TEMPLATES,
                }),
              (0, w.yy)(T, r.CodexSpacesTemplateGallery, {
                action:
                  "onboarding" === P
                    ? r.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_HOME_TILE_SELECTED
                    : r.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
                category: "slides",
                templateId: f.id,
                templatePosition: null == j ? void 0 : (0, n.At)(j),
                selectionSurface:
                  "onboarding" === P
                    ? r.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_SPACE_HOME_TILE
                    : r.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL,
              }),
              null != _)
                ? _(f)
                : ((U.current = new AbortController()),
                  (0, A._)({ scope: T, template: f, onOpen: v, signal: U.current.signal }))
            }),
            (m[8] = v),
            (m[9] = _),
            (m[10] = T),
            (m[11] = P),
            (m[12] = f),
            (m[13] = j),
            (m[14] = g))
          : (g = m[14]),
        m[15] !== P || m[16] !== o || m[17] !== R || m[18] !== F || m[19] !== g || m[20] !== f.title || m[21] !== s
          ? ((h = (0, i.jsx)(I.Z, {
              title: f.title,
              kind: "slides",
              surface: P,
              titleContent: s,
              preview: o,
              disabled: R,
              disabledAppearance: F,
              onOpen: g,
            })),
            (m[15] = P),
            (m[16] = o),
            (m[17] = R),
            (m[18] = F),
            (m[19] = g),
            (m[20] = f.title),
            (m[21] = s),
            (m[22] = h))
          : (h = m[22]),
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
            r,
            n,
            d,
            b,
            w,
            C,
            I = (0, l.c)(44),
            { onOpen: A, onSelect: E, expanded: k, stickyHeading: T, compactTitle: M, heading: O, disabled: N } = e,
            L = void 0 !== k && k,
            U = void 0 !== T && T,
            R = void 0 !== M && M,
            F = void 0 !== N && N,
            D = (0, c.gh)(S.u),
            G = (0, c._U)(x.H6, "granola_presentation"),
            B = (0, g.A)(),
            z = (0, c.Ul)(h.o8),
            { data: H, isLoading: $, isError: V } = (0, c.Ul)(G ? _.i8 : null) ?? {},
            Q = (0, u.useId)(),
            W = (0, s.g)()
          if (!G) return null
          if ($) {
            let e, a
            ;(I[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(y.y, {})), (I[0] = e)) : (e = I[0]),
              I[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = (0, i.jsxs)("div", {
                    className: "flex min-h-56 items-center justify-center",
                    role: "status",
                    children: [
                      e,
                      (0, i.jsx)("span", {
                        className: "sr-only",
                        children: (0, i.jsx)(p.A, {
                          id: "space.slideTemplates.loading",
                          defaultMessage: "Loading Slides templates",
                          description: "Status while the shared native Slides template catalog loads",
                        }),
                      }),
                    ],
                  })),
                  (I[1] = a))
                : (a = I[1]),
              (t = a))
          } else if (V) {
            let e, a, l, r
            ;(I[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(p.A, {
                  id: "space.slideTemplates.loadFailed",
                  defaultMessage: "Couldn’t load Slides templates",
                  description: "Error when the shared native Slides template catalog cannot load",
                })),
                (I[2] = e))
              : (e = I[2]),
              I[3] !== D ? ((a = () => void (0, _.JF)(D)), (I[3] = D), (I[4] = a)) : (a = I[4]),
              I[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((l = (0, i.jsx)(p.A, {
                    id: "space.slideTemplates.retry",
                    defaultMessage: "Try again",
                    description: "Retry loading the shared native Slides template catalog",
                  })),
                  (I[5] = l))
                : (l = I[5]),
              I[6] !== a
                ? ((r = (0, i.jsxs)(v.W, {
                    children: [e, (0, i.jsx)(m.$, { color: "ghost", size: "toolbar", onClick: a, children: l })],
                  })),
                  (I[6] = a),
                  (I[7] = r))
                : (r = I[7]),
              (t = r))
          } else if (H?.length === 0) {
            let e
            ;(I[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(v.W, {
                  children: (0, i.jsx)(p.A, {
                    id: "space.slideTemplates.empty",
                    defaultMessage: "No Slides templates available",
                    description: "Empty state when the shared catalog has no eligible native Slides templates",
                  }),
                })),
                (I[8] = e))
              : (e = I[8]),
              (t = e))
          } else {
            let e,
              a,
              l,
              r = L ? void 0 : W.actions.viewportRef,
              n = L
                ? "-m-2 grid grid-cols-3 gap-4 p-2 [@media(max-width:48rem)]:grid-cols-2 [@media(max-width:30rem)]:grid-cols-1"
                : "-m-2 gap-3 p-3 horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased flex scrollbar-none overflow-x-auto overscroll-x-contain *:min-w-56 *:flex-[0_0_calc((100%-2.25rem)/4)]"
            ;(I[9] !== n ? ((e = (0, o.A)("min-w-0", n)), (I[9] = n), (I[10] = e)) : (e = I[10]),
              I[11] !== R || I[12] !== F || I[13] !== A || I[14] !== E || I[15] !== H || I[16] !== z
                ? ((a =
                    null != H &&
                    H.map((e, t) =>
                      (0, i.jsx)(
                        P,
                        {
                          template: e,
                          templatePosition: null == z ? void 0 : t + 1,
                          onOpen: A,
                          onSelect: E,
                          surface: "gallery",
                          compactTitle: R,
                          disabled: F,
                        },
                        e.id,
                      ),
                    )),
                  (I[11] = R),
                  (I[12] = F),
                  (I[13] = A),
                  (I[14] = E),
                  (I[15] = H),
                  (I[16] = z),
                  (I[17] = a))
                : (a = I[17]),
              I[18] !== r || I[19] !== e || I[20] !== a
                ? ((l = (0, i.jsx)("div", { ref: r, className: e, children: a })),
                  (I[18] = r),
                  (I[19] = e),
                  (I[20] = a),
                  (I[21] = l))
                : (l = I[21]),
              (t = l))
          }
          let Z = U && "sticky top-0 z-10 -mx-4 px-4 py-4"
          return (
            I[22] !== Z
              ? ((a = (0, o.A)("mb-3 flex items-center justify-between gap-2", Z)), (I[22] = Z), (I[23] = a))
              : (a = I[23]),
            I[24] !== O ? ((r = O ?? (0, i.jsx)(p.A, { ...j.a.heading })), (I[24] = O), (I[25] = r)) : (r = I[25]),
            I[26] !== Q || I[27] !== r
              ? ((n = (0, i.jsx)("h3", { id: Q, className: "m-0 body-md font-semibold", children: r })),
                (I[26] = Q),
                (I[27] = r),
                (I[28] = n))
              : (n = I[28]),
            I[29] !== W || I[30] !== L || I[31] !== B
              ? ((d =
                  !L &&
                  (W.model.canPrevious || W.model.canNext) &&
                  (0, i.jsxs)("div", {
                    className: "flex shrink-0 items-center gap-1",
                    children: [
                      (0, i.jsx)(m.$, {
                        color: "ghostActive",
                        size: "toolbar",
                        uniform: !0,
                        disabled: !W.model.canPrevious,
                        onClick: W.actions.previous,
                        "aria-label": B.formatMessage({
                          id: "space.slideTemplates.previous",
                          defaultMessage: "Previous Slides templates",
                          description: "Scroll the native Slides templates carousel backward",
                        }),
                        children: (0, i.jsx)(f.KBq, { className: "rtl:rotate-180" }),
                      }),
                      (0, i.jsx)(m.$, {
                        color: "ghostActive",
                        size: "toolbar",
                        uniform: !0,
                        disabled: !W.model.canNext,
                        onClick: W.actions.next,
                        "aria-label": B.formatMessage({
                          id: "space.slideTemplates.next",
                          defaultMessage: "Next Slides templates",
                          description: "Scroll the native Slides templates carousel forward",
                        }),
                        children: (0, i.jsx)(f.j1b, { className: "rtl:rotate-180" }),
                      }),
                    ],
                  })),
                (I[29] = W),
                (I[30] = L),
                (I[31] = B),
                (I[32] = d))
              : (d = I[32]),
            I[33] !== a || I[34] !== n || I[35] !== d
              ? ((b = (0, i.jsxs)("div", { className: a, children: [n, d] })),
                (I[33] = a),
                (I[34] = n),
                (I[35] = d),
                (I[36] = b))
              : (b = I[36]),
            I[37] !== t || I[38] !== U
              ? ((w = U ? (0, i.jsx)("div", { "data-sticky-section-content": !0, children: t }) : t),
                (I[37] = t),
                (I[38] = U),
                (I[39] = w))
              : (w = I[39]),
            I[40] !== Q || I[41] !== b || I[42] !== w
              ? ((C = (0, i.jsxs)("section", { "aria-labelledby": Q, children: [b, w] })),
                (I[40] = Q),
                (I[41] = b),
                (I[42] = w),
                (I[43] = C))
              : (C = I[43]),
            C
          )
        },
        q: P,
      },
    )
  },
  iOgI(e, t, a) {
    var i = a("zTeN"),
      l = a("E8Sp"),
      r = a("SPnB"),
      n = a("SGsN"),
      s = a("svjy"),
      o = a("nlNF"),
      d = a("rpnz"),
      c = a("e1xH"),
      u = a("SEOK"),
      p = a("kkOV"),
      g = a("pyoT"),
      h = a("iyTF"),
      m = a("OWtl")
    let f = (0, i.vP)(m.u, null)
    a.d(
      t,
      {},
      {
        M: f,
        _: async function ({ scope: e, template: t, onOpen: i, signal: m }) {
          let v,
            y,
            b = e.get(g.spaceAccountId$),
            x = e.get(r.o8)
          if (null == b || null == x || null != e.get(f) || e.get(d.ut) || !e.get(c.H6, "granola_presentation")) return
          let _ = (0, g.watchSpaceAccount)(e, b, void 0, void 0, x),
            w = new AbortController(),
            S = AbortSignal.any([_.signal, w.signal]),
            C = () => {
              null == v && w.abort(m.reason)
            }
          ;(m.addEventListener("abort", C, { once: !0 }), m.aborted && C())
          let I = e.get(o.x2)
          e.set(f, t.id)
          try {
            let [r, { preparePageHandoff: o }, { importPreparedArtifact: d }] = await Promise.all([
                (0, h.TM)(e, t, S),
                Promise.all([
                  a.e(593475),
                  a.e(339467),
                  a.e(632285),
                  a.e(498983),
                  a.e(388023),
                  a.e(68876),
                  a.e(357621),
                  a.e(723519),
                  a.e(676388),
                  a.e(695347),
                  a.e(88880),
                  a.e(188511),
                  a.e(285683),
                ]).then(a.bind(a, "azJ3")),
                Promise.all([
                  a.e(593475),
                  a.e(339467),
                  a.e(632285),
                  a.e(498983),
                  a.e(388023),
                  a.e(68876),
                  a.e(357621),
                  a.e(723519),
                  a.e(676388),
                  a.e(695347),
                  a.e(88880),
                  a.e(188511),
                  a.e(137660),
                ]).then(a.bind(a, "kO7B")),
              ]),
              g = await o(
                { kind: "presentation", artifactProto: r, stateVersion: 0, assets: [] },
                S,
                e.get(c.LM, "granola_presentation"),
              )
            if ((S.throwIfAborted(), !e.get(c.H6, "granola_presentation"))) return
            ;(
              await d(e, {
                accountId: b,
                title: t.title,
                documentType: "granola_presentation",
                prepared: g,
                signal: S,
                onSaveRetry: (t) => {
                  if ((y?.close(), (y = void 0), null != t && null == v && !S.aborted)) {
                    let a = e.get(s.g)
                    y = e
                      .get(n.Id)
                      .danger(a.formatMessage(p.v.granola_presentation.syncFailed), {
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
                  ;((v = t),
                    e.set(f, null),
                    m.aborted ||
                      S.aborted ||
                      (i?.(),
                      (0, l.oo)(e, `/space/${t}`, {
                        state: {
                          ...(null != I ? (0, u.$)(I, b, t) : void 0),
                          spaceSidebarAccountId: b,
                          spaceSidebarPersonal: !0,
                        },
                      })))
                },
              })
            ).releaseNativeDocument()
          } catch {
            null != v ||
              S.aborted ||
              e
                .get(n.Id)
                .danger(
                  e
                    .get(s.g)
                    .formatMessage({
                      id: "space.slideTemplates.openFailed",
                      defaultMessage: "Couldn’t open this Slides template. Try again.",
                      description: "Error when a native Slides template cannot be downloaded or opened",
                    }),
                  { errorAnalytics: { toastId: "space.slideTemplates.openFailed" } },
                )
          } finally {
            ;(y?.close(), m.removeEventListener("abort", C), _.stop(), null == v && e.set(f, null))
          }
        },
      },
    )
  },
  wvfh(e, t, a) {
    var i = a("zTeN"),
      l = a("OWtl")
    let r = (0, i.vP)(l.u, !1)
    a.d(t, {}, { K: r })
  },
  BBQT(e, t, a) {
    var i = a("QBk8"),
      l = a("zTeN"),
      r = a("DBCl"),
      n = a("E8Sp"),
      s = a("eFn4"),
      o = a("abd8"),
      d = a("rPIX"),
      c = a("SGsN"),
      u = a("zj7j"),
      p = a("n8vi"),
      g = a("qPPq"),
      h = a("p66p"),
      m = a("pyoT"),
      f = a("WFY2"),
      v = a("Kw4a"),
      y = a("wvfh"),
      b = a("GAcX")
    a.d(
      t,
      {},
      {
        K: async function ({
          scope: e,
          title: t,
          prompt: a,
          prefillPrompt: x,
          initialDocument: _,
          initialSymbol: w,
          revealSetupComment: S = !1,
          navigate: C,
          intl: I,
          onOpen: j,
          createPage: A,
          getSetupPrompt: P,
          isAvailable: E = (e) => e.get(v.wu),
        }) {
          let k,
            T = e.get(m.spaceAccountId$)
          if (null == T || e.get(y.K) || !E(e)) return
          let M = e.get(s.lN).status,
            O = "allowed" === M
          e.set(y.K, !0)
          let N = (0, m.watchSpaceAccount)(e, T),
            L = new AbortController(),
            U = AbortSignal.any([N.signal, L.signal]),
            R = e.get(n.gM),
            F = e.watch((e) => {
              let { get: t } = e,
                a = t(n.gM),
                i = t(b.X0)
              ;(!E(e) ||
                (O && "allowed" !== t(s.lN).status) ||
                (O && null != k && null == i) ||
                (a !== R &&
                  (null == k || (a.pathname !== `/space/${k}` && a.pathname !== `/space/${t(m.spacePageId$, k)}`)))) &&
                L.abort()
            })
          try {
            let c = (0, r.udX)(),
              v = (0, p.startSpacePageCreation)(
                e,
                {
                  source: i.CodexSpacesSource.CODEX_SPACES_SOURCE_TEMPLATE,
                  title: t,
                  createPage: A,
                  initialDocument: _,
                  initialSymbol: w,
                  initializePage:
                    null == _ && null == w
                      ? void 0
                      : (e, t) => e.flush({ scope: "current", timeoutMs: null, signal: t }),
                },
                c.resolve,
              )
            ;(v.completion.catch(() => {}),
              (k = v.pageId),
              O &&
                (e.set(b.X0, { presentation: "draft", title: t, accountId: T, pageId: k, answer: a, status: "queued" }),
                e.set(h.Mr, { accountId: T, pageId: k, prompt: a })),
              j?.(),
              C(`/space/${k}`))
            let y = (0, r._qC)(c.promise, U),
              N = await y
            U.throwIfAborted()
            let L = null == P ? a : P()
            if (null == L) return
            if (O && L !== a) {
              let t = e.get(b.X0)
              ;(t?.answer === a && e.set(b.X0, { ...t, answer: L }),
                e.set(h.Mr, { accountId: T, pageId: k, prompt: L }))
            }
            if (!O) {
              try {
                await (0, h.SO)(
                  e,
                  {
                    accountId: T,
                    pageId: N.metadata.page_id,
                    prompt: null == P ? x : L,
                    project: void 0,
                    prefillOnly: !0,
                    prefillOnComposerMount: !0,
                  },
                  (e) => {
                    let { get: t } = e,
                      a = t(n.gM),
                      i = a === R || a.pathname === `/space/${k}` || a.pathname === `/space/${N.metadata.page_id}`
                    return U.aborted || t(m.spaceAccountId$) !== T || !E(e) || t(s.lN).status !== M || !i
                  },
                )
              } catch (e) {
                U.aborted || f.v.warning("Failed to prefill Page template chat", { safe: {}, sensitive: { error: e } })
              }
              return
            }
            S && (0, h.e6)(e, { accountId: T, pageId: k })
            let F = !1,
              D = null
            for (;;) {
              U.throwIfAborted()
              try {
                ;(await (0, r._qC)(
                  e.when(({ get: e }) => {
                    let t = e(b.X0)
                    return null == t || "queued" === t.status
                  }),
                  U,
                ),
                  U.throwIfAborted(),
                  await (0, h.F2)(e, { accountId: T, pageId: v.pageId }, U),
                  U.throwIfAborted(),
                  await (0, h.SO)(
                    e,
                    {
                      accountId: T,
                      pageId: N.metadata.page_id,
                      prompt: L,
                      setupInstructions:
                        `For this initial setup request, the app has already created and opened the destination Page (page_id: ${N.metadata.page_id}). The user's request, even if it says "create a new page", describes what to put in this existing Page; the creation step is complete. Use this exact page_id when following the setup prompt's instructions, including any questions it asks you to ask before editing. Do not call create_page or create a replacement Page for this setup. Preserve any user edits. If this Page cannot be edited, report the problem in chat instead of creating another Page.` +
                        (null == _
                          ? ""
                          : "\n\n" +
                            I.formatMessage({
                              id: "space.pageTemplates.sampleContentInstructions",
                              defaultMessage:
                                "This Page starts with illustrative template content, not facts about the user or their work. Read the Page before editing and preserve any user edits. Replace sample content with relevant, source-backed information; do not treat sample content as evidence. Maintain the useful structure and expand it where needed. If essential information is missing, ask a focused question rather than guessing. The Page title is displayed separately; do not repeat it as a heading in the body. Leave up to three comments where specific user input is needed, attached to the relevant content. Do not add comments unnecessarily or repeat the same question across comments and chat.",
                              description:
                                "Hidden model instructions for Page template setup: use real sources, preserve user edits, keep the title separate, and ask for input through relevant comments without repeating questions in chat",
                            })) +
                        " For the Page body, do not add introductory paragraphs, conclusions, coverage summaries, methodology, scheduling details, or explanations of how you maintain the checklist. Avoid boilerplate such as ‘source deadlines are preserved,’ ‘completion is not yet established,’ or ‘this is a focused checklist.’ Keep substantive project overviews and progress updates, actionable content, supported task deadlines, product limitations, risks, and availability qualifiers beside the relevant entries in the Page. Put only drafting and maintenance commentary or related questions in comments or chat instead of adding boilerplate to the Page. Save these presentation rules in the Page’s durable instructions when maintaining it.",
                      project: null,
                      keepPageOpen: !0,
                      showTemplateThinking: !0,
                      onSubmitStart: () => {
                        D = e.get(d.Mg)?.conversationId ?? null
                        let t = e.get(b.X0)
                        null != t && e.set(b.X0, { ...t, status: "submitting" })
                      },
                      onSubmitted: () => {
                        ;((F = !0),
                          (0, l.Y)(e, () => {
                            let t = e.get(b.X0)
                            if (null != t) {
                              let a = e.get(o.Xx, D)
                              ;(null != a && (0, u.ni)(e, `template:${t.pageId}`, a),
                                e.set(b.X0, { ...t, status: "submitted" }))
                            }
                            e.set(h.Mr, null)
                          }))
                      },
                      getPrompt: (e) => {
                        let t = e.get(b.X0)
                        return t?.status === "queued" ? t.answer : null
                      },
                    },
                    (e) =>
                      U.aborted ||
                      e.get(m.spaceAccountId$) !== T ||
                      !E(e) ||
                      "allowed" !== e.get(s.lN).status ||
                      null == e.get(b.X0) ||
                      (e.get(n.gM) !== R &&
                        e.get(n.gM).pathname !== `/space/${k}` &&
                        e.get(n.gM).pathname !== `/space/${N.metadata.page_id}`),
                  ))
                break
              } catch (a) {
                if (F) {
                  f.v.warning("Page template chat failed after submission", { safe: {}, sensitive: { error: a } })
                  break
                }
                let t = e.get(b.X0)
                if (null == t || U.aborted) throw a
                ;(e.set(b.X0, {
                  ...t,
                  status:
                    a instanceof g.A_ || ("submitting" === t.status && !(a instanceof g.cS && "not-sent" === a.reason))
                      ? "unconfirmed"
                      : "error",
                }),
                  await (0, r._qC)(
                    e.when(({ get: e }) => {
                      let t = e(b.X0)
                      return null == t || "queued" === t.status
                    }),
                    U,
                  ))
              }
            }
          } catch {
            ;(e.get(h.LL)?.request.pageId === k && e.set(h.LL, null),
              U.aborted ||
                e
                  .get(c.Id)
                  .danger(
                    O
                      ? I.formatMessage({
                          id: "space.pageSetup.startFailed",
                          defaultMessage: "Could not start page setup. Open a new chat on the page to try again.",
                          description:
                            "Error when a Page is created from a template but its setup chat could not start",
                        })
                      : I.formatMessage({
                          id: "space.pageTemplates.createFailed",
                          defaultMessage: "Could not create the Page from this template",
                          description:
                            "Error when a prefilled Page could not be created from a template without Work access",
                        }),
                    {
                      errorAnalytics: {
                        toastId: O ? "space.pageSetup.startFailed" : "space.pageTemplates.createFailed",
                      },
                    },
                  ))
          } finally {
            ;(L.abort(), e.set(b.X0, null), e.set(h.Mr, null), F(), N.stop(), e.set(y.K, !1))
          }
        },
      },
    )
  },
  R0Z4(e, t, a) {
    var i = a("D7Ms"),
      l = a("zTeN"),
      r = a("SPnB"),
      n = a("tl2n"),
      s = a("ahQQ"),
      o = a("OMIV"),
      d = a("NRR1"),
      c = a("dH0j"),
      u = a("egOE"),
      p = a("XPum")
    let g = (0, l.un)(s.vn, ({ get: e, scope: t }) => {
      let a = e(r.chatGptAuthenticatedAccountId$),
        i = e(r.chatGptAuthenticatedUserId$)
      ;(e(d.jv), e(d.$M))
      let l = t.getOwnValue(s.oD)
      return null != a && null != i && l.accountId === a && (null == l.userId || l.userId === i) && e(p.i)
        ? (0, c.EK)(t)
        : null
    })
    function h(e) {
      e.set(c.vY, null)
    }
    a.d(
      t,
      {},
      {
        _: h,
        s: function (e) {
          let t = null,
            a = Symbol("Home visit")
          return e.watch(({ get: l }) => {
            let s = l(g)
            if (null == s) {
              ;(h(e), (t = null))
              return
            }
            if (t !== s) {
              let i = e.get(c.vY)
              ;((a = i?.identity === s ? i.owner : Symbol("Home visit")), (t = s))
            }
            let d = l(o.M9),
              p = (0, c.bO)(e, !0),
              m = (0, u.OU)(e, a, p.enabled, !p.enrolled || null != d)
            if (!p.enabled)
              return (h(e), (0, u._k)(e, l(r.chatGptAuthenticatedAccountId$), l(r.chatGptAuthenticatedUserId$), !1), m)
            ;(0, c.X6)(e, a)
            let f = () => {
                let t = e.get(c.vY)
                t?.owner === a &&
                  (t.acceptActiveResponse || t.rankedKeys.length > 0) &&
                  e.set(c.vY, { ...t, acceptActiveResponse: !1, rankedKeys: [], snapshotId: void 0, collections: {} })
              },
              v = e.watch(({ get: t }) => {
                let i = t(c.vY)
                if (i?.owner !== a || "pending" !== i.display || i.deadlineExpired) return
                let l = setTimeout(
                  () => {
                    let t = e.get(c.vY)
                    t?.requestId === i.requestId && e.set(c.vY, { ...t, deadlineExpired: !0 })
                  },
                  Math.max(0, i.deadlineAt - Date.now()),
                )
                return () => clearTimeout(l)
              }),
              y = e.watch(({ get: e }) => {
                "unavailable" === e(n.dk) && f()
              }),
              { queryKey: b } = e.query.getOptions(c.If),
              x = e.queryClient.getQueryCache().subscribe((t) => {
                if (
                  "updated" === t.type &&
                  ("success" === t.action.type || ("setState" === t.action.type && void 0 !== t.action.state.data)) &&
                  (0, i.MK)({ queryKey: b, exact: !0 }, t.query)
                ) {
                  let t = e.query.getData(c.If)
                  null != t && "ready" !== t.state && f()
                }
              })
            return () => {
              ;(v(), y(), x(), m())
            }
          })
        },
      },
    )
  },
  LwtL(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("zTeN"),
      n = a("Wf1j"),
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
            p,
            g = (0, l.c)(10),
            h = (0, r.gh)(c.Qy),
            m = (0, n.A)()
          ;(g[0] !== m
            ? ((e = m.formatMessage({
                id: "space.images.tabs.label",
                defaultMessage: "Image sources",
                description: "Accessible label for the Space Images page tabs",
              })),
              (g[0] = m),
              (g[1] = e))
            : (e = g[1]),
            g[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = {
                  key: "generated",
                  name: (0, i.jsx)(s.A, {
                    id: "space.images.tabs.creations",
                    defaultMessage: "Your creations",
                    description: "Space Images tab showing images generated by ChatGPT",
                  }),
                }),
                (g[2] = t))
              : (t = g[2]),
            g[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = [
                  t,
                  {
                    key: "uploaded",
                    name: (0, i.jsx)(s.A, {
                      id: "space.images.tabs.uploads",
                      defaultMessage: "Uploads",
                      description: "Space Images tab showing images uploaded by the user",
                    }),
                  },
                ]),
                (g[3] = a))
              : (a = g[3]))
          let f = h.value.sources[0] ?? "generated"
          return (
            g[4] !== h
              ? ((u = (e) => {
                  ;((0, d.np)(h, { sources: [e] }), (0, c.zl)(h, (0, c.SE)({ ...h.value, sources: [e] })))
                }),
                (g[4] = h),
                (g[5] = u))
              : (u = g[5]),
            g[6] !== e || g[7] !== f || g[8] !== u
              ? ((p = (0, i.jsx)(o.t, {
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: e,
                  tabs: a,
                  selectedKey: f,
                  onSelect: u,
                })),
                (g[6] = e),
                (g[7] = f),
                (g[8] = u),
                (g[9] = p))
              : (p = g[9]),
            p
          )
        },
      },
    )
  },
  UP00(e, t, a) {
    a.d(t, { K: () => as })
    var i = a("ABep"),
      l = a("QosV"),
      r = a("dSuP"),
      n = a("D015"),
      s = a("uris"),
      o = a("zTeN"),
      d = a("Bl5Q"),
      c = a("zd8w"),
      u = a("Wf1j"),
      p = a("oyxz"),
      g = a("TzYl"),
      h = a("EOo5"),
      m = a("Ghh3"),
      f = a("Sm6l"),
      v = a("wZQ4"),
      y = a("zkPp"),
      b = a("cGrE"),
      x = a("TCFx"),
      _ = a("jU86"),
      w = a("QufO"),
      S = a("EAun"),
      C = a("aYWA"),
      I = a("QoH2"),
      j = a("sz7l"),
      A = a("vq5I"),
      P = a("yGJW"),
      E = a("hZax"),
      k = a("OMIV"),
      T = a("Wj4L"),
      M = a("e1xH"),
      O = a("hVOg"),
      N = a("bAhY"),
      L = a("ARUL")
    let U = "[data-library-item-action]"
    function R(e) {
      let t,
        a,
        r,
        n,
        s,
        d = (0, l.c)(16),
        { href: u, state: p, isCurrent: g } = e,
        h = (0, o.Ul)(L.h1),
        m = (0, c.useRef)(null)
      d[0] !== g ? ((t = () => g?.() !== !1), (d[0] = g), (d[1] = t)) : (t = d[1])
      let f = (0, c.useEffectEvent)(t)
      d[2] !== h || d[3] !== u
        ? ((a = null != h && h.targetHref === (0, L.gK)(u)), (d[2] = h), (d[3] = u), (d[4] = a))
        : (a = d[4])
      let v = a
      return (
        d[5] !== h || d[6] !== f || d[7] !== v || d[8] !== p
          ? ((r = () => {
              let e,
                t,
                a,
                i = m.current?.parentElement
              if (!v || null == h || null == i || "u" < typeof IntersectionObserver) return
              let l = new Set(),
                r = function (e) {
                  for (let t of e) t.isIntersecting && t.intersectionRatio > 0 ? l.add(t.target) : l.delete(t.target)
                },
                n = new IntersectionObserver(
                  (e) => {
                    ;(r(e), s())
                  },
                  { threshold: [0, 0.01] },
                )
              function s() {
                null == t &&
                  0 !== l.size &&
                  (t = (0, N.n)(window, () => {
                    if (((t = void 0), r(n.takeRecords()), !document.hidden && f()))
                      for (let t of l) {
                        let a = t.closest("[hidden], [inert], [aria-hidden=true], [aria-disabled=true]")
                        if (
                          (null == a ||
                            ("populated" === p && i?.contains(a)) ||
                            (e = e ?? new MutationObserver(s)).observe(a, {
                              attributes: !0,
                              attributeFilter: ["hidden", "inert", "aria-hidden", "aria-disabled"],
                            }),
                          i?.contains(t) &&
                            null == a &&
                            t.checkVisibility?.({ visibilityProperty: !0 }) !== !1 &&
                            ("populated" !== p || t.matches("a[href], button:enabled")))
                        )
                          return void h?.finish(p)
                      }
                  }))
              }
              if ("populated" === p) {
                let e = (e) => {
                  ;(e.matches(U) && n.observe(e), e.querySelectorAll(U).forEach((e) => n.observe(e)))
                }
                ;(e(i),
                  (a = new MutationObserver((t) => {
                    for (let a of t) for (let t of a.addedNodes) t instanceof Element && e(t)
                    s()
                  })).observe(i, {
                    childList: !0,
                    subtree: !0,
                    attributes: !0,
                    attributeFilter: ["disabled", "aria-disabled", "aria-hidden", "href", "hidden", "inert"],
                  }))
              } else n.observe(i)
              return () => {
                ;(n.disconnect(), e?.disconnect(), a?.disconnect(), t?.())
              }
            }),
            (d[5] = h),
            (d[6] = f),
            (d[7] = v),
            (d[8] = p),
            (d[9] = r))
          : (r = d[9]),
        d[10] !== h || d[11] !== v || d[12] !== p
          ? ((n = [h, v, p]), (d[10] = h), (d[11] = v), (d[12] = p), (d[13] = n))
          : (n = d[13]),
        (0, c.useLayoutEffect)(r, n),
        d[14] !== v
          ? ((s = v ? (0, i.jsx)("span", { ref: m, hidden: !0 }) : null), (d[14] = v), (d[15] = s))
          : (s = d[15]),
        s
      )
    }
    var F = a("lJyx"),
      D = a("f67h"),
      G = a("sO5n"),
      B = a("nTUY"),
      z = a("pyoT"),
      H = a("sg90"),
      $ = a("Q3xx"),
      V = a("L4Jq"),
      Q = a("oyMi"),
      W = a("iJY0")
    let Z = (0, W.a)({
        name: "slides-light-24",
        canvas: {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          frame: { x: 0, y: 0, width: 24, height: 24 },
          inkBounds: { x: 2.25, y: 3.25, width: 19.5, height: 16.5 },
          visualBounds: { x: 2.25, y: 3.25, width: 19.5, height: 16.5 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 2.25, y: 3.25, width: 19.5, height: 16.5 },
          center: { x: 12, y: 11.5 },
          insets: { top: 3.25, right: 2.25, bottom: 4.25, left: 2.25 },
          anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 11.5 }, foreground: { x: 12, y: 11.5 } },
        },
        capabilities: ["icon"],
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5195 6.25C17.2912 6.25 17.9154 6.24981 18.4199 6.29102C18.9331 6.33295 19.3888 6.42135 19.8115 6.63672C20.4795 6.97707 21.0229 7.5205 21.3633 8.18848C21.5786 8.61125 21.6671 9.06687 21.709 9.58008C21.7502 10.0846 21.75 10.7088 21.75 11.4805V14.5195C21.75 15.2912 21.7502 15.9154 21.709 16.4199C21.6671 16.9331 21.5786 17.3888 21.3633 17.8115C21.0229 18.4795 20.4795 19.0229 19.8115 19.3633C19.3888 19.5786 18.9331 19.6671 18.4199 19.709C17.9154 19.7502 17.2912 19.75 16.5195 19.75H7.48047C6.70885 19.75 6.08458 19.7502 5.58008 19.709C5.06687 19.6671 4.61125 19.5786 4.18848 19.3633C3.5205 19.0229 2.97707 18.4795 2.63672 17.8115C2.42135 17.3888 2.33295 16.9331 2.29102 16.4199C2.24981 15.9154 2.25 15.2912 2.25 14.5195V11.4805C2.25 10.7088 2.24981 10.0846 2.29102 9.58008C2.33295 9.06687 2.42135 8.61125 2.63672 8.18848C2.97707 7.5205 3.5205 6.97707 4.18848 6.63672C4.61125 6.42135 5.06687 6.33295 5.58008 6.29102C6.08458 6.24981 6.70885 6.25 7.48047 6.25H16.5195ZM7.48047 7.75C6.68406 7.75 6.13142 7.75106 5.70215 7.78613C5.28162 7.82049 5.04527 7.88389 4.86914 7.97363C4.48358 8.17014 4.17014 8.48358 3.97363 8.86914C3.88389 9.04527 3.82049 9.28162 3.78613 9.70215C3.75106 10.1314 3.75 10.6841 3.75 11.4805V14.5195C3.75 15.3159 3.75106 15.8686 3.78613 16.2979C3.82049 16.7184 3.88389 16.9547 3.97363 17.1309C4.17014 17.5164 4.48358 17.8299 4.86914 18.0264C5.04527 18.1161 5.28162 18.1795 5.70215 18.2139C6.13142 18.2489 6.68406 18.25 7.48047 18.25H16.5195C17.3159 18.25 17.8686 18.2489 18.2979 18.2139C18.7184 18.1795 18.9547 18.1161 19.1309 18.0264C19.5164 17.8299 19.8299 17.5164 20.0264 17.1309C20.1161 16.9547 20.1795 16.7184 20.2139 16.2979C20.2489 15.8686 20.25 15.3159 20.25 14.5195V11.4805C20.25 10.6841 20.2489 10.1314 20.2139 9.70215C20.1795 9.28162 20.1161 9.04527 20.0264 8.86914C19.8299 8.48358 19.5164 8.17014 19.1309 7.97363C18.9547 7.88389 18.7184 7.82049 18.2979 7.78613C17.8686 7.75106 17.3159 7.75 16.5195 7.75H7.48047Z" fill="currentColor"/> <path d="M18 3.25C18.4142 3.25 18.75 3.58579 18.75 4C18.75 4.41421 18.4142 4.75 18 4.75H6C5.58579 4.75 5.25 4.41421 5.25 4C5.25 3.58579 5.58579 3.25 6 3.25H18Z" fill="currentColor"/>',
      }),
      Y = (0, W.a)({
        name: "square-on-tilted-square-light-24",
        canvas: {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          frame: { x: 0, y: 0, width: 24, height: 24 },
          inkBounds: { x: 1.64502, y: 2.112061, width: 21.209473, height: 20.208588 },
          visualBounds: { x: 1.64502, y: 2.112061, width: 21.209473, height: 20.208588 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1.64502, y: 2.112061, width: 21.209473, height: 20.208588 },
          center: { x: 12.249757, y: 12.216355 },
          insets: { top: 2.112061, right: 1.145507, bottom: 1.679351, left: 1.64502 },
          anchors: {
            frame: { x: 12, y: 12 },
            ink: { x: 12.249757, y: 12.216355 },
            foreground: { x: 12.249757, y: 12.216355 },
          },
        },
        capabilities: ["icon"],
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46025 5.1685C8.7332 3.22714 10.5286 1.87428 12.47 2.14702L19.7981 3.17729C21.7394 3.45032 23.0923 5.24479 22.8196 7.18608L21.7894 14.5142C21.5164 16.4556 19.721 17.8084 17.7796 17.5357L17.0892 17.438C17.2503 19.3046 15.9245 20.9915 14.0472 21.2554L6.71904 22.2857C4.77768 22.5584 2.98319 21.2055 2.71025 19.2642L1.67998 11.9361C1.40724 9.99469 2.7601 8.19926 4.70146 7.92631L8.13994 7.44292L8.46025 5.1685ZM12.2386 8.38237L4.90947 9.41167C3.78868 9.56947 3.00796 10.6062 3.16533 11.7271L4.1956 19.0552C4.35324 20.1761 5.38915 20.9576 6.51006 20.8003L13.8392 19.7701C14.9599 19.6122 15.7407 18.5755 15.5833 17.4546L15.5501 17.2222L15.429 17.2056L15.4886 16.7808L14.553 10.1265C14.3953 9.00574 13.3594 8.22512 12.2386 8.38237ZM12.261 3.63237C11.1401 3.47494 10.1034 4.2557 9.9456 5.37651L9.68584 7.22612L12.0296 6.89702C13.9708 6.62435 15.7652 7.97644 16.0384 9.91753L16.8782 15.8941L17.9886 16.0503C19.1095 16.2078 20.1461 15.427 20.304 14.3062L21.3343 6.9771C21.4915 5.8562 20.71 4.82028 19.5892 4.66264L12.261 3.63237Z" fill="currentColor"/>',
      })
    var q = a("on57"),
      K = a("HOLv"),
      J = a("bVeK"),
      X = a("OWtl"),
      ee = a("Nwp9"),
      et = a("CLXx")
    let ea = (0, ee.m3)("space-home-create-cards-collapsed", !1),
      ei = [
        {
          action: "pages",
          icon: V.R,
          color: "text-file-document",
          label: (0, i.jsx)(p.A, {
            id: "space.list.newPage",
            defaultMessage: "Page",
            description: "Create a Page from the Space home menu",
          }),
        },
        {
          action: "slides",
          icon: Z,
          color: "text-yellow",
          label: (0, i.jsx)(p.A, {
            id: "space.create.presentation",
            defaultMessage: "Slides",
            description: "Space creation menu action to create a native slide deck",
          }),
        },
        {
          action: "images",
          icon: Q.v,
          color: "text-file-image",
          label: (0, i.jsx)(p.A, {
            id: "libraryNext.create.image",
            defaultMessage: "Image",
            description: "Library creation menu action to start generating an image in ChatGPT",
          }),
        },
        {
          action: "sites",
          icon: $.U,
          color: "text-purple",
          label: (0, i.jsx)(p.A, {
            id: "space.create.site",
            defaultMessage: "Site",
            description: "Space creation menu action to create a site with ChatGPT",
          }),
        },
        {
          action: "templates",
          icon: Y,
          color: "text-secondary",
          label: (0, i.jsx)(p.A, {
            id: "space.home.create.templates",
            defaultMessage: "Templates",
            description: "Space Home card that opens the template gallery.",
          }),
        },
      ]
    function el(e) {
      let t,
        a,
        r,
        n,
        s,
        d,
        u,
        g,
        h,
        m = (0, l.c)(26),
        { collapsible: v } = e,
        y = (0, o.gh)(X.u),
        b = (0, o.Ul)(ea),
        x = v && b,
        _ = (0, c.useId)()
      m[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(p.A, {
            id: "space.home.createCards.heading",
            defaultMessage: "Create",
            description: "Heading for creation shortcuts on Space home.",
          })),
          (m[0] = t))
        : (t = m[0])
      let w = t
      ;(m[1] !== x || m[2] !== v || m[3] !== _ || m[4] !== b || m[5] !== y
        ? ((a = v
            ? (0, i.jsxs)(f.$, {
                unstyled: !0,
                className: "group gap-1",
                "aria-expanded": !x,
                "aria-controls": `${_}-cards`,
                onClick: () => y.set(ea, !b),
                children: [
                  w,
                  (0, i.jsx)(J.Aq_, {
                    className: (0, q.A)(
                      "motion-safe:transition-transform",
                      x
                        ? "-rotate-90 rtl:rotate-90"
                        : "opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 pointer-coarse:opacity-100",
                    ),
                  }),
                ],
              })
            : w),
          (m[1] = x),
          (m[2] = v),
          (m[3] = _),
          (m[4] = b),
          (m[5] = y),
          (m[6] = a))
        : (a = m[6]),
        m[7] !== _ || m[8] !== a
          ? ((r = (0, i.jsx)("h2", { id: _, className: "text-sm font-medium text-secondary", children: a })),
            (m[7] = _),
            (m[8] = a),
            (m[9] = r))
          : (r = m[9]))
      let S = `${_}-cards`,
        C = x ? "grid-rows-[0fr] -translate-y-1 opacity-0" : "grid-rows-[1fr]"
      m[10] !== C
        ? ((n = (0, q.A)(
            "grid motion-safe:transition-[grid-template-rows,opacity,translate] motion-safe:duration-150 motion-safe:ease-out",
            C,
          )),
          (m[10] = C),
          (m[11] = n))
        : (n = m[11])
      let I = x && "overflow-hidden"
      return (
        m[12] !== I ? ((s = (0, q.A)("min-h-0", I)), (m[12] = I), (m[13] = s)) : (s = m[13]),
        m[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)("div", { className: "flex flex-wrap gap-2.5 pt-2", children: ei.map(er) })), (m[14] = d))
          : (d = m[14]),
        m[15] !== s ? ((u = (0, i.jsx)("div", { className: s, children: d })), (m[15] = s), (m[16] = u)) : (u = m[16]),
        m[17] !== x || m[18] !== u || m[19] !== S || m[20] !== n
          ? ((g = (0, i.jsx)("div", { id: S, "aria-hidden": x, inert: x, className: n, children: u })),
            (m[17] = x),
            (m[18] = u),
            (m[19] = S),
            (m[20] = n),
            (m[21] = g))
          : (g = m[21]),
        m[22] !== _ || m[23] !== g || m[24] !== r
          ? ((h = (0, i.jsxs)("section", {
              "aria-labelledby": _,
              className: "min-w-0 pt-5 pb-6 select-none",
              children: [r, g],
            })),
            (m[22] = _),
            (m[23] = g),
            (m[24] = r),
            (m[25] = h))
          : (h = m[25]),
        h
      )
    }
    function er(e) {
      let { action: t, icon: a, color: l, label: r } = e
      return (0, i.jsx)(
        et.SlateSpaceCreateMenu,
        {
          action: t,
          fromCreateCard: !0,
          renderAction: (e) => {
            let { hidden: t, disabled: n, onClick: s, onIntent: o } = e
            return t
              ? (0, i.jsx)(i.Fragment, {})
              : (0, i.jsxs)(f.$, {
                  unstyled: !0,
                  className: (0, q.A)(
                    "h-15 w-22.5 max-w-full flex-col justify-center gap-0.75 rounded-xl border border-subtle bg-surface text-xs text-secondary motion-safe:transition-[scale,box-shadow]",
                    !n && "hover:shadow-card motion-safe:hover:scale-[1.03]",
                  ),
                  disabled: n,
                  onClick: s,
                  onFocus: o,
                  onPointerEnter: o,
                  onPointerDown: o,
                  children: [(0, i.jsx)(K.I, { asset: a, className: l }), r],
                })
          },
        },
        t,
      )
    }
    var en = a("pyo2"),
      es = a("QBk8"),
      eo = a("Hg6e"),
      ed = a("iodE"),
      ec = a("SPnB"),
      eu = a("W0bA"),
      ep = a("iyTF"),
      eg = a("Kw4a"),
      eh = a("jG6n"),
      em = a("ibtF"),
      ef = a("VU3o"),
      ev = a("HZfM"),
      ey = a("g70H"),
      eb = a("Vx7B"),
      ex = a("BBQT"),
      e_ = a("wvfh")
    function ew(e) {
      let t,
        a,
        r,
        s,
        d = (0, l.c)(25),
        { template: c, templatePosition: p } = e,
        g = (0, o.gh)(X.u),
        h = (0, u.A)(),
        m = (0, ev.Zp)(),
        f = (0, ed.tF)(),
        v = (0, o.Ul)(e_.K),
        y = `space-template-preview-${c.id}`
      return (
        d[0] !== c.previewDocument || d[1] !== c.previewMarkdown || d[2] !== c.title
          ? ((t = { title: c.title, markdown: c.previewMarkdown, units: c.previewDocument }),
            (d[0] = c.previewDocument),
            (d[1] = c.previewMarkdown),
            (d[2] = c.title),
            (d[3] = t))
          : (t = d[3]),
        d[4] !== y || d[5] !== t || d[6] !== c.symbol
          ? ((a = (0, i.jsx)(ey.D, { symbol: c.symbol, pageId: y, document: t })),
            (d[4] = y),
            (d[5] = t),
            (d[6] = c.symbol),
            (d[7] = a))
          : (a = d[7]),
        d[8] !== h ||
        d[9] !== m ||
        d[10] !== v ||
        d[11] !== f ||
        d[12] !== g ||
        d[13] !== c.id ||
        d[14] !== c.prefillPrompt ||
        d[15] !== c.previewDocument ||
        d[16] !== c.prompt ||
        d[17] !== c.symbol ||
        d[18] !== c.title ||
        d[19] !== p
          ? ((r =
              v || !f
                ? void 0
                : () => {
                    ;((0, P.yy)(g, es.CodexSpacesOnboarding, {
                      action: es.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_ITEM_SELECTED,
                      item: es.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_TEMPLATES,
                    }),
                      (0, P.yy)(g, es.CodexSpacesTemplateGallery, {
                        action:
                          es.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_HOME_TILE_SELECTED,
                        category: "page",
                        templateId: c.id,
                        templatePosition: null == p ? void 0 : (0, n.At)(p),
                        selectionSurface:
                          es.CodexSpacesTemplateSelectionSurface
                            .CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_SPACE_HOME_TILE,
                      }),
                      (0, ex.K)({
                        scope: g,
                        title: c.title,
                        prompt: c.prompt,
                        prefillPrompt: c.prefillPrompt,
                        initialDocument: c.previewDocument,
                        initialSymbol: c.symbol,
                        revealSetupComment: "project-home" === c.id || "project-tracker" === c.id,
                        navigate: m,
                        intl: h,
                      }))
                  }),
            (d[8] = h),
            (d[9] = m),
            (d[10] = v),
            (d[11] = f),
            (d[12] = g),
            (d[13] = c.id),
            (d[14] = c.prefillPrompt),
            (d[15] = c.previewDocument),
            (d[16] = c.prompt),
            (d[17] = c.symbol),
            (d[18] = c.title),
            (d[19] = p),
            (d[20] = r))
          : (r = d[20]),
        d[21] !== a || d[22] !== r || d[23] !== c.title
          ? ((s = (0, i.jsx)(eb.Z, { title: c.title, preview: a, onOpen: r })),
            (d[21] = a),
            (d[22] = r),
            (d[23] = c.title),
            (d[24] = s))
          : (s = d[24]),
        s
      )
    }
    function eS(e) {
      let t,
        a,
        r,
        n,
        s,
        d,
        g,
        h,
        m,
        v,
        y,
        b,
        x,
        _,
        w,
        S,
        C,
        I = (0, l.c)(47),
        { filter: j, suggestions: A, children: k, visibleContentMarker: T, showRecommendations: O, isCurrent: N } = e,
        L = void 0 === j ? "all" : j
      I[0] !== A ? ((t = void 0 === A ? ["templates"] : A), (I[0] = A), (I[1] = t)) : (t = I[1])
      let U = t,
        R = void 0 !== O && O,
        F = (0, o.gh)(X.u),
        D = (0, u.A)(),
        G = (0, c.useId)()
      I[2] !== U ? ((a = U.includes("templates")), (I[2] = U), (I[3] = a)) : (a = I[3])
      let B = a,
        z = (0, o._U)(M.H6, "granola_presentation"),
        H = "pages" !== L && z && B,
        { data: $ } = (0, o.Ul)(H ? ep.i8 : null) ?? {},
        V = (0, ed.tF)(),
        Q = (0, o.Ul)(eg.wu),
        W = (0, o.Ul)(ec.e0),
        Z = B && "slides" !== L && Q,
        Y = (0, o.Ul)(Z ? eh.ql : void 0),
        q = (0, o.Ul)(ec.o8),
        J = (0, em.X)(D, Y?.value, W),
        ee = (0, E.Zj)(
          !!Z && void 0 !== Y && !!V && null != J.recommended && null != q && N?.() !== !1 && "3856949927",
        ),
        et = R ? J.recommended : J.catalog,
        ea = ee && null != et ? et : J.current,
        ei = Z && void 0 !== Y ? ea : []
      I[4] !== $ || I[5] !== H ? ((r = H && null != $ ? $ : []), (I[4] = $), (I[5] = H), (I[6] = r)) : (r = I[6])
      let el = r
      I[7] !== L || I[8] !== el
        ? ((n = "all" === L ? el.slice(0, 2) : el), (I[7] = L), (I[8] = el), (I[9] = n))
        : (n = I[9])
      let er = n,
        ev = ei.map(eI),
        ey = er.map(eC),
        eb =
          ee && R && "all" === L
            ? [...ev.slice(0, 2), ...ey.slice(0, 1), ...ev.slice(2), ...ey.slice(1)]
            : [...ev, ...ey],
        ex = eb.length > 0
      I[10] !== k ? ((s = c.Children.toArray(k)), (I[10] = k), (I[11] = s)) : (s = I[11])
      let e_ = s
      if (0 === e_.length && !ex) return null
      let eS = V && T
      return (
        I[12] !== z
          ? ((d = z
              ? (0, i.jsx)(p.A, {
                  id: "space.gettingStarted.artifactsHeading",
                  defaultMessage: "Create together in Space",
                  description: "Heading above native Page and Slides templates in Space onboarding",
                })
              : (0, i.jsx)(p.A, {
                  id: "space.gettingStarted.heading",
                  defaultMessage: "Create pages in Space",
                  description:
                    "Heading inviting users to create pages in Space above the guide to pages and starter page templates",
                })),
            (I[12] = z),
            (I[13] = d))
          : (d = I[13]),
        I[14] !== G || I[15] !== d
          ? ((g = (0, i.jsx)("h2", { id: G, className: "body-md font-normal select-none", children: d })),
            (I[14] = G),
            (I[15] = d),
            (I[16] = g))
          : (g = I[16]),
        I[17] !== D || I[18] !== z
          ? ((h = z
              ? D.formatMessage({
                  id: "space.gettingStarted.dismissArtifacts",
                  defaultMessage: "Dismiss Create together in Space",
                  description: "Dismiss the Page and Slides template section in Space onboarding",
                })
              : D.formatMessage({
                  id: "space.gettingStarted.dismiss",
                  defaultMessage: "Dismiss Create pages in Space",
                  description:
                    "Accessible label for dismissing the entire Create pages in Space section without deleting any Pages",
                })),
            (I[17] = D),
            (I[18] = z),
            (I[19] = h))
          : (h = I[19]),
        I[20] !== F || I[21] !== U
          ? ((m = () => {
              for (let e of U)
                (0, P.yy)(F, es.CodexSpacesOnboarding, {
                  action: es.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_ITEM_DISMISSED,
                  item:
                    "welcome" === e
                      ? es.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME
                      : es.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_TEMPLATES,
                })
              ;(0, en.Ii)(F)
            }),
            (I[20] = F),
            (I[21] = U),
            (I[22] = m))
          : (m = I[22]),
        I[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)(K.I, { asset: eo.b })), (I[23] = v))
          : (v = I[23]),
        I[24] !== h || I[25] !== m
          ? ((y = (0, i.jsx)(f.$, {
              className:
                "pointer-events-none opacity-0 group-hover/getting-started:pointer-events-auto group-hover/getting-started:opacity-100 group-has-[:focus-visible]/getting-started:pointer-events-auto group-has-[:focus-visible]/getting-started:opacity-100 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100",
              color: "ghostTertiary",
              size: "inline",
              "aria-label": h,
              onClick: m,
              children: v,
            })),
            (I[24] = h),
            (I[25] = m),
            (I[26] = y))
          : (y = I[26]),
        I[27] !== g || I[28] !== y
          ? ((b = (0, i.jsxs)("div", { className: "flex items-center gap-1.5", children: [g, y] })),
            (I[27] = g),
            (I[28] = y),
            (I[29] = b))
          : (b = I[29]),
        I[30] !== ex
          ? ((x = ex
              ? (0, i.jsx)("p", {
                  className: "text-onboarding-body font-normal text-tertiary select-none",
                  children: (0, i.jsx)(p.A, {
                    id: "space.gettingStarted.description",
                    defaultMessage: "Choose a template to start working with ChatGPT and your team",
                    description:
                      "Subtitle inviting users to choose a page template within Space and work with ChatGPT and their team",
                  }),
                })
              : null),
            (I[30] = ex),
            (I[31] = x))
          : (x = I[31]),
        I[32] !== b || I[33] !== x
          ? ((_ = (0, i.jsxs)("div", { className: "flex flex-col gap-0.5", children: [b, x] })),
            (I[32] = b),
            (I[33] = x),
            (I[34] = _))
          : (_ = I[34]),
        I[35] !== eb || I[36] !== q
          ? ((w = eb.map((e, t) => {
              let { kind: a, template: l } = e
              return "page" === a
                ? (0, i.jsx)(ew, { template: l, templatePosition: null == q ? void 0 : t + 1 }, `page:${l.id}`)
                : (0, i.jsx)(
                    ef.q,
                    { template: l, surface: "onboarding", templatePosition: null == q ? void 0 : t + 1 },
                    `slides:${l.id}`,
                  )
            })),
            (I[35] = eb),
            (I[36] = q),
            (I[37] = w))
          : (w = I[37]),
        I[38] !== e_ || I[39] !== V || I[40] !== w
          ? ((S = (0, i.jsxs)(ej, { present: V, children: [e_, w] })),
            (I[38] = e_),
            (I[39] = V),
            (I[40] = w),
            (I[41] = S))
          : (S = I[41]),
        I[42] !== G || I[43] !== _ || I[44] !== S || I[45] !== eS
          ? ((C = (0, i.jsxs)("section", {
              className: "group/getting-started @container/getting-started flex min-w-0 flex-col gap-3",
              "aria-labelledby": G,
              onPointerEnter: eu.FM,
              onFocus: eu.FM,
              children: [eS, _, S],
            })),
            (I[42] = G),
            (I[43] = _),
            (I[44] = S),
            (I[45] = eS),
            (I[46] = C))
          : (C = I[46]),
        C
      )
    }
    function eC(e) {
      return { kind: "slides", template: e }
    }
    function eI(e) {
      return { kind: "page", template: e }
    }
    let ej = (0, c.memo)(
      function (e) {
        let t,
          a = (0, l.c)(2),
          { children: r } = e
        return (
          a[0] !== r
            ? ((t = (0, i.jsx)("div", {
                className:
                  "horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased -my-4 -ms-4 grid scrollbar-on-hover min-w-0 scroll-px-4 auto-cols-[max(9rem,calc((100%-1rem)*3/4))] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain p-4 @lg/getting-started:auto-cols-[max(9rem,calc((100%-2rem)*3/7))] @3xl/getting-started:auto-cols-[max(9rem,calc((100%-3rem)*3/10))] @5xl/getting-started:auto-cols-[max(9rem,calc((100%-4rem)*3/13))] @7xl/getting-started:auto-cols-[max(9rem,calc((100%-5rem)*3/16))]",
                onFocusCapture: eA,
                children: r,
              })),
              (a[0] = r),
              (a[1] = t))
            : (t = a[1]),
          t
        )
      },
      (e, t) => !t.present,
    )
    function eA(e) {
      e.target.matches(":focus-visible") &&
        e.currentTarget.contains(e.target) &&
        e.target.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" })
    }
    var eP = a("XPum"),
      eE = a("T0Rc"),
      ek = a("DZee"),
      eT = a("iRMi")
    let eM = (0, W.a)({
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
      body: '<path d="M4.02569 6.44531C5.973 6.44553 7.57122 7.94005 7.73663 9.84473C7.75571 10.0647 7.59223 10.258 7.37237 10.2773C7.1525 10.2962 6.95894 10.1339 6.93975 9.91406C6.80994 8.41922 5.55438 7.24632 4.02569 7.24609C2.49682 7.24609 1.24148 8.41909 1.11163 9.91406C1.09247 10.1338 0.898718 10.296 0.679011 10.2773C0.458925 10.2582 0.29564 10.0648 0.314753 9.84473C0.480192 7.93993 2.0782 6.44531 4.02569 6.44531Z" fill="currentColor"/> <path d="M8.49835 6.47363C10.1555 6.47363 11.5157 7.74538 11.6566 9.36621C11.6754 9.58611 11.5122 9.7807 11.2923 9.7998C11.0727 9.81844 10.879 9.65514 10.8597 9.43555C10.7545 8.22448 9.73693 7.27441 8.49835 7.27441C8.43229 7.27443 8.36659 7.27694 8.30206 7.28223C8.08221 7.30006 7.88872 7.13582 7.87042 6.91602C7.85243 6.69618 8.01595 6.50288 8.23565 6.48438C8.32208 6.47727 8.41025 6.47365 8.49835 6.47363Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M4.02569 1.36914C5.19328 1.36943 6.13995 2.31671 6.13995 3.48438C6.13979 4.6519 5.19319 5.59835 4.02569 5.59863C2.85795 5.59863 1.91061 4.65208 1.91046 3.48438C1.91046 2.31654 2.85785 1.36914 4.02569 1.36914ZM4.02569 2.16992C3.29968 2.16992 2.71124 2.75837 2.71124 3.48438C2.71139 4.21025 3.29978 4.79883 4.02569 4.79883C4.75136 4.79854 5.33999 4.21008 5.34014 3.48438C5.34014 2.75854 4.75146 2.17021 4.02569 2.16992Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M9.0169 1.81152C10.0262 1.81204 10.845 2.63124 10.845 3.64062C10.8445 4.64957 10.0258 5.46823 9.0169 5.46875C8.00752 5.46875 7.18832 4.64989 7.1878 3.64062C7.1878 2.63092 8.0072 1.81152 9.0169 1.81152ZM9.0169 2.6123C8.44902 2.6123 7.98858 3.07275 7.98858 3.64062C7.9891 4.20806 8.44934 4.66797 9.0169 4.66797C9.58402 4.66745 10.0437 4.20774 10.0442 3.64062C10.0442 3.07307 9.58434 2.61283 9.0169 2.6123Z" fill="currentColor"/>',
    })
    var eO = a("SQbA"),
      eN = a("Gtga"),
      eL = a("Um9I"),
      eU = a("CqWC"),
      eR = a("CmGX"),
      eF = a("rH0R"),
      eD = a("rBG6"),
      eG = a("e7El"),
      eB = a("uNsz"),
      ez = a("zkSD"),
      eH = a("heYt"),
      e$ = a("jLa0")
    function eV(e) {
      let t,
        a,
        r = (0, l.c)(9),
        { item: n } = e,
        s = (0, o.gh)(_.Qy),
        d = (0, o.Ul)(M.TV),
        c = (0, o.Ul)(z.spaceAccountId$),
        u = (0, o.Ul)(ec.chatGptAuthenticatedUserId$)
      return !d || s.value.deleted || null == c || c !== s.value.accountId || null == u || u !== s.value.userId
        ? null
        : (r[0] !== c || r[1] !== n || r[2] !== u
            ? ((t = JSON.stringify([c, u, (0, x.e4)(n)])), (r[0] = c), (r[1] = n), (r[2] = u), (r[3] = t))
            : (t = r[3]),
          r[4] !== c || r[5] !== n || r[6] !== t || r[7] !== u
            ? ((a = (0, i.jsx)(eQ, { item: n, accountId: c, userId: u }, t)),
              (r[4] = c),
              (r[5] = n),
              (r[6] = t),
              (r[7] = u),
              (r[8] = a))
            : (a = r[8]),
          a)
    }
    function eQ(e) {
      let t,
        a,
        r,
        n,
        s,
        d,
        u,
        g,
        h = (0, l.c)(30),
        { item: m, accountId: f, userId: v } = e,
        y = (0, o.gh)(_.Qy)
      "node" in m ? (t = m) : "libraryPage" in m ? (t = m.libraryPage) : "page" in m && (t = m.libraryItem)
      let b = "searchResult" in m ? m.searchResult.payload : null,
        w = null
      "page" in m
        ? (w = m.page.page_id)
        : t?.node.library_artifact_type === "page"
          ? (w = t.node.id)
          : b?.kind === "space_page" && (w = b.page_id)
      let S = "siteProject" in m ? m.siteProject : null,
        C = S?.id ?? (t ? (0, eB.h5)(t) : null),
        I = (0, o._U)(
          null != w &&
            t?.node.is_shared == null &&
            t?.node.access_kind !== "shared" &&
            !t?.node.page_metadata?.sharing_badge_resolved
            ? eR.D
            : null,
          w ?? "",
          { enabled: !1 },
        )?.data,
        j = (0, o._U)(
          t?.deferredSharingBadge && (0, x.sE)(t) ? e$.J : null,
          { kind: t?.node.kind ?? "file", id: t?.node.id ?? "" },
          { enabled: !1 },
        )?.data,
        A =
          t?.node.is_shared ??
          ((null != t && (0, eB.GS)(t)) ||
            !0 === I ||
            !0 === j ||
            (null != S &&
              ("editor" === S.current_user_role ||
                ("library:collection:shared-with-me" === y.value.directoryId && "owner" !== S.current_user_role) ||
                "public" === S.sharing.accessMode ||
                "workspace_all" === S.sharing.accessMode ||
                (!1 !== S.sharing.countsAvailable && (S.sharing.userCount > 0 || S.sharing.groupCount > 0))))),
        P = (0, E.Zj)(null != C && "2881922323"),
        T = (0, o.Ul)(null != w ? M.pagesEnabled$ : null),
        O = (0, o.Ul)(eH.Ym),
        N = (0, o._U)(null != t ? eG.SA : null, t?.node.id ?? ""),
        [L, U] = (0, c.useState)(!1),
        [R, F] = (0, c.useState)(null),
        D = (0, o._U)(null != R ? eL.jy : null, R ?? w ?? ""),
        G = (0, c.useRef)(!0)
      ;(h[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => (
            (G.current = !0),
            () => {
              G.current = !1
            }
          )),
          (r = []),
          (h[0] = a),
          (h[1] = r))
        : ((a = h[0]), (r = h[1])),
        (0, c.useEffect)(a, r),
        h[2] !== f || h[3] !== y || h[4] !== v
          ? ((n = () =>
              G.current &&
              y.get(M.TV) &&
              y.get(z.spaceAccountId$) === f &&
              y.get(ec.chatGptAuthenticatedUserId$) === v),
            (h[2] = f),
            (h[3] = y),
            (h[4] = v),
            (h[5] = n))
          : (n = h[5]))
      let B = n,
        H = null != t && O && (0, eB.yU)(t)
      ;(null != w
        ? (H = !0 === T && (!("page" in m) || m.page.access.can_share))
        : null != C && (H = P && (null == S || "owner" === S.current_user_role || "editor" === S.current_user_role)),
        h[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(K.I, { asset: eM, className: "shrink-0" }),
                (0, i.jsx)(p.A, {
                  id: "libraryNext.items.sharingStatus.shared",
                  defaultMessage: "Shared",
                  description: "Sharing status for an item shared with other people",
                }),
              ],
            })),
            (h[6] = s))
          : (s = h[6]))
      let $ = s
      return (
        h[7] !== f ||
        h[8] !== H ||
        h[9] !== B ||
        h[10] !== t ||
        h[11] !== A ||
        h[12] !== L ||
        h[13] !== w ||
        h[14] !== N ||
        h[15] !== y ||
        h[16] !== U ||
        h[17] !== F ||
        h[18] !== S ||
        h[19] !== C ||
        h[20] !== v
          ? ((d =
              A &&
              (H
                ? (0, i.jsx)("button", {
                    type: "button",
                    className:
                      "pointer-events-auto relative z-10 inline-flex cursor-interaction items-center gap-1 rounded-sm hover:text-default focus-visible:text-default",
                    disabled: L || !0 === N,
                    onClick: (e) => {
                      ;(e.preventDefault(),
                        e.stopPropagation(),
                        !B() ||
                          L ||
                          N ||
                          (U(!0),
                          (async () => {
                            if (null != w) {
                              let e = await (0, eU.AQ)(y, w, f, v)
                              B() &&
                                y.get(M.pagesEnabled$) &&
                                e?.access.can_share === !0 &&
                                "request_changes" !== y.get(eL.jy, e) &&
                                F(e)
                            } else if (null != C) {
                              let e =
                                S ??
                                (await (0, eO.fetchAppgenProject)(C, { expectedIdentity: { accountId: f, userId: v } }))
                              B() &&
                                y.get(k.JW, "2881922323") &&
                                ("owner" === e.current_user_role || "editor" === e.current_user_role) &&
                                (0, eN.l)(y, C, {
                                  initialIsOwner: "owner" === e.current_user_role,
                                  initialProjectTitle: e.title,
                                  source: eT.CodexSitesSharingSource.CODEX_SITES_SHARING_SOURCE_LIBRARY_ACCESS_BADGE,
                                  shouldOpen: () => B() && y.get(k.JW, "2881922323"),
                                })
                            } else
                              null != t &&
                                B() &&
                                y.get(eH.Ym) &&
                                (0, eB.yU)(t) &&
                                (await (0, ez.jj)(y, { accountId: f, entry: t }, () => B() && y.get(eH.Ym)))
                          })()
                            .catch(eW)
                            .finally(() => {
                              G.current && U(!1)
                            })))
                    },
                    children: $,
                  })
                : (0, i.jsx)("span", { className: "inline-flex items-center gap-1", children: $ }))),
            (h[7] = f),
            (h[8] = H),
            (h[9] = B),
            (h[10] = t),
            (h[11] = A),
            (h[12] = L),
            (h[13] = w),
            (h[14] = N),
            (h[15] = y),
            (h[16] = U),
            (h[17] = F),
            (h[18] = S),
            (h[19] = C),
            (h[20] = v),
            (h[21] = d))
          : (d = h[21]),
        h[22] !== D || h[23] !== R || h[24] !== T || h[25] !== F
          ? ((u =
              T && R?.access.can_share === !0 && "request_changes" !== D
                ? (0, i.jsx)(eF.PageSharingDialog, { pageId: R.page_id, onClose: () => F(null) })
                : null),
            (h[22] = D),
            (h[23] = R),
            (h[24] = T),
            (h[25] = F),
            (h[26] = u))
          : (u = h[26]),
        h[27] !== d || h[28] !== u
          ? ((g = (0, i.jsxs)(i.Fragment, { children: [d, u] })), (h[27] = d), (h[28] = u), (h[29] = g))
          : (g = h[29]),
        g
      )
    }
    function eW(e) {
      ;(0, eD.dk)(e instanceof Error ? e : Error(String(e)))
    }
    var eZ = a("P6OM"),
      eY = a("UOwN"),
      eq = a("Adh7"),
      eK = a("vSFv"),
      eJ = a("rTPf"),
      eX = a("nn24"),
      e1 = a("oNDa"),
      e0 = a("SyuA"),
      e2 = a("E8Sp"),
      e3 = a("Ji1v"),
      e5 = a("u3Vl"),
      e4 = a("NkHr"),
      e7 = a("ikCk"),
      e8 = a("nJU9"),
      e6 = a("TjgH"),
      e9 = a("Ot7V"),
      te = a("Q8aV"),
      tt = a("T7QO"),
      ta = a("BG6H"),
      ti = a("W9pA"),
      tl = a("i4m7"),
      tr = a("khOd"),
      tn = a("ezjE")
    function ts(e) {
      let t,
        a,
        r,
        n,
        s,
        d,
        c,
        u,
        g,
        m,
        f,
        v,
        y,
        b = (0, l.c)(70),
        {
          layout: x,
          project: _,
          viewMode: w,
          structuredGridEnabled: S,
          source: C,
          showSize: I,
          reserveDisclosureSpace: j,
          onOpenSite: A,
        } = e,
        P = void 0 !== S && S,
        E = (0, o.gh)(X.u),
        k = (0, o.Ul)(M.TV),
        { accountId: T, userId: O } = (0, h.As)()
      b[0] !== T || b[1] !== _ || b[2] !== O
        ? ((t = { accountId: T, userId: O, projectId: _.id, title: _.title, initialPinned: _.is_pinned, site: _ }),
          (b[0] = T),
          (b[1] = _),
          (b[2] = O),
          (b[3] = t))
        : (t = b[3])
      let N = (0, o._U)(e7.X, t),
        L = (0, ev.zy)(),
        U = (0, te.p8)(),
        R = "suspended" === _.status,
        F = R ? null : _.live_url,
        D = "owner" === _.current_user_role,
        G = D || "editor" === _.current_user_role
      b[4] !== T ||
      b[5] !== F ||
      b[6] !== L ||
      b[7] !== _.id ||
      b[8] !== _.latest_edit_context ||
      b[9] !== _.title ||
      b[10] !== E ||
      b[11] !== U
        ? ((a = (e) => {
            ;(0, e8.$)(
              E,
              U,
              {
                type: void 0 === e ? "edit" : e,
                projectId: _.id,
                projectTitle: _.title,
                latestEditContext: _.latest_edit_context,
                liveUrl: F,
              },
              E.get(tr.GB) ? (0, tl.E)(L, T) : void 0,
            )
          }),
          (b[4] = T),
          (b[5] = F),
          (b[6] = L),
          (b[7] = _.id),
          (b[8] = _.latest_edit_context),
          (b[9] = _.title),
          (b[10] = E),
          (b[11] = U),
          (b[12] = a))
        : (a = b[12])
      let B = a
      b[13] !== G || b[14] !== B || b[15] !== A
        ? ((r = (e) => !!A?.(e, G ? B : void 0) && (e?.preventDefault(), !0)),
          (b[13] = G),
          (b[14] = B),
          (b[15] = A),
          (b[16] = r))
        : (r = b[16])
      let z = r
      b[17] !== F || b[18] !== z
        ? ((n = null == F ? void 0 : { href: F, initiator: "sites_library", onUnmodifiedClick: z }),
          (b[17] = F),
          (b[18] = z),
          (b[19] = n))
        : (n = b[19])
      let H = n
      if (null != H) {
        let e
        ;(b[20] !== H || b[21] !== z
          ? ((e = (e) => {
              !(
                !e?.metaKey &&
                !e?.ctrlKey &&
                !e?.shiftKey &&
                !e?.altKey &&
                (null == e || !("button" in e) || 0 === e.button) &&
                z(e)
              ) && (null == e ? (0, e9.E0)(H) : (0, e9.PQ)({ ...H, event: e }))
            }),
            (b[20] = H),
            (b[21] = z),
            (b[22] = e))
          : (e = b[22]),
          (s = e))
      } else if (!R && G) {
        let e
        ;(b[23] !== B ? ((e = () => B()), (b[23] = B), (b[24] = e)) : (e = b[24]), (s = e))
      }
      b[25] !== R
        ? ((d = R
            ? (0, i.jsx)(e6.E, {
                children: (0, i.jsx)(p.A, {
                  id: "appgenPage.disabledBadge",
                  defaultMessage: "Disabled",
                  description: "Status badge shown next to a site name when the site is disabled",
                }),
              })
            : null),
          (b[25] = R),
          (b[26] = d))
        : (d = b[26])
      let $ = d
      b[27] !== N || b[28] !== w
        ? ((c = null != N ? (0, i.jsx)(ti.K, { action: N, viewMode: w }) : null), (b[27] = N), (b[28] = w), (b[29] = c))
        : (c = b[29])
      let V = c,
        Q = N?.pinned
      b[30] !== T || b[31] !== L || b[32] !== E || b[33] !== k
        ? ((u = k
            ? (e) => {
                ;(0, e2.oo)(E, `${E.get(M.pagesEnabled$) ? "/space" : ""}${e}`, { state: (0, tl.L)(L, T) })
              }
            : void 0),
          (b[30] = T),
          (b[31] = L),
          (b[32] = E),
          (b[33] = k),
          (b[34] = u))
        : (u = b[34])
      let W = "active" === _.status && null == F
      b[35] !== G ||
      b[36] !== D ||
      b[37] !== R ||
      b[38] !== B ||
      b[39] !== F ||
      b[40] !== _.disabled_by ||
      b[41] !== _.id ||
      b[42] !== _.title ||
      b[43] !== W ||
      b[44] !== Q ||
      b[45] !== u ||
      b[46] !== w
        ? ((g = (0, i.jsx)(e3.u, {
            canEdit: G,
            canManage: D,
            initialIsOwner: D,
            disabled: R,
            disabledBy: _.disabled_by,
            isPinned: Q,
            liveUrl: F,
            onEdit: B,
            onNavigateToSite: u,
            projectId: _.id,
            projectTitle: _.title,
            compact: !0,
            surface: "library",
            unpublished: W,
            viewMode: w,
          })),
          (b[35] = G),
          (b[36] = D),
          (b[37] = R),
          (b[38] = B),
          (b[39] = F),
          (b[40] = _.disabled_by),
          (b[41] = _.id),
          (b[42] = _.title),
          (b[43] = W),
          (b[44] = Q),
          (b[45] = u),
          (b[46] = w),
          (b[47] = g))
        : (g = b[47])
      let Z = g
      b[48] !== Z ||
      b[49] !== x ||
      b[50] !== H ||
      b[51] !== s ||
      b[52] !== N ||
      b[53] !== V ||
      b[54] !== _ ||
      b[55] !== j ||
      b[56] !== I ||
      b[57] !== C ||
      b[58] !== $ ||
      b[59] !== P ||
      b[60] !== w
        ? ((m =
            "list" === w
              ? (0, i.jsx)(tt.kt, {
                  layout: x,
                  name: _.title,
                  link: H,
                  onOpen: s,
                  artwork: (0, i.jsx)(J.pKn, {}),
                  thumbnail: "stacked" === x ? (0, i.jsx)(e5.F, { screenshotUrl: _.screenshot_url }) : void 0,
                  favoriteMarker: $,
                  activity: _.updated_at ? (0, i.jsx)(e4.g, { dateString: _.updated_at }) : null,
                  detail: I ? "—" : void 0,
                  source: C,
                  sharedBy: "stacked" === x ? (0, i.jsx)(ta.M, { item: { siteProject: _ } }) : void 0,
                  actions: [
                    { key: "pin", component: V, alwaysVisible: N?.pinned },
                    { key: "menu", component: Z },
                  ],
                  reserveDisclosureSpace: j,
                })
              : (0, i.jsx)(tt.cu, {
                  structuredGridEnabled: P,
                  previewStageClassName: `${tn.A.sitePreviewStage} border border-subtle`,
                  name: _.title,
                  link: H,
                  onOpen: s,
                  square: !0,
                  landscape: !0,
                  actions: Z,
                  pinAction: V,
                  actionIndicator: N?.pinned ? (0, i.jsx)(ti.L, { action: N }) : null,
                  header: (0, i.jsxs)(i.Fragment, {
                    children: [
                      !P && (0, i.jsx)(J.pKn, {}),
                      (0, i.jsx)("span", { className: "min-w-0 truncate", children: _.title }),
                      $,
                    ],
                  }),
                  children: (0, i.jsx)(e5.x, { screenshotUrl: _.screenshot_url, viewMode: "grid" }),
                })),
          (b[48] = Z),
          (b[49] = x),
          (b[50] = H),
          (b[51] = s),
          (b[52] = N),
          (b[53] = V),
          (b[54] = _),
          (b[55] = j),
          (b[56] = I),
          (b[57] = C),
          (b[58] = $),
          (b[59] = P),
          (b[60] = w),
          (b[61] = m))
        : (m = b[61])
      let Y = m
      return (
        b[62] !== N || b[63] !== E
          ? ((f = () => N?.prefetch?.(E)),
            (v = () => N?.prefetch?.(E)),
            (b[62] = N),
            (b[63] = E),
            (b[64] = f),
            (b[65] = v))
          : ((f = b[64]), (v = b[65])),
        b[66] !== Y || b[67] !== f || b[68] !== v
          ? ((y = (0, i.jsx)("div", { className: "contents", onPointerEnter: f, onFocusCapture: v, children: Y })),
            (b[66] = Y),
            (b[67] = f),
            (b[68] = v),
            (b[69] = y))
          : (y = b[69]),
        y
      )
    }
    var to = a("qO66"),
      td = a("DBCl"),
      tc = a("SGsN"),
      tu = a("bg92"),
      tp = a("ZpLy"),
      tg = a("rFad"),
      th = a("nlNF"),
      tm = a("idI8"),
      tf = a("atZq"),
      tv = a("Lowz")
    function ty(e) {
      let t,
        a,
        r,
        n,
        s,
        d,
        c,
        g,
        h,
        m = (0, l.c)(47),
        {
          layout: f,
          isCurrent: v,
          navigation: y,
          result: b,
          viewMode: x,
          source: _,
          reserveDisclosureSpace: w,
          onOpen: S,
          fileActions: C,
        } = e,
        I = (0, o.gh)(X.u),
        j = (0, u.A)(),
        A = (0, ev.Zp)(),
        E = (0, ev.zy)(),
        k = (0, o.Ul)(z.spaceAccountId$),
        T = (0, o.Ul)(ec.chatGptAuthenticatedUserId$),
        { payload: O } = b
      if ("space_page" !== O.kind && "space_file" !== O.kind) return null
      m[0] !== j || m[1] !== b
        ? ((t =
            (0, tg.Ko)({ searchResult: b }, j) ||
            j.formatMessage({
              id: "space.home.untitledSearchResult",
              defaultMessage: "Untitled",
              description: "Fallback title for an unnamed global search result",
            })),
          (m[0] = j),
          (m[1] = b),
          (m[2] = t))
        : (t = m[2])
      let N = t
      m[3] !== b.update_time || m[4] !== x
        ? ((a =
            null == b.update_time
              ? null
              : (0, i.jsx)(tu.A, {
                  timestamp: new Date(1e3 * b.update_time).toISOString(),
                  dateKind: "suggested",
                  relative: "list" === x,
                })),
          (m[3] = b.update_time),
          (m[4] = x),
          (m[5] = a))
        : (a = m[5])
      let L = a
      m[6] !== k || m[7] !== v || m[8] !== E || m[9] !== I || m[10] !== T
        ? ((r = () =>
            I.get(z.spaceAccountId$) === k &&
            I.get(ec.chatGptAuthenticatedUserId$) === T &&
            I.get(M.pagesEnabled$) &&
            I.get(th.x2)?.key === E.key &&
            (v?.() ?? !0)),
          (m[6] = k),
          (m[7] = v),
          (m[8] = E),
          (m[9] = I),
          (m[10] = T),
          (m[11] = r))
        : (r = m[11])
      let U = r
      m[12] !== I
        ? ((n = () => {
            ;(0, P.yy)(I, es.CodexSpacesPageOpenRequested, {
              referrer: es.CodexSpacesPageOpenReferrer.CODEX_SPACES_PAGE_OPEN_REFERRER_SEARCH,
            })
          }),
          (m[12] = I),
          (m[13] = n))
        : (n = m[13])
      let R = n
      m[14] !== U || m[15] !== R || m[16] !== O.kind
        ? ((s = (e) => {}), (m[14] = U), (m[15] = R), (m[16] = O.kind), (m[17] = s))
        : (s = m[17])
      let F = s
      m[18] !== k ||
      m[19] !== U ||
      m[20] !== C ||
      m[21] !== E ||
      m[22] !== R ||
      m[23] !== N ||
      m[24] !== A ||
      m[25] !== y ||
      m[26] !== S ||
      m[27] !== O ||
      m[28] !== I ||
      m[29] !== T
        ? ((d = () => {
            if (U()) {
              if ((S?.(), "space_page" !== O.kind)) {
                if ("space_file" === O.kind) {
                  let e = () => {
                    U() &&
                      I.get(tc.Id).danger(
                        (0, i.jsx)(p.A, {
                          id: "codex.chatGptSearch.previewFailed",
                          defaultMessage: "Unable to open file preview",
                          description:
                            "Toast shown when a file preview cannot be loaded after selecting a ChatGPT search result",
                        }),
                        { errorAnalytics: { toastId: "codex.chatGptSearch.previewFailed" } },
                      )
                  }
                  null != O.page_id
                    ? C.openPageFile({
                        allowTaskPreview: !0,
                        browserPreview: !0,
                        conversationId: null,
                        downloadFallback: !1,
                        fileName: N,
                        isAccessBlocked: (e) =>
                          e.get(z.spaceAccountId$) !== k ||
                          e.get(ec.chatGptAuthenticatedUserId$) !== T ||
                          !e.get(M.pagesEnabled$),
                        tabKey: `page:${k}:${O.page_id}:${O.file_id}`,
                        target: { type: "page-file", fileId: O.file_id, pageId: O.page_id },
                      }).catch(e)
                    : (0, td.PKK)(O.file_id)
                      ? null == y && I.get(tf.kJ)
                        ? (0, tv.D)(I, { kind: "library", libraryFileId: O.file_id })
                        : C.openLibraryFile(O.file_id, N)
                      : e()
                }
                return
              }
              ;(R(),
                (0, tm.openGlobalSearchSpacePage)(I, A, E, O, U, y?.onOpenPage).catch(() => {
                  U() &&
                    I.get(tc.Id).danger(
                      (0, i.jsx)(p.A, {
                        id: "codex.chatGptSearch.pageOpenFailed.byDocumentType",
                        values: { documentType: I.get(z.loadedSpacePageMetadata$, O.page_id)?.document_type ?? "page" },
                        defaultMessage:
                          "{documentType, select, granola_presentation {Unable to open this slide} granola_workbook {Unable to open this sheet} other {Unable to open this page}}",
                        description:
                          "Toast when a Page selected from global search cannot be opened in its Space. documentType selects slide, sheet, or page for the current document.",
                      }),
                      { errorAnalytics: { toastId: "codex.chatGptSearch.pageOpenFailed" } },
                    )
                }))
            }
          }),
          (m[18] = k),
          (m[19] = U),
          (m[20] = C),
          (m[21] = E),
          (m[22] = R),
          (m[23] = N),
          (m[24] = A),
          (m[25] = y),
          (m[26] = S),
          (m[27] = O),
          (m[28] = I),
          (m[29] = T),
          (m[30] = d))
        : (d = m[30])
      let D = d
      if ("space_page" === O.kind) {
        let e
        ;(m[33] !== x
          ? ((e =
              "grid" === x
                ? (0, i.jsx)(K.I, { asset: to._, className: "text-file-document" })
                : (0, i.jsx)(J.hXV, { className: "text-file-document" })),
            (m[33] = x),
            (m[34] = e))
          : (e = m[34]),
          (g = e))
      }
      return (
        m[35] !== L ||
        m[36] !== c ||
        m[37] !== f ||
        m[38] !== N ||
        m[39] !== F ||
        m[40] !== D ||
        m[41] !== g ||
        m[42] !== w ||
        m[43] !== b ||
        m[44] !== _ ||
        m[45] !== x
          ? ((h =
              "grid" === x
                ? (0, i.jsx)(tt.cu, {
                    name: N,
                    square: !0,
                    href: c,
                    onActivate: F,
                    onOpen: D,
                    children: (0, i.jsx)(tt.JV, {
                      heading: N,
                      artwork:
                        g ??
                        (0, i.jsx)(tp.p, { fileName: void 0, mimeType: void 0, provider: "native", style: "card" }),
                      footer: (0, i.jsx)("span", { className: "min-w-0 truncate", children: L }),
                    }),
                  })
                : (0, i.jsx)(tt.kt, {
                    layout: f,
                    reserveDisclosureSpace: w,
                    name: N,
                    artwork: g ?? (0, i.jsx)(J.o_G, {}),
                    source: _,
                    sharedBy: "stacked" === f ? (0, i.jsx)(ta.M, { item: { searchResult: b } }) : void 0,
                    activity: L,
                    href: c,
                    onActivate: F,
                    onOpen: D,
                  })),
            (m[35] = L),
            (m[36] = c),
            (m[37] = f),
            (m[38] = N),
            (m[39] = F),
            (m[40] = D),
            (m[41] = g),
            (m[42] = w),
            (m[43] = b),
            (m[44] = _),
            (m[45] = x),
            (m[46] = h))
          : (h = m[46]),
        h
      )
    }
    a("DUyD")
    var tb = a("apD6")
    function tx(e) {
      let t,
        a,
        r = (0, l.c)(30),
        { item: n, catalog: s, navigation: d, onOpenProfile: c, inline: u } = e,
        p = void 0 !== u && u,
        { userId: g } = (0, h.As)(),
        m = (0, o.Ul)(void 0 === s ? z.spacesQuery$ : null),
        f = s ?? m?.data
      if ("siteProject" in n) {
        let e
        return (r[0] !== n ? ((e = (0, i.jsx)(eV, { item: n })), (r[0] = n), (r[1] = e)) : (e = r[1]), e)
      }
      r[2] !== n || r[3] !== f ? ((t = tP(f, n)), (r[2] = n), (r[3] = f), (r[4] = t)) : (t = r[4])
      let v = t
      if (null == v) {
        let e, t
        if (p) {
          let e, t
          if (null == f) {
            let e
            return (
              r[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(i.Fragment, {})), (r[5] = e))
                : (e = r[5]),
              e
            )
          }
          if ("node" in n && null != n.node.parent_directory_id && ["native", "native_shared"].includes((0, x.sm)(n))) {
            let e
            return (
              r[6] !== n || r[7] !== d || r[8] !== f
                ? ((e = (0, i.jsx)(tw, { spaces: f, item: n, navigation: d, inline: !0 })),
                  (r[6] = n),
                  (r[7] = d),
                  (r[8] = f),
                  (r[9] = e))
                : (e = r[9]),
              e
            )
          }
          return (
            "libraryPage" in n
              ? (e = n.libraryPage.node.page_metadata?.drive_space_id)
              : "page" in n
                ? (e = n.page.drive_space_id)
                : "searchResult" in n &&
                  ("space_page" === n.searchResult.payload.kind || "space_file" === n.searchResult.payload.kind) &&
                  (e = n.searchResult.payload.space_id),
            r[10] !== n || r[11] !== e
              ? ((t = e ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsx)(eV, { item: n })),
                (r[10] = n),
                (r[11] = e),
                (r[12] = t))
              : (t = r[12]),
            t
          )
        }
        if (
          ("libraryPage" in n ? (e = n.libraryPage) : "page" in n && (e = n.libraryItem),
          e?.node.shared_by?.name || e?.node.shared_via?.length)
        ) {
          let t
          return (
            r[13] !== e || r[14] !== c
              ? ((t = (0, i.jsx)(eX.f, { entry: e, onOpenProfile: c })), (r[13] = e), (r[14] = c), (r[15] = t))
              : (t = r[15]),
            t
          )
        }
        if ("libraryPage" in n && "owned" !== n.libraryPage.node.access_kind) {
          let e
          return (
            r[16] !== n.libraryPage.node.id || r[17] !== c
              ? ((e = (0, i.jsx)(tA, { pageId: n.libraryPage.node.id, onOpenProfile: c })),
                (r[16] = n.libraryPage.node.id),
                (r[17] = c),
                (r[18] = e))
              : (e = r[18]),
            e
          )
        }
        let a = "page" in n ? n.page.creator_account_user_id : void 0
        if (a && g && a.split("__")[0] !== g.split("__")[0]) {
          let e
          return (
            r[19] !== a || r[20] !== c
              ? ((e = (0, i.jsx)(tj, { accountUserId: a, onOpenProfile: c })), (r[19] = a), (r[20] = c), (r[21] = e))
              : (e = r[21]),
            e
          )
        }
        return (
          r[22] !== n || r[23] !== d || r[24] !== f
            ? ((t =
                "node" in n && null != n.node.parent_directory_id && ["native", "native_shared"].includes((0, x.sm)(n))
                  ? (0, i.jsx)(tw, { spaces: f, item: n, navigation: d })
                  : (0, i.jsx)(i.Fragment, { children: "—" })),
              (r[22] = n),
              (r[23] = d),
              (r[24] = f),
              (r[25] = t))
            : (t = r[25]),
          t
        )
      }
      return (
        r[26] !== p || r[27] !== d || r[28] !== v
          ? ((a = (0, i.jsx)(e1.Q, { navigation: d, space: v, inline: p })),
            (r[26] = p),
            (r[27] = d),
            (r[28] = v),
            (r[29] = a))
          : (a = r[29]),
        a
      )
    }
    function t_(e) {
      let t,
        a,
        r,
        n,
        s = (0, l.c)(75),
        {
          browseLocation: o,
          spaces: d,
          showRowThumbnails: c,
          structuredGridEnabled: u,
          searchFileActions: p,
          observeSearchResult: g,
          onOpenSearchResult: h,
          onOpenSite: m,
          isCurrent: f,
          item: v,
          exportToGoogleDrive: y,
          navigation: b,
          onOpenProfile: x,
          viewMode: w,
          source: S,
          pageTree: C,
          reserveDisclosureSpace: I,
          pinnedPresentation: j,
          reorderAction: A,
        } = e,
        P = void 0 !== c && c
      if ("searchResult" in v) {
        let e, t, a
        s[0] !== g ? ((e = (e) => (null == e ? void 0 : g(e))), (s[0] = g), (s[1] = e)) : (e = s[1])
        let l = P ? "stacked" : "columns"
        return (
          s[2] !== f ||
          s[3] !== v.searchResult ||
          s[4] !== b ||
          s[5] !== h ||
          s[6] !== I ||
          s[7] !== p ||
          s[8] !== S ||
          s[9] !== l ||
          s[10] !== w
            ? ((t = (0, i.jsx)(ty, {
                layout: l,
                isCurrent: f,
                navigation: b,
                result: v.searchResult,
                viewMode: w,
                source: S,
                reserveDisclosureSpace: I,
                onOpen: h,
                fileActions: p,
              })),
              (s[2] = f),
              (s[3] = v.searchResult),
              (s[4] = b),
              (s[5] = h),
              (s[6] = I),
              (s[7] = p),
              (s[8] = S),
              (s[9] = l),
              (s[10] = w),
              (s[11] = t))
            : (t = s[11]),
          s[12] !== e || s[13] !== t
            ? ((a = (0, i.jsx)("div", { ref: e, "data-library-item": "", children: t })),
              (s[12] = e),
              (s[13] = t),
              (s[14] = a))
            : (a = s[14]),
          a
        )
      }
      if ("siteProject" in v) {
        let e,
          t,
          a = P ? "stacked" : "columns",
          l = v.siteProject
        return (
          s[15] !== o ? ((e = (0, _.fQ)(o)), (s[15] = o), (s[16] = e)) : (e = s[16]),
          s[17] !== v.siteProject ||
          s[18] !== m ||
          s[19] !== I ||
          s[20] !== S ||
          s[21] !== u ||
          s[22] !== a ||
          s[23] !== e ||
          s[24] !== w
            ? ((t = (0, i.jsx)(ts, {
                layout: a,
                structuredGridEnabled: u,
                project: l,
                onOpenSite: m,
                viewMode: w,
                source: S,
                showSize: e,
                reserveDisclosureSpace: I,
              })),
              (s[17] = v.siteProject),
              (s[18] = m),
              (s[19] = I),
              (s[20] = S),
              (s[21] = u),
              (s[22] = a),
              (s[23] = e),
              (s[24] = w),
              (s[25] = t))
            : (t = s[25]),
          t
        )
      }
      s[26] !== v || s[27] !== d ? ((t = tP(d, v)), (s[26] = v), (s[27] = d), (s[28] = t)) : (t = s[28])
      let E = t,
        k = P && "list" === w && "library:collection:shared-with-me" === o.directoryId
      if (null != C && "list" === w) {
        let e,
          t,
          a,
          l = P ? "stacked" : "columns",
          r = "page" in v ? v.page : v.libraryPage,
          n = void 0 !== S,
          c = "library:collection:shared-with-me" === o.directoryId
        return (
          s[29] !== o ? ((e = (0, _.fQ)(o)), (s[29] = o), (s[30] = e)) : (e = s[30]),
          s[31] !== o ||
          s[32] !== y ||
          s[33] !== b ||
          s[34] !== x ||
          s[35] !== C.itemsByPageId ||
          s[36] !== E ||
          s[37] !== k ||
          s[38] !== P ||
          s[39] !== S ||
          s[40] !== d
            ? ((t = (e, t) => {
                let a = C.itemsByPageId.get("node" in e ? e.node.id : e.page_id)
                return (0, i.jsx)(tb.M, {
                  exportToGoogleDrive: 0 === t.depth ? y : void 0,
                  navigation: b,
                  showRowThumbnail: P,
                  activityDate: (0, ek.sm)(a),
                  page: null != a && "libraryPage" in a ? a.libraryPage : e,
                  libraryItem: null != a && "page" in a ? a.libraryItem : void 0,
                  parentSpace: E,
                  viewMode: "list",
                  libraryPresentation: !0,
                  browseLocation: o,
                  source:
                    void 0 !== S || k
                      ? (0, i.jsx)(tx, {
                          catalog: d ?? null,
                          navigation: b,
                          onOpenProfile: x,
                          inline: P,
                          item: a ?? ("node" in e ? { libraryPage: e } : { page: e }),
                        })
                      : void 0,
                  tree: t,
                })
              }),
              (s[31] = o),
              (s[32] = y),
              (s[33] = b),
              (s[34] = x),
              (s[35] = C.itemsByPageId),
              (s[36] = E),
              (s[37] = k),
              (s[38] = P),
              (s[39] = S),
              (s[40] = d),
              (s[41] = t))
            : (t = s[41]),
          s[42] !== C.expansion ||
          s[43] !== C.knownChildrenByParent ||
          s[44] !== l ||
          s[45] !== r ||
          s[46] !== n ||
          s[47] !== c ||
          s[48] !== e ||
          s[49] !== t
            ? ((a = (0, i.jsx)(e0.Z, {
                discoverChildren: !0,
                layout: l,
                page: r,
                showSource: n,
                showSharedBy: c,
                showSize: e,
                expansion: C.expansion,
                knownChildrenByParent: C.knownChildrenByParent,
                renderPage: t,
              })),
              (s[42] = C.expansion),
              (s[43] = C.knownChildrenByParent),
              (s[44] = l),
              (s[45] = r),
              (s[46] = n),
              (s[47] = c),
              (s[48] = e),
              (s[49] = t),
              (s[50] = a))
            : (a = s[50]),
          a
        )
      }
      s[51] !== v ? ((a = (0, ek.sm)(v)), (s[51] = v), (s[52] = a)) : (a = s[52])
      let T = "page" in v ? v.page : v.libraryPage,
        M = "page" in v ? v.libraryItem : void 0
      return (
        s[53] !== v || s[54] !== b || s[55] !== x || s[56] !== k || s[57] !== S || s[58] !== d
          ? ((r =
              S ??
              (k
                ? (0, i.jsx)(tx, { catalog: d ?? null, item: v, navigation: b, onOpenProfile: x, inline: !0 })
                : void 0)),
            (s[53] = v),
            (s[54] = b),
            (s[55] = x),
            (s[56] = k),
            (s[57] = S),
            (s[58] = d),
            (s[59] = r))
          : (r = s[59]),
        s[60] !== o ||
        s[61] !== y ||
        s[62] !== b ||
        s[63] !== E ||
        s[64] !== j ||
        s[65] !== A ||
        s[66] !== I ||
        s[67] !== P ||
        s[68] !== u ||
        s[69] !== a ||
        s[70] !== T ||
        s[71] !== M ||
        s[72] !== r ||
        s[73] !== w
          ? ((n = (0, i.jsx)(tb.M, {
              exportToGoogleDrive: y,
              structuredGridEnabled: u,
              navigation: b,
              showRowThumbnail: P,
              activityDate: a,
              page: T,
              libraryItem: M,
              parentSpace: E,
              viewMode: w,
              libraryPresentation: !0,
              pinnedPresentation: j,
              reorderAction: A,
              browseLocation: o,
              source: r,
              reserveDisclosureSpace: I,
            })),
            (s[60] = o),
            (s[61] = y),
            (s[62] = b),
            (s[63] = E),
            (s[64] = j),
            (s[65] = A),
            (s[66] = I),
            (s[67] = P),
            (s[68] = u),
            (s[69] = a),
            (s[70] = T),
            (s[71] = M),
            (s[72] = r),
            (s[73] = w),
            (s[74] = n))
          : (n = s[74]),
        n
      )
    }
    function tw(e) {
      let t,
        a,
        r,
        n,
        s,
        d,
        c = (0, l.c)(27),
        { item: u, spaces: p, navigation: g, inline: h } = e,
        m = (0, o.gh)(_.Qy),
        f = u.node.parent_directory_id
      ;(c[0] !== f || c[1] !== m.value.accountId || c[2] !== m.value.userId
        ? ((t = (0, eZ.c)(m.value.accountId, m.value.userId, f)),
          (c[0] = f),
          (c[1] = m.value.accountId),
          (c[2] = m.value.userId),
          (c[3] = t))
        : (t = c[3]),
        c[4] !== f || c[5] !== m
          ? ((a = (e) => {
              let { signal: t } = e
              return m
                .get(_.c7)
                .safeGet("/files/library/directories/path", {
                  parameters: { query: { directory_id: f } },
                  isExpectedError: tI,
                  signal: t,
                })
            }),
            (c[4] = f),
            (c[5] = m),
            (c[6] = a))
          : (a = c[6]),
        c[7] !== f || c[8] !== p?.items || c[9] !== p?.items.some
          ? ((r = null != f && p?.items.some(tC) === !0),
            (c[7] = f),
            (c[8] = p?.items),
            (c[9] = p?.items.some),
            (c[10] = r))
          : (r = c[10]),
        c[11] !== t || c[12] !== a || c[13] !== r
          ? ((n = { queryKey: t, queryFn: a, enabled: r, staleTime: 6e4 }),
            (c[11] = t),
            (c[12] = a),
            (c[13] = r),
            (c[14] = n))
          : (n = c[14]))
      let { data: v, isPending: y, isError: b } = (0, eE.I)(n, m.queryClient)
      c[15] !== v || c[16] !== p?.items || c[17] !== p?.items.find
        ? ((s = p?.items.find(
            (e) => null != e.root_directory_id && v?.items.some((t) => t.id === e.root_directory_id),
          )),
          (c[15] = v),
          (c[16] = p?.items),
          (c[17] = p?.items.find),
          (c[18] = s))
        : (s = c[18])
      let x = s
      if (null == x) {
        let e
        if (!h) {
          let e
          return (
            c[19] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(i.Fragment, { children: "—" })), (c[19] = e))
              : (e = c[19]),
            e
          )
        }
        if ((y || b) && p?.items.some(tS)) {
          let e
          return (
            c[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(i.Fragment, {})), (c[20] = e))
              : (e = c[20]),
            e
          )
        }
        return (c[21] !== u ? ((e = (0, i.jsx)(eV, { item: u })), (c[21] = u), (c[22] = e)) : (e = c[22]), e)
      }
      return (
        c[23] !== h || c[24] !== g || c[25] !== x
          ? ((d = (0, i.jsx)(e1.Q, { navigation: g, space: x, inline: h })),
            (c[23] = h),
            (c[24] = g),
            (c[25] = x),
            (c[26] = d))
          : (d = c[26]),
        d
      )
    }
    function tS(e) {
      return null != e.root_directory_id
    }
    function tC(e) {
      return null != e.root_directory_id
    }
    function tI(e) {
      return 403 === e.status || 404 === e.status
    }
    function tj(e) {
      let t,
        a,
        r,
        n,
        s,
        d = (0, l.c)(17),
        { accountUserId: c, onOpenProfile: u } = e,
        p = (0, o._U)(eJ.ik, c),
        g = (0, o.Ul)(eK.JG)
      if (null == p) {
        let e
        return (
          d[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(i.Fragment, { children: "—" })), (d[0] = e))
            : (e = d[0]),
          e
        )
      }
      let h = g && "relative z-10"
      return (
        d[1] !== h ? ((t = (0, q.A)("inline-flex min-w-0 items-center gap-2", h)), (d[1] = h), (d[2] = t)) : (t = d[2]),
        d[3] !== c || d[4] !== p
          ? ((a = (0, i.jsx)(eY.Y, { accountUserId: c, name: p, size: "inline" })), (d[3] = c), (d[4] = p), (d[5] = a))
          : (a = d[5]),
        d[6] !== p
          ? ((r = (0, i.jsx)("span", { className: "truncate", children: p })), (d[6] = p), (d[7] = r))
          : (r = d[7]),
        d[8] !== t || d[9] !== a || d[10] !== r
          ? ((n = (0, i.jsxs)("span", { className: t, children: [a, r] })),
            (d[8] = t),
            (d[9] = a),
            (d[10] = r),
            (d[11] = n))
          : (n = d[11]),
        d[12] !== c || d[13] !== p || d[14] !== u || d[15] !== n
          ? ((s = (0, i.jsx)(eq.Ve, { accountUserId: c, label: p, onOpenProfile: u, children: n })),
            (d[12] = c),
            (d[13] = p),
            (d[14] = u),
            (d[15] = n),
            (d[16] = s))
          : (s = d[16]),
        s
      )
    }
    function tA(e) {
      let t,
        a = (0, l.c)(4),
        { pageId: r, onOpenProfile: n } = e,
        { userId: s } = (0, h.As)(),
        d = (0, o._U)(z.loadedSpacePageMetadata$, r),
        c = d?.creator_account_user_id
      return (
        a[0] !== c || a[1] !== n || a[2] !== s
          ? ((t =
              c && s && c.split("__")[0] !== s.split("__")[0]
                ? (0, i.jsx)(tj, { accountUserId: c, onOpenProfile: n })
                : (0, i.jsx)(i.Fragment, { children: "—" })),
            (a[0] = c),
            (a[1] = n),
            (a[2] = s),
            (a[3] = t))
          : (t = a[3]),
        t
      )
    }
    function tP(e, t) {
      return e?.items.find((e) => {
        if ("libraryPage" in t) return t.libraryPage.node.page_metadata?.drive_space_id === e.id
        if ("page" in t) return t.page.drive_space_id === e.id
        if ("node" in t) return null != e.root_directory_id && e.root_directory_id === t.node.parent_directory_id
        if (!("searchResult" in t)) return !1
        let a = t.searchResult.payload
        return ("space_page" === a.kind || "space_file" === a.kind) && a.space_id === e.id
      })
    }
    var tE = a("y67V"),
      tk = a("OOaz"),
      tT = a("GigQ")
    let tM = `${tk.Yu}opened-share-renderability`
    function tO(e, t) {
      if (!("posted_at" in e)) return !0
      let a = e.attachments[0]
      return a?.kind === "prompt_share"
        ? !t && a.prompt_share.content.prompt.trim().length > 0
        : (a?.kind === "prompt" && a.prompt.trim().length > 0 && e.attachments.every((e) => "prompt" === e.kind)) ||
            null != (0, tT.$)(e, tM) ||
            e.attachments.some(tN)
    }
    function tN(e) {
      return "media_generation" === e.kind && "image_gen" === e.generation_type && !0 !== e.output_blocked
    }
    function tL(e, t) {
      if ("posted_at" in e) {
        let a = e.attachments[0]
        return (
          (a?.kind === "prompt_share"
            ? a.prompt_share.content.title
            : e.text?.trim() || (a?.kind === "media_generation" ? a.title?.trim() : null)) ||
          t.formatMessage({
            id: "space.openedSharedLinks.untitledPost",
            defaultMessage: "Untitled shared post",
            description: "Fallback title for an opened shared ChatGPT post without a title",
          })
        )
      }
      return (
        e.title?.trim() ||
        t.formatMessage({
          id: "space.openedSharedLinks.untitledChat",
          defaultMessage: "Untitled shared chat",
          description: "Fallback title for an opened shared ChatGPT conversation without a title",
        })
      )
    }
    var tU = a("XPCU"),
      tR = a("FM08")
    function tF(e) {
      let t,
        a,
        s,
        d,
        c,
        p,
        g,
        h,
        m,
        v,
        y,
        x,
        w,
        S,
        C,
        I,
        j = (0, l.c)(78),
        {
          layout: E,
          item: k,
          viewMode: T,
          structuredGridEnabled: M,
          reserveDisclosureSpace: O,
          position: N,
          onDelete: L,
        } = e,
        U = void 0 !== M && M,
        R = (0, o.gh)(_.Qy),
        F = (0, u.A)(),
        D = "posted_at" in k
      if (j[0] !== F || j[1] !== D || j[2] !== k || j[3] !== N || j[4] !== R || j[5] !== T) {
        let e, l, o
        ;((h = tL(k, F)),
          j[14] !== D
            ? ((e = D ? (0, i.jsx)(J.DIB, {}) : (0, i.jsx)(J.VhP, {})), (j[14] = D), (j[15] = e))
            : (e = j[15]),
          (d = e))
        let u = D && k.attachments.some(tD)
        if (((c = null), D && !u))
          if (j[16] !== k.attachments) {
            for (let e of k.attachments)
              if (tN(e)) {
                c = (0, tU.I)(e.url)
                break
              }
            ;((j[16] = k.attachments), (j[17] = c))
          } else c = j[17]
        s = D
          ? `/s/${encodeURIComponent(k.id)}`
          : `${null == k.workspace_id ? "/share/" : "/share/e/"}${encodeURIComponent(k.id)}`
        let m = k.last_opened_at ?? k.first_opened_at
        ;(j[18] !== m
          ? ((l = null == m ? "—" : (0, i.jsx)(tu.A, { timestamp: m, dateKind: "shared" })), (j[18] = m), (j[19] = l))
          : (l = j[19]),
          (a = l),
          j[20] !== D || j[21] !== k.id || j[22] !== N || j[23] !== R || j[24] !== T
            ? ((o = (e) => {
                ;(0, P.yy)(R, r.pG, {
                  ...(0, b.zH)(R),
                  interactionType: e,
                  artifactId: k.id,
                  entityKind: D ? "received_post" : "received_conversation",
                  libraryOrigin: b._0,
                  provider: (0, A.Pw)(R.value.directoryId),
                  folderKind: "CHATGPT_FILE_LIBRARY_FOLDER_KIND_SHARED_WITH_ME",
                  layout: "grid" === T ? "CHATGPT_FILE_LIBRARY_LAYOUT_GRID" : "CHATGPT_FILE_LIBRARY_LAYOUT_LIST",
                  position: (0, n.PZ)(N),
                })
              }),
              (j[20] = D),
              (j[21] = k.id),
              (j[22] = N),
              (j[23] = R),
              (j[24] = T),
              (j[25] = o))
            : (o = j[25]),
          (p = o),
          (t = f.$),
          (g = F.formatMessage(
            {
              id: "space.openedSharedLinks.delete",
              defaultMessage: "Delete {title} from Shared with you",
              description:
                "Accessible label for a button that removes an opened shared ChatGPT link from the Space Shared with you view",
            },
            { title: h },
          )),
          (j[0] = F),
          (j[1] = D),
          (j[2] = k),
          (j[3] = N),
          (j[4] = R),
          (j[5] = T),
          (j[6] = t),
          (j[7] = a),
          (j[8] = s),
          (j[9] = d),
          (j[10] = c),
          (j[11] = p),
          (j[12] = g),
          (j[13] = h))
      } else ((t = j[6]), (a = j[7]), (s = j[8]), (d = j[9]), (c = j[10]), (p = j[11]), (g = j[12]), (h = j[13]))
      ;(j[26] !== F || j[27] !== D || j[28] !== k.id || j[29] !== p || j[30] !== L || j[31] !== R
        ? ((m = () => {
            ;(p("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_INITIATED"),
              (0, _.ZT)(R, `${D ? "post" : "conversation"}:${k.id}`, L)
                .then(() => {
                  p("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_SUCCEEDED")
                })
                .catch(() => {
                  ;(p("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_FAILED"),
                    R.get(tc.Id).danger(
                      F.formatMessage({
                        id: "space.openedSharedLinks.deleteFailed",
                        defaultMessage: "Unable to delete this shared item",
                        description:
                          "Error toast when an opened shared ChatGPT link could not be removed from the Space Shared with you view",
                      }),
                      { errorAnalytics: { toastId: "space.openedSharedLinks.deleteFailed" } },
                    ))
                }))
          }),
          (j[26] = F),
          (j[27] = D),
          (j[28] = k.id),
          (j[29] = p),
          (j[30] = L),
          (j[31] = R),
          (j[32] = m))
        : (m = j[32]),
        j[33] === Symbol.for("react.memo_cache_sentinel") ? ((v = (0, i.jsx)(J.cSG, {})), (j[33] = v)) : (v = j[33]),
        j[34] !== t || j[35] !== g || j[36] !== m
          ? ((y = (0, i.jsx)(t, {
              "aria-label": g,
              color: "ghostDanger",
              onClick: m,
              size: "actionSm",
              uniform: !0,
              children: v,
            })),
            (j[34] = t),
            (j[35] = g),
            (j[36] = m),
            (j[37] = y))
          : (y = j[37]))
      let G = y
      if ("grid" === T) {
        let e, t, a, l
        return (
          j[38] !== p
            ? ((e = () => p("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_OPENED")), (j[38] = p), (j[39] = e))
            : (e = j[39]),
          j[40] !== d || j[41] !== c || j[42] !== U || j[43] !== h
            ? ((t =
                U && null != c
                  ? void 0
                  : (0, i.jsxs)(i.Fragment, {
                      children: [!U && d, (0, i.jsx)("span", { className: "truncate", children: h })],
                    })),
              (j[40] = d),
              (j[41] = c),
              (j[42] = U),
              (j[43] = h),
              (j[44] = t))
            : (t = j[44]),
          j[45] !== d || j[46] !== c || j[47] !== U
            ? ((a = (0, i.jsx)("span", {
                className: "relative min-h-0 w-full flex-1",
                children:
                  null == c
                    ? (0, i.jsx)(tt.Qe, { artwork: d })
                    : (0, i.jsx)(tR.j, {
                        className: (0, q.A)(
                          "absolute inset-0",
                          U
                            ? "m-auto h-auto max-h-full w-auto max-w-full rounded-xl object-contain"
                            : "size-full object-cover",
                        ),
                        src: c,
                        fallback: (0, i.jsx)(tt.Qe, { artwork: d }),
                      }),
              })),
              (j[45] = d),
              (j[46] = c),
              (j[47] = U),
              (j[48] = a))
            : (a = j[48]),
          j[49] !== G || j[50] !== s || j[51] !== U || j[52] !== e || j[53] !== t || j[54] !== a || j[55] !== h
            ? ((l = (0, i.jsx)(tt.cu, {
                structuredGridEnabled: U,
                name: h,
                href: s,
                onActivate: e,
                actions: G,
                square: !0,
                documentHeader: t,
                children: a,
              })),
              (j[49] = G),
              (j[50] = s),
              (j[51] = U),
              (j[52] = e),
              (j[53] = t),
              (j[54] = a),
              (j[55] = h),
              (j[56] = l))
            : (l = j[56]),
          l
        )
      }
      let B = !D
      return (
        j[57] !== d || j[58] !== c
          ? ((x = null == c ? d : (0, i.jsx)(tR.j, { className: "size-full object-cover", src: c, fallback: d })),
            (j[57] = d),
            (j[58] = c),
            (j[59] = x))
          : (x = j[59]),
        j[60] !== k.shared_by || j[61] !== E
          ? ((w = "stacked" === E ? (0, i.jsx)(ta.M, { sharedByName: k.shared_by }) : k.shared_by?.trim() || "—"),
            (j[60] = k.shared_by),
            (j[61] = E),
            (j[62] = w))
          : (w = j[62]),
        j[63] !== p
          ? ((S = () => p("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_OPENED")), (j[63] = p), (j[64] = S))
          : (S = j[64]),
        j[65] !== G ? ((C = [{ key: "delete", component: G }]), (j[65] = G), (j[66] = C)) : (C = j[66]),
        j[67] !== a ||
        j[68] !== s ||
        j[69] !== E ||
        j[70] !== O ||
        j[71] !== C ||
        j[72] !== B ||
        j[73] !== x ||
        j[74] !== w ||
        j[75] !== S ||
        j[76] !== h
          ? ((I = (0, i.jsx)(tt.kt, {
              layout: E,
              activateLinkFromNameCell: B,
              reserveDisclosureSpace: O,
              name: h,
              artwork: x,
              activity: a,
              sharedBy: w,
              href: s,
              onActivate: S,
              actions: C,
            })),
            (j[67] = a),
            (j[68] = s),
            (j[69] = E),
            (j[70] = O),
            (j[71] = C),
            (j[72] = B),
            (j[73] = x),
            (j[74] = w),
            (j[75] = S),
            (j[76] = h),
            (j[77] = I))
          : (I = j[77]),
        I
      )
    }
    function tD(e) {
      return "prompt_share" === e.kind || "message_slice" === e.kind
    }
    function tG(e) {
      let t,
        a,
        r,
        n,
        s = (0, l.c)(11),
        { paint: o, error: d, hasCachedItems: c, isFetching: u, isNextPageError: g, onRetry: h } = e
      if (!d) return null
      s[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(p.A, {
            id: "space.openedSharedLinks.error",
            defaultMessage: "Unable to load opened links",
            description:
              "Error shown when the Space Shared with you view cannot load shared ChatGPT links the user has opened",
          })),
          (s[0] = t))
        : (t = s[0])
      let m = t
      if (g) {
        let e
        ;(s[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(p.A, {
              id: "space.openedSharedLinks.loadMoreError",
              defaultMessage: "Unable to load more opened links",
              description:
                "Error shown when the Space Shared with you view cannot load the next page of shared ChatGPT links the user has opened",
            })),
            (s[1] = e))
          : (e = s[1]),
          (m = e))
      } else if (c) {
        let e
        ;(s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(p.A, {
              id: "space.openedSharedLinks.refreshError",
              defaultMessage: "Unable to refresh opened links",
              description:
                "Error shown when previously loaded shared ChatGPT links remain visible in the Space Shared with you view but could not be refreshed",
            })),
            (s[2] = e))
          : (e = s[2]),
          (m = e))
      }
      return (
        s[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(p.A, {
              id: "libraryNext.results.retry",
              defaultMessage: "Try again",
              description: "Retry fetching Library results",
            })),
            (s[3] = a))
          : (a = s[3]),
        s[4] !== u || s[5] !== h
          ? ((r = (0, i.jsx)(f.$, { color: "ghost", disabled: u, onClick: h, children: a })),
            (s[4] = u),
            (s[5] = h),
            (s[6] = r))
          : (r = s[6]),
        s[7] !== m || s[8] !== o || s[9] !== r
          ? ((n = (0, i.jsxs)("div", {
              className: "flex items-center gap-3 pb-4 text-secondary",
              role: "alert",
              children: [o, m, r],
            })),
            (s[7] = m),
            (s[8] = o),
            (s[9] = r),
            (s[10] = n))
          : (n = s[10]),
        n
      )
    }
    function tB(e) {
      let t,
        a,
        r = (0, l.c)(4),
        { hasNextPage: n, isFetchingNextPage: s, onLoadNextPage: o } = e
      return n
        ? (r[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(p.A, {
                id: "space.openedSharedLinks.loadMore",
                defaultMessage: "Load more",
                description: "Button to load more shared ChatGPT links the user has opened",
              })),
              (r[0] = t))
            : (t = r[0]),
          r[1] !== s || r[2] !== o
            ? ((a = (0, i.jsx)("div", {
                className: "flex justify-center pb-4",
                children: (0, i.jsx)(f.$, { color: "ghost", disabled: s, loading: s, onClick: o, children: t }),
              })),
              (r[1] = s),
              (r[2] = o),
              (r[3] = a))
            : (a = r[3]),
          a)
        : null
    }
    var tz = a("aV3j"),
      tH = a("NRh3"),
      t$ = a("IFrF"),
      tV = a("ofBY"),
      tQ = a("T1PX"),
      tW = a("Qgfj"),
      tZ = a("X3K1"),
      tY = a("vHxi"),
      tq = a("nndI"),
      tK = a("SCmN"),
      tJ = a("WP5H"),
      tX = a("I8SU"),
      t1 = a("CZSB"),
      t0 = a("e7M0"),
      t2 = a("i1Zq"),
      t3 = a("JkZJ")
    function t5(e) {
      let t,
        a,
        r,
        n,
        s,
        d,
        c,
        p,
        g,
        h,
        m,
        f = (0, l.c)(42),
        { suggestions: v, visibleContentMarker: y, navigation: b, isCurrent: x } = e,
        _ = (0, o.gh)(X.u),
        w = (0, u.A)(),
        S = (0, ev.Zp)(),
        C = (0, o.Ul)(tK.jm),
        I = (0, o.Ul)(tX.cJ),
        j = (0, o.Ul)(tq.ax),
        A = null == C ? void 0 : j[C.key],
        E = (0, o._U)(tK.av, C?.key ?? ""),
        k = (0, o._U)(tK.Dj, C?.key ?? ""),
        T = (0, o.Ul)(en.Gd)
      if (
        f[0] !== k ||
        f[1] !== I ||
        f[2] !== w ||
        f[3] !== x ||
        f[4] !== S ||
        f[5] !== b?.onOpenPage ||
        f[6] !== E ||
        f[7] !== _ ||
        f[8] !== v ||
        f[9] !== y ||
        f[10] !== A
      ) {
        let e, l
        f[19] !== k || f[20] !== A
          ? ((e = (e) => "welcome" !== e || (null != A && "available" === k)), (f[19] = k), (f[20] = A), (f[21] = e))
          : (e = f[21])
        let o = v.filter(e)
        ;(f[22] !== x || f[23] !== _
          ? ((l = () => _.get(en.Wz) && x?.() !== !1), (f[22] = x), (f[23] = _), (f[24] = l))
          : (l = f[24]),
          (a = l),
          f[25] !== v
            ? ((p = v.includes("welcome") ? (0, i.jsx)(t4, {}) : null), (f[25] = v), (f[26] = p))
            : (p = f[26]),
          (t = eS),
          (r = o),
          (n = y),
          (s = !0),
          (d = x),
          (c =
            o.includes("welcome") &&
            (0, i.jsx)(t7, {
              opening: E,
              creating: !1,
              failed: !1,
              highlighted: null != I,
              onOpen: E
                ? void 0
                : () => {
                    let e = _.get(tK.jm),
                      t = null == e ? void 0 : _.get(tq.ax)[e.key]
                    null != t &&
                      ((0, P.yy)(_, es.CodexSpacesOnboarding, {
                        action: es.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_ITEM_SELECTED,
                        item: es.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
                        pageId: t,
                      }),
                      (0, tY.a)(_, S, w, { pageId: t, onOpenPage: b?.onOpenPage, isCurrent: a }))
                  },
            })),
          (f[0] = k),
          (f[1] = I),
          (f[2] = w),
          (f[3] = x),
          (f[4] = S),
          (f[5] = b?.onOpenPage),
          (f[6] = E),
          (f[7] = _),
          (f[8] = v),
          (f[9] = y),
          (f[10] = A),
          (f[11] = t),
          (f[12] = a),
          (f[13] = r),
          (f[14] = n),
          (f[15] = s),
          (f[16] = d),
          (f[17] = c),
          (f[18] = p))
      } else ((t = f[11]), (a = f[12]), (r = f[13]), (n = f[14]), (s = f[15]), (d = f[16]), (c = f[17]), (p = f[18]))
      return (
        f[27] !== a || f[28] !== b?.onOpenPage || f[29] !== T
          ? ((g = T?.map((e) =>
              (0, i.jsx)(t1.s, { suggestion: e, surface: "onboarding", onOpenPage: b?.onOpenPage, isCurrent: a }, e.id),
            )),
            (f[27] = a),
            (f[28] = b?.onOpenPage),
            (f[29] = T),
            (f[30] = g))
          : (g = f[30]),
        f[31] !== t || f[32] !== r || f[33] !== n || f[34] !== s || f[35] !== d || f[36] !== c || f[37] !== g
          ? ((h = (0, i.jsxs)(t, {
              suggestions: r,
              visibleContentMarker: n,
              showRecommendations: s,
              isCurrent: d,
              children: [c, g],
            })),
            (f[31] = t),
            (f[32] = r),
            (f[33] = n),
            (f[34] = s),
            (f[35] = d),
            (f[36] = c),
            (f[37] = g),
            (f[38] = h))
          : (h = f[38]),
        f[39] !== p || f[40] !== h
          ? ((m = (0, i.jsxs)(i.Fragment, { children: [p, h] })), (f[39] = p), (f[40] = h), (f[41] = m))
          : (m = f[41]),
        m
      )
    }
    function t4() {
      let e,
        t,
        a,
        i = (0, l.c)(15),
        r = (0, o.gh)(X.u),
        n = (0, o.Ul)(tK.jm),
        s = (0, o._U)(t2.J, n?.key ?? ""),
        d = (0, o._U)(tK.av, n?.key ?? ""),
        u = (0, o._U)(tK.Dj, n?.key ?? ""),
        p = (0, o.Ul)(tq.ax),
        g = null == n ? null : p[n.key]
      i[0] !== r
        ? ((e = () => {
            ;(0, t0.provisionSpaceWelcomePage)(r)
          }),
          (i[0] = r),
          (i[1] = e))
        : (e = i[1])
      let h = (0, c.useEffectEvent)(e)
      i[2] !== u || i[3] !== s || i[4] !== n?.key || i[5] !== d || i[6] !== g || i[7] !== h
        ? ((t = () => {
            n?.key != null && (null == g || "unknown" === u) && ("idle" !== s || d || h())
          }),
          (i[2] = u),
          (i[3] = s),
          (i[4] = n?.key),
          (i[5] = d),
          (i[6] = g),
          (i[7] = h),
          (i[8] = t))
        : (t = i[8])
      let m = n?.key
      return (
        i[9] !== u || i[10] !== s || i[11] !== d || i[12] !== g || i[13] !== m
          ? ((a = [m, g, s, d, u]), (i[9] = u), (i[10] = s), (i[11] = d), (i[12] = g), (i[13] = m), (i[14] = a))
          : (a = i[14]),
        (0, c.useEffect)(t, a),
        null
      )
    }
    function t7(e) {
      let t,
        a,
        r,
        n,
        s,
        o,
        d,
        c,
        g,
        h,
        m,
        f,
        v,
        y,
        b,
        x,
        _,
        w = (0, l.c)(53),
        { opening: S, creating: C, failed: I, highlighted: j, onOpen: A, actions: P } = e,
        E = (0, u.A)()
      if (w[0] !== P || w[1] !== C || w[2] !== I || w[3] !== j || w[4] !== E || w[5] !== A || w[6] !== S) {
        let e = (0, t3.gt)(E),
          l = !I && (C || S),
          u = null
        if (I) {
          let e
          ;(w[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)("div", {
                className: "flex w-full justify-center text-secondary",
                role: "status",
                children: (0, i.jsx)(p.A, {
                  id: "space.welcome.retry",
                  defaultMessage: "Retry",
                  description:
                    "Short action label centered inside the Getting Started with Pages card after creation fails. Selecting the card retries creating the personal Page.",
                }),
              })),
              (w[21] = e))
            : (e = w[21]),
            (u = e))
        } else if (l) {
          let e, t, a
          ;(w[22] !== C
            ? ((e = (0, i.jsx)("span", {
                className: "sr-only",
                children: C
                  ? (0, i.jsx)(p.A, {
                      id: "space.welcome.creating",
                      defaultMessage: "Creating your Page…",
                      description:
                        "Accessible status while the user's personal Getting Started Page is being created in the background.",
                    })
                  : (0, i.jsx)(p.A, {
                      id: "space.welcome.opening",
                      defaultMessage: "Opening…",
                      description: "Accessible status while opening the Getting Started Page",
                    }),
              })),
              (w[22] = C),
              (w[23] = e))
            : (e = w[23]),
            w[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, i.jsx)(tZ.P, { lines: 1 })), (w[24] = t))
              : (t = w[24]),
            w[25] !== e
              ? ((a = (0, i.jsxs)("div", { className: "w-full", role: "status", children: [e, t] })),
                (w[25] = e),
                (w[26] = a))
              : (a = w[26]),
            (u = a))
        }
        ;((a = eb.Z),
          w[27] !== E ? ((m = E.formatMessage(t6.welcome)), (w[27] = E), (w[28] = m)) : (m = w[28]),
          w[29] !== u ? ((f = u ?? (0, i.jsx)(p.A, { ...t6.welcome })), (w[29] = u), (w[30] = f)) : (f = w[30]),
          w[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = (0, i.jsx)(p.A, {
                id: "space.gettingStartedPages.startHere",
                defaultMessage: "Start here",
                description:
                  "Short caption beneath Your guide to pages in the Space template carousel, inviting users to open the introductory Page first",
              })),
              (w[31] = v))
            : (v = w[31]),
          (y = j),
          (n = l),
          (s = A),
          (o = P),
          (t = ey.D),
          (g = "space-welcome-template-preview"),
          (h = tJ.x),
          w[32] !== E ? ((r = E.formatMessage(t6.welcome)), (w[32] = E), (w[33] = r)) : (r = w[33]),
          (d = e.join("\n\n")),
          (c = e.map(t8)),
          (w[0] = P),
          (w[1] = C),
          (w[2] = I),
          (w[3] = j),
          (w[4] = E),
          (w[5] = A),
          (w[6] = S),
          (w[7] = t),
          (w[8] = a),
          (w[9] = r),
          (w[10] = n),
          (w[11] = s),
          (w[12] = o),
          (w[13] = d),
          (w[14] = c),
          (w[15] = g),
          (w[16] = h),
          (w[17] = m),
          (w[18] = f),
          (w[19] = v),
          (w[20] = y))
      } else
        ((t = w[7]),
          (a = w[8]),
          (r = w[9]),
          (n = w[10]),
          (s = w[11]),
          (o = w[12]),
          (d = w[13]),
          (c = w[14]),
          (g = w[15]),
          (h = w[16]),
          (m = w[17]),
          (f = w[18]),
          (v = w[19]),
          (y = w[20]))
      return (
        w[34] !== r || w[35] !== d || w[36] !== c
          ? ((b = { title: r, markdown: d, units: c }), (w[34] = r), (w[35] = d), (w[36] = c), (w[37] = b))
          : (b = w[37]),
        w[38] !== t || w[39] !== b || w[40] !== g || w[41] !== h
          ? ((x = (0, i.jsx)(t, { pageId: g, symbol: h, document: b })),
            (w[38] = t),
            (w[39] = b),
            (w[40] = g),
            (w[41] = h),
            (w[42] = x))
          : (x = w[42]),
        w[43] !== a ||
        w[44] !== n ||
        w[45] !== s ||
        w[46] !== o ||
        w[47] !== x ||
        w[48] !== m ||
        w[49] !== f ||
        w[50] !== v ||
        w[51] !== y
          ? ((_ = (0, i.jsx)(a, {
              title: m,
              titleContent: f,
              subtitle: v,
              highlighted: y,
              disabled: n,
              onOpen: s,
              actions: o,
              preview: x,
            })),
            (w[43] = a),
            (w[44] = n),
            (w[45] = s),
            (w[46] = o),
            (w[47] = x),
            (w[48] = m),
            (w[49] = f),
            (w[50] = v),
            (w[51] = y),
            (w[52] = _))
          : (_ = w[52]),
        _
      )
    }
    function t8(e) {
      return { kind: "markdown", markdown: e }
    }
    let t6 = (0, tW.YK)({
      welcome: {
        id: "space.gettingStartedPages.title",
        defaultMessage: "Your guide to pages",
        description: "Title of the introductory Getting Started Page and its card",
      },
    })
    var t9 = a("HQhH"),
      ae = a("suct"),
      at = a("LIss"),
      aa = a("V8uZ")
    function ai(e) {
      let t,
        a,
        r,
        n,
        s = (0, l.c)(11),
        { children: o, animate: d } = e
      if (!d) {
        let e
        return (
          s[0] !== o
            ? ((e = null == o ? null : (0, i.jsx)("div", { className: "pt-4 pb-8", children: o })),
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
          ? ((a = null == o ? null : (0, i.jsx)(al, { children: o }, o.key)), (s[4] = o), (s[5] = a))
          : (a = s[5]),
        s[6] !== a
          ? ((r = (0, i.jsx)("div", {
              className: "min-h-0 overflow-y-clip",
              children: (0, i.jsx)(ae.N, { initial: !1, mode: "wait", children: a }),
            })),
            (s[6] = a),
            (s[7] = r))
          : (r = s[7]),
        s[8] !== t || s[9] !== r
          ? ((n = (0, i.jsx)("div", {
              className: "grid transition-[grid-template-rows] duration-basic ease-enter-snappy",
              style: t,
              children: r,
            })),
            (s[8] = t),
            (s[9] = r),
            (s[10] = n))
          : (n = s[10]),
        n
      )
    }
    function al(e) {
      let t,
        a,
        r,
        n,
        s,
        o = (0, l.c)(8),
        { children: d } = e,
        c = (0, ed.tF)(),
        u = !c,
        p = !c
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = { opacity: 0 }),
            (a = { opacity: 1 }),
            (r = { opacity: 0 }),
            (n = { duration: 0.15, ease: aa.Wu }),
            (o[0] = t),
            (o[1] = a),
            (o[2] = r),
            (o[3] = n))
          : ((t = o[0]), (a = o[1]), (r = o[2]), (n = o[3])),
        o[4] !== d || o[5] !== u || o[6] !== p
          ? ((s = (0, i.jsx)(at.P.div, {
              className: "pt-4 pb-8",
              "aria-hidden": u,
              inert: p,
              initial: t,
              animate: a,
              exit: r,
              transition: n,
              children: d,
            })),
            (o[4] = d),
            (o[5] = u),
            (o[6] = p),
            (o[7] = s))
          : (s = o[7]),
        s
      )
    }
    function ar(e) {
      let t,
        a,
        r,
        n,
        s,
        d = (0, l.c)(31),
        {
          trackHomeClick: c,
          navigation: u,
          pathname: p,
          isCurrent: g,
          renderContentItem: h,
          hiddenPinnedPageIds$: m,
          showPinnedCards: f,
          pinnedSites: v,
          sitePinsPending: y,
          sitePinsError: b,
          sitePinsHaveNextPage: x,
          sitePagination: _,
        } = e,
        w = void 0 !== c && c,
        S = void 0 === f || f,
        C = void 0 !== b && b,
        I = (0, o.Ul)(tK.jm),
        j = (0, o.Ul)(en.Wz),
        A = (0, o.Ul)(en.aQ),
        P = (0, o.Ul)(S ? tz.V : null),
        E = (0, o.Ul)(S ? m : null)
      d[0] !== P || d[1] !== E
        ? ((t = null == P || null == E ? P : { ...P, pages: P.pages.filter((e) => !E.has(e.page_id)) }),
          (d[0] = P),
          (d[1] = E),
          (d[2] = t))
        : (t = d[2])
      let k = t,
        T = (0, o.Ul)(eg.vy),
        M = (0, tQ.I)(),
        O = T && !M
      d[3] !== w ? ((a = w && (0, i.jsx)(D.k, { milestone: "visible" })), (d[3] = w), (d[4] = a)) : (a = d[4])
      let N = a,
        L = (v?.length ?? 0) > 0 || (void 0 !== y && y) || C || (void 0 !== x && x),
        U = null
      if (j) {
        let e
        ;(d[5] !== g || d[6] !== u || d[7] !== A || d[8] !== N
          ? ((e = (0, i.jsx)(
              t5,
              { visibleContentMarker: N, suggestions: A, navigation: u, isCurrent: g },
              "getting-started",
            )),
            (d[5] = g),
            (d[6] = u),
            (d[7] = A),
            (d[8] = N),
            (d[9] = e))
          : (e = d[9]),
          (U = e))
      } else if (null != k && (k.pages.length > 0 || k.pending || k.failed.length > 0 || L)) {
        let e
        ;(d[10] !== O || d[11] !== g || d[12] !== v || d[13] !== k || d[14] !== h || d[15] !== _
          ? ((e = (0, i.jsx)(
              t9.N,
              { pins: k, sites: v, sitePagination: _, animate: O, isCurrent: g, renderContentItem: h },
              "pinned",
            )),
            (d[10] = O),
            (d[11] = g),
            (d[12] = v),
            (d[13] = k),
            (d[14] = h),
            (d[15] = _),
            (d[16] = e))
          : (e = d[16]),
          (U = e))
      }
      let R = !j && null != U && (!!k?.pages.length || !!v?.length) && N
      d[17] !== g || d[18] !== j || d[19] !== p || d[20] !== k
        ? ((r = !j && null != k && g?.() !== !1 && (0, i.jsx)(an, { pins: k, pathname: p })),
          (d[17] = g),
          (d[18] = j),
          (d[19] = p),
          (d[20] = k),
          (d[21] = r))
        : (r = d[21])
      let F = I?.key
      d[22] !== O || d[23] !== U || d[24] !== F
        ? ((n = (0, i.jsx)(ai, { animate: O, children: U }, F)), (d[22] = O), (d[23] = U), (d[24] = F), (d[25] = n))
        : (n = d[25])
      let G = j && C ? _ : null
      return (
        d[26] !== n || d[27] !== G || d[28] !== R || d[29] !== r
          ? ((s = (0, i.jsxs)(i.Fragment, { children: [R, r, n, G] })),
            (d[26] = n),
            (d[27] = G),
            (d[28] = R),
            (d[29] = r),
            (d[30] = s))
          : (s = d[30]),
        s
      )
    }
    function an(e) {
      let t,
        a = (0, l.c)(4),
        { pins: r, pathname: n } = e,
        { isPending: s, isFetching: d, isError: c } = (0, o.Ul)(B.IO),
        u = !s && !d && !r.pending,
        p = !d && (c || r.failed.length > 0)
      return (
        a[0] !== n || a[1] !== u || a[2] !== p
          ? ((t = (0, i.jsx)(O.N, { pathname: n, section: "pinned", ready: u, failed: p })),
            (a[0] = n),
            (a[1] = u),
            (a[2] = p),
            (a[3] = t))
          : (t = a[3]),
        t
      )
    }
    function as(e) {
      let t,
        a,
        T,
        N,
        L,
        U,
        H,
        $,
        V,
        Q,
        W,
        Z,
        Y,
        q,
        K,
        J,
        X,
        ee,
        et,
        ea,
        ei,
        er,
        es,
        eo,
        ed,
        ec,
        eu,
        ep,
        eg,
        eh,
        em = (0, l.c)(246),
        {
          collectionHref: ef,
          trackHomeClick: ev,
          collectionRows: ey,
          structuredGridEnabled: eb,
          onOpenItem: ex,
          onOpenProfile: e_,
          searchFileActions: ew,
          navigation: eC,
          pathname: eI,
          isCurrent: ej,
        } = e,
        eA = void 0 !== ev && ev,
        eE = void 0 !== ey && ey,
        ek = void 0 !== eb && eb,
        eT = (0, o.gh)(_.Qy),
        eM = (0, o.gh)(_.oD),
        eO = eA ? eT.get(F.a)?.startRender() : void 0,
        eN = (0, o.Ul)((!!ek || !!eE) && w.s),
        eL = ek && eN,
        eU = eE && eN,
        eR = (0, u.A)(),
        { items: eF, pending: eD, fetching: eG, failedPageIds: eB } = (0, o.Ul)(tE.Uk),
        {
          data: ez,
          dataUpdatedAt: eH,
          hasNextPage: e$,
          isError: eV,
          isPending: eQ,
          isFetching: eW,
          isPlaceholderData: eZ,
        } = (0, o.Ul)(_.i3),
        eY = (0, o.Ul)(t$.a),
        eq = (0, o.Ul)(_.sp),
        eK = (0, o.Ul)(eP.i)
      ;(em[0] !== eK || em[1] !== eT
        ? ((t = () => (eK ? (0, tE.Vx)(eT) : void 0)),
          (a = [eK, eT]),
          (em[0] = eK),
          (em[1] = eT),
          (em[2] = t),
          (em[3] = a))
        : ((t = em[2]), (a = em[3])),
        (0, c.useEffect)(t, a))
      let eJ = (0, o.Ul)(tE.o9),
        eX = (0, o.Ul)(tE.zl),
        e1 = (0, o.Ul)(_.oW),
        e0 = (0, o.Ul)(_.rk),
        e2 = (0, o.Ul)(_.YH),
        { visibleItems: e3, pageTree: e5, reserveDisclosureSpace: e4 } = (0, o.Ul)(tE.iF),
        { accountId: e7, userId: e8 } = (0, h.As)(),
        { getExperiment: e6, isLoading: e9 } = (0, E.cn)(),
        te = "supplemental" === (0, o.Ul)(tH.a_),
        tt = "pinned" === eT.value.slidesCollection,
        ta = (0, E.Zj)("1939400492")
      em[4] !== ej ? ((T = ej?.()), (em[4] = ej), (em[5] = T)) : (T = em[5])
      let ti = !1 !== T,
        tl =
          null != e7 && null != e8 && e7 === eM.value.accountId && (null == eM.value.userId || e8 === eM.value.userId),
        tr =
          ti &&
          tl &&
          "library:collection:shared-with-me" === eT.value.directoryId &&
          !eT.value.search &&
          0 === eT.value.categories.length &&
          0 === eT.value.sources.length &&
          !eT.value.deleted
      em[6] !== e6 || em[7] !== e9 || em[8] !== tr
        ? ((N = tr && !e9 && !0 === e6("1021766746", { disableExposureLog: !1 }).get("show_opened_share_history", !1)),
          (em[6] = e6),
          (em[7] = e9),
          (em[8] = tr),
          (em[9] = N))
        : (N = em[9])
      let ts = N,
        to = ["opened-shared-links", e7, e8],
        td = [...to, ta]
      em[10] !== ta
        ? ((L = async (e) => {
            let { pageParam: t, signal: a } = e,
              i = t || void 0
            for (;;) {
              let e = await m.Request.safeGet("/received-shares", {
                parameters: { query: { limit: 20, cursor: i } },
                signal: a,
              })
              if (null == e.cursor || e.items.some((e) => tO(e, ta))) return e
              i = e.cursor ?? void 0
            }
          }),
          (em[10] = ta),
          (em[11] = L))
        : (L = em[11])
      let {
          data: tc,
          dataUpdatedAt: tu,
          isError: tp,
          isFetchNextPageError: tg,
          isLoading: th,
          isFetching: tm,
          hasNextPage: tf,
          isFetchingNextPage: tv,
          fetchNextPage: ty,
          refetch: tb,
        } = (0, s.q)({
          queryKey: td,
          subscribed: ts,
          enabled: ts && null != e7 && null != e8,
          initialPageParam: "",
          queryFn: L,
          getNextPageParam: ap,
          staleTime: 15e3,
          refetchOnMount: "always",
          refetchOnWindowFocus: !0,
        }),
        tw = eT.value.includePages && "suggested" === eT.value.tab,
        tS = tw && !eT.value.search && 0 === eT.value.categories.length && 0 === eT.value.sources.length,
        tC = !0 === (0, o._U)(eE && tS && "list" === e2 && null == e1 && null == eJ ? k.JW : null, "3319560513"),
        tI = (0, o.Ul)(M.TV),
        tj = tS && null == eT.value.directoryId && null == eq.allowlistIds,
        tA = (0, E.Zj)(!!tj && "2043939837"),
        tP = eT.value.search.trim().toLowerCase(),
        tk = (0, o.Ul)(tt ? B.IO : null),
        tT = Array.from(tP)
      em[12] !== tT ? ((U = tT.slice(0, 200)), (em[12] = tT), (em[13] = U)) : (U = em[13])
      let tM = U.join("")
      em[14] !== e7 || em[15] !== tM || em[16] !== e8
        ? ((H = { accountId: e7, userId: e8, query: tM }), (em[14] = e7), (em[15] = tM), (em[16] = e8), (em[17] = H))
        : (H = em[17])
      let tN = (0, o._U)(te ? g.$B : null, H),
        tU = tN?.data,
        tR = tt ? tk : tN,
        tD = (0, o.Ul)(tE.Dw)
      tP ||
        0 !== eT.value.sources.length ||
        null != eq.allowlistIds ||
        ("all" === eT.value.slidesCollection ? ($ = "slides") : "all" === eT.value.pageCollection && ($ = "pages"))
      let tz = (0, o._U)(en.wE, $)
      if (
        em[18] !== eq ||
        em[19] !== e0 ||
        em[20] !== tU ||
        em[21] !== eY ||
        em[22] !== eT.value.basePath ||
        em[23] !== eT.value.deleted ||
        em[24] !== eT.value.directoryId ||
        em[25] !== eT.value.search ||
        em[26] !== eT.value.tab ||
        em[27] !== tS ||
        em[28] !== te ||
        em[29] !== e1 ||
        em[30] !== e3
      ) {
        let e
        if (
          ((Q =
            te && null != tU
              ? tU.filter((e) => eq.providers.includes("owner" === e.current_user_role ? "native" : "native_shared"))
              : void 0),
          em[33] !== eY ||
          em[34] !== eT.value.basePath ||
          em[35] !== eT.value.deleted ||
          em[36] !== eT.value.directoryId ||
          em[37] !== eT.value.search ||
          em[38] !== eT.value.tab ||
          em[39] !== e3
            ? ((e =
                "/space" !== eT.value.basePath ||
                "all" !== eT.value.tab ||
                null != eT.value.directoryId ||
                eT.value.deleted
                  ? e3
                  : e3?.filter(
                      (e) =>
                        !("node" in e) ||
                        ("library:collection:shared-with-me" !== e.node.id &&
                          !(
                            !eT.value.search &&
                            (0, x.kS)(e) &&
                            eY?.some((t) => {
                              let { provider: a } = t
                              return (0, x.sm)(e) === a
                            })
                          )),
                    )),
              (em[33] = eY),
              (em[34] = eT.value.basePath),
              (em[35] = eT.value.deleted),
              (em[36] = eT.value.directoryId),
              (em[37] = eT.value.search),
              (em[38] = eT.value.tab),
              (em[39] = e3),
              (em[40] = e))
            : (e = em[40]),
          (V = e),
          tS && null != Q)
        ) {
          let e,
            t = new Set(Q.map(au))
          ;(em[41] !== t || em[42] !== V
            ? ((e = V?.filter((e) => {
                let a = (0, tH.vN)(e)
                return null == a || !t.has(a)
              })),
              (em[41] = t),
              (em[42] = V),
              (em[43] = e))
            : (e = em[43]),
            (V = e))
        } else if (te && !tS && null != tU) {
          let e
          ;(em[44] !== eq || em[45] !== e0 || em[46] !== tU || em[47] !== V || em[48] !== e1
            ? ((e = (0, tH.sL)(V, tU, eq, e1, e0)),
              (em[44] = eq),
              (em[45] = e0),
              (em[46] = tU),
              (em[47] = V),
              (em[48] = e1),
              (em[49] = e))
            : (e = em[49]),
            (V = e))
        }
        ;((em[18] = eq),
          (em[19] = e0),
          (em[20] = tU),
          (em[21] = eY),
          (em[22] = eT.value.basePath),
          (em[23] = eT.value.deleted),
          (em[24] = eT.value.directoryId),
          (em[25] = eT.value.search),
          (em[26] = eT.value.tab),
          (em[27] = tS),
          (em[28] = te),
          (em[29] = e1),
          (em[30] = e3),
          (em[31] = V),
          (em[32] = Q))
      } else ((V = em[31]), (Q = em[32]))
      let tV = (0, o.Ul)(V?.length || (tS && !tI) ? z.spacesQuery$ : null)?.data
      em[50] !== V ? ((W = V?.some(ac)), (em[50] = V), (em[51] = W)) : (W = em[51])
      let tQ = !!W,
        { exportToGoogleDrive: tW, connectDialog: tZ } = (0, G.i)(tQ),
        tY = (0, c.useRef)(void 0),
        tq = ts ? (tc?.pages.flatMap((e) => e.items.filter((e) => tO(e, ta))) ?? []) : [],
        tK =
          tr &&
          !e9 &&
          null != e7 &&
          null != e8 &&
          (null != eF || eV || eB.length > 0) &&
          !eQ &&
          !eW &&
          !eD &&
          !eG &&
          (!ts || (!th && !tm)),
        tJ = ez?.pages.some(ad) ?? !1,
        tX = V?.length ?? 0,
        t1 = tq.length,
        t0 = JSON.stringify([e7, e8, eH, tu, tX, t1, tJ, eV, eB.length, tp, ts])
      ;(em[52] !== eB.length ||
      em[53] !== tJ ||
      em[54] !== eV ||
      em[55] !== tr ||
      em[56] !== tp ||
      em[57] !== eT ||
      em[58] !== t0 ||
      em[59] !== tK ||
      em[60] !== ts ||
      em[61] !== e2 ||
      em[62] !== tX ||
      em[63] !== t1
        ? ((Z = () => {
            if (!tr) {
              tY.current = void 0
              return
            }
            if (!tK || tY.current === t0) return
            tY.current = t0
            let e = tX + t1,
              t = eV || eB.length > 0 || tp,
              a = "CHATGPT_FILE_LIBRARY_RESULTS_STATE_EMPTY"
            ;(tJ || (t && e > 0)
              ? (a = "CHATGPT_FILE_LIBRARY_RESULTS_STATE_PARTIAL")
              : t
                ? (a = "CHATGPT_FILE_LIBRARY_RESULTS_STATE_ERROR")
                : e > 0 && (a = "CHATGPT_FILE_LIBRARY_RESULTS_STATE_POPULATED"),
              (0, P.yy)(eT, r.oq, {
                ...eT.get(b.Vu),
                visibleItemCount: (0, n.PZ)(e),
                emptyReason: 0 !== e || t || tJ ? void 0 : "CHATGPT_FILE_LIBRARY_EMPTY_REASON_EMPTY_FOLDER",
                provider: (0, A.Pw)(eT.value.directoryId),
                folderKind: "CHATGPT_FILE_LIBRARY_FOLDER_KIND_SHARED_WITH_ME",
                openedShareItemCount: ts ? (0, n.PZ)(t1) : void 0,
                layout: "grid" === e2 ? "CHATGPT_FILE_LIBRARY_LAYOUT_GRID" : "CHATGPT_FILE_LIBRARY_LAYOUT_LIST",
                resultsState: a,
              }))
          }),
          (Y = [eB.length, tJ, eV, tp, tr, eT, t0, tK, ts, e2, tX, t1]),
          (em[52] = eB.length),
          (em[53] = tJ),
          (em[54] = eV),
          (em[55] = tr),
          (em[56] = tp),
          (em[57] = eT),
          (em[58] = t0),
          (em[59] = tK),
          (em[60] = ts),
          (em[61] = e2),
          (em[62] = tX),
          (em[63] = t1),
          (em[64] = Z),
          (em[65] = Y))
        : ((Z = em[64]), (Y = em[65])),
        (0, c.useEffect)(Z, Y))
      let t2 = tq.map((e) => {
        let t
        return {
          id: `${"posted_at" in e ? "post" : "conversation"}:${e.id}`,
          sortMetadata:
            ((t = e.last_opened_at ?? e.first_opened_at),
            {
              name: tL(e, eR),
              date: null == t ? void 0 : Date.parse(t),
              size: void 0,
              isDirectory: !1,
              isNavigationRoot: !1,
            }),
          render: (t, a) =>
            (0, i.jsx)(tF, {
              layout: eU ? "stacked" : "columns",
              structuredGridEnabled: eL,
              item: e,
              viewMode: t,
              reserveDisclosureSpace: e4,
              position: a,
              onDelete: async () => {
                let t = "posted_at" in e ? "post" : "conversation"
                await m.Request.safeDelete("/received-shares/{share_kind}/{share_id}", {
                  parameters: { path: { share_kind: t, share_id: e.id } },
                })
                let a = { queryKey: to }
                ;(await eT.queryClient.cancelQueries(a),
                  eT.queryClient.setQueriesData(a, (a) =>
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
      em[66] !== ti ||
      em[67] !== ez ||
      em[68] !== eB.length ||
      em[69] !== eG ||
      em[70] !== eV ||
      em[71] !== eW ||
      em[72] !== eQ ||
      em[73] !== eF ||
      em[74] !== eI ||
      em[75] !== eD ||
      em[76] !== eX ||
      em[77] !== eT.value.pageCollection ||
      em[78] !== eT.value.search ||
      em[79] !== tS
        ? ((q =
            ti &&
            !eT.value.search &&
            (tS || null != eT.value.pageCollection) &&
            (0, i.jsx)(O.N, {
              pathname: eI,
              section: tS ? "recents" : "pages",
              ready: !eQ && !eW && !eD && !eG && null != eF,
              failed: !eW && !eG && (eV || eX || eB.length > 0 || ez?.pages.some(ao) === !0),
            })),
          (em[66] = ti),
          (em[67] = ez),
          (em[68] = eB.length),
          (em[69] = eG),
          (em[70] = eV),
          (em[71] = eW),
          (em[72] = eQ),
          (em[73] = eF),
          (em[74] = eI),
          (em[75] = eD),
          (em[76] = eX),
          (em[77] = eT.value.pageCollection),
          (em[78] = eT.value.search),
          (em[79] = tS),
          (em[80] = q))
        : (q = em[80])
      let t3 = !eD && !eG && null != eF && ti && (!ts || !th),
        t5 = ti && (eV || eB.length > 0 || (ts && tp))
      ;(em[81] !== ti || em[82] !== eK || em[83] !== t3 || em[84] !== t5
        ? ((K = (0, i.jsx)(O.B, { active: ti, homeRanking: eK, ready: t3, failed: t5 })),
          (em[81] = ti),
          (em[82] = eK),
          (em[83] = t3),
          (em[84] = t5),
          (em[85] = K))
        : (K = em[85]),
        em[86] !== q || em[87] !== K
          ? ((J = (0, i.jsxs)(i.Fragment, { children: [q, K] })), (em[86] = q), (em[87] = K), (em[88] = J))
          : (J = em[88]))
      let t4 = J
      em[89] !== e$ ||
      em[90] !== ef ||
      em[91] !== ti ||
      em[92] !== ez ||
      em[93] !== eB.length ||
      em[94] !== eG ||
      em[95] !== tJ ||
      em[96] !== ej ||
      em[97] !== tl ||
      em[98] !== eV ||
      em[99] !== eW ||
      em[100] !== eQ ||
      em[101] !== eZ ||
      em[102] !== e9 ||
      em[103] !== eF ||
      em[104] !== tr ||
      em[105] !== tc ||
      em[106] !== tp ||
      em[107] !== tm ||
      em[108] !== tf ||
      em[109] !== eD ||
      em[110] !== tR?.isError ||
      em[111] !== tR?.isFetching ||
      em[112] !== tR?.isPending ||
      em[113] !== eX ||
      em[114] !== eJ?.hasNextPage ||
      em[115] !== eJ?.isFetching ||
      em[116] !== ts ||
      em[117] !== tN?.hasNextPage
        ? ((X = (e) => {
            let t = e
            if (null == ef || !ti || !tl) return null
            if ("populated" !== e) {
              let a = tr && (e9 || (ts && (tm || (null == tc && !tp))))
              if (
                eD ||
                eG ||
                eW ||
                eJ?.isFetching ||
                (!eV && (eJ?.hasNextPage ?? e$)) ||
                a ||
                (ts && !tp && tf) ||
                tR?.isFetching
              )
                return null
              if ("empty" === e) {
                if (eQ || null == ez || null == eF || eZ || tR?.isPending || tN?.hasNextPage) return null
                ;(tJ || eV || eX || eB.length > 0 || tR?.isError || (ts && tp)) && (t = "error")
              }
            }
            return (0, i.jsx)(R, { href: ef, state: t, isCurrent: ej })
          }),
          (em[89] = e$),
          (em[90] = ef),
          (em[91] = ti),
          (em[92] = ez),
          (em[93] = eB.length),
          (em[94] = eG),
          (em[95] = tJ),
          (em[96] = ej),
          (em[97] = tl),
          (em[98] = eV),
          (em[99] = eW),
          (em[100] = eQ),
          (em[101] = eZ),
          (em[102] = e9),
          (em[103] = eF),
          (em[104] = tr),
          (em[105] = tc),
          (em[106] = tp),
          (em[107] = tm),
          (em[108] = tf),
          (em[109] = eD),
          (em[110] = tR?.isError),
          (em[111] = tR?.isFetching),
          (em[112] = tR?.isPending),
          (em[113] = eX),
          (em[114] = eJ?.hasNextPage),
          (em[115] = eJ?.isFetching),
          (em[116] = ts),
          (em[117] = tN?.hasNextPage),
          (em[118] = X))
        : (X = em[118])
      let t7 = X
      em[119] !== t7 || em[120] !== tX || em[121] !== t1
        ? ((ee = 0 === tX && 0 === t1 ? t7("error") : null),
          (em[119] = t7),
          (em[120] = tX),
          (em[121] = t1),
          (em[122] = ee))
        : (ee = em[122])
      let t8 = ee
      em[123] !== eA
        ? ((et = eA && (0, i.jsx)(D.k, { milestone: "visible" })), (em[123] = eA), (em[124] = et))
        : (et = em[124])
      let t6 = et
      if (tA) ea = t6
      else if (ts && tp) ea = null
      else if (te && (tR?.isPending === !0 || tN?.hasNextPage || tR?.isError === !0 || (tS && (Q?.length ?? 0) > 0)))
        ea = null
      else if (
        ("/space" === eT.value.basePath || "/space/files" === eT.value.basePath) &&
        (eT.value.includePages || "images" === eT.value.tab || eT.value.deleted || null != eT.value.directoryId) &&
        !eT.value.search &&
        0 === eT.value.categories.length &&
        0 === eT.value.sources.length &&
        !eT.value.directoryId?.startsWith("external-") &&
        !eT.value.directoryId?.startsWith("library:") &&
        "favorites" !== eT.value.tab &&
        "recent" !== eT.value.tab
      ) {
        let e, t
        ;(em[125] !== t7 ? ((e = t7("empty")), (em[125] = t7), (em[126] = e)) : (e = em[126]),
          em[127] !== e || em[128] !== eA
            ? ((t = (0, i.jsx)(ah, { trackHomeClick: eA, emptyPaint: e })),
              (em[127] = e),
              (em[128] = eA),
              (em[129] = t))
            : (t = em[129]),
          (ea = t))
      }
      if ((te || tt) && tR?.isError === !0) {
        let e, t, a, l, r
        ;(em[130] !== tt
          ? ((e = tt
              ? (0, i.jsx)(p.A, {
                  id: "space.slides.pins.loadError",
                  defaultMessage: "Unable to load pinned Slides",
                  description: "Error state when the user's pinned native presentations could not be loaded",
                })
              : (0, i.jsx)(p.A, {
                  id: "appgenPage.error.title",
                  defaultMessage: "Unable to load sites",
                  description: "Error state title for the Sites page",
                })),
            (em[130] = tt),
            (em[131] = e))
          : (e = em[131]),
          em[132] !== tR || em[133] !== tN
            ? ((t = () => {
                tN?.isFetchNextPageError ? tN.fetchNextPage({ cancelRefetch: !1 }) : tR.refetch()
              }),
              (em[132] = tR),
              (em[133] = tN),
              (em[134] = t))
            : (t = em[134]),
          em[135] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, i.jsx)(p.A, {
                id: "libraryNext.results.retry",
                defaultMessage: "Try again",
                description: "Retry fetching Library results",
              })),
              (em[135] = a))
            : (a = em[135]),
          em[136] !== tR.isFetching || em[137] !== t
            ? ((l = (0, i.jsx)(f.$, { color: "ghost", disabled: tR.isFetching, onClick: t, children: a })),
              (em[136] = tR.isFetching),
              (em[137] = t),
              (em[138] = l))
            : (l = em[138]),
          em[139] !== t8 || em[140] !== e || em[141] !== l
            ? ((r = (0, i.jsxs)("div", {
                className: "flex items-center gap-3 pb-4 text-secondary",
                role: "status",
                children: [t8, e, l],
              })),
              (em[139] = t8),
              (em[140] = e),
              (em[141] = l),
              (em[142] = r))
            : (r = em[142]),
          (ei = r))
      } else if (te && null != tN) {
        let e,
          t,
          a = tN.hasNextPage && !tN.isFetching
        ;(em[143] !== tN
          ? ((e = () => void tN.fetchNextPage({ cancelRefetch: !1 })), (em[143] = tN), (em[144] = e))
          : (e = em[144]),
          em[145] !== tN.isFetchingNextPage || em[146] !== a || em[147] !== e
            ? ((t = (0, i.jsx)(v.D, { hasNextPage: a, isFetchingNextPage: tN.isFetchingNextPage, onLoadNextPage: e })),
              (em[145] = tN.isFetchingNextPage),
              (em[146] = a),
              (em[147] = e),
              (em[148] = t))
            : (t = em[148]),
          (ei = t))
      }
      em[149] !== eL ||
      em[150] !== tW ||
      em[151] !== ej ||
      em[152] !== eC ||
      em[153] !== e_ ||
      em[154] !== e5 ||
      em[155] !== eU ||
      em[156] !== e4 ||
      em[157] !== eT ||
      em[158] !== ew ||
      em[159] !== tV
        ? ((er = (e) => (t, a, l, r) =>
            (0, i.jsx)(t_, {
              spaces: tV,
              item: t,
              viewMode: a,
              source: e ? void 0 : l,
              browseLocation: eT.getOwnValue(_.Qy),
              navigation: eC,
              onOpenProfile: e_,
              isCurrent: ej,
              showRowThumbnails: eU,
              pageTree: e ? void 0 : e5,
              reserveDisclosureSpace: e ? void 0 : e4,
              pinnedPresentation: e,
              structuredGridEnabled: !e && eL,
              reorderAction: r,
              exportToGoogleDrive: e ? void 0 : tW,
              searchFileActions: ew,
              observeSearchResult: (e) => (0, j.pF)(eT, t, e),
              onOpenSearchResult: () => (0, j.PP)(eT, t),
              onOpenSite:
                "siteProject" in t
                  ? (e, a) => eT.get(_.Lo) && (eT.get(I.u$)?.(t.siteProject, e, () => (0, j.PP)(eT, t), a) ?? !1)
                  : void 0,
            })),
          (em[149] = eL),
          (em[150] = tW),
          (em[151] = ej),
          (em[152] = eC),
          (em[153] = e_),
          (em[154] = e5),
          (em[155] = eU),
          (em[156] = e4),
          (em[157] = eT),
          (em[158] = ew),
          (em[159] = tV),
          (em[160] = er))
        : (er = em[160])
      let t9 = er
      em[161] !== eJ || em[162] !== eT
        ? ((es =
            null == eJ
              ? void 0
              : { hasNextPage: eJ.hasNextPage, isFetching: eJ.isFetching, fetchNextPage: () => (0, tE.mS)(eT) }),
          (em[161] = eJ),
          (em[162] = eT),
          (em[163] = es))
        : (es = em[163])
      let ae = eU ? "stacked" : "columns",
        at = ea,
        aa = V,
        ai = eD || (!eF?.length && (eG || (te && tR?.isPending === !0) || (ts && th)))
      ;(em[164] !== ty ||
      em[165] !== tp ||
      em[166] !== tv ||
      em[167] !== tf ||
      em[168] !== ei ||
      em[169] !== tS ||
      em[170] !== ts
        ? ((eo =
            tS || (null == ei && (!ts || !tf || tp))
              ? void 0
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    ei,
                    ts
                      ? (0, i.jsx)(tB, {
                          hasNextPage: tf && !tp,
                          isFetchingNextPage: tv,
                          onLoadNextPage: () => {
                            ty({ cancelRefetch: !1 })
                          },
                        })
                      : null,
                  ],
                })),
          (em[164] = ty),
          (em[165] = tp),
          (em[166] = tv),
          (em[167] = tf),
          (em[168] = ei),
          (em[169] = tS),
          (em[170] = ts),
          (em[171] = eo))
        : (eo = em[171]),
        em[172] !== t9 ? ((ed = t9(!1)), (em[172] = t9), (em[173] = ed)) : (ed = em[173]),
        em[174] !== eC ||
        em[175] !== e_ ||
        em[176] !== eU ||
        em[177] !== eT.value.deleted ||
        em[178] !== eT.value.pageCollection ||
        em[179] !== eT.value.search ||
        em[180] !== tV ||
        em[181] !== tw ||
        em[182] !== e2
          ? ((ec =
              (eU && "list" === e2) ||
              eT.value.deleted ||
              (tw && !eT.value.search) ||
              (null != eT.value.pageCollection && "shared" !== eT.value.pageCollection)
                ? (e) => (0, i.jsx)(tx, { catalog: tV ?? null, inline: eU, item: e, navigation: eC, onOpenProfile: e_ })
                : void 0),
            (em[174] = eC),
            (em[175] = e_),
            (em[176] = eU),
            (em[177] = eT.value.deleted),
            (em[178] = eT.value.pageCollection),
            (em[179] = eT.value.search),
            (em[180] = tV),
            (em[181] = tw),
            (em[182] = e2),
            (em[183] = ec))
          : (ec = em[183]),
        em[184] !== eq ||
        em[185] !== t8 ||
        em[186] !== eB ||
        em[187] !== ty ||
        em[188] !== eG ||
        em[189] !== tp ||
        em[190] !== tm ||
        em[191] !== tg ||
        em[192] !== eD ||
        em[193] !== eX ||
        em[194] !== tb ||
        em[195] !== tq ||
        em[196] !== tD ||
        em[197] !== eT ||
        em[198] !== ts
          ? ((eu =
              eX || eB.length > 0 || (ts && tp)
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      eX
                        ? (0, i.jsx)(S._, {
                            paint: t8,
                            favorites: "favorites" === eq.tab,
                            folderError: null,
                            onRetry: () => (0, tE.lL)(eT),
                          })
                        : null,
                      eB.length > 0
                        ? (0, i.jsxs)("div", {
                            className: "flex items-center gap-3 pb-4 text-secondary",
                            role: "status",
                            children: [
                              t8,
                              (0, i.jsx)(p.A, {
                                id: "libraryNext.results.incompletePages",
                                defaultMessage: "Some pages could not be loaded",
                                description:
                                  "A mixed Library result remains usable, but some Pages could not be loaded",
                              }),
                              (0, i.jsx)(f.$, {
                                color: "ghost",
                                disabled: eD || eG || tD,
                                onClick: () => {
                                  ;(eT.set(tE.Dw, !0),
                                    (0, d.Ay)(
                                      eB,
                                      (e) => eT.get(z.spacePageAncestryQuery$, e, { enabled: !1 }).refetch(),
                                      { concurrency: 4 },
                                    ).finally(() => {
                                      eT.set(tE.Dw, !1)
                                    }))
                                },
                                children: (0, i.jsx)(p.A, {
                                  id: "libraryNext.results.retry",
                                  defaultMessage: "Try again",
                                  description: "Retry fetching Library results",
                                }),
                              }),
                            ],
                          })
                        : null,
                      ts
                        ? (0, i.jsx)(tG, {
                            paint: t8,
                            error: tp,
                            hasCachedItems: tq.length > 0,
                            isFetching: tm,
                            isNextPageError: tg,
                            onRetry: () => {
                              tg ? ty({ cancelRefetch: !1 }) : tb()
                            },
                          })
                        : null,
                    ],
                  })
                : null),
            (em[184] = eq),
            (em[185] = t8),
            (em[186] = eB),
            (em[187] = ty),
            (em[188] = eG),
            (em[189] = tp),
            (em[190] = tm),
            (em[191] = tg),
            (em[192] = eD),
            (em[193] = eX),
            (em[194] = tb),
            (em[195] = tq),
            (em[196] = tD),
            (em[197] = eT),
            (em[198] = ts),
            (em[199] = eu))
          : (eu = em[199]),
        em[200] !== eL ||
        em[201] !== ea ||
        em[202] !== tC ||
        em[203] !== ex ||
        em[204] !== t7 ||
        em[205] !== e4 ||
        em[206] !== V ||
        em[207] !== t2 ||
        em[208] !== es ||
        em[209] !== ae ||
        em[210] !== ai ||
        em[211] !== eo ||
        em[212] !== ed ||
        em[213] !== ec ||
        em[214] !== eu ||
        em[215] !== t6
          ? ((ep = (0, i.jsx)(C.Y, {
              renderResultPaint: t7,
              populatedContentMarker: t6,
              structuredGridEnabled: eL,
              pagination: es,
              rowLayout: ae,
              emptyState: at,
              reserveDisclosureSpace: e4,
              groupByActivityDate: tC,
              items: aa,
              supplementalItems: t2,
              contentPending: ai,
              additionalPagination: eo,
              onOpenItem: ex,
              renderContentItem: ed,
              renderSource: ec,
              notice: eu,
            })),
            (em[200] = eL),
            (em[201] = ea),
            (em[202] = tC),
            (em[203] = ex),
            (em[204] = t7),
            (em[205] = e4),
            (em[206] = V),
            (em[207] = t2),
            (em[208] = es),
            (em[209] = ae),
            (em[210] = ai),
            (em[211] = eo),
            (em[212] = ed),
            (em[213] = ec),
            (em[214] = eu),
            (em[215] = t6),
            (em[216] = ep))
          : (ep = em[216]))
      let al = ep,
        an = null
      if (tA) {
        let e,
          t = "list" === e2
        ;(em[217] !== t ? ((e = (0, i.jsx)(el, { collapsible: t })), (em[217] = t), (em[218] = e)) : (e = em[218]),
          (an = e))
      } else if (tS) {
        let e,
          t,
          a = !tI
        em[219] !== t9 ? ((e = t9(!0)), (em[219] = t9), (em[220] = e)) : (e = em[220])
        let l = te && tR?.isPending === !0,
          r = te && tR?.isError === !0,
          n = te && tN?.hasNextPage === !0
        ;(em[221] !== ej ||
        em[222] !== eC ||
        em[223] !== eI ||
        em[224] !== ei ||
        em[225] !== a ||
        em[226] !== e ||
        em[227] !== l ||
        em[228] !== r ||
        em[229] !== n ||
        em[230] !== eA ||
        em[231] !== Q
          ? ((t = (0, i.jsx)(ar, {
              trackHomeClick: eA,
              hiddenPinnedPageIds$: tE.fI,
              showPinnedCards: a,
              pathname: eI,
              navigation: eC,
              isCurrent: ej,
              renderContentItem: e,
              pinnedSites: Q,
              sitePinsPending: l,
              sitePinsError: r,
              sitePinsHaveNextPage: n,
              sitePagination: ei,
            })),
            (em[221] = ej),
            (em[222] = eC),
            (em[223] = eI),
            (em[224] = ei),
            (em[225] = a),
            (em[226] = e),
            (em[227] = l),
            (em[228] = r),
            (em[229] = n),
            (em[230] = eA),
            (em[231] = Q),
            (em[232] = t))
          : (t = em[232]),
          (an = t))
      } else if (tz) {
        let e
        ;(em[233] !== $
          ? ((e = (0, i.jsx)("div", { className: "pt-4 pb-8 empty:hidden", children: (0, i.jsx)(eS, { filter: $ }) })),
            (em[233] = $),
            (em[234] = e))
          : (e = em[234]),
          (an = e))
      }
      em[235] !== tZ || em[236] !== an || em[237] !== t4 || em[238] !== al
        ? ((eg = (0, i.jsxs)(i.Fragment, { children: [an, t4, al, tZ] })),
          (em[235] = tZ),
          (em[236] = an),
          (em[237] = t4),
          (em[238] = al),
          (em[239] = eg))
        : (eg = em[239])
      let as = eg
      if (tw) {
        let e,
          t = tS ? "flex min-h-0 flex-1 flex-col" : "contents"
        ;(em[240] !== as || em[241] !== t
          ? ((e = (0, i.jsx)("div", { className: t, children: as })), (em[240] = as), (em[241] = t), (em[242] = e))
          : (e = em[242]),
          (as = e))
      }
      return (
        eO?.(),
        em[243] !== as || em[244] !== eU
          ? ((eh = eU ? (0, i.jsx)(y.eb, { className: tn.A.collectionList, density: "preview", children: as }) : as),
            (em[243] = as),
            (em[244] = eU),
            (em[245] = eh))
          : (eh = em[245]),
        eh
      )
    }
    function ao(e) {
      return !0 === e.partialResults
    }
    function ad(e) {
      return e.partialResults
    }
    function ac(e) {
      return (
        ("page" in e && "page" === (0, T.th)(e.page)) ||
        ("libraryPage" in e && "page" === (0, T.th)(e.libraryPage.node.page_metadata ?? {}))
      )
    }
    function au(e) {
      return e.id
    }
    function ap(e) {
      return e.cursor ?? void 0
    }
    let ag = (0, o.un)(_.Qy, ({ get: e, scope: t }) => {
      if (!t.value.includePages || "suggested" !== t.value.tab) return !1
      if (e(en.Wz)) return !0
      if (e(M.TV)) return !1
      let a = e(tz.V)
      return a.pages.length > 0 || a.pending || a.failed.length > 0
    })
    function ah(e) {
      let t,
        a,
        r,
        n = (0, l.c)(13),
        { trackHomeClick: s, emptyPaint: d } = e,
        c = (0, o.gh)(_.Qy),
        u = (0, o.Ul)(ag),
        p = (0, o.Ul)(H.Q)
      if (u) return null
      if (c.value.deleted) {
        let e,
          t = p ? "trash" : "trash-files"
        return (
          n[0] !== d || n[1] !== t
            ? ((e = (0, i.jsx)(tV.n, { titleMarker: d, view: t })), (n[0] = d), (n[1] = t), (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      if (null != c.value.directoryId) {
        let e
        return (
          n[3] !== d
            ? ((e = (0, i.jsx)(tV.n, { titleMarker: d, view: "folder" })), (n[3] = d), (n[4] = e))
            : (e = n[4]),
          e
        )
      }
      n[5] !== s ? ((t = s && (0, i.jsx)(D.k, { milestone: "visible" })), (n[5] = s), (n[6] = t)) : (t = n[6])
      let g = "images" === c.value.tab ? "images" : "all"
      return (
        n[7] !== d || n[8] !== g
          ? ((a = (0, i.jsx)(tV.n, { titleMarker: d, view: g })), (n[7] = d), (n[8] = g), (n[9] = a))
          : (a = n[9]),
        n[10] !== t || n[11] !== a
          ? ((r = (0, i.jsxs)(i.Fragment, { children: [t, a] })), (n[10] = t), (n[11] = a), (n[12] = r))
          : (r = n[12]),
        r
      )
    }
  },
  fOyY(e, t, a) {
    var i = a("zTeN"),
      l = a("jU86")
    let r = (0, i.vP)(l.oD, new Map())
    a.d(
      t,
      {},
      {
        w: function (e, t, a) {
          let i = e.get(r).get(t) ?? 0,
            l = a.scrollTop,
            n = () => {
              null != i && ((a.scrollTop = i), 1 > Math.abs((l = a.scrollTop) - i) && ((i = null), s.disconnect()))
            },
            s = new ResizeObserver(n)
          ;(s.observe(a), null != a.firstElementChild && s.observe(a.firstElementChild), n())
          let o = () => {
              0 !== a.clientHeight &&
                e.set(r, (e) => {
                  let i = new Map(e)
                  if ((i.delete(t), i.set(t, a.scrollTop), i.size > 50)) {
                    let e = i.keys().next().value
                    null != e && i.delete(e)
                  }
                  return i
                })
            },
            d = () => {
              0 !== a.clientHeight && a.scrollTop !== l && ((i = null), s.disconnect(), (l = a.scrollTop), o())
            },
            c = () => {
              ;((i = null), s.disconnect())
            }
          return (
            a.addEventListener("scroll", d),
            a.addEventListener("wheel", c, { passive: !0 }),
            a.addEventListener("touchstart", c, { passive: !0 }),
            a.addEventListener("keydown", c),
            () => {
              ;(null == i && o(),
                s.disconnect(),
                a.removeEventListener("scroll", d),
                a.removeEventListener("wheel", c),
                a.removeEventListener("touchstart", c),
                a.removeEventListener("keydown", c))
            }
          )
        },
      },
    )
  },
  plQD(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("zTeN"),
      n = a("Wf1j"),
      s = a("oyxz"),
      o = a("BrP7"),
      d = a("jU86")
    a.d(
      t,
      {},
      {
        Y: function () {
          let e,
            t,
            a,
            c,
            u,
            p,
            g = (0, l.c)(11),
            h = (0, r.gh)(d.Qy),
            m = (0, n.A)()
          ;(g[0] !== m
            ? ((e = m.formatMessage({
                id: "space.pages.tabs.label",
                defaultMessage: "Page collections",
                description: "Accessible label for the All, Your items, and Shared with you tabs on the Pages page",
              })),
              (g[0] = m),
              (g[1] = e))
            : (e = g[1]),
            g[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = {
                  key: "all",
                  name: (0, i.jsx)(s.A, {
                    id: "space.pages.tabs.all",
                    defaultMessage: "All",
                    description: "Pages tab showing both owned Pages and Pages shared with the user",
                  }),
                }),
                (g[2] = t))
              : (t = g[2]),
            g[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = {
                  key: "owned",
                  name: (0, i.jsx)(s.A, {
                    id: "space.pages.tabs.owned",
                    defaultMessage: "Your items",
                    description: "Pages tab showing Pages owned by the user",
                  }),
                }),
                (g[3] = a))
              : (a = g[3]),
            g[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = [
                  t,
                  a,
                  {
                    key: "shared",
                    name: (0, i.jsx)(s.A, {
                      id: "space.pages.tabs.shared",
                      defaultMessage: "Shared with you",
                      description: "Pages tab showing Pages explicitly shared with the user",
                    }),
                  },
                ]),
                (g[4] = c))
              : (c = g[4]))
          let f = h.value.pageCollection ?? "all"
          return (
            g[5] !== h
              ? ((u = (e) => (0, d.zl)(h, (0, d.SE)({ ...h.value, pageCollection: e }))), (g[5] = h), (g[6] = u))
              : (u = g[6]),
            g[7] !== e || g[8] !== f || g[9] !== u
              ? ((p = (0, i.jsx)(o.t, {
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: e,
                  tabs: c,
                  selectedKey: f,
                  onSelect: u,
                })),
                (g[7] = e),
                (g[8] = f),
                (g[9] = u),
                (g[10] = p))
              : (p = g[10]),
            p
          )
        },
      },
    )
  },
  HUbZ(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("tFxw"),
      n = a("zTeN"),
      s = a("Wf1j"),
      o = a("oyxz"),
      d = a("BrP7"),
      c = a("cGrE"),
      u = a("TCFx"),
      p = a("jU86")
    a.d(
      t,
      {},
      {
        K: function () {
          let e,
            t,
            a,
            g,
            h,
            m,
            f,
            v,
            y,
            b,
            x,
            _ = (0, l.c)(29),
            w = (0, n.gh)(p.Qy),
            S = (0, s.A)()
          if (_[0] !== w.value.directoryId) {
            let a = null == w.value.directoryId ? null : (0, u.oh)(w.value.directoryId)
            ;((e = "google_drive" === a), (t = (0, r.ZR)(a)), (_[0] = w.value.directoryId), (_[1] = e), (_[2] = t))
          } else ((e = _[1]), (t = _[2]))
          let C = !t
          _[3] !== w.value.directoryId
            ? ((a = (0, u.$n)(w.value.directoryId)), (_[3] = w.value.directoryId), (_[4] = a))
            : (a = _[4])
          let I = a
          _[5] !== w.value.directoryId || _[6] !== I
            ? ((g = I ? w.value.directoryId?.replace(/collection:shared-with-me$/u, "root") : w.value.directoryId),
              (_[5] = w.value.directoryId),
              (_[6] = I),
              (_[7] = g))
            : (g = _[7])
          let j = g,
            A = "all"
          return (
            I ? (A = "shared") : "recent" === w.value.tab && (A = "recent"),
            _[8] !== e || _[9] !== S
              ? ((h = e
                  ? S.formatMessage({
                      id: "space.googleDrive.tabs.label",
                      defaultMessage: "Google Drive views",
                      description: "Accessible label for the Google Drive navigation tabs in Space",
                    })
                  : S.formatMessage({
                      id: "space.provider.tabs.label",
                      defaultMessage: "Provider views",
                      description: "Accessible label for the navigation tabs within an external file provider in Space",
                    })),
                (_[8] = e),
                (_[9] = S),
                (_[10] = h))
              : (h = _[10]),
            _[11] !== e || _[12] !== C
              ? ((m = C
                  ? [
                      {
                        key: "recent",
                        name: e
                          ? (0, i.jsx)(o.A, {
                              id: "space.googleDrive.tabs.recent",
                              defaultMessage: "Recent",
                              description: "Google Drive tab showing files recently opened by the current user",
                            })
                          : (0, i.jsx)(o.A, {
                              id: "space.provider.tabs.recents",
                              defaultMessage: "Recents",
                              description:
                                "External file provider tab showing files recently opened by the current user",
                            }),
                      },
                    ]
                  : []),
                (_[11] = e),
                (_[12] = C),
                (_[13] = m))
              : (m = _[13]),
            _[14] !== e
              ? ((f = {
                  key: "all",
                  name: e
                    ? (0, i.jsx)(o.A, {
                        id: "space.googleDrive.tabs.myDrive",
                        defaultMessage: "My Drive",
                        description: "Google Drive tab showing the user's own folders and files",
                      })
                    : (0, i.jsx)(o.A, {
                        id: "space.provider.tabs.myItems",
                        defaultMessage: "Your items",
                        description:
                          "External file provider tab for browsing connected accounts and their root files and folders",
                      }),
                }),
                (v = e
                  ? [
                      {
                        key: "shared",
                        name: (0, i.jsx)(o.A, {
                          id: "space.googleDrive.tabs.sharedWithMe",
                          defaultMessage: "Shared with me",
                          description: "Google Drive tab showing folders and files shared with the current user",
                        }),
                      },
                    ]
                  : []),
                (_[14] = e),
                (_[15] = f),
                (_[16] = v))
              : ((f = _[15]), (v = _[16])),
            _[17] !== m || _[18] !== f || _[19] !== v
              ? ((y = [...m, f, ...v]), (_[17] = m), (_[18] = f), (_[19] = v), (_[20] = y))
              : (y = _[20]),
            _[21] !== j || _[22] !== w
              ? ((b = (e) => {
                  ;(("recent" === e || "all" === e) && (0, c.np)(w, { category: e }),
                    w.set(p.C6, void 0),
                    (0, p.zl)(
                      w,
                      (0, p.SE)({
                        ...w.value,
                        directoryId:
                          "shared" === e ? (j?.replace(/root$/u, "collection:shared-with-me") ?? null) : (j ?? null),
                        tab: "recent" === e ? "recent" : "all",
                        search: "",
                        categories: [],
                        sources: [],
                      }),
                    ))
                }),
                (_[21] = j),
                (_[22] = w),
                (_[23] = b))
              : (b = _[23]),
            _[24] !== A || _[25] !== h || _[26] !== y || _[27] !== b
              ? ((x = (0, i.jsx)(d.t, {
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: h,
                  selectedKey: A,
                  tabs: y,
                  onSelect: b,
                })),
                (_[24] = A),
                (_[25] = h),
                (_[26] = y),
                (_[27] = b),
                (_[28] = x))
              : (x = _[28]),
            x
          )
        },
      },
    )
  },
  IFrF(e, t, a) {
    var i = a("SZCv"),
      l = a.n(i),
      r = a("zTeN"),
      n = a("jU86"),
      s = a("khOd"),
      o = a("Nwp9")
    let d = [
        { provider: "google_drive", href: a("ioFt").UW },
        { provider: "imanage", href: "/space/d/external-imanage%3Aroot?tab=all" },
        { provider: "box", href: "/space/d/external-box%3Aroot?tab=recent" },
        { provider: "dropbox", href: "/space/d/external-dropbox%3Aroot?tab=recent" },
        { provider: "sharepoint", href: "/space/d/external-sharepoint%3Aroot?tab=all" },
        { provider: "onedrive", href: "/space/d/external-onedrive%3Aroot?tab=all" },
      ],
      c = (0, o.m3)("space-provider-navigation-cache-v1", null),
      u = (0, r.un)(
        n.oD,
        ({ get: e, scope: t }) => {
          if (!e(s.GB)) return
          let a = e(n.c0)
          if ("disabled" === a) return []
          if ("success" !== a) {
            let i = e(c)
            if (i?.accountId === t.value.accountId && i.userId === t.value.userId)
              return d.filter(({ provider: t }) => i.providers.includes(t) && e(n.m_, t))
            if ("pending" === a) return
          }
          return d.filter(({ provider: t }) => e(n.UI, t))
        },
        { isEqual: l() },
      )
    a.d(
      t,
      {},
      {
        a: u,
        j: function (e) {
          return e.watch(({ get: t }) => {
            let { accountId: a, userId: i } = e.value
            if (null == i || "success" !== t(n.c0)) return
            let r = t(u)
            if (null == r) return
            let s = { accountId: a, userId: i, providers: r.map(({ provider: e }) => e) }
            l()(e.get(c), s) || e.set(c, s)
          })
        },
      },
    )
  },
  dLrD(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("zTeN"),
      n = a("HZfM"),
      s = a("SPnB"),
      o = a("Bbed"),
      d = a("nlNF"),
      c = a("OWtl"),
      u = a("ynMj")
    let p = (0, o._)(async () => (await a.e(111855).then(a.bind(a, "cTH9"))).SpaceSiteDetails, {
      fallback: (0, i.jsx)(u.V, {}),
      errorFallback: (0, i.jsx)(u.B, {}),
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
            g,
            h,
            m = (0, l.c)(21),
            { children: f, inlineCollection: v, href: y, onNavigate: b } = e,
            x = void 0 !== v && v,
            _ = (0, r.gh)(c.u),
            w = (0, n.zy)(),
            S = (0, n.Zp)()
          m[0] !== y || m[1] !== x || m[2] !== w.pathname || m[3] !== w.search
            ? ((o = new URL(y ?? w.pathname + w.search, "https://chatgpt.com")),
              (t = null),
              x
                ? (t = o.searchParams.get("site_path"))
                : o.pathname.startsWith("/space/sites/") && "/space/sites/" !== o.pathname && (t = o.pathname.slice(6)),
              (a = null == t ? null : (0, n.B6)("/sites/:projectId/*", t)),
              (m[0] = y),
              (m[1] = x),
              (m[2] = w.pathname),
              (m[3] = w.search),
              (m[4] = t),
              (m[5] = a),
              (m[6] = o))
            : ((t = m[4]), (a = m[5]), (o = m[6]))
          let C = a,
            I = x && null == C ? null : t
          m[7] !== x || m[8] !== w.state || m[9] !== S || m[10] !== b || m[11] !== _ || m[12] !== o
            ? ((u = (e, t) => {
                let a = "/sites/library" === e ? "/sites" : e,
                  i = w.state?.spaceSidebarSiteReturnLocation
                if (
                  !x &&
                  "/sites" === a &&
                  null != i &&
                  w.state?.spaceSidebarAccountId === _.get(s.chatGptAuthenticatedAccountId$)
                )
                  return void (0, d.nQ)(_, S, i)
                let l = new URLSearchParams(o.search)
                ;("sites" === l.get("view") && l.delete("view"),
                  x && ("/sites" === a ? l.delete("site_path") : l.set("site_path", a)))
                let r = `${x ? o.pathname : `/space${a}`}${l.size > 0 ? `?${l}` : ""}`
                null != b ? b(r, t) : S(r, { state: w.state, ...t })
              }),
              (m[7] = x),
              (m[8] = w.state),
              (m[9] = S),
              (m[10] = b),
              (m[11] = _),
              (m[12] = o),
              (m[13] = u))
            : (u = m[13])
          let j = u
          return (
            m[14] !== j || m[15] !== I
              ? ((g = null != I ? (0, i.jsx)(p, { path: I, onNavigate: j }) : null),
                (m[14] = j),
                (m[15] = I),
                (m[16] = g))
              : (g = m[16]),
            m[17] !== f || m[18] !== j || m[19] !== g
              ? ((h = f(j, g)), (m[17] = f), (m[18] = j), (m[19] = g), (m[20] = h))
              : (h = m[20]),
            h
          )
        },
      },
    )
  },
  eM3f(e, t, a) {
    a.a(e, async function (e, i) {
      try {
        var l = a("ABep"),
          r = a("QosV"),
          n = a("SRBo"),
          s = a("on57"),
          o = a("zTeN"),
          d = a("zd8w"),
          c = a("v7qY"),
          u = a("Wf1j"),
          p = a("oyxz"),
          g = a("HZfM"),
          h = a("VEyj"),
          m = a("bJfu"),
          f = a("MeAu"),
          v = a("l5Vd"),
          y = a("p690"),
          b = a("M3lc"),
          x = a("SPnB"),
          _ = a("OWcD"),
          w = a("Bbed"),
          S = a("PkPj"),
          C = a("DiyT"),
          I = a("V080"),
          j = a("uNsz"),
          A = a("cGrE"),
          P = a("TCFx"),
          E = a("jU86"),
          k = a("eMKR"),
          T = a("LcBG"),
          M = a("QufO"),
          O = a("FBu8"),
          N = a("fhVa"),
          L = a("XmDk"),
          U = a("dLIb"),
          R = a("NvSv"),
          F = a("M4Gn"),
          D = a("ORiO"),
          G = a("QoH2"),
          B = a("NCaE"),
          z = a("AoIz"),
          H = a("heYt"),
          $ = a("vGxR"),
          V = a("T6xA"),
          Q = a("elmM"),
          W = a("Rj2I"),
          Z = a("Oj9r"),
          Y = a("V3rO"),
          q = a("khOd"),
          K = a("hZax"),
          J = a("XXJV"),
          X = a("moBM"),
          ee = a("pZMh"),
          et = a("e1xH"),
          ea = a("ynMj"),
          ei = a("lJyx"),
          el = a("f67h"),
          er = a("sSEJ"),
          en = a("reVW"),
          es = a("pyoT"),
          eo = a("Lowz"),
          ed = a("EWUC"),
          ec = a("FiJQ"),
          eu = a("D14d"),
          ep = a("iC9N"),
          eg = a("Kw4a"),
          eh = a("XPum"),
          em = a("R0Z4"),
          ef = a("LwtL"),
          ev = a("UP00"),
          ey = a("fOyY"),
          eb = a("plQD"),
          ex = a("HUbZ"),
          e_ = a("dLrD"),
          ew = a("CJ4l"),
          eS = a("Waus"),
          eC = a("ReXg"),
          eI = e([z, L, D, N])
        ;[z, L, D, N] = eI.then ? (await eI)() : eI
        let eO = (0, w._)(n.Af),
          eN = (0, w._)(
            async () =>
              (await Promise.all([a.e(784669), a.e(728748), a.e(428274)]).then(a.bind(a, "Strz"))).SpaceSitesPage,
            { suspendToParent: !0, errorFallback: (0, l.jsx)(ea.B, {}) },
          ),
          eL = (0, w._)(async () => (await Promise.resolve().then(a.bind(a, "CLXx"))).SlateSpaceCreateMenu),
          eU = (0, w._)(async () => (await a.e(904640).then(a.bind(a, "eDkJ"))).AssignedTaskList)
        function ej(e) {
          let t,
            a,
            i,
            l = (0, r.c)(7),
            { url: n } = e,
            s = (0, o.gh)(E.vn),
            { state: c } = (0, g.zy)()
          if (l[0] !== n) {
            t = new URL(v.Ve, n)
            let e = n.searchParams.get("view")
            for (let [a, i] of (("owned" === e || "shared" === e) && t.searchParams.set("tab", "all"),
            "shared" === e && (t.pathname = `/space/d/${encodeURIComponent("library:collection:shared-with-me")}`),
            n.searchParams))
              ["view", "artifact", "tab", "site_path", "deleted"].includes(a) || t.searchParams.append(a, i)
            ;((l[0] = n), (l[1] = t))
          } else t = l[1]
          let u = t.pathname + t.search + n.hash
          return (
            l[2] !== u || l[3] !== s || l[4] !== c
              ? ((a = () => {
                  ;(0, E.zl)(s, u, {
                    replace: !0,
                    state: s.value.embedded ? { libraryFolderReturnLocations: s.get(E.xo) } : c,
                  })
                }),
                (i = [s, u, c]),
                (l[2] = u),
                (l[3] = s),
                (l[4] = c),
                (l[5] = a),
                (l[6] = i))
              : ((a = l[5]), (i = l[6])),
            (0, d.useEffect)(a, i),
            null
          )
        }
        function eA(e) {
          let t,
            a,
            i,
            n,
            s,
            c = (0, r.c)(16),
            {
              routeScope: u,
              embedded: p,
              isActive: m,
              isVisible: f,
              navigation: v,
              onOpenItem: y,
              onNavigate: x,
              tabId: w,
            } = e,
            S = void 0 !== p && p,
            C = (0, o.gh)(E.vn),
            I = (0, o.Ul)(eh.i)
          ;((0, o._U)(m && f && I ? _.f : null, "space-home"),
            c[0] !== m || c[1] !== f || c[2] !== C
              ? ((t = () => {
                  if (m && f) return (0, em.s)(C)
                  f || (0, em._)(C)
                }),
                (a = [C, m, f]),
                (c[0] = m),
                (c[1] = f),
                (c[2] = C),
                (c[3] = t),
                (c[4] = a))
              : ((t = c[3]), (a = c[4])),
            (0, d.useEffect)(t, a))
          let j = (0, K.Zj)("2881922323"),
            A = (0, o.Ul)(et.CY)
          ;(c[5] !== x || c[6] !== C
            ? ((i = () => {
                if (null != x)
                  return (
                    C.set(E.xZ, () => x),
                    () => {
                      C.get(E.xZ) === x && C.set(E.xZ, null)
                    }
                  )
              }),
              (n = [x, C]),
              (c[5] = x),
              (c[6] = C),
              (c[7] = i),
              (c[8] = n))
            : ((i = c[7]), (n = c[8])),
            (0, d.useLayoutEffect)(i, n))
          let k = (0, g.zy)(),
            T = (0, o.Ul)(E.g_),
            M = new URL(T ?? k.pathname + k.search + k.hash, "https://chatgpt.com"),
            O = M.pathname.startsWith("/space/files"),
            N = M.searchParams.get("view"),
            L = "/space"
          "/space/sites" === M.pathname || M.pathname.startsWith("/space/sites/")
            ? ((N = "sites"), (L = "/space/sites"))
            : O && ((N = "files"), (L = "/space/files"))
          let U = k.state,
            R = (0, o.Ul)(E.xo),
            F = !0 === C.value.mainHome && m && f && "/space" === M.pathname && !M.search,
            G = (0, E.ER)(M.pathname, M.search, L, null == T ? U : { libraryFolderReturnLocations: R }),
            B = (0, o.Ul)(H.Et)
          "slides" === N && (A ? (G.slidesIncludeShared = "available" === B) : (delete G.slidesCollection, (N = null)))
          let z = (0, o.Ul)(et.TV),
            $ = (0, o.Ul)(et.K8),
            V = z && null != (0, g.B6)("/space/sites", M.pathname) && "pinned" !== M.searchParams.get("view"),
            Q = V && "shared" === M.searchParams.get("view"),
            W = (0, K.Zj)(
              (!Q && (!z || null != N || "library:collection:shared-with-me" !== G.directoryId)) || "476199071",
            ),
            Z =
              z &&
              W &&
              null == N &&
              "sites" === M.searchParams.get("artifact") &&
              !G.deleted &&
              (null == G.directoryId || "library:collection:shared-with-me" === G.directoryId),
            Y = G.slidesCollection,
            q = "library:collection:shared-with-me" === G.directoryId || "shared" === Y
          if (
            ((0, d.useEffect)(() => {
              q &&
                "loading" !== B &&
                "available" !== B &&
                (0, E.zl)(C, null != Y ? "/space?view=slides" : "/space?tab=all", {
                  expectedUrl: M.pathname + M.search,
                  replace: !0,
                })
            }, [q, C, B, Y, M.pathname, M.search]),
            Q && W && "loading" === B)
          ) {
            let e
            return (
              c[9] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, l.jsx)(ea.V, {})), (c[9] = e)) : (e = c[9]),
              e
            )
          }
          if (V && (!Q || (W && "available" === B))) return (0, l.jsx)(ej, { url: M })
          if ("/space" === M.pathname && "templates" === M.searchParams.get("view"))
            return (0, l.jsx)(eT, {
              category: M.searchParams.get("category"),
              search: M.searchParams.get("search") ?? "",
            })
          if (q && "available" !== B) {
            let e
            return (
              c[10] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, l.jsx)(l.Fragment, {})), (c[10] = e))
                : (e = c[10]),
              e
            )
          }
          if (
            (O &&
              "images" === G.tab &&
              ((N = "images"),
              null != G.directoryId ||
                G.deleted ||
                ((G.imageSourceTabs = !0),
                1 !== G.sources.length && (G.sources = ["generated"]),
                (G.categories = G.search ? ["images"] : []))),
            "pages" === N)
          ) {
            let e = M.searchParams.get("pages_tab")
            ;((G.pageCollection = "owned" === e || "shared" === e ? e : "all"),
              (G.directoryId = "shared" === G.pageCollection ? "library:collection:shared-with-me" : null),
              (G.tab = "all"),
              (G.categories = ["pages"]),
              (G.sources = []))
          }
          let ei =
            !O && "sites" !== N && ("suggested" === G.tab || "all" === G.tab) && !G.deleted && (0, P.No)(G.directoryId)
          c[11] !== u || c[12] !== C || c[13] !== w || c[14] !== T
            ? ((s = () => {
                if (C.get(E.g_) !== T) return !1
                if (null != w) {
                  let e = (0, J.KE)(u, w)
                  return null != e && u.get((0, J.getThreadPanelTabController)(e).activeTab$)?.tabId === w
                }
                return "chat" === u.get(ee.Em) && !u.get(X.JJ)
              }),
              (c[11] = u),
              (c[12] = C),
              (c[13] = w),
              (c[14] = T),
              (c[15] = s))
            : (s = c[15])
          let el = s,
            er =
              "/space" === M.pathname &&
              null == N &&
              !G.deleted &&
              (null == G.directoryId || "library:collection:shared-with-me" === G.directoryId),
            en =
              !G.search &&
              !G.deleted &&
              ("suggested" === G.tab || "all" === G.tab || "recent" === G.tab) &&
              !("assigned" === N && $) &&
              "sites" !== N &&
              !Z &&
              ("pages" === N || eE(G, N) || ("/space" === L && null != G.directoryId)),
            es = "suggested" === G.tab ? "all" : "your_items",
            eo = (e, t) =>
              (0, l.jsxs)(o.Ui, {
                scope: E.Qy,
                value: {
                  ...G,
                  entrySurface: "spaces",
                  supportsStructuredGrid: en,
                  includePages: ei,
                  sources: !ei || "suggested" !== G.tab || G.search || G.categories.some(P.bI) ? G.sources : [],
                  defaultViewMode: "list",
                  includeSites: j && !O && "files" !== N && "pages" !== N && "sites" !== N,
                  includePinnedSites: !O && "files" !== N && "pages" !== N && "sites" !== N,
                },
                children: [
                  (0, l.jsx)(ek, { active: t }),
                  (0, l.jsxs)(h.Y, {
                    mode: t ? "visible" : "hidden",
                    children: [
                      t &&
                        m &&
                        f &&
                        null == N &&
                        ei &&
                        (null == G.directoryId || q) &&
                        (0, l.jsx)("span", { hidden: !0, "data-drive-collection": q ? "shared_with_you" : es }),
                      (0, l.jsx)(eM, {
                        inlineSites: Z,
                        trackHomeClick: F && t,
                        collectionHref: t && m && f ? M.pathname + M.search : void 0,
                        embedded: S,
                        isVisible: f,
                        navigation: v,
                        view: N,
                        url: M,
                        routeScope: u,
                        tabId: w,
                        onOpenItem: e,
                        isCurrent: S ? el : void 0,
                      }),
                      (0, l.jsx)(e_.M, {
                        href: M.pathname + M.search,
                        onNavigate: (e, t) => (0, E.zl)(C, e, { state: k.state, ...t }),
                        children: (e) => (0, l.jsx)(b.O, { routeScope: u, isVisible: f, onNavigateToSite: e }),
                      }),
                    ],
                  }),
                ],
              })
          return S
            ? (0, l.jsx)(D.u, {
                routeScope: u,
                isCurrent: el,
                tabId: w,
                children: (e) =>
                  (0, l.jsx)(
                    eP,
                    {
                      retain: er,
                      href: JSON.stringify([M.pathname, N, G.tab, G.directoryId]),
                      children: (t) => eo(e, t),
                    },
                    JSON.stringify([C.value.accountId, C.value.userId]),
                  ),
              })
            : (0, l.jsx)(
                eP,
                { retain: er, href: JSON.stringify([M.pathname, N, G.tab, G.directoryId]), children: (e) => eo(y, e) },
                JSON.stringify([C.value.accountId, C.value.userId]),
              )
        }
        function eP(e) {
          let t,
            a,
            i,
            n,
            s,
            o,
            c = (0, r.c)(14),
            { retain: u, href: p, children: g } = e
          c[0] !== g || c[1] !== p
            ? ((t = () => ({ href: p, children: g, views: [{ href: p, children: g }] })),
              (c[0] = g),
              (c[1] = p),
              (c[2] = t))
            : (t = c[2])
          let [h, m] = (0, d.useState)(t)
          if (h.href !== p || h.children !== g) {
            let e = [{ href: p, children: g }]
            ;(u &&
              (e = h.views.some((e) => e.href === p)
                ? h.views.map((e) => (e.href === p ? { href: p, children: g } : e))
                : [...h.views.filter((e) => e.href === h.href), { href: p, children: g }]),
              m({ href: p, children: g, views: e }))
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
            c[4] !== p ? ((i = [p]), (c[4] = p), (c[5] = i)) : (i = c[5]),
            (0, d.useLayoutEffect)(a, i),
            c[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (e) => {
                  v.current = null != e.target.closest('[role="tab"]')
                }),
                (c[6] = n))
              : (n = c[6]),
            c[7] !== h.views || c[8] !== p)
          ) {
            let e
            ;(c[10] !== p
              ? ((e = (e) =>
                  (0, l.jsxs)(
                    d.Fragment,
                    {
                      children: [
                        (0, l.jsx)(W.A, {
                          active: e.href === p,
                          ttlSeconds: 600,
                          onExpire: () =>
                            m((t) => ({ ...t, views: t.views.filter((a) => a.href === t.href || a.href !== e.href) })),
                        }),
                        (0, l.jsx)("div", {
                          className: "contents",
                          "data-active-section": e.href === p,
                          children: e.children(e.href === p),
                        }),
                      ],
                    },
                    e.href,
                  )),
                (c[10] = p),
                (c[11] = e))
              : (e = c[11]),
              (s = h.views.map(e)),
              (c[7] = h.views),
              (c[8] = p),
              (c[9] = s))
          } else s = c[9]
          return (
            c[12] !== s
              ? ((o = (0, l.jsx)("div", { className: "contents", ref: f, onFocusCapture: n, children: s })),
                (c[12] = s),
                (c[13] = o))
              : (o = c[13]),
            o
          )
        }
        function eE(e, t) {
          return (
            !("slides" === t && (0, eS.D)(e)) &&
            "pages" !== t &&
            "images" !== t &&
            "files" !== t &&
            !e.deleted &&
            (null == e.directoryId || "library:collection:shared-with-me" === e.directoryId)
          )
        }
        function ek(e) {
          let t,
            a,
            i = (0, r.c)(4),
            { active: l } = e,
            n = (0, o.gh)(E.Qy)
          return (
            i[0] !== l || i[1] !== n
              ? ((t = () => {
                  !l && n.get(B.oe).size > 0 && n.set(B.oe, new Set())
                }),
                (a = [l, n]),
                (i[0] = l),
                (i[1] = n),
                (i[2] = t),
                (i[3] = a))
              : ((t = i[2]), (a = i[3])),
            (0, d.useLayoutEffect)(t, a),
            null
          )
        }
        function eT(e) {
          let t,
            a,
            i,
            n,
            s = (0, r.c)(11),
            { category: c, search: u } = e,
            p = (0, o.gh)(E.vn),
            g = (0, K.Zj)("183803860"),
            h = (0, K.DR)("183803860")
          return (s[0] !== g || s[1] !== h || s[2] !== p
            ? ((t = () => {
                g || h || (0, E.zl)(p, "/space", { replace: !0 })
              }),
              (a = [g, h, p]),
              (s[0] = g),
              (s[1] = h),
              (s[2] = p),
              (s[3] = t),
              (s[4] = a))
            : ((t = s[3]), (a = s[4])),
          (0, d.useEffect)(t, a),
          g)
            ? (s[5] !== p
                ? ((i = (e, t) => {
                    let a = new URLSearchParams({ view: "templates" })
                    ;(e && a.set("category", e), t && a.set("search", t), (0, E.zl)(p, `/space?${a}`, { replace: !0 }))
                  }),
                  (s[5] = p),
                  (s[6] = i))
                : (i = s[6]),
              s[7] !== c || s[8] !== u || s[9] !== i
                ? ((n = (0, l.jsx)(eO, { category: c, search: u, onNavigate: i })),
                  (s[7] = c),
                  (s[8] = u),
                  (s[9] = i),
                  (s[10] = n))
                : (n = s[10]),
              n)
            : null
        }
        function eM(e) {
          let t,
            a,
            i,
            n,
            h,
            m,
            v,
            b,
            _,
            w,
            k,
            L,
            D,
            G,
            B,
            z,
            W,
            K,
            J,
            X,
            ee,
            er,
            eo,
            eg = (0, r.c)(192),
            {
              routeScope: eh,
              tabId: em,
              embedded: eC,
              isVisible: eI,
              trackHomeClick: ej,
              inlineSites: eA,
              collectionHref: eP,
              navigation: ek,
              view: eT,
              url: eM,
              onOpenItem: eO,
              isCurrent: eR,
            } = e,
            eF = (0, o.gh)(E.Qy),
            eD = ej ? eF.get(ei.a)?.startRender() : void 0,
            eG = (0, u.A)(),
            eB = (0, g.zy)(),
            ez = (0, o.Ul)(et.TV)
          eg[0] !== ez || eg[1] !== eT || eg[2] !== eF.value.tab || eg[3] !== eM.pathname
            ? ((t =
                ez &&
                null == eT &&
                (0, en.GD)(eM.pathname) &&
                ("images" === eF.value.tab || "folders" === eF.value.tab)),
              (eg[0] = ez),
              (eg[1] = eT),
              (eg[2] = eF.value.tab),
              (eg[3] = eM.pathname),
              (eg[4] = t))
            : (t = eg[4])
          let eH = t
          eg[5] !== eA || eg[6] !== eH || eg[7] !== eT
            ? ((a = eT),
              eA ? (a = "sites") : eH && (a = "files"),
              (eg[5] = eA),
              (eg[6] = eH),
              (eg[7] = eT),
              (eg[8] = a))
            : (a = eg[8])
          let e$ = (0, o.Ul)("sites" === a ? y.x : E.YH),
            eV = (0, o.Ul)(!!eA && "grid" === e$ && M.s),
            eQ = (0, o.Ul)(E.eY),
            eW = (0, o.Ul)(et.K8),
            eZ = eW && "assigned" === a,
            eY = (0, d.useRef)(null),
            [eq, eK] = (0, d.useState)(null)
          eg[9] !== eB.key ||
          eg[10] !== eB.state?.pageListScrollKey ||
          eg[11] !== eM.pathname ||
          eg[12] !== eM.search ||
          eg[13] !== e$
            ? ((i = JSON.stringify([eB.state?.pageListScrollKey ?? eB.key, eM.pathname, eM.search, e$])),
              (eg[9] = eB.key),
              (eg[10] = eB.state?.pageListScrollKey),
              (eg[11] = eM.pathname),
              (eg[12] = eM.search),
              (eg[13] = e$),
              (eg[14] = i))
            : (i = eg[14])
          let eJ = i
          ;(eg[15] !== eC || eg[16] !== eF || eg[17] !== eJ || eg[18] !== a
            ? ((n = () => {
                let e = eY.current
                if (!eC && "pages" === a && null != e) return (0, ey.w)(eF, eJ, e)
              }),
              (eg[15] = eC),
              (eg[16] = eF),
              (eg[17] = eJ),
              (eg[18] = a),
              (eg[19] = n))
            : (n = eg[19]),
            eg[20] !== eC || eg[21] !== eF || eg[22] !== eJ || eg[23] !== a
              ? ((h = [eC, eF, eJ, a]), (eg[20] = eC), (eg[21] = eF), (eg[22] = eJ), (eg[23] = a), (eg[24] = h))
              : (h = eg[24]),
            (0, d.useLayoutEffect)(n, h))
          let eX = (0, o.Ul)(q.GB),
            e1 = (0, o.Ul)(et.CY)
          eg[25] !== e1 || eg[26] !== eF.value || eg[27] !== a
            ? ((m = e1 && "slides" === a && (0, eS.D)(eF.value)),
              (eg[25] = e1),
              (eg[26] = eF.value),
              (eg[27] = a),
              (eg[28] = m))
            : (m = eg[28])
          let e0 = m,
            e2 = (0, o.Ul)(H.Tm),
            e3 =
              ez &&
              (null == a || eA) &&
              !eF.value.deleted &&
              (null == eF.value.directoryId || "library:collection:shared-with-me" === eF.value.directoryId),
            e5 = eM.pathname + eM.search
          ;(eg[29] !== eC || eg[30] !== eI || eg[31] !== eF || eg[32] !== e3 || eg[33] !== e5
            ? ((v = () => {
                if (!e3 || eC || !eI) return
                let e = (e, t) => {
                  t === e5 &&
                    eF.value.accountId === eF.get(x.chatGptAuthenticatedAccountId$) &&
                    eF.value.userId === eF.get(x.chatGptAuthenticatedUserId$) &&
                    ("clear-filters" === e
                      ? (eF.value.categories.length > 0 && (0, A.np)(eF, { fileTypes: [] }),
                        eF.value.sources.length > 0 && (0, A.np)(eF, { sources: [] }))
                      : (0, A.np)(eF, { category: e }))
                }
                return (
                  eF.set(eu.t, () => e),
                  () => {
                    eF.get(eu.t) === e && eF.set(eu.t, null)
                  }
                )
              }),
              (b = [eC, eI, eF, e3, e5]),
              (eg[29] = eC),
              (eg[30] = eI),
              (eg[31] = eF),
              (eg[32] = e3),
              (eg[33] = e5),
              (eg[34] = v),
              (eg[35] = b))
            : ((v = eg[34]), (b = eg[35])),
            (0, d.useEffect)(v, b))
          let e4 = (0, o.Ul)($.uw),
            e7 = (0, o.Ul)(!e4 && $.wh)
          eg[36] !== eG
            ? ((_ = eG.formatMessage({
                id: "space.list.searchPlaceholder",
                defaultMessage: "Search",
                description: "Placeholder for the search field on Space home",
              })),
              (eg[36] = eG),
              (eg[37] = _))
            : (_ = eg[37])
          let e8 = _
          eg[38] !== eF.value.basePath || eg[39] !== eF.value.directoryId
            ? ((w =
                null != eF.value.directoryId && (0, j.Tf)(eF.value.directoryId, eF.value.basePath)
                  ? eF.value.directoryId
                  : void 0),
              (eg[38] = eF.value.basePath),
              (eg[39] = eF.value.directoryId),
              (eg[40] = w))
            : (w = eg[40])
          let e6 = w,
            e9 = null
          if (
            e4 &&
            !eF.value.deleted &&
            ("pages" === a || null == eF.value.directoryId || "native" === (0, P.oh)(eF.value.directoryId))
          )
            if ("pages" === a) {
              let e
              ;(eg[41] !== e6
                ? ((e = (0, l.jsx)(eL, { action: "pages", parentFolderId: e6 })), (eg[41] = e6), (eg[42] = e))
                : (e = eg[42]),
                (e9 = e))
            } else if (e0) {
              let e
              ;(eg[43] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, l.jsx)(eL, { action: "slides" })), (eg[43] = e))
                : (e = eg[43]),
                (e9 = e))
            } else if (eX)
              if ("images" === a) {
                let e
                ;(eg[45] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, l.jsx)(eL, { action: "images" })), (eg[45] = e))
                  : (e = eg[45]),
                  (e9 = e))
              } else if (
                "sites" === a ||
                (null == a &&
                  (null == eF.value.directoryId || "library:collection:shared-with-me" === eF.value.directoryId))
              ) {
                let e
                ;(eg[46] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, l.jsx)(eL, {})), (eg[46] = e))
                  : (e = eg[46]),
                  (e9 = e))
              } else if (null == a && null != e6) {
                let e
                ;(eg[47] !== e6
                  ? ((e = (0, l.jsx)(eL, { parentFolderId: e6 })), (eg[47] = e6), (eg[48] = e))
                  : (e = eg[48]),
                  (e9 = e))
              } else {
                let e,
                  t = null == a ? "space" : void 0
                ;(eg[49] !== t
                  ? ((e = (0, l.jsx)(I.Rr, { variant: t, compactOnMobile: !0, showNote: !1 })),
                    (eg[49] = t),
                    (eg[50] = e))
                  : (e = eg[50]),
                  (e9 = e))
              }
            else {
              let e
              ;(eg[44] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, l.jsx)(I.Rr, { showNote: !1 })), (eg[44] = e))
                : (e = eg[44]),
                (e9 = e))
            }
          if (e7 && (null == a || "files" === a)) {
            let e
            ;(eg[51] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(I.JA, {})), (eg[51] = e))
              : (e = eg[51]),
              (e9 = e))
          }
          ;(eg[52] !== eX || eg[53] !== eR || eg[54] !== ek?.onOpenPage
            ? ((k = eX ? null : (0, l.jsx)(V.F, { onOpenPage: ek?.onOpenPage, isCurrent: eR })),
              (eg[52] = eX),
              (eg[53] = eR),
              (eg[54] = ek?.onOpenPage),
              (eg[55] = k))
            : (k = eg[55]),
            eg[56] !== e9 || eg[57] !== k
              ? ((L = (0, l.jsxs)(l.Fragment, { children: [e9, k] })), (eg[56] = e9), (eg[57] = k), (eg[58] = L))
              : (L = eg[58]))
          let te = L
          if (
            eg[59] !== eA ||
            eg[60] !== eG ||
            eg[61] !== eF.value.deleted ||
            eg[62] !== eF.value.directoryId ||
            eg[63] !== eF.value.tab ||
            eg[64] !== e3 ||
            eg[65] !== e0 ||
            eg[66] !== a
          ) {
            if (eF.value.deleted)
              D = (0, l.jsx)(p.A, {
                id: "libraryNext.title.trash",
                defaultMessage: "Trash",
                description: "Library trash heading",
              })
            else if (
              null != eF.value.directoryId &&
              ("files" === a || "library:collection:shared-with-me" !== eF.value.directoryId)
            ) {
              let e
              ;(eg[68] !== eG || eg[69] !== a
                ? ((e =
                    "files" === a
                      ? eG.formatMessage({
                          id: "codex.space.files.title",
                          defaultMessage: "Files",
                          description: "Heading for external files of all types in Space",
                        })
                      : eG.formatMessage({
                          id: "space.home.allTitle",
                          defaultMessage: "All",
                          description: "Title of the combined Library and Pages homepage",
                        })),
                  (eg[68] = eG),
                  (eg[69] = a),
                  (eg[70] = e))
                : (e = eg[70]),
                (D = (0, l.jsx)(F.e9, { rootName: e })))
            } else
              D =
                e3 && "library:collection:shared-with-me" === eF.value.directoryId
                  ? (0, l.jsx)(p.A, {
                      id: "space.home.sharedWithYou",
                      defaultMessage: "Shared with you",
                      description: "Space homepage tab for Library's Shared with me folder",
                    })
                  : e3 && ("all" === eF.value.tab || "favorites" === eF.value.tab)
                    ? (0, l.jsx)(p.A, {
                        id: "space.home.yourItems",
                        defaultMessage: "Your items",
                        description: "Space homepage tab for the existing Library All collection",
                      })
                    : e0
                      ? (0, l.jsx)(p.A, {
                          id: "space.home.slidesTitle",
                          defaultMessage: "Slides",
                          description:
                            "Heading and sidebar navigation label for the Space collection containing native Slides and presentation files",
                        })
                      : "pages" === a
                        ? (0, l.jsx)(p.A, {
                            id: "space.list.pagesTab",
                            defaultMessage: "Pages",
                            description: "Filter showing all Pages",
                          })
                        : "sites" !== a || eA
                          ? "images" === a
                            ? (0, l.jsx)(p.A, {
                                id: "libraryNext.filters.images",
                                defaultMessage: "Images",
                                description:
                                  "Library image category, shown as a tab, filter menu option, or selected filter chip",
                              })
                            : "files" === a
                              ? (0, l.jsx)(p.A, {
                                  id: "codex.space.files.title",
                                  defaultMessage: "Files",
                                  description: "Heading for external files of all types in Space",
                                })
                              : (0, l.jsx)(p.A, {
                                  id: "space.home.allTitle",
                                  defaultMessage: "All",
                                  description: "Title of the combined Library and Pages homepage",
                                })
                          : (0, l.jsx)(p.A, {
                              id: "codex.space.sites.title",
                              defaultMessage: "Sites",
                              description: "Title of the built-in Sites page in Spaces",
                            })
            ;((eg[59] = eA),
              (eg[60] = eG),
              (eg[61] = eF.value.deleted),
              (eg[62] = eF.value.directoryId),
              (eg[63] = eF.value.tab),
              (eg[64] = e3),
              (eg[65] = e0),
              (eg[66] = a),
              (eg[67] = D))
          } else D = eg[67]
          if ("sites" === a) {
            let e, t, a, i, r, n, s, u
            if (eg[71] !== eA || eg[72] !== eF.value.directoryId || eg[73] !== eF.value.tab) {
              let a
              ;(eg[76] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = (0, l.jsx)("div", { ref: eK, className: "contents" })), (eg[76] = a))
                : (a = eg[76]),
                (e = a),
                eA &&
                  ((t = "all"),
                  "library:collection:shared-with-me" === eF.value.directoryId
                    ? (t = "shared")
                    : ("all" === eF.value.tab || "favorites" === eF.value.tab) && (t = "owned")),
                (eg[71] = eA),
                (eg[72] = eF.value.directoryId),
                (eg[73] = eF.value.tab),
                (eg[74] = e),
                (eg[75] = t))
            } else ((e = eg[74]), (t = eg[75]))
            eg[77] !== eG
              ? ((a = eG.formatMessage({
                  id: "appgenPage.sites.search",
                  defaultMessage: "Search sites",
                  description: "Accessible label and placeholder for searching Sites",
                })),
                (eg[77] = eG),
                (eg[78] = a))
              : (a = eg[78])
            let g = a
            eg[79] !== eF ? ((i = eF.get(es.spaceAccountId$)), (eg[79] = eF), (eg[80] = i)) : (i = eg[80])
            let h = i,
              m = eB.state?.spaceSidebarAccountId === h ? eB.state : null
            eg[81] !== h ||
            eg[82] !== e ||
            eg[83] !== t ||
            eg[84] !== eX ||
            eg[85] !== eA ||
            eg[86] !== eI ||
            eg[87] !== eB.state ||
            eg[88] !== m?.spaceSidebarPersonal ||
            eg[89] !== m?.spaceSidebarRootPageId ||
            eg[90] !== eh ||
            eg[91] !== eF ||
            eg[92] !== g ||
            eg[93] !== eV ||
            eg[94] !== D ||
            eg[95] !== eM ||
            eg[96] !== e$
              ? ((r = (a) =>
                  (0, l.jsx)(o.Ui, {
                    scope: Y.l7,
                    value: eh.getOwnValue(Y.l7),
                    children: (0, l.jsx)(o.Ui, {
                      scope: Z.GD,
                      value: eh.getOwnValue(Z.GD),
                      children: (0, l.jsx)(d.Suspense, {
                        fallback: eA
                          ? (0, l.jsx)(U.WI, {
                              stickyNavigation: !1,
                              title: D,
                              navigation: (0, l.jsx)("div", {
                                className: "w-full",
                                children: (0, l.jsxs)(S.uC, {
                                  inset: !1,
                                  wrap: !0,
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "min-w-0 flex-auto overflow-x-auto",
                                      children: (0, l.jsx)(ec.h, { scope: eF, sitesSelected: !0 }),
                                    }),
                                    (0, l.jsx)(U.E2, { value: e$, disabled: !0 }),
                                  ],
                                }),
                              }),
                              controls: (0, l.jsx)(U.Pu, {
                                fixedSearchWidth: !0,
                                showViewToggle: !1,
                                searchPlaceholder: g,
                                searchLabel: g,
                                searchQuery: eM.searchParams.get("search") ?? "",
                                searchMaxLength: 200,
                                onSearchQueryChange: (e) => {
                                  let t = new URL(eM)
                                  ;(e ? t.searchParams.set("search", e) : t.searchParams.delete("search"),
                                    (0, E.zl)(eF, t.pathname + t.search, { replace: !0, state: eB.state }))
                                },
                                actions: e,
                              }),
                              children:
                                "grid" === e$
                                  ? (0, l.jsx)(T.oH, { square: !0, structuredGridEnabled: eV })
                                  : (0, l.jsx)(O.b, {
                                      layout: "stacked",
                                      rowCount: 7,
                                      loadingLabel: (0, l.jsx)(p.A, {
                                        id: "appgenPage.loading",
                                        defaultMessage: "Loading sites",
                                        description: "Accessible status while the Sites page is loading",
                                      }),
                                    }),
                            })
                          : (0, l.jsx)(ea.V, {}),
                        children: (0, l.jsx)(eN, {
                          isVisible: eI,
                          collectionNavigation: {
                            href: eA ? eM.pathname + eM.search : "/space/sites" + eM.search,
                            view: t,
                            onNavigate: (e, t) => (0, E.zl)(eF, e, { state: eB.state, ...t }),
                            state: eX
                              ? {
                                  sidebarArea: "space",
                                  spaceSidebarAccountId: h ?? void 0,
                                  spaceSidebarRootPageId: m?.spaceSidebarRootPageId,
                                  spaceSidebarPersonal: m?.spaceSidebarPersonal ?? !1,
                                }
                              : void 0,
                          },
                          onNavigateToSite: a,
                          renderLayout: (t) => {
                            let {
                              tabs: a,
                              children: i,
                              searchQuery: r,
                              onSearchQueryChange: n,
                              searchPlaceholder: s,
                              searchMaxLength: o,
                              viewMode: d,
                              onViewModeChange: c,
                            } = t
                            return (0, l.jsx)(U.WI, {
                              stickyNavigation: !1,
                              title: D,
                              navigation: (0, l.jsx)("div", {
                                className: "w-full",
                                children: (0, l.jsxs)(S.uC, {
                                  inset: !1,
                                  wrap: !0,
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "min-w-0 flex-auto overflow-x-auto",
                                      children: eA ? (0, l.jsx)(ec.h, { scope: eF, sitesSelected: !0 }) : a,
                                    }),
                                    (0, l.jsx)(U.E2, { value: d, onChange: c }),
                                  ],
                                }),
                              }),
                              controls: (0, l.jsx)(U.Pu, {
                                fixedSearchWidth: !0,
                                showViewToggle: !1,
                                searchPlaceholder: s,
                                searchLabel: s,
                                searchQuery: r,
                                searchMaxLength: o,
                                onSearchQueryChange: n,
                                actions: e,
                              }),
                              children: i,
                            })
                          },
                        }),
                      }),
                    }),
                  })),
                (eg[81] = h),
                (eg[82] = e),
                (eg[83] = t),
                (eg[84] = eX),
                (eg[85] = eA),
                (eg[86] = eI),
                (eg[87] = eB.state),
                (eg[88] = m?.spaceSidebarPersonal),
                (eg[89] = m?.spaceSidebarRootPageId),
                (eg[90] = eh),
                (eg[91] = eF),
                (eg[92] = g),
                (eg[93] = eV),
                (eg[94] = D),
                (eg[95] = eM),
                (eg[96] = e$),
                (eg[97] = r))
              : (r = eg[97])
            let f = r,
              v = eM.pathname + eM.search
            return (
              eg[98] !== eB.state || eg[99] !== eF
                ? ((n = (e, t) => (0, E.zl)(eF, e, { state: eB.state, ...t })),
                  (eg[98] = eB.state),
                  (eg[99] = eF),
                  (eg[100] = n))
                : (n = eg[100]),
              eg[101] !== te || eg[102] !== f || eg[103] !== eh || eg[104] !== eq
                ? ((s = (e, t) =>
                    null == t
                      ? (0, l.jsxs)(l.Fragment, { children: [f(e), eq && (0, c.createPortal)(te, eq)] })
                      : (0, l.jsx)(o.Ui, {
                          scope: Y.l7,
                          value: eh.getOwnValue(Y.l7),
                          children: (0, l.jsx)(o.Ui, { scope: Z.GD, value: eh.getOwnValue(Z.GD), children: t }),
                        })),
                  (eg[101] = te),
                  (eg[102] = f),
                  (eg[103] = eh),
                  (eg[104] = eq),
                  (eg[105] = s))
                : (s = eg[105]),
              eg[106] !== eA || eg[107] !== v || eg[108] !== n || eg[109] !== s
                ? ((u = (0, l.jsx)(e_.M, { inlineCollection: eA, href: v, onNavigate: n, children: s })),
                  (eg[106] = eA),
                  (eg[107] = v),
                  (eg[108] = n),
                  (eg[109] = s),
                  (eg[110] = u))
                : (u = eg[110]),
              u
            )
          }
          let tt = !0 === eF.value.imageSourceTabs
          eg[111] !== eF.value || eg[112] !== e3 || eg[113] !== tt || eg[114] !== a
            ? ((G = !tt && "pages" !== a && (!e3 || (0, E.cZ)(eF.value))),
              (eg[111] = eF.value),
              (eg[112] = e3),
              (eg[113] = tt),
              (eg[114] = a),
              (eg[115] = G))
            : (G = eg[115])
          let ta = G
          eg[116] !== eF.value.basePath || eg[117] !== eF.value.deleted || eg[118] !== eF.value.directoryId
            ? ((B =
                "/space" === eF.value.basePath &&
                !eF.value.deleted &&
                ((0, P.vM)(eF.value.directoryId) || (0, P.$n)(eF.value.directoryId))),
              (eg[116] = eF.value.basePath),
              (eg[117] = eF.value.deleted),
              (eg[118] = eF.value.directoryId),
              (eg[119] = B))
            : (B = eg[119])
          let ti = B
          eg[120] !== eF.value || eg[121] !== ti || eg[122] !== a
            ? ((z = ti || eE(eF.value, a)), (eg[120] = eF.value), (eg[121] = ti), (eg[122] = a), (eg[123] = z))
            : (z = eg[123])
          let tl = z,
            tr = "library:collection:shared-with-me" === eF.value.directoryId ? "shared" : eF.value.tab
          if (eg[124] !== eW || eg[125] !== eF.value || eg[126] !== e2) {
            if (((W = []), e2)) {
              let e, t, a
              ;(eg[128] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, l.jsx)(p.A, {
                    id: "space.home.sharedWithYou",
                    defaultMessage: "Shared with you",
                    description: "Space homepage tab for Library's Shared with me folder",
                  })),
                  (eg[128] = e))
                : (e = eg[128]),
                eg[129] !== eF.value
                  ? ((t = (0, E.SE)({
                      ...eF.value,
                      directoryId: "library:collection:shared-with-me",
                      tab: "all",
                      categories: [],
                      sources: [],
                    })),
                    (eg[129] = eF.value),
                    (eg[130] = t))
                  : (t = eg[130]),
                eg[131] !== t
                  ? ((a = { key: "shared", name: e, href: t }), (eg[131] = t), (eg[132] = a))
                  : (a = eg[132]),
                W.push(a))
            }
            if (eW) {
              let e
              ;(eg[133] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = {
                    key: "assigned",
                    name: (0, l.jsx)(p.A, {
                      id: "space.home.assignedToYou",
                      defaultMessage: "Assigned to you",
                      description: "All view tab listing Page tasks assigned to the signed-in person",
                    }),
                    href: "/space?view=assigned",
                  }),
                  (eg[133] = e))
                : (e = eg[133]),
                W.push(e))
            }
            ;((eg[124] = eW), (eg[125] = eF.value), (eg[126] = e2), (eg[127] = W))
          } else W = eg[127]
          if (e3) {
            let e
            ;(eg[134] !== eF ? ((e = (0, l.jsx)(ec.h, { scope: eF })), (eg[134] = eF), (eg[135] = e)) : (e = eg[135]),
              (K = e))
          } else if (e0) {
            let e
            ;(eg[136] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(ew.i, {})), (eg[136] = e))
              : (e = eg[136]),
              (K = e))
          } else if ("pages" === a) {
            let e
            ;(eg[137] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(eb.Y, {})), (eg[137] = e))
              : (e = eg[137]),
              (K = e))
          } else if ("images" === a && tt) {
            let e
            ;(eg[138] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(ef.c, {})), (eg[138] = e))
              : (e = eg[138]),
              (K = e))
          } else if (!e0 && !tl && !eF.value.deleted && (!eF.value.search || eH) && null == eF.value.directoryId) {
            let e, t, a
            ;(eg[139] !== eF
              ? ((e = (e) => (0, A.np)(eF, { category: e })),
                (t = (e) => (0, E.zl)(eF, e)),
                (eg[139] = eF),
                (eg[140] = e),
                (eg[141] = t))
              : ((e = eg[140]), (t = eg[141])),
              eg[142] !== eH || eg[143] !== eF.value || eg[144] !== e || eg[145] !== t
                ? ((a = (0, l.jsx)(F.I2, {
                    basePath: eF.value.basePath,
                    browseLocation: eF.value,
                    selectedKey: eF.value.tab,
                    preserveSearch: eH,
                    onFileTabSelect: e,
                    onNavigate: t,
                  })),
                  (eg[142] = eH),
                  (eg[143] = eF.value),
                  (eg[144] = e),
                  (eg[145] = t),
                  (eg[146] = a))
                : (a = eg[146]),
              (K = a))
          }
          eD?.()
          let tn = !tl
          return (
            eg[147] !== eC || eg[148] !== eh || eg[149] !== em
              ? ((J = eC ? () => (0, ed.E)(eh, em ?? null) : void 0),
                (eg[147] = eC),
                (eg[148] = eh),
                (eg[149] = em),
                (eg[150] = J))
              : (J = eg[150]),
            eg[151] !== te || eg[152] !== eF.value.deleted || eg[153] !== e8 || eg[154] !== eZ
              ? ((X = eF.value.deleted
                  ? void 0
                  : !eZ &&
                    (0, l.jsx)(F.pH, { showBrowseControls: !1, searchPlaceholder: e8, searchLabel: e8, actions: te })),
                (eg[151] = te),
                (eg[152] = eF.value.deleted),
                (eg[153] = e8),
                (eg[154] = eZ),
                (eg[155] = X))
              : (X = eg[155]),
            eg[156] !== W ||
            eg[157] !== tr ||
            eg[158] !== K ||
            eg[159] !== eQ ||
            eg[160] !== eF ||
            eg[161] !== e3 ||
            eg[162] !== eZ ||
            eg[163] !== tl ||
            eg[164] !== ta ||
            eg[165] !== ti ||
            eg[166] !== e0 ||
            eg[167] !== ej ||
            eg[168] !== e$
              ? ((ee = eF.value.deleted
                  ? void 0
                  : (0, l.jsx)("div", {
                      className: "w-full",
                      children: (0, l.jsxs)(S.uC, {
                        inset: !1,
                        wrap: !0,
                        children: [
                          ej && (0, l.jsx)(el.k, { milestone: "interactive" }),
                          (null != K || tl) &&
                            (0, l.jsx)("div", {
                              className: "min-w-0 flex-auto overflow-x-auto",
                              children:
                                K ??
                                (ti
                                  ? (0, l.jsx)(ex.K, {})
                                  : (0, l.jsx)(F.I2, {
                                      basePath: "/space",
                                      browseLocation: eF.value,
                                      selectedKey: eZ ? "assigned" : tr,
                                      fileTabs: ["suggested", "favorites", "all"],
                                      preserveSearch: !0,
                                      tabLabels: {
                                        suggested: (0, l.jsxs)("span", {
                                          className: "grid text-center",
                                          children: [
                                            (0, l.jsx)("span", {
                                              className: (0, s.A)(
                                                "col-start-1 row-start-1",
                                                !!eF.value.search && "invisible",
                                              ),
                                              "aria-hidden": !!eF.value.search,
                                              children: (0, l.jsx)(p.A, {
                                                id: "libraryNext.tabs.suggested",
                                                defaultMessage: "Suggested",
                                                description: "Library tab for backend-ranked suggested items",
                                              }),
                                            }),
                                            (0, l.jsx)("span", {
                                              className: (0, s.A)(
                                                "col-start-1 row-start-1",
                                                !eF.value.search && "invisible",
                                              ),
                                              "aria-hidden": !eF.value.search,
                                              children: (0, l.jsx)(p.A, {
                                                id: "space.home.allResults",
                                                defaultMessage: "All results",
                                                description:
                                                  "Space homepage tab replacing Suggested while a search query is active",
                                              }),
                                            }),
                                          ],
                                        }),
                                        all: (0, l.jsx)(p.A, {
                                          id: "space.home.yourItems",
                                          defaultMessage: "Your items",
                                          description: "Space homepage tab for the existing Library All collection",
                                        }),
                                      },
                                      additionalTabs: W,
                                      onNavigate: (e) => (0, E.zl)(eF, e),
                                      onFileTabSelect: (e) => (0, A.np)(eF, { category: e }),
                                    })),
                            }),
                          !eZ &&
                            (0, l.jsx)("div", {
                              className: "min-w-0 flex-auto",
                              children: (0, l.jsx)(C.T, {
                                filterTags: ta ? (0, l.jsx)(R.l, { showCategoryFilters: !e0 && !e3 }) : null,
                                search: null,
                                controls: (0, l.jsxs)(l.Fragment, {
                                  children: [
                                    ta && (0, l.jsx)(R.d, { showCategoryFilters: !e0 && !e3 }),
                                    ta && !eQ && (0, E.BG)(eF.value) && (0, l.jsx)(f.Ow, {}),
                                    !eQ &&
                                      (0, l.jsx)(U.zK, {
                                        viewModeControl: { value: e$, onChange: (e) => (0, E.ul)(eF, e) },
                                        onViewModeChange: (e) => (0, A.np)(eF, { layout: e }),
                                      }),
                                  ],
                                }),
                              }),
                            }),
                        ],
                      }),
                    })),
                (eg[156] = W),
                (eg[157] = tr),
                (eg[158] = K),
                (eg[159] = eQ),
                (eg[160] = eF),
                (eg[161] = e3),
                (eg[162] = eZ),
                (eg[163] = tl),
                (eg[164] = ta),
                (eg[165] = ti),
                (eg[166] = e0),
                (eg[167] = ej),
                (eg[168] = e$),
                (eg[169] = ee))
              : (ee = eg[169]),
            eg[170] !== eP ||
            eg[171] !== eR ||
            eg[172] !== eI ||
            eg[173] !== ek ||
            eg[174] !== eO ||
            eg[175] !== eh ||
            eg[176] !== eF.value.supportsStructuredGrid ||
            eg[177] !== e3 ||
            eg[178] !== eZ ||
            eg[179] !== ej ||
            eg[180] !== eM.pathname ||
            eg[181] !== e$
              ? ((er = eZ
                  ? eI && (0, l.jsx)(eU, { onOpenPage: ek?.onOpenPage })
                  : (0, l.jsx)(ev.K, {
                      collectionHref: eP,
                      trackHomeClick: ej,
                      structuredGridEnabled: "grid" === e$ && !0 === eF.value.supportsStructuredGrid,
                      collectionRows: e3,
                      pathname: eM.pathname,
                      navigation: ek,
                      isCurrent: eR,
                      onOpenItem: eO,
                      onOpenProfile: (e) => {
                        ;(0, Q.openProfileTab)(eh, e)
                      },
                      searchFileActions: (0, ep.w)(eh),
                    })),
                (eg[170] = eP),
                (eg[171] = eR),
                (eg[172] = eI),
                (eg[173] = ek),
                (eg[174] = eO),
                (eg[175] = eh),
                (eg[176] = eF.value.supportsStructuredGrid),
                (eg[177] = e3),
                (eg[178] = eZ),
                (eg[179] = ej),
                (eg[180] = eM.pathname),
                (eg[181] = e$),
                (eg[182] = er))
              : (er = eg[182]),
            eg[183] !== eI ||
            eg[184] !== eO ||
            eg[185] !== tn ||
            eg[186] !== J ||
            eg[187] !== X ||
            eg[188] !== ee ||
            eg[189] !== er ||
            eg[190] !== D
              ? ((eo = (0, l.jsx)(N.b, {
                  scrollContainerRef: eY,
                  isVisible: eI,
                  stickyNavigation: tn,
                  onSelectionToolbarMount: J,
                  title: D,
                  controls: X,
                  navigation: ee,
                  onOpenItem: eO,
                  results: er,
                })),
                (eg[183] = eI),
                (eg[184] = eO),
                (eg[185] = tn),
                (eg[186] = J),
                (eg[187] = X),
                (eg[188] = ee),
                (eg[189] = er),
                (eg[190] = D),
                (eg[191] = eo))
              : (eo = eg[191]),
            eo
          )
        }
        ;(a.d(
          t,
          {},
          {
            SlateSpacePage: function (e) {
              let t,
                a,
                i,
                n,
                s,
                c,
                u = (0, r.c)(41),
                {
                  embedded: p,
                  mainHome: h,
                  isActive: f,
                  isVisible: v,
                  navigation: y,
                  initialHref: b,
                  initialFolderReturnLocations: x,
                  onNavigate: _,
                  tabId: w,
                } = e,
                S = void 0 !== p && p,
                C = void 0 !== h && h,
                I = void 0 === f || f,
                j = void 0 === v || v,
                A = (0, o.gh)(Z.GD),
                P = (0, d.useId)(),
                T = (0, o.Ul)(eg.vy),
                M = (0, g.zy)(),
                O = (0, g.Zp)(),
                { libraryFileId: N } = (0, g.g)(),
                U = M.state
              u[0] !== S || u[1] !== N || u[2] !== M.pathname || u[3] !== U?.libraryPreview || u[4] !== O
                ? ((t =
                    !S && (0, eC.z_)(M.pathname) && null != N && U?.libraryPreview == null
                      ? (0, l.jsx)(z.LibraryFilePreview, {
                          libraryFileId: N,
                          onClose: () => void O("/space", { replace: !0 }),
                        })
                      : void 0),
                  (u[0] = S),
                  (u[1] = N),
                  (u[2] = M.pathname),
                  (u[3] = U?.libraryPreview),
                  (u[4] = O),
                  (u[5] = t))
                : (t = u[5])
              let R = t
              u[6] !== b || u[7] !== M.pathname || u[8] !== M.search
                ? ((a = () => b ?? M.pathname + M.search),
                  (u[6] = b),
                  (u[7] = M.pathname),
                  (u[8] = M.search),
                  (u[9] = a))
                : (a = u[9])
              let [F] = (0, d.useState)(a)
              if (S) {
                let e,
                  t,
                  a,
                  i,
                  r = T ? P : void 0
                return (
                  u[10] !== x || u[11] !== C || u[12] !== r || u[13] !== F
                    ? ((e = { embedded: !0, mainHome: C, initialHref: F, initialFolderReturnLocations: x, visitId: r }),
                      (u[10] = x),
                      (u[11] = C),
                      (u[12] = r),
                      (u[13] = F),
                      (u[14] = e))
                    : (e = u[14]),
                  u[15] !== j ? ((t = j ? (0, l.jsx)(k.n, {}) : null), (u[15] = j), (u[16] = t)) : (t = u[16]),
                  u[17] !== I || u[18] !== j || u[19] !== y || u[20] !== _ || u[21] !== A || u[22] !== w
                    ? ((a = (0, l.jsx)(eA, {
                        embedded: !0,
                        isActive: I,
                        isVisible: j,
                        navigation: y,
                        onNavigate: _,
                        tabId: w,
                        routeScope: A,
                      })),
                      (u[17] = I),
                      (u[18] = j),
                      (u[19] = y),
                      (u[20] = _),
                      (u[21] = A),
                      (u[22] = w),
                      (u[23] = a))
                    : (a = u[23]),
                  u[24] !== a || u[25] !== e || u[26] !== t
                    ? ((i = (0, l.jsx)(L.$, {
                        embedded: !0,
                        children: (0, l.jsxs)(o.Ui, { scope: E.vn, value: e, children: [t, a] }),
                      })),
                      (u[24] = a),
                      (u[25] = e),
                      (u[26] = t),
                      (u[27] = i))
                    : (i = u[27]),
                  i
                )
              }
              return (
                u[28] === Symbol.for("react.memo_cache_sentinel")
                  ? ((i = (0, l.jsx)(m.G.MainContentLayout, { layout: "custom-titlebar" })),
                    (n = (0, l.jsx)(er.y, {})),
                    (u[28] = i),
                    (u[29] = n))
                  : ((i = u[28]), (n = u[29])),
                u[30] !== b || u[31] !== I || u[32] !== j || u[33] !== M || u[34] !== C || u[35] !== y || u[36] !== A
                  ? ((s = (e) =>
                      (0, l.jsxs)(o.Ui, {
                        scope: E.vn,
                        value: { mainHome: C, initialHref: b, routeHref: M.pathname + M.search },
                        children: [
                          j ? (0, l.jsx)(k.n, {}) : null,
                          (0, l.jsx)(eA, {
                            isActive: I,
                            isVisible: j,
                            routeScope: A,
                            navigation: y,
                            onOpenItem: (t, a) => {
                              if (null != (0, eC.rV)(t) && (0, eo.D)(A, { kind: "library", libraryFileId: t.node.id }))
                                return void A.set(G.Hb, null)
                              let i = {
                                ...M,
                                state: {
                                  ...M.state,
                                  sidebarArea: "space",
                                  spaceSidebarAccountId: A.get(es.spaceAccountId$) ?? void 0,
                                  spaceSidebarPersonal: !1,
                                },
                              }
                              e(t, a, i, (0, eC.rV)(t))
                            },
                          }),
                        ],
                      })),
                    (u[30] = b),
                    (u[31] = I),
                    (u[32] = j),
                    (u[33] = M),
                    (u[34] = C),
                    (u[35] = y),
                    (u[36] = A),
                    (u[37] = s))
                  : (s = u[37]),
                u[38] !== R || u[39] !== s
                  ? ((c = (0, l.jsxs)(l.Fragment, {
                      children: [i, n, (0, l.jsx)(L.$, { routePreview: R, children: s })],
                    })),
                    (u[38] = R),
                    (u[39] = s),
                    (u[40] = c))
                  : (c = u[40]),
                c
              )
            },
          },
        ),
          i())
      } catch (e) {
        i(e)
      }
    })
  },
  CJ4l(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("zTeN"),
      n = a("Wf1j"),
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
            p,
            g,
            h = (0, l.c)(14),
            m = (0, r.gh)(d.Qy),
            f = (0, n.A)()
          h[0] !== f
            ? ((e = f.formatMessage({
                id: "space.slides.tabs.label",
                defaultMessage: "Slide collections",
                description:
                  "Accessible label for switching between all, pinned, owned, and shared presentations on the Slides page",
              })),
              (h[0] = f),
              (h[1] = e))
            : (e = h[1])
          let v = m.value.slidesCollection ?? "all"
          return (
            h[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = {
                  key: "all",
                  name: (0, i.jsx)(s.A, {
                    id: "space.slides.tabs.all",
                    defaultMessage: "All",
                    description: "Slides tab showing owned presentations and presentations shared with the user",
                  }),
                }),
                (h[2] = t))
              : (t = h[2]),
            h[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = {
                  key: "pinned",
                  name: (0, i.jsx)(s.A, {
                    id: "space.slides.tabs.pinned",
                    defaultMessage: "Pinned",
                    description: "Slides tab showing native Slides the user has pinned",
                  }),
                }),
                (h[3] = a))
              : (a = h[3]),
            h[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = {
                  key: "owned",
                  name: (0, i.jsx)(s.A, {
                    id: "space.slides.tabs.owned",
                    defaultMessage: "Yours",
                    description: "Slides tab showing presentations owned by the user",
                  }),
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
                          name: (0, i.jsx)(s.A, {
                            id: "space.slides.tabs.shared",
                            defaultMessage: "Shared with you",
                            description: "Slides tab showing presentations shared with the user",
                          }),
                        },
                      ]
                    : []),
                ]),
                (h[5] = m.value.slidesIncludeShared),
                (h[6] = u))
              : (u = h[6]),
            h[7] !== m
              ? ((p = (e) => (0, d.zl)(m, (0, d.SE)({ ...m.value, slidesCollection: e, search: "" }))),
                (h[7] = m),
                (h[8] = p))
              : (p = h[8]),
            h[9] !== e || h[10] !== v || h[11] !== u || h[12] !== p
              ? ((g = (0, i.jsx)(o.t, {
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: e,
                  selectedKey: v,
                  tabs: u,
                  onSelect: p,
                })),
                (h[9] = e),
                (h[10] = v),
                (h[11] = u),
                (h[12] = p),
                (h[13] = g))
              : (g = h[13]),
            g
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
    var i = a("QBk8"),
      l = a("zTeN"),
      r = a("E8Sp"),
      n = a("SGsN"),
      s = a("e1xH"),
      o = a("yGJW"),
      d = a("WFY2"),
      c = a("eShZ"),
      u = a("pyoT"),
      p = a("Kw4a"),
      g = a("i1Zq"),
      h = a("pyo2"),
      m = a("JkZJ"),
      f = a("nndI"),
      v = a("SCmN"),
      y = a("WP5H")
    async function b(e, t, a, { showErrorToast: r = !1 } = {}) {
      let d = e.get(v.jm)
      if (
        !e.get(s.pagesEnabled$) ||
        null == d ||
        e.get(v.av, d.key) ||
        ("creating" === e.get(g.J, d.key) && (null != a || null != e.get(f.ax)[d.key]))
      )
        return null
      let m = e.get(p.vy),
        y = (0, u.watchSpaceAccount)(e, d.accountId, d.userId)
      e.set(v.av, d.key, !0)
      let x = e.get(v.Ev),
        _ = e.get(f.ax)[d.key],
        w = a ?? _ ?? (x?.identityKey === d.key ? x.pageId : null)
      try {
        if (
          null == w &&
          (await (0, g.m)(e, t, !1, m ? "onboarding" : "legacy"),
          await e.when(({ get: e }) => e(v.jm)?.key !== d.key || "creating" !== e(g.J, d.key)),
          y.signal.throwIfAborted(),
          (w = e.get(f.ax)[d.key] ?? null),
          null == w)
        )
          return null
        ;((x?.identityKey !== d.key || x.pageId !== w) &&
          e.set(v.Ev, { identityKey: d.key, pageId: w, awaitingPaint: !1 }),
          e.get(v.oA, d.key).visible && e.set(v.oA, d.key, { visible: !0, pageId: w }))
        try {
          await e.query.fetch(u.spacePageQuery$, w)
        } catch (r) {
          y.signal.throwIfAborted()
          let a = e.get(f.DF)[d.key] ?? e.get(f.bs)[d.key]?.idempotency_key,
            i = a ?? f.qu
          if (
            !m ||
            !e.get(p.vy) ||
            !e.get(h.aQ).includes("welcome") ||
            w !== _ ||
            !(r instanceof c.fk) ||
            ((403 !== r.status || "page_read_forbidden" !== r.errorCode) &&
              (404 !== r.status || ("page_not_found" !== r.errorCode && "page_trashed" !== r.errorCode))) ||
            (404 !== r.status && i.startsWith("space-welcome-readable:"))
          )
            throw r
          if (404 === r.status && null == a)
            return (
              (0, l.Y)(e, (e) => {
                ;((0, h.$V)(e, "welcome"), e.set(v.Dj, d.key, "failed"), e.set(v.Ev, null))
              }),
              null
            )
          if (
            ((0, l.Y)(e, (e) => {
              ;(404 !== r.status && e.set(f.DF, (e) => ({ ...e, [d.key]: "space-welcome-readable:" + i })),
                (0, v.YB)(e, d.key))
            }),
            await (0, g.m)(e, t, !1, "onboarding", 404 === r.status ? i : void 0),
            y.signal.throwIfAborted(),
            (w = e.get(f.ax)[d.key] ?? null),
            null == w)
          )
            return null
          ;(e.set(v.Ev, { identityKey: d.key, pageId: w, awaitingPaint: !1 }),
            await e.query.fetch(u.spacePageQuery$, w))
        }
        return (
          y.signal.throwIfAborted(),
          m && e.get(p.vy) && e.get(f.ax)[d.key] === w && (0, f.gC)(e, d.key, w),
          e.set(f.ax, (e) => ({ ...e, [d.key]: w })),
          e.set(v.Dj, d.key, "available"),
          w
        )
      } catch (a) {
        if (!y.signal.aborted) {
          if (m && a instanceof c.fk && "page_deleted" === a.errorCode)
            return ((0, h.$V)(e, "welcome"), e.set(v.Ev, null), null)
          if (
            (m &&
              e.get(p.vy) &&
              (0, o.yy)(e, i.CodexSpacesOnboarding, {
                action: i.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_WELCOME_PAGE_FAILED,
                item: i.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
                pageId: w ?? void 0,
                failureOperation:
                  i.CodexSpacesOnboardingFailureOperation.CODEX_SPACES_ONBOARDING_FAILURE_OPERATION_OPEN,
              }),
            e.set(v.Dj, d.key, "failed"),
            !r)
          )
            return null
          e.get(n.Id).danger(
            t.formatMessage({
              id: "space.gettingStartedPages.openError",
              defaultMessage: "Could not open the Getting Started Page. Try again.",
              description:
                "Error when creating or opening the Getting Started Page fails; the welcome card remains available to retry",
            }),
            { errorAnalytics: { toastId: "space.gettingStartedPages.openError" } },
          )
        }
        return null
      } finally {
        ;(y.stop(), e.set(v.av, d.key, !1))
      }
    }
    a.d(
      t,
      {},
      {
        a: async function (e, t, a, i) {
          let l = e.get(v.jm),
            n = i ?? e.get(v.i$, (0, m.eg)(a)),
            { pathname: s, search: o } = e.get(r.gM)
          if (null == l || null == n) return
          let c = await b(e, a, n.pageId, { showErrorToast: !0 })
          if (
            null == c ||
            e.get(v.jm)?.key !== l.key ||
            e.get(r.gM).pathname !== s ||
            e.get(r.gM).search !== o ||
            i?.isCurrent?.() === !1
          )
            return
          let u = e.get(v.Ev)
          ;(i?.onOpenPage != null
            ? i.onOpenPage(c)
            : await t(`/space/${c}`, { state: { spaceSidebarAccountId: l.accountId, spaceSidebarPersonal: !0 } }),
            null != u && e.get(v.Ev) === u && e.get(v.jm)?.key === l.key && e.set(v.Ev, { ...u, awaitingPaint: !0 }),
            (0, y.Q)(e, c, () => e.get(v.jm)?.key === l.key && e.get(f.ax)[l.key] === c).catch(() => {
              d.v.warning("Failed to save the Welcome Page's default icon")
            }))
        },
        h: b,
      },
    )
  },
  ynMj(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("oyxz"),
      n = a("FrrB"),
      s = a("RNul")
    a.d(
      t,
      {},
      {
        B: function () {
          let e,
            t = (0, l.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(n.A, {
                  layout: "page",
                  title: (0, i.jsx)(r.A, {
                    id: "codex.space.libraryAsset.loadError",
                    defaultMessage: "Unable to load items",
                    description: "Error shown when a built-in Library asset page in Spaces cannot load its items",
                  }),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
        V: function () {
          let e,
            t = (0, l.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)("div", {
                  className: "flex min-h-96 items-center justify-center",
                  children: (0, i.jsx)(s.y, {}),
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
    var i = a("Hl6a"),
      l = a("PFjh"),
      r = a("CWeU"),
      n = a("nlNF"),
      s = a("OWtl"),
      o = a("DHW4")
    let d = (0, i.vP)(s.u, null)
    function c(e) {
      let t = new URL(e, "https://chatgpt.com")
      return (
        "/space" === t.pathname && "suggested" === t.searchParams.get("tab") && t.searchParams.delete("tab"),
        t.searchParams.sort(),
        t.pathname + t.search
      )
    }
    function u(e) {
      return null == e ? null : c(e.pathname + e.search)
    }
    a.d(
      t,
      {},
      {
        RP: function (e, t, a, i, s, p) {
          let g,
            h = c(i)
          if (
            document.hidden ||
            (c(a) === h &&
              null ==
                p
                  ?.closest("[data-app-shell-frame]")
                  ?.querySelector(
                    `[data-app-shell-focus-area="main"][inert] [data-drive-collection="${t}"]:not([data-app-shell-active-page="false"] *)`,
                  ))
          )
            return
          e.get(d)?.cancel("superseded")
          let m = e.get(r.tE),
            f = e.get(r.hp),
            v = { collection: t },
            y = {
              targetHref: h,
              finish(t) {
                e.get(d) === y &&
                  b.isPending() &&
                  (document.hidden
                    ? b.finish("excluded", "backgrounded")
                    : "error" === t
                      ? b.finish("failure", "collection_failed")
                      : ((v.content_state = t), b.milestone("content_usable")))
              },
              cancel(e = "navigation_away") {
                "superseded" === e ? b.finish("superseded") : b.finish("cancelled", e)
              },
            },
            b = (0, o.r)((0, l.dj)(e), {
              action: "open_drive_collection",
              metricFamily: "ui_experience",
              documentType: "home",
              backingType: "drive",
              completionMilestone: "content_usable",
              startedAtMs: s,
              driveCollection: v,
              onTerminal() {
                ;(g?.(), e.get(d) === y && e.set(d, null))
              },
            })
          if (!b.isPending()) return
          let x = u(e.get(n.x2))
          ;((g = e.watch(({ get: e }) => {
            let t = u(e(n.x2))
            e(r.tE) !== m || e(r.hp) !== f
              ? b.finish("excluded", "account_changed")
              : t !== x && ((x = t), t !== h && y.cancel())
          })),
            e.set(d, y))
        },
        gK: c,
        h1: d,
      },
    )
  },
  f67h(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      r = a("zTeN"),
      n = a("dJBt"),
      s = a("lJyx")
    a.d(
      t,
      {},
      {
        k: function (e) {
          let t,
            a = (0, l.c)(3),
            { milestone: o } = e,
            d = (0, r.Ul)(s.a)
          return (
            a[0] !== d || a[1] !== o
              ? ((t =
                  null == d
                    ? null
                    : (0, i.jsx)(n.X, { requireVisibleAtPaint: !0, paintIdentity: d, onPaint: () => d.paint(o) })),
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
    var i = a("zTeN"),
      l = a("mNPx"),
      r = a("yGJW"),
      n = a("GaA7"),
      s = a("OWtl"),
      o = a("WFY2")
    let d = (0, i.SZ)(
      s.u,
      () => null,
      ({ get: e, set: t }) => {
        let a = n.appServices?.pageCreationIntents
        if (null == a) return void t([])
        let i = !0,
          s = a.subscribe((e) => {
            i && t(e)
          })
        return (
          Promise.resolve(s).catch((a) => {
            i && ((0, l.ZD)(e(r.YV), "pages.native.creation-intents.load", a), t(null))
          }),
          () => {
            ;((i = !1), s[Symbol.dispose]())
          }
        )
      },
    )
    a.d(
      t,
      {},
      {
        J7: async function (e, t, a) {
          if (n.appServices?.pageCreationIntents == null) throw Error("native_page_creation_storage_unavailable")
          await n.appServices.pageCreationIntents.update({
            kind: t,
            accountId: e.accountId,
            userId: e.userId,
            localPageId: e.localPageId,
            updateIds: a,
          })
        },
        Oy: async function (e) {
          if (n.appServices?.pageCreationIntents == null) throw Error("native_page_creation_storage_unavailable")
          await n.appServices.pageCreationIntents.update({ kind: "save", entry: e })
        },
        Q_: d,
        Ru: async function (e, t) {
          if (n.appServices?.pageCreationIntents == null) throw Error("native_page_creation_storage_unavailable")
          await n.appServices.pageCreationIntents.update({
            kind: "progress",
            accountId: e.accountId,
            userId: e.userId,
            localPageId: e.localPageId,
            progress: t,
          })
        },
        Uv: async function (e) {
          if ("string" == typeof e.initialUpdate) return e.initialUpdate
          if (n.appServices?.pageCreationIntents?.readInitialUpdate == null)
            throw Error("native_page_creation_storage_unavailable")
          return n.appServices.pageCreationIntents.readInitialUpdate({
            accountId: e.accountId,
            userId: e.userId,
            localPageId: e.localPageId,
          })
        },
        m: async function (e) {
          try {
            if (n.appServices?.pageCreationIntents == null) return !1
            return (
              await n.appServices.pageCreationIntents.update({
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
      },
    )
  },
  sSEJ(e, t, a) {
    var i = a("QosV"),
      l = a("zTeN"),
      r = a("zd8w"),
      n = a("SPnB"),
      s = a("rpnz"),
      o = a("mNPx"),
      d = a("e1xH"),
      c = a("pyoT"),
      u = a("yGJW"),
      p = a("OWtl"),
      g = a("OMIV"),
      h = a("CYRu")
    let m = (0, l.un)(p.u, ({ get: e }) => null != e(g.M9) && !e(g.RS) && "loading" !== e(d.GU))
    a.d(
      t,
      {},
      {
        y: function () {
          let e,
            t,
            d = (0, i.c)(3),
            g = (0, l.gh)(p.u)
          return (
            d[0] !== g
              ? ((e = () => {
                  var e
                  let t, i, l
                  return (
                    (e = g),
                    (t = !0),
                    (i = new Set()),
                    (l = e.watch(({ get: l }) => {
                      let r = l(c.spaceAccountId$),
                        d = l(n.chatGptAuthenticatedUserId$),
                        p = l(h.Q_)
                      if (null == r || null == d || null == p) return
                      let g = l(s.Sq, r),
                        f = l(m),
                        v = p.filter(
                          (e) =>
                            e.accountId === r &&
                            e.userId === d &&
                            !i.has(e.localPageId) &&
                            (e.progress?.serverPageId != null || e.progress?.outcome === "rejected" || f) &&
                            !g.some((t) => t.localPageId === e.localPageId && t.native?.userId === d),
                        )
                      if (0 !== v.length) {
                        for (let e of v) i.add(e.localPageId)
                        Promise.all([
                          a.e(593475),
                          a.e(205803),
                          a.e(339467),
                          a.e(632285),
                          a.e(498983),
                          a.e(388023),
                          a.e(68876),
                          a.e(357621),
                          a.e(723519),
                          a.e(676388),
                          a.e(695347),
                          a.e(88880),
                          a.e(800497),
                          a.e(904907),
                        ])
                          .then(a.bind(a, "LWSA"))
                          .then(async ({ startNativePageCreation: a }) => {
                            if (t && e.get(c.spaceAccountId$) === r && e.get(n.chatGptAuthenticatedUserId$) === d)
                              for (let i of v) {
                                let l
                                try {
                                  l = await (0, h.Uv)(i)
                                } catch (a) {
                                  t &&
                                    e.get(c.spaceAccountId$) === r &&
                                    e.get(n.chatGptAuthenticatedUserId$) === d &&
                                    (0, o.ZD)(e.get(u.YV), "pages.native.creation.recover", a)
                                  continue
                                }
                                if (!t || e.get(c.spaceAccountId$) !== r || e.get(n.chatGptAuthenticatedUserId$) !== d)
                                  return
                                e
                                  .get(h.Q_)
                                  ?.some(
                                    (e) => e.localPageId === i.localPageId && e.accountId === r && e.userId === d,
                                  ) &&
                                  (i.progress?.serverPageId != null ||
                                    i.progress?.outcome === "rejected" ||
                                    e.get(m)) &&
                                  a(e, r, i.documentType, i.parentPageId, void 0, void 0, {
                                    ...i,
                                    initialUpdate: l,
                                  }).completion.catch(() => void 0)
                              }
                          })
                          .finally(() => {
                            for (let e of v) i.delete(e.localPageId)
                          })
                      }
                    })),
                    () => {
                      ;((t = !1), l())
                    }
                  )
                }),
                (t = [g]),
                (d[0] = g),
                (d[1] = e),
                (d[2] = t))
              : ((e = d[1]), (t = d[2])),
            (0, r.useEffect)(e, t),
            null
          )
        },
      },
    )
  },
  QinB(e, t, a) {
    a.d(t, { b: () => V, N: () => W })
    var i = a("ABep"),
      l = a("QosV"),
      r = a("sSh9"),
      n = a("LpCf"),
      s = a("on57"),
      o = a("zTeN"),
      d = a("f6KK"),
      c = a("zd8w"),
      u = a("oyxz"),
      p = a("Wf1j"),
      g = a("Ot7V"),
      h = a("evwP"),
      m = a("v0Gf"),
      f = a("b8aL"),
      v = a("GjFs"),
      y = a("aQLA"),
      b = a("L0Gp"),
      x = a("tINb"),
      _ = a("iIsU"),
      w = a("Lo8c"),
      S = a("SuyB"),
      C = a("dQ4w"),
      I = a("OWtl"),
      j = a("hCg2"),
      A = a("rFJP"),
      P = a("Gxx1"),
      E = a("UOei"),
      k = a("p5Yg"),
      T = a("Hpb6"),
      M = a("v7qY"),
      O = a("F5N3"),
      N = a("djbx"),
      L = a("HOLv"),
      U = a("TxRk"),
      R = a("HRo6"),
      F = a("NcGW"),
      D = a("jOAm"),
      G = a("VZGO"),
      B = a("K9a9"),
      z = a("msAz")
    function H(e) {
      let t,
        a,
        o,
        d,
        g,
        h,
        m,
        f,
        v,
        y,
        b,
        S,
        I = (0, l.c)(43),
        {
          units: j,
          pageId: H,
          imagesActive: $,
          horizontalInset: V,
          loadingFallback: Q,
          symbol: W,
          title: Z,
          variant: Y,
        } = e,
        q = void 0 === Y ? "default" : Y,
        K = (0, p.A)(),
        [J, X] = (0, c.useState)(!1),
        ee = (0, c.useRef)(null),
        et = (0, c.useContext)(O.$w),
        ea = "template" !== q,
        ei = (0, c.useRef)(null)
      ;(I[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => {
            ;(ei.current?.cancelCleanup?.(), ei.current?.dispose())
          }),
          (a = []),
          (I[0] = t),
          (I[1] = a))
        : ((t = I[0]), (a = I[1])),
        (0, c.useInsertionEffect)(t, a))
      let [el, er] = (0, c.useState)(null)
      I[2] !== et || I[3] !== K || I[4] !== ea || I[5] !== j || I[6] !== q
        ? ((o = (e) => {
            let t = ee.current
            if (null == e || null == t) return
            let a = ei.current
            if (
              (a?.cancelCleanup?.(),
              a?.viewport === e &&
                a.units === j &&
                a.intl === K &&
                a.previewVideos === ea &&
                a.variant === q &&
                a.owner === et)
            )
              return a.resume()
            a?.dispose()
            let l = (0, _.Je)(K.formatMessage),
              n = (0, x.FJ)((0, x.f3)(l.parse(""), j, l)),
              s = (function (e, t, a, l) {
                let n = T.ZF.nodesFromSchema(e.type.schema),
                  s = T.ZF.marksFromSchema(e.type.schema),
                  o = [],
                  d = [],
                  c = []
                e.descendants((t, a) => {
                  t.type.name === G.H5 && c.push(e.resolve(a))
                })
                let u = (e) => {
                  let a = T.ZF.renderSpec(t, e),
                    l = (0, R.V)(a.dom)
                  return (
                    null != l &&
                      o.push(
                        (0, M.createPortal)(
                          (0, i.jsx)(U.OQ, { icon: l.icon, iconSizing: l.iconSizing }),
                          l.container,
                          String(o.length),
                        ),
                      ),
                    a
                  )
                }
                for (let { name: t, spec: a } of Object.values(e.type.schema.nodes)) {
                  let e = a.toDOM
                  !0 === a.inlineMention && null != e && (n[t] = (t) => u(e(t)))
                }
                for (let { name: t, spec: a } of Object.values(e.type.schema.marks)) {
                  let e = a.toDOM
                  !0 === a.inlineMention && null != e && (s[t] = (t, a) => u(e(t, a)))
                }
                s.link = () => ["a", 0]
                let p = n.task_list_item
                n.task_list_item = (e) => {
                  let a = T.ZF.renderSpec(t, p(e)),
                    l = a.dom.querySelector(".task-list-item-checkbox")
                  return (
                    null != l &&
                      (l.replaceChildren(),
                      o.push(
                        (0, M.createPortal)(
                          (0, i.jsx)("div", {
                            className: "relative flex items-center",
                            children: (0, i.jsx)(N.S, {
                              checked: !0 === e.attrs.checked,
                              disabled: !0,
                              variant: "checklist",
                            }),
                          }),
                          l,
                          String(o.length),
                        ),
                      )),
                    a
                  )
                }
                let g = 0
                for (let [e, i] of ((n[G.H5] = (e) => {
                  let a = (0, A.n)(t, e, c[g++])
                  return (d.push(a), a.container)
                }),
                l &&
                  (n[B.pO.video] = (e) => {
                    let { url: a, title: i } = B.x4.parse(e.attrs),
                      l = t.createElement("div")
                    return (
                      (l.className = "w-full"),
                      d.push({
                        container: l,
                        mediaType: "video",
                        attrs: { src: a, alt: i, title: i },
                        geometry: void 0,
                        layout: "normal",
                        standalone: !0,
                        inTableCell: !1,
                      }),
                      l
                    )
                  }),
                (n[C.oD] = (e) => {
                  let { title: t } = C.TZ.parse(e.attrs)
                  return [
                    "div",
                    { class: "text-sm text-secondary" },
                    a.formatMessage(
                      {
                        id: "codex.page.preview.visualization",
                        defaultMessage: "{title} — open the page to interact",
                        description:
                          "Placeholder for an interactive visualization in a Page hover preview; title is the visualization title",
                      },
                      { title: t },
                    ),
                  ]
                }),
                Object.entries(n)))
                  "text" !== e &&
                    (n[e] = (e) => {
                      let a = T.ZF.renderSpec(t, i(e))
                      return (
                        null != a.contentDOM ||
                          "BR" === a.dom.nodeName ||
                          a.dom.hasAttribute("contenteditable") ||
                          (a.dom.contentEditable = "false"),
                        a
                      )
                    })
                let h = new T.ZF(n, s),
                  m = t.createElement("div")
                ;((m.className = `ProseMirror ${r.p.content} ${z.A.PageDocument} ${z.A.PagePreview}`),
                  (m.contentEditable = "false"))
                let f = 0
                return {
                  dom: m,
                  portals: o,
                  images: d,
                  appendBlocks(a) {
                    for (; f < a;) {
                      let a = e.child(f++),
                        i = h.serializeNode(a, { document: t }),
                        l = (0, w.NI)(t, a, i)
                      ;((0, D.Ih)(a) && (l.dataset.pageImageBlock = "true"),
                        "table" === a.type.name && l.firstElementChild?.classList.add("horizontal-scroll-fade-mask"),
                        "paragraph" === a.type.name &&
                          i instanceof HTMLElement &&
                          "normal" === l.dataset.pageBlockLayout &&
                          i.removeAttribute("data-page-layout"),
                        l.querySelectorAll("p,h1,h2,h3,h4,h5,h6").forEach((e) => {
                          ;(0 === e.childNodes.length || e.lastChild?.nodeName === "BR") &&
                            e.append(t.createElement("br"))
                        }),
                        m.append(l))
                    }
                  },
                }
              })(n, t.ownerDocument, K, ea),
              o = Math.min(4, n.childCount)
            ;(s.appendBlocks(o), t.append(s.dom))
            let d = () => {
              er({ portals: [...s.portals], images: [...s.images] })
            }
            d()
            let c = 1,
              u = !1,
              p = () => {
                ;((t.style.transform = `scale(${c})`),
                  X(!0),
                  u && ((o = Math.min(n.childCount, 2 * o)), s.appendBlocks(o), d(), k.Gt.read(g)))
              },
              g = () => {
                let a = t.offsetWidth,
                  i = e.clientWidth
                if (0 === a || 0 === i) return
                c = i / a
                let l = parseFloat(getComputedStyle(t).paddingBottom) || 0
                ;((u = o < n.childCount && (t.scrollHeight - l) * c < e.clientHeight), k.Gt.update(p))
              },
              h = new ResizeObserver(() => {
                k.Gt.read(g)
              }),
              m = {
                variant: q,
                previewVideos: ea,
                viewport: e,
                units: j,
                intl: K,
                owner: et,
                dispose: () => {
                  ;(s.dom.remove(), ei.current === m && (ei.current = null))
                },
                resume: () => (
                  h.observe(e),
                  h.observe(t),
                  () => {
                    ;(h.disconnect(),
                      (0, k.WG)(g),
                      (0, k.WG)(p),
                      ei.current === m &&
                        (null == et ? m.dispose() : (m.cancelCleanup = (0, O.UO)(et, m.dispose, "layout"))))
                  }
                ),
              }
            return ((ei.current = m), m.resume())
          }),
          (I[2] = et),
          (I[3] = K),
          (I[4] = ea),
          (I[5] = j),
          (I[6] = q),
          (I[7] = o))
        : (o = I[7])
      let en = o,
        es = V && "overflow-hidden",
        eo = V && "in-[[data-space-preview-stage]]:[--text-heading-app:var(--font-heading-2xl-size)]"
      ;(I[8] !== es || I[9] !== eo || I[10] !== q
        ? ((d = (0, s.A)(
            z.A.PageDocumentTheme,
            "relative h-full",
            es,
            eo,
            "template" === q && [
              z.A.PageTemplateThumbnail,
              "[--font-content:var(--font-sans)] [--text-page-body:var(--font-heading-md-size)]",
            ],
          )),
          (I[8] = es),
          (I[9] = eo),
          (I[10] = q),
          (I[11] = d))
        : (d = I[11]),
        I[12] !== J || I[13] !== Q
          ? ((g = !J && Q && (0, i.jsx)("div", { className: "absolute inset-0", children: Q })),
            (I[12] = J),
            (I[13] = Q),
            (I[14] = g))
          : (g = I[14]),
        I[15] !== V || I[16] !== q
          ? ((h = (0, s.A)(
              r.p.root,
              z.A.PageThumbnail,
              "origin-top-left will-change-transform",
              V ? "document-thumbnail-paper" : ["py-8", "template" === q ? "w-90 px-7" : "w-sm px-0"],
            )),
            (I[15] = V),
            (I[16] = q),
            (I[17] = h))
          : (h = I[17]))
      let ed = J ? void 0 : "hidden"
      ;(I[18] !== ed ? ((m = { ...n.w, visibility: ed }), (I[18] = ed), (I[19] = m)) : (m = I[19]),
        I[20] !== W || I[21] !== q
          ? ((f =
              "template" !== q &&
              void 0 !== W &&
              W?.kind !== "none" &&
              (0, i.jsx)("div", {
                className: "mb-6",
                children: (0, i.jsx)(F.h, {
                  className: "text-5xl",
                  symbol: W,
                  size: 48,
                  defaultIcon: (0, i.jsx)(L.I, { className: "size-12 text-tertiary", asset: E.V }),
                }),
              })),
            (I[20] = W),
            (I[21] = q),
            (I[22] = f))
          : (f = I[22]),
        I[23] !== Z || I[24] !== q
          ? ((v =
              void 0 !== Z &&
              (0, i.jsx)("div", {
                className: "mb-6",
                hidden: "template" === q && "" === Z.trim(),
                children: (0, i.jsx)("h1", {
                  className:
                    "template" === q
                      ? "font-sans text-(length:--font-heading-2xl-size) leading-tight font-semibold break-words whitespace-normal text-primary"
                      : (0, s.A)(
                          z.A.PageTitle,
                          "font-semibold break-words",
                          "" === Z.trim() ? "text-tertiary" : "text-default",
                        ),
                  children:
                    "" === Z.trim()
                      ? (0, i.jsx)(u.A, {
                          id: "codex.page.preview.untitledPage",
                          defaultMessage: "Untitled page",
                          description: "Placeholder heading for an untitled Page in a Space grid preview",
                        })
                      : Z,
                }),
              })),
            (I[23] = Z),
            (I[24] = q),
            (I[25] = v))
          : (v = I[25]),
        I[26] !== m || I[27] !== f || I[28] !== v || I[29] !== h
          ? ((y = (0, i.jsxs)("div", { ref: ee, className: h, style: m, children: [f, v] })),
            (I[26] = m),
            (I[27] = f),
            (I[28] = v),
            (I[29] = h),
            (I[30] = y))
          : (y = I[30]))
      let ec = el?.portals
      return (
        I[31] !== $ || I[32] !== H || I[33] !== el?.images || I[34] !== el?.images.map
          ? ((b = el?.images.map((e, t) =>
              (0, M.createPortal)((0, i.jsx)(P.l, { entry: e, pageId: H, active: $ }), e.container, String(t)),
            )),
            (I[31] = $),
            (I[32] = H),
            (I[33] = el?.images),
            (I[34] = el?.images.map),
            (I[35] = b))
          : (b = I[35]),
        I[36] !== en || I[37] !== y || I[38] !== ec || I[39] !== b || I[40] !== d || I[41] !== g
          ? ((S = (0, i.jsxs)("div", { ref: en, className: d, children: [g, y, ec, b] })),
            (I[36] = en),
            (I[37] = y),
            (I[38] = ec),
            (I[39] = b),
            (I[40] = d),
            (I[41] = g),
            (I[42] = S))
          : (S = I[42]),
        S
      )
    }
    var $ = a("sUVK")
    function V(e) {
      let t,
        a,
        r,
        n = (0, l.c)(18),
        { document: s, pageId: o, blockIndex: d, onOpen: p } = e,
        g = (0, c.useRef)(null)
      if (s.units.every(Q)) {
        let e, t, a
        return (
          n[0] !== p ? ((e = () => p(null)), (n[0] = p), (n[1] = e)) : (e = n[1]),
          n[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(h.W, {
                className: "min-h-0 flex-1 select-none",
                children: (0, i.jsx)("span", {
                  role: "status",
                  children: (0, i.jsx)(u.A, {
                    id: "codex.page.preview.empty",
                    defaultMessage: "This page is empty",
                    description: "Shown in a hover preview when the referenced Page has no document content",
                  }),
                }),
              })),
              (n[2] = t))
            : (t = n[2]),
          n[3] !== s.title || n[4] !== o || n[5] !== e
            ? ((a = (0, i.jsx)(j.xU, { pageId: o, title: s.title, onOpen: e, children: t })),
              (n[3] = s.title),
              (n[4] = o),
              (n[5] = e),
              (n[6] = a))
            : (a = n[6]),
          a
        )
      }
      return (
        n[7] !== p ? ((t = () => p(g.current?.() ?? null)), (n[7] = p), (n[8] = t)) : (t = n[8]),
        n[9] !== d || n[10] !== s.units || n[11] !== o
          ? ((a = (0, i.jsx)(Z, { pageId: o, units: s.units, blockIndex: d, getVisibleBlockRef: g })),
            (n[9] = d),
            (n[10] = s.units),
            (n[11] = o),
            (n[12] = a))
          : (a = n[12]),
        n[13] !== s.title || n[14] !== o || n[15] !== t || n[16] !== a
          ? ((r = (0, i.jsx)(j.xU, { pageId: o, title: s.title, onOpen: t, children: a })),
            (n[13] = s.title),
            (n[14] = o),
            (n[15] = t),
            (n[16] = a),
            (n[17] = r))
          : (r = n[17]),
        r
      )
    }
    function Q(e) {
      return "markdown" === e.kind && "" === e.markdown.trim()
    }
    function W(e) {
      let t,
        a,
        r,
        n,
        o = (0, l.c)(17),
        {
          ref: d,
          document: c,
          pageId: u,
          imagesActive: p,
          horizontalInset: g,
          symbol: h,
          showTitle: m,
          loadingFallback: f,
          variant: v,
        } = e,
        y = void 0 === p || p,
        b = void 0 === g || g,
        x = void 0 === v ? "default" : v
      o[0] !== c ? ((t = (0, $.p)(c)), (o[0] = c), (o[1] = t)) : (t = o[1])
      let _ = t,
        w = b && "overflow-hidden"
      o[2] !== w ? ((a = (0, s.A)("h-full min-h-0 select-none", w)), (o[2] = w), (o[3] = a)) : (a = o[3])
      let S = (void 0 !== m && m) || "template" === x ? c.title : void 0
      return (
        o[4] !== b || o[5] !== y || o[6] !== f || o[7] !== u || o[8] !== h || o[9] !== S || o[10] !== _ || o[11] !== x
          ? ((r = (0, i.jsx)(H, {
              pageId: u,
              units: _,
              imagesActive: y,
              horizontalInset: b,
              loadingFallback: f,
              symbol: h,
              title: S,
              variant: x,
            })),
            (o[4] = b),
            (o[5] = y),
            (o[6] = f),
            (o[7] = u),
            (o[8] = h),
            (o[9] = S),
            (o[10] = _),
            (o[11] = x),
            (o[12] = r))
          : (r = o[12]),
        o[13] !== d || o[14] !== a || o[15] !== r
          ? ((n = (0, i.jsx)("div", { ref: d, "aria-hidden": !0, className: a, inert: !0, children: r })),
            (o[13] = d),
            (o[14] = a),
            (o[15] = r),
            (o[16] = n))
          : (n = o[16]),
        n
      )
    }
    function Z(e) {
      let t,
        a,
        u,
        g,
        h,
        v,
        j,
        A,
        E,
        k,
        T,
        M,
        O,
        N,
        L,
        U = (0, l.c)(44),
        { pageId: R, units: F, blockIndex: D, getVisibleBlockRef: G } = e,
        B = (0, o.gh)(I.u),
        H = (0, p.A)(),
        $ = (0, c.useId)()
      U[0] !== $ ? ((t = () => new b.N($)), (U[0] = $), (U[1] = t)) : (t = U[1])
      let [V] = (0, c.useState)(t),
        [Q] = (0, c.useState)(K),
        [W] = (0, c.useState)(q),
        Z = (0, c.useRef)(null)
      ;(U[2] !== D || U[3] !== H.formatMessage || U[4] !== F
        ? ((h = (0, _.Je)(H.formatMessage)),
          (g = null == D ? F.slice(0, 32) : F),
          (a = (0, x.f3)(h.parse(""), g, h)),
          (u = g.length < F.length) &&
            (a.lastChild?.type.name === "list" || a.lastChild?.type.name === "ordered_list") &&
            (a.childCount > 1
              ? (a = a.cut(0, a.content.size - a.lastChild.nodeSize))
              : ((a = (0, x.f3)(h.parse(""), F, h)), (u = !1))),
          (U[2] = D),
          (U[3] = H.formatMessage),
          (U[4] = F),
          (U[5] = a),
          (U[6] = u),
          (U[7] = g),
          (U[8] = h))
        : ((a = U[5]), (u = U[6]), (g = U[7]), (h = U[8])),
        U[9] !== D ||
        U[10] !== V ||
        U[11] !== a ||
        U[12] !== G ||
        U[13] !== u ||
        U[14] !== Q ||
        U[15] !== g ||
        U[16] !== H ||
        U[17] !== h ||
        U[18] !== W ||
        U[19] !== R ||
        U[20] !== B ||
        U[21] !== F
          ? ((v = (e) => {
              let t,
                i,
                l = Z.current
              if (null == l || null == e) return
              let r = (0, S.V)(l, a, {
                  checkboxes: V,
                  pageLinks: { scope: B, pageId: R, intl: H, icons: W },
                  onOpenLink: Y,
                  plugins: [
                    W.createPlugin(h.schema()),
                    Q.plugin,
                    new d.k_({
                      props: {
                        nodeViews: {
                          [C.oD]: (e) => {
                            let { title: t } = C.TZ.parse(e.attrs),
                              a = l.ownerDocument.createElement("div")
                            return (
                              (a.className = "text-sm text-secondary"),
                              (a.textContent = H.formatMessage(
                                {
                                  id: "codex.page.preview.visualization",
                                  defaultMessage: "{title} — open the page to interact",
                                  description:
                                    "Placeholder for an interactive visualization in a Page hover preview; title is the visualization title",
                                },
                                { title: t },
                              )),
                              { dom: a }
                            )
                          },
                        },
                      },
                    }),
                  ],
                }),
                n = (0, x.T4)(a, h, u ? g.length : F.length)
              ;(u &&
                (t = requestAnimationFrame(() => {
                  t = requestAnimationFrame(() => {
                    let e = (0, x.f3)(h.parse(""), F, h)
                    ;((0, S.u)(r, e), (n = (0, x.T4)(e, h, F.length)))
                  })
                })),
                null != G &&
                  (G.current = () => {
                    if (0 === e.scrollTop) return null
                    let t =
                        e.getBoundingClientRect().top +
                        parseFloat(getComputedStyle(e).paddingTop) * (e.currentCSSZoom || 1),
                      a = n.findIndex((e) => {
                        let a = null == e ? null : (0, w.cY)(r, e.from)
                        return a instanceof HTMLElement && a.getBoundingClientRect().bottom > t
                      })
                    return a < 0 ? null : a
                  }))
              let s = null == D ? null : n[D],
                o = null == s ? null : (0, w.cY)(r, s.from),
                c = l.style.paddingBottom
              if (o instanceof HTMLElement) {
                let t = parseFloat(getComputedStyle(l).paddingBottom) || 0,
                  a = () => {
                    let a = e.currentCSSZoom || 1,
                      i = getComputedStyle(e),
                      r = parseFloat(i.paddingTop),
                      n = o.getBoundingClientRect().top,
                      s = Math.max(
                        t,
                        e.clientHeight -
                          r -
                          parseFloat(i.paddingBottom) -
                          (l.getBoundingClientRect().bottom - n) / a +
                          (parseFloat(getComputedStyle(l).paddingBottom) || 0),
                      )
                    ;((l.style.paddingBottom = `${s}px`),
                      e.scrollTo({
                        top: e.scrollTop + (o.getBoundingClientRect().top - e.getBoundingClientRect().top) / a - r,
                      }))
                  }
                a()
                let r = new ResizeObserver(a)
                ;(r.observe(l), r.observe(e))
                let n = new AbortController()
                for (let t of ((i = () => {
                  ;(r.disconnect(), n.abort())
                }),
                ["wheel", "pointerdown", "keydown"]))
                  e.addEventListener(t, i, { passive: !0, signal: n.signal })
              } else e.scrollTo({ top: 0 })
              return () => {
                ;(null != t && cancelAnimationFrame(t),
                  null != G && (G.current = null),
                  i?.(),
                  (l.style.paddingBottom = c),
                  r.destroy())
              }
            }),
            (U[9] = D),
            (U[10] = V),
            (U[11] = a),
            (U[12] = G),
            (U[13] = u),
            (U[14] = Q),
            (U[15] = g),
            (U[16] = H),
            (U[17] = h),
            (U[18] = W),
            (U[19] = R),
            (U[20] = B),
            (U[21] = F),
            (U[22] = v))
          : (v = U[22]))
      let J = v
      ;(U[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = (0, i.jsx)("div", { ref: Z, className: (0, s.A)(r.p.root, "px-0"), style: n.w })), (U[23] = j))
        : (j = U[23]),
        U[24] !== V ? ((A = (0, i.jsx)(y.J, { editable: !1, registry: V })), (U[24] = V), (U[25] = A)) : (A = U[25]),
        U[26] !== W ? ((E = (0, i.jsx)(f.a, { registry: W })), (U[26] = W), (U[27] = E)) : (E = U[27]),
        U[28] !== Q || U[29] !== R
          ? ((k = (0, i.jsx)(P.C, { pageId: R, registry: Q })), (U[28] = Q), (U[29] = R), (U[30] = k))
          : (k = U[30]),
        U[31] !== A || U[32] !== E || U[33] !== k
          ? ((T = (0, i.jsxs)(i.Fragment, { children: [j, A, E, k] })),
            (U[31] = A),
            (U[32] = E),
            (U[33] = k),
            (U[34] = T))
          : (T = U[34]))
      let X = T
      return (
        U[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, s.A)(z.A.PageDocumentTheme, "relative grid min-h-0 flex-1 overflow-hidden")), (U[35] = M))
          : (M = U[35]),
        U[36] !== H
          ? ((O = H.formatMessage({
              id: "codex.page.preview.content",
              defaultMessage: "Page content",
              description: "Accessible label for the scrollable document in a Page hover preview",
            })),
            (U[36] = H),
            (U[37] = O))
          : (O = U[37]),
        U[38] !== J || U[39] !== O
          ? ((N = { "aria-label": O, ref: J, role: "region", tabIndex: 0 }), (U[38] = J), (U[39] = O), (U[40] = N))
          : (N = U[40]),
        U[41] !== X || U[42] !== N
          ? ((L = (0, i.jsx)(m.Q, {
              className: M,
              fade: "mask",
              scrollClassName: "min-h-0 overflow-auto overscroll-contain p-5",
              scrollProps: N,
              children: X,
            })),
            (U[41] = X),
            (U[42] = N),
            (U[43] = L))
          : (L = U[43]),
        L
      )
    }
    function Y(e, t) {
      ;(0 === e.button || 1 === e.button) && (0, g.PQ)({ event: e, href: t, initiator: "markdown_link_click" })
    }
    function q() {
      return new v.k()
    }
    function K() {
      return new A.k()
    }
  },
  sUVK(e, t, a) {
    ;(a("HE5O"),
      a.d(
        t,
        {},
        {
          p: function (e) {
            let t = 32768,
              a = []
            for (let i of e.units.slice(0, 32)) {
              if (t <= 0) break
              ;(a.push({ ...i, markdown: i.markdown.slice(0, t) }), (t -= i.markdown.length))
            }
            return a
          },
        },
      ))
  },
  yjV3(e, t, a) {
    var i = a("HZfM"),
      l = a("SPnB"),
      r = a("TL6G"),
      n = a("nlNF"),
      s = a("atZq"),
      o = a("GZWF")
    function d(e, t, a) {
      if (!e.get(s.kJ) || null == e.get(l.chatGptAuthenticatedAccountId$)) return !1
      let i = (0, o.v_)(e, t)
      if (null == i) return !1
      let d = e.get(n.x2)
      return (
        r.O1.dispatchHostMessage({
          type: "navigate-to-route",
          path: i,
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
          let { pathname: a, routeKind: l } = e.value
          return (
            "other" === l &&
            !0 === t.open &&
            !1 !== t.active &&
            null != t.url &&
            "manual" === t.source &&
            null == t.conversationId &&
            null == t.browserTabId &&
            ("sites_library" === t.initiator || "mcp_app_resource" === t.initiator) &&
            null == (0, i.B6)("/spaces/new", a) &&
            null == (0, i.B6)("/library/share/*", a) &&
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
            ].some((e) => null != (0, i.B6)(e, a)) &&
            d(e, t.url, t.initiator)
          )
        },
        _: d,
      },
    )
  },
  Lowz(e, t, a) {
    var i = a("E8Sp"),
      l = a("SPnB"),
      r = a("nlNF"),
      n = a("atZq"),
      s = a("GZWF")
    a.d(
      t,
      {},
      {
        D: function (e, t) {
          if (!e.get(n.kJ) || null == e.get(l.chatGptAuthenticatedAccountId$)) return !1
          let a = (0, s.v_)(e, t)
          if (null == a) return !1
          let o = e.get(r.x2)
          return (
            (0, i.oo)(e, a, {
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
  UOei(e, t, a) {
    let i = (0, a("iJY0").a)({
      name: "document-text-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 3.084961, y: 2.251953, width: 13.830078, height: 15.49707 },
        visualBounds: { x: 3.084961, y: 2.251953, width: 13.830078, height: 15.49707 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.084961, y: 2.251953, width: 13.830078, height: 15.49707 },
        center: { x: 10, y: 10.000488 },
        insets: { top: 2.251953, right: 3.084961, bottom: 2.250977, left: 3.084961 },
        anchors: { frame: { x: 10, y: 10 }, ink: { x: 10, y: 10.000488 }, foreground: { x: 10, y: 10.000488 } },
      },
      capabilities: ["icon"],
      body: '<path d="M12.5 12.6689C12.8673 12.6689 13.165 12.9667 13.165 13.334C13.165 13.7013 12.8673 13.999 12.5 13.999H7.5C7.13273 13.999 6.83496 13.7013 6.83496 13.334C6.83496 12.9667 7.13273 12.6689 7.5 12.6689H12.5Z" fill="currentColor"/> <path d="M10.833 9.33496C11.2003 9.33496 11.498 9.63273 11.498 10C11.498 10.3673 11.2003 10.665 10.833 10.665H7.5C7.13273 10.665 6.83496 10.3673 6.83496 10C6.83496 9.63273 7.13273 9.33496 7.5 9.33496H10.833Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8809 2.25195C12.7202 2.25195 13.5256 2.58524 14.1191 3.17871L15.9883 5.04785C16.5817 5.64139 16.915 6.44679 16.915 7.28613V14.584C16.9149 16.3318 15.4979 17.749 13.75 17.749H6.25C4.50213 17.749 3.08514 16.3318 3.08496 14.584V5.41699C3.08496 3.66901 4.50202 2.25195 6.25 2.25195H11.8809ZM6.25 3.58203C5.23656 3.58203 4.41504 4.40355 4.41504 5.41699V14.584C4.41521 15.5973 5.23667 16.4189 6.25 16.4189H13.75C14.7633 16.4189 15.5848 15.5973 15.585 14.584V8.58105H13.334C12.0462 8.58105 11.002 7.53677 11.002 6.24902V3.58203H6.25ZM12.332 6.24902C12.332 6.80223 12.7808 7.25098 13.334 7.25098H15.583C15.5739 6.77709 15.3836 6.32409 15.0479 5.98828L13.1787 4.11914C12.9432 3.88364 12.6496 3.72017 12.332 3.63965V6.24902Z" fill="currentColor"/>',
    })
    a.d(t, {}, { V: i })
  },
  Q3xx(e, t, a) {
    let i = (0, a("iJY0").a)({
      name: "globe-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
        visualBounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 2.25, y: 2.25, width: 19.5, height: 19.5 },
        center: { x: 12, y: 12 },
        insets: { top: 2.25, right: 2.25, bottom: 2.25, left: 2.25 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2.25C17.3848 2.25 21.75 6.61522 21.75 12C21.75 17.3848 17.3848 21.75 12 21.75C6.61522 21.75 2.25 17.3848 2.25 12C2.25 6.61522 6.61522 2.25 12 2.25ZM8.76465 12.75C8.84448 14.8491 9.25506 16.7064 9.85645 18.0596C10.1928 18.8165 10.5746 19.3822 10.96 19.749C11.3415 20.1122 11.6918 20.25 12 20.25C12.3082 20.25 12.6585 20.1122 13.04 19.749C13.4254 19.3822 13.8072 18.8165 14.1436 18.0596C14.7449 16.7064 15.1555 14.8491 15.2354 12.75H8.76465ZM3.78613 12.75C4.07269 15.9289 6.16113 18.5852 9.02344 19.6934C8.82867 19.3769 8.64854 19.0339 8.48633 18.6689C7.78695 17.0953 7.34505 15.0228 7.26465 12.75H3.78613ZM16.7354 12.75C16.655 15.0228 16.213 17.0953 15.5137 18.6689C15.3514 19.0341 15.1705 19.3768 14.9756 19.6934C17.8383 18.5854 19.9273 15.9292 20.2139 12.75H16.7354ZM9.02344 4.30566C6.16096 5.41377 4.0727 8.07095 3.78613 11.25H7.26465C7.34505 8.97717 7.78695 6.90465 8.48633 5.33105C8.64866 4.96583 8.8285 4.62234 9.02344 4.30566ZM12 3.75C11.6918 3.75 11.3415 3.88785 10.96 4.25098C10.5746 4.61779 10.1928 5.18354 9.85645 5.94043C9.25506 7.29356 8.84448 9.15085 8.76465 11.25H15.2354C15.1555 9.15085 14.7449 7.29356 14.1436 5.94043C13.8072 5.18354 13.4254 4.61779 13.04 4.25098C12.6585 3.88785 12.3082 3.75 12 3.75ZM14.9756 4.30566C15.1706 4.62246 15.3513 4.96567 15.5137 5.33105C16.213 6.90465 16.655 8.97717 16.7354 11.25H20.2139C19.9273 8.07063 17.8385 5.41357 14.9756 4.30566Z" fill="currentColor"/>',
    })
    a.d(t, {}, { U: i })
  },
  L4Jq(e, t, a) {
    let i = (0, a("iJY0").a)({
      name: "page-text-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 3.75, y: 2.75, width: 16.5, height: 18.5 },
        visualBounds: { x: 3.75, y: 2.75, width: 16.5, height: 18.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.75, y: 2.75, width: 16.5, height: 18.5 },
        center: { x: 12, y: 12 },
        insets: { top: 2.75, right: 3.75, bottom: 2.75, left: 3.75 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M13 13.25C13.4142 13.25 13.75 13.5858 13.75 14C13.75 14.4142 13.4142 14.75 13 14.75H9C8.58579 14.75 8.25 14.4142 8.25 14C8.25 13.5858 8.58579 13.25 9 13.25H13Z" fill="currentColor"/> <path d="M15 9.25C15.4142 9.25 15.75 9.58579 15.75 10C15.75 10.4142 15.4142 10.75 15 10.75H9C8.58579 10.75 8.25 10.4142 8.25 10C8.25 9.58579 8.58579 9.25 9 9.25H15Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7002 2.75C18.6607 2.75011 20.2499 4.33935 20.25 6.2998V17.7002C20.2499 19.6607 18.6607 21.2499 16.7002 21.25H7.2998C5.33935 21.2499 3.75011 19.6607 3.75 17.7002V6.2998C3.75011 4.33935 5.33935 2.75011 7.2998 2.75H16.7002ZM7.2998 4.25C6.16778 4.25011 5.25011 5.16778 5.25 6.2998V17.7002C5.25011 18.8322 6.16778 19.7499 7.2998 19.75H16.7002C17.8322 19.7499 18.7499 18.8322 18.75 17.7002V6.2998C18.7499 5.16778 17.8322 4.25011 16.7002 4.25H7.2998Z" fill="currentColor"/>',
    })
    a.d(t, {}, { R: i })
  },
}
//# sourceMappingURL=3184.f96ebd434c.js.map
