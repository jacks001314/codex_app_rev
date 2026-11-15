export const __rspack_esm_ids = [678e3]
export const __webpack_modules__ = {
  t24D(e, t, n) {
    n.d(t, { TeamsSetupDialog: () => V })
    var s = n("ABep"),
      a = n("QosV"),
      i = n("siKn"),
      o = n("irkb"),
      l = n("T0Rc"),
      r = n("D7Ms"),
      c = n("xSOA"),
      d = n("zTeN"),
      u = n("DBCl"),
      m = n("zd8w"),
      p = n("Wf1j"),
      h = n("oyxz"),
      f = n("rGp2"),
      g = n("JAom"),
      y = n("pxeg"),
      _ = n("hOO0"),
      x = n("uc7r"),
      A = n("yxN2"),
      b = n("SPnB"),
      w = n("YJm0"),
      T = n("AOHi"),
      j = n("Sm6l"),
      M = n("JNtf"),
      S = n("mUDD"),
      v = n("bqtn"),
      I = n("Ot7V"),
      k = n("HOLv"),
      C = n("bVeK"),
      N = n("zLIa"),
      q = n("XcNx"),
      E = n("qlCY"),
      U = n("MX3C"),
      D = n("OWtl"),
      K = n("LH8k"),
      O = n("eShZ"),
      P = n("nf1S"),
      R = n("fu3W"),
      G = n("PlnU"),
      z = n("YFAr"),
      $ = n("S7fj"),
      F = n("Sbyb"),
      Q = n("pDRe"),
      B = n("ZQu1"),
      W = n("sZGP")
    function Y(e) {
      let t,
        n,
        i,
        o,
        r,
        p,
        f,
        g = (0, a.c)(27),
        { conversationId: _, destination: x, recipientName: A, sharePointConnected: w, onConnected: T } = e,
        M = (0, d.gh)(D.u),
        S = (0, d.Ul)(b.chatGptAuthenticatedAccountId$),
        v = (0, d.Ul)(b.chatGptAuthenticatedUserId$),
        I = (0, m.useRef)(null)
      g[0] !== S || g[1] !== w || g[2] !== v
        ? ((t = (0, Q.p)({ accountId: S, userId: v, appIds: [y.oI], enabled: !0 !== w })),
          (g[0] = S),
          (g[1] = w),
          (g[2] = v),
          (g[3] = t))
        : (t = g[3])
      let k = t,
        { data: N } = (0, l.I)(k)
      g[4] !== N ? ((n = (0, $.k)(N).has(y.oI)), (g[4] = N), (g[5] = n)) : (n = g[5])
      let q = n
      ;(g[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = () => () => {
            I.current?.abort()
          }),
          (g[6] = i))
        : (i = g[6]),
        g[7] !== S || g[8] !== v ? ((o = [S, v]), (g[7] = S), (g[8] = v), (g[9] = o)) : (o = g[9]),
        (0, m.useEffect)(i, o),
        g[10] !== S || g[11] !== q || g[12] !== T || g[13] !== M || g[14] !== v
          ? ((r = {
              mutationFn: async () => {
                if (null != I.current || !q) return
                let e = new AbortController()
                I.current = e
                let t = () =>
                  !e.signal.aborted &&
                  M.get(b.chatGptAuthenticatedAccountId$) === S &&
                  M.get(b.chatGptAuthenticatedUserId$) === v
                ;(
                  await (0, F.requestMcpConnectSheet)(M, {
                    connectorId: y.oI,
                    hostId: u.iwv,
                    payload: { requireAuth: !0 },
                    oauthPresentation: "popup",
                    signal: e.signal,
                    beforeConnect: async () => t(),
                  }).finally(() => {
                    I.current = null
                  })
                ).didConnect &&
                  t() &&
                  (await T())
              },
            }),
            (g[10] = S),
            (g[11] = q),
            (g[12] = T),
            (g[13] = M),
            (g[14] = v),
            (g[15] = r))
          : (r = g[15]))
      let { mutate: E, isPending: U, isError: K } = (0, c.n)(r)
      return (
        g[16] !== q || g[17] !== E || g[18] !== K || g[19] !== U || g[20] !== w
          ? ((p =
              !1 === w && q
                ? (0, s.jsx)(P.kQ, {
                    description: (0, s.jsxs)("div", {
                      className: "flex flex-col gap-3 select-none",
                      children: [
                        (0, s.jsx)("p", {
                          className: "text-sm text-secondary",
                          children: (0, s.jsx)(h.A, {
                            id: "restricted.aeon.teams.sharepoint.description.dot",
                            defaultMessage: "Connect SharePoint to let your dot send and receive files in Teams",
                            description:
                              "Explains why connecting SharePoint is useful after installing dot in Microsoft Teams. A dot is an always-on agent; use dot as a common noun and preserve user-chosen names. Keep the singular term dot untranslated.",
                          }),
                        }),
                        K
                          ? (0, s.jsx)("p", {
                              role: "alert",
                              className: "text-sm text-danger",
                              children: (0, s.jsx)(h.A, {
                                id: "restricted.aeon.teams.sharepoint.error",
                                defaultMessage:
                                  "Could not connect SharePoint. Try again, or open Teams to start chatting",
                                description:
                                  "A failed optional SharePoint connection can be retried without preventing the user from opening Teams",
                              }),
                            })
                          : null,
                      ],
                    }),
                    children: (0, s.jsxs)("div", {
                      className:
                        "flex w-full min-w-0 items-center gap-3 rounded-xl border border-default bg-surface p-4 shadow-sm select-none",
                      children: [
                        (0, s.jsx)(B.R, {
                          className: "size-6 shrink-0",
                          src: "/images/ecosystem/apps/microsoft_sharepoint/icon.png",
                          alt: "",
                          fallback: (0, s.jsx)(C.o_G, {}),
                        }),
                        (0, s.jsx)("span", {
                          className: "min-w-0 flex-1 text-start font-medium",
                          children: (0, s.jsx)(h.A, {
                            id: "restricted.aeon.teams.sharepoint.name",
                            defaultMessage: "SharePoint",
                            description:
                              "Name of the Microsoft SharePoint connector offered after installing the dot in Teams",
                          }),
                        }),
                        (0, s.jsx)(j.$, {
                          color: "accent",
                          loading: U,
                          disabled: U,
                          onClick: () => E(),
                          children: (0, s.jsx)(h.A, {
                            id: "restricted.aeon.teams.sharepoint.connect",
                            defaultMessage: "Connect",
                            description:
                              "Connects SharePoint to let the dot send and receive files in Microsoft Teams; this step is optional",
                          }),
                        }),
                      ],
                    }),
                  })
                : void 0),
            (g[16] = q),
            (g[17] = E),
            (g[18] = K),
            (g[19] = U),
            (g[20] = w),
            (g[21] = p))
          : (p = g[21]),
        g[22] !== _ || g[23] !== x || g[24] !== A || g[25] !== p
          ? ((f = (0, s.jsx)(W.g, {
              conversationId: _,
              method: "teams",
              destination: x,
              recipientName: A,
              preview: p,
            })),
            (g[22] = _),
            (g[23] = x),
            (g[24] = A),
            (g[25] = p),
            (g[26] = f))
          : (f = g[26]),
        f
      )
    }
    let H = (0, d.bD)(D.u, (e) => void 0),
      L = (0, d.A4)(
        D.u,
        (e) => (e ?? 0) > Date.now(),
        (e, { set: t }) => {
          let n = (e ?? 0) - Date.now()
          if ((t(n > 0), n <= 0)) return
          let s = setTimeout(() => t(!1), n)
          return () => clearTimeout(s)
        },
        { autoDispose: !0 },
      )
    function V(e) {
      let t,
        n,
        v,
        I,
        C,
        q,
        $,
        F,
        Q,
        B,
        W,
        V,
        ec,
        ed,
        eu,
        em,
        ep,
        eh,
        ef,
        eg,
        ey,
        e_,
        ex,
        eA,
        eb,
        ew,
        eT,
        ej,
        eM,
        eS,
        ev,
        eI,
        ek,
        eC,
        eN,
        eq,
        eE,
        eU,
        eD,
        eK = (0, a.c)(198),
        {
          api: eO,
          connectAgentUser: eP,
          threadId: eR,
          accountId: eG,
          userId: ez,
          initialLinkId: e$,
          initialDisplayName: eF,
          initialOriginalDisplayName: eQ,
          mode: eB,
          onConnected: eW,
          onClose: eY,
        } = e,
        eH = void 0 === eO ? R.FB : eO,
        eL = void 0 === eB ? "dialog" : eB,
        eV = (0, d.gh)(D.u),
        eJ = (0, p.A)(),
        eZ = (0, d.Ul)(b.kf),
        eX = (0, d.Ul)(b.Kw),
        e1 = (0, d.Ul)(b.o8)
      eK[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (eK[0] = t)) : (t = eK[0])
      let { isFetching: e0, refetch: e2 } = (0, d._U)(w.f, eG, t),
        e3 = (0, o.jE)(),
        [e6, e7] = (0, m.useState)(e$ ?? ""),
        [e4, e5] = (0, m.useState)(eQ ?? eF),
        e8 = (0, m.useRef)(!0),
        e9 = (0, m.useRef)(null)
      ;(eK[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => (
            (e8.current = !0),
            () => {
              ;((e8.current = !1), e9.current?.())
            }
          )),
          (v = []),
          (eK[1] = n),
          (eK[2] = v))
        : ((n = eK[1]), (v = eK[2])),
        (0, m.useEffect)(n, v))
      let [te, tt] = (0, m.useState)(""),
        [tn, ts] = (0, m.useState)("idle"),
        ta = "idle" !== tn,
        [ti, to] = (0, m.useState)(null)
      ;(eK[3] !== ti
        ? ((I = () => {
            if (null == ti) return
            let e = setTimeout(() => to(null), 3e4)
            return () => clearTimeout(e)
          }),
          (C = [ti]),
          (eK[3] = ti),
          (eK[4] = I),
          (eK[5] = C))
        : ((I = eK[4]), (C = eK[5])),
        (0, m.useEffect)(I, C))
      let [tl, tr] = (0, m.useState)(null)
      eK[6] === Symbol.for("react.memo_cache_sentinel") ? ((q = { hostId: u.iwv }), (eK[6] = q)) : (q = eK[6])
      let { handleAppConnectOAuthStarted: tc, isAppConnectPending: td } = (0, A.t)(q),
        { openPendingAppConnectPopup: tu, clearPendingAppConnect: tm } = (0, g.ZN)()
      eK[7] !== tl || eK[8] !== td
        ? (($ =
            null != tl && td(tl.connectorId, { kind: "return-to-location-state", successState: {}, failureState: {} })),
          (eK[7] = tl),
          (eK[8] = td),
          (eK[9] = $))
        : ($ = eK[9])
      let tp = $,
        th = null != eG && null != ez
      eK[10] !== eG || eK[11] !== ez
        ? ((F = (0, x.dZ)({ accountId: eG, userId: ez })), (eK[10] = eG), (eK[11] = ez), (eK[12] = F))
        : (F = eK[12])
      let tf = F,
        tg = th && !tp
      eK[13] !== tf || eK[14] !== tg
        ? ((Q = { ...tf, enabled: tg, staleTime: tf.staleTime }), (eK[13] = tf), (eK[14] = tg), (eK[15] = Q))
        : (Q = eK[15])
      let { data: ty, isFetching: t_, error: tx } = (0, l.I)(Q),
        tA = null
      "loaded" === eZ.status && (tA = "personal" === eZ.structure ? e1 : eX)
      let tb =
        null == ty || null == tA
          ? void 0
          : (0, U.Tm)(ty, G.T).filter(
              (e) => "OAUTH" === e.auth_type && e.owners.some((e) => "USER" === e.type && e.id === tA),
            )
      eK[16] !== eG || eK[17] !== eR || eK[18] !== ez
        ? ((B = ["teams-orbit", eG, ez, eR]), (eK[16] = eG), (eK[17] = eR), (eK[18] = ez), (eK[19] = B))
        : (B = eK[19])
      let tw = B,
        tT = (0, d._U)(H, tw),
        tj = null != tT,
        tM = (0, d._U)(L, tT),
        tS = ta && te
      eK[20] !== tS || eK[21] !== tl?.attemptId || eK[22] !== tw
        ? ((W = tS || tl?.attemptId ? [...tw, "setup", tS || null, tl?.attemptId ?? null] : tw),
          (eK[20] = tS),
          (eK[21] = tl?.attemptId),
          (eK[22] = tw),
          (eK[23] = W))
        : (W = eK[23])
      let tv = W
      eK[24] !== ti || eK[25] !== ta
        ? ((V = (e) => {
            let t = e.state.data
            return (
              !(
                !ta ||
                null == ti ||
                "error" === e.state.status ||
                t?.personal_installation === "failed" ||
                t?.personal_installation === "reconnect" ||
                t?.connections?.some(eo)
              ) && 2e3
            )
          }),
          (eK[24] = ti),
          (eK[25] = ta),
          (eK[26] = V))
        : (V = eK[26])
      let {
          data: tI,
          isFetching: tk,
          error: tC,
        } = (0, l.I)({
          queryKey: tv,
          queryFn: async (e) => {
            let { signal: t } = e,
              n = await eH.status(eR, t, tS || void 0)
            return (
              (tS || tl?.attemptId) &&
                n.connections?.some(el) &&
                (e3.setQueryData(tw, n), tS && "submitted" === tn && !t.aborted && t0(n)),
              n
            )
          },
          enabled: th && !tp,
          placeholderData: r.rX,
          staleTime: 0,
          retry: !1,
          refetchOnWindowFocus: !1,
          refetchInterval: V,
        }),
        tN = tb && [
          ...tb,
          ...(tI?.user_connections ?? [])
            .filter((e) => !e.link_id.startsWith("implicit_link::") && !ty?.some((t) => t.id === e.link_id))
            .map(ei),
        ],
        tq = null != tI && !tI.agent_user_connected && !tI.connections?.length && null == tI.installation,
        tE = !tq || tI.personal_installation || ta ? void 0 : eP,
        tU = tI?.personal_installation === "failed",
        tD = tI?.authorization_connector_id,
        tK = !tE && "setup" === eL && tq && "accepted" !== tI.personal_installation
      if (eK[27] !== eG || eK[28] !== tD || eK[29] !== ez) {
        let e = (0, f.rJ)(tD ?? "", { includeActions: !0, productSku: "AEON" })
        ;((eu = l.I),
          (ec = e),
          (ed = [...e.queryKey, eG, ez]),
          (eK[27] = eG),
          (eK[28] = tD),
          (eK[29] = ez),
          (eK[30] = ec),
          (eK[31] = ed),
          (eK[32] = eu))
      } else ((ec = eK[30]), (ed = eK[31]), (eu = eK[32]))
      let tO = th && tK && null != tD && !tp
      eK[33] !== ec || eK[34] !== ed || eK[35] !== tO
        ? ((em = { ...ec, queryKey: ed, enabled: tO, staleTime: 1e4, retry: !1, select: ea }),
          (eK[33] = ec),
          (eK[34] = ed),
          (eK[35] = tO),
          (eK[36] = em))
        : (em = eK[36])
      let { data: tP, status: tR, error: tG, isFetching: tz, refetch: t$ } = eu(em),
        tF = tK && (null == tD || ("success" === tR && !tP)),
        tQ = tK ? tG : null,
        tB = tK && !tF && ("pending" === tR || tz),
        tW = tI?.installation?.team_id == null ? tI?.installation : null,
        tY = tN?.find((e) => e.id === e6)?.id ?? ""
      ;(e6 || tN?.length !== 1 || (tY = tN[0].id),
        eK[37] !== tI ? ((ep = (0, z.o)(tI)), (eK[37] = tI), (eK[38] = ep)) : (ep = eK[38]))
      let tH = ep,
        tL = tH?.teams_url ?? tI?.agent_user_chat_url
      eK[39] !== tH || eK[40] !== tI?.connections
        ? ((eh = tH ?? tI?.connections?.find(es)), (eK[39] = tH), (eK[40] = tI?.connections), (eK[41] = eh))
        : (eh = eK[41])
      let tV = eh,
        tJ = null != tV || tI?.agent_user_connected === !0,
        tZ = tW?.user_link_id ?? tV?.user_link_id ?? tY,
        tX = tN?.find((e) => e.id === tZ),
        t1 =
          null != tV &&
          !tI?.messaging_connection_available &&
          ((null != tN && null == tX) ||
            tX?.auth_status === "REAUTH_REQUIRED" ||
            tI?.personal_installation === "reconnect")
      function t0(e) {
        ;(0, z.o)(e) &&
          e8.current &&
          eV.get(b.chatGptAuthenticatedAccountId$) === eG &&
          eV.get(b.chatGptAuthenticatedUserId$) === ez &&
          (ts("connected"), eW())
      }
      let t2 = tI?.user_connections?.find((e) => e.link_id === tZ)
      null == e4 && t2?.suggested_display_name != null && e5(t2.suggested_display_name)
      let t3 = t2?.suggested_display_name ?? e4 ?? void 0,
        t6 = t3 ?? (tZ ? void 0 : tI?.user_connections?.find((e) => e.link_id === tN?.[0]?.id)?.suggested_display_name),
        t7 =
          !tJ &&
          !tU &&
          null != tN &&
          null != tW &&
          null == t2 &&
          tX?.auth_status !== "REAUTH_REQUIRED" &&
          tI?.personal_installation !== "reconnect",
        t4 = tE ? null != t2 && tX?.auth_status === "ACTIVE" : t2?.personal_installation_ready,
        t5 = null != tN && tN.length > 0 && (tN.length > 1 || (!!e6 && !tY)) && null == tV && null == tW,
        t8 = t5 && !tZ,
        t9 = null != tI && null != tN && !t8 && !t7 && !tU && !t4,
        {
          mutate: ne,
          isPending: nt,
          error: nn,
          variables: ns,
        } = (0, c.n)({
          mutationFn: async (e) => {
            let t,
              n,
              s = "messaging" === e,
              a = t3?.trim() || e4
            if (
              !e8.current ||
              eV.get(b.chatGptAuthenticatedAccountId$) !== eG ||
              eV.get(b.chatGptAuthenticatedUserId$) !== ez
            )
              throw new DOMException("Account changed", "AbortError")
            let i = s ? tI?.messaging_authorization_connector_id : tI?.authorization_connector_id
            if (!i) return
            if (
              (await Promise.all([e3.cancelQueries({ queryKey: tw }), e3.cancelQueries({ queryKey: tf.queryKey })]),
              !e8.current ||
                eV.get(b.chatGptAuthenticatedAccountId$) !== eG ||
                eV.get(b.chatGptAuthenticatedUserId$) !== ez)
            )
              throw new DOMException("Account changed", "AbortError")
            let o = s
                ? void 0
                : {
                    connectorId: i,
                    productSku: tE ? void 0 : "AEON",
                    oauthPresentation: "new-account" === e ? "popup" : void 0,
                  },
              l = {
                scope: eV,
                app: { id: i, name: "Microsoft Teams", installUrl: null },
                appConnectOptions: o,
                queryClient: e3,
                allowBrowserFallback: !1,
                onOAuthStarted: (n, s) => {
                  if (
                    !e8.current ||
                    eV.get(b.chatGptAuthenticatedAccountId$) !== eG ||
                    eV.get(b.chatGptAuthenticatedUserId$) !== ez
                  ) {
                    ;(s?.preventNavigation(), s?.preopenedPopup?.close())
                    return
                  }
                  ;(e3.invalidateQueries({ queryKey: tf.queryKey, refetchType: "none" }),
                    tr({ connectorId: i, attemptId: crypto.randomUUID() }))
                  let l = tc({
                    app: { id: i, name: "Microsoft Teams" },
                    appConnectOptions: o,
                    redirectUrl: n,
                    resumeTarget: {
                      kind: "return-to-location-state",
                      successState: {
                        orbitTeamsSetup: {
                          accountId: eG,
                          userId: ez,
                          threadId: eR,
                          ...(null != a ? { displayName: a } : {}),
                          ...(null != e4 ? { originalDisplayName: e4 } : {}),
                          ...("new-account" !== e && tZ ? { linkId: tZ } : {}),
                        },
                        ...("setup" === eL ? { orbitContactSetup: !0 } : {}),
                      },
                      failureState: {
                        orbitTeamsSetup: {
                          accountId: eG,
                          userId: ez,
                          threadId: eR,
                          ...(null != a ? { displayName: a } : {}),
                          ...(null != e4 ? { originalDisplayName: e4 } : {}),
                          ...("new-account" !== e && tZ ? { linkId: tZ } : {}),
                        },
                        ...("setup" === eL ? { orbitContactSetup: !0 } : {}),
                      },
                    },
                  })
                  "new-account" === e &&
                    null != l &&
                    (t = new Promise((e, t) => {
                      let a = tu(
                        n,
                        (n) => {
                          ;((e9.current = null),
                          tm({ oauthState: l }),
                          e8.current &&
                            eV.get(b.chatGptAuthenticatedAccountId$) === eG &&
                            eV.get(b.chatGptAuthenticatedUserId$) === ez)
                            ? (tr(null),
                              "success" === n.kind && (0, _.$)(n.appId) === (0, _.$)(i)
                                ? (e7(n.linkId ?? ""),
                                  Promise.all([
                                    e3.invalidateQueries({ queryKey: tf.queryKey }),
                                    e3.invalidateQueries({ queryKey: tw }),
                                  ]).then(() => e(), t))
                                : "cancelled" === n.kind
                                  ? e()
                                  : t(Error("Teams authorization failed")))
                            : e()
                        },
                        s?.preopenedPopup,
                      )
                      null == a
                        ? e()
                        : (s?.preventNavigation(),
                          (e9.current = () => {
                            ;(a(), tm({ oauthState: l }), e())
                          }))
                    }))
                },
                openInBrowser: en,
              }
            if (
              "failed" ===
              (n =
                "new-account" !== e && tZ && (!s || null != tX)
                  ? await (0, f.NY)({
                      ...l,
                      linkId: tZ,
                      requestedScopes: s
                        ? ["User.Read"]
                        : [
                            "User.Read",
                            "TeamsAppInstallation.ReadWriteAndConsentForUser",
                            "TeamsAppInstallation.ReadWriteAndConsentForTeam",
                            "TeamsAppInstallation.ReadWriteAndConsentForChat",
                          ],
                      fallbackUrl: "",
                    })
                  : await (0, f.CI)({ ...l, linkParams: { orbit_setup: !0 } })).kind
            )
              throw n.error ?? Error("Teams authorization could not be started")
            ;("connected-directly" === n.kind &&
              (await Promise.all([
                e3.invalidateQueries({ queryKey: tf.queryKey }),
                e3.invalidateQueries({ queryKey: tw }),
              ])),
              await t)
          },
        })
      eK[42] !== eG || eK[43] !== eH || eK[44] !== eV || eK[45] !== eR || eK[46] !== ez
        ? ((ef = async (e) => {
            let t = await eH.status(eR)
            if (eV.get(b.chatGptAuthenticatedAccountId$) !== eG || eV.get(b.chatGptAuthenticatedUserId$) !== ez)
              throw new DOMException("Account changed", "AbortError")
            let n = t.connections?.find((t) => t.binding_id === e)
            n && (await eH.disconnect(eR, n.binding_id, n.binding_version))
          }),
          (eK[42] = eG),
          (eK[43] = eH),
          (eK[44] = eV),
          (eK[45] = eR),
          (eK[46] = ez),
          (eK[47] = ef))
        : (ef = eK[47])
      let {
        mutate: na,
        isPending: ni,
        error: no,
      } = (0, c.n)({
        mutationFn: ef,
        onSuccess: () => {
          ;(tt(""),
            ts("idle"),
            to(null),
            nu(),
            e3.invalidateQueries({ queryKey: tw, exact: !0 }),
            e3.invalidateQueries({ queryKey: [...tw, "setup"] }))
        },
      })
      ;(eK[48] !== t0 || eK[49] !== tw || eK[50] !== eY || eK[51] !== eW || eK[52] !== e3 || eK[53] !== tv
        ? ((eg = (e) => {
            if (null == e) {
              ;(e3.invalidateQueries({ queryKey: tw }), e8.current && (eW(), eY()))
              return
            }
            ;(ts("submitted"), to(et), e3.setQueryData(tv, e), e3.setQueryData(tw, e), t0(e))
          }),
          (eK[48] = t0),
          (eK[49] = tw),
          (eK[50] = eY),
          (eK[51] = eW),
          (eK[52] = e3),
          (eK[53] = tv),
          (eK[54] = eg))
        : (eg = eK[54]),
        eK[55] !== tE || eK[56] !== tw || eK[57] !== e3 || eK[58] !== eV
          ? ((ey = (e) => {
              if (e instanceof O.fk && 429 === e.status) {
                let t = Date.now() + 6e4,
                  n = Math.min(e.retryAtMs ?? t, t)
                eV.set(H, tw, (e) => Math.max(e ?? 0, n))
              }
              tE || e3.invalidateQueries({ queryKey: tw })
            }),
            (eK[55] = tE),
            (eK[56] = tw),
            (eK[57] = e3),
            (eK[58] = eV),
            (eK[59] = ey))
          : (ey = eK[59]))
      let {
          mutate: nl,
          isPending: nr,
          error: nc,
          reset: nd,
        } = (0, c.n)({
          mutationKey: tw,
          mutationFn: async () => {
            if (eV.get(b.chatGptAuthenticatedAccountId$) !== eG || eV.get(b.chatGptAuthenticatedUserId$) !== ez)
              throw new DOMException("Account changed", "AbortError")
            if (tE) return tE(tI?.aeon_id, tZ)
            let e = tW?.install_attempt_id || te || crypto.randomUUID()
            return (
              tt(e),
              eV.set(H, tw, void 0),
              eH.install(eR, {
                target: "personal",
                user_link_id: tZ,
                install_attempt_id: e,
                display_name: t3?.trim() || e4,
              })
            )
          },
          onSuccess: eg,
          onError: ey,
        }),
        nu = nd,
        nm = nt || tp || ni || nr,
        np = nm || !th || tF || tB || null != tQ,
        nh = !tJ && (null != tx || "unavailable" === eZ.status),
        nf = null != tC || nh || null != tQ,
        ng = !tJ && !tU && tW?.status === "accepted",
        ny = !tU && tW?.status === "unknown",
        n_ =
          nf ||
          (null != tV && !t1 && !tH) ||
          t7 ||
          tU ||
          (!tJ && null != tW && "pending" !== tW.status && !ng && !ny && !t9),
        nx = nh || (tC ?? tQ ?? nc ?? nn ?? no),
        nA = ng && !t9 && (null != ti || tk),
        nb = n_ && (tk || t_ || e0 || tz),
        nw = nm || tI?.agent_user_connected === !0 || tM || !th || nb || tF || tB || (nA && !nf)
      ;(!nf && t1 && (nw = nw || !tI?.messaging_authorization_connector_id),
        nf ||
          ng ||
          tJ ||
          tU ||
          (nw =
            (nw = nw || null == tI || null == tN || (!t9 && (tk || t_))) ||
            (t9 ? !tI?.authorization_connector_id : !tZ && !t7)),
        eK[60] === Symbol.for("react.memo_cache_sentinel")
          ? ((e_ = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.error",
              defaultMessage: "Could not complete the request. Try again",
              description: "An installation or connection request failed and can be retried",
            })),
            (eK[60] = e_))
          : (e_ = eK[60]))
      let nT = e_
      if (tC || nh || tQ) {
        let e
        ;(eK[61] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.loadFailed",
              defaultMessage: "Could not load Teams setup. Try again",
              description: "The request to load this dot's Teams setup failed",
            })),
            (eK[61] = e))
          : (e = eK[61]),
          (nT = e))
      } else if (tj) {
        let e
        ;(eK[62] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.rateLimited",
              defaultMessage:
                "Microsoft Teams is receiving too many app-creation requests. Please wait before trying again",
              description:
                "Microsoft Teams has temporarily limited app creation. Asks the user to wait before retrying without promising a fixed delay.",
            })),
            (eK[62] = e))
          : (e = eK[62]),
          (nT = e))
      } else if (ny) {
        let e
        ;(eK[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.retryIncomplete",
              defaultMessage: "We couldn’t finish connecting your {dot} to Teams",
              description: "Shown when Teams setup did not complete. {dot} is the user's agent; keep dot untranslated.",
              values: { dot: "dot" },
            })),
            (eK[63] = e))
          : (e = eK[63]),
          (nT = e))
      } else if (nc) {
        let e
        ;(eK[64] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.userUploadFailed",
              defaultMessage: "Could not confirm the installation for your account. Check Teams before trying again",
              description: "The user-targeted app upload failed or returned no confirmed result",
            })),
            (eK[64] = e))
          : (e = eK[64]),
          (nT = e))
      } else if (
        tF ||
        ("messaging" !== ns &&
          nn instanceof O.fk &&
          403 === nn.status &&
          (0, K.d)(nn)?.message === "Selected OAuth action is disabled for this workspace")
      ) {
        let e
        ;(eK[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.installationDisabledByAdmin.dot",
              defaultMessage:
                "Your ChatGPT workspace admin hasn't enabled dot installation in Teams. Contact them to enable it.",
              description:
                "Error in the Add to Teams dialog after Continue with Microsoft is rejected because the ChatGPT workspace administrator disabled a required installation action. Asks the user to contact their ChatGPT admin, not their Microsoft administrator. No placeholders. A dot is an always-on agent; use dot as a common noun and preserve user-chosen names. Keep the singular term dot untranslated.",
            })),
            (eK[65] = e))
          : (e = eK[65]),
          (nT = e))
      } else if (tU) {
        let e
        ;(eK[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.installationFailed",
              defaultMessage: "Teams setup is incomplete. Check its status again in a moment",
              description:
                "The saved personal Teams installation is missing required information. Checking its status refreshes setup without uploading again or reconnecting Microsoft.",
            })),
            (eK[66] = e))
          : (e = eK[66]),
          (nT = e))
      }
      eK[67] === Symbol.for("react.memo_cache_sentinel")
        ? ((ex = (0, s.jsx)(h.A, {
            id: "restricted.aeon.teams.setup.installForUser",
            defaultMessage: "Install for me",
            description: "Uploads this dot to the signed-in user's personal Microsoft Teams apps",
          })),
          (eK[67] = ex))
        : (ex = eK[67])
      let nj = ex
      if (
        (t9 &&
          (nj = tZ
            ? (0, s.jsx)(h.A, {
                id: "restricted.aeon.teams.setup.reauthorizeInstallation",
                defaultMessage: "Reconnect with Microsoft",
                description:
                  "Reauthorizes the selected Microsoft Teams account with permission to install the dot for the user",
              })
            : (0, s.jsx)(h.A, {
                id: "restricted.aeon.teams.setup.authorizeInstallation",
                defaultMessage: "Continue with Microsoft",
                description: "Opens Microsoft authorization to install the dot in the user's personal Teams apps",
              })),
        "setup" === eL)
      ) {
        let e
        ;(eK[68] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.add",
              defaultMessage: "Add to Teams",
              description: "Opens Microsoft Teams installation for this dot",
            })),
            (eK[68] = e))
          : (e = eK[68]),
          (nj = e))
      }
      if (t1) {
        if ("dialog" === eL) {
          let e
          ;(eK[69] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(h.A, {
                id: "restricted.aeon.teams.setup.reconnect",
                defaultMessage: "Reconnect Microsoft Teams",
                description:
                  "Reconnects the normal Microsoft Teams account so the installed dot can identify its owner's messages",
              })),
              (eK[69] = e))
            : (e = eK[69]),
            (nj = e))
        }
      } else if (ng && !t9) {
        let e
        ;(eK[70] !== nA
          ? ((e = nA
              ? (0, s.jsx)(h.A, {
                  id: "restricted.aeon.teams.setup.confirmingInstallation",
                  defaultMessage: "Finishing setup…",
                  description: "Shown while waiting for Teams to confirm the personal app installation",
                })
              : (0, s.jsx)(h.A, {
                  id: "restricted.aeon.teams.setup.checkPersonalInstallation",
                  defaultMessage: "Check status",
                  description:
                    "Checks whether Teams has confirmed the personal app installation without uploading the app again",
                })),
            (eK[70] = nA),
            (eK[71] = e))
          : (e = eK[71]),
          (nj = e))
      }
      if (n_) {
        let e
        ;(eK[72] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.checkSetupStatus",
              defaultMessage: "Check status",
              description: "Refreshes Teams setup and connected accounts without uploading the app again",
            })),
            (eK[72] = e))
          : (e = eK[72]),
          (nj = e))
      }
      if (nh || (ny && !t9)) {
        let e
        ;(eK[73] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.refresh",
              defaultMessage: "Try again",
              description: "Retries loading the Teams setup",
            })),
            (eK[73] = e))
          : (e = eK[73]),
          (nj = e))
      }
      if ("setup" === eL && (nt || tp)) {
        let e
        ;(eK[74] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.connecting",
              defaultMessage: "Connecting…",
              description: "Button status while connecting the Microsoft account for the dot's Teams setup",
            })),
            (eK[74] = e))
          : (e = eK[74]),
          (nj = e))
      } else if ("setup" === eL && nr) {
        let e
        ;(eK[75] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.installing",
              defaultMessage: "Adding to Teams…",
              description: "Button status while submitting the dot's personal Teams installation",
            })),
            (eK[75] = e))
          : (e = eK[75]),
          (nj = e))
      }
      eK[76] === Symbol.for("react.memo_cache_sentinel")
        ? ((eA = (0, s.jsx)(h.A, {
            id: "restricted.aeon.teams.setup.cancel",
            defaultMessage: "Cancel",
            description: "Closes Teams setup without starting another installation",
          })),
          (eK[76] = eA))
        : (eA = eK[76])
      let nM = eA
      if (t1) {
        let e
        ;(eK[77] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.notNow",
              defaultMessage: "Not now",
              description: "Closes the Microsoft Teams reconnect dialog without reconnecting the account",
            })),
            (eK[77] = e))
          : (e = eK[77]),
          (nM = e))
      } else if (ng) {
        let e
        ;(eK[78] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.close",
              defaultMessage: "Close",
              description: "Closes the dialog while Teams finishes an installation already submitted",
            })),
            (eK[78] = e))
          : (e = eK[78]),
          (nM = e))
      }
      eK[79] !== tf.queryKey ||
      eK[80] !== nh ||
      eK[81] !== eZ.status ||
      eK[82] !== tE ||
      eK[83] !== ne ||
      eK[84] !== nw ||
      eK[85] !== tw ||
      eK[86] !== nl ||
      eK[87] !== tQ ||
      eK[88] !== t9 ||
      eK[89] !== t1 ||
      eK[90] !== ng ||
      eK[91] !== e3 ||
      eK[92] !== tH ||
      eK[93] !== e2 ||
      eK[94] !== t$ ||
      eK[95] !== n_
        ? ((eb = (e) => {
            ;(e.preventDefault(),
              !nw &&
                (!tH || n_) &&
                (n_ || (ng && !t9)
                  ? (nh && "unavailable" === eZ.status && e2(),
                    tQ && t$(),
                    e3.invalidateQueries({ queryKey: tf.queryKey }),
                    e3.invalidateQueries({ queryKey: tw }))
                  : t1
                    ? ne("messaging")
                    : t9
                      ? ne(tE ? "messaging" : "personal")
                      : e3.isMutating({ mutationKey: tw, exact: !0 }) || nl()))
          }),
          (eK[79] = tf.queryKey),
          (eK[80] = nh),
          (eK[81] = eZ.status),
          (eK[82] = tE),
          (eK[83] = ne),
          (eK[84] = nw),
          (eK[85] = tw),
          (eK[86] = nl),
          (eK[87] = tQ),
          (eK[88] = t9),
          (eK[89] = t1),
          (eK[90] = ng),
          (eK[91] = e3),
          (eK[92] = tH),
          (eK[93] = e2),
          (eK[94] = t$),
          (eK[95] = n_),
          (eK[96] = eb))
        : (eb = eK[96])
      let nS = eb
      eK[97] === Symbol.for("react.memo_cache_sentinel")
        ? ((ew = (0, s.jsx)(h.A, {
            id: "restricted.aeon.teams.setup.personalSubtitle.dot",
            defaultMessage: "Add your dot to your personal Teams apps",
            description:
              "Explains that the dialog installs a dot for the owner in Microsoft Teams. A dot is an always-on agent; use dot as a common noun and preserve user-chosen names. Keep the singular term dot untranslated.",
          })),
          (eK[97] = ew))
        : (ew = eK[97])
      let nv = ew
      if (t1) {
        let e
        ;(eK[98] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.reconnectDescription.dot",
              defaultMessage: "Your dot is still installed. Reconnect your Teams account to keep chatting with it.",
              description:
                "Explains that reconnecting the owner's Microsoft Teams account restores messaging without reinstalling the dot. A dot is an always-on agent; use dot as a common noun and preserve user-chosen names. Keep the singular term dot untranslated.",
            })),
            (eK[98] = e))
          : (e = eK[98]),
          (nv = e))
      } else if ("setup" === eL && tN?.length === 0) {
        let e
        ;(eK[99] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.personalAuthorization.dot",
              defaultMessage: "Sign in to Microsoft to install your dot",
              description:
                "Explains that the user needs to sign in to Microsoft before installing their dot in their personal Teams apps. A dot is an always-on agent; use dot as a common noun and preserve user-chosen names. Keep the singular term dot untranslated.",
            })),
            (eK[99] = e))
          : (e = eK[99]),
          (nv = e))
      } else if ("setup" === eL) {
        let e
        ;(eK[100] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.handleAccountDescription.dot",
              defaultMessage: "Choose the account to add your dot to Teams",
              description:
                "Prompts the user to select the Microsoft account where their dot will be installed. A dot is an always-on agent. Keep the singular term dot untranslated.",
            })),
            (eK[100] = e))
          : (e = eK[100]),
          (nv = e))
      }
      let nI = th && (null == tI || (!tJ && null == tN) || (tB && "pending" === tR)) && !nf
      ;(eK[101] === Symbol.for("react.memo_cache_sentinel")
        ? ((eT = (0, s.jsx)(h.A, {
            id: "restricted.aeon.teams.setup.selectAccount",
            defaultMessage: "Select account",
            description: "Prompts the user to choose the Microsoft Teams account where the dot will be installed",
          })),
          (eK[101] = eT))
        : (eT = eK[101]),
        eK[102] !== nu
          ? ((ej = (e) => {
              ;(nu(), tt(""), ts("idle"), to(null), e7(e), e5(void 0))
            }),
            (eK[102] = nu),
            (eK[103] = ej))
          : (ej = eK[103]),
        eK[104] !== ne ? ((eM = () => ne("new-account")), (eK[104] = ne), (eK[105] = eM)) : (eM = eK[105]))
      let nk = (0, s.jsx)(
          er,
          {
            mode: "setup",
            label: eT,
            value: tZ,
            items: (tN ?? []).map(ee),
            disabled: np || nI || null != tW,
            addAccountDisabled: !tI?.authorization_connector_id,
            onChange: ej,
            onAddAccount: eM,
          },
          "account",
        ),
        nC =
          "setup" === eL &&
          (!th ||
            tj ||
            tF ||
            tU ||
            ny ||
            ng ||
            tJ ||
            t1 ||
            tN?.length === 0 ||
            (null != nx && (null == tI || null == tN))),
        nN = "connect"
      ;(nx || tj || tF || tU || ny
        ? (nN = "failed")
        : t7 || t1
          ? (nN = "reconnect")
          : ng
            ? (nN = "pending")
            : tJ && (nN = "installed"),
        eK[106] !== tE || eK[107] !== nT || eK[108] !== nc
          ? ((eS = tE && nc ? ((0, T.pZ)(nc) ?? nT) : null),
            (eK[106] = tE),
            (eK[107] = nT),
            (eK[108] = nc),
            (eK[109] = eS))
          : (eS = eK[109]))
      let nq = eS,
        nE = "setup" === eL && !nC && nq,
        nU =
          !t1 || nx || t7
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  th
                    ? null
                    : (0, s.jsx)("p", {
                        role: "alert",
                        className: "text-sm text-secondary select-none",
                        children: (0, s.jsx)(h.A, {
                          id: "restricted.aeon.teams.setup.accountRequired.dot",
                          defaultMessage: "Sign in and select a ChatGPT workspace before adding your dot to Teams",
                          description:
                            "Teams setup needs a signed-in ChatGPT user and workspace. A dot is an always-on agent; use dot as a common noun and preserve user-chosen names. Keep the singular term dot untranslated.",
                        }),
                      }),
                  nI && "setup" !== eL
                    ? (0, s.jsx)("p", {
                        role: "status",
                        className: "text-sm text-secondary select-none",
                        children: (0, s.jsx)(h.A, {
                          id: "restricted.aeon.teams.setup.loading",
                          defaultMessage: "Loading Teams setup…",
                          description: "Shown while loading the dot's Teams installation and account information",
                        }),
                      })
                    : null,
                  "failed" !== nN || nE
                    ? null
                    : (0, s.jsx)("p", {
                        role: "alert",
                        className: nC ? "text-sm text-secondary select-none" : "text-sm text-danger select-none",
                        children: nq ?? nT,
                      }),
                  t7
                    ? (0, s.jsx)("p", {
                        role: "alert",
                        className: nC ? "text-sm text-secondary select-none" : "text-sm text-danger select-none",
                        children: (0, s.jsx)(h.A, {
                          id: "restricted.aeon.teams.setup.installationAccountConnectionMissing",
                          defaultMessage: "No connected Microsoft account matches this Teams installation",
                          description:
                            "The installation has a saved Microsoft user and tenant, but no currently connected account matches both. This does not mean authentication failed.",
                        }),
                      })
                    : null,
                  ng
                    ? (0, s.jsx)("p", {
                        role: "status",
                        className: "text-sm text-secondary select-none",
                        children: nA
                          ? (0, s.jsx)(h.A, {
                              id: "restricted.aeon.teams.setup.waitingForPersonalInstallation",
                              defaultMessage:
                                "Microsoft accepted the upload. Waiting for Teams to confirm the installation",
                              description:
                                "The personal app upload was accepted and the dialog is checking for the Teams installation callback",
                            })
                          : (0, s.jsx)(h.A, {
                              id: "restricted.aeon.teams.setup.personalInstallationPending",
                              defaultMessage:
                                "Microsoft accepted the upload but has not confirmed the installation yet. Check its status in a moment",
                              description:
                                "Automatic checks have stopped while the personal app installation is still awaiting confirmation; the user can check again",
                            }),
                      })
                    : null,
                  "setup" === eL && !nC && (nI || (null != tI && null != tN))
                    ? (0, s.jsx)("div", {
                        className: "flex w-full min-w-0 flex-wrap items-center justify-center gap-2",
                        children:
                          null != t6
                            ? (0, s.jsx)(h.A, {
                                id: "restricted.aeon.teams.setup.identityInAccountGroup",
                                defaultMessage:
                                  "{identity} <destination><preposition>in</preposition> {account}</destination>",
                                description:
                                  "Explains where the dot is added in Microsoft Teams. identity is the fixed public Teams handle; account is a selectable Microsoft account. destination keeps the connecting word with the account, and preposition styles that word. Translators can reorder the identity and destination.",
                                values: {
                                  identity: (0, s.jsx)(
                                    N.pd,
                                    {
                                      variant: "inline",
                                      autoSize: !0,
                                      readOnly: !0,
                                      value: t6,
                                      "aria-label": eJ.formatMessage({
                                        id: "restricted.aeon.teams.setup.handle.label",
                                        defaultMessage: "Teams handle",
                                        description:
                                          "Accessible label for the read-only public Teams handle supplied by the selected Microsoft account",
                                      }),
                                    },
                                    "identity",
                                  ),
                                  destination: X,
                                  preposition: Z,
                                  account: nk,
                                },
                              })
                            : nk,
                      })
                    : null,
                  "dialog" !== eL || null == tN || ng || tU || tJ
                    ? null
                    : (0, s.jsxs)(s.Fragment, {
                        children: [
                          t5
                            ? (0, s.jsx)(er, {
                                label: (0, s.jsx)(h.A, {
                                  id: "restricted.aeon.teams.setup.account",
                                  defaultMessage: "Teams account",
                                  description: "Selects which saved Microsoft account will install the dot",
                                }),
                                value: tY,
                                items: tN.map(J) ?? [],
                                disabled: np,
                                addAccountDisabled: !tI?.authorization_connector_id,
                                onChange: (e) => {
                                  ;(nu(), tt(""), ts("idle"), to(null), e7(e), e5(void 0))
                                },
                                onAddAccount: () => ne("new-account"),
                              })
                            : null,
                          t5 || (null == tX && null == t2)
                            ? null
                            : (0, s.jsxs)("div", {
                                className: "flex min-w-0 items-center justify-between gap-3",
                                children: [
                                  (0, s.jsx)("p", {
                                    className: "min-w-0 truncate text-sm text-secondary select-text",
                                    children: tX?.name ?? t2?.name,
                                  }),
                                  null == tW
                                    ? (0, s.jsx)(j.$, {
                                        type: "button",
                                        color: "ghostSecondary",
                                        disabled: nm || !th || !tI?.authorization_connector_id,
                                        onClick: () => ne("new-account"),
                                        children: (0, s.jsx)(h.A, {
                                          id: "restricted.aeon.teams.setup.useAnotherAccount",
                                          defaultMessage: "Use another account",
                                          description:
                                            "Opens Microsoft sign-in to connect a different Teams account for the dot installation instead of reconnecting the saved account",
                                        }),
                                      })
                                    : null,
                                ],
                              }),
                        ],
                      }),
                  tJ && !t1
                    ? (0, s.jsx)("p", {
                        role: "status",
                        className: "text-sm text-secondary select-none",
                        children: (0, s.jsx)(h.A, {
                          id: "restricted.aeon.teams.setup.channelInstalled.dot",
                          defaultMessage: "Your dot is installed in Teams",
                          description:
                            "Confirms this dot has an installed Microsoft Teams connection. A dot is an always-on agent; use dot as a common noun and preserve user-chosen names. Keep the singular term dot untranslated.",
                        }),
                      })
                    : null,
                ],
              })
            : null,
        nD = null
      if (tV) {
        let e,
          t,
          n,
          a = "setup" === eL ? "detailAction" : "dialogAction"
        ;(eK[110] !== tV.binding_id || eK[111] !== na
          ? ((e = () => na(tV.binding_id)), (eK[110] = tV.binding_id), (eK[111] = na), (eK[112] = e))
          : (e = eK[112]),
          eK[113] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(h.A, {
                id: "restricted.aeon.teams.setup.disconnect",
                defaultMessage: "Disconnect",
                description: "Removes this dot's Teams connection without uninstalling its Teams app",
              })),
              (eK[113] = t))
            : (t = eK[113]),
          eK[114] !== nm || eK[115] !== a || eK[116] !== e
            ? ((n = (0, s.jsx)(j.$, {
                type: "button",
                color: "ghostSecondary",
                size: a,
                disabled: nm,
                onClick: e,
                children: t,
              })),
              (eK[114] = nm),
              (eK[115] = a),
              (eK[116] = e),
              (eK[117] = n))
            : (n = eK[117]),
          (nD = n))
      } else if ("dialog" === eL) {
        let e
        ;(eK[118] !== nm || eK[119] !== nM || eK[120] !== eY
          ? ((e = (0, s.jsx)(j.$, {
              type: "button",
              color: "secondary",
              size: "dialogAction",
              disabled: nm,
              onClick: eY,
              children: nM,
            })),
            (eK[118] = nm),
            (eK[119] = nM),
            (eK[120] = eY),
            (eK[121] = e))
          : (e = eK[121]),
          (nD = e))
      }
      eK[122] !== nm ||
      eK[123] !== nw ||
      eK[124] !== nA ||
      eK[125] !== tF ||
      eK[126] !== eL ||
      eK[127] !== nf ||
      eK[128] !== nb ||
      eK[129] !== tI?.agent_user_connected ||
      eK[130] !== nj
        ? ((ev =
            tI?.agent_user_connected || (tF && "setup" !== eL)
              ? null
              : (0, s.jsx)(j.$, {
                  type: "submit",
                  color: "primary",
                  size: "setup" === eL ? "detailAction" : "dialogAction",
                  loading: nm || nb || (nA && !nf),
                  disabled: nw,
                  children: nj,
                })),
          (eK[122] = nm),
          (eK[123] = nw),
          (eK[124] = nA),
          (eK[125] = tF),
          (eK[126] = eL),
          (eK[127] = nf),
          (eK[128] = nb),
          (eK[129] = tI?.agent_user_connected),
          (eK[130] = nj),
          (eK[131] = ev))
        : (ev = eK[131])
      let nK = ev
      if ("setup" === eL) {
        let e, t, n, a
        if (nI && !nm && null == tW) {
          let e
          return (
            eK[132] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(P.MV, {})), (eK[132] = e))
              : (e = eK[132]),
            e
          )
        }
        if (tL && !n_) {
          let e, t, n, a, i, o
          eK[133] !== eR ? ((e = (0, u.JXB)(eR)), (eK[133] = eR), (eK[134] = e)) : (e = eK[134])
          let l = null == ty || null == tA ? void 0 : (0, U.Yv)(ty, y.oI, tA)
          ;(eK[135] !== tf.queryKey || eK[136] !== e3
            ? ((t = () => e3.invalidateQueries({ queryKey: tf.queryKey })),
              (eK[135] = tf.queryKey),
              (eK[136] = e3),
              (eK[137] = t))
            : (t = eK[137]),
            eK[138] !== tL || eK[139] !== e || eK[140] !== l || eK[141] !== t
              ? ((n = { conversationId: e, destination: tL, sharePointConnected: l, onConnected: t }),
                (eK[138] = tL),
                (eK[139] = e),
                (eK[140] = l),
                (eK[141] = t),
                (eK[142] = n))
              : (n = eK[142]))
          let r = n
          eK[143] !== t3 || eK[144] !== e4 || eK[145] !== ta || eK[146] !== tH || eK[147] !== r
            ? ((a =
                null == tH
                  ? (0, s.jsx)(Y, { ...r })
                  : (0, s.jsx)(Y, { ...r, recipientName: tH.orbit_display_name ?? (ta ? t3?.trim() || e4 : null) })),
              (eK[143] = t3),
              (eK[144] = e4),
              (eK[145] = ta),
              (eK[146] = tH),
              (eK[147] = r),
              (eK[148] = a))
            : (a = eK[148])
          let c = a
          return (
            eK[149] !== nT || eK[150] !== nx
              ? ((i = nx
                  ? (0, s.jsx)("p", { role: "alert", className: "text-sm text-danger select-none", children: nT })
                  : null),
                (eK[149] = nT),
                (eK[150] = nx),
                (eK[151] = i))
              : (i = eK[151]),
            eK[152] !== c || eK[153] !== i
              ? ((o = (0, s.jsxs)("div", { className: "flex flex-col gap-6", children: [c, i] })),
                (eK[152] = c),
                (eK[153] = i),
                (eK[154] = o))
              : (o = eK[154]),
            o
          )
        }
        if ("pending" === nN) {
          let t
          ;(eK[155] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)(k.I, { asset: i.G, className: "text-info" })), (eK[155] = t))
            : (t = eK[155]),
            (e = t))
        } else if ("connect" === nN || "reconnect" === nN) {
          let t
          ;(eK[156] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)("img", { src: E, alt: "", width: 32, height: 32 })), (eK[156] = t))
            : (t = eK[156]),
            (e = t))
        }
        eK[157] !== nv || eK[158] !== nE || eK[159] !== t7 || eK[160] !== tU
          ? ((t =
              tU || t7
                ? null
                : (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)("p", { className: "text-sm text-secondary select-none", children: nv }),
                      nE &&
                        (0, s.jsx)("p", {
                          role: "alert",
                          className: "mt-3 text-sm text-danger select-none",
                          children: nE,
                        }),
                    ],
                  })),
            (eK[157] = nv),
            (eK[158] = nE),
            (eK[159] = t7),
            (eK[160] = tU),
            (eK[161] = t))
          : (t = eK[161])
        let o = t
        return (
          eK[162] !== nv ||
          eK[163] !== nN ||
          eK[164] !== e ||
          eK[165] !== o ||
          eK[166] !== th ||
          eK[167] !== nD ||
          eK[168] !== nC ||
          eK[169] !== nU
            ? ((n = nC
                ? (0, s.jsxs)(s.Fragment, {
                    children: [
                      (0, s.jsx)(P.mz, {
                        icon: e,
                        title: (0, s.jsx)(h.A, {
                          id: "restricted.aeon.teams.setup.emptyStateTitle",
                          defaultMessage:
                            "{state, select, failed {Couldn’t set up Teams} reconnect {Reconnect Teams} pending {Waiting for Teams} installed {Teams is installed} other {Connect Teams}}",
                          description: "Heading above the explanation in an empty Teams contact setup card",
                          values: { state: nN },
                        }),
                        description: (0, s.jsxs)("div", {
                          className: "flex flex-col gap-3",
                          children: [nU, th && "connect" === nN ? nv : null],
                        }),
                      }),
                      nD,
                    ],
                  })
                : (0, s.jsxs)(P.kQ, { description: o, children: [nU, nD] })),
              (eK[162] = nv),
              (eK[163] = nN),
              (eK[164] = e),
              (eK[165] = o),
              (eK[166] = th),
              (eK[167] = nD),
              (eK[168] = nC),
              (eK[169] = nU),
              (eK[170] = n))
            : (n = eK[170]),
          eK[171] !== nS || eK[172] !== nI || eK[173] !== nK || eK[174] !== n
            ? ((a = (0, s.jsxs)("form", {
                className: "flex flex-col gap-6",
                "aria-busy": nI,
                onSubmit: nS,
                children: [n, nK],
              })),
              (eK[171] = nS),
              (eK[172] = nI),
              (eK[173] = nK),
              (eK[174] = n),
              (eK[175] = a))
            : (a = eK[175]),
          a
        )
      }
      return (
        eK[176] !== eY
          ? ((eI = (e) => {
              e || eY()
            }),
            (eK[176] = eY),
            (eK[177] = eI))
          : (eI = eK[177]),
        eK[178] !== t1
          ? ((ek = (0, s.jsx)(M.L3, {
              children: t1
                ? (0, s.jsx)(h.A, {
                    id: "restricted.aeon.teams.setup.reconnectTitle",
                    defaultMessage: "Reconnect Microsoft Teams",
                    description:
                      "Title shown when an installed dot needs its owner's Microsoft Teams account to be reconnected",
                  })
                : (0, s.jsx)(h.A, {
                    id: "restricted.aeon.teams.setup.title",
                    defaultMessage: "Add to Teams",
                    description: "Title of the Microsoft Teams installation dialog for a dot",
                  }),
            })),
            (eK[178] = t1),
            (eK[179] = ek))
          : (ek = eK[179]),
        eK[180] !== nv
          ? ((eC = (0, s.jsx)(M.rr, { className: "select-none", children: nv })), (eK[180] = nv), (eK[181] = eC))
          : (eC = eK[181]),
        eK[182] !== ek || eK[183] !== eC
          ? ((eN = (0, s.jsx)(S.OO, { children: (0, s.jsx)(S.c7, { title: ek, subtitle: eC }) })),
            (eK[182] = ek),
            (eK[183] = eC),
            (eK[184] = eN))
          : (eN = eK[184]),
        eK[185] !== nU
          ? ((eq = null == nU ? null : (0, s.jsx)(S.OO, { className: "gap-3", children: nU })),
            (eK[185] = nU),
            (eK[186] = eq))
          : (eq = eK[186]),
        eK[187] !== nK || eK[188] !== nD
          ? ((eE = (0, s.jsx)(S.OO, { children: (0, s.jsxs)(S.Es, { expandSingleButton: !1, children: [nD, nK] }) })),
            (eK[187] = nK),
            (eK[188] = nD),
            (eK[189] = eE))
          : (eE = eK[189]),
        eK[190] !== nS || eK[191] !== eN || eK[192] !== eq || eK[193] !== eE
          ? ((eU = (0, s.jsxs)(S.R4, { as: "form", onSubmit: nS, children: [eN, eq, eE] })),
            (eK[190] = nS),
            (eK[191] = eN),
            (eK[192] = eq),
            (eK[193] = eE),
            (eK[194] = eU))
          : (eU = eK[194]),
        eK[195] !== eI || eK[196] !== eU
          ? ((eD = (0, s.jsx)(M.lG, { open: !0, size: "compact", onOpenChange: eI, children: eU })),
            (eK[195] = eI),
            (eK[196] = eU),
            (eK[197] = eD))
          : (eD = eK[197]),
        eD
      )
    }
    function J(e) {
      return { id: e.id, display_name: e.name }
    }
    function Z(e) {
      return (0, s.jsx)("span", { className: "text-heading-lg text-tertiary select-none", children: e }, "preposition")
    }
    function X(e) {
      return (0, s.jsx)(
        "span",
        { className: "inline-flex max-w-full min-w-0 items-center gap-2", children: e },
        "destination",
      )
    }
    function ee(e) {
      return { id: e.id, display_name: e.name }
    }
    function et(e) {
      return (e ?? 0) + 1
    }
    function en(e) {
      ;(0, I.E0)({
        disposition: (0, q.x)({ browser: !0 }) ? "current-tab" : void 0,
        href: e,
        initiator: "side_panel_menu",
        openTarget: "external-browser",
      })
    }
    function es(e) {
      return null == e.team_id && e.personal_chat_connected
    }
    function ea(e) {
      return (
        "DISABLED_BY_ADMIN" !== e.status &&
        R.x9.every((t) => e.actions.some((e) => e.name === t && !1 !== e.is_enabled))
      )
    }
    function ei(e) {
      return { id: e.link_id, name: e.name, auth_status: "ACTIVE" }
    }
    function eo(e) {
      return e.personal_chat_connected
    }
    function el(e) {
      return e.personal_chat_connected
    }
    function er(e) {
      let t,
        n,
        i,
        o,
        l,
        r,
        c,
        d,
        u,
        p,
        f,
        g,
        y,
        _,
        x = (0, a.c)(41),
        { label: A, value: b, items: w, disabled: T, addAccountDisabled: M, mode: S, onChange: I, onAddAccount: k } = e,
        N = void 0 === S ? "dialog" : S,
        q = (0, m.useId)(),
        U = "setup" === N ? "max-w-full min-w-0" : "min-w-0 flex-1"
      x[0] !== A || x[1] !== q
        ? ((t = (0, s.jsx)("span", { id: q, className: "sr-only", children: A })), (x[0] = A), (x[1] = q), (x[2] = t))
        : (t = x[2])
      let D = "setup" === N ? "max-w-full" : "w-full justify-between",
        K = "setup" === N ? "settingsSelect" : "dialogAction"
      return (
        x[3] !== N
          ? ((n = "setup" === N ? (0, s.jsx)("img", { src: E, alt: "", width: 16, height: 16 }) : null),
            (x[3] = N),
            (x[4] = n))
          : (n = x[4]),
        x[5] !== w || x[6] !== A || x[7] !== N || x[8] !== b
          ? ((i = w.find((e) => e.id === b)?.display_name || ("setup" === N ? A : b || A)),
            (x[5] = w),
            (x[6] = A),
            (x[7] = N),
            (x[8] = b),
            (x[9] = i))
          : (i = x[9]),
        x[10] !== i
          ? ((o = (0, s.jsx)("span", { className: "truncate", children: i })), (x[10] = i), (x[11] = o))
          : (o = x[11]),
        x[12] !== n || x[13] !== o
          ? ((l = (0, s.jsxs)("span", { className: "flex min-w-0 flex-1 items-center gap-2", children: [n, o] })),
            (x[12] = n),
            (x[13] = o),
            (x[14] = l))
          : (l = x[14]),
        x[15] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, s.jsx)(C.Aq_, {})), (x[15] = r)) : (r = x[15]),
        x[16] !== T || x[17] !== q || x[18] !== D || x[19] !== K || x[20] !== l
          ? ((c = (0, s.jsxs)(j.$, {
              className: D,
              "aria-labelledby": q,
              allowShrink: !0,
              color: "outlineSurface",
              type: "button",
              size: K,
              disabled: T,
              children: [l, r],
            })),
            (x[16] = T),
            (x[17] = q),
            (x[18] = D),
            (x[19] = K),
            (x[20] = l),
            (x[21] = c))
          : (c = x[21]),
        x[22] !== w ? ((d = w.map(ec)), (x[22] = w), (x[23] = d)) : (d = x[23]),
        x[24] !== I || x[25] !== d || x[26] !== b
          ? ((u = (0, s.jsx)(v.ms.RadioGroup, { value: b, onValueChange: I, children: d })),
            (x[24] = I),
            (x[25] = d),
            (x[26] = b),
            (x[27] = u))
          : (u = x[27]),
        x[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, s.jsx)(v.ms.Separator, {})), (x[28] = p))
          : (p = x[28]),
        x[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, s.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.addAnotherAccount",
              defaultMessage: "Add another account",
              description: "Opens Microsoft sign-in to add a Teams account that is not in the list of saved accounts",
            })),
            (x[29] = f))
          : (f = x[29]),
        x[30] !== M || x[31] !== k
          ? ((g = (0, s.jsx)(v.ms.Item, { disabled: M, onSelect: k, children: f })),
            (x[30] = M),
            (x[31] = k),
            (x[32] = g))
          : (g = x[32]),
        x[33] !== c || x[34] !== u || x[35] !== g
          ? ((y = (0, s.jsxs)(v.Ab, { align: "start", contentWidth: "menu", triggerButton: c, children: [u, p, g] })),
            (x[33] = c),
            (x[34] = u),
            (x[35] = g),
            (x[36] = y))
          : (y = x[36]),
        x[37] !== y || x[38] !== U || x[39] !== t
          ? ((_ = (0, s.jsxs)("div", { className: U, children: [t, y] })),
            (x[37] = y),
            (x[38] = U),
            (x[39] = t),
            (x[40] = _))
          : (_ = x[40]),
        _
      )
    }
    function ec(e) {
      return (0, s.jsx)(v.ms.RadioItem, { value: e.id, children: e.display_name }, e.id)
    }
  },
  MX3C(e, t, n) {
    var s = n("zTeN"),
      a = n("ASxG"),
      i = n("hOO0"),
      o = n("OWtl"),
      l = n("kpIY"),
      r = n("Nwp9")
    let c = "selected-plugin-links-v1",
      d = a.record(a.string(), a.string().nullable().catch(null)).catch({}),
      u = (0, r.m3)(c, {}, { coerceStoredValue: (e) => d.parse(e) }),
      m = (0, s.i1)(o.u, (e, { get: t }) => t(u)[p(e)] ?? null)
    function p({ accountId: e, userId: t, appId: n }) {
      return JSON.stringify([e, t, n])
    }
    n.d(
      t,
      {},
      {
        C5: m,
        Tm: function (e, t) {
          let n = (0, i.$)(t)
          return e.filter(
            (e) => (0, i.$)(e.connector_id) === n && "HIDDEN" !== e.visibility && !e.id.startsWith("implicit_link::"),
          )
        },
        Yv: function (e, t, n) {
          return e.some(
            (e) =>
              (0, i.r)(e, t) &&
              "OAUTH" === e.auth_type &&
              "DISABLED_BY_ADMIN" !== e.connector_status &&
              null == e.unavailable_reason &&
              e.owners.some((e) => "USER" === e.type && e.id === n),
          )
        },
        i_: function (e, t, n) {
          ;((0, l.EG)(c, { entries: { [p(t)]: null == n ? null : { value: n } }, maxEntries: 100 }),
            e.set(u, (0, l.TB)(c, {})))
        },
      },
    )
  },
}
//# sourceMappingURL=678000.c3ae1a241d.js.map
