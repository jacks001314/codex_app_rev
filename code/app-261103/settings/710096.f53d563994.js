export const __rspack_esm_ids = [710096]
export const __webpack_modules__ = {
  EShr(e, t, n) {
    var i = n("ABep"),
      s = n("QosV"),
      a = n("slpy"),
      o = n("on57"),
      r = n("zd8w"),
      l = n("ygO2")
    function d(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    n.d(
      t,
      {},
      {
        T: function (e) {
          let t,
            n,
            c,
            u,
            m = (0, s.c)(13),
            {
              options: g,
              selectedId: p,
              onHover: f,
              onSelect: h,
              size: v,
              className: b,
              buttonClassName: x,
              fullWidth: y,
              wrapLabels: w,
              uniform: j,
              selectedColor: k,
              unselectedColor: A,
              focusRing: E,
              variant: M,
              ariaLabel: S,
              ariaLabelledBy: C,
            } = e,
            _ = void 0 === g ? [] : g,
            N = void 0 !== y && y,
            I = void 0 !== w && w,
            F = void 0 === M ? "default" : M,
            L = (0, r.useRef)(null)
          m[0] !== p ? ((t = (e) => e.id === p), (m[0] = p), (m[1] = t)) : (t = m[1])
          let z = _.findIndex(t),
            T =
              -1 === z
                ? void 0
                : {
                    "--segmented-form-indicator-width": `${100 / _.length}%`,
                    "--segmented-form-indicator-offset": `${100 * z}%`,
                  },
            V = v ?? "default",
            D = "default",
            R = void 0 === k ? "segmentedSelected" : k,
            P = void 0 === A ? "ghost" : A
          "inset" === F
            ? ((V = v ?? "compact"), (D = "large"), (R = "segmentedInsetSelected"))
            : "field" === F
              ? ((V = "fieldSegment"), (R = "segmentedInsetSelected"))
              : "form" === F
                ? ((V = v ?? "recoveryAction"),
                  (D = "full"),
                  (R = "segmentedFormSelected"),
                  (P = "segmentedFormUnselected"))
                : "pricing" === F
                  ? ((V = "dialog"), (D = "extraLarge"))
                  : "filter" === F
                    ? ((V = "compact"), (D = "full"), (R = "secondary"), (P = "ghostTertiary"))
                    : "viewer" === F && ((V = "inline"), (D = "full"), (P = "ghostActive"))
          let q = j ?? ("icon" === V && _.length > 2)
          ;(m[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = () => {
                let e = L.current
                if (null == e) return
                let t = () => {
                  let t = e.querySelector('button[aria-pressed="true"], a[aria-current="page"]')
                  if (null == t) return
                  let n = t.offsetLeft,
                    i = n + t.offsetWidth,
                    s = e.scrollLeft,
                    a = s + e.clientWidth
                  n < s ? (e.scrollLeft = n) : i > a && (e.scrollLeft = i - e.clientWidth)
                }
                if ("u" < typeof ResizeObserver) return void t()
                let n = new ResizeObserver(t)
                for (let t of (n.observe(e), e.querySelectorAll("button, a"))) n.observe(t)
                return () => {
                  n.disconnect()
                }
              }),
              (m[2] = n))
            : (n = m[2]),
            (0, r.useLayoutEffect)(n, [_, p]))
          let W = (0, o.A)(
              "relative min-w-0 max-w-full items-center",
              "mode" === F
                ? [
                    N ? "grid w-full" : "inline-grid",
                    "isolate h-9 auto-cols-fr grid-flow-col gap-0 rounded-full select-none",
                  ]
                : [
                    N ? "flex w-full" : "inline-flex",
                    "hide-scrollbar overflow-x-auto overflow-y-hidden",
                    "field" === F || "form" === F ? "gap-0" : "gap-0.5",
                  ],
              "inset" === F && "rounded-[10px] bg-(--segmented-control-background) p-0.5",
              "field" === F && "h-8 rounded-lg bg-secondary-soft dark:bg-text/5",
              "form" === F && [
                "isolate rounded-full bg-background-segmented-form-track dark:inset-shadow-sm dark:inset-ring-1 dark:inset-ring-border-subtle",
                "compact" === V ? "p-0.5" : "p-1",
              ],
              "pricing" === F && "rounded-[20px] bg-surface-secondary p-1",
              "viewer" === F && "h-full p-0.5",
              b,
            ),
            B =
              "form" === F && -1 !== z
                ? (0, i.jsx)("span", {
                    "aria-hidden": !0,
                    className: (0, o.A)(
                      "pointer-events-none absolute z-10 flex forced-colors:hidden",
                      "compact" === V ? "inset-0.5" : "inset-1",
                    ),
                    style: T,
                    children: (0, i.jsx)("span", {
                      className:
                        "h-full w-(--segmented-form-indicator-width) rounded-full bg-background-segmented-form-selected shadow-md motion-safe:transition-transform motion-safe:duration-basic motion-safe:ease-in-out ltr:translate-x-(--segmented-form-indicator-offset) rtl:-translate-x-(--segmented-form-indicator-offset) dark:shadow-lg-stronger dark:inset-shadow-2xs dark:inset-shadow-border",
                    }),
                  })
                : null
          m[3] !== F
            ? ((c =
                "mode" === F
                  ? (0, i.jsx)("span", {
                      "aria-hidden": !0,
                      className:
                        "pointer-events-none absolute inset-x-px top-1/2 z-0 h-8.5 -translate-y-1/2 rounded-full bg-background-mode-toggle-track",
                    })
                  : null),
              (m[3] = F),
              (m[4] = c))
            : (c = m[4])
          let $ = _.map((e) => {
            let t = e.id === p,
              n = e.disabled ?? !1,
              { id: s, label: r, ariaLabel: d, tooltipContent: c, disabled: u, ...m } = e,
              g = {
                unstyled: "mode" === F,
                color: t ? R : P,
                focusRing: E ?? ("inset" === F || "field" === F ? "default" : "inset"),
                size: V,
                radius: D,
                onPointerEnter: null == f || n ? void 0 : () => f(s),
                uniform: q,
                "aria-label": d,
                disabled: n,
                className: (0, o.A)(
                  N ? "flex-1 justify-center" : "shrink-0",
                  I && "self-stretch py-2",
                  "form" === F &&
                    "relative min-w-0 flex-1 basis-0 focus-visible:z-20 motion-safe:transition-colors motion-safe:duration-basic",
                  "mode" === F && [
                    "relative z-10 h-full min-w-0 justify-center rounded-full border px-10 text-sm font-medium @max-lg/home-mode-toggle:px-2.5",
                    t
                      ? "border-mode-toggle-selected bg-background-mode-toggle-selected text-mode-toggle-primary shadow-mode-toggle-selected"
                      : "border-transparent text-mode-toggle-inactive hover:text-mode-toggle-primary focus-visible:text-mode-toggle-primary",
                  ],
                  "viewer" === F && "h-full px-2.5",
                  x,
                ),
                children:
                  "form" === F || I
                    ? (0, i.jsx)("span", {
                        className: (0, o.A)(
                          "form" === F && "relative z-20",
                          I && "min-w-0 wrap-anywhere whitespace-normal",
                        ),
                        children: r,
                      })
                    : r,
              },
              v =
                null != m.to
                  ? (0, i.jsx)(l.z, { ...m, ...g, "aria-current": t ? "page" : void 0 }, s)
                  : (0, i.jsx)(l.$, { ...g, onClick: () => h?.(s), "aria-pressed": t }, s)
            return c ? (0, i.jsx)(a.m, { content: c, children: v }, s) : v
          })
          return (
            m[5] !== S || m[6] !== C || m[7] !== d || m[8] !== B || m[9] !== c || m[10] !== $ || m[11] !== W
              ? ((u = (0, i.jsxs)("div", {
                  ref: L,
                  className: W,
                  role: "group",
                  "aria-label": S,
                  "aria-labelledby": C,
                  onWheel: d,
                  children: [B, c, $],
                })),
                (m[5] = S),
                (m[6] = C),
                (m[7] = d),
                (m[8] = B),
                (m[9] = c),
                (m[10] = $),
                (m[11] = W),
                (m[12] = u))
              : (u = m[12]),
            u
          )
        },
      },
    )
  },
  VJkC(e, t, n) {
    n.d(t, { c: () => el })
    var i = n("ABep"),
      s = n("QosV"),
      a = n("wH14"),
      o = n("FtMp"),
      r = n("zTeN"),
      l = n("zKw6"),
      d = n.n(l),
      c = n("zd8w"),
      u = n("Wf1j"),
      m = n("oyxz"),
      g = n("Qgfj"),
      p = n("EOo5"),
      f = n("OAko"),
      h = n("ygO2"),
      v = n("bqtn"),
      b = n("Bbed"),
      x = n("zLIa"),
      y = n("SGsN"),
      w = n("OWtl"),
      j = n("BSnr"),
      k = n("AWNZ"),
      A = n("QyE3"),
      E = n("ZEx5"),
      M = n("qUPv"),
      S = n("SOLA"),
      C = n("hZax"),
      _ = n("UR81"),
      N = n("vw1R"),
      I = n("eShZ"),
      F = n("uMwG"),
      L = n("VV8q")
    function z(e) {
      let t,
        n,
        a,
        o,
        r = (0, s.c)(9),
        { form: l, isPending: d } = e,
        c = (0, u.A)()
      r[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(m.A, {
            id: "settings.cloudEnvironments.sharing.onlyMe",
            defaultMessage: "Only me",
            description: "Label for an environment visible only to its owner",
          })),
          (r[0] = t))
        : (t = r[0])
      let g = t
      r[1] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (0, i.jsx)(m.A, {
            id: "settings.cloudEnvironments.editor.sharing.workspace",
            defaultMessage: "Shared with workspace",
            description: "Label for an environment visible to people in the current workspace",
          })),
          (r[1] = n))
        : (n = r[1])
      let p = n
      return (
        r[2] !== l || r[3] !== c || r[4] !== d
          ? ((a = (e) =>
              (0, i.jsxs)(j.X, {
                children: [
                  (0, i.jsx)(j.X.Header, {
                    title: (0, i.jsx)(m.A, {
                      id: "settings.cloudEnvironments.editor.sharing",
                      defaultMessage: "Sharing",
                      description: "Heading for cloud environment sharing settings",
                    }),
                  }),
                  (0, i.jsx)(j.X.Content, {
                    children: (0, i.jsxs)(E.t, {
                      children: [
                        (0, i.jsx)(k.ic, {
                          label: (0, i.jsx)(m.A, {
                            id: "settings.cloudEnvironments.editor.sharing.visibility",
                            defaultMessage: "Visibility",
                            description: "Label for cloud environment visibility",
                          }),
                          description:
                            "workspace" === e.shareSettings
                              ? (0, i.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.sharing.permissions",
                                  defaultMessage:
                                    "Workspace members can launch chats with this environment. Only you, ChatGPT Workspace Admins, and any additional editors can make changes.",
                                  description: "Explains who can use and edit a workspace-shared cloud environment",
                                })
                              : void 0,
                          control: (0, i.jsx)(v.Ab, {
                            triggerButton: (0, i.jsx)(A.vg, {
                              "aria-label": c.formatMessage({
                                id: "settings.cloudEnvironments.editor.sharing.visibility.aria",
                                defaultMessage: "Environment visibility",
                                description: "Accessible label for cloud environment visibility",
                              }),
                              disabled: d,
                              children: "private" === e.shareSettings ? g : p,
                            }),
                            children: (0, i.jsxs)(v.ms.RadioGroup, {
                              value: e.shareSettings,
                              children: [
                                (0, i.jsx)(v.ms.RadioItem, {
                                  disabled: d,
                                  value: "private",
                                  onSelect: () => l.setFieldValue("shareSettings", "private"),
                                  SubText: (0, i.jsx)(m.A, {
                                    id: "settings.cloudEnvironments.sharing.private.description",
                                    defaultMessage: "Visible only to you",
                                    description: "Explains the Only me environment visibility option",
                                  }),
                                  children: g,
                                }),
                                (0, i.jsx)(v.ms.RadioItem, {
                                  disabled: d,
                                  value: "workspace",
                                  onSelect: () => l.setFieldValue("shareSettings", "workspace"),
                                  SubText: (0, i.jsx)(m.A, {
                                    id: "settings.cloudEnvironments.sharing.workspace.description",
                                    defaultMessage: "Visible to people in your workspace",
                                    description: "Explains the Workspace environment visibility option",
                                  }),
                                  children: p,
                                }),
                              ],
                            }),
                          }),
                        }),
                        (0, i.jsx)(k.ic, {
                          variant: "stacked",
                          label: (0, i.jsx)(m.A, {
                            id: "settings.cloudEnvironments.editor.sharing.editors",
                            defaultMessage: "Add additional editors",
                            description: "Label for additional cloud environment editors",
                          }),
                          description:
                            "workspace" === e.shareSettings
                              ? (0, i.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.sharing.editors.description",
                                  defaultMessage:
                                    "Add one email per line. Users will be able to edit or delete this environment, or add and remove editors. The environment creator, and ChatGPT Workspace Admins, always have edit access.",
                                  description:
                                    "Explains the permissions granted to additional editors of a shared cloud environment",
                                })
                              : (0, i.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.sharing.editors.private",
                                  defaultMessage: "Share this environment with your workspace to add editors",
                                  description:
                                    "Explains why adding editors is disabled for a private cloud environment and how to enable it",
                                }),
                          control: (0, i.jsx)(x.TM, {
                            "aria-invalid": !!(0, L.FJ)(e).shareTargets,
                            "aria-label": c.formatMessage({
                              id: "settings.cloudEnvironments.editor.sharing.editors.aria",
                              defaultMessage: "Additional editors",
                              description:
                                "Accessible label for the list of additional cloud environment editors, entered one email address per line",
                            }),
                            autoResize: !0,
                            disabled: d || "private" === e.shareSettings,
                            placeholder: c.formatMessage({
                              id: "settings.cloudEnvironments.editor.sharing.editors.placeholder",
                              defaultMessage: "user@example.com",
                              description: "Example email address in the additional cloud environment editors field",
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
                  (0, L.FJ)(e).shareTargets
                    ? (0, i.jsx)(j.X.Footer, {
                        children: (0, i.jsx)("span", {
                          role: "alert",
                          className: "text-danger",
                          children: (0, i.jsx)(m.A, {
                            id: "settings.cloudEnvironments.sharing.invalidEmail",
                            defaultMessage: "Enter a valid email address for each editor",
                            description:
                              "Validation message for invalid additional-editor email addresses in a cloud environment",
                          }),
                        }),
                      })
                    : null,
                ],
              })),
            (r[2] = l),
            (r[3] = c),
            (r[4] = d),
            (r[5] = a))
          : (a = r[5]),
        r[6] !== l.Subscribe || r[7] !== a
          ? ((o = (0, i.jsx)(l.Subscribe, { selector: T, children: a })), (r[6] = l.Subscribe), (r[7] = a), (r[8] = o))
          : (o = r[8]),
        o
      )
    }
    function T(e) {
      return e.values
    }
    var V = n("F0xz")
    function D(e) {
      let t,
        n = (0, s.c)(2),
        { children: a } = e
      return (
        n[0] !== a
          ? ((t = (0, i.jsx)("div", { className: "w-72 max-w-full", children: a })), (n[0] = a), (n[1] = t))
          : (t = n[1]),
        t
      )
    }
    var R = n("XLSl")
    function P(e) {
      let t,
        n,
        a,
        o = (0, s.c)(8),
        { form: r, isPending: l, showDomainScopedSecrets: d } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)(j.X.Header, {
              title: (0, i.jsx)(m.A, {
                id: "settings.cloudEnvironments.editor.variables",
                defaultMessage: "Variables and secrets",
                description: "Heading for cloud environment variables and secrets",
              }),
            })),
            (o[0] = t))
          : (t = o[0]),
        o[1] !== r || o[2] !== l || o[3] !== d
          ? ((n = (e) => {
              let t = (0, L.FJ)(e)
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(W, {
                    entries: e.environmentVariables,
                    hideLanguageVersions: e.machineId === L.a_,
                    error: t.environmentVariables
                      ? (0, i.jsx)(m.A, {
                          id: "settings.cloudEnvironments.editor.variables.invalid",
                          defaultMessage: "Variable names and values are required, and names must be unique",
                          description: "Validation message for invalid cloud environment variables",
                        })
                      : void 0,
                    isPending: l,
                    label: (0, i.jsx)(m.A, {
                      id: "settings.cloudEnvironments.editor.environmentVariables",
                      defaultMessage: "Environment variables",
                      description: "Label for cloud environment variables",
                    }),
                    onChange: (e) => r.setFieldValue("environmentVariables", e),
                  }),
                  (0, i.jsx)(B, {
                    entries: e.secrets,
                    domainScoped: e.enableAuthtranslator,
                    showDomainScopedSecrets: d,
                    onDomainScopedChange: (e) => r.setFieldValue("enableAuthtranslator", e),
                    error: t.secrets
                      ? (0, i.jsx)(m.A, {
                          id: "settings.cloudEnvironments.editor.secrets.invalid",
                          defaultMessage:
                            "Secret keys and values are required, and key and domain combinations must be unique. Renaming a global secret requires a new value",
                          description: "Validation message for invalid cloud environment secrets",
                        })
                      : void 0,
                    isPending: l,
                    onChange: (e) => r.setFieldValue("secrets", e),
                  }),
                ],
              })
            }),
            (o[1] = r),
            (o[2] = l),
            (o[3] = d),
            (o[4] = n))
          : (n = o[4]),
        o[5] !== r.Subscribe || o[6] !== n
          ? ((a = (0, i.jsxs)(j.X, {
              children: [
                t,
                (0, i.jsx)(j.X.Content, { children: (0, i.jsx)(r.Subscribe, { selector: q, children: n }) }),
              ],
            })),
            (o[5] = r.Subscribe),
            (o[6] = n),
            (o[7] = a))
          : (a = o[7]),
        a
      )
    }
    function q(e) {
      return e.values
    }
    function W(e) {
      let t,
        n,
        a,
        o,
        r,
        l,
        d,
        c = (0, s.c)(22),
        { entries: g, hideLanguageVersions: p, error: f, isPending: v, label: b, onChange: y } = e,
        w = (0, u.A)()
      return (
        c[0] !== f
          ? ((t =
              f ??
              (0, i.jsx)(m.A, {
                id: "settings.cloudEnvironments.variables.paste",
                defaultMessage: "Paste .env content into a variable name to add multiple values",
                description:
                  "Explains how to paste multiple environment-variable assignments into the cloud environment form",
              })),
            (c[0] = f),
            (c[1] = t))
          : (t = c[1]),
        c[2] !== g || c[3] !== y
          ? ((n = () => y([...g, { key: "", value: "" }])), (c[2] = g), (c[3] = y), (c[4] = n))
          : (n = c[4]),
        c[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(m.A, {
              id: "settings.cloudEnvironments.editor.addVariable",
              defaultMessage: "Add variable",
              description: "Button label for adding a cloud environment variable",
            })),
            (c[5] = a))
          : (a = c[5]),
        c[6] !== v || c[7] !== n
          ? ((o = (0, i.jsx)(h.$, {
              color: "secondary",
              disabled: v,
              onClick: n,
              size: "toolbar",
              type: "button",
              children: a,
            })),
            (c[6] = v),
            (c[7] = n),
            (c[8] = o))
          : (o = c[8]),
        c[9] !== b || c[10] !== t || c[11] !== o
          ? ((r = (0, i.jsx)(k.ic, { description: t, label: b, control: o })),
            (c[9] = b),
            (c[10] = t),
            (c[11] = o),
            (c[12] = r))
          : (r = c[12]),
        c[13] !== g || c[14] !== p || c[15] !== w || c[16] !== v || c[17] !== y
          ? ((l = g.map((e, t) =>
              p &&
              "" !== e.value.trim() &&
              !g.some((n, i) => i !== t && n.key.trim() === e.key.trim()) &&
              R.S.some((t) => {
                let { variable: n } = t
                return n === e.key.trim()
              })
                ? null
                : (0, i.jsx)(
                    k.ic,
                    {
                      label: null,
                      variant: "nested",
                      control: (0, i.jsxs)("div", {
                        className: "grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2",
                        children: [
                          (0, i.jsx)(D, {
                            children: (0, i.jsx)(x.pd, {
                              "aria-label": w.formatMessage({
                                id: "settings.cloudEnvironments.editor.variable.name",
                                defaultMessage: "Variable name",
                                description: "Accessible label for a cloud environment variable name",
                              }),
                              disabled: v,
                              value: e.key,
                              onPaste: (e) => $(e, t, g, y),
                              onChange: (e) => y(g.map((n, i) => (i === t ? { ...n, key: e.target.value } : n))),
                            }),
                          }),
                          (0, i.jsx)(D, {
                            children: (0, i.jsx)(x.pd, {
                              "aria-label": w.formatMessage({
                                id: "settings.cloudEnvironments.editor.variable.value",
                                defaultMessage: "Variable value",
                                description: "Accessible label for a cloud environment variable value",
                              }),
                              disabled: v,
                              value: e.value,
                              onChange: (e) => y(g.map((n, i) => (i === t ? { ...n, value: e.target.value } : n))),
                            }),
                          }),
                          (0, i.jsx)(h.$, {
                            color: "secondary",
                            disabled: v,
                            onClick: () => y(g.filter((e, n) => n !== t)),
                            size: "toolbar",
                            type: "button",
                            children: (0, i.jsx)(m.A, {
                              id: "settings.cloudEnvironments.editor.removeVariable",
                              defaultMessage: "Remove",
                              description: "Button label for removing a cloud environment variable",
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
            (c[15] = w),
            (c[16] = v),
            (c[17] = y),
            (c[18] = l))
          : (l = c[18]),
        c[19] !== r || c[20] !== l
          ? ((d = (0, i.jsxs)(E.t, { children: [r, l] })), (c[19] = r), (c[20] = l), (c[21] = d))
          : (d = c[21]),
        d
      )
    }
    function B(e) {
      let t,
        n,
        a,
        o,
        r,
        l,
        d,
        c,
        g,
        p = (0, s.c)(29),
        {
          entries: f,
          error: v,
          isPending: b,
          domainScoped: y,
          showDomainScopedSecrets: w,
          onDomainScopedChange: j,
          onChange: A,
        } = e,
        M = (0, u.A)()
      return (
        p[0] !== v
          ? ((t =
              v ??
              (0, i.jsx)(m.A, {
                id: "settings.cloudEnvironments.secrets.paste",
                defaultMessage: "Paste .env content into a secret key to add multiple secrets",
                description:
                  "Explains how to paste multiple secrets into the cloud environment form without exposing secret values",
              })),
            (p[0] = v),
            (p[1] = t))
          : (t = p[1]),
        p[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)(m.A, {
              id: "settings.cloudEnvironments.editor.secrets",
              defaultMessage: "Secrets",
              description: "Label for cloud environment secrets",
            })),
            (p[2] = n))
          : (n = p[2]),
        p[3] !== f || p[4] !== A
          ? ((a = () => A([...f, { key: "", value: "" }])), (p[3] = f), (p[4] = A), (p[5] = a))
          : (a = p[5]),
        p[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, i.jsx)(m.A, {
              id: "settings.cloudEnvironments.editor.addSecret",
              defaultMessage: "Add secret",
              description: "Button label for adding a cloud environment secret",
            })),
            (p[6] = o))
          : (o = p[6]),
        p[7] !== b || p[8] !== a
          ? ((r = (0, i.jsx)(h.$, {
              color: "secondary",
              disabled: b,
              onClick: a,
              size: "toolbar",
              type: "button",
              children: o,
            })),
            (p[7] = b),
            (p[8] = a),
            (p[9] = r))
          : (r = p[9]),
        p[10] !== t || p[11] !== r
          ? ((l = (0, i.jsx)(k.ic, { description: t, label: n, control: r })), (p[10] = t), (p[11] = r), (p[12] = l))
          : (l = p[12]),
        p[13] !== y || p[14] !== M || p[15] !== b || p[16] !== j || p[17] !== w
          ? ((d = w
              ? (0, i.jsx)(k.ic, {
                  label: (0, i.jsx)(m.A, {
                    id: "settings.cloudEnvironments.secrets.domainScoped",
                    defaultMessage: "Domain-scoped secrets",
                    description: "Label for limiting cloud environment secrets to requests to their configured domains",
                  }),
                  description: y
                    ? (0, i.jsx)(m.A, {
                        id: "settings.cloudEnvironments.secrets.domainScoped.enabled",
                        defaultMessage:
                          "During tasks, secrets are sent only to their configured domain. Secrets without a domain are available only to setup scripts.",
                        description:
                          "Explains that domain-scoped cloud secrets without a domain are not injected during tasks, while setup scripts still receive real secret values",
                      })
                    : (0, i.jsx)(m.A, {
                        id: "settings.cloudEnvironments.secrets.domainScoped.description",
                        defaultMessage: "Limit each secret to requests to a specific domain",
                        description: "Explains the optional domain-scoped secret mode in cloud environment settings",
                      }),
                  control: (0, i.jsx)(V.l, {
                    ariaLabel: M.formatMessage({
                      id: "settings.cloudEnvironments.secrets.domainScoped.aria",
                      defaultMessage: "Domain-scoped secrets",
                      description: "Accessible label for enabling domain-scoped secrets in a cloud environment",
                    }),
                    checked: y,
                    disabled: b,
                    onChange: j,
                  }),
                })
              : null),
            (p[13] = y),
            (p[14] = M),
            (p[15] = b),
            (p[16] = j),
            (p[17] = w),
            (p[18] = d))
          : (d = p[18]),
        p[19] !== y || p[20] !== f || p[21] !== M || p[22] !== b || p[23] !== A
          ? ((c = f.map((e, t) =>
              (0, i.jsx)(
                k.ic,
                {
                  label: null,
                  variant: "nested",
                  control: (0, i.jsxs)("div", {
                    className: "grid w-full grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2",
                    children: [
                      (0, i.jsx)(D, {
                        children: (0, i.jsx)(x.pd, {
                          "aria-label": M.formatMessage({
                            id: "settings.cloudEnvironments.editor.secret.name",
                            defaultMessage: "Secret key",
                            description: "Accessible label for a cloud environment secret key",
                          }),
                          disabled: b,
                          value: e.key,
                          onPaste: (e) => $(e, t, f, A),
                          onChange: (e) => A(f.map((n, i) => (i === t ? { ...n, key: e.target.value } : n))),
                        }),
                      }),
                      (0, i.jsx)(D, {
                        children: (0, i.jsx)(x.pd, {
                          "aria-label": M.formatMessage({
                            id: "settings.cloudEnvironments.editor.secret.value",
                            defaultMessage: "Secret value",
                            description: "Accessible label for a cloud environment secret value",
                          }),
                          disabled: b,
                          placeholder: e.previousKey
                            ? M.formatMessage({
                                id: "settings.cloudEnvironments.editor.secret.keepPlaceholder",
                                defaultMessage: "Leave unchanged to keep",
                                description: "Placeholder for an existing cloud environment secret value",
                              })
                            : void 0,
                          type: "password",
                          value: e.value,
                          onChange: (e) => A(f.map((n, i) => (i === t ? { ...n, value: e.target.value } : n))),
                        }),
                      }),
                      (0, i.jsx)(h.$, {
                        color: "secondary",
                        disabled: b,
                        onClick: () => A(f.filter((e, n) => n !== t)),
                        size: "toolbar",
                        type: "button",
                        children: (0, i.jsx)(m.A, {
                          id: "settings.cloudEnvironments.editor.removeSecret",
                          defaultMessage: "Remove",
                          description: "Button label for removing a cloud environment secret",
                        }),
                      }),
                      y
                        ? (0, i.jsx)("div", {
                            className: "col-span-2",
                            children: (0, i.jsx)(D, {
                              children: (0, i.jsx)(x.pd, {
                                "aria-label": M.formatMessage({
                                  id: "settings.cloudEnvironments.editor.secret.domain",
                                  defaultMessage: "Secret domain",
                                  description: "Accessible label for a cloud environment secret domain",
                                }),
                                disabled: b,
                                placeholder: M.formatMessage({
                                  id: "settings.cloudEnvironments.editor.secret.domainPlaceholder",
                                  defaultMessage: "Optional domain",
                                  description: "Placeholder for an optional cloud environment secret domain",
                                }),
                                value: e.domain ?? "",
                                onChange: (e) => A(f.map((n, i) => (i === t ? { ...n, domain: e.target.value } : n))),
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
            (p[19] = y),
            (p[20] = f),
            (p[21] = M),
            (p[22] = b),
            (p[23] = A),
            (p[24] = c))
          : (c = p[24]),
        p[25] !== l || p[26] !== d || p[27] !== c
          ? ((g = (0, i.jsxs)(E.t, { children: [l, d, c] })), (p[25] = l), (p[26] = d), (p[27] = c), (p[28] = g))
          : (g = p[28]),
        g
      )
    }
    function $(e, t, n, i) {
      let s = (function (e) {
        let t = []
        for (let n of e.split(/\r?\n/)) {
          let e = n.trim()
          if (!e || e.startsWith("#") || e.startsWith(";")) continue
          let i = /^(?:export\s+)?([\w.-]+)\s*=\s*(.*)$/.exec(e)
          if (null == i) return []
          let s = i[2]
          if (s.startsWith('"') || s.startsWith("'")) {
            let e = /^(["'])(.*)\1\s*(?:#.*)?$/.exec(s)
            if (null == e) return []
            s = e[2]
          } else s = s.replace(/(^|[^\\])#.*$/, "$1").trim()
          t.push({ key: i[1], value: s })
        }
        return t
      })(e.clipboardData.getData("text/plain"))
      0 !== s.length &&
        (e.preventDefault(), i([...n.slice(0, t), { ...n[t], ...s[0] }, ...s.slice(1), ...n.slice(t + 1)]))
    }
    var O = n("eFn4"),
      H = n("zKCW"),
      U = n("ZtSy"),
      X = n("EShr")
    let G = [
      {
        value: "none",
        label: (0, g.zR)({
          id: "settings.cloudEnvironments.network.preset.none",
          defaultMessage: "Custom domains",
          description: "Allow only the domains entered below in the cloud environment network settings",
        }),
      },
      {
        value: "codex",
        label: (0, g.zR)({
          id: "settings.cloudEnvironments.network.preset.dependencies",
          defaultMessage: "Common dependencies",
          description: "Allow the standard coding dependency domains in the cloud environment network settings",
        }),
      },
      {
        value: "all",
        label: (0, g.zR)({
          id: "settings.cloudEnvironments.network.preset.all",
          defaultMessage: "All domains",
          description: "Allow all domains in the cloud environment network settings",
        }),
      },
    ]
    function Z(e) {
      let t,
        n,
        a,
        o,
        l = (0, s.c)(18),
        { form: d, isPending: g, inDialog: f } = e,
        b = void 0 !== f && f,
        y = (0, u.A)(),
        w = (0, c.useId)(),
        { accountId: M, planAtLogin: S } = (0, p.As)()
      l[0] !== S ? ((t = (0, _.Hw)(S) || (0, N.o)(S)), (l[0] = S), (l[1] = t)) : (t = l[1])
      let C = t,
        I = C && null != M
      l[2] !== I ? ((n = { enabled: I }), (l[2] = I), (l[3] = n)) : (n = l[3])
      let { data: F, isPending: z, isError: T, refetch: R } = (0, r._U)(O.Jk, M ?? "", n),
        P = C && (null == M || z),
        q = C && T,
        W = C && null != F && !F.beta_settings.codex_agent_network_access,
        B = g || P || q || W
      return (
        l[4] !== W ||
        l[5] !== B ||
        l[6] !== w ||
        l[7] !== q ||
        l[8] !== d ||
        l[9] !== b ||
        l[10] !== y ||
        l[11] !== g ||
        l[12] !== P ||
        l[13] !== R
          ? ((a = (e) => {
              let t,
                n = e ?? { mode: "off" },
                s = null != (0, L.FJ)(d.state.values).agentNetworkAccess,
                a = G.find((e) => e.value === (n.preset_allowlist ?? "none")) ?? G[0]
              return (
                (t = P
                  ? (0, i.jsx)(m.A, {
                      id: "settings.cloudEnvironments.network.policy.loading",
                      defaultMessage: "Checking workspace network policy…",
                      description:
                        "Shown while workspace policy is being loaded before enabling cloud environment network controls",
                    })
                  : q
                    ? (0, i.jsx)(m.A, {
                        id: "settings.cloudEnvironments.network.policy.error",
                        defaultMessage: "Couldn’t check your workspace network policy",
                        description:
                          "Error explaining why cloud environment network controls are temporarily unavailable",
                      })
                    : W
                      ? (0, i.jsx)(m.A, {
                          id: "settings.cloudEnvironments.network.policy.blocked",
                          defaultMessage: "Your workspace doesn’t allow internet access after setup",
                          description:
                            "Explains that workspace policy disables internet access for cloud tasks after setup",
                        })
                      : "off" === n.mode
                        ? (0, i.jsx)(m.A, {
                            id: "settings.cloudEnvironments.network.off.description",
                            defaultMessage:
                              "Internet access will be disabled after setup. Codex will only be able to use dependencies installed by the setup script.",
                            description:
                              "Explains that cloud task network access is disabled after setup and dependencies must be installed beforehand",
                          })
                        : (0, i.jsx)(m.A, {
                            id: "settings.cloudEnvironments.editor.network.mode.description",
                            defaultMessage: "Controls internet access after setup completes",
                            description: "Explanation for cloud environment network access",
                          })),
                (0, i.jsxs)(j.X, {
                  children: [
                    (0, i.jsx)(j.X.Header, {
                      title: (0, i.jsx)(m.A, {
                        id: "settings.cloudEnvironments.editor.network",
                        defaultMessage: "Agent internet access",
                        description: "Heading for cloud environment network access",
                      }),
                    }),
                    (0, i.jsxs)(j.X.Content, {
                      children: [
                        (0, i.jsxs)(E.t, {
                          children: [
                            (0, i.jsx)(k.ic, {
                              label: (0, i.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.network.mode",
                                defaultMessage: "Access",
                                description: "Label for the cloud environment network access mode",
                              }),
                              description: t,
                              control: (0, i.jsx)(X.T, {
                                ariaLabel: y.formatMessage({
                                  id: "settings.cloudEnvironments.editor.network.aria",
                                  defaultMessage: "Agent internet access",
                                  description: "Accessible label for cloud environment network access",
                                }),
                                options: [
                                  {
                                    id: "off",
                                    label: (0, i.jsx)(m.A, {
                                      id: "settings.cloudEnvironments.network.off",
                                      defaultMessage: "Off",
                                      description: "Label for disabled cloud environment network access",
                                    }),
                                    disabled: g,
                                  },
                                  {
                                    id: "on",
                                    label: (0, i.jsx)(m.A, {
                                      id: "settings.cloudEnvironments.network.on",
                                      defaultMessage: "On",
                                      description: "Label for enabled cloud environment network access",
                                    }),
                                    disabled: B,
                                  },
                                ],
                                selectedId: "off" === n.mode ? "off" : "on",
                                onSelect: (e) =>
                                  d.setFieldValue("agentNetworkAccess", {
                                    ...n,
                                    mode: e,
                                    preset_allowlist: n.preset_allowlist ?? "codex",
                                  }),
                              }),
                            }),
                            q
                              ? (0, i.jsx)(k.ic, {
                                  label: null,
                                  control: (0, i.jsx)(h.$, {
                                    color: "secondary",
                                    size: "toolbar",
                                    type: "button",
                                    onClick: () => void R(),
                                    children: (0, i.jsx)(m.A, {
                                      id: "settings.cloudEnvironments.network.policy.retry",
                                      defaultMessage: "Retry",
                                      description:
                                        "Retries loading the workspace network policy for cloud environments",
                                    }),
                                  }),
                                })
                              : null,
                            "off" !== n.mode
                              ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                    (0, i.jsx)(k.ic, {
                                      label: (0, i.jsx)(m.A, {
                                        id: "settings.cloudEnvironments.network.preset",
                                        defaultMessage: "Domain access",
                                        description:
                                          "Label for the allowed-domain preset in cloud environment network settings",
                                      }),
                                      controlSizing: "grow",
                                      control: (0, i.jsxs)("span", {
                                        className: "flex flex-wrap items-center justify-end gap-2",
                                        children: [
                                          (0, i.jsx)(v.Ab, {
                                            triggerButton: (0, i.jsx)(A.vg, {
                                              disabled: B,
                                              "aria-label": y.formatMessage({
                                                id: "settings.cloudEnvironments.network.preset.aria",
                                                defaultMessage: "Domain access",
                                                description:
                                                  "Accessible label for the cloud environment allowed-domain preset",
                                              }),
                                              children: (0, i.jsx)(m.A, { ...a.label }),
                                            }),
                                            children: (0, i.jsx)(v.ms.RadioGroup, {
                                              value: n.preset_allowlist ?? "none",
                                              children: G.map((e) =>
                                                (0, i.jsx)(
                                                  v.ms.RadioItem,
                                                  {
                                                    value: e.value,
                                                    onSelect: () =>
                                                      d.setFieldValue("agentNetworkAccess", {
                                                        ...n,
                                                        preset_allowlist: e.value,
                                                      }),
                                                    children: (0, i.jsx)(m.A, { ...e.label }),
                                                  },
                                                  e.value,
                                                ),
                                              ),
                                            }),
                                          }),
                                          (0, i.jsx)(U.G, {
                                            appearance: "secondary",
                                            href: "https://developers.openai.com/codex/cloud/internet-access#preset-domain-lists",
                                            initiator: "external_link",
                                            openTarget: b ? "external-browser" : void 0,
                                            children: (0, i.jsx)(m.A, {
                                              id: "settings.cloudEnvironments.network.domainDetails",
                                              defaultMessage: "Domain details",
                                              description:
                                                "Link beside the domain allowlist selector in legacy cloud environment settings that opens documentation listing the domains included in each preset",
                                            }),
                                          }),
                                        ],
                                      }),
                                    }),
                                    "all" !== n.preset_allowlist
                                      ? (0, i.jsx)(k.ic, {
                                          label: (0, i.jsx)(m.A, {
                                            id: "settings.cloudEnvironments.editor.network.allowedDomains",
                                            defaultMessage: "Allowed domains",
                                            description: "Label for allowed cloud environment network domains",
                                          }),
                                          description: s
                                            ? (0, i.jsx)("span", {
                                                id: w,
                                                role: "alert",
                                                className: "text-danger",
                                                children: (0, i.jsx)(m.A, {
                                                  id: "settings.cloudEnvironments.network.domains.required",
                                                  defaultMessage:
                                                    "Enter at least one allowed domain, or choose a different domain preset",
                                                  description:
                                                    "Validation message when custom cloud network access has no allowed domains",
                                                }),
                                              })
                                            : (0, i.jsx)(m.A, {
                                                id: "settings.cloudEnvironments.network.domains.help",
                                                defaultMessage: "Separate domains with commas",
                                                description:
                                                  "Instructions for entering allowed domains in cloud environment network settings",
                                              }),
                                          control: (0, i.jsx)(D, {
                                            children: (0, i.jsx)(x.pd, {
                                              "aria-label": y.formatMessage({
                                                id: "settings.cloudEnvironments.editor.network.allowedDomains.aria",
                                                defaultMessage: "Allowed domains",
                                                description:
                                                  "Accessible label for allowed cloud environment network domains",
                                              }),
                                              disabled: B,
                                              "aria-invalid": s,
                                              "aria-describedby": s ? w : void 0,
                                              value: n.allowlist_domains ?? "",
                                              onChange: (e) =>
                                                d.setFieldValue("agentNetworkAccess", {
                                                  ...n,
                                                  allowlist_domains: e.target.value,
                                                }),
                                            }),
                                          }),
                                        })
                                      : null,
                                    (0, i.jsx)(k.ic, {
                                      label: (0, i.jsx)(m.A, {
                                        id: "settings.cloudEnvironments.network.methods",
                                        defaultMessage: "Read-only HTTP methods",
                                        description: "Label for restricting a cloud environment's allowed HTTP methods",
                                      }),
                                      description: (0, i.jsx)(m.A, {
                                        id: "settings.cloudEnvironments.network.methods.description",
                                        defaultMessage: "Allow only GET, HEAD, and OPTIONS",
                                        description:
                                          "Explains which HTTP methods remain available when the cloud environment method restriction is enabled",
                                      }),
                                      control: (0, i.jsx)(V.l, {
                                        ariaLabel: y.formatMessage({
                                          id: "settings.cloudEnvironments.network.methods.aria",
                                          defaultMessage: "Read-only HTTP methods",
                                          description:
                                            "Accessible label for restricting HTTP methods in a cloud environment",
                                        }),
                                        checked: n.safe_methods_only ?? !1,
                                        disabled: B,
                                        onChange: (e) =>
                                          d.setFieldValue("agentNetworkAccess", { ...n, safe_methods_only: e }),
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                          ],
                        }),
                        null,
                        "off" === n.mode || P || q || W
                          ? null
                          : (0, i.jsx)(H.l, {
                              variant: "settings",
                              layout: "vertical",
                              type: "caution",
                              ariaLive: "polite",
                              title: (0, i.jsx)(m.A, {
                                id: "settings.cloudEnvironments.network.risks.title",
                                defaultMessage: "Enabling internet access exposes your environment to security risks",
                                description:
                                  "Warning title shown when agent internet access is enabled for a legacy cloud environment",
                              }),
                              content: (0, i.jsx)(m.A, {
                                id: "settings.cloudEnvironments.network.risks.description",
                                defaultMessage:
                                  "These include prompt injection, exfiltration of code or secrets, inclusion of malware or vulnerabilities, or use of content with license restrictions. <docs>See the docs</docs> for an example exfiltration attack.{br}{br}To mitigate risks, only allow necessary domains and methods, and always review Codex's outputs and work log.",
                                description:
                                  "Warning body shown when agent internet access is enabled for a legacy cloud environment. The docs link opens the security risks documentation; br separates the risk explanation from advice for reducing those risks.",
                                values: {
                                  br: (0, i.jsx)("br", {}),
                                  docs: (e) =>
                                    (0, i.jsx)(U.G, {
                                      appearance: "inherit",
                                      underline: "always",
                                      href: "https://developers.openai.com/codex/cloud/internet-access#risks-of-agent-internet-access",
                                      initiator: "external_link",
                                      openTarget: b ? "external-browser" : void 0,
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
            (l[5] = B),
            (l[6] = w),
            (l[7] = q),
            (l[8] = d),
            (l[9] = b),
            (l[10] = y),
            (l[11] = g),
            (l[12] = P),
            (l[13] = R),
            (l[14] = a))
          : (a = l[14]),
        l[15] !== d.Subscribe || l[16] !== a
          ? ((o = (0, i.jsx)(d.Subscribe, { selector: K, children: a })),
            (l[15] = d.Subscribe),
            (l[16] = a),
            (l[17] = o))
          : (o = l[17]),
        o
      )
    }
    function K(e) {
      return e.values.agentNetworkAccess
    }
    var J = n("S5Ho"),
      Q = n("JNtf"),
      Y = n("mUDD"),
      ee = n("evwP")
    let et = (0, b._)(async () => (await n.e(497124).then(n.bind(n, "pgXv"))).CloudEnvironmentRepositoryPicker, {
      fallback: (0, i.jsx)(ee.W, {
        layout: "settings-row",
        children: (0, i.jsx)(Q.L3, {
          children: (0, i.jsx)(m.A, {
            id: "settings.cloudEnvironments.editor.repository.loading",
            defaultMessage: "Loading repositories…",
            description: "Shown while the cloud environment repository picker loads",
          }),
        }),
      }),
      errorFallback: (0, i.jsx)(ee.W, {
        layout: "settings-row",
        children: (0, i.jsx)(Q.L3, {
          children: (0, i.jsx)(m.A, {
            id: "settings.cloudEnvironments.editor.repository.loadFailed",
            defaultMessage: "Couldn’t open the repository picker. Reload the app and try again",
            description: "Recovery instructions when the repository picker code could not be downloaded after retrying",
          }),
        }),
      }),
    })
    function en(e) {
      let t,
        n,
        a = (0, s.c)(8),
        { form: o, isPending: r, preferredConnectorId: l } = e,
        [d, u] = (0, c.useState)(!1)
      return (
        a[0] !== o || a[1] !== r || a[2] !== d || a[3] !== l
          ? ((t = (e) => {
              let { githubConnectorId: t, repositoryName: n } = e
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(A.vg, {
                    disabled: r,
                    onClick: () => u(!0),
                    children:
                      n ||
                      (0, i.jsx)(m.A, {
                        id: "settings.cloudEnvironments.editor.repository.select",
                        defaultMessage: "Select a repository",
                        description: "Placeholder for the cloud environment repository selector",
                      }),
                  }),
                  d
                    ? (0, i.jsx)(es, {
                        isPending: r,
                        preferredConnectorId: t ?? l,
                        onClose: () => u(!1),
                        onSelect: (e) => {
                          let { connectorId: t, repository: i } = e
                          ;(o.setFieldValue("label", (0, L.Hr)(i.repository_full_name, o.getFieldValue("label"), n)),
                            o.setFieldValue("githubConnectorId", t),
                            o.setFieldValue("repositoryId", i.id),
                            o.setFieldValue("repositoryName", i.repository_full_name),
                            u(!1))
                        },
                      })
                    : null,
                ],
              })
            }),
            (a[0] = o),
            (a[1] = r),
            (a[2] = d),
            (a[3] = l),
            (a[4] = t))
          : (t = a[4]),
        a[5] !== o.Subscribe || a[6] !== t
          ? ((n = (0, i.jsx)(o.Subscribe, { selector: ei, children: t })), (a[5] = o.Subscribe), (a[6] = t), (a[7] = n))
          : (n = a[7]),
        n
      )
    }
    function ei(e) {
      return { githubConnectorId: e.values.githubConnectorId, repositoryName: e.values.repositoryName }
    }
    function es(e) {
      let t,
        n,
        a,
        o,
        r,
        l,
        d,
        c,
        u = (0, s.c)(17),
        { isPending: g, preferredConnectorId: p, onClose: f, onSelect: v } = e
      return (
        u[0] !== f
          ? ((t = (e) => {
              e || f()
            }),
            (u[0] = f),
            (u[1] = t))
          : (t = u[1]),
        u[2] === Symbol.for("react.memo_cache_sentinel") ? ((n = []), (u[2] = n)) : (n = u[2]),
        u[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)(Q.L3, {
              className: "heading-lg font-semibold",
              children: (0, i.jsx)(m.A, {
                id: "settings.cloudEnvironments.editor.repository.dialogTitle",
                defaultMessage: "Choose a repository",
                description: "Title of the repository selection dialog for a legacy cloud environment",
              }),
            })),
            (u[3] = a))
          : (a = u[3]),
        u[4] !== g || u[5] !== v || u[6] !== p
          ? ((o = (0, i.jsx)(et, {
              disabled: g,
              preferredConnectorId: p,
              selectionMode: "single",
              selectedRepositoryIds: n,
              header: a,
              onChange: v,
            })),
            (u[4] = g),
            (u[5] = v),
            (u[6] = p),
            (u[7] = o))
          : (o = u[7]),
        u[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, i.jsx)(m.A, {
              id: "settings.cloudEnvironments.editor.repository.cancel",
              defaultMessage: "Cancel",
              description: "Closes the repository dialog without changing the cloud environment",
            })),
            (u[8] = r))
          : (r = u[8]),
        u[9] !== f
          ? ((l = (0, i.jsx)(Y.Es, {
              expandSingleButton: !1,
              children: (0, i.jsx)(h.$, {
                color: "secondary",
                onClick: f,
                size: "dialog",
                type: "button",
                children: r,
              }),
            })),
            (u[9] = f),
            (u[10] = l))
          : (l = u[10]),
        u[11] !== o || u[12] !== l
          ? ((d = (0, i.jsxs)(Y.R4, { size: "viewport", children: [o, l] })), (u[11] = o), (u[12] = l), (u[13] = d))
          : (d = u[13]),
        u[14] !== t || u[15] !== d
          ? ((c = (0, i.jsx)(Q.lG, { open: !0, size: "beacon", onOpenChange: t, children: d })),
            (u[14] = t),
            (u[15] = d),
            (u[16] = c))
          : (c = u[16]),
        c
      )
    }
    function ea(e) {
      let t,
        n,
        a = (0, s.c)(7),
        { form: o, isPending: r } = e,
        l = (0, u.A)()
      return (
        a[0] !== o || a[1] !== l || a[2] !== r
          ? ((t = (e) => {
              let t = e.autoSetupSettings?.use_auto_setup ?? "" === e.setupCommands,
                n = e.cacheSettings?.post_setup_cache_enabled ?? !1
              return (0, i.jsxs)(j.X, {
                children: [
                  (0, i.jsx)(j.X.Header, {
                    title: (0, i.jsx)(m.A, {
                      id: "settings.cloudEnvironments.editor.setup.title",
                      defaultMessage: "Code execution",
                      description:
                        "Heading for dependency installation and container caching when configuring a cloud environment",
                    }),
                  }),
                  (0, i.jsx)(j.X.Content, {
                    children: (0, i.jsxs)(E.t, {
                      children: [
                        (0, i.jsx)(k.ic, {
                          label: (0, i.jsx)(m.A, {
                            id: "settings.cloudEnvironments.editor.runtime.cache",
                            defaultMessage: "Container Caching",
                            description: "Label for cloud environment post-setup caching",
                          }),
                          description: (0, i.jsx)(m.A, {
                            id: "settings.cloudEnvironments.editor.setup.cache.description",
                            defaultMessage:
                              "Speed up container start by caching state after running the setup script. Maintenance scripts are run before every task.",
                            description: "Explains why cloud environment setup can be cached",
                          }),
                          control: (0, i.jsx)(V.l, {
                            ariaLabel: l.formatMessage({
                              id: "settings.cloudEnvironments.editor.runtime.cache.aria",
                              defaultMessage: "Container Caching",
                              description: "Accessible label for cloud environment post-setup caching",
                            }),
                            checked: n,
                            disabled: r,
                            onChange: (e) => o.setFieldValue("cacheSettings", { post_setup_cache_enabled: e }),
                          }),
                        }),
                        (0, i.jsx)(k.ic, {
                          label: (0, i.jsx)(m.A, {
                            id: "settings.cloudEnvironments.editor.setup.mode",
                            defaultMessage: "Setup script",
                            description:
                              "Label for choosing automatic or manual dependency installation in a cloud environment",
                          }),
                          description: t
                            ? (0, i.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.setup.automatic.description",
                                defaultMessage:
                                  "Runs the install commands like npm install for common package managers",
                                description: "Explains automatic dependency installation in a cloud environment",
                              })
                            : (0, i.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.setup.manual.description",
                                defaultMessage: "Run your own setup script after the repository is cloned",
                                description: "Explains manual dependency installation in a cloud environment",
                              }),
                          control: (0, i.jsx)(X.T, {
                            ariaLabel: l.formatMessage({
                              id: "settings.cloudEnvironments.editor.setup.mode.aria",
                              defaultMessage: "Setup script mode",
                              description: "Accessible label for automatic or manual cloud environment setup",
                            }),
                            selectedId: t ? "automatic" : "manual",
                            options: [
                              {
                                id: "automatic",
                                disabled: r,
                                label: (0, i.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.editor.setup.automatic",
                                  defaultMessage: "Automatic",
                                  description: "Choose automatic dependency installation for a cloud environment",
                                }),
                              },
                              {
                                id: "manual",
                                disabled: r,
                                label: (0, i.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.editor.setup.manual",
                                  defaultMessage: "Manual",
                                  description: "Choose a custom setup script for a cloud environment",
                                }),
                              },
                            ],
                            onSelect: (e) =>
                              o.setFieldValue("autoSetupSettings", { use_auto_setup: "automatic" === e }),
                          }),
                        }),
                        t
                          ? null
                          : (0, i.jsx)(k.ic, {
                              variant: "stacked",
                              label: null,
                              description: (0, i.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.setup.network",
                                defaultMessage:
                                  "Network access is available during setup, even when agent internet access is off",
                                description:
                                  "Explains that the cloud environment setup script can download dependencies regardless of the agent network setting",
                              }),
                              control: (0, i.jsx)(x.TM, {
                                "aria-label": l.formatMessage({
                                  id: "settings.cloudEnvironments.editor.setup.aria",
                                  defaultMessage: "Setup script",
                                  description: "Accessible label for a cloud environment setup script",
                                }),
                                autoResize: !0,
                                disabled: r,
                                rows: 3,
                                value: e.setupCommands,
                                variant: "compact",
                                onChange: (e) => o.setFieldValue("setupCommands", e.target.value),
                              }),
                            }),
                        n && !t
                          ? (0, i.jsx)(k.ic, {
                              variant: "stacked",
                              label: (0, i.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.maintenance",
                                defaultMessage: "Maintenance script",
                                description: "Label for a cloud environment maintenance script",
                              }),
                              description: (0, i.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.maintenance.description",
                                defaultMessage: "Runs before every task when using a cached container",
                                description: "Explanation for the cloud environment maintenance script",
                              }),
                              control: (0, i.jsx)(x.TM, {
                                "aria-label": l.formatMessage({
                                  id: "settings.cloudEnvironments.editor.maintenance.aria",
                                  defaultMessage: "Maintenance script",
                                  description: "Accessible label for a cloud environment maintenance script",
                                }),
                                autoResize: !0,
                                disabled: r,
                                rows: 3,
                                value: e.maintenanceSetupCommands,
                                variant: "compact",
                                onChange: (e) => o.setFieldValue("maintenanceSetupCommands", e.target.value),
                              }),
                            })
                          : null,
                      ],
                    }),
                  }),
                ],
              })
            }),
            (a[0] = o),
            (a[1] = l),
            (a[2] = r),
            (a[3] = t))
          : (t = a[3]),
        a[4] !== o.Subscribe || a[5] !== t
          ? ((n = (0, i.jsx)(o.Subscribe, { selector: eo, children: t })), (a[4] = o.Subscribe), (a[5] = t), (a[6] = n))
          : (n = a[6]),
        n
      )
    }
    function eo(e) {
      return e.values
    }
    let er = (0, b._)(async () => (await n.e(279879).then(n.bind(n, "WM1a"))).CloudEnvironmentPackagesDialog)
    function el(e) {
      let t,
        n = (0, s.c)(14),
        { ref: a, environment: o, initialRepository: r, inDialog: l, requestContext: d, onCancel: c, onSaved: u } = e,
        m = void 0 !== l && l
      if (null == o) {
        let e
        return (
          n[0] !== m || n[1] !== r || n[2] !== c || n[3] !== u || n[4] !== a || n[5] !== d
            ? ((e = (0, i.jsx)(ed, {
                ref: a,
                initialRepository: r,
                inDialog: m,
                requestContext: d,
                onCancel: c,
                onSaved: u,
              })),
              (n[0] = m),
              (n[1] = r),
              (n[2] = c),
              (n[3] = u),
              (n[4] = a),
              (n[5] = d),
              (n[6] = e))
            : (e = n[6]),
          e
        )
      }
      return (
        n[7] !== o || n[8] !== m || n[9] !== c || n[10] !== u || n[11] !== a || n[12] !== d
          ? ((t = (0, i.jsx)(ec, {
              ref: a,
              environment: o,
              inDialog: m,
              requestContext: d,
              onCancel: c,
              onSaved: u,
              preferredConnectorId: null,
            })),
            (n[7] = o),
            (n[8] = m),
            (n[9] = c),
            (n[10] = u),
            (n[11] = a),
            (n[12] = d),
            (n[13] = t))
          : (t = n[13]),
        t
      )
    }
    function ed(e) {
      let t,
        n = (0, s.c)(8),
        { ref: a, initialRepository: o, inDialog: r, requestContext: l, onCancel: d, onSaved: c } = e,
        u = void 0 !== r && r,
        m = (0, F.wJ)(),
        g = o?.githubConnectorId ?? m.data?.preferred_github_connector_id ?? null
      return (
        n[0] !== u || n[1] !== o || n[2] !== d || n[3] !== c || n[4] !== a || n[5] !== l || n[6] !== g
          ? ((t = (0, i.jsx)(ec, {
              ref: a,
              environment: null,
              initialRepository: o,
              inDialog: u,
              requestContext: l,
              onCancel: d,
              onSaved: c,
              preferredConnectorId: g,
            })),
            (n[0] = u),
            (n[1] = o),
            (n[2] = d),
            (n[3] = c),
            (n[4] = a),
            (n[5] = l),
            (n[6] = g),
            (n[7] = t))
          : (t = n[7]),
        t
      )
    }
    function ec(e) {
      let t,
        n,
        l,
        g,
        b,
        F,
        T,
        V,
        R,
        q,
        W,
        B,
        $ = (0, s.c)(49),
        {
          ref: O,
          environment: H,
          initialRepository: U,
          inDialog: X,
          requestContext: G,
          onCancel: K,
          onSaved: Q,
          preferredConnectorId: Y,
        } = e,
        ee = void 0 !== X && X,
        et = (0, r.gh)(w.u),
        ei = (0, u.A)(),
        es = (0, c.useId)(),
        eo = (0, c.useId)(),
        el = (0, c.useId)(),
        ed = (0, c.useId)(),
        [ec, ep] = (0, c.useState)(!1),
        { data: ef, error: eh, isError: ev, refetch: eb } = (0, f.sw)(),
        ex = null != ef || (eh instanceof I.fk && 404 === eh.status),
        [ey, ew] = (0, c.useState)(!1),
        [ej, ek] = (0, c.useState)(!1)
      $[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, i.jsx)(m.A, {
            id: "settings.cloudEnvironments.editor.machine.universal",
            defaultMessage: "Universal",
            description: "Name of the built-in general-purpose machine preset for cloud environments",
          })),
          ($[0] = t))
        : (t = $[0])
      let eA = t,
        { planAtLogin: eE } = (0, p.As)(),
        eM = (0, r.Ul)(J.H$),
        eS = (0, r.Ul)(J.mK),
        eC = (0, r.Ul)(J.N5),
        e_ = (0, C.Zj)("479474474")
      $[1] !== eE ? ((n = (0, _.Hw)(eE) || (0, N.o)(eE)), ($[1] = eE), ($[2] = n)) : (n = $[2])
      let eN = n,
        eI = H ?? void 0,
        eF = eN ? "workspace" : "private"
      $[3] !== U || $[4] !== Y || $[5] !== eI || $[6] !== eF
        ? ((l = (0, L.PE)(eI, Y, U, eF)), ($[3] = U), ($[4] = Y), ($[5] = eI), ($[6] = eF), ($[7] = l))
        : (l = $[7])
      let eL = (0, a.m)({
          defaultValues: l,
          onSubmit: (e) => {
            let { value: t } = e
            if (
              (0, L.hw)(t, eM.data?.some((e) => e.id === t.machineId) === !0, H?.machine_id, ef, H?.id) &&
              (ex || t.label.trim() === H?.label)
            ) {
              if (null == H)
                return void eS.mutate(
                  { requestBody: (0, L.o4)(t), requestContext: G },
                  {
                    onSuccess: (e) => {
                      G?.signal.aborted ||
                        (et
                          .get(y.Id)
                          .success(
                            ei.formatMessage({
                              id: "settings.cloudEnvironments.create.success",
                              defaultMessage: "Created cloud environment",
                              description: "Toast shown after creating a cloud environment",
                            }),
                          ),
                        eL.reset(t),
                        Q(e.id, t))
                    },
                    onError: () => {
                      G?.signal.aborted ||
                        et
                          .get(y.Id)
                          .danger(
                            ei.formatMessage({
                              id: "settings.cloudEnvironments.create.error",
                              defaultMessage: "Unable to create cloud environment",
                              description: "Toast shown when creating a cloud environment fails",
                            }),
                            { errorAnalytics: { toastId: "wham_mutations_failed_to_create_environment" } },
                          )
                    },
                  },
                )
              eC.mutate(
                { environmentId: H.id, requestBody: (0, L.Zc)(t, H), requestContext: G },
                {
                  onSuccess: () => {
                    G?.signal.aborted ||
                      (et
                        .get(y.Id)
                        .success(
                          ei.formatMessage({
                            id: "settings.cloudEnvironments.update.success",
                            defaultMessage: "Updated cloud environment",
                            description: "Toast shown after updating a cloud environment",
                          }),
                        ),
                      eL.reset(t),
                      Q(H.id, t))
                  },
                  onError: () => {
                    G?.signal.aborted ||
                      et
                        .get(y.Id)
                        .danger(
                          ei.formatMessage({
                            id: "settings.cloudEnvironments.update.error",
                            defaultMessage: "Unable to update cloud environment. Reload and try again",
                            description: "Toast shown when updating a cloud environment fails",
                          }),
                          { errorAnalytics: { toastId: "wham_edit_environment_failed_to_update_environment" } },
                        )
                  },
                },
              )
            }
          },
        }),
        ez = eS.isPending || eC.isPending,
        eT = (0, o.d)(eL.store, em)
      ;((0, S.iv)(es, eT || ez),
        $[8] !== eT || $[9] !== ez || $[10] !== K
          ? ((g = () => {
              ez || (eT ? ep(!0) : K())
            }),
            ($[8] = eT),
            ($[9] = ez),
            ($[10] = K),
            ($[11] = g))
          : (g = $[11]))
      let eV = g
      ;($[12] !== eV ? ((b = () => ({ requestClose: eV })), ($[12] = eV), ($[13] = b)) : (b = $[13]),
        (0, c.useImperativeHandle)(O, b),
        $[14] !== eL
          ? ((F = (e) => {
              ;(e.preventDefault(), eL.handleSubmit())
            }),
            ($[14] = eL),
            ($[15] = F))
          : (F = $[15]),
        $[16] !== el ||
        $[17] !== ed ||
        $[18] !== H ||
        $[19] !== ef ||
        $[20] !== ev ||
        $[21] !== eL ||
        $[22] !== ee ||
        $[23] !== U ||
        $[24] !== ei ||
        $[25] !== ez ||
        $[26] !== eM ||
        $[27] !== eo ||
        $[28] !== ex ||
        $[29] !== ey ||
        $[30] !== Y ||
        $[31] !== eb ||
        $[32] !== eV ||
        $[33] !== e_ ||
        $[34] !== eN ||
        $[35] !== ej
          ? ((T = (e) => {
              let t = (0, L.FJ)(e, ef, H?.id),
                n = ej || null != t.workspaceDirectory,
                s = eM.data?.find((t) => t.id === e.machineId),
                a = H?.machine_id === e.machineId ? H.machine : void 0
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsx)(j.X, {
                    children: (0, i.jsx)(j.X.Content, {
                      children: (0, i.jsxs)(E.t, {
                        children: [
                          (0, i.jsx)(k.ic, {
                            label: (0, i.jsx)(m.A, {
                              id: "settings.cloudEnvironments.editor.repository",
                              defaultMessage: "Repository",
                              description: "Label for a cloud environment repository",
                            }),
                            control:
                              null == H && null == U
                                ? (0, i.jsx)(en, { form: eL, isPending: ez, preferredConnectorId: Y })
                                : (0, i.jsx)(D, {
                                    children: (0, i.jsx)(x.pd, {
                                      "aria-label": ei.formatMessage({
                                        id: "settings.cloudEnvironments.editor.repository.aria",
                                        defaultMessage: "Repository",
                                        description: "Accessible label for a cloud environment repository input",
                                      }),
                                      disabled: !0,
                                      value: e.repositoryName,
                                    }),
                                  }),
                          }),
                          (0, i.jsx)(eL.Field, {
                            name: "label",
                            children: (e) => {
                              let n,
                                s = null != t.label && (e.state.meta.isTouched || "duplicate" === t.label)
                              return (
                                s && null != t.label
                                  ? (n = (0, i.jsx)("span", {
                                      id: eo,
                                      role: "alert",
                                      className: "text-danger",
                                      children: (0, i.jsx)(m.A, { ...eg[t.label] }),
                                    }))
                                  : !ex && ev
                                    ? (n = (0, i.jsx)(h.$, {
                                        color: "ghostSecondary",
                                        size: "inline",
                                        type: "button",
                                        onClick: () => void eb(),
                                        children: (0, i.jsx)(m.A, {
                                          id: "settings.cloudEnvironments.name.retry",
                                          defaultMessage: "Couldn’t check existing names. Retry",
                                          description:
                                            "Retries loading cloud environments after checking for duplicate names fails",
                                        }),
                                      }))
                                    : ex ||
                                      (n = (0, i.jsx)(m.A, {
                                        id: "settings.cloudEnvironments.name.checking",
                                        defaultMessage: "Checking existing environment names…",
                                        description:
                                          "Shown while loading cloud environments to check for duplicate names before saving",
                                      })),
                                (0, i.jsx)(k.ic, {
                                  label: (0, i.jsx)(m.A, {
                                    id: "settings.cloudEnvironments.editor.name",
                                    defaultMessage: "Name",
                                    description: "Label for a cloud environment name",
                                  }),
                                  description: n,
                                  control: (0, i.jsx)(D, {
                                    children: (0, i.jsx)(x.pd, {
                                      "aria-invalid": s,
                                      "aria-describedby": s ? eo : void 0,
                                      onBlur: e.handleBlur,
                                      "aria-label": ei.formatMessage({
                                        id: "settings.cloudEnvironments.editor.name.aria",
                                        defaultMessage: "Environment name",
                                        description: "Accessible label for a cloud environment name input",
                                      }),
                                      disabled: ez,
                                      maxLength: 64,
                                      value: e.state.value,
                                      onChange: (t) => e.handleChange(t.target.value),
                                    }),
                                  }),
                                })
                              )
                            },
                          }),
                          (0, i.jsx)(eL.Field, {
                            name: "description",
                            children: (e) =>
                              (0, i.jsx)(k.ic, {
                                label: (0, i.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.editor.description",
                                  defaultMessage: "Description",
                                  description: "Label for a cloud environment description",
                                }),
                                description: (0, i.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.editor.description.help",
                                  defaultMessage:
                                    "Explain to members of your organization what this environment is for",
                                  description: "Help text for the description of a legacy cloud environment",
                                }),
                                control: (0, i.jsx)(D, {
                                  children: (0, i.jsx)(x.TM, {
                                    "aria-label": ei.formatMessage({
                                      id: "settings.cloudEnvironments.editor.description.aria",
                                      defaultMessage: "Environment description",
                                      description: "Accessible label for a cloud environment description input",
                                    }),
                                    disabled: ez,
                                    maxLength: 512,
                                    placeholder: ei.formatMessage({
                                      id: "settings.cloudEnvironments.editor.description.placeholder",
                                      defaultMessage: "1-2 sentence description",
                                      description: "Placeholder for a short description of a legacy cloud environment",
                                    }),
                                    rows: 2,
                                    value: e.state.value,
                                    variant: "compact",
                                    onChange: (t) => e.handleChange(t.target.value),
                                  }),
                                }),
                              }),
                          }),
                          (0, i.jsx)(eL.Field, {
                            name: "machineId",
                            children: (t) =>
                              (0, i.jsx)(k.ic, {
                                label: (0, i.jsx)(m.A, {
                                  id: "settings.cloudEnvironments.editor.machine",
                                  defaultMessage: "Container image",
                                  description: "Label for the container image used by a cloud environment",
                                }),
                                description: (0, i.jsxs)(i.Fragment, {
                                  children: [
                                    eM.isError
                                      ? (0, i.jsx)("div", {
                                          children: (0, i.jsx)(m.A, {
                                            id: "settings.cloudEnvironments.editor.machine.error",
                                            defaultMessage: "Unable to load container images",
                                            description: "Error shown when cloud environment machines cannot be loaded",
                                          }),
                                        })
                                      : null,
                                    (0, i.jsx)(m.A, {
                                      id: "settings.cloudEnvironments.editor.workspaceDirectory.summary",
                                      defaultMessage:
                                        "The repository will be cloned to {directory}. <edit>Edit workspace directory</edit>.",
                                      description:
                                        "Helper text beneath Container image in the cloud environment form. The directory is the full path where the selected repository will be cloned. The edit link reveals the workspace directory input.",
                                      values: {
                                        directory: d().posix.join(
                                          e.workspaceDirectory.trim(),
                                          d().posix.basename(e.repositoryName),
                                        ),
                                        edit: (e) =>
                                          (0, i.jsx)(h.$, {
                                            className: "inline-flex max-w-full underline underline-offset-2",
                                            "aria-controls": ed,
                                            "aria-expanded": n,
                                            color: "ghostMuted",
                                            disabled: ez,
                                            size: "inline",
                                            type: "button",
                                            onClick: () => ek(!n),
                                            children: (0, i.jsx)("span", {
                                              className: "min-w-0 text-start break-words whitespace-normal",
                                              children: e,
                                            }),
                                          }),
                                      },
                                    }),
                                  ],
                                }),
                                control: eM.isError
                                  ? (0, i.jsxs)("div", {
                                      className: "flex items-center gap-2",
                                      children: [
                                        null != a
                                          ? (0, i.jsx)(A.vg, { disabled: !0, children: a.id === L.a_ ? eA : a.label })
                                          : null,
                                        (0, i.jsx)(h.$, {
                                          color: "secondary",
                                          onClick: () => void eM.refetch(),
                                          size: "toolbar",
                                          type: "button",
                                          children: (0, i.jsx)(m.A, {
                                            id: "settings.cloudEnvironments.editor.machine.retry",
                                            defaultMessage: "Retry",
                                            description: "Button label for retrying cloud environment machine loading",
                                          }),
                                        }),
                                      ],
                                    })
                                  : (0, i.jsxs)(i.Fragment, {
                                      children: [
                                        (0, i.jsx)(v.Ab, {
                                          triggerButton: (0, i.jsx)(A.vg, {
                                            disabled: eM.isPending || ez,
                                            children:
                                              e.machineId === L.a_
                                                ? eA
                                                : (s?.label ??
                                                  a?.label ??
                                                  (0, i.jsx)(m.A, {
                                                    id: "settings.cloudEnvironments.editor.machine.select",
                                                    defaultMessage: "Select a container image",
                                                    description: "Placeholder for a cloud environment machine selector",
                                                  })),
                                          }),
                                          children: (0, i.jsx)(v.ms.RadioGroup, {
                                            value: e.machineId,
                                            children: eM.data?.map((e) =>
                                              (0, i.jsx)(
                                                v.ms.RadioItem,
                                                {
                                                  value: e.id,
                                                  onSelect: () => t.handleChange(e.id),
                                                  children: e.id === L.a_ ? eA : e.label,
                                                },
                                                e.id,
                                              ),
                                            ),
                                          }),
                                        }),
                                        e.machineId === L.a_
                                          ? (0, i.jsx)(h.$, {
                                              color: "secondary",
                                              size: "toolbar",
                                              type: "button",
                                              disabled: ez,
                                              onClick: () => ew(!0),
                                              children: (0, i.jsx)(m.A, {
                                                id: "settings.cloudEnvironments.editor.packages",
                                                defaultMessage: "Preinstalled packages",
                                                description:
                                                  "Button opening the installed language and runtime versions for the Universal cloud container image",
                                              }),
                                            })
                                          : null,
                                      ],
                                    }),
                              }),
                          }),
                          n
                            ? (0, i.jsx)(eL.Field, {
                                name: "workspaceDirectory",
                                children: (e) =>
                                  (0, i.jsx)(k.ic, {
                                    variant: "nested",
                                    label: (0, i.jsx)(m.A, {
                                      id: "settings.cloudEnvironments.editor.workspaceDirectory",
                                      defaultMessage: "Workspace directory",
                                      description: "Label for a cloud environment workspace directory",
                                    }),
                                    description: t.workspaceDirectory
                                      ? (0, i.jsx)("span", {
                                          id: el,
                                          role: "alert",
                                          className: "text-danger",
                                          children: (0, i.jsx)(m.A, {
                                            id: "settings.cloudEnvironments.workspaceDirectory.invalid",
                                            defaultMessage:
                                              "Enter an absolute directory such as /workspace, not the root directory",
                                            description:
                                              "Validation message for an empty, relative, or root cloud environment workspace directory",
                                          }),
                                        })
                                      : (0, i.jsx)(m.A, {
                                          id: "settings.cloudEnvironments.editor.workspaceDirectory.description",
                                          defaultMessage:
                                            "Directory where the repository is cloned; change this only when setup requires an absolute path",
                                          description: "Explanation for the cloud environment workspace directory",
                                        }),
                                    control: (0, i.jsx)(D, {
                                      children: (0, i.jsx)(x.pd, {
                                        id: ed,
                                        autoFocus: !0,
                                        "aria-label": ei.formatMessage({
                                          id: "settings.cloudEnvironments.editor.workspaceDirectory.aria",
                                          defaultMessage: "Workspace directory",
                                          description:
                                            "Accessible label for the cloud environment workspace directory input",
                                        }),
                                        disabled: ez,
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
                  eN ? (0, i.jsx)(z, { form: eL, isPending: ez }) : null,
                  (0, i.jsx)(ea, { form: eL, isPending: ez }),
                  (0, i.jsx)(P, { form: eL, isPending: ez, showDomainScopedSecrets: e_ }),
                  (0, i.jsx)(Z, { form: eL, isPending: ez, inDialog: ee }),
                  ey ? (0, i.jsx)(er, { form: eL, isPending: ez, onClose: () => ew(!1) }) : null,
                  (0, i.jsxs)("div", {
                    className: "flex items-center justify-end gap-2",
                    children: [
                      (0, i.jsx)(h.$, {
                        color: "secondary",
                        size: "dialogAction",
                        disabled: ez,
                        onClick: eV,
                        type: "button",
                        children: (0, i.jsx)(m.A, {
                          id: "settings.cloudEnvironments.editor.cancel",
                          defaultMessage: "Cancel",
                          description: "Button label for cancelling cloud environment editing",
                        }),
                      }),
                      (0, i.jsx)(h.$, {
                        color: "primary",
                        size: "dialogAction",
                        disabled:
                          !(0, L.hw)(e, null != s, H?.machine_id, ef, H?.id) || (!ex && e.label.trim() !== H?.label),
                        loading: ez,
                        type: "submit",
                        children:
                          null == H
                            ? (0, i.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.create",
                                defaultMessage: "Create environment",
                                description: "Button label for creating a cloud environment",
                              })
                            : (0, i.jsx)(m.A, {
                                id: "settings.cloudEnvironments.editor.save",
                                defaultMessage: "Save changes",
                                description: "Button label for saving a cloud environment",
                              }),
                      }),
                    ],
                  }),
                ],
              })
            }),
            ($[16] = el),
            ($[17] = ed),
            ($[18] = H),
            ($[19] = ef),
            ($[20] = ev),
            ($[21] = eL),
            ($[22] = ee),
            ($[23] = U),
            ($[24] = ei),
            ($[25] = ez),
            ($[26] = eM),
            ($[27] = eo),
            ($[28] = ex),
            ($[29] = ey),
            ($[30] = Y),
            ($[31] = eb),
            ($[32] = eV),
            ($[33] = e_),
            ($[34] = eN),
            ($[35] = ej),
            ($[36] = T))
          : (T = $[36]),
        $[37] !== eL.Subscribe || $[38] !== T
          ? ((V = (0, i.jsx)(eL.Subscribe, { selector: eu, children: T })),
            ($[37] = eL.Subscribe),
            ($[38] = T),
            ($[39] = V))
          : (V = $[39]),
        $[40] !== F || $[41] !== V
          ? ((R = (0, i.jsx)("form", {
              className: "flex flex-col gap-[var(--padding-panel)]",
              onSubmit: F,
              children: V,
            })),
            ($[40] = F),
            ($[41] = V),
            ($[42] = R))
          : (R = $[42]))
      let eD = ec ? K : null
      return (
        $[43] === Symbol.for("react.memo_cache_sentinel") ? ((q = () => ep(!1)), ($[43] = q)) : (q = $[43]),
        $[44] !== eD
          ? ((W = (0, i.jsx)(M.W, { pendingNavigation: eD, onClearPendingNavigation: q })), ($[44] = eD), ($[45] = W))
          : (W = $[45]),
        $[46] !== R || $[47] !== W
          ? ((B = (0, i.jsxs)(i.Fragment, { children: [R, W] })), ($[46] = R), ($[47] = W), ($[48] = B))
          : (B = $[48]),
        B
      )
    }
    function eu(e) {
      return e.values
    }
    function em(e) {
      return !e.isDefaultValue
    }
    let eg = (0, g.YK)({
      required: {
        id: "settings.cloudEnvironments.name.required",
        defaultMessage: "Enter an environment name",
        description: "Validation error for an empty cloud environment name",
      },
      "too-long": {
        id: "settings.cloudEnvironments.name.tooLong",
        defaultMessage: "Use 64 characters or fewer",
        description: "Validation error for a cloud environment name exceeding the maximum length",
      },
      duplicate: {
        id: "settings.cloudEnvironments.name.duplicate",
        defaultMessage: "An environment with this name already exists",
        description: "Validation error asking the user to choose a different name for a cloud environment",
      },
    })
  },
  uMwG(e, t, n) {
    var i = n("QosV"),
      s = n("T0Rc"),
      a = n("irkb"),
      o = n("xSOA"),
      r = n("zTeN"),
      l = n("SPnB"),
      d = n("eFn4"),
      c = n("EOo5"),
      u = n("GaA7"),
      m = n("hZax"),
      g = n("rvFo"),
      p = n("HFSu")
    function f(e) {
      return ["cloud-user-preferences", e]
    }
    function h(e) {
      return (0, r.Ul)(l.o8)
    }
    function v(e) {
      let { signal: t } = e
      return p.CodexRequest.safeGet("/wham/settings/user", { signal: t })
    }
    function b() {
      return p.CodexRequest.safeGet("/wham/settings/configs/user-preferences")
    }
    function x(e, t, n) {
      let i = e
      for (let e of t) i = i.replaceAll(e.value, n(e))
      return i
    }
    n.d(
      t,
      {},
      {
        If: h,
        Zl: function () {
          let e,
            t,
            n = (0, i.c)(6),
            { accountId: a, userId: o } = (0, c.As)()
          n[0] !== a || n[1] !== o
            ? ((e = ["cloud-preferences-config", a, o]), (n[0] = a), (n[1] = o), (n[2] = e))
            : (e = n[2])
          let r = null != a && null != o
          return (
            n[3] !== e || n[4] !== r
              ? ((t = { queryKey: e, queryFn: b, enabled: r, retry: !1, staleTime: g.D.FIVE_MINUTES }),
                (n[3] = e),
                (n[4] = r),
                (n[5] = t))
              : (t = n[5]),
            (0, s.I)(t)
          )
        },
        d9: function (e, t, n) {
          let i = (e.match(/{/g) ?? []).length
          if (i !== (e.match(/}/g) ?? []).length) return "bracket-mismatch"
          if (0 === i) return "missing-pattern"
          let s = n.map((e) => e.value)
          if ((e.match(/{([^}]+)}/g) ?? []).some((e) => !s.includes(e))) return "invalid-pattern"
          let a = x(e, n, (e) => "x".repeat(e.char_count))
          return a.length > t
            ? "too-long"
            : a.startsWith("/")
              ? "leading-slash"
              : /^[a-zA-Z0-9./\-_]+$/.test(a)
                ? null
                : "invalid-characters"
        },
        ig: function (e, t) {
          return x(e, t, (e) => e.example)
        },
        sN: function () {
          let e,
            t,
            n,
            s,
            r,
            l = (0, i.c)(13),
            { accountId: d, userId: m } = (0, c.As)(),
            g = h(m),
            v = (0, a.jE)()
          return (
            l[0] !== d || l[1] !== g
              ? ((e = ["update-cloud-user-preferences", d, g]),
                (t = (e) => {
                  if (null == d || null == g) throw Error("Sign in to update preferences")
                  return p.CodexRequest.safePatch("/wham/settings/user", {
                    expectedIdentity: { accountId: d, userId: g },
                    requestBody: e,
                  })
                }),
                (l[0] = d),
                (l[1] = g),
                (l[2] = e),
                (l[3] = t))
              : ((e = l[2]), (t = l[3])),
            l[4] !== g ? ((n = () => ({ queryKey: f(g) })), (l[4] = g), (l[5] = n)) : (n = l[5]),
            l[6] !== v
              ? ((s = async (e, t, n) => {
                  null != n &&
                    ((void 0 !== t.custom_instructions ||
                      void 0 !== t.communication_guide ||
                      void 0 !== t.communication_guide_enabled) &&
                      (await (u.appServices?.clientCoordination ?? u.appServices?.queryCache)?.invalidateQueryCache({
                        queryKey: [...n.queryKey],
                      })),
                    v.setQueryData(n.queryKey, e))
                }),
                (l[6] = v),
                (l[7] = s))
              : (s = l[7]),
            l[8] !== e || l[9] !== t || l[10] !== n || l[11] !== s
              ? ((r = { mutationKey: e, mutationFn: t, onMutate: n, onSuccess: s }),
                (l[8] = e),
                (l[9] = t),
                (l[10] = n),
                (l[11] = s),
                (l[12] = r))
              : (r = l[12]),
            (0, o.n)(r)
          )
        },
        tz: function () {
          let e,
            t = (0, i.c)(3),
            { authMethod: n, isLoading: s } = (0, c.As)(),
            a = (0, m.Zj)("2826489636"),
            o = (0, m.Zj)((!!s || "chatgpt" === n || "chatgptAuthTokens" === n) && "1168186395"),
            l = (0, m.Zj)(!!o && "3816307151"),
            u = (0, r.Ul)(l ? d.L5 : null),
            g = l && (void 0 === u ? void 0 : (u?.cloudAccess ?? !0)),
            p = a || g
          return (
            t[0] !== g || t[1] !== p
              ? ((e = { cloudInstructionsEnabled: g, unifiedInstructions: p }), (t[0] = g), (t[1] = p), (t[2] = e))
              : (e = t[2]),
            e
          )
        },
        wJ: function () {
          let e,
            t,
            n = (0, i.c)(5),
            { userId: a } = (0, c.As)(),
            o = h(a)
          n[0] !== o ? ((e = f(o)), (n[0] = o), (n[1] = e)) : (e = n[1])
          let r = null != o
          return (
            n[2] !== e || n[3] !== r
              ? ((t = { queryKey: e, queryFn: v, enabled: r, retry: !1, staleTime: g.D.FIVE_MINUTES }),
                (n[2] = e),
                (n[3] = r),
                (n[4] = t))
              : (t = n[4]),
            (0, s.I)(t)
          )
        },
      },
    )
  },
  BSnr(e, t, n) {
    n.d(t, { X: () => o })
    var i = n("ABep"),
      s = n("QosV"),
      a = n("on57")
    let o = Object.assign(
      function (e) {
        let t,
          n,
          o = (0, s.c)(6),
          { children: r, id: l, className: d } = e
        return (
          o[0] !== d ? ((t = (0, a.A)("flex flex-col", d)), (o[0] = d), (o[1] = t)) : (t = o[1]),
          o[2] !== r || o[3] !== l || o[4] !== t
            ? ((n = (0, i.jsx)("section", { id: l, className: t, children: r })),
              (o[2] = r),
              (o[3] = l),
              (o[4] = t),
              (o[5] = n))
            : (n = o[5]),
          n
        )
      },
      {
        Header: function (e) {
          let t,
            n,
            o,
            r,
            l,
            d,
            c,
            u = (0, s.c)(32),
            {
              title: m,
              subtitle: g,
              actions: p,
              actionsAlignment: f,
              className: h,
              size: v,
              titleGap: b,
              spacing: x,
              subtitlePlacement: y,
              subtitleWrap: w,
            } = e,
            j = void 0 === v ? "default" : v,
            k = void 0 === x ? "default" : x,
            A = void 0 === y ? "below-title" : y,
            E = void 0 === w ? "balance" : w,
            M = null != m,
            S = null != g,
            C = null != p,
            _ = "compact" === j
          u[0] !== _ || u[1] !== g || u[2] !== A || u[3] !== E
            ? ((t = g
                ? (0, i.jsx)("div", {
                    className: (0, a.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === E ? "text-balance" : "text-wrap",
                      _ ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === A && "w-full",
                    ),
                    children: g,
                  })
                : null),
              (u[0] = _),
              (u[1] = g),
              (u[2] = A),
              (u[3] = E),
              (u[4] = t))
            : (t = u[4])
          let N = t
          if (!M && !S && !C) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, i.jsx)(i.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let I = "below-header" === A ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            F = S && "compact" === k && "pb-2",
            L = S && "compact" !== k && "pb-3"
          u[6] !== h || u[7] !== S || u[8] !== _ || u[9] !== k || u[10] !== I || u[11] !== F || u[12] !== L
            ? ((n = (0, a.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                I,
                F,
                L,
                !S && (0, a.A)("items-center pb-1.5", "compact" === k ? "min-h-8" : "min-h-toolbar"),
                S && _ && "items-center",
                S && !_ && "items-start",
                h,
              )),
              (u[6] = h),
              (u[7] = S),
              (u[8] = _),
              (u[9] = k),
              (u[10] = I),
              (u[11] = F),
              (u[12] = L),
              (u[13] = n))
            : (n = u[13])
          let z =
            "none" === (void 0 === b ? "default" : b)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== z ? ((o = (0, a.A)("flex min-w-0 flex-1 flex-col", z)), (u[14] = z), (u[15] = o)) : (o = u[15]),
            u[16] !== S || u[17] !== j || u[18] !== m
              ? ((r = m
                  ? (0, i.jsx)("div", {
                      className: (0, a.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === j && "text-sm leading-[18px]",
                        ("large" === j || ("default" === j && S)) && "text-lg",
                        ("base" === j || ("default" === j && !S)) && "text-base",
                      ),
                      children: m,
                    })
                  : null),
                (u[16] = S),
                (u[17] = j),
                (u[18] = m),
                (u[19] = r))
              : (r = u[19]))
          let T = "below-title" === A ? N : null
          ;(u[20] !== o || u[21] !== r || u[22] !== T
            ? ((l = (0, i.jsxs)("div", { className: o, children: [r, T] })),
              (u[20] = o),
              (u[21] = r),
              (u[22] = T),
              (u[23] = l))
            : (l = u[23]),
            u[24] !== p || u[25] !== f
              ? ((d = p
                  ? (0, i.jsx)("div", {
                      className: (0, a.A)("flex items-center gap-2", "end" === f && "self-end"),
                      children: p,
                    })
                  : null),
                (u[24] = p),
                (u[25] = f),
                (u[26] = d))
              : (d = u[26]))
          let V = "below-header" === A ? N : null
          return (
            u[27] !== n || u[28] !== l || u[29] !== d || u[30] !== V
              ? ((c = (0, i.jsxs)("div", { className: n, children: [l, d, V] })),
                (u[27] = n),
                (u[28] = l),
                (u[29] = d),
                (u[30] = V),
                (u[31] = c))
              : (c = u[31]),
            c
          )
        },
        Content: function (e) {
          let t,
            n,
            o = (0, s.c)(5),
            { children: r, className: l } = e
          return (
            o[0] !== l ? ((t = (0, a.A)("flex flex-col gap-1.5", l)), (o[0] = l), (o[1] = t)) : (t = o[1]),
            o[2] !== r || o[3] !== t
              ? ((n = (0, i.jsx)("div", { className: t, children: r })), (o[2] = r), (o[3] = t), (o[4] = n))
              : (n = o[4]),
            n
          )
        },
        Footer: function (e) {
          let t,
            n,
            o = (0, s.c)(6),
            { children: r, className: l, variant: d } = e,
            c =
              "action" === (void 0 === d ? "description" : d)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            o[0] !== l || o[1] !== c
              ? ((t = (0, a.A)("text-balance text-secondary", c, l)), (o[0] = l), (o[1] = c), (o[2] = t))
              : (t = o[2]),
            o[3] !== r || o[4] !== t
              ? ((n = (0, i.jsx)("div", { className: t, children: r })), (o[3] = r), (o[4] = t), (o[5] = n))
              : (n = o[5]),
            n
          )
        },
      },
    )
  },
  bZug(e, t, n) {
    n.d(
      t,
      {},
      {
        r: "flex flex-col [&>*:not(:last-child)]:relative [&>*:not(:last-child)]:after:pointer-events-none [&>*:not(:last-child)]:after:absolute [&>*:not(:last-child)]:after:inset-x-4 [&>*:not(:last-child)]:after:bottom-0 [&>*:not(:last-child)]:after:h-px [&>*:not(:last-child)]:after:bg-border [&>*:not(:last-child)]:after:content-['']",
        s: "flex flex-col [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-border",
      },
    )
  },
  AWNZ(e, t, n) {
    var i = n("ABep"),
      s = n("QosV"),
      a = n("on57"),
      o = n("zd8w"),
      r = n("HZfM"),
      l = n("GO7r")
    function d(e) {
      return e.preventDefault()
    }
    function c(e) {
      let t,
        n,
        o,
        r,
        l,
        d,
        c,
        u = (0, s.c)(24),
        {
          label: m,
          labelId: g,
          labelSizing: p,
          labelWeight: f,
          description: h,
          descriptionId: v,
          icon: b,
          variant: x,
          verticalAlignment: y,
        } = e,
        w = "start" === y ? "items-start" : "items-center",
        j = "grow" === (void 0 === p ? "grow" : p) && "flex-1"
      ;(u[0] !== w || u[1] !== j
        ? ((t = (0, a.A)("flex min-w-0 gap-3", w, j)), (u[0] = w), (u[1] = j), (u[2] = t))
        : (t = u[2]),
        u[3] !== b
          ? ((n = null != b ? (0, i.jsx)("span", { className: "flex shrink-0", children: b }) : null),
            (u[3] = b),
            (u[4] = n))
          : (n = u[4]))
      let k = "featured" === x && "text-base",
        A = "recommendation" === x && "text-[13px] leading-[18.571429px]",
        E = "featured" !== x && "recommendation" !== x && "text-sm",
        M = "nested" !== x && "medium" === (void 0 === f ? "medium" : f) && "font-medium"
      return (
        u[5] !== M || u[6] !== k || u[7] !== A || u[8] !== E
          ? ((o = (0, a.A)(
              "min-w-0 break-words text-default group-data-[density=compact]/settings:leading-4.5",
              k,
              A,
              E,
              M,
            )),
            (u[5] = M),
            (u[6] = k),
            (u[7] = A),
            (u[8] = E),
            (u[9] = o))
          : (o = u[9]),
        u[10] !== m || u[11] !== g || u[12] !== o
          ? ((r = (0, i.jsx)("div", { id: g, className: o, children: m })),
            (u[10] = m),
            (u[11] = g),
            (u[12] = o),
            (u[13] = r))
          : (r = u[13]),
        u[14] !== h || u[15] !== v
          ? ((l = h
              ? (0, i.jsx)("div", {
                  id: v,
                  className: "min-w-0 text-xs leading-4 text-wrap break-words text-secondary",
                  children: h,
                })
              : null),
            (u[14] = h),
            (u[15] = v),
            (u[16] = l))
          : (l = u[16]),
        u[17] !== r || u[18] !== l
          ? ((d = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-0.5", children: [r, l] })),
            (u[17] = r),
            (u[18] = l),
            (u[19] = d))
          : (d = u[19]),
        u[20] !== d || u[21] !== t || u[22] !== n
          ? ((c = (0, i.jsxs)("div", { className: t, children: [n, d] })),
            (u[20] = d),
            (u[21] = t),
            (u[22] = n),
            (u[23] = c))
          : (c = u[23]),
        c
      )
    }
    n.d(
      t,
      {},
      {
        $5: function (e) {
          let t,
            n,
            o,
            r,
            l,
            d,
            c = (0, s.c)(18),
            { children: u, compactLabelInset: m, label: g, valueAlignment: p, variant: f } = e,
            h = void 0 === m || m,
            v = void 0 === p ? "start" : p,
            b = void 0 === f ? "default" : f,
            x =
              "compact" === b
                ? "h-[1.875rem] w-full grid-cols-[auto_minmax(0,1fr)] gap-x-6 overflow-x-hidden rounded-lg text-base leading-[18px] text-default electron:opacity-75"
                : "min-h-14 gap-1 px-4 py-2 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-6"
          return (
            c[0] !== x ? ((t = (0, a.A)("grid items-center", x)), (c[0] = x), (c[1] = t)) : (t = c[1]),
            c[2] !== h || c[3] !== b
              ? ((n = (0, a.A)(
                  "min-w-0",
                  "compact" === b
                    ? (0, a.A)("flex items-center pe-2 text-start", h && "ps-1")
                    : "text-sm text-secondary",
                )),
                (c[2] = h),
                (c[3] = b),
                (c[4] = n))
              : (n = c[4]),
            c[5] !== g || c[6] !== n
              ? ((o = (0, i.jsx)("div", { className: n, children: g })), (c[5] = g), (c[6] = n), (c[7] = o))
              : (o = c[7]),
            c[8] !== v || c[9] !== b
              ? ((r = (0, a.A)(
                  "min-w-0",
                  "compact" === b
                    ? "flex items-center justify-end justify-self-stretch overflow-hidden"
                    : (0, a.A)("break-words whitespace-normal text-sm text-default", "end" === v && "text-end"),
                )),
                (c[8] = v),
                (c[9] = b),
                (c[10] = r))
              : (r = c[10]),
            c[11] !== u || c[12] !== r
              ? ((l = (0, i.jsx)("div", { className: r, children: u })), (c[11] = u), (c[12] = r), (c[13] = l))
              : (l = c[13]),
            c[14] !== t || c[15] !== o || c[16] !== l
              ? ((d = (0, i.jsxs)("div", { className: t, children: [o, l] })),
                (c[14] = t),
                (c[15] = o),
                (c[16] = l),
                (c[17] = d))
              : (d = c[17]),
            d
          )
        },
        ic: function (e) {
          let t,
            n,
            r,
            l,
            d = (0, s.c)(35),
            {
              label: u,
              labelSizing: m,
              labelWeight: g,
              layout: p,
              description: f,
              control: h,
              controlSizing: v,
              icon: b,
              className: x,
              id: y,
              inset: w,
              size: j,
              variant: k,
              verticalAlignment: A,
            } = e,
            E = void 0 === m ? "grow" : m,
            M = void 0 === g ? "medium" : g,
            S = void 0 === p ? "default" : p,
            C = void 0 === v ? "minimum" : v,
            _ = void 0 === w || w,
            N = void 0 === j ? "default" : j,
            I = void 0 === k ? "default" : k,
            F = void 0 === A ? "center" : A,
            L = (0, o.useId)(),
            z = null != u || null != f || null != b,
            T = "function" == typeof h,
            V = T && null != u ? `${L}-label` : void 0,
            D = T && f ? `${L}-description` : void 0,
            R = _ && ("split" !== S || "default" !== I) && "px-4",
            P = _ && "nested" === I && "group-data-[density=form]/settings:px-5",
            q =
              "stacked" === I &&
              "flex flex-col items-stretch gap-1 py-3 group-data-[density=compact]/settings:gap-0.5 group-data-[density=compact]/settings:py-2.5 group-data-[density=compact]/settings:first:pt-3.5 group-data-[density=compact]/settings:last:pb-4",
            W =
              "nested" === I &&
              "flex min-h-10 justify-between gap-3 py-2 max-sm:min-h-0 max-sm:flex-col max-sm:items-stretch group-data-[density=form]/settings:min-h-12 sm:group-data-[density=form]/settings:py-0",
            B = "stacked" !== I && ("start" === F ? "items-start" : "items-center"),
            $ = "split" === S && "default" === I && "grid grid-cols-1 gap-2 px-0 py-4 sm:grid-cols-3"
          return (
            d[0] !== x ||
            d[1] !== S ||
            d[2] !== N ||
            d[3] !== P ||
            d[4] !== q ||
            d[5] !== W ||
            d[6] !== B ||
            d[7] !== $ ||
            d[8] !== R ||
            d[9] !== I
              ? ((t = (0, a.A)(
                  "@container/settings-row",
                  R,
                  P,
                  q,
                  W,
                  B,
                  $,
                  "default" === S &&
                    ("default" === I || "featured" === I || "recommendation" === I) &&
                    (0, a.A)(
                      "flex justify-between",
                      "featured" === I && (0, a.A)("gap-6", "compact" === N ? "min-h-11 py-2" : "py-4"),
                      "featured" !== I && ("compact" === N ? "gap-4 py-2" : "gap-6 py-3"),
                    ),
                  "recommendation" === I && "dark:bg-primary-ghost-hover",
                  x,
                )),
                (d[0] = x),
                (d[1] = S),
                (d[2] = N),
                (d[3] = P),
                (d[4] = q),
                (d[5] = W),
                (d[6] = B),
                (d[7] = $),
                (d[8] = R),
                (d[9] = I),
                (d[10] = t))
              : (t = d[10]),
            d[11] !== f ||
            d[12] !== D ||
            d[13] !== z ||
            d[14] !== b ||
            d[15] !== u ||
            d[16] !== V ||
            d[17] !== E ||
            d[18] !== M ||
            d[19] !== I ||
            d[20] !== F
              ? ((n = z
                  ? (0, i.jsx)(c, {
                      label: u,
                      labelId: V,
                      labelSizing: E,
                      labelWeight: M,
                      description: f,
                      descriptionId: D,
                      icon: b,
                      variant: I,
                      verticalAlignment: F,
                    })
                  : null),
                (d[11] = f),
                (d[12] = D),
                (d[13] = z),
                (d[14] = b),
                (d[15] = u),
                (d[16] = V),
                (d[17] = E),
                (d[18] = M),
                (d[19] = I),
                (d[20] = F),
                (d[21] = n))
              : (n = d[21]),
            d[22] !== h || d[23] !== C || d[24] !== D || d[25] !== T || d[26] !== V || d[27] !== S || d[28] !== I
              ? ((r =
                  null != h && !1 !== h
                    ? (0, i.jsx)("div", {
                        className: (0, a.A)(
                          "stacked" === I && "w-full",
                          "nested" === I && "flex min-w-0 flex-1 items-center justify-end max-sm:justify-stretch",
                          "split" === S &&
                            "default" === I &&
                            (0, a.A)(
                              "flex min-w-0 max-w-full items-center justify-end gap-2",
                              "sm:col-span-2",
                              "grow" === C && "w-full",
                            ),
                          "default" === S &&
                            ("default" === I || "featured" === I || "recommendation" === I) &&
                            (0, a.A)(
                              "flex max-w-full items-center justify-end gap-2",
                              "grow" === C ? "min-w-0 flex-1" : "shrink-0",
                              "minimum" === C && "min-w-[min(--spacing(40),40cqw)] empty:min-w-0",
                            ),
                        ),
                        children: T ? h({ "aria-labelledby": V, "aria-describedby": D }) : h,
                      })
                    : null),
                (d[22] = h),
                (d[23] = C),
                (d[24] = D),
                (d[25] = T),
                (d[26] = V),
                (d[27] = S),
                (d[28] = I),
                (d[29] = r))
              : (r = d[29]),
            d[30] !== y || d[31] !== t || d[32] !== n || d[33] !== r
              ? ((l = (0, i.jsxs)("div", { id: y, className: t, children: [n, r] })),
                (d[30] = y),
                (d[31] = t),
                (d[32] = n),
                (d[33] = r),
                (d[34] = l))
              : (l = d[34]),
            l
          )
        },
        jj: function (e) {
          let t,
            n = (0, s.c)(2),
            { children: a } = e
          return (
            n[0] !== a
              ? ((t = (0, i.jsx)("span", { className: "text-xs text-secondary", children: a })), (n[0] = a), (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        kG: function (e) {
          let t,
            n,
            o,
            l,
            u,
            m,
            g,
            p,
            f,
            h,
            v,
            b,
            x,
            y,
            w,
            j,
            k,
            A,
            E,
            M,
            S,
            C,
            _,
            N = (0, s.c)(54)
          N[0] !== e
            ? (({
                actions: t,
                actionsPlacement: v,
                ariaControls: n,
                ariaExpanded: o,
                ariaLabel: l,
                className: u,
                description: m,
                disabled: g,
                edgeRounding: b,
                icon: p,
                label: h,
                size: x,
                trailing: w,
                variant: y,
                ...f
              } = e),
              (N[0] = e),
              (N[1] = t),
              (N[2] = n),
              (N[3] = o),
              (N[4] = l),
              (N[5] = u),
              (N[6] = m),
              (N[7] = g),
              (N[8] = p),
              (N[9] = f),
              (N[10] = h),
              (N[11] = v),
              (N[12] = b),
              (N[13] = x),
              (N[14] = y),
              (N[15] = w))
            : ((t = N[1]),
              (n = N[2]),
              (o = N[3]),
              (l = N[4]),
              (u = N[5]),
              (m = N[6]),
              (g = N[7]),
              (p = N[8]),
              (f = N[9]),
              (h = N[10]),
              (v = N[11]),
              (b = N[12]),
              (x = N[13]),
              (y = N[14]),
              (w = N[15]))
          let I = void 0 === b ? "row" : b,
            F = void 0 === x ? "default" : x,
            L = void 0 === y ? "default" : y,
            z = "before-trailing" === (void 0 === v ? "end" : v) && !g && null != t && null != w,
            T = z ? "col-span-full row-start-1 grid grid-cols-subgrid" : "flex"
          N[16] !== u || N[17] !== z || N[18] !== F || N[19] !== T || N[20] !== L
            ? ((j = (0, a.A)(
                "min-w-0 flex-1 cursor-interaction items-center rounded-[inherit] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring disabled:cursor-default disabled:opacity-60",
                T,
                "empty" === L
                  ? "flex-col justify-center gap-4 px-6 py-10 text-center text-base text-tertiary select-none"
                  : (0, a.A)(
                      "px-4 text-start",
                      "nested" === L && "min-h-10 py-0.5",
                      "nested" !== L && ("large" === F ? "py-4" : "py-3"),
                      z && "gap-2",
                      !z && ("nested" === L ? "gap-3" : "gap-6"),
                    ),
                u,
              )),
              (N[16] = u),
              (N[17] = z),
              (N[18] = F),
              (N[19] = T),
              (N[20] = L),
              (N[21] = j))
            : (j = N[21])
          let V = j
          ;(N[22] !== m || N[23] !== p || N[24] !== h || N[25] !== L
            ? ((k =
                "empty" === L
                  ? (0, i.jsxs)(i.Fragment, { children: [p, h] })
                  : (0, i.jsx)(c, { label: h, description: m, icon: p, variant: L, verticalAlignment: "center" })),
              (N[22] = m),
              (N[23] = p),
              (N[24] = h),
              (N[25] = L),
              (N[26] = k))
            : (k = N[26]),
            N[27] !== w
              ? ((A =
                  null != w
                    ? (0, i.jsx)("div", { className: "col-start-3 flex shrink-0 items-center gap-2", children: w })
                    : null),
                (N[27] = w),
                (N[28] = A))
              : (A = N[28]),
            N[29] !== k || N[30] !== A
              ? ((E = (0, i.jsxs)(i.Fragment, { children: [k, A] })), (N[29] = k), (N[30] = A), (N[31] = E))
              : (E = N[31]))
          let D = E,
            R = z ? "grid grid-cols-[minmax(0,1fr)_auto_auto] gap-x-2" : "flex",
            P = "row" === I && "first:rounded-t-2xl last:rounded-b-2xl",
            q = "recommendation" === L && "dark:bg-primary-ghost-hover",
            W = !g && "hover:bg-primary-ghost-hover focus-within:bg-primary-ghost-hover",
            B =
              !g &&
              "recommendation" === L &&
              "dark:hover:bg-background-secondary-soft-alpha dark:focus-within:bg-background-secondary-soft-alpha"
          return (
            N[32] !== R || N[33] !== P || N[34] !== q || N[35] !== W || N[36] !== B
              ? ((M = (0, a.A)("group w-full items-center", R, P, q, W, B)),
                (N[32] = R),
                (N[33] = P),
                (N[34] = q),
                (N[35] = W),
                (N[36] = B),
                (N[37] = M))
              : (M = N[37]),
            N[38] !== n || N[39] !== o || N[40] !== l || N[41] !== D || N[42] !== g || N[43] !== f || N[44] !== V
              ? ((S =
                  null != f.to
                    ? (0, i.jsx)(r.N_, {
                        ...f,
                        className: V,
                        "aria-controls": n,
                        "aria-expanded": o,
                        "aria-label": l,
                        "aria-disabled": g || void 0,
                        tabIndex: g ? -1 : void 0,
                        onClick: g ? d : f.onClick,
                        children: D,
                      })
                    : (0, i.jsx)("button", {
                        ...f,
                        className: V,
                        "aria-controls": n,
                        "aria-expanded": o,
                        "aria-label": l,
                        disabled: g,
                        type: "button",
                        children: D,
                      })),
                (N[38] = n),
                (N[39] = o),
                (N[40] = l),
                (N[41] = D),
                (N[42] = g),
                (N[43] = f),
                (N[44] = V),
                (N[45] = S))
              : (S = N[45]),
            N[46] !== t || N[47] !== g || N[48] !== z
              ? ((C =
                  g || null == t
                    ? null
                    : (0, i.jsx)("div", {
                        className: (0, a.A)(
                          "flex shrink-0 items-center gap-1",
                          z ? "relative col-start-2 row-start-1" : "pe-4",
                        ),
                        children: t,
                      })),
                (N[46] = t),
                (N[47] = g),
                (N[48] = z),
                (N[49] = C))
              : (C = N[49]),
            N[50] !== M || N[51] !== S || N[52] !== C
              ? ((_ = (0, i.jsxs)("div", { className: M, children: [S, C] })),
                (N[50] = M),
                (N[51] = S),
                (N[52] = C),
                (N[53] = _))
              : (_ = N[53]),
            _
          )
        },
        kf: function (e) {
          let t,
            n = (0, s.c)(2),
            { children: a } = e
          return (
            n[0] !== a
              ? ((t = (0, i.jsx)("span", { className: "text-tertiary", children: a })), (n[0] = a), (n[1] = t))
              : (t = n[1]),
            t
          )
        },
        lu: function (e) {
          let t,
            n,
            o,
            r,
            d,
            c,
            u,
            m,
            g,
            p,
            f = (0, s.c)(43),
            {
              id: h,
              ariaLabel: v,
              autoFocus: b,
              checked: x,
              description: y,
              highlightSelected: w,
              indicator: j,
              label: k,
              name: A,
              onChange: E,
              onClick: M,
              value: S,
              variant: C,
            } = e,
            _ = void 0 === w || w,
            N = void 0 === j ? "radio" : j,
            I = void 0 === C ? "default" : C
          ;(f[0] !== x || f[1] !== y || f[2] !== _ || f[3] !== N || f[4] !== I
            ? ((t = (0, a.A)(
                "relative flex has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-[-2px] has-[:focus-visible]:outline-ring",
                "default" === I &&
                  (0, a.A)(
                    "gap-3 px-4 py-3 hover:bg-primary-ghost-hover",
                    null != y ? "min-h-16 items-start" : "items-center",
                  ),
                "default" === I && x && _ && "radio" === N && "bg-primary-soft-alpha",
                "form" === I && "items-center gap-4 px-4 py-4 hover:bg-primary-ghost-hover",
                "inline" === I && "items-center gap-2",
                "checkmark" === N && "after:ms-7",
              )),
              (f[0] = x),
              (f[1] = y),
              (f[2] = _),
              (f[3] = N),
              (f[4] = I),
              (f[5] = t))
            : (t = f[5]),
            f[6] !== v || f[7] !== h
              ? ((n = (0, i.jsx)("label", {
                  className: "absolute inset-0 cursor-interaction",
                  "aria-label": v,
                  htmlFor: h,
                })),
                (f[6] = v),
                (f[7] = h),
                (f[8] = n))
              : (n = f[8]),
            f[9] !== N || f[10] !== I
              ? ((o = (0, a.A)(
                  "z-10 cursor-interaction",
                  "checkmark" === N
                    ? "absolute inset-0 size-full opacity-0"
                    : (0, a.A)(
                        "relative shrink-0 appearance-auto accent-current",
                        "default" === I ? "mt-1 size-4" : "size-5",
                      ),
                )),
                (f[9] = N),
                (f[10] = I),
                (f[11] = o))
              : (o = f[11]))
          let F = null != y ? `${h}-description` : void 0
          ;(f[12] !== v ||
          f[13] !== b ||
          f[14] !== x ||
          f[15] !== h ||
          f[16] !== A ||
          f[17] !== E ||
          f[18] !== M ||
          f[19] !== o ||
          f[20] !== F ||
          f[21] !== S
            ? ((r = (0, i.jsx)("input", {
                id: h,
                className: o,
                "aria-label": v,
                "aria-describedby": F,
                autoFocus: b,
                type: "radio",
                name: A,
                value: S,
                checked: x,
                onChange: E,
                onClick: M,
              })),
              (f[12] = v),
              (f[13] = b),
              (f[14] = x),
              (f[15] = h),
              (f[16] = A),
              (f[17] = E),
              (f[18] = M),
              (f[19] = o),
              (f[20] = F),
              (f[21] = S),
              (f[22] = r))
            : (r = f[22]),
            f[23] !== x || f[24] !== N
              ? ((d = "checkmark" === N ? (0, i.jsx)(l.ALZ, { className: (0, a.A)(!x && "invisible") }) : null),
                (f[23] = x),
                (f[24] = N),
                (f[25] = d))
              : (d = f[25]))
          let L = "default" === I ? "text-sm font-medium" : "text-base"
          return (
            f[26] !== L ? ((c = (0, a.A)("text-default", L)), (f[26] = L), (f[27] = c)) : (c = f[27]),
            f[28] !== k || f[29] !== c
              ? ((u = (0, i.jsx)("span", { className: c, children: k })), (f[28] = k), (f[29] = c), (f[30] = u))
              : (u = f[30]),
            f[31] !== y || f[32] !== h
              ? ((m =
                  null != y
                    ? (0, i.jsx)("span", {
                        id: `${h}-description`,
                        className: "text-sm leading-5 text-secondary",
                        children: y,
                      })
                    : null),
                (f[31] = y),
                (f[32] = h),
                (f[33] = m))
              : (m = f[33]),
            f[34] !== u || f[35] !== m
              ? ((g = (0, i.jsxs)("span", {
                  className: "pointer-events-none relative flex min-w-0 flex-col gap-0.5",
                  children: [u, m],
                })),
                (f[34] = u),
                (f[35] = m),
                (f[36] = g))
              : (g = f[36]),
            f[37] !== g || f[38] !== t || f[39] !== n || f[40] !== r || f[41] !== d
              ? ((p = (0, i.jsxs)("div", { className: t, children: [n, r, d, g] })),
                (f[37] = g),
                (f[38] = t),
                (f[39] = n),
                (f[40] = r),
                (f[41] = d),
                (f[42] = p))
              : (p = f[42]),
            p
          )
        },
      },
    )
  },
  ZEx5(e, t, n) {
    n.d(t, { t: () => r })
    var i = n("ABep"),
      s = n("QosV"),
      a = n("on57"),
      o = n("bZug")
    function r(e) {
      let t,
        n,
        r,
        l = (0, s.c)(23),
        { children: d, className: c, contentOverflow: u, dividers: m, variant: g, decoration: p } = e,
        f = void 0 === g ? "default" : g,
        h = "flat" === f || "rows" === f ? o.s : o.r,
        v = void 0 === m || m ? h : "flex flex-col",
        b = "recommendation" === f && "rounded-[20px]",
        x = "recommendation" !== f && "flat" !== f && "rows" !== f && "outlinedLarge" !== f && "rounded-2xl",
        y = "outlinedLarge" === f && "rounded-[30px] border border-default bg-transparent",
        w = "daybreak" === p && "daybreak-VsXdEH",
        j = "visible" === (void 0 === u ? "hidden" : u) ? "overflow-visible" : "overflow-hidden",
        k =
          "default" === f &&
          "border border-default group-data-[density=compact]/settings:border-0 group-data-[density=compact]/settings:ring-1 group-data-[density=compact]/settings:ring-inset group-data-[density=compact]/settings:ring-border",
        A = "metered" === f && "ring-1 ring-inset ring-border-subtle",
        E = "secondary" === f && "bg-surface-secondary/92",
        M = "muted" === f && "bg-(--color-background-primary-soft-alpha)/50 dark:bg-primary-soft-alpha",
        S =
          "form" === f &&
          "border border-subtle bg-surface dark:bg-surface-secondary/92 group-data-[density=form]/settings:border-default group-data-[density=form]/settings:bg-transparent dark:group-data-[density=form]/settings:bg-transparent group-data-[density=form]/settings:[&>*:not(:last-child)]:after:inset-x-5 group-data-[density=form]/settings:[&>*:not(:last-child)]:after:h-px group-data-[density=form]/settings:[&>*:not(:last-child)]:after:bg-border-subtle",
        C = "outlined" === f && "border border-subtle bg-transparent",
        _ =
          "flat" === f &&
          "relative bg-transparent before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-border before:content-[''] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-border after:content-['']",
        N = "input" === f && "border border-primary-outline bg-primary-soft",
        I = "recommendation" === f && "border border-default bg-secondary-soft dark:bg-transparent"
      return (
        l[0] !== c ||
        l[1] !== k ||
        l[2] !== A ||
        l[3] !== E ||
        l[4] !== M ||
        l[5] !== S ||
        l[6] !== C ||
        l[7] !== _ ||
        l[8] !== N ||
        l[9] !== I ||
        l[10] !== v ||
        l[11] !== b ||
        l[12] !== x ||
        l[13] !== y ||
        l[14] !== w ||
        l[15] !== j
          ? ((t = (0, a.A)(v, b, x, y, w, j, k, A, E, M, S, C, _, N, I, c)),
            (l[0] = c),
            (l[1] = k),
            (l[2] = A),
            (l[3] = E),
            (l[4] = M),
            (l[5] = S),
            (l[6] = C),
            (l[7] = _),
            (l[8] = N),
            (l[9] = I),
            (l[10] = v),
            (l[11] = b),
            (l[12] = x),
            (l[13] = y),
            (l[14] = w),
            (l[15] = j),
            (l[16] = t))
          : (t = l[16]),
        l[17] !== f
          ? ((n =
              "default" === f || "metered" === f
                ? { backgroundColor: "var(--color-background-panel, var(--color-background-primary-soft-alpha))" }
                : void 0),
            (l[17] = f),
            (l[18] = n))
          : (n = l[18]),
        l[19] !== d || l[20] !== t || l[21] !== n
          ? ((r = (0, i.jsx)("div", { className: t, style: n, children: d })),
            (l[19] = d),
            (l[20] = t),
            (l[21] = n),
            (l[22] = r))
          : (r = l[22]),
        r
      )
    }
  },
  qUPv(e, t, n) {
    var i = n("ABep"),
      s = n("QosV"),
      a = n("oyxz"),
      o = n("ygO2"),
      r = n("JNtf"),
      l = n("mUDD")
    n.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            n,
            d,
            c,
            u,
            m,
            g,
            p,
            f,
            h,
            v = (0, s.c)(20),
            { pendingNavigation: b, onClearPendingNavigation: x } = e,
            y = null != b
          return (
            v[0] !== x
              ? ((t = (e) => {
                  e || x()
                }),
                (v[0] = x),
                (v[1] = t))
              : (t = v[1]),
            v[2] !== x || v[3] !== b
              ? ((n = (e) => {
                  ;(e.preventDefault(), x(), b?.())
                }),
                (v[2] = x),
                (v[3] = b),
                (v[4] = n))
              : (n = v[4]),
            v[5] === Symbol.for("react.memo_cache_sentinel")
              ? ((d = (0, i.jsx)(r.L3, {
                  children: (0, i.jsx)(a.A, {
                    id: "settings.unsavedChanges.discardTitle",
                    defaultMessage: "Discard changes?",
                    description: "Title for the confirmation dialog shown before leaving Settings with unsaved changes",
                  }),
                })),
                (v[5] = d))
              : (d = v[5]),
            v[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((c = (0, i.jsx)(l.OO, {
                  children: (0, i.jsx)(l.c7, {
                    title: d,
                    subtitle: (0, i.jsx)(r.rr, {
                      children: (0, i.jsx)(a.A, {
                        id: "settings.unsavedChanges.discardDescription",
                        defaultMessage: "You have unsaved changes. If you leave now, your changes will be lost.",
                        description:
                          "Description for the confirmation dialog shown before leaving Settings with unsaved changes",
                      }),
                    }),
                  }),
                })),
                (v[6] = c))
              : (c = v[6]),
            v[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = (0, i.jsx)(a.A, {
                  id: "settings.unsavedChanges.keepEditing",
                  defaultMessage: "Keep editing",
                  description: "Button label for returning to Settings instead of discarding unsaved changes",
                })),
                (v[7] = u))
              : (u = v[7]),
            v[8] !== x
              ? ((m = (0, i.jsx)(o.$, { color: "secondary", type: "button", onClick: x, children: u })),
                (v[8] = x),
                (v[9] = m))
              : (m = v[9]),
            v[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, i.jsx)(o.$, {
                  color: "danger",
                  type: "submit",
                  children: (0, i.jsx)(a.A, {
                    id: "settings.unsavedChanges.discard",
                    defaultMessage: "Discard changes",
                    description: "Button label for discarding unsaved Settings changes",
                  }),
                })),
                (v[10] = g))
              : (g = v[10]),
            v[11] !== m
              ? ((p = (0, i.jsx)(l.OO, { children: (0, i.jsxs)(l.Es, { children: [m, g] }) })),
                (v[11] = m),
                (v[12] = p))
              : (p = v[12]),
            v[13] !== n || v[14] !== p
              ? ((f = (0, i.jsxs)(l.R4, { as: "form", onSubmit: n, children: [c, p] })),
                (v[13] = n),
                (v[14] = p),
                (v[15] = f))
              : (f = v[15]),
            v[16] !== y || v[17] !== f || v[18] !== t
              ? ((h = (0, i.jsx)(r.lG, {
                  open: y,
                  showDialogClose: !1,
                  size: "compact",
                  onOpenChange: t,
                  children: f,
                })),
                (v[16] = y),
                (v[17] = f),
                (v[18] = t),
                (v[19] = h))
              : (h = v[19]),
            h
          )
        },
      },
    )
  },
}
//# sourceMappingURL=710096.f53d563994.js.map
