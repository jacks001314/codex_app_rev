export const __rspack_esm_ids = [632692]
export const __webpack_modules__ = {
  ofKc(e, t, r) {
    var n,
      o,
      a =
        (((n = {}).CHATGPT_ACCOUNT_ACTION_UNSPECIFIED = "CHATGPT_ACCOUNT_ACTION_UNSPECIFIED"),
        (n.CHATGPT_ACCOUNT_ACTION_SETTINGS_OPENED = "CHATGPT_ACCOUNT_ACTION_SETTINGS_OPENED"),
        (n.CHATGPT_ACCOUNT_ACTION_DEACTIVATION_REQUESTED = "CHATGPT_ACCOUNT_ACTION_DEACTIVATION_REQUESTED"),
        (n.CHATGPT_ACCOUNT_ACTION_LOGOUT_CONFIRMED = "CHATGPT_ACCOUNT_ACTION_LOGOUT_CONFIRMED"),
        (n.CHATGPT_ACCOUNT_ACTION_MFA_ENROLLMENT_NUX_CLICKED = "CHATGPT_ACCOUNT_ACTION_MFA_ENROLLMENT_NUX_CLICKED"),
        (n.CHATGPT_ACCOUNT_ACTION_CME_OPENED = "CHATGPT_ACCOUNT_ACTION_CME_OPENED"),
        (n.UNRECOGNIZED = "UNRECOGNIZED"),
        n),
      s =
        (((o = {}).CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_UNSPECIFIED =
          "CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_UNSPECIFIED"),
        (o.CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_SHOWN =
          "CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_SHOWN"),
        (o.CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_LOGOUT_ANYWAY =
          "CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_LOGOUT_ANYWAY"),
        (o.CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_STAY_LOGGED_IN =
          "CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_STAY_LOGGED_IN"),
        (o.CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_DISMISSED =
          "CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_DISMISSED"),
        (o.UNRECOGNIZED = "UNRECOGNIZED"),
        o)
    r.d(
      t,
      {},
      {
        Gt: { $type: "protobuf_analytics_events.v1.ChatgptAccountLinkCancelClicked" },
        LD: { $type: "protobuf_analytics_events.v1.ChatgptDeviceRateLimitLogoutNotice" },
        Pz: { $type: "protobuf_analytics_events.v1.ChatgptAccountLinkAllowClicked" },
        V$: s,
        cW: { $type: "protobuf_analytics_events.v1.ChatgptAccountLinkSuccess" },
        ck: { $type: "protobuf_analytics_events.v1.ChatgptAccountLinkRedirectAuthenticate" },
        h8: { $type: "protobuf_analytics_events.v1.ChatgptAccountInteraction" },
        hd: { $type: "protobuf_analytics_events.v1.ChatgptDeviceRateLimitLogoutNoticeSuppressed" },
        sz: { $type: "protobuf_analytics_events.v1.ChatgptAccountLinkConfirmUiShown" },
        vo: { $type: "protobuf_analytics_events.v1.ChatgptAccountLinkError" },
        z9: a,
      },
    )
  },
  UPxa(e, t, r) {
    r.d(t, { BrowserLogoutPage: () => V })
    var n = r("ABep"),
      o = r("QosV"),
      a = r("c2QW"),
      s = r("ofKc"),
      i = r("t47U"),
      l = r("T0Rc"),
      c = r("YdA6"),
      u = r.n(c),
      d = r("zTeN"),
      _ = r("zd8w"),
      g = r("Wf1j"),
      T = r("oyxz"),
      h = r("HZfM"),
      f = r("ASxG"),
      p = r("DXAl"),
      C = r("qhRx"),
      m = r("WIiH"),
      A = r("sJS8"),
      w = r("ygO2"),
      O = r("SGsN"),
      E = r("yGJW"),
      N = r("OWtl"),
      I = r("WFY2"),
      x = r("R4pZ"),
      y = r("zskm"),
      b = r("jauv"),
      v = r("ci3G"),
      L = r("Noam"),
      G = r("EOo5"),
      P = r("JIuM"),
      U = r("tvcH"),
      S = r("LhhH")
    function R() {
      let e,
        t,
        r,
        a,
        s,
        i,
        l = (0, o.c)(18),
        { accountId: c, userId: u, email: _, nameAtLogin: g, profilePictureUrlAtLogin: T } = (0, G.As)()
      l[0] !== c || l[1] !== u ? ((e = { accountId: c, userId: u }), (l[0] = c), (l[1] = u), (l[2] = e)) : (e = l[2])
      let { data: h } = (0, d._U)(U.chatGptCurrentUserQuery$, e),
        f = h?.email ?? h?.phone_number ?? _,
        p = h?.name ?? g,
        C = (0, P.Dv)(h?.picture ?? T)
      if (!f) return null
      let m = u ?? h?.id ?? void 0,
        A = p ?? f
      ;(l[3] !== C || l[4] !== m || l[5] !== A
        ? ((t = (0, n.jsx)(S.e, { alt: "", colorKey: m, name: A, size: "md", src: C, referrerPolicy: "no-referrer" })),
          (l[3] = C),
          (l[4] = m),
          (l[5] = A),
          (l[6] = t))
        : (t = l[6]),
        l[7] !== p
          ? ((r = p ? (0, n.jsx)("p", { className: "truncate text-base font-medium", title: p, children: p }) : null),
            (l[7] = p),
            (l[8] = r))
          : (r = l[8]))
      let w = p ? "truncate text-sm text-secondary" : "truncate text-base font-medium"
      return (
        l[9] !== f || l[10] !== w
          ? ((a = (0, n.jsx)("p", { className: w, title: f, children: f })), (l[9] = f), (l[10] = w), (l[11] = a))
          : (a = l[11]),
        l[12] !== r || l[13] !== a
          ? ((s = (0, n.jsxs)("div", { className: "min-w-0 flex-1 select-text", children: [r, a] })),
            (l[12] = r),
            (l[13] = a),
            (l[14] = s))
          : (s = l[14]),
        l[15] !== t || l[16] !== s
          ? ((i = (0, n.jsxs)("div", {
              className: "flex w-full min-w-0 items-center gap-3 rounded-2xl border border-default p-3 text-start",
              children: [t, s],
            })),
            (l[15] = t),
            (l[16] = s),
            (l[17] = i))
          : (i = l[17]),
        i
      )
    }
    var D = r("NOPk"),
      j = r("AqQr"),
      M = r("gLgE")
    let H = "resume",
      k = f.object({ intent: f.literal("confirm-browser-logout"), location: f.enum(a.a4).optional() })
    function V() {
      let e,
        t,
        r,
        c,
        f,
        G,
        P,
        U,
        S,
        V,
        $,
        z,
        Z,
        B,
        q,
        Q,
        K,
        J,
        X,
        ee,
        et,
        er,
        en,
        eo,
        ea,
        es,
        ei,
        el,
        ec,
        eu,
        ed,
        e_,
        eg,
        eT,
        eh,
        ef,
        ep = (0, o.c)(122),
        eC = (0, d.gh)(N.u),
        em = (0, g.A)(),
        eA = (0, h.Zp)(),
        { search: ew, state: eO } = (0, h.zy)()
      ep[0] !== eO ? ((e = k.safeParse(eO)), (ep[0] = eO), (ep[1] = e)) : (e = ep[1])
      let eE = e.data,
        eN = "confirm-browser-logout" === eO || null != eE,
        eI = "complete-browser-logout" === eO
      ep[2] !== ew
        ? ((t = new URLSearchParams(ew).get("account_switch_action")), (ep[2] = ew), (ep[3] = t))
        : (t = ep[3])
      let ex = t,
        ey = "logout" === ex,
        eb = ex === H,
        ev = !eN || ey || eb,
        eL = !ev && !eI
      ep[4] !== eL ? ((r = { ...y.p, enabled: eL, staleTime: y.p.staleTime }), (ep[4] = eL), (ep[5] = r)) : (r = ep[5])
      let { data: eG, isPending: eP } = (0, l.I)(r),
        eU = !ev && eP
      ep[6] !== ev || ep[7] !== em || ep[8] !== eG
        ? ((c = ev || eG?.affected_apps == null ? null : (0, x.H)(em, eG.affected_apps, "chatgpt")),
          (ep[6] = ev),
          (ep[7] = em),
          (ep[8] = eG),
          (ep[9] = c))
        : (c = ep[9])
      let eS = c,
        eR = (0, d.Ul)(A.w5),
        eD = !ev && !eU && eR && null == eS,
        ej = (0, _.useRef)(!1)
      ;(ep[10] !== eS || ep[11] !== ev || ep[12] !== eU || ep[13] !== eR || ep[14] !== eC
        ? ((f = () => {
            ej.current ||
              ev ||
              eU ||
              !eR ||
              ((ej.current = !0),
              null != eS
                ? (0, E.yy)(eC, s.hd, { crossProductWarningShown: !0, temporaryChatUpsellShown: !1 })
                : (0, E.yy)(eC, s.LD, { action: "CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_SHOWN" }))
          }),
          (G = [eC, ev, eU, eR, eS]),
          (ep[10] = eS),
          (ep[11] = ev),
          (ep[12] = eU),
          (ep[13] = eR),
          (ep[14] = eC),
          (ep[15] = f),
          (ep[16] = G))
        : ((f = ep[15]), (G = ep[16])),
        (0, _.useEffect)(f, G))
      let eM = (0, _.useRef)(!1),
        eH = (0, _.useRef)(void 0),
        [ek, eV] = (0, _.useState)(!1),
        [eW, eF] = (0, _.useState)(!1),
        eY = (0, _.useRef)(!1),
        e$ = (0, _.useRef)(!0),
        ez = (0, _.useRef)(0),
        eZ = (0, _.useRef)(null),
        eB = (0, _.useRef)(null),
        eq = (0, _.useRef)(!1),
        eQ = (0, _.useRef)(null),
        eK = (0, _.useRef)(!1),
        eJ = (0, _.useRef)(0),
        eX = (0, _.useRef)(null),
        e0 = ey || eb
      ep[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = (e) => {
            let t = eQ.current
            null != t && ((eQ.current = null), t(e))
          }),
          (ep[17] = P))
        : (P = ep[17])
      let e1 = P
      ep[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((U = () =>
            new Promise((e) => {
              eQ.current = e
            })),
          (ep[18] = U))
        : (U = ep[18])
      let e2 = U
      ep[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = (e) => {
            if (eq.current && !(void 0 !== e && e)) return
            ;(e1(!1),
              (eq.current = !1),
              (ez.current = ez.current + 1),
              eZ.current?.abort(),
              (eZ.current = null),
              eB.current?.abort(),
              (eB.current = null),
              (eY.current = !1))
            let t = eX.current
            null != t ? (0, b.JY)(t) : (0, b.cZ)()
          }),
          (ep[19] = S))
        : (S = ep[19])
      let e3 = S
      ;(ep[20] !== e0 || ep[21] !== eI || ep[22] !== eA
        ? ((V = () => {
            let e = eJ.current + 1
            ;((eJ.current = e), (e$.current = !0))
            let t = () => {
                ;((eK.current = !0), e1(!0), e3())
              },
              r = (e) => {
                if (!e.persisted && !eK.current) return
                let t = !eq.current
                if (((eK.current = !1), e3(!0), !eI)) {
                  if (e0) return void window.location.replace(new URL("/", window.location.origin).toString())
                  if (!t) return void eA("/", { replace: !0 })
                  ;(eV(!1), eF(!0))
                }
              }
            return (
              window.addEventListener("pagehide", t),
              window.addEventListener("pageshow", r),
              () => {
                ;(window.removeEventListener("pagehide", t),
                  window.removeEventListener("pageshow", r),
                  (e$.current = !1),
                  queueMicrotask(() => {
                    eJ.current === e && !e$.current && (eK.current || e3(!0))
                  }))
              }
            )
          }),
          ($ = [e0, e3, eI, eA, e1]),
          (ep[20] = e0),
          (ep[21] = eI),
          (ep[22] = eA),
          (ep[23] = V),
          (ep[24] = $))
        : ((V = ep[23]), ($ = ep[24])),
        (0, _.useEffect)(V, $),
        ep[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((z = () => {
              if (!e$.current || eY.current) return null
              let e = new AbortController(),
                t = ez.current + 1
              return (
                (ez.current = t),
                (eZ.current = e),
                (eY.current = !0),
                eV(!0),
                eF(!1),
                { id: t, signal: e.signal }
              )
            }),
            (ep[25] = z))
          : (z = ep[25]))
      let e6 = z
      ep[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = (e) => e$.current && ez.current === e && !eZ.current?.signal.aborted), (ep[26] = Z))
        : (Z = ep[26])
      let e4 = Z
      ep[27] !== e0 || ep[28] !== eI
        ? ((B = (e, t) => {
            if (e4(e)) {
              if (
                ((eZ.current = null),
                (eY.current = !1),
                (void 0 !== t && t) || (0, b.cZ)(e0 ? eX.current : void 0),
                eV(!1),
                eI)
              )
                return void I.v.warning("Browser sign-out failed after logout-all")
              eF(!0)
            }
          }),
          (ep[27] = e0),
          (ep[28] = eI),
          (ep[29] = B))
        : (B = ep[29])
      let e5 = B
      ep[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = (e) => {
            eq.current = !0
            let t = e2()
            try {
              return (window.location.replace(e), t)
            } catch {
              return (e1(!1), (eq.current = !1), !1)
            }
          }),
          (ep[30] = q))
        : (q = ep[30])
      let e8 = q
      ep[31] !== ey ||
      ep[32] !== eS ||
      ep[33] !== ev ||
      ep[34] !== eI ||
      ep[35] !== eN ||
      ep[36] !== e5 ||
      ep[37] !== eG?.complete ||
      ep[38] !== eE?.location ||
      ep[39] !== eC ||
      ep[40] !== ew ||
      ep[41] !== eD
        ? ((Q = async () => {
            let e = e6()
            if (null == e) return
            let t = null
            if (ey) {
              let r = (0, b.KY)()
              if (null == r) return void e5(e.id)
              ;((t = r), (eX.current = r))
            }
            if (void 0 === eH.current)
              if (eI) eH.current = null
              else if (ey) eH.current = t?.logoutEvent ?? null
              else {
                let e = (0, C.getBrowserChatGptAuthSnapshot)()?.userId
                ;((eH.current =
                  (eN ? null : (0, D.Wv)(e, new URLSearchParams(ew).get(i.TK))) ??
                  (0, D.TV)({
                    reasonV2: eN
                      ? a.Hf.ACCESS_LOGOUT_REASON_V2_INTENTIONAL_USER_INITIATED_MANUAL_LOGOUT
                      : a.Hf.ACCESS_LOGOUT_REASON_V2_UNSPECIFIED,
                    preLogoutUserId: e,
                    logoutCaller: eN ? "logout_page_confirm_button_clicked" : "unknown_source_at_logout_page",
                    location: eE?.location,
                  })),
                  null != eH.current && (0, D.LX)(eH.current))
              }
            try {
              let r,
                n = () => {
                  ;(null == eB.current && (eB.current = new AbortController()),
                    (0, p.M)("APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_LOGOUT", eB.current.signal))
                }
              if (
                (ey || (ev && !eI) || n(),
                !ev &&
                  (await Y(e.signal, async () => {
                    ;(eD &&
                      (0, E.yy)(eC, s.LD, { action: "CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_LOGOUT_ANYWAY" }),
                      (0, E.yy)(eC, s.h8, {
                        action: "CHATGPT_ACCOUNT_ACTION_LOGOUT_CONFIRMED",
                        crossProductWarningShown: null != eS,
                        logoutImpactComplete: eG?.complete === !0,
                        modalDesign: "revised",
                        temporaryChatUpsellShown: !1,
                      }),
                      await eC.get(E.YV).flush(1e3))
                  }),
                  !e4(e.id)))
              )
                return
              let o = await (0, j.t)(
                () => (ey && n(), (0, m.handleLogout)(F)),
                ey
                  ? ((r = new URL("/auth/logout", window.location.origin)).searchParams.set("account_switch_action", H),
                    r.toString())
                  : void 0,
                e.signal,
                ey ? (r) => !!e4(e.id) && null != t && !!(0, b.u0)(t) && e8(r) : void 0,
                t ?? void 0,
                void 0,
                eH.current,
              )
              if (!e4(e.id) || eq.current) return
              if (o.ok) {
                eq.current = !0
                try {
                  window.location.replace(o.url)
                  return
                } catch {
                  eq.current = !1
                }
              }
            } catch {}
            e5(e.id)
          }),
          (ep[31] = ey),
          (ep[32] = eS),
          (ep[33] = ev),
          (ep[34] = eI),
          (ep[35] = eN),
          (ep[36] = e5),
          (ep[37] = eG?.complete),
          (ep[38] = eE?.location),
          (ep[39] = eC),
          (ep[40] = ew),
          (ep[41] = eD),
          (ep[42] = Q))
        : (Q = ep[42])
      let e7 = Q
      ep[43] !== e5 || ep[44] !== eC
        ? ((K = async () => {
            let e = e6()
            if (null == e) return
            let t = eX.current
            if (!u()(t) && !(0, b.u0)(t)) return void e5(e.id)
            let r = (0, b.HU)()
            if (null == r) return void e5(e.id)
            eX.current = r
            let n = !1
            try {
              if ((await (0, m.handleLogout)(W), !e4(e.id))) return
              if (!(0, b.u0)(r)) return void e5(e.id)
              if (
                (await (0, j.g)(e.signal, r, async () => {
                  if (
                    !e4(e.id) ||
                    !(0, b.u0)(r) ||
                    (await Y(e.signal, () => (0, L.UO)(eC)), !e4(e.id) || !(0, b.u0)(r))
                  )
                    return !1
                  let t = (function (e, t) {
                    let r = new URL((0, v.c)(null, e), window.location.origin)
                    if (
                      (r.searchParams.set("account_switch", "true"),
                      r.searchParams.set("account_switch_login", "add_account"),
                      /^(?:\/codex\/app)?\/accept-invite\/?$/.test(r.pathname))
                    )
                      return (r.searchParams.set("invite_logout", "true"), r.toString())
                    if (/^(?:\/codex\/app)?\/accept-referral\/?$/.test(r.pathname))
                      return (r.searchParams.set("referral_logout", "true"), r.toString())
                    let n = (0, C.getBrowserAuthPageUrl)("login")
                    return (
                      null != t && n.searchParams.set("screen_hint", t),
                      n.searchParams.set("next", r.pathname + r.search + r.hash),
                      n.toString()
                    )
                  })(r.callbackUrl, r.screenHint)
                  return ((0, b.Rt)(r), e8(t))
                }),
                !e4(e.id) || eq.current)
              )
                return
            } catch {
              e4(e.id) && ((n = (0, b.N9)(r)) || (0, b.JY)(r))
            }
            e5(e.id, n)
          }),
          (ep[43] = e5),
          (ep[44] = eC),
          (ep[45] = K))
        : (K = ep[45])
      let e9 = K
      if (eI || (ev && !eW)) {
        let e
        return (
          ep[46] !== eb || ep[47] !== eI || ep[48] !== e9 || ep[49] !== eC || ep[50] !== e7
            ? ((e = (0, n.jsx)("div", {
                ref: (e) => {
                  if (null == e || eM.current) return
                  let t = () => {
                    if (!eM.current) {
                      if (((eM.current = !0), eb)) return void e9()
                      if (!eI) return void e7()
                      queueMicrotask(() => {
                        ;(eC
                          .get(O.Id)
                          .success(
                            (0, n.jsx)(T.A, {
                              id: "settings.chatGpt.security.sessions.logoutAllSuccess",
                              defaultMessage: "Successfully logged out of all devices",
                              description:
                                "Success toast after ChatGPT Security settings ends all device sessions, before the browser finishes its own sign-out",
                            }),
                          ),
                          e7())
                      })
                    }
                  }
                  if ("prerendering" in document && document.prerendering)
                    return (
                      document.addEventListener("prerenderingchange", t, { once: !0 }),
                      () => {
                        document.removeEventListener("prerenderingchange", t)
                      }
                    )
                  t()
                },
              })),
              (ep[46] = eb),
              (ep[47] = eI),
              (ep[48] = e9),
              (ep[49] = eC),
              (ep[50] = e7),
              (ep[51] = e))
            : (e = ep[51]),
          e
        )
      }
      ep[52] !== eb
        ? ((J = eb
            ? (0, n.jsx)(T.A, {
                id: "browser.auth.logout.resume.title",
                defaultMessage: "Continue adding an account",
                description:
                  "Heading after account replacement logs out the selected account but cannot restore another saved account",
              })
            : (0, n.jsx)(T.A, {
                id: "browser.auth.logout.title",
                defaultMessage: "Log out of ChatGPT?",
                description: "Heading on the ChatGPT browser logout confirmation page",
              })),
          (X = eb ? null : (0, n.jsx)(R, {})),
          (ep[52] = eb),
          (ep[53] = J),
          (ep[54] = X))
        : ((J = ep[53]), (X = ep[54]))
      let te = eU ? "status" : void 0
      ;(ep[55] !== eU
        ? ((ee = eU
            ? (0, n.jsx)(T.A, {
                id: "browser.auth.logout.impact.loading",
                defaultMessage: "Checking where else you’re signed in…",
                description:
                  "Loading message on the ChatGPT browser logout confirmation while checking which other app sessions will also be logged out",
              })
            : null),
          (ep[55] = eU),
          (ep[56] = ee))
        : (ee = ep[56]),
        ep[57] !== eS || ep[58] !== eU
          ? ((et =
              eU || null == eS
                ? null
                : (0, n.jsx)(T.A, {
                    id: "browser.auth.logout.impact.namedAppsDescription",
                    defaultMessage: "This will also log you out of <apps></apps>.",
                    description:
                      "Complete warning before confirming logout from ChatGPT. The apps tag inserts the localized list of affected apps and sessions, for example Retool, Codex, and other ChatGPT sessions. Preserve the tag and ending punctuation.",
                    values: { apps: () => eS },
                  })),
            (ep[57] = eS),
            (ep[58] = eU),
            (ep[59] = et))
          : (et = ep[59]),
        ep[60] !== eD
          ? ((er = eD
              ? (0, n.jsx)(T.A, {
                  id: "browser.auth.logout.deviceRateLimitNotice",
                  defaultMessage: "Logging out or creating a new account won’t reset your usage limits",
                  description:
                    "Warning for a Free ChatGPT user with an active browser usage restriction before confirming logout. Logging out or switching to a new account in this browser will retain the restriction for its remaining time.",
                })
              : null),
            (ep[60] = eD),
            (ep[61] = er))
          : (er = ep[61]),
        ep[62] !== eb || ep[63] !== eS || ep[64] !== eU || ep[65] !== eD
          ? ((en =
              eb || eU || null != eS || eD
                ? null
                : (0, n.jsx)(T.A, {
                    id: "browser.auth.logout.description",
                    defaultMessage: "You’ll need to log in again to access your chats",
                    description:
                      "Explanation on the ChatGPT browser logout confirmation page before the user ends their session",
                  })),
            (ep[62] = eb),
            (ep[63] = eS),
            (ep[64] = eU),
            (ep[65] = eD),
            (ep[66] = en))
          : (en = ep[66]),
        ep[67] !== te || ep[68] !== ee || ep[69] !== et || ep[70] !== er || ep[71] !== en
          ? ((eo = (0, n.jsxs)("div", {
              className: "text-center text-sm text-secondary",
              role: te,
              children: [ee, et, er, en],
            })),
            (ep[67] = te),
            (ep[68] = ee),
            (ep[69] = et),
            (ep[70] = er),
            (ep[71] = en),
            (ep[72] = eo))
          : (eo = ep[72]),
        ep[73] !== eb || ep[74] !== eW
          ? ((ea = eW
              ? (0, n.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: eb
                    ? (0, n.jsx)(T.A, {
                        id: "browser.auth.logout.resume.failed",
                        defaultMessage: "We couldn’t restore your other account. Please try again",
                        description:
                          "Error when restoring a saved account after another account was logged out during account replacement. The user can retry restoration.",
                      })
                    : (0, n.jsx)(T.A, {
                        id: "browser.auth.logout.failed",
                        defaultMessage: "We couldn’t log you out. Please try again",
                        description:
                          "Inline error after the ChatGPT browser logout request fails; the current session has not been cleared and the user may retry",
                      }),
                })
              : null),
            (ep[73] = eb),
            (ep[74] = eW),
            (ep[75] = ea))
          : (ea = ep[75]),
        ep[76] !== eb || ep[77] !== eU || ep[78] !== e9 || ep[79] !== e7
          ? ((es = (e) => {
              if ((e.preventDefault(), !eU)) {
                if (eb) return void e9()
                e7()
              }
            }),
            (ep[76] = eb),
            (ep[77] = eU),
            (ep[78] = e9),
            (ep[79] = e7),
            (ep[80] = es))
          : (es = ep[80]))
      let tt = ek || eU
      return (
        ep[81] !== ek
          ? ((ei = ek
              ? (0, n.jsx)(T.A, {
                  id: "browser.auth.logout.pending",
                  defaultMessage: "Logging out…",
                  description: "Pending label while the ChatGPT browser logout request ends the session",
                })
              : null),
            (ep[81] = ek),
            (ep[82] = ei))
          : (ei = ep[82]),
        ep[83] !== ek || ep[84] !== eD
          ? ((el =
              !ek && eD
                ? (0, n.jsx)(T.A, {
                    id: "browser.auth.logout.anyway",
                    defaultMessage: "Log out anyway",
                    description:
                      "Button confirming logout after a Free ChatGPT user is warned that logging out will not reset this browser’s usage limits",
                  })
                : null),
            (ep[83] = ek),
            (ep[84] = eD),
            (ep[85] = el))
          : (el = ep[85]),
        ep[86] !== eb || ep[87] !== ek
          ? ((ec =
              !ek && eb
                ? (0, n.jsx)(T.A, {
                    id: "browser.auth.logout.resume.retry",
                    defaultMessage: "Try again",
                    description:
                      "Retry restoring another saved account after account replacement. This does not repeat the completed logout.",
                  })
                : null),
            (ep[86] = eb),
            (ep[87] = ek),
            (ep[88] = ec))
          : (ec = ep[88]),
        ep[89] !== eb || ep[90] !== ek || ep[91] !== eD
          ? ((eu =
              ek || eD || eb
                ? null
                : (0, n.jsx)(T.A, {
                    id: "browser.auth.logout.confirm",
                    defaultMessage: "Log out",
                    description: "Button confirming logout on the ChatGPT browser logout page",
                  })),
            (ep[89] = eb),
            (ep[90] = ek),
            (ep[91] = eD),
            (ep[92] = eu))
          : (eu = ep[92]),
        ep[93] !== tt || ep[94] !== ei || ep[95] !== el || ep[96] !== ec || ep[97] !== eu
          ? ((ed = (0, n.jsxs)(w.$, {
              type: "submit",
              color: "primary",
              size: "auth",
              disabled: tt,
              children: [ei, el, ec, eu],
            })),
            (ep[93] = tt),
            (ep[94] = ei),
            (ep[95] = el),
            (ep[96] = ec),
            (ep[97] = eu),
            (ep[98] = ed))
          : (ed = ep[98]),
        ep[99] !== e0 || ep[100] !== eN || ep[101] !== eA || ep[102] !== eC || ep[103] !== eD
          ? ((e_ = () => {
              ;(eD && (0, E.yy)(eC, s.LD, { action: "CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_STAY_LOGGED_IN" }),
              e3(!0),
              (0, D.FE)(eH.current),
              e0)
                ? window.location.replace(new URL("/", window.location.origin).toString())
                : eN
                  ? eA(-1)
                  : eA("/", { replace: !0 })
            }),
            (ep[99] = e0),
            (ep[100] = eN),
            (ep[101] = eA),
            (ep[102] = eC),
            (ep[103] = eD),
            (ep[104] = e_))
          : (e_ = ep[104]),
        ep[105] !== eD
          ? ((eg = eD
              ? (0, n.jsx)(T.A, {
                  id: "browser.auth.logout.stayLoggedIn",
                  defaultMessage: "Stay logged in",
                  description:
                    "Button cancelling logout after a Free ChatGPT user is warned that logging out will not reset this browser’s usage limits",
                })
              : (0, n.jsx)(T.A, {
                  id: "browser.auth.logout.cancel",
                  defaultMessage: "Cancel",
                  description: "Button returning to ChatGPT without ending the session from the browser logout page",
                })),
            (ep[105] = eD),
            (ep[106] = eg))
          : (eg = ep[106]),
        ep[107] !== ek || ep[108] !== e_ || ep[109] !== eg
          ? ((eT = (0, n.jsx)(w.$, {
              type: "button",
              color: "outlineSurface",
              size: "auth",
              disabled: ek,
              onClick: e_,
              children: eg,
            })),
            (ep[107] = ek),
            (ep[108] = e_),
            (ep[109] = eg),
            (ep[110] = eT))
          : (eT = ep[110]),
        ep[111] !== ek || ep[112] !== es || ep[113] !== ed || ep[114] !== eT
          ? ((eh = (0, n.jsxs)("form", {
              className: "flex w-full flex-col gap-3",
              "aria-busy": ek,
              onSubmit: es,
              children: [ed, eT],
            })),
            (ep[111] = ek),
            (ep[112] = es),
            (ep[113] = ed),
            (ep[114] = eT),
            (ep[115] = eh))
          : (eh = ep[115]),
        ep[116] !== J || ep[117] !== X || ep[118] !== eo || ep[119] !== ea || ep[120] !== eh
          ? ((ef = (0, n.jsxs)(M.q, { title: J, children: [X, eo, ea, eh] })),
            (ep[116] = J),
            (ep[117] = X),
            (ep[118] = eo),
            (ep[119] = ea),
            (ep[120] = eh),
            (ep[121] = ef))
          : (ef = ep[121]),
        ef
      )
    }
    function W() {}
    function F() {}
    function Y(e, t) {
      return new Promise((r) => {
        let n = null,
          o = !1,
          a = () => {
            o || ((o = !0), null != n && window.clearTimeout(n), e.removeEventListener("abort", a), r())
          }
        ;((n = window.setTimeout(a, 1e3)), e.addEventListener("abort", a, { once: !0 }), e.aborted)
          ? a()
          : t().then(a, a)
      })
    }
  },
  gLgE(e, t, r) {
    var n = r("ABep"),
      o = r("QosV"),
      a = r("on57"),
      s = r("oyxz"),
      i = r("HZfM"),
      l = r("ZtSy"),
      c = r("OQ5p")
    r.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            r,
            u,
            d,
            _,
            g,
            T,
            h,
            f,
            p,
            C,
            m,
            A = (0, o.c)(36),
            {
              title: w,
              description: O,
              children: E,
              presentation: N,
              contentAlignment: I,
              showFooter: x,
              showHomeLink: y,
              onHomeClick: b,
            } = e,
            v = void 0 === N ? "page" : N,
            L = void 0 === x || x,
            G = void 0 !== y && y
          A[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)("span", {
                className: "text-heading-lg font-semibold tracking-tight",
                children: (0, n.jsx)(s.A, {
                  id: "browser.auth.brand",
                  defaultMessage: "ChatGPT",
                  description:
                    "ChatGPT brand name in the top-left header of the browser login and logout pages; do not translate the product name",
                }),
              })),
              (A[0] = t))
            : (t = A[0])
          let P = t
          A[1] !== b || A[2] !== v || A[3] !== G
            ? ((r =
                "page" !== v
                  ? null
                  : (0, n.jsx)("header", {
                      className: "shrink-0 px-6 py-4 sm:px-8",
                      children: G ? (0, n.jsx)(i.N_, { to: "/", reloadDocument: !0, onClick: b, children: P }) : P,
                    })),
              (A[1] = b),
              (A[2] = v),
              (A[3] = G),
              (A[4] = r))
            : (r = A[4])
          let U = "start" === (void 0 === I ? "center" : I) ? "justify-start pt-12 sm:pt-16" : "justify-center pt-4"
          A[5] !== U
            ? ((u = (0, a.A)("flex w-full shrink-0 grow flex-col items-center px-6 pb-4", U)), (A[5] = U), (A[6] = u))
            : (u = A[6])
          let S = "focused" === v ? "max-w-80 gap-8" : "max-w-sm gap-5"
          A[7] !== S ? ((d = (0, a.A)("flex w-full flex-col", S)), (A[7] = S), (A[8] = d)) : (d = A[8])
          let R = "dialog" === v ? "sr-only" : "flex flex-col gap-4 text-center",
            D = "dialog" === v && "sr-only",
            j = "focused" === v && "text-2xl font-semibold",
            M = "page" === v && "text-3xl font-normal"
          return (
            A[9] !== D || A[10] !== j || A[11] !== M
              ? ((_ = (0, a.A)(D, j, M)), (A[9] = D), (A[10] = j), (A[11] = M), (A[12] = _))
              : (_ = A[12]),
            A[13] !== _ || A[14] !== w
              ? ((g = (0, n.jsx)("h1", { className: _, children: w })), (A[13] = _), (A[14] = w), (A[15] = g))
              : (g = A[15]),
            A[16] !== O
              ? ((T = null != O ? (0, n.jsx)("p", { className: "text-sm text-secondary", children: O }) : null),
                (A[16] = O),
                (A[17] = T))
              : (T = A[17]),
            A[18] !== R || A[19] !== g || A[20] !== T
              ? ((h = (0, n.jsxs)("div", { className: R, children: [g, T] })),
                (A[18] = R),
                (A[19] = g),
                (A[20] = T),
                (A[21] = h))
              : (h = A[21]),
            A[22] !== E || A[23] !== d || A[24] !== h
              ? ((f = (0, n.jsxs)("div", { className: d, children: [h, E] })),
                (A[22] = E),
                (A[23] = d),
                (A[24] = h),
                (A[25] = f))
              : (f = A[25]),
            A[26] !== f || A[27] !== u
              ? ((p = (0, n.jsx)("main", { className: u, children: f })), (A[26] = f), (A[27] = u), (A[28] = p))
              : (p = A[28]),
            A[29] !== v || A[30] !== L
              ? ((C =
                  L && "focused" !== v
                    ? (0, n.jsxs)("footer", {
                        className: "flex shrink-0 flex-col items-center gap-3 px-6 pt-10 pb-8",
                        children: [
                          (0, n.jsx)(c.A, { "aria-hidden": "true", className: "size-6 shrink-0" }),
                          (0, n.jsxs)("div", {
                            className: "flex flex-wrap items-center justify-center gap-3 text-xs text-secondary",
                            children: [
                              (0, n.jsx)(l.G, {
                                appearance: "secondary",
                                href: "https://openai.com/policies/terms-of-use/",
                                initiator: "open_in_browser_bridge",
                                openTarget: "dialog" === v ? "external-browser" : void 0,
                                children: (0, n.jsx)(s.A, {
                                  id: "browser.auth.termsOfUse",
                                  defaultMessage: "Terms of use",
                                  description:
                                    "Footer link to OpenAI's terms of use on the browser login and logout pages",
                                }),
                              }),
                              (0, n.jsx)("div", { "aria-hidden": "true", className: "h-3 w-px bg-border" }),
                              (0, n.jsx)(l.G, {
                                appearance: "secondary",
                                href: "https://openai.com/policies/privacy-policy/",
                                initiator: "open_in_browser_bridge",
                                openTarget: "dialog" === v ? "external-browser" : void 0,
                                children: (0, n.jsx)(s.A, {
                                  id: "browser.auth.privacyPolicy",
                                  defaultMessage: "Privacy policy",
                                  description:
                                    "Footer link to OpenAI's privacy policy on the browser login and logout pages",
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : null),
                (A[29] = v),
                (A[30] = L),
                (A[31] = C))
              : (C = A[31]),
            A[32] !== p || A[33] !== C || A[34] !== r
              ? ((m = (0, n.jsxs)("div", {
                  className: "flex h-full w-full flex-col overflow-y-auto bg-surface text-default select-none",
                  children: [r, p, C],
                })),
                (A[32] = p),
                (A[33] = C),
                (A[34] = r),
                (A[35] = m))
              : (m = A[35]),
            m
          )
        },
      },
    )
  },
}
//# sourceMappingURL=632692.b5fd7e03e9.js.map
