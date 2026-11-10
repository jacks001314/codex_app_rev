export const __rspack_esm_ids = [278867]
export const __webpack_modules__ = {
  rUQK(e, t, a) {
    let n = [
      { id: "paragraph", command: "text paragraph normal", messageKey: "text" },
      { id: "heading1", command: "heading1 h1 heading 1", messageKey: "heading1" },
      { id: "heading2", command: "heading2 h2 heading 2", messageKey: "heading2" },
      { id: "heading3", command: "heading3 h3 heading 3", messageKey: "heading3" },
      { id: "orderedList", command: "ordered list numbered", messageKey: "orderedList" },
      { id: "unorderedList", command: "unordered list bulleted", messageKey: "unorderedList" },
    ]
    new Map(n.map((e) => [e.id, e]))
    let s = n.map((e) => e.id)
    a.d(t, {}, { DR: s, MV: () => n })
  },
  vvDI(e, t, a) {
    var n,
      s,
      i =
        (((n = {}).CHATGPT_AGENT_DIRECTORY_SURFACE_UNSPECIFIED = "CHATGPT_AGENT_DIRECTORY_SURFACE_UNSPECIFIED"),
        (n.CHATGPT_AGENT_DIRECTORY_SURFACE_SIDEBAR = "CHATGPT_AGENT_DIRECTORY_SURFACE_SIDEBAR"),
        (n.CHATGPT_AGENT_DIRECTORY_SURFACE_HOME = "CHATGPT_AGENT_DIRECTORY_SURFACE_HOME"),
        (n.CHATGPT_AGENT_DIRECTORY_SURFACE_HERO_CAROUSEL = "CHATGPT_AGENT_DIRECTORY_SURFACE_HERO_CAROUSEL"),
        (n.CHATGPT_AGENT_DIRECTORY_SURFACE_HOME_AGENT_LIST = "CHATGPT_AGENT_DIRECTORY_SURFACE_HOME_AGENT_LIST"),
        (n.CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY = "CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY"),
        (n.CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY_MODAL =
          "CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY_MODAL"),
        (n.CHATGPT_AGENT_DIRECTORY_SURFACE_AGENT_DETAIL = "CHATGPT_AGENT_DIRECTORY_SURFACE_AGENT_DETAIL"),
        (n.CHATGPT_AGENT_DIRECTORY_SURFACE_NO_ACCESS_PAGE = "CHATGPT_AGENT_DIRECTORY_SURFACE_NO_ACCESS_PAGE"),
        (n.CHATGPT_AGENT_DIRECTORY_SURFACE_RBAC_NO_ACCESS_PAGE = "CHATGPT_AGENT_DIRECTORY_SURFACE_RBAC_NO_ACCESS_PAGE"),
        (n.UNRECOGNIZED = "UNRECOGNIZED"),
        n),
      r =
        (((s = {}).CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_UNSPECIFIED = "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_UNSPECIFIED"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_BROWSE_AGENTS_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_BROWSE_AGENTS_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_AGENT_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_CREATE_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_CREATE_AGENT_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_OVERFLOW_OPEN =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_OVERFLOW_OPEN"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_EDIT_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_EDIT_AGENT_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_UNPIN_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_SIDEBAR_UNPIN_AGENT_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_OPEN_TEMPLATES_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_OPEN_TEMPLATES_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_CREATE_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_CREATE_AGENT_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_CTA_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_CTA_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_TEMPLATE_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_TEMPLATE_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_NEXT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_NEXT_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_DISMISS_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_HERO_DISMISS_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_TAB_CLICK = "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_TAB_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_OPEN_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_OPEN_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_OVERFLOW_OPEN =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_OVERFLOW_OPEN"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_EDIT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_EDIT_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_COPY_LINK_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_COPY_LINK_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_PIN_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_PIN_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_UNPIN_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_UNPIN_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_DELETE_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_HOME_AGENT_DELETE_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_AGENT_CARD_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_AGENT_CARD_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_SETUP_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_SETUP_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_ADD_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_ADD_AGENT_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_VIEW_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_VIEW_AGENT_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_CONNECT_APP_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_CONNECT_APP_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_BACK_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_BACK_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_RETRY_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_RETRY_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_BREADCRUMB_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_BREADCRUMB_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_OVERFLOW_OPEN =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_OVERFLOW_OPEN"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_COPY_LINK_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_COPY_LINK_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_PIN_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_PIN_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_UNPIN_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_UNPIN_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_DUPLICATE_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_DUPLICATE_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_DELETE_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_DELETE_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_EDIT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_EDIT_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_VIEW_AGENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_AGENT_DETAIL_VIEW_AGENT_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_NO_ACCESS_PAGE_VIEW =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_NO_ACCESS_PAGE_VIEW"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_NO_ACCESS_PAGE_PRICING_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_NO_ACCESS_PAGE_PRICING_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_NO_ACCESS_PAGE_VIEW_ANNOUNCEMENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_NO_ACCESS_PAGE_VIEW_ANNOUNCEMENT_CLICK"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_RBAC_NO_ACCESS_PAGE_VIEW =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_RBAC_NO_ACCESS_PAGE_VIEW"),
        (s.CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_RBAC_NO_ACCESS_PAGE_VIEW_ANNOUNCEMENT_CLICK =
          "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_RBAC_NO_ACCESS_PAGE_VIEW_ANNOUNCEMENT_CLICK"),
        (s.UNRECOGNIZED = "UNRECOGNIZED"),
        s)
    a.d(t, {}, { QS: { $type: "protobuf_analytics_events.v1.ChatgptAgentDirectoryAction" }, TG: i, _v: r })
  },
  zjpG(e, t, a) {
    var n = a("ABep"),
      s = a("QosV"),
      i = a("on57"),
      r = a("oyxz")
    a.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            a,
            o,
            _ = (0, s.c)(5),
            { className: l } = e
          return (
            _[0] !== l ? ((t = (0, i.A)("last:hidden", l)), (_[0] = l), (_[1] = t)) : (t = _[1]),
            _[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, n.jsx)(r.A, {
                  id: "codex.ui.bulletSeparator",
                  defaultMessage: "·",
                  description: "Middle dot separator used between inline items",
                })),
                (_[2] = a))
              : (a = _[2]),
            _[3] !== t
              ? ((o = (0, n.jsx)("span", { "aria-hidden": !0, className: t, children: a })), (_[3] = t), (_[4] = o))
              : (o = _[4]),
            o
          )
        },
      },
    )
  },
  eixg(e, t, a) {
    a.d(t, { k: () => k })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("zTeN"),
      r = a("zd8w"),
      o = a("Wf1j"),
      _ = a("oyxz"),
      l = a("SPnB"),
      d = a("bqtn"),
      c = a("GO7r"),
      T = a("Bbed"),
      C = a("f38C"),
      A = a("SGsN"),
      E = a("OWtl"),
      p = a("akkX"),
      u = a("aepO"),
      g = a("yaAj"),
      I = a("LNWO"),
      m = a("FkNe"),
      N = a("AWV5"),
      h = a("wD9O"),
      R = a("i7gm"),
      O = a("Lhpx"),
      G = a("giDA"),
      P = a("aAWW"),
      f = a("TL6G")
    function x(e) {
      let t,
        a,
        i,
        r = (0, s.c)(6)
      r[0] !== e
        ? (({ persistAcrossLayouts: a, ...t } = e), (r[0] = e), (r[1] = t), (r[2] = a))
        : ((t = r[1]), (a = r[2]))
      let o = void 0 !== a && a
      return (
        r[3] !== o || r[4] !== t
          ? ((i = o ? (0, n.jsx)(y, { ...t }) : (0, n.jsx)(d.Ab, { ...t, align: "end", contentWidth: "xs" })),
            (r[3] = o),
            (r[4] = t),
            (r[5] = i))
          : (i = r[5]),
        i
      )
    }
    function y(e) {
      let t,
        a,
        i,
        o,
        _,
        l,
        c,
        T,
        C,
        A,
        E,
        p = (0, s.c)(27),
        { triggerButton: u, children: g, open: I, onOpenChange: m } = e,
        [R, x] = (0, r.useState)(!1),
        y = I ?? R,
        Y = (0, h.dz)(),
        w = (0, r.useContext)(G.J)?.registerOpen
      p[0] !== I || p[1] !== m
        ? ((t = (e) => {
            ;(e && (0, P.e)(), void 0 === I && x(e), m?.(e))
          }),
          (p[0] = I),
          (p[1] = m),
          (p[2] = t))
        : (t = p[2])
      let L = t
      p[3] !== L ? ((a = () => L(!1)), (p[3] = L), (p[4] = a)) : (a = p[4])
      let b = (0, r.useEffectEvent)(a)
      ;(p[5] !== b || p[6] !== y
        ? ((i = () => {
            if (y) return f.O1.subscribe("browser-sidebar-web-contents-pointer-down", () => b())
          }),
          (p[5] = b),
          (p[6] = y),
          (p[7] = i))
        : (i = p[7]),
        p[8] !== y ? ((o = [y]), (p[8] = y), (p[9] = o)) : (o = p[9]),
        (0, r.useEffect)(i, o),
        p[10] !== y || p[11] !== w
          ? ((_ = () => {
              if (y) return w?.()
            }),
            (l = [y, w]),
            (p[10] = y),
            (p[11] = w),
            (p[12] = _),
            (p[13] = l))
          : ((_ = p[12]), (l = p[13])),
        (0, r.useLayoutEffect)(_, l),
        p[14] !== u
          ? ((c = (0, n.jsx)(d.ms.Trigger, { asChild: !0, children: u })), (p[14] = u), (p[15] = c))
          : (c = p[15]),
        p[16] === Symbol.for("react.memo_cache_sentinel") ? ((T = (0, O.xk)("xs")), (p[16] = T)) : (T = p[16]))
      let S = 1 === Y ? void 0 : Y
      return (
        p[17] !== S ? ((C = { zoom: S }), (p[17] = S), (p[18] = C)) : (C = p[18]),
        p[19] !== g || p[20] !== C
          ? ((A = (0, n.jsx)(N.ZL, {
              children: (0, n.jsx)(D, {
                children: (0, n.jsx)(d.ms.Content, {
                  size: "inset",
                  align: "end",
                  className: T,
                  style: C,
                  children: g,
                }),
              }),
            })),
            (p[19] = g),
            (p[20] = C),
            (p[21] = A))
          : (A = p[21]),
        p[22] !== L || p[23] !== y || p[24] !== A || p[25] !== c
          ? ((E = (0, n.jsxs)(N.bL, { modal: !1, open: y, onOpenChange: L, children: [c, A] })),
            (p[22] = L),
            (p[23] = y),
            (p[24] = A),
            (p[25] = c),
            (p[26] = E))
          : (E = p[26]),
        E
      )
    }
    function D(e) {
      let t,
        a = (0, s.c)(2),
        { children: i } = e
      return (
        a[0] !== i
          ? ((t = (0, n.jsx)(R.s, { container: document.body, children: i })), (a[0] = i), (a[1] = t))
          : (t = a[1]),
        t
      )
    }
    var Y = a("Pagv"),
      w = a("JQ9a"),
      L = a("OXj5"),
      b = a("tYw1"),
      S = a("V0vU")
    let M = (0, T._)(
      async () => (await Promise.all([a.e(7104), a.e(478494)]).then(a.bind(a, "v6Vy"))).WorkspaceAgentSharingDialog,
      {
        fallback: (e) => (0, n.jsx)(L.S, { onClose: e.onClose, onCloseAutoFocus: e.onCloseAutoFocus }),
        errorFallback: (e) => (0, n.jsx)(L.S, { failed: !0, onClose: e.onClose, onCloseAutoFocus: e.onCloseAutoFocus }),
      },
    )
    function k(e) {
      let t,
        a,
        T,
        N,
        h,
        R,
        O,
        G,
        P,
        f,
        y,
        D = (0, s.c)(57),
        { agent: L, isPublished: S, onDeleted: k, onPinError: j, renderTrigger: v, showSharing: K } = e,
        U = void 0 !== K && K,
        B = (0, i.gh)(E.u),
        F = (0, o.A)(),
        W = (0, r.useRef)(null),
        V = (0, i.Ul)(l.chatGptAuthenticatedAccountId$),
        q = (0, i.Ul)(l.Kw),
        z = (0, i.Ul)(I.lF),
        [Z, $] = (0, r.useState)(null),
        Q = (0, i._U)(b.VB, L.id),
        [X, J] = (0, r.useState)(!1),
        [ee, et] = (0, r.useState)(null),
        [ea, en] = (0, r.useState)(!1),
        es = null != v,
        ei = null == v ? void 0 : "primary",
        er = null == v ? void 0 : "xl"
      ;(D[0] !== F
        ? ((t = F.formatMessage({
            id: "workspaceAgents.index.moreActions",
            defaultMessage: "More actions",
            description: "Accessible label for an agent row action menu",
          })),
          (D[0] = F),
          (D[1] = t))
        : (t = D[1]),
        D[2] !== ei || D[3] !== er || D[4] !== t
          ? ((a = (0, n.jsx)(C.p, { ref: W, color: ei, size: er, label: t })),
            (D[2] = ei),
            (D[3] = er),
            (D[4] = t),
            (D[5] = a))
          : (a = D[5]),
        D[6] !== L.icon ||
        D[7] !== L.id ||
        D[8] !== L.name ||
        D[9] !== F ||
        D[10] !== Q ||
        D[11] !== S ||
        D[12] !== j ||
        D[13] !== ea ||
        D[14] !== B
          ? ((T = S
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(d.ms.Item, {
                      LeftIcon: c.ibM,
                      onSelect: () => {
                        ;(0, u.E)((0, Y.nY)(L.id)).then((e) => {
                          e && (0, p.o)(B)
                        })
                      },
                      children: (0, n.jsx)(_.A, {
                        id: "workspaceAgents.index.copyLink",
                        defaultMessage: "Copy link",
                        description: "Action that copies an agent link",
                      }),
                    }),
                    (0, n.jsx)(d.ms.Item, {
                      disabled: null == Q || ea,
                      LeftIcon: c.P0k,
                      onSelect: () => {
                        null == Q ||
                          ea ||
                          (j?.(!1),
                          en(!0),
                          (0, b.HS)(B, { id: L.id, name: L.name, icon: L.icon }, !Q)
                            .catch(() => {
                              null != j
                                ? j(!0)
                                : B.get(A.Id).danger(
                                    F.formatMessage({
                                      id: "workspaceAgents.index.pinFailed",
                                      defaultMessage: "Couldn’t update agent pin",
                                      description: "Error message when an agent pin cannot be updated",
                                    }),
                                    { errorAnalytics: { toastId: "workspaceAgents.index.pinFailed" } },
                                  )
                            })
                            .finally(() => en(!1)))
                      },
                      children: Q
                        ? (0, n.jsx)(_.A, {
                            id: "workspaceAgents.index.unpin",
                            defaultMessage: "Unpin from sidebar",
                            description: "Action that removes an agent from the sidebar",
                          })
                        : (0, n.jsx)(_.A, {
                            id: "workspaceAgents.index.pin",
                            defaultMessage: "Pin to sidebar",
                            description: "Action that pins an agent to the sidebar",
                          }),
                    }),
                  ],
                })
              : null),
            (D[6] = L.icon),
            (D[7] = L.id),
            (D[8] = L.name),
            (D[9] = F),
            (D[10] = Q),
            (D[11] = S),
            (D[12] = j),
            (D[13] = ea),
            (D[14] = B),
            (D[15] = T))
          : (T = D[15]),
        D[16] !== V || D[17] !== q || D[18] !== L.id || D[19] !== S || D[20] !== U
          ? ((N =
              U && S && null != V && null != q
                ? (0, n.jsx)(w.g, {
                    agentId: L.id,
                    page: "CHATGPT_AGENT_BUILDER_PAGE_AGENT_DIRECTORY_DETAIL",
                    onSelect: () => $({ accountId: V, accountUserId: q }),
                  })
                : null),
            (D[16] = V),
            (D[17] = q),
            (D[18] = L.id),
            (D[19] = S),
            (D[20] = U),
            (D[21] = N))
          : (N = D[21]),
        D[22] !== L.id || D[23] !== S || D[24] !== X
          ? ((h = X
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(m.wL, { agentId: L.id, onSelect: () => et("duplicate") }),
                    (0, n.jsx)(H, { showSeparator: S, agentId: L.id, onSelect: () => et("delete") }),
                  ],
                })
              : null),
            (D[22] = L.id),
            (D[23] = S),
            (D[24] = X),
            (D[25] = h))
          : (h = D[25]),
        D[26] !== X || D[27] !== es || D[28] !== a || D[29] !== T || D[30] !== N || D[31] !== h
          ? ((R = (0, n.jsxs)(x, {
              persistAcrossLayouts: es,
              open: X,
              onOpenChange: J,
              triggerButton: a,
              children: [T, N, h],
            })),
            (D[26] = X),
            (D[27] = es),
            (D[28] = a),
            (D[29] = T),
            (D[30] = N),
            (D[31] = h),
            (D[32] = R))
          : (R = D[32]))
      let eo = R
      return (
        D[33] !== v || D[34] !== eo
          ? ((O = null == v ? eo : v(eo)), (D[33] = v), (D[34] = eo), (D[35] = O))
          : (O = D[35]),
        D[36] !== V || D[37] !== q || D[38] !== L.id || D[39] !== z || D[40] !== Z || D[41] !== U
          ? ((G =
              U && !0 === z && Z?.accountId === V && Z?.accountUserId === q && null != Z
                ? (0, n.jsx)(M, {
                    accountId: Z.accountId,
                    accountUserId: Z.accountUserId,
                    agentId: L.id,
                    onClose: () => $(null),
                    onCloseAutoFocus: () => W.current?.focus(),
                  })
                : null),
            (D[36] = V),
            (D[37] = q),
            (D[38] = L.id),
            (D[39] = z),
            (D[40] = Z),
            (D[41] = U),
            (D[42] = G))
          : (G = D[42]),
        D[43] !== L.id || D[44] !== L.name || D[45] !== ee || D[46] !== k
          ? ((P =
              "delete" === ee
                ? (0, n.jsx)(g.W, {
                    agentId: L.id,
                    agentName: L.name,
                    onClose: () => et(null),
                    onCloseAutoFocus: () => W.current?.focus(),
                    onDeleted: k,
                  })
                : null),
            (D[43] = L.id),
            (D[44] = L.name),
            (D[45] = ee),
            (D[46] = k),
            (D[47] = P))
          : (P = D[47]),
        D[48] !== L.id || D[49] !== L.name || D[50] !== ee
          ? ((f =
              "duplicate" === ee
                ? (0, n.jsx)(m.gj, {
                    agentId: L.id,
                    agentName: L.name,
                    onClose: () => et(null),
                    onCloseAutoFocus: () => W.current?.focus(),
                  })
                : null),
            (D[48] = L.id),
            (D[49] = L.name),
            (D[50] = ee),
            (D[51] = f))
          : (f = D[51]),
        D[52] !== O || D[53] !== G || D[54] !== P || D[55] !== f
          ? ((y = (0, n.jsxs)(n.Fragment, { children: [O, G, P, f] })),
            (D[52] = O),
            (D[53] = G),
            (D[54] = P),
            (D[55] = f),
            (D[56] = y))
          : (y = D[56]),
        y
      )
    }
    function H(e) {
      let t,
        a = (0, s.c)(4),
        { agentId: r, onSelect: o, showSeparator: l } = e,
        T = (0, i._U)(S.l, r)
      return (
        a[0] !== T || a[1] !== o || a[2] !== l
          ? ((t = T
              ? (0, n.jsxs)(n.Fragment, {
                  children: [
                    l ? (0, n.jsx)(d.ms.Separator, {}) : null,
                    (0, n.jsx)(d.ms.Item, {
                      LeftIcon: c.cSG,
                      tone: "danger",
                      onSelect: o,
                      children: (0, n.jsx)(_.A, {
                        id: "workspaceAgents.management.delete",
                        defaultMessage: "Delete",
                        description: "Button that permanently deletes a Workspace Agent",
                      }),
                    }),
                  ],
                })
              : null),
            (a[0] = T),
            (a[1] = o),
            (a[2] = l),
            (a[3] = t))
          : (t = a[3]),
        t
      )
    }
  },
  GXwO(e, t, a) {
    var n = a("ASxG"),
      s = a("Ghh3")
    let i = n.object({ type: n.literal("file"), id: n.string().min(1), name: n.string(), mime_type: n.string() }),
      r = n.discriminatedUnion("type", [i, i.extend({ type: n.literal("image"), preview_url: n.string() })])
    a.d(
      t,
      {},
      {
        X: async function ({ body: e, identity: t, signal: a, additionalHeaders: n, assertCurrent: i }) {
          i()
          let o = await s.Request.safePost("/hermes/pluto/attachments", {
            requestBody: e,
            expectedIdentity: t,
            signal: a,
            additionalHeaders: n,
            assertRequestCurrent: i,
          })
          return (i(), r.parse(o))
        },
        k: r,
      },
    )
  },
  NDAD(e, t, a) {
    var n = a("ASxG"),
      s = a("GXwO")
    let i = n.discriminatedUnion("type", [
        n.object({ type: n.literal("send"), text: n.string(), attachments: n.array(s.k).optional() }),
        n.object({ type: n.literal("compose"), text: n.string() }),
        n.object({ type: n.literal("publish_checklist"), text: n.string(), issues: n.array(n.string()) }),
        n.object({
          type: n.literal("template"),
          text: n.string(),
          templateName: n.string().min(1),
          selections: n.record(n.string(), n.array(n.string())),
        }),
      ]),
      r = n.object({ workspaceAgentAssistant: i.optional() })
    a.d(
      t,
      {},
      {
        GQ: function (e, t, a) {
          return {
            type: "template",
            templateName: e.template_name,
            selections: t,
            text:
              e.default_prompt?.trim() ||
              a.formatMessage(
                {
                  id: "workspaceAgents.templates.startPrompt",
                  defaultMessage: "Start from the {templateName} template and help me customize the agent",
                  description:
                    "Initial message to the agent builder assistant after a user selects a template. templateName is the template's display name.",
                },
                { templateName: e.display_name },
              ),
          }
        },
        H6: r,
        cF: async function (e, t, a) {
          "compose" === t.type
            ? (await e.compose({ text: t.text }), await e.focus())
            : "send" === t.type
              ? await e.send({ text: t.text, ...(null == t.attachments ? {} : { attachments: t.attachments }) })
              : "publish_checklist" === t.type
                ? await e.send({
                    content: [
                      {
                        type: "input_tag",
                        text: "",
                        id: "message_source:publish_checklist",
                        group: a.formatMessage({
                          id: "workspaceAgents.publication.messageSourceGroup",
                          defaultMessage: "Message source",
                          description:
                            "Group label for the tag identifying a missing-field checklist request to the builder assistant",
                        }),
                        data: { type: "message_source", value: "publish_checklist" },
                      },
                      { type: "input_text", text: [t.text, ...t.issues.map((e) => `- ${e}`)].join("\n") },
                    ],
                  })
                : await e.send({
                    content: [
                      {
                        type: "input_tag",
                        text: "",
                        id: `template:${t.templateName}`,
                        group: a.formatMessage({
                          id: "workspaceAgents.templates.tagGroup",
                          defaultMessage: "Templates",
                          description: "Group label for a selected agent template in the builder assistant composer",
                        }),
                        data: {
                          type: "template",
                          template_name: t.templateName,
                          selected_tool_ids_by_category: t.selections,
                        },
                      },
                      { type: "input_text", text: t.text },
                    ],
                  })
        },
      },
    )
  },
  Q3aI(e, t, a) {
    var n = a("DBCl"),
      s = a("BQbE"),
      i = a("FpcZ"),
      r = a("OQWN")
    a.d(
      t,
      {},
      {
        _: async function (e, t, a, o, _) {
          o.throwIfAborted()
          let l = (0, r.ob)(e),
            d = [...new Set(Object.values(a).flat())]
          await Promise.all(
            d.map((t) => {
              let { queryKey: a } = (0, i.mf)({ appId: t, accountId: l.accountId, includeTools: !0, enabled: !0 })
              return e.queryClient.invalidateQueries({ queryKey: a, exact: !0, refetchType: "none" })
            }),
          )
          let c = new Map(
              (0 === d.length
                ? []
                : await e.queryClient.fetchQuery({
                    ...(0, s.getAppsReadQueryOptions)({
                      scope: e,
                      appIds: d,
                      browserAccountId: l.accountId,
                      hostId: n.iwv,
                      includeTools: !0,
                      queryClient: e.queryClient,
                      supportsAppRead: !0,
                    }),
                    staleTime: 0,
                  })
              ).map((e) => [e.id, e]),
            ),
            T = d.map((e) => {
              let t = (c.get(e)?.toolSummaries ?? []).filter((e) => e.name.length > 0 && e.isEnabled),
                a = [...new Set(t.map((e) => e.name))]
              if (0 === a.length) throw Error("The selected template app has no available actions")
              return {
                connector_identifier: { type: "CONNECTOR_ID", connector_id: e },
                auth: { type: "LINK_PLACEHOLDER", connector_id: e, actions: a, id: `link_placeholder_${e}` },
                allowed_tools: a,
                user_approvals: {
                  always: { tool_names: [...new Set(t.filter((e) => !e.isReadOnly).map((e) => e.name))] },
                  never: { tool_names: [] },
                },
              }
            })
          ;(o.throwIfAborted(), (0, r.qi)(e, l))
          let C = (0, r.NG)()
          return (0, r.Gt)(
            e,
            { ...C, icon: t.icon ?? _ ?? C.icon, tools: { ...C.tools, connectors: T } },
            o,
            t.template_name,
          )
        },
      },
    )
  },
  dedS(e, t, a) {
    var n = a("ABep"),
      s = a("oyxz"),
      i = a("JNtf"),
      r = a("mUDD"),
      o = a("Bbed"),
      _ = a("RNul")
    let l = (0, o._)(
      async () =>
        (await Promise.all([a.e(342905), a.e(890583), a.e(454456), a.e(837206)]).then(a.bind(a, "KOPZ")))
          .WorkspaceAgentTemplates,
      {
        fallback: ({ onClose: e }) =>
          (0, n.jsx)(i.lG, {
            open: !0,
            onOpenChange: (t) => {
              t || e()
            },
            children: (0, n.jsxs)(r.R4, {
              children: [
                (0, n.jsx)(i.L3, {
                  children: (0, n.jsx)(s.A, {
                    id: "workspaceAgents.templates.loading",
                    defaultMessage: "Loading templates…",
                    description: "Status while agent templates are loading",
                  }),
                }),
                (0, n.jsx)(_.y, {}),
              ],
            }),
          }),
      },
    )
    a.d(t, {}, { I: l })
  },
  meSf(e, t, a) {
    a.d(
      t,
      {},
      {
        a: function (e, t) {
          let a = new URLSearchParams(e.search)
          return (
            a.set("templates", "1"),
            a.delete("template_setup"),
            null == t ? a.delete("template") : a.set("template", t),
            { pathname: e.pathname, search: a.toString() }
          )
        },
        w: function (e) {
          let t = new URLSearchParams(e.search)
          for (let e of ["templates", "template", "template_setup"]) t.delete(e)
          return { pathname: e.pathname, search: t.toString() }
        },
      },
    )
  },
  wobp(e, t, a) {
    a.d(t, { WorkspaceAgentsPage: () => $ })
    var n = a("ABep"),
      s = a("QosV"),
      i = a("slpy"),
      r = a("TU7T"),
      o = a("i5ac"),
      _ = a.n(o),
      l = a("zTeN"),
      d = a("zd8w"),
      c = a("Wf1j"),
      T = a("oyxz"),
      C = a("HZfM"),
      A = a("SPnB"),
      E = a("JIuM"),
      p = a("OAko"),
      u = a("LhhH"),
      g = a("zjpG"),
      I = a("ygO2"),
      m = a("bqtn"),
      N = a("xs0e"),
      h = a("GO7r"),
      R = a("FrrB"),
      O = a("Bbed"),
      G = a("PkPj"),
      P = a("zkPp"),
      f = a("BrP7"),
      x = (e) =>
        (0, n.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M16.0012 9.04175V7.33667C16.0012 6.62563 16.0013 6.1323 15.97 5.74878C15.9469 5.46683 15.9091 5.27732 15.8577 5.13355L15.802 5.00366C15.6481 4.70155 15.4137 4.44853 15.1262 4.27222L14.9993 4.20191C14.8413 4.12145 14.6297 4.06462 14.2542 4.03394C13.8707 4.00262 13.3771 4.00171 12.6663 4.00171H7.33325C6.62222 4.00171 6.12888 4.0026 5.74536 4.03394C5.46351 4.05697 5.27388 4.09383 5.13013 4.14526L5.00024 4.20191C4.69799 4.35592 4.44511 4.59005 4.2688 4.87769L4.19849 5.00366C4.11798 5.16167 4.06122 5.37307 4.03052 5.74878C3.99918 6.1323 3.99829 6.62563 3.99829 7.33667V12.6667C3.99829 13.3777 3.99918 13.8711 4.03052 14.2546C4.06122 14.6303 4.11798 14.8418 4.19849 14.9998L4.2688 15.1257C4.44512 15.4134 4.69799 15.6475 5.00024 15.8015L5.13013 15.8572C5.27391 15.9087 5.46332 15.9464 5.74536 15.9695C6.12888 16.0008 6.62221 16.0017 7.33325 16.0017H10.595C11.1459 16.0017 11.4691 15.9943 11.6956 15.9724C11.5803 15.7786 11.487 15.6063 11.4172 15.4392L11.3635 15.2986C10.9573 14.1144 11.2873 12.8022 12.2053 11.9509L12.3186 11.8523C12.5958 11.6268 12.9622 11.4246 13.4709 11.1384L15.9241 9.75855L15.9583 9.82007C15.965 9.78841 15.9747 9.75735 15.9797 9.72534L15.9915 9.62183C16.0006 9.50892 16.0012 9.35336 16.0012 9.04175ZM14.1233 12.2976C13.636 12.5717 13.3907 12.7131 13.2375 12.823L13.1096 12.9255C12.5774 13.419 12.3859 14.1804 12.6213 14.8669L12.6858 15.0183C12.7265 15.1013 12.7848 15.2005 12.8674 15.3367C13.0089 15.1523 13.1785 14.8669 13.4905 14.321L14.8948 11.863L14.1233 12.2976ZM10.0002 9.33472C10.3673 9.33489 10.6652 9.63271 10.6653 9.99976C10.6653 10.3669 10.3674 10.6646 10.0002 10.6648H6.66626C6.29914 10.6646 6.00122 10.3669 6.00122 9.99976C6.00136 9.63271 6.29922 9.33489 6.66626 9.33472H10.0002ZM7.79614 6.00171L7.92993 6.01538C8.23318 6.07722 8.46118 6.34524 8.46118 6.66675C8.46115 6.98824 8.23317 7.25629 7.92993 7.31812L7.79614 7.33179H6.66626C6.29917 7.33161 6.00126 7.03387 6.00122 6.66675C6.00122 6.29959 6.29914 6.00189 6.66626 6.00171H7.79614ZM13.3333 6.00171L13.467 6.01538C13.7702 6.07732 13.9983 6.34532 13.9983 6.66675C13.9983 6.98815 13.7702 7.25619 13.467 7.31812L13.3333 7.33179H10.2961C9.92902 7.33165 9.63115 7.0339 9.6311 6.66675C9.6311 6.29956 9.92899 6.00185 10.2961 6.00171H13.3333ZM17.3313 9.04175C17.3313 9.32336 17.3331 9.53907 17.3167 9.73706L17.2932 9.9314C17.2677 10.0937 17.2293 10.2536 17.179 10.4099L17.1252 10.5652C17.0792 10.6862 17.0235 10.8026 16.9563 10.9294L16.717 11.3562L14.6458 14.9812C14.2984 15.5891 14.0513 16.0335 13.7327 16.3728L13.5911 16.5125C13.3022 16.7742 12.9676 16.9799 12.6047 17.1199L12.4475 17.1755C11.9451 17.3394 11.3951 17.3318 10.595 17.3318H7.33325C6.64416 17.3318 6.0872 17.3324 5.63696 17.2957C5.23632 17.2629 4.87559 17.1977 4.53931 17.0535L4.39673 16.9871C3.87547 16.7215 3.43912 16.3171 3.13501 15.821L3.01294 15.6033C2.82112 15.2267 2.74176 14.8208 2.70435 14.363C2.66756 13.9128 2.66821 13.3558 2.66821 12.6667V7.33667C2.66821 6.64758 2.66756 6.09062 2.70435 5.64038C2.74176 5.18259 2.82113 4.77676 3.01294 4.40015L3.13501 4.1814C3.4391 3.68568 3.87569 3.28184 4.39673 3.01636L4.53931 2.94995C4.8756 2.80571 5.23632 2.74051 5.63696 2.70776C6.0872 2.67098 6.64416 2.67163 7.33325 2.67163H12.6663C13.3553 2.67163 13.9123 2.67099 14.3625 2.70776C14.8206 2.74518 15.227 2.82439 15.6038 3.01636L15.8215 3.13843C16.3174 3.44253 16.7211 3.87903 16.9866 4.40015L17.053 4.54273C17.1973 4.87904 17.2624 5.2397 17.2952 5.64038C17.332 6.09062 17.3313 6.64758 17.3313 7.33667V9.04175Z",
          }),
        }),
      y = a("xqnZ"),
      D = a("OWtl"),
      Y = a("khOd"),
      w = a("ZGaK"),
      L = a("GEsy"),
      b = a("eixg"),
      S = a("LNWO"),
      M = a("NDAD"),
      k = a("dedS"),
      H = a("vvDI"),
      j = a("yGJW"),
      v = a("xm0K")
    function K(e) {
      let t,
        a,
        i,
        r,
        o,
        _,
        c,
        A,
        E,
        p = (0, s.c)(30),
        { agent: u } = e,
        g = (0, l.gh)(D.u),
        I = (0, d.useId)(),
        m = (0, C.Zp)(),
        N = (0, C.zy)()
      return (
        p[0] !== u.id || p[1] !== u.is_pinned || p[2] !== N.pathname || p[3] !== N.search || p[4] !== m || p[5] !== g
          ? ((t = () => {
              ;(0, j.yy)(g, H.QS, {
                actionType: "CHATGPT_AGENT_DIRECTORY_ACTION_TYPE_TEAM_DIRECTORY_AGENT_CARD_CLICK",
                surface: "CHATGPT_AGENT_DIRECTORY_SURFACE_TEAM_DIRECTORY",
                agentId: u.id,
                isPinned: !0 === u.is_pinned,
              })
              let e = new URLSearchParams(N.search)
              ;(e.set("agent", u.id), m({ pathname: N.pathname, search: e.toString() }))
            }),
            (p[0] = u.id),
            (p[1] = u.is_pinned),
            (p[2] = N.pathname),
            (p[3] = N.search),
            (p[4] = m),
            (p[5] = g),
            (p[6] = t))
          : (t = p[6]),
        p[7] !== u.icon
          ? ((a = (0, n.jsx)(v.WorkspaceAgentGraphic, { icon: u.icon, size: 40 })), (p[7] = u.icon), (p[8] = a))
          : (a = p[8]),
        p[9] !== u.name
          ? ((i =
              u.name.trim() ||
              (0, n.jsx)(T.A, {
                id: "workspaceAgents.index.unnamed",
                defaultMessage: "Unnamed agent",
                description: "Fallback name for a Workspace Agent without a name",
              })),
            (p[9] = u.name),
            (p[10] = i))
          : (i = p[10]),
        p[11] !== i || p[12] !== I
          ? ((r = (0, n.jsx)("span", {
              id: I,
              className: "truncate text-sm leading-5 font-medium text-default",
              children: i,
            })),
            (p[11] = i),
            (p[12] = I),
            (p[13] = r))
          : (r = p[13]),
        p[14] !== u.description || p[15] !== u.tagline
          ? ((o =
              u.tagline.trim() ||
              u.description.trim() ||
              (0, n.jsx)(T.A, {
                id: "workspaceAgents.index.noDescription",
                defaultMessage: "No description",
                description: "Fallback description for an agent directory row",
              })),
            (p[14] = u.description),
            (p[15] = u.tagline),
            (p[16] = o))
          : (o = p[16]),
        p[17] !== o
          ? ((_ = (0, n.jsx)("span", { className: "line-clamp-2 text-sm leading-5 text-tertiary", children: o })),
            (p[17] = o),
            (p[18] = _))
          : (_ = p[18]),
        p[19] !== r || p[20] !== _
          ? ((c = (0, n.jsxs)("span", { className: "flex min-w-0 flex-col gap-1", children: [r, _] })),
            (p[19] = r),
            (p[20] = _),
            (p[21] = c))
          : (c = p[21]),
        p[22] !== u.creator_name
          ? ((A = u.creator_name?.trim()
              ? (0, n.jsx)("span", {
                  className: "mt-auto truncate text-sm leading-5 text-tertiary",
                  children: u.creator_name.trim(),
                })
              : null),
            (p[22] = u.creator_name),
            (p[23] = A))
          : (A = p[23]),
        p[24] !== t || p[25] !== a || p[26] !== c || p[27] !== A || p[28] !== I
          ? ((E = (0, n.jsxs)("button", {
              className:
                "flex h-full min-h-50 cursor-interaction flex-col gap-2 rounded-xl border-hairline border-default bg-surface p-5 text-start hover:bg-primary-ghost-hover focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-inset dark:border-transparent",
              "aria-labelledby": I,
              type: "button",
              onClick: t,
              children: [a, c, A],
            })),
            (p[24] = t),
            (p[25] = a),
            (p[26] = c),
            (p[27] = A),
            (p[28] = I),
            (p[29] = E))
          : (E = p[29]),
        E
      )
    }
    var U = a("Q3aI"),
      B = a("meSf"),
      F = a("ovrt"),
      W = a("Pagv"),
      V = a("Ghh3"),
      q = a("rvFo")
    let z = (0, l.N3)(D.u, (e, { get: t }) => {
        let a = t(A.chatGptAuthenticatedAccountId$),
          n = t(A.o8)
        return {
          enabled: null != a && null != n && !0 === t(S.XL),
          initialPageParam: null,
          queryKey:
            "string" == typeof e ? ["workspace-agents", a, e, n] : ["workspace-agents", "directory", a, e.query, n],
          queryFn: ({ pageParam: t, signal: s }) => {
            if (null == a || null == n) throw Error("Missing workspace identity")
            return "string" == typeof e
              ? V.Request.safeGet("/hermes/agents", {
                  parameters: { query: { cursor: t, limit: 50, list_type: e } },
                  signal: s,
                  expectedIdentity: { accountId: a, userId: n },
                })
              : 0 === e.query.length
                ? V.Request.safeGet("/hermes/workspace-store/agents", {
                    parameters: { query: { cursor: t, limit: 50 } },
                    signal: s,
                    expectedIdentity: { accountId: a, userId: n },
                  })
                : V.Request.safeGet("/hermes/workspace-store/agents/search", {
                    parameters: { query: { cursor: t, limit: 50, query: e.query } },
                    signal: s,
                    expectedIdentity: { accountId: a, userId: n },
                  })
          },
          getNextPageParam: (e) => e.next_cursor ?? void 0,
          refetchOnMount: "used" !== e || "always",
          refetchInterval: "used" === e && q.D.ONE_MINUTE,
          retry: !1,
          staleTime: q.D.ONE_MINUTE,
        }
      }),
      Z = (0, O._)(async () => (await a.e(111761).then(a.bind(a, "r9FN"))).WorkspaceAgentDirectoryDetails)
    function $() {
      let e,
        t,
        a,
        o,
        _,
        g,
        N,
        R,
        O,
        P,
        w,
        b,
        H,
        j,
        v,
        K,
        F,
        V,
        q,
        z,
        $,
        J,
        ee,
        et,
        ea,
        en,
        es,
        ei,
        er,
        eo,
        e_,
        el,
        ed = (0, s.c)(97),
        ec = (0, l.gh)(D.u),
        [eT] = (0, d.useState)(Q)
      ;(ed[0] !== eT ? ((e = () => eT.abort()), (ed[0] = eT), (ed[1] = e)) : (e = ed[1]), (0, y.fP)(e, eT))
      let eC = (0, c.A)(),
        eA = (0, C.Zp)(),
        eE = (0, C.zy)(),
        ep = (0, l.Ul)(A.chatGptAuthenticatedAccountId$),
        eu = (0, l.Ul)(A.o8),
        [eg, eI] = (0, C.ok)()
      ed[2] !== eg ? ((t = eg.get("agent")), (ed[2] = eg), (ed[3] = t)) : (t = ed[3])
      let em = t,
        eN = (0, l.Ul)(Y.GB),
        eh = (0, l.Ul)(S.iX),
        { data: eR } = (0, p.YL)(),
        eO = (0, E.Dv)(eR?.profile_picture_url)
      if (ed[4] !== eR?.name || ed[5] !== eg || ed[6] !== eI) {
        let e, t, n
        a = eg.get("q") ?? ""
        let s = eg.get("tab")
        ;((N = "recent"),
          "mine" === s ? (N = "owned") : "directory" === s && (N = "directory"),
          ed[13] !== eI
            ? ((e = (e) => {
                eI(
                  (t) => {
                    let a = new URLSearchParams(t),
                      n = e.slice(0, 200)
                    return (0 === n.length ? a.delete("q") : a.set("q", n), a)
                  },
                  { replace: !0 },
                )
              }),
              (ed[13] = eI),
              (ed[14] = e))
            : (e = ed[14]),
          (o = e),
          ed[15] !== eI
            ? ((t = (e) => {
                eI((t) => {
                  let a = new URLSearchParams(t)
                  return (a.set("tab", "owned" === e ? "mine" : e), a)
                })
              }),
              (ed[15] = eI),
              (ed[16] = t))
            : (t = ed[16]),
          (_ = t),
          ed[17] !== eR?.name ? ((n = eR?.name?.trim() || null), (ed[17] = eR?.name), (ed[18] = n)) : (n = ed[18]),
          (R = n),
          (g = a.trim().slice(0, 200)),
          (ed[4] = eR?.name),
          (ed[5] = eg),
          (ed[6] = eI),
          (ed[7] = a),
          (ed[8] = o),
          (ed[9] = _),
          (ed[10] = g),
          (ed[11] = N),
          (ed[12] = R))
      } else ((a = ed[7]), (o = ed[8]), (_ = ed[9]), (g = ed[10]), (N = ed[11]), (R = ed[12]))
      let eG = g,
        eP = (0, L.o)(eG, 300)
      ed[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((O = (0, n.jsx)(T.A, {
            id: "workspaceAgents.index.pageTitle",
            defaultMessage: "Agents",
            description: "Title of the Agents index page",
          })),
          (ed[19] = O))
        : (O = ed[19])
      let ef = O,
        ex = !eN,
        ey = !1 !== eh
      ed[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((P = (0, n.jsx)(T.A, {
            id: "workspaceAgents.buildPermissionRequired",
            defaultMessage: "You don’t have permission to build agents",
            description:
              "Tooltip on disabled agent creation or publishing actions when the current workspace does not grant agent-building permission",
          })),
          (ed[20] = P))
        : (P = ed[20])
      let eD = !0 !== eh
      ;(ed[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((w = (0, n.jsxs)("span", {
            className: "inline-flex items-center",
            children: [
              (0, n.jsx)(T.A, {
                id: "workspaceAgents.index.create",
                defaultMessage: "Create",
                description: "Button that opens the agent creation menu",
              }),
              (0, n.jsx)(h.Aq_, {}),
            ],
          })),
          (ed[21] = w))
        : (w = ed[21]),
        ed[22] !== eD
          ? ((b = (0, n.jsx)(I.$, { color: "primary", size: "dialog", disabled: eD, children: w })),
            (ed[22] = eD),
            (ed[23] = b))
          : (b = ed[23]),
        ed[24] !== ey || ed[25] !== b
          ? ((H = (0, n.jsx)(i.m, { disabled: ey, content: P, children: b })),
            (ed[24] = ey),
            (ed[25] = b),
            (ed[26] = H))
          : (H = ed[26]),
        ed[27] !== eA ? ((j = () => void eA(W.fe)), (ed[27] = eA), (ed[28] = j)) : (j = ed[28]),
        ed[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, n.jsx)(T.A, {
              id: "workspaceAgents.discovery.create",
              defaultMessage: "Create agent",
              description: "Button that opens custom agent creation from the directory introduction",
            })),
            (ed[29] = v))
          : (v = ed[29]),
        ed[30] !== j
          ? ((K = (0, n.jsx)(m.ms.Item, { leftIconAsset: r.a, onSelect: j, children: v })), (ed[30] = j), (ed[31] = K))
          : (K = ed[31]),
        ed[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, n.jsx)(x, { "aria-hidden": !0 })), (ed[32] = F))
          : (F = ed[32]),
        ed[33] !== eE || ed[34] !== eA
          ? ((V = () => void eA((0, B.a)(eE))), (ed[33] = eE), (ed[34] = eA), (ed[35] = V))
          : (V = ed[35]),
        ed[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((q = (0, n.jsx)(T.A, {
              id: "workspaceAgents.discovery.browse",
              defaultMessage: "Browse templates",
              description: "Button that opens agent templates from the directory introduction",
            })),
            (ed[36] = q))
          : (q = ed[36]),
        ed[37] !== V
          ? ((z = (0, n.jsx)(m.ms.Item, { leftIcon: F, onSelect: V, children: q })), (ed[37] = V), (ed[38] = z))
          : (z = ed[38]),
        ed[39] !== H || ed[40] !== K || ed[41] !== z
          ? (($ = (0, n.jsxs)(m.Ab, {
              align: "end",
              contentWidth: "menuWide",
              sideOffset: 8,
              triggerButton: H,
              children: [K, z],
            })),
            (ed[39] = H),
            (ed[40] = K),
            (ed[41] = z),
            (ed[42] = $))
          : ($ = ed[42]),
        ed[43] !== eC
          ? ((J = eC.formatMessage({
              id: "workspaceAgents.index.search.label",
              defaultMessage: "Search agents",
              description: "Accessible label for the Agents search input",
            })),
            (ed[43] = eC),
            (ed[44] = J))
          : (J = ed[44]),
        ed[45] !== eC
          ? ((ee = eC.formatMessage({
              id: "workspaceAgents.index.search.placeholder",
              defaultMessage: "Search agents",
              description: "Placeholder for the Agents search input",
            })),
            (ed[45] = eC),
            (ed[46] = ee))
          : (ee = ed[46]),
        ed[47] !== a || ed[48] !== o || ed[49] !== J || ed[50] !== ee
          ? ((et = {
              variant: "directory",
              id: "workspace-agents-search",
              label: J,
              onSearchQueryChange: o,
              placeholder: ee,
              searchQuery: a,
            }),
            (ed[47] = a),
            (ed[48] = o),
            (ed[49] = J),
            (ed[50] = ee),
            (ed[51] = et))
          : (et = ed[51]),
        ed[52] === Symbol.for("react.memo_cache_sentinel")
          ? ((ea = (0, n.jsx)(T.A, {
              id: "workspaceAgents.index.subtitle",
              defaultMessage: "Keep work moving 24/7 with agents",
              description: "Subtitle on the Agents index page",
            })),
            (ed[52] = ea))
          : (ea = ed[52]))
      let eY = (eG.length, null)
      ed[53] !== eR?.id ||
      ed[54] !== eN ||
      ed[55] !== eC ||
      ed[56] !== eG.length ||
      ed[57] !== _ ||
      ed[58] !== N ||
      ed[59] !== R ||
      ed[60] !== eO
        ? ((en =
            0 === eG.length
              ? (0, n.jsx)(G.uC, {
                  inset: !eN,
                  variant: "directory",
                  children: (0, n.jsx)(f.t, {
                    scrollable: !0,
                    ariaLabel: eC.formatMessage({
                      id: "workspaceAgents.index.views.ariaLabel",
                      defaultMessage: "Agent views",
                      description: "Accessible label for the Agents page tabs",
                    }),
                    onSelect: _,
                    tabs: [
                      {
                        key: "recent",
                        name: (0, n.jsx)(T.A, {
                          id: "workspaceAgents.index.view.recent",
                          defaultMessage: "Recently used",
                          description: "Tab for recently used agents",
                        }),
                      },
                      {
                        key: "owned",
                        name: (0, n.jsx)(T.A, {
                          id: "workspaceAgents.index.view.mine",
                          defaultMessage: "Built by me",
                          description: "Tab for agents built by the current user",
                        }),
                      },
                      {
                        key: "directory",
                        name: (0, n.jsxs)("span", {
                          className: "inline-flex items-center gap-1.5",
                          children: [
                            (0, n.jsx)(u.e, { alt: "", colorKey: eR?.id, name: R, size: "response", src: eO }),
                            null == R
                              ? (0, n.jsx)(T.A, {
                                  id: "workspaceAgents.index.view.teamDirectory",
                                  defaultMessage: "Team directory",
                                  description: "Fallback tab label for the workspace agent directory",
                                })
                              : (0, n.jsx)(T.A, {
                                  id: "workspaceAgents.index.view.workspaceDirectory",
                                  defaultMessage: "{workspaceName} directory",
                                  description: "Tab label for the current workspace agent directory",
                                  values: { workspaceName: R },
                                }),
                          ],
                        }),
                      },
                    ],
                    selectedKey: N,
                    variant: "directory",
                  }),
                })
              : null),
          (ed[53] = eR?.id),
          (ed[54] = eN),
          (ed[55] = eC),
          (ed[56] = eG.length),
          (ed[57] = _),
          (ed[58] = N),
          (ed[59] = R),
          (ed[60] = eO),
          (ed[61] = en))
        : (en = ed[61])
      let ew = eG.length > 0 ? "directory" : N
      ed[62] !== o ? ((es = () => o("")), (ed[62] = o), (ed[63] = es)) : (es = ed[63])
      let eL = eG.length > 0 ? eP : ""
      return (
        ed[64] !== ew || ed[65] !== es || ed[66] !== eL || ed[67] !== R
          ? ((ei = (0, n.jsx)(X, { kind: ew, onClearSearch: es, query: eL, workspaceName: R })),
            (ed[64] = ew),
            (ed[65] = es),
            (ed[66] = eL),
            (ed[67] = R),
            (ed[68] = ei))
          : (ei = ed[68]),
        ed[69] !== eN ||
        ed[70] !== $ ||
        ed[71] !== et ||
        ed[72] !== eY ||
        ed[73] !== en ||
        ed[74] !== ei ||
        ed[75] !== ex
          ? ((er = (0, n.jsxs)(G.Ql, {
              animateContentLayout: ex,
              contentWidth: "directory",
              expandSearchWhenWrapped: eN,
              headerAction: $,
              headerPlacement: "inline",
              headerVariant: "default",
              search: et,
              subtitle: ea,
              title: ef,
              children: [eY, en, ei],
            })),
            (ed[69] = eN),
            (ed[70] = $),
            (ed[71] = et),
            (ed[72] = eY),
            (ed[73] = en),
            (ed[74] = ei),
            (ed[75] = ex),
            (ed[76] = er))
          : (er = ed[76]),
        ed[77] !== ep ||
        ed[78] !== eC ||
        ed[79] !== eT.signal ||
        ed[80] !== eE ||
        ed[81] !== eA ||
        ed[82] !== eg ||
        ed[83] !== ec ||
        ed[84] !== eu
          ? ((eo =
              (eg.has("templates") || eg.has("template_setup")) && null != ep && null != eu
                ? (0, n.jsx)(
                    k.I,
                    {
                      accountId: ep,
                      userId: eu,
                      initialTemplateName: eg.get("template_setup") ?? eg.get("template"),
                      initialSetup: eg.has("template_setup"),
                      onClose: () => void eA((0, B.w)(eE), { replace: !0, state: null }),
                      onUse: async (e, t) => {
                        let a = () =>
                          !eT.signal.aborted && ec.get(A.chatGptAuthenticatedAccountId$) === ep && ec.get(A.o8) === eu
                        if (!a()) return
                        let n = await (0, U._)(ec, e, t, eT.signal)
                        if (!a()) return
                        let s = "agent" in n ? n.agent.id : n.agentId
                        await eA(`${(0, W.wI)(s)}?assistant=1`, {
                          state: { workspaceAgentAssistant: (0, M.GQ)(e, t, eC) },
                        })
                      },
                    },
                    `${ep}:${eu}`,
                  )
                : null),
            (ed[77] = ep),
            (ed[78] = eC),
            (ed[79] = eT.signal),
            (ed[80] = eE),
            (ed[81] = eA),
            (ed[82] = eg),
            (ed[83] = ec),
            (ed[84] = eu),
            (ed[85] = eo))
          : (eo = ed[85]),
        ed[86] !== ep || ed[87] !== eE || ed[88] !== eA || ed[89] !== eg || ed[90] !== em || ed[91] !== eu
          ? ((e_ =
              null != em && null != ep && null != eu
                ? (0, n.jsx)(
                    Z,
                    {
                      agentId: em,
                      onClose: () => {
                        ;(eg.delete("agent"),
                          eg.delete("setup"),
                          eA({ pathname: eE.pathname, search: eg.toString() }, { replace: !0, state: null }))
                      },
                    },
                    `${ep}:${eu}:${em}`,
                  )
                : null),
            (ed[86] = ep),
            (ed[87] = eE),
            (ed[88] = eA),
            (ed[89] = eg),
            (ed[90] = em),
            (ed[91] = eu),
            (ed[92] = e_))
          : (e_ = ed[92]),
        ed[93] !== er || ed[94] !== eo || ed[95] !== e_
          ? ((el = (0, n.jsxs)("div", {
              className: "flex h-full min-h-0 flex-col bg-surface text-default",
              children: [er, eo, e_],
            })),
            (ed[93] = er),
            (ed[94] = eo),
            (ed[95] = e_),
            (ed[96] = el))
          : (el = ed[96]),
        el
      )
    }
    function Q() {
      return new AbortController()
    }
    function X(e) {
      let t,
        a,
        i,
        r,
        o,
        d,
        c = (0, s.c)(33),
        { kind: C, onClearSearch: A, query: E, workspaceName: p } = e,
        u = "recent" === C ? "used" : "created"
      c[0] !== C || c[1] !== u || c[2] !== E
        ? ((t = "directory" === C ? { query: E } : u), (c[0] = C), (c[1] = u), (c[2] = E), (c[3] = t))
        : (t = c[3])
      let {
        data: g,
        isPending: m,
        isError: N,
        refetch: O,
        fetchNextPage: G,
        hasNextPage: P,
        isFetchingNextPage: f,
      } = (0, l._U)(z, t)
      if (m) {
        let e,
          t = "directory" === C
        return (c[4] !== t ? ((e = (0, n.jsx)(F.M, { directory: t })), (c[4] = t), (c[5] = e)) : (e = c[5]), e)
      }
      if (N) {
        let e,
          t,
          a = E.length > 0
        return (
          c[6] !== O ? ((e = () => void O()), (c[6] = O), (c[7] = e)) : (e = c[7]),
          c[8] !== a || c[9] !== e
            ? ((t = (0, n.jsx)(er, { isSearch: a, onRetry: e })), (c[8] = a), (c[9] = e), (c[10] = t))
            : (t = c[10]),
          t
        )
      }
      if (c[11] !== g?.pages || c[12] !== C || c[13] !== A || c[14] !== E || c[15] !== p) {
        i = Symbol.for("react.early_return_sentinel")
        e: {
          let e = _()(g?.pages.flatMap(J) ?? [], "id")
          if (0 === e.length) {
            let e
            if ("directory" !== C) {
              let e
              ;(c[18] !== C ? ((e = (0, n.jsx)(es, { kind: C })), (c[18] = C), (c[19] = e)) : (e = c[19]), (i = e))
              break e
            }
            ;(c[20] !== A || c[21] !== E
              ? ((e =
                  E.length > 0
                    ? (0, n.jsx)(R.A, {
                        layout: "page",
                        illustration: (0, n.jsx)(h.FR7, {}),
                        illustrationSize: "icon",
                        title: (0, n.jsx)(T.A, {
                          id: "workspaceAgents.index.search.empty.title",
                          defaultMessage: "No agents found for “{query}”",
                          description: "Empty state when no Workspace Agents match a directory search",
                          values: { query: E },
                        }),
                        actions: (0, n.jsx)(I.$, {
                          color: "ghost",
                          size: "dialog",
                          onClick: A,
                          children: (0, n.jsx)(T.A, {
                            id: "workspaceAgents.index.search.clear",
                            defaultMessage: "Clear search",
                            description: "Clears the Agents search and returns to the previously selected agent list",
                          }),
                        }),
                      })
                    : (0, n.jsx)(R.A, {
                        layout: "page",
                        title: (0, n.jsx)(T.A, {
                          id: "workspaceAgents.index.directory.empty.title",
                          defaultMessage: "No agents in team directory",
                          description: "Empty-state title for an empty workspace agent directory",
                        }),
                        description: (0, n.jsx)(T.A, {
                          id: "workspaceAgents.index.directory.empty.description",
                          defaultMessage:
                            "List agents in the team directory so anyone from your workspace can use them",
                          description: "Description for an empty workspace agent directory",
                        }),
                      })),
                (c[20] = A),
                (c[21] = E),
                (c[22] = e))
              : (e = c[22]),
              (i = e))
            break e
          }
          a = e.map((t, a) =>
            "directory" === C
              ? (0, n.jsx)(K, { agent: t }, t.id)
              : (0, n.jsx)(ee, { agent: t, kind: C, showDivider: a < e.length - 1, workspaceName: p }, t.id),
          )
        }
        ;((c[11] = g?.pages), (c[12] = C), (c[13] = A), (c[14] = E), (c[15] = p), (c[16] = a), (c[17] = i))
      } else ((a = c[16]), (i = c[17]))
      if (i !== Symbol.for("react.early_return_sentinel")) return i
      let x = a
      ;(c[23] !== G ? ((r = () => void G()), (c[23] = G), (c[24] = r)) : (r = c[24]),
        c[25] !== P || c[26] !== f || c[27] !== r
          ? ((o = (0, n.jsx)(eo, { hasNextPage: P, isFetchingNextPage: f, onLoadMore: r })),
            (c[25] = P),
            (c[26] = f),
            (c[27] = r),
            (c[28] = o))
          : (o = c[28]))
      let y = o
      return (
        c[29] !== C || c[30] !== y || c[31] !== x
          ? ((d =
              "directory" === C
                ? (0, n.jsxs)(w.d, {
                    className: "flex flex-col gap-4",
                    children: [
                      (0, n.jsx)("div", {
                        className:
                          "grid grid-cols-1 gap-4 @min-[581px]/skills-grid:grid-cols-2 @2xl/skills-grid:grid-cols-3",
                        children: x,
                      }),
                      y,
                    ],
                  })
                : (0, n.jsxs)("div", { className: "flex flex-col select-none", children: [x, y] })),
            (c[29] = C),
            (c[30] = y),
            (c[31] = x),
            (c[32] = d))
          : (d = c[32]),
        d
      )
    }
    function J(e) {
      return e.items
    }
    function ee(e) {
      let t,
        a,
        i,
        r,
        o,
        _,
        l,
        d,
        A = (0, s.c)(43),
        { agent: E, kind: p, showDivider: u, workspaceName: I } = e,
        m = void 0 === I ? null : I,
        N = (0, c.A)(),
        h = (0, C.Zp)(),
        R = null == E.latest_published_version_id
      A[0] !== E.name || A[1] !== N
        ? ((t =
            E.name.trim() ||
            N.formatMessage({
              id: "workspaceAgents.index.unnamed",
              defaultMessage: "Unnamed agent",
              description: "Fallback name for a Workspace Agent without a name",
            })),
          (A[0] = E.name),
          (A[1] = N),
          (A[2] = t))
        : (t = A[2])
      let O = t
      A[3] !== E.id ? ((a = (0, W.wI)(E.id)), (A[3] = E.id), (A[4] = a)) : (a = A[4])
      let G = a
      if ("owned" === p) {
        let e
        ;(A[5] !== E || A[6] !== m
          ? ((e = (0, n.jsx)(ea, { agent: E, workspaceName: m })), (A[5] = E), (A[6] = m), (A[7] = e))
          : (e = A[7]),
          (i = e))
      } else if ("recent" === p) {
        let e
        ;(A[8] !== E ? ((e = (0, n.jsx)(en, { agent: E })), (A[8] = E), (A[9] = e)) : (e = A[9]), (i = e))
      } else {
        let e, t, a, s, r, o
        ;(A[10] !== E.description || A[11] !== E.tagline
          ? ((e =
              E.tagline.trim() ||
              E.description.trim() ||
              (0, n.jsx)(T.A, {
                id: "workspaceAgents.index.noDescription",
                defaultMessage: "No description",
                description: "Fallback description for an agent directory row",
              })),
            (A[10] = E.description),
            (A[11] = E.tagline),
            (A[12] = e))
          : (e = A[12]),
          A[13] !== e ? ((t = (0, n.jsx)("span", { children: e })), (A[13] = e), (A[14] = t)) : (t = A[14]),
          A[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = (0, n.jsx)(g.a, { className: "mx-1" })), (A[15] = a))
            : (a = A[15]),
          A[16] !== E.creator_name
            ? ((s =
                E.creator_name?.trim() ||
                (0, n.jsx)(T.A, {
                  id: "workspaceAgents.index.unknownAuthor",
                  defaultMessage: "Unknown author",
                  description: "Fallback creator name for an agent directory row",
                })),
              (A[16] = E.creator_name),
              (A[17] = s))
            : (s = A[17]),
          A[18] !== s ? ((r = (0, n.jsx)("span", { children: s })), (A[18] = s), (A[19] = r)) : (r = A[19]),
          A[20] !== t || A[21] !== r
            ? ((o = (0, n.jsxs)(n.Fragment, { children: [t, a, r] })), (A[20] = t), (A[21] = r), (A[22] = o))
            : (o = A[22]),
          (i = o))
      }
      ;(A[23] !== E.icon
        ? ((r = (0, n.jsx)(v.WorkspaceAgentGraphic, { icon: E.icon, size: 40 })), (A[23] = E.icon), (A[24] = r))
        : (r = A[24]),
        A[25] !== E.id || A[26] !== G || A[27] !== R || A[28] !== p || A[29] !== h
          ? ((o = () => {
              "owned" === p && R ? h(G) : h((0, W.OH)(E.id))
            }),
            (A[25] = E.id),
            (A[26] = G),
            (A[27] = R),
            (A[28] = p),
            (A[29] = h),
            (A[30] = o))
          : (o = A[30]))
      let f = "owned" === p
      return (
        A[31] !== E || A[32] !== f
          ? ((_ = (0, n.jsx)(et, { agent: E, canEdit: f })), (A[31] = E), (A[32] = f), (A[33] = _))
          : (_ = A[33]),
        A[34] !== i
          ? ((l = (0, n.jsx)("span", { className: "block truncate", children: i })), (A[34] = i), (A[35] = l))
          : (l = A[35]),
        A[36] !== O || A[37] !== u || A[38] !== r || A[39] !== o || A[40] !== _ || A[41] !== l
          ? ((d = (0, n.jsx)(P.fy, {
              ariaLabel: O,
              showDivider: u,
              compactSecondLine: !0,
              hasInteractiveContent: !0,
              icon: r,
              isSelected: !1,
              onSelect: o,
              rightText: _,
              rightTextPosition: "center",
              secondLine: l,
              title: O,
            })),
            (A[36] = O),
            (A[37] = u),
            (A[38] = r),
            (A[39] = o),
            (A[40] = _),
            (A[41] = l),
            (A[42] = d))
          : (d = A[42]),
        d
      )
    }
    function et(e) {
      let t,
        a,
        i,
        r = (0, s.c)(11),
        { agent: o, canEdit: _ } = e,
        l = (0, C.Zp)(),
        d = null != o.latest_published_version_id
      return (
        r[0] !== o.id || r[1] !== _ || r[2] !== l
          ? ((t = _
              ? (0, n.jsx)(I.$, {
                  color: "ghost",
                  size: "toolbar",
                  onClick: (e) => {
                    ;(e.stopPropagation(), l((0, W.wI)(o.id)))
                  },
                  children: (0, n.jsx)(T.A, {
                    id: "workspaceAgents.index.edit",
                    defaultMessage: "Edit",
                    description: "Action that opens an agent in the native draft editor",
                  }),
                })
              : null),
            (r[0] = o.id),
            (r[1] = _),
            (r[2] = l),
            (r[3] = t))
          : (t = r[3]),
        r[4] !== o || r[5] !== _ || r[6] !== d
          ? ((a = d || _ ? (0, n.jsx)(b.k, { agent: o, isPublished: d }) : null),
            (r[4] = o),
            (r[5] = _),
            (r[6] = d),
            (r[7] = a))
          : (a = r[7]),
        r[8] !== t || r[9] !== a
          ? ((i = (0, n.jsxs)("span", { className: "pointer-events-auto flex items-center gap-1", children: [t, a] })),
            (r[8] = t),
            (r[9] = a),
            (r[10] = i))
          : (i = r[10]),
        i
      )
    }
    function ea(e) {
      var t, a
      let i,
        r,
        o,
        _ = (0, s.c)(10),
        { agent: l, workspaceName: d } = e
      if (null == l.latest_published_version_id) {
        let e
        return (
          _[0] !== l.updated_at
            ? ((e = (0, n.jsx)(T.A, {
                id: "workspaceAgents.index.draftEdited",
                defaultMessage: "Draft · Edited {time}",
                description: "Status and last edit time for an unpublished agent",
                values: { time: (0, n.jsx)(N.A, { dateString: l.updated_at }) },
              })),
              (_[0] = l.updated_at),
              (_[1] = e))
            : (e = _[1]),
          e
        )
      }
      return (
        _[2] !== l || _[3] !== d
          ? ((t = l),
            (a = d),
            (i = t.store_visible
              ? null == a
                ? (0, n.jsx)(T.A, {
                    id: "workspaceAgents.index.visibility.directoryFallback",
                    defaultMessage: "Published to your workspace’s directory",
                    description: "Visibility label for an agent published to a workspace directory",
                  })
                : (0, n.jsx)(T.A, {
                    id: "workspaceAgents.index.visibility.directory",
                    defaultMessage: "Published to {workspaceName}’s directory",
                    description: "Visibility label for an agent published to the named workspace directory",
                    values: { workspaceName: a },
                  })
              : t.is_public
                ? (0, n.jsx)(T.A, {
                    id: "workspaceAgents.index.visibility.shared",
                    defaultMessage: "Shared with your workspace",
                    description: "Visibility label for an agent shared by link in the workspace",
                  })
                : (0, n.jsx)(T.A, {
                    id: "workspaceAgents.index.visibility.private",
                    defaultMessage: "Private to you",
                    description: "Visibility label for an agent visible only to its owner",
                  })),
            (_[2] = l),
            (_[3] = d),
            (_[4] = i))
          : (i = _[4]),
        _[5] !== l.updated_at
          ? ((r = (0, n.jsx)(N.A, { dateString: l.updated_at })), (_[5] = l.updated_at), (_[6] = r))
          : (r = _[6]),
        _[7] !== i || _[8] !== r
          ? ((o = (0, n.jsx)(T.A, {
              id: "workspaceAgents.index.publishedUpdated",
              defaultMessage: "{visibility} · Updated {time}",
              description: "Visibility and last update time for a published agent",
              values: { visibility: i, time: r },
            })),
            (_[7] = i),
            (_[8] = r),
            (_[9] = o))
          : (o = _[9]),
        o
      )
    }
    function en(e) {
      let t,
        a,
        i = (0, s.c)(7),
        { agent: r } = e,
        o = r.recent_runs?.items?.[0]
      if (null != r.latest_published_version_id && ("blocked" === r.attention_status || o?.status === "blocked")) {
        let e
        return (
          i[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsxs)("span", {
                className: "inline-flex items-center gap-2 whitespace-nowrap",
                children: [
                  (0, n.jsx)("span", { "aria-hidden": !0, className: "size-2 shrink-0 rounded-full bg-blue" }),
                  (0, n.jsx)(T.A, {
                    id: "workspaceAgents.index.needsAttention",
                    defaultMessage: "Needs your attention",
                    description: "Status for a recently used agent with a blocked run",
                  }),
                ],
              })),
              (i[0] = e))
            : (e = i[0]),
          e
        )
      }
      let _ = r.last_used_at ?? o?.updated_at
      if (null != _) {
        let e
        return (
          i[1] !== _
            ? ((e = (0, n.jsx)(T.A, {
                id: "workspaceAgents.index.lastUsed",
                defaultMessage: "Used {time}",
                description: "Last used time for an agent",
                values: { time: (0, n.jsx)(N.A, { dateString: _ }) },
              })),
              (i[1] = _),
              (i[2] = e))
            : (e = i[2]),
          e
        )
      }
      i[3] !== r.creator_name ? ((t = r.creator_name?.trim()), (i[3] = r.creator_name), (i[4] = t)) : (t = i[4])
      let l = t
      return (
        i[5] !== l
          ? ((a = l
              ? (0, n.jsx)(T.A, {
                  id: "workspaceAgents.index.byCreator",
                  defaultMessage: "By {creatorName}",
                  description: "Creator byline for an agent",
                  values: { creatorName: l },
                })
              : (0, n.jsx)(T.A, {
                  id: "workspaceAgents.index.noRecentActivity",
                  defaultMessage: "Recently used",
                  description: "Fallback status for a recently used agent",
                })),
            (i[5] = l),
            (i[6] = a))
          : (a = i[6]),
        a
      )
    }
    function es(e) {
      let t,
        a,
        i,
        r,
        o,
        _,
        d,
        A,
        E,
        p = (0, s.c)(30),
        { kind: u } = e,
        g = (0, c.A)(),
        m = (0, C.Zp)(),
        N = (0, C.zy)(),
        h = (0, l.Ul)(S.iX),
        [, O] = (0, C.ok)()
      if ("recent" === u) {
        let e, n
        ;(p[0] !== g
          ? ((e = g.formatMessage({
              id: "workspaceAgents.index.recent.empty.title",
              defaultMessage: "No recently used agents",
              description: "Empty state for the recently used Agents view",
            })),
            (p[0] = g),
            (p[1] = e))
          : (e = p[1]),
          (t = e),
          p[2] !== g
            ? ((n = g.formatMessage({
                id: "workspaceAgents.index.recent.empty.description",
                defaultMessage: "Create an agent or browse agents built by your team",
                description: "Description shown when there are no recently used agents",
              })),
              (p[2] = g),
              (p[3] = n))
            : (n = p[3]),
          (a = n))
      } else {
        let e, n
        ;(p[4] !== g
          ? ((e = g.formatMessage({
              id: "workspaceAgents.index.mine.empty.title",
              defaultMessage: "You haven’t built any agents yet",
              description: "Empty state for the current user's Agents view",
            })),
            (p[4] = g),
            (p[5] = e))
          : (e = p[5]),
          (t = e),
          p[6] !== g
            ? ((n = g.formatMessage({
                id: "workspaceAgents.index.mine.empty.description",
                defaultMessage: "Create agents to run weekly reports, answer Slack questions, and update systems",
                description: "Description shown when the current user has not built any agents",
              })),
              (p[6] = g),
              (p[7] = n))
            : (n = p[7]),
          (a = n))
      }
      let G = !0 !== h
      return (
        p[8] !== m ? ((i = () => void m(W.fe)), (p[8] = m), (p[9] = i)) : (i = p[9]),
        p[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(T.A, {
              id: "workspaceAgents.discovery.create",
              defaultMessage: "Create agent",
              description: "Button that opens custom agent creation from the directory introduction",
            })),
            (p[10] = r))
          : (r = p[10]),
        p[11] !== G || p[12] !== i
          ? ((o = (0, n.jsx)(I.$, { color: "primary", size: "dialog", disabled: G, onClick: i, children: r })),
            (p[11] = G),
            (p[12] = i),
            (p[13] = o))
          : (o = p[13]),
        p[14] !== u || p[15] !== O
          ? ((_ =
              "recent" === u
                ? (0, n.jsx)(I.$, {
                    color: "outlineSurface",
                    size: "dialog",
                    onClick: () => O(ei),
                    children: (0, n.jsx)(T.A, {
                      id: "workspaceAgents.index.browseDirectory",
                      defaultMessage: "Browse team directory",
                      description: "Button that switches the empty recently used Agents view to the team directory",
                    }),
                  })
                : null),
            (p[14] = u),
            (p[15] = O),
            (p[16] = _))
          : (_ = p[16]),
        p[17] !== h || p[18] !== u || p[19] !== N || p[20] !== m
          ? ((d =
              "owned" === u && !0 === h
                ? (0, n.jsx)(I.$, {
                    color: "outlineSurface",
                    size: "dialog",
                    onClick: () => void m((0, B.a)(N)),
                    children: (0, n.jsx)(T.A, {
                      id: "workspaceAgents.discovery.browse",
                      defaultMessage: "Browse templates",
                      description: "Button that opens agent templates from the directory introduction",
                    }),
                  })
                : null),
            (p[17] = h),
            (p[18] = u),
            (p[19] = N),
            (p[20] = m),
            (p[21] = d))
          : (d = p[21]),
        p[22] !== o || p[23] !== _ || p[24] !== d
          ? ((A = (0, n.jsxs)(n.Fragment, { children: [o, _, d] })), (p[22] = o), (p[23] = _), (p[24] = d), (p[25] = A))
          : (A = p[25]),
        p[26] !== a || p[27] !== A || p[28] !== t
          ? ((E = (0, n.jsx)(R.A, { layout: "outlined", title: t, description: a, actions: A })),
            (p[26] = a),
            (p[27] = A),
            (p[28] = t),
            (p[29] = E))
          : (E = p[29]),
        E
      )
    }
    function ei(e) {
      let t = new URLSearchParams(e)
      return (t.set("tab", "directory"), t)
    }
    function er(e) {
      let t,
        a,
        i,
        r,
        o = (0, s.c)(8),
        { isSearch: _, onRetry: l } = e,
        d = void 0 !== _ && _
      return (
        o[0] !== d
          ? ((t = d
              ? (0, n.jsx)(T.A, {
                  id: "workspaceAgents.index.search.error.title",
                  defaultMessage: "Couldn’t search agents",
                  description: "Error shown when agents cannot be searched",
                })
              : (0, n.jsx)(T.A, {
                  id: "workspaceAgents.index.error.title",
                  defaultMessage: "Couldn’t load agents",
                  description: "Error shown when agents cannot be loaded",
                })),
            (o[0] = d),
            (o[1] = t))
          : (t = o[1]),
        o[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(T.A, {
              id: "workspaceAgents.index.error.retry",
              defaultMessage: "Retry",
              description: "Button that retries loading Workspace Agents",
            })),
            (o[2] = a))
          : (a = o[2]),
        o[3] !== l
          ? ((i = (0, n.jsx)(I.$, { color: "secondary", size: "dialog", onClick: l, children: a })),
            (o[3] = l),
            (o[4] = i))
          : (i = o[4]),
        o[5] !== t || o[6] !== i
          ? ((r = (0, n.jsx)(R.A, { layout: "page", title: t, actions: i })), (o[5] = t), (o[6] = i), (o[7] = r))
          : (r = o[7]),
        r
      )
    }
    function eo(e) {
      let t,
        a,
        i = (0, s.c)(6),
        { hasNextPage: r, isFetchingNextPage: o, onLoadMore: _ } = e
      return r
        ? (i[0] !== o
            ? ((t = o
                ? (0, n.jsx)(T.A, {
                    id: "workspaceAgents.index.loadingMore",
                    defaultMessage: "Loading more agents",
                    description: "Button label while more Workspace Agents load",
                  })
                : (0, n.jsx)(T.A, {
                    id: "workspaceAgents.index.loadMore",
                    defaultMessage: "Load more",
                    description: "Button that loads more Workspace Agents",
                  })),
              (i[0] = o),
              (i[1] = t))
            : (t = i[1]),
          i[2] !== o || i[3] !== _ || i[4] !== t
            ? ((a = (0, n.jsx)(I.$, {
                className: "self-center",
                color: "ghostActive",
                disabled: o,
                size: "dialog",
                onClick: _,
                children: t,
              })),
              (i[2] = o),
              (i[3] = _),
              (i[4] = t),
              (i[5] = a))
            : (a = i[5]),
          a)
        : null
    }
  },
  TU7T(e, t, a) {
    let n = (0, a("nkTT").a)({
      name: "agent-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 0.606693, y: 1.321777, width: 18.78661, height: 17.283691 },
        visualBounds: { x: 0.606693, y: 1.321777, width: 18.78661, height: 17.283691 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.606693, y: 1.321777, width: 18.78661, height: 17.283691 },
        center: { x: 9.999998, y: 9.963623 },
        insets: { top: 1.321777, right: 0.606697, bottom: 1.394532, left: 0.606693 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 9.999998, y: 9.963623 },
          foreground: { x: 9.999998, y: 9.963623 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M10.9487 13.0191V11.9809C10.9487 11.5575 11.2921 11.2141 11.7155 11.2141C12.1389 11.2141 12.4823 11.5575 12.4823 11.9809V13.0191C12.4822 13.4424 12.1389 13.7859 11.7155 13.7859C11.2921 13.7859 10.9488 13.4424 10.9487 13.0191Z" fill="currentColor"/> <path d="M7.42847 13.0191V11.9809C7.42847 11.5575 7.77184 11.2141 8.19526 11.2141C8.61868 11.2141 8.96205 11.5575 8.96205 11.9809V13.0191C8.96198 13.4424 8.61864 13.7859 8.19526 13.7859C7.77188 13.7859 7.42853 13.4424 7.42847 13.0191Z" fill="currentColor"/> <path d="M16.1606 11.8655C16.1443 11.1536 16.0957 10.4415 15.9663 9.67798C15.8417 8.94381 15.2333 8.3665 14.4468 8.24146C12.89 7.99397 11.5833 7.88306 9.99951 7.88306C8.41576 7.88307 7.10906 7.99395 5.55224 8.24146C4.7659 8.36659 4.15834 8.94393 4.03369 9.67798C3.86111 10.696 3.83161 11.6224 3.83154 12.5793L3.83838 13.2932C3.85475 14.0051 3.90426 14.7172 4.03369 15.4807C4.15834 16.2148 4.7659 16.7921 5.55224 16.9172C7.10907 17.1647 8.41576 17.2756 9.99951 17.2756C11.5833 17.2756 12.89 17.1647 14.4468 16.9172C15.2333 16.7922 15.8417 16.2149 15.9663 15.4807C16.1389 14.4627 16.1684 13.5363 16.1685 12.5793L16.1606 11.8655ZM17.4907 13.3235C17.4734 14.0761 17.4211 14.8571 17.2778 15.7024C17.0495 17.0494 15.954 18.0243 14.6558 18.2307C13.0346 18.4884 11.6579 18.6057 9.99951 18.6057C8.34133 18.6057 6.96515 18.4884 5.34424 18.2307C4.04597 18.0243 2.95053 17.0494 2.72217 15.7024C2.57887 14.8571 2.52656 14.0761 2.50928 13.3235L2.50146 12.5793C2.50154 11.5959 2.53113 10.5832 2.72217 9.4563C2.95053 8.10925 4.04597 7.13438 5.34424 6.92798C6.96515 6.6703 8.34133 6.553 9.99951 6.55298C11.6579 6.55298 13.0346 6.67025 14.6558 6.92798C15.954 7.13438 17.0495 8.10925 17.2778 9.4563C17.4689 10.5832 17.4985 11.5959 17.4985 12.5793L17.4907 13.3235Z" fill="currentColor"/> <path d="M9.33496 6.79837V5.3765C9.33496 5.00923 9.63273 4.71146 10 4.71146C10.3673 4.71146 10.665 5.00923 10.665 5.3765V6.79837C10.6649 7.16552 10.3672 7.46341 10 7.46341C9.63281 7.46341 9.3351 7.16552 9.33496 6.79837Z" fill="currentColor"/> <path d="M10.9189 3.5708C10.9189 3.06325 10.5076 2.65186 10 2.65186C9.49249 2.65194 9.08114 3.0633 9.08105 3.5708C9.08105 4.07838 9.49244 4.48966 10 4.48975C10.5076 4.48975 10.9189 4.07843 10.9189 3.5708ZM12.249 3.5708C12.249 4.81297 11.2422 5.81982 10 5.81982C8.7579 5.81974 7.75098 4.81291 7.75098 3.5708C7.75106 2.32876 8.75796 1.32186 10 1.32178C11.2421 1.32178 12.2489 2.32871 12.249 3.5708Z" fill="currentColor"/> <path d="M18.5794 10.3134C18.9449 10.2779 19.2706 10.5456 19.3063 10.911C19.4223 12.1048 19.4224 12.7835 19.306 13.9392C19.269 14.3043 18.943 14.5703 18.5778 14.5337C18.2124 14.4968 17.9455 14.1709 17.9823 13.8055C18.0897 12.7402 18.0896 12.1499 17.9818 11.0402C17.9463 10.6748 18.2141 10.3491 18.5794 10.3134Z" fill="currentColor"/> <path d="M1.42057 10.3134C1.05511 10.2779 0.729369 10.5456 0.693721 10.911C0.577722 12.1048 0.577548 12.7835 0.694015 13.9392C0.730982 14.3043 1.05703 14.5703 1.42222 14.5337C1.78762 14.4968 2.0545 14.1709 2.0177 13.8055C1.91034 12.7402 1.91039 12.1499 2.01821 11.0402C2.05372 10.6748 1.78594 10.3491 1.42057 10.3134Z" fill="currentColor"/>',
    })
    a.d(t, {}, { a: n })
  },
}
//# sourceMappingURL=278867.6019d877a2.js.map
