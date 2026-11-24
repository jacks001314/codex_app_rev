export const __rspack_esm_ids = [716164]
export const __webpack_modules__ = {
  nBWL(e, t, a) {
    a.d(t, { x: () => en })
    var s = a("ABep"),
      i = a("QosV"),
      n = a("slpy"),
      o = a("eis6"),
      l = a("T0Rc"),
      r = a("dMO9"),
      c = a.n(r),
      d = a("i5ac"),
      u = a.n(d),
      g = a("qmMi"),
      m = a("zd8w"),
      p = a("oyxz"),
      h = a("Wf1j"),
      f = a("Qgfj"),
      x = a("Kwur"),
      v = a("Sm6l"),
      y = a("JNtf"),
      b = a("bqtn"),
      _ = a("HOLv"),
      j = a("bVeK"),
      C = a("RNul"),
      w = a("SGsN"),
      k = a("Jqpj"),
      z = a("OWtl"),
      A = a("hZax"),
      M = a("aepO"),
      N = a("rvFo"),
      T = a("wwvo"),
      P = a("lcic"),
      S = a("yLkT"),
      G = a("Ywss"),
      I = a("eFn4"),
      L = a("UOa8"),
      D = a("OAko"),
      U = a("MM0V"),
      E = a("Bbed"),
      q = a("X6Vn"),
      O = a("jaeI"),
      F = a("JYRT"),
      B = a("DY7H"),
      R = a("bMrQ"),
      W = a("gNqU"),
      K = a("g2DC"),
      Y = a("hfkq"),
      Z = a("slBk")
    let J = (0, E._)(
      async () => (await Promise.all([a.e(312708), a.e(57588)]).then(a.bind(a, "uC11"))).GptPluginMigrationDialog,
    )
    function $(e) {
      let t,
        a,
        n = (0, i.c)(14),
        { resource: o, onClose: l, onStartChat: r } = e,
        c = (0, A.Zj)("2160578039")
      n[0] !== o.gizmo.id || n[1] !== o.gizmo.migrated_plugin_id
        ? ((t = { gizmoId: o.gizmo.id, pluginId: o.gizmo.migrated_plugin_id }),
          (n[0] = o.gizmo.id),
          (n[1] = o.gizmo.migrated_plugin_id),
          (n[2] = t))
        : (t = n[2])
      let d = (0, g._U)(Y.f, t),
        u = c && !d && "gpt" === o.gizmo.gizmo_type ? o.gizmo.migrated_plugin_id : null
      if (null != u) {
        let e
        return (
          n[3] !== l || n[4] !== r || n[5] !== u || n[6] !== o
            ? ((e = (0, s.jsx)(V, { resource: o, pluginId: u, onClose: l, onStartChat: r })),
              (n[3] = l),
              (n[4] = r),
              (n[5] = u),
              (n[6] = o),
              (n[7] = e))
            : (e = n[7]),
          e
        )
      }
      return 0 !== o.gizmo.live_version || d
        ? (n[8] !== c || n[9] !== l || n[10] !== r || n[11] !== d || n[12] !== o
            ? ((a = c
                ? (0, s.jsx)(H, { resource: o, remigration: d, onClose: l, onStartChat: r })
                : (0, s.jsx)(Q, { onClick: () => r(o) })),
              (n[8] = c),
              (n[9] = l),
              (n[10] = r),
              (n[11] = d),
              (n[12] = o),
              (n[13] = a))
            : (a = n[13]),
          a)
        : null
    }
    function V(e) {
      let t,
        a,
        n,
        o,
        l,
        r,
        c,
        d,
        u,
        m,
        h,
        f,
        x = (0, i.c)(41),
        { resource: y, pluginId: b, onClose: j, onStartChat: C } = e,
        w = (0, g.gh)(z.u),
        k = (0, G.Zp)(),
        { data: A, isPending: M, isFetching: N, isError: T, refetch: P } = (0, g._U)(R.B, b),
        I = M || N,
        L = null != A && !I && !T
      x[0] !== y.gizmo.display.name
        ? ((t = y.gizmo.display.name.trim()), (x[0] = y.gizmo.display.name), (x[1] = t))
        : (t = x[1])
      let D = t
      if (T && !I) {
        let e
        ;(x[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(p.A, {
              id: "chatgptConversations.gpts.about.retryPluginAccess",
              defaultMessage: "Try again",
            })),
            (x[2] = e))
          : (e = x[2]),
          (a = e))
      } else if (A?.type === "admin") {
        let e
        ;(x[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(p.A, {
              id: "chatgptConversations.gpts.migration.viewPlugin",
              defaultMessage: "View Plugin",
            })),
            (x[3] = e))
          : (e = x[3]),
          (a = e))
      } else if (I || L) {
        let e
        ;(x[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(p.A, { id: "chatgptConversations.gpts.about.usePlugin", defaultMessage: "Use plugin" })),
            (x[4] = e))
          : (e = x[4]),
          (a = e))
      } else {
        let e
        ;(x[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(p.A, {
              id: "chatgptConversations.gpts.about.explorePlugins",
              defaultMessage: "Explore plugins",
            })),
            (x[5] = e))
          : (e = x[5]),
          (a = e))
      }
      if (T) {
        let e
        ;(x[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(p.A, {
              id: "chatgptConversations.gpts.about.pluginAccessError",
              defaultMessage: "We couldn\u2019t check your access to this plugin. Try again.",
            })),
            (x[6] = e))
          : (e = x[6]),
          (n = e))
      } else if (I || L)
        if (A?.type === "admin") {
          let e
          ;(x[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(p.A, {
                id: "chatgptConversations.gpts.about.migratedAdminDescription",
                defaultMessage: "This GPT has been migrated. You can view the plugin in workspace admin settings",
              })),
              (x[8] = e))
            : (e = x[8]),
            (n = e))
        } else if (D) {
          let e
          ;(x[9] !== D
            ? ((e = (0, s.jsx)(p.A, {
                id: "chatgptConversations.gpts.about.migratedDescriptionNamed",
                defaultMessage: "This GPT has been migrated. Use the plugin to continue using {gptName}.",
                values: { gptName: D },
              })),
              (x[9] = D),
              (x[10] = e))
            : (e = x[10]),
            (n = e))
        } else {
          let e
          ;(x[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(p.A, {
                id: "chatgptConversations.gpts.about.migratedDescription",
                defaultMessage: "This GPT has been migrated. Use the plugin to continue using it.",
              })),
              (x[11] = e))
            : (e = x[11]),
            (n = e))
        }
      else {
        let e
        ;(x[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(p.A, {
              id: "chatgptConversations.gpts.about.pluginAccessDenied",
              defaultMessage: "This plugin isn\u2019t available to you",
            })),
            (x[7] = e))
          : (e = x[7]),
          (n = e))
      }
      return (
        x[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, s.jsx)(_.I, { asset: S.k, className: "text-secondary" })), (x[12] = o))
          : (o = x[12]),
        x[13] !== D
          ? ((l = D
              ? (0, s.jsx)(p.A, {
                  id: "chatgptConversations.gpts.about.migratedNamedTitle",
                  defaultMessage: "{gptName} is now a plugin",
                  values: { gptName: D },
                })
              : (0, s.jsx)(p.A, {
                  id: "chatgptConversations.gpts.about.migratedTitle",
                  defaultMessage: "This GPT is now a plugin",
                })),
            (x[13] = D),
            (x[14] = l))
          : (l = x[14]),
        x[15] !== n || x[16] !== l
          ? ((r = (0, s.jsx)(U.l, { variant: "catalog", icon: o, title: l, content: n })),
            (x[15] = n),
            (x[16] = l),
            (x[17] = r))
          : (r = x[17]),
        x[18] !== L ||
        x[19] !== A ||
        x[20] !== T ||
        x[21] !== k ||
        x[22] !== j ||
        x[23] !== b ||
        x[24] !== P ||
        x[25] !== w
          ? ((c = () => {
              T ? P() : (j(), L ? (0, R.y)(w, b, A, k) : k("/plugins"))
            }),
            (x[18] = L),
            (x[19] = A),
            (x[20] = T),
            (x[21] = k),
            (x[22] = j),
            (x[23] = b),
            (x[24] = P),
            (x[25] = w),
            (x[26] = c))
          : (c = x[26]),
        x[27] !== I || x[28] !== a || x[29] !== c
          ? ((d = (0, s.jsx)(v.$, {
              className: "w-full",
              color: "primary",
              loading: I,
              size: "promotionalAction",
              onClick: c,
              children: a,
            })),
            (x[27] = I),
            (x[28] = a),
            (x[29] = c),
            (x[30] = d))
          : (d = x[30]),
        x[31] !== C || x[32] !== y ? ((u = () => C(y)), (x[31] = C), (x[32] = y), (x[33] = u)) : (u = x[33]),
        x[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, s.jsx)(p.A, {
              id: "chatgptConversations.gpts.about.keepUsingGpt",
              defaultMessage: "Keep using GPT",
            })),
            (x[34] = m))
          : (m = x[34]),
        x[35] !== u
          ? ((h = (0, s.jsx)(v.$, {
              className: "w-full",
              color: "ghostSecondary",
              size: "promotionalLink",
              onClick: u,
              children: m,
            })),
            (x[35] = u),
            (x[36] = h))
          : (h = x[36]),
        x[37] !== r || x[38] !== d || x[39] !== h
          ? ((f = (0, s.jsxs)("div", { className: "flex flex-col gap-2", children: [r, d, h] })),
            (x[37] = r),
            (x[38] = d),
            (x[39] = h),
            (x[40] = f))
          : (f = x[40]),
        f
      )
    }
    function H(e) {
      let t,
        a,
        o,
        l,
        r,
        c,
        d,
        u,
        m,
        f,
        x,
        y,
        b,
        j = (0, i.c)(49),
        { resource: C, remigration: w, onClose: k, onStartChat: M } = e,
        N = (0, g.gh)(z.u),
        T = (0, G.Zp)(),
        P = (0, h.A)(),
        E = (0, A.Fj)("2513446768")
      j[0] !== E || j[1] !== P
        ? ((t = P.formatDate((0, Z.l)(E.get("retirement_date", "")), {
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })),
          (j[0] = E),
          (j[1] = P),
          (j[2] = t))
        : (t = j[2])
      let R = t,
        { accountId: Y, userId: $ } = (0, L.As)()
      j[3] === Symbol.for("react.memo_cache_sentinel") ? ((a = { preview: !1 }), (j[3] = a)) : (a = j[3])
      let { data: V } = (0, D.YL)(void 0, a),
        H = (0, g._U)(F.X, "2562735250")?.get("enabled", !1) === !0,
        X = (0, O.l)(V, (0, A.Zj)("1355972088")),
        ee = (0, A.Fj)("2826703856").get("enable_gpt_fe_controls", !1),
        {
          data: et,
          isPending: ea,
          isError: es,
        } = (0, g._U)(I.Jk, Y ?? "", { enabled: null != Y && V?.id === Y && "workspace" === V.structure && (X || ee) })
      if (
        H &&
        X &&
        !es &&
        (0, B.rP)({
          resource: C,
          remigration: w,
          account: V,
          accountId: Y,
          permissions: et?.permissions,
          rbacEnabled: X,
        })
      ) {
        let e, t
        return (
          j[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, s.jsx)(W.E_, { surface: "gpt" })), (j[4] = e))
            : (e = j[4]),
          j[5] !== M || j[6] !== C
            ? ((t = (0, s.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [e, (0, s.jsx)(Q, { onClick: () => M(C) })],
              })),
              (j[5] = M),
              (j[6] = C),
              (j[7] = t))
            : (t = j[7]),
          t
        )
      }
      if (!H || !(0, B.l5)({ resource: C, remigration: w, account: V, accountId: Y, userId: $, enabled: !0 })) {
        let e, t, a
        return (
          j[8] !== T || j[9] !== k
            ? ((e = (0, s.jsx)(W.Xn, {
                currentGpt: !0,
                openTarget: "external-browser",
                onExplore: () => {
                  ;(k(), T("/plugins"))
                },
              })),
              (j[8] = T),
              (j[9] = k),
              (j[10] = e))
            : (e = j[10]),
          j[11] !== M || j[12] !== C
            ? ((t = (0, s.jsx)(Q, { onClick: () => M(C) })), (j[11] = M), (j[12] = C), (j[13] = t))
            : (t = j[13]),
          j[14] !== e || j[15] !== t
            ? ((a = (0, s.jsxs)("div", { className: "flex flex-col gap-2", children: [e, t] })),
              (j[14] = e),
              (j[15] = t),
              (j[16] = a))
            : (a = j[16]),
          a
        )
      }
      let ei = (0, B.T8)({ account: V, rbacEnabled: ee, permissions: et?.permissions, isPending: ea, isError: es }),
        en = (0, B.l2)({
          resource: C,
          remigration: w,
          account: V,
          accountId: Y,
          userId: $,
          enabled: !0,
          gptPermission: ei,
        }),
        eo = (0, O.J)(V, X, et?.permissions)
      if ("allowed" !== ei) {
        let e
        ;(j[17] !== ei ? ((e = (0, s.jsx)(K.M, { permission: ei })), (j[17] = ei), (j[18] = e)) : (e = j[18]), (o = e))
      } else if (!eo) {
        let e
        ;(j[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, s.jsx)(p.A, {
              id: "chatgptConversations.gpts.migration.permissionRequired",
              defaultMessage: "Your workspace must allow you to use plugins to migrate this GPT",
            })),
            (j[19] = e))
          : (e = j[19]),
          (o = e))
      }
      ;(j[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = (0, s.jsx)(_.I, { asset: S.k, className: "text-secondary" })), (j[20] = l))
        : (l = j[20]),
        j[21] !== R
          ? ((r = (0, s.jsx)(p.A, {
              id: "chatgptConversations.gpts.about.migrateTitle",
              defaultMessage: "Migrate this GPT to a plugin by {deadline}",
              values: { deadline: R },
            })),
            (j[21] = R),
            (j[22] = r))
          : (r = j[22]),
        j[23] !== R
          ? ((c = (0, s.jsx)(p.A, {
              id: "chatgptConversations.gpts.about.migrateDescription.editingLocked",
              defaultMessage:
                "Migrate to a plugin so people can keep using it after {deadline}. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.",
              values: { deadline: R },
            })),
            (j[23] = R),
            (j[24] = c))
          : (c = j[24]),
        j[25] !== r || j[26] !== c
          ? ((d = (0, s.jsx)(U.l, { variant: "announcement", icon: l, title: r, content: c })),
            (j[25] = r),
            (j[26] = c),
            (j[27] = d))
          : (d = j[27]))
      let el = !eo || !en
      return (
        j[28] !== en || j[29] !== eo || j[30] !== k || j[31] !== w || j[32] !== C || j[33] !== N
          ? ((u = () => {
              en && eo && (k(), (0, q.qf)(N, J, { resource: C, remigration: w }))
            }),
            (j[28] = en),
            (j[29] = eo),
            (j[30] = k),
            (j[31] = w),
            (j[32] = C),
            (j[33] = N),
            (j[34] = u))
          : (u = j[34]),
        j[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, s.jsx)(p.A, {
              id: "chatgptConversations.gpts.migration.migrate",
              defaultMessage: "Migrate to plugin",
            })),
            (j[35] = m))
          : (m = j[35]),
        j[36] !== el || j[37] !== u
          ? ((f = (0, s.jsx)(v.$, {
              className: "w-full",
              "aria-disabled": el,
              color: "primary",
              size: "detailAction",
              onClick: u,
              children: m,
            })),
            (j[36] = el),
            (j[37] = u),
            (j[38] = f))
          : (f = j[38]),
        j[39] !== o || j[40] !== f
          ? ((x = (0, s.jsx)(n.m, { content: o, children: f })), (j[39] = o), (j[40] = f), (j[41] = x))
          : (x = j[41]),
        j[42] !== M || j[43] !== C
          ? ((y = (0, s.jsx)(Q, { secondary: !0, onClick: () => M(C) })), (j[42] = M), (j[43] = C), (j[44] = y))
          : (y = j[44]),
        j[45] !== x || j[46] !== y || j[47] !== d
          ? ((b = (0, s.jsxs)("div", { className: "flex flex-col gap-2", children: [d, x, y] })),
            (j[45] = x),
            (j[46] = y),
            (j[47] = d),
            (j[48] = b))
          : (b = j[48]),
        b
      )
    }
    function Q(e) {
      let t,
        a,
        n = (0, i.c)(8),
        { secondary: o, onClick: l } = e,
        r = void 0 !== o && o,
        c = r ? "self-center" : "h-12 w-full justify-center",
        d = r ? "ghostSecondary" : "primary",
        u = r ? "dialogGhost" : "large"
      return (
        n[0] !== r
          ? ((t = r
              ? (0, s.jsx)("span", {
                  className: "underline decoration-from-font underline-offset-2",
                  children: (0, s.jsx)(p.A, {
                    id: "chatgptConversations.gpts.about.startChatLink",
                    defaultMessage: "Start chat",
                  }),
                })
              : (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(j.VhP, {}),
                    (0, s.jsx)(p.A, { id: "chatgptConversations.gpts.about.startChat", defaultMessage: "Start Chat" }),
                  ],
                })),
            (n[0] = r),
            (n[1] = t))
          : (t = n[1]),
        n[2] !== l || n[3] !== c || n[4] !== d || n[5] !== u || n[6] !== t
          ? ((a = (0, s.jsx)(v.$, { className: c, color: d, radius: "full", size: u, onClick: l, children: t })),
            (n[2] = l),
            (n[3] = c),
            (n[4] = d),
            (n[5] = u),
            (n[6] = t),
            (n[7] = a))
          : (a = n[7]),
        a
      )
    }
    function X(e) {
      let t,
        a,
        n,
        o,
        r,
        c = (0, i.c)(12),
        { accountId: d, gizmoId: u } = e
      ;(c[0] !== d || c[1] !== u
        ? ((t = ["chatgpt-gizmos", "about", d, u]), (c[0] = d), (c[1] = u), (c[2] = t))
        : (t = c[2]),
        c[3] !== u
          ? ((a = (e) => {
              let { signal: t } = e
              return x.Request.safeGet("/gizmos/{gizmo_id}/about", { parameters: { path: { gizmo_id: u } }, signal: t })
            }),
            (c[3] = u),
            (c[4] = a))
          : (a = c[4]),
        c[5] !== t || c[6] !== a
          ? ((n = { queryKey: t, queryFn: a, staleTime: N.D.ONE_MINUTE }), (c[5] = t), (c[6] = a), (c[7] = n))
          : (n = c[7]))
      let { data: g } = (0, l.I)(n)
      return null == g || 0 === g.about_blocks.length
        ? null
        : (c[8] !== g.about_blocks ? ((o = g.about_blocks.map(ee)), (c[8] = g.about_blocks), (c[9] = o)) : (o = c[9]),
          c[10] !== o
            ? ((r = (0, s.jsx)("div", { className: "mt-4 flex flex-wrap justify-center gap-6", children: o })),
              (c[10] = o),
              (c[11] = r))
            : (r = c[11]),
          r)
    }
    function ee(e) {
      return (0, s.jsx)(et, { block: e }, e.type)
    }
    function et(e) {
      let t,
        a,
        n,
        o,
        l,
        r = (0, i.c)(17),
        { block: c } = e
      switch (c.type) {
        case "generic_title_subtitle":
          ;((t = c.title), (a = c.subtitle))
          break
        case "rating": {
          let e, i
          ;(r[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, s.jsx)(j.DYF, {})), (r[0] = e)) : (e = r[0]),
            r[1] !== c.avg
              ? ((i = (0, s.jsxs)(s.Fragment, { children: [e, c.avg] })), (r[1] = c.avg), (r[2] = i))
              : (i = r[2]),
            (t = i),
            (a = c.count_str))
          break
        }
        case "category": {
          let e, i
          ;(r[3] !== c.category_ranking || r[4] !== c.category_str
            ? ((e =
                null == c.category_ranking
                  ? c.category_str
                  : (0, s.jsx)(p.A, {
                      id: "chatgptConversations.gpts.about.categoryRank",
                      defaultMessage: "#{rank}",
                      values: { rank: c.category_ranking },
                    })),
              (r[3] = c.category_ranking),
              (r[4] = c.category_str),
              (r[5] = e))
            : (e = r[5]),
            (t = e),
            r[6] !== c.category_locale_str || r[7] !== c.category_ranking || r[8] !== c.category_str
              ? ((i =
                  null == c.category_ranking
                    ? (0, s.jsx)(p.A, { id: "chatgptConversations.gpts.about.category", defaultMessage: "Category" })
                    : (0, s.jsx)(p.A, {
                        id: "chatgptConversations.gpts.about.rankedCategory",
                        defaultMessage: "in {category} {locale}",
                        values: { category: c.category_str, locale: c.category_locale_str ?? "" },
                      })),
                (r[6] = c.category_locale_str),
                (r[7] = c.category_ranking),
                (r[8] = c.category_str),
                (r[9] = i))
              : (i = r[9]),
            (a = i))
          break
        }
        case void 0:
          return null
      }
      return (
        r[10] !== t
          ? ((n = (0, s.jsx)("div", { className: "flex items-center gap-2 heading-md text-default", children: t })),
            (r[10] = t),
            (r[11] = n))
          : (n = r[11]),
        r[12] !== a
          ? ((o = (0, s.jsx)("div", { className: "text-xs text-secondary", children: a })), (r[12] = a), (r[13] = o))
          : (o = r[13]),
        r[14] !== n || r[15] !== o
          ? ((l = (0, s.jsxs)("div", { className: "flex flex-col items-center gap-2 text-center", children: [n, o] })),
            (r[14] = n),
            (r[15] = o),
            (r[16] = l))
          : (l = r[16]),
        l
      )
    }
    var ea = a("E4rW"),
      es = a("H7Nt"),
      ei = a("T4c2")
    function en(e) {
      let t,
        a = (0, i.c)(14),
        { accountId: n, gizmo: o, isOwnerAndWorkspaceAllowsSpecific: l, onClose: r, onStartChat: c } = e,
        d = (0, A.Zj)("2160578039"),
        u = null
      "string" == typeof o ? (u = o) : d && (u = o.gizmo.id)
      let { data: m, isError: h, refetch: f } = (0, g._U)(T.os, u),
        x = m ?? ("string" == typeof o ? void 0 : o)
      if (null == x) {
        let e, t, i
        return (
          a[0] !== r
            ? ((e = (e) => {
                e || r()
              }),
              (a[0] = r),
              (a[1] = e))
            : (e = a[1]),
          a[2] !== h || a[3] !== f
            ? ((t = (0, s.jsx)("div", {
                className:
                  "flex h-full min-h-80 flex-col items-center justify-center gap-4 bg-surface-secondary p-8 text-center",
                children: h
                  ? (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(y.L3, {
                          className: "heading-lg font-semibold text-default",
                          children: (0, s.jsx)(p.A, {
                            id: "chatgptConversations.gpts.about.loadError",
                            defaultMessage: "Couldn't load this GPT",
                          }),
                        }),
                        (0, s.jsx)(y.rr, {
                          className: "text-secondary",
                          children: (0, s.jsx)(p.A, {
                            id: "chatgptConversations.gpts.about.loadErrorDescription",
                            defaultMessage: "Check your connection and try again.",
                          }),
                        }),
                        (0, s.jsx)(v.$, {
                          color: "secondary",
                          onClick: () => {
                            f()
                          },
                          children: (0, s.jsx)(p.A, {
                            id: "chatgptConversations.gpts.about.retry",
                            defaultMessage: "Try again",
                          }),
                        }),
                      ],
                    })
                  : (0, s.jsxs)(s.Fragment, {
                      children: [
                        (0, s.jsx)(y.L3, {
                          className: "sr-only",
                          children: (0, s.jsx)(p.A, {
                            id: "chatgptConversations.gpts.about.loading",
                            defaultMessage: "Loading GPT details",
                          }),
                        }),
                        (0, s.jsx)(y.rr, {
                          className: "sr-only",
                          children: (0, s.jsx)(p.A, {
                            id: "chatgptConversations.gpts.about.loadingDescription",
                            defaultMessage: "Loading information about this GPT",
                          }),
                        }),
                        (0, s.jsx)(C.y, {}),
                      ],
                    }),
              })),
              (a[2] = h),
              (a[3] = f),
              (a[4] = t))
            : (t = a[4]),
          a[5] !== e || a[6] !== t
            ? ((i = (0, s.jsx)(y.lG, {
                open: !0,
                contentClassName: "flex flex-col",
                size: "editor",
                variant: "chatgpt",
                onOpenChange: e,
                children: t,
              })),
              (a[5] = e),
              (a[6] = t),
              (a[7] = i))
            : (i = a[7]),
          i
        )
      }
      return (
        a[8] !== n || a[9] !== l || a[10] !== r || a[11] !== c || a[12] !== x
          ? ((t = (0, s.jsx)(eo, {
              accountId: n,
              isOwnerAndWorkspaceAllowsSpecific: l,
              resource: x,
              onClose: r,
              onStartChat: c,
            })),
            (a[8] = n),
            (a[9] = l),
            (a[10] = r),
            (a[11] = c),
            (a[12] = x),
            (a[13] = t))
          : (t = a[13]),
        t
      )
    }
    function eo(e) {
      let t,
        a,
        r,
        d,
        f,
        C,
        k,
        S,
        G,
        I,
        L,
        D,
        U,
        E,
        q,
        O,
        F,
        B,
        R,
        W,
        K,
        Z,
        J,
        V,
        H,
        Q,
        ee,
        et,
        en,
        eo = (0, i.c)(145),
        { accountId: eu, isOwnerAndWorkspaceAllowsSpecific: eg, resource: em, onClose: ep, onStartChat: eh } = e,
        ef = (0, g.gh)(z.u),
        ex = (0, h.A)(),
        ev = (0, A.Zj)("1825130190"),
        ey = (0, A.Zj)("2160578039")
      eo[0] !== em.gizmo.id || eo[1] !== em.gizmo.migrated_plugin_id
        ? ((t = { gizmoId: em.gizmo.id, pluginId: em.gizmo.migrated_plugin_id }),
          (eo[0] = em.gizmo.id),
          (eo[1] = em.gizmo.migrated_plugin_id),
          (eo[2] = t))
        : (t = eo[2])
      let eb = !(0, g._U)(Y.f, t) && ey && "gpt" === em.gizmo.gizmo_type && null != em.gizmo.migrated_plugin_id,
        [e_, ej] = (0, m.useState)(!1),
        [eC, ew] = (0, m.useState)(!1),
        { data: ek } = (0, g.Ul)(T.kd),
        ez = !eb
      ;(eo[3] !== em.gizmo.author.user_id
        ? ((a = () =>
            x.Request.safeGet("/gizmo_creators/{uid}/gizmos", {
              parameters: { path: { uid: em.gizmo.author.user_id } },
            })),
          (eo[3] = em.gizmo.author.user_id),
          (eo[4] = a))
        : (a = eo[4]),
        eo[5] !== eu || eo[6] !== em.gizmo.author.user_id
          ? ((r = (0, ei.NY)(eu, em.gizmo.author.user_id)),
            (eo[5] = eu),
            (eo[6] = em.gizmo.author.user_id),
            (eo[7] = r))
          : (r = eo[7]),
        eo[8] !== ez || eo[9] !== a || eo[10] !== r
          ? ((d = { enabled: ez, queryFn: a, queryKey: r, staleTime: N.D.ONE_MINUTE }),
            (eo[8] = ez),
            (eo[9] = a),
            (eo[10] = r),
            (eo[11] = d))
          : (d = eo[11]))
      let { data: eA, isPending: eM } = (0, l.I)(d)
      eo[12] !== ex
        ? ((f = ex.formatMessage({ id: "chatgptConversations.gpts.about.actions", defaultMessage: "GPT actions" })),
          (eo[12] = ex),
          (eo[13] = f))
        : (f = eo[13])
      let eN = f
      eo[14] !== em.gizmo.display.name || eo[15] !== em.gizmo.id
        ? ((C = em.gizmo.display.name.trim() || em.gizmo.id),
          (eo[14] = em.gizmo.display.name),
          (eo[15] = em.gizmo.id),
          (eo[16] = C))
        : (C = eo[16])
      let eT = C
      eo[17] !== em.gizmo.author.display_name
        ? ((k = em.gizmo.author.display_name?.trim() || void 0), (eo[17] = em.gizmo.author.display_name), (eo[18] = k))
        : (k = eo[18])
      let eP = k
      eo[19] !== ek || eo[20] !== em.gizmo.id
        ? ((S = ek?.some((e) => {
            let { item: t } = e
            return t.gizmo.id === em.gizmo.id
          })),
          (eo[19] = ek),
          (eo[20] = em.gizmo.id),
          (eo[21] = S))
        : (S = eo[21])
      let eS = S
      if (
        eo[22] !== eu ||
        eo[23] !== eN ||
        eo[24] !== e_ ||
        eo[25] !== eP ||
        eo[26] !== eA?.items ||
        eo[27] !== eA?.items.filter ||
        eo[28] !== ex ||
        eo[29] !== eM ||
        eo[30] !== eb ||
        eo[31] !== eg ||
        eo[32] !== eS ||
        eo[33] !== eC ||
        eo[34] !== eT ||
        eo[35] !== ep ||
        eo[36] !== eh ||
        eo[37] !== em ||
        eo[38] !== ev ||
        eo[39] !== ef
      ) {
        let e = u()(c()(em.tools.map(ed)), er),
          t = eA?.items.filter((e) => {
            let { gizmo: t } = e
            return "snorlax" !== t.gizmo_type && null == (0, ea.m)(t.tags, eg)
          }),
          a = t?.[0]?.gizmo.author.display_name?.trim() || eP
        if (
          eo[56] !== eu ||
          eo[57] !== eN ||
          eo[58] !== e_ ||
          eo[59] !== eP ||
          eo[60] !== ex ||
          eo[61] !== eb ||
          eo[62] !== eS ||
          eo[63] !== eC ||
          eo[64] !== eT ||
          eo[65] !== ep ||
          eo[66] !== eh ||
          eo[67] !== em ||
          eo[68] !== ev ||
          eo[69] !== ef
        ) {
          let e,
            t,
            a,
            i,
            l,
            r = em.gizmo.display.prompt_starters?.slice(0, 4)
          ;((G = y.lG),
            (B = !0),
            (R = "flex max-h-full flex-col"),
            eo[83] !== eN ||
            eo[84] !== e_ ||
            eo[85] !== ex ||
            eo[86] !== eS ||
            eo[87] !== eC ||
            eo[88] !== ep ||
            eo[89] !== em ||
            eo[90] !== ef
              ? ((W =
                  0 === em.gizmo.live_version
                    ? null
                    : (0, s.jsxs)(b.Ab, {
                        align: "end",
                        contentWidth: "menu",
                        open: e_,
                        onOpenChange: ej,
                        side: "bottom",
                        triggerButton: (0, s.jsx)(n.m, {
                          content: eN,
                          disabled: e_,
                          children: (0, s.jsx)(v.$, {
                            "aria-label": eN,
                            color: "ghostActive",
                            size: "icon",
                            uniform: !0,
                            children: (0, s.jsx)(j.e4G, {}),
                          }),
                        }),
                        children: [
                          (0, s.jsxs)(b.ms.Item, {
                            disabled: null == eS,
                            onSelect: () => {
                              null != eS &&
                                (0, T.mJ)(ef, em, !eS).catch(() => {
                                  ef.get(w.Id).danger(
                                    ex.formatMessage({
                                      id: "chatgptConversations.gpts.about.pinFailed",
                                      defaultMessage: "Couldn't update pinned GPT",
                                    }),
                                    { errorAnalytics: { toastId: "chatgptConversations.gpts.about.pinFailed" } },
                                  )
                                })
                            },
                            children: [
                              (0, s.jsx)(b.ms.ItemIcon, {
                                children: eS ? (0, s.jsx)(j.JRw, {}) : (0, s.jsx)(j.Qut, {}),
                              }),
                              eS
                                ? (0, s.jsx)(p.A, {
                                    id: "chatgptConversations.gpts.about.unpin",
                                    defaultMessage: "Remove from sidebar",
                                  })
                                : (0, s.jsx)(p.A, {
                                    id: "chatgptConversations.gpts.about.pin",
                                    defaultMessage: "Keep in sidebar",
                                  }),
                            ],
                          }),
                          "private" === em.gizmo.share_recipient
                            ? null
                            : (0, s.jsxs)(b.ms.Item, {
                                onSelect: () => {
                                  let e = em.gizmo.short_url?.trim() || em.gizmo.id
                                  ;(0, M.lW)(`https://chatgpt.com/g/${encodeURIComponent(e)}`).then(ew)
                                },
                                children: [
                                  (0, s.jsx)(b.ms.ItemIcon, { children: (0, s.jsx)(j.ibM, {}) }),
                                  eC
                                    ? (0, s.jsx)(p.A, {
                                        id: "chatgptConversations.gpts.about.copiedLink",
                                        defaultMessage: "Copied link",
                                      })
                                    : (0, s.jsx)(p.A, {
                                        id: "chatgptConversations.gpts.about.copyLink",
                                        defaultMessage: "Copy link",
                                      }),
                                ],
                              }),
                          (0, s.jsx)(es.o, { resource: em, onSelect: ep }),
                        ],
                      })),
                (eo[83] = eN),
                (eo[84] = e_),
                (eo[85] = ex),
                (eo[86] = eS),
                (eo[87] = eC),
                (eo[88] = ep),
                (eo[89] = em),
                (eo[90] = ef),
                (eo[91] = W))
              : (W = eo[91]),
            (K = eb ? "catalogDetail" : "wide"),
            (Z = eb ? "compact" : "default"),
            (J = eb ? "catalog" : "promotional"),
            eo[92] !== ep
              ? ((V = (e) => {
                  e || ep()
                }),
                (eo[92] = ep),
                (eo[93] = V))
              : (V = eo[93]),
            (F = "flex min-h-0 flex-col"),
            (I = "min-h-0 flex-1 overflow-y-auto px-5 pt-20 pb-4 sm:px-10"),
            eo[94] !== em.gizmo.display.profile_picture_url
              ? ((e = em.gizmo.display.profile_picture_url?.trim() || null),
                (eo[94] = em.gizmo.display.profile_picture_url),
                (eo[95] = e))
              : (e = eo[95]),
            eo[96] !== eT || eo[97] !== em.gizmo.id || eo[98] !== e
              ? ((t = (0, s.jsx)(P.S, {
                  className: "mb-1 size-20",
                  customGpt: { iconUrl: e, id: em.gizmo.id, name: eT },
                  presentation: "avatar",
                })),
                (eo[96] = eT),
                (eo[97] = em.gizmo.id),
                (eo[98] = e),
                (eo[99] = t))
              : (t = eo[99]),
            eo[100] !== eT
              ? ((a = (0, s.jsx)(y.L3, {
                  className: "text-heading-lg leading-7 font-semibold wrap-anywhere text-default",
                  children: eT,
                })),
                (eo[100] = eT),
                (eo[101] = a))
              : (a = eo[101]),
            eo[102] !== eP || eo[103] !== em.gizmo.author.link_to
              ? ((i =
                  null == eP
                    ? null
                    : (0, s.jsxs)("div", {
                        className: "flex items-center gap-1 text-base text-secondary select-none",
                        children: [
                          (0, s.jsx)(p.A, {
                            id: "chatgptConversations.gpts.about.byAuthor",
                            defaultMessage: "By {author}",
                            values: { author: eP },
                          }),
                          em.gizmo.author.link_to ? (0, s.jsx)(j.ZEl, {}) : (0, s.jsx)(_.I, { asset: o.x }),
                        ],
                      })),
                (eo[102] = eP),
                (eo[103] = em.gizmo.author.link_to),
                (eo[104] = i))
              : (i = eo[104]),
            eo[105] !== eT || eo[106] !== em.gizmo.display.description
              ? ((l =
                  null == em.gizmo.display.description
                    ? (0, s.jsx)(y.rr, {
                        className: "sr-only",
                        children: (0, s.jsx)(p.A, {
                          id: "chatgptConversations.gpts.about.descriptionFallback",
                          defaultMessage: "Details for {name}",
                          values: { name: eT },
                        }),
                      })
                    : (0, s.jsx)(y.rr, {
                        className: "max-w-md text-base text-pretty text-default",
                        children: em.gizmo.display.description,
                      })),
                (eo[105] = eT),
                (eo[106] = em.gizmo.display.description),
                (eo[107] = l))
              : (l = eo[107]),
            eo[108] !== t || eo[109] !== a || eo[110] !== i || eo[111] !== l
              ? ((L = (0, s.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 text-center",
                  children: [t, a, i, l],
                })),
                (eo[108] = t),
                (eo[109] = a),
                (eo[110] = i),
                (eo[111] = l),
                (eo[112] = L))
              : (L = eo[112]),
            eo[113] !== eu || eo[114] !== em.gizmo.id
              ? ((D = (0, s.jsx)(X, { accountId: eu, gizmoId: em.gizmo.id })),
                (eo[113] = eu),
                (eo[114] = em.gizmo.id),
                (eo[115] = D))
              : (D = eo[115]),
            (U =
              !eb && ev && 0 !== em.gizmo.live_version && null != r && r.length > 0
                ? (0, s.jsxs)("section", {
                    className: "mt-10",
                    children: [
                      (0, s.jsx)("h2", {
                        className: "heading-xl mb-3 font-semibold text-default select-none",
                        children: (0, s.jsx)(p.A, {
                          id: "chatgptConversations.gpts.about.conversationStarters",
                          defaultMessage: "Conversation Starters",
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className: "flex flex-wrap gap-2",
                        children: r.map((e) =>
                          (0, s.jsx)(
                            v.$,
                            {
                              allowShrink: !0,
                              color: "secondary",
                              size: "medium",
                              onClick: () => eh(em, e),
                              children: (0, s.jsx)("span", { className: "whitespace-normal", children: e }),
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  })
                : null),
            (eo[56] = eu),
            (eo[57] = eN),
            (eo[58] = e_),
            (eo[59] = eP),
            (eo[60] = ex),
            (eo[61] = eb),
            (eo[62] = eS),
            (eo[63] = eC),
            (eo[64] = eT),
            (eo[65] = ep),
            (eo[66] = eh),
            (eo[67] = em),
            (eo[68] = ev),
            (eo[69] = ef),
            (eo[70] = G),
            (eo[71] = I),
            (eo[72] = L),
            (eo[73] = D),
            (eo[74] = U),
            (eo[75] = F),
            (eo[76] = B),
            (eo[77] = R),
            (eo[78] = W),
            (eo[79] = K),
            (eo[80] = Z),
            (eo[81] = J),
            (eo[82] = V))
        } else
          ((G = eo[70]),
            (I = eo[71]),
            (L = eo[72]),
            (D = eo[73]),
            (U = eo[74]),
            (F = eo[75]),
            (B = eo[76]),
            (R = eo[77]),
            (W = eo[78]),
            (K = eo[79]),
            (Z = eo[80]),
            (J = eo[81]),
            (V = eo[82]))
        ;((E =
          eb || 0 === e.length
            ? null
            : (0, s.jsxs)("section", {
                className: "mt-10",
                children: [
                  (0, s.jsx)("h2", {
                    className: "heading-xl mb-3 font-semibold text-default select-none",
                    children: (0, s.jsx)(p.A, {
                      id: "chatgptConversations.gpts.about.capabilities",
                      defaultMessage: "Capabilities",
                    }),
                  }),
                  (0, s.jsx)("div", { className: "flex flex-col gap-2", children: e.map(el) }),
                ],
              })),
          (q =
            !eb && null == t && eM
              ? (0, s.jsx)("div", { "aria-hidden": !0, className: "mt-10 h-24 animate-pulse rounded-xl bg-surface" })
              : null),
          (O =
            !eb && null != t && t.length > 0
              ? (0, s.jsxs)("section", {
                  className: "mt-10",
                  children: [
                    (0, s.jsx)("h2", {
                      className: "heading-xl mb-3 font-semibold text-default select-none",
                      children:
                        null == a
                          ? (0, s.jsx)(p.A, {
                              id: "chatgptConversations.gpts.about.moreByCreatorFallback",
                              defaultMessage: "More from this creator",
                            })
                          : (0, s.jsx)(p.A, {
                              id: "chatgptConversations.gpts.about.moreByCreator",
                              defaultMessage: "More by {creatorName}",
                              values: { creatorName: a },
                            }),
                    }),
                    (0, s.jsx)("div", {
                      className: "flex gap-2 overflow-x-auto pb-1",
                      children: t.map((e) => (0, s.jsx)(ec, { resource: e, onStartChat: eh }, e.gizmo.id)),
                    }),
                  ],
                })
              : null),
          (eo[22] = eu),
          (eo[23] = eN),
          (eo[24] = e_),
          (eo[25] = eP),
          (eo[26] = eA?.items),
          (eo[27] = eA?.items.filter),
          (eo[28] = ex),
          (eo[29] = eM),
          (eo[30] = eb),
          (eo[31] = eg),
          (eo[32] = eS),
          (eo[33] = eC),
          (eo[34] = eT),
          (eo[35] = ep),
          (eo[36] = eh),
          (eo[37] = em),
          (eo[38] = ev),
          (eo[39] = ef),
          (eo[40] = G),
          (eo[41] = I),
          (eo[42] = L),
          (eo[43] = D),
          (eo[44] = U),
          (eo[45] = E),
          (eo[46] = q),
          (eo[47] = O),
          (eo[48] = F),
          (eo[49] = B),
          (eo[50] = R),
          (eo[51] = W),
          (eo[52] = K),
          (eo[53] = Z),
          (eo[54] = J),
          (eo[55] = V))
      } else
        ((G = eo[40]),
          (I = eo[41]),
          (L = eo[42]),
          (D = eo[43]),
          (U = eo[44]),
          (E = eo[45]),
          (q = eo[46]),
          (O = eo[47]),
          (F = eo[48]),
          (B = eo[49]),
          (R = eo[50]),
          (W = eo[51]),
          (K = eo[52]),
          (Z = eo[53]),
          (J = eo[54]),
          (V = eo[55]))
      eo[116] !== I ||
      eo[117] !== L ||
      eo[118] !== D ||
      eo[119] !== U ||
      eo[120] !== E ||
      eo[121] !== q ||
      eo[122] !== O
        ? ((H = (0, s.jsxs)("div", { className: I, children: [L, D, U, E, q, O] })),
          (eo[116] = I),
          (eo[117] = L),
          (eo[118] = D),
          (eo[119] = U),
          (eo[120] = E),
          (eo[121] = q),
          (eo[122] = O),
          (eo[123] = H))
        : (H = eo[123])
      let eG = eb ? "shrink-0 px-6 pb-8 sm:px-10" : "shrink-0 px-6 pt-2 pb-8"
      return (
        eo[124] !== ep || eo[125] !== eh || eo[126] !== em
          ? ((Q = (0, s.jsx)($, { resource: em, onClose: ep, onStartChat: eh })),
            (eo[124] = ep),
            (eo[125] = eh),
            (eo[126] = em),
            (eo[127] = Q))
          : (Q = eo[127]),
        eo[128] !== eG || eo[129] !== Q
          ? ((ee = (0, s.jsx)("div", { className: eG, children: Q })), (eo[128] = eG), (eo[129] = Q), (eo[130] = ee))
          : (ee = eo[130]),
        eo[131] !== F || eo[132] !== H || eo[133] !== ee
          ? ((et = (0, s.jsxs)("div", { className: F, children: [H, ee] })),
            (eo[131] = F),
            (eo[132] = H),
            (eo[133] = ee),
            (eo[134] = et))
          : (et = eo[134]),
        eo[135] !== G ||
        eo[136] !== B ||
        eo[137] !== R ||
        eo[138] !== W ||
        eo[139] !== K ||
        eo[140] !== Z ||
        eo[141] !== J ||
        eo[142] !== V ||
        eo[143] !== et
          ? ((en = (0, s.jsx)(G, {
              open: B,
              contentClassName: R,
              headerActions: W,
              size: K,
              radius: Z,
              variant: J,
              onOpenChange: V,
              children: et,
            })),
            (eo[135] = G),
            (eo[136] = B),
            (eo[137] = R),
            (eo[138] = W),
            (eo[139] = K),
            (eo[140] = Z),
            (eo[141] = J),
            (eo[142] = V),
            (eo[143] = et),
            (eo[144] = en))
          : (en = eo[144]),
        en
      )
    }
    function el(e) {
      return (0, s.jsxs)(
        "div",
        {
          className: "flex items-start gap-2",
          children: [
            (0, s.jsx)(j.jFs, { className: "mt-0.5 text-chart-green" }),
            (0, s.jsxs)("div", {
              className: "flex min-w-0 flex-col",
              children: [
                (0, s.jsx)(p.A, { ...e.title }),
                null == e.description
                  ? null
                  : (0, s.jsx)("span", {
                      className: "text-xs text-secondary",
                      children: (0, s.jsx)(p.A, { ...e.description }),
                    }),
              ],
            }),
          ],
        },
        e.title.id,
      )
    }
    function er(e) {
      let { title: t } = e
      return t.id
    }
    function ec(e) {
      let t,
        a,
        n,
        o,
        l,
        r,
        c,
        d,
        u,
        g,
        m = (0, i.c)(28),
        { resource: h, onStartChat: f } = e
      m[0] !== h.gizmo.display.name || m[1] !== h.gizmo.id
        ? ((t = h.gizmo.display.name.trim() || h.gizmo.id),
          (m[0] = h.gizmo.display.name),
          (m[1] = h.gizmo.id),
          (m[2] = t))
        : (t = m[2])
      let x = t
      m[3] !== h.gizmo.author.display_name
        ? ((a = h.gizmo.author.display_name?.trim()), (m[3] = h.gizmo.author.display_name), (m[4] = a))
        : (a = m[4])
      let v = a
      return (
        m[5] !== h.gizmo.display.description
          ? ((n =
              null == h.gizmo.display.description
                ? null
                : (0, s.jsx)("span", { className: "line-clamp-2", children: h.gizmo.display.description })),
            (m[5] = h.gizmo.display.description),
            (m[6] = n))
          : (n = m[6]),
        m[7] !== v
          ? ((o =
              null == v
                ? null
                : (0, s.jsx)("span", {
                    className: "text-xs text-secondary",
                    children: (0, s.jsx)(p.A, {
                      id: "chatgptConversations.gpts.about.creatorCardByline",
                      defaultMessage: "By {author}",
                      values: { author: v },
                    }),
                  })),
            (m[7] = v),
            (m[8] = o))
          : (o = m[8]),
        m[9] !== n || m[10] !== o
          ? ((l = (0, s.jsxs)("div", { className: "flex flex-col gap-1", children: [n, o] })),
            (m[9] = n),
            (m[10] = o),
            (m[11] = l))
          : (l = m[11]),
        m[12] !== h.gizmo.display.profile_picture_url
          ? ((r = h.gizmo.display.profile_picture_url?.trim() || null),
            (m[12] = h.gizmo.display.profile_picture_url),
            (m[13] = r))
          : (r = m[13]),
        m[14] !== x || m[15] !== h.gizmo.id || m[16] !== r
          ? ((c = (0, s.jsx)("span", {
              className: "flex size-12 items-center justify-center overflow-hidden rounded-full",
              children: (0, s.jsx)(P.S, {
                className: "h-full w-full",
                customGpt: { iconUrl: r, id: h.gizmo.id, name: x },
                presentation: "avatar",
              }),
            })),
            (m[14] = x),
            (m[15] = h.gizmo.id),
            (m[16] = r),
            (m[17] = c))
          : (c = m[17]),
        m[18] !== x
          ? ((d = (0, s.jsx)("span", { className: "font-semibold", children: x })), (m[18] = x), (m[19] = d))
          : (d = m[19]),
        m[20] !== f || m[21] !== h ? ((u = () => f(h)), (m[20] = f), (m[21] = h), (m[22] = u)) : (u = m[22]),
        m[23] !== l || m[24] !== c || m[25] !== d || m[26] !== u
          ? ((g = (0, s.jsx)(k.D, {
              className: "w-full min-w-72",
              description: l,
              icon: c,
              iconContainer: !1,
              presentation: "related",
              title: d,
              onClick: u,
            })),
            (m[23] = l),
            (m[24] = c),
            (m[25] = d),
            (m[26] = u),
            (m[27] = g))
          : (g = m[27]),
        g
      )
    }
    function ed(e) {
      switch (e.type) {
        case "browser":
          return { title: eu.webSearch }
        case "canvas":
          return { title: eu.canvas }
        case "python":
          return { title: eu.dataAnalysis }
        case "dalle":
        case "image_gen":
          return { title: eu.imageGeneration }
        case "memory":
          return { description: eu.memoryDescription, title: eu.memory }
        case "plugin":
          return { description: eu.actionsDescription, title: eu.actions }
        case "connector":
          return { title: eu.apps }
        case "context_connector":
        case "function":
        case "gizmo_contacts":
        case "intent":
        case "parallel_browse":
        case "plugins_prototype":
        case "retrieval":
          return null
      }
    }
    let eu = (0, f.YK)({
      webSearch: { id: "chatgptConversations.gpts.about.tools.webSearch", defaultMessage: "Web Search" },
      canvas: { id: "chatgptConversations.gpts.about.tools.canvas", defaultMessage: "Canvas" },
      dataAnalysis: {
        id: "chatgptConversations.gpts.about.tools.dataAnalysis",
        defaultMessage: "Code Interpreter & Data Analysis",
      },
      imageGeneration: {
        id: "chatgptConversations.gpts.about.tools.genericImageGeneration",
        defaultMessage: "Image Generation",
      },
      memory: { id: "chatgptConversations.gpts.about.tools.memory", defaultMessage: "Memory" },
      memoryDescription: {
        id: "chatgptConversations.gpts.about.tools.memoryDescription",
        defaultMessage: "Learns from previous chats to improve future conversations",
      },
      actions: { id: "chatgptConversations.gpts.about.tools.actions", defaultMessage: "Actions" },
      actionsDescription: {
        id: "chatgptConversations.gpts.about.tools.actionsDescription",
        defaultMessage: "Retrieves or takes actions outside of ChatGPT",
      },
      apps: { id: "chatgptConversations.gpts.about.tools.apps", defaultMessage: "Apps" },
    })
  },
  E4rW(e, t, a) {
    a.d(
      t,
      {},
      {
        m: function (e, t) {
          return e.includes("interactions_disabled")
            ? "interactions_disabled"
            : e.includes("fedramp_incompatible")
              ? "fedramp_incompatible"
              : e.includes("openai_gpt_workspace_disabled")
                ? "openai_gpt_workspace_disabled"
                : e.includes("workspace_disabled") && !t
                  ? "workspace_disabled"
                  : null
        },
        w: function (e, t, a) {
          return null != t && "no_constraint" !== t && "us" !== t
            ? "residency"
            : "allow_none" === a || "allow_specific" === a
              ? a
              : "quorum" === e.plan_type
                ? "quorum"
                : null
        },
      },
    )
  },
  DY7H(e, t, a) {
    var s = a("jaeI")
    function i({
      resource: e,
      account: t,
      accountId: a,
      userId: s,
      enabled: o,
      allowMigrated: l = !1,
      remigration: r,
    }) {
      let { gizmo: c } = e
      return (
        !!o &&
        null != a &&
        t?.id === a &&
        !!n(e, r) &&
        (!!l || !!r || null == c.migrated_plugin_id) &&
        (c.workspace_id ?? null) === ("workspace" === t.structure ? t.id : null) &&
        (c.author.user_id === ("personal" === t.structure ? s : t.account_user_id)
          ? c.current_user_permission?.can_view_config === !0 &&
            (!0 === c.current_user_permission.can_write || null != r)
          : "workspace" === t.structure &&
            ("account-owner" === t.account_user_role || "account-admin" === t.account_user_role) &&
            "private" !== c.share_recipient &&
            c.current_user_permission?.can_read === !0)
      )
    }
    function n({ gizmo: e }, t) {
      return (
        "gpt" === e.gizmo_type &&
        e.current_user_permission?.can_preview_business_agent_tools == null &&
        ((e.live_version ?? 0) > 0 || null != t)
      )
    }
    a.d(
      t,
      {},
      {
        T8: function ({ account: e, rbacEnabled: t, permissions: a, isPending: s, isError: i }) {
          return t && e?.structure !== "personal"
            ? null == e || s
              ? "loading"
              : i || null == a
                ? "unavailable"
                : a.includes("chatgpt.workspace.gpt.crud")
                  ? "allowed"
                  : "denied"
            : "allowed"
        },
        l2: function (e) {
          return (!0 === e.allowMigrated || "allowed" === e.gptPermission) && i(e)
        },
        l5: i,
        rP: function ({ resource: e, remigration: t, account: a, accountId: i, permissions: o, rbacEnabled: l }) {
          return (
            (0, s.l)(a, l) &&
            a?.structure === "workspace" &&
            a.id === i &&
            e.gizmo.workspace_id === a.id &&
            e.gizmo.author.user_id === a.account_user_id &&
            n(e, t) &&
            null != o &&
            !o.includes("chatgpt.workspace_plugins.use")
          )
        },
      },
    )
  },
  bMrQ(e, t, a) {
    var s = a("qmMi"),
      i = a("rGp2"),
      n = a("OiCI"),
      o = a("SPnB"),
      l = a("YJm0"),
      r = a("Kwur"),
      c = a("Ot7V"),
      d = a("DAA7"),
      u = a("k7G6"),
      g = a("WzdM"),
      m = a("bJEQ"),
      p = a("OWtl"),
      h = a("kK7d"),
      f = a("eShZ")
    let x = (0, s.vU)(p.u, (e, { get: t, scope: a }) => {
      let s = t(n.tT),
        c = t(o.chatGptAuthenticatedUserId$)
      return {
        enabled: null != s && null != c,
        queryKey: ["plugins", "gpt-migration-access", e, s, c],
        queryFn: async ({ signal: t }) => {
          if (null == s || null == c) return null
          let { results: n } = await h.CodexRequest.safePost("/ps/plugins/batch", {
              surface: "other",
              requestBody: { plugin_ids: [e] },
              additionalHeaders: { ...(0, g.A)("chatgpt"), "ChatGPT-Account-Id": s },
              signal: (0, m.w)(t),
            }),
            o = n.find(({ plugin: t }) => t.id === e)?.plugin
          if (null != o)
            return "ENABLED" === o.status && "NOT_AVAILABLE" !== o.installation_policy ? { type: "plugin" } : null
          let d = await a.query.fetch(l.f, s)
          t.throwIfAborted()
          let u = d.accounts[s]?.account
          if (
            u?.account_id !== s ||
            "workspace" !== u.structure ||
            ("account-admin" !== u.account_user_role && "account-owner" !== u.account_user_role)
          )
            return null
          try {
            let a = await r.Request.safeGet("/ps/plugins/admin/{plugin_id}", {
              surface: "plugin_management",
              parameters: { path: { plugin_id: e } },
              additionalHeaders: { "ChatGPT-Account-Id": s, [i.ok]: "ADMIN_SETTING" },
              signal: (0, m.w)(t),
              expectedErrorStatuses: [403, 404],
            })
            return a.id === e && "WORKSPACE" === a.scope && a.workspace_id === s
              ? { type: "admin", accountId: s }
              : null
          } catch (e) {
            if (e instanceof f.FetchError && (403 === e.status || 404 === e.status)) return null
            throw e
          }
        },
        staleTime: 0,
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        retry: !1,
      }
    })
    a.d(
      t,
      {},
      {
        B: x,
        y: async function (e, t, a, s) {
          if ("admin" === a.type) {
            let s = new URL(`/admin/plugins/${encodeURIComponent(t)}`, "https://chatgpt.com")
            ;(s.searchParams.set("catalog", "WORKSPACE"), s.searchParams.set("account_id", a.accountId))
            let i = s.toString(),
              n = (0, d.lU)(e, i, a.accountId),
              o = null == n ? null : await n
            ;(0, c.E0)({
              href: o ?? i,
              initiator: "open_in_browser_bridge",
              openTarget: null == o ? void 0 : "external-browser",
            })
            return
          }
          ;(0, u.Uz)(t, s)
        },
      },
    )
  },
  gNqU(e, t, a) {
    var s = a("ABep"),
      i = a("QosV"),
      n = a("slpy"),
      o = a("yLkT"),
      l = a("qmMi"),
      r = a("Wf1j"),
      c = a("oyxz"),
      d = a("eFn4"),
      u = a("UOa8"),
      g = a("OAko"),
      m = a("MM0V"),
      p = a("Sm6l"),
      h = a("ZtSy"),
      f = a("Ot7V"),
      x = a("HOLv"),
      v = a("bVeK"),
      y = a("jaeI"),
      b = a("hZax"),
      _ = a("DY7H"),
      j = a("g2DC"),
      C = a("slBk")
    a.d(
      t,
      {},
      {
        E_: function (e) {
          let t,
            a,
            n,
            l,
            d,
            u,
            g,
            h = (0, i.c)(22),
            { surface: f, onKeepUsingGpt: v, deadline: y } = e,
            _ = (0, r.A)(),
            j = (0, b.Fj)("2513446768")
          h[0] !== j || h[1] !== y
            ? ((t = y ?? (0, C.l)(j.get("retirement_date", ""))), (h[0] = j), (h[1] = y), (h[2] = t))
            : (t = h[2])
          let w = t
          h[3] !== _ || h[4] !== w
            ? ((a = _.formatDate(w, { month: "long", day: "numeric", timeZone: "UTC" })),
              (h[3] = _),
              (h[4] = w),
              (h[5] = a))
            : (a = h[5])
          let k = a
          if ("directory" === f) {
            let e
            ;(h[6] !== k
              ? ((e = (0, s.jsx)(c.A, {
                  id: "chatgptConversations.gpts.blocked.directory.description",
                  defaultMessage:
                    "GPTs can continue as plugins, but your workspace admins have disabled plugins. Your GPTs can\u2019t be migrated and won\u2019t be available after {deadline}.",
                  values: { deadline: k },
                })),
                (h[6] = k),
                (h[7] = e))
              : (e = h[7]),
              (n = e))
          } else if ("migrated" === f) {
            let e
            ;(h[8] !== k
              ? ((e = (0, s.jsx)(c.A, {
                  id: "chatgptConversations.gpts.blocked.migrated.description",
                  defaultMessage:
                    "This GPT is now a plugin, but the plugin isn\u2019t available with your current workspace settings. You can keep using this GPT until {deadline}.",
                  values: { deadline: k },
                })),
                (h[8] = k),
                (h[9] = e))
              : (e = h[9]),
              (n = e))
          } else {
            let e
            ;(h[10] !== k
              ? ((e = (0, s.jsx)(c.A, {
                  id: "chatgptConversations.gpts.blocked.gpt.description",
                  defaultMessage:
                    "This GPT can continue as a plugin, but your workspace admins have disabled plugins. It can\u2019t be migrated and won\u2019t be available after {deadline}.",
                  values: { deadline: k },
                })),
                (h[10] = k),
                (h[11] = e))
              : (e = h[11]),
              (n = e))
          }
          return (
            h[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = (0, s.jsx)(x.I, { asset: o.k, className: "text-secondary" })), (h[12] = l))
              : (l = h[12]),
            h[13] !== k || h[14] !== f
              ? ((d =
                  "directory" === f
                    ? (0, s.jsx)(c.A, {
                        id: "chatgptConversations.gpts.blocked.directory.title",
                        defaultMessage: "GPTs will be retired on {deadline}",
                        values: { deadline: k },
                      })
                    : (0, s.jsx)(c.A, {
                        id: "chatgptConversations.gpts.blocked.gpt.title",
                        defaultMessage: "This GPT will be retired on {deadline}",
                        values: { deadline: k },
                      })),
                (h[13] = k),
                (h[14] = f),
                (h[15] = d))
              : (d = h[15]),
            h[16] !== v
              ? ((u =
                  null == v
                    ? void 0
                    : (0, s.jsx)(p.$, {
                        type: "button",
                        color: "primary",
                        size: "dialog",
                        onClick: v,
                        children: (0, s.jsx)(c.A, {
                          id: "chatgptConversations.gpts.blocked.keep_using_gpt.label",
                          defaultMessage: "Keep using GPT",
                        }),
                      })),
                (h[16] = v),
                (h[17] = u))
              : (u = h[17]),
            h[18] !== n || h[19] !== d || h[20] !== u
              ? ((g = (0, s.jsx)(m.l, {
                  variant: "announcement",
                  icon: l,
                  stackOnNarrow: !0,
                  wrapCtas: !0,
                  title: d,
                  content: n,
                  customCtas: u,
                })),
                (h[18] = n),
                (h[19] = d),
                (h[20] = u),
                (h[21] = g))
              : (g = h[21]),
            g
          )
        },
        Xn: function (e) {
          let t,
            a,
            n,
            v,
            _,
            j,
            w,
            k,
            z,
            A,
            M,
            N,
            T = (0, i.c)(41),
            { actionPlacement: P, currentGpt: S, onExplore: G, openTarget: I } = e,
            L = void 0 === P ? "inline" : P,
            D = (0, r.A)(),
            U = (0, b.Fj)("2513446768"),
            E = (0, b.Fj)("2562735250")
          T[0] !== E ? ((t = E.get("enabled", !1)), (T[0] = E), (T[1] = t)) : (t = T[1])
          let q = t,
            { accountId: O } = (0, u.As)()
          T[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = { preview: !1 }), (T[2] = a)) : (a = T[2])
          let { data: F } = (0, g.YL)(void 0, a),
            B = (0, y.l)(F, (0, b.Zj)("1355972088")),
            { data: R } = (0, l._U)(d.Jk, O ?? "", {
              enabled: q && null != O && F?.id === O && "workspace" === F.structure && B,
            }),
            W = q && F?.id === O && (0, y.J)(F, B, R?.permissions)
          T[3] !== U || T[4] !== D
            ? ((n = D.formatDate((0, C.l)(U.get("retirement_date", "")), {
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })),
              (T[3] = U),
              (T[4] = D),
              (T[5] = n))
            : (n = T[5])
          let K = n,
            Y = "below" === L ? "w-full" : void 0,
            Z = "below" === L ? "detailAction" : "dialog"
          ;(T[6] !== W || T[7] !== U || T[8] !== D.locale || T[9] !== G || T[10] !== I
            ? ((v = W
                ? G
                : (e) => {
                    ;(0, f.PQ)({
                      disposition: "new-tab",
                      event: e,
                      href: (0, C.L)(D.locale, U.get("learn_more_url", "")),
                      initiator: "open_in_browser_bridge",
                      openTarget: I,
                    })
                  }),
              (T[6] = W),
              (T[7] = U),
              (T[8] = D.locale),
              (T[9] = G),
              (T[10] = I),
              (T[11] = v))
            : (v = T[11]),
            T[12] !== W
              ? ((_ = W
                  ? (0, s.jsx)(c.A, {
                      id: "chatgptConversations.gpts.notices.explorePlugins",
                      defaultMessage: "Explore plugins",
                    })
                  : (0, s.jsx)(c.A, {
                      id: "chatgptConversations.gpts.notices.learnMore",
                      defaultMessage: "Learn more",
                    })),
                (T[12] = W),
                (T[13] = _))
              : (_ = T[13]),
            T[14] !== _ || T[15] !== Y || T[16] !== Z || T[17] !== v
              ? ((j = (0, s.jsx)(p.$, { className: Y, color: "primary", size: Z, onClick: v, children: _ })),
                (T[14] = _),
                (T[15] = Y),
                (T[16] = Z),
                (T[17] = v),
                (T[18] = j))
              : (j = T[18]))
          let J = j
          T[19] !== U || T[20] !== D.locale || T[21] !== I
            ? ((w = (e) =>
                (0, s.jsx)(h.G, {
                  href: (0, C.L)(D.locale, U.get("learn_more_url", "")),
                  initiator: "open_in_browser_bridge",
                  openTarget: I,
                  underline: "always",
                  children: e,
                })),
              (T[19] = U),
              (T[20] = D.locale),
              (T[21] = I),
              (T[22] = w))
            : (w = T[22])
          let $ = w
          if (W)
            if (void 0 !== S && S) {
              let e
              ;(T[24] !== $
                ? ((e = (0, s.jsx)(c.A, {
                    id: "chatgptConversations.gpts.notices.currentRetirement.withLearnMore",
                    defaultMessage:
                      "This GPT will only remain available if its creator migrates it to a plugin. Explore plugins, the new home for custom tools. <learnMore>Learn more</learnMore>",
                    values: { learnMore: $ },
                  })),
                  (T[24] = $),
                  (T[25] = e))
                : (e = T[25]),
                (k = e))
            } else {
              let e
              ;(T[26] !== K || T[27] !== $
                ? ((e = (0, s.jsx)(c.A, {
                    id: "chatgptConversations.gpts.notices.directoryRetirement.withLearnMore",
                    defaultMessage:
                      "GPTs migrated by their creators will remain available as plugins after {deadline}. <learnMore>Learn more</learnMore>",
                    values: { deadline: K, learnMore: $ },
                  })),
                  (T[26] = K),
                  (T[27] = $),
                  (T[28] = e))
                : (e = T[28]),
                (k = e))
            }
          else {
            let e
            ;(T[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(c.A, {
                  id: "chatgptConversations.gpts.notices.retirementLearnMore",
                  defaultMessage: "Learn more about the retirement of GPTs in the Knowledge Center.",
                })),
                (T[23] = e))
              : (e = T[23]),
              (k = e))
          }
          let V = "below" === L ? "announcementInset" : "announcement"
          ;(T[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((z = (0, s.jsx)(x.I, { asset: o.k, className: "text-secondary" })), (T[29] = z))
            : (z = T[29]),
            T[30] !== K
              ? ((A = (0, s.jsx)(c.A, {
                  id: "chatgptConversations.gpts.notices.retirementTitle",
                  defaultMessage: "GPTs will be retired on {deadline}",
                  values: { deadline: K },
                })),
                (T[30] = K),
                (T[31] = A))
              : (A = T[31]))
          let H = "inline" === L ? J : void 0
          T[32] !== k || T[33] !== V || T[34] !== A || T[35] !== H
            ? ((M = (0, s.jsx)(m.l, {
                variant: V,
                icon: z,
                stackOnNarrow: !0,
                wrapCtas: !0,
                title: A,
                content: k,
                customCtas: H,
              })),
              (T[32] = k),
              (T[33] = V),
              (T[34] = A),
              (T[35] = H),
              (T[36] = M))
            : (M = T[36])
          let Q = M
          return (
            T[37] !== J || T[38] !== L || T[39] !== Q
              ? ((N =
                  "below" === L
                    ? (0, s.jsxs)("div", { className: "flex w-full flex-col gap-2", children: [Q, J] })
                    : Q),
                (T[37] = J),
                (T[38] = L),
                (T[39] = Q),
                (T[40] = N))
              : (N = T[40]),
            N
          )
        },
        m3: function (e) {
          let t,
            a,
            h,
            f,
            w,
            k,
            z,
            A,
            M,
            N,
            T = (0, i.c)(28),
            { surface: P, onMigrate: S, onDismiss: G } = e,
            I = (0, r.A)(),
            L = (0, b.Fj)("2562735250")
          T[0] !== L ? ((t = L.get("enabled", !1)), (T[0] = L), (T[1] = t)) : (t = T[1])
          let D = t,
            U = (0, b.Fj)("2513446768")
          T[2] !== U || T[3] !== I
            ? ((a = I.formatDate((0, C.l)(U.get("retirement_date", "")), {
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })),
              (T[2] = U),
              (T[3] = I),
              (T[4] = a))
            : (a = T[4])
          let E = a,
            { accountId: q } = (0, u.As)()
          T[5] === Symbol.for("react.memo_cache_sentinel") ? ((h = { preview: !1 }), (T[5] = h)) : (h = T[5])
          let { data: O } = (0, g.YL)(void 0, h),
            F = (0, y.l)(O, (0, b.Zj)("1355972088")),
            B = (0, b.Fj)("2826703856").get("enable_gpt_fe_controls", !1),
            {
              data: R,
              isPending: W,
              isError: K,
            } = (0, l._U)(d.Jk, q ?? "", {
              enabled: null != q && O?.id === q && "workspace" === O.structure && (F || B),
            }),
            Y = (0, _.T8)({ account: O, rbacEnabled: B, permissions: R?.permissions, isPending: W, isError: K }),
            Z = D && O?.id === q && (0, y.J)(O, F, R?.permissions)
          if ("allowed" !== Y) {
            let e
            ;(T[6] !== Y ? ((e = (0, s.jsx)(j.M, { permission: Y })), (T[6] = Y), (T[7] = e)) : (e = T[7]), (f = e))
          } else if (!Z) {
            let e
            ;(T[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, s.jsx)(c.A, {
                  id: "chatgptConversations.gpts.migration.permissionRequired",
                  defaultMessage: "Your workspace must allow you to use plugins to migrate this GPT",
                })),
                (T[8] = e))
              : (e = T[8]),
              (f = e))
          }
          return (
            T[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = (0, s.jsx)(x.I, { asset: o.k, className: "text-secondary" })), (T[9] = w))
              : (w = T[9]),
            T[10] !== E
              ? ((k = (0, s.jsx)(c.A, {
                  id: "chatgptConversations.gpts.notices.migrateTitle",
                  defaultMessage: "Migrate your GPTs to plugins by {deadline}",
                  values: { deadline: E },
                })),
                (T[10] = E),
                (T[11] = k))
              : (k = T[11]),
            T[12] !== E
              ? ((z = (0, s.jsx)(c.A, {
                  id: "chatgptConversations.gpts.notices.directoryMigration",
                  defaultMessage:
                    "GPTs that aren\u2019t migrated won\u2019t be available after {deadline}. Migrate yours so people can keep using them as plugins.",
                  values: { deadline: E },
                })),
                (T[12] = E),
                (T[13] = z))
              : (z = T[13]),
            T[14] !== Z || T[15] !== Y || T[16] !== f || T[17] !== S || T[18] !== P
              ? ((A =
                  null == S
                    ? void 0
                    : (0, s.jsx)(n.m, {
                        content: f,
                        children: (0, s.jsx)(p.$, {
                          color: "primary",
                          size: "dialog",
                          "aria-disabled": !Z || "allowed" !== Y,
                          onClick: (e) => {
                            Z && "allowed" === Y && S(e)
                          },
                          children:
                            "chat" === P
                              ? (0, s.jsx)(c.A, {
                                  id: "chatgptConversations.gpts.notices.migrateCurrent",
                                  defaultMessage: "Migrate to plugin",
                                })
                              : (0, s.jsx)(c.A, {
                                  id: "chatgptConversations.gpts.notices.migrateGpts",
                                  defaultMessage: "Migrate GPTs",
                                }),
                        }),
                      })),
                (T[14] = Z),
                (T[15] = Y),
                (T[16] = f),
                (T[17] = S),
                (T[18] = P),
                (T[19] = A))
              : (A = T[19]),
            T[20] !== I || T[21] !== G
              ? ((M =
                  null == G
                    ? void 0
                    : (0, s.jsx)(p.$, {
                        "aria-label": I.formatMessage({
                          id: "chatgptConversations.gpts.notices.dismiss",
                          defaultMessage: "Dismiss migration notice",
                        }),
                        color: "ghost",
                        size: "icon",
                        uniform: !0,
                        onClick: G,
                        children: (0, s.jsx)(v.Gmf, {}),
                      })),
                (T[20] = I),
                (T[21] = G),
                (T[22] = M))
              : (M = T[22]),
            T[23] !== k || T[24] !== z || T[25] !== A || T[26] !== M
              ? ((N = (0, s.jsx)(m.l, {
                  variant: "announcement",
                  icon: w,
                  stackOnNarrow: !0,
                  wrapCtas: !0,
                  title: k,
                  content: z,
                  customCtas: A,
                  trailingAction: M,
                })),
                (T[23] = k),
                (T[24] = z),
                (T[25] = A),
                (T[26] = M),
                (T[27] = N))
              : (N = T[27]),
            N
          )
        },
      },
    )
  },
  g2DC(e, t, a) {
    var s = a("ABep"),
      i = a("QosV"),
      n = a("oyxz")
    a.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            a = (0, i.c)(3),
            { permission: o } = e
          if ("allowed" === o) return null
          if ("loading" === o) {
            let e
            return (
              a[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, s.jsx)(n.A, {
                    id: "chatgptConversations.gpts.migration.checkingGptPermission",
                    defaultMessage: "Checking your workspace permissions\u2026",
                  })),
                  (a[0] = e))
                : (e = a[0]),
              e
            )
          }
          if ("unavailable" === o) {
            let e
            return (
              a[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, s.jsx)(n.A, {
                    id: "chatgptConversations.gpts.migration.gptPermissionUnavailable",
                    defaultMessage: "We couldn\u2019t check your workspace permissions. Try again later.",
                  })),
                  (a[1] = e))
                : (e = a[1]),
              e
            )
          }
          return (
            a[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, s.jsx)(n.A, {
                  id: "chatgptConversations.gpts.migration.gptPermissionRequired",
                  defaultMessage:
                    "You need Create and manage GPTs permission to migrate this GPT. Ask a workspace admin for access.",
                })),
                (a[2] = t))
              : (t = a[2]),
            t
          )
        },
      },
    )
  },
  hfkq(e, t, a) {
    var s = a("qmMi"),
      i = a("SPnB"),
      n = a("Kwur"),
      o = a("OWtl"),
      l = a("OMIV")
    let r = (e, t, a) => ({
        queryKey: ["chatgpt-gizmos", "plugin-remigration", e.gizmoId, e.pluginId, t, a],
        queryFn: ({ signal: s }) => {
          if (null == t || null == a) throw Error("GPT migration requires an account")
          return n.Request.safeGet("/gizmos/{gizmo_id}/migrate/plugin", {
            parameters: { path: { gizmo_id: e.gizmoId } },
            additionalHeaders: { "ChatGPT-Account-ID": t },
            expectedErrorStatuses: [401, 403, 404, 409],
            retry: "never",
            expectedIdentity: { accountId: t, userId: a },
            signal: s,
          })
        },
        retry: !1,
        staleTime: 0,
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
      }),
      c = (0, s.vU)(o.u, (e, { get: t }) => {
        let a = t(i.chatGptAuthenticatedAccountId$),
          s = t(i.chatGptAuthenticatedUserId$)
        return { ...r(e, a, s), enabled: !!e.pluginId && null != a && null != s && t(l.JW, "2160578039") }
      }),
      d = (0, s.i1)(o.u, (e, { get: t }) => {
        if (!e.pluginId || !t(l.JW, "2160578039")) return
        let { data: a, isSuccess: s, isFetching: i } = t(c, e)
        return s && !i && a.deleted_plugin_id && a.gizmo_config_id ? a : void 0
      })
    a.d(t, {}, { d: r, f: d })
  },
  slBk(e, t, a) {
    var s = a("W0tK")
    let i = Date.UTC(2026, 11, 11)
    a.d(
      t,
      {},
      {
        L: function (e, t) {
          let a = ((0, s.UK)(e)?.locale ?? "en-US").toLowerCase(),
            i = "en-us" === a ? "en" : a,
            n = `https://help.openai.com/${i}/articles/20001519-custom-gpt-retirement-and-migration-faq`
          try {
            let e = new URL(t.replaceAll("{lang}", i))
            return "https:" === e.protocol ? e.href : n
          } catch {
            return n
          }
        },
        l: function (e) {
          if (!/^\d{4}-\d{2}-\d{2}$/.test(e)) return i
          let t = Date.parse(`${e}T00:00:00.000Z`)
          return Number.isFinite(t) && new Date(t).toISOString().slice(0, 10) === e ? t : i
        },
      },
    )
  },
  T4c2(e, t, a) {
    a.d(
      t,
      {},
      {
        J5: function (e, t, a) {
          return ["chatgpt-gizmos", e, "search", t, a]
        },
        Jy: function (e) {
          return ["chatgpt-gizmos", e, "discovery"]
        },
        NY: function (e, t) {
          return ["chatgpt-gizmos", e, "creator", t]
        },
        bF: function (e, t, a) {
          return ["chatgpt-gizmos", e, "discovery-cut", t, a]
        },
      },
    )
  },
  Jqpj(e, t, a) {
    var s = a("ABep"),
      i = a("QosV"),
      n = a("slpy"),
      o = a("on57"),
      l = a("zd8w"),
      r = a("Ywss"),
      c = a("TjgH")
    function d(e) {
      let t,
        a,
        o,
        l,
        r,
        c,
        d,
        u = (0, i.c)(14)
      ;(u[0] !== e
        ? (({ disabled: t, onClick: a, onKeyDown: o, tooltip: r, ...l } = e),
          (u[0] = e),
          (u[1] = t),
          (u[2] = a),
          (u[3] = o),
          (u[4] = l),
          (u[5] = r))
        : ((t = u[1]), (a = u[2]), (o = u[3]), (l = u[4]), (r = u[5])),
        u[6] !== t || u[7] !== a || u[8] !== o || u[9] !== l
          ? ((c =
              null != a || t
                ? (0, s.jsx)("div", {
                    ...l,
                    "aria-disabled": t || void 0,
                    role: "button",
                    tabIndex: 0,
                    onClick: t ? void 0 : a,
                    onKeyDown: t ? void 0 : o,
                  })
                : (0, s.jsx)("div", { ...l, tabIndex: -1 })),
            (u[6] = t),
            (u[7] = a),
            (u[8] = o),
            (u[9] = l),
            (u[10] = c))
          : (c = u[10]))
      let g = c
      return (
        u[11] !== g || u[12] !== r
          ? ((d = null == r ? g : (0, s.jsx)(n.m, { content: r, children: g })), (u[11] = g), (u[12] = r), (u[13] = d))
          : (d = u[13]),
        d
      )
    }
    function u(e, t) {
      return "string" == typeof e
        ? (0, s.jsx)(c.E, { variant: "outline", children: e }, e)
        : (0, s.jsx)("span", { className: "flex items-center", children: e }, t)
    }
    a.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            a,
            n,
            c,
            g,
            m,
            p,
            h,
            f,
            x,
            v,
            y,
            b,
            _,
            j,
            C,
            w,
            k,
            z,
            A = (0, i.c)(85),
            {
              ref: M,
              icon: N,
              title: T,
              description: P,
              contentClassName: S,
              descriptionClassName: G,
              descriptionPlacement: I,
              badges: L,
              actions: D,
              actionsPlacement: U,
              trailing: E,
              disabled: q,
              onClick: O,
              tooltip: F,
              to: B,
              iconContainer: R,
              iconContainerVariant: W,
              iconPlacement: K,
              isHighlighted: Y,
              presentation: Z,
              className: J,
            } = e,
            $ = void 0 === I ? "stacked" : I,
            V = void 0 !== q && q,
            H = void 0 === R || R,
            Q = void 0 === W ? "filled" : W,
            X = void 0 === K ? "outside" : K,
            ee = void 0 !== Y && Y,
            et = void 0 === Z ? "card" : Z,
            ea = (0, l.useId)()
          A[0] !== O
            ? ((t = (e) => {
                O &&
                  e.target === e.currentTarget &&
                  ("Enter" === e.key || " " === e.key) &&
                  (e.preventDefault(), e.currentTarget.click())
              }),
              (A[0] = O),
              (A[1] = t))
            : (t = A[1])
          let es = t,
            ei = "row" === et || "directory-row" === et,
            en = "compact-row" === et,
            eo = (en || "center" === (void 0 === U ? "top" : U)) && !!D
          A[2] !== D || A[3] !== en || A[4] !== B
            ? ((a = D
                ? (0, s.jsx)("div", {
                    className: (0, o.A)(
                      "flex shrink-0 items-center",
                      en && "max-w-1/2",
                      null != B && "pointer-events-auto relative z-10",
                    ),
                    children: D,
                  })
                : null),
              (A[2] = D),
              (A[3] = en),
              (A[4] = B),
              (A[5] = a))
            : (a = A[5])
          let el = a
          A[6] !== N || A[7] !== H || A[8] !== Q || A[9] !== en || A[10] !== ei
            ? ((n = N
                ? H
                  ? (0, s.jsx)("span", {
                      className: (0, o.A)(
                        "flex shrink-0 items-center justify-center",
                        en && "size-13 rounded-2xl",
                        !en && (ei ? "size-9 rounded-lg" : "size-10 rounded-lg"),
                        "outline" === Q && "border border-default bg-transparent",
                        "filled" === Q && "bg-surface-secondary",
                      ),
                      children: en
                        ? (0, s.jsx)("span", { className: "flex size-8 items-center justify-center", children: N })
                        : N,
                    })
                  : (0, s.jsx)("span", { className: "shrink-0", children: N })
                : null),
              (A[6] = N),
              (A[7] = H),
              (A[8] = Q),
              (A[9] = en),
              (A[10] = ei),
              (A[11] = n))
            : (n = A[11])
          let er = n,
            ec = null == B && V,
            ed = null != B && "relative"
          A[12] !== J || A[13] !== ee || A[14] !== ei || A[15] !== O || A[16] !== et || A[17] !== ed
            ? ((c = (0, o.A)(
                "flex flex-col gap-2.5",
                ed,
                {
                  catalog: "h-full min-h-40 rounded-2xl border border-default p-5 hover:bg-secondary-ghost-hover",
                  featured: "h-full rounded-xl bg-surface-secondary px-7 py-8 hover:bg-secondary-ghost-hover",
                  ranked: "min-h-24 rounded-xl px-3 py-4 hover:bg-secondary-ghost-hover",
                  related: "min-h-24 rounded-xl bg-surface px-3 py-4 hover:bg-secondary-ghost-hover",
                  row: "rounded-[var(--radius-token-row)]",
                  "compact-row": "min-h-14 w-full min-w-0 justify-center",
                  "directory-row": "rounded-2xl",
                  card: "border-border/40 rounded-2xl border p-2 hover:bg-text/5",
                }[et],
                ei &&
                  "min-h-[var(--height-token-row)] w-full min-w-0 justify-center px-[var(--padding-row-x)] py-[var(--padding-row-y)]",
                ei && O && "hover:bg-secondary-ghost-hover",
                ee && "bg-text/5",
                O ? "cursor-interaction" : null,
                O &&
                  "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset focus-visible:ring-offset-0",
                J,
              )),
              (A[12] = J),
              (A[13] = ee),
              (A[14] = ei),
              (A[15] = O),
              (A[16] = et),
              (A[17] = ed),
              (A[18] = c))
            : (c = A[18])
          let eu = ee ? "true" : void 0,
            eg = null == B ? O : void 0,
            em = null == B ? es : void 0
          A[19] !== V || A[20] !== O || A[21] !== ea || A[22] !== B
            ? ((g =
                null == B || V
                  ? null
                  : (0, s.jsx)(r.N_, {
                      className:
                        "absolute inset-0 cursor-interaction rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-inset",
                      "aria-labelledby": ea,
                      to: B,
                      onClick: O,
                      onAuxClick: (e) => {
                        1 === e.button && O?.(e)
                      },
                    })),
              (A[19] = V),
              (A[20] = O),
              (A[21] = ea),
              (A[22] = B),
              (A[23] = g))
            : (g = A[23])
          let ep = en ? "gap-4" : "gap-3",
            eh = null != B && "pointer-events-none",
            ef = "catalog" === et ? "items-start" : "items-center",
            ex = "inline" === $ && "gap-2"
          A[24] !== ep || A[25] !== eh || A[26] !== ef || A[27] !== ex
            ? ((m = (0, o.A)("flex", ep, eh, ef, ex)),
              (A[24] = ep),
              (A[25] = eh),
              (A[26] = ef),
              (A[27] = ex),
              (A[28] = m))
            : (m = A[28])
          let ev = "outside" === X ? er : null,
            ey = eo && "items-center",
            eb = eo && (en ? "gap-4" : "gap-3")
          A[29] !== ey || A[30] !== eb
            ? ((p = (0, o.A)("flex min-w-0 flex-1", ey, eb)), (A[29] = ey), (A[30] = eb), (A[31] = p))
            : (p = A[31])
          let e_ = "stacked" === $ ? "flex-col" : "items-center gap-3"
          A[32] !== S || A[33] !== e_
            ? ((h = (0, o.A)("flex min-w-0 flex-1 justify-center gap-0.5", e_, S)),
              (A[32] = S),
              (A[33] = e_),
              (A[34] = h))
            : (h = A[34])
          let ej = "inline" === $ && "w-28 shrink-0 sm:w-48",
            eC = eo || "inline" === X ? null : "justify-between"
          A[35] !== ej || A[36] !== eC
            ? ((f = (0, o.A)("flex min-w-0 items-center gap-2", ej, eC)), (A[35] = ej), (A[36] = eC), (A[37] = f))
            : (f = A[37])
          let ew = "inline" === X ? er : null,
            ek = en ? "min-w-0 text-lg leading-6 wrap-break-word" : "truncate",
            ez = ei ? "text-[length:var(--detail-row-font-size,var(--text-base))]" : "font-medium",
            eA = "catalog" === et && "text-base font-semibold"
          ;(A[38] !== ek || A[39] !== ez || A[40] !== eA
            ? ((x = (0, o.A)("text-default", ek, ez, eA)), (A[38] = ek), (A[39] = ez), (A[40] = eA), (A[41] = x))
            : (x = A[41]),
            A[42] !== x || A[43] !== T || A[44] !== ea
              ? ((v = (0, s.jsx)("div", { id: ea, className: x, children: T })),
                (A[42] = x),
                (A[43] = T),
                (A[44] = ea),
                (A[45] = v))
              : (v = A[45]),
            A[46] !== L || A[47] !== B
              ? ((y = L?.length
                  ? (0, s.jsx)("div", {
                      className: (0, o.A)(
                        "flex shrink-0 items-center gap-1",
                        null != B && "pointer-events-auto relative z-10",
                      ),
                      children: L.map(u),
                    })
                  : null),
                (A[46] = L),
                (A[47] = B),
                (A[48] = y))
              : (y = A[48]),
            A[49] !== v || A[50] !== y
              ? ((b = (0, s.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [v, y] })),
                (A[49] = v),
                (A[50] = y),
                (A[51] = b))
              : (b = A[51]))
          let eM = eo ? null : el
          ;(A[52] !== f || A[53] !== ew || A[54] !== b || A[55] !== eM
            ? ((_ = (0, s.jsxs)("div", { className: f, children: [ew, b, eM] })),
              (A[52] = f),
              (A[53] = ew),
              (A[54] = b),
              (A[55] = eM),
              (A[56] = _))
            : (_ = A[56]),
            A[57] !== P || A[58] !== G || A[59] !== $ || A[60] !== en
              ? ((j = P
                  ? (0, s.jsx)("div", {
                      className: (0, o.A)(
                        "text-secondary",
                        en ? "truncate text-suggestion-description" : "text-sm leading-relaxed",
                        "inline" === $ ? "min-w-0 flex-1 truncate text-start" : null,
                        G ?? (!en && "line-clamp-3"),
                      ),
                      children: P,
                    })
                  : null),
                (A[57] = P),
                (A[58] = G),
                (A[59] = $),
                (A[60] = en),
                (A[61] = j))
              : (j = A[61]),
            A[62] !== h || A[63] !== _ || A[64] !== j
              ? ((C = (0, s.jsxs)("div", { className: h, children: [_, j] })),
                (A[62] = h),
                (A[63] = _),
                (A[64] = j),
                (A[65] = C))
              : (C = A[65]))
          let eN = eo ? el : null
          return (
            A[66] !== p || A[67] !== C || A[68] !== eN
              ? ((w = (0, s.jsxs)("div", { className: p, children: [C, eN] })),
                (A[66] = p),
                (A[67] = C),
                (A[68] = eN),
                (A[69] = w))
              : (w = A[69]),
            A[70] !== m || A[71] !== ev || A[72] !== w || A[73] !== E
              ? ((k = (0, s.jsxs)("div", { className: m, children: [ev, w, E] })),
                (A[70] = m),
                (A[71] = ev),
                (A[72] = w),
                (A[73] = E),
                (A[74] = k))
              : (k = A[74]),
            A[75] !== M ||
            A[76] !== ec ||
            A[77] !== c ||
            A[78] !== eu ||
            A[79] !== eg ||
            A[80] !== em ||
            A[81] !== g ||
            A[82] !== k ||
            A[83] !== F
              ? ((z = (0, s.jsxs)(d, {
                  ref: M,
                  disabled: ec,
                  tooltip: F,
                  className: c,
                  "data-search-result-active": eu,
                  onClick: eg,
                  onKeyDown: em,
                  children: [g, k],
                })),
                (A[75] = M),
                (A[76] = ec),
                (A[77] = c),
                (A[78] = eu),
                (A[79] = eg),
                (A[80] = em),
                (A[81] = g),
                (A[82] = k),
                (A[83] = F),
                (A[84] = z))
              : (z = A[84]),
            z
          )
        },
      },
    )
  },
  jaeI(e, t, a) {
    function s(e, t) {
      return e?.structure === "workspace" && "quorum" !== e.plan_type && t
    }
    a.d(
      t,
      {},
      {
        J: function (e, t, a) {
          return null != e && (!s(e, t) || a?.includes("chatgpt.workspace_plugins.use") === !0)
        },
        l: s,
      },
    )
  },
  yLkT(e, t, a) {
    let s = (0, a("ESTr").a)({
      name: "plugin-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 2.574219, y: 2.304688, width: 19.347351, height: 19.389648 },
        visualBounds: { x: 2.574219, y: 2.304688, width: 19.347351, height: 19.389648 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 2.574219, y: 2.304688, width: 19.347351, height: 19.389648 },
        center: { x: 12.247895, y: 11.999512 },
        insets: { top: 2.304688, right: 2.07843, bottom: 2.305664, left: 2.574219 },
        anchors: {
          frame: { x: 12, y: 12 },
          ink: { x: 12.247895, y: 11.999512 },
          foreground: { x: 12.247895, y: 11.999512 },
        },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6257 2.30469C18.8374 2.30503 21.9216 6.88615 21.9216 11.0254C21.9215 12.7845 21.1877 14.5709 19.8923 15.6016C19.2023 16.1504 18.3817 16.459 17.4967 16.459C16.7049 16.459 15.8832 16.2131 15.0593 15.709C14.2555 16.3572 13.2769 16.8021 12.2306 16.8021C11.2525 16.8021 10.3076 16.4103 9.52802 15.6006L9.5124 15.585L8.98212 15.0254C8.67133 14.698 8.28105 14.2874 7.96162 13.9541C7.77577 13.7602 7.68342 13.5108 7.68342 13.2618C7.68342 12.9993 7.78604 12.7373 7.98994 12.541L8.27998 12.2607L7.11005 11.0537C6.96924 10.9082 6.89922 10.7202 6.89922 10.5324C6.89922 10.1179 7.23461 9.78236 7.64893 9.78236C7.84508 9.78236 8.04102 9.85877 8.18818 10.0107L9.36005 11.2217L11.5808 9.08398L10.4108 7.87695C10.27 7.73141 10.2 7.54346 10.2 7.35569C10.2 6.94116 10.5354 6.60561 10.9497 6.60561C11.1459 6.60561 11.3418 6.68201 11.489 6.83398L12.6608 8.04492C12.9809 7.73729 13.1873 7.47552 13.6557 7.47552C13.92 7.47552 14.1839 7.57957 14.3806 7.78613L15.945 9.42871C16.7005 10.2066 17.0634 11.1086 17.0634 12.0331C17.0634 12.9728 16.6913 13.8503 16.1354 14.5947C16.6442 14.8563 17.1006 14.959 17.4971 14.959C18.042 14.959 18.5348 14.765 18.9587 14.4277C19.8308 13.7338 20.4215 12.4183 20.4216 11.0254C20.4216 7.614 17.9118 3.80502 12.6257 3.80469C8.211 3.80469 4.39325 7.17775 4.09638 11.4287C4.0813 11.6447 4.07385 11.8592 4.07385 12.0718C4.07385 16.5377 7.36061 20.1942 12.2477 20.1943C14.1885 20.1943 16.1114 19.7093 17.4489 18.6738C17.5856 18.5681 17.7473 18.5169 17.9079 18.5169C18.3231 18.5169 18.6582 18.8523 18.6582 19.2655C18.6582 19.4901 18.5579 19.7124 18.3669 19.8604C16.6819 21.1647 14.3949 21.6943 12.2477 21.6943C6.47809 21.6942 2.57422 17.3134 2.57422 12.0689C2.57422 11.8224 2.58284 11.5741 2.60029 11.3242C2.95645 6.22419 7.48801 2.30469 12.6257 2.30469ZM9.38837 13.2773L10.571 14.5215L10.612 14.5645C11.1155 15.0854 11.6718 15.3017 12.2302 15.3017C12.2917 15.3017 12.3533 15.2991 12.4147 15.2939C13.0586 15.2401 13.7692 14.9031 14.4265 14.2705C15.0246 13.6947 15.5635 12.8942 15.5635 12.0337C15.5635 11.513 15.3636 10.9806 14.8659 10.4697L14.8591 10.4619L13.6403 9.18457L9.38837 13.2773Z" fill="currentColor"/>',
    })
    a.d(t, {}, { k: s })
  },
}
//# sourceMappingURL=716164.ffe4a964da.js.map
