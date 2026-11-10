export const __rspack_esm_ids = [922492]
export const __webpack_modules__ = {
  GTHM(e, n, t) {
    t.d(n, { C: () => b })
    var i = t("ABep"),
      r = t("QosV"),
      s = t("oyxz"),
      a = t("ygO2"),
      o = t("FrrB"),
      l = t("UoEB"),
      d = t("zTeN"),
      c = t("zd8w"),
      u = t("Wf1j"),
      m = t("SGsN"),
      p = t("Yewb"),
      v = t("OWtl"),
      h = t("RPTV")
    function f(e) {
      let n,
        t,
        o,
        l = (0, r.c)(11),
        { connectorId: f, disabled: b, reconnect: x } = e,
        y = (0, d.gh)(v.u),
        j = (0, u.A)(),
        { status: S } = (0, p.XY)(),
        [w, k] = (0, c.useState)(!1),
        M = w || null != S,
        A = b || M
      return (
        l[0] !== f || l[1] !== j || l[2] !== y
          ? ((n = () => {
              ;(k(!0),
                (0, h.t4)(y, f)
                  .catch(g)
                  .then((e) => {
                    if ("unavailable" === e.status)
                      return void y
                        .get(m.Id)
                        .danger(
                          j.formatMessage({
                            id: "environmentSetup.repositoryPicker.connectGithub.unavailable",
                            defaultMessage: "GitHub could not be loaded. Try again",
                            description:
                              "Error when the GitHub plugin cannot be found to connect it from the environment repository picker",
                          }),
                          {
                            errorAnalytics: { toastId: "environmentSetup.repositoryPicker.connectGithub.unavailable" },
                          },
                        )
                  })
                  .finally(() => {
                    k(!1)
                  }))
            }),
            (l[0] = f),
            (l[1] = j),
            (l[2] = y),
            (l[3] = n))
          : (n = l[3]),
        l[4] !== x
          ? ((t = x
              ? (0, i.jsx)(s.A, {
                  id: "restricted.environmentSetup.repositoryPicker.reconnectAction",
                  defaultMessage: "Reconnect GitHub",
                  description: "Starts GitHub plugin setup to reconnect the user's account",
                })
              : (0, i.jsx)(s.A, {
                  id: "restricted.environmentSetup.repositoryPicker.connectAction",
                  defaultMessage: "Connect GitHub",
                  description: "Starts GitHub plugin setup to connect the user's account",
                })),
            (l[4] = x),
            (l[5] = t))
          : (t = l[5]),
        l[6] !== M || l[7] !== A || l[8] !== n || l[9] !== t
          ? ((o = (0, i.jsx)(a.$, {
              "aria-busy": M,
              color: "accent",
              disabled: A,
              loading: M,
              size: "dialog",
              onClick: n,
              children: t,
            })),
            (l[6] = M),
            (l[7] = A),
            (l[8] = n),
            (l[9] = t),
            (l[10] = o))
          : (o = l[10]),
        o
      )
    }
    function g() {
      return { status: "unavailable" }
    }
    function b(e) {
      let n,
        t,
        d,
        c,
        u = (0, r.c)(17),
        {
          connectorId: m,
          connectionMessage: p,
          connectionAction: v,
          disabled: h,
          reconnect: g,
          status: b,
          onRetry: y,
        } = e
      if ("error" === b) {
        let e, r, o
        ;(u[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(s.A, {
              id: "restricted.environmentSetup.repositoryPicker.connectionError",
              defaultMessage: "GitHub connections couldn’t load",
              description: "Error when GitHub connections cannot be loaded",
            })),
            (u[0] = e))
          : (e = u[0]),
          (n = e),
          u[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, i.jsx)(s.A, {
                id: "restricted.environmentSetup.repositoryPicker.retryConnection",
                defaultMessage: "Try again",
                description: "Retries loading GitHub connections",
              })),
              (u[1] = r))
            : (r = u[1]),
          u[2] !== h || u[3] !== y
            ? ((o = (0, i.jsx)(a.$, { color: "accent", disabled: h, onClick: y, size: "dialog", children: r })),
              (u[2] = h),
              (u[3] = y),
              (u[4] = o))
            : (o = u[4]),
          (t = o))
      } else if ("disabled" === b) {
        let e
        ;(u[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(s.A, {
              id: "restricted.environmentSetup.repositoryPicker.blockedGuidance",
              defaultMessage:
                "GitHub isn’t enabled in this workspace<br></br>Ask a workspace admin to enable the GitHub plugin",
              description:
                "Explains that the workspace administrator has disabled GitHub and how the user can request access. The br tag starts a new line.",
              values: { br: x },
            })),
            (u[5] = e))
          : (e = u[5]),
          (n = e))
      } else {
        let e
        ;((n = p),
          u[6] !== v || u[7] !== m || u[8] !== h || u[9] !== g
            ? ((e = v ?? (0, i.jsx)(f, { connectorId: m, disabled: h, reconnect: g })),
              (u[6] = v),
              (u[7] = m),
              (u[8] = h),
              (u[9] = g),
              (u[10] = e))
            : (e = u[10]),
          (t = e))
      }
      return (
        u[11] !== b ? ((d = "connect" === b ? (0, i.jsx)(l.A, {}) : void 0), (u[11] = b), (u[12] = d)) : (d = u[12]),
        u[13] !== t || u[14] !== n || u[15] !== d
          ? ((c = (0, i.jsx)(o.A, {
              className: "flex-1 select-none",
              title: null,
              description: n,
              actions: t,
              illustration: d,
              illustrationSize: "icon",
            })),
            (u[13] = t),
            (u[14] = n),
            (u[15] = d),
            (u[16] = c))
          : (c = u[16]),
        c
      )
    }
    function x() {
      return (0, i.jsx)("br", {})
    }
  },
  pgXv(e, n, t) {
    t.d(n, { CloudEnvironmentRepositoryPicker: () => O })
    var i = t("ABep"),
      r = t("QosV")
    let s = (0, t("nkTT").a)({
      name: "github-logo-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.777832, y: 2.709473, width: 10.444336, height: 10.187012 },
        visualBounds: { x: 2.777832, y: 2.709473, width: 10.444336, height: 10.187012 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 2.777832, y: 2.709473, width: 10.444336, height: 10.187012 },
        center: { x: 8, y: 7.802979 },
        insets: { top: 2.709473, right: 2.777832, bottom: 3.103515, left: 2.777832 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 7.802979 }, foreground: { x: 8, y: 7.802979 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.00005 2.70947C10.8853 2.70947 13.2223 5.04642 13.2223 7.93169C13.222 9.02588 12.8786 10.0924 12.2404 10.9812C11.6022 11.87 10.7013 12.5363 9.66464 12.8863C9.40353 12.9385 9.30561 12.7753 9.30561 12.6382C9.30561 12.462 9.31214 11.9006 9.31214 11.2021C9.31214 10.7125 9.14894 10.3992 8.95964 10.236C10.1216 10.1054 11.3423 9.66156 11.3423 7.65753C11.3423 7.08308 11.1399 6.61961 10.807 6.25406C10.8592 6.1235 11.042 5.58822 10.7548 4.87017C10.7548 4.87017 10.3174 4.72656 9.31867 5.40544C8.90089 5.28794 8.457 5.22919 8.01311 5.22919C7.56922 5.22919 7.12533 5.28794 6.70755 5.40544C5.7088 4.73308 5.27144 4.87017 5.27144 4.87017C4.98422 5.58822 5.167 6.1235 5.21922 6.25406C4.8863 6.61961 4.68394 7.08961 4.68394 7.65753C4.68394 9.65503 5.89811 10.1054 7.06005 10.236C6.90992 10.3666 6.77283 10.595 6.72714 10.9345C6.42686 11.0716 5.67617 11.2935 5.20617 10.5036C5.10825 10.347 4.8145 9.96183 4.40325 9.96836C3.96589 9.97489 4.227 10.2164 4.40978 10.3143C4.63172 10.4384 4.8863 10.9018 4.94505 11.052C5.0495 11.3457 5.38894 11.9071 6.70103 11.6656C6.70103 12.1029 6.70755 12.5142 6.70755 12.6382C6.70755 12.7753 6.60964 12.932 6.34853 12.8863C5.30842 12.5401 4.40373 11.8751 3.7628 10.9858C3.12188 10.0965 2.77726 9.02791 2.77783 7.93169C2.77783 5.04642 5.11478 2.70947 8.00005 2.70947Z" fill="currentColor"/>',
    })
    var a = t("on57"),
      o = t("i5ac"),
      l = t.n(o),
      d = t("zTeN"),
      c = t("zd8w"),
      u = t("Wf1j"),
      m = t("oyxz"),
      p = t("Rvvc"),
      v = t("ygO2"),
      h = t("Xpvt"),
      f = t("mUDD"),
      g = t("bqtn"),
      b = t("ZtSy"),
      x = t("Ot7V"),
      y = t("aQvR"),
      j = t("HOLv"),
      S = t("GO7r"),
      w = t("evwP"),
      k = t("FrrB"),
      M = t("okCa"),
      A = t("X3K1"),
      _ = t("RNul"),
      C = t("mYWF"),
      N = t("OWtl"),
      E = t("VV8q"),
      P = t("S5Ho"),
      z = t("LH8k"),
      I = t("GEsy"),
      T = t("RPTV"),
      H = t("EaPL"),
      L = t("GTHM")
    function R(e) {
      let n,
        t,
        s,
        a,
        o,
        h,
        f,
        b,
        y,
        j,
        w,
        k,
        M,
        A,
        _,
        C,
        E,
        z,
        I,
        H,
        L,
        R = (0, r.c)(72),
        { connectorId: O, disabled: G, installation: D, linkId: V, onChange: $ } = e,
        B = (0, d.gh)(N.u),
        W = (0, u.A)(),
        [F, U] = (0, c.useState)(!1)
      R[0] !== O || R[1] !== V ? ((n = { connectorId: O, linkId: V }), (R[0] = O), (R[1] = V), (R[2] = n)) : (n = R[2])
      let Q = !G
      R[3] !== Q ? ((t = { enabled: Q }), (R[3] = Q), (R[4] = t)) : (t = R[4])
      let { data: q, isError: Z, isPending: K, refetch: Y } = (0, d._U)(P.ky, n, t)
      if (
        R[5] !== O ||
        R[6] !== q?.app_installation_url ||
        R[7] !== q?.memberships ||
        R[8] !== q?.other ||
        R[9] !== G ||
        R[10] !== D ||
        R[11] !== W ||
        R[12] !== $ ||
        R[13] !== F
      ) {
        let e,
          n,
          t,
          r,
          d,
          c,
          u = l()([...(q?.memberships ?? []), ...(q?.other ?? [])], "id")
        ;((a = q?.app_installation_url ?? (O === p.qD ? p.rh : null)),
          R[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(m.A, {
                id: "restricted.environmentSetup.repositoryPicker.organization.all",
                defaultMessage: "All",
                description:
                  "Shows repositories from every connected GitHub organization and personal account in the Cloud environment repository filter",
              })),
              (R[25] = e))
            : (e = R[25]))
        let x = e
        ;((s = g.Ab),
          (b = "end"),
          (y = "list"),
          (j = "menu"),
          (w = G),
          (k = F),
          (M = U),
          R[26] !== D || R[27] !== W
            ? ((n =
                null == D
                  ? W.formatMessage({
                      id: "restricted.environmentSetup.repositoryPicker.organization.allSelectionLabel",
                      defaultMessage: "GitHub account: All repositories",
                      description:
                        "Accessible label for the Cloud repository organization filter when all connected organizations and personal accounts are selected",
                    })
                  : W.formatMessage(
                      {
                        id: "restricted.environmentSetup.repositoryPicker.organization.selectedAccountLabel",
                        defaultMessage: "GitHub account: {account}",
                        description:
                          "Accessible label for the Cloud repository filter; account is the selected GitHub organization or personal account name",
                      },
                      { account: D.account_login },
                    )),
              (R[26] = D),
              (R[27] = W),
              (R[28] = n))
            : (n = R[28]))
        let A = D?.account_login ?? x
        ;(R[29] !== A
          ? ((t = (0, i.jsx)("span", { className: "truncate", children: A })), (R[29] = A), (R[30] = t))
          : (t = R[30]),
          R[31] === Symbol.for("react.memo_cache_sentinel") ? ((r = (0, i.jsx)(S.Aq_, {})), (R[31] = r)) : (r = R[31]),
          R[32] !== G || R[33] !== n || R[34] !== t
            ? ((o = (0, i.jsxs)(v.$, {
                className: "max-w-full",
                allowShrink: !0,
                "aria-label": n,
                color: "ghostSecondary",
                disabled: G,
                size: "settingsAction",
                radius: "full",
                children: [t, r],
              })),
              (R[32] = G),
              (R[33] = n),
              (R[34] = t),
              (R[35] = o))
            : (o = R[35]))
        let _ = null == D ? S.ALZ : void 0
        ;(R[36] !== $ ? ((d = () => $(null)), (R[36] = $), (R[37] = d)) : (d = R[37]),
          R[38] !== _ || R[39] !== d
            ? ((h = (0, i.jsx)(g.ms.Item, { RightIcon: _, onSelect: d, children: x })),
              (R[38] = _),
              (R[39] = d),
              (R[40] = h))
            : (h = R[40]),
          R[41] !== D?.id || R[42] !== $
            ? ((c = (e) =>
                (0, i.jsx)(
                  g.ms.Item,
                  { RightIcon: e.id === D?.id ? S.ALZ : void 0, onSelect: () => $(e), children: e.account_login },
                  e.id,
                )),
              (R[41] = D?.id),
              (R[42] = $),
              (R[43] = c))
            : (c = R[43]),
          (f = u.map(c)),
          (R[5] = O),
          (R[6] = q?.app_installation_url),
          (R[7] = q?.memberships),
          (R[8] = q?.other),
          (R[9] = G),
          (R[10] = D),
          (R[11] = W),
          (R[12] = $),
          (R[13] = F),
          (R[14] = s),
          (R[15] = a),
          (R[16] = o),
          (R[17] = h),
          (R[18] = f),
          (R[19] = b),
          (R[20] = y),
          (R[21] = j),
          (R[22] = w),
          (R[23] = k),
          (R[24] = M))
      } else
        ((s = R[14]),
          (a = R[15]),
          (o = R[16]),
          (h = R[17]),
          (f = R[18]),
          (b = R[19]),
          (y = R[20]),
          (j = R[21]),
          (w = R[22]),
          (k = R[23]),
          (M = R[24]))
      ;(R[44] !== K
        ? ((A = K
            ? (0, i.jsx)(g.ms.Message, {
                compact: !0,
                children: (0, i.jsx)(m.A, {
                  id: "restricted.environmentSetup.repositoryPicker.organization.loading",
                  defaultMessage: "Loading organizations…",
                  description:
                    "Shown while loading the connected GitHub organizations for the Cloud environment repository filter",
                }),
              })
            : null),
          (R[44] = K),
          (R[45] = A))
        : (A = R[45]),
        R[46] !== Z || R[47] !== Y
          ? ((_ = Z
              ? (0, i.jsx)(g.ms.Item, {
                  onSelect: () => void Y(),
                  children: (0, i.jsx)(m.A, {
                    id: "restricted.environmentSetup.repositoryPicker.organization.retry",
                    defaultMessage: "Retry loading organizations",
                    description:
                      "Retries loading connected GitHub organizations after a failure in the Cloud environment repository filter",
                  }),
                })
              : null),
            (R[46] = Z),
            (R[47] = Y),
            (R[48] = _))
          : (_ = R[48]),
        R[49] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, i.jsx)(g.ms.Separator, {})), (R[49] = C))
          : (C = R[49]),
        R[50] === Symbol.for("react.memo_cache_sentinel") ? ((E = (0, i.jsx)(S.xFs, {})), (R[50] = E)) : (E = R[50]))
      let X = null == a
      return (
        R[51] !== a || R[52] !== B
          ? ((z = (e) => {
              null != a &&
                (U(!1),
                (0, x.PQ)({ event: e, href: a, initiator: "open_in_browser_bridge", openTarget: "external-browser" }),
                (0, T.Ey)(B, "none"))
            }),
            (R[51] = a),
            (R[52] = B),
            (R[53] = z))
          : (z = R[53]),
        R[54] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, i.jsx)(m.A, {
              id: "restricted.environmentSetup.repositoryPicker.connection.connectOrganization",
              defaultMessage: "Connect GitHub org",
              description: "Opens GitHub in the system browser to grant access to repositories in another organization",
            })),
            (R[54] = I))
          : (I = R[54]),
        R[55] !== X || R[56] !== z
          ? ((H = (0, i.jsx)(g.ms.Item, { leftIcon: E, disabled: X, onClick: z, children: I })),
            (R[55] = X),
            (R[56] = z),
            (R[57] = H))
          : (H = R[57]),
        R[58] !== s ||
        R[59] !== o ||
        R[60] !== h ||
        R[61] !== f ||
        R[62] !== A ||
        R[63] !== _ ||
        R[64] !== H ||
        R[65] !== b ||
        R[66] !== y ||
        R[67] !== j ||
        R[68] !== w ||
        R[69] !== k ||
        R[70] !== M
          ? ((L = (0, i.jsxs)(s, {
              align: b,
              contentMaxHeight: y,
              contentWidth: j,
              disabled: w,
              open: k,
              onOpenChange: M,
              triggerButton: o,
              children: [h, f, A, _, C, H],
            })),
            (R[58] = s),
            (R[59] = o),
            (R[60] = h),
            (R[61] = f),
            (R[62] = A),
            (R[63] = _),
            (R[64] = H),
            (R[65] = b),
            (R[66] = y),
            (R[67] = j),
            (R[68] = w),
            (R[69] = k),
            (R[70] = M),
            (R[71] = L))
          : (L = R[71]),
        L
      )
    }
    function O(e) {
      let n,
        t,
        o,
        O,
        B,
        W,
        F,
        U,
        Q,
        q,
        Z,
        K,
        Y,
        X,
        J,
        ee,
        en,
        et,
        ei,
        er = (0, r.c)(55),
        {
          disabled: es,
          selectedRepositoryIds: ea,
          header: eo,
          headerAlignment: el,
          configureInAccountMenu: ed,
          onChange: ec,
          preferredConnectorId: eu,
          selectionMode: em,
          children: ep,
          preferredLinkId: ev,
          onConnectionChange: eh,
          maxRepositories: ef,
        } = e,
        eg = void 0 === el ? "center" : el,
        eb = void 0 !== ed && ed,
        ex = void 0 === em ? "multiple" : em,
        ey = (0, d.gh)(N.u),
        ej = (0, u.A)(),
        eS = null != ef && ea.length >= ef,
        [ew, ek] = (0, c.useState)(""),
        [eM, eA] = (0, c.useState)(null),
        [e_, eC] = (0, c.useState)(null)
      er[0] !== ew ? ((n = ew.trim()), (er[0] = ew), (er[1] = n)) : (n = er[1])
      let eN = (0, I.o)(n, 200),
        eE = eN !== ew.trim(),
        { data: eP, isError: ez, isPending: eI, refetch: eT } = (0, d.Ul)(H.E),
        eH =
          eP?.find((e) => {
            let { id: n, linkId: t } = e
            return n === eM?.connectorId && t === eM?.linkId
          }) ??
          eP?.find((e) => e.id === eu && (null == ev || e.linkId === ev) && "connected" === (0, T.oP)(e).status) ??
          eP?.find($) ??
          eP?.find(V) ??
          eP?.[0],
        eL = eH?.id ?? p.qD,
        eR = eH?.linkId,
        { status: eO, reconnect: eG } = (0, T.oP)(eH),
        eD = eP?.some((e) => e.id === eL && null != e.linkId && e.linkId !== eR),
        eV = (ez && !eP?.length) || "error" === eO,
        e$ = "connected" === eO,
        eB = !es && e$ && null == eR
      er[2] !== eB ? ((t = { enabled: eB }), (er[2] = eB), (er[3] = t)) : (t = er[3])
      let { data: eW, isError: eF, isPending: eU } = (0, d._U)(P.cd, { connectorId: eL, linkId: eR }, t),
        eQ = null == eR ? eW : eH?.link?.owner_profile?.nickname?.trim(),
        eq = null == ep && !es && e$
      er[4] !== eq ? ((o = { enabled: eq }), (er[4] = eq), (er[5] = o)) : (o = er[5])
      let { data: eZ } = (0, d._U)(P.ky, { connectorId: eL, linkId: eR, poll: !0 }, o),
        eK = e_?.installation ?? null
      null != e_ &&
        (e_.connectorId !== eL || e_.linkId !== eR
          ? (eK = null)
          : null != eZ &&
            (eK =
              [...eZ.memberships, ...eZ.other].find((e) => {
                let { id: n } = e
                return n === e_.installation.id
              }) ?? null),
        null == eK && eC(null))
      let eY = null == ep && !es && !eV && e$
      er[6] !== eY ? ((O = { enabled: eY }), (er[6] = eY), (er[7] = O)) : (O = er[7])
      let {
          data: eX,
          error: eJ,
          fetchNextPage: e0,
          hasNextPage: e1,
          isError: e2,
          isFetching: e3,
          isFetchingNextPage: e4,
          isFetchNextPageError: e5,
          isPending: e6,
          refetch: e7,
        } = (0, d._U)(P.l5, { connectorId: eL, linkId: eR, installation: eK, query: eN, poll: !0 }, O),
        e8 = null == eX ? void 0 : l()(eX.pages.flatMap(D), "id"),
        e9 = !e8?.length && eJ instanceof Error && (0, z.d)(eJ)?.type === "missing_github_connector_link",
        ne = e$ && !e9 && !eV,
        nn = (e) => {
          ;((0, x.PQ)({
            event: e,
            href: (0, C.Y2)({ appId: eL, installUrl: null, remotePluginId: null }),
            initiator: "open_in_browser_bridge",
            openTarget: "external-browser",
          }),
            (0, T.Ey)(ey, "none"))
        }
      ;(er[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((B = (0, i.jsx)(m.A, {
            id: "restricted.environmentSetup.repositoryPicker.openSettings",
            defaultMessage: "Open GitHub settings",
            description: "Opens the selected GitHub plugin's connection and repository access settings",
          })),
          (er[8] = B))
        : (B = er[8]),
        er[9] !== es || er[10] !== nn
          ? ((W = (0, i.jsx)(v.$, { color: "accent", disabled: es, onClick: nn, size: "dialog", children: B })),
            (er[9] = es),
            (er[10] = nn),
            (er[11] = W))
          : (W = er[11]))
      let nt = W,
        ni = null,
        nr = eV ? "error" : eO,
        ns =
          eV || "disabled" === eO || (!eI && (!e$ || e9))
            ? (0, i.jsx)(L.C, {
                connectorId: eL,
                connectionMessage:
                  eG || e9
                    ? (0, i.jsx)(m.A, {
                        id: "restricted.environmentSetup.repositoryPicker.reconnect",
                        defaultMessage: "Reconnect GitHub to load your repositories",
                        description: "The user's GitHub authorization needs to be renewed",
                      })
                    : (0, i.jsx)(m.A, {
                        id: "restricted.environmentSetup.repositoryPicker.connect",
                        defaultMessage: "Connect GitHub to see your repositories",
                        description: "Invites the user to connect their GitHub account before choosing repositories",
                      }),
                connectionAction: null != eR && eD && (eG || e9) ? nt : void 0,
                disabled: es,
                reconnect: eG || e9,
                status: "connected" === nr ? "connect" : nr,
                onRetry: () => void eT(),
              })
            : null
      if (e2 && !e8?.length) {
        let e, n, t, r
        ;(er[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(m.A, {
              id: "restricted.environmentSetup.repositoryPicker.loadError",
              defaultMessage: "Repositories couldn’t load",
              description: "Error when the GitHub repository list cannot be loaded",
            })),
            (er[12] = e))
          : (e = er[12]),
          (ni = e),
          er[13] !== e7 ? ((n = () => void e7()), (er[13] = e7), (er[14] = n)) : (n = er[14]),
          er[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(m.A, {
                id: "restricted.environmentSetup.repositoryPicker.retryRepositories",
                defaultMessage: "Try again",
                description: "Retries loading GitHub repositories",
              })),
              (er[15] = t))
            : (t = er[15]),
          er[16] !== es || er[17] !== n
            ? ((r = (0, i.jsx)(v.$, { color: "accent", disabled: es, onClick: n, size: "dialog", children: t })),
              (er[16] = es),
              (er[17] = n),
              (er[18] = r))
            : (r = er[18]),
          (F = r))
      } else if (!eE && null == eK && "" === eN && e8?.length === 0) {
        let e
        ;(er[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(m.A, {
              id: "restricted.environmentSetup.repositoryPicker.noAccess",
              defaultMessage: "No repositories are available to this connection",
              description: "GitHub is connected but repository discovery returned no repositories",
            })),
            (er[19] = e))
          : (e = er[19]),
          (ni = e),
          (F = nt))
      }
      er[20] !== ns || er[21] !== F || er[22] !== ni
        ? ((U =
            ns ??
            (null != ni
              ? (0, i.jsx)(k.A, { className: "flex-1 select-none", title: null, description: ni, actions: F })
              : null)),
          (er[20] = ns),
          (er[21] = F),
          (er[22] = ni),
          (er[23] = U))
        : (U = er[23])
      let na = U
      er[24] !== ej
        ? ((Q = ej.formatMessage({
            id: "restricted.environmentSetup.repositoryPicker.search",
            defaultMessage: "Search repositories",
            description: "Accessible label for searching repositories in the cloud environment creation dialog",
          })),
          (er[24] = ej),
          (er[25] = Q))
        : (Q = er[25])
      let no = Q,
        nl = ne && (null != eR || !eF) && !!eQ,
        nd = eI || (ne && null == eR && eU),
        nc = (null != eP && eP.length > 1) || (eb && ne)
      ;(er[26] === Symbol.for("react.memo_cache_sentinel")
        ? ((q = (0, i.jsx)(j.I, { asset: s, alignment: "composite", className: "shrink-0" })), (er[26] = q))
        : (q = er[26]),
        er[27] !== nd || er[28] !== nl
          ? ((Z = !nl && nd ? (0, i.jsx)(A.X, { as: "span", className: "w-64 max-w-full", size: "sm" }) : null),
            (er[27] = nd),
            (er[28] = nl),
            (er[29] = Z))
          : (Z = er[29]),
        er[30] !== nc ? ((K = nc ? (0, i.jsx)(S.Aq_, {}) : null), (er[30] = nc), (er[31] = K)) : (K = er[31]))
      let nu = (0, i.jsxs)(i.Fragment, {
          children: [
            q,
            (0, i.jsxs)("span", {
              id: "cloud-environment-github-account",
              className: "flex h-5 min-w-0 items-center",
              role: nl ? "group" : void 0,
              "aria-label": nl
                ? ej.formatMessage(
                    {
                      id: "restricted.environmentSetup.repositoryPicker.connection.browsingAs",
                      defaultMessage: "Browsing GitHub as @{handle}",
                      description:
                        "Identifies the GitHub user signed in to the selected connection in the Cloud environment repository picker",
                    },
                    { handle: eQ },
                  )
                : void 0,
              children: [
                nl
                  ? (0, i.jsx)("span", {
                      className: "truncate",
                      children: (0, i.jsx)(m.A, {
                        id: "restricted.environmentSetup.repositoryPicker.connection.connectedAccount",
                        defaultMessage: "{handle}",
                        description:
                          "Signed-in GitHub username shown beside the GitHub icon above the cloud environment repository picker.",
                        values: { handle: eQ },
                      }),
                    })
                  : null,
                Z,
                nl || nd
                  ? null
                  : (0, i.jsx)("span", {
                      className: "truncate",
                      children:
                        eH?.accountLabel ??
                        (0, i.jsx)(m.A, {
                          id: "restricted.environmentSetup.repositoryPicker.connection.defaultName",
                          defaultMessage: "GitHub",
                          description:
                            "Default GitHub provider name shown before cloud repository connection discovery completes",
                        }),
                    }),
              ],
            }),
            K,
          ],
        }),
        nm =
          eK?.html_url ??
          eZ?.app_installation_url ??
          (eL === p.qD ? p.rh : (0, C.Y2)({ appId: eL, installUrl: null, remotePluginId: null }))
      er[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = (0, i.jsx)(m.A, {
            id: "environmentSetup.repositoryPicker.configureAccess",
            defaultMessage: "Configure",
            description:
              "Opens GitHub repository permissions for the selected organization, or installation setup when browsing all repositories",
          })),
          (er[32] = Y))
        : (Y = er[32])
      let np = Y,
        nv = (0, i.jsxs)(i.Fragment, {
          children: [np, (0, i.jsx)(y.g, { ExternalIcon: S.$XR, href: nm, openTarget: "external-browser" })],
        }),
        nh = "start" === eg ? "justify-start" : "justify-center"
      er[33] !== nh
        ? ((X = (0, a.A)("flex min-h-7 max-w-full min-w-0 items-center gap-2 text-sm text-secondary", nh)),
          (er[33] = nh),
          (er[34] = X))
        : (X = er[34])
      let nf = nc
          ? (0, i.jsxs)(g.Ab, {
              align: "end",
              contentMaxHeight: "list",
              contentWidth: "menu",
              disabled: es,
              triggerButton: (0, i.jsx)(v.$, {
                className: (0, a.A)("max-w-full", "start" === eg && !eb && "-ms-2"),
                allowShrink: !0,
                "aria-describedby": nl ? "cloud-environment-github-account" : void 0,
                "aria-label": ej.formatMessage(
                  {
                    id: "restricted.environmentSetup.repositoryPicker.connection.selectionLabel",
                    defaultMessage: "GitHub connection: {connection}",
                    description:
                      "Accessible label for choosing a connected GitHub account; connection is the selected account identity or connection name",
                  },
                  { connection: eH?.accountLabel ?? "" },
                ),
                color: "ghostSecondary",
                disabled: es,
                size: "settingsAction",
                radius: "full",
                children: nu,
              }),
              children: [
                (0, i.jsx)(g.ms.SectionLabel, {
                  children: (0, i.jsx)(m.A, {
                    id: "environmentSetup.repositoryPicker.connection.menuLabel",
                    defaultMessage: "GitHub connection",
                    description:
                      "Menu heading explaining that the choices are GitHub connections used to find repositories",
                  }),
                }),
                eP?.map((e) =>
                  (0, i.jsx)(
                    g.ms.Item,
                    {
                      RightIcon: e.id === eL && e.linkId === eR ? S.ALZ : void 0,
                      SubText: eb || e.accountLabel === e.name ? null : (0, i.jsx)(i.Fragment, { children: e.name }),
                      onSelect: () => {
                        ;(eA({ connectorId: e.id, linkId: e.linkId }),
                          (e.id !== eL || e.linkId !== eR) && (eC(null), eh?.()))
                      },
                      children: e.accountLabel,
                    },
                    `${e.id}:${e.linkId ?? ""}`,
                  ),
                ),
                eb && ne
                  ? (0, i.jsxs)(i.Fragment, {
                      children: [
                        (0, i.jsx)(g.ms.Separator, {}),
                        (0, i.jsx)(g.ms.Item, {
                          href: nm,
                          rightIcon: (0, i.jsx)(y.g, { ExternalIcon: S.$XR, href: nm, openTarget: "external-browser" }),
                          disabled: es,
                          onClick: (e) => {
                            ;((0, x.PQ)({
                              event: e,
                              href: nm,
                              initiator: "open_in_browser_bridge",
                              openTarget: "external-browser",
                            }),
                              (0, T.Ey)(ey, "none"))
                          },
                          children: np,
                        }),
                      ],
                    })
                  : null,
              ],
            })
          : (0, i.jsx)("div", {
              className: (0, a.A)(
                "flex min-w-0 items-center gap-1 text-base text-secondary",
                "start" === eg && "-ms-1",
              ),
              children: nu,
            }),
        ng =
          !eb && ne && es
            ? (0, i.jsx)("span", {
                className: "inline-flex shrink-0 items-center gap-1 opacity-50",
                role: "link",
                "aria-disabled": "true",
                children: nv,
              })
            : null,
        nb =
          eb || !ne || es
            ? null
            : (0, i.jsx)(b.G, {
                className: "inline-flex shrink-0 items-center gap-1",
                appearance: "secondary",
                href: nm,
                initiator: "open_in_browser_bridge",
                openTarget: "external-browser",
                underline: "hover",
                onActivate: () => {
                  ;(0, T.Ey)(ey, "none")
                },
                children: nv,
              })
      er[35] !== X || er[36] !== nf || er[37] !== ng || er[38] !== nb
        ? ((J = (0, i.jsxs)("div", { className: X, children: [nf, ng, nb] })),
          (er[35] = X),
          (er[36] = nf),
          (er[37] = ng),
          (er[38] = nb),
          (er[39] = J))
        : (J = er[39])
      let nx = J,
        ny = "start" === eg ? "gap-3" : "gap-4"
      ;(er[40] !== ny ? ((ee = (0, a.A)("flex min-h-0 flex-col", ny)), (er[40] = ny), (er[41] = ee)) : (ee = er[41]),
        er[42] !== eb || er[43] !== nx || er[44] !== eo || er[45] !== eg
          ? ((en =
              "start" === eg
                ? (0, i.jsx)(f.c7, {
                    className: "shrink-0 select-none",
                    title: eo,
                    subtitle: eb ? void 0 : nx,
                    subtitleTone: "secondary",
                  })
                : (0, i.jsxs)("div", {
                    className: "flex flex-col items-center gap-2 text-center select-none",
                    children: [eo, !eb && nx],
                  })),
            (er[42] = eb),
            (er[43] = nx),
            (er[44] = eo),
            (er[45] = eg),
            (er[46] = en))
          : (en = er[46]),
        er[47] !== eb || er[48] !== nx
          ? ((et = eb
              ? (0, i.jsxs)("div", {
                  className: "flex min-w-0 items-center justify-between gap-4",
                  children: [
                    (0, i.jsx)("span", {
                      className: "shrink-0 text-base font-medium",
                      children: (0, i.jsx)(m.A, {
                        id: "environmentSetup.repositoryPicker.connectedAsLabel",
                        defaultMessage: "Connected as",
                        description: "Label beside the GitHub account selector in the add repository dialog",
                      }),
                    }),
                    nx,
                  ],
                })
              : null),
            (er[47] = eb),
            (er[48] = nx),
            (er[49] = et))
          : (et = er[49]))
      let nj =
        ep ??
        (0, i.jsxs)("div", {
          className: "flex min-h-0 flex-1 flex-col gap-2",
          children: [
            (0, i.jsxs)("div", {
              className: "flex min-w-0 items-center justify-between gap-4",
              children: [
                (0, i.jsx)("span", {
                  className: "min-w-0 truncate text-base font-medium select-none",
                  children:
                    "single" === ex
                      ? (0, i.jsx)(m.A, {
                          id: "environmentSetup.repositoryPicker.single.label",
                          defaultMessage: "Select a repository",
                          description: "Label for selecting one repository for a cloud environment",
                        })
                      : (0, i.jsx)(m.A, {
                          id: "restricted.environmentSetup.create.repositories.label",
                          defaultMessage: "Select repositories",
                          description: "Label for the repositories to include in the new cloud environment",
                        }),
                }),
                ne || eI
                  ? (0, i.jsx)("div", {
                      className: "max-w-1/2 min-w-0",
                      children: (0, i.jsx)(R, {
                        connectorId: eL,
                        disabled: es || eI,
                        installation: eK,
                        linkId: eR,
                        onChange: (e) => eC(null == e ? null : { connectorId: eL, linkId: eR, installation: e }),
                      }),
                    })
                  : null,
              ],
            }),
            null == ns && (null == ni || ne)
              ? (0, i.jsx)(M.s, {
                  id: "cloud-environment-repository-search",
                  className: "min-w-0 shrink-0",
                  autoFocus: !0,
                  variant: "toolbar",
                  label: no,
                  onSearchQueryChange: ek,
                  placeholder: ej.formatMessage({
                    id: "restricted.environmentSetup.repositoryPicker.search.placeholder",
                    defaultMessage: "Search",
                    description: "Placeholder for searching repositories in the cloud environment creation dialog",
                  }),
                  searchQuery: ew,
                  trailingControl: "" !== ew.trim() && (e3 || eE) ? (0, i.jsx)(_.y, { className: "icon-2xs" }) : void 0,
                })
              : null,
            na ??
              (0, i.jsxs)("div", {
                className: "max-h-64 min-h-0 overflow-y-auto",
                children: [
                  ez
                    ? (0, i.jsx)(v.$, {
                        color: "ghostActive",
                        onClick: () => void eT(),
                        children: (0, i.jsx)(m.A, {
                          id: "restricted.environmentSetup.repositoryPicker.connections.retry",
                          defaultMessage: "Retry loading GitHub connections",
                          description: "Retries loading GitHub connections for the Cloud v2 repository picker",
                        }),
                      })
                    : null,
                  eE || e6
                    ? (0, i.jsxs)("div", {
                        role: "status",
                        className: "select-none",
                        children: [
                          (0, i.jsx)("div", {
                            className: "sr-only",
                            children: (0, i.jsx)(m.A, {
                              id: "restricted.environmentSetup.repositoryPicker.repositories.loading",
                              defaultMessage: "Loading repositories…",
                              description:
                                "Loading state while fetching repositories for the Cloud v2 repository picker",
                            }),
                          }),
                          ["w-24", "w-32", "w-28", "w-36", "w-20", "w-16"].map(G),
                        ],
                      })
                    : null,
                  e2 && !e5
                    ? (0, i.jsx)(v.$, {
                        color: "ghostActive",
                        onClick: () => void e7(),
                        children: (0, i.jsx)(m.A, {
                          id: "restricted.environmentSetup.repositoryPicker.repositories.retry",
                          defaultMessage: "Retry loading repositories",
                          description:
                            "Retries a failed GitHub repository page or search in the Cloud v2 repository picker",
                        }),
                      })
                    : null,
                  eE || e2 || e8?.length !== 0
                    ? null
                    : (0, i.jsx)(w.W, {
                        layout: "settings-row",
                        children:
                          "" !== eN
                            ? (0, i.jsx)(m.A, {
                                id: "restricted.environmentSetup.repositoryPicker.noMatches",
                                defaultMessage: "No repositories match “{query}”",
                                description: "No repositories match the user's search text",
                                values: { query: eN },
                              })
                            : (0, i.jsx)(m.A, {
                                id: "restricted.environmentSetup.repositoryPicker.repositories.empty",
                                defaultMessage: "No repositories found",
                                description:
                                  "Empty state when no repositories match the Cloud v2 repository picker search",
                              }),
                      }),
                  eE
                    ? null
                    : e8?.map((e) => {
                        let n = ea.includes(e.id),
                          t = { linkId: eR, connectorId: (0, E.fw)(e.id) ?? eL, repository: e },
                          r = (0, i.jsxs)("span", {
                            className: (0, a.A)("truncate", eb && "single" !== ex && "-translate-y-px"),
                            children: [
                              (0, i.jsx)("span", {
                                className: "text-secondary",
                                children: e.repository_full_name.slice(0, e.repository_full_name.lastIndexOf("/") + 1),
                              }),
                              e.repository_full_name.slice(e.repository_full_name.lastIndexOf("/") + 1),
                            ],
                          })
                        return "single" === ex
                          ? (0, i.jsx)(
                              v.$,
                              {
                                className:
                                  "w-full gap-3 rounded-lg px-3 py-1 text-start text-base hover:bg-primary-ghost-hover",
                                disabled: es,
                                unstyled: !0,
                                onClick: () => ec(t, !0),
                                type: "button",
                                children: r,
                              },
                              e.id,
                            )
                          : (0, i.jsxs)(
                              "label",
                              {
                                className: (0, a.A)(
                                  "flex cursor-interaction items-center gap-3 px-3 text-base select-none",
                                  eb ? "py-1.5 leading-5" : "py-1",
                                ),
                                htmlFor: `cloud-environment-repository-${e.id}`,
                                children: [
                                  (0, i.jsx)("span", {
                                    className: "relative flex",
                                    children: (0, i.jsx)(h.S, {
                                      variant: "secondary",
                                      checked: n,
                                      disabled: es || (eS && !n),
                                      id: `cloud-environment-repository-${e.id}`,
                                      onCheckedChange: (e) => {
                                        ec(t, !0 === e)
                                      },
                                    }),
                                  }),
                                  r,
                                ],
                              },
                              e.id,
                            )
                      }),
                  !eE && (e1 || e5) && (!e2 || e5)
                    ? (0, i.jsx)(w.W, {
                        layout: "settings-row",
                        children: (0, i.jsxs)(v.$, {
                          color: "secondary",
                          disabled: es || e3,
                          loading: e4,
                          size: "dialog",
                          onClick: () => void e0(),
                          children: [
                            e4 &&
                              (0, i.jsx)(m.A, {
                                id: "restricted.environmentSetup.repositoryPicker.repositories.loadingMore",
                                defaultMessage: "Loading more…",
                                description:
                                  "Button label while loading another page of GitHub repositories in the cloud environment setup dialog",
                              }),
                            !e4 &&
                              e5 &&
                              (0, i.jsx)(m.A, {
                                id: "restricted.environmentSetup.repositoryPicker.repositories.retry",
                                defaultMessage: "Retry loading repositories",
                                description:
                                  "Retries a failed GitHub repository page or search in the Cloud v2 repository picker",
                              }),
                            !e4 &&
                              !e5 &&
                              (0, i.jsx)(m.A, {
                                id: "restricted.environmentSetup.repositoryPicker.repositories.loadMore",
                                defaultMessage: "Load more repositories",
                                description:
                                  "Loads another page of GitHub repositories in the Cloud v2 repository picker",
                              }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
          ],
        })
      return (
        er[50] !== ee || er[51] !== en || er[52] !== et || er[53] !== nj
          ? ((ei = (0, i.jsxs)("div", { className: ee, children: [en, et, nj] })),
            (er[50] = ee),
            (er[51] = en),
            (er[52] = et),
            (er[53] = nj),
            (er[54] = ei))
          : (ei = er[54]),
        ei
      )
    }
    function G(e) {
      return (0, i.jsxs)(
        "div",
        {
          "aria-hidden": !0,
          className: "flex h-8 items-center gap-3 px-3",
          children: [
            (0, i.jsx)("div", { className: "size-4 shrink-0", children: (0, i.jsx)(A.X, { size: "fill" }) }),
            (0, i.jsx)(A.X, { className: e, size: "sm" }),
          ],
        },
        e,
      )
    }
    function D(e) {
      return e.repositories
    }
    function V(e) {
      let { status: n } = e
      return "DISABLED_BY_ADMIN" !== n
    }
    function $(e) {
      return "connected" === (0, T.oP)(e).status
    }
  },
  NxjN(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("zd8w"),
      a = t("ygO2"),
      o = t("CqQF")
    t.d(
      n,
      {},
      {
        F: function (e) {
          let n,
            t,
            l,
            d,
            c,
            u,
            m,
            p = (0, r.c)(25)
          p[0] !== e
            ? (({ id: t, tooltipContent: d, size: l, ...n } = e),
              (p[0] = e),
              (p[1] = n),
              (p[2] = t),
              (p[3] = l),
              (p[4] = d))
            : ((n = p[1]), (t = p[2]), (l = p[3]), (d = p[4]))
          let v = void 0 === l ? "compact" : l,
            h = (0, s.useId)(),
            f = t ?? h,
            g = (0, s.useId)(),
            [b, x] = (0, s.useState)(null),
            y = n.disabled || n.loading,
            j = y && null != d,
            S = d ?? "",
            w = null != d && void 0,
            k = b ?? void 0,
            M = y ? x : void 0,
            A = j ? g : void 0,
            _ = j || void 0,
            C = j ? f : void 0,
            N = j ? "group" : void 0,
            E = j ? 0 : void 0,
            P = y ? void 0 : x,
            z = y || null == d ? void 0 : g
          return (
            p[5] !== f || p[6] !== n || p[7] !== v || p[8] !== P || p[9] !== z
              ? ((c = (0, i.jsx)(a.$, { id: f, ref: P, "aria-describedby": z, size: v, ...n })),
                (p[5] = f),
                (p[6] = n),
                (p[7] = v),
                (p[8] = P),
                (p[9] = z),
                (p[10] = c))
              : (c = p[10]),
            p[11] !== E || p[12] !== c || p[13] !== M || p[14] !== A || p[15] !== _ || p[16] !== C || p[17] !== N
              ? ((u = (0, i.jsx)("span", {
                  ref: M,
                  className:
                    "inline-flex max-w-full min-w-0 rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                  "aria-describedby": A,
                  "aria-disabled": _,
                  "aria-labelledby": C,
                  role: N,
                  tabIndex: E,
                  children: c,
                })),
                (p[11] = E),
                (p[12] = c),
                (p[13] = M),
                (p[14] = A),
                (p[15] = _),
                (p[16] = C),
                (p[17] = N),
                (p[18] = u))
              : (u = p[18]),
            p[19] !== u || p[20] !== S || p[21] !== w || p[22] !== k || p[23] !== g
              ? ((m = (0, i.jsx)(o.m, {
                  color: "inverse",
                  tooltipContent: S,
                  open: w,
                  tooltipId: g,
                  triggerElement: k,
                  children: u,
                })),
                (p[19] = u),
                (p[20] = S),
                (p[21] = w),
                (p[22] = k),
                (p[23] = g),
                (p[24] = m))
              : (m = p[24]),
            m
          )
        },
      },
    )
  },
  teEn(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("on57"),
      a = t("zd8w"),
      o = t("Wf1j"),
      l = t("oyxz"),
      d = t("Qgfj"),
      c = t("ygO2"),
      u = t("JNtf"),
      m = t("mUDD"),
      p = t("GO7r"),
      v = t("AWNZ"),
      h = t("NxjN"),
      f = t("J0Wh"),
      g = t("K489")
    let b = (0, d.YK)({
      editLabel: {
        id: "restricted.environmentSetup.network.domain.edit",
        defaultMessage: "Edit additional allowed domains ({count, plural, one {# domain} other {# domains}})",
        description:
          "Accessible label for editing individually allowed cloud environment network domains in addition to the selected preset, including their count",
      },
      title: {
        id: "restricted.environmentSetup.configuration.network.domains",
        defaultMessage: "Additional allowed domains",
        description:
          "Label and editor title for individually allowed cloud environment network domains in addition to the selected preset",
      },
    })
    t.d(
      n,
      {},
      {
        y: function (e) {
          let n,
            t,
            d,
            x,
            y,
            j,
            S,
            w,
            k,
            M,
            A,
            _,
            C,
            N,
            E = (0, r.c)(40),
            { disabled: P, disabledTooltip: z, domains: I, onChange: T, issues: H } = e
          E[0] !== H ? ((n = void 0 === H ? [] : H), (E[0] = H), (E[1] = n)) : (n = E[1])
          let L = n,
            R = (0, o.A)(),
            [O, G] = (0, a.useState)(null)
          P && null != O && G(null)
          let D = L.length > 0,
            V = P && "opacity-50"
          ;(E[2] !== V ? ((t = (0, s.A)("select-none", V)), (E[2] = V), (E[3] = t)) : (t = E[3]),
            E[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, i.jsx)("span", {
                  className: "shrink-0 select-none",
                  children: (0, i.jsx)(l.A, { ...b.title }),
                })),
                (E[4] = d))
              : (d = E[4]),
            E[5] !== I[0] || E[6] !== I.length
              ? ((x = (0, i.jsxs)("div", {
                  className: "flex min-w-0 items-center justify-between gap-3",
                  children: [
                    d,
                    (0, i.jsx)("span", {
                      className: "truncate text-secondary",
                      children:
                        I.length > 0
                          ? (0, i.jsx)(l.A, {
                              id: "restricted.environmentSetup.network.domain.summary",
                              defaultMessage:
                                "{count, plural, =1 {{firstDomain}} one {# domain · {firstDomain}} other {# domains · {firstDomain}}}",
                              description:
                                "Compact allowed-domain summary in cloud environment settings. Show only the host for one domain; otherwise show the total count and first host.",
                              values: { count: I.length, firstDomain: I[0] },
                            })
                          : (0, i.jsx)(l.A, {
                              id: "restricted.environmentSetup.network.domain.empty",
                              defaultMessage: "No additional domains",
                              description:
                                "Summary when no individual cloud environment network domains have been allowed",
                            }),
                    }),
                  ],
                })),
                (E[5] = I[0]),
                (E[6] = I.length),
                (E[7] = x))
              : (x = E[7]),
            E[8] !== I.length || E[9] !== R
              ? ((y = R.formatMessage(b.editLabel, { count: I.length })), (E[8] = I.length), (E[9] = R), (E[10] = y))
              : (y = E[10]))
          let $ = P ? z : null
          return (
            E[11] !== I ? ((j = () => G({ domains: [...I], value: "" })), (E[11] = I), (E[12] = j)) : (j = E[12]),
            E[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = (0, i.jsx)(p.Npl, {})), (E[13] = S))
              : (S = E[13]),
            E[14] !== P || E[15] !== j || E[16] !== y || E[17] !== $
              ? ((w = (0, i.jsx)(h.F, {
                  "aria-label": y,
                  color: "ghost",
                  disabled: P,
                  tooltipContent: $,
                  size: "icon",
                  onClick: j,
                  children: S,
                })),
                (E[14] = P),
                (E[15] = j),
                (E[16] = y),
                (E[17] = $),
                (E[18] = w))
              : (w = E[18]),
            E[19] !== P || E[20] !== L[0]
              ? ((k = !P && null != L[0] && (0, i.jsx)(g.o, { issue: L[0] })), (E[19] = P), (E[20] = L[0]), (E[21] = k))
              : (k = E[21]),
            E[22] !== w || E[23] !== k
              ? ((M = (0, i.jsxs)(i.Fragment, { children: [w, k] })), (E[22] = w), (E[23] = k), (E[24] = M))
              : (M = E[24]),
            E[25] !== M || E[26] !== t || E[27] !== x
              ? ((A = (0, i.jsx)(v.ic, {
                  className: t,
                  controlSizing: "content",
                  variant: "featured",
                  size: "compact",
                  label: x,
                  control: M,
                })),
                (E[25] = M),
                (E[26] = t),
                (E[27] = x),
                (E[28] = A))
              : (A = E[28]),
            E[29] !== A || E[30] !== D
              ? ((_ = (0, i.jsx)("div", { "data-environment-invalid": D, children: A })),
                (E[29] = A),
                (E[30] = D),
                (E[31] = _))
              : (_ = E[31]),
            E[32] !== P || E[33] !== O || E[34] !== L.length || E[35] !== T
              ? ((C =
                  null == O || P
                    ? null
                    : (0, i.jsx)(u.lG, {
                        open: !0,
                        size: "wide",
                        onOpenChange: (e) => !e && G(null),
                        children: (0, i.jsxs)(m.R4, {
                          as: "form",
                          size: "viewport",
                          onSubmit: (e) => {
                            ;(e.preventDefault(), e.stopPropagation(), O.value.trim() || (T(O.domains), G(null)))
                          },
                          children: [
                            (0, i.jsx)(m.OO, {
                              children: (0, i.jsx)(m.c7, {
                                title: (0, i.jsx)(u.L3, { children: (0, i.jsx)(l.A, { ...b.title }) }),
                              }),
                            }),
                            (0, i.jsx)(m.OO, {
                              children: (0, i.jsx)(f.Y, {
                                disabled: P,
                                domains: O.domains,
                                showErrors: L.length > 0,
                                value: O.value,
                                onChange: (e) => G((n) => (null == n ? null : { ...n, domains: e })),
                                onInputChange: (e) => G((n) => (null == n ? null : { ...n, value: e })),
                              }),
                            }),
                            (0, i.jsx)(m.OO, {
                              children: (0, i.jsxs)(m.Es, {
                                children: [
                                  (0, i.jsx)(c.$, {
                                    color: "secondary",
                                    onClick: () => G(null),
                                    children: (0, i.jsx)(l.A, {
                                      id: "restricted.environmentSetup.configuration.dialog.cancel",
                                      defaultMessage: "Cancel",
                                      description: "Discard edits in a cloud environment configuration dialog",
                                    }),
                                  }),
                                  (0, i.jsx)(c.$, {
                                    color: "primary",
                                    disabled: !!O.value.trim(),
                                    type: "submit",
                                    children: (0, i.jsx)(l.A, {
                                      id: "restricted.environmentSetup.configuration.dialog.save",
                                      defaultMessage: "Save",
                                      description:
                                        "Apply dialog edits to the cloud environment configuration being edited",
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      })),
                (E[32] = P),
                (E[33] = O),
                (E[34] = L.length),
                (E[35] = T),
                (E[36] = C))
              : (C = E[36]),
            E[37] !== _ || E[38] !== C
              ? ((N = (0, i.jsxs)(i.Fragment, { children: [_, C] })), (E[37] = _), (E[38] = C), (E[39] = N))
              : (N = E[39]),
            N
          )
        },
      },
    )
  },
  J0Wh(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("on57"),
      a = t("Wf1j"),
      o = t("oyxz"),
      l = t("Qgfj"),
      d = t("wU6J"),
      c = t("yvV6"),
      u = t("K489")
    let m = (0, l.YK)({
      duplicate: {
        id: "restricted.environmentSetup.network.domain.duplicate",
        defaultMessage: "This domain is already allowed",
        description: "Validation error when adding a duplicate cloud environment network host",
      },
      ipv4: {
        id: "restricted.environmentSetup.network.domain.ipv4",
        defaultMessage: "Use a full IPv4 address, such as 192.0.2.1",
        description: "Validation error for a noncanonical numeric network host",
      },
      long: {
        id: "restricted.environmentSetup.network.domain.long",
        defaultMessage: "Hosts must be at most 253 characters, with labels at most 63 characters",
        description: "Validation error for a cloud environment network host that exceeds hostname length limits",
      },
      url: {
        id: "restricted.environmentSetup.network.domain.url",
        defaultMessage: "Enter a host without a URL, path, or port",
        description: "Validation error when a cloud environment allowed network host contains a URL or port",
      },
      invalid: {
        id: "restricted.environmentSetup.network.domain.invalid",
        defaultMessage: "Enter a host such as example.com or *.example.com",
        description: "Validation error for a malformed cloud environment allowed network hostname",
      },
      wildcard: {
        id: "environmentSetup.secret.domain.wildcard",
        defaultMessage: "Wildcards are not supported for secrets; enter an exact host",
        description: "Validation error explaining that proxy secrets require exact destination hostnames",
      },
    })
    t.d(
      n,
      {},
      {
        Y: function (e) {
          let n,
            t,
            l,
            p,
            v,
            h,
            f,
            g,
            b = (0, r.c)(42),
            {
              disabled: x,
              domains: y,
              value: j,
              onChange: S,
              onInputChange: w,
              showErrors: k,
              purpose: M,
              readOnly: A,
            } = e,
            _ = void 0 !== k && k,
            C = void 0 === M ? "network" : M,
            N = void 0 !== A && A,
            E = (0, a.A)()
          b[0] !== x || b[1] !== y || b[2] !== E || b[3] !== S || b[4] !== C || b[5] !== N || b[6] !== _
            ? ((t = { purpose: C }),
              (n = y.map((e, n) =>
                (0, i.jsx)(
                  c.b,
                  {
                    value: e,
                    removeLabel: E.formatMessage(
                      {
                        id: "restricted.environmentSetup.network.domain.remove",
                        defaultMessage: "Remove {domain}",
                        description: "Button for removing one allowed cloud environment network domain",
                      },
                      { domain: e },
                    ),
                    disabled: x,
                    onRemove: N ? void 0 : () => S(y.filter((e, t) => t !== n)),
                    children:
                      _ && (!e.trim() || null != (0, d.r)(e, "secret" === C ? y.slice(0, n) : [], t))
                        ? (0, i.jsx)(u.o, { issue: { field: `network-${n}`, code: "domains" } })
                        : null,
                  },
                  `${e}-${n}`,
                ),
              )),
              (b[0] = x),
              (b[1] = y),
              (b[2] = E),
              (b[3] = S),
              (b[4] = C),
              (b[5] = N),
              (b[6] = _),
              (b[7] = n),
              (b[8] = t))
            : ((n = b[7]), (t = b[8]))
          let P = n
          if (N) {
            let e,
              n,
              t,
              r = "secret" === C ? "max-h-24" : "h-24"
            return (
              b[9] !== r
                ? ((e = (0, s.A)("flex w-full min-w-0 flex-wrap content-start gap-1 overflow-y-auto", r)),
                  (b[9] = r),
                  (b[10] = e))
                : (e = b[10]),
              b[11] !== P || b[12] !== y.length
                ? ((n =
                    y.length > 0
                      ? P
                      : (0, i.jsx)("p", {
                          className: "text-xs text-secondary select-none",
                          children: (0, i.jsx)(o.A, {
                            id: "restricted.environmentSetup.network.domain.emptyList",
                            defaultMessage: "No domains added yet",
                            description: "Empty-state message in the cloud environment allowed-domains editor",
                          }),
                        })),
                  (b[11] = P),
                  (b[12] = y.length),
                  (b[13] = n))
                : (n = b[13]),
              b[14] !== e || b[15] !== n
                ? ((t = (0, i.jsx)("div", { className: e, children: n })), (b[14] = e), (b[15] = n), (b[16] = t))
                : (t = b[16]),
              t
            )
          }
          return (
            b[17] !== t
              ? ((l = (e) => (null == (0, d.r)(e, [], t) ? (0, d.T)(e) : null)), (b[17] = t), (b[18] = l))
              : (l = b[18]),
            b[19] !== y || b[20] !== C || b[21] !== t
              ? ((p = (e) => {
                  let n = (0, d.r)(e, y, t)
                  return "secret" === C && "invalid" === n
                    ? (0, i.jsx)(o.A, {
                        id: "environmentSetup.secret.domain.invalid",
                        defaultMessage: "Enter an exact host, such as api.example.com",
                        description: "Validation error for a malformed proxy-secret destination hostname",
                      })
                    : null == n
                      ? null
                      : (0, i.jsx)(o.A, { ...m[n] })
                }),
                (b[19] = y),
                (b[20] = C),
                (b[21] = t),
                (b[22] = p))
              : (p = b[22]),
            b[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = (0, i.jsx)(o.A, {
                  id: "restricted.environmentSetup.network.domain.addBeforeSave",
                  defaultMessage: "Press Enter to add this domain before saving",
                  description: "Help text when a cloud environment domain has been typed but not added yet",
                })),
                (b[23] = v))
              : (v = b[23]),
            b[24] !== E || b[25] !== C
              ? ((h =
                  "secret" === C
                    ? E.formatMessage({
                        id: "environmentSetup.secret.domain.input",
                        defaultMessage: "Allowed secret domains",
                        description: "Accessible label for adding exact destination hostnames for a proxy secret",
                      })
                    : E.formatMessage({
                        id: "restricted.environmentSetup.sidePanel.network.domains",
                        defaultMessage: "Additional allowed domains",
                        description:
                          "Accessible label for entering individually allowed cloud environment network hosts in addition to the selected preset",
                      })),
                (b[24] = E),
                (b[25] = C),
                (b[26] = h))
              : (h = b[26]),
            b[27] !== E || b[28] !== C
              ? ((f =
                  "secret" === C
                    ? E.formatMessage({
                        id: "environmentSetup.secret.domain.placeholder",
                        defaultMessage: "api.example.com",
                        description: "Example exact destination hostname for a proxy secret",
                      })
                    : E.formatMessage({
                        id: "restricted.environmentSetup.network.domain.placeholder",
                        defaultMessage: "example.com or *.example.com",
                        description: "Example allowed network host or wildcard host in a cloud environment",
                      })),
                (b[27] = E),
                (b[28] = C),
                (b[29] = f))
              : (f = b[29]),
            b[30] !== x ||
            b[31] !== P ||
            b[32] !== y ||
            b[33] !== S ||
            b[34] !== w ||
            b[35] !== C ||
            b[36] !== l ||
            b[37] !== p ||
            b[38] !== h ||
            b[39] !== f ||
            b[40] !== j
              ? ((g = (0, i.jsx)(c.G, {
                  entries: y,
                  value: j,
                  onChange: S,
                  onInputChange: w,
                  disabled: x,
                  purpose: C,
                  parseEntry: l,
                  errorFor: p,
                  pendingHelp: v,
                  label: h,
                  placeholder: f,
                  children: P,
                })),
                (b[30] = x),
                (b[31] = P),
                (b[32] = y),
                (b[33] = S),
                (b[34] = w),
                (b[35] = C),
                (b[36] = l),
                (b[37] = p),
                (b[38] = h),
                (b[39] = f),
                (b[40] = j),
                (b[41] = g))
              : (g = b[41]),
            g
          )
        },
      },
    )
  },
  BPZJ(e, n, t) {
    t.d(n, { b: () => g })
    var i = t("ABep"),
      r = t("QosV"),
      s = t("zd8w"),
      a = t("v7qY"),
      o = t("oyxz"),
      l = t("ygO2"),
      d = t("JNtf"),
      c = t("mUDD"),
      u = t("ZRUt"),
      m = t("qoby"),
      p = t("pKvz"),
      v = t("WGE9"),
      h = t("EkMM")
    t("PFi3")
    var f = t("ECQF")
    function g(e) {
      let n,
        t,
        g,
        x,
        y,
        j,
        S,
        w,
        k,
        M,
        A,
        _,
        C,
        N,
        E,
        P,
        z,
        I,
        T,
        H,
        L,
        R,
        O,
        G,
        D,
        V,
        $,
        B,
        W,
        F = (0, r.c)(80),
        {
          hasConflict: U,
          initialSecrets: Q,
          requireValues: q,
          configuration: Z,
          environmentOnly: K,
          onClose: Y,
          onLocalSave: X,
        } = e,
        J = void 0 === q || q,
        ee = void 0 === Z ? null : Z,
        en = void 0 !== K && K
      F[0] !== Q
        ? ((n = () => (Q.length > 0 ? Q : [{ id: 0, name: "", value: "", source: "environment" }])),
          (F[0] = Q),
          (F[1] = n))
        : (n = F[1])
      let [et, ei] = (0, s.useState)(n),
        [er, es] = (0, s.useState)(null)
      F[2] !== et ? ((t = Math.max(-1, ...et.map(b))), (F[2] = et), (F[3] = t)) : (t = F[3])
      let ea = (0, s.useRef)(t + 1),
        [eo, el] = (0, s.useState)(!1),
        [ed, ec] = (0, s.useState)(!1)
      if (
        F[4] !== ee ||
        F[5] !== en ||
        F[6] !== U ||
        F[7] !== eo ||
        F[8] !== Q ||
        F[9] !== er ||
        F[10] !== Y ||
        F[11] !== X ||
        F[12] !== J ||
        F[13] !== et ||
        F[14] !== ed
      ) {
        let e, n, t
        ;(F[30] !== Q
          ? ((e = (e) =>
              Q.some((n) => {
                let { id: t } = n
                return t === e.id
              }) ||
              e.name.length > 0 ||
              e.value.length > 0 ||
              (e.injectionTarget?.domain?.length ?? 0) > 0 ||
              "user_provided" === e.source),
            (F[30] = Q),
            (F[31] = e))
          : (e = F[31]),
          (j = et.filter(e)),
          F[32] !== J || F[33] !== et
            ? ((n = (e) =>
                (0, v.E)(
                  e,
                  et.some((n) => n.id !== e.id && n.name === e.name),
                  J,
                )),
              (F[32] = J),
              (F[33] = et),
              (F[34] = n))
            : (n = F[34]))
        let r = j.flatMap(n)
        F[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(o.A, {
              id: "restricted.environmentSetup.batchSecrets.title",
              defaultMessage: "Manage secrets",
              description: "Title of the cloud environment batch secret editor",
            })),
            (F[35] = t))
          : (t = F[35])
        let s = t
        ;((y = d.lG),
          (A = !0),
          (_ = "xxwide"),
          F[36] !== Y
            ? ((C = (e) => {
                e || Y()
              }),
              (F[36] = Y),
              (F[37] = C))
            : (C = F[37]),
          (x = c.R4),
          (P = "form"),
          (z = !0),
          (S = "max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-hidden"),
          (w = (e) => {
            ;(e.preventDefault(),
              e.stopPropagation(),
              (0, a.flushSync)(() => ec(!0)),
              (0, p.yk)(e.currentTarget),
              U || eo || 0 !== r.length || (X(j), Y()))
          }),
          F[38] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = (0, i.jsx)(d.L3, { className: "sr-only", children: s })), (F[38] = k))
            : (k = F[38]),
          F[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((M = (0, i.jsx)(c.OO, { className: "shrink-0", children: (0, i.jsx)(c.c7, { title: s }) })), (F[39] = M))
            : (M = F[39]),
          (g = c.OO),
          (N = "min-h-0 gap-4 overflow-y-auto"),
          (E =
            et.length > 0
              ? (0, i.jsx)("div", {
                  className: "flex flex-col gap-3",
                  children: et.map((e) =>
                    (0, i.jsx)(
                      h.s,
                      {
                        keyInputRef: er?.id === e.id ? er.ref : void 0,
                        configuration: ee,
                        environmentOnly: en,
                        secret: e,
                        readOnly: e.requested || e.injectionTarget?.type === "http_header",
                        issues: ed
                          ? r.filter((n) => {
                              let { field: t } = n
                              return t?.startsWith(`secret-${e.id}-`)
                            })
                          : [],
                        onChange: (e) => ei(et.map((n) => (n.id === e.id ? e : n))),
                        onDelete: () =>
                          ei(
                            et.filter((n) => {
                              let { id: t } = n
                              return t !== e.id
                            }),
                          ),
                      },
                      e.id,
                    ),
                  ),
                })
              : null),
          (F[4] = ee),
          (F[5] = en),
          (F[6] = U),
          (F[7] = eo),
          (F[8] = Q),
          (F[9] = er),
          (F[10] = Y),
          (F[11] = X),
          (F[12] = J),
          (F[13] = et),
          (F[14] = ed),
          (F[15] = g),
          (F[16] = x),
          (F[17] = y),
          (F[18] = j),
          (F[19] = S),
          (F[20] = w),
          (F[21] = k),
          (F[22] = M),
          (F[23] = A),
          (F[24] = _),
          (F[25] = C),
          (F[26] = N),
          (F[27] = E),
          (F[28] = P),
          (F[29] = z))
      } else
        ((g = F[15]),
          (x = F[16]),
          (y = F[17]),
          (j = F[18]),
          (S = F[19]),
          (w = F[20]),
          (k = F[21]),
          (M = F[22]),
          (A = F[23]),
          (_ = F[24]),
          (C = F[25]),
          (N = F[26]),
          (E = F[27]),
          (P = F[28]),
          (z = F[29]))
      ;(F[40] !== j
        ? ((I = (e, n) => {
            ea.current = ea.current + 1
            let t = ea.current
            ;(ei([
              ...j,
              {
                id: t,
                name: e,
                value: "",
                source: "environment",
                injectionTarget: { type: "environment_variable", name: e },
              },
            ]),
              es({ id: t, ref: n }))
          }),
          (F[40] = j),
          (F[41] = I))
        : (I = F[41]),
        F[42] !== j
          ? ((T = (e) => {
              let n = (function (e, n) {
                let t = (0, f.d)(
                  n,
                  128,
                  e.filter((n, t) => e.some((e, i) => t !== i && e.name === n.name)).map(({ name: e }) => e),
                  e.map(({ name: e }) => e),
                )
                if (!t.ok) return t
                let { entries: i } = t,
                  r = Math.max(-1, ...e.map(({ id: e }) => e)) + 1,
                  s = e.map((e) => {
                    let n = i.get(e.name)
                    return (i.delete(e.name), void 0 === n ? e : { ...e, value: n })
                  })
                for (let [e, n] of i)
                  s.push({
                    id: r++,
                    name: e,
                    value: n,
                    source: "environment",
                    injectionTarget: { type: "environment_variable", name: e },
                  })
                return { ok: !0, secrets: s }
              })(j, e)
              return (
                n.ok &&
                  (es(null),
                  ei(
                    n.secrets.map((e, n) =>
                      n < j.length ? e : ((ea.current = ea.current + 1), { ...e, id: ea.current }),
                    ),
                  )),
                n
              )
            }),
            (F[42] = j),
            (F[43] = T))
          : (T = F[43]),
        F[44] !== I || F[45] !== T
          ? ((H = (0, i.jsx)(m.Y, { onAddKey: I, onPendingChange: el, onImport: T })),
            (F[44] = I),
            (F[45] = T),
            (F[46] = H))
          : (H = F[46]),
        F[47] !== U ? ((L = U ? (0, i.jsx)(u.A, {}) : null), (F[47] = U), (F[48] = L)) : (L = F[48]),
        F[49] !== g || F[50] !== H || F[51] !== L || F[52] !== N || F[53] !== E
          ? ((R = (0, i.jsxs)(g, { className: N, children: [E, H, L] })),
            (F[49] = g),
            (F[50] = H),
            (F[51] = L),
            (F[52] = N),
            (F[53] = E),
            (F[54] = R))
          : (R = F[54]),
        F[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((O = (0, i.jsx)(o.A, {
              id: "restricted.environmentSetup.batchSecrets.cancel",
              defaultMessage: "Cancel",
              description: "Discards unsaved batch secret edits and closes the modal",
            })),
            (F[55] = O))
          : (O = F[55]),
        F[56] !== Y
          ? ((G = (0, i.jsx)(l.$, { className: "me-auto", color: "secondary", onClick: Y, children: O })),
            (F[56] = Y),
            (F[57] = G))
          : (G = F[57]))
      let eu = U || eo
      return (
        F[58] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, i.jsx)(o.A, {
              id: "restricted.environmentSetup.batchSecrets.save",
              defaultMessage: "Save",
              description: "Stages edited cloud environment secrets until the environment panel is saved",
            })),
            (F[58] = D))
          : (D = F[58]),
        F[59] !== eu
          ? ((V = (0, i.jsx)(l.$, { color: "primary", disabled: eu, type: "submit", children: D })),
            (F[59] = eu),
            (F[60] = V))
          : (V = F[60]),
        F[61] !== G || F[62] !== V
          ? (($ = (0, i.jsx)(c.OO, { className: "shrink-0", children: (0, i.jsxs)(c.Es, { children: [G, V] }) })),
            (F[61] = G),
            (F[62] = V),
            (F[63] = $))
          : ($ = F[63]),
        F[64] !== x ||
        F[65] !== S ||
        F[66] !== w ||
        F[67] !== k ||
        F[68] !== M ||
        F[69] !== R ||
        F[70] !== $ ||
        F[71] !== P ||
        F[72] !== z
          ? ((B = (0, i.jsxs)(x, { as: P, noValidate: z, className: S, onSubmit: w, children: [k, M, R, $] })),
            (F[64] = x),
            (F[65] = S),
            (F[66] = w),
            (F[67] = k),
            (F[68] = M),
            (F[69] = R),
            (F[70] = $),
            (F[71] = P),
            (F[72] = z),
            (F[73] = B))
          : (B = F[73]),
        F[74] !== y || F[75] !== A || F[76] !== _ || F[77] !== C || F[78] !== B
          ? ((W = (0, i.jsx)(y, { open: A, size: _, onOpenChange: C, children: B })),
            (F[74] = y),
            (F[75] = A),
            (F[76] = _),
            (F[77] = C),
            (F[78] = B),
            (F[79] = W))
          : (W = F[79]),
        W
      )
    }
    function b(e) {
      let { id: n } = e
      return n
    }
  },
  SbKN(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("slpy"),
      a = t("h818"),
      o = t("on57"),
      l = t("Wf1j"),
      d = t("oyxz"),
      c = t("ygO2"),
      u = t("HOLv"),
      m = t("GO7r"),
      p = t("BSnr"),
      v = t("AWNZ"),
      h = t("ZEx5"),
      f = t("NxjN"),
      g = t("jf0i"),
      b = t("K489")
    function x(e) {
      return (0, i.jsx)(b.o, { issue: e }, e.field)
    }
    function y(e) {
      return e.injectionTarget?.name ?? e.name
    }
    t.d(
      n,
      {},
      {
        m: function (e) {
          let n,
            t,
            b,
            j,
            S,
            w,
            k,
            M,
            A,
            _ = (0, r.c)(29),
            { secrets: C, conflictRows: N, issues: E, isReadOnly: P, readOnlyTooltip: z, showHeading: I, onEdit: T } = e
          _[0] !== E ? ((n = void 0 === E ? [] : E), (_[0] = E), (_[1] = n)) : (n = _[1])
          let H = n,
            L = void 0 === I || I,
            R = (0, l.A)(),
            O = P ? z : null
          return (
            _[2] !== R
              ? ((t = R.formatMessage({
                  id: "environmentSetup.secrets.manageLabel",
                  defaultMessage: "Manage secrets",
                  description:
                    "Accessible label for opening the editor to add, edit, import, or remove network secrets",
                })),
                (_[2] = R),
                (_[3] = t))
              : (t = _[3]),
            _[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = (0, i.jsx)(d.A, {
                  id: "environmentSetup.secrets.manage",
                  defaultMessage: "Manage",
                  description: "Button to open the editor for adding, editing, importing, and removing network secrets",
                })),
                (_[4] = b))
              : (b = _[4]),
            _[5] !== P || _[6] !== T || _[7] !== O || _[8] !== t
              ? ((j = (0, i.jsx)(f.F, {
                  tooltipContent: O,
                  "aria-label": t,
                  color: "secondary",
                  disabled: P,
                  size: "settingsAction",
                  onClick: T,
                  children: b,
                })),
                (_[5] = P),
                (_[6] = T),
                (_[7] = O),
                (_[8] = t),
                (_[9] = j))
              : (j = _[9]),
            _[10] !== R || _[11] !== L
              ? ((S = L
                  ? (0, i.jsxs)("div", {
                      className: "flex items-center gap-1",
                      children: [
                        (0, i.jsx)(d.A, {
                          id: "environmentSetup.networkSecrets.title",
                          defaultMessage: "HTTP secrets",
                          description:
                            "Heading for secrets injected into HTTP and HTTPS requests in cloud environment settings",
                        }),
                        (0, i.jsx)(s.m, {
                          content: (0, i.jsx)(d.A, {
                            id: "restricted.environmentSetup.sidePanel.secrets.tooltip",
                            defaultMessage:
                              "Secrets stay outside the environment. Code receives a placeholder that is replaced only in HTTP and HTTPS requests to allowed domains. Saving a secret also allows access to its domains.",
                            description: "Tooltip explaining how proxy secrets are protected and delivered",
                          }),
                          children: (0, i.jsx)(c.$, {
                            "aria-label": R.formatMessage({
                              id: "restricted.environmentSetup.sidePanel.secrets.tooltip.label",
                              defaultMessage: "About HTTP secrets",
                              description: "Accessible label for the network secrets information tooltip",
                            }),
                            color: "ghostSecondary",
                            size: "inline",
                            type: "button",
                            children: (0, i.jsx)(u.I, { asset: a.c }),
                          }),
                        }),
                      ],
                    })
                  : null),
                (_[10] = R),
                (_[11] = L),
                (_[12] = S))
              : (S = _[12]),
            _[13] !== j || _[14] !== S
              ? ((w = (0, i.jsx)(p.X.Header, {
                  className: "select-none",
                  actions: j,
                  size: "base",
                  spacing: "compact",
                  title: S,
                })),
                (_[13] = j),
                (_[14] = S),
                (_[15] = w))
              : (w = _[15]),
            _[16] !== N || _[17] !== R || _[18] !== P || _[19] !== H || _[20] !== T || _[21] !== z || _[22] !== C
              ? ((k =
                  0 !== C.length || N?.size
                    ? (0, g.i)(
                        C,
                        y,
                        (e) => {
                          let n = H.filter((n) => {
                              let { field: t } = n
                              return t?.startsWith(`secret-${e.id}-`)
                            }),
                            t =
                              !0 === e.isMissing &&
                              "user_provided" !== e.source &&
                              null == e.serverId &&
                              0 === e.value.length,
                            r = (0, i.jsx)("span", {
                              "aria-hidden": "true",
                              children: (0, i.jsx)(d.A, {
                                id: "environmentSetup.secret.mask",
                                defaultMessage: "••••••••",
                                description:
                                  "Eight bullet characters masking a saved or staged secret; preserve these masking characters",
                              }),
                            })
                          return (
                            t
                              ? (r = (0, i.jsx)(d.A, {
                                  id: "restricted.environmentSetup.configuration.secret.missing",
                                  defaultMessage: "Missing",
                                  description:
                                    "Status for a cloud environment secret requirement with no saved or staged value",
                                }))
                              : "user_provided" === e.source
                                ? (r = (0, i.jsx)(d.A, {
                                    id: "restricted.environmentSetup.configuration.secret.source.userProvided",
                                    defaultMessage: "User-provided",
                                    description: "A cloud environment secret supplied by the executing user",
                                  }))
                                : 0 !== e.value.length ||
                                  null != e.serverId ||
                                  (P && "environment" === e.source) ||
                                  (r = (0, i.jsx)(d.A, {
                                    id: "restricted.environmentSetup.configuration.secret.noValue",
                                    defaultMessage: "No value",
                                    description:
                                      "Status for an environment secret with no value stored in the current mock editor",
                                  })),
                            (0, i.jsx)(
                              v.ic,
                              {
                                className: "select-none",
                                controlSizing: "content",
                                variant: "featured",
                                size: "compact",
                                control: (e) =>
                                  (0, i.jsxs)(i.Fragment, {
                                    children: [
                                      (0, i.jsx)("span", {
                                        className: (0, o.A)(
                                          "text-base select-none",
                                          t ? "text-danger" : "text-secondary",
                                        ),
                                        children: r,
                                      }),
                                      (0, i.jsx)(f.F, {
                                        tooltipContent: P ? z : null,
                                        "aria-describedby": e["aria-describedby"],
                                        "data-environment-invalid": n.length > 0,
                                        "aria-label": R.formatMessage({
                                          id: "restricted.environmentSetup.configuration.secret.edit",
                                          defaultMessage: "Edit secret",
                                          description:
                                            "Accessible label for editing a simulated cloud environment secret declaration",
                                        }),
                                        color: "ghost",
                                        size: "icon",
                                        disabled: P,
                                        onClick: T,
                                        children: (0, i.jsx)(m.Npl, {}),
                                      }),
                                    ],
                                  }),
                                icon: (0, i.jsx)(m.iNn, {}),
                                label: (0, i.jsx)("span", {
                                  className: "block truncate",
                                  children: e.injectionTarget?.name ?? e.name,
                                }),
                                description:
                                  0 === n.length
                                    ? void 0
                                    : (0, i.jsx)("div", { className: "flex flex-col gap-1", children: n.map(x) }),
                              },
                              e.id,
                            )
                          )
                        },
                        N,
                      )
                    : (0, i.jsx)(v.ic, {
                        className: "select-none",
                        controlSizing: "content",
                        variant: "featured",
                        size: "compact",
                        control: null,
                        icon: (0, i.jsx)(m.iNn, { className: "text-secondary" }),
                        label: (0, i.jsx)(d.A, {
                          id: "restricted.environmentSetup.configuration.secret.empty",
                          defaultMessage: "No HTTP secrets added",
                          description: "Description shown when a cloud environment has no proxy secret declarations",
                        }),
                      })),
                (_[16] = N),
                (_[17] = R),
                (_[18] = P),
                (_[19] = H),
                (_[20] = T),
                (_[21] = z),
                (_[22] = C),
                (_[23] = k))
              : (k = _[23]),
            _[24] !== k
              ? ((M = (0, i.jsx)(p.X.Content, { children: (0, i.jsx)(h.t, { children: k }) })),
                (_[24] = k),
                (_[25] = M))
              : (M = _[25]),
            _[26] !== M || _[27] !== w
              ? ((A = (0, i.jsxs)("section", {
                  className: "flex flex-col",
                  "data-environment-section": "secrets",
                  children: [w, M],
                })),
                (_[26] = M),
                (_[27] = w),
                (_[28] = A))
              : (A = _[28]),
            A
          )
        },
      },
    )
  },
  SXhj(e, n, t) {
    var i = t("Qgfj")
    let r = (0, i.zR)({
        id: "environmentSetup.description.label",
        defaultMessage: "Description",
        description: "Label for a saved cloud environment's description in its settings and pending changes",
      }),
      s = (0, i.YK)({
        variables: {
          id: "restricted.environmentSetup.changes.variables",
          defaultMessage: "Environment variables",
          description: "Changed environment-owned runtime variable names or values in the change summary",
        },
        tcpAccess: {
          id: "environmentSetup.changes.tcpAccess",
          defaultMessage: "TCP access",
          description: "Changed TCP destination grants in the environment change summary",
        },
        connections: {
          id: "restricted.environmentSetup.changes.connections",
          defaultMessage: "Outbound identity connections",
          description: "Changed outbound identity connection attachments or aliases in the environment change summary",
        },
        name: {
          id: "restricted.environmentSetup.changes.name",
          defaultMessage: "Environment name",
          description: "Changed environment name in the change summary",
        },
        scripts: {
          id: "restricted.environmentSetup.changes.scripts",
          defaultMessage: "Scripts",
          description: "Changed install script or start skill in the environment change summary",
        },
        network: {
          id: "restricted.environmentSetup.changes.network",
          defaultMessage: "Internet access",
          description: "Changed internet access policy in the environment change summary",
        },
        repositories: {
          id: "restricted.environmentSetup.changes.repositories",
          defaultMessage: "Repositories",
          description: "Changed repositories in the environment change summary",
        },
        secrets: {
          id: "restricted.environmentSetup.changes.secrets",
          defaultMessage: "Secrets",
          description: "Changed secret requirements or values in the environment change summary",
        },
        privacy: {
          id: "restricted.environmentSetup.changes.privacy",
          defaultMessage: "Privacy",
          description: "Changed sharing settings in the environment change summary",
        },
      })
    t.d(n, {}, { S: r, b: s })
  },
  JiLO(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("on57"),
      a = t("CqQF")
    t.d(
      n,
      {},
      {
        V: function (e) {
          let n,
            t,
            o,
            l = (0, r.c)(13),
            { children: d, reason: c, label: u, className: m } = e,
            p = c ?? "",
            v = null != c && void 0
          l[0] !== m
            ? ((n = (0, s.A)(
                "inline-flex rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                m,
              )),
              (l[0] = m),
              (l[1] = n))
            : (n = l[1])
          let h = null != c || void 0,
            f = null == c ? void 0 : u,
            g = null == c ? void 0 : "group",
            b = null == c ? void 0 : 0
          return (
            l[2] !== d || l[3] !== n || l[4] !== h || l[5] !== f || l[6] !== g || l[7] !== b
              ? ((t = (0, i.jsx)("div", {
                  className: n,
                  "aria-disabled": h,
                  "aria-label": f,
                  role: g,
                  tabIndex: b,
                  children: d,
                })),
                (l[2] = d),
                (l[3] = n),
                (l[4] = h),
                (l[5] = f),
                (l[6] = g),
                (l[7] = b),
                (l[8] = t))
              : (t = l[8]),
            l[9] !== p || l[10] !== v || l[11] !== t
              ? ((o = (0, i.jsx)(a.m, { color: "inverse", tooltipContent: p, open: v, children: t })),
                (l[9] = p),
                (l[10] = v),
                (l[11] = t),
                (l[12] = o))
              : (o = l[12]),
            o
          )
        },
      },
    )
  },
  ZRUt(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("oyxz")
    t.d(
      n,
      {},
      {
        A: function () {
          let e,
            n = (0, r.c)(1)
          return (
            n[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)("p", {
                  className: "text-sm text-danger select-none",
                  role: "alert",
                  children: (0, i.jsx)(s.A, {
                    id: "restricted.environmentSetup.batchSecrets.conflict",
                    defaultMessage:
                      "This environment changed elsewhere. Close and reopen the editor to load the latest version, then re-enter your edits",
                    description:
                      "Explains that private batch edits cannot replace a newer environment configuration and how to reopen the latest version",
                  }),
                })),
                (n[0] = e))
              : (e = n[0]),
            e
          )
        },
      },
    )
  },
  rQvE(e, n, t) {
    t.d(
      n,
      {},
      {
        p: function (e, n) {
          return (
            e?.id !== n?.id ||
            e?.version_id !== n?.version_id ||
            e?.draft?.id !== n?.draft?.id ||
            e?.draft?.revision !== n?.draft?.revision
          )
        },
      },
    )
  },
  qoby(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("zd8w"),
      a = t("Wf1j"),
      o = t("oyxz"),
      l = t("zLIa")
    t.d(
      n,
      {},
      {
        Y: function (e) {
          let n,
            t,
            d,
            c,
            u,
            m,
            p,
            v,
            h,
            f,
            g,
            b,
            x,
            y,
            j,
            S,
            w = (0, r.c)(44),
            { ref: k, onAddKey: M, onImport: A, onPendingChange: _ } = e,
            C = (0, a.A)(),
            N = (0, s.useId)(),
            [E, P] = (0, s.useState)(""),
            [z, I] = (0, s.useState)(null),
            T = (0, s.useRef)(!1),
            H = (0, s.useRef)(null)
          w[0] !== A || w[1] !== _
            ? ((n = function (e) {
                let n = A(e)
                ;(I(n), P(n.ok ? "" : e), _(!n.ok && e.trim().length > 0))
              }),
              (w[0] = A),
              (w[1] = _),
              (w[2] = n))
            : (n = w[2])
          let L = n
          w[3] !== L || w[4] !== E
            ? ((t = function (e) {
                let n = H.current
                null != n && (L(E.slice(0, n.selectionStart) + e + E.slice(n.selectionEnd)), n.focus())
              }),
              (w[3] = L),
              (w[4] = E),
              (w[5] = t))
            : (t = w[5])
          let R = t
          ;(w[6] !== R ? ((d = () => ({ importText: R })), (w[6] = R), (w[7] = d)) : (d = w[7]),
            (0, s.useImperativeHandle)(k, d),
            w[8] !== M || w[9] !== _
              ? ((c = function (e) {
                  let { value: n, selectionStart: t, selectionEnd: i, selectionDirection: r } = e
                  ;(P(n),
                    I(null),
                    _(n.trim().length > 0),
                    T.current ||
                      !n ||
                      /[=\r\n]/.test(n) ||
                      (M(n, (e) => {
                        ;(e?.focus(), e?.setSelectionRange(t, i, r))
                      }),
                      P(""),
                      _(!1)))
                }),
                (w[8] = M),
                (w[9] = _),
                (w[10] = c))
              : (c = w[10]))
          let O = c
          w[11] !== C
            ? ((u = C.formatMessage({
                id: "environmentSetup.entries.input",
                defaultMessage: "Paste .env or type a key",
                description: "Accessible label for adding entries to the network secret or environment variable editor",
              })),
              (w[11] = C),
              (w[12] = u))
            : (u = w[12])
          let G = z?.ok === !1,
            D = z?.ok === !1 ? N : void 0
          return (
            w[13] !== C
              ? ((m = C.formatMessage({
                  id: "environmentSetup.entries.placeholder",
                  defaultMessage: "Paste your .env or type a key",
                  description: "Input accepts dotenv contents to import multiple entries, or a name to add one entry",
                })),
                (w[13] = C),
                (w[14] = m))
              : (m = w[14]),
            w[15] !== O ? ((p = (e) => O(e.currentTarget)), (w[15] = O), (w[16] = p)) : (p = w[16]),
            w[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = () => {
                  T.current = !0
                }),
                (w[17] = v))
              : (v = w[17]),
            w[18] !== O
              ? ((h = (e) => {
                  ;((T.current = !1), O(e.currentTarget))
                }),
                (w[18] = O),
                (w[19] = h))
              : (h = w[19]),
            w[20] !== L || w[21] !== E
              ? ((f = (e) => {
                  "Enter" !== e.key ||
                    e.shiftKey ||
                    e.nativeEvent.isComposing ||
                    (e.preventDefault(), e.stopPropagation(), L(E))
                }),
                (w[20] = L),
                (w[21] = E),
                (w[22] = f))
              : (f = w[22]),
            w[23] !== R
              ? ((g = (e) => {
                  let n = e.clipboardData.getData("text/plain")
                  ;(n.includes("=") || n.includes("\n")) && (e.preventDefault(), R(n))
                }),
                (w[23] = R),
                (w[24] = g))
              : (g = w[24]),
            w[25] !== h ||
            w[26] !== f ||
            w[27] !== g ||
            w[28] !== u ||
            w[29] !== G ||
            w[30] !== D ||
            w[31] !== m ||
            w[32] !== p ||
            w[33] !== E
              ? ((b = (0, i.jsx)(l.TM, {
                  ref: H,
                  "aria-label": u,
                  "aria-invalid": G,
                  "aria-describedby": D,
                  autoComplete: "off",
                  autoFocus: !0,
                  focusIndicator: "border",
                  spellCheck: !1,
                  placeholder: m,
                  rows: 1,
                  value: E,
                  variant: "compact",
                  onChange: p,
                  onCompositionStart: v,
                  onCompositionEnd: h,
                  onKeyDown: f,
                  onPaste: g,
                })),
                (w[25] = h),
                (w[26] = f),
                (w[27] = g),
                (w[28] = u),
                (w[29] = G),
                (w[30] = D),
                (w[31] = m),
                (w[32] = p),
                (w[33] = E),
                (w[34] = b))
              : (b = w[34]),
            w[35] === Symbol.for("react.memo_cache_sentinel")
              ? ((x = (0, i.jsx)("div", { className: "w-8 shrink-0", "aria-hidden": !0 })), (w[35] = x))
              : (x = w[35]),
            w[36] !== b
              ? ((y = (0, i.jsxs)("div", { className: "flex gap-2", children: [b, x] })), (w[36] = b), (w[37] = y))
              : (y = w[37]),
            w[38] !== z || w[39] !== N
              ? ((j =
                  z?.ok === !1
                    ? (0, i.jsx)("p", {
                        id: N,
                        className: "text-sm text-danger",
                        role: "alert",
                        children: (0, i.jsx)(o.A, {
                          id: "environmentSetup.entries.invalid",
                          defaultMessage: "Line {line} is invalid or repeats an unavailable key; nothing was imported",
                          description:
                            "An invalid or duplicate name rejected the entire import without changing any rows",
                          values: { line: z.line },
                        }),
                      })
                    : null),
                (w[38] = z),
                (w[39] = N),
                (w[40] = j))
              : (j = w[40]),
            w[41] !== y || w[42] !== j
              ? ((S = (0, i.jsxs)("div", { className: "flex flex-col gap-2", children: [y, j] })),
                (w[41] = y),
                (w[42] = j),
                (w[43] = S))
              : (S = w[43]),
            S
          )
        },
      },
    )
  },
  ECQF(e, n, t) {
    t.d(
      n,
      {},
      {
        d: function (e, n, t = [], i = []) {
          let r = e.trim(),
            s = /^[A-Za-z_][A-Za-z0-9_]*$/.test(r)
          if (s && (i.includes(r) || t.includes(r))) return { ok: !1, reason: "duplicate", line: 1 }
          let a = (s ? `${r}=` : e).split(/\r?\n/),
            o = new Map()
          for (let e = 0; e < a.length; e++) {
            let i = a[e].trim(),
              r = e + 1
            if ("" === i || i.startsWith("#") || i.startsWith(";")) continue
            let s = /^(?:export\s+)?([A-Za-z_][A-Za-z0-9_]*)\s*=(.*)$/.exec(i)
            if (null == s || s[1].length > n) return { ok: !1, reason: "malformed", line: r }
            let l = s[1]
            if (o.has(l) || t.includes(l)) return { ok: !1, reason: "duplicate", line: r }
            let d = s[2].trim(),
              c = d[0]
            if ('"' === c || "'" === c) {
              let n = 1
              for (; ; n++) {
                if (n >= d.length) {
                  if (++e >= a.length) return { ok: !1, reason: "malformed", line: r }
                  d += `
${a[e]}`
                }
                if ("\\" === d[n] && '"' === c) n++
                else if (d[n] === c) break
              }
              let t = d.slice(n + 1).trim()
              if ("" !== t && !t.startsWith("#")) return { ok: !1, reason: "malformed", line: r }
              d = d.slice(1, n)
            } else d = d.replace(/\s+#.*$/, "").trim()
            o.set(l, d)
          }
          return { ok: !0, entries: o }
        },
      },
    )
  },
  KdHD(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("zd8w"),
      a = t("Wf1j"),
      o = t("ygO2"),
      l = t("GO7r"),
      d = t("zLIa"),
      c = t("W857"),
      u = t("MVTZ"),
      m = t("JZp5"),
      p = t("iN9g")
    t.d(
      n,
      {},
      {
        b: function (e) {
          let n,
            t,
            v,
            h,
            f,
            g,
            b,
            x,
            y,
            j,
            S,
            w,
            k,
            M,
            A,
            _ = (0, r.c)(54),
            {
              keyInputRef: C,
              variable: N,
              keyError: E,
              valueError: P,
              configuration: z,
              disabled: I,
              environmentOnly: T,
              onChange: H,
              onDelete: L,
            } = e,
            R = (0, a.A)(),
            O = (0, s.useId)(),
            G = (void 0 !== I && I) || (void 0 !== T && T),
            D = N.source ?? "environment"
          ;(_[0] !== H || _[1] !== N
            ? ((n = (e) =>
                H({
                  ...N,
                  source: e,
                  optional: "user_provided" === e,
                  value: "",
                  serverId: void 0,
                  personalSecret: void 0,
                  error: void 0,
                })),
              (_[0] = H),
              (_[1] = N),
              (_[2] = n))
            : (n = _[2]),
            _[3] !== G || _[4] !== D || _[5] !== n || _[6] !== N.name
              ? ((t = (0, i.jsx)(u.w, { attached: !0, disabled: G, name: N.name, source: D, onChange: n })),
                (_[3] = G),
                (_[4] = D),
                (_[5] = n),
                (_[6] = N.name),
                (_[7] = t))
              : (t = _[7]))
          let V = t,
            $ = N.name
          ;(_[8] !== R
            ? ((v = R.formatMessage({
                id: "environmentSetup.variables.editor.namePlaceholder",
                defaultMessage: "Key",
                description: "Placeholder for a new cloud environment variable name",
              })),
              (_[8] = R),
              (_[9] = v))
            : (v = _[9]),
            _[10] !== R
              ? ((h = R.formatMessage({
                  id: "environmentSetup.variables.editor.nameInput",
                  defaultMessage: "Variable key",
                  description: "Accessible label for an editable environment variable name",
                })),
                (_[10] = R),
                (_[11] = h))
              : (h = _[11]))
          let B = null != E,
            W = null == E ? void 0 : `${O}-key`
          return (
            _[12] !== H || _[13] !== N
              ? ((f = (e) => H({ ...N, name: e.target.value, personalSecret: void 0 })),
                (_[12] = H),
                (_[13] = N),
                (_[14] = f))
              : (f = _[14]),
            _[15] !== C || _[16] !== B || _[17] !== W || _[18] !== f || _[19] !== v || _[20] !== h || _[21] !== N.name
              ? ((g = (0, i.jsx)("div", {
                  className: "min-w-0 flex-1 basis-32",
                  children: (0, i.jsx)(d.pd, {
                    ref: C,
                    variant: "segmented",
                    placeholder: v,
                    "aria-label": h,
                    "aria-invalid": B,
                    "aria-describedby": W,
                    autoComplete: "off",
                    maxLength: 256,
                    value: N.name,
                    onChange: f,
                  }),
                })),
                (_[15] = C),
                (_[16] = B),
                (_[17] = W),
                (_[18] = f),
                (_[19] = v),
                (_[20] = h),
                (_[21] = N.name),
                (_[22] = g))
              : (g = _[22]),
            _[23] !== z || _[24] !== O || _[25] !== R || _[26] !== H || _[27] !== V || _[28] !== P || _[29] !== N
              ? ((b = (0, i.jsx)("div", {
                  className: "min-w-0 flex-2 basis-64",
                  children:
                    "user_provided" === N.source
                      ? (0, i.jsx)(c.u, {
                          id: `${O}-value-input`,
                          scopeControl: V,
                          ariaLabel: R.formatMessage(
                            {
                              id: "restricted.environmentSetup.variables.batch.value",
                              defaultMessage: "Value for {name}",
                              description: "Accessible name of an environment variable value input in the batch editor",
                            },
                            { name: N.name },
                          ),
                          saved: null != N.personalSecret,
                          configuration: z,
                          namespace: "not_sensitive",
                          name: N.name,
                          value: N.value,
                          invalid: null != P,
                          describedBy: null == P ? void 0 : `${O}-value`,
                          onChange: (e) => H({ ...N, value: e }),
                        })
                      : (0, i.jsx)(p.p, {
                          id: `${O}-value-input`,
                          scopeControl: V,
                          ariaLabel: R.formatMessage(
                            {
                              id: "restricted.environmentSetup.variables.batch.value",
                              defaultMessage: "Value for {name}",
                              description: "Accessible name of an environment variable value input in the batch editor",
                            },
                            { name: N.name },
                          ),
                          hasSavedValue: null != N.serverId,
                          value: N.value,
                          ariaInvalid: null != P,
                          ariaDescribedBy: null == P ? void 0 : `${O}-value`,
                          onChange: (e) => H({ ...N, value: e }),
                        }),
                })),
                (_[23] = z),
                (_[24] = O),
                (_[25] = R),
                (_[26] = H),
                (_[27] = V),
                (_[28] = P),
                (_[29] = N),
                (_[30] = b))
              : (b = _[30]),
            _[31] !== g || _[32] !== b
              ? ((x = (0, i.jsxs)("div", {
                  className: "flex min-w-0 flex-1 flex-wrap items-start gap-2",
                  children: [g, b],
                })),
                (_[31] = g),
                (_[32] = b),
                (_[33] = x))
              : (x = _[33]),
            _[34] !== R
              ? ((y = R.formatMessage({
                  id: "restricted.environmentSetup.variables.delete",
                  defaultMessage: "Delete variable",
                  description: "Button to remove the variable from this environment",
                })),
                (_[34] = R),
                (_[35] = y))
              : (y = _[35]),
            _[36] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = (0, i.jsx)(l.cSG, {})), (_[36] = j))
              : (j = _[36]),
            _[37] !== L || _[38] !== y
              ? ((S = (0, i.jsx)("div", {
                  className: "flex h-10 w-8 shrink-0 items-center justify-center",
                  children: (0, i.jsx)(o.$, { "aria-label": y, color: "ghost", size: "icon", onClick: L, children: j }),
                })),
                (_[37] = L),
                (_[38] = y),
                (_[39] = S))
              : (S = _[39]),
            _[40] !== x || _[41] !== S
              ? ((w = (0, i.jsxs)("div", { className: "flex min-w-0 items-start gap-2", children: [x, S] })),
                (_[40] = x),
                (_[41] = S),
                (_[42] = w))
              : (w = _[42]),
            _[43] !== O || _[44] !== E
              ? ((k =
                  null == E
                    ? null
                    : (0, i.jsx)("p", {
                        id: `${O}-key`,
                        className: "text-sm text-danger",
                        role: "alert",
                        children: (0, i.jsx)(m.P, { error: E }),
                      })),
                (_[43] = O),
                (_[44] = E),
                (_[45] = k))
              : (k = _[45]),
            _[46] !== O || _[47] !== P
              ? ((M =
                  null == P
                    ? null
                    : (0, i.jsx)("p", {
                        id: `${O}-value`,
                        className: "text-sm text-danger",
                        role: "alert",
                        children: (0, i.jsx)(m.P, { error: P }),
                      })),
                (_[46] = O),
                (_[47] = P),
                (_[48] = M))
              : (M = _[48]),
            _[49] !== w || _[50] !== k || _[51] !== M || _[52] !== N.name
              ? ((A = (0, i.jsxs)("div", {
                  className: "flex min-w-0 flex-col gap-2",
                  "aria-label": $,
                  role: "group",
                  children: [w, k, M],
                })),
                (_[49] = w),
                (_[50] = k),
                (_[51] = M),
                (_[52] = N.name),
                (_[53] = A))
              : (A = _[53]),
            A
          )
        },
      },
    )
  },
  vw1I(e, n, t) {
    t.d(n, { W: () => G })
    var i = t("ABep"),
      r = t("QosV"),
      s = t("on57"),
      a = t("zTeN"),
      o = t("zd8w"),
      l = t("Wf1j"),
      d = t("oyxz"),
      c = t("SPnB"),
      u = t("GO7r"),
      m = t("BSnr"),
      p = t("AWNZ"),
      v = t("ZEx5"),
      h = t("NxjN"),
      f = t("rQvE"),
      g = t("jf0i"),
      b = t("K489"),
      x = t("NySd"),
      y = t("ygO2"),
      j = t("PD37"),
      S = t("JNtf"),
      w = t("mUDD"),
      k = t("kFKz"),
      M = t("ZRUt"),
      A = t("qoby"),
      _ = t("ECQF"),
      C = t("KdHD"),
      N = t("zft3")
    function E(e) {
      let n,
        t,
        s,
        a,
        l,
        c,
        u,
        m,
        p,
        v,
        h,
        f,
        g,
        b,
        E,
        O,
        G,
        D,
        V,
        $,
        B,
        W,
        F,
        U,
        Q,
        q,
        Z,
        K,
        Y,
        X,
        J = (0, r.c)(85),
        {
          initialVariables: ee,
          unavailableNames: en,
          hasConflict: et,
          configuration: ei,
          environmentOnly: er,
          onClose: es,
          onSave: ea,
        } = e,
        eo = void 0 !== et && et,
        el = void 0 === ei ? null : ei,
        ed = void 0 !== er && er
      J[0] !== ee
        ? ((n = () => (ee.length > 0 ? ee.map(R) : [{ id: 0, variable: { name: "", value: "", optional: !1 } }])),
          (J[0] = ee),
          (J[1] = n))
        : (n = J[1])
      let [ec, eu] = (0, o.useState)(n),
        [em, ep] = (0, o.useState)(null),
        [ev, eh] = (0, o.useState)(!1),
        [ef, eg] = (0, o.useState)(!1),
        eb = (0, o.useRef)(null),
        ex = (0, o.useRef)(0),
        ey = (0, o.useRef)(0),
        [ej, eS] = (0, o.useState)(!1),
        [ew, ek] = (0, o.useState)(!1),
        [eM, eA] = (0, o.useState)(null)
      if (J[2] !== ee || J[3] !== ec || J[4] !== en) {
        let e, n
        ;(J[9] !== ee.length
          ? ((e = (e) => {
              let { id: n, variable: t } = e
              return n < ee.length || t.name.length > 0 || t.value.length > 0 || "user_provided" === t.source
            }),
            (J[9] = ee.length),
            (J[10] = e))
          : (e = J[10]),
          (l = (t = ec.filter(e)).map(L)),
          J[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, i.jsx)(d.A, {
                id: "restricted.environmentSetup.variables.batch.title",
                defaultMessage: "Manage environment variables",
                description: "Title of the batch environment variable editor",
              })),
              (J[11] = n))
            : (n = J[11]),
          (a = n),
          (s = new Map(
            t.map((e, n) => {
              let { id: t, variable: i } = e
              return [
                t,
                {
                  key: (0, N.Ow)(i.name, [...en, ...l.filter((e, t) => t !== n).map(H)]),
                  value: ee.includes(i) ? null : (0, N.Ym)(i.value, null != i.serverId, "user_provided" === i.source),
                },
              ]
            }),
          )),
          (J[2] = ee),
          (J[3] = ec),
          (J[4] = en),
          (J[5] = t),
          (J[6] = s),
          (J[7] = a),
          (J[8] = l))
      } else ((t = J[5]), (s = J[6]), (a = J[7]), (l = J[8]))
      let e_ = s
      J[12] !== eo
        ? ((c = function (e) {
            ;(0, x.aA)(e.dataTransfer) &&
              (e.preventDefault(),
              e.stopPropagation(),
              (e.dataTransfer.dropEffect = eo ? "none" : "copy"),
              "dragenter" === e.type && (ex.current = ex.current + 1),
              eS(!eo))
          }),
          (J[12] = eo),
          (J[13] = c))
        : (c = J[13])
      let eC = c
      J[14] !== eo
        ? ((u = async function (e) {
            if (!(0, x.aA)(e.dataTransfer)) return
            ;(e.preventDefault(), e.stopPropagation(), (ex.current = 0), eS(!1))
            let n = (ey.current = ey.current + 1)
            if ((ek(!1), eo)) return
            let t = (0, k.p)(e.dataTransfer)
            if (1 !== t.length || t[0].isDirectory || !/^(?:\.env(?:\..+)?|.+\.env)$/i.test(t[0].file.name))
              return void eA("unsupported")
            let i = e.currentTarget
            ;(eA(null), ek(!0))
            let r = await t[0].file.text().catch(T)
            if (i.isConnected && ey.current === n) {
              if ((ek(!1), null == r)) return void eA("read")
              eb.current?.importText(r)
            }
          }),
          (J[14] = eo),
          (J[15] = u))
        : (u = J[15])
      let eN = u
      ;(J[16] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (e) => {
            ;(0, x.aA)(e.dataTransfer) &&
              (e.stopPropagation(),
              (ex.current = Math.max(0, ex.current - 1)),
              (0 === ex.current || (e.relatedTarget instanceof Node && !e.currentTarget.contains(e.relatedTarget))) &&
                ((ex.current = 0), eS(!1)))
          }),
          (J[16] = m))
        : (m = J[16]),
        J[17] !== eN ? ((p = (e) => void eN(e)), (J[17] = eN), (J[18] = p)) : (p = J[18]),
        J[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = () => {
              ;((ex.current = 0), eS(!1))
            }),
            (J[19] = v))
          : (v = J[19]),
        J[20] !== eC || J[21] !== p
          ? ((h = { onDragEnter: eC, onDragOver: eC, onDragLeave: m, onDrop: p, onDragEnd: v }),
            (J[20] = eC),
            (J[21] = p),
            (J[22] = h))
          : (h = J[22]),
        J[23] !== es
          ? ((f = (e) => {
              e || es()
            }),
            (J[23] = es),
            (J[24] = f))
          : (f = J[24]),
        J[25] !== e_ || J[26] !== eo || J[27] !== ev || J[28] !== ew || J[29] !== ea || J[30] !== l
          ? ((g = (e) => {
              ;(e.preventDefault(),
                e.stopPropagation(),
                eg(!0),
                !eo && !ew && !ev && [...e_.values()].every(I) && ea(l))
            }),
            (J[25] = e_),
            (J[26] = eo),
            (J[27] = ev),
            (J[28] = ew),
            (J[29] = ea),
            (J[30] = l),
            (J[31] = g))
          : (g = J[31]),
        J[32] !== a
          ? ((b = (0, i.jsx)(S.L3, { className: "sr-only", children: a })), (J[32] = a), (J[33] = b))
          : (b = J[33]),
        J[34] !== a
          ? ((E = (0, i.jsx)(w.OO, { className: "shrink-0", children: (0, i.jsx)(w.c7, { title: a }) })),
            (J[34] = a),
            (J[35] = E))
          : (E = J[35]),
        J[36] !== el || J[37] !== ed || J[38] !== e_ || J[39] !== em || J[40] !== ec || J[41] !== ef
          ? ((O =
              ec.length > 0
                ? (0, i.jsx)("div", {
                    className: "flex flex-col gap-3",
                    children: ec.map((e) => {
                      let { id: n, variable: t } = e
                      return (0, i.jsx)(
                        C.b,
                        {
                          environmentOnly: ed,
                          keyInputRef: em?.id === n ? em.ref : void 0,
                          configuration: el,
                          variable: t,
                          keyError: ef ? (e_.get(n)?.key ?? null) : null,
                          valueError: ef ? (e_.get(n)?.value ?? null) : null,
                          onChange: (e) => eu(ec.map((t) => (t.id === n ? { id: n, variable: e } : t))),
                          onDelete: () => eu(ec.filter((e) => e.id !== n)),
                        },
                        n,
                      )
                    }),
                  })
                : null),
            (J[36] = el),
            (J[37] = ed),
            (J[38] = e_),
            (J[39] = em),
            (J[40] = ec),
            (J[41] = ef),
            (J[42] = O))
          : (O = J[42]),
        J[43] !== t || J[44] !== ec
          ? ((G = (e, n) => {
              let i = Math.max(-1, ...ec.map(z)) + 1
              ;(eu([...t, { id: i, variable: { name: e, value: "", optional: !1 } }]), ep({ id: i, ref: n }))
            }),
            (J[43] = t),
            (J[44] = ec),
            (J[45] = G))
          : (G = J[45]),
        J[46] !== t || J[47] !== ec || J[48] !== en || J[49] !== l
          ? ((D = (e) => {
              eA(null)
              let n = (function (e, n, t) {
                let i = (0, _.d)(
                  n,
                  256,
                  [...t, ...e.filter((n, t) => e.some((e, i) => t !== i && e.name === n.name)).map(({ name: e }) => e)],
                  e.map(({ name: e }) => e),
                )
                if (!i.ok) return i
                let { entries: r } = i,
                  s = e.map((e) => {
                    let n = r.get(e.name)
                    return (r.delete(e.name), void 0 === n ? e : { ...e, value: n })
                  })
                for (let [e, n] of r) s.push({ name: e, value: n, optional: !1 })
                return { ok: !0, variables: s }
              })(l, e, en)
              if (n.ok) {
                ep(null)
                let e = Math.max(-1, ...ec.map(P)) + 1
                eu(n.variables.map((n, i) => ({ id: t[i]?.id ?? e + i, variable: n })))
              }
              return n
            }),
            (J[46] = t),
            (J[47] = ec),
            (J[48] = en),
            (J[49] = l),
            (J[50] = D))
          : (D = J[50]),
        J[51] !== G || J[52] !== D
          ? ((V = (0, i.jsx)(A.Y, { ref: eb, onAddKey: G, onPendingChange: eh, onImport: D })),
            (J[51] = G),
            (J[52] = D),
            (J[53] = V))
          : (V = J[53]),
        J[54] !== eM
          ? (($ =
              null != eM
                ? (0, i.jsx)("p", {
                    className: "text-sm text-danger",
                    role: "alert",
                    children:
                      "unsupported" === eM
                        ? (0, i.jsx)(d.A, {
                            id: "environmentSetup.variables.fileDrop.unsupported",
                            defaultMessage: "Drop one .env file at a time",
                            description:
                              "Error when the environment variable editor receives multiple files, a folder, or a file that is not a dotenv file",
                          })
                        : (0, i.jsx)(d.A, {
                            id: "environmentSetup.variables.fileDrop.readFailed",
                            defaultMessage: "Could not read this file. Try again or paste its contents",
                            description: "Error when a dropped environment variable file cannot be read",
                          }),
                  })
                : null),
            (J[54] = eM),
            (J[55] = $))
          : ($ = J[55]),
        J[56] !== eo ? ((B = eo ? (0, i.jsx)(M.A, {}) : null), (J[56] = eo), (J[57] = B)) : (B = J[57]),
        J[58] !== O || J[59] !== V || J[60] !== $ || J[61] !== B
          ? ((W = (0, i.jsxs)(w.OO, { className: "min-h-0 gap-4 overflow-y-auto", children: [O, V, $, B] })),
            (J[58] = O),
            (J[59] = V),
            (J[60] = $),
            (J[61] = B),
            (J[62] = W))
          : (W = J[62]),
        J[63] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, i.jsx)(d.A, {
              id: "restricted.environmentSetup.variables.batch.cancel",
              defaultMessage: "Cancel",
              description: "Discards unsaved batch environment variable edits",
            })),
            (J[63] = F))
          : (F = J[63]),
        J[64] !== es
          ? ((U = (0, i.jsx)(y.$, { className: "me-auto", color: "secondary", onClick: es, children: F })),
            (J[64] = es),
            (J[65] = U))
          : (U = J[65]))
      let eE = eo || ev || ew
      return (
        J[66] === Symbol.for("react.memo_cache_sentinel")
          ? ((Q = (0, i.jsx)(d.A, {
              id: "restricted.environmentSetup.variables.save",
              defaultMessage: "Save",
              description: "Button to apply edits to an environment variable",
            })),
            (J[66] = Q))
          : (Q = J[66]),
        J[67] !== eE
          ? ((q = (0, i.jsx)(y.$, { color: "primary", disabled: eE, type: "submit", children: Q })),
            (J[67] = eE),
            (J[68] = q))
          : (q = J[68]),
        J[69] !== U || J[70] !== q
          ? ((Z = (0, i.jsx)(w.OO, { className: "shrink-0", children: (0, i.jsxs)(w.Es, { children: [U, q] }) })),
            (J[69] = U),
            (J[70] = q),
            (J[71] = Z))
          : (Z = J[71]),
        J[72] !== g || J[73] !== b || J[74] !== E || J[75] !== W || J[76] !== Z
          ? ((K = (0, i.jsxs)(w.R4, {
              as: "form",
              noValidate: !0,
              className: "max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-hidden",
              onSubmit: g,
              children: [b, E, W, Z],
            })),
            (J[72] = g),
            (J[73] = b),
            (J[74] = E),
            (J[75] = W),
            (J[76] = Z),
            (J[77] = K))
          : (K = J[77]),
        J[78] !== ej
          ? ((Y = ej
              ? (0, i.jsx)(j.D, {
                  tone: "neutral",
                  inert: !0,
                  children: (0, i.jsx)(d.A, {
                    id: "environmentSetup.variables.fileDrop.prompt",
                    defaultMessage: "Drop .env to import variables",
                    description:
                      "Overlay shown while dragging a file over the environment variable editor; .env is a file extension",
                  }),
                })
              : null),
            (J[78] = ej),
            (J[79] = Y))
          : (Y = J[79]),
        J[80] !== h || J[81] !== f || J[82] !== K || J[83] !== Y
          ? ((X = (0, i.jsxs)(S.lG, { open: !0, size: "xxwide", contentProps: h, onOpenChange: f, children: [K, Y] })),
            (J[80] = h),
            (J[81] = f),
            (J[82] = K),
            (J[83] = Y),
            (J[84] = X))
          : (X = J[84]),
        X
      )
    }
    function P(e) {
      let { id: n } = e
      return n
    }
    function z(e) {
      return e.id
    }
    function I(e) {
      let { key: n, value: t } = e
      return null == n && null == t
    }
    function T() {
      return null
    }
    function H(e) {
      let { name: n } = e
      return n
    }
    function L(e) {
      let { variable: n } = e
      return n
    }
    function R(e, n) {
      return { id: n, variable: e }
    }
    var O = t("Q00z")
    function G(e) {
      let n,
        t,
        s,
        a,
        c,
        b,
        x,
        y,
        j,
        S,
        w = (0, r.c)(36),
        {
          config: k,
          configuration: M,
          variables: A,
          conflictRows: _,
          issues: C,
          unavailableNames: N,
          isReadOnly: P,
          readOnlyTooltip: z,
          onChange: I,
          showHeading: T,
          environmentOnly: H,
        } = e,
        L = void 0 === T || T,
        R = void 0 !== H && H,
        O = (0, l.A)(),
        [G, B] = (0, o.useState)(null)
      ;(P && null != G && B(null),
        w[0] !== O
          ? ((n = O.formatMessage({
              id: "environmentSetup.variables.manageLabel",
              defaultMessage: "Manage environment variables",
              description:
                "Accessible label for opening the editor to add, edit, import, or remove environment variables",
            })),
            (w[0] = O),
            (w[1] = n))
          : (n = w[1]))
      let W = P ? z : null
      return (
        w[2] !== k || w[3] !== A
          ? ((t = () => B({ config: k, variables: A })), (w[2] = k), (w[3] = A), (w[4] = t))
          : (t = w[4]),
        w[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(d.A, {
              id: "environmentSetup.variables.manage",
              defaultMessage: "Manage",
              description:
                "Button to open the editor for adding, editing, importing, and removing environment variables",
            })),
            (w[5] = s))
          : (s = w[5]),
        w[6] !== P || w[7] !== n || w[8] !== W || w[9] !== t
          ? ((a = (0, i.jsx)(h.F, {
              "aria-label": n,
              color: "secondary",
              disabled: P,
              tooltipContent: W,
              size: "settingsAction",
              onClick: t,
              children: s,
            })),
            (w[6] = P),
            (w[7] = n),
            (w[8] = W),
            (w[9] = t),
            (w[10] = a))
          : (a = w[10]),
        w[11] !== L
          ? ((c = L
              ? (0, i.jsx)(d.A, {
                  id: "restricted.environmentSetup.variables.title",
                  defaultMessage: "Environment variables",
                  description: "Heading for values passed directly to programs in a cloud environment",
                })
              : null),
            (w[11] = L),
            (w[12] = c))
          : (c = w[12]),
        w[13] !== a || w[14] !== c
          ? ((b = (0, i.jsx)(m.X.Header, { actions: a, size: "base", spacing: "compact", title: c })),
            (w[13] = a),
            (w[14] = c),
            (w[15] = b))
          : (b = w[15]),
        w[16] !== k || w[17] !== _ || w[18] !== P || w[19] !== C || w[20] !== z || w[21] !== A
          ? ((x =
              0 !== A.length || _?.size
                ? (0, g.i)(
                    A,
                    V,
                    (e) =>
                      (0, i.jsx)(
                        $,
                        {
                          variable: e,
                          issue: C.find((n) => {
                            let { field: t } = n
                            return t === `variable-${e.name}`
                          }),
                          isReadOnly: P,
                          readOnlyTooltip: z,
                          onEdit: () => B({ config: k, variables: A }),
                        },
                        e.name,
                      ),
                    _,
                  )
                : (0, i.jsx)(p.ic, {
                    variant: "featured",
                    size: "compact",
                    control: null,
                    icon: (0, i.jsx)(u.iNn, { className: "text-secondary" }),
                    label: (0, i.jsx)(d.A, {
                      id: "restricted.environmentSetup.variables.empty",
                      defaultMessage: "No environment variables added",
                      description: "Empty state for environment-owned runtime variables",
                    }),
                  })),
            (w[16] = k),
            (w[17] = _),
            (w[18] = P),
            (w[19] = C),
            (w[20] = z),
            (w[21] = A),
            (w[22] = x))
          : (x = w[22]),
        w[23] !== x
          ? ((y = (0, i.jsx)(m.X.Content, { children: (0, i.jsx)(v.t, { children: x }) })), (w[23] = x), (w[24] = y))
          : (y = w[24]),
        w[25] !== k || w[26] !== M || w[27] !== G || w[28] !== R || w[29] !== I || w[30] !== N
          ? ((j =
              null == G
                ? null
                : (0, i.jsx)(E, {
                    environmentOnly: R,
                    configuration: M,
                    initialVariables: G.variables,
                    unavailableNames: N,
                    hasConflict: (0, f.p)(k, G.config),
                    onClose: () => B(null),
                    onSave: (e) => {
                      ;(I(
                        e,
                        G.variables
                          .filter((n) => {
                            let { name: t } = n
                            return !e.some((e) => e.name === t)
                          })
                          .map(D),
                      ),
                        B(null))
                    },
                  })),
            (w[25] = k),
            (w[26] = M),
            (w[27] = G),
            (w[28] = R),
            (w[29] = I),
            (w[30] = N),
            (w[31] = j))
          : (j = w[31]),
        w[32] !== y || w[33] !== j || w[34] !== b
          ? ((S = (0, i.jsxs)("section", {
              className: "flex flex-col",
              "data-environment-section": "variables",
              children: [b, y, j],
            })),
            (w[32] = y),
            (w[33] = j),
            (w[34] = b),
            (w[35] = S))
          : (S = w[35]),
        S
      )
    }
    function D(e) {
      let { name: n } = e
      return n
    }
    function V(e) {
      return e.name
    }
    function $(e) {
      let n,
        t,
        o,
        m,
        v,
        f,
        g,
        x = (0, r.c)(28),
        { variable: y, issue: j, isReadOnly: S, readOnlyTooltip: w, onEdit: k } = e,
        M = (0, l.A)(),
        A = (0, a.Ul)(c.chatGptAuthenticatedAccountId$),
        _ = (0, a.Ul)(c.chatGptAuthenticatedUserId$),
        C = y.serverId ?? ""
      x[0] !== A || x[1] !== C || x[2] !== _
        ? ((n = { accountId: A, userId: _, id: C }), (x[0] = A), (x[1] = C), (x[2] = _), (x[3] = n))
        : (n = x[3])
      let N = (0, a._U)(O.du, n),
        E = "user_provided" !== y.source && null == y.serverId && !y.value && !N && null == y.error
      return (
        x[4] !== E || x[5] !== N || x[6] !== y.error || x[7] !== y.source || x[8] !== y.value
          ? ((t = (0, i.jsx)("span", { "aria-hidden": "true", children: "••••••••" })),
            "user_provided" === y.source
              ? (t = (0, i.jsx)(d.A, {
                  id: "restricted.environmentSetup.variables.source.userProvided",
                  defaultMessage: "User-provided",
                  description: "A cloud environment variable supplied by the executing user",
                }))
              : y.value || N || null == y.error
                ? E &&
                  (t = (0, i.jsx)(d.A, {
                    id: "restricted.environmentSetup.variables.missing",
                    defaultMessage: "Missing",
                    description: "Status for a required environment variable whose value has not been supplied",
                  }))
                : (t = (0, i.jsx)(d.A, {
                    id: "restricted.environmentSetup.variables.unavailable",
                    defaultMessage: "Unavailable",
                    description: "An environment variable whose stored value the server could not resolve",
                  })),
            (x[4] = E),
            (x[5] = N),
            (x[6] = y.error),
            (x[7] = y.source),
            (x[8] = y.value),
            (x[9] = t))
          : (t = x[9]),
        x[10] === Symbol.for("react.memo_cache_sentinel") ? ((o = (0, i.jsx)(u.iNn, {})), (x[10] = o)) : (o = x[10]),
        x[11] !== y.name
          ? ((m = (0, i.jsx)("span", { className: "block truncate", children: y.name })), (x[11] = y.name), (x[12] = m))
          : (m = x[12]),
        x[13] !== j
          ? ((v = null == j ? void 0 : (0, i.jsx)(b.o, { issue: j })), (x[13] = j), (x[14] = v))
          : (v = x[14]),
        x[15] !== M ||
        x[16] !== E ||
        x[17] !== S ||
        x[18] !== j ||
        x[19] !== k ||
        x[20] !== w ||
        x[21] !== t ||
        x[22] !== y.name
          ? ((f = (e) =>
              (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("span", {
                    className: (0, s.A)("text-base select-none", E ? "text-danger" : "text-secondary"),
                    children: t,
                  }),
                  (0, i.jsx)(h.F, {
                    "aria-describedby": e["aria-describedby"],
                    "data-environment-invalid": null != j,
                    "aria-label": M.formatMessage(
                      {
                        id: "restricted.environmentSetup.variables.edit",
                        defaultMessage: "Edit {name}",
                        description: "Accessible label for editing the named environment variable",
                      },
                      { name: y.name },
                    ),
                    color: "ghost",
                    disabled: S,
                    tooltipContent: S ? w : null,
                    size: "icon",
                    onClick: k,
                    children: (0, i.jsx)(u.Npl, {}),
                  }),
                ],
              })),
            (x[15] = M),
            (x[16] = E),
            (x[17] = S),
            (x[18] = j),
            (x[19] = k),
            (x[20] = w),
            (x[21] = t),
            (x[22] = y.name),
            (x[23] = f))
          : (f = x[23]),
        x[24] !== m || x[25] !== v || x[26] !== f
          ? ((g = (0, i.jsx)(p.ic, {
              variant: "featured",
              size: "compact",
              icon: o,
              label: m,
              description: v,
              control: f,
            })),
            (x[24] = m),
            (x[25] = v),
            (x[26] = f),
            (x[27] = g))
          : (g = x[27]),
        g
      )
    }
  },
  JZp5(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("oyxz")
    t.d(
      n,
      {},
      {
        P: function (e) {
          let n = (0, r.c)(6),
            { error: t } = e
          switch (t) {
            case "missing-key": {
              let e
              return (
                n[0] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(s.A, {
                      id: "restricted.environmentSetup.variables.missingKey",
                      defaultMessage: "Enter a key",
                      description: "Validation error when an environment variable has no name",
                    })),
                    (n[0] = e))
                  : (e = n[0]),
                e
              )
            }
            case "invalid-key": {
              let e
              return (
                n[1] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(s.A, {
                      id: "restricted.environmentSetup.variables.invalidKey",
                      defaultMessage:
                        "Start the key with a letter or underscore, then use only letters, numbers or underscores (up to 256 characters)",
                      description: "Explains the permitted format of an environment variable name",
                    })),
                    (n[1] = e))
                  : (e = n[1]),
                e
              )
            }
            case "reserved-key": {
              let e
              return (
                n[2] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(s.A, {
                      id: "restricted.environmentSetup.variables.reservedKey",
                      defaultMessage: "This key is reserved by the platform. Choose a different key",
                      description:
                        "Validation error when a runtime variable name overrides a reserved platform environment variable",
                    })),
                    (n[2] = e))
                  : (e = n[2]),
                e
              )
            }
            case "duplicate": {
              let e
              return (
                n[3] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(s.A, {
                      id: "restricted.environmentSetup.variables.duplicate",
                      defaultMessage: "This key is already used by another variable or proxy secret",
                      description:
                        "Error when a variable key conflicts with another runtime variable or network proxy placeholder",
                    })),
                    (n[3] = e))
                  : (e = n[3]),
                e
              )
            }
            case "missing-value": {
              let e
              return (
                n[4] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(s.A, {
                      id: "restricted.environmentSetup.variables.missingValue",
                      defaultMessage: "Enter a value; leave it blank only to keep an existing saved value",
                      description: "Validation error for a new environment variable without a value",
                    })),
                    (n[4] = e))
                  : (e = n[4]),
                e
              )
            }
            case "invalid-value": {
              let e
              return (
                n[5] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(s.A, {
                      id: "restricted.environmentSetup.variables.invalidValue",
                      defaultMessage: "Remove null characters from the value",
                      description: "Validation error for an environment variable value containing a null character",
                    })),
                    (n[5] = e))
                  : (e = n[5]),
                e
              )
            }
          }
        },
        Z: function (e) {
          let n,
            t = (0, r.c)(2),
            { name: a } = e
          return (
            t[0] !== a
              ? ((n = (0, i.jsx)(s.A, {
                  id: "restricted.environmentSetup.variables.invalidSavedKey",
                  defaultMessage:
                    "Couldn’t save environment variable “{name}”. Choose a valid, non-reserved key that isn’t used by another variable or proxy secret",
                  description:
                    "Error identifying the runtime variable whose name is invalid, reserved, or shared with another runtime variable or network secret",
                  values: { name: a },
                })),
                (t[0] = a),
                (t[1] = n))
              : (n = t[1]),
            n
          )
        },
      },
    )
  },
  iN9g(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("zd8w"),
      a = t("Wf1j"),
      o = t("zLIa")
    t.d(
      n,
      {},
      {
        p: function (e) {
          let n,
            t,
            l,
            d,
            c,
            u,
            m = (0, r.c)(29),
            {
              id: p,
              ariaLabel: v,
              ariaInvalid: h,
              ariaDescribedBy: f,
              onFocus: g,
              onBlur: b,
              hasSavedValue: x,
              optional: y,
              value: j,
              onChange: S,
              scopeControl: w,
            } = e,
            k = (0, a.A)(),
            [M, A] = (0, s.useState)(!1)
          m[0] !== j ? ((n = j.includes("\n")), (m[0] = j), (m[1] = n)) : (n = m[1])
          let [_, C] = (0, s.useState)(n)
          ;(!_ && j.includes("\n") && C(!0),
            m[2] !== k
              ? ((t = k.formatMessage({
                  id: "environmentSetup.variables.valuePlaceholder",
                  defaultMessage: "Value",
                  description: "Placeholder for a new cloud environment variable value",
                })),
                (m[2] = k),
                (m[3] = t))
              : (t = m[3]))
          let N = t
          if (x) {
            let e
            ;(m[4] !== M || m[5] !== k
              ? ((e = M
                  ? k.formatMessage({
                      id: "restricted.environmentSetup.variables.keepValue",
                      defaultMessage: "Leave blank to keep saved value",
                      description:
                        "Placeholder explaining how to preserve a saved environment variable value while editing its key",
                    })
                  : "••••••••"),
                (m[4] = M),
                (m[5] = k),
                (m[6] = e))
              : (e = m[6]),
              (N = e))
          } else if (void 0 !== y && y) {
            let e
            ;(m[7] !== k
              ? ((e = k.formatMessage({
                  id: "environmentSetup.secret.optionalValue",
                  defaultMessage: "Your value (optional)",
                  description: "Placeholder for an optional personal secret value belonging to the signed-in user",
                })),
                (m[7] = k),
                (m[8] = e))
              : (e = m[8]),
              (N = e))
          }
          ;(m[9] !== g
            ? ((l = () => {
                ;(A(!0), g?.())
              }),
              (m[9] = g),
              (m[10] = l))
            : (l = m[10]),
            m[11] !== b
              ? ((d = () => {
                  ;(A(!1), b?.())
                }),
                (m[11] = b),
                (m[12] = d))
              : (d = m[12]),
            m[13] !== f ||
            m[14] !== h ||
            m[15] !== v ||
            m[16] !== p ||
            m[17] !== N ||
            m[18] !== l ||
            m[19] !== d ||
            m[20] !== j
              ? ((c = {
                  id: p,
                  "aria-label": v,
                  "aria-invalid": h,
                  "aria-describedby": f,
                  autoComplete: "off",
                  spellCheck: !1,
                  value: j,
                  placeholder: N,
                  onFocus: l,
                  onBlur: d,
                }),
                (m[13] = f),
                (m[14] = h),
                (m[15] = v),
                (m[16] = p),
                (m[17] = N),
                (m[18] = l),
                (m[19] = d),
                (m[20] = j),
                (m[21] = c))
              : (c = m[21]))
          let E = c
          return (
            m[22] !== M || m[23] !== _ || m[24] !== S || m[25] !== E || m[26] !== w || m[27] !== j
              ? ((u = _
                  ? (0, i.jsx)(o.TM, {
                      ...E,
                      autoFocus: M,
                      rows: 3,
                      variant: "segmented",
                      trailingControl: w,
                      onChange: (e) => S(e.target.value),
                    })
                  : (0, i.jsx)(o.pd, {
                      ...E,
                      variant: "segmented",
                      trailingControl: w,
                      onChange: (e) => S(e.target.value),
                      onPaste: (e) => {
                        let n = e.clipboardData.getData("text/plain")
                        if (n.includes("\n")) {
                          e.preventDefault()
                          let t = e.currentTarget
                          S(j.slice(0, t.selectionStart ?? 0) + n + j.slice(t.selectionEnd ?? j.length))
                        }
                      },
                    })),
                (m[22] = M),
                (m[23] = _),
                (m[24] = S),
                (m[25] = E),
                (m[26] = w),
                (m[27] = j),
                (m[28] = u))
              : (u = m[28]),
            u
          )
        },
      },
    )
  },
  yvV6(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("zd8w"),
      a = t("oyxz"),
      o = t("TjgH"),
      l = t("GO7r"),
      d = t("zLIa")
    t.d(
      n,
      {},
      {
        G: function (e) {
          let n,
            t,
            o,
            l,
            c,
            u,
            m,
            p,
            v,
            h,
            f,
            g,
            b,
            x = (0, r.c)(52),
            {
              entries: y,
              value: j,
              onChange: S,
              onInputChange: w,
              parseEntry: k,
              errorFor: M,
              pendingHelp: A,
              label: _,
              placeholder: C,
              disabled: N,
              purpose: E,
              children: P,
            } = e,
            z = void 0 !== N && N,
            I = void 0 === E ? "network" : E,
            T = (0, s.useId)(),
            [H, L] = (0, s.useState)(!1),
            R = (0, s.useRef)(null),
            O = (0, s.useRef)(y.length)
          x[0] !== M || x[1] !== H || x[2] !== I || x[3] !== j
            ? ((n = ("secret" === I || H) && j.trim() ? M(j.split(",")[0]?.trim() ?? "") : null),
              (x[0] = M),
              (x[1] = H),
              (x[2] = I),
              (x[3] = j),
              (x[4] = n))
            : (n = x[4])
          let G = n
          ;(x[5] !== y.length
            ? ((t = () => {
                ;(y.length > O.current && R.current?.scrollIntoView({ block: "nearest" }), (O.current = y.length))
              }),
              (o = [y.length]),
              (x[5] = y.length),
              (x[6] = t),
              (x[7] = o))
            : ((t = x[6]), (o = x[7])),
            (0, s.useLayoutEffect)(t, o),
            x[8] !== y || x[9] !== S || x[10] !== w || x[11] !== k
              ? ((l = function (e, n) {
                  let t = e.split(/[,\r\n]/),
                    i = n ? t.pop() : void 0,
                    r = [...y],
                    s = new Set(y.map((e) => k(String(e)))),
                    a = []
                  for (let e of t) {
                    let n = e.trim()
                    if (!n) continue
                    let t = k(n)
                    null == t || s.has(t) ? a.push(n) : (s.add(t), r.push(t))
                  }
                  ;(r.length !== y.length && S(r), w([...a, i?.trim()].filter(Boolean).join(", ")), L(a.length > 0))
                }),
                (x[8] = y),
                (x[9] = S),
                (x[10] = w),
                (x[11] = k),
                (x[12] = l))
              : (l = x[12]))
          let D = l
          x[13] !== P ? ((c = (0, i.jsx)(i.Fragment, { children: P })), (x[13] = P), (x[14] = c)) : (c = x[14])
          let V = null != G
          ;(x[15] !== j ? ((u = () => L(j.trim().length > 0)), (x[15] = j), (x[16] = u)) : (u = x[16]),
            x[17] !== D || x[18] !== w
              ? ((m = (e) => {
                  let n = e.currentTarget.value
                  n.includes(",") ? D(n, !0) : (w(n), L(!1))
                }),
                (x[17] = D),
                (x[18] = w),
                (x[19] = m))
              : (m = x[19]),
            x[20] !== D || x[21] !== y || x[22] !== S || x[23] !== I || x[24] !== j
              ? ((p = (e) => {
                  !e.nativeEvent.isComposing &&
                    ("Enter" === e.key || "," === e.key
                      ? (e.preventDefault(), j.trim() && D(j, !1))
                      : "network" === I && "Backspace" === e.key && !j && y.length > 0 && S(y.slice(0, -1)))
                }),
                (x[20] = D),
                (x[21] = y),
                (x[22] = S),
                (x[23] = I),
                (x[24] = j),
                (x[25] = p))
              : (p = x[25]),
            x[26] !== D
              ? ((v = (e) => {
                  let n = e.clipboardData.getData("text")
                  if (!/[,\r\n]/.test(n)) return
                  e.preventDefault()
                  let t = e.currentTarget,
                    i = t.selectionStart ?? t.value.length,
                    r = t.selectionEnd ?? i
                  D(t.value.slice(0, i) + n + t.value.slice(r), !1)
                }),
                (x[26] = D),
                (x[27] = v))
              : (v = x[27]),
            x[28] !== z ||
            x[29] !== T ||
            x[30] !== _ ||
            x[31] !== C ||
            x[32] !== m ||
            x[33] !== p ||
            x[34] !== v ||
            x[35] !== c ||
            x[36] !== V ||
            x[37] !== u ||
            x[38] !== j
              ? ((h = (0, i.jsx)(d.pd, {
                  ref: R,
                  leadingControl: c,
                  variant: "tags",
                  "aria-label": _,
                  "aria-describedby": T,
                  "aria-invalid": V,
                  autoFocus: !0,
                  disabled: z,
                  placeholder: C,
                  value: j,
                  onBlur: u,
                  onChange: m,
                  onKeyDown: p,
                  onPaste: v,
                })),
                (x[28] = z),
                (x[29] = T),
                (x[30] = _),
                (x[31] = C),
                (x[32] = m),
                (x[33] = p),
                (x[34] = v),
                (x[35] = c),
                (x[36] = V),
                (x[37] = u),
                (x[38] = j),
                (x[39] = h))
              : (h = x[39]))
          let $ = null == G ? "text-xs text-secondary select-none" : "text-xs text-danger select-none",
            B = null == G ? void 0 : "alert"
          return (
            x[40] !== G || x[41] !== A || x[42] !== j
              ? ((f =
                  G ??
                  (j.trim()
                    ? A
                    : (0, i.jsx)(a.A, {
                        id: "restricted.environmentSetup.network.domain.help",
                        defaultMessage: "Press Enter to add, or paste a comma- or line-separated list",
                        description: "Instructions for adding one or more entries to a cloud environment network list",
                      }))),
                (x[40] = G),
                (x[41] = A),
                (x[42] = j),
                (x[43] = f))
              : (f = x[43]),
            x[44] !== T || x[45] !== $ || x[46] !== B || x[47] !== f
              ? ((g = (0, i.jsx)("p", { id: T, className: $, role: B, children: f })),
                (x[44] = T),
                (x[45] = $),
                (x[46] = B),
                (x[47] = f),
                (x[48] = g))
              : (g = x[48]),
            x[49] !== h || x[50] !== g
              ? ((b = (0, i.jsxs)("div", {
                  className: "flex w-full min-w-0 flex-col gap-1.5 [&>div]:gap-x-2",
                  children: [h, g],
                })),
                (x[49] = h),
                (x[50] = g),
                (x[51] = b))
              : (b = x[51]),
            b
          )
        },
        b: function (e) {
          let n,
            t,
            s,
            a = (0, r.c)(10),
            { value: d, removeLabel: c, disabled: u, onRemove: m, children: p } = e,
            v = String(d)
          return (
            a[0] !== v
              ? ((n = (0, i.jsx)("span", { className: "min-w-0 truncate", title: v, children: v })),
                (a[0] = v),
                (a[1] = n))
              : (n = a[1]),
            a[2] !== u || a[3] !== m || a[4] !== c
              ? ((t =
                  null != m &&
                  (0, i.jsx)("button", {
                    type: "button",
                    "aria-label": c,
                    className:
                      "cursor-interaction rounded-sm text-secondary hover:text-default focus-visible:outline-2 focus-visible:outline-ring",
                    disabled: u,
                    onClick: m,
                    children: (0, i.jsx)(l.Gmf, {}),
                  })),
                (a[2] = u),
                (a[3] = m),
                (a[4] = c),
                (a[5] = t))
              : (t = a[5]),
            a[6] !== p || a[7] !== n || a[8] !== t
              ? ((s = (0, i.jsxs)(o.E, { className: "max-w-full gap-1", variant: "outline", children: [n, p, t] })),
                (a[6] = p),
                (a[7] = n),
                (a[8] = t),
                (a[9] = s))
              : (s = a[9]),
            s
          )
        },
      },
    )
  },
  W857(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("zTeN"),
      a = t("oyxz"),
      o = t("Qgfj"),
      l = t("ygO2"),
      d = t("iN9g"),
      c = t("st5O"),
      u = t("Qm3F")
    let m = (0, o.YK)({
      unavailable: {
        id: "environmentSetup.review.secret.unavailable",
        defaultMessage: "Saved value status unavailable",
        description: "Personal vault metadata could not be loaded; this does not mean a value is missing",
      },
      ambiguous: {
        id: "environmentSetup.review.secret.ambiguous",
        defaultMessage: "Multiple personal values match",
        description: "Warning that runtime cannot choose between matching personal credentials",
      },
      retry: {
        id: "environmentSetup.review.secret.retry",
        defaultMessage: "Retry checking personal values",
        description: "Retry loading personal vault metadata after a failed read",
      },
    })
    t.d(
      n,
      {},
      {
        u: function (e) {
          let n,
            t,
            o,
            p,
            v,
            h,
            f,
            g = (0, r.c)(26),
            {
              id: b,
              configuration: x,
              namespace: y,
              name: j,
              value: S,
              saved: w,
              ariaLabel: k,
              invalid: M,
              describedBy: A,
              onChange: _,
              scopeControl: C,
            } = e
          g[0] !== x || g[1] !== y
            ? ((n = { configuration: x, namespace: y }), (g[0] = x), (g[1] = y), (g[2] = n))
            : (n = g[2])
          let { data: N, isError: E, refetch: P } = (0, s._U)(c.Fz, n)
          g[3] !== x || g[4] !== N || g[5] !== j
            ? ((t = null == N || null == x ? void 0 : (0, c.op)(N, j, x.configId)),
              (g[3] = x),
              (g[4] = N),
              (g[5] = j),
              (g[6] = t))
            : (t = g[6])
          let z = t,
            I = (void 0 !== w && w) || (null != z && "ambiguous" !== z)
          return (
            0 === S.length && !I && ("ambiguous" === z ? (o = m.ambiguous) : E && (o = m.unavailable)),
            g[7] !== k ||
            g[8] !== A ||
            g[9] !== I ||
            g[10] !== b ||
            g[11] !== M ||
            g[12] !== y ||
            g[13] !== _ ||
            g[14] !== C ||
            g[15] !== S
              ? ((p =
                  "sensitive" === y
                    ? (0, i.jsx)(u.n, {
                        id: b,
                        value: S,
                        personal: !0,
                        saved: I,
                        ariaLabel: k,
                        invalid: M,
                        describedBy: A,
                        onChange: _,
                        scopeControl: C,
                      })
                    : (0, i.jsx)(d.p, {
                        id: b,
                        value: S,
                        optional: !0,
                        hasSavedValue: I,
                        ariaLabel: k,
                        ariaInvalid: M,
                        ariaDescribedBy: A,
                        onChange: _,
                        scopeControl: C,
                      })),
                (g[7] = k),
                (g[8] = A),
                (g[9] = I),
                (g[10] = b),
                (g[11] = M),
                (g[12] = y),
                (g[13] = _),
                (g[14] = C),
                (g[15] = S),
                (g[16] = p))
              : (p = g[16]),
            g[17] !== o
              ? ((v =
                  null != o
                    ? (0, i.jsx)("div", {
                        className: "text-xs text-secondary select-none",
                        role: "status",
                        children: (0, i.jsx)(a.A, { ...o }),
                      })
                    : null),
                (g[17] = o),
                (g[18] = v))
              : (v = g[18]),
            g[19] !== E || g[20] !== P
              ? ((h = E
                  ? (0, i.jsx)(l.$, {
                      color: "ghost",
                      size: "compact",
                      onClick: () => void P(),
                      children: (0, i.jsx)(a.A, { ...m.retry }),
                    })
                  : null),
                (g[19] = E),
                (g[20] = P),
                (g[21] = h))
              : (h = g[21]),
            g[22] !== p || g[23] !== v || g[24] !== h
              ? ((f = (0, i.jsxs)("div", { className: "flex min-w-0 flex-col gap-1", children: [p, v, h] })),
                (g[22] = p),
                (g[23] = v),
                (g[24] = h),
                (g[25] = f))
              : (f = g[25]),
            f
          )
        },
      },
    )
  },
  jf0i(e, n, t) {
    t.d(n, { R: () => m, i: () => p })
    var i = t("ABep"),
      r = t("QosV"),
      s = t("oyxz"),
      a = t("GO7r"),
      o = t("AWNZ"),
      l = t("MVTZ")
    let d = /^((?:.*? · )?(••••••••|User-provided value|No value)), (required|optional)(?= · |$)/
    function c(e) {
      let n,
        t,
        c,
        m,
        p,
        v,
        h,
        f,
        g,
        b,
        x,
        y,
        j,
        S,
        w,
        k,
        M,
        A,
        _,
        C,
        N,
        E,
        P,
        z,
        I,
        T = (0, r.c)(62),
        { bindingName: H, bindingRow: L, conflict: R } = e
      if (T[0] !== H || T[1] !== R) {
        let e, r
        ;({ environmentValue: p, configValue: m } = R)
        let s = H && p?.match(d)
        T[12] !== H || T[13] !== m ? ((e = H && m?.match(d)), (T[12] = H), (T[13] = m), (T[14] = e)) : (e = T[14])
        let a = e
        if (
          ((b = s?.[2]),
          (c = a?.[2]),
          (h = null != b && null != c && b !== c),
          null != H && (b !== c || s?.[3] === a?.[3]))
        ) {
          let e
          ;((p = p?.replace(d, "$1")),
            T[15] !== m ? ((e = m?.replace(d, "$1")), (T[15] = m), (T[16] = e)) : (e = T[16]),
            (m = e))
        }
        let [o, l, x] = p?.split(" · Allowed domains: ") ?? []
        ;((f = l), T[17] !== m ? ((r = m?.split(" · Allowed domains: ") ?? []), (T[17] = m), (T[18] = r)) : (r = T[18]))
        let [y, j, S] = r
        if (
          ((t = j),
          (n =
            R.setting.startsWith("Secret · ") &&
            null != f &&
            null != t &&
            null == x &&
            null == S &&
            o === y &&
            f !== t),
          (g = "••••••••" === b && p === b),
          (v = null),
          n)
        )
          v = u(o, b)
        else if (g) {
          let e
          ;(T[19] !== b
            ? ((e = (0, i.jsx)("span", { "aria-hidden": "true", children: b })), (T[19] = b), (T[20] = e))
            : (e = T[20]),
            (v = e))
        }
        ;((T[0] = H),
          (T[1] = R),
          (T[2] = n),
          (T[3] = t),
          (T[4] = c),
          (T[5] = m),
          (T[6] = p),
          (T[7] = v),
          (T[8] = h),
          (T[9] = f),
          (T[10] = g),
          (T[11] = b))
      } else
        ((n = T[2]),
          (t = T[3]),
          (c = T[4]),
          (m = T[5]),
          (p = T[6]),
          (v = T[7]),
          (h = T[8]),
          (f = T[9]),
          (g = T[10]),
          (b = T[11]))
      let O = R.setting
      if (n) {
        let e
        ;(T[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(s.A, {
              id: "threadEnvironment.conflictDomains",
              defaultMessage: "Allowed domains",
              description: "Conflicting allowed domains for an HTTP secret",
            })),
            (T[21] = e))
          : (e = T[21]),
          (O = e))
      } else if (null != H) {
        let e
        ;(T[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(s.A, {
              id: "threadEnvironment.conflictValue",
              defaultMessage: "Value",
              description: "Conflicting value of an environment variable or HTTP secret",
            })),
            (T[22] = e))
          : (e = T[22]),
          (O = e))
      }
      T[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = (0, i.jsx)(s.A, {
            id: "threadEnvironment.conflictRemoved",
            defaultMessage: "Removed",
            description: "The setting is absent on this side of a promotion conflict",
          })),
          (T[23] = x))
        : (x = T[23])
      let G = x
      T[24] !== p || T[25] !== h || T[26] !== g || T[27] !== b
        ? ((y = g ? (0, i.jsx)(l.W, { source: "environment", showLabel: !0 }) : u(p ?? G, b, h)),
          (T[24] = p),
          (T[25] = h),
          (T[26] = g),
          (T[27] = b),
          (T[28] = y))
        : (y = T[28])
      let D = y,
        V = H ?? R.setting
      ;(T[29] !== H || T[30] !== L || T[31] !== v || T[32] !== g
        ? ((j =
            g && null != L
              ? L
              : null != H &&
                (0, i.jsx)(o.ic, {
                  variant: "featured",
                  size: "compact",
                  controlSizing: "content",
                  icon: (0, i.jsx)(a.iNn, { className: "text-secondary" }),
                  label: (0, i.jsx)("span", { className: "wrap-anywhere", children: H }),
                  control:
                    null != v
                      ? (0, i.jsx)("span", {
                          className: "text-base wrap-anywhere text-secondary select-none",
                          children: v,
                        })
                      : null,
                })),
          (T[29] = H),
          (T[30] = L),
          (T[31] = v),
          (T[32] = g),
          (T[33] = j))
        : (j = T[33]),
        T[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, i.jsx)(a.Ko7, { "aria-hidden": !0, className: "shrink-0 text-danger" })), (T[34] = S))
          : (S = T[34]),
        T[35] !== O
          ? ((w = (0, i.jsxs)("span", {
              className: "flex min-w-0 items-center gap-2 font-medium wrap-anywhere",
              children: [S, O],
            })),
            (T[35] = O),
            (T[36] = w))
          : (w = T[36]),
        T[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, i.jsx)("span", {
              className: "text-sm font-medium text-danger",
              children: (0, i.jsx)(s.A, {
                id: "threadEnvironment.conflictLabel",
                defaultMessage: "Conflict",
                description: "Status of a setting changed in both the thread and the environment configuration",
              }),
            })),
            (T[37] = k))
          : (k = T[37]),
        T[38] !== w
          ? ((M = (0, i.jsxs)("div", { className: "flex items-baseline justify-between gap-2", children: [w, k] })),
            (T[38] = w),
            (T[39] = M))
          : (M = T[39]),
        T[40] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, i.jsx)("dt", {
              className: "text-secondary",
              children: (0, i.jsx)(s.A, {
                id: "threadEnvironment.conflictThread",
                defaultMessage: "This thread",
                description: "Thread side of a promotion conflict",
              }),
            })),
            (T[40] = A))
          : (A = T[40]))
      let $ = n ? f : D
      return (
        T[41] !== $
          ? ((_ = (0, i.jsx)("dd", { className: "wrap-anywhere whitespace-pre-wrap", children: $ })),
            (T[41] = $),
            (T[42] = _))
          : (_ = T[42]),
        T[43] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, i.jsx)("dt", {
              className: "text-secondary",
              children: (0, i.jsx)(s.A, {
                id: "threadEnvironment.conflictEnvironmentConfig",
                defaultMessage: "Environment config",
                description: "Config side of a promotion conflict",
              }),
            })),
            (T[43] = C))
          : (C = T[43]),
        T[44] !== n || T[45] !== t || T[46] !== c || T[47] !== m || T[48] !== h
          ? ((N = n ? t : u(m ?? G, c, h)),
            (T[44] = n),
            (T[45] = t),
            (T[46] = c),
            (T[47] = m),
            (T[48] = h),
            (T[49] = N))
          : (N = T[49]),
        T[50] !== N
          ? ((E = (0, i.jsx)("dd", { className: "wrap-anywhere whitespace-pre-wrap", children: N })),
            (T[50] = N),
            (T[51] = E))
          : (E = T[51]),
        T[52] !== _ || T[53] !== E
          ? ((P = (0, i.jsxs)("dl", {
              className: "mt-2 grid grid-cols-[auto_minmax(0,1fr)] gap-x-3 gap-y-1 text-sm",
              children: [A, _, C, E],
            })),
            (T[52] = _),
            (T[53] = E),
            (T[54] = P))
          : (P = T[54]),
        T[55] !== P || T[56] !== M
          ? ((z = (0, i.jsxs)("div", {
              className: "border-s-2 border-danger-outline bg-text-danger/8 px-4 py-3",
              children: [M, P],
            })),
            (T[55] = P),
            (T[56] = M),
            (T[57] = z))
          : (z = T[57]),
        T[58] !== z || T[59] !== V || T[60] !== j
          ? ((I = (0, i.jsxs)("div", { role: "group", "aria-label": V, children: [j, z] })),
            (T[58] = z),
            (T[59] = V),
            (T[60] = j),
            (T[61] = I))
          : (I = T[61]),
        I
      )
    }
    function u(e, n, t = !1) {
      return "••••••••" !== n && "User-provided value" !== n
        ? e
        : "User-provided value" === e
          ? (0, i.jsx)(l.W, { source: "user_provided", showLabel: !0 })
          : (0, i.jsxs)("span", {
              className: "inline-flex items-center gap-1.5",
              children: [
                (0, i.jsx)(l.W, { source: "••••••••" === n ? "environment" : "user_provided", showLabel: t }),
                e,
              ],
            })
    }
    function m(e) {
      let n = new Map(),
        t = new Map(),
        r = [],
        s = new Map([
          ["Environment variable", n],
          ["Secret", t],
        ])
      for (let n of e?.conflicts ?? []) {
        let [e, ...t] = n.setting.split(" · "),
          a = t.join(" · "),
          o = s.get(e)
        o && a ? o.set(a, n) : r.push((0, i.jsx)(c, { conflict: n }, n.setting))
      }
      return { variables: n, secrets: t, other: r }
    }
    function p(e, n, t, r) {
      if (!r?.size) return e.map(t)
      let s = new Map(r),
        a = e.map((e) => {
          let a = n(e)
          s.delete(a)
          let o = r.get(a),
            l = t(e)
          return o ? (0, i.jsx)(c, { bindingName: a, conflict: o, bindingRow: l }, a) : l
        })
      for (let [e, n] of s) a.push((0, i.jsx)(c, { bindingName: e, conflict: n }, e))
      return a
    }
  },
  CFI7(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("slpy"),
      a = t("h818"),
      o = t("on57"),
      l = t("zd8w"),
      d = t("Wf1j"),
      c = t("oyxz"),
      u = t("ygO2"),
      m = t("ZtSy"),
      p = t("Ot7V"),
      v = t("HOLv"),
      h = t("GO7r"),
      f = t("F0xz"),
      g = t("BSnr"),
      b = t("AWNZ"),
      x = t("ZEx5"),
      y = t("teEn"),
      j = t("JiLO")
    function S(e) {
      let { field: n } = e
      return n?.startsWith("network-")
    }
    function w(e) {
      ;(0, p.PQ)({
        event: e,
        href: "https://learn.chatgpt.com/docs/environments/cloud-environments#connect-to-services",
        initiator: "external_link",
      })
    }
    t.d(
      n,
      {},
      {
        _: function (e) {
          let n,
            t,
            p,
            k,
            M,
            A,
            _,
            C,
            N,
            E,
            P,
            z,
            I,
            T,
            H,
            L,
            R,
            O,
            G,
            D,
            V,
            $,
            B,
            W,
            F,
            U,
            Q,
            q,
            Z,
            K,
            Y,
            X = (0, r.c)(83),
            {
              draft: J,
              onDraftChange: ee,
              isReadOnly: en,
              readOnlyTooltip: et,
              issues: ei,
              packageManagersDescription: er,
              notice: es,
              children: ea,
            } = e
          X[0] !== ei ? ((n = void 0 === ei ? [] : ei), (X[0] = ei), (X[1] = n)) : (n = X[1])
          let eo = n,
            el = (0, d.A)()
          X[2] !== el
            ? ((t = el.formatMessage({
                id: "restricted.environmentSetup.configuration.network.toggle",
                defaultMessage: "Enable all public internet access",
                description:
                  "Accessible label for allowing a cloud environment to access all public internet destinations independently of its VPN",
              })),
              (X[2] = el),
              (X[3] = t))
            : (t = X[3])
          let ed = t,
            ec = !0 === J.networkEnabled && "all" === J.networkPreset,
            [eu, em] = (0, l.useState)(null)
          X[4] !== J.networkDomains || X[5] !== ec || X[6] !== eu?.domains
            ? ((p = (ec ? eu?.domains : null) ?? J.networkDomains ?? []),
              (X[4] = J.networkDomains),
              (X[5] = ec),
              (X[6] = eu?.domains),
              (X[7] = p))
            : (p = X[7])
          let ep = p,
            ev = ec ? (eu?.packageManagers ?? !1) : !0 === J.networkEnabled && "none" !== J.networkPreset
          X[8] !== el
            ? ((k = el.formatMessage({
                id: "environmentSetup.configuration.network.packageManagers",
                defaultMessage: "Enable package manager domains",
                description: "Label for allowing the predefined package manager domains in a cloud environment",
              })),
              (X[8] = el),
              (X[9] = k))
            : (k = X[9])
          let eh = k
          ;(X[10] !== el
            ? ((M = el.formatMessage({
                id: "environmentSetup.configuration.network.docsLabel",
                defaultMessage: "Cloud environment networking docs",
                description: "Accessible label for the documentation link beside the public internet access heading",
              })),
              (X[10] = el),
              (X[11] = M))
            : (M = X[11]),
            X[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((A = (0, i.jsx)(h.Xkx, {})),
                (_ = (0, i.jsx)(c.A, {
                  id: "environmentSetup.configuration.network.docs",
                  defaultMessage: "Docs",
                  description:
                    "Link beside the public internet access heading to cloud environment networking documentation",
                })),
                (X[12] = A),
                (X[13] = _))
              : ((A = X[12]), (_ = X[13])),
            X[14] !== M
              ? ((C = (0, i.jsxs)(m.G, {
                  className: "inline-flex items-center gap-1 text-sm",
                  "aria-label": M,
                  appearance: "secondary",
                  href: "https://learn.chatgpt.com/docs/environments/cloud-environments#connect-to-services",
                  initiator: "external_link",
                  underline: "hover",
                  children: [A, _],
                })),
                (X[14] = M),
                (X[15] = C))
              : (C = X[15]),
            X[16] === Symbol.for("react.memo_cache_sentinel")
              ? ((N = (0, i.jsx)(c.A, {
                  id: "restricted.environmentSetup.configuration.network.title",
                  defaultMessage: "Public internet access",
                  description:
                    "Heading for public internet access controls, separate from VPN access, in cloud environment settings",
                })),
                (X[16] = N))
              : (N = X[16]),
            X[17] !== C
              ? ((E = (0, i.jsx)(g.X.Header, {
                  className: "select-none",
                  size: "base",
                  spacing: "compact",
                  actions: C,
                  title: N,
                })),
                (X[17] = C),
                (X[18] = E))
              : (E = X[18]))
          let ef = en ? et : null
          ;(X[19] !== ep || X[20] !== ee || X[21] !== ev
            ? ((P = (e) => {
                e && em({ packageManagers: ev, domains: ep })
                let n = ev ? "package_managers" : "none"
                ee({ networkEnabled: e || ev || ep.length > 0, networkPreset: e ? "all" : n, networkDomains: ep })
              }),
              (X[19] = ep),
              (X[20] = ee),
              (X[21] = ev),
              (X[22] = P))
            : (P = X[22]),
            X[23] !== en || X[24] !== ed || X[25] !== ec || X[26] !== P
              ? ((z = (0, i.jsx)(f.l, { ariaLabel: ed, checked: ec, disabled: en, onChange: P })),
                (X[23] = en),
                (X[24] = ed),
                (X[25] = ec),
                (X[26] = P),
                (X[27] = z))
              : (z = X[27]),
            X[28] !== ed || X[29] !== ef || X[30] !== z
              ? ((I = (0, i.jsx)(j.V, { label: ed, reason: ef, children: z })),
                (X[28] = ed),
                (X[29] = ef),
                (X[30] = z),
                (X[31] = I))
              : (I = X[31]),
            X[32] === Symbol.for("react.memo_cache_sentinel")
              ? ((T = (0, i.jsx)(c.A, {
                  id: "restricted.environmentSetup.configuration.network.label",
                  defaultMessage: "Enable all public internet access",
                  description: "Label for allowing all public internet destinations independently of VPN access",
                })),
                (X[32] = T))
              : (T = X[32]),
            X[33] !== I
              ? ((H = (0, i.jsx)(b.ic, {
                  className: "select-none",
                  controlSizing: "content",
                  variant: "featured",
                  size: "compact",
                  control: I,
                  label: T,
                })),
                (X[33] = I),
                (X[34] = H))
              : (H = X[34]))
          let eg = ec && "opacity-50"
          X[35] !== eg ? ((L = (0, o.A)("select-none", eg)), (X[35] = eg), (X[36] = L)) : (L = X[36])
          let eb = en ? et : null,
            ex = en || ec
          ;(X[37] !== ep || X[38] !== ee
            ? ((R = (e) => {
                ee({ networkEnabled: e || ep.length > 0, networkPreset: e ? "package_managers" : "none" })
              }),
              (X[37] = ep),
              (X[38] = ee),
              (X[39] = R))
            : (R = X[39]),
            X[40] !== ev || X[41] !== eh || X[42] !== ex || X[43] !== R
              ? ((O = (0, i.jsx)(f.l, { ariaLabel: eh, checked: ev, disabled: ex, onChange: R })),
                (X[40] = ev),
                (X[41] = eh),
                (X[42] = ex),
                (X[43] = R),
                (X[44] = O))
              : (O = X[44]),
            X[45] !== eh || X[46] !== eb || X[47] !== O
              ? ((G = (0, i.jsx)(j.V, { label: eh, reason: eb, children: O })),
                (X[45] = eh),
                (X[46] = eb),
                (X[47] = O),
                (X[48] = G))
              : (G = X[48]),
            X[49] === Symbol.for("react.memo_cache_sentinel")
              ? ((D = (0, i.jsx)(c.A, {
                  id: "environmentSetup.configuration.network.packageManagers",
                  defaultMessage: "Enable package manager domains",
                  description: "Label for allowing the predefined package manager domains in a cloud environment",
                })),
                (X[49] = D))
              : (D = X[49]),
            X[50] === Symbol.for("react.memo_cache_sentinel")
              ? ((V = (0, i.jsx)(c.A, {
                  id: "environmentSetup.configuration.network.presets.tooltip",
                  defaultMessage: "View domain presets",
                  description:
                    "Tooltip for the link to documentation listing the domains allowed by each network preset",
                })),
                (X[50] = V))
              : (V = X[50]),
            X[51] !== el
              ? (($ = el.formatMessage({
                  id: "environmentSetup.configuration.network.presets.about",
                  defaultMessage: "About allowed domain presets",
                  description:
                    "Accessible label for the information button that opens documentation about allowed domain presets",
                })),
                (X[51] = el),
                (X[52] = $))
              : ($ = X[52]),
            X[53] === Symbol.for("react.memo_cache_sentinel")
              ? ((B = (0, i.jsx)(v.I, { asset: a.c })), (X[53] = B))
              : (B = X[53]),
            X[54] !== $
              ? ((W = (0, i.jsxs)("span", {
                  className: "flex items-center gap-1",
                  children: [
                    D,
                    (0, i.jsx)(s.m, {
                      content: V,
                      children: (0, i.jsx)(u.$, {
                        "aria-label": $,
                        color: "ghostSecondary",
                        size: "inline",
                        type: "button",
                        onClick: w,
                        children: B,
                      }),
                    }),
                  ],
                })),
                (X[54] = $),
                (X[55] = W))
              : (W = X[55]),
            X[56] !== er || X[57] !== L || X[58] !== G || X[59] !== W
              ? ((F = (0, i.jsx)(b.ic, {
                  description: er,
                  className: L,
                  controlSizing: "content",
                  variant: "featured",
                  size: "compact",
                  control: G,
                  label: W,
                })),
                (X[56] = er),
                (X[57] = L),
                (X[58] = G),
                (X[59] = W),
                (X[60] = F))
              : (F = X[60]))
          let ey = en || ec,
            ej = en ? et : void 0
          return (
            X[61] !== eo ? ((U = eo.filter(S)), (X[61] = eo), (X[62] = U)) : (U = X[62]),
            X[63] !== ee || X[64] !== ev
              ? ((Q = (e) =>
                  ee({
                    networkDomains: e,
                    networkEnabled: ev || e.length > 0,
                    networkPreset: ev ? "package_managers" : "none",
                  })),
                (X[63] = ee),
                (X[64] = ev),
                (X[65] = Q))
              : (Q = X[65]),
            X[66] !== ep || X[67] !== ey || X[68] !== ej || X[69] !== U || X[70] !== Q
              ? ((q = (0, i.jsx)(y.y, { disabled: ey, disabledTooltip: ej, domains: ep, issues: U, onChange: Q })),
                (X[66] = ep),
                (X[67] = ey),
                (X[68] = ej),
                (X[69] = U),
                (X[70] = Q),
                (X[71] = q))
              : (q = X[71]),
            X[72] !== ea || X[73] !== H || X[74] !== F || X[75] !== q
              ? ((Z = (0, i.jsxs)(x.t, { children: [H, F, q, ea] })),
                (X[72] = ea),
                (X[73] = H),
                (X[74] = F),
                (X[75] = q),
                (X[76] = Z))
              : (Z = X[76]),
            X[77] !== es || X[78] !== Z
              ? ((K = (0, i.jsxs)(g.X.Content, { children: [es, Z] })), (X[77] = es), (X[78] = Z), (X[79] = K))
              : (K = X[79]),
            X[80] !== E || X[81] !== K
              ? ((Y = (0, i.jsxs)("section", {
                  className: "flex flex-col",
                  "data-environment-section": "network",
                  children: [E, K],
                })),
                (X[80] = E),
                (X[81] = K),
                (X[82] = Y))
              : (Y = X[82]),
            Y
          )
        },
      },
    )
  },
  KEmQ(e, n, t) {
    t.d(n, { j: () => S, G: () => j })
    var i = t("ABep"),
      r = t("QosV"),
      s = t("zd8w"),
      a = t("Wf1j"),
      o = t("oyxz"),
      l = t("GO7r"),
      d = t("UoEB"),
      c = t("BSnr"),
      u = t("AWNZ"),
      m = t("ZEx5"),
      p = t("NxjN"),
      v = t("ygO2"),
      h = t("JNtf"),
      f = t("mUDD"),
      g = t("pgXv"),
      b = t("ZRUt"),
      x = t("K489")
    function y(e) {
      let n,
        t,
        a,
        l,
        d,
        c,
        u,
        m,
        p,
        y,
        j,
        S,
        w,
        k = (0, r.c)(42),
        { initialRepositoryIds: M, initialSelections: A, hasConflict: _, onClose: C, onSave: N } = e,
        [E, P] = (0, s.useState)(M),
        [z, I] = (0, s.useState)(A)
      k[0] !== M || k[1] !== E
        ? ((n = E.length !== M.length || E.some((e) => !M.includes(e))), (k[0] = M), (k[1] = E), (k[2] = n))
        : (n = k[2])
      let T = n
      if (k[3] !== M || k[4] !== E || k[5] !== z) {
        let e
        ;(k[7] !== M || k[8] !== z
          ? ((e = (e) =>
              !M.includes(e) &&
              !z.find((n) => {
                let { repository: t } = n
                return t.id === e
              })?.repository.default_branch),
            (k[7] = M),
            (k[8] = z),
            (k[9] = e))
          : (e = k[9]),
          (t = E.some(e)),
          (k[3] = M),
          (k[4] = E),
          (k[5] = z),
          (k[6] = t))
      } else t = k[6]
      let H = t,
        L = !_ && !H && T && E.length <= 16
      ;(k[10] !== C
        ? ((a = (e) => {
            e || C()
          }),
          (k[10] = C),
          (k[11] = a))
        : (a = k[11]),
        k[12] !== L || k[13] !== C || k[14] !== N || k[15] !== E || k[16] !== z
          ? ((l = (e) => {
              if ((e.preventDefault(), e.stopPropagation(), !L)) return
              let n = z.filter((e) => {
                let { repository: n } = e
                return E.includes(n.id)
              })
              ;(N(E, n), C())
            }),
            (k[12] = L),
            (k[13] = C),
            (k[14] = N),
            (k[15] = E),
            (k[16] = z),
            (k[17] = l))
          : (l = k[17]),
        k[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, i.jsx)(h.L3, {
              children: (0, i.jsx)(o.A, {
                id: "environmentSetup.repositories.addTitle",
                defaultMessage: "Add git repository",
                description: "Title of the dialog for selecting repositories to add to an environment",
              }),
            })),
            (k[18] = d))
          : (d = k[18]),
        k[19] !== E || k[20] !== z
          ? ((c = (e, n) => {
              let t = e.repository.id
              ;(P(n ? [...E, t] : E.filter((e) => e !== t)),
                I([
                  ...z.filter((e) => {
                    let { repository: n } = e
                    return n.id !== t
                  }),
                  ...(n ? [e] : []),
                ]))
            }),
            (k[19] = E),
            (k[20] = z),
            (k[21] = c))
          : (c = k[21]),
        k[22] !== _ || k[23] !== E || k[24] !== c
          ? ((u = (0, i.jsx)(g.CloudEnvironmentRepositoryPicker, {
              disabled: _,
              headerAlignment: "start",
              configureInAccountMenu: !0,
              selectedRepositoryIds: E,
              maxRepositories: 16,
              header: d,
              onChange: c,
            })),
            (k[22] = _),
            (k[23] = E),
            (k[24] = c),
            (k[25] = u))
          : (u = k[25]),
        k[26] !== _ ? ((m = _ ? (0, i.jsx)(b.A, {}) : null), (k[26] = _), (k[27] = m)) : (m = k[27]),
        k[28] !== H
          ? ((p = H ? (0, i.jsx)(x.o, { issue: { code: "repository" } }) : null), (k[28] = H), (k[29] = p))
          : (p = k[29]))
      let R = !L
      return (
        k[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, i.jsx)(o.A, {
              id: "environmentSetup.repositories.setUp",
              defaultMessage: "Save",
              description:
                "Stages the repository selection in the environment editor; Save draft persists the changes and asks the setup agent to apply them",
            })),
            (k[30] = y))
          : (y = k[30]),
        k[31] !== R
          ? ((j = (0, i.jsx)(f.Es, {
              children: (0, i.jsx)(v.$, { color: "primary", size: "dialog", type: "submit", disabled: R, children: y }),
            })),
            (k[31] = R),
            (k[32] = j))
          : (j = k[32]),
        k[33] !== j || k[34] !== l || k[35] !== u || k[36] !== m || k[37] !== p
          ? ((S = (0, i.jsxs)(f.R4, { as: "form", size: "viewport", onSubmit: l, children: [u, m, p, j] })),
            (k[33] = j),
            (k[34] = l),
            (k[35] = u),
            (k[36] = m),
            (k[37] = p),
            (k[38] = S))
          : (S = k[38]),
        k[39] !== S || k[40] !== a
          ? ((w = (0, i.jsx)(h.lG, {
              open: !0,
              size: "compact",
              dialogCloseClassName: "top-5.5!",
              onOpenChange: a,
              children: S,
            })),
            (k[39] = S),
            (k[40] = a),
            (k[41] = w))
          : (w = k[41]),
        w
      )
    }
    function j(e) {
      let n,
        t,
        s,
        a,
        o,
        l = (0, r.c)(21),
        {
          config: d,
          isReadOnly: c,
          readOnlyTooltip: u,
          onChange: m,
          configuration: p,
          draft: v,
          panelState: h,
          issues: f,
          showHeading: g,
        } = e,
        b = void 0 === c || c
      l[0] !== f ? ((n = void 0 === f ? [] : f), (l[0] = f), (l[1] = n)) : (n = l[1])
      let x = n,
        y = void 0 === g || g,
        j = v.repositories
      return (
        l[2] !== h?.githubRepositories
          ? ((t = h?.githubRepositories ?? []), (l[2] = h?.githubRepositories), (l[3] = t))
          : (t = l[3]),
        l[4] !== p?.repositoryNamesById
          ? ((s = p?.repositoryNamesById ?? {}), (l[4] = p?.repositoryNamesById), (l[5] = s))
          : (s = l[5]),
        l[6] !== d?.draft?.id || l[7] !== d?.draft?.revision || l[8] !== d?.id || l[9] !== d?.version_id
          ? ((a = JSON.stringify([d?.id, d?.version_id, d?.draft?.id, d?.draft?.revision])),
            (l[6] = d?.draft?.id),
            (l[7] = d?.draft?.revision),
            (l[8] = d?.id),
            (l[9] = d?.version_id),
            (l[10] = a))
          : (a = l[10]),
        l[11] !== v.repositories ||
        l[12] !== b ||
        l[13] !== x ||
        l[14] !== m ||
        l[15] !== u ||
        l[16] !== y ||
        l[17] !== t ||
        l[18] !== s ||
        l[19] !== a
          ? ((o = (0, i.jsx)(S, {
              repositoryIds: j,
              selections: t,
              repositoryNames: s,
              revision: a,
              isReadOnly: b,
              readOnlyTooltip: u,
              onChange: m,
              issues: x,
              showHeading: y,
            })),
            (l[11] = v.repositories),
            (l[12] = b),
            (l[13] = x),
            (l[14] = m),
            (l[15] = u),
            (l[16] = y),
            (l[17] = t),
            (l[18] = s),
            (l[19] = a),
            (l[20] = o))
          : (o = l[20]),
        o
      )
    }
    function S(e) {
      let n,
        t,
        v,
        h,
        f,
        g,
        b,
        j,
        S,
        w = (0, r.c)(47),
        {
          repositoryIds: k,
          selections: M,
          repositoryNames: A,
          revision: _,
          isReadOnly: C,
          readOnlyTooltip: N,
          onChange: E,
          issues: P,
          showHeading: z,
        } = e
      w[0] !== P ? ((n = void 0 === P ? [] : P), (w[0] = P), (w[1] = n)) : (n = w[1])
      let I = n,
        T = void 0 === z || z,
        H = (0, a.A)(),
        [L, R] = (0, s.useState)(null)
      if (
        (C && null != L && R(null),
        w[2] !== H || w[3] !== C || w[4] !== E || w[5] !== N || w[6] !== k || w[7] !== _ || w[8] !== M
          ? ((t =
              null == E
                ? void 0
                : (0, i.jsx)(p.F, {
                    "aria-label": H.formatMessage({
                      id: "environmentSetup.repositories.addLabel",
                      defaultMessage: "Manage repositories",
                      description: "Opens the editor to add or remove environment repositories",
                    }),
                    type: "button",
                    "aria-haspopup": "dialog",
                    color: "secondary",
                    size: "settingsAction",
                    disabled: C,
                    tooltipContent: C ? N : null,
                    onClick: () => R({ revision: _, repositoryIds: k, selections: M }),
                    children: (0, i.jsx)(o.A, {
                      id: "environmentSetup.repositories.add",
                      defaultMessage: "Manage",
                      description: "Button for adding or removing environment repositories",
                    }),
                  })),
            (w[2] = H),
            (w[3] = C),
            (w[4] = E),
            (w[5] = N),
            (w[6] = k),
            (w[7] = _),
            (w[8] = M),
            (w[9] = t))
          : (t = w[9]),
        w[10] !== T
          ? ((v = T
              ? (0, i.jsx)(o.A, {
                  id: "restricted.environmentSetup.sidePanel.repositories",
                  defaultMessage: "Repositories",
                  description: "Heading for repositories in the environment side-panel editor",
                })
              : null),
            (w[10] = T),
            (w[11] = v))
          : (v = w[11]),
        w[12] !== t || w[13] !== v
          ? ((h = (0, i.jsx)(c.X.Header, {
              className: "select-none",
              actions: t,
              size: "base",
              spacing: "compact",
              title: v,
            })),
            (w[12] = t),
            (w[13] = v),
            (w[14] = h))
          : (h = w[14]),
        w[15] !== k ? ((f = 0 === k.length ? [""] : k), (w[15] = k), (w[16] = f)) : (f = w[16]),
        w[17] !== H ||
          w[18] !== C ||
          w[19] !== I ||
          w[20] !== E ||
          w[21] !== N ||
          w[22] !== k ||
          w[23] !== A ||
          w[24] !== M ||
          w[25] !== f)
      ) {
        let e
        ;(w[27] !== H ||
        w[28] !== C ||
        w[29] !== I ||
        w[30] !== E ||
        w[31] !== N ||
        w[32] !== k ||
        w[33] !== A ||
        w[34] !== M
          ? ((e = (e, n) =>
              (0, i.jsx)(
                u.ic,
                {
                  className: "select-none",
                  variant: "featured",
                  control:
                    "" === e || null == E
                      ? null
                      : (0, i.jsx)(p.F, {
                          type: "button",
                          color: "ghostSecondary",
                          size: "iconSm",
                          disabled: C,
                          tooltipContent: C ? N : null,
                          "aria-label": H.formatMessage(
                            {
                              id: "environmentSetup.repositories.removeLabel",
                              defaultMessage: "Remove {repository}",
                              description: "Accessible label for removing a repository from an environment",
                            },
                            {
                              repository:
                                A[e] ??
                                M.find((n) => {
                                  let { repository: t } = n
                                  return t.id === e
                                })?.repository.repository_full_name ??
                                e,
                            },
                          ),
                          onClick: () =>
                            E(
                              k.filter((n) => n !== e),
                              M.filter((n) => {
                                let { repository: t } = n
                                return t.id !== e
                              }),
                            ),
                          children: (0, i.jsx)(l.cSG, {}),
                        }),
                  size: "compact",
                  description:
                    null ==
                    I.find((e) => {
                      let { field: t } = e
                      return t === `repository-${n}`
                    })
                      ? void 0
                      : (0, i.jsx)("span", {
                          tabIndex: -1,
                          "data-environment-invalid": "true",
                          children: (0, i.jsx)(x.o, { issue: { field: `repository-${n}`, code: "repository" } }),
                        }),
                  icon: (0, i.jsx)(d.A, { className: "icon-xs" }),
                  label:
                    (A[e] ??
                      M.find((n) => {
                        let { repository: t } = n
                        return t.id === e
                      })?.repository.repository_full_name ??
                      e) ||
                    (0, i.jsx)(o.A, {
                      id: "restricted.environmentSetup.configuration.repository.empty",
                      defaultMessage: "No repository selected",
                      description:
                        "Description shown when a mocked cloud environment settings panel has no repository yet",
                    }),
                },
                n,
              )),
            (w[27] = H),
            (w[28] = C),
            (w[29] = I),
            (w[30] = E),
            (w[31] = N),
            (w[32] = k),
            (w[33] = A),
            (w[34] = M),
            (w[35] = e))
          : (e = w[35]),
          (g = f.map(e)),
          (w[17] = H),
          (w[18] = C),
          (w[19] = I),
          (w[20] = E),
          (w[21] = N),
          (w[22] = k),
          (w[23] = A),
          (w[24] = M),
          (w[25] = f),
          (w[26] = g))
      } else g = w[26]
      return (
        w[36] !== g
          ? ((b = (0, i.jsx)(c.X.Content, { children: (0, i.jsx)(m.t, { children: g }) })), (w[36] = g), (w[37] = b))
          : (b = w[37]),
        w[38] !== L || w[39] !== C || w[40] !== E || w[41] !== _
          ? ((j =
              null == L || C || null == E
                ? null
                : (0, i.jsx)(y, {
                    initialRepositoryIds: L.repositoryIds,
                    initialSelections: L.selections,
                    hasConflict: _ !== L.revision,
                    onClose: () => R(null),
                    onSave: E,
                  })),
            (w[38] = L),
            (w[39] = C),
            (w[40] = E),
            (w[41] = _),
            (w[42] = j))
          : (j = w[42]),
        w[43] !== j || w[44] !== h || w[45] !== b
          ? ((S = (0, i.jsxs)(c.X, { children: [h, b, j] })), (w[43] = j), (w[44] = h), (w[45] = b), (w[46] = S))
          : (S = w[46]),
        S
      )
    }
  },
  K489(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("slpy"),
      a = t("h818"),
      o = t("on57"),
      l = t("zd8w"),
      d = t("Wf1j"),
      c = t("oyxz"),
      u = t("Qgfj"),
      m = t("HOLv"),
      p = t("nzx4")
    function v(e) {
      let n,
        t,
        o,
        u,
        v,
        h,
        f,
        g,
        b,
        y,
        j,
        S,
        w,
        k,
        M,
        A,
        _ = (0, r.c)(45),
        { id: C, issue: N } = e,
        E = (0, d.A)(),
        P = (0, l.useId)(),
        z = (0, l.useId)(),
        [I, T] = (0, l.useState)(!1),
        H = x[`${N.code}Label`],
        L = x[`${N.code}Help`],
        R = `${P}-summary`
      ;(_[0] !== H ? ((n = (0, i.jsx)(c.A, { ...H })), (_[0] = H), (_[1] = n)) : (n = _[1]),
        _[2] !== R || _[3] !== n
          ? ((t = (0, i.jsx)("span", { id: R, className: "select-none", children: n })),
            (_[2] = R),
            (_[3] = n),
            (_[4] = t))
          : (t = _[4]),
        _[5] !== L ? ((o = (0, i.jsx)(c.A, { ...L })), (_[5] = L), (_[6] = o)) : (o = _[6]),
        _[7] !== E ? ((u = E.formatMessage(x.details)), (_[7] = E), (_[8] = u)) : (u = _[8]))
      let O = `${P}-summary`
      return (
        _[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)(m.I, { asset: a.c })), (_[9] = v))
          : (v = _[9]),
        _[10] !== u || _[11] !== O
          ? ((h = (0, i.jsx)(p.Wv, {
              asChild: !0,
              children: (0, i.jsx)("button", {
                "aria-label": u,
                "aria-describedby": O,
                className:
                  "inline-flex cursor-interaction rounded-sm focus-visible:outline-2 focus-visible:outline-ring",
                type: "button",
                children: v,
              }),
            })),
            (_[10] = u),
            (_[11] = O),
            (_[12] = h))
          : (h = _[12]),
        _[13] !== I || _[14] !== o || _[15] !== h
          ? ((f = (0, i.jsx)(s.m, { disabled: I, content: o, children: h })),
            (_[13] = I),
            (_[14] = o),
            (_[15] = h),
            (_[16] = f))
          : (f = _[16]),
        _[17] !== H ? ((g = (0, i.jsx)(c.A, { ...H })), (_[17] = H), (_[18] = g)) : (g = _[18]),
        _[19] !== g || _[20] !== P
          ? ((b = (0, i.jsx)(p.eO, { id: P, children: g })), (_[19] = g), (_[20] = P), (_[21] = b))
          : (b = _[21]),
        _[22] !== L ? ((y = (0, i.jsx)(c.A, { ...L })), (_[22] = L), (_[23] = y)) : (y = _[23]),
        _[24] !== z || _[25] !== y
          ? ((j = (0, i.jsx)("p", { id: z, children: y })), (_[24] = z), (_[25] = y), (_[26] = j))
          : (j = _[26]),
        _[27] !== N.valuesSaved
          ? ((S = N.valuesSaved ? (0, i.jsx)("p", { children: (0, i.jsx)(c.A, { ...x.valuesSaved }) }) : null),
            (_[27] = N.valuesSaved),
            (_[28] = S))
          : (S = _[28]),
        _[29] !== b || _[30] !== j || _[31] !== S
          ? ((w = (0, i.jsxs)("div", {
              className: "flex flex-col gap-3 p-2 text-sm select-text",
              children: [b, j, S],
            })),
            (_[29] = b),
            (_[30] = j),
            (_[31] = S),
            (_[32] = w))
          : (w = _[32]),
        _[33] !== z || _[34] !== w || _[35] !== P
          ? ((k = (0, i.jsx)(p.hl, {
              "aria-labelledby": P,
              "aria-describedby": z,
              size: "large",
              variant: "menu",
              children: w,
            })),
            (_[33] = z),
            (_[34] = w),
            (_[35] = P),
            (_[36] = k))
          : (k = _[36]),
        _[37] !== I || _[38] !== k || _[39] !== f
          ? ((M = (0, i.jsxs)(p.AM, { open: I, onOpenChange: T, children: [f, k] })),
            (_[37] = I),
            (_[38] = k),
            (_[39] = f),
            (_[40] = M))
          : (M = _[40]),
        _[41] !== C || _[42] !== M || _[43] !== t
          ? ((A = (0, i.jsxs)("span", {
              id: C,
              className: "inline-flex items-center gap-1 text-xs text-danger",
              children: [t, M],
            })),
            (_[41] = C),
            (_[42] = M),
            (_[43] = t),
            (_[44] = A))
          : (A = _[44]),
        A
      )
    }
    function h(e) {
      let { valuesSaved: n } = e
      return n
    }
    function f(e) {
      let { field: n } = e
      return null == n
    }
    function g(e) {
      let { field: n } = e
      return null != n
    }
    function b(e) {
      let { code: n } = e
      return [
        "name",
        "repository",
        "key",
        "duplicate",
        "reserved",
        "domains",
        "tcp-access",
        "value",
        "connection",
      ].includes(n)
    }
    let x = (0, u.YK)({
      "runtime-rejectedLabel": {
        id: "environmentSetup.saveErrors.runtimeRejected.label",
        defaultMessage: "Draft saved, update rejected",
        description: "The environment settings draft was saved, but applying it to the build environment was rejected",
      },
      "runtime-rejectedHelp": {
        id: "environmentSetup.saveErrors.runtimeRejected.help",
        defaultMessage:
          "Your draft was saved, but the build environment rejected the update. Reload the draft before retrying",
        description:
          "Recovery guidance after the settings draft was saved successfully but its runtime update was rejected",
      },
      "runtime-unconfirmedLabel": {
        id: "environmentSetup.saveErrors.runtimeUnconfirmed.label",
        defaultMessage: "Draft saved, update unconfirmed",
        description:
          "The environment settings draft was saved, but the result of applying it to the build environment is unknown",
      },
      "runtime-unconfirmedHelp": {
        id: "environmentSetup.saveErrors.runtimeUnconfirmed.help",
        defaultMessage:
          "Your draft was saved, but we couldn’t confirm the build environment was updated. Reload the draft before retrying",
        description:
          "Recovery guidance after the settings draft was saved successfully but the runtime update could not be confirmed; it may have succeeded",
      },
      "repository-threadLabel": {
        id: "environmentSetup.saveErrors.repositoryThread.label",
        defaultMessage: "Open the environment’s setup chat",
        description: "Repository changes require the matching environment setup chat",
      },
      "repository-threadHelp": {
        id: "environmentSetup.saveErrors.repositoryThread.help",
        defaultMessage:
          "Open this environment’s setup chat and save the repository changes there so they can be applied to its workspace",
        description: "How to save repository changes when the editor cannot identify the matching setup chat",
      },
      "tcp-accessLabel": {
        id: "environmentSetup.saveErrors.tcpAccess.label",
        defaultMessage: "Check TCP destinations",
        description: "Invalid private TCP destination grants",
      },
      "tcp-accessHelp": {
        id: "environmentSetup.saveErrors.tcpAccess.help",
        defaultMessage: "Enter valid private IPv4 CIDRs or hostnames in TCP destinations",
        description: "How to correct invalid TCP grants before saving",
      },
      "tcp-unavailableLabel": {
        id: "environmentSetup.saveErrors.tcpUnavailable.label",
        defaultMessage: "TCP access unavailable",
        description: "Saving nonempty TCP grants was blocked because support or VPN configuration is unavailable",
      },
      "tcp-unavailableHelp": {
        id: "environmentSetup.saveErrors.tcpUnavailable.help",
        defaultMessage: "Refresh TCP support and check the VPN configuration, or clear all TCP grants before saving",
        description: "How to recover when a fresh VPN read cannot confirm TCP support",
      },
      "too-largeLabel": {
        id: "environmentSetup.saveErrors.tooLarge.label",
        defaultMessage: "Configuration too large",
        description: "Error when the complete cloud environment configuration exceeds its storage size limit",
      },
      "too-largeHelp": {
        id: "environmentSetup.saveErrors.tooLarge.help",
        defaultMessage: "Reduce the domain list, scripts, or other settings, then save again",
        description: "Guidance when the complete cloud environment configuration exceeds its storage size limit",
      },
      nameLabel: {
        id: "restricted.environmentSetup.saveErrors.name.label",
        defaultMessage: "Name required",
        description: "Short field error for an empty environment name",
      },
      repositoryLabel: {
        id: "restricted.environmentSetup.saveErrors.repository.label",
        defaultMessage: "Check repository",
        description: "Short field error for an incomplete environment repository selection",
      },
      keyLabel: {
        id: "restricted.environmentSetup.saveErrors.key.label",
        defaultMessage: "Invalid key",
        description: "Short error beside a malformed cloud environment secret key",
      },
      duplicateLabel: {
        id: "restricted.environmentSetup.saveErrors.duplicate.label",
        defaultMessage: "Duplicate key",
        description: "Short error beside a cloud environment secret whose key is already used",
      },
      reservedLabel: {
        id: "restricted.environmentSetup.saveErrors.reserved.label",
        defaultMessage: "Reserved key",
        description: "Short error beside a proxy secret key reserved for platform configuration",
      },
      "reserved-targetLabel": {
        id: "restricted.environmentSetup.saveErrors.reservedTarget.label",
        defaultMessage: "Reserved key",
        description:
          "Global environment save error when the server rejects a platform-reserved proxy secret key without identifying the affected field",
      },
      domainsLabel: {
        id: "restricted.environmentSetup.saveErrors.domains.label",
        defaultMessage: "Check domains",
        description: "Short error beside invalid cloud environment allowed domains",
      },
      valueLabel: {
        id: "restricted.environmentSetup.saveErrors.value.label",
        defaultMessage: "Value required",
        description: "Short error for a required secret value before reviewing an environment",
      },
      connectionLabel: {
        id: "restricted.environmentSetup.saveErrors.connection.label",
        defaultMessage: "Check connection",
        description: "Short error beside an invalid environment outbound identity attachment",
      },
      "save-valueLabel": {
        id: "restricted.environmentSetup.saveErrors.saveValue.label",
        defaultMessage: "Couldn’t save value",
        description: "Short service failure beside a specific cloud environment secret; does not imply invalid input",
      },
      unconfirmedLabel: {
        id: "restricted.environmentSetup.saveErrors.unconfirmed.label",
        defaultMessage: "Save unconfirmed",
        description: "Short status for a value creation that may have succeeded without returning its ID",
      },
      conflictLabel: {
        id: "restricted.environmentSetup.saveErrors.conflict.label",
        defaultMessage: "Environment changed",
        description: "Short global save failure when an environment revision changed elsewhere",
      },
      authenticationLabel: {
        id: "restricted.environmentSetup.saveErrors.authentication.label",
        defaultMessage: "Check sign-in",
        description: "Short global environment save failure for missing or changed authentication",
      },
      permissionLabel: {
        id: "restricted.environmentSetup.saveErrors.permission.label",
        defaultMessage: "Permission denied",
        description: "Short global environment save failure when the user lacks access",
      },
      "not-foundLabel": {
        id: "restricted.environmentSetup.saveErrors.notFound.label",
        defaultMessage: "No longer available",
        description: "Short global environment save failure when a server resource is missing",
      },
      unavailableLabel: {
        id: "restricted.environmentSetup.saveErrors.unavailable.label",
        defaultMessage: "Save unconfirmed",
        description: "Short global status when the environment save response was lost or invalid",
      },
      requestLabel: {
        id: "restricted.environmentSetup.saveErrors.request.label",
        defaultMessage: "Couldn’t save environment",
        description: "Short global error when no field-specific cause is known",
      },
      nameHelp: {
        id: "restricted.environmentSetup.saveErrors.name.help",
        defaultMessage: "Enter a name for this environment",
        description: "Explanation for an empty environment name in save-error details",
      },
      repositoryHelp: {
        id: "restricted.environmentSetup.saveErrors.repository.help",
        defaultMessage: "Select a repository with an available default branch before saving",
        description: "Explanation of an incomplete repository selection in environment save-error details",
      },
      keyHelp: {
        id: "restricted.environmentSetup.saveErrors.key.help",
        defaultMessage:
          "Use a letter or underscore first, followed by letters, digits, or underscores, without surrounding spaces",
        description: "Explanation of the environment variable grammar for a proxy secret key",
      },
      duplicateHelp: {
        id: "restricted.environmentSetup.saveErrors.duplicate.help",
        defaultMessage: "Each secret must have a unique key; rename this secret or remove the duplicate",
        description: "Correction for duplicate secret names or environment variable targets",
      },
      reservedHelp: {
        id: "restricted.environmentSetup.saveErrors.reserved.help",
        defaultMessage:
          "This key is reserved for platform configuration; rename or remove this proxy secret before saving",
        description: "Explains how to correct a proxy secret that overrides a platform-owned variable",
      },
      "reserved-targetHelp": {
        id: "restricted.environmentSetup.saveErrors.reservedTarget.help",
        defaultMessage:
          "One or more proxy secrets use a key reserved for platform configuration. Rename or remove those secrets before saving; your edits are still here.",
        description:
          "Recovery guidance for a server rejection that identifies a reserved proxy secret key but does not identify which field; asks the user to rename or remove the affected secrets and reassures them their edits are preserved",
      },
      domainsHelp: {
        id: "restricted.environmentSetup.saveErrors.domains.help",
        defaultMessage:
          "Use hostnames without URLs, paths, or ports; each proxy secret needs at least one exact hostname",
        description:
          "Explains invalid allowed-domain input; network rules can use wildcards but proxy secret destinations cannot",
      },
      valueHelp: {
        id: "restricted.environmentSetup.saveErrors.value.help",
        defaultMessage: "Enter a value for this required secret before continuing the review",
        description:
          "Explains missing values at the environment review boundary; draft saves can retain unresolved requirements",
      },
      connectionHelp: {
        id: "restricted.environmentSetup.saveErrors.connection.help",
        defaultMessage:
          "Use unique connections and aliases, with at most 16 attachments; aliases start with an uppercase letter followed by up to 63 uppercase letters, digits, or underscores",
        description: "Explains the existing outbound identity attachment validation rules",
      },
      "save-valueHelp": {
        id: "restricted.environmentSetup.saveErrors.saveValue.help",
        defaultMessage: "The service couldn’t save this value; your edits are still here, so try saving again",
        description: "Explanation for a failed value write whose outcome is known, without blaming valid user input",
      },
      unconfirmedHelp: {
        id: "restricted.environmentSetup.saveErrors.unconfirmed.manualRetryHelp",
        defaultMessage:
          "The service didn’t confirm whether this value was saved. Your input is still here. Saving again may create another stored value.",
        description:
          "Explanation beside a value in the environment panel after an unconfirmed creation; the existing Save button retries and may create another stored value",
      },
      conflictHelp: {
        id: "restricted.environmentSetup.saveErrors.conflict.help",
        defaultMessage:
          "This environment changed elsewhere. Your edits are still here; review the refreshed configuration before saving again.",
        description: "Recovery guidance for a stale environment draft revision, with local edits preserved",
      },
      authenticationHelp: {
        id: "restricted.environmentSetup.saveErrors.authentication.help",
        defaultMessage: "Sign in to the account and workspace where you started setup, then try saving again",
        description: "Recovery guidance for an environment save rejected because authentication changed or expired",
      },
      permissionHelp: {
        id: "restricted.environmentSetup.saveErrors.permission.help",
        defaultMessage: "You don’t have permission to save these changes; check your account and environment access",
        description: "Recovery guidance for an environment save denied by authorization",
      },
      "not-foundHelp": {
        id: "restricted.environmentSetup.saveErrors.notFound.help",
        defaultMessage:
          "The environment or a referenced resource is no longer available; reload it to check its current state",
        description: "Global resource-not-found guidance without guessing which resource is missing",
      },
      unavailableHelp: {
        id: "restricted.environmentSetup.saveErrors.unavailable.help",
        defaultMessage:
          "The service didn’t return a confirmed result. Your edits are still here; reload the environment to check whether it saved before trying again.",
        description: "Recovery guidance for a lost or invalid environment save response",
      },
      requestHelp: {
        id: "restricted.environmentSetup.saveErrors.request.explanation",
        defaultMessage:
          "The service rejected this save without identifying a field. Your edits are still here. Try saving again.",
        description:
          "Explanation in the environment save error popover when the service rejects a save without identifying an invalid field; reassures the user that their edits are preserved",
      },
      details: {
        id: "restricted.environmentSetup.saveErrors.details.button",
        defaultMessage: "Error details",
        description:
          "Accessible name of the information button next to an environment save error; opens a persistent explanation",
      },
      valuesSaved: {
        id: "restricted.environmentSetup.saveErrors.valuesSaved.help",
        defaultMessage:
          "Some values were already saved and will be reused on retry; updates to existing values already affect other bindings that use them",
        description:
          "Explains confirmed value writes before a later failed or unconfirmed save and the shared effect of updating an existing value",
      },
    })
    t.d(
      n,
      {},
      {
        B: function (e) {
          let n,
            t,
            s,
            a,
            l,
            d,
            u,
            m,
            p = (0, r.c)(26),
            { issues: y, announce: j, inBanner: S } = e,
            w = void 0 !== S && S
          if (0 === y.length) return null
          p[0] !== y ? ((n = y.filter(b)), (p[0] = y), (p[1] = n)) : (n = p[1])
          let k = n
          p[2] !== y ? ((t = y.filter(g)), (p[2] = y), (p[3] = t)) : (t = p[3])
          let M = t,
            A = !w && "text-xs"
          p[4] !== A
            ? ((s = (0, o.A)("flex min-w-0 flex-1 flex-col gap-1 text-danger select-none", A)), (p[4] = A), (p[5] = s))
            : (s = p[5])
          let _ = void 0 === j || j ? "alert" : void 0
          if (
            (p[6] !== k.length
              ? ((a =
                  k.length > 0
                    ? (0, i.jsx)(c.A, {
                        id: "restricted.environmentSetup.saveErrors.summary.invalid",
                        defaultMessage: "Fix {count, plural, one {# error} other {# errors}} to save",
                        description: "Compact environment save footer counting invalid fields that need correction",
                        values: { count: k.length },
                      })
                    : null),
                (p[6] = k.length),
                (p[7] = a))
              : (a = p[7]),
            p[8] !== M || p[9] !== k.length
              ? ((l =
                  0 === k.length && M.length > 0
                    ? (0, i.jsx)(c.A, {
                        id: "restricted.environmentSetup.saveErrors.summary.values",
                        defaultMessage: "Check {count, plural, one {# value save} other {# value saves}}",
                        description:
                          "Compact environment footer counting value writes that failed or have an unconfirmed outcome; the input is not necessarily invalid",
                        values: { count: M.length },
                      })
                    : null),
                (p[8] = M),
                (p[9] = k.length),
                (p[10] = l))
              : (l = p[10]),
            p[11] !== w || p[12] !== y)
          ) {
            let e
            ;(p[14] !== w
              ? ((e = (e, n) =>
                  w
                    ? (0, i.jsx)(
                        "p",
                        { className: "select-text", children: (0, i.jsx)(c.A, { ...x[`${e.code}Help`] }) },
                        n,
                      )
                    : (0, i.jsx)(v, { issue: e }, n)),
                (p[14] = w),
                (p[15] = e))
              : (e = p[15]),
              (d = y.filter(f).map(e)),
              (p[11] = w),
              (p[12] = y),
              (p[13] = d))
          } else d = p[13]
          return (
            p[16] !== w || p[17] !== y
              ? ((u =
                  w && y.some(h)
                    ? (0, i.jsx)("p", { className: "select-text", children: (0, i.jsx)(c.A, { ...x.valuesSaved }) })
                    : null),
                (p[16] = w),
                (p[17] = y),
                (p[18] = u))
              : (u = p[18]),
            p[19] !== d || p[20] !== u || p[21] !== s || p[22] !== _ || p[23] !== a || p[24] !== l
              ? ((m = (0, i.jsxs)("div", { className: s, role: _, children: [a, l, d, u] })),
                (p[19] = d),
                (p[20] = u),
                (p[21] = s),
                (p[22] = _),
                (p[23] = a),
                (p[24] = l),
                (p[25] = m))
              : (m = p[25]),
            m
          )
        },
        o: v,
      },
    )
  },
  Qm3F(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("slpy"),
      a = t("zd8w"),
      o = t("v7qY"),
      l = t("Wf1j"),
      d = t("ygO2"),
      c = t("GO7r"),
      u = t("zLIa")
    function m(e) {
      return e.preventDefault()
    }
    t.d(
      n,
      {},
      {
        n: function (e) {
          let n,
            t,
            p,
            v,
            h,
            f,
            g,
            b,
            x,
            y,
            j,
            S = (0, r.c)(40),
            {
              id: w,
              value: k,
              personal: M,
              onChange: A,
              ariaLabel: _,
              invalid: C,
              describedBy: N,
              saved: E,
              scopeControl: P,
            } = e,
            z = (0, l.A)(),
            I = (0, a.useRef)(null),
            [T, H] = (0, a.useState)(!1),
            [L, R] = (0, a.useState)(!1)
          S[0] !== z
            ? ((n = z.formatMessage({
                id: "environmentSetup.secret.valuePlaceholder",
                defaultMessage: "Value",
                description: "Placeholder for a new cloud network secret value",
              })),
              (S[0] = z),
              (S[1] = n))
            : (n = S[1])
          let O = n
          if (void 0 !== E && E) {
            let e
            ;(S[2] !== L || S[3] !== z
              ? ((e = L
                  ? z.formatMessage({
                      id: "restricted.environmentSetup.secret.keepValue",
                      defaultMessage: "Leave blank to keep saved value",
                      description: "Placeholder explaining that a blank secret value preserves the existing credential",
                    })
                  : "••••••••••••"),
                (S[2] = L),
                (S[3] = z),
                (S[4] = e))
              : (e = S[4]),
              (O = e))
          } else if (void 0 !== M && M) {
            let e
            ;(S[5] !== z
              ? ((e = z.formatMessage({
                  id: "environmentSetup.secret.optionalValue",
                  defaultMessage: "Your value (optional)",
                  description: "Placeholder for an optional personal secret value belonging to the signed-in user",
                })),
                (S[5] = z),
                (S[6] = e))
              : (e = S[6]),
              (O = e))
          }
          S[7] !== z || S[8] !== T
            ? ((t = T
                ? z.formatMessage({
                    id: "restricted.environmentSetup.configuration.secret.dialog.hide",
                    defaultMessage: "Hide secret value",
                    description: "Accessible label for hiding the currently revealed cloud environment secret value",
                  })
                : z.formatMessage({
                    id: "restricted.environmentSetup.configuration.secret.dialog.reveal",
                    defaultMessage: "Reveal secret value",
                    description:
                      "Accessible label for showing or hiding a private cloud environment secret value in its native dialog",
                  })),
              (S[7] = z),
              (S[8] = T),
              (S[9] = t))
            : (t = S[9])
          let G = t,
            D = 0 === k.length
          ;(S[10] !== T
            ? ((p = () => {
                let e = I.current,
                  n = e?.selectionStart ?? null,
                  t = e?.selectionEnd ?? null
                ;((0, o.flushSync)(() => H(!T)), e?.getBoundingClientRect(), e?.setSelectionRange(n, t))
              }),
              (S[10] = T),
              (S[11] = p))
            : (p = S[11]),
            S[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = (0, i.jsx)(c.X9D, {})), (S[12] = v))
              : (v = S[12]),
            S[13] !== w || S[14] !== D || S[15] !== p || S[16] !== G
              ? ((h = (0, i.jsx)(d.$, {
                  "aria-label": G,
                  "aria-controls": w,
                  color: "ghost",
                  disabled: D,
                  size: "inputIcon",
                  onMouseDown: m,
                  onClick: p,
                  children: v,
                })),
                (S[13] = w),
                (S[14] = D),
                (S[15] = p),
                (S[16] = G),
                (S[17] = h))
              : (h = S[17]),
            S[18] !== h || S[19] !== G
              ? ((f = (0, i.jsx)(s.m, { content: G, children: h })), (S[18] = h), (S[19] = G), (S[20] = f))
              : (f = S[20]))
          let V = f
          S[21] !== _ || S[22] !== z
            ? ((g =
                _ ??
                z.formatMessage({
                  id: "restricted.environmentSetup.input.secret.value",
                  defaultMessage: "Secret value",
                  description: "Accessible label for a cloud environment secret value",
                })),
              (S[21] = _),
              (S[22] = z),
              (S[23] = g))
            : (g = S[23])
          let $ = T ? "text" : "password",
            B = null == P ? "default" : "segmented",
            W = null == P ? void 0 : V,
            F = P ?? V
          return (
            S[24] === Symbol.for("react.memo_cache_sentinel")
              ? ((b = () => R(!0)), (x = () => R(!1)), (S[24] = b), (S[25] = x))
              : ((b = S[24]), (x = S[25])),
            S[26] !== A ? ((y = (e) => A(e.target.value)), (S[26] = A), (S[27] = y)) : (y = S[27]),
            S[28] !== N ||
            S[29] !== w ||
            S[30] !== C ||
            S[31] !== O ||
            S[32] !== g ||
            S[33] !== $ ||
            S[34] !== B ||
            S[35] !== W ||
            S[36] !== F ||
            S[37] !== y ||
            S[38] !== k
              ? ((j = (0, i.jsx)(u.pd, {
                  id: w,
                  ref: I,
                  "aria-invalid": C,
                  "aria-describedby": N,
                  "data-environment-invalid": C,
                  "aria-label": g,
                  autoComplete: "new-password",
                  placeholder: O,
                  type: $,
                  value: k,
                  variant: B,
                  trailingInlineControl: W,
                  trailingControl: F,
                  onFocus: b,
                  onBlur: x,
                  onChange: y,
                })),
                (S[28] = N),
                (S[29] = w),
                (S[30] = C),
                (S[31] = O),
                (S[32] = g),
                (S[33] = $),
                (S[34] = B),
                (S[35] = W),
                (S[36] = F),
                (S[37] = y),
                (S[38] = k),
                (S[39] = j))
              : (j = S[39]),
            j
          )
        },
      },
    )
  },
  EkMM(e, n, t) {
    t.d(n, { s: () => w })
    var i = t("ABep"),
      r = t("QosV"),
      s = t("slpy")
    t("PFi3")
    var a = t("zd8w"),
      o = t("Wf1j"),
      l = t("ygO2"),
      d = t("GO7r"),
      c = t("zLIa"),
      u = t("ILsY"),
      m = t("W857"),
      p = t("K489"),
      v = t("Qm3F"),
      h = t("oyxz"),
      f = t("nzx4"),
      g = t("J0Wh"),
      b = t("wU6J")
    function x(e) {
      let n,
        t,
        s,
        c,
        u,
        m,
        p,
        v,
        x,
        S,
        w,
        k,
        M,
        A,
        _,
        C,
        N,
        E,
        P,
        z = (0, r.c)(54),
        { name: I, value: T, disabled: H, readOnly: L, invalid: R, describedBy: O, onChange: G } = e,
        D = (0, o.A)(),
        V = (0, a.useId)(),
        [$, B] = (0, a.useState)(null)
      ;(H && null != $ && B(null),
        z[0] !== T ? ((n = T.split(",").map(j).filter(y)), (z[0] = T), (z[1] = n)) : (n = z[1]))
      let W = n
      z[2] !== $
        ? ((t =
            null != $ &&
            $.domains.length > 0 &&
            !$.input.trim() &&
            $.domains.every((e, n) => null == (0, b.r)(e, $.domains.slice(0, n), { purpose: "secret" }))),
          (z[2] = $),
          (z[3] = t))
        : (t = z[3])
      let F = t,
        U = null != $ && !H
      ;(z[4] !== H || z[5] !== W
        ? ((s = (e) => {
            B(e && !H ? { domains: W, input: "" } : null)
          }),
          (z[4] = H),
          (z[5] = W),
          (z[6] = s))
        : (s = z[6]),
        z[7] !== D || z[8] !== I
          ? ((c = D.formatMessage(
              {
                id: "environmentSetup.review.secret.domainsForSecret",
                defaultMessage: "Allowed domains for {name}",
                description: "Accessible label for editing the allowed destinations of a named proxy secret",
              },
              { name: I },
            )),
            (z[7] = D),
            (z[8] = I),
            (z[9] = c))
          : (c = z[9]),
        z[10] !== W.length
          ? ((u = (0, i.jsx)(h.A, {
              id: "environmentSetup.review.secret.domainCount",
              defaultMessage: "{count, plural, =0 {No domains} one {# domain} other {# domains}}",
              description: "Number of allowed destinations for a proxy secret",
              values: { count: W.length },
            })),
            (z[10] = W.length),
            (z[11] = u))
          : (u = z[11]),
        z[12] === Symbol.for("react.memo_cache_sentinel") ? ((m = (0, i.jsx)(d.Aq_, {})), (z[12] = m)) : (m = z[12]),
        z[13] !== O || z[14] !== H || z[15] !== R || z[16] !== c || z[17] !== u
          ? ((p = (0, i.jsx)(f.Wv, {
              asChild: !0,
              children: (0, i.jsxs)(l.$, {
                className: "w-full justify-between",
                "aria-label": c,
                "aria-invalid": R,
                "aria-describedby": O,
                "data-environment-invalid": R,
                color: "outline",
                size: "inputControl",
                disabled: H,
                children: [u, m],
              }),
            })),
            (z[13] = O),
            (z[14] = H),
            (z[15] = R),
            (z[16] = c),
            (z[17] = u),
            (z[18] = p))
          : (p = z[18]),
        z[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsx)(h.A, {
              id: "environmentSetup.review.secret.domains",
              defaultMessage: "Allowed domains",
              description: "Title and input label for allowed HTTPS destinations for a proxy secret",
            })),
            (z[19] = v))
          : (v = z[19]),
        z[20] !== V ? ((x = (0, i.jsx)(f.eO, { id: V, children: v })), (z[20] = V), (z[21] = x)) : (x = z[21]),
        z[22] !== H || z[23] !== $ || z[24] !== L
          ? ((S =
              null != $ &&
              (0, i.jsx)(g.Y, {
                purpose: "secret",
                disabled: H,
                readOnly: L,
                showErrors: !0,
                domains: $.domains,
                value: $.input,
                onChange: (e) => B({ ...$, domains: e }),
                onInputChange: (e) => B((n) => (null == n ? null : { ...n, input: e })),
              })),
            (z[22] = H),
            (z[23] = $),
            (z[24] = L),
            (z[25] = S))
          : (S = z[25]),
        z[26] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, i.jsx)("p", {
              className: "text-secondary",
              children: (0, i.jsx)(h.A, {
                id: "environmentSetup.review.secret.domainsHelp",
                defaultMessage: "Add at least one exact hostname that can receive this secret",
                description:
                  "Explains that proxy secrets require at least one exact destination hostname before saving",
              }),
            })),
            (z[26] = w))
          : (w = z[26]),
        z[27] !== L
          ? ((k =
              !L &&
              (0, i.jsx)(l.$, {
                color: "secondary",
                size: "compact",
                onClick: () => B(null),
                children: (0, i.jsx)(h.A, {
                  id: "environmentSetup.secret.domainsCancel",
                  defaultMessage: "Cancel",
                  description: "Discard unconfirmed changes to a secret's allowed destinations and close the popover",
                }),
              })),
            (z[27] = L),
            (z[28] = k))
          : (k = z[28]))
      let Q = !L && !F
      return (
        z[29] !== F || z[30] !== H || z[31] !== $ || z[32] !== G || z[33] !== L
          ? ((M = () => {
              ;(L || H || !F || null == $ || G($.domains.join(", ")), B(null))
            }),
            (z[29] = F),
            (z[30] = H),
            (z[31] = $),
            (z[32] = G),
            (z[33] = L),
            (z[34] = M))
          : (M = z[34]),
        z[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, i.jsx)(h.A, {
              id: "environmentSetup.secret.domainsDone",
              defaultMessage: "Done",
              description: "Close the domain picker after editing a secret's allowed hostnames",
            })),
            (z[35] = A))
          : (A = z[35]),
        z[36] !== Q || z[37] !== M
          ? ((_ = (0, i.jsx)(l.$, { color: "primary", size: "compact", disabled: Q, onClick: M, children: A })),
            (z[36] = Q),
            (z[37] = M),
            (z[38] = _))
          : (_ = z[38]),
        z[39] !== k || z[40] !== _
          ? ((C = (0, i.jsxs)("div", { className: "flex justify-end gap-2", children: [k, _] })),
            (z[39] = k),
            (z[40] = _),
            (z[41] = C))
          : (C = z[41]),
        z[42] !== x || z[43] !== S || z[44] !== C
          ? ((N = (0, i.jsxs)("div", { className: "flex flex-col gap-3 p-2 text-sm", children: [x, S, w, C] })),
            (z[42] = x),
            (z[43] = S),
            (z[44] = C),
            (z[45] = N))
          : (N = z[45]),
        z[46] !== N || z[47] !== V
          ? ((E = (0, i.jsx)(f.hl, { size: "large", variant: "menu", "aria-labelledby": V, children: N })),
            (z[46] = N),
            (z[47] = V),
            (z[48] = E))
          : (E = z[48]),
        z[49] !== E || z[50] !== U || z[51] !== s || z[52] !== p
          ? ((P = (0, i.jsxs)(f.AM, { open: U, onOpenChange: s, children: [p, E] })),
            (z[49] = E),
            (z[50] = U),
            (z[51] = s),
            (z[52] = p),
            (z[53] = P))
          : (P = z[53]),
        P
      )
    }
    function y(e) {
      return e.length > 0
    }
    function j(e) {
      return e.trim()
    }
    var S = t("MVTZ")
    function w(e) {
      let n,
        t,
        h,
        f,
        g,
        b,
        y,
        j,
        w,
        k,
        M,
        A,
        _,
        C,
        N,
        E,
        P,
        z,
        I,
        T,
        H,
        L = (0, r.c)(86),
        {
          keyInputRef: R,
          secret: O,
          issues: G,
          configuration: D,
          onChange: V,
          onDelete: $,
          readOnly: B,
          disabled: W,
          environmentOnly: F,
        } = e,
        U = void 0 !== B && B,
        Q = void 0 !== W && W,
        q = void 0 !== F && F,
        Z = (0, o.A)(),
        K = (0, a.useId)()
      if (
        L[0] !== D ||
        L[1] !== Q ||
        L[2] !== q ||
        L[3] !== K ||
        L[4] !== Z ||
        L[5] !== G ||
        L[6] !== R ||
        L[7] !== V ||
        L[8] !== U ||
        L[9] !== O
      ) {
        let e,
          r,
          s,
          a,
          o,
          l,
          d,
          p = (0, u.oj)(O)
        if (
          ((M =
            O.injectionTarget ??
            ("environment_variable" in p
              ? {
                  type: "environment_variable",
                  name: p.environment_variable,
                  domain: p.allowed_domains?.join(", ") ?? "",
                }
              : {
                  type: "http_header",
                  name: p.http_header.header_name,
                  domain: p.http_header.allowed_domains.join(", "),
                })),
          L[21] !== G || L[22] !== O.id)
        ) {
          let n
          ;(L[24] !== O.id
            ? ((n = (e) => {
                let { field: n } = e
                return n === `secret-${O.id}-key`
              }),
              (L[24] = O.id),
              (L[25] = n))
            : (n = L[25]),
            (e = G.find(n)),
            (L[21] = G),
            (L[22] = O.id),
            (L[23] = e))
        } else e = L[23]
        let x = e
        if (L[26] !== G || L[27] !== O.id) {
          let e
          ;(L[29] !== O.id
            ? ((e = (e) => {
                let { field: n } = e
                return n === `secret-${O.id}-value`
              }),
              (L[29] = O.id),
              (L[30] = e))
            : (e = L[30]),
            (r = G.find(e)),
            (L[26] = G),
            (L[27] = O.id),
            (L[28] = r))
        } else r = L[28]
        let A = r
        if (L[31] !== G || L[32] !== O.id) {
          let e
          ;(L[34] !== O.id
            ? ((e = (e) => {
                let { field: n } = e
                return n === `secret-${O.id}-domains`
              }),
              (L[34] = O.id),
              (L[35] = e))
            : (e = L[35]),
            (s = G.find(e)),
            (L[31] = G),
            (L[32] = O.id),
            (L[33] = s))
        } else s = L[33]
        ;((n = s),
          L[36] !== Z || L[37] !== O.source
            ? ((a =
                "user_provided" === O.source
                  ? Z.formatMessage({
                      id: "restricted.environmentSetup.secret.removeRequirement",
                      defaultMessage: "Remove requirement",
                      description:
                        "Button to remove a user-provided requirement from the environment without deleting a saved personal credential",
                    })
                  : Z.formatMessage({
                      id: "restricted.environmentSetup.input.secret.delete",
                      defaultMessage: "Delete secret",
                      description: "Accessible label for removing an environment secret",
                    })),
              (L[36] = Z),
              (L[37] = O.source),
              (L[38] = a))
            : (a = L[38]),
          (t = a),
          L[39] !== V || L[40] !== O
            ? ((o = (e) =>
                V({
                  ...O,
                  source: e,
                  optional: "user_provided" === e,
                  value: "",
                  serverId: void 0,
                  personalSecret: void 0,
                  isMissing: "environment" === e,
                })),
              (L[39] = V),
              (L[40] = O),
              (L[41] = o))
            : (o = L[41]))
        let _ = (0, i.jsx)(S.w, {
          attached: !0,
          name: M.name,
          source: O.source ?? "environment",
          disabled: Q || U || q,
          onChange: o,
        })
        ;((k = "flex min-w-0 flex-col gap-2"),
          (h = M.name || O.name),
          (f = "group"),
          (w = "flex min-w-0 items-start gap-2"),
          (y = "flex min-w-0 flex-1 flex-wrap items-start gap-2"),
          L[42] !== Z
            ? ((l = Z.formatMessage({
                id: "restricted.environmentSetup.input.secret.name.placeholder",
                defaultMessage: "Key",
                description: "Placeholder for a cloud environment secret key",
              })),
              (L[42] = Z),
              (L[43] = l))
            : (l = L[43]),
          L[44] !== Z
            ? ((d = Z.formatMessage({
                id: "restricted.environmentSetup.input.secret.key",
                defaultMessage: "Secret key",
                description:
                  "Accessible label for the environment variable key used by a cloud environment proxy secret",
              })),
              (L[44] = Z),
              (L[45] = d))
            : (d = L[45]),
          (j = (0, i.jsx)("div", {
            className: "min-w-0 flex-1 basis-32",
            children: (0, i.jsx)(c.pd, {
              ref: R,
              placeholder: l,
              "aria-label": d,
              "aria-invalid": null != x,
              "aria-describedby": null == x ? void 0 : `${K}-key`,
              "data-environment-invalid": null != x,
              autoComplete: "off",
              maxLength: 128,
              readOnly: U,
              value: M.name,
              variant: "segmented",
              onChange: (e) =>
                V({
                  ...O,
                  name: e.target.value,
                  personalSecret: void 0,
                  target: void 0,
                  injectionTarget: { ...M, name: e.target.value },
                }),
            }),
          })),
          (g = "min-w-0 flex-2 basis-64"),
          (b =
            "user_provided" === O.source
              ? (0, i.jsx)(
                  m.u,
                  {
                    id: `${K}-value-input`,
                    scopeControl: _,
                    ariaLabel: Z.formatMessage(
                      {
                        id: "restricted.environmentSetup.batchSecrets.value",
                        defaultMessage: "Value for {name}",
                        description: "Accessible name of a secret value input in the batch editor",
                      },
                      { name: M.name },
                    ),
                    value: O.value,
                    configuration: D,
                    namespace: "sensitive",
                    name: M.name,
                    saved: null != O.personalSecret,
                    invalid: null != A,
                    describedBy: null == A ? void 0 : `${K}-value`,
                    onChange: (e) => V({ ...O, value: e }),
                  },
                  O.source,
                )
              : (0, i.jsx)(
                  v.n,
                  {
                    id: `${K}-value-input`,
                    scopeControl: _,
                    ariaLabel: Z.formatMessage(
                      {
                        id: "restricted.environmentSetup.batchSecrets.value",
                        defaultMessage: "Value for {name}",
                        description: "Accessible name of a secret value input in the batch editor",
                      },
                      { name: M.name },
                    ),
                    value: O.value,
                    saved: null != O.serverId && !O.isMissing,
                    invalid: null != A,
                    describedBy: null == A ? void 0 : `${K}-value`,
                    onChange: (e) => V({ ...O, value: e }),
                  },
                  O.source,
                )),
          (L[0] = D),
          (L[1] = Q),
          (L[2] = q),
          (L[3] = K),
          (L[4] = Z),
          (L[5] = G),
          (L[6] = R),
          (L[7] = V),
          (L[8] = U),
          (L[9] = O),
          (L[10] = n),
          (L[11] = t),
          (L[12] = h),
          (L[13] = f),
          (L[14] = g),
          (L[15] = b),
          (L[16] = y),
          (L[17] = j),
          (L[18] = w),
          (L[19] = k),
          (L[20] = M))
      } else
        ((n = L[10]),
          (t = L[11]),
          (h = L[12]),
          (f = L[13]),
          (g = L[14]),
          (b = L[15]),
          (y = L[16]),
          (j = L[17]),
          (w = L[18]),
          (k = L[19]),
          (M = L[20]))
      L[46] !== g || L[47] !== b
        ? ((A = (0, i.jsx)("div", { className: g, children: b })), (L[46] = g), (L[47] = b), (L[48] = A))
        : (A = L[48])
      let Y = M.domain ?? "",
        X = U && ("environment_variable" !== M.type || !O.requested),
        J = null != n,
        ee = null == n ? void 0 : `${K}-domains`
      return (
        L[49] !== V || L[50] !== O || L[51] !== M
          ? ((_ = (e) => V({ ...O, target: void 0, injectionTarget: { ...M, domain: e } })),
            (L[49] = V),
            (L[50] = O),
            (L[51] = M),
            (L[52] = _))
          : (_ = L[52]),
        L[53] !== Q || L[54] !== Y || L[55] !== X || L[56] !== J || L[57] !== ee || L[58] !== _ || L[59] !== M.name
          ? ((C = (0, i.jsx)("div", {
              className: "w-36 shrink-0",
              children: (0, i.jsx)(x, {
                name: M.name,
                value: Y,
                disabled: Q,
                readOnly: X,
                invalid: J,
                describedBy: ee,
                onChange: _,
              }),
            })),
            (L[53] = Q),
            (L[54] = Y),
            (L[55] = X),
            (L[56] = J),
            (L[57] = ee),
            (L[58] = _),
            (L[59] = M.name),
            (L[60] = C))
          : (C = L[60]),
        L[61] !== A || L[62] !== C || L[63] !== y || L[64] !== j
          ? ((N = (0, i.jsxs)("div", { className: y, children: [j, A, C] })),
            (L[61] = A),
            (L[62] = C),
            (L[63] = y),
            (L[64] = j),
            (L[65] = N))
          : (N = L[65]),
        L[66] === Symbol.for("react.memo_cache_sentinel") ? ((E = (0, i.jsx)(d.cSG, {})), (L[66] = E)) : (E = L[66]),
        L[67] !== $ || L[68] !== t
          ? ((P = (0, i.jsx)(l.$, { "aria-label": t, color: "ghost", size: "icon", onClick: $, children: E })),
            (L[67] = $),
            (L[68] = t),
            (L[69] = P))
          : (P = L[69]),
        L[70] !== t || L[71] !== P
          ? ((z = (0, i.jsx)("div", {
              className: "flex h-10 w-8 shrink-0 items-center justify-center",
              children: (0, i.jsx)(s.m, { content: t, children: P }),
            })),
            (L[70] = t),
            (L[71] = P),
            (L[72] = z))
          : (z = L[72]),
        L[73] !== N || L[74] !== z || L[75] !== w
          ? ((I = (0, i.jsxs)("div", { className: w, children: [N, z] })),
            (L[73] = N),
            (L[74] = z),
            (L[75] = w),
            (L[76] = I))
          : (I = L[76]),
        L[77] !== K || L[78] !== G
          ? ((T =
              G.length > 0
                ? (0, i.jsx)("div", {
                    className: "flex flex-col gap-2",
                    children: G.map((e) =>
                      (0, i.jsx)(p.o, { id: `${K}-${e.field?.split("-").at(-1)}`, issue: e }, e.field),
                    ),
                  })
                : null),
            (L[77] = K),
            (L[78] = G),
            (L[79] = T))
          : (T = L[79]),
        L[80] !== h || L[81] !== f || L[82] !== I || L[83] !== T || L[84] !== k
          ? ((H = (0, i.jsxs)("div", { className: k, "aria-label": h, role: f, children: [I, T] })),
            (L[80] = h),
            (L[81] = f),
            (L[82] = I),
            (L[83] = T),
            (L[84] = k),
            (L[85] = H))
          : (H = L[85]),
        H
      )
    }
  },
  MVTZ(e, n, t) {
    var i = t("ABep"),
      r = t("QosV"),
      s = t("Aiub"),
      a = t("SmGe"),
      o = t("Wf1j"),
      l = t("oyxz"),
      d = t("ygO2"),
      c = t("bqtn"),
      u = t("HOLv"),
      m = t("GO7r")
    let p = { environment: s.P, user_provided: a.x }
    t.d(
      n,
      {},
      {
        W: function (e) {
          let n,
            t,
            s,
            a = (0, r.c)(10),
            { source: l, showLabel: d } = e,
            c = (0, o.A)(),
            m = "user_provided" === l
          a[0] !== c || a[1] !== m
            ? ((n = m
                ? c.formatMessage({
                    id: "environmentSetup.review.secret.personal",
                    defaultMessage: "Personal",
                    description: "Secret scope whose value belongs to the signed-in user",
                  })
                : c.formatMessage({
                    id: "environmentSetup.review.secret.environment",
                    defaultMessage: "Environment",
                    description: "Secret scope shared by users of the environment",
                  })),
              (a[0] = c),
              (a[1] = m),
              (a[2] = n))
            : (n = a[2])
          let v = n,
            h = p[l]
          a[3] !== v || a[4] !== h
            ? ((t = (0, i.jsx)(u.I, { asset: h, label: v })), (a[3] = v), (a[4] = h), (a[5] = t))
            : (t = a[5])
          let f = void 0 !== d && d ? v : null
          return (
            a[6] !== v || a[7] !== t || a[8] !== f
              ? ((s = (0, i.jsxs)("span", {
                  title: v,
                  className: "inline-flex shrink-0 items-center gap-1.5",
                  children: [t, f],
                })),
                (a[6] = v),
                (a[7] = t),
                (a[8] = f),
                (a[9] = s))
              : (s = a[9]),
            s
          )
        },
        w: function (e) {
          let n,
            t,
            s,
            a,
            v,
            h,
            f,
            g,
            b,
            x,
            y,
            j,
            S,
            w,
            k,
            M,
            A,
            _ = (0, r.c)(38),
            { name: C, source: N, disabled: E, attached: P, onChange: z } = e,
            I = void 0 !== P && P,
            T = (0, o.A)(),
            H = I ? "ghostActive" : "outline",
            L = I ? "inputSelect" : "settingsSelect"
          return (
            _[0] !== T || _[1] !== C
              ? ((n = T.formatMessage(
                  {
                    id: "environmentSetup.review.secret.scope",
                    defaultMessage: "Scope for {name}",
                    description: "Accessible label for choosing Environment or Personal scope for a named secret",
                  },
                  { name: C },
                )),
                (_[0] = T),
                (_[1] = C),
                (_[2] = n))
              : (n = _[2]),
            _[3] !== N
              ? ((t =
                  "user_provided" === N
                    ? (0, i.jsx)(l.A, {
                        id: "environmentSetup.review.secret.personal",
                        defaultMessage: "Personal",
                        description: "Secret scope whose value belongs to the signed-in user",
                      })
                    : (0, i.jsx)(l.A, {
                        id: "environmentSetup.review.secret.environment",
                        defaultMessage: "Environment",
                        description: "Secret scope shared by users of the environment",
                      })),
                (_[3] = N),
                (_[4] = t))
              : (t = _[4]),
            _[5] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, i.jsx)(m.Aq_, {})), (_[5] = s)) : (s = _[5]),
            _[6] !== E || _[7] !== H || _[8] !== L || _[9] !== n || _[10] !== t
              ? ((a = (0, i.jsxs)(d.$, {
                  className: "w-36 justify-between",
                  color: H,
                  size: L,
                  disabled: E,
                  "aria-label": n,
                  children: [t, s],
                })),
                (_[6] = E),
                (_[7] = H),
                (_[8] = L),
                (_[9] = n),
                (_[10] = t),
                (_[11] = a))
              : (a = _[11]),
            _[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = (0, i.jsx)(c.ms.SectionLabel, {
                  children: (0, i.jsx)(l.A, {
                    id: "environmentSetup.secret.typeOfKey",
                    defaultMessage: "Type of key",
                    description: "Heading for choosing Environment or Personal scope for a secret value",
                  }),
                })),
                (_[12] = v))
              : (v = _[12]),
            _[13] === Symbol.for("react.memo_cache_sentinel")
              ? ((h = (0, i.jsx)(u.I, { asset: p.environment, className: "shrink-0" })), (_[13] = h))
              : (h = _[13]),
            _[14] !== z || _[15] !== N
              ? ((f = () => "environment" !== N && z("environment")), (_[14] = z), (_[15] = N), (_[16] = f))
              : (f = _[16]),
            _[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, i.jsx)(l.A, {
                  id: "environmentSetup.review.secret.environmentHelp",
                  defaultMessage: "All users of this environment can use this value",
                  description: "Explanation of Environment secret scope",
                })),
                (b = (0, i.jsx)(l.A, {
                  id: "environmentSetup.review.secret.environment",
                  defaultMessage: "Environment",
                  description: "Secret scope shared by users of the environment",
                })),
                (_[17] = g),
                (_[18] = b))
              : ((g = _[17]), (b = _[18])),
            _[19] !== E || _[20] !== f
              ? ((x = (0, i.jsx)(c.ms.RadioItem, {
                  variant: "descriptive",
                  disabled: E,
                  icon: h,
                  value: "environment",
                  onSelect: f,
                  SubText: g,
                  children: b,
                })),
                (_[19] = E),
                (_[20] = f),
                (_[21] = x))
              : (x = _[21]),
            _[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((y = (0, i.jsx)(u.I, { asset: p.user_provided, className: "shrink-0" })), (_[22] = y))
              : (y = _[22]),
            _[23] !== z || _[24] !== N
              ? ((j = () => "user_provided" !== N && z("user_provided")), (_[23] = z), (_[24] = N), (_[25] = j))
              : (j = _[25]),
            _[26] === Symbol.for("react.memo_cache_sentinel")
              ? ((S = (0, i.jsx)(l.A, {
                  id: "environmentSetup.review.secret.personalHelp",
                  defaultMessage: "Each user can add their own key",
                  description: "Explanation of Personal scope; adding a value is optional",
                })),
                (w = (0, i.jsx)(l.A, {
                  id: "environmentSetup.review.secret.personal",
                  defaultMessage: "Personal",
                  description: "Secret scope whose value belongs to the signed-in user",
                })),
                (_[26] = S),
                (_[27] = w))
              : ((S = _[26]), (w = _[27])),
            _[28] !== E || _[29] !== j
              ? ((k = (0, i.jsx)(c.ms.RadioItem, {
                  variant: "descriptive",
                  disabled: E,
                  icon: y,
                  value: "user_provided",
                  onSelect: j,
                  SubText: S,
                  children: w,
                })),
                (_[28] = E),
                (_[29] = j),
                (_[30] = k))
              : (k = _[30]),
            _[31] !== N || _[32] !== x || _[33] !== k
              ? ((M = (0, i.jsxs)(c.ms.RadioGroup, { value: N, children: [x, k] })),
                (_[31] = N),
                (_[32] = x),
                (_[33] = k),
                (_[34] = M))
              : (M = _[34]),
            _[35] !== M || _[36] !== a
              ? ((A = (0, i.jsxs)(c.Ab, { contentWidth: "panel", triggerButton: a, children: [v, M] })),
                (_[35] = M),
                (_[36] = a),
                (_[37] = A))
              : (A = _[37]),
            A
          )
        },
      },
    )
  },
  WT8y(e, n, t) {
    var i = t("rGp2")
    t.d(
      n,
      {},
      {
        Q: function (e, n) {
          let t = new URL(`/plugins/${encodeURIComponent(e)}`, "https://chatgpt.com")
          return (
            t.searchParams.set("no_universal_links", "1"),
            1 === n && (t.hash = `settings/Plugins/${encodeURIComponent(e)}?product-sku=CODEX`),
            t.toString()
          )
        },
        x: function ({ appId: e, installUrl: n, remotePluginId: t }) {
          let r = new URL(
            null == t ? "/plugins" : `/plugins/${encodeURIComponent(t)}`,
            n?.trim() || "https://chatgpt.com",
          )
          return (
            r.searchParams.set("no_universal_links", "1"),
            (r.hash =
              null == t
                ? `settings/Connectors?${new URLSearchParams({ connector: e, "product-sku": (0, i.MR)(), referrer: "codex" })}`
                : `settings/Plugins/${encodeURIComponent(t)}?product-sku=CODEX`),
            r.toString()
          )
        },
      },
    )
  },
  mYWF(e, n, t) {
    var i = t("DBCl"),
      r = t("rGp2"),
      s = t("hOO0"),
      a = t("ReGc"),
      o = t("WT8y")
    t.d(
      n,
      { Y2: () => o.x, x1: () => o.Q },
      {
        Hd: async function (e, { appId: n, appName: t }) {
          let o = await e.query.getOrFetch(a.a)
          return new URL(
            (0, r.Cj)({ id: (0, s.$)(n), name: t, installUrl: new URL(o.chatGptDesktopAuthOrigin ?? i.WaA).origin }),
          )
        },
      },
    )
  },
  BSnr(e, n, t) {
    t.d(n, { X: () => a })
    var i = t("ABep"),
      r = t("QosV"),
      s = t("on57")
    let a = Object.assign(
      function (e) {
        let n,
          t,
          a = (0, r.c)(6),
          { children: o, id: l, className: d } = e
        return (
          a[0] !== d ? ((n = (0, s.A)("flex flex-col", d)), (a[0] = d), (a[1] = n)) : (n = a[1]),
          a[2] !== o || a[3] !== l || a[4] !== n
            ? ((t = (0, i.jsx)("section", { id: l, className: n, children: o })),
              (a[2] = o),
              (a[3] = l),
              (a[4] = n),
              (a[5] = t))
            : (t = a[5]),
          t
        )
      },
      {
        Header: function (e) {
          let n,
            t,
            a,
            o,
            l,
            d,
            c,
            u = (0, r.c)(32),
            {
              title: m,
              subtitle: p,
              actions: v,
              actionsAlignment: h,
              className: f,
              size: g,
              titleGap: b,
              spacing: x,
              subtitlePlacement: y,
              subtitleWrap: j,
            } = e,
            S = void 0 === g ? "default" : g,
            w = void 0 === x ? "default" : x,
            k = void 0 === y ? "below-title" : y,
            M = void 0 === j ? "balance" : j,
            A = null != m,
            _ = null != p,
            C = null != v,
            N = "compact" === S
          u[0] !== N || u[1] !== p || u[2] !== k || u[3] !== M
            ? ((n = p
                ? (0, i.jsx)("div", {
                    className: (0, s.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === M ? "text-balance" : "text-wrap",
                      N ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === k && "w-full",
                    ),
                    children: p,
                  })
                : null),
              (u[0] = N),
              (u[1] = p),
              (u[2] = k),
              (u[3] = M),
              (u[4] = n))
            : (n = u[4])
          let E = n
          if (!A && !_ && !C) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(i.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let P = "below-header" === k ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            z = _ && "compact" === w && "pb-2",
            I = _ && "compact" !== w && "pb-3"
          u[6] !== f || u[7] !== _ || u[8] !== N || u[9] !== w || u[10] !== P || u[11] !== z || u[12] !== I
            ? ((t = (0, s.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                P,
                z,
                I,
                !_ && (0, s.A)("items-center pb-1.5", "compact" === w ? "min-h-8" : "min-h-toolbar"),
                _ && N && "items-center",
                _ && !N && "items-start",
                f,
              )),
              (u[6] = f),
              (u[7] = _),
              (u[8] = N),
              (u[9] = w),
              (u[10] = P),
              (u[11] = z),
              (u[12] = I),
              (u[13] = t))
            : (t = u[13])
          let T =
            "none" === (void 0 === b ? "default" : b)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== T ? ((a = (0, s.A)("flex min-w-0 flex-1 flex-col", T)), (u[14] = T), (u[15] = a)) : (a = u[15]),
            u[16] !== _ || u[17] !== S || u[18] !== m
              ? ((o = m
                  ? (0, i.jsx)("div", {
                      className: (0, s.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === S && "text-sm leading-[18px]",
                        ("large" === S || ("default" === S && _)) && "text-lg",
                        ("base" === S || ("default" === S && !_)) && "text-base",
                      ),
                      children: m,
                    })
                  : null),
                (u[16] = _),
                (u[17] = S),
                (u[18] = m),
                (u[19] = o))
              : (o = u[19]))
          let H = "below-title" === k ? E : null
          ;(u[20] !== a || u[21] !== o || u[22] !== H
            ? ((l = (0, i.jsxs)("div", { className: a, children: [o, H] })),
              (u[20] = a),
              (u[21] = o),
              (u[22] = H),
              (u[23] = l))
            : (l = u[23]),
            u[24] !== v || u[25] !== h
              ? ((d = v
                  ? (0, i.jsx)("div", {
                      className: (0, s.A)("flex items-center gap-2", "end" === h && "self-end"),
                      children: v,
                    })
                  : null),
                (u[24] = v),
                (u[25] = h),
                (u[26] = d))
              : (d = u[26]))
          let L = "below-header" === k ? E : null
          return (
            u[27] !== t || u[28] !== l || u[29] !== d || u[30] !== L
              ? ((c = (0, i.jsxs)("div", { className: t, children: [l, d, L] })),
                (u[27] = t),
                (u[28] = l),
                (u[29] = d),
                (u[30] = L),
                (u[31] = c))
              : (c = u[31]),
            c
          )
        },
        Content: function (e) {
          let n,
            t,
            a = (0, r.c)(5),
            { children: o, className: l } = e
          return (
            a[0] !== l ? ((n = (0, s.A)("flex flex-col gap-1.5", l)), (a[0] = l), (a[1] = n)) : (n = a[1]),
            a[2] !== o || a[3] !== n
              ? ((t = (0, i.jsx)("div", { className: n, children: o })), (a[2] = o), (a[3] = n), (a[4] = t))
              : (t = a[4]),
            t
          )
        },
        Footer: function (e) {
          let n,
            t,
            a = (0, r.c)(6),
            { children: o, className: l, variant: d } = e,
            c =
              "action" === (void 0 === d ? "description" : d)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            a[0] !== l || a[1] !== c
              ? ((n = (0, s.A)("text-balance text-secondary", c, l)), (a[0] = l), (a[1] = c), (a[2] = n))
              : (n = a[2]),
            a[3] !== o || a[4] !== n
              ? ((t = (0, i.jsx)("div", { className: n, children: o })), (a[3] = o), (a[4] = n), (a[5] = t))
              : (t = a[5]),
            t
          )
        },
      },
    )
  },
  SmGe(e, n, t) {
    let i = (0, t("nkTT").a)({
      name: "person-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 2.343018, y: 1.311279, width: 11.313484, height: 13.236328 },
        visualBounds: { x: 2.343018, y: 1.311279, width: 11.313484, height: 13.236328 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.343018, y: 1.311279, width: 11.313484, height: 13.236328 },
        center: { x: 7.99976, y: 7.929443 },
        insets: { top: 1.311279, right: 2.343498, bottom: 1.452393, left: 2.343018 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.99976, y: 7.929443 }, foreground: { x: 7.99976, y: 7.929443 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8.00025 8.79761C10.9675 8.79777 13.4025 11.0751 13.6545 13.9773C13.6794 14.2659 13.4657 14.5205 13.177 14.5457C12.8883 14.5707 12.6339 14.3567 12.6086 14.0681C12.4033 11.7038 10.4181 9.84855 8.00025 9.84839C5.58227 9.8484 3.59718 11.7037 3.39185 14.0681C3.36657 14.3568 3.11124 14.5707 2.82251 14.5457C2.53405 14.5204 2.32018 14.2658 2.34497 13.9773C2.59702 11.075 5.03284 8.79762 8.00025 8.79761Z" fill="currentColor"/> <path d="M8.00025 1.31128C9.75704 1.31137 11.1809 2.73611 11.1809 4.49292C11.1808 6.24966 9.75698 7.6735 8.00025 7.67358C6.24343 7.67358 4.81869 6.24971 4.81861 4.49292C4.81861 2.73605 6.24338 1.31128 8.00025 1.31128ZM8.00025 2.36206C6.82328 2.36206 5.86939 3.31595 5.86939 4.49292C5.86947 5.66981 6.82333 6.62378 8.00025 6.62378C9.17708 6.62369 10.131 5.66976 10.1311 4.49292C10.1311 3.31601 9.17714 2.36215 8.00025 2.36206Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    t.d(n, {}, { x: i })
  },
}
//# sourceMappingURL=922492.8f97ddc9a7.js.map
