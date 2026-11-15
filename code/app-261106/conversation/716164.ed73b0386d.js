export const __rspack_esm_ids = [716164]
export const __webpack_modules__ = {
  nBWL(e, t, i) {
    i.d(t, { x: () => es })
    var a = i("ABep"),
      n = i("QosV"),
      s = i("slpy"),
      o = i("qlwg"),
      r = i("T0Rc"),
      l = i("dMO9"),
      c = i.n(l),
      d = i("i5ac"),
      g = i.n(d),
      u = i("zTeN"),
      p = i("zd8w"),
      m = i("oyxz"),
      h = i("Wf1j"),
      f = i("Qgfj"),
      b = i("Ghh3"),
      x = i("Sm6l"),
      y = i("JNtf"),
      v = i("bqtn"),
      w = i("HOLv"),
      _ = i("bVeK"),
      C = i("RNul"),
      j = i("SGsN"),
      T = i("Jqpj"),
      P = i("OWtl"),
      G = i("hZax"),
      k = i("aepO"),
      z = i("rvFo"),
      A = i("wwvo"),
      M = i("lcic"),
      N = i("pjm8"),
      S = i("HZfM"),
      I = i("eFn4"),
      L = i("EOo5"),
      U = i("OAko"),
      D = i("zKCW"),
      E = i("Bbed"),
      B = i("X6Vn"),
      O = i("jaeI"),
      q = i("JYRT"),
      F = i("DY7H"),
      R = i("bMrQ"),
      K = i("gNqU"),
      Z = i("g2DC"),
      H = i("hfkq"),
      W = i("slBk")
    let J = (0, E._)(
      async () => (await Promise.all([i.e(312708), i.e(57588)]).then(i.bind(i, "uC11"))).GptPluginMigrationDialog,
    )
    function Y(e) {
      let t,
        i,
        s = (0, n.c)(14),
        { resource: o, onClose: r, onStartChat: l } = e,
        c = (0, G.Zj)("2160578039")
      s[0] !== o.gizmo.id || s[1] !== o.gizmo.migrated_plugin_id
        ? ((t = { gizmoId: o.gizmo.id, pluginId: o.gizmo.migrated_plugin_id }),
          (s[0] = o.gizmo.id),
          (s[1] = o.gizmo.migrated_plugin_id),
          (s[2] = t))
        : (t = s[2])
      let d = (0, u._U)(H.f, t),
        g = c && !d && "gpt" === o.gizmo.gizmo_type ? o.gizmo.migrated_plugin_id : null
      if (null != g) {
        let e
        return (
          s[3] !== r || s[4] !== l || s[5] !== g || s[6] !== o
            ? ((e = (0, a.jsx)($, { resource: o, pluginId: g, onClose: r, onStartChat: l })),
              (s[3] = r),
              (s[4] = l),
              (s[5] = g),
              (s[6] = o),
              (s[7] = e))
            : (e = s[7]),
          e
        )
      }
      return 0 !== o.gizmo.live_version || d
        ? (s[8] !== c || s[9] !== r || s[10] !== l || s[11] !== d || s[12] !== o
            ? ((i = c
                ? (0, a.jsx)(V, { resource: o, remigration: d, onClose: r, onStartChat: l })
                : (0, a.jsx)(Q, { onClick: () => l(o) })),
              (s[8] = c),
              (s[9] = r),
              (s[10] = l),
              (s[11] = d),
              (s[12] = o),
              (s[13] = i))
            : (i = s[13]),
          i)
        : null
    }
    function $(e) {
      let t,
        i,
        s,
        o,
        r,
        l,
        c,
        d,
        g,
        p,
        h,
        f,
        b = (0, n.c)(41),
        { resource: y, pluginId: v, onClose: _, onStartChat: C } = e,
        j = (0, u.gh)(P.u),
        T = (0, S.Zp)(),
        { data: G, isPending: k, isFetching: z, isError: A, refetch: M } = (0, u._U)(R.B, v),
        I = k || z,
        L = null != G && !I && !A
      b[0] !== y.gizmo.display.name
        ? ((t = y.gizmo.display.name.trim()), (b[0] = y.gizmo.display.name), (b[1] = t))
        : (t = b[1])
      let U = t
      if (A && !I) {
        let e
        ;(b[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.about.retryPluginAccess",
              defaultMessage: "Try again",
              description: "Retry checking the current viewer’s access to the migrated plugin",
            })),
            (b[2] = e))
          : (e = b[2]),
          (i = e))
      } else if (G?.type === "admin") {
        let e
        ;(b[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.viewPlugin",
              defaultMessage: "View Plugin",
              description:
                "Button that opens a migrated plugin in workspace admin settings for an administrator who cannot open its ordinary plugin details; does not start a chat",
            })),
            (b[3] = e))
          : (e = b[3]),
          (i = e))
      } else if (I || L) {
        let e
        ;(b[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.about.usePlugin",
              defaultMessage: "Use plugin",
              description:
                "Primary button in a migrated GPT's directory details dialog; closes the dialog and opens the migrated plugin's details without installing or running it",
            })),
            (b[4] = e))
          : (e = b[4]),
          (i = e))
      } else {
        let e
        ;(b[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.about.explorePlugins",
              defaultMessage: "Explore plugins",
              description:
                "Button in a migrated GPT's directory details dialog when its plugin is inaccessible; closes the dialog and opens the Plugins directory",
            })),
            (b[5] = e))
          : (e = b[5]),
          (i = e))
      }
      if (A) {
        let e
        ;(b[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.about.pluginAccessError",
              defaultMessage: "We couldn’t check your access to this plugin. Try again.",
              description: "A failed access lookup for a migrated GPT plugin; retry does not migrate again",
            })),
            (b[6] = e))
          : (e = b[6]),
          (s = e))
      } else if (I || L)
        if (G?.type === "admin") {
          let e
          ;(b[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.about.migratedAdminDescription",
                defaultMessage: "This GPT has been migrated. You can view the plugin in workspace admin settings",
                description:
                  "Notice in migrated GPT details for an administrator whose access opens the admin page, which does not offer starting a plugin chat",
              })),
              (b[8] = e))
            : (e = b[8]),
            (s = e))
        } else if (U) {
          let e
          ;(b[9] !== U
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.about.migratedDescriptionNamed",
                defaultMessage: "This GPT has been migrated. Use the plugin to continue using {gptName}.",
                description:
                  "Notice in a migrated GPT details dialog directing users to its plugin. gptName is the GPT display name.",
                values: { gptName: U },
              })),
              (b[9] = U),
              (b[10] = e))
            : (e = b[10]),
            (s = e))
        } else {
          let e
          ;(b[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(m.A, {
                id: "chatgptConversations.gpts.about.migratedDescription",
                defaultMessage: "This GPT has been migrated. Use the plugin to continue using it.",
                description:
                  "Notice in a migrated GPT details dialog directing users to its plugin when the GPT name is empty.",
              })),
              (b[11] = e))
            : (e = b[11]),
            (s = e))
        }
      else {
        let e
        ;(b[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.about.pluginAccessDenied",
              defaultMessage: "This plugin isn’t available to you",
              description: "Migrated GPT details when the plugin is inaccessible to this viewer",
            })),
            (b[7] = e))
          : (e = b[7]),
          (s = e))
      }
      return (
        b[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, a.jsx)(w.I, { asset: N.k, className: "text-secondary" })), (b[12] = o))
          : (o = b[12]),
        b[13] !== U
          ? ((r = U
              ? (0, a.jsx)(m.A, {
                  id: "chatgptConversations.gpts.about.migratedNamedTitle",
                  defaultMessage: "{gptName} is now a plugin",
                  description:
                    "Heading in a GPT directory details dialog when it has been migrated to a plugin; gptName is the GPT's nonempty display name and may be long",
                  values: { gptName: U },
                })
              : (0, a.jsx)(m.A, {
                  id: "chatgptConversations.gpts.about.migratedTitle",
                  defaultMessage: "This GPT is now a plugin",
                  description:
                    "Fallback heading in a GPT directory details dialog when it has been migrated to a plugin but has no display name",
                })),
            (b[13] = U),
            (b[14] = r))
          : (r = b[14]),
        b[15] !== s || b[16] !== r
          ? ((l = (0, a.jsx)(D.l, { variant: "catalog", icon: o, title: r, content: s })),
            (b[15] = s),
            (b[16] = r),
            (b[17] = l))
          : (l = b[17]),
        b[18] !== L ||
        b[19] !== G ||
        b[20] !== A ||
        b[21] !== T ||
        b[22] !== _ ||
        b[23] !== v ||
        b[24] !== M ||
        b[25] !== j
          ? ((c = () => {
              A ? M() : (_(), L ? (0, R.y)(j, v, G, T) : T("/plugins"))
            }),
            (b[18] = L),
            (b[19] = G),
            (b[20] = A),
            (b[21] = T),
            (b[22] = _),
            (b[23] = v),
            (b[24] = M),
            (b[25] = j),
            (b[26] = c))
          : (c = b[26]),
        b[27] !== I || b[28] !== i || b[29] !== c
          ? ((d = (0, a.jsx)(x.$, {
              className: "w-full",
              color: "primary",
              loading: I,
              size: "promotionalAction",
              onClick: c,
              children: i,
            })),
            (b[27] = I),
            (b[28] = i),
            (b[29] = c),
            (b[30] = d))
          : (d = b[30]),
        b[31] !== C || b[32] !== y ? ((g = () => C(y)), (b[31] = C), (b[32] = y), (b[33] = g)) : (g = b[33]),
        b[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.about.keepUsingGpt",
              defaultMessage: "Keep using GPT",
              description:
                "Secondary action in a migrated GPT details dialog that opens a chat with the original GPT instead of its plugin",
            })),
            (b[34] = p))
          : (p = b[34]),
        b[35] !== g
          ? ((h = (0, a.jsx)(x.$, {
              className: "w-full",
              color: "ghostSecondary",
              size: "promotionalLink",
              onClick: g,
              children: p,
            })),
            (b[35] = g),
            (b[36] = h))
          : (h = b[36]),
        b[37] !== l || b[38] !== d || b[39] !== h
          ? ((f = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [l, d, h] })),
            (b[37] = l),
            (b[38] = d),
            (b[39] = h),
            (b[40] = f))
          : (f = b[40]),
        f
      )
    }
    function V(e) {
      let t,
        i,
        o,
        r,
        l,
        c,
        d,
        g,
        p,
        f,
        b,
        y,
        v,
        _ = (0, n.c)(49),
        { resource: C, remigration: j, onClose: T, onStartChat: k } = e,
        z = (0, u.gh)(P.u),
        A = (0, S.Zp)(),
        M = (0, h.A)(),
        E = (0, G.Fj)("2513446768")
      _[0] !== E || _[1] !== M
        ? ((t = M.formatDate((0, W.l)(E.get("retirement_date", "")), {
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })),
          (_[0] = E),
          (_[1] = M),
          (_[2] = t))
        : (t = _[2])
      let R = t,
        { accountId: H, userId: Y } = (0, L.As)()
      _[3] === Symbol.for("react.memo_cache_sentinel") ? ((i = { preview: !1 }), (_[3] = i)) : (i = _[3])
      let { data: $ } = (0, U.YL)(void 0, i),
        V = (0, u._U)(q.X, "2562735250")?.get("enabled", !1) === !0,
        X = (0, O.l)($, (0, G.Zj)("1355972088")),
        ee = (0, G.Fj)("2826703856").get("enable_gpt_fe_controls", !1),
        {
          data: et,
          isPending: ei,
          isError: ea,
        } = (0, u._U)(I.Jk, H ?? "", { enabled: null != H && $?.id === H && "workspace" === $.structure && (X || ee) })
      if (
        V &&
        X &&
        !ea &&
        (0, F.rP)({
          resource: C,
          remigration: j,
          account: $,
          accountId: H,
          permissions: et?.permissions,
          rbacEnabled: X,
        })
      ) {
        let e, t
        return (
          _[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(K.E_, { surface: "gpt" })), (_[4] = e))
            : (e = _[4]),
          _[5] !== k || _[6] !== C
            ? ((t = (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [e, (0, a.jsx)(Q, { onClick: () => k(C) })],
              })),
              (_[5] = k),
              (_[6] = C),
              (_[7] = t))
            : (t = _[7]),
          t
        )
      }
      if (!V || !(0, F.l5)({ resource: C, remigration: j, account: $, accountId: H, userId: Y, enabled: !0 })) {
        let e, t, i
        return (
          _[8] !== A || _[9] !== T
            ? ((e = (0, a.jsx)(K.Xn, {
                currentGpt: !0,
                openTarget: "external-browser",
                onExplore: () => {
                  ;(T(), A("/plugins"))
                },
              })),
              (_[8] = A),
              (_[9] = T),
              (_[10] = e))
            : (e = _[10]),
          _[11] !== k || _[12] !== C
            ? ((t = (0, a.jsx)(Q, { onClick: () => k(C) })), (_[11] = k), (_[12] = C), (_[13] = t))
            : (t = _[13]),
          _[14] !== e || _[15] !== t
            ? ((i = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [e, t] })),
              (_[14] = e),
              (_[15] = t),
              (_[16] = i))
            : (i = _[16]),
          i
        )
      }
      let en = (0, F.T8)({ account: $, rbacEnabled: ee, permissions: et?.permissions, isPending: ei, isError: ea }),
        es = (0, F.l2)({
          resource: C,
          remigration: j,
          account: $,
          accountId: H,
          userId: Y,
          enabled: !0,
          gptPermission: en,
        }),
        eo = (0, O.J)($, X, et?.permissions)
      if ("allowed" !== en) {
        let e
        ;(_[17] !== en ? ((e = (0, a.jsx)(Z.M, { permission: en })), (_[17] = en), (_[18] = e)) : (e = _[18]), (o = e))
      } else if (!eo) {
        let e
        ;(_[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.permissionRequired",
              defaultMessage: "Your workspace must allow you to use plugins to migrate this GPT",
              description:
                "Tooltip on a disabled GPT migration button for workspace users without permission to use plugins, or while that permission is loading",
            })),
            (_[19] = e))
          : (e = _[19]),
          (o = e))
      }
      ;(_[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, a.jsx)(w.I, { asset: N.k, className: "text-secondary" })), (_[20] = r))
        : (r = _[20]),
        _[21] !== R
          ? ((l = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.about.migrateTitle",
              defaultMessage: "Migrate this GPT to a plugin by {deadline}",
              description:
                "Banner in a GPT details dialog for its eligible creator or administrator; deadline is the localized month and day when unmigrated GPTs retire.",
              values: { deadline: R },
            })),
            (_[21] = R),
            (_[22] = l))
          : (l = _[22]),
        _[23] !== R
          ? ((c = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.about.migrateDescription.editingLocked",
              defaultMessage:
                "Migrate to a plugin so people can keep using it after {deadline}. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.",
              description:
                "Body of the migration notice in a GPT details dialog, shown to the GPT creator or an eligible workspace administrator or owner before migration. Explains that migration preserves access through a plugin after GPT retirement, prevents further edits to the original GPT, and allows future updates to the plugin. Placeholder {deadline} is a nonempty, localized UTC month and day with no year, such as December 11. The Migrate to plugin button below opens confirmation; the separate Start chat button keeps using the original GPT. These three complete sentences can wrap onto multiple lines.",
              values: { deadline: R },
            })),
            (_[23] = R),
            (_[24] = c))
          : (c = _[24]),
        _[25] !== l || _[26] !== c
          ? ((d = (0, a.jsx)(D.l, { variant: "announcement", icon: r, title: l, content: c })),
            (_[25] = l),
            (_[26] = c),
            (_[27] = d))
          : (d = _[27]))
      let er = !eo || !es
      return (
        _[28] !== es || _[29] !== eo || _[30] !== T || _[31] !== j || _[32] !== C || _[33] !== z
          ? ((g = () => {
              es && eo && (T(), (0, B.qf)(z, J, { resource: C, remigration: j }))
            }),
            (_[28] = es),
            (_[29] = eo),
            (_[30] = T),
            (_[31] = j),
            (_[32] = C),
            (_[33] = z),
            (_[34] = g))
          : (g = _[34]),
        _[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.migrate",
              defaultMessage: "Migrate to plugin",
              description:
                "Button in GPT details shown to its eligible owner or workspace administrator; opens a confirmation dialog to create a private plugin from the published GPT",
            })),
            (_[35] = p))
          : (p = _[35]),
        _[36] !== er || _[37] !== g
          ? ((f = (0, a.jsx)(x.$, {
              className: "w-full",
              "aria-disabled": er,
              color: "primary",
              size: "detailAction",
              onClick: g,
              children: p,
            })),
            (_[36] = er),
            (_[37] = g),
            (_[38] = f))
          : (f = _[38]),
        _[39] !== o || _[40] !== f
          ? ((b = (0, a.jsx)(s.m, { content: o, children: f })), (_[39] = o), (_[40] = f), (_[41] = b))
          : (b = _[41]),
        _[42] !== k || _[43] !== C
          ? ((y = (0, a.jsx)(Q, { secondary: !0, onClick: () => k(C) })), (_[42] = k), (_[43] = C), (_[44] = y))
          : (y = _[44]),
        _[45] !== b || _[46] !== y || _[47] !== d
          ? ((v = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [d, b, y] })),
            (_[45] = b),
            (_[46] = y),
            (_[47] = d),
            (_[48] = v))
          : (v = _[48]),
        v
      )
    }
    function Q(e) {
      let t,
        i,
        s = (0, n.c)(8),
        { secondary: o, onClick: r } = e,
        l = void 0 !== o && o,
        c = l ? "self-center" : "h-12 w-full justify-center",
        d = l ? "ghostSecondary" : "primary",
        g = l ? "dialogGhost" : "large"
      return (
        s[0] !== l
          ? ((t = l
              ? (0, a.jsx)("span", {
                  className: "underline decoration-from-font underline-offset-2",
                  children: (0, a.jsx)(m.A, {
                    id: "chatgptConversations.gpts.about.startChatLink",
                    defaultMessage: "Start chat",
                    description:
                      "Secondary text action below the migration notice in a GPT details dialog; starts a new chat with the original GPT.",
                  }),
                })
              : (0, a.jsxs)(a.Fragment, {
                  children: [
                    (0, a.jsx)(_.VhP, {}),
                    (0, a.jsx)(m.A, {
                      id: "chatgptConversations.gpts.about.startChat",
                      defaultMessage: "Start Chat",
                      description:
                        "Button in the GPT store detail dialog that starts a new chat with the selected GPT; appears below migration when that action is available",
                    }),
                  ],
                })),
            (s[0] = l),
            (s[1] = t))
          : (t = s[1]),
        s[2] !== r || s[3] !== c || s[4] !== d || s[5] !== g || s[6] !== t
          ? ((i = (0, a.jsx)(x.$, { className: c, color: d, radius: "full", size: g, onClick: r, children: t })),
            (s[2] = r),
            (s[3] = c),
            (s[4] = d),
            (s[5] = g),
            (s[6] = t),
            (s[7] = i))
          : (i = s[7]),
        i
      )
    }
    function X(e) {
      let t,
        i,
        s,
        o,
        l,
        c = (0, n.c)(12),
        { accountId: d, gizmoId: g } = e
      ;(c[0] !== d || c[1] !== g
        ? ((t = ["chatgpt-gizmos", "about", d, g]), (c[0] = d), (c[1] = g), (c[2] = t))
        : (t = c[2]),
        c[3] !== g
          ? ((i = (e) => {
              let { signal: t } = e
              return b.Request.safeGet("/gizmos/{gizmo_id}/about", { parameters: { path: { gizmo_id: g } }, signal: t })
            }),
            (c[3] = g),
            (c[4] = i))
          : (i = c[4]),
        c[5] !== t || c[6] !== i
          ? ((s = { queryKey: t, queryFn: i, staleTime: z.D.ONE_MINUTE }), (c[5] = t), (c[6] = i), (c[7] = s))
          : (s = c[7]))
      let { data: u } = (0, r.I)(s)
      return null == u || 0 === u.about_blocks.length
        ? null
        : (c[8] !== u.about_blocks ? ((o = u.about_blocks.map(ee)), (c[8] = u.about_blocks), (c[9] = o)) : (o = c[9]),
          c[10] !== o
            ? ((l = (0, a.jsx)("div", { className: "mt-4 flex flex-wrap justify-center gap-6", children: o })),
              (c[10] = o),
              (c[11] = l))
            : (l = c[11]),
          l)
    }
    function ee(e) {
      return (0, a.jsx)(et, { block: e }, e.type)
    }
    function et(e) {
      let t,
        i,
        s,
        o,
        r,
        l = (0, n.c)(17),
        { block: c } = e
      switch (c.type) {
        case "generic_title_subtitle":
          ;((t = c.title), (i = c.subtitle))
          break
        case "rating": {
          let e, n
          ;(l[0] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, a.jsx)(_.DYF, {})), (l[0] = e)) : (e = l[0]),
            l[1] !== c.avg
              ? ((n = (0, a.jsxs)(a.Fragment, { children: [e, c.avg] })), (l[1] = c.avg), (l[2] = n))
              : (n = l[2]),
            (t = n),
            (i = c.count_str))
          break
        }
        case "category": {
          let e, n
          ;(l[3] !== c.category_ranking || l[4] !== c.category_str
            ? ((e =
                null == c.category_ranking
                  ? c.category_str
                  : (0, a.jsx)(m.A, {
                      id: "chatgptConversations.gpts.about.categoryRank",
                      defaultMessage: "#{rank}",
                      description: "Trending rank displayed in the GPT directory About modal",
                      values: { rank: c.category_ranking },
                    })),
              (l[3] = c.category_ranking),
              (l[4] = c.category_str),
              (l[5] = e))
            : (e = l[5]),
            (t = e),
            l[6] !== c.category_locale_str || l[7] !== c.category_ranking || l[8] !== c.category_str
              ? ((n =
                  null == c.category_ranking
                    ? (0, a.jsx)(m.A, {
                        id: "chatgptConversations.gpts.about.category",
                        defaultMessage: "Category",
                        description: "Caption below the GPT category in the directory About modal",
                      })
                    : (0, a.jsx)(m.A, {
                        id: "chatgptConversations.gpts.about.rankedCategory",
                        defaultMessage: "in {category} {locale}",
                        description: "Caption below a GPT's trending rank, identifying its category and locale",
                        values: { category: c.category_str, locale: c.category_locale_str ?? "" },
                      })),
                (l[6] = c.category_locale_str),
                (l[7] = c.category_ranking),
                (l[8] = c.category_str),
                (l[9] = n))
              : (n = l[9]),
            (i = n))
          break
        }
        case void 0:
          return null
      }
      return (
        l[10] !== t
          ? ((s = (0, a.jsx)("div", { className: "flex items-center gap-2 heading-md text-default", children: t })),
            (l[10] = t),
            (l[11] = s))
          : (s = l[11]),
        l[12] !== i
          ? ((o = (0, a.jsx)("div", { className: "text-xs text-secondary", children: i })), (l[12] = i), (l[13] = o))
          : (o = l[13]),
        l[14] !== s || l[15] !== o
          ? ((r = (0, a.jsxs)("div", { className: "flex flex-col items-center gap-2 text-center", children: [s, o] })),
            (l[14] = s),
            (l[15] = o),
            (l[16] = r))
          : (r = l[16]),
        r
      )
    }
    var ei = i("E4rW"),
      ea = i("H7Nt"),
      en = i("T4c2")
    function es(e) {
      let t,
        i = (0, n.c)(14),
        { accountId: s, gizmo: o, isOwnerAndWorkspaceAllowsSpecific: r, onClose: l, onStartChat: c } = e,
        d = (0, G.Zj)("2160578039"),
        g = null
      "string" == typeof o ? (g = o) : d && (g = o.gizmo.id)
      let { data: p, isError: h, refetch: f } = (0, u._U)(A.os, g),
        b = p ?? ("string" == typeof o ? void 0 : o)
      if (null == b) {
        let e, t, n
        return (
          i[0] !== l
            ? ((e = (e) => {
                e || l()
              }),
              (i[0] = l),
              (i[1] = e))
            : (e = i[1]),
          i[2] !== h || i[3] !== f
            ? ((t = (0, a.jsx)("div", {
                className:
                  "flex h-full min-h-80 flex-col items-center justify-center gap-4 bg-surface-secondary p-8 text-center",
                children: h
                  ? (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(y.L3, {
                          className: "heading-lg font-semibold text-default",
                          children: (0, a.jsx)(m.A, {
                            id: "chatgptConversations.gpts.about.loadError",
                            defaultMessage: "Couldn't load this GPT",
                            description: "Error title shown when a GPT store detail dialog cannot load its GPT",
                          }),
                        }),
                        (0, a.jsx)(y.rr, {
                          className: "text-secondary",
                          children: (0, a.jsx)(m.A, {
                            id: "chatgptConversations.gpts.about.loadErrorDescription",
                            defaultMessage: "Check your connection and try again.",
                            description: "Error description shown when a GPT store detail dialog cannot load its GPT",
                          }),
                        }),
                        (0, a.jsx)(x.$, {
                          color: "secondary",
                          onClick: () => {
                            f()
                          },
                          children: (0, a.jsx)(m.A, {
                            id: "chatgptConversations.gpts.about.retry",
                            defaultMessage: "Try again",
                            description: "Button label for retrying a failed GPT store detail request",
                          }),
                        }),
                      ],
                    })
                  : (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsx)(y.L3, {
                          className: "sr-only",
                          children: (0, a.jsx)(m.A, {
                            id: "chatgptConversations.gpts.about.loading",
                            defaultMessage: "Loading GPT details",
                            description: "Accessible title while a GPT store detail dialog is loading",
                          }),
                        }),
                        (0, a.jsx)(y.rr, {
                          className: "sr-only",
                          children: (0, a.jsx)(m.A, {
                            id: "chatgptConversations.gpts.about.loadingDescription",
                            defaultMessage: "Loading information about this GPT",
                            description: "Accessible description while a GPT store detail dialog is loading",
                          }),
                        }),
                        (0, a.jsx)(C.y, {}),
                      ],
                    }),
              })),
              (i[2] = h),
              (i[3] = f),
              (i[4] = t))
            : (t = i[4]),
          i[5] !== e || i[6] !== t
            ? ((n = (0, a.jsx)(y.lG, {
                open: !0,
                contentClassName: "flex flex-col",
                size: "editor",
                variant: "chatgpt",
                onOpenChange: e,
                children: t,
              })),
              (i[5] = e),
              (i[6] = t),
              (i[7] = n))
            : (n = i[7]),
          n
        )
      }
      return (
        i[8] !== s || i[9] !== r || i[10] !== l || i[11] !== c || i[12] !== b
          ? ((t = (0, a.jsx)(eo, {
              accountId: s,
              isOwnerAndWorkspaceAllowsSpecific: r,
              resource: b,
              onClose: l,
              onStartChat: c,
            })),
            (i[8] = s),
            (i[9] = r),
            (i[10] = l),
            (i[11] = c),
            (i[12] = b),
            (i[13] = t))
          : (t = i[13]),
        t
      )
    }
    function eo(e) {
      let t,
        i,
        l,
        d,
        f,
        C,
        T,
        N,
        S,
        I,
        L,
        U,
        D,
        E,
        B,
        O,
        q,
        F,
        R,
        K,
        Z,
        W,
        J,
        $,
        V,
        Q,
        ee,
        et,
        es,
        eo = (0, n.c)(145),
        { accountId: eg, isOwnerAndWorkspaceAllowsSpecific: eu, resource: ep, onClose: em, onStartChat: eh } = e,
        ef = (0, u.gh)(P.u),
        eb = (0, h.A)(),
        ex = (0, G.Zj)("1825130190"),
        ey = (0, G.Zj)("2160578039")
      eo[0] !== ep.gizmo.id || eo[1] !== ep.gizmo.migrated_plugin_id
        ? ((t = { gizmoId: ep.gizmo.id, pluginId: ep.gizmo.migrated_plugin_id }),
          (eo[0] = ep.gizmo.id),
          (eo[1] = ep.gizmo.migrated_plugin_id),
          (eo[2] = t))
        : (t = eo[2])
      let ev = !(0, u._U)(H.f, t) && ey && "gpt" === ep.gizmo.gizmo_type && null != ep.gizmo.migrated_plugin_id,
        [ew, e_] = (0, p.useState)(!1),
        [eC, ej] = (0, p.useState)(!1),
        { data: eT } = (0, u.Ul)(A.kd),
        eP = !ev
      ;(eo[3] !== ep.gizmo.author.user_id
        ? ((i = () =>
            b.Request.safeGet("/gizmo_creators/{uid}/gizmos", {
              parameters: { path: { uid: ep.gizmo.author.user_id } },
            })),
          (eo[3] = ep.gizmo.author.user_id),
          (eo[4] = i))
        : (i = eo[4]),
        eo[5] !== eg || eo[6] !== ep.gizmo.author.user_id
          ? ((l = (0, en.NY)(eg, ep.gizmo.author.user_id)),
            (eo[5] = eg),
            (eo[6] = ep.gizmo.author.user_id),
            (eo[7] = l))
          : (l = eo[7]),
        eo[8] !== eP || eo[9] !== i || eo[10] !== l
          ? ((d = { enabled: eP, queryFn: i, queryKey: l, staleTime: z.D.ONE_MINUTE }),
            (eo[8] = eP),
            (eo[9] = i),
            (eo[10] = l),
            (eo[11] = d))
          : (d = eo[11]))
      let { data: eG, isPending: ek } = (0, r.I)(d)
      eo[12] !== eb
        ? ((f = eb.formatMessage({
            id: "chatgptConversations.gpts.about.actions",
            defaultMessage: "GPT actions",
            description: "Accessible label for the overflow menu in the GPT store detail dialog",
          })),
          (eo[12] = eb),
          (eo[13] = f))
        : (f = eo[13])
      let ez = f
      eo[14] !== ep.gizmo.display.name || eo[15] !== ep.gizmo.id
        ? ((C = ep.gizmo.display.name.trim() || ep.gizmo.id),
          (eo[14] = ep.gizmo.display.name),
          (eo[15] = ep.gizmo.id),
          (eo[16] = C))
        : (C = eo[16])
      let eA = C
      eo[17] !== ep.gizmo.author.display_name
        ? ((T = ep.gizmo.author.display_name?.trim() || void 0), (eo[17] = ep.gizmo.author.display_name), (eo[18] = T))
        : (T = eo[18])
      let eM = T
      eo[19] !== eT || eo[20] !== ep.gizmo.id
        ? ((N = eT?.some((e) => {
            let { item: t } = e
            return t.gizmo.id === ep.gizmo.id
          })),
          (eo[19] = eT),
          (eo[20] = ep.gizmo.id),
          (eo[21] = N))
        : (N = eo[21])
      let eN = N
      if (
        eo[22] !== eg ||
        eo[23] !== ez ||
        eo[24] !== ew ||
        eo[25] !== eM ||
        eo[26] !== eG?.items ||
        eo[27] !== eG?.items.filter ||
        eo[28] !== eb ||
        eo[29] !== ek ||
        eo[30] !== ev ||
        eo[31] !== eu ||
        eo[32] !== eN ||
        eo[33] !== eC ||
        eo[34] !== eA ||
        eo[35] !== em ||
        eo[36] !== eh ||
        eo[37] !== ep ||
        eo[38] !== ex ||
        eo[39] !== ef
      ) {
        let e = g()(c()(ep.tools.map(ed)), el),
          t = eG?.items.filter((e) => {
            let { gizmo: t } = e
            return "snorlax" !== t.gizmo_type && null == (0, ei.m)(t.tags, eu)
          }),
          i = t?.[0]?.gizmo.author.display_name?.trim() || eM
        if (
          eo[56] !== eg ||
          eo[57] !== ez ||
          eo[58] !== ew ||
          eo[59] !== eM ||
          eo[60] !== eb ||
          eo[61] !== ev ||
          eo[62] !== eN ||
          eo[63] !== eC ||
          eo[64] !== eA ||
          eo[65] !== em ||
          eo[66] !== eh ||
          eo[67] !== ep ||
          eo[68] !== ex ||
          eo[69] !== ef
        ) {
          let e,
            t,
            i,
            n,
            r,
            l = ep.gizmo.display.prompt_starters?.slice(0, 4)
          ;((S = y.lG),
            (F = !0),
            (R = "flex max-h-full flex-col"),
            eo[83] !== ez ||
            eo[84] !== ew ||
            eo[85] !== eb ||
            eo[86] !== eN ||
            eo[87] !== eC ||
            eo[88] !== em ||
            eo[89] !== ep ||
            eo[90] !== ef
              ? ((K =
                  0 === ep.gizmo.live_version
                    ? null
                    : (0, a.jsxs)(v.Ab, {
                        align: "end",
                        contentWidth: "menu",
                        open: ew,
                        onOpenChange: e_,
                        side: "bottom",
                        triggerButton: (0, a.jsx)(s.m, {
                          content: ez,
                          disabled: ew,
                          children: (0, a.jsx)(x.$, {
                            "aria-label": ez,
                            color: "ghostActive",
                            size: "icon",
                            uniform: !0,
                            children: (0, a.jsx)(_.e4G, {}),
                          }),
                        }),
                        children: [
                          (0, a.jsxs)(v.ms.Item, {
                            disabled: null == eN,
                            onSelect: () => {
                              null != eN &&
                                (0, A.mJ)(ef, ep, !eN).catch(() => {
                                  ef.get(j.Id).danger(
                                    eb.formatMessage({
                                      id: "chatgptConversations.gpts.about.pinFailed",
                                      defaultMessage: "Couldn't update pinned GPT",
                                      description:
                                        "Error toast shown when pinning or unpinning a GPT from its store detail dialog fails",
                                    }),
                                    { errorAnalytics: { toastId: "chatgptConversations.gpts.about.pinFailed" } },
                                  )
                                })
                            },
                            children: [
                              (0, a.jsx)(v.ms.ItemIcon, {
                                children: eN ? (0, a.jsx)(_.JRw, {}) : (0, a.jsx)(_.Qut, {}),
                              }),
                              eN
                                ? (0, a.jsx)(m.A, {
                                    id: "chatgptConversations.gpts.about.unpin",
                                    defaultMessage: "Remove from sidebar",
                                    description:
                                      "Overflow menu action in the GPT store detail dialog that removes the GPT from the sidebar",
                                  })
                                : (0, a.jsx)(m.A, {
                                    id: "chatgptConversations.gpts.about.pin",
                                    defaultMessage: "Keep in sidebar",
                                    description:
                                      "Overflow menu action in the GPT store detail dialog that pins the GPT in the sidebar",
                                  }),
                            ],
                          }),
                          "private" === ep.gizmo.share_recipient
                            ? null
                            : (0, a.jsxs)(v.ms.Item, {
                                onSelect: () => {
                                  let e = ep.gizmo.short_url?.trim() || ep.gizmo.id
                                  ;(0, k.E)(`https://chatgpt.com/g/${encodeURIComponent(e)}`).then(ej)
                                },
                                children: [
                                  (0, a.jsx)(v.ms.ItemIcon, { children: (0, a.jsx)(_.ibM, {}) }),
                                  eC
                                    ? (0, a.jsx)(m.A, {
                                        id: "chatgptConversations.gpts.about.copiedLink",
                                        defaultMessage: "Copied link",
                                        description:
                                          "Temporary confirmation in the GPT store detail dialog overflow menu after its public link was copied",
                                      })
                                    : (0, a.jsx)(m.A, {
                                        id: "chatgptConversations.gpts.about.copyLink",
                                        defaultMessage: "Copy link",
                                        description:
                                          "Overflow menu action in the GPT store detail dialog that copies the GPT's public ChatGPT link",
                                      }),
                                ],
                              }),
                          (0, a.jsx)(ea.o, { resource: ep, onSelect: em }),
                        ],
                      })),
                (eo[83] = ez),
                (eo[84] = ew),
                (eo[85] = eb),
                (eo[86] = eN),
                (eo[87] = eC),
                (eo[88] = em),
                (eo[89] = ep),
                (eo[90] = ef),
                (eo[91] = K))
              : (K = eo[91]),
            (Z = ev ? "catalogDetail" : "wide"),
            (W = ev ? "compact" : "default"),
            (J = ev ? "catalog" : "promotional"),
            eo[92] !== em
              ? (($ = (e) => {
                  e || em()
                }),
                (eo[92] = em),
                (eo[93] = $))
              : ($ = eo[93]),
            (q = "flex min-h-0 flex-col"),
            (I = "min-h-0 flex-1 overflow-y-auto px-5 pt-20 pb-4 sm:px-10"),
            eo[94] !== ep.gizmo.display.profile_picture_url
              ? ((e = ep.gizmo.display.profile_picture_url?.trim() || null),
                (eo[94] = ep.gizmo.display.profile_picture_url),
                (eo[95] = e))
              : (e = eo[95]),
            eo[96] !== eA || eo[97] !== ep.gizmo.id || eo[98] !== e
              ? ((t = (0, a.jsx)(M.S, {
                  className: "mb-1 size-20",
                  customGpt: { iconUrl: e, id: ep.gizmo.id, name: eA },
                  presentation: "avatar",
                })),
                (eo[96] = eA),
                (eo[97] = ep.gizmo.id),
                (eo[98] = e),
                (eo[99] = t))
              : (t = eo[99]),
            eo[100] !== eA
              ? ((i = (0, a.jsx)(y.L3, {
                  className: "text-heading-lg leading-7 font-semibold wrap-anywhere text-default",
                  children: eA,
                })),
                (eo[100] = eA),
                (eo[101] = i))
              : (i = eo[101]),
            eo[102] !== eM || eo[103] !== ep.gizmo.author.link_to
              ? ((n =
                  null == eM
                    ? null
                    : (0, a.jsxs)("div", {
                        className: "flex items-center gap-1 text-base text-secondary select-none",
                        children: [
                          (0, a.jsx)(m.A, {
                            id: "chatgptConversations.gpts.about.byAuthor",
                            defaultMessage: "By {author}",
                            description:
                              "Byline in the GPT store detail dialog naming the GPT's creator; author is the creator's display name",
                            values: { author: eM },
                          }),
                          ep.gizmo.author.link_to ? (0, a.jsx)(_.ZEl, {}) : (0, a.jsx)(w.I, { asset: o.x }),
                        ],
                      })),
                (eo[102] = eM),
                (eo[103] = ep.gizmo.author.link_to),
                (eo[104] = n))
              : (n = eo[104]),
            eo[105] !== eA || eo[106] !== ep.gizmo.display.description
              ? ((r =
                  null == ep.gizmo.display.description
                    ? (0, a.jsx)(y.rr, {
                        className: "sr-only",
                        children: (0, a.jsx)(m.A, {
                          id: "chatgptConversations.gpts.about.descriptionFallback",
                          defaultMessage: "Details for {name}",
                          description:
                            "Accessible fallback description for a GPT store detail dialog when the GPT has no description; name is the GPT's name",
                          values: { name: eA },
                        }),
                      })
                    : (0, a.jsx)(y.rr, {
                        className: "max-w-md text-base text-pretty text-default",
                        children: ep.gizmo.display.description,
                      })),
                (eo[105] = eA),
                (eo[106] = ep.gizmo.display.description),
                (eo[107] = r))
              : (r = eo[107]),
            eo[108] !== t || eo[109] !== i || eo[110] !== n || eo[111] !== r
              ? ((L = (0, a.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 text-center",
                  children: [t, i, n, r],
                })),
                (eo[108] = t),
                (eo[109] = i),
                (eo[110] = n),
                (eo[111] = r),
                (eo[112] = L))
              : (L = eo[112]),
            eo[113] !== eg || eo[114] !== ep.gizmo.id
              ? ((U = (0, a.jsx)(X, { accountId: eg, gizmoId: ep.gizmo.id })),
                (eo[113] = eg),
                (eo[114] = ep.gizmo.id),
                (eo[115] = U))
              : (U = eo[115]),
            (D =
              !ev && ex && 0 !== ep.gizmo.live_version && null != l && l.length > 0
                ? (0, a.jsxs)("section", {
                    className: "mt-10",
                    children: [
                      (0, a.jsx)("h2", {
                        className: "heading-xl mb-3 font-semibold text-default select-none",
                        children: (0, a.jsx)(m.A, {
                          id: "chatgptConversations.gpts.about.conversationStarters",
                          defaultMessage: "Conversation Starters",
                          description:
                            "Section heading in a GPT's details dialog for end users. The section contains suggested first messages; selecting one opens that GPT's chat and puts the message in the composer for review before sending. Keep this heading short.",
                        }),
                      }),
                      (0, a.jsx)("div", {
                        className: "flex flex-wrap gap-2",
                        children: l.map((e) =>
                          (0, a.jsx)(
                            x.$,
                            {
                              allowShrink: !0,
                              color: "secondary",
                              size: "medium",
                              onClick: () => eh(ep, e),
                              children: (0, a.jsx)("span", { className: "whitespace-normal", children: e }),
                            },
                            e,
                          ),
                        ),
                      }),
                    ],
                  })
                : null),
            (eo[56] = eg),
            (eo[57] = ez),
            (eo[58] = ew),
            (eo[59] = eM),
            (eo[60] = eb),
            (eo[61] = ev),
            (eo[62] = eN),
            (eo[63] = eC),
            (eo[64] = eA),
            (eo[65] = em),
            (eo[66] = eh),
            (eo[67] = ep),
            (eo[68] = ex),
            (eo[69] = ef),
            (eo[70] = S),
            (eo[71] = I),
            (eo[72] = L),
            (eo[73] = U),
            (eo[74] = D),
            (eo[75] = q),
            (eo[76] = F),
            (eo[77] = R),
            (eo[78] = K),
            (eo[79] = Z),
            (eo[80] = W),
            (eo[81] = J),
            (eo[82] = $))
        } else
          ((S = eo[70]),
            (I = eo[71]),
            (L = eo[72]),
            (U = eo[73]),
            (D = eo[74]),
            (q = eo[75]),
            (F = eo[76]),
            (R = eo[77]),
            (K = eo[78]),
            (Z = eo[79]),
            (W = eo[80]),
            (J = eo[81]),
            ($ = eo[82]))
        ;((E =
          ev || 0 === e.length
            ? null
            : (0, a.jsxs)("section", {
                className: "mt-10",
                children: [
                  (0, a.jsx)("h2", {
                    className: "heading-xl mb-3 font-semibold text-default select-none",
                    children: (0, a.jsx)(m.A, {
                      id: "chatgptConversations.gpts.about.capabilities",
                      defaultMessage: "Capabilities",
                      description: "Heading above the tools available to a GPT in its store detail dialog",
                    }),
                  }),
                  (0, a.jsx)("div", { className: "flex flex-col gap-2", children: e.map(er) }),
                ],
              })),
          (B =
            !ev && null == t && ek
              ? (0, a.jsx)("div", { "aria-hidden": !0, className: "mt-10 h-24 animate-pulse rounded-xl bg-surface" })
              : null),
          (O =
            !ev && null != t && t.length > 0
              ? (0, a.jsxs)("section", {
                  className: "mt-10",
                  children: [
                    (0, a.jsx)("h2", {
                      className: "heading-xl mb-3 font-semibold text-default select-none",
                      children:
                        null == i
                          ? (0, a.jsx)(m.A, {
                              id: "chatgptConversations.gpts.about.moreByCreatorFallback",
                              defaultMessage: "More from this creator",
                              description:
                                "Heading above more GPTs from the same creator when the creator has no display name",
                            })
                          : (0, a.jsx)(m.A, {
                              id: "chatgptConversations.gpts.about.moreByCreator",
                              defaultMessage: "More by {creatorName}",
                              description:
                                "Heading above more GPTs from the same creator in the GPT store detail dialog; creatorName is the creator's display name",
                              values: { creatorName: i },
                            }),
                    }),
                    (0, a.jsx)("div", {
                      className: "flex gap-2 overflow-x-auto pb-1",
                      children: t.map((e) => (0, a.jsx)(ec, { resource: e, onStartChat: eh }, e.gizmo.id)),
                    }),
                  ],
                })
              : null),
          (eo[22] = eg),
          (eo[23] = ez),
          (eo[24] = ew),
          (eo[25] = eM),
          (eo[26] = eG?.items),
          (eo[27] = eG?.items.filter),
          (eo[28] = eb),
          (eo[29] = ek),
          (eo[30] = ev),
          (eo[31] = eu),
          (eo[32] = eN),
          (eo[33] = eC),
          (eo[34] = eA),
          (eo[35] = em),
          (eo[36] = eh),
          (eo[37] = ep),
          (eo[38] = ex),
          (eo[39] = ef),
          (eo[40] = S),
          (eo[41] = I),
          (eo[42] = L),
          (eo[43] = U),
          (eo[44] = D),
          (eo[45] = E),
          (eo[46] = B),
          (eo[47] = O),
          (eo[48] = q),
          (eo[49] = F),
          (eo[50] = R),
          (eo[51] = K),
          (eo[52] = Z),
          (eo[53] = W),
          (eo[54] = J),
          (eo[55] = $))
      } else
        ((S = eo[40]),
          (I = eo[41]),
          (L = eo[42]),
          (U = eo[43]),
          (D = eo[44]),
          (E = eo[45]),
          (B = eo[46]),
          (O = eo[47]),
          (q = eo[48]),
          (F = eo[49]),
          (R = eo[50]),
          (K = eo[51]),
          (Z = eo[52]),
          (W = eo[53]),
          (J = eo[54]),
          ($ = eo[55]))
      eo[116] !== I ||
      eo[117] !== L ||
      eo[118] !== U ||
      eo[119] !== D ||
      eo[120] !== E ||
      eo[121] !== B ||
      eo[122] !== O
        ? ((V = (0, a.jsxs)("div", { className: I, children: [L, U, D, E, B, O] })),
          (eo[116] = I),
          (eo[117] = L),
          (eo[118] = U),
          (eo[119] = D),
          (eo[120] = E),
          (eo[121] = B),
          (eo[122] = O),
          (eo[123] = V))
        : (V = eo[123])
      let eS = ev ? "shrink-0 px-6 pb-8 sm:px-10" : "shrink-0 px-6 pt-2 pb-8"
      return (
        eo[124] !== em || eo[125] !== eh || eo[126] !== ep
          ? ((Q = (0, a.jsx)(Y, { resource: ep, onClose: em, onStartChat: eh })),
            (eo[124] = em),
            (eo[125] = eh),
            (eo[126] = ep),
            (eo[127] = Q))
          : (Q = eo[127]),
        eo[128] !== eS || eo[129] !== Q
          ? ((ee = (0, a.jsx)("div", { className: eS, children: Q })), (eo[128] = eS), (eo[129] = Q), (eo[130] = ee))
          : (ee = eo[130]),
        eo[131] !== q || eo[132] !== V || eo[133] !== ee
          ? ((et = (0, a.jsxs)("div", { className: q, children: [V, ee] })),
            (eo[131] = q),
            (eo[132] = V),
            (eo[133] = ee),
            (eo[134] = et))
          : (et = eo[134]),
        eo[135] !== S ||
        eo[136] !== F ||
        eo[137] !== R ||
        eo[138] !== K ||
        eo[139] !== Z ||
        eo[140] !== W ||
        eo[141] !== J ||
        eo[142] !== $ ||
        eo[143] !== et
          ? ((es = (0, a.jsx)(S, {
              open: F,
              contentClassName: R,
              headerActions: K,
              size: Z,
              radius: W,
              variant: J,
              onOpenChange: $,
              children: et,
            })),
            (eo[135] = S),
            (eo[136] = F),
            (eo[137] = R),
            (eo[138] = K),
            (eo[139] = Z),
            (eo[140] = W),
            (eo[141] = J),
            (eo[142] = $),
            (eo[143] = et),
            (eo[144] = es))
          : (es = eo[144]),
        es
      )
    }
    function er(e) {
      return (0, a.jsxs)(
        "div",
        {
          className: "flex items-start gap-2",
          children: [
            (0, a.jsx)(_.jFs, { className: "mt-0.5 text-chart-green" }),
            (0, a.jsxs)("div", {
              className: "flex min-w-0 flex-col",
              children: [
                (0, a.jsx)(m.A, { ...e.title }),
                null == e.description
                  ? null
                  : (0, a.jsx)("span", {
                      className: "text-xs text-secondary",
                      children: (0, a.jsx)(m.A, { ...e.description }),
                    }),
              ],
            }),
          ],
        },
        e.title.id,
      )
    }
    function el(e) {
      let { title: t } = e
      return t.id
    }
    function ec(e) {
      let t,
        i,
        s,
        o,
        r,
        l,
        c,
        d,
        g,
        u,
        p = (0, n.c)(28),
        { resource: h, onStartChat: f } = e
      p[0] !== h.gizmo.display.name || p[1] !== h.gizmo.id
        ? ((t = h.gizmo.display.name.trim() || h.gizmo.id),
          (p[0] = h.gizmo.display.name),
          (p[1] = h.gizmo.id),
          (p[2] = t))
        : (t = p[2])
      let b = t
      p[3] !== h.gizmo.author.display_name
        ? ((i = h.gizmo.author.display_name?.trim()), (p[3] = h.gizmo.author.display_name), (p[4] = i))
        : (i = p[4])
      let x = i
      return (
        p[5] !== h.gizmo.display.description
          ? ((s =
              null == h.gizmo.display.description
                ? null
                : (0, a.jsx)("span", { className: "line-clamp-2", children: h.gizmo.display.description })),
            (p[5] = h.gizmo.display.description),
            (p[6] = s))
          : (s = p[6]),
        p[7] !== x
          ? ((o =
              null == x
                ? null
                : (0, a.jsx)("span", {
                    className: "text-xs text-secondary",
                    children: (0, a.jsx)(m.A, {
                      id: "chatgptConversations.gpts.about.creatorCardByline",
                      defaultMessage: "By {author}",
                      description:
                        "Byline on a related GPT card in the GPT store detail dialog; author is the GPT creator's display name",
                      values: { author: x },
                    }),
                  })),
            (p[7] = x),
            (p[8] = o))
          : (o = p[8]),
        p[9] !== s || p[10] !== o
          ? ((r = (0, a.jsxs)("div", { className: "flex flex-col gap-1", children: [s, o] })),
            (p[9] = s),
            (p[10] = o),
            (p[11] = r))
          : (r = p[11]),
        p[12] !== h.gizmo.display.profile_picture_url
          ? ((l = h.gizmo.display.profile_picture_url?.trim() || null),
            (p[12] = h.gizmo.display.profile_picture_url),
            (p[13] = l))
          : (l = p[13]),
        p[14] !== b || p[15] !== h.gizmo.id || p[16] !== l
          ? ((c = (0, a.jsx)("span", {
              className: "flex size-12 items-center justify-center overflow-hidden rounded-full",
              children: (0, a.jsx)(M.S, {
                className: "h-full w-full",
                customGpt: { iconUrl: l, id: h.gizmo.id, name: b },
                presentation: "avatar",
              }),
            })),
            (p[14] = b),
            (p[15] = h.gizmo.id),
            (p[16] = l),
            (p[17] = c))
          : (c = p[17]),
        p[18] !== b
          ? ((d = (0, a.jsx)("span", { className: "font-semibold", children: b })), (p[18] = b), (p[19] = d))
          : (d = p[19]),
        p[20] !== f || p[21] !== h ? ((g = () => f(h)), (p[20] = f), (p[21] = h), (p[22] = g)) : (g = p[22]),
        p[23] !== r || p[24] !== c || p[25] !== d || p[26] !== g
          ? ((u = (0, a.jsx)(T.D, {
              className: "w-full min-w-72",
              description: r,
              icon: c,
              iconContainer: !1,
              presentation: "related",
              title: d,
              onClick: g,
            })),
            (p[23] = r),
            (p[24] = c),
            (p[25] = d),
            (p[26] = g),
            (p[27] = u))
          : (u = p[27]),
        u
      )
    }
    function ed(e) {
      switch (e.type) {
        case "browser":
          return { title: eg.webSearch }
        case "canvas":
          return { title: eg.canvas }
        case "python":
          return { title: eg.dataAnalysis }
        case "dalle":
        case "image_gen":
          return { title: eg.imageGeneration }
        case "memory":
          return { description: eg.memoryDescription, title: eg.memory }
        case "plugin":
          return { description: eg.actionsDescription, title: eg.actions }
        case "connector":
          return { title: eg.apps }
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
    let eg = (0, f.YK)({
      webSearch: {
        id: "chatgptConversations.gpts.about.tools.webSearch",
        defaultMessage: "Web Search",
        description: "Name of the web search capability in the GPT store detail dialog",
      },
      canvas: {
        id: "chatgptConversations.gpts.about.tools.canvas",
        defaultMessage: "Canvas",
        description: "Name of the canvas capability in the GPT store detail dialog",
      },
      dataAnalysis: {
        id: "chatgptConversations.gpts.about.tools.dataAnalysis",
        defaultMessage: "Code Interpreter & Data Analysis",
        description: "Name of the code interpreter and data analysis capability in the GPT store detail dialog",
      },
      imageGeneration: {
        id: "chatgptConversations.gpts.about.tools.genericImageGeneration",
        defaultMessage: "Image Generation",
        description:
          "Name of the image generation capability in the GPT store detail dialog, covering current and legacy image tools",
      },
      memory: {
        id: "chatgptConversations.gpts.about.tools.memory",
        defaultMessage: "Memory",
        description: "Name of the memory capability in the GPT store detail dialog",
      },
      memoryDescription: {
        id: "chatgptConversations.gpts.about.tools.memoryDescription",
        defaultMessage: "Learns from previous chats to improve future conversations",
        description: "Description of the memory capability in the GPT store detail dialog",
      },
      actions: {
        id: "chatgptConversations.gpts.about.tools.actions",
        defaultMessage: "Actions",
        description: "Name of the actions capability in the GPT store detail dialog",
      },
      actionsDescription: {
        id: "chatgptConversations.gpts.about.tools.actionsDescription",
        defaultMessage: "Retrieves or takes actions outside of ChatGPT",
        description: "Description of the actions capability in the GPT store detail dialog",
      },
      apps: {
        id: "chatgptConversations.gpts.about.tools.apps",
        defaultMessage: "Apps",
        description: "Name of the apps capability in the GPT store detail dialog",
      },
    })
  },
  E4rW(e, t, i) {
    i.d(
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
        w: function (e, t, i) {
          return null != t && "no_constraint" !== t && "us" !== t
            ? "residency"
            : "allow_none" === i || "allow_specific" === i
              ? i
              : "quorum" === e.plan_type
                ? "quorum"
                : null
        },
      },
    )
  },
  DY7H(e, t, i) {
    var a = i("jaeI")
    function n({
      resource: e,
      account: t,
      accountId: i,
      userId: a,
      enabled: o,
      allowMigrated: r = !1,
      remigration: l,
    }) {
      let { gizmo: c } = e
      return (
        !!o &&
        null != i &&
        t?.id === i &&
        !!s(e, l) &&
        (!!r || !!l || null == c.migrated_plugin_id) &&
        (c.workspace_id ?? null) === ("workspace" === t.structure ? t.id : null) &&
        (c.author.user_id === ("personal" === t.structure ? a : t.account_user_id)
          ? c.current_user_permission?.can_view_config === !0 &&
            (!0 === c.current_user_permission.can_write || null != l)
          : "workspace" === t.structure &&
            ("account-owner" === t.account_user_role || "account-admin" === t.account_user_role) &&
            "private" !== c.share_recipient &&
            c.current_user_permission?.can_read === !0)
      )
    }
    function s({ gizmo: e }, t) {
      return (
        "gpt" === e.gizmo_type &&
        e.current_user_permission?.can_preview_business_agent_tools == null &&
        ((e.live_version ?? 0) > 0 || null != t)
      )
    }
    i.d(
      t,
      {},
      {
        T8: function ({ account: e, rbacEnabled: t, permissions: i, isPending: a, isError: n }) {
          return t && e?.structure !== "personal"
            ? null == e || a
              ? "loading"
              : n || null == i
                ? "unavailable"
                : i.includes("chatgpt.workspace.gpt.crud")
                  ? "allowed"
                  : "denied"
            : "allowed"
        },
        l2: function (e) {
          return (!0 === e.allowMigrated || "allowed" === e.gptPermission) && n(e)
        },
        l5: n,
        rP: function ({ resource: e, remigration: t, account: i, accountId: n, permissions: o, rbacEnabled: r }) {
          return (
            (0, a.l)(i, r) &&
            i?.structure === "workspace" &&
            i.id === n &&
            e.gizmo.workspace_id === i.id &&
            e.gizmo.author.user_id === i.account_user_id &&
            s(e, t) &&
            null != o &&
            !o.includes("chatgpt.workspace_plugins.use")
          )
        },
      },
    )
  },
  bMrQ(e, t, i) {
    var a = i("zTeN"),
      n = i("rGp2"),
      s = i("OiCI"),
      o = i("SPnB"),
      r = i("YJm0"),
      l = i("Ghh3"),
      c = i("Ot7V"),
      d = i("DAA7"),
      g = i("k7G6"),
      u = i("WzdM"),
      p = i("bJEQ"),
      m = i("OWtl"),
      h = i("HFSu"),
      f = i("eShZ")
    let b = (0, a.vU)(m.u, (e, { get: t, scope: i }) => {
      let a = t(s.tT),
        c = t(o.chatGptAuthenticatedUserId$)
      return {
        enabled: null != a && null != c,
        queryKey: ["plugins", "gpt-migration-access", e, a, c],
        queryFn: async ({ signal: t }) => {
          if (null == a || null == c) return null
          let { results: s } = await h.CodexRequest.safePost("/ps/plugins/batch", {
              surface: "other",
              requestBody: { plugin_ids: [e] },
              additionalHeaders: { ...(0, u.A)("chatgpt"), "ChatGPT-Account-Id": a },
              signal: (0, p.w)(t),
            }),
            o = s.find(({ plugin: t }) => t.id === e)?.plugin
          if (null != o)
            return "ENABLED" === o.status && "NOT_AVAILABLE" !== o.installation_policy ? { type: "plugin" } : null
          let d = await i.query.fetch(r.f, a)
          t.throwIfAborted()
          let g = d.accounts[a]?.account
          if (
            g?.account_id !== a ||
            "workspace" !== g.structure ||
            ("account-admin" !== g.account_user_role && "account-owner" !== g.account_user_role)
          )
            return null
          try {
            let i = await l.Request.safeGet("/ps/plugins/admin/{plugin_id}", {
              surface: "plugin_management",
              parameters: { path: { plugin_id: e } },
              additionalHeaders: { "ChatGPT-Account-Id": a, [n.ok]: "ADMIN_SETTING" },
              signal: (0, p.w)(t),
              expectedErrorStatuses: [403, 404],
            })
            return i.id === e && "WORKSPACE" === i.scope && i.workspace_id === a
              ? { type: "admin", accountId: a }
              : null
          } catch (e) {
            if (e instanceof f.fk && (403 === e.status || 404 === e.status)) return null
            throw e
          }
        },
        staleTime: 0,
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
        retry: !1,
      }
    })
    i.d(
      t,
      {},
      {
        B: b,
        y: async function (e, t, i, a) {
          if ("admin" === i.type) {
            let a = new URL(`/admin/plugins/${encodeURIComponent(t)}`, "https://chatgpt.com")
            ;(a.searchParams.set("catalog", "WORKSPACE"), a.searchParams.set("account_id", i.accountId))
            let n = a.toString(),
              s = (0, d.lU)(e, n, i.accountId),
              o = null == s ? null : await s
            ;(0, c.E0)({
              href: o ?? n,
              initiator: "open_in_browser_bridge",
              openTarget: null == o ? void 0 : "external-browser",
            })
            return
          }
          ;(0, g.Uz)(t, a)
        },
      },
    )
  },
  gNqU(e, t, i) {
    var a = i("ABep"),
      n = i("QosV"),
      s = i("slpy"),
      o = i("pjm8"),
      r = i("zTeN"),
      l = i("Wf1j"),
      c = i("oyxz"),
      d = i("eFn4"),
      g = i("EOo5"),
      u = i("OAko"),
      p = i("zKCW"),
      m = i("Sm6l"),
      h = i("ZtSy"),
      f = i("Ot7V"),
      b = i("HOLv"),
      x = i("bVeK"),
      y = i("jaeI"),
      v = i("hZax"),
      w = i("DY7H"),
      _ = i("g2DC"),
      C = i("slBk")
    i.d(
      t,
      {},
      {
        E_: function (e) {
          let t,
            i,
            s,
            r,
            d,
            g,
            u,
            h = (0, n.c)(22),
            { surface: f, onKeepUsingGpt: x, deadline: y } = e,
            w = (0, l.A)(),
            _ = (0, v.Fj)("2513446768")
          h[0] !== _ || h[1] !== y
            ? ((t = y ?? (0, C.l)(_.get("retirement_date", ""))), (h[0] = _), (h[1] = y), (h[2] = t))
            : (t = h[2])
          let j = t
          h[3] !== w || h[4] !== j
            ? ((i = w.formatDate(j, { month: "long", day: "numeric", timeZone: "UTC" })),
              (h[3] = w),
              (h[4] = j),
              (h[5] = i))
            : (i = h[5])
          let T = i
          if ("directory" === f) {
            let e
            ;(h[6] !== T
              ? ((e = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.blocked.directory.description",
                  defaultMessage:
                    "GPTs can continue as plugins, but your workspace admins have disabled plugins. Your GPTs can’t be migrated and won’t be available after {deadline}.",
                  description:
                    "Notice on GPT lists for creators whose Use plugins permission is disabled by workspace policy. Explains why their GPTs cannot migrate. The deadline is the localized UTC retirement month and day. Keep the complete two-sentence message together.",
                  values: { deadline: T },
                })),
                (h[6] = T),
                (h[7] = e))
              : (e = h[7]),
              (s = e))
          } else if ("migrated" === f) {
            let e
            ;(h[8] !== T
              ? ((e = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.blocked.migrated.description",
                  defaultMessage:
                    "This GPT is now a plugin, but the plugin isn’t available with your current workspace settings. You can keep using this GPT until {deadline}.",
                  description:
                    "Notice before and after continuing a migrated GPT chat, shown to its creator whose Use plugins permission is disabled. The original GPT remains usable until the localized UTC retirement month and day in deadline. Migration has already completed.",
                  values: { deadline: T },
                })),
                (h[8] = T),
                (h[9] = e))
              : (e = h[9]),
              (s = e))
          } else {
            let e
            ;(h[10] !== T
              ? ((e = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.blocked.gpt.description",
                  defaultMessage:
                    "This GPT can continue as a plugin, but your workspace admins have disabled plugins. It can’t be migrated and won’t be available after {deadline}.",
                  description:
                    "Notice in an unmigrated GPT's details or chat, shown to its creator whose Use plugins permission is disabled by workspace policy. The deadline is the localized UTC retirement month and day. The creator can still chat with the GPT until retirement.",
                  values: { deadline: T },
                })),
                (h[10] = T),
                (h[11] = e))
              : (e = h[11]),
              (s = e))
          }
          return (
            h[12] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = (0, a.jsx)(b.I, { asset: o.k, className: "text-secondary" })), (h[12] = r))
              : (r = h[12]),
            h[13] !== T || h[14] !== f
              ? ((d =
                  "directory" === f
                    ? (0, a.jsx)(c.A, {
                        id: "chatgptConversations.gpts.blocked.directory.title",
                        defaultMessage: "GPTs will be retired on {deadline}",
                        description:
                          "Heading on GPT lists for creators whose workspace Use plugins permission is disabled. The deadline is the localized UTC retirement month and day, without a year.",
                        values: { deadline: T },
                      })
                    : (0, a.jsx)(c.A, {
                        id: "chatgptConversations.gpts.blocked.gpt.title",
                        defaultMessage: "This GPT will be retired on {deadline}",
                        description:
                          "Heading in a GPT's details or chat for its creator whose workspace Use plugins permission is disabled. The deadline is the localized UTC retirement month and day, without a year.",
                        values: { deadline: T },
                      })),
                (h[13] = T),
                (h[14] = f),
                (h[15] = d))
              : (d = h[15]),
            h[16] !== x
              ? ((g =
                  null == x
                    ? void 0
                    : (0, a.jsx)(m.$, {
                        type: "button",
                        color: "primary",
                        size: "dialog",
                        onClick: x,
                        children: (0, a.jsx)(c.A, {
                          id: "chatgptConversations.gpts.blocked.keep_using_gpt.label",
                          defaultMessage: "Keep using GPT",
                          description:
                            "Only action in the migrated GPT chat notice when its creator cannot use plugins. Reveals the existing composer with its draft preserved for this visit.",
                        }),
                      })),
                (h[16] = x),
                (h[17] = g))
              : (g = h[17]),
            h[18] !== s || h[19] !== d || h[20] !== g
              ? ((u = (0, a.jsx)(p.l, {
                  variant: "announcement",
                  icon: r,
                  stackOnNarrow: !0,
                  wrapCtas: !0,
                  title: d,
                  content: s,
                  customCtas: g,
                })),
                (h[18] = s),
                (h[19] = d),
                (h[20] = g),
                (h[21] = u))
              : (u = h[21]),
            u
          )
        },
        Xn: function (e) {
          let t,
            i,
            s,
            x,
            w,
            _,
            j,
            T,
            P,
            G,
            k,
            z,
            A = (0, n.c)(41),
            { actionPlacement: M, currentGpt: N, onExplore: S, openTarget: I } = e,
            L = void 0 === M ? "inline" : M,
            U = (0, l.A)(),
            D = (0, v.Fj)("2513446768"),
            E = (0, v.Fj)("2562735250")
          A[0] !== E ? ((t = E.get("enabled", !1)), (A[0] = E), (A[1] = t)) : (t = A[1])
          let B = t,
            { accountId: O } = (0, g.As)()
          A[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = { preview: !1 }), (A[2] = i)) : (i = A[2])
          let { data: q } = (0, u.YL)(void 0, i),
            F = (0, y.l)(q, (0, v.Zj)("1355972088")),
            { data: R } = (0, r._U)(d.Jk, O ?? "", {
              enabled: B && null != O && q?.id === O && "workspace" === q.structure && F,
            }),
            K = B && q?.id === O && (0, y.J)(q, F, R?.permissions)
          A[3] !== D || A[4] !== U
            ? ((s = U.formatDate((0, C.l)(D.get("retirement_date", "")), {
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })),
              (A[3] = D),
              (A[4] = U),
              (A[5] = s))
            : (s = A[5])
          let Z = s,
            H = "below" === L ? "w-full" : void 0,
            W = "below" === L ? "detailAction" : "dialog"
          ;(A[6] !== K || A[7] !== D || A[8] !== U.locale || A[9] !== S || A[10] !== I
            ? ((x = K
                ? S
                : (e) => {
                    ;(0, f.PQ)({
                      disposition: "new-tab",
                      event: e,
                      href: (0, C.L)(U.locale, D.get("learn_more_url", "")),
                      initiator: "open_in_browser_bridge",
                      openTarget: I,
                    })
                  }),
              (A[6] = K),
              (A[7] = D),
              (A[8] = U.locale),
              (A[9] = S),
              (A[10] = I),
              (A[11] = x))
            : (x = A[11]),
            A[12] !== K
              ? ((w = K
                  ? (0, a.jsx)(c.A, {
                      id: "chatgptConversations.gpts.notices.explorePlugins",
                      defaultMessage: "Explore plugins",
                      description: "Button in the GPT retirement notice opening the Plugins directory",
                    })
                  : (0, a.jsx)(c.A, {
                      id: "chatgptConversations.gpts.notices.learnMore",
                      defaultMessage: "Learn more",
                      description:
                        "Button in a GPT retirement notice for people who cannot use plugins. Opens the localized Knowledge Center article about GPT retirement in a new browser tab. Keep this label short.",
                    })),
                (A[12] = K),
                (A[13] = w))
              : (w = A[13]),
            A[14] !== w || A[15] !== H || A[16] !== W || A[17] !== x
              ? ((_ = (0, a.jsx)(m.$, { className: H, color: "primary", size: W, onClick: x, children: w })),
                (A[14] = w),
                (A[15] = H),
                (A[16] = W),
                (A[17] = x),
                (A[18] = _))
              : (_ = A[18]))
          let J = _
          A[19] !== D || A[20] !== U.locale || A[21] !== I
            ? ((j = (e) =>
                (0, a.jsx)(h.G, {
                  href: (0, C.L)(U.locale, D.get("learn_more_url", "")),
                  initiator: "open_in_browser_bridge",
                  openTarget: I,
                  underline: "always",
                  children: e,
                })),
              (A[19] = D),
              (A[20] = U.locale),
              (A[21] = I),
              (A[22] = j))
            : (j = A[22])
          let Y = j
          if (K)
            if (void 0 !== N && N) {
              let e
              ;(A[24] !== Y
                ? ((e = (0, a.jsx)(c.A, {
                    id: "chatgptConversations.gpts.notices.currentRetirement.withLearnMore",
                    defaultMessage:
                      "This GPT will only remain available if its creator migrates it to a plugin. Explore plugins, the new home for custom tools. <learnMore>Learn more</learnMore>",
                    description:
                      "Retirement notice above an unmigrated GPT chat composer or in its details dialog for a viewer who cannot migrate it but can use plugins. Continued availability depends on creator migration. The learnMore tag links to the Help Center retirement and migration FAQ; the separate Explore plugins button opens the Plugins directory. Keep the link in this complete message so it can be reordered naturally.",
                    values: { learnMore: Y },
                  })),
                  (A[24] = Y),
                  (A[25] = e))
                : (e = A[25]),
                (T = e))
            } else {
              let e
              ;(A[26] !== Z || A[27] !== Y
                ? ((e = (0, a.jsx)(c.A, {
                    id: "chatgptConversations.gpts.notices.directoryRetirement.withLearnMore",
                    defaultMessage:
                      "GPTs migrated by their creators will remain available as plugins after {deadline}. <learnMore>Learn more</learnMore>",
                    description:
                      "Retirement notice in the GPT directory for users who can use plugins but have no eligible GPTs to migrate. GPTs migrated by creators continue as plugins; deadline is the localized retirement month and day. The learnMore tag links to the Help Center retirement and migration FAQ; the separate Explore plugins button opens the Plugins directory. Keep the link in this complete message so it can be reordered naturally.",
                    values: { deadline: Z, learnMore: Y },
                  })),
                  (A[26] = Z),
                  (A[27] = Y),
                  (A[28] = e))
                : (e = A[28]),
                (T = e))
            }
          else {
            let e
            ;(A[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.notices.retirementLearnMore",
                  defaultMessage: "Learn more about the retirement of GPTs in the Knowledge Center.",
                  description:
                    "Body of the GPT retirement notice on a GPT list, chat, or details dialog when the viewer cannot use plugins. Directs them to the Knowledge Center for retirement information; the adjacent Learn more button opens it in a new browser tab.",
                })),
                (A[23] = e))
              : (e = A[23]),
              (T = e))
          }
          let $ = "below" === L ? "announcementInset" : "announcement"
          ;(A[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = (0, a.jsx)(b.I, { asset: o.k, className: "text-secondary" })), (A[29] = P))
            : (P = A[29]),
            A[30] !== Z
              ? ((G = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.notices.retirementTitle",
                  defaultMessage: "GPTs will be retired on {deadline}",
                  description:
                    "Heading of the retirement notice in the GPT directory or a GPT chat for users who cannot migrate the GPT; deadline is a localized month and day",
                  values: { deadline: Z },
                })),
                (A[30] = Z),
                (A[31] = G))
              : (G = A[31]))
          let V = "inline" === L ? J : void 0
          A[32] !== T || A[33] !== $ || A[34] !== G || A[35] !== V
            ? ((k = (0, a.jsx)(p.l, {
                variant: $,
                icon: P,
                stackOnNarrow: !0,
                wrapCtas: !0,
                title: G,
                content: T,
                customCtas: V,
              })),
              (A[32] = T),
              (A[33] = $),
              (A[34] = G),
              (A[35] = V),
              (A[36] = k))
            : (k = A[36])
          let Q = k
          return (
            A[37] !== J || A[38] !== L || A[39] !== Q
              ? ((z =
                  "below" === L
                    ? (0, a.jsxs)("div", { className: "flex w-full flex-col gap-2", children: [Q, J] })
                    : Q),
                (A[37] = J),
                (A[38] = L),
                (A[39] = Q),
                (A[40] = z))
              : (z = A[40]),
            z
          )
        },
        m3: function (e) {
          let t,
            i,
            h,
            f,
            j,
            T,
            P,
            G,
            k,
            z,
            A = (0, n.c)(28),
            { surface: M, onMigrate: N, onDismiss: S } = e,
            I = (0, l.A)(),
            L = (0, v.Fj)("2562735250")
          A[0] !== L ? ((t = L.get("enabled", !1)), (A[0] = L), (A[1] = t)) : (t = A[1])
          let U = t,
            D = (0, v.Fj)("2513446768")
          A[2] !== D || A[3] !== I
            ? ((i = I.formatDate((0, C.l)(D.get("retirement_date", "")), {
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })),
              (A[2] = D),
              (A[3] = I),
              (A[4] = i))
            : (i = A[4])
          let E = i,
            { accountId: B } = (0, g.As)()
          A[5] === Symbol.for("react.memo_cache_sentinel") ? ((h = { preview: !1 }), (A[5] = h)) : (h = A[5])
          let { data: O } = (0, u.YL)(void 0, h),
            q = (0, y.l)(O, (0, v.Zj)("1355972088")),
            F = (0, v.Fj)("2826703856").get("enable_gpt_fe_controls", !1),
            {
              data: R,
              isPending: K,
              isError: Z,
            } = (0, r._U)(d.Jk, B ?? "", {
              enabled: null != B && O?.id === B && "workspace" === O.structure && (q || F),
            }),
            H = (0, w.T8)({ account: O, rbacEnabled: F, permissions: R?.permissions, isPending: K, isError: Z }),
            W = U && O?.id === B && (0, y.J)(O, q, R?.permissions)
          if ("allowed" !== H) {
            let e
            ;(A[6] !== H ? ((e = (0, a.jsx)(_.M, { permission: H })), (A[6] = H), (A[7] = e)) : (e = A[7]), (f = e))
          } else if (!W) {
            let e
            ;(A[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.migration.permissionRequired",
                  defaultMessage: "Your workspace must allow you to use plugins to migrate this GPT",
                  description:
                    "Tooltip on a disabled GPT migration button for workspace users without permission to use plugins, or while that permission is loading",
                })),
                (A[8] = e))
              : (e = A[8]),
              (f = e))
          }
          return (
            A[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((j = (0, a.jsx)(b.I, { asset: o.k, className: "text-secondary" })), (A[9] = j))
              : (j = A[9]),
            A[10] !== E
              ? ((T = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.notices.migrateTitle",
                  defaultMessage: "Migrate your GPTs to plugins by {deadline}",
                  description:
                    "Heading of the migration notice in GPT lists or above a GPT chat composer, asking eligible creators to migrate their GPTs to plugins; deadline is a localized month and day",
                  values: { deadline: E },
                })),
                (A[10] = E),
                (A[11] = T))
              : (T = A[11]),
            A[12] !== E
              ? ((P = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.notices.directoryMigration",
                  defaultMessage:
                    "GPTs that aren’t migrated won’t be available after {deadline}. Migrate yours so people can keep using them as plugins.",
                  description:
                    "Migration notice in the GPT directory or above a GPT chat composer for creators who can migrate GPTs; deadline is a localized month and day after which unmigrated GPTs retire",
                  values: { deadline: E },
                })),
                (A[12] = E),
                (A[13] = P))
              : (P = A[13]),
            A[14] !== W || A[15] !== H || A[16] !== f || A[17] !== N || A[18] !== M
              ? ((G =
                  null == N
                    ? void 0
                    : (0, a.jsx)(s.m, {
                        content: f,
                        children: (0, a.jsx)(m.$, {
                          color: "primary",
                          size: "dialog",
                          "aria-disabled": !W || "allowed" !== H,
                          onClick: (e) => {
                            W && "allowed" === H && N(e)
                          },
                          children:
                            "chat" === M
                              ? (0, a.jsx)(c.A, {
                                  id: "chatgptConversations.gpts.notices.migrateCurrent",
                                  defaultMessage: "Migrate to plugin",
                                  description:
                                    "Button in a GPT chat migration notice opening migration confirmation for the current GPT",
                                })
                              : (0, a.jsx)(c.A, {
                                  id: "chatgptConversations.gpts.notices.migrateGpts",
                                  defaultMessage: "Migrate GPTs",
                                  description:
                                    "Button in a migration notice that opens My GPTs so the creator can choose GPTs to migrate",
                                }),
                        }),
                      })),
                (A[14] = W),
                (A[15] = H),
                (A[16] = f),
                (A[17] = N),
                (A[18] = M),
                (A[19] = G))
              : (G = A[19]),
            A[20] !== I || A[21] !== S
              ? ((k =
                  null == S
                    ? void 0
                    : (0, a.jsx)(m.$, {
                        "aria-label": I.formatMessage({
                          id: "chatgptConversations.gpts.notices.dismiss",
                          defaultMessage: "Dismiss migration notice",
                          description:
                            "Accessible label for the close button on a GPT chat migration notice; hides the notice for this page session without migrating anything",
                        }),
                        color: "ghost",
                        size: "icon",
                        uniform: !0,
                        onClick: S,
                        children: (0, a.jsx)(x.Gmf, {}),
                      })),
                (A[20] = I),
                (A[21] = S),
                (A[22] = k))
              : (k = A[22]),
            A[23] !== T || A[24] !== P || A[25] !== G || A[26] !== k
              ? ((z = (0, a.jsx)(p.l, {
                  variant: "announcement",
                  icon: j,
                  stackOnNarrow: !0,
                  wrapCtas: !0,
                  title: T,
                  content: P,
                  customCtas: G,
                  trailingAction: k,
                })),
                (A[23] = T),
                (A[24] = P),
                (A[25] = G),
                (A[26] = k),
                (A[27] = z))
              : (z = A[27]),
            z
          )
        },
      },
    )
  },
  g2DC(e, t, i) {
    var a = i("ABep"),
      n = i("QosV"),
      s = i("oyxz")
    i.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            i = (0, n.c)(3),
            { permission: o } = e
          if ("allowed" === o) return null
          if ("loading" === o) {
            let e
            return (
              i[0] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(s.A, {
                    id: "chatgptConversations.gpts.migration.checkingGptPermission",
                    defaultMessage: "Checking your workspace permissions…",
                    description:
                      "Status on a disabled GPT migration button or in its confirmation dialog while the user's workspace permissions are loading",
                  })),
                  (i[0] = e))
                : (e = i[0]),
              e
            )
          }
          if ("unavailable" === o) {
            let e
            return (
              i[1] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(s.A, {
                    id: "chatgptConversations.gpts.migration.gptPermissionUnavailable",
                    defaultMessage: "We couldn’t check your workspace permissions. Try again later.",
                    description:
                      "Explanation on a disabled GPT migration button or in its confirmation dialog when workspace permissions could not be loaded; migration cannot proceed until permissions are verified",
                  })),
                  (i[1] = e))
                : (e = i[1]),
              e
            )
          }
          return (
            i[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(s.A, {
                  id: "chatgptConversations.gpts.migration.gptPermissionRequired",
                  defaultMessage:
                    "You need Create and manage GPTs permission to migrate this GPT. Ask a workspace admin for access.",
                  description:
                    "Explanation on a disabled GPT migration button or in its confirmation dialog when the acting user's role lacks the required workspace permission, including administrators migrating another user's GPT. Create and manage GPTs is the exact permission label in Admin Console that a workspace admin must enable for the user's role.",
                })),
                (i[2] = t))
              : (t = i[2]),
            t
          )
        },
      },
    )
  },
  hfkq(e, t, i) {
    var a = i("zTeN"),
      n = i("SPnB"),
      s = i("Ghh3"),
      o = i("OWtl"),
      r = i("OMIV")
    let l = (e, t, i) => ({
        queryKey: ["chatgpt-gizmos", "plugin-remigration", e.gizmoId, e.pluginId, t, i],
        queryFn: ({ signal: a }) => {
          if (null == t || null == i) throw Error("GPT migration requires an account")
          return s.Request.safeGet("/gizmos/{gizmo_id}/migrate/plugin", {
            parameters: { path: { gizmo_id: e.gizmoId } },
            additionalHeaders: { "ChatGPT-Account-ID": t },
            expectedErrorStatuses: [401, 403, 404, 409],
            retry: "never",
            expectedIdentity: { accountId: t, userId: i },
            signal: a,
          })
        },
        retry: !1,
        staleTime: 0,
        refetchOnMount: "always",
        refetchOnWindowFocus: !0,
      }),
      c = (0, a.vU)(o.u, (e, { get: t }) => {
        let i = t(n.chatGptAuthenticatedAccountId$),
          a = t(n.chatGptAuthenticatedUserId$)
        return { ...l(e, i, a), enabled: !!e.pluginId && null != i && null != a && t(r.JW, "2160578039") }
      }),
      d = (0, a.i1)(o.u, (e, { get: t }) => {
        if (!e.pluginId || !t(r.JW, "2160578039")) return
        let { data: i, isSuccess: a, isFetching: n } = t(c, e)
        return a && !n && i.deleted_plugin_id && i.gizmo_config_id ? i : void 0
      })
    i.d(t, {}, { d: l, f: d })
  },
  slBk(e, t, i) {
    var a = i("W0tK")
    let n = Date.UTC(2026, 11, 11)
    i.d(
      t,
      {},
      {
        L: function (e, t) {
          let i = ((0, a.UK)(e)?.locale ?? "en-US").toLowerCase(),
            n = "en-us" === i ? "en" : i,
            s = `https://help.openai.com/${n}/articles/20001519-custom-gpt-retirement-and-migration-faq`
          try {
            let e = new URL(t.replaceAll("{lang}", n))
            return "https:" === e.protocol ? e.href : s
          } catch {
            return s
          }
        },
        l: function (e) {
          if (!/^\d{4}-\d{2}-\d{2}$/.test(e)) return n
          let t = Date.parse(`${e}T00:00:00.000Z`)
          return Number.isFinite(t) && new Date(t).toISOString().slice(0, 10) === e ? t : n
        },
      },
    )
  },
  T4c2(e, t, i) {
    i.d(
      t,
      {},
      {
        J5: function (e, t, i) {
          return ["chatgpt-gizmos", e, "search", t, i]
        },
        Jy: function (e) {
          return ["chatgpt-gizmos", e, "discovery"]
        },
        NY: function (e, t) {
          return ["chatgpt-gizmos", e, "creator", t]
        },
        bF: function (e, t, i) {
          return ["chatgpt-gizmos", e, "discovery-cut", t, i]
        },
      },
    )
  },
  Jqpj(e, t, i) {
    var a = i("ABep"),
      n = i("QosV"),
      s = i("slpy"),
      o = i("on57"),
      r = i("zd8w"),
      l = i("HZfM"),
      c = i("TjgH")
    function d(e) {
      let t,
        i,
        o,
        r,
        l,
        c,
        d,
        g = (0, n.c)(14)
      ;(g[0] !== e
        ? (({ disabled: t, onClick: i, onKeyDown: o, tooltip: l, ...r } = e),
          (g[0] = e),
          (g[1] = t),
          (g[2] = i),
          (g[3] = o),
          (g[4] = r),
          (g[5] = l))
        : ((t = g[1]), (i = g[2]), (o = g[3]), (r = g[4]), (l = g[5])),
        g[6] !== t || g[7] !== i || g[8] !== o || g[9] !== r
          ? ((c =
              null != i || t
                ? (0, a.jsx)("div", {
                    ...r,
                    "aria-disabled": t || void 0,
                    role: "button",
                    tabIndex: 0,
                    onClick: t ? void 0 : i,
                    onKeyDown: t ? void 0 : o,
                  })
                : (0, a.jsx)("div", { ...r, tabIndex: -1 })),
            (g[6] = t),
            (g[7] = i),
            (g[8] = o),
            (g[9] = r),
            (g[10] = c))
          : (c = g[10]))
      let u = c
      return (
        g[11] !== u || g[12] !== l
          ? ((d = null == l ? u : (0, a.jsx)(s.m, { content: l, children: u })), (g[11] = u), (g[12] = l), (g[13] = d))
          : (d = g[13]),
        d
      )
    }
    function g(e, t) {
      return "string" == typeof e
        ? (0, a.jsx)(c.E, { variant: "outline", children: e }, e)
        : (0, a.jsx)("span", { className: "flex items-center", children: e }, t)
    }
    i.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            i,
            s,
            c,
            u,
            p,
            m,
            h,
            f,
            b,
            x,
            y,
            v,
            w,
            _,
            C,
            j,
            T,
            P,
            G = (0, n.c)(85),
            {
              ref: k,
              icon: z,
              title: A,
              description: M,
              contentClassName: N,
              descriptionClassName: S,
              descriptionPlacement: I,
              badges: L,
              actions: U,
              actionsPlacement: D,
              trailing: E,
              disabled: B,
              onClick: O,
              tooltip: q,
              to: F,
              iconContainer: R,
              iconContainerVariant: K,
              iconPlacement: Z,
              isHighlighted: H,
              presentation: W,
              className: J,
            } = e,
            Y = void 0 === I ? "stacked" : I,
            $ = void 0 !== B && B,
            V = void 0 === R || R,
            Q = void 0 === K ? "filled" : K,
            X = void 0 === Z ? "outside" : Z,
            ee = void 0 !== H && H,
            et = void 0 === W ? "card" : W,
            ei = (0, r.useId)()
          G[0] !== O
            ? ((t = (e) => {
                O &&
                  e.target === e.currentTarget &&
                  ("Enter" === e.key || " " === e.key) &&
                  (e.preventDefault(), e.currentTarget.click())
              }),
              (G[0] = O),
              (G[1] = t))
            : (t = G[1])
          let ea = t,
            en = "row" === et || "directory-row" === et,
            es = "compact-row" === et,
            eo = (es || "center" === (void 0 === D ? "top" : D)) && !!U
          G[2] !== U || G[3] !== es || G[4] !== F
            ? ((i = U
                ? (0, a.jsx)("div", {
                    className: (0, o.A)(
                      "flex shrink-0 items-center",
                      es && "max-w-1/2",
                      null != F && "pointer-events-auto relative z-10",
                    ),
                    children: U,
                  })
                : null),
              (G[2] = U),
              (G[3] = es),
              (G[4] = F),
              (G[5] = i))
            : (i = G[5])
          let er = i
          G[6] !== z || G[7] !== V || G[8] !== Q || G[9] !== es || G[10] !== en
            ? ((s = z
                ? V
                  ? (0, a.jsx)("span", {
                      className: (0, o.A)(
                        "flex shrink-0 items-center justify-center",
                        es && "size-13 rounded-2xl",
                        !es && (en ? "size-9 rounded-lg" : "size-10 rounded-lg"),
                        "outline" === Q ? "border border-default bg-transparent" : "bg-surface-secondary",
                      ),
                      children: es
                        ? (0, a.jsx)("span", { className: "flex size-8 items-center justify-center", children: z })
                        : z,
                    })
                  : (0, a.jsx)("span", { className: "shrink-0", children: z })
                : null),
              (G[6] = z),
              (G[7] = V),
              (G[8] = Q),
              (G[9] = es),
              (G[10] = en),
              (G[11] = s))
            : (s = G[11])
          let el = s,
            ec = null == F && $,
            ed = null != F && "relative"
          G[12] !== J || G[13] !== ee || G[14] !== en || G[15] !== O || G[16] !== et || G[17] !== ed
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
                en &&
                  "min-h-[var(--height-token-row)] w-full min-w-0 justify-center px-[var(--padding-row-x)] py-[var(--padding-row-y)]",
                en && O && "hover:bg-secondary-ghost-hover",
                ee && "bg-text/5",
                O ? "cursor-interaction" : null,
                O &&
                  "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset focus-visible:ring-offset-0",
                J,
              )),
              (G[12] = J),
              (G[13] = ee),
              (G[14] = en),
              (G[15] = O),
              (G[16] = et),
              (G[17] = ed),
              (G[18] = c))
            : (c = G[18])
          let eg = ee ? "true" : void 0,
            eu = null == F ? O : void 0,
            ep = null == F ? ea : void 0
          G[19] !== $ || G[20] !== O || G[21] !== ei || G[22] !== F
            ? ((u =
                null == F || $
                  ? null
                  : (0, a.jsx)(l.N_, {
                      className:
                        "absolute inset-0 cursor-interaction rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-inset",
                      "aria-labelledby": ei,
                      to: F,
                      onClick: O,
                      onAuxClick: (e) => {
                        1 === e.button && O?.(e)
                      },
                    })),
              (G[19] = $),
              (G[20] = O),
              (G[21] = ei),
              (G[22] = F),
              (G[23] = u))
            : (u = G[23])
          let em = es ? "gap-4" : "gap-3",
            eh = null != F && "pointer-events-none",
            ef = "catalog" === et ? "items-start" : "items-center",
            eb = "inline" === Y && "gap-2"
          G[24] !== em || G[25] !== eh || G[26] !== ef || G[27] !== eb
            ? ((p = (0, o.A)("flex", em, eh, ef, eb)),
              (G[24] = em),
              (G[25] = eh),
              (G[26] = ef),
              (G[27] = eb),
              (G[28] = p))
            : (p = G[28])
          let ex = "outside" === X ? el : null,
            ey = eo && "items-center",
            ev = eo && (es ? "gap-4" : "gap-3")
          G[29] !== ey || G[30] !== ev
            ? ((m = (0, o.A)("flex min-w-0 flex-1", ey, ev)), (G[29] = ey), (G[30] = ev), (G[31] = m))
            : (m = G[31])
          let ew = "stacked" === Y ? "flex-col" : "items-center gap-3"
          G[32] !== N || G[33] !== ew
            ? ((h = (0, o.A)("flex min-w-0 flex-1 justify-center gap-0.5", ew, N)),
              (G[32] = N),
              (G[33] = ew),
              (G[34] = h))
            : (h = G[34])
          let e_ = "inline" === Y && "w-28 shrink-0 sm:w-48",
            eC = eo || "inline" === X ? null : "justify-between"
          G[35] !== e_ || G[36] !== eC
            ? ((f = (0, o.A)("flex min-w-0 items-center gap-2", e_, eC)), (G[35] = e_), (G[36] = eC), (G[37] = f))
            : (f = G[37])
          let ej = "inline" === X ? el : null,
            eT = es ? "min-w-0 text-lg leading-6 wrap-break-word" : "truncate",
            eP = en ? "text-[length:var(--detail-row-font-size,var(--text-base))]" : "font-medium",
            eG = "catalog" === et && "text-base font-semibold"
          ;(G[38] !== eT || G[39] !== eP || G[40] !== eG
            ? ((b = (0, o.A)("text-default", eT, eP, eG)), (G[38] = eT), (G[39] = eP), (G[40] = eG), (G[41] = b))
            : (b = G[41]),
            G[42] !== b || G[43] !== A || G[44] !== ei
              ? ((x = (0, a.jsx)("div", { id: ei, className: b, children: A })),
                (G[42] = b),
                (G[43] = A),
                (G[44] = ei),
                (G[45] = x))
              : (x = G[45]),
            G[46] !== L || G[47] !== F
              ? ((y = L?.length
                  ? (0, a.jsx)("div", {
                      className: (0, o.A)(
                        "flex shrink-0 items-center gap-1",
                        null != F && "pointer-events-auto relative z-10",
                      ),
                      children: L.map(g),
                    })
                  : null),
                (G[46] = L),
                (G[47] = F),
                (G[48] = y))
              : (y = G[48]),
            G[49] !== x || G[50] !== y
              ? ((v = (0, a.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [x, y] })),
                (G[49] = x),
                (G[50] = y),
                (G[51] = v))
              : (v = G[51]))
          let ek = eo ? null : er
          ;(G[52] !== f || G[53] !== ej || G[54] !== v || G[55] !== ek
            ? ((w = (0, a.jsxs)("div", { className: f, children: [ej, v, ek] })),
              (G[52] = f),
              (G[53] = ej),
              (G[54] = v),
              (G[55] = ek),
              (G[56] = w))
            : (w = G[56]),
            G[57] !== M || G[58] !== S || G[59] !== Y || G[60] !== es
              ? ((_ = M
                  ? (0, a.jsx)("div", {
                      className: (0, o.A)(
                        "text-secondary",
                        es ? "truncate text-suggestion-description" : "text-sm leading-relaxed",
                        "inline" === Y ? "min-w-0 flex-1 truncate text-start" : null,
                        S ?? (!es && "line-clamp-3"),
                      ),
                      children: M,
                    })
                  : null),
                (G[57] = M),
                (G[58] = S),
                (G[59] = Y),
                (G[60] = es),
                (G[61] = _))
              : (_ = G[61]),
            G[62] !== h || G[63] !== w || G[64] !== _
              ? ((C = (0, a.jsxs)("div", { className: h, children: [w, _] })),
                (G[62] = h),
                (G[63] = w),
                (G[64] = _),
                (G[65] = C))
              : (C = G[65]))
          let ez = eo ? er : null
          return (
            G[66] !== m || G[67] !== C || G[68] !== ez
              ? ((j = (0, a.jsxs)("div", { className: m, children: [C, ez] })),
                (G[66] = m),
                (G[67] = C),
                (G[68] = ez),
                (G[69] = j))
              : (j = G[69]),
            G[70] !== p || G[71] !== ex || G[72] !== j || G[73] !== E
              ? ((T = (0, a.jsxs)("div", { className: p, children: [ex, j, E] })),
                (G[70] = p),
                (G[71] = ex),
                (G[72] = j),
                (G[73] = E),
                (G[74] = T))
              : (T = G[74]),
            G[75] !== k ||
            G[76] !== ec ||
            G[77] !== c ||
            G[78] !== eg ||
            G[79] !== eu ||
            G[80] !== ep ||
            G[81] !== u ||
            G[82] !== T ||
            G[83] !== q
              ? ((P = (0, a.jsxs)(d, {
                  ref: k,
                  disabled: ec,
                  tooltip: q,
                  className: c,
                  "data-search-result-active": eg,
                  onClick: eu,
                  onKeyDown: ep,
                  children: [u, T],
                })),
                (G[75] = k),
                (G[76] = ec),
                (G[77] = c),
                (G[78] = eg),
                (G[79] = eu),
                (G[80] = ep),
                (G[81] = u),
                (G[82] = T),
                (G[83] = q),
                (G[84] = P))
              : (P = G[84]),
            P
          )
        },
      },
    )
  },
  jaeI(e, t, i) {
    function a(e, t) {
      return e?.structure === "workspace" && "quorum" !== e.plan_type && t
    }
    i.d(
      t,
      {},
      {
        J: function (e, t, i) {
          return null != e && (!a(e, t) || i?.includes("chatgpt.workspace_plugins.use") === !0)
        },
        l: a,
      },
    )
  },
  qlwg(e, t, i) {
    let a = (0, i("iJY0").a)({
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
      body: '<path d="M8.00025 8.79761C10.9675 8.79777 13.4025 11.0751 13.6545 13.9773C13.6794 14.2659 13.4657 14.5205 13.177 14.5457C12.8883 14.5707 12.6339 14.3567 12.6086 14.0681C12.4033 11.7038 10.4181 9.84855 8.00025 9.84839C5.58227 9.8484 3.59718 11.7037 3.39185 14.0681C3.36657 14.3568 3.11124 14.5707 2.82251 14.5457C2.53405 14.5204 2.32018 14.2658 2.34497 13.9773C2.59702 11.075 5.03284 8.79762 8.00025 8.79761Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00025 1.31128C9.75704 1.31137 11.1809 2.73611 11.1809 4.49292C11.1808 6.24966 9.75698 7.6735 8.00025 7.67358C6.24343 7.67358 4.81869 6.24971 4.81861 4.49292C4.81861 2.73605 6.24338 1.31128 8.00025 1.31128ZM8.00025 2.36206C6.82328 2.36206 5.86939 3.31595 5.86939 4.49292C5.86947 5.66981 6.82333 6.62378 8.00025 6.62378C9.17708 6.62369 10.131 5.66976 10.1311 4.49292C10.1311 3.31601 9.17714 2.36215 8.00025 2.36206Z" fill="currentColor"/>',
    })
    i.d(t, {}, { x: a })
  },
  pjm8(e, t, i) {
    let a = (0, i("iJY0").a)({
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
    i.d(t, {}, { k: a })
  },
}
//# sourceMappingURL=716164.ed73b0386d.js.map
