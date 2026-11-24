export const __rspack_esm_ids = [678e3]
export const __webpack_modules__ = {
  t24D(e, t, n) {
    n.d(t, { TeamsSetupDialog: () => J })
    var a = n("ABep"),
      s = n("QosV"),
      i = n("ZtGX"),
      l = n("irkb"),
      o = n("T0Rc"),
      r = n("D7Ms"),
      c = n("xSOA"),
      d = n("qmMi"),
      u = n("DBCl"),
      m = n("zd8w"),
      p = n("Wf1j"),
      h = n("oyxz"),
      f = n("rGp2"),
      g = n("JAom"),
      _ = n("pxeg"),
      y = n("hOO0"),
      x = n("uc7r"),
      A = n("yxN2"),
      b = n("SPnB"),
      j = n("YJm0"),
      S = n("AOHi"),
      w = n("Sm6l"),
      v = n("JNtf"),
      M = n("mUDD"),
      I = n("bqtn"),
      T = n("Ot7V"),
      k = n("HOLv"),
      C = n("bVeK"),
      N = n("zLIa"),
      q = n("XcNx"),
      U = n("qlCY"),
      D = n("MX3C"),
      E = n("OWtl"),
      K = n("LH8k"),
      R = n("eShZ"),
      F = n("TPDS"),
      G = n("fu3W"),
      O = n("PlnU"),
      Q = n("YFAr"),
      P = n("S7fj"),
      $ = n("Sbyb"),
      z = n("pDRe"),
      W = n("ZQu1"),
      B = n("WAho")
    function Y(e) {
      let t,
        n,
        i,
        l,
        r,
        p,
        f,
        g = (0, s.c)(27),
        { conversationId: y, destination: x, recipientName: A, sharePointConnected: j, onConnected: S } = e,
        v = (0, d.gh)(E.u),
        M = (0, d.Ul)(b.chatGptAuthenticatedAccountId$),
        I = (0, d.Ul)(b.chatGptAuthenticatedUserId$),
        T = (0, m.useRef)(null)
      g[0] !== M || g[1] !== j || g[2] !== I
        ? ((t = (0, z.ps)({ accountId: M, userId: I, appIds: [_.oI], enabled: !0 !== j })),
          (g[0] = M),
          (g[1] = j),
          (g[2] = I),
          (g[3] = t))
        : (t = g[3])
      let k = t,
        { data: N } = (0, o.I)(k)
      g[4] !== N ? ((n = (0, P.k)(N).has(_.oI)), (g[4] = N), (g[5] = n)) : (n = g[5])
      let q = n
      ;(g[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = () => () => {
            T.current?.abort()
          }),
          (g[6] = i))
        : (i = g[6]),
        g[7] !== M || g[8] !== I ? ((l = [M, I]), (g[7] = M), (g[8] = I), (g[9] = l)) : (l = g[9]),
        (0, m.useEffect)(i, l),
        g[10] !== M || g[11] !== q || g[12] !== S || g[13] !== v || g[14] !== I
          ? ((r = {
              mutationFn: async () => {
                if (null != T.current || !q) return
                let e = new AbortController()
                T.current = e
                let t = () =>
                  !e.signal.aborted &&
                  v.get(b.chatGptAuthenticatedAccountId$) === M &&
                  v.get(b.chatGptAuthenticatedUserId$) === I
                ;(
                  await (0, $.requestMcpConnectSheet)(v, {
                    connectorId: _.oI,
                    hostId: u.iwv,
                    payload: { requireAuth: !0 },
                    oauthPresentation: "popup",
                    oauthReferrer: "dot_connector_auth",
                    signal: e.signal,
                    beforeConnect: async () => t(),
                  }).finally(() => {
                    T.current = null
                  })
                ).didConnect &&
                  t() &&
                  (await S())
              },
            }),
            (g[10] = M),
            (g[11] = q),
            (g[12] = S),
            (g[13] = v),
            (g[14] = I),
            (g[15] = r))
          : (r = g[15]))
      let { mutate: U, isPending: D, isError: K } = (0, c.n)(r)
      return (
        g[16] !== q || g[17] !== U || g[18] !== K || g[19] !== D || g[20] !== j
          ? ((p =
              !1 === j && q
                ? (0, a.jsx)(F.kQ, {
                    description: (0, a.jsxs)("div", {
                      className: "flex flex-col gap-3 select-none",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-sm text-secondary",
                          children: (0, a.jsx)(h.A, {
                            id: "restricted.aeon.teams.sharepoint.description.dot",
                            defaultMessage: "Connect SharePoint to let your dot send and receive files in Teams",
                          }),
                        }),
                        K
                          ? (0, a.jsx)("p", {
                              role: "alert",
                              className: "text-sm text-danger",
                              children: (0, a.jsx)(h.A, {
                                id: "restricted.aeon.teams.sharepoint.error",
                                defaultMessage:
                                  "Could not connect SharePoint. Try again, or open Teams to start chatting",
                              }),
                            })
                          : null,
                      ],
                    }),
                    children: (0, a.jsxs)("div", {
                      className:
                        "flex w-full min-w-0 items-center gap-3 rounded-xl border border-default bg-surface p-4 shadow-sm select-none",
                      children: [
                        (0, a.jsx)(W.R, {
                          className: "size-6 shrink-0",
                          src: "/images/ecosystem/apps/microsoft_sharepoint/icon.png",
                          alt: "",
                          fallback: (0, a.jsx)(C.o_G, {}),
                        }),
                        (0, a.jsx)("span", {
                          className: "min-w-0 flex-1 text-start font-medium",
                          children: (0, a.jsx)(h.A, {
                            id: "restricted.aeon.teams.sharepoint.name",
                            defaultMessage: "SharePoint",
                          }),
                        }),
                        (0, a.jsx)(w.$, {
                          color: "accent",
                          loading: D,
                          disabled: D,
                          onClick: () => U(),
                          children: (0, a.jsx)(h.A, {
                            id: "restricted.aeon.teams.sharepoint.connect",
                            defaultMessage: "Connect",
                          }),
                        }),
                      ],
                    }),
                  })
                : void 0),
            (g[16] = q),
            (g[17] = U),
            (g[18] = K),
            (g[19] = D),
            (g[20] = j),
            (g[21] = p))
          : (p = g[21]),
        g[22] !== y || g[23] !== x || g[24] !== A || g[25] !== p
          ? ((f = (0, a.jsx)(B.g, {
              conversationId: y,
              method: "teams",
              destination: x,
              recipientName: A,
              preview: p,
            })),
            (g[22] = y),
            (g[23] = x),
            (g[24] = A),
            (g[25] = p),
            (g[26] = f))
          : (f = g[26]),
        f
      )
    }
    let L = ["User.Read", "AgentIdUser.ReadWrite.IdentityParentedBy"],
      V = [
        "User.Read",
        "TeamsAppInstallation.ReadWriteAndConsentForUser",
        "TeamsAppInstallation.ReadWriteAndConsentForTeam",
        "TeamsAppInstallation.ReadWriteAndConsentForChat",
      ],
      H = (0, d.bD)(E.u, (e) => void 0),
      Z = (0, d.A4)(
        E.u,
        (e) => (e ?? 0) > Date.now(),
        (e, { set: t }) => {
          let n = (e ?? 0) - Date.now()
          if ((t(n > 0), n <= 0)) return
          let a = setTimeout(() => t(!1), n)
          return () => clearTimeout(a)
        },
        { autoDispose: !0 },
      )
    function J(e) {
      let t,
        n,
        I,
        T,
        C,
        q,
        P,
        $,
        z,
        W,
        B,
        J,
        em,
        ep,
        eh,
        ef,
        eg,
        e_,
        ey,
        ex,
        eA,
        eb,
        ej,
        eS,
        ew,
        ev,
        eM,
        eI,
        eT,
        ek,
        eC,
        eN,
        eq,
        eU,
        eD,
        eE,
        eK,
        eR,
        eF,
        eG,
        eO,
        eQ,
        eP,
        e$,
        ez,
        eW = (0, s.c)(223),
        {
          api: eB,
          connectAgentUser: eY,
          threadId: eL,
          accountId: eV,
          userId: eH,
          initialLinkId: eZ,
          initialDisplayName: eJ,
          initialOriginalDisplayName: eX,
          mode: e1,
          onConnected: e0,
          onClose: e2,
        } = e,
        e3 = void 0 === eB ? G.FB : eB,
        e8 = void 0 === e1 ? "dialog" : e1,
        e4 = (0, d.gh)(E.u),
        e6 = (0, p.A)(),
        e9 = (0, d.Ul)(b.kf),
        e7 = (0, d.Ul)(b.Kw),
        e5 = (0, d.Ul)(b.o8)
      eW[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (eW[0] = t)) : (t = eW[0])
      let { isFetching: te, refetch: tt } = (0, d._U)(j.f, eV, t),
        tn = (0, l.jE)(),
        [ta, ts] = (0, m.useState)(eZ ?? ""),
        [ti, tl] = (0, m.useState)(eX ?? eJ),
        to = (0, m.useRef)(!0),
        tr = (0, m.useRef)(!1),
        tc = (0, m.useRef)(null)
      ;(eW[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = () => (
            (to.current = !0),
            () => {
              ;((to.current = !1), tc.current?.())
            }
          )),
          (I = []),
          (eW[1] = n),
          (eW[2] = I))
        : ((n = eW[1]), (I = eW[2])),
        (0, m.useEffect)(n, I))
      let [td, tu] = (0, m.useState)(""),
        [tm, tp] = (0, m.useState)("idle"),
        th = "idle" !== tm,
        [tf, tg] = (0, m.useState)(null)
      ;(eW[3] !== tf
        ? ((T = () => {
            if (null == tf) return
            let e = setTimeout(() => tg(null), 3e4)
            return () => clearTimeout(e)
          }),
          (C = [tf]),
          (eW[3] = tf),
          (eW[4] = T),
          (eW[5] = C))
        : ((T = eW[4]), (C = eW[5])),
        (0, m.useEffect)(T, C))
      let [t_, ty] = (0, m.useState)(null)
      eW[6] === Symbol.for("react.memo_cache_sentinel") ? ((q = { hostId: u.iwv }), (eW[6] = q)) : (q = eW[6])
      let { handleAppConnectOAuthStarted: tx, isAppConnectPending: tA } = (0, A.t)(q),
        { openPendingAppConnectPopup: tb, clearPendingAppConnect: tj } = (0, g.ZN)()
      eW[7] !== t_ || eW[8] !== tA
        ? ((P =
            null != t_ && tA(t_.connectorId, { kind: "return-to-location-state", successState: {}, failureState: {} })),
          (eW[7] = t_),
          (eW[8] = tA),
          (eW[9] = P))
        : (P = eW[9])
      let tS = P,
        tw = null != eV && null != eH
      eW[10] !== eV || eW[11] !== eH
        ? (($ = (0, x.dZ)({ accountId: eV, userId: eH })), (eW[10] = eV), (eW[11] = eH), (eW[12] = $))
        : ($ = eW[12])
      let tv = $,
        tM = tw && !tS
      eW[13] !== tv || eW[14] !== tM
        ? ((z = { ...tv, enabled: tM, staleTime: tv.staleTime }), (eW[13] = tv), (eW[14] = tM), (eW[15] = z))
        : (z = eW[15])
      let { data: tI, isFetching: tT, error: tk } = (0, o.I)(z),
        tC = null
      "loaded" === e9.status && (tC = "personal" === e9.structure ? e5 : e7)
      let tN =
        null == tI || null == tC
          ? void 0
          : (0, D.Tm)(tI, O.T).filter(
              (e) => "OAUTH" === e.auth_type && e.owners.some((e) => "USER" === e.type && e.id === tC),
            )
      eW[16] !== eV || eW[17] !== eL || eW[18] !== eH
        ? ((W = ["teams-orbit", eV, eH, eL]), (eW[16] = eV), (eW[17] = eL), (eW[18] = eH), (eW[19] = W))
        : (W = eW[19])
      let tq = W,
        tU = (0, d._U)(H, tq),
        tD = null != tU,
        tE = (0, d._U)(Z, tU),
        tK = th && td
      eW[20] !== tK || eW[21] !== t_?.attemptId || eW[22] !== tq
        ? ((B = tK || t_?.attemptId ? [...tq, "setup", tK || null, t_?.attemptId ?? null] : tq),
          (eW[20] = tK),
          (eW[21] = t_?.attemptId),
          (eW[22] = tq),
          (eW[23] = B))
        : (B = eW[23])
      let tR = B
      eW[24] !== tf || eW[25] !== th
        ? ((J = (e) => {
            let t = e.state.data
            return (
              !(
                !th ||
                null == tf ||
                "error" === e.state.status ||
                t?.personal_installation === "failed" ||
                t?.personal_installation === "reconnect" ||
                t?.connections?.some(ec)
              ) && 2e3
            )
          }),
          (eW[24] = tf),
          (eW[25] = th),
          (eW[26] = J))
        : (J = eW[26])
      let {
          data: tF,
          isFetching: tG,
          error: tO,
        } = (0, o.I)({
          queryKey: tR,
          queryFn: async (e) => {
            let { signal: t } = e,
              n = await e3.status(eL, t, tK || void 0)
            return (
              (tK || t_?.attemptId) &&
                n.connections?.some(ed) &&
                (tn.setQueryData(tq, n), tK && "submitted" === tm && !t.aborted && no(n)),
              n
            )
          },
          enabled: tw && !tS,
          placeholderData: r.rX,
          staleTime: 0,
          retry: !1,
          refetchOnWindowFocus: !1,
          refetchInterval: J,
        }),
        tQ = tN && [
          ...tN,
          ...(tF?.user_connections ?? [])
            .filter((e) => !e.link_id.startsWith("implicit_link::") && !tI?.some((t) => t.id === e.link_id))
            .map(er),
        ],
        tP = null != tF && !tF.agent_user_connected && !tF.connections?.length && null == tF.installation,
        t$ = !tP || tF.personal_installation || th ? void 0 : eY,
        tz = tF?.aeon_id
      eW[27] !== tq || eW[28] !== tz
        ? ((em = [...tq, "agent-user-status", tz]), (eW[27] = tq), (eW[28] = tz), (eW[29] = em))
        : (em = eW[29])
      let tW = em
      eW[30] !== tq || eW[31] !== tn
        ? ((ep = function () {
            ;(tn.invalidateQueries({ queryKey: tq, exact: !0 }), tn.invalidateQueries({ queryKey: [...tq, "setup"] }))
          }),
          (eW[30] = tq),
          (eW[31] = tn),
          (eW[32] = ep))
        : (ep = eW[32])
      let tB = ep,
        tY = !!t$ && !!eV && !!e5 && !!tz
      ;(eW[33] !== eV ||
      eW[34] !== tW ||
      eW[35] !== tz ||
      eW[36] !== e0 ||
      eW[37] !== tn ||
      eW[38] !== tB ||
      eW[39] !== e5
        ? ((eh = async (e) => {
            let { signal: t } = e
            if (!eV || !e5 || !tz) throw Error("Missing Teams setup identity")
            let n = await (0, G.cS)(eV, e5, tz, t)
            if (t.aborted) return n
            let a = tn.getQueryData(tW)
            return "status_unavailable" === n && ("provisioning" === a || "expired" === a)
              ? "expired"
              : ("ready" === n && "ready" !== a && (tB(), tr.current && to.current && ((tr.current = !1), e0())), n)
          }),
          (eW[33] = eV),
          (eW[34] = tW),
          (eW[35] = tz),
          (eW[36] = e0),
          (eW[37] = tn),
          (eW[38] = tB),
          (eW[39] = e5),
          (eW[40] = eh))
        : (eh = eW[40]),
        eW[41] !== tW || eW[42] !== tY || eW[43] !== eh
          ? ((ef = {
              queryKey: tW,
              enabled: tY,
              queryFn: eh,
              staleTime: 0,
              refetchOnMount: !0,
              refetchOnWindowFocus: !0,
              refetchInterval: eo,
            }),
            (eW[41] = tW),
            (eW[42] = tY),
            (eW[43] = eh),
            (eW[44] = ef))
          : (ef = eW[44]))
      let tL = (0, o.I)(ef),
        tV = !!t$ && !tL.isError && "provisioning" === tL.data,
        tH = tF?.personal_installation === "failed",
        tZ = tF?.authorization_connector_id,
        tJ = (null != t$ || "setup" === e8) && tP && "accepted" !== tF.personal_installation
      if (eW[45] !== eV || eW[46] !== tZ || eW[47] !== eH) {
        let e = (0, f.rJ)(tZ ?? "", { includeActions: !0, productSku: "AEON" })
        ;((ey = o.I),
          (eg = e),
          (e_ = [...e.queryKey, eV, eH]),
          (eW[45] = eV),
          (eW[46] = tZ),
          (eW[47] = eH),
          (eW[48] = eg),
          (eW[49] = e_),
          (eW[50] = ey))
      } else ((eg = eW[48]), (e_ = eW[49]), (ey = eW[50]))
      let tX = tw && tJ && null != tZ && !tS
      ;(eW[51] !== t$
        ? ((ex = (e) =>
            "DISABLED_BY_ADMIN" !== e.status &&
            (t$ ? e.actions.some(el) : G.x9.every((t) => e.actions.some((e) => e.name === t && !1 !== e.is_enabled)))),
          (eW[51] = t$),
          (eW[52] = ex))
        : (ex = eW[52]),
        eW[53] !== eg || eW[54] !== e_ || eW[55] !== tX || eW[56] !== ex
          ? ((eA = { ...eg, queryKey: e_, enabled: tX, staleTime: 1e4, retry: !1, select: ex }),
            (eW[53] = eg),
            (eW[54] = e_),
            (eW[55] = tX),
            (eW[56] = ex),
            (eW[57] = eA))
          : (eA = eW[57]))
      let { data: t1, status: t0, error: t2, isFetching: t3, refetch: t8 } = ey(eA),
        t4 = tJ && (null == tZ || ("success" === t0 && !t1)),
        t6 = tJ ? t2 : null,
        t9 = tJ && !t4 && ("pending" === t0 || t3),
        t7 = tF?.installation?.team_id == null ? tF?.installation : null,
        t5 = tQ?.find((e) => e.id === ta)?.id ?? ""
      ;(ta || tQ?.length !== 1 || (t5 = tQ[0].id),
        eW[58] !== tF ? ((eb = (0, Q.o)(tF)), (eW[58] = tF), (eW[59] = eb)) : (eb = eW[59]))
      let ne = eb,
        nt = ne?.teams_url ?? tF?.agent_user_chat_url
      eW[60] !== ne || eW[61] !== tF?.connections
        ? ((ej = ne ?? tF?.connections?.find(ei)), (eW[60] = ne), (eW[61] = tF?.connections), (eW[62] = ej))
        : (ej = eW[62])
      let nn = ej,
        na = null != nn || tF?.agent_user_connected === !0,
        ns = t7?.user_link_id ?? nn?.user_link_id ?? t5,
        ni = tQ?.find((e) => e.id === ns),
        nl =
          null != nn &&
          !tF?.messaging_connection_available &&
          ((null != tQ && null == ni) ||
            ni?.auth_status === "REAUTH_REQUIRED" ||
            tF?.personal_installation === "reconnect")
      function no(e) {
        ;(0, Q.o)(e) &&
          to.current &&
          e4.get(b.chatGptAuthenticatedAccountId$) === eV &&
          e4.get(b.chatGptAuthenticatedUserId$) === eH &&
          (tp("connected"), e0())
      }
      let nr = tF?.user_connections?.find((e) => e.link_id === ns)
      null == ti && nr?.suggested_display_name != null && tl(nr.suggested_display_name)
      let nc = nr?.suggested_display_name ?? ti ?? void 0,
        nd = nc ?? (ns ? void 0 : tF?.user_connections?.find((e) => e.link_id === tQ?.[0]?.id)?.suggested_display_name),
        nu =
          !na &&
          !tH &&
          null != tQ &&
          null != t7 &&
          null == nr &&
          ni?.auth_status !== "REAUTH_REQUIRED" &&
          tF?.personal_installation !== "reconnect",
        nm = t$
          ? null != nr &&
            ni?.auth_status === "ACTIVE" &&
            ((ez = new Set(
              ni.scopes.map((e) =>
                e
                  .trim()
                  .toLowerCase()
                  .replace(/^https:\/\/graph\.microsoft\.com\//, ""),
              ),
            )),
            L.every((e) => ez.has(e.toLowerCase())))
          : nr?.personal_installation_ready,
        np = null != tQ && tQ.length > 0 && (tQ.length > 1 || (!!ta && !t5)) && null == nn && null == t7,
        nh = np && !ns,
        nf = null != tF && null != tQ && !nh && !nu && !tH && !nm,
        {
          mutate: ng,
          isPending: n_,
          error: ny,
          variables: nx,
        } = (0, c.n)({
          mutationFn: async (e) => {
            let t,
              n,
              a = "messaging" === e,
              s = nc?.trim() || ti
            if (
              !to.current ||
              e4.get(b.chatGptAuthenticatedAccountId$) !== eV ||
              e4.get(b.chatGptAuthenticatedUserId$) !== eH
            )
              throw new DOMException("Account changed", "AbortError")
            let i = a ? tF?.messaging_authorization_connector_id : tF?.authorization_connector_id
            if (!i) return
            if (
              (await Promise.all([tn.cancelQueries({ queryKey: tq }), tn.cancelQueries({ queryKey: tv.queryKey })]),
              !to.current ||
                e4.get(b.chatGptAuthenticatedAccountId$) !== eV ||
                e4.get(b.chatGptAuthenticatedUserId$) !== eH)
            )
              throw new DOMException("Account changed", "AbortError")
            let l =
                a && !t$
                  ? void 0
                  : { connectorId: i, productSku: "AEON", oauthPresentation: "new-account" === e ? "popup" : void 0 },
              o = {
                scope: e4,
                app: { id: i, name: "Microsoft Teams", installUrl: null },
                appConnectOptions: l,
                queryClient: tn,
                allowBrowserFallback: !1,
                onOAuthStarted: (n, a) => {
                  if (
                    !to.current ||
                    e4.get(b.chatGptAuthenticatedAccountId$) !== eV ||
                    e4.get(b.chatGptAuthenticatedUserId$) !== eH
                  ) {
                    ;(a?.preventNavigation(), a?.preopenedPopup?.close())
                    return
                  }
                  ;(tn.invalidateQueries({ queryKey: tv.queryKey, refetchType: "none" }),
                    ty({ connectorId: i, attemptId: crypto.randomUUID() }))
                  let o = tx({
                    app: { id: i, name: "Microsoft Teams" },
                    appConnectOptions: l,
                    redirectUrl: n,
                    resumeTarget: {
                      kind: "return-to-location-state",
                      successState: {
                        orbitTeamsSetup: {
                          accountId: eV,
                          userId: eH,
                          threadId: eL,
                          ...(null != s ? { displayName: s } : {}),
                          ...(null != ti ? { originalDisplayName: ti } : {}),
                          ...("new-account" !== e && ns ? { linkId: ns } : {}),
                        },
                        ...("setup" === e8 ? { orbitContactSetup: !0 } : {}),
                      },
                      failureState: {
                        orbitTeamsSetup: {
                          accountId: eV,
                          userId: eH,
                          threadId: eL,
                          ...(null != s ? { displayName: s } : {}),
                          ...(null != ti ? { originalDisplayName: ti } : {}),
                          ...("new-account" !== e && ns ? { linkId: ns } : {}),
                        },
                        ...("setup" === e8 ? { orbitContactSetup: !0 } : {}),
                      },
                    },
                  })
                  "new-account" === e &&
                    null != o &&
                    (t = new Promise((e, t) => {
                      let s = tb(
                        n,
                        (n) => {
                          ;((tc.current = null),
                          tj({ oauthState: o }),
                          to.current &&
                            e4.get(b.chatGptAuthenticatedAccountId$) === eV &&
                            e4.get(b.chatGptAuthenticatedUserId$) === eH)
                            ? (ty(null),
                              "success" === n.kind && (0, y.$)(n.appId) === (0, y.$)(i)
                                ? (ts(n.linkId ?? ""),
                                  Promise.all([
                                    tn.invalidateQueries({ queryKey: tv.queryKey }),
                                    tn.invalidateQueries({ queryKey: tq }),
                                  ]).then(() => e(), t))
                                : "cancelled" === n.kind
                                  ? e()
                                  : t(Error("Teams authorization failed")))
                            : e()
                        },
                        a?.preopenedPopup,
                      )
                      null == s
                        ? e()
                        : (a?.preventNavigation(),
                          (tc.current = () => {
                            ;(s(), tj({ oauthState: o }), e())
                          }))
                    }))
                },
                openInBrowser: es,
              }
            if ("new-account" !== e && ns && (!a || null != ni)) {
              let e = t$ ? L : V
              n = await (0, f.NY)({ ...o, linkId: ns, requestedScopes: a && !t$ ? ["User.Read"] : e, fallbackUrl: "" })
            } else n = await (0, f.CI)({ ...o, linkParams: { orbit_setup: !0 } })
            if ("failed" === n.kind) throw n.error ?? Error("Teams authorization could not be started")
            ;("connected-directly" === n.kind &&
              (await Promise.all([
                tn.invalidateQueries({ queryKey: tv.queryKey }),
                tn.invalidateQueries({ queryKey: tq }),
              ])),
              await t)
          },
        })
      eW[63] !== eV || eW[64] !== e3 || eW[65] !== e4 || eW[66] !== eL || eW[67] !== eH
        ? ((eS = async (e) => {
            let t = await e3.status(eL)
            if (e4.get(b.chatGptAuthenticatedAccountId$) !== eV || e4.get(b.chatGptAuthenticatedUserId$) !== eH)
              throw new DOMException("Account changed", "AbortError")
            let n = t.connections?.find((t) => t.binding_id === e)
            n && (await e3.disconnect(eL, n.binding_id, n.binding_version))
          }),
          (eW[63] = eV),
          (eW[64] = e3),
          (eW[65] = e4),
          (eW[66] = eL),
          (eW[67] = eH),
          (eW[68] = eS))
        : (eS = eW[68])
      let {
        mutate: nA,
        isPending: nb,
        error: nj,
      } = (0, c.n)({
        mutationFn: eS,
        onSuccess: () => {
          ;(tu(""),
            tp("idle"),
            tg(null),
            nI(),
            tn.invalidateQueries({ queryKey: tq, exact: !0 }),
            tn.invalidateQueries({ queryKey: [...tq, "setup"] }))
        },
      })
      ;(eW[69] !== tW ||
      eW[70] !== no ||
      eW[71] !== tq ||
      eW[72] !== e2 ||
      eW[73] !== e0 ||
      eW[74] !== tn ||
      eW[75] !== tR ||
      eW[76] !== tB
        ? ((ew = async (e) => {
            if ("string" == typeof e) {
              ;(await tn.cancelQueries({ queryKey: tW, exact: !0 }), (tr.current = "provisioning" === e))
              let t = "status_unavailable" === e ? "expired" : e
              ;(tn.setQueryData(tW, t), "ready" === e && (tB(), to.current && (e0(), e2())))
              return
            }
            ;(tp("submitted"), tg(ea), tn.setQueryData(tR, e), tn.setQueryData(tq, e), no(e))
          }),
          (eW[69] = tW),
          (eW[70] = no),
          (eW[71] = tq),
          (eW[72] = e2),
          (eW[73] = e0),
          (eW[74] = tn),
          (eW[75] = tR),
          (eW[76] = tB),
          (eW[77] = ew))
        : (ew = eW[77]),
        eW[78] !== t$ || eW[79] !== tq || eW[80] !== tn || eW[81] !== e4
          ? ((ev = (e) => {
              if (e instanceof R.FetchError && 429 === e.status) {
                let t = Date.now() + 6e4,
                  n = Math.min(e.retryAtMs ?? t, t)
                e4.set(H, tq, (e) => Math.max(e ?? 0, n))
              }
              t$ || tn.invalidateQueries({ queryKey: tq })
            }),
            (eW[78] = t$),
            (eW[79] = tq),
            (eW[80] = tn),
            (eW[81] = e4),
            (eW[82] = ev))
          : (ev = eW[82]))
      let {
          mutate: nS,
          isPending: nw,
          error: nv,
          reset: nM,
        } = (0, c.n)({
          mutationKey: tq,
          mutationFn: async () => {
            if (e4.get(b.chatGptAuthenticatedAccountId$) !== eV || e4.get(b.chatGptAuthenticatedUserId$) !== eH)
              throw new DOMException("Account changed", "AbortError")
            if (t$) return t$(tz, ns)
            let e = t7?.install_attempt_id || td || crypto.randomUUID()
            return (
              tu(e),
              e4.set(H, tq, void 0),
              e3.install(eL, {
                target: "personal",
                user_link_id: ns,
                install_attempt_id: e,
                display_name: nc?.trim() || ti,
              })
            )
          },
          onSuccess: ew,
          onError: ev,
        }),
        nI = nM,
        nT = n_ || tS || nb || nw,
        nk = nT || !tw || t4 || t9 || null != t6,
        nC = !na && (null != tk || "unavailable" === e9.status),
        nN = null != tO || nC || null != t6,
        nq = !na && !tH && t7?.status === "accepted",
        nU = !tH && t7?.status === "unknown",
        nD =
          nN ||
          (null != nn && !nl && !ne) ||
          nu ||
          tH ||
          (!na && null != t7 && "pending" !== t7.status && !nq && !nU && !nf),
        nE = nC || (tO ?? t6 ?? nv ?? ny ?? nj),
        nK = nq && !nf && (null != tf || tG),
        nR = nD && (tG || tT || te || t3),
        nF = nT || tV || tF?.agent_user_connected === !0 || tE || !tw || nR || t4 || t9 || (nK && !nN)
      ;(!nN && nl && (nF = nF || !tF?.messaging_authorization_connector_id),
        nN ||
          nq ||
          na ||
          tH ||
          (nF =
            (nF = nF || null == tF || null == tQ || (!nf && (tG || tT))) ||
            (nf ? !tF?.authorization_connector_id : !ns && !nu)),
        eW[83] === Symbol.for("react.memo_cache_sentinel")
          ? ((eM = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.error",
              defaultMessage: "Could not complete the request. Try again",
            })),
            (eW[83] = eM))
          : (eM = eW[83]))
      let nG = eM
      if (tO || nC || t6) {
        let e
        ;(eW[84] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.loadFailed",
              defaultMessage: "Could not load Teams setup. Try again",
            })),
            (eW[84] = e))
          : (e = eW[84]),
          (nG = e))
      } else if (tD) {
        let e
        ;(eW[85] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.rateLimited",
              defaultMessage:
                "Microsoft Teams is receiving too many app-creation requests. Please wait before trying again",
            })),
            (eW[85] = e))
          : (e = eW[85]),
          (nG = e))
      } else if (nU) {
        let e
        ;(eW[86] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.retryIncomplete",
              defaultMessage: "We couldn\u2019t finish connecting your {dot} to Teams",
              values: { dot: "dot" },
            })),
            (eW[86] = e))
          : (e = eW[86]),
          (nG = e))
      } else if (nv) {
        let e
        ;(eW[87] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.userUploadFailed",
              defaultMessage: "Could not confirm the installation for your account. Check Teams before trying again",
            })),
            (eW[87] = e))
          : (e = eW[87]),
          (nG = e))
      } else if (
        t4 ||
        ("messaging" !== nx &&
          ny instanceof R.FetchError &&
          403 === ny.status &&
          (0, K.d)(ny)?.message === "Selected OAuth action is disabled for this workspace")
      ) {
        let e
        ;(eW[88] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.installationDisabledByAdmin.dot",
              defaultMessage:
                "Your ChatGPT workspace admin hasn't enabled dot installation in Teams. Contact them to enable it.",
            })),
            (eW[88] = e))
          : (e = eW[88]),
          (nG = e))
      } else if (tH) {
        let e
        ;(eW[89] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.installationFailed",
              defaultMessage: "Teams setup is incomplete. Check its status again in a moment",
            })),
            (eW[89] = e))
          : (e = eW[89]),
          (nG = e))
      }
      eW[90] === Symbol.for("react.memo_cache_sentinel")
        ? ((eI = (0, a.jsx)(h.A, {
            id: "restricted.aeon.teams.setup.installForUser",
            defaultMessage: "Install for me",
          })),
          (eW[90] = eI))
        : (eI = eW[90])
      let nO = eI
      if (
        (nf &&
          (nO = ns
            ? (0, a.jsx)(h.A, {
                id: "restricted.aeon.teams.setup.reauthorizeInstallation",
                defaultMessage: "Reconnect with Microsoft",
              })
            : (0, a.jsx)(h.A, {
                id: "restricted.aeon.teams.setup.authorizeInstallation",
                defaultMessage: "Continue with Microsoft",
              })),
        "setup" === e8)
      ) {
        let e
        ;(eW[91] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, { id: "restricted.aeon.teams.add", defaultMessage: "Add to Teams" })), (eW[91] = e))
          : (e = eW[91]),
          (nO = e))
      }
      if (nl) {
        if ("dialog" === e8) {
          let e
          ;(eW[92] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(h.A, {
                id: "restricted.aeon.teams.setup.reconnect",
                defaultMessage: "Reconnect Microsoft Teams",
              })),
              (eW[92] = e))
            : (e = eW[92]),
            (nO = e))
        }
      } else if (nq && !nf) {
        let e
        ;(eW[93] !== nK
          ? ((e = nK
              ? (0, a.jsx)(h.A, {
                  id: "restricted.aeon.teams.setup.confirmingInstallation",
                  defaultMessage: "Finishing setup\u2026",
                })
              : (0, a.jsx)(h.A, {
                  id: "restricted.aeon.teams.setup.checkPersonalInstallation",
                  defaultMessage: "Check status",
                })),
            (eW[93] = nK),
            (eW[94] = e))
          : (e = eW[94]),
          (nO = e))
      }
      if (nD) {
        let e
        ;(eW[95] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.checkSetupStatus",
              defaultMessage: "Check status",
            })),
            (eW[95] = e))
          : (e = eW[95]),
          (nO = e))
      }
      if (nC || (nU && !nf)) {
        let e
        ;(eW[96] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, { id: "restricted.aeon.teams.setup.refresh", defaultMessage: "Try again" })),
            (eW[96] = e))
          : (e = eW[96]),
          (nO = e))
      }
      if ("setup" === e8 && (n_ || tS)) {
        let e
        ;(eW[97] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.connecting",
              defaultMessage: "Connecting\u2026",
            })),
            (eW[97] = e))
          : (e = eW[97]),
          (nO = e))
      } else if ("setup" === e8 && nw) {
        let e
        ;(eW[98] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.installing",
              defaultMessage: "Adding to Teams\u2026",
            })),
            (eW[98] = e))
          : (e = eW[98]),
          (nO = e))
      }
      eW[99] === Symbol.for("react.memo_cache_sentinel")
        ? ((eT = (0, a.jsx)(h.A, { id: "restricted.aeon.teams.setup.cancel", defaultMessage: "Cancel" })),
          (eW[99] = eT))
        : (eT = eW[99])
      let nQ = eT
      if (nl) {
        let e
        ;(eW[100] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, { id: "restricted.aeon.teams.setup.notNow", defaultMessage: "Not now" })),
            (eW[100] = e))
          : (e = eW[100]),
          (nQ = e))
      } else if (nq) {
        let e
        ;(eW[101] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, { id: "restricted.aeon.teams.setup.close", defaultMessage: "Close" })), (eW[101] = e))
          : (e = eW[101]),
          (nQ = e))
      }
      eW[102] !== tv.queryKey ||
      eW[103] !== nC ||
      eW[104] !== e9.status ||
      eW[105] !== ng ||
      eW[106] !== nF ||
      eW[107] !== tq ||
      eW[108] !== nS ||
      eW[109] !== t6 ||
      eW[110] !== nf ||
      eW[111] !== nl ||
      eW[112] !== nq ||
      eW[113] !== tn ||
      eW[114] !== ne ||
      eW[115] !== tt ||
      eW[116] !== t8 ||
      eW[117] !== nD
        ? ((ek = (e) => {
            ;(e.preventDefault(),
              !nF &&
                (!ne || nD) &&
                (nD || (nq && !nf)
                  ? (nC && "unavailable" === e9.status && tt(),
                    t6 && t8(),
                    tn.invalidateQueries({ queryKey: tv.queryKey }),
                    tn.invalidateQueries({ queryKey: tq }))
                  : nl
                    ? ng("messaging")
                    : nf
                      ? ng("personal")
                      : tn.isMutating({ mutationKey: tq, exact: !0 }) || nS()))
          }),
          (eW[102] = tv.queryKey),
          (eW[103] = nC),
          (eW[104] = e9.status),
          (eW[105] = ng),
          (eW[106] = nF),
          (eW[107] = tq),
          (eW[108] = nS),
          (eW[109] = t6),
          (eW[110] = nf),
          (eW[111] = nl),
          (eW[112] = nq),
          (eW[113] = tn),
          (eW[114] = ne),
          (eW[115] = tt),
          (eW[116] = t8),
          (eW[117] = nD),
          (eW[118] = ek))
        : (ek = eW[118])
      let nP = ek
      eW[119] === Symbol.for("react.memo_cache_sentinel")
        ? ((eC = (0, a.jsx)(h.A, {
            id: "restricted.aeon.teams.setup.personalSubtitle.dot",
            defaultMessage: "Add your dot to your personal Teams apps",
          })),
          (eW[119] = eC))
        : (eC = eW[119])
      let n$ = eC
      if (nl) {
        let e
        ;(eW[120] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.reconnectDescription.dot",
              defaultMessage: "Your dot is still installed. Reconnect your Teams account to keep chatting with it.",
            })),
            (eW[120] = e))
          : (e = eW[120]),
          (n$ = e))
      } else if ("setup" === e8 && tQ?.length === 0) {
        let e
        ;(eW[121] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.personalAuthorization.dot",
              defaultMessage: "Sign in to Microsoft to install your dot",
            })),
            (eW[121] = e))
          : (e = eW[121]),
          (n$ = e))
      } else if ("setup" === e8) {
        let e
        ;(eW[122] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.handleAccountDescription.dot",
              defaultMessage: "Choose the account to add your dot to Teams",
            })),
            (eW[122] = e))
          : (e = eW[122]),
          (n$ = e))
      }
      let nz = tw && (null == tF || (!na && null == tQ) || (t9 && "pending" === t0)) && !nN
      ;(eW[123] === Symbol.for("react.memo_cache_sentinel")
        ? ((eN = (0, a.jsx)(h.A, {
            id: "restricted.aeon.teams.setup.selectAccount",
            defaultMessage: "Select account",
          })),
          (eW[123] = eN))
        : (eN = eW[123]),
        eW[124] !== nI
          ? ((eq = (e) => {
              ;(nI(), tu(""), tp("idle"), tg(null), ts(e), tl(void 0))
            }),
            (eW[124] = nI),
            (eW[125] = eq))
          : (eq = eW[125]),
        eW[126] !== ng ? ((eU = () => ng("new-account")), (eW[126] = ng), (eW[127] = eU)) : (eU = eW[127]))
      let nW = (0, a.jsx)(
          eu,
          {
            mode: "setup",
            label: eN,
            value: ns,
            items: (tQ ?? []).map(en),
            disabled: nk || nz || null != t7,
            addAccountDisabled: !tF?.authorization_connector_id,
            onChange: eq,
            onAddAccount: eU,
          },
          "account",
        ),
        nB =
          "setup" === e8 &&
          (!tw ||
            tD ||
            t4 ||
            tH ||
            nU ||
            nq ||
            na ||
            nl ||
            tQ?.length === 0 ||
            (null != nE && (null == tF || null == tQ))),
        nY = "connect"
      ;(nE || tD || t4 || tH || nU
        ? (nY = "failed")
        : nu || nl
          ? (nY = "reconnect")
          : tV || nq
            ? (nY = "pending")
            : na && (nY = "installed"),
        eW[128] !== t$ || eW[129] !== nG || eW[130] !== nv
          ? ((eD = t$ && nv ? ((0, S.pZ)(nv) ?? nG) : null),
            (eW[128] = t$),
            (eW[129] = nG),
            (eW[130] = nv),
            (eW[131] = eD))
          : (eD = eW[131]))
      let nL = eD,
        nV = null
      if (tV) {
        let e
        ;(eW[132] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.agentUser.pending",
              defaultMessage: "Setting up in Teams. You can close this dialog.",
            })),
            (eW[132] = e))
          : (e = eW[132]),
          (nV = e))
      } else if ("admin_action_required" === tL.data) {
        let e
        ;(eW[133] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.agentUser.license",
              defaultMessage: "Ask your Microsoft admin to assign a Teams Enterprise seat.",
            })),
            (eW[133] = e))
          : (e = eW[133]),
          (nV = e))
      } else if ("failed" === tL.data) nV = nG
      else if ("expired" === tL.data || (tL.isError && "provisioning" === tL.data)) {
        let e
        ;(eW[134] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.agentUser.unavailable",
              defaultMessage: "Teams setup could not be confirmed. Select Add to Teams to try again.",
            })),
            (eW[134] = e))
          : (e = eW[134]),
          (nV = e))
      }
      let nH = "setup" === e8 && !nB && nL,
        nZ =
          !nl || nE || nu
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  t$ && nV ? (0, a.jsx)("p", { role: "status", children: nV }) : null,
                  tw
                    ? null
                    : (0, a.jsx)("p", {
                        role: "alert",
                        className: "text-sm text-secondary select-none",
                        children: (0, a.jsx)(h.A, {
                          id: "restricted.aeon.teams.setup.accountRequired.dot",
                          defaultMessage: "Sign in and select a ChatGPT workspace before adding your dot to Teams",
                        }),
                      }),
                  nz && "setup" !== e8
                    ? (0, a.jsx)("p", {
                        role: "status",
                        className: "text-sm text-secondary select-none",
                        children: (0, a.jsx)(h.A, {
                          id: "restricted.aeon.teams.setup.loading",
                          defaultMessage: "Loading Teams setup\u2026",
                        }),
                      })
                    : null,
                  "failed" !== nY || nH
                    ? null
                    : (0, a.jsx)("p", {
                        role: "alert",
                        className: nB ? "text-sm text-secondary select-none" : "text-sm text-danger select-none",
                        children: nL ?? nG,
                      }),
                  nu
                    ? (0, a.jsx)("p", {
                        role: "alert",
                        className: nB ? "text-sm text-secondary select-none" : "text-sm text-danger select-none",
                        children: (0, a.jsx)(h.A, {
                          id: "restricted.aeon.teams.setup.installationAccountConnectionMissing",
                          defaultMessage: "No connected Microsoft account matches this Teams installation",
                        }),
                      })
                    : null,
                  nq
                    ? (0, a.jsx)("p", {
                        role: "status",
                        className: "text-sm text-secondary select-none",
                        children: nK
                          ? (0, a.jsx)(h.A, {
                              id: "restricted.aeon.teams.setup.waitingForPersonalInstallation",
                              defaultMessage:
                                "Microsoft accepted the upload. Waiting for Teams to confirm the installation",
                            })
                          : (0, a.jsx)(h.A, {
                              id: "restricted.aeon.teams.setup.personalInstallationPending",
                              defaultMessage:
                                "Microsoft accepted the upload but has not confirmed the installation yet. Check its status in a moment",
                            }),
                      })
                    : null,
                  "setup" === e8 && !nB && (nz || (null != tF && null != tQ))
                    ? (0, a.jsx)("div", {
                        className: "flex w-full min-w-0 flex-wrap items-center justify-center gap-2",
                        children:
                          null != nd
                            ? (0, a.jsx)(h.A, {
                                id: "restricted.aeon.teams.setup.identityInAccountGroup",
                                defaultMessage:
                                  "{identity} <destination><preposition>in</preposition> {account}</destination>",
                                values: {
                                  identity: (0, a.jsx)(
                                    N.pd,
                                    {
                                      variant: "inline",
                                      autoSize: !0,
                                      readOnly: !0,
                                      value: nd,
                                      "aria-label": e6.formatMessage({
                                        id: "restricted.aeon.teams.setup.handle.label",
                                        defaultMessage: "Teams handle",
                                      }),
                                    },
                                    "identity",
                                  ),
                                  destination: et,
                                  preposition: ee,
                                  account: nW,
                                },
                              })
                            : nW,
                      })
                    : null,
                  "dialog" !== e8 || null == tQ || nq || tH || na
                    ? null
                    : (0, a.jsxs)(a.Fragment, {
                        children: [
                          np
                            ? (0, a.jsx)(eu, {
                                label: (0, a.jsx)(h.A, {
                                  id: "restricted.aeon.teams.setup.account",
                                  defaultMessage: "Teams account",
                                }),
                                value: t5,
                                items: tQ.map(X) ?? [],
                                disabled: nk,
                                addAccountDisabled: !tF?.authorization_connector_id,
                                onChange: (e) => {
                                  ;(nI(), tu(""), tp("idle"), tg(null), ts(e), tl(void 0))
                                },
                                onAddAccount: () => ng("new-account"),
                              })
                            : null,
                          np || (null == ni && null == nr)
                            ? null
                            : (0, a.jsxs)("div", {
                                className: "flex min-w-0 items-center justify-between gap-3",
                                children: [
                                  (0, a.jsx)("p", {
                                    className: "min-w-0 truncate text-sm text-secondary select-text",
                                    children: ni?.name ?? nr?.name,
                                  }),
                                  null == t7
                                    ? (0, a.jsx)(w.$, {
                                        type: "button",
                                        color: "ghostSecondary",
                                        disabled: nk || !tF?.authorization_connector_id,
                                        onClick: () => ng("new-account"),
                                        children: (0, a.jsx)(h.A, {
                                          id: "restricted.aeon.teams.setup.useAnotherAccount",
                                          defaultMessage: "Use another account",
                                        }),
                                      })
                                    : null,
                                ],
                              }),
                        ],
                      }),
                  na && !nl
                    ? (0, a.jsx)("p", {
                        role: "status",
                        className: "text-sm text-secondary select-none",
                        children: (0, a.jsx)(h.A, {
                          id: "restricted.aeon.teams.setup.channelInstalled.dot",
                          defaultMessage: "Your dot is installed in Teams",
                        }),
                      })
                    : null,
                ],
              })
            : null,
        nJ = null
      if (nn) {
        let e,
          t,
          n,
          s = "setup" === e8 ? "detailAction" : "dialogAction"
        ;(eW[135] !== nn.binding_id || eW[136] !== nA
          ? ((e = () => nA(nn.binding_id)), (eW[135] = nn.binding_id), (eW[136] = nA), (eW[137] = e))
          : (e = eW[137]),
          eW[138] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(h.A, { id: "restricted.aeon.teams.setup.disconnect", defaultMessage: "Disconnect" })),
              (eW[138] = t))
            : (t = eW[138]),
          eW[139] !== nT || eW[140] !== s || eW[141] !== e
            ? ((n = (0, a.jsx)(w.$, {
                type: "button",
                color: "ghostSecondary",
                size: s,
                disabled: nT,
                onClick: e,
                children: t,
              })),
              (eW[139] = nT),
              (eW[140] = s),
              (eW[141] = e),
              (eW[142] = n))
            : (n = eW[142]),
          (nJ = n))
      } else if ("dialog" === e8) {
        let e
        ;(eW[143] !== nT || eW[144] !== nQ || eW[145] !== e2
          ? ((e = (0, a.jsx)(w.$, {
              type: "button",
              color: "secondary",
              size: "dialogAction",
              disabled: nT,
              onClick: e2,
              children: nQ,
            })),
            (eW[143] = nT),
            (eW[144] = nQ),
            (eW[145] = e2),
            (eW[146] = e))
          : (e = eW[146]),
          (nJ = e))
      }
      eW[147] !== nT ||
      eW[148] !== nF ||
      eW[149] !== nK ||
      eW[150] !== t4 ||
      eW[151] !== e8 ||
      eW[152] !== nN ||
      eW[153] !== nR ||
      eW[154] !== tF?.agent_user_connected ||
      eW[155] !== nO
        ? ((eE =
            tF?.agent_user_connected || (t4 && "setup" !== e8)
              ? null
              : (0, a.jsx)(w.$, {
                  type: "submit",
                  color: "primary",
                  size: "setup" === e8 ? "detailAction" : "dialogAction",
                  loading: nT || nR || (nK && !nN),
                  disabled: nF,
                  children: nO,
                })),
          (eW[147] = nT),
          (eW[148] = nF),
          (eW[149] = nK),
          (eW[150] = t4),
          (eW[151] = e8),
          (eW[152] = nN),
          (eW[153] = nR),
          (eW[154] = tF?.agent_user_connected),
          (eW[155] = nO),
          (eW[156] = eE))
        : (eE = eW[156])
      let nX = eE
      if ("setup" === e8) {
        let e, t, n, s
        if (nz && !nT && null == t7) {
          let e
          return (
            eW[157] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(F.MV, {})), (eW[157] = e))
              : (e = eW[157]),
            e
          )
        }
        if (nt && !nD) {
          let e, t, n, s, i, l
          eW[158] !== eL ? ((e = (0, u.JXB)(eL)), (eW[158] = eL), (eW[159] = e)) : (e = eW[159])
          let o = null == tI || null == tC ? void 0 : (0, D.Yv)(tI, _.oI, tC)
          ;(eW[160] !== tv.queryKey || eW[161] !== tn
            ? ((t = () => tn.invalidateQueries({ queryKey: tv.queryKey })),
              (eW[160] = tv.queryKey),
              (eW[161] = tn),
              (eW[162] = t))
            : (t = eW[162]),
            eW[163] !== nt || eW[164] !== e || eW[165] !== o || eW[166] !== t
              ? ((n = { conversationId: e, destination: nt, sharePointConnected: o, onConnected: t }),
                (eW[163] = nt),
                (eW[164] = e),
                (eW[165] = o),
                (eW[166] = t),
                (eW[167] = n))
              : (n = eW[167]))
          let r = n
          eW[168] !== nc || eW[169] !== ti || eW[170] !== th || eW[171] !== ne || eW[172] !== r
            ? ((s =
                null == ne
                  ? (0, a.jsx)(Y, { ...r })
                  : (0, a.jsx)(Y, { ...r, recipientName: ne.orbit_display_name ?? (th ? nc?.trim() || ti : null) })),
              (eW[168] = nc),
              (eW[169] = ti),
              (eW[170] = th),
              (eW[171] = ne),
              (eW[172] = r),
              (eW[173] = s))
            : (s = eW[173])
          let c = s
          return (
            eW[174] !== nG || eW[175] !== nE
              ? ((i = nE
                  ? (0, a.jsx)("p", { role: "alert", className: "text-sm text-danger select-none", children: nG })
                  : null),
                (eW[174] = nG),
                (eW[175] = nE),
                (eW[176] = i))
              : (i = eW[176]),
            eW[177] !== c || eW[178] !== i
              ? ((l = (0, a.jsxs)("div", { className: "flex flex-col gap-6", children: [c, i] })),
                (eW[177] = c),
                (eW[178] = i),
                (eW[179] = l))
              : (l = eW[179]),
            l
          )
        }
        if ("pending" === nY) {
          let t
          ;(eW[180] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(k.I, { asset: i.G, className: "text-info" })), (eW[180] = t))
            : (t = eW[180]),
            (e = t))
        } else if ("connect" === nY || "reconnect" === nY) {
          let t
          ;(eW[181] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)("img", { src: U, alt: "", width: 32, height: 32 })), (eW[181] = t))
            : (t = eW[181]),
            (e = t))
        }
        eW[182] !== n$ || eW[183] !== nH || eW[184] !== nu || eW[185] !== tH
          ? ((t =
              tH || nu
                ? null
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)("p", { className: "text-sm text-secondary select-none", children: n$ }),
                      nH &&
                        (0, a.jsx)("p", {
                          role: "alert",
                          className: "mt-3 text-sm text-danger select-none",
                          children: nH,
                        }),
                    ],
                  })),
            (eW[182] = n$),
            (eW[183] = nH),
            (eW[184] = nu),
            (eW[185] = tH),
            (eW[186] = t))
          : (t = eW[186])
        let l = t
        return (
          eW[187] !== n$ ||
          eW[188] !== nY ||
          eW[189] !== e ||
          eW[190] !== l ||
          eW[191] !== tw ||
          eW[192] !== nJ ||
          eW[193] !== nB ||
          eW[194] !== nZ
            ? ((n = nB
                ? (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(F.mz, {
                        icon: e,
                        title: (0, a.jsx)(h.A, {
                          id: "restricted.aeon.teams.setup.emptyStateTitle",
                          defaultMessage:
                            "{state, select, failed {Couldn\u2019t set up Teams} reconnect {Reconnect Teams} pending {Waiting for Teams} installed {Teams is installed} other {Connect Teams}}",
                          values: { state: nY },
                        }),
                        description: (0, a.jsxs)("div", {
                          className: "flex flex-col gap-3",
                          children: [nZ, tw && "connect" === nY ? n$ : null],
                        }),
                      }),
                      nJ,
                    ],
                  })
                : (0, a.jsxs)(F.kQ, { description: l, children: [nZ, nJ] })),
              (eW[187] = n$),
              (eW[188] = nY),
              (eW[189] = e),
              (eW[190] = l),
              (eW[191] = tw),
              (eW[192] = nJ),
              (eW[193] = nB),
              (eW[194] = nZ),
              (eW[195] = n))
            : (n = eW[195]),
          eW[196] !== nP || eW[197] !== nz || eW[198] !== nX || eW[199] !== n
            ? ((s = (0, a.jsxs)("form", {
                className: "flex flex-col gap-6",
                "aria-busy": nz,
                onSubmit: nP,
                children: [n, nX],
              })),
              (eW[196] = nP),
              (eW[197] = nz),
              (eW[198] = nX),
              (eW[199] = n),
              (eW[200] = s))
            : (s = eW[200]),
          s
        )
      }
      return (
        eW[201] !== e2
          ? ((eK = (e) => {
              e || e2()
            }),
            (eW[201] = e2),
            (eW[202] = eK))
          : (eK = eW[202]),
        eW[203] !== nl
          ? ((eR = (0, a.jsx)(v.L3, {
              children: nl
                ? (0, a.jsx)(h.A, {
                    id: "restricted.aeon.teams.setup.reconnectTitle",
                    defaultMessage: "Reconnect Microsoft Teams",
                  })
                : (0, a.jsx)(h.A, { id: "restricted.aeon.teams.setup.title", defaultMessage: "Add to Teams" }),
            })),
            (eW[203] = nl),
            (eW[204] = eR))
          : (eR = eW[204]),
        eW[205] !== n$
          ? ((eF = (0, a.jsx)(v.rr, { className: "select-none", children: n$ })), (eW[205] = n$), (eW[206] = eF))
          : (eF = eW[206]),
        eW[207] !== eR || eW[208] !== eF
          ? ((eG = (0, a.jsx)(M.OO, { children: (0, a.jsx)(M.c7, { title: eR, subtitle: eF }) })),
            (eW[207] = eR),
            (eW[208] = eF),
            (eW[209] = eG))
          : (eG = eW[209]),
        eW[210] !== nZ
          ? ((eO = null == nZ ? null : (0, a.jsx)(M.OO, { className: "gap-3", children: nZ })),
            (eW[210] = nZ),
            (eW[211] = eO))
          : (eO = eW[211]),
        eW[212] !== nX || eW[213] !== nJ
          ? ((eQ = (0, a.jsx)(M.OO, { children: (0, a.jsxs)(M.Es, { expandSingleButton: !1, children: [nJ, nX] }) })),
            (eW[212] = nX),
            (eW[213] = nJ),
            (eW[214] = eQ))
          : (eQ = eW[214]),
        eW[215] !== nP || eW[216] !== eG || eW[217] !== eO || eW[218] !== eQ
          ? ((eP = (0, a.jsxs)(M.R4, { as: "form", onSubmit: nP, children: [eG, eO, eQ] })),
            (eW[215] = nP),
            (eW[216] = eG),
            (eW[217] = eO),
            (eW[218] = eQ),
            (eW[219] = eP))
          : (eP = eW[219]),
        eW[220] !== eK || eW[221] !== eP
          ? ((e$ = (0, a.jsx)(v.lG, { open: !0, size: "compact", onOpenChange: eK, children: eP })),
            (eW[220] = eK),
            (eW[221] = eP),
            (eW[222] = e$))
          : (e$ = eW[222]),
        e$
      )
    }
    function X(e) {
      return { id: e.id, display_name: e.name }
    }
    function ee(e) {
      return (0, a.jsx)("span", { className: "text-heading-lg text-tertiary select-none", children: e }, "preposition")
    }
    function et(e) {
      return (0, a.jsx)(
        "span",
        { className: "inline-flex max-w-full min-w-0 items-center gap-2", children: e },
        "destination",
      )
    }
    function en(e) {
      return { id: e.id, display_name: e.name }
    }
    function ea(e) {
      return (e ?? 0) + 1
    }
    function es(e) {
      ;(0, T.E0)({
        disposition: (0, q.x)({ browser: !0 }) ? "current-tab" : void 0,
        href: e,
        initiator: "side_panel_menu",
        openTarget: "external-browser",
      })
    }
    function ei(e) {
      return null == e.team_id && e.personal_chat_connected
    }
    function el(e) {
      return "create_dot" === e.name && !0 === e.is_enabled
    }
    function eo(e) {
      return "success" === e.state.status && "provisioning" === e.state.data && 15e3
    }
    function er(e) {
      return { id: e.link_id, name: e.name, auth_status: "ACTIVE", scopes: [] }
    }
    function ec(e) {
      return e.personal_chat_connected
    }
    function ed(e) {
      return e.personal_chat_connected
    }
    function eu(e) {
      let t,
        n,
        i,
        l,
        o,
        r,
        c,
        d,
        u,
        p,
        f,
        g,
        _,
        y,
        x = (0, s.c)(41),
        { label: A, value: b, items: j, disabled: S, addAccountDisabled: v, mode: M, onChange: T, onAddAccount: k } = e,
        N = void 0 === M ? "dialog" : M,
        q = (0, m.useId)(),
        D = "setup" === N ? "max-w-full min-w-0" : "min-w-0 flex-1"
      x[0] !== A || x[1] !== q
        ? ((t = (0, a.jsx)("span", { id: q, className: "sr-only", children: A })), (x[0] = A), (x[1] = q), (x[2] = t))
        : (t = x[2])
      let E = "setup" === N ? "max-w-full" : "w-full justify-between",
        K = "setup" === N ? "settingsSelect" : "dialogAction"
      return (
        x[3] !== N
          ? ((n = "setup" === N ? (0, a.jsx)("img", { src: U, alt: "", width: 16, height: 16 }) : null),
            (x[3] = N),
            (x[4] = n))
          : (n = x[4]),
        x[5] !== j || x[6] !== A || x[7] !== N || x[8] !== b
          ? ((i = j.find((e) => e.id === b)?.display_name || ("setup" === N ? A : b || A)),
            (x[5] = j),
            (x[6] = A),
            (x[7] = N),
            (x[8] = b),
            (x[9] = i))
          : (i = x[9]),
        x[10] !== i
          ? ((l = (0, a.jsx)("span", { className: "truncate", children: i })), (x[10] = i), (x[11] = l))
          : (l = x[11]),
        x[12] !== n || x[13] !== l
          ? ((o = (0, a.jsxs)("span", { className: "flex min-w-0 flex-1 items-center gap-2", children: [n, l] })),
            (x[12] = n),
            (x[13] = l),
            (x[14] = o))
          : (o = x[14]),
        x[15] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, a.jsx)(C.Aq_, {})), (x[15] = r)) : (r = x[15]),
        x[16] !== S || x[17] !== q || x[18] !== E || x[19] !== K || x[20] !== o
          ? ((c = (0, a.jsxs)(w.$, {
              className: E,
              "aria-labelledby": q,
              allowShrink: !0,
              color: "outlineSurface",
              type: "button",
              size: K,
              disabled: S,
              children: [o, r],
            })),
            (x[16] = S),
            (x[17] = q),
            (x[18] = E),
            (x[19] = K),
            (x[20] = o),
            (x[21] = c))
          : (c = x[21]),
        x[22] !== j ? ((d = j.map(em)), (x[22] = j), (x[23] = d)) : (d = x[23]),
        x[24] !== T || x[25] !== d || x[26] !== b
          ? ((u = (0, a.jsx)(I.ms.RadioGroup, { value: b, onValueChange: T, children: d })),
            (x[24] = T),
            (x[25] = d),
            (x[26] = b),
            (x[27] = u))
          : (u = x[27]),
        x[28] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(I.ms.Separator, {})), (x[28] = p))
          : (p = x[28]),
        x[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)(h.A, {
              id: "restricted.aeon.teams.setup.addAnotherAccount",
              defaultMessage: "Add another account",
            })),
            (x[29] = f))
          : (f = x[29]),
        x[30] !== v || x[31] !== k
          ? ((g = (0, a.jsx)(I.ms.Item, { disabled: v, onSelect: k, children: f })),
            (x[30] = v),
            (x[31] = k),
            (x[32] = g))
          : (g = x[32]),
        x[33] !== c || x[34] !== u || x[35] !== g
          ? ((_ = (0, a.jsxs)(I.Ab, { align: "start", contentWidth: "menu", triggerButton: c, children: [u, p, g] })),
            (x[33] = c),
            (x[34] = u),
            (x[35] = g),
            (x[36] = _))
          : (_ = x[36]),
        x[37] !== _ || x[38] !== D || x[39] !== t
          ? ((y = (0, a.jsxs)("div", { className: D, children: [t, _] })),
            (x[37] = _),
            (x[38] = D),
            (x[39] = t),
            (x[40] = y))
          : (y = x[40]),
        y
      )
    }
    function em(e) {
      return (0, a.jsx)(I.ms.RadioItem, { value: e.id, children: e.display_name }, e.id)
    }
  },
}
//# sourceMappingURL=678000.2a4f5cde23.js.map
