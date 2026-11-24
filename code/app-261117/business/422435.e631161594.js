export const __rspack_esm_ids = [422435]
export const __webpack_modules__ = {
  PGyQ(e, n, t) {
    t.d(n, { BusinessProfileAdAccountsDialog: () => Z })
    var s = t("ABep"),
      i = t("QosV"),
      a = t("irkb"),
      c = t("xSOA"),
      o = t("qmMi"),
      l = t("DBCl"),
      r = t("zd8w"),
      d = t("Wf1j"),
      u = t("oyxz"),
      f = t("Qgfj"),
      m = t("Ywss"),
      g = t("SPnB"),
      h = t("UOa8"),
      p = t("Kwur"),
      _ = t("MM0V"),
      y = t("Sm6l"),
      b = t("Sezd"),
      x = t("JNtf"),
      A = t("bqtn"),
      j = t("Ot7V"),
      v = t("bVeK"),
      I = t("RNul"),
      C = t("OWtl"),
      P = t("hZax"),
      M = t("soaw"),
      S = t("eShZ"),
      k = t("ZGhC"),
      w = t("DcBU"),
      F = t("bOSa"),
      R = t("ty20"),
      N = t("hIcQ"),
      T = t("FQ4k"),
      D = t("XpF1"),
      E = t("Gnfq"),
      q = t("mUDD")
    function z(e) {
      let n,
        t,
        a,
        c,
        o,
        l,
        r,
        d,
        f,
        m,
        g,
        h,
        p,
        _,
        y = (0, i.c)(30),
        { addAdAccountAdmins: b, disabled: A, onBack: j, onConfirm: v, returnFocusRef: I } = e
      return (
        y[0] !== j
          ? ((n = (e) => {
              e || j()
            }),
            (y[0] = j),
            (y[1] = n))
          : (n = y[1]),
        y[2] !== I
          ? ((t = {
              onCloseAutoFocus: (e) => {
                ;(e.preventDefault(), I.current?.focus())
              },
            }),
            (y[2] = I),
            (y[3] = t))
          : (t = y[3]),
        y[4] !== A || y[5] !== v
          ? ((a = (e) => {
              ;(e.preventDefault(), A || v())
            }),
            (y[4] = A),
            (y[5] = v),
            (y[6] = a))
          : (a = y[6]),
        y[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, s.jsx)(q.OO, {
              children: (0, s.jsx)(q.c7, {
                variant: "chatgptConfirmation",
                title: (0, s.jsx)(x.L3, {
                  children: (0, s.jsx)(u.A, {
                    id: "businessProfiles.adAccounts.adminAccess.title",
                    defaultMessage: "Admin access may change",
                  }),
                }),
              }),
            })),
            (y[7] = c))
          : (c = y[7]),
        y[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsx)(u.A, {
              id: "businessProfiles.adAccounts.adminAccess.description",
              defaultMessage:
                "Business profile admins who haven\u2019t joined the ad account\u2019s organization will get an email invitation. They may lose access to this profile until they accept it.",
            })),
            (y[8] = o))
          : (o = y[8]),
        y[9] !== b
          ? ((l = b
              ? (0, s.jsx)("span", {
                  className: "mt-2 block",
                  children: (0, s.jsx)(u.A, {
                    id: "businessProfiles.adAccounts.adminAccess.addAdmins",
                    defaultMessage: "Current ad account admins will also get admin access to this business profile.",
                  }),
                })
              : null),
            (y[9] = b),
            (y[10] = l))
          : (l = y[10]),
        y[11] !== l
          ? ((r = (0, s.jsx)(q.OO, {
              children: (0, s.jsxs)(x.rr, { className: "text-sm leading-5 text-secondary", children: [o, l] }),
            })),
            (y[11] = l),
            (y[12] = r))
          : (r = y[12]),
        y[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, s.jsx)(u.A, { id: "businessProfiles.adAccounts.adminAccess.back", defaultMessage: "Go back" })),
            (y[13] = d))
          : (d = y[13]),
        y[14] !== j
          ? ((f = (0, s.jsx)(R.d, {
              type: "button",
              color: "outlineGhost",
              size: "formAction",
              onClick: j,
              children: d,
            })),
            (y[14] = j),
            (y[15] = f))
          : (f = y[15]),
        y[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, s.jsx)(u.A, {
              id: "businessProfiles.adAccounts.adminAccess.connect",
              defaultMessage: "Connect ad account",
            })),
            (y[16] = m))
          : (m = y[16]),
        y[17] !== A
          ? ((g = (0, s.jsx)(R.d, { type: "submit", color: "primary", size: "formAction", disabled: A, children: m })),
            (y[17] = A),
            (y[18] = g))
          : (g = y[18]),
        y[19] !== g || y[20] !== f
          ? ((h = (0, s.jsx)(q.OO, {
              children: (0, s.jsxs)(q.Es, { variant: "chatgptConfirmation", children: [f, g] }),
            })),
            (y[19] = g),
            (y[20] = f),
            (y[21] = h))
          : (h = y[21]),
        y[22] !== h || y[23] !== a || y[24] !== r
          ? ((p = (0, s.jsxs)(q.R4, { as: "form", variant: "chatgptConfirmation", onSubmit: a, children: [c, r, h] })),
            (y[22] = h),
            (y[23] = a),
            (y[24] = r),
            (y[25] = p))
          : (p = y[25]),
        y[26] !== n || y[27] !== p || y[28] !== t
          ? ((_ = (0, s.jsx)(x.lG, {
              open: !0,
              variant: "chatgptConfirmation",
              size: "medium",
              showDialogClose: !1,
              onOpenChange: n,
              contentProps: t,
              children: p,
            })),
            (y[26] = n),
            (y[27] = p),
            (y[28] = t),
            (y[29] = _))
          : (_ = y[29]),
        _
      )
    }
    var G = t.p + "assets/header-banner.a6471186e5.png",
      U = t.p + "assets/520ae36faaea.svg"
    function O() {
      let e,
        n,
        t = (0, i.c)(2)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)("div", {
              className: "banner-voZZBB",
              children: (0, s.jsxs)("div", {
                className: "bannerImage-YoLwcf",
                children: [
                  (0, s.jsx)("img", { src: G, alt: "" }),
                  (0, s.jsx)("div", { className: "bannerFade-wbH6Gx" }),
                ],
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)("div", {
              "aria-hidden": !0,
              className: "header-JyPOPv",
              children: (0, s.jsxs)("div", {
                className: "canvas-S909EV",
                children: [
                  e,
                  (0, s.jsx)("div", {
                    className: "logo-IDWWUK",
                    children: (0, s.jsx)("img", { src: U, alt: "", className: "dark:invert" }),
                  }),
                  (0, s.jsx)("div", { className: "fade-HLDbkV" }),
                ],
              }),
            })),
            (t[1] = n))
          : (n = t[1]),
        n
      )
    }
    var K = t("JYBD"),
      Q = t("kvmP"),
      B = t("FQ6U"),
      L = t("UbDh")
    function W(e) {
      let n,
        t,
        a,
        d,
        f,
        y,
        b,
        A,
        j,
        v,
        I,
        N,
        T,
        E,
        q,
        z,
        G,
        U,
        O,
        W,
        Y,
        Z,
        H,
        $,
        J,
        ee,
        en,
        et,
        es,
        ei,
        ea,
        ec,
        eo,
        el,
        er,
        ed,
        eu,
        ef,
        em,
        eg,
        eh = (0, i.c)(169),
        { intent: ep, account: e_, onBack: ey, onCompleted: eb } = e,
        ex = (0, o.gh)(C.u)
      eh[0] === Symbol.for("react.memo_cache_sentinel") ? ((n = F.oD), (eh[0] = n)) : (n = eh[0])
      let eA = (0, P.Zj)(n),
        ej = (0, h.As)(),
        ev = (0, M.a)(),
        eI = (0, m.$P)("/auth/login"),
        [eC, eP] = (0, r.useState)(!1),
        { authority: eM, adAccountId: eS, action: ek, operationId: ew, expectedPrimaryRevision: eF } = ep
      eh[1] !== eS || eh[2] !== eM || eh[3] !== eA
        ? ((t = { authority: eM, separateConnectionRecovery: eA, passive: !0, selectedAdAccountId: eS }),
          (eh[1] = eS),
          (eh[2] = eM),
          (eh[3] = eA),
          (eh[4] = t))
        : (t = eh[4])
      let eR = t,
        { data: eN, error: eT, isFetching: eD, refetch: eE } = (0, o._U)(B.fI, eR),
        eq = (0, o.Ul)(L.cX)
      if (
        eh[5] !== e_?.name ||
        eh[6] !== eS ||
        eh[7] !== ej.accountId ||
        eh[8] !== ej.userId ||
        eh[9] !== eM ||
        eh[10] !== eN ||
        eh[11] !== ep ||
        eh[12] !== eq?.status
      ) {
        let e
        ;((y = (0, K.Qw)(eN, eM, eS)),
          (f = ej.accountId === eM.accountId && ej.userId === eM.userId),
          eh[20] !== eS || eh[21] !== eM.profileId || eh[22] !== eN
            ? ((e =
                eN?.business_profile_id === eM.profileId
                  ? eN.accounts.find((e) => {
                      let { id: n } = e
                      return n === eS
                    })
                  : void 0),
              (eh[20] = eS),
              (eh[21] = eM.profileId),
              (eh[22] = eN),
              (eh[23] = e))
            : (e = eh[23]),
          (b = e),
          (a = b?.name ?? e_?.name ?? null),
          (A = eq?.status === "signing-in"),
          (d = null != y && (0, K.iK)(ep, y)),
          (j =
            f &&
            null != y &&
            (eN?.can_connect === !0 || d || "disconnecting" === y.state || "reconnecting" === y.state) &&
            (0, K.o3)(ep, y)),
          (eh[5] = e_?.name),
          (eh[6] = eS),
          (eh[7] = ej.accountId),
          (eh[8] = ej.userId),
          (eh[9] = eM),
          (eh[10] = eN),
          (eh[11] = ep),
          (eh[12] = eq?.status),
          (eh[13] = a),
          (eh[14] = d),
          (eh[15] = f),
          (eh[16] = y),
          (eh[17] = b),
          (eh[18] = A),
          (eh[19] = j))
      } else ((a = eh[13]), (d = eh[14]), (f = eh[15]), (y = eh[16]), (b = eh[17]), (A = eh[18]), (j = eh[19]))
      let ez = j,
        eG = "disconnect" === ek && y?.state === "connected" && "available" !== y.disconnect_readiness,
        eU = ez && !eG
      ;(eh[24] !== ek ||
      eh[25] !== eS ||
      eh[26] !== eM ||
      eh[27] !== eF ||
      eh[28] !== ep ||
      eh[29] !== ew ||
      eh[30] !== eR ||
      eh[31] !== ex
        ? ((v = async () => {
            let e = ex.get(B.fI, eR),
              n = (0, K.Qw)(e.data, eM, eS),
              t = ex.get(g.PO)
            if (
              t.authLoading ||
              t.authenticatedAccountId !== eM.accountId ||
              t.userId !== eM.userId ||
              (0, L.yD)(t, eM) ||
              null != e.error ||
              e.isFetching ||
              null == n ||
              (e.data?.can_connect !== !0 &&
                !(0, K.iK)(ep, n) &&
                "disconnecting" !== n.state &&
                "reconnecting" !== n.state) ||
              !(0, K.o3)(ep, n) ||
              ((0, K.iK)(ep, n) && !(0, K.Eq)(ex, ep)) ||
              ("disconnect" === ek && "connected" === n.state && "available" !== n.disconnect_readiness)
            )
              throw new S.FetchError("Connection changed", 409)
            ;(0, K.Gk)(ex, ep)
            let s = await p.Request.safePost(
              "/chat/frontend/v1/business-profiles/{business_profile_id}/ad-accounts/connection-lifecycle",
              {
                parameters: { path: { business_profile_id: eM.profileId } },
                requestBody: { ad_account_id: eS, action: ek, operation_id: ew, expected_primary_revision: eF },
                additionalHeaders: {
                  "ChatGPT-Account-ID": eM.accountId,
                  [l.zBc]: eM.accountId,
                  "x-openai-use-sheep": "1",
                },
                expectedIdentity: { accountId: eM.accountId, userId: eM.userId },
                expectedResourceId: eS,
                expectedErrorStatuses: [401, 403, 404, 409, 422, 503],
                authRecovery: "passive",
                retry: "never",
              },
            )
            if (
              "business-profile-ad-account-lifecycle-v1" !== s.protocol ||
              s.business_profile_id !== eM.profileId ||
              s.ad_account_id !== eS ||
              s.action !== ek ||
              s.operation_id !== ew ||
              s.state !== ("disconnect" === ek ? "disconnected" : "connected") ||
              "string" != typeof s.primary_revision ||
              0 === s.primary_revision.length ||
              s.primary_revision.length > 256
            )
              throw new S.FetchError("Connection completion could not be confirmed", 503)
            return s
          }),
          (eh[24] = ek),
          (eh[25] = eS),
          (eh[26] = eM),
          (eh[27] = eF),
          (eh[28] = ep),
          (eh[29] = ew),
          (eh[30] = eR),
          (eh[31] = ex),
          (eh[32] = v))
        : (v = eh[32]),
        eh[33] !== e_?.icon_url ||
        eh[34] !== a ||
        eh[35] !== ek ||
        eh[36] !== eS ||
        eh[37] !== eM ||
        eh[38] !== ep ||
        eh[39] !== ev ||
        eh[40] !== eb ||
        eh[41] !== ex ||
        eh[42] !== b?.icon_url
          ? ((I = async (e) => {
              ;((0, K.Hy)(ex, ep), "disconnect" === ek && (0, L.pW)(ex, eM, eS))
              let n = [!1, !0].map((e) => ({ authority: eM, separateConnectionRecovery: e })),
                t = { authority: eM, separateConnectionRecovery: !0 }
              await Promise.all([
                ...n.map((e) => ex.query.cancel(B.fI, e, { exact: !0 })),
                ex.query.cancel(B.c6, t, { exact: !0 }),
              ])
              let s = !(0, L.yD)(ex.get(g.PO), eM),
                i = "reconnect" === ek ? { id: eS, name: a, icon_url: b?.icon_url ?? e_?.icon_url ?? null } : void 0
              if (s) {
                for (let t of n) ex.query.setData(B.fI, t, (n) => V(n, ep, e.primary_revision, i))
                ex.query.setData(B.c6, t, (n) => V(n, ep, e.primary_revision))
              }
              for (let e of n)
                (ex.query.invalidate(B.xP, e, { refetchType: "none" }),
                  ex.query.invalidate(B.fI, e, { exact: !0, refetchType: s ? "active" : "none" }),
                  ex.query.invalidate(B.fI, { ...e, passive: !0, selectedAdAccountId: eS }, { refetchType: "none" }))
              ;(ex.query.invalidate(B.c6, t, { refetchType: s ? "active" : "none" }),
                (0, D.xz)(ex.queryClient, eM.accountId, eM.profileId),
                ev() && s && eb(i))
            }),
            (eh[33] = e_?.icon_url),
            (eh[34] = a),
            (eh[35] = ek),
            (eh[36] = eS),
            (eh[37] = eM),
            (eh[38] = ep),
            (eh[39] = ev),
            (eh[40] = eb),
            (eh[41] = ex),
            (eh[42] = b?.icon_url),
            (eh[43] = I))
          : (I = eh[43]),
        eh[44] !== eM || eh[45] !== ex
          ? ((N = async (e, n) => {
              let t = { queryKey: (0, Q.VX)(eM), exact: !0 }
              ;(await ex.queryClient.cancelQueries(t),
                ex.queryClient.invalidateQueries(
                  null == n ? t : { queryKey: ["business-profiles", eM.accountId, eM.profileId] },
                ))
            }),
            (eh[44] = eM),
            (eh[45] = ex),
            (eh[46] = N))
          : (N = eh[46]),
        eh[47] !== v || eh[48] !== I || eh[49] !== N
          ? ((T = { mutationFn: v, onSuccess: I, onSettled: N, retry: !1, gcTime: 0 }),
            (eh[47] = v),
            (eh[48] = I),
            (eh[49] = N),
            (eh[50] = T))
          : (T = eh[50]))
      let { mutate: eO, error: eK, isPending: eQ, reset: eB } = (0, c.n)(T),
        eL = eT ?? eK
      eh[51] !== eS || eh[52] !== eL || eh[53] !== eM.profileId
        ? ((E = (0, w.ID)(eL, eM.profileId, eS)), (eh[51] = eS), (eh[52] = eL), (eh[53] = eM.profileId), (eh[54] = E))
        : (E = eh[54])
      let eW = E,
        eV = eW?.kind === "challenge" ? eW.challenge : null,
        eX = eV?.reauthentication === "no_compatible_method",
        eY = eL instanceof S.FetchError && (401 === eL.status || eV?.reauthentication === "available"),
        eZ = eK instanceof S.FetchError && 409 === eK.status,
        eH = eL instanceof S.FetchError && 403 === eL.status && null == eW,
        e$ = null != eN && null == eT && !eD && !ez
      eh[55] !== eM ||
      eh[56] !== eY ||
      eh[57] !== eV ||
      eh[58] !== f ||
      eh[59] !== ep ||
      eh[60] !== ev ||
      eh[61] !== eQ ||
      eh[62] !== eI ||
      eh[63] !== eB ||
      eh[64] !== ex ||
      eh[65] !== A
        ? ((q = async () => {
            if (!eY || !f || A || eQ) return
            let e = (0, K.Cv)(ex, ep)
            null == e
              ? eP(!0)
              : (await (0, L.F0)(
                  ex,
                  eM,
                  null == eV ? "session" : "tenant_policy",
                  eI,
                  void 0,
                  void 0,
                  void 0,
                  eV?.tenant_id,
                  void 0,
                  void 0,
                  e,
                ),
                ev() && (ex.get(L.cX)?.status === "success" ? (eB(), eP(!1)) : eP(!0)))
          }),
          (eh[55] = eM),
          (eh[56] = eY),
          (eh[57] = eV),
          (eh[58] = f),
          (eh[59] = ep),
          (eh[60] = ev),
          (eh[61] = eQ),
          (eh[62] = eI),
          (eh[63] = eB),
          (eh[64] = ex),
          (eh[65] = A),
          (eh[66] = q))
        : (q = eh[66])
      let eJ = q
      return (
        eh[67] !== eZ ||
        eh[68] !== eH ||
        eh[69] !== eD ||
        eh[70] !== eQ ||
        eh[71] !== eO ||
        eh[72] !== eX ||
        eh[73] !== A ||
        eh[74] !== eU
          ? ((z = (e) => {
              ;(e.preventDefault(), !eU || eD || eQ || A || eX || eZ || eH || eO())
            }),
            (eh[67] = eZ),
            (eh[68] = eH),
            (eh[69] = eD),
            (eh[70] = eQ),
            (eh[71] = eO),
            (eh[72] = eX),
            (eh[73] = A),
            (eh[74] = eU),
            (eh[75] = z))
          : (z = eh[75]),
        eh[76] !== ek
          ? ((G =
              "disconnect" === ek
                ? (0, s.jsx)(u.A, {
                    id: "businessProfiles.adAccounts.disconnectTitle",
                    defaultMessage: "Disconnect ad account?",
                  })
                : null),
            (eh[76] = ek),
            (eh[77] = G))
          : (G = eh[77]),
        eh[78] !== ek || eh[79] !== d
          ? ((U =
              "reconnect" === ek && d
                ? (0, s.jsx)(u.A, {
                    id: "businessProfiles.adAccounts.finishReconnectTitle",
                    defaultMessage: "Finish reconnecting ad account?",
                  })
                : null),
            (eh[78] = ek),
            (eh[79] = d),
            (eh[80] = U))
          : (U = eh[80]),
        eh[81] !== ek || eh[82] !== d
          ? ((O =
              "reconnect" !== ek || d
                ? null
                : (0, s.jsx)(u.A, {
                    id: "businessProfiles.adAccounts.reconnectTitle",
                    defaultMessage: "Reconnect ad account?",
                  })),
            (eh[81] = ek),
            (eh[82] = d),
            (eh[83] = O))
          : (O = eh[83]),
        eh[84] !== G || eh[85] !== U || eh[86] !== O
          ? ((W = (0, s.jsxs)(x.L3, { children: [G, U, O] })), (eh[84] = G), (eh[85] = U), (eh[86] = O), (eh[87] = W))
          : (W = eh[87]),
        eh[88] !== a
          ? ((Y = a ? (0, s.jsx)("p", { className: "text-sm text-default", children: a }) : null),
            (eh[88] = a),
            (eh[89] = Y))
          : (Y = eh[89]),
        eh[90] !== eS
          ? ((Z = (0, s.jsx)("p", { className: "text-sm text-secondary select-text", children: eS })),
            (eh[90] = eS),
            (eh[91] = Z))
          : (Z = eh[91]),
        eh[92] !== Y || eh[93] !== Z
          ? ((H = (0, s.jsxs)("div", { children: [Y, Z] })), (eh[92] = Y), (eh[93] = Z), (eh[94] = H))
          : (H = eh[94]),
        eh[95] !== ek
          ? (($ =
              "disconnect" === ek
                ? (0, s.jsx)(_.l, {
                    type: "warning",
                    variant: "callout",
                    content: (0, s.jsx)(u.A, {
                      id: "businessProfiles.adAccounts.disconnectWarning",
                      defaultMessage:
                        "Disconnecting can stop Agent ads from serving and makes this ad account\u2019s Agent builder unavailable until you reconnect",
                    }),
                  })
                : null),
            (eh[95] = ek),
            (eh[96] = $))
          : ($ = eh[96]),
        eh[97] !== ek || eh[98] !== d
          ? ((J =
              "reconnect" === ek && d
                ? (0, s.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(u.A, {
                      id: "businessProfiles.adAccounts.finishReconnectDescription",
                      defaultMessage: "Retry to confirm the connection you already started",
                    }),
                  })
                : null),
            (eh[97] = ek),
            (eh[98] = d),
            (eh[99] = J))
          : (J = eh[99]),
        eh[100] !== ek || eh[101] !== d
          ? ((ee =
              "reconnect" !== ek || d
                ? null
                : (0, s.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(u.A, {
                      id: "businessProfiles.adAccounts.reconnectDescription",
                      defaultMessage: "Reconnect this ad account to the same business profile and shared agent",
                    }),
                  })),
            (eh[100] = ek),
            (eh[101] = d),
            (eh[102] = ee))
          : (ee = eh[102]),
        eh[103] !== ek
          ? ((en = (0, s.jsx)("p", {
              className: "text-sm text-secondary",
              children:
                "disconnect" === ek
                  ? (0, s.jsx)(u.A, {
                      id: "businessProfiles.adAccounts.disconnectRetainsContent",
                      defaultMessage:
                        "Your saved agent content, organization, and members are kept. Ad account details will no longer sync",
                    })
                  : (0, s.jsx)(u.A, {
                      id: "businessProfiles.adAccounts.lifecyclePreservesBusiness",
                      defaultMessage: "Your saved agent content, organization, and members are kept",
                    }),
            })),
            (et =
              "disconnect" === ek
                ? (0, s.jsx)("p", {
                    className: "text-sm text-secondary",
                    children: (0, s.jsx)(u.A, {
                      id: "businessProfiles.adAccounts.disconnectLeadSync",
                      defaultMessage:
                        "If this ad account is used for Lead Sync, disconnecting can stop lead delivery. After reconnecting, check Lead Sync. You may need to set it up again.",
                    }),
                  })
                : null),
            (eh[103] = ek),
            (eh[104] = en),
            (eh[105] = et))
          : ((en = eh[104]), (et = eh[105])),
        eh[106] !== eG ||
        eh[107] !== y?.disconnect_readiness ||
        eh[108] !== eD ||
        eh[109] !== eT ||
        eh[110] !== eE ||
        eh[111] !== ez
          ? ((es =
              ez && eG && null == eT && !eD
                ? (0, s.jsx)(_.l, {
                    type: "error",
                    role: "alert",
                    variant: "callout",
                    content: (0, s.jsx)(X, { migrationRequired: y?.disconnect_readiness === "migration_required" }),
                    primaryCtaText: (0, s.jsx)(u.A, {
                      id: "businessProfiles.adAccounts.lifecycleRefresh",
                      defaultMessage: "Refresh",
                    }),
                    primaryCtaColor: "outlineGhost",
                    onPrimaryCtaClick: () => void eE(),
                  })
                : null),
            (eh[106] = eG),
            (eh[107] = y?.disconnect_readiness),
            (eh[108] = eD),
            (eh[109] = eT),
            (eh[110] = eE),
            (eh[111] = ez),
            (eh[112] = es))
          : (es = eh[112]),
        eh[113] !== eY || eh[114] !== eH || eh[115] !== eX || eh[116] !== eT || eh[117] !== eE
          ? ((ei =
              null == eT || eY || eX || eH
                ? null
                : (0, s.jsx)(_.l, {
                    type: "error",
                    role: "alert",
                    variant: "callout",
                    content: (0, s.jsx)(u.A, {
                      id: "businessProfiles.adAccounts.lifecycleReadError",
                      defaultMessage: "Couldn\u2019t check this connection. Refresh before continuing",
                    }),
                    primaryCtaText: (0, s.jsx)(u.A, {
                      id: "businessProfiles.adAccounts.lifecycleRefresh",
                      defaultMessage: "Refresh",
                    }),
                    primaryCtaColor: "outlineGhost",
                    onPrimaryCtaClick: () => void eE(),
                  })),
            (eh[113] = eY),
            (eh[114] = eH),
            (eh[115] = eX),
            (eh[116] = eT),
            (eh[117] = eE),
            (eh[118] = ei))
          : (ei = eh[118]),
        eh[119] !== e$ || eh[120] !== eZ
          ? ((ea =
              e$ || eZ
                ? (0, s.jsx)(_.l, {
                    type: "error",
                    role: "alert",
                    variant: "callout",
                    content: (0, s.jsx)(u.A, {
                      id: "businessProfiles.adAccounts.lifecycleChanged",
                      defaultMessage:
                        "This connection changed. Go back and review its current status before trying again",
                    }),
                  })
                : null),
            (eh[119] = e$),
            (eh[120] = eZ),
            (eh[121] = ea))
          : (ea = eh[121]),
        eh[122] !== eX
          ? ((ec = eX
              ? (0, s.jsx)(_.l, {
                  type: "error",
                  role: "alert",
                  variant: "callout",
                  content: (0, s.jsxs)("div", {
                    className: "flex flex-col gap-3",
                    children: [
                      (0, s.jsx)(u.A, {
                        id: "businessProfiles.adAccounts.lifecycleNoCompatible",
                        defaultMessage:
                          "The sign-in requirements don\u2019t match. Try a different ChatGPT workspace or contact your administrator",
                      }),
                      (0, s.jsx)(k.U, {}),
                    ],
                  }),
                })
              : null),
            (eh[122] = eX),
            (eh[123] = ec))
          : (ec = eh[123]),
        eh[124] !== eH
          ? ((eo = eH
              ? (0, s.jsx)(_.l, {
                  type: "error",
                  role: "alert",
                  variant: "callout",
                  content: (0, s.jsx)(u.A, {
                    id: "businessProfiles.adAccounts.lifecyclePermission",
                    defaultMessage: "You need admin access to this business profile and ad account",
                  }),
                })
              : null),
            (eh[124] = eH),
            (eh[125] = eo))
          : (eo = eh[125]),
        eh[126] !== eY || eh[127] !== eZ || eh[128] !== eH || eh[129] !== eK || eh[130] !== eX
          ? ((el =
              (null == eK && !eY) || eZ || eX || eH
                ? null
                : (0, s.jsx)(_.l, {
                    type: "error",
                    role: "alert",
                    variant: "callout",
                    content: eY
                      ? (0, s.jsx)(u.A, {
                          id: "businessProfiles.adAccounts.lifecycleSignInRequired",
                          defaultMessage: "Sign in again, then review and confirm this action",
                        })
                      : (0, s.jsx)(u.A, {
                          id: "businessProfiles.adAccounts.lifecycleUnconfirmed",
                          defaultMessage:
                            "We couldn\u2019t confirm this change. Review the connection\u2019s status before trying again",
                        }),
                  })),
            (eh[126] = eY),
            (eh[127] = eZ),
            (eh[128] = eH),
            (eh[129] = eK),
            (eh[130] = eX),
            (eh[131] = el))
          : (el = eh[131]),
        eh[132] !== eC
          ? ((er = eC
              ? (0, s.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children: (0, s.jsx)(u.A, {
                    id: "businessProfiles.adAccounts.lifecycleSignInError",
                    defaultMessage: "Couldn\u2019t complete sign-in. Try again",
                  }),
                })
              : null),
            (eh[132] = eC),
            (eh[133] = er))
          : (er = eh[133]),
        eh[134] === Symbol.for("react.memo_cache_sentinel")
          ? ((ed = (0, s.jsx)(u.A, { id: "businessProfiles.adAccounts.lifecycleBack", defaultMessage: "Back" })),
            (eh[134] = ed))
          : (ed = eh[134]),
        eh[135] !== ey
          ? ((eu = (0, s.jsx)(R.d, {
              type: "button",
              color: "outlineGhost",
              size: "dialog",
              onClick: ey,
              children: ed,
            })),
            (eh[135] = ey),
            (eh[136] = eu))
          : (eu = eh[136]),
        eh[137] !== ek ||
        eh[138] !== eY ||
        eh[139] !== eZ ||
        eh[140] !== f ||
        eh[141] !== eH ||
        eh[142] !== eD ||
        eh[143] !== eQ ||
        eh[144] !== eX ||
        eh[145] !== eJ ||
        eh[146] !== A ||
        eh[147] !== eU
          ? ((ef = eY
              ? (0, s.jsx)(R.d, {
                  type: "button",
                  color: "primary",
                  size: "dialog",
                  loading: A,
                  disabled: !f || eQ || A,
                  onClick: () => void eJ(),
                  children: (0, s.jsx)(u.A, {
                    id: "businessProfiles.adAccounts.lifecycleSignIn",
                    defaultMessage: "Sign in again",
                  }),
                })
              : (0, s.jsx)(R.d, {
                  type: "submit",
                  color: "disconnect" === ek ? "danger" : "primary",
                  size: "dialog",
                  loading: eQ,
                  disabled: !eU || eD || eQ || A || eX || eZ || eH,
                  children:
                    "disconnect" === ek
                      ? (0, s.jsx)(u.A, {
                          id: "businessProfiles.adAccounts.confirmDisconnect",
                          defaultMessage: "Disconnect",
                        })
                      : (0, s.jsx)(u.A, {
                          id: "businessProfiles.adAccounts.confirmReconnect",
                          defaultMessage: "Reconnect",
                        }),
                })),
            (eh[137] = ek),
            (eh[138] = eY),
            (eh[139] = eZ),
            (eh[140] = f),
            (eh[141] = eH),
            (eh[142] = eD),
            (eh[143] = eQ),
            (eh[144] = eX),
            (eh[145] = eJ),
            (eh[146] = A),
            (eh[147] = eU),
            (eh[148] = ef))
          : (ef = eh[148]),
        eh[149] !== eu || eh[150] !== ef
          ? ((em = (0, s.jsxs)("div", { className: "flex flex-wrap justify-end gap-2", children: [eu, ef] })),
            (eh[149] = eu),
            (eh[150] = ef),
            (eh[151] = em))
          : (em = eh[151]),
        eh[152] !== z ||
        eh[153] !== W ||
        eh[154] !== H ||
        eh[155] !== $ ||
        eh[156] !== J ||
        eh[157] !== ee ||
        eh[158] !== en ||
        eh[159] !== et ||
        eh[160] !== es ||
        eh[161] !== ei ||
        eh[162] !== ea ||
        eh[163] !== ec ||
        eh[164] !== eo ||
        eh[165] !== el ||
        eh[166] !== er ||
        eh[167] !== em
          ? ((eg = (0, s.jsxs)("form", {
              className: "flex flex-col gap-4 px-6 pt-4 pb-6",
              onSubmit: z,
              children: [W, H, $, J, ee, en, et, es, ei, ea, ec, eo, el, er, em],
            })),
            (eh[152] = z),
            (eh[153] = W),
            (eh[154] = H),
            (eh[155] = $),
            (eh[156] = J),
            (eh[157] = ee),
            (eh[158] = en),
            (eh[159] = et),
            (eh[160] = es),
            (eh[161] = ei),
            (eh[162] = ea),
            (eh[163] = ec),
            (eh[164] = eo),
            (eh[165] = el),
            (eh[166] = er),
            (eh[167] = em),
            (eh[168] = eg))
          : (eg = eh[168]),
        eg
      )
    }
    function V(e, n, t, s) {
      let { authority: i, adAccountId: a, action: c } = n
      if (e?.business_profile_id !== i.profileId) return e
      let o = (0, K.Qw)(e, i, a)
      if (null != o && (o.primary_revision === t || !(0, K.o3)(n, o))) return e
      let l = e.accounts.filter(({ id: e }) => e !== a)
      "reconnect" === c && null != s && l.push({ id: a, name: s.name, icon_url: s.icon_url })
      let r = e.ad_account_lifecycle
      if (r?.[a] == null) return { ...e, accounts: l }
      let d = { ...r }
      return (delete d[a], { ...e, accounts: l, ad_account_lifecycle: d })
    }
    function X(e) {
      let n,
        t = (0, i.c)(2),
        { migrationRequired: a } = e
      if (a) {
        let e
        return (
          t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(u.A, {
                id: "businessProfiles.adAccounts.disconnectMigrationRequired",
                defaultMessage:
                  "This account uses an older agent setup. It must be updated before you can disconnect. Contact your account representative for help.",
              })),
              (t[0] = e))
            : (e = t[0]),
          e
        )
      }
      return (
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(u.A, {
              id: "businessProfiles.adAccounts.disconnectUnavailable",
              defaultMessage:
                "Disconnect isn\u2019t available right now. Refresh this connection\u2019s status before trying again.",
            })),
            (t[1] = n))
          : (n = t[1]),
        n
      )
    }
    var Y = t("FIwH")
    function Z(e) {
      let n,
        t,
        a,
        c,
        l,
        f,
        m,
        g,
        h,
        p,
        _,
        y,
        b,
        A = (0, i.c)(69),
        {
          manager: j,
          authority: I,
          onClose: P,
          initialView: M,
          preferredAdAccountId: S,
          resumedFromSignIn: k,
          onConnected: w,
        } = e,
        F = void 0 !== k && k,
        T = (0, o.gh)(C.u),
        D = (0, r.useRef)(!1),
        [E, q] = (0, r.useState)("connect" === (void 0 === M ? "manage" : M)),
        [z, G] = (0, r.useState)(),
        [U, O] = (0, r.useState)(null),
        [K, Q] = (0, r.useState)(),
        B = (0, d.A)(),
        V = (0, o.Ul)(L.Vq)
      A[0] !== I || A[1] !== V || A[2] !== U?.intent
        ? ((n = U?.intent ?? (null != V && (0, L.Kk)(V.authority, I) ? V.lifecycle : void 0)),
          (A[0] = I),
          (A[1] = V),
          (A[2] = U?.intent),
          (A[3] = n))
        : (n = A[3])
      let X = n,
        Y = null == X && (V?.confirming ?? E)
      A[4] !== I || A[5] !== T
        ? ((t = () => {
            ;(O(null), T.set(L.Vq, (e) => (null != e && (0, L.Kk)(e.authority, I) ? { ...e, lifecycle: void 0 } : e)))
          }),
          (A[4] = I),
          (A[5] = T),
          (A[6] = t))
        : (t = A[6])
      let Z = t
      A[7] !== I || A[8] !== V || A[9] !== T
        ? ((a = (e) => {
            null == V
              ? q(e)
              : T.set(L.Vq, (n) => (null != n && (0, L.Kk)(n.authority, I) ? { ...n, confirming: e } : n))
          }),
          (A[7] = I),
          (A[8] = V),
          (A[9] = T),
          (A[10] = a))
        : (a = A[10])
      let $ = a
      A[11] !== P || A[12] !== T
        ? ((c = () => {
            ;((D.current = !0), (0, L.D$)(T), P())
          }),
          (A[11] = P),
          (A[12] = T),
          (A[13] = c))
        : (c = A[13])
      let J = c,
        en = Y ? "confirmationClose-GiVYFo" : void 0
      A[14] !== B ? ((l = B.formatMessage(ey.close)), (A[14] = B), (A[15] = l)) : (l = A[15])
      let et = Y ? "text-media-background" : void 0
      ;(A[16] !== et ? ((f = (0, s.jsx)(v.pgK, { className: et })), (A[16] = et), (A[17] = f)) : (f = A[17]),
        A[18] !== J || A[19] !== f || A[20] !== en || A[21] !== l
          ? ((m = (0, s.jsx)(R.d, {
              type: "button",
              color: "ghostActive",
              size: "iconCircleLg",
              className: en,
              "aria-label": l,
              onClick: J,
              children: f,
            })),
            (A[18] = J),
            (A[19] = f),
            (A[20] = en),
            (A[21] = l),
            (A[22] = m))
          : (m = A[22]))
      let es = m
      if (null != X) {
        let e,
          n,
          t = U?.account
        ;(A[23] !== Z || A[24] !== $
          ? ((e = (e) => {
              ;(Q(e), null != e && $(!1), Z())
            }),
            (A[23] = Z),
            (A[24] = $),
            (A[25] = e))
          : (e = A[25]),
          A[26] !== Z || A[27] !== X || A[28] !== t || A[29] !== e
            ? ((n = (0, s.jsx)(W, { intent: X, account: t, onBack: Z, onCompleted: e }, X.operationId)),
              (A[26] = Z),
              (A[27] = X),
              (A[28] = t),
              (A[29] = e),
              (A[30] = n))
            : (n = A[30]),
          (g = n))
      } else if (Y) {
        let e,
          n,
          t = z ?? S,
          i = null != V
        ;(A[31] !== w || A[32] !== $
          ? ((e = (e) => {
              D.current || ($(!1), w?.(e))
            }),
            (A[31] = w),
            (A[32] = $),
            (A[33] = e))
          : (e = A[33]),
          A[34] !== I || A[35] !== es || A[36] !== F || A[37] !== t || A[38] !== i || A[39] !== e
            ? ((n = (0, s.jsx)(ee, {
                authority: I,
                closeButton: es,
                preferredAdAccountId: t,
                resumedFromSignIn: F,
                restoreAfterSignIn: i,
                onLifecycle: O,
                onConnected: e,
              })),
              (A[34] = I),
              (A[35] = es),
              (A[36] = F),
              (A[37] = t),
              (A[38] = i),
              (A[39] = e),
              (A[40] = n))
            : (n = A[40]),
          (g = n))
      } else {
        let e, n, t, i, a, c
        ;(A[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(x.L3, {
              className: "min-w-0 flex-1 py-1 text-heading-md leading-7 font-semibold",
              children: (0, s.jsx)(u.A, { ...ey.manageTitle }),
            })),
            (A[41] = e))
          : (e = A[41]),
          A[42] !== es
            ? ((n = (0, s.jsxs)("div", { className: "flex items-start gap-3 ps-6 pe-4 pt-4", children: [e, es] })),
              (A[42] = es),
              (A[43] = n))
            : (n = A[43]),
          A[44] === Symbol.for("react.memo_cache_sentinel") ? ((t = () => Q(void 0)), (A[44] = t)) : (t = A[44]),
          A[45] !== $
            ? ((i = (e) => {
                ;(G(e), $(!0))
              }),
              (A[45] = $),
              (A[46] = i))
            : (i = A[46]),
          A[47] !== I || A[48] !== K || A[49] !== i
            ? ((a = (0, s.jsx)("div", {
                className: "flex flex-col gap-3 px-6 pt-4 pb-6",
                children: (0, s.jsx)(H, {
                  authority: I,
                  pendingReconnect: K,
                  onRetireReconnectReceipt: t,
                  onLifecycle: O,
                  onConnect: i,
                }),
              })),
              (A[47] = I),
              (A[48] = K),
              (A[49] = i),
              (A[50] = a))
            : (a = A[50]),
          A[51] !== n || A[52] !== a
            ? ((c = (0, s.jsxs)(s.Fragment, { children: [n, a] })), (A[51] = n), (A[52] = a), (A[53] = c))
            : (c = A[53]),
          (g = c))
      }
      A[54] !== J
        ? ((h = (e) => {
            e || J()
          }),
          (A[54] = J),
          (A[55] = h))
        : (h = A[55])
      let ei = Y ? "beacon" : "large",
        ea = null != X
      ;(A[56] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = { "aria-describedby": void 0 }), (A[56] = p))
        : (p = A[56]),
        A[57] !== g
          ? ((_ = (0, s.jsx)("div", {
              className: "max-h-[calc(100dvh-2rem)] overflow-y-auto select-none",
              children: g,
            })),
            (A[57] = g),
            (A[58] = _))
          : (_ = A[58]),
        A[59] !== h || A[60] !== ei || A[61] !== ea || A[62] !== _
          ? ((y = (0, s.jsx)(x.lG, {
              open: !0,
              onOpenChange: h,
              variant: "onboarding",
              backdrop: "modal",
              size: ei,
              showDialogClose: ea,
              contentProps: p,
              children: _,
            })),
            (A[59] = h),
            (A[60] = ei),
            (A[61] = ea),
            (A[62] = _),
            (A[63] = y))
          : (y = A[63]))
      let ec = y
      return (
        A[64] !== J || A[65] !== Y || A[66] !== ec || A[67] !== j
          ? ((b = Y
              ? (0, s.jsx)(N.BusinessProfileVerificationEntry, {
                  manager: j,
                  purpose: "connect-ad-accounts",
                  onExit: J,
                  children: ec,
                })
              : ec),
            (A[64] = J),
            (A[65] = Y),
            (A[66] = ec),
            (A[67] = j),
            (A[68] = b))
          : (b = A[68]),
        b
      )
    }
    function H(e) {
      let n,
        t,
        a,
        c,
        l,
        f,
        m,
        g,
        h,
        p,
        _,
        y,
        b,
        x,
        A = (0, i.c)(86),
        { authority: j, pendingReconnect: I, onRetireReconnectReceipt: M, onConnect: S, onLifecycle: k } = e,
        w = (0, o.gh)(C.u)
      A[0] === Symbol.for("react.memo_cache_sentinel") ? ((n = F.oD), (A[0] = n)) : (n = A[0])
      let N = (0, P.Zj)(n)
      A[1] !== j || A[2] !== N
        ? ((t = { authority: j, separateConnectionRecovery: N }), (A[1] = j), (A[2] = N), (A[3] = t))
        : (t = A[3])
      let T = t,
        D = (0, o.Ul)(L.RX),
        E = (0, d.A)(),
        { data: q, error: z, isFetching: G, refetch: U } = (0, o._U)(B.fI, T)
      A[4] !== N ? ((a = { enabled: N }), (A[4] = N), (A[5] = a)) : (a = A[5])
      let { data: O, error: Q, isFetching: W, refetch: V } = (0, o._U)(B.c6, T, a),
        X = N ? Q : null
      A[6] !== z || A[7] !== X
        ? ((c = null != (0, L.Di)(X) ? X : (z ?? X)), (A[6] = z), (A[7] = X), (A[8] = c))
        : (c = A[8])
      let Y = c,
        Z = null != z && !G,
        H = null != X && !W,
        ee = N ? O : q,
        en = q?.business_profile_id === j.profileId && (!N || O?.business_profile_id === j.profileId)
      if (
        (A[9] !== D ||
        A[10] !== j ||
        A[11] !== Y ||
        A[12] !== G ||
        A[13] !== W ||
        A[14] !== M ||
        A[15] !== I ||
        A[16] !== ee ||
        A[17] !== en ||
        A[18] !== w
          ? ((l = () => {
              if ((null != I && (en || null != Y) && M(), null == Y && !G && !W))
                for (let e of D)
                  (0, L.Kk)(e.authority, j) &&
                    "submitted" === e.submission &&
                    !0 === e.addAdAccountAdmins &&
                    (0, B.MQ)(ee, j, e.adAccountId) &&
                    (0, L.pW)(w, j, e.adAccountId, e)
            }),
            (f = [D, j, Y, G, W, M, I, ee, en, w]),
            (A[9] = D),
            (A[10] = j),
            (A[11] = Y),
            (A[12] = G),
            (A[13] = W),
            (A[14] = M),
            (A[15] = I),
            (A[16] = ee),
            (A[17] = en),
            (A[18] = w),
            (A[19] = l),
            (A[20] = f))
          : ((l = A[19]), (f = A[20])),
        (0, r.useEffect)(l, f),
        null != Y)
      ) {
        let e, n, t
        A[21] !== Y ? ((e = (0, L.Di)(Y)), (A[21] = Y), (A[22] = e)) : (e = A[22])
        let i = e
        if (null != i) {
          let e
          return (
            A[23] !== j || A[24] !== i
              ? ((e = (0, s.jsx)(eh, { authority: j, reason: i })), (A[23] = j), (A[24] = i), (A[25] = e))
              : (e = A[25]),
            e
          )
        }
        let a = !Z && !H
        return (
          A[26] !== U || A[27] !== V || A[28] !== Z || A[29] !== H
            ? ((n = () => {
                ;(Z && U(), H && V())
              }),
              (A[26] = U),
              (A[27] = V),
              (A[28] = Z),
              (A[29] = H),
              (A[30] = n))
            : (n = A[30]),
          A[31] !== Y || A[32] !== a || A[33] !== n
            ? ((t = (0, s.jsx)(ep, { error: Y, disabled: a, onRetry: n })),
              (A[31] = Y),
              (A[32] = a),
              (A[33] = n),
              (A[34] = t))
            : (t = A[34]),
          t
        )
      }
      if (!en) {
        let e, n, t
        return (
          A[35] !== I ? ((e = null != I && (0, s.jsx)(em, { account: I })), (A[35] = I), (A[36] = e)) : (e = A[36]),
          A[37] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, s.jsx)(eg, {})), (A[37] = n)) : (n = A[37]),
          A[38] !== e ? ((t = (0, s.jsxs)(s.Fragment, { children: [e, n] })), (A[38] = e), (A[39] = t)) : (t = A[39]),
          t
        )
      }
      let et = N ? O : q
      if (
        (A[40] !== ee?.accounts ? ((m = ee?.accounts ?? []), (A[40] = ee?.accounts), (A[41] = m)) : (m = A[41]),
        A[42] !== D ||
          A[43] !== j ||
          A[44] !== q.accounts ||
          A[45] !== q.business_profile_id ||
          A[46] !== q.can_connect ||
          A[47] !== E ||
          A[48] !== G ||
          A[49] !== W ||
          A[50] !== et ||
          A[51] !== S ||
          A[52] !== k ||
          A[53] !== ee ||
          A[54] !== O ||
          A[55] !== U ||
          A[56] !== V ||
          A[57] !== N ||
          A[58] !== m)
      ) {
        let e, n, t
        A[61] !== j || A[62] !== et || A[63] !== N
          ? ((e = (e) =>
              (!0 === e.admin_enrollment_pending || (N && !0 === e.connection_pending)) &&
              ((0, K.Qw)(et, j, e.id)?.state ?? "connected") === "connected"),
            (A[61] = j),
            (A[62] = et),
            (A[63] = N),
            (A[64] = e))
          : (e = A[64])
        let i = m.filter(e)
        ;((g =
          q.accounts.length > 0 ||
          i.length > 0 ||
          (et?.connection_lifecycle_protocol === "business-profile-ad-account-lifecycle-v1" &&
            Object.values(et.ad_account_lifecycle ?? {}).some(J))),
          A[65] !== j || A[66] !== et || A[67] !== ee
            ? ((n = (e) =>
                (0, L.Kk)(e.authority, j) &&
                "submitted" === e.submission &&
                "connect" === e.action &&
                !(!0 === e.addAdAccountAdmins && (0, B.MQ)(ee, j, e.adAccountId)) &&
                ((0, K.Qw)(et, j, e.adAccountId)?.state ?? "connected") === "connected"),
              (A[65] = j),
              (A[66] = et),
              (A[67] = ee),
              (A[68] = n))
            : (n = A[68]))
        let a = eu(q.accounts, D.filter(n).map($), i)
        for (let [e, n] of (A[69] !== j.profileId || A[70] !== et
          ? ((t =
              et?.connection_lifecycle_protocol === "business-profile-ad-account-lifecycle-v1" &&
              et.business_profile_id === j.profileId
                ? (et.ad_account_lifecycle ?? {})
                : {}),
            (A[69] = j.profileId),
            (A[70] = et),
            (A[71] = t))
          : (t = A[71]),
        Object.entries(t)))
          ("disconnecting" !== n.state && "reconnecting" !== n.state) ||
            a.some((n) => n.id === e) ||
            a.push(O?.accounts.find((n) => n.id === e) ?? { id: e, name: null, icon_url: null, connection_pending: !1 })
        ;((h =
          0 === a.length
            ? (0, s.jsx)("p", {
                className: "mx-auto max-w-91.5 text-center text-[13px] leading-[18px] text-tertiary",
                children: (0, s.jsx)(u.A, { ...ey.empty }),
              })
            : (0, s.jsx)("ul", {
                className: "flex flex-col gap-3",
                children: a.map((e) => {
                  let n = (0, K.Qw)(et, j, e.id),
                    t =
                      n?.state === "connected" &&
                      q.business_profile_id === j.profileId &&
                      q.accounts.some((n) => n.id === e.id && !0 !== n.connection_pending) &&
                      !i.some((n) => n.id === e.id && n.connection_pending),
                    a = null
                  return (
                    (0, B.kT)(e) &&
                      (null == n || "connected" === n.state) &&
                      (a = (0, s.jsx)(R.d, {
                        type: "button",
                        color: "outlineGhost",
                        size: "dialog",
                        "aria-label": E.formatMessage(ey.finishConnectionForAccount, { id: e.id }),
                        onClick: () => S(e.id),
                        children: (0, s.jsx)(u.A, { ...ey.finishConnection }),
                      })),
                    null != n &&
                      (!e.connection_pending || "connected" !== n.state || t) &&
                      (a = (0, s.jsxs)(s.Fragment, {
                        children: [
                          (0, s.jsx)(er, {
                            authority: j,
                            account: e,
                            response: et,
                            disabled: !q.can_connect,
                            refreshing: N ? W : G,
                            onRefresh: () => {
                              N ? V() : U()
                            },
                            onSelect: k,
                          }),
                          a,
                        ],
                      })),
                    (0, s.jsxs)(
                      "li",
                      {
                        className: "flex min-h-11 items-center justify-between gap-3",
                        children: [
                          (0, s.jsx)(em, { account: e, showPendingStatus: !0 }),
                          (0, s.jsx)("div", {
                            className: "flex flex-wrap items-center justify-end gap-2",
                            children: a,
                          }),
                        ],
                      },
                      e.id,
                    )
                  )
                }),
              })),
          (A[42] = D),
          (A[43] = j),
          (A[44] = q.accounts),
          (A[45] = q.business_profile_id),
          (A[46] = q.can_connect),
          (A[47] = E),
          (A[48] = G),
          (A[49] = W),
          (A[50] = et),
          (A[51] = S),
          (A[52] = k),
          (A[53] = ee),
          (A[54] = O),
          (A[55] = U),
          (A[56] = V),
          (A[57] = N),
          (A[58] = m),
          (A[59] = g),
          (A[60] = h))
      } else ((g = A[59]), (h = A[60]))
      ;(A[72] !== q.can_connect
        ? ((p =
            !q.can_connect &&
            (0, s.jsx)("p", {
              role: "status",
              className: "text-sm leading-5 text-secondary",
              children: (0, s.jsx)(u.A, { ...ey.unavailable }),
            })),
          (A[72] = q.can_connect),
          (A[73] = p))
        : (p = A[73]),
        A[74] !== S ? ((_ = () => S()), (A[74] = S), (A[75] = _)) : (_ = A[75]))
      let es = !q.can_connect || g
      return (
        A[76] !== g
          ? ((y = g
              ? (0, s.jsx)("span", {
                  className: "whitespace-normal",
                  children: (0, s.jsx)(u.A, {
                    id: "businessProfiles.adAccounts.connectMoreComingSoon",
                    defaultMessage: "Connecting more ad accounts is coming soon",
                  }),
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [(0, s.jsx)(v.sqn, {}), (0, s.jsx)(u.A, { ...ey.connectAccount })],
                })),
            (A[76] = g),
            (A[77] = y))
          : (y = A[77]),
        A[78] !== _ || A[79] !== es || A[80] !== y
          ? ((b = (0, s.jsx)(R.d, {
              type: "button",
              color: "outlineGhost",
              size: "dialog",
              className: "w-full justify-center",
              onClick: _,
              disabled: es,
              children: y,
            })),
            (A[78] = _),
            (A[79] = es),
            (A[80] = y),
            (A[81] = b))
          : (b = A[81]),
        A[82] !== b || A[83] !== h || A[84] !== p
          ? ((x = (0, s.jsxs)(s.Fragment, { children: [h, p, b] })), (A[82] = b), (A[83] = h), (A[84] = p), (A[85] = x))
          : (x = A[85]),
        x
      )
    }
    function $(e) {
      return e.adAccountId
    }
    function J(e) {
      return "disconnected" !== e.state
    }
    function ee(e) {
      var n
      let t,
        f,
        N,
        q,
        G,
        U,
        W,
        V,
        X,
        Z,
        H,
        $,
        J,
        ee,
        er,
        eg,
        eh,
        eb,
        ex,
        eA,
        ej,
        ev,
        eI,
        eC,
        eP,
        eM,
        eS,
        ek,
        ew,
        eF,
        eR,
        eN,
        eT,
        eD,
        eE,
        eq,
        ez,
        eG,
        eU,
        eO,
        eK,
        eQ,
        eB,
        eL,
        eW = (0, i.c)(183),
        {
          authority: eV,
          closeButton: eX,
          onConnected: eY,
          preferredAdAccountId: eZ,
          resumedFromSignIn: eH,
          restoreAfterSignIn: e$,
          onLifecycle: eJ,
        } = e,
        e0 = void 0 !== eH && eH,
        e1 = void 0 === e$ || e$,
        e2 = (0, o.gh)(C.u),
        e4 = (0, M.a)(),
        e3 = (0, d.A)(),
        e6 = (0, h.As)(),
        e5 = (0, a.jE)(),
        [e7, e8] = (0, r.useState)(null),
        [e9, ne] = (0, r.useState)(null),
        nn = (0, r.useId)(),
        [nt, ns] = (0, r.useState)(null),
        ni = (0, r.useRef)(null),
        na = (0, r.useRef)(eZ ?? null),
        nc = (0, r.useRef)(null)
      eW[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = F.H8), (eW[0] = t)) : (t = eW[0])
      let no = (0, P.Zj)(t)
      eW[1] === Symbol.for("react.memo_cache_sentinel") ? ((f = F.oD), (eW[1] = f)) : (f = eW[1])
      let nl = (0, P.Zj)(f)
      eW[2] !== eV || eW[3] !== nl
        ? ((N = { authority: eV, separateConnectionRecovery: nl }), (eW[2] = eV), (eW[3] = nl), (eW[4] = N))
        : (N = eW[4])
      let nr = N,
        nd = (0, r.useRef)(nl),
        nu = (0, o.Ul)(L.cX),
        nf = (0, o.Ul)(L.RX),
        nm = (0, P.Zj)("786954243") && !1,
        ng = nu?.status === "signing-in",
        nh = (0, r.useRef)(null),
        np = nu?.status === "error",
        n_ = (0, r.useRef)(null),
        [ny, nb] = (0, r.useState)(null),
        nx = ny === nl,
        [nA, nj] = (0, r.useState)(!1),
        nv = (0, r.useRef)(!0),
        nI = e6.accountId === eV.accountId && e6.userId === eV.userId
      ;(eW[5] !== nl
        ? ((q = () => (
            (nv.current = !0),
            (nd.current = nl),
            () => {
              nv.current = !1
            }
          )),
          (G = [nl]),
          (eW[5] = nl),
          (eW[6] = q),
          (eW[7] = G))
        : ((q = eW[6]), (G = eW[7])),
        (0, r.useLayoutEffect)(q, G))
      let nC = nI && !ng
      eW[8] !== nC ? ((U = { enabled: nC }), (eW[8] = nC), (eW[9] = U)) : (U = eW[9])
      let {
          data: nP,
          error: nM,
          isFetching: nS,
          isFetchingNextPage: nk,
          isFetchNextPageError: nw,
          hasNextPage: nF,
          fetchNextPage: nR,
          refetch: nN,
        } = (0, o._U)(B.xP, nr, U),
        nT = nl && nI && !ng
      eW[10] !== nT ? ((W = { enabled: nT }), (eW[10] = nT), (eW[11] = W)) : (W = eW[11])
      let { data: nD, error: nE, isFetching: nq, refetch: nz } = (0, o._U)(B.c6, nr, W)
      eW[12] === Symbol.for("react.memo_cache_sentinel") ? ((V = { enabled: !1 }), (eW[12] = V)) : (V = eW[12])
      let { data: nG, error: nU, isFetching: nO, refetch: nK } = (0, o._U)(B.fI, nr, V),
        { accountId: nQ, userId: nB, profileId: nL } = eV
      eW[13] !== eV || eW[14] !== e2
        ? ((X = () => {
            e2.set(L.Vq, (e) =>
              e?.resumedFromSignIn && (0, L.Kk)(e.authority, eV) ? { ...e, resumedFromSignIn: !1 } : e,
            )
          }),
          (eW[13] = eV),
          (eW[14] = e2),
          (eW[15] = X))
        : (X = eW[15])
      let nW = X
      ;(eW[16] !== eV || eW[17] !== e4 || eW[18] !== eY || eW[19] !== e2
        ? ((Z = (e, n, t) => {
            null != t &&
              (0, L.pW)(e2, eV, e.ad_account_id, t.attempt) &&
              e4() &&
              eY({ businessProfileId: e.business_profile_id, adAccountId: e.ad_account_id })
          }),
          (eW[16] = eV),
          (eW[17] = e4),
          (eW[18] = eY),
          (eW[19] = e2),
          (eW[20] = Z))
        : (Z = eW[20]),
        eW[21] !== eV || eW[22] !== e2
          ? ((H = (e, n, t) => {
              let { adAccountId: s } = n
              if (
                (null == t || e2.get(L.RX).some((e) => e.attemptId === t.attempt.attemptId)) &&
                e instanceof S.FetchError &&
                (401 === e.status ||
                  422 === e.status ||
                  (409 === e.status &&
                    ("business_profile_media_publication_pending" === e.errorCode ||
                      "business_profile_ad_account_already_connected" === e.errorCode ||
                      "business_profile_ad_account_admin_enrollment_unavailable" === e.errorCode))) &&
                t?.previouslyPending === !1
              )
                if (t.previouslyDraft || !0 === t.attempt.addAdAccountAdmins)
                  try {
                    ;(0, L.Eg)(e2, eV, s, t.attempt.addAdAccountAdmins, {
                      action: t.attempt.action,
                      submission: "draft",
                      attemptId: t.attempt.attemptId,
                    })
                  } catch {
                    ne({
                      authority: { ...eV },
                      adAccountId: s,
                      checked: !0 === t.attempt.addAdAccountAdmins,
                      saveFailed: !0,
                    })
                  }
                else (0, L.pW)(e2, eV, s, t.attempt)
            }),
            (eW[21] = eV),
            (eW[22] = e2),
            (eW[23] = H))
          : (H = eW[23]))
      let {
        mutate: nV,
        error: nX,
        isPending: nY,
        reset: nZ,
        variables: nH,
      } = (0, c.n)({
        onMutate: (e) => {
          let { adAccountId: n, addAdAccountAdmins: t, persistedEnrollment: s, action: i } = e,
            a = e2.get(L.RX).some((e) => (0, L.Kk)(e.authority, eV) && e.adAccountId === n && "draft" === e.submission),
            c =
              !0 === s ||
              nP?.pages.some((e) => e.accounts.some((e) => e.id === n && !0 === e.connection_pending)) === !0 ||
              (nl ? nD : te)?.accounts.some((e) => e.id === n && !0 === e.connection_pending) === !0 ||
              e2
                .get(L.RX)
                .some((e) => (0, L.Kk)(e.authority, eV) && e.adAccountId === n && "submitted" === e.submission),
            o = (0, L.Eg)(e2, eV, n, t, { action: i, persistedEnrollment: s })
          return ((n_.current = o), { previouslyPending: c, previouslyDraft: a, read: nr, attempt: o })
        },
        mutationFn: async (e) => {
          let { adAccountId: n, addAdAccountAdmins: t } = e
          ;(nW(),
            nh.current?.(),
            (0, T.s)(e2, eV, { operation: "connect", outcome: "submitted", surface: "connect", ad_account_id: n }))
          let s = {
              parameters: { path: { business_profile_id: nL } },
              expectedResourceId: n,
              additionalHeaders: { "ChatGPT-Account-ID": nQ, [l.zBc]: nQ, "x-openai-use-sheep": "1" },
              expectedIdentity: { accountId: nQ, userId: nB },
              expectedErrorStatuses: [401, 403, 404, 409, 422, 503],
              retry: "never",
            },
            i = p.Request.safePost("/chat/frontend/v1/business-profiles/{business_profile_id}/ad-accounts/connect", {
              ...s,
              requestBody: { ad_account_id: n, ...(!0 === t ? { add_ad_account_admins: !0 } : {}) },
            }),
            a = await i.catch((e) => {
              let t = (0, w.ID)(e, nL, n)
              throw (
                (0, T.s)(e2, eV, {
                  operation: "connect",
                  outcome: "failed",
                  surface: "connect",
                  ad_account_id: n,
                  http_status: e instanceof S.FetchError ? e.status : void 0,
                  reason: (0, L.Di)(e) ?? void 0,
                  tenant_id: t?.kind === "challenge" ? t.challenge.tenant_id : void 0,
                }),
                e
              )
            })
          if (
            a.business_profile_id !== nL ||
            a.ad_account_id !== n ||
            (!0 === t && !0 !== a.ad_account_admins_enrolled)
          )
            throw (
              (0, T.s)(e2, eV, {
                operation: "connect",
                outcome: "response_mismatch",
                surface: "connect",
                ad_account_id: n,
              }),
              Error("Ad account connection response did not match the selected profile and account")
            )
          return (
            (0, T.s)(e2, eV, { operation: "connect", outcome: "acknowledged", surface: "connect", ad_account_id: n }),
            a
          )
        },
        onSuccess: Z,
        onError: H,
        onSettled: (e, n, t, s) => {
          let { adAccountId: i } = t
          if (n instanceof S.FetchError && (401 === n.status || 422 === n.status)) return
          ;((0, D.xz)(e5, nQ, nL), e5.resetQueries({ queryKey: (0, Q.VX)(eV), exact: !0 }))
          let a = !(0, L.yD)(e2.get(g.PO), eV)
          for (let e of [!1, !0]) {
            let n = { authority: eV, separateConnectionRecovery: e }
            ;(e2.query.invalidate(B.xP, n, { refetchType: "none" }),
              (e || nl || !a) && e2.query.cancel(B.fI, n, { exact: !0 }),
              e2.query.invalidate(B.fI, n, { refetchType: a && e && nl ? "active" : "none" }))
          }
          let c = { authority: eV, separateConnectionRecovery: !0 }
          if (
            ((nl && a) || e2.query.cancel(B.c6, c, { exact: !0 }),
            e2.query.invalidate(B.c6, c, { refetchType: "none" }),
            !a)
          )
            return
          e5.invalidateQueries({ queryKey: ["business-profiles", nQ, "list"], refetchType: "none" })
          let o = no && ed(n) ? (0, w.ID)(n, nL, i) : null,
            l =
              o?.kind === "challenge" &&
              "available" === o.challenge.reauthentication &&
              null != s &&
              s.read.separateConnectionRecovery === nd.current &&
              nv.current
          ;(l && nb(nl),
            !nl && nv.current && null != s && nj(!0),
            (async function () {
              if (
                (await e2.query.cancel(nl ? B.c6 : B.fI, nr, { exact: !0 }),
                !(nd.current !== nl || (0, L.yD)(e2.get(g.PO), eV)))
              ) {
                if (nv.current) return nl ? nz() : nK()
                nl ? await e2.query.invalidate(B.c6, nr) : await e2.query.invalidate(B.fI, nr)
              }
            })()
              .then(async (e) => {
                l &&
                  (await (async function (e, n, t, s) {
                    let { read: i, attempt: a } = t,
                      c = () =>
                        nv.current &&
                        n_.current === a &&
                        e2.get(L.RX).includes(a) &&
                        i.separateConnectionRecovery === nd.current &&
                        na.current === e &&
                        !(0, L.yD)(e2.get(g.PO), eV)
                    if (!c() || !s) return
                    let o = e2.get(B.xP, i)
                    null == o.error &&
                      o.data?.pages.every((e) => e.business_profile_id === nL) === !0 &&
                      (o.data.pages.some((n) => n.accounts.some((n) => n.id === e)) ||
                        e2.get(L.RX).some((n) => (0, L.Kk)(n.authority, eV) && n.adAccountId === e)) &&
                      (await (0, L.F0)(
                        e2,
                        eV,
                        "tenant_policy",
                        tS,
                        void 0,
                        e,
                        void 0,
                        n,
                        a.addAdAccountAdmins,
                        a.action,
                      ),
                      c() && e2.get(L.cX)?.status === "success" && nZ())
                  })(i, o.challenge.tenant_id, s, e?.error == null && e?.data?.business_profile_id === nL))
              })
              .finally(() => {
                ;(!nl && nv.current && n_.current === s?.attempt && nj(!1),
                  l && nv.current && n_.current === s.attempt && nb(null))
              }))
        },
        retry: !1,
        gcTime: 0,
      })
      ;(eW[24] !== nQ ||
      eW[25] !== nI ||
      eW[26] !== nY ||
      eW[27] !== nL ||
      eW[28] !== e2 ||
      eW[29] !== nl ||
      eW[30] !== ng ||
      eW[31] !== nB
        ? (($ = () => {
            if (!nI || ng || nY) return
            let e = (0, B.Tw)(e2, {
              authority: { accountId: nQ, userId: nB, profileId: nL },
              separateConnectionRecovery: nl,
            })
            return ((nh.current = e), e)
          }),
          (J = [e2, nQ, nB, nL, nI, ng, nY, nl]),
          (eW[24] = nQ),
          (eW[25] = nI),
          (eW[26] = nY),
          (eW[27] = nL),
          (eW[28] = e2),
          (eW[29] = nl),
          (eW[30] = ng),
          (eW[31] = nB),
          (eW[32] = $),
          (eW[33] = J))
        : (($ = eW[32]), (J = eW[33])),
        (0, r.useEffect)($, J),
        eW[34] !== nM
          ? ((ee = nM instanceof S.FetchError && [401, 403, 404].includes(nM.status)), (eW[34] = nM), (eW[35] = ee))
          : (ee = eW[35]))
      let n$ = ee
      eW[36] !== nU
        ? ((er = nU instanceof S.FetchError && [401, 403, 404].includes(nU.status)), (eW[36] = nU), (eW[37] = er))
        : (er = eW[37])
      let nJ = er
      eW[38] !== nU || eW[39] !== nX || eW[40] !== nJ || eW[41] !== nl
        ? ((eg = !nl && (nJ || ed(nX)) ? nU : null),
          (eW[38] = nU),
          (eW[39] = nX),
          (eW[40] = nJ),
          (eW[41] = nl),
          (eW[42] = eg))
        : (eg = eW[42])
      let n0 = eg,
        n1 = nM ?? n0
      "session" === (0, L.Di)(n0)
        ? (n1 = n0)
        : nl &&
          ("session" === (0, L.Di)(nE) || ("session" !== (0, L.Di)(nM) && (null != (0, L.Di)(nE) || !n$))) &&
          (n1 = nE ?? nM)
      let n2 = (0, L.Di)(n1),
        n4 = nl && n1 === nE,
        n3 = null != n0 && n1 === n0,
        n6 = nS
      ;(n4 ? (n6 = nq) : n3 && (n6 = nO),
        eW[43] !== n$ || eW[44] !== nM || eW[45] !== nP || eW[46] !== nw || eW[47] !== nL
          ? ((eh = null != nP && nP.pages.every((e) => e.business_profile_id === nL) && (null == nM || (nw && !n$))),
            (eW[43] = n$),
            (eW[44] = nM),
            (eW[45] = nP),
            (eW[46] = nw),
            (eW[47] = nL),
            (eW[48] = eh))
          : (eh = eW[48]))
      let n5 = eh,
        n7 = !nl || (nD?.business_profile_id === nL && null == nE),
        n8 = n5 && n7,
        n9 = e2.query.getOptions(B.fI, nr).queryKey,
        te =
          nl || null != nU || e5.getQueryState(n9)?.isInvalidated === !0 || nG?.business_profile_id !== nL ? null : nG,
        tn = nl ? nD : (te ?? nP?.pages[0])
      ;(0, r.useEffect)(() => {
        if (!nY && !nO && !nq && null == nE)
          for (let e of nf)
            (0, L.Kk)(e.authority, eV) &&
              "submitted" === e.submission &&
              !0 === e.addAdAccountAdmins &&
              (0, B.MQ)(tn, eV, e.adAccountId) &&
              (0, L.pW)(e2, eV, e.adAccountId, e)
      }, [tn, eV, nf, nO, nq, nY, nE, e2])
      let tt = nH?.adAccountId,
        ts = (e) =>
          nP?.pages.map((n) => (0, K.Qw)(n, eV, e)).find(el) ?? (0, K.Qw)(nD, eV, e) ?? (0, K.Qw)(te ?? void 0, eV, e)
      eW[49] !== n8 || eW[50] !== nP || eW[51] !== nD?.ad_account_admin_enrollment_supported || eW[52] !== nl
        ? ((eb = n8 && nP.pages.every(eo) && (!nl || nD?.ad_account_admin_enrollment_supported === !0)),
          (eW[49] = n8),
          (eW[50] = nP),
          (eW[51] = nD?.ad_account_admin_enrollment_supported),
          (eW[52] = nl),
          (eW[53] = eb))
        : (eb = eW[53])
      let ti = eb,
        ta = nP?.pages.every(ec) === !0 && (nl ? nD?.can_connect === !0 : te?.can_connect !== !1),
        tc = n8 ? Array.from(new Map(nP.pages.flatMap(ea).map(ei)).values()) : []
      eW[54] !== ta ? ((ex = (e) => ta || (0, B.kT)(e)), (eW[54] = ta), (eW[55] = ex)) : (ex = eW[55])
      let to = eu(
          tc,
          n8
            ? nf
                .filter(
                  (e) =>
                    (0, L.Kk)(e.authority, eV) &&
                    "submitted" === e.submission &&
                    !(!0 === e.addAdAccountAdmins && (0, B.MQ)(tn, eV, e.adAccountId)) &&
                    (ts(e.adAccountId)?.state ?? "connected") === "connected",
                )
                .map(es)
            : [],
          n8 ? ((nl ? nD : te)?.accounts ?? []).filter(B.kT) : [],
        ).filter(ex),
        tl = n8 && ta && 0 === to.length && !nF && null == n1 && null == nX
      eW[56] !== eZ || eW[57] !== e7
        ? ((eA = (e) => e.id === (e7 ?? eZ)), (eW[56] = eZ), (eW[57] = e7), (eW[58] = eA))
        : (eA = eW[58])
      let tr = to.find(eA),
        td = null == tr ? void 0 : ts(tr.id),
        tu = null != td && "connected" !== td.state,
        tf = tr?.id ?? e7 ?? eZ,
        tm = nf.find(
          (e) =>
            (0, L.Kk)(e.authority, eV) &&
            e.adAccountId === tf &&
            !("submitted" === e.submission && !0 === e.addAdAccountAdmins && (0, B.MQ)(tn, eV, e.adAccountId)),
        ),
        tg = tr?.admin_enrollment_pending === !0,
        th = tg || (tm?.submission === "submitted" && !0 === tm.addAdAccountAdmins),
        tp = tr?.connection_pending === !0,
        t_ =
          th ||
          (null != e9 && (0, L.Kk)(e9.authority, eV) && e9.adAccountId === tf
            ? e9.checked
            : tm?.addAdAccountAdmins === !0),
        ty = t_ && !tg && (!ti || (tp && tm?.submission !== "submitted")),
        tb =
          (tu && null == eJ) ||
          nY ||
          nx ||
          !nI ||
          ng ||
          (!nl && (nJ || nA || nO)) ||
          (nS && !nk) ||
          (nl && nq) ||
          !n8 ||
          (!ta && !(0, B.kT)(tr)),
        tx = tb || (!tu && ty)
      eW[59] !== t_ || eW[60] !== nX
        ? ((ej =
            ((n = nX) instanceof S.FetchError &&
              409 === n.status &&
              ("business_profile_ad_account_admin_enrollment_limit" === n.errorCode ||
                "business_profile_ad_account_admin_enrollment_candidate_limit" === n.errorCode ||
                "business_profile_ad_account_admin_enrollment_group_inventory_unsupported" === n.errorCode)) ||
            (t_ &&
              nX instanceof S.FetchError &&
              409 === nX.status &&
              "business_profile_ad_account_admin_enrollment_unavailable" === nX.errorCode)),
          (eW[59] = t_),
          (eW[60] = nX),
          (eW[61] = ej))
        : (ej = eW[61])
      let tA = ej,
        tj = e9?.saveFailed === !0 && (0, L.Kk)(e9.authority, eV) && e9.adAccountId === tf
      eW[62] !== no || eW[63] !== nX
        ? ((ev = no && ed(nX)), (eW[62] = no), (eW[63] = nX), (eW[64] = ev))
        : (ev = eW[64])
      let tv = ev,
        tI = tv ? (0, w.ID)(nX, nL, tt) : null,
        tC = tI?.kind === "challenge" && "no_compatible_method" === tI.challenge.reauthentication,
        tP = ey.compatibilityUnavailable
      tC ? (tP = ey.noCompatibleMethod) : nx && (tP = ey.checkingSignIn)
      let tM = "session" !== n2 && tC ? null : (n2 ?? (tv ? null : (0, L.Di)(nX))),
        tS = (0, m.$P)("/auth/login"),
        tk = null != tM,
        tw = !tx && !tk && !tC && !tA && !tj && null != tr,
        tF = function () {
          let { queryKey: e, staleTime: n } = e2.query.getOptions(B.xP, nr),
            t = e5.getQueryCache().find({ queryKey: e, exact: !0 })
          return (
            null != tr &&
            !(0, B.kT)(tr) &&
            tm?.submission !== "submitted" &&
            !t_ &&
            "number" == typeof n &&
            t?.isStaleByTime(n) === !1 &&
            "success" === t.state.status &&
            t.state.data === nP &&
            nP?.pages.every(et) === !0
          )
        },
        tR = function (e) {
          ;((na.current = e),
            nV({
              adAccountId: e,
              ...(t_ ? { addAdAccountAdmins: !0 } : {}),
              persistedEnrollment: tg,
              action: "connect",
            }))
        },
        tN = nY && !ng
      if (tk) {
        let e
        ;(eW[65] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(u.A, { ...ey.signInAgain })), (eW[65] = e))
          : (e = eW[65]),
          (eI = e))
      } else if (nx) {
        let e
        ;(eW[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(u.A, { ...ey.checkingSignInButton })), (eW[66] = e))
          : (e = eW[66]),
          (eI = e))
      } else if (tv && !tC) {
        let e
        ;(eW[67] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(u.A, { ...ey.retry })), (eW[67] = e))
          : (e = eW[67]),
          (eI = e))
      } else if (tu) {
        let e
        ;(eW[68] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(u.A, {
              id: "businessProfiles.adAccounts.reviewReconnect",
              defaultMessage: "Review reconnection",
            })),
            (eW[68] = e))
          : (e = eW[68]),
          (eI = e))
      } else eI = (0, B.kT)(tr) ? (0, s.jsx)(u.A, { ...ey.finishConnection }) : (0, s.jsx)(u.A, { ...ey.connect })
      let tT = null
      ;(tk
        ? (tT = np ? "sign_in_failed" : tM)
        : !tv || ng || nx || (tT = tC ? "no_compatible_method" : "compatibility_unavailable"),
        eW[69] !== eX || eW[70] !== tN
          ? ((eC =
              null == eX
                ? null
                : (0, s.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, s.jsx)(O, {}),
                      tN ? null : (0, s.jsx)("div", { className: "absolute end-6 top-6", children: eX }),
                    ],
                  })),
            (eW[69] = eX),
            (eW[70] = tN),
            (eW[71] = eC))
          : (eC = eW[71]))
      let tD = eC
      if (tl && !tx && !tk) {
        let e, n, t, i, a, c, o
        eW[72] !== nL ? ((e = (0, E.ND)(nL, !0)), (eW[72] = nL), (eW[73] = e)) : (e = eW[73])
        let l = e
        ;(eW[74] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, s.jsx)(x.L3, {
              className: "text-center text-heading-lg leading-7 font-semibold",
              children: (0, s.jsx)(u.A, {
                id: "businessProfiles.adAccounts.createTitle",
                defaultMessage: "Create an ad account",
              }),
            })),
            (eW[74] = n))
          : (n = eW[74]),
          eW[75] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, s.jsx)("p", {
                className: "text-sm leading-5 text-secondary",
                children: (0, s.jsx)(u.A, {
                  id: "businessProfiles.adAccounts.createDescription",
                  defaultMessage:
                    "We notice that you don't have an ad account yet. Creating an ad account will let you promote your business agent to more people across ChatGPT.",
                }),
              })),
              (eW[75] = t))
            : (t = eW[75]),
          eW[76] !== l
            ? ((i = (e) => {
                ;(0, j.PQ)({
                  event: e,
                  href: l,
                  disposition: "new-tab",
                  initiator: "open_in_browser_bridge",
                  openAsWebsite: !0,
                  openTarget: "external-browser",
                })
              }),
              (eW[76] = l),
              (eW[77] = i))
            : (i = eW[77]),
          eW[78] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, s.jsx)(u.A, {
                id: "businessProfiles.adAccounts.createAccount",
                defaultMessage: "Create ad account",
              })),
              (eW[78] = a))
            : (a = eW[78]),
          eW[79] !== l || eW[80] !== i
            ? ((c = (0, s.jsxs)("div", {
                className: "flex flex-col gap-6 px-8 pt-6 pb-8",
                children: [
                  n,
                  t,
                  (0, s.jsx)(y.z, {
                    color: "primary",
                    size: "formAction",
                    radius: "full",
                    href: l,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    onClick: i,
                    children: a,
                  }),
                ],
              })),
              (eW[79] = l),
              (eW[80] = i),
              (eW[81] = c))
            : (c = eW[81]))
        let r = c
        return (
          eW[82] !== r || eW[83] !== tD
            ? ((o = (0, s.jsxs)(s.Fragment, { children: [tD, r] })), (eW[82] = r), (eW[83] = tD), (eW[84] = o))
            : (o = eW[84]),
          o
        )
      }
      eW[85] === Symbol.for("react.memo_cache_sentinel")
        ? ((eP = (0, s.jsx)(x.L3, {
            className: "text-center text-heading-lg leading-7 font-semibold",
            children: (0, s.jsx)(u.A, { ...ey.confirmTitle }),
          })),
          (eW[85] = eP))
        : (eP = eW[85])
      let tE =
        null != tr
          ? (0, s.jsx)(em, { account: tr })
          : (0, s.jsxs)("span", {
              className: "flex min-h-9 items-center gap-3 text-secondary",
              children: [
                (0, s.jsx)(v.TGw, {}),
                0 === tc.length && null == n1 && (!n8 || (nF && ta))
                  ? (0, s.jsx)("span", { role: "status", children: (0, s.jsx)(u.A, { ...ey.loading }) })
                  : (0, s.jsx)(u.A, { ...ey.chooseAccount }),
              ],
            })
      ;(eW[86] !== tE
        ? ((eM = (0, s.jsx)("div", { className: "min-w-0 flex-1", children: tE })), (eW[86] = tE), (eW[87] = eM))
        : (eM = eW[87]),
        eW[88] === Symbol.for("react.memo_cache_sentinel")
          ? ((eS = (0, s.jsx)(v.Hsq, {})), (eW[88] = eS))
          : (eS = eW[88]))
      let tq = A.ms,
        tz = tr?.id ?? "",
        tG = (e) => {
          ;(nW(), (na.current = e), (n_.current = null), nb(null), nj(!1), e8(e), ne(null), nZ())
        }
      eW[89] !== e3
        ? ((ek = (e) =>
            (0, s.jsx)(
              A.ms.RadioItem,
              {
                value: e.id,
                textValue: e.name ?? e3.formatMessage(ey.accountFallback),
                icon: (0, s.jsx)(ef, { account: e }),
                SubText: (0, s.jsx)("span", { className: "block truncate", title: e.id, children: e.id }),
                children: e.name ?? (0, s.jsx)(u.A, { ...ey.accountFallback }),
              },
              e.id,
            )),
          (eW[89] = e3),
          (eW[90] = ek))
        : (ek = eW[90])
      let tU = to.map(ek)
      ;(eW[91] !== tq.RadioGroup || eW[92] !== tz || eW[93] !== tG || eW[94] !== tU
        ? ((ew = (0, s.jsx)(tq.RadioGroup, { value: tz, onValueChange: tG, children: tU })),
          (eW[91] = tq.RadioGroup),
          (eW[92] = tz),
          (eW[93] = tG),
          (eW[94] = tU),
          (eW[95] = ew))
        : (ew = eW[95]),
        eW[96] !== nk
          ? ((eF = nk
              ? (0, s.jsxs)("div", {
                  role: "status",
                  className: "flex items-center gap-2 px-3 py-2 text-sm text-secondary",
                  children: [
                    (0, s.jsx)(I.y, {}),
                    (0, s.jsx)(u.A, {
                      id: "businessProfiles.adAccounts.loadingMore",
                      defaultMessage: "Loading more accounts\u2026",
                    }),
                  ],
                })
              : null),
            (eW[96] = nk),
            (eW[97] = eF))
          : (eF = eW[97]),
        eW[98] !== nM ||
        eW[99] !== n5 ||
        eW[100] !== nI ||
        eW[101] !== nR ||
        eW[102] !== nw ||
        eW[103] !== nY ||
        eW[104] !== n2 ||
        eW[105] !== n1 ||
        eW[106] !== nN ||
        eW[107] !== nK ||
        eW[108] !== nz ||
        eW[109] !== n3 ||
        eW[110] !== n6 ||
        eW[111] !== n4 ||
        eW[112] !== ng
          ? ((eR =
              null != n1 && null == n2
                ? (0, s.jsx)(ep, {
                    error: n1,
                    disabled: n6 || nY || !nI || ng,
                    onRetry: () => {
                      n4
                        ? nz()
                        : n3
                          ? nK()
                          : nw &&
                              n5 &&
                              !(
                                nM instanceof S.FetchError &&
                                (422 === nM.status || (400 === nM.status && "unknown_parameter" === nM.errorCode))
                              )
                            ? nR({ cancelRefetch: !1 })
                            : nN()
                    },
                  })
                : null),
            (eW[98] = nM),
            (eW[99] = n5),
            (eW[100] = nI),
            (eW[101] = nR),
            (eW[102] = nw),
            (eW[103] = nY),
            (eW[104] = n2),
            (eW[105] = n1),
            (eW[106] = nN),
            (eW[107] = nK),
            (eW[108] = nz),
            (eW[109] = n3),
            (eW[110] = n6),
            (eW[111] = n4),
            (eW[112] = ng),
            (eW[113] = eR))
          : (eR = eW[113]),
        eW[114] !== n8 || eW[115] !== ta
          ? ((eN =
              n8 &&
              !ta &&
              (0, s.jsx)("p", {
                role: "status",
                className: "text-sm leading-5 text-secondary",
                children: (0, s.jsx)(u.A, { ...ey.unavailable }),
              })),
            (eW[114] = n8),
            (eW[115] = ta),
            (eW[116] = eN))
          : (eN = eW[116]),
        eW[117] === Symbol.for("react.memo_cache_sentinel")
          ? ((eT = (0, s.jsx)("p", {
              className: "text-sm leading-5 text-secondary",
              children: (0, s.jsx)(u.A, { ...ey.description }),
            })),
            (eW[117] = eT))
          : (eT = eW[117]),
        eW[118] !== eV ||
        eW[119] !== tp ||
        eW[120] !== tb ||
        eW[121] !== t_ ||
        eW[122] !== ti ||
        eW[123] !== nn ||
        eW[124] !== tu ||
        eW[125] !== th ||
        eW[126] !== tg ||
        eW[127] !== e2 ||
        eW[128] !== tr ||
        eW[129] !== tm
          ? ((eD =
              !tu && (tg || ti || (t_ && !th)) && null != tr && (!tp || th || tm?.submission === "submitted" || t_)
                ? (0, s.jsxs)("div", {
                    className: "relative flex items-start gap-3",
                    children: [
                      (0, s.jsx)(b.S, {
                        id: nn,
                        checked: t_,
                        disabled: tb || th || (tp && !t_),
                        onCheckedChange: (e) => {
                          if (!tp || !e) {
                            if (!e && tm?.submission === "draft")
                              try {
                                ;(0, L.Eg)(e2, eV, tr.id, void 0, {
                                  action: tm.action,
                                  submission: "draft",
                                  attemptId: tm.attemptId,
                                })
                              } catch {
                                ne({ authority: { ...eV }, adAccountId: tr.id, checked: t_, saveFailed: !0 })
                                return
                              }
                            ne({ authority: { ...eV }, adAccountId: tr.id, checked: e })
                          }
                        },
                      }),
                      (0, s.jsx)("label", {
                        htmlFor: nn,
                        className: "text-sm leading-5",
                        children: (0, s.jsx)(u.A, {
                          id: "businessProfiles.adAccounts.addAdmins",
                          defaultMessage: "Add all current ad account admins as admins of this business profile",
                        }),
                      }),
                    ],
                  })
                : null),
            (eW[118] = eV),
            (eW[119] = tp),
            (eW[120] = tb),
            (eW[121] = t_),
            (eW[122] = ti),
            (eW[123] = nn),
            (eW[124] = tu),
            (eW[125] = th),
            (eW[126] = tg),
            (eW[127] = e2),
            (eW[128] = tr),
            (eW[129] = tm),
            (eW[130] = eD))
          : (eD = eW[130]),
        eW[131] !== tj
          ? ((eE = tj
              ? (0, s.jsx)("p", {
                  role: "alert",
                  className: "text-sm leading-5 text-secondary",
                  children: (0, s.jsx)(u.A, {
                    id: "businessProfiles.adAccounts.adminChoiceSaveFailed",
                    defaultMessage: "Your choice couldn\u2019t be saved. Try changing it again.",
                  }),
                })
              : null),
            (eW[131] = tj),
            (eW[132] = eE))
          : (eE = eW[132]),
        eW[133] !== ty || eW[134] !== th
          ? ((eq = ty
              ? (0, s.jsx)("p", {
                  role: "status",
                  className: "text-sm leading-5 text-secondary",
                  children: th
                    ? (0, s.jsx)(u.A, {
                        id: "businessProfiles.adAccounts.addAdminsUnavailable",
                        defaultMessage:
                          "Adding ad account admins isn\u2019t available right now. Try again later to finish this connection",
                      })
                    : (0, s.jsx)(u.A, { ...ey.adminEnrollmentUnavailable }),
                })
              : null),
            (eW[133] = ty),
            (eW[134] = th),
            (eW[135] = eq))
          : (eq = eW[135]),
        eW[136] !== tx || eW[137] !== nX || eW[138] !== eZ || eW[139] !== n1 || eW[140] !== e0 || eW[141] !== tr
          ? ((ez =
              e0 && !tx && null == n1 && null == nX && null != tr && tr.id === eZ
                ? (0, s.jsx)(_.l, {
                    type: "info",
                    role: "status",
                    variant: "callout",
                    layout: "verticalIcon",
                    icon: (0, s.jsx)(v.zOs, {}),
                    content: (0, s.jsx)(u.A, { ...ey.resumedFromSignIn }),
                  })
                : null),
            (eW[136] = tx),
            (eW[137] = nX),
            (eW[138] = eZ),
            (eW[139] = n1),
            (eW[140] = e0),
            (eW[141] = tr),
            (eW[142] = ez))
          : (ez = eW[142]),
        eW[143] !== tM || eW[144] !== n2 || eW[145] !== np || eW[146] !== tk
          ? ((eG = tk
              ? (0, s.jsx)(Y.d, { variant: "banner", reason: tM, signInFailed: np, reading: null != n2 })
              : null),
            (eW[143] = tM),
            (eW[144] = n2),
            (eW[145] = np),
            (eW[146] = tk),
            (eW[147] = eG))
          : (eG = eW[147]),
        eW[148] !== nx || eW[149] !== tv || eW[150] !== tP || eW[151] !== tC || eW[152] !== tk || eW[153] !== ng
          ? ((eU =
              tv && (tC || (!tk && !ng))
                ? (0, s.jsx)(_.l, {
                    type: nx ? "info" : "error",
                    role: nx ? "status" : "alert",
                    variant: "callout",
                    layout: "verticalIcon",
                    icon: (0, s.jsx)(v.zOs, {}),
                    content: (0, s.jsxs)("div", {
                      className: "flex flex-col gap-3",
                      children: [(0, s.jsx)(u.A, { ...tP }), tC ? (0, s.jsx)(k.U, {}) : null],
                    }),
                  })
                : null),
            (eW[148] = nx),
            (eW[149] = tv),
            (eW[150] = tP),
            (eW[151] = tC),
            (eW[152] = tk),
            (eW[153] = ng),
            (eW[154] = eU))
          : (eU = eW[154]),
        eW[155] !== tv || eW[156] !== nX || eW[157] !== tk
          ? ((eO = tk || null == nX || tv ? null : (0, s.jsx)(e_, { error: nX, connecting: !0 })),
            (eW[155] = tv),
            (eW[156] = nX),
            (eW[157] = tk),
            (eW[158] = eO))
          : (eO = eW[158]))
      let tO = null == nt ? "polite" : void 0,
        tK = tN ? "flex min-h-10.5 items-center justify-center gap-2 text-sm text-secondary" : "sr-only"
      ;(eW[159] !== tN
        ? ((eK = tN
            ? (0, s.jsxs)(s.Fragment, {
                children: [
                  (0, s.jsx)("span", {
                    "aria-hidden": !0,
                    className: "inline-flex shrink-0",
                    children: (0, s.jsx)(I.y, { as: "span", className: "icon-sm" }),
                  }),
                  (0, s.jsx)(u.A, {
                    id: "businessProfiles.adAccounts.connectingStatus",
                    defaultMessage: "Connecting\u2026 This may take a few minutes.",
                  }),
                ],
              })
            : null),
          (eW[159] = tN),
          (eW[160] = eK))
        : (eK = eW[160]),
        eW[161] !== tO || eW[162] !== tK || eW[163] !== eK
          ? ((eQ = (0, s.jsx)("div", { "aria-live": tO, "aria-atomic": "true", className: tK, children: eK })),
            (eW[161] = tO),
            (eW[162] = tK),
            (eW[163] = eK),
            (eW[164] = eQ))
          : (eQ = eW[164]),
        eW[165] !== eV ||
        eW[166] !== tw ||
        eW[167] !== nx ||
        eW[168] !== eI ||
        eW[169] !== tN ||
        eW[170] !== nI ||
        eW[171] !== nY ||
        eW[172] !== nu ||
        eW[173] !== tk ||
        eW[174] !== ng
          ? ((eB = tN
              ? null
              : (0, s.jsx)(R.d, {
                  ref: ni,
                  type: "submit",
                  color: "primary",
                  size: "formAction",
                  className: "w-full",
                  loading: tk ? ng && null == nu.owner && (0, L.Kk)(nu.authority, eV) : nY,
                  disabled: tk ? ng || nY || nx || !nI : !tw,
                  children: eI,
                })),
            (eW[165] = eV),
            (eW[166] = tw),
            (eW[167] = nx),
            (eW[168] = eI),
            (eW[169] = tN),
            (eW[170] = nI),
            (eW[171] = nY),
            (eW[172] = nu),
            (eW[173] = tk),
            (eW[174] = ng),
            (eW[175] = eB))
          : (eB = eW[175]))
      let tQ = (0, s.jsxs)("form", {
        ref: (e) => {
          if (null == e) return
          if (null == tT) {
            nc.current = null
            return
          }
          let n = null != n2 ? n1 : nX
          ;(nc.current?.error !== n || nc.current.reason !== tT) &&
            ((nc.current = { error: n, reason: tT }),
            (0, T.s)(e2, eV, {
              operation: "auth_notice",
              outcome: "shown",
              surface: "connect",
              reason: tT,
              ad_account_id: tt,
              tenant_id: tI?.kind === "challenge" ? tI.challenge.tenant_id : void 0,
            }))
        },
        className: "flex flex-col gap-6 px-8 pt-6 pb-8",
        onSubmit: (e) => {
          ;(e.preventDefault(),
            tk
              ? ng ||
                nY ||
                nx ||
                (async () => {
                  !nI ||
                    ng ||
                    null == tM ||
                    (nm && null == n2 && "tenant_policy" === tM && null == tt) ||
                    (await (0, L.F0)(
                      e2,
                      eV,
                      tM,
                      tS,
                      void 0,
                      e1 || t_ ? (tr?.id ?? e7 ?? eZ) : void 0,
                      nm && null == n2 && "tenant_policy" === (0, L.Di)(nX) ? tt : void 0,
                      void 0,
                      !!t_ || void 0,
                      "connect",
                      void 0,
                      !nl && null != (0, L.Di)(n0)
                        ? async () => {
                            let e = { authority: eV, separateConnectionRecovery: !1 }
                            ;(await e2.query.cancel(B.fI, e, { exact: !0 }),
                              await e2.query.invalidate(B.fI, e, { refetchType: "none" }),
                              (0, L.yD)(e2.get(g.PO), eV) || (await e2.query.fetch(B.fI, e).catch(en)))
                          }
                        : void 0,
                    ),
                    nv.current &&
                      !(0, L.yD)(e2.get(g.PO), eV) &&
                      e2.get(L.cX)?.status === "success" &&
                      (e8(null), (na.current = eZ ?? null), nZ()))
                })()
              : tw &&
                (tu && null != td
                  ? eJ?.({ intent: (0, K.pK)(e2, eV, tr.id, td), account: tr })
                  : tF()
                    ? tR(tr.id)
                    : ns(tr.id)))
        },
        children: [
          eP,
          (0, s.jsxs)(A.Ab, {
            align: "start",
            matchTriggerWidth: !0,
            modal: !0,
            size: "select",
            triggerButton: (0, s.jsxs)(R.d, {
              type: "button",
              color: "outlineGhost",
              size: "surveyCard",
              className: "w-full justify-between text-start accountSelector-U_ACXo",
              disabled: nY || (!nl && nA) || !nI || ng || !n8 || 0 === to.length,
              "aria-busy": nS || (nl && nq),
              "aria-label":
                null == tr
                  ? e3.formatMessage(ey.chooseAccount)
                  : e3.formatMessage(ey.selectedAccount, {
                      name: tr.name ?? e3.formatMessage(ey.accountFallback),
                      id: tr.id,
                    }),
              children: [eM, eS],
            }),
            children: [ew, eF],
          }),
          eR,
          eN,
          eT,
          eD,
          eE,
          eq,
          ez,
          eG,
          eU,
          eO,
          eQ,
          eB,
        ],
      })
      return (
        eW[176] !== tw || eW[177] !== nt || eW[178] !== tR || eW[179] !== t_ || eW[180] !== tu || eW[181] !== tr
          ? ((eL =
              null != nt &&
              (0, s.jsx)(z, {
                addAdAccountAdmins: t_,
                disabled: !tw || tu || tr.id !== nt,
                returnFocusRef: ni,
                onBack: () => ns(null),
                onConfirm: () => {
                  ;(ns(null), tR(nt))
                },
              })),
            (eW[176] = tw),
            (eW[177] = nt),
            (eW[178] = tR),
            (eW[179] = t_),
            (eW[180] = tu),
            (eW[181] = tr),
            (eW[182] = eL))
          : (eL = eW[182]),
        (0, s.jsxs)(s.Fragment, { children: [tD, tQ, eL] })
      )
    }
    function en() {}
    function et(e) {
      return !0 === e.is_sole_profile_admin
    }
    function es(e) {
      return e.adAccountId
    }
    function ei(e) {
      return [e.id, e]
    }
    function ea(e) {
      return e.accounts
    }
    function ec(e) {
      return e.can_connect
    }
    function eo(e) {
      return !0 === e.ad_account_admin_enrollment_supported
    }
    function el(e) {
      return null != e
    }
    function er(e) {
      let n,
        t,
        a,
        c,
        l,
        r,
        d = (0, i.c)(27),
        { authority: f, account: m, response: g, disabled: h, refreshing: p, onRefresh: _, onSelect: y } = e,
        b = (0, o.gh)(C.u),
        { id: x } = m
      d[0] !== x || d[1] !== f || d[2] !== g
        ? ((n = (0, K.Qw)(g, f, x)), (d[0] = x), (d[1] = f), (d[2] = g), (d[3] = n))
        : (n = d[3])
      let A = n,
        j = (0, K.S0)(f, x, A)
      if (null == A || "disconnected" === A.state) return null
      let v = null == j && "connected" === A.state && "available" !== A.disconnect_readiness
      if ("disconnecting" === A.state) {
        let e
        ;(d[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(u.A, {
              id: "businessProfiles.adAccounts.finishDisconnect",
              defaultMessage: "Finish disconnecting",
            })),
            (d[4] = e))
          : (e = d[4]),
          (t = e))
      } else if ("reconnecting" === A.state || null != j) {
        let e
        ;(d[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(u.A, {
              id: "businessProfiles.adAccounts.finishReconnect",
              defaultMessage: "Finish reconnecting",
            })),
            (d[5] = e))
          : (e = d[5]),
          (t = e))
      } else {
        let e
        ;(d[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(u.A, { id: "businessProfiles.adAccounts.disconnect", defaultMessage: "Disconnect" })),
            (d[6] = e))
          : (e = d[6]),
          (t = e))
      }
      let I = v || (h && null == j && "disconnecting" !== A.state && "reconnecting" !== A.state)
      return (
        d[7] !== m || d[8] !== x || d[9] !== f || d[10] !== j || d[11] !== A || d[12] !== y || d[13] !== b
          ? ((a = () => {
              null == j
                ? y({ intent: (0, K.pK)(b, f, x, A), account: m })
                : (0, K.Eq)(b, j)
                  ? y({ intent: j, account: m })
                  : (0, K.Hy)(b, j)
            }),
            (d[7] = m),
            (d[8] = x),
            (d[9] = f),
            (d[10] = j),
            (d[11] = A),
            (d[12] = y),
            (d[13] = b),
            (d[14] = a))
          : (a = d[14]),
        d[15] !== t || d[16] !== I || d[17] !== a
          ? ((c = (0, s.jsx)(R.d, {
              type: "button",
              color: "outlineGhost",
              size: "dialog",
              disabled: I,
              onClick: a,
              children: t,
            })),
            (d[15] = t),
            (d[16] = I),
            (d[17] = a),
            (d[18] = c))
          : (c = d[18]),
        d[19] !== v || d[20] !== A.disconnect_readiness || d[21] !== _ || d[22] !== p
          ? ((l = v
              ? (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)("p", {
                      role: "status",
                      className: "text-sm text-secondary",
                      children: (0, s.jsx)(X, { migrationRequired: "migration_required" === A.disconnect_readiness }),
                    }),
                    (0, s.jsx)(R.d, {
                      type: "button",
                      color: "outlineGhost",
                      size: "dialog",
                      disabled: p,
                      onClick: _,
                      children: (0, s.jsx)(u.A, {
                        id: "businessProfiles.adAccounts.lifecycleRefresh",
                        defaultMessage: "Refresh",
                      }),
                    }),
                  ],
                })
              : null),
            (d[19] = v),
            (d[20] = A.disconnect_readiness),
            (d[21] = _),
            (d[22] = p),
            (d[23] = l))
          : (l = d[23]),
        d[24] !== c || d[25] !== l
          ? ((r = (0, s.jsxs)("div", { className: "flex max-w-72 flex-col items-end gap-2", children: [c, l] })),
            (d[24] = c),
            (d[25] = l),
            (d[26] = r))
          : (r = d[26]),
        r
      )
    }
    function ed(e) {
      return (
        e instanceof S.FetchError && 403 === e.status && "business_profile_tenant_authentication_policy" === e.errorCode
      )
    }
    function eu(e, n, t = []) {
      let s = new Map(e.map((e) => [e.id, e]))
      for (let e of t) {
        let n = s.get(e.id)
        s.set(e.id, {
          ...e,
          name: e.name ?? n?.name ?? null,
          icon_url: e.icon_url ?? n?.icon_url ?? null,
          connection_pending: !0 === e.connection_pending,
        })
      }
      for (let e of n) {
        let n = s.get(e)
        n?.admin_enrollment_pending !== !0 &&
          s.set(e, { ...(n ?? { id: e, name: null, icon_url: null }), connection_pending: !0 })
      }
      return Array.from(s.values())
    }
    function ef(e) {
      let n,
        t = (0, i.c)(2),
        { account: a } = e
      return (
        t[0] !== a.icon_url
          ? ((n = a.icon_url
              ? (0, s.jsx)("img", {
                  src: a.icon_url,
                  alt: "",
                  className: "size-9 shrink-0 rounded-full object-contain",
                })
              : (0, s.jsx)("div", {
                  className:
                    "flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-soft text-secondary",
                  children: (0, s.jsx)(v.TGw, {}),
                })),
            (t[0] = a.icon_url),
            (t[1] = n))
          : (n = t[1]),
        n
      )
    }
    function em(e) {
      let n,
        t,
        a,
        c,
        o,
        l,
        r,
        d = (0, i.c)(18),
        { account: f, showPendingStatus: m } = e,
        g = void 0 !== m && m
      return (
        d[0] !== f ? ((n = (0, s.jsx)(ef, { account: f })), (d[0] = f), (d[1] = n)) : (n = d[1]),
        d[2] !== f.name
          ? ((t = f.name ?? (0, s.jsx)(u.A, { ...ey.accountFallback })), (d[2] = f.name), (d[3] = t))
          : (t = d[3]),
        d[4] !== t
          ? ((a = (0, s.jsx)("p", { className: "truncate text-sm leading-5 text-default", children: t })),
            (d[4] = t),
            (d[5] = a))
          : (a = d[5]),
        d[6] !== f.id
          ? ((c = (0, s.jsx)("p", {
              className: "truncate text-xs leading-4 text-tertiary select-text",
              title: f.id,
              children: f.id,
            })),
            (d[6] = f.id),
            (d[7] = c))
          : (c = d[7]),
        d[8] !== f || d[9] !== g
          ? ((o =
              g && (0, B.kT)(f)
                ? (0, s.jsx)("p", {
                    className: "text-xs leading-4 text-secondary",
                    children: (0, s.jsx)(u.A, { ...ey.connectionPending }),
                  })
                : null),
            (d[8] = f),
            (d[9] = g),
            (d[10] = o))
          : (o = d[10]),
        d[11] !== a || d[12] !== c || d[13] !== o
          ? ((l = (0, s.jsxs)("div", { className: "min-w-0", children: [a, c, o] })),
            (d[11] = a),
            (d[12] = c),
            (d[13] = o),
            (d[14] = l))
          : (l = d[14]),
        d[15] !== n || d[16] !== l
          ? ((r = (0, s.jsxs)("div", { className: "flex min-w-0 items-center gap-3", children: [n, l] })),
            (d[15] = n),
            (d[16] = l),
            (d[17] = r))
          : (r = d[17]),
        r
      )
    }
    function eg() {
      let e,
        n = (0, i.c)(1)
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsxs)("div", {
              role: "status",
              className: "flex items-center justify-center gap-2 py-6 text-sm text-secondary",
              children: [(0, s.jsx)(I.y, {}), (0, s.jsx)(u.A, { ...ey.loading })],
            })),
            (n[0] = e))
          : (e = n[0]),
        e
      )
    }
    function eh(e) {
      let n,
        t,
        a,
        c,
        l,
        d,
        f,
        g = (0, i.c)(24),
        { authority: p, reason: _ } = e,
        y = (0, o.gh)(C.u),
        b = (0, h.As)(),
        x = (0, o.Ul)(L.cX),
        A = (0, m.$P)("/auth/login"),
        j = (0, r.useRef)(null),
        v = x?.status === "error" ? "sign_in_failed" : _
      g[0] !== p || g[1] !== v || g[2] !== y
        ? ((n = (e) => {
            null != e &&
              j.current !== v &&
              ((j.current = v),
              (0, T.s)(y, p, { operation: "auth_notice", outcome: "shown", surface: "connected_accounts", reason: v }))
          }),
          (g[0] = p),
          (g[1] = v),
          (g[2] = y),
          (g[3] = n))
        : (n = g[3])
      let I = x?.status === "error"
      ;(g[4] !== _ || g[5] !== n || g[6] !== I
        ? ((t = (0, s.jsx)(Y.d, { ref: n, reason: _, signInFailed: I, reading: !0 })),
          (g[4] = _),
          (g[5] = n),
          (g[6] = I),
          (g[7] = t))
        : (t = g[7]),
        g[8] !== p || g[9] !== x
          ? ((a = x?.status === "signing-in" && null == x.owner && (0, L.Kk)(x.authority, p)),
            (g[8] = p),
            (g[9] = x),
            (g[10] = a))
          : (a = g[10]))
      let P = x?.status === "signing-in" || b.accountId !== p.accountId || b.userId !== p.userId
      return (
        g[11] !== p || g[12] !== A || g[13] !== _ || g[14] !== y
          ? ((c = () => void (0, L.F0)(y, p, _, A)), (g[11] = p), (g[12] = A), (g[13] = _), (g[14] = y), (g[15] = c))
          : (c = g[15]),
        g[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, s.jsx)(u.A, { ...ey.signInAgain })), (g[16] = l))
          : (l = g[16]),
        g[17] !== a || g[18] !== P || g[19] !== c
          ? ((d = (0, s.jsx)(R.d, {
              type: "button",
              color: "primary",
              size: "dialogAction",
              loading: a,
              disabled: P,
              onClick: c,
              children: l,
            })),
            (g[17] = a),
            (g[18] = P),
            (g[19] = c),
            (g[20] = d))
          : (d = g[20]),
        g[21] !== t || g[22] !== d
          ? ((f = (0, s.jsxs)(s.Fragment, { children: [t, d] })), (g[21] = t), (g[22] = d), (g[23] = f))
          : (f = g[23]),
        f
      )
    }
    function ep(e) {
      let n,
        t = (0, i.c)(4),
        { error: a, onRetry: c, disabled: o } = e,
        l = void 0 !== o && o
      return (
        t[0] !== l || t[1] !== a || t[2] !== c
          ? ((n = (0, s.jsx)(e_, { error: a, onRetry: c, disabled: l })),
            (t[0] = l),
            (t[1] = a),
            (t[2] = c),
            (t[3] = n))
          : (n = t[3]),
        n
      )
    }
    function e_(e) {
      let n,
        t,
        a,
        c,
        o = (0, i.c)(12),
        { error: l, connecting: r, onRetry: d, disabled: f } = e,
        m = void 0 !== r && r,
        g = void 0 !== f && f,
        h = l instanceof S.FetchError ? l.status : null,
        p = m ? ey.connectError : ey.readError
      ;(401 === h && (p = ey.signedOut),
        403 === h && (p = ey.permissionError),
        404 === h && (p = ey.notFound),
        l instanceof S.FetchError &&
          409 === h &&
          ((p = ey.conflict),
          "business_profile_agent_migration_required" === l.errorCode
            ? (p = ey.agentMigrationRequired)
            : "business_profile_ad_account_already_connected" === l.errorCode && (p = ey.alreadyConnected)),
        422 === h && m && (p = ey.invalidConnection),
        503 === h && (p = m ? ey.connectError : ey.unavailable),
        l instanceof S.FetchError &&
          "business_profile_ad_account_admin_enrollment_limit" === l.errorCode &&
          (p = ey.adminEnrollmentLimit),
        409 === h &&
          l instanceof S.FetchError &&
          "business_profile_ad_account_admin_enrollment_unavailable" === l.errorCode &&
          (p = ey.adminEnrollmentUnavailable),
        o[0] !== p ? ((n = (0, s.jsx)(u.A, { ...p })), (o[0] = p), (o[1] = n)) : (n = o[1]))
      let y = n
      if (409 === h && l instanceof S.FetchError) {
        if ("business_profile_ad_account_admin_enrollment_candidate_limit" === l.errorCode) {
          let e
          ;(o[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(u.A, {
                id: "businessProfiles.adAccounts.adminEnrollmentCandidateLimit",
                defaultMessage:
                  "This ad account is connected, but its admin roster is too large to share automatically. Use Invite to add business admins individually.",
              })),
              (o[2] = e))
            : (e = o[2]),
            (y = e))
        } else if ("business_profile_ad_account_admin_enrollment_group_inventory_unsupported" === l.errorCode) {
          let e
          ;(o[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(u.A, {
                id: "businessProfiles.adAccounts.adminEnrollmentGroupInventoryUnsupported",
                defaultMessage:
                  "This ad account is connected, but its group-based admin roster can\u2019t be shared automatically. Use Invite to add business admins individually.",
              })),
              (o[3] = e))
            : (e = o[3]),
            (y = e))
        }
      }
      return (
        o[4] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, s.jsx)(v.zOs, {})), (o[4] = t)) : (t = o[4]),
        o[5] !== d ? ((a = null == d ? void 0 : (0, s.jsx)(u.A, { ...ey.retry })), (o[5] = d), (o[6] = a)) : (a = o[6]),
        o[7] !== y || o[8] !== g || o[9] !== d || o[10] !== a
          ? ((c = (0, s.jsx)(_.l, {
              type: "error",
              role: "alert",
              variant: "callout",
              layout: "verticalIcon",
              icon: t,
              content: y,
              primaryCtaText: a,
              primaryCtaColor: "outlineGhost",
              onPrimaryCtaClick: d,
              isPrimaryCtaDisabled: g,
            })),
            (o[7] = y),
            (o[8] = g),
            (o[9] = d),
            (o[10] = a),
            (o[11] = c))
          : (c = o[11]),
        c
      )
    }
    let ey = (0, f.YK)({
      adminEnrollmentUnavailable: {
        id: "businessProfiles.adAccounts.adminEnrollmentUnavailable",
        defaultMessage:
          "Automatic admin sharing isn\u2019t available. Invite business admins individually, or uncheck the option to connect without sharing admins.",
      },
      adminEnrollmentLimit: {
        id: "businessProfiles.adAccounts.adminEnrollmentLimit",
        defaultMessage:
          "This ad account is connected, but adding its admins exceeds the limit of 100. Invite business profile admins individually or contact your administrator.",
      },
      resumedFromSignIn: {
        id: "businessProfiles.adAccounts.resumedFromSignIn",
        defaultMessage: "You\u2019re back. Select Connect to try linking this ad account again.",
      },
      chooseAccount: { id: "businessProfiles.adAccounts.chooseAccount", defaultMessage: "Choose an ad account" },
      selectedAccount: {
        id: "businessProfiles.adAccounts.selectedAccountWithId",
        defaultMessage: "Ad account: {name} ({id})",
      },
      accountFallback: { id: "businessProfiles.adAccounts.accountFallback", defaultMessage: "Ad account" },
      manageTitle: { id: "businessProfiles.adAccounts.manageTitle", defaultMessage: "Manage ad accounts" },
      confirmTitle: { id: "businessProfiles.adAccounts.confirmTitle", defaultMessage: "Connect your ad account" },
      empty: {
        id: "businessProfiles.adAccounts.empty",
        defaultMessage:
          "Reach more potential customers by promoting your business agent across ChatGPT. Connect or create an ad account to get started.",
      },
      description: {
        id: "businessProfiles.adAccounts.organizationAssignmentDescription",
        defaultMessage:
          "Connecting an ad account lets you promote your business agent across ChatGPT. If this business is not already part of an organization, connecting will permanently assign it to the selected ad account\u2019s organization.",
      },
      connectAccount: { id: "businessProfiles.adAccounts.connectAccount", defaultMessage: "Connect ad account" },
      connect: { id: "businessProfiles.adAccounts.connect", defaultMessage: "Connect" },
      close: { id: "businessProfiles.adAccounts.close", defaultMessage: "Close dialog" },
      loading: { id: "businessProfiles.adAccounts.loading", defaultMessage: "Loading ad accounts\u2026" },
      retry: { id: "businessProfiles.adAccounts.retry", defaultMessage: "Try again" },
      finishConnection: { id: "businessProfiles.adAccounts.finishConnection", defaultMessage: "Finish connection" },
      connectionPending: {
        id: "businessProfiles.adAccounts.connectionPending",
        defaultMessage: "Connection needs confirmation",
      },
      finishConnectionForAccount: {
        id: "businessProfiles.adAccounts.finishConnectionForAccount",
        defaultMessage: "Finish connection for ad account {id}",
      },
      readError: {
        id: "businessProfiles.adAccounts.readError",
        defaultMessage: "Couldn\u2019t load ad accounts. Try again.",
      },
      connectError: {
        id: "businessProfiles.adAccounts.connectError",
        defaultMessage:
          "We couldn\u2019t confirm the connection. Try again, or close this dialog and check your connected accounts.",
      },
      invalidConnection: {
        id: "businessProfiles.adAccounts.invalidConnection",
        defaultMessage: "We couldn\u2019t validate this connection. Choose an ad account and try again.",
      },
      signInAgain: { id: "businessProfiles.adAccounts.signInAgain", defaultMessage: "Sign in again" },
      noCompatibleMethod: {
        id: "businessProfiles.adAccounts.noCompatibleMethod",
        defaultMessage:
          "This ad account can\u2019t be connected from your current ChatGPT workspace because the sign-in requirements don\u2019t match. Check your SSO settings, try a different ChatGPT workspace, or contact your administrator.",
      },
      compatibilityUnavailable: {
        id: "businessProfiles.adAccounts.compatibilityUnavailable",
        defaultMessage: "We couldn\u2019t check the sign-in requirements for this connection. Try again.",
      },
      checkingSignIn: {
        id: "businessProfiles.adAccounts.checkingConnectionSignIn",
        defaultMessage: "This connection requires another sign-in. Checking your current access\u2026",
      },
      checkingSignInButton: {
        id: "businessProfiles.adAccounts.checkingConnectionSignInButton",
        defaultMessage: "Checking access\u2026",
      },
      signedOut: {
        id: "businessProfiles.adAccounts.signedOut",
        defaultMessage: "Your session changed. Close this dialog and sign in again.",
      },
      permissionError: {
        id: "businessProfiles.adAccounts.permissionError",
        defaultMessage: "You need admin access to this business and ad account to connect them",
      },
      notFound: {
        id: "businessProfiles.adAccounts.notFound",
        defaultMessage: "This business or ad account is no longer available",
      },
      conflict: {
        id: "businessProfiles.adAccounts.conflict",
        defaultMessage:
          "This ad account can\u2019t be connected to this business. It may already be linked to another business or belong to a different business account.",
      },
      alreadyConnected: {
        id: "businessProfiles.adAccounts.alreadyConnected",
        defaultMessage:
          "This ad account is already connected to another business profile. Choose a different ad account.",
      },
      agentMigrationRequired: {
        id: "businessProfiles.adAccounts.agentMigrationRequired",
        defaultMessage:
          "This ad account can\u2019t be connected automatically. Choose another ad account or contact your administrator.",
      },
      unavailable: {
        id: "businessProfiles.adAccounts.unavailable",
        defaultMessage: "Ad account connections are temporarily unavailable. Try again later.",
      },
    })
  },
}
//# sourceMappingURL=422435.e631161594.js.map
