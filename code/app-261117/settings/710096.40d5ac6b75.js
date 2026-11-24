export const __rspack_esm_ids = [710096]
export const __webpack_modules__ = {
  VJkC(e, t, s) {
    s.d(t, { c: () => el })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("wH14"),
      r = s("FtMp"),
      o = s("qmMi"),
      l = s("zKw6"),
      d = s.n(l),
      c = s("zd8w"),
      u = s("Wf1j"),
      m = s("oyxz"),
      g = s("Qgfj"),
      p = s("UOa8"),
      h = s("OAko"),
      v = s("Sm6l"),
      x = s("bqtn"),
      f = s("Bbed"),
      b = s("zLIa"),
      j = s("SGsN"),
      y = s("OWtl"),
      M = s("BSnr"),
      w = s("AWNZ"),
      A = s("QyE3"),
      E = s("ZEx5"),
      k = s("qUPv"),
      S = s("SOLA"),
      _ = s("hZax"),
      C = s("UR81"),
      D = s("vw1R"),
      F = s("eShZ"),
      I = s("uMwG"),
      N = s("VV8q")
    function V(e) {
      let t,
        s,
        a,
        r,
        o = (0, i.c)(9),
        { form: l, isPending: d } = e,
        c = (0, u.A)()
      o[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, n.jsx)(m.A, { id: "settings.cloudEnvironments.sharing.onlyMe", defaultMessage: "Only me" })),
          (o[0] = t))
        : (t = o[0])
      let g = t
      o[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((s = (0, n.jsx)(m.A, {
            id: "settings.cloudEnvironments.editor.sharing.workspace",
            defaultMessage: "Shared with workspace",
          })),
          (o[1] = s))
        : (s = o[1])
      let p = s
      return (
        o[2] !== l || o[3] !== c || o[4] !== d
          ? ((a = (e) =>
              (0, n.jsxs)(M.X, {
                children: [
                  (0, n.jsx)(M.X.Header, {
                    title: (0, n.jsx)(m.A, {
                      id: "settings.cloudEnvironments.editor.sharing",
                      defaultMessage: "Sharing",
                    }),
                  }),
                  (0, n.jsx)(M.X.Content, {
                    children: (0, n.jsxs)(E.t, {
                      children: [
                        (0, n.jsx)(w.ic, {
                          label: (0, n.jsx)(m.A, {
                            id: "settings.cloudEnvironments.editor.sharing.visibility",
                            defaultMessage: "Visibility",
                          }),
                          description:
                            "workspace" === e.shareSettings
                              ? (0, n.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.sharing.permissions",
                                  defaultMessage:
                                    "Workspace members can launch chats with this environment. Only you, ChatGPT Workspace Admins, and any additional editors can make changes.",
                                })
                              : void 0,
                          control: (0, n.jsx)(x.Ab, {
                            triggerButton: (0, n.jsx)(A.vg, {
                              "aria-label": c.formatMessage({
                                id: "settings.cloudEnvironments.editor.sharing.visibility.aria",
                                defaultMessage: "Environment visibility",
                              }),
                              disabled: d,
                              children: "private" === e.shareSettings ? g : p,
                            }),
                            children: (0, n.jsxs)(x.ms.RadioGroup, {
                              value: e.shareSettings,
                              children: [
                                (0, n.jsx)(x.ms.RadioItem, {
                                  disabled: d,
                                  value: "private",
                                  onSelect: () => l.setFieldValue("shareSettings", "private"),
                                  SubText: (0, n.jsx)(m.A, {
                                    id: "settings.cloudEnvironments.sharing.private.description",
                                    defaultMessage: "Visible only to you",
                                  }),
                                  children: g,
                                }),
                                (0, n.jsx)(x.ms.RadioItem, {
                                  disabled: d,
                                  value: "workspace",
                                  onSelect: () => l.setFieldValue("shareSettings", "workspace"),
                                  SubText: (0, n.jsx)(m.A, {
                                    id: "settings.cloudEnvironments.sharing.workspace.description",
                                    defaultMessage: "Visible to people in your workspace",
                                  }),
                                  children: p,
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, n.jsx)(w.ic, {
                          variant: "stacked",
                          label: (0, n.jsx)(m.A, {
                            id: "settings.cloudEnvironments.editor.sharing.editors",
                            defaultMessage: "Add additional editors",
                          }),
                          description:
                            "workspace" === e.shareSettings
                              ? (0, n.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.sharing.editors.description",
                                  defaultMessage:
                                    "Add one email per line. Users will be able to edit or delete this environment, or add and remove editors. The environment creator, and ChatGPT Workspace Admins, always have edit access.",
                                })
                              : (0, n.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.sharing.editors.private",
                                  defaultMessage: "Share this environment with your workspace to add editors",
                                }),
                          control: (0, n.jsx)(b.TM, {
                            "aria-invalid": !!(0, N.FJ)(e).shareTargets,
                            "aria-label": c.formatMessage({
                              id: "settings.cloudEnvironments.editor.sharing.editors.aria",
                              defaultMessage: "Additional editors",
                            }),
                            autoResize: !0,
                            disabled: d || "private" === e.shareSettings,
                            placeholder: c.formatMessage({
                              id: "settings.cloudEnvironments.editor.sharing.editors.placeholder",
                              defaultMessage: "user@example.com",
                            }),
                            rows: 3,
                            value: e.shareTargets.join("\n"),
                            variant: "compact",
                            onChange: (e) =>
                              l.setFieldValue("shareTargets", "" === e.target.value ? [] : e.target.value.split("\n")),
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, N.FJ)(e).shareTargets
                    ? (0, n.jsx)(M.X.Footer, {
                        children: (0, n.jsx)("span", {
                          role: "alert",
                          className: "text-danger",
                          children: (0, n.jsx)(m.A, {
                            id: "settings.cloudEnvironments.sharing.invalidEmail",
                            defaultMessage: "Enter a valid email address for each editor",
                          }),
                        }),
                      })
                    : null,
                ],
              })),
            (o[2] = l),
            (o[3] = c),
            (o[4] = d),
            (o[5] = a))
          : (a = o[5]),
        o[6] !== l.Subscribe || o[7] !== a
          ? ((r = (0, n.jsx)(l.Subscribe, { selector: R, children: a })), (o[6] = l.Subscribe), (o[7] = a), (o[8] = r))
          : (r = o[8]),
        r
      )
    }
    function R(e) {
      return e.values
    }
    var P = s("F0xz")
    function q(e) {
      let t,
        s = (0, i.c)(2),
        { children: a } = e
      return (
        s[0] !== a
          ? ((t = (0, n.jsx)("div", { className: "w-72 max-w-full", children: a })), (s[0] = a), (s[1] = t))
          : (t = s[1]),
        t
      )
    }
    var T = s("XLSl")
    function z(e) {
      let t,
        s,
        a,
        r = (0, i.c)(8),
        { form: o, isPending: l, showDomainScopedSecrets: d } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(M.X.Header, {
              title: (0, n.jsx)(m.A, {
                id: "settings.cloudEnvironments.editor.variables",
                defaultMessage: "Variables and secrets",
              }),
            })),
            (r[0] = t))
          : (t = r[0]),
        r[1] !== o || r[2] !== l || r[3] !== d
          ? ((s = (e) => {
              let t = (0, N.FJ)(e)
              return (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(W, {
                    entries: e.environmentVariables,
                    hideLanguageVersions: e.machineId === N.a_,
                    error: t.environmentVariables
                      ? (0, n.jsx)(m.A, {
                          id: "settings.cloudEnvironments.editor.variables.invalid",
                          defaultMessage: "Variable names and values are required, and names must be unique",
                        })
                      : void 0,
                    isPending: l,
                    label: (0, n.jsx)(m.A, {
                      id: "settings.cloudEnvironments.editor.environmentVariables",
                      defaultMessage: "Environment variables",
                    }),
                    onChange: (e) => o.setFieldValue("environmentVariables", e),
                  }),
                  (0, n.jsx)(O, {
                    entries: e.secrets,
                    domainScoped: e.enableAuthtranslator,
                    showDomainScopedSecrets: d,
                    onDomainScopedChange: (e) => o.setFieldValue("enableAuthtranslator", e),
                    error: t.secrets
                      ? (0, n.jsx)(m.A, {
                          id: "settings.cloudEnvironments.editor.secrets.invalid",
                          defaultMessage:
                            "Secret keys and values are required, and key and domain combinations must be unique. Renaming a global secret requires a new value",
                        })
                      : void 0,
                    isPending: l,
                    onChange: (e) => o.setFieldValue("secrets", e),
                  }),
                ],
              })
            }),
            (r[1] = o),
            (r[2] = l),
            (r[3] = d),
            (r[4] = s))
          : (s = r[4]),
        r[5] !== o.Subscribe || r[6] !== s
          ? ((a = (0, n.jsxs)(M.X, {
              children: [
                t,
                (0, n.jsx)(M.X.Content, { children: (0, n.jsx)(o.Subscribe, { selector: U, children: s }) }),
              ],
            })),
            (r[5] = o.Subscribe),
            (r[6] = s),
            (r[7] = a))
          : (a = r[7]),
        a
      )
    }
    function U(e) {
      return e.values
    }
    function W(e) {
      let t,
        s,
        a,
        r,
        o,
        l,
        d,
        c = (0, i.c)(22),
        { entries: g, hideLanguageVersions: p, error: h, isPending: x, label: f, onChange: j } = e,
        y = (0, u.A)()
      return (
        c[0] !== h
          ? ((t =
              h ??
              (0, n.jsx)(m.A, {
                id: "settings.cloudEnvironments.variables.paste",
                defaultMessage: "Paste .env content into a variable name to add multiple values",
              })),
            (c[0] = h),
            (c[1] = t))
          : (t = c[1]),
        c[2] !== g || c[3] !== j
          ? ((s = () => j([...g, { key: "", value: "" }])), (c[2] = g), (c[3] = j), (c[4] = s))
          : (s = c[4]),
        c[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(m.A, {
              id: "settings.cloudEnvironments.editor.addVariable",
              defaultMessage: "Add variable",
            })),
            (c[5] = a))
          : (a = c[5]),
        c[6] !== x || c[7] !== s
          ? ((r = (0, n.jsx)(v.$, {
              color: "secondary",
              disabled: x,
              onClick: s,
              size: "toolbar",
              type: "button",
              children: a,
            })),
            (c[6] = x),
            (c[7] = s),
            (c[8] = r))
          : (r = c[8]),
        c[9] !== f || c[10] !== t || c[11] !== r
          ? ((o = (0, n.jsx)(w.ic, { description: t, label: f, control: r })),
            (c[9] = f),
            (c[10] = t),
            (c[11] = r),
            (c[12] = o))
          : (o = c[12]),
        c[13] !== g || c[14] !== p || c[15] !== y || c[16] !== x || c[17] !== j
          ? ((l = g.map((e, t) =>
              p &&
              "" !== e.value.trim() &&
              !g.some((s, n) => n !== t && s.key.trim() === e.key.trim()) &&
              T.S.some((t) => {
                let { variable: s } = t
                return s === e.key.trim()
              })
                ? null
                : (0, n.jsx)(
                    w.ic,
                    {
                      label: null,
                      variant: "nested",
                      control: (0, n.jsxs)("div", {
                        className: "grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2",
                        children: [
                          (0, n.jsx)(q, {
                            children: (0, n.jsx)(b.pd, {
                              "aria-label": y.formatMessage({
                                id: "settings.cloudEnvironments.editor.variable.name",
                                defaultMessage: "Variable name",
                              }),
                              disabled: x,
                              value: e.key,
                              onPaste: (e) => $(e, t, g, j),
                              onChange: (e) => j(g.map((s, n) => (n === t ? { ...s, key: e.target.value } : s))),
                            }),
                          }),
                          (0, n.jsx)(q, {
                            children: (0, n.jsx)(b.pd, {
                              "aria-label": y.formatMessage({
                                id: "settings.cloudEnvironments.editor.variable.value",
                                defaultMessage: "Variable value",
                              }),
                              disabled: x,
                              value: e.value,
                              onChange: (e) => j(g.map((s, n) => (n === t ? { ...s, value: e.target.value } : s))),
                            }),
                          }),
                          (0, n.jsx)(v.$, {
                            color: "secondary",
                            disabled: x,
                            onClick: () => j(g.filter((e, s) => s !== t)),
                            size: "toolbar",
                            type: "button",
                            children: (0, n.jsx)(m.A, {
                              id: "settings.cloudEnvironments.editor.removeVariable",
                              defaultMessage: "Remove",
                            }),
                          }),
                        ],
                      }),
                    },
                    t,
                  ),
            )),
            (c[13] = g),
            (c[14] = p),
            (c[15] = y),
            (c[16] = x),
            (c[17] = j),
            (c[18] = l))
          : (l = c[18]),
        c[19] !== o || c[20] !== l
          ? ((d = (0, n.jsxs)(E.t, { children: [o, l] })), (c[19] = o), (c[20] = l), (c[21] = d))
          : (d = c[21]),
        d
      )
    }
    function O(e) {
      let t,
        s,
        a,
        r,
        o,
        l,
        d,
        c,
        g,
        p = (0, i.c)(29),
        {
          entries: h,
          error: x,
          isPending: f,
          domainScoped: j,
          showDomainScopedSecrets: y,
          onDomainScopedChange: M,
          onChange: A,
        } = e,
        k = (0, u.A)()
      return (
        p[0] !== x
          ? ((t =
              x ??
              (0, n.jsx)(m.A, {
                id: "settings.cloudEnvironments.secrets.paste",
                defaultMessage: "Paste .env content into a secret key to add multiple secrets",
              })),
            (p[0] = x),
            (p[1] = t))
          : (t = p[1]),
        p[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, n.jsx)(m.A, { id: "settings.cloudEnvironments.editor.secrets", defaultMessage: "Secrets" })),
            (p[2] = s))
          : (s = p[2]),
        p[3] !== h || p[4] !== A
          ? ((a = () => A([...h, { key: "", value: "" }])), (p[3] = h), (p[4] = A), (p[5] = a))
          : (a = p[5]),
        p[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, n.jsx)(m.A, { id: "settings.cloudEnvironments.editor.addSecret", defaultMessage: "Add secret" })),
            (p[6] = r))
          : (r = p[6]),
        p[7] !== f || p[8] !== a
          ? ((o = (0, n.jsx)(v.$, {
              color: "secondary",
              disabled: f,
              onClick: a,
              size: "toolbar",
              type: "button",
              children: r,
            })),
            (p[7] = f),
            (p[8] = a),
            (p[9] = o))
          : (o = p[9]),
        p[10] !== t || p[11] !== o
          ? ((l = (0, n.jsx)(w.ic, { description: t, label: s, control: o })), (p[10] = t), (p[11] = o), (p[12] = l))
          : (l = p[12]),
        p[13] !== j || p[14] !== k || p[15] !== f || p[16] !== M || p[17] !== y
          ? ((d = y
              ? (0, n.jsx)(w.ic, {
                  label: (0, n.jsx)(m.A, {
                    id: "settings.cloudEnvironments.secrets.domainScoped",
                    defaultMessage: "Domain-scoped secrets",
                  }),
                  description: j
                    ? (0, n.jsx)(m.A, {
                        id: "settings.cloudEnvironments.secrets.domainScoped.enabled",
                        defaultMessage:
                          "During tasks, secrets are sent only to their configured domain. Secrets without a domain are available only to setup scripts.",
                      })
                    : (0, n.jsx)(m.A, {
                        id: "settings.cloudEnvironments.secrets.domainScoped.description",
                        defaultMessage: "Limit each secret to requests to a specific domain",
                      }),
                  control: (0, n.jsx)(P.l, {
                    ariaLabel: k.formatMessage({
                      id: "settings.cloudEnvironments.secrets.domainScoped.aria",
                      defaultMessage: "Domain-scoped secrets",
                    }),
                    checked: j,
                    disabled: f,
                    onChange: M,
                  }),
                })
              : null),
            (p[13] = j),
            (p[14] = k),
            (p[15] = f),
            (p[16] = M),
            (p[17] = y),
            (p[18] = d))
          : (d = p[18]),
        p[19] !== j || p[20] !== h || p[21] !== k || p[22] !== f || p[23] !== A
          ? ((c = h.map((e, t) =>
              (0, n.jsx)(
                w.ic,
                {
                  label: null,
                  variant: "nested",
                  control: (0, n.jsxs)("div", {
                    className: "grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2",
                    children: [
                      (0, n.jsx)(q, {
                        children: (0, n.jsx)(b.pd, {
                          "aria-label": k.formatMessage({
                            id: "settings.cloudEnvironments.editor.secret.name",
                            defaultMessage: "Secret key",
                          }),
                          disabled: f,
                          value: e.key,
                          onPaste: (e) => $(e, t, h, A),
                          onChange: (e) => A(h.map((s, n) => (n === t ? { ...s, key: e.target.value } : s))),
                        }),
                      }),
                      (0, n.jsx)(q, {
                        children: (0, n.jsx)(b.pd, {
                          "aria-label": k.formatMessage({
                            id: "settings.cloudEnvironments.editor.secret.value",
                            defaultMessage: "Secret value",
                          }),
                          disabled: f,
                          placeholder: e.previousKey
                            ? k.formatMessage({
                                id: "settings.cloudEnvironments.editor.secret.keepPlaceholder",
                                defaultMessage: "Leave unchanged to keep",
                              })
                            : void 0,
                          type: "password",
                          value: e.value,
                          onChange: (e) => A(h.map((s, n) => (n === t ? { ...s, value: e.target.value } : s))),
                        }),
                      }),
                      (0, n.jsx)(v.$, {
                        color: "secondary",
                        disabled: f,
                        onClick: () => A(h.filter((e, s) => s !== t)),
                        size: "toolbar",
                        type: "button",
                        children: (0, n.jsx)(m.A, {
                          id: "settings.cloudEnvironments.editor.removeSecret",
                          defaultMessage: "Remove",
                        }),
                      }),
                      j
                        ? (0, n.jsx)("div", {
                            className: "col-span-2",
                            children: (0, n.jsx)(q, {
                              children: (0, n.jsx)(b.pd, {
                                "aria-label": k.formatMessage({
                                  id: "settings.cloudEnvironments.editor.secret.domain",
                                  defaultMessage: "Secret domain",
                                }),
                                disabled: f,
                                placeholder: k.formatMessage({
                                  id: "settings.cloudEnvironments.editor.secret.domainPlaceholder",
                                  defaultMessage: "Optional domain",
                                }),
                                value: e.domain ?? "",
                                onChange: (e) => A(h.map((s, n) => (n === t ? { ...s, domain: e.target.value } : s))),
                              }),
                            }),
                          })
                        : null,
                    ],
                  }),
                },
                `${e.previousKey ?? "new"}-${t}`,
              ),
            )),
            (p[19] = j),
            (p[20] = h),
            (p[21] = k),
            (p[22] = f),
            (p[23] = A),
            (p[24] = c))
          : (c = p[24]),
        p[25] !== l || p[26] !== d || p[27] !== c
          ? ((g = (0, n.jsxs)(E.t, { children: [l, d, c] })), (p[25] = l), (p[26] = d), (p[27] = c), (p[28] = g))
          : (g = p[28]),
        g
      )
    }
    function $(e, t, s, n) {
      let i = (function (e) {
        let t = []
        for (let s of e.split(/\r?\n/)) {
          let e = s.trim()
          if (!e || e.startsWith("#") || e.startsWith(";")) continue
          let n = /^(?:export\s+)?([\w.-]+)\s*=\s*(.*)$/.exec(e)
          if (null == n) return []
          let i = n[2]
          if (i.startsWith('"') || i.startsWith("'")) {
            let e = /^(["'])(.*)\1\s*(?:#.*)?$/.exec(i)
            if (null == e) return []
            i = e[2]
          } else i = i.replace(/(^|[^\\])#.*$/, "$1").trim()
          t.push({ key: n[1], value: i })
        }
        return t
      })(e.clipboardData.getData("text/plain"))
      0 !== i.length &&
        (e.preventDefault(), n([...s.slice(0, t), { ...s[t], ...i[0] }, ...i.slice(1), ...s.slice(t + 1)]))
    }
    var L = s("eFn4"),
      G = s("MM0V"),
      B = s("ZtSy"),
      X = s("EShr")
    let H = [
      {
        value: "none",
        label: (0, g.zR)({ id: "settings.cloudEnvironments.network.preset.none", defaultMessage: "Custom domains" }),
      },
      {
        value: "codex",
        label: (0, g.zR)({
          id: "settings.cloudEnvironments.network.preset.dependencies",
          defaultMessage: "Common dependencies",
        }),
      },
      {
        value: "all",
        label: (0, g.zR)({ id: "settings.cloudEnvironments.network.preset.all", defaultMessage: "All domains" }),
      },
    ]
    function K(e) {
      let t,
        s,
        a,
        r,
        l = (0, i.c)(18),
        { form: d, isPending: g, inDialog: h } = e,
        f = void 0 !== h && h,
        j = (0, u.A)(),
        y = (0, c.useId)(),
        { accountId: k, planAtLogin: S } = (0, p.As)()
      l[0] !== S ? ((t = (0, C.Hw)(S) || (0, D.o)(S)), (l[0] = S), (l[1] = t)) : (t = l[1])
      let _ = t,
        F = _ && null != k
      l[2] !== F ? ((s = { enabled: F }), (l[2] = F), (l[3] = s)) : (s = l[3])
      let { data: I, isPending: V, isError: R, refetch: T } = (0, o._U)(L.Jk, k ?? "", s),
        z = _ && (null == k || V),
        U = _ && R,
        W = _ && null != I && !I.beta_settings.codex_agent_network_access,
        O = g || z || U || W
      return (
        l[4] !== W ||
        l[5] !== O ||
        l[6] !== y ||
        l[7] !== U ||
        l[8] !== d ||
        l[9] !== f ||
        l[10] !== j ||
        l[11] !== g ||
        l[12] !== z ||
        l[13] !== T
          ? ((a = (e) => {
              let t,
                s = e ?? { mode: "off" },
                i = null != (0, N.FJ)(d.state.values).agentNetworkAccess,
                a = H.find((e) => e.value === (s.preset_allowlist ?? "none")) ?? H[0]
              return (
                (t = z
                  ? (0, n.jsx)(m.A, {
                      id: "settings.cloudEnvironments.network.policy.loading",
                      defaultMessage: "Checking workspace network policy\u2026",
                    })
                  : U
                    ? (0, n.jsx)(m.A, {
                        id: "settings.cloudEnvironments.network.policy.error",
                        defaultMessage: "Couldn\u2019t check your workspace network policy",
                      })
                    : W
                      ? (0, n.jsx)(m.A, {
                          id: "settings.cloudEnvironments.network.policy.blocked",
                          defaultMessage: "Your workspace doesn\u2019t allow internet access after setup",
                        })
                      : "off" === s.mode
                        ? (0, n.jsx)(m.A, {
                            id: "settings.cloudEnvironments.network.off.description",
                            defaultMessage:
                              "Internet access will be disabled after setup. Codex will only be able to use dependencies installed by the setup script.",
                          })
                        : (0, n.jsx)(m.A, {
                            id: "settings.cloudEnvironments.editor.network.mode.description",
                            defaultMessage: "Controls internet access after setup completes",
                          })),
                (0, n.jsxs)(M.X, {
                  children: [
                    (0, n.jsx)(M.X.Header, {
                      title: (0, n.jsx)(m.A, {
                        id: "settings.cloudEnvironments.editor.network",
                        defaultMessage: "Agent internet access",
                      }),
                    }),
                    (0, n.jsxs)(M.X.Content, {
                      children: [
                        (0, n.jsxs)(E.t, {
                          children: [
                            (0, n.jsx)(w.ic, {
                              label: (0, n.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.network.mode",
                                defaultMessage: "Access",
                              }),
                              description: t,
                              control: (0, n.jsx)(X.T, {
                                ariaLabel: j.formatMessage({
                                  id: "settings.cloudEnvironments.editor.network.aria",
                                  defaultMessage: "Agent internet access",
                                }),
                                options: [
                                  {
                                    id: "off",
                                    label: (0, n.jsx)(m.A, {
                                      id: "settings.cloudEnvironments.network.off",
                                      defaultMessage: "Off",
                                    }),
                                    disabled: g,
                                  },
                                  {
                                    id: "on",
                                    label: (0, n.jsx)(m.A, {
                                      id: "settings.cloudEnvironments.network.on",
                                      defaultMessage: "On",
                                    }),
                                    disabled: O,
                                  },
                                ],
                                selectedId: "off" === s.mode ? "off" : "on",
                                onSelect: (e) =>
                                  d.setFieldValue("agentNetworkAccess", {
                                    ...s,
                                    mode: e,
                                    preset_allowlist: s.preset_allowlist ?? "codex",
                                  }),
                              }),
                            }),
                            U
                              ? (0, n.jsx)(w.ic, {
                                  label: null,
                                  control: (0, n.jsx)(v.$, {
                                    color: "secondary",
                                    size: "toolbar",
                                    type: "button",
                                    onClick: () => void T(),
                                    children: (0, n.jsx)(m.A, {
                                      id: "settings.cloudEnvironments.network.policy.retry",
                                      defaultMessage: "Retry",
                                    }),
                                  }),
                                })
                              : null,
                            "off" !== s.mode
                              ? (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)(w.ic, {
                                      description: (0, n.jsx)(m.A, {
                                        id: "settings.cloud.domainAccess.help",
                                        defaultMessage: "Choose which domains the environment can reach",
                                      }),
                                      label: (0, n.jsx)(m.A, {
                                        id: "settings.cloudEnvironments.network.preset",
                                        defaultMessage: "Domain access",
                                      }),
                                      controlSizing: "grow",
                                      control: (0, n.jsxs)("span", {
                                        className: "flex flex-wrap items-center justify-end gap-2",
                                        children: [
                                          (0, n.jsx)(x.Ab, {
                                            triggerButton: (0, n.jsx)(A.vg, {
                                              disabled: O,
                                              "aria-label": j.formatMessage({
                                                id: "settings.cloudEnvironments.network.preset.aria",
                                                defaultMessage: "Domain access",
                                              }),
                                              children: (0, n.jsx)(m.A, { ...a.label }),
                                            }),
                                            children: (0, n.jsx)(x.ms.RadioGroup, {
                                              value: s.preset_allowlist ?? "none",
                                              children: H.map((e) =>
                                                (0, n.jsx)(
                                                  x.ms.RadioItem,
                                                  {
                                                    value: e.value,
                                                    onSelect: () =>
                                                      d.setFieldValue("agentNetworkAccess", {
                                                        ...s,
                                                        preset_allowlist: e.value,
                                                      }),
                                                    children: (0, n.jsx)(m.A, { ...e.label }),
                                                  },
                                                  e.value,
                                                ),
                                              ),
                                            }),
                                          }),
                                          (0, n.jsx)(B.G, {
                                            appearance: "secondary",
                                            href: "https://developers.openai.com/codex/cloud/internet-access#preset-domain-lists",
                                            initiator: "external_link",
                                            openTarget: f ? "external-browser" : void 0,
                                            children: (0, n.jsx)(m.A, {
                                              id: "settings.cloudEnvironments.network.domainDetails",
                                              defaultMessage: "Domain details",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    "all" !== s.preset_allowlist
                                      ? (0, n.jsx)(w.ic, {
                                          label: (0, n.jsx)(m.A, {
                                            id: "settings.cloudEnvironments.editor.network.allowedDomains",
                                            defaultMessage: "Allowed domains",
                                          }),
                                          description: i
                                            ? (0, n.jsx)("span", {
                                                id: y,
                                                role: "alert",
                                                className: "text-danger",
                                                children: (0, n.jsx)(m.A, {
                                                  id: "settings.cloudEnvironments.network.domains.required",
                                                  defaultMessage:
                                                    "Enter at least one allowed domain, or choose a different domain preset",
                                                }),
                                              })
                                            : (0, n.jsx)(m.A, {
                                                id: "settings.cloudEnvironments.network.domains.help",
                                                defaultMessage: "Separate domains with commas",
                                              }),
                                          control: (0, n.jsx)(q, {
                                            children: (0, n.jsx)(b.pd, {
                                              "aria-label": j.formatMessage({
                                                id: "settings.cloudEnvironments.editor.network.allowedDomains.aria",
                                                defaultMessage: "Allowed domains",
                                              }),
                                              disabled: O,
                                              "aria-invalid": i,
                                              "aria-describedby": i ? y : void 0,
                                              value: s.allowlist_domains ?? "",
                                              onChange: (e) =>
                                                d.setFieldValue("agentNetworkAccess", {
                                                  ...s,
                                                  allowlist_domains: e.target.value,
                                                }),
                                            }),
                                          }),
                                        })
                                      : null,
                                    (0, n.jsx)(w.ic, {
                                      label: (0, n.jsx)(m.A, {
                                        id: "settings.cloudEnvironments.network.methods",
                                        defaultMessage: "Read-only HTTP methods",
                                      }),
                                      description: (0, n.jsx)(m.A, {
                                        id: "settings.cloudEnvironments.network.methods.description",
                                        defaultMessage: "Allow only GET, HEAD, and OPTIONS",
                                      }),
                                      control: (0, n.jsx)(P.l, {
                                        ariaLabel: j.formatMessage({
                                          id: "settings.cloudEnvironments.network.methods.aria",
                                          defaultMessage: "Read-only HTTP methods",
                                        }),
                                        checked: s.safe_methods_only ?? !1,
                                        disabled: O,
                                        onChange: (e) =>
                                          d.setFieldValue("agentNetworkAccess", { ...s, safe_methods_only: e }),
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                          ],
                        }),
                        null,
                        "off" === s.mode || z || U || W
                          ? null
                          : (0, n.jsx)(G.l, {
                              variant: "settings",
                              layout: "vertical",
                              type: "caution",
                              ariaLive: "polite",
                              title: (0, n.jsx)(m.A, {
                                id: "settings.cloudEnvironments.network.risks.title",
                                defaultMessage: "Enabling internet access exposes your environment to security risks",
                              }),
                              content: (0, n.jsx)(m.A, {
                                id: "settings.cloudEnvironments.network.risks.description",
                                defaultMessage:
                                  "These include prompt injection, exfiltration of code or secrets, inclusion of malware or vulnerabilities, or use of content with license restrictions. <docs>See the docs</docs> for an example exfiltration attack.{br}{br}To mitigate risks, only allow necessary domains and methods, and always review Codex's outputs and work log.",
                                values: {
                                  br: (0, n.jsx)("br", {}),
                                  docs: (e) =>
                                    (0, n.jsx)(B.G, {
                                      appearance: "inherit",
                                      underline: "always",
                                      href: "https://developers.openai.com/codex/cloud/internet-access#risks-of-agent-internet-access",
                                      initiator: "external_link",
                                      openTarget: f ? "external-browser" : void 0,
                                      children: e,
                                    }),
                                },
                              }),
                            }),
                      ],
                    }),
                  ],
                })
              )
            }),
            (l[4] = W),
            (l[5] = O),
            (l[6] = y),
            (l[7] = U),
            (l[8] = d),
            (l[9] = f),
            (l[10] = j),
            (l[11] = g),
            (l[12] = z),
            (l[13] = T),
            (l[14] = a))
          : (a = l[14]),
        l[15] !== d.Subscribe || l[16] !== a
          ? ((r = (0, n.jsx)(d.Subscribe, { selector: J, children: a })),
            (l[15] = d.Subscribe),
            (l[16] = a),
            (l[17] = r))
          : (r = l[17]),
        r
      )
    }
    function J(e) {
      return e.values.agentNetworkAccess
    }
    var Z = s("S5Ho"),
      Q = s("JNtf"),
      Y = s("mUDD"),
      ee = s("evwP")
    let et = (0, f._)(async () => (await s.e(449295).then(s.bind(s, "BExl"))).CloudEnvironmentRepositoryPicker, {
      fallback: (0, n.jsx)(ee.W, {
        layout: "settings-row",
        children: (0, n.jsx)(Q.L3, {
          children: (0, n.jsx)(m.A, {
            id: "settings.cloudEnvironments.editor.repository.loading",
            defaultMessage: "Loading repositories\u2026",
          }),
        }),
      }),
      errorFallback: (0, n.jsx)(ee.W, {
        layout: "settings-row",
        children: (0, n.jsx)(Q.L3, {
          children: (0, n.jsx)(m.A, {
            id: "settings.cloudEnvironments.editor.repository.loadFailed",
            defaultMessage: "Couldn\u2019t open the repository picker. Reload the app and try again",
          }),
        }),
      }),
    })
    function es(e) {
      let t,
        s,
        a = (0, i.c)(8),
        { form: r, isPending: o, preferredConnectorId: l } = e,
        [d, u] = (0, c.useState)(!1)
      return (
        a[0] !== r || a[1] !== o || a[2] !== d || a[3] !== l
          ? ((t = (e) => {
              let { githubConnectorId: t, repositoryName: s } = e
              return (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(A.vg, {
                    disabled: o,
                    onClick: () => u(!0),
                    children:
                      s ||
                      (0, n.jsx)(m.A, {
                        id: "settings.cloudEnvironments.editor.repository.select",
                        defaultMessage: "Select a repository",
                      }),
                  }),
                  d
                    ? (0, n.jsx)(ei, {
                        isPending: o,
                        preferredConnectorId: t ?? l,
                        onClose: () => u(!1),
                        onSelect: (e) => {
                          let { connectorId: t, repository: n } = e
                          ;(r.setFieldValue("label", (0, N.Hr)(n.repository_full_name, r.getFieldValue("label"), s)),
                            r.setFieldValue("githubConnectorId", t),
                            r.setFieldValue("repositoryId", n.id),
                            r.setFieldValue("repositoryName", n.repository_full_name),
                            u(!1))
                        },
                      })
                    : null,
                ],
              })
            }),
            (a[0] = r),
            (a[1] = o),
            (a[2] = d),
            (a[3] = l),
            (a[4] = t))
          : (t = a[4]),
        a[5] !== r.Subscribe || a[6] !== t
          ? ((s = (0, n.jsx)(r.Subscribe, { selector: en, children: t })), (a[5] = r.Subscribe), (a[6] = t), (a[7] = s))
          : (s = a[7]),
        s
      )
    }
    function en(e) {
      return { githubConnectorId: e.values.githubConnectorId, repositoryName: e.values.repositoryName }
    }
    function ei(e) {
      let t,
        s,
        a,
        r,
        o,
        l,
        d,
        c,
        u = (0, i.c)(17),
        { isPending: g, preferredConnectorId: p, onClose: h, onSelect: x } = e
      return (
        u[0] !== h
          ? ((t = (e) => {
              e || h()
            }),
            (u[0] = h),
            (u[1] = t))
          : (t = u[1]),
        u[2] === Symbol.for("react.memo_cache_sentinel") ? ((s = []), (u[2] = s)) : (s = u[2]),
        u[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, n.jsx)(Q.L3, {
              className: "heading-lg font-semibold",
              children: (0, n.jsx)(m.A, {
                id: "settings.cloudEnvironments.editor.repository.dialogTitle",
                defaultMessage: "Choose a repository",
              }),
            })),
            (u[3] = a))
          : (a = u[3]),
        u[4] !== g || u[5] !== x || u[6] !== p
          ? ((r = (0, n.jsx)(et, {
              disabled: g,
              preferredConnectorId: p,
              selectionMode: "single",
              selectedRepositoryIds: s,
              header: a,
              onChange: x,
            })),
            (u[4] = g),
            (u[5] = x),
            (u[6] = p),
            (u[7] = r))
          : (r = u[7]),
        u[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(m.A, {
              id: "settings.cloudEnvironments.editor.repository.cancel",
              defaultMessage: "Cancel",
            })),
            (u[8] = o))
          : (o = u[8]),
        u[9] !== h
          ? ((l = (0, n.jsx)(Y.Es, {
              expandSingleButton: !1,
              children: (0, n.jsx)(v.$, {
                color: "secondary",
                onClick: h,
                size: "dialog",
                type: "button",
                children: o,
              }),
            })),
            (u[9] = h),
            (u[10] = l))
          : (l = u[10]),
        u[11] !== r || u[12] !== l
          ? ((d = (0, n.jsxs)(Y.R4, { size: "viewport", children: [r, l] })), (u[11] = r), (u[12] = l), (u[13] = d))
          : (d = u[13]),
        u[14] !== t || u[15] !== d
          ? ((c = (0, n.jsx)(Q.lG, { open: !0, size: "beacon", onOpenChange: t, children: d })),
            (u[14] = t),
            (u[15] = d),
            (u[16] = c))
          : (c = u[16]),
        c
      )
    }
    function ea(e) {
      let t,
        s,
        a = (0, i.c)(7),
        { form: r, isPending: o } = e,
        l = (0, u.A)()
      return (
        a[0] !== r || a[1] !== l || a[2] !== o
          ? ((t = (e) => {
              let t = e.autoSetupSettings?.use_auto_setup ?? "" === e.setupCommands,
                s = e.cacheSettings?.post_setup_cache_enabled ?? !1
              return (0, n.jsxs)(M.X, {
                children: [
                  (0, n.jsx)(M.X.Header, {
                    title: (0, n.jsx)(m.A, {
                      id: "settings.cloudEnvironments.editor.setup.title",
                      defaultMessage: "Code execution",
                    }),
                  }),
                  (0, n.jsx)(M.X.Content, {
                    children: (0, n.jsxs)(E.t, {
                      children: [
                        (0, n.jsx)(w.ic, {
                          label: (0, n.jsx)(m.A, {
                            id: "settings.cloudEnvironments.editor.runtime.cache",
                            defaultMessage: "Container Caching",
                          }),
                          description: (0, n.jsx)(m.A, {
                            id: "settings.cloudEnvironments.editor.setup.cache.description",
                            defaultMessage:
                              "Speed up container start by caching state after running the setup script. Maintenance scripts are run before every task.",
                          }),
                          control: (0, n.jsx)(P.l, {
                            ariaLabel: l.formatMessage({
                              id: "settings.cloudEnvironments.editor.runtime.cache.aria",
                              defaultMessage: "Container Caching",
                            }),
                            checked: s,
                            disabled: o,
                            onChange: (e) => r.setFieldValue("cacheSettings", { post_setup_cache_enabled: e }),
                          }),
                        }),
                        (0, n.jsx)(w.ic, {
                          label: (0, n.jsx)(m.A, {
                            id: "settings.cloudEnvironments.editor.setup.mode",
                            defaultMessage: "Setup script",
                          }),
                          description: t
                            ? (0, n.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.setup.automatic.description",
                                defaultMessage:
                                  "Runs the install commands like npm install for common package managers",
                              })
                            : (0, n.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.setup.manual.description",
                                defaultMessage: "Run your own setup script after the repository is cloned",
                              }),
                          control: (0, n.jsx)(X.T, {
                            ariaLabel: l.formatMessage({
                              id: "settings.cloudEnvironments.editor.setup.mode.aria",
                              defaultMessage: "Setup script mode",
                            }),
                            selectedId: t ? "automatic" : "manual",
                            options: [
                              {
                                id: "automatic",
                                disabled: o,
                                label: (0, n.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.editor.setup.automatic",
                                  defaultMessage: "Automatic",
                                }),
                              },
                              {
                                id: "manual",
                                disabled: o,
                                label: (0, n.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.editor.setup.manual",
                                  defaultMessage: "Manual",
                                }),
                              },
                            ],
                            onSelect: (e) =>
                              r.setFieldValue("autoSetupSettings", { use_auto_setup: "automatic" === e }),
                          }),
                        }),
                        t
                          ? null
                          : (0, n.jsx)(w.ic, {
                              variant: "stacked",
                              label: null,
                              description: (0, n.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.setup.network",
                                defaultMessage:
                                  "Network access is available during setup, even when agent internet access is off",
                              }),
                              control: (0, n.jsx)(b.TM, {
                                "aria-label": l.formatMessage({
                                  id: "settings.cloudEnvironments.editor.setup.aria",
                                  defaultMessage: "Setup script",
                                }),
                                autoResize: !0,
                                disabled: o,
                                rows: 3,
                                value: e.setupCommands,
                                variant: "compact",
                                onChange: (e) => r.setFieldValue("setupCommands", e.target.value),
                              }),
                            }),
                        s && !t
                          ? (0, n.jsx)(w.ic, {
                              variant: "stacked",
                              label: (0, n.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.maintenance",
                                defaultMessage: "Maintenance script",
                              }),
                              description: (0, n.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.maintenance.description",
                                defaultMessage: "Runs before every task when using a cached container",
                              }),
                              control: (0, n.jsx)(b.TM, {
                                "aria-label": l.formatMessage({
                                  id: "settings.cloudEnvironments.editor.maintenance.aria",
                                  defaultMessage: "Maintenance script",
                                }),
                                autoResize: !0,
                                disabled: o,
                                rows: 3,
                                value: e.maintenanceSetupCommands,
                                variant: "compact",
                                onChange: (e) => r.setFieldValue("maintenanceSetupCommands", e.target.value),
                              }),
                            })
                          : null,
                      ],
                    }),
                  }),
                ],
              })
            }),
            (a[0] = r),
            (a[1] = l),
            (a[2] = o),
            (a[3] = t))
          : (t = a[3]),
        a[4] !== r.Subscribe || a[5] !== t
          ? ((s = (0, n.jsx)(r.Subscribe, { selector: er, children: t })), (a[4] = r.Subscribe), (a[5] = t), (a[6] = s))
          : (s = a[6]),
        s
      )
    }
    function er(e) {
      return e.values
    }
    let eo = (0, f._)(async () => (await s.e(279879).then(s.bind(s, "WM1a"))).CloudEnvironmentPackagesDialog)
    function el(e) {
      let t,
        s = (0, i.c)(14),
        { ref: a, environment: r, initialRepository: o, inDialog: l, requestContext: d, onCancel: c, onSaved: u } = e,
        m = void 0 !== l && l
      if (null == r) {
        let e
        return (
          s[0] !== m || s[1] !== o || s[2] !== c || s[3] !== u || s[4] !== a || s[5] !== d
            ? ((e = (0, n.jsx)(ed, {
                ref: a,
                initialRepository: o,
                inDialog: m,
                requestContext: d,
                onCancel: c,
                onSaved: u,
              })),
              (s[0] = m),
              (s[1] = o),
              (s[2] = c),
              (s[3] = u),
              (s[4] = a),
              (s[5] = d),
              (s[6] = e))
            : (e = s[6]),
          e
        )
      }
      return (
        s[7] !== r || s[8] !== m || s[9] !== c || s[10] !== u || s[11] !== a || s[12] !== d
          ? ((t = (0, n.jsx)(ec, {
              ref: a,
              environment: r,
              inDialog: m,
              requestContext: d,
              onCancel: c,
              onSaved: u,
              preferredConnectorId: null,
            })),
            (s[7] = r),
            (s[8] = m),
            (s[9] = c),
            (s[10] = u),
            (s[11] = a),
            (s[12] = d),
            (s[13] = t))
          : (t = s[13]),
        t
      )
    }
    function ed(e) {
      let t,
        s = (0, i.c)(8),
        { ref: a, initialRepository: r, inDialog: o, requestContext: l, onCancel: d, onSaved: c } = e,
        u = void 0 !== o && o,
        m = (0, I.wJ)(),
        g = r?.githubConnectorId ?? m.data?.preferred_github_connector_id ?? null
      return (
        s[0] !== u || s[1] !== r || s[2] !== d || s[3] !== c || s[4] !== a || s[5] !== l || s[6] !== g
          ? ((t = (0, n.jsx)(ec, {
              ref: a,
              environment: null,
              initialRepository: r,
              inDialog: u,
              requestContext: l,
              onCancel: d,
              onSaved: c,
              preferredConnectorId: g,
            })),
            (s[0] = u),
            (s[1] = r),
            (s[2] = d),
            (s[3] = c),
            (s[4] = a),
            (s[5] = l),
            (s[6] = g),
            (s[7] = t))
          : (t = s[7]),
        t
      )
    }
    function ec(e) {
      let t,
        s,
        l,
        g,
        f,
        I,
        R,
        P,
        T,
        U,
        W,
        O,
        $ = (0, i.c)(49),
        {
          ref: L,
          environment: G,
          initialRepository: B,
          inDialog: X,
          requestContext: H,
          onCancel: J,
          onSaved: Q,
          preferredConnectorId: Y,
        } = e,
        ee = void 0 !== X && X,
        et = (0, o.gh)(y.u),
        en = (0, u.A)(),
        ei = (0, c.useId)(),
        er = (0, c.useId)(),
        el = (0, c.useId)(),
        ed = (0, c.useId)(),
        [ec, ep] = (0, c.useState)(!1),
        { data: eh, error: ev, isError: ex, refetch: ef } = (0, h.sw)(),
        eb = null != eh || (ev instanceof F.FetchError && 404 === ev.status),
        [ej, ey] = (0, c.useState)(!1),
        [eM, ew] = (0, c.useState)(!1)
      $[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, n.jsx)(m.A, {
            id: "settings.cloudEnvironments.editor.machine.universal",
            defaultMessage: "Universal",
          })),
          ($[0] = t))
        : (t = $[0])
      let eA = t,
        { planAtLogin: eE } = (0, p.As)(),
        ek = (0, o.Ul)(Z.H$),
        eS = (0, o.Ul)(Z.mK),
        e_ = (0, o.Ul)(Z.N5),
        eC = (0, _.Zj)("479474474")
      $[1] !== eE ? ((s = (0, C.Hw)(eE) || (0, D.o)(eE)), ($[1] = eE), ($[2] = s)) : (s = $[2])
      let eD = s,
        eF = G ?? void 0,
        eI = eD ? "workspace" : "private"
      $[3] !== B || $[4] !== Y || $[5] !== eF || $[6] !== eI
        ? ((l = (0, N.PE)(eF, Y, B, eI)), ($[3] = B), ($[4] = Y), ($[5] = eF), ($[6] = eI), ($[7] = l))
        : (l = $[7])
      let eN = (0, a.m)({
          defaultValues: l,
          onSubmit: (e) => {
            let { value: t } = e
            if (
              (0, N.hw)(t, ek.data?.some((e) => e.id === t.machineId) === !0, G?.machine_id, eh, G?.id) &&
              (eb || t.label.trim() === G?.label)
            ) {
              if (null == G)
                return void eS.mutate(
                  { requestBody: (0, N.o4)(t), requestContext: H },
                  {
                    onSuccess: (e) => {
                      H?.signal.aborted ||
                        (et
                          .get(j.Id)
                          .success(
                            en.formatMessage({
                              id: "settings.cloudEnvironments.create.success",
                              defaultMessage: "Created cloud environment",
                            }),
                          ),
                        eN.reset(t),
                        Q(e.id, t, e))
                    },
                    onError: () => {
                      H?.signal.aborted ||
                        et
                          .get(j.Id)
                          .danger(
                            en.formatMessage({
                              id: "settings.cloudEnvironments.create.error",
                              defaultMessage: "Unable to create cloud environment",
                            }),
                            { errorAnalytics: { toastId: "wham_mutations_failed_to_create_environment" } },
                          )
                    },
                  },
                )
              e_.mutate(
                { environmentId: G.id, requestBody: (0, N.Zc)(t, G), requestContext: H },
                {
                  onSuccess: (e) => {
                    H?.signal.aborted ||
                      (et
                        .get(j.Id)
                        .success(
                          en.formatMessage({
                            id: "settings.cloudEnvironments.update.success",
                            defaultMessage: "Updated cloud environment",
                          }),
                        ),
                      eN.reset(t),
                      Q(G.id, t, e))
                  },
                  onError: () => {
                    H?.signal.aborted ||
                      et
                        .get(j.Id)
                        .danger(
                          en.formatMessage({
                            id: "settings.cloudEnvironments.update.error",
                            defaultMessage: "Unable to update cloud environment. Reload and try again",
                          }),
                          { errorAnalytics: { toastId: "wham_edit_environment_failed_to_update_environment" } },
                        )
                  },
                },
              )
            }
          },
        }),
        eV = eS.isPending || e_.isPending,
        eR = (0, r.d)(eN.store, em)
      ;((0, S.iv)(ei, eR || eV),
        $[8] !== eR || $[9] !== eV || $[10] !== J
          ? ((g = () => {
              eV || (eR ? ep(!0) : J())
            }),
            ($[8] = eR),
            ($[9] = eV),
            ($[10] = J),
            ($[11] = g))
          : (g = $[11]))
      let eP = g
      ;($[12] !== eP ? ((f = () => ({ requestClose: eP })), ($[12] = eP), ($[13] = f)) : (f = $[13]),
        (0, c.useImperativeHandle)(L, f),
        $[14] !== eN
          ? ((I = (e) => {
              ;(e.preventDefault(), eN.handleSubmit())
            }),
            ($[14] = eN),
            ($[15] = I))
          : (I = $[15]),
        $[16] !== el ||
        $[17] !== ed ||
        $[18] !== G ||
        $[19] !== eh ||
        $[20] !== ex ||
        $[21] !== eN ||
        $[22] !== ee ||
        $[23] !== B ||
        $[24] !== en ||
        $[25] !== eV ||
        $[26] !== ek ||
        $[27] !== er ||
        $[28] !== eb ||
        $[29] !== ej ||
        $[30] !== Y ||
        $[31] !== ef ||
        $[32] !== eP ||
        $[33] !== eC ||
        $[34] !== eD ||
        $[35] !== eM
          ? ((R = (e) => {
              let t = (0, N.FJ)(e, eh, G?.id),
                s = eM || null != t.workspaceDirectory,
                i = ek.data?.find((t) => t.id === e.machineId),
                a = G?.machine_id === e.machineId ? G.machine : void 0
              return (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)(M.X, {
                    children: (0, n.jsx)(M.X.Content, {
                      children: (0, n.jsxs)(E.t, {
                        children: [
                          (0, n.jsx)(w.ic, {
                            description: (0, n.jsx)(m.A, {
                              id: "settings.cloud.repository.help",
                              defaultMessage: "Choose the repository to use in this environment",
                            }),
                            label: (0, n.jsx)(m.A, {
                              id: "settings.cloudEnvironments.editor.repository",
                              defaultMessage: "Repository",
                            }),
                            control:
                              null == G && null == B
                                ? (0, n.jsx)(es, { form: eN, isPending: eV, preferredConnectorId: Y })
                                : (0, n.jsx)(q, {
                                    children: (0, n.jsx)(b.pd, {
                                      "aria-label": en.formatMessage({
                                        id: "settings.cloudEnvironments.editor.repository.aria",
                                        defaultMessage: "Repository",
                                      }),
                                      disabled: !0,
                                      value: e.repositoryName,
                                    }),
                                  }),
                          }),
                          (0, n.jsx)(eN.Field, {
                            name: "label",
                            children: (e) => {
                              let s,
                                i = null != t.label && (e.state.meta.isTouched || "duplicate" === t.label)
                              return (
                                i && null != t.label
                                  ? (s = (0, n.jsx)("span", {
                                      id: er,
                                      role: "alert",
                                      className: "text-danger",
                                      children: (0, n.jsx)(m.A, { ...eg[t.label] }),
                                    }))
                                  : !eb && ex
                                    ? (s = (0, n.jsx)(v.$, {
                                        color: "ghostSecondary",
                                        size: "inline",
                                        type: "button",
                                        onClick: () => void ef(),
                                        children: (0, n.jsx)(m.A, {
                                          id: "settings.cloudEnvironments.name.retry",
                                          defaultMessage: "Couldn\u2019t check existing names. Retry",
                                        }),
                                      }))
                                    : eb ||
                                      (s = (0, n.jsx)(m.A, {
                                        id: "settings.cloudEnvironments.name.checking",
                                        defaultMessage: "Checking existing environment names\u2026",
                                      })),
                                (0, n.jsx)(w.ic, {
                                  label: (0, n.jsx)(m.A, {
                                    id: "settings.cloudEnvironments.editor.name",
                                    defaultMessage: "Name",
                                  }),
                                  description: s,
                                  control: (0, n.jsx)(q, {
                                    children: (0, n.jsx)(b.pd, {
                                      "aria-invalid": i,
                                      "aria-describedby": i ? er : void 0,
                                      onBlur: e.handleBlur,
                                      "aria-label": en.formatMessage({
                                        id: "settings.cloudEnvironments.editor.name.aria",
                                        defaultMessage: "Environment name",
                                      }),
                                      disabled: eV,
                                      maxLength: 64,
                                      value: e.state.value,
                                      onChange: (t) => e.handleChange(t.target.value),
                                    }),
                                  }),
                                })
                              )
                            },
                          }),
                          (0, n.jsx)(eN.Field, {
                            name: "description",
                            children: (e) =>
                              (0, n.jsx)(w.ic, {
                                label: (0, n.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.editor.description",
                                  defaultMessage: "Description",
                                }),
                                description: (0, n.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.editor.description.help",
                                  defaultMessage:
                                    "Explain to members of your organization what this environment is for",
                                }),
                                control: (0, n.jsx)(q, {
                                  children: (0, n.jsx)(b.TM, {
                                    "aria-label": en.formatMessage({
                                      id: "settings.cloudEnvironments.editor.description.aria",
                                      defaultMessage: "Environment description",
                                    }),
                                    disabled: eV,
                                    maxLength: 512,
                                    placeholder: en.formatMessage({
                                      id: "settings.cloudEnvironments.editor.description.placeholder",
                                      defaultMessage: "1-2 sentence description",
                                    }),
                                    rows: 2,
                                    value: e.state.value,
                                    variant: "compact",
                                    onChange: (t) => e.handleChange(t.target.value),
                                  }),
                                }),
                              }),
                          }),
                          (0, n.jsx)(eN.Field, {
                            name: "machineId",
                            children: (t) =>
                              (0, n.jsx)(w.ic, {
                                label: (0, n.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.editor.machine",
                                  defaultMessage: "Container image",
                                }),
                                description: (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    ek.isError
                                      ? (0, n.jsx)("div", {
                                          children: (0, n.jsx)(m.A, {
                                            id: "settings.cloudEnvironments.editor.machine.error",
                                            defaultMessage: "Unable to load container images",
                                          }),
                                        })
                                      : null,
                                    (0, n.jsx)(m.A, {
                                      id: "settings.cloudEnvironments.editor.workspaceDirectory.summary",
                                      defaultMessage:
                                        "The repository will be cloned to {directory}. <edit>Edit workspace directory</edit>.",
                                      values: {
                                        directory: d().posix.join(
                                          e.workspaceDirectory.trim(),
                                          d().posix.basename(e.repositoryName),
                                        ),
                                        edit: (e) =>
                                          (0, n.jsx)(v.$, {
                                            className: "inline-flex max-w-full underline underline-offset-2",
                                            "aria-controls": ed,
                                            "aria-expanded": s,
                                            color: "ghostMuted",
                                            disabled: eV,
                                            size: "inline",
                                            type: "button",
                                            onClick: () => ew(!s),
                                            children: (0, n.jsx)("span", {
                                              className: "min-w-0 text-start break-words whitespace-normal",
                                              children: e,
                                            }),
                                          }),
                                      },
                                    }),
                                  ],
                                }),
                                control: ek.isError
                                  ? (0, n.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        null != a
                                          ? (0, n.jsx)(A.vg, { disabled: !0, children: a.id === N.a_ ? eA : a.label })
                                          : null,
                                        (0, n.jsx)(v.$, {
                                          color: "secondary",
                                          onClick: () => void ek.refetch(),
                                          size: "toolbar",
                                          type: "button",
                                          children: (0, n.jsx)(m.A, {
                                            id: "settings.cloudEnvironments.editor.machine.retry",
                                            defaultMessage: "Retry",
                                          }),
                                        }),
                                      ],
                                    })
                                  : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        (0, n.jsx)(x.Ab, {
                                          triggerButton: (0, n.jsx)(A.vg, {
                                            disabled: ek.isPending || eV,
                                            children:
                                              e.machineId === N.a_
                                                ? eA
                                                : (i?.label ??
                                                  a?.label ??
                                                  (0, n.jsx)(m.A, {
                                                    id: "settings.cloudEnvironments.editor.machine.select",
                                                    defaultMessage: "Select a container image",
                                                  })),
                                          }),
                                          children: (0, n.jsx)(x.ms.RadioGroup, {
                                            value: e.machineId,
                                            children: ek.data?.map((e) =>
                                              (0, n.jsx)(
                                                x.ms.RadioItem,
                                                {
                                                  value: e.id,
                                                  onSelect: () => t.handleChange(e.id),
                                                  children: e.id === N.a_ ? eA : e.label,
                                                },
                                                e.id,
                                              ),
                                            ),
                                          }),
                                        }),
                                        e.machineId === N.a_
                                          ? (0, n.jsx)(v.$, {
                                              color: "secondary",
                                              size: "toolbar",
                                              type: "button",
                                              disabled: eV,
                                              onClick: () => ey(!0),
                                              children: (0, n.jsx)(m.A, {
                                                id: "settings.cloudEnvironments.editor.packages",
                                                defaultMessage: "Preinstalled packages",
                                              }),
                                            })
                                          : null,
                                      ],
                                    }),
                              }),
                          }),
                          s
                            ? (0, n.jsx)(eN.Field, {
                                name: "workspaceDirectory",
                                children: (e) =>
                                  (0, n.jsx)(w.ic, {
                                    variant: "nested",
                                    label: (0, n.jsx)(m.A, {
                                      id: "settings.cloudEnvironments.editor.workspaceDirectory",
                                      defaultMessage: "Workspace directory",
                                    }),
                                    description: t.workspaceDirectory
                                      ? (0, n.jsx)("span", {
                                          id: el,
                                          role: "alert",
                                          className: "text-danger",
                                          children: (0, n.jsx)(m.A, {
                                            id: "settings.cloudEnvironments.workspaceDirectory.invalid",
                                            defaultMessage:
                                              "Enter an absolute directory such as /workspace, not the root directory",
                                          }),
                                        })
                                      : (0, n.jsx)(m.A, {
                                          id: "settings.cloudEnvironments.editor.workspaceDirectory.description",
                                          defaultMessage:
                                            "Directory where the repository is cloned; change this only when setup requires an absolute path",
                                        }),
                                    control: (0, n.jsx)(q, {
                                      children: (0, n.jsx)(b.pd, {
                                        id: ed,
                                        autoFocus: !0,
                                        "aria-label": en.formatMessage({
                                          id: "settings.cloudEnvironments.editor.workspaceDirectory.aria",
                                          defaultMessage: "Workspace directory",
                                        }),
                                        disabled: eV,
                                        "aria-invalid": null != t.workspaceDirectory,
                                        "aria-describedby": t.workspaceDirectory ? el : void 0,
                                        value: e.state.value,
                                        onChange: (t) => e.handleChange(t.target.value),
                                      }),
                                    }),
                                  }),
                              })
                            : null,
                        ],
                      }),
                    }),
                  }),
                  eD ? (0, n.jsx)(V, { form: eN, isPending: eV }) : null,
                  (0, n.jsx)(ea, { form: eN, isPending: eV }),
                  (0, n.jsx)(z, { form: eN, isPending: eV, showDomainScopedSecrets: eC }),
                  (0, n.jsx)(K, { form: eN, isPending: eV, inDialog: ee }),
                  ej ? (0, n.jsx)(eo, { form: eN, isPending: eV, onClose: () => ey(!1) }) : null,
                  (0, n.jsxs)("div", {
                    className: "flex items-center justify-end gap-2",
                    children: [
                      (0, n.jsx)(v.$, {
                        color: "secondary",
                        size: "dialogAction",
                        disabled: eV,
                        onClick: eP,
                        type: "button",
                        children: (0, n.jsx)(m.A, {
                          id: "settings.cloudEnvironments.editor.cancel",
                          defaultMessage: "Cancel",
                        }),
                      }),
                      (0, n.jsx)(v.$, {
                        color: "primary",
                        size: "dialogAction",
                        disabled:
                          !(0, N.hw)(e, null != i, G?.machine_id, eh, G?.id) || (!eb && e.label.trim() !== G?.label),
                        loading: eV,
                        type: "submit",
                        children:
                          null == G
                            ? (0, n.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.create",
                                defaultMessage: "Create environment",
                              })
                            : (0, n.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.save",
                                defaultMessage: "Save changes",
                              }),
                      }),
                    ],
                  }),
                ],
              })
            }),
            ($[16] = el),
            ($[17] = ed),
            ($[18] = G),
            ($[19] = eh),
            ($[20] = ex),
            ($[21] = eN),
            ($[22] = ee),
            ($[23] = B),
            ($[24] = en),
            ($[25] = eV),
            ($[26] = ek),
            ($[27] = er),
            ($[28] = eb),
            ($[29] = ej),
            ($[30] = Y),
            ($[31] = ef),
            ($[32] = eP),
            ($[33] = eC),
            ($[34] = eD),
            ($[35] = eM),
            ($[36] = R))
          : (R = $[36]),
        $[37] !== eN.Subscribe || $[38] !== R
          ? ((P = (0, n.jsx)(eN.Subscribe, { selector: eu, children: R })),
            ($[37] = eN.Subscribe),
            ($[38] = R),
            ($[39] = P))
          : (P = $[39]),
        $[40] !== I || $[41] !== P
          ? ((T = (0, n.jsx)("form", {
              className: "flex flex-col gap-[var(--padding-panel)]",
              onSubmit: I,
              children: P,
            })),
            ($[40] = I),
            ($[41] = P),
            ($[42] = T))
          : (T = $[42]))
      let eq = ec ? J : null
      return (
        $[43] === Symbol.for("react.memo_cache_sentinel") ? ((U = () => ep(!1)), ($[43] = U)) : (U = $[43]),
        $[44] !== eq
          ? ((W = (0, n.jsx)(k.W, { pendingNavigation: eq, onClearPendingNavigation: U })), ($[44] = eq), ($[45] = W))
          : (W = $[45]),
        $[46] !== T || $[47] !== W
          ? ((O = (0, n.jsxs)(n.Fragment, { children: [T, W] })), ($[46] = T), ($[47] = W), ($[48] = O))
          : (O = $[48]),
        O
      )
    }
    function eu(e) {
      return e.values
    }
    function em(e) {
      return !e.isDefaultValue
    }
    let eg = (0, g.YK)({
      required: { id: "settings.cloudEnvironments.name.required", defaultMessage: "Enter an environment name" },
      "too-long": { id: "settings.cloudEnvironments.name.tooLong", defaultMessage: "Use 64 characters or fewer" },
      duplicate: {
        id: "settings.cloudEnvironments.name.duplicate",
        defaultMessage: "An environment with this name already exists",
      },
    })
  },
  uMwG(e, t, s) {
    var n = s("QosV"),
      i = s("irkb"),
      a = s("xSOA"),
      r = s("qmMi"),
      o = s("SPnB"),
      l = s("CWeU"),
      d = s("eFn4"),
      c = s("UOa8"),
      u = s("GaA7"),
      m = s("OWtl"),
      g = s("OMIV"),
      p = s("rvFo"),
      h = s("kK7d")
    let v = (0, r.un)(m.u, ({ get: e }) => {
      let { authMethod: t, authLoading: s } = e(l.PO),
        n = e(g.JW, "2826489636"),
        i = (s || "chatgpt" === t || "chatgptAuthTokens" === t) && e(g.JW, "1168186395") && e(g.JW, "3816307151"),
        a = i ? e(d.L5) : null,
        r = i && (void 0 === a ? void 0 : (a?.cloudAccess ?? !0))
      return { cloudInstructionsEnabled: r, unifiedInstructions: n || r }
    })
    function x(e) {
      return ["cloud-user-preferences", e]
    }
    function f(e) {
      return (0, r.Ul)(o.o8)
    }
    let b = (0, r.vU)(m.u, (e) => ({
        queryKey: x(e),
        queryFn: ({ signal: e }) => h.CodexRequest.safeGet("/wham/settings/user", { signal: e }),
        enabled: null != e,
        retry: !1,
        staleTime: p.D.FIVE_MINUTES,
      })),
      j = (0, r.vU)(m.u, ({ accountId: e, userId: t }) => ({
        queryKey: ["cloud-preferences-config", e, t],
        queryFn: () => h.CodexRequest.safeGet("/wham/settings/configs/user-preferences"),
        enabled: null != e && null != t,
        retry: !1,
        staleTime: p.D.FIVE_MINUTES,
      }))
    function y(e, t, s) {
      let n = e
      for (let e of t) n = n.replaceAll(e.value, s(e))
      return n
    }
    s.d(
      t,
      {},
      {
        $g: j,
        Gn: v,
        If: f,
        Zl: function () {
          let e,
            t = (0, n.c)(3),
            { accountId: s, userId: i } = (0, c.As)()
          return (
            t[0] !== s || t[1] !== i
              ? ((e = { accountId: s, userId: i }), (t[0] = s), (t[1] = i), (t[2] = e))
              : (e = t[2]),
            (0, r._U)(j, e)
          )
        },
        d9: function (e, t, s) {
          let n = (e.match(/{/g) ?? []).length
          if (n !== (e.match(/}/g) ?? []).length) return "bracket-mismatch"
          if (0 === n) return "missing-pattern"
          let i = s.map((e) => e.value)
          if ((e.match(/{([^}]+)}/g) ?? []).some((e) => !i.includes(e))) return "invalid-pattern"
          let a = y(e, s, (e) => "x".repeat(e.char_count))
          return a.length > t
            ? "too-long"
            : a.startsWith("/")
              ? "leading-slash"
              : /^[a-zA-Z0-9./\-_]+$/.test(a)
                ? null
                : "invalid-characters"
        },
        ig: function (e, t) {
          return y(e, t, (e) => e.example)
        },
        ky: b,
        sN: function () {
          let e,
            t,
            s,
            r,
            o,
            l = (0, n.c)(13),
            { accountId: d, userId: m } = (0, c.As)(),
            g = f(m),
            p = (0, i.jE)()
          return (
            l[0] !== d || l[1] !== g
              ? ((e = ["update-cloud-user-preferences", d, g]),
                (t = (e) => {
                  if (null == d || null == g) throw Error("Sign in to update preferences")
                  return h.CodexRequest.safePatch("/wham/settings/user", {
                    expectedIdentity: { accountId: d, userId: g },
                    requestBody: e,
                  })
                }),
                (l[0] = d),
                (l[1] = g),
                (l[2] = e),
                (l[3] = t))
              : ((e = l[2]), (t = l[3])),
            l[4] !== g ? ((s = () => ({ queryKey: x(g) })), (l[4] = g), (l[5] = s)) : (s = l[5]),
            l[6] !== p
              ? ((r = async (e, t, s) => {
                  null != s &&
                    ((void 0 !== t.custom_instructions ||
                      void 0 !== t.communication_guide ||
                      void 0 !== t.communication_guide_enabled) &&
                      (await (u.appServices?.queryCache ?? u.appServices?.clientCoordination)?.invalidateQueryCache({
                        queryKey: [...s.queryKey],
                      })),
                    p.setQueryData(s.queryKey, e))
                }),
                (l[6] = p),
                (l[7] = r))
              : (r = l[7]),
            l[8] !== e || l[9] !== t || l[10] !== s || l[11] !== r
              ? ((o = { mutationKey: e, mutationFn: t, onMutate: s, onSuccess: r }),
                (l[8] = e),
                (l[9] = t),
                (l[10] = s),
                (l[11] = r),
                (l[12] = o))
              : (o = l[12]),
            (0, a.n)(o)
          )
        },
        wJ: function () {
          let { userId: e } = (0, c.As)(),
            t = f(e)
          return (0, r._U)(b, t)
        },
      },
    )
  },
  BSnr(e, t, s) {
    s.d(t, { X: () => r })
    var n = s("ABep"),
      i = s("QosV"),
      a = s("on57")
    let r = Object.assign(
      function (e) {
        let t,
          s,
          r = (0, i.c)(6),
          { children: o, id: l, className: d } = e
        return (
          r[0] !== d ? ((t = (0, a.A)("flex flex-col", d)), (r[0] = d), (r[1] = t)) : (t = r[1]),
          r[2] !== o || r[3] !== l || r[4] !== t
            ? ((s = (0, n.jsx)("section", { id: l, className: t, children: o })),
              (r[2] = o),
              (r[3] = l),
              (r[4] = t),
              (r[5] = s))
            : (s = r[5]),
          s
        )
      },
      {
        Header: function (e) {
          let t,
            s,
            r,
            o,
            l,
            d,
            c,
            u = (0, i.c)(33),
            {
              title: m,
              subtitle: g,
              actions: p,
              actionsAlignment: h,
              className: v,
              size: x,
              showDivider: f,
              titleGap: b,
              spacing: j,
              subtitlePlacement: y,
              subtitleWrap: M,
            } = e,
            w = void 0 === x ? "default" : x,
            A = void 0 === j ? "default" : j,
            E = void 0 === y ? "below-title" : y,
            k = void 0 === M ? "balance" : M,
            S = null != m,
            _ = null != g,
            C = null != p,
            D = "compact" === w
          u[0] !== D || u[1] !== g || u[2] !== E || u[3] !== k
            ? ((t = g
                ? (0, n.jsx)("div", {
                    className: (0, a.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === k ? "text-balance" : "text-wrap",
                      D ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === E && "w-full",
                    ),
                    children: g,
                  })
                : null),
              (u[0] = D),
              (u[1] = g),
              (u[2] = E),
              (u[3] = k),
              (u[4] = t))
            : (t = u[4])
          let F = t
          if (!S && !_ && !C) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(n.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let I =
              S && (void 0 === f || f) && "[[data-settings-panel]_&]:border-b [[data-settings-panel]_&]:border-default",
            N = "below-header" === E ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            V = _ && "compact" === A && "pb-2",
            R = _ && "compact" !== A && "pb-3"
          u[6] !== v ||
          u[7] !== _ ||
          u[8] !== D ||
          u[9] !== A ||
          u[10] !== V ||
          u[11] !== R ||
          u[12] !== I ||
          u[13] !== N
            ? ((s = (0, a.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                I,
                N,
                V,
                R,
                !_ && (0, a.A)("items-center pb-1.5", "compact" === A ? "min-h-8" : "min-h-toolbar"),
                _ && D && "items-center",
                _ && !D && "items-start",
                v,
              )),
              (u[6] = v),
              (u[7] = _),
              (u[8] = D),
              (u[9] = A),
              (u[10] = V),
              (u[11] = R),
              (u[12] = I),
              (u[13] = N),
              (u[14] = s))
            : (s = u[14])
          let P =
            "none" === (void 0 === b ? "default" : b)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[15] !== P ? ((r = (0, a.A)("flex min-w-0 flex-1 flex-col", P)), (u[15] = P), (u[16] = r)) : (r = u[16]),
            u[17] !== _ || u[18] !== w || u[19] !== m
              ? ((o = m
                  ? (0, n.jsx)("div", {
                      className: (0, a.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === w && "text-sm leading-[18px]",
                        ("large" === w || ("default" === w && _)) && "text-lg",
                        ("base" === w || ("default" === w && !_)) && "text-base",
                      ),
                      children: m,
                    })
                  : null),
                (u[17] = _),
                (u[18] = w),
                (u[19] = m),
                (u[20] = o))
              : (o = u[20]))
          let q = "below-title" === E ? F : null
          ;(u[21] !== r || u[22] !== o || u[23] !== q
            ? ((l = (0, n.jsxs)("div", { className: r, children: [o, q] })),
              (u[21] = r),
              (u[22] = o),
              (u[23] = q),
              (u[24] = l))
            : (l = u[24]),
            u[25] !== p || u[26] !== h
              ? ((d = p
                  ? (0, n.jsx)("div", {
                      className: (0, a.A)("flex items-center gap-2", "end" === h && "self-end"),
                      children: p,
                    })
                  : null),
                (u[25] = p),
                (u[26] = h),
                (u[27] = d))
              : (d = u[27]))
          let T = "below-header" === E ? F : null
          return (
            u[28] !== s || u[29] !== l || u[30] !== d || u[31] !== T
              ? ((c = (0, n.jsxs)("div", { className: s, children: [l, d, T] })),
                (u[28] = s),
                (u[29] = l),
                (u[30] = d),
                (u[31] = T),
                (u[32] = c))
              : (c = u[32]),
            c
          )
        },
        Content: function (e) {
          let t,
            s,
            r = (0, i.c)(5),
            { children: o, className: l } = e
          return (
            r[0] !== l ? ((t = (0, a.A)("flex flex-col gap-1.5", l)), (r[0] = l), (r[1] = t)) : (t = r[1]),
            r[2] !== o || r[3] !== t
              ? ((s = (0, n.jsx)("div", { className: t, children: o })), (r[2] = o), (r[3] = t), (r[4] = s))
              : (s = r[4]),
            s
          )
        },
        Footer: function (e) {
          let t,
            s,
            r = (0, i.c)(6),
            { children: o, className: l, variant: d } = e,
            c =
              "action" === (void 0 === d ? "description" : d)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            r[0] !== l || r[1] !== c
              ? ((t = (0, a.A)("text-balance text-secondary", c, l)), (r[0] = l), (r[1] = c), (r[2] = t))
              : (t = r[2]),
            r[3] !== o || r[4] !== t
              ? ((s = (0, n.jsx)("div", { className: t, children: o })), (r[3] = o), (r[4] = t), (r[5] = s))
              : (s = r[5]),
            s
          )
        },
      },
    )
  },
  qUPv(e, t, s) {
    var n = s("ABep"),
      i = s("QosV"),
      a = s("oyxz"),
      r = s("Sm6l"),
      o = s("JNtf"),
      l = s("mUDD")
    function d(e) {
      let t,
        s,
        d,
        c,
        u,
        m,
        g,
        p,
        h,
        v,
        x = (0, i.c)(19),
        { open: f, onKeepEditing: b, onDiscard: j } = e
      return (
        x[0] !== b
          ? ((t = (e) => {
              e || b()
            }),
            (x[0] = b),
            (x[1] = t))
          : (t = x[1]),
        x[2] !== j
          ? ((s = (e) => {
              ;(e.preventDefault(), j())
            }),
            (x[2] = j),
            (x[3] = s))
          : (s = x[3]),
        x[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, n.jsx)(o.L3, {
              children: (0, n.jsx)(a.A, {
                id: "settings.unsavedChanges.discardTitle",
                defaultMessage: "Discard changes?",
              }),
            })),
            (x[4] = d))
          : (d = x[4]),
        x[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, n.jsx)(l.OO, {
              children: (0, n.jsx)(l.c7, {
                title: d,
                subtitle: (0, n.jsx)(o.rr, {
                  children: (0, n.jsx)(a.A, {
                    id: "settings.unsavedChanges.discardDescription",
                    defaultMessage: "You have unsaved changes. If you leave now, your changes will be lost.",
                  }),
                }),
              }),
            })),
            (x[5] = c))
          : (c = x[5]),
        x[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, n.jsx)(a.A, { id: "settings.unsavedChanges.keepEditing", defaultMessage: "Keep editing" })),
            (x[6] = u))
          : (u = x[6]),
        x[7] !== b
          ? ((m = (0, n.jsx)(r.$, { color: "secondary", type: "button", onClick: b, children: u })),
            (x[7] = b),
            (x[8] = m))
          : (m = x[8]),
        x[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, n.jsx)(r.$, {
              color: "danger",
              type: "submit",
              children: (0, n.jsx)(a.A, { id: "settings.unsavedChanges.discard", defaultMessage: "Discard changes" }),
            })),
            (x[9] = g))
          : (g = x[9]),
        x[10] !== m
          ? ((p = (0, n.jsx)(l.OO, { children: (0, n.jsxs)(l.Es, { children: [m, g] }) })), (x[10] = m), (x[11] = p))
          : (p = x[11]),
        x[12] !== s || x[13] !== p
          ? ((h = (0, n.jsxs)(l.R4, { as: "form", onSubmit: s, children: [c, p] })),
            (x[12] = s),
            (x[13] = p),
            (x[14] = h))
          : (h = x[14]),
        x[15] !== f || x[16] !== t || x[17] !== h
          ? ((v = (0, n.jsx)(o.lG, { open: f, showDialogClose: !1, size: "compact", onOpenChange: t, children: h })),
            (x[15] = f),
            (x[16] = t),
            (x[17] = h),
            (x[18] = v))
          : (v = x[18]),
        v
      )
    }
    s.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            s,
            a = (0, i.c)(7),
            { pendingNavigation: r, onClearPendingNavigation: o } = e,
            l = null != r
          return (
            a[0] !== o || a[1] !== r
              ? ((t = () => {
                  ;(o(), r?.())
                }),
                (a[0] = o),
                (a[1] = r),
                (a[2] = t))
              : (t = a[2]),
            a[3] !== o || a[4] !== l || a[5] !== t
              ? ((s = (0, n.jsx)(d, { open: l, onKeepEditing: o, onDiscard: t })),
                (a[3] = o),
                (a[4] = l),
                (a[5] = t),
                (a[6] = s))
              : (s = a[6]),
            s
          )
        },
      },
    )
  },
}
//# sourceMappingURL=710096.40d5ac6b75.js.map
