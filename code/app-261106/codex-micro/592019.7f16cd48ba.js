export const __rspack_esm_ids = [592019]
export const __webpack_modules__ = {
  JIuM(e, t, n) {
    var r = n("QosV"),
      l = n("zHp1"),
      i = n("HFSu")
    let o = ["/backend-api/estuary/content", "/backend-api/estuary/public_content/enc"],
      a = {
        cacheKey: ["profile-picture"],
        resolveAsset: (e) => Promise.resolve({ kind: "available", downloadUrl: e, requestHeaders: { ...(0, i.Jc)() } }),
      }
    function c(e, t) {
      let n,
        i,
        o = (0, r.c)(7),
        { allowExternalUrls: c } = void 0 === t ? {} : t
      o[0] !== e ? ((n = s(e) ? e : ""), (o[0] = e), (o[1] = n)) : (n = o[1])
      let u = n,
        { dataUrl: d, isError: m, src: p } = (0, l.vM)(u, a)
      if (u) {
        let e,
          t = d ?? p
        return (
          o[2] !== m || o[3] !== t ? ((e = { isError: m, src: t }), (o[2] = m), (o[3] = t), (o[4] = e)) : (e = o[4]),
          e
        )
      }
      let g = void 0 === c || c ? (e ?? null) : null
      return (o[5] !== g ? ((i = { isError: !1, src: g }), (o[5] = g), (o[6] = i)) : (i = o[6]), i)
    }
    function s(e) {
      if (!e) return !1
      try {
        let t = new URL(e),
          n = t.host.toLowerCase(),
          r = "chatgpt.com" === n || (n.endsWith(".chatgpt.com") && !n.startsWith("ab."))
        return "https:" === t.protocol && r && o.some((e) => t.pathname === e || t.pathname.startsWith(`${e}/`))
      } catch {
        return !1
      }
    }
    n.d(
      t,
      {},
      {
        Dv: function (e, t) {
          return c(e, t).src
        },
        _w: c,
        gj: async function (e, t) {
          return s(t) ? (0, l.il)(e, t, a) : null
        },
      },
    )
  },
  aWet(e, t, n) {
    var r = n("YOOG"),
      l = n("yGJW")
    function i(e, t, n) {
      ;(0, l.yy)(e, r.CodexMicroDeviceLifecycleStep, {
        connectionTransport: (function (e) {
          switch (e) {
            case "bluetooth":
              return r.CodexMicroConnectionTransport.CODEX_MICRO_CONNECTION_TRANSPORT_BLUETOOTH
            case "usb":
              return r.CodexMicroConnectionTransport.CODEX_MICRO_CONNECTION_TRANSPORT_USB
            case "unknown":
            case null:
              return r.CodexMicroConnectionTransport.CODEX_MICRO_CONNECTION_TRANSPORT_UNSPECIFIED
          }
        })(n),
        stepType: t,
      })
    }
    n.d(
      t,
      {},
      {
        L: function (e, { flowId: t, inputMonitoringPermissionState: n, screen: i, step: o }) {
          ;(0, l.yy)(e, r.CodexMicroOnboardingLifecycleStep, {
            flowId: t,
            inputMonitoringPermissionState: (function (e) {
              switch (e) {
                case "granted":
                  return r.CodexMicroInputMonitoringPermissionState
                    .CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_GRANTED
                case "denied":
                  return r.CodexMicroInputMonitoringPermissionState.CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_DENIED
                case "unavailable":
                  return r.CodexMicroInputMonitoringPermissionState
                    .CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_UNAVAILABLE
                case "not-applicable":
                  return r.CodexMicroInputMonitoringPermissionState
                    .CODEX_MICRO_INPUT_MONITORING_PERMISSION_STATE_NOT_APPLICABLE
              }
            })(n),
            screen: (function (e) {
              switch (e) {
                case "welcome":
                  return r.CodexMicroOnboardingScreen.CODEX_MICRO_ONBOARDING_SCREEN_WELCOME
                case "agent-keys":
                  return r.CodexMicroOnboardingScreen.CODEX_MICRO_ONBOARDING_SCREEN_AGENT_KEYS
                case "command-keys":
                  return r.CodexMicroOnboardingScreen.CODEX_MICRO_ONBOARDING_SCREEN_COMMAND_KEYS
              }
            })(i),
            stepType: (function (e) {
              switch (e) {
                case "flow-completed":
                  return r.CodexMicroOnboardingLifecycleStepType
                    .CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_FLOW_COMPLETED
                case "flow-dismissed":
                  return r.CodexMicroOnboardingLifecycleStepType
                    .CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_FLOW_DISMISSED
                case "input-monitoring-permission-granted":
                  return r.CodexMicroOnboardingLifecycleStepType
                    .CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_INPUT_MONITORING_PERMISSION_GRANTED
                case "input-monitoring-settings-opened":
                  return r.CodexMicroOnboardingLifecycleStepType
                    .CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_INPUT_MONITORING_SETTINGS_OPENED
                case "screen-continued":
                  return r.CodexMicroOnboardingLifecycleStepType
                    .CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_SCREEN_CONTINUED
                case "screen-shown":
                  return r.CodexMicroOnboardingLifecycleStepType.CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_SCREEN_SHOWN
                case "settings-opened":
                  return r.CodexMicroOnboardingLifecycleStepType
                    .CODEX_MICRO_ONBOARDING_LIFECYCLE_STEP_TYPE_SETTINGS_OPENED
              }
            })(o),
          })
        },
        Y: function (e, t, n, l, o) {
          ;(!1 === o &&
            ("detected" === t.status || "connected" === t.status) &&
            i(e, r.CodexMicroDeviceLifecycleStepType.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_FIRST_DETECTED, l),
            null != n &&
              i(
                e,
                (function (e) {
                  switch (e) {
                    case "connected":
                      return r.CodexMicroDeviceLifecycleStepType.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_CONNECTED
                    case "connection-failed":
                      return r.CodexMicroDeviceLifecycleStepType
                        .CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_CONNECTION_FAILED
                    case "connection-lost":
                      return r.CodexMicroDeviceLifecycleStepType.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_CONNECTION_LOST
                    case "reconnected":
                      return r.CodexMicroDeviceLifecycleStepType.CODEX_MICRO_DEVICE_LIFECYCLE_STEP_TYPE_RECONNECTED
                  }
                })(n),
                l,
              ))
        },
      },
    )
  },
  e7so(e, t, n) {
    n.d(t, { CodexMicroBridge: () => ed })
    var r = n("ABep"),
      l = n("QosV"),
      i = n("zTeN"),
      o = n("DBCl"),
      a = n("zd8w"),
      c = n("HZfM"),
      s = n("ekLq"),
      u = n("sv7c"),
      d = n("ChYf"),
      m = n("eFn4"),
      p = n("q3HK"),
      g = n("hFXd"),
      h = n("jEN2"),
      f = n("YWcr"),
      y = n("Ot7V"),
      T = n("SGsN"),
      v = n("yWTM"),
      C = n("Q8aV"),
      S = n("TL6G"),
      O = n("XLpU"),
      E = n("oyxz")
    function b() {
      let e,
        t = (0, l.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)(E.A, {
              id: "codexMicro.command.unavailable",
              defaultMessage: "This action isn't available here",
              description: "Toast shown when a Codex Micro keycap command cannot run in the current context",
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    var _ = n("OWtl"),
      I = n("jDom"),
      A = n("l0pH"),
      k = n("GaA7"),
      N = n("V3rO"),
      M = n("RxZZ"),
      P = n("d6Ff"),
      w = n("YHhr"),
      x = n("bPa2"),
      R = n("Bc5r"),
      D = n("owF8"),
      L = n("PNcY"),
      K = n("L0nj")
    let z = { type: "idle" }
    function F(e, t, n) {
      switch (e.type) {
        case "idle":
          return "press" === t
            ? { state: { type: "pressed", pressedAt: n }, action: "start", timeoutAt: null }
            : { state: e, action: null, timeoutAt: null }
        case "pressed": {
          if ("release" !== t) return { state: e, action: null, timeoutAt: null }
          let r = e.pressedAt + 350
          return n >= r
            ? { state: z, action: "stop", timeoutAt: null }
            : { state: { type: "waiting-for-second-press", deadline: r }, action: null, timeoutAt: r }
        }
        case "waiting-for-second-press":
          if (n >= e.deadline) return { state: z, action: "stop", timeoutAt: null }
          if ("press" === t) return { state: { type: "latched" }, action: null, timeoutAt: null }
          return { state: e, action: null, timeoutAt: e.deadline }
        case "latched": {
          if ("press" !== t) return { state: e, action: null, timeoutAt: null }
          let r = n + 350
          return { state: { type: "suppressing-presses", deadline: r }, action: "stop", timeoutAt: r }
        }
        case "suppressing-presses":
          if (n < e.deadline) return { state: e, action: null, timeoutAt: e.deadline }
          return "press" === t
            ? { state: { type: "pressed", pressedAt: n }, action: "start", timeoutAt: null }
            : { state: z, action: null, timeoutAt: null }
      }
    }
    function G(e) {
      if (null == e || "skill" === e.type) return e
      let t = (0, D.$S)(e.commandId)
      return null == t ? null : { type: "command", command: t.id }
    }
    var X = n("aWet"),
      W = n("IqFu"),
      Y = n("Exdi")
    let B = "reasoning",
      j = "[data-codex-composer-root]",
      U = "data-composer-navigation-highlight",
      H = "data-composer-navigation-selected",
      q = "data-composer-navigation-open",
      V = "button, a[href], input, select, textarea, [tabindex]:not([tabindex='-1'])",
      $ = (0, i.vP)(_.u, null)
    class Z {
      onInteractionStateChange
      hasOpenNavigationSurface
      activeComposerKey = null
      selectedTargetId = B
      selectedTarget = null
      highlightedTarget = null
      interactionState = null
      selectedTargetOpen = !1
      selectedTargetObserver = null
      openSurfaceObserver = null
      highlightTimeout = null
      constructor(e = () => {}, t = () => !1) {
        ;((this.onInteractionStateChange = e), (this.hasOpenNavigationSurface = t))
      }
      move(e, t, n = null) {
        let r = this.getTargets(e, n),
          l = this.getSelectedTarget(r)
        if (null == l) return (this.clearHighlight(), null)
        let i = r.indexOf(l),
          o = r[(i + ("next" === t ? 1 : -1) + r.length) % r.length] ?? null
        return null == o
          ? null
          : ((this.selectedTargetId = o.id),
            this.setSelectedTarget(o.control),
            this.showHighlight(o.control),
            o.control)
      }
      getActivationTarget(e, t = null, n) {
        let r = this.getTargets(e, t)
        if (null != n) return (this.dispose(), r.find(({ id: e }) => e === n)?.control ?? null)
        let l = this.getSelectedTarget(r)
        return null == l
          ? (this.clearHighlight(), null)
          : ((this.selectedTargetId = l.id),
            this.setSelectedTarget(l.control),
            this.showHighlight(l.control),
            l.control)
      }
      clearHighlight() {
        ;(this.removeHighlight(),
          this.selectedTargetOpen || (this.stopOpenSurfaceTracking(), this.setInteractionState(null)))
      }
      dispose() {
        ;(this.clearHighlight(), this.setSelectedTarget(null))
      }
      getTargets(e, t) {
        return (
          this.setActiveComposer(t ?? e),
          Array.from(e.querySelectorAll("[data-composer-navigation-target]")).flatMap((t) => {
            var n, r
            if (t.closest(j) !== e) return []
            let l = t.dataset.composerNavigationTarget,
              i = (n = t).matches(V) ? n : n.querySelector(V)
            return null != l &&
              null != i &&
              (r = i).getClientRects().length > 0 &&
              !r.matches(":disabled") &&
              null == r.closest("[aria-disabled='true'], [data-disabled], [hidden], [aria-hidden='true'], [inert]")
              ? [{ control: i, id: l }]
              : []
          })
        )
      }
      setActiveComposer(e) {
        e !== this.activeComposerKey && ((this.activeComposerKey = e), (this.selectedTargetId = B), this.dispose())
      }
      getSelectedTarget(e) {
        let t = e.find(({ id: e }) => e === this.selectedTargetId) ?? e.find(({ id: e }) => e === B) ?? e[0] ?? null
        return (null != t && (this.selectedTargetId = t.id), this.setSelectedTarget(t?.control ?? null), t)
      }
      setSelectedTarget(e) {
        e === this.selectedTarget ||
          (this.selectedTargetObserver?.disconnect(),
          (this.selectedTargetObserver = null),
          this.stopOpenSurfaceTracking(),
          this.selectedTargetOpen && ((this.selectedTargetOpen = !1), this.setInteractionState(null)),
          this.selectedTarget?.removeAttribute(q),
          this.selectedTarget?.removeAttribute(H),
          (this.selectedTarget = e),
          e?.setAttribute(H, ""),
          null != e &&
            (this.syncSelectedTargetOpen(),
            (this.selectedTargetObserver = new MutationObserver(() => {
              if (this.selectedTarget === e) {
                if (!e.isConnected) {
                  ;(this.selectedTargetObserver?.disconnect(),
                    (this.selectedTargetObserver = null),
                    this.stopOpenSurfaceTracking(),
                    (this.selectedTargetOpen = !1),
                    this.removeHighlight(),
                    e.removeAttribute(q),
                    e.removeAttribute(H),
                    (this.selectedTarget = null),
                    this.setInteractionState(null))
                  return
                }
                this.syncSelectedTargetOpen()
              }
            })),
            this.selectedTargetObserver.observe(e, {
              attributeFilter: ["aria-expanded", "data-state"],
              attributes: !0,
            }),
            this.selectedTargetObserver.observe(e.closest(j) ?? document.body, { childList: !0, subtree: !0 })))
      }
      showHighlight(e) {
        ;(this.removeHighlight(),
          (this.highlightedTarget = e),
          e.dataset.composerNavigationTarget !== B && e.scrollIntoView({ block: "nearest", inline: "nearest" }),
          e.setAttribute(U, ""),
          this.startOpenSurfaceTracking(),
          this.selectedTargetOpen || this.setInteractionState("selected"),
          (this.highlightTimeout = globalThis.setTimeout(() => {
            ;(e.removeAttribute(U),
              this.highlightedTarget === e &&
                ((this.highlightedTarget = null),
                (this.highlightTimeout = null),
                this.selectedTargetOpen || (this.stopOpenSurfaceTracking(), this.setInteractionState(null))))
          }, 2e3)))
      }
      removeHighlight() {
        ;(null != this.highlightTimeout &&
          (globalThis.clearTimeout(this.highlightTimeout), (this.highlightTimeout = null)),
          this.highlightedTarget?.removeAttribute(U),
          (this.highlightedTarget = null))
      }
      startOpenSurfaceTracking() {
        null == this.openSurfaceObserver &&
          null != this.selectedTarget &&
          ((this.openSurfaceObserver = new MutationObserver(() => {
            this.syncSelectedTargetOpen()
          })),
          this.openSurfaceObserver.observe(document.body, {
            attributeFilter: ["aria-expanded", "data-state"],
            attributes: !0,
            childList: !0,
            subtree: !0,
          }),
          this.syncSelectedTargetOpen())
      }
      stopOpenSurfaceTracking() {
        ;(this.openSurfaceObserver?.disconnect(), (this.openSurfaceObserver = null))
      }
      syncSelectedTargetOpen() {
        let e = this.selectedTarget
        if (null == e) return
        let t = e.matches('[aria-expanded="true"], [data-state="open"]') || this.hasOpenNavigationSurface()
        ;(e.toggleAttribute(q, t),
          t !== this.selectedTargetOpen &&
            ((this.selectedTargetOpen = t),
            this.setInteractionState(t ? "open" : this.highlightedTarget === e ? "selected" : null),
            t || null != this.highlightedTarget || this.stopOpenSurfaceTracking()))
      }
      setInteractionState(e) {
        e !== this.interactionState && ((this.interactionState = e), this.onInteractionStateChange(e))
      }
    }
    var J = n("Om6N"),
      Q = n("yBYg"),
      ee = n("z3Uu"),
      et = n("muZm"),
      en = n("oLQu"),
      er = n("CyfE"),
      el = n("Dn1B")
    let ei = (0, v.w9)({ entrypoint: "home" }),
      eo = /^AG0[0-5]$/,
      ea = '[data-composer-navigation-target="add-context"][aria-expanded="true"]',
      ec = '[data-app-shell-active-page="false"]',
      es = ['[role="menu"][data-state="open"]', '[role="listbox"][data-state="open"]', ea].join(", "),
      eu = '[role="dialog"][data-state="open"]'
    function ed() {
      let e,
        t = (0, l.c)(1),
        n = k.appServices.codexMicro
      return null == n
        ? null
        : (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(em, { codexMicro: n })), (t[0] = e))
            : (e = t[0]),
          e)
    }
    function em(e) {
      let t,
        n,
        c,
        s,
        u,
        d,
        m,
        p,
        g,
        h = (0, l.c)(15),
        { codexMicro: f } = e,
        y = (0, i.gh)(_.u),
        { status: T } = (0, i.Ul)(er.rx),
        v = (0, a.useRef)(!1),
        C = (0, a.useRef)(!1),
        O = (0, a.useRef)(null),
        E = (0, a.useRef)(!1)
      return (
        h[0] !== y
          ? ((t = (e) => {
              let { cause: t, state: n } = e
              ;((v.current = !0), "device-lifecycle" === t && (O.current = { value: y.get(Y.w) }), eg(y, n))
            }),
            (n = [y]),
            (h[0] = y),
            (h[1] = t),
            (h[2] = n))
          : ((t = h[1]), (n = h[2])),
        (0, S.JX)("codex-micro-device-state-changed", t, n),
        h[3] !== y
          ? ((c = (e) => {
              let { isOwner: t } = e
              ;((C.current = !0), y.set(er.VZ, t))
            }),
            (s = [y]),
            (h[3] = y),
            (h[4] = c),
            (h[5] = s))
          : ((c = h[4]), (s = h[5])),
        (0, S.JX)("codex-micro-window-ownership-changed", c, s),
        h[6] !== y
          ? ((u = (e) => {
              let { state: t, transition: n, transport: r } = e,
                l = O.current,
                i = null == l ? y.get(Y.w) : l.value
              ;((O.current = null), (0, X.Y)(y, t, n, r, i))
            }),
            (d = [y]),
            (h[6] = y),
            (h[7] = u),
            (h[8] = d))
          : ((u = h[7]), (d = h[8])),
        (0, S.JX)("codex-micro-device-lifecycle", u, d),
        h[9] !== f || h[10] !== y
          ? ((m = () => {
              let e = !0
              ;(f.getState().then((t) => {
                e && !v.current && eg(y, t)
              }),
                f.ownsPrimaryWindow().then((t) => {
                  e && !C.current && y.set(er.VZ, t)
                }))
              let t = null,
                n = null,
                r = null,
                l = !1,
                i = () => {
                  if (!e) {
                    ;((r = null), (l = !1))
                    return
                  }
                  let t = r
                  if (((r = null), null == t)) {
                    l = !1
                    return
                  }
                  f.updateLighting(t).then(i, i)
                },
                a = y.watch((e) => {
                  let { get: a } = e
                  if (!a(er.VZ)) {
                    ;((t = null), (n = null), (r = null))
                    return
                  }
                  let c = a(el.t),
                    s = c.slots.map(ep),
                    u = "custom" === (0, M.CN)(a, o.$VP.agentSource) ? (a(W.WN) ?? W.wc) : null,
                    d = c.slots.map((e) => {
                      let { id: t } = e,
                        n = (0, W.XA)(t),
                        r = null == n ? null : u?.[n]
                      return null != r && "type" in r
                        ? "command" === r.type && null != (0, D.ed)(r.commandId)
                          ? "recent-thread"
                          : "action"
                        : "thread"
                    }),
                    m = (0, M.CN)(a, o.$VP.singleTapAgentKeys),
                    p = JSON.stringify({ agentThreadKeys: s, agentKeyKinds: d, singleTapAgentKeys: m })
                  p !== t && ((t = p), f.updateAgentThreadKeys(s, d, m))
                  let g = a(et.CX),
                    h = (0, Q.Uv)(a(Q.FM)),
                    y = a($),
                    T = c
                  null != g
                    ? (T = { ...c, slots: g })
                    : null != h
                      ? (T = {
                          ...c,
                          preserveSelectionLighting: !0,
                          slots: h,
                          snakingAmbientStatus: "error",
                          suspendDeviceStatusRefresh: !0,
                          voiceState: "idle",
                        })
                      : null != y &&
                        (T = {
                          ...c,
                          preserveSelectionLighting: !0,
                          slots:
                            "open" === y
                              ? c.slots.map(({ id: e }) => ({
                                  id: e,
                                  threadKey: null,
                                  title: null,
                                  selected: !1,
                                  status: 0 === e ? "error" : "off",
                                }))
                              : c.slots,
                          snakingAmbientStatus: "open" === y ? "unread" : "working",
                        })
                  let v = (0, ee.oG)(T)
                  v !== n && ((n = v), (r = T), l || ((l = !0), i()))
                }),
                c = (0, N.nu)((e, t) => {
                  let { clientThreadId: n, conversationId: r } = t
                  ;(0, W.iC)(y, n, r)
                })
              return () => {
                ;((e = !1), (r = null), a(), c())
              }
            }),
            (p = [f, y]),
            (h[9] = f),
            (h[10] = y),
            (h[11] = m),
            (h[12] = p))
          : ((m = h[11]), (p = h[12])),
        (0, a.useEffect)(m, p),
        h[13] !== T
          ? ((g = "connected" === T ? (0, r.jsx)(ef, { miniGameRearmRequiredRef: E }) : null), (h[13] = T), (h[14] = g))
          : (g = h[14]),
        g
      )
    }
    function ep(e) {
      return e.threadKey
    }
    function eg(e, t) {
      ;((0, er.Fc)(e, t), ("detected" === t.status || "connected" === t.status) && (0, en.Wu)(e, t.model))
    }
    function eh(e, t, n) {
      return (
        ("manageTasks" !== t ||
          !!e.get(d.G, { name: "automations.local" }).isCapable ||
          !!e.get(d.G, { name: "automations.cloud" }).isCapable) &&
        ((0, D.$S)(t)?.requiredAccess == null || !!e.get(m.Xr)) &&
        (0, p.d1)(t, n)
      )
    }
    function ef(e) {
      let t,
        n,
        s,
        u,
        d,
        m,
        g,
        v,
        E,
        k,
        X,
        Y,
        B,
        j,
        U,
        H,
        q,
        V,
        ee,
        et,
        en,
        el,
        ec,
        es,
        ed = (0, l.c)(75),
        { miniGameRearmRequiredRef: em } = e,
        ep = (0, i.gh)(_.u),
        eg = (0, c.zy)()
      ed[0] !== eg.pathname
        ? ((t = eg.pathname.startsWith("/settings/codex-micro")), (ed[0] = eg.pathname), (ed[1] = t))
        : (t = ed[1])
      let ef = t,
        ex = (0, c.Zp)(),
        eR = (0, R.M0)(),
        eD = (0, C.p8)(),
        eL = (0, M.iK)(o.$VP.agentSource),
        eK = (0, M.iK)(o.$VP.layout),
        ez = (0, i.Ul)(er.VZ),
        eF = (0, i.Ul)(W.WN)
      ed[2] !== eK ? ((n = (0, L.Sc)(eK)), (ed[2] = eK), (ed[3] = n)) : (n = ed[3])
      let eG = n,
        eX = (0, A.g)(),
        eW = (0, i.Ul)(O.Jb),
        eY = (eX || eW) && "realtime" === eG.voiceButtonMode ? "realtime" : "push-to-talk",
        eB = ez && "realtime" === eY
      ed[4] !== ef || ed[5] !== eB
        ? ((s = { enabled: eB, isCodexMicroSettings: ef }), (ed[4] = ef), (ed[5] = eB), (ed[6] = s))
        : (s = ed[6])
      let { handleGesture: ej } = (function (e) {
        let t,
          n,
          o,
          c,
          s,
          u,
          d = (0, l.c)(13),
          { enabled: m, isCodexMicroSettings: g } = e,
          h = (0, i.gh)(_.u),
          f = (0, a.useRef)(null),
          y = (0, a.useRef)(!1)
        d[0] !== g || d[1] !== h
          ? ((t = (e) => {
              let t = (0, p.d1)(
                "short-press" === e ? "realtimeVoice.toggleMicrophoneMute" : "realtimeVoice.endCall",
                "codex_micro_hid",
              )
              ;(t || "short-press" !== e || (t = (0, p.d1)("composer.startVoiceMode", "codex_micro_hid")),
                t ||
                  "long-press" === e ||
                  g ||
                  h
                    .get(T.Id)
                    .warning((0, r.jsx)(b, {}), {
                      duration: 3,
                      hasCloseButton: !1,
                      id: "codex-micro-command-unavailable",
                    }))
            }),
            (d[0] = g),
            (d[1] = h),
            (d[2] = t))
          : (t = d[2])
        let v = (0, I.K)(t)
        d[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = () => {
              ;(null != f.current && (globalThis.clearTimeout(f.current), (f.current = null)), (y.current = !1))
            }),
            (d[3] = n))
          : (n = d[3])
        let C = (0, I.K)(n)
        d[4] !== v || d[5] !== m
          ? ((o = (e) => {
              if (m) {
                if ("release" === e) {
                  if (y.current) {
                    y.current = !1
                    return
                  }
                  if (null == f.current) return
                  ;(globalThis.clearTimeout(f.current), (f.current = null), v("short-press"))
                  return
                }
                null != f.current ||
                  y.current ||
                  (f.current = globalThis.setTimeout(() => {
                    ;((f.current = null), (y.current = !0), v("long-press"))
                  }, 500))
              }
            }),
            (d[4] = v),
            (d[5] = m),
            (d[6] = o))
          : (o = d[6])
        let S = (0, I.K)(o)
        return (
          d[7] !== C || d[8] !== m
            ? ((c = () => (m || C(), C)), (s = [C, m]), (d[7] = C), (d[8] = m), (d[9] = c), (d[10] = s))
            : ((c = d[9]), (s = d[10])),
          (0, a.useEffect)(c, s),
          d[11] !== S ? ((u = { handleGesture: S }), (d[11] = S), (d[12] = u)) : (u = d[12]),
          u
        )
      })(s)
      ed[7] !== eL ||
      ed[8] !== eF ||
      ed[9] !== eG.analogStick ||
      ed[10] !== eG.encoder ||
      ed[11] !== eG.encoderMode ||
      ed[12] !== eG.slots
        ? ((u =
            Object.values(eG.slots).some(eO) ||
            Object.values(eG.analogStick).some(eS) ||
            ("custom" === eG.encoderMode && Object.values(eG.encoder).some(eC)) ||
            ("custom" === eL && Object.values(eF ?? W.wc).some(ev))),
          (ed[7] = eL),
          (ed[8] = eF),
          (ed[9] = eG.analogStick),
          (ed[10] = eG.encoder),
          (ed[11] = eG.encoderMode),
          (ed[12] = eG.slots),
          (ed[13] = u))
        : (u = ed[13])
      let eU = u
      ed[14] !== eU ? ((d = { enabled: eU }), (ed[14] = eU), (ed[15] = d)) : (d = ed[15])
      let { skills: eH } = (0, x.a)(void 0, void 0, d),
        eq = (0, a.useRef)(null),
        eV = (0, a.useRef)(Q.n6)
      ed[16] === Symbol.for("react.memo_cache_sentinel") ? ((m = new Set()), (ed[16] = m)) : (m = ed[16])
      let e$ = (0, a.useRef)(m),
        eZ = (0, a.useRef)(z),
        eJ = (0, a.useRef)(null),
        eQ = (0, a.useRef)(eY),
        e0 = (0, a.useRef)(null),
        e1 = (0, a.useRef)(null),
        e2 = (0, a.useRef)(null),
        e3 = (0, a.useRef)(!1),
        e6 = (0, a.useRef)(null),
        e5 = (0, a.useRef)(null)
      ed[17] !== ep
        ? ((g = function () {
            return (null == e5.current && (e5.current = new Z((e) => ep.set($, e), eT)), e5.current)
          }),
          (ed[17] = ep),
          (ed[18] = g))
        : (g = ed[18])
      let e4 = g
      ed[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = function () {
            null != e6.current && (globalThis.clearTimeout(e6.current), (e6.current = null))
          }),
          (ed[19] = v))
        : (v = ed[19])
      let e7 = v
      ed[20] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = function () {
            ;(e7(),
              (e6.current = globalThis.setTimeout(() => {
                e6.current = null
                let e = ek()
                null != e && eN(e) && eb("Escape", e)
              }, 1500)))
          }),
          (ed[20] = E))
        : (E = ed[20])
      let e8 = E
      ed[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((k = function (e) {
            let t = globalThis.performance.now(),
              n = F(eZ.current, e, t)
            ;((eZ.current = n.state),
              null != eJ.current && (globalThis.clearTimeout(eJ.current), (eJ.current = null)),
              eE(n.action))
            let r = n.timeoutAt
            null != r &&
              (eJ.current = globalThis.setTimeout(
                () => {
                  eJ.current = null
                  let e = F(eZ.current, "timeout", r)
                  ;((eZ.current = e.state), eE(e.action))
                },
                Math.max(0, r - t),
              ))
          }),
          (ed[21] = k))
        : (k = ed[21])
      let e9 = k
      ed[22] === Symbol.for("react.memo_cache_sentinel")
        ? ((X = function () {
            for (let e of e$.current) globalThis.clearTimeout(e)
            e$.current.clear()
          }),
          (ed[22] = X))
        : (X = ed[22])
      let te = X
      ed[23] === Symbol.for("react.memo_cache_sentinel")
        ? ((Y = function (e, t, n) {
            if (!t) return e() ? "triggered" : "unavailable"
            let r = globalThis.setTimeout(() => {
              ;(e$.current.delete(r), n(e() ? "triggered" : "unavailable"))
            }, 220)
            return (e$.current.add(r), null)
          }),
          (ed[23] = Y))
        : (Y = ed[23])
      let tt = Y
      ed[24] !== eH
        ? ((B = function (e) {
            let t = eH.find((t) => t.enabled && t.name === e.skillName && t.path === e.skillPath)
            return (
              null != t &&
              (S.O1.dispatchHostMessage({ type: "codex-micro-insert-skill-mention", skill: (0, f.qP)(t) }), !0)
            )
          }),
          (ed[24] = eH),
          (ed[25] = B))
        : (B = ed[25])
      let tn = B
      ed[26] !== tn || ed[27] !== ef || ed[28] !== ep
        ? ((j = function (e) {
            var t
            let n =
              ((t = (0, L.Sc)((0, M.CN)(ep.get, o.$VP.layout))), "custom" === t.encoderMode ? G(t.encoder[e]) : null)
            null !=
              ew(
                n?.type === "command" && ("previousThread" === n.command || "nextThread" === n.command)
                  ? `${eu}:not([aria-modal="false"])`
                  : eu,
              ) ||
              (n?.type === "skill"
                ? tn(n)
                : n?.type !== "command" ||
                  eh(ep, n.command, "codex_micro_encoder") ||
                  ef ||
                  ep
                    .get(T.Id)
                    .warning((0, r.jsx)(b, {}), {
                      duration: 3,
                      hasCloseButton: !1,
                      id: "codex-micro-command-unavailable",
                    }))
          }),
          (ed[26] = tn),
          (ed[27] = ef),
          (ed[28] = ep),
          (ed[29] = j))
        : (j = ed[29])
      let tr = j
      ed[30] !== ep
        ? ((U = function (e, t) {
            ;(null != e1.current && globalThis.clearTimeout(e1.current),
              (0, J.qJ)(ep, e, t),
              (e1.current = globalThis.setTimeout(() => {
                ;((e1.current = null), (0, J.hT)(ep))
              }, 600)))
          }),
          (ed[30] = ep),
          (ed[31] = U))
        : (U = ed[31])
      let tl = U
      ed[32] === Symbol.for("react.memo_cache_sentinel")
        ? ((H = () => {
            ;(null != eJ.current && (globalThis.clearTimeout(eJ.current), (eJ.current = null)),
              "idle" !== eZ.current.type && "suppressing-presses" !== eZ.current.type && eE("stop"),
              (eZ.current = z))
          }),
          (ed[32] = H))
        : (H = ed[32])
      let ti = (0, a.useEffectEvent)(H)
      return (
        ed[33] !== ti || ed[34] !== eY
          ? ((q = () => {
              eQ.current !== eY && ((eQ.current = eY), ti())
            }),
            (ed[33] = ti),
            (ed[34] = eY),
            (ed[35] = q))
          : (q = ed[35]),
        ed[36] !== eY ? ((V = [eY]), (ed[36] = eY), (ed[37] = V)) : (V = ed[37]),
        (0, a.useEffect)(q, V),
        ed[38] !== ti || ed[39] !== ep
          ? ((ee = () => {
              let e = () => {
                  ;(null != e0.current && (globalThis.clearTimeout(e0.current), (e0.current = null)),
                    null != e1.current && (globalThis.clearTimeout(e1.current), (e1.current = null)),
                    null != e2.current && (globalThis.clearTimeout(e2.current), (e2.current = null)),
                    (e3.current = !1),
                    e7(),
                    e5.current?.dispose(),
                    (e5.current = null),
                    ep.set($, null),
                    te(),
                    ti(),
                    (eq.current = null),
                    (eV.current = Q.n6),
                    ep.set(er.HI, ey),
                    (0, J.ub)(ep))
                },
                t = ep.watch((t) => {
                  let { get: n } = t
                  n(er.VZ) || e()
                })
              return () => {
                ;(t(), e())
              }
            }),
            (ed[38] = ti),
            (ed[39] = ep),
            (ed[40] = ee))
          : (ee = ed[40]),
        ed[41] !== ep ? ((et = [ep]), (ed[41] = ep), (ed[42] = et)) : (et = ed[42]),
        (0, a.useEffect)(ee, et),
        ed[43] !== e4 ||
        ed[44] !== ej ||
        ed[45] !== tn ||
        ed[46] !== ef ||
        ed[47] !== eG ||
        ed[48] !== ex ||
        ed[49] !== eR ||
        ed[50] !== tr ||
        ed[51] !== ep ||
        ed[52] !== eD ||
        ed[53] !== eY
          ? ((en = (e) => {
              let { event: t } = e
              ;(0, er.NS)(ep, t)
              let n = null == t.slot ? null : (0, W.XA)(t.slot),
                l = null != n && "custom" === (0, M.CN)(ep.get, o.$VP.agentSource) ? (ep.get(W.WN) ?? W.wc)[n] : null,
                i = null != l && !("threadKey" in l),
                a = ep.get(Q.FM)
              if ((0, Q.PK)(a, t)) return
              if (1 === t.act && eo.test(t.key) && !i) {
                let e = eA()
                if (null != e) {
                  "AG00" === t.key &&
                    eb(
                      "Escape",
                      (e.matches(ea)
                        ? e.closest("[data-codex-composer-root]")?.querySelector("[data-codex-composer]")
                        : null) ?? e,
                    )
                  return
                }
              }
              2 === t.act &&
                ("ENC_CW" === t.key || "ENC_CC" === t.key) &&
                (null != e0.current && globalThis.clearTimeout(e0.current),
                (e0.current = globalThis.setTimeout(() => {
                  ;((0, er.QY)(ep), (e0.current = null))
                }, 180)))
              let c = 2 !== t.act ? null : "ENC_CW" === t.key ? "ArrowUp" : "ENC_CC" === t.key ? "ArrowDown" : null
              if (null != c) {
                if ("custom" === eG.encoderMode) return void tr("ENC_CW" === t.key ? "right" : "left")
                if ("reasoning" === eG.encoderMode) {
                  if (null != ew(eu)) return
                  let e = (0, h.j_)()
                  if (null == e || null == e4().getActivationTarget(e.root, e.composerId, "reasoning")) return
                  ;((0, p.d1)(
                    "ArrowUp" === c ? "composer.decreaseReasoningEffort" : "composer.increaseReasoningEffort",
                    "codex_micro_encoder",
                  ),
                    null != ek() && e8())
                  return
                }
                if ("conversation-scroll" === eG.encoderMode) return void eI(c)
                let e = eA()
                if (null != e) return void eb(c, e)
                if (null != ew(eu)) return
                let n = eP()
                if (null != n) return void e_(c, n)
                let r = (0, h.j_)()
                return void (null != r && e4().move(r.root, "ArrowDown" === c ? "next" : "previous", r.composerId))
              }
              let s = (function (e, t, n) {
                let r
                if ("ENC_CW" === e.key || "ENC_CC" === e.key) return null
                if (e.key.startsWith("ENC"))
                  return 1 === e.act ? { type: "encoder-press" } : 0 === e.act ? { type: "encoder-release" } : null
                if (null == n || "threadKey" in n) {
                  let n =
                    t.separateMicrophoneKeys || ("ACT10" !== e.key && "ACT11" !== e.key)
                      ? (0, L.XA)(e.key)
                      : "ACT10_ACT11"
                  if (null == n || (!t.separateMicrophoneKeys && "ACT11" === e.key)) return null
                  r = (0, L.pr)(t.slots[n])
                } else
                  switch (n.type) {
                    case "command": {
                      let t = (0, D.$S)(n.commandId)
                      return 1 === e.act && null != t ? { type: "command", command: t.id } : null
                    }
                    case "skill":
                      return 1 === e.act ? n : null
                    case "keycap":
                      r = (0, L.pr)({ keycapId: n.keycapId })
                  }
                return null == r
                  ? null
                  : "push-to-talk" === r.type
                    ? 1 === e.act
                      ? { type: "push-to-talk-press" }
                      : 0 === e.act
                        ? { type: "push-to-talk-release" }
                        : null
                    : 1 === e.act
                      ? r
                      : null
              })(t, eG, l)
              if (s?.type === "encoder-press") {
                if (null != e2.current || e3.current) return
                e2.current = globalThis.setTimeout(() => {
                  ;((e2.current = null),
                  (e3.current = !0),
                  e5.current?.clearHighlight(),
                  "custom" === (0, L.Sc)((0, M.CN)(ep.get, o.$VP.layout)).encoderMode)
                    ? tr("longPress")
                    : ex("/settings/codex-micro")
                }, 500)
                return
              }
              if (s?.type === "encoder-release") {
                if (e3.current) {
                  e3.current = !1
                  return
                }
                if (null == e2.current) return
                if ((globalThis.clearTimeout(e2.current), (e2.current = null), "custom" === eG.encoderMode))
                  return void tr("click")
                if ("conversation-scroll" === eG.encoderMode) return void eI("bottom")
                let e = eA()
                if (null != e) {
                  let t = ek()
                  if ("reasoning" === eG.encoderMode && null != t && eN(t)) {
                    let e,
                      n =
                        null == (e = t.querySelector("[data-model-picker-view-toggle]")) ||
                        "false" === e.dataset.interactive ||
                        null !=
                          e.closest(
                            ":disabled, [aria-disabled='true'], [data-disabled], [hidden], [aria-hidden='true'], [inert]",
                          )
                          ? null
                          : e
                    if (null != n) {
                      ;(e7(), n.focus(), eb("Enter", n))
                      return
                    }
                  }
                  let n =
                    "reasoning" === eG.encoderMode &&
                    null != t &&
                    eM(t) &&
                    e !== t &&
                    e.matches('[role="menu"][data-state="open"]')
                  ;(eb("Enter", e),
                    n &&
                      globalThis.queueMicrotask(() => {
                        e.isConnected && eb("ArrowLeft", e)
                      }),
                    "reasoning" === eG.encoderMode && null != t && eM(t) && e8())
                  return
                }
                let t = ew(eu)
                if (null != t) return void eb("Enter", t)
                let n = eP()
                if (null != n) return void e_("Enter", n)
                let r = (0, h.j_)(),
                  l =
                    null == r
                      ? null
                      : (e4().getActivationTarget(
                          r.root,
                          r.composerId,
                          "reasoning" === eG.encoderMode ? "reasoning" : void 0,
                        ) ?? null)
                if (null != l) {
                  ;("reasoning" !== eG.encoderMode && l.focus(),
                    "add-context" === l.dataset.composerNavigationTarget ? l.click() : eb("Enter", l),
                    "reasoning" === eG.encoderMode && e8())
                  return
                }
                return void eb("Enter")
              }
              if (s?.type === "command" && !(null != l && "commandId" in l && null != (0, D.ed)(l.commandId))) {
                eh(ep, s.command, "codex_micro_hid") ||
                  ef ||
                  ep
                    .get(T.Id)
                    .warning((0, r.jsx)(b, {}), {
                      duration: 3,
                      hasCloseButton: !1,
                      id: "codex-micro-command-unavailable",
                    })
                return
              }
              if (s?.type === "external-url")
                return void (0, y.E0)({ href: s.url, initiator: "open_in_browser_bridge" })
              if (s?.type === "composer-text")
                return void S.O1.dispatchHostMessage({ type: "codex-micro-insert-composer-text", text: s.text })
              if (s?.type === "skill") return void tn(s)
              if (s?.type === "push-to-talk-press" || s?.type === "push-to-talk-release") {
                let e = "push-to-talk-press" === s.type ? "press" : "release"
                "realtime" === eY ? ej(e) : e9(e)
                return
              }
              if (1 !== t.act || null == t.slot) return
              let u = (0, P.Pc)(t.threadKey)
              if (null == u) {
                null == t.threadKey &&
                  "custom" === (0, M.CN)(ep.get, o.$VP.agentSource) &&
                  null != n &&
                  null == l &&
                  (0, W.ZK)(ep, n, ep.get(N.RH, ei)) &&
                  eD()
                return
              }
              ;(null != t.slot && (0, W.Bj)(ep, t.slot, u.key), (0, w.Dz)(ep, u.key, eR, ex))
            }),
            (ed[43] = e4),
            (ed[44] = ej),
            (ed[45] = tn),
            (ed[46] = ef),
            (ed[47] = eG),
            (ed[48] = ex),
            (ed[49] = eR),
            (ed[50] = tr),
            (ed[51] = ep),
            (ed[52] = eD),
            (ed[53] = eY),
            (ed[54] = en))
          : (en = ed[54]),
        ed[55] !== ej ||
        ed[56] !== ef ||
        ed[57] !== eG ||
        ed[58] !== ex ||
        ed[59] !== eR ||
        ed[60] !== ep ||
        ed[61] !== eH ||
        ed[62] !== eD ||
        ed[63] !== eY
          ? ((el = [ej, ef, eG, ex, eR, ep, eH, eD, eY]),
            (ed[55] = ej),
            (ed[56] = ef),
            (ed[57] = eG),
            (ed[58] = ex),
            (ed[59] = eR),
            (ed[60] = ep),
            (ed[61] = eH),
            (ed[62] = eD),
            (ed[63] = eY),
            (ed[64] = el))
          : (el = ed[64]),
        (0, S.JX)("codex-micro-hid-event", en, el),
        ed[65] !== tn || ed[66] !== eG.analogStick || ed[67] !== em || ed[68] !== ep || ed[69] !== tl
          ? ((ec = (e) => {
              var t
              let n,
                { event: r } = e
              ;(0, er.Yf)(ep, r)
              let l = eq.current,
                i = ep.get(er.d5),
                o = (0, Q.aj)()
              if (null != ep.get(Q.FM)) {
                ;((em.current = !0), (eV.current = Q.n6), (eq.current = null))
                return
              }
              if (em.current) {
                ;((eq.current = null), r.distance <= 0.1 && (em.current = !1))
                return
              }
              if (null == o || i) eV.current = Q.n6
              else {
                let e = (0, Q.pZ)(eV.current, r, globalThis.performance.now())
                if (((eV.current = e.state), e.activated)) {
                  ;(te(),
                    (em.current = !0),
                    (eq.current = null),
                    (0, Q.DG)(ep),
                    ep.set(Q.FM, { composerId: o, game: (0, Q.kf)() }),
                    tl(r, 1))
                  return
                }
                if (e.captured) {
                  ;(te(), (eq.current = null), tl(r, e.progress))
                  return
                }
              }
              let a =
                ((t = eG.analogStick),
                (n = (0, K.pU)(r)),
                { action: i || null == n || n === l ? null : G(t[n]), activeDirection: n })
              eq.current = a.activeDirection
              let c = function (e) {
                  ;(null != e1.current && (globalThis.clearTimeout(e1.current), (e1.current = null)),
                    (0, J.yn)(ep, {
                      activeDirection: a.activeDirection,
                      enabled: !i,
                      event: r,
                      executionStatus: e,
                      mapping: eG.analogStick,
                      previousActiveDirection: l,
                    }).visible &&
                      (e1.current = globalThis.setTimeout(() => {
                        ;((e1.current = null), (eq.current = null), (0, J.hT)(ep))
                      }, 600)))
                },
                s = !1,
                u = null
              if (a.action?.type === "command") {
                let e = a.action.command
                s = null == (u = tt(() => eh(ep, e, "codex_micro_joystick"), null != o, c))
              } else if (a.action?.type === "skill") {
                let e = a.action
                s = null == (u = tt(() => tn(e), null != o, c))
              }
              s || c(u)
            }),
            (ed[65] = tn),
            (ed[66] = eG.analogStick),
            (ed[67] = em),
            (ed[68] = ep),
            (ed[69] = tl),
            (ed[70] = ec))
          : (ec = ed[70]),
        ed[71] !== eG.analogStick || ed[72] !== ep || ed[73] !== eH
          ? ((es = [eG.analogStick, ep, eH]), (ed[71] = eG.analogStick), (ed[72] = ep), (ed[73] = eH), (ed[74] = es))
          : (es = ed[74]),
        (0, S.JX)("codex-micro-joystick-event", ec, es),
        null
      )
    }
    function ey(e) {
      return { ...e, joystick: { angle: 0, distance: 0 }, knobPulse: null, pressedKeys: [] }
    }
    function eT() {
      return null != eA()
    }
    function ev(e) {
      return null != e && "type" in e && "skill" === e.type
    }
    function eC(e) {
      return e?.type === "skill"
    }
    function eS(e) {
      return e?.type === "skill"
    }
    function eO(e) {
      return e.action?.type === "skill"
    }
    function eE(e) {
      null != e &&
        S.O1.dispatchHostMessage({
          type: "start" === e ? "codex-micro-push-to-talk-start" : "codex-micro-push-to-talk-stop",
        })
    }
    function eb(e, t = window) {
      let n = document.activeElement
      ;(null != n && (!(t instanceof Element) || t.contains(n)) ? n : t).dispatchEvent(
        new KeyboardEvent("keydown", { bubbles: !0, cancelable: !0, code: g.F, key: e }),
      )
    }
    function e_(e, t) {
      t.hasAttribute("data-codex-composer-request-navigation")
        ? eb(e, t)
        : t.hasAttribute("data-codex-approval-surface") &&
          (function (e, t) {
            let n = Array.from(t.querySelectorAll("button:not(:disabled):not([aria-haspopup='menu'])")).filter(
              (e) => null == e.closest(`[hidden],[aria-hidden='true'],[inert],${ec}`),
            )
            if (0 === n.length) return
            let r = document.activeElement,
              l = r instanceof HTMLButtonElement && t.contains(r) ? n.indexOf(r) : n.length - 1,
              i = l >= 0 ? l : n.length - 1
            "Enter" === e ? n[i]?.click() : n[(i + ("ArrowDown" === e ? 1 : -1) + n.length) % n.length]?.focus()
          })(e, t)
    }
    function eI(e) {
      let t
      if (null != ew(eu)) return
      let n = null != ew('[data-app-shell-right-panel-full-width="true"]')
      if (
        null ==
        (t = n
          ? Array.from(
              ew('[data-app-shell-focus-area="right-panel"]')?.querySelectorAll(
                `${s.IX.reviewScroll}, .cm-scroller, .overflow-auto, .overflow-y-auto, .overflow-scroll, .overflow-y-scroll`,
              ) ?? [],
            ).find((e) => e.scrollHeight > e.clientHeight)
          : ((0, h.j_)()?.root.closest(s.IX.timelineScroll) ?? ew(s.IX.timelineScroll)))
      )
        return
      if ("bottom" === e)
        return void (n ? (t.scrollTop = t.scrollHeight) : (0, u.dG)(t, { type: "edge", edge: "bottom" }))
      let r = "ArrowUp" === e ? -160 : 160
      ;(t.dispatchEvent(new WheelEvent("wheel", { bubbles: !0, deltaY: r })),
        n ? (t.scrollTop += r) : (0, u.dG)(t, { type: "pixels", y: r }))
    }
    function eA() {
      let e = document.activeElement?.closest(es)
      return null != e && null == e.closest(ec) ? e : ew(es)
    }
    function ek() {
      return (
        Array.from(document.querySelectorAll('[role="menu"][data-state="open"]')).find(
          (e) => null == e.closest(ec) && null != e.querySelector("[data-model-picker-view]"),
        ) ?? null
      )
    }
    function eN(e) {
      return null != e.querySelector('[data-model-picker-view="simple"]')
    }
    function eM(e) {
      return null != e.querySelector('[data-model-picker-view="advanced"]')
    }
    function eP() {
      return ew("[data-codex-composer-request-navigation], [data-codex-approval-surface]")
    }
    function ew(e) {
      return document.querySelector(`:is(${e}):not(${ec} *)`)
    }
  },
  owF8(e, t, n) {
    var r = n("AGyq"),
      l = n("q3HK")
    let i = r.zQ.filter(
      (e) => ("webview" === e.kind && (0, r._Q)(e, "electron")) || ("electron-only" === e.kind && (0, l.Zu)(e.id)),
    )
    n.d(
      t,
      {},
      {
        $S: function (e) {
          let t = "newThread" === e ? "newTask" : e
          return i.find((e) => e.id === t) ?? null
        },
        Fh: i,
        ed: function (e) {
          let t = /^recentThread([1-6])$/.exec(e)
          return null == t ? null : Number(t[1]) - 1
        },
      },
    )
  },
  IqFu(e, t, n) {
    var r = n("zTeN"),
      l = n("DBCl"),
      i = n("tl5a"),
      o = n("m22M"),
      a = n("OWtl"),
      c = n("RxZZ"),
      s = n("kfGJ"),
      u = n("d6Ff"),
      d = n("Nwp9")
    let m = { AG00: null, AG01: null, AG02: null, AG03: null, AG04: null, AG05: null },
      p = (0, d.m3)("codex-micro-custom-agent-assignments", m),
      g = (0, r.vP)(a.u, null)
    function h(e, t, n) {
      let r = { ...e }
      if (null != n && "threadKey" in n)
        for (let e of l.oXS) {
          let t = r[e]
          null != t && "threadKey" in t && t.threadKey === n.threadKey && t.hostId === n.hostId && (r[e] = null)
        }
      return ((r[t] = n), r)
    }
    function f(e) {
      return l.oXS[e] ?? null
    }
    n.d(
      t,
      {},
      {
        Bj: function (e, t, n) {
          if ("custom" !== (0, c.CN)(e.get, l.$VP.agentSource)) return
          let r = f(t),
            o = null == r ? null : (e.get(p) ?? m)[r]
          if (null == o || !("threadKey" in o) || o.threadKey !== n || null == o.hostId) return
          let a = (0, u.OC)(o.threadKey)
          null != a && (0, i.Nu)(e, (0, l.JXB)(a), o.hostId)
        },
        WN: p,
        Wd: function (e, t, n) {
          e.set(p, h(e.get(p) ?? m, t, n))
          let r = e.get(g)
          r?.agentKeyId === t && e.set(g, null)
        },
        XA: f,
        ZK: function (e, t, n) {
          return !!(0, l.L$F)(n) && (e.set(g, { agentKeyId: t, clientThreadId: n }), !0)
        },
        iC: function (e, t, n) {
          if (!(0, l.L$F)(t) || "custom" !== (0, c.CN)(e.get, l.$VP.agentSource)) return !1
          let r = e.get(g),
            a = (function ({ assignments: e, clientThreadId: t, conversationId: n, hostId: r, pending: l, title: i }) {
              return l?.clientThreadId !== t
                ? null
                : h(e, l.agentKeyId, { hostId: r, threadKey: (0, u.z3)(n), title: i })
            })({
              assignments: e.get(p) ?? m,
              clientThreadId: t,
              conversationId: n,
              hostId: e.get(i.Qk, n) ?? s.fI,
              pending: r,
              title: e.get(o.N, n),
            })
          return null != a && (e.set(p, a), e.get(g) === r && e.set(g, null), !0)
        },
        wc: m,
      },
    )
  },
  Exdi(e, t, n) {
    var r = n("Nwp9")
    let l = (0, r.m3)("codex-micro-has-ever-been-detected", !1),
      i = (0, r.m3)("codex-micro-last-detected-device-model", void 0)
    n.d(t, {}, { H: i, w: l })
  },
  Om6N(e, t, n) {
    var r = n("zTeN"),
      l = n("L0nj"),
      i = n("OWtl")
    let o = { action: null, direction: "right", event: { angle: 0, distance: 0 }, status: "tracking", visible: !1 },
      a = (0, r.vP)(i.u, o)
    function c(e) {
      return e.visible ? { ...e, visible: !1 } : e
    }
    n.d(
      t,
      {},
      {
        FV: a,
        hT: function (e) {
          e.set(a, c)
        },
        qJ: function (e, t, n) {
          var r
          e.set(
            a,
            ((r = e.get(a)),
            {
              action: null,
              direction: (0, l.pU)(t, 0.1) ?? r.direction,
              event: t,
              gameActivationProgress: Math.min(Math.max(n, 0), 1),
              status: "game-gesture",
              visible: !0,
            }),
          )
        },
        ub: function (e) {
          e.set(a, o)
        },
        yn: function (e, t) {
          let n = (function (
            e,
            { activeDirection: t, enabled: n, event: r, executionStatus: i, mapping: o, previousActiveDirection: a },
          ) {
            if (!n) return c(e)
            if (r.distance < 0.1) return e.visible ? { ...e, event: r } : e
            let s = (0, l.pU)(r, 0.1)
            if (null == s) return e
            let u = o[s]
            if (t === s && a !== s)
              return {
                action: u,
                direction: s,
                event: r,
                status: null == u ? "unassigned" : (i ?? "unavailable"),
                visible: !0,
              }
            let d = e.visible && e.direction === s && t === s && a === s && "tracking" !== e.status
            return { action: u, direction: s, event: r, status: d ? e.status : "tracking", visible: !0 }
          })(e.get(a), t)
          return (e.set(a, n), n)
        },
      },
    )
  },
  eOuj(e, t, n) {
    n.d(
      t,
      {},
      {
        L: function (e) {
          switch (e.action.type) {
            case "command":
              return [e.action.command]
            case "composer-text":
              return [e.action.label, e.action.text]
            case "custom-shortcut":
              return ["blank", "custom", "empty", "shortcut"]
            case "external-url":
              return [e.action.label, e.action.url]
            case "named":
              return [e.action.label]
          }
        },
        O: [
          {
            id: "FAST",
            icon: "lightning-outline",
            size: "single",
            action: { type: "command", command: "composer.toggleFastMode" },
          },
          {
            id: "APPR",
            icon: "check-circle",
            size: "single",
            action: { type: "command", command: "approval.approve" },
          },
          { id: "REJ", icon: "x-circle", size: "single", action: { type: "command", command: "approval.decline" } },
          { id: "SPLIT", icon: "worktree", size: "single", action: { type: "command", command: "forkThread" } },
          { id: "MIC", icon: "mic", size: "double", action: { type: "named", label: "Push to talk" } },
          { id: "MIC1", icon: "mic", size: "single", action: { type: "named", label: "Push to talk" } },
          { id: "CODEX", icon: "codex", size: "single", action: { type: "command", command: "composer.submit" } },
          { id: "BUG", icon: "bug", size: "single", action: { type: "command", command: "feedback" } },
          {
            id: "OAI",
            icon: "openai",
            size: "single",
            action: { type: "external-url", label: "Open OpenAI docs", url: "https://developers.openai.com" },
          },
          { id: "TERM", icon: "terminal", size: "single", action: { type: "command", command: "toggleTerminal" } },
          {
            id: "DWN",
            icon: "download",
            size: "single",
            action: { type: "command", command: "copyConversationMarkdown" },
          },
          { id: "DEL", icon: "trash", size: "single", action: { type: "command", command: "archiveThread" } },
          { id: "NEW", icon: "compose", size: "single", action: { type: "command", command: "newTask" } },
          { id: "NAV", icon: "pointer-outline", size: "single", action: { type: "command", command: "newTab" } },
          { id: "MAGIC", icon: "star", size: "single", action: { type: "command", command: "toggleThreadPin" } },
          { id: "DIFF", icon: "diff", size: "single", action: { type: "command", command: "toggleReviewTab" } },
          {
            id: "PLAY",
            icon: "play-outline",
            size: "single",
            action: { type: "command", command: "environmentAction1" },
          },
          { id: "GIT", icon: "diff", size: "single", action: { type: "command", command: "git.commit" } },
          {
            id: "BRCH",
            icon: "pull-request-draft",
            size: "single",
            action: { type: "command", command: "git.createDraftPullRequest" },
          },
          { id: "BRANCH", icon: "branch", size: "single", action: { type: "command", command: "git.createBranch" } },
          {
            id: "MRG",
            icon: "pull-request-merged",
            size: "single",
            action: { type: "command", command: "git.mergePullRequest" },
          },
          {
            id: "PR",
            icon: "pull-request",
            size: "single",
            action: { type: "command", command: "git.createPullRequest" },
          },
          { id: "PAINT", icon: "paint", size: "single", action: { type: "command", command: "composer.addPhotos" } },
          { id: "LAB", icon: "flask", size: "single", action: { type: "command", command: "settings" } },
          { id: "PARTY", icon: "confetti", size: "single", action: { type: "command", command: "openSideChat" } },
          { id: "TIME", icon: "clock", size: "single", action: { type: "command", command: "manageTasks" } },
          {
            id: "MIND+",
            icon: "brain-medium",
            size: "single",
            action: { type: "command", command: "composer.increaseReasoningEffort" },
          },
          {
            id: "MIND-",
            icon: "brain-outline",
            size: "single",
            action: { type: "command", command: "composer.decreaseReasoningEffort" },
          },
          { id: "EMPT1", icon: "empty", size: "single", action: { type: "custom-shortcut" } },
          { id: "EMPT2", icon: "empty", size: "single", action: { type: "custom-shortcut" } },
          { id: "EMPT3", icon: "empty", size: "single", action: { type: "custom-shortcut" } },
          { id: "EMPT4", icon: "empty", size: "single", action: { type: "custom-shortcut" } },
          { id: "SETUP", icon: "settings", size: "single", action: { type: "command", command: "settings" } },
          { id: "FOLD", icon: "folder-plus", size: "single", action: { type: "command", command: "openFolder" } },
          {
            id: "UPL",
            icon: "cloud-upload",
            size: "single",
            action: { type: "command", command: "composer.addFiles" },
          },
          { id: "APPS", icon: "all-products", size: "single", action: { type: "command", command: "openSkills" } },
          {
            id: "YOLO",
            icon: "empty",
            size: "single",
            action: { type: "composer-text", label: "Write :yolo: in the composer", text: ":yolo:" },
          },
          {
            id: "YEET",
            icon: "empty",
            size: "single",
            action: { type: "composer-text", label: "Write :yeet: in the composer", text: ":yeet:" },
          },
          { id: "EMPT5", icon: "empty", size: "double", action: { type: "custom-shortcut" } },
        ],
      },
    )
  },
  PNcY(e, t, n) {
    var r = n("DBCl"),
      l = n("owF8"),
      i = n("eOuj")
    let o = ["ACT06", "ACT07", "ACT08", "ACT09", "ACT10", "ACT11", "ACT10_ACT11", "ACT12"]
    function a(e) {
      return i.O.find((t) => t.id === e) ?? i.O["0"]
    }
    n.d(
      t,
      { iQ: () => r.iQE },
      {
        Sc: function (e) {
          return r.f5N.safeParse(e).data ?? r.iQE
        },
        XA: function (e) {
          switch (e) {
            case "ACT06":
            case "ACT07":
            case "ACT08":
            case "ACT09":
            case "ACT10":
            case "ACT11":
            case "ACT12":
              return e
            default:
              return null
          }
        },
        Yv: function (e, t, n) {
          let r = { ...e.slots },
            l = r[t],
            i = o.find(
              (l) =>
                (e.separateMicrophoneKeys ? "ACT10_ACT11" !== l : "ACT10" !== l && "ACT11" !== l) &&
                l !== t &&
                r[l].keycapId === n.keycapId,
            )
          return ((r[t] = n), null != i && (r[i] = l), { ...e, slots: r })
        },
        aD: function (e) {
          let t = "ACT10_ACT11" === e ? "double" : "single"
          return i.O.filter((e) => e.size === t)
        },
        g5: function (e, t, n) {
          return { ...e, encoder: { ...e.encoder, [t]: n } }
        },
        jK: a,
        pr: function (e) {
          let t = a(e.keycapId)
          if (e.action?.type === "composer-text" || e.action?.type === "skill") return e.action
          let n = e.action?.type === "command" ? e.action.commandId : e.commandId
          if (null != n) {
            let e = (0, l.$S)(n)
            if (null != e) return { type: "command", command: e.id }
            if ("custom-shortcut" === t.action.type) return null
          }
          if ("MIC" === t.id || "MIC1" === t.id) return { type: "push-to-talk" }
          switch (t.action.type) {
            case "command":
            case "composer-text":
            case "external-url":
              return t.action
            case "custom-shortcut":
            case "named":
              return null
          }
        },
        s3: function (e, t, n) {
          return { ...e, analogStick: { ...e.analogStick, [t]: n } }
        },
      },
    )
  },
  yBYg(e, t, n) {
    var r = n("zTeN"),
      l = n("jEN2"),
      i = n("OWtl")
    let o = ["brick-breaker", "asteroids", "snake"],
      a = new Map(),
      c = (0, r.vP)(i.u, null),
      s = { accumulatedTurns: 0, direction: 0, lastAngle: null, lastAt: null, startedAt: null }
    function u(e) {
      return "AG00" === e.key && 1 === e.act
    }
    function d(e, t) {
      return { accumulatedTurns: 0, direction: 0, lastAngle: e, lastAt: t, startedAt: t }
    }
    function m(e) {
      return Math.min(Math.abs(e) / 1.9, 1)
    }
    n.d(
      t,
      {},
      {
        DG: function (e) {
          e.set(c, null)
        },
        FM: c,
        PK: function (e, t) {
          return e?.game === "asteroids" && u(t)
        },
        Uv: function (e) {
          return null == e
            ? null
            : Array.from({ length: 6 }, (t, n) => ({
                id: n,
                threadKey: null,
                title: null,
                status: "asteroids" === e.game && 0 === n ? "working" : "off",
                selected: !1,
              }))
        },
        aj: function () {
          for (let [e, t] of a) if (e.isConnected && (0, l.BZ)(e)) return t
          return null
        },
        kf: function (e = Math.random) {
          return o[Math.floor(e() * o.length)] ?? "brick-breaker"
        },
        n6: s,
        pZ: function (e, t, n) {
          var r
          let l
          if (t.distance < 0.2) return { activated: !1, captured: !1, progress: 0, state: s }
          if (
            null == e.lastAngle ||
            null == e.lastAt ||
            null == e.startedAt ||
            n - e.lastAt > 1e3 ||
            n - e.startedAt > 6e3
          )
            return { activated: !1, captured: !1, progress: 0, state: d(t.angle, n) }
          let i = ((r = e.lastAngle), (l = t.angle - r) > 0.5 ? l - 1 : l < -0.5 ? l + 1 : l)
          if (0.002 > Math.abs(i))
            return {
              activated: !1,
              captured: Math.abs(e.accumulatedTurns) >= 0.04,
              progress: m(e.accumulatedTurns),
              state: { ...e, lastAngle: t.angle, lastAt: n },
            }
          let o = i > 0 ? 1 : -1
          if (0 !== e.direction && o !== e.direction && Math.abs(i) >= 0.02)
            return { activated: !1, captured: !1, progress: 0, state: d(t.angle, n) }
          let a = e.accumulatedTurns + i
          return Math.abs(a) >= 1.9
            ? { activated: !0, captured: !0, progress: 1, state: s }
            : {
                activated: !1,
                captured: Math.abs(a) >= 0.04,
                progress: m(a),
                state: {
                  accumulatedTurns: a,
                  direction: 0 === e.direction ? o : e.direction,
                  lastAngle: t.angle,
                  lastAt: n,
                  startedAt: e.startedAt,
                },
              }
        },
        u$: function (e, t, n) {
          return (
            a.set(t, e),
            () => {
              ;(a.delete(t),
                queueMicrotask(() => {
                  for (let t of a.values()) if (t === e) return
                  n?.()
                }))
            }
          )
        },
        y7: u,
      },
    )
  },
  z3Uu(e, t, n) {
    var r = n("zz1h"),
      l = n("Ypxi")
    n.d(
      t,
      {},
      {
        KV: function ({ threadKeys: e, attentionStateByThreadKey: t, recencyAtByThreadKey: n }) {
          return (0, l.OJ)(
            e.map((e) => ({ threadKey: e, attentionState: t.get(e) ?? "idle", recencyAt: n.get(e) ?? 0 })),
          ).map(({ threadKey: e }) => e)
        },
        hp: function ({
          source: e,
          pinnedThreadKeys: t,
          pinnedProjectThreadKeys: n,
          recentlyUpdatedThreadKeys: r,
          priorityThreadKeys: l,
          customAgentThreadKeys: i,
        }) {
          switch (e) {
            case "pinned":
              return [...t, ...n].slice(0, 6)
            case "recent":
              return r.slice(0, 6)
            case "priority":
              return l.slice(0, 6)
            case "custom":
              return i.slice(0, 6)
          }
        },
        oG: function (e) {
          return JSON.stringify({
            brightness: e.brightness,
            lightsOffWhenLocked: !!e.lightsOffWhenLocked,
            inactivityTimeoutMs: e.inactivityTimeoutMs,
            preserveSelectionLighting: !!e.preserveSelectionLighting,
            snakingAmbientStatus: e.snakingAmbientStatus,
            suspendDeviceStatusRefresh: !!e.suspendDeviceStatusRefresh,
            slots: e.slots.map(({ id: e, pulsing: t, selected: n, status: r, threadKey: l }) => ({
              id: e,
              pulsing: !!t,
              selected: n,
              status: r,
              threadKey: l,
            })),
            voiceState: e.voiceState,
          })
        },
        rQ: function ({ isAppWindowFocused: e, threadKeys: t, threads: n, selectedThreadKey: l }) {
          return Array.from({ length: 6 }, (i, o) => {
            let a = t[o]
            if (null == a) return { id: o, threadKey: null, title: null, status: "off", selected: !1 }
            let c = n.find((e) => e.threadKey === a && (null == e.slotId || e.slotId === o)) ?? {
                threadKey: a,
                title: null,
              },
              s = a === l,
              u = (function (e) {
                if (null != e.localStatus) {
                  let { aeonStatus: t, attention: n, unread: l, unreadMessages: i } = e.localStatus,
                    o = (0, r.O)(t ?? "off") ?? e.localStatus.status
                  return "error" === o
                    ? "error"
                    : n?.kind === "approval"
                      ? "awaiting-approval"
                      : n?.kind === "input"
                        ? "awaiting-response"
                        : i
                          ? "unread"
                          : "loading" === o
                            ? "working"
                            : (i ?? l)
                              ? "unread"
                              : "idle"
                }
                let t = e.remoteStatus
                return null == t
                  ? "idle"
                  : "failed" === t.latestTurnStatus
                    ? "error"
                    : "pending" === t.latestTurnStatus || "in_progress" === t.latestTurnStatus
                      ? "working"
                      : t.unread
                        ? "unread"
                        : "idle"
              })(c)
            return {
              id: o,
              threadKey: a,
              title: c.title,
              status: s && e && "unread" === u && c.localStatus?.unreadMessages !== !0 ? "idle" : u,
              selected: s,
            }
          })
        },
      },
    )
  },
  muZm(e, t, n) {
    var r = n("zTeN"),
      l = n("OWtl")
    let i = [
        [0.25, 0.33],
        [0.58, 0.66],
        [0.92, 1],
      ].map(([e, t]) => Math.round(((e + t) / 2) * 12e3)),
      o = [
        ["working", "awaiting-approval", "error"],
        ["unread", "working", "idle"],
        ["awaiting-approval", "idle", "working"],
        ["idle", "error", "unread"],
        ["working", "unread", "awaiting-response"],
        ["awaiting-response", "working", "idle"],
      ],
      a = [
        ["FAST", "PLAY", "BUG"],
        ["APPR", "SPLIT", "SETUP"],
        ["REJ", "NEW", "CODEX"],
        ["SPLIT", "BUG", "FAST"],
        ["MIC", "NEW", "PLAY"],
        ["CODEX", "APPR", "SETUP"],
      ],
      c = (0, r.vP)(l.u, null),
      s = (0, r.un)(l.u, ({ get: e }) => {
        let t = e(c)
        return null == t ? null : d(t)
      }),
      u = (0, r.un)(l.u, ({ get: e }) => e(s)?.agentSlots ?? null)
    function d(e) {
      let t = -1 === e,
        n = t ? 0 : e
      return {
        actionKeycapIds: a.map((e, r) => m(e, n, t ? 0 : (r + 1) * 700)),
        agentSlots: o.map((e, r) => ({
          id: r,
          threadKey: null,
          title: null,
          status: m(e, n, t ? 0 : 800 * r),
          selected: !1,
        })),
      }
    }
    function m(e, t, n) {
      var r
      return e[(r = (t + n) % 12e3) < i[0] ? 0 : r < i[1] ? 1 : 2 * (r < i[2])]
    }
    n.d(
      t,
      {},
      {
        CX: u,
        GO: d,
        hV: function (e, t) {
          let n = globalThis.performance.now()
          e.set(c, t ? -1 : 0)
          let r = t
            ? null
            : globalThis.setInterval(() => {
                e.set(c, globalThis.performance.now() - n)
              }, 100)
          return () => {
            ;(null != r && globalThis.clearInterval(r), e.set(c, null))
          }
        },
        s6: s,
      },
    )
  },
  oLQu(e, t, n) {
    var r = n("Nwp9"),
      l = n("Exdi")
    let i = (0, r.m3)("codex-micro-onboarding-state", "idle")
    n.d(
      t,
      {},
      {
        E: i,
        Wu: function (e, t) {
          ;(null != t && e.set(l.H, t), !1 === e.get(l.w) && "idle" === e.get(i) && e.set(i, "pending"), e.set(l.w, !0))
        },
        cL: function (e) {
          ;(e.set(i, "idle"), e.set(l.H, void 0), e.set(l.w, !1))
        },
        tX: function ({ deviceStatus: e, hasEverBeenDetected: t, onboardingState: n }) {
          return "pending" === n || ("idle" === n && !1 === t && ("detected" === e || "connected" === e))
        },
      },
    )
  },
  L0nj(e, t, n) {
    function r(e, t = 0.5) {
      return e.distance < t
        ? null
        : e.angle >= 0.625 && e.angle < 0.875
          ? "up"
          : e.angle >= 0.125 && e.angle < 0.375
            ? "down"
            : e.angle >= 0.375 && e.angle < 0.625
              ? "left"
              : "right"
    }
    n.d(
      t,
      {},
      {
        Z4: function (e, t) {
          return "ENC_CW" === t.key && 2 === t.act
            ? { ...e, knobPulse: "clockwise" }
            : "ENC_CC" === t.key && 2 === t.act
              ? { ...e, knobPulse: "counterclockwise" }
              : 1 !== t.act || e.pressedKeys.includes(t.key)
                ? 0 === t.act && e.pressedKeys.includes(t.key)
                  ? { ...e, pressedKeys: e.pressedKeys.filter((e) => e !== t.key) }
                  : e
                : { ...e, pressedKeys: [...e.pressedKeys, t.key] }
        },
        fM: { pressedKeys: [], joystick: { angle: 0, distance: 0 }, selectedAnalogDirection: "up", knobPulse: null },
        jL: function (e, t) {
          return e.selectedAnalogDirection === t ? e : { ...e, selectedAnalogDirection: t }
        },
        mE: function (e) {
          return null == e.knobPulse ? e : { ...e, knobPulse: null }
        },
        pU: r,
        yc: function (e, t) {
          let n = r(t) ?? e.selectedAnalogDirection
          return e.joystick.angle === t.angle && e.joystick.distance === t.distance && e.selectedAnalogDirection === n
            ? e
            : { ...e, joystick: t, selectedAnalogDirection: n }
        },
      },
    )
  },
  CyfE(e, t, n) {
    var r = n("zTeN"),
      l = n("OWtl"),
      i = n("Exdi"),
      o = n("L0nj")
    let a = (0, r.vP)(l.u, { status: "not-detected", transport: null, model: null, error: null, battery: null }),
      c = (0, r.vP)(l.u, !1),
      s = (0, r.un)(l.u, ({ get: e }) => e(c) && "not-detected" === e(a).status),
      u = (0, r.vP)(l.u, !1),
      d = (0, r.un)(l.u, ({ get: e }) => e(a).model ?? e(i.H) ?? null),
      m = (0, r.vP)(l.u, o.fM),
      p = (0, r.un)(l.u, ({ get: e }) => e(m).joystick),
      g = (0, r.vP)(l.u, !1),
      h = (0, r.vP)(l.u, "idle")
    n.d(
      t,
      {},
      {
        Fc: function (e, t) {
          ;(e.set(a, t), e.set(c, !0), "connected" !== t.status && e.set(m, o.fM))
        },
        HI: m,
        NS: function (e, t) {
          e.set(m, (e) => (0, o.Z4)(e, t))
        },
        QY: function (e) {
          e.set(m, o.mE)
        },
        VZ: u,
        WN: p,
        Yf: function (e, t) {
          e.set(m, (e) => (0, o.yc)(e, t))
        },
        cA: s,
        d5: g,
        dP: d,
        fX: function (e, t) {
          e.set(h, t)
        },
        r$: function (e, t) {
          e.set(m, (e) => (0, o.jL)(e, t))
        },
        rx: a,
        vo: function (e, t) {
          e.set(g, t)
        },
        xw: h,
      },
    )
  },
  Dn1B(e, t, n) {
    var r = n("zTeN"),
      l = n("DBCl"),
      i = n("tl5a"),
      o = n("RU3e"),
      a = n("z3Uu"),
      c = n("CyfE"),
      s = n("eA5w"),
      u = n("EU9a"),
      d = n("sZJm"),
      m = n("mCgi"),
      p = n("JQtI"),
      g = n("TYK1"),
      h = n("uMQ8"),
      f = n("OWtl"),
      y = n("RxZZ"),
      T = n("FHI1"),
      v = n("DZgh"),
      C = n("CnPR"),
      S = n("WRqP"),
      O = n("cpC0"),
      E = n("B1od"),
      b = n("EDyN"),
      _ = n("XyS0"),
      I = n("u7Oa"),
      A = n("RFDv"),
      k = n("r6TF"),
      N = n("N42N"),
      M = n("VNGl"),
      P = n("Rrp3"),
      w = n("Og9d"),
      x = n("owF8"),
      R = n("IqFu")
    let D = (0, r.un)(f.u, ({ get: e }) => {
        let { pinnedThreadKeys: t } = e(N.bd),
          n = (0, y.CN)(e, l.$VP.agentSource),
          r = e(R.WN) ?? R.wc,
          c = e(O.T$),
          f = e(O.Lk),
          D = e(C.Xz, { canStartProjectlessChat: c, localProjectActionsEnabled: f, sidebarMode: "codex" }),
          L = t,
          K = []
        if ("recent" === n) K = e(I.c)
        else if ("pinned" === n) {
          let t = e(D),
            n = e((0, E.Bf)(t.pinnedThreadKeys)),
            r = (0, _.jN)(t.pinnedProjectGroups, e(v.sS, "codex").pinnedProjectThreadKeys),
            l = new Map(t.pinnedThreadKeys.map((e) => [(0, T.h8)(e), e])),
            i = new Map(r.map((e) => [(0, T.eZ)(e.projectId), e.threadKeys]))
          L = (0, P.pb)({
            entries: [
              ...t.pinnedThreadKeys.map((e) => ({ key: (0, T.h8)(e) })),
              ...r.map((e) => ({ key: (0, T.eZ)(e.projectId) })),
            ],
            pinnedOrder: e(w.lI),
            pinnedSortMode: e(b.we),
            pinnedKeyAliases: n?.visibleKeyByStoredKey,
            serverOrderedPinnedThreadHostIds: n?.hostIdByKey,
            serverOrderedPinnedThreadKeys: n?.keys,
          }).flatMap((e) => {
            let t = l.get(e)
            return null == t ? (i.get(e) ?? []) : [t]
          })
        }
        let z = []
        if ("priority" === n) {
          let t = e(v.sS, "codex")
          z = (0, a.KV)({
            threadKeys: t.threadKeys,
            attentionStateByThreadKey: new Map(t.threadKeys.map((t) => [t, (0, M.Hx)(e, t)])),
            recencyAtByThreadKey: new Map(t.threadKeys.map((t) => [t, (0, k.Kr)(e, t)])),
          })
        }
        let F = (0, a.hp)({
            source: n,
            pinnedThreadKeys: L,
            pinnedProjectThreadKeys: [],
            recentlyUpdatedThreadKeys: K,
            priorityThreadKeys: z,
            customAgentThreadKeys: l.oXS.map((t) => {
              let l = r[t]
              if (null == l) return null
              if ("threadKey" in l) return l.threadKey
              let i = "custom" === n && "command" === l.type ? (0, x.ed)(l.commandId) : null
              return null == i ? null : (e(I.c)[i] ?? null)
            }),
          }),
          G = F.flatMap((t, o) => {
            if (null == t) return []
            let a = e(k.oI, t)
            if (null == a) return []
            switch (a.kind) {
              case "local": {
                if (null == a.summary)
                  return [
                    { slotId: o, threadKey: t, title: a.pendingThreadStart?.title ?? a.pendingWorktree?.label ?? "" },
                  ]
                let c = l.oXS[o],
                  f = "custom" === n && null != c ? r[c] : null,
                  y =
                    (null != f && "threadKey" in f ? f.hostId : null) ??
                    a.summary.hostId ??
                    e(i.qX, a.summary.conversationId),
                  T = { hostId: y, threadId: a.summary.conversationId },
                  v = e(i.ok, T)?.summary ?? e(i.pC, { hostId: y, conversationId: a.summary.conversationId }),
                  C = v ?? a.summary,
                  O =
                    y === (0, s.Y)()
                      ? e(g.cloudAeonByThreadId$, a.summary.conversationId, {
                          enabled: (0, p.N)(C.threadStartKind, C.threadSource),
                        }).data
                      : null,
                  E = (0, g.h2)(O, a.summary.conversationId) ? e(h.ZK, O.id).data?.hasUnread : void 0
                return [
                  {
                    slotId: o,
                    threadKey: t,
                    title: e(S.e, T),
                    localStatus: {
                      aeonStatus: y === (0, s.Y)() ? e(m.dH, a.summary.conversationId) : void 0,
                      attention: e(d.Z, { conversationId: a.summary.conversationId, hostId: y }),
                      status: e(u.tP, { hostId: y, conversationId: a.summary.conversationId }),
                      unread: v?.hasUnreadTurn === !0,
                      unreadMessages: E,
                    },
                  },
                ]
              }
              case "remote": {
                let e = a.task.task_status_display?.latest_turn_status_display?.turn_status
                return [
                  {
                    slotId: o,
                    threadKey: t,
                    title: a.task.title ?? null,
                    remoteStatus: {
                      latestTurnStatus: "pending" === e || "in_progress" === e || "failed" === e ? e : null,
                      unread: !0 === a.task.has_unread_turn,
                    },
                  },
                ]
              }
            }
          })
        if ("custom" === n) {
          let e = new Set(G.map((e) => e.threadKey))
          for (let t of Object.values(r))
            null != t && "threadKey" in t && !e.has(t.threadKey) && G.push({ threadKey: t.threadKey, title: t.title })
        }
        let X = (0, a.rQ)({ isAppWindowFocused: !0 === e(o.$O), threadKeys: F, threads: G, selectedThreadKey: e(A.oN) })
        return "custom" !== n
          ? X
          : X.map((t) => {
              let n = l.oXS[t.id],
                i = null == n ? null : r[n]
              if (null == i || "threadKey" in i || ("command" === i.type && null != (0, x.ed)(i.commandId))) return t
              let o = "command" === i.type && "openOrbit" === i.commandId && e(h.Js).data?.hasUnread === !0
              return {
                ...t,
                title: "command" === i.type ? i.commandId : "skill" === i.type ? `$${i.skillName}` : i.keycapId,
                status: o ? "unread" : "idle",
              }
            })
      }),
      L = (0, r.un)(f.u, ({ get: e }) => ({
        brightness: (0, y.CN)(e, l.$VP.lightingBrightness) / 100,
        lightsOffWhenLocked: (0, y.CN)(e, l.$VP.lightsOffWhenLocked),
        inactivityTimeoutMs: (0, l.P1u)((0, y.CN)(e, l.$VP.lightingAutoOff)),
        slots: e(D),
        voiceState: e(c.xw),
      }))
    n.d(t, {}, { f: D, t: L })
  },
  hFXd(e, t, n) {
    n.d(t, {}, { F: "ComposerNavigation" })
  },
  zz1h(e, t, n) {
    n.d(
      t,
      {},
      {
        O: function (e) {
          switch (e) {
            case "off":
              return null
            case "working":
              return "loading"
            case "sleeping":
            case "stopped":
              return "idle"
            case "failed":
              return "error"
          }
        },
      },
    )
  },
  l0pH(e, t, n) {
    var r = n("zTeN"),
      l = n("ChYf"),
      i = n("OWtl")
    let o = (0, r.un)(i.u, ({ get: e }) => e(l.G, { name: "voice.realtime" }).isCapable)
    n.d(
      t,
      {},
      {
        g: function () {
          return (0, r.Ul)(o)
        },
        x: o,
      },
    )
  },
  WRqP(e, t, n) {
    var r = n("zTeN"),
      l = n("tl5a"),
      i = n("L2Eu"),
      o = n("m22M"),
      a = n("Jfr7"),
      c = n("gdZA"),
      s = n("OWtl"),
      u = n("D8dk")
    let d = (0, r.i1)(s.u, (e, { get: t }) => {
      if (null == e) return null
      let n = t(a.Qq, e.threadId)
      if (null != n && t(l.qX, e.threadId) === e.hostId) return (t(l.Ji, e), n)
      let r = t(c.$P, e)
      if (null != r) return r
      let s = t(l.Ji, e)
      if (null == s) return null
      let d = s.hasConversation ? (0, i.Lm)({ id: e.threadId, title: s.liveTitle, turns: null }) : s.liveTitle
      return (
        null == d && s.hasConversation && t(l.qX, e.threadId) === e.hostId && (d = t(o.Q, e.threadId)),
        (0, u.M)({ ...s, localTitle: d })
      )
    })
    n.d(t, {}, { e: d })
  },
  u7Oa(e, t, n) {
    var r = n("zTeN"),
      l = n("OWtl"),
      i = n("DZgh"),
      o = n("r6TF"),
      a = n("N42N"),
      c = n("UxLy")
    let s = (0, r.un)(
      l.u,
      ({ get: e }) => {
        let { pinnedThreadKeys: t } = e(a.bd),
          { pinnedProjectThreadKeys: n, threadKeys: r } = e(i.sS, "codex"),
          l = e(o.ST).byKey
        return [...new Set([...r, ...t, ...n])]
          .map((t) => ({ threadKey: t, updatedAt: l.get(t)?.summary.updatedAt ?? e(o.RD, t) }))
          .sort((e, t) => t.updatedAt - e.updatedAt)
          .map(({ threadKey: e }) => e)
      },
      { isEqual: c.v },
    )
    n.d(t, {}, { c: s })
  },
  D8dk(e, t, n) {
    var r = n("CoqP")
    n.d(
      t,
      {},
      {
        M: function ({ hasConversation: e, liveTitle: t, localTitle: n, summaryTitle: l }) {
          return e && (0, r.J)(t, l) ? (l ?? null) : (n ?? l ?? null)
        },
      },
    )
  },
}
//# sourceMappingURL=592019.7f16cd48ba.js.map
