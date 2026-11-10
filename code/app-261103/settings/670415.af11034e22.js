export const __rspack_esm_ids = [670415]
export const __webpack_modules__ = {
  E2yB(e, t, a) {
    let n =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
    function s(e, t) {
      return (
        t?.allowExternal === !0 ||
        (t?.allowExternal === !1 && t.verifiedDomains?.some((t) => t.toLowerCase() === e.toLowerCase()) === !0)
      )
    }
    a.d(
      t,
      {},
      {
        H8: function (e, t) {
          let a = e?.trim() ?? "",
            s = a.length > 0 && n.test(a)
          return { checkoutEmail: a, hasCheckoutEmail: s, defaultEmail: s ? "" : (t ?? "") }
        },
        Ub: s,
        WL: n,
        ob: function (e, t, a) {
          if (!e || !n.test(e) || !t || !["professional", "education", "government", "unknown"].includes(t)) return
          let i = e.slice(e.lastIndexOf("@") + 1).toLowerCase()
          return s(i, a) ? i : void 0
        },
      },
    )
  },
  r6FN(e, t, a) {
    var n,
      s,
      i,
      r,
      o =
        (((n = {}).CHATGPT_LOCATION_AUTHORIZATION_STATUS_UNSPECIFIED =
          "CHATGPT_LOCATION_AUTHORIZATION_STATUS_UNSPECIFIED"),
        (n.CHATGPT_LOCATION_AUTHORIZATION_STATUS_NOT_DETERMINED =
          "CHATGPT_LOCATION_AUTHORIZATION_STATUS_NOT_DETERMINED"),
        (n.CHATGPT_LOCATION_AUTHORIZATION_STATUS_RESTRICTED = "CHATGPT_LOCATION_AUTHORIZATION_STATUS_RESTRICTED"),
        (n.CHATGPT_LOCATION_AUTHORIZATION_STATUS_DENIED = "CHATGPT_LOCATION_AUTHORIZATION_STATUS_DENIED"),
        (n.CHATGPT_LOCATION_AUTHORIZATION_STATUS_AUTHORIZED_WHEN_IN_USE =
          "CHATGPT_LOCATION_AUTHORIZATION_STATUS_AUTHORIZED_WHEN_IN_USE"),
        (n.CHATGPT_LOCATION_AUTHORIZATION_STATUS_UNKNOWN = "CHATGPT_LOCATION_AUTHORIZATION_STATUS_UNKNOWN"),
        (n.UNRECOGNIZED = "UNRECOGNIZED"),
        n),
      l =
        (((s = {}).CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_UNSPECIFIED =
          "CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_UNSPECIFIED"),
        (s.CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_FULL_ACCURACY =
          "CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_FULL_ACCURACY"),
        (s.CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_REDUCED_ACCURACY =
          "CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_REDUCED_ACCURACY"),
        (s.CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_UNKNOWN = "CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_UNKNOWN"),
        (s.UNRECOGNIZED = "UNRECOGNIZED"),
        s),
      c =
        (((i = {}).CHATGPT_PRECISE_LOCATION_ENTRY_POINT_UNSPECIFIED =
          "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_UNSPECIFIED"),
        (i.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_BANNER = "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_BANNER"),
        (i.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_MESSAGE_FOOTER = "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_MESSAGE_FOOTER"),
        (i.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_SETTINGS = "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_SETTINGS"),
        (i.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_ASK_USER_LOCATION_WIDGET =
          "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_ASK_USER_LOCATION_WIDGET"),
        (i.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_WEATHER_WIDGET = "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_WEATHER_WIDGET"),
        (i.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_FULLSCREEN_MAP = "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_FULLSCREEN_MAP"),
        (i.UNRECOGNIZED = "UNRECOGNIZED"),
        i),
      d =
        (((r = {}).CHATGPT_LOCATION_PERMISSION_INTERACTION_UNSPECIFIED =
          "CHATGPT_LOCATION_PERMISSION_INTERACTION_UNSPECIFIED"),
        (r.CHATGPT_LOCATION_PERMISSION_INTERACTION_STATUS_ROW = "CHATGPT_LOCATION_PERMISSION_INTERACTION_STATUS_ROW"),
        (r.CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON =
          "CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON"),
        (r.UNRECOGNIZED = "UNRECOGNIZED"),
        r)
    a.d(
      t,
      {},
      {
        A1: c,
        MB: d,
        Mu: { $type: "protobuf_analytics_events.v1.ChatgptLocationBannerShown" },
        Uj: { $type: "protobuf_analytics_events.v1.ChatgptPreciseLocationLocationSharingRequest" },
        YZ: { $type: "protobuf_analytics_events.v1.ChatgptLocationPermissionDeniedAlertDismissed" },
        _j: { $type: "protobuf_analytics_events.v1.ChatgptPreciseLocationLocationSharingFailed" },
        eq: { $type: "protobuf_analytics_events.v1.ChatgptLocationPermissionDeniedAlertShown" },
        iH: o,
        jQ: { $type: "protobuf_analytics_events.v1.ChatgptLocationFooterCTAShown" },
        nB: { $type: "protobuf_analytics_events.v1.ChatgptPreciseLocationLastTurnRegenerated" },
        oI: { $type: "protobuf_analytics_events.v1.ChatgptPreciseLocationLocationSharingSuccess" },
        xD: l,
      },
    )
  },
  i1S8(e, t, a) {
    var n = a("ASxG"),
      s = a("hZax")
    let i = n.record(n.string(), n.unknown()),
      r = "1648954249"
    a.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            a = (0, s.XM)(e, r),
            o = a.get("suppress_ads", !1)
          if (!o || a.details.reason.startsWith("LocalOverride") || null == a.details.receivedAt) return o
          let l = e.dataAdapter.getDataSync(e.getContextHandle().user)
          if (null == l || l.receivedAt !== a.details.receivedAt) return o
          try {
            JSON.parse(l.data, (e, a) => {
              if ("" !== e) return a
              let s = i.safeParse(a)
              if (!s.success) return a
              let o = i.safeParse(s.data.layer_configs)
              if (!o.success) return a
              let l = i.safeParse(
                o.data[r] ??
                  o.data[
                    (function (e) {
                      let t = 0
                      for (let a = 0; a < e.length; a += 1) ((t = (t << 5) - t + e.charCodeAt(a)), (t &= t))
                      return String(t >>> 0)
                    })(r)
                  ],
              )
              if (!l.success) return a
              let c = i.safeParse(s.data.values),
                d = l.data.v,
                u =
                  "init-v2" === s.data.response_format && ("number" == typeof d || "string" == typeof d) && c.success
                    ? c.data[String(d)]
                    : l.data.value,
                h = n.object({ suppress_ads: n.boolean() }).safeParse(u)
              return (h.success && (t = h.data.suppress_ads), {})
            })
          } catch {
            return o
          }
          return !1 !== t && o
        },
      },
    )
  },
  VMa7(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("oyxz"),
      r = a("JNtf"),
      o = a("mUDD")
    a.d(
      t,
      {},
      {
        ChatGptLocationPermissionDeniedDialog: function (e) {
          let t,
            a,
            l,
            c,
            d = (0, s.c)(6),
            { onClose: u } = e
          return (
            d[0] !== u
              ? ((t = (e) => {
                  e || u()
                }),
                (d[0] = u),
                (d[1] = t))
              : (t = d[1]),
            d[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)(r.L3, {
                  children: (0, n.jsx)(i.A, {
                    id: "chatgptConversations.preciseLocation.permissionDenied.title",
                    defaultMessage: "Turn on location access",
                    description:
                      "Title of a dialog shown after ChatGPT cannot get precise location because browser permission was already blocked. It asks the user to enable this site's Location permission in their browser. Keep this headline concise.",
                  }),
                })),
                (d[2] = a))
              : (a = d[2]),
            d[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = (0, n.jsx)(o.R4, {
                  children: (0, n.jsx)(o.OO, {
                    children: (0, n.jsx)(o.c7, {
                      className: "select-none",
                      title: a,
                      subtitle: (0, n.jsx)(r.rr, {
                        children: (0, n.jsx)(i.A, {
                          id: "chatgptConversations.preciseLocation.permissionDenied.description",
                          defaultMessage:
                            "Open your browser's site settings from the icon beside the address bar and set Location to Allow. Also allow location access for your browser or app in your device's privacy settings, then refresh the page.",
                          description:
                            "Instructions after location permission was blocked. Both the site's browser permission and the browser or app's device-level location permission must be allowed. This is plain text with no interactive link or placeholders.",
                        }),
                      }),
                    }),
                  }),
                })),
                (d[3] = l))
              : (l = d[3]),
            d[4] !== t
              ? ((c = (0, n.jsx)(r.lG, { open: !0, size: "compact", onOpenChange: t, children: l })),
                (d[4] = t),
                (d[5] = c))
              : (c = d[5]),
            c
          )
        },
      },
    )
  },
  OX9U(e, t, a) {
    var n = a("zTeN"),
      s = a("IdsJ"),
      i = a("OWtl")
    let r = (0, n.SZ)(
      i.u,
      () => void 0,
      ({ set: e }) => (0, s.Lk)(e),
    )
    a.d(t, {}, { d: r })
  },
  SZLI(e, t, a) {
    var n = a("r6FN"),
      s = a("SPnB"),
      i = a("X6Vn"),
      r = a("SGsN"),
      o = a("IdsJ"),
      l = a("g8Tk"),
      c = a("svjy"),
      d = a("yGJW"),
      u = a("OMIV"),
      h = a("g2p6"),
      p = a("ITxD")
    a.d(
      t,
      {},
      {
        Z: async function (e, t, g = "CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON") {
          let m
          ;(0, d.yy)(e, n.Uj, { entryPoint: t, interaction: g })
          let f = (0, o.ff)(),
            x = e.get(h.Sk),
            y = e.get(s.chatGptAuthenticatedUserId$),
            b = e.get(s.o8),
            _ = e.get(s.PO),
            v =
              (null == _.authMethod ||
                (!_.authLoading && (await e.query.fetch(h.s6).catch(() => null))?.preciseLocationAllowed === !0)) &&
              e.get(p.d).enabled
          if ((0, o.ff)() !== f) return !1
          v || (0, o.q0)()
          let C = v
              ? await navigator.permissions
                  ?.query({ name: "geolocation" })
                  .then((e) => e.state)
                  .catch(() => null)
              : null,
            A =
              v &&
              (await (0, l.U)(
                () =>
                  (0, o.ff)() === f &&
                  e.get(h.Sk) === x &&
                  e.get(s.chatGptAuthenticatedUserId$) === y &&
                  e.get(s.o8) === b &&
                  e.get(p.d).enabled,
                !0,
                (e) => {
                  m = e
                },
              ))
          return (
            await (async function (e, t, s, o, l, h) {
              if (t) {
                ;((0, d.yy)(e, n.oI, {
                  entryPoint: s,
                  interaction: l,
                  authorizationStatus: "CHATGPT_LOCATION_AUTHORIZATION_STATUS_AUTHORIZED_WHEN_IN_USE",
                  accuracyAuthorization: "CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_FULL_ACCURACY",
                }),
                  e
                    .get(r.Id)
                    .success(
                      e
                        .get(c.g)
                        .formatMessage({
                          id: "chatgptConversations.preciseLocation.enabled",
                          defaultMessage: "Precise location sharing enabled",
                          description: "Confirmation after ChatGPT receives the location requested by the user",
                        }),
                    ))
                return
              }
              if (
                ((0, d.yy)(e, n._j, { entryPoint: s, interaction: l }),
                "denied" === o &&
                  ((0, u.ie)(e, "392607222") ||
                    e.get(u.M9)?.getLayer("4107938382").get("enable_location_sharing_failed_modal", !1)))
              ) {
                let { ChatGptLocationPermissionDeniedDialog: t } = await a.e(831203).then(a.bind(a, "VMa7"))
                ;(0, i.qf)(e, t)
                return
              }
              ;(0, d.yy)(e, n.eq, { entryPoint: s })
              let p = e
                .get(c.g)
                .formatMessage({
                  id: "chatgptConversations.preciseLocation.notEnabled",
                  defaultMessage: "Location not enabled",
                  description: "Feedback when ChatGPT cannot get the location requested by the user",
                })
              ;(2 === h
                ? (p = e
                    .get(c.g)
                    .formatMessage({
                      id: "chatgptConversations.preciseLocation.positionUnavailable",
                      defaultMessage:
                        "Your device couldn't determine your location. Check your device's location settings and try again.",
                      description:
                        "Location failure notification when the browser cannot obtain coordinates, which can happen even when permission is allowed",
                    }))
                : 3 === h &&
                  (p = e
                    .get(c.g)
                    .formatMessage({
                      id: "chatgptConversations.preciseLocation.positionTimeout",
                      defaultMessage: "Getting your location timed out. Try again.",
                      description:
                        "Location failure notification when the browser did not obtain coordinates before the request deadline; this does not mean permission was denied",
                    })),
                e.get(r.Id).info(p, {
                  primaryAction:
                    "denied" === o || 1 === h
                      ? {
                          label: e
                            .get(c.g)
                            .formatMessage({
                              id: "chatgptConversations.preciseLocation.howToEnable",
                              defaultMessage: "How to enable",
                              description:
                                "Action on the location failure notification that opens instructions for changing the browser's location permission",
                            }),
                          onClick: async () => {
                            let { ChatGptLocationPermissionDeniedDialog: t } = await a.e(831203).then(a.bind(a, "VMa7"))
                            ;(0, i.qf)(e, t)
                          },
                        }
                      : void 0,
                  onRemove: () => {
                    ;(0, d.yy)(e, n.YZ, { entryPoint: s })
                  },
                }))
            })(e, A, t, C, g, m),
            A
          )
        },
      },
    )
  },
  GK7D(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("on57")
    a.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            a,
            r,
            o,
            l,
            c,
            d,
            u,
            h,
            p,
            g = (0, s.c)(30),
            { actions: m, asset: f, subtitle: x, subtitleClassName: y, title: b, variant: _ } = e,
            v = void 0 === _ ? "default" : _
          g[0] !== f
            ? ((t = null == f ? null : (0, n.jsx)("div", { className: "flex", children: f })), (g[0] = f), (g[1] = t))
            : (t = g[1])
          let C = "page" === v ? "flex-nowrap" : "flex-wrap"
          g[2] !== C
            ? ((a = (0, i.A)("flex min-w-0 items-start justify-between gap-4", C)), (g[2] = C), (g[3] = a))
            : (a = g[3])
          let A = "settingsCompact" === v ? "gap-1.25" : "gap-1.5"
          g[4] !== A ? ((r = (0, i.A)("flex min-w-0 flex-1 basis-64 flex-col", A)), (g[4] = A), (g[5] = r)) : (r = g[5])
          let T = "settings" === v && "heading-lg font-normal",
            w = "settingsCompact" === v && "heading-lg font-semibold leading-7",
            k = "page" === v && "heading-lg electron:heading-xl",
            j = "default" === v && "heading-base electron:heading-lg"
          return (
            g[6] !== j || g[7] !== T || g[8] !== w || g[9] !== k
              ? ((o = (0, i.A)("min-w-0 break-words text-default", T, w, k, j)),
                (g[6] = j),
                (g[7] = T),
                (g[8] = w),
                (g[9] = k),
                (g[10] = o))
              : (o = g[10]),
            g[11] !== o || g[12] !== b
              ? ((l = (0, n.jsx)("h1", { className: o, children: b })), (g[11] = o), (g[12] = b), (g[13] = l))
              : (l = g[13]),
            g[14] !== x || g[15] !== y
              ? ((c =
                  null == x
                    ? null
                    : (0, n.jsx)("div", { className: (0, i.A)("text-base text-secondary", y), children: x })),
                (g[14] = x),
                (g[15] = y),
                (g[16] = c))
              : (c = g[16]),
            g[17] !== l || g[18] !== c || g[19] !== r
              ? ((d = (0, n.jsxs)("div", { className: r, children: [l, c] })),
                (g[17] = l),
                (g[18] = c),
                (g[19] = r),
                (g[20] = d))
              : (d = g[20]),
            g[21] !== m
              ? ((u =
                  null == m
                    ? null
                    : (0, n.jsx)("div", { className: "flex max-w-full shrink-0 items-center gap-2", children: m })),
                (g[21] = m),
                (g[22] = u))
              : (u = g[22]),
            g[23] !== d || g[24] !== u || g[25] !== a
              ? ((h = (0, n.jsxs)("div", { className: a, children: [d, u] })),
                (g[23] = d),
                (g[24] = u),
                (g[25] = a),
                (g[26] = h))
              : (h = g[26]),
            g[27] !== h || g[28] !== t
              ? ((p = (0, n.jsxs)("header", {
                  className: "flex flex-col gap-4 px-[var(--detail-page-inline-inset,0px)]",
                  children: [t, h],
                })),
                (g[27] = h),
                (g[28] = t),
                (g[29] = p))
              : (p = g[29]),
            p
          )
        },
      },
    )
  },
  jxU8(e, t, a) {
    a.d(t, { P: () => m, Y: () => f })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("on57"),
      r = a("zd8w"),
      o = a("bJfu"),
      l = a("qbQ6"),
      c = a("GK7D"),
      d = a("PkPj"),
      u = a("DiyT"),
      h = a("ibLK"),
      p = a("V8uZ"),
      g = a("oFmV")
    function m(e) {
      let t,
        a,
        m,
        f,
        x,
        y,
        b,
        _,
        v,
        C,
        A,
        T,
        w,
        k,
        j,
        G,
        N,
        I,
        P,
        S,
        O,
        E,
        L,
        M,
        R,
        D,
        U,
        q,
        H,
        z,
        B,
        F,
        W,
        $,
        Z,
        Y,
        K,
        V,
        Q,
        J,
        X,
        ee,
        et,
        ea,
        en = (0, s.c)(120)
      en[0] !== e
        ? (({
            title: I,
            asset: a,
            backSlot: m,
            subtitle: w,
            children: f,
            fullWidth: j,
            contentClassName: y,
            subtitleClassName: k,
            action: t,
            toolbarActions: P,
            stickyControls: T,
            footer: _,
            embedded: G,
            density: b,
            scrollResetKey: A,
            containTouchOverscroll: N,
            ref: v,
            className: x,
            ...C
          } = e),
          (en[0] = e),
          (en[1] = t),
          (en[2] = a),
          (en[3] = m),
          (en[4] = f),
          (en[5] = x),
          (en[6] = y),
          (en[7] = b),
          (en[8] = _),
          (en[9] = v),
          (en[10] = C),
          (en[11] = A),
          (en[12] = T),
          (en[13] = w),
          (en[14] = k),
          (en[15] = j),
          (en[16] = G),
          (en[17] = N),
          (en[18] = I),
          (en[19] = P))
        : ((t = en[1]),
          (a = en[2]),
          (m = en[3]),
          (f = en[4]),
          (x = en[5]),
          (y = en[6]),
          (b = en[7]),
          (_ = en[8]),
          (v = en[9]),
          (C = en[10]),
          (A = en[11]),
          (T = en[12]),
          (w = en[13]),
          (k = en[14]),
          (j = en[15]),
          (G = en[16]),
          (N = en[17]),
          (I = en[18]),
          (P = en[19]))
      let es = void 0 !== j && j,
        ei = void 0 !== G && G,
        er = void 0 !== N && N,
        eo = b ?? "default",
        el = (0, r.useRef)(null),
        ec = (0, r.useRef)(null),
        ed = er && !ei && !1
      ;((et = (0, s.c)(4)),
        (ea = (0, h.U)(ed ? "(pointer: coarse)" : null)),
        et[0] !== ea || et[1] !== ec
          ? ((X = () => {
              let e = ec.current
              if (!ea || null == e) return
              let t = e.ownerDocument.documentElement
              t.dataset.containTouchOverscroll = String(Number(t.dataset.containTouchOverscroll ?? 0) + 1)
              let a = e.closest("[data-app-shell-frame]") ?? e,
                n = e.closest("[data-app-shell-main-surface]"),
                s = null,
                i = 0,
                r = () => {
                  s = null
                },
                o = (t) => {
                  let a = t.touches[0]
                  if (1 !== t.touches.length || null == a) return void r()
                  let o = t.composedPath().includes(e),
                    l = t.target,
                    c =
                      l instanceof Element &&
                      ((l.contains(e) && n?.contains(l)) || null != l.closest("[data-app-shell-main-titlebar]"))
                  o || c ? ((s = { x: a.clientX, y: a.clientY, inPanel: o }), (i = a.clientY)) : r()
                },
                l = (t) => {
                  let n = t.touches[0]
                  if (1 !== t.touches.length || null == n || null == s) return void r()
                  let o = n.clientY > i
                  if (
                    ((i = n.clientY),
                    !(!t.cancelable || !o || n.clientY - s.y <= Math.abs(n.clientX - s.x)) &&
                      (!s.inPanel || (!(e.scrollTop > 0) && !(e.scrollHeight <= e.clientHeight))))
                  ) {
                    for (let n of t.composedPath()) {
                      if (n === e || n === a) break
                      if (
                        n instanceof HTMLElement &&
                        n.scrollTop > 0 &&
                        /^(auto|scroll)$/.test(getComputedStyle(n).overflowY)
                      )
                        return
                    }
                    t.preventDefault()
                  }
                },
                c = { capture: !0, passive: !0 }
              return (
                a.addEventListener("touchstart", o, c),
                a.addEventListener("touchmove", l, { capture: !0, passive: !1 }),
                a.addEventListener("touchend", r, c),
                a.addEventListener("touchcancel", r, c),
                () => {
                  let e = Number(t.dataset.containTouchOverscroll) - 1
                  ;(e > 0 ? (t.dataset.containTouchOverscroll = String(e)) : delete t.dataset.containTouchOverscroll,
                    a.removeEventListener("touchstart", o, !0),
                    a.removeEventListener("touchmove", l, !0),
                    a.removeEventListener("touchend", r, !0),
                    a.removeEventListener("touchcancel", r, !0))
                }
              )
            }),
            (ee = [ea, ec]),
            (et[0] = ea),
            (et[1] = ec),
            (et[2] = X),
            (et[3] = ee))
          : ((X = et[2]), (ee = et[3])),
        (0, r.useEffect)(X, ee))
      let [eu, eh] = (0, r.useState)(!1),
        ep = (0, r.useContext)(g.S),
        eg = !!ep?.slateLayout && !ei
      ;(0, h.U)(l.mk)
      let em = eg && !1,
        ef = ep?.targetId ?? null,
        ex = ep?.targetText ?? null,
        ey = ep?.navigationKey ?? null
      ;(en[20] !== A
        ? ((S = () => {
            null != A && null != ec.current && (ec.current.scrollTop = 0)
          }),
          (O = [A]),
          (en[20] = A),
          (en[21] = S),
          (en[22] = O))
        : ((S = en[21]), (O = en[22])),
        (0, r.useLayoutEffect)(S, O),
        en[23] !== ef || en[24] !== ex
          ? ((E = () => {
              let e, t
              if (null == ef && null == ex) return
              let a = el.current
              if (null == a) return
              let n = () => {
                  if (null == ex) return null == ef ? null : document.getElementById(ef)
                  let e = ex.trim().toLocaleLowerCase(),
                    t = e.split(/\s+/u),
                    n = null
                  for (let s of a.querySelectorAll("*")) {
                    let a = (s.getAttribute("placeholder") ?? s.textContent)?.trim().toLocaleLowerCase()
                    if (
                      null == a ||
                      !t.every((e) => a.includes(e)) ||
                      null != s.closest('[hidden], [aria-hidden="true"]')
                    )
                      continue
                    let i = a.includes(e)
                    ;(null == n || (i && !n.isContiguous) || (i === n.isContiguous && a.length <= n.text.length)) &&
                      (n = { element: s, isContiguous: i, text: a })
                  }
                  return n?.element ?? null
                },
                s = (t) => {
                  if ((t.scrollIntoView?.({ block: "center" }), null == ex)) return
                  let n = "true" === document.documentElement.dataset.reducedMotion,
                    s = t.closest("button"),
                    i = s?.parentElement ?? t
                  if (null == s) {
                    let e = t.closest("section")
                    for (let n = t.parentElement; null != n && n !== e && n !== a; n = n.parentElement)
                      if (
                        Array.from(n.children).some(
                          (e) =>
                            !e.contains(t) &&
                            (e.matches(
                              'button, input, select, textarea, [role="switch"], [role="checkbox"], [role="combobox"]',
                            ) ||
                              null !=
                                e.querySelector(
                                  'button, input, select, textarea, [role="switch"], [role="checkbox"], [role="combobox"]',
                                )),
                        )
                      ) {
                        i = n
                        break
                      }
                  }
                  e = i.animate?.(
                    n
                      ? [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                        ]
                      : [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)", offset: 0.35 },
                          { backgroundColor: "transparent" },
                        ],
                    { duration: 450, easing: `cubic-bezier(${p.Wu.join(", ")})` },
                  )
                },
                i =
                  null == ex
                    ? new ResizeObserver(() => {
                        let e = n()
                        null != e && s(e)
                      })
                    : null,
                r = () => {
                  for (let e of (t?.disconnect(), i?.disconnect(), ["wheel", "pointerdown", "keydown"]))
                    a.ownerDocument.removeEventListener(e, r)
                }
              if (null != i)
                for (let e of (i.observe(a), ["wheel", "pointerdown", "keydown"]))
                  a.ownerDocument.addEventListener(e, r, { passive: !0 })
              let o = n()
              return (
                null != o
                  ? s(o)
                  : (t = new MutationObserver(() => {
                      let e = n()
                      null != e && (s(e), t?.disconnect())
                    })).observe(null == ex ? document.body : a, { childList: !0, subtree: !0 }),
                () => {
                  ;(r(), e?.cancel())
                }
              )
            }),
            (en[23] = ef),
            (en[24] = ex),
            (en[25] = E))
          : (E = en[25]),
        en[26] !== ey || en[27] !== ef || en[28] !== ex
          ? ((L = [ey, ef, ex]), (en[26] = ey), (en[27] = ef), (en[28] = ex), (en[29] = L))
          : (L = en[29]),
        (0, r.useLayoutEffect)(E, L),
        en[30] !== P
          ? ((M =
              null == P
                ? null
                : (0, n.jsx)("div", {
                    className: "ms-auto flex min-w-0 items-center justify-end gap-2 no-drag",
                    children: P,
                  })),
            (en[30] = P),
            (en[31] = M))
          : (M = en[31]),
        en[32] !== m || en[33] !== M
          ? ((R = (0, n.jsxs)(n.Fragment, { children: [m, M] })), (en[32] = m), (en[33] = M), (en[34] = R))
          : (R = en[34]))
      let eb = R,
        e_ = ei ? "default" : "settings"
      "compact" === eo && (e_ = "settingsCompact")
      let ev = "compact" === b && "[--settings-section-gap:--spacing(5.5)]",
        eC =
          "default" === b &&
          (ei && !es ? "[--settings-section-gap:var(--padding-panel)]" : "[--settings-section-gap:--spacing(10)]"),
        eA = es ? null : ei ? "max-w-2xl" : "max-w-3xl electron:min-w-[min(100%,calc(320px*var(--codex-window-zoom)))]"
      ;(en[35] !== y || en[36] !== T || en[37] !== ev || en[38] !== eC || en[39] !== eA || en[40] !== eg
        ? ((D = (0, i.A)(
            "group/settings mx-auto flex w-full flex-col",
            ev,
            eC,
            eA,
            eg && ["px-panel pb-panel", null == T && "pt-panel"],
            y,
          )),
          (en[35] = y),
          (en[36] = T),
          (en[37] = ev),
          (en[38] = eC),
          (en[39] = eA),
          (en[40] = eg),
          (en[41] = D))
        : (D = en[41]),
        en[42] !== t ||
        en[43] !== a ||
        en[44] !== eo ||
        en[45] !== ei ||
        en[46] !== e_ ||
        en[47] !== w ||
        en[48] !== k ||
        en[49] !== I ||
        en[50] !== eg
          ? ((U =
              null == I || eg
                ? null
                : (0, n.jsx)("div", {
                    className: (0, i.A)("compact" === eo && "pb-5.5", "default" === eo && (ei ? "pb-panel" : "pb-8")),
                    children: (0, n.jsx)(c.z, {
                      actions: t,
                      asset: a,
                      subtitle: w,
                      subtitleClassName: (0, i.A)("text-balance", k),
                      title: I,
                      variant: e_,
                    }),
                  })),
            (en[42] = t),
            (en[43] = a),
            (en[44] = eo),
            (en[45] = ei),
            (en[46] = e_),
            (en[47] = w),
            (en[48] = k),
            (en[49] = I),
            (en[50] = eg),
            (en[51] = U))
          : (U = en[51]),
        en[52] !== T
          ? ((q = null == T ? null : (0, n.jsx)(d.J1, { className: "top-0 pt-panel pb-2", children: T })),
            (en[52] = T),
            (en[53] = q))
          : (q = en[53]))
      let eT =
          ei && !es
            ? "gap-[var(--settings-section-gap,var(--padding-panel))]"
            : "gap-[var(--settings-section-gap,--spacing(10))]",
        ew = null != T && "pt-5"
      ;(en[54] !== eT || en[55] !== ew
        ? ((H = (0, i.A)("flex flex-col", eT, ew)), (en[54] = eT), (en[55] = ew), (en[56] = H))
        : (H = en[56]),
        en[57] !== f || en[58] !== H
          ? ((z = (0, n.jsx)("div", { className: H, children: f })), (en[57] = f), (en[58] = H), (en[59] = z))
          : (z = en[59]),
        en[60] !== eo || en[61] !== D || en[62] !== U || en[63] !== q || en[64] !== z
          ? ((B = (0, n.jsxs)("div", { ref: el, className: D, "data-density": eo, children: [U, q, z] })),
            (en[60] = eo),
            (en[61] = D),
            (en[62] = U),
            (en[63] = q),
            (en[64] = z),
            (en[65] = B))
          : (B = en[65]))
      let ek = B
      if (ei) {
        let e, t, a
        return (
          en[66] !== x ? ((e = (0, i.A)("flex min-h-0 flex-col", x)), (en[66] = x), (en[67] = e)) : (e = en[67]),
          en[68] !== m || en[69] !== eb || en[70] !== P
            ? ((t =
                null != m || null != P
                  ? (0, n.jsx)("div", { className: "flex items-center pb-panel", children: eb })
                  : null),
              (en[68] = m),
              (en[69] = eb),
              (en[70] = P),
              (en[71] = t))
            : (t = en[71]),
          en[72] !== ek || en[73] !== v || en[74] !== C || en[75] !== e || en[76] !== t
            ? ((a = (0, n.jsxs)("div", { ref: v, className: e, ...C, children: [t, ek] })),
              (en[72] = ek),
              (en[73] = v),
              (en[74] = C),
              (en[75] = e),
              (en[76] = t),
              (en[77] = a))
            : (a = en[77]),
          a
        )
      }
      ;(en[78] !== x
        ? ((F = (0, i.A)(
            "flex h-full min-h-0 flex-col electron:overflow-hidden electron:bg-surface windows:rounded-tl-lg",
            x,
          )),
          (en[78] = x),
          (en[79] = F))
        : (F = en[79]),
        en[80] !== I || en[81] !== em
          ? ((W = em
              ? (0, n.jsx)(o.G.Header, {
                  divider: !1,
                  children: (0, n.jsx)(o.G.HeaderToolbar, {
                    children: (0, n.jsx)("h1", {
                      className: "min-w-0 truncate text-lg font-medium text-default select-none",
                      children: I,
                    }),
                  }),
                })
              : null),
            (en[80] = I),
            (en[81] = em),
            (en[82] = W))
          : (W = en[82]),
        en[83] !== m || en[84] !== eb || en[85] !== P || en[86] !== eg
          ? (($ =
              eg && null == m && null == P
                ? null
                : (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("div", {
                      className: "flex items-center px-panel draggable electron:h-toolbar extension:h-toolbar-sm",
                      children: eb,
                    }),
                  })),
            (en[83] = m),
            (en[84] = eb),
            (en[85] = P),
            (en[86] = eg),
            (en[87] = $))
          : ($ = en[87]))
      let ej = ed || void 0,
        eG = em ? eu : void 0,
        eN = em || void 0
      en[88] !== em
        ? ((Z = em ? (e) => eh(e.currentTarget.scrollTop > 0) : void 0), (en[88] = em), (en[89] = Z))
        : (Z = en[89])
      let eI = !eg && "p-panel"
      return (
        en[90] !== eI
          ? ((Y = (0, i.A)("flex-1 scrollbar-stable overflow-y-auto", eI)), (en[90] = eI), (en[91] = Y))
          : (Y = en[91]),
        en[92] !== t ||
        en[93] !== a ||
        en[94] !== eo ||
        en[95] !== es ||
        en[96] !== w ||
        en[97] !== k ||
        en[98] !== I ||
        en[99] !== em ||
        en[100] !== eg
          ? ((K =
              null == I || !eg || em
                ? null
                : (0, n.jsx)(u.g, {
                    className: es ? void 0 : "max-w-3xl",
                    showDivider: !1,
                    sticky: !1,
                    title: (0, n.jsxs)(n.Fragment, {
                      children: [
                        null == a ? null : (0, n.jsx)("div", { className: "flex", children: a }),
                        (0, n.jsx)("h1", {
                          className: (0, i.A)("text-default", "compact" === eo ? "heading-lg" : "heading-xl"),
                          children: I,
                        }),
                        null == w
                          ? null
                          : (0, n.jsx)("div", {
                              className: (0, i.A)("text-base leading-6 text-balance text-secondary", k),
                              children: w,
                            }),
                      ],
                    }),
                    actions: null == t ? null : (0, n.jsx)(u.T, { search: null, actions: t }),
                  })),
            (en[92] = t),
            (en[93] = a),
            (en[94] = eo),
            (en[95] = es),
            (en[96] = w),
            (en[97] = k),
            (en[98] = I),
            (en[99] = em),
            (en[100] = eg),
            (en[101] = K))
          : (K = en[101]),
        en[102] !== ek ||
        en[103] !== ej ||
        en[104] !== eG ||
        en[105] !== eN ||
        en[106] !== Z ||
        en[107] !== Y ||
        en[108] !== K
          ? ((V = (0, n.jsxs)("div", {
              ref: ec,
              "data-contain-touch-overscroll": ej,
              "data-app-shell-page-scrolled": eG,
              "data-settings-mobile-header": eN,
              onScroll: Z,
              className: Y,
              children: [K, ek],
            })),
            (en[102] = ek),
            (en[103] = ej),
            (en[104] = eG),
            (en[105] = eN),
            (en[106] = Z),
            (en[107] = Y),
            (en[108] = K),
            (en[109] = V))
          : (V = en[109]),
        en[110] !== _
          ? ((Q =
              null != _ &&
              (0, n.jsx)("div", {
                className:
                  "flex flex-wrap items-center justify-end gap-2 border-t border-primary-outline bg-surface px-panel py-3",
                children: _,
              })),
            (en[110] = _),
            (en[111] = Q))
          : (Q = en[111]),
        en[112] !== v ||
        en[113] !== C ||
        en[114] !== F ||
        en[115] !== W ||
        en[116] !== $ ||
        en[117] !== V ||
        en[118] !== Q
          ? ((J = (0, n.jsxs)("div", { ref: v, className: F, ...C, children: [W, $, V, Q] })),
            (en[112] = v),
            (en[113] = C),
            (en[114] = F),
            (en[115] = W),
            (en[116] = $),
            (en[117] = V),
            (en[118] = Q),
            (en[119] = J))
          : (J = en[119]),
        J
      )
    }
    function f(e) {
      let t,
        a,
        i = (0, s.c)(8),
        { children: r, navigationKey: o, slateLayout: l, targetId: c, targetText: d } = e,
        u = void 0 !== l && l,
        h = void 0 === d ? null : d
      return (
        i[0] !== o || i[1] !== u || i[2] !== c || i[3] !== h
          ? ((t =
              null != c || null != h || u ? { navigationKey: o, slateLayout: u, targetId: c, targetText: h } : null),
            (i[0] = o),
            (i[1] = u),
            (i[2] = c),
            (i[3] = h),
            (i[4] = t))
          : (t = i[4]),
        i[5] !== r || i[6] !== t
          ? ((a = (0, n.jsx)(g.S.Provider, { value: t, children: r })), (i[5] = r), (i[6] = t), (i[7] = a))
          : (a = i[7]),
        a
      )
    }
  },
  oFmV(e, t, a) {
    let n = (0, a("zd8w").createContext)(null)
    a.d(t, {}, { S: n })
  },
  Qn5g(e, t, a) {
    var n = a("zTeN"),
      s = a("SPnB"),
      i = a("i1S8"),
      r = a("g2p6"),
      o = a("OWtl"),
      l = a("OMIV")
    let c = (0, n.SZ)(
        o.u,
        ({ get: e }) => {
          let t = e(l.M9)
          return null == t || (0, i.H)(t)
        },
        ({ get: e, set: t }) => {
          let a = e(l.M9)
          if (null == a) return
          let n = () => t((0, i.H)(a))
          return (a.on("values_updated", n), () => a.off("values_updated", n))
        },
      ),
      d = (0, n.un)(o.u, ({ get: e }) => !1),
      u = (0, n.un)(o.u, ({ get: e }) => {
        let t = e(r.Sk)
        return (
          !e(d) &&
          null != t &&
          t === e(s.chatGptAuthenticatedAccountId$) &&
          e(s.f4) &&
          !e(l.RS) &&
          e(l.JW, "665873859") &&
          !e(c)
        )
      })
    a.d(t, {}, { d: d, u: u })
  },
  LKGI(e, t, a) {
    a.d(t, { ChatGptDataControlsSettings: () => eA })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("IM1j"),
      r = a("T0Rc"),
      o = a("irkb"),
      l = a("xSOA"),
      c = a("zTeN"),
      d = a("zd8w"),
      u = a("Wf1j"),
      h = a("oyxz"),
      p = a("HZfM"),
      g = a("TDcV"),
      m = a("TjTj"),
      f = a("SPnB"),
      x = a("eFn4"),
      y = a("EOo5"),
      b = a("YJm0"),
      _ = a("Ghh3"),
      v = a("MrGp"),
      C = a("g2p6"),
      A = a("xEZJ"),
      T = a("QmkR"),
      w = a("OAko"),
      k = a("ygO2"),
      j = a("JNtf"),
      G = a("mUDD"),
      N = a("ZtSy"),
      I = a("GO7r"),
      P = a("Bbed"),
      S = a("SGsN"),
      O = a("F0xz"),
      E = a("IdsJ"),
      L = a("GaA7"),
      M = a("OWtl"),
      R = a("jxU8"),
      D = a("BSnr"),
      U = a("AWNZ"),
      q = a("QyE3"),
      H = a("ZEx5"),
      z = a("czB9"),
      B = a("hZax"),
      F = a("UR81"),
      W = a("Qn5g")
    a("qhRx")
    var $ = a("T5JX")
    a("X1mr")
    var Z = a("GDNt"),
      Y = a("Sg0s")
    function K(e) {
      let t,
        a,
        i,
        r,
        p,
        g,
        m,
        f,
        x,
        b,
        v,
        C,
        A,
        T,
        w,
        N,
        I,
        P,
        O,
        E,
        L,
        R,
        D,
        U,
        q = (0, s.c)(58),
        { open: H, onOpenChange: z } = e,
        B = (0, c.gh)(M.u),
        F = (0, u.A)(),
        W = (0, y.As)(),
        K = (0, o.jE)(),
        V = (0, d.useRef)(null),
        Q = (0, d.useRef)(null),
        J = (0, d.useRef)(null),
        X = (0, d.useRef)(null),
        [ee, et] = (0, d.useState)(null)
      ;(q[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => {
            V.current = null
          }),
          (a = []),
          (q[0] = t),
          (q[1] = a))
        : ((t = q[0]), (a = q[1])),
        (0, d.useEffect)(t, a),
        q[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = async function (e) {
              return V.current === e
            }),
            (q[2] = i))
          : (i = q[2]))
      let ea = i
      ;(q[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (e) =>
            (async function (e, t) {
              try {
                let a = await (0, $.wl)("chatgpt_account_data_export")
                if (!(await t())) return "cancelled"
                return (
                  await _.Request.safePost("/accounts/data_export", { additionalHeaders: a, expectedIdentity: e }),
                  "requested"
                )
              } catch (e) {
                throw e
              }
            })(e, () => ea(e))),
          (q[3] = r))
        : (r = q[3]),
        q[4] !== F || q[5] !== z || q[6] !== B
          ? ((p = async (e, t) => {
              "cancelled" !== e &&
                (await ea(t)) &&
                "reauthenticating" !== e &&
                ((V.current = null),
                z(!1),
                B.get(S.Id).success(
                  F.formatMessage({
                    id: "settings.chatGpt.dataControls.export.success",
                    defaultMessage: "Data export requested. You’ll receive an email when it’s ready.",
                    description:
                      "Success toast after an end user requests a ChatGPT account data export from Data controls. The export is delivered later by email.",
                  }),
                ))
            }),
            (q[4] = F),
            (q[5] = z),
            (q[6] = B),
            (q[7] = p))
          : (p = q[7]),
        q[8] !== F || q[9] !== B
          ? ((g = async (e, t) => {
              ;(await ea(t)) &&
                (e instanceof Z.fk && e.errorCode,
                (V.current = null),
                e instanceof Z.fk && 409 === e.status
                  ? B.get(S.Id).danger(
                      F.formatMessage({
                        id: "settings.chatGpt.dataControls.export.conflictError",
                        defaultMessage:
                          "Your existing export is still being processed. You’ll receive an email when it’s ready.",
                        description:
                          "Warning shown when an end user requests another ChatGPT account data export while an earlier export is still processing.",
                      }),
                      { errorAnalytics: { toastId: "settings.chatGpt.dataControls.export.conflictError" } },
                    )
                  : e instanceof Z.fk &&
                      (401 === e.status ||
                        "reauth_required" === e.errorCode ||
                        "phone_verification_required" === e.errorCode)
                    ? B.get(S.Id).danger(
                        F.formatMessage({
                          id: "settings.chatGpt.dataControls.export.reauthError",
                          defaultMessage: "Please sign in again, then retry your data export.",
                          description:
                            "Error toast shown when ChatGPT requires an end user to reauthenticate before requesting an account data export.",
                        }),
                        { errorAnalytics: { toastId: "settings.chatGpt.dataControls.export.reauthError" } },
                      )
                    : e instanceof Z.fk && "email_required" === e.errorCode
                      ? B.get(S.Id).danger(
                          F.formatMessage({
                            id: "settings.chatGpt.dataControls.export.emailError",
                            defaultMessage: "Add and verify an email address in ChatGPT before requesting an export.",
                            description:
                              "Error toast shown when a phone-only ChatGPT account must add and verify an email address before requesting an account data export.",
                          }),
                          { errorAnalytics: { toastId: "settings.chatGpt.dataControls.export.emailError" } },
                        )
                      : B.get(S.Id).danger(
                          F.formatMessage({
                            id: "settings.chatGpt.dataControls.export.error",
                            defaultMessage: "Couldn’t request your data export. Please try again later.",
                            description:
                              "Error toast shown when a ChatGPT account data export request fails for an unspecified reason.",
                          }),
                          { errorAnalytics: { toastId: "settings.chatGpt.dataControls.export.error" } },
                        ))
            }),
            (q[8] = F),
            (q[9] = B),
            (q[10] = g))
          : (g = q[10]),
        q[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (e, t, a) => {
              Q.current === a && (Q.current = null)
            }),
            (q[11] = m))
          : (m = q[11]),
        q[12] !== p || q[13] !== g
          ? ((f = { mutationFn: r, onSuccess: p, onError: g, onSettled: m }), (q[12] = p), (q[13] = g), (q[14] = f))
          : (f = q[14]))
      let en = (0, l.n)(f),
        es = en.isPending || "reauthenticating" === en.data
      q[15] !== en
        ? ((x = function (e) {
            V.current === e && null == Q.current && ((Q.current = e), en.mutate(e))
          }),
          (q[15] = en),
          (q[16] = x))
        : (x = q[16])
      let ei = x
      q[17] !== z
        ? ((b = function () {
            ;((V.current = null), et(null), z(!1))
          }),
          (q[17] = z),
          (q[18] = b))
        : (b = q[18])
      let er = b
      q[19] !== er || q[20] !== ee || q[21] !== F || q[22] !== K || q[23] !== B || q[24] !== ei
        ? ((v = async function (e) {
            if (null == ee || V.current !== ee || J.current === ee) return
            J.current = ee
            let t = !1
            try {
              ;(await ea(ee)) &&
                (t = await (0, Y.W)({ accountId: ee.accountId, email: e, queryClient: K, userId: ee.userId }))
            } catch {}
            if (!(await ea(ee))) {
              V.current === ee && er()
              return
            }
            if ((et(null), !t)) {
              ;((V.current = null),
                B.get(S.Id).danger(
                  F.formatMessage({
                    id: "settings.chatGpt.dataControls.export.emailRefreshError",
                    defaultMessage: "Email verified. Sign in again, then retry your data export.",
                    description:
                      "Error after an end user verifies an email for ChatGPT data export but their browser account session cannot be refreshed.",
                  }),
                  { errorAnalytics: { toastId: "settings.chatGpt.dataControls.export.emailRefreshError" } },
                ))
              return
            }
            ;((X.current = ee), ei(ee))
          }),
          (q[19] = er),
          (q[20] = ee),
          (q[21] = F),
          (q[22] = K),
          (q[23] = B),
          (q[24] = ei),
          (q[25] = v))
        : (v = q[25])
      let eo = v,
        el = H && null == ee
      return (
        q[26] !== er || q[27] !== es
          ? ((C = (e) => {
              e || es || er()
            }),
            (q[26] = er),
            (q[27] = es),
            (q[28] = C))
          : (C = q[28]),
        q[29] !== W || q[30] !== es || q[31] !== ei
          ? ((A = (e) => {
              if ((e.preventDefault(), !es && null == Q.current && null != W.userId && null != W.accountId)) {
                let e = { userId: W.userId, accountId: W.accountId }
                ;((V.current = e), ei(e))
              }
            }),
            (q[29] = W),
            (q[30] = es),
            (q[31] = ei),
            (q[32] = A))
          : (A = q[32]),
        q[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, n.jsx)(G.c7, {
              title: (0, n.jsx)(j.L3, {
                children: (0, n.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.export.dialog.title",
                  defaultMessage: "Request data export?",
                  description:
                    "Title of the confirmation dialog shown before an end user requests an export of their ChatGPT account data.",
                }),
              }),
            })),
            (q[33] = T))
          : (T = q[33]),
        q[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, n.jsx)(G.OO, {
              children: (0, n.jsx)(j.rr, {
                asChild: !0,
                children: (0, n.jsxs)("ul", {
                  className: "flex list-disc flex-col gap-1 ps-5 text-sm text-secondary",
                  children: [
                    (0, n.jsx)("li", {
                      children: (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.export.dialog.contents",
                        defaultMessage: "Your account details and chats will be included.",
                        description:
                          "First item in the ChatGPT data export confirmation dialog. It explains what the account export contains.",
                      }),
                    }),
                    (0, n.jsx)("li", {
                      children: (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.export.dialog.delivery",
                        defaultMessage: "We’ll email a download link to your registered address.",
                        description:
                          "Second item in the ChatGPT data export confirmation dialog. It explains that the account export is delivered by email.",
                      }),
                    }),
                    (0, n.jsx)("li", {
                      children: (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.export.dialog.expiration",
                        defaultMessage: "The download link expires after 24 hours.",
                        description:
                          "Third item in the ChatGPT data export confirmation dialog. It tells an end user how long the emailed download link remains valid.",
                      }),
                    }),
                    (0, n.jsx)("li", {
                      children: (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.export.dialog.processing",
                        defaultMessage: "Processing may take some time.",
                        description:
                          "Final item in the ChatGPT data export confirmation dialog. It warns an end user that preparing the account export is asynchronous.",
                      }),
                    }),
                  ],
                }),
              }),
            })),
            (q[34] = w))
          : (w = q[34]),
        q[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = (0, n.jsx)(h.A, { id: "common.cancel", defaultMessage: "Cancel", description: "Cancel button" })),
            (q[35] = N))
          : (N = q[35]),
        q[36] !== er || q[37] !== es
          ? ((I = (0, n.jsx)(k.$, { color: "secondary", disabled: es, type: "button", onClick: er, children: N })),
            (q[36] = er),
            (q[37] = es),
            (q[38] = I))
          : (I = q[38]),
        q[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.export.dialog.confirm",
              defaultMessage: "Confirm export",
              description:
                "Primary button in the ChatGPT data export confirmation dialog. It submits the end user’s account export request.",
            })),
            (q[39] = P))
          : (P = q[39]),
        q[40] !== es
          ? ((O = (0, n.jsx)(k.$, { loading: es, type: "submit", children: P })), (q[40] = es), (q[41] = O))
          : (O = q[41]),
        q[42] !== I || q[43] !== O
          ? ((E = (0, n.jsx)(G.OO, { children: (0, n.jsxs)(G.Es, { children: [I, O] }) })),
            (q[42] = I),
            (q[43] = O),
            (q[44] = E))
          : (E = q[44]),
        q[45] !== A || q[46] !== E
          ? ((L = (0, n.jsxs)(G.R4, { as: "form", onSubmit: A, children: [T, w, E] })),
            (q[45] = A),
            (q[46] = E),
            (q[47] = L))
          : (L = q[47]),
        q[48] !== el || q[49] !== C || q[50] !== L
          ? ((R = (0, n.jsx)(j.lG, { open: el, onOpenChange: C, children: L })),
            (q[48] = el),
            (q[49] = C),
            (q[50] = L),
            (q[51] = R))
          : (R = q[51]),
        q[52] !== eo || q[53] !== ee ? ((D = null), (q[52] = eo), (q[53] = ee), (q[54] = D)) : (D = q[54]),
        q[55] !== R || q[56] !== D
          ? ((U = (0, n.jsxs)(n.Fragment, { children: [R, D] })), (q[55] = R), (q[56] = D), (q[57] = U))
          : (U = q[57]),
        U
      )
    }
    a("PkPC")
    var V = a("iPAC"),
      Q = a("DBCl"),
      J = a("Qs18"),
      X = a("KtYA"),
      ee = a("rSJp"),
      et = a("HOLv"),
      ea = a("OMIV")
    function en(e) {
      let t,
        a,
        i,
        r,
        o,
        d,
        p,
        g,
        m,
        x,
        y = (0, s.c)(28),
        { onBack: b } = e,
        v = (0, c.gh)(M.u),
        A = (0, u.A)(),
        T = (0, B.Zj)("500337272"),
        { data: w, isError: j, isFetching: G, isLoading: N, refetch: I } = (0, c.Ul)(J.nk)
      ;(y[0] !== T || y[1] !== v
        ? ((t = async (e) => {
            let { key: t, value: a } = e,
              n = v.get(C.Sk),
              s = v.get(f.chatGptAuthenticatedUserId$)
            if (null == n || null == s) return
            let i = v.query.snapshot(J.nk),
              r = (0, ee.LF)(T) ? { analytics: !1, marketing: !1, personalization: !1 } : { [t]: a },
              o = (0, X.D)(v, r, !0),
              l = !0,
              c = v.watch((e) => {
                let { get: t } = e
                ;(n !== t(C.Sk) || s !== t(f.chatGptAuthenticatedUserId$)) && (l = !1)
              }),
              d = () => {
                if (!l) return !1
                let e = o.getCurrentUpdate()
                if (0 === Object.keys(e).length) return !1
                let t = (0, ee.LF)(T)
                return (
                  i.setData((a) =>
                    null == a
                      ? a
                      : {
                          ...a,
                          ...(t ? { analytics: !1, marketing: !1, personalization: !1 } : e),
                          isConsentRequired: t || a.isConsentRequired,
                        },
                  ),
                  !0
                )
              }
            return i
              .cancel()
              .then(async () => {
                if (!d()) return
                let e = async () => {
                  ;(await i.cancel(), d())
                }
                return _.Request.safePost("/user_granular_consent", {
                  requestBody: { granular_consent: r },
                  additionalHeaders: { "ChatGPT-Account-ID": n, [Q.zBc]: n },
                  expectedIdentity: { userId: s, accountId: n },
                }).then(e, async (t) => {
                  throw (await e(), t)
                })
              })
              .finally(() => {
                ;(c(), o.finish())
              })
          }),
          (y[0] = T),
          (y[1] = v),
          (y[2] = t))
        : (t = y[2]),
        y[3] !== A || y[4] !== v
          ? ((a = () => {
              v.get(S.Id).danger(
                A.formatMessage({
                  id: "settings.chatGpt.marketingPrivacy.updateError",
                  defaultMessage: "Couldn’t update marketing privacy settings",
                  description:
                    "Error toast shown when an end user cannot update a ChatGPT marketing privacy preference.",
                }),
                { errorAnalytics: { toastId: "settings.chatGpt.marketingPrivacy.updateError" } },
              )
            }),
            (y[3] = A),
            (y[4] = v),
            (y[5] = a))
          : (a = y[5]),
        y[6] !== t || y[7] !== a
          ? ((i = { mutationFn: t, onError: a }), (y[6] = t), (y[7] = a), (y[8] = i))
          : (i = y[8]))
      let P = (0, l.n)(i),
        E = !(w?.isConsentRequired ?? !0)
      ;(y[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, n.jsx)(h.A, {
            id: "settings.chatGpt.marketingPrivacy.title",
            defaultMessage: "Marketing privacy",
            description: "Title of the ChatGPT Marketing privacy subpage inside Data controls.",
          })),
          (y[9] = r))
        : (r = y[9]),
        y[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(et.I, { className: "rtl:rotate-180", asset: V.x })),
            (d = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.marketingPrivacy.back",
              defaultMessage: "Back",
              description:
                "Button returning an end user from ChatGPT Marketing privacy to the main Data controls page.",
            })),
            (y[10] = o),
            (y[11] = d))
          : ((o = y[10]), (d = y[11])),
        y[12] !== b
          ? ((p = (0, n.jsxs)(k.$, { color: "ghostActive", size: "toolbar", onClick: b, children: [o, d] })),
            (y[12] = b),
            (y[13] = p))
          : (p = y[13]))
      let L = N || void 0
      return (
        y[14] !== w || y[15] !== E || y[16] !== A || y[17] !== j || y[18] !== G || y[19] !== I || y[20] !== P
          ? ((g = j
              ? (0, n.jsx)(U.ic, {
                  label: (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.marketingPrivacy.loadError",
                    defaultMessage: "Couldn’t load marketing privacy settings",
                    description:
                      "Error shown on the ChatGPT Marketing privacy settings subpage when the end user's current consent choices cannot be loaded. Concise settings-row text with no placeholders.",
                  }),
                  control: (0, n.jsx)(k.$, {
                    color: "secondary",
                    loading: G,
                    size: "toolbar",
                    onClick: () => void I(),
                    children: (0, n.jsx)(h.A, {
                      id: "common.retry",
                      defaultMessage: "Retry",
                      description: "Button to retry an operation after an error",
                    }),
                  }),
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(U.ic, {
                      label: (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.marketingPrivacy.measurement.label",
                        defaultMessage: "Marketing measurement",
                        description:
                          "Label for the ChatGPT Marketing privacy toggle controlling cookies used to measure marketing campaign effectiveness.",
                      }),
                      description: (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.marketingPrivacy.measurement.description",
                        defaultMessage: "These cookies help us measure the effectiveness of our marketing campaigns.",
                        description:
                          "Supporting text for the Marketing measurement toggle on the ChatGPT Marketing privacy settings subpage.",
                      }),
                      control: (0, n.jsx)(O.l, {
                        ariaLabel: A.formatMessage({
                          id: "settings.chatGpt.marketingPrivacy.measurement.ariaLabel",
                          defaultMessage: "Allow marketing measurement",
                          description: "Accessible label for the ChatGPT Marketing measurement privacy toggle.",
                        }),
                        checked: w?.marketing ?? E,
                        disabled: null == w || P.isPending,
                        onChange: (e) => P.mutate({ key: "marketing", value: e }),
                      }),
                    }),
                    (0, n.jsx)(U.ic, {
                      label: (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.marketingPrivacy.personalization.label",
                        defaultMessage: "Personalized marketing",
                        description:
                          "Label for the ChatGPT Marketing privacy toggle controlling personalization of OpenAI marketing on third-party platforms.",
                      }),
                      description: (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.marketingPrivacy.personalization.description",
                        defaultMessage:
                          "This helps us personalize and measure OpenAI’s own marketing on third-party platforms.",
                        description:
                          "Supporting text for the Personalized marketing toggle on the ChatGPT Marketing privacy settings subpage.",
                      }),
                      control: (0, n.jsx)(O.l, {
                        ariaLabel: A.formatMessage({
                          id: "settings.chatGpt.marketingPrivacy.personalization.ariaLabel",
                          defaultMessage: "Allow personalized marketing",
                          description: "Accessible label for the ChatGPT Personalized marketing privacy toggle.",
                        }),
                        checked: w?.personalization ?? E,
                        disabled: null == w || P.isPending,
                        onChange: (e) => P.mutate({ key: "personalization", value: e }),
                      }),
                    }),
                  ],
                })),
            (y[14] = w),
            (y[15] = E),
            (y[16] = A),
            (y[17] = j),
            (y[18] = G),
            (y[19] = I),
            (y[20] = P),
            (y[21] = g))
          : (g = y[21]),
        y[22] !== L || y[23] !== g
          ? ((m = (0, n.jsx)(D.X, {
              children: (0, n.jsx)(D.X.Content, { children: (0, n.jsx)(H.t, { "aria-busy": L, children: g }) }),
            })),
            (y[22] = L),
            (y[23] = g),
            (y[24] = m))
          : (m = y[24]),
        y[25] !== m || y[26] !== p
          ? ((x = (0, n.jsx)(R.P, { title: r, backSlot: p, children: m })), (y[25] = m), (y[26] = p), (y[27] = x))
          : (x = y[27]),
        x
      )
    }
    var es = a("O666")
    let ei = (0, c.un)(
      M.u,
      ({ get: e }) =>
        !e(es.H$, { layer: "4107938382", parameter: "disable_precise_location" }) &&
        (e(ea.JW, "1957563541") || e(es.H$, { layer: "4107938382", parameter: "enable_precise_location" })),
    )
    var er = a("VMa7"),
      eo = a("OX9U"),
      el = a("SZLI"),
      ec = a("Ot7V"),
      ed = a("X6Vn")
    function eu() {
      let e,
        t = (0, s.c)(5),
        a = (0, c.Ul)(ei),
        { data: i } = (0, c.Ul)(C.s6),
        r = (0, c.Ul)(eo.d)
      if (!a) return null
      let o = r ?? null,
        l = i?.preciseLocationAllowed,
        d = i?.amphoraLocks?.precise_location_allowed,
        u = i?.preciseLocationRestrictedReason
      return (
        t[0] !== o || t[1] !== l || t[2] !== d || t[3] !== u
          ? ((e = (0, n.jsx)(eh, { permission: o, allowed: l, locked: d, restrictedReason: u })),
            (t[0] = o),
            (t[1] = l),
            (t[2] = d),
            (t[3] = u),
            (t[4] = e))
          : (e = t[4]),
        e
      )
    }
    function eh(e) {
      let t,
        a,
        i,
        r,
        o,
        l,
        p,
        g = (0, s.c)(30),
        { permission: m, allowed: x, locked: y, restrictedReason: b } = e,
        v = (0, c.gh)(M.u),
        A = (0, u.A)(),
        [T, w] = (0, d.useState)(!1),
        j = !1 === x && (!0 === y || !!b),
        G = !0 === x && "granted" === m,
        P = j
          ? "https://help.openai.com/en/articles/12315553-parental-controls-on-chatgpt-faq#location"
          : "https://help.openai.com/en/articles/9237897-chatgpt-search#location"
      g[0] !== P
        ? ((t = (e) =>
            (0, n.jsx)(N.G, {
              href: P,
              initiator: "external_link",
              appearance: "secondary",
              openTarget: "external-browser",
              children: e,
            })),
          (g[0] = P),
          (g[1] = t))
        : (t = g[1])
      let O = t
      if (j) {
        let e
        ;(g[2] !== O || g[3] !== b
          ? ((e = b
              ? (0, n.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.location.restrictedReason",
                  defaultMessage: "{reason} <link>Learn more</link>",
                  description:
                    "Server-provided parental-control restriction reason followed by a link to the parental-controls location FAQ",
                  values: { reason: b, link: O },
                })
              : (0, n.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.location.restricted",
                  defaultMessage:
                    "Restricted by parental controls. ChatGPT won't use your device's location. <link>Learn more</link>",
                  description:
                    "Explains that parental controls block device location, with a link to the parental-controls FAQ",
                  values: { link: O },
                })),
            (g[2] = O),
            (g[3] = b),
            (g[4] = e))
          : (e = g[4]),
          (a = e))
      } else if (G) {
        let e
        ;(g[5] !== O
          ? ((e = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.location.granted",
              defaultMessage:
                "Allow ChatGPT to use your device's precise location when providing information. <link>Learn more</link>",
              description:
                "Location setting description when browser permission is granted, with a link to location help",
              values: { link: O },
            })),
            (g[5] = O),
            (g[6] = e))
          : (e = g[6]),
          (a = e))
      } else {
        let e
        ;(g[7] !== O
          ? ((e = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.location.promptOrDenied",
              defaultMessage:
                "When enabled, your location helps ChatGPT provide more relevant information, like local recommendations, news, and weather. <link>Learn more</link>",
              description:
                "Location setting description when browser permission is undecided or denied, with a link to location help",
              values: { link: O },
            })),
            (g[7] = O),
            (g[8] = e))
          : (e = g[8]),
          (a = e))
      }
      g[9] !== G
        ? ((i = G
            ? (0, n.jsx)(h.A, {
                id: "settings.chatGpt.dataControls.location.on",
                defaultMessage: "On",
                description: "Status of device location when browser access is granted",
              })
            : (0, n.jsx)(h.A, {
                id: "settings.chatGpt.dataControls.location.off",
                defaultMessage: "Off",
                description: "Status of device location when browser access is denied or parental controls restrict it",
              })),
          (g[9] = G),
          (g[10] = i))
        : (i = g[10])
      let L = i
      g[11] !== x || g[12] !== A || g[13] !== v
        ? ((r = async function (e) {
            let t = v.get(C.Sk),
              a = v.get(f.chatGptAuthenticatedUserId$),
              n = v.get(f.o8),
              s = v.query.snapshot(C.s6),
              i = () => v.get(C.Sk) === t && v.get(f.chatGptAuthenticatedUserId$) === a && v.get(f.o8) === n
            try {
              let a = !e
              if (e && !1 === x) {
                let e = await s.fetch()
                if (
                  !i() ||
                  !v.get(ei) ||
                  null == e.preciseLocationAllowed ||
                  e.amphoraLocks?.precise_location_allowed === !0 ||
                  e.preciseLocationRestrictedReason
                )
                  return
                a = !1 === e.preciseLocationAllowed
              }
              ;(a &&
                (await _.Request.safePatch("/settings/account_user_setting", {
                  expectedIdentity: null != t && null != n ? { accountId: t, userId: n } : void 0,
                  additionalHeaders: null == t ? void 0 : { "ChatGPT-Account-ID": t, [Q.zBc]: t },
                  parameters: { query: { feature: "precise_location_allowed", value: e } },
                }),
                !e && (await s.cancel(), s.setData(ep), i() && (0, E.q0)()),
                await s.invalidate()),
                e &&
                  i() &&
                  (await (0, el.Z)(
                    v,
                    "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_SETTINGS",
                    "CHATGPT_LOCATION_PERMISSION_INTERACTION_STATUS_ROW",
                  )))
            } catch {
              i() &&
                v
                  .get(S.Id)
                  .danger(
                    A.formatMessage({
                      id: "settings.chatGpt.dataControls.updateError",
                      defaultMessage: "Could not update data controls",
                      description: "Error toast when ChatGPT data controls cannot be updated",
                    }),
                    { errorAnalytics: { toastId: "settings.chatGpt.dataControls.updateError" } },
                  )
            }
          }),
          (g[11] = x),
          (g[12] = A),
          (g[13] = v),
          (g[14] = r))
        : (r = g[14])
      let R = r
      return (
        g[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.location",
              defaultMessage: "Location",
              description: "Label for precise location data control",
            })),
            (g[15] = o))
          : (o = g[15]),
        g[16] !== x ||
        g[17] !== G ||
        g[18] !== P ||
        g[19] !== y ||
        g[20] !== T ||
        g[21] !== m ||
        g[22] !== j ||
        g[23] !== v ||
        g[24] !== L ||
        g[25] !== R
          ? ((l = (e) => {
              let { "aria-describedby": t } = e
              return j || G || (!0 === x && "denied" === m)
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsxs)(k.$, {
                        "aria-describedby": t,
                        color: "ghost",
                        size: "toolbar",
                        onClick: (e) => {
                          j || "denied" !== m
                            ? (0, ec.PQ)({
                                event: e,
                                href: P,
                                initiator: "external_link",
                                openTarget: "external-browser",
                              })
                            : (0, ed.qf)(v, er.ChatGptLocationPermissionDeniedDialog)
                        },
                        children: [L, (0, n.jsx)(I.uM3, {})],
                      }),
                      G &&
                        (0, n.jsx)(k.$, {
                          "aria-describedby": t,
                          color: "secondary",
                          size: "toolbar",
                          disabled: !0 === y || T,
                          loading: T,
                          onClick: () => {
                            ;(w(!0), R(!1).finally(() => w(!1)))
                          },
                          children: (0, n.jsx)(h.A, {
                            id: "settings.chatGpt.dataControls.location.turnOff",
                            defaultMessage: "Turn off",
                            description:
                              "Button in ChatGPT Location settings that stops sharing precise device location for this account, without changing browser permission. Paired with Turn on.",
                          }),
                        }),
                    ],
                  })
                : (0, n.jsx)(k.$, {
                    "aria-describedby": t,
                    color: "secondary",
                    size: "toolbar",
                    disabled: null == x || T,
                    loading: T,
                    onClick: () => {
                      ;(w(!0), R(!0).finally(() => w(!1)))
                    },
                    children: (0, n.jsx)(h.A, {
                      id: "chatgptConversations.preciseLocation.turnOn",
                      defaultMessage: "Turn on",
                      description: "Button requesting permission to use precise location for local ChatGPT answers",
                    }),
                  })
            }),
            (g[16] = x),
            (g[17] = G),
            (g[18] = P),
            (g[19] = y),
            (g[20] = T),
            (g[21] = m),
            (g[22] = j),
            (g[23] = v),
            (g[24] = L),
            (g[25] = R),
            (g[26] = l))
          : (l = g[26]),
        g[27] !== a || g[28] !== l
          ? ((p = (0, n.jsx)(U.ic, { label: o, description: a, control: l })), (g[27] = a), (g[28] = l), (g[29] = p))
          : (p = g[29]),
        p
      )
    }
    function ep(e) {
      return null == e ? e : { ...e, preciseLocationAllowed: !1 }
    }
    var eg = a("sPCu"),
      em = a("zKCW")
    function ef() {
      let e,
        t = (0, s.c)(2),
        a = (0, c.Ul)(!0)
      return (t[0] !== a ? ((e = a ? (0, n.jsx)(ex, {}) : null), (t[0] = a), (t[1] = e)) : (e = t[1]), e)
    }
    function ex() {
      let e,
        t,
        a,
        i,
        r,
        o,
        l = (0, s.c)(17),
        d = (0, u.A)(),
        { data: p, isError: g, refetch: m } = (0, c.Ul)(C.s6),
        { mutate: f, isPending: x, error: y } = (0, c.Ul)(C.wQ)
      l[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = (0, n.jsx)(h.A, {
            id: "settings.chatGpt.dataControls.networkAccess",
            defaultMessage: "Work network access",
            description: "Label for ChatGPT Work network access",
          })),
          (l[0] = e))
        : (e = l[0])
      let b = p?.enableFloraNetworkAccess === !0,
        _ = null == p || g || x || p.amphoraLocks?.enable_flora_network_access === !0
      return (
        l[1] !== f ? ((t = (e) => f(e)), (l[1] = f), (l[2] = t)) : (t = l[2]),
        l[3] !== d
          ? ((a = d.formatMessage({
              id: "settings.chatGpt.dataControls.networkAccess.ariaLabel",
              defaultMessage: "Allow Work network access",
              description: "Accessible label for ChatGPT Work network access",
            })),
            (l[3] = d),
            (l[4] = a))
          : (a = l[4]),
        l[5] !== b || l[6] !== _ || l[7] !== t || l[8] !== a
          ? ((i = (0, n.jsx)(U.ic, {
              label: e,
              control: (0, n.jsx)(O.l, { checked: b, disabled: _, onChange: t, ariaLabel: a }),
            })),
            (l[5] = b),
            (l[6] = _),
            (l[7] = t),
            (l[8] = a),
            (l[9] = i))
          : (i = l[9]),
        l[10] !== y || l[11] !== g || l[12] !== m
          ? ((r =
              g || null != y
                ? (0, n.jsx)(em.l, {
                    type: "error",
                    role: "alert",
                    content: (0, n.jsx)(h.A, {
                      id: "settings.chatGpt.networkAccess.error",
                      defaultMessage: "Could not load or save Work network access. Reload and try again",
                      description: "Error when reading or saving the account's Work network preference",
                    }),
                    primaryCtaText: (0, n.jsx)(h.A, {
                      id: "settings.chatGpt.networkAccess.reload",
                      defaultMessage: "Reload",
                      description: "Reload the saved Work network preference after an error",
                    }),
                    onPrimaryCtaClick: () => {
                      m()
                    },
                  })
                : null),
            (l[10] = y),
            (l[11] = g),
            (l[12] = m),
            (l[13] = r))
          : (r = l[13]),
        l[14] !== i || l[15] !== r
          ? ((o = (0, n.jsxs)(n.Fragment, { children: [i, r] })), (l[14] = i), (l[15] = r), (l[16] = o))
          : (o = l[16]),
        o
      )
    }
    function ey(e) {
      let t,
        a,
        i,
        r,
        o,
        d,
        p,
        g,
        m,
        f,
        x,
        y,
        b,
        v = (0, s.c)(37),
        { accountId: C, userId: A, open: T, onOpenChange: w, triggerContent: N } = e,
        I = (0, c.gh)(M.u),
        P = (0, u.A)()
      v[0] !== C || v[1] !== A
        ? ((t = {
            mutationFn: () =>
              _.Request.safePost("/flora/workspace/reset", {
                expectedIdentity: { accountId: C, userId: A },
                additionalHeaders: { "ChatGPT-Account-ID": C, [Q.zBc]: C },
                retry: !1,
              }),
            retry: !1,
          }),
          (v[0] = C),
          (v[1] = A),
          (v[2] = t))
        : (t = v[2])
      let { mutate: O, isPending: E } = (0, l.n)(t)
      v[3] !== E || v[4] !== w
        ? ((a = (e) => {
            E || w(e)
          }),
          (v[3] = E),
          (v[4] = w),
          (v[5] = a))
        : (a = v[5])
      let L = !E
      return (
        v[6] !== P || v[7] !== E || v[8] !== O || v[9] !== w || v[10] !== I
          ? ((i = (e) => {
              ;(e.preventDefault(),
                E ||
                  O(void 0, {
                    onSuccess: () => {
                      ;(w(!1),
                        I.get(S.Id).success(
                          P.formatMessage({
                            id: "chatgpt.settings.data_controls.work_reset.toast.success",
                            defaultMessage: "Work reset",
                            description: "Success toast after resetting the user's cloud Work environment",
                          }),
                        ))
                    },
                    onError: (e) => {
                      I.get(S.Id).danger(
                        P.formatMessage({
                          id: "chatgpt.settings.data_controls.work_reset.toast.error",
                          defaultMessage: "Failed to reset Work",
                          description:
                            "Error toast when resetting the user's cloud Work environment fails; the user can retry from the open confirmation dialog",
                        }),
                        {
                          description: e.message,
                          errorAnalytics: { toastId: "chatgpt.settings.data_controls.work_reset.toast.error" },
                        },
                      )
                    },
                  }))
            }),
            (v[6] = P),
            (v[7] = E),
            (v[8] = O),
            (v[9] = w),
            (v[10] = I),
            (v[11] = i))
          : (i = v[11]),
        v[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(j.L3, {
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.settings.data_controls.work_reset.modal.title",
                defaultMessage: "Reset ChatGPT Work?",
                description: "Title of the confirmation dialog before resetting the user's cloud Work environment",
              }),
            })),
            (v[12] = r))
          : (r = v[12]),
        v[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(G.OO, {
              children: (0, n.jsx)(G.c7, {
                title: r,
                subtitle: (0, n.jsx)(j.rr, {
                  children: (0, n.jsx)(h.A, {
                    id: "chatgpt.settings.data_controls.work_reset.modal.description",
                    defaultMessage:
                      "This will delete files and other local data in your current work environment. Files saved to your Library will remain. A fresh environment will be created the next time you start working.",
                    description:
                      'Body text in the Reset ChatGPT Work confirmation dialog in Settings > Data controls. "Work environment" means the remote environment used for code and shell commands. "Library" is the ChatGPT product feature where durable files are saved and must not be translated. Clearly distinguish deletable environment-local files from Library files that are preserved. No placeholders or rich text.',
                  }),
                }),
              }),
            })),
            (v[13] = o))
          : (o = v[13]),
        v[14] !== w ? ((d = () => w(!1)), (v[14] = w), (v[15] = d)) : (d = v[15]),
        v[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, n.jsx)(h.A, {
              id: "chatgpt.settings.data_controls.work_reset.modal.button.cancel",
              defaultMessage: "Cancel",
              description: "Closes the Work reset confirmation without changing the environment",
            })),
            (v[16] = p))
          : (p = v[16]),
        v[17] !== E || v[18] !== d
          ? ((g = (0, n.jsx)(k.$, { color: "secondary", disabled: E, type: "button", onClick: d, children: p })),
            (v[17] = E),
            (v[18] = d),
            (v[19] = g))
          : (g = v[19]),
        v[20] !== E
          ? ((m = E
              ? (0, n.jsx)(h.A, {
                  id: "chatgpt.settings.data_controls.work_reset.modal.button.pending",
                  defaultMessage: "Resetting…",
                  description: "Button label while the cloud Work environment reset is in progress",
                })
              : (0, n.jsx)(h.A, {
                  id: "chatgpt.settings.data_controls.work_reset.modal.button.confirm",
                  defaultMessage: "Reset",
                  description: "Confirms deletion of the current cloud Work environment's files and local data",
                })),
            (v[20] = E),
            (v[21] = m))
          : (m = v[21]),
        v[22] !== E || v[23] !== m
          ? ((f = (0, n.jsx)(k.$, { color: "danger", loading: E, type: "submit", children: m })),
            (v[22] = E),
            (v[23] = m),
            (v[24] = f))
          : (f = v[24]),
        v[25] !== f || v[26] !== g
          ? ((x = (0, n.jsx)(G.OO, { children: (0, n.jsxs)(G.Es, { children: [g, f] }) })),
            (v[25] = f),
            (v[26] = g),
            (v[27] = x))
          : (x = v[27]),
        v[28] !== x || v[29] !== i
          ? ((y = (0, n.jsxs)(G.R4, { as: "form", className: "select-none", onSubmit: i, children: [o, x] })),
            (v[28] = x),
            (v[29] = i),
            (v[30] = y))
          : (y = v[30]),
        v[31] !== T || v[32] !== y || v[33] !== a || v[34] !== L || v[35] !== N
          ? ((b = (0, n.jsx)(j.lG, {
              open: T,
              triggerContent: N,
              onOpenChange: a,
              showDialogClose: L,
              size: "compact",
              children: y,
            })),
            (v[31] = T),
            (v[32] = y),
            (v[33] = a),
            (v[34] = L),
            (v[35] = N),
            (v[36] = b))
          : (b = v[36]),
        b
      )
    }
    function eb() {
      let e,
        t,
        a = (0, s.c)(6),
        i = (0, c._U)(ea.JW, "1625797156"),
        r = (0, c.Ul)(f.kf),
        o = (0, c.Ul)(f.chatGptAuthenticatedAccountId$),
        l = (0, c.Ul)(f.o8),
        d = "loaded" === r.status && "workspace" === r.structure,
        u = i && d
      a[0] !== u ? ((e = { enabled: u }), (a[0] = u), (a[1] = e)) : (e = a[1])
      let { data: h } = (0, c._U)(b.t, o, e)
      if (
        !i ||
        null == o ||
        null == l ||
        "loaded" !== r.status ||
        ("personal" !== r.structure && (!d || h?.features?.includes("flora") !== !0))
      )
        return null
      let p = `${l}:${o}`
      return (
        a[2] !== o || a[3] !== p || a[4] !== l
          ? ((t = (0, n.jsx)(e_, { accountId: o, userId: l }, p)), (a[2] = o), (a[3] = p), (a[4] = l), (a[5] = t))
          : (t = a[5]),
        t
      )
    }
    function e_(e) {
      let t,
        a,
        i = (0, s.c)(5),
        { accountId: r, userId: o } = e,
        [l, c] = (0, d.useState)(!1)
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(h.A, {
              id: "chatgpt.settings.data_controls.work_reset.row.label",
              defaultMessage: "Reset ChatGPT Work",
              description: "Label for the Data controls setting that resets the user's cloud Work environment",
            })),
            (i[0] = t))
          : (t = i[0]),
        i[1] !== r || i[2] !== l || i[3] !== o
          ? ((a = (0, n.jsx)(U.ic, {
              className: "select-none",
              label: t,
              control: (e) =>
                (0, n.jsx)(ey, {
                  accountId: r,
                  userId: o,
                  open: l,
                  onOpenChange: c,
                  triggerContent: (0, n.jsx)(k.$, {
                    ...e,
                    color: "danger",
                    size: "toolbar",
                    children: (0, n.jsx)(h.A, {
                      id: "chatgpt.settings.data_controls.work_reset.row.button.label",
                      defaultMessage: "Reset",
                      description: "Button opening the confirmation to reset the user's cloud Work environment",
                    }),
                  }),
                }),
            })),
            (i[1] = r),
            (i[2] = l),
            (i[3] = o),
            (i[4] = a))
          : (a = i[4]),
        a
      )
    }
    let ev = (0, P._)(async () => (await a.e(336624).then(a.bind(a, "PTJJ"))).AdsControlsSettings),
      eC = (0, P._)(async () => (await a.e(642456).then(a.bind(a, "ylb7"))).InformationSharingSettings)
    function eA() {
      let e,
        t,
        i,
        N,
        P,
        $,
        Z,
        Y,
        V,
        Q,
        J,
        X,
        ee,
        et,
        ea,
        es,
        ei,
        er,
        eo,
        el,
        ec,
        ed,
        eh,
        ep,
        em,
        ex,
        ey,
        e_,
        eA,
        eG,
        eN,
        eI,
        eP,
        eS,
        eO,
        eE,
        eL,
        eM,
        eR,
        eD,
        eU,
        eq,
        eH,
        ez,
        eB,
        eF,
        eW,
        e$,
        eZ,
        eY,
        eK = (0, s.c)(157),
        eV = (0, c.gh)(M.u),
        eQ = (0, u.A)(),
        { userId: eJ, accountId: eX } = (0, y.As)(),
        { data: e0 } = (0, c.Ul)(C.s6),
        { data: e1 } = (0, w.YL)(),
        e2 = e1?.structure === "workspace",
        e3 = (0, c.Ul)(W.u),
        e4 = (0, c.Ul)(C.Sk)
      eK[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = { preview: !1 }), (eK[0] = e)) : (e = eK[0])
      let { data: e5, isError: e6 } = (0, w.YL)(void 0, e),
        e7 = e5?.structure === "workspace",
        e8 = (0, B.Zj)("2502526155")
      eK[1] !== eX || eK[2] !== eJ
        ? ((t = ["training-disclosure-verified-access", eX, eJ]), (eK[1] = eX), (eK[2] = eJ), (eK[3] = t))
        : (t = eK[3])
      let e9 = e8 && null != eJ && null != eX && e5?.id === eX
      ;(eK[4] !== eX || eK[5] !== eJ
        ? ((i = (e) => {
            let { signal: t } = e
            return _.Request.safeGet("/accounts/verified_access", {
              signal: t,
              additionalHeaders: null == eX ? void 0 : { "ChatGPT-Account-ID": eX },
              expectedIdentity: null == eX || null == eJ ? void 0 : { accountId: eX, userId: eJ },
            })
          }),
          (eK[4] = eX),
          (eK[5] = eJ),
          (eK[6] = i))
        : (i = eK[6]),
        eK[7] !== t || eK[8] !== e9 || eK[9] !== i
          ? ((N = { queryKey: t, enabled: e9, queryFn: i, staleTime: 6e4 }),
            (eK[7] = t),
            (eK[8] = e9),
            (eK[9] = i),
            (eK[10] = N))
          : (N = eK[10]))
      let { data: te, isSuccess: tt } = (0, r.I)(N),
        ta = e8 && e5?.id === eX && tt && te.programs.some(ej),
        tn = (0, o.jE)()
      eK[11] !== e5 || eK[12] !== e4 || eK[13] !== eJ
        ? ((P = (0, z.U)({ account: e5, userId: eJ, settingsAccountId: e4 })),
          (eK[11] = e5),
          (eK[12] = e4),
          (eK[13] = eJ),
          (eK[14] = P))
        : (P = eK[14])
      let ts = P,
        { data: ti, isError: tr, isFetching: to, refetch: tl } = (0, r.I)(ts),
        tc = e7 && ti?.data_usage_for_training === "disallowed"
      eK[15] !== e2 ? (($ = { enabled: e2 }), (eK[15] = e2), (eK[16] = $)) : ($ = eK[16])
      let { data: td } = (0, c._U)(b.t, e1?.id ?? null, $)
      eK[17] !== e1 || eK[18] !== e2 || eK[19] !== td?.features
        ? ((Z =
            null != e1 && "quorum" !== e1.plan_type && (!e2 || td?.features?.includes("workspace_share_links") === !0)),
          (eK[17] = e1),
          (eK[18] = e2),
          (eK[19] = td?.features),
          (eK[20] = Z))
        : (Z = eK[20])
      let tu = Z
      eK[21] !== e5
        ? ((Y = e5?.structure === "workspace" && (0, F.V$)(e5.plan_type)), (eK[21] = e5), (eK[22] = Y))
        : (Y = eK[22])
      let th = Y,
        tp = th && e5?.id === eX
      eK[23] !== tp ? ((V = { enabled: tp }), (eK[23] = tp), (eK[24] = V)) : (V = eK[24])
      let { data: tg, isError: tm } = (0, c._U)(x.Jk, e5?.id ?? "", V)
      eK[25] !== th || eK[26] !== tm || eK[27] !== tg?.permissions
        ? ((Q = th && !tm && tg?.permissions?.includes("chatgpt.workspace.feature.data-export.access") === !0),
          (eK[25] = th),
          (eK[26] = tm),
          (eK[27] = tg?.permissions),
          (eK[28] = Q))
        : (Q = eK[28])
      let tf = Q,
        tx = null != eJ && null != eX && !e6 && e5?.id === eX && ("workspace" !== e5.structure || tf),
        ty = null == e5 ? null : `${eJ}:${eX}:${e5.id}`,
        tb = e5?.id
      eK[29] !== eX || eK[30] !== tb || eK[31] !== eJ
        ? ((J = ["chatgpt-data-export-reauth", eJ, eX, tb]), (eK[29] = eX), (eK[30] = tb), (eK[31] = eJ), (eK[32] = J))
        : (J = eK[32])
      let t_ = J
      ;(eK[33] !== e5?.id || eK[34] !== eJ
        ? ((X = (e) => {
            let { signal: t } = e
            return (async function (e, t, n) {
              if (null == e || null == t) return !1
              let { consumeDataExportReauthentication: s } = await a.e(957871).then(a.bind(a, "n0Uu"))
              return s({ userId: e, accountId: t, signal: n })
            })(eJ, e5?.id, t)
          }),
          (eK[33] = e5?.id),
          (eK[34] = eJ),
          (eK[35] = X))
        : (X = eK[35]),
        eK[36] !== t_ || eK[37] !== X || !1 !== eK[38]
          ? ((ee = {
              queryKey: t_,
              queryFn: X,
              enabled: !1,
              staleTime: 1 / 0,
              gcTime: 0,
              retry: !1,
              refetchOnWindowFocus: !1,
            }),
            (eK[36] = t_),
            (eK[37] = X),
            (eK[38] = !1),
            (eK[39] = ee))
          : (ee = eK[39]))
      let { data: tv } = (0, r.I)(ee),
        tC = (0, B.Zj)("3157804138"),
        tA = (0, B.Zj)("1850361504")
      ;((0, B.Zj)("500944450"), (0, d.useState)(!1))
      let [tT, tw] = (0, p.ok)(),
        tk = tT.get("view"),
        [tj, tG] = (0, d.useState)(null),
        [tN, tI] = (0, d.useState)(!1),
        [tP, tS] = (0, d.useState)(null)
      ;(eK[40] !== tn || eK[41] !== eV
        ? ((et = async (e) => {
            let t = eV.get(g.j),
              a = eV.get(C.Sk),
              n = eV.get(f.chatGptAuthenticatedUserId$)
            ;(await _.Request.safePatch("/conversations", {
              requestBody: "archive" === e ? { is_archived: !0 } : { is_visible: !1 },
            }),
              L.appServices?.dictationHistoryRetention != null &&
                "delete" === e &&
                null != a &&
                null != n &&
                (await L.appServices.dictationHistoryRetention.deleteConversation({ accountId: a, userId: n }),
                await tn.invalidateQueries({ queryKey: ["dictation-history"] })),
              (0, m.bl)(eV, t),
              eV.get(g.j) === t && eV.set(v.mD, []),
              (0, T.g6)(eV),
              tn.invalidateQueries({ queryKey: [T.s5] }),
              await (0, A.RK)({ includePersisted: !0 }).catch(ek))
          }),
          (eK[40] = tn),
          (eK[41] = eV),
          (eK[42] = et))
        : (et = eK[42]),
        eK[43] === Symbol.for("react.memo_cache_sentinel") ? ((ea = () => tS(null)), (eK[43] = ea)) : (ea = eK[43]))
      let tO = (0, l.n)({ mutationFn: et, onSuccess: ea, onError: () => tE() })
      function tE() {
        eV.get(S.Id).danger(
          eQ.formatMessage({
            id: "settings.chatGpt.dataControls.updateError",
            defaultMessage: "Could not update data controls",
            description: "Error toast when ChatGPT data controls cannot be updated",
          }),
          { errorAnalytics: { toastId: "settings.chatGpt.dataControls.updateError" } },
        )
      }
      eK[44] !== e5 ||
      eK[45] !== e7 ||
      eK[46] !== tn ||
      eK[47] !== eV ||
      eK[48] !== e4 ||
      eK[49] !== tE ||
      eK[50] !== ts
        ? ((es = async function (e, t) {
            "precise_location_allowed" !== e || t || (0, E.q0)()
            let a = eV.query.snapshot(C.s6),
              n = a.getData()
            if (
              "training_allowed" === e &&
              (null == n ||
                n.amphoraLocks?.training_allowed === !0 ||
                null == e5 ||
                e5.id !== e4 ||
                eV.get(C.Sk) !== e4 ||
                (e7 &&
                  (tn.getQueryState(ts.queryKey)?.status === "error" ||
                    tn.getQueryData(ts.queryKey)?.data_usage_for_training !== "permitted")))
            )
              return
            let s = eV.get(C.Sk)
            try {
              ;(await _.Request.safePatch("/settings/account_user_setting", {
                additionalHeaders: null == s ? void 0 : { "ChatGPT-Account-ID": s },
                parameters: { query: { feature: e, value: t } },
              }),
                "precise_location_allowed" !== e || t || (0, E.q0)(),
                "training_allowed" === e && a.setData((e) => (null == e ? e : { ...e, trainingAllowed: t })),
                await a.invalidate())
            } catch {
              eV.get(C.Sk) === s && tE()
            }
          }),
          (eK[44] = e5),
          (eK[45] = e7),
          (eK[46] = tn),
          (eK[47] = eV),
          (eK[48] = e4),
          (eK[49] = tE),
          (eK[50] = ts),
          (eK[51] = es))
        : (es = eK[51])
      let tL = es
      eK[52] !== tT || eK[53] !== tw
        ? ((ei = function (e) {
            let t = new URLSearchParams(tT)
            ;(null != e ? t.set("view", e) : t.delete("view"), tw(t))
          }),
          (eK[52] = tT),
          (eK[53] = tw),
          (eK[54] = ei))
        : (ei = eK[54])
      let tM = ei
      if (e3 && ["ads", "ads-history", "ads-topics"].includes(tk ?? "")) {
        let e
        return (
          eK[55] !== tT || eK[56] !== tw
            ? ((e = (0, n.jsx)(ev, {
                onBack: () => {
                  let e = new URLSearchParams(tT)
                  ;(e.delete("view"), e.delete("adsView"), tw(e))
                },
              })),
              (eK[55] = tT),
              (eK[56] = tw),
              (eK[57] = e))
            : (e = eK[57]),
          e
        )
      }
      if ("marketing-privacy" === tk && tC) {
        let e
        return (
          eK[58] !== tM
            ? ((e = (0, n.jsx)(en, { onBack: () => tM(null) })), (eK[58] = tM), (eK[59] = e))
            : (e = eK[59]),
          e
        )
      }
      if ("information-sharing" === tk && tA) {
        let e
        return (
          eK[60] !== tM
            ? ((e = (0, n.jsx)(eC, { onBack: () => tM(null) })), (eK[60] = tM), (eK[61] = e))
            : (e = eK[61]),
          e
        )
      }
      if (ta) {
        let e
        ;(eK[62] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.training.trustedAccess.description",
              defaultMessage:
                "Allow your content to be used to improve our models for you and other users. We take steps to protect your privacy. <strong>Eligible Trusted Access content may be used for safety training.</strong> <link>Learn more</link>",
              description:
                "Description under Improve the model for everyone in ChatGPT Data controls on web and desktop, shown only to users with active Trusted Access. Explains content use and privacy, including a safety-training disclosure that also applies when the general model-improvement switch is off or disabled. Trusted Access is the program name. The strong tag emphasizes the complete safety-training sentence; link opens the Data Controls FAQ. Multi-sentence body copy.",
              values: { strong: ew, link: eT },
            })),
            (eK[62] = e))
          : (e = eK[62]),
          (er = e))
      } else if (tc) {
        let e
        ;(eK[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.training.unavailableDescription",
              defaultMessage:
                "By default, OpenAI does not use data from this workspace to train or improve its models. This plan does not offer an option to opt in to model training.",
              description:
                "Explains why the ChatGPT model-improvement switch is off and disabled for a workspace: data from the workspace is not used for training by default, and the workspace plan does not offer a model-training opt-in",
            })),
            (eK[63] = e))
          : (e = eK[63]),
          (er = e))
      } else {
        let e
        ;(eK[64] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.training.description",
              defaultMessage: "Control whether your chats are used for model training",
              description:
                "Explains that the ChatGPT model-improvement switch controls whether the person's chats can be used to train models",
            })),
            (eK[64] = e))
          : (e = eK[64]),
          (er = e))
      }
      ;(eK[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((eo = (0, n.jsx)(q.s, { showChatGptDataControlsLabel: !0, slug: "data-controls" })), (eK[65] = eo))
        : (eo = eK[65]),
        eK[66] !== tu || eK[67] !== e1 || eK[68] !== eQ || eK[69] !== tN
          ? ((el = tu
              ? (0, n.jsx)(U.ic, {
                  label: (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.dataControls.sharedLinks",
                    defaultMessage: "Shared links",
                    description: "Label for managing shared ChatGPT links from Data controls",
                  }),
                  control: (0, n.jsx)(eg.V, {
                    accountId: e1.id,
                    open: tN,
                    onOpenChange: tI,
                    triggerContent: (0, n.jsx)(k.$, {
                      "aria-label": eQ.formatMessage({
                        id: "settings.chatGpt.dataControls.manageSharedLinks",
                        defaultMessage: "Manage shared links",
                        description:
                          "Accessible label for the button that opens ChatGPT Shared links management from Data controls",
                      }),
                      color: "secondary",
                      size: "toolbar",
                      children: (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.manage",
                        defaultMessage: "Manage",
                        description: "Button to manage ChatGPT data",
                      }),
                    }),
                  }),
                })
              : null),
            (eK[66] = tu),
            (eK[67] = e1),
            (eK[68] = eQ),
            (eK[69] = tN),
            (eK[70] = el))
          : (el = eK[70]),
        eK[71] !== tr || eK[72] !== to || eK[73] !== e7 || eK[74] !== tl
          ? ((ec =
              e7 && tr
                ? (0, n.jsx)(U.ic, {
                    label: (0, n.jsx)("span", {
                      role: "alert",
                      children: (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.training.loadError",
                        defaultMessage: "Couldn’t load model improvement settings",
                        description:
                          "Error in ChatGPT Data controls when workspace training eligibility cannot be loaded. A nearby Retry button reloads eligibility; no privacy preference is changed.",
                      }),
                    }),
                    control: (0, n.jsx)(k.$, {
                      color: "secondary",
                      size: "toolbar",
                      loading: to,
                      onClick: () => void tl(),
                      children: (0, n.jsx)(h.A, {
                        id: "common.retry",
                        defaultMessage: "Retry",
                        description: "Button to retry an operation after an error",
                      }),
                    }),
                  })
                : null),
            (eK[71] = tr),
            (eK[72] = to),
            (eK[73] = e7),
            (eK[74] = tl),
            (eK[75] = ec))
          : (ec = eK[75]),
        eK[76] === Symbol.for("react.memo_cache_sentinel")
          ? ((ed = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.training",
              defaultMessage: "Improve the model for everyone",
              description: "Label for ChatGPT model training data control",
            })),
            (eK[76] = ed))
          : (ed = eK[76]),
        eK[77] !== e5 ||
        eK[78] !== eQ ||
        eK[79] !== tr ||
        eK[80] !== e7 ||
        eK[81] !== tc ||
        eK[82] !== e4 ||
        eK[83] !== ti?.data_usage_for_training ||
        eK[84] !== tL ||
        eK[85] !== e0
          ? ((eh = (e) => {
              let { "aria-describedby": t } = e
              return (0, n.jsx)(O.l, {
                "aria-describedby": t,
                checked: !tc && e0?.trainingAllowed === !0,
                disabled:
                  null == e0 ||
                  e0.amphoraLocks?.training_allowed === !0 ||
                  null == e5 ||
                  e5.id !== e4 ||
                  (e7 && (tr || ti?.data_usage_for_training !== "permitted")),
                onChange: (e) => void tL("training_allowed", e),
                ariaLabel: eQ.formatMessage({
                  id: "settings.chatGpt.dataControls.training.ariaLabel",
                  defaultMessage: "Allow chats to improve the model",
                  description: "Accessible label for ChatGPT model training data control",
                }),
              })
            }),
            (eK[77] = e5),
            (eK[78] = eQ),
            (eK[79] = tr),
            (eK[80] = e7),
            (eK[81] = tc),
            (eK[82] = e4),
            (eK[83] = ti?.data_usage_for_training),
            (eK[84] = tL),
            (eK[85] = e0),
            (eK[86] = eh))
          : (eh = eK[86]),
        eK[87] !== eh || eK[88] !== er
          ? ((ep = (0, n.jsx)(U.ic, { label: ed, description: er, control: eh })),
            (eK[87] = eh),
            (eK[88] = er),
            (eK[89] = ep))
          : (ep = eK[89]),
        eK[90] === Symbol.for("react.memo_cache_sentinel")
          ? ((em = (0, n.jsx)(eu, {})),
            (ex = (0, n.jsx)(ef, {})),
            (ey = (0, n.jsx)(eb, {})),
            (e_ = !1),
            (eK[90] = em),
            (eK[91] = ex),
            (eK[92] = ey),
            (eK[93] = e_))
          : ((em = eK[90]), (ex = eK[91]), (ey = eK[92]), (e_ = eK[93])),
        eK[94] !== tA || eK[95] !== tM
          ? ((eA = tA
              ? (0, n.jsx)(U.kG, {
                  edgeRounding: "surface",
                  label: (0, n.jsx)(h.A, {
                    id: "settings.informationSharing.rowTitle",
                    defaultMessage: "Information shared with apps",
                    description:
                      "Label for the gated Data Controls settings row that opens the page where a ChatGPT user can review and revoke app-specific permission to automatically fill contact information.",
                  }),
                  onClick: () => tM("information-sharing"),
                  trailing: (0, n.jsx)(I.uM3, {}),
                })
              : null),
            (eK[94] = tA),
            (eK[95] = tM),
            (eK[96] = eA))
          : (eA = eK[96]),
        eK[97] === Symbol.for("react.memo_cache_sentinel")
          ? ((eG = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.archivedChats",
              defaultMessage: "Archived chats",
              description: "Label for archived ChatGPT chats",
            })),
            (eK[97] = eG))
          : (eG = eK[97]),
        eK[98] === Symbol.for("react.memo_cache_sentinel")
          ? ((eN = (0, n.jsx)(U.kG, {
              edgeRounding: "surface",
              label: eG,
              to: "/settings/archived-chats",
              trailing: (0, n.jsx)(I.uM3, {}),
            })),
            (eK[98] = eN))
          : (eN = eK[98]),
        eK[99] === Symbol.for("react.memo_cache_sentinel")
          ? ((eI = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.archiveAll",
              defaultMessage: "Archive all chats",
              description: "Label for archiving all ChatGPT chats",
            })),
            (eK[99] = eI))
          : (eI = eK[99]),
        eK[100] === Symbol.for("react.memo_cache_sentinel")
          ? ((eP = (0, n.jsx)(U.ic, {
              label: eI,
              control: (0, n.jsx)(k.$, {
                color: "secondary",
                size: "toolbar",
                onClick: () => tS("archive"),
                children: (0, n.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.archive",
                  defaultMessage: "Archive all",
                  description: "Button to archive all ChatGPT chats",
                }),
              }),
            })),
            (eK[100] = eP))
          : (eP = eK[100]),
        eK[101] === Symbol.for("react.memo_cache_sentinel")
          ? ((eS = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.deleteAll",
              defaultMessage: "Delete all chats",
              description: "Label for deleting all ChatGPT chats",
            })),
            (eK[101] = eS))
          : (eS = eK[101]),
        eK[102] === Symbol.for("react.memo_cache_sentinel")
          ? ((eO = (0, n.jsx)(U.ic, {
              label: eS,
              control: (0, n.jsx)(k.$, {
                color: "danger",
                size: "toolbar",
                onClick: () => tS("delete"),
                children: (0, n.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.delete",
                  defaultMessage: "Delete all",
                  description: "Button to delete all ChatGPT chats",
                }),
              }),
            })),
            (eK[102] = eO))
          : (eO = eK[102]),
        eK[103] !== tx || eK[104] !== ty || eK[105] !== eQ
          ? ((eE = tx
              ? (0, n.jsx)(U.ic, {
                  label: (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.dataControls.export.label",
                    defaultMessage: "Export data",
                    description:
                      "Label for requesting an export of an end user’s ChatGPT account data from Data controls.",
                  }),
                  control: (0, n.jsx)(k.$, {
                    "aria-label": eQ.formatMessage({
                      id: "settings.chatGpt.dataControls.export.ariaLabel",
                      defaultMessage: "Export ChatGPT account data",
                      description:
                        "Accessible label for the button that opens the ChatGPT account data export confirmation dialog from Data controls.",
                    }),
                    color: "secondary",
                    size: "toolbar",
                    onClick: () => tG(ty),
                    children: (0, n.jsx)(h.A, {
                      id: "settings.chatGpt.dataControls.export.button",
                      defaultMessage: "Export",
                      description:
                        "Button opening the ChatGPT account data export confirmation dialog from Data controls.",
                    }),
                  }),
                })
              : null),
            (eK[103] = tx),
            (eK[104] = ty),
            (eK[105] = eQ),
            (eK[106] = eE))
          : (eE = eK[106]),
        eK[107] !== tT || eK[108] !== tw || eK[109] !== e3
          ? ((eL = e3
              ? (0, n.jsx)(U.kG, {
                  edgeRounding: "surface",
                  label: (0, n.jsx)(h.A, {
                    id: "settings.ads.settings.title",
                    defaultMessage: "Ads controls",
                    description: "Heading at the top of the advertising control settings view",
                  }),
                  onClick: () => {
                    let e = new URLSearchParams(tT)
                    ;(e.set("view", "ads"), e.delete("adsView"), tw(e))
                  },
                  trailing: (0, n.jsx)(I.uM3, {}),
                })
              : null),
            (eK[107] = tT),
            (eK[108] = tw),
            (eK[109] = e3),
            (eK[110] = eL))
          : (eL = eK[110]),
        eK[111] !== eQ || eK[112] !== tC || eK[113] !== tM
          ? ((eM = tC
              ? (0, n.jsx)(U.kG, {
                  ariaLabel: eQ.formatMessage({
                    id: "settings.chatGpt.marketingPrivacy.open.ariaLabel",
                    defaultMessage: "Open marketing privacy settings",
                    description:
                      "Accessible label for the button that opens the ChatGPT Marketing privacy subpage from Data controls.",
                  }),
                  edgeRounding: "surface",
                  label: (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.marketingPrivacy.title",
                    defaultMessage: "Marketing privacy",
                    description: "Title of the ChatGPT Marketing privacy subpage inside Data controls.",
                  }),
                  onClick: () => tM("marketing-privacy"),
                  trailing: (0, n.jsx)(I.uM3, {}),
                })
              : null),
            (eK[111] = eQ),
            (eK[112] = tC),
            (eK[113] = tM),
            (eK[114] = eM))
          : (eM = eK[114]),
        eK[115] !== el ||
        eK[116] !== ec ||
        eK[117] !== ep ||
        eK[118] !== eA ||
        eK[119] !== eE ||
        eK[120] !== eL ||
        eK[121] !== eM
          ? ((eR = (0, n.jsx)(D.X, {
              children: (0, n.jsx)(D.X.Content, {
                children: (0, n.jsxs)(H.t, {
                  children: [el, ec, ep, em, ex, ey, e_, eA, null, eN, eP, eO, eE, eL, null, eM],
                }),
              }),
            })),
            (eK[115] = el),
            (eK[116] = ec),
            (eK[117] = ep),
            (eK[118] = eA),
            (eK[119] = eE),
            (eK[120] = eL),
            (eK[121] = eM),
            (eK[122] = eR))
          : (eR = eK[122]),
        eK[123] !== tx ||
        eK[124] !== ty ||
        eK[125] !== tj ||
        eK[126] !== t_ ||
        eK[127] !== tv ||
        eK[128] !== eV.queryClient
          ? ((eD =
              tx && (tj === ty || !0 === tv)
                ? (0, n.jsx)(
                    K,
                    {
                      open: !0,
                      onOpenChange: (e) => {
                        ;(e ? tG(ty) : tG((e) => (e === ty ? null : e)), e || eV.queryClient.setQueryData(t_, !1))
                      },
                    },
                    ty,
                  )
                : null),
            (eK[123] = tx),
            (eK[124] = ty),
            (eK[125] = tj),
            (eK[126] = t_),
            (eK[127] = tv),
            (eK[128] = eV.queryClient),
            (eK[129] = eD))
          : (eD = eK[129]))
      let tR = null != tP
      ;(eK[130] === Symbol.for("react.memo_cache_sentinel")
        ? ((eU = (e) => {
            e || tS(null)
          }),
          (eK[130] = eU))
        : (eU = eK[130]),
        eK[131] !== tP || eK[132] !== tO
          ? ((eq = (e) => {
              ;(e.preventDefault(), null != tP && tO.mutate(tP))
            }),
            (eK[131] = tP),
            (eK[132] = tO),
            (eK[133] = eq))
          : (eq = eK[133]),
        eK[134] !== tP
          ? ((eH = (0, n.jsx)(G.c7, {
              title: (0, n.jsx)(j.L3, {
                children:
                  "delete" === tP
                    ? (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.deleteConfirmTitle",
                        defaultMessage: "Delete all chats?",
                        description: "Title for confirming deletion of every ChatGPT chat",
                      })
                    : (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.archiveConfirmTitle",
                        defaultMessage: "Archive all chats?",
                        description: "Title for confirming archival of every ChatGPT chat",
                      }),
              }),
            })),
            (eK[134] = tP),
            (eK[135] = eH))
          : (eH = eK[135]),
        eK[136] !== tP
          ? ((ez = (0, n.jsx)(j.rr, {
              asChild: !0,
              children: (0, n.jsx)("p", {
                className: "text-sm text-secondary",
                children:
                  "delete" === tP
                    ? (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.deleteConfirmDescription",
                        defaultMessage: "This action cannot be undone.",
                        description: "Warning before deleting every ChatGPT chat",
                      })
                    : (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.archiveConfirmDescription",
                        defaultMessage: "You can manage archived chats from Data controls.",
                        description: "Explanation before archiving every ChatGPT chat",
                      }),
              }),
            })),
            (eK[136] = tP),
            (eK[137] = ez))
          : (ez = eK[137]),
        eK[138] === Symbol.for("react.memo_cache_sentinel")
          ? ((eB = (0, n.jsx)(k.$, {
              color: "secondary",
              type: "button",
              onClick: () => tS(null),
              children: (0, n.jsx)(h.A, {
                id: "common.cancel",
                defaultMessage: "Cancel",
                description: "Cancel button",
              }),
            })),
            (eK[138] = eB))
          : (eB = eK[138]))
      let tD = "delete" === tP ? "danger" : "primary"
      return (
        eK[139] !== tP
          ? ((eF =
              "delete" === tP
                ? (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.dataControls.delete",
                    defaultMessage: "Delete all",
                    description: "Button to delete all ChatGPT chats",
                  })
                : (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.dataControls.archive",
                    defaultMessage: "Archive all",
                    description: "Button to archive all ChatGPT chats",
                  })),
            (eK[139] = tP),
            (eK[140] = eF))
          : (eF = eK[140]),
        eK[141] !== tO.isPending || eK[142] !== tD || eK[143] !== eF
          ? ((eW = (0, n.jsxs)(G.Es, {
              children: [eB, (0, n.jsx)(k.$, { color: tD, loading: tO.isPending, type: "submit", children: eF })],
            })),
            (eK[141] = tO.isPending),
            (eK[142] = tD),
            (eK[143] = eF),
            (eK[144] = eW))
          : (eW = eK[144]),
        eK[145] !== eq || eK[146] !== eH || eK[147] !== ez || eK[148] !== eW
          ? ((e$ = (0, n.jsxs)(G.R4, { as: "form", onSubmit: eq, children: [eH, ez, eW] })),
            (eK[145] = eq),
            (eK[146] = eH),
            (eK[147] = ez),
            (eK[148] = eW),
            (eK[149] = e$))
          : (e$ = eK[149]),
        eK[150] !== tR || eK[151] !== e$
          ? ((eZ = (0, n.jsx)(j.lG, { open: tR, onOpenChange: eU, children: e$ })),
            (eK[150] = tR),
            (eK[151] = e$),
            (eK[152] = eZ))
          : (eZ = eK[152]),
        eK[153] !== eR || eK[154] !== eD || eK[155] !== eZ
          ? ((eY = (0, n.jsxs)(R.P, { title: eo, children: [eR, null, eD, eZ] })),
            (eK[153] = eR),
            (eK[154] = eD),
            (eK[155] = eZ),
            (eK[156] = eY))
          : (eY = eK[156]),
        eY
      )
    }
    function eT(e) {
      return (0, n.jsx)(N.G, {
        href: "https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt",
        initiator: "external_link",
        underline: "always",
        children: e,
      })
    }
    function ew(e) {
      return (0, n.jsx)("strong", { children: e })
    }
    function ek() {}
    function ej(e) {
      return "active" === e.state && e.grants.length > 0
    }
    ;((0, P._)(i.A2),
      (0, P._)(async function () {
        return (await a.e(494463).then(a.bind(a, "hqYW"))).ClaudeImportDialog
      }))
  },
  Sg0s(e, t, a) {
    var n = a("qhRx"),
      s = a("vysM"),
      i = a("F9GV")
    a.d(
      t,
      {},
      {
        W: async function ({ accountId: e, email: t, queryClient: a, userId: r }) {
          if (null == r || null == e) return !1
          let o = await (0, n.loadBrowserChatGptAuth)()
          if (o?.userId !== r || o.accountId !== e) return !1
          let l = await (0, n.refreshBrowserChatGptAuth)({
            accessToken: o.accessToken,
            method: "POST",
            path: "/accounts/add_email/verify",
            reason: "verify_otp",
          })
          if (l?.userId !== r || l.accountId !== e) return !1
          await Promise.all([
            a.invalidateQueries({ queryKey: ["chatgpt-current-user"] }),
            a.invalidateQueries({ queryKey: ["browser-chatgpt-auth"] }),
            a.invalidateQueries({ queryKey: ["change-email-eligibility", r, e] }),
          ])
          let c = await (0, n.loadBrowserChatGptAuth)()
          return (
            c?.userId === r &&
            c.accountId === e &&
            ((0, i.d)(t), await a.invalidateQueries({ queryKey: (0, s.m)(e, r).queryKey }).catch(() => {}), !0)
          )
        },
      },
    )
  },
  PkPC(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("E2yB"),
      r = a("xSOA"),
      o = a("zd8w"),
      l = a("oyxz"),
      c = a("Ghh3"),
      d = a("zKCW"),
      u = a("ygO2"),
      h = a("JNtf"),
      p = a("mUDD"),
      g = a("zLIa"),
      m = a("GDNt"),
      f = a("Y8yr")
    a.d(
      t,
      {},
      {
        EmailDialog: function (e) {
          let t,
            a,
            x,
            y,
            b,
            _,
            v,
            C,
            A,
            T,
            w,
            k,
            j,
            G,
            N,
            I,
            P,
            S,
            O,
            E,
            L,
            M,
            R,
            D,
            U,
            q,
            H,
            z,
            B,
            F,
            W = (0, s.c)(118),
            {
              operation: $,
              socialUser: Z,
              initialEmail: Y,
              initialStep: K,
              initialError: V,
              addEmailTitle: Q,
              addEmailDescription: J,
              auth0ClientId: X,
              expectedIdentity: ee,
              onClose: et,
              onSuccess: ea,
              startChangeEmailReauth: en,
            } = e,
            [es, ei] = (0, o.useState)(void 0 === Y ? "" : Y),
            [er, eo] = (0, o.useState)(void 0 === K ? "email" : K),
            [el, ec] = (0, o.useState)(""),
            [ed, eu] = (0, o.useState)(V ?? null),
            eh = (0, o.useId)()
          ;(W[0] !== X || W[1] !== ee || W[2] !== $ || W[3] !== Z || W[4] !== en
            ? ((t = async (e) => {
                let { email: t } = e
                try {
                  "add" === $
                    ? await c.Request.safePost("/accounts/add_email/begin", {
                        requestBody: { email: t, auth0_client_id: X },
                        expectedIdentity: ee,
                      })
                    : await c.Request.safePost("/accounts/change_email/begin", {
                        requestBody: { email: t, auth0_client_id: X, remove_social_subs: !0 === Z || void 0 },
                        expectedIdentity: ee,
                      })
                } catch (e) {
                  if ("change" === $ && e instanceof m.fk && (401 === e.status || "reauth_required" === e.errorCode))
                    return (await en(t), !1)
                  throw e
                }
                return !0
              }),
              (W[0] = X),
              (W[1] = ee),
              (W[2] = $),
              (W[3] = Z),
              (W[4] = en),
              (W[5] = t))
            : (t = W[5]),
            W[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (e, t) => {
                  e && (eu(null), t.resend || (ei(t.email), ec(""), eo("otp")))
                }),
                (W[6] = a))
              : (a = W[6]),
            W[7] !== $
              ? ((x = (e, t) => {
                  "change" === $ && e instanceof m.fk && "sensitive_action_cooldown" === e.errorCode
                    ? eo("cooldown")
                    : eu((0, f.I)(e, t.resend ? "resend" : "begin", t.email))
                }),
                (W[7] = $),
                (W[8] = x))
              : (x = W[8]),
            W[9] !== t || W[10] !== x
              ? ((y = { mutationFn: t, onSuccess: a, onError: x }), (W[9] = t), (W[10] = x), (W[11] = y))
              : (y = W[11]))
          let ep = (0, r.n)(y)
          ;(W[12] !== el || W[13] !== es || W[14] !== ee || W[15] !== ea || W[16] !== $ || W[17] !== Z
            ? ((b = async () => {
                ;(await c.Request.safePost(
                  "add" === $ ? "/accounts/add_email/verify" : "/accounts/change_email/verify",
                  {
                    requestBody: { email: es, code: el, remove_social_subs: ("change" === $ && !0 === Z) || void 0 },
                    expectedIdentity: ee,
                  },
                ),
                  await ea(es))
              }),
              (W[12] = el),
              (W[13] = es),
              (W[14] = ee),
              (W[15] = ea),
              (W[16] = $),
              (W[17] = Z),
              (W[18] = b))
            : (b = W[18]),
            W[19] !== es || W[20] !== $
              ? ((_ = (e) => {
                  "change" === $ && e instanceof m.fk && "sensitive_action_cooldown" === e.errorCode
                    ? eo("cooldown")
                    : eu((0, f.I)(e, "verify", es))
                }),
                (W[19] = es),
                (W[20] = $),
                (W[21] = _))
              : (_ = W[21]),
            W[22] !== b || W[23] !== _
              ? ((v = { mutationFn: b, onError: _ }), (W[22] = b), (W[23] = _), (W[24] = v))
              : (v = W[24]))
          let eg = (0, r.n)(v),
            em = ep.isPending || eg.isPending
          if ("cooldown" === er) {
            let e, t, a, s, i, r
            return (
              W[25] !== et ? ((e = (e) => !e && et()), (W[25] = et), (W[26] = e)) : (e = W[26]),
              W[27] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, n.jsx)(p.OO, {
                    children: (0, n.jsx)(p.c7, {
                      title: (0, n.jsx)(h.L3, {
                        className: "select-none",
                        children: (0, n.jsx)(l.A, {
                          id: "settings.chatGpt.email.cooldown.title",
                          defaultMessage: "You can’t change your email yet",
                          description:
                            "Title of the account email-change dialog shown when a 24-hour security hold blocks the action. Reassure the user that this delay is temporary.",
                        }),
                      }),
                    }),
                  })),
                  (W[27] = t))
                : (t = W[27]),
              W[28] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = (0, n.jsx)(p.OO, {
                    spacing: "large",
                    children: (0, n.jsx)(h.rr, {
                      children: (0, n.jsx)(l.A, {
                        id: "settings.chatGpt.email.cooldown.description",
                        defaultMessage:
                          "For your security, you’ll need to wait 24 hours before changing your email. Your email address hasn’t changed.",
                        description:
                          "Explanation in the account email-change security-hold dialog. The user must wait 24 hours before trying again; the current address remains unchanged. No follow-up email is promised.",
                      }),
                    }),
                  })),
                  (W[28] = a))
                : (a = W[28]),
              W[29] === Symbol.for("react.memo_cache_sentinel")
                ? ((s = (0, n.jsx)(l.A, {
                    id: "settings.chatGpt.email.cooldown.home",
                    defaultMessage: "Go to ChatGPT",
                    description:
                      "Button in the account email-change security-hold dialog. Closes the dialog and opens ChatGPT home without retrying the change or clearing the hold. Preserve the ChatGPT product name.",
                  })),
                  (W[29] = s))
                : (s = W[29]),
              W[30] !== et
                ? ((i = (0, n.jsxs)(p.R4, {
                    children: [
                      t,
                      a,
                      (0, n.jsx)(p.OO, {
                        spacing: "large",
                        children: (0, n.jsx)(p.Es, {
                          children: (0, n.jsx)(u.z, { color: "secondary", to: "/", onClick: et, children: s }),
                        }),
                      }),
                    ],
                  })),
                  (W[30] = et),
                  (W[31] = i))
                : (i = W[31]),
              W[32] !== e || W[33] !== i
                ? ((r = (0, n.jsx)(h.lG, { open: !0, onOpenChange: e, children: i })),
                  (W[32] = e),
                  (W[33] = i),
                  (W[34] = r))
                : (r = W[34]),
              r
            )
          }
          ;(W[35] !== et ? ((C = (e) => !e && et()), (W[35] = et), (W[36] = C)) : (C = W[36]),
            W[37] !== el || W[38] !== es || W[39] !== em || W[40] !== ep || W[41] !== er || W[42] !== eg
              ? ((A = (e) => {
                  if ((e.preventDefault(), em)) return
                  if ((eu(null), "otp" === er)) {
                    ;/^[0-9]{6}$/.test(el) && eg.mutate()
                    return
                  }
                  let t = es.trim()
                  "" === t
                    ? eu(
                        (0, n.jsx)(l.A, {
                          id: "settings.chatGpt.email.error.emptyEmail",
                          defaultMessage: "Please enter a valid email address to continue",
                          description: "Error below the email entry field when it is empty.",
                        }),
                      )
                    : i.WL.test(t)
                      ? ep.mutate({ email: t, resend: !1 })
                      : eu(
                          (0, n.jsx)(l.A, {
                            id: "settings.chatGpt.email.error.invalidEmail",
                            defaultMessage: 'The email address "{email}" is not formatted correctly',
                            description:
                              "Error below the email entry field when the address is invalid. Email is the address the user entered.",
                            values: { email: t },
                          }),
                        )
                }),
                (W[37] = el),
                (W[38] = es),
                (W[39] = em),
                (W[40] = ep),
                (W[41] = er),
                (W[42] = eg),
                (W[43] = A))
              : (A = W[43]),
            W[44] !== er
              ? ((T =
                  "otp" === er
                    ? (0, n.jsx)(l.A, {
                        id: "settings.chatGpt.email.verify.confirmEmailTitle",
                        defaultMessage: "Verify email",
                        description: "Title for the email verification-code dialog in Account settings.",
                      })
                    : null),
                (W[44] = er),
                (W[45] = T))
              : (T = W[45]),
            W[46] !== Q || W[47] !== $ || W[48] !== er
              ? ((w =
                  "email" === er &&
                  ("add" === $
                    ? (Q ??
                      (0, n.jsx)(l.A, {
                        id: "settings.chatGpt.email.add.title",
                        defaultMessage: "Add your email",
                        description: "Title for the dialog where a phone-only user adds their first email address.",
                      }))
                    : (0, n.jsx)(l.A, {
                        id: "settings.chatGpt.email.change.title",
                        defaultMessage: "Edit email",
                        description: "Title for the dialog where a user changes their account email address.",
                      }))),
                (W[46] = Q),
                (W[47] = $),
                (W[48] = er),
                (W[49] = w))
              : (w = W[49]),
            W[50] !== T || W[51] !== w
              ? ((k = (0, n.jsx)(p.OO, {
                  children: (0, n.jsx)(p.c7, {
                    title: (0, n.jsxs)(h.L3, { className: "select-none", children: [T, w] }),
                  }),
                })),
                (W[50] = T),
                (W[51] = w),
                (W[52] = k))
              : (k = W[52]),
            W[53] !== es || W[54] !== er
              ? ((j =
                  "otp" === er
                    ? (0, n.jsx)(l.A, {
                        id: "settings.chatGpt.email.verify.instruction",
                        defaultMessage: "Enter the 6-digit code we just sent to {email} to verify your email",
                        description:
                          "Instructions for verifying an account email. Email is the destination address the user entered.",
                        values: { email: es },
                      })
                    : null),
                (W[53] = es),
                (W[54] = er),
                (W[55] = j))
              : (j = W[55]),
            W[56] !== J || W[57] !== $ || W[58] !== er
              ? ((G =
                  "email" === er &&
                  ("add" === $
                    ? (J ??
                      (0, n.jsx)(l.A, {
                        id: "settings.chatGpt.email.add.instruction",
                        defaultMessage: "Enter your email address. We’ll send a verification code to confirm it.",
                        description:
                          "Instructions above the email input when a phone-only user adds their first email.",
                      }))
                    : (0, n.jsx)(l.A, {
                        id: "settings.chatGpt.email.change.instruction",
                        defaultMessage:
                          "Enter your new email address. We’ll send a verification code to confirm the change.",
                        description: "Instructions above the destination email input when changing an account email.",
                      }))),
                (W[56] = J),
                (W[57] = $),
                (W[58] = er),
                (W[59] = G))
              : (G = W[59]),
            W[60] !== j || W[61] !== G
              ? ((N = (0, n.jsxs)(h.rr, { className: "text-sm text-secondary select-text", children: [j, G] })),
                (W[60] = j),
                (W[61] = G),
                (W[62] = N))
              : (N = W[62]),
            W[63] !== $ || W[64] !== er
              ? ((I =
                  "otp" === er && "change" === $
                    ? (0, n.jsx)(d.l, {
                        type: "warning",
                        content: (0, n.jsx)(l.A, {
                          id: "settings.chatGpt.email.verify.logoutWarning",
                          defaultMessage:
                            "Verifying this email will sign you out on all devices so we can finish updating your account. You'll need to sign back in afterward.",
                          description:
                            "Warning before confirming an email change that verification signs the user out on all devices and requires them to sign back in.",
                        }),
                      })
                    : null),
                (W[63] = $),
                (W[64] = er),
                (W[65] = I))
              : (I = W[65]),
            W[66] !== er
              ? ((P = (0, n.jsx)("span", {
                  className: "select-none",
                  children:
                    "otp" === er
                      ? (0, n.jsx)(l.A, {
                          id: "settings.chatGpt.email.verify.codeLabel",
                          defaultMessage: "Verification code",
                          description: "Accessible label for the six-digit email verification code input.",
                        })
                      : (0, n.jsx)(l.A, {
                          id: "settings.chatGpt.email.addressLabel",
                          defaultMessage: "Email address",
                          description: "Label for the destination account email address input.",
                        }),
                })),
                (W[66] = er),
                (W[67] = P))
              : (P = W[67]),
            W[68] !== el || W[69] !== es || W[70] !== ed || W[71] !== eh || W[72] !== em || W[73] !== er
              ? ((S =
                  "otp" === er
                    ? (0, n.jsx)(
                        g.pd,
                        {
                          name: "verification_code",
                          inputMode: "numeric",
                          autoComplete: "one-time-code",
                          maxLength: 6,
                          autoFocus: !0,
                          value: el,
                          onChange: (e) => {
                            ;(ec(e.target.value.replace(/\D/g, "").slice(0, 6)), eu(null))
                          },
                          disabled: em,
                          "aria-invalid": null != ed,
                          "aria-describedby": null != ed ? eh : void 0,
                        },
                        "otp",
                      )
                    : (0, n.jsx)(
                        g.pd,
                        {
                          name: "email",
                          type: "email",
                          autoComplete: "email",
                          autoFocus: !0,
                          value: es,
                          onChange: (e) => {
                            ;(ei(e.target.value), eu(null))
                          },
                          disabled: em,
                          "aria-invalid": null != ed,
                          "aria-describedby": null != ed ? eh : void 0,
                        },
                        "email",
                      )),
                (W[68] = el),
                (W[69] = es),
                (W[70] = ed),
                (W[71] = eh),
                (W[72] = em),
                (W[73] = er),
                (W[74] = S))
              : (S = W[74]),
            W[75] !== P || W[76] !== S
              ? ((O = (0, n.jsxs)("label", { className: "flex flex-col gap-2 text-sm", children: [P, S] })),
                (W[75] = P),
                (W[76] = S),
                (W[77] = O))
              : (O = W[77]),
            W[78] !== ed || W[79] !== eh
              ? ((E =
                  null != ed
                    ? (0, n.jsx)("div", { id: eh, role: "alert", className: "text-sm text-danger", children: ed })
                    : null),
                (W[78] = ed),
                (W[79] = eh),
                (W[80] = E))
              : (E = W[80]),
            W[81] !== es || W[82] !== em || W[83] !== ep || W[84] !== er
              ? ((L =
                  "otp" === er
                    ? (0, n.jsxs)("div", {
                        className: "flex items-center gap-2 text-sm select-none",
                        children: [
                          (0, n.jsx)(l.A, {
                            id: "settings.chatGpt.email.verify.resendPrompt",
                            defaultMessage: "Didn't get an email?",
                            description: "Prompt beside the action to resend the email verification code.",
                          }),
                          (0, n.jsx)(u.$, {
                            color: "ghost",
                            size: "toolbar",
                            type: "button",
                            disabled: em,
                            loading: ep.isPending,
                            onClick: () => ep.mutate({ email: es, resend: !0 }),
                            children: (0, n.jsx)(l.A, {
                              id: "settings.chatGpt.email.verify.resend",
                              defaultMessage: "Send again",
                              description: "Button that sends another verification code to the same email address.",
                            }),
                          }),
                        ],
                      })
                    : null),
                (W[81] = es),
                (W[82] = em),
                (W[83] = ep),
                (W[84] = er),
                (W[85] = L))
              : (L = W[85]),
            W[86] !== N || W[87] !== I || W[88] !== O || W[89] !== E || W[90] !== L
              ? ((M = (0, n.jsxs)(p.OO, { className: "gap-4", spacing: "large", children: [N, I, O, E, L] })),
                (W[86] = N),
                (W[87] = I),
                (W[88] = O),
                (W[89] = E),
                (W[90] = L),
                (W[91] = M))
              : (M = W[91]),
            W[92] !== et || W[93] !== er
              ? ((R = () => {
                  "otp" === er ? (eo("email"), ec(""), eu(null)) : et()
                }),
                (W[92] = et),
                (W[93] = er),
                (W[94] = R))
              : (R = W[94]),
            W[95] !== er
              ? ((D =
                  "otp" === er
                    ? (0, n.jsx)(l.A, {
                        id: "settings.chatGpt.email.verify.back",
                        defaultMessage: "Back",
                        description: "Button that returns to email entry, keeping the previously entered address.",
                      })
                    : (0, n.jsx)(l.A, {
                        id: "settings.chatGpt.email.cancel",
                        defaultMessage: "Cancel",
                        description: "Button that closes email entry without changing the account.",
                      })),
                (W[95] = er),
                (W[96] = D))
              : (D = W[96]),
            W[97] !== em || W[98] !== R || W[99] !== D
              ? ((U = (0, n.jsx)(u.$, { color: "secondary", type: "button", disabled: em, onClick: R, children: D })),
                (W[97] = em),
                (W[98] = R),
                (W[99] = D),
                (W[100] = U))
              : (U = W[100]))
          let ef = "otp" === er ? eg.isPending : ep.isPending,
            ex = em || ("otp" === er && 6 !== el.length)
          return (
            W[101] !== er
              ? ((q =
                  "otp" === er
                    ? (0, n.jsx)(l.A, {
                        id: "settings.chatGpt.email.verify.submit",
                        defaultMessage: "Verify",
                        description: "Button that submits the six-digit email verification code.",
                      })
                    : (0, n.jsx)(l.A, {
                        id: "settings.chatGpt.email.send",
                        defaultMessage: "Send verification email",
                        description: "Button that sends a verification code to the entered account email address.",
                      })),
                (W[101] = er),
                (W[102] = q))
              : (q = W[102]),
            W[103] !== ef || W[104] !== ex || W[105] !== q
              ? ((H = (0, n.jsx)(u.$, { type: "submit", color: "primary", loading: ef, disabled: ex, children: q })),
                (W[103] = ef),
                (W[104] = ex),
                (W[105] = q),
                (W[106] = H))
              : (H = W[106]),
            W[107] !== U || W[108] !== H
              ? ((z = (0, n.jsx)(p.OO, { spacing: "large", children: (0, n.jsxs)(p.Es, { children: [U, H] }) })),
                (W[107] = U),
                (W[108] = H),
                (W[109] = z))
              : (z = W[109]),
            W[110] !== A || W[111] !== k || W[112] !== M || W[113] !== z
              ? ((B = (0, n.jsxs)(p.R4, { as: "form", noValidate: !0, onSubmit: A, children: [k, M, z] })),
                (W[110] = A),
                (W[111] = k),
                (W[112] = M),
                (W[113] = z),
                (W[114] = B))
              : (B = W[114]),
            W[115] !== C || W[116] !== B
              ? ((F = (0, n.jsx)(h.lG, { open: !0, onOpenChange: C, children: B })),
                (W[115] = C),
                (W[116] = B),
                (W[117] = F))
              : (F = W[117]),
            F
          )
        },
      },
    )
  },
  Y8yr(e, t, a) {
    var n = a("ABep"),
      s = a("oyxz"),
      i = a("ASxG"),
      r = a("ZtSy"),
      o = a("GDNt")
    let l = i.object({ detail: i.literal("Email already linked to another account") })
    a.d(
      t,
      {},
      {
        I: function (e, t, a) {
          if (e instanceof o.fk) {
            switch (e.errorCode) {
              case "email_change_account_too_new":
                return (0, n.jsx)(s.A, {
                  id: "settings.chatGpt.email.error.accountTooNew",
                  defaultMessage:
                    "You can change your email address 24 hours after creating your account. Please try again later.",
                  description:
                    "Email-change error when the account was created less than 24 hours ago. The waiting period begins at account creation.",
                })
              case "email_change_rate_limited":
                if ("resend" === t) break
                return (0, n.jsx)(s.A, {
                  id: "settings.chatGpt.email.error.dailyLimit",
                  defaultMessage: "You can only change your email twice within 24 hours. Please try again later.",
                  description:
                    "Email-change error when the user has already changed their email twice within 24 hours.",
                })
              case "email_change_limit_reached":
                if ("resend" === t) break
                return (0, n.jsx)(s.A, {
                  id: "settings.chatGpt.email.error.lifetimeLimit",
                  defaultMessage: "You’ve reached the 20-email-change limit for this account",
                  description: "Email-change error when the account has reached its lifetime limit of twenty changes.",
                })
            }
            if (429 === e.status)
              return (0, n.jsx)(s.A, {
                id: "settings.chatGpt.email.error.rateLimited",
                defaultMessage:
                  "You’ve sent too many requests. Please try again later. For help, start a chat in the <helpCenterLink>Help Center</helpCenterLink>.",
                description:
                  "Email verification error after too many send or verification requests. The helpCenterLink tag opens support instructions in a new tab.",
                values: {
                  helpCenterLink: (e) =>
                    (0, n.jsx)(r.G, {
                      href: "https://help.openai.com/en/articles/6614161-how-can-i-contact-support",
                      initiator: "open_in_browser_bridge",
                      openTarget: "external-browser",
                      children: e,
                    }),
                },
              })
            if ("verify" === t && (401 === e.status || 422 === e.status))
              return (0, n.jsx)(s.A, {
                id: "settings.chatGpt.email.error.invalidCode",
                defaultMessage: "The code you entered is invalid. Please try again.",
                description: "Email verification error when the submitted six-digit code is invalid or expired.",
              })
            if (403 === e.status) {
              if ("begin" !== t)
                return (0, n.jsx)(s.A, {
                  id: "settings.chatGpt.email.error.alreadyLinked",
                  defaultMessage: '"{email}" is already linked to another account',
                  description:
                    "Email verification error when the entered destination email is already used by a different account. Email is the address the user entered.",
                  values: { email: a },
                })
              if (
                (function (e) {
                  try {
                    return l.safeParse(JSON.parse(e.message)).success
                  } catch {
                    return !1
                  }
                })(e)
              )
                return (0, n.jsx)(s.A, {
                  id: "settings.chatGpt.email.error.chooseAnotherEmail",
                  defaultMessage:
                    "This email address is already linked to another account. Please choose a different email address.",
                  description:
                    "Error when sending a code to an email address already linked to another account. The user must choose a different destination address.",
                })
            }
          }
          return "resend" === t
            ? (0, n.jsx)(s.A, {
                id: "settings.chatGpt.email.error.sendFailed",
                defaultMessage: "Could not send email verification code, please try again later",
                description: "Generic error after resending an email verification code fails.",
              })
            : (0, n.jsx)(s.A, {
                id: "settings.chatGpt.email.error.generic",
                defaultMessage: "Something went wrong, please try again later",
                description: "Generic error when sending or verifying an email verification code fails.",
              })
        },
      },
    )
  },
  F9GV(e, t, a) {
    var n = a("y3LV"),
      s = a("ASxG")
    let i = s.looseObject({
      isOptedOut: s.boolean(),
      user: s.union([s.looseObject({ email: s.string() }), s.looseObject({ phoneNumber: s.string() })]).optional(),
    })
    a.d(
      t,
      {},
      {
        d: function (e) {
          try {
            let t = (0, n.getCookie)("oai-client-auth-info")
            if ("string" != typeof t) return
            let a = i.parse(JSON.parse(t))
            if (a.isOptedOut || null == a.user || a.user.email === e) return
            ;(0, n.setCookie)(
              "oai-client-auth-info",
              JSON.stringify({ ...a, user: { ...a.user, phoneNumber: void 0, email: e, timestamp: Date.now() } }),
              { path: "/", sameSite: "lax", maxAge: 2592e3 },
            )
          } catch {}
        },
      },
    )
  },
  vysM(e, t, a) {
    var n = a("ASxG"),
      s = a("Ghh3")
    n.object({ recommended_factors: n.array(n.literal("sms")) })
    let i = n.object({
      decision_id: n
        .string()
        .optional()
        .catch(void 0),
      policy_version: n
        .string()
        .optional()
        .catch(void 0),
      recommendations: n.array(n.object({ id: n.string().min(1) })).max(3),
    })
    a.d(
      t,
      {},
      {
        m: function (e, t) {
          return {
            queryKey: ["chatgpt-security", e, "recommendations", t],
            queryFn: async ({ signal: a }) => {
              if (!t) throw Error("Cannot load security recommendations without a user")
              let n = await s.Request.safeGet("/accounts/security/recommendations", {
                additionalHeaders: { "ChatGPT-Account-ID": e },
                expectedIdentity: { accountId: e, userId: t },
                signal: a,
                retry: !1,
              })
              return i.parse(n)
            },
            staleTime: 0,
            gcTime: 0,
            retry: !1,
            placeholderData: void 0,
          }
        },
      },
    )
  },
  sPCu(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("irkb"),
      r = a("T0Rc"),
      o = a("uris"),
      l = a("cE8H"),
      c = a("xSOA"),
      d = a("zTeN"),
      u = a("DBCl"),
      h = a("zd8w"),
      p = a("Wf1j"),
      g = a("oyxz"),
      m = a("Qgfj"),
      f = a("SPnB"),
      x = a("Ghh3"),
      y = a("jEN2"),
      b = a("ygO2"),
      _ = a("JNtf"),
      v = a("mUDD"),
      C = a("ZtSy"),
      A = a("GO7r"),
      T = a("wZQ4"),
      w = a("RNul"),
      k = a("SGsN"),
      j = a("OWtl"),
      G = a("rvFo")
    let N = new URL(u.WaA).origin
    function I(e) {
      let t,
        a,
        u,
        m,
        f,
        x,
        y,
        C,
        A,
        w,
        I,
        U,
        H,
        z,
        B,
        F,
        W,
        $,
        Z,
        Y,
        K,
        V,
        Q,
        J,
        X,
        ee,
        et,
        ea,
        en,
        es,
        ei,
        er,
        eo,
        el,
        ec,
        ed,
        eu,
        eh,
        ep,
        eg = (0, s.c)(117),
        { accountId: em, open: ef, onCloseAutoFocus: ex, onOpenChange: ey, triggerContent: eb } = e,
        e_ = (0, d.gh)(j.u),
        ev = (0, p.A)(),
        eC = (0, i.jE)(),
        [eA, eT] = (0, h.useState)(!1),
        ew = (0, h.useRef)(null)
      eg[0] !== em ? ((t = ["chatgpt-shared-links", em]), (eg[0] = em), (eg[1] = t)) : (t = eg[1])
      let ek = t
      ;(eg[2] !== ek ? ((a = [...ek, "conversations"]), (eg[2] = ek), (eg[3] = a)) : (a = eg[3]),
        eg[4] !== ef || eg[5] !== a
          ? ((u = { enabled: ef, queryKey: a, queryFn: R, staleTime: G.D.ONE_MINUTE }),
            (eg[4] = ef),
            (eg[5] = a),
            (eg[6] = u))
          : (u = eg[6]))
      let ej = (0, r.I)(u)
      ;(eg[7] !== ek ? ((m = [...ek, "textdocs"]), (eg[7] = ek), (eg[8] = m)) : (m = eg[8]),
        eg[9] !== ef || eg[10] !== m
          ? ((f = { enabled: ef, queryKey: m, queryFn: M, staleTime: G.D.ONE_MINUTE }),
            (eg[9] = ef),
            (eg[10] = m),
            (eg[11] = f))
          : (f = eg[11]))
      let eG = (0, r.I)(f),
        eN = (0, h.useRef)(null)
      ;(eg[12] !== ek ? ((x = [...ek, "posts"]), (eg[12] = ek), (eg[13] = x)) : (x = eg[13]),
        eg[14] !== ef || eg[15] !== x
          ? ((y = {
              enabled: ef,
              queryKey: x,
              initialPageParam: void 0,
              queryFn: L,
              getNextPageParam: E,
              staleTime: G.D.ONE_MINUTE,
            }),
            (eg[14] = ef),
            (eg[15] = x),
            (eg[16] = y))
          : (y = eg[16]))
      let eI = (0, o.q)(y)
      eg[17] !== ek ? ((C = [...ek, "delete-all"]), (eg[17] = ek), (eg[18] = C)) : (C = eg[18])
      let eP = C
      eg[19] !== eP ? ((A = { mutationKey: eP, exact: !0 }), (eg[19] = eP), (eg[20] = A)) : (A = eg[20])
      let eS = (0, l.l)(A) > 0
      ;(eg[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = () => {
            eT(!1)
          }),
          (eg[21] = w))
        : (w = eg[21]),
        eg[22] !== ev || eg[23] !== e_
          ? ((I = () => {
              e_.get(k.Id).danger(
                ev.formatMessage({
                  id: "settings.chatGpt.sharedLinks.deleteAllError",
                  defaultMessage: "Could not delete shared links",
                  description:
                    "Error toast shown when a user cannot revoke all shared ChatGPT links from the Shared links management dialog",
                }),
                { errorAnalytics: { toastId: "delete_all_shared_links_failed" } },
              )
            }),
            (eg[22] = ev),
            (eg[23] = e_),
            (eg[24] = I))
          : (I = eg[24]),
        eg[25] !== eC || eg[26] !== ek
          ? ((U = () => eC.invalidateQueries({ queryKey: ek })), (eg[25] = eC), (eg[26] = ek), (eg[27] = U))
          : (U = eg[27]),
        eg[28] !== eP || eg[29] !== I || eg[30] !== U
          ? ((H = { mutationKey: eP, mutationFn: q, onSuccess: w, onError: I, onSettled: U }),
            (eg[28] = eP),
            (eg[29] = I),
            (eg[30] = U),
            (eg[31] = H))
          : (H = eg[31]))
      let { mutate: eO } = (0, c.n)(H)
      if (eg[32] !== em || eg[33] !== ef || eg[34] !== ej || eg[35] !== eI || eg[36] !== eG) {
        let e = eI.data?.pages.flatMap(O) ?? [],
          t = eI.hasNextPage ? e.reduce(S, 1 / 0) : -1 / 0
        if (
          ((W = (function ({ conversations: e, posts: t, textdocs: a }) {
            return [
              ...e.map((e) => ({
                href: `${N}/share/${null == e.workspace_id ? "" : "e/"}${encodeURIComponent(e.id)}`,
                id: e.id,
                kind: "conversation",
                sharedAt: null == e.create_time ? 0 : Date.parse(e.create_time),
                title: e.title ?? null,
                type: "chat",
              })),
              ...a.map((e) => ({
                href: `${N}/canvas/shared/${encodeURIComponent(e.shared_textdoc_id)}`,
                id: e.shared_textdoc_id,
                kind: "textdoc",
                sharedAt: Date.parse(e.created_at),
                title: e.name,
                type: "canvas",
              })),
              ...t.map((e) => {
                var t
                return {
                  href: e.permalink ?? `${N}/s/${encodeURIComponent(e.id)}`,
                  id: e.id,
                  kind: "post",
                  sharedAt: 1e3 * e.posted_at,
                  title: e.text,
                  type:
                    (t = e).id.startsWith("task_") || t.id.startsWith("shareauto_")
                      ? "task"
                      : t.attachments.some((e) => "media_generation" === e.kind)
                        ? "image"
                        : "post",
                }
              }),
            ].sort((e, t) => t.sharedAt - e.sharedAt)
          })({ conversations: ej.data?.items ?? [], posts: e, textdocs: eG.data?.shared_textdocs ?? [] }).filter(
            (e) => e.sharedAt >= t,
          )),
          (F = ej.isLoading || eG.isLoading || eI.isLoading),
          (B = ej.isError || eG.isError || (eI.isError && !eI.isFetchNextPageError)),
          F)
        ) {
          let e
          ;(eg[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("p", {
                className: "py-8 text-center text-sm text-secondary",
                role: "status",
                children: (0, n.jsx)(g.A, {
                  id: "settings.chatGpt.sharedLinks.loading",
                  defaultMessage: "Loading shared links…",
                  description: "Loading status in the ChatGPT Shared links management dialog",
                }),
              })),
              (eg[41] = e))
            : (e = eg[41]),
            (z = e))
        } else if (B) {
          let e, t, a, s
          ;(eg[42] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("p", {
                className: "text-sm text-secondary",
                role: "alert",
                children: (0, n.jsx)(g.A, {
                  id: "settings.chatGpt.sharedLinks.loadError",
                  defaultMessage: "Could not load shared links",
                  description: "Error message shown when ChatGPT shared links cannot be loaded",
                }),
              })),
              (eg[42] = e))
            : (e = eg[42]),
            eg[43] !== ej || eg[44] !== eI || eg[45] !== eG
              ? ((t = () => {
                  Promise.all([ej.refetch(), eG.refetch(), eI.refetch()])
                }),
                (eg[43] = ej),
                (eg[44] = eI),
                (eg[45] = eG),
                (eg[46] = t))
              : (t = eg[46]),
            eg[47] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)(g.A, {
                  id: "common.retry",
                  defaultMessage: "Retry",
                  description: "Button to retry an operation after an error",
                })),
                (eg[47] = a))
              : (a = eg[47]),
            eg[48] !== t
              ? ((s = (0, n.jsxs)("div", {
                  className: "flex flex-col items-center gap-3 py-8 text-center",
                  children: [e, (0, n.jsx)(b.$, { color: "secondary", onClick: t, children: a })],
                })),
                (eg[48] = t),
                (eg[49] = s))
              : (s = eg[49]),
            (z = s))
        } else if (0 !== W.length || eI.hasNextPage) {
          let e, t, a, s, i, r, o, l
          ;(eg[51] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("th", {
                className: "px-3 py-2 text-start font-medium",
                scope: "col",
                children: (0, n.jsx)(g.A, {
                  id: "settings.chatGpt.sharedLinks.name",
                  defaultMessage: "Name",
                  description: "Name column heading in the ChatGPT Shared links management table",
                }),
              })),
              (eg[51] = e))
            : (e = eg[51]),
            eg[52] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)("th", {
                  className: "px-3 py-2 text-start font-medium",
                  scope: "col",
                  children: (0, n.jsx)(g.A, {
                    id: "settings.chatGpt.sharedLinks.type",
                    defaultMessage: "Type",
                    description: "Content type column heading in the ChatGPT Shared links management table",
                  }),
                })),
                (eg[52] = t))
              : (t = eg[52]),
            eg[53] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)("th", {
                  className: "px-3 py-2 text-start font-medium",
                  scope: "col",
                  children: (0, n.jsx)(g.A, {
                    id: "settings.chatGpt.sharedLinks.dateShared",
                    defaultMessage: "Date shared",
                    description: "Date column heading in the ChatGPT Shared links management table",
                  }),
                })),
                (eg[53] = a))
              : (a = eg[53]),
            eg[54] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, n.jsx)("thead", {
                  className:
                    "sticky top-0 border-b border-default bg-surface text-codex-description select-none max-sm:sr-only",
                  children: (0, n.jsxs)("tr", {
                    children: [
                      e,
                      t,
                      a,
                      (0, n.jsx)("th", {
                        className: "w-px px-3 py-2",
                        scope: "col",
                        children: (0, n.jsx)("span", {
                          className: "sr-only",
                          children: (0, n.jsx)(g.A, {
                            id: "settings.chatGpt.sharedLinks.actions",
                            defaultMessage: "Actions",
                            description: "Accessible heading for actions in the ChatGPT Shared links management table",
                          }),
                        }),
                      }),
                    ],
                  }),
                })),
                (eg[54] = s))
              : (s = eg[54]),
            eg[55] !== em
              ? ((i = (e) => (0, n.jsx)(D, { accountId: em, sharedLink: e }, `${em}:${e.kind}:${e.id}`)),
                (eg[55] = em),
                (eg[56] = i))
              : (i = eg[56]))
          let c = (0, n.jsx)("tbody", { className: "max-sm:block", children: W.map(i) })
          ;(eg[57] !== c
            ? ((r = (0, n.jsxs)("table", {
                className: "w-full border-collapse text-start text-sm max-sm:block",
                children: [s, c],
              })),
              (eg[57] = c),
              (eg[58] = r))
            : (r = eg[58]),
            eg[59] !== ef || eg[60] !== eI
              ? ((o = eI.isFetchNextPageError
                  ? (0, n.jsx)(b.$, {
                      color: "secondary",
                      onClick: () => void eI.fetchNextPage(),
                      children: (0, n.jsx)(g.A, {
                        id: "common.retry",
                        defaultMessage: "Retry",
                        description: "Button to retry an operation after an error",
                      }),
                    })
                  : (0, n.jsx)(T.D, {
                      hasNextPage: ef && eI.hasNextPage,
                      isFetchingNextPage: eI.isFetchingNextPage,
                      onLoadNextPage: () => void eI.fetchNextPage({ cancelRefetch: !1 }),
                      rootRef: eN,
                    })),
                (eg[59] = ef),
                (eg[60] = eI),
                (eg[61] = o))
              : (o = eg[61]),
            eg[62] !== r || eg[63] !== o
              ? ((l = (0, n.jsxs)("div", {
                  ref: eN,
                  className: "min-h-0 overflow-auto rounded-xl border border-default",
                  children: [r, o],
                })),
                (eg[62] = r),
                (eg[63] = o),
                (eg[64] = l))
              : (l = eg[64]),
            (z = l))
        } else {
          let e
          ;(eg[50] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("p", {
                className: "py-8 text-center text-sm text-secondary",
                children: (0, n.jsx)(g.A, {
                  id: "settings.chatGpt.sharedLinks.empty",
                  defaultMessage: "You have no shared links",
                  description: "Empty state in the ChatGPT Shared links management dialog",
                }),
              })),
              (eg[50] = e))
            : (e = eg[50]),
            (z = e))
        }
        ;((eg[32] = em),
          (eg[33] = ef),
          (eg[34] = ej),
          (eg[35] = eI),
          (eg[36] = eG),
          (eg[37] = z),
          (eg[38] = B),
          (eg[39] = F),
          (eg[40] = W))
      } else ((z = eg[37]), (B = eg[38]), (F = eg[39]), (W = eg[40]))
      ;(eg[65] !== ex ? (($ = { onCloseAutoFocus: ex }), (eg[65] = ex), (eg[66] = $)) : ($ = eg[66]),
        eg[67] !== eS || eg[68] !== ey
          ? ((Z = (e) => {
              eS || (e || eT(!1), ey(e))
            }),
            (eg[67] = eS),
            (eg[68] = ey),
            (eg[69] = Z))
          : (Z = eg[69]),
        eg[70] === Symbol.for("react.memo_cache_sentinel")
          ? ((Y = (0, n.jsx)(_.L3, {
              children: (0, n.jsx)(g.A, {
                id: "settings.chatGpt.sharedLinks.title",
                defaultMessage: "Shared links",
                description: "Title of the ChatGPT Shared links management dialog",
              }),
            })),
            (eg[70] = Y))
          : (Y = eg[70]),
        eg[71] === Symbol.for("react.memo_cache_sentinel")
          ? ((K = (0, n.jsx)(v.c7, {
              className: "px-5 pt-5",
              title: Y,
              subtitle: (0, n.jsx)(_.rr, {
                children: (0, n.jsx)(g.A, {
                  id: "settings.chatGpt.sharedLinks.description",
                  defaultMessage:
                    "Anyone with a shared link can view the shared image, message, chat, or scheduled task. Deleting a shared link stops others from viewing that shared content. It does not delete your original content. <link>Learn more</link>",
                  description:
                    "Explanation in the ChatGPT Shared links management dialog. It tells users that link recipients can view shared content, removing a link revokes access, and original content remains. The link tag opens a help article.",
                  values: { link: P },
                }),
              }),
            })),
            (eg[71] = K))
          : (K = eg[71]),
        eg[72] !== z
          ? ((V = (0, n.jsx)("div", { className: "flex min-h-0 flex-1 flex-col px-5", children: z })),
            (eg[72] = z),
            (eg[73] = V))
          : (V = eg[73]),
        eg[74] !== eS || eg[75] !== B || eg[76] !== F || eg[77] !== W
          ? ((Q =
              F || B || !(W.length > 0)
                ? null
                : (0, n.jsx)(v.Es, {
                    className: "px-5 pb-5",
                    expandSingleButton: !1,
                    children: (0, n.jsx)(b.$, {
                      ref: ew,
                      color: "danger",
                      disabled: eS,
                      onClick: () => eT(!0),
                      children: (0, n.jsx)(g.A, {
                        id: "settings.chatGpt.sharedLinks.deleteAll",
                        defaultMessage: "Delete all shared links",
                        description:
                          "Destructive button in the ChatGPT Shared links management dialog that starts confirmation to revoke every shared link",
                      }),
                    }),
                  })),
            (eg[74] = eS),
            (eg[75] = B),
            (eg[76] = F),
            (eg[77] = W),
            (eg[78] = Q))
          : (Q = eg[78]),
        eg[79] !== V || eg[80] !== Q
          ? ((J = (0, n.jsxs)(v.R4, { className: "gap-4", size: "full", variant: "chatgpt", children: [K, V, Q] })),
            (eg[79] = V),
            (eg[80] = Q),
            (eg[81] = J))
          : (J = eg[81]),
        eg[82] !== ef || eg[83] !== $ || eg[84] !== Z || eg[85] !== J || eg[86] !== eb
          ? ((X = (0, n.jsx)(_.lG, {
              open: ef,
              triggerContent: eb,
              contentProps: $,
              onOpenChange: Z,
              size: "xwideTall",
              variant: "chatgpt",
              children: J,
            })),
            (eg[82] = ef),
            (eg[83] = $),
            (eg[84] = Z),
            (eg[85] = J),
            (eg[86] = eb),
            (eg[87] = X))
          : (X = eg[87]))
      let eE = ef && (eA || eS)
      eg[88] !== eS
        ? ((ee = (e) => {
            eS || eT(e)
          }),
          (eg[88] = eS),
          (eg[89] = ee))
        : (ee = eg[89])
      let eL = !eS
      return (
        eg[90] === Symbol.for("react.memo_cache_sentinel")
          ? ((et = {
              onCloseAutoFocus: (e) => {
                ;(e.preventDefault(), document.activeElement === document.body && ew.current?.focus())
              },
            }),
            (eg[90] = et))
          : (et = eg[90]),
        eg[91] !== eO || eg[92] !== eS
          ? ((ea = (e) => {
              ;(e.preventDefault(), eS || (e.currentTarget.closest('[role="dialog"]')?.focus(), eO()))
            }),
            (eg[91] = eO),
            (eg[92] = eS),
            (eg[93] = ea))
          : (ea = eg[93]),
        eg[94] === Symbol.for("react.memo_cache_sentinel")
          ? ((en = (0, n.jsx)(v.c7, {
              title: (0, n.jsx)(_.L3, {
                children: (0, n.jsx)(g.A, {
                  id: "settings.chatGpt.sharedLinks.deleteAllConfirmTitle",
                  defaultMessage: "Delete all shared links?",
                  description: "Title of the confirmation dialog before revoking every shared ChatGPT link",
                }),
              }),
            })),
            (eg[94] = en))
          : (en = eg[94]),
        eg[95] === Symbol.for("react.memo_cache_sentinel")
          ? ((es = (0, n.jsx)(_.rr, {
              asChild: !0,
              children: (0, n.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, n.jsx)(g.A, {
                  id: "settings.chatGpt.sharedLinks.deleteAllConfirmDescription",
                  defaultMessage:
                    "People with these links will no longer be able to view the shared content. Your original content will not be deleted.",
                  description:
                    "Warning in the confirmation dialog before revoking every shared ChatGPT link; it clarifies that original content remains",
                }),
              }),
            })),
            (eg[95] = es))
          : (es = eg[95]),
        eg[96] === Symbol.for("react.memo_cache_sentinel")
          ? ((ei = () => eT(!1)),
            (er = (0, n.jsx)(g.A, { id: "common.cancel", defaultMessage: "Cancel", description: "Cancel button" })),
            (eg[96] = ei),
            (eg[97] = er))
          : ((ei = eg[96]), (er = eg[97])),
        eg[98] !== eS
          ? ((eo = (0, n.jsx)(b.$, { color: "secondary", disabled: eS, type: "button", onClick: ei, children: er })),
            (eg[98] = eS),
            (eg[99] = eo))
          : (eo = eg[99]),
        eg[100] === Symbol.for("react.memo_cache_sentinel")
          ? ((el = (0, n.jsx)(g.A, {
              id: "settings.chatGpt.sharedLinks.deleteAllConfirm",
              defaultMessage: "Delete all",
              description: "Button confirming revocation of every shared ChatGPT link",
            })),
            (eg[100] = el))
          : (el = eg[100]),
        eg[101] !== eS
          ? ((ec = (0, n.jsx)(b.$, { color: "dangerSolid", loading: eS, type: "submit", children: el })),
            (eg[101] = eS),
            (eg[102] = ec))
          : (ec = eg[102]),
        eg[103] !== eo || eg[104] !== ec
          ? ((ed = (0, n.jsxs)(v.Es, { children: [eo, ec] })), (eg[103] = eo), (eg[104] = ec), (eg[105] = ed))
          : (ed = eg[105]),
        eg[106] !== ea || eg[107] !== ed
          ? ((eu = (0, n.jsxs)(v.R4, { as: "form", onSubmit: ea, children: [en, es, ed] })),
            (eg[106] = ea),
            (eg[107] = ed),
            (eg[108] = eu))
          : (eu = eg[108]),
        eg[109] !== eE || eg[110] !== ee || eg[111] !== eL || eg[112] !== eu
          ? ((eh = (0, n.jsx)(_.lG, {
              open: eE,
              onOpenChange: ee,
              showDialogClose: eL,
              contentProps: et,
              children: eu,
            })),
            (eg[109] = eE),
            (eg[110] = ee),
            (eg[111] = eL),
            (eg[112] = eu),
            (eg[113] = eh))
          : (eh = eg[113]),
        eg[114] !== X || eg[115] !== eh
          ? ((ep = (0, n.jsxs)(n.Fragment, { children: [X, eh] })), (eg[114] = X), (eg[115] = eh), (eg[116] = ep))
          : (ep = eg[116]),
        ep
      )
    }
    function P(e) {
      return (0, n.jsx)(
        C.G,
        {
          appearance: "secondary",
          href: "https://help.openai.com/en/articles/7925741-chatgpt-shared-links-faq",
          initiator: "open_in_browser_bridge",
          isBrowserEnabled: !1,
          openTarget: "external-browser",
          children: e,
        },
        "learn-more",
      )
    }
    function S(e, t) {
      return Math.min(e, 1e3 * t.posted_at)
    }
    function O(e) {
      return e.items
    }
    function E(e) {
      return e.cursor ?? void 0
    }
    function L(e) {
      let { pageParam: t, signal: a } = e
      return x.Request.safeGet("/share/posts/mine", { parameters: { query: { limit: 10, cursor: t } }, signal: a })
    }
    function M() {
      return x.Request.safeGet("/shared_textdocs")
    }
    function R() {
      return x.Request.safeGet("/shared_conversations", { parameters: { query: { order: "created" } } })
    }
    function D(e) {
      let t,
        a,
        r,
        o,
        u,
        h,
        f,
        y,
        _,
        v,
        T,
        G,
        N,
        I,
        P,
        S,
        O = (0, s.c)(49),
        { accountId: E, sharedLink: L } = e,
        M = (0, d.gh)(j.u),
        R = (0, p.A)(),
        D = (0, i.jE)()
      O[0] !== E || O[1] !== L.id || O[2] !== L.kind
        ? ((t = ["chatgpt-shared-links", E, "delete", L.kind, L.id]),
          (O[0] = E),
          (O[1] = L.id),
          (O[2] = L.kind),
          (O[3] = t))
        : (t = O[3])
      let q = t
      O[4] !== q ? ((a = { mutationKey: q, exact: !0 }), (O[4] = q), (O[5] = a)) : (a = O[5])
      let H = (0, l.l)(a) > 0
      ;(O[6] !== L.id || O[7] !== L.kind
        ? ((r = async () => {
            switch (L.kind) {
              case "conversation":
                await x.Request.safeDelete("/share/{shared_conversation_id}", {
                  parameters: { path: { shared_conversation_id: L.id } },
                })
                break
              case "textdoc":
                await x.Request.safeDelete("/textdoc/shared/{shared_textdoc_id}", {
                  parameters: { path: { shared_textdoc_id: L.id } },
                })
                break
              case "post":
                await x.Request.safeDelete("/share/post/{post_id}", { parameters: { path: { post_id: L.id } } })
            }
          }),
          (O[6] = L.id),
          (O[7] = L.kind),
          (O[8] = r))
        : (r = O[8]),
        O[9] !== E || O[10] !== D
          ? ((o = () => D.invalidateQueries({ queryKey: ["chatgpt-shared-links", E] })),
            (O[9] = E),
            (O[10] = D),
            (O[11] = o))
          : (o = O[11]),
        O[12] !== R || O[13] !== M || O[14] !== L.kind
          ? ((u = () => {
              M.get(k.Id).danger(
                R.formatMessage({
                  id: "settings.chatGpt.sharedLinks.deleteError",
                  defaultMessage: "Could not delete shared link",
                  description:
                    "Error toast shown when a user cannot revoke one shared ChatGPT link from the Shared links management dialog",
                }),
                {
                  errorAnalytics: {
                    toastId: "post" === L.kind ? "delete_shared_post_failed" : "delete_shared_link_failed",
                  },
                },
              )
            }),
            (O[12] = R),
            (O[13] = M),
            (O[14] = L.kind),
            (O[15] = u))
          : (u = O[15]),
        O[16] !== q || O[17] !== r || O[18] !== o || O[19] !== u
          ? ((h = { mutationKey: q, mutationFn: r, onSuccess: o, onError: u }),
            (O[16] = q),
            (O[17] = r),
            (O[18] = o),
            (O[19] = u),
            (O[20] = h))
          : (h = O[20]))
      let { mutate: z } = (0, c.n)(h),
        B = L.title ?? L.href
      return (
        O[21] !== L.title
          ? ((f =
              L.title ??
              (0, n.jsx)(g.A, {
                id: "settings.chatGpt.sharedLinks.fallbackName",
                defaultMessage: "Shared link",
                description:
                  "Fallback name for shared ChatGPT content without a title in the Shared links management table",
              })),
            (O[21] = L.title),
            (O[22] = f))
          : (f = O[22]),
        O[23] !== L.href || O[24] !== B || O[25] !== f
          ? ((y = (0, n.jsx)("td", {
              className: "w-1/2 px-3 py-2 max-sm:col-start-1 max-sm:w-auto max-sm:pb-0",
              children: (0, n.jsx)(C.G, {
                className: "block wrap-anywhere underline",
                href: L.href,
                initiator: "open_in_browser_bridge",
                isBrowserEnabled: !1,
                openTarget: "external-browser",
                title: B,
                children: f,
              }),
            })),
            (O[23] = L.href),
            (O[24] = B),
            (O[25] = f),
            (O[26] = y))
          : (y = O[26]),
        O[27] !== L.type
          ? ((_ = (0, n.jsx)("td", {
              className: "px-3 py-2 text-secondary max-sm:col-start-1 max-sm:py-0",
              children: (0, n.jsx)(U, { type: L.type }),
            })),
            (O[27] = L.type),
            (O[28] = _))
          : (_ = O[28]),
        O[29] !== L.sharedAt
          ? ((v =
              L.sharedAt > 0
                ? (0, n.jsx)(m.XU, { value: L.sharedAt, day: "numeric", month: "long", year: "numeric" })
                : null),
            (O[29] = L.sharedAt),
            (O[30] = v))
          : (v = O[30]),
        O[31] !== v
          ? ((T = (0, n.jsx)("td", {
              className: "px-3 py-2 text-secondary max-sm:col-start-1 max-sm:pt-0",
              children: v,
            })),
            (O[31] = v),
            (O[32] = T))
          : (T = O[32]),
        O[33] !== R
          ? ((G = R.formatMessage({
              id: "settings.chatGpt.sharedLinks.delete",
              defaultMessage: "Delete shared link",
              description:
                "Accessible label for the icon button that revokes one link in the ChatGPT Shared links management table",
            })),
            (O[33] = R),
            (O[34] = G))
          : (G = O[34]),
        O[35] !== z ? ((N = () => z()), (O[35] = z), (O[36] = N)) : (N = O[36]),
        O[37] !== H
          ? ((I = H ? (0, n.jsx)(w.y, { className: "size-4" }) : (0, n.jsx)(A.cSG, {})), (O[37] = H), (O[38] = I))
          : (I = O[38]),
        O[39] !== H || O[40] !== G || O[41] !== N || O[42] !== I
          ? ((P = (0, n.jsx)("td", {
              className: "px-3 py-2 text-end max-sm:col-start-2 max-sm:row-span-3 max-sm:row-start-1 max-sm:self-start",
              children: (0, n.jsx)(b.$, {
                "aria-busy": H,
                "aria-label": G,
                color: "ghost",
                disabled: H,
                onClick: N,
                size: "icon",
                children: I,
              }),
            })),
            (O[39] = H),
            (O[40] = G),
            (O[41] = N),
            (O[42] = I),
            (O[43] = P))
          : (P = O[43]),
        O[44] !== _ || O[45] !== T || O[46] !== P || O[47] !== y
          ? ((S = (0, n.jsxs)("tr", {
              className: "border-b border-default last:border-b-0 max-sm:grid max-sm:grid-cols-[minmax(0,1fr)_auto]",
              children: [y, _, T, P],
            })),
            (O[44] = _),
            (O[45] = T),
            (O[46] = P),
            (O[47] = y),
            (O[48] = S))
          : (S = O[48]),
        S
      )
    }
    function U(e) {
      let t = (0, s.c)(5),
        { type: a } = e
      switch (a) {
        case "canvas": {
          let e
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(g.A, {
                  id: "settings.chatGpt.sharedLinks.type.canvas",
                  defaultMessage: "Canvas",
                  description: "Content type for a shared ChatGPT canvas in the Shared links management table",
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        }
        case "chat": {
          let e
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(g.A, {
                  id: "settings.chatGpt.sharedLinks.type.chat",
                  defaultMessage: "Chat",
                  description: "Content type for a shared ChatGPT chat in the Shared links management table",
                })),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "image": {
          let e
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(g.A, {
                  id: "settings.chatGpt.sharedLinks.type.image",
                  defaultMessage: "Image",
                  description: "Content type for a shared generated image in the ChatGPT Shared links management table",
                })),
                (t[2] = e))
              : (e = t[2]),
            e
          )
        }
        case "post": {
          let e
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(g.A, {
                  id: "settings.chatGpt.sharedLinks.type.post",
                  defaultMessage: "Post",
                  description: "Content type for a shared ChatGPT post in the Shared links management table",
                })),
                (t[3] = e))
              : (e = t[3]),
            e
          )
        }
        case "task": {
          let e
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)(g.A, {
                  id: "settings.chatGpt.sharedLinks.type.task",
                  defaultMessage: "Scheduled task",
                  description: "Content type for a shared ChatGPT scheduled task in the Shared links management table",
                })),
                (t[4] = e))
              : (e = t[4]),
            e
          )
        }
      }
    }
    async function q() {
      let e = (
        await Promise.allSettled([
          x.Request.safeDelete("/share/all", { requestBody: { confirm: !0 } }),
          x.Request.safeDelete("/shared_textdocs", {}),
          x.Request.safeDelete("/share/posts/mine", {}),
        ])
      ).find((e) => "rejected" === e.status)
      if (null != e) throw e.reason
    }
    a.d(
      t,
      {},
      {
        SharedLinksModal: function (e) {
          let t,
            a,
            i,
            r = (0, s.c)(9),
            { accountId: o, onClose: l } = e,
            c = (0, d.Ul)(f.chatGptAuthenticatedAccountId$) === o
          return (
            r[0] !== c
              ? ((t = (e) => {
                  ;(e.preventDefault(), c && document.activeElement === document.body && (0, y.xJ)())
                }),
                (r[0] = c),
                (r[1] = t))
              : (t = r[1]),
            r[2] !== l
              ? ((a = (e) => {
                  e || l()
                }),
                (r[2] = l),
                (r[3] = a))
              : (a = r[3]),
            r[4] !== o || r[5] !== c || r[6] !== t || r[7] !== a
              ? ((i = (0, n.jsx)(I, { accountId: o, open: c, onCloseAutoFocus: t, onOpenChange: a })),
                (r[4] = o),
                (r[5] = c),
                (r[6] = t),
                (r[7] = a),
                (r[8] = i))
              : (i = r[8]),
            i
          )
        },
        V: I,
      },
    )
  },
  BSnr(e, t, a) {
    a.d(t, { X: () => r })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("on57")
    let r = Object.assign(
      function (e) {
        let t,
          a,
          r = (0, s.c)(6),
          { children: o, id: l, className: c } = e
        return (
          r[0] !== c ? ((t = (0, i.A)("flex flex-col", c)), (r[0] = c), (r[1] = t)) : (t = r[1]),
          r[2] !== o || r[3] !== l || r[4] !== t
            ? ((a = (0, n.jsx)("section", { id: l, className: t, children: o })),
              (r[2] = o),
              (r[3] = l),
              (r[4] = t),
              (r[5] = a))
            : (a = r[5]),
          a
        )
      },
      {
        Header: function (e) {
          let t,
            a,
            r,
            o,
            l,
            c,
            d,
            u = (0, s.c)(32),
            {
              title: h,
              subtitle: p,
              actions: g,
              actionsAlignment: m,
              className: f,
              size: x,
              titleGap: y,
              spacing: b,
              subtitlePlacement: _,
              subtitleWrap: v,
            } = e,
            C = void 0 === x ? "default" : x,
            A = void 0 === b ? "default" : b,
            T = void 0 === _ ? "below-title" : _,
            w = void 0 === v ? "balance" : v,
            k = null != h,
            j = null != p,
            G = null != g,
            N = "compact" === C
          u[0] !== N || u[1] !== p || u[2] !== T || u[3] !== w
            ? ((t = p
                ? (0, n.jsx)("div", {
                    className: (0, i.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === w ? "text-balance" : "text-wrap",
                      N ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === T && "w-full",
                    ),
                    children: p,
                  })
                : null),
              (u[0] = N),
              (u[1] = p),
              (u[2] = T),
              (u[3] = w),
              (u[4] = t))
            : (t = u[4])
          let I = t
          if (!k && !j && !G) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(n.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let P = "below-header" === T ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            S = j && "compact" === A && "pb-2",
            O = j && "compact" !== A && "pb-3"
          u[6] !== f || u[7] !== j || u[8] !== N || u[9] !== A || u[10] !== P || u[11] !== S || u[12] !== O
            ? ((a = (0, i.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                P,
                S,
                O,
                !j && (0, i.A)("items-center pb-1.5", "compact" === A ? "min-h-8" : "min-h-toolbar"),
                j && N && "items-center",
                j && !N && "items-start",
                f,
              )),
              (u[6] = f),
              (u[7] = j),
              (u[8] = N),
              (u[9] = A),
              (u[10] = P),
              (u[11] = S),
              (u[12] = O),
              (u[13] = a))
            : (a = u[13])
          let E =
            "none" === (void 0 === y ? "default" : y)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== E ? ((r = (0, i.A)("flex min-w-0 flex-1 flex-col", E)), (u[14] = E), (u[15] = r)) : (r = u[15]),
            u[16] !== j || u[17] !== C || u[18] !== h
              ? ((o = h
                  ? (0, n.jsx)("div", {
                      className: (0, i.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === C && "text-sm leading-[18px]",
                        ("large" === C || ("default" === C && j)) && "text-lg",
                        ("base" === C || ("default" === C && !j)) && "text-base",
                      ),
                      children: h,
                    })
                  : null),
                (u[16] = j),
                (u[17] = C),
                (u[18] = h),
                (u[19] = o))
              : (o = u[19]))
          let L = "below-title" === T ? I : null
          ;(u[20] !== r || u[21] !== o || u[22] !== L
            ? ((l = (0, n.jsxs)("div", { className: r, children: [o, L] })),
              (u[20] = r),
              (u[21] = o),
              (u[22] = L),
              (u[23] = l))
            : (l = u[23]),
            u[24] !== g || u[25] !== m
              ? ((c = g
                  ? (0, n.jsx)("div", {
                      className: (0, i.A)("flex items-center gap-2", "end" === m && "self-end"),
                      children: g,
                    })
                  : null),
                (u[24] = g),
                (u[25] = m),
                (u[26] = c))
              : (c = u[26]))
          let M = "below-header" === T ? I : null
          return (
            u[27] !== a || u[28] !== l || u[29] !== c || u[30] !== M
              ? ((d = (0, n.jsxs)("div", { className: a, children: [l, c, M] })),
                (u[27] = a),
                (u[28] = l),
                (u[29] = c),
                (u[30] = M),
                (u[31] = d))
              : (d = u[31]),
            d
          )
        },
        Content: function (e) {
          let t,
            a,
            r = (0, s.c)(5),
            { children: o, className: l } = e
          return (
            r[0] !== l ? ((t = (0, i.A)("flex flex-col gap-1.5", l)), (r[0] = l), (r[1] = t)) : (t = r[1]),
            r[2] !== o || r[3] !== t
              ? ((a = (0, n.jsx)("div", { className: t, children: o })), (r[2] = o), (r[3] = t), (r[4] = a))
              : (a = r[4]),
            a
          )
        },
        Footer: function (e) {
          let t,
            a,
            r = (0, s.c)(6),
            { children: o, className: l, variant: c } = e,
            d =
              "action" === (void 0 === c ? "description" : c)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            r[0] !== l || r[1] !== d
              ? ((t = (0, i.A)("text-balance text-secondary", d, l)), (r[0] = l), (r[1] = d), (r[2] = t))
              : (t = r[2]),
            r[3] !== o || r[4] !== t
              ? ((a = (0, n.jsx)("div", { className: t, children: o })), (r[3] = o), (r[4] = t), (r[5] = a))
              : (a = r[5]),
            a
          )
        },
      },
    )
  },
  bZug(e, t, a) {
    a.d(
      t,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  AWNZ(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("on57"),
      r = a("zd8w"),
      o = a("HZfM"),
      l = a("GO7r")
    function c(e) {
      return e.preventDefault()
    }
    function d(e) {
      let t,
        a,
        r,
        o,
        l,
        c,
        d,
        u = (0, s.c)(24),
        {
          label: h,
          labelId: p,
          labelSizing: g,
          labelWeight: m,
          description: f,
          descriptionId: x,
          icon: y,
          variant: b,
          verticalAlignment: _,
        } = e,
        v = "start" === _ ? "items-start" : "items-center",
        C = "grow" === (void 0 === g ? "grow" : g) && "flex-1"
      ;(u[0] !== v || u[1] !== C
        ? ((t = (0, i.A)("flex min-w-0 gap-3", v, C)), (u[0] = v), (u[1] = C), (u[2] = t))
        : (t = u[2]),
        u[3] !== y
          ? ((a = null != y ? (0, n.jsx)("span", { className: "flex shrink-0", children: y }) : null),
            (u[3] = y),
            (u[4] = a))
          : (a = u[4]))
      let A = "featured" === b && "text-base",
        T = "recommendation" === b && "text-[13px] leading-[18.571429px]",
        w = "featured" !== b && "recommendation" !== b && "text-sm",
        k = "nested" !== b && "medium" === (void 0 === m ? "medium" : m) && "font-medium"
      return (
        u[5] !== k || u[6] !== A || u[7] !== T || u[8] !== w
          ? ((r = (0, i.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              A,
              T,
              w,
              k,
            )),
            (u[5] = k),
            (u[6] = A),
            (u[7] = T),
            (u[8] = w),
            (u[9] = r))
          : (r = u[9]),
        u[10] !== h || u[11] !== p || u[12] !== r
          ? ((o = (0, n.jsx)("div", { id: p, className: r, children: h })),
            (u[10] = h),
            (u[11] = p),
            (u[12] = r),
            (u[13] = o))
          : (o = u[13]),
        u[14] !== f || u[15] !== x
          ? ((l = f
              ? (0, n.jsx)("div", {
                  id: x,
                  className: "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                  children: f,
                })
              : null),
            (u[14] = f),
            (u[15] = x),
            (u[16] = l))
          : (l = u[16]),
        u[17] !== o || u[18] !== l
          ? ((c = (0, n.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [o, l] })),
            (u[17] = o),
            (u[18] = l),
            (u[19] = c))
          : (c = u[19]),
        u[20] !== c || u[21] !== t || u[22] !== a
          ? ((d = (0, n.jsxs)("div", { className: t, children: [a, c] })),
            (u[20] = c),
            (u[21] = t),
            (u[22] = a),
            (u[23] = d))
          : (d = u[23]),
        d
      )
    }
    a.d(
      t,
      {},
      {
        $5: function (e) {
          let t,
            a,
            r,
            o,
            l,
            c,
            d = (0, s.c)(18),
            { children: u, compactLabelInset: h, label: p, valueAlignment: g, variant: m } = e,
            f = void 0 === h || h,
            x = void 0 === g ? "start" : g,
            y = void 0 === m ? "default" : m,
            b =
              "compact" === y
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            d[0] !== b ? ((t = (0, i.A)("grid items-center", b)), (d[0] = b), (d[1] = t)) : (t = d[1]),
            d[2] !== f || d[3] !== y
              ? ((a = (0, i.A)(
                  "min-w-0",
                  "compact" === y
                    ? (0, i.A)("flex items-center pe-2 text-start", f && "ps-1")
                    : "text-sm text-secondary",
                )),
                (d[2] = f),
                (d[3] = y),
                (d[4] = a))
              : (a = d[4]),
            d[5] !== p || d[6] !== a
              ? ((r = (0, n.jsx)("div", { className: a, children: p })), (d[5] = p), (d[6] = a), (d[7] = r))
              : (r = d[7]),
            d[8] !== x || d[9] !== y
              ? ((o = (0, i.A)(
                  "min-w-0",
                  "compact" === y
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, i.A)("break-words whitespace-normal text-sm text-default", "end" === x && "text-end"),
                )),
                (d[8] = x),
                (d[9] = y),
                (d[10] = o))
              : (o = d[10]),
            d[11] !== u || d[12] !== o
              ? ((l = (0, n.jsx)("div", { className: o, children: u })), (d[11] = u), (d[12] = o), (d[13] = l))
              : (l = d[13]),
            d[14] !== t || d[15] !== r || d[16] !== l
              ? ((c = (0, n.jsxs)("div", { className: t, children: [r, l] })),
                (d[14] = t),
                (d[15] = r),
                (d[16] = l),
                (d[17] = c))
              : (c = d[17]),
            c
          )
        },
        ic: function (e) {
          let t,
            a,
            o,
            l,
            c = (0, s.c)(35),
            {
              label: u,
              labelSizing: h,
              labelWeight: p,
              layout: g,
              description: m,
              control: f,
              controlSizing: x,
              icon: y,
              className: b,
              id: _,
              inset: v,
              size: C,
              variant: A,
              verticalAlignment: T,
            } = e,
            w = void 0 === h ? "grow" : h,
            k = void 0 === p ? "medium" : p,
            j = void 0 === g ? "default" : g,
            G = void 0 === x ? "minimum" : x,
            N = void 0 === v || v,
            I = void 0 === C ? "default" : C,
            P = void 0 === A ? "default" : A,
            S = void 0 === T ? "center" : T,
            O = (0, r.useId)(),
            E = null != u || null != m || null != y,
            L = "function" == typeof f,
            M = L && null != u ? `${O}-label` : void 0,
            R = L && m ? `${O}-description` : void 0,
            D = N && ("split" !== j || "default" !== P) && "px-4",
            U = N && "nested" === P && "group-data-[density=form]/settings:px-5",
            q =
              "stacked" === P &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            H =
              "nested" === P &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            z = "stacked" !== P && ("start" === S ? "items-start" : "items-center"),
            B = "split" === j && "default" === P && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            c[0] !== b ||
            c[1] !== j ||
            c[2] !== I ||
            c[3] !== U ||
            c[4] !== q ||
            c[5] !== H ||
            c[6] !== z ||
            c[7] !== B ||
            c[8] !== D ||
            c[9] !== P
              ? ((t = (0, i.A)(
                  "@container/settings-row",
                  D,
                  U,
                  q,
                  H,
                  z,
                  B,
                  "default" === j &&
                    ("default" === P || "featured" === P || "recommendation" === P) &&
                    (0, i.A)(
                      "flex justify-between",
                      "featured" === P && (0, i.A)("gap-6", "compact" === I ? "min-h-11 py-2" : "py-4"),
                      "featured" !== P && ("compact" === I ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === P && "dark:bg-primary-ghost-hover",
                  b,
                )),
                (c[0] = b),
                (c[1] = j),
                (c[2] = I),
                (c[3] = U),
                (c[4] = q),
                (c[5] = H),
                (c[6] = z),
                (c[7] = B),
                (c[8] = D),
                (c[9] = P),
                (c[10] = t))
              : (t = c[10]),
            c[11] !== m ||
            c[12] !== R ||
            c[13] !== E ||
            c[14] !== y ||
            c[15] !== u ||
            c[16] !== M ||
            c[17] !== w ||
            c[18] !== k ||
            c[19] !== P ||
            c[20] !== S
              ? ((a = E
                  ? (0, n.jsx)(d, {
                      label: u,
                      labelId: M,
                      labelSizing: w,
                      labelWeight: k,
                      description: m,
                      descriptionId: R,
                      icon: y,
                      variant: P,
                      verticalAlignment: S,
                    })
                  : null),
                (c[11] = m),
                (c[12] = R),
                (c[13] = E),
                (c[14] = y),
                (c[15] = u),
                (c[16] = M),
                (c[17] = w),
                (c[18] = k),
                (c[19] = P),
                (c[20] = S),
                (c[21] = a))
              : (a = c[21]),
            c[22] !== f || c[23] !== G || c[24] !== R || c[25] !== L || c[26] !== M || c[27] !== j || c[28] !== P
              ? ((o =
                  null != f && !1 !== f
                    ? (0, n.jsx)("div", {
                        className: (0, i.A)(
                          "stacked" === P && "w-full",
                          "nested" === P && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === j &&
                            "default" === P &&
                            (0, i.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === G && "w-full",
                            ),
                          "default" === j &&
                            ("default" === P || "featured" === P || "recommendation" === P) &&
                            (0, i.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === G ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === G && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: L ? f({ "aria-labelledby": M, "aria-describedby": R }) : f,
                      })
                    : null),
                (c[22] = f),
                (c[23] = G),
                (c[24] = R),
                (c[25] = L),
                (c[26] = M),
                (c[27] = j),
                (c[28] = P),
                (c[29] = o))
              : (o = c[29]),
            c[30] !== _ || c[31] !== t || c[32] !== a || c[33] !== o
              ? ((l = (0, n.jsxs)("div", { id: _, className: t, children: [a, o] })),
                (c[30] = _),
                (c[31] = t),
                (c[32] = a),
                (c[33] = o),
                (c[34] = l))
              : (l = c[34]),
            l
          )
        },
        jj: function (e) {
          let t,
            a = (0, s.c)(2),
            { children: i } = e
          return (
            a[0] !== i
              ? ((t = (0, n.jsx)("span", { className: "text-xs text-secondary", children: i })), (a[0] = i), (a[1] = t))
              : (t = a[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            a,
            r,
            l,
            u,
            h,
            p,
            g,
            m,
            f,
            x,
            y,
            b,
            _,
            v,
            C,
            A,
            T,
            w,
            k,
            j,
            G,
            N,
            I = (0, s.c)(54)
          I[0] !== e
            ? (({
                actions: t,
                actionsPlacement: x,
                ariaControls: a,
                ariaExpanded: r,
                ariaLabel: l,
                className: u,
                description: h,
                disabled: p,
                edgeRounding: y,
                icon: g,
                label: f,
                size: b,
                trailing: v,
                variant: _,
                ...m
              } = e),
              (I[0] = e),
              (I[1] = t),
              (I[2] = a),
              (I[3] = r),
              (I[4] = l),
              (I[5] = u),
              (I[6] = h),
              (I[7] = p),
              (I[8] = g),
              (I[9] = m),
              (I[10] = f),
              (I[11] = x),
              (I[12] = y),
              (I[13] = b),
              (I[14] = _),
              (I[15] = v))
            : ((t = I[1]),
              (a = I[2]),
              (r = I[3]),
              (l = I[4]),
              (u = I[5]),
              (h = I[6]),
              (p = I[7]),
              (g = I[8]),
              (m = I[9]),
              (f = I[10]),
              (x = I[11]),
              (y = I[12]),
              (b = I[13]),
              (_ = I[14]),
              (v = I[15]))
          let P = void 0 === y ? "row" : y,
            S = void 0 === b ? "default" : b,
            O = void 0 === _ ? "default" : _,
            E = "before-trailing" === (void 0 === x ? "end" : x) && !p && null != t && null != v,
            L = E ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          I[16] !== u || I[17] !== E || I[18] !== S || I[19] !== L || I[20] !== O
            ? ((C = (0, i.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                L,
                "empty" === O
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, i.A)(
                      "px-4 text-start",
                      "nested" === O && "min-h-10 py-0.5",
                      "nested" !== O && ("large" === S ? "py-4" : "py-3"),
                      E && "gap-2",
                      !E && ("nested" === O ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (I[16] = u),
              (I[17] = E),
              (I[18] = S),
              (I[19] = L),
              (I[20] = O),
              (I[21] = C))
            : (C = I[21])
          let M = C
          ;(I[22] !== h || I[23] !== g || I[24] !== f || I[25] !== O
            ? ((A =
                "empty" === O
                  ? (0, n.jsxs)(n.Fragment, { children: [g, f] })
                  : (0, n.jsx)(d, { label: f, description: h, icon: g, variant: O, verticalAlignment: "center" })),
              (I[22] = h),
              (I[23] = g),
              (I[24] = f),
              (I[25] = O),
              (I[26] = A))
            : (A = I[26]),
            I[27] !== v
              ? ((T =
                  null != v
                    ? (0, n.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: v })
                    : null),
                (I[27] = v),
                (I[28] = T))
              : (T = I[28]),
            I[29] !== A || I[30] !== T
              ? ((w = (0, n.jsxs)(n.Fragment, { children: [A, T] })), (I[29] = A), (I[30] = T), (I[31] = w))
              : (w = I[31]))
          let R = w,
            D = E ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            U = "row" === P && "first:rounded-t-2xl last:rounded-b-2xl",
            q = "recommendation" === O && "dark:bg-primary-ghost-hover",
            H = !p && "hover:bg-primary-ghost-hover focus-within:bg-primary-ghost-hover",
            z =
              !p &&
              "recommendation" === O &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            I[32] !== D || I[33] !== U || I[34] !== q || I[35] !== H || I[36] !== z
              ? ((k = (0, i.A)("group w-full items-center", D, U, q, H, z)),
                (I[32] = D),
                (I[33] = U),
                (I[34] = q),
                (I[35] = H),
                (I[36] = z),
                (I[37] = k))
              : (k = I[37]),
            I[38] !== a || I[39] !== r || I[40] !== l || I[41] !== R || I[42] !== p || I[43] !== m || I[44] !== M
              ? ((j =
                  null != m.to
                    ? (0, n.jsx)(o.N_, {
                        ...m,
                        className: M,
                        "aria-controls": a,
                        "aria-expanded": r,
                        "aria-label": l,
                        "aria-disabled": p || void 0,
                        tabIndex: p ? -1 : void 0,
                        onClick: p ? c : m.onClick,
                        children: R,
                      })
                    : (0, n.jsx)("button", {
                        ...m,
                        className: M,
                        "aria-controls": a,
                        "aria-expanded": r,
                        "aria-label": l,
                        disabled: p,
                        type: "button",
                        children: R,
                      })),
                (I[38] = a),
                (I[39] = r),
                (I[40] = l),
                (I[41] = R),
                (I[42] = p),
                (I[43] = m),
                (I[44] = M),
                (I[45] = j))
              : (j = I[45]),
            I[46] !== t || I[47] !== p || I[48] !== E
              ? ((G =
                  p || null == t
                    ? null
                    : (0, n.jsx)("div", {
                        className: (0, i.A)(
                          "flex shrink-0 items-center gap-1",
                          E ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (I[46] = t),
                (I[47] = p),
                (I[48] = E),
                (I[49] = G))
              : (G = I[49]),
            I[50] !== k || I[51] !== j || I[52] !== G
              ? ((N = (0, n.jsxs)("div", { className: k, children: [j, G] })),
                (I[50] = k),
                (I[51] = j),
                (I[52] = G),
                (I[53] = N))
              : (N = I[53]),
            N
          )
        },
        kf: function (e) {
          let t,
            a = (0, s.c)(2),
            { children: i } = e
          return (
            a[0] !== i
              ? ((t = (0, n.jsx)("span", { className: "text-tertiary", children: i })), (a[0] = i), (a[1] = t))
              : (t = a[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            a,
            r,
            o,
            c,
            d,
            u,
            h,
            p,
            g,
            m = (0, s.c)(43),
            {
              id: f,
              ariaLabel: x,
              autoFocus: y,
              checked: b,
              description: _,
              highlightSelected: v,
              indicator: C,
              label: A,
              name: T,
              onChange: w,
              onClick: k,
              value: j,
              variant: G,
            } = e,
            N = void 0 === v || v,
            I = void 0 === C ? "radio" : C,
            P = void 0 === G ? "default" : G
          ;(m[0] !== b || m[1] !== _ || m[2] !== N || m[3] !== I || m[4] !== P
            ? ((t = (0, i.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === P &&
                  (0, i.A)(
                    "gap-3 px-4 py-3 hover:bg-primary-ghost-hover",
                    null != _ ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === P && b && N && "radio" === I && "bg-primary-soft-alpha",
                "form" === P && "items-center gap-4 px-4 py-4 hover:bg-primary-ghost-hover",
                "inline" === P && "items-center gap-2",
                "checkmark" === I && "after:ms-7",
              )),
              (m[0] = b),
              (m[1] = _),
              (m[2] = N),
              (m[3] = I),
              (m[4] = P),
              (m[5] = t))
            : (t = m[5]),
            m[6] !== x || m[7] !== f
              ? ((a = (0, n.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": x,
                  htmlFor: f,
                })),
                (m[6] = x),
                (m[7] = f),
                (m[8] = a))
              : (a = m[8]),
            m[9] !== I || m[10] !== P
              ? ((r = (0, i.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === I
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, i.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === P ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (m[9] = I),
                (m[10] = P),
                (m[11] = r))
              : (r = m[11]))
          let S = null != _ ? `${f}-description` : void 0
          ;(m[12] !== x ||
          m[13] !== y ||
          m[14] !== b ||
          m[15] !== f ||
          m[16] !== T ||
          m[17] !== w ||
          m[18] !== k ||
          m[19] !== r ||
          m[20] !== S ||
          m[21] !== j
            ? ((o = (0, n.jsx)("input", {
                id: f,
                className: r,
                "aria-label": x,
                "aria-describedby": S,
                autoFocus: y,
                type: "radio",
                name: T,
                value: j,
                checked: b,
                onChange: w,
                onClick: k,
              })),
              (m[12] = x),
              (m[13] = y),
              (m[14] = b),
              (m[15] = f),
              (m[16] = T),
              (m[17] = w),
              (m[18] = k),
              (m[19] = r),
              (m[20] = S),
              (m[21] = j),
              (m[22] = o))
            : (o = m[22]),
            m[23] !== b || m[24] !== I
              ? ((c = "checkmark" === I ? (0, n.jsx)(l.ALZ, { className: (0, i.A)(!b && "invisible") }) : null),
                (m[23] = b),
                (m[24] = I),
                (m[25] = c))
              : (c = m[25]))
          let O = "default" === P ? "text-sm font-medium" : "text-base"
          return (
            m[26] !== O ? ((d = (0, i.A)("text-default", O)), (m[26] = O), (m[27] = d)) : (d = m[27]),
            m[28] !== A || m[29] !== d
              ? ((u = (0, n.jsx)("span", { className: d, children: A })), (m[28] = A), (m[29] = d), (m[30] = u))
              : (u = m[30]),
            m[31] !== _ || m[32] !== f
              ? ((h =
                  null != _
                    ? (0, n.jsx)("span", {
                        id: `${f}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: _,
                      })
                    : null),
                (m[31] = _),
                (m[32] = f),
                (m[33] = h))
              : (h = m[33]),
            m[34] !== u || m[35] !== h
              ? ((p = (0, n.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, h],
                })),
                (m[34] = u),
                (m[35] = h),
                (m[36] = p))
              : (p = m[36]),
            m[37] !== p || m[38] !== t || m[39] !== a || m[40] !== o || m[41] !== c
              ? ((g = (0, n.jsxs)("div", { className: t, children: [a, o, c, p] })),
                (m[37] = p),
                (m[38] = t),
                (m[39] = a),
                (m[40] = o),
                (m[41] = c),
                (m[42] = g))
              : (g = m[42]),
            g
          )
        },
      },
    )
  },
  ZEx5(e, t, a) {
    a.d(t, { t: () => o })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("on57"),
      r = a("bZug")
    function o(e) {
      let t,
        a,
        o,
        l = (0, s.c)(23),
        { children: c, className: d, contentOverflow: u, dividers: h, variant: p, decoration: g } = e,
        m = void 0 === p ? "default" : p,
        f = "flat" === m || "rows" === m ? r.s : r.r,
        x = void 0 === h || h ? f : "flex flex-col",
        y = "recommendation" === m && "rounded-[20px]",
        b = "recommendation" !== m && "flat" !== m && "rows" !== m && "outlinedLarge" !== m && "rounded-2xl",
        _ = "outlinedLarge" === m && "rounded-[30px] border border-default bg-transparent",
        v = "daybreak" === g && "daybreak-VsXdEH",
        C = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        A =
          "default" === m &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        T = "metered" === m && "ring-1 ring-inset ring-border-subtle",
        w = "secondary" === m && "bg-surface-secondary/92",
        k = "muted" === m && "bg-(--color-background-primary-soft-alpha)/50 dark:bg-primary-soft-alpha",
        j =
          "form" === m &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        G = "outlined" === m && "border border-subtle bg-transparent",
        N =
          "flat" === m &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        I = "input" === m && "border border-primary-outline bg-primary-soft",
        P = "recommendation" === m && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        l[0] !== d ||
        l[1] !== A ||
        l[2] !== T ||
        l[3] !== w ||
        l[4] !== k ||
        l[5] !== j ||
        l[6] !== G ||
        l[7] !== N ||
        l[8] !== I ||
        l[9] !== P ||
        l[10] !== x ||
        l[11] !== y ||
        l[12] !== b ||
        l[13] !== _ ||
        l[14] !== v ||
        l[15] !== C
          ? ((t = (0, i.A)(x, y, b, _, v, C, A, T, w, k, j, G, N, I, P, d)),
            (l[0] = d),
            (l[1] = A),
            (l[2] = T),
            (l[3] = w),
            (l[4] = k),
            (l[5] = j),
            (l[6] = G),
            (l[7] = N),
            (l[8] = I),
            (l[9] = P),
            (l[10] = x),
            (l[11] = y),
            (l[12] = b),
            (l[13] = _),
            (l[14] = v),
            (l[15] = C),
            (l[16] = t))
          : (t = l[16]),
        l[17] !== m
          ? ((a =
              "default" === m || "metered" === m
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-primary-soft-alpha))" }
                : void 0),
            (l[17] = m),
            (l[18] = a))
          : (a = l[18]),
        l[19] !== c || l[20] !== t || l[21] !== a
          ? ((o = (0, n.jsx)("div", { className: t, style: a, children: c })),
            (l[19] = c),
            (l[20] = t),
            (l[21] = a),
            (l[22] = o))
          : (o = l[22]),
        o
      )
    }
  },
  czB9(e, t, a) {
    var n = a("D7Ms"),
      s = a("Ghh3")
    a.d(
      t,
      {},
      {
        U: function ({ account: e, userId: t, settingsAccountId: a, enabled: i = !0 }) {
          return {
            queryKey: ["chatgpt-training-eligibility", t, e?.id],
            queryFn:
              null == e
                ? n.hT
                : () =>
                    s.Request.safeGet("/accounts/data_usage_for_training", {
                      additionalHeaders: { "ChatGPT-Account-ID": e.id },
                    }),
            enabled: i && e?.structure === "workspace" && a === e.id,
            staleTime: 0,
          }
        },
      },
    )
  },
  iPAC(e, t, a) {
    let n = (0, a("nkTT").a)({
      name: "arrow-left-md-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.682129, y: 4.14209, width: 8.843018, height: 7.716309 },
        visualBounds: { x: 3.682129, y: 4.14209, width: 8.843018, height: 7.716309 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.682129, y: 4.14209, width: 8.843018, height: 7.716309 },
        center: { x: 8.103638, y: 8.000244 },
        insets: { top: 4.14209, right: 3.474853, bottom: 4.141601, left: 3.682129 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.103638, y: 8.000244 }, foreground: { x: 8.103638, y: 8.000244 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.96163 4.29558C7.16647 4.09074 7.49875 4.09111 7.70382 4.29558C7.90884 4.50061 7.90884 4.83275 7.70382 5.03777L5.26534 7.47527H11.9997C12.2897 7.47527 12.5251 7.71071 12.5251 8.00066C12.525 8.29048 12.2896 8.52605 11.9997 8.52605H5.2673L7.70382 10.9626C7.90884 11.1676 7.90884 11.4997 7.70382 11.7048C7.49877 11.9094 7.16654 11.9097 6.96163 11.7048L3.98214 8.72527C3.58225 8.32496 3.582 7.67524 3.98214 7.27508L6.96163 4.29558Z" fill="currentColor"/>',
    })
    a.d(t, {}, { x: n })
  },
}
//# sourceMappingURL=670415.af11034e22.js.map
