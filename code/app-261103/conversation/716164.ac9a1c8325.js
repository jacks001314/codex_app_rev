export const __rspack_esm_ids = [716164]
export const __webpack_modules__ = {
  Rk4p(e, t, i) {
    var a = i("zTeN"),
      n = i("OiCI"),
      s = i("OWtl"),
      o = i("OMIV"),
      r = i("rvFo")
    let l = (0, a.RD)(s.u, () => ({ queryKey: ["accounts", "check"], enabled: !1, staleTime: r.D.ONE_MINUTE })),
      c = (0, a.SZ)(
        s.u,
        ({ get: e }) => {
          let t = e(o.M9)
          return {
            workspaceId: t?.getContext().user.customIDs?.workspace_id,
            disabled: t?.checkGate("2911503418") ?? !1,
          }
        },
        ({ get: e, set: t }) => {
          let i = e(o.M9)
          if (null == i) return
          let a = () => {
            t({ workspaceId: i.getContext().user.customIDs?.workspace_id, disabled: i.checkGate("2911503418") })
          }
          return (a(), i.on("values_updated", a), () => i.off("values_updated", a))
        },
      ),
      d = (0, a.un)(s.u, ({ get: e }) => {
        let t = e(n.tT),
          i = e(l).data?.accounts?.find((e) => e.id === t)
        if (i?.structure === "personal") return "allowed"
        let a = e(c)
        return i?.structure !== "workspace" || a.workspaceId !== t || e(o.RS) || !e(o.Ye, "2911503418")
          ? "unknown"
          : a.disabled
            ? "disabled"
            : "allowed"
      }),
      u = (0, a.un)(s.u, ({ get: e }) => "allowed" === e(d)),
      g = (0, a.un)(s.u, ({ get: e }) => "disabled" === e(d))
    i.d(t, {}, { W: g, c: u })
  },
  nBWL(e, t, i) {
    i.d(t, { x: () => eo })
    var a = i("ABep"),
      n = i("QosV"),
      s = i("slpy"),
      o = i("SmGe"),
      r = i("T0Rc"),
      l = i("dMO9"),
      c = i.n(l),
      d = i("i5ac"),
      u = i.n(d),
      g = i("zTeN"),
      p = i("zd8w"),
      m = i("oyxz"),
      h = i("Wf1j"),
      f = i("Qgfj"),
      b = i("Ghh3"),
      x = i("ygO2"),
      y = i("JNtf"),
      v = i("bqtn"),
      w = i("HOLv"),
      _ = i("GO7r"),
      C = i("RNul"),
      T = i("SGsN"),
      j = i("Jqpj"),
      k = i("OWtl"),
      P = i("hZax"),
      G = i("aepO"),
      z = i("rvFo"),
      A = i("wwvo"),
      M = i("lcic"),
      N = i("yu23"),
      S = i("HZfM"),
      I = i("eFn4"),
      D = i("EOo5"),
      U = i("Rk4p"),
      E = i("OAko"),
      L = i("zKCW"),
      O = i("Bbed"),
      B = i("X6Vn"),
      q = i("jaeI"),
      F = i("JYRT"),
      R = i("DY7H"),
      W = i("bMrQ"),
      Z = i("gNqU"),
      K = i("g2DC"),
      H = i("hfkq"),
      Y = i("slBk")
    let J = (0, O._)(
      async () => (await Promise.all([i.e(312708), i.e(57588)]).then(i.bind(i, "uC11"))).GptPluginMigrationDialog,
    )
    function $(e) {
      let t,
        i,
        s = (0, n.c)(14),
        { resource: o, onClose: r, onStartChat: l } = e,
        c = (0, P.Zj)("2160578039")
      s[0] !== o.gizmo.id || s[1] !== o.gizmo.migrated_plugin_id
        ? ((t = { gizmoId: o.gizmo.id, pluginId: o.gizmo.migrated_plugin_id }),
          (s[0] = o.gizmo.id),
          (s[1] = o.gizmo.migrated_plugin_id),
          (s[2] = t))
        : (t = s[2])
      let d = (0, g._U)(H.f, t),
        u = c && !d && "gpt" === o.gizmo.gizmo_type ? o.gizmo.migrated_plugin_id : null
      if (null != u) {
        let e
        return (
          s[3] !== r || s[4] !== l || s[5] !== u || s[6] !== o
            ? ((e = (0, a.jsx)(V, { resource: o, pluginId: u, onClose: r, onStartChat: l })),
              (s[3] = r),
              (s[4] = l),
              (s[5] = u),
              (s[6] = o),
              (s[7] = e))
            : (e = s[7]),
          e
        )
      }
      return 0 !== o.gizmo.live_version || d
        ? (s[8] !== c || s[9] !== r || s[10] !== l || s[11] !== d || s[12] !== o
            ? ((i = c
                ? (0, a.jsx)(Q, { resource: o, remigration: d, onClose: r, onStartChat: l })
                : (0, a.jsx)(X, { onClick: () => l(o) })),
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
    function V(e) {
      let t,
        i,
        s,
        o,
        r,
        l,
        c,
        d,
        u,
        p,
        h,
        f,
        b = (0, n.c)(41),
        { resource: y, pluginId: v, onClose: _, onStartChat: C } = e,
        T = (0, g.gh)(k.u),
        j = (0, S.Zp)(),
        { data: P, isPending: G, isFetching: z, isError: A, refetch: M } = (0, g._U)(W.B, v),
        I = G || z,
        D = null != P && !I && !A
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
      } else if (P?.type === "admin") {
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
      } else if (I || D) {
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
      } else if (I || D)
        if (P?.type === "admin") {
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
          ? ((l = (0, a.jsx)(L.l, { variant: "catalog", icon: o, title: r, content: s })),
            (b[15] = s),
            (b[16] = r),
            (b[17] = l))
          : (l = b[17]),
        b[18] !== D ||
        b[19] !== P ||
        b[20] !== A ||
        b[21] !== j ||
        b[22] !== _ ||
        b[23] !== v ||
        b[24] !== M ||
        b[25] !== T
          ? ((c = () => {
              A ? M() : (_(), D ? (0, W.y)(T, v, P, j) : j("/plugins"))
            }),
            (b[18] = D),
            (b[19] = P),
            (b[20] = A),
            (b[21] = j),
            (b[22] = _),
            (b[23] = v),
            (b[24] = M),
            (b[25] = T),
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
        b[31] !== C || b[32] !== y ? ((u = () => C(y)), (b[31] = C), (b[32] = y), (b[33] = u)) : (u = b[33]),
        b[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.about.keepUsingGpt",
              defaultMessage: "Keep using GPT",
              description:
                "Secondary action in a migrated GPT details dialog that opens a chat with the original GPT instead of its plugin",
            })),
            (b[34] = p))
          : (p = b[34]),
        b[35] !== u
          ? ((h = (0, a.jsx)(x.$, {
              className: "w-full",
              color: "ghostSecondary",
              size: "promotionalLink",
              onClick: u,
              children: p,
            })),
            (b[35] = u),
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
    function Q(e) {
      let t,
        i,
        o,
        r,
        l,
        c,
        d,
        u,
        p,
        f,
        b,
        y,
        v,
        _ = (0, n.c)(50),
        { resource: C, remigration: T, onClose: j, onStartChat: G } = e,
        z = (0, g.gh)(k.u),
        A = (0, S.Zp)(),
        M = (0, h.A)(),
        O = (0, g.Ul)(U.c),
        W = (0, g.Ul)(U.W),
        H = (0, P.Fj)("2513446768")
      _[0] !== H || _[1] !== M
        ? ((t = M.formatDate((0, Y.l)(H.get("retirement_date", "")), {
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })),
          (_[0] = H),
          (_[1] = M),
          (_[2] = t))
        : (t = _[2])
      let $ = t,
        { accountId: V, userId: Q } = (0, D.As)()
      _[3] === Symbol.for("react.memo_cache_sentinel") ? ((i = { preview: !1 }), (_[3] = i)) : (i = _[3])
      let { data: ee } = (0, E.YL)(void 0, i),
        et = (0, g._U)(F.X, "2562735250")?.get("enabled", !1) === !0,
        ei = (0, q.l)(ee, (0, P.Zj)("1355972088")),
        ea = (0, P.Fj)("2826703856").get("enable_gpt_fe_controls", !1),
        {
          data: en,
          isPending: es,
          isError: eo,
        } = (0, g._U)(I.Jk, V ?? "", {
          enabled: null != V && ee?.id === V && "workspace" === ee.structure && (ei || ea),
        })
      if (
        et &&
        ei &&
        !eo &&
        (0, R.rP)({
          resource: C,
          remigration: T,
          account: ee,
          accountId: V,
          permissions: en?.permissions,
          rbacEnabled: ei,
        })
      ) {
        let e, t
        return (
          _[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(Z.E_, { surface: "gpt" })), (_[4] = e))
            : (e = _[4]),
          _[5] !== G || _[6] !== C
            ? ((t = (0, a.jsxs)("div", {
                className: "flex flex-col gap-2",
                children: [e, (0, a.jsx)(X, { onClick: () => G(C) })],
              })),
              (_[5] = G),
              (_[6] = C),
              (_[7] = t))
            : (t = _[7]),
          t
        )
      }
      if (!et || !(0, R.l5)({ resource: C, remigration: T, account: ee, accountId: V, userId: Q, enabled: !0 })) {
        let e, t, i
        return (
          _[8] !== A || _[9] !== j
            ? ((e = (0, a.jsx)(Z.Xn, {
                currentGpt: !0,
                openTarget: "external-browser",
                onExplore: () => {
                  ;(j(), A("/plugins"))
                },
              })),
              (_[8] = A),
              (_[9] = j),
              (_[10] = e))
            : (e = _[10]),
          _[11] !== G || _[12] !== C
            ? ((t = (0, a.jsx)(X, { onClick: () => G(C) })), (_[11] = G), (_[12] = C), (_[13] = t))
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
      let er = (0, R.T8)({ account: ee, rbacEnabled: ea, permissions: en?.permissions, isPending: es, isError: eo }),
        el = (0, R.l2)({
          resource: C,
          remigration: T,
          account: ee,
          accountId: V,
          userId: Q,
          enabled: !0,
          gptPermission: er,
        }),
        ec = (0, q.J)(ee, ei, en?.permissions)
      if (W) {
        let e
        ;(_[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.workspaceAuthoringDisabledTooltip",
              defaultMessage: "Plugin creation is disabled for this workspace",
              description:
                "Tooltip for a disabled GPT migration button when plugin authoring is disabled for the current workspace. This workspace feature restriction is separate from plugin-use permissions and administrator settings for Plugin Creator. Complete sentence with no placeholders.",
            })),
            (_[17] = e))
          : (e = _[17]),
          (o = e))
      } else if ("allowed" !== er) {
        let e
        ;(_[18] !== er ? ((e = (0, a.jsx)(K.M, { permission: er })), (_[18] = er), (_[19] = e)) : (e = _[19]), (o = e))
      } else if (!ec) {
        let e
        ;(_[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.permissionRequired",
              defaultMessage: "Your workspace must allow you to use plugins to migrate this GPT",
              description:
                "Tooltip on a disabled GPT migration button for workspace users without permission to use plugins, or while that permission is loading",
            })),
            (_[20] = e))
          : (e = _[20]),
          (o = e))
      }
      ;(_[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = (0, a.jsx)(w.I, { asset: N.k, className: "text-secondary" })), (_[21] = r))
        : (r = _[21]),
        _[22] !== $
          ? ((l = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.about.migrateTitle",
              defaultMessage: "Migrate this GPT to a plugin by {deadline}",
              description:
                "Banner in a GPT details dialog for its eligible creator or administrator; deadline is the localized month and day when unmigrated GPTs retire.",
              values: { deadline: $ },
            })),
            (_[22] = $),
            (_[23] = l))
          : (l = _[23]),
        _[24] !== $
          ? ((c = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.about.migrateDescription.editingLocked",
              defaultMessage:
                "Migrate to a plugin so people can keep using it after {deadline}. Once migrated, the original GPT can no longer be edited. You can make future updates to the plugin.",
              description:
                "Body of the migration notice in a GPT details dialog, shown to the GPT creator or an eligible workspace administrator or owner before migration. Explains that migration preserves access through a plugin after GPT retirement, prevents further edits to the original GPT, and allows future updates to the plugin. Placeholder {deadline} is a nonempty, localized UTC month and day with no year, such as December 11. The Migrate to plugin button below opens confirmation; the separate Start chat button keeps using the original GPT. These three complete sentences can wrap onto multiple lines.",
              values: { deadline: $ },
            })),
            (_[24] = $),
            (_[25] = c))
          : (c = _[25]),
        _[26] !== l || _[27] !== c
          ? ((d = (0, a.jsx)(L.l, { variant: "announcement", icon: r, title: l, content: c })),
            (_[26] = l),
            (_[27] = c),
            (_[28] = d))
          : (d = _[28]))
      let ed = !O || !ec || !el
      return (
        _[29] !== el || _[30] !== ec || _[31] !== j || _[32] !== T || _[33] !== C || _[34] !== z
          ? ((u = () => {
              z.get(U.c) && el && ec && (j(), (0, B.qf)(z, J, { resource: C, remigration: T }))
            }),
            (_[29] = el),
            (_[30] = ec),
            (_[31] = j),
            (_[32] = T),
            (_[33] = C),
            (_[34] = z),
            (_[35] = u))
          : (u = _[35]),
        _[36] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, a.jsx)(m.A, {
              id: "chatgptConversations.gpts.migration.migrate",
              defaultMessage: "Migrate to plugin",
              description:
                "Button in GPT details shown to its eligible owner or workspace administrator; opens a confirmation dialog to create a private plugin from the published GPT",
            })),
            (_[36] = p))
          : (p = _[36]),
        _[37] !== ed || _[38] !== u
          ? ((f = (0, a.jsx)(x.$, {
              className: "w-full",
              "aria-disabled": ed,
              color: "primary",
              size: "detailAction",
              onClick: u,
              children: p,
            })),
            (_[37] = ed),
            (_[38] = u),
            (_[39] = f))
          : (f = _[39]),
        _[40] !== o || _[41] !== f
          ? ((b = (0, a.jsx)(s.m, { content: o, children: f })), (_[40] = o), (_[41] = f), (_[42] = b))
          : (b = _[42]),
        _[43] !== G || _[44] !== C
          ? ((y = (0, a.jsx)(X, { secondary: !0, onClick: () => G(C) })), (_[43] = G), (_[44] = C), (_[45] = y))
          : (y = _[45]),
        _[46] !== b || _[47] !== y || _[48] !== d
          ? ((v = (0, a.jsxs)("div", { className: "flex flex-col gap-2", children: [d, b, y] })),
            (_[46] = b),
            (_[47] = y),
            (_[48] = d),
            (_[49] = v))
          : (v = _[49]),
        v
      )
    }
    function X(e) {
      let t,
        i,
        s = (0, n.c)(8),
        { secondary: o, onClick: r } = e,
        l = void 0 !== o && o,
        c = l ? "self-center" : "h-12 w-full justify-center",
        d = l ? "ghostSecondary" : "primary",
        u = l ? "dialogGhost" : "large"
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
        s[2] !== r || s[3] !== c || s[4] !== d || s[5] !== u || s[6] !== t
          ? ((i = (0, a.jsx)(x.$, { className: c, color: d, radius: "full", size: u, onClick: r, children: t })),
            (s[2] = r),
            (s[3] = c),
            (s[4] = d),
            (s[5] = u),
            (s[6] = t),
            (s[7] = i))
          : (i = s[7]),
        i
      )
    }
    function ee(e) {
      let t,
        i,
        s,
        o,
        l,
        c = (0, n.c)(12),
        { accountId: d, gizmoId: u } = e
      ;(c[0] !== d || c[1] !== u
        ? ((t = ["chatgpt-gizmos", "about", d, u]), (c[0] = d), (c[1] = u), (c[2] = t))
        : (t = c[2]),
        c[3] !== u
          ? ((i = (e) => {
              let { signal: t } = e
              return b.Request.safeGet("/gizmos/{gizmo_id}/about", { parameters: { path: { gizmo_id: u } }, signal: t })
            }),
            (c[3] = u),
            (c[4] = i))
          : (i = c[4]),
        c[5] !== t || c[6] !== i
          ? ((s = { queryKey: t, queryFn: i, staleTime: z.D.ONE_MINUTE }), (c[5] = t), (c[6] = i), (c[7] = s))
          : (s = c[7]))
      let { data: g } = (0, r.I)(s)
      return null == g || 0 === g.about_blocks.length
        ? null
        : (c[8] !== g.about_blocks ? ((o = g.about_blocks.map(et)), (c[8] = g.about_blocks), (c[9] = o)) : (o = c[9]),
          c[10] !== o
            ? ((l = (0, a.jsx)("div", { className: "mt-4 flex flex-wrap justify-center gap-6", children: o })),
              (c[10] = o),
              (c[11] = l))
            : (l = c[11]),
          l)
    }
    function et(e) {
      return (0, a.jsx)(ei, { block: e }, e.type)
    }
    function ei(e) {
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
    var ea = i("E4rW"),
      en = i("H7Nt"),
      es = i("T4c2")
    function eo(e) {
      let t,
        i = (0, n.c)(14),
        { accountId: s, gizmo: o, isOwnerAndWorkspaceAllowsSpecific: r, onClose: l, onStartChat: c } = e,
        d = (0, P.Zj)("2160578039"),
        u = null
      "string" == typeof o ? (u = o) : d && (u = o.gizmo.id)
      let { data: p, isError: h, refetch: f } = (0, g._U)(A.os, u),
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
          ? ((t = (0, a.jsx)(er, {
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
    function er(e) {
      let t,
        i,
        l,
        d,
        f,
        C,
        j,
        N,
        S,
        I,
        D,
        U,
        E,
        L,
        O,
        B,
        q,
        F,
        R,
        W,
        Z,
        K,
        Y,
        J,
        V,
        Q,
        X,
        et,
        ei,
        eo = (0, n.c)(144),
        { accountId: er, isOwnerAndWorkspaceAllowsSpecific: eg, resource: ep, onClose: em, onStartChat: eh } = e,
        ef = (0, g.gh)(k.u),
        eb = (0, h.A)(),
        ex = (0, P.Zj)("1825130190"),
        ey = (0, P.Zj)("2160578039")
      eo[0] !== ep.gizmo.id || eo[1] !== ep.gizmo.migrated_plugin_id
        ? ((t = { gizmoId: ep.gizmo.id, pluginId: ep.gizmo.migrated_plugin_id }),
          (eo[0] = ep.gizmo.id),
          (eo[1] = ep.gizmo.migrated_plugin_id),
          (eo[2] = t))
        : (t = eo[2])
      let ev = !(0, g._U)(H.f, t) && ey && "gpt" === ep.gizmo.gizmo_type && null != ep.gizmo.migrated_plugin_id,
        [ew, e_] = (0, p.useState)(!1),
        [eC, eT] = (0, p.useState)(!1),
        { data: ej } = (0, g.Ul)(A.kd),
        ek = !ev
      ;(eo[3] !== ep.gizmo.author.user_id
        ? ((i = () =>
            b.Request.safeGet("/gizmo_creators/{uid}/gizmos", {
              parameters: { path: { uid: ep.gizmo.author.user_id } },
            })),
          (eo[3] = ep.gizmo.author.user_id),
          (eo[4] = i))
        : (i = eo[4]),
        eo[5] !== er || eo[6] !== ep.gizmo.author.user_id
          ? ((l = (0, es.NY)(er, ep.gizmo.author.user_id)),
            (eo[5] = er),
            (eo[6] = ep.gizmo.author.user_id),
            (eo[7] = l))
          : (l = eo[7]),
        eo[8] !== ek || eo[9] !== i || eo[10] !== l
          ? ((d = { enabled: ek, queryFn: i, queryKey: l, staleTime: z.D.ONE_MINUTE }),
            (eo[8] = ek),
            (eo[9] = i),
            (eo[10] = l),
            (eo[11] = d))
          : (d = eo[11]))
      let { data: eP, isPending: eG } = (0, r.I)(d)
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
        ? ((j = ep.gizmo.author.display_name?.trim() || void 0), (eo[17] = ep.gizmo.author.display_name), (eo[18] = j))
        : (j = eo[18])
      let eM = j
      eo[19] !== ej || eo[20] !== ep.gizmo.id
        ? ((N = ej?.some((e) => {
            let { item: t } = e
            return t.gizmo.id === ep.gizmo.id
          })),
          (eo[19] = ej),
          (eo[20] = ep.gizmo.id),
          (eo[21] = N))
        : (N = eo[21])
      let eN = N
      if (
        eo[22] !== er ||
        eo[23] !== ez ||
        eo[24] !== ew ||
        eo[25] !== eM ||
        eo[26] !== eP?.items ||
        eo[27] !== eb ||
        eo[28] !== eG ||
        eo[29] !== ev ||
        eo[30] !== eg ||
        eo[31] !== eN ||
        eo[32] !== eC ||
        eo[33] !== eA ||
        eo[34] !== em ||
        eo[35] !== eh ||
        eo[36] !== ep ||
        eo[37] !== ex ||
        eo[38] !== ef
      ) {
        let e = u()(c()(ep.tools.map(eu)), ec),
          t = eP?.items.filter((e) => {
            let { gizmo: t } = e
            return "snorlax" !== t.gizmo_type && null == (0, ea.m)(t.tags, eg)
          }),
          i = t?.[0]?.gizmo.author.display_name?.trim() || eM
        if (
          eo[55] !== er ||
          eo[56] !== ez ||
          eo[57] !== ew ||
          eo[58] !== eM ||
          eo[59] !== eb ||
          eo[60] !== ev ||
          eo[61] !== eN ||
          eo[62] !== eC ||
          eo[63] !== eA ||
          eo[64] !== em ||
          eo[65] !== eh ||
          eo[66] !== ep ||
          eo[67] !== ex ||
          eo[68] !== ef
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
            eo[82] !== ez ||
            eo[83] !== ew ||
            eo[84] !== eb ||
            eo[85] !== eN ||
            eo[86] !== eC ||
            eo[87] !== em ||
            eo[88] !== ep ||
            eo[89] !== ef
              ? ((W =
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
                                  ef.get(T.Id).danger(
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
                                  ;(0, G.E)(`https://chatgpt.com/g/${encodeURIComponent(e)}`).then(eT)
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
                          (0, a.jsx)(en.o, { resource: ep, onSelect: em }),
                        ],
                      })),
                (eo[82] = ez),
                (eo[83] = ew),
                (eo[84] = eb),
                (eo[85] = eN),
                (eo[86] = eC),
                (eo[87] = em),
                (eo[88] = ep),
                (eo[89] = ef),
                (eo[90] = W))
              : (W = eo[90]),
            (Z = ev ? "catalogDetail" : "wide"),
            (K = ev ? "compact" : "default"),
            (Y = ev ? "catalog" : "promotional"),
            eo[91] !== em
              ? ((J = (e) => {
                  e || em()
                }),
                (eo[91] = em),
                (eo[92] = J))
              : (J = eo[92]),
            (q = "flex min-h-0 flex-col"),
            (I = "min-h-0 flex-1 overflow-y-auto px-5 pt-20 pb-4 sm:px-10"),
            eo[93] !== ep.gizmo.display.profile_picture_url
              ? ((e = ep.gizmo.display.profile_picture_url?.trim() || null),
                (eo[93] = ep.gizmo.display.profile_picture_url),
                (eo[94] = e))
              : (e = eo[94]),
            eo[95] !== eA || eo[96] !== ep.gizmo.id || eo[97] !== e
              ? ((t = (0, a.jsx)(M.S, {
                  className: "mb-1 size-20",
                  customGpt: { iconUrl: e, id: ep.gizmo.id, name: eA },
                  presentation: "avatar",
                })),
                (eo[95] = eA),
                (eo[96] = ep.gizmo.id),
                (eo[97] = e),
                (eo[98] = t))
              : (t = eo[98]),
            eo[99] !== eA
              ? ((i = (0, a.jsx)(y.L3, {
                  className: "text-heading-lg leading-7 font-semibold wrap-anywhere text-default",
                  children: eA,
                })),
                (eo[99] = eA),
                (eo[100] = i))
              : (i = eo[100]),
            eo[101] !== eM || eo[102] !== ep.gizmo.author.link_to
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
                (eo[101] = eM),
                (eo[102] = ep.gizmo.author.link_to),
                (eo[103] = n))
              : (n = eo[103]),
            eo[104] !== eA || eo[105] !== ep.gizmo.display.description
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
                (eo[104] = eA),
                (eo[105] = ep.gizmo.display.description),
                (eo[106] = r))
              : (r = eo[106]),
            eo[107] !== t || eo[108] !== i || eo[109] !== n || eo[110] !== r
              ? ((D = (0, a.jsxs)("div", {
                  className: "flex flex-col items-center gap-2 text-center",
                  children: [t, i, n, r],
                })),
                (eo[107] = t),
                (eo[108] = i),
                (eo[109] = n),
                (eo[110] = r),
                (eo[111] = D))
              : (D = eo[111]),
            eo[112] !== er || eo[113] !== ep.gizmo.id
              ? ((U = (0, a.jsx)(ee, { accountId: er, gizmoId: ep.gizmo.id })),
                (eo[112] = er),
                (eo[113] = ep.gizmo.id),
                (eo[114] = U))
              : (U = eo[114]),
            (E =
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
            (eo[55] = er),
            (eo[56] = ez),
            (eo[57] = ew),
            (eo[58] = eM),
            (eo[59] = eb),
            (eo[60] = ev),
            (eo[61] = eN),
            (eo[62] = eC),
            (eo[63] = eA),
            (eo[64] = em),
            (eo[65] = eh),
            (eo[66] = ep),
            (eo[67] = ex),
            (eo[68] = ef),
            (eo[69] = S),
            (eo[70] = I),
            (eo[71] = D),
            (eo[72] = U),
            (eo[73] = E),
            (eo[74] = q),
            (eo[75] = F),
            (eo[76] = R),
            (eo[77] = W),
            (eo[78] = Z),
            (eo[79] = K),
            (eo[80] = Y),
            (eo[81] = J))
        } else
          ((S = eo[69]),
            (I = eo[70]),
            (D = eo[71]),
            (U = eo[72]),
            (E = eo[73]),
            (q = eo[74]),
            (F = eo[75]),
            (R = eo[76]),
            (W = eo[77]),
            (Z = eo[78]),
            (K = eo[79]),
            (Y = eo[80]),
            (J = eo[81]))
        ;((L =
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
                  (0, a.jsx)("div", { className: "flex flex-col gap-2", children: e.map(el) }),
                ],
              })),
          (O =
            !ev && null == t && eG
              ? (0, a.jsx)("div", { "aria-hidden": !0, className: "mt-10 h-24 animate-pulse rounded-xl bg-surface" })
              : null),
          (B =
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
                      children: t.map((e) => (0, a.jsx)(ed, { resource: e, onStartChat: eh }, e.gizmo.id)),
                    }),
                  ],
                })
              : null),
          (eo[22] = er),
          (eo[23] = ez),
          (eo[24] = ew),
          (eo[25] = eM),
          (eo[26] = eP?.items),
          (eo[27] = eb),
          (eo[28] = eG),
          (eo[29] = ev),
          (eo[30] = eg),
          (eo[31] = eN),
          (eo[32] = eC),
          (eo[33] = eA),
          (eo[34] = em),
          (eo[35] = eh),
          (eo[36] = ep),
          (eo[37] = ex),
          (eo[38] = ef),
          (eo[39] = S),
          (eo[40] = I),
          (eo[41] = D),
          (eo[42] = U),
          (eo[43] = E),
          (eo[44] = L),
          (eo[45] = O),
          (eo[46] = B),
          (eo[47] = q),
          (eo[48] = F),
          (eo[49] = R),
          (eo[50] = W),
          (eo[51] = Z),
          (eo[52] = K),
          (eo[53] = Y),
          (eo[54] = J))
      } else
        ((S = eo[39]),
          (I = eo[40]),
          (D = eo[41]),
          (U = eo[42]),
          (E = eo[43]),
          (L = eo[44]),
          (O = eo[45]),
          (B = eo[46]),
          (q = eo[47]),
          (F = eo[48]),
          (R = eo[49]),
          (W = eo[50]),
          (Z = eo[51]),
          (K = eo[52]),
          (Y = eo[53]),
          (J = eo[54]))
      eo[115] !== I ||
      eo[116] !== D ||
      eo[117] !== U ||
      eo[118] !== E ||
      eo[119] !== L ||
      eo[120] !== O ||
      eo[121] !== B
        ? ((V = (0, a.jsxs)("div", { className: I, children: [D, U, E, L, O, B] })),
          (eo[115] = I),
          (eo[116] = D),
          (eo[117] = U),
          (eo[118] = E),
          (eo[119] = L),
          (eo[120] = O),
          (eo[121] = B),
          (eo[122] = V))
        : (V = eo[122])
      let eS = ev ? "shrink-0 px-6 pb-8 sm:px-10" : "shrink-0 px-6 pt-2 pb-8"
      return (
        eo[123] !== em || eo[124] !== eh || eo[125] !== ep
          ? ((Q = (0, a.jsx)($, { resource: ep, onClose: em, onStartChat: eh })),
            (eo[123] = em),
            (eo[124] = eh),
            (eo[125] = ep),
            (eo[126] = Q))
          : (Q = eo[126]),
        eo[127] !== eS || eo[128] !== Q
          ? ((X = (0, a.jsx)("div", { className: eS, children: Q })), (eo[127] = eS), (eo[128] = Q), (eo[129] = X))
          : (X = eo[129]),
        eo[130] !== q || eo[131] !== V || eo[132] !== X
          ? ((et = (0, a.jsxs)("div", { className: q, children: [V, X] })),
            (eo[130] = q),
            (eo[131] = V),
            (eo[132] = X),
            (eo[133] = et))
          : (et = eo[133]),
        eo[134] !== S ||
        eo[135] !== F ||
        eo[136] !== R ||
        eo[137] !== W ||
        eo[138] !== Z ||
        eo[139] !== K ||
        eo[140] !== Y ||
        eo[141] !== J ||
        eo[142] !== et
          ? ((ei = (0, a.jsx)(S, {
              open: F,
              contentClassName: R,
              headerActions: W,
              size: Z,
              radius: K,
              variant: Y,
              onOpenChange: J,
              children: et,
            })),
            (eo[134] = S),
            (eo[135] = F),
            (eo[136] = R),
            (eo[137] = W),
            (eo[138] = Z),
            (eo[139] = K),
            (eo[140] = Y),
            (eo[141] = J),
            (eo[142] = et),
            (eo[143] = ei))
          : (ei = eo[143]),
        ei
      )
    }
    function el(e) {
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
    function ec(e) {
      let { title: t } = e
      return t.id
    }
    function ed(e) {
      let t,
        i,
        s,
        o,
        r,
        l,
        c,
        d,
        u,
        g,
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
        p[20] !== f || p[21] !== h ? ((u = () => f(h)), (p[20] = f), (p[21] = h), (p[22] = u)) : (u = p[22]),
        p[23] !== r || p[24] !== c || p[25] !== d || p[26] !== u
          ? ((g = (0, a.jsx)(j.D, {
              className: "w-full min-w-72",
              description: r,
              icon: c,
              iconContainer: !1,
              presentation: "related",
              title: d,
              onClick: u,
            })),
            (p[23] = r),
            (p[24] = c),
            (p[25] = d),
            (p[26] = u),
            (p[27] = g))
          : (g = p[27]),
        g
      )
    }
    function eu(e) {
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
      u = i("k7G6"),
      g = i("WzdM"),
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
              additionalHeaders: { ...(0, g.A)("chatgpt"), "ChatGPT-Account-Id": a },
              signal: (0, p.w)(t),
            }),
            o = s.find(({ plugin: t }) => t.id === e)?.plugin
          if (null != o)
            return "ENABLED" === o.status && "NOT_AVAILABLE" !== o.installation_policy ? { type: "plugin" } : null
          let d = await i.query.fetch(r.f, a)
          t.throwIfAborted()
          let u = d.accounts[a]?.account
          if (
            u?.account_id !== a ||
            "workspace" !== u.structure ||
            ("account-admin" !== u.account_user_role && "account-owner" !== u.account_user_role)
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
          ;(0, u.Uz)(t, a)
        },
      },
    )
  },
  gNqU(e, t, i) {
    var a = i("ABep"),
      n = i("QosV"),
      s = i("slpy"),
      o = i("yu23"),
      r = i("zTeN"),
      l = i("Wf1j"),
      c = i("oyxz"),
      d = i("eFn4"),
      u = i("EOo5"),
      g = i("Rk4p"),
      p = i("OAko"),
      m = i("zKCW"),
      h = i("ygO2"),
      f = i("ZtSy"),
      b = i("Ot7V"),
      x = i("HOLv"),
      y = i("GO7r"),
      v = i("jaeI"),
      w = i("OWtl"),
      _ = i("hZax"),
      C = i("DY7H"),
      T = i("g2DC"),
      j = i("slBk")
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
            u,
            g = (0, n.c)(20),
            { surface: p, onKeepUsingGpt: f, deadline: b } = e,
            y = (0, l.A)(),
            v = (0, _.Fj)("2513446768")
          if (g[0] !== v || g[1] !== b || g[2] !== y) {
            let e = b ?? (0, j.l)(v.get("retirement_date", ""))
            ;((t = y.formatDate(e, { month: "long", day: "numeric", timeZone: "UTC" })),
              (g[0] = v),
              (g[1] = b),
              (g[2] = y),
              (g[3] = t))
          } else t = g[3]
          let w = t
          if ("directory" === p) {
            let e
            ;(g[4] !== w
              ? ((e = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.blocked.directory.description",
                  defaultMessage:
                    "GPTs can continue as plugins, but your workspace admins have disabled plugins. Your GPTs can’t be migrated and won’t be available after {deadline}.",
                  description:
                    "Notice on GPT lists for creators whose Use plugins permission is disabled by workspace policy. Explains why their GPTs cannot migrate. The deadline is the localized UTC retirement month and day. Keep the complete two-sentence message together.",
                  values: { deadline: w },
                })),
                (g[4] = w),
                (g[5] = e))
              : (e = g[5]),
              (i = e))
          } else if ("migrated" === p) {
            let e
            ;(g[6] !== w
              ? ((e = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.blocked.migrated.description",
                  defaultMessage:
                    "This GPT is now a plugin, but the plugin isn’t available with your current workspace settings. You can keep using this GPT until {deadline}.",
                  description:
                    "Notice before and after continuing a migrated GPT chat, shown to its creator whose Use plugins permission is disabled. The original GPT remains usable until the localized UTC retirement month and day in deadline. Migration has already completed.",
                  values: { deadline: w },
                })),
                (g[6] = w),
                (g[7] = e))
              : (e = g[7]),
              (i = e))
          } else {
            let e
            ;(g[8] !== w
              ? ((e = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.blocked.gpt.description",
                  defaultMessage:
                    "This GPT can continue as a plugin, but your workspace admins have disabled plugins. It can’t be migrated and won’t be available after {deadline}.",
                  description:
                    "Notice in an unmigrated GPT's details or chat, shown to its creator whose Use plugins permission is disabled by workspace policy. The deadline is the localized UTC retirement month and day. The creator can still chat with the GPT until retirement.",
                  values: { deadline: w },
                })),
                (g[8] = w),
                (g[9] = e))
              : (e = g[9]),
              (i = e))
          }
          return (
            g[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((s = (0, a.jsx)(x.I, { asset: o.k, className: "text-secondary" })), (g[10] = s))
              : (s = g[10]),
            g[11] !== w || g[12] !== p
              ? ((r =
                  "directory" === p
                    ? (0, a.jsx)(c.A, {
                        id: "chatgptConversations.gpts.blocked.directory.title",
                        defaultMessage: "GPTs will be retired on {deadline}",
                        description:
                          "Heading on GPT lists for creators whose workspace Use plugins permission is disabled. The deadline is the localized UTC retirement month and day, without a year.",
                        values: { deadline: w },
                      })
                    : (0, a.jsx)(c.A, {
                        id: "chatgptConversations.gpts.blocked.gpt.title",
                        defaultMessage: "This GPT will be retired on {deadline}",
                        description:
                          "Heading in a GPT's details or chat for its creator whose workspace Use plugins permission is disabled. The deadline is the localized UTC retirement month and day, without a year.",
                        values: { deadline: w },
                      })),
                (g[11] = w),
                (g[12] = p),
                (g[13] = r))
              : (r = g[13]),
            g[14] !== f
              ? ((d =
                  null == f
                    ? void 0
                    : (0, a.jsx)(h.$, {
                        type: "button",
                        color: "primary",
                        size: "dialog",
                        onClick: f,
                        children: (0, a.jsx)(c.A, {
                          id: "chatgptConversations.gpts.blocked.keep_using_gpt.label",
                          defaultMessage: "Keep using GPT",
                          description:
                            "Only action in the migrated GPT chat notice when its creator cannot use plugins. Reveals the existing composer with its draft preserved for this visit.",
                        }),
                      })),
                (g[14] = f),
                (g[15] = d))
              : (d = g[15]),
            g[16] !== i || g[17] !== r || g[18] !== d
              ? ((u = (0, a.jsx)(m.l, {
                  variant: "announcement",
                  icon: s,
                  stackOnNarrow: !0,
                  wrapCtas: !0,
                  title: r,
                  content: i,
                  customCtas: d,
                })),
                (g[16] = i),
                (g[17] = r),
                (g[18] = d),
                (g[19] = u))
              : (u = g[19]),
            u
          )
        },
        Xn: function (e) {
          let t,
            i,
            s,
            g,
            y,
            w,
            C,
            T,
            k,
            P,
            G,
            z,
            A = (0, n.c)(41),
            { actionPlacement: M, currentGpt: N, onExplore: S, openTarget: I } = e,
            D = void 0 === M ? "inline" : M,
            U = (0, l.A)(),
            E = (0, _.Fj)("2513446768"),
            L = (0, _.Fj)("2562735250")
          A[0] !== L ? ((t = L.get("enabled", !1)), (A[0] = L), (A[1] = t)) : (t = A[1])
          let O = t,
            { accountId: B } = (0, u.As)()
          A[2] === Symbol.for("react.memo_cache_sentinel") ? ((i = { preview: !1 }), (A[2] = i)) : (i = A[2])
          let { data: q } = (0, p.YL)(void 0, i),
            F = (0, v.l)(q, (0, _.Zj)("1355972088")),
            { data: R } = (0, r._U)(d.Jk, B ?? "", {
              enabled: O && null != B && q?.id === B && "workspace" === q.structure && F,
            }),
            W = O && q?.id === B && (0, v.J)(q, F, R?.permissions)
          A[3] !== E || A[4] !== U
            ? ((s = U.formatDate((0, j.l)(E.get("retirement_date", "")), {
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })),
              (A[3] = E),
              (A[4] = U),
              (A[5] = s))
            : (s = A[5])
          let Z = s,
            K = "below" === D ? "w-full" : void 0,
            H = "below" === D ? "detailAction" : "dialog"
          ;(A[6] !== W || A[7] !== E || A[8] !== U.locale || A[9] !== S || A[10] !== I
            ? ((g = W
                ? S
                : (e) => {
                    ;(0, b.PQ)({
                      disposition: "new-tab",
                      event: e,
                      href: (0, j.L)(U.locale, E.get("learn_more_url", "")),
                      initiator: "open_in_browser_bridge",
                      openTarget: I,
                    })
                  }),
              (A[6] = W),
              (A[7] = E),
              (A[8] = U.locale),
              (A[9] = S),
              (A[10] = I),
              (A[11] = g))
            : (g = A[11]),
            A[12] !== W
              ? ((y = W
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
                (A[12] = W),
                (A[13] = y))
              : (y = A[13]),
            A[14] !== y || A[15] !== K || A[16] !== H || A[17] !== g
              ? ((w = (0, a.jsx)(h.$, { className: K, color: "primary", size: H, onClick: g, children: y })),
                (A[14] = y),
                (A[15] = K),
                (A[16] = H),
                (A[17] = g),
                (A[18] = w))
              : (w = A[18]))
          let Y = w
          A[19] !== E || A[20] !== U.locale || A[21] !== I
            ? ((C = (e) =>
                (0, a.jsx)(f.G, {
                  href: (0, j.L)(U.locale, E.get("learn_more_url", "")),
                  initiator: "open_in_browser_bridge",
                  openTarget: I,
                  underline: "always",
                  children: e,
                })),
              (A[19] = E),
              (A[20] = U.locale),
              (A[21] = I),
              (A[22] = C))
            : (C = A[22])
          let J = C
          if (W)
            if (void 0 !== N && N) {
              let e
              ;(A[24] !== J
                ? ((e = (0, a.jsx)(c.A, {
                    id: "chatgptConversations.gpts.notices.currentRetirement.withLearnMore",
                    defaultMessage:
                      "This GPT will only remain available if its creator migrates it to a plugin. Explore plugins, the new home for custom tools. <learnMore>Learn more</learnMore>",
                    description:
                      "Retirement notice above an unmigrated GPT chat composer or in its details dialog for a viewer who cannot migrate it but can use plugins. Continued availability depends on creator migration. The learnMore tag links to the Help Center retirement and migration FAQ; the separate Explore plugins button opens the Plugins directory. Keep the link in this complete message so it can be reordered naturally.",
                    values: { learnMore: J },
                  })),
                  (A[24] = J),
                  (A[25] = e))
                : (e = A[25]),
                (T = e))
            } else {
              let e
              ;(A[26] !== Z || A[27] !== J
                ? ((e = (0, a.jsx)(c.A, {
                    id: "chatgptConversations.gpts.notices.directoryRetirement.withLearnMore",
                    defaultMessage:
                      "GPTs migrated by their creators will remain available as plugins after {deadline}. <learnMore>Learn more</learnMore>",
                    description:
                      "Retirement notice in the GPT directory for users who can use plugins but have no eligible GPTs to migrate. GPTs migrated by creators continue as plugins; deadline is the localized retirement month and day. The learnMore tag links to the Help Center retirement and migration FAQ; the separate Explore plugins button opens the Plugins directory. Keep the link in this complete message so it can be reordered naturally.",
                    values: { deadline: Z, learnMore: J },
                  })),
                  (A[26] = Z),
                  (A[27] = J),
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
          let $ = "below" === D ? "announcementInset" : "announcement"
          ;(A[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((k = (0, a.jsx)(x.I, { asset: o.k, className: "text-secondary" })), (A[29] = k))
            : (k = A[29]),
            A[30] !== Z
              ? ((P = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.notices.retirementTitle",
                  defaultMessage: "GPTs will be retired on {deadline}",
                  description:
                    "Heading of the retirement notice in the GPT directory or a GPT chat for users who cannot migrate the GPT; deadline is a localized month and day",
                  values: { deadline: Z },
                })),
                (A[30] = Z),
                (A[31] = P))
              : (P = A[31]))
          let V = "inline" === D ? Y : void 0
          A[32] !== T || A[33] !== $ || A[34] !== P || A[35] !== V
            ? ((G = (0, a.jsx)(m.l, {
                variant: $,
                icon: k,
                stackOnNarrow: !0,
                wrapCtas: !0,
                title: P,
                content: T,
                customCtas: V,
              })),
              (A[32] = T),
              (A[33] = $),
              (A[34] = P),
              (A[35] = V),
              (A[36] = G))
            : (G = A[36])
          let Q = G
          return (
            A[37] !== Y || A[38] !== D || A[39] !== Q
              ? ((z =
                  "below" === D
                    ? (0, a.jsxs)("div", { className: "flex w-full flex-col gap-2", children: [Q, Y] })
                    : Q),
                (A[37] = Y),
                (A[38] = D),
                (A[39] = Q),
                (A[40] = z))
              : (z = A[40]),
            z
          )
        },
        m3: function (e) {
          let t,
            i,
            f,
            b,
            k,
            P,
            G,
            z,
            A,
            M,
            N = (0, n.c)(31),
            { surface: S, onMigrate: I, onDismiss: D } = e,
            U = (0, r.gh)(w.u),
            E = (0, l.A)(),
            L = (0, r.Ul)(null != I && g.c),
            O = (0, r.Ul)(null != I && g.W),
            B = (0, _.Fj)("2562735250")
          N[0] !== B ? ((t = B.get("enabled", !1)), (N[0] = B), (N[1] = t)) : (t = N[1])
          let q = t,
            F = (0, _.Fj)("2513446768")
          N[2] !== F || N[3] !== E
            ? ((i = E.formatDate((0, j.l)(F.get("retirement_date", "")), {
                month: "long",
                day: "numeric",
                timeZone: "UTC",
              })),
              (N[2] = F),
              (N[3] = E),
              (N[4] = i))
            : (i = N[4])
          let R = i,
            { accountId: W } = (0, u.As)()
          N[5] === Symbol.for("react.memo_cache_sentinel") ? ((f = { preview: !1 }), (N[5] = f)) : (f = N[5])
          let { data: Z } = (0, p.YL)(void 0, f),
            K = (0, v.l)(Z, (0, _.Zj)("1355972088")),
            H = (0, _.Fj)("2826703856").get("enable_gpt_fe_controls", !1),
            {
              data: Y,
              isPending: J,
              isError: $,
            } = (0, r._U)(d.Jk, W ?? "", {
              enabled: null != W && Z?.id === W && "workspace" === Z.structure && (K || H),
            }),
            V = (0, C.T8)({ account: Z, rbacEnabled: H, permissions: Y?.permissions, isPending: J, isError: $ }),
            Q = q && Z?.id === W && (0, v.J)(Z, K, Y?.permissions)
          if (O) {
            let e
            ;(N[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.migration.workspaceAuthoringDisabledTooltip",
                  defaultMessage: "Plugin creation is disabled for this workspace",
                  description:
                    "Tooltip for a disabled GPT migration button when plugin authoring is disabled for the current workspace. This workspace feature restriction is separate from plugin-use permissions and administrator settings for Plugin Creator. Complete sentence with no placeholders.",
                })),
                (N[6] = e))
              : (e = N[6]),
              (b = e))
          } else if ("allowed" !== V) {
            let e
            ;(N[7] !== V ? ((e = (0, a.jsx)(T.M, { permission: V })), (N[7] = V), (N[8] = e)) : (e = N[8]), (b = e))
          } else if (!Q) {
            let e
            ;(N[9] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.migration.permissionRequired",
                  defaultMessage: "Your workspace must allow you to use plugins to migrate this GPT",
                  description:
                    "Tooltip on a disabled GPT migration button for workspace users without permission to use plugins, or while that permission is loading",
                })),
                (N[9] = e))
              : (e = N[9]),
              (b = e))
          }
          return (
            N[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((k = (0, a.jsx)(x.I, { asset: o.k, className: "text-secondary" })), (N[10] = k))
              : (k = N[10]),
            N[11] !== R
              ? ((P = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.notices.migrateTitle",
                  defaultMessage: "Migrate your GPTs to plugins by {deadline}",
                  description:
                    "Heading of the migration notice in GPT lists or above a GPT chat composer, asking eligible creators to migrate their GPTs to plugins; deadline is a localized month and day",
                  values: { deadline: R },
                })),
                (N[11] = R),
                (N[12] = P))
              : (P = N[12]),
            N[13] !== R
              ? ((G = (0, a.jsx)(c.A, {
                  id: "chatgptConversations.gpts.notices.directoryMigration",
                  defaultMessage:
                    "GPTs that aren’t migrated won’t be available after {deadline}. Migrate yours so people can keep using them as plugins.",
                  description:
                    "Migration notice in the GPT directory or above a GPT chat composer for creators who can migrate GPTs; deadline is a localized month and day after which unmigrated GPTs retire",
                  values: { deadline: R },
                })),
                (N[13] = R),
                (N[14] = G))
              : (G = N[14]),
            N[15] !== Q || N[16] !== V || N[17] !== b || N[18] !== I || N[19] !== U || N[20] !== S || N[21] !== L
              ? ((z =
                  null == I
                    ? void 0
                    : (0, a.jsx)(s.m, {
                        content: b,
                        children: (0, a.jsx)(h.$, {
                          color: "primary",
                          size: "dialog",
                          "aria-disabled": !L || !Q || "allowed" !== V,
                          onClick: (e) => {
                            U.get(g.c) && Q && "allowed" === V && I(e)
                          },
                          children:
                            "chat" === S
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
                (N[15] = Q),
                (N[16] = V),
                (N[17] = b),
                (N[18] = I),
                (N[19] = U),
                (N[20] = S),
                (N[21] = L),
                (N[22] = z))
              : (z = N[22]),
            N[23] !== E || N[24] !== D
              ? ((A =
                  null == D
                    ? void 0
                    : (0, a.jsx)(h.$, {
                        "aria-label": E.formatMessage({
                          id: "chatgptConversations.gpts.notices.dismiss",
                          defaultMessage: "Dismiss migration notice",
                          description:
                            "Accessible label for the close button on a GPT chat migration notice; hides the notice for this page session without migrating anything",
                        }),
                        color: "ghost",
                        size: "icon",
                        uniform: !0,
                        onClick: D,
                        children: (0, a.jsx)(y.Gmf, {}),
                      })),
                (N[23] = E),
                (N[24] = D),
                (N[25] = A))
              : (A = N[25]),
            N[26] !== P || N[27] !== G || N[28] !== z || N[29] !== A
              ? ((M = (0, a.jsx)(m.l, {
                  variant: "announcement",
                  icon: k,
                  stackOnNarrow: !0,
                  wrapCtas: !0,
                  title: P,
                  content: G,
                  customCtas: z,
                  trailingAction: A,
                })),
                (N[26] = P),
                (N[27] = G),
                (N[28] = z),
                (N[29] = A),
                (N[30] = M))
              : (M = N[30]),
            M
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
        u = (0, n.c)(14)
      ;(u[0] !== e
        ? (({ disabled: t, onClick: i, onKeyDown: o, tooltip: l, ...r } = e),
          (u[0] = e),
          (u[1] = t),
          (u[2] = i),
          (u[3] = o),
          (u[4] = r),
          (u[5] = l))
        : ((t = u[1]), (i = u[2]), (o = u[3]), (r = u[4]), (l = u[5])),
        u[6] !== t || u[7] !== i || u[8] !== o || u[9] !== r
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
            (u[6] = t),
            (u[7] = i),
            (u[8] = o),
            (u[9] = r),
            (u[10] = c))
          : (c = u[10]))
      let g = c
      return (
        u[11] !== g || u[12] !== l
          ? ((d = null == l ? g : (0, a.jsx)(s.m, { content: l, children: g })), (u[11] = g), (u[12] = l), (u[13] = d))
          : (d = u[13]),
        d
      )
    }
    function u(e, t) {
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
            g,
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
            T,
            j,
            k,
            P = (0, n.c)(85),
            {
              ref: G,
              icon: z,
              title: A,
              description: M,
              contentClassName: N,
              descriptionClassName: S,
              descriptionPlacement: I,
              badges: D,
              actions: U,
              actionsPlacement: E,
              trailing: L,
              disabled: O,
              onClick: B,
              tooltip: q,
              to: F,
              iconContainer: R,
              iconContainerVariant: W,
              iconPlacement: Z,
              isHighlighted: K,
              presentation: H,
              className: Y,
            } = e,
            J = void 0 === I ? "stacked" : I,
            $ = void 0 !== O && O,
            V = void 0 === R || R,
            Q = void 0 === W ? "filled" : W,
            X = void 0 === Z ? "outside" : Z,
            ee = void 0 !== K && K,
            et = void 0 === H ? "card" : H,
            ei = (0, r.useId)()
          P[0] !== B
            ? ((t = (e) => {
                B &&
                  e.target === e.currentTarget &&
                  ("Enter" === e.key || " " === e.key) &&
                  (e.preventDefault(), e.currentTarget.click())
              }),
              (P[0] = B),
              (P[1] = t))
            : (t = P[1])
          let ea = t,
            en = "row" === et || "directory-row" === et,
            es = "compact-row" === et,
            eo = (es || "center" === (void 0 === E ? "top" : E)) && !!U
          P[2] !== U || P[3] !== es || P[4] !== F
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
              (P[2] = U),
              (P[3] = es),
              (P[4] = F),
              (P[5] = i))
            : (i = P[5])
          let er = i
          P[6] !== z || P[7] !== V || P[8] !== Q || P[9] !== es || P[10] !== en
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
              (P[6] = z),
              (P[7] = V),
              (P[8] = Q),
              (P[9] = es),
              (P[10] = en),
              (P[11] = s))
            : (s = P[11])
          let el = s,
            ec = null == F && $,
            ed = null != F && "relative"
          P[12] !== Y || P[13] !== ee || P[14] !== en || P[15] !== B || P[16] !== et || P[17] !== ed
            ? ((c = (0, o.A)(
                "flex flex-col gap-2.5",
                ed,
                {
                  catalog: "h-full min-h-40 rounded-2xl border border-default p-5 hover:bg-primary-ghost-hover",
                  featured: "h-full rounded-xl bg-surface-secondary px-7 py-8 hover:bg-primary-ghost-hover",
                  ranked: "min-h-24 rounded-xl px-3 py-4 hover:bg-primary-ghost-hover",
                  related: "min-h-24 rounded-xl bg-surface px-3 py-4 hover:bg-primary-ghost-hover",
                  row: "rounded-[var(--radius-token-row)]",
                  "compact-row": "min-h-14 w-full min-w-0 justify-center",
                  "directory-row": "rounded-2xl",
                  card: "border-border/40 rounded-2xl border p-2 hover:bg-text/5",
                }[et],
                en &&
                  "min-h-[var(--height-token-row)] w-full min-w-0 justify-center px-[var(--padding-row-x)] py-[var(--padding-row-y)]",
                en && B && "hover:bg-primary-ghost-hover",
                ee && "bg-text/5",
                B ? "cursor-interaction" : null,
                B &&
                  "outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset focus-visible:ring-offset-0",
                Y,
              )),
              (P[12] = Y),
              (P[13] = ee),
              (P[14] = en),
              (P[15] = B),
              (P[16] = et),
              (P[17] = ed),
              (P[18] = c))
            : (c = P[18])
          let eu = ee ? "true" : void 0,
            eg = null == F ? B : void 0,
            ep = null == F ? ea : void 0
          P[19] !== $ || P[20] !== B || P[21] !== ei || P[22] !== F
            ? ((g =
                null == F || $
                  ? null
                  : (0, a.jsx)(l.N_, {
                      className:
                        "absolute inset-0 cursor-interaction rounded-[inherit] outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-inset",
                      "aria-labelledby": ei,
                      to: F,
                      onClick: B,
                      onAuxClick: (e) => {
                        1 === e.button && B?.(e)
                      },
                    })),
              (P[19] = $),
              (P[20] = B),
              (P[21] = ei),
              (P[22] = F),
              (P[23] = g))
            : (g = P[23])
          let em = es ? "gap-4" : "gap-3",
            eh = null != F && "pointer-events-none",
            ef = "catalog" === et ? "items-start" : "items-center",
            eb = "inline" === J && "gap-2"
          P[24] !== em || P[25] !== eh || P[26] !== ef || P[27] !== eb
            ? ((p = (0, o.A)("flex", em, eh, ef, eb)),
              (P[24] = em),
              (P[25] = eh),
              (P[26] = ef),
              (P[27] = eb),
              (P[28] = p))
            : (p = P[28])
          let ex = "outside" === X ? el : null,
            ey = eo && "items-center",
            ev = eo && (es ? "gap-4" : "gap-3")
          P[29] !== ey || P[30] !== ev
            ? ((m = (0, o.A)("flex min-w-0 flex-1", ey, ev)), (P[29] = ey), (P[30] = ev), (P[31] = m))
            : (m = P[31])
          let ew = "stacked" === J ? "flex-col" : "items-center gap-3"
          P[32] !== N || P[33] !== ew
            ? ((h = (0, o.A)("flex min-w-0 flex-1 justify-center gap-0.5", ew, N)),
              (P[32] = N),
              (P[33] = ew),
              (P[34] = h))
            : (h = P[34])
          let e_ = "inline" === J && "w-28 shrink-0 sm:w-48",
            eC = eo || "inline" === X ? null : "justify-between"
          P[35] !== e_ || P[36] !== eC
            ? ((f = (0, o.A)("flex min-w-0 items-center gap-2", e_, eC)), (P[35] = e_), (P[36] = eC), (P[37] = f))
            : (f = P[37])
          let eT = "inline" === X ? el : null,
            ej = es ? "min-w-0 text-lg leading-6 wrap-break-word" : "truncate",
            ek = en ? "text-[length:var(--detail-row-font-size,var(--text-base))]" : "font-medium",
            eP = "catalog" === et && "text-base font-semibold"
          ;(P[38] !== ej || P[39] !== ek || P[40] !== eP
            ? ((b = (0, o.A)("text-default", ej, ek, eP)), (P[38] = ej), (P[39] = ek), (P[40] = eP), (P[41] = b))
            : (b = P[41]),
            P[42] !== b || P[43] !== A || P[44] !== ei
              ? ((x = (0, a.jsx)("div", { id: ei, className: b, children: A })),
                (P[42] = b),
                (P[43] = A),
                (P[44] = ei),
                (P[45] = x))
              : (x = P[45]),
            P[46] !== D || P[47] !== F
              ? ((y = D?.length
                  ? (0, a.jsx)("div", {
                      className: (0, o.A)(
                        "flex shrink-0 items-center gap-1",
                        null != F && "pointer-events-auto relative z-10",
                      ),
                      children: D.map(u),
                    })
                  : null),
                (P[46] = D),
                (P[47] = F),
                (P[48] = y))
              : (y = P[48]),
            P[49] !== x || P[50] !== y
              ? ((v = (0, a.jsxs)("div", { className: "flex min-w-0 items-center gap-2", children: [x, y] })),
                (P[49] = x),
                (P[50] = y),
                (P[51] = v))
              : (v = P[51]))
          let eG = eo ? null : er
          ;(P[52] !== f || P[53] !== eT || P[54] !== v || P[55] !== eG
            ? ((w = (0, a.jsxs)("div", { className: f, children: [eT, v, eG] })),
              (P[52] = f),
              (P[53] = eT),
              (P[54] = v),
              (P[55] = eG),
              (P[56] = w))
            : (w = P[56]),
            P[57] !== M || P[58] !== S || P[59] !== J || P[60] !== es
              ? ((_ = M
                  ? (0, a.jsx)("div", {
                      className: (0, o.A)(
                        "text-secondary",
                        es ? "truncate text-suggestion-description" : "text-sm leading-relaxed",
                        "inline" === J ? "min-w-0 flex-1 truncate text-start" : null,
                        S ?? (!es && "line-clamp-3"),
                      ),
                      children: M,
                    })
                  : null),
                (P[57] = M),
                (P[58] = S),
                (P[59] = J),
                (P[60] = es),
                (P[61] = _))
              : (_ = P[61]),
            P[62] !== h || P[63] !== w || P[64] !== _
              ? ((C = (0, a.jsxs)("div", { className: h, children: [w, _] })),
                (P[62] = h),
                (P[63] = w),
                (P[64] = _),
                (P[65] = C))
              : (C = P[65]))
          let ez = eo ? er : null
          return (
            P[66] !== m || P[67] !== C || P[68] !== ez
              ? ((T = (0, a.jsxs)("div", { className: m, children: [C, ez] })),
                (P[66] = m),
                (P[67] = C),
                (P[68] = ez),
                (P[69] = T))
              : (T = P[69]),
            P[70] !== p || P[71] !== ex || P[72] !== T || P[73] !== L
              ? ((j = (0, a.jsxs)("div", { className: p, children: [ex, T, L] })),
                (P[70] = p),
                (P[71] = ex),
                (P[72] = T),
                (P[73] = L),
                (P[74] = j))
              : (j = P[74]),
            P[75] !== G ||
            P[76] !== ec ||
            P[77] !== c ||
            P[78] !== eu ||
            P[79] !== eg ||
            P[80] !== ep ||
            P[81] !== g ||
            P[82] !== j ||
            P[83] !== q
              ? ((k = (0, a.jsxs)(d, {
                  ref: G,
                  disabled: ec,
                  tooltip: q,
                  className: c,
                  "data-search-result-active": eu,
                  onClick: eg,
                  onKeyDown: ep,
                  children: [g, j],
                })),
                (P[75] = G),
                (P[76] = ec),
                (P[77] = c),
                (P[78] = eu),
                (P[79] = eg),
                (P[80] = ep),
                (P[81] = g),
                (P[82] = j),
                (P[83] = q),
                (P[84] = k))
              : (k = P[84]),
            k
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
  SmGe(e, t, i) {
    let a = (0, i("nkTT").a)({
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
    i.d(t, {}, { x: a })
  },
  yu23(e, t, i) {
    let a = (0, i("nkTT").a)({
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
      body: '<path d="M12.6257 2.30469C18.8374 2.30503 21.9216 6.88615 21.9216 11.0254C21.9215 12.7845 21.1877 14.5709 19.8923 15.6016C19.2338 16.1254 18.4264 16.454 17.5173 16.459C16.719 16.4633 15.8896 16.2178 15.0583 15.709C14.3032 16.3179 13.4386 16.7129 12.5397 16.7881C11.4524 16.879 10.3888 16.4956 9.52705 15.6006L9.5124 15.585C9.50552 15.5777 9.49529 15.5657 9.48212 15.5518C9.4557 15.5239 9.41686 15.4833 9.36884 15.4326C9.27241 15.3309 9.13635 15.1889 8.98115 15.0254C8.67032 14.698 8.28009 14.2874 7.96064 13.9541C7.57892 13.5558 7.59172 12.9235 7.98896 12.541L8.27998 12.2598L7.3581 11.3018C7.07106 11.0033 7.08025 10.5284 7.37861 10.2412C7.67705 9.95424 8.15199 9.96339 8.43916 10.2617L9.36103 11.2197L11.5817 9.08301L10.6589 8.125C10.3718 7.82656 10.381 7.35164 10.6794 7.06445C10.9778 6.77748 11.4528 6.78663 11.7399 7.08496L12.6618 8.04297L12.9626 7.75488C13.362 7.37043 13.9983 7.38372 14.3806 7.78516L15.945 9.42773C16.8273 10.3361 17.1732 11.4149 17.0319 12.5C16.9344 13.2475 16.6105 13.9573 16.1354 14.5938C16.6496 14.8582 17.11 14.9611 17.5095 14.959C18.0455 14.956 18.5334 14.766 18.9587 14.4277C19.8308 13.7338 20.4215 12.4183 20.4216 11.0254C20.4216 7.614 17.9118 3.80502 12.6257 3.80469C8.211 3.80469 4.39325 7.17775 4.09638 11.4287C3.7645 16.1812 7.12793 20.1942 12.2477 20.1943C14.1885 20.1943 16.1114 19.7093 17.4489 18.6738C17.7764 18.4204 18.2481 18.4802 18.5017 18.8076C18.755 19.1351 18.6942 19.6068 18.3669 19.8604C16.6819 21.1647 14.3949 21.6943 12.2477 21.6943C6.20698 21.6942 2.21147 16.8921 2.60029 11.3242C2.95645 6.22419 7.48801 2.30469 12.6257 2.30469ZM9.3874 13.2773C9.62047 13.5217 9.86302 13.7752 10.069 13.9922C10.2247 14.1561 10.361 14.2993 10.4577 14.4014C10.5058 14.4521 10.5435 14.4935 10.57 14.5215L10.612 14.5645C11.1709 15.1427 11.795 15.3457 12.4147 15.2939C13.0586 15.24 13.7693 14.903 14.4265 14.2705C15.0903 13.6315 15.462 12.9395 15.5446 12.3057C15.6235 11.6997 15.4502 11.0693 14.8649 10.4688L14.8581 10.4619L13.6403 9.18359L9.3874 13.2773Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    i.d(t, {}, { k: a })
  },
}
//# sourceMappingURL=716164.ac9a1c8325.js.map
