export const __rspack_esm_ids = [437750]
export const __webpack_modules__ = {
  wxUR(e, o, t) {
    var i = t("owF8"),
      n = t("WVWQ"),
      a = t("hbRe")
    t.d(
      o,
      {},
      {
        Y: function (e, o, t) {
          switch (e.type) {
            case "command": {
              let o = (0, i.$S)(e.commandId)
              return null == o ? e.commandId : (0, n.I)(o, t)
            }
            case "skill": {
              let t = o.find((o) => o.name === e.skillName && o.path === e.skillPath)
              return `$${null == t ? e.skillName : (0, a.nf)(t)}`
            }
          }
        },
      },
    )
  },
  owF8(e, o, t) {
    var i = t("X2Bp"),
      n = t("q3HK")
    let a = i.zQ.filter(
      (e) => ("webview" === e.kind && (0, i._Q)(e, "electron")) || ("electron-only" === e.kind && (0, n.Zu)(e.id)),
    )
    t.d(
      o,
      {},
      {
        $S: function (e) {
          let o = "newThread" === e ? "newTask" : e
          return a.find((e) => e.id === o) ?? null
        },
        Fh: a,
        ed: function (e) {
          let o = /^recentThread([1-6])$/.exec(e)
          return null == o ? null : Number(o[1]) - 1
        },
      },
    )
  },
  Exdi(e, o, t) {
    var i = t("Nwp9")
    let n = (0, i.m3)("codex-micro-has-ever-been-detected", !1),
      a = (0, i.m3)("codex-micro-last-detected-device-model", void 0)
    t.d(o, {}, { H: a, w: n })
  },
  Om6N(e, o, t) {
    var i = t("zTeN"),
      n = t("L0nj"),
      a = t("OWtl")
    let c = { action: null, direction: "right", event: { angle: 0, distance: 0 }, status: "tracking", visible: !1 },
      d = (0, i.vP)(a.u, c)
    function s(e) {
      return e.visible ? { ...e, visible: !1 } : e
    }
    t.d(
      o,
      {},
      {
        FV: d,
        hT: function (e) {
          e.set(d, s)
        },
        qJ: function (e, o, t) {
          var i
          e.set(
            d,
            ((i = e.get(d)),
            {
              action: null,
              direction: (0, n.pU)(o, 0.1) ?? i.direction,
              event: o,
              gameActivationProgress: Math.min(Math.max(t, 0), 1),
              status: "game-gesture",
              visible: !0,
            }),
          )
        },
        ub: function (e) {
          e.set(d, c)
        },
        yn: function (e, o) {
          let t = (function (
            e,
            { activeDirection: o, enabled: t, event: i, executionStatus: a, mapping: c, previousActiveDirection: d },
          ) {
            if (!t) return s(e)
            if (i.distance < 0.1) return e.visible ? { ...e, event: i } : e
            let r = (0, n.pU)(i, 0.1)
            if (null == r) return e
            let m = c[r]
            if (o === r && d !== r)
              return {
                action: m,
                direction: r,
                event: i,
                status: null == m ? "unassigned" : (a ?? "unavailable"),
                visible: !0,
              }
            let l = e.visible && e.direction === r && o === r && d === r && "tracking" !== e.status
            return { action: m, direction: r, event: i, status: l ? e.status : "tracking", visible: !0 }
          })(e.get(d), o)
          return (e.set(d, t), t)
        },
      },
    )
  },
  h062(e, o, t) {
    var i = t("ABep"),
      n = t("QosV"),
      a = t("QgCC"),
      c = t("on57"),
      d = t("zTeN"),
      s = t("Wf1j"),
      r = t("oyxz"),
      m = t("Qgfj"),
      l = t("CyfE"),
      p = t("HOLv"),
      h = t("iB9g"),
      u = t("bPa2"),
      g = t("wxUR"),
      f = t("Om6N")
    let x = { up: "", right: "rotate-90", down: "rotate-180", left: "-rotate-90" },
      M = {
        "game-gesture": "text-info",
        tracking: "text-secondary",
        triggered: "text-info",
        unassigned: "text-secondary",
        unavailable: "text-warning",
      }
    function w(e) {
      let o,
        t,
        d,
        m,
        l,
        u,
        f,
        w,
        b,
        v,
        T,
        C,
        k,
        y,
        S,
        P,
        N,
        A,
        F,
        R,
        j,
        O,
        B,
        W,
        G = (0, n.c)(72),
        { feedback: L, isMappingEditorOpen: V, skills: I } = e,
        E = (0, s.A)(),
        K = L.visible && !V,
        q = L.event.angle * Math.PI * 2,
        _ = 13 * Math.min(L.event.distance, 1),
        U = "game-gesture" === L.status,
        H = U ? (L.gameActivationProgress ?? 0) : Math.min(L.event.distance / 0.5, 1)
      G[0] !== L.action || G[1] !== E || G[2] !== U || G[3] !== I
        ? ((o = U
            ? (0, i.jsx)(r.A, { ...D.miniGameTitle })
            : null == L.action
              ? (0, i.jsx)(r.A, {
                  id: "codexMicro.joystickFeedback.unassignedTitle",
                  defaultMessage: "Unassigned",
                  description: "Action title shown for an unassigned Codex Micro joystick direction",
                })
              : (0, g.Y)(L.action, I, E)),
          (G[0] = L.action),
          (G[1] = E),
          (G[2] = U),
          (G[3] = I),
          (G[4] = o))
        : (o = G[4])
      let z = o,
        Y = D[L.status]
      "tracking" === L.status && null == L.action && (Y = D.unassignedTracking)
      let Q = "triggered" === L.status,
        $ = "unavailable" === L.status,
        X = Q || U,
        Z = !K,
        J = K ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
      G[5] !== J
        ? ((t = (0, c.A)(
            "pointer-events-none absolute top-14 left-1/2 z-[55] w-[min(19rem,calc(100%_-_2rem))] -translate-x-1/2 transition-[opacity,transform] duration-basic ease-out motion-reduce:translate-y-0 motion-reduce:transition-opacity",
            J,
          )),
          (G[5] = J),
          (G[6] = t))
        : (t = G[6])
      let ee = L.status,
        eo = X && "border-text-info/35 shadow-[0_10px_30px_rgba(30,88,190,0.18)]",
        et = $ && "border-text-warning/35",
        ei = !X && !$ && "border-default"
      G[7] !== eo || G[8] !== et || G[9] !== ei
        ? ((d = (0, c.A)(
            "flex items-center gap-3 rounded-2xl border bg-surface-elevated-secondary p-2.5 shadow-xl transition-[border-color,box-shadow] duration-basic ease-out",
            eo,
            et,
            ei,
          )),
          (G[7] = eo),
          (G[8] = et),
          (G[9] = ei),
          (G[10] = d))
        : (d = G[10])
      let en = X
        ? "border-text-info/45 shadow-[inset_0_0_0_1px_rgba(141,181,255,0.12),0_0_14px_rgba(91,141,235,0.18)]"
        : "border-default"
      ;(G[11] !== en
        ? ((m = (0, c.A)(
            "relative size-14 shrink-0 overflow-hidden rounded-full border shadow-inner transition-[border-color,box-shadow] duration-basic ease-out",
            en,
          )),
          (G[11] = en),
          (G[12] = m))
        : (m = G[12]),
        G[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)("div", { className: "absolute inset-[1.15rem] rounded-full border border-border/70" })),
            (u = (0, i.jsx)("div", {
              className: "absolute top-1/2 right-2 left-2 h-px -translate-y-1/2 bg-border/45",
            })),
            (f = (0, i.jsx)("div", {
              className: "absolute top-2 bottom-2 left-1/2 w-px -translate-x-1/2 bg-border/45",
            })),
            (G[13] = l),
            (G[14] = u),
            (G[15] = f))
          : ((l = G[13]), (u = G[14]), (f = G[15])))
      let ea = X && "bg-text-info shadow-[0_0_9px_rgba(91,141,235,0.72)]",
        ec = $ && "bg-text-warning",
        ed = !X && !$ && "bg-primary-solid"
      G[16] !== ea || G[17] !== ec || G[18] !== ed
        ? ((w = (0, c.A)(
            "absolute inset-0 m-auto size-2.5 rounded-full shadow-sm transition-[background-color,box-shadow,transform] duration-75 ease-out motion-reduce:transition-none",
            ea,
            ec,
            ed,
          )),
          (G[16] = ea),
          (G[17] = ec),
          (G[18] = ed),
          (G[19] = w))
        : (w = G[19])
      let es = `translate(${Math.cos(q) * _}px, ${Math.sin(q) * _}px)`
      ;(G[20] !== es ? ((b = { transform: es }), (G[20] = es), (G[21] = b)) : (b = G[21]),
        G[22] !== w || G[23] !== b
          ? ((v = (0, i.jsx)("div", { className: w, style: b })), (G[22] = w), (G[23] = b), (G[24] = v))
          : (v = G[24]),
        G[25] !== m || G[26] !== v
          ? ((T = (0, i.jsxs)("div", { className: m, children: [l, u, f, v] })), (G[25] = m), (G[26] = v), (G[27] = T))
          : (T = G[27]),
        G[28] !== L.direction || G[29] !== U
          ? ((C = (0, i.jsx)("div", {
              className: "flex items-center gap-1.5 text-[11px] font-medium text-tertiary",
              children: U
                ? (0, i.jsx)(r.A, { ...D.gameGesture })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(h.A, { className: (0, c.A)("size-3 shrink-0", x[L.direction]) }),
                      (0, i.jsx)("span", { children: (0, i.jsx)(r.A, { ...D[L.direction] }) }),
                    ],
                  }),
            })),
            (G[28] = L.direction),
            (G[29] = U),
            (G[30] = C))
          : (C = G[30]),
        G[31] !== z
          ? ((k = (0, i.jsx)("div", {
              className: "line-clamp-2 text-sm leading-4 font-medium text-default",
              children: z,
            })),
            (G[31] = z),
            (G[32] = k))
          : (k = G[32]))
      let er = M[L.status]
      ;(G[33] !== er
        ? ((y = (0, c.A)("flex min-h-4 items-center gap-1.5 text-xs", er)), (G[33] = er), (G[34] = y))
        : (y = G[34]),
        G[35] !== Q
          ? ((S = Q
              ? (0, i.jsx)(p.I, { className: "shrink-0", "aria-hidden": !1, asset: a.G })
              : (0, i.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-current opacity-70" })),
            (G[35] = Q),
            (G[36] = S))
          : (S = G[36]),
        G[37] !== E || G[38] !== U || G[39] !== H
          ? ((P = U ? { progress: E.formatNumber(H, { style: "percent" }) } : void 0),
            (G[37] = E),
            (G[38] = U),
            (G[39] = H),
            (G[40] = P))
          : (P = G[40]),
        G[41] !== Y || G[42] !== P
          ? ((N = (0, i.jsx)(r.A, { ...Y, values: P })), (G[41] = Y), (G[42] = P), (G[43] = N))
          : (N = G[43]),
        G[44] !== y || G[45] !== S || G[46] !== N
          ? ((A = (0, i.jsxs)("div", { "aria-atomic": "true", "aria-live": "polite", className: y, children: [S, N] })),
            (G[44] = y),
            (G[45] = S),
            (G[46] = N),
            (G[47] = A))
          : (A = G[47]))
      let em = X && "bg-text-info",
        el = $ && "bg-text-warning",
        ep = !X && !$ && "bg-text-tertiary/55"
      G[48] !== em || G[49] !== el || G[50] !== ep
        ? ((F = (0, c.A)(
            "h-full origin-left rounded-full transition-[background-color,transform] duration-75 ease-out motion-reduce:transition-none",
            em,
            el,
            ep,
          )),
          (G[48] = em),
          (G[49] = el),
          (G[50] = ep),
          (G[51] = F))
        : (F = G[51])
      let eh = `scaleX(${H})`
      return (
        G[52] !== eh ? ((R = { transform: eh }), (G[52] = eh), (G[53] = R)) : (R = G[53]),
        G[54] !== F || G[55] !== R
          ? ((j = (0, i.jsx)("div", {
              className: "h-0.5 overflow-hidden rounded-full",
              children: (0, i.jsx)("div", { className: F, style: R }),
            })),
            (G[54] = F),
            (G[55] = R),
            (G[56] = j))
          : (j = G[56]),
        G[57] !== C || G[58] !== k || G[59] !== A || G[60] !== j
          ? ((O = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-1.5", children: [C, k, A, j] })),
            (G[57] = C),
            (G[58] = k),
            (G[59] = A),
            (G[60] = j),
            (G[61] = O))
          : (O = G[61]),
        G[62] !== T || G[63] !== O || G[64] !== d
          ? ((B = (0, i.jsxs)("div", { className: d, children: [T, O] })),
            (G[62] = T),
            (G[63] = O),
            (G[64] = d),
            (G[65] = B))
          : (B = G[65]),
        G[66] !== L.status || G[67] !== Z || G[68] !== B || G[69] !== t || G[70] !== K
          ? ((W = (0, i.jsx)("div", {
              "aria-hidden": Z,
              className: t,
              "data-status": ee,
              "data-visible": K,
              children: B,
            })),
            (G[66] = L.status),
            (G[67] = Z),
            (G[68] = B),
            (G[69] = t),
            (G[70] = K),
            (G[71] = W))
          : (W = G[71]),
        W
      )
    }
    let D = (0, m.YK)({
      miniGameTitle: {
        id: "codexMicro.joystickFeedback.miniGameTitle",
        defaultMessage: "Mini-game",
        description: "Title shown while the Codex Micro mini-game activation gesture is in progress",
      },
      gameGesture: {
        id: "codexMicro.joystickFeedback.gameGesture",
        defaultMessage: "Secret game",
        description: "Category label shown while the Codex Micro mini-game activation gesture is in progress",
      },
      "game-gesture": {
        id: "codexMicro.joystickFeedback.gameGestureProgress",
        defaultMessage: "Keep circling · {progress}",
        description: "Progress shown while circling the Codex Micro joystick to activate a mini-game",
      },
      up: {
        id: "codexMicro.joystickFeedback.up",
        defaultMessage: "Up",
        description: "Up direction in the Codex Micro joystick feedback HUD",
      },
      right: {
        id: "codexMicro.joystickFeedback.right",
        defaultMessage: "Right",
        description: "Right direction in the Codex Micro joystick feedback HUD",
      },
      down: {
        id: "codexMicro.joystickFeedback.down",
        defaultMessage: "Down",
        description: "Down direction in the Codex Micro joystick feedback HUD",
      },
      left: {
        id: "codexMicro.joystickFeedback.left",
        defaultMessage: "Left",
        description: "Left direction in the Codex Micro joystick feedback HUD",
      },
      tracking: {
        id: "codexMicro.joystickFeedback.tracking",
        defaultMessage: "Move farther to trigger",
        description: "Feedback shown while moving the Codex Micro joystick toward an assigned action",
      },
      triggered: {
        id: "codexMicro.joystickFeedback.triggered",
        defaultMessage: "Triggered",
        description: "Feedback shown when a Codex Micro joystick action has been dispatched",
      },
      unassigned: {
        id: "codexMicro.joystickFeedback.unassigned",
        defaultMessage: "Direction reached",
        description: "Feedback shown when the Codex Micro joystick reaches an unassigned direction",
      },
      unavailable: {
        id: "codexMicro.joystickFeedback.unavailable",
        defaultMessage: "Shortcut unavailable",
        description: "Feedback shown when a Codex Micro joystick action cannot be dispatched",
      },
      unassignedTracking: {
        id: "codexMicro.joystickFeedback.unassignedTracking",
        defaultMessage: "No shortcut configured",
        description: "Feedback shown while moving the Codex Micro joystick toward an unassigned direction",
      },
    })
    t.d(
      o,
      {},
      {
        CodexMicroJoystickHud: function () {
          let e,
            o = (0, n.c)(4),
            t = (0, d.Ul)(f.FV),
            a = (0, d.Ul)(l.d5),
            { skills: c } = (0, u.a)()
          return (
            o[0] !== t || o[1] !== a || o[2] !== c
              ? ((e = (0, i.jsx)(w, { feedback: t, isMappingEditorOpen: a, skills: c })),
                (o[0] = t),
                (o[1] = a),
                (o[2] = c),
                (o[3] = e))
              : (e = o[3]),
            e
          )
        },
      },
    )
  },
  L0nj(e, o, t) {
    function i(e, o = 0.5) {
      return e.distance < o
        ? null
        : e.angle >= 0.625 && e.angle < 0.875
          ? "up"
          : e.angle >= 0.125 && e.angle < 0.375
            ? "down"
            : e.angle >= 0.375 && e.angle < 0.625
              ? "left"
              : "right"
    }
    t.d(
      o,
      {},
      {
        Z4: function (e, o) {
          return "ENC_CW" === o.key && 2 === o.act
            ? { ...e, knobPulse: "clockwise" }
            : "ENC_CC" === o.key && 2 === o.act
              ? { ...e, knobPulse: "counterclockwise" }
              : 1 !== o.act || e.pressedKeys.includes(o.key)
                ? 0 === o.act && e.pressedKeys.includes(o.key)
                  ? { ...e, pressedKeys: e.pressedKeys.filter((e) => e !== o.key) }
                  : e
                : { ...e, pressedKeys: [...e.pressedKeys, o.key] }
        },
        fM: { pressedKeys: [], joystick: { angle: 0, distance: 0 }, selectedAnalogDirection: "up", knobPulse: null },
        jL: function (e, o) {
          return e.selectedAnalogDirection === o ? e : { ...e, selectedAnalogDirection: o }
        },
        mE: function (e) {
          return null == e.knobPulse ? e : { ...e, knobPulse: null }
        },
        pU: i,
        yc: function (e, o) {
          let t = i(o) ?? e.selectedAnalogDirection
          return e.joystick.angle === o.angle && e.joystick.distance === o.distance && e.selectedAnalogDirection === t
            ? e
            : { ...e, joystick: o, selectedAnalogDirection: t }
        },
      },
    )
  },
  CyfE(e, o, t) {
    var i = t("zTeN"),
      n = t("OWtl"),
      a = t("Exdi"),
      c = t("L0nj")
    let d = (0, i.vP)(n.u, { status: "not-detected", transport: null, model: null, error: null, battery: null }),
      s = (0, i.vP)(n.u, !1),
      r = (0, i.un)(n.u, ({ get: e }) => e(s) && "not-detected" === e(d).status),
      m = (0, i.vP)(n.u, !1),
      l = (0, i.un)(n.u, ({ get: e }) => e(d).model ?? e(a.H) ?? null),
      p = (0, i.vP)(n.u, c.fM),
      h = (0, i.un)(n.u, ({ get: e }) => e(p).joystick),
      u = (0, i.vP)(n.u, !1),
      g = (0, i.vP)(n.u, "idle")
    t.d(
      o,
      {},
      {
        Fc: function (e, o) {
          ;(e.set(d, o), e.set(s, !0), "connected" !== o.status && e.set(p, c.fM))
        },
        HI: p,
        NS: function (e, o) {
          e.set(p, (e) => (0, c.Z4)(e, o))
        },
        QY: function (e) {
          e.set(p, c.mE)
        },
        VZ: m,
        WN: h,
        Yf: function (e, o) {
          e.set(p, (e) => (0, c.yc)(e, o))
        },
        cA: r,
        d5: u,
        dP: l,
        fX: function (e, o) {
          e.set(g, o)
        },
        r$: function (e, o) {
          e.set(p, (e) => (0, c.jL)(e, o))
        },
        rx: d,
        vo: function (e, o) {
          e.set(u, o)
        },
        xw: g,
      },
    )
  },
  WVWQ(e, o, t) {
    t.d(o, { j: () => b, I: () => D })
    var i = t("X2Bp"),
      n = t("Qgfj"),
      a = t("CTWI")
    function c(e) {
      return { title: e.formatMessage(d.title), description: e.formatMessage(d.description) }
    }
    let d = (0, n.YK)({
      title: {
        id: "codex.command.composer.captureAppshot",
        defaultMessage: "Capture appshot",
        description: "Codex Micro action for capturing an appshot",
      },
      description: {
        id: "codex.commandDescription.composer.captureAppshot",
        defaultMessage: "Capture an appshot for the active composer",
        description: "Description for the Codex Micro Appshot action",
      },
    })
    function s(e) {
      return {
        title: e.formatMessage({
          id: "codex.command.openOrbit.dot",
          defaultMessage: "Open your dot",
          description:
            "Command palette and keyboard shortcut settings title for opening the user's dot assistant conversation. Keep the singular term dot untranslated.",
        }),
        description: e.formatMessage({
          id: "codex.commandDescription.openOrbit.dot",
          defaultMessage: "Open your dot conversation",
          description:
            "Description for the command that navigates to the user's existing dot assistant conversation. Keep the singular term dot untranslated.",
        }),
      }
    }
    function r(e) {
      return {
        title: e.formatMessage({
          id: "codex.command.focusPageBlockControls",
          defaultMessage: "Focus content controls",
          description:
            "Keyboard shortcut settings row for moving focus from the Page document editor to the controls for the current content block",
        }),
        description: e.formatMessage({
          id: "codex.commandDescription.focusPageBlockControls",
          defaultMessage: "Move keyboard focus from the Page editor to the current content's controls",
          description:
            "Description for the shortcut that focuses controls for moving a content block or changing its layout, available while editing a Page document",
        }),
      }
    }
    let m = (0, n.YK)({
        endCallDescription: {
          id: "codex.commandDescription.realtimeVoice.endCall",
          defaultMessage: "End the active Voice Chat",
          description: "Description for the End Voice Chat shortcut",
        },
        endCallTitle: {
          id: "codex.command.realtimeVoice.endCall",
          defaultMessage: "End Voice Chat",
          description: "Shortcut settings row for ending Voice Chat",
        },
        realtimeVoiceDescription: {
          id: "codex.commandDescription.realtimeVoice",
          defaultMessage: "Start a Voice Chat from anywhere on desktop",
          description: "Description for the realtime voice hotkey",
        },
        realtimeVoiceTitle: {
          id: "codex.command.realtimeVoice",
          defaultMessage: "Voice Chat hotkey",
          description: "Shortcut settings row for the realtime voice hotkey",
        },
        toggleMicrophoneMuteDescription: {
          id: "codex.commandDescription.realtimeVoice.toggleMicrophoneMute",
          defaultMessage: "Mute or unmute your microphone during a Voice Chat",
          description: "Description for the Toggle voice microphone shortcut",
        },
        toggleMicrophoneMuteTitle: {
          id: "codex.command.realtimeVoice.toggleMicrophoneMute",
          defaultMessage: "Toggle Voice Chat microphone",
          description: "Shortcut settings row for toggling the voice microphone",
        },
        toggleOutputMuteDescription: {
          id: "codex.commandDescription.realtimeVoice.toggleOutputMute",
          defaultMessage: "Mute or unmute Voice Chat audio",
          description: "Description for the Toggle voice audio shortcut",
        },
        toggleOutputMuteTitle: {
          id: "codex.command.realtimeVoice.toggleOutputMute",
          defaultMessage: "Toggle Voice Chat audio",
          description: "Shortcut settings row for toggling voice audio",
        },
      }),
      l = {
        realtimeVoice: { description: m.realtimeVoiceDescription, title: m.realtimeVoiceTitle },
        "realtimeVoice.endCall": { description: m.endCallDescription, title: m.endCallTitle },
        "realtimeVoice.toggleMicrophoneMute": {
          description: m.toggleMicrophoneMuteDescription,
          title: m.toggleMicrophoneMuteTitle,
        },
        "realtimeVoice.toggleOutputMute": {
          description: m.toggleOutputMuteDescription,
          title: m.toggleOutputMuteTitle,
        },
      }
    function p(e) {
      return Object.hasOwn(l, e)
    }
    let h = (0, n.YK)({
        title: {
          id: "codex.command.importExternalAgent",
          defaultMessage: "Import from other AI apps",
          description: "Command menu item to import work from another AI app",
        },
        description: {
          id: "codex.commandDescription.importExternalAgent",
          defaultMessage: "Import from other AI apps",
          description: "Description for the external agent import command",
        },
      }),
      u = (0, n.YK)({
        title: {
          id: "codex.command.personalitySettings",
          defaultMessage: "Personality",
          description: "Command menu item to open personality settings",
        },
        description: {
          id: "codex.commandDescription.personalitySettings",
          defaultMessage: "Adjust tone and response style",
          description: "Description for the Personality settings command",
        },
      }),
      g = (0, n.zR)({
        id: "codex.command.showMiniOverlay",
        defaultMessage: "Show Mini",
        description: "Command menu item to show Mini, the floating compact Codex panel, when it is hidden",
      }),
      f = (0, n.YK)({
        "codex.command.importPrismToLocal": {
          id: "codex.command.importPrismToLocal",
          defaultMessage: "Import from Prism…",
          description: "Command to copy an owned Prism project into a new local folder",
        },
        "codex.commandMenuTitle.toggleFileTreePanel": {
          id: "codex.commandMenuTitle.toggleFileTreePanel",
          defaultMessage: "Toggle navigation panel",
          description:
            "Native menu, command palette, and shortcut settings title for showing or hiding the active Page's navigation panel or the code file tree",
        },
        "codex.command.meetings.takeNotes": {
          id: "codex.command.meetings.takeNotes",
          defaultMessage: "Meetings: Take notes",
          description: "Command palette and keyboard shortcut settings title for starting a local Meetings recording",
        },
        "codex.command.screenshotToCurrentChat": {
          id: "codex.command.screenshotToCurrentChat",
          defaultMessage: "Screenshot selection to current chat",
          description: "Title of the macOS global shortcut to capture a rectangular screen region for this destination",
        },
        "codex.command.screenshotToNewChat": {
          id: "codex.command.screenshotToNewChat",
          defaultMessage: "Screenshot selection to new chat",
          description: "Title of the macOS global shortcut to capture a rectangular screen region for this destination",
        },
        "codex.command.artifacts.selectTool": {
          id: "codex.command.artifacts.selectTool",
          defaultMessage: "Artifacts: Select",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: select tool",
        },
        "codex.command.artifacts.handTool": {
          id: "codex.command.artifacts.handTool",
          defaultMessage: "Artifacts: Pan",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: pan tool",
        },
        "codex.command.canvas.prompt": {
          id: "codex.command.canvas.prompt",
          defaultMessage: "Canvas: Ask ChatGPT",
          description: "Command palette and shortcut settings title for opening the Canvas prompt at the pointer",
        },
        "codex.command.artifacts.rectangleTool": {
          id: "codex.command.artifacts.rectangleTool",
          defaultMessage: "Artifacts: Rectangle",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: rectangle tool",
        },
        "codex.command.artifacts.circleTool": {
          id: "codex.command.artifacts.circleTool",
          defaultMessage: "Artifacts: Circle",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: circle tool",
        },
        "codex.command.artifacts.arrowTool": {
          id: "codex.command.artifacts.arrowTool",
          defaultMessage: "Artifacts: Arrow",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: arrow tool",
        },
        "codex.command.artifacts.lineTool": {
          id: "codex.command.artifacts.lineTool",
          defaultMessage: "Artifacts: Line",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: line tool",
        },
        "codex.command.artifacts.textTool": {
          id: "codex.command.artifacts.textTool",
          defaultMessage: "Artifacts: Text",
          description:
            "Command palette and shortcut settings title for the drawing tool shared by Canvas, Slides, and Sheets: text tool",
        },
        "codex.command.artifacts.noteTool": {
          id: "codex.command.artifacts.noteTool",
          defaultMessage: "Artifacts: Note",
          description:
            "Command palette and shortcut settings title for the Canvas sticky-note drawing tool in the shared Artifacts command family",
        },
        "codex.command.page.addComment": {
          id: "codex.command.page.addComment",
          defaultMessage: "Add Page comment",
          description: "Keyboard shortcut title for starting a comment in the focused Page editor",
        },
        "codex.command.page.formatNumberedList": {
          id: "codex.command.page.formatNumberedList",
          defaultMessage: "Numbered list",
          description: "Page editor command that applies numbered list formatting to the selected text",
        },
        "codex.command.page.formatBulletedList": {
          id: "codex.command.page.formatBulletedList",
          defaultMessage: "Bulleted list",
          description: "Page editor command that applies bulleted list formatting to the selected text",
        },
        "codex.command.page.formatChecklist": {
          id: "codex.command.page.formatChecklist",
          defaultMessage: "Checklist",
          description: "Page editor command that toggles checklist formatting for the selected text",
        },
        "codex.command.newThread": {
          id: "codex.command.newThread",
          defaultMessage: "New chat",
          description: "Command menu item to start a new chat",
        },
        "codex.command.newProjectlessTask": {
          id: "codex.command.newProjectlessTask",
          defaultMessage: "New standalone chat",
          description: "Command menu item to start a new standalone chat",
        },
        "codex.command.temporaryChat": {
          id: "codex.command.temporaryChat",
          defaultMessage: "New Temporary Chat",
          description: "Command menu item to start a temporary chat",
        },
        "codex.command.openThreadInNewWindow": {
          id: "codex.command.openThreadInNewWindow",
          defaultMessage: "Open in new window",
          description: "Command menu item to open the current chat in a new window",
        },
        "codex.command.archiveThread": {
          id: "codex.command.archiveThread",
          defaultMessage: "Archive chat",
          description: "Command menu item to archive the current chat",
        },
        "codex.command.deleteOrbit": {
          id: "codex.command.deleteOrbit",
          defaultMessage: "Delete {dot}",
          description:
            "Command to open confirmation to permanently delete the current assistant. The dot placeholder is the untranslated term for the user's agent.",
        },
        "codex.command.deleteChat": {
          id: "codex.command.deleteChat",
          defaultMessage: "Delete chat",
          description:
            "Keyboard shortcut settings row for opening the confirmation to permanently delete the current saved ChatGPT chat",
        },
        "codex.command.markThreadUnread": {
          id: "codex.command.markThreadUnread",
          defaultMessage: "Mark as unread",
          description: "Command menu item to mark the current chat as unread",
        },
        "codex.command.toggleThreadPin": {
          id: "codex.command.toggleThreadPin",
          defaultMessage: "Toggle pin",
          description: "Command menu item to toggle whether the current chat is pinned",
        },
        "codex.command.copyPageLink": {
          id: "codex.command.copyPageLink",
          defaultMessage: "Copy document link",
          description: "Command that copies a link to the current document, including a Page, slide, or sheet",
        },
        "codex.command.copyConversationMarkdown": {
          id: "codex.command.copyConversationMarkdown",
          defaultMessage: "Copy as Markdown",
          description: "Shortcut settings row for copying the current chat as Markdown",
        },
        "codex.command.copyLastCodeBlock": {
          id: "codex.command.copyLastCodeBlock",
          defaultMessage: "Copy last code block",
          description:
            "Command menu item and keyboard shortcut settings label for copying the most recent assistant code block in the current Chat conversation",
        },
        "codex.command.openSideChat": {
          id: "codex.command.openSideChat",
          defaultMessage: "Open side chat",
          description: "Shortcut settings row for opening the current chat as a side chat",
        },
        "codex.command.focusMainChat": {
          id: "codex.command.focusMainChat",
          defaultMessage: "Focus main chat",
          description: "Command menu item to focus the main chat composer",
        },
        "codex.command.focusSideChat": {
          id: "codex.command.focusSideChat",
          defaultMessage: "Focus side chat",
          description: "Command menu item to focus an open side chat composer",
        },
        "codex.command.openControlWindow": {
          id: "codex.command.openControlWindow",
          defaultMessage: "Open control window",
          description: "Command menu item to open the control window",
        },
        "codex.command.toggleDebugModal": {
          id: "codex.command.toggleDebugModal",
          defaultMessage: "Toggle debug panel",
          description: "Shortcut settings row for showing or hiding the internal debug panel within the current window",
        },
        "codex.command.undoAppAction": {
          id: "codex.command.undoAppAction",
          defaultMessage: "Undo last action",
          description: "Command menu item to undo the most recent app action",
        },
        "codex.command.redoAppAction": {
          id: "codex.command.redoAppAction",
          defaultMessage: "Redo last action",
          description: "Command menu item to redo the most recently undone app action",
        },
        "codex.command.reopenClosedTab": {
          id: "codex.command.reopenClosedTab",
          defaultMessage: "Reopen closed tab",
          description: "Command menu item to reopen the most recently closed tab",
        },
        "codex.command.composer.openModelPicker": {
          id: "codex.command.composer.openModelPicker",
          defaultMessage: "Select effort",
          description:
            "Shortcut settings row for opening the composer controls that set how much reasoning effort the model uses",
        },
        "codex.command.composer.openRecentModels": {
          id: "codex.command.composer.openRecentModels",
          defaultMessage: "Open recent models",
          description:
            "Shortcut settings row for opening recently used model, effort, and speed combinations in the composer",
        },
        "codex.command.composer.openProjectPicker": {
          id: "codex.command.composer.openProjectPicker",
          defaultMessage: "Open project picker",
          description: "Shortcut settings row for opening the project picker",
        },
        "codex.command.composer.toggleDictation": {
          id: "codex.command.composer.toggleDictation",
          defaultMessage: "Toggle dictation",
          description: "Keyboard shortcut label for starting or stopping microphone dictation in the chat composer",
        },
        "codex.command.composer.startVoiceMode": {
          id: "codex.command.composer.startVoiceMode",
          defaultMessage: "Toggle voice chat",
          description: "Shortcut settings row for toggling voice mode",
        },
        "codex.command.composer.submit": {
          id: "codex.command.composer.submit",
          defaultMessage: "Send message",
          description: "Shortcut settings row for sending the current composer message",
        },
        "codex.command.browser.toggleAnnotationMode": {
          id: "codex.command.browser.toggleAnnotationMode",
          defaultMessage: "Toggle annotation mode",
          description: "Shortcut settings row for entering or leaving annotation mode in the in-app browser",
        },
        "codex.command.presentation.duplicateSelection": {
          id: "codex.command.presentation.duplicateSelection",
          defaultMessage: "Duplicate presentation selection",
          description: "Shortcut settings row for duplicating selected slide objects",
        },
        "codex.command.artifact.sendAnnotations": {
          id: "codex.command.artifact.sendAnnotations",
          defaultMessage: "Send annotations",
          description: "Shortcut settings row for sending pending artifact annotations",
        },
        "codex.command.composer.submitInBackground": {
          id: "codex.command.composer.submitInBackground",
          defaultMessage: "Send message in background",
          description: "Shortcut settings row for sending a new composer message without opening its chat",
        },
        "codex.command.composer.steer": {
          id: "codex.command.composer.steer",
          defaultMessage: "Steer prompt",
          description: "Shortcut settings row for submitting the current composer prompt as a steering message",
        },
        "codex.command.composer.queue": {
          id: "codex.command.composer.queue",
          defaultMessage: "Queue prompt",
          description: "Shortcut settings row for submitting the current composer prompt as a queued message",
        },
        "codex.command.composer.clear": {
          id: "codex.command.composer.clear",
          defaultMessage: "Clear prompt",
          description: "Shortcut settings row for clearing the composer prompt",
        },
        "codex.command.composer.addPhotos": {
          id: "codex.command.composer.addPhotos",
          defaultMessage: "Add photos",
          description: "Shortcut settings row for adding photos to the composer",
        },
        "codex.command.composer.addFiles": {
          id: "codex.command.composer.addFiles",
          defaultMessage: "Attach files and folders",
          description: "Shortcut settings row for attaching files and folders to the composer",
        },
        "codex.command.composer.toggleFastMode": {
          id: "codex.command.composer.toggleFastMode",
          defaultMessage: "Cycle speed",
          description: "Shortcut settings row for cycling through available model speeds",
        },
        "codex.command.composer.increaseReasoningEffort": {
          id: "codex.command.composer.increaseReasoningEffort",
          defaultMessage: "Increase reasoning effort",
          description: "Shortcut settings row for increasing reasoning effort",
        },
        "codex.command.composer.decreaseReasoningEffort": {
          id: "codex.command.composer.decreaseReasoningEffort",
          defaultMessage: "Decrease reasoning effort",
          description: "Shortcut settings row for decreasing reasoning effort",
        },
        "codex.command.composer.cycleReasoningEffort": {
          id: "codex.command.composer.cycleReasoningEffort",
          defaultMessage: "Cycle reasoning effort",
          description: "Shortcut settings row for cycling reasoning effort",
        },
        "codex.command.composer.togglePlanMode": {
          id: "codex.command.composer.togglePlanMode",
          defaultMessage: "Toggle plan mode",
          description: "Shortcut settings row for toggling plan mode",
        },
        "codex.command.composer.toggleWorktreeMode": {
          id: "codex.command.composer.toggleWorktreeMode",
          defaultMessage: "Toggle Local/Worktree",
          description: "Shortcut settings row for toggling Local and Worktree mode",
        },
        "codex.command.composer.cycleHost": {
          id: "codex.command.composer.cycleHost",
          defaultMessage: "Cycle host",
          description: "Shortcut settings row for cycling between local and remote machines",
        },
        "codex.command.composer.toggleWorkRunLocation": {
          id: "codex.command.composer.toggleWorkRunLocation",
          defaultMessage: "Toggle Cloud/Local",
          description: "Shortcut settings row for toggling ChatGPT Work between Cloud and Local",
        },
        "codex.command.approval.approve": {
          id: "codex.command.approval.approve",
          defaultMessage: "Approve request",
          description: "Shortcut settings row for approving the active request",
        },
        "codex.command.approval.decline": {
          id: "codex.command.approval.decline",
          defaultMessage: "Decline request",
          description: "Shortcut settings row for declining the active request",
        },
        "codex.command.git.commit": {
          id: "codex.command.git.commit",
          defaultMessage: "Commit or push",
          description: "Command menu item for committing or pushing local changes",
        },
        "codex.command.git.createPullRequest": {
          id: "codex.command.git.createPullRequest",
          defaultMessage: "Create PR",
          description: "Command menu item for creating a pull request",
        },
        "codex.command.git.createDraftPullRequest": {
          id: "codex.command.git.createDraftPullRequest",
          defaultMessage: "Create draft PR",
          description: "Command menu item for creating a draft pull request",
        },
        "codex.command.git.createBranch": {
          id: "codex.command.git.createBranch",
          defaultMessage: "Create branch",
          description: "Command menu item for creating a branch",
        },
        "codex.command.git.mergePullRequest": {
          id: "codex.command.git.mergePullRequest",
          defaultMessage: "Merge PR",
          description: "Command menu item for merging a pull request",
        },
        "codex.command.git.openPullRequest": {
          id: "codex.command.git.openPullRequest",
          defaultMessage: "Open PR on GitHub",
          description: "Command menu item for opening the linked pull request",
        },
        "codex.command.git.toggleBlame": {
          id: "codex.command.git.toggleBlame",
          defaultMessage: "Toggle Git blame",
          description: "Command menu item for toggling active-line Git blame",
        },
        "codex.command.forkThread": {
          id: "codex.command.forkThread",
          defaultMessage: "Fork chat",
          description: "Shortcut settings row for forking the current chat",
        },
        "codex.command.showMiniOverlay": {
          id: "codex.command.showMiniOverlay",
          defaultMessage: "Show Mini",
          description: "Command menu item to show Mini, the floating compact Codex panel, when it is hidden",
        },
        "codex.command.searchChats": {
          id: "codex.command.searchChats",
          defaultMessage: "Switch chat…",
          description: "Command menu item that opens chat search",
        },
        "codex.command.searchChatsPrevious": {
          id: "codex.command.searchChatsPrevious",
          defaultMessage: "Switch chat (previous)…",
          description: "Keyboard shortcut that opens the chat picker and cycles its selection backward",
        },
        "codex.command.togglePriorityFilter": {
          id: "codex.command.togglePriorityFilter",
          defaultMessage: "Toggle activity view",
          description: "Command menu item that opens or closes the sidebar activity view",
        },
        "codex.command.nextThreadNeedingAttention": {
          id: "codex.command.nextThreadNeedingAttention",
          defaultMessage: "Next chat needing attention",
          description:
            "Command menu item that opens the highest-priority chat awaiting user input or containing unread activity",
        },
        "codex.command.previousThread": {
          id: "codex.command.previousThread",
          defaultMessage: "Previous sidebar item",
          description: "Command menu item to go to the previous sidebar item",
        },
        "codex.command.previousTab": {
          id: "codex.command.previousTab",
          defaultMessage: "Previous tab",
          description: "Shortcut settings row for switching to the previous tab",
        },
        "codex.command.previousRecentThread": {
          id: "codex.command.previousRecentThread",
          defaultMessage: "Previous recently viewed chat",
          description: "Shortcut settings row for cycling to the previous recently viewed chat",
        },
        "codex.command.nextThread": {
          id: "codex.command.nextThread",
          defaultMessage: "Next sidebar item",
          description: "Command menu item to go to the next sidebar item",
        },
        "codex.command.nextTab": {
          id: "codex.command.nextTab",
          defaultMessage: "Next tab",
          description: "Shortcut settings row for switching to the next tab",
        },
        "codex.command.nextRecentThread": {
          id: "codex.command.nextRecentThread",
          defaultMessage: "Next recently viewed chat",
          description: "Shortcut settings row for cycling to the next recently viewed chat",
        },
        "codex.command.recentThread1": {
          id: "codex.command.recentThread1",
          defaultMessage: "Go to recent chat 1",
          description: "Command menu item to open the most recently updated chat",
        },
        "codex.command.recentThread2": {
          id: "codex.command.recentThread2",
          defaultMessage: "Go to recent chat 2",
          description: "Command menu item to open the second most recently updated chat",
        },
        "codex.command.recentThread3": {
          id: "codex.command.recentThread3",
          defaultMessage: "Go to recent chat 3",
          description: "Command menu item to open the third most recently updated chat",
        },
        "codex.command.recentThread4": {
          id: "codex.command.recentThread4",
          defaultMessage: "Go to recent chat 4",
          description: "Command menu item to open the fourth most recently updated chat",
        },
        "codex.command.recentThread5": {
          id: "codex.command.recentThread5",
          defaultMessage: "Go to recent chat 5",
          description: "Command menu item to open the fifth most recently updated chat",
        },
        "codex.command.recentThread6": {
          id: "codex.command.recentThread6",
          defaultMessage: "Go to recent chat 6",
          description: "Command menu item to open the sixth most recently updated chat",
        },
        "codex.command.switchToChat": {
          id: "codex.command.switchToChat",
          defaultMessage: "Switch to Chat",
          description: "Command title for switching the Codex desktop app to Chat",
        },
        "codex.command.switchToWork": {
          id: "codex.command.switchToWork",
          defaultMessage: "Switch to Work",
          description: "Command title for switching the Codex desktop app to Work",
        },
        "codex.command.switchToCodex": {
          id: "codex.command.switchToCodex",
          defaultMessage: "Switch to Codex",
          description: "Command title for switching the Codex desktop app to Codex",
        },
        "codex.command.settings": {
          id: "codex.command.settings",
          defaultMessage: "Settings",
          description: "Command menu item to open settings",
        },
        "codex.command.codexMicroSettings": {
          id: "codex.command.codexMicroSettings",
          defaultMessage: "Codex Micro setup",
          description: "Codex Micro keycap action that opens device setup",
        },
        "codex.command.mcpSettings": {
          id: "codex.command.mcpSettings",
          defaultMessage: "MCP",
          description: "Command menu item to open MCP settings",
        },
        "codex.command.keyboardShortcuts": {
          id: "codex.command.keyboardShortcuts",
          defaultMessage: "Keyboard shortcuts",
          description: "Command menu item to open keyboard shortcut settings",
        },
        "codex.command.showKeyboardShortcuts": {
          id: "codex.command.showKeyboardShortcuts",
          defaultMessage: "Show keyboard shortcuts",
          description: "Shortcut settings row for showing active keyboard shortcuts",
        },
        "codex.command.clearAllUnreads": {
          id: "codex.command.clearAllUnreads",
          defaultMessage: "Clear all unreads",
          description: "Command for marking all chats and scheduled tasks as read",
        },
        "codex.command.manageTasks": {
          id: "codex.command.manageTasks",
          defaultMessage: "Manage scheduled tasks",
          description: "Command menu item to manage scheduled tasks",
        },
        "codex.command.forceReloadSkills": {
          id: "codex.command.forceReloadSkills",
          defaultMessage: "Force reload skills",
          description: "Command menu item to force reload skills",
        },
        "codex.command.openSkills": {
          id: "codex.command.openSkills",
          defaultMessage: "Go to skills",
          description: "Command menu item to open skills",
        },
        "codex.command.newProject": {
          id: "codex.command.newProject",
          defaultMessage: "New project",
          description: "Command menu item to create a project",
        },
        "codex.command.openFolder": {
          id: "codex.command.openFolder",
          defaultMessage: "Open folder",
          description: "Command menu item to open a folder/workspace",
        },
        "codex.command.toggleSidebar": {
          id: "codex.command.toggleSidebar",
          defaultMessage: "Toggle sidebar",
          description: "Command menu item to toggle the sidebar",
        },
        "codex.command.toggleBottomPanel": {
          id: "codex.command.toggleBottomPanel",
          defaultMessage: "Toggle bottom panel",
          description: "Command menu item to toggle the bottom panel",
        },
        "codex.command.togglePinnedSummary": {
          id: "codex.command.togglePinnedSummary",
          defaultMessage: "Toggle pinned summary",
          description: "Command menu item to toggle the pinned summary",
        },
        "codex.command.toggleTerminal": {
          id: "codex.command.toggleTerminal",
          defaultMessage: "Open terminal",
          description: "Command menu item to open the terminal panel",
        },
        "codex.command.newTab": {
          id: "codex.command.newTab",
          defaultMessage: "New tab",
          description: "Command menu item to open a new tab",
        },
        "codex.command.closeOtherTabs": {
          id: "codex.command.closeOtherTabs",
          defaultMessage: "Close other tabs",
          description: "Shortcut settings row for closing all other tabs",
        },
        "codex.command.showWorkspaceTabView": {
          id: "codex.command.showWorkspaceTabView",
          defaultMessage: "Full view",
          description: "Command menu item that toggles the workspace between split and full view",
        },
        "codex.command.exitWorkspaceFullView": {
          id: "codex.command.exitWorkspaceFullView",
          defaultMessage: "Exit full view",
          description: "Command that restores a fullscreen workspace panel to split view",
        },
        "codex.command.stepWorkspaceLayout": {
          id: "codex.command.stepWorkspaceLayout",
          defaultMessage: "Cycle workspace layout",
          description: "Command menu item that steps from full to split view, hides tabs, or restores tabs beside Chat",
        },
        "codex.command.openReviewTab": {
          id: "codex.command.openReviewTab",
          defaultMessage: "Open Changes tab",
          description: "Command menu item to open the Changes tab showing local diffs",
        },
        "codex.command.toggleReviewTab": {
          id: "codex.command.toggleReviewTab",
          defaultMessage: "Toggle Changes",
          description: "Shortcut settings row for toggling the Changes panel showing local diffs",
        },
        "codex.command.toggleReviewPanel": {
          id: "codex.command.toggleReviewPanel",
          defaultMessage: "Toggle Changes panel",
          description: "Command menu item to toggle the Changes panel showing local diffs",
        },
        "codex.command.file.goToDefinition": {
          id: "codex.command.file.goToDefinition",
          defaultMessage: "Go to definition",
          description: "Shortcut settings row for going to a symbol's definition",
        },
        "codex.command.file.findReferences": {
          id: "codex.command.file.findReferences",
          defaultMessage: "Find references",
          description: "Shortcut settings row for finding references to a code symbol",
        },
        "codex.command.file.navigateBack": {
          id: "codex.command.file.navigateBack",
          defaultMessage: "Go back in file navigation",
          description: "Shortcut settings row for file navigation history",
        },
        "codex.command.file.navigateForward": {
          id: "codex.command.file.navigateForward",
          defaultMessage: "Go forward in file navigation",
          description: "Shortcut settings row for file navigation history",
        },
        "codex.command.findInThread": {
          id: "codex.command.findInThread",
          defaultMessage: "Find",
          description: "Command menu item to find in the current chat",
        },
        "codex.command.goToLine": {
          id: "codex.command.goToLine",
          defaultMessage: "Go to line",
          description: "Command menu item to go to a line in the current file",
        },
        "codex.command.focusBrowserAddressBar": {
          id: "codex.command.focusBrowserAddressBar",
          defaultMessage: "Focus browser address bar",
          description: "Command menu item to focus the browser address bar",
        },
        "codex.command.navigateBrowserBack": {
          id: "codex.command.navigateBrowserBack",
          defaultMessage: "Browser back",
          description: "Command menu item to navigate the browser back",
        },
        "codex.command.navigateBrowserForward": {
          id: "codex.command.navigateBrowserForward",
          defaultMessage: "Browser forward",
          description: "Command menu item to navigate the browser forward",
        },
        "codex.command.navigateBack": {
          id: "codex.command.navigateBack",
          defaultMessage: "Back",
          description: "Command menu item to navigate back",
        },
        "codex.command.navigateForward": {
          id: "codex.command.navigateForward",
          defaultMessage: "Forward",
          description: "Command menu item to navigate forward",
        },
        "codex.command.logOut": {
          id: "codex.command.logOut",
          defaultMessage: "Log out",
          description: "Command menu item to log out of ChatGPT",
        },
        "codex.command.feedback": {
          id: "codex.command.feedback",
          defaultMessage: "Feedback",
          description: "Command menu item to open the feedback dialog",
        },
        "codex.command.environmentAction1": {
          id: "codex.command.environmentAction1",
          defaultMessage: "Environment action 1",
          description: "Shortcut settings row for the first environment action",
        },
        "codex.command.environmentAction2": {
          id: "codex.command.environmentAction2",
          defaultMessage: "Environment action 2",
          description: "Shortcut settings row for the second environment action",
        },
        "codex.command.environmentAction3": {
          id: "codex.command.environmentAction3",
          defaultMessage: "Environment action 3",
          description: "Shortcut settings row for the third environment action",
        },
        "codex.command.environmentAction4": {
          id: "codex.command.environmentAction4",
          defaultMessage: "Environment action 4",
          description: "Shortcut settings row for the fourth environment action",
        },
        "codex.command.environmentAction5": {
          id: "codex.command.environmentAction5",
          defaultMessage: "Environment action 5",
          description: "Shortcut settings row for the fifth environment action",
        },
        "codex.command.environmentAction6": {
          id: "codex.command.environmentAction6",
          defaultMessage: "Environment action 6",
          description: "Shortcut settings row for the sixth environment action",
        },
        "codex.command.environmentAction7": {
          id: "codex.command.environmentAction7",
          defaultMessage: "Environment action 7",
          description: "Shortcut settings row for the seventh environment action",
        },
        "codex.command.environmentAction8": {
          id: "codex.command.environmentAction8",
          defaultMessage: "Environment action 8",
          description: "Shortcut settings row for the eighth environment action",
        },
        "codex.command.environmentAction9": {
          id: "codex.command.environmentAction9",
          defaultMessage: "Environment action 9",
          description: "Shortcut settings row for the ninth environment action",
        },
        "codex.command.hotkeyWindow": {
          id: "codex.command.hotkeyWindow",
          defaultMessage: "Popout Window hotkey",
          description: "Shortcut settings row for the Popout Window hotkey",
        },
        "codex.command.globalDictationHold": {
          id: "codex.command.globalDictationHold",
          defaultMessage: "Dictation shortcut",
          description: "Shortcut settings row for the dictation shortcut",
        },
        "codex.command.globalDictationSingleTap": {
          id: "codex.command.globalDictationSingleTap",
          defaultMessage: "Single-tap dictation",
          description: "Shortcut settings row for the single-tap dictation shortcut",
        },
        "codex.command.spotlightSearch": {
          id: "codex.command.spotlightSearch",
          defaultMessage: "Spotlight search",
          description: "Shortcut settings row for Codex Spotlight, the floating desktop search and command panel",
        },
        "codex.command.notchVoice": {
          id: "codex.command.notchVoice",
          defaultMessage: "Voice in Mini",
          description: "Shortcut settings row for starting or showing voice in the notch Mini",
        },
        "codex.command.toggleNotch": {
          id: "codex.command.toggleNotch",
          defaultMessage: "Toggle Notch",
          description:
            "Shortcut settings row for expanding or collapsing the Codex notch panel at the top of the screen",
        },
        "codex.command.focusTab1": {
          id: "codex.command.focusTab1",
          defaultMessage: "Focus tab 1",
          description: "Keyboard shortcut to focus tab 1, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab2": {
          id: "codex.command.focusTab2",
          defaultMessage: "Focus tab 2",
          description: "Keyboard shortcut to focus tab 2, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab3": {
          id: "codex.command.focusTab3",
          defaultMessage: "Focus tab 3",
          description: "Keyboard shortcut to focus tab 3, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab4": {
          id: "codex.command.focusTab4",
          defaultMessage: "Focus tab 4",
          description: "Keyboard shortcut to focus tab 4, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab5": {
          id: "codex.command.focusTab5",
          defaultMessage: "Focus tab 5",
          description: "Keyboard shortcut to focus tab 5, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab6": {
          id: "codex.command.focusTab6",
          defaultMessage: "Focus tab 6",
          description: "Keyboard shortcut to focus tab 6, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab7": {
          id: "codex.command.focusTab7",
          defaultMessage: "Focus tab 7",
          description: "Keyboard shortcut to focus tab 7, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab8": {
          id: "codex.command.focusTab8",
          defaultMessage: "Focus tab 8",
          description: "Keyboard shortcut to focus tab 8, counting from the left of the chat tab strip",
        },
        "codex.command.focusTab9": {
          id: "codex.command.focusTab9",
          defaultMessage: "Focus tab 9",
          description: "Keyboard shortcut to focus tab 9, counting from the left of the chat tab strip",
        },
        "codex.command.thread1": {
          id: "codex.command.thread1",
          defaultMessage: "Go to chat 1",
          description: "Command menu item to go to the first visible chat",
        },
        "codex.command.thread2": {
          id: "codex.command.thread2",
          defaultMessage: "Go to chat 2",
          description: "Command menu item to go to the second visible chat",
        },
        "codex.command.thread3": {
          id: "codex.command.thread3",
          defaultMessage: "Go to chat 3",
          description: "Command menu item to go to the third visible chat",
        },
        "codex.command.thread4": {
          id: "codex.command.thread4",
          defaultMessage: "Go to chat 4",
          description: "Command menu item to go to the fourth visible chat",
        },
        "codex.command.thread5": {
          id: "codex.command.thread5",
          defaultMessage: "Go to chat 5",
          description: "Command menu item to go to the fifth visible chat",
        },
        "codex.command.thread6": {
          id: "codex.command.thread6",
          defaultMessage: "Go to chat 6",
          description: "Command menu item to go to the sixth visible chat",
        },
        "codex.command.thread7": {
          id: "codex.command.thread7",
          defaultMessage: "Go to chat 7",
          description: "Command menu item to go to the seventh visible chat",
        },
        "codex.command.thread8": {
          id: "codex.command.thread8",
          defaultMessage: "Go to chat 8",
          description: "Command menu item to go to the eighth visible chat",
        },
        "codex.command.thread9": {
          id: "codex.command.thread9",
          defaultMessage: "Go to chat 9",
          description: "Command menu item to go to the ninth visible chat",
        },
      }),
      x = { ...f, "codex.command.importExternalAgent": h.title, "codex.command.personalitySettings": u.title },
      M = (0, n.YK)({
        "codex.commandMenuTitle.newThread": {
          id: "codex.commandMenuTitle.newThread",
          defaultMessage: "New Chat",
          description: "Native menu item to start a new chat",
        },
        "codex.commandMenuTitle.newProjectlessTask": {
          id: "codex.commandMenuTitle.newProjectlessTask",
          defaultMessage: "New standalone chat",
          description: "Native shortcut command to start a new standalone chat",
        },
        "codex.commandMenuTitle.openThreadInNewWindow": {
          id: "codex.commandMenuTitle.openThreadInNewWindow",
          defaultMessage: "Open in New Window",
          description: "Native menu item to open the current chat in a new window",
        },
        "codex.commandMenuTitle.archiveThread": {
          id: "codex.commandMenuTitle.archiveThread",
          defaultMessage: "Archive chat",
          description: "Native menu item to archive the current chat",
        },
        "codex.commandMenuTitle.toggleThreadPin": {
          id: "codex.commandMenuTitle.toggleThreadPin",
          defaultMessage: "Pin/unpin chat",
          description: "Native menu item to toggle whether the current chat is pinned",
        },
        "codex.commandMenuTitle.previousThread": {
          id: "codex.commandMenuTitle.previousThread",
          defaultMessage: "Previous Sidebar Item",
          description: "Native menu item to go to the previous sidebar item",
        },
        "codex.commandMenuTitle.nextThread": {
          id: "codex.commandMenuTitle.nextThread",
          defaultMessage: "Next Sidebar Item",
          description: "Native menu item to go to the next sidebar item",
        },
        "codex.commandMenuTitle.settings": {
          id: "codex.commandMenuTitle.settings",
          defaultMessage: "Settings…",
          description: "Native menu item to open settings",
        },
        "codex.commandMenuTitle.showKeyboardShortcuts": {
          id: "codex.commandMenuTitle.showKeyboardShortcuts",
          defaultMessage: "Keyboard Shortcuts",
          description: "Native menu item to show active keyboard shortcuts",
        },
        "codex.commandMenuTitle.newProject": {
          id: "codex.commandMenuTitle.newProject",
          defaultMessage: "New Project…",
          description: "Native File menu item to open the project creation dialog",
        },
        "codex.commandMenuTitle.openFolder": {
          id: "codex.commandMenuTitle.openFolder",
          defaultMessage: "Open Folder…",
          description: "Native menu item to open a folder",
        },
        "codex.commandMenuTitle.toggleSidebar": {
          id: "codex.commandMenuTitle.toggleSidebar",
          defaultMessage: "Toggle Sidebar",
          description: "Native menu item to toggle the sidebar",
        },
        "codex.commandMenuTitle.toggleBottomPanel": {
          id: "codex.commandMenuTitle.toggleBottomPanel",
          defaultMessage: "Toggle Bottom Panel",
          description: "Native menu item to toggle the bottom panel",
        },
        "codex.commandMenuTitle.togglePinnedSummary": {
          id: "codex.commandMenuTitle.togglePinnedSummary",
          defaultMessage: "Toggle Pinned Summary",
          description: "Native menu item to toggle the pinned summary",
        },
        "codex.commandMenuTitle.toggleTerminal": {
          id: "codex.commandMenuTitle.toggleTerminal",
          defaultMessage: "Open Terminal",
          description: "Native menu item to open the terminal",
        },
        "codex.commandMenuTitle.newTab": {
          id: "codex.commandMenuTitle.newTab",
          defaultMessage: "New tab",
          description: "Native menu item to open a new tab",
        },
        "codex.commandMenuTitle.toggleReviewPanel": {
          id: "codex.commandMenuTitle.toggleReviewPanel",
          defaultMessage: "Toggle Changes Panel",
          description: "Native menu item to toggle the Changes panel showing local diffs",
        },
        "codex.commandMenuTitle.findInThread": {
          id: "codex.commandMenuTitle.findInThread",
          defaultMessage: "Find",
          description: "Native menu item to find in the current chat",
        },
        "codex.commandMenuTitle.focusBrowserAddressBar": {
          id: "codex.commandMenuTitle.focusBrowserAddressBar",
          defaultMessage: "Focus Browser Address Bar",
          description: "Native menu item to focus the browser address bar",
        },
        "codex.commandMenuTitle.navigateBack": {
          id: "codex.commandMenuTitle.navigateBack",
          defaultMessage: "Back",
          description: "Native menu item to navigate back",
        },
        "codex.commandMenuTitle.navigateForward": {
          id: "codex.commandMenuTitle.navigateForward",
          defaultMessage: "Forward",
          description: "Native menu item to navigate forward",
        },
        "codex.commandMenuTitle.logOut": {
          id: "codex.commandMenuTitle.logOut",
          defaultMessage: "Log Out",
          description:
            "Native application menu item that signs the user out of Codex after confirmation. Short action label.",
        },
        "codex.commandMenuTitle.thread1": {
          id: "codex.commandMenuTitle.thread1",
          defaultMessage: "Go to Chat 1",
          description: "Native menu item to go to chat 1",
        },
        "codex.commandMenuTitle.thread2": {
          id: "codex.commandMenuTitle.thread2",
          defaultMessage: "Go to Chat 2",
          description: "Native menu item to go to chat 2",
        },
        "codex.commandMenuTitle.thread3": {
          id: "codex.commandMenuTitle.thread3",
          defaultMessage: "Go to Chat 3",
          description: "Native menu item to go to chat 3",
        },
        "codex.commandMenuTitle.thread4": {
          id: "codex.commandMenuTitle.thread4",
          defaultMessage: "Go to Chat 4",
          description: "Native menu item to go to chat 4",
        },
        "codex.commandMenuTitle.thread5": {
          id: "codex.commandMenuTitle.thread5",
          defaultMessage: "Go to Chat 5",
          description: "Native menu item to go to chat 5",
        },
        "codex.commandMenuTitle.thread6": {
          id: "codex.commandMenuTitle.thread6",
          defaultMessage: "Go to Chat 6",
          description: "Native menu item to go to chat 6",
        },
        "codex.commandMenuTitle.thread7": {
          id: "codex.commandMenuTitle.thread7",
          defaultMessage: "Go to Chat 7",
          description: "Native menu item to go to chat 7",
        },
        "codex.commandMenuTitle.thread8": {
          id: "codex.commandMenuTitle.thread8",
          defaultMessage: "Go to Chat 8",
          description: "Native menu item to go to chat 8",
        },
        "codex.commandMenuTitle.thread9": {
          id: "codex.commandMenuTitle.thread9",
          defaultMessage: "Go to Chat 9",
          description: "Native menu item to go to chat 9",
        },
        "codex.commandMenuTitle.copyConversationPath": {
          id: "codex.commandMenuTitle.copyConversationPath",
          defaultMessage: "Copy conversation path",
          description: "Native menu item to copy the conversation path",
        },
        "codex.commandMenuTitle.copyDeeplink": {
          id: "codex.commandMenuTitle.copyDeeplink",
          defaultMessage: "Copy deeplink",
          description: "Native menu item to copy the chat deeplink",
        },
        "codex.commandMenuTitle.copyWorkingDirectory": {
          id: "codex.commandMenuTitle.copyWorkingDirectory",
          defaultMessage: "Copy working directory",
          description: "Native menu item to copy the working directory",
        },
        "codex.commandMenuTitle.closeTab": {
          id: "codex.commandMenuTitle.closeTab",
          defaultMessage: "Close Tab",
          description: "Native menu item to close the active tab",
        },
        "codex.commandMenuTitle.closeWindow": {
          id: "codex.commandMenuTitle.closeWindow",
          defaultMessage: "Close",
          description: "Native menu item to close the active window",
        },
        "codex.commandMenuTitle.reloadBrowserPage": {
          id: "codex.commandMenuTitle.reloadBrowserPage",
          defaultMessage: "Reload Browser Page",
          description: "Native menu item to reload the browser page",
        },
        "codex.commandMenuTitle.hardReloadBrowserPage": {
          id: "codex.commandMenuTitle.hardReloadBrowserPage",
          defaultMessage: "Force Reload Browser Page",
          description: "Native menu item to force reload the browser page",
        },
        "codex.commandMenuTitle.newWindow": {
          id: "codex.commandMenuTitle.newWindow",
          defaultMessage: "New Window",
          description: "Native menu item to open a new window",
        },
        "codex.commandMenuTitle.openCommandMenu": {
          id: "codex.commandMenuTitle.openCommandMenu",
          defaultMessage: "Open command menu",
          description: "Native menu item to open the command menu",
        },
        "codex.commandMenuTitle.searchChats": {
          id: "codex.commandMenuTitle.searchChats",
          defaultMessage: "Search Chats…",
          description: "Native menu item to search chats",
        },
        "codex.commandMenuTitle.searchFiles": {
          id: "codex.commandMenuTitle.searchFiles",
          defaultMessage: "Search Files…",
          description: "Native menu item to search files",
        },
        "codex.commandMenuTitle.renameThread": {
          id: "codex.commandMenuTitle.renameThread",
          defaultMessage: "Rename chat",
          description: "Native menu item to rename the current chat",
        },
        "codex.commandMenuTitle.toggleFileTreePanel": f["codex.commandMenuTitle.toggleFileTreePanel"],
        "codex.commandMenuTitle.toggleTraceRecording": {
          id: "codex.commandMenuTitle.toggleTraceRecording",
          defaultMessage: "Start Trace Recording",
          description: "Native menu item to start trace recording",
        },
      }),
      w = {
        ...(0, n.YK)({
          "codex.commandDescription.importPrismToLocal": {
            id: "codex.commandDescription.importPrismToLocal",
            defaultMessage: "Edit and compile a local copy of your Prism project",
            description: "Description of the command that imports a Prism project to the desktop filesystem",
          },
          "codex.commandDescription.meetings.takeNotes": {
            id: "codex.commandDescription.meetings.takeNotes",
            defaultMessage: "Start taking notes with Meetings on this device",
            description:
              "Description of the configurable shortcut that starts a local recording after Meetings setup is complete",
          },
          "codex.commandDescription.screenshotToCurrentChat": {
            id: "codex.commandDescription.screenshotToCurrentChat",
            defaultMessage: "Select a screen area and attach its image to the current chat without sending",
            description: "Description of the macOS rectangular screenshot shortcut and its chat destination",
          },
          "codex.commandDescription.screenshotToNewChat": {
            id: "codex.commandDescription.screenshotToNewChat",
            defaultMessage: "Select a screen area and attach its image to a new chat without sending",
            description: "Description of the macOS rectangular screenshot shortcut and its chat destination",
          },
          "codex.commandDescription.artifacts.selectTool": {
            id: "codex.commandDescription.artifacts.selectTool",
            defaultMessage: "Select and move artifact elements",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: select tool",
          },
          "codex.commandDescription.artifacts.handTool": {
            id: "codex.commandDescription.artifacts.handTool",
            defaultMessage: "Pan the artifact viewport",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: pan tool",
          },
          "codex.commandDescription.canvas.prompt": {
            id: "codex.commandDescription.canvas.prompt",
            defaultMessage: "Open a Canvas prompt at the pointer",
            description: "Shortcut settings description for the Canvas prompt command",
          },
          "codex.commandDescription.artifacts.rectangleTool": {
            id: "codex.commandDescription.artifacts.rectangleTool",
            defaultMessage: "Add rectangles to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: rectangle tool",
          },
          "codex.commandDescription.artifacts.circleTool": {
            id: "codex.commandDescription.artifacts.circleTool",
            defaultMessage: "Add circles and ovals to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: circle tool",
          },
          "codex.commandDescription.artifacts.arrowTool": {
            id: "codex.commandDescription.artifacts.arrowTool",
            defaultMessage: "Add arrows to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: arrow tool",
          },
          "codex.commandDescription.artifacts.lineTool": {
            id: "codex.commandDescription.artifacts.lineTool",
            defaultMessage: "Add lines to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: line tool",
          },
          "codex.commandDescription.artifacts.textTool": {
            id: "codex.commandDescription.artifacts.textTool",
            defaultMessage: "Add text to Canvas, Slides, or Sheets",
            description:
              "Shortcut settings description for the drawing tool shared by Canvas, Slides, and Sheets: text tool",
          },
          "codex.commandDescription.artifacts.noteTool": {
            id: "codex.commandDescription.artifacts.noteTool",
            defaultMessage: "Place sticky notes on the Canvas",
            description:
              "Shortcut settings description for the Canvas sticky-note drawing tool in the shared Artifacts command family",
          },
          "codex.commandDescription.page.addComment": {
            id: "codex.commandDescription.page.addComment",
            defaultMessage: "Comment on selected Page content or the word at the cursor",
            description: "Keyboard shortcut description for starting a Page comment without submitting it",
          },
          "codex.commandDescription.page.formatNumberedList": {
            id: "codex.commandDescription.page.formatNumberedList",
            defaultMessage: "Format the selected Page text as a numbered list",
            description:
              "Description of the numbered-list formatting command in keyboard shortcut settings and the command menu",
          },
          "codex.commandDescription.page.formatBulletedList": {
            id: "codex.commandDescription.page.formatBulletedList",
            defaultMessage: "Format the selected Page text as a bulleted list",
            description:
              "Description of the bulleted-list formatting command in keyboard shortcut settings and the command menu",
          },
          "codex.commandDescription.page.formatChecklist": {
            id: "codex.commandDescription.page.formatChecklist",
            defaultMessage: "Toggle checklist formatting for the selected Page text",
            description:
              "Description of the checklist formatting command in keyboard shortcut settings and the command menu",
          },
          "codex.commandDescription.newThread": {
            id: "codex.commandDescription.newThread",
            defaultMessage: "Start a new chat",
            description: "Description for the New chat command",
          },
          "codex.commandDescription.newProjectlessTask": {
            id: "codex.commandDescription.newProjectlessTask",
            defaultMessage: "Start a new chat outside of any project",
            description: "Description for the New standalone chat command",
          },
          "codex.commandDescription.temporaryChat": {
            id: "codex.commandDescription.temporaryChat",
            defaultMessage: "Start a chat that won't appear in history",
            description: "Description for the Temporary chat command",
          },
          "codex.commandDescription.openThreadInNewWindow": {
            id: "codex.commandDescription.openThreadInNewWindow",
            defaultMessage: "Open the current chat in a new window",
            description: "Description for the Open in new window command",
          },
          "codex.commandDescription.archiveThread": {
            id: "codex.commandDescription.archiveThread",
            defaultMessage: "Archive the current chat",
            description: "Description for the Archive chat command",
          },
          "codex.commandDescription.deleteOrbit": {
            id: "codex.commandDescription.deleteOrbit",
            defaultMessage: "Confirm deletion of your {dot}",
            description:
              "Description for the command that opens confirmation to permanently delete the current assistant. The dot placeholder is the untranslated term for the user's agent.",
          },
          "codex.commandDescription.deleteChat": {
            id: "codex.commandDescription.deleteChat",
            defaultMessage: "Confirm deletion of the current chat",
            description:
              "Description of the Delete chat keyboard shortcut, which opens a confirmation dialog and does not delete the chat immediately",
          },
          "codex.commandDescription.markThreadUnread": {
            id: "codex.commandDescription.markThreadUnread",
            defaultMessage: "Mark the current chat as unread",
            description: "Description for the Mark as unread command",
          },
          "codex.commandDescription.toggleThreadPin": {
            id: "codex.commandDescription.toggleThreadPin",
            defaultMessage: "Pin or unpin the current chat",
            description: "Description for the Toggle pin command",
          },
          "codex.commandDescription.copyPageLink": {
            id: "codex.commandDescription.copyPageLink",
            defaultMessage: "Copy the current document’s link to the clipboard",
            description: "Description for the Copy document link keyboard shortcut for a Page, slide, or sheet",
          },
          "codex.commandDescription.copyConversationMarkdown": {
            id: "codex.commandDescription.copyConversationMarkdown",
            defaultMessage: "Copy the current chat as Markdown",
            description: "Description for the Copy as Markdown command",
          },
          "codex.commandDescription.copyLastCodeBlock": {
            id: "codex.commandDescription.copyLastCodeBlock",
            defaultMessage: "Copy the last assistant code block in the current chat",
            description:
              "Description in keyboard shortcut settings for the command that copies only the code from the most recent assistant code block, without its Markdown fence",
          },
          "codex.commandDescription.openSideChat": {
            id: "codex.commandDescription.openSideChat",
            defaultMessage: "Open the current chat in a side chat",
            description: "Description for the Open side chat command",
          },
          "codex.commandDescription.focusMainChat": {
            id: "codex.commandDescription.focusMainChat",
            defaultMessage: "Move keyboard focus to the main chat composer",
            description: "Description for the Focus main chat command",
          },
          "codex.commandDescription.focusSideChat": {
            id: "codex.commandDescription.focusSideChat",
            defaultMessage: "Move keyboard focus to an open side chat composer",
            description: "Description for the Focus side chat command",
          },
          "codex.commandDescription.openControlWindow": {
            id: "codex.commandDescription.openControlWindow",
            defaultMessage: "Open the voice chat control window",
            description: "Description for the Open control window command",
          },
          "codex.commandDescription.toggleDebugModal": {
            id: "codex.commandDescription.toggleDebugModal",
            defaultMessage: "Show or hide the internal debug panel",
            description: "Description for the Toggle debug panel shortcut",
          },
          "codex.commandDescription.undoAppAction": {
            id: "codex.commandDescription.undoAppAction",
            defaultMessage: "Undo the most recent app action",
            description: "Description for the Undo last action command",
          },
          "codex.commandDescription.redoAppAction": {
            id: "codex.commandDescription.redoAppAction",
            defaultMessage: "Redo the most recently undone app action",
            description: "Description for the Redo last action command",
          },
          "codex.commandDescription.reopenClosedTab": {
            id: "codex.commandDescription.reopenClosedTab",
            defaultMessage: "Reopen the most recently closed tab",
            description: "Description for the Reopen closed tab command",
          },
          "codex.commandDescription.composer.openModelPicker": {
            id: "codex.commandDescription.composer.openModelPicker",
            defaultMessage: "Open the composer controls for model effort",
            description: "Description for the shortcut that opens the reasoning effort controls in the composer",
          },
          "codex.commandDescription.composer.openRecentModels": {
            id: "codex.commandDescription.composer.openRecentModels",
            defaultMessage: "Open recently used model, effort, and speed combinations",
            description: "Description for the shortcut that opens recent model configurations in the composer",
          },
          "codex.commandDescription.composer.openProjectPicker": {
            id: "codex.commandDescription.composer.openProjectPicker",
            defaultMessage: "Open the composer project picker",
            description: "Description for the Open project picker shortcut",
          },
          "codex.commandDescription.composer.toggleDictation": {
            id: "codex.commandDescription.composer.toggleDictation",
            defaultMessage: "Start or stop dictation in the chat composer",
            description:
              "Description of the keyboard shortcut that records speech and inserts the transcript into the chat draft",
          },
          "codex.commandDescription.composer.startVoiceMode": {
            id: "codex.commandDescription.composer.startVoiceMode",
            defaultMessage: "Start or stop voice chat",
            description: "Description for the Toggle voice mode shortcut",
          },
          "codex.commandDescription.composer.submit": {
            id: "codex.commandDescription.composer.submit",
            defaultMessage: "Send the current composer message",
            description: "Description for the Send message shortcut",
          },
          "codex.commandDescription.browser.toggleAnnotationMode": {
            id: "codex.commandDescription.browser.toggleAnnotationMode",
            defaultMessage: "Enter or leave annotation mode in the browser",
            description: "Description of the keyboard shortcut that toggles annotation mode in the in-app browser",
          },
          "codex.commandDescription.presentation.duplicateSelection": {
            id: "codex.commandDescription.presentation.duplicateSelection",
            defaultMessage: "Make a copy of the selected objects on the current slide",
            description: "Description for the presentation Duplicate shortcut",
          },
          "codex.commandDescription.artifact.sendAnnotations": {
            id: "codex.commandDescription.artifact.sendAnnotations",
            defaultMessage: "Send pending annotations in the focused artifact",
            description: "Description for the Send annotations shortcut",
          },
          "codex.commandDescription.composer.submitInBackground": {
            id: "codex.commandDescription.composer.submitInBackground",
            defaultMessage: "Send the current composer message without opening its chat",
            description: "Description for the Send message in background shortcut",
          },
          "codex.commandDescription.composer.steer": {
            id: "codex.commandDescription.composer.steer",
            defaultMessage: "Submit the current composer prompt as a steering message",
            description: "Description for the Steer prompt shortcut",
          },
          "codex.commandDescription.composer.queue": {
            id: "codex.commandDescription.composer.queue",
            defaultMessage: "Submit the current composer prompt as a queued message",
            description: "Description for the Queue prompt shortcut",
          },
          "codex.commandDescription.composer.clear": {
            id: "codex.commandDescription.composer.clear",
            defaultMessage: "Clear the current composer prompt",
            description: "Description for the Clear prompt shortcut",
          },
          "codex.commandDescription.composer.addPhotos": {
            id: "codex.commandDescription.composer.addPhotos",
            defaultMessage: "Add photos to the active composer",
            description: "Description for the Add photos shortcut",
          },
          "codex.commandDescription.composer.addFiles": {
            id: "codex.commandDescription.composer.addFiles",
            defaultMessage: "Attach files and folders to the active composer",
            description: "Description for the Attach files and folders shortcut",
          },
          "codex.commandDescription.composer.toggleFastMode": {
            id: "codex.commandDescription.composer.toggleFastMode",
            defaultMessage: "Cycle through available speeds: Standard, Fast, and Ultrafast",
            description: "Description for the shortcut that cycles through the current model’s available speeds",
          },
          "codex.commandDescription.composer.increaseReasoningEffort": {
            id: "codex.commandDescription.composer.increaseReasoningEffort",
            defaultMessage: "Increase the current composer reasoning effort",
            description: "Description for the Increase reasoning effort shortcut",
          },
          "codex.commandDescription.composer.decreaseReasoningEffort": {
            id: "codex.commandDescription.composer.decreaseReasoningEffort",
            defaultMessage: "Decrease the current composer reasoning effort",
            description: "Description for the Decrease reasoning effort shortcut",
          },
          "codex.commandDescription.composer.cycleReasoningEffort": {
            id: "codex.commandDescription.composer.cycleReasoningEffort",
            defaultMessage: "Cycle through composer reasoning effort options",
            description: "Description for the Cycle reasoning effort shortcut",
          },
          "codex.commandDescription.composer.togglePlanMode": {
            id: "codex.commandDescription.composer.togglePlanMode",
            defaultMessage: "Turn plan mode on or off in the current composer",
            description: "Description for the Toggle plan mode shortcut",
          },
          "codex.commandDescription.composer.toggleWorktreeMode": {
            id: "codex.commandDescription.composer.toggleWorktreeMode",
            defaultMessage: "Switch the current composer between local and a new worktree",
            description: "Description for the Toggle Local/Worktree shortcut",
          },
          "codex.commandDescription.composer.cycleHost": {
            id: "codex.commandDescription.composer.cycleHost",
            defaultMessage: "Cycle the new chat between this computer and available remote machines",
            description:
              "Description for the Cycle host shortcut, which wraps back to this computer after the last remote machine",
          },
          "codex.commandDescription.composer.toggleWorkRunLocation": {
            id: "codex.commandDescription.composer.toggleWorkRunLocation",
            defaultMessage: "Switch ChatGPT Work between cloud and local execution",
            description: "Description for the Toggle Cloud/Local shortcut",
          },
          "codex.commandDescription.approval.approve": {
            id: "codex.commandDescription.approval.approve",
            defaultMessage: "Approve the active request",
            description: "Description for the Approve request shortcut",
          },
          "codex.commandDescription.approval.decline": {
            id: "codex.commandDescription.approval.decline",
            defaultMessage: "Decline the active request",
            description: "Description for the Decline request shortcut",
          },
          "codex.commandDescription.git.commit": {
            id: "codex.commandDescription.git.commit",
            defaultMessage: "Open commit or push options",
            description: "Description for the Commit or push command",
          },
          "codex.commandDescription.git.createPullRequest": {
            id: "codex.commandDescription.git.createPullRequest",
            defaultMessage: "Open pull request creation options",
            description: "Description for the Create PR command",
          },
          "codex.commandDescription.git.createDraftPullRequest": {
            id: "codex.commandDescription.git.createDraftPullRequest",
            defaultMessage: "Open draft pull request creation options",
            description: "Description for the Create draft PR command",
          },
          "codex.commandDescription.git.createBranch": {
            id: "codex.commandDescription.git.createBranch",
            defaultMessage: "Open branch creation options",
            description: "Description for the Create branch command",
          },
          "codex.commandDescription.git.mergePullRequest": {
            id: "codex.commandDescription.git.mergePullRequest",
            defaultMessage: "Open pull request merge options",
            description: "Description for the Merge PR command",
          },
          "codex.commandDescription.git.openPullRequest": {
            id: "codex.commandDescription.git.openPullRequest",
            defaultMessage: "Open the pull request linked to the current chat",
            description: "Description for the Open PR on GitHub command",
          },
          "codex.commandDescription.git.toggleBlame": {
            id: "codex.commandDescription.git.toggleBlame",
            defaultMessage: "Show or hide author and commit details for the active editor line",
            description: "Description for the Toggle Git blame command",
          },
          "codex.commandDescription.forkThread": {
            id: "codex.commandDescription.forkThread",
            defaultMessage: "Fork the current chat",
            description: "Description for the Fork chat shortcut",
          },
          "codex.commandDescription.showMiniOverlay": {
            id: "codex.commandDescription.showMiniOverlay",
            defaultMessage: "Show Mini from anywhere",
            description: "Description for the command that shows Mini, the floating compact panel",
          },
          "codex.commandDescription.nextThreadNeedingAttention": {
            id: "codex.commandDescription.nextThreadNeedingAttention",
            defaultMessage: "Switch to the next chat awaiting input or with unread activity",
            description:
              "Description for a navigation command that prioritizes chats awaiting user input before chats with unread activity",
          },
          "codex.commandDescription.previousThread": {
            id: "codex.commandDescription.previousThread",
            defaultMessage: "Switch to the previous sidebar item",
            description: "Description for the Previous sidebar item command",
          },
          "codex.commandDescription.previousTab": {
            id: "codex.commandDescription.previousTab",
            defaultMessage: "Switch to the previous tab",
            description: "Description for the Previous tab shortcut",
          },
          "codex.commandDescription.previousRecentThread": {
            id: "codex.commandDescription.previousRecentThread",
            defaultMessage: "Cycle to the previous recently viewed chat",
            description: "Description for the Previous recently viewed chat shortcut",
          },
          "codex.commandDescription.nextThread": {
            id: "codex.commandDescription.nextThread",
            defaultMessage: "Switch to the next sidebar item",
            description: "Description for the Next sidebar item command",
          },
          "codex.commandDescription.nextTab": {
            id: "codex.commandDescription.nextTab",
            defaultMessage: "Switch to the next tab",
            description: "Description for the Next tab shortcut",
          },
          "codex.commandDescription.nextRecentThread": {
            id: "codex.commandDescription.nextRecentThread",
            defaultMessage: "Cycle to the next recently viewed chat",
            description: "Description for the Next recently viewed chat shortcut",
          },
          "codex.commandDescription.recentThreadSlot": {
            id: "codex.commandDescription.recentThreadSlot",
            defaultMessage: "Open the recently updated chat in this shortcut slot",
            description: "Description for shortcuts that open one of the six most recently updated chats",
          },
          "codex.commandDescription.switchToChat": {
            id: "codex.commandDescription.switchToChat",
            defaultMessage: "Switch to Chat",
            description: "Description for the Switch to Chat command",
          },
          "codex.commandDescription.switchToWork": {
            id: "codex.commandDescription.switchToWork",
            defaultMessage: "Switch to Work",
            description: "Description for the Switch to Work command",
          },
          "codex.commandDescription.switchToCodex": {
            id: "codex.commandDescription.switchToCodex",
            defaultMessage: "Switch to Codex",
            description: "Description for the Switch to Codex command",
          },
          "codex.commandDescription.settings": {
            id: "codex.commandDescription.settings",
            defaultMessage: "Open {appName} settings",
            description: "Description for the Settings command",
          },
          "codex.commandDescription.codexMicroSettings": {
            id: "codex.commandDescription.codexMicroSettings",
            defaultMessage: "Open Codex Micro setup",
            description: "Description for the Codex Micro setup keycap action",
          },
          "codex.commandDescription.mcpSettings": {
            id: "codex.commandDescription.mcpSettings",
            defaultMessage: "Configure MCP servers",
            description: "Description for the MCP settings command",
          },
          "codex.commandDescription.keyboardShortcuts": {
            id: "codex.commandDescription.keyboardShortcuts",
            defaultMessage: "Customize keyboard shortcuts",
            description: "Description for the Keyboard shortcuts command",
          },
          "codex.commandDescription.showKeyboardShortcuts": {
            id: "codex.commandDescription.showKeyboardShortcuts",
            defaultMessage: "Show the shortcuts available right now",
            description: "Description for the command that shows currently active shortcuts",
          },
          "codex.commandDescription.clearAllUnreads": {
            id: "codex.commandDescription.clearAllUnreads",
            defaultMessage: "Mark all chats and scheduled task updates as read",
            description: "Description of the command that clears all unread updates",
          },
          "codex.commandDescription.manageTasks": {
            id: "codex.commandDescription.manageTasks",
            defaultMessage: "Create or manage scheduled tasks from the current page",
            description: "Description for the Manage scheduled tasks command",
          },
          "codex.commandDescription.forceReloadSkills": {
            id: "codex.commandDescription.forceReloadSkills",
            defaultMessage: "Refresh the skill catalog for the current context",
            description: "Description for the Force reload skills command",
          },
          "codex.commandDescription.openSkills": {
            id: "codex.commandDescription.openSkills",
            defaultMessage: "Browse installed and recommended skills",
            description: "Description for the Go to skills command",
          },
          "codex.commandDescription.newProject": {
            id: "codex.commandDescription.newProject",
            defaultMessage: "Create a project",
            description: "Description for the command that opens project creation",
          },
          "codex.commandDescription.openFolder": {
            id: "codex.commandDescription.openFolder",
            defaultMessage: "Add a local project to {appName}",
            description: "Description for the Open folder command",
          },
          "codex.commandDescription.toggleSidebar": {
            id: "codex.commandDescription.toggleSidebar",
            defaultMessage: "Show or hide the sidebar",
            description: "Description for the Toggle sidebar command",
          },
          "codex.commandDescription.toggleBottomPanel": {
            id: "codex.commandDescription.toggleBottomPanel",
            defaultMessage: "Show or hide the bottom panel",
            description: "Description for the Toggle bottom panel command",
          },
          "codex.commandDescription.togglePinnedSummary": {
            id: "codex.commandDescription.togglePinnedSummary",
            defaultMessage: "Show or hide the pinned summary",
            description: "Description for the Toggle pinned summary command",
          },
          "codex.commandDescription.toggleTerminal": {
            id: "codex.commandDescription.toggleTerminal",
            defaultMessage: "Open the terminal panel",
            description: "Description for the Open terminal command",
          },
          "codex.commandDescription.newTab": {
            id: "codex.commandDescription.newTab",
            defaultMessage: "Open a new tab",
            description: "Description for the New tab command",
          },
          "codex.commandDescription.closeOtherTabs": {
            id: "codex.commandDescription.closeOtherTabs",
            defaultMessage: "Close all tabs except the active tab",
            description: "Description for the Close other tabs shortcut",
          },
          "codex.commandDescription.showWorkspaceTabView": {
            id: "codex.commandDescription.showWorkspaceTabView",
            defaultMessage: "Enter or exit full view",
            description: "Description for the command that toggles full view for the workspace",
          },
          "codex.commandDescription.exitWorkspaceFullView": {
            id: "codex.commandDescription.exitWorkspaceFullView",
            defaultMessage: "Restore the fullscreen panel to split view",
            description: "Description for the Escape command that leaves workspace full view without closing its tabs",
          },
          "codex.commandDescription.stepWorkspaceLayout": {
            id: "codex.commandDescription.stepWorkspaceLayout",
            defaultMessage: "Step from full view to split view, hide tabs, or show tabs beside Chat",
            description:
              "Description for the command that steps down through workspace layouts and restores split view from hidden tabs",
          },
          "codex.commandDescription.openReviewTab": {
            id: "codex.commandDescription.openReviewTab",
            defaultMessage: "Open the Changes tab",
            description: "Description for the Open Changes tab command",
          },
          "codex.commandDescription.toggleReviewTab": {
            id: "codex.commandDescription.toggleReviewTab",
            defaultMessage: "Show or hide Changes for the current Git-backed chat",
            description: "Description for the Toggle Changes shortcut",
          },
          "codex.commandDescription.toggleReviewPanel": {
            id: "codex.commandDescription.toggleReviewPanel",
            defaultMessage: "Show or hide Changes for the current chat",
            description: "Description for the Toggle Changes panel command",
          },
          "codex.commandDescription.file.goToDefinition": {
            id: "codex.commandDescription.file.goToDefinition",
            defaultMessage: "Open the definition of the selected file symbol",
            description: "Description for the Go to definition shortcut",
          },
          "codex.commandDescription.file.findReferences": {
            id: "codex.commandDescription.file.findReferences",
            defaultMessage: "Find references to the selected file symbol",
            description: "Description for the Find references shortcut",
          },
          "codex.commandDescription.file.navigateBack": {
            id: "codex.commandDescription.file.navigateBack",
            defaultMessage: "Return to the previous file location",
            description: "Description for the file navigation back shortcut",
          },
          "codex.commandDescription.file.navigateForward": {
            id: "codex.commandDescription.file.navigateForward",
            defaultMessage: "Return to the next file location",
            description: "Description for the file navigation forward shortcut",
          },
          "codex.commandDescription.findInThread": {
            id: "codex.commandDescription.findInThread",
            defaultMessage: "Search the current chat",
            description: "Description for the Find command",
          },
          "codex.commandDescription.goToLine": {
            id: "codex.commandDescription.goToLine",
            defaultMessage: "Go to a line in the current file",
            description: "Description for the Go to line command",
          },
          "codex.commandDescription.focusBrowserAddressBar": {
            id: "codex.commandDescription.focusBrowserAddressBar",
            defaultMessage: "Focus the in-app browser address bar",
            description: "Description for the Focus browser address bar command",
          },
          "codex.commandDescription.navigateBrowserBack": {
            id: "codex.commandDescription.navigateBrowserBack",
            defaultMessage: "Go back in browser history",
            description: "Description for the Browser back command",
          },
          "codex.commandDescription.navigateBrowserForward": {
            id: "codex.commandDescription.navigateBrowserForward",
            defaultMessage: "Go forward in browser history",
            description: "Description for the Browser forward command",
          },
          "codex.commandDescription.navigateBack": {
            id: "codex.commandDescription.navigateBack",
            defaultMessage: "Go back in navigation history",
            description: "Description for the Back command",
          },
          "codex.commandDescription.navigateForward": {
            id: "codex.commandDescription.navigateForward",
            defaultMessage: "Go forward in navigation history",
            description: "Description for the Forward command",
          },
          "codex.commandDescription.logOut": {
            id: "codex.commandDescription.logOut",
            defaultMessage: "Sign out of {appName}",
            description: "Description for the Log out command",
          },
          "codex.commandDescription.feedback": {
            id: "codex.commandDescription.feedback",
            defaultMessage: "Send product feedback to the ChatGPT team",
            description: "Description for the Feedback command",
          },
          "codex.commandDescription.environmentActionSlot": {
            id: "codex.commandDescription.environmentActionSlot",
            defaultMessage: "Run the environment action in this shortcut slot",
            description: "Description for environment action shortcut slots",
          },
          "codex.commandDescription.hotkeyWindow": {
            id: "codex.commandDescription.hotkeyWindow",
            defaultMessage: "Show or hide Popout Window from anywhere on desktop",
            description: "Description for the Popout Window hotkey",
          },
          "codex.commandDescription.spotlightSearch": {
            id: "codex.commandDescription.spotlightSearch",
            defaultMessage: "Open Spotlight search from anywhere on desktop",
            description:
              "Description of the global shortcut for Codex Spotlight, the floating desktop search and command panel",
          },
          "codex.commandDescription.notchVoice": {
            id: "codex.commandDescription.notchVoice",
            defaultMessage: "Start voice in Mini or show the ongoing call",
            description: "Description of the notch voice shortcut",
          },
          "codex.commandDescription.toggleNotch": {
            id: "codex.commandDescription.toggleNotch",
            defaultMessage: "Expand or collapse the notch from anywhere",
            description:
              "Description for the shortcut that expands or collapses the Codex notch panel at the top of the screen",
          },
          "codex.commandDescription.globalDictationHold": {
            id: "codex.commandDescription.globalDictationHold",
            defaultMessage: "Hold to dictate, release to finish. Double-tap for hands-free, tap to finish.",
            description: "Description for the dictation shortcut",
          },
          "codex.commandDescription.globalDictationSingleTap": {
            id: "codex.commandDescription.globalDictationSingleTap",
            defaultMessage: "Press once to start, again to finish",
            description: "Description for the single-tap dictation shortcut",
          },
          "codex.commandDescription.copyConversationPath": {
            id: "codex.commandDescription.copyConversationPath",
            defaultMessage: "Copy the current chat path",
            description: "Description for the Copy conversation path shortcut",
          },
          "codex.commandDescription.copyDeeplink": {
            id: "codex.commandDescription.copyDeeplink",
            defaultMessage: "Copy a deeplink to the current chat",
            description: "Description for the Copy deeplink shortcut",
          },
          "codex.commandDescription.copyWorkingDirectory": {
            id: "codex.commandDescription.copyWorkingDirectory",
            defaultMessage: "Copy the current chat working directory",
            description: "Description for the Copy working directory shortcut",
          },
          "codex.commandDescription.closeTab": {
            id: "codex.commandDescription.closeTab",
            defaultMessage: "Close the active tab",
            description: "Description for the Close Tab shortcut",
          },
          "codex.commandDescription.closeWindow": {
            id: "codex.commandDescription.closeWindow",
            defaultMessage: "Close the active window",
            description: "Description for the Close Window shortcut",
          },
          "codex.commandDescription.reloadBrowserPage": {
            id: "codex.commandDescription.reloadBrowserPage",
            defaultMessage: "Reload the active browser page",
            description: "Description for the Reload Browser Page shortcut",
          },
          "codex.commandDescription.hardReloadBrowserPage": {
            id: "codex.commandDescription.hardReloadBrowserPage",
            defaultMessage: "Force reload the active browser page",
            description: "Description for the Force Reload Browser Page shortcut",
          },
          "codex.commandDescription.newWindow": {
            id: "codex.commandDescription.newWindow",
            defaultMessage: "Open a new window",
            description: "Description for the New Window shortcut",
          },
          "codex.commandDescription.openCommandMenu": {
            id: "codex.commandDescription.openCommandMenu",
            defaultMessage: "Open the command menu",
            description: "Description for the Open command menu shortcut",
          },
          "codex.commandDescription.searchChats": {
            id: "codex.commandDescription.searchChats",
            defaultMessage: "Search and switch to a chat",
            description: "Description for the Switch chat command",
          },
          "codex.commandDescription.searchChatsPrevious": {
            id: "codex.commandDescription.searchChatsPrevious",
            defaultMessage: "Open the chat picker and cycle backward through chats",
            description:
              "Description of the shortcut that highlights the previous chat in the picker until the user confirms a selection",
          },
          "codex.commandDescription.togglePriorityFilter": {
            id: "codex.commandDescription.togglePriorityFilter",
            defaultMessage: "Turn the sidebar activity view on or off",
            description: "Description for the Toggle activity view command",
          },
          "codex.commandDescription.searchFiles": {
            id: "codex.commandDescription.searchFiles",
            defaultMessage: "Search files",
            description: "Description for the Search Files shortcut",
          },
          "codex.commandDescription.renameThread": {
            id: "codex.commandDescription.renameThread",
            defaultMessage: "Rename the current chat",
            description: "Description for the Rename chat shortcut",
          },
          "codex.commandDescription.toggleFileTreePanel": {
            id: "codex.commandDescription.toggleFileTreePanel",
            defaultMessage: "Show or hide a page's navigation, or the code viewer's file tree",
            description:
              "Shortcut description explaining that the navigation panel shows the Pages hierarchy while viewing a Page and project files while working with code",
          },
          "codex.commandDescription.toggleTraceRecording": {
            id: "codex.commandDescription.toggleTraceRecording",
            defaultMessage: "Start or stop trace recording",
            description: "Description for the Start Trace Recording shortcut",
          },
          "codex.commandDescription.focusTab": {
            id: "codex.commandDescription.focusTab",
            defaultMessage: "Focus the tab at this position in the chat tab strip",
            description: "Description for numbered chat tab focus shortcuts",
          },
          "codex.commandDescription.threadSlot": {
            id: "codex.commandDescription.threadSlot",
            defaultMessage: "Open the visible chat in this shortcut slot",
            description: "Description for the chat slot commands",
          },
        }),
        "codex.commandDescription.importExternalAgent": h.description,
        "codex.commandDescription.personalitySettings": u.description,
      }
    function D(e, o, t = !1) {
      if ("openOrbit" === e.id) return s(o).title
      if ("focusPageBlockControls" === e.id) return r(o).title
      if ("openAvatarOverlay" === e.id && t) return o.formatMessage(g)
      if ("composer.captureAppshot" === e.id) return c(o).title
      if ("titleIntlId" in e) {
        var i
        let t
        return v(x, e.titleIntlId)
          ? o.formatMessage(x[e.titleIntlId], { dot: "dot" })
          : null == (t = p((i = e.id)) ? l[i] : null)
            ? ""
            : o.formatMessage(t.title)
      }
      return o.formatMessage(M[e.electron.menuTitleIntlId])
    }
    function b(e, o, t, n = !1) {
      var d
      let m
      if ("openOrbit" === e.id) return s(o)
      if ("focusPageBlockControls" === e.id) return r(o)
      if ("composer.captureAppshot" === e.id) return c(o)
      if ("toggleSidePanel" === e.id)
        return {
          title:
            t?.title ??
            o.formatMessage({
              id: "codex.command.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs",
              description:
                "Command palette and shortcut settings title for switching between Chat and the previous content tab in full view or toggling workspace tab visibility in split view",
            }),
          description:
            t?.description ??
            o.formatMessage({
              id: "codex.commandDescription.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs in full view, or show or hide tabs in split view",
              description:
                "Description for the command that switches between Chat and the previous content tab in full view or toggles workspace tab visibility in split view",
            }),
        }
      let h = (0, i.yF)(e)
          ? v(w, e.descriptionIntlId)
            ? o.formatMessage(w[e.descriptionIntlId], { appName: a.C, dot: "dot" })
            : null == (m = p((d = e.id)) ? l[d] : null)
              ? ""
              : o.formatMessage(m.description)
          : "",
        u = t?.title ?? D(e, o)
      return ("openAvatarOverlay" === e.id && n && (u = D(e, o, !0)), { title: u, description: t?.description ?? h })
    }
    function v(e, o) {
      return Object.hasOwn(e, o)
    }
  },
}
//# sourceMappingURL=437750.efeec419ad.js.map
