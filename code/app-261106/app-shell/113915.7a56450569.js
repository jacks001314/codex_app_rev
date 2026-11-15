export const __rspack_esm_ids = [113915]
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
      i =
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
        V$: i,
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
  sk59(e, t, r) {
    r.d(t, { o: () => a })
    var n = r("ASxG")
    let o = n.object({
      isMatchingLoggedInUser: n.literal(!0),
      referral: n.object({ redemption_action: n.string() }).nullable().optional(),
    })
    function a(e, t) {
      var r
      let n
      if (new URLSearchParams(e).get("workspace_join")) return !0
      let a = t?.matches.find((e) => "workspace-invite-loading" === e.route.handle)
      return (
        null != a &&
        ((r = t?.loaderData[a.route.id]),
        (n = o.safeParse(r)).success &&
          (void 0 === n.data.referral || n.data.referral?.redemption_action.trim().toLowerCase() === "workspace_join"))
      )
    }
  },
  CYQI(e, t, r) {
    var n = r("ABep"),
      o = r("QosV"),
      a = r("zd8w"),
      i = r("oyxz"),
      s = r("HZfM"),
      l = r("Sm6l"),
      c = r("RNul"),
      u = r("gLgE")
    r.d(
      t,
      {},
      {
        d: function () {
          let e,
            t,
            r,
            d,
            g,
            _,
            h,
            p = (0, o.c)(12),
            f = (0, s.zy)(),
            [T, m] = (0, a.useState)(!1)
          return (
            p[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = () => {
                  let e = window.setTimeout(() => m(!0), 3e4)
                  return () => window.clearTimeout(e)
                }),
                (t = []),
                (p[0] = e),
                (p[1] = t))
              : ((e = p[0]), (t = p[1])),
            (0, a.useEffect)(e, t),
            p[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, n.jsx)("span", {
                  role: "status",
                  children: (0, n.jsx)(i.A, {
                    id: "browser.invite.joiningWorkspace.title",
                    defaultMessage: "Joining workspace…",
                    description:
                      "Loading heading shown continuously while accepting a workspace invitation and loading the destination workspace",
                  }),
                })),
                (p[2] = r))
              : (r = p[2]),
            p[3] !== T
              ? ((d = T
                  ? (0, n.jsx)(i.A, {
                      id: "browser.invite.joiningWorkspace.slow",
                      defaultMessage: "This is taking longer than expected. You can reload the page to try again.",
                      description:
                        "Recovery guidance when joining or loading an invited workspace takes too long; reloading checks the current invitation and workspace state",
                    })
                  : null),
                (p[3] = T),
                (p[4] = d))
              : (d = p[4]),
            p[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, n.jsx)(c.y, { containerClassName: "self-center" })), (p[5] = g))
              : (g = p[5]),
            p[6] !== T || p[7] !== f
              ? ((_ = T
                  ? (0, n.jsx)(l.z, {
                      to: f,
                      reloadDocument: !0,
                      color: "primary",
                      size: "auth",
                      children: (0, n.jsx)(i.A, {
                        id: "browser.invite.joiningWorkspace.reload",
                        defaultMessage: "Reload page",
                        description:
                          "Reloads the current page to recover from a workspace join or destination load that has stalled",
                      }),
                    })
                  : null),
                (p[6] = T),
                (p[7] = f),
                (p[8] = _))
              : (_ = p[8]),
            p[9] !== d || p[10] !== _
              ? ((h = (0, n.jsxs)(u.q, { showFooter: !1, title: r, description: d, children: [g, _] })),
                (p[9] = d),
                (p[10] = _),
                (p[11] = h))
              : (h = p[11]),
            h
          )
        },
      },
    )
  },
  kTOo(e, t, r) {
    r.d(t, { BrowserLogoutPage: () => $ })
    var n = r("ABep"),
      o = r("QosV"),
      a = r("c2QW"),
      i = r("ofKc"),
      s = r("t47U"),
      l = r("T0Rc"),
      c = r("YdA6"),
      u = r.n(c),
      d = r("zTeN"),
      g = r("zd8w"),
      _ = r("Wf1j"),
      h = r("oyxz"),
      p = r("HZfM"),
      f = r("ASxG"),
      T = r("DXAl"),
      m = r("Au4v"),
      w = r("WIiH"),
      C = r("sJS8"),
      A = r("Sm6l"),
      O = r("SGsN"),
      E = r("yGJW"),
      I = r("OWtl"),
      N = r("WFY2"),
      x = r("R4pZ"),
      y = r("zskm"),
      v = r("fX79")
    r("OAko")
    var b = r("JNtf")
    ;(r("bVeK"), r("sk59"))
    var L = r("CYQI")
    function G(e) {
      let t,
        r,
        a,
        i,
        s,
        l,
        c,
        u = (0, o.c)(18),
        { workspaceJoin: d } = e,
        _ = void 0 !== d && d,
        p = (0, g.useId)(),
        f = (0, g.useId)()
      return (
        u[0] !== f || u[1] !== p
          ? ((t = { "aria-labelledby": p, "aria-describedby": f, onEscapeKeyDown: P }),
            (u[0] = f),
            (u[1] = p),
            (u[2] = t))
          : (t = u[2]),
        u[3] !== _
          ? ((r = _
              ? (0, n.jsx)(h.A, {
                  id: "browser.invite.joiningWorkspace.title",
                  defaultMessage: "Joining workspace…",
                  description:
                    "Loading heading shown continuously while accepting a workspace invitation and loading the destination workspace",
                })
              : (0, n.jsx)(h.A, {
                  id: "accountSwitch.loading.primary",
                  defaultMessage: "Switching accounts",
                  description:
                    "Primary loading message shown while ChatGPT switches to another account or loads the destination account",
                })),
            (u[3] = _),
            (u[4] = r))
          : (r = u[4]),
        u[5] !== r || u[6] !== p
          ? ((a = (0, n.jsx)(b.L3, { id: p, className: "sr-only", children: r })), (u[5] = r), (u[6] = p), (u[7] = a))
          : (a = u[7]),
        u[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, n.jsx)(h.A, {
              id: "accountSwitch.loading.secondary",
              defaultMessage: "Please wait",
              description: "Secondary loading message asking the user to wait while ChatGPT switches accounts",
            })),
            (u[8] = i))
          : (i = u[8]),
        u[9] !== f
          ? ((s = (0, n.jsx)(b.rr, { id: f, className: "sr-only", children: i })), (u[9] = f), (u[10] = s))
          : (s = u[10]),
        u[11] !== _ ? ((l = _ ? (0, n.jsx)(L.d, {}) : (0, n.jsx)(v.IL, {})), (u[11] = _), (u[12] = l)) : (l = u[12]),
        u[13] !== t || u[14] !== a || u[15] !== s || u[16] !== l
          ? ((c = (0, n.jsxs)(b.lG, {
              contentClassName: "fixed inset-0",
              contentPosition: "inline",
              open: !0,
              showDialogClose: !1,
              shouldIgnoreClickOutside: !0,
              unstyledContent: !0,
              viewportSized: !0,
              variant: "chatgpt",
              contentProps: t,
              children: [a, s, l],
            })),
            (u[13] = t),
            (u[14] = a),
            (u[15] = s),
            (u[16] = l),
            (u[17] = c))
          : (c = u[17]),
        c
      )
    }
    function P(e) {
      return e.preventDefault()
    }
    r("hZax")
    var S = r("jauv"),
      j = r("ci3G"),
      U = r("Noam"),
      R = r("EOo5"),
      D = r("JIuM"),
      k = r("tvcH"),
      M = r("LhhH")
    function H() {
      let e,
        t,
        r,
        a,
        i,
        s,
        l = (0, o.c)(18),
        { accountId: c, userId: u, email: g, nameAtLogin: _, profilePictureUrlAtLogin: h } = (0, R.As)()
      l[0] !== c || l[1] !== u ? ((e = { accountId: c, userId: u }), (l[0] = c), (l[1] = u), (l[2] = e)) : (e = l[2])
      let { data: p } = (0, d._U)(k.chatGptCurrentUserQuery$, e),
        f = p?.email ?? p?.phone_number ?? g,
        T = p?.name ?? _,
        m = (0, D.Dv)(p?.picture ?? h)
      if (!f) return null
      let w = u ?? p?.id ?? void 0,
        C = T ?? f
      ;(l[3] !== m || l[4] !== w || l[5] !== C
        ? ((t = (0, n.jsx)(M.e, { alt: "", colorKey: w, name: C, size: "md", src: m, referrerPolicy: "no-referrer" })),
          (l[3] = m),
          (l[4] = w),
          (l[5] = C),
          (l[6] = t))
        : (t = l[6]),
        l[7] !== T
          ? ((r = T ? (0, n.jsx)("p", { className: "truncate text-base font-medium", title: T, children: T }) : null),
            (l[7] = T),
            (l[8] = r))
          : (r = l[8]))
      let A = T ? "truncate text-sm text-secondary" : "truncate text-base font-medium"
      return (
        l[9] !== f || l[10] !== A
          ? ((a = (0, n.jsx)("p", { className: A, title: f, children: f })), (l[9] = f), (l[10] = A), (l[11] = a))
          : (a = l[11]),
        l[12] !== r || l[13] !== a
          ? ((i = (0, n.jsxs)("div", { className: "min-w-0 flex-1 select-text", children: [r, a] })),
            (l[12] = r),
            (l[13] = a),
            (l[14] = i))
          : (i = l[14]),
        l[15] !== t || l[16] !== i
          ? ((s = (0, n.jsxs)("div", {
              className: "flex w-full min-w-0 items-center gap-3 rounded-2xl border border-default p-3 text-start",
              children: [t, i],
            })),
            (l[15] = t),
            (l[16] = i),
            (l[17] = s))
          : (s = l[17]),
        s
      )
    }
    var V = r("NOPk"),
      W = r("AqQr"),
      Y = r("gLgE")
    let z = "resume",
      F = f.object({
        intent: f.enum(["confirm-browser-logout", "log-out-all-browser-accounts"]),
        location: f.enum(a.a4).optional(),
      })
    function $() {
      let e,
        t,
        r,
        c,
        f,
        v,
        b,
        L,
        P,
        R,
        D,
        k,
        M,
        $,
        J,
        K,
        q,
        X,
        ee,
        et,
        er,
        en,
        eo,
        ea,
        ei,
        es,
        el,
        ec,
        eu,
        ed,
        eg,
        e_,
        eh,
        ep,
        ef,
        eT,
        em = (0, o.c)(128),
        ew = (0, d.gh)(I.u),
        eC = (0, _.A)(),
        eA = (0, p.Zp)(),
        { search: eO, state: eE } = (0, p.zy)()
      em[0] !== eE ? ((e = F.safeParse(eE)), (em[0] = eE), (em[1] = e)) : (e = em[1])
      let eI = e.data,
        eN = "confirm-browser-logout" === eE || eI?.intent === "confirm-browser-logout",
        ex = eI?.intent === "log-out-all-browser-accounts",
        ey = "complete-browser-logout" === eE
      em[2] !== eO
        ? ((t = new URLSearchParams(eO).get("account_switch_action")), (em[2] = eO), (em[3] = t))
        : (t = em[3])
      let ev = t,
        eb = "logout" === ev,
        eL = ev === z,
        eG = !eN || eb || eL,
        eP = !eG && !ey
      em[4] !== eP ? ((r = { ...y.p, enabled: eP, staleTime: y.p.staleTime }), (em[4] = eP), (em[5] = r)) : (r = em[5])
      let { data: eS, isPending: ej } = (0, l.I)(r),
        eU = !eG && ej
      em[6] !== eG || em[7] !== eC || em[8] !== eS
        ? ((c = eG || eS?.affected_apps == null ? null : (0, x.H)(eC, eS.affected_apps, "chatgpt")),
          (em[6] = eG),
          (em[7] = eC),
          (em[8] = eS),
          (em[9] = c))
        : (c = em[9])
      let eR = c,
        eD = (0, d.Ul)(C.w5),
        ek = !eG && !eU && eD && null == eR,
        eM = (0, g.useRef)(!1)
      ;(em[10] !== eR || em[11] !== eG || em[12] !== eU || em[13] !== eD || em[14] !== ew
        ? ((f = () => {
            eM.current ||
              eG ||
              eU ||
              !eD ||
              ((eM.current = !0),
              null != eR
                ? (0, E.yy)(ew, i.hd, { crossProductWarningShown: !0, temporaryChatUpsellShown: !1 })
                : (0, E.yy)(ew, i.LD, { action: "CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_SHOWN" }))
          }),
          (v = [ew, eG, eU, eD, eR]),
          (em[10] = eR),
          (em[11] = eG),
          (em[12] = eU),
          (em[13] = eD),
          (em[14] = ew),
          (em[15] = f),
          (em[16] = v))
        : ((f = em[15]), (v = em[16])),
        (0, g.useEffect)(f, v))
      let eH = (0, g.useRef)(!1),
        eV = (0, g.useRef)(void 0),
        [eW, eY] = (0, g.useState)(!1),
        [ez, eF] = (0, g.useState)(!1),
        e$ = (0, g.useRef)(!1),
        eZ = (0, g.useRef)(!0),
        eB = (0, g.useRef)(0),
        eQ = (0, g.useRef)(null),
        eJ = (0, g.useRef)(null),
        eK = (0, g.useRef)(!1),
        eq = (0, g.useRef)(null),
        eX = (0, g.useRef)(!1),
        e0 = (0, g.useRef)(0),
        e1 = (0, g.useRef)(null),
        e2 = eb || eL
      em[17] === Symbol.for("react.memo_cache_sentinel")
        ? ((b = (e) => {
            let t = eq.current
            null != t && ((eq.current = null), t(e))
          }),
          (em[17] = b))
        : (b = em[17])
      let e3 = b
      em[18] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = () =>
            new Promise((e) => {
              eq.current = e
            })),
          (em[18] = L))
        : (L = em[18])
      let e4 = L
      em[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = (e) => {
            if (eK.current && !(void 0 !== e && e)) return
            ;(e3(!1),
              (eK.current = !1),
              (eB.current = eB.current + 1),
              eQ.current?.abort(),
              (eQ.current = null),
              eJ.current?.abort(),
              (eJ.current = null),
              (e$.current = !1))
            let t = e1.current
            null != t ? (0, S.JY)(t) : (0, S.cZ)()
          }),
          (em[19] = P))
        : (P = em[19])
      let e5 = P
      ;(em[20] !== e2 || em[21] !== ey || em[22] !== eA
        ? ((R = () => {
            let e = e0.current + 1
            ;((e0.current = e), (eZ.current = !0))
            let t = () => {
                ;((eX.current = !0), e3(!0), e5())
              },
              r = (e) => {
                if (!e.persisted && !eX.current) return
                let t = !eK.current
                if (((eX.current = !1), e5(!0), !ey)) {
                  if (e2) return void window.location.replace(new URL("/", window.location.origin).toString())
                  if (!t) return void eA("/", { replace: !0 })
                  ;(eY(!1), eF(!0))
                }
              }
            return (
              window.addEventListener("pagehide", t),
              window.addEventListener("pageshow", r),
              () => {
                ;(window.removeEventListener("pagehide", t),
                  window.removeEventListener("pageshow", r),
                  (eZ.current = !1),
                  queueMicrotask(() => {
                    e0.current === e && !eZ.current && (eX.current || e5(!0))
                  }))
              }
            )
          }),
          (D = [e2, e5, ey, eA, e3]),
          (em[20] = e2),
          (em[21] = ey),
          (em[22] = eA),
          (em[23] = R),
          (em[24] = D))
        : ((R = em[23]), (D = em[24])),
        (0, g.useEffect)(R, D),
        em[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = () => {
              if (!eZ.current || e$.current) return null
              let e = new AbortController(),
                t = eB.current + 1
              return (
                (eB.current = t),
                (eQ.current = e),
                (e$.current = !0),
                eY(!0),
                eF(!1),
                { id: t, signal: e.signal }
              )
            }),
            (em[25] = k))
          : (k = em[25]))
      let e6 = k
      em[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = (e) => eZ.current && eB.current === e && !eQ.current?.signal.aborted), (em[26] = M))
        : (M = em[26])
      let e8 = M
      em[27] !== e2 || em[28] !== ey
        ? (($ = (e, t) => {
            if (e8(e)) {
              if (
                ((eQ.current = null),
                (e$.current = !1),
                (void 0 !== t && t) || (0, S.cZ)(e2 ? e1.current : void 0),
                eY(!1),
                ey)
              )
                return void N.v.warning("Browser sign-out failed after logout-all")
              eF(!0)
            }
          }),
          (em[27] = e2),
          (em[28] = ey),
          (em[29] = $))
        : ($ = em[29])
      let e7 = $
      em[30] === Symbol.for("react.memo_cache_sentinel")
        ? ((J = (e) => {
            eK.current = !0
            let t = e4()
            try {
              return (window.location.replace(e), t)
            } catch {
              return (e3(!1), (eK.current = !1), !1)
            }
          }),
          (em[30] = J))
        : (J = em[30])
      let e9 = J
      em[31] !== eb ||
      em[32] !== eR ||
      em[33] !== eG ||
      em[34] !== ey ||
      em[35] !== eN ||
      em[36] !== e7 ||
      em[37] !== eS?.complete ||
      em[38] !== eI?.location ||
      em[39] !== ex ||
      em[40] !== ew ||
      em[41] !== eO ||
      em[42] !== ek
        ? ((K = async () => {
            let e = e6()
            if (null == e) return
            let t = null
            if (eb) {
              let r = (0, S.KY)()
              if (null == r) return void e7(e.id)
              ;((t = r), (e1.current = r))
            }
            if (void 0 === eV.current)
              if (ey) eV.current = null
              else if (eb) eV.current = t?.logoutEvent ?? null
              else {
                let e = (0, m.getBrowserChatGptAuthSnapshot)()?.userId,
                  t = "unknown_source_at_logout_page"
                ;(ex ? (t = "profile_menu_log_out_all_accounts") : eN && (t = "logout_page_confirm_button_clicked"),
                  (eV.current =
                    (eN ? null : (0, V.Wv)(e, new URLSearchParams(eO).get(s.TK))) ??
                    (0, V.TV)({
                      reasonV2:
                        eN || ex
                          ? a.Hf.ACCESS_LOGOUT_REASON_V2_INTENTIONAL_USER_INITIATED_MANUAL_LOGOUT
                          : a.Hf.ACCESS_LOGOUT_REASON_V2_UNSPECIFIED,
                      preLogoutUserId: e,
                      logoutCaller: t,
                      location: eI?.location,
                    })),
                  null != eV.current && (0, V.LX)(eV.current))
              }
            try {
              let r,
                n = () => {
                  ;(null == eJ.current && (eJ.current = new AbortController()),
                    (0, T.M)("APP_ENTRY_AUTH_HISTORY_LOGOUT_REASON_LOGOUT", eJ.current.signal))
                }
              if (
                (eb || (eG && !ey) || n(),
                !eG &&
                  (await Q(e.signal, async () => {
                    ;(ek &&
                      (0, E.yy)(ew, i.LD, { action: "CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_LOGOUT_ANYWAY" }),
                      (0, E.yy)(ew, i.h8, {
                        action: "CHATGPT_ACCOUNT_ACTION_LOGOUT_CONFIRMED",
                        crossProductWarningShown: null != eR,
                        logoutImpactComplete: eS?.complete === !0,
                        modalDesign: "revised",
                        temporaryChatUpsellShown: !1,
                      }),
                      await ew.get(E.YV).flush(1e3))
                  }),
                  !e8(e.id)))
              )
                return
              let o = await (0, W.t)(
                () => (eb && n(), (0, w.handleLogout)(B)),
                eb
                  ? ((r = new URL("/auth/logout", window.location.origin)).searchParams.set("account_switch_action", z),
                    r.toString())
                  : void 0,
                e.signal,
                eb ? (r) => !!e8(e.id) && null != t && !!(0, S.u0)(t) && e9(r) : void 0,
                t ?? void 0,
                void 0,
                eV.current,
              )
              if (!e8(e.id) || eK.current) return
              if (o.ok) {
                eK.current = !0
                try {
                  window.location.replace(o.url)
                  return
                } catch {
                  eK.current = !1
                }
              }
            } catch {}
            e7(e.id)
          }),
          (em[31] = eb),
          (em[32] = eR),
          (em[33] = eG),
          (em[34] = ey),
          (em[35] = eN),
          (em[36] = e7),
          (em[37] = eS?.complete),
          (em[38] = eI?.location),
          (em[39] = ex),
          (em[40] = ew),
          (em[41] = eO),
          (em[42] = ek),
          (em[43] = K))
        : (K = em[43])
      let te = K
      em[44] !== e7 || em[45] !== ew
        ? ((q = async () => {
            let e = e6()
            if (null == e) return
            let t = e1.current
            if (!u()(t) && !(0, S.u0)(t)) return void e7(e.id)
            let r = (0, S.HU)()
            if (null == r) return void e7(e.id)
            e1.current = r
            let n = !1
            try {
              if ((await (0, w.handleLogout)(Z), !e8(e.id))) return
              if (!(0, S.u0)(r)) return void e7(e.id)
              if (
                (await (0, W.g)(e.signal, r, async () => {
                  if (!e8(e.id) || !(0, S.u0)(r)) return !1
                  let t = r.pendingAction === S.Hl
                  if ((t || (await Q(e.signal, () => (0, U.UO)(ew))), !e8(e.id) || !(0, S.u0)(r))) return !1
                  let n = t
                    ? (0, j.c)(null, r.callbackUrl)
                    : (function (e, t) {
                        let r = new URL((0, j.c)(null, e), window.location.origin)
                        if (
                          (r.searchParams.set("account_switch", "true"),
                          r.searchParams.set("account_switch_login", "add_account"),
                          /^(?:\/codex\/app)?\/accept-invite\/?$/.test(r.pathname))
                        )
                          return (r.searchParams.set("invite_logout", "true"), r.toString())
                        if (/^(?:\/codex\/app)?\/accept-referral\/?$/.test(r.pathname))
                          return (r.searchParams.set("referral_logout", "true"), r.toString())
                        let n = (0, m.getBrowserAuthPageUrl)("login")
                        return (
                          null != t && n.searchParams.set("screen_hint", t),
                          n.searchParams.set("next", r.pathname + r.search + r.hash),
                          n.toString()
                        )
                      })(r.callbackUrl, r.screenHint)
                  return ((0, S.Rt)(r), e9(n))
                }),
                !e8(e.id) || eK.current)
              )
                return
            } catch {
              e8(e.id) && ((n = (0, S.N9)(r)) || (0, S.JY)(r))
            }
            e7(e.id, n)
          }),
          (em[44] = e7),
          (em[45] = ew),
          (em[46] = q))
        : (q = em[46])
      let tt = q
      if (ey || (eG && !ez)) {
        let e, t, r
        return (
          em[47] !== eL || em[48] !== ey || em[49] !== tt || em[50] !== ew || em[51] !== te
            ? ((e = (e) => {
                if (null == e || eH.current) return
                let t = () => {
                  if (!eH.current) {
                    if (((eH.current = !0), eL)) return void tt()
                    if (!ey) return void te()
                    queueMicrotask(() => {
                      ;(ew
                        .get(O.Id)
                        .success(
                          (0, n.jsx)(h.A, {
                            id: "settings.chatGpt.security.sessions.logoutAllSuccess",
                            defaultMessage: "Successfully logged out of all devices",
                            description:
                              "Success toast after ChatGPT Security settings ends all device sessions, before the browser finishes its own sign-out",
                          }),
                        ),
                        te())
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
              }),
              (em[47] = eL),
              (em[48] = ey),
              (em[49] = tt),
              (em[50] = ew),
              (em[51] = te),
              (em[52] = e))
            : (e = em[52]),
          em[53] !== e2 ? ((t = e2 ? (0, n.jsx)(G, {}) : null), (em[53] = e2), (em[54] = t)) : (t = em[54]),
          em[55] !== e || em[56] !== t
            ? ((r = (0, n.jsx)("div", { ref: e, children: t })), (em[55] = e), (em[56] = t), (em[57] = r))
            : (r = em[57]),
          r
        )
      }
      em[58] !== eL
        ? ((X = eL
            ? (0, n.jsx)(h.A, {
                id: "browser.auth.logout.resume.title",
                defaultMessage: "Continue adding an account",
                description:
                  "Heading after account replacement logs out the selected account but cannot restore another saved account",
              })
            : (0, n.jsx)(h.A, {
                id: "browser.auth.logout.title",
                defaultMessage: "Log out of ChatGPT?",
                description: "Heading on the ChatGPT browser logout confirmation page",
              })),
          (ee = eL ? null : (0, n.jsx)(H, {})),
          (em[58] = eL),
          (em[59] = X),
          (em[60] = ee))
        : ((X = em[59]), (ee = em[60]))
      let tr = eU ? "status" : void 0
      ;(em[61] !== eU
        ? ((et = eU
            ? (0, n.jsx)(h.A, {
                id: "browser.auth.logout.impact.loading",
                defaultMessage: "Checking where else you’re signed in…",
                description:
                  "Loading message on the ChatGPT browser logout confirmation while checking which other app sessions will also be logged out",
              })
            : null),
          (em[61] = eU),
          (em[62] = et))
        : (et = em[62]),
        em[63] !== eR || em[64] !== eU
          ? ((er =
              eU || null == eR
                ? null
                : (0, n.jsx)(h.A, {
                    id: "browser.auth.logout.impact.namedAppsDescription",
                    defaultMessage: "This will also log you out of <apps></apps>.",
                    description:
                      "Complete warning before confirming logout from ChatGPT. The apps tag inserts the localized list of affected apps and sessions, for example Retool, Codex, and other ChatGPT sessions. Preserve the tag and ending punctuation.",
                    values: { apps: () => eR },
                  })),
            (em[63] = eR),
            (em[64] = eU),
            (em[65] = er))
          : (er = em[65]),
        em[66] !== ek
          ? ((en = ek
              ? (0, n.jsx)(h.A, {
                  id: "browser.auth.logout.deviceRateLimitNotice",
                  defaultMessage: "Logging out or creating a new account won’t reset your usage limits",
                  description:
                    "Warning for a Free ChatGPT user with an active browser usage restriction before confirming logout. Logging out or switching to a new account in this browser will retain the restriction for its remaining time.",
                })
              : null),
            (em[66] = ek),
            (em[67] = en))
          : (en = em[67]),
        em[68] !== eL || em[69] !== eR || em[70] !== eU || em[71] !== ek
          ? ((eo =
              eL || eU || null != eR || ek
                ? null
                : (0, n.jsx)(h.A, {
                    id: "browser.auth.logout.description",
                    defaultMessage: "You’ll need to log in again to access your chats",
                    description:
                      "Explanation on the ChatGPT browser logout confirmation page before the user ends their session",
                  })),
            (em[68] = eL),
            (em[69] = eR),
            (em[70] = eU),
            (em[71] = ek),
            (em[72] = eo))
          : (eo = em[72]),
        em[73] !== tr || em[74] !== et || em[75] !== er || em[76] !== en || em[77] !== eo
          ? ((ea = (0, n.jsxs)("div", {
              className: "text-center text-sm text-secondary",
              role: tr,
              children: [et, er, en, eo],
            })),
            (em[73] = tr),
            (em[74] = et),
            (em[75] = er),
            (em[76] = en),
            (em[77] = eo),
            (em[78] = ea))
          : (ea = em[78]),
        em[79] !== eL || em[80] !== ez
          ? ((ei = ez
              ? (0, n.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: eL
                    ? (0, n.jsx)(h.A, {
                        id: "browser.auth.logout.resume.failed",
                        defaultMessage: "We couldn’t restore your other account. Please try again",
                        description:
                          "Error when restoring a saved account after another account was logged out during account replacement. The user can retry restoration.",
                      })
                    : (0, n.jsx)(h.A, {
                        id: "browser.auth.logout.failed",
                        defaultMessage: "We couldn’t log you out. Please try again",
                        description:
                          "Inline error after the ChatGPT browser logout request fails; the current session has not been cleared and the user may retry",
                      }),
                })
              : null),
            (em[79] = eL),
            (em[80] = ez),
            (em[81] = ei))
          : (ei = em[81]),
        em[82] !== eL || em[83] !== eU || em[84] !== tt || em[85] !== te
          ? ((es = (e) => {
              if ((e.preventDefault(), !eU)) {
                if (eL) return void tt()
                te()
              }
            }),
            (em[82] = eL),
            (em[83] = eU),
            (em[84] = tt),
            (em[85] = te),
            (em[86] = es))
          : (es = em[86]))
      let tn = eW || eU
      return (
        em[87] !== eW
          ? ((el = eW
              ? (0, n.jsx)(h.A, {
                  id: "browser.auth.logout.pending",
                  defaultMessage: "Logging out…",
                  description: "Pending label while the ChatGPT browser logout request ends the session",
                })
              : null),
            (em[87] = eW),
            (em[88] = el))
          : (el = em[88]),
        em[89] !== eW || em[90] !== ek
          ? ((ec =
              !eW && ek
                ? (0, n.jsx)(h.A, {
                    id: "browser.auth.logout.anyway",
                    defaultMessage: "Log out anyway",
                    description:
                      "Button confirming logout after a Free ChatGPT user is warned that logging out will not reset this browser’s usage limits",
                  })
                : null),
            (em[89] = eW),
            (em[90] = ek),
            (em[91] = ec))
          : (ec = em[91]),
        em[92] !== eL || em[93] !== eW
          ? ((eu =
              !eW && eL
                ? (0, n.jsx)(h.A, {
                    id: "browser.auth.logout.resume.retry",
                    defaultMessage: "Try again",
                    description:
                      "Retry restoring another saved account after account replacement. This does not repeat the completed logout.",
                  })
                : null),
            (em[92] = eL),
            (em[93] = eW),
            (em[94] = eu))
          : (eu = em[94]),
        em[95] !== eL || em[96] !== eW || em[97] !== ek
          ? ((ed =
              eW || ek || eL
                ? null
                : (0, n.jsx)(h.A, {
                    id: "browser.auth.logout.confirm",
                    defaultMessage: "Log out",
                    description: "Button confirming logout on the ChatGPT browser logout page",
                  })),
            (em[95] = eL),
            (em[96] = eW),
            (em[97] = ek),
            (em[98] = ed))
          : (ed = em[98]),
        em[99] !== tn || em[100] !== el || em[101] !== ec || em[102] !== eu || em[103] !== ed
          ? ((eg = (0, n.jsxs)(A.$, {
              type: "submit",
              color: "primary",
              size: "auth",
              disabled: tn,
              children: [el, ec, eu, ed],
            })),
            (em[99] = tn),
            (em[100] = el),
            (em[101] = ec),
            (em[102] = eu),
            (em[103] = ed),
            (em[104] = eg))
          : (eg = em[104]),
        em[105] !== e2 || em[106] !== eN || em[107] !== eA || em[108] !== ew || em[109] !== ek
          ? ((e_ = () => {
              ;(ek && (0, E.yy)(ew, i.LD, { action: "CHATGPT_DEVICE_RATE_LIMIT_LOGOUT_NOTICE_ACTION_STAY_LOGGED_IN" }),
              e5(!0),
              (0, V.FE)(eV.current),
              e2)
                ? window.location.replace(new URL("/", window.location.origin).toString())
                : eN
                  ? eA(-1)
                  : eA("/", { replace: !0 })
            }),
            (em[105] = e2),
            (em[106] = eN),
            (em[107] = eA),
            (em[108] = ew),
            (em[109] = ek),
            (em[110] = e_))
          : (e_ = em[110]),
        em[111] !== ek
          ? ((eh = ek
              ? (0, n.jsx)(h.A, {
                  id: "browser.auth.logout.stayLoggedIn",
                  defaultMessage: "Stay logged in",
                  description:
                    "Button cancelling logout after a Free ChatGPT user is warned that logging out will not reset this browser’s usage limits",
                })
              : (0, n.jsx)(h.A, {
                  id: "browser.auth.logout.cancel",
                  defaultMessage: "Cancel",
                  description: "Button returning to ChatGPT without ending the session from the browser logout page",
                })),
            (em[111] = ek),
            (em[112] = eh))
          : (eh = em[112]),
        em[113] !== eW || em[114] !== e_ || em[115] !== eh
          ? ((ep = (0, n.jsx)(A.$, {
              type: "button",
              color: "outlineSurface",
              size: "auth",
              disabled: eW,
              onClick: e_,
              children: eh,
            })),
            (em[113] = eW),
            (em[114] = e_),
            (em[115] = eh),
            (em[116] = ep))
          : (ep = em[116]),
        em[117] !== eW || em[118] !== es || em[119] !== eg || em[120] !== ep
          ? ((ef = (0, n.jsxs)("form", {
              className: "flex w-full flex-col gap-3",
              "aria-busy": eW,
              onSubmit: es,
              children: [eg, ep],
            })),
            (em[117] = eW),
            (em[118] = es),
            (em[119] = eg),
            (em[120] = ep),
            (em[121] = ef))
          : (ef = em[121]),
        em[122] !== X || em[123] !== ee || em[124] !== ea || em[125] !== ei || em[126] !== ef
          ? ((eT = (0, n.jsxs)(Y.q, { title: X, children: [ee, ea, ei, ef] })),
            (em[122] = X),
            (em[123] = ee),
            (em[124] = ea),
            (em[125] = ei),
            (em[126] = ef),
            (em[127] = eT))
          : (eT = em[127]),
        eT
      )
    }
    function Z() {}
    function B() {}
    function Q(e, t) {
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
      i = r("oyxz"),
      s = r("HZfM"),
      l = r("ZtSy"),
      c = r("hERv")
    r.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            r,
            u,
            d,
            g,
            _,
            h,
            p,
            f,
            T,
            m,
            w,
            C = (0, o.c)(36),
            {
              title: A,
              description: O,
              children: E,
              presentation: I,
              contentAlignment: N,
              showFooter: x,
              showHomeLink: y,
              onHomeClick: v,
            } = e,
            b = void 0 === I ? "page" : I,
            L = void 0 === x || x,
            G = void 0 !== y && y
          C[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)("span", {
                className: "text-heading-lg font-semibold tracking-tight",
                children: (0, n.jsx)(i.A, {
                  id: "browser.auth.brand",
                  defaultMessage: "ChatGPT",
                  description:
                    "ChatGPT brand name in the top-left header of the browser login and logout pages; do not translate the product name",
                }),
              })),
              (C[0] = t))
            : (t = C[0])
          let P = t
          C[1] !== v || C[2] !== b || C[3] !== G
            ? ((r =
                "page" !== b
                  ? null
                  : (0, n.jsx)("header", {
                      className: "shrink-0 px-6 py-4 sm:px-8",
                      children: G ? (0, n.jsx)(s.N_, { to: "/", reloadDocument: !0, onClick: v, children: P }) : P,
                    })),
              (C[1] = v),
              (C[2] = b),
              (C[3] = G),
              (C[4] = r))
            : (r = C[4])
          let S = "start" === (void 0 === N ? "center" : N) ? "justify-start pt-12 sm:pt-16" : "justify-center pt-4"
          C[5] !== S
            ? ((u = (0, a.A)("flex w-full shrink-0 grow flex-col items-center px-6 pb-4", S)), (C[5] = S), (C[6] = u))
            : (u = C[6])
          let j = "focused" === b ? "max-w-80 gap-8" : "max-w-sm gap-5"
          C[7] !== j ? ((d = (0, a.A)("flex w-full flex-col", j)), (C[7] = j), (C[8] = d)) : (d = C[8])
          let U = "dialog" === b ? "sr-only" : "flex flex-col gap-4 text-center",
            R = "dialog" === b && "sr-only",
            D = "focused" === b && "text-2xl font-semibold",
            k = "page" === b && "text-3xl font-normal"
          return (
            C[9] !== R || C[10] !== D || C[11] !== k
              ? ((g = (0, a.A)(R, D, k)), (C[9] = R), (C[10] = D), (C[11] = k), (C[12] = g))
              : (g = C[12]),
            C[13] !== g || C[14] !== A
              ? ((_ = (0, n.jsx)("h1", { className: g, children: A })), (C[13] = g), (C[14] = A), (C[15] = _))
              : (_ = C[15]),
            C[16] !== O
              ? ((h = null != O ? (0, n.jsx)("p", { className: "text-sm text-secondary", children: O }) : null),
                (C[16] = O),
                (C[17] = h))
              : (h = C[17]),
            C[18] !== U || C[19] !== _ || C[20] !== h
              ? ((p = (0, n.jsxs)("div", { className: U, children: [_, h] })),
                (C[18] = U),
                (C[19] = _),
                (C[20] = h),
                (C[21] = p))
              : (p = C[21]),
            C[22] !== E || C[23] !== d || C[24] !== p
              ? ((f = (0, n.jsxs)("div", { className: d, children: [p, E] })),
                (C[22] = E),
                (C[23] = d),
                (C[24] = p),
                (C[25] = f))
              : (f = C[25]),
            C[26] !== f || C[27] !== u
              ? ((T = (0, n.jsx)("main", { className: u, children: f })), (C[26] = f), (C[27] = u), (C[28] = T))
              : (T = C[28]),
            C[29] !== b || C[30] !== L
              ? ((m =
                  L && "focused" !== b
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
                                openTarget: "dialog" === b ? "external-browser" : void 0,
                                children: (0, n.jsx)(i.A, {
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
                                openTarget: "dialog" === b ? "external-browser" : void 0,
                                children: (0, n.jsx)(i.A, {
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
                (C[29] = b),
                (C[30] = L),
                (C[31] = m))
              : (m = C[31]),
            C[32] !== T || C[33] !== m || C[34] !== r
              ? ((w = (0, n.jsxs)("div", {
                  className: "flex h-full w-full flex-col overflow-y-auto bg-surface text-default select-none",
                  children: [r, T, m],
                })),
                (C[32] = T),
                (C[33] = m),
                (C[34] = r),
                (C[35] = w))
              : (w = C[35]),
            w
          )
        },
      },
    )
  },
}
//# sourceMappingURL=113915.7a56450569.js.map
