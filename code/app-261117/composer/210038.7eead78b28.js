export const __rspack_esm_ids = [210038]
export const __webpack_modules__ = {
  qWhI(e, n, t) {
    var o = t("ABep"),
      s = t("QosV"),
      l = t("slpy"),
      r = t("KUdL"),
      i = t.n(r),
      a = t("qmMi"),
      c = t("zd8w"),
      d = t("Wf1j"),
      u = t("Qgfj"),
      m = t("oyxz"),
      h = t("Sm6l"),
      f = t("rmk3"),
      g = t("bqtn"),
      p = t("bVeK"),
      v = t("WHIu"),
      x = t("G0is"),
      j = t("m8VT"),
      k = t("YYX4"),
      S = t("Uj87")
    function C(e) {
      return "connected" !== e.status
    }
    t.d(
      n,
      {},
      {
        e: function (e) {
          let n,
            t,
            r,
            y,
            I,
            b,
            w,
            M,
            A = (0, s.c)(44),
            {
              searchQuery: T,
              environments: L,
              isLoading: U,
              isError: N,
              onRetry: _,
              onContextMenuOpenChange: P,
              selectedIds: B,
              onSelectionChange: R,
              showHeading: z,
              singleSelection: E,
            } = e,
            W = void 0 === z || z,
            F = void 0 !== E && E,
            q = (0, d.A)(),
            D = (0, a.Ul)(v.a) && !F,
            [V, O] = (0, c.useState)(!1)
          if (
            A[0] !== L ||
            A[1] !== q ||
            A[2] !== D ||
            A[3] !== P ||
            A[4] !== R ||
            A[5] !== T ||
            A[6] !== B ||
            A[7] !== V ||
            A[8] !== F
          ) {
            let e,
              s,
              l,
              a = T.trim(),
              c = (0, k.q)(a)
            ;((n = L?.filter(
              (e) =>
                ("" === a || c(e.displayName) > 0) && (F || V || "offline" !== e.status || B.includes(e.environmentId)),
            )),
              A[12] !== q
                ? ((e = q.formatMessage({
                    id: "composer.newTask.computers.showOffline",
                    defaultMessage: "Show offline computers",
                  })),
                  (A[12] = q),
                  (A[13] = e))
                : (e = A[13]),
              (t = e),
              A[14] !== q
                ? ((s = q.formatMessage({
                    id: "composer.newTask.computers.notAuthorized",
                    defaultMessage: "Not authorized",
                  })),
                  (A[14] = q),
                  (A[15] = s))
                : (s = A[15]))
            let d = s
            ;(A[16] !== q || A[17] !== D || A[18] !== d || A[19] !== P || A[20] !== R || A[21] !== B || A[22] !== F
              ? ((l = (e) =>
                  F
                    ? (0, o.jsx)(
                        S.MJ,
                        {
                          connectionType: "environmentService",
                          status: e.status,
                          leftIcon: (0, o.jsx)(x.K, { environmentId: e.environmentId }),
                          isTaskAccessBlocked: !1 === e.canUseForTasks,
                          RightIcon: B.includes(e.environmentId) ? p.ALZ : void 0,
                          disabled: "connected" !== e.status || !1 === e.canUseForTasks,
                          tooltipText: !1 === e.canUseForTasks ? d : void 0,
                          onSelect: () => R([e.environmentId]),
                          children: e.displayName,
                        },
                        e.environmentId,
                      )
                    : (0, o.jsx)(
                        f.t,
                        {
                          onOpenChange: P,
                          items: D
                            ? [
                                {
                                  id: "make-primary",
                                  message: (0, u.zR)({
                                    id: "composer.newTask.computers.makePrimary",
                                    defaultMessage: "Make primary",
                                  }),
                                  enabled:
                                    "connected" === e.status && !1 !== e.canUseForTasks && e.environmentId !== B[0],
                                  onSelect: () => R([e.environmentId, ...B.filter((n) => n !== e.environmentId)]),
                                },
                              ]
                            : [],
                          children: (0, o.jsx)(g.ms.CheckboxItem, {
                            tooltipText: (0, o.jsx)(S.vb, {
                              status: e.status,
                              isTaskAccessBlocked: !1 === e.canUseForTasks,
                              children: !1 === e.canUseForTasks ? d : void 0,
                            }),
                            leftIcon: (0, o.jsx)(S.Gp, {
                              status: e.status,
                              isTaskAccessBlocked: !1 === e.canUseForTasks,
                              children: (0, o.jsx)(x.K, { environmentId: e.environmentId }),
                            }),
                            closeOnSelect: !D,
                            checked: B.includes(e.environmentId),
                            disabled:
                              ("connected" !== e.status || !1 === e.canUseForTasks) && !B.includes(e.environmentId),
                            onCheckedChange: (n) => {
                              R(n ? [...(D ? B : []), e.environmentId] : B.filter((n) => n !== e.environmentId))
                            },
                            "aria-description":
                              !1 === e.canUseForTasks
                                ? d
                                : q.formatMessage(
                                    {
                                      id: "composer.newTask.computers.connectionStatus",
                                      defaultMessage:
                                        "{status, select, connected {Connected} offline {Offline} other {Status unknown}}",
                                    },
                                    { status: e.status },
                                  ),
                            children: e.displayName,
                          }),
                        },
                        e.environmentId,
                      )),
                (A[16] = q),
                (A[17] = D),
                (A[18] = d),
                (A[19] = P),
                (A[20] = R),
                (A[21] = B),
                (A[22] = F),
                (A[23] = l))
              : (l = A[23]),
              (r = i()(n, C).map(l)),
              (A[0] = L),
              (A[1] = q),
              (A[2] = D),
              (A[3] = P),
              (A[4] = R),
              (A[5] = T),
              (A[6] = B),
              (A[7] = V),
              (A[8] = F),
              (A[9] = n),
              (A[10] = t),
              (A[11] = r))
          } else ((n = A[9]), (t = A[10]), (r = A[11]))
          let Q = r
          return (
            A[24] !== t || A[25] !== W || A[26] !== V
              ? ((y = W
                  ? (0, o.jsxs)(g.ms.SectionLabel, {
                      className: "flex items-center justify-between",
                      children: [
                        (0, o.jsx)(m.A, { id: "composer.newTask.computers.heading", defaultMessage: "Your computers" }),
                        (0, o.jsx)(l.m, {
                          content: t,
                          children: (0, o.jsx)(g.ms.ItemSlot, {
                            asChild: !0,
                            role: "menuitemcheckbox",
                            "aria-checked": V,
                            onSelect: (e) => {
                              ;(e.preventDefault(), O(!V))
                            },
                            children: (0, o.jsx)(h.$, {
                              "aria-label": t,
                              color: V ? "ghostAccent" : "ghostSecondary",
                              size: "iconCircleSm",
                              children: (0, o.jsx)(p.uG0, {}),
                            }),
                          }),
                        }),
                      ],
                    })
                  : null),
                (A[24] = t),
                (A[25] = W),
                (A[26] = V),
                (A[27] = y))
              : (y = A[27]),
            A[28] !== U ? ((I = U && (0, o.jsx)(j.h, {})), (A[28] = U), (A[29] = I)) : (I = A[29]),
            A[30] !== L?.length || A[31] !== N || A[32] !== _
              ? ((b =
                  N &&
                  (0, o.jsx)(g.ms.Item, {
                    onSelect: (e) => {
                      ;(e.preventDefault(), _())
                    },
                    children:
                      (L?.length ?? 0) > 0
                        ? (0, o.jsx)(m.A, {
                            id: "composer.newTask.computers.retryPartial",
                            defaultMessage: "Couldn\u2019t refresh all computers. Retry",
                          })
                        : (0, o.jsx)(m.A, {
                            id: "composer.newTask.computers.retry",
                            defaultMessage: "Couldn\u2019t load computers. Retry",
                          }),
                  })),
                (A[30] = L?.length),
                (A[31] = N),
                (A[32] = _),
                (A[33] = b))
              : (b = A[33]),
            A[34] !== N || A[35] !== U || A[36] !== n?.length
              ? ((w =
                  !U &&
                  !N &&
                  n?.length === 0 &&
                  (0, o.jsx)(g.ms.Message, {
                    compact: !0,
                    children: (0, o.jsx)(m.A, {
                      id: "composer.newTask.computers.empty",
                      defaultMessage: "No matching computers",
                    }),
                  })),
                (A[34] = N),
                (A[35] = U),
                (A[36] = n?.length),
                (A[37] = w))
              : (w = A[37]),
            A[38] !== Q || A[39] !== y || A[40] !== I || A[41] !== b || A[42] !== w
              ? ((M = (0, o.jsxs)(o.Fragment, { children: [y, I, b, w, Q] })),
                (A[38] = Q),
                (A[39] = y),
                (A[40] = I),
                (A[41] = b),
                (A[42] = w),
                (A[43] = M))
              : (M = A[43]),
            M
          )
        },
      },
    )
  },
  Uj87(e, n, t) {
    var o = t("ABep"),
      s = t("QosV"),
      l = t("Wf1j"),
      r = t("oyxz"),
      i = t("X7C7"),
      a = t("bqtn"),
      c = t("bVeK")
    let d = {
      connected: "bg-green",
      connecting: "bg-orange",
      restarting: "bg-orange",
      offline: "bg-orange",
      disconnected: "bg-codex-description",
      unknown: "bg-codex-description",
      error: "bg-red",
    }
    function u(e) {
      let n,
        t,
        l,
        r = (0, s.c)(8),
        { status: a, isTaskAccessBlocked: d, children: u } = e,
        m = void 0 !== d && d
      return (
        r[0] !== m || r[1] !== a ? ((n = h(a, m)), (r[0] = m), (r[1] = a), (r[2] = n)) : (n = r[2]),
        r[3] !== u ? ((t = u ?? (0, o.jsx)(c.zYJ, {})), (r[3] = u), (r[4] = t)) : (t = r[4]),
        r[5] !== n || r[6] !== t
          ? ((l = (0, o.jsx)(i.o, { color: n, children: t })), (r[5] = n), (r[6] = t), (r[7] = l))
          : (l = r[7]),
        l
      )
    }
    function m(e) {
      let n,
        t,
        l,
        i,
        a = (0, s.c)(11),
        { status: c, isTaskAccessBlocked: d, children: u } = e,
        m = void 0 !== d && d
      a[0] !== m || a[1] !== c ? ((n = h(c, m)), (a[0] = m), (a[1] = c), (a[2] = n)) : (n = a[2])
      let f = `size-2 shrink-0 rounded-full ${n}`
      return (
        a[3] !== f
          ? ((t = (0, o.jsx)("span", { "aria-hidden": !0, className: f })), (a[3] = f), (a[4] = t))
          : (t = a[4]),
        a[5] !== u || a[6] !== c
          ? ((l =
              u ??
              (0, o.jsx)(r.A, {
                id: "composer.newTask.computerStatusTooltip",
                defaultMessage:
                  "{status, select, connected {Ready to use} connecting {Connecting\u2026} restarting {Restarting\u2026} disconnected {Disconnected} offline {Offline} error {Connection failed} other {Couldn\u2019t check status}}",
                values: { status: c },
              })),
            (a[5] = u),
            (a[6] = c),
            (a[7] = l))
          : (l = a[7]),
        a[8] !== t || a[9] !== l
          ? ((i = (0, o.jsxs)("span", { className: "flex items-center gap-2", children: [t, l] })),
            (a[8] = t),
            (a[9] = l),
            (a[10] = i))
          : (i = a[10]),
        i
      )
    }
    function h(e, n) {
      return n ? d.error : d[e]
    }
    t.d(
      n,
      {},
      {
        Gp: u,
        MJ: function (e) {
          let n,
            t,
            r,
            i,
            c,
            d,
            h,
            f,
            g,
            p,
            v = (0, s.c)(24)
          v[0] !== e
            ? (({ connectionType: n, status: i, isTaskAccessBlocked: c, tooltipText: d, leftIcon: t, ...r } = e),
              (v[0] = e),
              (v[1] = n),
              (v[2] = t),
              (v[3] = r),
              (v[4] = i),
              (v[5] = c),
              (v[6] = d))
            : ((n = v[1]), (t = v[2]), (r = v[3]), (i = v[4]), (c = v[5]), (d = v[6]))
          let x = void 0 !== c && c,
            j = (0, l.A)()
          v[7] !== n || v[8] !== j || v[9] !== i
            ? ((h = j.formatMessage(
                {
                  id: "composer.newTask.computerConnectionRouteStatus",
                  defaultMessage:
                    "{connectionType, select, ssh {SSH} wsl {WSL} environmentService {Environment service} other {Remote control}}, {status, select, connected {Connected} connecting {Connecting} restarting {Restarting} disconnected {Disconnected} offline {Offline} error {Connection failed} other {Couldn\u2019t check status}}",
                },
                { connectionType: n, status: i },
              )),
              (v[7] = n),
              (v[8] = j),
              (v[9] = i),
              (v[10] = h))
            : (h = v[10])
          let k = h,
            S = "string" == typeof d ? d : k
          return (
            v[11] !== x || v[12] !== i || v[13] !== d
              ? ((f = x && null != d ? d : (0, o.jsx)(m, { status: i, isTaskAccessBlocked: x, children: d })),
                (v[11] = x),
                (v[12] = i),
                (v[13] = d),
                (v[14] = f))
              : (f = v[14]),
            v[15] !== x || v[16] !== t || v[17] !== i
              ? ((g = (0, o.jsx)(u, { status: i, isTaskAccessBlocked: x, children: t })),
                (v[15] = x),
                (v[16] = t),
                (v[17] = i),
                (v[18] = g))
              : (g = v[18]),
            v[19] !== r || v[20] !== S || v[21] !== f || v[22] !== g
              ? ((p = (0, o.jsx)(a.ms.Item, {
                  ...r,
                  variant: "detail",
                  tooltipColor: "default",
                  "aria-description": S,
                  tooltipText: f,
                  leftIcon: g,
                })),
                (v[19] = r),
                (v[20] = S),
                (v[21] = f),
                (v[22] = g),
                (v[23] = p))
              : (p = v[23]),
            p
          )
        },
        vb: m,
      },
    )
  },
  Qg8B(e, n, t) {
    t.d(n, { r: () => eu })
    var o = t("ABep"),
      s = t("QosV"),
      l = t("h6Iv"),
      r = t("ZOYk"),
      i = t("djEg"),
      a = t("jWzm"),
      c = t("qmMi"),
      d = t("DBCl"),
      u = t("zd8w"),
      m = t("Wf1j"),
      h = t("oyxz"),
      f = t("Ywss"),
      g = t("fHsr"),
      p = t("tl5a"),
      v = t("X7C7"),
      x = t("bqtn"),
      j = t("HOLv"),
      k = t("bVeK"),
      S = t("cLiZ"),
      C = t("trJr"),
      y = t("gSRh"),
      I = t("UlP1"),
      b = t("T9N0"),
      w = t("hlvl"),
      M = t("o2hF"),
      A = t("tz0P"),
      T = t("KxVC"),
      L = t("kx7U"),
      U = t("OWtl"),
      N = t("o4oB"),
      _ = t("tSEg"),
      P = t("ndjw"),
      B = t("fnPc"),
      R = t("kfGJ"),
      z = t("zx49"),
      E = t("ckTT"),
      W = t("pkoC"),
      F = t.n(W),
      q = t("KUdL"),
      D = t.n(q),
      V = t("uq3k"),
      O = t("rljs"),
      Q = t("Sm6l"),
      G = t("wC5i"),
      Y = t("m8VT"),
      K = t("YYX4"),
      H = t("wsIu"),
      Z = t("kdqP"),
      J = t("qWhI"),
      $ = t("Uj87"),
      X = t("aAWW")
    function ee(e) {
      let n,
        t,
        l = (0, s.c)(5),
        { searchQuery: r, children: i, reserveSearchSpace: a } = e,
        c = (void 0 === a || a) && r.trim() ? "fixed" : "unbounded"
      return (
        l[0] !== i
          ? ((n = (0, o.jsx)("div", { "data-menu-preserve-search-focus": !0, children: i })), (l[0] = i), (l[1] = n))
          : (n = l[1]),
        l[2] !== c || l[3] !== n
          ? ((t = (0, o.jsx)(H.Y, {
              className: "vertical-scroll-fade-mask [--edge-fade-distance:1.5rem]",
              height: c,
              onScrollCapture: X.e,
              children: n,
            })),
            (l[2] = c),
            (l[3] = n),
            (l[4] = t))
          : (t = l[4]),
        t
      )
    }
    function en(e) {
      let n,
        t = (0, s.c)(10),
        {
          label: l,
          icon: r,
          flat: i,
          showSearch: a,
          searchPlaceholder: c,
          searchQuery: d,
          onSearchQueryChange: u,
          onSelect: m,
          children: h,
        } = e,
        f = void 0 !== i && i,
        g = void 0 === a || a
      return (
        t[0] !== h ||
        t[1] !== f ||
        t[2] !== r ||
        t[3] !== l ||
        t[4] !== u ||
        t[5] !== m ||
        t[6] !== c ||
        t[7] !== d ||
        t[8] !== g
          ? ((n = f
              ? (0, o.jsx)(o.Fragment, { children: h })
              : (0, o.jsxs)(x.ms.FlyoutSubmenuItem, {
                  alignToParentBottom: !0,
                  label: l,
                  LeftIcon: r,
                  contentWidth: "panel",
                  onSelect: m,
                  onOpenChange: () => u(""),
                  children: [
                    g
                      ? (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)(x.ms.SearchInput, {
                              autoFocus: !1,
                              "aria-label": c,
                              placeholder: c,
                              value: d,
                              onChange: (e) => u(e.target.value),
                            }),
                            (0, o.jsx)(x.ms.Separator, {}),
                          ],
                        })
                      : null,
                    (0, o.jsx)(ee, { searchQuery: d, children: h }),
                  ],
                })),
            (t[0] = h),
            (t[1] = f),
            (t[2] = r),
            (t[3] = l),
            (t[4] = u),
            (t[5] = m),
            (t[6] = c),
            (t[7] = d),
            (t[8] = g),
            (t[9] = n))
          : (n = t[9]),
        n
      )
    }
    var et = t("Cybu")
    function eo(e) {
      let n,
        t,
        l,
        r,
        i = (0, s.c)(15),
        {
          selection: a,
          cloud: f,
          onRemoteSelected: g,
          onManageRemote: p,
          searchQuery: v,
          onContextMenuOpenChange: j,
          onRequestClose: C,
        } = e,
        y = (0, c.gh)(_.GD),
        I = (0, m.A)(),
        [b, w] = (0, u.useState)(""),
        M = (0, c.Ul)(null != g ? L.u8 : null),
        A = (0, c.Ul)(null),
        T = (0, c._U)(S.FD, (0, c.Ul)(N.S)),
        U = (0, c._U)(et.P5, "ssh"),
        P = (0, c.Ul)(et.u$)
      i[0] !== U
        ? ((n = (e) => {
            let n = U.indexOf(e.hostId)
            return n < 0 ? 1 / 0 : n
          }),
          (i[0] = U),
          (i[1] = n))
        : (n = i[1])
      let [B, R] = F()(D()(M?.filter(ei), n), d.tPs),
        z = A?.data?.filter(G.v),
        E = R.length + (z?.length ?? 0),
        W = (null != g && null == M) || A?.isLoading === !0,
        q = v.trim(),
        V = q || b.trim(),
        O = (0, K.q)(V),
        Q = R.filter((e) => "" === V || O(e.displayName) > 0),
        $ = z?.some((e) => "" === V || O(e.displayName) > 0),
        X = P?.type === "ssh" ? R.find((e) => e.hostId === P.targetId) : void 0,
        ee = P?.type === "computer" ? z?.find((e) => e.environmentId === P.targetId) : void 0,
        eo = (0, c._U)(null != X ? Z.e : null, X?.hostId ?? ""),
        ed =
          ("remote" === a.kind && R.some((e) => e.hostId === a.hostId)) || "computer" === a.kind
            ? a.name
            : (X?.displayName ?? ee?.displayName)
      if (null != X && null == eo && null != g)
        t = () => {
          ;(g(X.hostId), C())
        }
      else if (ee?.status === "connected" && !1 !== ee.canUseForTasks)
        t = () => {
          ;(eu([ee.environmentId]), C())
        }
      else if (
        f?.computerItems != null &&
        null == f.environmentSelection &&
        !0 !== f.allowEnvironments &&
        null != f.onDefaultSelected
      ) {
        let e
        ;(i[2] !== f || i[3] !== C
          ? ((e = () => {
              ;(f.onDefaultSelected?.(), C())
            }),
            (i[2] = f),
            (i[3] = C),
            (i[4] = e))
          : (e = i[4]),
          (t = e))
      }
      function eu(e) {
        ;(f?.onBeforeSelected?.(),
          null != e[0] && (0, et.jW)(y, "computer", e[0]),
          (0, S.RG)(y, e, y.get(N.S)),
          f?.onSelected())
      }
      let em =
        E > 0 || W || A?.isError || f?.computerItems != null
          ? (0, o.jsxs)(en, {
              onSelect: t,
              flat: "" !== q,
              showSearch: E > 5,
              searchQuery: b,
              onSearchQueryChange: w,
              searchPlaceholder:
                f?.environmentSelection == null
                  ? I.formatMessage({
                      id: "composer.newTask.workOnRemoteComputer",
                      defaultMessage: "Work on a remote computer",
                    })
                  : I.formatMessage({
                      id: "composer.newTask.searchRemotes",
                      defaultMessage: "Search remote computers",
                    }),
              label: (0, o.jsxs)("div", {
                className: "flex min-w-0 items-center gap-1",
                children: [
                  null,
                  (0, o.jsx)(o.Fragment, {
                    children:
                      null == ed
                        ? (0, o.jsx)(h.A, { id: "composer.newTask.remoteGroup", defaultMessage: "Remote" })
                        : (0, o.jsx)(h.A, {
                            id: "composer.newTask.otherDevicesWithDevice",
                            defaultMessage: "<group>Remote</group> <device>{deviceName}</device>",
                            values: { deviceName: ed, group: el, device: er },
                          }),
                  }),
                ],
              }),
              icon: k.zYJ,
              children: [
                (0, o.jsxs)(H.Y, {
                  className: "vertical-scroll-fade-mask [--edge-fade-distance:1.5rem]",
                  height: V ? "unbounded" : "max",
                  children: [
                    null != g && null == M ? (0, o.jsx)(Y.h, {}) : null,
                    null != g
                      ? Q.map((e) =>
                          (0, o.jsx)(
                            ec,
                            {
                              connection: e,
                              selected: "remote" === a.kind && a.hostId === e.hostId,
                              onSelected: g,
                              onManage: p,
                            },
                            e.hostId,
                          ),
                        )
                      : null,
                    f?.computerItems?.(V, j),
                    null != f && null != A && ($ || A.isLoading || A.isError)
                      ? (0, o.jsx)(J.e, {
                          searchQuery: V,
                          environments: z,
                          isLoading: A.isLoading,
                          isError: A.isError,
                          onRetry: es,
                          selectedIds: "computer" === a.kind ? T : [],
                          showHeading: !1,
                          singleSelection: !0,
                          onSelectionChange: eu,
                        })
                      : null,
                    "" !== q || "" === V || W || A?.isError || 0 !== Q.length || $ || f?.computerItems != null
                      ? null
                      : (0, o.jsx)(x.ms.Message, {
                          compact: !0,
                          children: (0, o.jsx)(h.A, {
                            id: "composer.newTask.noMatchingRemoteComputers",
                            defaultMessage: "No matching remote computers",
                          }),
                        }),
                  ],
                }),
                "" === V
                  ? (0, o.jsxs)(o.Fragment, {
                      children: [
                        (0, o.jsx)(x.ms.Separator, {}),
                        (0, o.jsx)(x.ms.Item, {
                          LeftIcon: k.dqq,
                          onSelect: () => p(),
                          children: (0, o.jsx)(h.A, { id: "composer.newTask.manageRemote", defaultMessage: "Manage" }),
                        }),
                      ],
                    })
                  : null,
              ],
            })
          : null
      return (
        i[5] !== p || i[6] !== g || i[7] !== v || i[8] !== a.hostId || i[9] !== a.kind || i[10] !== B
          ? ((l =
              B.length > 0 && null != g
                ? (0, o.jsx)(ea, {
                    connections: B,
                    searchQuery: v,
                    selectedHostId: "remote" === a.kind ? a.hostId : void 0,
                    onSelected: g,
                    onManage: p,
                  })
                : null),
            (i[5] = p),
            (i[6] = g),
            (i[7] = v),
            (i[8] = a.hostId),
            (i[9] = a.kind),
            (i[10] = B),
            (i[11] = l))
          : (l = i[11]),
        i[12] !== em || i[13] !== l
          ? ((r = (0, o.jsxs)(o.Fragment, { children: [em, l] })), (i[12] = em), (i[13] = l), (i[14] = r))
          : (r = i[14]),
        r
      )
    }
    function es() {}
    function el(e) {
      return (0, o.jsx)("span", { children: e })
    }
    function er(e) {
      return (0, o.jsx)("span", { className: "truncate text-sm text-codex-description", children: e })
    }
    function ei(e) {
      return e.autoConnect
    }
    function ea(e) {
      let n,
        t,
        l,
        r,
        i,
        a,
        c,
        d,
        f,
        g,
        p,
        v,
        j,
        S,
        C,
        y,
        I,
        b,
        w,
        M = (0, s.c)(55),
        { connections: A, searchQuery: T, selectedHostId: L, onSelected: U, onManage: N } = e,
        _ = (0, m.A)(),
        [P, B] = (0, u.useState)("")
      M[0] !== T ? ((n = T.trim()), (M[0] = T), (M[1] = n)) : (n = M[1])
      let R = "" !== n,
        z = R ? T : P
      if (
        M[2] !== A ||
        M[3] !== R ||
        M[4] !== _ ||
        M[5] !== N ||
        M[6] !== U ||
        M[7] !== L ||
        M[8] !== P ||
        M[9] !== z
      ) {
        let e
        i = z.trim()
        let n = (0, K.q)(i)
        ;((r = A.filter((e) => "" === i || n(e.displayName) > 0)),
          (l = en),
          M[24] === Symbol.for("react.memo_cache_sentinel")
            ? ((v = (0, o.jsx)(h.A, { id: "composer.newTask.sshGroup", defaultMessage: "SSH" })), (M[24] = v))
            : (v = M[24]),
          (j = k._dX),
          (S = R),
          (C = A.length > 5),
          (a = P),
          (c = B),
          M[25] !== _
            ? ((d = _.formatMessage({ id: "composer.newTask.workViaSsh", defaultMessage: "Work via SSH" })),
              (M[25] = _),
              (M[26] = d))
            : (d = M[26]),
          (t = H.Y),
          (f = "vertical-scroll-fade-mask [--edge-fade-distance:1.5rem]"),
          (g = i ? "unbounded" : "max"),
          M[27] !== N || M[28] !== U || M[29] !== L
            ? ((e = (e) =>
                (0, o.jsx)(ec, { connection: e, selected: L === e.hostId, onSelected: U, onManage: N }, e.hostId)),
              (M[27] = N),
              (M[28] = U),
              (M[29] = L),
              (M[30] = e))
            : (e = M[30]),
          (p = r.map(e)),
          (M[2] = A),
          (M[3] = R),
          (M[4] = _),
          (M[5] = N),
          (M[6] = U),
          (M[7] = L),
          (M[8] = P),
          (M[9] = z),
          (M[10] = t),
          (M[11] = l),
          (M[12] = r),
          (M[13] = i),
          (M[14] = a),
          (M[15] = c),
          (M[16] = d),
          (M[17] = f),
          (M[18] = g),
          (M[19] = p),
          (M[20] = v),
          (M[21] = j),
          (M[22] = S),
          (M[23] = C))
      } else
        ((t = M[10]),
          (l = M[11]),
          (r = M[12]),
          (i = M[13]),
          (a = M[14]),
          (c = M[15]),
          (d = M[16]),
          (f = M[17]),
          (g = M[18]),
          (p = M[19]),
          (v = M[20]),
          (j = M[21]),
          (S = M[22]),
          (C = M[23]))
      return (
        M[31] !== R || M[32] !== r
          ? ((y =
              R || 0 !== r.length
                ? null
                : (0, o.jsx)(x.ms.Message, {
                    compact: !0,
                    children: (0, o.jsx)(h.A, {
                      id: "composer.newTask.noMatchingSshHosts",
                      defaultMessage: "No matching SSH hosts",
                    }),
                  })),
            (M[31] = R),
            (M[32] = r),
            (M[33] = y))
          : (y = M[33]),
        M[34] !== t || M[35] !== y || M[36] !== f || M[37] !== g || M[38] !== p
          ? ((I = (0, o.jsxs)(t, { className: f, height: g, children: [p, y] })),
            (M[34] = t),
            (M[35] = y),
            (M[36] = f),
            (M[37] = g),
            (M[38] = p),
            (M[39] = I))
          : (I = M[39]),
        M[40] !== A[0] || M[41] !== N || M[42] !== i
          ? ((b = i
              ? null
              : (0, o.jsxs)(o.Fragment, {
                  children: [
                    (0, o.jsx)(x.ms.Separator, {}),
                    (0, o.jsx)(x.ms.Item, {
                      LeftIcon: k.dqq,
                      onSelect: () => N(A[0]),
                      children: (0, o.jsx)(h.A, { id: "composer.newTask.manageSsh", defaultMessage: "Manage" }),
                    }),
                  ],
                })),
            (M[40] = A[0]),
            (M[41] = N),
            (M[42] = i),
            (M[43] = b))
          : (b = M[43]),
        M[44] !== l ||
        M[45] !== a ||
        M[46] !== c ||
        M[47] !== d ||
        M[48] !== I ||
        M[49] !== b ||
        M[50] !== v ||
        M[51] !== j ||
        M[52] !== S ||
        M[53] !== C
          ? ((w = (0, o.jsxs)(l, {
              label: v,
              icon: j,
              flat: S,
              showSearch: C,
              searchQuery: a,
              onSearchQueryChange: c,
              searchPlaceholder: d,
              children: [I, b],
            })),
            (M[44] = l),
            (M[45] = a),
            (M[46] = c),
            (M[47] = d),
            (M[48] = I),
            (M[49] = b),
            (M[50] = v),
            (M[51] = j),
            (M[52] = S),
            (M[53] = C),
            (M[54] = w))
          : (w = M[54]),
        w
      )
    }
    function ec(e) {
      let n,
        t,
        l,
        r,
        i = (0, s.c)(22),
        { connection: a, selected: u, onSelected: m, onManage: h } = e,
        f = (0, c._U)(p.y2, a.hostId),
        g = (0, c._U)(Z.e, a.hostId),
        v = (0, d.tPs)(a) ? "ssh" : a.source,
        x = null != g,
        j = null != g,
        S = null == g && "error" === f,
        C = null != g ? "w-56 text-start" : void 0
      ;(i[0] !== a || i[1] !== g || i[2] !== h || i[3] !== f
        ? ((n =
            g ??
            ("error" === f || "connecting" === f
              ? (0, o.jsx)(ed, { hostId: a.hostId, state: f, onManage: () => h(a) })
              : void 0)),
          (i[0] = a),
          (i[1] = g),
          (i[2] = h),
          (i[3] = f),
          (i[4] = n))
        : (n = i[4]),
        i[5] !== a
          ? ((t = (0, d.tPs)(a) ? (0, o.jsx)(T.z, { hostId: a.hostId, size: 16 }) : void 0), (i[5] = a), (i[6] = t))
          : (t = i[6]))
      let y = u ? k.ALZ : void 0
      i[7] !== a.hostId || i[8] !== m
        ? ((l = () => m(a.hostId)), (i[7] = a.hostId), (i[8] = m), (i[9] = l))
        : (l = i[9])
      let I = a.displayName ?? a.hostId
      return (
        i[10] !== f ||
        i[11] !== v ||
        i[12] !== I ||
        i[13] !== x ||
        i[14] !== j ||
        i[15] !== S ||
        i[16] !== C ||
        i[17] !== n ||
        i[18] !== t ||
        i[19] !== y ||
        i[20] !== l
          ? ((r = (0, o.jsx)($.MJ, {
              connectionType: v,
              status: f,
              disabled: x,
              focusableWhenDisabled: !0,
              isTaskAccessBlocked: j,
              tooltipInteractive: S,
              tooltipTextClassName: C,
              tooltipText: n,
              leftIcon: t,
              RightIcon: y,
              onSelect: l,
              children: I,
            })),
            (i[10] = f),
            (i[11] = v),
            (i[12] = I),
            (i[13] = x),
            (i[14] = j),
            (i[15] = S),
            (i[16] = C),
            (i[17] = n),
            (i[18] = t),
            (i[19] = y),
            (i[20] = l),
            (i[21] = r))
          : (r = i[21]),
        r
      )
    }
    function ed(e) {
      let n,
        t,
        l,
        r,
        i = (0, s.c)(21),
        { hostId: a, state: d, onManage: u } = e,
        f = (0, m.A)(),
        p = (0, c._U)(O.LH, a),
        v = (0, R.Qz)(a)
      i[0] !== p || i[1] !== v.kind || i[2] !== f || i[3] !== d
        ? ((n = (0, V.J)(f, {
            canLogin: !1,
            error: p,
            hostKind: v.kind,
            state: d,
            surface: "connection-status-badge",
          })),
          (i[0] = p),
          (i[1] = v.kind),
          (i[2] = f),
          (i[3] = d),
          (i[4] = n))
        : (n = i[4])
      let { action: x, label: j } = n
      if (x?.kind === "reconnect") {
        let e
        ;(i[5] !== x.label || i[6] !== v.kind || i[7] !== a
          ? ((e = (0, o.jsx)(g.Q9, { hostId: a, hostKind: v.kind, label: x.label })),
            (i[5] = x.label),
            (i[6] = v.kind),
            (i[7] = a),
            (i[8] = e))
          : (e = i[8]),
          (t = e))
      } else if (null != x && "error" === d) {
        let e, n, s
        ;(i[9] !== u
          ? ((e = (e) => {
              ;(e.preventDefault(), e.stopPropagation(), u())
            }),
            (i[9] = u),
            (i[10] = e))
          : (e = i[10]),
          i[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, o.jsx)(h.A, { id: "composer.newTask.manageRemote", defaultMessage: "Manage" })), (i[11] = n))
            : (n = i[11]),
          i[12] !== e
            ? ((s = (0, o.jsx)(Q.$, { color: "ghost", onClick: e, children: n })), (i[12] = e), (i[13] = s))
            : (s = i[13]),
          (t = s))
      }
      return (
        i[14] !== p?.code || i[15] !== j || i[16] !== d
          ? ((l =
              p?.code === "connection-failed" && "error" === d
                ? (0, o.jsx)(h.A, {
                    id: "composer.newTask.remoteConnectionFailed",
                    defaultMessage: "Connection failed",
                  })
                : j),
            (i[14] = p?.code),
            (i[15] = j),
            (i[16] = d),
            (i[17] = l))
          : (l = i[17]),
        i[18] !== t || i[19] !== l
          ? ((r = (0, o.jsxs)(o.Fragment, { children: [l, t] })), (i[18] = t), (i[19] = l), (i[20] = r))
          : (r = i[20]),
        r
      )
    }
    function eu(e) {
      let n,
        t,
        S,
        C,
        w,
        N,
        _,
        W,
        F,
        q,
        D,
        V,
        O,
        Q,
        G,
        Y,
        K,
        H,
        Z,
        J,
        $,
        X,
        en,
        et,
        es,
        el,
        er,
        ei,
        ea,
        ec,
        ed,
        eu,
        ep,
        ev = (0, s.c)(173),
        {
          selection: ex,
          presentation: ej,
          onLocalSelected: ek,
          localDisabledReason: eS,
          cloud: eC,
          onRemoteSelected: ey,
          open: eI,
          onOpenChange: eb,
          disabled: ew,
          modal: eM,
          onCloseAutoFocus: eA,
        } = e,
        eT = void 0 === ej ? "inline" : ej,
        eL = (0, c.gh)(U.u),
        eU = (0, m.A)(),
        eN = (0, c.Ul)(null != eC && null == eC.computerItems && !1 !== eC.allowComputers && E.k5),
        e_ = (0, f.Zp)(),
        eP = "remote" === ex.kind ? ex.hostId : void 0,
        eB = (0, c._U)(null == eP ? null : P.fm, eP ?? R.fI),
        eR = (0, c._U)(null == eP ? null : p.y2, eP ?? R.fI),
        ez = (0, c.Ul)(null == eP ? null : L.u8)?.find((e) => e.hostId === eP),
        eE = "computer" === ex.kind ? ex.connected : null != eP && "connected" === eR && ez?.autoConnect === !0,
        eW = null != ey && ez?.autoConnect !== !1 && ("connecting" === eR || "restarting" === eR)
      ev[0] !== eP || ev[1] !== ey
        ? ((n =
            null != eP && null != ey
              ? (0, o.jsx)(g.r0, { hostId: eP, interactive: !1, showConnectedState: !1, showDisabledState: !0 })
              : null),
          (ev[0] = eP),
          (ev[1] = ey),
          (ev[2] = n))
        : (n = ev[2])
      let eF = n,
        [eq, eD] = (0, u.useState)(""),
        [eV, eO] = (0, u.useState)("")
      ev[3] !== eq ? ((t = eq.trim()), (ev[3] = eq), (ev[4] = t)) : (t = ev[4])
      let eQ = "" !== t,
        [eG, eY] = (0, u.useState)(!1),
        eK = eC?.allowComputers !== !1 && (null != ey || eC?.computerItems != null),
        eH = null != eC && !1 !== eC.allowEnvironments && (null == eC.computerItems || !0 === eC.allowEnvironments),
        eZ = eK && eC?.computerItems != null && null == eC.environmentSelection && !eH
      ev[5] !== eU
        ? ((S = eU.formatMessage({ id: "composer.newTask.location", defaultMessage: "Location" })),
          (ev[5] = eU),
          (ev[6] = S))
        : (S = ev[6])
      let eJ = S
      ev[7] !== eU
        ? ((C = eU.formatMessage({ id: "composer.newTask.thisComputer", defaultMessage: "This computer" })),
          (ev[7] = eU),
          (ev[8] = C))
        : (C = ev[8])
      let e$ = C
      if (
        ev[9] !== eC ||
        ev[10] !== eE ||
        ev[11] !== eF ||
        ev[12] !== eG ||
        ev[13] !== ew ||
        ev[14] !== eB?.kind ||
        ev[15] !== eP ||
        ev[16] !== eU ||
        ev[17] !== eS ||
        ev[18] !== e$ ||
        ev[19] !== eJ ||
        ev[20] !== eM ||
        ev[21] !== eA ||
        ev[22] !== ek ||
        ev[23] !== eb ||
        ev[24] !== eI ||
        ev[25] !== eT ||
        ev[26] !== eL ||
        ev[27] !== eq ||
        ev[28] !== ex.environmentKind ||
        ev[29] !== ex.kind ||
        ev[30] !== ex.name ||
        ev[31] !== eW ||
        ev[32] !== eH ||
        ev[33] !== eZ
      ) {
        let e,
          n,
          t,
          s,
          c,
          d,
          u,
          m,
          f = eU.formatMessage({ id: "composer.newTask.defaultCloud", defaultMessage: "Cloud" })
        ;(ev[58] !== eU
          ? ((e = eU.formatMessage({ id: "composer.newTask.blankEnvironment", defaultMessage: "Default environment" })),
            (ev[58] = eU),
            (ev[59] = e))
          : (e = ev[59]),
          (W = e))
        let g = ex.name
        if (
          ((_ = "cloud" === ex.kind && null == ex.name && eC?.onBlankSelected != null && !1 !== eC.isBlankSelected),
          "no-computer" === ex.kind || (eC?.environmentSelection != null && "cloud" === ex.kind && null == ex.name))
        ) {
          let e
          ;(ev[60] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(h.A, {
                id: "composer.newTask.cloudWithoutEnvironmentLabel",
                defaultMessage: "Cloud <environment>No environment</environment>",
                values: { environment: ef },
              })),
              (ev[60] = e))
            : (e = ev[60]),
            (g = e))
        }
        ev[61] !== eU || ev[62] !== eZ
          ? ((n = eZ
              ? eU.formatMessage({ id: "composer.team.searchPlaceholder", defaultMessage: "Search" })
              : eU.formatMessage({ id: "composer.newTask.searchLocations", defaultMessage: "Search locations" })),
            (ev[61] = eU),
            (ev[62] = eZ),
            (ev[63] = n))
          : (n = ev[63])
        let p = n
        if (
          (ev[64] !== eb || ev[65] !== eL || ev[66] !== eH
            ? ((t = function (e) {
                ;(null != e && eH && (0, A.Nb)(eL).catch(eh), eD(""), eb(e))
              }),
              (ev[64] = eb),
              (ev[65] = eL),
              (ev[66] = eH),
              (ev[67] = t))
            : (t = ev[67]),
          (F = t),
          eW)
        )
          s = eF
        else if (eB?.kind === "ssh" && null != eP) {
          let e
          ;(ev[68] !== eP
            ? ((e = (0, o.jsx)(T.z, { hostId: eP, size: 16 })), (ev[68] = eP), (ev[69] = e))
            : (e = ev[69]),
            (s = e))
        } else if ("cloud" === ex.kind && null != ex.environmentKind) {
          let e
          ;(ev[70] !== ex.environmentKind
            ? ((e = (0, o.jsx)(y.i, { kind: ex.environmentKind })), (ev[70] = ex.environmentKind), (ev[71] = e))
            : (e = ev[71]),
            (s = e))
        } else {
          let e, n
          ev[72] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = { local: a.g, cloud: l.f, remote: i.t, computer: i.t, "no-computer": l.f }), (ev[72] = e))
            : (e = ev[72])
          let t = e[ex.kind]
          ;(ev[73] !== t
            ? ((n = (0, o.jsx)(j.I, { asset: t, alignment: "primary" })), (ev[73] = t), (ev[74] = n))
            : (n = ev[74]),
            (s = n))
        }
        ;((N = x.Ab),
          (D = ew),
          (V = eM),
          (O = "location" === eI),
          ev[75] !== eG || ev[76] !== F
            ? ((Q = (e) => {
                ;(e || !eG) && F(e ? "location" : null)
              }),
              (ev[75] = eG),
              (ev[76] = F),
              (ev[77] = Q))
            : (Q = ev[77]),
          (G = em),
          ev[78] !== eG
            ? ((Y = (e) => {
                eG && e.preventDefault()
              }),
              (ev[78] = eG),
              (ev[79] = Y))
            : (Y = ev[79]),
          (K = eA),
          (H = "start"),
          (Z = "workspace"),
          (J = eZ ? "compact" : "wide"),
          ($ = eZ ? "single-line" : void 0),
          ev[80] !== eE || ev[81] !== s
            ? ((c = (0, o.jsx)(v.o, { badgeEnabled: eE, position: "bottom-right", color: "bg-green", children: s })),
              (ev[80] = eE),
              (ev[81] = s),
              (ev[82] = c))
            : (c = ev[82]))
        let S = eZ ? "none" : "chevron"
        ev[83] !== _ || ev[84] !== W || ev[85] !== e$ || ev[86] !== ex.kind || ev[87] !== g
          ? ((d = _
              ? W
              : (g ??
                ("local" === ex.kind
                  ? e$
                  : (0, o.jsx)(h.A, { id: "composer.newTask.chooseLocation", defaultMessage: "Choose location" })))),
            (ev[83] = _),
            (ev[84] = W),
            (ev[85] = e$),
            (ev[86] = ex.kind),
            (ev[87] = g),
            (ev[88] = d))
          : (d = ev[88])
        let C = eW ? null : eF
        ;(ev[89] !== ew ||
        ev[90] !== eJ ||
        ev[91] !== eT ||
        ev[92] !== c ||
        ev[93] !== S ||
        ev[94] !== d ||
        ev[95] !== C
          ? ((X = (0, o.jsx)(z.P, {
              "aria-label": eJ,
              disabled: ew,
              categoryLabel: null,
              presentation: eT,
              menuCategoryLabel: eJ,
              collapse: "none",
              icon: c,
              indicator: S,
              value: d,
              valueClassName: "max-w-60",
              status: C,
            })),
            (ev[89] = ew),
            (ev[90] = eJ),
            (ev[91] = eT),
            (ev[92] = c),
            (ev[93] = S),
            (ev[94] = d),
            (ev[95] = C),
            (ev[96] = X))
          : (X = ev[96]),
          ev[97] !== eC?.environmentSelection || ev[98] !== eU || ev[99] !== p || ev[100] !== eZ
            ? ((u =
                eZ || eC?.environmentSelection != null
                  ? p
                  : eU.formatMessage({ id: "composer.newTask.searchCloudPlaceholder", defaultMessage: "Work in" })),
              (ev[97] = eC?.environmentSelection),
              (ev[98] = eU),
              (ev[99] = p),
              (ev[100] = eZ),
              (ev[101] = u))
            : (u = ev[101]),
          ev[102] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = (e) => eD(e.target.value)), (ev[102] = m))
            : (m = ev[102]),
          ev[103] !== p || ev[104] !== eq || ev[105] !== u
            ? ((en = (0, o.jsx)(x.ms.SearchInput, {
                autoFocus: !1,
                "aria-label": p,
                placeholder: u,
                value: eq,
                onChange: m,
              })),
              (ev[103] = p),
              (ev[104] = eq),
              (ev[105] = u),
              (ev[106] = en))
            : (en = ev[106]),
          ev[107] === Symbol.for("react.memo_cache_sentinel")
            ? ((et = (0, o.jsx)(x.ms.Separator, {})), (ev[107] = et))
            : (et = ev[107]),
          (w = ee),
          (es = eq),
          (el = !eZ),
          ev[108] !== eC || ev[109] !== eq || ev[110] !== eZ
            ? ((er =
                eZ && null != eC.computerItems
                  ? (0, o.jsxs)(o.Fragment, {
                      children: [
                        eC.computerItems(eq, eY),
                        null != eC.onManageComputers
                          ? (0, o.jsxs)(o.Fragment, {
                              children: [
                                (0, o.jsx)(x.ms.Separator, {}),
                                (0, o.jsx)(x.ms.Item, {
                                  leftIconAsset: r.T,
                                  onSelect: eC.onManageComputers,
                                  children: (0, o.jsx)(h.A, {
                                    id: "composer.newTask.manageComputers",
                                    defaultMessage: "Manage",
                                  }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    })
                  : null),
              (ev[108] = eC),
              (ev[109] = eq),
              (ev[110] = eZ),
              (ev[111] = er))
            : (er = ev[111]),
          ev[112] !== eS || ev[113] !== e$ || ev[114] !== ek || ev[115] !== eq || ev[116] !== ex.kind
            ? ((ei =
                null != ek && e$.toLocaleLowerCase().includes(eq.trim().toLocaleLowerCase())
                  ? (0, o.jsx)(x.ms.Item, {
                      leftIconAsset: a.g,
                      RightIcon: "local" === ex.kind ? k.ALZ : void 0,
                      disabled: null != eS,
                      tooltipText: eS,
                      onSelect: ek,
                      children: e$,
                    })
                  : null),
              (ev[112] = eS),
              (ev[113] = e$),
              (ev[114] = ek),
              (ev[115] = eq),
              (ev[116] = ex.kind),
              (ev[117] = ei))
            : (ei = ev[117]),
          (q =
            !eH && eC?.onDefaultSelected != null && !eZ && f.toLocaleLowerCase().includes(eq.trim().toLocaleLowerCase())
              ? (0, o.jsx)(x.ms.Item, { LeftIcon: k.LL7, onSelect: eC.onDefaultSelected, children: f })
              : null),
          (ev[9] = eC),
          (ev[10] = eE),
          (ev[11] = eF),
          (ev[12] = eG),
          (ev[13] = ew),
          (ev[14] = eB?.kind),
          (ev[15] = eP),
          (ev[16] = eU),
          (ev[17] = eS),
          (ev[18] = e$),
          (ev[19] = eJ),
          (ev[20] = eM),
          (ev[21] = eA),
          (ev[22] = ek),
          (ev[23] = eb),
          (ev[24] = eI),
          (ev[25] = eT),
          (ev[26] = eL),
          (ev[27] = eq),
          (ev[28] = ex.environmentKind),
          (ev[29] = ex.kind),
          (ev[30] = ex.name),
          (ev[31] = eW),
          (ev[32] = eH),
          (ev[33] = eZ),
          (ev[34] = w),
          (ev[35] = N),
          (ev[36] = _),
          (ev[37] = W),
          (ev[38] = F),
          (ev[39] = q),
          (ev[40] = D),
          (ev[41] = V),
          (ev[42] = O),
          (ev[43] = Q),
          (ev[44] = G),
          (ev[45] = Y),
          (ev[46] = K),
          (ev[47] = H),
          (ev[48] = Z),
          (ev[49] = J),
          (ev[50] = $),
          (ev[51] = X),
          (ev[52] = en),
          (ev[53] = et),
          (ev[54] = es),
          (ev[55] = el),
          (ev[56] = er),
          (ev[57] = ei))
      } else
        ((w = ev[34]),
          (N = ev[35]),
          (_ = ev[36]),
          (W = ev[37]),
          (F = ev[38]),
          (q = ev[39]),
          (D = ev[40]),
          (V = ev[41]),
          (O = ev[42]),
          (Q = ev[43]),
          (G = ev[44]),
          (Y = ev[45]),
          (K = ev[46]),
          (H = ev[47]),
          (Z = ev[48]),
          (J = ev[49]),
          ($ = ev[50]),
          (X = ev[51]),
          (en = ev[52]),
          (et = ev[53]),
          (es = ev[54]),
          (el = ev[55]),
          (er = ev[56]),
          (ei = ev[57]))
      return (
        ev[118] !== eN ||
        ev[119] !== _ ||
        ev[120] !== eC ||
        ev[121] !== W ||
        ev[122] !== eV ||
        ev[123] !== eU ||
        ev[124] !== eQ ||
        ev[125] !== e_ ||
        ev[126] !== eL ||
        ev[127] !== eq ||
        ev[128] !== ex ||
        ev[129] !== F ||
        ev[130] !== eH
          ? ((ea = eH
              ? (0, o.jsxs)(eg, {
                  selection: ex,
                  cloud: eC,
                  onRequestClose: () => F(null),
                  flat: eQ,
                  searchQuery: eV,
                  onSearchQueryChange: eO,
                  searchPlaceholder:
                    null == eC.environmentSelection
                      ? eU.formatMessage({ id: "composer.newTask.workInCloud", defaultMessage: "Work in the cloud" })
                      : eU.formatMessage({
                          id: "composer.newTask.searchEnvironments",
                          defaultMessage: "Search environments",
                        }),
                  label: (0, o.jsx)(h.A, { id: "composer.newTask.environmentGroup", defaultMessage: "Cloud" }),
                  icon: k.LL7,
                  children: [
                    null,
                    null,
                    (0, o.jsx)(I.g, {
                      height: eQ || "" !== eV.trim() ? "unbounded" : "max",
                      header:
                        null != eC.onBlankSelected &&
                        W.toLocaleLowerCase().includes((eQ ? eq : eV).trim().toLocaleLowerCase())
                          ? (0, o.jsx)(x.ms.Item, {
                              leftIcon: (0, o.jsx)(y.i, {
                                kind: "default",
                                className: "opacity-75 group-hover:opacity-100 group-focus:opacity-100",
                              }),
                              RightIcon: _ ? k.ALZ : void 0,
                              onSelect: eC.onBlankSelected,
                              children: W,
                            })
                          : null,
                      children: (0, o.jsx)(M.i, {
                        preserveLocalProject: !0,
                        searchQuery: eQ ? eq : eV,
                        collapsedLimit: null != eC.onBlankSelected ? 4 : 5,
                        showEmptyState: !eQ,
                        isSelectionActive: "cloud" === ex.kind,
                        selection: eC.environmentSelection,
                        onBeforeSelected: eC.onBeforeSelected,
                        onSelected: eC.onSelected,
                      }),
                    }),
                    eQ || "" !== eV.trim()
                      ? null
                      : (0, o.jsxs)(o.Fragment, {
                          children: [
                            (0, o.jsx)(x.ms.Separator, {}),
                            (0, o.jsx)(x.ms.Item, {
                              LeftIcon: k.xFs,
                              onSelect: () => (0, b.h)(eL),
                              children: (0, o.jsx)(h.A, {
                                id: "composer.newTask.createEnvironment",
                                defaultMessage: "Create environment",
                              }),
                            }),
                            (0, o.jsx)(o.Fragment, {
                              children: (0, o.jsx)(x.ms.Item, {
                                leftIconAsset: r.T,
                                onSelect: () => {
                                  ;(F(null), (0, B.aY)(eL, R.fI), e_("/settings/local-environments"))
                                },
                                children: (0, o.jsx)(h.A, {
                                  id: "composer.newTask.manageEnvironments",
                                  defaultMessage: "Manage environments",
                                }),
                              }),
                            }),
                          ],
                        }),
                  ],
                })
              : null),
            (ev[118] = eN),
            (ev[119] = _),
            (ev[120] = eC),
            (ev[121] = W),
            (ev[122] = eV),
            (ev[123] = eU),
            (ev[124] = eQ),
            (ev[125] = e_),
            (ev[126] = eL),
            (ev[127] = eq),
            (ev[128] = ex),
            (ev[129] = F),
            (ev[130] = eH),
            (ev[131] = ea))
          : (ea = ev[131]),
        ev[132] !== eN || ev[133] !== eC || ev[134] !== eH
          ? ((ec = null), (ev[132] = eN), (ev[133] = eC), (ev[134] = eH), (ev[135] = ec))
          : (ec = ev[135]),
        ev[136] !== eC ||
        ev[137] !== e_ ||
        ev[138] !== ey ||
        ev[139] !== eL ||
        ev[140] !== eq ||
        ev[141] !== ex ||
        ev[142] !== F ||
        ev[143] !== eZ ||
        ev[144] !== eK
          ? ((ed =
              !eZ && eK
                ? (0, o.jsx)(eo, {
                    selection: ex,
                    cloud: eC,
                    onRemoteSelected: ey,
                    onManageRemote: (e) => {
                      var n
                      ;(F(null),
                        (0, B.aY)(eL, R.fI),
                        e_(
                          null != (n = e) && (0, d.tPs)(n)
                            ? "/settings/connections/ssh"
                            : n?.source === "wsl"
                              ? "/settings/connections/wsl"
                              : "/settings/connections/devices",
                        ))
                    },
                    searchQuery: eq,
                    onContextMenuOpenChange: eY,
                    onRequestClose: () => F(null),
                  })
                : null),
            (ev[136] = eC),
            (ev[137] = e_),
            (ev[138] = ey),
            (ev[139] = eL),
            (ev[140] = eq),
            (ev[141] = ex),
            (ev[142] = F),
            (ev[143] = eZ),
            (ev[144] = eK),
            (ev[145] = ed))
          : (ed = ev[145]),
        ev[146] !== w ||
        ev[147] !== q ||
        ev[148] !== ea ||
        ev[149] !== ec ||
        ev[150] !== ed ||
        ev[151] !== es ||
        ev[152] !== el ||
        ev[153] !== er ||
        ev[154] !== ei
          ? ((eu = (0, o.jsxs)(w, { searchQuery: es, reserveSearchSpace: el, children: [er, ei, q, ea, ec, ed] })),
            (ev[146] = w),
            (ev[147] = q),
            (ev[148] = ea),
            (ev[149] = ec),
            (ev[150] = ed),
            (ev[151] = es),
            (ev[152] = el),
            (ev[153] = er),
            (ev[154] = ei),
            (ev[155] = eu))
          : (eu = ev[155]),
        ev[156] !== N ||
        ev[157] !== D ||
        ev[158] !== V ||
        ev[159] !== O ||
        ev[160] !== Q ||
        ev[161] !== G ||
        ev[162] !== Y ||
        ev[163] !== K ||
        ev[164] !== H ||
        ev[165] !== Z ||
        ev[166] !== J ||
        ev[167] !== $ ||
        ev[168] !== X ||
        ev[169] !== en ||
        ev[170] !== et ||
        ev[171] !== eu
          ? ((ep = (0, o.jsxs)(N, {
              disabled: D,
              modal: V,
              open: O,
              onOpenChange: Q,
              onOpenAutoFocus: G,
              onInteractOutside: Y,
              onCloseAutoFocus: K,
              align: H,
              contentWidth: Z,
              contentMaxWidth: J,
              rowLayout: $,
              triggerButton: X,
              children: [en, et, eu],
            })),
            (ev[156] = N),
            (ev[157] = D),
            (ev[158] = V),
            (ev[159] = O),
            (ev[160] = Q),
            (ev[161] = G),
            (ev[162] = Y),
            (ev[163] = K),
            (ev[164] = H),
            (ev[165] = Z),
            (ev[166] = J),
            (ev[167] = $),
            (ev[168] = X),
            (ev[169] = en),
            (ev[170] = et),
            (ev[171] = eu),
            (ev[172] = ep))
          : (ep = ev[172]),
        ep
      )
    }
    function em(e) {
      if (e.target instanceof HTMLElement) {
        let n = e.target.querySelector("input")
        null != n && (e.preventDefault(), n.focus())
      }
    }
    function eh() {}
    function ef(e) {
      return (0, o.jsx)("span", { className: "text-secondary", children: e })
    }
    function eg(e) {
      let n,
        t,
        l,
        r,
        i,
        a,
        d,
        u,
        m,
        f = (0, s.c)(28)
      f[0] !== e
        ? (({ selection: r, cloud: n, onRequestClose: t, ...l } = e),
          (f[0] = e),
          (f[1] = n),
          (f[2] = t),
          (f[3] = l),
          (f[4] = r))
        : ((n = f[1]), (t = f[2]), (l = f[3]), (r = f[4]))
      let g = (0, c.gh)(_.GD),
        { configs: p } = (0, c.Ul)(C.m),
        v = (0, c.Ul)(null == n.environmentSelection ? w.c4 : null),
        x = (0, c._U)(null == n.environmentSelection ? S.y_ : null, (0, c.Ul)(N.S))
      if (
        (f[5] !== n.environmentSelection || f[6] !== v || f[7] !== x || f[8] !== r.kind
          ? ((i = n.environmentSelection?.value),
            null == n.environmentSelection && (i = "cloud" === r.kind ? x : (x ?? v)),
            (f[5] = n.environmentSelection),
            (f[6] = v),
            (f[7] = x),
            (f[8] = r.kind),
            (f[9] = i))
          : (i = f[9]),
        "no-computer" === r.kind)
      )
        a = l.label
      else if (null != i) {
        let e
        ;(f[10] !== i.name
          ? ((e = (0, o.jsx)(h.A, {
              id: "composer.newTask.cloudWithEnvironment",
              defaultMessage: "<cloud>Cloud</cloud> <environment>{environmentName}</environment>",
              values: { environmentName: i.name, cloud: ej, environment: ex },
            })),
            (f[10] = i.name),
            (f[11] = e))
          : (e = f[11]),
          (a = e))
      } else if (null != n.onBlankSelected && ("cloud" !== r.kind || !1 !== n.isBlankSelected)) {
        let e
        ;(f[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(h.A, {
              id: "composer.newTask.cloudWithDefaultEnvironment",
              defaultMessage: "<cloud>Cloud</cloud> <environment>Default environment</environment>",
              values: { cloud: ev, environment: ep },
            })),
            (f[12] = e))
          : (e = f[12]),
          (a = e))
      } else a = l.label
      if (null == n.environmentSelection && null != i) {
        let e
        ;(f[13] !== n || f[14] !== i || f[15] !== t || f[16] !== g
          ? ((e = () => {
              let e = g.get(N.S)
              ;(n.onBeforeSelected?.(i),
                (0, w.aW)(g, i, e?.type === "local" ? e.projectId : void 0),
                n.onSelected(i),
                t())
            }),
            (f[13] = n),
            (f[14] = i),
            (f[15] = t),
            (f[16] = g),
            (f[17] = e))
          : (e = f[17]),
          (d = e))
      } else if (null == n.environmentSelection && null != n.onDefaultSelected) {
        let e
        ;(f[18] !== n || f[19] !== t
          ? ((e = () => {
              ;(n.onDefaultSelected?.(), t())
            }),
            (f[18] = n),
            (f[19] = t),
            (f[20] = e))
          : (e = f[20]),
          (d = e))
      }
      let j = (p?.length ?? 0) > 5
      f[21] !== a
        ? ((u = (0, o.jsx)("div", { className: "flex min-w-0 items-center gap-1", children: a })),
          (f[21] = a),
          (f[22] = u))
        : (u = f[22])
      let k = "no-computer" === r.kind ? void 0 : d
      return (
        f[23] !== l || f[24] !== j || f[25] !== u || f[26] !== k
          ? ((m = (0, o.jsx)(en, { ...l, showSearch: j, label: u, onSelect: k })),
            (f[23] = l),
            (f[24] = j),
            (f[25] = u),
            (f[26] = k),
            (f[27] = m))
          : (m = f[27]),
        m
      )
    }
    function ep(e) {
      return (0, o.jsx)("span", { className: "truncate text-sm text-codex-description", children: e })
    }
    function ev(e) {
      return (0, o.jsx)("span", { children: e })
    }
    function ex(e) {
      return (0, o.jsx)("span", { className: "truncate text-sm text-codex-description", children: e })
    }
    function ej(e) {
      return (0, o.jsx)("span", { children: e })
    }
  },
  Laxs(e, n, t) {
    var o = t("ABep"),
      s = t("QosV"),
      l = t("qmMi"),
      r = t("zd8w"),
      i = t("Wf1j"),
      a = t("oyxz"),
      c = t("Sm6l"),
      d = t("SGsN"),
      u = t("Yewb"),
      m = t("OWtl"),
      h = t("rLsS"),
      f = t("KZOJ"),
      g = t("fUey")
    function p() {
      return { status: "unavailable" }
    }
    t.d(
      n,
      {},
      {
        z: function (e) {
          let n,
            t,
            v,
            x,
            j,
            k = (0, s.c)(21),
            { connectorId: S, disabled: C, reconnect: y, compact: I } = e,
            b = void 0 !== I && I,
            w = (0, l.gh)(m.u)
          k[0] !== S ? ((n = (0, g.Pt)(S)), (k[0] = S), (k[1] = n)) : (n = k[1])
          let M = n,
            A = (0, i.A)(),
            { status: T } = (0, u.XY)(),
            [L, U] = (0, r.useState)(!1),
            N = L || null != T,
            _ = b ? "ghostActive" : "accent",
            P = C || N,
            B = b ? "menuRow" : "dialog"
          return (
            k[2] !== S || k[3] !== A || k[4] !== M || k[5] !== w
              ? ((t = () => {
                  ;(U(!0),
                    (0, h.X_)(w, S, { allowGitLab: !0 })
                      .catch(p)
                      .then((e) => {
                        if ("unavailable" === e.status)
                          return void w
                            .get(d.Id)
                            .danger(
                              A.formatMessage(
                                {
                                  id: "environmentSetup.repositoryPicker.connectProvider.unavailable",
                                  defaultMessage: "{provider} could not be loaded. Try again",
                                },
                                { provider: M },
                              ),
                              {
                                errorAnalytics: {
                                  toastId: "environmentSetup.repositoryPicker.connectGithub.unavailable",
                                },
                              },
                            )
                      })
                      .finally(() => {
                        U(!1)
                      }))
                }),
                (k[2] = S),
                (k[3] = A),
                (k[4] = M),
                (k[5] = w),
                (k[6] = t))
              : (t = k[6]),
            k[7] !== b || k[8] !== S
              ? ((v = b ? (0, o.jsx)(f.R, { connectorId: S, compact: !0 }) : null), (k[7] = b), (k[8] = S), (k[9] = v))
              : (v = k[9]),
            k[10] !== M || k[11] !== y
              ? ((x = y
                  ? (0, o.jsx)(a.A, {
                      id: "restricted.environmentSetup.repositoryPicker.reconnectAction.provider",
                      defaultMessage: "Reconnect {provider}",
                      values: { provider: M },
                    })
                  : (0, o.jsx)(a.A, {
                      id: "restricted.environmentSetup.repositoryPicker.connectAction.provider",
                      defaultMessage: "Connect {provider}",
                      values: { provider: M },
                    })),
                (k[10] = M),
                (k[11] = y),
                (k[12] = x))
              : (x = k[12]),
            k[13] !== N || k[14] !== _ || k[15] !== P || k[16] !== B || k[17] !== t || k[18] !== v || k[19] !== x
              ? ((j = (0, o.jsxs)(c.$, {
                  "aria-busy": N,
                  color: _,
                  disabled: P,
                  loading: N,
                  size: B,
                  onClick: t,
                  children: [v, x],
                })),
                (k[13] = N),
                (k[14] = _),
                (k[15] = P),
                (k[16] = B),
                (k[17] = t),
                (k[18] = v),
                (k[19] = x),
                (k[20] = j))
              : (j = k[20]),
            j
          )
        },
      },
    )
  },
  gSRh(e, n, t) {
    t.d(n, { i: () => c })
    var o = t("ABep"),
      s = t("QosV")
    let l = (0, t("ESTr").a)({
      name: "cloud-bottom-dash-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 0.808594, y: 2.474609, width: 14.383789, height: 10.486328 },
        visualBounds: { x: 0.808594, y: 2.474609, width: 14.383789, height: 10.486328 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.808594, y: 2.474609, width: 14.383789, height: 10.486328 },
        center: { x: 8.000488, y: 7.717773 },
        insets: { top: 2.474609, right: 0.807617, bottom: 3.039063, left: 0.808594 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.000488, y: 7.717773 }, foreground: { x: 8.000488, y: 7.717773 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.4424 12.4355C10.4424 12.7255 10.2069 12.9609 9.91699 12.9609H6.2832C5.99325 12.9609 5.75781 12.7255 5.75781 12.4355C5.75789 12.1457 5.9933 11.9102 6.2832 11.9102H9.91699C10.2069 11.9102 10.4423 12.1457 10.4424 12.4355Z" fill="currentColor"/> <path d="M8.00098 2.47461C10.3356 2.47477 12.2552 4.2433 12.498 6.51367C14.0247 6.75272 15.1924 8.07345 15.1924 9.66699C15.1923 10.8012 14.6004 11.797 13.7109 12.3623C13.6238 12.4177 13.5265 12.4441 13.4304 12.4441C13.1408 12.4441 12.9043 12.2093 12.9043 11.9188C12.9043 11.7453 12.9902 11.5756 13.1475 11.4756C13.7465 11.0948 14.1425 10.427 14.1426 9.66699C14.1426 8.52934 13.2547 7.59837 12.1348 7.5293C11.7809 7.50735 11.4877 7.22176 11.4727 6.85449C11.3966 5.0031 9.87127 3.52556 8.00098 3.52539C6.51052 3.52539 5.23747 4.46405 4.74414 5.78418C4.65567 6.02041 4.44768 6.18862 4.20215 6.22949C2.87258 6.45078 1.85938 7.60774 1.85938 9C1.85938 10.058 2.44398 10.9807 3.31055 11.46C3.48357 11.5558 3.58127 11.7348 3.58127 11.9194C3.58127 12.2093 3.34531 12.4437 3.05566 12.4437C2.96961 12.4437 2.88235 12.4225 2.80176 12.3779C1.61469 11.7211 0.808594 10.4551 0.808594 9C0.808594 7.1539 2.10506 5.61154 3.83691 5.23145C4.52546 3.61238 6.12901 2.47461 8.00098 2.47461Z" fill="currentColor"/>',
    })
    var r = t("h6Iv"),
      i = t("on57"),
      a = t("HOLv")
    function c(e) {
      let n,
        t,
        c = (0, s.c)(5),
        { kind: d, className: u } = e,
        m = "default" === d ? l : r.f
      return (
        c[0] !== u ? ((n = (0, i.A)("shrink-0", u)), (c[0] = u), (c[1] = n)) : (n = c[1]),
        c[2] !== m || c[3] !== n
          ? ((t = (0, o.jsx)(a.I, { asset: m, "aria-hidden": !0, focusable: "false", className: n })),
            (c[2] = m),
            (c[3] = n),
            (c[4] = t))
          : (t = c[4]),
        t
      )
    }
  },
  Jd1d(e, n, t) {
    var o = t("ABep"),
      s = t("QosV"),
      l = t("oyxz"),
      r = t("Sm6l"),
      i = t("FrrB"),
      a = t("Laxs"),
      c = t("KZOJ"),
      d = t("fUey")
    function u() {
      return (0, o.jsx)("br", {})
    }
    t.d(
      n,
      {},
      {
        P: function (e) {
          let n,
            t,
            m,
            h,
            f,
            g = (0, s.c)(23),
            {
              connectorId: p,
              connectionIcon: v,
              connectionMessage: x,
              connectionAction: j,
              disabled: k,
              reconnect: S,
              status: C,
              onRetry: y,
            } = e
          g[0] !== p ? ((n = (0, d.Pt)(p)), (g[0] = p), (g[1] = n)) : (n = g[1])
          let I = n
          if ("error" === C) {
            let e, n, s
            ;(g[2] !== I
              ? ((e = (0, o.jsx)(l.A, {
                  id: "restricted.environmentSetup.repositoryPicker.connectionError.provider",
                  defaultMessage: "{provider} connections couldn\u2019t load",
                  values: { provider: I },
                })),
                (g[2] = I),
                (g[3] = e))
              : (e = g[3]),
              (t = e),
              g[4] === Symbol.for("react.memo_cache_sentinel")
                ? ((n = (0, o.jsx)(l.A, {
                    id: "restricted.environmentSetup.repositoryPicker.retryConnection",
                    defaultMessage: "Try again",
                  })),
                  (g[4] = n))
                : (n = g[4]),
              g[5] !== k || g[6] !== y
                ? ((s = (0, o.jsx)(r.$, { color: "accent", disabled: k, onClick: y, size: "dialog", children: n })),
                  (g[5] = k),
                  (g[6] = y),
                  (g[7] = s))
                : (s = g[7]),
              (m = s))
          } else if ("disabled" === C) {
            let e
            ;(g[8] !== I
              ? ((e = (0, o.jsx)(l.A, {
                  id: "restricted.environmentSetup.repositoryPicker.blockedGuidance.provider",
                  defaultMessage:
                    "{provider} isn\u2019t enabled in this workspace<br></br>Ask a workspace admin to enable the {provider} plugin",
                  values: { provider: I, br: u },
                })),
                (g[8] = I),
                (g[9] = e))
              : (e = g[9]),
              (t = e))
          } else {
            let e
            ;((t = x),
              g[10] !== j || g[11] !== p || g[12] !== k || g[13] !== S
                ? ((e = j ?? (0, o.jsx)(a.z, { connectorId: p, disabled: k, reconnect: S })),
                  (g[10] = j),
                  (g[11] = p),
                  (g[12] = k),
                  (g[13] = S),
                  (g[14] = e))
                : (e = g[14]),
              (m = e))
          }
          return (
            g[15] !== v || g[16] !== p || g[17] !== C
              ? ((h = "connect" === C ? (v ?? (0, o.jsx)(c.R, { connectorId: p })) : void 0),
                (g[15] = v),
                (g[16] = p),
                (g[17] = C),
                (g[18] = h))
              : (h = g[18]),
            g[19] !== m || g[20] !== t || g[21] !== h
              ? ((f = (0, o.jsx)(i.A, {
                  className: "flex-1 select-none",
                  title: null,
                  description: t,
                  actions: m,
                  illustration: h,
                  illustrationSize: "icon",
                })),
                (g[19] = m),
                (g[20] = t),
                (g[21] = h),
                (g[22] = f))
              : (f = g[22]),
            f
          )
        },
      },
    )
  },
  UlP1(e, n, t) {
    var o = t("ABep"),
      s = t("QosV"),
      l = t("i5ac"),
      r = t.n(l),
      i = t("qmMi"),
      a = t("zd8w"),
      c = t("oyxz"),
      d = t("Rvvc"),
      u = t("SPnB"),
      m = t("bqtn"),
      h = t("wsIu"),
      f = t("OWtl"),
      g = t("OMIV"),
      p = t("WFY2"),
      v = t("m8VT"),
      x = t("ZuaP"),
      j = t("Laxs"),
      k = t("VPEh"),
      S = t("Jd1d"),
      C = t("rLsS"),
      y = t("fUey"),
      I = t("tz0P")
    let b = (0, i.un)(f.u, ({ get: e }) => {
      let { data: n } = e(k.G, { surface: "catalog" })
      return [
        ...new Set(e(I.lM)?.flatMap(({ repositories: e }) => e.map(({ repositoryId: e }) => (0, y.Ip)(e)))),
      ].flatMap((e) => {
        let t = n.filter((n) => n.id === e)
        if (t.some((e) => "connected" === (0, C.jh)(e).status)) return []
        let o = t.find((e) => "connect" === (0, C.jh)(e).status)
        return o ? [o] : []
      })
    })
    function w(e) {
      let n,
        t,
        l,
        g,
        j,
        w,
        U,
        N = (0, s.c)(41),
        { children: _, header: P, height: B } = e,
        R = (0, i.gh)(f.u),
        z = (0, i.Ul)(u.chatGptAuthenticatedAccountId$),
        E = (0, i.Ul)(u.chatGptAuthenticatedUserId$)
      N[0] === Symbol.for("react.memo_cache_sentinel") ? ((n = { surface: "catalog" }), (N[0] = n)) : (n = N[0])
      let { data: W, isPending: F, isError: q, refetch: D } = (0, i._U)(k.G, n),
        V = (0, i.Ul)(k.H),
        O = V?.id
      N[1] !== O ? ((t = (0, y.Pt)(O)), (N[1] = O), (N[2] = t)) : (t = N[2])
      let Q = t,
        G = null != (0, i.Ul)(I.lM),
        Y = (0, i.Ul)(b)
      N[3] !== V ? ((l = (0, C.jh)(V)), (N[3] = V), (N[4] = l)) : (l = N[4])
      let K = l,
        H = G && F && !q && "disabled" !== K.status && !K.reconnect,
        Z = q && "disabled" !== K.status ? "error" : K.status,
        J = null != z && null != E && !H && ((F && !q) || "connected" !== Z)
      if (
        (N[5] !== z || N[6] !== J || N[7] !== q || N[8] !== F || N[9] !== R || N[10] !== Z || N[11] !== E
          ? ((g = () => {
              p.v.info("cloud_picker_connection_gate", {
                safe: {
                  ...(0, x.I)(R.queryClient, ["cloud-v2-saved-configs", R.get(u.PO).authLoading ? null : z, E]),
                  blocksRows: J,
                  status: Z,
                  connectionsPending: F,
                  connectionsFailed: q,
                },
              })
            }),
            (j = [R, z, E, J, Z, F, q]),
            (N[5] = z),
            (N[6] = J),
            (N[7] = q),
            (N[8] = F),
            (N[9] = R),
            (N[10] = Z),
            (N[11] = E),
            (N[12] = g),
            (N[13] = j))
          : ((g = N[12]), (j = N[13])),
        (0, a.useEffect)(g, j),
        J && F && !q)
      ) {
        let e, n
        return (
          N[14] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, o.jsx)(v.h, {})), (N[14] = e)) : (e = N[14]),
          N[15] !== P || N[16] !== B
            ? ((n = (0, o.jsxs)(h.Y, { height: B, children: [P, e] })), (N[15] = P), (N[16] = B), (N[17] = n))
            : (n = N[17]),
          n
        )
      }
      if (J && "connected" !== Z) {
        let e
        if (
          N[18] !== V ||
          N[19] !== K.reconnect ||
          N[20] !== W ||
          N[21] !== P ||
          N[22] !== B ||
          N[23] !== Q ||
          N[24] !== D ||
          N[25] !== Z
        ) {
          let n,
            t,
            s = r()(W.filter(L), T)
          N[27] !== K.reconnect || N[28] !== Q
            ? ((n = K.reconnect
                ? (0, o.jsx)(c.A, {
                    id: "cloudEnvironmentPicker.github.reconnect.provider",
                    defaultMessage: "Reconnect {provider} to see your environments",
                    values: { provider: Q },
                  })
                : (0, o.jsx)(c.A, {
                    id: "cloudEnvironmentPicker.github.connect.provider",
                    defaultMessage: "Connect {provider} to see your environments",
                    values: { provider: Q },
                  })),
              (N[27] = K.reconnect),
              (N[28] = Q),
              (N[29] = n))
            : (n = N[29])
          let l = n
          ;(N[30] !== P || N[31] !== B
            ? ((t = null != P ? (0, o.jsx)(h.Y, { height: B, children: P }) : null),
              (N[30] = P),
              (N[31] = B),
              (N[32] = t))
            : (t = N[32]),
            (e = (0, o.jsxs)(o.Fragment, {
              children: [
                t,
                "connect" === Z
                  ? (0, o.jsxs)(m.ms.Section, {
                      children: [
                        (0, o.jsx)(m.ms.Message, {
                          compact: !0,
                          children:
                            s.length > 1
                              ? (0, o.jsx)(c.A, {
                                  id: "cloudEnvironmentPicker.repositories.connect",
                                  defaultMessage: "Connect your repository accounts to see your environments",
                                })
                              : l,
                        }),
                        (s.length > 0 ? s : [V]).map(A),
                      ],
                    })
                  : (0, o.jsx)(S.P, {
                      connectorId: V?.id ?? d.qD,
                      connectionMessage: l,
                      disabled: !1,
                      reconnect: K.reconnect,
                      status: Z,
                      onRetry: () => void D(),
                    }),
              ],
            })),
            (N[18] = V),
            (N[19] = K.reconnect),
            (N[20] = W),
            (N[21] = P),
            (N[22] = B),
            (N[23] = Q),
            (N[24] = D),
            (N[25] = Z),
            (N[26] = e))
        } else e = N[26]
        return e
      }
      return (
        N[33] !== Y || N[34] !== Z
          ? ((w = "connected" === Z && Y.map(M)), (N[33] = Y), (N[34] = Z), (N[35] = w))
          : (w = N[35]),
        N[36] !== _ || N[37] !== P || N[38] !== B || N[39] !== w
          ? ((U = (0, o.jsxs)(h.Y, {
              className: "vertical-scroll-fade-mask [--edge-fade-distance:1.5rem]",
              height: B,
              children: [P, _, w],
            })),
            (N[36] = _),
            (N[37] = P),
            (N[38] = B),
            (N[39] = w),
            (N[40] = U))
          : (U = N[40]),
        U
      )
    }
    function M(e) {
      return (0, o.jsx)(j.z, { connectorId: e.id, disabled: !1, reconnect: (0, C.jh)(e).reconnect, compact: !0 }, e.id)
    }
    function A(e) {
      return (0, o.jsx)(
        j.z,
        { connectorId: e?.id ?? d.qD, reconnect: (0, C.jh)(e).reconnect, disabled: !1, compact: !0 },
        e?.id ?? d.qD,
      )
    }
    function T(e) {
      let { id: n } = e
      return (0, y.Pt)(n)
    }
    function L(e) {
      return "connect" === (0, C.jh)(e).status
    }
    t.d(
      n,
      {},
      {
        g: function (e) {
          let n,
            t = (0, s.c)(6)
          if (!(0, i._U)(g.JW, "3620782482")) {
            let n
            return (t[0] !== e ? ((n = (0, o.jsx)(w, { ...e })), (t[0] = e), (t[1] = n)) : (n = t[1]), n)
          }
          return (
            t[2] !== e.children || t[3] !== e.header || t[4] !== e.height
              ? ((n = (0, o.jsxs)(h.Y, {
                  className: "vertical-scroll-fade-mask [--edge-fade-distance:1.5rem]",
                  height: e.height,
                  children: [e.header, e.children],
                })),
                (t[2] = e.children),
                (t[3] = e.header),
                (t[4] = e.height),
                (t[5] = n))
              : (n = t[5]),
            n
          )
        },
      },
    )
  },
  KZOJ(e, n, t) {
    t.d(n, { R: () => m })
    var o = t("ABep"),
      s = t("QosV")
    let l = (0, t("ESTr").a)({
      name: "github-logo-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.333252, y: 1.300293, width: 13.333252, height: 13.004395 },
        visualBounds: { x: 1.333252, y: 1.300293, width: 13.333252, height: 13.004395 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.333252, y: 1.300293, width: 13.333252, height: 13.004395 },
        center: { x: 7.999878, y: 7.802491 },
        insets: { top: 1.300293, right: 1.333496, bottom: 1.695312, left: 1.333252 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999878, y: 7.802491 }, foreground: { x: 7.999878, y: 7.802491 } },
      },
      capabilities: ["icon"],
      body: '<path d="M7.99992 1.30029C11.6833 1.30029 14.6666 4.28363 14.6666 7.96696C14.6662 9.36379 14.2278 10.7253 13.4131 11.86C12.5984 12.9946 11.4484 13.8452 10.1249 14.292C9.79158 14.3586 9.66658 14.1503 9.66658 13.9753C9.66658 13.7503 9.67492 13.0336 9.67492 12.142C9.67492 11.517 9.46659 11.117 9.22492 10.9086C10.7083 10.742 12.2666 10.1753 12.2666 7.61696C12.2666 6.88363 12.0083 6.29196 11.5833 5.82529C11.6499 5.65863 11.8833 4.97529 11.5166 4.05863C11.5166 4.05863 10.9583 3.87529 9.68325 4.74196C9.14992 4.59196 8.58325 4.51696 8.01659 4.51696C7.44992 4.51696 6.88325 4.59196 6.34992 4.74196C5.07492 3.88363 4.51659 4.05863 4.51659 4.05863C4.14992 4.97529 4.38325 5.65863 4.44992 5.82529C4.02492 6.29196 3.76659 6.89196 3.76659 7.61696C3.76659 10.167 5.31659 10.742 6.79992 10.9086C6.60825 11.0753 6.43325 11.367 6.37492 11.8003C5.99159 11.9753 5.03325 12.2586 4.43325 11.2503C4.30825 11.0503 3.93325 10.5586 3.40825 10.567C2.84992 10.5753 3.18325 10.8836 3.41659 11.0086C3.69992 11.167 4.02492 11.7586 4.09992 11.9503C4.23325 12.3253 4.66659 13.042 6.34159 12.7336C6.34159 13.292 6.34992 13.817 6.34992 13.9753C6.34992 14.1503 6.22492 14.3503 5.89159 14.292C4.56378 13.85 3.40886 13.0011 2.59066 11.8658C1.77246 10.7305 1.33252 9.36638 1.33325 7.96696C1.33325 4.28363 4.31659 1.30029 7.99992 1.30029Z" fill="currentColor"/>',
    })
    var r = t("on57"),
      i = t("HOLv"),
      a = t("z7xo"),
      c = t("WcS9"),
      d = t("fUey")
    let u = { [d.Lw.GitHub]: a.A, [d.Lw.GitLab]: c.A }
    function m(e) {
      let n,
        t,
        a = (0, s.c)(10),
        { connectorId: c, compact: m, className: h } = e,
        f = void 0 !== m && m,
        g = (0, d.Pt)(c)
      if (f && g === d.Lw.GitHub) {
        let e, n
        return (
          a[0] !== h ? ((e = (0, r.A)("shrink-0", h)), (a[0] = h), (a[1] = e)) : (e = a[1]),
          a[2] !== e
            ? ((n = (0, o.jsx)(i.I, { asset: l, alignment: "composite", className: e })), (a[2] = e), (a[3] = n))
            : (n = a[3]),
          n
        )
      }
      let p = u[g]
      return (
        a[4] !== h || a[5] !== f
          ? ((n = f ? (0, r.A)("icon-xs shrink-0", h) : h), (a[4] = h), (a[5] = f), (a[6] = n))
          : (n = a[6]),
        a[7] !== p || a[8] !== n
          ? ((t = (0, o.jsx)(p, { className: n })), (a[7] = p), (a[8] = n), (a[9] = t))
          : (t = a[9]),
        t
      )
    }
  },
  o2hF(e, n, t) {
    var o = t("ABep"),
      s = t("QosV"),
      l = t("KUdL"),
      r = t.n(l),
      i = t("i5ac"),
      a = t.n(i),
      c = t("qmMi"),
      d = t("VrVA"),
      u = t("zd8w"),
      m = t("v7qY"),
      h = t("Wf1j"),
      f = t("oyxz"),
      g = t("SPnB"),
      p = t("ckTT"),
      v = t("Cybu"),
      x = t("iiZm"),
      j = t("Sm6l"),
      k = t("bqtn"),
      S = t("bVeK"),
      C = t("aAWW"),
      y = t("o4oB"),
      I = t("tSEg"),
      b = t("WFY2"),
      w = t("cLiZ"),
      M = t("m8VT"),
      A = t("trJr"),
      T = t("ZuaP"),
      L = t("gSRh"),
      U = t("hlvl"),
      N = t("dDVm"),
      _ = t("tz0P")
    let P = (0, c.i1)(I.GD, (e, { get: n }) =>
      e?.repositories.every(({ repositoryId: e }) => {
        let { data: t, isPending: o } = n(N.D, e)
        return !o && "inaccessible" !== t
      }),
    )
    function B() {}
    function R(e) {
      let { id: n } = e
      return n
    }
    function z(e) {
      return e.isOwner
    }
    function E(e) {
      return e.id
    }
    function W(e) {
      let n,
        t,
        l,
        r,
        i,
        a,
        c,
        m,
        h,
        g,
        p = (0, s.c)(35),
        { ref: v, config: x, repositoryNames: j, selected: C, onSelect: y } = e,
        I = (0, u.useRef)(null)
      if (p[0] !== x.repositories || p[1] !== j) {
        let e
        ;(p[3] !== j
          ? ((e = (e) => {
              let { repositoryId: n } = e
              return j[n] ?? n
            }),
            (p[3] = j),
            (p[4] = e))
          : (e = p[4]),
          (n = x.repositories.map(e)),
          (p[0] = x.repositories),
          (p[1] = j),
          (p[2] = n))
      } else n = p[2]
      let b = n
      p[5] !== x.name || p[6] !== x.repositories[0]?.repositoryId || p[7] !== b.length || p[8] !== j
        ? ((l =
            null != (t = j[x.repositories[0]?.repositoryId ?? ""]?.split("/").at(-1)) &&
            (b.length > 1 || t.toLowerCase() !== x.name.toLowerCase())),
          (p[5] = x.name),
          (p[6] = x.repositories[0]?.repositoryId),
          (p[7] = b.length),
          (p[8] = j),
          (p[9] = t),
          (p[10] = l))
        : ((t = p[9]), (l = p[10]))
      let w = l
      ;(p[11] !== b
        ? ((r = b.length > 0 ? (0, o.jsx)(q, { labelRef: I, repositories: b }) : void 0), (p[11] = b), (p[12] = r))
        : (r = p[12]),
        p[13] !== b.length
          ? ((i = () => b.length > 1 || Array.from(I.current?.children ?? []).some(F)), (p[13] = b.length), (p[14] = i))
          : (i = p[14]))
      let M = x.id === d.ju ? "default" : "saved"
      p[15] !== M
        ? ((a = (0, o.jsx)(L.i, { kind: M, className: "opacity-75 group-hover:opacity-100 group-focus:opacity-100" })),
          (p[15] = M),
          (p[16] = a))
        : (a = p[16])
      let A = C ? S.ALZ : void 0
      return (
        p[17] !== x.name
          ? ((c = (0, o.jsx)("span", { className: "min-w-0 truncate", children: x.name })),
            (p[17] = x.name),
            (p[18] = c))
          : (c = p[18]),
        p[19] !== t || p[20] !== b.length || p[21] !== w
          ? ((m = w
              ? (0, o.jsx)("span", {
                  className: "min-w-4 flex-1 truncate text-sm text-codex-description before:content-['\\200b']",
                  children: (0, o.jsx)("span", {
                    className: "inline-block",
                    children:
                      b.length > 1
                        ? (0, o.jsx)(f.A, {
                            id: "cloudV2.savedConfigs.repositorySummary",
                            defaultMessage: "{repository} +{count}",
                            values: { repository: t, count: b.length - 1 },
                          })
                        : t,
                  }),
                })
              : null),
            (p[19] = t),
            (p[20] = b.length),
            (p[21] = w),
            (p[22] = m))
          : (m = p[22]),
        p[23] !== c || p[24] !== m
          ? ((h = (0, o.jsxs)("div", { ref: I, className: "flex min-w-0 items-center gap-1", children: [c, m] })),
            (p[23] = c),
            (p[24] = m),
            (p[25] = h))
          : (h = p[25]),
        p[26] !== x.name ||
        p[27] !== y ||
        p[28] !== v ||
        p[29] !== h ||
        p[30] !== r ||
        p[31] !== i ||
        p[32] !== a ||
        p[33] !== A
          ? ((g = (0, o.jsx)(k.ms.Item, {
              ref: v,
              "aria-label": x.name,
              tooltipTextClassName: "text-start",
              tooltipSide: "right",
              tooltipHoverDelayMs: 300,
              tooltipText: r,
              tooltipOnBeforeOpen: i,
              leftIcon: a,
              RightIcon: A,
              onSelect: y,
              children: h,
            })),
            (p[26] = x.name),
            (p[27] = y),
            (p[28] = v),
            (p[29] = h),
            (p[30] = r),
            (p[31] = i),
            (p[32] = a),
            (p[33] = A),
            (p[34] = g))
          : (g = p[34]),
        g
      )
    }
    function F(e) {
      return e.scrollWidth > e.clientWidth
    }
    function q(e) {
      let n,
        t,
        l,
        r,
        i = (0, s.c)(7),
        { labelRef: a, repositories: c } = e
      return (
        i[0] !== a
          ? ((n = () => {
              let e = a.current
              if (null == e) return
              let n = e.ownerDocument,
                t = (n) => {
                  n.target instanceof Node && n.target.contains(e) && (0, C.e)()
                }
              return (n.addEventListener("scroll", t, !0), () => n.removeEventListener("scroll", t, !0))
            }),
            (t = [a]),
            (i[0] = a),
            (i[1] = n),
            (i[2] = t))
          : ((n = i[1]), (t = i[2])),
        (0, u.useEffect)(n, t),
        i[3] !== c
          ? ((l = c.length > 0 ? (0, o.jsx)("div", { children: c.map(D) }) : null), (i[3] = c), (i[4] = l))
          : (l = i[4]),
        i[5] !== l ? ((r = (0, o.jsx)("div", { children: l })), (i[5] = l), (i[6] = r)) : (r = i[6]),
        r
      )
    }
    function D(e) {
      return (0, o.jsx)("div", { className: "truncate", children: e }, e)
    }
    t.d(
      n,
      {},
      {
        i: function (e) {
          let n,
            t,
            l,
            i,
            d,
            C,
            L,
            F,
            q,
            D = (0, s.c)(28),
            {
              searchQuery: V,
              onBeforeSelected: O,
              onSelected: Q,
              isSelectionActive: G,
              showEmptyState: Y,
              preserveLocalProject: K,
              collapsedLimit: H,
              selection: Z,
            } = e,
            J = void 0 === G || G,
            $ = void 0 === Y || Y,
            X = void 0 !== K && K,
            ee = (0, c.gh)(I.GD),
            en = (0, u.useId)(),
            et = (0, h.A)()
          D[0] !== et
            ? ((n = et.formatMessage({ id: "restricted.cloudV2.savedConfigs.retry", defaultMessage: "Retry" })),
              (D[0] = et),
              (D[1] = n))
            : (n = D[1])
          let eo = n,
            es = (0, c.Ul)(p.Sn),
            el = (0, c.Ul)(g.chatGptAuthenticatedAccountId$),
            er = (0, c.Ul)(g.chatGptAuthenticatedUserId$),
            ei = (0, c.Ul)(y.S),
            ea = (0, c._U)(null == Z ? w.y_ : null, ei),
            ec = null == Z ? ea : Z.value,
            ed = J ? ec?.id : void 0,
            eu = (0, c._U)(P, ec),
            { isFetching: em } = (0, c.Ul)(_.uM),
            { isPending: eh, isError: ef } = (0, c.Ul)(_.qL)
          D[2] !== el || D[3] !== er
            ? ((t = JSON.stringify([el, er])), (D[2] = el), (D[3] = er), (D[4] = t))
            : (t = D[4])
          let eg = t
          ;(D[5] === Symbol.for("react.memo_cache_sentinel") ? ((l = []), (D[5] = l)) : (l = D[5]),
            D[6] !== eg ? ((i = { identity: eg, ids: l }), (D[6] = eg), (D[7] = i)) : (i = D[7]))
          let [ep, ev] = (0, u.useState)(i),
            ex = (0, c.Ul)(_.lM),
            { configs: ej, isPending: ek } = (0, c.Ul)(A.m),
            eS = ef && !em,
            eC = (0, c._U)(N.$, ex),
            ey = V.trim().toLocaleLowerCase(),
            eI = (0, x.WE)(ey),
            eb = (0, c._U)(v.P5, "cloud")
          ;((0, c.Ul)(null),
            D[8] !== ej || D[9] !== es || D[10] !== J || D[11] !== ec || D[12] !== eu
              ? ((d = es ? a()([...(ej ?? []), ...(J && null != ec && eu ? [ec] : [])], "id") : ej),
                (D[8] = ej),
                (D[9] = es),
                (D[10] = J),
                (D[11] = ec),
                (D[12] = eu),
                (D[13] = d))
              : (d = D[13]))
          let ew = d,
            eM = ew
          if (null != eM && es) {
            let e, n
            ;(D[14] !== eb
              ? ((e = (e) => {
                  let n = eb.indexOf(e.id)
                  return n >= 0 ? n : 1 / 0
                }),
                (D[14] = eb),
                (D[15] = e))
              : (e = D[15]),
              D[16] !== eM || D[17] !== e ? ((n = r()(eM, e)), (D[16] = eM), (D[17] = e), (D[18] = n)) : (n = D[18]),
              (eM = n))
          }
          D[19] !== eg || D[20] !== ep.identity || D[21] !== ep.ids
            ? ((C = ep.identity === eg ? ep.ids : []),
              (D[19] = eg),
              (D[20] = ep.identity),
              (D[21] = ep.ids),
              (D[22] = C))
            : (C = D[22])
          let eA = C,
            eT = eM?.filter((e) => !eA.includes(e.id)).map(E) ?? []
          ;(ep.identity !== eg || eT.length > 0) && ev({ identity: eg, ids: [...eA, ...eT] })
          let eL =
              null == ew
                ? void 0
                : r()(eM, (e) => {
                    let n = eA.indexOf(e.id)
                    return n < 0 ? 1 / 0 : n
                  }).filter(
                    (e) =>
                      "" === ey ||
                      eI(e.name) > 0 ||
                      e.repositories.some((e) => {
                        let { repositoryId: n } = e
                        return eI(eC?.[n] ?? n) > 0
                      }),
                  ),
            [eU, eN] = (0, u.useState)(!1),
            e_ = (0, u.useRef)(null),
            eP = null != H && "" === ey,
            eB = eP
              ? a()(
                  [
                    ...r()(
                      eL?.filter((e) => eb.includes(e.id)),
                      (e) => eb.indexOf(e.id),
                    ),
                    ...(eL?.filter(z) ?? []),
                  ],
                  "id",
                ).slice(0, H)
              : [],
            eR = eP ? eL?.filter((e) => !eB.includes(e)) : void 0,
            ez = eL
          eP && (ez = eU ? eB.concat(eR ?? []) : eB)
          let eE =
              !eU && eR?.length
                ? (0, o.jsx)(k.ms.Item, {
                    LeftIcon: S.Aq_,
                    "aria-expanded": !1,
                    onSelect: (e) => {
                      ;(e.preventDefault(), (0, m.flushSync)(() => eN(!0)), e_.current?.focus())
                    },
                    children: (0, o.jsx)(f.A, { id: "composer.newTask.moreCloudEnvironments", defaultMessage: "More" }),
                  })
                : null,
            eW = (0, u.useRef)(void 0)
          ;((0, u.useEffect)(() => {
            let e = ez?.map(R)
            ;(b.v.info("cloud_picker_rows", {
              safe: {
                pickerId: en,
                ...(0, T.I)(ee.queryClient, ["cloud-v2-saved-configs", ee.get(g.PO).authLoading ? null : el, er]),
                sourceRowCount: ex?.length ?? null,
                accessibleRowCount: ej?.length ?? null,
                displayedRowCount: null != el && null != er ? (ez?.length ?? null) : 0,
                rowsChanged:
                  null != eW.current && (e?.length !== eW.current.length || e?.some((e, n) => e !== eW.current?.[n])),
                searchActive: "" !== ey,
                isFetching: em,
                isPending: eh,
                repositoryMetadataPending: ek,
                isError: ef,
              },
            }),
              (eW.current = e))
          }, [ee, en, el, er, ex, ej, ez, ey, em, eh, ek, ef]),
            D[23] !== en
              ? ((L = () => () => {
                  b.v.info("cloud_picker_rows_unmounted", { safe: { pickerId: en } })
                }),
                (F = [en]),
                (D[23] = en),
                (D[24] = L),
                (D[25] = F))
              : ((L = D[24]), (F = D[25])),
            (0, u.useEffect)(L, F))
          let eF = ez?.map((e, n) =>
              (0, o.jsx)(
                W,
                {
                  ref: eP && n === eB.length ? e_ : void 0,
                  config: e,
                  repositoryNames: eC,
                  selected: ed === e.id,
                  onSelect: () => {
                    ;(O?.(e),
                      null == Z ? (0, U.aW)(ee, e, X && ei?.type === "local" ? ei.projectId : void 0) : Z.onChange(e),
                      Q?.(e))
                  },
                },
                e.id,
              ),
            ),
            eq =
              null == el || null == er
                ? (0, o.jsx)(k.ms.Message, {
                    compact: !0,
                    children: (0, o.jsx)(f.A, {
                      id: "restricted.cloudV2.savedConfigs.signIn",
                      defaultMessage: "Sign in to load saved environments",
                    }),
                  })
                : (0, o.jsxs)(o.Fragment, {
                    children: [
                      eP ? eF?.slice(0, eB.length) : eF,
                      eE,
                      eP && eU ? eF?.slice(eB.length) : null,
                      eh && !eS ? (0, o.jsx)(M.h, {}) : null,
                      !$ || ef || eh || ex?.length !== 0
                        ? null
                        : (0, o.jsx)(k.ms.Message, {
                            className: "select-none",
                            compact: !0,
                            children: (0, o.jsx)(f.A, {
                              id: "restricted.cloudV2.savedConfigs.picker.empty",
                              defaultMessage: "No published environments",
                            }),
                          }),
                      $ &&
                      !ef &&
                      !eh &&
                      ("" !== ey || ew?.length === 0) &&
                      null != ex &&
                      ex.length > 0 &&
                      ez?.length === 0
                        ? (0, o.jsx)(k.ms.Message, {
                            className: "select-none",
                            compact: !0,
                            children: (0, o.jsx)(f.A, {
                              id: "restricted.cloudV2.savedConfigs.noMatches",
                              defaultMessage: "No published environments",
                            }),
                          })
                        : null,
                      eS
                        ? (0, o.jsxs)(k.ms.Message, {
                            className: "flex items-center gap-2 select-none",
                            compact: !0,
                            children: [
                              (0, o.jsx)("span", {
                                className: "min-w-0 flex-1 truncate",
                                children: (0, o.jsx)(f.A, {
                                  id: "restricted.cloudV2.savedConfigs.picker.error",
                                  defaultMessage: "Couldn\u2019t load environments",
                                }),
                              }),
                              (0, o.jsx)(k.ms.Item, {
                                asChild: !0,
                                disabled: em,
                                tooltipText: eo,
                                variant: "unstyled",
                                onSelect: (e) => {
                                  ;(e.preventDefault(), (0, _.Nb)(ee, { force: !0 }).catch(B))
                                },
                                children: (0, o.jsx)(j.$, {
                                  "aria-label": eo,
                                  color: "ghost",
                                  size: "iconCircleSm",
                                  disabled: em,
                                  children: (0, o.jsx)(S._7Q, {}),
                                }),
                              }),
                            ],
                          })
                        : null,
                    ],
                  })
          return (
            D[26] !== eq ? ((q = (0, o.jsx)(o.Fragment, { children: eq })), (D[26] = eq), (D[27] = q)) : (q = D[27]),
            q
          )
        },
      },
    )
  },
  m8VT(e, n, t) {
    var o = t("ABep"),
      s = t("QosV"),
      l = t("oyxz"),
      r = t("bqtn"),
      i = t("RNul")
    t.d(
      n,
      {},
      {
        h: function () {
          let e,
            n,
            t = (0, s.c)(2)
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, o.jsx)(i.y, { className: "icon-xxs" })), (t[0] = e))
              : (e = t[0]),
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((n = (0, o.jsxs)(r.ms.Message, {
                  className: "relative",
                  compact: !0,
                  centered: !0,
                  role: "status",
                  children: [
                    e,
                    (0, o.jsx)("span", {
                      className: "sr-only",
                      children: (0, o.jsx)(l.A, {
                        id: "environmentPicker.loading",
                        defaultMessage: "Loading locations\u2026",
                      }),
                    }),
                  ],
                })),
                (t[1] = n))
              : (n = t[1]),
            n
          )
        },
      },
    )
  },
  YYX4(e, n, t) {
    var o = t("KUdL"),
      s = t.n(o),
      l = t("iiZm")
    function r(e) {
      let n = e.trim(),
        t = n.normalize("NFC"),
        o = (0, l.WE)(n),
        s = t === n ? o : (0, l.WE)(t)
      return function (e) {
        if (null == e) return 0
        let l = o(e)
        if (l > 0) return l
        let r = e.normalize("NFC")
        return r === e && t === n ? 0 : s(r)
      }
    }
    t.d(
      n,
      {},
      {
        V: function (e, n, t) {
          let o = n.trim()
          if (0 === o.length) return e
          let l = r(o)
          return s()(
            e.map((e) => ({ project: e, score: Math.max(...t(e).map(l)) })).filter(({ score: e }) => e > 0),
            ({ score: e }) => -e,
          ).map(({ project: e }) => e)
        },
        q: r,
      },
    )
  },
  wsIu(e, n, t) {
    var o = t("ABep"),
      s = t("QosV"),
      l = t("qmMi"),
      r = t("bqtn"),
      i = t("a8ri")
    t.d(
      n,
      {},
      {
        Y: function (e) {
          let n,
            t,
            a = (0, s.c)(5),
            { children: c, className: d, height: u, onScrollCapture: m } = e,
            h = void 0 === u ? "max" : u,
            f = (0, l.Ul)("unbounded" !== h && i.l)
          return (
            "fixed" === h
              ? (n = f ? "seven-rows" : "five-rows")
              : "max" === h && (n = f ? "up-to-seven-rows" : "up-to-five-rows"),
            a[0] !== c || a[1] !== d || a[2] !== m || a[3] !== n
              ? ((t = (0, o.jsx)(r.ms.Section, { className: d, size: n, onScrollCapture: m, children: c })),
                (a[0] = c),
                (a[1] = d),
                (a[2] = m),
                (a[3] = n),
                (a[4] = t))
              : (t = a[4]),
            t
          )
        },
      },
    )
  },
}
//# sourceMappingURL=210038.7eead78b28.js.map
