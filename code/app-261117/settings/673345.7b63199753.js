export const __rspack_esm_ids = [673345]
export const __webpack_modules__ = {
  E2yB(e, t, a) {
    let s =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/
    function n(e, t) {
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
            n = a.length > 0 && s.test(a)
          return { checkoutEmail: a, hasCheckoutEmail: n, defaultEmail: n ? "" : (t ?? "") }
        },
        Ub: n,
        WL: s,
        ob: function (e, t, a) {
          if (!e || !s.test(e) || !t || !["professional", "education", "government", "unknown"].includes(t)) return
          let r = e.slice(e.lastIndexOf("@") + 1).toLowerCase()
          return n(r, a) ? r : void 0
        },
      },
    )
  },
  r6FN(e, t, a) {
    var s,
      n,
      r,
      i,
      o =
        (((s = {}).CHATGPT_LOCATION_AUTHORIZATION_STATUS_UNSPECIFIED =
          "CHATGPT_LOCATION_AUTHORIZATION_STATUS_UNSPECIFIED"),
        (s.CHATGPT_LOCATION_AUTHORIZATION_STATUS_NOT_DETERMINED =
          "CHATGPT_LOCATION_AUTHORIZATION_STATUS_NOT_DETERMINED"),
        (s.CHATGPT_LOCATION_AUTHORIZATION_STATUS_RESTRICTED = "CHATGPT_LOCATION_AUTHORIZATION_STATUS_RESTRICTED"),
        (s.CHATGPT_LOCATION_AUTHORIZATION_STATUS_DENIED = "CHATGPT_LOCATION_AUTHORIZATION_STATUS_DENIED"),
        (s.CHATGPT_LOCATION_AUTHORIZATION_STATUS_AUTHORIZED_WHEN_IN_USE =
          "CHATGPT_LOCATION_AUTHORIZATION_STATUS_AUTHORIZED_WHEN_IN_USE"),
        (s.CHATGPT_LOCATION_AUTHORIZATION_STATUS_UNKNOWN = "CHATGPT_LOCATION_AUTHORIZATION_STATUS_UNKNOWN"),
        (s.UNRECOGNIZED = "UNRECOGNIZED"),
        s),
      l =
        (((n = {}).CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_UNSPECIFIED =
          "CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_UNSPECIFIED"),
        (n.CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_FULL_ACCURACY =
          "CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_FULL_ACCURACY"),
        (n.CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_REDUCED_ACCURACY =
          "CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_REDUCED_ACCURACY"),
        (n.CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_UNKNOWN = "CHATGPT_LOCATION_ACCURACY_AUTHORIZATION_UNKNOWN"),
        (n.UNRECOGNIZED = "UNRECOGNIZED"),
        n),
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
    var s = a("ASxG"),
      n = a("hZax")
    let r = s.g1P(s.YjP(), s.L5J()),
      i = "1648954249"
    a.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            a = (0, n.XM)(e, i),
            o = a.get("suppress_ads", !1)
          if (!o || a.details.reason.startsWith("LocalOverride") || null == a.details.receivedAt) return o
          let l = e.dataAdapter.getDataSync(e.getContextHandle().user)
          if (null == l || l.receivedAt !== a.details.receivedAt) return o
          try {
            JSON.parse(l.data, (e, a) => {
              if ("" !== e) return a
              let n = r.safeParse(a)
              if (!n.success) return a
              let o = r.safeParse(n.data.layer_configs)
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
              let c = r.safeParse(n.data.values),
                d = l.data.v,
                u =
                  "init-v2" === n.data.response_format && ("number" == typeof d || "string" == typeof d) && c.success
                    ? c.data[String(d)]
                    : l.data.value,
                h = s.Ikc({ suppress_ads: s.zMY() }).safeParse(u)
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
  EmRE(e, t, a) {
    var s = a("qmMi")
    a("IdsJ")
    var n = a("OWtl"),
      r = a("OMIV"),
      i = a("O666")
    let o = (0, s.un)(
      n.u,
      ({ get: e }) =>
        !e(i.H$, { layer: "4107938382", parameter: "disable_precise_location" }) &&
        (e(r.JW, "1957563541") || e(i.H$, { layer: "4107938382", parameter: "enable_precise_location" })),
    )
    a.d(t, {}, { a: o })
  },
  VMa7(e, t, a) {
    var s = a("ABep"),
      n = a("QosV"),
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
            d = (0, n.c)(6),
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
              ? ((a = (0, s.jsx)(i.L3, {
                  children: (0, s.jsx)(r.A, {
                    id: "chatgptConversations.preciseLocation.permissionDenied.title",
                    defaultMessage: "Turn on location access",
                  }),
                })),
                (d[2] = a))
              : (a = d[2]),
            d[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = (0, s.jsx)(o.R4, {
                  children: (0, s.jsx)(o.OO, {
                    children: (0, s.jsx)(o.c7, {
                      className: "select-none",
                      title: a,
                      subtitle: (0, s.jsx)(i.rr, {
                        children: (0, s.jsx)(r.A, {
                          id: "chatgptConversations.preciseLocation.permissionDenied.description",
                          defaultMessage:
                            "Open your browser's site settings from the icon beside the address bar and set Location to Allow. Also allow location access for your browser or app in your device's privacy settings, then refresh the page.",
                        }),
                      }),
                    }),
                  }),
                })),
                (d[3] = l))
              : (l = d[3]),
            d[4] !== t
              ? ((c = (0, s.jsx)(i.lG, { open: !0, size: "compact", onOpenChange: t, children: l })),
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
    var s = a("qmMi"),
      n = a("IdsJ"),
      r = a("OWtl")
    let i = (0, s.SZ)(
      r.u,
      () => void 0,
      ({ set: e }) => (0, n.Lk)(e),
    )
    a.d(t, {}, { d: i })
  },
  SZLI(e, t, a) {
    var s = a("r6FN"),
      n = a("SPnB"),
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
        Z: async function (e, t, p = "CHATGPT_LOCATION_PERMISSION_INTERACTION_CALL_TO_ACTION_BUTTON") {
          let m
          ;(0, d.yy)(e, s.Uj, { entryPoint: t, interaction: p })
          let f = (0, o.ff)(),
            _ = e.get(h.Sk),
            y = e.get(n.chatGptAuthenticatedUserId$),
            x = e.get(n.o8),
            A = e.get(n.PO),
            C =
              (null == A.authMethod ||
                (!A.authLoading && (await e.query.fetch(h.s6).catch(() => null))?.preciseLocationAllowed === !0)) &&
              e.get(g.d).enabled
          if ((0, o.ff)() !== f) return !1
          C || (0, o.q0)()
          let v = C
              ? await navigator.permissions
                  ?.query({ name: "geolocation" })
                  .then((e) => e.state)
                  .catch(() => null)
              : null,
            k =
              C &&
              (await (0, l.U)(
                () =>
                  (0, o.ff)() === f &&
                  e.get(h.Sk) === _ &&
                  e.get(n.chatGptAuthenticatedUserId$) === y &&
                  e.get(n.o8) === x &&
                  e.get(g.d).enabled,
                !0,
                (e) => {
                  m = e
                },
              ))
          return (
            await (async function (e, t, n, o, l, h) {
              if (t) {
                ;((0, d.yy)(e, s.oI, {
                  entryPoint: n,
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
                ((0, d.yy)(e, s._j, { entryPoint: n, interaction: l }),
                "denied" === o &&
                  ((0, u.ie)(e, "392607222") ||
                    e.get(u.M9)?.getLayer("4107938382").get("enable_location_sharing_failed_modal", !1)))
              ) {
                let { ChatGptLocationPermissionDeniedDialog: t } = await a.e(831203).then(a.bind(a, "VMa7"))
                ;(0, r.qf)(e, t)
                return
              }
              ;(0, d.yy)(e, s.eq, { entryPoint: n })
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
                    ;(0, d.yy)(e, s.YZ, { entryPoint: n })
                  },
                }))
            })(e, k, t, v, p, m),
            k
          )
        },
      },
    )
  },
  oFmV(e, t, a) {
    let s = (0, a("zd8w").createContext)(null)
    a.d(t, {}, { S: s })
  },
  Qn5g(e, t, a) {
    var s = a("qmMi"),
      n = a("SPnB"),
      r = a("i1S8"),
      i = a("g2p6"),
      o = a("OWtl"),
      l = a("OMIV")
    let c = (0, s.SZ)(
        o.u,
        ({ get: e }) => {
          let t = e(l.M9)
          return null == t || (0, r.H)(t)
        },
        ({ get: e, set: t }) => {
          let a = e(l.M9)
          if (null == a) return
          let s = () => t((0, r.H)(a))
          return (a.on("values_updated", s), () => a.off("values_updated", s))
        },
      ),
      d = (0, s.un)(o.u, ({ get: e }) => !1),
      u = (0, s.un)(o.u, ({ get: e }) => {
        let t = e(i.Sk)
        return (
          !e(d) &&
          null != t &&
          t === e(n.chatGptAuthenticatedAccountId$) &&
          e(n.f4) &&
          !e(l.RS) &&
          e(l.JW, "665873859") &&
          !e(c)
        )
      })
    a.d(t, {}, { u: u })
  },
  bER6(e, t, a) {
    var s = a("qmMi"),
      n = a("Qgfj"),
      r = a("g2p6"),
      i = a("OWtl"),
      o = a("OMIV"),
      l = a("jBHQ"),
      c = a("O666"),
      d = a("Qn5g")
    let u = (0, n.YK)({
        historyHelp: { id: "settings.ads.history.help", defaultMessage: "Review ads you\u2019ve seen or opened" },
        topicsHelp: { id: "settings.ads.topics.help", defaultMessage: "Review the topics used to personalize ads" },
        planHelp: { id: "settings.ads.plan.help", defaultMessage: "See plans that offer an ad-free experience" },
        history: { id: "settings.ads.historyLink", defaultMessage: "History" },
        topics: { id: "settings.ads.topicsLinkLabel", defaultMessage: "Topics" },
        delete: { id: "settings.ads.deleteDataLabel", defaultMessage: "Delete ads data" },
        personalize: { id: "settings.ads.personalize", defaultMessage: "Personalize ads" },
        plan: { id: "settings.ads.changePlanLabel", defaultMessage: "Change plan to go ad-free" },
        turnOn: { id: "settings.ads.turnOn", defaultMessage: "Turn on ads" },
      }),
      h = {
        history: {
          section: "data-controls",
          id: "ads-history",
          title: u.history,
          description: u.historyHelp,
          searchParams: { view: "ads" },
        },
        topics: {
          section: "data-controls",
          id: "ads-topics",
          title: u.topics,
          description: u.topicsHelp,
          searchParams: { view: "ads" },
        },
        delete: { section: "data-controls", id: "ads-delete-data", title: u.delete, searchParams: { view: "ads" } },
        personalize: {
          section: "data-controls",
          id: "ads-personalize",
          title: u.personalize,
          searchParams: { view: "ads" },
        },
        plan: {
          section: "data-controls",
          id: "ads-plan",
          title: u.plan,
          description: u.planHelp,
          searchParams: { view: "ads" },
        },
        turnOn: { section: "data-controls", id: "ads-turn-on", title: u.turnOn, searchParams: { view: "ads" } },
      },
      g = (0, s.i1)(i.u, (e, { get: t }) => {
        let a = "search" === e ? t(r.s6, { enabled: !1 }).data : t(r.s6).data,
          s = "search" === e ? l.P : o.JW,
          n = t(s, "1613860123"),
          i = t(s, "1174206456"),
          d = t("search" === e ? c.md : c.$Q, "1648954249"),
          u =
            !i &&
            (d?.get("suppress_upsell", !1) !== !0 ||
              d
                .get("allowed_frontend_entry_point_locations_for_upsell_suppression", [])
                .includes("ads_controls_change_plan"))
        return {
          hasSettings: null != a,
          optOutEligible: n,
          optedOut: n && a?.freeAdsOptOut === !0,
          unavailable: a?.bazaarPersonalizationUnavailable === !0,
          showChangePlan: u,
        }
      }),
      p = (0, s.un)(i.u, ({ get: e }) => e(g, "panel")),
      m = (0, s.un)(i.u, ({ get: e }) => {
        if (!e(d.u)) return []
        let { hasSettings: t, optedOut: a, unavailable: s, showChangePlan: n } = e(g, "search")
        if (a) return [h.turnOn]
        let r = [h.history]
        return (t && (r.push(h.delete, h.personalize), s || r.push(h.topics), n && r.push(h.plan)), r)
      })
    a.d(t, {}, { Um: p, Vb: h, rz: m })
  },
  Rf83(e, t, a) {
    var s = a("qmMi"),
      n = a("Qgfj"),
      r = a("SPnB"),
      i = a("CWeU"),
      o = a("eFn4"),
      l = a("YJm0"),
      c = a("Qs18"),
      d = a("g2p6"),
      u = a("njS5"),
      h = a("EmRE"),
      g = a("OAko"),
      p = a("OWtl"),
      m = a("OMIV"),
      f = a("jBHQ"),
      _ = a("UR81"),
      y = a("Qn5g"),
      x = a("bER6"),
      A = a("uvj6")
    let C = (0, n.YK)({
        workNetworkHelp: {
          id: "settings.dataControls.workNetwork.help",
          defaultMessage: "Allow ChatGPT Work to access the internet while running tasks",
        },
        workResetHelp: {
          id: "settings.dataControls.workReset.help",
          defaultMessage: "Delete files and other data in your Work environment to start fresh",
        },
        importConversationsHelp: {
          id: "settings.dataControls.import.help",
          defaultMessage: "Bring conversations from another service into ChatGPT",
        },
        sharedLinksHelp: {
          id: "settings.dataControls.sharedLinks.help",
          defaultMessage: "Review links you\u2019ve created to share chats",
        },
        informationSharingHelp: {
          id: "settings.dataControls.appSharing.help",
          defaultMessage: "Review which apps can receive your contact information",
        },
        archivedChatsHelp: {
          id: "settings.dataControls.archivedChats.help",
          defaultMessage: "Review or restore chats you\u2019ve archived",
        },
        archiveAllHelp: {
          id: "settings.dataControls.archiveAll.help",
          defaultMessage: "Move your chats to Archived chats so you can restore them later",
        },
        deleteAllHelp: {
          id: "settings.dataControls.deleteAll.help",
          defaultMessage: "Permanently delete all your chats",
        },
        exportDataHelp: {
          id: "settings.dataControls.export.help",
          defaultMessage: "Request a copy of your chat history and account data",
        },
        adsHelp: { id: "settings.dataControls.ads.help", defaultMessage: "Review your ad preferences and activity" },
        marketingHelp: {
          id: "settings.dataControls.marketing.help",
          defaultMessage: "Choose how your data can be used for marketing",
        },
        marketingMeasurement: {
          id: "settings.chatGpt.marketingPrivacy.measurement.label",
          defaultMessage: "Marketing measurement",
        },
        marketingPersonalization: {
          id: "settings.chatGpt.marketingPrivacy.personalization.label",
          defaultMessage: "Personalized marketing",
        },
        location: { id: "settings.chatGpt.dataControls.location", defaultMessage: "Location" },
        workNetwork: { id: "settings.chatGpt.dataControls.networkAccess", defaultMessage: "Work network access" },
        workReset: { id: "chatgpt.settings.data_controls.work_reset.row.label", defaultMessage: "Reset ChatGPT Work" },
        importConversations: {
          id: "settings.chatGpt.dataControls.import.label",
          defaultMessage: "Import conversations",
        },
        sharedLinks: { id: "settings.chatGpt.dataControls.sharedLinks", defaultMessage: "Shared links" },
        training: { id: "settings.chatGpt.dataControls.training", defaultMessage: "Improve the model for everyone" },
        informationSharing: {
          id: "settings.informationSharing.rowTitle",
          defaultMessage: "App access to contact information",
        },
        archivedChats: { id: "settings.chatGpt.dataControls.archivedChats", defaultMessage: "Archived chats" },
        archiveAll: { id: "settings.chatGpt.dataControls.archiveAll", defaultMessage: "Archive all chats" },
        deleteAll: { id: "settings.chatGpt.dataControls.deleteAll", defaultMessage: "Delete all chats" },
        exportData: { id: "settings.chatGpt.dataControls.export.label", defaultMessage: "Export data" },
        ads: { id: "settings.ads.settings.title", defaultMessage: "Ads controls" },
        marketing: { id: "settings.chatGpt.marketingPrivacy.title", defaultMessage: "Marketing privacy" },
      }),
      v = {
        marketingMeasurement: {
          section: "data-controls",
          id: "data-controls-marketing-measurement",
          title: C.marketingMeasurement,
          searchParams: { view: "marketing-privacy" },
        },
        marketingPersonalization: {
          section: "data-controls",
          id: "data-controls-marketing-personalization",
          title: C.marketingPersonalization,
          searchParams: { view: "marketing-privacy" },
        },
        location: { section: "data-controls", id: "data-controls-location", title: C.location },
        workNetwork: {
          section: "data-controls",
          id: "data-controls-work-network",
          title: C.workNetwork,
          description: C.workNetworkHelp,
        },
        workReset: {
          section: "data-controls",
          id: "data-controls-work-reset",
          title: C.workReset,
          description: C.workResetHelp,
        },
        importConversations: {
          section: "data-controls",
          id: "data-controls-import-conversations",
          title: C.importConversations,
          description: C.importConversationsHelp,
        },
        sharedLinks: {
          section: "data-controls",
          id: "data-controls-shared-links",
          title: C.sharedLinks,
          description: C.sharedLinksHelp,
        },
        training: { section: "data-controls", id: "data-controls-training", title: C.training },
        informationSharing: {
          section: "data-controls",
          id: "data-controls-information-sharing",
          title: C.informationSharing,
          description: C.informationSharingHelp,
        },
        archivedChats: {
          section: "data-controls",
          id: "data-controls-archived-chats",
          title: C.archivedChats,
          description: C.archivedChatsHelp,
        },
        archiveAll: {
          section: "data-controls",
          id: "data-controls-archive-all",
          title: C.archiveAll,
          description: C.archiveAllHelp,
        },
        deleteAll: {
          section: "data-controls",
          id: "data-controls-delete-all",
          title: C.deleteAll,
          description: C.deleteAllHelp,
        },
        exportData: {
          section: "data-controls",
          id: "data-controls-export",
          title: C.exportData,
          description: C.exportDataHelp,
        },
        ads: { section: "data-controls", id: "data-controls-ads", title: C.ads, description: C.adsHelp },
        marketing: {
          section: "data-controls",
          id: "data-controls-marketing",
          title: C.marketing,
          description: C.marketingHelp,
        },
      },
      k = (0, s.i1)(p.u, (e, { get: t }) => {
        let a = "search" === e ? f.P : m.JW
        return {
          ads: t(y.u),
          importConversations: !1,
          workNetwork: !0,
          informationSharing: t(a, "1850361504"),
          marketing: t(a, "3157804138"),
        }
      }),
      T = (0, s.un)(p.u, ({ get: e }) => e(k, "panel")),
      j = (0, s.i1)(p.u, (e, { get: t }) => {
        let { authenticatedAccountId: a, userId: s, authLoading: n } = t(i.PO),
          r = "search" === e ? t(g.LI, { enabled: !1 }) : t(g.LI),
          c = (0, g.F7)(r.data)
        if (n || null == c || c.id !== a) return { sharedLinksAccountId: null, exportData: !1 }
        let d = "workspace" === c.structure,
          u =
            "quorum" !== c.plan_type &&
            (!d ||
              ("search" === e ? t(l.t, c.id, { enabled: !1 }) : t(l.t, c.id)).data?.features?.includes(
                "workspace_share_links",
              ) === !0),
          h = !1
        if (!r.isError && null != s) {
          if ("workspace" !== c.structure) h = !0
          else if ((0, _.V$)(c.plan_type)) {
            let a = "search" === e ? t(o.Jk, c.id, { enabled: !1 }) : t(o.Jk, c.id)
            h = !a.isError && a.data?.permissions?.includes("chatgpt.workspace.feature.data-export.access") === !0
          }
        }
        return { sharedLinksAccountId: u ? c.id : null, exportData: h }
      }),
      b = (0, s.un)(p.u, ({ get: e }) => e(j, "panel")),
      I = (0, s.un)(p.u, ({ get: e }) => {
        let t = e(u.Je)
        if (null == t || e(d.Sk) !== t.accountId) return null
        let a = (0, g.F7)(e(g.LI).data)
        return a?.id === t.accountId && "personal" === a.structure ? t : null
      }),
      w = (0, s.i1)(p.u, (e, { get: t }) => {
        if (!t("search" === e ? f.P : m.JW, "1625797156")) return null
        let a = t(r.kf),
          s = t(r.chatGptAuthenticatedAccountId$),
          n = t(r.o8)
        if ("loaded" !== a.status || null == s || null == n) return null
        if ("personal" === a.structure) return { accountId: s, userId: n }
        if ("workspace" !== a.structure) return null
        let i = "search" === e ? t(l.t, s, { enabled: !1 }) : t(l.t, s)
        return i.data?.features?.includes("flora") === !0 ? { accountId: s, userId: n } : null
      }),
      O = (0, s.un)(p.u, ({ get: e }) => e(w, "panel")),
      N = (0, s.un)(p.u, ({ get: e }) => {
        if (null == e(d.Sk)) return []
        let t = [v.training, v.archivedChats, v.archiveAll, v.deleteAll],
          a = e(I)
        if (null != a) {
          let s = e(A.nL, a, { enabled: !1 })
          s.isSuccess && !s.isFetching && null != s.data && t.push(A.k5)
        }
        let s = e(j, "search")
        ;(null != s.sharedLinksAccountId && t.push(v.sharedLinks), s.exportData && t.push(v.exportData))
        let n = e(k, "search")
        return (
          n.ads && t.push(v.ads, ...e(x.rz)),
          n.informationSharing && t.push(v.informationSharing),
          n.workNetwork && t.push(v.workNetwork),
          n.importConversations && t.push(v.importConversations),
          e(h.a) && t.push(v.location),
          null != e(w, "search") && t.push(v.workReset),
          n.marketing &&
            (t.push(v.marketing),
            e(c.nk, { enabled: !1 }).isError || t.push(v.marketingMeasurement, v.marketingPersonalization)),
          t
        )
      })
    a.d(t, {}, { AW: v, Hu: b, Nz: O, cP: T, ec: I, zS: N })
  },
  k6ly(e, t, a) {
    a.d(t, { ChatGptDataControlsSettings: () => eT })
    var s = a("ABep"),
      n = a("QosV"),
      r = a("IM1j"),
      i = a("T0Rc"),
      o = a("irkb"),
      l = a("xSOA"),
      c = a("qmMi"),
      d = a("zd8w"),
      u = a("Wf1j"),
      h = a("oyxz"),
      g = a("Ywss"),
      p = a("TDcV"),
      m = a("TjTj"),
      f = a("SPnB"),
      _ = a("UOa8"),
      y = a("Kwur"),
      x = a("MrGp"),
      A = a("g2p6"),
      C = a("xEZJ"),
      v = a("QmkR"),
      k = a("OAko"),
      T = a("Sm6l"),
      j = a("JNtf"),
      b = a("mUDD"),
      I = a("ZtSy"),
      w = a("bVeK"),
      O = a("Bbed"),
      N = a("SGsN"),
      S = a("F0xz"),
      G = a("IdsJ"),
      M = a("GaA7"),
      P = a("OWtl"),
      E = a("jxU8"),
      L = a("pO0d"),
      R = a("BSnr"),
      D = a("AWNZ"),
      U = a("QyE3"),
      H = a("ZEx5"),
      q = a("czB9"),
      z = a("hZax"),
      F = a("Rf83")
    ;(a("QdUF"), a("X1mr"))
    var W = a("GDNt"),
      Y = a("Qgfj"),
      $ = a("T5JX")
    let Z = (0, Y.YK)({
      conflict: {
        id: "settings.chatGpt.dataControls.export.conflictError",
        defaultMessage:
          "Your existing export is still being processed. You\u2019ll receive an email when it\u2019s ready.",
      },
      reauthenticate: {
        id: "settings.chatGpt.dataControls.export.reauthError",
        defaultMessage: "Please sign in again, then retry your data export.",
      },
      email: {
        id: "settings.chatGpt.dataControls.export.emailError",
        defaultMessage: "Add and verify an email address in ChatGPT before requesting an export.",
      },
      error: {
        id: "settings.chatGpt.dataControls.export.error",
        defaultMessage: "Couldn\u2019t request your data export. Please try again later.",
      },
    })
    var B = a("Sg0s")
    function K(e) {
      let t,
        a,
        r,
        i,
        g,
        p,
        m,
        f,
        x,
        A,
        C,
        v,
        k,
        I,
        w,
        O,
        S,
        G,
        M,
        E,
        L,
        R,
        D,
        U,
        H = (0, n.c)(58),
        { open: q, onOpenChange: z } = e,
        F = (0, c.gh)(P.u),
        Y = (0, u.A)(),
        K = (0, _.As)(),
        Q = (0, o.jE)(),
        V = (0, d.useRef)(null),
        J = (0, d.useRef)(null),
        X = (0, d.useRef)(null),
        ee = (0, d.useRef)(null),
        [et, ea] = (0, d.useState)(null)
      ;(H[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => () => {
            V.current = null
          }),
          (a = []),
          (H[0] = t),
          (H[1] = a))
        : ((t = H[0]), (a = H[1])),
        (0, d.useEffect)(t, a),
        H[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = async function (e) {
              return V.current === e
            }),
            (H[2] = r))
          : (r = H[2]))
      let es = r
      ;(H[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (e) =>
            (async function (e, t) {
              try {
                return (await (async function (e, t) {
                  let a = await (0, $.wl)("chatgpt_account_data_export")
                  return (
                    !!(await t()) &&
                    (await y.Request.safePost("/accounts/data_export", { additionalHeaders: a, expectedIdentity: e }),
                    !0)
                  )
                })(e, t))
                  ? "requested"
                  : "cancelled"
              } catch (e) {
                throw e
              }
            })(e, () => es(e))),
          (H[3] = i))
        : (i = H[3]),
        H[4] !== Y || H[5] !== z || H[6] !== F
          ? ((g = async (e, t) => {
              "cancelled" !== e &&
                (await es(t)) &&
                "reauthenticating" !== e &&
                ((V.current = null),
                z(!1),
                F.get(N.Id).success(
                  Y.formatMessage({
                    id: "settings.chatGpt.dataControls.export.success",
                    defaultMessage: "Data export requested. You\u2019ll receive an email when it\u2019s ready.",
                  }),
                ))
            }),
            (H[4] = Y),
            (H[5] = z),
            (H[6] = F),
            (H[7] = g))
          : (g = H[7]),
        H[8] !== Y || H[9] !== F
          ? ((p = async (e, t) => {
              if (!(await es(t))) return
              ;(e instanceof W.fk && e.errorCode, (V.current = null))
              let a = (function (e) {
                if (e instanceof W.fk) {
                  if (409 === e.status) return Z.conflict
                  if (
                    401 === e.status ||
                    "reauth_required" === e.errorCode ||
                    "phone_verification_required" === e.errorCode
                  )
                    return Z.reauthenticate
                  if ("email_required" === e.errorCode) return Z.email
                }
                return Z.error
              })(e)
              F.get(N.Id).danger(Y.formatMessage(a), { errorAnalytics: { toastId: a.id } })
            }),
            (H[8] = Y),
            (H[9] = F),
            (H[10] = p))
          : (p = H[10]),
        H[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (e, t, a) => {
              J.current === a && (J.current = null)
            }),
            (H[11] = m))
          : (m = H[11]),
        H[12] !== g || H[13] !== p
          ? ((f = { mutationFn: i, onSuccess: g, onError: p, onSettled: m }), (H[12] = g), (H[13] = p), (H[14] = f))
          : (f = H[14]))
      let en = (0, l.n)(f),
        er = en.isPending || "reauthenticating" === en.data
      H[15] !== en
        ? ((x = function (e) {
            V.current === e && null == J.current && ((J.current = e), en.mutate(e))
          }),
          (H[15] = en),
          (H[16] = x))
        : (x = H[16])
      let ei = x
      H[17] !== z
        ? ((A = function () {
            ;((V.current = null), ea(null), z(!1))
          }),
          (H[17] = z),
          (H[18] = A))
        : (A = H[18])
      let eo = A
      H[19] !== eo || H[20] !== et || H[21] !== Y || H[22] !== Q || H[23] !== F || H[24] !== ei
        ? ((C = async function (e) {
            if (null == et || V.current !== et || X.current === et) return
            X.current = et
            let t = !1
            try {
              ;(await es(et)) &&
                (t = await (0, B.W)({ accountId: et.accountId, email: e, queryClient: Q, userId: et.userId }))
            } catch {}
            if (!(await es(et))) {
              V.current === et && eo()
              return
            }
            if ((ea(null), !t)) {
              ;((V.current = null),
                F.get(N.Id).danger(
                  Y.formatMessage({
                    id: "settings.chatGpt.dataControls.export.emailRefreshError",
                    defaultMessage: "Email verified. Sign in again, then retry your data export.",
                  }),
                  { errorAnalytics: { toastId: "settings.chatGpt.dataControls.export.emailRefreshError" } },
                ))
              return
            }
            ;((ee.current = et), ei(et))
          }),
          (H[19] = eo),
          (H[20] = et),
          (H[21] = Y),
          (H[22] = Q),
          (H[23] = F),
          (H[24] = ei),
          (H[25] = C))
        : (C = H[25])
      let el = C,
        ec = q && null == et
      return (
        H[26] !== eo || H[27] !== er
          ? ((v = (e) => {
              e || er || eo()
            }),
            (H[26] = eo),
            (H[27] = er),
            (H[28] = v))
          : (v = H[28]),
        H[29] !== K || H[30] !== er || H[31] !== ei
          ? ((k = (e) => {
              if ((e.preventDefault(), !er && null == J.current && null != K.userId && null != K.accountId)) {
                let e = { userId: K.userId, accountId: K.accountId }
                ;((V.current = e), ei(e))
              }
            }),
            (H[29] = K),
            (H[30] = er),
            (H[31] = ei),
            (H[32] = k))
          : (k = H[32]),
        H[33] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, s.jsx)(b.c7, {
              title: (0, s.jsx)(j.L3, {
                children: (0, s.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.export.dialog.title",
                  defaultMessage: "Request data export?",
                }),
              }),
            })),
            (H[33] = I))
          : (I = H[33]),
        H[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, s.jsx)(b.OO, {
              children: (0, s.jsx)(j.rr, {
                asChild: !0,
                children: (0, s.jsxs)("ul", {
                  className: "flex list-disc flex-col gap-1 ps-5 text-sm text-secondary",
                  children: [
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.export.dialog.contents",
                        defaultMessage: "Your account details and chats will be included.",
                      }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.export.dialog.delivery",
                        defaultMessage: "We\u2019ll email a download link to your registered address.",
                      }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.export.dialog.expiration",
                        defaultMessage: "The download link expires after 24 hours.",
                      }),
                    }),
                    (0, s.jsx)("li", {
                      children: (0, s.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.export.dialog.processing",
                        defaultMessage: "Processing may take some time.",
                      }),
                    }),
                  ],
                }),
              }),
            })),
            (H[34] = w))
          : (w = H[34]),
        H[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, s.jsx)(h.A, { id: "common.cancel", defaultMessage: "Cancel" })), (H[35] = O))
          : (O = H[35]),
        H[36] !== eo || H[37] !== er
          ? ((S = (0, s.jsx)(T.$, { color: "secondary", disabled: er, type: "button", onClick: eo, children: O })),
            (H[36] = eo),
            (H[37] = er),
            (H[38] = S))
          : (S = H[38]),
        H[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((G = (0, s.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.export.dialog.confirm",
              defaultMessage: "Confirm export",
            })),
            (H[39] = G))
          : (G = H[39]),
        H[40] !== er
          ? ((M = (0, s.jsx)(T.$, { loading: er, type: "submit", children: G })), (H[40] = er), (H[41] = M))
          : (M = H[41]),
        H[42] !== S || H[43] !== M
          ? ((E = (0, s.jsx)(b.OO, { children: (0, s.jsxs)(b.Es, { children: [S, M] }) })),
            (H[42] = S),
            (H[43] = M),
            (H[44] = E))
          : (E = H[44]),
        H[45] !== k || H[46] !== E
          ? ((L = (0, s.jsxs)(b.R4, { as: "form", onSubmit: k, children: [I, w, E] })),
            (H[45] = k),
            (H[46] = E),
            (H[47] = L))
          : (L = H[47]),
        H[48] !== ec || H[49] !== v || H[50] !== L
          ? ((R = (0, s.jsx)(j.lG, { open: ec, onOpenChange: v, children: L })),
            (H[48] = ec),
            (H[49] = v),
            (H[50] = L),
            (H[51] = R))
          : (R = H[51]),
        H[52] !== el || H[53] !== et ? ((D = null), (H[52] = el), (H[53] = et), (H[54] = D)) : (D = H[54]),
        H[55] !== R || H[56] !== D
          ? ((U = (0, s.jsxs)(s.Fragment, { children: [R, D] })), (H[55] = R), (H[56] = D), (H[57] = U))
          : (U = H[57]),
        U
      )
    }
    a("PkPC")
    var Q = a("uvj6")
    function V(e) {
      let t,
        a,
        r,
        c,
        d,
        u,
        g,
        p = (0, n.c)(26),
        { identity: m, onSaveError: f } = e,
        _ = (0, o.jE)(),
        x = (0, Q.cO)(m),
        { queryKey: A } = x,
        { data: C, isError: v, isFetching: k, isFetchedAfterMount: j, refetch: b } = (0, i.I)(x),
        I = JSON.stringify(A)
      ;(p[0] !== I ? ((t = { id: I }), (p[0] = I), (p[1] = t)) : (t = p[1]),
        p[2] !== m
          ? ((a = async (e) => {
              let t = await y.Request.safePatch(Q.qk, { ...(0, Q.LX)(m), requestBody: { enabled: e } })
              if (t.enabled !== e) throw Error("Daybreak safety training preference was not saved")
              return t
            }),
            (p[2] = m),
            (p[3] = a))
          : (a = p[3]),
        p[4] !== _ || p[5] !== A
          ? ((r = async (e) => {
              ;(await _.cancelQueries({ queryKey: A, exact: !0 }), _.setQueryData(A, e))
            }),
            (c = () => _.invalidateQueries({ queryKey: A, exact: !0 })),
            (p[4] = _),
            (p[5] = A),
            (p[6] = r),
            (p[7] = c))
          : ((r = p[6]), (c = p[7])),
        p[8] !== t || p[9] !== a || p[10] !== r || p[11] !== c
          ? ((d = { scope: t, mutationFn: a, onSuccess: r, onError: c }),
            (p[8] = t),
            (p[9] = a),
            (p[10] = r),
            (p[11] = c),
            (p[12] = d))
          : (d = p[12]))
      let w = (0, l.n)(d)
      if (v) {
        let e, t, a, n
        return (
          p[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("span", {
                role: "alert",
                children: (0, s.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.loadError",
                  defaultMessage: "Couldn\u2019t load all data controls",
                }),
              })),
              (p[13] = e))
            : (e = p[13]),
          p[14] !== b ? ((t = () => void b()), (p[14] = b), (p[15] = t)) : (t = p[15]),
          p[16] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, s.jsx)(h.A, { id: "common.retry", defaultMessage: "Retry" })), (p[16] = a))
            : (a = p[16]),
          p[17] !== k || p[18] !== t
            ? ((n = (0, s.jsx)(D.ic, {
                label: e,
                control: (0, s.jsx)(T.$, { color: "secondary", size: "toolbar", loading: k, onClick: t, children: a }),
              })),
              (p[17] = k),
              (p[18] = t),
              (p[19] = n))
            : (n = p[19]),
          n
        )
      }
      return j && null != C
        ? (p[20] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (0, s.jsx)(h.A, {
                id: "settings.chatGpt.dataControls.daybreakModelImprovement.description",
                defaultMessage:
                  "Control if Daybreak interactions are used for improving our models for everyone. Interactions triggering our safety classifiers can be used for safety purposes including improving our models\u2019 safeguards even if this setting is disabled. <link>Learn more</link>.",
                values: { link: J },
              })),
              (p[20] = u))
            : (u = p[20]),
          p[21] !== C.enabled || p[22] !== k || p[23] !== f || p[24] !== w
            ? ((g = (0, s.jsx)(L.GC, {
                entry: Q.k5,
                description: u,
                control: (e) =>
                  (0, s.jsx)(S.l, {
                    ...e,
                    checked: C.enabled,
                    disabled: k || w.isPending,
                    onChange: (e) => w.mutate(e, { onError: f }),
                  }),
              })),
              (p[21] = C.enabled),
              (p[22] = k),
              (p[23] = f),
              (p[24] = w),
              (p[25] = g))
            : (g = p[25]),
          g)
        : null
    }
    function J(e) {
      return (0, s.jsx)(I.G, {
        href: "https://help.openai.com/articles/7730893-data-controls-in-chatgpt",
        initiator: "external_link",
        underline: "always",
        children: e,
      })
    }
    var X = a("Q7yV"),
      ee = a("DBCl"),
      et = a("Qs18"),
      ea = a("KtYA"),
      es = a("rSJp"),
      en = a("HOLv")
    function er(e) {
      let t,
        a,
        r,
        i,
        o,
        d,
        g,
        p,
        m,
        _,
        x,
        C = (0, n.c)(29),
        { onBack: v } = e,
        k = (0, c.gh)(P.u),
        j = (0, u.A)(),
        b = (0, z.Zj)("500337272"),
        { data: I, isError: w, isFetching: O, isLoading: G, refetch: M } = (0, c.Ul)(et.nk)
      ;(C[0] !== b || C[1] !== k
        ? ((t = async (e) => {
            let { key: t, value: a } = e,
              s = k.get(A.Sk),
              n = k.get(f.chatGptAuthenticatedUserId$)
            if (null == s || null == n) return
            let r = k.query.snapshot(et.nk),
              i = (0, es.LF)(b) ? { analytics: !1, marketing: !1, personalization: !1 } : { [t]: a },
              o = (0, ea.D)(k, i, !0),
              l = !0,
              c = k.watch((e) => {
                let { get: t } = e
                ;(s !== t(A.Sk) || n !== t(f.chatGptAuthenticatedUserId$)) && (l = !1)
              }),
              d = () => {
                if (!l) return !1
                let e = o.getCurrentUpdate()
                if (0 === Object.keys(e).length) return !1
                let t = (0, es.LF)(b)
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
                return y.Request.safePost("/user_granular_consent", {
                  requestBody: { granular_consent: i },
                  additionalHeaders: { "ChatGPT-Account-ID": s, [ee.zBc]: s },
                  expectedIdentity: { userId: n, accountId: s },
                }).then(e, async (t) => {
                  throw (await e(), t)
                })
              })
              .finally(() => {
                ;(c(), o.finish())
              })
          }),
          (C[0] = b),
          (C[1] = k),
          (C[2] = t))
        : (t = C[2]),
        C[3] !== j || C[4] !== k
          ? ((a = () => {
              k.get(N.Id).danger(
                j.formatMessage({
                  id: "settings.chatGpt.marketingPrivacy.updateError",
                  defaultMessage: "Couldn\u2019t update marketing privacy settings",
                }),
                { errorAnalytics: { toastId: "settings.chatGpt.marketingPrivacy.updateError" } },
              )
            }),
            (C[3] = j),
            (C[4] = k),
            (C[5] = a))
          : (a = C[5]),
        C[6] !== t || C[7] !== a
          ? ((r = { mutationFn: t, onError: a }), (C[6] = t), (C[7] = a), (C[8] = r))
          : (r = C[8]))
      let U = (0, l.n)(r),
        q = !(I?.isConsentRequired ?? !0)
      ;(C[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, s.jsx)(h.A, {
            id: "settings.marketingPrivacy.overview",
            defaultMessage: "Choose how your data can be used for marketing",
          })),
          (o = (0, s.jsx)(h.A, { id: "settings.chatGpt.marketingPrivacy.title", defaultMessage: "Marketing privacy" })),
          (C[9] = i),
          (C[10] = o))
        : ((i = C[9]), (o = C[10])),
        C[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, s.jsx)(en.I, { className: "rtl:rotate-180", asset: X.x })),
            (g = (0, s.jsx)(h.A, { id: "settings.chatGpt.marketingPrivacy.back", defaultMessage: "Back" })),
            (C[11] = d),
            (C[12] = g))
          : ((d = C[11]), (g = C[12])),
        C[13] !== v
          ? ((p = (0, s.jsxs)(T.$, { color: "ghostActive", size: "toolbar", onClick: v, children: [d, g] })),
            (C[13] = v),
            (C[14] = p))
          : (p = C[14]))
      let W = G || void 0
      return (
        C[15] !== I || C[16] !== q || C[17] !== j || C[18] !== w || C[19] !== O || C[20] !== M || C[21] !== U
          ? ((m = w
              ? (0, s.jsx)(D.ic, {
                  label: (0, s.jsx)(h.A, {
                    id: "settings.chatGpt.marketingPrivacy.loadError",
                    defaultMessage: "Couldn\u2019t load marketing privacy settings",
                  }),
                  control: (0, s.jsx)(T.$, {
                    color: "secondary",
                    loading: O,
                    size: "toolbar",
                    onClick: () => void M(),
                    children: (0, s.jsx)(h.A, { id: "common.retry", defaultMessage: "Retry" }),
                  }),
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(L.GC, {
                      entry: F.AW.marketingMeasurement,
                      description: (0, s.jsx)(h.A, {
                        id: "settings.chatGpt.marketingPrivacy.measurement.description",
                        defaultMessage: "These cookies help us measure the effectiveness of our marketing campaigns.",
                      }),
                      control: (0, s.jsx)(S.l, {
                        ariaLabel: j.formatMessage({
                          id: "settings.chatGpt.marketingPrivacy.measurement.ariaLabel",
                          defaultMessage: "Allow marketing measurement",
                        }),
                        checked: I?.marketing ?? q,
                        disabled: null == I || U.isPending,
                        onChange: (e) => U.mutate({ key: "marketing", value: e }),
                      }),
                    }),
                    (0, s.jsx)(L.GC, {
                      entry: F.AW.marketingPersonalization,
                      description: (0, s.jsx)(h.A, {
                        id: "settings.chatGpt.marketingPrivacy.personalization.description",
                        defaultMessage:
                          "This helps us personalize and measure OpenAI\u2019s own marketing on third-party platforms.",
                      }),
                      control: (0, s.jsx)(S.l, {
                        ariaLabel: j.formatMessage({
                          id: "settings.chatGpt.marketingPrivacy.personalization.ariaLabel",
                          defaultMessage: "Allow personalized marketing",
                        }),
                        checked: I?.personalization ?? q,
                        disabled: null == I || U.isPending,
                        onChange: (e) => U.mutate({ key: "personalization", value: e }),
                      }),
                    }),
                  ],
                })),
            (C[15] = I),
            (C[16] = q),
            (C[17] = j),
            (C[18] = w),
            (C[19] = O),
            (C[20] = M),
            (C[21] = U),
            (C[22] = m))
          : (m = C[22]),
        C[23] !== m || C[24] !== W
          ? ((_ = (0, s.jsx)(R.X, {
              children: (0, s.jsx)(R.X.Content, { children: (0, s.jsx)(H.t, { "aria-busy": W, children: m }) }),
            })),
            (C[23] = m),
            (C[24] = W),
            (C[25] = _))
          : (_ = C[25]),
        C[26] !== _ || C[27] !== p
          ? ((x = (0, s.jsx)(E.P, { overview: i, title: o, backSlot: p, children: _ })),
            (C[26] = _),
            (C[27] = p),
            (C[28] = x))
          : (x = C[28]),
        x
      )
    }
    a("OMIV")
    var ei = a("EmRE"),
      eo = a("VMa7"),
      el = a("OX9U"),
      ec = a("SZLI"),
      ed = a("Ot7V"),
      eu = a("X6Vn")
    function eh() {
      let e,
        t = (0, n.c)(5),
        a = (0, c.Ul)(ei.a),
        { data: r } = (0, c.Ul)(A.s6),
        i = (0, c.Ul)(el.d)
      if (!a) return null
      let o = i ?? null,
        l = r?.preciseLocationAllowed,
        d = r?.amphoraLocks?.precise_location_allowed,
        u = r?.preciseLocationRestrictedReason
      return (
        t[0] !== o || t[1] !== l || t[2] !== d || t[3] !== u
          ? ((e = (0, s.jsx)(eg, { permission: o, allowed: l, locked: d, restrictedReason: u })),
            (t[0] = o),
            (t[1] = l),
            (t[2] = d),
            (t[3] = u),
            (t[4] = e))
          : (e = t[4]),
        e
      )
    }
    function eg(e) {
      let t,
        a,
        r,
        i,
        o,
        l,
        g = (0, n.c)(29),
        { permission: p, allowed: m, locked: _, restrictedReason: x } = e,
        C = (0, c.gh)(P.u),
        v = (0, u.A)(),
        [k, j] = (0, d.useState)(!1),
        b = !1 === m && (!0 === _ || !!x),
        O = !0 === m && "granted" === p,
        S = b
          ? "https://help.openai.com/en/articles/12315553-parental-controls-on-chatgpt-faq#location"
          : "https://help.openai.com/en/articles/9237897-chatgpt-search#location"
      g[0] !== S
        ? ((t = (e) =>
            (0, s.jsx)(I.G, {
              href: S,
              initiator: "external_link",
              appearance: "secondary",
              openTarget: "external-browser",
              children: e,
            })),
          (g[0] = S),
          (g[1] = t))
        : (t = g[1])
      let M = t
      if (b) {
        let e
        ;(g[2] !== M || g[3] !== x
          ? ((e = x
              ? (0, s.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.location.restrictedReason",
                  defaultMessage: "{reason} <link>Learn more</link>",
                  values: { reason: x, link: M },
                })
              : (0, s.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.location.restricted",
                  defaultMessage:
                    "Restricted by parental controls. ChatGPT won't use your device's location. <link>Learn more</link>",
                  values: { link: M },
                })),
            (g[2] = M),
            (g[3] = x),
            (g[4] = e))
          : (e = g[4]),
          (a = e))
      } else if (O) {
        let e
        ;(g[5] !== M
          ? ((e = (0, s.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.location.granted",
              defaultMessage:
                "Allow ChatGPT to use your device's precise location when providing information. <link>Learn more</link>",
              values: { link: M },
            })),
            (g[5] = M),
            (g[6] = e))
          : (e = g[6]),
          (a = e))
      } else {
        let e
        ;(g[7] !== M
          ? ((e = (0, s.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.location.promptOrDenied",
              defaultMessage:
                "When enabled, your location helps ChatGPT provide more relevant information, like local recommendations, news, and weather. <link>Learn more</link>",
              values: { link: M },
            })),
            (g[7] = M),
            (g[8] = e))
          : (e = g[8]),
          (a = e))
      }
      g[9] !== O
        ? ((r = O
            ? (0, s.jsx)(h.A, { id: "settings.chatGpt.dataControls.location.on", defaultMessage: "On" })
            : (0, s.jsx)(h.A, { id: "settings.chatGpt.dataControls.location.off", defaultMessage: "Off" })),
          (g[9] = O),
          (g[10] = r))
        : (r = g[10])
      let E = r
      g[11] !== m || g[12] !== v || g[13] !== C
        ? ((i = async function (e) {
            let t = C.get(A.Sk),
              a = C.get(f.chatGptAuthenticatedUserId$),
              s = C.get(f.o8),
              n = C.query.snapshot(A.s6),
              r = () => C.get(A.Sk) === t && C.get(f.chatGptAuthenticatedUserId$) === a && C.get(f.o8) === s
            try {
              let a = !e
              if (e && !1 === m) {
                let e = await n.fetch()
                if (
                  !r() ||
                  !C.get(ei.a) ||
                  null == e.preciseLocationAllowed ||
                  e.amphoraLocks?.precise_location_allowed === !0 ||
                  e.preciseLocationRestrictedReason
                )
                  return
                a = !1 === e.preciseLocationAllowed
              }
              ;(a &&
                (await y.Request.safePatch("/settings/account_user_setting", {
                  expectedIdentity: null != t && null != s ? { accountId: t, userId: s } : void 0,
                  additionalHeaders: null == t ? void 0 : { "ChatGPT-Account-ID": t, [ee.zBc]: t },
                  parameters: { query: { feature: "precise_location_allowed", value: e } },
                }),
                !e && (await n.cancel(), n.setData(ep), r() && (0, G.q0)()),
                await n.invalidate()),
                e &&
                  r() &&
                  (await (0, ec.Z)(
                    C,
                    "CHATGPT_PRECISE_LOCATION_ENTRY_POINT_SETTINGS",
                    "CHATGPT_LOCATION_PERMISSION_INTERACTION_STATUS_ROW",
                  )))
            } catch {
              r() &&
                C.get(N.Id).danger(
                  v.formatMessage({
                    id: "settings.chatGpt.dataControls.updateError",
                    defaultMessage: "Could not update data controls",
                  }),
                  { errorAnalytics: { toastId: "settings.chatGpt.dataControls.updateError" } },
                )
            }
          }),
          (g[11] = m),
          (g[12] = v),
          (g[13] = C),
          (g[14] = i))
        : (i = g[14])
      let R = i
      return (
        g[15] !== m ||
        g[16] !== O ||
        g[17] !== S ||
        g[18] !== _ ||
        g[19] !== k ||
        g[20] !== p ||
        g[21] !== b ||
        g[22] !== C ||
        g[23] !== E ||
        g[24] !== R
          ? ((o = (e) => {
              let { "aria-describedby": t } = e
              return b || O || (!0 === m && "denied" === p)
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsxs)(T.$, {
                        "aria-describedby": t,
                        color: "ghost",
                        size: "toolbar",
                        onClick: (e) => {
                          b || "denied" !== p
                            ? (0, ed.PQ)({
                                event: e,
                                href: S,
                                initiator: "external_link",
                                openTarget: "external-browser",
                              })
                            : (0, eu.qf)(C, eo.ChatGptLocationPermissionDeniedDialog)
                        },
                        children: [E, (0, s.jsx)(w.uM3, {})],
                      }),
                      O &&
                        (0, s.jsx)(T.$, {
                          "aria-describedby": t,
                          color: "secondary",
                          size: "toolbar",
                          disabled: !0 === _ || k,
                          loading: k,
                          onClick: () => {
                            ;(j(!0), R(!1).finally(() => j(!1)))
                          },
                          children: (0, s.jsx)(h.A, {
                            id: "settings.chatGpt.dataControls.location.turnOff",
                            defaultMessage: "Turn off",
                          }),
                        }),
                    ],
                  })
                : (0, s.jsx)(T.$, {
                    "aria-describedby": t,
                    color: "secondary",
                    size: "toolbar",
                    disabled: null == m || k,
                    loading: k,
                    onClick: () => {
                      ;(j(!0), R(!0).finally(() => j(!1)))
                    },
                    children: (0, s.jsx)(h.A, {
                      id: "chatgptConversations.preciseLocation.turnOn",
                      defaultMessage: "Turn on",
                    }),
                  })
            }),
            (g[15] = m),
            (g[16] = O),
            (g[17] = S),
            (g[18] = _),
            (g[19] = k),
            (g[20] = p),
            (g[21] = b),
            (g[22] = C),
            (g[23] = E),
            (g[24] = R),
            (g[25] = o))
          : (o = g[25]),
        g[26] !== a || g[27] !== o
          ? ((l = (0, s.jsx)(L.GC, { entry: F.AW.location, description: a, control: o })),
            (g[26] = a),
            (g[27] = o),
            (g[28] = l))
          : (l = g[28]),
        l
      )
    }
    function ep(e) {
      return null == e ? e : { ...e, preciseLocationAllowed: !1 }
    }
    var em = a("sPCu"),
      ef = a("MM0V")
    function e_() {
      let e,
        t = (0, n.c)(2),
        { workNetwork: a } = (0, c.Ul)(F.cP)
      return (t[0] !== a ? ((e = a ? (0, s.jsx)(ey, {}) : null), (t[0] = a), (t[1] = e)) : (e = t[1]), e)
    }
    function ey() {
      let e,
        t,
        a,
        r,
        i,
        o = (0, n.c)(16),
        l = (0, u.A)(),
        { data: d, isError: g, refetch: p } = (0, c.Ul)(A.s6),
        { mutate: m, isPending: f, error: _ } = (0, c.Ul)(A.wQ),
        y = d?.enableFloraNetworkAccess === !0,
        x = null == d || g || f || d.amphoraLocks?.enable_flora_network_access === !0
      return (
        o[0] !== m ? ((e = (e) => m(e)), (o[0] = m), (o[1] = e)) : (e = o[1]),
        o[2] !== l
          ? ((t = l.formatMessage({
              id: "settings.chatGpt.dataControls.networkAccess.ariaLabel",
              defaultMessage: "Allow Work network access",
            })),
            (o[2] = l),
            (o[3] = t))
          : (t = o[3]),
        o[4] !== y || o[5] !== x || o[6] !== e || o[7] !== t
          ? ((a = (0, s.jsx)(L.GC, {
              entry: F.AW.workNetwork,
              control: (0, s.jsx)(S.l, { checked: y, disabled: x, onChange: e, ariaLabel: t }),
            })),
            (o[4] = y),
            (o[5] = x),
            (o[6] = e),
            (o[7] = t),
            (o[8] = a))
          : (a = o[8]),
        o[9] !== _ || o[10] !== g || o[11] !== p
          ? ((r =
              g || null != _
                ? (0, s.jsx)(ef.l, {
                    type: "error",
                    role: "alert",
                    content: (0, s.jsx)(h.A, {
                      id: "settings.chatGpt.networkAccess.error",
                      defaultMessage: "Could not load or save Work network access. Reload and try again",
                    }),
                    primaryCtaText: (0, s.jsx)(h.A, {
                      id: "settings.chatGpt.networkAccess.reload",
                      defaultMessage: "Reload",
                    }),
                    onPrimaryCtaClick: () => {
                      p()
                    },
                  })
                : null),
            (o[9] = _),
            (o[10] = g),
            (o[11] = p),
            (o[12] = r))
          : (r = o[12]),
        o[13] !== a || o[14] !== r
          ? ((i = (0, s.jsxs)(s.Fragment, { children: [a, r] })), (o[13] = a), (o[14] = r), (o[15] = i))
          : (i = o[15]),
        i
      )
    }
    function ex(e) {
      let t,
        a,
        r,
        i,
        o,
        d,
        g,
        p,
        m,
        f,
        _,
        x,
        A,
        C = (0, n.c)(37),
        { accountId: v, userId: k, open: I, onOpenChange: w, triggerContent: O } = e,
        S = (0, c.gh)(P.u),
        G = (0, u.A)()
      C[0] !== v || C[1] !== k
        ? ((t = {
            mutationFn: () =>
              (async function ({ accountId: e, userId: t }) {
                await y.Request.safePost("/flora/workspace/reset", {
                  expectedIdentity: { accountId: e, userId: t },
                  additionalHeaders: { "ChatGPT-Account-ID": e, [ee.zBc]: e },
                  retry: !1,
                })
              })({ accountId: v, userId: k }),
            retry: !1,
          }),
          (C[0] = v),
          (C[1] = k),
          (C[2] = t))
        : (t = C[2])
      let { mutate: M, isPending: E } = (0, l.n)(t)
      C[3] !== E || C[4] !== w
        ? ((a = (e) => {
            E || w(e)
          }),
          (C[3] = E),
          (C[4] = w),
          (C[5] = a))
        : (a = C[5])
      let L = !E
      return (
        C[6] !== G || C[7] !== E || C[8] !== M || C[9] !== w || C[10] !== S
          ? ((r = (e) => {
              ;(e.preventDefault(),
                E ||
                  M(void 0, {
                    onSuccess: () => {
                      ;(w(!1),
                        S.get(N.Id).success(
                          G.formatMessage({
                            id: "chatgpt.settings.data_controls.work_reset.toast.success",
                            defaultMessage: "Work reset",
                          }),
                        ))
                    },
                    onError: (e) => {
                      S.get(N.Id).danger(
                        G.formatMessage({
                          id: "chatgpt.settings.data_controls.work_reset.toast.error",
                          defaultMessage: "Failed to reset Work",
                        }),
                        {
                          description: e.message,
                          errorAnalytics: { toastId: "chatgpt.settings.data_controls.work_reset.toast.error" },
                        },
                      )
                    },
                  }))
            }),
            (C[6] = G),
            (C[7] = E),
            (C[8] = M),
            (C[9] = w),
            (C[10] = S),
            (C[11] = r))
          : (r = C[11]),
        C[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, s.jsx)(j.L3, {
              children: (0, s.jsx)(h.A, {
                id: "chatgpt.settings.data_controls.work_reset.modal.title",
                defaultMessage: "Reset ChatGPT Work?",
              }),
            })),
            (C[12] = i))
          : (i = C[12]),
        C[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsx)(b.OO, {
              children: (0, s.jsx)(b.c7, {
                title: i,
                subtitle: (0, s.jsx)(j.rr, {
                  children: (0, s.jsx)(h.A, {
                    id: "chatgpt.settings.data_controls.work_reset.modal.description",
                    defaultMessage:
                      "This will delete files and other local data in your current work environment. Files saved to your Library will remain. A fresh environment will be created the next time you start working.",
                  }),
                }),
              }),
            })),
            (C[13] = o))
          : (o = C[13]),
        C[14] !== w ? ((d = () => w(!1)), (C[14] = w), (C[15] = d)) : (d = C[15]),
        C[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, s.jsx)(h.A, {
              id: "chatgpt.settings.data_controls.work_reset.modal.button.cancel",
              defaultMessage: "Cancel",
            })),
            (C[16] = g))
          : (g = C[16]),
        C[17] !== E || C[18] !== d
          ? ((p = (0, s.jsx)(T.$, { color: "secondary", disabled: E, type: "button", onClick: d, children: g })),
            (C[17] = E),
            (C[18] = d),
            (C[19] = p))
          : (p = C[19]),
        C[20] !== E
          ? ((m = E
              ? (0, s.jsx)(h.A, {
                  id: "chatgpt.settings.data_controls.work_reset.modal.button.pending",
                  defaultMessage: "Resetting\u2026",
                })
              : (0, s.jsx)(h.A, {
                  id: "chatgpt.settings.data_controls.work_reset.modal.button.confirm",
                  defaultMessage: "Reset",
                })),
            (C[20] = E),
            (C[21] = m))
          : (m = C[21]),
        C[22] !== E || C[23] !== m
          ? ((f = (0, s.jsx)(T.$, { color: "danger", loading: E, type: "submit", children: m })),
            (C[22] = E),
            (C[23] = m),
            (C[24] = f))
          : (f = C[24]),
        C[25] !== f || C[26] !== p
          ? ((_ = (0, s.jsx)(b.OO, { children: (0, s.jsxs)(b.Es, { children: [p, f] }) })),
            (C[25] = f),
            (C[26] = p),
            (C[27] = _))
          : (_ = C[27]),
        C[28] !== _ || C[29] !== r
          ? ((x = (0, s.jsxs)(b.R4, { as: "form", className: "select-none", onSubmit: r, children: [o, _] })),
            (C[28] = _),
            (C[29] = r),
            (C[30] = x))
          : (x = C[30]),
        C[31] !== I || C[32] !== x || C[33] !== a || C[34] !== L || C[35] !== O
          ? ((A = (0, s.jsx)(j.lG, {
              open: I,
              triggerContent: O,
              onOpenChange: a,
              showDialogClose: L,
              size: "compact",
              children: x,
            })),
            (C[31] = I),
            (C[32] = x),
            (C[33] = a),
            (C[34] = L),
            (C[35] = O),
            (C[36] = A))
          : (A = C[36]),
        A
      )
    }
    function eA() {
      let e,
        t = (0, n.c)(4),
        a = (0, c.Ul)(F.Nz)
      if (null == a) return null
      let { accountId: r, userId: i } = a,
        o = `${i}:${r}`
      return (
        t[0] !== r || t[1] !== o || t[2] !== i
          ? ((e = (0, s.jsx)(eC, { accountId: r, userId: i }, o)), (t[0] = r), (t[1] = o), (t[2] = i), (t[3] = e))
          : (e = t[3]),
        e
      )
    }
    function eC(e) {
      let t,
        a = (0, n.c)(4),
        { accountId: r, userId: i } = e,
        [o, l] = (0, d.useState)(!1)
      return (
        a[0] !== r || a[1] !== o || a[2] !== i
          ? ((t = (0, s.jsx)(L.GC, {
              className: "select-none",
              entry: F.AW.workReset,
              control: (e) =>
                (0, s.jsx)(ex, {
                  accountId: r,
                  userId: i,
                  open: o,
                  onOpenChange: l,
                  triggerContent: (0, s.jsx)(T.$, {
                    ...e,
                    color: "danger",
                    size: "toolbar",
                    children: (0, s.jsx)(h.A, {
                      id: "chatgpt.settings.data_controls.work_reset.row.button.label",
                      defaultMessage: "Reset",
                    }),
                  }),
                }),
            })),
            (a[0] = r),
            (a[1] = o),
            (a[2] = i),
            (a[3] = t))
          : (t = a[3]),
        t
      )
    }
    let ev = (0, O._)(async () => (await a.e(114243).then(a.bind(a, "PTJJ"))).AdsControlsSettings),
      ek = (0, O._)(async () => (await a.e(642456).then(a.bind(a, "ylb7"))).InformationSharingSettings)
    function eT() {
      let e,
        t,
        r,
        I,
        O,
        W,
        Y,
        $,
        Z,
        B,
        Q,
        J,
        X,
        ee,
        et,
        ea,
        es,
        en,
        ei,
        eo,
        el,
        ec,
        ed,
        eu,
        eg,
        ep,
        ef,
        ey,
        ex,
        eC,
        eT,
        eO,
        eN,
        eS,
        eG,
        eM,
        eP,
        eE,
        eL,
        eR,
        eD,
        eU,
        eH,
        eq = (0, n.c)(146),
        ez = (0, c.gh)(P.u),
        eF = (0, u.A)(),
        { userId: eW, accountId: eY } = (0, _.As)(),
        { data: e$, isError: eZ, isFetching: eB } = (0, c.Ul)(A.s6),
        { ads: eK, informationSharing: eQ, marketing: eV } = (0, c.Ul)(F.cP),
        eJ = (0, c.Ul)(A.Sk)
      eq[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = { preview: !1 }), (eq[0] = e)) : (e = eq[0])
      let { data: eX } = (0, k.YL)(void 0, e),
        e0 = (0, c.Ul)(F.ec),
        e1 = eX?.structure === "workspace",
        e2 = (0, z.Zj)("2502526155")
      eq[1] !== eY || eq[2] !== eW
        ? ((t = ["training-disclosure-verified-access", eY, eW]), (eq[1] = eY), (eq[2] = eW), (eq[3] = t))
        : (t = eq[3])
      let e3 = e2 && null != eW && null != eY && eX?.id === eY
      ;(eq[4] !== eY || eq[5] !== eW
        ? ((r = (e) => {
            let { signal: t } = e
            return y.Request.safeGet("/accounts/verified_access", {
              signal: t,
              additionalHeaders: null == eY ? void 0 : { "ChatGPT-Account-ID": eY },
              expectedIdentity: null == eY || null == eW ? void 0 : { accountId: eY, userId: eW },
            })
          }),
          (eq[4] = eY),
          (eq[5] = eW),
          (eq[6] = r))
        : (r = eq[6]),
        eq[7] !== t || eq[8] !== e3 || eq[9] !== r
          ? ((I = { queryKey: t, enabled: e3, queryFn: r, staleTime: 6e4 }),
            (eq[7] = t),
            (eq[8] = e3),
            (eq[9] = r),
            (eq[10] = I))
          : (I = eq[10]))
      let { data: e4, isSuccess: e5 } = (0, i.I)(I),
        e6 = e2 && eX?.id === eY && e5 && e4.programs.some(ew),
        e7 = (0, o.jE)()
      eq[11] !== eX || eq[12] !== eJ || eq[13] !== eW
        ? ((O = (0, q.U)({ account: eX, userId: eW, settingsAccountId: eJ })),
          (eq[11] = eX),
          (eq[12] = eJ),
          (eq[13] = eW),
          (eq[14] = O))
        : (O = eq[14])
      let e8 = O,
        { data: e9, isError: te, isFetching: tt, refetch: ta } = (0, i.I)(e8),
        ts = e1 && te,
        tn = e1 && e9?.data_usage_for_training === "disallowed",
        tr = (0, c.Ul)(F.Hu),
        ti = tr?.sharedLinksAccountId,
        to = tr?.exportData === !0,
        tl = null == eX ? null : `${eW}:${eY}:${eX.id}`,
        tc = eX?.id
      eq[15] !== eY || eq[16] !== tc || eq[17] !== eW
        ? ((W = ["chatgpt-data-export-reauth", eW, eY, tc]), (eq[15] = eY), (eq[16] = tc), (eq[17] = eW), (eq[18] = W))
        : (W = eq[18])
      let td = W
      ;(eq[19] !== eX?.id || eq[20] !== eW
        ? ((Y = (e) => {
            let { signal: t } = e
            return (async function (e, t, s) {
              if (null == e || null == t) return !1
              let { consumeDataExportReauthentication: n } = await a.e(957871).then(a.bind(a, "n0Uu"))
              return n({ userId: e, accountId: t, signal: s })
            })(eW, eX?.id, t)
          }),
          (eq[19] = eX?.id),
          (eq[20] = eW),
          (eq[21] = Y))
        : (Y = eq[21]),
        eq[22] !== td || eq[23] !== Y || !1 !== eq[24]
          ? (($ = {
              queryKey: td,
              queryFn: Y,
              enabled: !1,
              staleTime: 1 / 0,
              gcTime: 0,
              retry: !1,
              refetchOnWindowFocus: !1,
            }),
            (eq[22] = td),
            (eq[23] = Y),
            (eq[24] = !1),
            (eq[25] = $))
          : ($ = eq[25]))
      let { data: tu } = (0, i.I)($)
      ;((0, z.Zj)("500944450"), (0, d.useState)(!1))
      let [th, tg] = (0, g.ok)(),
        tp = th.get("view"),
        [tm, tf] = (0, d.useState)(null),
        [t_, ty] = (0, d.useState)(!1),
        [tx, tA] = (0, d.useState)(null)
      ;(eq[26] !== e7 || eq[27] !== ez
        ? ((Z = async (e) => {
            let t = ez.get(p.j),
              a = ez.get(A.Sk),
              s = ez.get(f.chatGptAuthenticatedUserId$)
            ;(await y.Request.safePatch("/conversations", {
              requestBody: "archive" === e ? { is_archived: !0 } : { is_visible: !1 },
            }),
              M.appServices?.dictationHistoryRetention != null &&
                "delete" === e &&
                null != a &&
                null != s &&
                (await M.appServices.dictationHistoryRetention.deleteConversation({ accountId: a, userId: s }),
                await e7.invalidateQueries({ queryKey: ["dictation-history"] })),
              (0, m.bl)(ez, t),
              ez.get(p.j) === t && ez.set(x.mD, []),
              (0, v.g6)(ez),
              e7.invalidateQueries({ queryKey: [v.s5] }),
              await (0, C.RK)({ includePersisted: !0 }).catch(eI))
          }),
          (eq[26] = e7),
          (eq[27] = ez),
          (eq[28] = Z))
        : (Z = eq[28]),
        eq[29] === Symbol.for("react.memo_cache_sentinel") ? ((B = () => tA(null)), (eq[29] = B)) : (B = eq[29]))
      let tC = (0, l.n)({ mutationFn: Z, onSuccess: B, onError: () => tv() })
      function tv() {
        ez.get(N.Id).danger(
          eF.formatMessage({
            id: "settings.chatGpt.dataControls.updateError",
            defaultMessage: "Could not update data controls",
          }),
          { errorAnalytics: { toastId: "settings.chatGpt.dataControls.updateError" } },
        )
      }
      eq[30] !== eX ||
      eq[31] !== e1 ||
      eq[32] !== e7 ||
      eq[33] !== ez ||
      eq[34] !== eJ ||
      eq[35] !== tv ||
      eq[36] !== e8
        ? ((Q = async function (e, t) {
            "precise_location_allowed" !== e || t || (0, G.q0)()
            let a = ez.query.snapshot(A.s6),
              s = a.getData()
            if (
              "training_allowed" === e &&
              (null == s ||
                ez.get(A.s6).isError ||
                s.amphoraLocks?.training_allowed === !0 ||
                null == eX ||
                eX.id !== eJ ||
                ez.get(A.Sk) !== eJ ||
                (e1 &&
                  (e7.getQueryState(e8.queryKey)?.status === "error" ||
                    e7.getQueryData(e8.queryKey)?.data_usage_for_training !== "permitted")))
            )
              return
            let n = ez.get(A.Sk)
            try {
              ;(await y.Request.safePatch("/settings/account_user_setting", {
                additionalHeaders: null == n ? void 0 : { "ChatGPT-Account-ID": n },
                parameters: { query: { feature: e, value: t } },
              }),
                "precise_location_allowed" !== e || t || (0, G.q0)(),
                "training_allowed" === e && a.setData((e) => (null == e ? e : { ...e, trainingAllowed: t })),
                await a.invalidate())
            } catch {
              ez.get(A.Sk) === n && tv()
            }
          }),
          (eq[30] = eX),
          (eq[31] = e1),
          (eq[32] = e7),
          (eq[33] = ez),
          (eq[34] = eJ),
          (eq[35] = tv),
          (eq[36] = e8),
          (eq[37] = Q))
        : (Q = eq[37])
      let tk = Q
      eq[38] !== th || eq[39] !== tg
        ? ((J = function (e) {
            let t = new URLSearchParams(th)
            ;(null != e ? t.set("view", e) : t.delete("view"), tg(t))
          }),
          (eq[38] = th),
          (eq[39] = tg),
          (eq[40] = J))
        : (J = eq[40])
      let tT = J
      if (eK && ["ads", "ads-history", "ads-topics"].includes(tp ?? "")) {
        let e
        return (
          eq[41] !== th || eq[42] !== tg
            ? ((e = (0, s.jsx)(ev, {
                onBack: () => {
                  let e = new URLSearchParams(th)
                  ;(e.delete("view"), e.delete("adsView"), tg(e))
                },
              })),
              (eq[41] = th),
              (eq[42] = tg),
              (eq[43] = e))
            : (e = eq[43]),
          e
        )
      }
      if ("marketing-privacy" === tp && eV) {
        let e
        return (
          eq[44] !== tT
            ? ((e = (0, s.jsx)(er, { onBack: () => tT(null) })), (eq[44] = tT), (eq[45] = e))
            : (e = eq[45]),
          e
        )
      }
      if ("information-sharing" === tp && eQ) {
        let e
        return (
          eq[46] !== tT
            ? ((e = (0, s.jsx)(ek, { onBack: () => tT(null) })), (eq[46] = tT), (eq[47] = e))
            : (e = eq[47]),
          e
        )
      }
      if (e6) {
        let e
        ;(eq[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.training.trustedAccess.description",
              defaultMessage:
                "Allow your content to be used to improve our models for you and other users. We take steps to protect your privacy. <strong>Eligible Trusted Access content may be used for safety training.</strong> <link>Learn more</link>",
              values: { strong: eb, link: ej },
            })),
            (eq[48] = e))
          : (e = eq[48]),
          (X = e))
      } else if (tn) {
        let e
        ;(eq[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.training.unavailableDescription",
              defaultMessage:
                "By default, OpenAI does not use data from this workspace to train or improve its models. This plan does not offer an option to opt in to model training.",
            })),
            (eq[49] = e))
          : (e = eq[49]),
          (X = e))
      } else {
        let e
        ;(eq[50] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "settings.chatGpt.dataControls.training.description",
              defaultMessage: "Control whether your chats are used for model training",
            })),
            (eq[50] = e))
          : (e = eq[50]),
          (X = e))
      }
      ;(eq[51] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = (0, s.jsx)(h.A, {
            id: "settings.overview.data-controls",
            defaultMessage: "Manage your chat history and choose how ChatGPT uses your data",
          })),
          (et = (0, s.jsx)(U.s, { showChatGptDataControlsLabel: !0, slug: "data-controls" })),
          (eq[51] = ee),
          (eq[52] = et))
        : ((ee = eq[51]), (et = eq[52])),
        eq[53] !== eF || eq[54] !== t_ || eq[55] !== ti
          ? ((ea =
              null != ti
                ? (0, s.jsx)(L.GC, {
                    entry: F.AW.sharedLinks,
                    control: (0, s.jsx)(em.V, {
                      accountId: ti,
                      open: t_,
                      onOpenChange: ty,
                      triggerContent: (0, s.jsx)(T.$, {
                        "aria-label": eF.formatMessage({
                          id: "settings.chatGpt.dataControls.manageSharedLinks",
                          defaultMessage: "Manage shared links",
                        }),
                        color: "secondary",
                        size: "toolbar",
                        children: (0, s.jsx)(h.A, {
                          id: "settings.chatGpt.dataControls.manage",
                          defaultMessage: "Manage",
                        }),
                      }),
                    }),
                  })
                : null),
            (eq[53] = eF),
            (eq[54] = t_),
            (eq[55] = ti),
            (eq[56] = ea))
          : (ea = eq[56]),
        eq[57] !== tt || eq[58] !== eZ || eq[59] !== eB || eq[60] !== ts || eq[61] !== ta || eq[62] !== ez
          ? ((es =
              eZ || ts
                ? (0, s.jsx)(D.ic, {
                    label: (0, s.jsx)("span", {
                      role: "alert",
                      children: (0, s.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.training.loadError",
                        defaultMessage: "Couldn\u2019t load model improvement settings",
                      }),
                    }),
                    control: (0, s.jsx)(T.$, {
                      color: "secondary",
                      size: "toolbar",
                      loading: eB || tt,
                      onClick: () => {
                        ;(eZ && ez.query.snapshot(A.s6).invalidate(), ts && ta())
                      },
                      children: (0, s.jsx)(h.A, { id: "common.retry", defaultMessage: "Retry" }),
                    }),
                  })
                : null),
            (eq[57] = tt),
            (eq[58] = eZ),
            (eq[59] = eB),
            (eq[60] = ts),
            (eq[61] = ta),
            (eq[62] = ez),
            (eq[63] = es))
          : (es = eq[63]),
        eq[64] !== eX ||
        eq[65] !== eF ||
        eq[66] !== te ||
        eq[67] !== e1 ||
        eq[68] !== eZ ||
        eq[69] !== tn ||
        eq[70] !== eJ ||
        eq[71] !== e9?.data_usage_for_training ||
        eq[72] !== tk ||
        eq[73] !== e$
          ? ((en =
              eZ && null == e$
                ? null
                : (e) => {
                    let { "aria-describedby": t } = e
                    return (0, s.jsx)(S.l, {
                      "aria-describedby": t,
                      checked: !tn && e$?.trainingAllowed === !0,
                      disabled:
                        null == e$ ||
                        eZ ||
                        e$.amphoraLocks?.training_allowed === !0 ||
                        null == eX ||
                        eX.id !== eJ ||
                        (e1 && (te || e9?.data_usage_for_training !== "permitted")),
                      onChange: (e) => void tk("training_allowed", e),
                      ariaLabel: eF.formatMessage({
                        id: "settings.chatGpt.dataControls.training.ariaLabel",
                        defaultMessage: "Allow chats to improve the model",
                      }),
                    })
                  }),
            (eq[64] = eX),
            (eq[65] = eF),
            (eq[66] = te),
            (eq[67] = e1),
            (eq[68] = eZ),
            (eq[69] = tn),
            (eq[70] = eJ),
            (eq[71] = e9?.data_usage_for_training),
            (eq[72] = tk),
            (eq[73] = e$),
            (eq[74] = en))
          : (en = eq[74]),
        eq[75] !== en || eq[76] !== X
          ? ((ei = (0, s.jsx)(L.GC, { entry: F.AW.training, description: X, control: en })),
            (eq[75] = en),
            (eq[76] = X),
            (eq[77] = ei))
          : (ei = eq[77]),
        eq[78] !== e0 || eq[79] !== tv
          ? ((eo =
              null != e0
                ? (0, s.jsx)(V, { identity: e0, onSaveError: tv }, JSON.stringify([e0.accountId, e0.userId]))
                : null),
            (eq[78] = e0),
            (eq[79] = tv),
            (eq[80] = eo))
          : (eo = eq[80]),
        eq[81] === Symbol.for("react.memo_cache_sentinel")
          ? ((el = (0, s.jsx)(eh, {})),
            (ec = (0, s.jsx)(e_, {})),
            (ed = (0, s.jsx)(eA, {})),
            (eu = !1),
            (eq[81] = el),
            (eq[82] = ec),
            (eq[83] = ed),
            (eq[84] = eu))
          : ((el = eq[81]), (ec = eq[82]), (ed = eq[83]), (eu = eq[84])),
        eq[85] !== eQ || eq[86] !== tT
          ? ((eg = eQ
              ? (0, s.jsx)(L.kk, {
                  edgeRounding: "surface",
                  entry: F.AW.informationSharing,
                  onClick: () => tT("information-sharing"),
                  trailing: (0, s.jsx)(w.uM3, {}),
                })
              : null),
            (eq[85] = eQ),
            (eq[86] = tT),
            (eq[87] = eg))
          : (eg = eq[87]),
        eq[88] === Symbol.for("react.memo_cache_sentinel")
          ? ((ep = (0, s.jsx)(L.kk, {
              edgeRounding: "surface",
              entry: F.AW.archivedChats,
              to: "/settings/archived-chats",
              trailing: (0, s.jsx)(w.uM3, {}),
            })),
            (eq[88] = ep))
          : (ep = eq[88]),
        eq[89] === Symbol.for("react.memo_cache_sentinel")
          ? ((ef = (0, s.jsx)(L.GC, {
              entry: F.AW.archiveAll,
              control: (0, s.jsx)(T.$, {
                color: "secondary",
                size: "toolbar",
                onClick: () => tA("archive"),
                children: (0, s.jsx)(h.A, {
                  id: "settings.chatGpt.dataControls.archive",
                  defaultMessage: "Archive all",
                }),
              }),
            })),
            (eq[89] = ef))
          : (ef = eq[89]),
        eq[90] === Symbol.for("react.memo_cache_sentinel")
          ? ((ey = (0, s.jsx)(L.GC, {
              entry: F.AW.deleteAll,
              control: (0, s.jsx)(T.$, {
                color: "danger",
                size: "toolbar",
                onClick: () => tA("delete"),
                children: (0, s.jsx)(h.A, { id: "settings.chatGpt.dataControls.delete", defaultMessage: "Delete all" }),
              }),
            })),
            (eq[90] = ey))
          : (ey = eq[90]),
        eq[91] !== to || eq[92] !== tl || eq[93] !== eF
          ? ((ex = to
              ? (0, s.jsx)(L.GC, {
                  entry: F.AW.exportData,
                  control: (0, s.jsx)(T.$, {
                    "aria-label": eF.formatMessage({
                      id: "settings.chatGpt.dataControls.export.ariaLabel",
                      defaultMessage: "Export ChatGPT account data",
                    }),
                    color: "secondary",
                    size: "toolbar",
                    onClick: () => tf(tl),
                    children: (0, s.jsx)(h.A, {
                      id: "settings.chatGpt.dataControls.export.button",
                      defaultMessage: "Export",
                    }),
                  }),
                })
              : null),
            (eq[91] = to),
            (eq[92] = tl),
            (eq[93] = eF),
            (eq[94] = ex))
          : (ex = eq[94]),
        eq[95] !== th || eq[96] !== tg || eq[97] !== eK
          ? ((eC = eK
              ? (0, s.jsx)(L.kk, {
                  edgeRounding: "surface",
                  entry: F.AW.ads,
                  onClick: () => {
                    let e = new URLSearchParams(th)
                    ;(e.set("view", "ads"), e.delete("adsView"), tg(e))
                  },
                  trailing: (0, s.jsx)(w.uM3, {}),
                })
              : null),
            (eq[95] = th),
            (eq[96] = tg),
            (eq[97] = eK),
            (eq[98] = eC))
          : (eC = eq[98]),
        eq[99] !== eF || eq[100] !== eV || eq[101] !== tT
          ? ((eT = eV
              ? (0, s.jsx)(L.kk, {
                  ariaLabel: eF.formatMessage({
                    id: "settings.chatGpt.marketingPrivacy.open.ariaLabel",
                    defaultMessage: "Open marketing privacy settings",
                  }),
                  edgeRounding: "surface",
                  entry: F.AW.marketing,
                  onClick: () => tT("marketing-privacy"),
                  trailing: (0, s.jsx)(w.uM3, {}),
                })
              : null),
            (eq[99] = eF),
            (eq[100] = eV),
            (eq[101] = tT),
            (eq[102] = eT))
          : (eT = eq[102]),
        eq[103] !== ea ||
        eq[104] !== es ||
        eq[105] !== ei ||
        eq[106] !== eo ||
        eq[107] !== eg ||
        eq[108] !== ex ||
        eq[109] !== eC ||
        eq[110] !== eT
          ? ((eO = (0, s.jsx)(R.X, {
              children: (0, s.jsx)(R.X.Content, {
                children: (0, s.jsxs)(H.t, {
                  children: [ea, es, ei, eo, el, ec, ed, eu, eg, null, ep, ef, ey, ex, eC, null, eT],
                }),
              }),
            })),
            (eq[103] = ea),
            (eq[104] = es),
            (eq[105] = ei),
            (eq[106] = eo),
            (eq[107] = eg),
            (eq[108] = ex),
            (eq[109] = eC),
            (eq[110] = eT),
            (eq[111] = eO))
          : (eO = eq[111]),
        eq[112] !== to || eq[113] !== tl || eq[114] !== tm || eq[115] !== td || eq[116] !== tu || eq[117] !== ez
          ? ((eN =
              to && (tm === tl || !0 === tu)
                ? (0, s.jsx)(
                    K,
                    {
                      open: !0,
                      onOpenChange: (e) => {
                        ;(e ? tf(tl) : tf((e) => (e === tl ? null : e)), e || ez.queryClient.setQueryData(td, !1))
                      },
                    },
                    tl,
                  )
                : null),
            (eq[112] = to),
            (eq[113] = tl),
            (eq[114] = tm),
            (eq[115] = td),
            (eq[116] = tu),
            (eq[117] = ez),
            (eq[118] = eN))
          : (eN = eq[118]))
      let tj = null != tx
      ;(eq[119] === Symbol.for("react.memo_cache_sentinel")
        ? ((eS = (e) => {
            e || tA(null)
          }),
          (eq[119] = eS))
        : (eS = eq[119]),
        eq[120] !== tx || eq[121] !== tC
          ? ((eG = (e) => {
              ;(e.preventDefault(), null != tx && tC.mutate(tx))
            }),
            (eq[120] = tx),
            (eq[121] = tC),
            (eq[122] = eG))
          : (eG = eq[122]),
        eq[123] !== tx
          ? ((eM = (0, s.jsx)(b.c7, {
              title: (0, s.jsx)(j.L3, {
                children:
                  "delete" === tx
                    ? (0, s.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.deleteConfirmTitle",
                        defaultMessage: "Delete all chats?",
                      })
                    : (0, s.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.archiveConfirmTitle",
                        defaultMessage: "Archive all chats?",
                      }),
              }),
            })),
            (eq[123] = tx),
            (eq[124] = eM))
          : (eM = eq[124]),
        eq[125] !== tx
          ? ((eP = (0, s.jsx)(j.rr, {
              asChild: !0,
              children: (0, s.jsx)("p", {
                className: "text-sm text-secondary",
                children:
                  "delete" === tx
                    ? (0, s.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.deleteConfirmDescription",
                        defaultMessage: "This action cannot be undone.",
                      })
                    : (0, s.jsx)(h.A, {
                        id: "settings.chatGpt.dataControls.archiveConfirmDescription",
                        defaultMessage: "You can manage archived chats from Data controls.",
                      }),
              }),
            })),
            (eq[125] = tx),
            (eq[126] = eP))
          : (eP = eq[126]),
        eq[127] === Symbol.for("react.memo_cache_sentinel")
          ? ((eE = (0, s.jsx)(T.$, {
              color: "secondary",
              type: "button",
              onClick: () => tA(null),
              children: (0, s.jsx)(h.A, { id: "common.cancel", defaultMessage: "Cancel" }),
            })),
            (eq[127] = eE))
          : (eE = eq[127]))
      let tb = "delete" === tx ? "danger" : "primary"
      return (
        eq[128] !== tx
          ? ((eL =
              "delete" === tx
                ? (0, s.jsx)(h.A, { id: "settings.chatGpt.dataControls.delete", defaultMessage: "Delete all" })
                : (0, s.jsx)(h.A, { id: "settings.chatGpt.dataControls.archive", defaultMessage: "Archive all" })),
            (eq[128] = tx),
            (eq[129] = eL))
          : (eL = eq[129]),
        eq[130] !== tC.isPending || eq[131] !== tb || eq[132] !== eL
          ? ((eR = (0, s.jsxs)(b.Es, {
              children: [eE, (0, s.jsx)(T.$, { color: tb, loading: tC.isPending, type: "submit", children: eL })],
            })),
            (eq[130] = tC.isPending),
            (eq[131] = tb),
            (eq[132] = eL),
            (eq[133] = eR))
          : (eR = eq[133]),
        eq[134] !== eG || eq[135] !== eM || eq[136] !== eP || eq[137] !== eR
          ? ((eD = (0, s.jsxs)(b.R4, { as: "form", onSubmit: eG, children: [eM, eP, eR] })),
            (eq[134] = eG),
            (eq[135] = eM),
            (eq[136] = eP),
            (eq[137] = eR),
            (eq[138] = eD))
          : (eD = eq[138]),
        eq[139] !== tj || eq[140] !== eD
          ? ((eU = (0, s.jsx)(j.lG, { open: tj, onOpenChange: eS, children: eD })),
            (eq[139] = tj),
            (eq[140] = eD),
            (eq[141] = eU))
          : (eU = eq[141]),
        eq[142] !== eO || eq[143] !== eN || eq[144] !== eU
          ? ((eH = (0, s.jsxs)(E.P, { overview: ee, title: et, children: [eO, null, eN, eU] })),
            (eq[142] = eO),
            (eq[143] = eN),
            (eq[144] = eU),
            (eq[145] = eH))
          : (eH = eq[145]),
        eH
      )
    }
    function ej(e) {
      return (0, s.jsx)(I.G, {
        href: "https://help.openai.com/en/articles/7730893-data-controls-in-chatgpt",
        initiator: "external_link",
        underline: "always",
        children: e,
      })
    }
    function eb(e) {
      return (0, s.jsx)("strong", { children: e })
    }
    function eI() {}
    function ew(e) {
      return "active" === e.state && e.grants.length > 0
    }
    ;((0, O._)(r.A2),
      (0, O._)(async function () {
        return (await a.e(585811).then(a.bind(a, "ZJ6t"))).ClaudeImportDialog
      }))
  },
  uvj6(e, t, a) {
    var s = a("S2r0"),
      n = a("qmMi"),
      r = a("DBCl"),
      i = a("Qgfj"),
      o = a("Kwur"),
      l = a("OWtl"),
      c = a("rvFo"),
      d = a("eShZ")
    let u = "/settings/daybreak_safety_training",
      h = {
        section: "data-controls",
        id: "data-controls-daybreak-safety-training",
        title: (0, i.zR)({
          id: "settings.chatGpt.dataControls.daybreakModelImprovement.title",
          defaultMessage: "Improve the model using Daybreak interactions",
        }),
      },
      g = (0, n.vU)(l.u, p)
    function p(e) {
      return (0, s.j)({
        queryKey: ["daybreak-safety-training", e.accountId, e.userId],
        staleTime: c.D.ONE_MINUTE,
        refetchOnMount: "always",
        retryOnMount: !0,
        refetchOnWindowFocus: !0,
        queryFn: async ({ signal: t }) => {
          try {
            return await o.Request.safeGet(u, { ...m(e), signal: t })
          } catch (e) {
            if (e instanceof d.FetchError && 404 === e.status) return null
            throw e
          }
        },
      })
    }
    function m(e) {
      return { expectedIdentity: e, additionalHeaders: { "ChatGPT-Account-ID": e.accountId, [r.zBc]: e.accountId } }
    }
    a.d(t, {}, { LX: m, cO: p, k5: h, nL: g, qk: u })
  },
  Sg0s(e, t, a) {
    var s = a("QdUF"),
      n = a("vysM"),
      r = a("F9GV")
    a.d(
      t,
      {},
      {
        W: async function ({ accountId: e, email: t, queryClient: a, userId: i }) {
          if (null == i || null == e) return !1
          let o = await (0, s.loadBrowserChatGptAuth)()
          if (o?.userId !== i || o.accountId !== e) return !1
          let l = await (0, s.refreshBrowserChatGptAuth)({
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
          let c = await (0, s.loadBrowserChatGptAuth)()
          return (
            c?.userId === i &&
            c.accountId === e &&
            ((0, r.d)(t), await a.invalidateQueries({ queryKey: (0, n.m)(e, i).queryKey }).catch(() => {}), !0)
          )
        },
      },
    )
  },
  PkPC(e, t, a) {
    var s = a("ABep"),
      n = a("QosV"),
      r = a("E2yB"),
      i = a("xSOA"),
      o = a("zd8w"),
      l = a("oyxz"),
      c = a("Kwur"),
      d = a("MM0V"),
      u = a("Sm6l"),
      h = a("JNtf"),
      g = a("mUDD"),
      p = a("zLIa"),
      m = a("GDNt"),
      f = a("Y8yr")
    a.d(
      t,
      {},
      {
        EmailDialog: function (e) {
          let t,
            a,
            _,
            y,
            x,
            A,
            C,
            v,
            k,
            T,
            j,
            b,
            I,
            w,
            O,
            N,
            S,
            G,
            M,
            P,
            E,
            L,
            R,
            D,
            U,
            H,
            q,
            z,
            F,
            W,
            Y = (0, n.c)(118),
            {
              operation: $,
              socialUser: Z,
              initialEmail: B,
              initialStep: K,
              initialError: Q,
              addEmailTitle: V,
              addEmailDescription: J,
              auth0ClientId: X,
              expectedIdentity: ee,
              onClose: et,
              onSuccess: ea,
              startChangeEmailReauth: es,
            } = e,
            [en, er] = (0, o.useState)(void 0 === B ? "" : B),
            [ei, eo] = (0, o.useState)(void 0 === K ? "email" : K),
            [el, ec] = (0, o.useState)(""),
            [ed, eu] = (0, o.useState)(Q ?? null),
            eh = (0, o.useId)()
          ;(Y[0] !== X || Y[1] !== ee || Y[2] !== $ || Y[3] !== Z || Y[4] !== es
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
                    return (await es(t), !1)
                  throw e
                }
                return !0
              }),
              (Y[0] = X),
              (Y[1] = ee),
              (Y[2] = $),
              (Y[3] = Z),
              (Y[4] = es),
              (Y[5] = t))
            : (t = Y[5]),
            Y[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (e, t) => {
                  e && (eu(null), t.resend || (er(t.email), ec(""), eo("otp")))
                }),
                (Y[6] = a))
              : (a = Y[6]),
            Y[7] !== $
              ? ((_ = (e, t) => {
                  "change" === $ && e instanceof m.fk && "sensitive_action_cooldown" === e.errorCode
                    ? eo("cooldown")
                    : eu((0, f.I)(e, t.resend ? "resend" : "begin", t.email))
                }),
                (Y[7] = $),
                (Y[8] = _))
              : (_ = Y[8]),
            Y[9] !== t || Y[10] !== _
              ? ((y = { mutationFn: t, onSuccess: a, onError: _ }), (Y[9] = t), (Y[10] = _), (Y[11] = y))
              : (y = Y[11]))
          let eg = (0, i.n)(y)
          ;(Y[12] !== el || Y[13] !== en || Y[14] !== ee || Y[15] !== ea || Y[16] !== $ || Y[17] !== Z
            ? ((x = async () => {
                ;(await c.Request.safePost(
                  "add" === $ ? "/accounts/add_email/verify" : "/accounts/change_email/verify",
                  {
                    requestBody: { email: en, code: el, remove_social_subs: ("change" === $ && !0 === Z) || void 0 },
                    expectedIdentity: ee,
                  },
                ),
                  await ea(en))
              }),
              (Y[12] = el),
              (Y[13] = en),
              (Y[14] = ee),
              (Y[15] = ea),
              (Y[16] = $),
              (Y[17] = Z),
              (Y[18] = x))
            : (x = Y[18]),
            Y[19] !== en || Y[20] !== $
              ? ((A = (e) => {
                  "change" === $ && e instanceof m.fk && "sensitive_action_cooldown" === e.errorCode
                    ? eo("cooldown")
                    : eu((0, f.I)(e, "verify", en))
                }),
                (Y[19] = en),
                (Y[20] = $),
                (Y[21] = A))
              : (A = Y[21]),
            Y[22] !== x || Y[23] !== A
              ? ((C = { mutationFn: x, onError: A }), (Y[22] = x), (Y[23] = A), (Y[24] = C))
              : (C = Y[24]))
          let ep = (0, i.n)(C),
            em = eg.isPending || ep.isPending
          if ("cooldown" === ei) {
            let e, t, a, n, r, i
            return (
              Y[25] !== et ? ((e = (e) => !e && et()), (Y[25] = et), (Y[26] = e)) : (e = Y[26]),
              Y[27] === Symbol.for("react.memo_cache_sentinel")
                ? ((t = (0, s.jsx)(g.OO, {
                    children: (0, s.jsx)(g.c7, {
                      title: (0, s.jsx)(h.L3, {
                        className: "select-none",
                        children: (0, s.jsx)(l.A, {
                          id: "settings.chatGpt.email.cooldown.title",
                          defaultMessage: "You can\u2019t change your email yet",
                        }),
                      }),
                    }),
                  })),
                  (Y[27] = t))
                : (t = Y[27]),
              Y[28] === Symbol.for("react.memo_cache_sentinel")
                ? ((a = (0, s.jsx)(g.OO, {
                    spacing: "large",
                    children: (0, s.jsx)(h.rr, {
                      children: (0, s.jsx)(l.A, {
                        id: "settings.chatGpt.email.cooldown.description",
                        defaultMessage:
                          "For your security, you\u2019ll need to wait 24 hours before changing your email. Your email address hasn\u2019t changed.",
                      }),
                    }),
                  })),
                  (Y[28] = a))
                : (a = Y[28]),
              Y[29] === Symbol.for("react.memo_cache_sentinel")
                ? ((n = (0, s.jsx)(l.A, {
                    id: "settings.chatGpt.email.cooldown.home",
                    defaultMessage: "Go to ChatGPT",
                  })),
                  (Y[29] = n))
                : (n = Y[29]),
              Y[30] !== et
                ? ((r = (0, s.jsxs)(g.R4, {
                    children: [
                      t,
                      a,
                      (0, s.jsx)(g.OO, {
                        spacing: "large",
                        children: (0, s.jsx)(g.Es, {
                          children: (0, s.jsx)(u.z, { color: "secondary", to: "/", onClick: et, children: n }),
                        }),
                      }),
                    ],
                  })),
                  (Y[30] = et),
                  (Y[31] = r))
                : (r = Y[31]),
              Y[32] !== e || Y[33] !== r
                ? ((i = (0, s.jsx)(h.lG, { open: !0, onOpenChange: e, children: r })),
                  (Y[32] = e),
                  (Y[33] = r),
                  (Y[34] = i))
                : (i = Y[34]),
              i
            )
          }
          ;(Y[35] !== et ? ((v = (e) => !e && et()), (Y[35] = et), (Y[36] = v)) : (v = Y[36]),
            Y[37] !== el || Y[38] !== en || Y[39] !== em || Y[40] !== eg || Y[41] !== ei || Y[42] !== ep
              ? ((k = (e) => {
                  if ((e.preventDefault(), em)) return
                  if ((eu(null), "otp" === ei)) {
                    ;/^[0-9]{6}$/.test(el) && ep.mutate()
                    return
                  }
                  let t = en.trim()
                  "" === t
                    ? eu(
                        (0, s.jsx)(l.A, {
                          id: "settings.chatGpt.email.error.emptyEmail",
                          defaultMessage: "Please enter a valid email address to continue",
                        }),
                      )
                    : r.WL.test(t)
                      ? eg.mutate({ email: t, resend: !1 })
                      : eu(
                          (0, s.jsx)(l.A, {
                            id: "settings.chatGpt.email.error.invalidEmail",
                            defaultMessage: 'The email address "{email}" is not formatted correctly',
                            values: { email: t },
                          }),
                        )
                }),
                (Y[37] = el),
                (Y[38] = en),
                (Y[39] = em),
                (Y[40] = eg),
                (Y[41] = ei),
                (Y[42] = ep),
                (Y[43] = k))
              : (k = Y[43]),
            Y[44] !== ei
              ? ((T =
                  "otp" === ei
                    ? (0, s.jsx)(l.A, {
                        id: "settings.chatGpt.email.verify.confirmEmailTitle",
                        defaultMessage: "Verify email",
                      })
                    : null),
                (Y[44] = ei),
                (Y[45] = T))
              : (T = Y[45]),
            Y[46] !== V || Y[47] !== $ || Y[48] !== ei
              ? ((j =
                  "email" === ei &&
                  ("add" === $
                    ? (V ??
                      (0, s.jsx)(l.A, { id: "settings.chatGpt.email.add.title", defaultMessage: "Add your email" }))
                    : (0, s.jsx)(l.A, { id: "settings.chatGpt.email.change.title", defaultMessage: "Edit email" }))),
                (Y[46] = V),
                (Y[47] = $),
                (Y[48] = ei),
                (Y[49] = j))
              : (j = Y[49]),
            Y[50] !== T || Y[51] !== j
              ? ((b = (0, s.jsx)(g.OO, {
                  children: (0, s.jsx)(g.c7, {
                    title: (0, s.jsxs)(h.L3, { className: "select-none", children: [T, j] }),
                  }),
                })),
                (Y[50] = T),
                (Y[51] = j),
                (Y[52] = b))
              : (b = Y[52]),
            Y[53] !== en || Y[54] !== ei
              ? ((I =
                  "otp" === ei
                    ? (0, s.jsx)(l.A, {
                        id: "settings.chatGpt.email.verify.instruction",
                        defaultMessage: "Enter the 6-digit code we just sent to {email} to verify your email",
                        values: { email: en },
                      })
                    : null),
                (Y[53] = en),
                (Y[54] = ei),
                (Y[55] = I))
              : (I = Y[55]),
            Y[56] !== J || Y[57] !== $ || Y[58] !== ei
              ? ((w =
                  "email" === ei &&
                  ("add" === $
                    ? (J ??
                      (0, s.jsx)(l.A, {
                        id: "settings.chatGpt.email.add.instruction",
                        defaultMessage: "Enter your email address. We\u2019ll send a verification code to confirm it.",
                      }))
                    : (0, s.jsx)(l.A, {
                        id: "settings.chatGpt.email.change.instruction",
                        defaultMessage:
                          "Enter your new email address. We\u2019ll send a verification code to confirm the change.",
                      }))),
                (Y[56] = J),
                (Y[57] = $),
                (Y[58] = ei),
                (Y[59] = w))
              : (w = Y[59]),
            Y[60] !== I || Y[61] !== w
              ? ((O = (0, s.jsxs)(h.rr, { className: "text-sm text-secondary select-text", children: [I, w] })),
                (Y[60] = I),
                (Y[61] = w),
                (Y[62] = O))
              : (O = Y[62]),
            Y[63] !== $ || Y[64] !== ei
              ? ((N =
                  "otp" === ei && "change" === $
                    ? (0, s.jsx)(d.l, {
                        type: "warning",
                        content: (0, s.jsx)(l.A, {
                          id: "settings.chatGpt.email.verify.logoutWarning",
                          defaultMessage:
                            "Verifying this email will sign you out on all devices so we can finish updating your account. You'll need to sign back in afterward.",
                        }),
                      })
                    : null),
                (Y[63] = $),
                (Y[64] = ei),
                (Y[65] = N))
              : (N = Y[65]),
            Y[66] !== ei
              ? ((S = (0, s.jsx)("span", {
                  className: "select-none",
                  children:
                    "otp" === ei
                      ? (0, s.jsx)(l.A, {
                          id: "settings.chatGpt.email.verify.codeLabel",
                          defaultMessage: "Verification code",
                        })
                      : (0, s.jsx)(l.A, { id: "settings.chatGpt.email.addressLabel", defaultMessage: "Email address" }),
                })),
                (Y[66] = ei),
                (Y[67] = S))
              : (S = Y[67]),
            Y[68] !== el || Y[69] !== en || Y[70] !== ed || Y[71] !== eh || Y[72] !== em || Y[73] !== ei
              ? ((G =
                  "otp" === ei
                    ? (0, s.jsx)(
                        p.pd,
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
                    : (0, s.jsx)(
                        p.pd,
                        {
                          name: "email",
                          type: "email",
                          autoComplete: "email",
                          autoFocus: !0,
                          value: en,
                          onChange: (e) => {
                            ;(er(e.target.value), eu(null))
                          },
                          disabled: em,
                          "aria-invalid": null != ed,
                          "aria-describedby": null != ed ? eh : void 0,
                        },
                        "email",
                      )),
                (Y[68] = el),
                (Y[69] = en),
                (Y[70] = ed),
                (Y[71] = eh),
                (Y[72] = em),
                (Y[73] = ei),
                (Y[74] = G))
              : (G = Y[74]),
            Y[75] !== S || Y[76] !== G
              ? ((M = (0, s.jsxs)("label", { className: "flex flex-col gap-2 text-sm", children: [S, G] })),
                (Y[75] = S),
                (Y[76] = G),
                (Y[77] = M))
              : (M = Y[77]),
            Y[78] !== ed || Y[79] !== eh
              ? ((P =
                  null != ed
                    ? (0, s.jsx)("div", { id: eh, role: "alert", className: "text-sm text-danger", children: ed })
                    : null),
                (Y[78] = ed),
                (Y[79] = eh),
                (Y[80] = P))
              : (P = Y[80]),
            Y[81] !== en || Y[82] !== em || Y[83] !== eg || Y[84] !== ei
              ? ((E =
                  "otp" === ei
                    ? (0, s.jsxs)("div", {
                        className: "flex items-center gap-2 text-sm select-none",
                        children: [
                          (0, s.jsx)(l.A, {
                            id: "settings.chatGpt.email.verify.resendPrompt",
                            defaultMessage: "Didn't get an email?",
                          }),
                          (0, s.jsx)(u.$, {
                            color: "ghost",
                            size: "toolbar",
                            type: "button",
                            disabled: em,
                            loading: eg.isPending,
                            onClick: () => eg.mutate({ email: en, resend: !0 }),
                            children: (0, s.jsx)(l.A, {
                              id: "settings.chatGpt.email.verify.resend",
                              defaultMessage: "Send again",
                            }),
                          }),
                        ],
                      })
                    : null),
                (Y[81] = en),
                (Y[82] = em),
                (Y[83] = eg),
                (Y[84] = ei),
                (Y[85] = E))
              : (E = Y[85]),
            Y[86] !== O || Y[87] !== N || Y[88] !== M || Y[89] !== P || Y[90] !== E
              ? ((L = (0, s.jsxs)(g.OO, { className: "gap-4", spacing: "large", children: [O, N, M, P, E] })),
                (Y[86] = O),
                (Y[87] = N),
                (Y[88] = M),
                (Y[89] = P),
                (Y[90] = E),
                (Y[91] = L))
              : (L = Y[91]),
            Y[92] !== et || Y[93] !== ei
              ? ((R = () => {
                  "otp" === ei ? (eo("email"), ec(""), eu(null)) : et()
                }),
                (Y[92] = et),
                (Y[93] = ei),
                (Y[94] = R))
              : (R = Y[94]),
            Y[95] !== ei
              ? ((D =
                  "otp" === ei
                    ? (0, s.jsx)(l.A, { id: "settings.chatGpt.email.verify.back", defaultMessage: "Back" })
                    : (0, s.jsx)(l.A, { id: "settings.chatGpt.email.cancel", defaultMessage: "Cancel" })),
                (Y[95] = ei),
                (Y[96] = D))
              : (D = Y[96]),
            Y[97] !== em || Y[98] !== R || Y[99] !== D
              ? ((U = (0, s.jsx)(u.$, { color: "secondary", type: "button", disabled: em, onClick: R, children: D })),
                (Y[97] = em),
                (Y[98] = R),
                (Y[99] = D),
                (Y[100] = U))
              : (U = Y[100]))
          let ef = "otp" === ei ? ep.isPending : eg.isPending,
            e_ = em || ("otp" === ei && 6 !== el.length)
          return (
            Y[101] !== ei
              ? ((H =
                  "otp" === ei
                    ? (0, s.jsx)(l.A, { id: "settings.chatGpt.email.verify.submit", defaultMessage: "Verify" })
                    : (0, s.jsx)(l.A, {
                        id: "settings.chatGpt.email.send",
                        defaultMessage: "Send verification email",
                      })),
                (Y[101] = ei),
                (Y[102] = H))
              : (H = Y[102]),
            Y[103] !== ef || Y[104] !== e_ || Y[105] !== H
              ? ((q = (0, s.jsx)(u.$, { type: "submit", color: "primary", loading: ef, disabled: e_, children: H })),
                (Y[103] = ef),
                (Y[104] = e_),
                (Y[105] = H),
                (Y[106] = q))
              : (q = Y[106]),
            Y[107] !== U || Y[108] !== q
              ? ((z = (0, s.jsx)(g.OO, { spacing: "large", children: (0, s.jsxs)(g.Es, { children: [U, q] }) })),
                (Y[107] = U),
                (Y[108] = q),
                (Y[109] = z))
              : (z = Y[109]),
            Y[110] !== k || Y[111] !== b || Y[112] !== L || Y[113] !== z
              ? ((F = (0, s.jsxs)(g.R4, { as: "form", noValidate: !0, onSubmit: k, children: [b, L, z] })),
                (Y[110] = k),
                (Y[111] = b),
                (Y[112] = L),
                (Y[113] = z),
                (Y[114] = F))
              : (F = Y[114]),
            Y[115] !== v || Y[116] !== F
              ? ((W = (0, s.jsx)(h.lG, { open: !0, onOpenChange: v, children: F })),
                (Y[115] = v),
                (Y[116] = F),
                (Y[117] = W))
              : (W = Y[117]),
            W
          )
        },
      },
    )
  },
  Y8yr(e, t, a) {
    var s = a("ABep"),
      n = a("oyxz"),
      r = a("ASxG"),
      i = a("ZtSy"),
      o = a("GDNt")
    let l = r.Ikc({ detail: r.euz("Email already linked to another account") })
    a.d(
      t,
      {},
      {
        I: function (e, t, a) {
          if (e instanceof o.fk) {
            switch (e.errorCode) {
              case "email_change_account_too_new":
                return (0, s.jsx)(n.A, {
                  id: "settings.chatGpt.email.error.accountTooNew",
                  defaultMessage:
                    "You can change your email address 24 hours after creating your account. Please try again later.",
                })
              case "email_change_rate_limited":
                if ("resend" === t) break
                return (0, s.jsx)(n.A, {
                  id: "settings.chatGpt.email.error.dailyLimit",
                  defaultMessage: "You can only change your email twice within 24 hours. Please try again later.",
                })
              case "email_change_limit_reached":
                if ("resend" === t) break
                return (0, s.jsx)(n.A, {
                  id: "settings.chatGpt.email.error.lifetimeLimit",
                  defaultMessage: "You\u2019ve reached the 20-email-change limit for this account",
                })
            }
            if (429 === e.status)
              return (0, s.jsx)(n.A, {
                id: "settings.chatGpt.email.error.rateLimited",
                defaultMessage:
                  "You\u2019ve sent too many requests. Please try again later. For help, start a chat in the <helpCenterLink>Help Center</helpCenterLink>.",
                values: {
                  helpCenterLink: (e) =>
                    (0, s.jsx)(i.G, {
                      href: "https://help.openai.com/en/articles/6614161-how-can-i-contact-support",
                      initiator: "open_in_browser_bridge",
                      openTarget: "external-browser",
                      children: e,
                    }),
                },
              })
            if ("verify" === t && (401 === e.status || 422 === e.status))
              return (0, s.jsx)(n.A, {
                id: "settings.chatGpt.email.error.invalidCode",
                defaultMessage: "The code you entered is invalid. Please try again.",
              })
            if (403 === e.status) {
              if ("begin" !== t)
                return (0, s.jsx)(n.A, {
                  id: "settings.chatGpt.email.error.alreadyLinked",
                  defaultMessage: '"{email}" is already linked to another account',
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
                return (0, s.jsx)(n.A, {
                  id: "settings.chatGpt.email.error.chooseAnotherEmail",
                  defaultMessage:
                    "This email address is already linked to another account. Please choose a different email address.",
                })
            }
          }
          return "resend" === t
            ? (0, s.jsx)(n.A, {
                id: "settings.chatGpt.email.error.sendFailed",
                defaultMessage: "Could not send email verification code, please try again later",
              })
            : (0, s.jsx)(n.A, {
                id: "settings.chatGpt.email.error.generic",
                defaultMessage: "Something went wrong, please try again later",
              })
        },
      },
    )
  },
  F9GV(e, t, a) {
    var s = a("y3LV"),
      n = a("ASxG")
    let r = n._H3({
      isOptedOut: n.zMY(),
      user: n.KCZ([n._H3({ email: n.YjP() }), n._H3({ phoneNumber: n.YjP() })]).optional(),
    })
    a.d(
      t,
      {},
      {
        d: function (e) {
          try {
            let t = (0, s.getCookie)("oai-client-auth-info")
            if ("string" != typeof t) return
            let a = r.parse(JSON.parse(t))
            if (a.isOptedOut || null == a.user || a.user.email === e) return
            ;(0, s.setCookie)(
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
    var s = a("ASxG"),
      n = a("Kwur")
    s.Ikc({ recommended_factors: s.YOg(s.euz("sms")) })
    let r = s.Ikc({
      decision_id: s
        .YjP()
        .optional()
        .catch(void 0),
      policy_version: s
        .YjP()
        .optional()
        .catch(void 0),
      recommendations: s.YOg(s.Ikc({ id: s.YjP().min(1) })).max(3),
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
              let s = await n.Request.safeGet("/accounts/security/recommendations", {
                additionalHeaders: { "ChatGPT-Account-ID": e },
                expectedIdentity: { accountId: e, userId: t },
                signal: a,
                retry: !1,
              })
              return r.parse(s)
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
    var s = a("ABep"),
      n = a("QosV"),
      r = a("irkb"),
      i = a("T0Rc"),
      o = a("uris"),
      l = a("cE8H"),
      c = a("xSOA"),
      d = a("qmMi"),
      u = a("DBCl"),
      h = a("zd8w"),
      g = a("Wf1j"),
      p = a("oyxz"),
      m = a("Qgfj"),
      f = a("SPnB"),
      _ = a("Kwur"),
      y = a("jEN2"),
      x = a("Sm6l"),
      A = a("JNtf"),
      C = a("mUDD"),
      v = a("ZtSy"),
      k = a("bVeK"),
      T = a("wZQ4"),
      j = a("RNul"),
      b = a("SGsN"),
      I = a("OWtl"),
      w = a("rvFo")
    let O = new URL(u.WaA).origin
    function N(e) {
      let t,
        a,
        u,
        m,
        f,
        _,
        y,
        v,
        k,
        j,
        N,
        U,
        q,
        z,
        F,
        W,
        Y,
        $,
        Z,
        B,
        K,
        Q,
        V,
        J,
        X,
        ee,
        et,
        ea,
        es,
        en,
        er,
        ei,
        eo,
        el,
        ec,
        ed,
        eu,
        eh,
        eg,
        ep = (0, n.c)(121),
        { accountId: em, open: ef, onCloseAutoFocus: e_, onOpenChange: ey, triggerContent: ex } = e,
        eA = (0, d.gh)(I.u),
        eC = (0, g.A)(),
        ev = (0, r.jE)(),
        [ek, eT] = (0, h.useState)(!1),
        ej = (0, h.useRef)(null)
      ep[0] !== em ? ((t = ["chatgpt-shared-links", em]), (ep[0] = em), (ep[1] = t)) : (t = ep[1])
      let eb = t
      ;(ep[2] !== eb ? ((a = [...eb, "conversations"]), (ep[2] = eb), (ep[3] = a)) : (a = ep[3]),
        ep[4] !== ef || ep[5] !== a
          ? ((u = { enabled: ef, queryKey: a, queryFn: R, staleTime: w.D.ONE_MINUTE }),
            (ep[4] = ef),
            (ep[5] = a),
            (ep[6] = u))
          : (u = ep[6]))
      let eI = (0, i.I)(u)
      ;(ep[7] !== eb ? ((m = [...eb, "textdocs"]), (ep[7] = eb), (ep[8] = m)) : (m = ep[8]),
        ep[9] !== ef || ep[10] !== m
          ? ((f = { enabled: ef, queryKey: m, queryFn: L, staleTime: w.D.ONE_MINUTE }),
            (ep[9] = ef),
            (ep[10] = m),
            (ep[11] = f))
          : (f = ep[11]))
      let ew = (0, i.I)(f),
        eO = (0, h.useRef)(null)
      ;(ep[12] !== eb ? ((_ = [...eb, "posts"]), (ep[12] = eb), (ep[13] = _)) : (_ = ep[13]),
        ep[14] !== ef || ep[15] !== _
          ? ((y = {
              enabled: ef,
              queryKey: _,
              initialPageParam: void 0,
              queryFn: E,
              getNextPageParam: P,
              staleTime: w.D.ONE_MINUTE,
            }),
            (ep[14] = ef),
            (ep[15] = _),
            (ep[16] = y))
          : (y = ep[16]))
      let eN = (0, o.q)(y)
      ep[17] !== eb ? ((v = [...eb, "delete-all"]), (ep[17] = eb), (ep[18] = v)) : (v = ep[18])
      let eS = v
      ep[19] !== eS ? ((k = { mutationKey: eS, exact: !0 }), (ep[19] = eS), (ep[20] = k)) : (k = ep[20])
      let eG = (0, l.l)(k) > 0
      ;(ep[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((j = () => {
            eT(!1)
          }),
          (ep[21] = j))
        : (j = ep[21]),
        ep[22] !== eC || ep[23] !== eA
          ? ((N = () => {
              eA.get(b.Id).danger(
                eC.formatMessage({
                  id: "settings.chatGpt.sharedLinks.deleteAllError",
                  defaultMessage: "Could not delete shared links",
                }),
                { errorAnalytics: { toastId: "delete_all_shared_links_failed" } },
              )
            }),
            (ep[22] = eC),
            (ep[23] = eA),
            (ep[24] = N))
          : (N = ep[24]),
        ep[25] !== ev || ep[26] !== eb
          ? ((U = () => ev.invalidateQueries({ queryKey: eb })), (ep[25] = ev), (ep[26] = eb), (ep[27] = U))
          : (U = ep[27]),
        ep[28] !== eS || ep[29] !== N || ep[30] !== U
          ? ((q = { mutationKey: eS, mutationFn: H, onSuccess: j, onError: N, onSettled: U }),
            (ep[28] = eS),
            (ep[29] = N),
            (ep[30] = U),
            (ep[31] = q))
          : (q = ep[31]))
      let { mutate: eM } = (0, c.n)(q)
      if (ep[32] !== em || ep[33] !== ef || ep[34] !== eI || ep[35] !== eN || ep[36] !== ew) {
        let e,
          t,
          a = eN.data?.pages.flatMap(M) ?? [],
          n = eN.hasNextPage ? a.reduce(G, 1 / 0) : -1 / 0
        if (
          (ep[41] !== eI.data?.items
            ? ((e = eI.data?.items ?? []), (ep[41] = eI.data?.items), (ep[42] = e))
            : (e = ep[42]),
          ep[43] !== ew.data?.shared_textdocs
            ? ((t = ew.data?.shared_textdocs ?? []), (ep[43] = ew.data?.shared_textdocs), (ep[44] = t))
            : (t = ep[44]),
          (Y = (function ({ conversations: e, posts: t, textdocs: a }) {
            return [
              ...e.map((e) => ({
                href: `${O}/share/${null == e.workspace_id ? "" : "e/"}${encodeURIComponent(e.id)}`,
                id: e.id,
                kind: "conversation",
                sharedAt: null == e.create_time ? 0 : Date.parse(e.create_time),
                title: e.title ?? null,
                type: "chat",
              })),
              ...a.map((e) => ({
                href: `${O}/canvas/shared/${encodeURIComponent(e.shared_textdoc_id)}`,
                id: e.shared_textdoc_id,
                kind: "textdoc",
                sharedAt: Date.parse(e.created_at),
                title: e.name,
                type: "canvas",
              })),
              ...t.map((e) => {
                var t
                return {
                  href: e.permalink ?? `${O}/s/${encodeURIComponent(e.id)}`,
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
          })({ conversations: e, posts: a, textdocs: t }).filter((e) => e.sharedAt >= n)),
          (W = eI.isLoading || ew.isLoading || eN.isLoading),
          (F = eI.isError || ew.isError || (eN.isError && !eN.isFetchNextPageError)),
          W)
        ) {
          let e
          ;(ep[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("p", {
                className: "py-8 text-center text-sm text-secondary",
                role: "status",
                children: (0, s.jsx)(p.A, {
                  id: "settings.chatGpt.sharedLinks.loading",
                  defaultMessage: "Loading shared links\u2026",
                }),
              })),
              (ep[45] = e))
            : (e = ep[45]),
            (z = e))
        } else if (F) {
          let e, t, a, n
          ;(ep[46] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("p", {
                className: "text-sm text-secondary",
                role: "alert",
                children: (0, s.jsx)(p.A, {
                  id: "settings.chatGpt.sharedLinks.loadError",
                  defaultMessage: "Could not load shared links",
                }),
              })),
              (ep[46] = e))
            : (e = ep[46]),
            ep[47] !== eI || ep[48] !== eN || ep[49] !== ew
              ? ((t = () => {
                  Promise.all([eI.refetch(), ew.refetch(), eN.refetch()])
                }),
                (ep[47] = eI),
                (ep[48] = eN),
                (ep[49] = ew),
                (ep[50] = t))
              : (t = ep[50]),
            ep[51] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, s.jsx)(p.A, { id: "common.retry", defaultMessage: "Retry" })), (ep[51] = a))
              : (a = ep[51]),
            ep[52] !== t
              ? ((n = (0, s.jsxs)("div", {
                  className: "flex flex-col items-center gap-3 py-8 text-center",
                  children: [e, (0, s.jsx)(x.$, { color: "secondary", onClick: t, children: a })],
                })),
                (ep[52] = t),
                (ep[53] = n))
              : (n = ep[53]),
            (z = n))
        } else if (0 !== Y.length || eN.hasNextPage) {
          let e, t, a, n, r, i, o, l
          ;(ep[55] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("th", {
                className: "px-3 py-2 text-start font-medium",
                scope: "col",
                children: (0, s.jsx)(p.A, { id: "settings.chatGpt.sharedLinks.name", defaultMessage: "Name" }),
              })),
              (ep[55] = e))
            : (e = ep[55]),
            ep[56] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, s.jsx)("th", {
                  className: "px-3 py-2 text-start font-medium",
                  scope: "col",
                  children: (0, s.jsx)(p.A, { id: "settings.chatGpt.sharedLinks.type", defaultMessage: "Type" }),
                })),
                (ep[56] = t))
              : (t = ep[56]),
            ep[57] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, s.jsx)("th", {
                  className: "px-3 py-2 text-start font-medium",
                  scope: "col",
                  children: (0, s.jsx)(p.A, {
                    id: "settings.chatGpt.sharedLinks.dateShared",
                    defaultMessage: "Date shared",
                  }),
                })),
                (ep[57] = a))
              : (a = ep[57]),
            ep[58] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, s.jsx)("thead", {
                  className:
                    "sticky top-0 border-b border-default bg-surface text-codex-description select-none max-sm:sr-only",
                  children: (0, s.jsxs)("tr", {
                    children: [
                      e,
                      t,
                      a,
                      (0, s.jsx)("th", {
                        className: "w-px px-3 py-2",
                        scope: "col",
                        children: (0, s.jsx)("span", {
                          className: "sr-only",
                          children: (0, s.jsx)(p.A, {
                            id: "settings.chatGpt.sharedLinks.actions",
                            defaultMessage: "Actions",
                          }),
                        }),
                      }),
                    ],
                  }),
                })),
                (ep[58] = n))
              : (n = ep[58]),
            ep[59] !== em
              ? ((r = (e) => (0, s.jsx)(D, { accountId: em, sharedLink: e }, `${em}:${e.kind}:${e.id}`)),
                (ep[59] = em),
                (ep[60] = r))
              : (r = ep[60]))
          let c = (0, s.jsx)("tbody", { className: "max-sm:block", children: Y.map(r) })
          ;(ep[61] !== c
            ? ((i = (0, s.jsxs)("table", {
                className: "w-full border-collapse text-start text-sm max-sm:block",
                children: [n, c],
              })),
              (ep[61] = c),
              (ep[62] = i))
            : (i = ep[62]),
            ep[63] !== ef || ep[64] !== eN
              ? ((o = eN.isFetchNextPageError
                  ? (0, s.jsx)(x.$, {
                      color: "secondary",
                      onClick: () => void eN.fetchNextPage(),
                      children: (0, s.jsx)(p.A, { id: "common.retry", defaultMessage: "Retry" }),
                    })
                  : (0, s.jsx)(T.D, {
                      hasNextPage: ef && eN.hasNextPage,
                      isFetchingNextPage: eN.isFetchingNextPage,
                      onLoadNextPage: () => void eN.fetchNextPage({ cancelRefetch: !1 }),
                      rootRef: eO,
                    })),
                (ep[63] = ef),
                (ep[64] = eN),
                (ep[65] = o))
              : (o = ep[65]),
            ep[66] !== i || ep[67] !== o
              ? ((l = (0, s.jsxs)("div", {
                  ref: eO,
                  className: "min-h-0 overflow-auto rounded-xl border border-default",
                  children: [i, o],
                })),
                (ep[66] = i),
                (ep[67] = o),
                (ep[68] = l))
              : (l = ep[68]),
            (z = l))
        } else {
          let e
          ;(ep[54] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)("p", {
                className: "py-8 text-center text-sm text-secondary",
                children: (0, s.jsx)(p.A, {
                  id: "settings.chatGpt.sharedLinks.empty",
                  defaultMessage: "You have no shared links",
                }),
              })),
              (ep[54] = e))
            : (e = ep[54]),
            (z = e))
        }
        ;((ep[32] = em),
          (ep[33] = ef),
          (ep[34] = eI),
          (ep[35] = eN),
          (ep[36] = ew),
          (ep[37] = z),
          (ep[38] = F),
          (ep[39] = W),
          (ep[40] = Y))
      } else ((z = ep[37]), (F = ep[38]), (W = ep[39]), (Y = ep[40]))
      ;(ep[69] !== e_ ? (($ = { onCloseAutoFocus: e_ }), (ep[69] = e_), (ep[70] = $)) : ($ = ep[70]),
        ep[71] !== eG || ep[72] !== ey
          ? ((Z = (e) => {
              eG || (e || eT(!1), ey(e))
            }),
            (ep[71] = eG),
            (ep[72] = ey),
            (ep[73] = Z))
          : (Z = ep[73]),
        ep[74] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, s.jsx)(A.L3, {
              children: (0, s.jsx)(p.A, { id: "settings.chatGpt.sharedLinks.title", defaultMessage: "Shared links" }),
            })),
            (ep[74] = B))
          : (B = ep[74]),
        ep[75] === Symbol.for("react.memo_cache_sentinel")
          ? ((K = (0, s.jsx)(C.c7, {
              className: "px-5 pt-5",
              title: B,
              subtitle: (0, s.jsx)(A.rr, {
                children: (0, s.jsx)(p.A, {
                  id: "settings.chatGpt.sharedLinks.description",
                  defaultMessage:
                    "Anyone with a shared link can view the shared image, message, chat, or scheduled task. Deleting a shared link stops others from viewing that shared content. It does not delete your original content. <link>Learn more</link>",
                  values: { link: S },
                }),
              }),
            })),
            (ep[75] = K))
          : (K = ep[75]),
        ep[76] !== z
          ? ((Q = (0, s.jsx)("div", { className: "flex min-h-0 flex-1 flex-col px-5", children: z })),
            (ep[76] = z),
            (ep[77] = Q))
          : (Q = ep[77]),
        ep[78] !== eG || ep[79] !== F || ep[80] !== W || ep[81] !== Y
          ? ((V =
              W || F || !(Y.length > 0)
                ? null
                : (0, s.jsx)(C.Es, {
                    className: "px-5 pb-5",
                    expandSingleButton: !1,
                    children: (0, s.jsx)(x.$, {
                      ref: ej,
                      color: "danger",
                      disabled: eG,
                      onClick: () => eT(!0),
                      children: (0, s.jsx)(p.A, {
                        id: "settings.chatGpt.sharedLinks.deleteAll",
                        defaultMessage: "Delete all shared links",
                      }),
                    }),
                  })),
            (ep[78] = eG),
            (ep[79] = F),
            (ep[80] = W),
            (ep[81] = Y),
            (ep[82] = V))
          : (V = ep[82]),
        ep[83] !== Q || ep[84] !== V
          ? ((J = (0, s.jsxs)(C.R4, { className: "gap-4", size: "full", variant: "chatgpt", children: [K, Q, V] })),
            (ep[83] = Q),
            (ep[84] = V),
            (ep[85] = J))
          : (J = ep[85]),
        ep[86] !== ef || ep[87] !== $ || ep[88] !== Z || ep[89] !== J || ep[90] !== ex
          ? ((X = (0, s.jsx)(A.lG, {
              open: ef,
              triggerContent: ex,
              contentProps: $,
              onOpenChange: Z,
              size: "xwideTall",
              variant: "chatgpt",
              children: J,
            })),
            (ep[86] = ef),
            (ep[87] = $),
            (ep[88] = Z),
            (ep[89] = J),
            (ep[90] = ex),
            (ep[91] = X))
          : (X = ep[91]))
      let eP = ef && (ek || eG)
      ep[92] !== eG
        ? ((ee = (e) => {
            eG || eT(e)
          }),
          (ep[92] = eG),
          (ep[93] = ee))
        : (ee = ep[93])
      let eE = !eG
      return (
        ep[94] === Symbol.for("react.memo_cache_sentinel")
          ? ((et = {
              onCloseAutoFocus: (e) => {
                ;(e.preventDefault(), document.activeElement === document.body && ej.current?.focus())
              },
            }),
            (ep[94] = et))
          : (et = ep[94]),
        ep[95] !== eM || ep[96] !== eG
          ? ((ea = (e) => {
              ;(e.preventDefault(), eG || (e.currentTarget.closest('[role="dialog"]')?.focus(), eM()))
            }),
            (ep[95] = eM),
            (ep[96] = eG),
            (ep[97] = ea))
          : (ea = ep[97]),
        ep[98] === Symbol.for("react.memo_cache_sentinel")
          ? ((es = (0, s.jsx)(C.c7, {
              title: (0, s.jsx)(A.L3, {
                children: (0, s.jsx)(p.A, {
                  id: "settings.chatGpt.sharedLinks.deleteAllConfirmTitle",
                  defaultMessage: "Delete all shared links?",
                }),
              }),
            })),
            (ep[98] = es))
          : (es = ep[98]),
        ep[99] === Symbol.for("react.memo_cache_sentinel")
          ? ((en = (0, s.jsx)(A.rr, {
              asChild: !0,
              children: (0, s.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, s.jsx)(p.A, {
                  id: "settings.chatGpt.sharedLinks.deleteAllConfirmDescription",
                  defaultMessage:
                    "People with these links will no longer be able to view the shared content. Your original content will not be deleted.",
                }),
              }),
            })),
            (ep[99] = en))
          : (en = ep[99]),
        ep[100] === Symbol.for("react.memo_cache_sentinel")
          ? ((er = () => eT(!1)),
            (ei = (0, s.jsx)(p.A, { id: "common.cancel", defaultMessage: "Cancel" })),
            (ep[100] = er),
            (ep[101] = ei))
          : ((er = ep[100]), (ei = ep[101])),
        ep[102] !== eG
          ? ((eo = (0, s.jsx)(x.$, { color: "secondary", disabled: eG, type: "button", onClick: er, children: ei })),
            (ep[102] = eG),
            (ep[103] = eo))
          : (eo = ep[103]),
        ep[104] === Symbol.for("react.memo_cache_sentinel")
          ? ((el = (0, s.jsx)(p.A, {
              id: "settings.chatGpt.sharedLinks.deleteAllConfirm",
              defaultMessage: "Delete all",
            })),
            (ep[104] = el))
          : (el = ep[104]),
        ep[105] !== eG
          ? ((ec = (0, s.jsx)(x.$, { color: "dangerSolid", loading: eG, type: "submit", children: el })),
            (ep[105] = eG),
            (ep[106] = ec))
          : (ec = ep[106]),
        ep[107] !== eo || ep[108] !== ec
          ? ((ed = (0, s.jsxs)(C.Es, { children: [eo, ec] })), (ep[107] = eo), (ep[108] = ec), (ep[109] = ed))
          : (ed = ep[109]),
        ep[110] !== ea || ep[111] !== ed
          ? ((eu = (0, s.jsxs)(C.R4, { as: "form", onSubmit: ea, children: [es, en, ed] })),
            (ep[110] = ea),
            (ep[111] = ed),
            (ep[112] = eu))
          : (eu = ep[112]),
        ep[113] !== eP || ep[114] !== ee || ep[115] !== eE || ep[116] !== eu
          ? ((eh = (0, s.jsx)(A.lG, {
              open: eP,
              onOpenChange: ee,
              showDialogClose: eE,
              contentProps: et,
              children: eu,
            })),
            (ep[113] = eP),
            (ep[114] = ee),
            (ep[115] = eE),
            (ep[116] = eu),
            (ep[117] = eh))
          : (eh = ep[117]),
        ep[118] !== X || ep[119] !== eh
          ? ((eg = (0, s.jsxs)(s.Fragment, { children: [X, eh] })), (ep[118] = X), (ep[119] = eh), (ep[120] = eg))
          : (eg = ep[120]),
        eg
      )
    }
    function S(e) {
      return (0, s.jsx)(
        v.G,
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
    function G(e, t) {
      return Math.min(e, 1e3 * t.posted_at)
    }
    function M(e) {
      return e.items
    }
    function P(e) {
      return e.cursor ?? void 0
    }
    function E(e) {
      let { pageParam: t, signal: a } = e
      return _.Request.safeGet("/share/posts/mine", { parameters: { query: { limit: 10, cursor: t } }, signal: a })
    }
    function L() {
      return _.Request.safeGet("/shared_textdocs")
    }
    function R() {
      return _.Request.safeGet("/shared_conversations", { parameters: { query: { order: "created" } } })
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
        A,
        C,
        T,
        w,
        O,
        N,
        S,
        G,
        M = (0, n.c)(49),
        { accountId: P, sharedLink: E } = e,
        L = (0, d.gh)(I.u),
        R = (0, g.A)(),
        D = (0, r.jE)()
      M[0] !== P || M[1] !== E.id || M[2] !== E.kind
        ? ((t = ["chatgpt-shared-links", P, "delete", E.kind, E.id]),
          (M[0] = P),
          (M[1] = E.id),
          (M[2] = E.kind),
          (M[3] = t))
        : (t = M[3])
      let H = t
      M[4] !== H ? ((a = { mutationKey: H, exact: !0 }), (M[4] = H), (M[5] = a)) : (a = M[5])
      let q = (0, l.l)(a) > 0
      ;(M[6] !== E.id || M[7] !== E.kind
        ? ((i = async () => {
            switch (E.kind) {
              case "conversation":
                await _.Request.safeDelete("/share/{shared_conversation_id}", {
                  parameters: { path: { shared_conversation_id: E.id } },
                })
                break
              case "textdoc":
                await _.Request.safeDelete("/textdoc/shared/{shared_textdoc_id}", {
                  parameters: { path: { shared_textdoc_id: E.id } },
                })
                break
              case "post":
                await _.Request.safeDelete("/share/post/{post_id}", { parameters: { path: { post_id: E.id } } })
            }
          }),
          (M[6] = E.id),
          (M[7] = E.kind),
          (M[8] = i))
        : (i = M[8]),
        M[9] !== P || M[10] !== D
          ? ((o = () => D.invalidateQueries({ queryKey: ["chatgpt-shared-links", P] })),
            (M[9] = P),
            (M[10] = D),
            (M[11] = o))
          : (o = M[11]),
        M[12] !== R || M[13] !== L || M[14] !== E.kind
          ? ((u = () => {
              L.get(b.Id).danger(
                R.formatMessage({
                  id: "settings.chatGpt.sharedLinks.deleteError",
                  defaultMessage: "Could not delete shared link",
                }),
                {
                  errorAnalytics: {
                    toastId: "post" === E.kind ? "delete_shared_post_failed" : "delete_shared_link_failed",
                  },
                },
              )
            }),
            (M[12] = R),
            (M[13] = L),
            (M[14] = E.kind),
            (M[15] = u))
          : (u = M[15]),
        M[16] !== H || M[17] !== i || M[18] !== o || M[19] !== u
          ? ((h = { mutationKey: H, mutationFn: i, onSuccess: o, onError: u }),
            (M[16] = H),
            (M[17] = i),
            (M[18] = o),
            (M[19] = u),
            (M[20] = h))
          : (h = M[20]))
      let { mutate: z } = (0, c.n)(h),
        F = E.title ?? E.href
      return (
        M[21] !== E.title
          ? ((f =
              E.title ??
              (0, s.jsx)(p.A, { id: "settings.chatGpt.sharedLinks.fallbackName", defaultMessage: "Shared link" })),
            (M[21] = E.title),
            (M[22] = f))
          : (f = M[22]),
        M[23] !== E.href || M[24] !== F || M[25] !== f
          ? ((y = (0, s.jsx)("td", {
              className: "w-1/2 px-3 py-2 max-sm:col-start-1 max-sm:w-auto max-sm:pb-0",
              children: (0, s.jsx)(v.G, {
                className: "block wrap-anywhere underline",
                href: E.href,
                initiator: "open_in_browser_bridge",
                isBrowserEnabled: !1,
                openTarget: "external-browser",
                title: F,
                children: f,
              }),
            })),
            (M[23] = E.href),
            (M[24] = F),
            (M[25] = f),
            (M[26] = y))
          : (y = M[26]),
        M[27] !== E.type
          ? ((A = (0, s.jsx)("td", {
              className: "px-3 py-2 text-secondary max-sm:col-start-1 max-sm:py-0",
              children: (0, s.jsx)(U, { type: E.type }),
            })),
            (M[27] = E.type),
            (M[28] = A))
          : (A = M[28]),
        M[29] !== E.sharedAt
          ? ((C =
              E.sharedAt > 0
                ? (0, s.jsx)(m.XU, { value: E.sharedAt, day: "numeric", month: "long", year: "numeric" })
                : null),
            (M[29] = E.sharedAt),
            (M[30] = C))
          : (C = M[30]),
        M[31] !== C
          ? ((T = (0, s.jsx)("td", {
              className: "px-3 py-2 text-secondary max-sm:col-start-1 max-sm:pt-0",
              children: C,
            })),
            (M[31] = C),
            (M[32] = T))
          : (T = M[32]),
        M[33] !== R
          ? ((w = R.formatMessage({ id: "settings.chatGpt.sharedLinks.delete", defaultMessage: "Delete shared link" })),
            (M[33] = R),
            (M[34] = w))
          : (w = M[34]),
        M[35] !== z ? ((O = () => z()), (M[35] = z), (M[36] = O)) : (O = M[36]),
        M[37] !== q
          ? ((N = q ? (0, s.jsx)(j.y, { className: "size-4" }) : (0, s.jsx)(k.cSG, {})), (M[37] = q), (M[38] = N))
          : (N = M[38]),
        M[39] !== q || M[40] !== w || M[41] !== O || M[42] !== N
          ? ((S = (0, s.jsx)("td", {
              className: "px-3 py-2 text-end max-sm:col-start-2 max-sm:row-span-3 max-sm:row-start-1 max-sm:self-start",
              children: (0, s.jsx)(x.$, {
                "aria-busy": q,
                "aria-label": w,
                color: "ghost",
                disabled: q,
                onClick: O,
                size: "icon",
                children: N,
              }),
            })),
            (M[39] = q),
            (M[40] = w),
            (M[41] = O),
            (M[42] = N),
            (M[43] = S))
          : (S = M[43]),
        M[44] !== A || M[45] !== T || M[46] !== S || M[47] !== y
          ? ((G = (0, s.jsxs)("tr", {
              className: "border-b border-default last:border-b-0 max-sm:grid max-sm:grid-cols-[minmax(0,1fr)_auto]",
              children: [y, A, T, S],
            })),
            (M[44] = A),
            (M[45] = T),
            (M[46] = S),
            (M[47] = y),
            (M[48] = G))
          : (G = M[48]),
        G
      )
    }
    function U(e) {
      let t = (0, n.c)(5),
        { type: a } = e
      switch (a) {
        case "canvas": {
          let e
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(p.A, { id: "settings.chatGpt.sharedLinks.type.canvas", defaultMessage: "Canvas" })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        }
        case "chat": {
          let e
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(p.A, { id: "settings.chatGpt.sharedLinks.type.chat", defaultMessage: "Chat" })),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        }
        case "image": {
          let e
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(p.A, { id: "settings.chatGpt.sharedLinks.type.image", defaultMessage: "Image" })),
                (t[2] = e))
              : (e = t[2]),
            e
          )
        }
        case "post": {
          let e
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(p.A, { id: "settings.chatGpt.sharedLinks.type.post", defaultMessage: "Post" })),
                (t[3] = e))
              : (e = t[3]),
            e
          )
        }
        case "task": {
          let e
          return (
            t[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(p.A, {
                  id: "settings.chatGpt.sharedLinks.type.task",
                  defaultMessage: "Scheduled task",
                })),
                (t[4] = e))
              : (e = t[4]),
            e
          )
        }
      }
    }
    async function H() {
      let e = (
        await Promise.allSettled([
          _.Request.safeDelete("/share/all", { requestBody: { confirm: !0 } }),
          _.Request.safeDelete("/shared_textdocs", {}),
          _.Request.safeDelete("/share/posts/mine", {}),
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
            i = (0, n.c)(9),
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
              ? ((r = (0, s.jsx)(N, { accountId: o, open: c, onCloseAutoFocus: t, onOpenChange: a })),
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
  pO0d(e, t, a) {
    var s = a("ABep"),
      n = a("QosV"),
      r = a("oyxz"),
      i = a("Wf1j"),
      o = a("AWNZ"),
      l = a("DDOY")
    function c(e) {
      let t,
        a = (0, n.c)(2),
        { title: i } = e
      return (
        a[0] !== i
          ? ((t =
              "localizedText" in i ? (0, s.jsx)(s.Fragment, { children: i.localizedText }) : (0, s.jsx)(r.A, { ...i })),
            (a[0] = i),
            (a[1] = t))
          : (t = a[1]),
        t
      )
    }
    a.d(
      t,
      {},
      {
        Ct: c,
        GC: function (e) {
          let t,
            a,
            i,
            l,
            d,
            u,
            h,
            g,
            p,
            m = (0, n.c)(19)
          m[0] !== e
            ? (({ entry: a, anchored: d, description: t, renderLabel: l, ...i } = e),
              (m[0] = e),
              (m[1] = t),
              (m[2] = a),
              (m[3] = i),
              (m[4] = l),
              (m[5] = d))
            : ((t = m[1]), (a = m[2]), (i = m[3]), (l = m[4]), (d = m[5]))
          let f = void 0 === d || d
          m[6] !== a.title ? ((u = (0, s.jsx)(c, { title: a.title })), (m[6] = a.title), (m[7] = u)) : (u = m[7])
          let _ = u,
            y = f ? a.id : void 0
          return (
            m[8] !== _ || m[9] !== l ? ((h = null == l ? _ : l(_)), (m[8] = _), (m[9] = l), (m[10] = h)) : (h = m[10]),
            m[11] !== t || m[12] !== a.description
              ? ((g = null == a.description ? t : (0, s.jsx)(r.A, { ...a.description })),
                (m[11] = t),
                (m[12] = a.description),
                (m[13] = g))
              : (g = m[13]),
            m[14] !== i || m[15] !== y || m[16] !== h || m[17] !== g
              ? ((p = (0, s.jsx)(o.ic, { ...i, searchAnchor: y, label: h, description: g })),
                (m[14] = i),
                (m[15] = y),
                (m[16] = h),
                (m[17] = g),
                (m[18] = p))
              : (p = m[18]),
            p
          )
        },
        ek: function (e) {
          let t,
            a,
            r = (0, n.c)(12),
            { entry: o, anchored: c, className: d, children: u } = e,
            h = void 0 === c || c,
            g = (0, i.A)(),
            p = h ? o.id : void 0,
            m = h ? o.id : void 0,
            f = h ? -1 : void 0,
            _ = h ? "group" : void 0
          return (
            r[0] !== h || r[1] !== o || r[2] !== g
              ? ((t = h ? (0, l.hz)(g, o.title) : void 0), (r[0] = h), (r[1] = o), (r[2] = g), (r[3] = t))
              : (t = r[3]),
            r[4] !== u || r[5] !== d || r[6] !== p || r[7] !== m || r[8] !== f || r[9] !== _ || r[10] !== t
              ? ((a = (0, s.jsx)("div", {
                  id: p,
                  "data-settings-search-entry": m,
                  tabIndex: f,
                  role: _,
                  "aria-label": t,
                  className: d,
                  children: u,
                })),
                (r[4] = u),
                (r[5] = d),
                (r[6] = p),
                (r[7] = m),
                (r[8] = f),
                (r[9] = _),
                (r[10] = t),
                (r[11] = a))
              : (a = r[11]),
            a
          )
        },
        iu: function (e) {
          let t,
            a,
            r,
            i = (0, n.c)(6)
          return (
            i[0] !== e ? (({ action: t, ...a } = e), (i[0] = e), (i[1] = t), (i[2] = a)) : ((t = i[1]), (a = i[2])),
            i[3] !== t || i[4] !== a
              ? ((r = (0, s.jsx)(o.ic, { ...a, control: t })), (i[3] = t), (i[4] = a), (i[5] = r))
              : (r = i[5]),
            r
          )
        },
        kk: function (e) {
          let t,
            a,
            i,
            l,
            d,
            u,
            h,
            g = (0, n.c)(15)
          g[0] !== e
            ? (({ entry: a, anchored: l, description: t, ...i } = e),
              (g[0] = e),
              (g[1] = t),
              (g[2] = a),
              (g[3] = i),
              (g[4] = l))
            : ((t = g[1]), (a = g[2]), (i = g[3]), (l = g[4]))
          let p = void 0 === l || l ? a.id : void 0
          return (
            g[5] !== a.title ? ((d = (0, s.jsx)(c, { title: a.title })), (g[5] = a.title), (g[6] = d)) : (d = g[6]),
            g[7] !== t || g[8] !== a.description
              ? ((u = null == a.description ? t : (0, s.jsx)(r.A, { ...a.description })),
                (g[7] = t),
                (g[8] = a.description),
                (g[9] = u))
              : (u = g[9]),
            g[10] !== i || g[11] !== p || g[12] !== d || g[13] !== u
              ? ((h = (0, s.jsx)(o.kG, { ...i, searchAnchor: p, label: d, description: u })),
                (g[10] = i),
                (g[11] = p),
                (g[12] = d),
                (g[13] = u),
                (g[14] = h))
              : (h = g[14]),
            h
          )
        },
      },
    )
  },
  BSnr(e, t, a) {
    a.d(t, { X: () => i })
    var s = a("ABep"),
      n = a("QosV"),
      r = a("on57")
    let i = Object.assign(
      function (e) {
        let t,
          a,
          i = (0, n.c)(6),
          { children: o, id: l, className: c } = e
        return (
          i[0] !== c ? ((t = (0, r.A)("flex flex-col", c)), (i[0] = c), (i[1] = t)) : (t = i[1]),
          i[2] !== o || i[3] !== l || i[4] !== t
            ? ((a = (0, s.jsx)("section", { id: l, className: t, children: o })),
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
            u = (0, n.c)(33),
            {
              title: h,
              subtitle: g,
              actions: p,
              actionsAlignment: m,
              className: f,
              size: _,
              showDivider: y,
              titleGap: x,
              spacing: A,
              subtitlePlacement: C,
              subtitleWrap: v,
            } = e,
            k = void 0 === _ ? "default" : _,
            T = void 0 === A ? "default" : A,
            j = void 0 === C ? "below-title" : C,
            b = void 0 === v ? "balance" : v,
            I = null != h,
            w = null != g,
            O = null != p,
            N = "compact" === k
          u[0] !== N || u[1] !== g || u[2] !== j || u[3] !== b
            ? ((t = g
                ? (0, s.jsx)("div", {
                    className: (0, r.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === b ? "text-balance" : "text-wrap",
                      N ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === j && "w-full",
                    ),
                    children: g,
                  })
                : null),
              (u[0] = N),
              (u[1] = g),
              (u[2] = j),
              (u[3] = b),
              (u[4] = t))
            : (t = u[4])
          let S = t
          if (!I && !w && !O) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, s.jsx)(s.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let G =
              I && (void 0 === y || y) && "[[data-settings-panel]_&]:border-b [[data-settings-panel]_&]:border-default",
            M = "below-header" === j ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            P = w && "compact" === T && "pb-2",
            E = w && "compact" !== T && "pb-3"
          u[6] !== f ||
          u[7] !== w ||
          u[8] !== N ||
          u[9] !== T ||
          u[10] !== P ||
          u[11] !== E ||
          u[12] !== G ||
          u[13] !== M
            ? ((a = (0, r.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                G,
                M,
                P,
                E,
                !w && (0, r.A)("items-center pb-1.5", "compact" === T ? "min-h-8" : "min-h-toolbar"),
                w && N && "items-center",
                w && !N && "items-start",
                f,
              )),
              (u[6] = f),
              (u[7] = w),
              (u[8] = N),
              (u[9] = T),
              (u[10] = P),
              (u[11] = E),
              (u[12] = G),
              (u[13] = M),
              (u[14] = a))
            : (a = u[14])
          let L =
            "none" === (void 0 === x ? "default" : x)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[15] !== L ? ((i = (0, r.A)("flex min-w-0 flex-1 flex-col", L)), (u[15] = L), (u[16] = i)) : (i = u[16]),
            u[17] !== w || u[18] !== k || u[19] !== h
              ? ((o = h
                  ? (0, s.jsx)("div", {
                      className: (0, r.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === k && "text-sm leading-[18px]",
                        ("large" === k || ("default" === k && w)) && "text-lg",
                        ("base" === k || ("default" === k && !w)) && "text-base",
                      ),
                      children: h,
                    })
                  : null),
                (u[17] = w),
                (u[18] = k),
                (u[19] = h),
                (u[20] = o))
              : (o = u[20]))
          let R = "below-title" === j ? S : null
          ;(u[21] !== i || u[22] !== o || u[23] !== R
            ? ((l = (0, s.jsxs)("div", { className: i, children: [o, R] })),
              (u[21] = i),
              (u[22] = o),
              (u[23] = R),
              (u[24] = l))
            : (l = u[24]),
            u[25] !== p || u[26] !== m
              ? ((c = p
                  ? (0, s.jsx)("div", {
                      className: (0, r.A)("flex items-center gap-2", "end" === m && "self-end"),
                      children: p,
                    })
                  : null),
                (u[25] = p),
                (u[26] = m),
                (u[27] = c))
              : (c = u[27]))
          let D = "below-header" === j ? S : null
          return (
            u[28] !== a || u[29] !== l || u[30] !== c || u[31] !== D
              ? ((d = (0, s.jsxs)("div", { className: a, children: [l, c, D] })),
                (u[28] = a),
                (u[29] = l),
                (u[30] = c),
                (u[31] = D),
                (u[32] = d))
              : (d = u[32]),
            d
          )
        },
        Content: function (e) {
          let t,
            a,
            i = (0, n.c)(5),
            { children: o, className: l } = e
          return (
            i[0] !== l ? ((t = (0, r.A)("flex flex-col gap-1.5", l)), (i[0] = l), (i[1] = t)) : (t = i[1]),
            i[2] !== o || i[3] !== t
              ? ((a = (0, s.jsx)("div", { className: t, children: o })), (i[2] = o), (i[3] = t), (i[4] = a))
              : (a = i[4]),
            a
          )
        },
        Footer: function (e) {
          let t,
            a,
            i = (0, n.c)(6),
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
              ? ((a = (0, s.jsx)("div", { className: t, children: o })), (i[3] = o), (i[4] = t), (i[5] = a))
              : (a = i[5]),
            a
          )
        },
      },
    )
  },
  DDOY(e, t, a) {
    var s = a("Ywss"),
      n = a("iiZm")
    function r(e, t) {
      return "localizedText" in t ? t.localizedText : e.formatMessage(t, t.values)
    }
    a.d(
      t,
      {},
      {
        Xl: function (e, t, a) {
          let n = (0, s.Rr)(e),
            r = new URLSearchParams(n.search)
          for (let [e, t] of Object.entries(a ?? {})) r.set(e, t)
          return (0, s.AO)({ ...n, search: r.toString(), hash: t })
        },
        hz: r,
        s9: function (e, t, a) {
          let s = a.trim()
          return 0 === s.length
            ? []
            : e
                .flatMap((e) => {
                  let a = r(t, e.title),
                    i = (0, n.gr)(a, s),
                    o = (null == e.description ? "" : t.formatMessage(e.description))
                      .toLocaleLowerCase(t.locale)
                      .includes(s.toLocaleLowerCase(t.locale)),
                    l = [...(e.options ?? []), ...(e.keywords ?? [])].some((e) => (0, n.gr)(r(t, e), s) > 0)
                  return 0 !== i || o || l
                    ? [
                        {
                          id: e.id,
                          label: a,
                          score: i,
                          sectionSlug: e.section,
                          path: e.path,
                          searchParams: e.searchParams,
                        },
                      ]
                    : []
                })
                .sort((e, t) => t.score - e.score)
                .map(({ id: e, label: t, sectionSlug: a, path: s, searchParams: n }) => ({
                  id: e,
                  label: t,
                  sectionSlug: a,
                  ...(null == s ? {} : { path: s }),
                  searchParams: n,
                }))
        },
      },
    )
  },
  czB9(e, t, a) {
    var s = a("D7Ms"),
      n = a("Kwur")
    a.d(
      t,
      {},
      {
        U: function ({ account: e, userId: t, settingsAccountId: a, enabled: r = !0 }) {
          return {
            queryKey: ["chatgpt-training-eligibility", t, e?.id],
            queryFn:
              null == e
                ? s.hT
                : () =>
                    n.Request.safeGet("/accounts/data_usage_for_training", {
                      additionalHeaders: { "ChatGPT-Account-ID": e.id },
                    }),
            enabled: r && e?.structure === "workspace" && a === e.id,
            staleTime: 0,
          }
        },
      },
    )
  },
  Q7yV(e, t, a) {
    let s = (0, a("ESTr").a)({
      name: "arrow-left-md-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 3.682251, y: 4.14209, width: 8.843018, height: 7.716309 },
        visualBounds: { x: 3.682251, y: 4.14209, width: 8.843018, height: 7.716309 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.682251, y: 4.14209, width: 8.843018, height: 7.716309 },
        center: { x: 8.10376, y: 8.000244 },
        insets: { top: 4.14209, right: 3.474731, bottom: 4.141601, left: 3.682251 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.10376, y: 8.000244 }, foreground: { x: 8.10376, y: 8.000244 } },
      },
      capabilities: ["icon"],
      body: '<path d="M6.96175 4.29558C7.16659 4.09074 7.49887 4.09111 7.70394 4.29558C7.90897 4.50061 7.90897 4.83275 7.70394 5.03777L5.26546 7.47527H11.9998C12.2898 7.47527 12.5252 7.71071 12.5252 8.00066C12.5251 8.29048 12.2897 8.52605 11.9998 8.52605H5.26742L7.70394 10.9626C7.90897 11.1676 7.90897 11.4997 7.70394 11.7048C7.49889 11.9094 7.16666 11.9097 6.96175 11.7048L3.98226 8.72527C3.58237 8.32496 3.58212 7.67524 3.98226 7.27508L6.96175 4.29558Z" fill="currentColor"/>',
    })
    a.d(t, {}, { x: s })
  },
}
//# sourceMappingURL=673345.7b63199753.js.map
