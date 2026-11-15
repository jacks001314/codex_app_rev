export const __rspack_esm_ids = [832569]
export const __webpack_modules__ = {
  uq3k(e, t, o) {
    var n = o("DBCl"),
      r = o("Qgfj"),
      a = o("Ov0J")
    let s = (0, r.YK)({
        connecting: {
          id: "threadPage.remoteConnectionStatusBadge.connecting",
          defaultMessage: "Connecting",
          description: "Label shown when remote connection is in progress",
        },
        reconnecting: {
          id: "sidebarElectron.connectionStatus.reconnecting",
          defaultMessage: "Reconnecting…",
          description: "Tooltip shown while an SSH remote connection in the sidebar is being restored",
        },
        restarting: {
          id: "threadPage.remoteConnectionStatusBadge.restarting",
          defaultMessage: "Restarting",
          description: "Label shown when a remote connection is restarting after a user action",
        },
        "login-required": {
          id: "threadPage.remoteConnectionStatusBadge.unauthed",
          defaultMessage: "Login required",
          description: "Label shown when remote connection needs authentication",
        },
        "remote-codex-not-found": {
          id: "threadPage.remoteConnectionStatusBadge.remoteCodexNotFound",
          defaultMessage: "Codex CLI not installed",
          description: "Label shown when the Codex CLI is missing from an SSH remote connection",
        },
        "update-required": {
          id: "threadPage.remoteConnectionStatusBadge.updateRequired",
          defaultMessage: "Update required",
          description: "Label shown when remote connection needs a newer Codex version",
        },
        "restart-required": {
          id: "threadPage.remoteConnectionStatusBadge.restartRequired",
          defaultMessage: "Restart required",
          description: "Label shown when remote connection needs a restart to use a newer Codex version",
        },
        restartNow: {
          id: "threadPage.remoteConnectionStatusBadge.restartNow",
          defaultMessage: "Restart now",
          description: "Action label shown when remote Codex has a newer installed version and can be restarted",
        },
        reconnect: {
          id: "threadPage.remoteConnectionStatusBadge.reconnect",
          defaultMessage: "Reconnect",
          description:
            "Action label shown when a remote SSH connection can be retried without stopping the remote Codex process",
        },
        restartNowTooltip: {
          id: "threadPage.remoteConnectionStatusBadge.restartNowTooltip",
          defaultMessage:
            "Restarting will stop the running Codex CLI process and any ongoing tasks on this remote host",
          description: "Tooltip warning for a remote Codex restart action",
        },
        login: {
          id: "threadPage.remoteConnectionStatusBadge.login",
          defaultMessage: "Sign in to Codex",
          description: "Action label shown when a remote connection needs login",
        },
        installCodex: {
          id: "threadPage.remoteConnectionStatusBadge.installCodex",
          defaultMessage: "Install Codex CLI",
          description: "Action label shown when the Codex CLI is missing from an SSH remote connection",
        },
        installingCodex: {
          id: "threadPage.remoteConnectionStatusBadge.installingCodex",
          defaultMessage: "Installing…",
          description: "Action label shown while Codex is being installed on an SSH remote connection",
        },
        updateCodex: {
          id: "threadPage.remoteConnectionStatusBadge.updateCodex",
          defaultMessage: "Update Codex CLI",
          description: "Action label shown when an SSH remote connection needs a newer Codex version",
        },
        updateWslCodexMessage: {
          id: "threadPage.remoteConnectionStatusBadge.updateWslCodexMessage",
          defaultMessage:
            "Codex CLI in WSL is out of date. Open your WSL distro and update the Codex CLI to {minRequiredVersion} or newer. Current version: {currentVersion}",
          description: "Tooltip message shown when a WSL connection needs a newer Codex version",
        },
        updatingCodex: {
          id: "threadPage.remoteConnectionStatusBadge.updatingCodex",
          defaultMessage: "Updating…",
          description: "Action label shown while Codex is being updated on an SSH remote connection",
        },
        goToSettings: {
          id: "threadPage.remoteConnectionStatusBadge.goToSettings",
          defaultMessage: "See Settings to connect",
          description: "Label shown for a remote connection settings action",
        },
        connected: {
          id: "threadPage.remoteConnectionStatusBadge.connected",
          defaultMessage: "Connected",
          description: "Label shown when remote connection is established",
        },
        disconnected: {
          id: "threadPage.remoteConnectionStatusBadge.disconnected",
          defaultMessage: "Disconnected",
          description: "Label shown when remote connection is unavailable",
        },
        error: {
          id: "threadPage.remoteConnectionStatusBadge.error",
          defaultMessage: "Error",
          description: "Label shown when remote connection is in error",
        },
      }),
      i = {
        connecting: s.connecting,
        restarting: s.restarting,
        connected: s.connected,
        disconnected: s.disconnected,
        error: s.error,
      }
    o.d(
      t,
      {},
      {
        J: function (e, { canLogin: t, error: o, hostKind: r, state: l, surface: c }) {
          let d = e.formatMessage(
            (function (e, t) {
              if ("connecting" === e && t?.code === "connection-failed") return s.reconnecting
              if ("error" === e && null != t)
                switch (t.code) {
                  case "login-required":
                    return s["login-required"]
                  case "remote-codex-not-found":
                    return s["remote-codex-not-found"]
                  case "update-required":
                    return s["update-required"]
                  case "restart-required":
                    return s["restart-required"]
                  case "connection-failed":
                    return s.error
                }
              return i[e]
            })(l, o),
          )
          if ("error" === l && null != o) {
            let i = (0, a.P)(e, o)
            switch (o.code) {
              case "login-required":
                if (t) return { action: { kind: "login", label: e.formatMessage(s.login) }, label: d, message: i }
                if ("connection-status-badge" === c) {
                  let t = e.formatMessage(s.goToSettings)
                  return { action: { kind: "settings", label: t }, label: d, message: `${i} ${t}` }
                }
                return { action: null, label: d, message: i }
              case "remote-codex-not-found":
                return {
                  action: {
                    kind: "install-codex",
                    label: e.formatMessage(s.installCodex),
                    loadingLabel: e.formatMessage(s.installingCodex),
                  },
                  label: d,
                  message: i,
                }
              case "restart-required":
                return {
                  action: {
                    kind: "restart",
                    label: e.formatMessage(s.restartNow),
                    tooltipText: e.formatMessage(s.restartNowTooltip),
                  },
                  label: d,
                  message: i,
                }
              case "update-required":
                if (r === n.PAg)
                  return {
                    action: null,
                    label: d,
                    message: e.formatMessage(s.updateWslCodexMessage, {
                      currentVersion: o.currentVersion,
                      minRequiredVersion: o.minRequiredVersion,
                    }),
                  }
                if ("connections-row" === c)
                  return {
                    action: {
                      kind: "install-codex",
                      label: e.formatMessage(s.updateCodex),
                      loadingLabel: e.formatMessage(s.updatingCodex),
                      tooltipText: e.formatMessage(s.restartNowTooltip),
                    },
                    label: d,
                    message: i,
                  }
                return { action: { kind: "settings", label: e.formatMessage(s.goToSettings) }, label: d, message: i }
              case "connection-failed":
                return { action: { kind: "reconnect", label: e.formatMessage(s.reconnect) }, label: d, message: i }
            }
          }
          return { action: null, label: d, message: d }
        },
      },
    )
  },
  fHsr(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("slpy"),
      s = o("on57"),
      i = o("zTeN"),
      l = o("DBCl"),
      c = o("Wf1j"),
      d = o("HZfM"),
      u = o("uq3k"),
      m = o("rljs"),
      h = o("tl5a"),
      p = o("ihPm"),
      g = o("Sm6l"),
      f = o("bVeK"),
      x = o("jsiH"),
      w = o("TL6G"),
      v = o("kx7U"),
      j = o("OWtl"),
      b = o("kfGJ")
    let y = {
      connecting: "text-codex-description",
      restarting: "text-chart-blue",
      connected: "text-chart-green",
      disconnected: "text-codex-description",
      error: "text-red",
    }
    function C(e) {
      let t,
        o,
        a,
        i = (0, r.c)(7),
        { state: l } = e,
        c = "connecting" === l || "restarting" === l,
        d = y[l]
      return (
        i[0] !== d
          ? ((t = (0, s.A)("icon-2xs inline-flex shrink-0 items-center justify-center", d)), (i[0] = d), (i[1] = t))
          : (t = i[1]),
        i[2] !== c
          ? ((o = c ? (0, n.jsx)(f.S_W, { className: "motion-safe:animate-spin" }) : (0, n.jsx)(x.m, {})),
            (i[2] = c),
            (i[3] = o))
          : (o = i[3]),
        i[4] !== t || i[5] !== o
          ? ((a = (0, n.jsx)("span", { "aria-hidden": !0, className: t, children: o })),
            (i[4] = t),
            (i[5] = o),
            (i[6] = a))
          : (a = i[6]),
        a
      )
    }
    function k(e, t, o) {
      w.O1.dispatchMessage("codex-app-server-restart", {
        hostId: t,
        intent: "reconnect",
        remoteControlEnabled: o !== l.PAg && e.get(p.Zg, t),
      })
    }
    o.d(
      t,
      {},
      {
        Q9: function (e) {
          let t,
            o,
            a = (0, r.c)(7),
            { hostId: s, hostKind: l, label: c } = e,
            d = (0, i.gh)(j.u)
          return (
            a[0] !== s || a[1] !== l || a[2] !== d
              ? ((t = (e) => {
                  ;(e.preventDefault(), e.stopPropagation(), k(d, s, l))
                }),
                (a[0] = s),
                (a[1] = l),
                (a[2] = d),
                (a[3] = t))
              : (t = a[3]),
            a[4] !== c || a[5] !== t
              ? ((o = (0, n.jsx)(g.$, { color: "ghost", onClick: t, children: c })), (a[4] = c), (a[5] = t), (a[6] = o))
              : (o = a[6]),
            o
          )
        },
        Tn: C,
        r0: function (e) {
          let t,
            o,
            s,
            l,
            p,
            g,
            f,
            x = (0, r.c)(42),
            { hostId: w, interactive: y, onLoginRequiredClick: I, showConnectedState: _, showDisabledState: S } = e,
            M = (0, i.gh)(j.u),
            N = (0, c.A)(),
            L = (0, d.Zp)(),
            A = (0, i.Ul)(void 0 !== S && S ? v.u8 : null)
          x[0] !== A || x[1] !== w
            ? ((t = A?.some((e) => e.hostId === w && !e.autoConnect) ?? !1), (x[0] = A), (x[1] = w), (x[2] = t))
            : (t = x[2])
          let T = t,
            P = (0, i._U)(m.LH, w),
            R = (0, i._U)(h.y2, w),
            E = T ? "disconnected" : R,
            O = (0, b.Qz)(w)
          if (!(void 0 === _ || _) && "connected" === E) return null
          let U = P?.code === "connection-failed",
            B = !T && U && "error" === E,
            F =
              T ||
              P?.code === "update-required" ||
              P?.code === "restart-required" ||
              (P?.code === "login-required" && null == I),
            W = !T && P?.code === "login-required" && null != I,
            H = T ? null : P
          x[3] !== O.kind || x[4] !== N || x[5] !== W || x[6] !== E || x[7] !== H
            ? ((o = (0, u.J)(N, {
                canLogin: W,
                error: H,
                hostKind: O.kind,
                state: E,
                surface: "connection-status-badge",
              })),
              (x[3] = O.kind),
              (x[4] = N),
              (x[5] = W),
              (x[6] = E),
              (x[7] = H),
              (x[8] = o))
            : (o = x[8])
          let { action: D, label: q, message: G } = o
          x[9] !== T || x[10] !== N
            ? ((s = T
                ? N.formatMessage({
                    id: "connectionStatus.disabledSettings",
                    defaultMessage: "Computer disabled. Enable it in Settings",
                    description:
                      "Connection status tooltip and button label for opening Settings to enable a disabled remote computer",
                  })
                : null),
              (x[9] = T),
              (x[10] = N),
              (x[11] = s))
            : (s = x[11])
          let z = s
          x[12] !== B || x[13] !== G || x[14] !== z || x[15] !== N
            ? ((l =
                z ??
                (B
                  ? N.formatMessage({
                      id: "sidebarElectron.connectionStatus.connectionFailed",
                      defaultMessage: "Connection failed",
                      description: "Tooltip shown when an SSH remote connection in the sidebar could not be restored",
                    })
                  : G)),
              (x[12] = B),
              (x[13] = G),
              (x[14] = z),
              (x[15] = N),
              (x[16] = l))
            : (l = x[16])
          let Q = l
          if ((void 0 === y || y) && (F || W || B)) {
            let e,
              t,
              o,
              r,
              s = z ?? (B ? (D?.label ?? q) : q)
            return (
              x[17] !== B || x[18] !== O.kind || x[19] !== w || x[20] !== L || x[21] !== I || x[22] !== W || x[23] !== M
                ? ((e = (e) => {
                    ;(e.preventDefault(),
                      e.stopPropagation(),
                      W ? I() : B ? k(M, w, O.kind) : L("/settings/connections"))
                  }),
                  (x[17] = B),
                  (x[18] = O.kind),
                  (x[19] = w),
                  (x[20] = L),
                  (x[21] = I),
                  (x[22] = W),
                  (x[23] = M),
                  (x[24] = e))
                : (e = x[24]),
              x[25] !== E ? ((t = (0, n.jsx)(C, { state: E })), (x[25] = E), (x[26] = t)) : (t = x[26]),
              x[27] !== e || x[28] !== t || x[29] !== s
                ? ((o = (0, n.jsx)("button", {
                    type: "button",
                    className:
                      "icon-2xs inline-flex shrink-0 cursor-interaction items-center justify-center self-center overflow-hidden rounded-full border-0 bg-transparent p-0 text-current no-drag",
                    "aria-label": s,
                    onClick: e,
                    children: t,
                  })),
                  (x[27] = e),
                  (x[28] = t),
                  (x[29] = s),
                  (x[30] = o))
                : (o = x[30]),
              x[31] !== o || x[32] !== Q
                ? ((r = (0, n.jsx)(a.m, { content: Q, children: o })), (x[31] = o), (x[32] = Q), (x[33] = r))
                : (r = x[33]),
              r
            )
          }
          return (
            x[34] !== E ? ((p = (0, n.jsx)(C, { state: E })), (x[34] = E), (x[35] = p)) : (p = x[35]),
            x[36] !== q || x[37] !== p
              ? ((g = (0, n.jsx)("span", {
                  className:
                    "icon-2xs inline-flex shrink-0 items-center justify-center self-center overflow-hidden rounded-full no-drag",
                  "aria-label": q,
                  role: "img",
                  children: p,
                })),
                (x[36] = q),
                (x[37] = p),
                (x[38] = g))
              : (g = x[38]),
            x[39] !== g || x[40] !== Q
              ? ((f = (0, n.jsx)(a.m, { content: Q, children: g })), (x[39] = g), (x[40] = Q), (x[41] = f))
              : (f = x[41]),
            f
          )
        },
      },
    )
  },
  hYhU(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("MVHH"),
      s = o("RkfJ"),
      i = o("s6Vp"),
      l = o("zTeN"),
      c = o("zd8w"),
      d = o("oyxz"),
      u = o("Wf1j"),
      m = o("HZfM"),
      h = o("BWQt"),
      p = o("jEN2"),
      g = o("Sm6l"),
      f = o("ZZgR"),
      x = o("bqtn"),
      w = o("HOLv"),
      v = o("Bbed"),
      j = o("RNul"),
      b = o("ad0f"),
      y = o("yGJW"),
      C = o("uTrt"),
      k = o("ElU1"),
      I = o("IV6l"),
      _ = o("XsHM"),
      S = o("OWtl"),
      M = o("hZax"),
      N = o("uZMB"),
      L = o("jAnS")
    let A = (0, v._)(async () => (await o.e(281320).then(o.bind(o, "AbwZ"))).ComposerProjectPickerContent, {
      errorFallback: (0, n.jsx)(x.ms.Message, {
        tone: "error",
        children: (0, n.jsx)(d.A, {
          id: "chatgptConversations.composer.projectSelector.error",
          defaultMessage: "Projects couldn't be loaded",
          description: "Error message for the cloud project section of the composer project picker",
        }),
      }),
      fallback: (0, n.jsx)(x.ms.Message, {
        children: (0, n.jsx)(d.A, {
          id: "chatgptConversations.composer.projectSelector.loading",
          defaultMessage: "Loading projects…",
          description: "Loading message for the cloud project section of the composer project picker",
        }),
      }),
    })
    o.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            o,
            x,
            v,
            T,
            P,
            R,
            E,
            O,
            U,
            B = (0, r.c)(96),
            {
              breadcrumbTriggerClassName: F,
              cloudProjectsEnabled: W,
              presentation: H,
              workCloudOnly: D,
              disabled: q,
              isPending: G,
              menuOpen: z,
              menuContentOnly: Q,
              workspaceProjectOptions: K,
              projectId: V,
              projectName: $,
              projectlessTriggerLabel: Z,
              shortcut: J,
              showProjectlessIcon: Y,
              subtleHover: X,
              triggerButton: ee,
              variant: et,
              onCreateProject: eo,
              onMenuOpenChange: en,
              onProjectChange: er,
            } = e,
            ea = void 0 === W || W,
            es = void 0 === H ? "utility" : H,
            ei = void 0 !== D && D,
            el = void 0 !== q && q,
            ec = void 0 !== G && G,
            ed = void 0 === Y || Y,
            eu = void 0 !== X && X,
            em = void 0 === et ? "composer" : et,
            eh = (0, l.gh)(S.u),
            ep = (0, M.Zj)("2163293173") && void 0 !== Q && Q,
            eg = (0, u.A)(),
            { pathname: ef, search: ex } = (0, m.zy)()
          B[0] !== ea || B[1] !== ef || B[2] !== ex || B[3] !== em
            ? ((t = "composer" === em && ea && (0, b.n)(ef) && !(0, L.CV)(ex)),
              (B[0] = ea),
              (B[1] = ef),
              (B[2] = ex),
              (B[3] = em),
              (B[4] = t))
            : (t = B[4])
          let ew = t,
            ev = (0, c.useRef)(!1),
            [ej, eb] = (0, c.useState)(!1),
            [ey, eC] = (0, c.useState)(""),
            ek = z ?? ej,
            eI = ew && ek,
            e_ = (0, c.useRef)(!1)
          B[5] !== eh
            ? ((o = () => {
                ;(0, y.yy)(eh, a.QW, {
                  action: "CHATGPT_WEB_HOME_COMPOSER_PROJECT_SELECTION_ACTION_MENU_OPENED",
                  entrySurface: "composer_footer",
                })
              }),
              (B[5] = eh),
              (B[6] = o))
            : (o = B[6])
          let eS = (0, c.useEffectEvent)(o)
          ;(B[7] !== eI || B[8] !== eS
            ? ((x = () => {
                ;(eI && !e_.current && eS(), (e_.current = eI))
              }),
              (B[7] = eI),
              (B[8] = eS),
              (B[9] = x))
            : (x = B[9]),
            B[10] !== eI ? ((v = [eI]), (B[10] = eI), (B[11] = v)) : (v = B[11]),
            (0, c.useEffect)(x, v),
            B[12] !== en
              ? ((T = (e) => {
                  ;(eb(e), en?.(e))
                }),
                (B[12] = en),
                (B[13] = T))
              : (T = B[13]))
          let eM = T
          B[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = (e) => {
                ev.current && ((ev.current = !1), e.preventDefault(), (0, p.xJ)())
              }),
              (B[14] = P))
            : (P = B[14])
          let eN = P
          B[15] !== ea ? ((R = { enabled: ea }), (B[15] = ea), (B[16] = R)) : (R = B[16])
          let { projects: eL } = (0, l.Ul)(N.Ds, R)
          B[17] !== ea || B[18] !== eL ? ((E = ea ? eL : []), (B[17] = ea), (B[18] = eL), (B[19] = E)) : (E = B[19])
          let eA = E
          if (
            B[20] !== F ||
            B[21] !== eA ||
            B[22] !== ea ||
            B[23] !== el ||
            B[24] !== eg ||
            B[25] !== ew ||
            B[26] !== ec ||
            B[27] !== ep ||
            B[28] !== ek ||
            B[29] !== eo ||
            B[30] !== er ||
            B[31] !== es ||
            B[32] !== V ||
            B[33] !== $ ||
            B[34] !== Z ||
            B[35] !== eh ||
            B[36] !== ey ||
            B[37] !== eM ||
            B[38] !== J ||
            B[39] !== ed ||
            B[40] !== eu ||
            B[41] !== ee ||
            B[42] !== em ||
            B[43] !== ei ||
            B[44] !== K
          ) {
            U = Symbol.for("react.early_return_sentinel")
            e: {
              let e, t, o, r, l, c, u, m, p, x
              B[47] !== V ? ((e = (e) => e.gizmo.id === V), (B[47] = V), (B[48] = e)) : (e = B[48])
              let v = eA.find(e),
                b = K?.projects.find((e) => e.projectId === V),
                S = v?.gizmo.display.name.trim() || b?.label || $ || (V ?? null),
                M =
                  null == V
                    ? null
                    : (0, n.jsx)(k.h, {
                        className: "icon-xs",
                        size: 16,
                        fallbackIcon:
                          b?.projectKind === "remote"
                            ? (0, n.jsx)(C.O, { className: "icon-xs", isRemoteProject: !0, remoteHostId: b.hostId })
                            : (0, n.jsx)(w.I, { className: "shrink-0", "aria-hidden": !1, asset: s.M }),
                        isRemoteProject: b?.projectKind === "remote",
                        remoteHostId: b?.hostId,
                        markerClassName: "size-4",
                        projectId: V,
                      })
              B[49] !== eg
                ? ((t = eg.formatMessage({
                    id: "chatgptConversations.composer.projectSelector.choose",
                    defaultMessage: "Choose project",
                    description: "Accessible button label for opening the project picker from a composer utility bar",
                  })),
                  (B[49] = eg),
                  (B[50] = t))
                : (t = B[50])
              let N = t
              B[51] !== eg
                ? ((o = eg.formatMessage({
                    id: "chatgptConversations.composer.projectSelector.changeTooltip",
                    defaultMessage: "Change project",
                    description: "Tooltip for changing the project selected in a composer utility bar",
                  })),
                  (B[51] = eg),
                  (B[52] = o))
                : (o = B[52])
              let L = o
              B[53] !== eg
                ? ((r = eg.formatMessage({
                    id: "chatgptConversations.composer.projectSelector.none",
                    defaultMessage: "No project",
                    description: "Label in the composer project picker when no local or cloud project is selected",
                  })),
                  (B[53] = eg),
                  (B[54] = r))
                : (r = B[54])
              let T = r
              ;(B[55] !== ew || B[56] !== er || B[57] !== eh || B[58] !== eM
                ? ((l = (e, t) => {
                    ;(ew &&
                      (0, y.yy)(eh, a.QW, {
                        action: "CHATGPT_WEB_HOME_COMPOSER_PROJECT_SELECTION_ACTION_PROJECT_SELECTED",
                        entrySurface: "composer_footer",
                      }),
                      (ev.current = !0),
                      er(e, t),
                      eM(!1))
                  }),
                  (B[55] = ew),
                  (B[56] = er),
                  (B[57] = eh),
                  (B[58] = eM),
                  (B[59] = l))
                : (l = B[59]),
                B[60] !== eM
                  ? ((c = () => {
                      ;((ev.current = !0), eM(!1))
                    }),
                    (u = () => eM(!1)),
                    (B[60] = eM),
                    (B[61] = c),
                    (B[62] = u))
                  : ((c = B[61]), (u = B[62])),
                B[63] !== ea ||
                B[64] !== ec ||
                B[65] !== eo ||
                B[66] !== er ||
                B[67] !== V ||
                B[68] !== ey ||
                B[69] !== l ||
                B[70] !== c ||
                B[71] !== u ||
                B[72] !== ei ||
                B[73] !== K
                  ? ((m = (0, n.jsx)(A, {
                      workCloudOnly: ei,
                      cloudProjectsEnabled: ea,
                      isPending: ec,
                      workspaceProjectOptions: K,
                      projectId: V,
                      searchQuery: ey,
                      onSearchQueryChange: eC,
                      onCreateProject: eo,
                      onProjectChange: er,
                      onSelectProject: l,
                      onSelectWorkspaceProject: c,
                      onClose: u,
                    })),
                    (B[63] = ea),
                    (B[64] = ec),
                    (B[65] = eo),
                    (B[66] = er),
                    (B[67] = V),
                    (B[68] = ey),
                    (B[69] = l),
                    (B[70] = c),
                    (B[71] = u),
                    (B[72] = ei),
                    (B[73] = K),
                    (B[74] = m))
                  : (m = B[74]))
              let P = m
              if (ep) {
                U = P
                break e
              }
              if ("breadcrumb" === em) {
                let e, t
                B[75] !== ec || B[76] !== M || B[77] !== ed
                  ? ((e = ec
                      ? (0, n.jsx)(j.y, { className: "icon-xs shrink-0" })
                      : (M ?? (ed ? (0, n.jsx)(w.I, { className: "shrink-0", "aria-hidden": !1, asset: s.M }) : null))),
                    (B[75] = ec),
                    (B[76] = M),
                    (B[77] = ed),
                    (B[78] = e))
                  : (e = B[78])
                let o = (0, n.jsxs)(g.$, {
                  allowShrink: !0,
                  "aria-label":
                    null == S
                      ? N
                      : eg.formatMessage(
                          {
                            id: "chatgptConversations.composer.projectSelector.change",
                            defaultMessage: "Change project: {projectName}",
                            description: "Accessible button label for changing the project selected in the composer",
                          },
                          { projectName: S },
                        ),
                  className: F,
                  color: "ghost",
                  disabled: el,
                  size: "toolbar",
                  children: [e, (0, n.jsx)("span", { className: "truncate", children: S ?? Z ?? T })],
                })
                ;(B[79] !== P || B[80] !== ek || B[81] !== eM || B[82] !== o
                  ? ((t = (0, n.jsx)(f.A, {
                      align: "start",
                      contentWidth: "workspace",
                      open: ek,
                      onCloseAutoFocus: eN,
                      onOpenChange: eM,
                      triggerButton: o,
                      children: P,
                    })),
                    (B[79] = P),
                    (B[80] = ek),
                    (B[81] = eM),
                    (B[82] = o),
                    (B[83] = t))
                  : (t = B[83]),
                  (U = t))
                break e
              }
              if ("hero" === em && null != ee) {
                let e
                ;(B[84] !== el || B[85] !== P || B[86] !== ek || B[87] !== eM || B[88] !== ee
                  ? ((e = (0, n.jsx)(f.A, {
                      align: "center",
                      contentWidth: "workspace",
                      disabled: el,
                      open: ek,
                      onCloseAutoFocus: eN,
                      triggerButton: ee,
                      onOpenChange: eM,
                      children: P,
                    })),
                    (B[84] = el),
                    (B[85] = P),
                    (B[86] = ek),
                    (B[87] = eM),
                    (B[88] = ee),
                    (B[89] = e))
                  : (e = B[89]),
                  (U = e))
                break e
              }
              ;(B[90] !== M
                ? ((p = null == M ? { assets: { 16: s.M, 20: i.v }, ariaHidden: !1 } : void 0),
                  (B[90] = M),
                  (B[91] = p))
                : (p = B[91]),
                B[92] !== eg || B[93] !== er || B[94] !== V
                  ? ((x =
                      null == V
                        ? void 0
                        : {
                            label: eg.formatMessage({
                              id: "composer.localCwdDropdown.clearProject",
                              defaultMessage: "Don't work in a project",
                              description: "Menu item that clears the selected project and starts projectless tasks",
                            }),
                            onClear: () => er(null, null),
                          }),
                    (B[92] = eg),
                    (B[93] = er),
                    (B[94] = V),
                    (B[95] = x))
                  : (x = B[95]),
                (O = (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(h.j, {
                      "aria-label":
                        null == S
                          ? N
                          : eg.formatMessage(
                              {
                                id: "chatgptConversations.composer.projectSelector.change",
                                defaultMessage: "Change project: {projectName}",
                                description:
                                  "Accessible button label for changing the project selected in the composer",
                              },
                              { projectName: S },
                            ),
                      menuOpen: ek,
                      disabled: el,
                      collapse: "footer" === es ? "sm" : void 0,
                      foreground: "primary",
                      iconSource: p,
                      isPending: ec,
                      onCloseAutoFocus: eN,
                      clearAction: x,
                      onOpenChange: eM,
                      icon: M,
                      shortcut: J,
                      showIndicator: "footer" === es,
                      subtleHover: eu,
                      tooltipContent: null == S ? N : L,
                      tooltipOpenWhen: null == S || null != J ? "default" : "target-overflows",
                      value:
                        S ??
                        Z ??
                        ("footer" === es
                          ? (0, n.jsx)(d.A, {
                              id: "sidebarElectron.projectsNavLink",
                              defaultMessage: "Projects",
                              description: "Section label above project task groups in the sidebar",
                            })
                          : N),
                      children: P,
                    }),
                    "composer" === em && b?.projectKind === "local" ? (0, n.jsx)(I.v, { roots: (0, _.l_)(b) }) : null,
                  ],
                })))
            }
            ;((B[20] = F),
              (B[21] = eA),
              (B[22] = ea),
              (B[23] = el),
              (B[24] = eg),
              (B[25] = ew),
              (B[26] = ec),
              (B[27] = ep),
              (B[28] = ek),
              (B[29] = eo),
              (B[30] = er),
              (B[31] = es),
              (B[32] = V),
              (B[33] = $),
              (B[34] = Z),
              (B[35] = eh),
              (B[36] = ey),
              (B[37] = eM),
              (B[38] = J),
              (B[39] = ed),
              (B[40] = eu),
              (B[41] = ee),
              (B[42] = em),
              (B[43] = ei),
              (B[44] = K),
              (B[45] = O),
              (B[46] = U))
          } else ((O = B[45]), (U = B[46]))
          return U !== Symbol.for("react.early_return_sentinel") ? U : O
        },
      },
    )
  },
  zbrB(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("MVHH"),
      s = o("zTeN"),
      i = o("HZfM"),
      l = o("ChYf"),
      c = o("eFn4"),
      d = o("jEN2"),
      u = o("ad0f"),
      m = o("nlNF"),
      h = o("yGJW"),
      p = o("gBBC"),
      g = o("pki7"),
      f = o("gLQa"),
      x = o("a8ri"),
      w = o("WVuR"),
      v = o("Js4A"),
      j = o("OWtl"),
      b = o("ndjw"),
      y = o("pasN"),
      C = o("Ko9s"),
      k = o("wVX4"),
      I = o("hYhU"),
      _ = o("uZMB"),
      S = o("W1Np"),
      M = o("WLgA"),
      N = o("xEXG"),
      L = o("jAnS")
    function A(e) {
      let t,
        o,
        l,
        c,
        d = (0, r.c)(14)
      d[0] !== e ? (({ forceGlobalMemory: t, ...o } = e), (d[0] = e), (d[1] = t), (d[2] = o)) : ((t = d[1]), (o = d[2]))
      let m = (0, s.gh)(j.u),
        { pathname: p, search: g } = (0, i.zy)(),
        f = (0, N.e)()
      return (
        d[3] !== t || d[4] !== p || d[5] !== f || d[6] !== o || d[7] !== m || d[8] !== g
          ? ((l =
              "allowed" === f
                ? () => {
                    ;(0, S.v)(
                      m,
                      (e) => {
                        ;((o.variant ?? "composer") === "composer" &&
                          (0, u.n)(p) &&
                          !(0, L.CV)(g) &&
                          (0, h.yy)(m, a.QW, {
                            action: "CHATGPT_WEB_HOME_COMPOSER_PROJECT_SELECTION_ACTION_PROJECT_SELECTED",
                            entrySurface: "composer_footer",
                          }),
                          o.onProjectChange(e.gizmo.id, e.gizmo.display.name.trim() || e.gizmo.id))
                      },
                      { allowLocalProjectCreation: !1, forceGlobalMemory: t, onCloseAutoFocus: T },
                    )
                  }
                : void 0),
            (d[3] = t),
            (d[4] = p),
            (d[5] = f),
            (d[6] = o),
            (d[7] = m),
            (d[8] = g),
            (d[9] = l))
          : (l = d[9]),
        d[10] !== t || d[11] !== o || d[12] !== l
          ? ((c = (0, n.jsx)(I.u, { ...o, workCloudOnly: t, onCreateProject: l })),
            (d[10] = t),
            (d[11] = o),
            (d[12] = l),
            (d[13] = c))
          : (c = d[13]),
        c
      )
    }
    function T(e) {
      ;(e.preventDefault(), (0, d.xJ)())
    }
    function P(e) {
      let t,
        o,
        d,
        A,
        T,
        P,
        E,
        O,
        U,
        B,
        F,
        W,
        H,
        D,
        q,
        G,
        z,
        Q,
        K = (0, r.c)(86),
        {
          projectId: V,
          projectName: $,
          projectlessTriggerLabel: Z,
          presentation: J,
          menuOpen: Y,
          menuContentOnly: X,
          onMenuOpenChange: ee,
          shortcut: et,
          subtleHover: eo,
          triggerButton: en,
          variant: er,
        } = e,
        ea = (0, s.gh)(j.u),
        es = (0, i.Zp)(),
        { pathname: ei, search: el } = (0, i.zy)(),
        ec = (0, s.Ul)(b.Gv),
        ed = (0, s.Ul)(w.d)
      K[0] !== ei ? ((t = (0, M.vl)(ei)), (K[0] = ei), (K[1] = t)) : (t = K[1])
      let eu = t,
        em = (0, s.Ul)(x.l),
        eh = em && null != eu,
        ep = (0, s.Ul)(_.jo),
        eg = (0, s.Ul)(C.chatGptProjectContextSyncingIds$)
      K[2] === Symbol.for("react.memo_cache_sentinel") ? ((o = { name: "chatgpt" }), (K[2] = o)) : (o = K[2])
      let ef = (0, s._U)(l.G, o),
        ex = (0, s.Ul)(c.d0),
        ew = (0, N.e)(),
        ev = ef.isCapable
      K[3] !== ev ? ((d = { enabled: ev }), (K[3] = ev), (K[4] = d)) : (d = K[4])
      let { projects: ej } = (0, s.Ul)(_.Ds, d)
      if (
        K[5] !== ef.isCapable ||
        K[6] !== ef.isLoading ||
        K[7] !== ej ||
        K[8] !== ev ||
        K[9] !== eh ||
        K[10] !== ed ||
        K[11] !== em ||
        K[12] !== ec ||
        K[13] !== X ||
        K[14] !== Y ||
        K[15] !== es ||
        K[16] !== ee ||
        K[17] !== ei ||
        K[18] !== J ||
        K[19] !== ew ||
        K[20] !== V ||
        K[21] !== $ ||
        K[22] !== Z ||
        K[23] !== ep ||
        K[24] !== eu ||
        K[25] !== ea ||
        K[26] !== el ||
        K[27] !== eg ||
        K[28] !== er ||
        K[29] !== ex
      ) {
        let e,
          t = (0, f.vY)(ec, ev ? ej.map(R) : [], ed)
        if (
          (K[44] !== eh || K[45] !== em || K[46] !== es || K[47] !== eu || K[48] !== ea || K[49] !== ex
            ? ((e = (e, t) => {
                if (
                  em &&
                  "work" === ea.get(y.l) &&
                  (!ex || null == e || (0, k.VI)((0, _._l)(ea).find((t) => t.gizmo.id === e)))
                ) {
                  ;((0, p.yN)(
                    ea,
                    null == e
                      ? null
                      : { projectId: (0, f.Wd)(e, ea.get(b.Gv), ea.get(w.d)) ?? e, projectKind: "local" },
                  ),
                    eh && e !== eu && es(null == e ? "/" : (0, M.bv)(e), { replace: !0 }))
                  return
                }
                let o = ea.get(m.x2)
                ;(0, C.selectChatGptProjectForLocalTask)(ea, null == e ? null : { projectId: e, projectName: t }).then(
                  (t) => {
                    ea.get(m.x2) !== o ||
                      (null != e && null == t) ||
                      (eh && e !== eu && es(null == e ? "/" : (0, M.bv)(e), { replace: !0 }))
                  },
                )
              }),
              (K[44] = eh),
              (K[45] = em),
              (K[46] = es),
              (K[47] = eu),
              (K[48] = ea),
              (K[49] = ex),
              (K[50] = e))
            : (e = K[50]),
          (T = e),
          ef.isLoading || ef.isCapable || !ex)
        ) {
          if (ev && "allowed" === ew) {
            let e
            ;(K[53] !== T || K[54] !== em || K[55] !== ei || K[56] !== ea || K[57] !== el || K[58] !== er
              ? ((e = () => {
                  ;(0, S.v)(
                    ea,
                    (e) => {
                      ;((er ?? "composer") === "composer" &&
                        (0, u.n)(ei) &&
                        !(0, L.CV)(el) &&
                        (0, h.yy)(ea, a.QW, {
                          action: "CHATGPT_WEB_HOME_COMPOSER_PROJECT_SELECTION_ACTION_PROJECT_SELECTED",
                          entrySurface: "composer_footer",
                        }),
                        T(e.gizmo.id, e.gizmo.display.name.trim() || e.gizmo.id))
                    },
                    { allowLocalProjectCreation: !0, forceGlobalMemory: em && "work" === ea.get(y.l) && ea.get(c.rM) },
                  )
                }),
                (K[53] = T),
                (K[54] = em),
                (K[55] = ei),
                (K[56] = ea),
                (K[57] = el),
                (K[58] = er),
                (K[59] = e))
              : (e = K[59]),
              (P = e))
          }
        } else {
          let e
          ;(K[51] !== ea
            ? ((e = () => {
                ;(0, g.gG)(ea)
              }),
              (K[51] = ea),
              (K[52] = e))
            : (e = K[52]),
            (P = e))
        }
        ;((A = I.u),
          (W = ev),
          (H = !ex),
          (D = V),
          K[60] !== V || K[61] !== $ || K[62] !== ep
            ? ((q = $ ?? ep.find((e) => e.projectId === V)?.label ?? null),
              (K[60] = V),
              (K[61] = $),
              (K[62] = ep),
              (K[63] = q))
            : (q = K[63]),
          (G = Z),
          (z = J),
          (E = Y),
          (O = ee),
          K[64] !== V || K[65] !== eg
            ? ((U = null != V && eg.includes(V)), (K[64] = V), (K[65] = eg), (K[66] = U))
            : (U = K[66]),
          (B = X),
          (F =
            ex || null != ed
              ? {
                  projects: ep.filter(
                    (e) =>
                      !t.has(e.projectId) && (ex || ("local" === e.projectKind && (0, v.o)(ec?.[e.projectId], ed, ew))),
                  ),
                  onSelectProject: (e) => {
                    ;((0, p.yN)(ea, e), eh && es("/", { replace: !0 }))
                  },
                }
              : void 0),
          (K[5] = ef.isCapable),
          (K[6] = ef.isLoading),
          (K[7] = ej),
          (K[8] = ev),
          (K[9] = eh),
          (K[10] = ed),
          (K[11] = em),
          (K[12] = ec),
          (K[13] = X),
          (K[14] = Y),
          (K[15] = es),
          (K[16] = ee),
          (K[17] = ei),
          (K[18] = J),
          (K[19] = ew),
          (K[20] = V),
          (K[21] = $),
          (K[22] = Z),
          (K[23] = ep),
          (K[24] = eu),
          (K[25] = ea),
          (K[26] = el),
          (K[27] = eg),
          (K[28] = er),
          (K[29] = ex),
          (K[30] = A),
          (K[31] = T),
          (K[32] = P),
          (K[33] = E),
          (K[34] = O),
          (K[35] = U),
          (K[36] = B),
          (K[37] = F),
          (K[38] = W),
          (K[39] = H),
          (K[40] = D),
          (K[41] = q),
          (K[42] = G),
          (K[43] = z))
      } else
        ((A = K[30]),
          (T = K[31]),
          (P = K[32]),
          (E = K[33]),
          (O = K[34]),
          (U = K[35]),
          (B = K[36]),
          (F = K[37]),
          (W = K[38]),
          (H = K[39]),
          (D = K[40]),
          (q = K[41]),
          (G = K[42]),
          (z = K[43]))
      return (
        K[67] !== A ||
        K[68] !== T ||
        K[69] !== P ||
        K[70] !== et ||
        K[71] !== eo ||
        K[72] !== E ||
        K[73] !== O ||
        K[74] !== U ||
        K[75] !== B ||
        K[76] !== F ||
        K[77] !== W ||
        K[78] !== H ||
        K[79] !== D ||
        K[80] !== q ||
        K[81] !== G ||
        K[82] !== z ||
        K[83] !== en ||
        K[84] !== er
          ? ((Q = (0, n.jsx)(A, {
              cloudProjectsEnabled: W,
              workCloudOnly: H,
              projectId: D,
              projectName: q,
              projectlessTriggerLabel: G,
              presentation: z,
              menuOpen: E,
              onMenuOpenChange: O,
              isPending: U,
              menuContentOnly: B,
              workspaceProjectOptions: F,
              subtleHover: eo,
              shortcut: et,
              triggerButton: en,
              variant: er,
              onCreateProject: P,
              onProjectChange: T,
            })),
            (K[67] = A),
            (K[68] = T),
            (K[69] = P),
            (K[70] = et),
            (K[71] = eo),
            (K[72] = E),
            (K[73] = O),
            (K[74] = U),
            (K[75] = B),
            (K[76] = F),
            (K[77] = W),
            (K[78] = H),
            (K[79] = D),
            (K[80] = q),
            (K[81] = G),
            (K[82] = z),
            (K[83] = en),
            (K[84] = er),
            (K[85] = Q))
          : (Q = K[85]),
        Q
      )
    }
    function R(e) {
      return e.gizmo.id
    }
    o.d(
      t,
      {},
      {
        n: function (e) {
          let t,
            o,
            a = (0, r.c)(32),
            {
              forceGlobalMemory: i,
              projectId: l,
              projectName: c,
              projectlessTriggerLabel: d,
              presentation: u,
              menuOpen: m,
              menuContentOnly: h,
              onMenuOpenChange: p,
              shortcut: g,
              subtleHover: x,
              triggerButton: v,
              variant: j,
              onProjectChange: y,
            } = e,
            C = void 0 !== i && i,
            k = (0, s.Ul)(b.Gt),
            I = (0, s.Ul)(b.Gv),
            _ = (0, s.Ul)(w.d),
            S = l
          void 0 === S && (S = k?.projectId ?? null)
          let M = (void 0 === c ? null : c) ?? (null == S ? null : I?.[S]?.name) ?? null
          a[0] !== _ || a[1] !== I || a[2] !== S
            ? ((t = null == S ? void 0 : (0, f._z)(S, I, _)), (a[0] = _), (a[1] = I), (a[2] = S), (a[3] = t))
            : (t = a[3])
          let N = t
          if ((null != N && (S = N), null != y)) {
            let e, t
            return (
              a[4] !== S ? ((e = S?.startsWith("g-p-") ? S : null), (a[4] = S), (a[5] = e)) : (e = a[5]),
              a[6] !== C ||
              a[7] !== h ||
              a[8] !== m ||
              a[9] !== p ||
              a[10] !== y ||
              a[11] !== u ||
              a[12] !== d ||
              a[13] !== M ||
              a[14] !== g ||
              a[15] !== x ||
              a[16] !== e ||
              a[17] !== v ||
              a[18] !== j
                ? ((t = (0, n.jsx)(A, {
                    forceGlobalMemory: C,
                    projectId: e,
                    projectName: M,
                    projectlessTriggerLabel: d,
                    presentation: u,
                    menuOpen: m,
                    menuContentOnly: h,
                    onMenuOpenChange: p,
                    shortcut: g,
                    subtleHover: x,
                    triggerButton: v,
                    variant: j,
                    onProjectChange: y,
                  })),
                  (a[6] = C),
                  (a[7] = h),
                  (a[8] = m),
                  (a[9] = p),
                  (a[10] = y),
                  (a[11] = u),
                  (a[12] = d),
                  (a[13] = M),
                  (a[14] = g),
                  (a[15] = x),
                  (a[16] = e),
                  (a[17] = v),
                  (a[18] = j),
                  (a[19] = t))
                : (t = a[19]),
              t
            )
          }
          return (
            a[20] !== h ||
            a[21] !== m ||
            a[22] !== p ||
            a[23] !== u ||
            a[24] !== S ||
            a[25] !== d ||
            a[26] !== M ||
            a[27] !== g ||
            a[28] !== x ||
            a[29] !== v ||
            a[30] !== j
              ? ((o = (0, n.jsx)(P, {
                  projectId: S,
                  projectName: M,
                  projectlessTriggerLabel: d,
                  presentation: u,
                  menuOpen: m,
                  menuContentOnly: h,
                  onMenuOpenChange: p,
                  shortcut: g,
                  subtleHover: x,
                  triggerButton: v,
                  variant: j,
                })),
                (a[20] = h),
                (a[21] = m),
                (a[22] = p),
                (a[23] = u),
                (a[24] = S),
                (a[25] = d),
                (a[26] = M),
                (a[27] = g),
                (a[28] = x),
                (a[29] = v),
                (a[30] = j),
                (a[31] = o))
              : (o = a[31]),
            o
          )
        },
      },
    )
  },
  nGkJ(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("slpy"),
      s = o("sQP0"),
      i = o("ZaUy"),
      l = o("on57"),
      c = o("zTeN"),
      d = o("zd8w"),
      u = o("Wf1j"),
      m = o("oyxz"),
      h = o("X7C7"),
      p = o("Sm6l"),
      g = o("ZZgR"),
      f = o("bqtn"),
      x = o("HOLv"),
      w = o("RNul"),
      v = o("S434"),
      j = o("c1U2"),
      b = o("OTo8"),
      y = o("BNGb"),
      C = o("R5vo"),
      k = o("BAVI"),
      I = o("Svj0"),
      _ = o("y3r9"),
      S = o("DJRx"),
      M = o("GEsy"),
      N = o("zx49"),
      L = o("ZLvZ")
    o("Na0v")
    var A = o("idKD")
    function T(e) {
      let t,
        o = (0, r.c)(2),
        { className: a } = e
      return (
        o[0] !== a
          ? ((t = (0, n.jsx)(h.o, {
              borderColor: "border-surface-secondary",
              children: (0, n.jsx)(I.A, { className: a }),
            })),
            (o[0] = a),
            (o[1] = t))
          : (t = o[1]),
        t
      )
    }
    function P(e) {
      return e.startsWith("refs/remotes/") ? e.slice(13) : e
    }
    o.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            o,
            I,
            R,
            E,
            O,
            U,
            B,
            F,
            W,
            H,
            D,
            q,
            G,
            z,
            Q,
            K,
            V,
            $,
            Z,
            J,
            Y,
            X,
            ee,
            et = (0, r.c)(70),
            {
              startingState: eo,
              presentation: en,
              taskOptions: er,
              onStartingStateChange: ea,
              hostConfig: es,
              className: ei,
              side: el,
              gitRoot: ec,
            } = e,
            ed = void 0 === en ? "inline" : en,
            eu = void 0 === el ? "top" : el,
            em = (0, u.A)(),
            [eh, ep] = (0, d.useState)(!1),
            [eg, ef] = (0, d.useState)(!1),
            [ex, ew] = (0, d.useState)("")
          et[0] !== em
            ? ((t = em.formatMessage({
                id: "codex.composer.searchStartingBranches",
                defaultMessage: "Search branches",
                description: "Placeholder for searching available starting branches",
              })),
              (et[0] = em),
              (et[1] = t))
            : (t = et[1])
          let ev = t
          et[2] !== em
            ? ((o = em.formatMessage({
                id: "composer.remote.retryLoadingBranches",
                defaultMessage: "Retry loading branches",
                description:
                  "Tooltip and accessible label for the button that retries a failed branch search in the starting branch picker",
              })),
              (et[2] = em),
              (et[3] = o))
            : (o = et[3])
          let ej = o
          et[4] !== ec || et[5] !== es
            ? ((I = { gitRoot: ec, hostConfig: es }), (et[4] = ec), (et[5] = es), (et[6] = I))
            : (I = et[6])
          let eb = (0, c._U)(A.j, I),
            ey = "branch" === eo.type ? eo.branchName : "main",
            eC = (0, c.Ul)(S.AQ),
            ek = (0, M.o)(ex, 300),
            eI = ex !== ek
          et[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = (e) => {
                ;(e && ef(!0), ep(e), e || ew(""))
              }),
              (et[7] = R))
            : (R = et[7])
          let e_ = R
          et[8] !== eg || et[9] !== eC
            ? ((E = { enabled: eg, retainRepoWatch: eC }), (et[8] = eg), (et[9] = eC), (et[10] = E))
            : (E = et[10])
          let { data: eS, isLoading: eM, refetch: eN } = (0, b.v)(ec, es, "async_task_starting_state_dropdown", E),
            eL = eg && null != ec
          et[11] !== eC || et[12] !== eL
            ? ((O = { enabled: eL, retainRepoWatch: eC }), (et[11] = eC), (et[12] = eL), (et[13] = O))
            : (O = et[13])
          let { data: eA } = (0, j.H)(ec, es, "async_task_starting_state_dropdown", O),
            eT = eg && !!ec
          et[14] !== eC || et[15] !== eT
            ? ((U = { enabled: eT, retainRepoWatch: eC }), (et[14] = eC), (et[15] = eT), (et[16] = U))
            : (U = et[16])
          let { data: eP } = (0, k.C)(ec, es, "async_task_starting_state_dropdown", U),
            eR = eS ?? ey
          et[17] !== ec || et[18] !== eg || et[19] !== es || et[20] !== ey || et[21] !== eR
            ? ((B = { gitRoot: ec, hostConfig: es, currentBranch: eR, remoteDefaultBranch: ey, enabled: eg }),
              (et[17] = ec),
              (et[18] = eg),
              (et[19] = es),
              (et[20] = ey),
              (et[21] = eR),
              (et[22] = B))
            : (B = et[22])
          let {
              branches: eE,
              defaultBranch: eO,
              fetching: eU,
              error: eB,
              refetch: eF,
            } = (function (e) {
              let t,
                o,
                n,
                a,
                s,
                i = (0, r.c)(20),
                { gitRoot: l, hostConfig: d, currentBranch: u, remoteDefaultBranch: m, enabled: h } = e,
                p = (0, c.Ul)(S.AQ)
              i[0] !== h || i[1] !== p
                ? ((t = { enabled: h, retainRepoWatch: p }), (i[0] = h), (i[1] = p), (i[2] = t))
                : (t = i[2])
              let {
                data: g,
                isLoading: f,
                isFetching: x,
                error: w,
                refetch: v,
              } = (0, y.N)(l, d, "async_task_starting_state_dropdown", t)
              i[3] !== h || i[4] !== p
                ? ((o = { enabled: h, retainRepoWatch: p }), (i[3] = h), (i[4] = p), (i[5] = o))
                : (o = i[5])
              let {
                data: j,
                isLoading: b,
                isFetching: k,
                error: I,
                refetch: _,
              } = (0, C.v)(l, d, "async_task_starting_state_dropdown", o)
              if (i[6] !== u || i[7] !== g || i[8] !== j || i[9] !== m) {
                let e = (function ({
                    currentBranch: e,
                    gitDefaultBranch: t,
                    recentBranches: o,
                    remoteDefaultBranch: n,
                  }) {
                    return n && (n === e || n === t || o?.includes(n)) ? n : null
                  })({ currentBranch: u, gitDefaultBranch: g, recentBranches: j, remoteDefaultBranch: m }),
                  t = [g, u, e, ...(j ?? [])],
                  o = new Set()
                ;((n = []),
                  t.forEach((e) => {
                    !(function ({ branch: e, list: t, seen: o }) {
                      !e || o.has(e) || (o.add(e), t.push(e))
                    })({ branch: e, list: n, seen: o })
                  }),
                  (i[6] = u),
                  (i[7] = g),
                  (i[8] = j),
                  (i[9] = m),
                  (i[10] = n))
              } else n = i[10]
              let M = n[0] ?? u ?? m,
                N = f || x || b || k,
                L = w ?? I
              i[11] !== v || i[12] !== _
                ? ((a = async () => {
                    await Promise.all([v(), _()])
                  }),
                  (i[11] = v),
                  (i[12] = _),
                  (i[13] = a))
                : (a = i[13])
              let A = a
              return (
                i[14] !== n || i[15] !== M || i[16] !== L || i[17] !== N || i[18] !== A
                  ? ((s = { branches: n, defaultBranch: M, fetching: N, error: L, refetch: A }),
                    (i[14] = n),
                    (i[15] = M),
                    (i[16] = L),
                    (i[17] = N),
                    (i[18] = A),
                    (i[19] = s))
                  : (s = i[19]),
                s
              )
            })(B),
            eW = ex.trim().toLowerCase(),
            eH = eW.length > 0
          et[23] !== ek || et[24] !== ec || et[25] !== es
            ? ((F = {
                cwd: ec,
                hostConfig: es,
                operationSource: "async_task_starting_state_dropdown",
                preserveRemoteRefs: !0,
                query: ek,
              }),
              (et[23] = ek),
              (et[24] = ec),
              (et[25] = es),
              (et[26] = F))
            : (F = et[26])
          let eD = eh && eH && !eI
          et[27] !== eD ? ((W = { enabled: eD }), (et[27] = eD), (et[28] = W)) : (W = et[28])
          let { data: eq, isFetching: eG, error: ez, refetch: eQ } = (0, c._U)(v.E, F, W),
            eK = eI ? void 0 : eq?.branches,
            eV = "branch" === eo.type ? (eo.remoteRef ?? eo.branchName) : void 0,
            e$ = eA?.local,
            eZ = eA?.remote != null && null != e$ ? `${eA.remote}/${e$}` : null,
            eJ = eH ? eK : eE,
            eY = !eH || eO.toLowerCase().includes(eW),
            eX = eJ?.filter((e) => e !== eO)
          et[29] !== eH || et[30] !== eI || et[31] !== eq?.remoteBranchRefs
            ? ((H = eH && !eI ? (eq?.remoteBranchRefs ?? []) : []),
              (et[29] = eH),
              (et[30] = eI),
              (et[31] = eq?.remoteBranchRefs),
              (et[32] = H))
            : (H = et[32])
          let e1 = H,
            e0 = e1.length > 0,
            e2 = eH ? eG : eU,
            e4 = eH ? ez : eB,
            e3 = eH ? eQ : eF,
            e5 = eS ?? eO
          "branch" === eo.type && eo.branchName
          let e6 = eP?.type === "success" && eP.stagedCount + eP.unstagedCount + (eP.untrackedCount ?? 0) > 0,
            e7 = e6 && (!eH || e5.toLowerCase().includes(eW))
          eo.type
          let e8 =
            "branch" === eo.type && null != eZ && eo.branchName === e$ && eo.remoteRef === `refs/remotes/${eZ}`
              ? eZ
              : null
          ;(et[33] !== eS || et[34] !== eO || et[35] !== e8 || et[36] !== eo.branchName || et[37] !== eo.type
            ? ((D =
                "working-tree" === eo.type
                  ? (0, n.jsx)(m.A, {
                      id: "composer.remote.currentBranch",
                      defaultMessage: "{branch} (current)",
                      description: "Label for the current branch starting point in the composer",
                      values: { branch: eS ?? eO },
                    })
                  : (e8 ??
                    (0, n.jsx)(m.A, {
                      id: "composer.remote.branch",
                      defaultMessage: "{branch}",
                      description: "Label for a specific branch starting point in the composer",
                      values: { branch: eo.branchName },
                    }))),
              (et[33] = eS),
              (et[34] = eO),
              (et[35] = e8),
              (et[36] = eo.branchName),
              (et[37] = eo.type),
              (et[38] = D))
            : (D = et[38]),
            et[39] !== D
              ? ((q = (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(n.Fragment, { children: D }), null, null] })),
                (et[39] = D),
                (et[40] = q))
              : (q = et[40]))
          let e9 = q
          et[41] !== em
            ? ((G = em.formatMessage({
                id: "composer.remote.branchStartingPoint",
                defaultMessage: "What branch should this chat start from?",
                description: "Section label for branch starting point selector",
              })),
              (et[41] = em),
              (et[42] = G))
            : (G = et[42])
          let te = G
          ;(et[43] !== eh || et[44] !== eN || et[45] !== eF
            ? ((z = () => {
                eh && (eN(), eF())
              }),
              (Q = [eh, eN, eF]),
              (et[43] = eh),
              (et[44] = eN),
              (et[45] = eF),
              (et[46] = z),
              (et[47] = Q))
            : ((z = et[46]), (Q = et[47])),
            (0, d.useEffect)(z, Q),
            et[48] === Symbol.for("react.memo_cache_sentinel")
              ? ((K = (0, n.jsx)(m.A, {
                  id: "composer.worktreeOptions.branch",
                  defaultMessage: "Branch",
                  description: "Label for the starting branch selector in the compact task options menu",
                })),
                (et[48] = K))
              : (K = et[48]),
            et[49] !== ei ? ((V = (0, l.A)("whitespace-nowrap", ei)), (et[49] = ei), (et[50] = V)) : (V = et[50]))
          let tt = "working-tree" === eo.type && e6
          ;(et[51] === Symbol.for("react.memo_cache_sentinel")
            ? (($ = (0, n.jsx)(x.I, { "aria-hidden": !1, asset: s.K })), (et[51] = $))
            : ($ = et[51]),
            et[52] !== tt
              ? ((Z = (0, n.jsx)(h.o, { borderColor: "border-surface-secondary", badgeEnabled: tt, children: $ })),
                (et[52] = tt),
                (et[53] = Z))
              : (Z = et[53]),
            et[54] !== e9 || et[55] !== ed || et[56] !== te || et[57] !== V || et[58] !== Z
              ? ((J = (0, n.jsx)(N.P, {
                  "aria-label": te,
                  "data-composer-navigation-target": "starting-state",
                  categoryLabel: null,
                  presentation: ed,
                  menuCategoryLabel: K,
                  className: V,
                  collapse: "secondary",
                  icon: Z,
                  indicator: "collapsible-chevron",
                  value: e9,
                  valueClassName: "max-w-40",
                })),
                (et[54] = e9),
                (et[55] = ed),
                (et[56] = te),
                (et[57] = V),
                (et[58] = Z),
                (et[59] = J))
              : (J = et[59]))
          let to = J,
            tn = (e) =>
              (0, n.jsx)(g.G.Root, {
                label: ev,
                children: (0, n.jsxs)("div", {
                  className: (0, l.A)("flex flex-col overflow-hidden", "menu" === ed ? "w-full" : "w-72 gap-1.5"),
                  children: [
                    (0, n.jsx)(g.G.Input, {
                      placeholder: ev,
                      value: ex,
                      onValueChange: ew,
                      onKeyDown: (e) => {
                        "Enter" === e.key && eI && e.preventDefault()
                      },
                    }),
                    "menu" === ed ? (0, n.jsx)(f.ms.Separator, {}) : null,
                    (0, n.jsx)("div", {
                      className: "vertical-scroll-fade-mask flex max-h-[200px] flex-col gap-1.5 overflow-y-auto",
                      children: (0, n.jsxs)(g.G.List, {
                        children: [
                          e7
                            ? (0, n.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                  (0, n.jsx)(f.ms.SectionLabel, {
                                    children: (0, n.jsx)(m.A, {
                                      id: "composer.remote.localFileStateHeading",
                                      defaultMessage: "Local file state",
                                      description: "Section heading for local working tree selection",
                                    }),
                                  }),
                                  (0, n.jsx)(g.G.Item, {
                                    LeftIcon: T,
                                    rightIconAsset: "working-tree" === eo.type ? i.G : void 0,
                                    tooltipText: e5,
                                    tooltipOpenWhen: "trigger-overflows",
                                    tooltipSide: "menu" === ed ? "left" : void 0,
                                    value: `working-tree:${e5}`,
                                    onSelect: () => {
                                      ;(ea({ type: "working-tree" }), e())
                                    },
                                    children: (0, n.jsxs)("div", {
                                      className: "flex flex-col",
                                      children: [
                                        eM ? null : (0, n.jsx)(n.Fragment, { children: eS ?? eO }),
                                        (0, n.jsx)("span", {
                                          className: "text-codex-description",
                                          children: (0, n.jsx)(m.A, {
                                            id: "composer.remote.currentEditsSuffix.useLocal",
                                            defaultMessage: "with local code changes",
                                            description: "Suffix text indicating the selection includes current edits",
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              })
                            : null,
                          null != eZ && null != e$ && (!eH || eZ.toLowerCase().includes(eW))
                            ? (0, n.jsx)(g.G.Item, {
                                leftIconAsset: s.K,
                                rightIconAsset: null == e8 ? void 0 : i.G,
                                value: eZ,
                                onSelect: () => {
                                  ;(ea({ type: "branch", branchName: e$, remoteRef: `refs/remotes/${eZ}` }), e())
                                },
                                children: eZ,
                              })
                            : null,
                          (0, n.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              "menu" !== ed
                                ? (0, n.jsx)(f.ms.SectionLabel, {
                                    children: (0, n.jsx)(m.A, {
                                      id: "composer.remote.localBranchesSectionHeading",
                                      defaultMessage: "Local branches",
                                      description: "Section heading for local branch search results",
                                    }),
                                  })
                                : null,
                              ek && e2
                                ? (0, n.jsx)("div", {
                                    className: "flex h-full items-center justify-center overflow-clip",
                                    children: (0, n.jsx)(w.y, { className: "icon-xxs" }),
                                  })
                                : null != eb.error || (ek && e4)
                                  ? (0, n.jsxs)("div", {
                                      className:
                                        "flex h-full flex-col items-center justify-center gap-1 text-sm text-danger",
                                      children: [
                                        (0, n.jsx)(m.A, {
                                          id: "composer.remote.errorLoadingBranches",
                                          defaultMessage: "Error loading branches",
                                          description: "Error message for remote starting point selector",
                                        }),
                                        (0, n.jsx)(a.m, {
                                          content: ej,
                                          children: (0, n.jsx)(p.$, {
                                            className: "text-codex-description",
                                            "aria-label": ej,
                                            color: "ghost",
                                            size: "icon",
                                            onClick: () => {
                                              ;(e3(), eb.refetch?.())
                                            },
                                            children: (0, n.jsx)(_.A, { className: "icon-xxs" }),
                                          }),
                                        }),
                                      ],
                                    })
                                  : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        eY &&
                                          (0, n.jsx)(g.G.Item, {
                                            leftIconAsset: s.K,
                                            rightIconAsset: eV === eO ? i.G : void 0,
                                            tooltipText: eO,
                                            tooltipOpenWhen: "trigger-overflows",
                                            tooltipSide: "menu" === ed ? "left" : void 0,
                                            value: eO,
                                            onSelect: () => {
                                              ;(ea({ type: "branch", branchName: eO }), e())
                                            },
                                            children: eO,
                                          }),
                                        eX?.map((t) =>
                                          (0, n.jsx)(
                                            g.G.Item,
                                            {
                                              leftIconAsset: s.K,
                                              rightIconAsset: t === eV ? i.G : void 0,
                                              tooltipText: t,
                                              tooltipOpenWhen: "trigger-overflows",
                                              tooltipSide: "menu" === ed ? "left" : void 0,
                                              value: t,
                                              onSelect: () => {
                                                ;(ea({ type: "branch", branchName: t }), e())
                                              },
                                              children: t,
                                            },
                                            t,
                                          ),
                                        ),
                                      ],
                                    }),
                            ],
                          }),
                          e0
                            ? (0, n.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                  (0, n.jsx)(f.ms.SectionLabel, {
                                    className: "mt-1",
                                    children: (0, n.jsx)(m.A, {
                                      id: "composer.remote.remoteBranchesSectionHeading",
                                      defaultMessage: "Remote branches",
                                      description: "Section heading for fetched remote branch search results",
                                    }),
                                  }),
                                  e1.map((t) =>
                                    (0, n.jsx)(
                                      g.G.Item,
                                      {
                                        leftIconAsset: s.K,
                                        rightIconAsset: t === eV ? i.G : void 0,
                                        tooltipText: P(t),
                                        tooltipOpenWhen: "trigger-overflows",
                                        tooltipSide: "menu" === ed ? "left" : void 0,
                                        value: t,
                                        onSelect: () => {
                                          ;(ea({ type: "branch", branchName: P(t), remoteRef: t }), e())
                                        },
                                        children: P(t),
                                      },
                                      t,
                                    ),
                                  ),
                                ],
                              })
                            : null,
                        ],
                      }),
                    }),
                  ],
                }),
              })
          if ("menu" === ed && null != er)
            return (0, n.jsx)(L.i, { navigation: er, triggerButton: to, onOpenChange: e_, children: tn })
          let tr = g.A
          ;(et[60] !== te || et[61] !== to
            ? ((Y = (0, n.jsx)(a.m, { content: te, children: to })), (et[60] = te), (et[61] = to), (et[62] = Y))
            : (Y = et[62]),
            et[63] === Symbol.for("react.memo_cache_sentinel") ? ((X = () => e_(!1)), (et[63] = X)) : (X = et[63]))
          let ta = tn(X)
          return (
            et[64] !== tr || et[65] !== eh || et[66] !== eu || et[67] !== Y || et[68] !== ta
              ? ((ee = (0, n.jsx)(tr, { side: eu, open: eh, onOpenChange: e_, triggerButton: Y, children: ta })),
                (et[64] = tr),
                (et[65] = eh),
                (et[66] = eu),
                (et[67] = Y),
                (et[68] = ta),
                (et[69] = ee))
              : (ee = et[69]),
            ee
          )
        },
      },
    )
  },
  hKaE(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("sQP0"),
      s = o("oyxz"),
      i = o("HOLv"),
      l = o("iFi7"),
      c = o("zx49"),
      d = o("Qvp9")
    o.d(
      t,
      {},
      {
        H: function (e) {
          let t,
            o,
            u,
            m,
            h,
            p,
            g = (0, r.c)(11)
          g[0] !== e ? (({ presentation: o, ...t } = e), (g[0] = e), (g[1] = t), (g[2] = o)) : ((t = g[1]), (o = g[2]))
          let f = void 0 === o ? "inline" : o
          g[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((u = (0, n.jsx)(s.A, {
                id: "composer.footer.branchSwitch.detachedHead",
                defaultMessage: "Detached HEAD",
                description: "Label shown when the current Git checkout is not on a branch",
              })),
              (g[3] = u))
            : (u = g[3])
          let x = u,
            w = "menu" === f
          return (
            g[4] === Symbol.for("react.memo_cache_sentinel")
              ? ((m = (e) => {
                  let { currentBranch: t } = e
                  return (0, n.jsx)(d.i, {
                    categoryLabel: null,
                    className: "text-codex-description",
                    collapse: "sm",
                    icon: (0, n.jsx)(i.I, { "aria-hidden": !1, asset: a.K }),
                    value: t ?? x,
                    valueClassName: "max-w-40 text-sm",
                  })
                }),
                (g[4] = m))
              : (m = g[4]),
            g[5] !== f
              ? ((h = (e) => {
                  let { currentBranch: t, disabled: o, isPending: r, switchTooltipText: l } = e,
                    d = "collapsible-chevron"
                  return (
                    r && (d = void 0 === t ? "none" : "pending"),
                    (0, n.jsx)(c.P, {
                      presentation: f,
                      menuCategoryLabel: (0, n.jsx)(s.A, {
                        id: "composer.worktreeOptions.branch",
                        defaultMessage: "Branch",
                        description: "Label for the branch selector in the compact task options menu",
                      }),
                      "aria-label": l,
                      "data-composer-navigation-target": "branch",
                      categoryLabel: null,
                      className: "px-0",
                      collapse: "sm",
                      disabled: o,
                      icon: (0, n.jsx)(i.I, { "aria-hidden": !1, asset: a.K }),
                      indicator: d,
                      value:
                        void 0 === t
                          ? (0, n.jsx)(s.A, {
                              id: "composer.footer.branchSwitch.loading",
                              defaultMessage: "Loading branch…",
                              description:
                                "Label shown while loading the current Git branch in the composer utility bar",
                            })
                          : (t ?? x),
                      valueClassName: "max-w-40 text-sm",
                    })
                  )
                }),
                (g[5] = f),
                (g[6] = h))
              : (h = g[6]),
            g[7] !== t || g[8] !== w || g[9] !== h
              ? ((p = (0, n.jsx)(l.Q, {
                  ...t,
                  openOnHover: w,
                  renderWhileLoading: !0,
                  renderStaticBranch: m,
                  renderControl: h,
                })),
                (g[7] = t),
                (g[8] = w),
                (g[9] = h),
                (g[10] = p))
              : (p = g[10]),
            p
          )
        },
      },
    )
  },
  Qvp9(e, t, o) {
    o.d(t, { i: () => i })
    var n = o("ABep"),
      r = o("QosV"),
      a = o("on57"),
      s = o("ACoE")
    function i(e) {
      let t,
        o,
        i,
        l = (0, r.c)(11),
        { categoryLabel: c, className: d, collapse: u, icon: m, value: h, valueClassName: p } = e
      return (
        l[0] !== d ? ((t = (0, a.A)("ComposerUtilityBarStaticLabel-qxMy_g", d)), (l[0] = d), (l[1] = t)) : (t = l[1]),
        l[2] !== c || l[3] !== u || l[4] !== m || l[5] !== h || l[6] !== p
          ? ((o = (0, n.jsx)(s.m, {
              categoryLabel: c,
              collapse: u,
              icon: m,
              indicator: "none",
              selectedValue: h,
              selectedValueClassName: p,
              foreground: "primary",
            })),
            (l[2] = c),
            (l[3] = u),
            (l[4] = m),
            (l[5] = h),
            (l[6] = p),
            (l[7] = o))
          : (o = l[7]),
        l[8] !== t || l[9] !== o
          ? ((i = (0, n.jsx)("div", { className: t, children: o })), (l[8] = t), (l[9] = o), (l[10] = i))
          : (i = l[10]),
        i
      )
    }
  },
  IQyQ(e, t, o) {
    o.d(t, { ComposerUtilityBar: () => tP })
    var n = o("ABep"),
      r = o("QosV"),
      a = o("slpy"),
      s = o("J6XW"),
      i = o("sQP0"),
      l = o("fOeo"),
      c = o("on57"),
      d = o("zTeN"),
      u = o("DBCl"),
      m = o("zd8w"),
      h = o("oyxz"),
      p = o("HZfM"),
      g = o("tl5a"),
      f = o("zbrB"),
      x = o("j9xU"),
      w = o("CBkt"),
      v = o("n5iL"),
      j = o("CSxw"),
      b = o("Sm6l"),
      y = o("HOLv"),
      C = o("Gqmd"),
      k = o("Wf1j"),
      I = o("Qgfj"),
      _ = o("zx49"),
      S = o("bqtn"),
      M = o("bVeK"),
      N = o("ucx3"),
      L = o("RNul"),
      A = o("nluz"),
      T = o("o4oB"),
      P = o("Oj9r"),
      R = o("LKEZ")
    function E() {
      let e,
        t,
        o = (0, r.c)(15),
        a = (0, d.gh)(P.GD),
        { data: s, isError: i, isLoading: l, refetch: c } = (0, d.Ul)(R.v)
      if (l) {
        let e
        return (
          o[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)("div", {
                className: "flex items-center justify-center py-2",
                children: (0, n.jsx)(L.y, { className: "icon-xxs text-codex-description" }),
              })),
              (o[0] = e))
            : (e = o[0]),
          e
        )
      }
      if (i && null == s) {
        let e, t, r, a
        return (
          o[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(S.ms.Message, {
                compact: !0,
                tone: "error",
                children: (0, n.jsx)(h.A, {
                  id: "restricted.aeonCreationTarget.environmentLoadError",
                  defaultMessage: "Couldn’t load environments",
                  description: "Error shown when cloud environment discovery fails",
                }),
              })),
              (o[1] = e))
            : (e = o[1]),
          o[2] !== c
            ? ((t = (e) => {
                ;(e.preventDefault(), c())
              }),
              (o[2] = c),
              (o[3] = t))
            : (t = o[3]),
          o[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, n.jsx)(h.A, {
                id: "restricted.aeonCreationTarget.retryEnvironmentLoad",
                defaultMessage: "Retry",
                description: "Action to retry loading cloud environments",
              })),
              (o[4] = r))
            : (r = o[4]),
          o[5] !== t
            ? ((a = (0, n.jsxs)(n.Fragment, { children: [e, (0, n.jsx)(S.ms.Item, { onSelect: t, children: r })] })),
              (o[5] = t),
              (o[6] = a))
            : (a = o[6]),
          a
        )
      }
      if (s?.length === 0) {
        let e
        return (
          o[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(S.ms.Message, {
                compact: !0,
                children: (0, n.jsx)(h.A, {
                  id: "restricted.aeonCreationTarget.noEnvironments",
                  defaultMessage: "No environments available",
                  description: "Empty state when no cloud environments are registered for the user",
                }),
              })),
              (o[7] = e))
            : (e = o[7]),
          e
        )
      }
      if (null == s) return null
      if (o[8] !== s || o[9] !== a) {
        let t
        ;(o[11] !== a
          ? ((t = (e) => {
              let t = "connected" === e.status
              return (0, n.jsx)(
                S.ms.Item,
                {
                  onSelect: () => {
                    ;(0, A.Oe)(a, e.environmentId, a.get(T.S))
                  },
                  rightIcon: (0, n.jsx)("span", {
                    className: t
                      ? "size-2 shrink-0 rounded-full bg-chart-green"
                      : "size-2 shrink-0 rounded-full bg-codex-description",
                    children: (0, n.jsx)("span", {
                      className: "sr-only",
                      children: t
                        ? (0, n.jsx)(h.A, {
                            id: "restricted.aeonCreationTarget.executorConnected",
                            defaultMessage: "Connected",
                            description: "Accessible status for an executor connected to the registry",
                          })
                        : (0, n.jsx)(h.A, {
                            id: "restricted.aeonCreationTarget.executorNotConnected",
                            defaultMessage: "Not connected",
                            description: "Accessible status for an executor not connected to the registry",
                          }),
                    }),
                  }),
                  children: e.displayName,
                },
                e.environmentId,
              )
            }),
            (o[11] = a),
            (o[12] = t))
          : (t = o[12]),
          (e = s.map(t)),
          (o[8] = s),
          (o[9] = a),
          (o[10] = e))
      } else e = o[10]
      let u = e
      return (o[13] !== u ? ((t = (0, n.jsx)(n.Fragment, { children: u })), (o[13] = u), (o[14] = t)) : (t = o[14]), t)
    }
    var O = o("UlP1"),
      U = o("T9N0"),
      B = o("o2hF"),
      F = o("tz0P")
    function W(e) {
      let t,
        o,
        a,
        s,
        i,
        l,
        c,
        u,
        g,
        f,
        x,
        w,
        v,
        j = (0, r.c)(49),
        { allowProvisioning: b } = e,
        I = void 0 === b || b,
        L = (0, d.gh)(P.GD),
        R = (0, k.A)()
      ;(0, p.Zp)()
      let W = (0, d.Ul)(T.S),
        q = (0, d._U)(A.LI, W),
        G = (0, d._U)(A.y_, W),
        z = (0, d.Ul)(N.qL),
        [Q, K] = (0, m.useState)(""),
        [V, $] = (0, m.useState)(!1)
      j[0] !== I || j[1] !== R || j[2] !== z
        ? ((t = I || null == z ? null : (0, N.m)(R).find((e) => e.managedEnvironmentDefinition === z)?.name),
          (j[0] = I),
          (j[1] = R),
          (j[2] = z),
          (j[3] = t))
        : (t = j[3])
      let Z = t,
        J = (I ? null : G?.name) ?? q?.displayName ?? Z
      j[4] !== I || j[5] !== L
        ? ((o = (e) => {
            ;(e && !I && (0, F.Nb)(L).catch(H), $(e), e || K(""))
          }),
          (j[4] = I),
          (j[5] = L),
          (j[6] = o))
        : (o = j[6])
      let Y = I ? "tall" : "available"
      return (
        j[7] !== R || j[8] !== J
          ? ((a =
              null == J
                ? R.formatMessage(D.selectEnvironment)
                : R.formatMessage(
                    {
                      id: "restricted.aeonComposer.environmentSelection",
                      defaultMessage: "Environment: {environment}",
                      description: "Accessible label for the selected cloud execution environment",
                    },
                    { environment: J },
                  )),
            (j[7] = R),
            (j[8] = J),
            (j[9] = a))
          : (a = j[9]),
        j[10] !== I
          ? ((s = I ? (0, n.jsx)(y.I, { "aria-hidden": !1, asset: C.x }) : (0, n.jsx)(M.zYJ, {})),
            (j[10] = I),
            (j[11] = s))
          : (s = j[11]),
        j[12] !== J ? ((i = J ?? (0, n.jsx)(h.A, { ...D.selectEnvironment })), (j[12] = J), (j[13] = i)) : (i = j[13]),
        j[14] !== a || j[15] !== s || j[16] !== i
          ? ((l = (0, n.jsx)(_.P, {
              "aria-label": a,
              categoryLabel: null,
              collapse: "xs",
              icon: s,
              indicator: "chevron",
              value: i,
              valueClassName: "max-w-40",
            })),
            (j[14] = a),
            (j[15] = s),
            (j[16] = i),
            (j[17] = l))
          : (l = j[17]),
        j[18] !== I || j[19] !== R || j[20] !== Q
          ? ((c = I
              ? null
              : (0, n.jsx)(S.ms.SearchInput, {
                  placeholder: R.formatMessage({
                    id: "restricted.cloudThreadPrototype.environmentPicker.search",
                    defaultMessage: "Search environments",
                    description: "Search input placeholder in the Cloud v2 environment dropdown",
                  }),
                  autoFocus: !0,
                  value: Q,
                  onChange: (e) => K(e.target.value),
                })),
            (j[18] = I),
            (j[19] = R),
            (j[20] = Q),
            (j[21] = c))
          : (c = j[21]),
        j[22] !== I ? ((u = I ? null : (0, n.jsx)(S.ms.Separator, {})), (j[22] = I), (j[23] = u)) : (u = j[23]),
        j[24] !== I || j[25] !== V || j[26] !== Q
          ? ((g = V && !I ? (0, n.jsx)(O.g, { children: (0, n.jsx)(B.i, { searchQuery: Q }) }) : null),
            (j[24] = I),
            (j[25] = V),
            (j[26] = Q),
            (j[27] = g))
          : (g = j[27]),
        j[28] !== I || j[29] !== V || j[30] !== L || j[31] !== J
          ? ((f = I
              ? (0, n.jsxs)(S.ms.Section, {
                  children: [
                    (0, n.jsx)(S.ms.Item, {
                      LeftIcon: M.LL7,
                      RightIcon: null == J ? M.ALZ : void 0,
                      onSelect: () => {
                        ;(0, A.r2)(L, L.get(T.S))
                      },
                      children: (0, n.jsx)(h.A, {
                        id: "restricted.aeonCreationTarget.noEnvironment",
                        defaultMessage: "No environment",
                        description: "Option to create a cloud task without a selected executor environment",
                      }),
                    }),
                    V ? (0, n.jsx)(E, {}) : null,
                  ],
                })
              : null),
            (j[28] = I),
            (j[29] = V),
            (j[30] = L),
            (j[31] = J),
            (j[32] = f))
          : (f = j[32]),
        j[33] !== I ? ((x = null), (j[33] = I), (j[34] = x)) : (x = j[34]),
        j[35] !== I || j[36] !== L
          ? ((w = I
              ? null
              : (0, n.jsxs)("div", {
                  className: "shrink-0",
                  children: [
                    (0, n.jsx)(S.ms.Separator, {}),
                    (0, n.jsx)(S.ms.Item, {
                      LeftIcon: M.xFs,
                      onSelect: () => (0, U.h)(L),
                      children: (0, n.jsx)(h.A, {
                        id: "restricted.cloudThreadPrototype.environmentPicker.create",
                        defaultMessage: "Create new",
                        description: "Menu item that opens Cloud v2 environment creation",
                      }),
                    }),
                    null,
                  ],
                })),
            (j[35] = I),
            (j[36] = L),
            (j[37] = w))
          : (w = j[37]),
        j[38] !== V ||
        j[39] !== u ||
        j[40] !== g ||
        j[41] !== f ||
        j[42] !== x ||
        j[43] !== w ||
        j[44] !== o ||
        j[45] !== Y ||
        j[46] !== l ||
        j[47] !== c
          ? ((v = (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)(S.Ab, {
                open: V,
                onOpenChange: o,
                side: "top",
                contentWidth: "panel",
                contentMaxHeight: Y,
                triggerButton: l,
                children: [c, u, g, f, x, w],
              }),
            })),
            (j[38] = V),
            (j[39] = u),
            (j[40] = g),
            (j[41] = f),
            (j[42] = x),
            (j[43] = w),
            (j[44] = o),
            (j[45] = Y),
            (j[46] = l),
            (j[47] = c),
            (j[48] = v))
          : (v = j[48]),
        v
      )
    }
    function H() {}
    let D = (0, I.YK)({
      selectEnvironment: {
        id: "restricted.aeonComposer.selectEnvironment",
        defaultMessage: "Select environment",
        description: "Cloud execution environment picker when none is selected",
      },
    })
    var q = o("nPCK"),
      G = o("KDSd"),
      z = o("cIfC"),
      Q = o("MI1z"),
      K = o("an0a"),
      V = o("m22M"),
      $ = o("nn0H"),
      Z = o("s37w"),
      J = o("DJRx"),
      Y = o("OWtl"),
      X = o("Sd8U"),
      ee = o("ndjw"),
      et = o("TlLQ"),
      eo = o("fnPc"),
      en = o("qixt"),
      er = o("kfGJ"),
      ea = o("hZax"),
      es = o("OMIV"),
      ei = o("V0vl"),
      el = o("LcvC"),
      ec = o("nGkJ"),
      ed = o("ZaUy"),
      eu = o("Tfl2"),
      em = o("Bjk4"),
      eh = o("TSib")
    function ep(e) {
      let t,
        o,
        s,
        i,
        c,
        u,
        p,
        g,
        f,
        x,
        w,
        v,
        j,
        b,
        C,
        I,
        M,
        N,
        L = (0, r.c)(45),
        { composerMode: A, setComposerMode: T } = e,
        P = (0, d.gh)(X.PR),
        R = (0, k.A)(),
        E = (0, d.Ul)(em.f),
        [O, U] = (0, m.useState)(!1),
        B = (0, K.K5)(),
        F = (0, d.Ul)(J.AQ)
      ;(L[0] !== B.cwd || L[1] !== B.hostConfig
        ? ((t = null == B.cwd ? null : { cwd: B.cwd, hostConfig: B.hostConfig }),
          (L[0] = B.cwd),
          (L[1] = B.hostConfig),
          (L[2] = t))
        : (t = L[2]),
        L[3] !== F ? ((o = { retainRepoWatch: F }), (L[3] = F), (L[4] = o)) : (o = L[4]))
      let { data: W, isLoading: H } = (0, z.E)(t, "cloud_follow_up_local_remote_dropdown", o),
        D = W?.root != null,
        q = E?.type === "cloud" && E.hasAppliedCodeLocally
      ;(L[5] !== q || L[6] !== P
        ? ((s = () => {
            q && (0, eh.pX)(P, "local")
          }),
          (i = [q, P]),
          (L[5] = q),
          (L[6] = P),
          (L[7] = s),
          (L[8] = i))
        : ((s = L[7]), (i = L[8])),
        (0, m.useEffect)(s, i),
        L[9] !== D || L[10] !== H || L[11] !== P
          ? ((c = () => {
              H || D || (0, eh.pX)(P, "local")
            }),
            (u = [D, H, P]),
            (L[9] = D),
            (L[10] = H),
            (L[11] = P),
            (L[12] = c),
            (L[13] = u))
          : ((c = L[12]), (u = L[13])),
        (0, m.useEffect)(c, u),
        L[14] !== A
          ? ((p = "local" === A ? (0, n.jsx)(h.A, { ...eg.local }) : (0, n.jsx)(h.A, { ...eg.cloud })),
            (L[14] = A),
            (L[15] = p))
          : (p = L[15]))
      let G = p
      L[16] !== R ? ((g = R.formatMessage(eg.tooltip)), (L[16] = R), (L[17] = g)) : (g = L[17])
      let Q = g
      ;(L[18] !== A
        ? ((f =
            "cloud" === A
              ? (0, n.jsx)(y.I, { "aria-hidden": !1, asset: eu.f })
              : (0, n.jsx)(y.I, { "aria-hidden": !1, asset: l.g })),
          (L[18] = A),
          (L[19] = f))
        : (f = L[19]),
        L[20] !== G || L[21] !== f || L[22] !== Q
          ? ((x = (0, n.jsx)(_.P, {
              "aria-label": Q,
              "data-composer-navigation-target": "run-location",
              categoryLabel: null,
              collapse: "xs",
              icon: f,
              indicator: "chevron",
              value: G,
              valueClassName: "max-w-40",
            })),
            (L[20] = G),
            (L[21] = f),
            (L[22] = Q),
            (L[23] = x))
          : (x = L[23]),
        L[24] !== x || L[25] !== Q
          ? ((w = (0, n.jsx)(a.m, { content: Q, children: x })), (L[24] = x), (L[25] = Q), (L[26] = w))
          : (w = L[26]),
        L[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, n.jsx)(S.ms.Title, {
              children: (0, n.jsx)(h.A, {
                id: "composer.cloudFollowUp.header",
                defaultMessage: "Run follow-up in",
                description: "Header above the local and cloud execution choices for a cloud chat follow-up",
              }),
            })),
            (L[27] = v))
          : (v = L[27]))
      let V = "local" === A ? ed.G : void 0
      return (
        L[28] !== T
          ? ((j = () => {
              ;(T("local"), U(!1))
            }),
            (L[28] = T),
            (L[29] = j))
          : (j = L[29]),
        L[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, n.jsx)(h.A, { ...eg.local })), (L[30] = b))
          : (b = L[30]),
        L[31] !== V || L[32] !== j
          ? ((C = (0, n.jsx)(S.ms.Item, { leftIconAsset: l.g, rightIconAsset: V, onClick: j, children: b })),
            (L[31] = V),
            (L[32] = j),
            (L[33] = C))
          : (C = L[33]),
        L[34] !== A || L[35] !== D || L[36] !== T
          ? ((I = D
              ? (0, n.jsx)(S.ms.Item, {
                  leftIconAsset: eu.f,
                  rightIconAsset: "cloud" === A ? ed.G : void 0,
                  onClick: () => {
                    ;(T("cloud"), U(!1))
                  },
                  children: (0, n.jsx)(h.A, { ...eg.cloud }),
                })
              : null),
            (L[34] = A),
            (L[35] = D),
            (L[36] = T),
            (L[37] = I))
          : (I = L[37]),
        L[38] !== C || L[39] !== I
          ? ((M = (0, n.jsxs)("div", { className: "flex w-44 flex-col", children: [v, C, I] })),
            (L[38] = C),
            (L[39] = I),
            (L[40] = M))
          : (M = L[40]),
        L[41] !== O || L[42] !== w || L[43] !== M
          ? ((N = (0, n.jsx)(S.Ab, { open: O, onOpenChange: U, triggerButton: w, children: M })),
            (L[41] = O),
            (L[42] = w),
            (L[43] = M),
            (L[44] = N))
          : (N = L[44]),
        N
      )
    }
    let eg = (0, I.YK)({
      local: { id: "composer.cloudFollowUp.local", defaultMessage: "Local", description: "Local follow-up option" },
      cloud: { id: "composer.cloudFollowUp.cloud", defaultMessage: "Cloud", description: "Cloud follow-up option" },
      tooltip: {
        id: "composer.cloudFollowUp.whereRun",
        defaultMessage: "Where should this follow-up run?",
        description: "Tooltip for choosing between local and cloud follow-ups",
      },
    })
    var ef = o("Tm9N"),
      ex = o("GFhl"),
      ew = o("lUSA"),
      ev = o("TsA5"),
      ej = o("hKaE"),
      eb = o("Qvp9"),
      ey = o("G30s"),
      eC = o("SaFz"),
      ek = o("GaA7"),
      eI = o("q77y"),
      e_ = o("rvFo")
    let eS = (0, d.RD)(Y.u, () => ({
      queryKey: eC.rL,
      enabled: ek.appServices?.runtimeInfo != null,
      networkMode: "always",
      queryFn: async () => {
        let e = ek.appServices?.runtimeInfo
        if (null == e) throw Error("Local runtime information is unavailable")
        return (0, eI.P)(e.getCliInfo())
      },
      staleTime: e_.D.FIVE_SECONDS,
    }))
    function eM() {
      let e,
        t,
        o = (0, r.c)(2),
        { data: s } = (0, d.Ul)(eS)
      return s?.hasCustomCliExecutable
        ? (o[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(h.A, {
                id: "composer.customCliTooltip",
                defaultMessage: "Using a custom CLI executable",
                description:
                  "Tooltip text shown when the user has set a custom Codex CLI executable in their VS Code settings.",
              })),
              (o[0] = e))
            : (e = o[0]),
          o[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsx)(a.m, {
                content: e,
                children: (0, n.jsx)(b.$, {
                  color: "ghost",
                  size: "composerSm",
                  uniform: !0,
                  className: "-mx-2",
                  children: (0, n.jsx)(y.I, { className: "text-warning", "aria-hidden": !1, asset: ey.B }),
                }),
              })),
              (o[1] = t))
            : (t = o[1]),
          t)
        : null
    }
    var eN = o("Npvw"),
      eL = o("jEN2"),
      eA = o("uaLq"),
      eT = o("iRMi"),
      eP = o("JP04")
    let eR = (0, o("iJY0").a)({
      name: "arrow-up-arrow-down-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.475098, y: 2.784668, width: 13.049316, height: 10.513672 },
        visualBounds: { x: 1.475098, y: 2.784668, width: 13.049316, height: 10.513672 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.475098, y: 2.784668, width: 13.049316, height: 10.513672 },
        center: { x: 7.999756, y: 8.041504 },
        insets: { top: 2.784668, right: 1.475586, bottom: 2.70166, left: 1.475098 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999756, y: 8.041504 }, foreground: { x: 7.999756, y: 8.041504 } },
      },
      capabilities: ["icon"],
      body: '<path d="M11.3337 3.14212C11.6235 3.14232 11.8591 3.37768 11.8591 3.66751V11.6284L13.6247 9.82571C13.8274 9.61884 14.1597 9.61565 14.3669 9.8179C14.574 10.0207 14.5775 10.3529 14.3747 10.5601L11.947 13.0406L11.8815 13.1011C11.5648 13.3644 11.1027 13.3642 10.7858 13.1011L10.7204 13.0406L8.2917 10.5601C8.08925 10.3529 8.09248 10.0206 8.29951 9.8179C8.50656 9.61544 8.83889 9.61903 9.0417 9.82571L10.8083 11.6304V3.66751C10.8083 3.37756 11.0437 3.14212 11.3337 3.14212Z" fill="currentColor"/> <path d="M4.11884 2.98196C4.43556 2.71891 4.89784 2.7189 5.21455 2.98196L5.27998 3.04251L7.70771 5.52298C7.91057 5.73015 7.90707 6.06231 7.6999 6.26517C7.4927 6.46757 7.16042 6.46437 6.95771 6.25735L5.19209 4.45364V12.3335C5.19182 12.6233 4.95648 12.8589 4.6667 12.8589C4.37696 12.8589 4.14157 12.6232 4.1413 12.3335V4.45169L2.3747 6.25735C2.17187 6.4642 1.8396 6.46777 1.63252 6.26517C1.42572 6.06238 1.42222 5.73008 1.6247 5.52298L4.05341 3.04251L4.11884 2.98196Z" fill="currentColor"/>',
    })
    var eE = o("mnJS"),
      eO = o("KjMy")
    function eU(e) {
      let t,
        o,
        a,
        s = (0, r.c)(8),
        { onSelect: i } = e,
        l = (0, d.gh)(X.PR),
        c = (0, d.Ul)(w.TC),
        u = (0, d.Ul)(w.RB)
      if (!c) return null
      let m = u ? ed.G : void 0
      return (
        s[0] !== i || s[1] !== l || s[2] !== u
          ? ((t = () => {
              ;(i(), u || (0, A.r2)(l, l.get(T.S)), (0, w.wJ)(l, !0))
            }),
            (s[0] = i),
            (s[1] = l),
            (s[2] = u),
            (s[3] = t))
          : (t = s[3]),
        s[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (0, n.jsx)(h.A, {
              id: "restricted.cloudThreadPrototype.menuLabel",
              defaultMessage: "Cloud",
              description:
                "Run location menu option for a cloud-hosted Codex task without access to the user's computer",
            })),
            (s[4] = o))
          : (o = s[4]),
        s[5] !== m || s[6] !== t
          ? ((a = (0, n.jsx)(S.ms.Item, { LeftIcon: M.LL7, rightIconAsset: m, onSelect: t, children: o })),
            (s[5] = m),
            (s[6] = t),
            (s[7] = a))
          : (a = s[7]),
        a
      )
    }
    function eB() {
      let e,
        t = (0, r.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)(h.A, {
              id: "restricted.cloudThreadPrototype.runLocation",
              defaultMessage: "Cloud",
              description:
                "Run location for an experimental cloud-hosted Codex task without access to the user's computer",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    var eF = o("OAkO"),
      eW = o("X6Vn"),
      eH = o("UxN3"),
      eD = o("koMX"),
      eq = o("OTo8"),
      eG = o("jFi9"),
      ez = o("laUo"),
      eQ = o("ae6t"),
      eK = o("gPv1"),
      eV = o("Uhbj"),
      e$ = o("GfpB"),
      eZ = o("tZWf"),
      eJ = o("up6K"),
      eY = (e) =>
        (0, n.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: 12,
          height: 10,
          fill: "none",
          viewBox: "0 0 12 10",
          ...e,
          children: (0, n.jsx)("path", {
            fill: "currentColor",
            d: "M2.4 9.332V1.817L.91 3.31a.533.533 0 0 1-.753-.753l2.4-2.4.083-.068a.533.533 0 0 1 .67.068l2.4 2.4.068.083a.533.533 0 0 1-.738.738l-.083-.068-1.492-1.492v7.515a.532.532 0 0 1-1.064 0Zm5.92-8.8a.532.532 0 0 1 1.064 0v7.516l1.492-1.492.084-.068a.533.533 0 0 1 .668.82l-2.4 2.4a.532.532 0 0 1-.752 0l-2.4-2.4a.533.533 0 0 1 .752-.752l1.493 1.492V.532Z",
          }),
        }),
      eX = o("Tigz"),
      e1 = o("mlUK"),
      e0 = o("BWia"),
      e2 = o("LrRJ"),
      e4 = o("yGJW"),
      e3 = o("aqTO"),
      e5 = o("KxVC"),
      e6 = o("AzNg"),
      e7 = o("imHa"),
      e8 = o("hQzs"),
      e9 = o("NGQf"),
      te = o("F9Qp"),
      tt = o("OSwV"),
      to = o("By8V"),
      tn = o("w487")
    o("Na0v")
    var tr = o("V7vi"),
      ta = o("iaBG"),
      ts = o("gPaQ")
    let ti = (0, m.memo)(function (e) {
      let t,
        o,
        a,
        i,
        c,
        p,
        f,
        x,
        v,
        j,
        b,
        C,
        I,
        N,
        L,
        A,
        P,
        R,
        E,
        O,
        U,
        B,
        F,
        W,
        H,
        D,
        q,
        G,
        z,
        Q,
        V,
        $,
        J = (0, r.c)(163),
        {
          composerMode: Y,
          worktreePromptContext: et,
          setComposerMode: eo,
          conversationId: es,
          executionTargetOverride: ei,
          remoteSelectionState: el,
          isWorktreeAvailable: ec,
          threadHandoff: ed,
          allowWorktree: eu,
          defaultOpen: em,
          disabled: ep,
          hideModeDropdown: eg,
          worktreeLabelOnly: ef,
          side: ex,
          onOpenChange: ew,
        } = e,
        ev = void 0 !== ep && ep,
        ej = void 0 !== eg && eg,
        eb = void 0 !== ef && ef,
        ey = void 0 === ex ? "top" : ex,
        eC = (0, d.gh)(X.PR),
        ek = (0, d.Ul)(w.TC),
        eI = (0, d.Ul)(w.RB)
      ;((0, d._U)(g.Qk, null), (0, d._U)(g.W3, null))
      let e_ = eI || !1,
        eS = (0, d.Ul)(eh.ji),
        [eM, eL] = (0, m.useState)(void 0 !== em && em),
        eA = eM || "composer" === eS,
        eT = (0, k.A)(),
        eR = (0, ea.Zj)("505458"),
        eE = (0, ea.Zj)("2256010998"),
        eU = (0, e2.U)(es),
        eH = eE || eU?.direction === "to-host-worktree",
        eq = (0, K.K5)(es),
        eG = ei ?? eq,
        ez = (0, Z.Q)()
      J[0] !== eG.cwd || J[1] !== ez || J[2] !== el
        ? ((t = (function ({ executionTargetCwd: e, remoteSelectionState: t, remoteConnections: o }) {
            let { existingRemoteThreadState: n, draftNewThreadRemoteSelectionState: r } = t
            if (t.isAttachedToStartedTask)
              return n.hostId === er.fI
                ? null
                : {
                    hostId: n.hostId,
                    connectionDisplayName: n.connectionDisplayName ?? tw(o, n.hostId),
                    projectPath: n.projectPath ?? e,
                  }
            let a = r?.hostId ?? null,
              s = r?.projectPath ?? null
            return null == a || a === er.fI || null == s
              ? null
              : { hostId: a, connectionDisplayName: r?.connectionDisplayName ?? tw(o, a), projectPath: s }
          })({ executionTargetCwd: eG.cwd, remoteSelectionState: el, remoteConnections: ez })),
          (J[0] = eG.cwd),
          (J[1] = ez),
          (J[2] = el),
          (J[3] = t))
        : (t = J[3])
      let eQ = t,
        eK = null != eQ
      J[4] !== eG.cwd || J[5] !== eG.hostConfig || J[6] !== eG.hostId
        ? ((o = { cwd: eG.cwd, hostId: eG.hostId, hostConfig: eG.hostConfig, surface: "menu" }),
          (J[4] = eG.cwd),
          (J[5] = eG.hostConfig),
          (J[6] = eG.hostId),
          (J[7] = o))
        : (o = J[7])
      let { data: eV, isLoading: e$ } = (0, d._U)(eN.I9, o),
        eZ = eV?.root != null,
        eJ = "project" === (0, d._U)(g.EL, es) && eZ ? ed : null,
        eY = eV?.root ?? null,
        { data: eX } = (0, d.Ul)(ee.zk),
        e4 = eH && eA && eG.hostId !== er.fI ? eX?.roots : void 0
      ;(J[8] !== e4 ? ((a = e4 ?? []), (J[8] = e4), (J[9] = a)) : (a = J[9]),
        J[10] !== a
          ? ((i = { params: { hostId: er.fI, dirs: a }, source: "local_remote_dropdown" }), (J[10] = a), (J[11] = i))
          : (i = J[11]))
      let { data: e8 } = (0, d._U)(eD.gitOriginsQuery$, i)
      ;(J[12] !== eG.cwd ? ((c = null == eG.cwd ? [] : [eG.cwd]), (J[12] = eG.cwd), (J[13] = c)) : (c = J[13]),
        J[14] !== eG.hostId || J[15] !== c
          ? ((p = { params: { hostId: eG.hostId, dirs: c }, source: "local_remote_dropdown" }),
            (J[14] = eG.hostId),
            (J[15] = c),
            (J[16] = p))
          : (p = J[16]))
      let { data: e9 } = (0, d._U)(eD.gitOriginsQuery$, p)
      J[17] !== eG.cwd || J[18] !== eY || J[19] !== e8?.origins || J[20] !== e4 || J[21] !== e9?.origins
        ? ((f =
            null == e4
              ? null
              : (0, e6.QE)({
                  sourceWorkspaceRoot: eG.cwd,
                  sourceGitRoot: eY,
                  sourceGitOrigins: e9?.origins,
                  destinationWorkspaceRoots: e4,
                  destinationGitOrigins: e8?.origins,
                })),
          (J[17] = eG.cwd),
          (J[18] = eY),
          (J[19] = e8?.origins),
          (J[20] = e4),
          (J[21] = e9?.origins),
          (J[22] = f))
        : (f = J[22])
      let te = f,
        tt = null != eQ && eQ.hostId !== u.iwv,
        tr = !ev && !ej,
        ts = (0, ea.Zj)("3724118644"),
        ti = (0, d.Ul)(en.e2),
        td = (0, ea.Zj)("2785238453"),
        tu = (0, d._U)(eF.mY, et),
        tm = "worktree" === Y || (tu && !td),
        th = eZ && void 0 !== eu && eu && eR,
        tg = (0, d.Ul)(T.S),
        tv = Math.max((0, d._U)(ee.g, tg).length - 1, 0),
        tj = tv > 0,
        tb = (0, e7.S)(eY ?? eG.cwd ?? ""),
        ty = eK ? tx.remoteWorktreeModeForRepository : tx.worktreeModeForRepository
      J[23] !== eT
        ? ((x = eT.formatMessage({
            id: "composer.mode.remote",
            defaultMessage: "Remote",
            description: "Remote mode label",
          })),
          (J[23] = eT),
          (J[24] = x))
        : (x = J[24])
      let tC = x,
        tk = eQ?.hostId
      e: {
        let e, t, o
        if (null == tk) {
          let e
          ;(J[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = { 16: M.gkn, 20: M.$G3 }), (J[25] = e))
            : (e = J[25]),
            (v = e))
          break e
        }
        J[26] !== tk
          ? ((e = (e) => {
              let { className: t } = e
              return (0, n.jsx)(e5.z, { className: t, hostId: tk, size: 16 })
            }),
            (J[26] = tk),
            (J[27] = e))
          : (e = J[27])
        let r = e
        J[28] !== tk
          ? ((t = (e) => {
              let { className: t } = e
              return (0, n.jsx)(e5.z, { className: t, hostId: tk, size: 20 })
            }),
            (J[28] = tk),
            (J[29] = t))
          : (t = J[29])
        let a = t
        ;(J[30] !== r || J[31] !== a ? ((o = { 16: r, 20: a }), (J[30] = r), (J[31] = a), (J[32] = o)) : (o = J[32]),
          (v = o))
      }
      let tI = v
      J[33] !== eT || J[34] !== eK
        ? ((j = eK ? eT.formatMessage(tx.startInRemote) : eT.formatMessage(tx.workLocally)),
          (J[33] = eT),
          (J[34] = eK),
          (J[35] = j))
        : (j = J[35])
      let t_ = j,
        tS = eT.formatMessage(tj ? tx.worktreeTooltipForMultiRootProject : tx.worktreeTooltipForRepository, {
          repoName: tb,
        })
      J[36] !== Y || J[37] !== eC || J[38] !== eo || J[39] !== tu || J[40] !== tm
        ? ((b = () => {
            let e = tm ? "local" : "worktree"
            ;((0, ta.r)(eC, Y, e, "keyboard-shortcut", tu), eo(e))
          }),
          (J[36] = Y),
          (J[37] = eC),
          (J[38] = eo),
          (J[39] = tu),
          (J[40] = tm),
          (J[41] = b))
        : (b = J[41])
      let tM = tr && th && !td
      ;(J[42] !== tM ? ((C = { enabled: tM }), (J[42] = tM), (J[43] = C)) : (C = J[43]),
        (0, tn.Kr)("composer.toggleWorktreeMode", b, C),
        J[44] !== eT
          ? ((I = eT.formatMessage({
              id: "composer.mode.localSlashCommand.description",
              defaultMessage: "Run this chat locally",
              description: "Description for the local mode slash command",
            })),
            (J[44] = eT),
            (J[45] = I))
          : (I = J[45]),
        J[46] !== tk ? ((N = [tk]), (J[46] = tk), (J[47] = N)) : (N = J[47]))
      let tN = tr && ("local" !== Y || tu)
      J[48] !== Y || J[49] !== eC || J[50] !== eo || J[51] !== tu
        ? ((L = async () => {
            ;((0, ta.r)(eC, Y, "local", "slash-command", tu), eo("local"))
          }),
          (J[48] = Y),
          (J[49] = eC),
          (J[50] = eo),
          (J[51] = tu),
          (J[52] = L))
        : (L = J[52])
      let tL = L
      ;(J[53] !== tI || J[54] !== t_ || J[55] !== I || J[56] !== N || J[57] !== tN || J[58] !== tL
        ? ((A = {
            id: "local",
            title: t_,
            description: I,
            requiresEmptyComposer: !1,
            Icon: tI,
            dependencies: N,
            enabled: tN,
            onSelect: tL,
          }),
          (J[53] = tI),
          (J[54] = t_),
          (J[55] = I),
          (J[56] = N),
          (J[57] = tN),
          (J[58] = tL),
          (J[59] = A))
        : (A = J[59]),
        (0, to.r6)(A))
      let tA = eT.formatMessage(ty, { repoName: tb })
      ;(J[60] !== eT || J[61] !== ts || J[62] !== tm
        ? ((P =
            ts && tm
              ? eT.formatMessage({
                  id: "composer.worktreeSlashCommand.disableDescription",
                  defaultMessage: "Turn worktree mode off",
                  description:
                    "Description for the worktree slash command when the new chat is set to run in a worktree",
                })
              : eT.formatMessage({
                  id: "composer.mode.worktreeSlashCommand.description",
                  defaultMessage: "Run this chat in a new worktree",
                  description: "Description for the worktree mode slash command",
                })),
          (J[60] = eT),
          (J[61] = ts),
          (J[62] = tm),
          (J[63] = P))
        : (P = J[63]),
        J[64] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = { assets: { 16: s.T, 20: eP.w } }), (J[64] = R))
          : (R = J[64]))
      let tT = tr && th && !ti && (!ts || !td) && (ts || !tm)
      J[65] !== Y || J[66] !== eC || J[67] !== eo || J[68] !== tu || J[69] !== tm
        ? ((E = async () => {
            let e = tm ? "local" : "worktree"
            ;((0, ta.r)(eC, Y, e, "slash-command", tu), eo(e))
          }),
          (J[65] = Y),
          (J[66] = eC),
          (J[67] = eo),
          (J[68] = tu),
          (J[69] = tm),
          (J[70] = E))
        : (E = J[70])
      let tP = E
      ;(J[71] !== tA || J[72] !== P || J[73] !== tT || J[74] !== tP
        ? ((O = {
            id: "worktree",
            title: tA,
            description: P,
            requiresEmptyComposer: !1,
            Icon: R,
            enabled: tT,
            onSelect: tP,
          }),
          (J[71] = tA),
          (J[72] = P),
          (J[73] = tT),
          (J[74] = tP),
          (J[75] = O))
        : (O = J[75]),
        (0, to.r6)(O),
        J[76] === Symbol.for("react.memo_cache_sentinel")
          ? ((U = (0, n.jsx)("span", {
              className: "inline-flex min-w-0 items-center gap-1",
              children: (0, n.jsx)("span", {
                className: "truncate",
                children: (0, n.jsx)(h.A, { ...tx.worktreeSegment }),
              }),
            })),
            (J[76] = U))
          : (U = J[76]))
      let tR = U
      J[77] !== ew || J[78] !== eS || J[79] !== eC
        ? ((B = (e) => {
            ;(e || "composer" !== eS || eC.set(eh.ji, null), eL(e), ew?.(e))
          }),
          (J[77] = ew),
          (J[78] = eS),
          (J[79] = eC),
          (J[80] = B))
        : (B = J[80])
      let tE = B
      J[81] !== es || J[82] !== eG || J[83] !== eY || J[84] !== eK || J[85] !== eC || J[86] !== eH || J[87] !== eJ
        ? ((F = () => {
            null != es &&
              null != eJ &&
              (0, eW.qf)(eC, e0.o, {
                conversationId: es,
                composerViewState: eC.get(eh.np),
                executionTarget: eG,
                getActiveWorkspaceRoots: () => eC.get(e3.WW),
                gitRoot: eY,
                isLocalModeRemote: eK,
                threadHandoff: eJ,
                showCrossHostHandoff: eH,
              })
          }),
          (J[81] = es),
          (J[82] = eG),
          (J[83] = eY),
          (J[84] = eK),
          (J[85] = eC),
          (J[86] = eH),
          (J[87] = eJ),
          (J[88] = F))
        : (F = J[88])
      let tO = F
      J[89] !== es || J[90] !== eC || J[91] !== eJ
        ? ((W = (e) => {
            let { currentBranch: t, destinationHostId: o, destinationWorkspaceRoot: n, destinationLabel: r } = e
            null != es &&
              null != eJ &&
              (0, eW.qf)(eC, e1.R, {
                conversationId: es,
                composerViewState: eC.get(eh.np),
                conversationTitle: eJ.conversationTitle,
                currentBranch: t,
                cwd: eJ.cwd,
                destinationHostId: o,
                destinationWorkspaceRoot: (0, u.DIv)(n),
                destinationLabel: r,
              })
          }),
          (J[89] = es),
          (J[90] = eC),
          (J[91] = eJ),
          (J[92] = W))
        : (W = J[92])
      let tU = W
      J[93] !== eQ || J[94] !== e_ || J[95] !== tm
        ? ((H = e_
            ? (0, n.jsx)(M.LL7, {})
            : tm
              ? (0, n.jsx)(y.I, { "aria-hidden": !1, asset: s.T })
              : null != eQ
                ? (0, n.jsx)(y.I, { "aria-hidden": !1, asset: eO.b })
                : (0, n.jsx)(y.I, { "aria-hidden": !1, asset: l.g })),
          (J[93] = eQ),
          (J[94] = e_),
          (J[95] = tm),
          (J[96] = H))
        : (H = J[96])
      let tB = H
      if (e_) {
        let e
        ;(J[97] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, n.jsx)(eB, {})), (J[97] = e)) : (e = J[97]),
          (D = e))
      } else if (tm) {
        let e
        ;(J[98] !== tj || J[99] !== eK || J[100] !== tb
          ? ((e = (0, n.jsx)("span", {
              className: "inline-flex items-center gap-1",
              children: (0, n.jsx)(tl, { hasMultipleProjectRoots: tj, isLocalModeRemote: eK, primaryRepoName: tb }),
            })),
            (J[98] = tj),
            (J[99] = eK),
            (J[100] = tb),
            (J[101] = e))
          : (e = J[101]),
          (D = e))
      } else if (eK) {
        let e
        ;(J[104] !== eK
          ? ((e = (0, n.jsx)(tf, { rateLimit: null, isRemoteHost: eK })), (J[104] = eK), (J[105] = e))
          : (e = J[105]),
          (D = e))
      } else {
        let e, t
        ;(J[102] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, n.jsx)("span", {
              className: "in-data-[composer-placement=home]:hidden",
              children: (0, n.jsx)(tf, { rateLimit: null, isRemoteHost: !1 }),
            })),
            (J[102] = e))
          : (e = J[102]),
          J[103] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, n.jsxs)(n.Fragment, {
                children: [
                  e,
                  (0, n.jsx)("span", {
                    className: "hidden in-data-[composer-placement=home]:inline",
                    children: (0, n.jsx)(h.A, { ...tx.localShort }),
                  }),
                ],
              })),
              (J[103] = t))
            : (t = J[103]),
          (D = t))
      }
      J[106] !== eT ? ((q = eT.formatMessage(tx.localRemoteWhereRun)), (J[106] = eT), (J[107] = q)) : (q = J[107])
      let tF = q
      J[108] !== tF || J[109] !== tB || J[110] !== D
        ? ((G = (0, n.jsx)(_.P, {
            "aria-label": tF,
            "data-composer-navigation-target": "run-location",
            categoryLabel: null,
            collapse: "xs",
            icon: tB,
            indicator: "chevron",
            value: D,
            valueClassName: "max-w-40",
          })),
          (J[108] = tF),
          (J[109] = tB),
          (J[110] = D),
          (J[111] = G))
        : (G = J[111])
      let tW = G
      J[112] !== tv ||
      J[113] !== Y ||
      J[114] !== es ||
      J[115] !== eE ||
      J[116] !== eQ ||
      J[117] !== ev ||
      J[118] !== eG ||
      J[119] !== eY ||
      J[120] !== tE ||
      J[121] !== tj ||
      J[122] !== td ||
      J[123] !== e_ ||
      J[124] !== eK ||
      J[125] !== tt ||
      J[126] !== te ||
      J[127] !== tW ||
      J[128] !== eA ||
      J[129] !== tO ||
      J[130] !== tU ||
      J[131] !== tb ||
      J[132] !== tC ||
      J[133] !== eo ||
      J[134] !== eH ||
      J[135] !== th ||
      J[136] !== ey ||
      J[137] !== eJ ||
      J[138] !== tu ||
      J[139] !== tS
        ? ((z = () =>
            (0, n.jsx)(S.Ab, {
              side: ey,
              disabled: ev,
              open: eA,
              onOpenChange: tE,
              triggerButton: tW,
              children: (0, n.jsx)(tc, {
                worktreePrompt: tu,
                composerMode: Y,
                setComposerMode: eo,
                isCloudThreadPrototypeSelected: e_,
                conversationId: es,
                executionTarget: eG,
                threadHandoff: eJ,
                isRemoteProject: tt,
                isLocalModeRemote: eK,
                currentLocalModeRemoteState: eQ,
                crossHostHandoffEnabled: eE,
                showCrossHostHandoff: eH,
                localWorkspaceRootForHandoff: te,
                remoteLabel: tC,
                showWorktree: th && !td,
                gitRoot: eY,
                additionalProjectFolderCount: tv,
                hasMultipleProjectRoots: tj,
                primaryRepoName: tb,
                worktreeTooltipText: tS,
                closeDropdown: () => tE(!1),
                openHandoffDialog: tO,
                openHostWorktreeHandoffDialog: tU,
              }),
            })),
          (J[112] = tv),
          (J[113] = Y),
          (J[114] = es),
          (J[115] = eE),
          (J[116] = eQ),
          (J[117] = ev),
          (J[118] = eG),
          (J[119] = eY),
          (J[120] = tE),
          (J[121] = tj),
          (J[122] = td),
          (J[123] = e_),
          (J[124] = eK),
          (J[125] = tt),
          (J[126] = te),
          (J[127] = tW),
          (J[128] = eA),
          (J[129] = tO),
          (J[130] = tU),
          (J[131] = tb),
          (J[132] = tC),
          (J[133] = eo),
          (J[134] = eH),
          (J[135] = th),
          (J[136] = ey),
          (J[137] = eJ),
          (J[138] = tu),
          (J[139] = tS),
          (J[140] = z))
        : (z = J[140])
      let tH = z
      J[141] !== es ||
      J[142] !== eE ||
      J[143] !== eG ||
      J[144] !== eY ||
      J[145] !== tE ||
      J[146] !== tj ||
      J[147] !== te ||
      J[148] !== eA ||
      J[149] !== tO ||
      J[150] !== tU ||
      J[151] !== eH ||
      J[152] !== ey ||
      J[153] !== eJ ||
      J[154] !== eb
        ? ((Q = eb
            ? (0, n.jsx)(tp, {
                open: eA,
                onOpenChange: tE,
                side: ey,
                hasMultipleProjectRoots: tj,
                crossHostHandoffEnabled: eE,
                showCrossHostHandoff: eH,
                conversationId: es,
                executionTarget: eG,
                gitRoot: eY,
                threadHandoff: eJ,
                worktreeSegmentLabel: tR,
                openHandoffDialog: tO,
                openHostWorktreeHandoffDialog: tU,
                localWorkspaceRootForHandoff: te,
              })
            : null),
          (J[141] = es),
          (J[142] = eE),
          (J[143] = eG),
          (J[144] = eY),
          (J[145] = tE),
          (J[146] = tj),
          (J[147] = te),
          (J[148] = eA),
          (J[149] = tO),
          (J[150] = tU),
          (J[151] = eH),
          (J[152] = ey),
          (J[153] = eJ),
          (J[154] = eb),
          (J[155] = Q))
        : (Q = J[155])
      let tD = Q,
        tq = ej || (null == es && !eK && !e$ && !eZ && !ek)
      J[156] !== tH || J[157] !== tq || J[158] !== eb || J[159] !== tD
        ? ((V = tq ? null : eb ? tD : tH()), (J[156] = tH), (J[157] = tq), (J[158] = eb), (J[159] = tD), (J[160] = V))
        : (V = J[160])
      let tG = V
      return (
        J[161] !== tG ? (($ = (0, n.jsx)(n.Fragment, { children: tG })), (J[161] = tG), (J[162] = $)) : ($ = J[162]),
        $
      )
    })
    function tl(e) {
      let t,
        o = (0, r.c)(6),
        { hasMultipleProjectRoots: a, isLocalModeRemote: s, primaryRepoName: i } = e
      if (a) {
        let e
        if (s) {
          let e
          return (
            o[0] !== i
              ? ((e = (0, n.jsx)(h.A, { ...tx.remoteWorktreeMenuForRepository, values: { repoName: i } })),
                (o[0] = i),
                (o[1] = e))
              : (e = o[1]),
            e
          )
        }
        return (
          o[2] !== i
            ? ((e = (0, n.jsx)(h.A, { ...tx.worktreeMenuForRepository, values: { repoName: i } })),
              (o[2] = i),
              (o[3] = e))
            : (e = o[3]),
          e
        )
      }
      if (s) {
        let e
        return (
          o[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, n.jsx)(h.A, { ...tx.remoteWorktreeMode })), (o[4] = e))
            : (e = o[4]),
          e
        )
      }
      return (
        o[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(h.A, { ...tx.worktreeMode })), (o[5] = t))
          : (t = o[5]),
        t
      )
    }
    function tc(e) {
      let t,
        o,
        a,
        s,
        i,
        c,
        m,
        p,
        f,
        x,
        v,
        j,
        b,
        C,
        I,
        _,
        M,
        N,
        A,
        T,
        P,
        R,
        E,
        O,
        U,
        B,
        F,
        W,
        H,
        D,
        q = (0, r.c)(153),
        {
          composerMode: G,
          worktreePrompt: z,
          setComposerMode: K,
          isCloudThreadPrototypeSelected: V,
          conversationId: $,
          executionTarget: Z,
          threadHandoff: ee,
          isRemoteProject: et,
          isLocalModeRemote: eo,
          currentLocalModeRemoteState: en,
          crossHostHandoffEnabled: er,
          showCrossHostHandoff: ea,
          localWorkspaceRootForHandoff: es,
          remoteLabel: ei,
          showWorktree: el,
          gitRoot: ec,
          additionalProjectFolderCount: eu,
          hasMultipleProjectRoots: em,
          primaryRepoName: eh,
          worktreeTooltipText: ep,
          closeDropdown: eg,
          openHandoffDialog: ef,
          openHostWorktreeHandoffDialog: ex,
        } = e,
        ew = (0, d.gh)(Y.u),
        ev = (0, d.gh)(X.PR),
        ej = (0, k.A)(),
        { activeMode: eb } = (0, tr.c)($),
        ey = eb?.settings.model ?? null,
        { data: eC } = (0, d.Ul)(eK.Ix),
        ek = void 0 === eC ? null : eC,
        eI = ek?.plan_type
      q[0] !== eI ? ((t = (0, ez.m6)(eI)?.pricePlan ?? null), (q[0] = eI), (q[1] = t)) : (t = q[1])
      let e_ = t,
        eS = (0, eQ.j)()
      q[2] !== e_ || q[3] !== eS
        ? ((o =
            null == e_
              ? void 0
              : (e, t) => {
                  eS({
                    currentPlan: e_,
                    defaultTab: "personal",
                    event: e,
                    getPricingUrl: () => t,
                    source: "composer_runtime_dropdown_rate_limit_summary",
                  })
                }),
          (q[2] = e_),
          (q[3] = eS),
          (q[4] = o))
        : (o = q[4])
      let eM = o,
        eN = ek?.rate_limit,
        eL = ek?.credits
      q[5] !== eI || q[6] !== eN || q[7] !== eL
        ? ((a = (0, e8.vr)(eN, eL, eI)), (q[5] = eI), (q[6] = eN), (q[7] = eL), (q[8] = a))
        : (a = q[8])
      let eA = a
      if (
        q[9] !== eA?.primary?.windowDurationMins ||
        q[10] !== eA?.secondary?.windowDurationMins ||
        q[11] !== ek ||
        q[12] !== ey
      ) {
        let e = (0, e8.mO)(ek),
          t = (0, e8.DS)(ek)
        ;((i = (0, e8._8)(e, { activeLimitName: t, selectedModel: ey })),
          (s = i.find(tu)?.limitName ?? t ?? null),
          (c = (0, e8.Zn)(ek, { activeLimitName: t, selectedModel: ey })),
          (m = i.some(td) || !!eA?.primary?.windowDurationMins || !!eA?.secondary?.windowDurationMins),
          (q[9] = eA?.primary?.windowDurationMins),
          (q[10] = eA?.secondary?.windowDurationMins),
          (q[11] = ek),
          (q[12] = ey),
          (q[13] = s),
          (q[14] = i),
          (q[15] = c),
          (q[16] = m))
      } else ((s = q[13]), (i = q[14]), (c = q[15]), (m = q[16]))
      let eP = m,
        { data: eB } = (0, Q.f)(),
        eF = (0, d.Ul)(J.AQ)
      q[17] !== eF ? ((p = { retainRepoWatch: eF }), (q[17] = eF), (q[18] = p)) : (p = q[18])
      let { data: eW } = (0, eq.v)(ec, Z.hostConfig, "local_remote_dropdown", p)
      q[19] !== eW || q[20] !== ej
        ? ((f = eW ?? ej.formatMessage(tx.fallbackBranch)), (q[19] = eW), (q[20] = ej), (q[21] = f))
        : (f = q[21])
      let eD = f,
        eG = (0, e2.U)($),
        eZ = (0, tt.Vp)(eG),
        eJ = eZ?.direction === "to-host-worktree" ? null : eZ,
        e1 = eZ?.status === "queued" || eZ?.status === "running",
        e0 = eZ?.direction === "to-host-worktree" && e1,
        e3 = (0, d._U)(g.Pz, $),
        { openOperation: e5 } = (0, e2.tC)(),
        e6 = (0, u.n9x)(eo ? null : Z.activeWorkspaceRoot, eB?.codexHome)
      q[22] !== $ || q[23] !== eW || q[24] !== eG || q[25] !== ea || q[26] !== e3
        ? ((x = eW ?? (0, tt.j9)(eG, $) ?? (ea ? e3 : null)),
          (q[22] = $),
          (q[23] = eW),
          (q[24] = eG),
          (q[25] = ea),
          (q[26] = e3),
          (q[27] = x))
        : (x = q[27])
      let e7 = x,
        te = (0, tt.qI)({ codexWorktree: e6, operation: eJ, threadHandoff: ee }),
        to = (0, tt.tq)({
          conversationId: $,
          handoffBranch: e7,
          handoffDirection: te,
          operation: eZ,
          threadHandoff: ee,
        }),
        tn = ee?.isWorktreeConversation === !0,
        ti = to && "to-local" === te,
        tc = to && "to-worktree" === te
      q[28] !== ej || q[29] !== eZ?.status
        ? ((v =
            eZ?.status === "queued" || eZ?.status === "running"
              ? ej.formatMessage({
                  id: "localConversation.threadHandoff.tooltip.viewProgress",
                  defaultMessage: "View progress",
                  description:
                    "Tooltip shown when a chat handoff is in progress and the button reopens the progress view",
                })
              : void 0),
          (q[28] = ej),
          (q[29] = eZ?.status),
          (q[30] = v))
        : (v = q[30])
      let th = v
      q[31] !== eZ
        ? ((j =
            eZ?.status === "queued" || eZ?.status === "running"
              ? (0, n.jsx)(L.y, { className: "icon-2xs" })
              : eZ?.status === "error"
                ? (0, n.jsx)(eH.bF, { "aria-hidden": !1, asset16: eE.m, legacyIcon: e$.A, legacyClassName: "icon-2xs" })
                : eZ?.hasUnseenTerminalState && "warning" === eZ.status
                  ? (0, n.jsx)(eH.bF, {
                      className: "text-warning",
                      "aria-hidden": !1,
                      asset16: eE.m,
                      legacyIcon: e$.A,
                      legacyClassName: "icon-2xs",
                    })
                  : (0, n.jsx)(eH.bF, {
                      className: "rotate-90",
                      "aria-hidden": !1,
                      asset16: eR,
                      legacyIcon: eY,
                      legacyClassName: "icon-2xs",
                    })),
          (q[31] = eZ),
          (q[32] = j))
        : (j = q[32])
      let tp = j
      q[33] !== tp || q[34] !== eZ?.direction
        ? ((b =
            eZ?.direction === "to-host-worktree"
              ? (0, n.jsx)(eH.bF, {
                  className: "rotate-90",
                  "aria-hidden": !1,
                  asset16: eR,
                  legacyIcon: eY,
                  legacyClassName: "icon-2xs",
                })
              : tp),
          (q[33] = tp),
          (q[34] = eZ?.direction),
          (q[35] = b))
        : (b = q[35])
      let tf = b
      q[36] !== e0 || q[37] !== th || q[38] !== ej || q[39] !== eJ
        ? ((C = e0 ? ej.formatMessage(tx.finishCurrentHandoffTooltip) : null != eJ ? th : void 0),
          (q[36] = e0),
          (q[37] = th),
          (q[38] = ej),
          (q[39] = eJ),
          (q[40] = C))
        : (C = q[40])
      let tw = C
      q[41] !== eD || q[42] !== en?.connectionDisplayName || q[43] !== ej || q[44] !== eo || q[45] !== ei
        ? ((I = eo
            ? ej.formatMessage(tx.workRemotelyTooltipWithoutPath, { hostDisplayName: en?.connectionDisplayName ?? ei })
            : ej.formatMessage(tx.workLocallyTooltip, { branchName: eD })),
          (q[41] = eD),
          (q[42] = en?.connectionDisplayName),
          (q[43] = ej),
          (q[44] = eo),
          (q[45] = ei),
          (q[46] = I))
        : (I = q[46])
      let tv = I
      q[47] !== e1 || q[48] !== ej
        ? ((_ = e1 ? ej.formatMessage(tx.finishCurrentHandoffTooltip) : void 0),
          (q[47] = e1),
          (q[48] = ej),
          (q[49] = _))
        : (_ = q[49])
      let tj = _
      q[50] !== eg || q[51] !== ef || q[52] !== e5 || q[53] !== eJ
        ? ((M = () => {
            if ((eg(), null != eJ)) {
              ;(ef(), e5(eJ.id))
              return
            }
            ef()
          }),
          (q[50] = eg),
          (q[51] = ef),
          (q[52] = e5),
          (q[53] = eJ),
          (q[54] = M))
        : (M = q[54])
      let tb = M
      q[55] !== eg ||
      q[56] !== G ||
      q[57] !== ev ||
      q[58] !== tb ||
      q[59] !== ti ||
      q[60] !== ew ||
      q[61] !== K ||
      q[62] !== z
        ? ((N = () => {
            ti
              ? tb()
              : ("local" !== G && (0, e4.yy)(ew, eT.CodexComposerRuntimeChanged, { mode: "local" }),
                (0, ta.r)(ev, G, "local", "native-control", z),
                (0, w.wJ)(ev, !1),
                K("local"),
                eg())
          }),
          (q[55] = eg),
          (q[56] = G),
          (q[57] = ev),
          (q[58] = tb),
          (q[59] = ti),
          (q[60] = ew),
          (q[61] = K),
          (q[62] = z),
          (q[63] = N))
        : (N = q[63])
      let ty = N
      q[64] !== eg ||
      q[65] !== G ||
      q[66] !== ev ||
      q[67] !== Z.hostId ||
      q[68] !== tb ||
      q[69] !== tn ||
      q[70] !== ew ||
      q[71] !== K ||
      q[72] !== tc ||
      q[73] !== z
        ? ((A = () => {
            if (tc) return void tb()
            if (tn) return void eg()
            let e = ev.get(ts.o, Z.hostId)
            ;(G !== e && (0, e4.yy)(ew, eT.CodexComposerRuntimeChanged, { mode: e }),
              (0, ta.r)(ev, G, "worktree", "native-control", z),
              K("worktree"),
              eg())
          }),
          (q[64] = eg),
          (q[65] = G),
          (q[66] = ev),
          (q[67] = Z.hostId),
          (q[68] = tb),
          (q[69] = tn),
          (q[70] = ew),
          (q[71] = K),
          (q[72] = tc),
          (q[73] = z),
          (q[74] = A))
        : (A = q[74])
      let tC = A,
        tk = ea && ((null != $ && null != ee) || eZ?.direction === "to-host-worktree")
      q[75] !== G || q[76] !== Z.hostConfig || q[77] !== ec
        ? ((T = (0, n.jsx)(tg, { composerMode: G, gitRoot: ec, hostConfig: Z.hostConfig })),
          (q[75] = G),
          (q[76] = Z.hostConfig),
          (q[77] = ec),
          (q[78] = T))
        : (T = q[78])
      let tI = T,
        t_ = "local" !== G || (z && el) || V || tn ? void 0 : ed.G,
        tS = ti && null != eJ ? tf : void 0,
        tM = ti ? e0 : e1,
        tN = ti ? tw : (tj ?? tv),
        tL = em ? "me-1.5" : void 0
      ;(q[79] !== en
        ? ((P =
            null != en
              ? (0, n.jsx)(y.I, { "aria-hidden": !1, asset: eO.b })
              : (0, n.jsx)(y.I, { "aria-hidden": !1, asset: l.g })),
          (q[79] = en),
          (q[80] = P))
        : (P = q[80]),
        q[81] !== tL || q[82] !== P
          ? ((R = (0, n.jsx)(S.ms.ItemIcon, { className: tL, size: "xs", children: P })),
            (q[81] = tL),
            (q[82] = P),
            (q[83] = R))
          : (R = q[83]),
        q[84] !== eo
          ? ((E = eo ? (0, n.jsx)(h.A, { ...tx.startInRemote }) : (0, n.jsx)(h.A, { ...tx.localShort })),
            (q[84] = eo),
            (q[85] = E))
          : (E = q[85]),
        q[86] !== ty || q[87] !== t_ || q[88] !== tS || q[89] !== tM || q[90] !== tN || q[91] !== R || q[92] !== E
          ? ((O = (0, n.jsxs)(S.ms.Item, {
              rightIconAsset: t_,
              rightIcon: tS,
              disabled: tM,
              onClick: ty,
              tooltipText: tN,
              children: [R, E],
            })),
            (q[86] = ty),
            (q[87] = t_),
            (q[88] = tS),
            (q[89] = tM),
            (q[90] = tN),
            (q[91] = R),
            (q[92] = E),
            (q[93] = O))
          : (O = q[93]))
      let tA = O
      q[94] !== eg ||
      q[95] !== $ ||
      q[96] !== er ||
      q[97] !== Z.cwd ||
      q[98] !== Z.hostId ||
      q[99] !== ec ||
      q[100] !== e7 ||
      q[101] !== tp ||
      q[102] !== es ||
      q[103] !== eZ ||
      q[104] !== ex ||
      q[105] !== e5 ||
      q[106] !== tk ||
      q[107] !== ee
        ? ((U = tk
            ? (0, n.jsx)(tm, {
                conversationId: $,
                threadHandoff: ee,
                menuOperation: eZ,
                crossHostHandoffEnabled: er,
                handoffBranch: e7,
                handoffIcon: tp,
                sourceHostId: Z.hostId,
                sourceGitRoot: ec,
                sourceWorkspaceRoot: Z.cwd,
                localWorkspaceRootForHandoff: es,
                closeDropdown: eg,
                openHostWorktreeHandoffDialog: ex,
                openOperation: e5,
              })
            : null),
          (q[94] = eg),
          (q[95] = $),
          (q[96] = er),
          (q[97] = Z.cwd),
          (q[98] = Z.hostId),
          (q[99] = ec),
          (q[100] = e7),
          (q[101] = tp),
          (q[102] = es),
          (q[103] = eZ),
          (q[104] = ex),
          (q[105] = e5),
          (q[106] = tk),
          (q[107] = ee),
          (q[108] = U))
        : (U = q[108])
      let tT = U
      q[109] !== $
        ? ((B = (0, n.jsx)(S.ms.Title, {
            children:
              null == $
                ? (0, n.jsx)(h.A, {
                    id: "composer.mode.startTask.header",
                    defaultMessage: "Work in",
                    description: "Header above execution locations for a new chat",
                  })
                : (0, n.jsx)(h.A, { ...tx.continueIn }),
          })),
          (q[109] = $),
          (q[110] = B))
        : (B = q[110])
      let tP = eo ? tT : tA,
        tR = eo ? tA : tT
      return (
        q[111] !== eu ||
        q[112] !== tj ||
        q[113] !== G ||
        q[114] !== tC ||
        q[115] !== e1 ||
        q[116] !== em ||
        q[117] !== tn ||
        q[118] !== eo ||
        q[119] !== eh ||
        q[120] !== e0 ||
        q[121] !== tf ||
        q[122] !== tw ||
        q[123] !== eJ ||
        q[124] !== el ||
        q[125] !== tc ||
        q[126] !== z ||
        q[127] !== tI ||
        q[128] !== ep
          ? ((F =
              (el || tn || tc) &&
              (0, n.jsx)(S.ms.Item, {
                LeftIcon: eX.A,
                leftIconClassName: em ? "icon-sm self-start" : void 0,
                RightIcon: "worktree" === G || z || tn ? eV.A : void 0,
                rightIcon: tc && null != eJ ? tf : void 0,
                rightIconClassName: em ? "icon-xs self-start" : void 0,
                disabled: tc ? e0 : e1,
                onClick: tC,
                tooltipText: tc ? tw : (tj ?? ep),
                subTextAllowWrap: !0,
                SubText: em
                  ? (0, n.jsx)("span", {
                      className: "text-sm text-codex-description",
                      children: (0, n.jsx)(h.A, { ...tx.worktreeAdditionalFolders, values: { count: eu } }),
                    })
                  : void 0,
                children: (0, n.jsxs)("span", {
                  className: "inline-flex items-center gap-1",
                  children: [
                    tn
                      ? (0, n.jsx)(h.A, { ...tx.currentWorktree, values: { host: eo ? "remote" : "local" } })
                      : (0, n.jsx)(tl, { hasMultipleProjectRoots: em, isLocalModeRemote: eo, primaryRepoName: eh }),
                    tI,
                  ],
                }),
              })),
            (q[111] = eu),
            (q[112] = tj),
            (q[113] = G),
            (q[114] = tC),
            (q[115] = e1),
            (q[116] = em),
            (q[117] = tn),
            (q[118] = eo),
            (q[119] = eh),
            (q[120] = e0),
            (q[121] = tf),
            (q[122] = tw),
            (q[123] = eJ),
            (q[124] = el),
            (q[125] = tc),
            (q[126] = z),
            (q[127] = tI),
            (q[128] = ep),
            (q[129] = F))
          : (F = q[129]),
        q[130] !== eg || q[131] !== G || q[132] !== ev || q[133] !== $ || q[134] !== et || q[135] !== K || q[136] !== z
          ? ((W =
              et || null != $
                ? null
                : (0, n.jsx)(eU, {
                    onSelect: () => {
                      ;((0, ta.r)(ev, G, "local", "native-control", z), K("local"), eg())
                    },
                  })),
            (q[130] = eg),
            (q[131] = G),
            (q[132] = ev),
            (q[133] = $),
            (q[134] = et),
            (q[135] = K),
            (q[136] = z),
            (q[137] = W))
          : (W = q[137]),
        q[138] !== s || q[139] !== i || q[140] !== eM || q[141] !== eI || q[142] !== ey || q[143] !== eP || q[144] !== c
          ? ((H =
              eP &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", { className: "mx-1 my-1.5 h-[0.5px] bg-text/10" }),
                  (0, n.jsx)(e9.a, {
                    rateLimits: i,
                    activeLimitName: s,
                    planType: eI,
                    suppressUpsell: c,
                    selectedModel: ey,
                    onPlanUpgradeClick: eM,
                  }),
                ],
              })),
            (q[138] = s),
            (q[139] = i),
            (q[140] = eM),
            (q[141] = eI),
            (q[142] = ey),
            (q[143] = eP),
            (q[144] = c),
            (q[145] = H))
          : (H = q[145]),
        q[146] !== B || q[147] !== tP || q[148] !== tR || q[149] !== F || q[150] !== W || q[151] !== H
          ? ((D = (0, n.jsxs)("div", {
              className: "flex max-w-78 min-w-[175px] flex-col",
              children: [B, tP, tR, F, W, null, H],
            })),
            (q[146] = B),
            (q[147] = tP),
            (q[148] = tR),
            (q[149] = F),
            (q[150] = W),
            (q[151] = H),
            (q[152] = D))
          : (D = q[152]),
        D
      )
    }
    function td(e) {
      return !!e.snapshot?.primary?.windowDurationMins || !!e.snapshot?.secondary?.windowDurationMins
    }
    function tu(e) {
      return null != e.limitName
    }
    function tm(e) {
      let t,
        o,
        a,
        s,
        i,
        l,
        c,
        u,
        m = (0, r.c)(50),
        {
          conversationId: p,
          threadHandoff: f,
          menuOperation: x,
          crossHostHandoffEnabled: w,
          handoffBranch: v,
          handoffIcon: j,
          sourceHostId: b,
          sourceGitRoot: y,
          sourceWorkspaceRoot: C,
          localWorkspaceRootForHandoff: I,
          closeDropdown: _,
          openHostWorktreeHandoffDialog: M,
          openOperation: N,
        } = e,
        A = (0, k.A)(),
        T = (0, d._U)(g.sX, p)
      m[0] !== y || m[1] !== b || m[2] !== C
        ? ((t = { sourceHostId: b, sourceGitRoot: y, sourceWorkspaceRoot: C }),
          (m[0] = y),
          (m[1] = b),
          (m[2] = C),
          (m[3] = t))
        : (t = m[3])
      let P = (0, d._U)(e6.GW, t)
      m[4] !== p || m[5] !== w || m[6] !== x || m[7] !== f || m[8] !== T
        ? ((o = w && (0, tt.bi)({ conversationId: p, historyMode: T, operation: x, threadHandoff: f })),
          (m[4] = p),
          (m[5] = w),
          (m[6] = x),
          (m[7] = f),
          (m[8] = T),
          (m[9] = o))
        : (o = m[9])
      let R = o
      m[10] !== A || m[11] !== x
        ? ((a = null != x ? A.formatMessage(tx.finishCurrentHandoffTooltip) : void 0),
          (m[10] = A),
          (m[11] = x),
          (m[12] = a))
        : (a = m[12])
      let E = a,
        O =
          I ??
          (x?.direction === "to-host-worktree" && x.request.destinationHostId === er.fI
            ? x.request.destinationWorkspaceRoot
            : null)
      m[13] !== O || m[14] !== x
        ? ((s = null != O && (0, tt.sU)({ destinationHostId: er.fI, destinationWorkspaceRoot: O, operation: x })),
          (m[13] = O),
          (m[14] = x),
          (m[15] = s))
        : (s = m[15])
      let U = s,
        B = null != O && !R && !U
      m[16] !== R || m[17] !== _ || m[18] !== v || m[19] !== x || m[20] !== M || m[21] !== N
        ? ((i = (e) => {
            let { destinationHostId: t, destinationWorkspaceRoot: o, destinationLabel: n } = e
            if (null != x && (0, tt.sU)({ destinationHostId: t, destinationWorkspaceRoot: o, operation: x })) {
              ;(_(),
                M({ currentBranch: v ?? "", destinationHostId: t, destinationWorkspaceRoot: o, destinationLabel: n }),
                N(x.id))
              return
            }
            R &&
              (_(),
              M({ currentBranch: v ?? "", destinationHostId: t, destinationWorkspaceRoot: o, destinationLabel: n }))
          }),
          (m[16] = R),
          (m[17] = _),
          (m[18] = v),
          (m[19] = x),
          (m[20] = M),
          (m[21] = N),
          (m[22] = i))
        : (i = m[22])
      let F = i
      if (x?.direction !== "to-host-worktree" && ("paginated" === T || (null == I && 0 === P.length))) return null
      if (
        (m[23] !== E || m[24] !== F || m[25] !== j || m[26] !== A || m[27] !== U || m[28] !== B || m[29] !== O
          ? ((l =
              null != O
                ? (0, n.jsxs)(S.ms.Item, {
                    disabled: B,
                    onSelect: () => {
                      F({
                        destinationHostId: er.fI,
                        destinationWorkspaceRoot: O,
                        destinationLabel: A.formatMessage(tx.thisComputerDestinationLabel),
                      })
                    },
                    tooltipText: B ? E : O,
                    children: [
                      (0, n.jsx)(S.ms.ItemIcon, { children: U ? j : (0, n.jsx)(eJ.A, { className: "icon-2xs" }) }),
                      (0, n.jsx)(h.A, { ...tx.localShort }),
                    ],
                  })
                : null),
            (m[23] = E),
            (m[24] = F),
            (m[25] = j),
            (m[26] = A),
            (m[27] = U),
            (m[28] = B),
            (m[29] = O),
            (m[30] = l))
          : (l = m[30]),
        m[31] !== R || m[32] !== E || m[33] !== F || m[34] !== j || m[35] !== A || m[36] !== x || m[37] !== P)
      ) {
        let e
        ;(m[39] !== R || m[40] !== E || m[41] !== F || m[42] !== j || m[43] !== A || m[44] !== x || m[45] !== P.length
          ? ((e = (e) => {
              if ("ready" !== e.status) {
                let t = x?.direction === "to-host-worktree" && x.request.destinationHostId === e.hostId
                return (0, n.jsx)(
                  th,
                  {
                    hostDisplayName: e.hostDisplayName,
                    showHostName: P.length > 1,
                    disabled: !t,
                    icon: t
                      ? j
                      : "loading" === e.status
                        ? (0, n.jsx)(L.y, { className: "icon-2xs" })
                        : (0, n.jsx)(eH.bF, {
                            "aria-hidden": !1,
                            asset16: eE.m,
                            legacyIcon: e$.A,
                            legacyClassName: "icon-2xs",
                          }),
                    tooltipText: t
                      ? x.request.destinationWorkspaceRoot
                      : A.formatMessage(
                          "loading" === e.status
                            ? tx.checkingRemoteHandoffDestinationTooltip
                            : tx.remoteHandoffDestinationLookupFailedTooltip,
                        ),
                    onSelect: t
                      ? () => {
                          F({
                            destinationHostId: x.request.destinationHostId,
                            destinationWorkspaceRoot: x.request.destinationWorkspaceRoot,
                            destinationLabel: e.hostDisplayName,
                          })
                        }
                      : void 0,
                  },
                  e.hostId,
                )
              }
              let { hostDisplayName: t, project: o } = e,
                r = (0, tt.sU)({ destinationHostId: o.hostId, destinationWorkspaceRoot: o.remotePath, operation: x }),
                a = !R && !r
              return (0, n.jsx)(
                th,
                {
                  hostDisplayName: t,
                  showHostName: P.length > 1,
                  disabled: a,
                  icon: r ? j : (0, n.jsx)(e5.z, { className: "icon-2xs", hostId: o.hostId }),
                  tooltipText: a ? E : o.remotePath,
                  onSelect: () => {
                    F({ destinationHostId: o.hostId, destinationWorkspaceRoot: o.remotePath, destinationLabel: t })
                  },
                },
                o.id,
              )
            }),
            (m[39] = R),
            (m[40] = E),
            (m[41] = F),
            (m[42] = j),
            (m[43] = A),
            (m[44] = x),
            (m[45] = P.length),
            (m[46] = e))
          : (e = m[46]),
          (c = P.map(e)),
          (m[31] = R),
          (m[32] = E),
          (m[33] = F),
          (m[34] = j),
          (m[35] = A),
          (m[36] = x),
          (m[37] = P),
          (m[38] = c))
      } else c = m[38]
      return (
        m[47] !== l || m[48] !== c
          ? ((u = (0, n.jsxs)(n.Fragment, { children: [l, c] })), (m[47] = l), (m[48] = c), (m[49] = u))
          : (u = m[49]),
        u
      )
    }
    function th(e) {
      let t,
        o,
        a,
        s = (0, r.c)(11),
        { hostDisplayName: i, showHostName: l, disabled: c, icon: d, tooltipText: u, onSelect: m } = e
      return (
        s[0] !== d ? ((t = (0, n.jsx)(S.ms.ItemIcon, { children: d })), (s[0] = d), (s[1] = t)) : (t = s[1]),
        s[2] !== i || s[3] !== l
          ? ((o = l
              ? (0, n.jsx)(h.A, {
                  id: "localConversation.moveToRemoteHostWorktree.label",
                  defaultMessage: "Remote · {host}",
                  description:
                    "Remote destination and configured host name when multiple remote computers can receive the current chat",
                  values: { host: i },
                })
              : (0, n.jsx)(h.A, { ...tx.startInRemote })),
            (s[2] = i),
            (s[3] = l),
            (s[4] = o))
          : (o = s[4]),
        s[5] !== c || s[6] !== m || s[7] !== t || s[8] !== o || s[9] !== u
          ? ((a = (0, n.jsxs)(S.ms.Item, { disabled: c, onSelect: m, tooltipText: u, children: [t, o] })),
            (s[5] = c),
            (s[6] = m),
            (s[7] = t),
            (s[8] = o),
            (s[9] = u),
            (s[10] = a))
          : (a = s[10]),
        a
      )
    }
    function tp(e) {
      let t,
        o,
        a,
        i,
        l,
        u,
        m,
        p,
        f,
        x,
        w,
        v = (0, r.c)(63),
        {
          open: j,
          onOpenChange: b,
          side: y,
          hasMultipleProjectRoots: C,
          crossHostHandoffEnabled: I,
          showCrossHostHandoff: M,
          conversationId: N,
          executionTarget: A,
          gitRoot: T,
          threadHandoff: P,
          worktreeSegmentLabel: R,
          openHandoffDialog: E,
          openHostWorktreeHandoffDialog: O,
          localWorkspaceRootForHandoff: U,
        } = e,
        B = (0, k.A)(),
        F = (0, d.Ul)(J.AQ)
      v[0] !== F ? ((t = { retainRepoWatch: F }), (v[0] = F), (v[1] = t)) : (t = v[1])
      let { data: W } = (0, eq.v)(T, A.hostConfig, "local_remote_dropdown", t),
        H = (0, e2.U)(N),
        D = (0, tt.Vp)(H),
        q = D?.direction === "to-host-worktree" ? null : D,
        G = D?.status === "queued" || D?.status === "running",
        z = D?.direction === "to-host-worktree" && G,
        Q = (0, d._U)(g.Pz, N),
        { openOperation: K } = (0, e2.tC)()
      v[2] !== N || v[3] !== W || v[4] !== H || v[5] !== M || v[6] !== Q
        ? ((o = W ?? (0, tt.j9)(H, N) ?? (M ? Q : null)),
          (v[2] = N),
          (v[3] = W),
          (v[4] = H),
          (v[5] = M),
          (v[6] = Q),
          (v[7] = o))
        : (o = v[7])
      let V = o,
        $ = (0, tt.qI)({ codexWorktree: !1, operation: q, threadHandoff: P }),
        Z = (0, tt.tq)({ conversationId: N, handoffBranch: V, handoffDirection: $, operation: D, threadHandoff: P })
      v[8] !== B || v[9] !== D?.status
        ? ((a =
            D?.status === "queued" || D?.status === "running"
              ? B.formatMessage({
                  id: "localConversation.threadHandoff.tooltip.viewProgress",
                  defaultMessage: "View progress",
                  description:
                    "Tooltip shown when a chat handoff is in progress and the button reopens the progress view",
                })
              : void 0),
          (v[8] = B),
          (v[9] = D?.status),
          (v[10] = a))
        : (a = v[10])
      let Y = a
      v[11] !== D
        ? ((i =
            D?.status === "queued" || D?.status === "running"
              ? (0, n.jsx)(L.y, { className: "icon-2xs" })
              : D?.status === "error"
                ? (0, n.jsx)(eH.bF, { "aria-hidden": !1, asset16: eE.m, legacyIcon: e$.A, legacyClassName: "icon-2xs" })
                : D?.hasUnseenTerminalState && "warning" === D.status
                  ? (0, n.jsx)(eH.bF, {
                      className: "text-warning",
                      "aria-hidden": !1,
                      asset16: eE.m,
                      legacyIcon: e$.A,
                      legacyClassName: "icon-2xs",
                    })
                  : (0, n.jsx)(eH.bF, {
                      className: "rotate-90",
                      "aria-hidden": !1,
                      asset16: eR,
                      legacyIcon: eY,
                      legacyClassName: "icon-2xs",
                    })),
          (v[11] = D),
          (v[12] = i))
        : (i = v[12])
      let X = i
      v[13] !== X || v[14] !== D?.direction
        ? ((l =
            D?.direction === "to-host-worktree"
              ? (0, n.jsx)(eH.bF, {
                  className: "rotate-90",
                  "aria-hidden": !1,
                  asset16: eR,
                  legacyIcon: eY,
                  legacyClassName: "icon-2xs",
                })
              : X),
          (v[13] = X),
          (v[14] = D?.direction),
          (v[15] = l))
        : (l = v[15])
      let ee = l
      v[16] !== z || v[17] !== Y || v[18] !== B || v[19] !== q
        ? ((u = z ? B.formatMessage(tx.finishCurrentHandoffTooltip) : null != q ? Y : void 0),
          (v[16] = z),
          (v[17] = Y),
          (v[18] = B),
          (v[19] = q),
          (v[20] = u))
        : (u = v[20])
      let et = u
      v[21] !== b || v[22] !== E || v[23] !== K || v[24] !== q
        ? ((m = () => {
            if ((b(!1), null != q)) {
              ;(E(), K(q.id))
              return
            }
            E()
          }),
          (v[21] = b),
          (v[22] = E),
          (v[23] = K),
          (v[24] = q),
          (v[25] = m))
        : (m = v[25])
      let eo = m,
        en = M && ((null != N && null != P) || D?.direction === "to-host-worktree"),
        ea = Z || (en && (D?.direction === "to-host-worktree" || null != U)),
        es = A.hostId !== er.fI
      v[26] !== eo ||
      v[27] !== Z ||
      v[28] !== C ||
      v[29] !== es ||
      v[30] !== z ||
      v[31] !== ee ||
      v[32] !== et ||
      v[33] !== q
        ? ((p = Z
            ? (0, n.jsx)(S.ms.Item, {
                LeftIcon: es ? eZ.A : eJ.A,
                leftIconClassName: C ? "me-1.5" : void 0,
                rightIcon: null == q ? void 0 : ee,
                disabled: z,
                onSelect: eo,
                tooltipText: et,
                children: es ? (0, n.jsx)(h.A, { ...tx.startInRemote }) : (0, n.jsx)(h.A, { ...tx.localShort }),
              })
            : null),
          (v[26] = eo),
          (v[27] = Z),
          (v[28] = C),
          (v[29] = es),
          (v[30] = z),
          (v[31] = ee),
          (v[32] = et),
          (v[33] = q),
          (v[34] = p))
        : (p = v[34])
      let ei = p
      v[35] !== N ||
      v[36] !== I ||
      v[37] !== A.cwd ||
      v[38] !== A.hostId ||
      v[39] !== T ||
      v[40] !== V ||
      v[41] !== X ||
      v[42] !== U ||
      v[43] !== D ||
      v[44] !== b ||
      v[45] !== O ||
      v[46] !== K ||
      v[47] !== M ||
      v[48] !== P
        ? ((f = M
            ? (0, n.jsx)(tm, {
                conversationId: N,
                threadHandoff: P,
                menuOperation: D,
                crossHostHandoffEnabled: I,
                handoffBranch: V,
                handoffIcon: X,
                sourceHostId: A.hostId,
                sourceGitRoot: T,
                sourceWorkspaceRoot: A.cwd,
                localWorkspaceRootForHandoff: U,
                closeDropdown: () => {
                  b(!1)
                },
                openHostWorktreeHandoffDialog: O,
                openOperation: K,
              })
            : null),
          (v[35] = N),
          (v[36] = I),
          (v[37] = A.cwd),
          (v[38] = A.hostId),
          (v[39] = T),
          (v[40] = V),
          (v[41] = X),
          (v[42] = U),
          (v[43] = D),
          (v[44] = b),
          (v[45] = O),
          (v[46] = K),
          (v[47] = M),
          (v[48] = P),
          (v[49] = f))
        : (f = v[49])
      let el = f,
        ec = ea ? "chevron" : "none"
      v[50] !== ec || v[51] !== R
        ? ((x = (0, n.jsx)(_.P, {
            categoryLabel: null,
            collapse: "none",
            icon: null,
            indicator: ec,
            value: R,
            valueClassName: "text-default",
          })),
          (v[50] = ec),
          (v[51] = R),
          (v[52] = x))
        : (x = v[52])
      let eu = x
      return (
        v[53] !== el ||
        v[54] !== es ||
        v[55] !== b ||
        v[56] !== j ||
        v[57] !== ei ||
        v[58] !== ea ||
        v[59] !== M ||
        v[60] !== y ||
        v[61] !== eu
          ? ((w = (0, n.jsx)("div", {
              children: ea
                ? (0, n.jsx)(S.Ab, {
                    open: j,
                    onOpenChange: b,
                    side: y,
                    triggerButton: eu,
                    children: (0, n.jsxs)("div", {
                      className: (0, c.A)("flex flex-col", M ? "min-w-[220px]" : "min-w-[180px]"),
                      children: [
                        (0, n.jsx)(S.ms.Title, { children: (0, n.jsx)(h.A, { ...tx.continueIn }) }),
                        es ? el : ei,
                        es ? ei : el,
                        (0, n.jsx)(S.ms.Item, {
                          leftIconAsset: s.T,
                          rightIconAsset: ed.G,
                          onSelect: () => {
                            b(!1)
                          },
                          children: (0, n.jsx)(h.A, {
                            ...tx.currentWorktree,
                            values: { host: es ? "remote" : "local" },
                          }),
                        }),
                      ],
                    }),
                  })
                : (0, n.jsx)("span", {
                    className: "inline-flex",
                    children: (0, n.jsx)("div", { className: "pointer-events-none", children: eu }),
                  }),
            })),
            (v[53] = el),
            (v[54] = es),
            (v[55] = b),
            (v[56] = j),
            (v[57] = ei),
            (v[58] = ea),
            (v[59] = M),
            (v[60] = y),
            (v[61] = eu),
            (v[62] = w))
          : (w = v[62]),
        w
      )
    }
    function tg(e) {
      let t,
        o,
        s,
        i = (0, r.c)(5),
        { composerMode: l, gitRoot: c, hostConfig: u } = e,
        m = (0, d.Ul)(J.AQ),
        p = "worktree" === l
      i[0] !== m || i[1] !== p
        ? ((t = { enabled: p, retainRepoWatch: m }), (i[0] = m), (i[1] = p), (i[2] = t))
        : (t = i[2])
      let { data: g } = (0, eG.Q)(c, u, "local_remote_dropdown", t)
      return (g?.length ?? 0) > 0 && "worktree" === l
        ? (i[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((o = (0, n.jsx)(h.A, { ...tx.worktreeSubmoduleWarning })), (i[3] = o))
            : (o = i[3]),
          i[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = (0, n.jsx)(a.m, {
                content: o,
                children: (0, n.jsx)("span", {
                  className: "flex items-center",
                  children: (0, n.jsx)(eH.bF, {
                    className: "text-warning",
                    "aria-hidden": !1,
                    legacyIcon: e$.A,
                    asset16: eE.m,
                    legacyClassName: "icon-2xs",
                  }),
                }),
              })),
              (i[4] = s))
            : (s = i[4]),
          s)
        : null
    }
    function tf(e) {
      let t,
        o,
        a,
        s,
        i = (0, r.c)(9),
        { rateLimit: l, isRemoteHost: c } = e
      i[0] !== l ? ((t = (0, te.KV)(l)), (i[0] = l), (i[1] = t)) : (t = i[1])
      let d = t
      return (
        i[2] !== c
          ? ((o = c
              ? (0, n.jsx)(h.A, {
                  id: "composer.mode.remote",
                  defaultMessage: "Remote",
                  description: "Remote mode label",
                })
              : (0, n.jsx)(h.A, {
                  id: "composer.mode.local",
                  defaultMessage: "Work locally",
                  description: "Local mode label",
                })),
            (i[2] = c),
            (i[3] = o))
          : (o = i[3]),
        i[4] !== d
          ? ((a =
              d &&
              (0, n.jsx)("span", {
                className: "whitespace-nowrap text-tertiary opacity-60",
                children: (0, n.jsx)(h.A, {
                  id: "composer.mode.local.ratePercent",
                  defaultMessage: " {usage}%",
                  description: "Rate limit remaining percent appended to Local when near limit",
                  values: { usage: Math.round(d.remainingPercent) },
                }),
              })),
            (i[4] = d),
            (i[5] = a))
          : (a = i[5]),
        i[6] !== o || i[7] !== a
          ? ((s = (0, n.jsxs)(n.Fragment, { children: [o, a] })), (i[6] = o), (i[7] = a), (i[8] = s))
          : (s = i[8]),
        s
      )
    }
    let tx = (0, I.YK)({
      continueIn: {
        id: "composer.mode.continueIn",
        defaultMessage: "Continue in",
        description: "Heading above supported destinations for continuing a chat",
      },
      workLocally: { id: "composer.mode.workLocally", defaultMessage: "Work locally", description: "Local mode label" },
      startInRemote: {
        id: "composer.mode.startInRemote",
        defaultMessage: "Remote",
        description: "Dropdown label for starting a chat in a remote project",
      },
      workLocallyTooltip: {
        id: "composer.mode.workLocally.tooltip",
        defaultMessage: "Work on {branchName}",
        description: "Tooltip describing what local mode runs against",
      },
      workRemotelyTooltipWithoutPath: {
        id: "composer.mode.workRemotely.tooltipWithoutPath",
        defaultMessage: "Work on {hostDisplayName}",
        description: "Tooltip describing what where the remote mode is run",
      },
      fallbackBranch: {
        id: "composer.mode.workLocally.currentBranchFallback",
        defaultMessage: "your branch",
        description: "Fallback branch name when current branch cannot be detected",
      },
      localShort: { id: "composer.mode.local.short", defaultMessage: "Local", description: "Short local mode label" },
      worktreeMode: {
        id: "composer.mode.newLocalWorktree",
        defaultMessage: "New local worktree",
        description: "Label for starting a chat in a new local Git worktree",
      },
      worktreeModeForRepository: {
        id: "composer.mode.worktree.forRepository",
        defaultMessage: "New {repoName} worktree",
        description: "Worktree execution mode label including the primary repository name",
      },
      worktreeMenuForRepository: {
        id: "composer.mode.worktree.menuForRepository",
        defaultMessage: "New local worktree · {repoName}",
        description: "New local worktree menu option followed by the primary repository name",
      },
      currentWorktree: {
        id: "composer.mode.currentWorktree",
        defaultMessage:
          "{host, select, local {This local worktree} remote {This remote worktree} other {This remote worktree}}",
        description: "Currently selected Git worktree destination, identifying whether it is local or remote",
      },
      remoteWorktreeMode: {
        id: "composer.mode.remoteWorktree",
        defaultMessage: "New remote worktree",
        description: "Worktree mode label when the selected workspace is remote",
      },
      remoteWorktreeMenuForRepository: {
        id: "composer.mode.remoteWorktree.menuForRepository",
        defaultMessage: "New remote worktree · {repoName}",
        description: "Remote worktree execution menu option followed by the primary repository name",
      },
      remoteWorktreeModeForRepository: {
        id: "composer.mode.remoteWorktree.forRepository",
        defaultMessage: "New remote {repoName} worktree",
        description: "Remote worktree execution mode label including the primary repository name",
      },
      worktreeTooltipForRepository: {
        id: "composer.mode.worktree.tooltip.forRepository",
        defaultMessage: "Create a copy of {repoName} to work in parallel.",
        description: "Tooltip explaining that a worktree copies the primary repository for parallel work",
      },
      worktreeTooltipForMultiRootProject: {
        id: "composer.mode.worktree.tooltip.forMultiRootProject",
        defaultMessage:
          "Create a copy of {repoName} to work in parallel. Other project source folders will be accessed directly.",
        description:
          "Tooltip explaining that a multi-root project copies only its primary repository and accesses other source folders directly",
      },
      worktreeAdditionalFolders: {
        id: "composer.mode.worktree.additionalFolders",
        defaultMessage: "Work locally in {count, plural, one {# other folder} other {# other folders}}",
        description:
          "Worktree execution menu description explaining how many additional project folders remain locally accessible",
      },
      worktreeSegment: {
        id: "composer.mode.worktreeSegment",
        defaultMessage: "Worktree",
        description: "Worktree mode label for the segmented toggle",
      },
      localRemoteWhereRun: {
        id: "composer.mode.localRemoteWhereRun",
        defaultMessage: "Select where to run the chat",
        description: "Tooltip content for local/remote dropdown",
      },
      worktreeSubmoduleWarning: {
        id: "composer.mode.worktree.submoduleWarning",
        defaultMessage: "This repo has git submodules. Worktree creation may fail",
        description: "Warning shown when a repo contains git submodules",
      },
      finishCurrentHandoffTooltip: {
        id: "localConversation.moveThread.disabled.finishCurrentHandoff",
        defaultMessage: "Finish the current handoff before starting another",
        description:
          "Tooltip shown on disabled cross-host handoff destinations while another handoff operation still needs attention",
      },
      thisComputerDestinationLabel: {
        id: "localConversation.moveThread.destination.thisComputer",
        defaultMessage: "this computer",
        description: "Destination label used in cross-host handoff copy when moving a chat back to the local machine",
      },
      checkingRemoteHandoffDestinationTooltip: {
        id: "localConversation.moveThread.destination.remoteChecking",
        defaultMessage: "Checking this host for a matching project",
        description: "Tooltip shown while Codex checks whether a remote host can receive this chat",
      },
      remoteHandoffDestinationLookupFailedTooltip: {
        id: "localConversation.moveThread.destination.remoteLookupFailed",
        defaultMessage: "Couldn’t inspect this host for a matching project",
        description: "Tooltip shown when Codex cannot inspect a remote host to decide whether it can receive this chat",
      },
    })
    function tw(e, t) {
      return e.find((e) => e.hostId === t)?.displayName ?? null
    }
    var tv = o("BdaT"),
      tj = o("zrLs"),
      tb = o("arTB"),
      ty = o("iRaF"),
      tC = o("pJpO"),
      tk = o("djbx"),
      tI = o("F0xz"),
      t_ = o("ZLvZ")
    function tS(e) {
      let t,
        o,
        a,
        i,
        l,
        u,
        p,
        g,
        f,
        x,
        v,
        j,
        b,
        C,
        I,
        _,
        S,
        M,
        N = (0, r.c)(63),
        {
          composerMode: L,
          presentation: A,
          worktreePromptContext: P,
          setComposerMode: R,
          isWorktreeAvailable: E,
          disabled: O,
          options: U,
        } = e,
        B = void 0 === A ? "inline" : A,
        F = (0, d.gh)(X.PR),
        W = (0, m.useId)(),
        H = (0, k.A)(),
        D = (0, d.Ul)(w.RB),
        q = (0, d.Ul)(tC.Os),
        G = null != (0, d.Ul)(T.S),
        z = (0, d.Ul)(tC.PF),
        Q = (0, d.Ul)(tC.tS),
        K = O || (z && Q?.workspace == null),
        V = (0, ea.Zj)("3724118644"),
        $ = (0, d._U)(eF.mY, P),
        Z = "worktree" === L || $,
        J = (0, ea.Zj)("2785238453"),
        Y = !D && !q && G && E,
        ee = !K && Y
      N[0] !== L || N[1] !== F || N[2] !== R || N[3] !== $ || N[4] !== Z
        ? ((t = (e) => {
            let t = Z ? "local" : "worktree"
            ;((0, ta.r)(F, L, t, e, $), R(t))
          }),
          (N[0] = L),
          (N[1] = F),
          (N[2] = R),
          (N[3] = $),
          (N[4] = Z),
          (N[5] = t))
        : (t = N[5])
      let et = t
      N[6] !== et ? ((o = () => et("keyboard-shortcut")), (N[6] = et), (N[7] = o)) : (o = N[7])
      let eo = ee && !J
      ;(N[8] !== eo ? ((a = { enabled: eo }), (N[8] = eo), (N[9] = a)) : (a = N[9]),
        (0, tn.Kr)("composer.toggleWorktreeMode", o, a),
        N[10] !== H
          ? ((i = H.formatMessage({
              id: "composer.newTask.worktree",
              defaultMessage: "Worktree",
              description: "Run the new task in a separate git worktree",
            })),
            (N[10] = H),
            (N[11] = i))
          : (i = N[11]),
        N[12] !== H || N[13] !== Z
          ? ((l = Z
              ? H.formatMessage({
                  id: "composer.worktreeSlashCommand.disableDescription",
                  defaultMessage: "Turn worktree mode off",
                  description:
                    "Description for the worktree slash command when the new task is set to run in a worktree",
                })
              : H.formatMessage({
                  id: "composer.worktreeSlashCommand.enableDescription",
                  defaultMessage: "Turn worktree mode on",
                  description:
                    "Description for the worktree slash command when the new task is set to run in the project directory",
                })),
            (N[12] = H),
            (N[13] = Z),
            (N[14] = l))
          : (l = N[14]),
        N[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = { assets: { 16: s.T, 20: eP.w } }), (N[15] = u))
          : (u = N[15]))
      let en = ee && (!V || !J)
      if (
        (N[16] !== et
          ? ((p = async () => {
              et("slash-command")
            }),
            (N[16] = et),
            (N[17] = p))
          : (p = N[17]),
        N[18] !== L || N[19] !== R || N[20] !== $ || N[21] !== Z
          ? ((g = [L, $, Z, R]), (N[18] = L), (N[19] = R), (N[20] = $), (N[21] = Z), (N[22] = g))
          : (g = N[22]),
        N[23] !== p || N[24] !== g || N[25] !== i || N[26] !== l || N[27] !== en
          ? ((f = {
              id: "worktree",
              title: i,
              description: l,
              requiresEmptyComposer: !1,
              Icon: u,
              enabled: en,
              onSelect: p,
              dependencies: g,
            }),
            (N[23] = p),
            (N[24] = g),
            (N[25] = i),
            (N[26] = l),
            (N[27] = en),
            (N[28] = f))
          : (f = N[28]),
        (0, to.r6)(f),
        !Y || J)
      )
        return null
      N[29] !== L || N[30] !== F || N[31] !== R || N[32] !== $
        ? ((x = (e) => {
            let t = e ? "worktree" : "local"
            ;((0, ta.r)(F, L, t, "native-control", $), R(t))
          }),
          (N[29] = L),
          (N[30] = F),
          (N[31] = R),
          (N[32] = $),
          (N[33] = x))
        : (x = N[33])
      let er = x,
        es = "menu" === B ? "h-token-button-composer w-full justify-between px-2" : "shrink-0 pe-2"
      ;(N[34] !== es
        ? ((v = (0, c.A)("relative flex items-center gap-2 text-sm select-none", es)), (N[34] = es), (N[35] = v))
        : (v = N[35]),
        N[36] !== B
          ? ((j = "menu" === B ? (0, n.jsx)(y.I, { asset: s.T }) : null), (N[36] = B), (N[37] = j))
          : (j = N[37]))
      let ei = K ? "cursor-not-allowed" : "cursor-interaction"
      ;(N[38] !== ei ? ((b = (0, c.A)("flex-1", ei)), (N[38] = ei), (N[39] = b)) : (b = N[39]),
        N[40] !== B
          ? ((C =
              "menu" === B
                ? (0, n.jsx)(h.A, {
                    id: "composer.newTask.newWorktree",
                    defaultMessage: "New worktree",
                    description: "Create a separate git worktree for the new task",
                  })
                : (0, n.jsx)(h.A, {
                    id: "composer.newTask.worktree",
                    defaultMessage: "Worktree",
                    description: "Run the new task in a separate git worktree",
                  })),
            (N[40] = B),
            (N[41] = C))
          : (C = N[41]),
        N[42] !== W || N[43] !== b || N[44] !== C
          ? ((I = (0, n.jsx)("label", { className: b, htmlFor: W, children: C })),
            (N[42] = W),
            (N[43] = b),
            (N[44] = C),
            (N[45] = I))
          : (I = N[45]),
        N[46] !== W || N[47] !== K || N[48] !== er || N[49] !== B || N[50] !== Z
          ? ((_ =
              "menu" === B
                ? (0, n.jsx)(tI.l, { id: W, size: "sm", tone: "neutral", checked: Z, disabled: K, onChange: er })
                : (0, n.jsx)(tk.S, { id: W, checked: Z, disabled: K, onCheckedChange: er })),
            (N[46] = W),
            (N[47] = K),
            (N[48] = er),
            (N[49] = B),
            (N[50] = Z),
            (N[51] = _))
          : (_ = N[51]),
        N[52] !== v || N[53] !== j || N[54] !== I || N[55] !== _
          ? ((S = (0, n.jsxs)("div", { className: v, children: [j, I, _] })),
            (N[52] = v),
            (N[53] = j),
            (N[54] = I),
            (N[55] = _),
            (N[56] = S))
          : (S = N[56]))
      let el = S
      return (
        N[57] !== ee || N[58] !== U || N[59] !== B || N[60] !== el || N[61] !== Z
          ? ((M =
              "menu" === B
                ? (0, n.jsx)(t_.W, { children: (e) => (0, n.jsxs)(n.Fragment, { children: [el, U?.(e, ee && Z)] }) })
                : el),
            (N[57] = ee),
            (N[58] = U),
            (N[59] = B),
            (N[60] = el),
            (N[61] = Z),
            (N[62] = M))
          : (M = N[62]),
        M
      )
    }
    var tM = o("jVko"),
      tN = o("eyOG"),
      tL = o("UR9X")
    let tA = (0, d.i1)(Y.u, (e, { get: t }) => {
        let o = t(g.VT, e) ?? 0,
          n = t(g.LO, e) ?? 0
        return o > 0 || n > 0
      }),
      tT = (0, d.i1)(Y.u, (e, { get: t }) => "allowed")
    function tP(e) {
      let t,
        o,
        C,
        k,
        I,
        _,
        S,
        M,
        N,
        L,
        A,
        T,
        P,
        R,
        E,
        O,
        U,
        B,
        F,
        H,
        D,
        et,
        eo,
        ed,
        eu,
        eg,
        ey,
        eC,
        ek,
        eI,
        e_,
        eS,
        eT,
        eP,
        eR,
        eE,
        eO,
        eU,
        eB,
        eW,
        eH,
        eD = (0, r.c)(252),
        {
          asyncThreadStartingState: eq,
          cloudComparison: eG,
          variant: ez,
          isHidden: eQ,
          isInRail: eK,
          composerMode: eV,
          worktreePromptContext: e$,
          setComposerMode: eZ,
          isResponseInProgress: eJ,
          isWorktreeAvailable: eY,
          worktreeEnvironmentHostId: eX,
          worktreeEnvironmentWorkspaceRoot: e1,
          codexHome: e0,
          homeAuxiliaryControl: e2,
          showRuntimeControls: e4,
          hideRunLocationDropdown: e3,
          showWorkspaceDropdown: e5,
          gitRootForStartingState: e6,
          startingStateRepositoryKey: e7,
          showUtilityBarBranchWhen: e8,
          freeUpsellButton: e9,
          remoteConfig: te,
          activeProjectIdOverride: to,
          onProjectChange: tr,
          localRemoteExecutionTarget: ta,
          existingWorkspace: ts,
        } = e,
        tl = void 0 !== eQ && eQ,
        tc = (0, d.gh)(X.PR),
        td = (0, d.gh)(Y.u),
        tu = (0, m.useContext)(tM.U),
        tm = (0, p.zy)(),
        th = (0, p.Zp)(),
        tp = (0, d.Ul)(em.f),
        tg = (0, d.Ul)(w.TC),
        tf = (0, d.Ul)(w.RB),
        tx = (0, en.r9)() === en.O$
      eD[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, j.$t)()), (eD[0] = t)) : (t = eD[0])
      let tw = t,
        tk = "cloud" !== eV && tp?.type !== "cloud"
      eD[1] !== tc ? ((o = (0, X.ah)(tc)), (eD[1] = tc), (eD[2] = o)) : (o = eD[2])
      let tI = o,
        t_ = (0, d.Ul)(tb.pU),
        tP = (0, d._U)(es.JW, "1678134557"),
        tE = (0, d.Ul)(x.s8),
        tO = t_ && !tx && null == ts,
        tU = (0, d.Ul)(tC.Os),
        tB = (0, d.Ul)(tb.H$),
        tF = tO && tP
      tF && (C = tB?.kind === "remote" ? (tB.hostId ?? void 0) : er.fI)
      let tW = (0, d.Ul)(null),
        tH = (0, d._U)(g.Af, tI),
        tD = null != tI && !tH,
        tq = (0, K.K5)(tI),
        tG = ta ?? tq
      eD[3] !== tG.hostConfig || eD[4] !== tG.hostId
        ? ((k = { hostId: tG.hostId, hostConfig: tG.hostConfig }),
          (eD[3] = tG.hostConfig),
          (eD[4] = tG.hostId),
          (eD[5] = k))
        : (k = eD[5])
      let tz = (0, d._U)(eN.bW, k),
        tQ = (0, d._U)(g.qX, tI),
        tK = (0, d._U)(g.hf, tI),
        tV = (0, d._U)(tA, tI),
        t$ = null != tp || tV,
        tZ = te.currentHostId ?? er.fI,
        tJ = tp?.type
      eD[6] !== eV || eD[7] !== tZ || eD[8] !== tV || eD[9] !== tJ
        ? ((I = (0, tv.I$)({
            composerMode: eV,
            draftRemoteHostId: tZ,
            followUpType: tJ,
            hasStartedBranchConversation: tV,
          })),
          (eD[6] = eV),
          (eD[7] = tZ),
          (eD[8] = tV),
          (eD[9] = tJ),
          (eD[10] = I))
        : (I = eD[10])
      let tY = I,
        tX = tY ? tZ : tQ,
        t1 = (0, d._U)(tT, tX === er.fI ? null : tX),
        t0 = "allowed" === t1,
        t2 = "loading" === t1,
        t4 = !tY && tX !== er.fI,
        t3 = (0, d._U)(g.JN, tI),
        t5 = (0, d._U)(ei.A3, tI) ?? t3,
        t6 = (0, Q.y)(tG.hostId) ?? e0
      eD[11] !== t5 || eD[12] !== t6
        ? ((_ = (0, u.n9x)(t5, t6)), (eD[11] = t5), (eD[12] = t6), (eD[13] = _))
        : (_ = eD[13])
      let t7 = _,
        t8 = ts?.workspaceRoot
      eD[14] !== t6 || eD[15] !== t8
        ? ((S = (0, u.n9x)(t8, t6)), (eD[14] = t6), (eD[15] = t8), (eD[16] = S))
        : (S = eD[16])
      let t9 = S,
        oe = "home" === ez,
        ot = "home" === ez && void 0 !== to && null == to,
        oo = ot && tg,
        on = oo || (e4 && !ot),
        or = (0, ea.Zj)("1115442235"),
        oa = (0, d._U)(V.N, tI),
        os = (0, Z.Q)()
      eD[17] !== os || eD[18] !== tX
        ? ((M = os.find((e) => e.hostId === tX) ?? null), (eD[17] = os), (eD[18] = tX), (eD[19] = M))
        : (M = eD[19])
      let oi = M
      eD[20] !== tG.cwd || eD[21] !== t4 || eD[22] !== te || eD[23] !== tX
        ? ((N = tX !== er.fI ? (t4 ? tG.cwd : te.getProjectPathForHostId(tX)) : null),
          (eD[20] = tG.cwd),
          (eD[21] = t4),
          (eD[22] = te),
          (eD[23] = tX),
          (eD[24] = N))
        : (N = eD[24])
      let ol = N
      eD[25] !== te.currentHostId || eD[26] !== os
        ? ((L = os.find((e) => e.hostId === te.currentHostId) ?? null),
          (eD[25] = te.currentHostId),
          (eD[26] = os),
          (eD[27] = L))
        : (L = eD[27])
      let oc = L
      eD[28] !== te ? ((A = te.getProjectPathForHostId(te.currentHostId)), (eD[28] = te), (eD[29] = A)) : (A = eD[29])
      let od = A
      ;(oi?.displayName, oc?.displayName)
      let ou = tX !== er.fI ? (oi?.displayName ?? null) : null
      eD[30] !== tX || eD[31] !== ou || eD[32] !== ol
        ? ((T = { hostId: tX, connectionDisplayName: ou, projectPath: ol }),
          (eD[30] = tX),
          (eD[31] = ou),
          (eD[32] = ol),
          (eD[33] = T))
        : (T = eD[33])
      let om = oc?.displayName ?? null
      ;(eD[34] !== te.currentHostId || eD[35] !== od || eD[36] !== om
        ? ((P = { hostId: te.currentHostId, connectionDisplayName: om, projectPath: od }),
          (eD[34] = te.currentHostId),
          (eD[35] = od),
          (eD[36] = om),
          (eD[37] = P))
        : (P = eD[37]),
        eD[38] !== t$ || eD[39] !== T || eD[40] !== P
          ? ((R = { isAttachedToStartedTask: t$, existingRemoteThreadState: T, draftNewThreadRemoteSelectionState: P }),
            (eD[38] = t$),
            (eD[39] = T),
            (eD[40] = P),
            (eD[41] = R))
          : (R = eD[41]))
      let oh = R,
        op = tG.hostConfig
      eD[42] !== op
        ? ((E = { hostConfig: op, operationSource: "composer_content" }), (eD[42] = op), (eD[43] = E))
        : (E = eD[43])
      let { data: og, isLoading: of } = (0, d._U)(q.j, E),
        ox = ((og?.available === !0 && tk) || tz) && !tD ? tG.cwd : null
      eD[44] !== ox || eD[45] !== op
        ? ((O = null == ox ? null : { cwd: ox, hostConfig: op }), (eD[44] = ox), (eD[45] = op), (eD[46] = O))
        : (O = eD[46])
      let ow = O,
        ov = (0, d.Ul)(J.AQ)
      eD[47] !== ov
        ? ((U = { enabled: !0, retainRepoWatch: ov, watchForGitInit: !1 }), (eD[47] = ov), (eD[48] = U))
        : (U = eD[48])
      let { data: oj, isLoading: ob, isSuccess: oy } = (0, z.E)(ow, "composer_content", U),
        oC = ob || (tk && null != tG.cwd && null == ox && of)
      eD[49] !== ox || eD[50] !== op
        ? ((B = { cwd: ox, hostConfig: op, showErrorToast: !0 }), (eD[49] = ox), (eD[50] = op), (eD[51] = B))
        : (B = eD[51])
      let { canCreateGitRepository: ok, createGitRepository: oI, isCreatingGitRepository: o_ } = (0, G.c)(B),
        oS = null != ox && oy,
        oM = tk && t0 && oS && null == oj,
        oN = !ok || o_ || !oS || ob,
        oL = oM ? null : e9,
        oA = (0, ea.Zj)("3724118644"),
        oT = (0, d._U)(eF.mY, e$),
        oP = "worktree" === eV || oT,
        oR = oP || (tO && "local" === eV && !0 === eY),
        oE = oR && !0,
        oO = oE ? e1 : null
      eD[52] !== oO || eD[53] !== eX
        ? ((F = { hostId: eX, workspaceRoot: oO }), (eD[52] = oO), (eD[53] = eX), (eD[54] = F))
        : (F = eD[54])
      let {
          environments: oU,
          isLoading: oB,
          isFetching: oF,
          error: oW,
          resolvedConfigPath: oH,
          repairConfigPath: oD,
          updateSelection: oq,
          savedConfigPath: oG,
          resetSelection: oz,
        } = (0, $.GF)(F),
        oQ = oA ? (oG ?? null) : oH
      eD[55] !== td ||
      eD[56] !== oW ||
      eD[57] !== oF ||
      eD[58] !== oB ||
      eD[59] !== tm.hash ||
      eD[60] !== tm.pathname ||
      eD[61] !== tm.search ||
      eD[62] !== th ||
      eD[63] !== eX ||
      eD[64] !== e1 ||
      eD[65] !== oU
        ? ((H = tR.bind(null, {
            scope: td,
            navigate: th,
            hostId: eX,
            workspaceRoot: e1,
            returnTo: `${tm.pathname}${tm.search}${tm.hash}`,
            showEnvironmentList: oB || oF || null != oW || oU.length > 0,
          })),
          (eD[55] = td),
          (eD[56] = oW),
          (eD[57] = oF),
          (eD[58] = oB),
          (eD[59] = tm.hash),
          (eD[60] = tm.pathname),
          (eD[61] = tm.search),
          (eD[62] = th),
          (eD[63] = eX),
          (eD[64] = e1),
          (eD[65] = oU),
          (eD[66] = H))
        : (H = eD[66])
      let oK = H
      eD[67] !== td ||
      eD[68] !== tp ||
      eD[69] !== oK ||
      eD[70] !== oW ||
      eD[71] !== oF ||
      eD[72] !== oB ||
      eD[73] !== tm.hash ||
      eD[74] !== tm.pathname ||
      eD[75] !== tm.search ||
      eD[76] !== th ||
      eD[77] !== oz ||
      eD[78] !== oQ ||
      eD[79] !== oE ||
      eD[80] !== oq ||
      eD[81] !== eX ||
      eD[82] !== oD ||
      eD[83] !== e1 ||
      eD[84] !== oU ||
      eD[85] !== oA ||
      eD[86] !== oP
        ? ((D = (e, t) =>
            !tp && oE && oP
              ? (0, n.jsx)(tL.M, {
                  presentation: void 0 === e ? "inline" : e,
                  taskOptions: t,
                  environments: oU,
                  isLoading: oB || (oF && 0 === oU.length),
                  hasError: null != oW,
                  selectedConfigPath: oQ,
                  repairConfigPath: oD,
                  onSelectConfigPath: oq,
                  onResetSelection: oA ? oz : void 0,
                  onOpenSettings: oK,
                  onCreateEnvironment: tR.bind(
                    null,
                    {
                      scope: td,
                      navigate: th,
                      hostId: eX,
                      workspaceRoot: e1,
                      returnTo: `${tm.pathname}${tm.search}${tm.hash}`,
                      showEnvironmentList: !1,
                    },
                    void 0,
                  ),
                  workspaceRoot: e1,
                })
              : null),
          (eD[67] = td),
          (eD[68] = tp),
          (eD[69] = oK),
          (eD[70] = oW),
          (eD[71] = oF),
          (eD[72] = oB),
          (eD[73] = tm.hash),
          (eD[74] = tm.pathname),
          (eD[75] = tm.search),
          (eD[76] = th),
          (eD[77] = oz),
          (eD[78] = oQ),
          (eD[79] = oE),
          (eD[80] = oq),
          (eD[81] = eX),
          (eD[82] = oD),
          (eD[83] = e1),
          (eD[84] = oU),
          (eD[85] = oA),
          (eD[86] = oP),
          (eD[87] = D))
        : (D = eD[87])
      let oV = D
      eD[88] !== eq ||
      eD[89] !== oR ||
      eD[90] !== tp ||
      eD[91] !== e6 ||
      eD[92] !== op ||
      eD[93] !== tc ||
      eD[94] !== e7
        ? ((et = (e, t) =>
            !tp && oR
              ? (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsx)(ec.u, {
                    presentation: void 0 === e ? "inline" : e,
                    taskOptions: t,
                    startingState: eq,
                    onStartingStateChange: (e) => {
                      ;(0, eh.M2)(tc, e, e7)
                    },
                    hostConfig: op,
                    gitRoot: e6,
                  }),
                })
              : null),
          (eD[88] = eq),
          (eD[89] = oR),
          (eD[90] = tp),
          (eD[91] = e6),
          (eD[92] = op),
          (eD[93] = tc),
          (eD[94] = e7),
          (eD[95] = et))
        : (et = eD[95])
      let o$ = et
      eD[96] !== oa || eD[97] !== tI || eD[98] !== tG.cwd || eD[99] !== t7 || eD[100] !== or
        ? ((eo =
            or && (0, tt.Qr)({ isCompactWindow: tw }) && null != tI && null != tG.cwd
              ? { conversationTitle: oa, cwd: (0, u.DIv)(tG.cwd), isWorktreeConversation: t7 }
              : null),
          (eD[96] = oa),
          (eD[97] = tI),
          (eD[98] = tG.cwd),
          (eD[99] = t7),
          (eD[100] = or),
          (eD[101] = eo))
        : (eo = eD[101])
      let oZ = eo,
        oJ = null != tI && tX !== er.fI && tK?.role === "follower",
        oY = ("always" === e8 || "local" === eV) && (t0 || t2) && !oJ && !tD
      eD[102] !== tI ||
      eD[103] !== tG.cwd ||
      eD[104] !== ts ||
      eD[105] !== oj?.root ||
      eD[106] !== op ||
      eD[107] !== oC ||
      eD[108] !== t2 ||
      eD[109] !== t0 ||
      eD[110] !== tX ||
      eD[111] !== oM ||
      eD[112] !== oY
        ? ((ed = (e) => {
            let t = void 0 === e ? "inline" : e
            return oY && !oM
              ? (0, n.jsx)(
                  ej.H,
                  {
                    presentation: t,
                    gitRoot: t0 ? (oj?.root ?? null) : null,
                    hostConfig: op,
                    localConversationId: tI,
                    isLoading: oC || t2,
                    isReadOnly: null != ts,
                    revalidateBranchSelection: void 0,
                    shouldShow: !0,
                    side: "menu" === t ? "right" : void 0,
                    align: "menu" === t ? "end" : "start",
                  },
                  `${op.id}:${tG.cwd ?? ""}`,
                )
              : null
          }),
          (eD[102] = tI),
          (eD[103] = tG.cwd),
          (eD[104] = ts),
          (eD[105] = oj?.root),
          (eD[106] = op),
          (eD[107] = oC),
          (eD[108] = t2),
          (eD[109] = t0),
          (eD[110] = tX),
          (eD[111] = oM),
          (eD[112] = oY),
          (eD[113] = ed))
        : (ed = eD[113])
      let oX = ed
      if (tO) {
        let e
        ;(eD[114] !== tr
          ? ((e = (0, n.jsx)(tj.i, { onProjectChange: tr })), (eD[114] = tr), (eD[115] = e))
          : (e = eD[115]),
          (eu = e))
      } else {
        let e
        ;(eD[116] !== eV ||
        eD[117] !== tI ||
        eD[118] !== ts ||
        eD[119] !== tp ||
        eD[120] !== e3 ||
        eD[121] !== op ||
        eD[122] !== t9 ||
        eD[123] !== eJ ||
        eD[124] !== eY ||
        eD[125] !== ta ||
        eD[126] !== oh ||
        eD[127] !== t6 ||
        eD[128] !== eZ ||
        eD[129] !== oo ||
        eD[130] !== t7 ||
        eD[131] !== oZ ||
        eD[132] !== e$
          ? ((e =
              null != ts && "local" === eV
                ? (0, n.jsx)(a.m, {
                    content: (0, n.jsxs)("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        null == ts.sourceConversationTitle
                          ? null
                          : (0, n.jsx)(h.A, {
                              id: "composer.existingWorkspace.fromTask",
                              defaultMessage: "From {taskTitle}",
                              description: "Source task shown in the existing workspace tooltip",
                              values: { taskTitle: ts.sourceConversationTitle },
                            }),
                        (0, n.jsx)("span", { className: "font-mono text-xs break-all", children: ts.workspaceRoot }),
                      ],
                    }),
                    maxWidth: 896,
                    children: (0, n.jsx)(a.m.TriggerDecorator, {
                      unstyled: !0,
                      children: (0, n.jsx)("span", {
                        className: "inline-block",
                        children: (0, n.jsx)(eb.i, {
                          categoryLabel: null,
                          collapse: "xs",
                          icon: t9
                            ? (0, n.jsx)(y.I, { "aria-hidden": !1, asset: s.T })
                            : (0, n.jsx)(y.I, { "aria-hidden": !1, asset: l.g }),
                          value: t9
                            ? (0, n.jsx)(h.A, {
                                id: "composer.existingWorktree.label",
                                defaultMessage: "Existing worktree · {worktree}",
                                description: "Label shown when a new task starts in an existing worktree",
                                values: {
                                  worktree: (0, el.ah)({
                                    codexHome: t6,
                                    hostId: op.id,
                                    worktreePath: ts.workspaceRoot,
                                  }),
                                },
                              })
                            : (0, n.jsx)(h.A, {
                                id: "composer.existingWorkspace.label",
                                defaultMessage: "Existing workspace",
                                description: "Label shown when a new task starts in an existing local workspace",
                              }),
                          valueClassName: "max-w-60 text-sm",
                        }),
                      }),
                    }),
                  })
                : tp?.type === "cloud"
                  ? (0, n.jsx)(ep, { composerMode: eV, setComposerMode: eZ })
                  : (0, n.jsx)(ti, {
                      worktreePromptContext: e$,
                      composerMode: eV,
                      setComposerMode: eZ,
                      conversationId: tI,
                      executionTargetOverride: ta,
                      remoteSelectionState: oh,
                      isWorktreeAvailable: eY,
                      disabled: t7,
                      hideModeDropdown: e3 && !oo,
                      allowWorktree: !tp && !eJ,
                      threadHandoff: oZ,
                      worktreeLabelOnly: t7,
                    })),
            (eD[116] = eV),
            (eD[117] = tI),
            (eD[118] = ts),
            (eD[119] = tp),
            (eD[120] = e3),
            (eD[121] = op),
            (eD[122] = t9),
            (eD[123] = eJ),
            (eD[124] = eY),
            (eD[125] = ta),
            (eD[126] = oh),
            (eD[127] = t6),
            (eD[128] = eZ),
            (eD[129] = oo),
            (eD[130] = t7),
            (eD[131] = oZ),
            (eD[132] = e$),
            (eD[133] = e))
          : (e = eD[133]),
          (eu = e))
      }
      let o1 = (0, d.Ul)(ee.Ro)
      eD[134] !== eV ||
      eD[135] !== tp ||
      eD[136] !== tU ||
      eD[137] !== o1 ||
      eD[138] !== tF ||
      eD[139] !== tO ||
      eD[140] !== e5 ||
      eD[141] !== tW
        ? ((eg = null == tW && !o1 && !(tF && tU) && (tO || e5) && (0, ew.u)(eV) && !tp),
          (eD[134] = eV),
          (eD[135] = tp),
          (eD[136] = tU),
          (eD[137] = o1),
          (eD[138] = tF),
          (eD[139] = tO),
          (eD[140] = e5),
          (eD[141] = tW),
          (eD[142] = eg))
        : (eg = eD[142])
      let o0 = eg,
        o2 = (0, d.Ul)(eh.MS),
        o4 = (0, d._U)(v.X1, "composer.openProjectPicker")
      ;(eD[143] !== tu || eD[144] !== tc
        ? ((ey = () => {
            ;((0, eL.G8)(), tu?.focus(), tc.set(eh.MS, !0))
          }),
          (eD[143] = tu),
          (eD[144] = tc),
          (eD[145] = ey))
        : (ey = eD[145]),
        eD[146] !== o0 ? ((eC = { enabled: o0 }), (eD[146] = o0), (eD[147] = eC)) : (eC = eD[147]),
        (0, tn.Kr)("composer.openProjectPicker", ey, eC))
      let o3 = null != tr
      eD[148] !== to ||
      eD[149] !== tE ||
      eD[150] !== eV ||
      eD[151] !== o2 ||
      eD[152] !== tx ||
      eD[153] !== tB?.kind ||
      eD[154] !== tr ||
      eD[155] !== C ||
      eD[156] !== o4 ||
      eD[157] !== o3 ||
      eD[158] !== tc ||
      eD[159] !== tF ||
      eD[160] !== tO ||
      eD[161] !== o0 ||
      eD[162] !== ez
        ? ((ek = o0
            ? (0, n.jsx)(n.Fragment, {
                children:
                  !tx || o3
                    ? (0, n.jsx)(eA.I, {
                        activeProjectIdOverride: to,
                        hostId: C,
                        allowLocalProjects: !tF || C === er.fI,
                        allowLocalProjectActions: !tF || C === er.fI,
                        allowRemoteProjects: tF ? tB?.kind === "remote" && null != C : tE || o3 || !tO,
                        onProjectSelected: (e) => {
                          ;(0, ty.lB)(tc, e, tr, eV)
                        },
                        isOpen: o2,
                        onOpenChange: (e) => tc.set(eh.MS, e),
                        shortcut: o4,
                        variant: "home" === ez ? "home" : "default",
                      })
                    : (0, n.jsx)(f.n, {
                        menuOpen: o2,
                        onMenuOpenChange: (e) => tc.set(eh.MS, e),
                        projectId: to,
                        shortcut: o4,
                        subtleHover: "home" === ez,
                      }),
              })
            : null),
          (eD[148] = to),
          (eD[149] = tE),
          (eD[150] = eV),
          (eD[151] = o2),
          (eD[152] = tx),
          (eD[153] = tB?.kind),
          (eD[154] = tr),
          (eD[155] = C),
          (eD[156] = o4),
          (eD[157] = o3),
          (eD[158] = tc),
          (eD[159] = tF),
          (eD[160] = tO),
          (eD[161] = o0),
          (eD[162] = ez),
          (eD[163] = ek))
        : (ek = eD[163])
      let o5 = ek
      eD[164] !== eV || eD[165] !== tp || eD[166] !== oL
        ? ((eI = !!tp), (eD[164] = eV), (eD[165] = tp), (eD[166] = oL), (eD[167] = eI))
        : (eI = eD[167])
      let o6 = eI
      eD[168] !== o6 ? ((e_ = o6 ? (0, n.jsx)(eM, {}) : null), (eD[168] = o6), (eD[169] = e_)) : (e_ = eD[169])
      let o7 = e_,
        o8 = tY ? oh.draftNewThreadRemoteSelectionState : oh.existingRemoteThreadState
      eD[170] !== oI || eD[171] !== oN || eD[172] !== o_ || eD[173] !== oM || eD[174] !== oY
        ? ((eS =
            oY && oM
              ? (0, n.jsxs)(b.$, {
                  className: "px-0",
                  color: "ghost",
                  size: "composerSm",
                  disabled: oN,
                  onClick: () => {
                    oN || oI()
                  },
                  children: [
                    (0, n.jsx)(y.I, { "aria-hidden": !1, asset: i.K }),
                    (0, n.jsx)(ex.O, {
                      collapse: "sm",
                      className: "max-w-40 truncate text-sm",
                      children: o_
                        ? (0, n.jsx)(h.A, {
                            id: "codex.review.noDiff.gitInit.creating",
                            defaultMessage: "Creating…",
                            description: "Button label shown while git init is running from the diff empty state",
                          })
                        : (0, n.jsx)(h.A, {
                            id: "codex.review.noDiff.gitInit.createRepository",
                            defaultMessage: "Create git repository",
                            description: "Button label to create a git repository from the diff empty state",
                          }),
                    }),
                  ],
                })
              : null),
          (eD[170] = oI),
          (eD[171] = oN),
          (eD[172] = o_),
          (eD[173] = oM),
          (eD[174] = oY),
          (eD[175] = eS))
        : (eS = eD[175])
      let o9 = eS,
        ne = "local" === eV && null != o8.hostId && o8.hostId !== er.fI
      eD[176] !== ne || eD[177] !== o8
        ? ((eT = ne
            ? (0, n.jsx)("div", {
                className: "flex min-w-0 items-center gap-1",
                children: (0, n.jsx)(tN.R, {
                  hostId: o8.hostId,
                  connectionDisplayName: o8.connectionDisplayName,
                  projectPath: o8.projectPath,
                }),
              })
            : null),
          (eD[176] = ne),
          (eD[177] = o8),
          (eD[178] = eT))
        : (eT = eD[178])
      let nt = eT
      eD[179] !== tp || eD[180] !== te || eD[181] !== oQ || eD[182] !== eX || eD[183] !== e1
        ? ((eP = (e) => null),
          (eD[179] = tp),
          (eD[180] = te),
          (eD[181] = oQ),
          (eD[182] = eX),
          (eD[183] = e1),
          (eD[184] = eP))
        : (eP = eD[184])
      let no = eP,
        nn = null
      if (!tO) {
        let e
        ;(eD[185] !== o$ ||
        eD[186] !== oX ||
        eD[187] !== tf ||
        eD[188] !== eV ||
        eD[189] !== tp ||
        eD[190] !== no ||
        eD[191] !== oV ||
        eD[192] !== oP
          ? ((e = tf
              ? (0, n.jsx)(W, { allowProvisioning: !1 })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    null == tp && oP ? null : oX(),
                    tp?.type !== "cloud"
                      ? (0, n.jsxs)(n.Fragment, { children: [oV(), o$(), "worktree" === eV ? no() : null] })
                      : null,
                  ],
                })),
            (eD[185] = o$),
            (eD[186] = oX),
            (eD[187] = tf),
            (eD[188] = eV),
            (eD[189] = tp),
            (eD[190] = no),
            (eD[191] = oV),
            (eD[192] = oP),
            (eD[193] = e))
          : (e = eD[193]),
          (nn = e))
      }
      eD[194] !== oX || eD[195] !== tp?.type || eD[196] !== nn || eD[197] !== eu || eD[198] !== ez
        ? ((eR =
            tp?.type === "cloud"
              ? (0, n.jsxs)(n.Fragment, { children: ["home" === ez ? oX() : null, eu, "default" === ez ? oX() : null] })
              : (0, n.jsxs)(n.Fragment, { children: [eu, nn] })),
          (eD[194] = oX),
          (eD[195] = tp?.type),
          (eD[196] = nn),
          (eD[197] = eu),
          (eD[198] = ez),
          (eD[199] = eR))
        : (eR = eD[199])
      let nr = eR
      eD[200] !== eG || eD[201] !== tp ? ((eE = null), (eD[200] = eG), (eD[201] = tp), (eD[202] = eE)) : (eE = eD[202])
      let na = eE
      eD[203] === Symbol.for("react.memo_cache_sentinel") ? ((eO = null), (eD[203] = eO)) : (eO = eD[203])
      let ns = eO,
        ni = !tF && ("home" === ez || tO) ? o5 : null,
        nl = "home" === ez ? e2 : null,
        nc = tO || e4 ? nr : null,
        nd = tF || ("default" === ez && !tO) ? o5 : null
      eD[204] !== ni || eD[205] !== nl || eD[206] !== nc || eD[207] !== nd
        ? ((eU = (0, n.jsxs)(n.Fragment, { children: [ni, nl, nc, nd] })),
          (eD[204] = ni),
          (eD[205] = nl),
          (eD[206] = nc),
          (eD[207] = nd),
          (eD[208] = eU))
        : (eU = eD[208])
      let nu = eU,
        nm = tF ? null : o5,
        nh = tO || on ? eu : null,
        np = on ? nn : null,
        ng = tF ? o5 : null
      eD[209] !== e2 || eD[210] !== nm || eD[211] !== nh || eD[212] !== np || eD[213] !== ng
        ? ((eB = (0, n.jsxs)(n.Fragment, { children: [nm, e2, nh, np, ng] })),
          (eD[209] = e2),
          (eD[210] = nm),
          (eD[211] = nh),
          (eD[212] = np),
          (eD[213] = ng),
          (eD[214] = eB))
        : (eB = eD[214])
      let nf = eB,
        nx = !!(nt ?? o9 ?? (oL || o7)),
        nw = null
      if (tO) {
        let e,
          t,
          o = !0 === eY,
          r = !eY || eJ
        ;(eD[215] !== o$ || eD[216] !== oX || eD[217] !== no || eD[218] !== oV || eD[219] !== oP
          ? ((e = (e, t) =>
              (0, n.jsxs)(n.Fragment, {
                children: [oP ? oV("menu", e) : null, oP ? o$("menu", e) : oX("menu"), t ? no(e) : null],
              })),
            (eD[215] = o$),
            (eD[216] = oX),
            (eD[217] = no),
            (eD[218] = oV),
            (eD[219] = oP),
            (eD[220] = e))
          : (e = eD[220]),
          eD[221] !== eV || eD[222] !== eZ || eD[223] !== o || eD[224] !== r || eD[225] !== e || eD[226] !== e$
            ? ((t = (0, n.jsx)(tS, {
                presentation: "menu",
                worktreePromptContext: e$,
                composerMode: eV,
                setComposerMode: eZ,
                isWorktreeAvailable: o,
                disabled: r,
                options: e,
              })),
              (eD[221] = eV),
              (eD[222] = eZ),
              (eD[223] = o),
              (eD[224] = r),
              (eD[225] = e),
              (eD[226] = e$),
              (eD[227] = t))
            : (t = eD[227]),
          (nw = t))
      } else if (e4 && nx) {
        let e,
          t,
          o = "home" === ez && "pe-2"
        ;(eD[228] !== o
          ? ((e = (0, c.A)("flex min-w-0 shrink-0 items-center gap-3", o)), (eD[228] = o), (eD[229] = e))
          : (e = eD[229]),
          eD[230] !== o9 || eD[231] !== o7 || eD[232] !== nt || eD[233] !== e || eD[234] !== oL
            ? ((t = (0, n.jsxs)("div", { className: e, children: [nt, o9, oL, o7] })),
              (eD[230] = o9),
              (eD[231] = o7),
              (eD[232] = nt),
              (eD[233] = e),
              (eD[234] = oL),
              (eD[235] = t))
            : (t = eD[235]),
          (nw = t))
      }
      if ("home" === ez || (void 0 !== eK && eK)) {
        let e,
          t,
          o = "home" === ez && !tx,
          r = tO ? null : nw
        eD[236] !== na || eD[237] !== r
          ? ((e = (0, n.jsxs)(n.Fragment, { children: [na, r, ns] })), (eD[236] = na), (eD[237] = r), (eD[238] = e))
          : (e = eD[238])
        let a = oe ? nf : nu,
          s = tO ? nw : null
        return (
          eD[239] !== tl || eD[240] !== o || eD[241] !== e || eD[242] !== a || eD[243] !== s
            ? ((t = (0, n.jsxs)(ev.S, { isHidden: tl, revealOnFocus: o, trailingControls: e, children: [a, s] })),
              (eD[239] = tl),
              (eD[240] = o),
              (eD[241] = e),
              (eD[242] = a),
              (eD[243] = s),
              (eD[244] = t))
            : (t = eD[244]),
          t
        )
      }
      let nv = tO ? nw : null
      eD[245] !== nu || eD[246] !== nv
        ? ((eW = (0, n.jsxs)("div", {
            className: "flex min-w-0 flex-1 flex-nowrap items-center gap-0",
            children: [nu, nv],
          })),
          (eD[245] = nu),
          (eD[246] = nv),
          (eD[247] = eW))
        : (eW = eD[247])
      let nj = tO ? null : nw
      return (
        eD[248] !== na || eD[249] !== eW || eD[250] !== nj
          ? ((eH = (0, n.jsxs)(ef.u, {
              className: "flex flex-wrap items-center gap-2 overflow-visible ps-2 pe-2",
              children: [eW, na, nj, ns],
            })),
            (eD[248] = na),
            (eD[249] = eW),
            (eD[250] = nj),
            (eD[251] = eH))
          : (eH = eD[251]),
        eH
      )
    }
    function tR({ scope: e, navigate: t, hostId: o, workspaceRoot: n, returnTo: r, showEnvironmentList: a }, s) {
      if (((0, eo.a)(e, o), null == s && a)) {
        let e = new URLSearchParams({ workspaceRoot: n })
        t(`/settings/local-environments?${e.toString()}`)
        return
      }
      t((0, et.q_)({ configPath: s, workspaceRoot: n }), { state: { hostId: o, returnTo: r } })
    }
  },
  BWQt(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("bVeK"),
      s = o("RNul"),
      i = o("zyAW")
    o.d(
      t,
      {},
      {
        j: function (e) {
          let t,
            o,
            l,
            c,
            d,
            u,
            m,
            h,
            p = (0, r.c)(16)
          p[0] !== e
            ? (({ combobox: c, icon: t, iconSource: o, isPending: d, showIndicator: u, ...l } = e),
              (p[0] = e),
              (p[1] = t),
              (p[2] = o),
              (p[3] = l),
              (p[4] = c),
              (p[5] = d),
              (p[6] = u))
            : ((t = p[1]), (o = p[2]), (l = p[3]), (c = p[4]), (d = p[5]), (u = p[6]))
          let g = void 0 === c || c,
            f = void 0 !== d && d,
            x = void 0 !== u && u
          p[7] !== t || p[8] !== f
            ? ((m = f ? (0, n.jsx)(s.y, { className: "icon-xs shrink-0" }) : (t ?? (0, n.jsx)(a.efV, {}))),
              (p[7] = t),
              (p[8] = f),
              (p[9] = m))
            : (m = p[9])
          let w = f ? void 0 : o,
            v = x ? "home-chevron" : "none"
          return (
            p[10] !== g || p[11] !== l || p[12] !== m || p[13] !== w || p[14] !== v
              ? ((h = (0, n.jsx)(i.s, {
                  ...l,
                  "data-composer-navigation-target": "workspace-project",
                  combobox: g,
                  icon: m,
                  iconSource: w,
                  indicator: v,
                })),
                (p[10] = g),
                (p[11] = l),
                (p[12] = m),
                (p[13] = w),
                (p[14] = v),
                (p[15] = h))
              : (h = p[15]),
            h
          )
        },
      },
    )
  },
  ZLvZ(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("zd8w"),
      s = o("Wf1j"),
      i = o("oyxz"),
      l = o("Sm6l"),
      c = o("bqtn")
    o("Lhpx")
    var d = o("bVeK"),
      u = o("nzx4")
    function m(e) {
      e.target === e.currentTarget &&
        (e.currentTarget.querySelector("input") ?? e.currentTarget.querySelector("[cmdk-root]"))?.focus()
    }
    o.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            o,
            m,
            h,
            p,
            g,
            f,
            x,
            w,
            v,
            j = (0, r.c)(22),
            { children: b } = e,
            y = (0, s.A)(),
            [C, k] = (0, a.useState)(null),
            [I, _] = (0, a.useState)(null)
          j[0] !== y
            ? ((t = y.formatMessage({
                id: "composer.newTask.configureLocalEnvironment",
                defaultMessage: "Additional settings",
                description: "Open the new chat's worktree, branch, and local setup environment settings",
              })),
              (j[0] = y),
              (j[1] = t))
            : (t = j[1])
          let S = t
          return (
            j[2] === Symbol.for("react.memo_cache_sentinel") ? ((o = () => _(null)), (j[2] = o)) : (o = j[2]),
            j[3] === Symbol.for("react.memo_cache_sentinel") ? ((m = (0, n.jsx)(d.l0Y, {})), (j[3] = m)) : (m = j[3]),
            j[4] !== S
              ? ((h = (0, n.jsx)(u.Wv, {
                  asChild: !0,
                  children: (0, n.jsx)(l.$, {
                    color: "ghost",
                    size: "composerSm",
                    uniform: !0,
                    "aria-label": S,
                    children: m,
                  }),
                })),
                (j[4] = S),
                (j[5] = h))
              : (h = j[5]),
            j[6] !== I
              ? ((p = (e) => {
                  null != I && (e.preventDefault(), I.close())
                }),
                (j[6] = I),
                (j[7] = p))
              : (p = j[7]),
            j[8] === Symbol.for("react.memo_cache_sentinel")
              ? ((g = (0, n.jsx)(c.ms.Title, {
                  children: (0, n.jsx)(i.A, {
                    id: "composer.newTask.configureLocalEnvironment",
                    defaultMessage: "Additional settings",
                    description: "Open the new chat's worktree, branch, and local setup environment settings",
                  }),
                })),
                (j[8] = g))
              : (g = j[8]),
            j[9] !== I || j[10] !== C || j[11] !== b
              ? ((f = b({ anchor: C, activePicker: I, setActivePicker: _ })),
                (j[9] = I),
                (j[10] = C),
                (j[11] = b),
                (j[12] = f))
              : (f = j[12]),
            j[13] !== f
              ? ((x = (0, n.jsxs)("div", {
                  children: [
                    g,
                    (0, n.jsx)("div", { className: "flex min-w-0 flex-col items-stretch select-none", children: f }),
                  ],
                })),
                (j[13] = f),
                (j[14] = x))
              : (x = j[14]),
            j[15] !== S || j[16] !== p || j[17] !== x
              ? ((w = (0, n.jsx)(u.hl, {
                  ref: k,
                  "aria-label": S,
                  align: "end",
                  side: "top",
                  variant: "menu",
                  size: "workspace",
                  onEscapeKeyDown: p,
                  children: x,
                })),
                (j[15] = S),
                (j[16] = p),
                (j[17] = x),
                (j[18] = w))
              : (w = j[18]),
            j[19] !== h || j[20] !== w
              ? ((v = (0, n.jsxs)(u.AM, { onOpenChange: o, children: [h, w] })), (j[19] = h), (j[20] = w), (j[21] = v))
              : (v = j[21]),
            v
          )
        },
        i: function (e) {
          let t,
            o,
            s,
            i,
            l,
            d,
            u,
            h = (0, r.c)(23),
            { triggerButton: p, children: g, onOpenChange: f, navigation: x } = e,
            w = (0, a.useId)(),
            { setActivePicker: v } = x
          ;(h[0] !== w || h[1] !== v
            ? ((t = () => () => v((e) => (e?.id === w ? null : e))),
              (o = [w, v]),
              (h[0] = w),
              (h[1] = v),
              (h[2] = t),
              (h[3] = o))
            : ((t = h[2]), (o = h[3])),
            (0, a.useEffect)(t, o),
            h[4] !== x || h[5] !== f
              ? ((s = () => {
                  ;(x.setActivePicker(null), f(!1))
                }),
                (h[4] = x),
                (h[5] = f),
                (h[6] = s))
              : (s = h[6]))
          let j = s
          h[7] !== x.anchor
            ? ((i = (e) => {
                let t = e.getBoundingClientRect(),
                  o = x.anchor?.getBoundingClientRect() ?? t
                return {
                  side: "right",
                  align: "end",
                  sideOffset: 5 + o.right - t.right,
                  alignOffset: t.bottom - o.bottom,
                }
              }),
              (h[7] = x.anchor),
              (h[8] = i))
            : (i = h[8])
          let b = x.activePicker?.id === w
          return (
            h[9] !== j || h[10] !== w || h[11] !== x || h[12] !== f
              ? ((l = (e) => {
                  e ? (x.setActivePicker({ id: w, close: j }), f(!0)) : j()
                }),
                (h[9] = j),
                (h[10] = w),
                (h[11] = x),
                (h[12] = f),
                (h[13] = l))
              : (l = h[13]),
            h[14] !== g || h[15] !== j ? ((d = g(j)), (h[14] = g), (h[15] = j), (h[16] = d)) : (d = h[16]),
            h[17] !== i || h[18] !== b || h[19] !== l || h[20] !== d || h[21] !== p
              ? ((u = (0, n.jsx)(c.Ab, {
                  openOnHover: !0,
                  modal: !1,
                  side: "right",
                  align: "end",
                  contentWidth: "menuReadout",
                  onContentFocus: m,
                  triggerButton: p,
                  getPlacement: i,
                  open: b,
                  onOpenChange: l,
                  children: d,
                })),
                (h[17] = i),
                (h[18] = b),
                (h[19] = l),
                (h[20] = d),
                (h[21] = p),
                (h[22] = u))
              : (u = h[22]),
            u
          )
        },
      },
    )
  },
  UR9X(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("slpy"),
      s = o("ypxs"),
      i = o("O8pf"),
      l = o("rFV2"),
      c = o("on57"),
      d = o("zTeN"),
      u = o("zd8w"),
      m = o("Wf1j"),
      h = o("oyxz"),
      p = o("ZZgR"),
      g = o("bqtn"),
      f = o("HOLv"),
      x = o("bVeK"),
      w = o("RNul"),
      v = o("DF9y"),
      j = o("xNQs"),
      b = o("Rvqv"),
      y = o("o4oB"),
      C = o("ndjw"),
      k = o("imHa"),
      I = o("hNt3"),
      _ = o("bnxy"),
      S = o("zx49"),
      M = o("ZLvZ")
    function N(e) {
      return "success" === e.type
    }
    function L(e) {
      let t,
        o = (0, r.c)(5),
        { workspaceRoot: a } = e,
        s = (0, d.Ul)(y.S)
      if ((0, d._U)(C.g, s).length > 1) {
        let e, t
        return (
          o[0] !== a ? ((e = (0, k.S)(a)), (o[0] = a), (o[1] = e)) : (e = o[1]),
          o[2] !== e
            ? ((t = (0, n.jsx)(h.A, {
                id: "composer.worktreeEnvironment.titleForRepository",
                defaultMessage: "Environment · {repoName}",
                description:
                  "Title for the composer worktree environment dropdown followed by the primary repository name when the project has multiple source folders",
                values: { repoName: e },
              })),
              (o[2] = e),
              (o[3] = t))
            : (t = o[3]),
          t
        )
      }
      return (
        o[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, n.jsx)(h.A, {
              id: "composer.worktreeEnvironment.title",
              defaultMessage: "Environment",
              description: "Title for worktree environment dropdown",
            })),
            (o[4] = t))
          : (t = o[4]),
        t
      )
    }
    o.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            o,
            d = (0, r.c)(57),
            {
              className: y,
              presentation: C,
              taskOptions: k,
              labelClassName: A,
              environments: T,
              isLoading: P,
              hasError: R,
              side: E,
              align: O,
              showIcon: U,
              selectedConfigPath: B,
              repairConfigPath: F,
              onSelectConfigPath: W,
              onOpenSettings: H,
              onCreateEnvironment: D,
              workspaceRoot: q,
              showDefaultOption: G,
              onResetSelection: z,
            } = e,
            Q = void 0 === C ? "inline" : C,
            K = void 0 === E ? "top" : E,
            V = void 0 === O ? "start" : O,
            $ = void 0 === U || U,
            Z = void 0 === G || G,
            J = (0, m.A)(),
            [Y, X] = (0, u.useState)(!1),
            [ee, et] = (0, u.useState)("")
          if (
            d[0] !== V ||
            d[1] !== y ||
            d[2] !== T ||
            d[3] !== R ||
            d[4] !== J ||
            d[5] !== P ||
            d[6] !== A ||
            d[7] !== D ||
            d[8] !== H ||
            d[9] !== z ||
            d[10] !== W ||
            d[11] !== Y ||
            d[12] !== Q ||
            d[13] !== F ||
            d[14] !== ee ||
            d[15] !== B ||
            d[16] !== Z ||
            d[17] !== $ ||
            d[18] !== K ||
            d[19] !== k ||
            d[20] !== q
          ) {
            o = Symbol.for("react.early_return_sentinel")
            e: {
              let e,
                r,
                u,
                m,
                C,
                E,
                O,
                U,
                G,
                eo,
                en,
                er = T.filter(N),
                ea = (0, I.vJ)(er)
              d[23] !== B ? ((e = B ? (0, _.Fd)(B) : null), (d[23] = B), (d[24] = e)) : (e = d[24])
              let es = e
              d[25] !== es || d[26] !== F
                ? ((r = F ? (0, _.Fd)(F) : es), (d[25] = es), (d[26] = F), (d[27] = r))
                : (r = d[27])
              let ei = r,
                el = T.find((e) => (0, _.Fd)(e.configPath) === ei) ?? null,
                ec = !P && !R,
                ed = er
              ;((P || R) && (ed = []),
                ea?.type === "success" &&
                  Z &&
                  (ed = [ea, ...ed.filter((e) => (0, _.Fd)(e.configPath) !== (0, _.Fd)(ea.configPath))]),
                d[28] !== ee
                  ? ((u = (e) => (0, v.i)(e).toLocaleLowerCase().includes(ee.trim().toLocaleLowerCase())),
                    (d[28] = ee),
                    (d[29] = u))
                  : (u = d[29]))
              let eu = ed.filter(u),
                em = (function ({ isLoading: e, environmentResult: t }) {
                  return e
                    ? (0, n.jsx)(h.A, {
                        id: "composer.worktreeEnvironment.loading",
                        defaultMessage: "Loading environments…",
                        description: "Loading label for worktree environment dropdown",
                      })
                    : t?.type === "error"
                      ? (0, n.jsx)(h.A, { ...j.y.needsAttention })
                      : t?.type === "success"
                        ? (0, n.jsx)(n.Fragment, { children: t.environment.name })
                        : (0, n.jsx)(h.A, {
                            id: "codex.environmentSelector.noEnvironment",
                            defaultMessage: "No environment",
                            description: "No environment selected message",
                          })
                })({ isLoading: P, environmentResult: el })
              if (null != z && null != B && null == el && !P) {
                let e
                ;(d[30] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, n.jsx)(h.A, {
                      id: "composer.worktreeEnvironment.unavailableSelection",
                      defaultMessage: "Selected environment unavailable",
                      description: "The saved environment is missing and will not be replaced automatically",
                    })),
                    (d[30] = e))
                  : (e = d[30]),
                  (em = e))
              }
              let eh = ec && 0 === T.length
              d[31] !== J
                ? ((m = J.formatMessage({
                    id: "composer.worktreeEnvironment.tooltip",
                    defaultMessage: "Select a local environment",
                    description: "Tooltip for local environment selector",
                  })),
                  (d[31] = J),
                  (d[32] = m))
                : (m = d[32])
              let ep = m
              ;(d[33] === Symbol.for("react.memo_cache_sentinel")
                ? ((C = (0, n.jsx)(h.A, {
                    id: "composer.worktreeOptions.environment",
                    defaultMessage: "Environment",
                    description: "Label for the setup environment selector in the compact task options menu",
                  })),
                  (d[33] = C))
                : (C = d[33]),
                d[34] !== y ? ((E = (0, c.A)("whitespace-nowrap", y)), (d[34] = y), (d[35] = E)) : (E = d[35]))
              let eg = null == A ? "secondary" : "sm"
              d[36] !== $
                ? ((O = $ ? (0, n.jsx)(f.I, { "aria-hidden": !1, asset: s.n }) : null), (d[36] = $), (d[37] = O))
                : (O = d[37])
              let ef = P ? "none" : "collapsible-chevron",
                ex = em
              ;(d[38] !== A ? ((U = (0, c.A)("max-w-40", A)), (d[38] = A), (d[39] = U)) : (U = d[39]),
                d[40] !== em ||
                d[41] !== Q ||
                d[42] !== ep ||
                d[43] !== E ||
                d[44] !== eg ||
                d[45] !== O ||
                d[46] !== ef ||
                d[47] !== U
                  ? ((G = (0, n.jsx)(S.P, {
                      "aria-label": ep,
                      "data-composer-navigation-target": "environment",
                      categoryLabel: null,
                      presentation: Q,
                      menuCategoryLabel: C,
                      className: E,
                      collapse: eg,
                      icon: O,
                      indicator: ef,
                      value: ex,
                      valueClassName: U,
                    })),
                    (d[40] = em),
                    (d[41] = Q),
                    (d[42] = ep),
                    (d[43] = E),
                    (d[44] = eg),
                    (d[45] = O),
                    (d[46] = ef),
                    (d[47] = U),
                    (d[48] = G))
                  : (G = d[48]))
              let ew = G,
                ev = "menu" === Q ? p.G.Item : g.ms.Item,
                ej = null
              if (P) {
                let e
                ;(d[49] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, n.jsx)(w.y, { className: "icon-xxs" })), (d[49] = e))
                  : (e = d[49]),
                  (ej = (0, n.jsx)("div", { className: "flex items-center justify-center py-4", children: e })))
              } else if (R) {
                let e
                ;(d[50] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, n.jsx)(h.A, {
                      id: "composer.worktreeEnvironment.error",
                      defaultMessage: "Error loading environments",
                      description: "Error state for worktree environment dropdown",
                    })),
                    (d[50] = e))
                  : (e = d[50]),
                  (ej = (0, n.jsx)(g.ms.Message, { compact: !0, tone: "error", children: e })))
              } else if (T.length > 0 && 0 === er.length) {
                let e
                ;(d[51] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, n.jsx)(h.A, { ...j.y.needsAttention })), (d[51] = e))
                  : (e = d[51]),
                  (ej = (0, n.jsx)(g.ms.Message, { compact: !0, tone: "error", children: e })))
              }
              let eb = (e) => {
                let t = (0, n.jsxs)(n.Fragment, {
                    children: [
                      null != z && null == k
                        ? (0, n.jsx)(ev, {
                            onSelect: () => {
                              ;(z(), e())
                            },
                            children: (0, n.jsx)(h.A, {
                              id: "composer.worktreeEnvironment.reset",
                              defaultMessage: "Reset environment",
                              description:
                                "Clear the saved environment choice and work without an environment until one is selected",
                            }),
                          })
                        : null,
                      ec
                        ? (0, n.jsx)(ev, {
                            RightIcon: null == B && null == F ? x.yIE : void 0,
                            onSelect: () => {
                              ;(W(null), e())
                            },
                            children: (0, n.jsx)(h.A, {
                              id: "composer.worktreeEnvironment.noEnvironmentOption",
                              defaultMessage: "Work without environment",
                              description:
                                "Option in the worktree environment dropdown that runs without selecting a local environment",
                            }),
                          })
                        : null,
                      eu.map((t) =>
                        (0, n.jsx)(
                          ev,
                          {
                            RightIcon: null != es && (0, _.Fd)(t.configPath) === es ? x.yIE : void 0,
                            onSelect: () => {
                              ;(W(t.configPath), e())
                            },
                            children:
                              Z && t === ea
                                ? (0, n.jsxs)("div", {
                                    className: "flex min-w-0 items-center gap-2",
                                    children: [
                                      (0, n.jsx)(a.m, {
                                        side: "menu" === Q ? "left" : void 0,
                                        content: (0, n.jsx)(h.A, {
                                          id: "composer.worktreeEnvironment.default",
                                          defaultMessage: "Default environment",
                                          description: "Tooltip for default local environment icon",
                                        }),
                                        children: (0, n.jsx)(f.I, {
                                          className: "shrink-0 text-codex-description",
                                          "aria-hidden": !1,
                                          asset: l.S,
                                        }),
                                      }),
                                      (0, n.jsx)("span", { className: "truncate", children: (0, v.i)(t) }),
                                    ],
                                  })
                                : (0, n.jsx)("span", { className: "min-w-0 truncate", children: (0, v.i)(t) }),
                          },
                          t.configPath,
                        ),
                      ),
                    ],
                  }),
                  o = (0, n.jsx)(ev, {
                    LeftIcon: x.GRR,
                    onSelect: () => {
                      ;(H(F ?? void 0), e())
                    },
                    children: eh
                      ? (0, n.jsx)(h.A, {
                          id: "composer.worktreeEnvironment.setUpProject",
                          defaultMessage: "Set up project",
                          description:
                            "Action to configure reusable setup for a project without a worktree environment",
                        })
                      : (0, n.jsx)(h.A, {
                          id: "composer.worktreeEnvironment.settings",
                          defaultMessage: "Environment settings",
                          description: "CTA to open local environment settings from the worktree dropdown",
                        }),
                  })
                return "menu" === Q && null != k
                  ? (0, n.jsx)(b.G, {
                      showEmptyState: !1,
                      showSearch: ed.length > 5,
                      footerItems:
                        null != D
                          ? (0, n.jsx)(p.G.Action, {
                              leftIconAsset: i.f,
                              onClick: () => {
                                ;(e(), D())
                              },
                              children: (0, n.jsx)(h.A, {
                                id: "composer.worktreeEnvironment.create",
                                defaultMessage: "Create environment",
                                description: "Open the form to create a local setup environment for this project",
                              }),
                            })
                          : null,
                      hasProjectItems: eu.length > 0,
                      projectItems: t,
                      searchLabel: J.formatMessage({
                        id: "composer.worktreeEnvironment.search",
                        defaultMessage: "Search environments",
                        description: "Search the local setup environments available for the new task",
                      }),
                      searchQuery: ee,
                      status: ej,
                      onSearchQueryChange: et,
                    })
                  : (0, n.jsxs)("div", {
                      className: (0, c.A)("flex flex-col overflow-hidden", "menu" === Q ? "w-full" : "w-64"),
                      children: [
                        "inline" === Q
                          ? (0, n.jsx)(g.ms.Title, {
                              children:
                                null == q
                                  ? (0, n.jsx)(h.A, {
                                      id: "composer.worktreeEnvironment.title",
                                      defaultMessage: "Environment",
                                      description: "Title for worktree environment dropdown",
                                    })
                                  : (0, n.jsx)(L, { workspaceRoot: q }),
                            })
                          : null,
                        (0, n.jsxs)("div", {
                          className: "vertical-scroll-fade-mask max-h-[220px] overflow-y-auto",
                          children: [t, ej, o],
                        }),
                      ],
                    })
              }
              if ("menu" === Q && null != k) {
                let e
                ;(d[52] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (e) => {
                      ;(X(e), e || et(""))
                    }),
                    (d[52] = e))
                  : (e = d[52]),
                  (o = (0, n.jsx)(M.i, { navigation: k, triggerButton: ew, onOpenChange: e, children: eb })))
                break e
              }
              ;(d[53] !== eh || d[54] !== ew
                ? ((eo = eh
                    ? (0, n.jsx)(a.m, {
                        content: (0, n.jsx)(h.A, {
                          id: "composer.worktreeEnvironment.projectSetupDescription",
                          defaultMessage: "Give Codex access to your project’s full dependencies and setup",
                          description:
                            "Explains that project setup gives Codex access to project dependencies and setup",
                        }),
                        children: ew,
                      })
                    : ew),
                  (d[53] = eh),
                  (d[54] = ew),
                  (d[55] = eo))
                : (eo = d[55]),
                d[56] === Symbol.for("react.memo_cache_sentinel") ? ((en = () => X(!1)), (d[56] = en)) : (en = d[56]),
                (t = (0, n.jsx)(g.Ab, {
                  open: Y,
                  onOpenChange: X,
                  side: K,
                  align: V,
                  triggerButton: eo,
                  children: eb(en),
                })))
            }
            ;((d[0] = V),
              (d[1] = y),
              (d[2] = T),
              (d[3] = R),
              (d[4] = J),
              (d[5] = P),
              (d[6] = A),
              (d[7] = D),
              (d[8] = H),
              (d[9] = z),
              (d[10] = W),
              (d[11] = Y),
              (d[12] = Q),
              (d[13] = F),
              (d[14] = ee),
              (d[15] = B),
              (d[16] = Z),
              (d[17] = $),
              (d[18] = K),
              (d[19] = k),
              (d[20] = q),
              (d[21] = t),
              (d[22] = o))
          } else ((t = d[21]), (o = d[22]))
          return o !== Symbol.for("react.early_return_sentinel") ? o : t
        },
      },
    )
  },
  X7C7(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("on57")
    o.d(
      t,
      {},
      {
        o: function (e) {
          let t,
            o,
            s,
            i = (0, r.c)(13),
            { children: l, color: c, borderColor: d, badgeEnabled: u, position: m, variant: h } = e,
            p = void 0 === c ? "bg-accent" : c,
            g = void 0 === h ? "notification" : h
          if (!(void 0 === u || u)) {
            let e
            return (
              i[0] !== l ? ((e = (0, n.jsx)(n.Fragment, { children: l })), (i[0] = l), (i[1] = e)) : (e = i[1]),
              e
            )
          }
          let f = "overlap" === g ? "size-3 border-2" : "size-[7px] border-[1px]",
            x =
              "bottom-right" === (void 0 === m ? "top-right" : m)
                ? "bottom-0 translate-y-[2px]"
                : "top-0 translate-y-[-2px]",
            w = ("notification" === g || null == d) && "border-surface-secondary"
          return (
            i[2] !== d || i[3] !== p || i[4] !== f || i[5] !== x || i[6] !== w
              ? ((t = (0, a.A)("absolute right-0 translate-x-[2px] rounded-full", f, x, w, p, d)),
                (i[2] = d),
                (i[3] = p),
                (i[4] = f),
                (i[5] = x),
                (i[6] = w),
                (i[7] = t))
              : (t = i[7]),
            i[8] !== t ? ((o = (0, n.jsx)("div", { className: t })), (i[8] = t), (i[9] = o)) : (o = i[9]),
            i[10] !== l || i[11] !== o
              ? ((s = (0, n.jsxs)("div", { className: "relative", children: [l, o] })),
                (i[10] = l),
                (i[11] = o),
                (i[12] = s))
              : (s = i[12]),
            s
          )
        },
      },
    )
  },
  zjpG(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("on57"),
      s = o("oyxz")
    o.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            o,
            i,
            l = (0, r.c)(5),
            { className: c } = e
          return (
            l[0] !== c ? ((t = (0, a.A)("last:hidden", c)), (l[0] = c), (l[1] = t)) : (t = l[1]),
            l[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((o = (0, n.jsx)(s.A, {
                  id: "codex.ui.bulletSeparator",
                  defaultMessage: "·",
                  description: "Middle dot separator used between inline items",
                })),
                (l[2] = o))
              : (o = l[2]),
            l[3] !== t
              ? ((i = (0, n.jsx)("span", { "aria-hidden": !0, className: t, children: o })), (l[3] = t), (l[4] = i))
              : (i = l[4]),
            i
          )
        },
      },
    )
  },
  jsiH(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("on57")
    o.d(
      t,
      {},
      {
        m: function (e) {
          let t,
            o,
            s = (0, r.c)(4),
            { className: i } = e,
            l = void 0 === i ? "bg-current" : i
          return (
            s[0] !== l ? ((t = (0, a.A)("block size-2 shrink-0 rounded-full", l)), (s[0] = l), (s[1] = t)) : (t = s[1]),
            s[2] !== t
              ? ((o = (0, n.jsx)("span", { "aria-hidden": !0, className: t })), (s[2] = t), (s[3] = o))
              : (o = s[3]),
            o
          )
        },
      },
    )
  },
  Tki5(e, t, o) {
    var n = o("ASxG")
    let r = n.object({
        environmentId: n.string(),
        installationId: n.string(),
        displayName: n.string(),
        status: n.enum(["connected", "offline", "unknown"]),
        execServerCommand: n.string(),
      }),
      a = {
        "environment/create": r,
        "environment/list": n.object({ data: n.array(r), nextCursor: n.string().nullable() }),
        "environment/rename": r,
        "environment/delete": n.object({}),
      }
    o.d(t, {}, { r: r, z: a })
  },
  hXwB(e, t, o) {
    var n = o("Tki5")
    o.d(
      t,
      {},
      {
        EV: function () {
          return !1
        },
        YO: async function e(t) {
          let o = n.z["environment/list"].parse(
            await (async function () {
              throw Error("Browser environment transport is not registered")
            })(),
          )
          return null == o.nextCursor ? o.data : [...o.data, ...(await e(o.nextCursor))]
        },
      },
    )
  },
  LKEZ(e, t, o) {
    var n = o("zTeN"),
      r = o("SPnB"),
      a = o("OWtl"),
      s = o("nltV"),
      i = o("rvFo"),
      l = o("Tki5"),
      c = o("hXwB")
    let d = l.r.array(),
      u = (0, n.RD)(a.u, ({ get: e }) => {
        let t = e(r.PO).authLoading ? null : e(r.chatGptAuthenticatedAccountId$),
          o = e(r.chatGptAuthenticatedUserId$),
          n = {
            queryKey: ["browser-environments", t, o],
            enabled: null != t && null != o,
            queryFn: () => (0, c.YO)(),
            refetchInterval: 5e3,
            retry: !1,
            staleTime: i.D.FIVE_SECONDS,
          }
        return null == t || null == o
          ? n
          : (0, s.T)(
              e,
              `browser-environments-v1:${JSON.stringify([t, o])}`,
              n,
              (e) => e.map((e) => ({ ...e, status: "unknown" })),
              d,
            )
      })
    o.d(t, {}, { v: u })
  },
  T9N0(e, t, o) {
    var n = o("Bbed"),
      r = o("X6Vn")
    let a = (0, n._)(() =>
      Promise.all([o.e(494689), o.e(889222), o.e(74254)])
        .then(o.bind(o, "gf5p"))
        .then((e) => e.CloudEnvironmentCreateDialog),
    )
    o.d(
      t,
      {},
      {
        h: function (e, t = {}) {
          ;(0, r.qf)(e, a, t)
        },
      },
    )
  },
  KDSd(e, t, o) {
    var n = o("QosV"),
      r = o("irkb"),
      a = o("xSOA"),
      s = o("zTeN"),
      i = o("DBCl"),
      l = o("Wf1j"),
      c = o("SGsN"),
      d = o("J43j"),
      u = o("OWtl"),
      m = o("M8aW"),
      h = o("iQgv")
    o.d(
      t,
      {},
      {
        c: function (e) {
          let t,
            o,
            p,
            g,
            f,
            x,
            w,
            v,
            j = (0, n.c)(31),
            { cwd: b, hostConfig: y, onErrorMessage: C, showErrorToast: k } = e,
            I = void 0 !== k && k,
            _ = (0, s.gh)(u.u),
            S = (0, r.jE)(),
            M = (0, l.A)()
          j[0] !== y ? ((t = (0, d.W)(y)), (j[0] = y), (j[1] = t)) : (t = j[1])
          let N = t,
            L = b ?? ""
          ;(j[2] !== N || j[3] !== L
            ? ((o = ["git", "init-repo", N, L]), (j[2] = N), (j[3] = L), (j[4] = o))
            : (o = j[4]),
            j[5] !== b || j[6] !== y
              ? ((p = async () => {
                  if (null == b) throw Error("Missing git context")
                  await (0, h.V)("git").request({
                    method: "git-init-repo",
                    params: { cwd: (0, i.DIv)(b), hostConfig: y, operationSource: "review_model" },
                  })
                }),
                (j[5] = b),
                (j[6] = y),
                (j[7] = p))
              : (p = j[7]),
            j[8] !== b || j[9] !== N || j[10] !== M || j[11] !== S || j[12] !== _
              ? ((g = async () => {
                  _.get(c.Id).success(
                    M.formatMessage({
                      id: "codex.review.noDiff.gitInit.success",
                      defaultMessage: "Git repository created",
                      description: "Toast shown after creating a git repository from the diff empty state",
                    }),
                  )
                  let e = [S.invalidateQueries({ queryKey: (0, m.IF)("git-origins") })]
                  ;(null != b && e.push(S.invalidateQueries({ queryKey: ["git", "metadata", N, b] })),
                    await Promise.all(e))
                }),
                (j[8] = b),
                (j[9] = N),
                (j[10] = M),
                (j[11] = S),
                (j[12] = _),
                (j[13] = g))
              : (g = j[13]),
            j[14] !== M || j[15] !== C || j[16] !== _ || j[17] !== I
              ? ((f = (e) => {
                  let t = e instanceof Error ? e.message : String(e)
                  ;(I &&
                    _.get(c.Id).danger(
                      M.formatMessage(
                        {
                          id: "codex.review.noDiff.gitInit.error",
                          defaultMessage: "Git init failed: {message}",
                          description: "Error text shown when git initialization fails from the diff empty state",
                        },
                        { message: t },
                      ),
                      { errorAnalytics: { toastId: "codex.review.noDiff.gitInit.error" } },
                    ),
                    C?.(t))
                }),
                (j[14] = M),
                (j[15] = C),
                (j[16] = _),
                (j[17] = I),
                (j[18] = f))
              : (f = j[18]),
            j[19] !== o || j[20] !== p || j[21] !== g || j[22] !== f
              ? ((x = { mutationKey: o, mutationFn: p, onSuccess: g, onError: f }),
                (j[19] = o),
                (j[20] = p),
                (j[21] = g),
                (j[22] = f),
                (j[23] = x))
              : (x = j[23]))
          let A = (0, a.n)(x)
          j[24] !== b || j[25] !== A
            ? ((w = async () => {
                if (null != b && !A.isPending)
                  try {
                    await A.mutateAsync()
                  } catch {
                    return
                  }
              }),
              (j[24] = b),
              (j[25] = A),
              (j[26] = w))
            : (w = j[26])
          let T = w,
            P = null != b
          return (
            j[27] !== T || j[28] !== A.isPending || j[29] !== P
              ? ((v = { canCreateGitRepository: P, createGitRepository: T, isCreatingGitRepository: A.isPending }),
                (j[27] = T),
                (j[28] = A.isPending),
                (j[29] = P),
                (j[30] = v))
              : (v = j[30]),
            v
          )
        },
      },
    )
  },
  c1U2(e, t, o) {
    var n = o("QosV"),
      r = o("OReh")
    function a(e) {
      return { method: "base-branch", params: e }
    }
    o.d(
      t,
      {},
      {
        H: function (e, t, o, s) {
          let i,
            l,
            c = (0, n.c)(4)
          return (
            c[0] !== o
              ? ((i = (e) => {
                  let { root: t } = e
                  return { operationSource: o, root: t }
                }),
                (c[0] = o),
                (c[1] = i))
              : (i = c[1]),
            c[2] !== s ? ((l = { liveQuery: a, staleTime: 1 / 0, ...s }), (c[2] = s), (c[3] = l)) : (l = c[3]),
            (0, r.wd)(e, t, "base-branch", i, o, l)
          )
        },
      },
    )
  },
  R5vo(e, t, o) {
    var n = o("QosV"),
      r = o("OReh")
    function a(e) {
      return e.branches
    }
    function s(e) {
      return { method: "recent-branches", params: e }
    }
    o.d(
      t,
      {},
      {
        v: function (e, t, o, i) {
          let l,
            c,
            d,
            u,
            m,
            h = (0, n.c)(10)
          ;(h[0] !== i ? ((l = i ?? {}), (h[0] = i), (h[1] = l)) : (l = h[1]),
            h[2] !== l ? (({ limit: d, ...c } = l), (h[2] = l), (h[3] = c), (h[4] = d)) : ((c = h[3]), (d = h[4])))
          let p = void 0 === d ? 100 : d
          return (
            h[5] !== p || h[6] !== o
              ? ((u = (e) => {
                  let { root: t } = e
                  return { operationSource: o, root: t, limit: p }
                }),
                (h[5] = p),
                (h[6] = o),
                (h[7] = u))
              : (u = h[7]),
            h[8] !== c
              ? ((m = { liveQuery: s, select: a, staleTime: 1 / 0, ...c }), (h[8] = c), (h[9] = m))
              : (m = h[9]),
            (0, r.wd)(e, t, "recent-branches", u, o, m)
          )
        },
      },
    )
  },
  jFi9(e, t, o) {
    o.d(t, { Q: () => l })
    var n = o("QosV"),
      r = o("zTeN"),
      a = o("rvFo"),
      s = o("ffuC")
    let i = (0, o("x9AG").F)({
      method: "submodule-paths",
      getParams: (e) => ({ operationSource: e.operationSource, root: e.root }),
      getOptions: (e) => ({ select: (e) => e.paths, staleTime: e.staleTime }),
    }).fromTarget$
    function l(e, t, o, l) {
      let c,
        d,
        u,
        m = (0, n.c)(9)
      return (
        m[0] !== l ? ((c = (0, s.vv)(l, a.D.ONE_MINUTE)), (m[0] = l), (m[1] = c)) : (c = m[1]),
        m[2] !== e || m[3] !== t
          ? ((d = null == e ? null : { cwd: e, hostConfig: t }), (m[2] = e), (m[3] = t), (m[4] = d))
          : (d = m[4]),
        m[5] !== o || m[6] !== c || m[7] !== d
          ? ((u = { ...c, operationSource: o, lookup: d }), (m[5] = o), (m[6] = c), (m[7] = d), (m[8] = u))
          : (u = m[8]),
        (0, r._U)(i, u)
      )
    }
  },
  NGQf(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("tb30"),
      s = o("GGw1"),
      i = o("on57"),
      l = o("oyxz"),
      c = o("aTcy"),
      d = o("zjpG"),
      u = o("bqtn"),
      m = o("Ot7V"),
      h = o("aQvR"),
      p = o("RNul"),
      g = o("laUo"),
      f = o("F9Qp"),
      x = o("hQzs"),
      w = o("LjYy"),
      v = o("MYLu")
    let j = "opacity-75 group-focus:opacity-100 group-hover:opacity-100",
      b = "https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan#h_8dd84c836b"
    function y(e) {
      ;(0, m.PQ)({ event: e, href: b, initiator: "open_in_browser_bridge" })
    }
    function C(e) {
      let t,
        o,
        a,
        s,
        c,
        d,
        u = (0, r.c)(19),
        { rateLimit: m, limitName: h, compact: p } = e,
        g = m?.primary
      u[0] !== g ? ((t = (0, f._m)(g)), (u[0] = g), (u[1] = t)) : (t = u[1])
      let x = t,
        w = m?.secondary
      u[2] !== w ? ((o = (0, f._m)(w)), (u[2] = w), (u[3] = o)) : (o = u[3])
      let v = o
      return x || v
        ? (u[4] !== p || u[5] !== h
            ? ((a =
                null != h &&
                (0, n.jsx)("span", {
                  title: I(h),
                  className: (0, i.A)("text-default col-span-2 min-w-0 truncate font-medium", p ? "mt-1" : "mt-2"),
                  children: (0, n.jsx)(l.A, {
                    id: "composer.mode.rateLimit.modelSectionLabel",
                    defaultMessage: "{modelName} limit:",
                    description: "Section label shown before model-specific rate limit windows in summaries",
                    values: { modelName: I(h) },
                  }),
                })),
              (u[4] = p),
              (u[5] = h),
              (u[6] = a))
            : (a = u[6]),
          u[7] !== p || u[8] !== m || u[9] !== x
            ? ((s = x && (0, n.jsx)(k, { bucket: m.primary ?? null, compact: p })),
              (u[7] = p),
              (u[8] = m),
              (u[9] = x),
              (u[10] = s))
            : (s = u[10]),
          u[11] !== p || u[12] !== m || u[13] !== v
            ? ((c = v && (0, n.jsx)(k, { bucket: m.secondary ?? null, compact: p })),
              (u[11] = p),
              (u[12] = m),
              (u[13] = v),
              (u[14] = c))
            : (c = u[14]),
          u[15] !== a || u[16] !== s || u[17] !== c
            ? ((d = (0, n.jsxs)(n.Fragment, { children: [a, s, c] })),
              (u[15] = a),
              (u[16] = s),
              (u[17] = c),
              (u[18] = d))
            : (d = u[18]),
          d)
        : null
    }
    function k(e) {
      let t,
        o,
        a,
        s,
        l,
        c,
        u,
        m,
        h,
        p = (0, r.c)(35),
        { bucket: g, compact: x } = e
      if (!(0, f._m)(g)) return null
      if (p[0] !== g.resetsAt) {
        let e = (0, f.tB)(g.resetsAt ?? null)
        ;((t = null == e ? null : (0, f.h6)(e)), (p[0] = g.resetsAt), (p[1] = t))
      } else t = p[1]
      let w = t
      if (p[2] !== g.usedPercent || p[3] !== g.windowDurationMins || p[4] !== x) {
        let e,
          t,
          r,
          c,
          d = (0, f.rU)(g.usedPercent ?? 0),
          u = x && "flex min-w-0 items-center gap-1"
        p[9] !== u ? ((e = (0, i.A)("text-default font-medium", u)), (p[9] = u), (p[10] = e)) : (e = p[10])
        let m = x && "shrink-0"
        p[11] !== m ? ((t = (0, i.A)(m)), (p[11] = m), (p[12] = t)) : (t = p[12])
        let h = g.windowDurationMins ?? null
        ;(p[13] !== h ? ((r = (0, n.jsx)(v.Y, { minutes: h })), (p[13] = h), (p[14] = r)) : (r = p[14]),
          p[15] !== r || p[16] !== t
            ? ((c = (0, n.jsx)("span", { className: t, children: r })), (p[15] = r), (p[16] = t), (p[17] = c))
            : (c = p[17]),
          p[18] !== c || p[19] !== e
            ? ((l = (0, n.jsx)("span", { className: e, children: c })), (p[18] = c), (p[19] = e), (p[20] = l))
            : (l = p[20]))
        let w = x ? "min-w-0 items-center justify-end" : "w-full min-w-0 items-center justify-end overflow-hidden"
        ;(p[21] !== w
          ? ((s = (0, i.A)("text-codex-description flex gap-1 text-end", w)), (p[21] = w), (p[22] = s))
          : (s = p[22]),
          (o = "shrink-0"),
          (a = (0, f.U7)(d)),
          (p[2] = g.usedPercent),
          (p[3] = g.windowDurationMins),
          (p[4] = x),
          (p[5] = o),
          (p[6] = a),
          (p[7] = s),
          (p[8] = l))
      } else ((o = p[5]), (a = p[6]), (s = p[7]), (l = p[8]))
      return (
        p[23] !== o || p[24] !== a
          ? ((c = (0, n.jsx)("span", { className: o, children: a })), (p[23] = o), (p[24] = a), (p[25] = c))
          : (c = p[25]),
        p[26] !== w
          ? ((u =
              w &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("span", { className: "shrink-0", children: (0, n.jsx)(d.a, {}) }),
                  (0, n.jsx)("span", {
                    title: w,
                    className: (0, i.A)("text-codex-description flex items-center gap-1", "min-w-0 truncate text-end"),
                    children: w,
                  }),
                ],
              })),
            (p[26] = w),
            (p[27] = u))
          : (u = p[27]),
        p[28] !== s || p[29] !== c || p[30] !== u
          ? ((m = (0, n.jsxs)("span", { className: s, children: [c, u] })),
            (p[28] = s),
            (p[29] = c),
            (p[30] = u),
            (p[31] = m))
          : (m = p[31]),
        p[32] !== l || p[33] !== m
          ? ((h = (0, n.jsxs)(n.Fragment, { children: [l, m] })), (p[32] = l), (p[33] = m), (p[34] = h))
          : (h = p[34]),
        h
      )
    }
    function I(e) {
      return e.replace(/_/g, "-")
    }
    function _(e) {
      let t,
        o,
        a,
        s,
        i,
        d,
        p = (0, r.c)(21),
        { planType: f, className: x, onPlanUpgradeClick: v } = e
      switch (f) {
        case "free":
        case "go":
        case "plus":
        case "prolite":
          break
        case "team":
        case "self_serve_business_prolite":
        case "self_serve_business_usage_based":
        case "business":
        case "enterprise_cbp_automation":
        case "enterprise_cbp_trial":
        case "enterprise_cbp_view_only":
        case "enterprise_cbp_usage_based":
        case "ent26":
        case "education":
        case "edu_plus":
        case "edu_pro":
        case "quorum":
        case "rosalind_academic":
        case "sci":
        case "enterprise":
        case "edu":
        case "hc":
        case "hc_consumption":
        case "hc26":
        case "finserv":
        case "law": {
          let e, t
          return (
            p[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, n.jsx)("span", {
                  className: "text-codex-description",
                  children: (0, n.jsx)(l.A, {
                    id: "composer.mode.contactAdmin",
                    defaultMessage: "To get more access, contact your admin",
                    description: "Suggest contacting admin for increased access",
                  }),
                })),
                (p[0] = e))
              : (e = p[0]),
            p[1] !== x
              ? ((t = (0, n.jsx)(u.ms.Item, { className: x, allowWrap: !0, children: e })), (p[1] = x), (p[2] = t))
              : (t = p[2]),
            t
          )
        }
        case "pro":
        case "promax":
        case "free_workspace":
        case "family_basic":
        case "family_premium":
        case "family_basic_free":
        case "family_basic_go":
        case "family_basic_plus":
        case "family_basic_prolite":
        case "family_basic_pro":
        case "family_basic_promax":
        case "family_premium_free":
        case "family_premium_go":
        case "family_premium_plus":
        case "family_premium_prolite":
        case "family_premium_pro":
        case "family_premium_promax":
        case "guest":
        case "k12":
        case void 0:
          return null
      }
      if (p[3] !== f) {
        o = Symbol.for("react.early_return_sentinel")
        t: {
          let e = (0, g.N8)(f)
          if (null == e) {
            o = null
            break t
          }
          switch (e) {
            case w.x.PLUS: {
              let e
              ;(p[7] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(l.A, {
                    id: "composer.mode.upgradeToPlus",
                    defaultMessage: "Upgrade to Plus",
                    description: "Upgrade to Plus message for free plan",
                  })),
                  (p[7] = e))
                : (e = p[7]),
                (a = e))
              break
            }
            case w.x.PROLITE: {
              let e
              ;(p[8] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(l.A, {
                    id: "composer.mode.upgradeToPro",
                    defaultMessage: "Upgrade to Pro",
                    description: "Upgrade to Pro",
                  })),
                  (p[8] = e))
                : (e = p[8]),
                (a = e))
              break
            }
            case w.x.PRO: {
              let e
              ;(p[9] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, n.jsx)(l.A, {
                    id: "composer.mode.upgradeForMoreUsage",
                    defaultMessage: "Upgrade for more usage",
                    description: "Upgrade for more usage",
                  })),
                  (p[9] = e))
                : (e = p[9]),
                (a = e))
            }
          }
          t = (0, c.LO)(e)
        }
        ;((p[3] = f), (p[4] = t), (p[5] = o), (p[6] = a))
      } else ((t = p[4]), (o = p[5]), (a = p[6]))
      if (o !== Symbol.for("react.early_return_sentinel")) return o
      let b = t
      return (
        p[10] !== b
          ? ((s = (0, n.jsx)(h.g, { size: "secondary", className: j, href: b })), (p[10] = b), (p[11] = s))
          : (s = p[11]),
        p[12] !== v || p[13] !== b
          ? ((i = (e) => {
              null != v ? v(e, b) : (0, m.PQ)({ event: e, href: b, initiator: "open_in_browser_bridge" })
            }),
            (p[12] = v),
            (p[13] = b),
            (p[14] = i))
          : (i = p[14]),
        p[15] !== x || p[16] !== b || p[17] !== s || p[18] !== i || p[19] !== a
          ? ((d = (0, n.jsx)(u.ms.Item, { rightIcon: s, className: x, href: b, onClick: i, children: a })),
            (p[15] = x),
            (p[16] = b),
            (p[17] = s),
            (p[18] = i),
            (p[19] = a),
            (p[20] = d))
          : (d = p[20]),
        d
      )
    }
    o.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            o,
            c,
            d,
            m,
            g,
            w = (0, r.c)(34),
            {
              rateLimits: v,
              activeLimitName: k,
              planType: I,
              suppressUpsell: S,
              selectedModel: M,
              availableRateLimitResetCount: N,
              onRateLimitResetClick: L,
              onUsageSettingsClick: A,
              onPlanUpgradeClick: T,
              isLoading: P,
              showLearnMore: R,
              layout: E,
            } = e,
            O = void 0 === N ? 0 : N,
            U = void 0 !== P && P,
            B = void 0 === R || R,
            F = void 0 === E ? "default" : E
          if (!U && 0 === v.length && 0 === O) return null
          if (
            w[0] !== k ||
            w[1] !== O ||
            w[2] !== U ||
            w[3] !== F ||
            w[4] !== T ||
            w[5] !== L ||
            w[6] !== A ||
            w[7] !== I ||
            w[8] !== v ||
            w[9] !== M ||
            w[10] !== B ||
            w[11] !== S
          ) {
            let e,
              r,
              m,
              g = (0, x.cd)(v, { activeLimitName: k, selectedModel: M })
            w[16] !== k || w[17] !== S ? ((e = S ?? !(0, x.YJ)(k)), (w[16] = k), (w[17] = S), (w[18] = e)) : (e = w[18])
            let N = e,
              P = "compact" === F
            if (w[19] !== P || w[20] !== v) {
              let e
              ;(w[22] !== P
                ? ((e = (e, t) => {
                    let o = (0, x.YJ)(e.limitName) ? null : e.limitName
                    return (0, n.jsx)(
                      C,
                      { rateLimit: e.snapshot, limitName: o, compact: P },
                      `${e.limitName ?? "default"}-${t}`,
                    )
                  }),
                  (w[22] = P),
                  (w[23] = e))
                : (e = w[23]),
                (r = v.map(e)),
                (w[19] = P),
                (w[20] = v),
                (w[21] = r))
            } else r = w[21]
            let R = r,
              E = (0, i.A)(
                "grid w-full items-center gap-y-1.5",
                P ? "grid-cols-[minmax(0,1fr)_auto] gap-x-3" : "grid-cols-[auto_1fr] gap-x-16",
              )
            ;((t = u.Qj),
              w[24] === Symbol.for("react.memo_cache_sentinel")
                ? ((m = (0, n.jsx)(l.A, {
                    id: "composer.mode.rateLimit.heading",
                    defaultMessage: "Usage remaining",
                    description: "Rate limit summary heading",
                  })),
                  (w[24] = m))
                : (m = w[24]))
            let W =
              g &&
              (0, n.jsx)("span", {
                className: "whitespace-nowrap text-tertiary opacity-60",
                children: (0, f.U7)(g.remainingPercent),
              })
            ;(w[25] !== W
              ? ((d = (0, n.jsx)(u.ms.Item, {
                  leftIconAsset: s.n,
                  rightIconAsset: a.q,
                  tooltipSide: "left",
                  children: (0, n.jsxs)("span", { className: "flex items-center gap-1", children: [m, W] }),
                })),
                (w[25] = W),
                (w[26] = d))
              : (d = w[26]),
              (o = "flex flex-col text-sm"),
              (c = U
                ? (0, n.jsx)(u.ms.Item, {
                    LeftIcon: p.y,
                    className: (0, i.A)(P && "ps-[calc(var(--padding-row-x)+1.25rem)] pe-[var(--padding-row-x)]"),
                    disabled: !0,
                    children: (0, n.jsx)(l.A, {
                      id: "composer.mode.rateLimit.loading",
                      defaultMessage: "Loading usage…",
                      description: "Loading state for the rate limit summary submenu",
                    }),
                  })
                : (0, n.jsxs)(n.Fragment, {
                    children: [
                      null == A
                        ? (0, n.jsx)("div", {
                            className: (0, i.A)(
                              E,
                              "py-1",
                              P
                                ? "ps-[calc(var(--padding-row-x)+1.25rem)] pe-[var(--padding-row-x)]"
                                : "px-[var(--padding-row-x)]",
                            ),
                            children: R,
                          })
                        : (0, n.jsxs)(u.ms.Item, {
                            allowWrap: !0,
                            className: (0, i.A)(
                              "py-1",
                              P
                                ? "ps-[calc(var(--padding-row-x)+1.25rem)] pe-[var(--padding-row-x)]"
                                : "px-[var(--padding-row-x)]",
                            ),
                            onClick: A,
                            children: [
                              (0, n.jsx)("span", { className: E, children: R }),
                              (0, n.jsx)("span", {
                                className: "sr-only",
                                children: (0, n.jsx)(l.A, {
                                  id: "composer.mode.rateLimit.openUsageSettings",
                                  defaultMessage: "Open usage settings",
                                  description:
                                    "Screen-reader text for a usage limit menu item that opens the Usage page in Settings",
                                }),
                              }),
                            ],
                          }),
                      !N &&
                        (0, n.jsx)(_, {
                          planType: I,
                          className: (0, i.A)(P && "ps-[calc(var(--padding-row-x)+1.25rem)] pe-[var(--padding-row-x)]"),
                          onPlanUpgradeClick: T,
                        }),
                      O > 0
                        ? (0, n.jsx)(u.ms.Item, {
                            rightIconAsset: a.q,
                            className: (0, i.A)(
                              P && "ps-[calc(var(--padding-row-x)+1.25rem)] pe-[var(--padding-row-x)]",
                            ),
                            onClick: L,
                            children: (0, n.jsx)(l.A, {
                              id: "composer.mode.rateLimit.resetsAvailable",
                              defaultMessage:
                                "{availableRateLimitResetCount, plural, one {# available reset} other {# available resets}}",
                              description: "Menu item for opening available rate limit resets",
                              values: { availableRateLimitResetCount: O },
                            }),
                          })
                        : null,
                      B &&
                        (0, n.jsx)(u.ms.Item, {
                          rightIcon: (0, n.jsx)(h.g, {
                            size: "secondary",
                            href: b,
                            className: (0, i.A)(j, P && "text-codex-description"),
                          }),
                          className: (0, i.A)(P && "ps-[calc(var(--padding-row-x)+1.25rem)] pe-[var(--padding-row-x)]"),
                          href: b,
                          onClick: y,
                          children: (0, n.jsx)("span", {
                            className: (0, i.A)(P ? "text-default" : "text-codex-description"),
                            children: (0, n.jsx)(l.A, {
                              id: "composer.mode.local.learnMore",
                              defaultMessage: "Learn more",
                              description: "Learn more about rate limits",
                            }),
                          }),
                        }),
                    ],
                  })),
              (w[0] = k),
              (w[1] = O),
              (w[2] = U),
              (w[3] = F),
              (w[4] = T),
              (w[5] = L),
              (w[6] = A),
              (w[7] = I),
              (w[8] = v),
              (w[9] = M),
              (w[10] = B),
              (w[11] = S),
              (w[12] = t),
              (w[13] = o),
              (w[14] = c),
              (w[15] = d))
          } else ((t = w[12]), (o = w[13]), (c = w[14]), (d = w[15]))
          return (
            w[27] !== o || w[28] !== c
              ? ((m = (0, n.jsx)("div", { className: o, children: c })), (w[27] = o), (w[28] = c), (w[29] = m))
              : (m = w[29]),
            w[30] !== t || w[31] !== d || w[32] !== m
              ? ((g = (0, n.jsx)(t, { trigger: d, children: m })), (w[30] = t), (w[31] = d), (w[32] = m), (w[33] = g))
              : (g = w[33]),
            g
          )
        },
      },
    )
  },
  MYLu(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("Wf1j"),
      s = o("F9Qp")
    o.d(
      t,
      {},
      {
        Y: function (e) {
          let t,
            o,
            i = (0, r.c)(6),
            { minutes: l, variant: c } = e,
            d = (0, a.A)()
          return (
            i[0] !== d || i[1] !== l || i[2] !== c
              ? ((t = (0, s.He)({ intl: d, minutes: l, variant: c })), (i[0] = d), (i[1] = l), (i[2] = c), (i[3] = t))
              : (t = i[3]),
            i[4] !== t ? ((o = (0, n.jsx)(n.Fragment, { children: t })), (i[4] = t), (i[5] = o)) : (o = i[5]),
            o
          )
        },
      },
    )
  },
  Js4A(e, t, o) {
    var n = o("zTeN"),
      r = o("u4MG"),
      a = o("GaA7"),
      s = o("OWtl")
    let i = (0, n.bD)(s.u, (e) => 0)
    o.d(
      t,
      {},
      {
        Z: i,
        o: function (e, t, o) {
          let n = e?.chatGptBackingCreation
          return (
            "allowed" === o &&
            a.appServices?.projectChatGptProvisioning != null &&
            null != t &&
            null != e &&
            !(0, r.w7)(e.id) &&
            null == e.chatGptBacking &&
            null == e.retiredChatGptBacking &&
            !e.chatGptBackingRecoveryPending &&
            (null == n || (n.accountId === t.accountId && n.userId === t.userId))
          )
        },
      },
    )
  },
  jYuX(e, t, o) {
    var n = o("ASxG"),
      r = o("KJ1J"),
      a = o("rGp2"),
      s = o("temr"),
      i = o("HUHI"),
      l = o("acxW"),
      c = o("geS6"),
      d = o("xSzB"),
      u = o("ILnd"),
      m = o("B81s"),
      h = o("i6yo")
    let p = {
        create: ["get_project"],
        submit: ["get_project", "create_merge_request"],
        detail: ["get_project", "get_merge_request"],
        status: ["get_project", "list_merge_requests"],
      },
      g = n.object({
        _codex_apps: n.object({ resource_uri: n.string(), synthetic_link: n.boolean().nullish() }),
        link_id: n.string().optional(),
      })
    function f(e, t) {
      let o = g.safeParse(e?._meta),
        n = (0, c.ob)(e)
      if (!o.success || !0 === o.data._codex_apps.synthetic_link || n?.kind !== "target") return null
      let r = o.data._codex_apps.resource_uri
      return r !== `/${s.MF}/${n.targetId}/${t}` || (null != o.data.link_id && o.data.link_id !== n.targetId)
        ? null
        : { accountLinkId: n.targetId, resourceUri: r }
    }
    o.d(
      t,
      {},
      {
        O4: function (e, t) {
          let o = p[t],
            n = e.find(({ name: e }) => (0, r.fI)(e)),
            a = o.map((e) => f(n?.tools[`gitlab.${e}`], e)),
            i = a[0]?.accountLinkId
          return null != i && a.every((e) => e?.accountLinkId === i)
            ? { connectorId: s.MF, accountLinkId: i, mcpServerName: "codex_apps" }
            : null
        },
        hF: async function (e, t, o, n, r, a) {
          if (!(0, h.$)(e)) throw Error("Native GitLab merge requests are unavailable")
          let s = e.get(m.lt, t).data?.data ?? [],
            i = s.find(({ name: e }) => e === o.mcpServerName)?.tools,
            c = f(i?.[`gitlab.${n}`], n)
          if (null == c || c.accountLinkId !== o.accountLinkId)
            throw Error("The selected GitLab account no longer provides this action")
          let p = (0, d.O9)({
            isCodexAppsServer: !0,
            toolResult: await (0, u.W1)(e, t, o.mcpServerName, `gitlab.${n}`, r, {
              threadId: a,
              hostToolCallMetadata: { _codex_apps: { resource_uri: c.resourceUri } },
            }),
          })
          if (
            !0 === p.isError ||
            null == p.structuredContent ||
            (0, l.C)({ isCodexAppsServer: !0, result: { type: "success", structuredContent: p.structuredContent } })
          )
            throw Error("The selected GitLab connector request failed")
          if ("create_merge_request" === n) return p.structuredContent
          let g = f(e.get(m.lt, t).data?.data.find(({ name: e }) => e === o.mcpServerName)?.tools[`gitlab.${n}`], n)
          if (!(0, h.$)(e) || g?.resourceUri !== c.resourceUri)
            throw Error("The selected GitLab account changed during the request")
          return p.structuredContent
        },
        qd: async function (e, t) {
          let o = await e.queryClient.fetchQuery((0, a.rJ)(t.connectorId))
          if (o.id !== s.MF || "DISABLED_BY_ADMIN" === o.status || null == o.base_url)
            throw Error("The selected GitLab connector is unavailable")
          let n = new URL(o.base_url)
          if (
            "https://gitlab.com" !== n.origin ||
            !/^\/api\/v4\/?$/u.test(n.pathname) ||
            n.username ||
            n.password ||
            n.search ||
            n.hash
          )
            throw Error("The selected GitLab connector has an untrusted origin")
          let r = await e.queryClient.fetchQuery((0, i.qS)(t.connectorId))
          if (
            null == r ||
            r.connector_id !== t.connectorId ||
            r.id !== t.accountLinkId ||
            "REAUTH_REQUIRED" === r.auth_status ||
            "DISABLED_BY_ADMIN" === r.connector_status
          )
            throw Error("The selected GitLab account is unavailable")
        },
      },
    )
  },
  osNz(e, t, o) {
    var n = o("ASxG"),
      r = o("jYuX")
    let a = n.object({
      data: n.object({
        id: n.number().int().positive(),
        default_branch: n.string().min(1).nullish(),
        path_with_namespace: n.string(),
        web_url: n.url(),
      }),
    })
    o.d(
      t,
      {},
      {
        v: async function (e, t, o, n) {
          let { data: s } = a.parse(await (0, r.hF)(e, t, o, "get_project", { project_id: n }))
          if ("https://gitlab.com" !== new URL(s.web_url).origin || ("number" == typeof n && s.id !== n))
            throw Error("The selected GitLab project is unavailable")
          return s
        },
      },
    )
  },
  lI5L(e, t, o) {
    var n = o("SZCv"),
      r = o.n(n),
      a = o("SPnB"),
      s = o("i6yo"),
      i = o("fnxp")
    function l(e, t) {
      return ["gitlab-review", e(a.o8) ?? null, e(a.chatGptAuthenticatedAccountId$) ?? null, t]
    }
    o.d(
      t,
      {},
      {
        U: function (e, t, o) {
          let n = l(e, o)
          return {
            key: [...n, t],
            assertCurrent(e, o) {
              o.throwIfAborted()
              let [, l, c] = n,
                d = e.get(i.V, { provider: "gitlab-connector", hostId: t.account.hostId })
              if (
                null == l ||
                null == c ||
                l !== e.get(a.o8) ||
                c !== e.get(a.chatGptAuthenticatedAccountId$) ||
                !e.get(s.l) ||
                t.pullRequest.hostname !== t.account.hostname ||
                !d.data?.accounts.some((e) => r()(e, t.account))
              )
                throw Error("The selected Code Review account changed")
            },
          }
        },
        Y: l,
      },
    )
  },
  WHCc(e, t, o) {
    o.d(t, { s: () => h })
    var n = o("zTeN"),
      r = o("B81s"),
      a = o("OWtl"),
      s = o("rvFo"),
      i = o("i6yo"),
      l = o("jYuX"),
      c = o("ASxG"),
      d = o("fiy3"),
      u = o("osNz")
    let m = c.object({
        iid: c.number().int().positive(),
        project_id: c.number().int().positive(),
        source_project_id: c.number().int().positive(),
        source_branch: c.string(),
        target_branch: c.string(),
        state: c.enum(["opened", "closed", "merged", "locked"]),
        draft: c.boolean(),
        title: c.string(),
        web_url: c.url(),
      }),
      h = (0, n.vU)(a.u, (e, { get: t, scope: o }) => {
        let n = t(i.l),
          a = n ? t(r.lt, e.hostId) : null,
          h = a?.data == null ? null : (0, l.O4)(a.data.data, "status")
        return {
          enabled: n && !a?.isPending && !!e.headBranch,
          queryKey: ["gitlab-task-merge-request", e, h?.accountLinkId],
          queryFn: async ({ signal: t }) => {
            if (!(0, i.$)(o) || null == h) throw Error("The selected GitLab account is unavailable")
            return (
              await (0, l.qd)(o, h),
              t.throwIfAborted(),
              (async function (e, t, o, n) {
                let r,
                  a = await (0, u.v)(e, o.hostId, t, `${o.repository.owner}/${o.repository.repo}`)
                if (
                  (n.throwIfAborted(),
                  a.path_with_namespace.toLowerCase() !== `${o.repository.owner}/${o.repository.repo}`.toLowerCase())
                )
                  throw Error("The selected GitLab project does not match the task")
                for (let s of ["opened", "locked", "merged"]) {
                  n.throwIfAborted()
                  let i = await (0, l.hF)(e, o.hostId, t, "list_merge_requests", {
                    page: 1,
                    per_page: 1,
                    scope: "all",
                    source_branch: o.headBranch,
                    source_project_id: a.id,
                    state: s,
                  })
                  if (null != (r = c.object({ data: c.array(m) }).parse(i).data[0])) {
                    if (r.source_project_id !== a.id || r.source_branch !== o.headBranch || r.state !== s)
                      throw Error("The selected GitLab merge request does not match the task branch")
                    break
                  }
                }
                if ((n.throwIfAborted(), null == r)) return null
                let s = (0, d.XT)(r.web_url)
                if (s?.hostname !== "gitlab.com" || s.number !== r.iid)
                  throw Error("The selected GitLab merge request has an untrusted URL")
                if (
                  (r.project_id === a.id
                    ? a
                    : await (0, u.v)(e, o.hostId, t, r.project_id)
                  ).path_with_namespace.toLowerCase() !== `${s.owner}/${s.repository}`.toLowerCase()
                )
                  throw Error("The selected GitLab merge request target does not match its URL")
                return (
                  n.throwIfAborted(),
                  {
                    baseBranch: r.target_branch,
                    details: null,
                    hasOpenPr: "opened" === r.state || "locked" === r.state,
                    headBranch: r.source_branch,
                    headRepository: o.repository,
                    isDraft: r.draft,
                    number: r.iid,
                    repo: `${s.owner}/${s.repository}`,
                    state: "opened" === r.state || "locked" === r.state ? "open" : r.state,
                    title: r.title,
                    url: r.web_url,
                  }
                )
              })(o, h, e, t)
            )
          },
          retry: !1,
          refetchOnMount: !0,
          refetchOnWindowFocus: !0,
          refetchInterval: (e) => !!(null != e.state.error || e.state.data?.hasOpenPr) && s.D.ONE_MINUTE,
          refetchIntervalInBackground: !1,
          staleTime: s.D.ONE_MINUTE,
          gcTime: s.D.TEN_MINUTES,
        }
      })
  },
  Zdy5(e, t, o) {
    o.d(
      t,
      {},
      {
        d: function (e) {
          let t = e?.toLowerCase()
          return "gitlab.com" === t || "bitbucket.org" === t
        },
      },
    )
  },
  BZ3V(e, t, o) {
    var n = o("Kbdg"),
      r = o("zTeN"),
      a = o("DBCl"),
      s = o("yGJW"),
      i = o("fiy3"),
      l = o("Y4Ny"),
      c = o("zKjj"),
      d = o("OWtl"),
      u = o("rvFo"),
      m = o("M8aW"),
      h = o("UfhA"),
      p = o("fAUH")
    let g = (0, r.vU)(d.u, (e, { get: t, scope: o }) => {
      let r = (0, p.Es)(e.hostId ?? "local"),
        {
          originConnection: d,
          upstreamConnection: g,
          originRepository: f,
          upstreamRepository: x,
          canReadOriginWithConnector: w,
          canReadUpstreamWithConnector: v,
          source: j,
          isFallback: b,
          unavailableReason: y,
        } = t(p.v$, { ...e, operation: "status" }),
        C =
          "github-cli" === j || "github-connector" === j
            ? t(l.currentGitHubUserQuery$, {
                hostId: r,
                hostname: f?.host ?? "github.com",
                provider: j,
                connection: d ?? g,
                source: e.operationSource,
              })
            : null,
        k = C?.data?.status === "success" ? C.data.account : null,
        I = { cwd: (0, a.DIv)(e.cwd ?? "/"), headBranch: e.headBranch, hostId: r }
      return {
        enabled:
          null != e.cwd &&
          e.headBranch.length > 0 &&
          "loading" !== j &&
          (null != k || "unavailable" === j || C?.isError === !0),
        meta: { hostId: r },
        queryKey: [...(0, m.IF)("gh-pr-for-branch", I), f, x, j, w, v, d, g, null == k ? null : (0, i.rE)(k)],
        queryFn: async ({ signal: t }) => {
          let a = { provider: j, operation: "status", operationSource: e.operationSource, isFallback: !0 === b }
          try {
            if (null == k) throw C?.error ?? Error("Pull request discovery source unavailable")
            if ("github-cli" === j) {
              let r = await (0, c.P)("gh-pr-for-branch", I, { signal: t, source: e.operationSource }),
                l = null == r ? null : (0, i.XT)(r)
              return (
                null == l &&
                  o
                    .get(s.YV)
                    .logProductEvent(n.CodexPullRequestFetchCompleted, {
                      ...a,
                      outcome: n.CodexPullRequestFetchOutcome.CODEX_PULL_REQUEST_FETCH_OUTCOME_NOT_FOUND,
                      hasOpenPr: !1,
                    }),
                l
              )
            }
            let l = []
            for (let n of (null != x &&
              v &&
              (null == f ||
                `${f.host}/${f.owner}/${f.repo}`.toLowerCase() !== `${x.host}/${x.owner}/${x.repo}`.toLowerCase()) &&
              l.push({
                repository: x,
                connection: g,
                headBranch: null == f || e.headBranch.includes(":") ? e.headBranch : `${f.owner}:${e.headBranch}`,
              }),
            null != f && w && l.push({ repository: f, connection: d, headBranch: e.headBranch }),
            l)) {
              t.throwIfAborted()
              let e = await (0, h.M1)(o, r, n.repository, n.headBranch, n.connection)
              if (null != e) return e
            }
            return (
              o
                .get(s.YV)
                .logProductEvent(n.CodexPullRequestFetchCompleted, {
                  ...a,
                  outcome: n.CodexPullRequestFetchOutcome.CODEX_PULL_REQUEST_FETCH_OUTCOME_NOT_FOUND,
                  hasOpenPr: !1,
                }),
              null
            )
          } catch (e) {
            throw (
              t.aborted ||
                o
                  .get(s.YV)
                  .logProductEvent(n.CodexPullRequestFetchCompleted, {
                    ...a,
                    outcome:
                      "unavailable" === j
                        ? n.CodexPullRequestFetchOutcome.CODEX_PULL_REQUEST_FETCH_OUTCOME_UNAVAILABLE
                        : n.CodexPullRequestFetchOutcome.CODEX_PULL_REQUEST_FETCH_OUTCOME_ERROR,
                    unavailableReason: y ?? "none",
                  }),
              e
            )
          }
        },
        retry: !1,
        refetchOnMount: !0,
        refetchOnWindowFocus: !0,
        staleTime: u.D.ONE_MINUTE,
      }
    })
    o.d(t, {}, { c: g })
  },
  CocG(e, t, o) {
    o.d(t, { w: () => k })
    var n = o("zTeN"),
      r = o("dbK8"),
      a = o("Hx2s"),
      s = o("fiy3"),
      i = o("Y4Ny"),
      l = o("OWtl"),
      c = o("DBCl"),
      d = o("iLLc"),
      u = o("koMX"),
      m = o("rBiz"),
      h = o("B81s"),
      p = o("ndjw"),
      g = o("rvFo"),
      f = o("i6yo"),
      x = o("WHCc"),
      w = o("Zdy5")
    let v = (0, n.i1)(l.u, (e, { get: t }) => {
      let o = e.hostId ?? "local",
        n = null == e.url ? null : (0, s.XT)(e.url)
      if (n?.hostname === "gitlab.com") {
        let r = t(f.l),
          a = t(m.CX, o),
          s = t(m.p$, null == a ? null : { account: a, pullRequest: n }),
          i = r && null == a ? t(h.lt, o) : null,
          l = r && (null != a || i?.isPending) ? s.error : Error("The selected GitLab account is unavailable"),
          c = r ? s.data : void 0
        return {
          provider: "gitlab",
          data:
            null == c
              ? void 0
              : {
                  baseBranch: c.baseBranch,
                  details: null,
                  hasOpenPr: "open" === c.status || "draft" === c.status,
                  headBranch: c.headBranch,
                  headRepository: c.headRepository,
                  isDraft: "draft" === c.status,
                  number: n.number,
                  repo: `${n.owner}/${n.repository}`,
                  state: "draft" === c.status ? "open" : c.status,
                  title: c.title,
                  url: e.url ?? null,
                },
          dataUpdatedAt: s.dataUpdatedAt,
          error: l,
          isError: null != l,
          isLoading: null == l && s.isLoading,
          isPending: null == l && s.isPending,
          isSuccess: null == l && s.isSuccess,
          refetch: s.refetch,
        }
      }
      let r =
          null == n && null == e.originUrl && null != e.cwd
            ? t(u.gitOriginsQuery$, { params: { dirs: [e.cwd], hostId: o }, source: e.operationSource })
            : null,
        a =
          null == n
            ? (0, c.tN7)(e.originUrl ?? r?.data?.origins[0]?.originUrl ?? "")
            : { host: n.hostname, owner: n.owner, repo: n.repository },
        i = a?.host.toLowerCase() === "gitlab.com",
        l =
          i && null == n && null != e.cwd
            ? t(d.o, {
                enabled: !0,
                key: "remote.upstream.url",
                lookup: { cwd: e.cwd, hostConfig: t(p.fm, o) },
                operationSource: e.operationSource,
                retainRepoWatch: !1,
                scope: "local",
                staleTime: g.D.ONE_MINUTE,
              })
            : null,
        v = (0, c.tN7)(l?.data ?? "")?.host.toLowerCase(),
        j = !!l?.data?.trim() && (null == v || !(0, w.d)(v))
      if (null == n && i && !j) {
        let n = t(f.l),
          r = t(x.s, {
            hostId: o,
            repository: a,
            headBranch: null != e.cwd && l?.isSuccess && !l.isPlaceholderData ? (e.headBranch ?? "") : "",
          }),
          s = l?.error ?? r.error
        return {
          provider: "gitlab",
          data: n ? r.data : void 0,
          dataUpdatedAt: r.dataUpdatedAt,
          error: n ? s : null,
          isError: n && null != s,
          isLoading: n && r.isLoading,
          isPending: n && null == s && r.isPending,
          isSuccess: n && null == s && r.isSuccess,
          refetch: r.refetch,
        }
      }
      return null
    })
    var j = o("BZ3V"),
      b = o("jhQp"),
      y = o("fAUH"),
      C = o("PlM6")
    let k = (0, n.i1)(l.u, (e, { get: t }) => {
      let o,
        n = null == e.url ? null : (0, s.g0)(e.url),
        l = (null == e.url ? null : (0, s.XT)(e.url)) ?? (n?.preserveDestination ? n.pullRequest : null)
      if (null == l && e.headBranch?.trim() === "work" && (0, r.C)((0, a.c)(e.hostId ?? "local")))
        return {
          provider: "github",
          githubAccount: null,
          data: null,
          dataUpdatedAt: 0,
          error: null,
          isError: !1,
          isLoading: !1,
          isPending: !1,
          isSuccess: !0,
          refetch: void 0,
        }
      let c = t(v, e)
      if (null != c) return { ...c, githubAccount: null }
      let d = (0, y.Es)(e.hostId ?? "local"),
        u = null == l && null != e.headBranch ? t(j.c, { ...e, headBranch: e.headBranch }) : null,
        m = l ?? u?.data,
        h = t(y.v$, {
          ...e,
          cwd: null == m ? e.cwd : null,
          repository: null == m ? void 0 : { host: m.hostname, owner: m.owner, repo: m.repository },
          operation: null == m ? "status" : "detail",
        }),
        { source: p, isFallback: g } = h,
        f =
          "github-cli" === p || "github-connector" === p
            ? t(i.currentGitHubUserQuery$, {
                hostId: d,
                hostname: m?.hostname ?? h.originRepository?.host ?? "github.com",
                provider: p,
                connection: h.originConnection ?? h.upstreamConnection,
                source: e.operationSource,
              })
            : null,
        x = f?.data?.status === "success" ? f.data.account : null,
        w =
          null != m && null != x && ("github-cli" === p || "github-connector" === p)
            ? { request: { account: x, pullRequest: m }, provider: p, source: e.operationSource, isFallback: g }
            : null,
        k = null == w ? null : t(b.f, w),
        I = null != w && !1 !== e.includeDetails && "sidebar_task_pr_chip" !== e.operationSource ? t(C.o, w) : null,
        _ = k ?? (u?.data != null ? f : u) ?? f,
        S =
          null != k
            ? (k.error ?? I?.error ?? null)
            : (u?.error ?? f?.error ?? ("unavailable" === p ? Error("Pull request status source unavailable") : null)),
        M = null == S && (k?.isPending ?? ("loading" === p || u?.isPending === !0 || (null != m && null == x))),
        N = null == k && u?.isSuccess === !0 && null == m
      if (k?.data != null) {
        let e = k.data
        o =
          "not-found" === e.status
            ? null
            : {
                baseBranch: e.baseBranch,
                headBranch: e.headBranch,
                headRepository: e.headRepository,
                details: I?.data?.status === "success" ? I.data : null,
                summary: e,
                hasOpenPr: e.hasOpenPr,
                isDraft: e.isDraft,
                number: m?.number ?? null,
                repo: null == m ? null : `${m.owner}/${m.repository}`,
                state: e.state,
                title: e.title,
                url: n?.preserveDestination ? n.url : e.url,
              }
      } else N && (o = null)
      return {
        provider: "github",
        githubAccount: x,
        data: o,
        dataUpdatedAt: k?.dataUpdatedAt ?? 0,
        error: S,
        isError: null != S,
        isLoading: M && _?.isFetching === !0,
        isPending: M,
        isSuccess: null == S && !M,
        refetch: I?.refetch ?? _?.refetch,
      }
    })
  },
  rBiz(e, t, o) {
    o.d(t, { xH: () => w, hu: () => v, p$: () => x, CX: () => f })
    var n = o("zTeN"),
      r = o("i6yo"),
      a = o("jYuX"),
      s = o("DBCl"),
      i = o("ASxG"),
      l = o("fiy3"),
      c = o("B81s")
    let d = i.object({ id: i.number().int().positive(), project_id: i.number().int().positive(), status: i.string() })
    var u = o("osNz")
    let m = i.object({
      data: i.object({
        iid: i.number().int().positive(),
        project_id: i.number().int().positive(),
        source_project_id: i.number().int().positive().nullable(),
        source_branch: i.string(),
        target_branch: i.string(),
        title: i.string(),
        author: i.object({ id: i.number().int() }),
        description: i.string().nullish(),
        state: i.enum(["opened", "closed", "merged", "locked"]),
        draft: i.boolean(),
        web_url: i.url(),
        head_pipeline: d.nullish(),
      }),
    })
    var h = o("OWtl"),
      p = o("rvFo"),
      g = o("PP5b")
    let f = (0, n.i1)(
        h.u,
        (e, { get: t }) => {
          if (!t(r.l)) return null
          let { data: o } = t(c.lt, e),
            n = null == o ? null : (0, a.O4)(o.data, "detail")
          return null == n ? null : { hostId: e, accountLinkId: n.accountLinkId }
        },
        { isEqual: (e, t) => e?.hostId === t?.hostId && e?.accountLinkId === t?.accountLinkId },
      ),
      x = (0, n.vU)(h.u, (e, { get: t, scope: o }) => {
        let n = t(r.l),
          i = n && null != e ? t(c.lt, e.account.hostId) : null,
          d = i?.data == null ? null : (0, a.O4)(i.data.data, "detail")
        return {
          enabled: n && null != e && !i?.isPending,
          queryKey: [g.r, e?.account, e?.pullRequest, d?.accountLinkId],
          queryFn: async () => {
            if (!(0, r.$)(o) || null == e || null == d || d.accountLinkId !== e.account.accountLinkId)
              throw Error("The selected GitLab account is unavailable")
            return (
              await (0, a.qd)(o, d),
              (async function (e, t, o, n) {
                let i = await (0, u.v)(e, t, n, `${o.owner}/${o.repository}`),
                  { data: d } = m.parse(
                    await (0, a.hF)(e, t, n, "get_merge_request", { merge_request_iid: o.number, project_id: i.id }),
                  ),
                  h = (0, l.XT)(d.web_url)
                if (null == h || (0, l.S9)(h) !== (0, l.S9)(o) || d.iid !== o.number || d.project_id !== i.id)
                  throw Error("The selected GitLab merge request changed")
                let p = d.source_project_id === i.id ? i : null
                null == p &&
                  null != d.source_project_id &&
                  (p = await (0, u.v)(e, t, n, d.source_project_id).catch(() => null))
                let g = (0, a.O4)(e.get(c.lt, t).data?.data ?? [], "detail")
                if (!(0, r.$)(e) || g?.accountLinkId !== n.accountLinkId)
                  throw Error("The selected GitLab account changed during the request")
                let f = d.draft ? "draft" : "open",
                  x = "opened" === d.state || "locked" === d.state ? f : d.state
                return {
                  authorId: d.author.id,
                  title: d.title,
                  body: d.description ?? "",
                  state: d.state,
                  status: x,
                  headBranch: d.source_branch,
                  baseBranch: d.target_branch,
                  headPipeline: d.head_pipeline ?? null,
                  headRepository: null == p ? null : (0, s.tN7)(p.web_url),
                }
              })(o, e.account.hostId, e.pullRequest, d)
            )
          },
          retry: !1,
          refetchOnWindowFocus: !0,
          refetchInterval: (e) =>
            (null != e.state.error || e.state.data?.status === "open" || e.state.data?.status === "draft") &&
            p.D.ONE_MINUTE,
          refetchIntervalInBackground: !1,
          staleTime: p.D.ONE_MINUTE,
          gcTime: p.D.TEN_MINUTES,
        }
      })
    async function w(e, t) {
      let { data: o } = await e.query.getOrFetch(c.lt, t),
        n = (0, a.O4)(o, "detail")
      if (null == n || !(0, r.$)(e)) throw Error("The selected GitLab account is unavailable")
      return (await (0, a.qd)(e, n), { hostId: t, accountLinkId: n.accountLinkId })
    }
    async function v(e, t) {
      if ((await e.when((e) => !e.get(r.l) || !e.get(x, t).isPending), !(0, r.$)(e)))
        throw Error("Native GitLab merge requests are unavailable")
      let { data: o, error: n } = e.get(x, t)
      if (null == o) throw n ?? Error("The selected GitLab merge request is unavailable")
      return o
    }
  },
  PP5b(e, t, o) {
    var n = o("temr"),
      r = o("lI5L"),
      a = o("TpRv")
    let s = "gitlab-merge-request"
    function i(e, t) {
      return (
        null != e &&
        "object" == typeof e &&
        "number" in e &&
        e.number === t.number &&
        "hostname" in e &&
        "string" == typeof e.hostname &&
        e.hostname.toLowerCase() === t.hostname.toLowerCase() &&
        "owner" in e &&
        "string" == typeof e.owner &&
        e.owner.toLowerCase() === t.owner.toLowerCase() &&
        "repository" in e &&
        "string" == typeof e.repository &&
        e.repository.toLowerCase() === t.repository.toLowerCase()
      )
    }
    o.d(
      t,
      {},
      {
        r: s,
        t: function (e, { account: t, pullRequest: o }, l) {
          if ("gitlab-connector" !== t.provider) return l()
          let c = t.connectorId === n.MF && "gitlab.com" === t.hostname,
            d = { ...o },
            u = c
              ? {
                  provider: t.provider,
                  hostname: t.hostname,
                  connectorId: t.connectorId,
                  accountLinkId: t.accountLinkId,
                }
              : { ...t },
            m = ["detail", "reviewers"].map((t) => ({
              queryKey: [...(0, r.Y)(e.get, t), { account: u }],
              predicate: ({ queryKey: e }) => {
                let t = e[4]
                return null != t && "object" == typeof t && "pullRequest" in t && i(t.pullRequest, d)
              },
            }))
          c &&
            m.push({
              queryKey: [s, { accountLinkId: t.accountLinkId }, {}, t.accountLinkId],
              predicate: ({ queryKey: e }) => i(e[2], d),
            })
          let h = e.queryClient
          return (0, a.i)(h, m, l, "background")
        },
      },
    )
  },
  SjgE(e, t, o) {
    var n = o("Ko9s"),
      r = o("uZMB"),
      a = o("X6Vn"),
      s = o("vueX")
    o.d(
      t,
      {},
      {
        l: function (e, t, o) {
          return o?.aborted
            ? Promise.resolve(!1)
            : new Promise((n) => {
                let r = () => {
                  ;(0, a.Oo)(e, s.q)
                }
                ;(o?.addEventListener("abort", r, { once: !0 }),
                  (0, a.qf)(
                    e,
                    s.q,
                    {
                      missingProjectSources: t.missingProjectSources,
                      projectName: t.targetProjectName,
                      onCancel: () => n(!1),
                      onContinue: () => n(!0),
                    },
                    {
                      onDispose: () => {
                        ;(o?.removeEventListener("abort", r), queueMicrotask(() => n(!1)))
                      },
                    },
                  ))
              })
        },
        p: function (e, t, o) {
          let a, s
          return {
            projectId: t,
            confirm: () =>
              (a =
                a ??
                (0, n.confirmChatGptProjectForLocalTask)(
                  e,
                  { projectId: t, projectName: (0, r._l)(e).find((e) => e.gizmo.id === t)?.gizmo.display.name ?? null },
                  o,
                )),
            sync: () => (s = s ?? (0, n.syncChatGptProjectForLocalTask)(e, t)),
          }
        },
      },
    )
  },
  WrLE(e, t, o) {
    var n = o("DBCl"),
      r = o("JpbF"),
      a = o("SPnB"),
      s = o("ay73"),
      i = o("ZJGn"),
      l = o("nN6w"),
      c = o("r4QU"),
      d = o("jFzS"),
      u = o("t7lM"),
      m = o("gEXS"),
      h = o("sq4L"),
      p = o("RFDv"),
      g = o("kkgo"),
      f = o("d6Ff"),
      x = o("QGyr")
    function w(e, t) {
      let o = e.get(p.oN)
      if (null == o) return
      let n = t.startsWith("codex:thread:") ? (0, f.Pc)(t.slice(13)) : null,
        r = null != n && e.get(p.$h, { threadKey: n.key, locationId: null }),
        a = null
      t.startsWith("codex:project:") ? (a = t.slice(14)) : t.startsWith("chatgpt:project:") && (a = t.slice(16))
      let s = null != a && e.get(x.T8, o)?.projectId === a
      ;(r && (0, m.iA)(), (r || s) && (0, p.eU)(e, o, null))
    }
    o.d(
      t,
      {},
      {
        Rh: w,
        WZ: function (e, t) {
          let o = e.get(a.PO).authenticatedAccountId
          ;(0, r.pA)(e, { label: u.J.itemMoved, transitionQueueKey: `sidebar-custom-sections:${o}` }, () => {
            ;(w(e, t), (0, d.B_)(e, t))
          })
        },
        X6: function (e, t, o, { beforeItemKey: m, beforeMove: f, threadHostId: x } = {}) {
          let v = e.get(a.PO).authenticatedAccountId,
            j = () =>
              e.get(c.DW) && e.get(a.PO).authenticatedAccountId === v && e.get(d.QV).some(({ id: e }) => e === t)
          if (!j()) return
          let b = null == f ? null : (0, l.Iz)(o),
            y =
              null != b &&
              e.get(i.n) &&
              (x ?? (0, g.M0)(e.get, (0, n.JXB)(b))) !== n.iwv &&
              e.query.snapshot(s.yQ).getData()?.serverOrderedThreadIds?.includes(b) === !0,
            C = () => {
              if (j())
                return (0, r.pA)(
                  e,
                  { label: u.J.itemMoved, transitionQueueKey: `sidebar-custom-sections:${v}` },
                  () => (
                    (0, p.wE)(e, `custom:${t}`, !0),
                    w(e, o),
                    (0, d.f2)(e, t, o, m, { wasPinned: y, updateSidebarThreadPinned: h.k, threadHostId: x })
                  ),
                ).value
            }
          return null == f || y
            ? C()
            : (async function (e) {
                let t = await e
                return (t && (await C()), t)
              })(f())
        },
      },
    )
  },
  ZgUq(e, t, o) {
    o.d(t, { oI: () => Q, a: () => K, zS: () => z })
    var n = o("K6lt"),
      r = o("zKw6"),
      a = o.n(r),
      s = o("DBCl"),
      i = o("Qgfj"),
      l = o("tl5a"),
      c = o("u4MG"),
      d = o("uZMB"),
      u = o("SGsN"),
      m = o("Wbxh"),
      h = o("svjy"),
      p = o("Jfr7"),
      g = o("NF58"),
      f = o("f4th"),
      x = o("VwBp"),
      w = o("a8ri"),
      v = o("f7OR"),
      j = o("SIT2"),
      b = o("XsHM"),
      y = o("V3rO"),
      C = o("kfGJ"),
      k = o("SjgE"),
      I = o("WrLE"),
      _ = o("Pfrd"),
      S = o("FHI1"),
      M = o("pSzu"),
      N = o("bnxy"),
      L = o("nOQb"),
      A = o("M9WK"),
      T = o("PfPw"),
      P = o("ndjw"),
      R = o("V0vl"),
      E = o("WFY2"),
      O = o("iQgv"),
      U = o("psi4"),
      B = o("sq4L"),
      F = o("Lzlp"),
      W = o("h54q"),
      H = o("GMPe"),
      D = o("GaA7")
    async function q(e) {
      let t = D.appServices.threadProjectAssignments
      if (null == t) throw Error("Thread project membership is not supported by this host")
      await t.setMembership({ ...e, threadId: (0, s.JXB)(e.threadId) })
    }
    let G = new WeakMap()
    async function z(e, t, o) {
      let n = o.pendingThreadStart,
        r = e.get(F.cH).find((e) => e.threadKey === o.key),
        a = (e) => e(F.cH).find((e) => e.threadKey === o.key) === r && (0, p.an)(e, n.clientThreadId, n.task.accountId),
        i = await (0, p.qZ)(e, n.clientThreadId, n.task.accountId, a)
      if (null == i) return null
      let l = t.beforeThreadId
      if (null != l && (0, s.L$F)(l)) {
        let t = e.get(y.Pt, l)
        l = t?.task == null ? e.get(y.Tl, l) : await (0, p.qZ)(e, l, t.task.accountId, a)
      }
      return a(e.get) ? { ...t, threadId: i, beforeThreadId: l } : null
    }
    function Q(e, t, { allProjectGroups: o, allSidebarItems: n }) {
      let { sourceContainerId: r, targetContainerId: a, threadId: s } = t
      if ("chatgpt" === t.targetProjectOrigin || !a.startsWith("project:")) return
      let i = n.find((e) => (0, W.d5)(e.task) === s)?.task
      if (null == i || ("local" === i.kind && null == i.summary)) return
      let l = r?.startsWith("project:") ? r.slice(8) : null,
        c = o.find((e) => (null == l ? e.threadKeys.includes(i.key) : e.projectId === l)),
        d = o.find((e) => e.projectId === a.slice(8))
      if (null == d) return
      let u = (0, _.eU)(i.kind, "local" === i.kind ? i.summary.hostId : null, c?.projectKind)
      if ("local" !== d.projectKind || d.projectKind !== u || ("local" === i.kind && !Z(i, d))) return
      let m = V({ sourceGroup: c, targetGroup: d })
      if (null != m)
        return {
          ...m,
          targetProjectName: e.get(w.l) ? (e.get(x.Q, d.projectId) ?? m.targetProjectName) : m.targetProjectName,
        }
    }
    async function K(e, t, o) {
      let r = await (async function e(
        t,
        o,
        {
          allProjectGroups: r,
          allSidebarItems: a,
          addMissingProjectSources: i,
          chatGptProjectMove: l,
          sourceProjectWorkspaceRoot: p,
          targetWorktreeWorkspaceRoot: w,
          worktreesSegment: y,
          signal: I,
          onPlacementError: S,
        },
      ) {
        let D, z, K
        if (I?.aborted) return !1
        let {
          threadId: et,
          sourceContainerId: eo,
          targetContainerId: en,
          beforeThreadId: er,
          insertAtEnd: ea,
          targetProjectOrigin: es,
          useDefaultOrder: ei,
        } = o
        if (null == et) return !1
        let el = a.find((e) => (0, W.d5)(e.task) === et)?.task
        if ("pinned" === en) return (0, B.L)(t, et, !0, er, el?.kind === "remote" ? "remote" : void 0)
        if (null == el || ("local" === el.kind && null == el.summary)) return !1
        let ec = G.get(t)
        ;(ec?.get(et)?.confirmation.abort(), ec?.get(et)?.clearPreview?.(), ec?.delete(et))
        let ed = eo?.startsWith("project:") ? eo.slice(8) : null,
          eu = r.find((e) => (null == ed ? e.threadKeys.includes(el.key) : e.projectId === ed))
        if ("cloud" === en)
          return (
            "remote" === el.kind &&
            X(t, {
              membershipSave: q({ threadId: et, assignment: null, projectless: !1 }),
              sidebarSave: () => Y(t, et, eo),
            })
          )
        if ("chats" === en) {
          if (
            (null == eu ? [] : $(eu)).length > 0 &&
            ("local" !== el.kind || eu?.projectKind !== "local" || el.summary.hostId !== C.fI)
          )
            return !1
          let e = "local" === el.kind ? (0, R.rU)(t, el.summary.conversationId, J(t, el.summary, eu)) : null
          return X(t, {
            membershipSave: q({
              threadId: et,
              assignment: null == e ? null : (0, n.TQ)(e.state),
              projectless: !0,
              hostId: "local" === el.kind ? el.summary.hostId : void 0,
            }),
            sidebarSave: () => Y(t, et, eo),
            move:
              null == e || "local" !== el.kind
                ? void 0
                : { conversationId: el.summary.conversationId, workspaceMove: e },
          })
        }
        let em = en.slice(8)
        if ("chatgpt" === es) {
          if ("local" !== el.kind || el.summary.hostId !== C.fI) return !1
          let c = t.get(R.ty, et),
            u = null == c ? (0, s.DZs)((0, m.F6)(t.get, s.Q2Y.THREAD_PROJECT_ASSIGNMENTS))[et] : (0, n.TQ)(c)
          if (u?.projectKind === "local" && u.projectId === em && "chatgpt" === u.projectOrigin)
            return X(t, { sidebarSave: () => Y(t, et, eo, em) })
          let h = ec ?? new Map()
          G.set(t, h)
          let g = { confirmation: new AbortController() }
          h.set(et, g)
          let f = l?.projectId === em ? l : (0, k.p)(t, em, I),
            v = await f.confirm()
          if (I?.aborted || h.get(et) !== g) return (h.get(et) === g && h.delete(et), !1)
          if (!v) return (h.delete(et), !1)
          g.clearPreview = (0, F.dQ)(t, [
            { ...o, homeContainerId: eo, sourceProjectKind: "local", threadKey: el.key, useDefaultOrder: !1 },
          ])
          try {
            let n = await f.sync()
            if (I?.aborted || h.get(et) !== g || null == n) return !1
            let l = (0, m.F6)(t.get, s.Q2Y.LOCAL_PROJECTS)?.[n.projectId],
              c = r.find((e) => "local" === e.projectKind && e.projectId === n.projectId),
              u = {
                projectKind: "local",
                projectId: n.projectId,
                label:
                  t.get(x.Q, n.projectId) ??
                  (0, d._l)(t).find((e) => e.gizmo.id === em)?.gizmo.display.name ??
                  l?.name ??
                  em,
                rootPaths: l?.rootPaths ?? n.rootPaths,
                gitRepos: c?.gitRepos ?? [],
                isCodexWorktree: !1,
                threadKeys: c?.threadKeys ?? [],
              },
              v = [...r.filter((e) => e.projectId !== n.projectId), u],
              j = { ...o, targetContainerId: `project:${n.projectId}`, targetProjectOrigin: void 0 },
              b = Q(t, j, { allProjectGroups: v, allSidebarItems: a })
            if (
              (null != b &&
                !0 !== i &&
                !(await (0, k.l)(
                  t,
                  b,
                  null == I ? g.confirmation.signal : AbortSignal.any([I, g.confirmation.signal]),
                ))) ||
              I?.aborted ||
              h.get(et) !== g
            )
              return !1
            return await e(t, j, {
              allProjectGroups: v,
              allSidebarItems: a,
              addMissingProjectSources: null != b || i,
              sourceProjectWorkspaceRoot: p,
              targetWorktreeWorkspaceRoot: w,
              worktreesSegment: y,
              signal: I,
              onPlacementError: S,
            })
          } finally {
            ;(g.clearPreview(), h.get(et) === g && h.delete(et))
          }
        }
        let eh = r.find((e) => e.projectId === em)
        if (null == eh) return !1
        let ep = eh,
          eg = (0, _.eU)(el.kind, "local" === el.kind ? el.summary.hostId : null, eu?.projectKind),
          ef = V({ sourceGroup: eu, targetGroup: ep })
        if (null != ef) {
          if ("local" !== ep.projectKind || ep.projectKind !== eg || ("local" === el.kind && !Z(el, ep)) || !0 !== i)
            return !1
          let e = (0, m.F6)(t.get, s.Q2Y.LOCAL_PROJECTS),
            o = e?.[ep.projectId]
          if (null == o) return !1
          let n = (0, f.w)([...o.rootPaths, ...ef.missingProjectSources])
          try {
            if (!(await (0, j.y)().editLocal({ name: "", projectId: ep.projectId, sources: n }))) return !1
          } catch (e) {
            return (
              E.v.error("Failed to add missing project folders", { safe: {}, sensitive: { error: (0, s.Rt_)(e) } }),
              t
                .get(u.Id)
                .danger(t.get(h.g).formatMessage(ee.threadMoveSaveFailed), {
                  errorAnalytics: { toastId: "sidebarThreadDropActions.moveSidebarThread.threadMoveSaveFailed" },
                }),
              !1
            )
          }
          ep = { ...ep, label: o.name, path: (0, s.ycq)(n) ?? void 0, rootPaths: n }
        }
        if (ep.projectKind !== eg && !ep.threadKeys.includes(el.key)) return !1
        let ex = eu?.projectId !== ep.projectId,
          ew = !0 === ei && (!ex || "manual" !== t.get(M.by).projectSortMode),
          ev = ew
            ? null
            : {
                projectId: ep.projectId,
                tasks: [
                  ...(0, L.Oy)(ep.threadKeys, new Map(a.map((e) => [e.task.key, e]))).filter((e) => e.key !== el.key),
                  el,
                ],
                threadId: et,
                beforeThreadId: er,
                insertAtEnd: ea,
              },
          ej = () => {
            let e = Promise.resolve()
            return (
              ew && ex ? (e = (0, H.c7)(t, et)) : null != ev && (e = (0, H.fz)(t, ev)),
              Promise.all([
                e,
                ex ? (D?.save() ?? (0, v.JT)(t, ep.projectId, et)) : void 0,
                "pinned" === eo ? (0, B.L)(t, et, !1) : Promise.resolve(),
              ]).then(() => void 0)
            )
          },
          eb =
            null == ev
              ? void 0
              : async () => {
                  D = ex ? (0, v.Lo)(t, ep.projectId, et) : void 0
                  let e = await (0, H.ub)(t, ev)
                  return () => {
                    ;(D?.undo(), e())
                  }
                }
        if (ep.threadKeys.includes(el.key) && null == w) return X(t, { sidebarSave: ej, onPlacementError: S })
        if ("remote" === el.kind) {
          if ("remote" !== ep.projectKind) return !1
          let e = await eb?.()
          return I?.aborted
            ? (e?.(), !1)
            : X(t, {
                membershipSave: q({
                  threadId: et,
                  assignment: { projectKind: "remote", projectId: ep.projectId, hostId: ep.hostId },
                  projectless: !1,
                }),
                rollbackSidebarPreview: e,
                sidebarSave: ej,
                onPlacementError: S,
              })
        }
        if (!Z(el, ep)) return !1
        let ey = J(t, el.summary, eu)
        switch (ep.projectKind) {
          case "remote":
            if (null == ep.hostId) return !1
            ;((K = (0, R.vB)(t, {
              appliedFallback: ey,
              conversationId: el.summary.conversationId,
              project: { projectKind: "remote", projectId: ep.projectId, hostId: ep.hostId },
              target: { projectSources: [ep.path], cwd: ep.path, runtimeWorkspaceRoots: [ep.path] },
            })),
              (z = { projectKind: "remote", projectId: ep.projectId, hostId: ep.hostId }))
            break
          case "local": {
            let e = (0, b.l_)(ep),
              o = e[0],
              r = e
            if (null == o) {
              let t = await (0, g.OR)({ project: { rootPaths: e }, prompt: el.summary.title })
              ;((o = t.cwd), (r = t.workspaceRoots))
            }
            let a =
                void 0 === w
                  ? await (async function (e, t, o, n, r) {
                      let a = "local" === o.projectKind ? (0, b.l_)(o) : [],
                        i = (0, s.ycq)(a)
                      if (null == i) return null
                      let l = (0, s.DIv)(i),
                        c = e.get(R.A3, t) ?? n ?? null,
                        d = e.get(T.mO) ?? (0, C.vR)(C.fI, null)
                      try {
                        let o = await (0, O.V)("git").request({
                          method: "resolve-worktree-for-thread",
                          params: {
                            cwd: l,
                            threadCwd: null == c ? void 0 : (0, s.DIv)(c),
                            conversationId: t,
                            hostConfig: d,
                            operationSource: "sidebar_threads_section",
                          },
                        })
                        if (null != o.worktreeWorkspaceRoot) return o.worktreeWorkspaceRoot
                        let n = e.get(P.lE, { hostId: d.id }).data,
                          a = (0, U.HG)(c, null == n ? r : (0, A._9)(n))
                        if (null == a || null == c) return null
                        let u = await (0, O.V)("git").request({
                          method: "managed-worktree-state",
                          params: {
                            candidateRoots: [(0, s.PUz)(i)],
                            cwd: (0, s.DIv)(c),
                            worktreePath: (0, s.DIv)(a),
                            hostConfig: d,
                            operationSource: "sidebar_threads_section",
                          },
                        })
                        return "restorable" === u.kind ? c : null
                      } catch (e) {
                        return (
                          E.v.warning("Failed to resolve an existing worktree for moved thread.", {
                            safe: {},
                            sensitive: { error: (0, s.Rt_)(e) },
                          }),
                          null
                        )
                      }
                    })(t, el.summary.conversationId, ep, el.summary.cwd, y)
                  : w,
              { project: i, target: l } = (function ({
                projectCwd: e,
                projectSources: t,
                projectWorkspaceRoots: o,
                sourceProjectWorkspaceRoot: n,
                targetGroup: r,
                worktreeWorkspaceRoot: a,
              }) {
                let s = a ?? e,
                  i = null == n ? 0 : ((0, N.c1)(o, n) ?? 0)
                return {
                  project: { projectKind: "local", projectId: r.projectId },
                  target: {
                    projectSources: t,
                    cwd: s,
                    runtimeWorkspaceRoots: null == a ? o : o.map((e, t) => (t === i ? s : e)),
                  },
                }
              })({
                projectCwd: o,
                projectSources: e,
                projectWorkspaceRoots: r,
                sourceProjectWorkspaceRoot: p,
                targetGroup: ep,
                worktreeWorkspaceRoot: a,
              })
            if (I?.aborted) return !1
            ;((K = (0, R.vB)(t, {
              appliedFallback: ey,
              conversationId: el.summary.conversationId,
              project: "local" === i.projectKind && (0, c.w7)(i.projectId) ? { ...i, projectOrigin: "chatgpt" } : i,
              target: l,
            })),
              (z = (0, n.TQ)(K.state)))
          }
        }
        let eC = await eb?.()
        return I?.aborted
          ? (eC?.(), (0, R.xT)(t, el.summary.conversationId, K), !1)
          : X(t, {
              membershipSave: q({ threadId: et, assignment: z, projectless: !1 }),
              rollbackSidebarPreview: eC,
              sidebarSave: ej,
              onPlacementError: S,
              move: { conversationId: el.summary.conversationId, workspaceMove: K },
            })
      })(e, t, o)
      if (r && t.sourceContainerId?.startsWith("custom:") === !0) {
        let n = o.allSidebarItems.find((e) => (0, W.d5)(e.task) === t.threadId)?.task
        null != n && (0, I.WZ)(e, (0, S.h8)(n.key))
      }
      return r
    }
    function V({ sourceGroup: e, targetGroup: t }) {
      if (null == e) return null
      let o = "local" === e.projectKind ? C.fI : e.hostId,
        n = "local" === t.projectKind ? C.fI : t.hostId,
        r = e.projectKind === t.projectKind && o === n
      if (r && e.projectId === t.projectId) return null
      let a = r ? $(t).map((e) => (0, N.JH)(e).replace(/\/+$/, "")) : [],
        s = $(e).filter((e) => {
          let t = (0, N.JH)(e).replace(/\/+$/, "")
          return !a.some((e) => t === e || t.startsWith(`${e}/`))
        })
      return 0 === s.length ? null : { missingProjectSources: s, targetProjectName: t.label }
    }
    function $(e) {
      switch (e.projectKind) {
        case "local":
          return (0, b.l_)(e)
        case "remote":
          return [e.path]
      }
    }
    function Z(e, t) {
      let o = "remote" === t.projectKind ? t.hostId : C.fI,
        n = e.summary.hostId
      return null != o && o === n
    }
    function J(e, t, o) {
      let r,
        i = e.get(l.ok, { hostId: t.hostId, threadId: t.conversationId }),
        c = t.cwd
      if (o?.projectKind === "local") {
        let e = 1 === (r = (0, b.l_)(o)).length ? r[0] : void 0
        if (null != e && null != t.cwd) {
          let o = a().posix.relative((0, N.JH)(e), (0, N.JH)(t.cwd))
          ;("" !== o && (o.startsWith(`..${a().posix.sep}`) || ".." === o || a().posix.isAbsolute(o))) || (c = e)
        }
      } else
        "projectless" === t.workspaceKind &&
          i?.workspaceBrowserRoot != null &&
          i?.workspaceBrowserRoot !== s.m20 &&
          ((r = [i?.workspaceBrowserRoot]), (c = i?.workspaceBrowserRoot))
      return (0, n.gJ)({
        cwd: t.cwd,
        projectSources: r,
        runtimeWorkspaceRoots: i?.currentPermissions?.runtimeWorkspaceRoots ?? (null == c ? void 0 : [c]),
      })
    }
    function Y(e, t, o, n) {
      return Promise.all([
        null == n ? void 0 : (0, v.JT)(e, n, t),
        null != n && "manual" === e.get(M.by).projectSortMode
          ? (0, H.fz)(e, { projectId: n, tasks: [], threadId: t, beforeThreadId: null })
          : (0, H.c7)(e, t),
        "pinned" === o ? (0, B.L)(e, t, !1) : Promise.resolve(),
      ]).then(() => void 0)
    }
    async function X(
      e,
      { membershipSave: t, rollbackSidebarPreview: o, sidebarSave: n, move: r, onPlacementError: a },
    ) {
      try {
        await t
      } catch (t) {
        return (
          o?.(),
          null != r && (0, R.xT)(e, r.conversationId, r.workspaceMove),
          E.v.error("Failed to save thread project membership", { safe: {}, sensitive: { error: (0, s.Rt_)(t) } }),
          e
            .get(u.Id)
            .danger(e.get(h.g).formatMessage(ee.threadMoveSaveFailed), {
              errorAnalytics: { toastId: "sidebarThreadDropActions.saveThreadMove.threadMoveSaveFailed" },
            }),
          !1
        )
      }
      try {
        await n()
      } catch (e) {
        ;(a?.(),
          E.v.warning("Failed to save sidebar state after moving thread", {
            safe: {},
            sensitive: { error: (0, s.Rt_)(e) },
          }))
      }
      return !0
    }
    let ee = (0, i.YK)({
      threadMoveSaveFailed: {
        id: "sidebar.threadMove.saveFailed",
        defaultMessage: "Couldn’t move chat",
        description: "Error shown when moving a Codex task between projects fails",
      },
    })
  },
  vueX(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("slpy"),
      s = o("oyxz"),
      i = o("Sm6l"),
      l = o("JNtf"),
      c = o("mUDD"),
      d = o("bVeK"),
      u = o("bnxy")
    function m(e) {
      return (0, n.jsx)(
        "li",
        {
          children: (0, n.jsx)(a.m, {
            content: e,
            children: (0, n.jsxs)("div", {
              className: "flex min-w-0 items-center gap-2",
              children: [
                (0, n.jsx)(d.efV, {}),
                (0, n.jsx)("span", { className: "min-w-0 truncate", children: (0, u.Q0)(e) || e }),
              ],
            }),
          }),
        },
        e,
      )
    }
    o.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            o,
            a,
            d,
            u,
            h,
            p,
            g,
            f,
            x,
            w,
            v,
            j,
            b,
            y = (0, r.c)(33),
            { missingProjectSources: C, onClose: k, onCancel: I, onContinue: _, projectName: S } = e
          y[0] !== I || y[1] !== k
            ? ((t = () => {
                ;(I?.(), k())
              }),
              (y[0] = I),
              (y[1] = k),
              (y[2] = t))
            : (t = y[2])
          let M = t
          y[3] !== k || y[4] !== _
            ? ((o = (e) => {
                ;(e.preventDefault(), k(), _())
              }),
              (y[3] = k),
              (y[4] = _),
              (y[5] = o))
            : (o = y[5])
          let N = o
          return (
            y[6] !== S
              ? ((a = (0, n.jsx)(l.L3, {
                  className: "contents",
                  children: (0, n.jsx)(s.A, {
                    id: "sidebar.threadProjectMoveConfirmation.title",
                    defaultMessage: "Add folders to {projectName}?",
                    description:
                      "Title shown before adding missing source folders to a destination project and moving a chat",
                    values: { projectName: S },
                  }),
                })),
                (y[6] = S),
                (y[7] = a))
              : (a = y[7]),
            y[8] !== S
              ? ((d = (0, n.jsx)(l.rr, {
                  className: "contents",
                  children: (0, n.jsx)(s.A, {
                    id: "sidebar.threadProjectMoveConfirmation.bodyWithFolderList",
                    defaultMessage: "All chats in {projectName} will gain access to these folders:",
                    description:
                      "Explanation shown above the list of source folders that will be added to the destination project before moving a chat",
                    values: { projectName: S },
                  }),
                })),
                (y[8] = S),
                (y[9] = d))
              : (d = y[9]),
            y[10] !== C ? ((u = C.map(m)), (y[10] = C), (y[11] = u)) : (u = y[11]),
            y[12] !== u
              ? ((h = (0, n.jsx)("ul", { className: "flex flex-col gap-1", children: u })), (y[12] = u), (y[13] = h))
              : (h = y[13]),
            y[14] !== d || y[15] !== h
              ? ((p = (0, n.jsxs)("div", { className: "flex flex-col gap-2", children: [d, h] })),
                (y[14] = d),
                (y[15] = h),
                (y[16] = p))
              : (p = y[16]),
            y[17] !== a || y[18] !== p
              ? ((g = (0, n.jsx)(c.OO, { children: (0, n.jsx)(c.c7, { title: a, subtitle: p }) })),
                (y[17] = a),
                (y[18] = p),
                (y[19] = g))
              : (g = y[19]),
            y[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((f = (0, n.jsx)(s.A, {
                  id: "sidebar.threadProjectMoveConfirmation.cancel",
                  defaultMessage: "Cancel",
                  description: "Button label to cancel adding missing project folders and moving a chat",
                })),
                (y[20] = f))
              : (f = y[20]),
            y[21] !== M
              ? ((x = (0, n.jsx)(i.$, { color: "secondary", type: "button", onClick: M, children: f })),
                (y[21] = M),
                (y[22] = x))
              : (x = y[22]),
            y[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((w = (0, n.jsx)(i.$, {
                  type: "submit",
                  children: (0, n.jsx)(s.A, {
                    id: "sidebar.threadProjectMoveConfirmation.continue",
                    defaultMessage: "Continue",
                    description: "Button label to add missing project folders and continue moving a chat",
                  }),
                })),
                (y[23] = w))
              : (w = y[23]),
            y[24] !== x
              ? ((v = (0, n.jsx)(c.OO, { children: (0, n.jsxs)(c.Es, { children: [x, w] }) })),
                (y[24] = x),
                (y[25] = v))
              : (v = y[25]),
            y[26] !== N || y[27] !== v || y[28] !== g
              ? ((j = (0, n.jsxs)(c.R4, { as: "form", onSubmit: N, children: [g, v] })),
                (y[26] = N),
                (y[27] = v),
                (y[28] = g),
                (y[29] = j))
              : (j = y[29]),
            y[30] !== M || y[31] !== j
              ? ((b = (0, n.jsx)(l.lG, { open: !0, onOpenChange: M, size: "compact", children: j })),
                (y[30] = M),
                (y[31] = j),
                (y[32] = b))
              : (b = y[32]),
            b
          )
        },
      },
    )
  },
  G30s(e, t, o) {
    let n = (0, o("iJY0").a)({
      name: "codex-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 0.641602, y: 0.640625, width: 14.71637, height: 14.716797 },
        visualBounds: { x: 0.641602, y: 0.640625, width: 14.71637, height: 14.716797 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.641602, y: 0.640625, width: 14.71637, height: 14.716797 },
        center: { x: 7.999787, y: 7.999024 },
        insets: { top: 0.640625, right: 0.642028, bottom: 0.642578, left: 0.641602 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999787, y: 7.999024 }, foreground: { x: 7.999787, y: 7.999024 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.9554 9.31991C11.2453 9.31991 11.4808 9.55536 11.4808 9.84531C11.4808 10.1353 11.2453 10.3707 10.9554 10.3707H8.73956C8.44962 10.3707 8.21417 10.1353 8.21417 9.84531C8.21417 9.55536 8.44962 9.31991 8.73956 9.31991H10.9554Z" fill="currentColor"/> <path d="M5.14484 5.6998C5.39336 5.55074 5.7163 5.63111 5.86554 5.87949L6.87042 7.55527C7.0333 7.82699 7.03337 8.16639 6.87042 8.43808L5.86554 10.1139C5.7164 10.3623 5.39338 10.4424 5.14484 10.2935C4.89664 10.1443 4.81628 9.82227 4.96515 9.57382L5.91046 7.99667L4.96515 6.4205C4.81603 6.17197 4.89643 5.84905 5.14484 5.6998Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M6.06378 0.774993C7.40975 0.414384 8.60156 0.804206 9.51789 1.64999C10.7843 1.38594 12.3056 1.72772 13.2884 2.71054C14.2628 3.68515 14.6132 5.04469 14.347 6.29745C15.2044 7.24928 15.5805 8.60258 15.2239 9.93417C14.8669 11.266 13.8636 12.2497 12.6448 12.6451C12.2492 13.8632 11.2664 14.8664 9.93488 15.2232C8.6034 15.5797 7.24984 15.2037 6.29816 14.3463C5.04554 14.6123 3.68575 14.2621 2.71124 13.2877C1.73657 12.313 1.38422 10.952 1.6507 9.69882C0.794318 8.74694 0.419332 7.39376 0.775698 6.06308C1.13238 4.73217 2.13401 3.74724 3.35187 3.35116C3.74771 2.13325 4.73292 1.13189 6.06378 0.774993ZM8.97882 2.59042C8.26406 1.83448 7.37093 1.51164 6.33625 1.78866C5.28371 2.07089 4.52386 2.90423 4.28742 3.89706L4.21222 4.21152L3.89874 4.28671C2.90601 4.52312 2.07261 5.28194 1.79035 6.33456C1.50844 7.38739 1.84951 8.46254 2.59113 9.16366L2.82648 9.38534L2.73371 9.69491C2.44223 10.6728 2.68305 11.7738 3.45343 12.5445C4.22406 13.3152 5.32572 13.556 6.30402 13.2643L6.61359 13.1715L6.83527 13.4068C7.53647 14.1488 8.61067 14.4904 9.66339 14.2086C10.7159 13.9265 11.4747 13.0934 11.7112 12.1002L11.7855 11.7857L12.0999 11.7105C13.0933 11.4743 13.927 10.7155 14.2093 9.66269C14.4913 8.60983 14.1495 7.53587 13.4075 6.83456L13.1722 6.61288L13.265 6.30331C13.5569 5.32495 13.3159 4.2235 12.5452 3.45273C11.7836 2.69141 10.5018 2.4369 9.51007 2.733L9.2005 2.82577L8.97882 2.59042Z" fill="currentColor"/>',
    })
    o.d(t, {}, { B: n })
  },
  Gqmd(e, t, o) {
    let n = (0, o("iJY0").a)({
      name: "dock-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.474609, y: 2.474609, width: 13.050781, height: 11.050781 },
        visualBounds: { x: 1.474609, y: 2.474609, width: 13.050781, height: 11.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.474609, y: 2.474609, width: 13.050781, height: 11.050781 },
        center: { x: 8, y: 8 },
        insets: { top: 2.474609, right: 1.47461, bottom: 2.47461, left: 1.474609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.666 9.6416C10.956 9.6416 11.1914 9.87704 11.1914 10.167C11.1913 10.4568 10.9559 10.6924 10.666 10.6924H5.33301C5.04325 10.6923 4.80775 10.4567 4.80762 10.167C4.80762 9.87712 5.04317 9.64173 5.33301 9.6416H10.666Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.1338 2.47461C13.4543 2.47486 14.5251 3.54569 14.5254 4.86621V11.1338C14.5251 12.4543 13.4543 13.5251 12.1338 13.5254H3.86621C2.54569 13.5251 1.47486 12.4543 1.47461 11.1338V4.86621C1.47486 3.54569 2.54569 2.47486 3.86621 2.47461H12.1338ZM3.86621 3.52539C3.12559 3.52564 2.52564 4.12559 2.52539 4.86621V11.1338C2.52564 11.8744 3.12559 12.4744 3.86621 12.4746H12.1338C12.8744 12.4744 13.4744 11.8744 13.4746 11.1338V4.86621C13.4744 4.12559 12.8744 3.52564 12.1338 3.52539H3.86621Z" fill="currentColor"/>',
    })
    o.d(t, {}, { x: n })
  },
  GGw1(e, t, o) {
    let n = (0, o("iJY0").a)({
      name: "usage-limits-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
        visualBounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.474609, y: 1.474609, width: 13.050781, height: 13.050781 },
        center: { x: 8, y: 8 },
        insets: { top: 1.474609, right: 1.47461, bottom: 1.47461, left: 1.474609 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path d="M8 1.47461C11.6037 1.47461 14.5254 4.39634 14.5254 8C14.5254 11.6037 11.6037 14.5254 8 14.5254C4.39634 14.5254 1.47461 11.6037 1.47461 8C1.47461 7.71005 1.71005 7.47461 2 7.47461C2.28995 7.47461 2.52539 7.71005 2.52539 8C2.52539 11.0238 4.97624 13.4746 8 13.4746C11.0238 13.4746 13.4746 11.0238 13.4746 8C13.4746 4.97624 11.0238 2.52539 8 2.52539C7.71005 2.52539 7.47461 2.28995 7.47461 2C7.47461 1.71005 7.71005 1.47461 8 1.47461Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M3.59882 3.07103C3.73308 3.07103 3.86732 3.1222 3.96973 3.22461L6.81934 6.07617C7.16311 5.86471 7.5669 5.74121 8 5.74121C9.24719 5.74125 10.2578 6.75282 10.2578 8C10.2578 9.24719 9.24719 10.2578 8 10.2578C6.75278 10.2578 5.74125 9.24721 5.74121 8C5.74123 7.56641 5.86523 7.16238 6.07715 6.81836L3.22754 3.9668C3.12509 3.86426 3.07385 3.72993 3.07385 3.59563C3.07385 3.30558 3.30888 3.07103 3.59882 3.07103ZM8 6.79199C7.33268 6.79199 6.79204 7.33269 6.79199 8C6.79203 8.66731 7.33268 9.20801 8 9.20801C8.66729 9.20797 9.20797 8.66729 9.20801 8C9.20796 7.33272 8.66729 6.79203 8 6.79199Z" fill="currentColor"/>',
    })
    o.d(t, {}, { n: n })
  },
}
//# sourceMappingURL=832569.1ccb3b78dd.js.map
