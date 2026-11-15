export const __rspack_esm_ids = [967975]
export const __webpack_modules__ = {
  vglv(e, n, s) {
    s.d(n, { WorkspaceAgentPublicationReview: () => er })
    var t = s("ABep"),
      i = s("QosV"),
      a = s("hwkA"),
      l = s("T0Rc"),
      o = s("zTeN"),
      c = s("zd8w"),
      r = s("Wf1j"),
      d = s("oyxz"),
      u = s("SPnB"),
      p = s("zKCW"),
      h = s("Sm6l"),
      m = s("djbx"),
      g = s("JNtf"),
      f = s("mUDD"),
      b = s("Bbed"),
      x = s("ibLK"),
      w = s("rvFo"),
      k = s("R4Ep"),
      y = s("QxT8"),
      A = s("on57"),
      j = s("DBCl"),
      v = s("u2dk"),
      C = s("BQbE"),
      _ = s("FvYa"),
      N = s("bVeK"),
      M = s("ZQu1"),
      I = s("xm9v"),
      S = s("AWNZ"),
      R = s("ZEx5"),
      D = s("a6Zv"),
      z = s("xm0K"),
      O = s("hjFz"),
      F = s("FWPX"),
      T = s("mmGY"),
      W = s("au5W")
    function q(e) {
      let n,
        s,
        a,
        l,
        o,
        c = (0, i.c)(15),
        { changes: r, compareButtonRef: u, onCompareInstructions: p, onUndo: m, pending: g } = e,
        f = void 0 !== g && g
      ;(c[0] !== r ? ((n = r.flatMap(L)), (c[0] = r), (c[1] = n)) : (n = c[1]),
        c[2] !== n ? ((s = { appIds: n, hostId: j.iwv }), (c[2] = n), (c[3] = s)) : (s = c[3]))
      let { data: b } = (0, C.KA)(s)
      c[4] !== b ? ((a = new Map(b?.map(U))), (c[4] = b), (c[5] = a)) : (a = c[5])
      let x = a
      return (
        c[6] !== x || c[7] !== r || c[8] !== u || c[9] !== p || c[10] !== m || c[11] !== f
          ? ((l = r.map((e) => {
              let n = "connector" === e.type ? x.get(e.connectorId ?? "") : void 0
              return (0, t.jsx)(
                S.ic,
                {
                  size: "compact",
                  controlSizing: "content",
                  labelWeight: "normal",
                  className: "min-h-10",
                  icon:
                    "connector" === e.type
                      ? (0, t.jsx)(E, { app: n, connectorId: e.connectorId })
                      : (0, t.jsx)(P, { change: e }),
                  label: "connector" === e.type ? (n?.name ?? e.label) : (0, t.jsx)($, { change: e }),
                  control: (0, t.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      "instructions" !== e.type
                        ? (0, t.jsx)("span", {
                            className: (0, A.A)("text-sm", {
                              "text-success": "added" === e.change,
                              "text-danger": "removed" === e.change,
                              "text-secondary": "modified" === e.change,
                            }),
                            children: (0, t.jsx)(d.A, {
                              id: "workspaceAgents.builder.publication.changeKind",
                              defaultMessage: "{kind, select, added {Added} removed {Removed} other {Changed}}",
                              description:
                                "Whether an item in the Workspace Agent publication review was added, removed, or changed",
                              values: { kind: e.change },
                            }),
                          })
                        : null,
                      "instructions" === e.type
                        ? (0, t.jsx)(h.$, {
                            ref: u,
                            "aria-haspopup": "dialog",
                            size: "cardAction",
                            color: "secondary",
                            onClick: p,
                            children: (0, t.jsx)(d.A, {
                              id: "workspaceAgents.builder.publication.compareInstructions",
                              defaultMessage: "Compare instructions",
                              description:
                                "Opens a comparison of the published and draft instructions for a Workspace Agent",
                            }),
                          })
                        : null,
                      null != m && (0, W.r)(e.type)
                        ? (0, t.jsxs)(h.$, {
                            size: "icon",
                            color: "ghostSecondary",
                            disabled: f,
                            onClick: () => m(e),
                            children: [
                              (0, t.jsx)(N.O8y, { "aria-hidden": "true" }),
                              (0, t.jsx)("span", {
                                className: "sr-only",
                                children: (0, t.jsx)(d.A, {
                                  id: "workspaceAgents.publication.undo",
                                  defaultMessage: "Undo",
                                  description: "Revert this local draft section to its published value",
                                }),
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                },
                `${e.type}:${"id" in e ? e.id : ""}`,
              )
            })),
            (c[6] = x),
            (c[7] = r),
            (c[8] = u),
            (c[9] = p),
            (c[10] = m),
            (c[11] = f),
            (c[12] = l))
          : (l = c[12]),
        c[13] !== l
          ? ((o = (0, t.jsx)(R.t, { variant: "outlined", className: "shrink-0", children: l })),
            (c[13] = l),
            (c[14] = o))
          : (o = c[14]),
        o
      )
    }
    function U(e) {
      return [e.id, e]
    }
    function L(e) {
      return "connector" === e.type && null != e.connectorId ? [e.connectorId] : []
    }
    function E(e) {
      let n,
        s,
        a,
        l = (0, i.c)(8),
        { app: o, connectorId: c } = e,
        r = (0, D.Y)() ? (o?.iconUrlDark ?? o?.iconUrl) : (o?.iconUrl ?? o?.iconUrlDark),
        d = o?.iconUrl,
        u = o?.iconUrlDark
      ;(l[0] === Symbol.for("react.memo_cache_sentinel") ? ((n = (0, t.jsx)(N.wdY, {})), (l[0] = n)) : (n = l[0]),
        l[1] !== c || l[2] !== d || l[3] !== u
          ? ((s = (0, t.jsx)(_.R, {
              alt: "",
              logoUrl: d,
              logoDarkUrl: u,
              connectorId: c,
              knownAppId: c,
              loadRemote: !1,
              size: 20,
              fallback: n,
            })),
            (l[1] = c),
            (l[2] = d),
            (l[3] = u),
            (l[4] = s))
          : (s = l[4]))
      let p = s
      return (
        l[5] !== p || l[6] !== r
          ? ((a =
              r && null == (0, v.kk)(r)
                ? (0, t.jsx)(M.R, { alt: "", className: "size-5 rounded-sm", src: r, fallback: p }, r)
                : p),
            (l[5] = p),
            (l[6] = r),
            (l[7] = a))
          : (a = l[7]),
        a
      )
    }
    function P(e) {
      let n = (0, i.c)(11),
        { change: s } = e
      switch (s.type) {
        case "icon": {
          let e
          return (
            n[0] !== s.icon
              ? ((e = (0, t.jsx)(z.WorkspaceAgentGraphic, { icon: s.icon, size: 20 })), (n[0] = s.icon), (n[1] = e))
              : (e = n[1]),
            e
          )
        }
        case "skill":
        case "starters": {
          let e
          return (
            n[2] !== s.iconName
              ? ((e = (0, t.jsx)(O.v, { name: s.iconName })), (n[2] = s.iconName), (n[3] = e))
              : (e = n[3]),
            e
          )
        }
        case "files":
        case "memory": {
          let e
          return (
            n[4] !== s.type ? ((e = (0, t.jsx)(T.y, { kind: s.type })), (n[4] = s.type), (n[5] = e)) : (e = n[5]),
            e
          )
        }
        case "api": {
          let e
          return (
            n[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)("img", { alt: "", className: "size-5", src: F })), (n[6] = e))
              : (e = n[6]),
            e
          )
        }
        case "slack": {
          let e
          return (
            n[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(I.A, { className: "size-5" })), (n[7] = e))
              : (e = n[7]),
            e
          )
        }
        case "settings": {
          let e
          return (
            n[8] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, t.jsx)(N.IR, {})), (n[8] = e)) : (e = n[8]),
            e
          )
        }
        case "profile": {
          let e
          return (
            n[9] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, t.jsx)(N.CHX, {})), (n[9] = e)) : (e = n[9]),
            e
          )
        }
        case "instructions": {
          let e
          return (
            n[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, t.jsx)(N.rFX, {})), (n[10] = e))
              : (e = n[10]),
            e
          )
        }
      }
    }
    function $(e) {
      let n,
        s = (0, i.c)(4),
        { change: a } = e
      if ("label" in a) {
        let e
        return (
          s[0] !== a.label
            ? ((e = (0, t.jsx)("span", { children: a.label })), (s[0] = a.label), (s[1] = e))
            : (e = s[1]),
          e
        )
      }
      return (
        s[2] !== a.type
          ? ((n = (0, t.jsx)(d.A, {
              id: "workspaceAgents.builder.publication.changeLabel",
              defaultMessage:
                "{kind, select, profile {Name and description} settings {Model and tools} instructions {Instructions} files {Reference files} memory {Memory} starters {Conversation starters} icon {Character} api {API channel} other {Agent configuration}}",
              description: "Name of the changed configuration section in the Workspace Agent publication review",
              values: { kind: a.type },
            })),
            (s[2] = a.type),
            (s[3] = n))
          : (n = s[3]),
        n
      )
    }
    var G = s("OAko"),
      H = s("TjgH"),
      B = s("yFyI")
    function K(e) {
      let n,
        s,
        a = (0, i.c)(3),
        { connectorId: l, allowedTools: o } = e
      a[0] !== l ? ((n = { appIds: [l], hostId: j.iwv, includeTools: !0 }), (a[0] = l), (a[1] = n)) : (n = a[1])
      let { data: c, error: r } = (0, C.KA)(n),
        u = c?.find((e) => e.id === l)?.toolSummaries
      return null == u ||
        null != r ||
        0 === o.length ||
        o.some((e) => !u.some((n) => n.name === e && n.isEnabled && n.isReadOnly))
        ? null
        : (a[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, t.jsx)("span", {
                className: "text-secondary",
                children: (0, t.jsx)(d.A, {
                  id: "workspaceAgents.publication.consentReadOnly",
                  defaultMessage: "Read-only",
                  description: "Shared agent connection only has enabled actions that read data",
                }),
              })),
              (a[2] = s))
            : (s = a[2]),
          s)
    }
    function Y(e) {
      let n,
        s,
        a,
        l,
        o,
        c,
        u,
        p,
        h,
        m = (0, i.c)(27),
        { consent: g } = e,
        f = (0, r.A)(),
        { data: b } = (0, G.YL)()
      m[0] !== b?.name || m[1] !== f
        ? ((n =
            b?.name?.trim() ||
            f.formatMessage({
              id: "workspaceAgents.publication.unnamedWorkspace",
              defaultMessage: "Untitled Workspace",
              description: "Fallback name of the workspace that will receive shared agent access",
            })),
          (m[0] = b?.name),
          (m[1] = f),
          (m[2] = n))
        : (n = m[2])
      let x = n
      if (
        (m[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, t.jsx)("h3", {
              className: "sr-only",
              children: (0, t.jsx)(d.A, {
                id: "workspaceAgents.publication.consentConnections",
                defaultMessage: "Shared connections",
                description: "Heading above the app accounts that will be shared by publishing an agent",
              }),
            })),
            (m[3] = s))
          : (s = m[3]),
        m[4] !== g.connectors || m[5] !== g.newConnectorIds)
      ) {
        let e
        ;(m[7] !== g.newConnectorIds
          ? ((e = (e) =>
              (0, t.jsxs)(
                "li",
                {
                  className: "flex items-start gap-2 border-t border-subtle py-2 text-sm",
                  children: [
                    (0, t.jsx)(_.R, {
                      alt: "",
                      knownAppId: e.connectorId,
                      loadRemote: !1,
                      size: 20,
                      fallback: (0, t.jsx)(N.wdY, {}),
                    }),
                    (0, t.jsxs)("div", {
                      className: "flex min-w-0 flex-1 flex-wrap items-center gap-1.5",
                      children: [
                        (0, t.jsx)("span", { className: "min-w-0 font-medium break-words", children: e.label }),
                        null != e.connectorId
                          ? (0, t.jsx)(K, { connectorId: e.connectorId, allowedTools: e.allowedTools })
                          : null,
                        g.newConnectorIds.has(e.id) ? (0, t.jsx)(Z, {}) : null,
                      ],
                    }),
                    e.accountLabel
                      ? (0, t.jsx)("span", {
                          className: "ms-auto max-w-2/5 min-w-0 shrink-0 truncate text-end",
                          children: e.accountLabel,
                        })
                      : null,
                  ],
                },
                e.id,
              )),
            (m[7] = g.newConnectorIds),
            (m[8] = e))
          : (e = m[8]),
          (a = g.connectors.map(e)),
          (m[4] = g.connectors),
          (m[5] = g.newConnectorIds),
          (m[6] = a))
      } else a = m[6]
      if (
        (m[9] !== a
          ? ((l = (0, t.jsxs)("section", { children: [s, (0, t.jsx)("ul", { children: a })] })),
            (m[9] = a),
            (m[10] = l))
          : (l = m[10]),
        m[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, t.jsx)("h3", {
              className: "py-2.5 text-sm font-medium",
              children: (0, t.jsx)(d.A, {
                id: "workspaceAgents.publication.consentChannels",
                defaultMessage: "Shared channels",
                description: "Heading above workspace and Slack channels that can use the shared agent connections",
              }),
            })),
            (m[11] = o))
          : (o = m[11]),
        m[12] !== g.channels || m[13] !== g.newChannelIds)
      ) {
        let e
        ;(m[15] !== g.newChannelIds
          ? ((e = (e) =>
              (0, t.jsxs)(
                "li",
                {
                  className: "flex items-center gap-2 border-t border-subtle py-2 text-sm",
                  children: [
                    (0, t.jsx)(I.A, { className: "size-5 shrink-0", "aria-hidden": !0 }),
                    (0, t.jsx)("span", {
                      className: "min-w-0 break-words",
                      children: (0, t.jsx)(d.A, {
                        id: "workspaceAgents.publication.consentSlackChannel",
                        defaultMessage: "#{channelName}",
                        description: "Slack channel name in publication consent, prefixed with a hash",
                        values: { channelName: (0, B.IO)(e).name },
                      }),
                    }),
                    g.newChannelIds.has(e.deployment_id) ? (0, t.jsx)(Z, {}) : null,
                  ],
                },
                e.deployment_id,
              )),
            (m[15] = g.newChannelIds),
            (m[16] = e))
          : (e = m[16]),
          (c = g.channels.map(e)),
          (m[12] = g.channels),
          (m[13] = g.newChannelIds),
          (m[14] = c))
      } else c = m[14]
      return (
        m[17] !== g.workspaceInDirectory || m[18] !== g.workspaceShared || m[19] !== x
          ? ((u = g.workspaceShared
              ? (0, t.jsxs)("li", {
                  className: "flex items-center gap-2 border-t border-subtle py-2 text-sm",
                  children: [
                    (0, t.jsx)(N.DIB, { className: "shrink-0", "aria-hidden": !0 }),
                    (0, t.jsx)("span", {
                      className: "min-w-0 break-words",
                      children: g.workspaceInDirectory
                        ? (0, t.jsx)(d.A, {
                            id: "workspaceAgents.publication.consentWorkspaceDirectory",
                            defaultMessage: "Publish to {workspaceName} directory",
                            description: "The agent will be listed in this workspace's directory",
                            values: { workspaceName: x },
                          })
                        : (0, t.jsx)(d.A, {
                            id: "workspaceAgents.publication.consentWorkspaceLink",
                            defaultMessage: "Anyone at {workspaceName} with the link",
                            description: "The agent will be accessible to people in this workspace with its link",
                            values: { workspaceName: x },
                          }),
                    }),
                  ],
                })
              : null),
            (m[17] = g.workspaceInDirectory),
            (m[18] = g.workspaceShared),
            (m[19] = x),
            (m[20] = u))
          : (u = m[20]),
        m[21] !== c || m[22] !== u
          ? ((p = (0, t.jsxs)("section", { children: [o, (0, t.jsxs)("ul", { children: [c, u] })] })),
            (m[21] = c),
            (m[22] = u),
            (m[23] = p))
          : (p = m[23]),
        m[24] !== l || m[25] !== p
          ? ((h = (0, t.jsxs)(t.Fragment, { children: [l, p] })), (m[24] = l), (m[25] = p), (m[26] = h))
          : (h = m[26]),
        h
      )
    }
    function Z() {
      let e,
        n = (0, i.c)(1)
      return (
        n[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(H.E, {
              variant: "info",
              children: (0, t.jsx)(d.A, {
                id: "workspaceAgents.publication.newAccess",
                defaultMessage: "New",
                description: "Marks an app or channel newly shared by this version of the agent",
              }),
            })),
            (n[0] = e))
          : (e = n[0]),
        e
      )
    }
    var J = s("Ghh3"),
      Q = s("OWtl")
    let V = (0, o.vU)(Q.u, (e, { get: n }) => {
      let s = n(u.chatGptAuthenticatedAccountId$),
        t = n(u.o8)
      return {
        queryKey: ["workspace-agent", "publication-consent", s, t, e],
        enabled: null != s && null != t,
        queryFn: async ({ signal: n }) => {
          if (null == s || null == t) throw Error("Sign in before reviewing shared connections")
          return {
            permissions: await J.Request.safeGet("/hermes/agent/{agent_id}/permissions", {
              parameters: { path: { agent_id: e } },
              expectedIdentity: { accountId: s, userId: t },
              signal: n,
            }),
          }
        },
        retry: !1,
        staleTime: 0,
      }
    })
    function X(e) {
      return "LINK" === e.auth.type && "NONE" !== e.auth.link.auth_type
    }
    function ee(e) {
      return "CONNECTOR_ID" === e.connector_identifier.type
        ? e.connector_identifier.connector_id
        : e.connector_identifier.server_url
    }
    function en(e, n) {
      let s = (n.tools.connectors ?? []).filter(X)
      if ("hermes_admin" !== e.agent.viewer_capability || 0 === s.length) return !1
      let t = e.latest_published_version?.config,
        i = new Set((t?.tools.connectors ?? []).filter(X).map(ee))
      return (
        s.some((e) => !i.has(ee(e))) ||
        (n.slackDeployments ?? []).some(
          (e) =>
            !0 !== e.pending_deletion &&
            !1 !== e.slack_trigger.enabled &&
            !t?.deployments?.slack?.some((n) => n.deployment_id === e.deployment_id),
        )
      )
    }
    var es = s("GCmi")
    let et = (0, s("iJY0").a)({
      name: "triangle-exclamation-mark-fill-regular-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 1.334961, y: 2.396973, width: 17.33075, height: 15.070068 },
        visualBounds: { x: 1.334961, y: 2.396973, width: 17.33075, height: 15.070068 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.334961, y: 2.396973, width: 17.33075, height: 15.070068 },
        center: { x: 10.000336, y: 9.932007 },
        insets: { top: 2.396973, right: 1.334289, bottom: 2.532959, left: 1.334961 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.000336, y: 9.932007 },
          foreground: { x: 10.000336, y: 9.932007 },
        },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M7.89494 3.5774C8.85676 2.0035 11.1431 2.0035 12.1049 3.5774L18.3002 13.7141C19.3044 15.3577 18.1209 17.467 16.1947 17.467H3.80509C1.87901 17.4669 0.696481 15.3577 1.7006 13.7141L7.89494 3.5774ZM10.0004 12.345C9.31546 12.345 8.7602 12.9003 8.76017 13.5852C8.76036 14.27 9.31555 14.8254 10.0004 14.8254C10.6851 14.8252 11.2405 14.2699 11.2406 13.5852C11.2406 12.9004 10.6852 12.3452 10.0004 12.345ZM10.0004 7.04224C9.51716 7.04224 9.12541 7.43399 9.12541 7.91724V10.6252C9.12559 11.1083 9.51727 11.5002 10.0004 11.5002C10.4834 11.5 10.8752 11.1082 10.8754 10.6252V7.91724C10.8754 7.43413 10.4835 7.04246 10.0004 7.04224Z" fill="currentColor"/>',
    })
    var ei = s("HOLv")
    function ea(e) {
      let n,
        s,
        a,
        l,
        o,
        r,
        u,
        m,
        b,
        x,
        w,
        k,
        y = (0, i.c)(31),
        { issues: A, isPublished: j, intent: v, onClose: C, onFix: _ } = e,
        [N, M] = (0, c.useState)(!1),
        [I, S] = (0, c.useState)(!1)
      if ("preview" === v) {
        let e
        ;(y[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(d.A, {
              id: "workspaceAgents.publication.reviewMissingPreview",
              defaultMessage: "Review these issues before previewing:",
              description: "Heading for required fields missing before previewing an agent",
            })),
            (y[0] = e))
          : (e = y[0]),
          (n = e))
      } else if (j) {
        let e
        ;(y[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(d.A, {
              id: "workspaceAgents.publication.reviewMissingUpdate",
              defaultMessage: "Review these issues before updating:",
              description: "Heading for required fields missing before an agent update",
            })),
            (y[1] = e))
          : (e = y[1]),
          (n = e))
      } else {
        let e
        ;(y[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(d.A, {
              id: "workspaceAgents.publication.reviewMissingCreate",
              defaultMessage: "Review these issues before creating:",
              description: "Heading for required fields missing before an agent's first publication",
            })),
            (y[2] = e))
          : (e = y[2]),
          (n = e))
      }
      return (
        y[3] !== C ? ((s = (e) => !e && C()), (y[3] = C), (y[4] = s)) : (s = y[4]),
        y[5] !== n
          ? ((a = (0, t.jsx)(g.L3, { className: "text-base font-medium", children: n })), (y[5] = n), (y[6] = a))
          : (a = y[6]),
        y[7] !== A ? ((l = A.map(el)), (y[7] = A), (y[8] = l)) : (l = y[8]),
        y[9] !== l ? ((o = (0, t.jsx)("ul", { children: l })), (y[9] = l), (y[10] = o)) : (o = y[10]),
        y[11] !== I
          ? ((r = I
              ? (0, t.jsx)(p.l, {
                  type: "error",
                  content: (0, t.jsx)(d.A, {
                    id: "workspaceAgents.publication.fixMissingFailed",
                    defaultMessage: "Couldn't send to chat. Try again.",
                    description: "Error when the requested publication help could not be sent to the assistant",
                  }),
                })
              : null),
            (y[11] = I),
            (y[12] = r))
          : (r = y[12]),
        y[13] !== A || y[14] !== _ || y[15] !== N
          ? ((u =
              null != _
                ? (0, t.jsx)(h.$, {
                    className: "w-full justify-center",
                    color: "primary",
                    size: "catalogAction",
                    radius: "full",
                    disabled: N,
                    loading: N,
                    onClick: () => {
                      ;(M(!0),
                        S(!1),
                        _(A)
                          .catch(() => S(!0))
                          .finally(() => M(!1)))
                    },
                    children: (0, t.jsx)(d.A, {
                      id: "workspaceAgents.publication.fixMissing",
                      defaultMessage: "Fix for me",
                      description: "Ask the builder assistant to complete required fields",
                    }),
                  })
                : null),
            (y[13] = A),
            (y[14] = _),
            (y[15] = N),
            (y[16] = u))
          : (u = y[16]),
        y[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, t.jsx)(d.A, {
              id: "workspaceAgents.publication.closeMissing",
              defaultMessage: "Close",
              description: "Close the missing-fields review without publishing",
            })),
            (y[17] = m))
          : (m = y[17]),
        y[18] !== C
          ? ((b = (0, t.jsx)(h.$, {
              className: "w-full justify-center",
              color: "outlineGhost",
              size: "catalogAction",
              radius: "full",
              onClick: C,
              children: m,
            })),
            (y[18] = C),
            (y[19] = b))
          : (b = y[19]),
        y[20] !== u || y[21] !== b
          ? ((x = (0, t.jsxs)("div", { className: "flex flex-col gap-2", children: [u, b] })),
            (y[20] = u),
            (y[21] = b),
            (y[22] = x))
          : (x = y[22]),
        y[23] !== a || y[24] !== o || y[25] !== r || y[26] !== x
          ? ((w = (0, t.jsxs)(f.R4, { className: "gap-4", children: [a, o, r, x] })),
            (y[23] = a),
            (y[24] = o),
            (y[25] = r),
            (y[26] = x),
            (y[27] = w))
          : (w = y[27]),
        y[28] !== s || y[29] !== w
          ? ((k = (0, t.jsx)(g.lG, {
              open: !0,
              variant: "chatgptConfirmation",
              backdrop: "soft",
              contentPosition: "scrollable",
              showDialogClose: !1,
              widthHint: 400,
              onOpenChange: s,
              children: w,
            })),
            (y[28] = s),
            (y[29] = w),
            (y[30] = k))
          : (k = y[30]),
        k
      )
    }
    function el(e) {
      return (0, t.jsxs)(
        "li",
        {
          className: "flex items-center gap-2 border-t border-default py-2 text-sm font-medium first:border-t-0",
          children: [
            (0, t.jsx)(ei.I, { asset: et, className: "shrink-0 text-danger" }),
            (0, t.jsx)("span", { children: e }),
          ],
        },
        e,
      )
    }
    var eo = s("dwlG")
    let ec = (0, b._)(
      async () =>
        (
          await Promise.all([
            s.e(293648),
            s.e(560170),
            s.e(872923),
            s.e(496120),
            s.e(136167),
            s.e(999152),
            s.e(816276),
          ]).then(s.bind(s, "NwTy"))
        ).WorkspaceAgentInstructionsDiff,
      {
        fallback: (e) => (0, t.jsx)(es.I, { onClose: e.onClose, onCloseAutoFocus: e.onCloseAutoFocus }),
        errorFallback: (e) =>
          (0, t.jsx)(es.I, { onClose: e.onClose, onCloseAutoFocus: e.onCloseAutoFocus, failed: !0 }),
      },
    )
    function er(e) {
      var n
      let s,
        b,
        A,
        j,
        v,
        C,
        _,
        N,
        M,
        I,
        S,
        R,
        D,
        z,
        O,
        F,
        T,
        W,
        U,
        L,
        E,
        P,
        $,
        G,
        H,
        B,
        K,
        Z,
        J,
        Q,
        es,
        et,
        ei,
        el = (0, i.c)(139),
        {
          builder: er,
          fields: eu,
          changes: ep,
          pending: eh,
          canPublish: em,
          error: eg,
          onClose: ef,
          onPublish: eb,
          onFixMissingFields: ex,
          intent: ew,
          slackSchedulePrompt: ek,
          onUndo: ey,
        } = e,
        eA = void 0 === ew ? "publish" : ew,
        ej = (0, r.A)(),
        ev = (0, x.U)("(width < 40rem)"),
        [eC, e_] = (0, c.useState)(!1),
        [eN, eM] = (0, c.useState)(!1),
        [eI, eS] = (0, c.useState)(!1),
        eR = (0, c.useRef)(null),
        eD = (0, c.useRef)(null),
        ez = er.latest_published_version
      el[0] !== ey || el[1] !== eh || el[2] !== ez
        ? ((s =
            ez?.config != null && null != ey
              ? (e) => {
                  eh || ey(e, ez.id)
                }
              : void 0),
          (el[0] = ey),
          (el[1] = eh),
          (el[2] = ez),
          (el[3] = s))
        : (s = el[3])
      let eO = s
      el[4] !== ep ? ((b = ep.find(ed)), (el[4] = ep), (el[5] = b)) : (b = el[5])
      let eF = b,
        eT = null != er.latest_published_version,
        eW = en(er, eu),
        { data: eq, error: eU, isFetching: eL, refetch: eE } = (0, o._U)(V, er.agent.id, { enabled: eW }),
        eP = (0, o.Ul)(u.chatGptAuthenticatedAccountId$),
        e$ = (0, o.Ul)(u.o8),
        eG = (0, y.As)({
          accountId: eP ?? "",
          userId: e$,
          agentId: er.agent.id,
          versionScope: "draft",
          enabled: eW && null != eP,
        })
      el[6] !== eG ? ((A = { ...eG, staleTime: w.D.ONE_MINUTE }), (el[6] = eG), (el[7] = A)) : (A = el[7])
      let { data: eH, error: eB, isFetching: eK, refetch: eY } = (0, l.I)(A),
        eZ = eU ?? eB,
        eJ = eL || eK,
        eQ =
          null != eq && null != eH
            ? {
                permissions: eq.permissions,
                links: eH.flatMap((e) =>
                  "SHARED" !== e.auth_type || null == e.link_id
                    ? []
                    : [
                        {
                          id: e.link_id,
                          connectorId: e.connector_id,
                          active: "healthy" === e.link_status && !e.needs_binding,
                          accountLabel: e.account_label ?? "",
                        },
                      ],
                ),
              }
            : null
      el[8] !== eE || el[9] !== eY
        ? ((j = () => {
            ;(eE(), eY())
          }),
          (el[8] = eE),
          (el[9] = eY),
          (el[10] = j))
        : (j = el[10])
      let eV = j,
        eX =
          null == eQ
            ? null
            : ((G = (eu.tools.connectors ?? []).filter(X)),
              (H = er.latest_published_version?.config),
              (B = new Set((H?.tools.connectors ?? []).filter(X).map(ee))),
              (Z = (K = (eu.slackDeployments ?? []).filter(
                (e) => !0 !== e.pending_deletion && !1 !== e.slack_trigger.enabled,
              )).filter((e) => !H?.deployments?.slack?.some((n) => n.deployment_id === e.deployment_id))),
              (J = G.filter((e) => !B.has(ee(e)))),
              (Q = eQ.permissions.workspace?.capability != null),
              (es = en(er, eu) && (J.length > 0 || Z.length > 0) && (K.length > 0 || Q)),
              (et = (Z.length > 0 ? G : J).map((e) => {
                let n = ee(e),
                  s = "LINK" === e.auth.type ? e.auth.link.id : null,
                  t = eQ.links.find((e) => e.id === s && e.connectorId === n && e.active)
                return {
                  id: n,
                  label: e.server_label?.trim() || n,
                  accountLabel: t?.accountLabel ?? null,
                  connectorId:
                    "CONNECTOR_ID" === e.connector_identifier.type ? e.connector_identifier.connector_id : null,
                  allowedTools: e.allowed_tools,
                }
              })),
              (ei = J.length > 0 ? K : Z),
              {
                required: es,
                missingConnections: et.some((e) => null == e.accountLabel),
                connectors: et,
                channels: ei,
                newConnectorIds: new Set(J.map(ee)),
                newChannelIds: new Set(Z.map((e) => e.deployment_id)),
                workspaceInDirectory: eQ.permissions.workspace?.store_visible === !0,
                workspaceShared: Q,
                snapshot: JSON.stringify([eu.tools.connectors, ei, eQ.permissions.workspace, et]),
              }),
        [e0, e1] = (0, c.useState)(null),
        e2 = ((n = eX?.snapshot), null != eP && null != e$ && null != n ? JSON.stringify([eP, e$, n]) : null),
        e3 = null != e2 && e0 === e2,
        e4 = !eW || (null != eX && null == eZ && !eJ && (!eX.required || (!eX.missingConnections && e3))),
        e5 = eN && eX?.required === !0,
        e7 = e5 && ev,
        e9 = em && !eh && (!eT || ep.length > 0) && (!eW || (null != eX && null == eZ && !eJ)),
        e6 = em && !eh && e4 && (!eT || ep.length > 0)
      if (!e5 && eX?.required) {
        let e
        ;(el[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, t.jsx)(d.A, {
              id: "workspaceAgents.publication.continueToAccess",
              defaultMessage: "Continue",
              description: "Continue from draft review to the shared-connection consent step",
            })),
            (el[11] = e))
          : (e = el[11]),
          (v = e))
      } else if (e5) {
        let e
        ;(el[12] !== eT
          ? ((e = eT
              ? (0, t.jsx)(d.A, {
                  id: "workspaceAgents.publication.confirmUpdate",
                  defaultMessage: "Confirm and update",
                  description: "Final confirmation to publish updated agent sharing",
                })
              : (0, t.jsx)(d.A, {
                  id: "workspaceAgents.publication.confirmCreate",
                  defaultMessage: "Confirm and create",
                  description: "Final confirmation to publish a new agent with sharing",
                })),
            (el[12] = eT),
            (el[13] = e))
          : (e = el[13]),
          (v = e))
      } else {
        let e
        ;(el[14] !== eT
          ? ((e = eT
              ? (0, t.jsx)(d.A, {
                  id: "workspaceAgents.builder.publication.update",
                  defaultMessage: "Update",
                  description: "Publish changes to an already published Workspace Agent",
                })
              : (0, t.jsx)(d.A, {
                  id: "workspaceAgents.builder.publication.create",
                  defaultMessage: "Create",
                  description: "Publish a Workspace Agent for the first time",
                })),
            (el[14] = eT),
            (el[15] = e))
          : (e = el[15]),
          (v = e))
      }
      ;(el[16] !== eu.name || el[17] !== ej
        ? ((C = eu.name.trim()
            ? []
            : [
                ej.formatMessage({
                  id: "workspaceAgents.publication.missingName",
                  defaultMessage: "Missing name",
                  description: "Publication checklist item for an unnamed agent",
                }),
              ]),
          (el[16] = eu.name),
          (el[17] = ej),
          (el[18] = C))
        : (C = el[18]),
        el[19] !== eu.instructions || el[20] !== ej
          ? ((_ = eu.instructions.trim()
              ? []
              : [
                  ej.formatMessage({
                    id: "workspaceAgents.publication.missingInstructions",
                    defaultMessage: "Missing instructions",
                    description: "Publication checklist item for an agent with no instructions",
                  }),
                ]),
            (el[19] = eu.instructions),
            (el[20] = ej),
            (el[21] = _))
          : (_ = el[21]),
        el[22] !== C || el[23] !== _ ? ((N = [...C, ..._]), (el[22] = C), (el[23] = _), (el[24] = N)) : (N = el[24]))
      let e8 = N
      if (null != ek && !eI) {
        let e,
          n,
          s,
          i,
          a,
          l,
          o,
          c,
          r,
          u,
          p = "sheet" === ek.presentation ? "responsiveSheet" : void 0,
          m = "sheet" === ek.presentation,
          b = "sheet" === ek.presentation ? eo.A.compactSheet : void 0,
          x = "dialog" === ek.presentation ? 290 : void 0
        ;(el[25] !== ef || el[26] !== eh
          ? ((e = (e) => {
              e || eh || ef()
            }),
            (el[25] = ef),
            (el[26] = eh),
            (el[27] = e))
          : (e = el[27]),
          el[28] !== e6 ||
          el[29] !== eX?.required ||
          el[30] !== e8 ||
          el[31] !== eb ||
          el[32] !== eh ||
          el[33] !== ek.canApply
            ? ((n = (e) => {
                ;(e.preventDefault(),
                  !eh &&
                    ek.canApply &&
                    (e6 && 0 === e8.length && !eX?.required ? eb() : (eS(!0), eX?.required && eM(!0))))
              }),
              (el[28] = e6),
              (el[29] = eX?.required),
              (el[30] = e8),
              (el[31] = eb),
              (el[32] = eh),
              (el[33] = ek.canApply),
              (el[34] = n))
            : (n = el[34]),
          el[35] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, t.jsx)(g.L3, {
                className: "pe-12 text-base font-medium",
                children: (0, t.jsx)(d.A, {
                  id: "workspaceAgents.schedules.applyChannelChanges",
                  defaultMessage: "Apply all pending changes to modify automations for this channel.",
                  description: "Explains that scheduling for this Slack channel requires publishing the draft",
                }),
              })),
              (el[35] = s))
            : (s = el[35]))
        let w = eh || !ek.canApply
        return (
          el[36] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, t.jsx)(d.A, {
                id: "workspaceAgents.schedules.confirmChannelChanges",
                defaultMessage: "Apply changes",
                description: "Apply draft changes before managing Slack channel automations",
              })),
              (el[36] = i))
            : (i = el[36]),
          el[37] !== eh || el[38] !== w
            ? ((a = (0, t.jsx)(h.$, {
                type: "submit",
                color: "accent",
                radius: "full",
                size: "dialogAction",
                className: "justify-center",
                loading: eh,
                disabled: w,
                children: i,
              })),
              (el[37] = eh),
              (el[38] = w),
              (el[39] = a))
            : (a = el[39]),
          el[40] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, t.jsx)(d.A, {
                id: "workspaceAgents.schedules.cancelChannelChanges",
                defaultMessage: "Not now",
                description: "Return to the draft without applying changes",
              })),
              (el[40] = l))
            : (l = el[40]),
          el[41] !== ef || el[42] !== eh
            ? ((o = (0, t.jsx)(h.$, {
                type: "button",
                color: "outlineGhost",
                radius: "full",
                size: "dialogAction",
                className: "justify-center",
                disabled: eh,
                onClick: ef,
                children: l,
              })),
              (el[41] = ef),
              (el[42] = eh),
              (el[43] = o))
            : (o = el[43]),
          el[44] !== a || el[45] !== o
            ? ((c = (0, t.jsxs)("div", { className: "flex flex-col gap-2", children: [a, o] })),
              (el[44] = a),
              (el[45] = o),
              (el[46] = c))
            : (c = el[46]),
          el[47] !== eg || el[48] !== n || el[49] !== c
            ? ((r = (0, t.jsxs)(f.R4, {
                as: "form",
                variant: "chatgpt",
                className: "gap-6 px-5 pt-5 pb-4",
                onSubmit: n,
                children: [s, eg, c],
              })),
              (el[47] = eg),
              (el[48] = n),
              (el[49] = c),
              (el[50] = r))
            : (r = el[50]),
          el[51] !== p || el[52] !== m || el[53] !== b || el[54] !== x || el[55] !== e || el[56] !== r
            ? ((u = (0, t.jsx)(g.lG, {
                open: !0,
                variant: "chatgpt",
                backdrop: "modal",
                size: p,
                unstyledContent: m,
                contentClassName: b,
                widthHint: x,
                showDialogClose: !1,
                onOpenChange: e,
                children: r,
              })),
              (el[51] = p),
              (el[52] = m),
              (el[53] = b),
              (el[54] = x),
              (el[55] = e),
              (el[56] = r),
              (el[57] = u))
            : (u = el[57]),
          u
        )
      }
      if (e8.length > 0) {
        let e
        return (
          el[58] !== eA || el[59] !== eT || el[60] !== e8 || el[61] !== ef || el[62] !== ex
            ? ((e = (0, t.jsx)(ea, { intent: eA, issues: e8, isPublished: eT, onClose: ef, onFix: ex })),
              (el[58] = eA),
              (el[59] = eT),
              (el[60] = e8),
              (el[61] = ef),
              (el[62] = ex),
              (el[63] = e))
            : (e = el[63]),
          e
        )
      }
      let ne = e7 ? "responsiveSheet" : void 0,
        nn = e7 ? void 0 : 540
      return (
        el[64] !== eC || el[65] !== ef || el[66] !== eh
          ? ((M = (e) => {
              !e && (eC ? e_(!1) : eh || ef())
            }),
            (el[64] = eC),
            (el[65] = ef),
            (el[66] = eh),
            (el[67] = M))
          : (M = el[67]),
        el[68] !== e9 || el[69] !== e6 || el[70] !== eX?.required || el[71] !== eb || el[72] !== e5
          ? ((I = (e) => {
              ;(e.preventDefault(), e5 || eX?.required !== !0 ? e6 && eb() : e9 && eM(!0))
            }),
            (el[68] = e9),
            (el[69] = e6),
            (el[70] = eX?.required),
            (el[71] = eb),
            (el[72] = e5),
            (el[73] = I))
          : (I = el[73]),
        el[74] !== eu.name || el[75] !== e5
          ? ((S = (0, t.jsx)(g.L3, {
              children: e5
                ? (0, t.jsx)(d.A, {
                    id: "workspaceAgents.publication.reviewAccessTitle",
                    defaultMessage: "Review access before sharing",
                    description: "Title of the separate shared-connection consent step",
                  })
                : (0, t.jsx)(d.A, {
                    id: "workspaceAgents.builder.publication.reviewTitle",
                    defaultMessage: "Review and publish {name}",
                    description: "Title of the dialog for reviewing all changes before publishing a Workspace Agent",
                    values: { name: eu.name },
                  }),
            })),
            (el[74] = eu.name),
            (el[75] = e5),
            (el[76] = S))
          : (S = el[76]),
        el[77] !== e5
          ? ((R = (0, t.jsx)(g.rr, {
              children: e5
                ? (0, t.jsx)(d.A, {
                    id: "workspaceAgents.publication.reviewSharedAccessDescription",
                    defaultMessage:
                      "People in the shared channels below may gain access to personal data or actions available through these connections",
                    description: "Explains the access granted by publishing the shared connections in this review",
                  })
                : (0, t.jsx)(d.A, {
                    id: "workspaceAgents.builder.publication.reviewDescription",
                    defaultMessage: "Publishing makes these changes available to everyone who uses this agent",
                    description: "Explains the effect of publishing the Workspace Agent draft",
                  }),
            })),
            (el[77] = e5),
            (el[78] = R))
          : (R = el[78]),
        el[79] !== S || el[80] !== R
          ? ((D = (0, t.jsx)(f.OO, {
              className: "shrink-0",
              children: (0, t.jsx)(f.c7, {
                titleClassName: "line-clamp-2 wrap-anywhere",
                subtitleTone: "secondary",
                title: S,
                subtitle: R,
              }),
            })),
            (el[79] = S),
            (el[80] = R),
            (el[81] = D))
          : (D = el[81]),
        el[82] !== eZ || el[83] !== eW || el[84] !== eV
          ? ((z = eW && null != eZ ? (0, t.jsx)(k.p, { onRetry: eV }) : null),
            (el[82] = eZ),
            (el[83] = eW),
            (el[84] = eV),
            (el[85] = z))
          : (z = el[85]),
        el[86] !== eQ || el[87] !== eZ || el[88] !== eJ || el[89] !== eW
          ? ((O =
              eW && (null == eQ || eJ) && null == eZ
                ? (0, t.jsx)(d.A, {
                    id: "workspaceAgents.publication.consentLoading",
                    defaultMessage: "Checking shared connections…",
                    description: "Status while checking which app connections and channels require publication consent",
                  })
                : null),
            (el[86] = eQ),
            (el[87] = eZ),
            (el[88] = eJ),
            (el[89] = eW),
            (el[90] = O))
          : (O = el[90]),
        el[91] !== e2 ||
        el[92] !== eX ||
        el[93] !== e3 ||
        el[94] !== eZ ||
        el[95] !== eJ ||
        el[96] !== eh ||
        el[97] !== eV ||
        el[98] !== e1 ||
        el[99] !== e5
          ? ((F =
              e5 && null != eX
                ? (0, t.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      (0, t.jsx)(Y, { consent: eX }),
                      eX.missingConnections
                        ? (0, t.jsx)(p.l, {
                            type: "warning",
                            content: (0, t.jsx)(d.A, {
                              id: "workspaceAgents.publication.consentMissing",
                              defaultMessage:
                                "Connect all shared connections to continue. Go back to the draft to reconnect an app.",
                              description:
                                "Publication warning when the exact shared app account is no longer active or accessible",
                            }),
                          })
                        : null,
                      eX.missingConnections
                        ? (0, t.jsx)(h.$, {
                            color: "secondary",
                            disabled: eh || eJ,
                            onClick: eV,
                            children: (0, t.jsx)(d.A, {
                              id: "workspaceAgents.publication.retryConnections",
                              defaultMessage: "Check connections again",
                              description:
                                "Refresh publication consent connection health after reconnecting or saving a draft",
                            }),
                          })
                        : null,
                      (0, t.jsxs)("label", {
                        className: "flex items-start gap-2 border-t border-subtle pt-4 text-sm leading-5",
                        children: [
                          (0, t.jsx)(m.S, {
                            checked: e3,
                            disabled: eh || eJ || eX.missingConnections || null != eZ,
                            onCheckedChange: (e) => e1(!0 === e ? e2 : null),
                          }),
                          (0, t.jsx)(d.A, {
                            id: "workspaceAgents.publication.consentAcknowledgement",
                            defaultMessage:
                              "I understand that people in the shared channels above may use this agent’s connections",
                            description:
                              "Acknowledgement required before publishing newly shared app connections or Slack channels",
                          }),
                        ],
                      }),
                    ],
                  })
                : null),
            (el[91] = e2),
            (el[92] = eX),
            (el[93] = e3),
            (el[94] = eZ),
            (el[95] = eJ),
            (el[96] = eh),
            (el[97] = eV),
            (el[98] = e1),
            (el[99] = e5),
            (el[100] = F))
          : (F = el[100]),
        el[101] !== ep || el[102] !== eh || el[103] !== e5 || el[104] !== eO
          ? ((T = e5
              ? null
              : (0, t.jsx)(t.Fragment, {
                  children:
                    0 === ep.length
                      ? (0, t.jsx)(d.A, {
                          id: "workspaceAgents.builder.publication.noChanges",
                          defaultMessage: "No unpublished changes",
                          description: "Empty state when the Workspace Agent draft matches its published version",
                        })
                      : (0, t.jsx)(q, {
                          changes: ep,
                          compareButtonRef: eR,
                          onCompareInstructions: () => e_(!0),
                          pending: eh,
                          onUndo: eO,
                        }),
                })),
            (el[101] = ep),
            (el[102] = eh),
            (el[103] = e5),
            (el[104] = eO),
            (el[105] = T))
          : (T = el[105]),
        el[106] !== eg || el[107] !== z || el[108] !== O || el[109] !== F || el[110] !== T
          ? ((W = (0, t.jsxs)(f.OO, { className: "min-h-0 gap-3 overflow-y-auto", children: [eg, z, O, F, T] })),
            (el[106] = eg),
            (el[107] = z),
            (el[108] = O),
            (el[109] = F),
            (el[110] = T),
            (el[111] = W))
          : (W = el[111]),
        el[112] !== e9 || el[113] !== e6 || el[114] !== ef || el[115] !== eh || el[116] !== e5 || el[117] !== v
          ? ((U = (0, t.jsx)(f.OO, {
              spacing: "large",
              className: "shrink-0",
              children: e5
                ? (0, t.jsxs)("div", {
                    className: "flex w-full items-center gap-2.5",
                    children: [
                      (0, t.jsx)(a.$, {
                        className: "min-w-0 flex-1",
                        color: "primary",
                        disabled: eh,
                        pill: !0,
                        size: "xl",
                        type: "button",
                        variant: "outline",
                        onClick: ef,
                        children: (0, t.jsx)(d.A, {
                          id: "workspaceAgents.publication.cancelAccessReview",
                          defaultMessage: "Cancel",
                          description: "Close the access review without publishing or discarding the draft edits",
                        }),
                      }),
                      (0, t.jsx)(a.$, {
                        className: "min-w-0 flex-1",
                        color: "info",
                        disabled: !e6,
                        loading: eh,
                        pill: !0,
                        size: "xl",
                        type: "submit",
                        children: v,
                      }),
                    ],
                  })
                : (0, t.jsxs)(f.Es, {
                    children: [
                      (0, t.jsx)(h.$, {
                        color: "secondary",
                        size: "dialogAction",
                        disabled: eh,
                        ref: eD,
                        onClick: ef,
                        children: (0, t.jsx)(d.A, {
                          id: "workspaceAgents.builder.publication.backToDraft",
                          defaultMessage: "Back to draft",
                          description: "Closes publication review without discarding agent draft edits",
                        }),
                      }),
                      (0, t.jsx)(h.$, {
                        color: "primary",
                        size: "dialogAction",
                        type: "submit",
                        loading: eh,
                        disabled: !e9,
                        children: v,
                      }),
                    ],
                  }),
            })),
            (el[112] = e9),
            (el[113] = e6),
            (el[114] = ef),
            (el[115] = eh),
            (el[116] = e5),
            (el[117] = v),
            (el[118] = U))
          : (U = el[118]),
        el[119] !== I || el[120] !== D || el[121] !== W || el[122] !== U
          ? ((L = (0, t.jsxs)(f.R4, { as: "form", size: "scrollable", onSubmit: I, children: [D, W, U] })),
            (el[119] = I),
            (el[120] = D),
            (el[121] = W),
            (el[122] = U),
            (el[123] = L))
          : (L = el[123]),
        el[124] !== ne || el[125] !== nn || el[126] !== M || el[127] !== L
          ? ((E = (0, t.jsx)(g.lG, { open: !0, size: ne, widthHint: nn, onOpenChange: M, children: L })),
            (el[124] = ne),
            (el[125] = nn),
            (el[126] = M),
            (el[127] = L),
            (el[128] = E))
          : (E = el[128]),
        el[129] !== er.latest_published_version?.config?.prompt ||
        el[130] !== eu.instructions ||
        el[131] !== eF ||
        el[132] !== eC ||
        el[133] !== eh ||
        el[134] !== eO
          ? ((P = eC
              ? (0, t.jsx)(ec, {
                  before: er.latest_published_version?.config?.prompt ?? "",
                  after: eu.instructions,
                  onDiscard:
                    null == eO || null == eF || eh
                      ? void 0
                      : () => {
                          ;(eO(eF), e_(!1))
                        },
                  onClose: () => e_(!1),
                  onCloseAutoFocus: (e) => {
                    ;(e.preventDefault(), (eR.current ?? eD.current)?.focus())
                  },
                })
              : null),
            (el[129] = er.latest_published_version?.config?.prompt),
            (el[130] = eu.instructions),
            (el[131] = eF),
            (el[132] = eC),
            (el[133] = eh),
            (el[134] = eO),
            (el[135] = P))
          : (P = el[135]),
        el[136] !== E || el[137] !== P
          ? (($ = (0, t.jsxs)(t.Fragment, { children: [E, P] })), (el[136] = E), (el[137] = P), (el[138] = $))
          : ($ = el[138]),
        $
      )
    }
    function ed(e) {
      return "instructions" === e.type
    }
  },
}
//# sourceMappingURL=967975.71529e809c.js.map
