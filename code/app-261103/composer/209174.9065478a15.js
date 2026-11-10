export const __rspack_esm_ids = [209174]
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
      g = o("ygO2"),
      f = o("GO7r"),
      x = o("jsiH"),
      w = o("TL6G"),
      v = o("kx7U"),
      b = o("OWtl"),
      j = o("kfGJ")
    let y = {
      connecting: "text-codex-description",
      restarting: "text-chart-blue",
      connected: "text-chart-green",
      disconnected: "text-codex-description",
      error: "text-red",
    }
    function k(e) {
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
    function C(e, t, o) {
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
            d = (0, i.gh)(b.u)
          return (
            a[0] !== s || a[1] !== l || a[2] !== d
              ? ((t = (e) => {
                  ;(e.preventDefault(), e.stopPropagation(), C(d, s, l))
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
        Tn: k,
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
            M = (0, i.gh)(b.u),
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
            O = (0, j.Qz)(w)
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
                      W ? I() : B ? C(M, w, O.kind) : L("/settings/connections"))
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
              x[25] !== E ? ((t = (0, n.jsx)(k, { state: E })), (x[25] = E), (x[26] = t)) : (t = x[26]),
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
            x[34] !== E ? ((p = (0, n.jsx)(k, { state: E })), (x[34] = E), (x[35] = p)) : (p = x[35]),
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
      s = o("ThBa"),
      i = o("GyWG"),
      l = o("zTeN"),
      c = o("zd8w"),
      d = o("oyxz"),
      u = o("Wf1j"),
      m = o("HZfM"),
      h = o("BWQt"),
      p = o("jEN2"),
      g = o("ygO2"),
      f = o("ZZgR"),
      x = o("bqtn"),
      w = o("HOLv"),
      v = o("Bbed"),
      b = o("RNul"),
      j = o("ad0f"),
      y = o("yGJW"),
      k = o("uTrt"),
      C = o("ElU1"),
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
            U = (0, r.c)(88),
            {
              breadcrumbTriggerClassName: B,
              cloudProjectsEnabled: F,
              presentation: W,
              workCloudOnly: H,
              disabled: D,
              isPending: q,
              menuOpen: G,
              menuContentOnly: z,
              workspaceProjectOptions: Q,
              projectId: K,
              projectName: $,
              projectlessTriggerLabel: V,
              shortcut: Z,
              showProjectlessIcon: J,
              subtleHover: X,
              triggerButton: Y,
              variant: ee,
              onCreateProject: et,
              onMenuOpenChange: eo,
              onProjectChange: en,
            } = e,
            er = void 0 === F || F,
            ea = void 0 === W ? "utility" : W,
            es = void 0 !== H && H,
            ei = void 0 !== D && D,
            el = void 0 !== q && q,
            ec = void 0 === J || J,
            ed = void 0 !== X && X,
            eu = void 0 === ee ? "composer" : ee,
            em = (0, l.gh)(S.u),
            eh = (0, M.Zj)("2163293173") && void 0 !== z && z,
            ep = (0, u.A)(),
            { pathname: eg, search: ef } = (0, m.zy)()
          U[0] !== er || U[1] !== eg || U[2] !== ef || U[3] !== eu
            ? ((t = "composer" === eu && er && (0, j.n)(eg) && !(0, L.CV)(ef)),
              (U[0] = er),
              (U[1] = eg),
              (U[2] = ef),
              (U[3] = eu),
              (U[4] = t))
            : (t = U[4])
          let ex = t,
            ew = (0, c.useRef)(!1),
            [ev, eb] = (0, c.useState)(!1),
            [ej, ey] = (0, c.useState)(""),
            ek = G ?? ev,
            eC = ex && ek,
            eI = (0, c.useRef)(!1)
          U[5] !== em
            ? ((o = () => {
                ;(0, y.yy)(em, a.QW, {
                  action: "CHATGPT_WEB_HOME_COMPOSER_PROJECT_SELECTION_ACTION_MENU_OPENED",
                  entrySurface: "composer_footer",
                })
              }),
              (U[5] = em),
              (U[6] = o))
            : (o = U[6])
          let e_ = (0, c.useEffectEvent)(o)
          ;(U[7] !== eC || U[8] !== e_
            ? ((x = () => {
                ;(eC && !eI.current && e_(), (eI.current = eC))
              }),
              (U[7] = eC),
              (U[8] = e_),
              (U[9] = x))
            : (x = U[9]),
            U[10] !== eC ? ((v = [eC]), (U[10] = eC), (U[11] = v)) : (v = U[11]),
            (0, c.useEffect)(x, v),
            U[12] !== eo
              ? ((T = (e) => {
                  ;(eb(e), eo?.(e))
                }),
                (U[12] = eo),
                (U[13] = T))
              : (T = U[13]))
          let eS = T
          U[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((P = (e) => {
                ew.current && ((ew.current = !1), e.preventDefault(), (0, p.xJ)())
              }),
              (U[14] = P))
            : (P = U[14])
          let eM = P
          U[15] !== er ? ((R = { enabled: er }), (U[15] = er), (U[16] = R)) : (R = U[16])
          let { projects: eN } = (0, l.Ul)(N.Ds, R)
          if (
            U[17] !== B ||
            U[18] !== er ||
            U[19] !== ei ||
            U[20] !== ep ||
            U[21] !== ex ||
            U[22] !== el ||
            U[23] !== eN ||
            U[24] !== eh ||
            U[25] !== ek ||
            U[26] !== et ||
            U[27] !== en ||
            U[28] !== ea ||
            U[29] !== K ||
            U[30] !== $ ||
            U[31] !== V ||
            U[32] !== em ||
            U[33] !== ej ||
            U[34] !== eS ||
            U[35] !== Z ||
            U[36] !== ec ||
            U[37] !== ed ||
            U[38] !== Y ||
            U[39] !== eu ||
            U[40] !== es ||
            U[41] !== Q
          ) {
            O = Symbol.for("react.early_return_sentinel")
            e: {
              let e,
                t,
                o,
                r,
                l,
                c,
                u,
                m,
                p,
                x,
                v = er ? eN : []
              U[44] !== K ? ((e = (e) => e.gizmo.id === K), (U[44] = K), (U[45] = e)) : (e = U[45])
              let j = v.find(e),
                S = Q?.projects.find((e) => e.projectId === K),
                M = j?.gizmo.display.name.trim() || S?.label || $ || (K ?? null),
                N =
                  null == K
                    ? null
                    : (0, n.jsx)(C.h, {
                        className: "icon-xs",
                        size: 16,
                        fallbackIcon:
                          S?.projectKind === "remote"
                            ? (0, n.jsx)(k.O, { className: "icon-xs", isRemoteProject: !0, remoteHostId: S.hostId })
                            : (0, n.jsx)(w.I, { className: "shrink-0", "aria-hidden": !1, asset: s.M }),
                        isRemoteProject: S?.projectKind === "remote",
                        remoteHostId: S?.hostId,
                        markerClassName: "size-4",
                        projectId: K,
                      })
              U[46] !== ep
                ? ((t = ep.formatMessage({
                    id: "chatgptConversations.composer.projectSelector.choose",
                    defaultMessage: "Choose project",
                    description: "Accessible button label for opening the project picker from a composer utility bar",
                  })),
                  (U[46] = ep),
                  (U[47] = t))
                : (t = U[47])
              let L = t
              U[48] !== ep
                ? ((o = ep.formatMessage({
                    id: "chatgptConversations.composer.projectSelector.changeTooltip",
                    defaultMessage: "Change project",
                    description: "Tooltip for changing the project selected in a composer utility bar",
                  })),
                  (U[48] = ep),
                  (U[49] = o))
                : (o = U[49])
              let T = o
              U[50] !== ep
                ? ((r = ep.formatMessage({
                    id: "chatgptConversations.composer.projectSelector.none",
                    defaultMessage: "No project",
                    description: "Label in the composer project picker when no local or cloud project is selected",
                  })),
                  (U[50] = ep),
                  (U[51] = r))
                : (r = U[51])
              let P = r
              ;(U[52] !== ex || U[53] !== en || U[54] !== em || U[55] !== eS
                ? ((l = (e, t) => {
                    ;(ex &&
                      (0, y.yy)(em, a.QW, {
                        action: "CHATGPT_WEB_HOME_COMPOSER_PROJECT_SELECTION_ACTION_PROJECT_SELECTED",
                        entrySurface: "composer_footer",
                      }),
                      (ew.current = !0),
                      en(e, t),
                      eS(!1))
                  }),
                  (U[52] = ex),
                  (U[53] = en),
                  (U[54] = em),
                  (U[55] = eS),
                  (U[56] = l))
                : (l = U[56]),
                U[57] !== eS
                  ? ((c = () => {
                      ;((ew.current = !0), eS(!1))
                    }),
                    (u = () => eS(!1)),
                    (U[57] = eS),
                    (U[58] = c),
                    (U[59] = u))
                  : ((c = U[58]), (u = U[59])),
                U[60] !== er ||
                U[61] !== el ||
                U[62] !== et ||
                U[63] !== en ||
                U[64] !== K ||
                U[65] !== ej ||
                U[66] !== l ||
                U[67] !== c ||
                U[68] !== u ||
                U[69] !== es ||
                U[70] !== Q
                  ? ((m = (0, n.jsx)(A, {
                      workCloudOnly: es,
                      cloudProjectsEnabled: er,
                      isPending: el,
                      workspaceProjectOptions: Q,
                      projectId: K,
                      searchQuery: ej,
                      onSearchQueryChange: ey,
                      onCreateProject: et,
                      onProjectChange: en,
                      onSelectProject: l,
                      onSelectWorkspaceProject: c,
                      onClose: u,
                    })),
                    (U[60] = er),
                    (U[61] = el),
                    (U[62] = et),
                    (U[63] = en),
                    (U[64] = K),
                    (U[65] = ej),
                    (U[66] = l),
                    (U[67] = c),
                    (U[68] = u),
                    (U[69] = es),
                    (U[70] = Q),
                    (U[71] = m))
                  : (m = U[71]))
              let R = m
              if (eh) {
                O = R
                break e
              }
              if ("breadcrumb" === eu) {
                let e
                ;(U[72] !== el || U[73] !== N || U[74] !== ec
                  ? ((e = el
                      ? (0, n.jsx)(b.y, { className: "icon-xs shrink-0" })
                      : (N ?? (ec ? (0, n.jsx)(w.I, { className: "shrink-0", "aria-hidden": !1, asset: s.M }) : null))),
                    (U[72] = el),
                    (U[73] = N),
                    (U[74] = ec),
                    (U[75] = e))
                  : (e = U[75]),
                  (O = (0, n.jsx)(f.A, {
                    align: "start",
                    contentWidth: "workspace",
                    open: ek,
                    onCloseAutoFocus: eM,
                    onOpenChange: eS,
                    triggerButton: (0, n.jsxs)(g.$, {
                      allowShrink: !0,
                      "aria-label":
                        null == M
                          ? L
                          : ep.formatMessage(
                              {
                                id: "chatgptConversations.composer.projectSelector.change",
                                defaultMessage: "Change project: {projectName}",
                                description:
                                  "Accessible button label for changing the project selected in the composer",
                              },
                              { projectName: M },
                            ),
                      className: B,
                      color: "ghost",
                      disabled: ei,
                      size: "toolbar",
                      children: [e, (0, n.jsx)("span", { className: "truncate", children: M ?? V ?? P })],
                    }),
                    children: R,
                  })))
                break e
              }
              if ("hero" === eu && null != Y) {
                let e
                ;(U[76] !== ei || U[77] !== R || U[78] !== ek || U[79] !== eS || U[80] !== Y
                  ? ((e = (0, n.jsx)(f.A, {
                      align: "center",
                      contentWidth: "workspace",
                      disabled: ei,
                      open: ek,
                      onCloseAutoFocus: eM,
                      triggerButton: Y,
                      onOpenChange: eS,
                      children: R,
                    })),
                    (U[76] = ei),
                    (U[77] = R),
                    (U[78] = ek),
                    (U[79] = eS),
                    (U[80] = Y),
                    (U[81] = e))
                  : (e = U[81]),
                  (O = e))
                break e
              }
              ;(U[82] !== N
                ? ((p = null == N ? { assets: { 16: s.M, 20: i.v }, ariaHidden: !1 } : void 0),
                  (U[82] = N),
                  (U[83] = p))
                : (p = U[83]),
                U[84] !== ep || U[85] !== en || U[86] !== K
                  ? ((x =
                      null == K
                        ? void 0
                        : {
                            label: ep.formatMessage({
                              id: "composer.localCwdDropdown.clearProject",
                              defaultMessage: "Don't work in a project",
                              description: "Menu item that clears the selected project and starts projectless tasks",
                            }),
                            onClear: () => en(null, null),
                          }),
                    (U[84] = ep),
                    (U[85] = en),
                    (U[86] = K),
                    (U[87] = x))
                  : (x = U[87]),
                (E = (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(h.j, {
                      "aria-label":
                        null == M
                          ? L
                          : ep.formatMessage(
                              {
                                id: "chatgptConversations.composer.projectSelector.change",
                                defaultMessage: "Change project: {projectName}",
                                description:
                                  "Accessible button label for changing the project selected in the composer",
                              },
                              { projectName: M },
                            ),
                      menuOpen: ek,
                      disabled: ei,
                      collapse: "footer" === ea ? "sm" : void 0,
                      foreground: "primary",
                      iconSource: p,
                      isPending: el,
                      onCloseAutoFocus: eM,
                      clearAction: x,
                      onOpenChange: eS,
                      icon: N,
                      shortcut: Z,
                      showIndicator: "footer" === ea,
                      subtleHover: ed,
                      tooltipContent: null == M ? L : T,
                      tooltipOpenWhen: null == M || null != Z ? "default" : "target-overflows",
                      value:
                        M ??
                        V ??
                        ("footer" === ea
                          ? (0, n.jsx)(d.A, {
                              id: "sidebarElectron.projectsNavLink",
                              defaultMessage: "Projects",
                              description: "Section label above project task groups in the sidebar",
                            })
                          : L),
                      children: R,
                    }),
                    "composer" === eu && S?.projectKind === "local" ? (0, n.jsx)(I.v, { roots: (0, _.l_)(S) }) : null,
                  ],
                })))
            }
            ;((U[17] = B),
              (U[18] = er),
              (U[19] = ei),
              (U[20] = ep),
              (U[21] = ex),
              (U[22] = el),
              (U[23] = eN),
              (U[24] = eh),
              (U[25] = ek),
              (U[26] = et),
              (U[27] = en),
              (U[28] = ea),
              (U[29] = K),
              (U[30] = $),
              (U[31] = V),
              (U[32] = em),
              (U[33] = ej),
              (U[34] = eS),
              (U[35] = Z),
              (U[36] = ec),
              (U[37] = ed),
              (U[38] = Y),
              (U[39] = eu),
              (U[40] = es),
              (U[41] = Q),
              (U[42] = E),
              (U[43] = O))
          } else ((E = U[42]), (O = U[43]))
          return O !== Symbol.for("react.early_return_sentinel") ? O : E
        },
      },
    )
  },
  nGkJ(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("slpy"),
      s = o("LtRA"),
      i = o("Ks4B"),
      l = o("on57"),
      c = o("zTeN"),
      d = o("zd8w"),
      u = o("Wf1j"),
      m = o("oyxz"),
      h = o("X7C7"),
      p = o("ygO2"),
      g = o("ZZgR"),
      f = o("bqtn"),
      x = o("HOLv"),
      w = o("RNul"),
      v = o("S434"),
      b = o("c1U2"),
      j = o("OTo8"),
      y = o("BNGb"),
      k = o("R5vo"),
      C = o("BAVI"),
      I = o("Eb0m"),
      _ = o("b9ka"),
      S = o("DJRx"),
      M = o("GEsy"),
      N = o("zx49"),
      L = o("ZLvZ")
    o("uw7z")
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
            $,
            V,
            Z,
            J,
            X,
            Y,
            ee = (0, r.c)(68),
            {
              startingState: et,
              presentation: eo,
              taskOptions: en,
              onStartingStateChange: er,
              hostConfig: ea,
              className: es,
              side: ei,
              gitRoot: el,
            } = e,
            ec = void 0 === eo ? "inline" : eo,
            ed = void 0 === ei ? "top" : ei,
            eu = (0, u.A)(),
            [em, eh] = (0, d.useState)(!1),
            [ep, eg] = (0, d.useState)(!1),
            [ef, ex] = (0, d.useState)("")
          ee[0] !== eu
            ? ((t = eu.formatMessage({
                id: "codex.composer.searchStartingBranches",
                defaultMessage: "Search branches…",
                description: "Placeholder for searching available starting branches",
              })),
              (ee[0] = eu),
              (ee[1] = t))
            : (t = ee[1])
          let ew = t
          ee[2] !== eu
            ? ((o = eu.formatMessage({
                id: "composer.remote.retryLoadingBranches",
                defaultMessage: "Retry loading branches",
                description:
                  "Tooltip and accessible label for the button that retries a failed branch search in the starting branch picker",
              })),
              (ee[2] = eu),
              (ee[3] = o))
            : (o = ee[3])
          let ev = o
          ee[4] !== el || ee[5] !== ea
            ? ((I = { gitRoot: el, hostConfig: ea }), (ee[4] = el), (ee[5] = ea), (ee[6] = I))
            : (I = ee[6])
          let eb = (0, c._U)(A.j, I),
            ej = "branch" === et.type ? et.branchName : "main",
            ey = (0, c.Ul)(S.AQ),
            ek = (0, M.o)(ef, 300),
            eC = ef !== ek
          ee[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((R = (e) => {
                ;(e && eg(!0), eh(e), e || ex(""))
              }),
              (ee[7] = R))
            : (R = ee[7])
          let eI = R
          ee[8] !== ep || ee[9] !== ey
            ? ((E = { enabled: ep, retainRepoWatch: ey }), (ee[8] = ep), (ee[9] = ey), (ee[10] = E))
            : (E = ee[10])
          let { data: e_, isLoading: eS, refetch: eM } = (0, j.v)(el, ea, "async_task_starting_state_dropdown", E),
            eN = ep && null != el
          ee[11] !== ey || ee[12] !== eN
            ? ((O = { enabled: eN, retainRepoWatch: ey }), (ee[11] = ey), (ee[12] = eN), (ee[13] = O))
            : (O = ee[13])
          let { data: eL } = (0, b.H)(el, ea, "async_task_starting_state_dropdown", O),
            eA = ep && !!el
          ee[14] !== ey || ee[15] !== eA
            ? ((U = { enabled: eA, retainRepoWatch: ey }), (ee[14] = ey), (ee[15] = eA), (ee[16] = U))
            : (U = ee[16])
          let { data: eT } = (0, C.C)(el, ea, "async_task_starting_state_dropdown", U),
            eP = e_ ?? ej
          ee[17] !== el || ee[18] !== ep || ee[19] !== ea || ee[20] !== ej || ee[21] !== eP
            ? ((B = { gitRoot: el, hostConfig: ea, currentBranch: eP, remoteDefaultBranch: ej, enabled: ep }),
              (ee[17] = el),
              (ee[18] = ep),
              (ee[19] = ea),
              (ee[20] = ej),
              (ee[21] = eP),
              (ee[22] = B))
            : (B = ee[22])
          let {
              branches: eR,
              defaultBranch: eE,
              fetching: eO,
              error: eU,
              refetch: eB,
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
                data: b,
                isLoading: j,
                isFetching: C,
                error: I,
                refetch: _,
              } = (0, k.v)(l, d, "async_task_starting_state_dropdown", o)
              if (i[6] !== u || i[7] !== g || i[8] !== b || i[9] !== m) {
                let e = (function ({
                    currentBranch: e,
                    gitDefaultBranch: t,
                    recentBranches: o,
                    remoteDefaultBranch: n,
                  }) {
                    return n && (n === e || n === t || o?.includes(n)) ? n : null
                  })({ currentBranch: u, gitDefaultBranch: g, recentBranches: b, remoteDefaultBranch: m }),
                  t = [g, u, e, ...(b ?? [])],
                  o = new Set()
                ;((n = []),
                  t.forEach((e) => {
                    !(function ({ branch: e, list: t, seen: o }) {
                      !e || o.has(e) || (o.add(e), t.push(e))
                    })({ branch: e, list: n, seen: o })
                  }),
                  (i[6] = u),
                  (i[7] = g),
                  (i[8] = b),
                  (i[9] = m),
                  (i[10] = n))
              } else n = i[10]
              let M = n[0] ?? u ?? m,
                N = f || x || j || C,
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
            eF = ef.trim().toLowerCase(),
            eW = eF.length > 0
          ee[23] !== ek || ee[24] !== el || ee[25] !== ea
            ? ((F = {
                cwd: el,
                hostConfig: ea,
                operationSource: "async_task_starting_state_dropdown",
                preserveRemoteRefs: !0,
                query: ek,
              }),
              (ee[23] = ek),
              (ee[24] = el),
              (ee[25] = ea),
              (ee[26] = F))
            : (F = ee[26])
          let eH = em && eW && !eC
          ee[27] !== eH ? ((W = { enabled: eH }), (ee[27] = eH), (ee[28] = W)) : (W = ee[28])
          let { data: eD, isFetching: eq, error: eG, refetch: ez } = (0, c._U)(v.E, F, W),
            eQ = eC ? void 0 : eD?.branches,
            eK = "branch" === et.type ? (et.remoteRef ?? et.branchName) : void 0,
            e$ = eL?.local,
            eV = eL?.remote != null && null != e$ ? `${eL.remote}/${e$}` : null,
            eZ = !eW || eE.toLowerCase().includes(eF),
            eJ = (eW ? eQ : eR)?.filter((e) => e !== eE),
            eX = eW && !eC ? (eD?.remoteBranchRefs ?? []) : [],
            eY = eX.length > 0,
            e1 = eW ? eq : eO,
            e0 = eW ? eG : eU,
            e2 = eW ? ez : eB,
            e3 = e_ ?? eE
          "branch" === et.type && et.branchName
          let e4 = eT?.type === "success" && eT.stagedCount + eT.unstagedCount + (eT.untrackedCount ?? 0) > 0,
            e5 = e4 && (!eW || e3.toLowerCase().includes(eF))
          et.type
          let e6 =
            "branch" === et.type && null != eV && et.branchName === e$ && et.remoteRef === `refs/remotes/${eV}`
              ? eV
              : null
          ;(ee[29] !== e_ || ee[30] !== eE || ee[31] !== e6 || ee[32] !== et.branchName || ee[33] !== et.type
            ? ((H =
                "working-tree" === et.type
                  ? (0, n.jsx)(m.A, {
                      id: "composer.remote.currentBranch",
                      defaultMessage: "{branch} (current)",
                      description: "Label for the current branch starting point in the composer",
                      values: { branch: e_ ?? eE },
                    })
                  : (e6 ??
                    (0, n.jsx)(m.A, {
                      id: "composer.remote.branch",
                      defaultMessage: "{branch}",
                      description: "Label for a specific branch starting point in the composer",
                      values: { branch: et.branchName },
                    }))),
              (ee[29] = e_),
              (ee[30] = eE),
              (ee[31] = e6),
              (ee[32] = et.branchName),
              (ee[33] = et.type),
              (ee[34] = H))
            : (H = ee[34]),
            ee[35] !== H
              ? ((D = (0, n.jsxs)(n.Fragment, { children: [(0, n.jsx)(n.Fragment, { children: H }), null, null] })),
                (ee[35] = H),
                (ee[36] = D))
              : (D = ee[36]))
          let e7 = D
          ee[37] !== eu
            ? ((q = eu.formatMessage({
                id: "composer.remote.branchStartingPoint",
                defaultMessage: "What branch should this chat start from?",
                description: "Section label for branch starting point selector",
              })),
              (ee[37] = eu),
              (ee[38] = q))
            : (q = ee[38])
          let e8 = q
          ;(ee[39] !== em || ee[40] !== eM || ee[41] !== eB
            ? ((G = () => {
                em && (eM(), eB())
              }),
              (z = [em, eM, eB]),
              (ee[39] = em),
              (ee[40] = eM),
              (ee[41] = eB),
              (ee[42] = G),
              (ee[43] = z))
            : ((G = ee[42]), (z = ee[43])),
            (0, d.useEffect)(G, z),
            ee[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((Q = (0, n.jsx)(m.A, {
                  id: "composer.worktreeOptions.branch",
                  defaultMessage: "Branch",
                  description: "Label for the starting branch selector in the compact task options menu",
                })),
                (ee[44] = Q))
              : (Q = ee[44]),
            ee[45] !== es ? ((K = (0, l.A)("whitespace-nowrap", es)), (ee[45] = es), (ee[46] = K)) : (K = ee[46]))
          let e9 = "working-tree" === et.type && e4
          ;(ee[47] === Symbol.for("react.memo_cache_sentinel")
            ? (($ = (0, n.jsx)(x.I, { "aria-hidden": !1, asset: s.K })), (ee[47] = $))
            : ($ = ee[47]),
            ee[48] !== e9
              ? ((V = (0, n.jsx)(h.o, { borderColor: "border-surface-secondary", badgeEnabled: e9, children: $ })),
                (ee[48] = e9),
                (ee[49] = V))
              : (V = ee[49]),
            ee[50] !== e7 || ee[51] !== ec || ee[52] !== e8 || ee[53] !== K || ee[54] !== V
              ? ((Z = (0, n.jsx)(N.P, {
                  "aria-label": e8,
                  "data-composer-navigation-target": "starting-state",
                  categoryLabel: null,
                  presentation: ec,
                  menuCategoryLabel: Q,
                  className: K,
                  collapse: "secondary",
                  icon: V,
                  indicator: "collapsible-chevron",
                  value: e7,
                  valueClassName: "max-w-40",
                })),
                (ee[50] = e7),
                (ee[51] = ec),
                (ee[52] = e8),
                (ee[53] = K),
                (ee[54] = V),
                (ee[55] = Z))
              : (Z = ee[55]))
          let te = Z,
            tt = (e) =>
              (0, n.jsx)(g.G.Root, {
                label: ew,
                children: (0, n.jsxs)("div", {
                  className: (0, l.A)("flex flex-col gap-1.5 overflow-hidden", "menu" === ec ? "w-full" : "w-72"),
                  children: [
                    (0, n.jsx)(g.G.Input, {
                      placeholder: ew,
                      value: ef,
                      onValueChange: ex,
                      onKeyDown: (e) => {
                        "Enter" === e.key && eC && e.preventDefault()
                      },
                    }),
                    "menu" === ec ? (0, n.jsx)(f.ms.Separator, {}) : null,
                    (0, n.jsx)("div", {
                      className: "vertical-scroll-fade-mask flex max-h-[200px] flex-col gap-1.5 overflow-y-auto",
                      children: (0, n.jsxs)(g.G.List, {
                        children: [
                          e5
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
                                    rightIconAsset: "working-tree" === et.type ? i.G : void 0,
                                    tooltipText: e3,
                                    tooltipOpenWhen: "trigger-overflows",
                                    tooltipSide: "menu" === ec ? "left" : void 0,
                                    value: `working-tree:${e3}`,
                                    onSelect: () => {
                                      ;(er({ type: "working-tree" }), e())
                                    },
                                    children: (0, n.jsxs)("div", {
                                      className: "flex flex-col",
                                      children: [
                                        eS ? null : (0, n.jsx)(n.Fragment, { children: e_ ?? eE }),
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
                          null != eV && null != e$ && (!eW || eV.toLowerCase().includes(eF))
                            ? (0, n.jsx)(g.G.Item, {
                                leftIconAsset: s.K,
                                rightIconAsset: null == e6 ? void 0 : i.G,
                                value: eV,
                                onSelect: () => {
                                  ;(er({ type: "branch", branchName: e$, remoteRef: `refs/remotes/${eV}` }), e())
                                },
                                children: eV,
                              })
                            : null,
                          (0, n.jsxs)("div", {
                            className: "flex flex-col",
                            children: [
                              (0, n.jsx)(f.ms.SectionLabel, {
                                children: (0, n.jsx)(m.A, {
                                  id: "composer.remote.localBranchesSectionHeading",
                                  defaultMessage: "Local branches",
                                  description: "Section heading for local branch search results",
                                }),
                              }),
                              ek && e1
                                ? (0, n.jsx)("div", {
                                    className: "flex h-full items-center justify-center overflow-clip",
                                    children: (0, n.jsx)(w.y, { className: "icon-xxs" }),
                                  })
                                : null != eb.error || (ek && e0)
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
                                          content: ev,
                                          children: (0, n.jsx)(p.$, {
                                            className: "text-codex-description",
                                            "aria-label": ev,
                                            color: "ghost",
                                            size: "icon",
                                            onClick: () => {
                                              ;(e2(), eb.refetch?.())
                                            },
                                            children: (0, n.jsx)(_.A, { className: "icon-xxs" }),
                                          }),
                                        }),
                                      ],
                                    })
                                  : (0, n.jsxs)(n.Fragment, {
                                      children: [
                                        eZ &&
                                          (0, n.jsx)(g.G.Item, {
                                            leftIconAsset: s.K,
                                            rightIconAsset: eK === eE ? i.G : void 0,
                                            tooltipText: eE,
                                            tooltipOpenWhen: "trigger-overflows",
                                            tooltipSide: "menu" === ec ? "left" : void 0,
                                            value: eE,
                                            onSelect: () => {
                                              ;(er({ type: "branch", branchName: eE }), e())
                                            },
                                            children: eE,
                                          }),
                                        eJ?.map((t) =>
                                          (0, n.jsx)(
                                            g.G.Item,
                                            {
                                              leftIconAsset: s.K,
                                              rightIconAsset: t === eK ? i.G : void 0,
                                              tooltipText: t,
                                              tooltipOpenWhen: "trigger-overflows",
                                              tooltipSide: "menu" === ec ? "left" : void 0,
                                              value: t,
                                              onSelect: () => {
                                                ;(er({ type: "branch", branchName: t }), e())
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
                          eY
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
                                  eX.map((t) =>
                                    (0, n.jsx)(
                                      g.G.Item,
                                      {
                                        leftIconAsset: s.K,
                                        rightIconAsset: t === eK ? i.G : void 0,
                                        tooltipText: P(t),
                                        tooltipOpenWhen: "trigger-overflows",
                                        tooltipSide: "menu" === ec ? "left" : void 0,
                                        value: t,
                                        onSelect: () => {
                                          ;(er({ type: "branch", branchName: P(t), remoteRef: t }), e())
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
          if ("menu" === ec && null != en) {
            let e
            return (
              ee[56] !== eu
                ? ((e = eu.formatMessage({
                    id: "composer.worktreeOptions.branch",
                    defaultMessage: "Branch",
                    description: "Label for the starting branch selector in the task options menu",
                  })),
                  (ee[56] = eu),
                  (ee[57] = e))
                : (e = ee[57]),
              (0, n.jsx)(L.i, { navigation: en, triggerButton: te, label: e, onOpenChange: eI, children: tt })
            )
          }
          let to = g.A
          ;(ee[58] !== e8 || ee[59] !== te
            ? ((J = (0, n.jsx)(a.m, { content: e8, children: te })), (ee[58] = e8), (ee[59] = te), (ee[60] = J))
            : (J = ee[60]),
            ee[61] === Symbol.for("react.memo_cache_sentinel") ? ((X = () => eI(!1)), (ee[61] = X)) : (X = ee[61]))
          let tn = tt(X)
          return (
            ee[62] !== to || ee[63] !== em || ee[64] !== ed || ee[65] !== J || ee[66] !== tn
              ? ((Y = (0, n.jsx)(to, { side: ed, open: em, onOpenChange: eI, triggerButton: J, children: tn })),
                (ee[62] = to),
                (ee[63] = em),
                (ee[64] = ed),
                (ee[65] = J),
                (ee[66] = tn),
                (ee[67] = Y))
              : (Y = ee[67]),
            Y
          )
        },
      },
    )
  },
  hKaE(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("LtRA"),
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
            g = (0, r.c)(10)
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
          let x = u
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
            g[7] !== t || g[8] !== h
              ? ((p = (0, n.jsx)(l.Q, { ...t, renderWhileLoading: !0, renderStaticBranch: m, renderControl: h })),
                (g[7] = t),
                (g[8] = h),
                (g[9] = p))
              : (p = g[9]),
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
  E5kJ(e, t, o) {
    o.d(t, { ComposerUtilityBar: () => tP })
    var n = o("ABep"),
      r = o("QosV"),
      a = o("slpy"),
      s = o("LZeV"),
      i = o("LtRA"),
      l = o("LIxM"),
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
      b = o("CSxw"),
      j = o("ygO2"),
      y = o("HOLv"),
      k = o("jzG5"),
      C = o("Wf1j"),
      I = o("Qgfj"),
      _ = o("zx49"),
      S = o("bqtn"),
      M = o("GO7r"),
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
    var O = o("akUq"),
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
        b,
        j,
        I,
        L,
        R,
        W,
        q = (0, r.c)(63),
        { allowProvisioning: G } = e,
        z = void 0 === G || G,
        Q = (0, d.gh)(P.GD),
        K = (0, C.A)(),
        $ = (0, p.Zp)(),
        V = (0, d.Ul)(T.S),
        Z = (0, d._U)(A.LI, V),
        J = (0, d._U)(A.y_, V),
        X = (0, d.Ul)(N.qL),
        [Y, ee] = (0, m.useState)(""),
        [et, eo] = (0, m.useState)(!1)
      if (
        q[0] !== z ||
        q[1] !== K ||
        q[2] !== et ||
        q[3] !== Q ||
        q[4] !== Z?.displayName ||
        q[5] !== X ||
        q[6] !== J?.name
      ) {
        let e = z || null == X ? null : (0, N.m)(K).find((e) => e.managedEnvironmentDefinition === X)?.name
        ;((a = (z ? null : J?.name) ?? Z?.displayName ?? e),
          (o = S.Ab),
          (i = et),
          q[16] !== z || q[17] !== Q
            ? ((l = (e) => {
                ;(e && !z && (0, F.Nb)(Q).catch(H), eo(e), e || ee(""))
              }),
              (q[16] = z),
              (q[17] = Q),
              (q[18] = l))
            : (l = q[18]),
          (c = "top"),
          (u = "panel"),
          (g = z ? "tall" : "available"),
          (t = _.P),
          (s =
            null == a
              ? K.formatMessage(D.selectEnvironment)
              : K.formatMessage(
                  {
                    id: "restricted.aeonComposer.environmentSelection",
                    defaultMessage: "Environment: {environment}",
                    description: "Accessible label for the selected cloud execution environment",
                  },
                  { environment: a },
                )),
          (q[0] = z),
          (q[1] = K),
          (q[2] = et),
          (q[3] = Q),
          (q[4] = Z?.displayName),
          (q[5] = X),
          (q[6] = J?.name),
          (q[7] = t),
          (q[8] = o),
          (q[9] = a),
          (q[10] = s),
          (q[11] = i),
          (q[12] = l),
          (q[13] = c),
          (q[14] = u),
          (q[15] = g))
      } else
        ((t = q[7]),
          (o = q[8]),
          (a = q[9]),
          (s = q[10]),
          (i = q[11]),
          (l = q[12]),
          (c = q[13]),
          (u = q[14]),
          (g = q[15]))
      return (
        q[19] !== z
          ? ((f = z ? (0, n.jsx)(y.I, { "aria-hidden": !1, asset: k.x }) : (0, n.jsx)(M.zYJ, {})),
            (q[19] = z),
            (q[20] = f))
          : (f = q[20]),
        q[21] !== a ? ((x = a ?? (0, n.jsx)(h.A, { ...D.selectEnvironment })), (q[21] = a), (q[22] = x)) : (x = q[22]),
        q[23] !== t || q[24] !== s || q[25] !== f || q[26] !== x
          ? ((w = (0, n.jsx)(t, {
              "aria-label": s,
              categoryLabel: null,
              collapse: "xs",
              icon: f,
              indicator: "chevron",
              value: x,
              valueClassName: "max-w-40",
            })),
            (q[23] = t),
            (q[24] = s),
            (q[25] = f),
            (q[26] = x),
            (q[27] = w))
          : (w = q[27]),
        q[28] !== z || q[29] !== K || q[30] !== Y
          ? ((v = z
              ? null
              : (0, n.jsx)(S.ms.SearchInput, {
                  placeholder: K.formatMessage({
                    id: "restricted.cloudThreadPrototype.environmentPicker.search",
                    defaultMessage: "Search environments",
                    description: "Search input placeholder in the Cloud v2 environment dropdown",
                  }),
                  autoFocus: !0,
                  value: Y,
                  onChange: (e) => ee(e.target.value),
                })),
            (q[28] = z),
            (q[29] = K),
            (q[30] = Y),
            (q[31] = v))
          : (v = q[31]),
        q[32] !== z ? ((b = z ? null : (0, n.jsx)(S.ms.Separator, {})), (q[32] = z), (q[33] = b)) : (b = q[33]),
        q[34] !== z || q[35] !== et || q[36] !== Y
          ? ((j = et && !z ? (0, n.jsx)(O.L, { children: (0, n.jsx)(B.i, { searchQuery: Y }) }) : null),
            (q[34] = z),
            (q[35] = et),
            (q[36] = Y),
            (q[37] = j))
          : (j = q[37]),
        q[38] !== z || q[39] !== et || q[40] !== Q || q[41] !== a
          ? ((I = z
              ? (0, n.jsxs)(S.ms.Section, {
                  children: [
                    (0, n.jsx)(S.ms.Item, {
                      LeftIcon: M.LL7,
                      RightIcon: null == a ? M.ALZ : void 0,
                      onSelect: () => {
                        ;(0, A.r2)(Q, Q.get(T.S))
                      },
                      children: (0, n.jsx)(h.A, {
                        id: "restricted.aeonCreationTarget.noEnvironment",
                        defaultMessage: "No environment",
                        description: "Option to create a cloud task without a selected executor environment",
                      }),
                    }),
                    et ? (0, n.jsx)(E, {}) : null,
                  ],
                })
              : null),
            (q[38] = z),
            (q[39] = et),
            (q[40] = Q),
            (q[41] = a),
            (q[42] = I))
          : (I = q[42]),
        q[43] !== z ? ((L = null), (q[43] = z), (q[44] = L)) : (L = q[44]),
        q[45] !== z || q[46] !== $ || q[47] !== Q
          ? ((R = z
              ? null
              : (0, n.jsxs)("div", {
                  className: "shrink-0",
                  children: [
                    (0, n.jsx)(S.ms.Separator, {}),
                    (0, n.jsx)(S.ms.Item, {
                      LeftIcon: M.xFs,
                      onSelect: () => (0, U.h)(Q, $),
                      children: (0, n.jsx)(h.A, {
                        id: "restricted.cloudThreadPrototype.environmentPicker.create",
                        defaultMessage: "Create new",
                        description: "Menu item that opens Cloud v2 environment creation",
                      }),
                    }),
                    null,
                  ],
                })),
            (q[45] = z),
            (q[46] = $),
            (q[47] = Q),
            (q[48] = R))
          : (R = q[48]),
        q[49] !== o ||
        q[50] !== w ||
        q[51] !== v ||
        q[52] !== b ||
        q[53] !== j ||
        q[54] !== I ||
        q[55] !== L ||
        q[56] !== R ||
        q[57] !== i ||
        q[58] !== l ||
        q[59] !== c ||
        q[60] !== u ||
        q[61] !== g
          ? ((W = (0, n.jsx)(n.Fragment, {
              children: (0, n.jsxs)(o, {
                open: i,
                onOpenChange: l,
                side: c,
                contentWidth: u,
                contentMaxHeight: g,
                triggerButton: w,
                children: [v, b, j, I, L, R],
              }),
            })),
            (q[49] = o),
            (q[50] = w),
            (q[51] = v),
            (q[52] = b),
            (q[53] = j),
            (q[54] = I),
            (q[55] = L),
            (q[56] = R),
            (q[57] = i),
            (q[58] = l),
            (q[59] = c),
            (q[60] = u),
            (q[61] = g),
            (q[62] = W))
          : (W = q[62]),
        W
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
      $ = o("m22M"),
      V = o("nn0H"),
      Z = o("s37w"),
      J = o("DJRx"),
      X = o("OWtl"),
      Y = o("Sd8U"),
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
      ed = o("Ks4B"),
      eu = o("OipO"),
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
        b,
        j,
        k,
        I,
        M,
        N,
        L = (0, r.c)(45),
        { composerMode: A, setComposerMode: T } = e,
        P = (0, d.gh)(Y.PR),
        R = (0, C.A)(),
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
      let $ = "local" === A ? ed.G : void 0
      return (
        L[28] !== T
          ? ((b = () => {
              ;(T("local"), U(!1))
            }),
            (L[28] = T),
            (L[29] = b))
          : (b = L[29]),
        L[30] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, n.jsx)(h.A, { ...eg.local })), (L[30] = j))
          : (j = L[30]),
        L[31] !== $ || L[32] !== b
          ? ((k = (0, n.jsx)(S.ms.Item, { leftIconAsset: l.g, rightIconAsset: $, onClick: b, children: j })),
            (L[31] = $),
            (L[32] = b),
            (L[33] = k))
          : (k = L[33]),
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
        L[38] !== k || L[39] !== I
          ? ((M = (0, n.jsxs)("div", { className: "flex w-44 flex-col", children: [v, k, I] })),
            (L[38] = k),
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
      eb = o("hKaE"),
      ej = o("Qvp9"),
      ey = o("llkK"),
      ek = o("SaFz"),
      eC = o("GaA7"),
      eI = o("q77y"),
      e_ = o("rvFo")
    let eS = (0, d.RD)(X.u, () => ({
      queryKey: ek.rL,
      enabled: eC.appServices?.runtimeInfo != null,
      networkMode: "always",
      queryFn: async () => {
        let e = eC.appServices?.runtimeInfo
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
                children: (0, n.jsx)(j.$, {
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
      eP = o("X1li")
    let eR = (0, o("nkTT").a)({
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
    var eE = o("u34V"),
      eO = o("SqHz")
    function eU(e) {
      let t,
        o,
        a,
        s = (0, r.c)(8),
        { onSelect: i } = e,
        l = (0, d.gh)(Y.PR),
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
      e$ = o("vET2"),
      eV = o("TPc8"),
      eZ = o("v9CS"),
      eJ = o("d1Z2"),
      eX = (e) =>
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
      eY = o("CYTY"),
      e1 = o("mlUK"),
      e0 = o("BWia"),
      e2 = o("LrRJ"),
      e3 = o("yGJW"),
      e4 = o("aqTO"),
      e5 = o("KxVC"),
      e6 = o("AzNg"),
      e7 = o("imHa"),
      e8 = o("hQzs"),
      e9 = o("NGQf"),
      te = o("F9Qp"),
      tt = o("OSwV"),
      to = o("By8V"),
      tn = o("w487")
    o("uw7z")
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
        b,
        j,
        k,
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
        $,
        V,
        J = (0, r.c)(163),
        {
          composerMode: X,
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
        eb = void 0 !== eg && eg,
        ej = void 0 !== ef && ef,
        ey = void 0 === ex ? "top" : ex,
        ek = (0, d.gh)(Y.PR),
        eC = (0, d.Ul)(w.TC),
        eI = (0, d.Ul)(w.RB)
      ;((0, d._U)(g.Qk, null), (0, d._U)(g.W3, null))
      let e_ = eI || !1,
        eS = (0, d.Ul)(eh.ji),
        [eM, eL] = (0, m.useState)(void 0 !== em && em),
        eA = eM || "composer" === eS,
        eT = (0, C.A)(),
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
      let { data: e$, isLoading: eV } = (0, d._U)(eN.I9, o),
        eZ = e$?.root != null,
        eJ = "project" === (0, d._U)(g.EL, es) && eZ ? ed : null,
        eX = e$?.root ?? null,
        { data: eY } = (0, d.Ul)(ee.zk),
        e3 = eH && eA && eG.hostId !== er.fI ? eY?.roots : void 0
      ;(J[8] !== e3 ? ((a = e3 ?? []), (J[8] = e3), (J[9] = a)) : (a = J[9]),
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
      J[17] !== eG.cwd || J[18] !== eX || J[19] !== e8?.origins || J[20] !== e3 || J[21] !== e9?.origins
        ? ((f =
            null == e3
              ? null
              : (0, e6.QE)({
                  sourceWorkspaceRoot: eG.cwd,
                  sourceGitRoot: eX,
                  sourceGitOrigins: e9?.origins,
                  destinationWorkspaceRoots: e3,
                  destinationGitOrigins: e8?.origins,
                })),
          (J[17] = eG.cwd),
          (J[18] = eX),
          (J[19] = e8?.origins),
          (J[20] = e3),
          (J[21] = e9?.origins),
          (J[22] = f))
        : (f = J[22])
      let te = f,
        tt = null != eQ && eQ.hostId !== u.iwv,
        tr = !ev && !eb,
        ts = (0, ea.Zj)("3724118644"),
        ti = (0, d.Ul)(en.e2),
        td = (0, ea.Zj)("2785238453"),
        tu = (0, d._U)(eF.mY, et),
        tm = "worktree" === X || (tu && !td),
        th = eZ && void 0 !== eu && eu && eR,
        tg = (0, d.Ul)(T.S),
        tv = Math.max((0, d._U)(ee.g, tg).length - 1, 0),
        tb = tv > 0,
        tj = (0, e7.S)(eX ?? eG.cwd ?? ""),
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
      let tk = x,
        tC = eQ?.hostId
      e: {
        let e, t, o
        if (null == tC) {
          let e
          ;(J[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = { 16: M.gkn, 20: M.$G3 }), (J[25] = e))
            : (e = J[25]),
            (v = e))
          break e
        }
        J[26] !== tC
          ? ((e = (e) => {
              let { className: t } = e
              return (0, n.jsx)(e5.z, { className: t, hostId: tC, size: 16 })
            }),
            (J[26] = tC),
            (J[27] = e))
          : (e = J[27])
        let r = e
        J[28] !== tC
          ? ((t = (e) => {
              let { className: t } = e
              return (0, n.jsx)(e5.z, { className: t, hostId: tC, size: 20 })
            }),
            (J[28] = tC),
            (J[29] = t))
          : (t = J[29])
        let a = t
        ;(J[30] !== r || J[31] !== a ? ((o = { 16: r, 20: a }), (J[30] = r), (J[31] = a), (J[32] = o)) : (o = J[32]),
          (v = o))
      }
      let tI = v
      J[33] !== eT || J[34] !== eK
        ? ((b = eK ? eT.formatMessage(tx.startInRemote) : eT.formatMessage(tx.workLocally)),
          (J[33] = eT),
          (J[34] = eK),
          (J[35] = b))
        : (b = J[35])
      let t_ = b,
        tS = eT.formatMessage(tb ? tx.worktreeTooltipForMultiRootProject : tx.worktreeTooltipForRepository, {
          repoName: tj,
        })
      J[36] !== X || J[37] !== ek || J[38] !== eo || J[39] !== tu || J[40] !== tm
        ? ((j = () => {
            let e = tm ? "local" : "worktree"
            ;((0, ta.r)(ek, X, e, "keyboard-shortcut", tu), eo(e))
          }),
          (J[36] = X),
          (J[37] = ek),
          (J[38] = eo),
          (J[39] = tu),
          (J[40] = tm),
          (J[41] = j))
        : (j = J[41])
      let tM = tr && th && !td
      ;(J[42] !== tM ? ((k = { enabled: tM }), (J[42] = tM), (J[43] = k)) : (k = J[43]),
        (0, tn.Kr)("composer.toggleWorktreeMode", j, k),
        J[44] !== eT
          ? ((I = eT.formatMessage({
              id: "composer.mode.localSlashCommand.description",
              defaultMessage: "Run this chat locally",
              description: "Description for the local mode slash command",
            })),
            (J[44] = eT),
            (J[45] = I))
          : (I = J[45]),
        J[46] !== tC ? ((N = [tC]), (J[46] = tC), (J[47] = N)) : (N = J[47]))
      let tN = tr && ("local" !== X || tu)
      J[48] !== X || J[49] !== ek || J[50] !== eo || J[51] !== tu
        ? ((L = async () => {
            ;((0, ta.r)(ek, X, "local", "slash-command", tu), eo("local"))
          }),
          (J[48] = X),
          (J[49] = ek),
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
      let tA = eT.formatMessage(ty, { repoName: tj })
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
      J[65] !== X || J[66] !== ek || J[67] !== eo || J[68] !== tu || J[69] !== tm
        ? ((E = async () => {
            let e = tm ? "local" : "worktree"
            ;((0, ta.r)(ek, X, e, "slash-command", tu), eo(e))
          }),
          (J[65] = X),
          (J[66] = ek),
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
      J[77] !== ew || J[78] !== eS || J[79] !== ek
        ? ((B = (e) => {
            ;(e || "composer" !== eS || ek.set(eh.ji, null), eL(e), ew?.(e))
          }),
          (J[77] = ew),
          (J[78] = eS),
          (J[79] = ek),
          (J[80] = B))
        : (B = J[80])
      let tE = B
      J[81] !== es || J[82] !== eG || J[83] !== eX || J[84] !== eK || J[85] !== ek || J[86] !== eH || J[87] !== eJ
        ? ((F = () => {
            null != es &&
              null != eJ &&
              (0, eW.qf)(ek, e0.o, {
                conversationId: es,
                composerViewState: ek.get(eh.np),
                executionTarget: eG,
                getActiveWorkspaceRoots: () => ek.get(e4.WW),
                gitRoot: eX,
                isLocalModeRemote: eK,
                threadHandoff: eJ,
                showCrossHostHandoff: eH,
              })
          }),
          (J[81] = es),
          (J[82] = eG),
          (J[83] = eX),
          (J[84] = eK),
          (J[85] = ek),
          (J[86] = eH),
          (J[87] = eJ),
          (J[88] = F))
        : (F = J[88])
      let tO = F
      J[89] !== es || J[90] !== ek || J[91] !== eJ
        ? ((W = (e) => {
            let { currentBranch: t, destinationHostId: o, destinationWorkspaceRoot: n, destinationLabel: r } = e
            null != es &&
              null != eJ &&
              (0, eW.qf)(ek, e1.R, {
                conversationId: es,
                composerViewState: ek.get(eh.np),
                conversationTitle: eJ.conversationTitle,
                currentBranch: t,
                cwd: eJ.cwd,
                destinationHostId: o,
                destinationWorkspaceRoot: (0, u.DIv)(n),
                destinationLabel: r,
              })
          }),
          (J[89] = es),
          (J[90] = ek),
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
        ;(J[98] !== tb || J[99] !== eK || J[100] !== tj
          ? ((e = (0, n.jsx)("span", {
              className: "inline-flex items-center gap-1",
              children: (0, n.jsx)(tl, { hasMultipleProjectRoots: tb, isLocalModeRemote: eK, primaryRepoName: tj }),
            })),
            (J[98] = tb),
            (J[99] = eK),
            (J[100] = tj),
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
      J[113] !== X ||
      J[114] !== es ||
      J[115] !== eE ||
      J[116] !== eQ ||
      J[117] !== ev ||
      J[118] !== eG ||
      J[119] !== eX ||
      J[120] !== tE ||
      J[121] !== tb ||
      J[122] !== td ||
      J[123] !== e_ ||
      J[124] !== eK ||
      J[125] !== tt ||
      J[126] !== te ||
      J[127] !== tW ||
      J[128] !== eA ||
      J[129] !== tO ||
      J[130] !== tU ||
      J[131] !== tj ||
      J[132] !== tk ||
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
                composerMode: X,
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
                remoteLabel: tk,
                showWorktree: th && !td,
                gitRoot: eX,
                additionalProjectFolderCount: tv,
                hasMultipleProjectRoots: tb,
                primaryRepoName: tj,
                worktreeTooltipText: tS,
                closeDropdown: () => tE(!1),
                openHandoffDialog: tO,
                openHostWorktreeHandoffDialog: tU,
              }),
            })),
          (J[112] = tv),
          (J[113] = X),
          (J[114] = es),
          (J[115] = eE),
          (J[116] = eQ),
          (J[117] = ev),
          (J[118] = eG),
          (J[119] = eX),
          (J[120] = tE),
          (J[121] = tb),
          (J[122] = td),
          (J[123] = e_),
          (J[124] = eK),
          (J[125] = tt),
          (J[126] = te),
          (J[127] = tW),
          (J[128] = eA),
          (J[129] = tO),
          (J[130] = tU),
          (J[131] = tj),
          (J[132] = tk),
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
      J[144] !== eX ||
      J[145] !== tE ||
      J[146] !== tb ||
      J[147] !== te ||
      J[148] !== eA ||
      J[149] !== tO ||
      J[150] !== tU ||
      J[151] !== eH ||
      J[152] !== ey ||
      J[153] !== eJ ||
      J[154] !== ej
        ? ((Q = ej
            ? (0, n.jsx)(tp, {
                open: eA,
                onOpenChange: tE,
                side: ey,
                hasMultipleProjectRoots: tb,
                crossHostHandoffEnabled: eE,
                showCrossHostHandoff: eH,
                conversationId: es,
                executionTarget: eG,
                gitRoot: eX,
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
          (J[144] = eX),
          (J[145] = tE),
          (J[146] = tb),
          (J[147] = te),
          (J[148] = eA),
          (J[149] = tO),
          (J[150] = tU),
          (J[151] = eH),
          (J[152] = ey),
          (J[153] = eJ),
          (J[154] = ej),
          (J[155] = Q))
        : (Q = J[155])
      let tD = Q,
        tq = eb || (null == es && !eK && !eV && !eZ && !eC)
      J[156] !== tH || J[157] !== tq || J[158] !== ej || J[159] !== tD
        ? (($ = tq ? null : ej ? tD : tH()), (J[156] = tH), (J[157] = tq), (J[158] = ej), (J[159] = tD), (J[160] = $))
        : ($ = J[160])
      let tG = $
      return (
        J[161] !== tG ? ((V = (0, n.jsx)(n.Fragment, { children: tG })), (J[161] = tG), (J[162] = V)) : (V = J[162]),
        V
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
        b,
        j,
        k,
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
        W = (0, r.c)(138),
        {
          composerMode: H,
          worktreePrompt: D,
          setComposerMode: q,
          isCloudThreadPrototypeSelected: G,
          conversationId: z,
          executionTarget: K,
          threadHandoff: $,
          isRemoteProject: V,
          isLocalModeRemote: Z,
          currentLocalModeRemoteState: ee,
          crossHostHandoffEnabled: et,
          showCrossHostHandoff: eo,
          localWorkspaceRootForHandoff: en,
          remoteLabel: er,
          showWorktree: ea,
          gitRoot: es,
          additionalProjectFolderCount: ei,
          hasMultipleProjectRoots: el,
          primaryRepoName: ec,
          worktreeTooltipText: eu,
          closeDropdown: em,
          openHandoffDialog: eh,
          openHostWorktreeHandoffDialog: ep,
        } = e,
        eg = (0, d.gh)(X.u),
        ef = (0, d.gh)(Y.PR),
        ex = (0, C.A)(),
        { activeMode: ew } = (0, tr.c)(z),
        ev = ew?.settings.model ?? null,
        { data: eb } = (0, d.Ul)(eK.Ix),
        ej = void 0 === eb ? null : eb,
        ey = ej?.plan_type
      W[0] !== ey ? ((t = (0, ez.m6)(ey)?.pricePlan ?? null), (W[0] = ey), (W[1] = t)) : (t = W[1])
      let ek = t,
        eC = (0, eQ.j)()
      W[2] !== ek || W[3] !== eC
        ? ((o =
            null == ek
              ? void 0
              : (e, t) => {
                  eC({
                    currentPlan: ek,
                    defaultTab: "personal",
                    event: e,
                    getPricingUrl: () => t,
                    source: "composer_runtime_dropdown_rate_limit_summary",
                  })
                }),
          (W[2] = ek),
          (W[3] = eC),
          (W[4] = o))
        : (o = W[4])
      let eI = o,
        e_ = ej?.rate_limit,
        eS = ej?.credits
      W[5] !== ey || W[6] !== e_ || W[7] !== eS
        ? ((a = (0, e8.vr)(e_, eS, ey)), (W[5] = ey), (W[6] = e_), (W[7] = eS), (W[8] = a))
        : (a = W[8])
      let eM = a
      if (
        W[9] !== eM?.primary?.windowDurationMins ||
        W[10] !== eM?.secondary?.windowDurationMins ||
        W[11] !== ej ||
        W[12] !== ev
      ) {
        let e = (0, e8.mO)(ej),
          t = (0, e8.DS)(ej)
        ;((i = (0, e8._8)(e, { activeLimitName: t, selectedModel: ev })),
          (s = i.find(tu)?.limitName ?? t ?? null),
          (c = (0, e8.Zn)(ej, { activeLimitName: t, selectedModel: ev })),
          (m = i.some(td) || !!eM?.primary?.windowDurationMins || !!eM?.secondary?.windowDurationMins),
          (W[9] = eM?.primary?.windowDurationMins),
          (W[10] = eM?.secondary?.windowDurationMins),
          (W[11] = ej),
          (W[12] = ev),
          (W[13] = s),
          (W[14] = i),
          (W[15] = c),
          (W[16] = m))
      } else ((s = W[13]), (i = W[14]), (c = W[15]), (m = W[16]))
      let eN = m,
        { data: eL } = (0, Q.f)(),
        eA = (0, d.Ul)(J.AQ)
      W[17] !== eA ? ((p = { retainRepoWatch: eA }), (W[17] = eA), (W[18] = p)) : (p = W[18])
      let { data: eP } = (0, eq.v)(es, K.hostConfig, "local_remote_dropdown", p),
        eB = eP ?? ex.formatMessage(tx.fallbackBranch),
        eF = (0, e2.U)(z),
        eW = (0, tt.Vp)(eF),
        eD = eW?.direction === "to-host-worktree" ? null : eW,
        eG = eW?.status === "queued" || eW?.status === "running",
        eZ = eW?.direction === "to-host-worktree" && eG,
        eJ = (0, d._U)(g.Pz, z),
        { openOperation: e1 } = (0, e2.tC)(),
        e0 = (0, u.n9x)(Z ? null : K.activeWorkspaceRoot, eL?.codexHome),
        e4 = eP ?? (0, tt.j9)(eF, z) ?? (eo ? eJ : null),
        e5 = (0, tt.qI)({ codexWorktree: e0, operation: eD, threadHandoff: $ }),
        e6 = (0, tt.tq)({
          conversationId: z,
          handoffBranch: e4,
          handoffDirection: e5,
          operation: eW,
          threadHandoff: $,
        }),
        e7 = $?.isWorktreeConversation === !0,
        te = e6 && "to-local" === e5,
        to = e6 && "to-worktree" === e5
      W[19] !== ex || W[20] !== eW?.status
        ? ((f =
            eW?.status === "queued" || eW?.status === "running"
              ? ex.formatMessage({
                  id: "localConversation.threadHandoff.tooltip.viewProgress",
                  defaultMessage: "View progress",
                  description:
                    "Tooltip shown when a chat handoff is in progress and the button reopens the progress view",
                })
              : void 0),
          (W[19] = ex),
          (W[20] = eW?.status),
          (W[21] = f))
        : (f = W[21])
      let tn = f
      W[22] !== eW
        ? ((x =
            eW?.status === "queued" || eW?.status === "running"
              ? (0, n.jsx)(L.y, { className: "icon-2xs" })
              : eW?.status === "error"
                ? (0, n.jsx)(eH.bF, { "aria-hidden": !1, asset16: eE.m, legacyIcon: eV.A, legacyClassName: "icon-2xs" })
                : eW?.hasUnseenTerminalState && "warning" === eW.status
                  ? (0, n.jsx)(eH.bF, {
                      className: "text-warning",
                      "aria-hidden": !1,
                      asset16: eE.m,
                      legacyIcon: eV.A,
                      legacyClassName: "icon-2xs",
                    })
                  : (0, n.jsx)(eH.bF, {
                      className: "rotate-90",
                      "aria-hidden": !1,
                      asset16: eR,
                      legacyIcon: eX,
                      legacyClassName: "icon-2xs",
                    })),
          (W[22] = eW),
          (W[23] = x))
        : (x = W[23])
      let ti = x
      W[24] !== ti || W[25] !== eW?.direction
        ? ((v =
            eW?.direction === "to-host-worktree"
              ? (0, n.jsx)(eH.bF, {
                  className: "rotate-90",
                  "aria-hidden": !1,
                  asset16: eR,
                  legacyIcon: eX,
                  legacyClassName: "icon-2xs",
                })
              : ti),
          (W[24] = ti),
          (W[25] = eW?.direction),
          (W[26] = v))
        : (v = W[26])
      let tc = v
      W[27] !== eZ || W[28] !== tn || W[29] !== ex || W[30] !== eD
        ? ((b = eZ ? ex.formatMessage(tx.finishCurrentHandoffTooltip) : null != eD ? tn : void 0),
          (W[27] = eZ),
          (W[28] = tn),
          (W[29] = ex),
          (W[30] = eD),
          (W[31] = b))
        : (b = W[31])
      let th = b,
        tp = Z
          ? ex.formatMessage(tx.workRemotelyTooltipWithoutPath, { hostDisplayName: ee?.connectionDisplayName ?? er })
          : ex.formatMessage(tx.workLocallyTooltip, { branchName: eB })
      W[32] !== eG || W[33] !== ex
        ? ((j = eG ? ex.formatMessage(tx.finishCurrentHandoffTooltip) : void 0),
          (W[32] = eG),
          (W[33] = ex),
          (W[34] = j))
        : (j = W[34])
      let tf = j
      W[35] !== em || W[36] !== eh || W[37] !== e1 || W[38] !== eD
        ? ((k = () => {
            if ((em(), null != eD)) {
              ;(eh(), e1(eD.id))
              return
            }
            eh()
          }),
          (W[35] = em),
          (W[36] = eh),
          (W[37] = e1),
          (W[38] = eD),
          (W[39] = k))
        : (k = W[39])
      let tw = k
      W[40] !== em ||
      W[41] !== H ||
      W[42] !== ef ||
      W[43] !== tw ||
      W[44] !== te ||
      W[45] !== eg ||
      W[46] !== q ||
      W[47] !== D
        ? ((I = () => {
            te
              ? tw()
              : ("local" !== H && (0, e3.yy)(eg, eT.CodexComposerRuntimeChanged, { mode: "local" }),
                (0, ta.r)(ef, H, "local", "native-control", D),
                (0, w.wJ)(ef, !1),
                q("local"),
                em())
          }),
          (W[40] = em),
          (W[41] = H),
          (W[42] = ef),
          (W[43] = tw),
          (W[44] = te),
          (W[45] = eg),
          (W[46] = q),
          (W[47] = D),
          (W[48] = I))
        : (I = W[48])
      let tv = I
      W[49] !== em ||
      W[50] !== H ||
      W[51] !== ef ||
      W[52] !== K.hostId ||
      W[53] !== tw ||
      W[54] !== e7 ||
      W[55] !== eg ||
      W[56] !== q ||
      W[57] !== to ||
      W[58] !== D
        ? ((_ = () => {
            if (to) return void tw()
            if (e7) return void em()
            let e = ef.get(ts.o, K.hostId)
            ;(H !== e && (0, e3.yy)(eg, eT.CodexComposerRuntimeChanged, { mode: e }),
              (0, ta.r)(ef, H, "worktree", "native-control", D),
              q("worktree"),
              em())
          }),
          (W[49] = em),
          (W[50] = H),
          (W[51] = ef),
          (W[52] = K.hostId),
          (W[53] = tw),
          (W[54] = e7),
          (W[55] = eg),
          (W[56] = q),
          (W[57] = to),
          (W[58] = D),
          (W[59] = _))
        : (_ = W[59])
      let tb = _,
        tj = eo && ((null != z && null != $) || eW?.direction === "to-host-worktree")
      W[60] !== H || W[61] !== K.hostConfig || W[62] !== es
        ? ((M = (0, n.jsx)(tg, { composerMode: H, gitRoot: es, hostConfig: K.hostConfig })),
          (W[60] = H),
          (W[61] = K.hostConfig),
          (W[62] = es),
          (W[63] = M))
        : (M = W[63])
      let ty = M,
        tk = "local" !== H || (D && ea) || G || e7 ? void 0 : ed.G,
        tC = te && null != eD ? tc : void 0,
        tI = te ? eZ : eG,
        t_ = te ? th : (tf ?? tp),
        tS = el ? "me-1.5" : void 0
      ;(W[64] !== ee
        ? ((N =
            null != ee
              ? (0, n.jsx)(y.I, { "aria-hidden": !1, asset: eO.b })
              : (0, n.jsx)(y.I, { "aria-hidden": !1, asset: l.g })),
          (W[64] = ee),
          (W[65] = N))
        : (N = W[65]),
        W[66] !== tS || W[67] !== N
          ? ((A = (0, n.jsx)(S.ms.ItemIcon, { className: tS, size: "xs", children: N })),
            (W[66] = tS),
            (W[67] = N),
            (W[68] = A))
          : (A = W[68]),
        W[69] !== Z
          ? ((T = Z ? (0, n.jsx)(h.A, { ...tx.startInRemote }) : (0, n.jsx)(h.A, { ...tx.localShort })),
            (W[69] = Z),
            (W[70] = T))
          : (T = W[70]),
        W[71] !== tv || W[72] !== tk || W[73] !== tC || W[74] !== tI || W[75] !== t_ || W[76] !== A || W[77] !== T
          ? ((P = (0, n.jsxs)(S.ms.Item, {
              rightIconAsset: tk,
              rightIcon: tC,
              disabled: tI,
              onClick: tv,
              tooltipText: t_,
              children: [A, T],
            })),
            (W[71] = tv),
            (W[72] = tk),
            (W[73] = tC),
            (W[74] = tI),
            (W[75] = t_),
            (W[76] = A),
            (W[77] = T),
            (W[78] = P))
          : (P = W[78]))
      let tM = P
      W[79] !== em ||
      W[80] !== z ||
      W[81] !== et ||
      W[82] !== K.cwd ||
      W[83] !== K.hostId ||
      W[84] !== es ||
      W[85] !== e4 ||
      W[86] !== ti ||
      W[87] !== en ||
      W[88] !== eW ||
      W[89] !== ep ||
      W[90] !== e1 ||
      W[91] !== tj ||
      W[92] !== $
        ? ((R = tj
            ? (0, n.jsx)(tm, {
                conversationId: z,
                threadHandoff: $,
                menuOperation: eW,
                crossHostHandoffEnabled: et,
                handoffBranch: e4,
                handoffIcon: ti,
                sourceHostId: K.hostId,
                sourceGitRoot: es,
                sourceWorkspaceRoot: K.cwd,
                localWorkspaceRootForHandoff: en,
                closeDropdown: em,
                openHostWorktreeHandoffDialog: ep,
                openOperation: e1,
              })
            : null),
          (W[79] = em),
          (W[80] = z),
          (W[81] = et),
          (W[82] = K.cwd),
          (W[83] = K.hostId),
          (W[84] = es),
          (W[85] = e4),
          (W[86] = ti),
          (W[87] = en),
          (W[88] = eW),
          (W[89] = ep),
          (W[90] = e1),
          (W[91] = tj),
          (W[92] = $),
          (W[93] = R))
        : (R = W[93])
      let tN = R
      W[94] !== z
        ? ((E = (0, n.jsx)(S.ms.Title, {
            children:
              null == z
                ? (0, n.jsx)(h.A, {
                    id: "composer.mode.startTask.header",
                    defaultMessage: "Work in",
                    description: "Header above execution locations for a new chat",
                  })
                : (0, n.jsx)(h.A, { ...tx.continueIn }),
          })),
          (W[94] = z),
          (W[95] = E))
        : (E = W[95])
      let tL = Z ? tN : tM,
        tA = Z ? tM : tN
      return (
        W[96] !== ei ||
        W[97] !== tf ||
        W[98] !== H ||
        W[99] !== tb ||
        W[100] !== eG ||
        W[101] !== el ||
        W[102] !== e7 ||
        W[103] !== Z ||
        W[104] !== ec ||
        W[105] !== eZ ||
        W[106] !== tc ||
        W[107] !== th ||
        W[108] !== eD ||
        W[109] !== ea ||
        W[110] !== to ||
        W[111] !== D ||
        W[112] !== ty ||
        W[113] !== eu
          ? ((O =
              (ea || e7 || to) &&
              (0, n.jsx)(S.ms.Item, {
                LeftIcon: eY.A,
                leftIconClassName: el ? "icon-sm self-start" : void 0,
                RightIcon: "worktree" === H || D || e7 ? e$.A : void 0,
                rightIcon: to && null != eD ? tc : void 0,
                rightIconClassName: el ? "icon-xs self-start" : void 0,
                disabled: to ? eZ : eG,
                onClick: tb,
                tooltipText: to ? th : (tf ?? eu),
                subTextAllowWrap: !0,
                SubText: el
                  ? (0, n.jsx)("span", {
                      className: "text-sm text-codex-description",
                      children: (0, n.jsx)(h.A, { ...tx.worktreeAdditionalFolders, values: { count: ei } }),
                    })
                  : void 0,
                children: (0, n.jsxs)("span", {
                  className: "inline-flex items-center gap-1",
                  children: [
                    e7
                      ? (0, n.jsx)(h.A, { ...tx.currentWorktree, values: { host: Z ? "remote" : "local" } })
                      : (0, n.jsx)(tl, { hasMultipleProjectRoots: el, isLocalModeRemote: Z, primaryRepoName: ec }),
                    ty,
                  ],
                }),
              })),
            (W[96] = ei),
            (W[97] = tf),
            (W[98] = H),
            (W[99] = tb),
            (W[100] = eG),
            (W[101] = el),
            (W[102] = e7),
            (W[103] = Z),
            (W[104] = ec),
            (W[105] = eZ),
            (W[106] = tc),
            (W[107] = th),
            (W[108] = eD),
            (W[109] = ea),
            (W[110] = to),
            (W[111] = D),
            (W[112] = ty),
            (W[113] = eu),
            (W[114] = O))
          : (O = W[114]),
        W[115] !== em || W[116] !== H || W[117] !== ef || W[118] !== z || W[119] !== V || W[120] !== q || W[121] !== D
          ? ((U =
              V || null != z
                ? null
                : (0, n.jsx)(eU, {
                    onSelect: () => {
                      ;((0, ta.r)(ef, H, "local", "native-control", D), q("local"), em())
                    },
                  })),
            (W[115] = em),
            (W[116] = H),
            (W[117] = ef),
            (W[118] = z),
            (W[119] = V),
            (W[120] = q),
            (W[121] = D),
            (W[122] = U))
          : (U = W[122]),
        W[123] !== s || W[124] !== i || W[125] !== eI || W[126] !== ey || W[127] !== ev || W[128] !== eN || W[129] !== c
          ? ((B =
              eN &&
              (0, n.jsxs)(n.Fragment, {
                children: [
                  (0, n.jsx)("div", { className: "mx-1 my-1.5 h-[0.5px] bg-text/10" }),
                  (0, n.jsx)(e9.a, {
                    rateLimits: i,
                    activeLimitName: s,
                    planType: ey,
                    suppressUpsell: c,
                    selectedModel: ev,
                    onPlanUpgradeClick: eI,
                  }),
                ],
              })),
            (W[123] = s),
            (W[124] = i),
            (W[125] = eI),
            (W[126] = ey),
            (W[127] = ev),
            (W[128] = eN),
            (W[129] = c),
            (W[130] = B))
          : (B = W[130]),
        W[131] !== E || W[132] !== tL || W[133] !== tA || W[134] !== O || W[135] !== U || W[136] !== B
          ? ((F = (0, n.jsxs)("div", {
              className: "flex max-w-78 min-w-[175px] flex-col",
              children: [E, tL, tA, O, U, null, B],
            })),
            (W[131] = E),
            (W[132] = tL),
            (W[133] = tA),
            (W[134] = O),
            (W[135] = U),
            (W[136] = B),
            (W[137] = F))
          : (F = W[137]),
        F
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
          handoffIcon: b,
          sourceHostId: j,
          sourceGitRoot: y,
          sourceWorkspaceRoot: k,
          localWorkspaceRootForHandoff: I,
          closeDropdown: _,
          openHostWorktreeHandoffDialog: M,
          openOperation: N,
        } = e,
        A = (0, C.A)(),
        T = (0, d._U)(g.sX, p)
      m[0] !== y || m[1] !== j || m[2] !== k
        ? ((t = { sourceHostId: j, sourceGitRoot: y, sourceWorkspaceRoot: k }),
          (m[0] = y),
          (m[1] = j),
          (m[2] = k),
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
        (m[23] !== E || m[24] !== F || m[25] !== b || m[26] !== A || m[27] !== U || m[28] !== B || m[29] !== O
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
                      (0, n.jsx)(S.ms.ItemIcon, { children: U ? b : (0, n.jsx)(eJ.A, { className: "icon-2xs" }) }),
                      (0, n.jsx)(h.A, { ...tx.localShort }),
                    ],
                  })
                : null),
            (m[23] = E),
            (m[24] = F),
            (m[25] = b),
            (m[26] = A),
            (m[27] = U),
            (m[28] = B),
            (m[29] = O),
            (m[30] = l))
          : (l = m[30]),
        m[31] !== R || m[32] !== E || m[33] !== F || m[34] !== b || m[35] !== A || m[36] !== x || m[37] !== P)
      ) {
        let e
        ;(m[39] !== R || m[40] !== E || m[41] !== F || m[42] !== b || m[43] !== A || m[44] !== x || m[45] !== P.length
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
                      ? b
                      : "loading" === e.status
                        ? (0, n.jsx)(L.y, { className: "icon-2xs" })
                        : (0, n.jsx)(eH.bF, {
                            "aria-hidden": !1,
                            asset16: eE.m,
                            legacyIcon: eV.A,
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
                  icon: r ? b : (0, n.jsx)(e5.z, { className: "icon-2xs", hostId: o.hostId }),
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
            (m[42] = b),
            (m[43] = A),
            (m[44] = x),
            (m[45] = P.length),
            (m[46] = e))
          : (e = m[46]),
          (c = P.map(e)),
          (m[31] = R),
          (m[32] = E),
          (m[33] = F),
          (m[34] = b),
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
        w = (0, r.c)(57),
        {
          open: v,
          onOpenChange: b,
          side: j,
          hasMultipleProjectRoots: y,
          crossHostHandoffEnabled: k,
          showCrossHostHandoff: I,
          conversationId: M,
          executionTarget: N,
          gitRoot: A,
          threadHandoff: T,
          worktreeSegmentLabel: P,
          openHandoffDialog: R,
          openHostWorktreeHandoffDialog: E,
          localWorkspaceRootForHandoff: O,
        } = e,
        U = (0, C.A)(),
        B = (0, d.Ul)(J.AQ)
      w[0] !== B ? ((t = { retainRepoWatch: B }), (w[0] = B), (w[1] = t)) : (t = w[1])
      let { data: F } = (0, eq.v)(A, N.hostConfig, "local_remote_dropdown", t),
        W = (0, e2.U)(M),
        H = (0, tt.Vp)(W),
        D = H?.direction === "to-host-worktree" ? null : H,
        q = H?.status === "queued" || H?.status === "running",
        G = H?.direction === "to-host-worktree" && q,
        z = (0, d._U)(g.Pz, M),
        { openOperation: Q } = (0, e2.tC)(),
        K = F ?? (0, tt.j9)(W, M) ?? (I ? z : null),
        $ = (0, tt.qI)({ codexWorktree: !1, operation: D, threadHandoff: T }),
        V = (0, tt.tq)({ conversationId: M, handoffBranch: K, handoffDirection: $, operation: H, threadHandoff: T })
      w[2] !== U || w[3] !== H?.status
        ? ((o =
            H?.status === "queued" || H?.status === "running"
              ? U.formatMessage({
                  id: "localConversation.threadHandoff.tooltip.viewProgress",
                  defaultMessage: "View progress",
                  description:
                    "Tooltip shown when a chat handoff is in progress and the button reopens the progress view",
                })
              : void 0),
          (w[2] = U),
          (w[3] = H?.status),
          (w[4] = o))
        : (o = w[4])
      let Z = o
      w[5] !== H
        ? ((a =
            H?.status === "queued" || H?.status === "running"
              ? (0, n.jsx)(L.y, { className: "icon-2xs" })
              : H?.status === "error"
                ? (0, n.jsx)(eH.bF, { "aria-hidden": !1, asset16: eE.m, legacyIcon: eV.A, legacyClassName: "icon-2xs" })
                : H?.hasUnseenTerminalState && "warning" === H.status
                  ? (0, n.jsx)(eH.bF, {
                      className: "text-warning",
                      "aria-hidden": !1,
                      asset16: eE.m,
                      legacyIcon: eV.A,
                      legacyClassName: "icon-2xs",
                    })
                  : (0, n.jsx)(eH.bF, {
                      className: "rotate-90",
                      "aria-hidden": !1,
                      asset16: eR,
                      legacyIcon: eX,
                      legacyClassName: "icon-2xs",
                    })),
          (w[5] = H),
          (w[6] = a))
        : (a = w[6])
      let X = a
      w[7] !== X || w[8] !== H?.direction
        ? ((i =
            H?.direction === "to-host-worktree"
              ? (0, n.jsx)(eH.bF, {
                  className: "rotate-90",
                  "aria-hidden": !1,
                  asset16: eR,
                  legacyIcon: eX,
                  legacyClassName: "icon-2xs",
                })
              : X),
          (w[7] = X),
          (w[8] = H?.direction),
          (w[9] = i))
        : (i = w[9])
      let Y = i
      w[10] !== G || w[11] !== Z || w[12] !== U || w[13] !== D
        ? ((l = G ? U.formatMessage(tx.finishCurrentHandoffTooltip) : null != D ? Z : void 0),
          (w[10] = G),
          (w[11] = Z),
          (w[12] = U),
          (w[13] = D),
          (w[14] = l))
        : (l = w[14])
      let ee = l
      w[15] !== b || w[16] !== R || w[17] !== Q || w[18] !== D
        ? ((u = () => {
            if ((b(!1), null != D)) {
              ;(R(), Q(D.id))
              return
            }
            R()
          }),
          (w[15] = b),
          (w[16] = R),
          (w[17] = Q),
          (w[18] = D),
          (w[19] = u))
        : (u = w[19])
      let et = u,
        eo = I && ((null != M && null != T) || H?.direction === "to-host-worktree"),
        en = V || (eo && (H?.direction === "to-host-worktree" || null != O)),
        ea = N.hostId !== er.fI
      w[20] !== et ||
      w[21] !== V ||
      w[22] !== y ||
      w[23] !== ea ||
      w[24] !== G ||
      w[25] !== Y ||
      w[26] !== ee ||
      w[27] !== D
        ? ((m = V
            ? (0, n.jsx)(S.ms.Item, {
                LeftIcon: ea ? eZ.A : eJ.A,
                leftIconClassName: y ? "me-1.5" : void 0,
                rightIcon: null == D ? void 0 : Y,
                disabled: G,
                onSelect: et,
                tooltipText: ee,
                children: ea ? (0, n.jsx)(h.A, { ...tx.startInRemote }) : (0, n.jsx)(h.A, { ...tx.localShort }),
              })
            : null),
          (w[20] = et),
          (w[21] = V),
          (w[22] = y),
          (w[23] = ea),
          (w[24] = G),
          (w[25] = Y),
          (w[26] = ee),
          (w[27] = D),
          (w[28] = m))
        : (m = w[28])
      let es = m
      w[29] !== M ||
      w[30] !== k ||
      w[31] !== N.cwd ||
      w[32] !== N.hostId ||
      w[33] !== A ||
      w[34] !== K ||
      w[35] !== X ||
      w[36] !== O ||
      w[37] !== H ||
      w[38] !== b ||
      w[39] !== E ||
      w[40] !== Q ||
      w[41] !== I ||
      w[42] !== T
        ? ((p = I
            ? (0, n.jsx)(tm, {
                conversationId: M,
                threadHandoff: T,
                menuOperation: H,
                crossHostHandoffEnabled: k,
                handoffBranch: K,
                handoffIcon: X,
                sourceHostId: N.hostId,
                sourceGitRoot: A,
                sourceWorkspaceRoot: N.cwd,
                localWorkspaceRootForHandoff: O,
                closeDropdown: () => {
                  b(!1)
                },
                openHostWorktreeHandoffDialog: E,
                openOperation: Q,
              })
            : null),
          (w[29] = M),
          (w[30] = k),
          (w[31] = N.cwd),
          (w[32] = N.hostId),
          (w[33] = A),
          (w[34] = K),
          (w[35] = X),
          (w[36] = O),
          (w[37] = H),
          (w[38] = b),
          (w[39] = E),
          (w[40] = Q),
          (w[41] = I),
          (w[42] = T),
          (w[43] = p))
        : (p = w[43])
      let ei = p,
        el = en ? "chevron" : "none"
      w[44] !== el || w[45] !== P
        ? ((f = (0, n.jsx)(_.P, {
            categoryLabel: null,
            collapse: "none",
            icon: null,
            indicator: el,
            value: P,
            valueClassName: "text-default",
          })),
          (w[44] = el),
          (w[45] = P),
          (w[46] = f))
        : (f = w[46])
      let ec = f
      return (
        w[47] !== ei ||
        w[48] !== ea ||
        w[49] !== b ||
        w[50] !== v ||
        w[51] !== es ||
        w[52] !== en ||
        w[53] !== I ||
        w[54] !== j ||
        w[55] !== ec
          ? ((x = (0, n.jsx)("div", {
              children: en
                ? (0, n.jsx)(S.Ab, {
                    open: v,
                    onOpenChange: b,
                    side: j,
                    triggerButton: ec,
                    children: (0, n.jsxs)("div", {
                      className: (0, c.A)("flex flex-col", I ? "min-w-[220px]" : "min-w-[180px]"),
                      children: [
                        (0, n.jsx)(S.ms.Title, { children: (0, n.jsx)(h.A, { ...tx.continueIn }) }),
                        ea ? ei : es,
                        ea ? es : ei,
                        (0, n.jsx)(S.ms.Item, {
                          leftIconAsset: s.T,
                          rightIconAsset: ed.G,
                          onSelect: () => {
                            b(!1)
                          },
                          children: (0, n.jsx)(h.A, {
                            ...tx.currentWorktree,
                            values: { host: ea ? "remote" : "local" },
                          }),
                        }),
                      ],
                    }),
                  })
                : (0, n.jsx)("span", {
                    className: "inline-flex",
                    children: (0, n.jsx)("div", { className: "pointer-events-none", children: ec }),
                  }),
            })),
            (w[47] = ei),
            (w[48] = ea),
            (w[49] = b),
            (w[50] = v),
            (w[51] = es),
            (w[52] = en),
            (w[53] = I),
            (w[54] = j),
            (w[55] = ec),
            (w[56] = x))
          : (x = w[56]),
        x
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
                    legacyIcon: eV.A,
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
      tb = o("zrLs"),
      tj = o("arTB"),
      ty = o("iRaF"),
      tk = o("pJpO"),
      tC = o("Xpvt"),
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
        b,
        j,
        k,
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
        F = (0, d.gh)(Y.PR),
        W = (0, m.useId)(),
        H = (0, C.A)(),
        D = (0, d.Ul)(w.RB),
        q = (0, d.Ul)(tk.Os),
        G = null != (0, d.Ul)(T.S),
        z = (0, d.Ul)(tk.PF),
        Q = (0, d.Ul)(tk.tS),
        K = O || (z && Q?.workspace == null),
        $ = (0, ea.Zj)("3724118644"),
        V = (0, d._U)(eF.mY, P),
        Z = "worktree" === L || V,
        J = (0, ea.Zj)("2785238453"),
        X = !D && !q && G && E,
        ee = !K && X
      N[0] !== L || N[1] !== F || N[2] !== R || N[3] !== V || N[4] !== Z
        ? ((t = (e) => {
            let t = Z ? "local" : "worktree"
            ;((0, ta.r)(F, L, t, e, V), R(t))
          }),
          (N[0] = L),
          (N[1] = F),
          (N[2] = R),
          (N[3] = V),
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
      let en = ee && (!$ || !J)
      if (
        (N[16] !== et
          ? ((p = async () => {
              et("slash-command")
            }),
            (N[16] = et),
            (N[17] = p))
          : (p = N[17]),
        N[18] !== L || N[19] !== R || N[20] !== V || N[21] !== Z
          ? ((g = [L, V, Z, R]), (N[18] = L), (N[19] = R), (N[20] = V), (N[21] = Z), (N[22] = g))
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
        !X || J)
      )
        return null
      N[29] !== L || N[30] !== F || N[31] !== R || N[32] !== V
        ? ((x = (e) => {
            let t = e ? "worktree" : "local"
            ;((0, ta.r)(F, L, t, "native-control", V), R(t))
          }),
          (N[29] = L),
          (N[30] = F),
          (N[31] = R),
          (N[32] = V),
          (N[33] = x))
        : (x = N[33])
      let er = x,
        es = "menu" === B ? "h-token-button-composer w-full justify-between px-2" : "shrink-0 pe-2"
      ;(N[34] !== es
        ? ((v = (0, c.A)("relative flex items-center gap-2 text-sm select-none", es)), (N[34] = es), (N[35] = v))
        : (v = N[35]),
        N[36] !== B
          ? ((b = "menu" === B ? (0, n.jsx)(y.I, { asset: s.T }) : null), (N[36] = B), (N[37] = b))
          : (b = N[37]))
      let ei = K ? "cursor-not-allowed" : "cursor-interaction"
      ;(N[38] !== ei ? ((j = (0, c.A)("flex-1", ei)), (N[38] = ei), (N[39] = j)) : (j = N[39]),
        N[40] !== B
          ? ((k =
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
            (N[41] = k))
          : (k = N[41]),
        N[42] !== W || N[43] !== j || N[44] !== k
          ? ((I = (0, n.jsx)("label", { className: j, htmlFor: W, children: k })),
            (N[42] = W),
            (N[43] = j),
            (N[44] = k),
            (N[45] = I))
          : (I = N[45]),
        N[46] !== W || N[47] !== K || N[48] !== er || N[49] !== B || N[50] !== Z
          ? ((_ =
              "menu" === B
                ? (0, n.jsx)(tI.l, { id: W, size: "sm", tone: "neutral", checked: Z, disabled: K, onChange: er })
                : (0, n.jsx)(tC.S, { id: W, checked: Z, disabled: K, onCheckedChange: er })),
            (N[46] = W),
            (N[47] = K),
            (N[48] = er),
            (N[49] = B),
            (N[50] = Z),
            (N[51] = _))
          : (_ = N[51]),
        N[52] !== v || N[53] !== b || N[54] !== I || N[55] !== _
          ? ((S = (0, n.jsxs)("div", { className: v, children: [b, I, _] })),
            (N[52] = v),
            (N[53] = b),
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
    let tA = (0, d.i1)(X.u, (e, { get: t }) => {
        let o = t(g.VT, e) ?? 0,
          n = t(g.LO, e) ?? 0
        return o > 0 || n > 0
      }),
      tT = (0, d.i1)(X.u, (e, { get: t }) => "allowed")
    function tP(e) {
      let t,
        o,
        k,
        C,
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
        ek,
        eC,
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
        eH = (0, r.c)(242),
        {
          asyncThreadStartingState: eD,
          variant: eq,
          isHidden: eG,
          isInRail: ez,
          composerMode: eQ,
          worktreePromptContext: eK,
          setComposerMode: e$,
          isResponseInProgress: eV,
          isWorktreeAvailable: eZ,
          worktreeEnvironmentHostId: eJ,
          worktreeEnvironmentWorkspaceRoot: eX,
          codexHome: eY,
          homeAuxiliaryControl: e1,
          showRuntimeControls: e0,
          hideRunLocationDropdown: e2,
          showWorkspaceDropdown: e3,
          gitRootForStartingState: e4,
          startingStateRepositoryKey: e5,
          showUtilityBarBranchWhen: e6,
          freeUpsellButton: e7,
          remoteConfig: e8,
          activeProjectIdOverride: e9,
          onProjectChange: te,
          localRemoteExecutionTarget: to,
          existingWorkspace: tr,
        } = e,
        ta = void 0 !== eG && eG,
        ts = (0, d.gh)(Y.PR),
        tl = (0, d.gh)(X.u),
        tc = (0, m.useContext)(tM.U),
        td = (0, p.zy)(),
        tu = (0, p.Zp)(),
        tm = (0, d.Ul)(em.f),
        th = (0, d.Ul)(w.TC),
        tp = (0, d.Ul)(w.RB),
        tg = (0, en.r9)() === en.O$
      eH[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = (0, b.$t)()), (eH[0] = t)) : (t = eH[0])
      let tf = t,
        tx = "cloud" !== eQ && tm?.type !== "cloud"
      eH[1] !== ts ? ((o = (0, Y.ah)(ts)), (eH[1] = ts), (eH[2] = o)) : (o = eH[2])
      let tw = o,
        tC = (0, d.Ul)(tj.pU),
        tI = (0, d._U)(es.JW, "1678134557"),
        t_ = (0, d.Ul)(x.s8),
        tP = tC && !tg && null == tr,
        tE = (0, d.Ul)(tj.aV),
        tO = tP && tE,
        tU = (0, d.Ul)(tk.Os),
        tB = (0, d.Ul)(tj.H$),
        tF = tP && tI
      tF && (k = tB?.kind === "remote" ? (tB.hostId ?? void 0) : er.fI)
      let tW = (0, d.Ul)(null),
        tH = (0, d._U)(g.Af, tw),
        tD = null != tw && !tH,
        tq = (0, K.K5)(tw),
        tG = to ?? tq
      eH[3] !== tG.hostConfig || eH[4] !== tG.hostId
        ? ((C = { hostId: tG.hostId, hostConfig: tG.hostConfig }),
          (eH[3] = tG.hostConfig),
          (eH[4] = tG.hostId),
          (eH[5] = C))
        : (C = eH[5])
      let tz = (0, d._U)(eN.bW, C),
        tQ = (0, d._U)(g.qX, tw),
        tK = (0, d._U)(g.hf, tw),
        t$ = (0, d._U)(tA, tw),
        tV = null != tm || t$,
        tZ = e8.currentHostId ?? er.fI,
        tJ = tm?.type
      eH[6] !== eQ || eH[7] !== tZ || eH[8] !== t$ || eH[9] !== tJ
        ? ((I = (0, tv.I$)({
            composerMode: eQ,
            draftRemoteHostId: tZ,
            followUpType: tJ,
            hasStartedBranchConversation: t$,
          })),
          (eH[6] = eQ),
          (eH[7] = tZ),
          (eH[8] = t$),
          (eH[9] = tJ),
          (eH[10] = I))
        : (I = eH[10])
      let tX = I,
        tY = tX ? tZ : tQ,
        t1 = (0, d._U)(tT, tY === er.fI ? null : tY),
        t0 = "allowed" === t1,
        t2 = "loading" === t1,
        t3 = !tX && tY !== er.fI,
        t4 = (0, d._U)(g.JN, tw),
        t5 = (0, d._U)(ei.A3, tw) ?? t4,
        t6 = (0, Q.y)(tG.hostId) ?? eY
      eH[11] !== t5 || eH[12] !== t6
        ? ((_ = (0, u.n9x)(t5, t6)), (eH[11] = t5), (eH[12] = t6), (eH[13] = _))
        : (_ = eH[13])
      let t7 = _,
        t8 = tr?.workspaceRoot
      eH[14] !== t6 || eH[15] !== t8
        ? ((S = (0, u.n9x)(t8, t6)), (eH[14] = t6), (eH[15] = t8), (eH[16] = S))
        : (S = eH[16])
      let t9 = S,
        oe = "home" === eq,
        ot = "home" === eq && void 0 !== e9 && null == e9,
        oo = ot && th,
        on = oo || (e0 && !ot),
        or = (0, ea.Zj)("1115442235"),
        oa = (0, d._U)($.N, tw),
        os = (0, Z.Q)()
      eH[17] !== os || eH[18] !== tY
        ? ((M = os.find((e) => e.hostId === tY) ?? null), (eH[17] = os), (eH[18] = tY), (eH[19] = M))
        : (M = eH[19])
      let oi = M
      eH[20] !== tG.cwd || eH[21] !== t3 || eH[22] !== e8 || eH[23] !== tY
        ? ((N = tY !== er.fI ? (t3 ? tG.cwd : e8.getProjectPathForHostId(tY)) : null),
          (eH[20] = tG.cwd),
          (eH[21] = t3),
          (eH[22] = e8),
          (eH[23] = tY),
          (eH[24] = N))
        : (N = eH[24])
      let ol = N
      eH[25] !== e8.currentHostId || eH[26] !== os
        ? ((L = os.find((e) => e.hostId === e8.currentHostId) ?? null),
          (eH[25] = e8.currentHostId),
          (eH[26] = os),
          (eH[27] = L))
        : (L = eH[27])
      let oc = L
      eH[28] !== e8 ? ((A = e8.getProjectPathForHostId(e8.currentHostId)), (eH[28] = e8), (eH[29] = A)) : (A = eH[29])
      let od = A
      ;(oi?.displayName, oc?.displayName)
      let ou = tY !== er.fI ? (oi?.displayName ?? null) : null
      eH[30] !== tY || eH[31] !== ou || eH[32] !== ol
        ? ((T = { hostId: tY, connectionDisplayName: ou, projectPath: ol }),
          (eH[30] = tY),
          (eH[31] = ou),
          (eH[32] = ol),
          (eH[33] = T))
        : (T = eH[33])
      let om = oc?.displayName ?? null
      ;(eH[34] !== e8.currentHostId || eH[35] !== od || eH[36] !== om
        ? ((P = { hostId: e8.currentHostId, connectionDisplayName: om, projectPath: od }),
          (eH[34] = e8.currentHostId),
          (eH[35] = od),
          (eH[36] = om),
          (eH[37] = P))
        : (P = eH[37]),
        eH[38] !== tV || eH[39] !== T || eH[40] !== P
          ? ((R = { isAttachedToStartedTask: tV, existingRemoteThreadState: T, draftNewThreadRemoteSelectionState: P }),
            (eH[38] = tV),
            (eH[39] = T),
            (eH[40] = P),
            (eH[41] = R))
          : (R = eH[41]))
      let oh = R,
        op = tG.hostConfig
      eH[42] !== op
        ? ((E = { hostConfig: op, operationSource: "composer_content" }), (eH[42] = op), (eH[43] = E))
        : (E = eH[43])
      let { data: og, isLoading: of } = (0, d._U)(q.j, E),
        ox = ((og?.available === !0 && tx) || tz) && !tD ? tG.cwd : null
      eH[44] !== ox || eH[45] !== op
        ? ((O = null == ox ? null : { cwd: ox, hostConfig: op }), (eH[44] = ox), (eH[45] = op), (eH[46] = O))
        : (O = eH[46])
      let ow = O,
        ov = (0, d.Ul)(J.AQ)
      eH[47] !== ov
        ? ((U = { enabled: !0, retainRepoWatch: ov, watchForGitInit: !1 }), (eH[47] = ov), (eH[48] = U))
        : (U = eH[48])
      let { data: ob, isLoading: oj, isSuccess: oy } = (0, z.E)(ow, "composer_content", U),
        ok = oj || (tx && null != tG.cwd && null == ox && of)
      eH[49] !== ox || eH[50] !== op
        ? ((B = { cwd: ox, hostConfig: op, showErrorToast: !0 }), (eH[49] = ox), (eH[50] = op), (eH[51] = B))
        : (B = eH[51])
      let { canCreateGitRepository: oC, createGitRepository: oI, isCreatingGitRepository: o_ } = (0, G.c)(B),
        oS = null != ox && oy,
        oM = tx && t0 && oS && null == ob,
        oN = !oC || o_ || !oS || oj,
        oL = oM ? null : e7,
        oA = (0, ea.Zj)("3724118644"),
        oT = (0, d._U)(eF.mY, eK),
        oP = "worktree" === eQ || oT,
        oR = oP || (tP && "local" === eQ && !0 === eZ),
        oE = oR && !0,
        oO = oE ? eX : null
      eH[52] !== oO || eH[53] !== eJ
        ? ((F = { hostId: eJ, workspaceRoot: oO }), (eH[52] = oO), (eH[53] = eJ), (eH[54] = F))
        : (F = eH[54])
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
        } = (0, V.GF)(F),
        oQ = oA ? (oG ?? null) : oH
      eH[55] !== tl ||
      eH[56] !== oW ||
      eH[57] !== oF ||
      eH[58] !== oB ||
      eH[59] !== td.hash ||
      eH[60] !== td.pathname ||
      eH[61] !== td.search ||
      eH[62] !== tu ||
      eH[63] !== eJ ||
      eH[64] !== eX ||
      eH[65] !== oU
        ? ((H = tR.bind(null, {
            scope: tl,
            navigate: tu,
            hostId: eJ,
            workspaceRoot: eX,
            returnTo: `${td.pathname}${td.search}${td.hash}`,
            showEnvironmentList: oB || oF || null != oW || oU.length > 0,
          })),
          (eH[55] = tl),
          (eH[56] = oW),
          (eH[57] = oF),
          (eH[58] = oB),
          (eH[59] = td.hash),
          (eH[60] = td.pathname),
          (eH[61] = td.search),
          (eH[62] = tu),
          (eH[63] = eJ),
          (eH[64] = eX),
          (eH[65] = oU),
          (eH[66] = H))
        : (H = eH[66])
      let oK = H
      eH[67] !== tm ||
      eH[68] !== oK ||
      eH[69] !== oW ||
      eH[70] !== oF ||
      eH[71] !== oB ||
      eH[72] !== oz ||
      eH[73] !== oQ ||
      eH[74] !== oE ||
      eH[75] !== oq ||
      eH[76] !== oD ||
      eH[77] !== eX ||
      eH[78] !== oU ||
      eH[79] !== oA ||
      eH[80] !== oP
        ? ((D = (e, t) =>
            !tm && oE
              ? (0, n.jsx)(tL.M, {
                  presentation: void 0 === e ? "inline" : e,
                  disabled: !oP,
                  taskOptions: t,
                  environments: oU,
                  isLoading: oB || (oF && 0 === oU.length),
                  hasError: null != oW,
                  selectedConfigPath: oQ,
                  repairConfigPath: oD,
                  onSelectConfigPath: oq,
                  onResetSelection: oA ? oz : void 0,
                  onOpenSettings: oK,
                  workspaceRoot: eX,
                })
              : null),
          (eH[67] = tm),
          (eH[68] = oK),
          (eH[69] = oW),
          (eH[70] = oF),
          (eH[71] = oB),
          (eH[72] = oz),
          (eH[73] = oQ),
          (eH[74] = oE),
          (eH[75] = oq),
          (eH[76] = oD),
          (eH[77] = eX),
          (eH[78] = oU),
          (eH[79] = oA),
          (eH[80] = oP),
          (eH[81] = D))
        : (D = eH[81])
      let o$ = D
      eH[82] !== eD ||
      eH[83] !== oR ||
      eH[84] !== tm ||
      eH[85] !== e4 ||
      eH[86] !== op ||
      eH[87] !== ts ||
      eH[88] !== e5
        ? ((et = (e, t) =>
            !tm && oR
              ? (0, n.jsx)(n.Fragment, {
                  children: (0, n.jsx)(ec.u, {
                    presentation: void 0 === e ? "inline" : e,
                    taskOptions: t,
                    startingState: eD,
                    onStartingStateChange: (e) => {
                      ;(0, eh.M2)(ts, e, e5)
                    },
                    hostConfig: op,
                    gitRoot: e4,
                  }),
                })
              : null),
          (eH[82] = eD),
          (eH[83] = oR),
          (eH[84] = tm),
          (eH[85] = e4),
          (eH[86] = op),
          (eH[87] = ts),
          (eH[88] = e5),
          (eH[89] = et))
        : (et = eH[89])
      let oV = et
      eH[90] !== oa || eH[91] !== tw || eH[92] !== tG.cwd || eH[93] !== t7 || eH[94] !== or
        ? ((eo =
            or && (0, tt.Qr)({ isCompactWindow: tf }) && null != tw && null != tG.cwd
              ? { conversationTitle: oa, cwd: (0, u.DIv)(tG.cwd), isWorktreeConversation: t7 }
              : null),
          (eH[90] = oa),
          (eH[91] = tw),
          (eH[92] = tG.cwd),
          (eH[93] = t7),
          (eH[94] = or),
          (eH[95] = eo))
        : (eo = eH[95])
      let oZ = eo,
        oJ = null != tw && tY !== er.fI && tK?.role === "follower",
        oX = ("always" === e6 || "local" === eQ) && (t0 || t2) && !oJ && !tD
      eH[96] !== tw ||
      eH[97] !== tG.cwd ||
      eH[98] !== tr ||
      eH[99] !== ob?.root ||
      eH[100] !== op ||
      eH[101] !== ok ||
      eH[102] !== t2 ||
      eH[103] !== t0 ||
      eH[104] !== tY ||
      eH[105] !== oM ||
      eH[106] !== oX
        ? ((ed = (e) =>
            oX && !oM
              ? (0, n.jsx)(
                  eb.H,
                  {
                    presentation: void 0 === e ? "inline" : e,
                    gitRoot: t0 ? (ob?.root ?? null) : null,
                    hostConfig: op,
                    localConversationId: tw,
                    isLoading: ok || t2,
                    isReadOnly: null != tr,
                    revalidateBranchSelection: void 0,
                    shouldShow: !0,
                    align: "start",
                  },
                  `${op.id}:${tG.cwd ?? ""}`,
                )
              : null),
          (eH[96] = tw),
          (eH[97] = tG.cwd),
          (eH[98] = tr),
          (eH[99] = ob?.root),
          (eH[100] = op),
          (eH[101] = ok),
          (eH[102] = t2),
          (eH[103] = t0),
          (eH[104] = tY),
          (eH[105] = oM),
          (eH[106] = oX),
          (eH[107] = ed))
        : (ed = eH[107])
      let oY = ed
      if (tP) {
        let e
        ;(eH[108] !== te
          ? ((e = (0, n.jsx)(tb.i, { onProjectChange: te })), (eH[108] = te), (eH[109] = e))
          : (e = eH[109]),
          (eu = e))
      } else {
        let e
        ;(eH[110] !== eQ ||
        eH[111] !== tw ||
        eH[112] !== tr ||
        eH[113] !== tm ||
        eH[114] !== e2 ||
        eH[115] !== op ||
        eH[116] !== t9 ||
        eH[117] !== eV ||
        eH[118] !== eZ ||
        eH[119] !== to ||
        eH[120] !== oh ||
        eH[121] !== t6 ||
        eH[122] !== e$ ||
        eH[123] !== oo ||
        eH[124] !== t7 ||
        eH[125] !== oZ ||
        eH[126] !== eK
          ? ((e =
              null != tr && "local" === eQ
                ? (0, n.jsx)(a.m, {
                    content: (0, n.jsxs)("div", {
                      className: "flex flex-col gap-1",
                      children: [
                        null == tr.sourceConversationTitle
                          ? null
                          : (0, n.jsx)(h.A, {
                              id: "composer.existingWorkspace.fromTask",
                              defaultMessage: "From {taskTitle}",
                              description: "Source task shown in the existing workspace tooltip",
                              values: { taskTitle: tr.sourceConversationTitle },
                            }),
                        (0, n.jsx)("span", { className: "font-mono text-xs break-all", children: tr.workspaceRoot }),
                      ],
                    }),
                    maxWidth: 896,
                    children: (0, n.jsx)(a.m.TriggerDecorator, {
                      unstyled: !0,
                      children: (0, n.jsx)("span", {
                        className: "inline-block",
                        children: (0, n.jsx)(ej.i, {
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
                                    worktreePath: tr.workspaceRoot,
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
                : tm?.type === "cloud"
                  ? (0, n.jsx)(ep, { composerMode: eQ, setComposerMode: e$ })
                  : (0, n.jsx)(ti, {
                      worktreePromptContext: eK,
                      composerMode: eQ,
                      setComposerMode: e$,
                      conversationId: tw,
                      executionTargetOverride: to,
                      remoteSelectionState: oh,
                      isWorktreeAvailable: eZ,
                      disabled: t7,
                      hideModeDropdown: e2 && !oo,
                      allowWorktree: !tm && !eV,
                      threadHandoff: oZ,
                      worktreeLabelOnly: t7,
                    })),
            (eH[110] = eQ),
            (eH[111] = tw),
            (eH[112] = tr),
            (eH[113] = tm),
            (eH[114] = e2),
            (eH[115] = op),
            (eH[116] = t9),
            (eH[117] = eV),
            (eH[118] = eZ),
            (eH[119] = to),
            (eH[120] = oh),
            (eH[121] = t6),
            (eH[122] = e$),
            (eH[123] = oo),
            (eH[124] = t7),
            (eH[125] = oZ),
            (eH[126] = eK),
            (eH[127] = e))
          : (e = eH[127]),
          (eu = e))
      }
      let o1 = (0, d.Ul)(ee.Ro)
      eH[128] !== eQ ||
      eH[129] !== tO ||
      eH[130] !== tm ||
      eH[131] !== tU ||
      eH[132] !== o1 ||
      eH[133] !== tP ||
      eH[134] !== e3 ||
      eH[135] !== tW
        ? ((eg = null == tW && !o1 && !(tO && tU) && (tP || e3) && (0, ew.u)(eQ) && !tm),
          (eH[128] = eQ),
          (eH[129] = tO),
          (eH[130] = tm),
          (eH[131] = tU),
          (eH[132] = o1),
          (eH[133] = tP),
          (eH[134] = e3),
          (eH[135] = tW),
          (eH[136] = eg))
        : (eg = eH[136])
      let o0 = eg,
        o2 = (0, d.Ul)(eh.MS),
        o3 = (0, d._U)(v.X1, "composer.openProjectPicker")
      ;(eH[137] !== tc || eH[138] !== ts
        ? ((ey = () => {
            ;((0, eL.G8)(), tc?.focus(), ts.set(eh.MS, !0))
          }),
          (eH[137] = tc),
          (eH[138] = ts),
          (eH[139] = ey))
        : (ey = eH[139]),
        eH[140] !== o0 ? ((ek = { enabled: o0 }), (eH[140] = o0), (eH[141] = ek)) : (ek = eH[141]),
        (0, tn.Kr)("composer.openProjectPicker", ey, ek))
      let o4 = null != te
      eH[142] !== e9 ||
      eH[143] !== t_ ||
      eH[144] !== o2 ||
      eH[145] !== tg ||
      eH[146] !== tB?.kind ||
      eH[147] !== te ||
      eH[148] !== k ||
      eH[149] !== o3 ||
      eH[150] !== o4 ||
      eH[151] !== ts ||
      eH[152] !== tF ||
      eH[153] !== tP ||
      eH[154] !== o0 ||
      eH[155] !== eq
        ? ((eC = o0
            ? (0, n.jsx)(n.Fragment, {
                children:
                  !tg || o4
                    ? (0, n.jsx)(eA.I, {
                        activeProjectIdOverride: e9,
                        hostId: k,
                        allowLocalProjects: !tF || k === er.fI,
                        allowLocalProjectActions: !tF || k === er.fI,
                        allowRemoteProjects: tF ? tB?.kind === "remote" && null != k : t_ || o4 || !tP,
                        onProjectSelected: (e) => {
                          ;(0, ty.lB)(ts, e, te)
                        },
                        isOpen: o2,
                        onOpenChange: (e) => ts.set(eh.MS, e),
                        shortcut: o3,
                        variant: "home" === eq ? "home" : "default",
                      })
                    : (0, n.jsx)(f.n, {
                        menuOpen: o2,
                        onMenuOpenChange: (e) => ts.set(eh.MS, e),
                        projectId: e9,
                        shortcut: o3,
                        subtleHover: "home" === eq,
                      }),
              })
            : null),
          (eH[142] = e9),
          (eH[143] = t_),
          (eH[144] = o2),
          (eH[145] = tg),
          (eH[146] = tB?.kind),
          (eH[147] = te),
          (eH[148] = k),
          (eH[149] = o3),
          (eH[150] = o4),
          (eH[151] = ts),
          (eH[152] = tF),
          (eH[153] = tP),
          (eH[154] = o0),
          (eH[155] = eq),
          (eH[156] = eC))
        : (eC = eH[156])
      let o5 = eC
      eH[157] !== eQ || eH[158] !== tm || eH[159] !== oL
        ? ((eI = !!tm), (eH[157] = eQ), (eH[158] = tm), (eH[159] = oL), (eH[160] = eI))
        : (eI = eH[160])
      let o6 = eI
      eH[161] !== o6 ? ((e_ = o6 ? (0, n.jsx)(eM, {}) : null), (eH[161] = o6), (eH[162] = e_)) : (e_ = eH[162])
      let o7 = e_,
        o8 = tX ? oh.draftNewThreadRemoteSelectionState : oh.existingRemoteThreadState
      eH[163] !== oI || eH[164] !== oN || eH[165] !== o_ || eH[166] !== oM || eH[167] !== oX
        ? ((eS =
            oX && oM
              ? (0, n.jsxs)(j.$, {
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
          (eH[163] = oI),
          (eH[164] = oN),
          (eH[165] = o_),
          (eH[166] = oM),
          (eH[167] = oX),
          (eH[168] = eS))
        : (eS = eH[168])
      let o9 = eS,
        ne = "local" === eQ && null != o8.hostId && o8.hostId !== er.fI
      eH[169] !== ne || eH[170] !== o8
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
          (eH[169] = ne),
          (eH[170] = o8),
          (eH[171] = eT))
        : (eT = eH[171])
      let nt = eT
      eH[172] !== tm || eH[173] !== e8 || eH[174] !== oQ || eH[175] !== eJ || eH[176] !== eX
        ? ((eP = (e) => null),
          (eH[172] = tm),
          (eH[173] = e8),
          (eH[174] = oQ),
          (eH[175] = eJ),
          (eH[176] = eX),
          (eH[177] = eP))
        : (eP = eH[177])
      let no = eP,
        nn = null
      if (!tP) {
        let e
        ;(eH[178] !== oV ||
        eH[179] !== oY ||
        eH[180] !== tp ||
        eH[181] !== eQ ||
        eH[182] !== tm?.type ||
        eH[183] !== no ||
        eH[184] !== o$
          ? ((e = tp
              ? (0, n.jsx)(W, { allowProvisioning: !1 })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    oY(),
                    tm?.type !== "cloud"
                      ? (0, n.jsxs)(n.Fragment, { children: [o$(), oV(), "worktree" === eQ ? no() : null] })
                      : null,
                  ],
                })),
            (eH[178] = oV),
            (eH[179] = oY),
            (eH[180] = tp),
            (eH[181] = eQ),
            (eH[182] = tm?.type),
            (eH[183] = no),
            (eH[184] = o$),
            (eH[185] = e))
          : (e = eH[185]),
          (nn = e))
      }
      eH[186] !== oY || eH[187] !== tm?.type || eH[188] !== nn || eH[189] !== eu || eH[190] !== eq
        ? ((eR =
            tm?.type === "cloud"
              ? (0, n.jsxs)(n.Fragment, { children: ["home" === eq ? oY() : null, eu, "default" === eq ? oY() : null] })
              : (0, n.jsxs)(n.Fragment, { children: [eu, nn] })),
          (eH[186] = oY),
          (eH[187] = tm?.type),
          (eH[188] = nn),
          (eH[189] = eu),
          (eH[190] = eq),
          (eH[191] = eR))
        : (eR = eH[191])
      let nr = eR
      eH[192] !== tU || eH[193] !== tB?.kind || eH[194] !== tF
        ? ((eE = null), (eH[192] = tU), (eH[193] = tB?.kind), (eH[194] = tF), (eH[195] = eE))
        : (eE = eH[195])
      let na = eE,
        ns = !tO && ("home" === eq || tP) ? o5 : null,
        ni = "home" === eq ? e1 : null,
        nl = tP || e0 ? nr : null,
        nc = tO || ("default" === eq && !tP) ? o5 : null
      eH[196] !== ns || eH[197] !== ni || eH[198] !== nl || eH[199] !== nc
        ? ((eO = (0, n.jsxs)(n.Fragment, { children: [ns, ni, nl, nc] })),
          (eH[196] = ns),
          (eH[197] = ni),
          (eH[198] = nl),
          (eH[199] = nc),
          (eH[200] = eO))
        : (eO = eH[200])
      let nd = eO,
        nu = tO ? null : o5,
        nm = tP || on ? eu : null,
        nh = on ? nn : null,
        np = tO ? o5 : null
      eH[201] !== e1 || eH[202] !== nu || eH[203] !== nm || eH[204] !== nh || eH[205] !== np
        ? ((eU = (0, n.jsxs)(n.Fragment, { children: [nu, e1, nm, nh, np] })),
          (eH[201] = e1),
          (eH[202] = nu),
          (eH[203] = nm),
          (eH[204] = nh),
          (eH[205] = np),
          (eH[206] = eU))
        : (eU = eH[206])
      let ng = eU,
        nf = !!(nt ?? o9 ?? (oL || o7)),
        nx = null
      if (tP) {
        let e,
          t,
          o = !0 === eZ,
          r = !eZ || eV
        ;(eH[207] !== oV || eH[208] !== oY || eH[209] !== no || eH[210] !== o$ || eH[211] !== oP
          ? ((e = (e, t) =>
              (0, n.jsxs)(n.Fragment, {
                children: [oP ? oV("menu", e) : oY("menu"), o$("menu", e), t ? no(e) : null],
              })),
            (eH[207] = oV),
            (eH[208] = oY),
            (eH[209] = no),
            (eH[210] = o$),
            (eH[211] = oP),
            (eH[212] = e))
          : (e = eH[212]),
          eH[213] !== eQ || eH[214] !== e$ || eH[215] !== o || eH[216] !== r || eH[217] !== e || eH[218] !== eK
            ? ((t = (0, n.jsx)(tS, {
                presentation: "menu",
                worktreePromptContext: eK,
                composerMode: eQ,
                setComposerMode: e$,
                isWorktreeAvailable: o,
                disabled: r,
                options: e,
              })),
              (eH[213] = eQ),
              (eH[214] = e$),
              (eH[215] = o),
              (eH[216] = r),
              (eH[217] = e),
              (eH[218] = eK),
              (eH[219] = t))
            : (t = eH[219]),
          (nx = t))
      } else if (e0 && nf) {
        let e,
          t,
          o = "home" === eq && "pe-2"
        ;(eH[220] !== o
          ? ((e = (0, c.A)("flex min-w-0 shrink-0 items-center gap-3", o)), (eH[220] = o), (eH[221] = e))
          : (e = eH[221]),
          eH[222] !== o9 || eH[223] !== o7 || eH[224] !== nt || eH[225] !== e || eH[226] !== oL
            ? ((t = (0, n.jsxs)("div", { className: e, children: [nt, o9, oL, o7] })),
              (eH[222] = o9),
              (eH[223] = o7),
              (eH[224] = nt),
              (eH[225] = e),
              (eH[226] = oL),
              (eH[227] = t))
            : (t = eH[227]),
          (nx = t))
      }
      if ("home" === eq || (void 0 !== ez && ez)) {
        let e,
          t,
          o = "home" === eq && !tg
        eH[228] !== na || eH[229] !== nx
          ? ((e = (0, n.jsxs)(n.Fragment, { children: [na, nx] })), (eH[228] = na), (eH[229] = nx), (eH[230] = e))
          : (e = eH[230])
        let r = oe ? ng : nd
        return (
          eH[231] !== ta || eH[232] !== o || eH[233] !== e || eH[234] !== r
            ? ((t = (0, n.jsx)(ev.S, { isHidden: ta, revealOnFocus: o, trailingControls: e, children: r })),
              (eH[231] = ta),
              (eH[232] = o),
              (eH[233] = e),
              (eH[234] = r),
              (eH[235] = t))
            : (t = eH[235]),
          t
        )
      }
      return (
        eH[236] !== nd
          ? ((eB = (0, n.jsx)("div", {
              className: "flex min-w-0 flex-1 flex-nowrap items-center gap-0",
              children: nd,
            })),
            (eH[236] = nd),
            (eH[237] = eB))
          : (eB = eH[237]),
        eH[238] !== eB || eH[239] !== na || eH[240] !== nx
          ? ((eW = (0, n.jsxs)(ef.u, {
              className: "flex flex-wrap items-center gap-2 overflow-visible ps-2 pe-2",
              children: [eB, na, nx],
            })),
            (eH[238] = eB),
            (eH[239] = na),
            (eH[240] = nx),
            (eH[241] = eW))
          : (eW = eH[241]),
        eW
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
      a = o("GO7r"),
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
      s = o("v7qY"),
      i = o("Wf1j"),
      l = o("oyxz"),
      c = o("ygO2"),
      d = o("bqtn"),
      u = o("GO7r"),
      m = o("nzx4"),
      h = o("bIvi")
    o.d(
      t,
      {},
      {
        W: function (e) {
          let t,
            o,
            s,
            h,
            p,
            g,
            f,
            x,
            w,
            v,
            b,
            j,
            y = (0, r.c)(28),
            { children: k } = e,
            C = (0, i.A)(),
            [I, _] = (0, a.useState)(null),
            [S, M] = (0, a.useState)(null)
          y[0] !== C
            ? ((t = C.formatMessage({
                id: "composer.newTask.configureLocalEnvironment",
                defaultMessage: "Configure local environment",
                description: "Open the new chat's worktree, branch, and local setup environment settings",
              })),
              (y[0] = C),
              (y[1] = t))
            : (t = y[1])
          let N = t
          ;(y[2] === Symbol.for("react.memo_cache_sentinel") ? ((o = () => _(null)), (y[2] = o)) : (o = y[2]),
            y[3] === Symbol.for("react.memo_cache_sentinel") ? ((s = (0, n.jsx)(u.dqq, {})), (y[3] = s)) : (s = y[3]),
            y[4] !== N
              ? ((h = (0, n.jsx)(m.Wv, {
                  asChild: !0,
                  children: (0, n.jsx)(c.$, {
                    color: "ghost",
                    size: "composerSm",
                    uniform: !0,
                    "aria-label": N,
                    children: s,
                  }),
                })),
                (y[4] = N),
                (y[5] = h))
              : (h = y[5]),
            y[6] !== I
              ? ((p = (e) => {
                  null != I && (e.preventDefault(), I.close())
                }),
                (y[6] = I),
                (y[7] = p))
              : (p = y[7]))
          let L = null != I
          ;(y[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((g = (0, n.jsx)(d.ms.Title, {
                children: (0, n.jsx)(l.A, {
                  id: "composer.newTask.configureLocalEnvironment",
                  defaultMessage: "Configure local environment",
                  description: "Open the new chat's worktree, branch, and local setup environment settings",
                }),
              })),
              (y[8] = g))
            : (g = y[8]),
            y[9] !== I || y[10] !== k || y[11] !== S
              ? ((f = k({ activePicker: I, setActivePicker: _, pageContainer: S })),
                (y[9] = I),
                (y[10] = k),
                (y[11] = S),
                (y[12] = f))
              : (f = y[12]),
            y[13] !== f
              ? ((x = (0, n.jsx)("div", { className: "flex min-w-0 flex-col items-stretch select-none", children: f })),
                (y[13] = f),
                (y[14] = x))
              : (x = y[14]),
            y[15] !== L || y[16] !== x
              ? ((w = (0, n.jsxs)("div", { hidden: L, children: [g, x] })), (y[15] = L), (y[16] = x), (y[17] = w))
              : (w = y[17]))
          let A = null == I
          return (
            y[18] !== A ? ((v = (0, n.jsx)("div", { ref: M, hidden: A })), (y[18] = A), (y[19] = v)) : (v = y[19]),
            y[20] !== N || y[21] !== w || y[22] !== v || y[23] !== p
              ? ((b = (0, n.jsxs)(m.hl, {
                  "aria-label": N,
                  align: "end",
                  side: "top",
                  variant: "menu",
                  size: "workspace",
                  onEscapeKeyDown: p,
                  children: [w, v],
                })),
                (y[20] = N),
                (y[21] = w),
                (y[22] = v),
                (y[23] = p),
                (y[24] = b))
              : (b = y[24]),
            y[25] !== b || y[26] !== h
              ? ((j = (0, n.jsxs)(m.AM, { onOpenChange: o, children: [h, b] })), (y[25] = b), (y[26] = h), (y[27] = j))
              : (j = y[27]),
            j
          )
        },
        i: function (e) {
          let t,
            o,
            l,
            d,
            m,
            p,
            g = (0, r.c)(28),
            { triggerButton: f, children: x, label: w, onOpenChange: v, navigation: b } = e,
            j = (0, i.A)(),
            y = (0, a.useId)()
          g[0] !== y || g[1] !== b
            ? ((t = (e) => {
                null == e && b.setActivePicker((e) => (e?.id === y ? null : e))
              }),
              (g[0] = y),
              (g[1] = b),
              (g[2] = t))
            : (t = g[2])
          let k = (0, h.K)(t)
          g[3] !== y || g[4] !== b || g[5] !== v
            ? ((o = () => {
                ;(b.setActivePicker(null), v(!1), requestAnimationFrame(() => document.getElementById(y)?.focus()))
              }),
              (g[3] = y),
              (g[4] = b),
              (g[5] = v),
              (g[6] = o))
            : (o = g[6])
          let C = o
          return (
            g[7] !== C || g[8] !== y || g[9] !== b || g[10] !== v
              ? ((l = () => {
                  ;(b.setActivePicker({ id: y, close: C }), v(!0))
                }),
                (g[7] = C),
                (g[8] = y),
                (g[9] = b),
                (g[10] = v),
                (g[11] = l))
              : (l = g[11]),
            g[12] !== y || g[13] !== l || g[14] !== f || g[15] !== k
              ? ((d = (0, a.cloneElement)(f, { id: y, ref: k, onClick: l })),
                (g[12] = y),
                (g[13] = l),
                (g[14] = f),
                (g[15] = k),
                (g[16] = d))
              : (d = g[16]),
            g[17] !== x ||
            g[18] !== C ||
            g[19] !== y ||
            g[20] !== j ||
            g[21] !== w ||
            g[22] !== b.activePicker?.id ||
            g[23] !== b.pageContainer
              ? ((m =
                  b.activePicker?.id === y && null != b.pageContainer
                    ? (0, s.createPortal)(
                        (0, n.jsxs)("div", {
                          className: "flex min-w-0 flex-col gap-1 select-none",
                          role: "group",
                          children: [
                            (0, n.jsxs)(c.$, {
                              color: "ghost",
                              size: "composerAuxiliary",
                              radius: "large",
                              onClick: C,
                              "aria-label": j.formatMessage({
                                id: "composer.newTask.backToSettings",
                                defaultMessage: "Back to chat settings",
                                description:
                                  "Return from the branch or environment picker to the new chat settings without changing the selection",
                              }),
                              children: [(0, n.jsx)(u.z_d, {}), (0, n.jsx)("span", { children: w })],
                            }),
                            x(C),
                          ],
                        }),
                        b.pageContainer,
                      )
                    : null),
                (g[17] = x),
                (g[18] = C),
                (g[19] = y),
                (g[20] = j),
                (g[21] = w),
                (g[22] = b.activePicker?.id),
                (g[23] = b.pageContainer),
                (g[24] = m))
              : (m = g[24]),
            g[25] !== d || g[26] !== m
              ? ((p = (0, n.jsxs)(n.Fragment, { children: [d, m] })), (g[25] = d), (g[26] = m), (g[27] = p))
              : (p = g[27]),
            p
          )
        },
      },
    )
  },
  UR9X(e, t, o) {
    var n = o("ABep"),
      r = o("QosV"),
      a = o("slpy"),
      s = o("GxtJ"),
      i = o("Y1st"),
      l = o("on57"),
      c = o("zTeN"),
      d = o("zd8w"),
      u = o("Wf1j"),
      m = o("oyxz"),
      h = o("ZZgR"),
      p = o("bqtn"),
      g = o("HOLv"),
      f = o("GO7r"),
      x = o("RNul"),
      w = o("DF9y"),
      v = o("xNQs"),
      b = o("Rvqv"),
      j = o("o4oB"),
      y = o("ndjw"),
      k = o("imHa"),
      C = o("hNt3"),
      I = o("bnxy"),
      _ = o("zx49"),
      S = o("ZLvZ")
    function M(e) {
      return "success" === e.type
    }
    function N(e) {
      let t,
        o = (0, r.c)(5),
        { workspaceRoot: a } = e,
        s = (0, c.Ul)(j.S)
      if ((0, c._U)(y.g, s).length > 1) {
        let e, t
        return (
          o[0] !== a ? ((e = (0, k.S)(a)), (o[0] = a), (o[1] = e)) : (e = o[1]),
          o[2] !== e
            ? ((t = (0, n.jsx)(m.A, {
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
          ? ((t = (0, n.jsx)(m.A, {
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
            c = (0, r.c)(64),
            {
              className: j,
              disabled: y,
              presentation: k,
              taskOptions: L,
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
              workspaceRoot: D,
              showDefaultOption: q,
              onResetSelection: G,
            } = e,
            z = void 0 !== y && y,
            Q = void 0 === k ? "inline" : k,
            K = void 0 === E ? "top" : E,
            $ = void 0 === O ? "start" : O,
            V = void 0 === U || U,
            Z = void 0 === q || q,
            J = (0, u.A)(),
            [X, Y] = (0, d.useState)(!1),
            [ee, et] = (0, d.useState)("")
          if (
            c[0] !== $ ||
            c[1] !== j ||
            c[2] !== z ||
            c[3] !== T ||
            c[4] !== R ||
            c[5] !== J ||
            c[6] !== P ||
            c[7] !== A ||
            c[8] !== H ||
            c[9] !== G ||
            c[10] !== W ||
            c[11] !== X ||
            c[12] !== Q ||
            c[13] !== F ||
            c[14] !== ee ||
            c[15] !== B ||
            c[16] !== Z ||
            c[17] !== V ||
            c[18] !== K ||
            c[19] !== L ||
            c[20] !== D
          ) {
            o = Symbol.for("react.early_return_sentinel")
            e: {
              let e,
                r,
                d,
                u,
                y,
                k,
                E,
                O,
                U,
                q,
                eo,
                en = T.filter(M),
                er = (0, C.vJ)(en)
              c[23] !== B ? ((e = B ? (0, I.Fd)(B) : null), (c[23] = B), (c[24] = e)) : (e = c[24])
              let ea = e
              c[25] !== ea || c[26] !== F
                ? ((r = F ? (0, I.Fd)(F) : ea), (c[25] = ea), (c[26] = F), (c[27] = r))
                : (r = c[27])
              let es = r,
                ei = T.find((e) => (0, I.Fd)(e.configPath) === es) ?? null,
                el = !P && !R,
                ec = en
              ;((P || R) && (ec = []),
                er?.type === "success" &&
                  Z &&
                  (ec = [er, ...ec.filter((e) => (0, I.Fd)(e.configPath) !== (0, I.Fd)(er.configPath))]),
                c[28] !== ee
                  ? ((d = (e) => (0, w.i)(e).toLocaleLowerCase().includes(ee.trim().toLocaleLowerCase())),
                    (c[28] = ee),
                    (c[29] = d))
                  : (d = c[29]))
              let ed = ec.filter(d),
                eu = (function ({ isLoading: e, environmentResult: t }) {
                  return e
                    ? (0, n.jsx)(m.A, {
                        id: "composer.worktreeEnvironment.loading",
                        defaultMessage: "Loading environments…",
                        description: "Loading label for worktree environment dropdown",
                      })
                    : t?.type === "error"
                      ? (0, n.jsx)(m.A, { ...v.y.needsAttention })
                      : t?.type === "success"
                        ? (0, n.jsx)(n.Fragment, { children: t.environment.name })
                        : (0, n.jsx)(m.A, {
                            id: "codex.environmentSelector.noEnvironment",
                            defaultMessage: "No environment",
                            description: "No environment selected message",
                          })
                })({ isLoading: P, environmentResult: ei })
              if (null != G && null != B && null == ei && !P) {
                let e
                ;(c[30] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, n.jsx)(m.A, {
                      id: "composer.worktreeEnvironment.unavailableSelection",
                      defaultMessage: "Selected environment unavailable",
                      description: "The saved environment is missing and will not be replaced automatically",
                    })),
                    (c[30] = e))
                  : (e = c[30]),
                  (eu = e))
              }
              let em = el && 0 === T.length
              c[31] !== J
                ? ((u = J.formatMessage({
                    id: "composer.worktreeEnvironment.tooltip",
                    defaultMessage: "Select a local environment",
                    description: "Tooltip for local environment selector",
                  })),
                  (c[31] = J),
                  (c[32] = u))
                : (u = c[32])
              let eh = u
              ;(c[33] === Symbol.for("react.memo_cache_sentinel")
                ? ((y = (0, n.jsx)(m.A, {
                    id: "composer.worktreeOptions.environment",
                    defaultMessage: "Environment",
                    description: "Label for the setup environment selector in the compact task options menu",
                  })),
                  (c[33] = y))
                : (y = c[33]),
                c[34] !== j ? ((k = (0, l.A)("whitespace-nowrap", j)), (c[34] = j), (c[35] = k)) : (k = c[35]))
              let ep = null == A ? "secondary" : "sm"
              c[36] !== V
                ? ((E = V ? (0, n.jsx)(g.I, { "aria-hidden": !1, asset: s.T }) : null), (c[36] = V), (c[37] = E))
                : (E = c[37])
              let eg = P ? "none" : "collapsible-chevron",
                ef = eu
              ;(c[38] !== A ? ((O = (0, l.A)("max-w-40", A)), (c[38] = A), (c[39] = O)) : (O = c[39]),
                c[40] !== z ||
                c[41] !== eu ||
                c[42] !== Q ||
                c[43] !== eh ||
                c[44] !== k ||
                c[45] !== ep ||
                c[46] !== E ||
                c[47] !== eg ||
                c[48] !== O
                  ? ((U = (0, n.jsx)(_.P, {
                      "aria-label": eh,
                      "data-composer-navigation-target": "environment",
                      categoryLabel: null,
                      presentation: Q,
                      disabled: z,
                      menuCategoryLabel: y,
                      className: k,
                      collapse: ep,
                      icon: E,
                      indicator: eg,
                      value: ef,
                      valueClassName: O,
                    })),
                    (c[40] = z),
                    (c[41] = eu),
                    (c[42] = Q),
                    (c[43] = eh),
                    (c[44] = k),
                    (c[45] = ep),
                    (c[46] = E),
                    (c[47] = eg),
                    (c[48] = O),
                    (c[49] = U))
                  : (U = c[49]))
              let ex = U
              if (z) {
                let e,
                  t,
                  r = "menu" === Q ? "left" : "bottom"
                ;(c[50] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, n.jsx)(m.A, {
                      id: "composer.worktreeEnvironment.enableWorktreeHint",
                      defaultMessage: "Enable worktree to choose an environment",
                      description: "Explains why the environment selector is disabled while New worktree is turned off",
                    })),
                    (c[50] = e))
                  : (e = c[50]),
                  c[51] !== r || c[52] !== ex
                    ? ((t = (0, n.jsx)(a.m, { side: r, content: e, children: ex })),
                      (c[51] = r),
                      (c[52] = ex),
                      (c[53] = t))
                    : (t = c[53]),
                  (o = t))
                break e
              }
              let ew = "menu" === Q ? h.G.Item : p.ms.Item,
                ev = null
              if (P) {
                let e
                ;(c[54] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, n.jsx)(x.y, { className: "icon-xxs" })), (c[54] = e))
                  : (e = c[54]),
                  (ev = (0, n.jsx)("div", { className: "flex items-center justify-center py-4", children: e })))
              } else if (R) {
                let e
                ;(c[55] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, n.jsx)(m.A, {
                      id: "composer.worktreeEnvironment.error",
                      defaultMessage: "Error loading environments",
                      description: "Error state for worktree environment dropdown",
                    })),
                    (c[55] = e))
                  : (e = c[55]),
                  (ev = (0, n.jsx)(p.ms.Message, { compact: !0, tone: "error", children: e })))
              } else if (T.length > 0 && 0 === en.length) {
                let e
                ;(c[56] === Symbol.for("react.memo_cache_sentinel")
                  ? ((e = (0, n.jsx)(m.A, { ...v.y.needsAttention })), (c[56] = e))
                  : (e = c[56]),
                  (ev = (0, n.jsx)(p.ms.Message, { compact: !0, tone: "error", children: e })))
              }
              let eb = (e) => {
                let t = (0, n.jsxs)(n.Fragment, {
                    children: [
                      null != G
                        ? (0, n.jsx)(ew, {
                            onSelect: () => {
                              ;(G(), e())
                            },
                            children: (0, n.jsx)(m.A, {
                              id: "composer.worktreeEnvironment.reset",
                              defaultMessage: "Reset environment",
                              description:
                                "Clear the saved environment choice and work without an environment until one is selected",
                            }),
                          })
                        : null,
                      el
                        ? (0, n.jsx)(ew, {
                            RightIcon: null == B && null == F ? f.yIE : void 0,
                            onSelect: () => {
                              ;(W(null), e())
                            },
                            children: (0, n.jsx)(m.A, {
                              id: "composer.worktreeEnvironment.noEnvironmentOption",
                              defaultMessage: "Work without environment",
                              description:
                                "Option in the worktree environment dropdown that runs without selecting a local environment",
                            }),
                          })
                        : null,
                      ed.map((t) =>
                        (0, n.jsx)(
                          ew,
                          {
                            RightIcon: null != ea && (0, I.Fd)(t.configPath) === ea ? f.yIE : void 0,
                            onSelect: () => {
                              ;(W(t.configPath), e())
                            },
                            children:
                              Z && t === er
                                ? (0, n.jsxs)("div", {
                                    className: "flex min-w-0 items-center gap-2",
                                    children: [
                                      (0, n.jsx)(a.m, {
                                        side: "menu" === Q ? "left" : void 0,
                                        content: (0, n.jsx)(m.A, {
                                          id: "composer.worktreeEnvironment.default",
                                          defaultMessage: "Default environment",
                                          description: "Tooltip for default local environment icon",
                                        }),
                                        children: (0, n.jsx)(g.I, {
                                          className: "shrink-0 text-codex-description",
                                          "aria-hidden": !1,
                                          asset: i.S,
                                        }),
                                      }),
                                      (0, n.jsx)("span", { className: "truncate", children: (0, w.i)(t) }),
                                    ],
                                  })
                                : (0, n.jsx)("span", { className: "min-w-0 truncate", children: (0, w.i)(t) }),
                          },
                          t.configPath,
                        ),
                      ),
                    ],
                  }),
                  o = (0, n.jsx)(ew, {
                    LeftIcon: f.GRR,
                    onSelect: () => {
                      ;(H(F ?? void 0), e())
                    },
                    children: em
                      ? (0, n.jsx)(m.A, {
                          id: "composer.worktreeEnvironment.setUpProject",
                          defaultMessage: "Set up project",
                          description:
                            "Action to configure reusable setup for a project without a worktree environment",
                        })
                      : (0, n.jsx)(m.A, {
                          id: "composer.worktreeEnvironment.settings",
                          defaultMessage: "Environment settings",
                          description: "CTA to open local environment settings from the worktree dropdown",
                        }),
                  })
                return "menu" === Q && null != L
                  ? (0, n.jsx)(b.G, {
                      emptyMessage: (0, n.jsx)(m.A, {
                        id: "composer.worktreeEnvironment.noResults",
                        defaultMessage: "No environments found",
                        description:
                          "Shown when no local setup environment matches the search in the new-task environment picker",
                      }),
                      footerItems: o,
                      hasProjectItems: ed.length > 0,
                      projectItems: t,
                      searchLabel: J.formatMessage({
                        id: "composer.worktreeEnvironment.search",
                        defaultMessage: "Search environments…",
                        description: "Search the local setup environments available for the new task",
                      }),
                      searchQuery: ee,
                      status: ev,
                      onSearchQueryChange: et,
                    })
                  : (0, n.jsxs)("div", {
                      className: (0, l.A)("flex flex-col overflow-hidden", "menu" === Q ? "w-full" : "w-64"),
                      children: [
                        "inline" === Q
                          ? (0, n.jsx)(p.ms.Title, {
                              children:
                                null == D
                                  ? (0, n.jsx)(m.A, {
                                      id: "composer.worktreeEnvironment.title",
                                      defaultMessage: "Environment",
                                      description: "Title for worktree environment dropdown",
                                    })
                                  : (0, n.jsx)(N, { workspaceRoot: D }),
                            })
                          : null,
                        (0, n.jsxs)("div", {
                          className: "vertical-scroll-fade-mask max-h-[220px] overflow-y-auto",
                          children: [t, ev, o],
                        }),
                      ],
                    })
              }
              if ("menu" === Q && null != L) {
                let e, t
                ;(c[57] !== J
                  ? ((e = J.formatMessage({
                      id: "composer.worktreeOptions.environment",
                      defaultMessage: "Environment",
                      description: "Label for the setup environment selector in the task options menu",
                    })),
                    (c[57] = J),
                    (c[58] = e))
                  : (e = c[58]),
                  c[59] === Symbol.for("react.memo_cache_sentinel")
                    ? ((t = (e) => {
                        ;(Y(e), e || et(""))
                      }),
                      (c[59] = t))
                    : (t = c[59]),
                  (o = (0, n.jsx)(S.i, { navigation: L, triggerButton: ex, label: e, onOpenChange: t, children: eb })))
                break e
              }
              ;(c[60] !== em || c[61] !== ex
                ? ((q = em
                    ? (0, n.jsx)(a.m, {
                        content: (0, n.jsx)(m.A, {
                          id: "composer.worktreeEnvironment.projectSetupDescription",
                          defaultMessage: "Give Codex access to your project’s full dependencies and setup",
                          description:
                            "Explains that project setup gives Codex access to project dependencies and setup",
                        }),
                        children: ex,
                      })
                    : ex),
                  (c[60] = em),
                  (c[61] = ex),
                  (c[62] = q))
                : (q = c[62]),
                c[63] === Symbol.for("react.memo_cache_sentinel") ? ((eo = () => Y(!1)), (c[63] = eo)) : (eo = c[63]),
                (t = (0, n.jsx)(p.Ab, {
                  open: X,
                  onOpenChange: Y,
                  side: K,
                  align: $,
                  triggerButton: q,
                  children: eb(eo),
                })))
            }
            ;((c[0] = $),
              (c[1] = j),
              (c[2] = z),
              (c[3] = T),
              (c[4] = R),
              (c[5] = J),
              (c[6] = P),
              (c[7] = A),
              (c[8] = H),
              (c[9] = G),
              (c[10] = W),
              (c[11] = X),
              (c[12] = Q),
              (c[13] = F),
              (c[14] = ee),
              (c[15] = B),
              (c[16] = Z),
              (c[17] = V),
              (c[18] = K),
              (c[19] = L),
              (c[20] = D),
              (c[21] = t),
              (c[22] = o))
          } else ((t = c[21]), (o = c[22]))
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
            p = void 0 === c ? "bg-text-info" : c,
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
            s,
            i = (0, r.c)(7),
            { className: l, color: c } = e,
            d = void 0 === l ? "bg-current" : l
          return (
            i[0] !== d ? ((t = (0, a.A)("block size-2 shrink-0 rounded-full", d)), (i[0] = d), (i[1] = t)) : (t = i[1]),
            i[2] !== c ? ((o = { backgroundColor: c }), (i[2] = c), (i[3] = o)) : (o = i[3]),
            i[4] !== t || i[5] !== o
              ? ((s = (0, n.jsx)("span", { "aria-hidden": !0, className: t, style: o })),
                (i[4] = t),
                (i[5] = o),
                (i[6] = s))
              : (s = i[6]),
            s
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
  P2xa(e, t, o) {
    var n = o("ASxG"),
      r = o("SPnB")
    let a = n.object({
        pathname: n.string().refine(i),
        search: n.string(),
        hash: n.string(),
        accountId: n.string(),
        userId: n.string(),
      }),
      s = n.object({ cloudEnvironmentCreateOrigin: a })
    function i(e) {
      return (
        e.startsWith("/") &&
        !e.startsWith("//") &&
        !e.includes("\\") &&
        !["/login", "/welcome", "/select-workspace", "/cloud-environments/new"].includes(e) &&
        !e.startsWith("/auth/")
      )
    }
    o.d(
      t,
      {},
      {
        e: function (e, t) {
          let o = e.get(r.chatGptAuthenticatedAccountId$),
            n = e.get(r.chatGptAuthenticatedUserId$)
          if (null != o && null != n && i(t.pathname))
            return {
              cloudEnvironmentCreateOrigin: {
                pathname: t.pathname,
                search: t.search,
                hash: t.hash,
                accountId: o,
                userId: n,
              },
            }
        },
        r: s,
      },
    )
  },
  T9N0(e, t, o) {
    var n = o("Bbed"),
      r = o("X6Vn"),
      a = o("nlNF"),
      s = o("OMIV"),
      i = o("P2xa")
    let l = (0, n._)(() =>
      Promise.all([o.e(889222), o.e(321808)])
        .then(o.bind(o, "gf5p"))
        .then((e) => e.CloudEnvironmentCreateDialog),
    )
    o.d(
      t,
      {},
      {
        h: function (e, t, o = {}) {
          if (!e.get(s.JW, "3620782482")) return void (0, r.qf)(e, l, o)
          let n = e.get(a.x2)
          ;(o.onStartSetup?.(), t("/cloud-environments/new", { state: null == n ? void 0 : (0, i.e)(e, n) }))
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
            b = (0, n.c)(31),
            { cwd: j, hostConfig: y, onErrorMessage: k, showErrorToast: C } = e,
            I = void 0 !== C && C,
            _ = (0, s.gh)(u.u),
            S = (0, r.jE)(),
            M = (0, l.A)()
          b[0] !== y ? ((t = (0, d.W)(y)), (b[0] = y), (b[1] = t)) : (t = b[1])
          let N = t,
            L = j ?? ""
          ;(b[2] !== N || b[3] !== L
            ? ((o = ["git", "init-repo", N, L]), (b[2] = N), (b[3] = L), (b[4] = o))
            : (o = b[4]),
            b[5] !== j || b[6] !== y
              ? ((p = async () => {
                  if (null == j) throw Error("Missing git context")
                  await (0, h.V)("git").request({
                    method: "git-init-repo",
                    params: { cwd: (0, i.DIv)(j), hostConfig: y, operationSource: "review_model" },
                  })
                }),
                (b[5] = j),
                (b[6] = y),
                (b[7] = p))
              : (p = b[7]),
            b[8] !== j || b[9] !== N || b[10] !== M || b[11] !== S || b[12] !== _
              ? ((g = async () => {
                  _.get(c.Id).success(
                    M.formatMessage({
                      id: "codex.review.noDiff.gitInit.success",
                      defaultMessage: "Git repository created",
                      description: "Toast shown after creating a git repository from the diff empty state",
                    }),
                  )
                  let e = [S.invalidateQueries({ queryKey: (0, m.IF)("git-origins") })]
                  ;(null != j && e.push(S.invalidateQueries({ queryKey: ["git", "metadata", N, j] })),
                    await Promise.all(e))
                }),
                (b[8] = j),
                (b[9] = N),
                (b[10] = M),
                (b[11] = S),
                (b[12] = _),
                (b[13] = g))
              : (g = b[13]),
            b[14] !== M || b[15] !== k || b[16] !== _ || b[17] !== I
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
                    k?.(t))
                }),
                (b[14] = M),
                (b[15] = k),
                (b[16] = _),
                (b[17] = I),
                (b[18] = f))
              : (f = b[18]),
            b[19] !== o || b[20] !== p || b[21] !== g || b[22] !== f
              ? ((x = { mutationKey: o, mutationFn: p, onSuccess: g, onError: f }),
                (b[19] = o),
                (b[20] = p),
                (b[21] = g),
                (b[22] = f),
                (b[23] = x))
              : (x = b[23]))
          let A = (0, a.n)(x)
          b[24] !== j || b[25] !== A
            ? ((w = async () => {
                if (null != j && !A.isPending)
                  try {
                    await A.mutateAsync()
                  } catch {
                    return
                  }
              }),
              (b[24] = j),
              (b[25] = A),
              (b[26] = w))
            : (w = b[26])
          let T = w,
            P = null != j
          return (
            b[27] !== T || b[28] !== A.isPending || b[29] !== P
              ? ((v = { canCreateGitRepository: P, createGitRepository: T, isCreatingGitRepository: A.isPending }),
                (b[27] = T),
                (b[28] = A.isPending),
                (b[29] = P),
                (b[30] = v))
              : (v = b[30]),
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
      a = o("GlUR"),
      s = o("kOpj"),
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
    let b = "icon-xs shrink-0 opacity-75 group-focus:opacity-100 group-hover:opacity-100",
      j = "https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan#h_8dd84c836b"
    function y(e) {
      ;(0, m.PQ)({ event: e, href: j, initiator: "open_in_browser_bridge" })
    }
    function k(e) {
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
            ? ((s = x && (0, n.jsx)(C, { bucket: m.primary ?? null, compact: p })),
              (u[7] = p),
              (u[8] = m),
              (u[9] = x),
              (u[10] = s))
            : (s = u[10]),
          u[11] !== p || u[12] !== m || u[13] !== v
            ? ((c = v && (0, n.jsx)(C, { bucket: m.secondary ?? null, compact: p })),
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
    function C(e) {
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
      let j = t
      return (
        p[10] !== j ? ((s = (0, n.jsx)(h.g, { className: b, href: j })), (p[10] = j), (p[11] = s)) : (s = p[11]),
        p[12] !== v || p[13] !== j
          ? ((i = (e) => {
              null != v ? v(e, j) : (0, m.PQ)({ event: e, href: j, initiator: "open_in_browser_bridge" })
            }),
            (p[12] = v),
            (p[13] = j),
            (p[14] = i))
          : (i = p[14]),
        p[15] !== x || p[16] !== j || p[17] !== s || p[18] !== i || p[19] !== a
          ? ((d = (0, n.jsx)(u.ms.Item, { rightIcon: s, className: x, href: j, onClick: i, children: a })),
            (p[15] = x),
            (p[16] = j),
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
              activeLimitName: C,
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
            w[0] !== C ||
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
              g = (0, x.cd)(v, { activeLimitName: C, selectedModel: M })
            w[16] !== C || w[17] !== S ? ((e = S ?? !(0, x.YJ)(C)), (w[16] = C), (w[17] = S), (w[18] = e)) : (e = w[18])
            let N = e,
              P = "compact" === F
            if (w[19] !== P || w[20] !== v) {
              let e
              ;(w[22] !== P
                ? ((e = (e, t) => {
                    let o = (0, x.YJ)(e.limitName) ? null : e.limitName
                    return (0, n.jsx)(
                      k,
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
                  leftIconAsset: s.F,
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
                            href: j,
                            className: (0, i.A)(b, P && "text-codex-description"),
                          }),
                          className: (0, i.A)(P && "ps-[calc(var(--padding-row-x)+1.25rem)] pe-[var(--padding-row-x)]"),
                          href: j,
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
              (w[0] = C),
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
  smUZ(e, t, o) {
    var n = o("WLgA"),
      r = o("gBBC"),
      a = o("gLQa"),
      s = o("a8ri"),
      i = o("WVuR"),
      l = o("ndjw")
    o.d(
      t,
      {},
      {
        c: function (e, t) {
          e("/", { state: { project: (0, r.av)(t) } })
        },
        n: function (e, t, o, r) {
          let c = new URLSearchParams(o.search)
          if (!(e.get(s.l) && null != (0, n.vl)(o.pathname)) && !("/projects" === o.pathname && c.has("projectId")))
            return
          ;(c.delete("projectId"), c.delete("hostId"))
          let d = r?.projectKind === "local" ? (0, a._z)(r.projectId, e.get(l.Gv), e.get(i.d)) : void 0
          t(
            { pathname: null == d ? "/" : (0, n.bv)(d), search: c.toString(), hash: o.hash },
            { replace: !0, state: o.state },
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
      l = o("DKJJ"),
      c = o("ustl"),
      d = o("ILnd"),
      u = o("B81s"),
      m = o("i6yo")
    let h = {
        create: ["get_project"],
        submit: ["get_project", "create_merge_request"],
        detail: ["get_project", "get_merge_request"],
        status: ["get_project", "list_merge_requests"],
      },
      p = n.object({
        _codex_apps: n.object({ resource_uri: n.string(), synthetic_link: n.boolean().nullish() }),
        link_id: n.string().optional(),
      })
    function g(e, t) {
      let o = p.safeParse(e?._meta),
        n = (0, c.ob)(e)
      if (!o.success || !0 === o.data._codex_apps.synthetic_link || n?.kind !== "target") return null
      let r = o.data._codex_apps.resource_uri
      return r !== `/${s.M}/${n.targetId}/${t}` || (null != o.data.link_id && o.data.link_id !== n.targetId)
        ? null
        : { accountLinkId: n.targetId, resourceUri: r }
    }
    o.d(
      t,
      {},
      {
        O4: function (e, t) {
          let o = h[t],
            n = e.find(({ name: e }) => (0, r.fI)(e)),
            a = o.map((e) => g(n?.tools[`gitlab.${e}`], e)),
            i = a[0]?.accountLinkId
          return null != i && a.every((e) => e?.accountLinkId === i)
            ? { connectorId: s.M, accountLinkId: i, mcpServerName: "codex_apps" }
            : null
        },
        hF: async function (e, t, o, n, r, a) {
          if (!(0, m.$)(e)) throw Error("Native GitLab merge requests are unavailable")
          let s = e.get(u.lt, t).data?.data ?? [],
            i = s.find(({ name: e }) => e === o.mcpServerName)?.tools,
            c = g(i?.[`gitlab.${n}`], n)
          if (null == c || c.accountLinkId !== o.accountLinkId)
            throw Error("The selected GitLab account no longer provides this action")
          let h = (0, l.Jb)({
            isCodexAppsServer: !0,
            toolResult: await (0, d.W1)(e, t, o.mcpServerName, `gitlab.${n}`, r, {
              threadId: a,
              hostToolCallMetadata: { _codex_apps: { resource_uri: c.resourceUri } },
            }),
          })
          if (
            !0 === h.isError ||
            null == h.structuredContent ||
            (0, l.Cb)({ isCodexAppsServer: !0, result: { type: "success", structuredContent: h.structuredContent } })
          )
            throw Error("The selected GitLab connector request failed")
          if ("create_merge_request" === n) return h.structuredContent
          let p = g(e.get(u.lt, t).data?.data.find(({ name: e }) => e === o.mcpServerName)?.tools[`gitlab.${n}`], n)
          if (!(0, m.$)(e) || p?.resourceUri !== c.resourceUri)
            throw Error("The selected GitLab account changed during the request")
          return h.structuredContent
        },
        qd: async function (e, t) {
          let o = await e.queryClient.fetchQuery((0, a.rJ)(t.connectorId))
          if (o.id !== s.M || "DISABLED_BY_ADMIN" === o.status || null == o.base_url)
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
      h = o("mTAQ"),
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
          source: b,
          isFallback: j,
          unavailableReason: y,
        } = t(p.v$, { ...e, operation: "status" }),
        k =
          "github-cli" === b || "github-connector" === b
            ? t(l.currentGitHubUserQuery$, {
                hostId: r,
                hostname: f?.host ?? "github.com",
                provider: b,
                connection: d ?? g,
                source: e.operationSource,
              })
            : null,
        C = k?.data?.status === "success" ? k.data.account : null,
        I = { cwd: (0, a.DIv)(e.cwd ?? "/"), headBranch: e.headBranch, hostId: r }
      return {
        enabled:
          null != e.cwd &&
          e.headBranch.length > 0 &&
          "loading" !== b &&
          (null != C || "unavailable" === b || k?.isError === !0),
        meta: { hostId: r },
        queryKey: [...(0, m.IF)("gh-pr-for-branch", I), f, x, b, w, v, d, g, null == C ? null : (0, i.rE)(C)],
        queryFn: async ({ signal: t }) => {
          let a = { provider: b, operation: "status", operationSource: e.operationSource, isFallback: !0 === j }
          try {
            if (null == C) throw k?.error ?? Error("Pull request discovery source unavailable")
            if ("github-cli" === b) {
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
                      "unavailable" === b
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
    o.d(t, { w: () => C })
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
                  baseBranch: null,
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
        b = !!l?.data?.trim() && (null == v || !(0, w.d)(v))
      if (null == n && i && !b) {
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
    var b = o("BZ3V"),
      j = o("jhQp"),
      y = o("fAUH"),
      k = o("PlM6")
    let C = (0, n.i1)(l.u, (e, { get: t }) => {
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
        u = null == l && null != e.headBranch ? t(b.c, { ...e, headBranch: e.headBranch }) : null,
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
        C = null == w ? null : t(j.f, w),
        I = null != w && !1 !== e.includeDetails && "sidebar_task_pr_chip" !== e.operationSource ? t(k.o, w) : null,
        _ = C ?? (u?.data != null ? f : u) ?? f,
        S =
          null != C
            ? (C.error ?? I?.error ?? null)
            : (u?.error ?? f?.error ?? ("unavailable" === p ? Error("Pull request status source unavailable") : null)),
        M = null == S && (C?.isPending ?? ("loading" === p || u?.isPending === !0 || (null != m && null == x))),
        N = null == C && u?.isSuccess === !0 && null == m
      if (C?.data != null) {
        let e = C.data
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
        dataUpdatedAt: C?.dataUpdatedAt ?? 0,
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
          let c = t.connectorId === n.M && "gitlab.com" === t.hostname,
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
            b = () =>
              e.get(c.DW) && e.get(a.PO).authenticatedAccountId === v && e.get(d.QV).some(({ id: e }) => e === t)
          if (!b()) return
          let j = null == f ? null : (0, l.Iz)(o),
            y =
              null != j &&
              e.get(i.n) &&
              (x ?? (0, g.M0)(e.get, (0, n.JXB)(j))) !== n.iwv &&
              e.query.snapshot(s.yQ).getData()?.serverOrderedThreadIds?.includes(j) === !0,
            k = () => {
              if (b())
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
            ? k()
            : (async function (e) {
                let t = await e
                return (t && (await k()), t)
              })(f())
        },
      },
    )
  },
  ZgUq(e, t, o) {
    o.d(t, { oI: () => Q, a: () => K, zS: () => z })
    var n = o("V7mA"),
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
      b = o("SIT2"),
      j = o("XsHM"),
      y = o("V3rO"),
      k = o("kfGJ"),
      C = o("SjgE"),
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
      let m = $({ sourceGroup: c, targetGroup: d })
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
            Y(t, {
              membershipSave: q({ threadId: et, assignment: null, projectless: !1 }),
              sidebarSave: () => X(t, et, eo),
            })
          )
        if ("chats" === en) {
          if (
            (null == eu ? [] : V(eu)).length > 0 &&
            ("local" !== el.kind || eu?.projectKind !== "local" || el.summary.hostId !== k.fI)
          )
            return !1
          let e = "local" === el.kind ? (0, R.rU)(t, el.summary.conversationId, J(t, el.summary, eu)) : null
          return Y(t, {
            membershipSave: q({
              threadId: et,
              assignment: null == e ? null : (0, n.TQ)(e.state),
              projectless: !0,
              hostId: "local" === el.kind ? el.summary.hostId : void 0,
            }),
            sidebarSave: () => X(t, et, eo),
            move:
              null == e || "local" !== el.kind
                ? void 0
                : { conversationId: el.summary.conversationId, workspaceMove: e },
          })
        }
        let em = en.slice(8)
        if ("chatgpt" === es) {
          if ("local" !== el.kind || el.summary.hostId !== k.fI) return !1
          let c = t.get(R.ty, et),
            u = null == c ? (0, s.DZs)((0, m.F6)(t.get, s.Q2Y.THREAD_PROJECT_ASSIGNMENTS))[et] : (0, n.TQ)(c)
          if (u?.projectKind === "local" && u.projectId === em && "chatgpt" === u.projectOrigin)
            return Y(t, { sidebarSave: () => X(t, et, eo, em) })
          let h = ec ?? new Map()
          G.set(t, h)
          let g = { confirmation: new AbortController() }
          h.set(et, g)
          let f = l?.projectId === em ? l : (0, C.p)(t, em, I),
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
              b = { ...o, targetContainerId: `project:${n.projectId}`, targetProjectOrigin: void 0 },
              j = Q(t, b, { allProjectGroups: v, allSidebarItems: a })
            if (
              (null != j &&
                !0 !== i &&
                !(await (0, C.l)(
                  t,
                  j,
                  null == I ? g.confirmation.signal : AbortSignal.any([I, g.confirmation.signal]),
                ))) ||
              I?.aborted ||
              h.get(et) !== g
            )
              return !1
            return await e(t, b, {
              allProjectGroups: v,
              allSidebarItems: a,
              addMissingProjectSources: null != j || i,
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
          ef = $({ sourceGroup: eu, targetGroup: ep })
        if (null != ef) {
          if ("local" !== ep.projectKind || ep.projectKind !== eg || ("local" === el.kind && !Z(el, ep)) || !0 !== i)
            return !1
          let e = (0, m.F6)(t.get, s.Q2Y.LOCAL_PROJECTS),
            o = e?.[ep.projectId]
          if (null == o) return !1
          let n = (0, f.w)([...o.rootPaths, ...ef.missingProjectSources])
          try {
            if (!(await (0, b.y)().editLocal({ name: "", projectId: ep.projectId, sources: n }))) return !1
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
          eb = () => {
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
          ej =
            null == ev
              ? void 0
              : async () => {
                  D = ex ? (0, v.Lo)(t, ep.projectId, et) : void 0
                  let e = await (0, H.ub)(t, ev)
                  return () => {
                    ;(D?.undo(), e())
                  }
                }
        if (ep.threadKeys.includes(el.key) && null == w) return Y(t, { sidebarSave: eb, onPlacementError: S })
        if ("remote" === el.kind) {
          if ("remote" !== ep.projectKind) return !1
          let e = await ej?.()
          return I?.aborted
            ? (e?.(), !1)
            : Y(t, {
                membershipSave: q({
                  threadId: et,
                  assignment: { projectKind: "remote", projectId: ep.projectId, hostId: ep.hostId },
                  projectless: !1,
                }),
                rollbackSidebarPreview: e,
                sidebarSave: eb,
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
            let e = (0, j.l_)(ep),
              o = e[0],
              r = e
            if (null == o) {
              let t = await (0, g.OR)({ project: { rootPaths: e }, prompt: el.summary.title })
              ;((o = t.cwd), (r = t.workspaceRoots))
            }
            let a =
                void 0 === w
                  ? await (async function (e, t, o, n, r) {
                      let a = "local" === o.projectKind ? (0, j.l_)(o) : [],
                        i = (0, s.ycq)(a)
                      if (null == i) return null
                      let l = (0, s.DIv)(i),
                        c = e.get(R.A3, t) ?? n ?? null,
                        d = e.get(T.mO) ?? (0, k.vR)(k.fI, null)
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
        let ek = await ej?.()
        return I?.aborted
          ? (ek?.(), (0, R.xT)(t, el.summary.conversationId, K), !1)
          : Y(t, {
              membershipSave: q({ threadId: et, assignment: z, projectless: !1 }),
              rollbackSidebarPreview: ek,
              sidebarSave: eb,
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
    function $({ sourceGroup: e, targetGroup: t }) {
      if (null == e) return null
      let o = "local" === e.projectKind ? k.fI : e.hostId,
        n = "local" === t.projectKind ? k.fI : t.hostId,
        r = e.projectKind === t.projectKind && o === n
      if (r && e.projectId === t.projectId) return null
      let a = r ? V(t).map((e) => (0, N.JH)(e).replace(/\/+$/, "")) : [],
        s = V(e).filter((e) => {
          let t = (0, N.JH)(e).replace(/\/+$/, "")
          return !a.some((e) => t === e || t.startsWith(`${e}/`))
        })
      return 0 === s.length ? null : { missingProjectSources: s, targetProjectName: t.label }
    }
    function V(e) {
      switch (e.projectKind) {
        case "local":
          return (0, j.l_)(e)
        case "remote":
          return [e.path]
      }
    }
    function Z(e, t) {
      let o = "remote" === t.projectKind ? t.hostId : k.fI,
        n = e.summary.hostId
      return null != o && o === n
    }
    function J(e, t, o) {
      let r,
        i = e.get(l.ok, { hostId: t.hostId, threadId: t.conversationId }),
        c = t.cwd
      if (o?.projectKind === "local") {
        let e = 1 === (r = (0, j.l_)(o)).length ? r[0] : void 0
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
    function X(e, t, o, n) {
      return Promise.all([
        null == n ? void 0 : (0, v.JT)(e, n, t),
        null != n && "manual" === e.get(M.by).projectSortMode
          ? (0, H.fz)(e, { projectId: n, tasks: [], threadId: t, beforeThreadId: null })
          : (0, H.c7)(e, t),
        "pinned" === o ? (0, B.L)(e, t, !1) : Promise.resolve(),
      ]).then(() => void 0)
    }
    async function Y(
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
      i = o("ygO2"),
      l = o("JNtf"),
      c = o("mUDD"),
      d = o("GO7r"),
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
            b,
            j,
            y = (0, r.c)(33),
            { missingProjectSources: k, onClose: C, onCancel: I, onContinue: _, projectName: S } = e
          y[0] !== I || y[1] !== C
            ? ((t = () => {
                ;(I?.(), C())
              }),
              (y[0] = I),
              (y[1] = C),
              (y[2] = t))
            : (t = y[2])
          let M = t
          y[3] !== C || y[4] !== _
            ? ((o = (e) => {
                ;(e.preventDefault(), C(), _())
              }),
              (y[3] = C),
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
            y[10] !== k ? ((u = k.map(m)), (y[10] = k), (y[11] = u)) : (u = y[11]),
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
              ? ((b = (0, n.jsxs)(c.R4, { as: "form", onSubmit: N, children: [g, v] })),
                (y[26] = N),
                (y[27] = v),
                (y[28] = g),
                (y[29] = b))
              : (b = y[29]),
            y[30] !== M || y[31] !== b
              ? ((j = (0, n.jsx)(l.lG, { open: !0, onOpenChange: M, size: "compact", children: b })),
                (y[30] = M),
                (y[31] = b),
                (y[32] = j))
              : (j = y[32]),
            j
          )
        },
      },
    )
  },
  llkK(e, t, o) {
    let n = (0, o("nkTT").a)({
      name: "codex-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 0.641602, y: 0.640625, width: 14.716309, height: 14.716797 },
        visualBounds: { x: 0.641602, y: 0.640625, width: 14.716309, height: 14.716797 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 0.641602, y: 0.640625, width: 14.716309, height: 14.716797 },
        center: { x: 7.999757, y: 7.999024 },
        insets: { top: 0.640625, right: 0.642089, bottom: 0.642578, left: 0.641602 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 7.999757, y: 7.999024 }, foreground: { x: 7.999757, y: 7.999024 } },
      },
      capabilities: ["icon"],
      body: '<path d="M10.9554 9.31991C11.2453 9.31991 11.4808 9.55536 11.4808 9.84531C11.4808 10.1353 11.2453 10.3707 10.9554 10.3707H8.73956C8.44962 10.3707 8.21417 10.1353 8.21417 9.84531C8.21417 9.55536 8.44962 9.31991 8.73956 9.31991H10.9554Z" fill="currentColor"/> <path d="M5.14484 5.6998C5.39336 5.55074 5.7163 5.63111 5.86554 5.87949L6.87042 7.55527C7.0333 7.82699 7.03337 8.16639 6.87042 8.43808L5.86554 10.1139C5.7164 10.3623 5.39338 10.4424 5.14484 10.2935C4.89664 10.1443 4.81628 9.82227 4.96515 9.57382L5.91046 7.99667L4.96515 6.4205C4.81603 6.17197 4.89643 5.84905 5.14484 5.6998Z" fill="currentColor"/> <path d="M6.06378 0.774993C7.40975 0.414384 8.60156 0.804206 9.51789 1.64999C10.7843 1.38594 12.3056 1.72772 13.2884 2.71054C14.2628 3.68515 14.6132 5.04469 14.347 6.29745C15.2044 7.24928 15.5805 8.60258 15.2239 9.93417C14.8669 11.266 13.8636 12.2497 12.6448 12.6451C12.2492 13.8632 11.2664 14.8664 9.93488 15.2232C8.6034 15.5797 7.24984 15.2037 6.29816 14.3463C5.04554 14.6123 3.68575 14.2621 2.71124 13.2877C1.73657 12.313 1.38422 10.952 1.6507 9.69882C0.794318 8.74694 0.419332 7.39376 0.775698 6.06308C1.13238 4.73217 2.13401 3.74724 3.35187 3.35116C3.74771 2.13325 4.73292 1.13189 6.06378 0.774993ZM8.97882 2.59042C8.26406 1.83448 7.37093 1.51164 6.33625 1.78866C5.28371 2.07089 4.52386 2.90423 4.28742 3.89706L4.21222 4.21152L3.89874 4.28671C2.90601 4.52312 2.07261 5.28194 1.79035 6.33456C1.50844 7.38739 1.84951 8.46254 2.59113 9.16366L2.82648 9.38534L2.73371 9.69491C2.44223 10.6728 2.68305 11.7738 3.45343 12.5445C4.22406 13.3152 5.32572 13.556 6.30402 13.2643L6.61359 13.1715L6.83527 13.4068C7.53647 14.1488 8.61067 14.4904 9.66339 14.2086C10.7159 13.9265 11.4747 13.0934 11.7112 12.1002L11.7855 11.7857L12.0999 11.7105C13.0933 11.4743 13.927 10.7155 14.2093 9.66269C14.4913 8.60983 14.1495 7.53587 13.4075 6.83456L13.1722 6.61288L13.265 6.30331C13.5569 5.32495 13.3159 4.2235 12.5452 3.45273C11.7836 2.69141 10.5018 2.4369 9.51007 2.733L9.2005 2.82577L8.97882 2.59042Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    o.d(t, {}, { B: n })
  },
  jzG5(e, t, o) {
    let n = (0, o("nkTT").a)({
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
      body: '<path d="M10.666 9.6416C10.956 9.6416 11.1914 9.87704 11.1914 10.167C11.1913 10.4568 10.9559 10.6924 10.666 10.6924H5.33301C5.04325 10.6923 4.80775 10.4567 4.80762 10.167C4.80762 9.87712 5.04317 9.64173 5.33301 9.6416H10.666Z" fill="currentColor"/> <path d="M12.1338 2.47461C13.4543 2.47486 14.5251 3.54569 14.5254 4.86621V11.1338C14.5251 12.4543 13.4543 13.5251 12.1338 13.5254H3.86621C2.54569 13.5251 1.47486 12.4543 1.47461 11.1338V4.86621C1.47486 3.54569 2.54569 2.47486 3.86621 2.47461H12.1338ZM3.86621 3.52539C3.12559 3.52564 2.52564 4.12559 2.52539 4.86621V11.1338C2.52564 11.8744 3.12559 12.4744 3.86621 12.4746H12.1338C12.8744 12.4744 13.4744 11.8744 13.4746 11.1338V4.86621C13.4744 4.12559 12.8744 3.52564 12.1338 3.52539H3.86621Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
    })
    o.d(t, {}, { x: n })
  },
}
//# sourceMappingURL=209174.9065478a15.js.map
