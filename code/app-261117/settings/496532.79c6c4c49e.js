export const __rspack_esm_ids = [496532]
export const __webpack_modules__ = {
  Dkb2(e, s, t) {
    var a = t("ABep"),
      n = t("QosV"),
      l = t("oyxz"),
      i = t("X3K1"),
      r = t("BSnr"),
      o = t("AWNZ"),
      c = t("ZEx5")
    function d(e) {
      let { key: s, rows: t } = e
      return (0, a.jsxs)(
        r.X,
        {
          children: [
            (0, a.jsx)(r.X.Header, {
              title: (0, a.jsx)(i.X, { className: "w-32", size: "lg" }),
              subtitle: (0, a.jsx)(i.X, { className: "mt-2 w-1/2", size: "sm" }),
            }),
            (0, a.jsx)(r.X.Content, {
              children: (0, a.jsx)(c.t, { variant: "flat", children: Array.from({ length: t }, u) }),
            }),
          ],
        },
        s,
      )
    }
    function u(e, s) {
      return (0, a.jsx)(
        o.ic,
        {
          layout: "split",
          label: (0, a.jsx)(i.X, { className: "w-24", size: "md" }),
          description: (0, a.jsx)(i.X, { className: "mt-2 w-40", size: "sm" }),
          control: (0, a.jsx)("div", { className: "h-9 w-40", children: (0, a.jsx)(i.X, { size: "fill" }) }),
        },
        s,
      )
    }
    t.d(
      s,
      {},
      {
        U: function () {
          let e,
            s = (0, n.c)(1)
          return (
            s[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsxs)("div", {
                  className: "flex flex-col gap-10",
                  "aria-busy": "true",
                  role: "status",
                  children: [
                    (0, a.jsx)("span", {
                      className: "sr-only",
                      children: (0, a.jsx)(l.A, {
                        id: "appgenSettings.loading",
                        defaultMessage: "Loading site settings\u2026",
                      }),
                    }),
                    [
                      { key: "general", rows: 5 },
                      { key: "environment", rows: 2 },
                      { key: "danger", rows: 1 },
                    ].map(d),
                  ],
                })),
                (s[0] = e))
              : (e = s[0]),
            e
          )
        },
      },
    )
  },
  Gyao(e, s, t) {
    t.d(s, { Y: () => ee })
    var a = t("ABep"),
      n = t("QosV"),
      l = t("ne8d"),
      i = t("slpy"),
      r = t("uteA"),
      o = t("irkb"),
      c = t("T0Rc"),
      d = t("qmMi"),
      u = t("zd8w"),
      m = t("Wf1j"),
      g = t("oyxz"),
      f = t("Ywss"),
      x = t("va0r"),
      p = t("MeAu"),
      h = t("Sm6l"),
      b = t("ZtSy"),
      y = t("Ot7V"),
      v = t("HOLv"),
      j = t("bVeK"),
      N = t("FrrB"),
      _ = t("X3K1"),
      C = t("BrP7"),
      S = t("Q8aV"),
      w = t("Dxqv"),
      M = t("OWtl"),
      A = t("hZax"),
      k = t("OMIV"),
      E = t("Wuyk"),
      I = t("eShZ"),
      z = t("AN1G"),
      P = t("vBcg"),
      B = t("cyb2"),
      T = t("B0Vf"),
      G = t("SQbA"),
      D = t("l5Vd"),
      R = t("Dkb2"),
      X = t("J8LM"),
      L = t("QGkM"),
      W = t("bBU4"),
      V = t("b3Qd"),
      O = t("XKfB")
    let K = (0, t("Qgfj").YK)({ navigation: { id: "appgenPlugins.navigation", defaultMessage: "Plugins" } })
    var Q = t("Cemj"),
      U = t("LJbP"),
      $ = t("nJU9")
    let Z = "appgen-site-detail-analytics",
      F = "appgen-site-detail-database",
      Y = "appgen-site-detail-automations",
      H = "appgen-site-detail-plugins",
      q = "appgen-site-detail-settings",
      J = (0, u.createContext)(null)
    function ee(e) {
      let s,
        t = (0, n.c)(7),
        l = (0, u.useContext)(J)
      if (null != l) {
        let s, n
        return (
          t[0] !== l || t[1] !== e.children
            ? ((s = e.children(l)), (t[0] = l), (t[1] = e.children), (t[2] = s))
            : (s = t[2]),
          t[3] !== s ? ((n = (0, a.jsx)(a.Fragment, { children: s })), (t[3] = s), (t[4] = n)) : (n = t[4]),
          n
        )
      }
      return (
        t[5] !== e
          ? ((s = (0, a.jsx)(u.Suspense, {
              fallback: (0, a.jsx)(es, { ...e, loadingOnly: !0 }, e.projectId),
              children: (0, a.jsx)(es, { ...e }, e.projectId),
            })),
            (t[5] = e),
            (t[6] = s))
          : (s = t[6]),
        s
      )
    }
    function es(e) {
      let s,
        t,
        i,
        r,
        p,
        h,
        b,
        y,
        v,
        j,
        N,
        w,
        T,
        V,
        Q,
        ee,
        es,
        el,
        er,
        eo,
        ec,
        ed,
        eu,
        em = (0, n.c)(140),
        { children: eg, loadingOnly: ef, navigation: ex, prefetchTab: ep, projectId: eh, selectedTab: eb } = e,
        ey = void 0 !== ef && ef,
        ev = (0, d.gh)(M.u),
        ej = (0, o.jE)(),
        eN = (0, f.Zp)(),
        e_ = (0, u.useRef)(null),
        eC = (0, f.zy)(),
        eS = (0, f.wQ)(),
        ew = (0, u.useRef)(null)
      ;(em[0] !== eC.key || em[1] !== eh || em[2] !== eb
        ? ((s = () => {
            "analytics" === eb ? (0, P.qW)(ew, eh, eC.key) : (ew.current = null)
          }),
          (t = [eh, eC.key, eb]),
          (em[0] = eC.key),
          (em[1] = eh),
          (em[2] = eb),
          (em[3] = s),
          (em[4] = t))
        : ((s = em[3]), (t = em[4])),
        (0, u.useLayoutEffect)(s, t))
      let eM = (0, m.A)(),
        [eA, ek] = (0, u.useState)(!1),
        [eE, eI] = (0, u.useState)("settings" === eb)
      eE && "settings" !== eb && eI(!1)
      let ez = (0, S.p8)(),
        eP = (0, A.Zj)("1855826876"),
        eB = (0, A.DR)("1855826876"),
        eT = (0, d.Ul)(k.RS),
        eG = (0, A.Zj)("262557526")
      em[5] !== eh ? ((i = (0, L.cf)(eh)), (em[5] = eh), (em[6] = i)) : (i = em[6])
      let { data: eD, error: eR, isError: eX, isLoading: eL, refetch: eW } = (0, c.I)(i)
      em[7] !== eR || em[8] !== eX || em[9] !== eD
        ? ((r = eX && (null == eD || !(0, E.kh)(0, eR))), (em[7] = eR), (em[8] = eX), (em[9] = eD), (em[10] = r))
        : (r = em[10])
      let eV = r
      if (null != eD) p = eD
      else if (eL) {
        let e
        ;(em[11] !== eh || em[12] !== ej
          ? ((e = (0, L.D3)(ej, eh)), (em[11] = eh), (em[12] = ej), (em[13] = e))
          : (e = em[13]),
          (p = e))
      }
      let eO = null != eD,
        eK = "settings" === eb && eO
      em[14] !== eK ? ((h = { enabled: eK }), (em[14] = eK), (em[15] = h)) : (h = em[15])
      let { isLoading: eQ } = (0, d._U)(G.ny, eh, h)
      em[16] !== eh || em[17] !== ev || em[18] !== eb
        ? ((b = () => {
            let e
            switch (eb) {
              case "plugins":
              case "automations":
                return
              case "analytics":
                e = B.qD.CODEX_APPGEN_INTERACTION_PAGE_ANALYTICS
                break
              case "database":
                e = B.qD.CODEX_APPGEN_INTERACTION_PAGE_DATABASE
                break
              case "settings":
                e = B.qD.CODEX_APPGEN_INTERACTION_PAGE_SETTINGS
            }
            ;(0, B.Q_)(ev, {
              action: B.lX.CODEX_APPGEN_INTERACTION_ACTION_PAGE_VIEWED,
              page: e,
              projectId: eh,
              source: B.Mz.CODEX_APPGEN_INTERACTION_SOURCE_SITE_DETAILS,
            })
          }),
          (em[16] = eh),
          (em[17] = ev),
          (em[18] = eb),
          (em[19] = b))
        : (b = em[19])
      let eU = (0, u.useEffectEvent)(b),
        e$ =
          null == eD ||
          ey ||
          eL ||
          eV ||
          ("settings" === eb && !eO) ||
          "automations" === eb ||
          "plugins" === eb ||
          ("analytics" === eb && !eG)
            ? null
            : `${eD.id}:${eb}`
      ;(em[20] !== eU || em[21] !== e$
        ? ((y = () => {
            null != e$ && eU()
          }),
          (em[20] = eU),
          (em[21] = e$),
          (em[22] = y))
        : (y = em[22]),
        em[23] !== e$ ? ((v = [e$]), (em[23] = e$), (em[24] = v)) : (v = em[24]),
        (0, u.useEffect)(y, v))
      let eZ = "plugins" === eb && (eT || eB),
        eF = eL || ey || eZ || (eE && "settings" === eb && eQ)
      if (eF) {
        let e
        ;(em[25] !== eh || em[26] !== ej
          ? ((e = (0, L.D3)(ej, eh)), (em[25] = eh), (em[26] = ej), (em[27] = e))
          : (e = em[27]),
          (p = e))
      }
      let eY = eD?.status === "suspended" ? null : eD?.live_url
      if (
        ("plugins" === eb && null != eD && "owner" !== eD.current_user_role) ||
        (eR instanceof I.FetchError && (403 === eR.status || 404 === eR.status))
      ) {
        let e
        return (
          em[28] !== ex
            ? ((e = (0, a.jsx)(X.n, { navigation: ex, to: D.ye })), (em[28] = ex), (em[29] = e))
            : (e = em[29]),
          e
        )
      }
      if ("plugins" === eb && !eZ && !eP) {
        let e, s
        return (
          em[30] !== eh ? ((e = (0, D.SJ)(eh)), (em[30] = eh), (em[31] = e)) : (e = em[31]),
          em[32] !== ex || em[33] !== e
            ? ((s = (0, a.jsx)(X.n, { navigation: ex, to: e })), (em[32] = ex), (em[33] = e), (em[34] = s))
            : (s = em[34]),
          s
        )
      }
      if (
        (em[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = {
              key: "settings",
              name: (0, a.jsx)(g.A, { id: "appgenSiteDetail.navigation.settings", defaultMessage: "Settings" }),
              panelId: q,
            }),
            (em[35] = j))
          : (j = em[35]),
        em[36] !== eG || em[37] !== eO || em[38] !== eP || em[39] !== eb || em[40] !== eD?.current_user_role)
      ) {
        let e
        if (((N = [j]), eG || "analytics" === eb)) {
          let e
          ;(em[42] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = {
                key: "analytics",
                name: (0, a.jsx)(g.A, { id: "appgenSiteDetail.navigation.analytics", defaultMessage: "Analytics" }),
                panelId: Z,
              }),
              (em[42] = e))
            : (e = em[42]),
            N.push(e))
        }
        if (
          (em[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = {
                key: "database",
                name: (0, a.jsx)(g.A, { id: "appgenSiteDetail.navigation.database", defaultMessage: "Database" }),
                panelId: F,
              }),
              (em[43] = e))
            : (e = em[43]),
          N.push(e),
          eP && eD?.current_user_role === "owner")
        ) {
          let e
          ;(em[44] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = { key: "plugins", name: (0, a.jsx)(g.A, { ...K.navigation }), panelId: H }), (em[44] = e))
            : (e = em[44]),
            N.push(e))
        }
        if (eO) {
          let e
          ;(em[45] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = {
                key: "automations",
                name: (0, a.jsx)(g.A, { id: "appgenSiteDetail.navigation.automations", defaultMessage: "Scheduled" }),
                panelId: Y,
              }),
              (em[45] = e))
            : (e = em[45]),
            N.push(e))
        }
        ;((em[36] = eG), (em[37] = eO), (em[38] = eP), (em[39] = eb), (em[40] = eD?.current_user_role), (em[41] = N))
      } else N = em[41]
      switch (eb) {
        case "plugins": {
          let e
          ;((w = H),
            em[46] !== eM ? ((e = eM.formatMessage(K.navigation)), (em[46] = eM), (em[47] = e)) : (e = em[47]),
            (T = e))
          break
        }
        case "automations": {
          let e
          ;((w = Y),
            em[48] !== eM
              ? ((e = eM.formatMessage({ id: "appgenSiteDetail.navigation.automations", defaultMessage: "Scheduled" })),
                (em[48] = eM),
                (em[49] = e))
              : (e = em[49]),
            (T = e))
          break
        }
        case "settings": {
          let e
          ;((w = q),
            em[50] !== eM
              ? ((e = eM.formatMessage({ id: "appgenSiteDetail.navigation.settings", defaultMessage: "Settings" })),
                (em[50] = eM),
                (em[51] = e))
              : (e = em[51]),
            (T = e))
          break
        }
        case "analytics": {
          let e
          ;((w = Z),
            em[52] !== eM
              ? ((e = eM.formatMessage({ id: "appgenSiteDetail.navigation.analytics", defaultMessage: "Analytics" })),
                (em[52] = eM),
                (em[53] = e))
              : (e = em[53]),
            (T = e))
          break
        }
        case "database": {
          let e
          ;((w = F),
            em[54] !== eM
              ? ((e = eM.formatMessage({ id: "appgenSiteDetail.navigation.database", defaultMessage: "Database" })),
                (em[54] = eM),
                (em[55] = e))
              : (e = em[55]),
            (T = e))
        }
      }
      em[56] !== eY || em[57] !== ev || em[58] !== eF || em[59] !== eD || em[60] !== ez
        ? ((V =
            null == eD || eF
              ? void 0
              : () => {
                  ;((0, B.Q_)(ev, {
                    action: B.lX.CODEX_APPGEN_INTERACTION_ACTION_EDIT_WITH_CHAT_CLICKED,
                    projectId: eD.id,
                    source: B.Mz.CODEX_APPGEN_INTERACTION_SOURCE_SITE_DETAILS,
                  }),
                    (0, $.$)(ev, ez, {
                      type: "edit",
                      liveUrl: eY,
                      projectId: eD.id,
                      projectTitle: eD.title,
                      latestEditContext: eD.latest_edit_context,
                    }))
                }),
          (em[56] = eY),
          (em[57] = ev),
          (em[58] = eF),
          (em[59] = eD),
          (em[60] = ez),
          (em[61] = V))
        : (V = em[61])
      let eH = V
      ;(em[62] !== eN || em[63] !== ex?.onNavigate
        ? ((Q = () => {
            ;(ex?.onNavigate ?? eN)("/sites")
          }),
          (em[62] = eN),
          (em[63] = ex?.onNavigate),
          (em[64] = Q))
        : (Q = em[64]),
        em[65] !== p || em[66] !== eH || em[67] !== Q
          ? ((ee = (0, a.jsx)(ea, { site: p, onBack: Q, onEdit: eH })),
            (em[65] = p),
            (em[66] = eH),
            (em[67] = Q),
            (em[68] = ee))
          : (ee = em[68]))
      let eq = ee
      if (eF) {
        let e, s, t
        if ("settings" === eb) {
          let s
          ;(em[69] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("div", {
                    className: "border-b border-subtle pb-6",
                    "aria-hidden": !0,
                    children: (0, a.jsxs)("div", {
                      className: "flex items-center gap-4",
                      children: [
                        (0, a.jsx)("div", { className: "h-9 w-24", children: (0, a.jsx)(_.X, { size: "fill" }) }),
                        (0, a.jsx)(_.X, { className: "w-24" }),
                      ],
                    }),
                  }),
                  (0, a.jsx)(R.U, {}),
                ],
              })),
              (em[69] = s))
            : (s = em[69]),
            (e = s))
        } else if ("plugins" === eb) {
          let s
          ;(em[70] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(O.g, {})), (em[70] = s))
            : (s = em[70]),
            (e = s))
        } else if ("analytics" === eb) {
          let s
          ;(em[71] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(z.DV, { showIdentity: !1 })), (em[71] = s))
            : (s = em[71]),
            (e = s))
        } else {
          let s, t
          ;(em[72] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)("div", {
                className: "border-b border-subtle pb-6",
                "aria-hidden": !0,
                children: (0, a.jsx)("div", { className: "h-9 w-24", children: (0, a.jsx)(_.X, { size: "fill" }) }),
              })),
              (em[72] = s))
            : (s = em[72]),
            em[73] !== eb
              ? ((t = (0, a.jsxs)(a.Fragment, { children: [s, (0, a.jsx)(W.yW, { tab: eb })] })),
                (em[73] = eb),
                (em[74] = t))
              : (t = em[74]),
            (e = t))
        }
        ;(em[75] !== p
          ? ((s =
              null == p
                ? (0, a.jsxs)("div", {
                    className: "mb-2 flex min-w-0 items-center gap-4",
                    "aria-hidden": !0,
                    children: [
                      (0, a.jsx)("div", {
                        className: "aspect-video w-28 shrink-0",
                        children: (0, a.jsx)(_.X, { size: "fill" }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "flex min-w-0 flex-1 flex-col gap-2",
                        children: [
                          (0, a.jsx)(_.X, { className: "w-1/2", size: "lg" }),
                          (0, a.jsx)(_.X, { className: "w-2/3", size: "sm" }),
                        ],
                      }),
                    ],
                  })
                : (0, a.jsx)(en, { site: p }, p.id)),
            (em[75] = p),
            (em[76] = s))
          : (s = em[76]),
          em[77] !== e || em[78] !== s
            ? ((t = (0, a.jsxs)(a.Fragment, { children: [s, e] })), (em[77] = e), (em[78] = s), (em[79] = t))
            : (t = em[79]),
          (es = t))
      } else if (eV || null == eD) {
        let e
        ;(em[80] !== eW
          ? ((e = (0, a.jsx)(ei, { onRetry: () => void eW() })), (em[80] = eW), (em[81] = e))
          : (e = em[81]),
          (es = e))
      } else {
        let e, s, t, n, l, i, r, o, c
        if ("settings" === eb) {
          let s
          ;(em[82] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(R.U, {})), (em[82] = s))
            : (s = em[82]),
            (e = s))
        } else if ("analytics" === eb) {
          let s
          ;(em[83] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(z.RE, {})), (em[83] = s))
            : (s = em[83]),
            (e = s))
        } else if ("plugins" === eb) {
          let s
          ;(em[84] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(O.g, {})), (em[84] = s))
            : (s = em[84]),
            (e = s))
        } else {
          let s
          ;(em[85] !== eb ? ((s = (0, a.jsx)(W.yW, { tab: eb })), (em[85] = eb), (em[86] = s)) : (s = em[86]), (e = s))
        }
        ;(em[87] !== eD ? ((s = (0, a.jsx)(en, { site: eD }, eD.id)), (em[87] = eD), (em[88] = s)) : (s = em[88]),
          em[89] !== eM
            ? ((t = eM.formatMessage({ id: "appgenSiteDetail.navigation.label", defaultMessage: "Site details" })),
              (em[89] = eM),
              (em[90] = t))
            : (t = em[90]),
          em[91] !== eN || em[92] !== ex?.onNavigate || em[93] !== ep || em[94] !== eh
            ? ((n = (e) => {
                let s
                switch (e) {
                  case "plugins":
                    s = (0, D.hY)(eh)
                    break
                  case "automations":
                    s = (0, D.J6)(eh)
                    break
                  case "settings":
                    s = (0, D.SJ)(eh)
                    break
                  case "analytics":
                    s = (0, D.hI)(eh)
                    break
                  case "database":
                    s = (0, D.ck)(eh)
                }
                ;(ep?.(e).catch(et), (ex?.onNavigate ?? eN)(s))
              }),
              (em[91] = eN),
              (em[92] = ex?.onNavigate),
              (em[93] = ep),
              (em[94] = eh),
              (em[95] = n))
            : (n = em[95]),
          em[96] !== eb || em[97] !== t || em[98] !== n || em[99] !== N
            ? ((l = (0, a.jsx)("div", {
                className: "pb-6",
                children: (0, a.jsx)(C.t, {
                  ariaLabel: t,
                  selectedKey: eb,
                  tabs: N,
                  scrollable: !0,
                  variant: "browse",
                  onSelect: n,
                }),
              })),
              (em[96] = eb),
              (em[97] = t),
              (em[98] = n),
              (em[99] = N),
              (em[100] = l))
            : (l = em[100]),
          em[101] !== eg || em[102] !== eE || em[103] !== eb || em[104] !== eD || em[105] !== e
            ? ((i = "settings" === eb && eE ? eg(eD) : (0, a.jsx)(u.Suspense, { fallback: e, children: eg(eD) }, eb)),
              (em[101] = eg),
              (em[102] = eE),
              (em[103] = eb),
              (em[104] = eD),
              (em[105] = e),
              (em[106] = i))
            : (i = em[106]),
          em[107] !== eD || em[108] !== i
            ? ((r = (0, a.jsx)(J, { value: eD, children: i })), (em[107] = eD), (em[108] = i), (em[109] = r))
            : (r = em[109]),
          em[110] !== w || em[111] !== T || em[112] !== r
            ? ((o = (0, a.jsx)("div", { id: w, "aria-label": T, role: "tabpanel", children: r })),
              (em[110] = w),
              (em[111] = T),
              (em[112] = r),
              (em[113] = o))
            : (o = em[113]),
          em[114] !== s || em[115] !== l || em[116] !== o
            ? ((c = (0, a.jsxs)(a.Fragment, { children: [s, l, o] })),
              (em[114] = s),
              (em[115] = l),
              (em[116] = o),
              (em[117] = c))
            : (c = em[117]),
          (es = c))
      }
      return (
        em[118] !== eV || em[119] !== eF || em[120] !== eD
          ? ((el = "ready"),
            eF ? (el = "loading") : (eV || !eD) && (el = "error"),
            (em[118] = eV),
            (em[119] = eF),
            (em[120] = eD),
            (em[121] = el))
          : (el = em[121]),
        em[122] !== eC.key ||
        em[123] !== eC.state ||
        em[124] !== eS ||
        em[125] !== eh ||
        em[126] !== eb ||
        em[127] !== el
          ? ((er = (0, a.jsx)(U.U, {
              observeShell: (e) => {
                if (e_.current && "analytics" === eb)
                  return (0, P.zF)(e_.current, e, () => {
                    ew.current?.scope === e &&
                      (0, l.jF)("codex_sites", eh, eS === f.rc.Push, (0, P.oH)(eC.state), eC.key, el)
                  })
              },
            })),
            (em[122] = eC.key),
            (em[123] = eC.state),
            (em[124] = eS),
            (em[125] = eh),
            (em[126] = eb),
            (em[127] = el),
            (em[128] = er))
          : (er = em[128]),
        em[129] !== eq || em[130] !== eA || em[131] !== ex
          ? ((eo =
              null != ex
                ? eq
                : (0, a.jsxs)(a.Fragment, {
                    children: [
                      null,
                      (0, a.jsx)(a.Fragment, { children: (0, a.jsx)(x.FL, { separator: eA, children: eq }) }),
                    ],
                  })),
            (em[129] = eq),
            (em[130] = eA),
            (em[131] = ex),
            (em[132] = eo))
          : (eo = em[132]),
        em[133] === Symbol.for("react.memo_cache_sentinel")
          ? ((ec = (e) => {
              ek(e.currentTarget.scrollTop > 0)
            }),
            (em[133] = ec))
          : (ec = em[133]),
        em[134] !== es
          ? ((ed = (0, a.jsx)("div", {
              className: "min-h-0 flex-1 scrollbar-stable overflow-y-auto px-panel pt-panel pb-panel md:pt-16",
              onScroll: ec,
              children: (0, a.jsx)("div", {
                className: "mx-auto flex w-full max-w-3xl flex-col gap-6 pb-8",
                children: es,
              }),
            })),
            (em[134] = es),
            (em[135] = ed))
          : (ed = em[135]),
        em[136] !== er || em[137] !== eo || em[138] !== ed
          ? ((eu = (0, a.jsxs)("div", {
              className: "flex h-full min-h-0 flex-col bg-surface",
              ref: e_,
              children: [er, eo, ed],
            })),
            (em[136] = er),
            (em[137] = eo),
            (em[138] = ed),
            (em[139] = eu))
          : (eu = em[139]),
        eu
      )
    }
    function et() {}
    function ea(e) {
      let s,
        t,
        l,
        i,
        r,
        o,
        c,
        u,
        m = (0, n.c)(19),
        { onBack: f, onEdit: x, site: b } = e,
        v = (0, d.gh)(M.u),
        N = b?.status === "suspended" ? null : b?.live_url
      m[0] !== N || m[1] !== v ? ((s = (0, Q.t)(v, N)), (m[0] = N), (m[1] = v), (m[2] = s)) : (s = m[2])
      let _ = s
      return (
        m[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(j.z_d, { className: "rtl:rotate-180" })),
            (l = (0, a.jsx)(g.A, { id: "appgenSiteDetail.header.sites", defaultMessage: "Sites" })),
            (m[3] = t),
            (m[4] = l))
          : ((t = m[3]), (l = m[4])),
        m[5] !== f
          ? ((i = (0, a.jsxs)(h.$, { color: "ghostActive", size: "toolbar", onClick: f, children: [t, l] })),
            (m[5] = f),
            (m[6] = i))
          : (i = m[6]),
        m[7] !== N || m[8] !== _
          ? ((r =
              null == N
                ? null
                : (0, a.jsxs)(h.z, {
                    color: "outlineSurface",
                    href: N,
                    size: "toolbar",
                    onClick: (e) => {
                      _(e) || (0, y.PQ)({ event: e, href: N, initiator: "sites_library", openAsWebsite: !0 })
                    },
                    children: [
                      (0, a.jsx)(j.NSk, {}),
                      (0, a.jsx)(g.A, { id: "appgenSiteDetail.visit", defaultMessage: "Visit" }),
                    ],
                  })),
            (m[7] = N),
            (m[8] = _),
            (m[9] = r))
          : (r = m[9]),
        m[10] !== x || m[11] !== b
          ? ((o = null == b || null == x ? null : (0, a.jsx)(el, { site: b, onEdit: x })),
            (m[10] = x),
            (m[11] = b),
            (m[12] = o))
          : (o = m[12]),
        m[13] !== r || m[14] !== o
          ? ((c = (0, a.jsxs)(p.hq, { children: [r, o] })), (m[13] = r), (m[14] = o), (m[15] = c))
          : (c = m[15]),
        m[16] !== i || m[17] !== c
          ? ((u = (0, a.jsxs)(p.oE, { children: [i, c] })), (m[16] = i), (m[17] = c), (m[18] = u))
          : (u = m[18]),
        u
      )
    }
    function en(e) {
      let s,
        t,
        l,
        i,
        r,
        o,
        c,
        d,
        m = (0, n.c)(20),
        { site: g } = e,
        { data: f, isLoading: x } = (0, G.Xm)(g.screenshot_url),
        [p, h] = (0, u.useState)(f),
        y = null == g.screenshot_url ? void 0 : (f ?? p)
      y !== p && h(y)
      let v = "suspended" === g.status ? null : g.live_url
      if (null != y) {
        let e
        ;(m[0] !== y
          ? ((e = (0, a.jsx)("img", { alt: "", className: "size-full object-cover", src: y })), (m[0] = y), (m[1] = e))
          : (e = m[1]),
          (s = e))
      } else if (x) {
        let e
        ;(m[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(_.X, { size: "fill" })), (m[2] = e))
          : (e = m[2]),
          (s = e))
      } else {
        let e
        ;(m[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(w.A, { "aria-hidden": !0, className: "icon-md" })), (m[3] = e))
          : (e = m[3]),
          (s = e))
      }
      return (
        m[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)("span", {
              "aria-hidden": !0,
              className: "pointer-events-none absolute inset-0 rounded-lg ring-1 ring-border ring-inset",
            })),
            (m[4] = t))
          : (t = m[4]),
        m[5] !== s
          ? ((l = (0, a.jsxs)("div", {
              className:
                "relative flex h-15 w-26 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-surface-secondary/92",
              children: [s, t],
            })),
            (m[5] = s),
            (m[6] = l))
          : (l = m[6]),
        m[7] !== g.title
          ? ((i = (0, a.jsx)("h1", {
              className: "text-2xl leading-8 font-normal wrap-anywhere text-default",
              children: g.title,
            })),
            (m[7] = g.title),
            (m[8] = i))
          : (i = m[8]),
        m[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(j.$Rp, { "aria-hidden": !0, className: "shrink-0" })), (m[9] = r))
          : (r = m[9]),
        m[10] !== v || m[11] !== g.slug
          ? ((o = (0, a.jsxs)("div", {
              className: "flex min-w-0 items-center gap-1 text-sm leading-5 text-tertiary",
              children: [
                r,
                null == v
                  ? (0, a.jsx)("span", { className: "min-w-0 truncate", children: g.slug })
                  : (0, a.jsx)(b.G, {
                      className: "min-w-0 truncate text-sm",
                      appearance: "secondary",
                      underline: "hover",
                      href: v,
                      initiator: "sites_library",
                      openAsWebsite: !0,
                      children: (0, V.Go)(v),
                    }),
              ],
            })),
            (m[10] = v),
            (m[11] = g.slug),
            (m[12] = o))
          : (o = m[12]),
        m[13] !== i || m[14] !== o
          ? ((c = (0, a.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-2", children: [i, o] })),
            (m[13] = i),
            (m[14] = o),
            (m[15] = c))
          : (c = m[15]),
        m[16] !== g.title || m[17] !== l || m[18] !== c
          ? ((d = (0, a.jsxs)("section", {
              "aria-label": g.title,
              className: "flex min-w-0 items-center gap-4",
              children: [l, c],
            })),
            (m[16] = g.title),
            (m[17] = l),
            (m[18] = c),
            (m[19] = d))
          : (d = m[19]),
        d
      )
    }
    function el(e) {
      let s,
        t,
        l,
        o,
        c = (0, n.c)(9),
        { onEdit: d, site: u } = e,
        m = "suspended" === u.status
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, a.jsx)(v.I, { asset: r.h })),
          (t = (0, a.jsx)(g.A, { id: "appgenSiteDetail.edit", defaultMessage: "Edit" })),
          (c[0] = s),
          (c[1] = t))
        : ((s = c[0]), (t = c[1])),
        c[2] !== m || c[3] !== d
          ? ((l = (0, a.jsxs)(h.$, {
              color: "outlineSurface",
              disabled: m,
              size: "toolbar",
              onClick: d,
              children: [s, t],
            })),
            (c[2] = m),
            (c[3] = d),
            (c[4] = l))
          : (l = c[4]))
      let f = l
      return (
        c[5] !== f || c[6] !== m || c[7] !== u.disabled_by
          ? ((o = m
              ? (0, a.jsx)(i.m, {
                  interactive: "openai" === u.disabled_by,
                  content: (0, a.jsx)(T.V, { disabledBy: u.disabled_by }),
                  children: f,
                })
              : f),
            (c[5] = f),
            (c[6] = m),
            (c[7] = u.disabled_by),
            (c[8] = o))
          : (o = c[8]),
        o
      )
    }
    function ei(e) {
      let s,
        t,
        l,
        i,
        r = (0, n.c)(6),
        { onRetry: o } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)(g.A, { id: "appgenSiteDetail.error.retry", defaultMessage: "Retry" })), (r[0] = s))
          : (s = r[0]),
        r[1] !== o
          ? ((t = (0, a.jsx)(h.$, { color: "outline", onClick: o, children: s })), (r[1] = o), (r[2] = t))
          : (t = r[2]),
        r[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(g.A, { id: "appgenSiteDetail.error.title", defaultMessage: "Unable to load site" })),
            (r[3] = l))
          : (l = r[3]),
        r[4] !== t
          ? ((i = (0, a.jsx)(N.A, { className: "min-h-96 flex-1", actions: t, title: l })), (r[4] = t), (r[5] = i))
          : (i = r[5]),
        i
      )
    }
  },
  J8LM(e, s, t) {
    var a = t("ABep"),
      n = t("QosV"),
      l = t("zd8w"),
      i = t("Ywss")
    t.d(
      s,
      {},
      {
        n: function (e) {
          let s,
            t,
            r,
            o = (0, n.c)(7),
            { navigation: c, to: d } = e,
            u = c?.onNavigate
          return (
            o[0] !== u || o[1] !== d
              ? ((s = () => {
                  u?.(d, { replace: !0 })
                }),
                (t = [u, d]),
                (o[0] = u),
                (o[1] = d),
                (o[2] = s),
                (o[3] = t))
              : ((s = o[2]), (t = o[3])),
            (0, l.useEffect)(s, t),
            o[4] !== u || o[5] !== d
              ? ((r = null == u ? (0, a.jsx)(i.C5, { replace: !0, to: d }) : null), (o[4] = u), (o[5] = d), (o[6] = r))
              : (r = o[6]),
            r
          )
        },
      },
    )
  },
  v2gA(e, s, t) {
    var a = t("ABep"),
      n = t("QosV"),
      l = t("NInz"),
      i = t("Wf1j"),
      r = t("oyxz"),
      o = t("Sm6l"),
      c = t("HOLv"),
      d = t("BSnr")
    t.d(
      s,
      {},
      {
        U: function (e) {
          let s,
            t,
            u,
            m,
            g,
            f,
            x,
            p = (0, n.c)(16),
            { disabled: h, isRefreshing: b, onRefresh: y } = e,
            v = void 0 === h || h,
            j = void 0 !== b && b,
            N = (0, i.A)()
          return (
            p[0] !== N || p[1] !== j
              ? ((s = j
                  ? N.formatMessage({
                      id: "appgenSettings.database.refreshing.ariaLabel",
                      defaultMessage: "Refreshing database",
                    })
                  : N.formatMessage({
                      id: "appgenSettings.database.refresh.ariaLabel",
                      defaultMessage: "Refresh database",
                    })),
                (p[0] = N),
                (p[1] = j),
                (p[2] = s))
              : (s = p[2]),
            p[3] !== j ? ((t = j ? null : (0, a.jsx)(c.I, { asset: l.o })), (p[3] = j), (p[4] = t)) : (t = p[4]),
            p[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, a.jsx)(r.A, { id: "appgenSettings.database.refresh", defaultMessage: "Refresh" })),
                (p[5] = u))
              : (u = p[5]),
            p[6] !== v || p[7] !== j || p[8] !== y || p[9] !== s || p[10] !== t
              ? ((m = (0, a.jsxs)(o.$, {
                  "aria-label": s,
                  color: "outline",
                  disabled: v,
                  loading: j,
                  size: "toolbar",
                  type: "button",
                  onClick: y,
                  children: [t, u],
                })),
                (p[6] = v),
                (p[7] = j),
                (p[8] = y),
                (p[9] = s),
                (p[10] = t),
                (p[11] = m))
              : (m = p[11]),
            p[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, a.jsx)(r.A, {
                  id: "appgenSettings.database.description",
                  defaultMessage: "View the data used by your live site",
                })),
                (f = (0, a.jsx)(r.A, { id: "appgenSettings.database.title", defaultMessage: "Database" })),
                (p[12] = g),
                (p[13] = f))
              : ((g = p[12]), (f = p[13])),
            p[14] !== m
              ? ((x = (0, a.jsx)(d.X.Header, { size: "base", actions: m, subtitle: g, title: f })),
                (p[14] = m),
                (p[15] = x))
              : (x = p[15]),
            x
          )
        },
        f: function (e) {
          let s,
            t,
            l,
            i,
            c,
            u = (0, n.c)(9),
            { disabled: m, filter: g, onCreate: f } = e,
            x = void 0 === m || m
          return (
            u[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, a.jsx)(r.A, { id: "appgenAutomations.title", defaultMessage: "Scheduled tasks" })),
                (t = (0, a.jsx)(r.A, {
                  id: "appgenAutomations.description",
                  defaultMessage: "Update your site automatically on a schedule",
                })),
                (u[0] = s),
                (u[1] = t))
              : ((s = u[0]), (t = u[1])),
            u[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = (0, a.jsx)(r.A, { id: "appgenAutomations.createTask", defaultMessage: "Create task" })),
                (u[2] = l))
              : (l = u[2]),
            u[3] !== x || u[4] !== f
              ? ((i = (0, a.jsx)(o.$, {
                  color: "outlineSurface",
                  radius: "large",
                  size: "composerSmLabel",
                  disabled: x,
                  onClick: f,
                  children: l,
                })),
                (u[3] = x),
                (u[4] = f),
                (u[5] = i))
              : (i = u[5]),
            u[6] !== g || u[7] !== i
              ? ((c = (0, a.jsx)(d.X.Header, {
                  size: "base",
                  subtitleWrap: "wrap",
                  title: s,
                  subtitle: t,
                  actions: (0, a.jsxs)("div", { className: "flex items-center gap-2", children: [g, i] }),
                })),
                (u[6] = g),
                (u[7] = i),
                (u[8] = c))
              : (c = u[8]),
            c
          )
        },
      },
    )
  },
  bBU4(e, s, t) {
    var a = t("ABep"),
      n = t("QosV"),
      l = t("oyxz"),
      i = t("X3K1"),
      r = t("BSnr"),
      o = t("ZEx5"),
      c = t("v2gA")
    function d(e) {
      let s,
        t,
        i,
        r,
        o = (0, n.c)(7),
        { children: c } = e
      return (
        o[0] !== c
          ? ((s =
              c ??
              (0, a.jsx)(l.A, { id: "appgenSettings.database.loading", defaultMessage: "Loading database\u2026" })),
            (o[0] = c),
            (o[1] = s))
          : (s = o[1]),
        o[2] !== s
          ? ((t = (0, a.jsx)("span", { className: "sr-only", children: s })), (o[2] = s), (o[3] = t))
          : (t = o[3]),
        o[4] === Symbol.for("react.memo_cache_sentinel") ? ((i = [0, 1, 2].map(u)), (o[4] = i)) : (i = o[4]),
        o[5] !== t
          ? ((r = (0, a.jsxs)("div", {
              className: "flex min-h-40 gap-4 px-4 py-8",
              "aria-busy": "true",
              role: "status",
              children: [t, i],
            })),
            (o[5] = t),
            (o[6] = r))
          : (r = o[6]),
        r
      )
    }
    function u(e) {
      return (0, a.jsx)(i.P, { lines: 5 }, e)
    }
    function m() {
      let e,
        s,
        t = (0, n.c)(2)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("span", {
              className: "sr-only",
              children: (0, a.jsx)(l.A, {
                id: "appgenAutomations.loading",
                defaultMessage: "Loading scheduled tasks\u2026",
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsxs)("div", {
              "aria-busy": "true",
              role: "status",
              children: [
                e,
                (0, a.jsx)(o.t, {
                  dividers: !1,
                  children: (0, a.jsx)("div", { className: "p-3", children: [0, 1, 2].map(g) }),
                }),
              ],
            })),
            (t[1] = s))
          : (s = t[1]),
        s
      )
    }
    function g(e) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex min-w-0 flex-col gap-0.5 px-3 py-3",
          children: [
            (0, a.jsx)("div", {
              className: "flex h-lh items-center text-sm",
              children: (0, a.jsx)(i.X, { className: "w-32 max-w-full", size: "md" }),
            }),
            (0, a.jsx)("div", {
              className: "flex h-4 items-center",
              children: (0, a.jsx)(i.X, { className: "w-48 max-w-full", size: "sm" }),
            }),
          ],
        },
        e,
      )
    }
    t.d(
      s,
      {},
      {
        XZ: m,
        Ye: d,
        yW: function (e) {
          let s,
            t,
            l,
            i = (0, n.c)(7),
            { tab: u } = e
          return (
            i[0] !== u
              ? ((s = "database" === u ? (0, a.jsx)(c.U, {}) : (0, a.jsx)(c.f, {})), (i[0] = u), (i[1] = s))
              : (s = i[1]),
            i[2] !== u
              ? ((t = (0, a.jsx)(r.X.Content, {
                  children: "database" === u ? (0, a.jsx)(o.t, { children: (0, a.jsx)(d, {}) }) : (0, a.jsx)(m, {}),
                })),
                (i[2] = u),
                (i[3] = t))
              : (t = i[3]),
            i[4] !== s || i[5] !== t
              ? ((l = (0, a.jsxs)(r.X, { children: [s, t] })), (i[4] = s), (i[5] = t), (i[6] = l))
              : (l = i[6]),
            l
          )
        },
      },
    )
  },
  Mod9(e, s, t) {
    var a = t("ABep"),
      n = t("QosV"),
      l = t("RVZl"),
      i = t("Wf1j"),
      r = t("oyxz"),
      o = t("Sm6l"),
      c = t("HOLv"),
      d = t("BSnr")
    t.d(
      s,
      {},
      {
        e: function (e) {
          let s,
            t,
            u,
            m,
            g,
            f,
            x,
            p,
            h = (0, n.c)(19),
            { disabled: b, isRefreshing: y, onAdd: v, onRefresh: j } = e,
            N = void 0 === b || b,
            _ = void 0 !== y && y,
            C = (0, i.A)()
          ;(h[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, a.jsx)(r.A, { id: "appgenPlugins.title", defaultMessage: "Site plugins" })),
              (t = (0, a.jsx)(r.A, {
                id: "appgenPlugins.description",
                defaultMessage: "View and manage plugins used by this site",
              })),
              (h[0] = s),
              (h[1] = t))
            : ((s = h[0]), (t = h[1])),
            h[2] !== C
              ? ((u = C.formatMessage({ id: "appgenPlugins.refresh.ariaLabel", defaultMessage: "Refresh plugins" })),
                (h[2] = C),
                (h[3] = u))
              : (u = h[3]))
          let S = null == j || _,
            w = _ ? "motion-safe:animate-spin" : void 0
          return (
            h[4] !== w ? ((m = (0, a.jsx)(c.I, { className: w, asset: l.S })), (h[4] = w), (h[5] = m)) : (m = h[5]),
            h[6] !== _ || h[7] !== j || h[8] !== u || h[9] !== S || h[10] !== m
              ? ((g = (0, a.jsx)(o.$, {
                  uniform: !0,
                  "aria-busy": _,
                  "aria-label": u,
                  color: "ghost",
                  disabled: S,
                  radius: "small",
                  size: "composerSmLabel",
                  type: "button",
                  onClick: j,
                  children: m,
                })),
                (h[6] = _),
                (h[7] = j),
                (h[8] = u),
                (h[9] = S),
                (h[10] = m),
                (h[11] = g))
              : (g = h[11]),
            h[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, a.jsx)(r.A, { id: "appgenPlugins.add", defaultMessage: "Add" })), (h[12] = f))
              : (f = h[12]),
            h[13] !== N || h[14] !== v
              ? ((x = (0, a.jsx)(o.$, {
                  color: "secondary",
                  disabled: N,
                  radius: "large",
                  size: "composerSmLabel",
                  type: "button",
                  onClick: v,
                  children: f,
                })),
                (h[13] = N),
                (h[14] = v),
                (h[15] = x))
              : (x = h[15]),
            h[16] !== x || h[17] !== g
              ? ((p = (0, a.jsx)(d.X.Header, {
                  size: "base",
                  subtitleWrap: "wrap",
                  title: s,
                  subtitle: t,
                  actions: (0, a.jsxs)(a.Fragment, { children: [g, x] }),
                })),
                (h[16] = x),
                (h[17] = g),
                (h[18] = p))
              : (p = h[18]),
            p
          )
        },
      },
    )
  },
  XKfB(e, s, t) {
    var a = t("ABep"),
      n = t("QosV"),
      l = t("oyxz"),
      i = t("X3K1"),
      r = t("BSnr"),
      o = t("AWNZ"),
      c = t("ZEx5"),
      d = t("Mod9")
    function u() {
      let e,
        s,
        t = (0, n.c)(2)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("span", {
              className: "sr-only",
              children: (0, a.jsx)(l.A, { id: "appgenPlugins.loading", defaultMessage: "Loading plugins\u2026" }),
            })),
            (t[0] = e))
          : (e = t[0]),
        t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsxs)("div", {
              "aria-busy": "true",
              role: "status",
              children: [e, (0, a.jsx)(c.t, { children: [0, 1, 2].map(m) })],
            })),
            (t[1] = s))
          : (s = t[1]),
        s
      )
    }
    function m(e) {
      return (0, a.jsx)(
        o.ic,
        {
          control: null,
          description: (0, a.jsx)(i.X, { className: "w-32", size: "sm" }),
          label: (0, a.jsx)(i.X, { className: "w-24", size: "md" }),
        },
        e,
      )
    }
    t.d(
      s,
      {},
      {
        g: function () {
          let e,
            s = (0, n.c)(1)
          return (
            s[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsxs)(r.X, { children: [(0, a.jsx)(d.e, {}), (0, a.jsx)(u, {})] })), (s[0] = e))
              : (e = s[0]),
            e
          )
        },
        u: u,
      },
    )
  },
  RRpo(e, s, t) {
    let a = (0, t("Qgfj").YK)({
      creatorMicro: { id: "codexMicro.deviceName.creatorMicro", defaultMessage: "Creator Micro" },
    })
    t.d(s, {}, { b: a })
  },
  BrP7(e, s, t) {
    t.d(s, { t: () => N })
    var a = t("ABep"),
      n = t("QosV"),
      l = t("i1uX"),
      i = t("on57"),
      r = t("IjbW"),
      o = t("K4Cx"),
      c = t("zd8w"),
      d = t("UxN3"),
      u = t("SziE"),
      m = t("hZax"),
      g = t("Sm6l")
    let f = {
      medium: { icon: "size-9", caption: "w-9" },
      large: { icon: "size-10", caption: "w-10" },
      xl: { icon: "size-12", caption: "w-12" },
    }
    function x(e) {
      let s,
        t,
        l,
        r,
        o,
        c,
        d,
        u,
        m,
        x,
        p,
        h,
        b = (0, n.c)(26)
      b[0] !== e
        ? (({ children: s, icon: t, size: r, surface: o, labelVisibility: c, ...l } = e),
          (b[0] = e),
          (b[1] = s),
          (b[2] = t),
          (b[3] = l),
          (b[4] = r),
          (b[5] = o),
          (b[6] = c))
        : ((s = b[1]), (t = b[2]), (l = b[3]), (r = b[4]), (o = b[5]), (c = b[6]))
      let y = void 0 === o ? "elevated" : o,
        v = void 0 === c ? "visible" : c,
        j = "large" === r && "visible" === v && "pb-1.5"
      b[7] !== j ? ((d = (0, i.A)("group/labeled-icon flex-col gap-1.5", j)), (b[7] = j), (b[8] = d)) : (d = b[8])
      let N = "elevated" === y ? "border shadow-xs" : "border-hairline",
        _ = f[r]
      ;(b[9] !== N || b[10] !== _.icon
        ? ((u = (0, i.A)(
            "flex items-center justify-center rounded-full border-default bg-surface text-default group-not-aria-selected/labeled-icon:group-not-disabled/labeled-icon:group-not-aria-disabled/labeled-icon:group-hover/labeled-icon:bg-secondary-ghost-hover group-focus-visible/labeled-icon:ring-2 group-focus-visible/labeled-icon:ring-ring group-aria-selected/labeled-icon:border-transparent group-aria-selected/labeled-icon:bg-accent-solid group-aria-selected/labeled-icon:text-accent-solid",
            N,
            _.icon,
          )),
          (b[9] = N),
          (b[10] = _.icon),
          (b[11] = u))
        : (u = b[11]),
        b[12] !== t || b[13] !== u
          ? ((m = (0, a.jsx)("span", { className: u, children: t })), (b[12] = t), (b[13] = u), (b[14] = m))
          : (m = b[14]))
      let C = "hidden" === v ? "sr-only" : "text-center text-sm leading-4 whitespace-normal",
        S = "visible" === v && f[r].caption
      return (
        b[15] !== S || b[16] !== C ? ((x = (0, i.A)(C, S)), (b[15] = S), (b[16] = C), (b[17] = x)) : (x = b[17]),
        b[18] !== s || b[19] !== x
          ? ((p = (0, a.jsx)("span", { className: x, children: s })), (b[18] = s), (b[19] = x), (b[20] = p))
          : (p = b[20]),
        b[21] !== l || b[22] !== p || b[23] !== d || b[24] !== m
          ? ((h = (0, a.jsxs)(g.$, {
              ...l,
              className: d,
              color: "ghostTertiary",
              size: "inline",
              focusRing: "none",
              children: [m, p],
            })),
            (b[21] = l),
            (b[22] = p),
            (b[23] = d),
            (b[24] = m),
            (b[25] = h))
          : (h = b[25]),
        h
      )
    }
    let p = "flex min-w-0 gap-1.5 rounded-md py-1 font-medium",
      h = {
        closeButtonClassName: "flex h-7 w-5 items-center justify-center",
        itemClassName: "shrink-0",
        listClassName: "flex min-w-0 items-center gap-0.5",
        segmentedEdges: !1,
        selectedClassName: "bg-surface-secondary text-default",
        selectionIndicator: null,
        tabButtonClassName: `${p} px-2`,
        unselectedTextClassName: "text-secondary",
        unselectedClassName: "hover:bg-surface-secondary",
      },
      b = "flex min-w-0 gap-1.5 rounded-full ring-inset",
      y = {
        ...h,
        listClassName: "-ms-3 flex min-w-0 items-center gap-1",
        selectedClassName: "bg-text/5 text-default",
        tabButtonClassName: `${b} min-h-9 px-3 leading-5 font-normal`,
        unselectedClassName: "hover:bg-secondary-ghost-hover",
      },
      v = {
        ...h,
        listClassName: "flex min-w-0 items-center",
        selectedClassName: "bg-secondary-ghost-hover text-default font-medium",
        tabButtonClassName: "flex min-w-0 rounded-full px-4 py-2.25 leading-5 ring-inset",
        unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default",
      },
      j = {
        text: {
          ...h,
          listClassName: "flex min-w-0 items-center justify-center gap-5",
          tabButtonClassName: "flex min-h-9 min-w-0 items-center font-medium",
          selectedClassName: "text-default font-semibold",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:text-default",
        },
        segmented: {
          closeButtonClassName: "px-1",
          itemClassName: "flex-1",
          listClassName: "border-default flex items-center rounded-lg border",
          segmentedEdges: !0,
          selectedClassName: "bg-text-emphasis/25 text-default",
          selectionIndicator: null,
          tabButtonClassName: "relative flex-1 rounded-none px-4 py-1.5 font-medium",
          unselectedTextClassName: "text-secondary",
          unselectedClassName: "hover:bg-text-emphasis/5",
        },
        toolbar: h,
        settings: { ...h, tabButtonClassName: `${p} button-toolbar` },
        search: {
          ...h,
          textSizeClassName: "text-base",
          listClassName: "flex min-w-0 items-center gap-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
          tabButtonClassName:
            "flex h-8 min-w-0 gap-1.5 rounded-[calc(var(--radius-2xl)-var(--spacing)-1px)] px-3 font-medium",
        },
        inset: {
          ...h,
          listClassName:
            "inline-flex min-w-0 max-w-full items-center gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5",
        },
        page: {
          ...h,
          listClassName: "-ms-2 flex min-w-0 items-center gap-2",
          tabButtonClassName: `${h.tabButtonClassName} ring-inset`,
        },
        pill: {
          ...h,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-text/5 text-default ring-1 ring-border-strong",
          tabButtonClassName:
            "flex min-w-0 gap-1.5 rounded-full border border-transparent px-4 py-2 font-medium ring-inset",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        choice: { ...h, listClassName: "flex min-w-0 flex-wrap items-center gap-2" },
        filter: y,
        sectionFilter: {
          ...y,
          listClassName: "flex max-w-full min-w-0 flex-wrap items-center gap-2",
          tabButtonClassName: `${b} min-h-9 px-4 py-2 font-medium @lg:min-h-9.5 @lg:py-2.25`,
          textSizeClassName: "text-[0.9375rem]/5 @lg:text-[0.875rem]/5",
        },
        compactFilter: {
          ...y,
          listClassName: "flex min-w-0 items-center gap-1",
          tabButtonClassName: `${b} min-h-8 px-3 py-1.5 font-medium`,
          textSizeClassName: "text-[0.875rem]/5",
        },
        editor: {
          ...h,
          listClassName: "-ms-3 flex min-w-0 items-center gap-1 md:ms-0 md:gap-0",
          selectedClassName: "bg-text/5 text-default",
          tabButtonClassName:
            "flex min-h-9 min-w-0 gap-1.5 rounded-full px-3 leading-5 font-normal ring-inset md:min-h-9.5 md:px-4",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        browse: {
          ...h,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 font-medium ring-inset",
          unselectedClassName: "hover:bg-background-secondary-ghost-hover/50 hover:text-default",
        },
        directory: {
          ...h,
          listClassName: "flex min-w-0 max-w-full items-center gap-0 p-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 text-sm leading-5 font-medium ring-inset",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        segmentedPill: v,
        segmentedPillMuted: {
          ...v,
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default dark:text-text/50",
        },
        profile: {
          ...h,
          itemClassName: "flex-1",
          listClassName: "flex min-w-0 items-center",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 w-full min-w-0 justify-center rounded-full border border-transparent px-3 py-0 font-medium",
          unselectedClassName: "hover:text-default",
        },
        icon: { ...h, listClassName: "flex max-w-full min-w-0 flex-wrap items-start justify-center gap-x-8 gap-y-2" },
        underline: {
          closeButtonClassName: "px-1",
          itemClassName: "shrink-0 pb-2",
          listClassName: "border-default flex min-w-0 items-start gap-8 border-b",
          segmentedEdges: !1,
          selectedClassName: "text-default",
          selectionIndicator: "underline",
          tabButtonClassName: "flex min-w-0 gap-1.5 font-medium",
          unselectedTextClassName: "text-secondary",
          unselectedClassName: "hover:text-default",
        },
      }
    function N(e) {
      let s,
        t = (0, n.c)(39),
        {
          tabs: r,
          selectedKey: o,
          onSelect: f,
          onTabClick: p,
          onTabHover: h,
          className: b,
          fill: y,
          scrollable: v,
          tabListRef: N,
          variant: S,
          ariaLabel: w,
          ariaLabelledBy: M,
          activationMode: A,
          animateSelection: k,
          dividerBefore: E,
        } = e,
        I = void 0 !== y && y,
        z = void 0 !== v && v,
        P = void 0 === S ? "segmented" : S,
        B = void 0 === A ? "automatic" : A,
        T = (0, c.useId)(),
        G = j[P],
        D = "inset" === P || "choice" === P,
        R = (0, m.Zj)(!D && "icon" !== P && "text-secondary" === G.unselectedTextClassName && "1244723012"),
        X = void 0 !== k && k && ("segmentedPill" === P || "segmentedPillMuted" === P),
        L = X ? "text-default font-medium" : G.selectedClassName
      if (
        t[0] !== B ||
        t[1] !== X ||
        t[2] !== w ||
        t[3] !== M ||
        t[4] !== b ||
        t[5] !== E ||
        t[6] !== I ||
        t[7] !== f ||
        t[8] !== p ||
        t[9] !== h ||
        t[10] !== G.closeButtonClassName ||
        t[11] !== G.itemClassName ||
        t[12] !== G.listClassName ||
        t[13] !== G.segmentedEdges ||
        t[14] !== G.selectionIndicator ||
        t[15] !== G.tabButtonClassName ||
        t[16] !== G.textSizeClassName ||
        t[17] !== G.unselectedClassName ||
        t[18] !== G.unselectedTextClassName ||
        t[19] !== z ||
        t[20] !== L ||
        t[21] !== o ||
        t[22] !== T ||
        t[23] !== N ||
        t[24] !== r ||
        t[25] !== R ||
        t[26] !== D ||
        t[27] !== P
      ) {
        let e,
          n,
          c = (0, i.A)(R ? "text-tertiary" : G.unselectedTextClassName, G.unselectedClassName),
          m = D ? g.$ : "button",
          y = I && "w-full",
          v = z && "hide-scrollbar overflow-x-auto overflow-y-hidden"
        ;(t[29] !== b || t[30] !== G.listClassName || t[31] !== y || t[32] !== v
          ? ((e = (0, i.A)(G.listClassName, y, v, b)),
            (t[29] = b),
            (t[30] = G.listClassName),
            (t[31] = y),
            (t[32] = v),
            (t[33] = e))
          : (e = t[33]),
          t[34] !== B || t[35] !== f || t[36] !== z || t[37] !== r
            ? ((n = (e) => {
                let s
                if (
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.shiftKey ||
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)
                )
                  return
                let t = Array.from(e.currentTarget.querySelectorAll('[role="tab"]')),
                  a = t.findIndex((s) => s === e.target)
                if (a < 0 || 0 === t.length) return
                ;(e.preventDefault(), e.stopPropagation())
                let n = "rtl" === getComputedStyle(e.currentTarget).direction
                ;((s =
                  "Home" === e.key
                    ? 0
                    : "End" === e.key
                      ? t.length - 1
                      : (a + (e.key === (n ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + t.length) % t.length),
                  t[s]?.focus(),
                  z && t[s]?.scrollIntoView({ block: "nearest", inline: "nearest" }))
                let l = r[s]
                null != l && "automatic" === B && f(l.key, e.timeStamp)
              }),
              (t[34] = B),
              (t[35] = f),
              (t[36] = z),
              (t[37] = r),
              (t[38] = n))
            : (n = t[38]),
          (s = (0, a.jsx)("div", {
            ref: N,
            role: "tablist",
            tabIndex: -1,
            "aria-label": w,
            "aria-labelledby": M,
            className: e,
            onWheel: z ? _ : void 0,
            onKeyDown: n,
            children: r.map((e, s) => {
              let t,
                n,
                g = e.key === o,
                b = g ? L : c,
                y = 0 === s,
                v = s === r.length - 1,
                j = {
                  id: null == e.panelId ? void 0 : `${e.panelId}-tab`,
                  type: "button",
                  role: "tab",
                  "aria-controls": e.panelId,
                  "aria-label": e.ariaLabel,
                  "aria-selected": g,
                  tabIndex: g ? 0 : -1,
                  onPointerEnter: null == h ? void 0 : () => h(e.key),
                  onClick: (s) => {
                    ;((g && "manual" !== B) || f(e.key, s.timeStamp), p?.(e.key))
                  },
                }
              return (
                "inset" === P
                  ? ((t = g ? "segmentedInsetSelected" : "ghost"), (n = "compact"))
                  : "choice" === P && ((t = g ? "choiceSelected" : "outlineGhost"), (n = "dialogAction")),
                (0, a.jsxs)(
                  "div",
                  {
                    className: (0, i.A)(
                      "relative flex min-w-0 items-center",
                      G.itemClassName,
                      I && "flex-1",
                      null != e.onClose && "group/tab",
                    ),
                    children: [
                      y || e.key !== E
                        ? null
                        : (0, a.jsx)("span", { "aria-hidden": !0, className: "mx-2 h-4 w-px shrink-0 bg-border" }),
                      "icon" === P
                        ? (0, a.jsx)(x, { ...j, icon: e.icon, size: "large", children: e.name })
                        : (0, a.jsxs)(m, {
                            ...j,
                            className: (0, i.A)(
                              I && "min-w-0 flex-1 justify-center",
                              X && "relative isolate",
                              !D && [
                                "cursor-interaction items-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                                G.textSizeClassName ?? "text-sm",
                                G.tabButtonClassName,
                                z && "ring-inset",
                                G.segmentedEdges && y && "rounded-l-md",
                                G.segmentedEdges && v && "rounded-r-md",
                                "browse" === P && e.highlighted
                                  ? ["bg-yellow/15 text-yellow light:text-default", g && "ring-1 ring-border-strong"]
                                  : b,
                              ],
                            ),
                            color: t,
                            radius: "choice" === P ? "full" : void 0,
                            size: n,
                            children: [
                              X && g ? (0, a.jsx)(C, { layoutId: T }) : null,
                              null != e.icon
                                ? (0, a.jsx)("span", {
                                    "aria-hidden": "true",
                                    className: "icon-xs flex shrink-0 items-center justify-center",
                                    children: e.icon,
                                  })
                                : null,
                              I ? (0, a.jsx)("span", { className: "truncate", children: e.name }) : e.name,
                            ],
                          }),
                      "underline" === G.selectionIndicator && g
                        ? (0, a.jsx)("div", { className: "absolute inset-x-0 bottom-[-1px] h-px bg-neutral-solid" })
                        : null,
                      null != e.onClose
                        ? (0, a.jsx)("button", {
                            type: "button",
                            "aria-label": e.closeLabel,
                            className: (0, i.A)(
                              "cursor-interaction text-tertiary hover:text-default",
                              G.closeButtonClassName,
                            ),
                            onClick: e.onClose,
                            children: (0, a.jsx)(d.bF, {
                              "aria-hidden": !1,
                              asset16: l.Q,
                              legacyIcon: u.A,
                              legacyClassName: "icon-2xs",
                            }),
                          })
                        : null,
                      G.segmentedEdges && !v
                        ? (0, a.jsx)("div", { className: "h-full w-px self-stretch bg-border" })
                        : null,
                    ],
                  },
                  e.key,
                )
              )
            }),
          })),
          (t[0] = B),
          (t[1] = X),
          (t[2] = w),
          (t[3] = M),
          (t[4] = b),
          (t[5] = E),
          (t[6] = I),
          (t[7] = f),
          (t[8] = p),
          (t[9] = h),
          (t[10] = G.closeButtonClassName),
          (t[11] = G.itemClassName),
          (t[12] = G.listClassName),
          (t[13] = G.segmentedEdges),
          (t[14] = G.selectionIndicator),
          (t[15] = G.tabButtonClassName),
          (t[16] = G.textSizeClassName),
          (t[17] = G.unselectedClassName),
          (t[18] = G.unselectedTextClassName),
          (t[19] = z),
          (t[20] = L),
          (t[21] = o),
          (t[22] = T),
          (t[23] = N),
          (t[24] = r),
          (t[25] = R),
          (t[26] = D),
          (t[27] = P),
          (t[28] = s))
      } else s = t[28]
      return s
    }
    function _(e) {
      let s = e.deltaX || e.deltaY
      0 !== s && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + s)
    }
    function C(e) {
      let s,
        t,
        l = (0, n.c)(5),
        { layoutId: i } = e,
        c = 0.25 * !(0, r.I)()
      return (
        l[0] !== c ? ((s = { type: "spring", duration: c, bounce: 0 }), (l[0] = c), (l[1] = s)) : (s = l[1]),
        l[2] !== i || l[3] !== s
          ? ((t = (0, a.jsx)(o.P.span, {
              "aria-hidden": !0,
              layoutId: i,
              initial: !1,
              className: "absolute inset-0 -z-10 rounded-full bg-secondary-ghost-hover",
              transition: s,
            })),
            (l[2] = i),
            (l[3] = s),
            (l[4] = t))
          : (t = l[4]),
        t
      )
    }
  },
  S5NB(e, s, t) {
    let a = (0, t("Qgfj").YK)({
      title: { id: "restricted.cloudComputer.title", defaultMessage: "Cloud computer" },
      cookies: { id: "restricted.cloudComputer.cookies", defaultMessage: "ChatGPT Work cookies" },
      cookiesDescription: {
        id: "restricted.cloudComputer.cookies.description",
        defaultMessage: "Remove cookies saved by ChatGPT Work",
      },
      approvalsDescription: {
        id: "restricted.cloudComputer.approvals.description",
        defaultMessage: "Choose whether ChatGPT Work asks before opening websites. Applies only to ChatGPT Work.",
      },
      approvals: { id: "restricted.cloudComputer.approvals", defaultMessage: "ChatGPT Work website approvals" },
    })
    t.d(s, {}, { P: a })
  },
  uxIz(e, s, t) {
    let a = (0, t("Qgfj").YK)({
      title: { id: "restricted.passwords.title", defaultMessage: "Passwords" },
      search: { id: "restricted.passwords.search", defaultMessage: "Search passwords" },
    })
    t.d(s, {}, { $: "1675852838", N: a })
  },
  Y6nA(e, s, t) {
    t.d(s, { G: () => m })
    var a = t("WLmQ"),
      n = t("Qgfj"),
      l = t("EZRW")
    let i = (0, n.YK)({ title: { id: "settings.nav.rosalind", defaultMessage: "GPT-Rosalind" } })
    var r = t("S5NB"),
      o = t("uxIz"),
      c = t("qaaZ")
    let d = (0, n.zR)({ id: "settings.nav.general-settings", defaultMessage: "General" }),
      u = (0, n.YK)({
        family: d,
        billing: { id: "settings.nav.billing", defaultMessage: "Billing" },
        agreements: { id: "workspaceAgreements.title", defaultMessage: "Agreements" },
        age: { id: "settings.chatGpt.age.title", defaultMessage: "Age" },
        account: { id: "settings.nav.account", defaultMessage: "Account" },
        "parental-controls": { id: "settings.nav.parental-controls", defaultMessage: "Parental controls" },
        "trusted-contact": { id: "settingsModal.trustedContacts.sectionTitle", defaultMessage: "Trusted contact" },
        safety: { id: "settings.nav.safetyAndWellbeing", defaultMessage: "Safety & wellbeing" },
        "time-management": { id: "settings.nav.time-management", defaultMessage: "Time management" },
        appearance: { id: "settings.nav.appearance", defaultMessage: "Appearance" },
        voice: { id: "settings.nav.voice", defaultMessage: "Voice" },
        storage: { id: "settings.nav.storage", defaultMessage: "ChatGPT storage" },
        deviceStorage: { id: "settings.nav.deviceStorage", defaultMessage: "Device storage" },
        pets: { id: "settings.nav.miniAndPets", defaultMessage: "Mini & Pets" },
        chatGptPets: { id: "settings.nav.pets.v2", defaultMessage: "Pets" },
        "general-settings": d,
        notifications: { id: "settings.nav.notifications", defaultMessage: "Notifications" },
        import: { id: "settings.nav.import.v2", defaultMessage: "Import" },
        profile: { id: "settings.nav.profile", defaultMessage: "Profile" },
        security: { id: "settings.nav.security", defaultMessage: "Security" },
        "keyboard-shortcuts": { id: "settings.nav.keyboard-shortcuts", defaultMessage: "Keyboard shortcuts" },
        "codex-micro": { id: "settings.nav.codex-micro", defaultMessage: "Codex Micro" },
        appshots: { id: "settings.nav.appshots", defaultMessage: "Appshots" },
        agent: { id: "settings.nav.agent", defaultMessage: "Configuration" },
        "work-settings": { id: "settings.nav.workPreferences", defaultMessage: "Work preferences" },
        "git-settings": { id: "settings.nav.git-settings", defaultMessage: "Git" },
        "ads-controls": { id: "settings.nav.ads-controls", defaultMessage: "Ads controls" },
        "archived-chats": { id: "settings.nav.archived-chats", defaultMessage: "Archived chats" },
        "data-controls": { id: "settings.nav.chatGptDataControls", defaultMessage: "Data controls" },
        chatGptSecurity: { id: "settings.nav.chatGptSecurity", defaultMessage: "Security and login" },
        chatGptKeyboard: { id: "settings.nav.chatGptKeyboard", defaultMessage: "Keyboard" },
        chatGptRemotes: { id: "settings.nav.chatGptRemotes", defaultMessage: "Remotes" },
        chatGptInternalSettings: { id: "settings.nav.chatGptInternalSettings", defaultMessage: "Employee Only" },
        "code-review": { id: "settings.nav.codeReview", defaultMessage: "Code Review" },
        "usage-code-review": { id: "settings.nav.codeReviewAnalytics", defaultMessage: "Code review analytics" },
        "cloud-settings": { id: "settings.nav.cloudSettings", defaultMessage: "Cloud preferences" },
        "codex-cloud": { id: "settings.nav.codexCloud", defaultMessage: "Codex Cloud" },
        legacyCodexCloud: { id: "settings.nav.legacyCodexCloud", defaultMessage: "Legacy Codex Cloud" },
        "cloud-environments": { id: "settings.nav.cloudEnvironments", defaultMessage: "Cloud environments" },
        personalization: { id: "settings.nav.personalization", defaultMessage: "Personalization" },
        chronicle: { id: "settings.nav.chronicle", defaultMessage: "Computer history" },
        usage: { id: "settings.nav.usage", defaultMessage: "Usage & billing" },
        enterpriseUsage: { id: "settings.nav.enterpriseUsage", defaultMessage: "Usage" },
        analytics: { id: "settings.nav.analytics", defaultMessage: "Analytics" },
        "consumer-view": { id: "settings.nav.consumerView", defaultMessage: "Consumer analytics (internal)" },
        debug: { id: "settings.nav.debug", defaultMessage: "Debug" },
        "computer-use": { id: "settings.nav.computer-use", defaultMessage: "Computer use" },
        "browser-use": { id: "settings.nav.browser-use", defaultMessage: "Browser" },
        extension: { id: "settings.nav.namedBrowserExtension", defaultMessage: "{browserName} extension" },
        browserExtension: { id: "settings.nav.browser-extension", defaultMessage: "Browser extension" },
        "local-environments": { id: "settings.nav.local-environments", defaultMessage: "Environments" },
        worktrees: { id: "settings.nav.worktrees.v2", defaultMessage: "Worktrees" },
        environments: { id: "settings.nav.environments", defaultMessage: "Cloud Environments" },
        "mcp-settings": { id: "settings.nav.mcp-settings", defaultMessage: "MCP servers" },
        gateways: { id: "settings.nav.gateways", defaultMessage: "Model Providers" },
        "hooks-settings": { id: "settings.nav.hooks-settings", defaultMessage: "Hooks" },
        connections: { id: "settings.nav.connections", defaultMessage: "Connections" },
        "plugins-settings": { id: "settings.nav.plugins-settings", defaultMessage: "Plugins" },
        "file-type-handlers": { id: "settings.nav.viewers", defaultMessage: "Viewers" },
        "skills-settings": { id: "settings.nav.skills-settings", defaultMessage: "Skills" },
      })
    function m(e, s = !1, t = !1) {
      if ("storage" === e) return u.deviceStorage
      if ("rosalind" === e) return i.title
      if ("extension" === e) {
        let e = (0, l.e)()
        return null != e ? { ...u.extension, values: { browserName: a.Yp[e].shortDisplayName } } : u.browserExtension
      }
      if ("usage" === e && s) return u.enterpriseUsage
      if ("passwords" === e) return o.N.title
      if ("cloud-computer" === e) return r.P.title
      if ("teams" === e) return c.T.title
      if (t) {
        if ("usage" === e) return u.enterpriseUsage
        if ("connections" === e) return u.chatGptRemotes
        if ("debug" === e) return u.chatGptInternalSettings
        if ("keyboard-shortcuts" === e) return u.chatGptKeyboard
        if ("security" === e) return u.chatGptSecurity
      }
      return "cloud-environments" === e ? u.legacyCodexCloud : u[e]
    }
  },
  QyE3(e, s, t) {
    var a = t("ABep"),
      n = t("QosV"),
      l = t("on57"),
      i = t("oyxz"),
      r = t("RRpo"),
      o = t("Sm6l"),
      c = t("GCsp"),
      d = t("Y6nA")
    function u(e) {
      let s,
        t,
        l = (0, n.c)(7),
        { codexMicroDeviceModel: o, showChatGptDataControlsLabel: c, showUsageOnlyLabel: u, slug: m } = e,
        g = void 0 !== c && c,
        f = void 0 !== u && u
      if ("codex-micro" === m && "creator-micro-v2" === (void 0 === o ? null : o)) {
        let e
        return (
          l[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(i.A, { ...r.b.creatorMicro })), (l[0] = e))
            : (e = l[0]),
          e
        )
      }
      return (
        l[1] !== g || l[2] !== f || l[3] !== m
          ? ((s = (0, d.G)(m, f, g)), (l[1] = g), (l[2] = f), (l[3] = m), (l[4] = s))
          : (s = l[4]),
        l[5] !== s ? ((t = (0, a.jsx)(i.A, { ...s })), (l[5] = s), (l[6] = t)) : (t = l[6]),
        t
      )
    }
    t.d(
      s,
      {},
      {
        gl: u,
        s: function (e) {
          let s = (0, n.c)(61),
            { showChatGptDataControlsLabel: t, slug: l } = e
          if (
            void 0 !== t &&
            t &&
            [
              "browser-use",
              "connections",
              "data-controls",
              "debug",
              "keyboard-shortcuts",
              "security",
              "usage",
            ].includes(l)
          ) {
            let e, t
            return (
              s[0] !== l ? ((e = (0, d.G)(l, !1, !0)), (s[0] = l), (s[1] = e)) : (e = s[1]),
              s[2] !== e ? ((t = (0, a.jsx)(i.A, { ...e })), (s[2] = e), (s[3] = t)) : (t = s[3]),
              t
            )
          }
          switch (l) {
            case "rosalind":
            case "passwords":
            case "cloud-computer":
            case "age":
            case "agreements":
            case "billing":
            case "extension": {
              let e, t
              return (
                s[4] !== l ? ((e = (0, d.G)(l)), (s[4] = l), (s[5] = e)) : (e = s[5]),
                s[6] !== e ? ((t = (0, a.jsx)(i.A, { ...e })), (s[6] = e), (s[7] = t)) : (t = s[7]),
                t
              )
            }
            case "account": {
              let e
              return (
                s[8] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.account", defaultMessage: "Account" })), (s[8] = e))
                  : (e = s[8]),
                e
              )
            }
            case "appshots": {
              let e
              return (
                s[9] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.appshots", defaultMessage: "Appshots" })), (s[9] = e))
                  : (e = s[9]),
                e
              )
            }
            case "appearance": {
              let e
              return (
                s[10] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.appearance", defaultMessage: "Appearance" })),
                    (s[10] = e))
                  : (e = s[10]),
                e
              )
            }
            case "voice": {
              let e
              return (
                s[11] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.voice", defaultMessage: "Voice" })), (s[11] = e))
                  : (e = s[11]),
                e
              )
            }
            case "storage":
            case "family":
            case "parental-controls":
            case "trusted-contact":
            case "safety":
            case "time-management":
            case "pets": {
              let e, t
              return (
                s[12] !== l ? ((e = (0, d.G)(l)), (s[12] = l), (s[13] = e)) : (e = s[13]),
                s[14] !== e ? ((t = (0, a.jsx)(i.A, { ...e })), (s[14] = e), (s[15] = t)) : (t = s[15]),
                t
              )
            }
            case "general-settings": {
              let e
              return (
                s[16] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.general-settings", defaultMessage: "General" })),
                    (s[16] = e))
                  : (e = s[16]),
                e
              )
            }
            case "notifications": {
              let e
              return (
                s[17] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.notifications", defaultMessage: "Notifications" })),
                    (s[17] = e))
                  : (e = s[17]),
                e
              )
            }
            case "import": {
              let e
              return (
                s[18] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.import.v2", defaultMessage: "Import" })), (s[18] = e))
                  : (e = s[18]),
                e
              )
            }
            case "profile": {
              let e
              return (
                s[19] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.profile", defaultMessage: "Profile" })), (s[19] = e))
                  : (e = s[19]),
                e
              )
            }
            case "security": {
              let e
              return (
                s[20] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.security", defaultMessage: "Security and login" })),
                    (s[20] = e))
                  : (e = s[20]),
                e
              )
            }
            case "keyboard-shortcuts": {
              let e
              return (
                s[21] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, {
                      id: "settings.section.keyboard-shortcuts",
                      defaultMessage: "Keyboard shortcuts",
                    })),
                    (s[21] = e))
                  : (e = s[21]),
                e
              )
            }
            case "codex-micro": {
              let e
              return (
                s[22] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.codex-micro", defaultMessage: "Codex Micro" })),
                    (s[22] = e))
                  : (e = s[22]),
                e
              )
            }
            case "agent": {
              let e
              return (
                s[23] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.agent", defaultMessage: "Configuration" })),
                    (s[23] = e))
                  : (e = s[23]),
                e
              )
            }
            case "work-settings": {
              let e
              return (
                s[24] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(u, { slug: "work-settings" })), (s[24] = e))
                  : (e = s[24]),
                e
              )
            }
            case "git-settings": {
              let e
              return (
                s[25] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.git-settings", defaultMessage: "Git" })), (s[25] = e))
                  : (e = s[25]),
                e
              )
            }
            case "ads-controls": {
              let e
              return (
                s[26] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(u, { slug: "ads-controls" })), (s[26] = e))
                  : (e = s[26]),
                e
              )
            }
            case "data-controls":
            case "archived-chats": {
              let e
              return (s[27] !== l ? ((e = (0, a.jsx)(u, { slug: l })), (s[27] = l), (s[28] = e)) : (e = s[28]), e)
            }
            case "usage-code-review": {
              let e
              return (
                s[29] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.codeReview", defaultMessage: "Code review" })),
                    (s[29] = e))
                  : (e = s[29]),
                e
              )
            }
            case "code-review": {
              let e
              return (
                s[30] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(u, { slug: "code-review" })), (s[30] = e))
                  : (e = s[30]),
                e
              )
            }
            case "cloud-settings": {
              let e
              return (
                s[31] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, {
                      id: "settings.section.cloudSettings",
                      defaultMessage: "Cloud preferences",
                    })),
                    (s[31] = e))
                  : (e = s[31]),
                e
              )
            }
            case "codex-cloud":
            case "cloud-environments": {
              let e, t
              return (
                s[32] !== l ? ((e = (0, d.G)(l)), (s[32] = l), (s[33] = e)) : (e = s[33]),
                s[34] !== e ? ((t = (0, a.jsx)(i.A, { ...e })), (s[34] = e), (s[35] = t)) : (t = s[35]),
                t
              )
            }
            case "personalization": {
              let e
              return (
                s[36] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, {
                      id: "settings.section.personalization",
                      defaultMessage: "Personalization",
                    })),
                    (s[36] = e))
                  : (e = s[36]),
                e
              )
            }
            case "chronicle": {
              let e
              return (
                s[37] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.chronicle", defaultMessage: "Computer history" })),
                    (s[37] = e))
                  : (e = s[37]),
                e
              )
            }
            case "usage": {
              let e
              return (
                s[38] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.usage", defaultMessage: "Usage & billing" })),
                    (s[38] = e))
                  : (e = s[38]),
                e
              )
            }
            case "analytics": {
              let e
              return (
                s[39] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.analytics", defaultMessage: "Analytics" })),
                    (s[39] = e))
                  : (e = s[39]),
                e
              )
            }
            case "consumer-view": {
              let e
              return (
                s[40] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, {
                      id: "settings.section.consumerView",
                      defaultMessage: "Consumer analytics (internal)",
                    })),
                    (s[40] = e))
                  : (e = s[40]),
                e
              )
            }
            case "debug": {
              let e
              return (
                s[41] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.debug", defaultMessage: "Debug" })), (s[41] = e))
                  : (e = s[41]),
                e
              )
            }
            case "computer-use": {
              let e
              return (
                s[42] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "computerUse.label", defaultMessage: "Computer use" })), (s[42] = e))
                  : (e = s[42]),
                e
              )
            }
            case "browser-use": {
              let e
              return (
                s[43] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.browser-use", defaultMessage: "Browser" })),
                    (s[43] = e))
                  : (e = s[43]),
                e
              )
            }
            case "local-environments": {
              let e
              return (
                s[44] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, {
                      id: "settings.section.local-environments",
                      defaultMessage: "Environments",
                    })),
                    (s[44] = e))
                  : (e = s[44]),
                e
              )
            }
            case "worktrees": {
              let e
              return (
                s[45] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.worktrees.v2", defaultMessage: "Worktrees" })),
                    (s[45] = e))
                  : (e = s[45]),
                e
              )
            }
            case "environments": {
              let e
              return (
                s[46] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, {
                      id: "settings.section.environments",
                      defaultMessage: "Cloud Environments",
                    })),
                    (s[46] = e))
                  : (e = s[46]),
                e
              )
            }
            case "gateways": {
              let e
              return (
                s[47] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, {
                      id: "settings.gateways.title",
                      defaultMessage: "Model Providers & Gateways",
                    })),
                    (s[47] = e))
                  : (e = s[47]),
                e
              )
            }
            case "mcp-settings": {
              let e
              return (
                s[48] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.mcp-settings", defaultMessage: "MCP servers" })),
                    (s[48] = e))
                  : (e = s[48]),
                e
              )
            }
            case "hooks-settings": {
              let e
              return (
                s[49] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.hooks-settings", defaultMessage: "Hooks" })),
                    (s[49] = e))
                  : (e = s[49]),
                e
              )
            }
            case "connections": {
              let e
              return (
                s[50] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.connections", defaultMessage: "Connections" })),
                    (s[50] = e))
                  : (e = s[50]),
                e
              )
            }
            case "plugins-settings": {
              let e
              return (
                s[51] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.plugins-settings", defaultMessage: "Plugins" })),
                    (s[51] = e))
                  : (e = s[51]),
                e
              )
            }
            case "file-type-handlers": {
              let e, t
              return (
                s[52] !== l ? ((e = (0, d.G)(l)), (s[52] = l), (s[53] = e)) : (e = s[53]),
                s[54] !== e ? ((t = (0, a.jsx)(i.A, { ...e })), (s[54] = e), (s[55] = t)) : (t = s[55]),
                t
              )
            }
            case "skills-settings": {
              let e
              return (
                s[56] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, a.jsx)(i.A, { id: "settings.section.skills-settings", defaultMessage: "Skills" })),
                    (s[56] = e))
                  : (e = s[56]),
                e
              )
            }
            case "teams": {
              let e, t
              return (
                s[57] !== l ? ((e = (0, d.G)(l)), (s[57] = l), (s[58] = e)) : (e = s[58]),
                s[59] !== e ? ((t = (0, a.jsx)(i.A, { ...e })), (s[59] = e), (s[60] = t)) : (t = s[60]),
                t
              )
            }
          }
        },
        vg: function (e) {
          let s,
            t,
            i,
            r,
            d,
            u,
            m,
            g,
            f,
            x,
            p,
            h,
            b,
            y,
            v = (0, n.c)(29)
          v[0] !== e
            ? (({
                children: t,
                className: i,
                contentClassName: r,
                chevronClassName: s,
                leadingVisual: d,
                color: m,
                size: g,
                ...u
              } = e),
              (v[0] = e),
              (v[1] = s),
              (v[2] = t),
              (v[3] = i),
              (v[4] = r),
              (v[5] = d),
              (v[6] = u),
              (v[7] = m),
              (v[8] = g))
            : ((s = v[1]), (t = v[2]), (i = v[3]), (r = v[4]), (d = v[5]), (u = v[6]), (m = v[7]), (g = v[8]))
          let j = void 0 === m ? "outline" : m,
            N = void 0 === g ? "toolbar" : g,
            _ =
              "toolbar" === N &&
              (null != d ? "pe-3 ps-[calc((var(--spacing-token-button-composer)-var(--spacing)*5)/2-1px)]" : "px-3")
          return (
            v[9] !== i || v[10] !== _
              ? ((f = (0, l.A)("max-w-full justify-between", _, i)), (v[9] = i), (v[10] = _), (v[11] = f))
              : (f = v[11]),
            v[12] !== r
              ? ((x = (0, l.A)("flex min-w-0 flex-1 items-center gap-1.5", r)), (v[12] = r), (v[13] = x))
              : (x = v[13]),
            v[14] !== t || v[15] !== d || v[16] !== x
              ? ((p = (0, a.jsxs)("span", { className: x, children: [d, t] })),
                (v[14] = t),
                (v[15] = d),
                (v[16] = x),
                (v[17] = p))
              : (p = v[17]),
            v[18] !== s
              ? ((h = (0, l.A)("icon-2xs shrink-0 text-tertiary", s)), (v[18] = s), (v[19] = h))
              : (h = v[19]),
            v[20] !== h ? ((b = (0, a.jsx)(c.A, { className: h })), (v[20] = h), (v[21] = b)) : (b = v[21]),
            v[22] !== j || v[23] !== u || v[24] !== N || v[25] !== f || v[26] !== p || v[27] !== b
              ? ((y = (0, a.jsxs)(o.$, { color: j, size: N, className: f, ...u, children: [p, b] })),
                (v[22] = j),
                (v[23] = u),
                (v[24] = N),
                (v[25] = f),
                (v[26] = p),
                (v[27] = b),
                (v[28] = y))
              : (y = v[28]),
            y
          )
        },
      },
    )
  },
}
//# sourceMappingURL=496532.79c6c4c49e.js.map
