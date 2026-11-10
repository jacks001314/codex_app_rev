export const __rspack_esm_ids = [101313]
export const __webpack_modules__ = {
  u3Vl(e, t, a) {
    var l = a("ABep"),
      i = a("QosV"),
      s = a("on57"),
      r = a("zd8w"),
      n = a("X3K1"),
      o = a("SQbA"),
      d = a("y1ho")
    a.d(
      t,
      {},
      {
        x: function (e) {
          let t,
            a,
            c,
            u,
            p = (0, i.c)(14),
            { screenshotUrl: h, viewMode: g } = e,
            { data: m, isError: f } = (0, o.useAppgenScreenshotSrc)(h),
            [v, y] = (0, r.useState)(null),
            [b, x] = (0, r.useState)(null),
            _ = null != m && m === v,
            S = null == h || f || (null != m && m === b),
            w = !S && "bg-surface-secondary",
            I = "grid" === g ? "min-h-0 flex-1" : "h-[50px] w-20 shrink-0 rounded-[6px]"
          return (
            p[0] !== w || p[1] !== I
              ? ((t = (0, s.A)("pointer-events-none relative z-10 overflow-hidden", w, I)),
                (p[0] = w),
                (p[1] = I),
                (p[2] = t))
              : (t = p[2]),
            p[3] !== _ || p[4] !== m || p[5] !== S || p[6] !== g
              ? ((a = S
                  ? (0, l.jsx)(d.o, { className: "size-full", gallery: "grid" === g })
                  : (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)(n.X, {
                          as: "span",
                          animate: !_,
                          className: "absolute inset-0 rounded-none",
                          size: "fill",
                          variant: "chatgpt-project",
                        }),
                        null == m
                          ? null
                          : (0, l.jsx)("img", {
                              alt: "",
                              className: (0, s.A)(
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
                (p[5] = S),
                (p[6] = g),
                (p[7] = a))
              : (a = p[7]),
            p[8] !== g
              ? ((c =
                  "list" === g
                    ? (0, l.jsx)("span", {
                        "aria-hidden": !0,
                        className:
                          "pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-border)]",
                      })
                    : null),
                (p[8] = g),
                (p[9] = c))
              : (c = p[9]),
            p[10] !== t || p[11] !== a || p[12] !== c
              ? ((u = (0, l.jsxs)("span", { className: t, children: [a, c] })),
                (p[10] = t),
                (p[11] = a),
                (p[12] = c),
                (p[13] = u))
              : (u = p[13]),
            u
          )
        },
      },
    )
  },
  NkHr(e, t, a) {
    var l = a("ABep"),
      i = a("QosV"),
      s = a("oyxz"),
      r = a("Qgfj"),
      n = a("tWaO"),
      o = a("KIKs")
    a.d(
      t,
      {},
      {
        g: function (e) {
          let t,
            a,
            d = (0, i.c)(10),
            { dateString: c } = e,
            u = (0, o.wv)()
          d[0] !== c || d[1] !== u ? ((t = (0, n.w)(c, u)), (d[0] = c), (d[1] = u), (d[2] = t)) : (t = d[2])
          let { unit: p, value: h } = t
          if ("minute" === p) {
            let e
            return (
              d[3] !== h
                ? ((e = (0, l.jsx)(s.A, {
                    id: "appgenPage.updatedMinutesAgo",
                    defaultMessage: "{value}m ago",
                    description: "Last edit time for a Site, in minutes; m abbreviates minutes",
                    values: { value: h },
                  })),
                  (d[3] = h),
                  (d[4] = e))
                : (e = d[4]),
              e
            )
          }
          if ("hour" === p) {
            let e
            return (
              d[5] !== h
                ? ((e = (0, l.jsx)(s.A, {
                    id: "appgenPage.updatedHoursAgo",
                    defaultMessage: "{value}h ago",
                    description: "Last edit time for a Site, in hours; h abbreviates hours",
                    values: { value: h },
                  })),
                  (d[5] = h),
                  (d[6] = e))
                : (e = d[6]),
              e
            )
          }
          if ("day" === p && 1 === h) {
            let e
            return (
              d[7] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, l.jsx)(s.A, {
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
              ? ((a = (0, l.jsx)(r.XU, { value: c, month: "short", day: "numeric" })), (d[8] = c), (d[9] = a))
              : (a = d[9]),
            a
          )
        },
      },
    )
  },
  p690(e, t, a) {
    var l = a("Nwp9")
    let i = "list",
      s = (0, l.m3)("sites-view-mode", i, { coerceStoredValue: (e) => ("grid" === e || "list" === e ? e : i) })
    a.d(t, {}, { x: s })
  },
  M3lc(e, t, a) {
    var l = a("QosV"),
      i = a("zTeN"),
      s = a("zd8w"),
      r = a("Wf1j"),
      n = a("uNsz"),
      o = a("Fmx8"),
      d = a("QoH2"),
      c = a("jrp4"),
      u = a("yjV3"),
      p = a("hZax"),
      h = a("OMIV"),
      g = a("bIvi"),
      m = a("B1DJ")
    ;(a("nr53"),
      a.d(
        t,
        {},
        {
          O: function (e) {
            let t,
              a,
              f = (0, l.c)(8),
              { routeScope: v, isVisible: y, onNavigateToSite: b } = e,
              x = (0, i.gh)(o.Qy),
              _ = (0, r.A)(),
              S = (0, p.Zj)("2881922323"),
              w = (0, g.K)(b)
            return (
              f[0] !== _ || f[1] !== y || f[2] !== w || f[3] !== v || f[4] !== x || f[5] !== S
                ? ((t = () => {
                    if (!S || !y) return
                    let e = { mounted: !0 },
                      t = (t, a, l) => {
                        let i = (0, n.h5)(t),
                          s = (0, d.G9)(t)
                        if (null != s && (0, u._)(x, s, "sites_library")) return (l(), !0)
                        if (null == i || null == s) return !1
                        let r = x.get(o.g_)
                        return (
                          (0, m.A)(v, {
                            resource: { type: "appgen-app", projectId: i, title: x.get(c.g, t), url: s },
                            event: a,
                            lifecycle: e,
                            intl: _,
                            onOpened: l,
                            onNavigateToSite: w,
                            presentation: "full-width",
                            launchInfo: void 0,
                            isStillCurrent: () => x.get(o.g_) === r && x.get(h.JW, "2881922323"),
                          }),
                          !0
                        )
                      }
                    return (
                      x.set(d.u$, () => t),
                      () => {
                        ;((e.mounted = !1), e.closeExternalOpen?.(), x.get(d.u$) === t && x.set(d.u$, null))
                      }
                    )
                  }),
                  (a = [S, _, y, w, v, x]),
                  (f[0] = _),
                  (f[1] = y),
                  (f[2] = w),
                  (f[3] = v),
                  (f[4] = x),
                  (f[5] = S),
                  (f[6] = t),
                  (f[7] = a))
                : ((t = f[6]), (a = f[7])),
              (0, s.useLayoutEffect)(t, a),
              null
            )
          },
        },
      ))
  },
  B1DJ(e, t, a) {
    var l = a("zTeN"),
      i = a("E8Sp"),
      s = a("ZU27"),
      r = a("SPnB"),
      n = a("qhRx"),
      o = a("Ot7V"),
      d = a("SGsN"),
      c = a("Oj9r"),
      u = a("uk1V"),
      p = a("nr53")
    let h = (0, l.vP)(c.GD, Symbol())
    a.d(
      t,
      {},
      {
        A: async function (
          e,
          {
            resource: t,
            event: a,
            lifecycle: l,
            intl: c,
            onNavigateToSite: g,
            presentation: m = "split",
            showComposer: f = !1,
            launchInfo: v,
            onOpened: y,
            onPreviewUnavailable: b,
            isStillCurrent: x,
          },
        ) {
          let _ = e.get(i.gM),
            S = e.get(r.chatGptAuthenticatedAccountId$),
            w = e.get(s.It.activeTab$)?.tabId,
            I = null != v || e.get(p.Lr),
            j = Symbol(),
            A = (t = e) =>
              l.mounted &&
              (x?.() ?? !0) &&
              t.get(h) === j &&
              !(0, n.isBrowserWorkspaceSwitchPending)() &&
              t.get(i.gM) === _ &&
              t.get(r.chatGptAuthenticatedAccountId$) === S &&
              t.get(s.It.activeTab$)?.tabId === w
          I && e.set(h, j)
          let P = t.url,
            E = !0
          if (I && !a?.metaKey && !a?.ctrlKey && !a?.shiftKey && !a?.altKey) {
            try {
              let a = await (v ?? e.query.fetch(p.Nx, t.projectId))
              if (null == a.live_url) {
                A() && b?.()
                return
              }
              P = a.live_url
            } catch {
              E = !1
            }
            if (!A()) return
          }
          if (null == P) return
          if (E && (0, u.o)(e, { ...t, url: P }, a, !0, g, m, f)) return void y?.("preview")
          if (null != b) return void b()
          let T = (e) => {
            ;(null != e
              ? (0, o.PQ)({
                  event: e,
                  href: P,
                  initiator: "sites_library",
                  openTarget: "external-browser",
                  disposition: "new-tab",
                })
              : (0, o.E0)({
                  href: P,
                  initiator: "sites_library",
                  openTarget: "external-browser",
                  disposition: "new-tab",
                })) && y?.("external")
          }
          if (I && navigator.userActivation?.isActive === !1) {
            let t
            l.closeExternalOpen?.()
            let a = () => {
                ;(t?.(),
                  (t = void 0),
                  window.removeEventListener(n.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, s),
                  l.closeExternalOpen === i && (l.closeExternalOpen = void 0))
              },
              i = () => {
                ;(r.close(), a())
              },
              s = () => {
                A() || i()
              },
              r = e
                .get(d.Id)
                .info(
                  c.formatMessage({
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
                      label: c.formatMessage({
                        id: "appgenPage.openSite.label",
                        defaultMessage: "Open site",
                        description: "Menu item for opening a published Site",
                      }),
                      onClick: () => {
                        let e = A()
                        ;(i(), e && T())
                      },
                    },
                  },
                )
            ;((l.closeExternalOpen = i),
              window.addEventListener(n.BROWSER_AUTH_CONTEXT_CHANGED_EVENT, s),
              (t = e.watch((e) => {
                A(e) || i()
              })),
              s())
            return
          }
          T(a)
        },
      },
    )
  },
  y1ho(e, t, a) {
    a.d(t, { o: () => o })
    var l = a("ABep"),
      i = a("QosV"),
      s = a("on57"),
      r = a("EJUn")
    a("zd8w")
    var n = (e) =>
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
    function o(e) {
      let t,
        a,
        o,
        d = (0, i.c)(7),
        { className: c, gallery: u } = e
      return (
        d[0] !== c
          ? ((t = (0, s.A)("flex aspect-8/5 items-center justify-center overflow-hidden bg-surface", c)),
            (d[0] = c),
            (d[1] = t))
          : (t = d[1]),
        d[2] !== u
          ? ((a = u ? (0, l.jsx)(n, { className: "size-full" }) : (0, l.jsx)(r.A, { className: "shrink-0" })),
            (d[2] = u),
            (d[3] = a))
          : (a = d[3]),
        d[4] !== t || d[5] !== a
          ? ((o = (0, l.jsx)("span", { "aria-hidden": !0, className: t, children: a })),
            (d[4] = t),
            (d[5] = a),
            (d[6] = o))
          : (o = d[6]),
        o
      )
    }
  },
  OWcD(e, t, a) {
    var l = a("zTeN"),
      i = a("SPnB"),
      s = a("Ghh3"),
      r = a("e1xH"),
      n = a("OWtl")
    let o = (0, l.vU)(n.u, (e, { get: t }) => {
      let a = t(i.chatGptAuthenticatedAccountId$),
        l = t(i.chatGptAuthenticatedUserId$)
      return {
        queryKey: ["global-search-open", e, a, l],
        enabled: null != a && null != l && t(r.gG),
        queryFn: async ({ signal: e }) =>
          (await s.Request.postResponse("/global/search/open", { signal: e, retry: !1 })).status,
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
              i = l.messages
            if (
              !i.some(
                (e, a) =>
                  "assistant" === e.author.role &&
                  "string" == typeof e.recipient &&
                  i
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
            a = i
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
          let i = { id: "y-root", message: null, parent: null, children: [] },
            s = [i],
            r = new Set([i.id])
          for (let e of a) {
            if (!e.id || r.has(e.id)) return null
            ;(r.add(e.id), (i.children = [e.id]))
            let t = { id: e.id, message: e, parent: i.id, children: [] }
            ;(s.push(t), (i = t))
          }
          return {
            conversation_id: t,
            current_node: i.id,
            mapping: Object.fromEntries(s.map((e) => [e.id, e])),
            linear_conversation: s,
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
    var l = a("Ghh3")
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
      i = a("QosV"),
      s = a("zTeN"),
      r = a("zd8w"),
      n = a("SPnB"),
      o = a("OMIV"),
      d = a("zHp1"),
      c = a("HBVP"),
      u = a("TCFx"),
      p = a("Fmx8"),
      h = a("ahQQ"),
      g = a("iMhR")
    function m() {
      let e,
        t,
        a = (0, i.c)(3),
        l = (0, s.gh)(h.Qy)
      return (
        a[0] !== l
          ? ((e = () => {
              let e,
                t = !1,
                a = l.watch((a) => {
                  if (!a.get(o.JW, "2092319279") || !a.get(o.JW, "2457328746")) return void e?.abort()
                  let i = a.query.getOptions(p.i3),
                    s = a.get(n.chatGptAuthenticatedAccountId$),
                    r = a.get(n.chatGptAuthenticatedUserId$),
                    u = a.get(n.o8)
                  if (!1 === i.enabled || l.value.accountId !== s || l.value.userId !== r) return void e?.abort()
                  let { signal: h } = (e = e ?? new AbortController())
                  if (t || h.aborted) return
                  let g = l.queryClient.getQueryCache(),
                    m = g.build(l.queryClient, i),
                    v = () => {
                      if (t || null == m.state.data) return
                      t = !0
                      let e = l.get(p.AH)?.filter(f).slice(0, 15)
                      if (null == e) return
                      let a = e.values()
                      Promise.all(
                        Array.from({ length: Math.min(4, e.length) }, async () => {
                          for (let e of a) {
                            if (
                              h.aborted ||
                              "visible" !== document.visibilityState ||
                              l.get(n.chatGptAuthenticatedAccountId$) !== s ||
                              l.get(n.chatGptAuthenticatedUserId$) !== r ||
                              l.get(n.o8) !== u
                            )
                              return
                            try {
                              await (0, d.r1)(
                                l.queryClient,
                                e.node.id,
                                (0, c.L)({
                                  accountId: s,
                                  userId: u,
                                  file: {
                                    id: e.node.id,
                                    file_id: e.node.file_id ?? e.node.id,
                                    file_name: e.node.name,
                                    gizmo_id: e.node.gizmo_id,
                                    mime_type: e.node.mime_type,
                                  },
                                  currentVersion: e.currentVersion,
                                  modifiedAt: e.node.updated_at,
                                  useDownloadUrlAsImageSrc: !0,
                                }),
                                h,
                                () =>
                                  l.get(n.chatGptAuthenticatedAccountId$) === s &&
                                  l.get(n.chatGptAuthenticatedUserId$) === r &&
                                  l.get(n.o8) === u,
                              )
                            } catch {}
                          }
                        }),
                      )
                    },
                    y = g.subscribe((e) => {
                      e.query === m && v()
                    })
                  return (v(), y)
                })
              return () => {
                ;(e?.abort(), a())
              }
            }),
            (t = [l]),
            (a[0] = l),
            (a[1] = e),
            (a[2] = t))
          : ((e = a[1]), (t = a[2])),
        (0, r.useEffect)(e, t),
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
            t = (0, i.c)(2),
            a = (0, s.Ul)(g.d)
          return (
            t[0] !== a
              ? ((e = a ? (0, l.jsx)(s.Ui, { scope: h.Qy, value: g.B, children: (0, l.jsx)(m, {}) }) : null),
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
    a.a(e, async function (e, l) {
      try {
        var i = a("ABep"),
          s = a("QosV"),
          r = a("D7Ms"),
          n = a("T0Rc"),
          o = a("zTeN"),
          d = a("DBCl"),
          c = a("zd8w"),
          u = a("oyxz"),
          p = a("HZfM"),
          h = a("bJfu"),
          g = a("I7bK"),
          m = a("SPnB"),
          f = a("ygO2"),
          v = a("FrrB"),
          y = a("Bbed"),
          b = a("uNsz"),
          x = a("zkSD"),
          _ = a("LhrG"),
          S = a("MExO"),
          w = a("heYt"),
          I = a("Oj9r"),
          j = a("XXJV"),
          A = a("eShZ"),
          P = a("TCFx"),
          E = a("Fmx8"),
          T = a("qQj3"),
          C = a("KhCM"),
          M = a("R1rp"),
          N = a("UxLW"),
          k = a("jJ9V"),
          O = a("avsj"),
          L = a("ycWl"),
          U = a("MZ5W"),
          R = e([U])
        U = (R.then ? (await R)() : R)[0]
        let D = (0, y._)(
          async () =>
            (
              await Promise.all([
                a.e(851456),
                a.e(637093),
                a.e(770340),
                a.e(920436),
                a.e(897874),
                a.e(720436),
                a.e(208123),
                a.e(178420),
                a.e(301743),
              ]).then(a.bind(a, "DWJ8"))
            ).LibraryRoutedNotePreview,
          { fallback: (0, i.jsx)(O.E, {}) },
        )
        function F(e) {
          let t,
            a,
            l,
            p,
            h,
            g,
            y,
            b,
            P,
            E,
            T = (0, s.c)(55),
            { libraryFileId: C, identity: M, onClose: U, tabId: R } = e,
            F = (0, o.gh)(I.GD),
            D = (0, o.Ul)(m.qz),
            z = (0, o.Ul)(m.chatGptAuthenticatedAccountId$),
            B = (0, o.Ul)(m.chatGptAuthenticatedUserId$),
            V = (0, o.Ul)(m.cj),
            H = (0, o.Ul)(w.Ym),
            $ = "loading" === D || ("allowed" === D && !V),
            Q =
              !$ &&
              "allowed" === D &&
              null != z &&
              (null == M || (M.accountId === z && M.userId === B)) &&
              null != C &&
              ((0, d.PKK)(C) || null != (0, S.CN)(C))
                ? C
                : null
          ;(T[0] !== z || T[1] !== Q || T[2] !== B
            ? ((t = ["library-api", z, B, "file", Q]), (T[0] = z), (T[1] = Q), (T[2] = B), (T[3] = t))
            : (t = T[3]),
            T[4] !== z || T[5] !== Q
              ? ((a =
                  null != Q && null != z
                    ? (e) => {
                        let { signal: t } = e
                        return (0, _.F)(Q, z, t)
                      }
                    : r.hT),
                (T[4] = z),
                (T[5] = Q),
                (T[6] = a))
              : (a = T[6]),
            T[7] !== t || T[8] !== a
              ? ((l = { queryKey: t, queryFn: a, gcTime: 0, staleTime: 0, retry: !1, refetchOnWindowFocus: !1 }),
                (T[7] = t),
                (T[8] = a),
                (T[9] = l))
              : (l = T[9]))
          let { data: Y, error: W, isPending: q, isFetching: K, refetch: Z } = (0, n.I)(l)
          if (
            (T[10] !== Y || T[11] !== W || T[12] !== Q
              ? ((p = null),
                null != Q && null != Y && null == W && (p = "file_name" in Y ? Y.file_name : Y.name),
                (T[10] = Y),
                (T[11] = W),
                (T[12] = Q),
                (T[13] = p))
              : (p = T[13]),
            T[14] !== F || T[15] !== R || T[16] !== p
              ? ((h = () => {
                  if (null == R || null == p) return
                  let e = (0, j.KE)(F, R)
                  null != e && (0, j.getThreadPanelTabController)(e).updateTab(F, R, { title: p })
                }),
                (T[14] = F),
                (T[15] = R),
                (T[16] = p),
                (T[17] = h))
              : (h = T[17]),
            T[18] !== F || T[19] !== R || T[20] !== p
              ? ((g = [F, R, p]), (T[18] = F), (T[19] = R), (T[20] = p), (T[21] = g))
              : (g = T[21]),
            (0, c.useLayoutEffect)(h, g),
            $ || (null != Q && q))
          ) {
            let e, t, a
            return (
              T[22] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(O.C, {})), (T[22] = e))
                : (e = T[22]),
              T[23] !== U || T[24] !== R
                ? ((t = (0, i.jsx)(k.c, { actions: !1, onClose: U, tabId: R, title: "", children: e })),
                  (T[23] = U),
                  (T[24] = R),
                  (T[25] = t))
                : (t = T[25]),
              T[26] !== U || T[27] !== t
                ? ((a = (0, i.jsx)(L.gK, {
                    assetName: null,
                    contentOwnsHeader: !0,
                    reserveImageComposerSpace: !0,
                    onClose: U,
                    children: t,
                  })),
                  (T[26] = U),
                  (T[27] = t),
                  (T[28] = a))
                : (a = T[28]),
              a
            )
          }
          if (null != Q && null != Y && null == W) {
            let e, t, a
            return (
              T[29] !== z || T[30] !== Q || T[31] !== B
                ? ((e = JSON.stringify([z, B, Q])), (T[29] = z), (T[30] = Q), (T[31] = B), (T[32] = e))
                : (e = T[32]),
              T[33] !== z || T[34] !== Y || T[35] !== F || T[36] !== H
                ? ((t =
                    H &&
                    !1 !== Y.sharing_can_manage &&
                    null != z &&
                    "saved_web_image" !== Y.library_artifact_type &&
                    null == (0, N.AG)(Y.id)
                      ? () => {
                          ;(0, x.Yx)(F, {
                            accountId: z,
                            fileName: "file_name" in Y ? Y.file_name : Y.name,
                            libraryFileId: Y.id,
                            sharingEntryId: Y.sharing_entry_id ?? void 0,
                            resourceKind: "file",
                            showOrganizationSharing: "writing_block" !== Y.library_artifact_type,
                            sharedDirectoryId: "parent_directory_id" in Y ? Y.parent_directory_id : void 0,
                          })
                        }
                      : void 0),
                  (T[33] = z),
                  (T[34] = Y),
                  (T[35] = F),
                  (T[36] = H),
                  (T[37] = t))
                : (t = T[37]),
              T[38] !== Y || T[39] !== U || T[40] !== e || T[41] !== t || T[42] !== R
                ? ((a = (0, i.jsx)(G, { data: Y, onClose: U, tabId: R, onShare: t }, e)),
                  (T[38] = Y),
                  (T[39] = U),
                  (T[40] = e),
                  (T[41] = t),
                  (T[42] = R),
                  (T[43] = a))
                : (a = T[43]),
              a
            )
          }
          let J = null != Q && !(W instanceof A.fk && (403 === W.status || 404 === W.status))
          return (
            T[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = (0, i.jsx)("h1", {
                  role: "alert",
                  children: (0, i.jsx)(u.A, {
                    id: "library.file.failed",
                    defaultMessage: "Unable to open this file",
                    description: "Shown when a Library file link is invalid, inaccessible, or fails to load",
                  }),
                })),
                (T[44] = y))
              : (y = T[44]),
            T[45] !== J || T[46] !== K || T[47] !== Z
              ? ((b = J
                  ? (0, i.jsx)(f.$, {
                      disabled: K,
                      onClick: () => void Z(),
                      children: (0, i.jsx)(u.A, {
                        id: "library.file.retry",
                        defaultMessage: "Try again",
                        description: "Retry loading the file selected by a Library file link",
                      }),
                    })
                  : null),
                (T[45] = J),
                (T[46] = K),
                (T[47] = Z),
                (T[48] = b))
              : (b = T[48]),
            T[49] !== U || T[50] !== R
              ? ((P =
                  null == R
                    ? (0, i.jsx)(f.$, {
                        color: "outline",
                        onClick: U,
                        children: (0, i.jsx)(u.A, {
                          id: "appgenPage.filePreview.close",
                          defaultMessage: "Close preview",
                          description: "Accessible label for closing a Library file preview",
                        }),
                      })
                    : null),
                (T[49] = U),
                (T[50] = R),
                (T[51] = P))
              : (P = T[51]),
            T[52] !== b || T[53] !== P
              ? ((E = (0, i.jsx)(v.A, {
                  className: "select-none",
                  layout: "page",
                  title: y,
                  actions: (0, i.jsxs)(i.Fragment, { children: [b, P] }),
                })),
                (T[52] = b),
                (T[53] = P),
                (T[54] = E))
              : (E = T[54]),
            E
          )
        }
        function G(e) {
          let t,
            a,
            l,
            r,
            n = (0, s.c)(13),
            { data: d, onClose: u, onShare: p, tabId: h } = e,
            f = (0, o.gh)(I.GD),
            v = (0, c.useContext)(g.f$),
            y = (0, o.Ul)(m.chatGptAuthenticatedAccountId$),
            x = (0, o.Ul)(m.chatGptAuthenticatedUserId$),
            _ = "file_name" in d ? (0, P.Jw)(d) : { node: d },
            S = "writing_block" === d.library_artifact_type,
            w = (0, o.Ul)(!!S && M.V1),
            j = (0, o.Ul)(!!S && M.lY)
          n[0] !== d
            ? ((t =
                (null == d.access_kind || "owned" === d.access_kind) &&
                (!("kind" in d) || !(0, b.GS)({ node: d })) &&
                "chat_message_snapshot" !== d.library_artifact_type &&
                !d.id.startsWith("external-")),
              (n[0] = d),
              (n[1] = t))
            : (t = n[1])
          let A = t
          n[2] !== A || n[3] !== d.id
            ? ((a = A ? (0, i.jsx)(T.V, { libraryFileId: d.id }) : null), (n[2] = A), (n[3] = d.id), (n[4] = a))
            : (a = n[4])
          let k =
            null != y && (0, b.S6)(_) && !w && !j
              ? (0, i.jsx)(o.Ui, {
                  scope: E.oD,
                  value: { accountId: y, userId: x },
                  children: (0, i.jsx)(o.Ui, {
                    scope: E.vn,
                    value: {},
                    children: (0, i.jsx)(
                      D,
                      {
                        routeScope: f,
                        accountId: y,
                        userId: x,
                        entry: _,
                        onClose: u,
                        showComposer: null == h,
                        tabId: h,
                      },
                      JSON.stringify([y, x, d.id]),
                    ),
                  }),
                })
              : (0, i.jsx)(U.f, {
                  downloadAnalyticsFile: _.node,
                  renderFavoriteAction: () =>
                    A
                      ? (0, i.jsx)(T.q, {
                          libraryFileId: d.id,
                          entityKind: (0, C.Z)(_.node),
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
                    provider: (0, N.AG)(d.id) ?? void 0,
                    sizeBytes: d.file_size_bytes ?? null,
                    sourceUrl: d.cloud_doc_url ?? void 0,
                  },
                  onClose: u,
                  onShare: p,
                  showComposer: null == h,
                  tabId: h,
                })
          n[5] !== a || n[6] !== k
            ? ((l = (0, i.jsxs)(i.Fragment, { children: [a, k] })), (n[5] = a), (n[6] = k), (n[7] = l))
            : (l = n[7])
          let O = l
          if (null == h) {
            let e
            return (
              n[8] !== O
                ? ((e = (0, i.jsx)("div", {
                    className: "h-full min-h-0 [--viewer-header-start-inset:var(--app-shell-titlebar-left-inset,0px)]",
                    children: O,
                  })),
                  (n[8] = O),
                  (n[9] = e))
                : (e = n[9]),
              e
            )
          }
          return (
            n[10] !== v || n[11] !== O
              ? ((r =
                  v?.titlebarSlots == null || v.hasTitlebarHeader
                    ? O
                    : (0, i.jsx)("div", { className: "h-full min-h-0 pt-[var(--height-toolbar)]", children: O })),
                (n[10] = v),
                (n[11] = O),
                (n[12] = r))
              : (r = n[12]),
            r
          )
        }
        ;(a.d(
          t,
          {},
          {
            LibraryFileLinkPreview: G,
            LibraryFilePreview: F,
            LibraryFileRoute: function (e) {
              let t,
                a,
                l,
                r = (0, s.c)(7),
                { returnTo: n } = e,
                o = void 0 === n ? "/library" : n,
                { libraryFileId: d } = (0, p.g)(),
                c = (0, p.Zp)()
              return (
                r[0] === Symbol.for("react.memo_cache_sentinel")
                  ? ((t = (0, i.jsx)(h.G.MainContentLayout, { layout: "custom-titlebar" })), (r[0] = t))
                  : (t = r[0]),
                r[1] !== c || r[2] !== o ? ((a = () => void c(o)), (r[1] = c), (r[2] = o), (r[3] = a)) : (a = r[3]),
                r[4] !== d || r[5] !== a
                  ? ((l = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(F, { libraryFileId: d, onClose: a })] })),
                    (r[4] = d),
                    (r[5] = a),
                    (r[6] = l))
                  : (l = r[6]),
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
      i = a("QosV"),
      s = a("zd8w")
    a.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            a = (0, i.c)(5),
            { className: r, src: n, fallback: o } = e,
            [d, c] = (0, s.useState)(null)
          return (
            a[0] !== r || a[1] !== d || a[2] !== o || a[3] !== n
              ? ((t =
                  null != n && n !== d
                    ? (0, l.jsx)("img", {
                        alt: "",
                        className: r,
                        decoding: "async",
                        draggable: !1,
                        loading: "lazy",
                        src: n,
                        onError: () => c(n),
                      })
                    : (0, l.jsx)(l.Fragment, { children: o })),
                (a[0] = r),
                (a[1] = d),
                (a[2] = o),
                (a[3] = n),
                (a[4] = t))
              : (t = a[4]),
            t
          )
        },
      },
    )
  },
  idI8(e, t, a) {
    var l = a("khOd"),
      i = a("eShZ"),
      s = a("r9ga"),
      r = a("pyoT")
    a.d(
      t,
      {},
      {
        openGlobalSearchSpacePage: async function (e, t, a, n, o, d) {
          let c, u
          if (!o()) return
          let p = e.get(r.spaceAccountId$)
          if (null != p) {
            if (null != n.space_id)
              try {
                let t = await e.queryClient.fetchQuery({
                  ...e.query.getOptions(r.spaceQuery$, n.space_id),
                  staleTime: 0,
                })
                if (null == t.root_page_id) throw Error("space_unavailable")
                c = t.root_page_id
              } catch (e) {
                if (!(e instanceof i.fk) || ![403, 404, 410].includes(e.status)) throw e
                u = e
              }
            if (null == c) {
              if (!o()) return
              let a = await e.queryClient.fetchQuery({
                ...e.query.getOptions(r.spacePageAncestryQuery$, n.page_id),
                staleTime: 0,
              })
              if (a.metadata.page_id !== n.page_id || !a.metadata.access.can_read || null != a.metadata.deleted_at)
                throw u ?? Error("page_unavailable")
              if (o()) {
                if (null != d) return void d(n.page_id)
                let a = { spaceSidebarAccountId: p, sidebarArea: e.get(l.GB) ? "space" : void 0 }
                t((0, s.mI)(e, n.page_id), { state: a })
              }
              return
            }
            if (o()) {
              if (null != d) return void d(n.page_id)
              ;(0, s.C_)(e, t, a, p, c, n.page_id)
            }
          }
        },
      },
    )
  },
  FiJQ(e, t, a) {
    var l = a("ABep"),
      i = a("QosV"),
      s = a("SZCv"),
      r = a.n(s),
      n = a("zTeN"),
      o = a("Wf1j"),
      d = a("oyxz"),
      c = a("RaBo"),
      u = a("BrP7"),
      p = a("cGrE"),
      h = a("Fmx8"),
      g = a("RjIR"),
      m = a("hZax")
    a.d(
      t,
      {},
      {
        h: function (e) {
          let t,
            a,
            s,
            f,
            v,
            y,
            b,
            x,
            _,
            S,
            w,
            I,
            j = (0, i.c)(35),
            { scope: A, sitesSelected: P } = e,
            E = void 0 !== P && P,
            T = (0, o.A)(),
            C = (0, n.Ul)(c.ND),
            M = (0, m.Zj)("library:collection:shared-with-me" !== A.value.directoryId || "476199071"),
            N = "favorites" === A.value.tab,
            k = null == A.value.directoryId && ("all" === A.value.tab || N),
            O = (0, n.Ul)(!!k && g._)
          if (
            (j[0] !== A.value.directoryId || j[1] !== A.value.tab
              ? ((t = {
                  key: "all",
                  name:
                    null == A.value.directoryId && "suggested" === A.value.tab
                      ? (0, l.jsx)(d.A, {
                          id: "libraryNext.tabs.suggested",
                          defaultMessage: "Suggested",
                          description: "Library tab for backend-ranked suggested items",
                        })
                      : (0, l.jsx)(d.A, {
                          id: "space.home.allTitle",
                          defaultMessage: "All",
                          description: "Title of the combined Library and Pages homepage",
                        }),
                }),
                (j[0] = A.value.directoryId),
                (j[1] = A.value.tab),
                (j[2] = t))
              : (t = j[2]),
            j[3] !== O
              ? ((a = O
                  ? [
                      {
                        key: "favorites",
                        name: (0, l.jsx)(d.A, {
                          id: "library.tabs.favorites",
                          defaultMessage: "Favorites",
                          description: "Library tab for items the user saved as favorites",
                        }),
                      },
                    ]
                  : []),
                (j[3] = O),
                (j[4] = a))
              : (a = j[4]),
            j[5] !== N || j[6] !== A.value.includePages
              ? ((s =
                  A.value.includePages || N
                    ? [
                        {
                          key: "pages",
                          name: (0, l.jsx)(d.A, {
                            id: "space.list.pagesTab",
                            defaultMessage: "Pages",
                            description: "Filter showing all Pages",
                          }),
                        },
                      ]
                    : []),
                (j[5] = N),
                (j[6] = A.value.includePages),
                (j[7] = s))
              : (s = j[7]),
            j[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = {
                  key: "presentations",
                  name: (0, l.jsx)(d.A, {
                    id: "space.home.slidesTitle",
                    defaultMessage: "Slides",
                    description:
                      "Heading and sidebar navigation label for the Space collection containing native Slides and presentation files",
                  }),
                }),
                (j[8] = f))
              : (f = j[8]),
            j[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = {
                  key: "spreadsheets",
                  name: (0, l.jsx)(d.A, {
                    id: "space.home.artifactTabs.sheets",
                    defaultMessage: "Sheets",
                    description: "Space type filter for native Sheets and spreadsheet files",
                  }),
                }),
                (j[9] = v))
              : (v = j[9]),
            j[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = {
                  key: "images",
                  name: (0, l.jsx)(d.A, {
                    id: "libraryNext.filters.images",
                    defaultMessage: "Images",
                    description: "Library image category, shown as a tab, filter menu option, or selected filter chip",
                  }),
                }),
                (j[10] = y))
              : (y = j[10]),
            j[11] !== M || j[12] !== C
              ? ((b =
                  "available" === C && M
                    ? [
                        {
                          key: "sites",
                          name: (0, l.jsx)(d.A, {
                            id: "codex.space.sites.title",
                            defaultMessage: "Sites",
                            description: "Title of the built-in Sites page in Spaces",
                          }),
                        },
                      ]
                    : []),
                (j[11] = M),
                (j[12] = C),
                (j[13] = b))
              : (b = j[13]),
            j[14] !== N ||
              j[15] !== A.value.categories ||
              j[16] !== E ||
              j[17] !== t ||
              j[18] !== a ||
              j[19] !== s ||
              j[20] !== b)
          ) {
            _ = [t, ...a, ...s, f, v, y, ...b]
            let e = A.value.categories,
              i = 1 === e.length ? e[0] : null
            if (
              ((x = "custom"),
              E
                ? (x = "sites")
                : N
                  ? (x = 0 === e.length ? "favorites" : "custom")
                  : 0 === e.length
                    ? (x = "all")
                    : null != i && _.some((e) => e.key === i) && (x = i),
              "custom" === x)
            ) {
              let e
              ;(j[23] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = {
                    key: "custom",
                    name: (0, l.jsx)(d.A, {
                      id: "space.home.artifactTabs.filtered",
                      defaultMessage: "Filtered",
                      description:
                        "Selected artifact type tab when existing filters contain multiple types or another file type",
                    }),
                  }),
                  (j[23] = e))
                : (e = j[23]),
                _.push(e))
            }
            ;((j[14] = N),
              (j[15] = A.value.categories),
              (j[16] = E),
              (j[17] = t),
              (j[18] = a),
              (j[19] = s),
              (j[20] = b),
              (j[21] = x),
              (j[22] = _))
          } else ((x = j[21]), (_ = j[22]))
          return (
            j[24] !== T
              ? ((S = T.formatMessage({
                  id: "space.home.artifactTabs.label",
                  defaultMessage: "Artifact types",
                  description: "Accessible label for Space artifact type filters",
                })),
                (j[24] = T),
                (j[25] = S))
              : (S = j[25]),
            j[26] !== N || j[27] !== A || j[28] !== x
              ? ((w = (e) => {
                  if (e === x || "custom" === e) return
                  if ("sites" === e) {
                    let e = new URL(
                      (0, h.SE)({ ...A.value, tab: N ? "all" : A.value.tab, categories: [], sources: [] }),
                      "https://chatgpt.com",
                    )
                    ;(e.searchParams.set("artifact", "sites"), (0, h.zl)(A, e.pathname + e.search))
                    return
                  }
                  let t = A.value.tab
                  if ("favorites" === e || N) {
                    let a = "favorites" === e ? "favorites" : "all"
                    ;(a !== t && ((0, p.np)(A, { category: a }), (0, h.me)(A, { lastTab: a })), (t = a))
                  }
                  let a = "all" === e || "favorites" === e ? [] : [e]
                  "favorites" === e || r()(a, A.value.categories) || (0, p.np)(A, { fileTypes: a })
                  let l = (0, h.SE)({
                    ...A.value,
                    tab: t,
                    categories: a,
                    sources: t !== A.value.tab ? [] : A.value.sources,
                  })
                  ;(0, h.zl)(A, "/space" === l ? "/space?tab=suggested" : l)
                }),
                (j[26] = N),
                (j[27] = A),
                (j[28] = x),
                (j[29] = w))
              : (w = j[29]),
            j[30] !== x || j[31] !== w || j[32] !== S || j[33] !== _
              ? ((I = (0, l.jsx)(u.t, {
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: S,
                  tabs: _,
                  selectedKey: x,
                  onSelect: w,
                })),
                (j[30] = x),
                (j[31] = w),
                (j[32] = S),
                (j[33] = _),
                (j[34] = I))
              : (I = j[34]),
            I
          )
        },
      },
    )
  },
  D14d(e, t, a) {
    var l = a("zTeN"),
      i = a("OWtl")
    let s = (0, l.vP)(i.u, null)
    a.d(t, {}, { t: s })
  },
  VU3o(e, t, a) {
    var l = a("ABep"),
      i = a("QosV"),
      s = a("QBk8"),
      r = a("D015"),
      n = a("AFKC"),
      o = a("on57"),
      d = a("iodE"),
      c = a("zTeN"),
      u = a("zd8w"),
      p = a("oyxz"),
      h = a("Wf1j"),
      g = a("SPnB"),
      m = a("ygO2"),
      f = a("GO7r"),
      v = a("evwP"),
      y = a("RNul"),
      b = a("rpnz"),
      x = a("e1xH"),
      _ = a("iyTF"),
      S = a("yGJW"),
      w = a("OWtl"),
      I = a("htN9"),
      j = a("Vx7B"),
      A = a("C9Ga"),
      P = a("iOgI")
    function E(e) {
      let t,
        a,
        n,
        o,
        h,
        g,
        m = (0, i.c)(23),
        { template: f, onOpen: v, onSelect: _, templatePosition: A, surface: E, compactTitle: T, disabled: C } = e,
        M = (0, c.gh)(w.u),
        N = (0, c._U)(x.H6, "granola_presentation"),
        k = (0, c.Ul)(P.M),
        O = (0, c.Ul)(b.ut),
        L = (0, d.tF)(),
        U = (0, u.useRef)(null)
      if (
        (m[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = () => () => U.current?.abort()), (a = []), (m[0] = t), (m[1] = a))
          : ((t = m[0]), (a = m[1])),
        (0, u.useEffect)(t, a),
        !N)
      )
        return null
      if (k === f.id) {
        let e
        ;(m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsxs)("span", {
              className: "inline-flex items-center gap-1",
              role: "status",
              children: [
                (0, l.jsx)(y.y, { as: "span", className: "icon-xxs" }),
                (0, l.jsx)(p.A, {
                  id: "space.slideTemplates.opening",
                  defaultMessage: "Opening…",
                  description: "Status while loading and creating a native Slides template",
                }),
              ],
            })),
            (m[2] = e))
          : (e = m[2]),
          (n = e))
      } else if (void 0 !== T && T) {
        let e
        ;(m[3] !== f.title
          ? ((e = (0, l.jsx)("span", { className: "text-sm", children: f.title })), (m[3] = f.title), (m[4] = e))
          : (e = m[4]),
          (n = e))
      }
      m[5] !== E || m[6] !== f
        ? ((o =
            "create" === E
              ? (0, l.jsx)(
                  I.gr,
                  {
                    metadata: "source" in f ? f.thumbnailMetadata : void 0,
                    src: "source" in f ? f.thumbnailUrl : f.thumbnail,
                  },
                  "source" in f ? f.thumbnailUrl : f.thumbnail,
                )
              : (0, l.jsx)("img", {
                  className: "size-full object-cover",
                  src: "source" in f ? f.thumbnailUrl : f.thumbnail,
                  alt: "",
                  draggable: !1,
                })),
          (m[5] = E),
          (m[6] = f),
          (m[7] = o))
        : (o = m[7])
      let R = (void 0 !== C && C) || null != k || (O && null == _) || !L,
        F = k === f.id ? "dimmed" : "unchanged"
      return (
        m[8] !== v || m[9] !== _ || m[10] !== M || m[11] !== E || m[12] !== f || m[13] !== A
          ? ((h = () => {
              ;("onboarding" === E &&
                (0, S.yy)(M, s.CodexSpacesOnboarding, {
                  action: s.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_ITEM_SELECTED,
                  item: s.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_TEMPLATES,
                }),
              (0, S.yy)(M, s.CodexSpacesTemplateGallery, {
                action:
                  "onboarding" === E
                    ? s.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_HOME_TILE_SELECTED
                    : s.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_TEMPLATE_SELECTED,
                category: "slides",
                templateId: f.id,
                templatePosition: null == A ? void 0 : (0, r.At)(A),
                selectionSurface:
                  "onboarding" === E
                    ? s.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_SPACE_HOME_TILE
                    : s.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_MODAL,
              }),
              null != _)
                ? _(f)
                : ((U.current = new AbortController()),
                  (0, P._)({ scope: M, template: f, onOpen: v, signal: U.current.signal }))
            }),
            (m[8] = v),
            (m[9] = _),
            (m[10] = M),
            (m[11] = E),
            (m[12] = f),
            (m[13] = A),
            (m[14] = h))
          : (h = m[14]),
        m[15] !== E || m[16] !== o || m[17] !== R || m[18] !== F || m[19] !== h || m[20] !== f.title || m[21] !== n
          ? ((g = (0, l.jsx)(j.Z, {
              title: f.title,
              kind: "slides",
              surface: E,
              titleContent: n,
              preview: o,
              disabled: R,
              disabledAppearance: F,
              onOpen: h,
            })),
            (m[15] = E),
            (m[16] = o),
            (m[17] = R),
            (m[18] = F),
            (m[19] = h),
            (m[20] = f.title),
            (m[21] = n),
            (m[22] = g))
          : (g = m[22]),
        g
      )
    }
    a.d(
      t,
      {},
      {
        X: function (e) {
          let t,
            a,
            s,
            r,
            d,
            b,
            S,
            I,
            j = (0, i.c)(44),
            { onOpen: P, onSelect: T, expanded: C, stickyHeading: M, compactTitle: N, heading: k, disabled: O } = e,
            L = void 0 !== C && C,
            U = void 0 !== M && M,
            R = void 0 !== N && N,
            F = void 0 !== O && O,
            G = (0, c.gh)(w.u),
            D = (0, c._U)(x.H6, "granola_presentation"),
            z = (0, h.A)(),
            B = (0, c.Ul)(g.o8),
            { data: V, isLoading: H, isError: $ } = (0, c.Ul)(D ? _.i8 : null) ?? {},
            Q = (0, u.useId)(),
            Y = (0, n.g)()
          if (!D) return null
          if (H) {
            let e, a
            ;(j[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, l.jsx)(y.y, {})), (j[0] = e)) : (e = j[0]),
              j[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = (0, l.jsxs)("div", {
                    className: "flex min-h-56 items-center justify-center",
                    role: "status",
                    children: [
                      e,
                      (0, l.jsx)("span", {
                        className: "sr-only",
                        children: (0, l.jsx)(p.A, {
                          id: "space.slideTemplates.loading",
                          defaultMessage: "Loading Slides templates",
                          description: "Status while the shared native Slides template catalog loads",
                        }),
                      }),
                    ],
                  })),
                  (j[1] = a))
                : (a = j[1]),
              (t = a))
          } else if ($) {
            let e, a, i, s
            ;(j[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(p.A, {
                  id: "space.slideTemplates.loadFailed",
                  defaultMessage: "Couldn’t load Slides templates",
                  description: "Error when the shared native Slides template catalog cannot load",
                })),
                (j[2] = e))
              : (e = j[2]),
              j[3] !== G ? ((a = () => void (0, _.JF)(G)), (j[3] = G), (j[4] = a)) : (a = j[4]),
              j[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((i = (0, l.jsx)(p.A, {
                    id: "space.slideTemplates.retry",
                    defaultMessage: "Try again",
                    description: "Retry loading the shared native Slides template catalog",
                  })),
                  (j[5] = i))
                : (i = j[5]),
              j[6] !== a
                ? ((s = (0, l.jsxs)(v.W, {
                    children: [e, (0, l.jsx)(m.$, { color: "ghost", size: "toolbar", onClick: a, children: i })],
                  })),
                  (j[6] = a),
                  (j[7] = s))
                : (s = j[7]),
              (t = s))
          } else if (V?.length === 0) {
            let e
            ;(j[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(v.W, {
                  children: (0, l.jsx)(p.A, {
                    id: "space.slideTemplates.empty",
                    defaultMessage: "No Slides templates available",
                    description: "Empty state when the shared catalog has no eligible native Slides templates",
                  }),
                })),
                (j[8] = e))
              : (e = j[8]),
              (t = e))
          } else {
            let e,
              a,
              i,
              s = L ? void 0 : Y.actions.viewportRef,
              r = L
                ? "-m-2 grid grid-cols-3 gap-4 p-2 [@media(max-width:48rem)]:grid-cols-2 [@media(max-width:30rem)]:grid-cols-1"
                : "-m-2 gap-3 p-3 horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased flex scrollbar-none overflow-x-auto overscroll-x-contain *:min-w-56 *:flex-[0_0_calc((100%-2.25rem)/4)]"
            ;(j[9] !== r ? ((e = (0, o.A)("min-w-0", r)), (j[9] = r), (j[10] = e)) : (e = j[10]),
              j[11] !== R || j[12] !== F || j[13] !== P || j[14] !== T || j[15] !== V || j[16] !== B
                ? ((a =
                    null != V &&
                    V.map((e, t) =>
                      (0, l.jsx)(
                        E,
                        {
                          template: e,
                          templatePosition: null == B ? void 0 : t + 1,
                          onOpen: P,
                          onSelect: T,
                          surface: "gallery",
                          compactTitle: R,
                          disabled: F,
                        },
                        e.id,
                      ),
                    )),
                  (j[11] = R),
                  (j[12] = F),
                  (j[13] = P),
                  (j[14] = T),
                  (j[15] = V),
                  (j[16] = B),
                  (j[17] = a))
                : (a = j[17]),
              j[18] !== s || j[19] !== e || j[20] !== a
                ? ((i = (0, l.jsx)("div", { ref: s, className: e, children: a })),
                  (j[18] = s),
                  (j[19] = e),
                  (j[20] = a),
                  (j[21] = i))
                : (i = j[21]),
              (t = i))
          }
          let W = U && "sticky top-0 z-10 -mx-4 px-4 py-4"
          return (
            j[22] !== W
              ? ((a = (0, o.A)("mb-3 flex items-center justify-between gap-2", W)), (j[22] = W), (j[23] = a))
              : (a = j[23]),
            j[24] !== k ? ((s = k ?? (0, l.jsx)(p.A, { ...A.a.heading })), (j[24] = k), (j[25] = s)) : (s = j[25]),
            j[26] !== Q || j[27] !== s
              ? ((r = (0, l.jsx)("h3", { id: Q, className: "m-0 body-md font-semibold", children: s })),
                (j[26] = Q),
                (j[27] = s),
                (j[28] = r))
              : (r = j[28]),
            j[29] !== Y || j[30] !== L || j[31] !== z
              ? ((d =
                  !L &&
                  (Y.model.canPrevious || Y.model.canNext) &&
                  (0, l.jsxs)("div", {
                    className: "flex shrink-0 items-center gap-1",
                    children: [
                      (0, l.jsx)(m.$, {
                        color: "ghostActive",
                        size: "toolbar",
                        uniform: !0,
                        disabled: !Y.model.canPrevious,
                        onClick: Y.actions.previous,
                        "aria-label": z.formatMessage({
                          id: "space.slideTemplates.previous",
                          defaultMessage: "Previous Slides templates",
                          description: "Scroll the native Slides templates carousel backward",
                        }),
                        children: (0, l.jsx)(f.KBq, { className: "rtl:rotate-180" }),
                      }),
                      (0, l.jsx)(m.$, {
                        color: "ghostActive",
                        size: "toolbar",
                        uniform: !0,
                        disabled: !Y.model.canNext,
                        onClick: Y.actions.next,
                        "aria-label": z.formatMessage({
                          id: "space.slideTemplates.next",
                          defaultMessage: "Next Slides templates",
                          description: "Scroll the native Slides templates carousel forward",
                        }),
                        children: (0, l.jsx)(f.j1b, { className: "rtl:rotate-180" }),
                      }),
                    ],
                  })),
                (j[29] = Y),
                (j[30] = L),
                (j[31] = z),
                (j[32] = d))
              : (d = j[32]),
            j[33] !== a || j[34] !== r || j[35] !== d
              ? ((b = (0, l.jsxs)("div", { className: a, children: [r, d] })),
                (j[33] = a),
                (j[34] = r),
                (j[35] = d),
                (j[36] = b))
              : (b = j[36]),
            j[37] !== t || j[38] !== U
              ? ((S = U ? (0, l.jsx)("div", { "data-sticky-section-content": !0, children: t }) : t),
                (j[37] = t),
                (j[38] = U),
                (j[39] = S))
              : (S = j[39]),
            j[40] !== Q || j[41] !== b || j[42] !== S
              ? ((I = (0, l.jsxs)("section", { "aria-labelledby": Q, children: [b, S] })),
                (j[40] = Q),
                (j[41] = b),
                (j[42] = S),
                (j[43] = I))
              : (I = j[43]),
            I
          )
        },
        q: E,
      },
    )
  },
  iOgI(e, t, a) {
    var l = a("zTeN"),
      i = a("E8Sp"),
      s = a("SPnB"),
      r = a("SGsN"),
      n = a("svjy"),
      o = a("nlNF"),
      d = a("rpnz"),
      c = a("e1xH"),
      u = a("SEOK"),
      p = a("kkOV"),
      h = a("pyoT"),
      g = a("iyTF"),
      m = a("OWtl")
    let f = (0, l.vP)(m.u, null)
    a.d(
      t,
      {},
      {
        M: f,
        _: async function ({ scope: e, template: t, onOpen: l, signal: m }) {
          let v,
            y,
            b = e.get(h.spaceAccountId$),
            x = e.get(s.o8)
          if (null == b || null == x || null != e.get(f) || e.get(d.ut) || !e.get(c.H6, "granola_presentation")) return
          let _ = (0, h.watchSpaceAccount)(e, b, void 0, void 0, x),
            S = new AbortController(),
            w = AbortSignal.any([_.signal, S.signal]),
            I = () => {
              null == v && S.abort(m.reason)
            }
          ;(m.addEventListener("abort", I, { once: !0 }), m.aborted && I())
          let j = e.get(o.x2)
          e.set(f, t.id)
          try {
            let [s, { preparePageHandoff: o }, { importPreparedArtifact: d }] = await Promise.all([
                (0, g.TM)(e, t, w),
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
              h = await o(
                { kind: "presentation", artifactProto: s, stateVersion: 0, assets: [] },
                w,
                e.get(c.LM, "granola_presentation"),
              )
            if ((w.throwIfAborted(), !e.get(c.H6, "granola_presentation"))) return
            ;(
              await d(e, {
                accountId: b,
                title: t.title,
                documentType: "granola_presentation",
                prepared: h,
                signal: w,
                onSaveRetry: (t) => {
                  if ((y?.close(), (y = void 0), null != t && null == v && !w.aborted)) {
                    let a = e.get(n.g)
                    y = e
                      .get(r.Id)
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
                      w.aborted ||
                      (l?.(),
                      (0, i.oo)(e, `/space/${t}`, {
                        state: {
                          ...(null != j ? (0, u.$)(j, b, t) : void 0),
                          spaceSidebarAccountId: b,
                          spaceSidebarPersonal: !0,
                        },
                      })))
                },
              })
            ).releaseNativeDocument()
          } catch {
            null != v ||
              w.aborted ||
              e
                .get(r.Id)
                .danger(
                  e
                    .get(n.g)
                    .formatMessage({
                      id: "space.slideTemplates.openFailed",
                      defaultMessage: "Couldn’t open this Slides template. Try again.",
                      description: "Error when a native Slides template cannot be downloaded or opened",
                    }),
                  { errorAnalytics: { toastId: "space.slideTemplates.openFailed" } },
                )
          } finally {
            ;(y?.close(), m.removeEventListener("abort", I), _.stop(), null == v && e.set(f, null))
          }
        },
      },
    )
  },
  R0Z4(e, t, a) {
    var l = a("D7Ms"),
      i = a("zTeN"),
      s = a("SPnB"),
      r = a("tl2n"),
      n = a("ahQQ"),
      o = a("NRR1"),
      d = a("dH0j"),
      c = a("egOE"),
      u = a("XPum")
    let p = (0, i.un)(n.vn, ({ get: e, scope: t }) => {
      let a = e(s.chatGptAuthenticatedAccountId$),
        l = e(s.chatGptAuthenticatedUserId$)
      ;(e(o.jv), e(o.$M))
      let i = t.getOwnValue(n.oD)
      return null != a && null != l && i.accountId === a && (null == i.userId || i.userId === l) && e(u.i)
        ? (0, d.EK)(t)
        : null
    })
    function h(e) {
      e.set(d.vY, null)
    }
    a.d(
      t,
      {},
      {
        _: h,
        s: function (e) {
          return e.watch(({ get: t }) => {
            let a = t(p)
            if (null == a) return void h(e)
            let i = e.get(d.vY),
              s = i?.identity === a ? i.owner : Symbol("Home visit"),
              n = (0, c.OU)(e, s)
            ;(0, d.X6)(e, s)
            let o = () => {
                let t = e.get(d.vY)
                t?.owner === s &&
                  (t.acceptActiveResponse || t.rankedKeys.length > 0) &&
                  e.set(d.vY, { ...t, acceptActiveResponse: !1, rankedKeys: [], snapshotId: void 0, collections: {} })
              },
              u = e.watch(({ get: t }) => {
                let a = t(d.vY)
                if (a?.owner !== s || "pending" !== a.display || a.deadlineExpired) return
                let l = setTimeout(
                  () => {
                    let t = e.get(d.vY)
                    t?.requestId === a.requestId && e.set(d.vY, { ...t, deadlineExpired: !0 })
                  },
                  Math.max(0, a.deadlineAt - Date.now()),
                )
                return () => clearTimeout(l)
              }),
              g = e.watch(({ get: e }) => {
                "unavailable" === e(r.dk) && o()
              }),
              { queryKey: m } = e.query.getOptions(d.If),
              f = e.queryClient.getQueryCache().subscribe((t) => {
                if (
                  "updated" === t.type &&
                  ("success" === t.action.type || ("setState" === t.action.type && void 0 !== t.action.state.data)) &&
                  (0, l.MK)({ queryKey: m, exact: !0 }, t.query)
                ) {
                  let t = e.query.getData(d.If)
                  null != t && "ready" !== t.state && o()
                }
              })
            return () => {
              ;(u(), g(), f(), n())
            }
          })
        },
      },
    )
  },
  LwtL(e, t, a) {
    var l = a("ABep"),
      i = a("QosV"),
      s = a("zTeN"),
      r = a("Wf1j"),
      n = a("oyxz"),
      o = a("BrP7"),
      d = a("cGrE"),
      c = a("Fmx8")
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
            h = (0, i.c)(10),
            g = (0, s.gh)(c.Qy),
            m = (0, r.A)()
          ;(h[0] !== m
            ? ((e = m.formatMessage({
                id: "space.images.tabs.label",
                defaultMessage: "Image sources",
                description: "Accessible label for the Space Images page tabs",
              })),
              (h[0] = m),
              (h[1] = e))
            : (e = h[1]),
            h[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = {
                  key: "generated",
                  name: (0, l.jsx)(n.A, {
                    id: "space.images.tabs.creations",
                    defaultMessage: "Your creations",
                    description: "Space Images tab showing images generated by ChatGPT",
                  }),
                }),
                (h[2] = t))
              : (t = h[2]),
            h[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = [
                  t,
                  {
                    key: "uploaded",
                    name: (0, l.jsx)(n.A, {
                      id: "space.images.tabs.uploads",
                      defaultMessage: "Uploads",
                      description: "Space Images tab showing images uploaded by the user",
                    }),
                  },
                ]),
                (h[3] = a))
              : (a = h[3]))
          let f = g.value.sources[0] ?? "generated"
          return (
            h[4] !== g
              ? ((u = (e) => {
                  ;((0, d.np)(g, { sources: [e] }), (0, c.zl)(g, (0, c.SE)({ ...g.value, sources: [e] })))
                }),
                (h[4] = g),
                (h[5] = u))
              : (u = h[5]),
            h[6] !== e || h[7] !== f || h[8] !== u
              ? ((p = (0, l.jsx)(o.t, {
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: e,
                  tabs: a,
                  selectedKey: f,
                  onSelect: u,
                })),
                (h[6] = e),
                (h[7] = f),
                (h[8] = u),
                (h[9] = p))
              : (p = h[9]),
            p
          )
        },
      },
    )
  },
  sWvQ(e, t, a) {
    a.d(t, { K: () => tO })
    var l = a("ABep"),
      i = a("QosV"),
      s = a("dSuP"),
      r = a("D015"),
      n = a("uris"),
      o = a("zTeN"),
      d = a("Bl5Q"),
      c = a("zd8w"),
      u = a("Wf1j"),
      p = a("oyxz"),
      h = a("TzYl"),
      g = a("EOo5"),
      m = a("Ghh3"),
      f = a("ygO2"),
      v = a("wZQ4"),
      y = a("zkPp"),
      b = a("cGrE"),
      x = a("TCFx"),
      _ = a("Fmx8"),
      S = a("QufO"),
      w = a("EAun"),
      I = a("tpma"),
      j = a("sz7l"),
      A = a("vq5I"),
      P = a("yGJW"),
      E = a("hZax"),
      T = a("Wj4L"),
      C = a("e1xH"),
      M = a("hVOg"),
      N = a("sO5n"),
      k = a("nTUY"),
      O = a("pyoT"),
      L = a("sg90"),
      U = a("pyo2"),
      R = a("QBk8"),
      F = a("nCYM"),
      G = a("iodE"),
      D = a("SPnB"),
      z = a("HOLv"),
      B = a("W0bA"),
      V = a("iyTF"),
      H = a("OWtl"),
      $ = a("Kw4a"),
      Q = a("jG6n"),
      Y = a("ibtF"),
      W = a("VU3o"),
      q = a("HZfM"),
      K = a("g70H"),
      Z = a("Vx7B"),
      J = a("BBQT"),
      X = a("wvfh")
    function ee(e) {
      let t,
        a,
        s,
        n,
        d = (0, i.c)(25),
        { template: c, templatePosition: p } = e,
        h = (0, o.gh)(H.u),
        g = (0, u.A)(),
        m = (0, q.Zp)(),
        f = (0, G.tF)(),
        v = (0, o.Ul)(X.K),
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
          ? ((a = (0, l.jsx)(K.D, { symbol: c.symbol, pageId: y, document: t })),
            (d[4] = y),
            (d[5] = t),
            (d[6] = c.symbol),
            (d[7] = a))
          : (a = d[7]),
        d[8] !== g ||
        d[9] !== m ||
        d[10] !== v ||
        d[11] !== f ||
        d[12] !== h ||
        d[13] !== c.id ||
        d[14] !== c.prefillPrompt ||
        d[15] !== c.previewDocument ||
        d[16] !== c.prompt ||
        d[17] !== c.symbol ||
        d[18] !== c.title ||
        d[19] !== p
          ? ((s =
              v || !f
                ? void 0
                : () => {
                    ;((0, P.yy)(h, R.CodexSpacesOnboarding, {
                      action: R.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_ITEM_SELECTED,
                      item: R.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_TEMPLATES,
                    }),
                      (0, P.yy)(h, R.CodexSpacesTemplateGallery, {
                        action:
                          R.CodexSpacesTemplateGalleryAction.CODEX_SPACES_TEMPLATE_GALLERY_ACTION_HOME_TILE_SELECTED,
                        category: "page",
                        templateId: c.id,
                        templatePosition: null == p ? void 0 : (0, r.At)(p),
                        selectionSurface:
                          R.CodexSpacesTemplateSelectionSurface.CODEX_SPACES_TEMPLATE_SELECTION_SURFACE_SPACE_HOME_TILE,
                      }),
                      (0, J.K)({
                        scope: h,
                        title: c.title,
                        prompt: c.prompt,
                        prefillPrompt: c.prefillPrompt,
                        initialDocument: c.previewDocument,
                        initialSymbol: c.symbol,
                        revealSetupComment: "project-home" === c.id || "project-tracker" === c.id,
                        navigate: m,
                        intl: g,
                      }))
                  }),
            (d[8] = g),
            (d[9] = m),
            (d[10] = v),
            (d[11] = f),
            (d[12] = h),
            (d[13] = c.id),
            (d[14] = c.prefillPrompt),
            (d[15] = c.previewDocument),
            (d[16] = c.prompt),
            (d[17] = c.symbol),
            (d[18] = c.title),
            (d[19] = p),
            (d[20] = s))
          : (s = d[20]),
        d[21] !== a || d[22] !== s || d[23] !== c.title
          ? ((n = (0, l.jsx)(Z.Z, { title: c.title, preview: a, onOpen: s })),
            (d[21] = a),
            (d[22] = s),
            (d[23] = c.title),
            (d[24] = n))
          : (n = d[24]),
        n
      )
    }
    function et(e) {
      let t,
        a,
        s,
        r,
        n,
        d,
        h,
        g,
        m,
        v,
        y,
        b,
        x,
        _,
        S = (0, i.c)(38),
        { filter: w, suggestions: I, children: j, showRecommendations: A, isCurrent: T } = e,
        M = void 0 === w ? "all" : w
      S[0] !== I ? ((t = void 0 === I ? ["templates"] : I), (S[0] = I), (S[1] = t)) : (t = S[1])
      let N = t,
        k = void 0 !== A && A,
        O = (0, o.gh)(H.u),
        L = (0, u.A)(),
        q = (0, c.useId)(),
        K = N.includes("templates"),
        Z = (0, o._U)(C.H6, "granola_presentation"),
        J = "pages" !== M && Z && K,
        { data: X } = (0, o.Ul)(J ? V.i8 : null) ?? {},
        et = (0, G.tF)(),
        es = (0, o.Ul)($.wu),
        er = (0, o.Ul)(D.e0),
        en = K && "slides" !== M && es,
        eo = (0, o.Ul)(en ? Q.ql : void 0),
        ed = (0, o.Ul)(D.o8),
        ec = (0, Y.X)(L, eo?.value, er),
        eu = (0, E.Zj)(
          !!en && void 0 !== eo && !!et && null != ec.recommended && null != ed && T?.() !== !1 && "3856949927",
        ),
        ep = k ? ec.recommended : ec.catalog,
        eh = eu && null != ep ? ep : ec.current,
        eg = en && void 0 !== eo ? eh : [],
        em = J && null != X ? X : [],
        ef = "all" === M ? em.slice(0, 2) : em,
        ev = eg.map(el),
        ey = ef.map(ea),
        eb =
          eu && k && "all" === M
            ? [...ev.slice(0, 2), ...ey.slice(0, 1), ...ev.slice(2), ...ey.slice(1)]
            : [...ev, ...ey],
        ex = eb.length > 0
      S[2] !== j ? ((a = c.Children.toArray(j)), (S[2] = j), (S[3] = a)) : (a = S[3])
      let e_ = a
      return 0 !== e_.length || ex
        ? (S[4] !== Z
            ? ((s = Z
                ? (0, l.jsx)(p.A, {
                    id: "space.gettingStarted.artifactsHeading",
                    defaultMessage: "Create together in Space",
                    description: "Heading above native Page and Slides templates in Space onboarding",
                  })
                : (0, l.jsx)(p.A, {
                    id: "space.gettingStarted.heading",
                    defaultMessage: "Create pages in Space",
                    description:
                      "Heading inviting users to create pages in Space above the guide to pages and starter page templates",
                  })),
              (S[4] = Z),
              (S[5] = s))
            : (s = S[5]),
          S[6] !== q || S[7] !== s
            ? ((r = (0, l.jsx)("h2", { id: q, className: "body-md font-normal select-none", children: s })),
              (S[6] = q),
              (S[7] = s),
              (S[8] = r))
            : (r = S[8]),
          S[9] !== L || S[10] !== Z
            ? ((n = Z
                ? L.formatMessage({
                    id: "space.gettingStarted.dismissArtifacts",
                    defaultMessage: "Dismiss Create together in Space",
                    description: "Dismiss the Page and Slides template section in Space onboarding",
                  })
                : L.formatMessage({
                    id: "space.gettingStarted.dismiss",
                    defaultMessage: "Dismiss Create pages in Space",
                    description:
                      "Accessible label for dismissing the entire Create pages in Space section without deleting any Pages",
                  })),
              (S[9] = L),
              (S[10] = Z),
              (S[11] = n))
            : (n = S[11]),
          S[12] !== O || S[13] !== N
            ? ((d = () => {
                for (let e of N)
                  (0, P.yy)(O, R.CodexSpacesOnboarding, {
                    action: R.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_ITEM_DISMISSED,
                    item:
                      "welcome" === e
                        ? R.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME
                        : R.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_TEMPLATES,
                  })
                ;(0, U.Ii)(O)
              }),
              (S[12] = O),
              (S[13] = N),
              (S[14] = d))
            : (d = S[14]),
          S[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((h = (0, l.jsx)(z.I, { asset: F.b })), (S[15] = h))
            : (h = S[15]),
          S[16] !== n || S[17] !== d
            ? ((g = (0, l.jsx)(f.$, {
                className:
                  "pointer-events-none opacity-0 group-hover/getting-started:pointer-events-auto group-hover/getting-started:opacity-100 group-has-[:focus-visible]/getting-started:pointer-events-auto group-has-[:focus-visible]/getting-started:opacity-100 pointer-coarse:pointer-events-auto pointer-coarse:opacity-100",
                color: "ghostTertiary",
                size: "inline",
                "aria-label": n,
                onClick: d,
                children: h,
              })),
              (S[16] = n),
              (S[17] = d),
              (S[18] = g))
            : (g = S[18]),
          S[19] !== g || S[20] !== r
            ? ((m = (0, l.jsxs)("div", { className: "flex items-center gap-1.5", children: [r, g] })),
              (S[19] = g),
              (S[20] = r),
              (S[21] = m))
            : (m = S[21]),
          S[22] !== ex
            ? ((v = ex
                ? (0, l.jsx)("p", {
                    className: "text-onboarding-body font-normal text-tertiary select-none",
                    children: (0, l.jsx)(p.A, {
                      id: "space.gettingStarted.description",
                      defaultMessage: "Choose a template to start working with ChatGPT and your team",
                      description:
                        "Subtitle inviting users to choose a page template within Space and work with ChatGPT and their team",
                    }),
                  })
                : null),
              (S[22] = ex),
              (S[23] = v))
            : (v = S[23]),
          S[24] !== m || S[25] !== v
            ? ((y = (0, l.jsxs)("div", { className: "flex flex-col gap-0.5", children: [m, v] })),
              (S[24] = m),
              (S[25] = v),
              (S[26] = y))
            : (y = S[26]),
          S[27] !== eb || S[28] !== ed
            ? ((b = eb.map((e, t) => {
                let { kind: a, template: i } = e
                return "page" === a
                  ? (0, l.jsx)(ee, { template: i, templatePosition: null == ed ? void 0 : t + 1 }, `page:${i.id}`)
                  : (0, l.jsx)(
                      W.q,
                      { template: i, surface: "onboarding", templatePosition: null == ed ? void 0 : t + 1 },
                      `slides:${i.id}`,
                    )
              })),
              (S[27] = eb),
              (S[28] = ed),
              (S[29] = b))
            : (b = S[29]),
          S[30] !== e_ || S[31] !== et || S[32] !== b
            ? ((x = (0, l.jsxs)(ei, { present: et, children: [e_, b] })),
              (S[30] = e_),
              (S[31] = et),
              (S[32] = b),
              (S[33] = x))
            : (x = S[33]),
          S[34] !== q || S[35] !== y || S[36] !== x
            ? ((_ = (0, l.jsxs)("section", {
                className: "group/getting-started @container/getting-started flex min-w-0 flex-col gap-3",
                "aria-labelledby": q,
                onPointerEnter: B.FM,
                onFocus: B.FM,
                children: [y, x],
              })),
              (S[34] = q),
              (S[35] = y),
              (S[36] = x),
              (S[37] = _))
            : (_ = S[37]),
          _)
        : null
    }
    function ea(e) {
      return { kind: "slides", template: e }
    }
    function el(e) {
      return { kind: "page", template: e }
    }
    let ei = (0, c.memo)(
      function (e) {
        let t,
          a = (0, i.c)(2),
          { children: s } = e
        return (
          a[0] !== s
            ? ((t = (0, l.jsx)("div", {
                className:
                  "horizontal-scroll-fade-mask horizontal-scroll-fade-mask-eased -my-4 -ms-4 grid scrollbar-on-hover min-w-0 scroll-px-4 auto-cols-[max(9rem,calc((100%-1rem)*3/4))] grid-flow-col gap-4 overflow-x-auto overscroll-x-contain p-4 @lg/getting-started:auto-cols-[max(9rem,calc((100%-2rem)*3/7))] @3xl/getting-started:auto-cols-[max(9rem,calc((100%-3rem)*3/10))] @5xl/getting-started:auto-cols-[max(9rem,calc((100%-4rem)*3/13))] @7xl/getting-started:auto-cols-[max(9rem,calc((100%-5rem)*3/16))]",
                onFocusCapture: es,
                children: s,
              })),
              (a[0] = s),
              (a[1] = t))
            : (t = a[1]),
          t
        )
      },
      (e, t) => !t.present,
    )
    function es(e) {
      e.target.matches(":focus-visible") &&
        e.currentTarget.contains(e.target) &&
        e.target.scrollIntoView({ block: "nearest", inline: "nearest", behavior: "instant" })
    }
    var er = a("XPum"),
      en = a("T0Rc"),
      eo = a("on57"),
      ed = a("DZee"),
      ec = a("P6OM"),
      eu = a("UOwN"),
      ep = a("Adh7"),
      eh = a("vSFv"),
      eg = a("rTPf"),
      em = a("lASr"),
      ef = a("oNDa"),
      ev = a("CtDr"),
      ey = a("mEbU"),
      eb = a("Ji1v"),
      ex = a("u3Vl"),
      e_ = a("NkHr"),
      eS = a("ikCk"),
      ew = a("nJU9"),
      eI = a("TjgH"),
      ej = a("Ot7V"),
      eA = a("GO7r"),
      eP = a("Q8aV"),
      eE = a("T7QO"),
      eT = a("W9pA"),
      eC = a("i4m7"),
      eM = a("khOd")
    function eN(e) {
      let t,
        a,
        s,
        r,
        n,
        d,
        c,
        u,
        h,
        m,
        f,
        v = (0, i.c)(60),
        {
          layout: y,
          project: b,
          viewMode: x,
          structuredGridEnabled: _,
          source: S,
          showSize: w,
          reserveDisclosureSpace: I,
        } = e,
        j = void 0 !== _ && _,
        A = (0, o.gh)(H.u),
        { accountId: P, userId: E } = (0, g.As)()
      v[0] !== P || v[1] !== b || v[2] !== E
        ? ((t = { accountId: P, userId: E, projectId: b.id, title: b.title, initialPinned: b.is_pinned, site: b }),
          (v[0] = P),
          (v[1] = b),
          (v[2] = E),
          (v[3] = t))
        : (t = v[3])
      let T = (0, o._U)(eS.X, t),
        C = (0, q.zy)(),
        M = (0, eP.p8)(),
        N = "suspended" === b.status,
        k = N ? null : b.live_url,
        O = "owner" === b.current_user_role,
        L = O || "editor" === b.current_user_role
      v[4] !== P ||
      v[5] !== k ||
      v[6] !== C ||
      v[7] !== b.id ||
      v[8] !== b.latest_edit_context ||
      v[9] !== b.title ||
      v[10] !== A ||
      v[11] !== M
        ? ((a = (e) => {
            ;(0, ew.$)(
              A,
              M,
              {
                type: void 0 === e ? "edit" : e,
                projectId: b.id,
                projectTitle: b.title,
                latestEditContext: b.latest_edit_context,
                liveUrl: k,
              },
              A.get(eM.GB) ? (0, eC.E)(C, P) : void 0,
            )
          }),
          (v[4] = P),
          (v[5] = k),
          (v[6] = C),
          (v[7] = b.id),
          (v[8] = b.latest_edit_context),
          (v[9] = b.title),
          (v[10] = A),
          (v[11] = M),
          (v[12] = a))
        : (a = v[12])
      let U = a
      v[13] !== k
        ? ((s = null == k ? void 0 : { href: k, initiator: "sites_library" }), (v[13] = k), (v[14] = s))
        : (s = v[14])
      let R = s
      if (null != R) {
        let e
        ;(v[15] !== R
          ? ((e = (e) => {
              null == e ? (0, ej.E0)(R) : (0, ej.PQ)({ ...R, event: e })
            }),
            (v[15] = R),
            (v[16] = e))
          : (e = v[16]),
          (r = e))
      } else if (!N && L) {
        let e
        ;(v[17] !== U ? ((e = () => U()), (v[17] = U), (v[18] = e)) : (e = v[18]), (r = e))
      }
      v[19] !== N
        ? ((n = N
            ? (0, l.jsx)(eI.E, {
                children: (0, l.jsx)(p.A, {
                  id: "appgenPage.disabledBadge",
                  defaultMessage: "Disabled",
                  description: "Status badge shown next to a site name when the site is disabled",
                }),
              })
            : null),
          (v[19] = N),
          (v[20] = n))
        : (n = v[20])
      let F = n
      v[21] !== T || v[22] !== x
        ? ((d = null != T ? (0, l.jsx)(eT.K, { action: T, viewMode: x }) : null), (v[21] = T), (v[22] = x), (v[23] = d))
        : (d = v[23])
      let G = d,
        D = T?.pinned,
        z = "active" === b.status && null == k
      v[24] !== L ||
      v[25] !== O ||
      v[26] !== N ||
      v[27] !== U ||
      v[28] !== k ||
      v[29] !== b.disabled_by ||
      v[30] !== b.id ||
      v[31] !== b.title ||
      v[32] !== D ||
      v[33] !== z ||
      v[34] !== x
        ? ((c = (0, l.jsx)(eb.u, {
            canEdit: L,
            canManage: O,
            initialIsOwner: O,
            disabled: N,
            disabledBy: b.disabled_by,
            isPinned: D,
            liveUrl: k,
            onEdit: U,
            projectId: b.id,
            projectTitle: b.title,
            compact: !0,
            surface: "library",
            unpublished: z,
            viewMode: x,
          })),
          (v[24] = L),
          (v[25] = O),
          (v[26] = N),
          (v[27] = U),
          (v[28] = k),
          (v[29] = b.disabled_by),
          (v[30] = b.id),
          (v[31] = b.title),
          (v[32] = D),
          (v[33] = z),
          (v[34] = x),
          (v[35] = c))
        : (c = v[35])
      let B = c
      v[36] !== B ||
      v[37] !== y ||
      v[38] !== R ||
      v[39] !== r ||
      v[40] !== T ||
      v[41] !== G ||
      v[42] !== b.screenshot_url ||
      v[43] !== b.title ||
      v[44] !== b.updated_at ||
      v[45] !== I ||
      v[46] !== w ||
      v[47] !== S ||
      v[48] !== F ||
      v[49] !== j ||
      v[50] !== x
        ? ((u =
            "list" === x
              ? (0, l.jsx)(eE.kt, {
                  layout: y,
                  name: b.title,
                  link: R,
                  onOpen: r,
                  artwork: (0, l.jsx)(eA.pKn, {}),
                  thumbnail: "stacked" === y ? (0, l.jsx)(ek, { screenshotUrl: b.screenshot_url }) : void 0,
                  favoriteMarker: F,
                  activity: b.updated_at ? (0, l.jsx)(e_.g, { dateString: b.updated_at }) : null,
                  detail: w ? "—" : void 0,
                  source: S,
                  actions: [
                    { key: "pin", component: G, alwaysVisible: T?.pinned },
                    { key: "menu", component: B },
                  ],
                  reserveDisclosureSpace: I,
                })
              : (0, l.jsx)(eE.cu, {
                  structuredGridEnabled: j,
                  name: b.title,
                  link: R,
                  onOpen: r,
                  square: !0,
                  landscape: !0,
                  actions: B,
                  pinAction: G,
                  actionIndicator: T?.pinned ? (0, l.jsx)(eT.L, { action: T }) : null,
                  header: (0, l.jsxs)(l.Fragment, {
                    children: [
                      !j && (0, l.jsx)(eA.pKn, {}),
                      (0, l.jsx)("span", { className: "min-w-0 truncate", children: b.title }),
                      F,
                    ],
                  }),
                  children: (0, l.jsx)(ex.x, { screenshotUrl: b.screenshot_url, viewMode: "grid" }),
                })),
          (v[36] = B),
          (v[37] = y),
          (v[38] = R),
          (v[39] = r),
          (v[40] = T),
          (v[41] = G),
          (v[42] = b.screenshot_url),
          (v[43] = b.title),
          (v[44] = b.updated_at),
          (v[45] = I),
          (v[46] = w),
          (v[47] = S),
          (v[48] = F),
          (v[49] = j),
          (v[50] = x),
          (v[51] = u))
        : (u = v[51])
      let V = u
      return (
        v[52] !== T || v[53] !== A
          ? ((h = () => T?.prefetch?.(A)),
            (m = () => T?.prefetch?.(A)),
            (v[52] = T),
            (v[53] = A),
            (v[54] = h),
            (v[55] = m))
          : ((h = v[54]), (m = v[55])),
        v[56] !== V || v[57] !== h || v[58] !== m
          ? ((f = (0, l.jsx)("div", { className: "contents", onPointerEnter: h, onFocusCapture: m, children: V })),
            (v[56] = V),
            (v[57] = h),
            (v[58] = m),
            (v[59] = f))
          : (f = v[59]),
        f
      )
    }
    function ek(e) {
      let t,
        a,
        s,
        r = (0, i.c)(6),
        { screenshotUrl: n } = e,
        o = (0, c.useRef)(null)
      r[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { margin: "200px", once: !0 }), (r[0] = t)) : (t = r[0])
      let d = (0, ey.W)(o, t)
      return (
        r[1] !== n || r[2] !== d
          ? ((a = d ? (0, l.jsx)(ex.x, { screenshotUrl: n, viewMode: "grid" }) : null),
            (r[1] = n),
            (r[2] = d),
            (r[3] = a))
          : (a = r[3]),
        r[4] !== a
          ? ((s = (0, l.jsx)("span", {
              ref: o,
              "aria-hidden": !0,
              "data-library-item-icon": "",
              className:
                "pointer-events-none relative flex h-7 w-9 shrink-0 overflow-hidden rounded-xs border border-default bg-surface",
              children: a,
            })),
            (r[4] = a),
            (r[5] = s))
          : (s = r[5]),
        s
      )
    }
    var eO = a("PIxd"),
      eL = a("DBCl"),
      eU = a("HGuJ"),
      eR = a("SGsN"),
      eF = a("bg92"),
      eG = a("nhfN"),
      eD = a("rFad"),
      ez = a("QxN6"),
      eB = a("nlNF"),
      eV = a("Oj9r"),
      eH = a("idI8"),
      e$ = a("atZq"),
      eQ = a("Lowz")
    function eY(e) {
      let t,
        a,
        s,
        r,
        n,
        d = (0, i.c)(28),
        {
          layout: c,
          isCurrent: h,
          navigation: g,
          result: m,
          viewMode: f,
          source: v,
          reserveDisclosureSpace: y,
          onOpen: b,
        } = e,
        x = (0, o.gh)(eV.GD),
        _ = (0, u.A)(),
        S = (0, q.Zp)(),
        w = (0, q.zy)(),
        I = (0, o.Ul)(O.spaceAccountId$),
        j = (0, o.Ul)(D.chatGptAuthenticatedUserId$),
        { payload: A } = m
      if ("space_page" !== A.kind && "space_file" !== A.kind) return null
      d[0] !== _ || d[1] !== m
        ? ((t =
            (0, eD.Ko)({ searchResult: m }, _) ||
            _.formatMessage({
              id: "space.home.untitledSearchResult",
              defaultMessage: "Untitled",
              description: "Fallback title for an unnamed global search result",
            })),
          (d[0] = _),
          (d[1] = m),
          (d[2] = t))
        : (t = d[2])
      let E = t
      d[3] !== m.update_time || d[4] !== f
        ? ((a =
            null == m.update_time
              ? null
              : (0, l.jsx)(eF.A, {
                  timestamp: new Date(1e3 * m.update_time).toISOString(),
                  dateKind: "suggested",
                  relative: "list" === f,
                })),
          (d[3] = m.update_time),
          (d[4] = f),
          (d[5] = a))
        : (a = d[5])
      let T = a
      d[6] !== I ||
      d[7] !== h ||
      d[8] !== w ||
      d[9] !== E ||
      d[10] !== S ||
      d[11] !== g ||
      d[12] !== b ||
      d[13] !== A ||
      d[14] !== x ||
      d[15] !== j
        ? ((s = () => {
            let e = () =>
              x.get(O.spaceAccountId$) === I &&
              x.get(D.chatGptAuthenticatedUserId$) === j &&
              x.get(C.pagesEnabled$) &&
              x.get(eB.x2)?.key === w.key &&
              (h?.() ?? !0)
            if (e()) {
              if ((b?.(), "space_page" !== A.kind)) {
                if ("space_file" === A.kind) {
                  let t = () => {
                    e() &&
                      x
                        .get(eR.Id)
                        .danger(
                          (0, l.jsx)(p.A, {
                            id: "codex.chatGptSearch.previewFailed",
                            defaultMessage: "Unable to open file preview",
                            description:
                              "Toast shown when a file preview cannot be loaded after selecting a ChatGPT search result",
                          }),
                          { errorAnalytics: { toastId: "codex.chatGptSearch.previewFailed" } },
                        )
                  }
                  null != A.page_id
                    ? (0, eU.openChatGptFile)(x, {
                        allowTaskPreview: !0,
                        browserPreview: !0,
                        conversationId: null,
                        downloadFallback: !1,
                        fileName: E,
                        isAccessBlocked: (e) =>
                          e.get(O.spaceAccountId$) !== I ||
                          e.get(D.chatGptAuthenticatedUserId$) !== j ||
                          !e.get(C.pagesEnabled$),
                        tabKey: `page:${I}:${A.page_id}:${A.file_id}`,
                        target: { type: "page-file", fileId: A.file_id, pageId: A.page_id },
                      }).catch(t)
                    : (0, eL.PKK)(A.file_id)
                      ? null == g && x.get(e$.kJ)
                        ? (0, eQ.D)(x, { kind: "library", libraryFileId: A.file_id })
                        : (0, ez.openLibraryFileTab)(x, A.file_id, E)
                      : t()
                }
                return
              }
              ;((0, P.yy)(x, R.CodexSpacesPageOpenRequested, {
                referrer: R.CodexSpacesPageOpenReferrer.CODEX_SPACES_PAGE_OPEN_REFERRER_SEARCH,
              }),
                (0, eH.openGlobalSearchSpacePage)(x, S, w, A, e, g?.onOpenPage).catch(() => {
                  e() &&
                    x
                      .get(eR.Id)
                      .danger(
                        (0, l.jsx)(p.A, {
                          id: "codex.chatGptSearch.pageOpenFailed.byDocumentType",
                          values: {
                            documentType: x.get(O.loadedSpacePageMetadata$, A.page_id)?.document_type ?? "page",
                          },
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
          (d[6] = I),
          (d[7] = h),
          (d[8] = w),
          (d[9] = E),
          (d[10] = S),
          (d[11] = g),
          (d[12] = b),
          (d[13] = A),
          (d[14] = x),
          (d[15] = j),
          (d[16] = s))
        : (s = d[16])
      let M = s
      if ("space_page" === A.kind) {
        let e
        ;(d[17] !== f
          ? ((e =
              "grid" === f
                ? (0, l.jsx)(z.I, { asset: eO._, className: "text-file-document" })
                : (0, l.jsx)(eA.hXV, { className: "text-file-document" })),
            (d[17] = f),
            (d[18] = e))
          : (e = d[18]),
          (r = e))
      }
      return (
        d[19] !== T ||
        d[20] !== c ||
        d[21] !== E ||
        d[22] !== M ||
        d[23] !== r ||
        d[24] !== y ||
        d[25] !== v ||
        d[26] !== f
          ? ((n =
              "grid" === f
                ? (0, l.jsx)(eE.cu, {
                    name: E,
                    square: !0,
                    onOpen: M,
                    children: (0, l.jsx)(eE.JV, {
                      heading: E,
                      artwork:
                        r ??
                        (0, l.jsx)(eG.p, { fileName: void 0, mimeType: void 0, provider: "native", style: "card" }),
                      footer: (0, l.jsx)("span", { className: "min-w-0 truncate", children: T }),
                    }),
                  })
                : (0, l.jsx)(eE.kt, {
                    layout: c,
                    reserveDisclosureSpace: y,
                    name: E,
                    artwork: r ?? (0, l.jsx)(eA.o_G, {}),
                    source: v,
                    activity: T,
                    onOpen: M,
                  })),
            (d[19] = T),
            (d[20] = c),
            (d[21] = E),
            (d[22] = M),
            (d[23] = r),
            (d[24] = y),
            (d[25] = v),
            (d[26] = f),
            (d[27] = n))
          : (n = d[27]),
        n
      )
    }
    var eW = a("apD6")
    function eq(e) {
      let t,
        a,
        s = (0, i.c)(26),
        { item: r, catalog: n, navigation: d, onOpenProfile: c, inline: u, labelCreator: p } = e,
        h = void 0 !== u && u,
        m = void 0 !== p && p,
        { userId: f } = (0, g.As)(),
        v = (0, o.Ul)(void 0 === n ? O.spacesQuery$ : null),
        y = n ?? v?.data
      s[0] !== r || s[1] !== y ? ((t = e2(y, r)), (s[0] = r), (s[1] = y), (s[2] = t)) : (t = s[2])
      let b = t
      if (null == b) {
        let e, t
        if (
          ("libraryPage" in r ? (e = r.libraryPage) : "page" in r && (e = r.libraryItem),
          e?.node.shared_by?.name || e?.node.shared_via?.length)
        ) {
          let t
          return (
            s[3] !== h || s[4] !== e || s[5] !== c
              ? ((t = (0, l.jsx)(em.f, { entry: e, onOpenProfile: c, inline: h })),
                (s[3] = h),
                (s[4] = e),
                (s[5] = c),
                (s[6] = t))
              : (t = s[6]),
            t
          )
        }
        if ("libraryPage" in r && "owned" !== r.libraryPage.node.access_kind) {
          let e
          return (
            s[7] !== h || s[8] !== r.libraryPage.node.id || s[9] !== m || s[10] !== c
              ? ((e = (0, l.jsx)(e1, { pageId: r.libraryPage.node.id, labelCreator: m, onOpenProfile: c, inline: h })),
                (s[7] = h),
                (s[8] = r.libraryPage.node.id),
                (s[9] = m),
                (s[10] = c),
                (s[11] = e))
              : (e = s[11]),
            e
          )
        }
        let a = "page" in r ? r.page.creator_account_user_id : void 0
        if (a && f && a.split("__")[0] !== f.split("__")[0]) {
          let e
          return (
            s[12] !== a || s[13] !== h || s[14] !== m || s[15] !== c
              ? ((e = (0, l.jsx)(e0, { accountUserId: a, labelCreator: m, onOpenProfile: c, inline: h })),
                (s[12] = a),
                (s[13] = h),
                (s[14] = m),
                (s[15] = c),
                (s[16] = e))
              : (e = s[16]),
            e
          )
        }
        return (
          s[17] !== h || s[18] !== r || s[19] !== d || s[20] !== y
            ? ((t =
                "node" in r && null != r.node.parent_directory_id && ["native", "native_shared"].includes((0, x.sm)(r))
                  ? (0, l.jsx)(eZ, { spaces: y, item: r, navigation: d, inline: h })
                  : (0, l.jsx)(l.Fragment, { children: h ? null : "—" })),
              (s[17] = h),
              (s[18] = r),
              (s[19] = d),
              (s[20] = y),
              (s[21] = t))
            : (t = s[21]),
          t
        )
      }
      return (
        s[22] !== h || s[23] !== d || s[24] !== b
          ? ((a = (0, l.jsx)(ef.Q, { navigation: d, space: b, inline: h })),
            (s[22] = h),
            (s[23] = d),
            (s[24] = b),
            (s[25] = a))
          : (a = s[25]),
        a
      )
    }
    function eK(e) {
      let t,
        a,
        s,
        r,
        n = (0, i.c)(73),
        {
          browseLocation: o,
          spaces: d,
          showRowThumbnails: c,
          structuredGridEnabled: u,
          observeSearchResult: p,
          onOpenSearchResult: h,
          isCurrent: g,
          item: m,
          exportToGoogleDrive: f,
          navigation: v,
          onOpenProfile: y,
          viewMode: b,
          source: x,
          pageTree: S,
          reserveDisclosureSpace: w,
          pinnedPresentation: I,
          reorderAction: j,
        } = e,
        A = void 0 !== c && c
      if ("searchResult" in m) {
        let e, t, a
        n[0] !== p ? ((e = (e) => (null == e ? void 0 : p(e))), (n[0] = p), (n[1] = e)) : (e = n[1])
        let i = A ? "stacked" : "columns"
        return (
          n[2] !== g ||
          n[3] !== m.searchResult ||
          n[4] !== v ||
          n[5] !== h ||
          n[6] !== w ||
          n[7] !== x ||
          n[8] !== i ||
          n[9] !== b
            ? ((t = (0, l.jsx)(eY, {
                layout: i,
                isCurrent: g,
                navigation: v,
                result: m.searchResult,
                viewMode: b,
                source: x,
                reserveDisclosureSpace: w,
                onOpen: h,
              })),
              (n[2] = g),
              (n[3] = m.searchResult),
              (n[4] = v),
              (n[5] = h),
              (n[6] = w),
              (n[7] = x),
              (n[8] = i),
              (n[9] = b),
              (n[10] = t))
            : (t = n[10]),
          n[11] !== e || n[12] !== t
            ? ((a = (0, l.jsx)("div", { ref: e, "data-library-item": "", children: t })),
              (n[11] = e),
              (n[12] = t),
              (n[13] = a))
            : (a = n[13]),
          a
        )
      }
      if ("siteProject" in m) {
        let e,
          t,
          a = A ? "stacked" : "columns",
          i = m.siteProject
        return (
          n[14] !== o ? ((e = (0, _.fQ)(o)), (n[14] = o), (n[15] = e)) : (e = n[15]),
          n[16] !== m.siteProject ||
          n[17] !== w ||
          n[18] !== x ||
          n[19] !== u ||
          n[20] !== a ||
          n[21] !== e ||
          n[22] !== b
            ? ((t = (0, l.jsx)(eN, {
                layout: a,
                structuredGridEnabled: u,
                project: i,
                viewMode: b,
                source: x,
                showSize: e,
                reserveDisclosureSpace: w,
              })),
              (n[16] = m.siteProject),
              (n[17] = w),
              (n[18] = x),
              (n[19] = u),
              (n[20] = a),
              (n[21] = e),
              (n[22] = b),
              (n[23] = t))
            : (t = n[23]),
          t
        )
      }
      n[24] !== m || n[25] !== d ? ((t = e2(d, m)), (n[24] = m), (n[25] = d), (n[26] = t)) : (t = n[26])
      let P = t,
        E = A && "list" === b && "library:collection:shared-with-me" === o.directoryId
      if (null != S && "list" === b) {
        let e,
          t,
          a,
          i = A ? "stacked" : "columns",
          s = "page" in m ? m.page : m.libraryPage,
          r = void 0 !== x,
          c = "library:collection:shared-with-me" === o.directoryId
        return (
          n[27] !== o ? ((e = (0, _.fQ)(o)), (n[27] = o), (n[28] = e)) : (e = n[28]),
          n[29] !== o ||
          n[30] !== f ||
          n[31] !== v ||
          n[32] !== y ||
          n[33] !== S.itemsByPageId ||
          n[34] !== P ||
          n[35] !== E ||
          n[36] !== A ||
          n[37] !== x ||
          n[38] !== d
            ? ((t = (e, t) => {
                let a = S.itemsByPageId.get("node" in e ? e.node.id : e.page_id)
                return (0, l.jsx)(eW.M, {
                  exportToGoogleDrive: 0 === t.depth ? f : void 0,
                  navigation: v,
                  showRowThumbnail: A,
                  activityDate: (0, ed.sm)(a),
                  page: null != a && "libraryPage" in a ? a.libraryPage : e,
                  libraryItem: null != a && "page" in a ? a.libraryItem : void 0,
                  parentSpace: P,
                  viewMode: "list",
                  libraryPresentation: !0,
                  browseLocation: o,
                  source:
                    void 0 !== x || E
                      ? (0, l.jsx)(eq, {
                          catalog: d ?? null,
                          labelCreator: E,
                          navigation: v,
                          onOpenProfile: y,
                          inline: A,
                          item: a ?? ("node" in e ? { libraryPage: e } : { page: e }),
                        })
                      : void 0,
                  tree: t,
                })
              }),
              (n[29] = o),
              (n[30] = f),
              (n[31] = v),
              (n[32] = y),
              (n[33] = S.itemsByPageId),
              (n[34] = P),
              (n[35] = E),
              (n[36] = A),
              (n[37] = x),
              (n[38] = d),
              (n[39] = t))
            : (t = n[39]),
          n[40] !== S.expansion ||
          n[41] !== S.knownChildrenByParent ||
          n[42] !== i ||
          n[43] !== s ||
          n[44] !== r ||
          n[45] !== c ||
          n[46] !== e ||
          n[47] !== t
            ? ((a = (0, l.jsx)(ev.Z, {
                discoverChildren: !0,
                layout: i,
                page: s,
                showSource: r,
                showSharedBy: c,
                showSize: e,
                expansion: S.expansion,
                knownChildrenByParent: S.knownChildrenByParent,
                renderPage: t,
              })),
              (n[40] = S.expansion),
              (n[41] = S.knownChildrenByParent),
              (n[42] = i),
              (n[43] = s),
              (n[44] = r),
              (n[45] = c),
              (n[46] = e),
              (n[47] = t),
              (n[48] = a))
            : (a = n[48]),
          a
        )
      }
      n[49] !== m ? ((a = (0, ed.sm)(m)), (n[49] = m), (n[50] = a)) : (a = n[50])
      let T = "page" in m ? m.page : m.libraryPage,
        C = "page" in m ? m.libraryItem : void 0
      return (
        n[51] !== m || n[52] !== v || n[53] !== y || n[54] !== E || n[55] !== x || n[56] !== d
          ? ((s =
              x ??
              (E
                ? (0, l.jsx)(eq, {
                    catalog: d ?? null,
                    item: m,
                    navigation: v,
                    onOpenProfile: y,
                    inline: !0,
                    labelCreator: !0,
                  })
                : void 0)),
            (n[51] = m),
            (n[52] = v),
            (n[53] = y),
            (n[54] = E),
            (n[55] = x),
            (n[56] = d),
            (n[57] = s))
          : (s = n[57]),
        n[58] !== o ||
        n[59] !== f ||
        n[60] !== v ||
        n[61] !== P ||
        n[62] !== I ||
        n[63] !== j ||
        n[64] !== w ||
        n[65] !== A ||
        n[66] !== u ||
        n[67] !== a ||
        n[68] !== T ||
        n[69] !== C ||
        n[70] !== s ||
        n[71] !== b
          ? ((r = (0, l.jsx)(eW.M, {
              exportToGoogleDrive: f,
              structuredGridEnabled: u,
              navigation: v,
              showRowThumbnail: A,
              activityDate: a,
              page: T,
              libraryItem: C,
              parentSpace: P,
              viewMode: b,
              libraryPresentation: !0,
              pinnedPresentation: I,
              reorderAction: j,
              browseLocation: o,
              source: s,
              reserveDisclosureSpace: w,
            })),
            (n[58] = o),
            (n[59] = f),
            (n[60] = v),
            (n[61] = P),
            (n[62] = I),
            (n[63] = j),
            (n[64] = w),
            (n[65] = A),
            (n[66] = u),
            (n[67] = a),
            (n[68] = T),
            (n[69] = C),
            (n[70] = s),
            (n[71] = b),
            (n[72] = r))
          : (r = n[72]),
        r
      )
    }
    function eZ(e) {
      let t,
        a,
        s,
        r,
        n,
        d,
        c = (0, i.c)(21),
        { item: u, spaces: p, navigation: h, inline: g } = e,
        m = (0, o.gh)(_.Qy),
        f = u.node.parent_directory_id
      ;(c[0] !== f || c[1] !== m.value.accountId || c[2] !== m.value.userId
        ? ((t = (0, ec.c)(m.value.accountId, m.value.userId, f)),
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
                  isExpectedError: eX,
                  signal: t,
                })
            }),
            (c[4] = f),
            (c[5] = m),
            (c[6] = a))
          : (a = c[6]),
        c[7] !== f || c[8] !== p?.items
          ? ((s = null != f && p?.items.some(eJ) === !0), (c[7] = f), (c[8] = p?.items), (c[9] = s))
          : (s = c[9]),
        c[10] !== t || c[11] !== a || c[12] !== s
          ? ((r = { queryKey: t, queryFn: a, enabled: s, staleTime: 6e4 }),
            (c[10] = t),
            (c[11] = a),
            (c[12] = s),
            (c[13] = r))
          : (r = c[13]))
      let { data: v } = (0, en.I)(r, m.queryClient)
      c[14] !== v?.items || c[15] !== p?.items
        ? ((n = p?.items.find(
            (e) => null != e.root_directory_id && v?.items.some((t) => t.id === e.root_directory_id),
          )),
          (c[14] = v?.items),
          (c[15] = p?.items),
          (c[16] = n))
        : (n = c[16])
      let y = n
      return (
        c[17] !== g || c[18] !== h || c[19] !== y
          ? ((d =
              null == y
                ? (0, l.jsx)(l.Fragment, { children: g ? null : "—" })
                : (0, l.jsx)(ef.Q, { navigation: h, space: y, inline: g })),
            (c[17] = g),
            (c[18] = h),
            (c[19] = y),
            (c[20] = d))
          : (d = c[20]),
        d
      )
    }
    function eJ(e) {
      return null != e.root_directory_id
    }
    function eX(e) {
      return 403 === e.status || 404 === e.status
    }
    function e0(e) {
      let t,
        a,
        s,
        r,
        n,
        d,
        c = (0, i.c)(23),
        { accountUserId: u, onOpenProfile: h, inline: g, labelCreator: m } = e,
        f = (0, o._U)(eg.ik, u),
        v = (0, o.Ul)(eh.JG)
      if (null == f) {
        let e,
          t = g ? null : "—"
        return (c[0] !== t ? ((e = (0, l.jsx)(l.Fragment, { children: t })), (c[0] = t), (c[1] = e)) : (e = c[1]), e)
      }
      let y = g ? "flex gap-1.5" : "inline-flex gap-2",
        b = v && "relative z-10"
      c[2] !== y || c[3] !== b
        ? ((t = (0, eo.A)("min-w-0 items-center", y, b)), (c[2] = y), (c[3] = b), (c[4] = t))
        : (t = c[4])
      let x = g ? "metadata" : "inline"
      return (
        c[5] !== u || c[6] !== f || c[7] !== x
          ? ((a = (0, l.jsx)(eu.Y, { accountUserId: u, name: f, size: x })),
            (c[5] = u),
            (c[6] = f),
            (c[7] = x),
            (c[8] = a))
          : (a = c[8]),
        c[9] !== m || c[10] !== f
          ? ((s = m
              ? (0, l.jsx)(p.A, {
                  id: "space.page.creatorContext",
                  defaultMessage: "Created by {name}",
                  description:
                    "Fallback Page context when the person who shared it is unknown; name is the Page creator's display name",
                  values: { name: f },
                })
              : f),
            (c[9] = m),
            (c[10] = f),
            (c[11] = s))
          : (s = c[11]),
        c[12] !== s
          ? ((r = (0, l.jsx)("span", { className: "truncate", children: s })), (c[12] = s), (c[13] = r))
          : (r = c[13]),
        c[14] !== t || c[15] !== a || c[16] !== r
          ? ((n = (0, l.jsxs)("span", { className: t, children: [a, r] })),
            (c[14] = t),
            (c[15] = a),
            (c[16] = r),
            (c[17] = n))
          : (n = c[17]),
        c[18] !== u || c[19] !== f || c[20] !== h || c[21] !== n
          ? ((d = (0, l.jsx)(ep.Ve, { accountUserId: u, label: f, onOpenProfile: h, children: n })),
            (c[18] = u),
            (c[19] = f),
            (c[20] = h),
            (c[21] = n),
            (c[22] = d))
          : (d = c[22]),
        d
      )
    }
    function e1(e) {
      let t,
        a = (0, i.c)(6),
        { pageId: s, onOpenProfile: r, inline: n, labelCreator: d } = e,
        { userId: c } = (0, g.As)(),
        u = (0, o._U)(O.loadedSpacePageMetadata$, s),
        p = u?.creator_account_user_id
      return (
        a[0] !== p || a[1] !== n || a[2] !== d || a[3] !== r || a[4] !== c
          ? ((t =
              p && c && p.split("__")[0] !== c.split("__")[0]
                ? (0, l.jsx)(e0, { accountUserId: p, labelCreator: d, inline: n, onOpenProfile: r })
                : (0, l.jsx)(l.Fragment, { children: n ? null : "—" })),
            (a[0] = p),
            (a[1] = n),
            (a[2] = d),
            (a[3] = r),
            (a[4] = c),
            (a[5] = t))
          : (t = a[5]),
        t
      )
    }
    function e2(e, t) {
      return e?.items.find((e) => {
        if ("libraryPage" in t) return t.libraryPage.node.page_metadata?.drive_space_id === e.id
        if ("page" in t) return t.page.drive_space_id === e.id
        if ("node" in t) return null != e.root_directory_id && e.root_directory_id === t.node.parent_directory_id
        if (!("searchResult" in t)) return !1
        let a = t.searchResult.payload
        return ("space_page" === a.kind || "space_file" === a.kind) && a.space_id === e.id
      })
    }
    var e3 = a("y67V"),
      e4 = a("OOaz"),
      e5 = a("GigQ")
    let e7 = `${e4.Yu}opened-share-renderability`
    function e8(e, t) {
      if (!("posted_at" in e)) return !0
      let a = e.attachments[0]
      return a?.kind === "prompt_share"
        ? !t && a.prompt_share.content.prompt.trim().length > 0
        : (a?.kind === "prompt" && a.prompt.trim().length > 0 && e.attachments.every((e) => "prompt" === e.kind)) ||
            null != (0, e5.$)(e, e7) ||
            e.attachments.some(e6)
    }
    function e6(e) {
      return "media_generation" === e.kind && "image_gen" === e.generation_type && !0 !== e.output_blocked
    }
    function e9(e, t) {
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
    var te = a("XPCU"),
      tt = a("FM08")
    function ta(e) {
      let t,
        a,
        n,
        d,
        c,
        p,
        h,
        g,
        m,
        v,
        y,
        x,
        S,
        w,
        I,
        j,
        E = (0, i.c)(76),
        {
          layout: T,
          item: C,
          viewMode: M,
          structuredGridEnabled: N,
          reserveDisclosureSpace: k,
          position: O,
          onDelete: L,
        } = e,
        U = void 0 !== N && N,
        R = (0, o.gh)(_.Qy),
        F = (0, u.A)(),
        G = "posted_at" in C
      if (E[0] !== F || E[1] !== G || E[2] !== C || E[3] !== O || E[4] !== R || E[5] !== M) {
        let e, i, o
        ;((g = e9(C, F)),
          E[14] !== G
            ? ((e = G ? (0, l.jsx)(eA.DIB, {}) : (0, l.jsx)(eA.VhP, {})), (E[14] = G), (E[15] = e))
            : (e = E[15]),
          (d = e))
        let u = G && C.attachments.some(tl)
        if (((c = null), G && !u))
          if (E[16] !== C.attachments) {
            for (let e of C.attachments)
              if (e6(e)) {
                c = (0, te.I)(e.url)
                break
              }
            ;((E[16] = C.attachments), (E[17] = c))
          } else c = E[17]
        n = G
          ? `/s/${encodeURIComponent(C.id)}`
          : `${null == C.workspace_id ? "/share/" : "/share/e/"}${encodeURIComponent(C.id)}`
        let m = C.last_opened_at ?? C.first_opened_at
        ;(E[18] !== m
          ? ((i = null == m ? "—" : (0, l.jsx)(eF.A, { timestamp: m, dateKind: "shared" })), (E[18] = m), (E[19] = i))
          : (i = E[19]),
          (a = i),
          E[20] !== G || E[21] !== C.id || E[22] !== O || E[23] !== R || E[24] !== M
            ? ((o = (e) => {
                ;(0, P.yy)(R, s.pG, {
                  ...(0, b.zH)(R),
                  interactionType: e,
                  artifactId: C.id,
                  entityKind: G ? "received_post" : "received_conversation",
                  libraryOrigin: b._0,
                  provider: (0, A.Pw)(R.value.directoryId),
                  folderKind: "CHATGPT_FILE_LIBRARY_FOLDER_KIND_SHARED_WITH_ME",
                  layout: "grid" === M ? "CHATGPT_FILE_LIBRARY_LAYOUT_GRID" : "CHATGPT_FILE_LIBRARY_LAYOUT_LIST",
                  position: (0, r.PZ)(O),
                })
              }),
              (E[20] = G),
              (E[21] = C.id),
              (E[22] = O),
              (E[23] = R),
              (E[24] = M),
              (E[25] = o))
            : (o = E[25]),
          (p = o),
          (t = f.$),
          (h = F.formatMessage(
            {
              id: "space.openedSharedLinks.delete",
              defaultMessage: "Delete {title} from Shared with you",
              description:
                "Accessible label for a button that removes an opened shared ChatGPT link from the Space Shared with you view",
            },
            { title: g },
          )),
          (E[0] = F),
          (E[1] = G),
          (E[2] = C),
          (E[3] = O),
          (E[4] = R),
          (E[5] = M),
          (E[6] = t),
          (E[7] = a),
          (E[8] = n),
          (E[9] = d),
          (E[10] = c),
          (E[11] = p),
          (E[12] = h),
          (E[13] = g))
      } else ((t = E[6]), (a = E[7]), (n = E[8]), (d = E[9]), (c = E[10]), (p = E[11]), (h = E[12]), (g = E[13]))
      ;(E[26] !== F || E[27] !== G || E[28] !== C.id || E[29] !== p || E[30] !== L || E[31] !== R
        ? ((m = () => {
            ;(p("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_INITIATED"),
              (0, _.ZT)(R, `${G ? "post" : "conversation"}:${C.id}`, L)
                .then(() => {
                  p("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_SUCCEEDED")
                })
                .catch(() => {
                  ;(p("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DELETE_FAILED"),
                    R.get(eR.Id).danger(
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
          (E[26] = F),
          (E[27] = G),
          (E[28] = C.id),
          (E[29] = p),
          (E[30] = L),
          (E[31] = R),
          (E[32] = m))
        : (m = E[32]),
        E[33] === Symbol.for("react.memo_cache_sentinel") ? ((v = (0, l.jsx)(eA.cSG, {})), (E[33] = v)) : (v = E[33]),
        E[34] !== t || E[35] !== h || E[36] !== m
          ? ((y = (0, l.jsx)(t, {
              "aria-label": h,
              color: "ghostDanger",
              onClick: m,
              size: "actionSm",
              uniform: !0,
              children: v,
            })),
            (E[34] = t),
            (E[35] = h),
            (E[36] = m),
            (E[37] = y))
          : (y = E[37]))
      let D = y
      if ("grid" === M) {
        let e, t, a, i
        return (
          E[38] !== p
            ? ((e = () => p("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_OPENED")), (E[38] = p), (E[39] = e))
            : (e = E[39]),
          E[40] !== d || E[41] !== c || E[42] !== U || E[43] !== g
            ? ((t =
                U && null != c
                  ? void 0
                  : (0, l.jsxs)(l.Fragment, {
                      children: [!U && d, (0, l.jsx)("span", { className: "truncate", children: g })],
                    })),
              (E[40] = d),
              (E[41] = c),
              (E[42] = U),
              (E[43] = g),
              (E[44] = t))
            : (t = E[44]),
          E[45] !== d || E[46] !== c || E[47] !== U
            ? ((a = (0, l.jsx)("span", {
                className: "relative min-h-0 w-full flex-1",
                children:
                  null == c
                    ? (0, l.jsx)(eE.Qe, { artwork: d })
                    : (0, l.jsx)(tt.j, {
                        className: (0, eo.A)(
                          "absolute inset-0",
                          U
                            ? "m-auto h-auto max-h-full w-auto max-w-full rounded-xl object-contain"
                            : "size-full object-cover",
                        ),
                        src: c,
                        fallback: (0, l.jsx)(eE.Qe, { artwork: d }),
                      }),
              })),
              (E[45] = d),
              (E[46] = c),
              (E[47] = U),
              (E[48] = a))
            : (a = E[48]),
          E[49] !== D || E[50] !== n || E[51] !== U || E[52] !== e || E[53] !== t || E[54] !== a || E[55] !== g
            ? ((i = (0, l.jsx)(eE.cu, {
                structuredGridEnabled: U,
                name: g,
                href: n,
                onActivate: e,
                actions: D,
                square: !0,
                documentHeader: t,
                children: a,
              })),
              (E[49] = D),
              (E[50] = n),
              (E[51] = U),
              (E[52] = e),
              (E[53] = t),
              (E[54] = a),
              (E[55] = g),
              (E[56] = i))
            : (i = E[56]),
          i
        )
      }
      return (
        E[57] !== d || E[58] !== c
          ? ((x = null == c ? d : (0, l.jsx)(tt.j, { className: "size-full object-cover", src: c, fallback: d })),
            (E[57] = d),
            (E[58] = c),
            (E[59] = x))
          : (x = E[59]),
        E[60] !== C.shared_by ? ((S = C.shared_by?.trim() || "—"), (E[60] = C.shared_by), (E[61] = S)) : (S = E[61]),
        E[62] !== p
          ? ((w = () => p("CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_OPENED")), (E[62] = p), (E[63] = w))
          : (w = E[63]),
        E[64] !== D ? ((I = [{ key: "delete", component: D }]), (E[64] = D), (E[65] = I)) : (I = E[65]),
        E[66] !== a ||
        E[67] !== n ||
        E[68] !== T ||
        E[69] !== k ||
        E[70] !== x ||
        E[71] !== S ||
        E[72] !== w ||
        E[73] !== I ||
        E[74] !== g
          ? ((j = (0, l.jsx)(eE.kt, {
              layout: T,
              reserveDisclosureSpace: k,
              name: g,
              artwork: x,
              activity: a,
              sharedBy: S,
              href: n,
              onActivate: w,
              actions: I,
            })),
            (E[66] = a),
            (E[67] = n),
            (E[68] = T),
            (E[69] = k),
            (E[70] = x),
            (E[71] = S),
            (E[72] = w),
            (E[73] = I),
            (E[74] = g),
            (E[75] = j))
          : (j = E[75]),
        j
      )
    }
    function tl(e) {
      return "prompt_share" === e.kind || "message_slice" === e.kind
    }
    function ti(e) {
      let t,
        a,
        s,
        r,
        n = (0, i.c)(10),
        { error: o, hasCachedItems: d, isFetching: c, isNextPageError: u, onRetry: h } = e
      if (!o) return null
      n[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, l.jsx)(p.A, {
            id: "space.openedSharedLinks.error",
            defaultMessage: "Unable to load opened links",
            description:
              "Error shown when the Space Shared with you view cannot load shared ChatGPT links the user has opened",
          })),
          (n[0] = t))
        : (t = n[0])
      let g = t
      if (u) {
        let e
        ;(n[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(p.A, {
              id: "space.openedSharedLinks.loadMoreError",
              defaultMessage: "Unable to load more opened links",
              description:
                "Error shown when the Space Shared with you view cannot load the next page of shared ChatGPT links the user has opened",
            })),
            (n[1] = e))
          : (e = n[1]),
          (g = e))
      } else if (d) {
        let e
        ;(n[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(p.A, {
              id: "space.openedSharedLinks.refreshError",
              defaultMessage: "Unable to refresh opened links",
              description:
                "Error shown when previously loaded shared ChatGPT links remain visible in the Space Shared with you view but could not be refreshed",
            })),
            (n[2] = e))
          : (e = n[2]),
          (g = e))
      }
      return (
        n[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, l.jsx)(p.A, {
              id: "libraryNext.results.retry",
              defaultMessage: "Try again",
              description: "Retry fetching Library results",
            })),
            (n[3] = a))
          : (a = n[3]),
        n[4] !== c || n[5] !== h
          ? ((s = (0, l.jsx)(f.$, { color: "ghost", disabled: c, onClick: h, children: a })),
            (n[4] = c),
            (n[5] = h),
            (n[6] = s))
          : (s = n[6]),
        n[7] !== g || n[8] !== s
          ? ((r = (0, l.jsxs)("div", {
              className: "flex items-center gap-3 pb-4 text-secondary",
              role: "alert",
              children: [g, s],
            })),
            (n[7] = g),
            (n[8] = s),
            (n[9] = r))
          : (r = n[9]),
        r
      )
    }
    function ts(e) {
      let t,
        a,
        s = (0, i.c)(4),
        { hasNextPage: r, isFetchingNextPage: n, onLoadNextPage: o } = e
      return r
        ? (s[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, l.jsx)(p.A, {
                id: "space.openedSharedLinks.loadMore",
                defaultMessage: "Load more",
                description: "Button to load more shared ChatGPT links the user has opened",
              })),
              (s[0] = t))
            : (t = s[0]),
          s[1] !== n || s[2] !== o
            ? ((a = (0, l.jsx)("div", {
                className: "flex justify-center pb-4",
                children: (0, l.jsx)(f.$, { color: "ghost", disabled: n, loading: n, onClick: o, children: t }),
              })),
              (s[1] = n),
              (s[2] = o),
              (s[3] = a))
            : (a = s[3]),
          a)
        : null
    }
    var tr = a("aV3j"),
      tn = a("NRh3"),
      to = a("IFrF"),
      td = a("FWLJ"),
      tc = a("T1PX"),
      tu = a("Qgfj"),
      tp = a("X3K1"),
      th = a("nndI"),
      tg = a("SCmN"),
      tm = a("WP5H"),
      tf = a("I8SU"),
      tv = a("CZSB"),
      ty = a("i1Zq"),
      tb = a("JkZJ")
    function tx(e) {
      let t,
        a,
        s,
        r,
        n,
        d,
        c,
        p,
        h,
        g,
        m = (0, i.c)(39),
        { suggestions: f, navigation: v, isCurrent: y } = e,
        b = (0, o.gh)(H.u),
        x = (0, u.A)(),
        _ = (0, q.Zp)(),
        S = (0, o.Ul)(tg.jm),
        w = (0, o.Ul)(tf.cJ),
        I = (0, o.Ul)(th.ax),
        j = null == S ? void 0 : I[S.key],
        A = (0, o._U)(tg.av, S?.key ?? ""),
        E = (0, o._U)(tg.Dj, S?.key ?? ""),
        T = (0, o.Ul)(U.Gd)
      if (
        m[0] !== E ||
        m[1] !== w ||
        m[2] !== x ||
        m[3] !== y ||
        m[4] !== _ ||
        m[5] !== v?.onOpenPage ||
        m[6] !== A ||
        m[7] !== b ||
        m[8] !== f ||
        m[9] !== j
      ) {
        let e, i
        m[17] !== E || m[18] !== j
          ? ((e = (e) => "welcome" !== e || (null != j && "available" === E)), (m[17] = E), (m[18] = j), (m[19] = e))
          : (e = m[19])
        let o = f.filter(e)
        ;(m[20] !== y || m[21] !== b
          ? ((i = () => b.get(U.Wz) && y?.() !== !1), (m[20] = y), (m[21] = b), (m[22] = i))
          : (i = m[22]),
          (a = i),
          m[23] !== f
            ? ((c = f.includes("welcome") ? (0, l.jsx)(t_, {}) : null), (m[23] = f), (m[24] = c))
            : (c = m[24]),
          (t = et),
          (s = o),
          (r = !0),
          (n = y),
          (d =
            o.includes("welcome") &&
            (0, l.jsx)(tS, {
              opening: A,
              creating: !1,
              failed: !1,
              highlighted: null != w,
              onOpen: A
                ? void 0
                : () => {
                    let e = b.get(tg.jm),
                      t = null == e ? void 0 : b.get(th.ax)[e.key]
                    null != t &&
                      ((0, P.yy)(b, R.CodexSpacesOnboarding, {
                        action: R.CodexSpacesOnboardingAction.CODEX_SPACES_ONBOARDING_ACTION_ITEM_SELECTED,
                        item: R.CodexSpacesOnboardingItem.CODEX_SPACES_ONBOARDING_ITEM_WELCOME,
                        pageId: t,
                      }),
                      (0, tg.ac)(b, _, x, { pageId: t, onOpenPage: v?.onOpenPage, isCurrent: a }))
                  },
            })),
          (m[0] = E),
          (m[1] = w),
          (m[2] = x),
          (m[3] = y),
          (m[4] = _),
          (m[5] = v?.onOpenPage),
          (m[6] = A),
          (m[7] = b),
          (m[8] = f),
          (m[9] = j),
          (m[10] = t),
          (m[11] = a),
          (m[12] = s),
          (m[13] = r),
          (m[14] = n),
          (m[15] = d),
          (m[16] = c))
      } else ((t = m[10]), (a = m[11]), (s = m[12]), (r = m[13]), (n = m[14]), (d = m[15]), (c = m[16]))
      return (
        m[25] !== a || m[26] !== v?.onOpenPage || m[27] !== T
          ? ((p = T?.map((e) =>
              (0, l.jsx)(tv.s, { suggestion: e, surface: "onboarding", onOpenPage: v?.onOpenPage, isCurrent: a }, e.id),
            )),
            (m[25] = a),
            (m[26] = v?.onOpenPage),
            (m[27] = T),
            (m[28] = p))
          : (p = m[28]),
        m[29] !== t || m[30] !== s || m[31] !== r || m[32] !== n || m[33] !== d || m[34] !== p
          ? ((h = (0, l.jsxs)(t, { suggestions: s, showRecommendations: r, isCurrent: n, children: [d, p] })),
            (m[29] = t),
            (m[30] = s),
            (m[31] = r),
            (m[32] = n),
            (m[33] = d),
            (m[34] = p),
            (m[35] = h))
          : (h = m[35]),
        m[36] !== c || m[37] !== h
          ? ((g = (0, l.jsxs)(l.Fragment, { children: [c, h] })), (m[36] = c), (m[37] = h), (m[38] = g))
          : (g = m[38]),
        g
      )
    }
    function t_() {
      let e,
        t,
        a,
        l = (0, i.c)(15),
        s = (0, o.gh)(H.u),
        r = (0, o.Ul)(tg.jm),
        n = (0, o._U)(ty.J, r?.key ?? ""),
        d = (0, o._U)(tg.av, r?.key ?? ""),
        u = (0, o._U)(tg.Dj, r?.key ?? ""),
        p = (0, o.Ul)(th.ax),
        h = null == r ? null : p[r.key]
      l[0] !== s
        ? ((e = () => {
            ;(0, U.provisionSpaceWelcomePage)(s)
          }),
          (l[0] = s),
          (l[1] = e))
        : (e = l[1])
      let g = (0, c.useEffectEvent)(e)
      l[2] !== u || l[3] !== n || l[4] !== r?.key || l[5] !== d || l[6] !== h || l[7] !== g
        ? ((t = () => {
            r?.key != null && (null == h || "unknown" === u) && ("idle" !== n || d || g())
          }),
          (l[2] = u),
          (l[3] = n),
          (l[4] = r?.key),
          (l[5] = d),
          (l[6] = h),
          (l[7] = g),
          (l[8] = t))
        : (t = l[8])
      let m = r?.key
      return (
        l[9] !== u || l[10] !== n || l[11] !== d || l[12] !== h || l[13] !== m
          ? ((a = [m, h, n, d, u]), (l[9] = u), (l[10] = n), (l[11] = d), (l[12] = h), (l[13] = m), (l[14] = a))
          : (a = l[14]),
        (0, c.useEffect)(t, a),
        null
      )
    }
    function tS(e) {
      let t,
        a,
        s,
        r,
        n,
        o,
        d,
        c,
        h,
        g,
        m,
        f,
        v,
        y,
        b,
        x,
        _,
        S = (0, i.c)(53),
        { opening: w, creating: I, failed: j, highlighted: A, onOpen: P, actions: E } = e,
        T = (0, u.A)()
      if (S[0] !== E || S[1] !== I || S[2] !== j || S[3] !== A || S[4] !== T || S[5] !== P || S[6] !== w) {
        let e = (0, tb.gt)(T),
          i = !j && (I || w),
          u = null
        if (j) {
          let e
          ;(S[21] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)("div", {
                className: "flex w-full justify-center text-secondary",
                role: "status",
                children: (0, l.jsx)(p.A, {
                  id: "space.welcome.retry",
                  defaultMessage: "Retry",
                  description:
                    "Short action label centered inside the Getting Started with Pages card after creation fails. Selecting the card retries creating the personal Page.",
                }),
              })),
              (S[21] = e))
            : (e = S[21]),
            (u = e))
        } else if (i) {
          let e, t, a
          ;(S[22] !== I
            ? ((e = (0, l.jsx)("span", {
                className: "sr-only",
                children: I
                  ? (0, l.jsx)(p.A, {
                      id: "space.welcome.creating",
                      defaultMessage: "Creating your Page…",
                      description:
                        "Accessible status while the user's personal Getting Started Page is being created in the background.",
                    })
                  : (0, l.jsx)(p.A, {
                      id: "space.welcome.opening",
                      defaultMessage: "Opening…",
                      description: "Accessible status while opening the Getting Started Page",
                    }),
              })),
              (S[22] = I),
              (S[23] = e))
            : (e = S[23]),
            S[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, l.jsx)(tp.P, { lines: 1 })), (S[24] = t))
              : (t = S[24]),
            S[25] !== e
              ? ((a = (0, l.jsxs)("div", { className: "w-full", role: "status", children: [e, t] })),
                (S[25] = e),
                (S[26] = a))
              : (a = S[26]),
            (u = a))
        }
        ;((a = Z.Z),
          S[27] !== T ? ((m = T.formatMessage(tI.welcome)), (S[27] = T), (S[28] = m)) : (m = S[28]),
          S[29] !== u ? ((f = u ?? (0, l.jsx)(p.A, { ...tI.welcome })), (S[29] = u), (S[30] = f)) : (f = S[30]),
          S[31] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = (0, l.jsx)(p.A, {
                id: "space.gettingStartedPages.startHere",
                defaultMessage: "Start here",
                description:
                  "Short caption beneath Your guide to pages in the Space template carousel, inviting users to open the introductory Page first",
              })),
              (S[31] = v))
            : (v = S[31]),
          (y = A),
          (r = i),
          (n = P),
          (o = E),
          (t = K.D),
          (h = "space-welcome-template-preview"),
          (g = tm.x),
          S[32] !== T ? ((s = T.formatMessage(tI.welcome)), (S[32] = T), (S[33] = s)) : (s = S[33]),
          (d = e.join("\n\n")),
          (c = e.map(tw)),
          (S[0] = E),
          (S[1] = I),
          (S[2] = j),
          (S[3] = A),
          (S[4] = T),
          (S[5] = P),
          (S[6] = w),
          (S[7] = t),
          (S[8] = a),
          (S[9] = s),
          (S[10] = r),
          (S[11] = n),
          (S[12] = o),
          (S[13] = d),
          (S[14] = c),
          (S[15] = h),
          (S[16] = g),
          (S[17] = m),
          (S[18] = f),
          (S[19] = v),
          (S[20] = y))
      } else
        ((t = S[7]),
          (a = S[8]),
          (s = S[9]),
          (r = S[10]),
          (n = S[11]),
          (o = S[12]),
          (d = S[13]),
          (c = S[14]),
          (h = S[15]),
          (g = S[16]),
          (m = S[17]),
          (f = S[18]),
          (v = S[19]),
          (y = S[20]))
      return (
        S[34] !== s || S[35] !== d || S[36] !== c
          ? ((b = { title: s, markdown: d, units: c }), (S[34] = s), (S[35] = d), (S[36] = c), (S[37] = b))
          : (b = S[37]),
        S[38] !== t || S[39] !== b || S[40] !== h || S[41] !== g
          ? ((x = (0, l.jsx)(t, { pageId: h, symbol: g, document: b })),
            (S[38] = t),
            (S[39] = b),
            (S[40] = h),
            (S[41] = g),
            (S[42] = x))
          : (x = S[42]),
        S[43] !== a ||
        S[44] !== r ||
        S[45] !== n ||
        S[46] !== o ||
        S[47] !== x ||
        S[48] !== m ||
        S[49] !== f ||
        S[50] !== v ||
        S[51] !== y
          ? ((_ = (0, l.jsx)(a, {
              title: m,
              titleContent: f,
              subtitle: v,
              highlighted: y,
              disabled: r,
              onOpen: n,
              actions: o,
              preview: x,
            })),
            (S[43] = a),
            (S[44] = r),
            (S[45] = n),
            (S[46] = o),
            (S[47] = x),
            (S[48] = m),
            (S[49] = f),
            (S[50] = v),
            (S[51] = y),
            (S[52] = _))
          : (_ = S[52]),
        _
      )
    }
    function tw(e) {
      return { kind: "markdown", markdown: e }
    }
    let tI = (0, tu.YK)({
      welcome: {
        id: "space.gettingStartedPages.title",
        defaultMessage: "Your guide to pages",
        description: "Title of the introductory Getting Started Page and its card",
      },
    })
    var tj = a("HQhH"),
      tA = a("suct"),
      tP = a("LIss"),
      tE = a("V8uZ")
    function tT(e) {
      let t,
        a,
        s,
        r,
        n = (0, i.c)(11),
        { children: o, animate: d } = e
      if (!d) {
        let e
        return (
          n[0] !== o
            ? ((e = null == o ? null : (0, l.jsx)("div", { className: "pt-4 pb-8", children: o })),
              (n[0] = o),
              (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      let c = null == o ? "0fr" : "1fr"
      return (
        n[2] !== c ? ((t = { gridTemplateRows: c }), (n[2] = c), (n[3] = t)) : (t = n[3]),
        n[4] !== o
          ? ((a = null == o ? null : (0, l.jsx)(tC, { children: o }, o.key)), (n[4] = o), (n[5] = a))
          : (a = n[5]),
        n[6] !== a
          ? ((s = (0, l.jsx)("div", {
              className: "min-h-0 overflow-y-clip",
              children: (0, l.jsx)(tA.N, { initial: !1, mode: "wait", children: a }),
            })),
            (n[6] = a),
            (n[7] = s))
          : (s = n[7]),
        n[8] !== t || n[9] !== s
          ? ((r = (0, l.jsx)("div", {
              className: "grid transition-[grid-template-rows] duration-basic ease-enter-snappy",
              style: t,
              children: s,
            })),
            (n[8] = t),
            (n[9] = s),
            (n[10] = r))
          : (r = n[10]),
        r
      )
    }
    function tC(e) {
      let t,
        a,
        s,
        r,
        n,
        o = (0, i.c)(8),
        { children: d } = e,
        c = (0, G.tF)(),
        u = !c,
        p = !c
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = { opacity: 0 }),
            (a = { opacity: 1 }),
            (s = { opacity: 0 }),
            (r = { duration: 0.15, ease: tE.Wu }),
            (o[0] = t),
            (o[1] = a),
            (o[2] = s),
            (o[3] = r))
          : ((t = o[0]), (a = o[1]), (s = o[2]), (r = o[3])),
        o[4] !== d || o[5] !== u || o[6] !== p
          ? ((n = (0, l.jsx)(tP.P.div, {
              className: "pt-4 pb-8",
              "aria-hidden": u,
              inert: p,
              initial: t,
              animate: a,
              exit: s,
              transition: r,
              children: d,
            })),
            (o[4] = d),
            (o[5] = u),
            (o[6] = p),
            (o[7] = n))
          : (n = o[7]),
        n
      )
    }
    function tM(e) {
      let t,
        a,
        s,
        r,
        n = (0, i.c)(27),
        {
          navigation: d,
          pathname: c,
          isCurrent: u,
          renderContentItem: p,
          hiddenPinnedPageIds$: h,
          showPinnedCards: g,
          pinnedSites: m,
          sitePinsPending: f,
          sitePinsError: v,
          sitePinsHaveNextPage: y,
          sitePagination: b,
        } = e,
        x = void 0 === g || g,
        _ = void 0 !== v && v,
        S = (0, o.Ul)(tg.jm),
        w = (0, o.Ul)(U.Wz),
        I = (0, o.Ul)(U.aQ),
        j = (0, o.Ul)(x ? tr.V : null),
        A = (0, o.Ul)(x ? h : null)
      n[0] !== j || n[1] !== A
        ? ((t = null == j || null == A ? j : { ...j, pages: j.pages.filter((e) => !A.has(e.page_id)) }),
          (n[0] = j),
          (n[1] = A),
          (n[2] = t))
        : (t = n[2])
      let P = t,
        E = (0, o.Ul)($.vy),
        T = (0, tc.I)(),
        C = E && !T,
        M = (m?.length ?? 0) > 0 || (void 0 !== f && f) || _ || (void 0 !== y && y),
        N = null
      if (w) {
        let e
        ;(n[3] !== u || n[4] !== d || n[5] !== I
          ? ((e = (0, l.jsx)(tx, { suggestions: I, navigation: d, isCurrent: u }, "getting-started")),
            (n[3] = u),
            (n[4] = d),
            (n[5] = I),
            (n[6] = e))
          : (e = n[6]),
          (N = e))
      } else if (null != P && (P.pages.length > 0 || P.pending || P.failed.length > 0 || M)) {
        let e
        ;(n[7] !== C || n[8] !== u || n[9] !== m || n[10] !== P || n[11] !== p || n[12] !== b
          ? ((e = (0, l.jsx)(
              tj.N,
              { pins: P, sites: m, sitePagination: b, animate: C, isCurrent: u, renderContentItem: p },
              "pinned",
            )),
            (n[7] = C),
            (n[8] = u),
            (n[9] = m),
            (n[10] = P),
            (n[11] = p),
            (n[12] = b),
            (n[13] = e))
          : (e = n[13]),
          (N = e))
      }
      n[14] !== u || n[15] !== w || n[16] !== c || n[17] !== P
        ? ((a = !w && null != P && u?.() !== !1 && (0, l.jsx)(tN, { pins: P, pathname: c })),
          (n[14] = u),
          (n[15] = w),
          (n[16] = c),
          (n[17] = P),
          (n[18] = a))
        : (a = n[18])
      let k = S?.key
      n[19] !== C || n[20] !== N || n[21] !== k
        ? ((s = (0, l.jsx)(tT, { animate: C, children: N }, k)), (n[19] = C), (n[20] = N), (n[21] = k), (n[22] = s))
        : (s = n[22])
      let O = w && _ ? b : null
      return (
        n[23] !== a || n[24] !== s || n[25] !== O
          ? ((r = (0, l.jsxs)(l.Fragment, { children: [a, s, O] })), (n[23] = a), (n[24] = s), (n[25] = O), (n[26] = r))
          : (r = n[26]),
        r
      )
    }
    function tN(e) {
      let t,
        a = (0, i.c)(4),
        { pins: s, pathname: r } = e,
        { isPending: n, isFetching: d, isError: c } = (0, o.Ul)(k.IO),
        u = !n && !d && !s.pending,
        p = !d && (c || s.failed.length > 0)
      return (
        a[0] !== r || a[1] !== u || a[2] !== p
          ? ((t = (0, l.jsx)(M.N, { pathname: r, section: "pinned", ready: u, failed: p })),
            (a[0] = r),
            (a[1] = u),
            (a[2] = p),
            (a[3] = t))
          : (t = a[3]),
        t
      )
    }
    var tk = a("UYRh")
    function tO({
      collectionRows: e = !1,
      structuredGridEnabled: t = !1,
      onOpenItem: a,
      onOpenProfile: i,
      wrapSearchResult: L,
      navigation: R,
      pathname: F,
      isCurrent: G,
    }) {
      let D,
        z,
        B,
        V = (0, o.gh)(_.Qy),
        H = (0, o.gh)(_.oD),
        $ = (0, o.Ul)(!!t && S.s),
        Q = (0, u.A)(),
        { items: Y, pending: W, fetching: q, failedPageIds: K } = (0, o.Ul)(e3.Uk),
        { data: Z, dataUpdatedAt: J, isError: X, isPending: ee, isFetching: ea } = (0, o.Ul)(_.i3),
        el = (0, o.Ul)(to.a),
        ei = (0, o.Ul)(_.sp),
        es = (0, o.Ul)(er.i)
      ;(0, c.useEffect)(() => (es ? (0, e3.Vx)(V) : void 0), [es, V])
      let en = (0, o.Ul)(e3.o9),
        eo = (0, o.Ul)(e3.zl),
        ed = (0, o.Ul)(_.oW),
        ec = (0, o.Ul)(_.rk),
        eu = (0, o.Ul)(_.YH),
        { visibleItems: ep, pageTree: eh, reserveDisclosureSpace: eg } = (0, o.Ul)(e3.iF),
        { accountId: em, userId: ef } = (0, g.As)(),
        { getExperiment: ev, isLoading: ey } = (0, E.cn)(),
        eb = "supplemental" === (0, o.Ul)(tn.a_),
        ex = "pinned" === V.value.slidesCollection,
        e_ = (0, E.Zj)("1939400492"),
        eS = G?.() !== !1,
        ew = null != em && null != ef && em === H.value.accountId && (null == H.value.userId || ef === H.value.userId),
        eI =
          eS &&
          ew &&
          "library:collection:shared-with-me" === V.value.directoryId &&
          !V.value.search &&
          0 === V.value.categories.length &&
          0 === V.value.sources.length &&
          !V.value.deleted,
        ej = eI && !ey && !0 === ev("1021766746", { disableExposureLog: !1 }).get("show_opened_share_history", !1),
        eA = ["opened-shared-links", em, ef],
        eP = [...eA, e_],
        {
          data: eE,
          dataUpdatedAt: eT,
          isError: eC,
          isFetchNextPageError: eM,
          isLoading: eN,
          isFetching: ek,
          hasNextPage: eO,
          isFetchingNextPage: eL,
          fetchNextPage: eU,
          refetch: eR,
        } = (0, n.q)({
          queryKey: eP,
          subscribed: ej,
          enabled: ej && null != em && null != ef,
          initialPageParam: "",
          queryFn: async ({ pageParam: e, signal: t }) => {
            let a = e || void 0
            for (;;) {
              let e = await m.Request.safeGet("/received-shares", {
                parameters: { query: { limit: 20, cursor: a } },
                signal: t,
              })
              if (null == e.cursor || e.items.some((e) => e8(e, e_))) return e
              a = e.cursor ?? void 0
            }
          },
          getNextPageParam: (e) => e.cursor ?? void 0,
          staleTime: 15e3,
          refetchOnMount: "always",
          refetchOnWindowFocus: !0,
        }),
        eF = V.value.includePages && "suggested" === V.value.tab,
        eG = eF && !V.value.search && 0 === V.value.categories.length && 0 === V.value.sources.length,
        eD = (0, o.Ul)(C.TV),
        ez = V.value.search.trim().toLowerCase(),
        eB = eb && ez.length > 0,
        eV = (0, o.Ul)(ex || (eb && !eB) ? k.IO : null),
        eH = (0, o._U)(eB ? h.rw : null, { accountId: em, userId: ef, query: Array.from(ez).slice(0, 200).join("") }),
        e$ = eB ? eH?.data : eV?.data?.sites,
        eQ = eB ? eH : eV,
        eY = (0, o.Ul)(e3.Dw)
      ez ||
        0 !== V.value.sources.length ||
        null != ei.allowlistIds ||
        ("all" === V.value.slidesCollection ? (D = "slides") : "all" === V.value.pageCollection && (D = "pages"))
      let eW = (0, o._U)(U.wE, D),
        eZ =
          eb && null != e$
            ? e$.filter((e) => ei.providers.includes("owner" === e.current_user_role ? "native" : "native_shared"))
            : void 0,
        eJ =
          "/space" !== V.value.basePath || "all" !== V.value.tab || null != V.value.directoryId || V.value.deleted
            ? ep
            : ep?.filter(
                (e) =>
                  !("node" in e) ||
                  ("library:collection:shared-with-me" !== e.node.id &&
                    !(!V.value.search && (0, x.kS)(e) && el?.some(({ provider: t }) => (0, x.sm)(e) === t))),
              )
      if (eG && null != eZ) {
        let e = new Set(eZ.map((e) => e.id))
        eJ = eJ?.filter((t) => {
          let a = (0, tn.vN)(t)
          return null == a || !e.has(a)
        })
      } else eb && !eG && null != e$ && (eJ = (0, tn.sL)(eJ, e$, ei, ed, ec))
      let eX = (0, o.Ul)(eJ?.length || (eG && !eD) ? O.spacesQuery$ : null)?.data,
        e0 = !!eJ?.some(
          (e) =>
            ("page" in e && "page" === (0, T.th)(e.page)) ||
            ("libraryPage" in e && "page" === (0, T.th)(e.libraryPage.node.page_metadata ?? {})),
        ),
        { exportToGoogleDrive: e1, connectDialog: e2 } = (0, N.i)(e0),
        e4 = (0, c.useRef)(void 0),
        e5 = ej ? (eE?.pages.flatMap((e) => e.items.filter((e) => e8(e, e_))) ?? []) : [],
        e7 =
          eI &&
          !ey &&
          null != em &&
          null != ef &&
          (null != Y || X || K.length > 0) &&
          !ee &&
          !ea &&
          !W &&
          !q &&
          (!ej || (!eN && !ek)),
        e6 = Z?.pages.some((e) => e.partialResults) ?? !1,
        te = eJ?.length ?? 0,
        tt = e5.length,
        tl = JSON.stringify([em, ef, J, eT, te, tt, e6, X, K.length, eC, ej])
      ;(0, c.useEffect)(() => {
        if (!eI) {
          e4.current = void 0
          return
        }
        if (!e7 || e4.current === tl) return
        e4.current = tl
        let e = te + tt,
          t = X || K.length > 0 || eC,
          a = "CHATGPT_FILE_LIBRARY_RESULTS_STATE_EMPTY"
        ;(e6 || (t && e > 0)
          ? (a = "CHATGPT_FILE_LIBRARY_RESULTS_STATE_PARTIAL")
          : t
            ? (a = "CHATGPT_FILE_LIBRARY_RESULTS_STATE_ERROR")
            : e > 0 && (a = "CHATGPT_FILE_LIBRARY_RESULTS_STATE_POPULATED"),
          (0, P.yy)(V, s.oq, {
            ...V.get(b.Vu),
            visibleItemCount: (0, r.PZ)(e),
            emptyReason: 0 !== e || t || e6 ? void 0 : "CHATGPT_FILE_LIBRARY_EMPTY_REASON_EMPTY_FOLDER",
            provider: (0, A.Pw)(V.value.directoryId),
            folderKind: "CHATGPT_FILE_LIBRARY_FOLDER_KIND_SHARED_WITH_ME",
            openedShareItemCount: ej ? (0, r.PZ)(tt) : void 0,
            layout: "grid" === eu ? "CHATGPT_FILE_LIBRARY_LAYOUT_GRID" : "CHATGPT_FILE_LIBRARY_LAYOUT_LIST",
            resultsState: a,
          }))
      }, [K.length, e6, X, eC, eI, V, tl, e7, ej, eu, te, tt])
      let tr = e5.map((t) => {
          let a
          return {
            id: `${"posted_at" in t ? "post" : "conversation"}:${t.id}`,
            sortMetadata:
              ((a = t.last_opened_at ?? t.first_opened_at),
              {
                name: e9(t, Q),
                date: null == a ? void 0 : Date.parse(a),
                size: void 0,
                isDirectory: !1,
                isNavigationRoot: !1,
              }),
            render: (a, i) =>
              (0, l.jsx)(ta, {
                layout: e ? "stacked" : "columns",
                structuredGridEnabled: $,
                item: t,
                viewMode: a,
                reserveDisclosureSpace: eg,
                position: i,
                onDelete: async () => {
                  let e = "posted_at" in t ? "post" : "conversation"
                  await m.Request.safeDelete("/received-shares/{share_kind}/{share_id}", {
                    parameters: { path: { share_kind: e, share_id: t.id } },
                  })
                  let a = { queryKey: eA }
                  ;(await V.queryClient.cancelQueries(a),
                    V.queryClient.setQueriesData(a, (a) =>
                      null == a
                        ? a
                        : {
                            ...a,
                            pages: a.pages.map((a) => ({
                              ...a,
                              items: a.items.filter(
                                (a) => a.id !== t.id || ("posted_at" in a ? "post" : "conversation") !== e,
                              ),
                            })),
                          },
                    ))
                },
              }),
          }
        }),
        td = (0, l.jsxs)(l.Fragment, {
          children: [
            eS &&
              !V.value.search &&
              (eG || null != V.value.pageCollection) &&
              (0, l.jsx)(M.N, {
                pathname: F,
                section: eG ? "recents" : "pages",
                ready: !ee && !ea && !W && !q && null != Y,
                failed: !ea && !q && (X || eo || K.length > 0 || Z?.pages.some((e) => !0 === e.partialResults) === !0),
              }),
            (0, l.jsx)(M.B, {
              active: eS,
              homeRanking: es,
              ready: !W && !q && null != Y && eS && (!ej || !eN),
              failed: eS && (X || K.length > 0 || (ej && eC)),
            }),
          ],
        })
      ;((ej && eC) ||
      (eb && (eQ?.isPending === !0 || eQ?.hasNextPage || eQ?.isError === !0 || (eG && (eZ?.length ?? 0) > 0)))
        ? (z = null)
        : ("/space" !== V.value.basePath && "/space/files" !== V.value.basePath) ||
          (!V.value.includePages && "images" !== V.value.tab && !V.value.deleted && null == V.value.directoryId) ||
          V.value.search ||
          0 !== V.value.categories.length ||
          0 !== V.value.sources.length ||
          V.value.directoryId?.startsWith("external-") ||
          V.value.directoryId?.startsWith("library:") ||
          "favorites" === V.value.tab ||
          "recent" === V.value.tab ||
          (z = (0, l.jsx)(tU, {})),
        (eb || ex) && eQ?.isError === !0
          ? (B = (0, l.jsxs)("div", {
              className: "flex items-center gap-3 pb-4 text-secondary",
              role: "status",
              children: [
                ex
                  ? (0, l.jsx)(p.A, {
                      id: "space.slides.pins.loadError",
                      defaultMessage: "Unable to load pinned Slides",
                      description: "Error state when the user's pinned native presentations could not be loaded",
                    })
                  : (0, l.jsx)(p.A, {
                      id: "appgenPage.error.title",
                      defaultMessage: "Unable to load sites",
                      description: "Error state title for the Sites page",
                    }),
                (0, l.jsx)(f.$, {
                  color: "ghost",
                  disabled: eQ.isFetching,
                  onClick: () => {
                    eQ.isFetchNextPageError ? eQ.fetchNextPage({ cancelRefetch: !1 }) : eQ.refetch()
                  },
                  children: (0, l.jsx)(p.A, {
                    id: "libraryNext.results.retry",
                    defaultMessage: "Try again",
                    description: "Retry fetching Library results",
                  }),
                }),
              ],
            }))
          : eb &&
            null != eQ &&
            (B = (0, l.jsx)(v.D, {
              hasNextPage: eQ.hasNextPage && !eQ.isFetching,
              isFetchingNextPage: eQ.isFetchingNextPage,
              onLoadNextPage: () => void eQ.fetchNextPage({ cancelRefetch: !1 }),
            })))
      let tc = (t) => (a, s, r, n) => {
          let o = (0, l.jsx)(eK, {
            spaces: eX,
            item: a,
            viewMode: s,
            source: t ? void 0 : r,
            browseLocation: V.getOwnValue(_.Qy),
            navigation: R,
            onOpenProfile: i,
            isCurrent: G,
            showRowThumbnails: e,
            pageTree: t ? void 0 : eh,
            reserveDisclosureSpace: t ? void 0 : eg,
            pinnedPresentation: t,
            structuredGridEnabled: !t && $,
            reorderAction: n,
            exportToGoogleDrive: t ? void 0 : e1,
            observeSearchResult: (e) => (0, j.pF)(V, a, e),
            onOpenSearchResult: () => (0, j.PP)(V, a),
          })
          return "searchResult" in a && null != L ? L(o) : o
        },
        tu = (0, l.jsx)(I.Y, {
          structuredGridEnabled: $,
          pagination:
            null == en
              ? void 0
              : { hasNextPage: en.hasNextPage, isFetching: en.isFetching, fetchNextPage: () => (0, e3.mS)(V) },
          rowLayout: e ? "stacked" : "columns",
          emptyState: z,
          reserveDisclosureSpace: eg,
          groupByActivityDate: e && eG && "list" === eu && null == ed && null == en,
          items: eJ,
          supplementalItems: tr,
          contentPending: W || (!Y?.length && (q || (eb && eQ?.isPending === !0) || (ej && eN))),
          additionalPagination:
            eG || (null == B && (!ej || !eO || eC))
              ? void 0
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    B,
                    ej
                      ? (0, l.jsx)(ts, {
                          hasNextPage: eO && !eC,
                          isFetchingNextPage: eL,
                          onLoadNextPage: () => {
                            eU({ cancelRefetch: !1 })
                          },
                        })
                      : null,
                  ],
                }),
          onOpenItem: a,
          renderContentItem: tc(!1),
          renderSource:
            V.value.deleted ||
            (eF && !V.value.search) ||
            (null != V.value.pageCollection && "shared" !== V.value.pageCollection)
              ? (t) => (0, l.jsx)(eq, { catalog: eX ?? null, inline: e, item: t, navigation: R, onOpenProfile: i })
              : void 0,
          notice:
            eo || K.length > 0 || (ej && eC)
              ? (0, l.jsxs)(l.Fragment, {
                  children: [
                    eo
                      ? (0, l.jsx)(w._, {
                          favorites: "favorites" === ei.tab,
                          folderError: null,
                          onRetry: () => (0, e3.lL)(V),
                        })
                      : null,
                    K.length > 0
                      ? (0, l.jsxs)("div", {
                          className: "flex items-center gap-3 pb-4 text-secondary",
                          role: "status",
                          children: [
                            (0, l.jsx)(p.A, {
                              id: "libraryNext.results.incompletePages",
                              defaultMessage: "Some pages could not be loaded",
                              description: "A mixed Library result remains usable, but some Pages could not be loaded",
                            }),
                            (0, l.jsx)(f.$, {
                              color: "ghost",
                              disabled: W || q || eY,
                              onClick: () => {
                                ;(V.set(e3.Dw, !0),
                                  (0, d.Ay)(K, (e) => V.get(O.spacePageAncestryQuery$, e, { enabled: !1 }).refetch(), {
                                    concurrency: 4,
                                  }).finally(() => {
                                    V.set(e3.Dw, !1)
                                  }))
                              },
                              children: (0, l.jsx)(p.A, {
                                id: "libraryNext.results.retry",
                                defaultMessage: "Try again",
                                description: "Retry fetching Library results",
                              }),
                            }),
                          ],
                        })
                      : null,
                    ej
                      ? (0, l.jsx)(ti, {
                          error: eC,
                          hasCachedItems: e5.length > 0,
                          isFetching: ek,
                          isNextPageError: eM,
                          onRetry: () => {
                            eM ? eU({ cancelRefetch: !1 }) : eR()
                          },
                        })
                      : null,
                  ],
                })
              : null,
        }),
        tp = eG
          ? (0, l.jsx)(tM, {
              hiddenPinnedPageIds$: e3.fI,
              showPinnedCards: !eD,
              pathname: F,
              navigation: R,
              isCurrent: G,
              renderContentItem: tc(!0),
              pinnedSites: eZ,
              sitePinsPending: eb && eQ?.isPending === !0,
              sitePinsError: eb && eQ?.isError === !0,
              sitePinsHaveNextPage: eb && eQ?.hasNextPage === !0,
              sitePagination: B,
            })
          : eW && (0, l.jsx)("div", { className: "pt-4 pb-8 empty:hidden", children: (0, l.jsx)(et, { filter: D }) }),
        th = (0, l.jsxs)(l.Fragment, { children: [tp, td, tu, e2] })
      return (
        eF && (th = (0, l.jsx)("div", { className: eG ? "flex min-h-0 flex-1 flex-col" : "contents", children: th })),
        e ? (0, l.jsx)(y.eb, { className: tk.A.collectionList, density: "preview", children: th }) : th
      )
    }
    let tL = (0, o.un)(_.Qy, ({ get: e, scope: t }) => {
      if (!t.value.includePages || "suggested" !== t.value.tab) return !1
      if (e(U.Wz)) return !0
      if (e(C.TV)) return !1
      let a = e(tr.V)
      return a.pages.length > 0 || a.pending || a.failed.length > 0
    })
    function tU() {
      let e,
        t = (0, i.c)(5),
        a = (0, o.gh)(_.Qy),
        s = (0, o.Ul)(tL),
        r = (0, o.Ul)(L.Q)
      if (s) return null
      if (a.value.deleted) {
        let e,
          a = r ? "trash" : "trash-files"
        return (t[0] !== a ? ((e = (0, l.jsx)(td.n, { view: a })), (t[0] = a), (t[1] = e)) : (e = t[1]), e)
      }
      if (null != a.value.directoryId) {
        let e
        return (
          t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, l.jsx)(td.n, { view: "folder" })), (t[2] = e))
            : (e = t[2]),
          e
        )
      }
      let n = "images" === a.value.tab ? "images" : "all"
      return (t[3] !== n ? ((e = (0, l.jsx)(td.n, { view: n })), (t[3] = n), (t[4] = e)) : (e = t[4]), e)
    }
  },
  fOyY(e, t, a) {
    var l = a("zTeN"),
      i = a("Fmx8")
    let s = (0, l.vP)(i.oD, new Map())
    a.d(
      t,
      {},
      {
        w: function (e, t, a) {
          let l = e.get(s).get(t) ?? 0,
            i = a.scrollTop,
            r = () => {
              null != l && ((a.scrollTop = l), 1 > Math.abs((i = a.scrollTop) - l) && ((l = null), n.disconnect()))
            },
            n = new ResizeObserver(r)
          ;(n.observe(a), null != a.firstElementChild && n.observe(a.firstElementChild), r())
          let o = () => {
              0 !== a.clientHeight &&
                e.set(s, (e) => {
                  let l = new Map(e)
                  if ((l.delete(t), l.set(t, a.scrollTop), l.size > 50)) {
                    let e = l.keys().next().value
                    null != e && l.delete(e)
                  }
                  return l
                })
            },
            d = () => {
              0 !== a.clientHeight && a.scrollTop !== i && ((l = null), n.disconnect(), (i = a.scrollTop), o())
            },
            c = () => {
              ;((l = null), n.disconnect())
            }
          return (
            a.addEventListener("scroll", d),
            a.addEventListener("wheel", c, { passive: !0 }),
            a.addEventListener("touchstart", c, { passive: !0 }),
            a.addEventListener("keydown", c),
            () => {
              ;(null == l && o(),
                n.disconnect(),
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
    var l = a("ABep"),
      i = a("QosV"),
      s = a("zTeN"),
      r = a("Wf1j"),
      n = a("oyxz"),
      o = a("BrP7"),
      d = a("Fmx8")
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
            h = (0, i.c)(11),
            g = (0, s.gh)(d.Qy),
            m = (0, r.A)()
          ;(h[0] !== m
            ? ((e = m.formatMessage({
                id: "space.pages.tabs.label",
                defaultMessage: "Page collections",
                description: "Accessible label for the All, Your items, and Shared with you tabs on the Pages page",
              })),
              (h[0] = m),
              (h[1] = e))
            : (e = h[1]),
            h[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = {
                  key: "all",
                  name: (0, l.jsx)(n.A, {
                    id: "space.pages.tabs.all",
                    defaultMessage: "All",
                    description: "Pages tab showing both owned Pages and Pages shared with the user",
                  }),
                }),
                (h[2] = t))
              : (t = h[2]),
            h[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = {
                  key: "owned",
                  name: (0, l.jsx)(n.A, {
                    id: "space.pages.tabs.owned",
                    defaultMessage: "Your items",
                    description: "Pages tab showing Pages owned by the user",
                  }),
                }),
                (h[3] = a))
              : (a = h[3]),
            h[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = [
                  t,
                  a,
                  {
                    key: "shared",
                    name: (0, l.jsx)(n.A, {
                      id: "space.pages.tabs.shared",
                      defaultMessage: "Shared with you",
                      description: "Pages tab showing Pages explicitly shared with the user",
                    }),
                  },
                ]),
                (h[4] = c))
              : (c = h[4]))
          let f = g.value.pageCollection ?? "all"
          return (
            h[5] !== g
              ? ((u = (e) => (0, d.zl)(g, (0, d.SE)({ ...g.value, pageCollection: e }))), (h[5] = g), (h[6] = u))
              : (u = h[6]),
            h[7] !== e || h[8] !== f || h[9] !== u
              ? ((p = (0, l.jsx)(o.t, {
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: e,
                  tabs: c,
                  selectedKey: f,
                  onSelect: u,
                })),
                (h[7] = e),
                (h[8] = f),
                (h[9] = u),
                (h[10] = p))
              : (p = h[10]),
            p
          )
        },
      },
    )
  },
  HUbZ(e, t, a) {
    var l = a("ABep"),
      i = a("QosV"),
      s = a("tFxw"),
      r = a("zTeN"),
      n = a("Wf1j"),
      o = a("oyxz"),
      d = a("BrP7"),
      c = a("cGrE"),
      u = a("TCFx"),
      p = a("Fmx8")
    a.d(
      t,
      {},
      {
        K: function () {
          let e,
            t,
            a,
            h,
            g,
            m,
            f,
            v,
            y,
            b,
            x,
            _ = (0, i.c)(29),
            S = (0, r.gh)(p.Qy),
            w = (0, n.A)()
          if (_[0] !== S.value.directoryId) {
            let a = null == S.value.directoryId ? null : (0, u.oh)(S.value.directoryId)
            ;((e = "google_drive" === a), (t = (0, s.ZR)(a)), (_[0] = S.value.directoryId), (_[1] = e), (_[2] = t))
          } else ((e = _[1]), (t = _[2]))
          let I = !t
          _[3] !== S.value.directoryId
            ? ((a = (0, u.$n)(S.value.directoryId)), (_[3] = S.value.directoryId), (_[4] = a))
            : (a = _[4])
          let j = a
          _[5] !== S.value.directoryId || _[6] !== j
            ? ((h = j ? S.value.directoryId?.replace(/collection:shared-with-me$/u, "root") : S.value.directoryId),
              (_[5] = S.value.directoryId),
              (_[6] = j),
              (_[7] = h))
            : (h = _[7])
          let A = h,
            P = "all"
          return (
            j ? (P = "shared") : "recent" === S.value.tab && (P = "recent"),
            _[8] !== e || _[9] !== w
              ? ((g = e
                  ? w.formatMessage({
                      id: "space.googleDrive.tabs.label",
                      defaultMessage: "Google Drive views",
                      description: "Accessible label for the Google Drive navigation tabs in Space",
                    })
                  : w.formatMessage({
                      id: "space.provider.tabs.label",
                      defaultMessage: "Provider views",
                      description: "Accessible label for the navigation tabs within an external file provider in Space",
                    })),
                (_[8] = e),
                (_[9] = w),
                (_[10] = g))
              : (g = _[10]),
            _[11] !== e || _[12] !== I
              ? ((m = I
                  ? [
                      {
                        key: "recent",
                        name: e
                          ? (0, l.jsx)(o.A, {
                              id: "space.googleDrive.tabs.recent",
                              defaultMessage: "Recent",
                              description: "Google Drive tab showing files recently opened by the current user",
                            })
                          : (0, l.jsx)(o.A, {
                              id: "space.provider.tabs.recents",
                              defaultMessage: "Recents",
                              description:
                                "External file provider tab showing files recently opened by the current user",
                            }),
                      },
                    ]
                  : []),
                (_[11] = e),
                (_[12] = I),
                (_[13] = m))
              : (m = _[13]),
            _[14] !== e
              ? ((f = {
                  key: "all",
                  name: e
                    ? (0, l.jsx)(o.A, {
                        id: "space.googleDrive.tabs.myDrive",
                        defaultMessage: "My Drive",
                        description: "Google Drive tab showing the user's own folders and files",
                      })
                    : (0, l.jsx)(o.A, {
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
                        name: (0, l.jsx)(o.A, {
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
            _[21] !== A || _[22] !== S
              ? ((b = (e) => {
                  ;(("recent" === e || "all" === e) && (0, c.np)(S, { category: e }),
                    S.set(p.C6, void 0),
                    (0, p.zl)(
                      S,
                      (0, p.SE)({
                        ...S.value,
                        directoryId:
                          "shared" === e ? (A?.replace(/root$/u, "collection:shared-with-me") ?? null) : (A ?? null),
                        tab: "recent" === e ? "recent" : "all",
                        search: "",
                        categories: [],
                        sources: [],
                      }),
                    ))
                }),
                (_[21] = A),
                (_[22] = S),
                (_[23] = b))
              : (b = _[23]),
            _[24] !== P || _[25] !== g || _[26] !== y || _[27] !== b
              ? ((x = (0, l.jsx)(d.t, {
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: g,
                  selectedKey: P,
                  tabs: y,
                  onSelect: b,
                })),
                (_[24] = P),
                (_[25] = g),
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
    var l = a("SZCv"),
      i = a.n(l),
      s = a("zTeN"),
      r = a("Fmx8"),
      n = a("khOd"),
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
      u = (0, s.un)(
        r.oD,
        ({ get: e, scope: t }) => {
          if (!e(n.GB)) return
          let a = e(r.c0)
          if ("disabled" === a) return []
          if ("success" !== a) {
            let l = e(c)
            if (l?.accountId === t.value.accountId && l.userId === t.value.userId)
              return d.filter(({ provider: t }) => l.providers.includes(t) && e(r.m_, t))
            if ("pending" === a) return
          }
          return d.filter(({ provider: t }) => e(r.UI, t))
        },
        { isEqual: i() },
      )
    a.d(
      t,
      {},
      {
        a: u,
        j: function (e) {
          return e.watch(({ get: t }) => {
            let { accountId: a, userId: l } = e.value
            if (null == l || "success" !== t(r.c0)) return
            let s = t(u)
            if (null == s) return
            let n = { accountId: a, userId: l, providers: s.map(({ provider: e }) => e) }
            i()(e.get(c), n) || e.set(c, n)
          })
        },
      },
    )
  },
  dLrD(e, t, a) {
    var l = a("ABep"),
      i = a("QosV"),
      s = a("HZfM"),
      r = a("Bbed"),
      n = a("ynMj")
    let o = (0, r._)(async () => (await a.e(111855).then(a.bind(a, "cTH9"))).SpaceSiteDetails, {
      fallback: (0, l.jsx)(n.V, {}),
      errorFallback: (0, l.jsx)(n.B, {}),
    })
    a.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            a,
            r,
            n,
            d,
            c,
            u = (0, i.c)(20),
            { children: p, inlineCollection: h, href: g, onNavigate: m } = e,
            f = void 0 !== h && h,
            v = (0, s.zy)(),
            y = (0, s.Zp)()
          u[0] !== g || u[1] !== f || u[2] !== v
            ? ((r = new URL(g ?? v.pathname + v.search, "https://chatgpt.com")),
              (t = null),
              f
                ? (t = r.searchParams.get("site_path"))
                : r.pathname.startsWith("/space/sites/") && "/space/sites/" !== r.pathname && (t = r.pathname.slice(6)),
              (a = null == t ? null : (0, s.B6)("/sites/:projectId/*", t)),
              (u[0] = g),
              (u[1] = f),
              (u[2] = v),
              (u[3] = t),
              (u[4] = a),
              (u[5] = r))
            : ((t = u[3]), (a = u[4]), (r = u[5]))
          let b = a,
            x = f && null == b ? null : t
          u[6] !== f || u[7] !== v || u[8] !== y || u[9] !== m || u[10] !== r.pathname || u[11] !== r.search
            ? ((n = (e, t) => {
                let a = "/sites/library" === e ? "/sites" : e,
                  l = new URLSearchParams(r.search)
                ;("sites" === l.get("view") && l.delete("view"),
                  f && ("/sites" === a ? l.delete("site_path") : l.set("site_path", a)))
                let i = `${f ? r.pathname : `/space${a}`}${l.size > 0 ? `?${l}` : ""}`
                null != m ? m(i, t) : y(i, { state: v.state, ...t })
              }),
              (u[6] = f),
              (u[7] = v),
              (u[8] = y),
              (u[9] = m),
              (u[10] = r.pathname),
              (u[11] = r.search),
              (u[12] = n))
            : (n = u[12])
          let _ = n
          return (
            u[13] !== _ || u[14] !== x
              ? ((d = null != x ? (0, l.jsx)(o, { path: x, onNavigate: _ }) : null),
                (u[13] = _),
                (u[14] = x),
                (u[15] = d))
              : (d = u[15]),
            u[16] !== p || u[17] !== _ || u[18] !== d
              ? ((c = p(_, d)), (u[16] = p), (u[17] = _), (u[18] = d), (u[19] = c))
              : (c = u[19]),
            c
          )
        },
      },
    )
  },
  eM3f(e, t, a) {
    a.a(e, async function (e, l) {
      try {
        var i = a("ABep"),
          s = a("QosV"),
          r = a("SRBo"),
          n = a("on57"),
          o = a("zTeN"),
          d = a("zd8w"),
          c = a("Wf1j"),
          u = a("oyxz"),
          p = a("HZfM"),
          h = a("VEyj"),
          g = a("bJfu"),
          m = a("MeAu"),
          f = a("p690"),
          v = a("M3lc"),
          y = a("SPnB"),
          b = a("OWcD"),
          x = a("Bbed"),
          _ = a("PkPj"),
          S = a("DiyT"),
          w = a("V080"),
          I = a("uNsz"),
          j = a("cGrE"),
          A = a("TCFx"),
          P = a("Fmx8"),
          E = a("eMKR"),
          T = a("LcBG"),
          C = a("FBu8"),
          M = a("fhVa"),
          N = a("XmDk"),
          k = a("dLIb"),
          O = a("Soo0"),
          L = a("M4Gn"),
          U = a("ORiO"),
          R = a("QoH2"),
          F = a("NCaE"),
          G = a("AoIz"),
          D = a("heYt"),
          z = a("vGxR"),
          B = a("T6xA"),
          V = a("elmM"),
          H = a("Rj2I"),
          $ = a("Oj9r"),
          Q = a("V3rO"),
          Y = a("khOd"),
          W = a("hZax"),
          q = a("XXJV"),
          K = a("moBM"),
          Z = a("pZMh"),
          J = a("e1xH"),
          X = a("ynMj"),
          ee = a("sSEJ"),
          et = a("reVW"),
          ea = a("pyoT"),
          el = a("Lowz"),
          ei = a("EWUC"),
          es = a("FiJQ"),
          er = a("D14d"),
          en = a("Kw4a"),
          eo = a("XPum"),
          ed = a("R0Z4"),
          ec = a("LwtL"),
          eu = a("sWvQ"),
          ep = a("fOyY"),
          eh = a("plQD"),
          eg = a("HUbZ"),
          em = a("dLrD"),
          ef = a("CJ4l"),
          ev = a("Waus"),
          ey = a("ReXg"),
          eb = e([G, N, U, M])
        ;[G, N, U, M] = eb.then ? (await eb)() : eb
        let ej = (0, x._)(r.Af),
          eA = (0, x._)(
            async () =>
              (await Promise.all([a.e(784669), a.e(728748), a.e(428274)]).then(a.bind(a, "Strz"))).SpaceSitesPage,
            { suspendToParent: !0, errorFallback: (0, i.jsx)(X.B, {}) },
          ),
          eP = (0, x._)(async () => (await Promise.resolve().then(a.bind(a, "zzCT"))).SlateSpaceCreateMenu),
          eE = (0, x._)(async () => (await a.e(904640).then(a.bind(a, "eDkJ"))).AssignedTaskList)
        function ex(e) {
          let t,
            a,
            l,
            r,
            n,
            c = (0, s.c)(15),
            {
              routeScope: u,
              embedded: g,
              isActive: m,
              isVisible: f,
              navigation: y,
              onOpenItem: x,
              onNavigate: _,
              tabId: S,
            } = e,
            w = void 0 !== g && g,
            I = (0, o.gh)(P.vn),
            j = (0, o.Ul)(eo.i)
          ;((0, o._U)(m && f && j ? b.f : null, "space-home"),
            c[0] !== m || c[1] !== f || c[2] !== I
              ? ((t = () => {
                  if (m && f) return (0, ed.s)(I)
                  f || (0, ed._)(I)
                }),
                (a = [I, m, f]),
                (c[0] = m),
                (c[1] = f),
                (c[2] = I),
                (c[3] = t),
                (c[4] = a))
              : ((t = c[3]), (a = c[4])),
            (0, d.useEffect)(t, a))
          let E = (0, W.Zj)("2881922323"),
            T = (0, o.Ul)(J.CY)
          ;(c[5] !== _ || c[6] !== I
            ? ((l = () => {
                if (null != _)
                  return (
                    I.set(P.xZ, () => _),
                    () => {
                      I.get(P.xZ) === _ && I.set(P.xZ, null)
                    }
                  )
              }),
              (r = [_, I]),
              (c[5] = _),
              (c[6] = I),
              (c[7] = l),
              (c[8] = r))
            : ((l = c[7]), (r = c[8])),
            (0, d.useLayoutEffect)(l, r))
          let C = (0, p.zy)(),
            M = (0, o.Ul)(P.g_),
            N = new URL(M ?? C.pathname + C.search, "https://chatgpt.com"),
            k = N.pathname.startsWith("/space/files"),
            O = N.searchParams.get("view"),
            L = "/space"
          "/space/sites" === N.pathname || N.pathname.startsWith("/space/sites/")
            ? ((O = "sites"), (L = "/space/sites"))
            : k && ((O = "files"), (L = "/space/files"))
          let R = C.state,
            F = (0, o.Ul)(P.xo),
            G = (0, P.ER)(N.pathname, N.search, L, null == M ? R : { libraryFolderReturnLocations: F }),
            z = (0, o.Ul)(D.Et)
          "slides" === O && (T ? (G.slidesIncludeShared = "available" === z) : (delete G.slidesCollection, (O = null)))
          let B = G.slidesCollection,
            V = "library:collection:shared-with-me" === G.directoryId || "shared" === B
          if (
            ((0, d.useEffect)(() => {
              V &&
                "loading" !== z &&
                "available" !== z &&
                (0, P.zl)(I, null != B ? "/space?view=slides" : "/space?tab=all", {
                  expectedUrl: N.pathname + N.search,
                  replace: !0,
                })
            }, [V, I, z, B, N.pathname, N.search]),
            "/space" === N.pathname && "templates" === N.searchParams.get("view"))
          )
            return (0, i.jsx)(ew, {
              category: N.searchParams.get("category"),
              search: N.searchParams.get("search") ?? "",
            })
          if (V && "available" !== z) {
            let e
            return (
              c[9] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(i.Fragment, {})), (c[9] = e))
                : (e = c[9]),
              e
            )
          }
          if (
            (k &&
              "images" === G.tab &&
              ((O = "images"),
              null != G.directoryId ||
                G.deleted ||
                ((G.imageSourceTabs = !0),
                1 !== G.sources.length && (G.sources = ["generated"]),
                (G.categories = G.search ? ["images"] : []))),
            "pages" === O)
          ) {
            let e = N.searchParams.get("pages_tab")
            ;((G.pageCollection = "owned" === e || "shared" === e ? e : "all"),
              (G.directoryId = "shared" === G.pageCollection ? "library:collection:shared-with-me" : null),
              (G.tab = "all"),
              (G.categories = ["pages"]),
              (G.sources = []))
          }
          let H =
            !k && "sites" !== O && ("suggested" === G.tab || "all" === G.tab) && !G.deleted && (0, A.No)(G.directoryId)
          c[10] !== u || c[11] !== I || c[12] !== S || c[13] !== M
            ? ((n = () => {
                if (I.get(P.g_) !== M) return !1
                if (null != S) {
                  let e = (0, q.KE)(u, S)
                  return null != e && u.get((0, q.getThreadPanelTabController)(e).activeTab$)?.tabId === S
                }
                return "chat" === u.get(Z.Em) && !u.get(K.JJ)
              }),
              (c[10] = u),
              (c[11] = I),
              (c[12] = S),
              (c[13] = M),
              (c[14] = n))
            : (n = c[14])
          let $ = n,
            Q =
              "/space" === N.pathname &&
              null == O &&
              !G.deleted &&
              (null == G.directoryId || "library:collection:shared-with-me" === G.directoryId),
            Y = (e, t) =>
              (0, i.jsxs)(o.Ui, {
                scope: P.Qy,
                value: {
                  ...G,
                  entrySurface: "spaces",
                  includePages: H,
                  sources: !H || "suggested" !== G.tab || G.search || G.categories.some(A.bI) ? G.sources : [],
                  defaultViewMode: "list",
                  includeSites: E && !k && "files" !== O && "pages" !== O && "sites" !== O,
                  includePinnedSites: !k && "files" !== O && "pages" !== O && "sites" !== O,
                },
                children: [
                  (0, i.jsx)(eS, { active: t }),
                  (0, i.jsxs)(h.Y, {
                    mode: t ? "visible" : "hidden",
                    children: [
                      (0, i.jsx)(eI, {
                        embedded: w,
                        isVisible: f,
                        navigation: y,
                        view: O,
                        url: N,
                        routeScope: u,
                        tabId: S,
                        onOpenItem: e,
                        isCurrent: w ? $ : void 0,
                      }),
                      (0, i.jsx)(em.M, {
                        href: N.pathname + N.search,
                        onNavigate: (e, t) => (0, P.zl)(I, e, { state: C.state, ...t }),
                        children: (e) => (0, i.jsx)(v.O, { routeScope: u, isVisible: f, onNavigateToSite: e }),
                      }),
                    ],
                  }),
                ],
              })
          return w
            ? (0, i.jsx)(U.u, {
                routeScope: u,
                isCurrent: $,
                tabId: S,
                children: (e) =>
                  (0, i.jsx)(
                    e_,
                    {
                      retain: Q,
                      href: JSON.stringify([N.pathname, O, G.tab, G.directoryId]),
                      children: (t) => Y(e, t),
                    },
                    JSON.stringify([I.value.accountId, I.value.userId]),
                  ),
              })
            : (0, i.jsx)(
                e_,
                { retain: Q, href: JSON.stringify([N.pathname, O, G.tab, G.directoryId]), children: (e) => Y(x, e) },
                JSON.stringify([I.value.accountId, I.value.userId]),
              )
        }
        function e_(e) {
          let t,
            a,
            l,
            r,
            n,
            o,
            c = (0, s.c)(14),
            { retain: u, href: p, children: h } = e
          c[0] !== h || c[1] !== p
            ? ((t = () => ({ href: p, children: h, views: [{ href: p, children: h }] })),
              (c[0] = h),
              (c[1] = p),
              (c[2] = t))
            : (t = c[2])
          let [g, m] = (0, d.useState)(t)
          if (g.href !== p || g.children !== h) {
            let e = [{ href: p, children: h }]
            ;(u &&
              (e = g.views.some((e) => e.href === p)
                ? g.views.map((e) => (e.href === p ? { href: p, children: h } : e))
                : [...g.views.filter((e) => e.href === g.href), { href: p, children: h }]),
              m({ href: p, children: h, views: e }))
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
            c[4] !== p ? ((l = [p]), (c[4] = p), (c[5] = l)) : (l = c[5]),
            (0, d.useLayoutEffect)(a, l),
            c[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (e) => {
                  v.current = null != e.target.closest('[role="tab"]')
                }),
                (c[6] = r))
              : (r = c[6]),
            c[7] !== g.views || c[8] !== p)
          ) {
            let e
            ;(c[10] !== p
              ? ((e = (e) =>
                  (0, i.jsxs)(
                    d.Fragment,
                    {
                      children: [
                        (0, i.jsx)(H.A, {
                          active: e.href === p,
                          ttlSeconds: 600,
                          onExpire: () =>
                            m((t) => ({ ...t, views: t.views.filter((a) => a.href === t.href || a.href !== e.href) })),
                        }),
                        (0, i.jsx)("div", {
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
              (n = g.views.map(e)),
              (c[7] = g.views),
              (c[8] = p),
              (c[9] = n))
          } else n = c[9]
          return (
            c[12] !== n
              ? ((o = (0, i.jsx)("div", { className: "contents", ref: f, onFocusCapture: r, children: n })),
                (c[12] = n),
                (c[13] = o))
              : (o = c[13]),
            o
          )
        }
        function eS(e) {
          let t,
            a,
            l = (0, s.c)(4),
            { active: i } = e,
            r = (0, o.gh)(P.Qy)
          return (
            l[0] !== i || l[1] !== r
              ? ((t = () => {
                  !i && r.get(F.oe).size > 0 && r.set(F.oe, new Set())
                }),
                (a = [i, r]),
                (l[0] = i),
                (l[1] = r),
                (l[2] = t),
                (l[3] = a))
              : ((t = l[2]), (a = l[3])),
            (0, d.useLayoutEffect)(t, a),
            null
          )
        }
        function ew(e) {
          let t,
            a,
            l,
            r,
            n = (0, s.c)(11),
            { category: c, search: u } = e,
            p = (0, o.gh)(P.vn),
            h = (0, W.Zj)("183803860"),
            g = (0, W.DR)("183803860")
          return (n[0] !== h || n[1] !== g || n[2] !== p
            ? ((t = () => {
                h || g || (0, P.zl)(p, "/space", { replace: !0 })
              }),
              (a = [h, g, p]),
              (n[0] = h),
              (n[1] = g),
              (n[2] = p),
              (n[3] = t),
              (n[4] = a))
            : ((t = n[3]), (a = n[4])),
          (0, d.useEffect)(t, a),
          h)
            ? (n[5] !== p
                ? ((l = (e, t) => {
                    let a = new URLSearchParams({ view: "templates" })
                    ;(e && a.set("category", e), t && a.set("search", t), (0, P.zl)(p, `/space?${a}`, { replace: !0 }))
                  }),
                  (n[5] = p),
                  (n[6] = l))
                : (l = n[6]),
              n[7] !== c || n[8] !== u || n[9] !== l
                ? ((r = (0, i.jsx)(ej, { category: c, search: u, onNavigate: l })),
                  (n[7] = c),
                  (n[8] = u),
                  (n[9] = l),
                  (n[10] = r))
                : (r = n[10]),
              r)
            : null
        }
        function eI(e) {
          let t,
            a,
            l,
            r,
            h,
            g,
            v,
            b,
            x,
            E,
            N,
            U,
            R,
            F,
            G,
            H,
            q,
            K,
            Z,
            ee,
            el,
            en,
            eo,
            ed = (0, s.c)(193),
            {
              routeScope: ey,
              tabId: eb,
              embedded: ex,
              isVisible: e_,
              navigation: eS,
              view: ew,
              url: eI,
              onOpenItem: ej,
              isCurrent: eT,
            } = e,
            eC = (0, o.gh)(P.Qy),
            eM = (0, c.A)(),
            eN = (0, p.zy)(),
            ek = (0, o.Ul)(J.TV),
            eO = (0, W.Zj)(
              !ek || null != ew || "library:collection:shared-with-me" !== eC.value.directoryId || "476199071",
            )
          ed[0] !== ek || ed[1] !== ew || ed[2] !== eC.value.tab || ed[3] !== eI.pathname
            ? ((t =
                ek &&
                null == ew &&
                (0, et.GD)(eI.pathname) &&
                ("images" === eC.value.tab || "folders" === eC.value.tab)),
              (ed[0] = ek),
              (ed[1] = ew),
              (ed[2] = eC.value.tab),
              (ed[3] = eI.pathname),
              (ed[4] = t))
            : (t = ed[4])
          let eL = t
          ed[5] !== ek ||
          ed[6] !== ew ||
          ed[7] !== eC.value.deleted ||
          ed[8] !== eC.value.directoryId ||
          ed[9] !== eO ||
          ed[10] !== eI.searchParams
            ? ((a =
                ek &&
                eO &&
                null == ew &&
                "sites" === eI.searchParams.get("artifact") &&
                !eC.value.deleted &&
                (null == eC.value.directoryId || "library:collection:shared-with-me" === eC.value.directoryId)),
              (ed[5] = ek),
              (ed[6] = ew),
              (ed[7] = eC.value.deleted),
              (ed[8] = eC.value.directoryId),
              (ed[9] = eO),
              (ed[10] = eI.searchParams),
              (ed[11] = a))
            : (a = ed[11])
          let eU = a
          ed[12] !== eU || ed[13] !== eL || ed[14] !== ew
            ? ((l = ew),
              eU ? (l = "sites") : eL && (l = "files"),
              (ed[12] = eU),
              (ed[13] = eL),
              (ed[14] = ew),
              (ed[15] = l))
            : (l = ed[15])
          let eR = (0, o.Ul)("sites" === l ? f.x : P.YH),
            eF = (0, o.Ul)(P.eY),
            eG = (0, o.Ul)(J.K8),
            eD = eG && "assigned" === l,
            ez = (0, d.useRef)(null)
          ed[16] !== eN.key ||
          ed[17] !== eN.state?.pageListScrollKey ||
          ed[18] !== eI.pathname ||
          ed[19] !== eI.search ||
          ed[20] !== eR
            ? ((r = JSON.stringify([eN.state?.pageListScrollKey ?? eN.key, eI.pathname, eI.search, eR])),
              (ed[16] = eN.key),
              (ed[17] = eN.state?.pageListScrollKey),
              (ed[18] = eI.pathname),
              (ed[19] = eI.search),
              (ed[20] = eR),
              (ed[21] = r))
            : (r = ed[21])
          let eB = r
          ;(ed[22] !== ex || ed[23] !== eC || ed[24] !== eB || ed[25] !== l
            ? ((h = () => {
                let e = ez.current
                if (!ex && "pages" === l && null != e) return (0, ep.w)(eC, eB, e)
              }),
              (ed[22] = ex),
              (ed[23] = eC),
              (ed[24] = eB),
              (ed[25] = l),
              (ed[26] = h))
            : (h = ed[26]),
            ed[27] !== ex || ed[28] !== eC || ed[29] !== eB || ed[30] !== l
              ? ((g = [ex, eC, eB, l]), (ed[27] = ex), (ed[28] = eC), (ed[29] = eB), (ed[30] = l), (ed[31] = g))
              : (g = ed[31]),
            (0, d.useLayoutEffect)(h, g))
          let eV = (0, o.Ul)(Y.GB),
            eH = (0, o.Ul)(J.CY)
          ed[32] !== eH || ed[33] !== eC.value || ed[34] !== l
            ? ((v = eH && "slides" === l && (0, ev.D)(eC.value)),
              (ed[32] = eH),
              (ed[33] = eC.value),
              (ed[34] = l),
              (ed[35] = v))
            : (v = ed[35])
          let e$ = v,
            eQ = (0, o.Ul)(D.Tm),
            eY =
              ek &&
              (null == l || eU) &&
              !eC.value.deleted &&
              (null == eC.value.directoryId || "library:collection:shared-with-me" === eC.value.directoryId),
            eW = eI.pathname + eI.search
          ;(ed[36] !== ex || ed[37] !== e_ || ed[38] !== eC || ed[39] !== eY || ed[40] !== eW
            ? ((b = () => {
                if (!eY || ex || !e_) return
                let e = (e, t) => {
                  t === eW &&
                    eC.value.accountId === eC.get(y.chatGptAuthenticatedAccountId$) &&
                    eC.value.userId === eC.get(y.chatGptAuthenticatedUserId$) &&
                    ("clear-filters" === e
                      ? (eC.value.categories.length > 0 && (0, j.np)(eC, { fileTypes: [] }),
                        eC.value.sources.length > 0 && (0, j.np)(eC, { sources: [] }))
                      : (0, j.np)(eC, { category: e }))
                }
                return (
                  eC.set(er.t, () => e),
                  () => {
                    eC.get(er.t) === e && eC.set(er.t, null)
                  }
                )
              }),
              (x = [ex, e_, eC, eY, eW]),
              (ed[36] = ex),
              (ed[37] = e_),
              (ed[38] = eC),
              (ed[39] = eY),
              (ed[40] = eW),
              (ed[41] = b),
              (ed[42] = x))
            : ((b = ed[41]), (x = ed[42])),
            (0, d.useEffect)(b, x))
          let eq = (0, o.Ul)(z.uw),
            eK = (0, o.Ul)(!eq && z.wh)
          ed[43] !== eM
            ? ((E = eM.formatMessage({
                id: "space.list.searchPlaceholder",
                defaultMessage: "Search",
                description: "Placeholder for the search field on Space home",
              })),
              (ed[43] = eM),
              (ed[44] = E))
            : (E = ed[44])
          let eZ = E
          ed[45] !== eC.value.basePath || ed[46] !== eC.value.directoryId
            ? ((N =
                null != eC.value.directoryId && (0, I.Tf)(eC.value.directoryId, eC.value.basePath)
                  ? eC.value.directoryId
                  : void 0),
              (ed[45] = eC.value.basePath),
              (ed[46] = eC.value.directoryId),
              (ed[47] = N))
            : (N = ed[47])
          let eJ = N,
            eX = null
          if (
            eq &&
            !eC.value.deleted &&
            ("pages" === l || null == eC.value.directoryId || "native" === (0, A.oh)(eC.value.directoryId))
          )
            if ("pages" === l) {
              let e
              ;(ed[48] !== eJ
                ? ((e = (0, i.jsx)(eP, { action: "pages", parentFolderId: eJ })), (ed[48] = eJ), (ed[49] = e))
                : (e = ed[49]),
                (eX = e))
            } else if (e$) {
              let e
              ;(ed[50] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(eP, { action: "slides" })), (ed[50] = e))
                : (e = ed[50]),
                (eX = e))
            } else if (eV)
              if ("sites" === l || "images" === l) {
                let e
                ;(ed[52] !== l ? ((e = (0, i.jsx)(eP, { action: l })), (ed[52] = l), (ed[53] = e)) : (e = ed[53]),
                  (eX = e))
              } else if (
                null == l &&
                (null == eC.value.directoryId || "library:collection:shared-with-me" === eC.value.directoryId)
              ) {
                let e
                ;(ed[54] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(eP, {})), (ed[54] = e))
                  : (e = ed[54]),
                  (eX = e))
              } else if (null == l && null != eJ) {
                let e
                ;(ed[55] !== eJ
                  ? ((e = (0, i.jsx)(eP, { parentFolderId: eJ })), (ed[55] = eJ), (ed[56] = e))
                  : (e = ed[56]),
                  (eX = e))
              } else {
                let e,
                  t = null == l ? "space" : void 0
                ;(ed[57] !== t
                  ? ((e = (0, i.jsx)(w.Rr, { variant: t, compactOnMobile: !0, showNote: !1 })),
                    (ed[57] = t),
                    (ed[58] = e))
                  : (e = ed[58]),
                  (eX = e))
              }
            else {
              let e
              ;(ed[51] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(w.Rr, { showNote: !1 })), (ed[51] = e))
                : (e = ed[51]),
                (eX = e))
            }
          if (eK && (null == l || "files" === l)) {
            let e
            ;(ed[59] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(w.JA, {})), (ed[59] = e))
              : (e = ed[59]),
              (eX = e))
          }
          ;(ed[60] !== eV || ed[61] !== eT || ed[62] !== eS?.onOpenPage
            ? ((U = eV ? null : (0, i.jsx)(B.F, { onOpenPage: eS?.onOpenPage, isCurrent: eT })),
              (ed[60] = eV),
              (ed[61] = eT),
              (ed[62] = eS?.onOpenPage),
              (ed[63] = U))
            : (U = ed[63]),
            ed[64] !== eX || ed[65] !== U
              ? ((R = (0, i.jsxs)(i.Fragment, { children: [eX, U] })), (ed[64] = eX), (ed[65] = U), (ed[66] = R))
              : (R = ed[66]))
          let e0 = R
          if (
            ed[67] !== eU ||
            ed[68] !== eM ||
            ed[69] !== eC.value.deleted ||
            ed[70] !== eC.value.directoryId ||
            ed[71] !== eC.value.tab ||
            ed[72] !== eY ||
            ed[73] !== e$ ||
            ed[74] !== l
          ) {
            if (eC.value.deleted)
              F = (0, i.jsx)(u.A, {
                id: "libraryNext.title.trash",
                defaultMessage: "Trash",
                description: "Library trash heading",
              })
            else if (
              null != eC.value.directoryId &&
              ("files" === l || "library:collection:shared-with-me" !== eC.value.directoryId)
            ) {
              let e
              ;(ed[76] !== eM || ed[77] !== l
                ? ((e =
                    "files" === l
                      ? eM.formatMessage({
                          id: "codex.space.files.title",
                          defaultMessage: "Files",
                          description: "Heading for external files of all types in Space",
                        })
                      : eM.formatMessage({
                          id: "space.home.allTitle",
                          defaultMessage: "All",
                          description: "Title of the combined Library and Pages homepage",
                        })),
                  (ed[76] = eM),
                  (ed[77] = l),
                  (ed[78] = e))
                : (e = ed[78]),
                (F = (0, i.jsx)(L.e9, { rootName: e })))
            } else
              F =
                eY && "library:collection:shared-with-me" === eC.value.directoryId
                  ? (0, i.jsx)(u.A, {
                      id: "space.home.sharedWithYou",
                      defaultMessage: "Shared with you",
                      description: "Space homepage tab for Library's Shared with me folder",
                    })
                  : eY && ("all" === eC.value.tab || "favorites" === eC.value.tab)
                    ? (0, i.jsx)(u.A, {
                        id: "space.home.yourItems",
                        defaultMessage: "Your items",
                        description: "Space homepage tab for the existing Library All collection",
                      })
                    : e$
                      ? (0, i.jsx)(u.A, {
                          id: "space.home.slidesTitle",
                          defaultMessage: "Slides",
                          description:
                            "Heading and sidebar navigation label for the Space collection containing native Slides and presentation files",
                        })
                      : "pages" === l
                        ? (0, i.jsx)(u.A, {
                            id: "space.list.pagesTab",
                            defaultMessage: "Pages",
                            description: "Filter showing all Pages",
                          })
                        : "sites" !== l || eU
                          ? "images" === l
                            ? (0, i.jsx)(u.A, {
                                id: "libraryNext.filters.images",
                                defaultMessage: "Images",
                                description:
                                  "Library image category, shown as a tab, filter menu option, or selected filter chip",
                              })
                            : "files" === l
                              ? (0, i.jsx)(u.A, {
                                  id: "codex.space.files.title",
                                  defaultMessage: "Files",
                                  description: "Heading for external files of all types in Space",
                                })
                              : (0, i.jsx)(u.A, {
                                  id: "space.home.allTitle",
                                  defaultMessage: "All",
                                  description: "Title of the combined Library and Pages homepage",
                                })
                          : (0, i.jsx)(u.A, {
                              id: "codex.space.sites.title",
                              defaultMessage: "Sites",
                              description: "Title of the built-in Sites page in Spaces",
                            })
            ;((ed[67] = eU),
              (ed[68] = eM),
              (ed[69] = eC.value.deleted),
              (ed[70] = eC.value.directoryId),
              (ed[71] = eC.value.tab),
              (ed[72] = eY),
              (ed[73] = e$),
              (ed[74] = l),
              (ed[75] = F))
          } else F = ed[75]
          if ("sites" === l) {
            let e, t, a, l, s, r, n
            ;(ed[79] !== eU || ed[80] !== eC.value.directoryId || ed[81] !== eC.value.tab
              ? (eU &&
                  ((e = "all"),
                  "library:collection:shared-with-me" === eC.value.directoryId
                    ? (e = "shared")
                    : ("all" === eC.value.tab || "favorites" === eC.value.tab) && (e = "owned")),
                (ed[79] = eU),
                (ed[80] = eC.value.directoryId),
                (ed[81] = eC.value.tab),
                (ed[82] = e))
              : (e = ed[82]),
              ed[83] !== eM
                ? ((t = eM.formatMessage({
                    id: "appgenPage.sites.search",
                    defaultMessage: "Search sites",
                    description: "Accessible label and placeholder for searching Sites",
                  })),
                  (ed[83] = eM),
                  (ed[84] = t))
                : (t = ed[84]))
            let c = t
            ed[85] !== eC ? ((a = eC.get(ea.spaceAccountId$)), (ed[85] = eC), (ed[86] = a)) : (a = ed[86])
            let p = a,
              h = eN.state?.spaceSidebarAccountId === p ? eN.state : null
            ed[87] !== p ||
            ed[88] !== e0 ||
            ed[89] !== e ||
            ed[90] !== eV ||
            ed[91] !== eU ||
            ed[92] !== e_ ||
            ed[93] !== eN.state ||
            ed[94] !== h?.spaceSidebarPersonal ||
            ed[95] !== h?.spaceSidebarRootPageId ||
            ed[96] !== ey ||
            ed[97] !== eC ||
            ed[98] !== c ||
            ed[99] !== F ||
            ed[100] !== eI ||
            ed[101] !== eR
              ? ((l = (t) =>
                  (0, i.jsx)(o.Ui, {
                    scope: Q.l7,
                    value: ey.getOwnValue(Q.l7),
                    children: (0, i.jsx)(o.Ui, {
                      scope: $.GD,
                      value: ey.getOwnValue($.GD),
                      children: (0, i.jsx)(d.Suspense, {
                        fallback: eU
                          ? (0, i.jsx)(k.WI, {
                              stickyNavigation: !1,
                              title: F,
                              navigation: (0, i.jsx)("div", {
                                className: "w-full",
                                children: (0, i.jsxs)(_.uC, {
                                  inset: !1,
                                  wrap: !0,
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "min-w-0 flex-auto overflow-x-auto",
                                      children: (0, i.jsx)(es.h, { scope: eC, sitesSelected: !0 }),
                                    }),
                                    (0, i.jsx)(k.E2, { value: eR, disabled: !0 }),
                                  ],
                                }),
                              }),
                              controls: (0, i.jsx)(k.Pu, {
                                fixedSearchWidth: !0,
                                showViewToggle: !1,
                                searchPlaceholder: c,
                                searchLabel: c,
                                searchQuery: eI.searchParams.get("search") ?? "",
                                searchMaxLength: 200,
                                onSearchQueryChange: (e) => {
                                  let t = new URL(eI)
                                  ;(e ? t.searchParams.set("search", e) : t.searchParams.delete("search"),
                                    (0, P.zl)(eC, t.pathname + t.search, { replace: !0, state: eN.state }))
                                },
                                actions: e0,
                              }),
                              children:
                                "grid" === eR
                                  ? (0, i.jsx)(T.oH, { square: !0 })
                                  : (0, i.jsx)(C.b, {
                                      layout: "stacked",
                                      rowCount: 7,
                                      loadingLabel: (0, i.jsx)(u.A, {
                                        id: "appgenPage.loading",
                                        defaultMessage: "Loading sites",
                                        description: "Accessible status while the Sites page is loading",
                                      }),
                                    }),
                            })
                          : (0, i.jsx)(X.V, {}),
                        children: (0, i.jsx)(eA, {
                          isVisible: e_,
                          collectionNavigation: {
                            href: eU ? eI.pathname + eI.search : "/space/sites" + eI.search,
                            view: e,
                            onNavigate: (e, t) => (0, P.zl)(eC, e, { state: eN.state, ...t }),
                            state: eV
                              ? {
                                  sidebarArea: "space",
                                  spaceSidebarAccountId: p ?? void 0,
                                  spaceSidebarRootPageId: h?.spaceSidebarRootPageId,
                                  spaceSidebarPersonal: h?.spaceSidebarPersonal ?? !1,
                                }
                              : void 0,
                          },
                          onNavigateToSite: t,
                          renderLayout: (e) => {
                            let {
                              tabs: t,
                              children: a,
                              searchQuery: l,
                              onSearchQueryChange: s,
                              searchPlaceholder: r,
                              searchMaxLength: n,
                              viewMode: o,
                              onViewModeChange: d,
                            } = e
                            return (0, i.jsx)(k.WI, {
                              stickyNavigation: !1,
                              title: F,
                              navigation: (0, i.jsx)("div", {
                                className: "w-full",
                                children: (0, i.jsxs)(_.uC, {
                                  inset: !1,
                                  wrap: !0,
                                  children: [
                                    (0, i.jsx)("div", {
                                      className: "min-w-0 flex-auto overflow-x-auto",
                                      children: eU ? (0, i.jsx)(es.h, { scope: eC, sitesSelected: !0 }) : t,
                                    }),
                                    (0, i.jsx)(k.E2, { value: o, onChange: d }),
                                  ],
                                }),
                              }),
                              controls: (0, i.jsx)(k.Pu, {
                                fixedSearchWidth: !0,
                                showViewToggle: !1,
                                searchPlaceholder: r,
                                searchLabel: r,
                                searchQuery: l,
                                searchMaxLength: n,
                                onSearchQueryChange: s,
                                actions: e0,
                              }),
                              children: a,
                            })
                          },
                        }),
                      }),
                    }),
                  })),
                (ed[87] = p),
                (ed[88] = e0),
                (ed[89] = e),
                (ed[90] = eV),
                (ed[91] = eU),
                (ed[92] = e_),
                (ed[93] = eN.state),
                (ed[94] = h?.spaceSidebarPersonal),
                (ed[95] = h?.spaceSidebarRootPageId),
                (ed[96] = ey),
                (ed[97] = eC),
                (ed[98] = c),
                (ed[99] = F),
                (ed[100] = eI),
                (ed[101] = eR),
                (ed[102] = l))
              : (l = ed[102])
            let g = l,
              m = eI.pathname + eI.search
            return (
              ed[103] !== eN.state || ed[104] !== eC
                ? ((s = (e, t) => (0, P.zl)(eC, e, { state: eN.state, ...t })),
                  (ed[103] = eN.state),
                  (ed[104] = eC),
                  (ed[105] = s))
                : (s = ed[105]),
              ed[106] !== g || ed[107] !== ey
                ? ((r = (e, t) =>
                    null == t
                      ? g(e)
                      : (0, i.jsx)(o.Ui, {
                          scope: Q.l7,
                          value: ey.getOwnValue(Q.l7),
                          children: (0, i.jsx)(o.Ui, { scope: $.GD, value: ey.getOwnValue($.GD), children: t }),
                        })),
                  (ed[106] = g),
                  (ed[107] = ey),
                  (ed[108] = r))
                : (r = ed[108]),
              ed[109] !== eU || ed[110] !== m || ed[111] !== s || ed[112] !== r
                ? ((n = (0, i.jsx)(em.M, { inlineCollection: eU, href: m, onNavigate: s, children: r })),
                  (ed[109] = eU),
                  (ed[110] = m),
                  (ed[111] = s),
                  (ed[112] = r),
                  (ed[113] = n))
                : (n = ed[113]),
              n
            )
          }
          let e1 = !0 === eC.value.imageSourceTabs
          ed[114] !== eC.value || ed[115] !== eY || ed[116] !== e1 || ed[117] !== l
            ? ((G = !e1 && "pages" !== l && (!eY || (0, P.cZ)(eC.value))),
              (ed[114] = eC.value),
              (ed[115] = eY),
              (ed[116] = e1),
              (ed[117] = l),
              (ed[118] = G))
            : (G = ed[118])
          let e2 = G
          ed[119] !== eC.value.basePath || ed[120] !== eC.value.deleted || ed[121] !== eC.value.directoryId
            ? ((H =
                "/space" === eC.value.basePath &&
                !eC.value.deleted &&
                ((0, A.vM)(eC.value.directoryId) || (0, A.$n)(eC.value.directoryId))),
              (ed[119] = eC.value.basePath),
              (ed[120] = eC.value.deleted),
              (ed[121] = eC.value.directoryId),
              (ed[122] = H))
            : (H = ed[122])
          let e3 = H,
            e4 =
              e3 ||
              (!e$ &&
                "pages" !== l &&
                "images" !== l &&
                "files" !== l &&
                !eC.value.deleted &&
                (null == eC.value.directoryId || "library:collection:shared-with-me" === eC.value.directoryId)),
            e5 = "library:collection:shared-with-me" === eC.value.directoryId ? "shared" : eC.value.tab
          if (ed[123] !== eG || ed[124] !== eC.value || ed[125] !== eQ) {
            if (((q = []), eQ)) {
              let e, t, a
              ;(ed[127] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(u.A, {
                    id: "space.home.sharedWithYou",
                    defaultMessage: "Shared with you",
                    description: "Space homepage tab for Library's Shared with me folder",
                  })),
                  (ed[127] = e))
                : (e = ed[127]),
                ed[128] !== eC.value
                  ? ((t = (0, P.SE)({
                      ...eC.value,
                      directoryId: "library:collection:shared-with-me",
                      tab: "all",
                      categories: [],
                      sources: [],
                    })),
                    (ed[128] = eC.value),
                    (ed[129] = t))
                  : (t = ed[129]),
                ed[130] !== t
                  ? ((a = { key: "shared", name: e, href: t }), (ed[130] = t), (ed[131] = a))
                  : (a = ed[131]),
                q.push(a))
            }
            if (eG) {
              let e
              ;(ed[132] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = {
                    key: "assigned",
                    name: (0, i.jsx)(u.A, {
                      id: "space.home.assignedToYou",
                      defaultMessage: "Assigned to you",
                      description: "All view tab listing Page tasks assigned to the signed-in person",
                    }),
                    href: "/space?view=assigned",
                  }),
                  (ed[132] = e))
                : (e = ed[132]),
                q.push(e))
            }
            ;((ed[123] = eG), (ed[124] = eC.value), (ed[125] = eQ), (ed[126] = q))
          } else q = ed[126]
          if (eY) {
            let e
            ;(ed[133] !== eC ? ((e = (0, i.jsx)(es.h, { scope: eC })), (ed[133] = eC), (ed[134] = e)) : (e = ed[134]),
              (K = e))
          } else if (e$) {
            let e
            ;(ed[135] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(ef.i, {})), (ed[135] = e))
              : (e = ed[135]),
              (K = e))
          } else if ("pages" === l) {
            let e
            ;(ed[136] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(eh.Y, {})), (ed[136] = e))
              : (e = ed[136]),
              (K = e))
          } else if ("images" === l && e1) {
            let e
            ;(ed[137] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(ec.c, {})), (ed[137] = e))
              : (e = ed[137]),
              (K = e))
          } else if (!e$ && !e4 && !eC.value.deleted && (!eC.value.search || eL) && null == eC.value.directoryId) {
            let e, t, a
            ;(ed[138] !== eC
              ? ((e = (e) => (0, j.np)(eC, { category: e })),
                (t = (e) => (0, P.zl)(eC, e)),
                (ed[138] = eC),
                (ed[139] = e),
                (ed[140] = t))
              : ((e = ed[139]), (t = ed[140])),
              ed[141] !== eL || ed[142] !== eC.value || ed[143] !== e || ed[144] !== t
                ? ((a = (0, i.jsx)(L.I2, {
                    basePath: eC.value.basePath,
                    browseLocation: eC.value,
                    selectedKey: eC.value.tab,
                    preserveSearch: eL,
                    onFileTabSelect: e,
                    onNavigate: t,
                  })),
                  (ed[141] = eL),
                  (ed[142] = eC.value),
                  (ed[143] = e),
                  (ed[144] = t),
                  (ed[145] = a))
                : (a = ed[145]),
              (K = a))
          }
          let e7 = !e4
          return (
            ed[146] !== ex || ed[147] !== ey || ed[148] !== eb
              ? ((Z = ex ? () => (0, ei.E)(ey, eb ?? null) : void 0),
                (ed[146] = ex),
                (ed[147] = ey),
                (ed[148] = eb),
                (ed[149] = Z))
              : (Z = ed[149]),
            ed[150] !== e0 || ed[151] !== eC.value.deleted || ed[152] !== eZ || ed[153] !== eD
              ? ((ee = eC.value.deleted
                  ? void 0
                  : !eD &&
                    (0, i.jsx)(L.pH, { showBrowseControls: !1, searchPlaceholder: eZ, searchLabel: eZ, actions: e0 })),
                (ed[150] = e0),
                (ed[151] = eC.value.deleted),
                (ed[152] = eZ),
                (ed[153] = eD),
                (ed[154] = ee))
              : (ee = ed[154]),
            ed[155] !== q ||
            ed[156] !== e5 ||
            ed[157] !== K ||
            ed[158] !== eF ||
            ed[159] !== eC ||
            ed[160] !== eY ||
            ed[161] !== eD ||
            ed[162] !== e4 ||
            ed[163] !== e2 ||
            ed[164] !== e3 ||
            ed[165] !== e$ ||
            ed[166] !== eR
              ? ((el = eC.value.deleted
                  ? void 0
                  : (0, i.jsx)("div", {
                      className: "w-full",
                      children: (0, i.jsxs)(_.uC, {
                        inset: !1,
                        wrap: !0,
                        children: [
                          (null != K || e4) &&
                            (0, i.jsx)("div", {
                              className: "min-w-0 flex-auto overflow-x-auto",
                              children:
                                K ??
                                (e3
                                  ? (0, i.jsx)(eg.K, {})
                                  : (0, i.jsx)(L.I2, {
                                      basePath: "/space",
                                      browseLocation: eC.value,
                                      selectedKey: eD ? "assigned" : e5,
                                      fileTabs: ["suggested", "favorites", "all"],
                                      preserveSearch: !0,
                                      tabLabels: {
                                        suggested: (0, i.jsxs)("span", {
                                          className: "grid text-center",
                                          children: [
                                            (0, i.jsx)("span", {
                                              className: (0, n.A)(
                                                "col-start-1 row-start-1",
                                                !!eC.value.search && "invisible",
                                              ),
                                              "aria-hidden": !!eC.value.search,
                                              children: (0, i.jsx)(u.A, {
                                                id: "libraryNext.tabs.suggested",
                                                defaultMessage: "Suggested",
                                                description: "Library tab for backend-ranked suggested items",
                                              }),
                                            }),
                                            (0, i.jsx)("span", {
                                              className: (0, n.A)(
                                                "col-start-1 row-start-1",
                                                !eC.value.search && "invisible",
                                              ),
                                              "aria-hidden": !eC.value.search,
                                              children: (0, i.jsx)(u.A, {
                                                id: "space.home.allResults",
                                                defaultMessage: "All results",
                                                description:
                                                  "Space homepage tab replacing Suggested while a search query is active",
                                              }),
                                            }),
                                          ],
                                        }),
                                        all: (0, i.jsx)(u.A, {
                                          id: "space.home.yourItems",
                                          defaultMessage: "Your items",
                                          description: "Space homepage tab for the existing Library All collection",
                                        }),
                                      },
                                      additionalTabs: q,
                                      onNavigate: (e) => (0, P.zl)(eC, e),
                                      onFileTabSelect: (e) => (0, j.np)(eC, { category: e }),
                                    })),
                            }),
                          !eD &&
                            (0, i.jsx)("div", {
                              className: "min-w-0 flex-auto",
                              children: (0, i.jsx)(S.T, {
                                filterTags: e2 ? (0, i.jsx)(O.l, { showCategoryFilters: !e$ && !eY }) : null,
                                search: null,
                                controls: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                    e2 && (0, i.jsx)(O.d, { showCategoryFilters: !e$ && !eY }),
                                    e2 && !eF && (0, P.BG)(eC.value) && (0, i.jsx)(m.Ow, {}),
                                    !eF &&
                                      (0, i.jsx)(k.zK, {
                                        viewModeControl: { value: eR, onChange: (e) => (0, P.ul)(eC, e) },
                                        onViewModeChange: (e) => (0, j.np)(eC, { layout: e }),
                                      }),
                                  ],
                                }),
                              }),
                            }),
                        ],
                      }),
                    })),
                (ed[155] = q),
                (ed[156] = e5),
                (ed[157] = K),
                (ed[158] = eF),
                (ed[159] = eC),
                (ed[160] = eY),
                (ed[161] = eD),
                (ed[162] = e4),
                (ed[163] = e2),
                (ed[164] = e3),
                (ed[165] = e$),
                (ed[166] = eR),
                (ed[167] = el))
              : (el = ed[167]),
            ed[168] !== eT ||
            ed[169] !== e_ ||
            ed[170] !== eS ||
            ed[171] !== ej ||
            ed[172] !== ey ||
            ed[173] !== eC.value.deleted ||
            ed[174] !== eC.value.search ||
            ed[175] !== eC.value.tab ||
            ed[176] !== eY ||
            ed[177] !== eD ||
            ed[178] !== e4 ||
            ed[179] !== e3 ||
            ed[180] !== eI.pathname ||
            ed[181] !== l ||
            ed[182] !== eR
              ? ((en = eD
                  ? e_ && (0, i.jsx)(eE, { onOpenPage: eS?.onOpenPage })
                  : (0, i.jsx)(eu.K, {
                      structuredGridEnabled:
                        "grid" === eR &&
                        !eC.value.search &&
                        !eC.value.deleted &&
                        ("pages" === l || (e4 && !e3)) &&
                        ("suggested" === eC.value.tab || "all" === eC.value.tab),
                      collectionRows: eY,
                      pathname: eI.pathname,
                      navigation: eS,
                      isCurrent: eT,
                      onOpenItem: ej,
                      onOpenProfile: (e) => {
                        ;(0, V.openProfileTab)(ey, e)
                      },
                      wrapSearchResult: (e) =>
                        (0, i.jsx)(o.Ui, {
                          scope: Q.l7,
                          value: ey.getOwnValue(Q.l7),
                          children: (0, i.jsx)(o.Ui, { scope: $.GD, value: ey.getOwnValue($.GD), children: e }),
                        }),
                    })),
                (ed[168] = eT),
                (ed[169] = e_),
                (ed[170] = eS),
                (ed[171] = ej),
                (ed[172] = ey),
                (ed[173] = eC.value.deleted),
                (ed[174] = eC.value.search),
                (ed[175] = eC.value.tab),
                (ed[176] = eY),
                (ed[177] = eD),
                (ed[178] = e4),
                (ed[179] = e3),
                (ed[180] = eI.pathname),
                (ed[181] = l),
                (ed[182] = eR),
                (ed[183] = en))
              : (en = ed[183]),
            ed[184] !== e_ ||
            ed[185] !== ej ||
            ed[186] !== e7 ||
            ed[187] !== Z ||
            ed[188] !== ee ||
            ed[189] !== el ||
            ed[190] !== en ||
            ed[191] !== F
              ? ((eo = (0, i.jsx)(M.b, {
                  scrollContainerRef: ez,
                  isVisible: e_,
                  stickyNavigation: e7,
                  onSelectionToolbarMount: Z,
                  title: F,
                  controls: ee,
                  navigation: el,
                  onOpenItem: ej,
                  results: en,
                })),
                (ed[184] = e_),
                (ed[185] = ej),
                (ed[186] = e7),
                (ed[187] = Z),
                (ed[188] = ee),
                (ed[189] = el),
                (ed[190] = en),
                (ed[191] = F),
                (ed[192] = eo))
              : (eo = ed[192]),
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
                l,
                r,
                n,
                c,
                u = (0, s.c)(41),
                {
                  embedded: h,
                  mainHome: m,
                  isActive: f,
                  isVisible: v,
                  navigation: y,
                  initialHref: b,
                  initialFolderReturnLocations: x,
                  onNavigate: _,
                  tabId: S,
                } = e,
                w = void 0 !== h && h,
                I = void 0 !== m && m,
                j = void 0 === f || f,
                A = void 0 === v || v,
                T = (0, o.gh)($.GD),
                C = (0, d.useId)(),
                M = (0, o.Ul)(en.vy),
                k = (0, p.zy)(),
                O = (0, p.Zp)(),
                { libraryFileId: L } = (0, p.g)(),
                U = k.state
              u[0] !== w || u[1] !== L || u[2] !== k.pathname || u[3] !== U?.libraryPreview || u[4] !== O
                ? ((t =
                    !w && (0, ey.z_)(k.pathname) && null != L && U?.libraryPreview == null
                      ? (0, i.jsx)(G.LibraryFilePreview, {
                          libraryFileId: L,
                          onClose: () => void O("/space", { replace: !0 }),
                        })
                      : void 0),
                  (u[0] = w),
                  (u[1] = L),
                  (u[2] = k.pathname),
                  (u[3] = U?.libraryPreview),
                  (u[4] = O),
                  (u[5] = t))
                : (t = u[5])
              let F = t
              u[6] !== b || u[7] !== k.pathname || u[8] !== k.search
                ? ((a = () => b ?? k.pathname + k.search),
                  (u[6] = b),
                  (u[7] = k.pathname),
                  (u[8] = k.search),
                  (u[9] = a))
                : (a = u[9])
              let [D] = (0, d.useState)(a)
              if (w) {
                let e,
                  t,
                  a,
                  l,
                  s = M ? C : void 0
                return (
                  u[10] !== x || u[11] !== I || u[12] !== s || u[13] !== D
                    ? ((e = { embedded: !0, mainHome: I, initialHref: D, initialFolderReturnLocations: x, visitId: s }),
                      (u[10] = x),
                      (u[11] = I),
                      (u[12] = s),
                      (u[13] = D),
                      (u[14] = e))
                    : (e = u[14]),
                  u[15] !== A ? ((t = A ? (0, i.jsx)(E.n, {}) : null), (u[15] = A), (u[16] = t)) : (t = u[16]),
                  u[17] !== j || u[18] !== A || u[19] !== y || u[20] !== _ || u[21] !== T || u[22] !== S
                    ? ((a = (0, i.jsx)(ex, {
                        embedded: !0,
                        isActive: j,
                        isVisible: A,
                        navigation: y,
                        onNavigate: _,
                        tabId: S,
                        routeScope: T,
                      })),
                      (u[17] = j),
                      (u[18] = A),
                      (u[19] = y),
                      (u[20] = _),
                      (u[21] = T),
                      (u[22] = S),
                      (u[23] = a))
                    : (a = u[23]),
                  u[24] !== a || u[25] !== e || u[26] !== t
                    ? ((l = (0, i.jsx)(N.$, {
                        embedded: !0,
                        children: (0, i.jsxs)(o.Ui, { scope: P.vn, value: e, children: [t, a] }),
                      })),
                      (u[24] = a),
                      (u[25] = e),
                      (u[26] = t),
                      (u[27] = l))
                    : (l = u[27]),
                  l
                )
              }
              return (
                u[28] === Symbol.for("react.memo_cache_sentinel")
                  ? ((l = (0, i.jsx)(g.G.MainContentLayout, { layout: "custom-titlebar" })),
                    (r = (0, i.jsx)(ee.y, {})),
                    (u[28] = l),
                    (u[29] = r))
                  : ((l = u[28]), (r = u[29])),
                u[30] !== b || u[31] !== j || u[32] !== A || u[33] !== k || u[34] !== I || u[35] !== y || u[36] !== T
                  ? ((n = (e) =>
                      (0, i.jsxs)(o.Ui, {
                        scope: P.vn,
                        value: { mainHome: I, initialHref: b, routeHref: k.pathname + k.search },
                        children: [
                          A ? (0, i.jsx)(E.n, {}) : null,
                          (0, i.jsx)(ex, {
                            isActive: j,
                            isVisible: A,
                            routeScope: T,
                            navigation: y,
                            onOpenItem: (t, a) => {
                              if (null != (0, ey.rV)(t) && (0, el.D)(T, { kind: "library", libraryFileId: t.node.id }))
                                return void T.set(R.Hb, null)
                              let l = {
                                ...k,
                                state: {
                                  ...k.state,
                                  sidebarArea: "space",
                                  spaceSidebarAccountId: T.get(ea.spaceAccountId$) ?? void 0,
                                  spaceSidebarPersonal: !1,
                                },
                              }
                              e(t, a, l, (0, ey.rV)(t))
                            },
                          }),
                        ],
                      })),
                    (u[30] = b),
                    (u[31] = j),
                    (u[32] = A),
                    (u[33] = k),
                    (u[34] = I),
                    (u[35] = y),
                    (u[36] = T),
                    (u[37] = n))
                  : (n = u[37]),
                u[38] !== F || u[39] !== n
                  ? ((c = (0, i.jsxs)(i.Fragment, {
                      children: [l, r, (0, i.jsx)(N.$, { routePreview: F, children: n })],
                    })),
                    (u[38] = F),
                    (u[39] = n),
                    (u[40] = c))
                  : (c = u[40]),
                c
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
      i = a("QosV"),
      s = a("zTeN"),
      r = a("Wf1j"),
      n = a("oyxz"),
      o = a("BrP7"),
      d = a("Fmx8")
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
            h,
            g = (0, i.c)(14),
            m = (0, s.gh)(d.Qy),
            f = (0, r.A)()
          g[0] !== f
            ? ((e = f.formatMessage({
                id: "space.slides.tabs.label",
                defaultMessage: "Slide collections",
                description:
                  "Accessible label for switching between all, pinned, owned, and shared presentations on the Slides page",
              })),
              (g[0] = f),
              (g[1] = e))
            : (e = g[1])
          let v = m.value.slidesCollection ?? "all"
          return (
            g[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = {
                  key: "all",
                  name: (0, l.jsx)(n.A, {
                    id: "space.slides.tabs.all",
                    defaultMessage: "All",
                    description: "Slides tab showing owned presentations and presentations shared with the user",
                  }),
                }),
                (g[2] = t))
              : (t = g[2]),
            g[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = {
                  key: "pinned",
                  name: (0, l.jsx)(n.A, {
                    id: "space.slides.tabs.pinned",
                    defaultMessage: "Pinned",
                    description: "Slides tab showing native Slides the user has pinned",
                  }),
                }),
                (g[3] = a))
              : (a = g[3]),
            g[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = {
                  key: "owned",
                  name: (0, l.jsx)(n.A, {
                    id: "space.slides.tabs.owned",
                    defaultMessage: "Yours",
                    description: "Slides tab showing presentations owned by the user",
                  }),
                }),
                (g[4] = c))
              : (c = g[4]),
            g[5] !== m.value.slidesIncludeShared
              ? ((u = [
                  t,
                  a,
                  c,
                  ...(m.value.slidesIncludeShared
                    ? [
                        {
                          key: "shared",
                          name: (0, l.jsx)(n.A, {
                            id: "space.slides.tabs.shared",
                            defaultMessage: "Shared with you",
                            description: "Slides tab showing presentations shared with the user",
                          }),
                        },
                      ]
                    : []),
                ]),
                (g[5] = m.value.slidesIncludeShared),
                (g[6] = u))
              : (u = g[6]),
            g[7] !== m
              ? ((p = (e) => (0, d.zl)(m, (0, d.SE)({ ...m.value, slidesCollection: e, search: "" }))),
                (g[7] = m),
                (g[8] = p))
              : (p = g[8]),
            g[9] !== e || g[10] !== v || g[11] !== u || g[12] !== p
              ? ((h = (0, l.jsx)(o.t, {
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: e,
                  selectedKey: v,
                  tabs: u,
                  onSelect: p,
                })),
                (g[9] = e),
                (g[10] = v),
                (g[11] = u),
                (g[12] = p),
                (g[13] = h))
              : (h = g[13]),
            h
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
  ynMj(e, t, a) {
    var l = a("ABep"),
      i = a("QosV"),
      s = a("oyxz"),
      r = a("FrrB"),
      n = a("RNul")
    a.d(
      t,
      {},
      {
        B: function () {
          let e,
            t = (0, i.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(r.A, {
                  layout: "page",
                  title: (0, l.jsx)(s.A, {
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
            t = (0, i.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)("div", {
                  className: "flex min-h-96 items-center justify-center",
                  children: (0, l.jsx)(n.y, {}),
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
      },
    )
  },
  CYRu(e, t, a) {
    var l = a("zTeN"),
      i = a("mNPx"),
      s = a("yGJW"),
      r = a("GaA7"),
      n = a("OWtl"),
      o = a("WFY2")
    let d = (0, l.SZ)(
      n.u,
      () => null,
      ({ get: e, set: t }) => {
        let a = r.appServices?.pageCreationIntents
        if (null == a) return void t([])
        let l = !0,
          n = a.subscribe((e) => {
            l && t(e)
          })
        return (
          Promise.resolve(n).catch((a) => {
            l && ((0, i.ZD)(e(s.YV), "pages.native.creation-intents.load", a), t(null))
          }),
          () => {
            ;((l = !1), n[Symbol.dispose]())
          }
        )
      },
    )
    a.d(
      t,
      {},
      {
        J7: async function (e, t, a) {
          if (r.appServices?.pageCreationIntents == null) throw Error("native_page_creation_storage_unavailable")
          await r.appServices.pageCreationIntents.update({
            kind: t,
            accountId: e.accountId,
            userId: e.userId,
            localPageId: e.localPageId,
            updateIds: a,
          })
        },
        Oy: async function (e) {
          if (r.appServices?.pageCreationIntents == null) throw Error("native_page_creation_storage_unavailable")
          await r.appServices.pageCreationIntents.update({ kind: "save", entry: e })
        },
        Q_: d,
        Ru: async function (e, t) {
          if (r.appServices?.pageCreationIntents == null) throw Error("native_page_creation_storage_unavailable")
          await r.appServices.pageCreationIntents.update({
            kind: "progress",
            accountId: e.accountId,
            userId: e.userId,
            localPageId: e.localPageId,
            progress: t,
          })
        },
        Uv: async function (e) {
          if ("string" == typeof e.initialUpdate) return e.initialUpdate
          if (r.appServices?.pageCreationIntents?.readInitialUpdate == null)
            throw Error("native_page_creation_storage_unavailable")
          return r.appServices.pageCreationIntents.readInitialUpdate({
            accountId: e.accountId,
            userId: e.userId,
            localPageId: e.localPageId,
          })
        },
        m: async function (e) {
          try {
            if (r.appServices?.pageCreationIntents == null) return !1
            return (
              await r.appServices.pageCreationIntents.update({
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
    var l = a("QosV"),
      i = a("zTeN"),
      s = a("zd8w"),
      r = a("SPnB"),
      n = a("rpnz"),
      o = a("mNPx"),
      d = a("e1xH"),
      c = a("pyoT"),
      u = a("yGJW"),
      p = a("OWtl"),
      h = a("OMIV"),
      g = a("CYRu")
    let m = (0, i.un)(p.u, ({ get: e }) => null != e(h.M9) && !e(h.RS) && "loading" !== e(d.GU))
    a.d(
      t,
      {},
      {
        y: function () {
          let e,
            t,
            d = (0, l.c)(3),
            h = (0, i.gh)(p.u)
          return (
            d[0] !== h
              ? ((e = () => {
                  var e
                  let t, l, i
                  return (
                    (e = h),
                    (t = !0),
                    (l = new Set()),
                    (i = e.watch(({ get: i }) => {
                      let s = i(c.spaceAccountId$),
                        d = i(r.chatGptAuthenticatedUserId$),
                        p = i(g.Q_)
                      if (null == s || null == d || null == p) return
                      let h = i(n.Sq, s),
                        f = i(m),
                        v = p.filter(
                          (e) =>
                            e.accountId === s &&
                            e.userId === d &&
                            !l.has(e.localPageId) &&
                            (e.progress?.serverPageId != null || e.progress?.outcome === "rejected" || f) &&
                            !h.some((t) => t.localPageId === e.localPageId && t.native?.userId === d),
                        )
                      if (0 !== v.length) {
                        for (let e of v) l.add(e.localPageId)
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
                            if (t && e.get(c.spaceAccountId$) === s && e.get(r.chatGptAuthenticatedUserId$) === d)
                              for (let l of v) {
                                let i
                                try {
                                  i = await (0, g.Uv)(l)
                                } catch (a) {
                                  t &&
                                    e.get(c.spaceAccountId$) === s &&
                                    e.get(r.chatGptAuthenticatedUserId$) === d &&
                                    (0, o.ZD)(e.get(u.YV), "pages.native.creation.recover", a)
                                  continue
                                }
                                if (!t || e.get(c.spaceAccountId$) !== s || e.get(r.chatGptAuthenticatedUserId$) !== d)
                                  return
                                e
                                  .get(g.Q_)
                                  ?.some(
                                    (e) => e.localPageId === l.localPageId && e.accountId === s && e.userId === d,
                                  ) &&
                                  (l.progress?.serverPageId != null ||
                                    l.progress?.outcome === "rejected" ||
                                    e.get(m)) &&
                                  a(e, s, l.documentType, l.parentPageId, void 0, void 0, {
                                    ...l,
                                    initialUpdate: i,
                                  }).completion.catch(() => void 0)
                              }
                          })
                          .finally(() => {
                            for (let e of v) l.delete(e.localPageId)
                          })
                      }
                    })),
                    () => {
                      ;((t = !1), i())
                    }
                  )
                }),
                (t = [h]),
                (d[0] = h),
                (d[1] = e),
                (d[2] = t))
              : ((e = d[1]), (t = d[2])),
            (0, s.useEffect)(e, t),
            null
          )
        },
      },
    )
  },
  yjV3(e, t, a) {
    var l = a("HZfM"),
      i = a("SPnB"),
      s = a("TL6G"),
      r = a("nlNF"),
      n = a("atZq"),
      o = a("GZWF")
    function d(e, t, a) {
      if (!e.get(n.kJ) || null == e.get(i.chatGptAuthenticatedAccountId$)) return !1
      let l = (0, o.v_)(e, t)
      if (null == l) return !1
      let d = e.get(r.x2)
      return (
        s.O1.dispatchHostMessage({
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
          let { pathname: a, routeKind: i } = e.value
          return (
            "other" === i &&
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
      i = a("SPnB"),
      s = a("nlNF"),
      r = a("atZq"),
      n = a("GZWF")
    a.d(
      t,
      {},
      {
        D: function (e, t) {
          if (!e.get(r.kJ) || null == e.get(i.chatGptAuthenticatedAccountId$)) return !1
          let a = (0, n.v_)(e, t)
          if (null == a) return !1
          let o = e.get(s.x2)
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
  AOG7(e, t, a) {
    var l = a("QosV"),
      i = a("T0Rc"),
      s = a("EOo5"),
      r = a("rvFo"),
      n = a("HFSu"),
      o = a("GEsy"),
      d = a("eShZ")
    async function c(e, t, a, { includeProfilePhotos: l = !1, includeTotal: i, limit: s = 10 } = {}) {
      return (
        await n.CodexRequest.safeGet("/accounts/{account_id}/users", {
          parameters: {
            path: { account_id: e },
            query: { limit: s, offset: 0, query: t, include_profile_photos: l, include_total: i },
          },
          signal: a,
        })
      ).items
    }
    a.d(
      t,
      {},
      {
        AB: c,
        C4: async function (e, t, a) {
          let l = t.trim().toLowerCase(),
            i = await c(e, l, a)
          return i.find((e) => e.email?.trim().toLowerCase() === l)?.account_user_id
        },
        Nc: function (e, t) {
          let a,
            d,
            c,
            u,
            p,
            h,
            g = (0, l.c)(18)
          g[0] !== t ? ((a = void 0 === t ? {} : t), (g[0] = t), (g[1] = a)) : (a = g[1])
          let { includeMemberCounts: m } = a,
            f = void 0 !== m && m,
            { accountId: v, authMethod: y } = (0, s.As)()
          g[2] !== e ? ((d = e.trim()), (g[2] = e), (g[3] = d)) : (d = g[3])
          let b = d,
            x = (0, o.o)(b, 150)
          ;(g[4] !== f ? ((c = f ? ["member-counts"] : []), (g[4] = f), (g[5] = c)) : (c = g[5]),
            g[6] !== v || g[7] !== b || g[8] !== c
              ? ((u = ["workspace-groups", v, b, ...c]), (g[6] = v), (g[7] = b), (g[8] = c), (g[9] = u))
              : (u = g[9]))
          let _ = ("chatgpt" === y || "chatgptAuthTokens" === y) && null != v && b.length > 0 && b === x
          return (
            g[10] !== v || g[11] !== f || g[12] !== b
              ? ((p = async (e) => {
                  let { signal: t } = e
                  if (null == v) throw Error("account id is required")
                  return (
                    await n.CodexRequest.safeGet("/accounts/{account_id}/groups", {
                      parameters: {
                        path: { account_id: v },
                        query: { limit: 10, offset: 0, query: b, include_member_counts: f, include_total: !1 },
                      },
                      signal: AbortSignal.any([t, AbortSignal.timeout(15e3)]),
                    })
                  ).items
                }),
                (g[10] = v),
                (g[11] = f),
                (g[12] = b),
                (g[13] = p))
              : (p = g[13]),
            g[14] !== u || g[15] !== _ || g[16] !== p
              ? ((h = {
                  queryKey: u,
                  enabled: _,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: r.D.ONE_MINUTE,
                }),
                (g[14] = u),
                (g[15] = _),
                (g[16] = p),
                (g[17] = h))
              : (h = g[17]),
            (0, i.I)(h)
          )
        },
        Nv: function (e, t) {
          let a,
            n,
            d,
            u,
            p,
            h,
            g = (0, l.c)(18)
          g[0] !== t ? ((a = void 0 === t ? {} : t), (g[0] = t), (g[1] = a)) : (a = g[1])
          let { includeProfilePhotos: m } = a,
            f = void 0 !== m && m,
            { accountId: v, authMethod: y } = (0, s.As)()
          g[2] !== e ? ((n = e.trim()), (g[2] = e), (g[3] = n)) : (n = g[3])
          let b = n,
            x = (0, o.o)(b, 150)
          ;(g[4] !== f ? ((d = f ? ["profile-photos"] : []), (g[4] = f), (g[5] = d)) : (d = g[5]),
            g[6] !== v || g[7] !== b || g[8] !== d
              ? ((u = ["workspace-users", v, b, ...d]), (g[6] = v), (g[7] = b), (g[8] = d), (g[9] = u))
              : (u = g[9]))
          let _ = ("chatgpt" === y || "chatgptAuthTokens" === y) && null != v && b.length > 0 && b === x
          return (
            g[10] !== v || g[11] !== f || g[12] !== b
              ? ((p = async (e) => {
                  let { signal: t } = e
                  if (null == v) throw Error("account id is required")
                  return c(v, b, AbortSignal.any([t, AbortSignal.timeout(15e3)]), { includeProfilePhotos: f })
                }),
                (g[10] = v),
                (g[11] = f),
                (g[12] = b),
                (g[13] = p))
              : (p = g[13]),
            g[14] !== u || g[15] !== _ || g[16] !== p
              ? ((h = {
                  queryKey: u,
                  enabled: _,
                  networkMode: "always",
                  refetchOnReconnect: !0,
                  retry: !1,
                  queryFn: p,
                  staleTime: r.D.ONE_MINUTE,
                }),
                (g[14] = u),
                (g[15] = _),
                (g[16] = p),
                (g[17] = h))
              : (h = g[17]),
            (0, i.I)(h)
          )
        },
        We: async function (e, t, a) {
          try {
            return (
              await n.CodexRequest.safeGet("/spaces/people", {
                parameters: { query: { account_id: e, query: t, limit: 10, offset: 0 } },
                signal: a,
              })
            ).items
          } catch (e) {
            if (!(e instanceof d.fk && 404 === e.status)) throw e
          }
          return c(e, t, a)
        },
      },
    )
  },
}
//# sourceMappingURL=101313.c9b3ce267b.js.map
