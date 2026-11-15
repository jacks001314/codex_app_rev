export const __rspack_esm_ids = [412224]
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
          let r = e.slice(e.lastIndexOf("@") + 1).toLowerCase()
          return s(r, a) ? r : void 0
        },
      },
    )
  },
  r6FN(e, t, a) {
    var n,
      s,
      r,
      i,
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
        (((r = {}).CHATGPT_PRECISE_LOCATION_ENTRY_POINT_UNSPECIFIED =
          "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_UNSPECIFIED"),
        (r.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_BANNER = "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_BANNER"),
        (r.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_MESSAGE_FOOTER = "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_MESSAGE_FOOTER"),
        (r.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_SETTINGS = "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_SETTINGS"),
        (r.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_ASK_USER_LOCATION_WIDGET =
          "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_ASK_USER_LOCATION_WIDGET"),
        (r.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_WEATHER_WIDGET = "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_WEATHER_WIDGET"),
        (r.CHATGPT_PRECISE_LOCATION_ENTRY_POINT_FULLSCREEN_MAP = "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_FULLSCREEN_MAP"),
        (r.UNRECOGNIZED = "UNRECOGNIZED"),
        r),
      d =
        (((i = {}).CHATGPT_LOCATION_PERMISSION_INTERACTION_UNSPECIFIED =
          "CHATGPT_LOCATION_PERMISSION_INTERACTION_UNSPECIFIED"),
        (i.CHATGPT_LOCATION_PERMISSION_INTERACTION_STATUS_ROW = "CHATGPT_LOCATION_PERMISSION_INTERACTION_STATUS_ROW"),
        (i.CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON =
          "CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON"),
        (i.UNRECOGNIZED = "UNRECOGNIZED"),
        i)
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
    let r = n.record(n.string(), n.unknown()),
      i = "1648954249"
    a.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            a = (0, s.XM)(e, i),
            o = a.get("suppress_ads", !1)
          if (!o || a.details.reason.startsWith("LocalOverride") || null == a.details.receivedAt) return o
          let l = e.dataAdapter.getDataSync(e.getContextHandle().user)
          if (null == l || l.receivedAt !== a.details.receivedAt) return o
          try {
            JSON.parse(l.data, (e, a) => {
              if ("" !== e) return a
              let s = r.safeParse(a)
              if (!s.success) return a
              let o = r.safeParse(s.data.layer_configs)
              if (!o.success) return a
              let l = r.safeParse(
                o.data[i] ??
                  o.data[
                    (function (e) {
                      let t = 0
                      for (let a = 0; a < e.length; a += 1) ((t = (t << 5) - t + e.charCodeAt(a)), (t &= t))
                      return String(t >>> 0)
                    })(i)
                  ],
              )
              if (!l.success) return a
              let c = r.safeParse(s.data.values),
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
      r = a("oyxz"),
      i = a("JNtf"),
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
              ? ((a = (0, n.jsx)(i.L3, {
                  children: (0, n.jsx)(r.A, {
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
                      subtitle: (0, n.jsx)(i.rr, {
                        children: (0, n.jsx)(r.A, {
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
              ? ((c = (0, n.jsx)(i.lG, { open: !0, size: "compact", onOpenChange: t, children: l })),
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
      r = a("OWtl")
    let i = (0, n.SZ)(
      r.u,
      () => void 0,
      ({ set: e }) => (0, s.Lk)(e),
    )
    a.d(t, {}, { d: i })
  },
  SZLI(e, t, a) {
    var n = a("r6FN"),
      s = a("SPnB"),
      r = a("X6Vn"),
      i = a("SGsN"),
      o = a("IdsJ"),
      l = a("g8Tk"),
      c = a("svjy"),
      d = a("yGJW"),
      u = a("OMIV"),
      h = a("g2p6"),
      g = a("ITxD")
    a.d(
      t,
      {},
      {
        Z: async function (e, t, m = "CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON") {
          let p
          ;(0, d.yy)(e, n.Uj, { entryPoint: t, interaction: m })
          let f = (0, o.ff)(),
            x = e.get(h.Sk),
            y = e.get(s.chatGptAuthenticatedUserId$),
            b = e.get(s.o8),
            _ = e.get(s.PO),
            v =
              (null == _.authMethod ||
                (!_.authLoading && (await e.query.fetch(h.s6).catch(() => null))?.preciseLocationAllowed === !0)) &&
              e.get(g.d).enabled
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
                  e.get(g.d).enabled,
                !0,
                (e) => {
                  p = e
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
                    .get(i.Id)
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
                ;(0, r.qf)(e, t)
                return
              }
              ;(0, d.yy)(e, n.eq, { entryPoint: s })
              let g = e
                .get(c.g)
                .formatMessage({
                  id: "chatgptConversations.preciseLocation.notEnabled",
                  defaultMessage: "Location not enabled",
                  description: "Feedback when ChatGPT cannot get the location requested by the user",
                })
              ;(2 === h
                ? (g = e
                    .get(c.g)
                    .formatMessage({
                      id: "chatgptConversations.preciseLocation.positionUnavailable",
                      defaultMessage:
                        "Your device couldn't determine your location. Check your device's location settings and try again.",
                      description:
                        "Location failure notification when the browser cannot obtain coordinates, which can happen even when permission is allowed",
                    }))
                : 3 === h &&
                  (g = e
                    .get(c.g)
                    .formatMessage({
                      id: "chatgptConversations.preciseLocation.positionTimeout",
                      defaultMessage: "Getting your location timed out. Try again.",
                      description:
                        "Location failure notification when the browser did not obtain coordinates before the request deadline; this does not mean permission was denied",
                    })),
                e.get(i.Id).info(g, {
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
                            ;(0, r.qf)(e, t)
                          },
                        }
                      : void 0,
                  onRemove: () => {
                    ;(0, d.yy)(e, n.YZ, { entryPoint: s })
                  },
                }))
            })(e, A, t, C, m, p),
            A
          )
        },
      },
    )
  },
  GK7D(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      r = a("on57")
    a.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            a,
            i,
            o,
            l,
            c,
            d,
            u,
            h,
            g,
            m = (0, s.c)(30),
            { actions: p, asset: f, subtitle: x, subtitleClassName: y, title: b, variant: _ } = e,
            v = void 0 === _ ? "default" : _
          m[0] !== f
            ? ((t = null == f ? null : (0, n.jsx)("div", { className: "flex", children: f })), (m[0] = f), (m[1] = t))
            : (t = m[1])
          let C = "page" === v ? "flex-nowrap" : "flex-wrap"
          m[2] !== C
            ? ((a = (0, r.A)("flex min-w-0 items-start justify-between gap-4", C)), (m[2] = C), (m[3] = a))
            : (a = m[3])
          let A = "settingsCompact" === v ? "gap-1.25" : "gap-1.5"
          m[4] !== A ? ((i = (0, r.A)("flex min-w-0 flex-1 basis-64 flex-col", A)), (m[4] = A), (m[5] = i)) : (i = m[5])
          let T = "settings" === v && "heading-lg font-normal",
            w = "settingsCompact" === v && "heading-lg font-semibold leading-7",
            k = "page" === v && "heading-lg electron:heading-xl",
            j = "default" === v && "heading-base electron:heading-lg"
          return (
            m[6] !== j || m[7] !== T || m[8] !== w || m[9] !== k
              ? ((o = (0, r.A)("min-w-0 break-words text-default", T, w, k, j)),
                (m[6] = j),
                (m[7] = T),
                (m[8] = w),
                (m[9] = k),
                (m[10] = o))
              : (o = m[10]),
            m[11] !== o || m[12] !== b
              ? ((l = (0, n.jsx)("h1", { className: o, children: b })), (m[11] = o), (m[12] = b), (m[13] = l))
              : (l = m[13]),
            m[14] !== x || m[15] !== y
              ? ((c =
                  null == x
                    ? null
                    : (0, n.jsx)("div", { className: (0, r.A)("text-base text-secondary", y), children: x })),
                (m[14] = x),
                (m[15] = y),
                (m[16] = c))
              : (c = m[16]),
            m[17] !== l || m[18] !== c || m[19] !== i
              ? ((d = (0, n.jsxs)("div", { className: i, children: [l, c] })),
                (m[17] = l),
                (m[18] = c),
                (m[19] = i),
                (m[20] = d))
              : (d = m[20]),
            m[21] !== p
              ? ((u =
                  null == p
                    ? null
                    : (0, n.jsx)("div", { className: "flex max-w-full shrink-0 items-center gap-2", children: p })),
                (m[21] = p),
                (m[22] = u))
              : (u = m[22]),
            m[23] !== d || m[24] !== u || m[25] !== a
              ? ((h = (0, n.jsxs)("div", { className: a, children: [d, u] })),
                (m[23] = d),
                (m[24] = u),
                (m[25] = a),
                (m[26] = h))
              : (h = m[26]),
            m[27] !== h || m[28] !== t
              ? ((g = (0, n.jsxs)("header", {
                  className: "flex flex-col gap-4 px-[var(--detail-page-inline-inset,0px)]",
                  children: [t, h],
                })),
                (m[27] = h),
                (m[28] = t),
                (m[29] = g))
              : (g = m[29]),
            g
          )
        },
      },
    )
  },
  jxU8(e, t, a) {
    a.d(t, { P: () => p, Y: () => f })
    var n = a("ABep"),
      s = a("QosV"),
      r = a("on57"),
      i = a("zd8w"),
      o = a("bJfu"),
      l = a("qbQ6"),
      c = a("GK7D"),
      d = a("PkPj"),
      u = a("DiyT"),
      h = a("ibLK"),
      g = a("V8uZ"),
      m = a("oFmV")
    function p(e) {
      let t,
        a,
        p,
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
        I,
        N,
        S,
        P,
        E,
        O,
        L,
        M,
        R,
        D,
        U,
        q,
        H,
        F,
        z,
        B,
        W,
        $,
        Z,
        Y,
        V,
        K,
        Q,
        J,
        X,
        ee,
        et,
        ea,
        en = (0, s.c)(120)
      en[0] !== e
        ? (({
            title: N,
            asset: a,
            backSlot: p,
            subtitle: w,
            children: f,
            fullWidth: j,
            contentClassName: y,
            subtitleClassName: k,
            action: t,
            toolbarActions: S,
            stickyControls: T,
            footer: _,
            embedded: G,
            density: b,
            scrollResetKey: A,
            containTouchOverscroll: I,
            ref: v,
            className: x,
            ...C
          } = e),
          (en[0] = e),
          (en[1] = t),
          (en[2] = a),
          (en[3] = p),
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
          (en[17] = I),
          (en[18] = N),
          (en[19] = S))
        : ((t = en[1]),
          (a = en[2]),
          (p = en[3]),
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
          (I = en[17]),
          (N = en[18]),
          (S = en[19]))
      let es = void 0 !== j && j,
        er = void 0 !== G && G,
        ei = void 0 !== I && I,
        eo = b ?? "default",
        el = (0, i.useRef)(null),
        ec = (0, i.useRef)(null),
        ed = ei && !er && !1
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
                r = 0,
                i = () => {
                  s = null
                },
                o = (t) => {
                  let a = t.touches[0]
                  if (1 !== t.touches.length || null == a) return void i()
                  let o = t.composedPath().includes(e),
                    l = t.target,
                    c =
                      l instanceof Element &&
                      ((l.contains(e) && n?.contains(l)) || null != l.closest("[data-app-shell-main-titlebar]"))
                  o || c ? ((s = { x: a.clientX, y: a.clientY, inPanel: o }), (r = a.clientY)) : i()
                },
                l = (t) => {
                  let n = t.touches[0]
                  if (1 !== t.touches.length || null == n || null == s) return void i()
                  let o = n.clientY > r
                  if (
                    ((r = n.clientY),
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
                a.addEventListener("touchend", i, c),
                a.addEventListener("touchcancel", i, c),
                () => {
                  let e = Number(t.dataset.containTouchOverscroll) - 1
                  ;(e > 0 ? (t.dataset.containTouchOverscroll = String(e)) : delete t.dataset.containTouchOverscroll,
                    a.removeEventListener("touchstart", o, !0),
                    a.removeEventListener("touchmove", l, !0),
                    a.removeEventListener("touchend", i, !0),
                    a.removeEventListener("touchcancel", i, !0))
                }
              )
            }),
            (ee = [ea, ec]),
            (et[0] = ea),
            (et[1] = ec),
            (et[2] = X),
            (et[3] = ee))
          : ((X = et[2]), (ee = et[3])),
        (0, i.useEffect)(X, ee))
      let [eu, eh] = (0, i.useState)(!1),
        eg = (0, i.useContext)(m.S),
        em = !!eg?.slateLayout && !er
      ;(0, h.U)(l.mk)
      let ep = em && !1,
        ef = eg?.targetId ?? null,
        ex = eg?.targetText ?? null,
        ey = eg?.navigationKey ?? null
      ;(en[20] !== A
        ? ((P = () => {
            null != A && null != ec.current && (ec.current.scrollTop = 0)
          }),
          (E = [A]),
          (en[20] = A),
          (en[21] = P),
          (en[22] = E))
        : ((P = en[21]), (E = en[22])),
        (0, i.useLayoutEffect)(P, E),
        en[23] !== ef || en[24] !== ex
          ? ((O = () => {
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
                    let r = a.includes(e)
                    ;(null == n || (r && !n.isContiguous) || (r === n.isContiguous && a.length <= n.text.length)) &&
                      (n = { element: s, isContiguous: r, text: a })
                  }
                  return n?.element ?? null
                },
                s = (t) => {
                  if ((t.scrollIntoView?.({ block: "center" }), null == ex)) return
                  let n = "true" === document.documentElement.dataset.reducedMotion,
                    s = t.closest("button"),
                    r = s?.parentElement ?? t
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
                        r = n
                        break
                      }
                  }
                  e = r.animate?.(
                    n
                      ? [
                          { backgroundColor: "var(--color-background-secondary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-secondary-ghost-hover)" },
                        ]
                      : [
                          { backgroundColor: "var(--color-background-secondary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-secondary-ghost-hover)", offset: 0.35 },
                          { backgroundColor: "transparent" },
                        ],
                    { duration: 450, easing: `cubic-bezier(${g.Wu.join(", ")})` },
                  )
                },
                r =
                  null == ex
                    ? new ResizeObserver(() => {
                        let e = n()
                        null != e && s(e)
                      })
                    : null,
                i = () => {
                  for (let e of (t?.disconnect(), r?.disconnect(), ["wheel", "pointerdown", "keydown"]))
                    a.ownerDocument.removeEventListener(e, i)
                }
              if (null != r)
                for (let e of (r.observe(a), ["wheel", "pointerdown", "keydown"]))
                  a.ownerDocument.addEventListener(e, i, { passive: !0 })
              let o = n()
              return (
                null != o
                  ? s(o)
                  : (t = new MutationObserver(() => {
                      let e = n()
                      null != e && (s(e), t?.disconnect())
                    })).observe(null == ex ? document.body : a, { childList: !0, subtree: !0 }),
                () => {
                  ;(i(), e?.cancel())
                }
              )
            }),
            (en[23] = ef),
            (en[24] = ex),
            (en[25] = O))
          : (O = en[25]),
        en[26] !== ey || en[27] !== ef || en[28] !== ex
          ? ((L = [ey, ef, ex]), (en[26] = ey), (en[27] = ef), (en[28] = ex), (en[29] = L))
          : (L = en[29]),
        (0, i.useLayoutEffect)(O, L),
        en[30] !== S
          ? ((M =
              null == S
                ? null
                : (0, n.jsx)("div", {
                    className: "ms-auto flex min-w-0 items-center justify-end gap-2 no-drag",
                    children: S,
                  })),
            (en[30] = S),
            (en[31] = M))
          : (M = en[31]),
        en[32] !== p || en[33] !== M
          ? ((R = (0, n.jsxs)(n.Fragment, { children: [p, M] })), (en[32] = p), (en[33] = M), (en[34] = R))
          : (R = en[34]))
      let eb = R,
        e_ = er ? "default" : "settings"
      "compact" === eo && (e_ = "settingsCompact")
      let ev = "compact" === b && "[--settings-section-gap:--spacing(5.5)]",
        eC =
          "default" === b &&
          (er && !es ? "[--settings-section-gap:var(--padding-panel)]" : "[--settings-section-gap:--spacing(10)]"),
        eA = es ? null : er ? "max-w-2xl" : "max-w-3xl electron:min-w-[min(100%,calc(320px*var(--codex-window-zoom)))]"
      ;(en[35] !== y || en[36] !== T || en[37] !== ev || en[38] !== eC || en[39] !== eA || en[40] !== em
        ? ((D = (0, r.A)(
            "group/settings mx-auto flex w-full flex-col",
            ev,
            eC,
            eA,
            em && ["px-panel pb-panel", null == T && "pt-panel"],
            y,
          )),
          (en[35] = y),
          (en[36] = T),
          (en[37] = ev),
          (en[38] = eC),
          (en[39] = eA),
          (en[40] = em),
          (en[41] = D))
        : (D = en[41]),
        en[42] !== t ||
        en[43] !== a ||
        en[44] !== eo ||
        en[45] !== er ||
        en[46] !== e_ ||
        en[47] !== w ||
        en[48] !== k ||
        en[49] !== N ||
        en[50] !== em
          ? ((U =
              null == N || em
                ? null
                : (0, n.jsx)("div", {
                    className: (0, r.A)("compact" === eo && "pb-5.5", "default" === eo && (er ? "pb-panel" : "pb-8")),
                    children: (0, n.jsx)(c.z, {
                      actions: t,
                      asset: a,
                      subtitle: w,
                      subtitleClassName: (0, r.A)("text-balance", k),
                      title: N,
                      variant: e_,
                    }),
                  })),
            (en[42] = t),
            (en[43] = a),
            (en[44] = eo),
            (en[45] = er),
            (en[46] = e_),
            (en[47] = w),
            (en[48] = k),
            (en[49] = N),
            (en[50] = em),
            (en[51] = U))
          : (U = en[51]),
        en[52] !== T
          ? ((q = null == T ? null : (0, n.jsx)(d.J1, { className: "top-0 pt-panel pb-2", children: T })),
            (en[52] = T),
            (en[53] = q))
          : (q = en[53]))
      let eT =
          er && !es
            ? "gap-[var(--settings-section-gap,var(--padding-panel))]"
            : "gap-[var(--settings-section-gap,--spacing(10))]",
        ew = null != T && "pt-5"
      ;(en[54] !== eT || en[55] !== ew
        ? ((H = (0, r.A)("flex flex-col", eT, ew)), (en[54] = eT), (en[55] = ew), (en[56] = H))
        : (H = en[56]),
        en[57] !== f || en[58] !== H
          ? ((F = (0, n.jsx)("div", { className: H, children: f })), (en[57] = f), (en[58] = H), (en[59] = F))
          : (F = en[59]),
        en[60] !== eo || en[61] !== D || en[62] !== U || en[63] !== q || en[64] !== F
          ? ((z = (0, n.jsxs)("div", { ref: el, className: D, "data-density": eo, children: [U, q, F] })),
            (en[60] = eo),
            (en[61] = D),
            (en[62] = U),
            (en[63] = q),
            (en[64] = F),
            (en[65] = z))
          : (z = en[65]))
      let ek = z
      if (er) {
        let e, t, a
        return (
          en[66] !== x ? ((e = (0, r.A)("flex min-h-0 flex-col", x)), (en[66] = x), (en[67] = e)) : (e = en[67]),
          en[68] !== p || en[69] !== eb || en[70] !== S
            ? ((t =
                null != p || null != S
                  ? (0, n.jsx)("div", { className: "flex items-center pb-panel", children: eb })
                  : null),
              (en[68] = p),
              (en[69] = eb),
              (en[70] = S),
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
        ? ((B = (0, r.A)(
            "flex h-full min-h-0 flex-col electron:overflow-hidden electron:bg-surface windows:rounded-tl-lg",
            x,
          )),
          (en[78] = x),
          (en[79] = B))
        : (B = en[79]),
        en[80] !== N || en[81] !== ep
          ? ((W = ep
              ? (0, n.jsx)(o.G.Header, {
                  divider: !1,
                  children: (0, n.jsx)(o.G.HeaderToolbar, {
                    children: (0, n.jsx)("h1", {
                      className: "min-w-0 truncate text-lg font-medium text-default select-none",
                      children: N,
                    }),
                  }),
                })
              : null),
            (en[80] = N),
            (en[81] = ep),
            (en[82] = W))
          : (W = en[82]),
        en[83] !== p || en[84] !== eb || en[85] !== S || en[86] !== em
          ? (($ =
              em && null == p && null == S
                ? null
                : (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("div", {
                      className: "flex items-center px-panel draggable electron:h-toolbar extension:h-toolbar-sm",
                      children: eb,
                    }),
                  })),
            (en[83] = p),
            (en[84] = eb),
            (en[85] = S),
            (en[86] = em),
            (en[87] = $))
          : ($ = en[87]))
      let ej = ed || void 0,
        eG = ep ? eu : void 0,
        eI = ep || void 0
      en[88] !== ep
        ? ((Z = ep ? (e) => eh(e.currentTarget.scrollTop > 0) : void 0), (en[88] = ep), (en[89] = Z))
        : (Z = en[89])
      let eN = !em && "p-panel"
      return (
        en[90] !== eN
          ? ((Y = (0, r.A)("flex-1 scrollbar-stable overflow-y-auto", eN)), (en[90] = eN), (en[91] = Y))
          : (Y = en[91]),
        en[92] !== t ||
        en[93] !== a ||
        en[94] !== eo ||
        en[95] !== es ||
        en[96] !== w ||
        en[97] !== k ||
        en[98] !== N ||
        en[99] !== ep ||
        en[100] !== em
          ? ((V =
              null == N || !em || ep
                ? null
                : (0, n.jsx)(u.g, {
                    className: es ? void 0 : "max-w-3xl",
                    showDivider: !1,
                    sticky: !1,
                    title: (0, n.jsxs)(n.Fragment, {
                      children: [
                        null == a ? null : (0, n.jsx)("div", { className: "flex", children: a }),
                        (0, n.jsx)("h1", {
                          className: (0, r.A)("text-default", "compact" === eo ? "heading-lg" : "heading-xl"),
                          children: N,
                        }),
                        null == w
                          ? null
                          : (0, n.jsx)("div", {
                              className: (0, r.A)("text-base leading-6 text-balance text-secondary", k),
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
            (en[98] = N),
            (en[99] = ep),
            (en[100] = em),
            (en[101] = V))
          : (V = en[101]),
        en[102] !== ek ||
        en[103] !== ej ||
        en[104] !== eG ||
        en[105] !== eI ||
        en[106] !== Z ||
        en[107] !== Y ||
        en[108] !== V
          ? ((K = (0, n.jsxs)("div", {
              ref: ec,
              "data-contain-touch-overscroll": ej,
              "data-app-shell-page-scrolled": eG,
              "data-settings-mobile-header": eI,
              onScroll: Z,
              className: Y,
              children: [V, ek],
            })),
            (en[102] = ek),
            (en[103] = ej),
            (en[104] = eG),
            (en[105] = eI),
            (en[106] = Z),
            (en[107] = Y),
            (en[108] = V),
            (en[109] = K))
          : (K = en[109]),
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
        en[114] !== B ||
        en[115] !== W ||
        en[116] !== $ ||
        en[117] !== K ||
        en[118] !== Q
          ? ((J = (0, n.jsxs)("div", { ref: v, className: B, ...C, children: [W, $, K, Q] })),
            (en[112] = v),
            (en[113] = C),
            (en[114] = B),
            (en[115] = W),
            (en[116] = $),
            (en[117] = K),
            (en[118] = Q),
            (en[119] = J))
          : (J = en[119]),
        J
      )
    }
    function f(e) {
      let t,
        a,
        r = (0, s.c)(8),
        { children: i, navigationKey: o, slateLayout: l, targetId: c, targetText: d } = e,
        u = void 0 !== l && l,
        h = void 0 === d ? null : d
      return (
        r[0] !== o || r[1] !== u || r[2] !== c || r[3] !== h
          ? ((t =
              null != c || null != h || u ? { navigationKey: o, slateLayout: u, targetId: c, targetText: h } : null),
            (r[0] = o),
            (r[1] = u),
            (r[2] = c),
            (r[3] = h),
            (r[4] = t))
          : (t = r[4]),
        r[5] !== i || r[6] !== t
          ? ((a = (0, n.jsx)(m.S.Provider, { value: t, children: i })), (r[5] = i), (r[6] = t), (r[7] = a))
          : (a = r[7]),
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
      r = a("i1S8"),
      i = a("g2p6"),
      o = a("OWtl"),
      l = a("OMIV")
    let c = (0, n.SZ)(
        o.u,
        ({ get: e }) => {
          let t = e(l.M9)
          return null == t || (0, r.H)(t)
        },
        ({ get: e, set: t }) => {
          let a = e(l.M9)
          if (null == a) return
          let n = () => t((0, r.H)(a))
          return (a.on("values_updated", n), () => a.off("values_updated", n))
        },
      ),
      d = (0, n.un)(o.u, ({ get: e }) => !1),
      u = (0, n.un)(o.u, ({ get: e }) => {
        let t = e(i.Sk)
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
  UTbQ(e, t, a) {
    a.d(t, { ChatGptDataControlsSettings: () => eG })
    var n = a("ABep"),
      s = a("QosV"),
      r = a("IM1j"),
      i = a("T0Rc"),
      o = a("irkb"),
      l = a("xSOA"),
      c = a("zTeN"),
      d = a("zd8w"),
      u = a("Wf1j"),
      h = a("oyxz"),
      g = a("HZfM"),
      m = a("TDcV"),
      p = a("TjTj"),
      f = a("SPnB"),
      x = a("eFn4"),
      y = a("EOo5"),
      b = a("YJm0"),
      _ = a("Ghh3"),
      v = a("MrGp"),
      C = a("g2p6"),
      A = a("xEZJ"),
      T = a("njS5"),
      w = a("QmkR"),
      k = a("OAko"),
      j = a("Sm6l"),
      G = a("JNtf"),
      I = a("mUDD"),
      N = a("ZtSy"),
      S = a("bVeK"),
      P = a("Bbed"),
      E = a("SGsN"),
      O = a("F0xz"),
      L = a("IdsJ"),
      M = a("GaA7"),
      R = a("OWtl"),
      D = a("jxU8"),
      U = a("BSnr"),
      q = a("AWNZ"),
      H = a("QyE3"),
      F = a("ZEx5"),
      z = a("czB9"),
      B = a("hZax"),
      W = a("UR81"),
      $ = a("Qn5g")
    a("Au4v")
    var Z = a("T5JX")
    a("X1mr")
    var Y = a("GDNt"),
      V = a("Sg0s")
    function K(e) {
      let t,
        a,
        r,
        i,
        g,
        m,
        p,
        f,
        x,
        b,
        v,
        C,
        A,
        T,
        w,
        k,
        N,
        S,
        P,
        O,
        L,
        M,
        D,
        U,
        q = (0, s.c)(58),
        { open: H, onOpenChange: F } = e,
        z = (0, c.gh)(R.u),
        B = (0, u.A)(),
        W = (0, y.As)(),
        $ = (0, o.jE)(),
        K = (0, d.useRef)(null),
        Q = (0, d.useRef)(null),
        J = (0, d.useRef)(null),
        X = (0, d.useRef)(null),
        [ee, et] = (0, d.useState)(null)
      ;(q[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => {
            K.current = null
          }),
          (a = []),
          (q[0] = t),
          (q[1] = a))
        : ((t = q[0]), (a = q[1])),
        (0, d.useEffect)(t, a),
        q[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = async function (e) {
              return K.current === e
            }),
            (q[2] = r))
          : (r = q[2]))
      let ea = r
      ;(q[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (e) =>
            (async function (e, t) {
              try {
                let a = await (0, Z.wl)("chatgpt_account_data_export")
                if (!(await t())) return "cancelled"
                return (
                  await _.Request.safePost("/accounts/data_export", { additionalHeaders: a, expectedIdentity: e }),
                  "requested"
                )
              } catch (e) {
                throw e
              }
            })(e, () => ea(e))),
          (q[3] = i))
        : (i = q[3]),
        q[4] !== B || q[5] !== F || q[6] !== z
          ? ((g = async (e, t) => {
              "cancelled" !== e &&
                (await ea(t)) &&
                "reauthenticating" !== e &&
                ((K.current = null),
                F(!1),
                z
                  .get(E.Id)
                  .success(
                    B.formatMessage({
                      id: "settings.chatGpt.dataControls.export.success",
                      defaultMessage: "Data export requested. You’ll receive an email when it’s ready.",
                      description:
                        "Success toast after an end user requests a ChatGPT account data export from Data controls. The export is delivered later by email.",
                    }),
                  ))
            }),
            (q[4] = B),
            (q[5] = F),
            (q[6] = z),
            (q[7] = g))
          : (g = q[7]),
        q[8] !== B || q[9] !== z
          ? ((m = async (e, t) => {
              ;(await ea(t)) &&
                (e instanceof Y.fk && e.errorCode,
                (K.current = null),
                e instanceof Y.fk && 409 === e.status
                  ? z
                      .get(E.Id)
                      .danger(
                        B.formatMessage({
                          id: "settings.chatGpt.dataControls.export.conflictError",
                          defaultMessage:
                            "Your existing export is still being processed. You’ll receive an email when it’s ready.",
                          description:
                            "Warning shown when an end user requests another ChatGPT account data export while an earlier export is still processing.",
                        }),
                        { errorAnalytics: { toastId: "settings.chatGpt.dataControls.export.conflictError" } },
                      )
                  : e instanceof Y.fk &&
                      (401 === e.status ||
                        "reauth_required" === e.errorCode ||
                        "phone_verification_required" === e.errorCode)
                    ? z
                        .get(E.Id)
                        .danger(
                          B.formatMessage({
                            id: "settings.chatGpt.dataControls.export.reauthError",
                            defaultMessage: "Please sign in again, then retry your data export.",
                            description:
                              "Error toast shown when ChatGPT requires an end user to reauthenticate before requesting an account data export.",
                          }),
                          { errorAnalytics: { toastId: "settings.chatGpt.dataControls.export.reauthError" } },
                        )
                    : e instanceof Y.fk && "email_required" === e.errorCode
                      ? z
                          .get(E.Id)
                          .danger(
                            B.formatMessage({
                              id: "settings.chatGpt.dataControls.export.emailError",
                              defaultMessage: "Add and verify an email address in ChatGPT before requesting an export.",
                              description:
                                "Error toast shown when a phone-only ChatGPT account must add and verify an email address before requesting an account data export.",
                            }),
                            { errorAnalytics: { toastId: "settings.chatGpt.dataControls.export.emailError" } },
                          )
                      : z
                          .get(E.Id)
                          .danger(
                            B.formatMessage({
                              id: "settings.chatGpt.dataControls.export.error",
                              defaultMessage: "Couldn’t request your data export. Please try again later.",
                              description:
                                "Error toast shown when a ChatGPT account data export request fails for an unspecified reason.",
                            }),
                            { errorAnalytics: { toastId: "settings.chatGpt.dataControls.export.error" } },
                          ))
            }),
            (q[8] = B),
            (q[9] = z),
            (q[10] = m))
          : (m = q[10]),
        q[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (e, t, a) => {
              Q.current === a && (Q.current = null)
            }),
            (q[11] = p))
          : (p = q[11]),
        q[12] !== g || q[13] !== m
          ? ((f = { mutationFn: i, onSuccess: g, onError: m, onSettled: p }), (q[12] = g), (q[13] = m), (q[14] = f))
          : (f = q[14]))
      let en = (0, l.n)(f),
        es = en.isPending || "reauthenticating" === en.data
      q[15] !== en
        ? ((x = function (e) {
            K.current === e && null == Q.current && ((Q.current = e), en.mutate(e))
          }),
          (q[15] = en),
          (q[16] = x))
        : (x = q[16])
      let er = x
      q[17] !== F
        ? ((b = function () {
            ;((K.current = null), et(null), F(!1))
          }),
          (q[17] = F),
          (q[18] = b))
        : (b = q[18])
      let ei = b
      q[19] !== ei || q[20] !== ee || q[21] !== B || q[22] !== $ || q[23] !== z || q[24] !== er
        ? ((v = async function (e) {
            if (null == ee || K.current !== ee || J.current === ee) return
            J.current = ee
            let t = !1
            try {
              ;(await ea(ee)) &&
                (t = await (0, V.W)({ accountId: ee.accountId, email: e, queryClient: $, userId: ee.userId }))
            } catch {}
            if (!(await ea(ee))) {
              K.current === ee && ei()
              return
            }
            if ((et(null), !t)) {
              ;((K.current = null),
                z
                  .get(E.Id)
                  .danger(
                    B.formatMessage({
                      id: "settings.chatGpt.dataControls.export.emailRefreshError",
                      defaultMessage: "Email verified. Sign in again, then retry your data export.",
                      description:
                        "Error after an end user verifies an email for ChatGPT data export but their browser account session cannot be refreshed.",
                    }),
                    { errorAnalytics: { toastId: "settings.chatGpt.dataControls.export.emailRefreshError" } },
                  ))
              return
            }
            ;((X.current = ee), er(ee))
          }),
          (q[19] = ei),
          (q[20] = ee),
          (q[21] = B),
          (q[22] = $),
          (q[23] = z),
          (q[24] = er),
          (q[25] = v))
        : (v = q[25])
      let eo = v,
        el = H && null == ee
      return (
        q[26] !== ei || q[27] !== es
          ? ((C = (e) => {
              e || es || ei()
            }),
            (q[26] = ei),
            (q[27] = es),
            (q[28] = C))
          : (C = q[28]),
        q[29] !== W || q[30] !== es || q[31] !== er
          ? ((A = (e) => {
              if ((e.preventDefault(), !es && null == Q.current && null != W.userId && null != W.accountId)) {
                let e = { userId: W.userId, accountId: W.accountId }
                ;((K.current = e), er(e))
              }
            }),
            (q[29] = W),
            (q[30] = es),
            (q[31] = er),
            (q[32] = A))
          : (A = q[32]),
        q[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, n.jsx)(I.c7, {
              title: (0, n.jsx)(G.L3, {
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
          ? ((w = (0, n.jsx)(I.OO, {
              children: (0, n.jsx)(G.rr, {
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
          ? ((k = (0, n.jsx)(h.A, { id: "common.cancel", defaultMessage: "Cancel", description: "Cancel button" })),
            (q[35] = k))
          : (k = q[35]),
        q[36] !== ei || q[37] !== es
          ? ((N = (0, n.jsx)(j.$, { color: "secondary", disabled: es, type: "button", onClick: ei, children: k })),
            (q[36] = ei),
            (q[37] = es),
            (q[38] = N))
          : (N = q[38]),
        q[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.export.dialog.confirm",
              defaultMessage: "Confirm export",
              description:
                "Primary button in the ChatGPT data export confirmation dialog. It submits the end user’s account export request.",
            })),
            (q[39] = S))
          : (S = q[39]),
        q[40] !== es
          ? ((P = (0, n.jsx)(j.$, { loading: es, type: "submit", children: S })), (q[40] = es), (q[41] = P))
          : (P = q[41]),
        q[42] !== N || q[43] !== P
          ? ((O = (0, n.jsx)(I.OO, { children: (0, n.jsxs)(I.Es, { children: [N, P] }) })),
            (q[42] = N),
            (q[43] = P),
            (q[44] = O))
          : (O = q[44]),
        q[45] !== A || q[46] !== O
          ? ((L = (0, n.jsxs)(I.R4, { as: "form", onSubmit: A, children: [T, w, O] })),
            (q[45] = A),
            (q[46] = O),
            (q[47] = L))
          : (L = q[47]),
        q[48] !== el || q[49] !== C || q[50] !== L
          ? ((M = (0, n.jsx)(G.lG, { open: el, onOpenChange: C, children: L })),
            (q[48] = el),
            (q[49] = C),
            (q[50] = L),
            (q[51] = M))
          : (M = q[51]),
        q[52] !== eo || q[53] !== ee ? ((D = null), (q[52] = eo), (q[53] = ee), (q[54] = D)) : (D = q[54]),
        q[55] !== M || q[56] !== D
          ? ((U = (0, n.jsxs)(n.Fragment, { children: [M, D] })), (q[55] = M), (q[56] = D), (q[57] = U))
          : (U = q[57]),
        U
      )
    }
    a("PkPC")
    var Q = a("DBCl"),
      J = a("rvFo"),
      X = a("eShZ")
    let ee = "/settings/daybreak_safety_training"
    function et(e) {
      let t,
        a,
        r,
        c,
        d,
        u = (0, s.c)(21),
        { identity: g, onSaveError: m } = e,
        p = (0, o.jE)(),
        f = ["daybreak-safety-training", g.accountId, g.userId],
        x = { expectedIdentity: g, additionalHeaders: { "ChatGPT-Account-ID": g.accountId, [Q.zBc]: g.accountId } },
        {
          data: y,
          isError: b,
          isFetching: v,
          isFetchedAfterMount: C,
          refetch: A,
        } = (0, i.I)({
          queryKey: f,
          staleTime: J.D.ONE_MINUTE,
          refetchOnMount: "always",
          retryOnMount: !0,
          refetchOnWindowFocus: !0,
          queryFn: async (e) => {
            let { signal: t } = e
            try {
              return await _.Request.safeGet(ee, { ...x, signal: t })
            } catch (e) {
              if (e instanceof X.fk && 404 === e.status) return null
              throw e
            }
          },
        }),
        T = JSON.stringify(f)
      u[0] !== T ? ((t = { id: T }), (u[0] = T), (u[1] = t)) : (t = u[1])
      let w = async (e) => {
          let t = await _.Request.safePatch(ee, { ...x, requestBody: { enabled: e } })
          if (t.enabled !== e) throw Error("Daybreak safety training preference was not saved")
          return t
        },
        k = async (e) => {
          ;(await p.cancelQueries({ queryKey: f, exact: !0 }), p.setQueryData(f, e))
        },
        G = () => p.invalidateQueries({ queryKey: f, exact: !0 })
      u[2] !== t || u[3] !== w || u[4] !== k || u[5] !== G
        ? ((a = { scope: t, mutationFn: w, onSuccess: k, onError: G }),
          (u[2] = t),
          (u[3] = w),
          (u[4] = k),
          (u[5] = G),
          (u[6] = a))
        : (a = u[6])
      let I = (0, l.n)(a)
      if (b) {
        let e, t, a, s
        return (
          u[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("span", {
                role: "alert",
                children: (0, n.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.loadError",
                  defaultMessage: "Couldn’t load all data controls",
                  description: "Some Data controls could not be read. The Retry button reloads them.",
                }),
              })),
              (u[7] = e))
            : (e = u[7]),
          u[8] !== A ? ((t = () => void A()), (u[8] = A), (u[9] = t)) : (t = u[9]),
          u[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)(h.A, {
                id: "common.retry",
                defaultMessage: "Retry",
                description: "Button to retry an operation after an error",
              })),
              (u[10] = a))
            : (a = u[10]),
          u[11] !== v || u[12] !== t
            ? ((s = (0, n.jsx)(q.ic, {
                label: e,
                control: (0, n.jsx)(j.$, { color: "secondary", size: "toolbar", loading: v, onClick: t, children: a }),
              })),
              (u[11] = v),
              (u[12] = t),
              (u[13] = s))
            : (s = u[13]),
          s
        )
      }
      return C && null != y
        ? (u[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, n.jsx)(h.A, {
                id: "settings.chatGpt.dataControls.daybreakSafetyTraining",
                defaultMessage: "Improve the model for safety",
                description: "Label for the personal Daybreak safety training preference in Data controls",
              })),
              (r = (0, n.jsx)(h.A, {
                id: "settings.chatGpt.dataControls.daybreakSafetyTraining.description",
                defaultMessage: "Allow OpenAI to use your Daybreak chats to improve model safety.",
                description:
                  "Description of the Daybreak safety training switch, independent of general model improvement",
              })),
              (u[14] = r),
              (u[15] = c))
            : ((r = u[14]), (c = u[15])),
          u[16] !== y.enabled || u[17] !== v || u[18] !== m || u[19] !== I
            ? ((d = (0, n.jsx)(q.ic, {
                label: c,
                description: r,
                control: (e) =>
                  (0, n.jsx)(O.l, {
                    ...e,
                    checked: y.enabled,
                    disabled: v || I.isPending,
                    onChange: (e) => I.mutate(e, { onError: m }),
                  }),
              })),
              (u[16] = y.enabled),
              (u[17] = v),
              (u[18] = m),
              (u[19] = I),
              (u[20] = d))
            : (d = u[20]),
          d)
        : null
    }
    var ea = a("uMJm"),
      en = a("Qs18"),
      es = a("KtYA"),
      er = a("rSJp"),
      ei = a("HOLv"),
      eo = a("OMIV")
    function el(e) {
      let t,
        a,
        r,
        i,
        o,
        d,
        g,
        m,
        p,
        x,
        y = (0, s.c)(28),
        { onBack: b } = e,
        v = (0, c.gh)(R.u),
        A = (0, u.A)(),
        T = (0, B.Zj)("500337272"),
        { data: w, isError: k, isFetching: G, isLoading: I, refetch: N } = (0, c.Ul)(en.nk)
      ;(y[0] !== T || y[1] !== v
        ? ((t = async (e) => {
            let { key: t, value: a } = e,
              n = v.get(C.Sk),
              s = v.get(f.chatGptAuthenticatedUserId$)
            if (null == n || null == s) return
            let r = v.query.snapshot(en.nk),
              i = (0, er.LF)(T) ? { analytics: !1, marketing: !1, personalization: !1 } : { [t]: a },
              o = (0, es.D)(v, i, !0),
              l = !0,
              c = v.watch((e) => {
                let { get: t } = e
                ;(n !== t(C.Sk) || s !== t(f.chatGptAuthenticatedUserId$)) && (l = !1)
              }),
              d = () => {
                if (!l) return !1
                let e = o.getCurrentUpdate()
                if (0 === Object.keys(e).length) return !1
                let t = (0, er.LF)(T)
                return (
                  r.setData((a) =>
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
            return r
              .cancel()
              .then(async () => {
                if (!d()) return
                let e = async () => {
                  ;(await r.cancel(), d())
                }
                return _.Request.safePost("/user_granular_consent", {
                  requestBody: { granular_consent: i },
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
              v.get(E.Id).danger(
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
          ? ((r = { mutationFn: t, onError: a }), (y[6] = t), (y[7] = a), (y[8] = r))
          : (r = y[8]))
      let S = (0, l.n)(r),
        P = !(w?.isConsentRequired ?? !0)
      ;(y[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, n.jsx)(h.A, {
            id: "settings.chatGpt.marketingPrivacy.title",
            defaultMessage: "Marketing privacy",
            description: "Title of the ChatGPT Marketing privacy subpage inside Data controls.",
          })),
          (y[9] = i))
        : (i = y[9]),
        y[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(ei.I, { className: "rtl:rotate-180", asset: ea.x })),
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
          ? ((g = (0, n.jsxs)(j.$, { color: "ghostActive", size: "toolbar", onClick: b, children: [o, d] })),
            (y[12] = b),
            (y[13] = g))
          : (g = y[13]))
      let L = I || void 0
      return (
        y[14] !== w || y[15] !== P || y[16] !== A || y[17] !== k || y[18] !== G || y[19] !== N || y[20] !== S
          ? ((m = k
              ? (0, n.jsx)(q.ic, {
                  label: (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.marketingPrivacy.loadError",
                    defaultMessage: "Couldn’t load marketing privacy settings",
                    description:
                      "Error shown on the ChatGPT Marketing privacy settings subpage when the end user's current consent choices cannot be loaded. Concise settings-row text with no placeholders.",
                  }),
                  control: (0, n.jsx)(j.$, {
                    color: "secondary",
                    loading: G,
                    size: "toolbar",
                    onClick: () => void N(),
                    children: (0, n.jsx)(h.A, {
                      id: "common.retry",
                      defaultMessage: "Retry",
                      description: "Button to retry an operation after an error",
                    }),
                  }),
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(q.ic, {
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
                        checked: w?.marketing ?? P,
                        disabled: null == w || S.isPending,
                        onChange: (e) => S.mutate({ key: "marketing", value: e }),
                      }),
                    }),
                    (0, n.jsx)(q.ic, {
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
                        checked: w?.personalization ?? P,
                        disabled: null == w || S.isPending,
                        onChange: (e) => S.mutate({ key: "personalization", value: e }),
                      }),
                    }),
                  ],
                })),
            (y[14] = w),
            (y[15] = P),
            (y[16] = A),
            (y[17] = k),
            (y[18] = G),
            (y[19] = N),
            (y[20] = S),
            (y[21] = m))
          : (m = y[21]),
        y[22] !== L || y[23] !== m
          ? ((p = (0, n.jsx)(U.X, {
              children: (0, n.jsx)(U.X.Content, { children: (0, n.jsx)(F.t, { "aria-busy": L, children: m }) }),
            })),
            (y[22] = L),
            (y[23] = m),
            (y[24] = p))
          : (p = y[24]),
        y[25] !== p || y[26] !== g
          ? ((x = (0, n.jsx)(D.P, { title: i, backSlot: g, children: p })), (y[25] = p), (y[26] = g), (y[27] = x))
          : (x = y[27]),
        x
      )
    }
    var ec = a("O666")
    let ed = (0, c.un)(
      R.u,
      ({ get: e }) =>
        !e(ec.H$, { layer: "4107938382", parameter: "disable_precise_location" }) &&
        (e(eo.JW, "1957563541") || e(ec.H$, { layer: "4107938382", parameter: "enable_precise_location" })),
    )
    var eu = a("VMa7"),
      eh = a("OX9U"),
      eg = a("SZLI"),
      em = a("Ot7V"),
      ep = a("X6Vn")
    function ef() {
      let e,
        t = (0, s.c)(5),
        a = (0, c.Ul)(ed),
        { data: r } = (0, c.Ul)(C.s6),
        i = (0, c.Ul)(eh.d)
      if (!a) return null
      let o = i ?? null,
        l = r?.preciseLocationAllowed,
        d = r?.amphoraLocks?.precise_location_allowed,
        u = r?.preciseLocationRestrictedReason
      return (
        t[0] !== o || t[1] !== l || t[2] !== d || t[3] !== u
          ? ((e = (0, n.jsx)(ex, { permission: o, allowed: l, locked: d, restrictedReason: u })),
            (t[0] = o),
            (t[1] = l),
            (t[2] = d),
            (t[3] = u),
            (t[4] = e))
          : (e = t[4]),
        e
      )
    }
    function ex(e) {
      let t,
        a,
        r,
        i,
        o,
        l,
        g,
        m = (0, s.c)(30),
        { permission: p, allowed: x, locked: y, restrictedReason: b } = e,
        v = (0, c.gh)(R.u),
        A = (0, u.A)(),
        [T, w] = (0, d.useState)(!1),
        k = !1 === x && (!0 === y || !!b),
        G = !0 === x && "granted" === p,
        I = k
          ? "https://help.openai.com/en/articles/12315553-parental-controls-on-chatgpt-faq#location"
          : "https://help.openai.com/en/articles/9237897-chatgpt-search#location"
      m[0] !== I
        ? ((t = (e) =>
            (0, n.jsx)(N.G, {
              href: I,
              initiator: "external_link",
              appearance: "secondary",
              openTarget: "external-browser",
              children: e,
            })),
          (m[0] = I),
          (m[1] = t))
        : (t = m[1])
      let P = t
      if (k) {
        let e
        ;(m[2] !== P || m[3] !== b
          ? ((e = b
              ? (0, n.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.location.restrictedReason",
                  defaultMessage: "{reason} <link>Learn more</link>",
                  description:
                    "Server-provided parental-control restriction reason followed by a link to the parental-controls location FAQ",
                  values: { reason: b, link: P },
                })
              : (0, n.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.location.restricted",
                  defaultMessage:
                    "Restricted by parental controls. ChatGPT won't use your device's location. <link>Learn more</link>",
                  description:
                    "Explains that parental controls block device location, with a link to the parental-controls FAQ",
                  values: { link: P },
                })),
            (m[2] = P),
            (m[3] = b),
            (m[4] = e))
          : (e = m[4]),
          (a = e))
      } else if (G) {
        let e
        ;(m[5] !== P
          ? ((e = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.location.granted",
              defaultMessage:
                "Allow ChatGPT to use your device's precise location when providing information. <link>Learn more</link>",
              description:
                "Location setting description when browser permission is granted, with a link to location help",
              values: { link: P },
            })),
            (m[5] = P),
            (m[6] = e))
          : (e = m[6]),
          (a = e))
      } else {
        let e
        ;(m[7] !== P
          ? ((e = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.location.promptOrDenied",
              defaultMessage:
                "When enabled, your location helps ChatGPT provide more relevant information, like local recommendations, news, and weather. <link>Learn more</link>",
              description:
                "Location setting description when browser permission is undecided or denied, with a link to location help",
              values: { link: P },
            })),
            (m[7] = P),
            (m[8] = e))
          : (e = m[8]),
          (a = e))
      }
      m[9] !== G
        ? ((r = G
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
          (m[9] = G),
          (m[10] = r))
        : (r = m[10])
      let O = r
      m[11] !== x || m[12] !== A || m[13] !== v
        ? ((i = async function (e) {
            let t = v.get(C.Sk),
              a = v.get(f.chatGptAuthenticatedUserId$),
              n = v.get(f.o8),
              s = v.query.snapshot(C.s6),
              r = () => v.get(C.Sk) === t && v.get(f.chatGptAuthenticatedUserId$) === a && v.get(f.o8) === n
            try {
              let a = !e
              if (e && !1 === x) {
                let e = await s.fetch()
                if (
                  !r() ||
                  !v.get(ed) ||
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
                !e && (await s.cancel(), s.setData(ey), r() && (0, L.q0)()),
                await s.invalidate()),
                e &&
                  r() &&
                  (await (0, eg.Z)(
                    v,
                    "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_SETTINGS",
                    "CHATGPT_LOCATION_PERMISSION_INTERACTION_STATUS_ROW",
                  )))
            } catch {
              r() &&
                v
                  .get(E.Id)
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
          (m[11] = x),
          (m[12] = A),
          (m[13] = v),
          (m[14] = i))
        : (i = m[14])
      let M = i
      return (
        m[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.location",
              defaultMessage: "Location",
              description: "Label for precise location data control",
            })),
            (m[15] = o))
          : (o = m[15]),
        m[16] !== x ||
        m[17] !== G ||
        m[18] !== I ||
        m[19] !== y ||
        m[20] !== T ||
        m[21] !== p ||
        m[22] !== k ||
        m[23] !== v ||
        m[24] !== O ||
        m[25] !== M
          ? ((l = (e) => {
              let { "aria-describedby": t } = e
              return k || G || (!0 === x && "denied" === p)
                ? (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsxs)(j.$, {
                        "aria-describedby": t,
                        color: "ghost",
                        size: "toolbar",
                        onClick: (e) => {
                          k || "denied" !== p
                            ? (0, em.PQ)({
                                event: e,
                                href: I,
                                initiator: "external_link",
                                openTarget: "external-browser",
                              })
                            : (0, ep.qf)(v, eu.ChatGptLocationPermissionDeniedDialog)
                        },
                        children: [O, (0, n.jsx)(S.uM3, {})],
                      }),
                      G &&
                        (0, n.jsx)(j.$, {
                          "aria-describedby": t,
                          color: "secondary",
                          size: "toolbar",
                          disabled: !0 === y || T,
                          loading: T,
                          onClick: () => {
                            ;(w(!0), M(!1).finally(() => w(!1)))
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
                : (0, n.jsx)(j.$, {
                    "aria-describedby": t,
                    color: "secondary",
                    size: "toolbar",
                    disabled: null == x || T,
                    loading: T,
                    onClick: () => {
                      ;(w(!0), M(!0).finally(() => w(!1)))
                    },
                    children: (0, n.jsx)(h.A, {
                      id: "chatgptConversations.preciseLocation.turnOn",
                      defaultMessage: "Turn on",
                      description: "Button requesting permission to use precise location for local ChatGPT answers",
                    }),
                  })
            }),
            (m[16] = x),
            (m[17] = G),
            (m[18] = I),
            (m[19] = y),
            (m[20] = T),
            (m[21] = p),
            (m[22] = k),
            (m[23] = v),
            (m[24] = O),
            (m[25] = M),
            (m[26] = l))
          : (l = m[26]),
        m[27] !== a || m[28] !== l
          ? ((g = (0, n.jsx)(q.ic, { label: o, description: a, control: l })), (m[27] = a), (m[28] = l), (m[29] = g))
          : (g = m[29]),
        g
      )
    }
    function ey(e) {
      return null == e ? e : { ...e, preciseLocationAllowed: !1 }
    }
    var eb = a("sPCu"),
      e_ = a("zKCW")
    function ev() {
      let e,
        t = (0, s.c)(2),
        a = (0, c.Ul)(!0)
      return (t[0] !== a ? ((e = a ? (0, n.jsx)(eC, {}) : null), (t[0] = a), (t[1] = e)) : (e = t[1]), e)
    }
    function eC() {
      let e,
        t,
        a,
        r,
        i,
        o,
        l = (0, s.c)(17),
        d = (0, u.A)(),
        { data: g, isError: m, refetch: p } = (0, c.Ul)(C.s6),
        { mutate: f, isPending: x, error: y } = (0, c.Ul)(C.wQ)
      l[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((e = (0, n.jsx)(h.A, {
            id: "settings.chatGpt.dataControls.networkAccess",
            defaultMessage: "Work network access",
            description: "Label for ChatGPT Work network access",
          })),
          (l[0] = e))
        : (e = l[0])
      let b = g?.enableFloraNetworkAccess === !0,
        _ = null == g || m || x || g.amphoraLocks?.enable_flora_network_access === !0
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
          ? ((r = (0, n.jsx)(q.ic, {
              label: e,
              control: (0, n.jsx)(O.l, { checked: b, disabled: _, onChange: t, ariaLabel: a }),
            })),
            (l[5] = b),
            (l[6] = _),
            (l[7] = t),
            (l[8] = a),
            (l[9] = r))
          : (r = l[9]),
        l[10] !== y || l[11] !== m || l[12] !== p
          ? ((i =
              m || null != y
                ? (0, n.jsx)(e_.l, {
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
                      p()
                    },
                  })
                : null),
            (l[10] = y),
            (l[11] = m),
            (l[12] = p),
            (l[13] = i))
          : (i = l[13]),
        l[14] !== r || l[15] !== i
          ? ((o = (0, n.jsxs)(n.Fragment, { children: [r, i] })), (l[14] = r), (l[15] = i), (l[16] = o))
          : (o = l[16]),
        o
      )
    }
    function eA(e) {
      let t,
        a,
        r,
        i,
        o,
        d,
        g,
        m,
        p,
        f,
        x,
        y,
        b,
        v = (0, s.c)(37),
        { accountId: C, userId: A, open: T, onOpenChange: w, triggerContent: k } = e,
        N = (0, c.gh)(R.u),
        S = (0, u.A)()
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
      let { mutate: P, isPending: O } = (0, l.n)(t)
      v[3] !== O || v[4] !== w
        ? ((a = (e) => {
            O || w(e)
          }),
          (v[3] = O),
          (v[4] = w),
          (v[5] = a))
        : (a = v[5])
      let L = !O
      return (
        v[6] !== S || v[7] !== O || v[8] !== P || v[9] !== w || v[10] !== N
          ? ((r = (e) => {
              ;(e.preventDefault(),
                O ||
                  P(void 0, {
                    onSuccess: () => {
                      ;(w(!1),
                        N.get(E.Id).success(
                          S.formatMessage({
                            id: "chatgpt.settings.data_controls.work_reset.toast.success",
                            defaultMessage: "Work reset",
                            description: "Success toast after resetting the user's cloud Work environment",
                          }),
                        ))
                    },
                    onError: (e) => {
                      N.get(E.Id).danger(
                        S.formatMessage({
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
            (v[6] = S),
            (v[7] = O),
            (v[8] = P),
            (v[9] = w),
            (v[10] = N),
            (v[11] = r))
          : (r = v[11]),
        v[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)(G.L3, {
              children: (0, n.jsx)(h.A, {
                id: "chatgpt.settings.data_controls.work_reset.modal.title",
                defaultMessage: "Reset ChatGPT Work?",
                description: "Title of the confirmation dialog before resetting the user's cloud Work environment",
              }),
            })),
            (v[12] = i))
          : (i = v[12]),
        v[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(I.OO, {
              children: (0, n.jsx)(I.c7, {
                title: i,
                subtitle: (0, n.jsx)(G.rr, {
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
          ? ((g = (0, n.jsx)(h.A, {
              id: "chatgpt.settings.data_controls.work_reset.modal.button.cancel",
              defaultMessage: "Cancel",
              description: "Closes the Work reset confirmation without changing the environment",
            })),
            (v[16] = g))
          : (g = v[16]),
        v[17] !== O || v[18] !== d
          ? ((m = (0, n.jsx)(j.$, { color: "secondary", disabled: O, type: "button", onClick: d, children: g })),
            (v[17] = O),
            (v[18] = d),
            (v[19] = m))
          : (m = v[19]),
        v[20] !== O
          ? ((p = O
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
            (v[20] = O),
            (v[21] = p))
          : (p = v[21]),
        v[22] !== O || v[23] !== p
          ? ((f = (0, n.jsx)(j.$, { color: "danger", loading: O, type: "submit", children: p })),
            (v[22] = O),
            (v[23] = p),
            (v[24] = f))
          : (f = v[24]),
        v[25] !== f || v[26] !== m
          ? ((x = (0, n.jsx)(I.OO, { children: (0, n.jsxs)(I.Es, { children: [m, f] }) })),
            (v[25] = f),
            (v[26] = m),
            (v[27] = x))
          : (x = v[27]),
        v[28] !== x || v[29] !== r
          ? ((y = (0, n.jsxs)(I.R4, { as: "form", className: "select-none", onSubmit: r, children: [o, x] })),
            (v[28] = x),
            (v[29] = r),
            (v[30] = y))
          : (y = v[30]),
        v[31] !== T || v[32] !== y || v[33] !== a || v[34] !== L || v[35] !== k
          ? ((b = (0, n.jsx)(G.lG, {
              open: T,
              triggerContent: k,
              onOpenChange: a,
              showDialogClose: L,
              size: "compact",
              children: y,
            })),
            (v[31] = T),
            (v[32] = y),
            (v[33] = a),
            (v[34] = L),
            (v[35] = k),
            (v[36] = b))
          : (b = v[36]),
        b
      )
    }
    function eT() {
      let e,
        t,
        a = (0, s.c)(6),
        r = (0, c._U)(eo.JW, "1625797156"),
        i = (0, c.Ul)(f.kf),
        o = (0, c.Ul)(f.chatGptAuthenticatedAccountId$),
        l = (0, c.Ul)(f.o8),
        d = "loaded" === i.status && "workspace" === i.structure,
        u = r && d
      a[0] !== u ? ((e = { enabled: u }), (a[0] = u), (a[1] = e)) : (e = a[1])
      let { data: h } = (0, c._U)(b.t, o, e)
      if (
        !r ||
        null == o ||
        null == l ||
        "loaded" !== i.status ||
        ("personal" !== i.structure && (!d || h?.features?.includes("flora") !== !0))
      )
        return null
      let g = `${l}:${o}`
      return (
        a[2] !== o || a[3] !== g || a[4] !== l
          ? ((t = (0, n.jsx)(ew, { accountId: o, userId: l }, g)), (a[2] = o), (a[3] = g), (a[4] = l), (a[5] = t))
          : (t = a[5]),
        t
      )
    }
    function ew(e) {
      let t,
        a,
        r = (0, s.c)(5),
        { accountId: i, userId: o } = e,
        [l, c] = (0, d.useState)(!1)
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(h.A, {
              id: "chatgpt.settings.data_controls.work_reset.row.label",
              defaultMessage: "Reset ChatGPT Work",
              description: "Label for the Data controls setting that resets the user's cloud Work environment",
            })),
            (r[0] = t))
          : (t = r[0]),
        r[1] !== i || r[2] !== l || r[3] !== o
          ? ((a = (0, n.jsx)(q.ic, {
              className: "select-none",
              label: t,
              control: (e) =>
                (0, n.jsx)(eA, {
                  accountId: i,
                  userId: o,
                  open: l,
                  onOpenChange: c,
                  triggerContent: (0, n.jsx)(j.$, {
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
            (r[1] = i),
            (r[2] = l),
            (r[3] = o),
            (r[4] = a))
          : (a = r[4]),
        a
      )
    }
    let ek = (0, P._)(async () => (await a.e(114243).then(a.bind(a, "PTJJ"))).AdsControlsSettings),
      ej = (0, P._)(async () => (await a.e(642456).then(a.bind(a, "ylb7"))).InformationSharingSettings)
    function eG() {
      let e,
        t,
        r,
        N,
        P,
        Z,
        Y,
        V,
        Q,
        J,
        X,
        ee,
        ea,
        en,
        es,
        er,
        ei,
        eo,
        ec,
        ed,
        eu,
        eh,
        eg,
        em,
        ep,
        ex,
        ey,
        e_,
        eC,
        eA,
        ew,
        eG,
        eE,
        eO,
        eL,
        eM,
        eR,
        eD,
        eU,
        eq,
        eH,
        eF,
        ez,
        eB,
        eW,
        e$,
        eZ,
        eY,
        eV,
        eK,
        eQ,
        eJ = (0, s.c)(166),
        eX = (0, c.gh)(R.u),
        e0 = (0, u.A)(),
        { userId: e1, accountId: e2 } = (0, y.As)(),
        { data: e3, isError: e4, isFetching: e5 } = (0, c.Ul)(C.s6),
        { data: e6 } = (0, k.YL)(),
        e7 = e6?.structure === "workspace",
        e8 = (0, c.Ul)($.u),
        e9 = (0, c.Ul)(C.Sk)
      eJ[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = { preview: !1 }), (eJ[0] = e)) : (e = eJ[0])
      let { data: te, isError: tt } = (0, k.YL)(void 0, e),
        ta = (0, c.Ul)(T.Je),
        tn = te?.structure === "workspace",
        ts = (0, B.Zj)("2502526155")
      eJ[1] !== e2 || eJ[2] !== e1
        ? ((t = ["training-disclosure-verified-access", e2, e1]), (eJ[1] = e2), (eJ[2] = e1), (eJ[3] = t))
        : (t = eJ[3])
      let tr = ts && null != e1 && null != e2 && te?.id === e2
      ;(eJ[4] !== e2 || eJ[5] !== e1
        ? ((r = (e) => {
            let { signal: t } = e
            return _.Request.safeGet("/accounts/verified_access", {
              signal: t,
              additionalHeaders: null == e2 ? void 0 : { "ChatGPT-Account-ID": e2 },
              expectedIdentity: null == e2 || null == e1 ? void 0 : { accountId: e2, userId: e1 },
            })
          }),
          (eJ[4] = e2),
          (eJ[5] = e1),
          (eJ[6] = r))
        : (r = eJ[6]),
        eJ[7] !== t || eJ[8] !== tr || eJ[9] !== r
          ? ((N = { queryKey: t, enabled: tr, queryFn: r, staleTime: 6e4 }),
            (eJ[7] = t),
            (eJ[8] = tr),
            (eJ[9] = r),
            (eJ[10] = N))
          : (N = eJ[10]))
      let { data: ti, isSuccess: to } = (0, i.I)(N),
        tl = ts && te?.id === e2 && to && ti.programs.some(eP),
        tc = (0, o.jE)()
      eJ[11] !== te || eJ[12] !== e9 || eJ[13] !== e1
        ? ((P = (0, z.U)({ account: te, userId: e1, settingsAccountId: e9 })),
          (eJ[11] = te),
          (eJ[12] = e9),
          (eJ[13] = e1),
          (eJ[14] = P))
        : (P = eJ[14])
      let td = P,
        { data: tu, isError: th, isFetching: tg, refetch: tm } = (0, i.I)(td),
        tp = tn && th,
        tf = tn && tu?.data_usage_for_training === "disallowed"
      eJ[15] !== e7 ? ((Z = { enabled: e7 }), (eJ[15] = e7), (eJ[16] = Z)) : (Z = eJ[16])
      let { data: tx } = (0, c._U)(b.t, e6?.id ?? null, Z)
      eJ[17] !== e6 || eJ[18] !== e7 || eJ[19] !== tx?.features
        ? ((Y =
            null != e6 && "quorum" !== e6.plan_type && (!e7 || tx?.features?.includes("workspace_share_links") === !0)),
          (eJ[17] = e6),
          (eJ[18] = e7),
          (eJ[19] = tx?.features),
          (eJ[20] = Y))
        : (Y = eJ[20])
      let ty = Y
      eJ[21] !== te
        ? ((V = te?.structure === "workspace" && (0, W.V$)(te.plan_type)), (eJ[21] = te), (eJ[22] = V))
        : (V = eJ[22])
      let tb = V,
        t_ = tb && te?.id === e2
      eJ[23] !== t_ ? ((Q = { enabled: t_ }), (eJ[23] = t_), (eJ[24] = Q)) : (Q = eJ[24])
      let { data: tv, isError: tC } = (0, c._U)(x.Jk, te?.id ?? "", Q)
      eJ[25] !== tb || eJ[26] !== tC || eJ[27] !== tv?.permissions
        ? ((J = tb && !tC && tv?.permissions?.includes("chatgpt.workspace.feature.data-export.access") === !0),
          (eJ[25] = tb),
          (eJ[26] = tC),
          (eJ[27] = tv?.permissions),
          (eJ[28] = J))
        : (J = eJ[28])
      let tA = J,
        tT = null != e1 && null != e2 && !tt && te?.id === e2 && ("workspace" !== te.structure || tA),
        tw = null == te ? null : `${e1}:${e2}:${te.id}`,
        tk = te?.id
      eJ[29] !== e2 || eJ[30] !== tk || eJ[31] !== e1
        ? ((X = ["chatgpt-data-export-reauth", e1, e2, tk]), (eJ[29] = e2), (eJ[30] = tk), (eJ[31] = e1), (eJ[32] = X))
        : (X = eJ[32])
      let tj = X
      ;(eJ[33] !== te?.id || eJ[34] !== e1
        ? ((ee = (e) => {
            let { signal: t } = e
            return (async function (e, t, n) {
              if (null == e || null == t) return !1
              let { consumeDataExportReauthentication: s } = await a.e(957871).then(a.bind(a, "n0Uu"))
              return s({ userId: e, accountId: t, signal: n })
            })(e1, te?.id, t)
          }),
          (eJ[33] = te?.id),
          (eJ[34] = e1),
          (eJ[35] = ee))
        : (ee = eJ[35]),
        eJ[36] !== tj || eJ[37] !== ee || !1 !== eJ[38]
          ? ((ea = {
              queryKey: tj,
              queryFn: ee,
              enabled: !1,
              staleTime: 1 / 0,
              gcTime: 0,
              retry: !1,
              refetchOnWindowFocus: !1,
            }),
            (eJ[36] = tj),
            (eJ[37] = ee),
            (eJ[38] = !1),
            (eJ[39] = ea))
          : (ea = eJ[39]))
      let { data: tG } = (0, i.I)(ea),
        tI = (0, B.Zj)("3157804138"),
        tN = (0, B.Zj)("1850361504")
      ;((0, B.Zj)("500944450"), (0, d.useState)(!1))
      let [tS, tP] = (0, g.ok)(),
        tE = tS.get("view"),
        [tO, tL] = (0, d.useState)(null),
        [tM, tR] = (0, d.useState)(!1),
        [tD, tU] = (0, d.useState)(null)
      ;(eJ[40] !== tc || eJ[41] !== eX
        ? ((en = async (e) => {
            let t = eX.get(m.j),
              a = eX.get(C.Sk),
              n = eX.get(f.chatGptAuthenticatedUserId$)
            ;(await _.Request.safePatch("/conversations", {
              requestBody: "archive" === e ? { is_archived: !0 } : { is_visible: !1 },
            }),
              M.appServices?.dictationHistoryRetention != null &&
                "delete" === e &&
                null != a &&
                null != n &&
                (await M.appServices.dictationHistoryRetention.deleteConversation({ accountId: a, userId: n }),
                await tc.invalidateQueries({ queryKey: ["dictation-history"] })),
              (0, p.bl)(eX, t),
              eX.get(m.j) === t && eX.set(v.mD, []),
              (0, w.g6)(eX),
              tc.invalidateQueries({ queryKey: [w.s5] }),
              await (0, A.RK)({ includePersisted: !0 }).catch(eS))
          }),
          (eJ[40] = tc),
          (eJ[41] = eX),
          (eJ[42] = en))
        : (en = eJ[42]),
        eJ[43] === Symbol.for("react.memo_cache_sentinel") ? ((es = () => tU(null)), (eJ[43] = es)) : (es = eJ[43]))
      let tq = (0, l.n)({ mutationFn: en, onSuccess: es, onError: () => tH() })
      function tH() {
        eX.get(E.Id).danger(
          e0.formatMessage({
            id: "settings.chatGpt.dataControls.updateError",
            defaultMessage: "Could not update data controls",
            description: "Error toast when ChatGPT data controls cannot be updated",
          }),
          { errorAnalytics: { toastId: "settings.chatGpt.dataControls.updateError" } },
        )
      }
      eJ[44] !== te ||
      eJ[45] !== tn ||
      eJ[46] !== tc ||
      eJ[47] !== eX ||
      eJ[48] !== e9 ||
      eJ[49] !== tH ||
      eJ[50] !== td
        ? ((er = async function (e, t) {
            "precise_location_allowed" !== e || t || (0, L.q0)()
            let a = eX.query.snapshot(C.s6),
              n = a.getData()
            if (
              "training_allowed" === e &&
              (null == n ||
                eX.get(C.s6).isError ||
                n.amphoraLocks?.training_allowed === !0 ||
                null == te ||
                te.id !== e9 ||
                eX.get(C.Sk) !== e9 ||
                (tn &&
                  (tc.getQueryState(td.queryKey)?.status === "error" ||
                    tc.getQueryData(td.queryKey)?.data_usage_for_training !== "permitted")))
            )
              return
            let s = eX.get(C.Sk)
            try {
              ;(await _.Request.safePatch("/settings/account_user_setting", {
                additionalHeaders: null == s ? void 0 : { "ChatGPT-Account-ID": s },
                parameters: { query: { feature: e, value: t } },
              }),
                "precise_location_allowed" !== e || t || (0, L.q0)(),
                "training_allowed" === e && a.setData((e) => (null == e ? e : { ...e, trainingAllowed: t })),
                await a.invalidate())
            } catch {
              eX.get(C.Sk) === s && tH()
            }
          }),
          (eJ[44] = te),
          (eJ[45] = tn),
          (eJ[46] = tc),
          (eJ[47] = eX),
          (eJ[48] = e9),
          (eJ[49] = tH),
          (eJ[50] = td),
          (eJ[51] = er))
        : (er = eJ[51])
      let tF = er
      eJ[52] !== tS || eJ[53] !== tP
        ? ((ei = function (e) {
            let t = new URLSearchParams(tS)
            ;(null != e ? t.set("view", e) : t.delete("view"), tP(t))
          }),
          (eJ[52] = tS),
          (eJ[53] = tP),
          (eJ[54] = ei))
        : (ei = eJ[54])
      let tz = ei
      if (e8 && ["ads", "ads-history", "ads-topics"].includes(tE ?? "")) {
        let e
        return (
          eJ[55] !== tS || eJ[56] !== tP
            ? ((e = (0, n.jsx)(ek, {
                onBack: () => {
                  let e = new URLSearchParams(tS)
                  ;(e.delete("view"), e.delete("adsView"), tP(e))
                },
              })),
              (eJ[55] = tS),
              (eJ[56] = tP),
              (eJ[57] = e))
            : (e = eJ[57]),
          e
        )
      }
      if ("marketing-privacy" === tE && tI) {
        let e
        return (
          eJ[58] !== tz
            ? ((e = (0, n.jsx)(el, { onBack: () => tz(null) })), (eJ[58] = tz), (eJ[59] = e))
            : (e = eJ[59]),
          e
        )
      }
      if ("information-sharing" === tE && tN) {
        let e
        return (
          eJ[60] !== tz
            ? ((e = (0, n.jsx)(ej, { onBack: () => tz(null) })), (eJ[60] = tz), (eJ[61] = e))
            : (e = eJ[61]),
          e
        )
      }
      if (tl) {
        let e
        ;(eJ[62] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.training.trustedAccess.description",
              defaultMessage:
                "Allow your content to be used to improve our models for you and other users. We take steps to protect your privacy. <strong>Eligible Trusted Access content may be used for safety training.</strong> <link>Learn more</link>",
              description:
                "Description under Improve the model for everyone in ChatGPT Data controls on web and desktop, shown only to users with active Trusted Access. Explains content use and privacy, including a safety-training disclosure that also applies when the general model-improvement switch is off or disabled. Trusted Access is the program name. The strong tag emphasizes the complete safety-training sentence; link opens the Data Controls FAQ. Multi-sentence body copy.",
              values: { strong: eN, link: eI },
            })),
            (eJ[62] = e))
          : (e = eJ[62]),
          (eo = e))
      } else if (tf) {
        let e
        ;(eJ[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.training.unavailableDescription",
              defaultMessage:
                "By default, OpenAI does not use data from this workspace to train or improve its models. This plan does not offer an option to opt in to model training.",
              description:
                "Explains why the ChatGPT model-improvement switch is off and disabled for a workspace: data from the workspace is not used for training by default, and the workspace plan does not offer a model-training opt-in",
            })),
            (eJ[63] = e))
          : (e = eJ[63]),
          (eo = e))
      } else {
        let e
        ;(eJ[64] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.training.description",
              defaultMessage: "Control whether your chats are used for model training",
              description:
                "Explains that the ChatGPT model-improvement switch controls whether the person's chats can be used to train models",
            })),
            (eJ[64] = e))
          : (e = eJ[64]),
          (eo = e))
      }
      ;(eJ[65] === Symbol.for("react.memo_cache_sentinel")
        ? ((ec = (0, n.jsx)(H.s, { showChatGptDataControlsLabel: !0, slug: "data-controls" })), (eJ[65] = ec))
        : (ec = eJ[65]),
        eJ[66] !== ty || eJ[67] !== e6 || eJ[68] !== e0 || eJ[69] !== tM
          ? ((ed = ty
              ? (0, n.jsx)(q.ic, {
                  label: (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.dataControls.sharedLinks",
                    defaultMessage: "Shared links",
                    description: "Label for managing shared ChatGPT links from Data controls",
                  }),
                  control: (0, n.jsx)(eb.V, {
                    accountId: e6.id,
                    open: tM,
                    onOpenChange: tR,
                    triggerContent: (0, n.jsx)(j.$, {
                      "aria-label": e0.formatMessage({
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
            (eJ[66] = ty),
            (eJ[67] = e6),
            (eJ[68] = e0),
            (eJ[69] = tM),
            (eJ[70] = ed))
          : (ed = eJ[70]),
        eJ[71] !== tg || eJ[72] !== e4 || eJ[73] !== e5 || eJ[74] !== tp || eJ[75] !== tm || eJ[76] !== eX
          ? ((eu =
              e4 || tp
                ? (0, n.jsx)(q.ic, {
                    label: (0, n.jsx)("span", {
                      role: "alert",
                      children: (0, n.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.training.loadError",
                        defaultMessage: "Couldn’t load model improvement settings",
                        description:
                          "Error in ChatGPT Data controls when the saved training preference or workspace eligibility cannot be loaded. The Retry button reloads the setting.",
                      }),
                    }),
                    control: (0, n.jsx)(j.$, {
                      color: "secondary",
                      size: "toolbar",
                      loading: e5 || tg,
                      onClick: () => {
                        ;(e4 && eX.query.snapshot(C.s6).invalidate(), tp && tm())
                      },
                      children: (0, n.jsx)(h.A, {
                        id: "common.retry",
                        defaultMessage: "Retry",
                        description: "Button to retry an operation after an error",
                      }),
                    }),
                  })
                : null),
            (eJ[71] = tg),
            (eJ[72] = e4),
            (eJ[73] = e5),
            (eJ[74] = tp),
            (eJ[75] = tm),
            (eJ[76] = eX),
            (eJ[77] = eu))
          : (eu = eJ[77]),
        eJ[78] === Symbol.for("react.memo_cache_sentinel")
          ? ((eh = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.training",
              defaultMessage: "Improve the model for everyone",
              description: "Label for ChatGPT model training data control",
            })),
            (eJ[78] = eh))
          : (eh = eJ[78]),
        eJ[79] !== te ||
        eJ[80] !== e0 ||
        eJ[81] !== th ||
        eJ[82] !== tn ||
        eJ[83] !== e4 ||
        eJ[84] !== tf ||
        eJ[85] !== e9 ||
        eJ[86] !== tu?.data_usage_for_training ||
        eJ[87] !== tF ||
        eJ[88] !== e3
          ? ((eg =
              e4 && null == e3
                ? null
                : (e) => {
                    let { "aria-describedby": t } = e
                    return (0, n.jsx)(O.l, {
                      "aria-describedby": t,
                      checked: !tf && e3?.trainingAllowed === !0,
                      disabled:
                        null == e3 ||
                        e4 ||
                        e3.amphoraLocks?.training_allowed === !0 ||
                        null == te ||
                        te.id !== e9 ||
                        (tn && (th || tu?.data_usage_for_training !== "permitted")),
                      onChange: (e) => void tF("training_allowed", e),
                      ariaLabel: e0.formatMessage({
                        id: "settings.chatGpt.dataControls.training.ariaLabel",
                        defaultMessage: "Allow chats to improve the model",
                        description: "Accessible label for ChatGPT model training data control",
                      }),
                    })
                  }),
            (eJ[79] = te),
            (eJ[80] = e0),
            (eJ[81] = th),
            (eJ[82] = tn),
            (eJ[83] = e4),
            (eJ[84] = tf),
            (eJ[85] = e9),
            (eJ[86] = tu?.data_usage_for_training),
            (eJ[87] = tF),
            (eJ[88] = e3),
            (eJ[89] = eg))
          : (eg = eJ[89]),
        eJ[90] !== eg || eJ[91] !== eo
          ? ((em = (0, n.jsx)(q.ic, { label: eh, description: eo, control: eg })),
            (eJ[90] = eg),
            (eJ[91] = eo),
            (eJ[92] = em))
          : (em = eJ[92]),
        eJ[93] !== te || eJ[94] !== ta || eJ[95] !== e9 || eJ[96] !== tH
          ? ((ep =
              te?.structure === "personal" && null != ta && te.id === ta.accountId && e9 === ta.accountId
                ? (0, n.jsx)(et, { identity: ta, onSaveError: tH }, JSON.stringify([ta.accountId, ta.userId]))
                : null),
            (eJ[93] = te),
            (eJ[94] = ta),
            (eJ[95] = e9),
            (eJ[96] = tH),
            (eJ[97] = ep))
          : (ep = eJ[97]),
        eJ[98] === Symbol.for("react.memo_cache_sentinel")
          ? ((ex = (0, n.jsx)(ef, {})),
            (ey = (0, n.jsx)(ev, {})),
            (e_ = (0, n.jsx)(eT, {})),
            (eC = !1),
            (eJ[98] = ex),
            (eJ[99] = ey),
            (eJ[100] = e_),
            (eJ[101] = eC))
          : ((ex = eJ[98]), (ey = eJ[99]), (e_ = eJ[100]), (eC = eJ[101])),
        eJ[102] !== tN || eJ[103] !== tz
          ? ((eA = tN
              ? (0, n.jsx)(q.kG, {
                  edgeRounding: "surface",
                  label: (0, n.jsx)(h.A, {
                    id: "settings.informationSharing.rowTitle",
                    defaultMessage: "Information shared with apps",
                    description:
                      "Label for the gated Data Controls settings row that opens the page where a ChatGPT user can review and revoke app-specific permission to automatically fill contact information.",
                  }),
                  onClick: () => tz("information-sharing"),
                  trailing: (0, n.jsx)(S.uM3, {}),
                })
              : null),
            (eJ[102] = tN),
            (eJ[103] = tz),
            (eJ[104] = eA))
          : (eA = eJ[104]),
        eJ[105] === Symbol.for("react.memo_cache_sentinel")
          ? ((ew = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.archivedChats",
              defaultMessage: "Archived chats",
              description: "Label for archived ChatGPT chats",
            })),
            (eJ[105] = ew))
          : (ew = eJ[105]),
        eJ[106] === Symbol.for("react.memo_cache_sentinel")
          ? ((eG = (0, n.jsx)(q.kG, {
              edgeRounding: "surface",
              label: ew,
              to: "/settings/archived-chats",
              trailing: (0, n.jsx)(S.uM3, {}),
            })),
            (eJ[106] = eG))
          : (eG = eJ[106]),
        eJ[107] === Symbol.for("react.memo_cache_sentinel")
          ? ((eE = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.archiveAll",
              defaultMessage: "Archive all chats",
              description: "Label for archiving all ChatGPT chats",
            })),
            (eJ[107] = eE))
          : (eE = eJ[107]),
        eJ[108] === Symbol.for("react.memo_cache_sentinel")
          ? ((eO = (0, n.jsx)(q.ic, {
              label: eE,
              control: (0, n.jsx)(j.$, {
                color: "secondary",
                size: "toolbar",
                onClick: () => tU("archive"),
                children: (0, n.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.archive",
                  defaultMessage: "Archive all",
                  description: "Button to archive all ChatGPT chats",
                }),
              }),
            })),
            (eJ[108] = eO))
          : (eO = eJ[108]),
        eJ[109] === Symbol.for("react.memo_cache_sentinel")
          ? ((eL = (0, n.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.deleteAll",
              defaultMessage: "Delete all chats",
              description: "Label for deleting all ChatGPT chats",
            })),
            (eJ[109] = eL))
          : (eL = eJ[109]),
        eJ[110] === Symbol.for("react.memo_cache_sentinel")
          ? ((eM = (0, n.jsx)(q.ic, {
              label: eL,
              control: (0, n.jsx)(j.$, {
                color: "danger",
                size: "toolbar",
                onClick: () => tU("delete"),
                children: (0, n.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.delete",
                  defaultMessage: "Delete all",
                  description: "Button to delete all ChatGPT chats",
                }),
              }),
            })),
            (eJ[110] = eM))
          : (eM = eJ[110]),
        eJ[111] !== tT || eJ[112] !== tw || eJ[113] !== e0
          ? ((eR = tT
              ? (0, n.jsx)(q.ic, {
                  label: (0, n.jsx)(h.A, {
                    id: "settings.chatGpt.dataControls.export.label",
                    defaultMessage: "Export data",
                    description:
                      "Label for requesting an export of an end user’s ChatGPT account data from Data controls.",
                  }),
                  control: (0, n.jsx)(j.$, {
                    "aria-label": e0.formatMessage({
                      id: "settings.chatGpt.dataControls.export.ariaLabel",
                      defaultMessage: "Export ChatGPT account data",
                      description:
                        "Accessible label for the button that opens the ChatGPT account data export confirmation dialog from Data controls.",
                    }),
                    color: "secondary",
                    size: "toolbar",
                    onClick: () => tL(tw),
                    children: (0, n.jsx)(h.A, {
                      id: "settings.chatGpt.dataControls.export.button",
                      defaultMessage: "Export",
                      description:
                        "Button opening the ChatGPT account data export confirmation dialog from Data controls.",
                    }),
                  }),
                })
              : null),
            (eJ[111] = tT),
            (eJ[112] = tw),
            (eJ[113] = e0),
            (eJ[114] = eR))
          : (eR = eJ[114]),
        eJ[115] !== tS || eJ[116] !== tP || eJ[117] !== e8
          ? ((eD = e8
              ? (0, n.jsx)(q.kG, {
                  edgeRounding: "surface",
                  label: (0, n.jsx)(h.A, {
                    id: "settings.ads.settings.title",
                    defaultMessage: "Ads controls",
                    description: "Heading at the top of the advertising control settings view",
                  }),
                  onClick: () => {
                    let e = new URLSearchParams(tS)
                    ;(e.set("view", "ads"), e.delete("adsView"), tP(e))
                  },
                  trailing: (0, n.jsx)(S.uM3, {}),
                })
              : null),
            (eJ[115] = tS),
            (eJ[116] = tP),
            (eJ[117] = e8),
            (eJ[118] = eD))
          : (eD = eJ[118]),
        eJ[119] !== e0 || eJ[120] !== tI || eJ[121] !== tz
          ? ((eU = tI
              ? (0, n.jsx)(q.kG, {
                  ariaLabel: e0.formatMessage({
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
                  onClick: () => tz("marketing-privacy"),
                  trailing: (0, n.jsx)(S.uM3, {}),
                })
              : null),
            (eJ[119] = e0),
            (eJ[120] = tI),
            (eJ[121] = tz),
            (eJ[122] = eU))
          : (eU = eJ[122]),
        eJ[123] !== ed ||
        eJ[124] !== eu ||
        eJ[125] !== em ||
        eJ[126] !== ep ||
        eJ[127] !== eA ||
        eJ[128] !== eR ||
        eJ[129] !== eD ||
        eJ[130] !== eU
          ? ((eq = (0, n.jsx)(U.X, {
              children: (0, n.jsx)(U.X.Content, {
                children: (0, n.jsxs)(F.t, {
                  children: [ed, eu, em, ep, ex, ey, e_, eC, eA, null, eG, eO, eM, eR, eD, null, eU],
                }),
              }),
            })),
            (eJ[123] = ed),
            (eJ[124] = eu),
            (eJ[125] = em),
            (eJ[126] = ep),
            (eJ[127] = eA),
            (eJ[128] = eR),
            (eJ[129] = eD),
            (eJ[130] = eU),
            (eJ[131] = eq))
          : (eq = eJ[131]),
        eJ[132] !== tT || eJ[133] !== tw || eJ[134] !== tO || eJ[135] !== tj || eJ[136] !== tG || eJ[137] !== eX
          ? ((eH =
              tT && (tO === tw || !0 === tG)
                ? (0, n.jsx)(
                    K,
                    {
                      open: !0,
                      onOpenChange: (e) => {
                        ;(e ? tL(tw) : tL((e) => (e === tw ? null : e)), e || eX.queryClient.setQueryData(tj, !1))
                      },
                    },
                    tw,
                  )
                : null),
            (eJ[132] = tT),
            (eJ[133] = tw),
            (eJ[134] = tO),
            (eJ[135] = tj),
            (eJ[136] = tG),
            (eJ[137] = eX),
            (eJ[138] = eH))
          : (eH = eJ[138]))
      let tB = null != tD
      ;(eJ[139] === Symbol.for("react.memo_cache_sentinel")
        ? ((eF = (e) => {
            e || tU(null)
          }),
          (eJ[139] = eF))
        : (eF = eJ[139]),
        eJ[140] !== tD || eJ[141] !== tq
          ? ((ez = (e) => {
              ;(e.preventDefault(), null != tD && tq.mutate(tD))
            }),
            (eJ[140] = tD),
            (eJ[141] = tq),
            (eJ[142] = ez))
          : (ez = eJ[142]),
        eJ[143] !== tD
          ? ((eB = (0, n.jsx)(I.c7, {
              title: (0, n.jsx)(G.L3, {
                children:
                  "delete" === tD
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
            (eJ[143] = tD),
            (eJ[144] = eB))
          : (eB = eJ[144]),
        eJ[145] !== tD
          ? ((eW = (0, n.jsx)(G.rr, {
              asChild: !0,
              children: (0, n.jsx)("p", {
                className: "text-sm text-secondary",
                children:
                  "delete" === tD
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
            (eJ[145] = tD),
            (eJ[146] = eW))
          : (eW = eJ[146]),
        eJ[147] === Symbol.for("react.memo_cache_sentinel")
          ? ((e$ = (0, n.jsx)(j.$, {
              color: "secondary",
              type: "button",
              onClick: () => tU(null),
              children: (0, n.jsx)(h.A, {
                id: "common.cancel",
                defaultMessage: "Cancel",
                description: "Cancel button",
              }),
            })),
            (eJ[147] = e$))
          : (e$ = eJ[147]))
      let tW = "delete" === tD ? "danger" : "primary"
      return (
        eJ[148] !== tD
          ? ((eZ =
              "delete" === tD
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
            (eJ[148] = tD),
            (eJ[149] = eZ))
          : (eZ = eJ[149]),
        eJ[150] !== tq.isPending || eJ[151] !== tW || eJ[152] !== eZ
          ? ((eY = (0, n.jsxs)(I.Es, {
              children: [e$, (0, n.jsx)(j.$, { color: tW, loading: tq.isPending, type: "submit", children: eZ })],
            })),
            (eJ[150] = tq.isPending),
            (eJ[151] = tW),
            (eJ[152] = eZ),
            (eJ[153] = eY))
          : (eY = eJ[153]),
        eJ[154] !== ez || eJ[155] !== eB || eJ[156] !== eW || eJ[157] !== eY
          ? ((eV = (0, n.jsxs)(I.R4, { as: "form", onSubmit: ez, children: [eB, eW, eY] })),
            (eJ[154] = ez),
            (eJ[155] = eB),
            (eJ[156] = eW),
            (eJ[157] = eY),
            (eJ[158] = eV))
          : (eV = eJ[158]),
        eJ[159] !== tB || eJ[160] !== eV
          ? ((eK = (0, n.jsx)(G.lG, { open: tB, onOpenChange: eF, children: eV })),
            (eJ[159] = tB),
            (eJ[160] = eV),
            (eJ[161] = eK))
          : (eK = eJ[161]),
        eJ[162] !== eq || eJ[163] !== eH || eJ[164] !== eK
          ? ((eQ = (0, n.jsxs)(D.P, { title: ec, children: [eq, null, eH, eK] })),
            (eJ[162] = eq),
            (eJ[163] = eH),
            (eJ[164] = eK),
            (eJ[165] = eQ))
          : (eQ = eJ[165]),
        eQ
      )
    }
    function eI(e) {
      return (0, n.jsx)(N.G, {
        href: "https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt",
        initiator: "external_link",
        underline: "always",
        children: e,
      })
    }
    function eN(e) {
      return (0, n.jsx)("strong", { children: e })
    }
    function eS() {}
    function eP(e) {
      return "active" === e.state && e.grants.length > 0
    }
    ;((0, P._)(r.A2),
      (0, P._)(async function () {
        return (await a.e(494463).then(a.bind(a, "hqYW"))).ClaudeImportDialog
      }))
  },
  Sg0s(e, t, a) {
    var n = a("Au4v"),
      s = a("vysM"),
      r = a("F9GV")
    a.d(
      t,
      {},
      {
        W: async function ({ accountId: e, email: t, queryClient: a, userId: i }) {
          if (null == i || null == e) return !1
          let o = await (0, n.loadBrowserChatGptAuth)()
          if (o?.userId !== i || o.accountId !== e) return !1
          let l = await (0, n.refreshBrowserChatGptAuth)({
            accessToken: o.accessToken,
            method: "POST",
            path: "/accounts/add_email/verify",
            reason: "verify_otp",
          })
          if (l?.userId !== i || l.accountId !== e) return !1
          await Promise.all([
            a.invalidateQueries({ queryKey: ["chatgpt-current-user"] }),
            a.invalidateQueries({ queryKey: ["browser-chatgpt-auth"] }),
            a.invalidateQueries({ queryKey: ["change-email-eligibility", i, e] }),
          ])
          let c = await (0, n.loadBrowserChatGptAuth)()
          return (
            c?.userId === i &&
            c.accountId === e &&
            ((0, r.d)(t), await a.invalidateQueries({ queryKey: (0, s.m)(e, i).queryKey }).catch(() => {}), !0)
          )
        },
      },
    )
  },
  PkPC(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      r = a("E2yB"),
      i = a("xSOA"),
      o = a("zd8w"),
      l = a("oyxz"),
      c = a("Ghh3"),
      d = a("zKCW"),
      u = a("Sm6l"),
      h = a("JNtf"),
      g = a("mUDD"),
      m = a("zLIa"),
      p = a("GDNt"),
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
            I,
            N,
            S,
            P,
            E,
            O,
            L,
            M,
            R,
            D,
            U,
            q,
            H,
            F,
            z,
            B,
            W = (0, s.c)(118),
            {
              operation: $,
              socialUser: Z,
              initialEmail: Y,
              initialStep: V,
              initialError: K,
              addEmailTitle: Q,
              addEmailDescription: J,
              auth0ClientId: X,
              expectedIdentity: ee,
              onClose: et,
              onSuccess: ea,
              startChangeEmailReauth: en,
            } = e,
            [es, er] = (0, o.useState)(void 0 === Y ? "" : Y),
            [ei, eo] = (0, o.useState)(void 0 === V ? "email" : V),
            [el, ec] = (0, o.useState)(""),
            [ed, eu] = (0, o.useState)(K ?? null),
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
                  if ("change" === $ && e instanceof p.fk && (401 === e.status || "reauth_required" === e.errorCode))
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
                  e && (eu(null), t.resend || (er(t.email), ec(""), eo("otp")))
                }),
                (W[6] = a))
              : (a = W[6]),
            W[7] !== $
              ? ((x = (e, t) => {
                  "change" === $ && e instanceof p.fk && "sensitive_action_cooldown" === e.errorCode
                    ? eo("cooldown")
                    : eu((0, f.I)(e, t.resend ? "resend" : "begin", t.email))
                }),
                (W[7] = $),
                (W[8] = x))
              : (x = W[8]),
            W[9] !== t || W[10] !== x
              ? ((y = { mutationFn: t, onSuccess: a, onError: x }), (W[9] = t), (W[10] = x), (W[11] = y))
              : (y = W[11]))
          let eg = (0, i.n)(y)
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
                  "change" === $ && e instanceof p.fk && "sensitive_action_cooldown" === e.errorCode
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
          let em = (0, i.n)(v),
            ep = eg.isPending || em.isPending
          if ("cooldown" === ei) {
            let e, t, a, s, r, i
            return (
              W[25] !== et ? ((e = (e) => !e && et()), (W[25] = et), (W[26] = e)) : (e = W[26]),
              W[27] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, n.jsx)(g.OO, {
                    children: (0, n.jsx)(g.c7, {
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
                ? ((a = (0, n.jsx)(g.OO, {
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
                ? ((r = (0, n.jsxs)(g.R4, {
                    children: [
                      t,
                      a,
                      (0, n.jsx)(g.OO, {
                        spacing: "large",
                        children: (0, n.jsx)(g.Es, {
                          children: (0, n.jsx)(u.z, { color: "secondary", to: "/", onClick: et, children: s }),
                        }),
                      }),
                    ],
                  })),
                  (W[30] = et),
                  (W[31] = r))
                : (r = W[31]),
              W[32] !== e || W[33] !== r
                ? ((i = (0, n.jsx)(h.lG, { open: !0, onOpenChange: e, children: r })),
                  (W[32] = e),
                  (W[33] = r),
                  (W[34] = i))
                : (i = W[34]),
              i
            )
          }
          ;(W[35] !== et ? ((C = (e) => !e && et()), (W[35] = et), (W[36] = C)) : (C = W[36]),
            W[37] !== el || W[38] !== es || W[39] !== ep || W[40] !== eg || W[41] !== ei || W[42] !== em
              ? ((A = (e) => {
                  if ((e.preventDefault(), ep)) return
                  if ((eu(null), "otp" === ei)) {
                    ;/^[0-9]{6}$/.test(el) && em.mutate()
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
                    : r.WL.test(t)
                      ? eg.mutate({ email: t, resend: !1 })
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
                (W[39] = ep),
                (W[40] = eg),
                (W[41] = ei),
                (W[42] = em),
                (W[43] = A))
              : (A = W[43]),
            W[44] !== ei
              ? ((T =
                  "otp" === ei
                    ? (0, n.jsx)(l.A, {
                        id: "settings.chatGpt.email.verify.confirmEmailTitle",
                        defaultMessage: "Verify email",
                        description: "Title for the email verification-code dialog in Account settings.",
                      })
                    : null),
                (W[44] = ei),
                (W[45] = T))
              : (T = W[45]),
            W[46] !== Q || W[47] !== $ || W[48] !== ei
              ? ((w =
                  "email" === ei &&
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
                (W[48] = ei),
                (W[49] = w))
              : (w = W[49]),
            W[50] !== T || W[51] !== w
              ? ((k = (0, n.jsx)(g.OO, {
                  children: (0, n.jsx)(g.c7, {
                    title: (0, n.jsxs)(h.L3, { className: "select-none", children: [T, w] }),
                  }),
                })),
                (W[50] = T),
                (W[51] = w),
                (W[52] = k))
              : (k = W[52]),
            W[53] !== es || W[54] !== ei
              ? ((j =
                  "otp" === ei
                    ? (0, n.jsx)(l.A, {
                        id: "settings.chatGpt.email.verify.instruction",
                        defaultMessage: "Enter the 6-digit code we just sent to {email} to verify your email",
                        description:
                          "Instructions for verifying an account email. Email is the destination address the user entered.",
                        values: { email: es },
                      })
                    : null),
                (W[53] = es),
                (W[54] = ei),
                (W[55] = j))
              : (j = W[55]),
            W[56] !== J || W[57] !== $ || W[58] !== ei
              ? ((G =
                  "email" === ei &&
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
                (W[58] = ei),
                (W[59] = G))
              : (G = W[59]),
            W[60] !== j || W[61] !== G
              ? ((I = (0, n.jsxs)(h.rr, { className: "text-sm text-secondary select-text", children: [j, G] })),
                (W[60] = j),
                (W[61] = G),
                (W[62] = I))
              : (I = W[62]),
            W[63] !== $ || W[64] !== ei
              ? ((N =
                  "otp" === ei && "change" === $
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
                (W[64] = ei),
                (W[65] = N))
              : (N = W[65]),
            W[66] !== ei
              ? ((S = (0, n.jsx)("span", {
                  className: "select-none",
                  children:
                    "otp" === ei
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
                (W[66] = ei),
                (W[67] = S))
              : (S = W[67]),
            W[68] !== el || W[69] !== es || W[70] !== ed || W[71] !== eh || W[72] !== ep || W[73] !== ei
              ? ((P =
                  "otp" === ei
                    ? (0, n.jsx)(
                        m.pd,
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
                          disabled: ep,
                          "aria-invalid": null != ed,
                          "aria-describedby": null != ed ? eh : void 0,
                        },
                        "otp",
                      )
                    : (0, n.jsx)(
                        m.pd,
                        {
                          name: "email",
                          type: "email",
                          autoComplete: "email",
                          autoFocus: !0,
                          value: es,
                          onChange: (e) => {
                            ;(er(e.target.value), eu(null))
                          },
                          disabled: ep,
                          "aria-invalid": null != ed,
                          "aria-describedby": null != ed ? eh : void 0,
                        },
                        "email",
                      )),
                (W[68] = el),
                (W[69] = es),
                (W[70] = ed),
                (W[71] = eh),
                (W[72] = ep),
                (W[73] = ei),
                (W[74] = P))
              : (P = W[74]),
            W[75] !== S || W[76] !== P
              ? ((E = (0, n.jsxs)("label", { className: "flex flex-col gap-2 text-sm", children: [S, P] })),
                (W[75] = S),
                (W[76] = P),
                (W[77] = E))
              : (E = W[77]),
            W[78] !== ed || W[79] !== eh
              ? ((O =
                  null != ed
                    ? (0, n.jsx)("div", { id: eh, role: "alert", className: "text-sm text-danger", children: ed })
                    : null),
                (W[78] = ed),
                (W[79] = eh),
                (W[80] = O))
              : (O = W[80]),
            W[81] !== es || W[82] !== ep || W[83] !== eg || W[84] !== ei
              ? ((L =
                  "otp" === ei
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
                            disabled: ep,
                            loading: eg.isPending,
                            onClick: () => eg.mutate({ email: es, resend: !0 }),
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
                (W[82] = ep),
                (W[83] = eg),
                (W[84] = ei),
                (W[85] = L))
              : (L = W[85]),
            W[86] !== I || W[87] !== N || W[88] !== E || W[89] !== O || W[90] !== L
              ? ((M = (0, n.jsxs)(g.OO, { className: "gap-4", spacing: "large", children: [I, N, E, O, L] })),
                (W[86] = I),
                (W[87] = N),
                (W[88] = E),
                (W[89] = O),
                (W[90] = L),
                (W[91] = M))
              : (M = W[91]),
            W[92] !== et || W[93] !== ei
              ? ((R = () => {
                  "otp" === ei ? (eo("email"), ec(""), eu(null)) : et()
                }),
                (W[92] = et),
                (W[93] = ei),
                (W[94] = R))
              : (R = W[94]),
            W[95] !== ei
              ? ((D =
                  "otp" === ei
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
                (W[95] = ei),
                (W[96] = D))
              : (D = W[96]),
            W[97] !== ep || W[98] !== R || W[99] !== D
              ? ((U = (0, n.jsx)(u.$, { color: "secondary", type: "button", disabled: ep, onClick: R, children: D })),
                (W[97] = ep),
                (W[98] = R),
                (W[99] = D),
                (W[100] = U))
              : (U = W[100]))
          let ef = "otp" === ei ? em.isPending : eg.isPending,
            ex = ep || ("otp" === ei && 6 !== el.length)
          return (
            W[101] !== ei
              ? ((q =
                  "otp" === ei
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
                (W[101] = ei),
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
              ? ((F = (0, n.jsx)(g.OO, { spacing: "large", children: (0, n.jsxs)(g.Es, { children: [U, H] }) })),
                (W[107] = U),
                (W[108] = H),
                (W[109] = F))
              : (F = W[109]),
            W[110] !== A || W[111] !== k || W[112] !== M || W[113] !== F
              ? ((z = (0, n.jsxs)(g.R4, { as: "form", noValidate: !0, onSubmit: A, children: [k, M, F] })),
                (W[110] = A),
                (W[111] = k),
                (W[112] = M),
                (W[113] = F),
                (W[114] = z))
              : (z = W[114]),
            W[115] !== C || W[116] !== z
              ? ((B = (0, n.jsx)(h.lG, { open: !0, onOpenChange: C, children: z })),
                (W[115] = C),
                (W[116] = z),
                (W[117] = B))
              : (B = W[117]),
            B
          )
        },
      },
    )
  },
  Y8yr(e, t, a) {
    var n = a("ABep"),
      s = a("oyxz"),
      r = a("ASxG"),
      i = a("ZtSy"),
      o = a("GDNt")
    let l = r.object({ detail: r.literal("Email already linked to another account") })
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
                    (0, n.jsx)(i.G, {
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
    let r = s.looseObject({
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
            let a = r.parse(JSON.parse(t))
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
    let r = n.object({
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
              return r.parse(n)
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
      r = a("irkb"),
      i = a("T0Rc"),
      o = a("uris"),
      l = a("cE8H"),
      c = a("xSOA"),
      d = a("zTeN"),
      u = a("DBCl"),
      h = a("zd8w"),
      g = a("Wf1j"),
      m = a("oyxz"),
      p = a("Qgfj"),
      f = a("SPnB"),
      x = a("Ghh3"),
      y = a("jEN2"),
      b = a("Sm6l"),
      _ = a("JNtf"),
      v = a("mUDD"),
      C = a("ZtSy"),
      A = a("bVeK"),
      T = a("wZQ4"),
      w = a("RNul"),
      k = a("SGsN"),
      j = a("OWtl"),
      G = a("rvFo")
    let I = new URL(u.WaA).origin
    function N(e) {
      let t,
        a,
        u,
        p,
        f,
        x,
        y,
        C,
        A,
        w,
        N,
        U,
        H,
        F,
        z,
        B,
        W,
        $,
        Z,
        Y,
        V,
        K,
        Q,
        J,
        X,
        ee,
        et,
        ea,
        en,
        es,
        er,
        ei,
        eo,
        el,
        ec,
        ed,
        eu,
        eh,
        eg,
        em = (0, s.c)(121),
        { accountId: ep, open: ef, onCloseAutoFocus: ex, onOpenChange: ey, triggerContent: eb } = e,
        e_ = (0, d.gh)(j.u),
        ev = (0, g.A)(),
        eC = (0, r.jE)(),
        [eA, eT] = (0, h.useState)(!1),
        ew = (0, h.useRef)(null)
      em[0] !== ep ? ((t = ["chatgpt-shared-links", ep]), (em[0] = ep), (em[1] = t)) : (t = em[1])
      let ek = t
      ;(em[2] !== ek ? ((a = [...ek, "conversations"]), (em[2] = ek), (em[3] = a)) : (a = em[3]),
        em[4] !== ef || em[5] !== a
          ? ((u = { enabled: ef, queryKey: a, queryFn: R, staleTime: G.D.ONE_MINUTE }),
            (em[4] = ef),
            (em[5] = a),
            (em[6] = u))
          : (u = em[6]))
      let ej = (0, i.I)(u)
      ;(em[7] !== ek ? ((p = [...ek, "textdocs"]), (em[7] = ek), (em[8] = p)) : (p = em[8]),
        em[9] !== ef || em[10] !== p
          ? ((f = { enabled: ef, queryKey: p, queryFn: M, staleTime: G.D.ONE_MINUTE }),
            (em[9] = ef),
            (em[10] = p),
            (em[11] = f))
          : (f = em[11]))
      let eG = (0, i.I)(f),
        eI = (0, h.useRef)(null)
      ;(em[12] !== ek ? ((x = [...ek, "posts"]), (em[12] = ek), (em[13] = x)) : (x = em[13]),
        em[14] !== ef || em[15] !== x
          ? ((y = {
              enabled: ef,
              queryKey: x,
              initialPageParam: void 0,
              queryFn: L,
              getNextPageParam: O,
              staleTime: G.D.ONE_MINUTE,
            }),
            (em[14] = ef),
            (em[15] = x),
            (em[16] = y))
          : (y = em[16]))
      let eN = (0, o.q)(y)
      em[17] !== ek ? ((C = [...ek, "delete-all"]), (em[17] = ek), (em[18] = C)) : (C = em[18])
      let eS = C
      em[19] !== eS ? ((A = { mutationKey: eS, exact: !0 }), (em[19] = eS), (em[20] = A)) : (A = em[20])
      let eP = (0, l.l)(A) > 0
      ;(em[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = () => {
            eT(!1)
          }),
          (em[21] = w))
        : (w = em[21]),
        em[22] !== ev || em[23] !== e_
          ? ((N = () => {
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
            (em[22] = ev),
            (em[23] = e_),
            (em[24] = N))
          : (N = em[24]),
        em[25] !== eC || em[26] !== ek
          ? ((U = () => eC.invalidateQueries({ queryKey: ek })), (em[25] = eC), (em[26] = ek), (em[27] = U))
          : (U = em[27]),
        em[28] !== eS || em[29] !== N || em[30] !== U
          ? ((H = { mutationKey: eS, mutationFn: q, onSuccess: w, onError: N, onSettled: U }),
            (em[28] = eS),
            (em[29] = N),
            (em[30] = U),
            (em[31] = H))
          : (H = em[31]))
      let { mutate: eE } = (0, c.n)(H)
      if (em[32] !== ep || em[33] !== ef || em[34] !== ej || em[35] !== eN || em[36] !== eG) {
        let e,
          t,
          a = eN.data?.pages.flatMap(E) ?? [],
          s = eN.hasNextPage ? a.reduce(P, 1 / 0) : -1 / 0
        if (
          (em[41] !== ej.data?.items
            ? ((e = ej.data?.items ?? []), (em[41] = ej.data?.items), (em[42] = e))
            : (e = em[42]),
          em[43] !== eG.data?.shared_textdocs
            ? ((t = eG.data?.shared_textdocs ?? []), (em[43] = eG.data?.shared_textdocs), (em[44] = t))
            : (t = em[44]),
          (W = (function ({ conversations: e, posts: t, textdocs: a }) {
            return [
              ...e.map((e) => ({
                href: `${I}/share/${null == e.workspace_id ? "" : "e/"}${encodeURIComponent(e.id)}`,
                id: e.id,
                kind: "conversation",
                sharedAt: null == e.create_time ? 0 : Date.parse(e.create_time),
                title: e.title ?? null,
                type: "chat",
              })),
              ...a.map((e) => ({
                href: `${I}/canvas/shared/${encodeURIComponent(e.shared_textdoc_id)}`,
                id: e.shared_textdoc_id,
                kind: "textdoc",
                sharedAt: Date.parse(e.created_at),
                title: e.name,
                type: "canvas",
              })),
              ...t.map((e) => {
                var t
                return {
                  href: e.permalink ?? `${I}/s/${encodeURIComponent(e.id)}`,
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
          })({ conversations: e, posts: a, textdocs: t }).filter((e) => e.sharedAt >= s)),
          (B = ej.isLoading || eG.isLoading || eN.isLoading),
          (z = ej.isError || eG.isError || (eN.isError && !eN.isFetchNextPageError)),
          B)
        ) {
          let e
          ;(em[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("p", {
                className: "py-8 text-center text-sm text-secondary",
                role: "status",
                children: (0, n.jsx)(m.A, {
                  id: "settings.chatGpt.sharedLinks.loading",
                  defaultMessage: "Loading shared links…",
                  description: "Loading status in the ChatGPT Shared links management dialog",
                }),
              })),
              (em[45] = e))
            : (e = em[45]),
            (F = e))
        } else if (z) {
          let e, t, a, s
          ;(em[46] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("p", {
                className: "text-sm text-secondary",
                role: "alert",
                children: (0, n.jsx)(m.A, {
                  id: "settings.chatGpt.sharedLinks.loadError",
                  defaultMessage: "Could not load shared links",
                  description: "Error message shown when ChatGPT shared links cannot be loaded",
                }),
              })),
              (em[46] = e))
            : (e = em[46]),
            em[47] !== ej || em[48] !== eN || em[49] !== eG
              ? ((t = () => {
                  Promise.all([ej.refetch(), eG.refetch(), eN.refetch()])
                }),
                (em[47] = ej),
                (em[48] = eN),
                (em[49] = eG),
                (em[50] = t))
              : (t = em[50]),
            em[51] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)(m.A, {
                  id: "common.retry",
                  defaultMessage: "Retry",
                  description: "Button to retry an operation after an error",
                })),
                (em[51] = a))
              : (a = em[51]),
            em[52] !== t
              ? ((s = (0, n.jsxs)("div", {
                  className: "flex flex-col items-center gap-3 py-8 text-center",
                  children: [e, (0, n.jsx)(b.$, { color: "secondary", onClick: t, children: a })],
                })),
                (em[52] = t),
                (em[53] = s))
              : (s = em[53]),
            (F = s))
        } else if (0 !== W.length || eN.hasNextPage) {
          let e, t, a, s, r, i, o, l
          ;(em[55] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("th", {
                className: "px-3 py-2 text-start font-medium",
                scope: "col",
                children: (0, n.jsx)(m.A, {
                  id: "settings.chatGpt.sharedLinks.name",
                  defaultMessage: "Name",
                  description: "Name column heading in the ChatGPT Shared links management table",
                }),
              })),
              (em[55] = e))
            : (e = em[55]),
            em[56] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, n.jsx)("th", {
                  className: "px-3 py-2 text-start font-medium",
                  scope: "col",
                  children: (0, n.jsx)(m.A, {
                    id: "settings.chatGpt.sharedLinks.type",
                    defaultMessage: "Type",
                    description: "Content type column heading in the ChatGPT Shared links management table",
                  }),
                })),
                (em[56] = t))
              : (t = em[56]),
            em[57] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)("th", {
                  className: "px-3 py-2 text-start font-medium",
                  scope: "col",
                  children: (0, n.jsx)(m.A, {
                    id: "settings.chatGpt.sharedLinks.dateShared",
                    defaultMessage: "Date shared",
                    description: "Date column heading in the ChatGPT Shared links management table",
                  }),
                })),
                (em[57] = a))
              : (a = em[57]),
            em[58] === Symbol.for("react.memo_cache_sentinel")
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
                          children: (0, n.jsx)(m.A, {
                            id: "settings.chatGpt.sharedLinks.actions",
                            defaultMessage: "Actions",
                            description: "Accessible heading for actions in the ChatGPT Shared links management table",
                          }),
                        }),
                      }),
                    ],
                  }),
                })),
                (em[58] = s))
              : (s = em[58]),
            em[59] !== ep
              ? ((r = (e) => (0, n.jsx)(D, { accountId: ep, sharedLink: e }, `${ep}:${e.kind}:${e.id}`)),
                (em[59] = ep),
                (em[60] = r))
              : (r = em[60]))
          let c = (0, n.jsx)("tbody", { className: "max-sm:block", children: W.map(r) })
          ;(em[61] !== c
            ? ((i = (0, n.jsxs)("table", {
                className: "w-full border-collapse text-start text-sm max-sm:block",
                children: [s, c],
              })),
              (em[61] = c),
              (em[62] = i))
            : (i = em[62]),
            em[63] !== ef || em[64] !== eN
              ? ((o = eN.isFetchNextPageError
                  ? (0, n.jsx)(b.$, {
                      color: "secondary",
                      onClick: () => void eN.fetchNextPage(),
                      children: (0, n.jsx)(m.A, {
                        id: "common.retry",
                        defaultMessage: "Retry",
                        description: "Button to retry an operation after an error",
                      }),
                    })
                  : (0, n.jsx)(T.D, {
                      hasNextPage: ef && eN.hasNextPage,
                      isFetchingNextPage: eN.isFetchingNextPage,
                      onLoadNextPage: () => void eN.fetchNextPage({ cancelRefetch: !1 }),
                      rootRef: eI,
                    })),
                (em[63] = ef),
                (em[64] = eN),
                (em[65] = o))
              : (o = em[65]),
            em[66] !== i || em[67] !== o
              ? ((l = (0, n.jsxs)("div", {
                  ref: eI,
                  className: "min-h-0 overflow-auto rounded-xl border border-default",
                  children: [i, o],
                })),
                (em[66] = i),
                (em[67] = o),
                (em[68] = l))
              : (l = em[68]),
            (F = l))
        } else {
          let e
          ;(em[54] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("p", {
                className: "py-8 text-center text-sm text-secondary",
                children: (0, n.jsx)(m.A, {
                  id: "settings.chatGpt.sharedLinks.empty",
                  defaultMessage: "You have no shared links",
                  description: "Empty state in the ChatGPT Shared links management dialog",
                }),
              })),
              (em[54] = e))
            : (e = em[54]),
            (F = e))
        }
        ;((em[32] = ep),
          (em[33] = ef),
          (em[34] = ej),
          (em[35] = eN),
          (em[36] = eG),
          (em[37] = F),
          (em[38] = z),
          (em[39] = B),
          (em[40] = W))
      } else ((F = em[37]), (z = em[38]), (B = em[39]), (W = em[40]))
      ;(em[69] !== ex ? (($ = { onCloseAutoFocus: ex }), (em[69] = ex), (em[70] = $)) : ($ = em[70]),
        em[71] !== eP || em[72] !== ey
          ? ((Z = (e) => {
              eP || (e || eT(!1), ey(e))
            }),
            (em[71] = eP),
            (em[72] = ey),
            (em[73] = Z))
          : (Z = em[73]),
        em[74] === Symbol.for("react.memo_cache_sentinel")
          ? ((Y = (0, n.jsx)(_.L3, {
              children: (0, n.jsx)(m.A, {
                id: "settings.chatGpt.sharedLinks.title",
                defaultMessage: "Shared links",
                description: "Title of the ChatGPT Shared links management dialog",
              }),
            })),
            (em[74] = Y))
          : (Y = em[74]),
        em[75] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = (0, n.jsx)(v.c7, {
              className: "px-5 pt-5",
              title: Y,
              subtitle: (0, n.jsx)(_.rr, {
                children: (0, n.jsx)(m.A, {
                  id: "settings.chatGpt.sharedLinks.description",
                  defaultMessage:
                    "Anyone with a shared link can view the shared image, message, chat, or scheduled task. Deleting a shared link stops others from viewing that shared content. It does not delete your original content. <link>Learn more</link>",
                  description:
                    "Explanation in the ChatGPT Shared links management dialog. It tells users that link recipients can view shared content, removing a link revokes access, and original content remains. The link tag opens a help article.",
                  values: { link: S },
                }),
              }),
            })),
            (em[75] = V))
          : (V = em[75]),
        em[76] !== F
          ? ((K = (0, n.jsx)("div", { className: "flex min-h-0 flex-1 flex-col px-5", children: F })),
            (em[76] = F),
            (em[77] = K))
          : (K = em[77]),
        em[78] !== eP || em[79] !== z || em[80] !== B || em[81] !== W
          ? ((Q =
              B || z || !(W.length > 0)
                ? null
                : (0, n.jsx)(v.Es, {
                    className: "px-5 pb-5",
                    expandSingleButton: !1,
                    children: (0, n.jsx)(b.$, {
                      ref: ew,
                      color: "danger",
                      disabled: eP,
                      onClick: () => eT(!0),
                      children: (0, n.jsx)(m.A, {
                        id: "settings.chatGpt.sharedLinks.deleteAll",
                        defaultMessage: "Delete all shared links",
                        description:
                          "Destructive button in the ChatGPT Shared links management dialog that starts confirmation to revoke every shared link",
                      }),
                    }),
                  })),
            (em[78] = eP),
            (em[79] = z),
            (em[80] = B),
            (em[81] = W),
            (em[82] = Q))
          : (Q = em[82]),
        em[83] !== K || em[84] !== Q
          ? ((J = (0, n.jsxs)(v.R4, { className: "gap-4", size: "full", variant: "chatgpt", children: [V, K, Q] })),
            (em[83] = K),
            (em[84] = Q),
            (em[85] = J))
          : (J = em[85]),
        em[86] !== ef || em[87] !== $ || em[88] !== Z || em[89] !== J || em[90] !== eb
          ? ((X = (0, n.jsx)(_.lG, {
              open: ef,
              triggerContent: eb,
              contentProps: $,
              onOpenChange: Z,
              size: "xwideTall",
              variant: "chatgpt",
              children: J,
            })),
            (em[86] = ef),
            (em[87] = $),
            (em[88] = Z),
            (em[89] = J),
            (em[90] = eb),
            (em[91] = X))
          : (X = em[91]))
      let eO = ef && (eA || eP)
      em[92] !== eP
        ? ((ee = (e) => {
            eP || eT(e)
          }),
          (em[92] = eP),
          (em[93] = ee))
        : (ee = em[93])
      let eL = !eP
      return (
        em[94] === Symbol.for("react.memo_cache_sentinel")
          ? ((et = {
              onCloseAutoFocus: (e) => {
                ;(e.preventDefault(), document.activeElement === document.body && ew.current?.focus())
              },
            }),
            (em[94] = et))
          : (et = em[94]),
        em[95] !== eE || em[96] !== eP
          ? ((ea = (e) => {
              ;(e.preventDefault(), eP || (e.currentTarget.closest('[role="dialog"]')?.focus(), eE()))
            }),
            (em[95] = eE),
            (em[96] = eP),
            (em[97] = ea))
          : (ea = em[97]),
        em[98] === Symbol.for("react.memo_cache_sentinel")
          ? ((en = (0, n.jsx)(v.c7, {
              title: (0, n.jsx)(_.L3, {
                children: (0, n.jsx)(m.A, {
                  id: "settings.chatGpt.sharedLinks.deleteAllConfirmTitle",
                  defaultMessage: "Delete all shared links?",
                  description: "Title of the confirmation dialog before revoking every shared ChatGPT link",
                }),
              }),
            })),
            (em[98] = en))
          : (en = em[98]),
        em[99] === Symbol.for("react.memo_cache_sentinel")
          ? ((es = (0, n.jsx)(_.rr, {
              asChild: !0,
              children: (0, n.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, n.jsx)(m.A, {
                  id: "settings.chatGpt.sharedLinks.deleteAllConfirmDescription",
                  defaultMessage:
                    "People with these links will no longer be able to view the shared content. Your original content will not be deleted.",
                  description:
                    "Warning in the confirmation dialog before revoking every shared ChatGPT link; it clarifies that original content remains",
                }),
              }),
            })),
            (em[99] = es))
          : (es = em[99]),
        em[100] === Symbol.for("react.memo_cache_sentinel")
          ? ((er = () => eT(!1)),
            (ei = (0, n.jsx)(m.A, { id: "common.cancel", defaultMessage: "Cancel", description: "Cancel button" })),
            (em[100] = er),
            (em[101] = ei))
          : ((er = em[100]), (ei = em[101])),
        em[102] !== eP
          ? ((eo = (0, n.jsx)(b.$, { color: "secondary", disabled: eP, type: "button", onClick: er, children: ei })),
            (em[102] = eP),
            (em[103] = eo))
          : (eo = em[103]),
        em[104] === Symbol.for("react.memo_cache_sentinel")
          ? ((el = (0, n.jsx)(m.A, {
              id: "settings.chatGpt.sharedLinks.deleteAllConfirm",
              defaultMessage: "Delete all",
              description: "Button confirming revocation of every shared ChatGPT link",
            })),
            (em[104] = el))
          : (el = em[104]),
        em[105] !== eP
          ? ((ec = (0, n.jsx)(b.$, { color: "dangerSolid", loading: eP, type: "submit", children: el })),
            (em[105] = eP),
            (em[106] = ec))
          : (ec = em[106]),
        em[107] !== eo || em[108] !== ec
          ? ((ed = (0, n.jsxs)(v.Es, { children: [eo, ec] })), (em[107] = eo), (em[108] = ec), (em[109] = ed))
          : (ed = em[109]),
        em[110] !== ea || em[111] !== ed
          ? ((eu = (0, n.jsxs)(v.R4, { as: "form", onSubmit: ea, children: [en, es, ed] })),
            (em[110] = ea),
            (em[111] = ed),
            (em[112] = eu))
          : (eu = em[112]),
        em[113] !== eO || em[114] !== ee || em[115] !== eL || em[116] !== eu
          ? ((eh = (0, n.jsx)(_.lG, {
              open: eO,
              onOpenChange: ee,
              showDialogClose: eL,
              contentProps: et,
              children: eu,
            })),
            (em[113] = eO),
            (em[114] = ee),
            (em[115] = eL),
            (em[116] = eu),
            (em[117] = eh))
          : (eh = em[117]),
        em[118] !== X || em[119] !== eh
          ? ((eg = (0, n.jsxs)(n.Fragment, { children: [X, eh] })), (em[118] = X), (em[119] = eh), (em[120] = eg))
          : (eg = em[120]),
        eg
      )
    }
    function S(e) {
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
    function P(e, t) {
      return Math.min(e, 1e3 * t.posted_at)
    }
    function E(e) {
      return e.items
    }
    function O(e) {
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
        i,
        o,
        u,
        h,
        f,
        y,
        _,
        v,
        T,
        G,
        I,
        N,
        S,
        P,
        E = (0, s.c)(49),
        { accountId: O, sharedLink: L } = e,
        M = (0, d.gh)(j.u),
        R = (0, g.A)(),
        D = (0, r.jE)()
      E[0] !== O || E[1] !== L.id || E[2] !== L.kind
        ? ((t = ["chatgpt-shared-links", O, "delete", L.kind, L.id]),
          (E[0] = O),
          (E[1] = L.id),
          (E[2] = L.kind),
          (E[3] = t))
        : (t = E[3])
      let q = t
      E[4] !== q ? ((a = { mutationKey: q, exact: !0 }), (E[4] = q), (E[5] = a)) : (a = E[5])
      let H = (0, l.l)(a) > 0
      ;(E[6] !== L.id || E[7] !== L.kind
        ? ((i = async () => {
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
          (E[6] = L.id),
          (E[7] = L.kind),
          (E[8] = i))
        : (i = E[8]),
        E[9] !== O || E[10] !== D
          ? ((o = () => D.invalidateQueries({ queryKey: ["chatgpt-shared-links", O] })),
            (E[9] = O),
            (E[10] = D),
            (E[11] = o))
          : (o = E[11]),
        E[12] !== R || E[13] !== M || E[14] !== L.kind
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
            (E[12] = R),
            (E[13] = M),
            (E[14] = L.kind),
            (E[15] = u))
          : (u = E[15]),
        E[16] !== q || E[17] !== i || E[18] !== o || E[19] !== u
          ? ((h = { mutationKey: q, mutationFn: i, onSuccess: o, onError: u }),
            (E[16] = q),
            (E[17] = i),
            (E[18] = o),
            (E[19] = u),
            (E[20] = h))
          : (h = E[20]))
      let { mutate: F } = (0, c.n)(h),
        z = L.title ?? L.href
      return (
        E[21] !== L.title
          ? ((f =
              L.title ??
              (0, n.jsx)(m.A, {
                id: "settings.chatGpt.sharedLinks.fallbackName",
                defaultMessage: "Shared link",
                description:
                  "Fallback name for shared ChatGPT content without a title in the Shared links management table",
              })),
            (E[21] = L.title),
            (E[22] = f))
          : (f = E[22]),
        E[23] !== L.href || E[24] !== z || E[25] !== f
          ? ((y = (0, n.jsx)("td", {
              className: "w-1/2 px-3 py-2 max-sm:col-start-1 max-sm:w-auto max-sm:pb-0",
              children: (0, n.jsx)(C.G, {
                className: "block wrap-anywhere underline",
                href: L.href,
                initiator: "open_in_browser_bridge",
                isBrowserEnabled: !1,
                openTarget: "external-browser",
                title: z,
                children: f,
              }),
            })),
            (E[23] = L.href),
            (E[24] = z),
            (E[25] = f),
            (E[26] = y))
          : (y = E[26]),
        E[27] !== L.type
          ? ((_ = (0, n.jsx)("td", {
              className: "px-3 py-2 text-secondary max-sm:col-start-1 max-sm:py-0",
              children: (0, n.jsx)(U, { type: L.type }),
            })),
            (E[27] = L.type),
            (E[28] = _))
          : (_ = E[28]),
        E[29] !== L.sharedAt
          ? ((v =
              L.sharedAt > 0
                ? (0, n.jsx)(p.XU, { value: L.sharedAt, day: "numeric", month: "long", year: "numeric" })
                : null),
            (E[29] = L.sharedAt),
            (E[30] = v))
          : (v = E[30]),
        E[31] !== v
          ? ((T = (0, n.jsx)("td", {
              className: "px-3 py-2 text-secondary max-sm:col-start-1 max-sm:pt-0",
              children: v,
            })),
            (E[31] = v),
            (E[32] = T))
          : (T = E[32]),
        E[33] !== R
          ? ((G = R.formatMessage({
              id: "settings.chatGpt.sharedLinks.delete",
              defaultMessage: "Delete shared link",
              description:
                "Accessible label for the icon button that revokes one link in the ChatGPT Shared links management table",
            })),
            (E[33] = R),
            (E[34] = G))
          : (G = E[34]),
        E[35] !== F ? ((I = () => F()), (E[35] = F), (E[36] = I)) : (I = E[36]),
        E[37] !== H
          ? ((N = H ? (0, n.jsx)(w.y, { className: "size-4" }) : (0, n.jsx)(A.cSG, {})), (E[37] = H), (E[38] = N))
          : (N = E[38]),
        E[39] !== H || E[40] !== G || E[41] !== I || E[42] !== N
          ? ((S = (0, n.jsx)("td", {
              className: "px-3 py-2 text-end max-sm:col-start-2 max-sm:row-span-3 max-sm:row-start-1 max-sm:self-start",
              children: (0, n.jsx)(b.$, {
                "aria-busy": H,
                "aria-label": G,
                color: "ghost",
                disabled: H,
                onClick: I,
                size: "icon",
                children: N,
              }),
            })),
            (E[39] = H),
            (E[40] = G),
            (E[41] = I),
            (E[42] = N),
            (E[43] = S))
          : (S = E[43]),
        E[44] !== _ || E[45] !== T || E[46] !== S || E[47] !== y
          ? ((P = (0, n.jsxs)("tr", {
              className: "border-b border-default last:border-b-0 max-sm:grid max-sm:grid-cols-[minmax(0,1fr)_auto]",
              children: [y, _, T, S],
            })),
            (E[44] = _),
            (E[45] = T),
            (E[46] = S),
            (E[47] = y),
            (E[48] = P))
          : (P = E[48]),
        P
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
              ? ((e = (0, n.jsx)(m.A, {
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
              ? ((e = (0, n.jsx)(m.A, {
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
              ? ((e = (0, n.jsx)(m.A, {
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
              ? ((e = (0, n.jsx)(m.A, {
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
              ? ((e = (0, n.jsx)(m.A, {
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
            r,
            i = (0, s.c)(9),
            { accountId: o, onClose: l } = e,
            c = (0, d.Ul)(f.chatGptAuthenticatedAccountId$) === o
          return (
            i[0] !== c
              ? ((t = (e) => {
                  ;(e.preventDefault(), c && document.activeElement === document.body && (0, y.xJ)())
                }),
                (i[0] = c),
                (i[1] = t))
              : (t = i[1]),
            i[2] !== l
              ? ((a = (e) => {
                  e || l()
                }),
                (i[2] = l),
                (i[3] = a))
              : (a = i[3]),
            i[4] !== o || i[5] !== c || i[6] !== t || i[7] !== a
              ? ((r = (0, n.jsx)(N, { accountId: o, open: c, onCloseAutoFocus: t, onOpenChange: a })),
                (i[4] = o),
                (i[5] = c),
                (i[6] = t),
                (i[7] = a),
                (i[8] = r))
              : (r = i[8]),
            r
          )
        },
        V: N,
      },
    )
  },
  BSnr(e, t, a) {
    a.d(t, { X: () => i })
    var n = a("ABep"),
      s = a("QosV"),
      r = a("on57")
    let i = Object.assign(
      function (e) {
        let t,
          a,
          i = (0, s.c)(6),
          { children: o, id: l, className: c } = e
        return (
          i[0] !== c ? ((t = (0, r.A)("flex flex-col", c)), (i[0] = c), (i[1] = t)) : (t = i[1]),
          i[2] !== o || i[3] !== l || i[4] !== t
            ? ((a = (0, n.jsx)("section", { id: l, className: t, children: o })),
              (i[2] = o),
              (i[3] = l),
              (i[4] = t),
              (i[5] = a))
            : (a = i[5]),
          a
        )
      },
      {
        Header: function (e) {
          let t,
            a,
            i,
            o,
            l,
            c,
            d,
            u = (0, s.c)(32),
            {
              title: h,
              subtitle: g,
              actions: m,
              actionsAlignment: p,
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
            j = null != g,
            G = null != m,
            I = "compact" === C
          u[0] !== I || u[1] !== g || u[2] !== T || u[3] !== w
            ? ((t = g
                ? (0, n.jsx)("div", {
                    className: (0, r.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === w ? "text-balance" : "text-wrap",
                      I ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === T && "w-full",
                    ),
                    children: g,
                  })
                : null),
              (u[0] = I),
              (u[1] = g),
              (u[2] = T),
              (u[3] = w),
              (u[4] = t))
            : (t = u[4])
          let N = t
          if (!k && !j && !G) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(n.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let S = "below-header" === T ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            P = j && "compact" === A && "pb-2",
            E = j && "compact" !== A && "pb-3"
          u[6] !== f || u[7] !== j || u[8] !== I || u[9] !== A || u[10] !== S || u[11] !== P || u[12] !== E
            ? ((a = (0, r.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                S,
                P,
                E,
                !j && (0, r.A)("items-center pb-1.5", "compact" === A ? "min-h-8" : "min-h-toolbar"),
                j && I && "items-center",
                j && !I && "items-start",
                f,
              )),
              (u[6] = f),
              (u[7] = j),
              (u[8] = I),
              (u[9] = A),
              (u[10] = S),
              (u[11] = P),
              (u[12] = E),
              (u[13] = a))
            : (a = u[13])
          let O =
            "none" === (void 0 === y ? "default" : y)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== O ? ((i = (0, r.A)("flex min-w-0 flex-1 flex-col", O)), (u[14] = O), (u[15] = i)) : (i = u[15]),
            u[16] !== j || u[17] !== C || u[18] !== h
              ? ((o = h
                  ? (0, n.jsx)("div", {
                      className: (0, r.A)(
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
          let L = "below-title" === T ? N : null
          ;(u[20] !== i || u[21] !== o || u[22] !== L
            ? ((l = (0, n.jsxs)("div", { className: i, children: [o, L] })),
              (u[20] = i),
              (u[21] = o),
              (u[22] = L),
              (u[23] = l))
            : (l = u[23]),
            u[24] !== m || u[25] !== p
              ? ((c = m
                  ? (0, n.jsx)("div", {
                      className: (0, r.A)("flex items-center gap-2", "end" === p && "self-end"),
                      children: m,
                    })
                  : null),
                (u[24] = m),
                (u[25] = p),
                (u[26] = c))
              : (c = u[26]))
          let M = "below-header" === T ? N : null
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
            i = (0, s.c)(5),
            { children: o, className: l } = e
          return (
            i[0] !== l ? ((t = (0, r.A)("flex flex-col gap-1.5", l)), (i[0] = l), (i[1] = t)) : (t = i[1]),
            i[2] !== o || i[3] !== t
              ? ((a = (0, n.jsx)("div", { className: t, children: o })), (i[2] = o), (i[3] = t), (i[4] = a))
              : (a = i[4]),
            a
          )
        },
        Footer: function (e) {
          let t,
            a,
            i = (0, s.c)(6),
            { children: o, className: l, variant: c } = e,
            d =
              "action" === (void 0 === c ? "description" : c)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            i[0] !== l || i[1] !== d
              ? ((t = (0, r.A)("text-balance text-secondary", d, l)), (i[0] = l), (i[1] = d), (i[2] = t))
              : (t = i[2]),
            i[3] !== o || i[4] !== t
              ? ((a = (0, n.jsx)("div", { className: t, children: o })), (i[3] = o), (i[4] = t), (i[5] = a))
              : (a = i[5]),
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
      r = a("on57"),
      i = a("zd8w"),
      o = a("HZfM"),
      l = a("bVeK")
    function c(e) {
      return e.preventDefault()
    }
    function d(e) {
      let t,
        a,
        i,
        o,
        l,
        c,
        d,
        u = (0, s.c)(24),
        {
          label: h,
          labelId: g,
          labelSizing: m,
          labelWeight: p,
          description: f,
          descriptionId: x,
          icon: y,
          variant: b,
          verticalAlignment: _,
        } = e,
        v = "start" === _ ? "items-start" : "items-center",
        C = "grow" === (void 0 === m ? "grow" : m) && "flex-1"
      ;(u[0] !== v || u[1] !== C
        ? ((t = (0, r.A)("flex min-w-0 gap-3", v, C)), (u[0] = v), (u[1] = C), (u[2] = t))
        : (t = u[2]),
        u[3] !== y
          ? ((a = null != y ? (0, n.jsx)("span", { className: "flex shrink-0", children: y }) : null),
            (u[3] = y),
            (u[4] = a))
          : (a = u[4]))
      let A = "featured" === b && "text-base",
        T = "recommendation" === b && "text-[13px] leading-[18.571429px]",
        w = "featured" !== b && "recommendation" !== b && "text-sm",
        k = "nested" !== b && "medium" === (void 0 === p ? "medium" : p) && "font-medium"
      return (
        u[5] !== k || u[6] !== A || u[7] !== T || u[8] !== w
          ? ((i = (0, r.A)(
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
            (u[9] = i))
          : (i = u[9]),
        u[10] !== h || u[11] !== g || u[12] !== i
          ? ((o = (0, n.jsx)("div", { id: g, className: i, children: h })),
            (u[10] = h),
            (u[11] = g),
            (u[12] = i),
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
            i,
            o,
            l,
            c,
            d = (0, s.c)(18),
            { children: u, compactLabelInset: h, label: g, valueAlignment: m, variant: p } = e,
            f = void 0 === h || h,
            x = void 0 === m ? "start" : m,
            y = void 0 === p ? "default" : p,
            b =
              "compact" === y
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            d[0] !== b ? ((t = (0, r.A)("grid items-center", b)), (d[0] = b), (d[1] = t)) : (t = d[1]),
            d[2] !== f || d[3] !== y
              ? ((a = (0, r.A)(
                  "min-w-0",
                  "compact" === y
                    ? (0, r.A)("flex items-center pe-2 text-start", f && "ps-1")
                    : "text-sm text-secondary",
                )),
                (d[2] = f),
                (d[3] = y),
                (d[4] = a))
              : (a = d[4]),
            d[5] !== g || d[6] !== a
              ? ((i = (0, n.jsx)("div", { className: a, children: g })), (d[5] = g), (d[6] = a), (d[7] = i))
              : (i = d[7]),
            d[8] !== x || d[9] !== y
              ? ((o = (0, r.A)(
                  "min-w-0",
                  "compact" === y
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, r.A)("break-words whitespace-normal text-sm text-default", "end" === x && "text-end"),
                )),
                (d[8] = x),
                (d[9] = y),
                (d[10] = o))
              : (o = d[10]),
            d[11] !== u || d[12] !== o
              ? ((l = (0, n.jsx)("div", { className: o, children: u })), (d[11] = u), (d[12] = o), (d[13] = l))
              : (l = d[13]),
            d[14] !== t || d[15] !== i || d[16] !== l
              ? ((c = (0, n.jsxs)("div", { className: t, children: [i, l] })),
                (d[14] = t),
                (d[15] = i),
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
              labelWeight: g,
              layout: m,
              description: p,
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
            k = void 0 === g ? "medium" : g,
            j = void 0 === m ? "default" : m,
            G = void 0 === x ? "minimum" : x,
            I = void 0 === v || v,
            N = void 0 === C ? "default" : C,
            S = void 0 === A ? "default" : A,
            P = void 0 === T ? "center" : T,
            E = (0, i.useId)(),
            O = null != u || null != p || null != y,
            L = "function" == typeof f,
            M = L && null != u ? `${E}-label` : void 0,
            R = L && p ? `${E}-description` : void 0,
            D = I && ("split" !== j || "default" !== S) && "px-4",
            U = I && "nested" === S && "group-data-[density=form]/settings:px-5",
            q =
              "stacked" === S &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            H =
              "nested" === S &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            F = "stacked" !== S && ("start" === P ? "items-start" : "items-center"),
            z = "split" === j && "default" === S && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            c[0] !== b ||
            c[1] !== j ||
            c[2] !== N ||
            c[3] !== U ||
            c[4] !== q ||
            c[5] !== H ||
            c[6] !== F ||
            c[7] !== z ||
            c[8] !== D ||
            c[9] !== S
              ? ((t = (0, r.A)(
                  "@container/settings-row",
                  D,
                  U,
                  q,
                  H,
                  F,
                  z,
                  "default" === j &&
                    ("default" === S || "featured" === S || "recommendation" === S) &&
                    (0, r.A)(
                      "flex justify-between",
                      "featured" === S && (0, r.A)("gap-6", "compact" === N ? "min-h-11 py-2" : "py-4"),
                      "featured" !== S && ("compact" === N ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === S && "dark:bg-secondary-ghost-hover",
                  b,
                )),
                (c[0] = b),
                (c[1] = j),
                (c[2] = N),
                (c[3] = U),
                (c[4] = q),
                (c[5] = H),
                (c[6] = F),
                (c[7] = z),
                (c[8] = D),
                (c[9] = S),
                (c[10] = t))
              : (t = c[10]),
            c[11] !== p ||
            c[12] !== R ||
            c[13] !== O ||
            c[14] !== y ||
            c[15] !== u ||
            c[16] !== M ||
            c[17] !== w ||
            c[18] !== k ||
            c[19] !== S ||
            c[20] !== P
              ? ((a = O
                  ? (0, n.jsx)(d, {
                      label: u,
                      labelId: M,
                      labelSizing: w,
                      labelWeight: k,
                      description: p,
                      descriptionId: R,
                      icon: y,
                      variant: S,
                      verticalAlignment: P,
                    })
                  : null),
                (c[11] = p),
                (c[12] = R),
                (c[13] = O),
                (c[14] = y),
                (c[15] = u),
                (c[16] = M),
                (c[17] = w),
                (c[18] = k),
                (c[19] = S),
                (c[20] = P),
                (c[21] = a))
              : (a = c[21]),
            c[22] !== f || c[23] !== G || c[24] !== R || c[25] !== L || c[26] !== M || c[27] !== j || c[28] !== S
              ? ((o =
                  null != f && !1 !== f
                    ? (0, n.jsx)("div", {
                        className: (0, r.A)(
                          "stacked" === S && "w-full",
                          "nested" === S && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === j &&
                            "default" === S &&
                            (0, r.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === G && "w-full",
                            ),
                          "default" === j &&
                            ("default" === S || "featured" === S || "recommendation" === S) &&
                            (0, r.A)(
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
                (c[28] = S),
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
            { children: r } = e
          return (
            a[0] !== r
              ? ((t = (0, n.jsx)("span", { className: "text-xs text-secondary", children: r })), (a[0] = r), (a[1] = t))
              : (t = a[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            a,
            i,
            l,
            u,
            h,
            g,
            m,
            p,
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
            I,
            N = (0, s.c)(54)
          N[0] !== e
            ? (({
                actions: t,
                actionsPlacement: x,
                ariaControls: a,
                ariaExpanded: i,
                ariaLabel: l,
                className: u,
                description: h,
                disabled: g,
                edgeRounding: y,
                icon: m,
                label: f,
                size: b,
                trailing: v,
                variant: _,
                ...p
              } = e),
              (N[0] = e),
              (N[1] = t),
              (N[2] = a),
              (N[3] = i),
              (N[4] = l),
              (N[5] = u),
              (N[6] = h),
              (N[7] = g),
              (N[8] = m),
              (N[9] = p),
              (N[10] = f),
              (N[11] = x),
              (N[12] = y),
              (N[13] = b),
              (N[14] = _),
              (N[15] = v))
            : ((t = N[1]),
              (a = N[2]),
              (i = N[3]),
              (l = N[4]),
              (u = N[5]),
              (h = N[6]),
              (g = N[7]),
              (m = N[8]),
              (p = N[9]),
              (f = N[10]),
              (x = N[11]),
              (y = N[12]),
              (b = N[13]),
              (_ = N[14]),
              (v = N[15]))
          let S = void 0 === y ? "row" : y,
            P = void 0 === b ? "default" : b,
            E = void 0 === _ ? "default" : _,
            O = "before-trailing" === (void 0 === x ? "end" : x) && !g && null != t && null != v,
            L = O ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          N[16] !== u || N[17] !== O || N[18] !== P || N[19] !== L || N[20] !== E
            ? ((C = (0, r.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                L,
                "empty" === E
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, r.A)(
                      "px-4 text-start",
                      "nested" === E && "min-h-10 py-0.5",
                      "nested" !== E && ("large" === P ? "py-4" : "py-3"),
                      O && "gap-2",
                      !O && ("nested" === E ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (N[16] = u),
              (N[17] = O),
              (N[18] = P),
              (N[19] = L),
              (N[20] = E),
              (N[21] = C))
            : (C = N[21])
          let M = C
          ;(N[22] !== h || N[23] !== m || N[24] !== f || N[25] !== E
            ? ((A =
                "empty" === E
                  ? (0, n.jsxs)(n.Fragment, { children: [m, f] })
                  : (0, n.jsx)(d, { label: f, description: h, icon: m, variant: E, verticalAlignment: "center" })),
              (N[22] = h),
              (N[23] = m),
              (N[24] = f),
              (N[25] = E),
              (N[26] = A))
            : (A = N[26]),
            N[27] !== v
              ? ((T =
                  null != v
                    ? (0, n.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: v })
                    : null),
                (N[27] = v),
                (N[28] = T))
              : (T = N[28]),
            N[29] !== A || N[30] !== T
              ? ((w = (0, n.jsxs)(n.Fragment, { children: [A, T] })), (N[29] = A), (N[30] = T), (N[31] = w))
              : (w = N[31]))
          let R = w,
            D = O ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            U = "row" === S && "first:rounded-t-2xl last:rounded-b-2xl",
            q = "recommendation" === E && "dark:bg-secondary-ghost-hover",
            H = !g && "hover:bg-secondary-ghost-hover focus-within:bg-secondary-ghost-hover",
            F =
              !g &&
              "recommendation" === E &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            N[32] !== D || N[33] !== U || N[34] !== q || N[35] !== H || N[36] !== F
              ? ((k = (0, r.A)("group w-full items-center", D, U, q, H, F)),
                (N[32] = D),
                (N[33] = U),
                (N[34] = q),
                (N[35] = H),
                (N[36] = F),
                (N[37] = k))
              : (k = N[37]),
            N[38] !== a || N[39] !== i || N[40] !== l || N[41] !== R || N[42] !== g || N[43] !== p || N[44] !== M
              ? ((j =
                  null != p.to
                    ? (0, n.jsx)(o.N_, {
                        ...p,
                        className: M,
                        "aria-controls": a,
                        "aria-expanded": i,
                        "aria-label": l,
                        "aria-disabled": g || void 0,
                        tabIndex: g ? -1 : void 0,
                        onClick: g ? c : p.onClick,
                        children: R,
                      })
                    : (0, n.jsx)("button", {
                        ...p,
                        className: M,
                        "aria-controls": a,
                        "aria-expanded": i,
                        "aria-label": l,
                        disabled: g,
                        type: "button",
                        children: R,
                      })),
                (N[38] = a),
                (N[39] = i),
                (N[40] = l),
                (N[41] = R),
                (N[42] = g),
                (N[43] = p),
                (N[44] = M),
                (N[45] = j))
              : (j = N[45]),
            N[46] !== t || N[47] !== g || N[48] !== O
              ? ((G =
                  g || null == t
                    ? null
                    : (0, n.jsx)("div", {
                        className: (0, r.A)(
                          "flex shrink-0 items-center gap-1",
                          O ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (N[46] = t),
                (N[47] = g),
                (N[48] = O),
                (N[49] = G))
              : (G = N[49]),
            N[50] !== k || N[51] !== j || N[52] !== G
              ? ((I = (0, n.jsxs)("div", { className: k, children: [j, G] })),
                (N[50] = k),
                (N[51] = j),
                (N[52] = G),
                (N[53] = I))
              : (I = N[53]),
            I
          )
        },
        kf: function (e) {
          let t,
            a = (0, s.c)(2),
            { children: r } = e
          return (
            a[0] !== r
              ? ((t = (0, n.jsx)("span", { className: "text-tertiary", children: r })), (a[0] = r), (a[1] = t))
              : (t = a[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            a,
            i,
            o,
            c,
            d,
            u,
            h,
            g,
            m,
            p = (0, s.c)(43),
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
            I = void 0 === v || v,
            N = void 0 === C ? "radio" : C,
            S = void 0 === G ? "default" : G
          ;(p[0] !== b || p[1] !== _ || p[2] !== I || p[3] !== N || p[4] !== S
            ? ((t = (0, r.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === S &&
                  (0, r.A)(
                    "gap-3 px-4 py-3 hover:bg-secondary-ghost-hover",
                    null != _ ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === S && b && I && "radio" === N && "bg-background-neutral-soft-alpha",
                "form" === S && "items-center gap-4 px-4 py-4 hover:bg-secondary-ghost-hover",
                "inline" === S && "items-center gap-2",
                "checkmark" === N && "after:ms-7",
              )),
              (p[0] = b),
              (p[1] = _),
              (p[2] = I),
              (p[3] = N),
              (p[4] = S),
              (p[5] = t))
            : (t = p[5]),
            p[6] !== x || p[7] !== f
              ? ((a = (0, n.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": x,
                  htmlFor: f,
                })),
                (p[6] = x),
                (p[7] = f),
                (p[8] = a))
              : (a = p[8]),
            p[9] !== N || p[10] !== S
              ? ((i = (0, r.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === N
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, r.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === S ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (p[9] = N),
                (p[10] = S),
                (p[11] = i))
              : (i = p[11]))
          let P = null != _ ? `${f}-description` : void 0
          ;(p[12] !== x ||
          p[13] !== y ||
          p[14] !== b ||
          p[15] !== f ||
          p[16] !== T ||
          p[17] !== w ||
          p[18] !== k ||
          p[19] !== i ||
          p[20] !== P ||
          p[21] !== j
            ? ((o = (0, n.jsx)("input", {
                id: f,
                className: i,
                "aria-label": x,
                "aria-describedby": P,
                autoFocus: y,
                type: "radio",
                name: T,
                value: j,
                checked: b,
                onChange: w,
                onClick: k,
              })),
              (p[12] = x),
              (p[13] = y),
              (p[14] = b),
              (p[15] = f),
              (p[16] = T),
              (p[17] = w),
              (p[18] = k),
              (p[19] = i),
              (p[20] = P),
              (p[21] = j),
              (p[22] = o))
            : (o = p[22]),
            p[23] !== b || p[24] !== N
              ? ((c = "checkmark" === N ? (0, n.jsx)(l.ALZ, { className: (0, r.A)(!b && "invisible") }) : null),
                (p[23] = b),
                (p[24] = N),
                (p[25] = c))
              : (c = p[25]))
          let E = "default" === S ? "text-sm font-medium" : "text-base"
          return (
            p[26] !== E ? ((d = (0, r.A)("text-default", E)), (p[26] = E), (p[27] = d)) : (d = p[27]),
            p[28] !== A || p[29] !== d
              ? ((u = (0, n.jsx)("span", { className: d, children: A })), (p[28] = A), (p[29] = d), (p[30] = u))
              : (u = p[30]),
            p[31] !== _ || p[32] !== f
              ? ((h =
                  null != _
                    ? (0, n.jsx)("span", {
                        id: `${f}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: _,
                      })
                    : null),
                (p[31] = _),
                (p[32] = f),
                (p[33] = h))
              : (h = p[33]),
            p[34] !== u || p[35] !== h
              ? ((g = (0, n.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, h],
                })),
                (p[34] = u),
                (p[35] = h),
                (p[36] = g))
              : (g = p[36]),
            p[37] !== g || p[38] !== t || p[39] !== a || p[40] !== o || p[41] !== c
              ? ((m = (0, n.jsxs)("div", { className: t, children: [a, o, c, g] })),
                (p[37] = g),
                (p[38] = t),
                (p[39] = a),
                (p[40] = o),
                (p[41] = c),
                (p[42] = m))
              : (m = p[42]),
            m
          )
        },
      },
    )
  },
  ZEx5(e, t, a) {
    a.d(t, { t: () => o })
    var n = a("ABep"),
      s = a("QosV"),
      r = a("on57"),
      i = a("bZug")
    function o(e) {
      let t,
        a,
        o,
        l = (0, s.c)(23),
        { children: c, className: d, contentOverflow: u, dividers: h, variant: g, decoration: m } = e,
        p = void 0 === g ? "default" : g,
        f = "flat" === p || "rows" === p ? i.s : i.r,
        x = void 0 === h || h ? f : "flex flex-col",
        y = "recommendation" === p && "rounded-[20px]",
        b = "recommendation" !== p && "flat" !== p && "rows" !== p && "outlinedLarge" !== p && "rounded-2xl",
        _ = "outlinedLarge" === p && "rounded-[30px] border border-default bg-transparent",
        v = "daybreak" === m && "daybreak-VsXdEH",
        C = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        A =
          "default" === p &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        T = "metered" === p && "ring-1 ring-inset ring-border-subtle",
        w = "secondary" === p && "bg-surface-secondary/92",
        k = "muted" === p && "bg-(--color-background-neutral-soft-alpha)/50 dark:bg-background-neutral-soft-alpha",
        j =
          "form" === p &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        G = "outlined" === p && "border border-subtle bg-transparent",
        I =
          "flat" === p &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        N = "input" === p && "border border-primary-outline bg-primary-soft",
        S = "recommendation" === p && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        l[0] !== d ||
        l[1] !== A ||
        l[2] !== T ||
        l[3] !== w ||
        l[4] !== k ||
        l[5] !== j ||
        l[6] !== G ||
        l[7] !== I ||
        l[8] !== N ||
        l[9] !== S ||
        l[10] !== x ||
        l[11] !== y ||
        l[12] !== b ||
        l[13] !== _ ||
        l[14] !== v ||
        l[15] !== C
          ? ((t = (0, r.A)(x, y, b, _, v, C, A, T, w, k, j, G, I, N, S, d)),
            (l[0] = d),
            (l[1] = A),
            (l[2] = T),
            (l[3] = w),
            (l[4] = k),
            (l[5] = j),
            (l[6] = G),
            (l[7] = I),
            (l[8] = N),
            (l[9] = S),
            (l[10] = x),
            (l[11] = y),
            (l[12] = b),
            (l[13] = _),
            (l[14] = v),
            (l[15] = C),
            (l[16] = t))
          : (t = l[16]),
        l[17] !== p
          ? ((a =
              "default" === p || "metered" === p
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-neutral-soft-alpha))" }
                : void 0),
            (l[17] = p),
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
        U: function ({ account: e, userId: t, settingsAccountId: a, enabled: r = !0 }) {
          return {
            queryKey: ["chatgpt-training-eligibility", t, e?.id],
            queryFn:
              null == e
                ? n.hT
                : () =>
                    s.Request.safeGet("/accounts/data_usage_for_training", {
                      additionalHeaders: { "ChatGPT-Account-ID": e.id },
                    }),
            enabled: r && e?.structure === "workspace" && a === e.id,
            staleTime: 0,
          }
        },
      },
    )
  },
  uMJm(e, t, a) {
    let n = (0, a("iJY0").a)({
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
//# sourceMappingURL=412224.7feadb11f1.js.map
