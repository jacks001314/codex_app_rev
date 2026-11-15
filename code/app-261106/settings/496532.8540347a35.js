export const __rspack_esm_ids = [496532]
export const __webpack_modules__ = {
  Dkb2(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      a = s("oyxz"),
      o = s("X3K1"),
      r = s("BSnr"),
      l = s("AWNZ"),
      c = s("ZEx5")
    function d(e) {
      let { key: t, rows: s } = e
      return (0, i.jsxs)(
        r.X,
        {
          children: [
            (0, i.jsx)(r.X.Header, {
              title: (0, i.jsx)(o.X, { className: "w-32", size: "lg" }),
              subtitle: (0, i.jsx)(o.X, { className: "mt-2 w-1/2", size: "sm" }),
            }),
            (0, i.jsx)(r.X.Content, {
              children: (0, i.jsx)(c.t, { variant: "flat", children: Array.from({ length: s }, g) }),
            }),
          ],
        },
        t,
      )
    }
    function g(e, t) {
      return (0, i.jsx)(
        l.ic,
        {
          layout: "split",
          label: (0, i.jsx)(o.X, { className: "w-24", size: "md" }),
          description: (0, i.jsx)(o.X, { className: "mt-2 w-40", size: "sm" }),
          control: (0, i.jsx)("div", { className: "h-9 w-40", children: (0, i.jsx)(o.X, { size: "fill" }) }),
        },
        t,
      )
    }
    s.d(
      t,
      {},
      {
        U: function () {
          let e,
            t = (0, n.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsxs)("div", {
                  className: "flex flex-col gap-10",
                  "aria-busy": "true",
                  role: "status",
                  children: [
                    (0, i.jsx)("span", {
                      className: "sr-only",
                      children: (0, i.jsx)(a.A, {
                        id: "appgenSettings.loading",
                        defaultMessage: "Loading site settings…",
                        description:
                          "Accessible status while the Site settings page or dialog loads its initial data and displays placeholder rows",
                      }),
                    }),
                    [
                      { key: "general", rows: 5 },
                      { key: "environment", rows: 2 },
                      { key: "danger", rows: 1 },
                    ].map(d),
                  ],
                })),
                (t[0] = e))
              : (e = t[0]),
            e
          )
        },
      },
    )
  },
  Gyao(e, t, s) {
    s.d(t, { Y: () => J })
    var i = s("ABep"),
      n = s("QosV"),
      a = s("ne8d"),
      o = s("slpy"),
      r = s("QxwI"),
      l = s("irkb"),
      c = s("T0Rc"),
      d = s("zTeN"),
      g = s("zd8w"),
      u = s("Wf1j"),
      f = s("oyxz"),
      p = s("HZfM"),
      m = s("MCtJ"),
      h = s("MeAu"),
      b = s("Sm6l"),
      x = s("ZtSy"),
      v = s("Ot7V"),
      y = s("HOLv"),
      j = s("bVeK"),
      _ = s("FrrB"),
      S = s("X3K1"),
      M = s("BrP7"),
      w = s("Q8aV"),
      A = s("yS0J"),
      T = s("OWtl"),
      C = s("hZax"),
      k = s("OMIV"),
      N = s("eShZ"),
      P = s("AN1G"),
      G = s("vBcg"),
      E = s("cyb2"),
      I = s("B0Vf"),
      z = s("SQbA"),
      D = s("l5Vd"),
      R = s("Dkb2"),
      X = s("J8LM"),
      B = s("QGkM"),
      W = s("bBU4"),
      L = s("b3Qd"),
      O = s("XKfB")
    let Q = (0, s("Qgfj").YK)({
      navigation: {
        id: "appgenPlugins.navigation",
        defaultMessage: "Plugins",
        description:
          "Tab in a hosted Site’s settings where the owner can view the plugins used by the published website",
      },
    })
    var U = s("LJbP"),
      V = s("nJU9")
    let K = "appgen-site-detail-analytics",
      H = "appgen-site-detail-database",
      Z = "appgen-site-detail-automations",
      F = "appgen-site-detail-plugins",
      Y = "appgen-site-detail-settings",
      $ = (0, g.createContext)(null)
    function J(e) {
      let t,
        s = (0, n.c)(7),
        a = (0, g.useContext)($)
      if (null != a) {
        let t, n
        return (
          s[0] !== a || s[1] !== e.children
            ? ((t = e.children(a)), (s[0] = a), (s[1] = e.children), (s[2] = t))
            : (t = s[2]),
          s[3] !== t ? ((n = (0, i.jsx)(i.Fragment, { children: t })), (s[3] = t), (s[4] = n)) : (n = s[4]),
          n
        )
      }
      return (
        s[5] !== e
          ? ((t = (0, i.jsx)(g.Suspense, {
              fallback: (0, i.jsx)(q, { ...e, loadingOnly: !0 }, e.projectId),
              children: (0, i.jsx)(q, { ...e }, e.projectId),
            })),
            (s[5] = e),
            (s[6] = t))
          : (t = s[6]),
        t
      )
    }
    function q(e) {
      let t,
        s,
        o,
        r,
        h,
        b,
        x,
        v,
        y,
        j,
        _,
        A,
        I,
        L,
        J,
        q,
        ei,
        ea,
        eo,
        er,
        el,
        ec,
        ed = (0, n.c)(136),
        { children: eg, loadingOnly: eu, navigation: ef, prefetchTab: ep, projectId: em, selectedTab: eh } = e,
        eb = void 0 !== eu && eu,
        ex = (0, d.gh)(T.u),
        ev = (0, l.jE)(),
        ey = (0, p.Zp)(),
        ej = (0, g.useRef)(null),
        e_ = (0, p.zy)(),
        eS = (0, p.wQ)(),
        eM = (0, g.useRef)(null)
      ;(ed[0] !== e_.key || ed[1] !== em || ed[2] !== eh
        ? ((t = () => {
            "analytics" === eh ? (0, G.qW)(eM, em, e_.key) : (eM.current = null)
          }),
          (s = [em, e_.key, eh]),
          (ed[0] = e_.key),
          (ed[1] = em),
          (ed[2] = eh),
          (ed[3] = t),
          (ed[4] = s))
        : ((t = ed[3]), (s = ed[4])),
        (0, g.useLayoutEffect)(t, s))
      let ew = (0, u.A)(),
        [eA, eT] = (0, g.useState)(!1),
        [eC, ek] = (0, g.useState)("settings" === eh)
      eC && "settings" !== eh && ek(!1)
      let eN = (0, w.p8)(),
        eP = (0, C.Zj)("1855826876"),
        eG = (0, C.DR)("1855826876"),
        eE = (0, d.Ul)(k.RS),
        eI = (0, C.Zj)("262557526")
      ed[5] !== em ? ((o = (0, B.cf)(em)), (ed[5] = em), (ed[6] = o)) : (o = ed[6])
      let { data: ez, error: eD, isError: eR, isLoading: eX, refetch: eB } = (0, c.I)(o)
      if (null != ez) r = ez
      else if (eX) {
        let e
        ;(ed[7] !== em || ed[8] !== ev
          ? ((e = (0, B.D3)(ev, em)), (ed[7] = em), (ed[8] = ev), (ed[9] = e))
          : (e = ed[9]),
          (r = e))
      }
      let eW = null != ez,
        eL = "settings" === eh && eW
      ed[10] !== eL ? ((h = { enabled: eL }), (ed[10] = eL), (ed[11] = h)) : (h = ed[11])
      let { isLoading: eO } = (0, d._U)(z.appgenEnvironmentQuery$, em, h)
      ed[12] !== em || ed[13] !== ex || ed[14] !== eh
        ? ((b = () => {
            let e
            switch (eh) {
              case "plugins":
              case "automations":
                return
              case "analytics":
                e = E.qD.CODEX_APPGEN_INTERACTION_PAGE_ANALYTICS
                break
              case "database":
                e = E.qD.CODEX_APPGEN_INTERACTION_PAGE_DATABASE
                break
              case "settings":
                e = E.qD.CODEX_APPGEN_INTERACTION_PAGE_SETTINGS
            }
            ;(0, E.Q_)(ex, {
              action: E.lX.CODEX_APPGEN_INTERACTION_ACTION_PAGE_VIEWED,
              page: e,
              projectId: em,
              source: E.Mz.CODEX_APPGEN_INTERACTION_SOURCE_SITE_DETAILS,
            })
          }),
          (ed[12] = em),
          (ed[13] = ex),
          (ed[14] = eh),
          (ed[15] = b))
        : (b = ed[15])
      let eQ = (0, g.useEffectEvent)(b),
        eU =
          null == ez ||
          eb ||
          eX ||
          eR ||
          ("settings" === eh && !eW) ||
          "automations" === eh ||
          "plugins" === eh ||
          ("analytics" === eh && !eI)
            ? null
            : `${ez.id}:${eh}`
      ;(ed[16] !== eQ || ed[17] !== eU
        ? ((x = () => {
            null != eU && eQ()
          }),
          (ed[16] = eQ),
          (ed[17] = eU),
          (ed[18] = x))
        : (x = ed[18]),
        ed[19] !== eU ? ((v = [eU]), (ed[19] = eU), (ed[20] = v)) : (v = ed[20]),
        (0, g.useEffect)(x, v))
      let eV = "plugins" === eh && (eE || eG),
        eK = eX || eb || eV || (eC && "settings" === eh && eO)
      if (eK) {
        let e
        ;(ed[21] !== em || ed[22] !== ev
          ? ((e = (0, B.D3)(ev, em)), (ed[21] = em), (ed[22] = ev), (ed[23] = e))
          : (e = ed[23]),
          (r = e))
      }
      let eH = ez?.status === "suspended" ? null : ez?.live_url
      if (
        ("plugins" === eh && null != ez && "owner" !== ez.current_user_role) ||
        (eD instanceof N.fk && (403 === eD.status || 404 === eD.status))
      ) {
        let e
        return (
          ed[24] !== ef
            ? ((e = (0, i.jsx)(X.n, { navigation: ef, to: D.ye })), (ed[24] = ef), (ed[25] = e))
            : (e = ed[25]),
          e
        )
      }
      if ("plugins" === eh && !eV && !eP) {
        let e, t
        return (
          ed[26] !== em ? ((e = (0, D.SJ)(em)), (ed[26] = em), (ed[27] = e)) : (e = ed[27]),
          ed[28] !== ef || ed[29] !== e
            ? ((t = (0, i.jsx)(X.n, { navigation: ef, to: e })), (ed[28] = ef), (ed[29] = e), (ed[30] = t))
            : (t = ed[30]),
          t
        )
      }
      if (
        (ed[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = {
              key: "settings",
              name: (0, i.jsx)(f.A, {
                id: "appgenSiteDetail.navigation.settings",
                defaultMessage: "Settings",
                description: "Tab label for Site settings",
              }),
              panelId: Y,
            }),
            (ed[31] = y))
          : (y = ed[31]),
        ed[32] !== eI || ed[33] !== eW || ed[34] !== eP || ed[35] !== eh || ed[36] !== ez?.current_user_role)
      ) {
        let e
        if (((j = [y]), eI || "analytics" === eh)) {
          let e
          ;(ed[38] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = {
                key: "analytics",
                name: (0, i.jsx)(f.A, {
                  id: "appgenSiteDetail.navigation.analytics",
                  defaultMessage: "Analytics",
                  description: "Tab label for Site analytics",
                }),
                panelId: K,
              }),
              (ed[38] = e))
            : (e = ed[38]),
            j.push(e))
        }
        if (
          (ed[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = {
                key: "database",
                name: (0, i.jsx)(f.A, {
                  id: "appgenSiteDetail.navigation.database",
                  defaultMessage: "Database",
                  description: "Tab label for the Site database viewer",
                }),
                panelId: H,
              }),
              (ed[39] = e))
            : (e = ed[39]),
          j.push(e),
          eP && ez?.current_user_role === "owner")
        ) {
          let e
          ;(ed[40] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = { key: "plugins", name: (0, i.jsx)(f.A, { ...Q.navigation }), panelId: F }), (ed[40] = e))
            : (e = ed[40]),
            j.push(e))
        }
        if (eW) {
          let e
          ;(ed[41] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = {
                key: "automations",
                name: (0, i.jsx)(f.A, {
                  id: "appgenSiteDetail.navigation.automations",
                  defaultMessage: "Scheduled",
                  description: "Tab label for a Site's cloud scheduled tasks",
                }),
                panelId: Z,
              }),
              (ed[41] = e))
            : (e = ed[41]),
            j.push(e))
        }
        ;((ed[32] = eI), (ed[33] = eW), (ed[34] = eP), (ed[35] = eh), (ed[36] = ez?.current_user_role), (ed[37] = j))
      } else j = ed[37]
      switch (eh) {
        case "plugins": {
          let e
          ;((_ = F),
            ed[42] !== ew ? ((e = ew.formatMessage(Q.navigation)), (ed[42] = ew), (ed[43] = e)) : (e = ed[43]),
            (A = e))
          break
        }
        case "automations": {
          let e
          ;((_ = Z),
            ed[44] !== ew
              ? ((e = ew.formatMessage({
                  id: "appgenSiteDetail.navigation.automations",
                  defaultMessage: "Scheduled",
                  description: "Tab label for a Site's cloud scheduled tasks",
                })),
                (ed[44] = ew),
                (ed[45] = e))
              : (e = ed[45]),
            (A = e))
          break
        }
        case "settings": {
          let e
          ;((_ = Y),
            ed[46] !== ew
              ? ((e = ew.formatMessage({
                  id: "appgenSiteDetail.navigation.settings",
                  defaultMessage: "Settings",
                  description: "Tab label for Site settings",
                })),
                (ed[46] = ew),
                (ed[47] = e))
              : (e = ed[47]),
            (A = e))
          break
        }
        case "analytics": {
          let e
          ;((_ = K),
            ed[48] !== ew
              ? ((e = ew.formatMessage({
                  id: "appgenSiteDetail.navigation.analytics",
                  defaultMessage: "Analytics",
                  description: "Tab label for Site analytics",
                })),
                (ed[48] = ew),
                (ed[49] = e))
              : (e = ed[49]),
            (A = e))
          break
        }
        case "database": {
          let e
          ;((_ = H),
            ed[50] !== ew
              ? ((e = ew.formatMessage({
                  id: "appgenSiteDetail.navigation.database",
                  defaultMessage: "Database",
                  description: "Tab label for the Site database viewer",
                })),
                (ed[50] = ew),
                (ed[51] = e))
              : (e = ed[51]),
            (A = e))
        }
      }
      ed[52] !== eH || ed[53] !== ex || ed[54] !== eK || ed[55] !== ez || ed[56] !== eN
        ? ((I =
            null == ez || eK
              ? void 0
              : () => {
                  ;((0, E.Q_)(ex, {
                    action: E.lX.CODEX_APPGEN_INTERACTION_ACTION_EDIT_WITH_CHAT_CLICKED,
                    projectId: ez.id,
                    source: E.Mz.CODEX_APPGEN_INTERACTION_SOURCE_SITE_DETAILS,
                  }),
                    (0, V.$)(ex, eN, {
                      type: "edit",
                      liveUrl: eH,
                      projectId: ez.id,
                      projectTitle: ez.title,
                      latestEditContext: ez.latest_edit_context,
                    }))
                }),
          (ed[52] = eH),
          (ed[53] = ex),
          (ed[54] = eK),
          (ed[55] = ez),
          (ed[56] = eN),
          (ed[57] = I))
        : (I = ed[57])
      let eZ = I
      ;(ed[58] !== ey || ed[59] !== ef?.onNavigate
        ? ((L = () => {
            ;(ef?.onNavigate ?? ey)("/sites")
          }),
          (ed[58] = ey),
          (ed[59] = ef?.onNavigate),
          (ed[60] = L))
        : (L = ed[60]),
        ed[61] !== r || ed[62] !== eZ || ed[63] !== L
          ? ((J = (0, i.jsx)(et, { site: r, onBack: L, onEdit: eZ })),
            (ed[61] = r),
            (ed[62] = eZ),
            (ed[63] = L),
            (ed[64] = J))
          : (J = ed[64]))
      let eF = J
      if (eK) {
        let e, t, s
        if ("settings" === eh) {
          let t
          ;(ed[65] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)("div", {
                    className: "border-b border-subtle pb-6",
                    "aria-hidden": !0,
                    children: (0, i.jsxs)("div", {
                      className: "flex items-center gap-4",
                      children: [
                        (0, i.jsx)("div", { className: "h-9 w-24", children: (0, i.jsx)(S.X, { size: "fill" }) }),
                        (0, i.jsx)(S.X, { className: "w-24" }),
                      ],
                    }),
                  }),
                  (0, i.jsx)(R.U, {}),
                ],
              })),
              (ed[65] = t))
            : (t = ed[65]),
            (e = t))
        } else if ("plugins" === eh) {
          let t
          ;(ed[66] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(O.g, {})), (ed[66] = t))
            : (t = ed[66]),
            (e = t))
        } else if ("analytics" === eh) {
          let t
          ;(ed[67] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(P.DV, { showIdentity: !1 })), (ed[67] = t))
            : (t = ed[67]),
            (e = t))
        } else {
          let t, s
          ;(ed[68] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)("div", {
                className: "border-b border-subtle pb-6",
                "aria-hidden": !0,
                children: (0, i.jsx)("div", { className: "h-9 w-24", children: (0, i.jsx)(S.X, { size: "fill" }) }),
              })),
              (ed[68] = t))
            : (t = ed[68]),
            ed[69] !== eh
              ? ((s = (0, i.jsxs)(i.Fragment, { children: [t, (0, i.jsx)(W.yW, { tab: eh })] })),
                (ed[69] = eh),
                (ed[70] = s))
              : (s = ed[70]),
            (e = s))
        }
        ;(ed[71] !== r
          ? ((t =
              null == r
                ? (0, i.jsxs)("div", {
                    className: "mb-2 flex min-w-0 items-center gap-4",
                    "aria-hidden": !0,
                    children: [
                      (0, i.jsx)("div", {
                        className: "aspect-video w-28 shrink-0",
                        children: (0, i.jsx)(S.X, { size: "fill" }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "flex min-w-0 flex-1 flex-col gap-2",
                        children: [
                          (0, i.jsx)(S.X, { className: "w-1/2", size: "lg" }),
                          (0, i.jsx)(S.X, { className: "w-2/3", size: "sm" }),
                        ],
                      }),
                    ],
                  })
                : (0, i.jsx)(es, { site: r }, r.id)),
            (ed[71] = r),
            (ed[72] = t))
          : (t = ed[72]),
          ed[73] !== e || ed[74] !== t
            ? ((s = (0, i.jsxs)(i.Fragment, { children: [t, e] })), (ed[73] = e), (ed[74] = t), (ed[75] = s))
            : (s = ed[75]),
          (q = s))
      } else if (eR || null == ez) {
        let e
        ;(ed[76] !== eB
          ? ((e = (0, i.jsx)(en, { onRetry: () => void eB() })), (ed[76] = eB), (ed[77] = e))
          : (e = ed[77]),
          (q = e))
      } else {
        let e, t, s, n, a, o, r, l, c
        if ("settings" === eh) {
          let t
          ;(ed[78] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(R.U, {})), (ed[78] = t))
            : (t = ed[78]),
            (e = t))
        } else if ("analytics" === eh) {
          let t
          ;(ed[79] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(P.RE, {})), (ed[79] = t))
            : (t = ed[79]),
            (e = t))
        } else if ("plugins" === eh) {
          let t
          ;(ed[80] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(O.g, {})), (ed[80] = t))
            : (t = ed[80]),
            (e = t))
        } else {
          let t
          ;(ed[81] !== eh ? ((t = (0, i.jsx)(W.yW, { tab: eh })), (ed[81] = eh), (ed[82] = t)) : (t = ed[82]), (e = t))
        }
        ;(ed[83] !== ez ? ((t = (0, i.jsx)(es, { site: ez }, ez.id)), (ed[83] = ez), (ed[84] = t)) : (t = ed[84]),
          ed[85] !== ew
            ? ((s = ew.formatMessage({
                id: "appgenSiteDetail.navigation.label",
                defaultMessage: "Site details",
                description: "Accessible label for navigation between Site settings, analytics, and database",
              })),
              (ed[85] = ew),
              (ed[86] = s))
            : (s = ed[86]),
          ed[87] !== ey || ed[88] !== ef?.onNavigate || ed[89] !== ep || ed[90] !== em
            ? ((n = (e) => {
                let t
                switch (e) {
                  case "plugins":
                    t = (0, D.hY)(em)
                    break
                  case "automations":
                    t = (0, D.J6)(em)
                    break
                  case "settings":
                    t = (0, D.SJ)(em)
                    break
                  case "analytics":
                    t = (0, D.hI)(em)
                    break
                  case "database":
                    t = (0, D.ck)(em)
                }
                ;(ep?.(e).catch(ee), (ef?.onNavigate ?? ey)(t))
              }),
              (ed[87] = ey),
              (ed[88] = ef?.onNavigate),
              (ed[89] = ep),
              (ed[90] = em),
              (ed[91] = n))
            : (n = ed[91]),
          ed[92] !== eh || ed[93] !== s || ed[94] !== n || ed[95] !== j
            ? ((a = (0, i.jsx)("div", {
                className: "pb-6",
                children: (0, i.jsx)(M.t, {
                  ariaLabel: s,
                  selectedKey: eh,
                  tabs: j,
                  scrollable: !0,
                  variant: "browse",
                  onSelect: n,
                }),
              })),
              (ed[92] = eh),
              (ed[93] = s),
              (ed[94] = n),
              (ed[95] = j),
              (ed[96] = a))
            : (a = ed[96]),
          ed[97] !== eg || ed[98] !== eC || ed[99] !== eh || ed[100] !== ez || ed[101] !== e
            ? ((o = "settings" === eh && eC ? eg(ez) : (0, i.jsx)(g.Suspense, { fallback: e, children: eg(ez) }, eh)),
              (ed[97] = eg),
              (ed[98] = eC),
              (ed[99] = eh),
              (ed[100] = ez),
              (ed[101] = e),
              (ed[102] = o))
            : (o = ed[102]),
          ed[103] !== ez || ed[104] !== o
            ? ((r = (0, i.jsx)($, { value: ez, children: o })), (ed[103] = ez), (ed[104] = o), (ed[105] = r))
            : (r = ed[105]),
          ed[106] !== _ || ed[107] !== A || ed[108] !== r
            ? ((l = (0, i.jsx)("div", { id: _, "aria-label": A, role: "tabpanel", children: r })),
              (ed[106] = _),
              (ed[107] = A),
              (ed[108] = r),
              (ed[109] = l))
            : (l = ed[109]),
          ed[110] !== t || ed[111] !== a || ed[112] !== l
            ? ((c = (0, i.jsxs)(i.Fragment, { children: [t, a, l] })),
              (ed[110] = t),
              (ed[111] = a),
              (ed[112] = l),
              (ed[113] = c))
            : (c = ed[113]),
          (q = c))
      }
      return (
        ed[114] !== eR || ed[115] !== eK || ed[116] !== ez
          ? ((ei = "ready"),
            eK ? (ei = "loading") : (eR || !ez) && (ei = "error"),
            (ed[114] = eR),
            (ed[115] = eK),
            (ed[116] = ez),
            (ed[117] = ei))
          : (ei = ed[117]),
        ed[118] !== e_.key ||
        ed[119] !== e_.state ||
        ed[120] !== eS ||
        ed[121] !== em ||
        ed[122] !== eh ||
        ed[123] !== ei
          ? ((ea = (0, i.jsx)(U.U, {
              observeShell: (e) => {
                if (ej.current && "analytics" === eh)
                  return (0, G.zF)(ej.current, e, () => {
                    eM.current?.scope === e &&
                      (0, a.jF)("codex_sites", em, eS === p.rc.Push, (0, G.oH)(e_.state), e_.key, ei)
                  })
              },
            })),
            (ed[118] = e_.key),
            (ed[119] = e_.state),
            (ed[120] = eS),
            (ed[121] = em),
            (ed[122] = eh),
            (ed[123] = ei),
            (ed[124] = ea))
          : (ea = ed[124]),
        ed[125] !== eF || ed[126] !== eA || ed[127] !== ef
          ? ((eo =
              null != ef
                ? eF
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      null,
                      (0, i.jsx)(i.Fragment, { children: (0, i.jsx)(m.F, { separator: eA, children: eF }) }),
                    ],
                  })),
            (ed[125] = eF),
            (ed[126] = eA),
            (ed[127] = ef),
            (ed[128] = eo))
          : (eo = ed[128]),
        ed[129] === Symbol.for("react.memo_cache_sentinel")
          ? ((er = (e) => {
              eT(e.currentTarget.scrollTop > 0)
            }),
            (ed[129] = er))
          : (er = ed[129]),
        ed[130] !== q
          ? ((el = (0, i.jsx)("div", {
              className: "min-h-0 flex-1 scrollbar-stable overflow-y-auto px-panel pt-panel pb-panel md:pt-16",
              onScroll: er,
              children: (0, i.jsx)("div", {
                className: "mx-auto flex w-full max-w-3xl flex-col gap-6 pb-8",
                children: q,
              }),
            })),
            (ed[130] = q),
            (ed[131] = el))
          : (el = ed[131]),
        ed[132] !== ea || ed[133] !== eo || ed[134] !== el
          ? ((ec = (0, i.jsxs)("div", {
              className: "flex h-full min-h-0 flex-col bg-surface",
              ref: ej,
              children: [ea, eo, el],
            })),
            (ed[132] = ea),
            (ed[133] = eo),
            (ed[134] = el),
            (ed[135] = ec))
          : (ec = ed[135]),
        ec
      )
    }
    function ee() {}
    function et(e) {
      let t,
        s,
        a,
        o,
        r,
        l,
        c,
        d = (0, n.c)(15),
        { onBack: g, onEdit: u, site: p } = e,
        m = p?.status === "suspended" ? null : p?.live_url
      return (
        d[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(j.z_d, { className: "rtl:rotate-180" })),
            (s = (0, i.jsx)(f.A, {
              id: "appgenSiteDetail.header.sites",
              defaultMessage: "Sites",
              description: "Back button from Site details to Sites",
            })),
            (d[0] = t),
            (d[1] = s))
          : ((t = d[0]), (s = d[1])),
        d[2] !== g
          ? ((a = (0, i.jsxs)(b.$, { color: "ghostActive", size: "toolbar", onClick: g, children: [t, s] })),
            (d[2] = g),
            (d[3] = a))
          : (a = d[3]),
        d[4] !== m
          ? ((o =
              null == m
                ? null
                : (0, i.jsxs)(b.z, {
                    color: "outlineSurface",
                    href: m,
                    size: "toolbar",
                    onClick: (e) => {
                      ;(0, v.PQ)({ event: e, href: m, initiator: "sites_library", openAsWebsite: !0 })
                    },
                    children: [
                      (0, i.jsx)(j.NSk, {}),
                      (0, i.jsx)(f.A, {
                        id: "appgenSiteDetail.visit",
                        defaultMessage: "Visit",
                        description: "Button on the Site details page that opens the published website",
                      }),
                    ],
                  })),
            (d[4] = m),
            (d[5] = o))
          : (o = d[5]),
        d[6] !== u || d[7] !== p
          ? ((r = null == p || null == u ? null : (0, i.jsx)(ei, { site: p, onEdit: u })),
            (d[6] = u),
            (d[7] = p),
            (d[8] = r))
          : (r = d[8]),
        d[9] !== o || d[10] !== r
          ? ((l = (0, i.jsxs)(h.hq, { children: [o, r] })), (d[9] = o), (d[10] = r), (d[11] = l))
          : (l = d[11]),
        d[12] !== a || d[13] !== l
          ? ((c = (0, i.jsxs)(h.oE, { children: [a, l] })), (d[12] = a), (d[13] = l), (d[14] = c))
          : (c = d[14]),
        c
      )
    }
    function es(e) {
      let t,
        s,
        a,
        o,
        r,
        l,
        c,
        d,
        u = (0, n.c)(20),
        { site: f } = e,
        { data: p, isLoading: m } = (0, z.useAppgenScreenshotSrc)(f.screenshot_url),
        [h, b] = (0, g.useState)(p),
        v = null == f.screenshot_url ? void 0 : (p ?? h)
      v !== h && b(v)
      let y = "suspended" === f.status ? null : f.live_url
      if (null != v) {
        let e
        ;(u[0] !== v
          ? ((e = (0, i.jsx)("img", { alt: "", className: "size-full object-cover", src: v })), (u[0] = v), (u[1] = e))
          : (e = u[1]),
          (t = e))
      } else if (m) {
        let e
        ;(u[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(S.X, { size: "fill" })), (u[2] = e))
          : (e = u[2]),
          (t = e))
      } else {
        let e
        ;(u[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(A.A, { "aria-hidden": !0, className: "icon-md" })), (u[3] = e))
          : (e = u[3]),
          (t = e))
      }
      return (
        u[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)("span", {
              "aria-hidden": !0,
              className: "pointer-events-none absolute inset-0 rounded-lg ring-1 ring-border ring-inset",
            })),
            (u[4] = s))
          : (s = u[4]),
        u[5] !== t
          ? ((a = (0, i.jsxs)("div", {
              className:
                "relative flex h-15 w-26 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-surface-secondary/92",
              children: [t, s],
            })),
            (u[5] = t),
            (u[6] = a))
          : (a = u[6]),
        u[7] !== f.title
          ? ((o = (0, i.jsx)("h1", {
              className: "text-2xl leading-8 font-normal wrap-anywhere text-default",
              children: f.title,
            })),
            (u[7] = f.title),
            (u[8] = o))
          : (o = u[8]),
        u[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(j.$Rp, { "aria-hidden": !0, className: "shrink-0" })), (u[9] = r))
          : (r = u[9]),
        u[10] !== y || u[11] !== f.slug
          ? ((l = (0, i.jsxs)("div", {
              className: "flex min-w-0 items-center gap-1 text-sm leading-5 text-tertiary",
              children: [
                r,
                null == y
                  ? (0, i.jsx)("span", { className: "min-w-0 truncate", children: f.slug })
                  : (0, i.jsx)(x.G, {
                      className: "min-w-0 truncate text-sm",
                      appearance: "secondary",
                      underline: "hover",
                      href: y,
                      initiator: "sites_library",
                      openAsWebsite: !0,
                      children: (0, L.Go)(y),
                    }),
              ],
            })),
            (u[10] = y),
            (u[11] = f.slug),
            (u[12] = l))
          : (l = u[12]),
        u[13] !== o || u[14] !== l
          ? ((c = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-2", children: [o, l] })),
            (u[13] = o),
            (u[14] = l),
            (u[15] = c))
          : (c = u[15]),
        u[16] !== f.title || u[17] !== a || u[18] !== c
          ? ((d = (0, i.jsxs)("section", {
              "aria-label": f.title,
              className: "flex min-w-0 items-center gap-4",
              children: [a, c],
            })),
            (u[16] = f.title),
            (u[17] = a),
            (u[18] = c),
            (u[19] = d))
          : (d = u[19]),
        d
      )
    }
    function ei(e) {
      let t,
        s,
        a,
        l,
        c = (0, n.c)(9),
        { onEdit: d, site: g } = e,
        u = "suspended" === g.status
      ;(c[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(y.I, { asset: r.h })),
          (s = (0, i.jsx)(f.A, {
            id: "appgenSiteDetail.edit",
            defaultMessage: "Edit",
            description: "Button label for editing a Site from its details page",
          })),
          (c[0] = t),
          (c[1] = s))
        : ((t = c[0]), (s = c[1])),
        c[2] !== u || c[3] !== d
          ? ((a = (0, i.jsxs)(b.$, {
              color: "outlineSurface",
              disabled: u,
              size: "toolbar",
              onClick: d,
              children: [t, s],
            })),
            (c[2] = u),
            (c[3] = d),
            (c[4] = a))
          : (a = c[4]))
      let p = a
      return (
        c[5] !== p || c[6] !== u || c[7] !== g.disabled_by
          ? ((l = u
              ? (0, i.jsx)(o.m, {
                  interactive: "openai" === g.disabled_by,
                  content: (0, i.jsx)(I.V, { disabledBy: g.disabled_by }),
                  children: p,
                })
              : p),
            (c[5] = p),
            (c[6] = u),
            (c[7] = g.disabled_by),
            (c[8] = l))
          : (l = c[8]),
        l
      )
    }
    function en(e) {
      let t,
        s,
        a,
        o,
        r = (0, n.c)(6),
        { onRetry: l } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(f.A, {
              id: "appgenSiteDetail.error.retry",
              defaultMessage: "Retry",
              description: "Button to retry loading Site details after a load failure",
            })),
            (r[0] = t))
          : (t = r[0]),
        r[1] !== l
          ? ((s = (0, i.jsx)(b.$, { color: "outline", onClick: l, children: t })), (r[1] = l), (r[2] = s))
          : (s = r[2]),
        r[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(f.A, {
              id: "appgenSiteDetail.error.title",
              defaultMessage: "Unable to load site",
              description: "Error state shown when Site details cannot load",
            })),
            (r[3] = a))
          : (a = r[3]),
        r[4] !== s
          ? ((o = (0, i.jsx)(_.A, { className: "min-h-96 flex-1", actions: s, title: a })), (r[4] = s), (r[5] = o))
          : (o = r[5]),
        o
      )
    }
  },
  J8LM(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      a = s("zd8w"),
      o = s("HZfM")
    s.d(
      t,
      {},
      {
        n: function (e) {
          let t,
            s,
            r,
            l = (0, n.c)(7),
            { navigation: c, to: d } = e,
            g = c?.onNavigate
          return (
            l[0] !== g || l[1] !== d
              ? ((t = () => {
                  g?.(d, { replace: !0 })
                }),
                (s = [g, d]),
                (l[0] = g),
                (l[1] = d),
                (l[2] = t),
                (l[3] = s))
              : ((t = l[2]), (s = l[3])),
            (0, a.useEffect)(t, s),
            l[4] !== g || l[5] !== d
              ? ((r = null == g ? (0, i.jsx)(o.C5, { replace: !0, to: d }) : null), (l[4] = g), (l[5] = d), (l[6] = r))
              : (r = l[6]),
            r
          )
        },
      },
    )
  },
  v2gA(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      a = s("IX2C"),
      o = s("Wf1j"),
      r = s("oyxz"),
      l = s("Sm6l"),
      c = s("HOLv"),
      d = s("BSnr")
    s.d(
      t,
      {},
      {
        U: function (e) {
          let t,
            s,
            g,
            u,
            f,
            p,
            m,
            h = (0, n.c)(16),
            { disabled: b, isRefreshing: x, onRefresh: v } = e,
            y = void 0 === b || b,
            j = void 0 !== x && x,
            _ = (0, o.A)()
          return (
            h[0] !== _ || h[1] !== j
              ? ((t = j
                  ? _.formatMessage({
                      id: "appgenSettings.database.refreshing.ariaLabel",
                      defaultMessage: "Refreshing database",
                      description: "Accessible label while refreshing live Site database data",
                    })
                  : _.formatMessage({
                      id: "appgenSettings.database.refresh.ariaLabel",
                      defaultMessage: "Refresh database",
                      description: "Accessible label for refreshing live Site database data",
                    })),
                (h[0] = _),
                (h[1] = j),
                (h[2] = t))
              : (t = h[2]),
            h[3] !== j ? ((s = j ? null : (0, i.jsx)(c.I, { asset: a.o })), (h[3] = j), (h[4] = s)) : (s = h[4]),
            h[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, i.jsx)(r.A, {
                  id: "appgenSettings.database.refresh",
                  defaultMessage: "Refresh",
                  description: "Button label for refreshing live Site database data",
                })),
                (h[5] = g))
              : (g = h[5]),
            h[6] !== y || h[7] !== j || h[8] !== v || h[9] !== t || h[10] !== s
              ? ((u = (0, i.jsxs)(l.$, {
                  "aria-label": t,
                  color: "outline",
                  disabled: y,
                  loading: j,
                  size: "toolbar",
                  type: "button",
                  onClick: v,
                  children: [s, g],
                })),
                (h[6] = y),
                (h[7] = j),
                (h[8] = v),
                (h[9] = t),
                (h[10] = s),
                (h[11] = u))
              : (u = h[11]),
            h[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, i.jsx)(r.A, {
                  id: "appgenSettings.database.description",
                  defaultMessage: "View the data used by your live site",
                  description: "Description for the Site database viewer",
                })),
                (p = (0, i.jsx)(r.A, {
                  id: "appgenSettings.database.title",
                  defaultMessage: "Database",
                  description: "Heading for the Site database viewer",
                })),
                (h[12] = f),
                (h[13] = p))
              : ((f = h[12]), (p = h[13])),
            h[14] !== u
              ? ((m = (0, i.jsx)(d.X.Header, { size: "base", actions: u, subtitle: f, title: p })),
                (h[14] = u),
                (h[15] = m))
              : (m = h[15]),
            m
          )
        },
        f: function (e) {
          let t,
            s,
            a,
            o,
            c,
            g = (0, n.c)(9),
            { disabled: u, filter: f, onCreate: p } = e,
            m = void 0 === u || u
          return (
            g[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, i.jsx)(r.A, {
                  id: "appgenAutomations.title",
                  defaultMessage: "Scheduled tasks",
                  description: "Heading for the list of a Site's cloud scheduled tasks",
                })),
                (s = (0, i.jsx)(r.A, {
                  id: "appgenAutomations.description",
                  defaultMessage: "Update your site automatically on a schedule",
                  description: "Description of the Site Scheduled tab",
                })),
                (g[0] = t),
                (g[1] = s))
              : ((t = g[0]), (s = g[1])),
            g[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, i.jsx)(r.A, {
                  id: "appgenAutomations.createTask",
                  defaultMessage: "Create task",
                  description: "Button to open the existing cloud task setup for this Site",
                })),
                (g[2] = a))
              : (a = g[2]),
            g[3] !== m || g[4] !== p
              ? ((o = (0, i.jsx)(l.$, {
                  color: "outlineSurface",
                  radius: "large",
                  size: "composerSmLabel",
                  disabled: m,
                  onClick: p,
                  children: a,
                })),
                (g[3] = m),
                (g[4] = p),
                (g[5] = o))
              : (o = g[5]),
            g[6] !== f || g[7] !== o
              ? ((c = (0, i.jsx)(d.X.Header, {
                  size: "base",
                  subtitleWrap: "wrap",
                  title: t,
                  subtitle: s,
                  actions: (0, i.jsxs)("div", { className: "flex items-center gap-2", children: [f, o] }),
                })),
                (g[6] = f),
                (g[7] = o),
                (g[8] = c))
              : (c = g[8]),
            c
          )
        },
      },
    )
  },
  bBU4(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      a = s("oyxz"),
      o = s("X3K1"),
      r = s("BSnr"),
      l = s("ZEx5"),
      c = s("v2gA")
    function d(e) {
      let t,
        s,
        o,
        r,
        l = (0, n.c)(7),
        { children: c } = e
      return (
        l[0] !== c
          ? ((t =
              c ??
              (0, i.jsx)(a.A, {
                id: "appgenSettings.database.loading",
                defaultMessage: "Loading database…",
                description: "Loading status while Site database metadata is being loaded",
              })),
            (l[0] = c),
            (l[1] = t))
          : (t = l[1]),
        l[2] !== t
          ? ((s = (0, i.jsx)("span", { className: "sr-only", children: t })), (l[2] = t), (l[3] = s))
          : (s = l[3]),
        l[4] === Symbol.for("react.memo_cache_sentinel") ? ((o = [0, 1, 2].map(g)), (l[4] = o)) : (o = l[4]),
        l[5] !== s
          ? ((r = (0, i.jsxs)("div", {
              className: "flex min-h-40 gap-4 px-4 py-8",
              "aria-busy": "true",
              role: "status",
              children: [s, o],
            })),
            (l[5] = s),
            (l[6] = r))
          : (r = l[6]),
        r
      )
    }
    function g(e) {
      return (0, i.jsx)(o.P, { lines: 5 }, e)
    }
    function u() {
      let e,
        t,
        s = (0, n.c)(2)
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("span", {
              className: "sr-only",
              children: (0, i.jsx)(a.A, {
                id: "appgenAutomations.loading",
                defaultMessage: "Loading scheduled tasks…",
                description:
                  "Accessible loading status while the Scheduled tab for a Site loads its linked cloud tasks",
              }),
            })),
            (s[0] = e))
          : (e = s[0]),
        s[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsxs)("div", {
              "aria-busy": "true",
              role: "status",
              children: [
                e,
                (0, i.jsx)(l.t, {
                  dividers: !1,
                  children: (0, i.jsx)("div", { className: "p-3", children: [0, 1, 2].map(f) }),
                }),
              ],
            })),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function f(e) {
      return (0, i.jsxs)(
        "div",
        {
          className: "flex min-w-0 flex-col gap-0.5 px-3 py-3",
          children: [
            (0, i.jsx)("div", {
              className: "flex h-lh items-center text-sm",
              children: (0, i.jsx)(o.X, { className: "w-32 max-w-full", size: "md" }),
            }),
            (0, i.jsx)("div", {
              className: "flex h-4 items-center",
              children: (0, i.jsx)(o.X, { className: "w-48 max-w-full", size: "sm" }),
            }),
          ],
        },
        e,
      )
    }
    s.d(
      t,
      {},
      {
        XZ: u,
        Ye: d,
        yW: function (e) {
          let t,
            s,
            a,
            o = (0, n.c)(7),
            { tab: g } = e
          return (
            o[0] !== g
              ? ((t = "database" === g ? (0, i.jsx)(c.U, {}) : (0, i.jsx)(c.f, {})), (o[0] = g), (o[1] = t))
              : (t = o[1]),
            o[2] !== g
              ? ((s = (0, i.jsx)(r.X.Content, {
                  children: "database" === g ? (0, i.jsx)(l.t, { children: (0, i.jsx)(d, {}) }) : (0, i.jsx)(u, {}),
                })),
                (o[2] = g),
                (o[3] = s))
              : (s = o[3]),
            o[4] !== t || o[5] !== s
              ? ((a = (0, i.jsxs)(r.X, { children: [t, s] })), (o[4] = t), (o[5] = s), (o[6] = a))
              : (a = o[6]),
            a
          )
        },
      },
    )
  },
  Mod9(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      a = s("rLkR"),
      o = s("Wf1j"),
      r = s("oyxz"),
      l = s("Sm6l"),
      c = s("HOLv"),
      d = s("BSnr")
    s.d(
      t,
      {},
      {
        e: function (e) {
          let t,
            s,
            g,
            u,
            f,
            p,
            m,
            h,
            b = (0, n.c)(19),
            { disabled: x, isRefreshing: v, onAdd: y, onRefresh: j } = e,
            _ = void 0 === x || x,
            S = void 0 !== v && v,
            M = (0, o.A)()
          ;(b[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(r.A, {
                id: "appgenPlugins.title",
                defaultMessage: "Site plugins",
                description:
                  "Heading in a Site's Plugins settings tab, viewed by its owner or editor. Plugins is the product term for integrations the site can use.",
              })),
              (s = (0, i.jsx)(r.A, {
                id: "appgenPlugins.description",
                defaultMessage: "View and manage plugins used by this site",
                description:
                  "Subtitle in a Site's Plugins settings tab explaining that the list shows plugins configured for this site, rather than every plugin installed by its owner.",
              })),
              (b[0] = t),
              (b[1] = s))
            : ((t = b[0]), (s = b[1])),
            b[2] !== M
              ? ((g = M.formatMessage({
                  id: "appgenPlugins.refresh.ariaLabel",
                  defaultMessage: "Refresh plugins",
                  description:
                    "Accessible label on the refresh icon button in a Site's Plugins settings tab. Activating it reloads the site's current plugin configuration.",
                })),
                (b[2] = M),
                (b[3] = g))
              : (g = b[3]))
          let w = null == j || S,
            A = S ? "motion-safe:animate-spin" : void 0
          return (
            b[4] !== A ? ((u = (0, i.jsx)(c.I, { className: A, asset: a.S })), (b[4] = A), (b[5] = u)) : (u = b[5]),
            b[6] !== S || b[7] !== j || b[8] !== g || b[9] !== w || b[10] !== u
              ? ((f = (0, i.jsx)(l.$, {
                  uniform: !0,
                  "aria-busy": S,
                  "aria-label": g,
                  color: "ghost",
                  disabled: w,
                  radius: "small",
                  size: "composerSmLabel",
                  type: "button",
                  onClick: j,
                  children: u,
                })),
                (b[6] = S),
                (b[7] = j),
                (b[8] = g),
                (b[9] = w),
                (b[10] = u),
                (b[11] = f))
              : (f = b[11]),
            b[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((p = (0, i.jsx)(r.A, {
                  id: "appgenPlugins.add",
                  defaultMessage: "Add",
                  description:
                    "Short button label in a Site's Plugins settings header. Opens a chat with a draft asking to add a plugin to this site; the user sends the draft.",
                })),
                (b[12] = p))
              : (p = b[12]),
            b[13] !== _ || b[14] !== y
              ? ((m = (0, i.jsx)(l.$, {
                  color: "secondary",
                  disabled: _,
                  radius: "large",
                  size: "composerSmLabel",
                  type: "button",
                  onClick: y,
                  children: p,
                })),
                (b[13] = _),
                (b[14] = y),
                (b[15] = m))
              : (m = b[15]),
            b[16] !== m || b[17] !== f
              ? ((h = (0, i.jsx)(d.X.Header, {
                  size: "base",
                  subtitleWrap: "wrap",
                  title: t,
                  subtitle: s,
                  actions: (0, i.jsxs)(i.Fragment, { children: [f, m] }),
                })),
                (b[16] = m),
                (b[17] = f),
                (b[18] = h))
              : (h = b[18]),
            h
          )
        },
      },
    )
  },
  XKfB(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      a = s("oyxz"),
      o = s("X3K1"),
      r = s("BSnr"),
      l = s("AWNZ"),
      c = s("ZEx5"),
      d = s("Mod9")
    function g() {
      let e,
        t,
        s = (0, n.c)(2)
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("span", {
              className: "sr-only",
              children: (0, i.jsx)(a.A, {
                id: "appgenPlugins.loading",
                defaultMessage: "Loading plugins…",
                description:
                  "Accessible status announced while a Site's Plugins settings tab loads its current plugin configuration.",
              }),
            })),
            (s[0] = e))
          : (e = s[0]),
        s[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsxs)("div", {
              "aria-busy": "true",
              role: "status",
              children: [e, (0, i.jsx)(c.t, { children: [0, 1, 2].map(u) })],
            })),
            (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    function u(e) {
      return (0, i.jsx)(
        l.ic,
        {
          control: null,
          description: (0, i.jsx)(o.X, { className: "w-32", size: "sm" }),
          label: (0, i.jsx)(o.X, { className: "w-24", size: "md" }),
        },
        e,
      )
    }
    s.d(
      t,
      {},
      {
        g: function () {
          let e,
            t = (0, n.c)(1)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsxs)(r.X, { children: [(0, i.jsx)(d.e, {}), (0, i.jsx)(g, {})] })), (t[0] = e))
              : (e = t[0]),
            e
          )
        },
        u: g,
      },
    )
  },
  RRpo(e, t, s) {
    let i = (0, s("Qgfj").YK)({
      creatorMicro: {
        id: "codexMicro.deviceName.creatorMicro",
        defaultMessage: "Creator Micro",
        description: "Product name for the Creator Micro keyboard",
      },
    })
    s.d(t, {}, { b: i })
  },
  S5NB(e, t, s) {
    let i = (0, s("Qgfj").YK)({
      title: {
        id: "restricted.cloudComputer.title",
        defaultMessage: "Cloud computer",
        description: "Title of cloud computer settings",
      },
      cookies: {
        id: "restricted.cloudComputer.cookies",
        defaultMessage: "ChatGPT Work cookies",
        description: "Cookies managed by ChatGPT Work, separate from the user’s dot’s cookies",
      },
      cookiesDescription: {
        id: "restricted.cloudComputer.cookies.description",
        defaultMessage: "Manage cookies used by ChatGPT Work",
        description: "Description of the cookie manager for ChatGPT Work in the cloud",
      },
      approvalsDescription: {
        id: "restricted.cloudComputer.approvals.description",
        defaultMessage: "Choose whether ChatGPT Work asks before opening websites. Applies only to ChatGPT Work.",
        description: "Explains that cloud website approval settings affect ChatGPT Work, not the user's dot",
      },
      approvals: {
        id: "restricted.cloudComputer.approvals",
        defaultMessage: "ChatGPT Work website approvals",
        description: "Website approvals apply only to ChatGPT Work in the cloud",
      },
    })
    s.d(t, {}, { P: i })
  },
  uxIz(e, t, s) {
    let i = (0, s("Qgfj").YK)({
      title: {
        id: "restricted.passwords.title",
        defaultMessage: "Passwords",
        description:
          "Title of the settings section for saved website passwords, distinct from the user's ChatGPT login password",
      },
      search: {
        id: "restricted.passwords.search",
        defaultMessage: "Search passwords",
        description: "Placeholder and accessible label for filtering saved passwords by website or account label",
      },
    })
    s.d(t, {}, { $: "1675852838", N: i })
  },
  Y6nA(e, t, s) {
    s.d(t, { G: () => u })
    var i = s("WLmQ"),
      n = s("Qgfj"),
      a = s("EZRW")
    let o = (0, n.YK)({
      title: {
        id: "settings.nav.rosalind",
        defaultMessage: "GPT-Rosalind",
        description: "Title for the GPT-Rosalind plugin settings section",
      },
    })
    var r = s("S5NB"),
      l = s("uxIz"),
      c = s("qaaZ")
    let d = (0, n.zR)({
        id: "settings.nav.general-settings",
        defaultMessage: "General",
        description: "Title for general settings section",
      }),
      g = (0, n.YK)({
        family: d,
        billing: {
          id: "settings.nav.billing",
          defaultMessage: "Billing",
          description:
            "Navigation title for personal ChatGPT subscription, payment methods, invoices, and wallet settings",
        },
        agreements: {
          id: "workspaceAgreements.title",
          defaultMessage: "Agreements",
          description: "Title of the workspace agreements page",
        },
        age: {
          id: "settings.chatGpt.age.title",
          defaultMessage: "Age",
          description: "Title of the Age detail page within ChatGPT Account settings",
        },
        account: {
          id: "settings.nav.account",
          defaultMessage: "Account",
          description: "Title for ChatGPT account settings section",
        },
        "parental-controls": {
          id: "settings.nav.parental-controls",
          defaultMessage: "Parental controls",
          description: "Title for ChatGPT settings showing family members linked through parental controls",
        },
        "trusted-contact": {
          id: "settingsModal.trustedContacts.sectionTitle",
          defaultMessage: "Trusted contact",
          description: "Title for Trusted contact settings",
        },
        safety: {
          id: "settings.nav.safetyAndWellbeing",
          defaultMessage: "Safety & wellbeing",
          description: "Title for ChatGPT safety and wellbeing settings, including time management",
        },
        "time-management": {
          id: "settings.nav.time-management",
          defaultMessage: "Time management",
          description: "Title for ChatGPT time management settings, including the teen's Quiet Hours schedule",
        },
        appearance: {
          id: "settings.nav.appearance",
          defaultMessage: "Appearance",
          description: "Title for appearance settings section",
        },
        voice: { id: "settings.nav.voice", defaultMessage: "Voice", description: "Title for voice settings section" },
        storage: {
          id: "settings.nav.storage",
          defaultMessage: "Storage",
          description: "Title for ChatGPT library storage settings section",
        },
        pets: {
          id: "settings.nav.miniAndPets",
          defaultMessage: "Mini & Pets",
          description:
            "Title for settings for Mini, the floating compact panel, and its optional pets; use approved localized terminology",
        },
        chatGptPets: {
          id: "settings.nav.pets.v2",
          defaultMessage: "Pets",
          description:
            "Title for ChatGPT Work settings for choosing, creating, or uploading a collectible pet character",
        },
        "general-settings": d,
        notifications: {
          id: "settings.nav.notifications",
          defaultMessage: "Notifications",
          description: "Title for notifications settings section",
        },
        import: {
          id: "settings.nav.import.v2",
          defaultMessage: "Import",
          description:
            "Title for the import settings section. In French, use the infinitive verb 'Importer', not the noun 'Importation'.",
        },
        profile: { id: "settings.nav.profile", defaultMessage: "Profile", description: "Title for profile section" },
        security: {
          id: "settings.nav.security",
          defaultMessage: "Security",
          description: "Title for ChatGPT security settings section",
        },
        "keyboard-shortcuts": {
          id: "settings.nav.keyboard-shortcuts",
          defaultMessage: "Keyboard shortcuts",
          description: "Title for keyboard shortcuts settings section",
        },
        "codex-micro": {
          id: "settings.nav.codex-micro",
          defaultMessage: "Codex Micro",
          description: "Title for Codex Micro settings section",
        },
        appshots: {
          id: "settings.nav.appshots",
          defaultMessage: "Appshots",
          description:
            "Navigation title for settings that configure Appshots, Codex captures of the frontmost app window",
        },
        agent: {
          id: "settings.nav.agent",
          defaultMessage: "Configuration",
          description: "Title for configuration settings section",
        },
        "work-settings": {
          id: "settings.nav.workPreferences",
          defaultMessage: "Work preferences",
          description: "Navigation title for saved account preferences for Work",
        },
        "git-settings": {
          id: "settings.nav.git-settings",
          defaultMessage: "Git",
          description: "Title for git settings section",
        },
        "ads-controls": {
          id: "settings.nav.ads-controls",
          defaultMessage: "Ads controls",
          description: "Navigation title for ChatGPT advertising preferences and history",
        },
        "archived-chats": {
          id: "settings.nav.archived-chats",
          defaultMessage: "Archived chats",
          description: "Title for archived chats settings section",
        },
        "data-controls": {
          id: "settings.nav.chatGptDataControls",
          defaultMessage: "Data controls",
          description: "Title for shared data controls when ChatGPT settings are available",
        },
        chatGptSecurity: {
          id: "settings.nav.chatGptSecurity",
          defaultMessage: "Security and login",
          description: "Title for ChatGPT security and login settings section",
        },
        chatGptKeyboard: {
          id: "settings.nav.chatGptKeyboard",
          defaultMessage: "Keyboard",
          description: "Title for ChatGPT keyboard settings section",
        },
        chatGptRemotes: {
          id: "settings.nav.chatGptRemotes",
          defaultMessage: "Remotes",
          description: "Title for ChatGPT remote computer settings section",
        },
        chatGptInternalSettings: {
          id: "settings.nav.chatGptInternalSettings",
          defaultMessage: "Employee Only",
          description: "Title for employee-only ChatGPT settings section",
        },
        "code-review": {
          id: "settings.nav.codeReview",
          defaultMessage: "Code Review",
          description: "Title for the Code Review settings section",
        },
        "usage-code-review": {
          id: "settings.nav.codeReviewAnalytics",
          defaultMessage: "Code review analytics",
          description:
            "Settings navigation and command menu label for code review usage analytics, distinct from code review configuration",
        },
        "cloud-settings": {
          id: "settings.nav.cloudSettings",
          defaultMessage: "Cloud preferences",
          description: "Title for cloud settings section",
        },
        "codex-cloud": {
          id: "settings.nav.codexCloud",
          defaultMessage: "Codex Cloud",
          description: "Settings for Codex Cloud environments and the personal vault",
        },
        legacyCodexCloud: {
          id: "settings.nav.legacyCodexCloud",
          defaultMessage: "Legacy Codex Cloud",
          description: "Settings for the legacy Codex Cloud environment system",
        },
        "cloud-environments": {
          id: "settings.nav.cloudEnvironments",
          defaultMessage: "Cloud environments",
          description: "Title for cloud environments settings section",
        },
        personalization: {
          id: "settings.nav.personalization",
          defaultMessage: "Personalization",
          description: "Title for personalization settings section",
        },
        chronicle: {
          id: "settings.nav.chronicle",
          defaultMessage: "Computer history",
          description: "Title for Computer history settings section",
        },
        usage: {
          id: "settings.nav.usage",
          defaultMessage: "Usage & billing",
          description: "Title for usage and billing settings section",
        },
        enterpriseUsage: {
          id: "settings.nav.enterpriseUsage",
          defaultMessage: "Usage",
          description: "Title for the enterprise usage settings section when analytics has its own section",
        },
        analytics: {
          id: "settings.nav.analytics",
          defaultMessage: "Analytics",
          description: "Title for the usage analytics settings section",
        },
        "consumer-view": {
          id: "settings.nav.consumerView",
          defaultMessage: "Consumer analytics (internal)",
          description:
            "Settings navigation label for a restricted consumer usage dashboard used solely for OpenAI internal testing",
        },
        debug: { id: "settings.nav.debug", defaultMessage: "Debug", description: "Title for debug settings section" },
        "computer-use": {
          id: "settings.nav.computer-use",
          defaultMessage: "Computer use",
          description: "Title for computer use settings section",
        },
        "browser-use": {
          id: "settings.nav.browser-use",
          defaultMessage: "Browser",
          description: "Title for in-app browser settings section",
        },
        extension: {
          id: "settings.nav.namedBrowserExtension",
          defaultMessage: "{browserName} extension",
          description:
            "Title for browser extension settings; browserName is the browser's brand name, such as Chrome, Edge, or Brave",
        },
        browserExtension: {
          id: "settings.nav.browser-extension",
          defaultMessage: "Browser extension",
          description: "Title for browser extension settings when the current browser cannot be identified",
        },
        "local-environments": {
          id: "settings.nav.local-environments",
          defaultMessage: "Environments",
          description: "Title for environments settings section",
        },
        worktrees: {
          id: "settings.nav.worktrees.v2",
          defaultMessage: "Worktrees",
          description:
            "Title for worktrees settings section. Keep 'Worktrees' in English in all locales; it is a product term.",
        },
        environments: {
          id: "settings.nav.environments",
          defaultMessage: "Cloud Environments",
          description: "Title for environments settings section",
        },
        "mcp-settings": {
          id: "settings.nav.mcp-settings",
          defaultMessage: "MCP servers",
          description: "Title for MCP servers settings section",
        },
        gateways: {
          id: "settings.nav.gateways",
          defaultMessage: "Model Providers",
          description: "Navigation label for desktop model gateway settings",
        },
        "hooks-settings": {
          id: "settings.nav.hooks-settings",
          defaultMessage: "Hooks",
          description: "Title for hooks settings section",
        },
        connections: {
          id: "settings.nav.connections",
          defaultMessage: "Connections",
          description: "Title for connections settings section",
        },
        "plugins-settings": {
          id: "settings.nav.plugins-settings",
          defaultMessage: "Plugins",
          description: "Title for plugins settings section",
        },
        "file-type-handlers": {
          id: "settings.nav.file-type-handlers",
          defaultMessage: "File viewers",
          description: "Title for choosing what opens each file type in Codex",
        },
        "skills-settings": {
          id: "settings.nav.skills-settings",
          defaultMessage: "Skills",
          description: "Title for skills settings section",
        },
      })
    function u(e, t = !1, s = !1) {
      if ("rosalind" === e) return o.title
      if ("extension" === e) {
        let e = (0, a.e)()
        return null != e ? { ...g.extension, values: { browserName: i.Yp[e].shortDisplayName } } : g.browserExtension
      }
      if ("usage" === e && t) return g.enterpriseUsage
      if ("passwords" === e) return l.N.title
      if ("cloud-computer" === e) return r.P.title
      if ("teams" === e) return c.T.title
      if (s) {
        if ("usage" === e) return g.enterpriseUsage
        if ("connections" === e) return g.chatGptRemotes
        if ("debug" === e) return g.chatGptInternalSettings
        if ("keyboard-shortcuts" === e) return g.chatGptKeyboard
        if ("security" === e) return g.chatGptSecurity
      }
      return "cloud-environments" === e ? g.legacyCodexCloud : g[e]
    }
  },
  QyE3(e, t, s) {
    var i = s("ABep"),
      n = s("QosV"),
      a = s("on57"),
      o = s("oyxz"),
      r = s("RRpo"),
      l = s("Sm6l"),
      c = s("Yakm"),
      d = s("Y6nA")
    function g(e) {
      let t,
        s,
        a = (0, n.c)(7),
        { codexMicroDeviceModel: l, showChatGptDataControlsLabel: c, showUsageOnlyLabel: g, slug: u } = e,
        f = void 0 !== c && c,
        p = void 0 !== g && g
      if ("codex-micro" === u && "creator-micro-v2" === (void 0 === l ? null : l)) {
        let e
        return (
          a[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(o.A, { ...r.b.creatorMicro })), (a[0] = e))
            : (e = a[0]),
          e
        )
      }
      return (
        a[1] !== f || a[2] !== p || a[3] !== u
          ? ((t = (0, d.G)(u, p, f)), (a[1] = f), (a[2] = p), (a[3] = u), (a[4] = t))
          : (t = a[4]),
        a[5] !== t ? ((s = (0, i.jsx)(o.A, { ...t })), (a[5] = t), (a[6] = s)) : (s = a[6]),
        s
      )
    }
    s.d(
      t,
      {},
      {
        gl: g,
        s: function (e) {
          let t = (0, n.c)(62),
            { showChatGptDataControlsLabel: s, slug: a } = e
          if (
            void 0 !== s &&
            s &&
            [
              "browser-use",
              "connections",
              "data-controls",
              "debug",
              "keyboard-shortcuts",
              "security",
              "usage",
            ].includes(a)
          ) {
            let e, s
            return (
              t[0] !== a ? ((e = (0, d.G)(a, !1, !0)), (t[0] = a), (t[1] = e)) : (e = t[1]),
              t[2] !== e ? ((s = (0, i.jsx)(o.A, { ...e })), (t[2] = e), (t[3] = s)) : (s = t[3]),
              s
            )
          }
          switch (a) {
            case "rosalind":
            case "passwords":
            case "cloud-computer":
            case "age":
            case "agreements":
            case "billing":
            case "extension": {
              let e, s
              return (
                t[4] !== a ? ((e = (0, d.G)(a)), (t[4] = a), (t[5] = e)) : (e = t[5]),
                t[6] !== e ? ((s = (0, i.jsx)(o.A, { ...e })), (t[6] = e), (t[7] = s)) : (s = t[7]),
                s
              )
            }
            case "account": {
              let e
              return (
                t[8] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.account",
                      defaultMessage: "Account",
                      description: "Title for ChatGPT account settings section",
                    })),
                    (t[8] = e))
                  : (e = t[8]),
                e
              )
            }
            case "appshots": {
              let e
              return (
                t[9] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.appshots",
                      defaultMessage: "Appshots",
                      description:
                        "Page title for settings that configure Appshots, Codex captures of the frontmost app window",
                    })),
                    (t[9] = e))
                  : (e = t[9]),
                e
              )
            }
            case "appearance": {
              let e
              return (
                t[10] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.appearance",
                      defaultMessage: "Appearance",
                      description: "Title for appearance settings section",
                    })),
                    (t[10] = e))
                  : (e = t[10]),
                e
              )
            }
            case "voice": {
              let e
              return (
                t[11] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.voice",
                      defaultMessage: "Voice",
                      description: "Title for voice settings section",
                    })),
                    (t[11] = e))
                  : (e = t[11]),
                e
              )
            }
            case "storage": {
              let e
              return (
                t[12] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.storage",
                      defaultMessage: "Storage",
                      description: "Title for ChatGPT storage settings section",
                    })),
                    (t[12] = e))
                  : (e = t[12]),
                e
              )
            }
            case "family":
            case "parental-controls":
            case "trusted-contact":
            case "safety":
            case "time-management":
            case "pets": {
              let e, s
              return (
                t[13] !== a ? ((e = (0, d.G)(a)), (t[13] = a), (t[14] = e)) : (e = t[14]),
                t[15] !== e ? ((s = (0, i.jsx)(o.A, { ...e })), (t[15] = e), (t[16] = s)) : (s = t[16]),
                s
              )
            }
            case "general-settings": {
              let e
              return (
                t[17] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.general-settings",
                      defaultMessage: "General",
                      description: "Title for general settings section",
                    })),
                    (t[17] = e))
                  : (e = t[17]),
                e
              )
            }
            case "notifications": {
              let e
              return (
                t[18] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.notifications",
                      defaultMessage: "Notifications",
                      description: "Title for notifications settings section",
                    })),
                    (t[18] = e))
                  : (e = t[18]),
                e
              )
            }
            case "import": {
              let e
              return (
                t[19] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.import.v2",
                      defaultMessage: "Import",
                      description:
                        "Title for the import settings section. In French, use the infinitive verb 'Importer', not the noun 'Importation'.",
                    })),
                    (t[19] = e))
                  : (e = t[19]),
                e
              )
            }
            case "profile": {
              let e
              return (
                t[20] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.profile",
                      defaultMessage: "Profile",
                      description: "Title for profile section",
                    })),
                    (t[20] = e))
                  : (e = t[20]),
                e
              )
            }
            case "security": {
              let e
              return (
                t[21] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.security",
                      defaultMessage: "Security and login",
                      description: "Title for ChatGPT security settings section",
                    })),
                    (t[21] = e))
                  : (e = t[21]),
                e
              )
            }
            case "keyboard-shortcuts": {
              let e
              return (
                t[22] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.keyboard-shortcuts",
                      defaultMessage: "Keyboard shortcuts",
                      description: "Title for keyboard shortcuts settings section",
                    })),
                    (t[22] = e))
                  : (e = t[22]),
                e
              )
            }
            case "codex-micro": {
              let e
              return (
                t[23] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.codex-micro",
                      defaultMessage: "Codex Micro",
                      description: "Title for Codex Micro settings section",
                    })),
                    (t[23] = e))
                  : (e = t[23]),
                e
              )
            }
            case "agent": {
              let e
              return (
                t[24] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.agent",
                      defaultMessage: "Configuration",
                      description: "Title for configuration settings section",
                    })),
                    (t[24] = e))
                  : (e = t[24]),
                e
              )
            }
            case "work-settings": {
              let e
              return (
                t[25] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(g, { slug: "work-settings" })), (t[25] = e))
                  : (e = t[25]),
                e
              )
            }
            case "git-settings": {
              let e
              return (
                t[26] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.git-settings",
                      defaultMessage: "Git",
                      description: "Title for git settings section",
                    })),
                    (t[26] = e))
                  : (e = t[26]),
                e
              )
            }
            case "ads-controls": {
              let e
              return (
                t[27] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(g, { slug: "ads-controls" })), (t[27] = e))
                  : (e = t[27]),
                e
              )
            }
            case "data-controls":
            case "archived-chats": {
              let e
              return (t[28] !== a ? ((e = (0, i.jsx)(g, { slug: a })), (t[28] = a), (t[29] = e)) : (e = t[29]), e)
            }
            case "usage-code-review": {
              let e
              return (
                t[30] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.codeReview",
                      defaultMessage: "Code review",
                      description: "Title for code review settings section",
                    })),
                    (t[30] = e))
                  : (e = t[30]),
                e
              )
            }
            case "code-review": {
              let e
              return (
                t[31] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(g, { slug: "code-review" })), (t[31] = e))
                  : (e = t[31]),
                e
              )
            }
            case "cloud-settings": {
              let e
              return (
                t[32] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.cloudSettings",
                      defaultMessage: "Cloud preferences",
                      description: "Title for cloud settings section",
                    })),
                    (t[32] = e))
                  : (e = t[32]),
                e
              )
            }
            case "codex-cloud":
            case "cloud-environments": {
              let e, s
              return (
                t[33] !== a ? ((e = (0, d.G)(a)), (t[33] = a), (t[34] = e)) : (e = t[34]),
                t[35] !== e ? ((s = (0, i.jsx)(o.A, { ...e })), (t[35] = e), (t[36] = s)) : (s = t[36]),
                s
              )
            }
            case "personalization": {
              let e
              return (
                t[37] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.personalization",
                      defaultMessage: "Personalization",
                      description: "Title for personalization settings section",
                    })),
                    (t[37] = e))
                  : (e = t[37]),
                e
              )
            }
            case "chronicle": {
              let e
              return (
                t[38] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.chronicle",
                      defaultMessage: "Computer history",
                      description: "Title for Computer history settings section",
                    })),
                    (t[38] = e))
                  : (e = t[38]),
                e
              )
            }
            case "usage": {
              let e
              return (
                t[39] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.usage",
                      defaultMessage: "Usage & billing",
                      description: "Title for usage and billing settings section",
                    })),
                    (t[39] = e))
                  : (e = t[39]),
                e
              )
            }
            case "analytics": {
              let e
              return (
                t[40] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.analytics",
                      defaultMessage: "Analytics",
                      description: "Title for the usage analytics settings section",
                    })),
                    (t[40] = e))
                  : (e = t[40]),
                e
              )
            }
            case "consumer-view": {
              let e
              return (
                t[41] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.consumerView",
                      defaultMessage: "Consumer analytics (internal)",
                      description:
                        "Page title for a restricted consumer usage dashboard used solely for OpenAI internal testing",
                    })),
                    (t[41] = e))
                  : (e = t[41]),
                e
              )
            }
            case "debug": {
              let e
              return (
                t[42] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.debug",
                      defaultMessage: "Debug",
                      description: "Title for debug settings section",
                    })),
                    (t[42] = e))
                  : (e = t[42]),
                e
              )
            }
            case "computer-use": {
              let e
              return (
                t[43] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "computerUse.label",
                      defaultMessage: "Computer use",
                      description: "Label for the Computer Use feature",
                    })),
                    (t[43] = e))
                  : (e = t[43]),
                e
              )
            }
            case "browser-use": {
              let e
              return (
                t[44] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.browser-use",
                      defaultMessage: "Browser",
                      description: "Title for in-app browser settings section",
                    })),
                    (t[44] = e))
                  : (e = t[44]),
                e
              )
            }
            case "local-environments": {
              let e
              return (
                t[45] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.local-environments",
                      defaultMessage: "Environments",
                      description: "Title for environments settings section",
                    })),
                    (t[45] = e))
                  : (e = t[45]),
                e
              )
            }
            case "worktrees": {
              let e
              return (
                t[46] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.worktrees.v2",
                      defaultMessage: "Worktrees",
                      description:
                        "Title for worktrees settings section. Keep 'Worktrees' in English in all locales; it is a product term.",
                    })),
                    (t[46] = e))
                  : (e = t[46]),
                e
              )
            }
            case "environments": {
              let e
              return (
                t[47] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.environments",
                      defaultMessage: "Cloud Environments",
                      description: "Title for environments settings section",
                    })),
                    (t[47] = e))
                  : (e = t[47]),
                e
              )
            }
            case "gateways": {
              let e
              return (
                t[48] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.gateways",
                      defaultMessage: "Model Providers",
                      description: "Title for desktop model gateway settings",
                    })),
                    (t[48] = e))
                  : (e = t[48]),
                e
              )
            }
            case "mcp-settings": {
              let e
              return (
                t[49] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.mcp-settings",
                      defaultMessage: "MCP servers",
                      description: "Title for MCP servers settings section",
                    })),
                    (t[49] = e))
                  : (e = t[49]),
                e
              )
            }
            case "hooks-settings": {
              let e
              return (
                t[50] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.hooks-settings",
                      defaultMessage: "Hooks",
                      description: "Title for hooks settings section",
                    })),
                    (t[50] = e))
                  : (e = t[50]),
                e
              )
            }
            case "connections": {
              let e
              return (
                t[51] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.connections",
                      defaultMessage: "Connections",
                      description: "Title for connections settings section",
                    })),
                    (t[51] = e))
                  : (e = t[51]),
                e
              )
            }
            case "plugins-settings": {
              let e
              return (
                t[52] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.plugins-settings",
                      defaultMessage: "Plugins",
                      description: "Title for plugins settings section",
                    })),
                    (t[52] = e))
                  : (e = t[52]),
                e
              )
            }
            case "file-type-handlers": {
              let e, s
              return (
                t[53] !== a ? ((e = (0, d.G)(a)), (t[53] = a), (t[54] = e)) : (e = t[54]),
                t[55] !== e ? ((s = (0, i.jsx)(o.A, { ...e })), (t[55] = e), (t[56] = s)) : (s = t[56]),
                s
              )
            }
            case "skills-settings": {
              let e
              return (
                t[57] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, i.jsx)(o.A, {
                      id: "settings.section.skills-settings",
                      defaultMessage: "Skills",
                      description: "Title for skills settings section",
                    })),
                    (t[57] = e))
                  : (e = t[57]),
                e
              )
            }
            case "teams": {
              let e, s
              return (
                t[58] !== a ? ((e = (0, d.G)(a)), (t[58] = a), (t[59] = e)) : (e = t[59]),
                t[60] !== e ? ((s = (0, i.jsx)(o.A, { ...e })), (t[60] = e), (t[61] = s)) : (s = t[61]),
                s
              )
            }
          }
        },
        vg: function (e) {
          let t,
            s,
            o,
            r,
            d,
            g,
            u,
            f,
            p,
            m,
            h,
            b,
            x,
            v,
            y = (0, n.c)(29)
          y[0] !== e
            ? (({
                children: s,
                className: o,
                contentClassName: r,
                chevronClassName: t,
                leadingVisual: d,
                color: u,
                size: f,
                ...g
              } = e),
              (y[0] = e),
              (y[1] = t),
              (y[2] = s),
              (y[3] = o),
              (y[4] = r),
              (y[5] = d),
              (y[6] = g),
              (y[7] = u),
              (y[8] = f))
            : ((t = y[1]), (s = y[2]), (o = y[3]), (r = y[4]), (d = y[5]), (g = y[6]), (u = y[7]), (f = y[8]))
          let j = void 0 === u ? "outline" : u,
            _ = void 0 === f ? "toolbar" : f,
            S =
              "toolbar" === _ &&
              (null != d ? "pe-3 ps-[calc((var(--spacing-token-button-composer)-var(--spacing)*5)/2-1px)]" : "px-3")
          return (
            y[9] !== o || y[10] !== S
              ? ((p = (0, a.A)("max-w-full justify-between", S, o)), (y[9] = o), (y[10] = S), (y[11] = p))
              : (p = y[11]),
            y[12] !== r
              ? ((m = (0, a.A)("flex min-w-0 flex-1 items-center gap-1.5", r)), (y[12] = r), (y[13] = m))
              : (m = y[13]),
            y[14] !== s || y[15] !== d || y[16] !== m
              ? ((h = (0, i.jsxs)("span", { className: m, children: [d, s] })),
                (y[14] = s),
                (y[15] = d),
                (y[16] = m),
                (y[17] = h))
              : (h = y[17]),
            y[18] !== t
              ? ((b = (0, a.A)("icon-2xs shrink-0 text-tertiary", t)), (y[18] = t), (y[19] = b))
              : (b = y[19]),
            y[20] !== b ? ((x = (0, i.jsx)(c.A, { className: b })), (y[20] = b), (y[21] = x)) : (x = y[21]),
            y[22] !== j || y[23] !== g || y[24] !== _ || y[25] !== p || y[26] !== h || y[27] !== x
              ? ((v = (0, i.jsxs)(l.$, { color: j, size: _, className: p, ...g, children: [h, x] })),
                (y[22] = j),
                (y[23] = g),
                (y[24] = _),
                (y[25] = p),
                (y[26] = h),
                (y[27] = x),
                (y[28] = v))
              : (v = y[28]),
            v
          )
        },
      },
    )
  },
}
//# sourceMappingURL=496532.8540347a35.js.map
