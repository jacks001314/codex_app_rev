export const __rspack_esm_ids = [506627]
export const __webpack_modules__ = {
  Gyir(e, s, n) {
    n.d(s, { WorkspaceAgentPublicationReview: () => el })
    var l = n("ABep"),
      t = n("QosV"),
      a = n("hwkA"),
      i = n("qmMi"),
      o = n("zd8w"),
      c = n("Wf1j"),
      r = n("oyxz"),
      d = n("SPnB"),
      u = n("MM0V"),
      p = n("Sm6l"),
      m = n("Sezd"),
      h = n("JNtf"),
      g = n("mUDD"),
      x = n("Bbed"),
      f = n("ibLK"),
      b = n("R4Ep"),
      j = n("on57"),
      w = n("DBCl"),
      A = n("u2dk"),
      k = n("BQbE"),
      y = n("FvYa"),
      C = n("bVeK"),
      v = n("ZQu1"),
      M = n("DYWj"),
      _ = n("AWNZ"),
      N = n("ZEx5"),
      I = n("a6Zv"),
      S = n("xm0K"),
      z = n("zfwA"),
      R = n("FWPX"),
      D = n("mmGY"),
      U = n("au5W")
    function F(e) {
      let s,
        n,
        a,
        i,
        o,
        c = (0, t.c)(15),
        { changes: d, compareButtonRef: u, onCompareInstructions: m, onUndo: h, pending: g } = e,
        x = void 0 !== g && g
      ;(c[0] !== d ? ((s = d.flatMap($)), (c[0] = d), (c[1] = s)) : (s = c[1]),
        c[2] !== s ? ((n = { appIds: s, hostId: w.iwv }), (c[2] = s), (c[3] = n)) : (n = c[3]))
      let { data: f } = (0, k.KA)(n)
      c[4] !== f ? ((a = new Map(f?.map(O))), (c[4] = f), (c[5] = a)) : (a = c[5])
      let b = a
      return (
        c[6] !== b || c[7] !== d || c[8] !== u || c[9] !== m || c[10] !== h || c[11] !== x
          ? ((i = d.map((e) => {
              let s = "connector" === e.type ? b.get(e.connectorId ?? "") : void 0
              return (0, l.jsx)(
                _.ic,
                {
                  size: "compact",
                  controlSizing: "content",
                  labelWeight: "normal",
                  className: "min-h-10",
                  icon:
                    "connector" === e.type
                      ? (0, l.jsx)(L, { app: s, connectorId: e.connectorId })
                      : (0, l.jsx)(W, { change: e }),
                  label: "connector" === e.type ? (s?.name ?? e.label) : (0, l.jsx)(q, { change: e }),
                  control: (0, l.jsxs)("div", {
                    className: "flex items-center gap-2",
                    children: [
                      "instructions" !== e.type
                        ? (0, l.jsx)("span", {
                            className: (0, j.A)("text-sm", {
                              "text-success": "added" === e.change,
                              "text-danger": "removed" === e.change,
                              "text-secondary": "modified" === e.change,
                            }),
                            children: (0, l.jsx)(r.A, {
                              id: "workspaceAgents.builder.publication.changeKind",
                              defaultMessage: "{kind, select, added {Added} removed {Removed} other {Changed}}",
                              values: { kind: e.change },
                            }),
                          })
                        : null,
                      "instructions" === e.type
                        ? (0, l.jsx)(p.$, {
                            ref: u,
                            "aria-haspopup": "dialog",
                            size: "cardAction",
                            color: "secondary",
                            onClick: m,
                            children: (0, l.jsx)(r.A, {
                              id: "workspaceAgents.builder.publication.compareInstructions",
                              defaultMessage: "Compare instructions",
                            }),
                          })
                        : null,
                      null != h && (0, U.r)(e.type)
                        ? (0, l.jsxs)(p.$, {
                            size: "icon",
                            color: "ghostSecondary",
                            disabled: x,
                            onClick: () => h(e),
                            children: [
                              (0, l.jsx)(C.O8y, { "aria-hidden": "true" }),
                              (0, l.jsx)("span", {
                                className: "sr-only",
                                children: (0, l.jsx)(r.A, {
                                  id: "workspaceAgents.publication.undo",
                                  defaultMessage: "Undo",
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
            (c[6] = b),
            (c[7] = d),
            (c[8] = u),
            (c[9] = m),
            (c[10] = h),
            (c[11] = x),
            (c[12] = i))
          : (i = c[12]),
        c[13] !== i
          ? ((o = (0, l.jsx)(N.t, { variant: "outlined", className: "shrink-0", children: i })),
            (c[13] = i),
            (c[14] = o))
          : (o = c[14]),
        o
      )
    }
    function O(e) {
      return [e.id, e]
    }
    function $(e) {
      return "connector" === e.type && null != e.connectorId ? [e.connectorId] : []
    }
    function L(e) {
      let s,
        n,
        a,
        i = (0, t.c)(8),
        { app: o, connectorId: c } = e,
        r = (0, I.Y)() ? (o?.iconUrlDark ?? o?.iconUrl) : (o?.iconUrl ?? o?.iconUrlDark),
        d = o?.iconUrl,
        u = o?.iconUrlDark
      ;(i[0] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, l.jsx)(C.wdY, {})), (i[0] = s)) : (s = i[0]),
        i[1] !== c || i[2] !== d || i[3] !== u
          ? ((n = (0, l.jsx)(y.R, {
              alt: "",
              logoUrl: d,
              logoDarkUrl: u,
              connectorId: c,
              knownAppId: c,
              loadRemote: !1,
              size: 20,
              fallback: s,
            })),
            (i[1] = c),
            (i[2] = d),
            (i[3] = u),
            (i[4] = n))
          : (n = i[4]))
      let p = n
      return (
        i[5] !== p || i[6] !== r
          ? ((a =
              r && null == (0, A.kk)(r)
                ? (0, l.jsx)(v.R, { alt: "", className: "size-5 rounded-sm", src: r, fallback: p }, r)
                : p),
            (i[5] = p),
            (i[6] = r),
            (i[7] = a))
          : (a = i[7]),
        a
      )
    }
    function W(e) {
      let s = (0, t.c)(11),
        { change: n } = e
      switch (n.type) {
        case "icon": {
          let e
          return (
            s[0] !== n.icon
              ? ((e = (0, l.jsx)(S.WorkspaceAgentGraphic, { icon: n.icon, size: 20 })), (s[0] = n.icon), (s[1] = e))
              : (e = s[1]),
            e
          )
        }
        case "skill":
        case "starters": {
          let e
          return (
            s[2] !== n.iconName
              ? ((e = (0, l.jsx)(z.v, { name: n.iconName })), (s[2] = n.iconName), (s[3] = e))
              : (e = s[3]),
            e
          )
        }
        case "files":
        case "memory": {
          let e
          return (
            s[4] !== n.type ? ((e = (0, l.jsx)(D.y, { kind: n.type })), (s[4] = n.type), (s[5] = e)) : (e = s[5]),
            e
          )
        }
        case "api": {
          let e
          return (
            s[6] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)("img", { alt: "", className: "size-5", src: R })), (s[6] = e))
              : (e = s[6]),
            e
          )
        }
        case "slack": {
          let e
          return (
            s[7] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(M.A, { className: "size-5" })), (s[7] = e))
              : (e = s[7]),
            e
          )
        }
        case "settings": {
          let e
          return (
            s[8] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, l.jsx)(C.IR, {})), (s[8] = e)) : (e = s[8]),
            e
          )
        }
        case "profile": {
          let e
          return (
            s[9] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, l.jsx)(C.CHX, {})), (s[9] = e)) : (e = s[9]),
            e
          )
        }
        case "instructions": {
          let e
          return (
            s[10] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, l.jsx)(C.rFX, {})), (s[10] = e))
              : (e = s[10]),
            e
          )
        }
      }
    }
    function q(e) {
      let s,
        n = (0, t.c)(4),
        { change: a } = e
      if ("label" in a) {
        let e
        return (
          n[0] !== a.label
            ? ((e = (0, l.jsx)("span", { children: a.label })), (n[0] = a.label), (n[1] = e))
            : (e = n[1]),
          e
        )
      }
      return (
        n[2] !== a.type
          ? ((s = (0, l.jsx)(r.A, {
              id: "workspaceAgents.builder.publication.changeLabel",
              defaultMessage:
                "{kind, select, profile {Name and description} settings {Model and tools} instructions {Instructions} files {Reference files} memory {Memory} starters {Conversation starters} icon {Character} api {API channel} other {Agent configuration}}",
              values: { kind: a.type },
            })),
            (n[2] = a.type),
            (n[3] = s))
          : (s = n[3]),
        s
      )
    }
    var G = n("OAko"),
      T = n("TjgH"),
      B = n("yFyI")
    function P(e) {
      let s,
        n,
        a = (0, t.c)(3),
        { connectorId: i, allowedTools: o } = e
      a[0] !== i ? ((s = { appIds: [i], hostId: w.iwv, includeTools: !0 }), (a[0] = i), (a[1] = s)) : (s = a[1])
      let { data: c, error: d } = (0, k.KA)(s),
        u = c?.find((e) => e.id === i)?.toolSummaries
      return null == u ||
        null != d ||
        0 === o.length ||
        o.some((e) => !u.some((s) => s.name === e && s.isEnabled && s.isReadOnly))
        ? null
        : (a[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, l.jsx)("span", {
                className: "text-secondary",
                children: (0, l.jsx)(r.A, {
                  id: "workspaceAgents.publication.consentReadOnly",
                  defaultMessage: "Read-only",
                }),
              })),
              (a[2] = n))
            : (n = a[2]),
          n)
    }
    function Z(e) {
      let s,
        n,
        a,
        i,
        o,
        d,
        u,
        p,
        m,
        h = (0, t.c)(27),
        { consent: g } = e,
        x = (0, c.A)(),
        { data: f } = (0, G.YL)()
      h[0] !== f?.name || h[1] !== x
        ? ((s =
            f?.name?.trim() ||
            x.formatMessage({
              id: "workspaceAgents.publication.unnamedWorkspace",
              defaultMessage: "Untitled Workspace",
            })),
          (h[0] = f?.name),
          (h[1] = x),
          (h[2] = s))
        : (s = h[2])
      let b = s
      if (
        (h[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, l.jsx)("h3", {
              className: "sr-only",
              children: (0, l.jsx)(r.A, {
                id: "workspaceAgents.publication.consentConnections",
                defaultMessage: "Shared connections",
              }),
            })),
            (h[3] = n))
          : (n = h[3]),
        h[4] !== g.connectors || h[5] !== g.newConnectorIds)
      ) {
        let e
        ;(h[7] !== g.newConnectorIds
          ? ((e = (e) =>
              (0, l.jsxs)(
                "li",
                {
                  className: "flex items-start gap-2 border-t border-subtle py-2 text-sm",
                  children: [
                    (0, l.jsx)(y.R, {
                      alt: "",
                      knownAppId: e.connectorId,
                      loadRemote: !1,
                      size: 20,
                      fallback: (0, l.jsx)(C.wdY, {}),
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex min-w-0 flex-1 flex-wrap items-center gap-1.5",
                      children: [
                        (0, l.jsx)("span", { className: "min-w-0 font-medium break-words", children: e.label }),
                        null != e.connectorId
                          ? (0, l.jsx)(P, { connectorId: e.connectorId, allowedTools: e.allowedTools })
                          : null,
                        g.newConnectorIds.has(e.id) ? (0, l.jsx)(E, {}) : null,
                      ],
                    }),
                    e.accountLabel
                      ? (0, l.jsx)("span", {
                          className: "ms-auto max-w-2/5 min-w-0 shrink-0 truncate text-end",
                          children: e.accountLabel,
                        })
                      : null,
                  ],
                },
                e.id,
              )),
            (h[7] = g.newConnectorIds),
            (h[8] = e))
          : (e = h[8]),
          (a = g.connectors.map(e)),
          (h[4] = g.connectors),
          (h[5] = g.newConnectorIds),
          (h[6] = a))
      } else a = h[6]
      if (
        (h[9] !== a
          ? ((i = (0, l.jsxs)("section", { children: [n, (0, l.jsx)("ul", { children: a })] })),
            (h[9] = a),
            (h[10] = i))
          : (i = h[10]),
        h[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, l.jsx)("h3", {
              className: "py-2.5 text-sm font-medium",
              children: (0, l.jsx)(r.A, {
                id: "workspaceAgents.publication.consentChannels",
                defaultMessage: "Shared channels",
              }),
            })),
            (h[11] = o))
          : (o = h[11]),
        h[12] !== g.channels || h[13] !== g.newChannelIds)
      ) {
        let e
        ;(h[15] !== g.newChannelIds
          ? ((e = (e) =>
              (0, l.jsxs)(
                "li",
                {
                  className: "flex items-center gap-2 border-t border-subtle py-2 text-sm",
                  children: [
                    (0, l.jsx)(M.A, { className: "size-5 shrink-0", "aria-hidden": !0 }),
                    (0, l.jsx)("span", {
                      className: "min-w-0 break-words",
                      children: (0, l.jsx)(r.A, {
                        id: "workspaceAgents.publication.consentSlackChannel",
                        defaultMessage: "#{channelName}",
                        values: { channelName: (0, B.IO)(e).name },
                      }),
                    }),
                    g.newChannelIds.has(e.deployment_id) ? (0, l.jsx)(E, {}) : null,
                  ],
                },
                e.deployment_id,
              )),
            (h[15] = g.newChannelIds),
            (h[16] = e))
          : (e = h[16]),
          (d = g.channels.map(e)),
          (h[12] = g.channels),
          (h[13] = g.newChannelIds),
          (h[14] = d))
      } else d = h[14]
      return (
        h[17] !== g.workspaceInDirectory || h[18] !== g.workspaceShared || h[19] !== b
          ? ((u = g.workspaceShared
              ? (0, l.jsxs)("li", {
                  className: "flex items-center gap-2 border-t border-subtle py-2 text-sm",
                  children: [
                    (0, l.jsx)(C.DIB, { className: "shrink-0", "aria-hidden": !0 }),
                    (0, l.jsx)("span", {
                      className: "min-w-0 break-words",
                      children: g.workspaceInDirectory
                        ? (0, l.jsx)(r.A, {
                            id: "workspaceAgents.publication.consentWorkspaceDirectory",
                            defaultMessage: "Publish to {workspaceName} directory",
                            values: { workspaceName: b },
                          })
                        : (0, l.jsx)(r.A, {
                            id: "workspaceAgents.publication.consentWorkspaceLink",
                            defaultMessage: "Anyone at {workspaceName} with the link",
                            values: { workspaceName: b },
                          }),
                    }),
                  ],
                })
              : null),
            (h[17] = g.workspaceInDirectory),
            (h[18] = g.workspaceShared),
            (h[19] = b),
            (h[20] = u))
          : (u = h[20]),
        h[21] !== d || h[22] !== u
          ? ((p = (0, l.jsxs)("section", { children: [o, (0, l.jsxs)("ul", { children: [d, u] })] })),
            (h[21] = d),
            (h[22] = u),
            (h[23] = p))
          : (p = h[23]),
        h[24] !== i || h[25] !== p
          ? ((m = (0, l.jsxs)(l.Fragment, { children: [i, p] })), (h[24] = i), (h[25] = p), (h[26] = m))
          : (m = h[26]),
        m
      )
    }
    function E() {
      let e,
        s = (0, t.c)(1)
      return (
        s[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(T.E, {
              variant: "info",
              children: (0, l.jsx)(r.A, { id: "workspaceAgents.publication.newAccess", defaultMessage: "New" }),
            })),
            (s[0] = e))
          : (e = s[0]),
        e
      )
    }
    var H = n("Rmlt"),
      Y = n("EOA9"),
      K = n("GCmi")
    let V = (0, n("ESTr").a)({
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
    var J = n("HOLv"),
      Q = n("nCiq")
    function X(e) {
      let s,
        n,
        a,
        i,
        c,
        d,
        m,
        x,
        f,
        b,
        j,
        w,
        A,
        k = (0, t.c)(35),
        { issues: y, missingConnections: C, onConnect: v, isPublished: M, intent: _, onClose: N, onFix: I } = e,
        [S, z] = (0, o.useState)(!1),
        [R, D] = (0, o.useState)(!1)
      if ("preview" === _) {
        let e
        ;(k[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(r.A, {
              id: "workspaceAgents.publication.reviewMissingPreview",
              defaultMessage: "Review these issues before previewing:",
            })),
            (k[0] = e))
          : (e = k[0]),
          (s = e))
      } else if (M) {
        let e
        ;(k[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(r.A, {
              id: "workspaceAgents.publication.reviewMissingUpdate",
              defaultMessage: "Review these issues before updating:",
            })),
            (k[1] = e))
          : (e = k[1]),
          (s = e))
      } else {
        let e
        ;(k[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(r.A, {
              id: "workspaceAgents.publication.reviewMissingCreate",
              defaultMessage: "Review these issues before creating:",
            })),
            (k[2] = e))
          : (e = k[2]),
          (s = e))
      }
      return (
        k[3] !== N ? ((n = (e) => !e && N()), (k[3] = N), (k[4] = n)) : (n = k[4]),
        k[5] !== s
          ? ((a = (0, l.jsx)(h.L3, { className: "text-base font-medium", children: s })), (k[5] = s), (k[6] = a))
          : (a = k[6]),
        k[7] !== C || k[8] !== v
          ? ((i =
              null != C && C.length > 0
                ? (0, l.jsxs)("div", {
                    children: [
                      (0, l.jsx)("h3", { children: (0, l.jsx)(r.A, { ...Q.ZJ.missingConnections }) }),
                      (0, l.jsx)("ul", {
                        children: C.map((e) =>
                          (0, l.jsxs)(
                            "li",
                            {
                              className: "flex items-center justify-between gap-2 py-2",
                              children: [
                                (0, l.jsx)("span", { children: e.label }),
                                null == v
                                  ? null
                                  : (0, l.jsx)(p.$, {
                                      color: "outlineGhost",
                                      size: "catalogAction",
                                      onClick: () => v(e.id),
                                      children: (0, l.jsx)(r.A, { ...Q.ZJ.connect }),
                                    }),
                              ],
                            },
                            e.id,
                          ),
                        ),
                      }),
                    ],
                  })
                : null),
            (k[7] = C),
            (k[8] = v),
            (k[9] = i))
          : (i = k[9]),
        k[10] !== y ? ((c = y.map(ee)), (k[10] = y), (k[11] = c)) : (c = k[11]),
        k[12] !== c ? ((d = (0, l.jsx)("ul", { children: c })), (k[12] = c), (k[13] = d)) : (d = k[13]),
        k[14] !== R
          ? ((m = R
              ? (0, l.jsx)(u.l, {
                  type: "error",
                  content: (0, l.jsx)(r.A, {
                    id: "workspaceAgents.publication.fixMissingFailed",
                    defaultMessage: "Couldn't send to chat. Try again.",
                  }),
                })
              : null),
            (k[14] = R),
            (k[15] = m))
          : (m = k[15]),
        k[16] !== y || k[17] !== I || k[18] !== S
          ? ((x =
              null != I && y.length > 0
                ? (0, l.jsx)(p.$, {
                    className: "w-full justify-center",
                    color: "primary",
                    size: "catalogAction",
                    radius: "full",
                    disabled: S,
                    loading: S,
                    onClick: () => {
                      ;(z(!0),
                        D(!1),
                        I(y)
                          .catch(() => D(!0))
                          .finally(() => z(!1)))
                    },
                    children: (0, l.jsx)(r.A, {
                      id: "workspaceAgents.publication.fixMissing",
                      defaultMessage: "Fix for me",
                    }),
                  })
                : null),
            (k[16] = y),
            (k[17] = I),
            (k[18] = S),
            (k[19] = x))
          : (x = k[19]),
        k[20] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, l.jsx)(r.A, { id: "workspaceAgents.publication.closeMissing", defaultMessage: "Close" })),
            (k[20] = f))
          : (f = k[20]),
        k[21] !== N
          ? ((b = (0, l.jsx)(p.$, {
              className: "w-full justify-center",
              color: "outlineGhost",
              size: "catalogAction",
              radius: "full",
              onClick: N,
              children: f,
            })),
            (k[21] = N),
            (k[22] = b))
          : (b = k[22]),
        k[23] !== x || k[24] !== b
          ? ((j = (0, l.jsxs)("div", { className: "flex flex-col gap-2", children: [x, b] })),
            (k[23] = x),
            (k[24] = b),
            (k[25] = j))
          : (j = k[25]),
        k[26] !== j || k[27] !== a || k[28] !== i || k[29] !== d || k[30] !== m
          ? ((w = (0, l.jsxs)(g.R4, { className: "gap-4", children: [a, i, d, m, j] })),
            (k[26] = j),
            (k[27] = a),
            (k[28] = i),
            (k[29] = d),
            (k[30] = m),
            (k[31] = w))
          : (w = k[31]),
        k[32] !== n || k[33] !== w
          ? ((A = (0, l.jsx)(h.lG, {
              open: !0,
              variant: "chatgptConfirmation",
              backdrop: "soft",
              contentPosition: "scrollable",
              showDialogClose: !1,
              widthHint: 400,
              onOpenChange: n,
              children: w,
            })),
            (k[32] = n),
            (k[33] = w),
            (k[34] = A))
          : (A = k[34]),
        A
      )
    }
    function ee(e) {
      return (0, l.jsxs)(
        "li",
        {
          className: "flex items-center gap-2 border-t border-default py-2 text-sm font-medium first:border-t-0",
          children: [
            (0, l.jsx)(J.I, { asset: V, className: "shrink-0 text-danger" }),
            (0, l.jsx)("span", { children: e }),
          ],
        },
        e,
      )
    }
    var es = n("J7VH")
    let en = (0, x._)(
      async () =>
        (
          await Promise.all([n.e(222773), n.e(95962), n.e(178155), n.e(576312), n.e(999152), n.e(674320)]).then(
            n.bind(n, "NwTy"),
          )
        ).WorkspaceAgentInstructionsDiff,
      {
        fallback: (e) => (0, l.jsx)(K.I, { onClose: e.onClose, onCloseAutoFocus: e.onCloseAutoFocus }),
        errorFallback: (e) => (0, l.jsx)(K.I, { onClose: e.onClose, onCloseAutoFocus: e.onCloseAutoFocus, failed: !0 }),
      },
    )
    function el(e) {
      let s,
        n,
        x,
        j,
        w,
        A,
        k,
        y,
        C,
        v,
        M,
        _,
        N,
        I,
        S,
        z,
        R,
        D,
        U,
        O,
        $,
        L,
        W,
        q = (0, t.c)(144),
        {
          builder: G,
          fields: T,
          changes: B,
          pending: P,
          canPublish: E,
          canManageSharedConnections: V,
          preflightLoading: J,
          error: Q,
          onClose: ee,
          onPublish: el,
          onFixMissingFields: ea,
          issues: ei,
          onConnectApp: eo,
          intent: ec,
          slackSchedulePrompt: er,
          onUndo: ed,
        } = e,
        eu = void 0 === ec ? "publish" : ec,
        ep = (0, c.A)(),
        em = (0, f.U)("(width < 40rem)"),
        [eh, eg] = (0, o.useState)(!1),
        [ex, ef] = (0, o.useState)(!1),
        [eb, ej] = (0, o.useState)(!1),
        ew = (0, o.useRef)(null),
        eA = (0, o.useRef)(null),
        ek = G.latest_published_version
      q[0] !== ed || q[1] !== P || q[2] !== ek
        ? ((s =
            ek?.config != null && null != ed
              ? (e) => {
                  P || ed(e, ek.id)
                }
              : void 0),
          (q[0] = ed),
          (q[1] = P),
          (q[2] = ek),
          (q[3] = s))
        : (s = q[3])
      let ey = s
      q[4] !== B ? ((n = B.find(et)), (q[4] = B), (q[5] = n)) : (n = q[5])
      let eC = n,
        ev = null != G.latest_published_version
      q[6] !== G || q[7] !== V || q[8] !== T
        ? ((x = V && (0, Y.cQ)(G, T)), (q[6] = G), (q[7] = V), (q[8] = T), (q[9] = x))
        : (x = q[9])
      let eM = x
      q[10] !== eM ? ((j = { enabled: eM }), (q[10] = eM), (q[11] = j)) : (j = q[11])
      let { data: e_, error: eN, isFetching: eI, refetch: eS } = (0, i._U)(H.l, G.agent.id, j),
        ez = (0, i.Ul)(d.chatGptAuthenticatedAccountId$),
        eR = (0, i.Ul)(d.o8)
      q[12] !== eM ? ((w = { enabled: eM }), (q[12] = eM), (q[13] = w)) : (w = q[13])
      let { data: eD, error: eU, isFetching: eF, refetch: eO } = (0, i._U)(H._, G.agent.id, w),
        e$ = eN ?? eU,
        eL = eI || eF,
        eW = null != e_ && null != eD ? { permissions: e_.permissions, links: eD } : null
      q[14] !== eS || q[15] !== eO
        ? ((A = () => {
            ;(eS(), eO())
          }),
          (q[14] = eS),
          (q[15] = eO),
          (q[16] = A))
        : (A = q[16])
      let eq = A,
        eG = eM && null != eW ? (0, Y.ik)(G, T, eW) : null,
        [eT, eB] = (0, o.useState)(null),
        eP = (0, Y.v)(ez, eR, eG?.snapshot),
        eZ = null != eP && eT === eP,
        eE = !eM || (null != eG && null == e$ && !eL && (!eG.required || (!eG.missingConnections && eZ))),
        eH = ex && eG?.required === !0,
        eY = eH && em,
        eK = E && !P && (!ev || B.length > 0) && (!eM || (null != eG && null == e$ && !eL)),
        eV = E && !P && eE && (!ev || B.length > 0)
      if (!eH && eG?.required) {
        let e
        ;(q[17] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)(r.A, { id: "workspaceAgents.publication.continueToAccess", defaultMessage: "Continue" })),
            (q[17] = e))
          : (e = q[17]),
          (k = e))
      } else if (eH) {
        let e
        ;(q[18] !== ev
          ? ((e = ev
              ? (0, l.jsx)(r.A, {
                  id: "workspaceAgents.publication.confirmUpdate",
                  defaultMessage: "Confirm and update",
                })
              : (0, l.jsx)(r.A, {
                  id: "workspaceAgents.publication.confirmCreate",
                  defaultMessage: "Confirm and create",
                })),
            (q[18] = ev),
            (q[19] = e))
          : (e = q[19]),
          (k = e))
      } else {
        let e
        ;(q[20] !== ev
          ? ((e = ev
              ? (0, l.jsx)(r.A, { id: "workspaceAgents.builder.publication.update", defaultMessage: "Update" })
              : (0, l.jsx)(r.A, { id: "workspaceAgents.builder.publication.create", defaultMessage: "Create" })),
            (q[20] = ev),
            (q[21] = e))
          : (e = q[21]),
          (k = e))
      }
      q[22] !== T || q[23] !== ep || q[24] !== ei?.labels
        ? ((y = ei?.labels ?? [
            ...(T.name.trim()
              ? []
              : [ep.formatMessage({ id: "workspaceAgents.publication.missingName", defaultMessage: "Missing name" })]),
            ...(T.instructions.trim()
              ? []
              : [
                  ep.formatMessage({
                    id: "workspaceAgents.publication.missingInstructions",
                    defaultMessage: "Missing instructions",
                  }),
                ]),
          ]),
          (q[22] = T),
          (q[23] = ep),
          (q[24] = ei?.labels),
          (q[25] = y))
        : (y = q[25])
      let eJ = y
      if (J && !P) {
        let e
        return (q[26] !== ee ? ((e = (0, l.jsx)(K.I, { onClose: ee })), (q[26] = ee), (q[27] = e)) : (e = q[27]), e)
      }
      if (null != er && !eb) {
        let e,
          s,
          n,
          t,
          a,
          i,
          o,
          c,
          d,
          u,
          m = "sheet" === er.presentation ? "responsiveSheet" : void 0,
          x = "sheet" === er.presentation,
          f = "sheet" === er.presentation ? es.A.compactSheet : void 0,
          b = "dialog" === er.presentation ? 290 : void 0
        ;(q[28] !== ee || q[29] !== P
          ? ((e = (e) => {
              e || P || ee()
            }),
            (q[28] = ee),
            (q[29] = P),
            (q[30] = e))
          : (e = q[30]),
          q[31] !== eV || q[32] !== eG?.required || q[33] !== eJ || q[34] !== el || q[35] !== P || q[36] !== er.canApply
            ? ((s = (e) => {
                ;(e.preventDefault(),
                  !P &&
                    er.canApply &&
                    (eV && 0 === eJ.length && !eG?.required ? el() : (ej(!0), eG?.required && ef(!0))))
              }),
              (q[31] = eV),
              (q[32] = eG?.required),
              (q[33] = eJ),
              (q[34] = el),
              (q[35] = P),
              (q[36] = er.canApply),
              (q[37] = s))
            : (s = q[37]),
          q[38] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, l.jsx)(h.L3, {
                className: "pe-12 text-base font-medium",
                children: (0, l.jsx)(r.A, {
                  id: "workspaceAgents.schedules.applyChannelChanges",
                  defaultMessage: "Apply all pending changes to modify automations for this channel.",
                }),
              })),
              (q[38] = n))
            : (n = q[38]))
        let j = P || !er.canApply
        return (
          q[39] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, l.jsx)(r.A, {
                id: "workspaceAgents.schedules.confirmChannelChanges",
                defaultMessage: "Apply changes",
              })),
              (q[39] = t))
            : (t = q[39]),
          q[40] !== P || q[41] !== j
            ? ((a = (0, l.jsx)(p.$, {
                type: "submit",
                color: "accent",
                radius: "full",
                size: "dialogAction",
                className: "justify-center",
                loading: P,
                disabled: j,
                children: t,
              })),
              (q[40] = P),
              (q[41] = j),
              (q[42] = a))
            : (a = q[42]),
          q[43] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = (0, l.jsx)(r.A, {
                id: "workspaceAgents.schedules.cancelChannelChanges",
                defaultMessage: "Not now",
              })),
              (q[43] = i))
            : (i = q[43]),
          q[44] !== ee || q[45] !== P
            ? ((o = (0, l.jsx)(p.$, {
                type: "button",
                color: "outlineGhost",
                radius: "full",
                size: "dialogAction",
                className: "justify-center",
                disabled: P,
                onClick: ee,
                children: i,
              })),
              (q[44] = ee),
              (q[45] = P),
              (q[46] = o))
            : (o = q[46]),
          q[47] !== a || q[48] !== o
            ? ((c = (0, l.jsxs)("div", { className: "flex flex-col gap-2", children: [a, o] })),
              (q[47] = a),
              (q[48] = o),
              (q[49] = c))
            : (c = q[49]),
          q[50] !== Q || q[51] !== s || q[52] !== c
            ? ((d = (0, l.jsxs)(g.R4, {
                as: "form",
                variant: "chatgpt",
                className: "gap-6 px-5 pt-5 pb-4",
                onSubmit: s,
                children: [n, Q, c],
              })),
              (q[50] = Q),
              (q[51] = s),
              (q[52] = c),
              (q[53] = d))
            : (d = q[53]),
          q[54] !== x || q[55] !== f || q[56] !== b || q[57] !== e || q[58] !== d || q[59] !== m
            ? ((u = (0, l.jsx)(h.lG, {
                open: !0,
                variant: "chatgpt",
                backdrop: "modal",
                size: m,
                unstyledContent: x,
                contentClassName: f,
                widthHint: b,
                showDialogClose: !1,
                onOpenChange: e,
                children: d,
              })),
              (q[54] = x),
              (q[55] = f),
              (q[56] = b),
              (q[57] = e),
              (q[58] = d),
              (q[59] = m),
              (q[60] = u))
            : (u = q[60]),
          u
        )
      }
      if (eJ.length > 0 || (ei?.missingConnections.length ?? 0) > 0) {
        let e,
          s = ei?.missingConnections
        return (
          q[61] !== eu || q[62] !== ev || q[63] !== eJ || q[64] !== ee || q[65] !== eo || q[66] !== ea || q[67] !== s
            ? ((e = (0, l.jsx)(X, {
                intent: eu,
                issues: eJ,
                missingConnections: s,
                onConnect: eo,
                isPublished: ev,
                onClose: ee,
                onFix: ea,
              })),
              (q[61] = eu),
              (q[62] = ev),
              (q[63] = eJ),
              (q[64] = ee),
              (q[65] = eo),
              (q[66] = ea),
              (q[67] = s),
              (q[68] = e))
            : (e = q[68]),
          e
        )
      }
      let eQ = eY ? "responsiveSheet" : void 0,
        eX = eY ? void 0 : 540
      return (
        q[69] !== eh || q[70] !== ee || q[71] !== P
          ? ((C = (e) => {
              !e && (eh ? eg(!1) : P || ee())
            }),
            (q[69] = eh),
            (q[70] = ee),
            (q[71] = P),
            (q[72] = C))
          : (C = q[72]),
        q[73] !== eK || q[74] !== eV || q[75] !== eG?.required || q[76] !== el || q[77] !== eH
          ? ((v = (e) => {
              ;(e.preventDefault(), eH || eG?.required !== !0 ? eV && el() : eK && ef(!0))
            }),
            (q[73] = eK),
            (q[74] = eV),
            (q[75] = eG?.required),
            (q[76] = el),
            (q[77] = eH),
            (q[78] = v))
          : (v = q[78]),
        q[79] !== T || q[80] !== eH
          ? ((M = (0, l.jsx)(h.L3, {
              children: eH
                ? (0, l.jsx)(r.A, {
                    id: "workspaceAgents.publication.reviewAccessTitle",
                    defaultMessage: "Review access before sharing",
                  })
                : (0, l.jsx)(r.A, {
                    id: "workspaceAgents.builder.publication.reviewTitle",
                    defaultMessage: "Review and publish {name}",
                    values: { name: T.name },
                  }),
            })),
            (q[79] = T),
            (q[80] = eH),
            (q[81] = M))
          : (M = q[81]),
        q[82] !== eH
          ? ((_ = (0, l.jsx)(h.rr, {
              children: eH
                ? (0, l.jsx)(r.A, {
                    id: "workspaceAgents.publication.reviewSharedAccessDescription",
                    defaultMessage:
                      "People in the shared channels below may gain access to personal data or actions available through these connections",
                  })
                : (0, l.jsx)(r.A, {
                    id: "workspaceAgents.builder.publication.reviewDescription",
                    defaultMessage: "Publishing makes these changes available to everyone who uses this agent",
                  }),
            })),
            (q[82] = eH),
            (q[83] = _))
          : (_ = q[83]),
        q[84] !== M || q[85] !== _
          ? ((N = (0, l.jsx)(g.OO, {
              className: "shrink-0",
              children: (0, l.jsx)(g.c7, {
                titleClassName: "line-clamp-2 wrap-anywhere",
                subtitleTone: "secondary",
                title: M,
                subtitle: _,
              }),
            })),
            (q[84] = M),
            (q[85] = _),
            (q[86] = N))
          : (N = q[86]),
        q[87] !== e$ || q[88] !== eM || q[89] !== eq
          ? ((I = eM && null != e$ ? (0, l.jsx)(b.p, { onRetry: eq }) : null),
            (q[87] = e$),
            (q[88] = eM),
            (q[89] = eq),
            (q[90] = I))
          : (I = q[90]),
        q[91] !== eW || q[92] !== e$ || q[93] !== eL || q[94] !== eM
          ? ((S =
              eM && (null == eW || eL) && null == e$
                ? (0, l.jsx)(r.A, {
                    id: "workspaceAgents.publication.consentLoading",
                    defaultMessage: "Checking shared connections\u2026",
                  })
                : null),
            (q[91] = eW),
            (q[92] = e$),
            (q[93] = eL),
            (q[94] = eM),
            (q[95] = S))
          : (S = q[95]),
        q[96] !== eP ||
        q[97] !== eG ||
        q[98] !== eZ ||
        q[99] !== e$ ||
        q[100] !== eL ||
        q[101] !== P ||
        q[102] !== eq ||
        q[103] !== eB ||
        q[104] !== eH
          ? ((z =
              eH && null != eG
                ? (0, l.jsxs)("div", {
                    className: "flex flex-col gap-4",
                    children: [
                      (0, l.jsx)(Z, { consent: eG }),
                      eG.missingConnections
                        ? (0, l.jsx)(u.l, {
                            type: "warning",
                            content: (0, l.jsx)(r.A, {
                              id: "workspaceAgents.publication.consentMissing",
                              defaultMessage:
                                "Connect all shared connections to continue. Go back to the draft to reconnect an app.",
                            }),
                          })
                        : null,
                      eG.missingConnections
                        ? (0, l.jsx)(p.$, {
                            color: "secondary",
                            disabled: P || eL,
                            onClick: eq,
                            children: (0, l.jsx)(r.A, {
                              id: "workspaceAgents.publication.retryConnections",
                              defaultMessage: "Check connections again",
                            }),
                          })
                        : null,
                      (0, l.jsxs)("label", {
                        className: "flex items-start gap-2 border-t border-subtle pt-4 text-sm leading-5",
                        children: [
                          (0, l.jsx)(m.S, {
                            checked: eZ,
                            disabled: P || eL || eG.missingConnections || null != e$,
                            onCheckedChange: (e) => eB(!0 === e ? eP : null),
                          }),
                          (0, l.jsx)(r.A, {
                            id: "workspaceAgents.publication.consentAcknowledgement",
                            defaultMessage:
                              "I understand that people in the shared channels above may use this agent\u2019s connections",
                          }),
                        ],
                      }),
                    ],
                  })
                : null),
            (q[96] = eP),
            (q[97] = eG),
            (q[98] = eZ),
            (q[99] = e$),
            (q[100] = eL),
            (q[101] = P),
            (q[102] = eq),
            (q[103] = eB),
            (q[104] = eH),
            (q[105] = z))
          : (z = q[105]),
        q[106] !== B || q[107] !== P || q[108] !== eH || q[109] !== ey
          ? ((R = eH
              ? null
              : (0, l.jsx)(l.Fragment, {
                  children:
                    0 === B.length
                      ? (0, l.jsx)(r.A, {
                          id: "workspaceAgents.builder.publication.noChanges",
                          defaultMessage: "No unpublished changes",
                        })
                      : (0, l.jsx)(F, {
                          changes: B,
                          compareButtonRef: ew,
                          onCompareInstructions: () => eg(!0),
                          pending: P,
                          onUndo: ey,
                        }),
                })),
            (q[106] = B),
            (q[107] = P),
            (q[108] = eH),
            (q[109] = ey),
            (q[110] = R))
          : (R = q[110]),
        q[111] !== Q || q[112] !== I || q[113] !== S || q[114] !== z || q[115] !== R
          ? ((D = (0, l.jsxs)(g.OO, { className: "min-h-0 gap-3 overflow-y-auto", children: [Q, I, S, z, R] })),
            (q[111] = Q),
            (q[112] = I),
            (q[113] = S),
            (q[114] = z),
            (q[115] = R),
            (q[116] = D))
          : (D = q[116]),
        q[117] !== eK || q[118] !== eV || q[119] !== ee || q[120] !== P || q[121] !== eH || q[122] !== k
          ? ((U = (0, l.jsx)(g.OO, {
              spacing: "large",
              className: "shrink-0",
              children: eH
                ? (0, l.jsxs)("div", {
                    className: "flex w-full items-center gap-2.5",
                    children: [
                      (0, l.jsx)(a.$, {
                        className: "min-w-0 flex-1",
                        color: "primary",
                        disabled: P,
                        pill: !0,
                        size: "xl",
                        type: "button",
                        variant: "outline",
                        onClick: ee,
                        children: (0, l.jsx)(r.A, {
                          id: "workspaceAgents.publication.cancelAccessReview",
                          defaultMessage: "Cancel",
                        }),
                      }),
                      (0, l.jsx)(a.$, {
                        className: "min-w-0 flex-1",
                        color: "info",
                        disabled: !eV,
                        loading: P,
                        pill: !0,
                        size: "xl",
                        type: "submit",
                        children: k,
                      }),
                    ],
                  })
                : (0, l.jsxs)(g.Es, {
                    children: [
                      (0, l.jsx)(p.$, {
                        color: "secondary",
                        size: "dialogAction",
                        disabled: P,
                        ref: eA,
                        onClick: ee,
                        children: (0, l.jsx)(r.A, {
                          id: "workspaceAgents.builder.publication.backToDraft",
                          defaultMessage: "Back to draft",
                        }),
                      }),
                      (0, l.jsx)(p.$, {
                        color: "primary",
                        size: "dialogAction",
                        type: "submit",
                        loading: P,
                        disabled: !eK,
                        children: k,
                      }),
                    ],
                  }),
            })),
            (q[117] = eK),
            (q[118] = eV),
            (q[119] = ee),
            (q[120] = P),
            (q[121] = eH),
            (q[122] = k),
            (q[123] = U))
          : (U = q[123]),
        q[124] !== v || q[125] !== N || q[126] !== D || q[127] !== U
          ? ((O = (0, l.jsxs)(g.R4, { as: "form", size: "scrollable", onSubmit: v, children: [N, D, U] })),
            (q[124] = v),
            (q[125] = N),
            (q[126] = D),
            (q[127] = U),
            (q[128] = O))
          : (O = q[128]),
        q[129] !== eX || q[130] !== C || q[131] !== O || q[132] !== eQ
          ? (($ = (0, l.jsx)(h.lG, { open: !0, size: eQ, widthHint: eX, onOpenChange: C, children: O })),
            (q[129] = eX),
            (q[130] = C),
            (q[131] = O),
            (q[132] = eQ),
            (q[133] = $))
          : ($ = q[133]),
        q[134] !== G.latest_published_version?.config?.prompt ||
        q[135] !== T ||
        q[136] !== eC ||
        q[137] !== eh ||
        q[138] !== P ||
        q[139] !== ey
          ? ((L = eh
              ? (0, l.jsx)(en, {
                  before: G.latest_published_version?.config?.prompt ?? "",
                  after: T.instructions,
                  onDiscard:
                    null == ey || null == eC || P
                      ? void 0
                      : () => {
                          ;(ey(eC), eg(!1))
                        },
                  onClose: () => eg(!1),
                  onCloseAutoFocus: (e) => {
                    ;(e.preventDefault(), (ew.current ?? eA.current)?.focus())
                  },
                })
              : null),
            (q[134] = G.latest_published_version?.config?.prompt),
            (q[135] = T),
            (q[136] = eC),
            (q[137] = eh),
            (q[138] = P),
            (q[139] = ey),
            (q[140] = L))
          : (L = q[140]),
        q[141] !== $ || q[142] !== L
          ? ((W = (0, l.jsxs)(l.Fragment, { children: [$, L] })), (q[141] = $), (q[142] = L), (q[143] = W))
          : (W = q[143]),
        W
      )
    }
    function et(e) {
      return "instructions" === e.type
    }
  },
}
//# sourceMappingURL=506627.b391bfc0e1.js.map
