export const __rspack_esm_ids = [437750]
export const __webpack_modules__ = {
  TonS(e, o, a) {
    var d = a("ABep")
    ;(a("zd8w"),
      (o.A = (e) =>
        (0, d.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, d.jsx)("path", {
            d: "M9.33467 16.6663V4.93978L4.6374 9.63704L4.1667 9.16634L3.69599 8.69661L9.52998 2.86263L9.63447 2.77767C9.8925 2.60753 10.2433 2.63564 10.4704 2.86263L16.3034 8.69661L16.3884 8.80111C16.5588 9.05922 16.5306 9.40982 16.3034 9.63704C16.0762 9.86414 15.7255 9.89242 15.4675 9.722L15.363 9.63704L10.6647 4.9388V16.6663C10.6647 17.0336 10.367 17.3314 9.99971 17.3314C9.63259 17.3312 9.33467 17.0335 9.33467 16.6663ZM4.6374 9.63704C4.3777 9.89674 3.95569 9.89674 3.69599 9.63704C3.43657 9.37744 3.43668 8.95628 3.69599 8.69661L4.6374 9.63704Z",
            fill: "currentColor",
          }),
        })))
  },
  wxUR(e, o, a) {
    var d = a("owF8"),
      t = a("WVWQ"),
      c = a("hbRe")
    a.d(
      o,
      {},
      {
        Y: function (e, o, a) {
          switch (e.type) {
            case "command": {
              let o = (0, d.$S)(e.commandId)
              return null == o ? e.commandId : (0, t.I)(o, a)
            }
            case "skill": {
              let a = o.find((o) => o.name === e.skillName && o.path === e.skillPath)
              return `$${null == a ? e.skillName : (0, c.nf)(a)}`
            }
          }
        },
      },
    )
  },
  owF8(e, o, a) {
    var d = a("AGyq"),
      t = a("q3HK")
    let c = d.zQ.filter(
      (e) => ("webview" === e.kind && (0, d._Q)(e, "electron")) || ("electron-only" === e.kind && (0, t.Zu)(e.id)),
    )
    a.d(
      o,
      {},
      {
        $S: function (e) {
          let o = "newThread" === e ? "newTask" : e
          return c.find((e) => e.id === o) ?? null
        },
        Fh: c,
        ed: function (e) {
          let o = /^recentThread([1-6])$/.exec(e)
          return null == o ? null : Number(o[1]) - 1
        },
      },
    )
  },
  Om6N(e, o, a) {
    var d = a("qmMi"),
      t = a("L0nj"),
      c = a("OWtl")
    let n = { action: null, direction: "right", event: { angle: 0, distance: 0 }, status: "tracking", visible: !1 },
      i = (0, d.vP)(c.u, n)
    function s(e) {
      return e.visible ? { ...e, visible: !1 } : e
    }
    a.d(
      o,
      {},
      {
        FV: i,
        hT: function (e) {
          e.set(i, s)
        },
        qJ: function (e, o, a) {
          var d
          e.set(
            i,
            ((d = e.get(i)),
            {
              action: null,
              direction: (0, t.pU)(o, 0.1) ?? d.direction,
              event: o,
              gameActivationProgress: Math.min(Math.max(a, 0), 1),
              status: "game-gesture",
              visible: !0,
            }),
          )
        },
        ub: function (e) {
          e.set(i, n)
        },
        yn: function (e, o) {
          let a = (function (
            e,
            { activeDirection: o, enabled: a, event: d, executionStatus: c, mapping: n, previousActiveDirection: i },
          ) {
            if (!a) return s(e)
            if (d.distance < 0.1) return e.visible ? { ...e, event: d } : e
            let r = (0, t.pU)(d, 0.1)
            if (null == r) return e
            let m = n[r]
            if (o === r && i !== r)
              return {
                action: m,
                direction: r,
                event: d,
                status: null == m ? "unassigned" : (c ?? "unavailable"),
                visible: !0,
              }
            let l = e.visible && e.direction === r && o === r && i === r && "tracking" !== e.status
            return { action: m, direction: r, event: d, status: l ? e.status : "tracking", visible: !0 }
          })(e.get(i), o)
          return (e.set(i, a), a)
        },
      },
    )
  },
  h062(e, o, a) {
    var d = a("ABep"),
      t = a("QosV"),
      c = a("SLM1"),
      n = a("on57"),
      i = a("qmMi"),
      s = a("Wf1j"),
      r = a("oyxz"),
      m = a("Qgfj"),
      l = a("CyfE"),
      g = a("HOLv"),
      u = a("TonS"),
      p = a("bPa2"),
      x = a("wxUR"),
      f = a("Om6N")
    let h = { up: "", right: "rotate-90", down: "rotate-180", left: "-rotate-90" },
      M = {
        "game-gesture": "text-info",
        tracking: "text-secondary",
        triggered: "text-info",
        unassigned: "text-secondary",
        unavailable: "text-warning",
      }
    function T(e) {
      let o,
        a,
        i,
        m,
        l,
        p,
        f,
        T,
        w,
        b,
        v,
        k,
        C,
        y,
        S,
        P,
        A,
        R,
        F,
        B,
        O,
        j,
        N,
        W,
        L = (0, t.c)(72),
        { feedback: G, isMappingEditorOpen: I, skills: V } = e,
        q = (0, s.A)(),
        E = G.visible && !I,
        _ = G.event.angle * Math.PI * 2,
        U = 13 * Math.min(G.event.distance, 1),
        K = "game-gesture" === G.status,
        H = K ? (G.gameActivationProgress ?? 0) : Math.min(G.event.distance / 0.5, 1)
      L[0] !== G.action || L[1] !== q || L[2] !== K || L[3] !== V
        ? ((o = K
            ? (0, d.jsx)(r.A, { ...D.miniGameTitle })
            : null == G.action
              ? (0, d.jsx)(r.A, { id: "codexMicro.joystickFeedback.unassignedTitle", defaultMessage: "Unassigned" })
              : (0, x.Y)(G.action, V, q)),
          (L[0] = G.action),
          (L[1] = q),
          (L[2] = K),
          (L[3] = V),
          (L[4] = o))
        : (o = L[4])
      let z = o,
        Y = D[G.status]
      "tracking" === G.status && null == G.action && (Y = D.unassignedTracking)
      let Q = "triggered" === G.status,
        $ = "unavailable" === G.status,
        Z = Q || K,
        J = !E,
        X = E ? "translate-y-0 opacity-100" : "-translate-y-1 opacity-0"
      L[5] !== X
        ? ((a = (0, n.A)(
            "pointer-events-none absolute top-14 left-1/2 z-[55] w-[min(19rem,calc(100%_-_2rem))] -translate-x-1/2 transition-[opacity,transform] duration-basic ease-out motion-reduce:translate-y-0 motion-reduce:transition-opacity",
            X,
          )),
          (L[5] = X),
          (L[6] = a))
        : (a = L[6])
      let ee = G.status,
        eo = Z && "border-text-info/35 shadow-[0_10px_30px_rgba(30,88,190,0.18)]",
        ea = $ && "border-text-warning/35",
        ed = !Z && !$ && "border-default"
      L[7] !== eo || L[8] !== ea || L[9] !== ed
        ? ((i = (0, n.A)(
            "flex items-center gap-3 rounded-2xl border bg-surface-elevated-secondary p-2.5 shadow-xl transition-[border-color,box-shadow] duration-basic ease-out",
            eo,
            ea,
            ed,
          )),
          (L[7] = eo),
          (L[8] = ea),
          (L[9] = ed),
          (L[10] = i))
        : (i = L[10])
      let et = Z
        ? "border-text-info/45 shadow-[inset_0_0_0_1px_rgba(141,181,255,0.12),0_0_14px_rgba(91,141,235,0.18)]"
        : "border-default"
      ;(L[11] !== et
        ? ((m = (0, n.A)(
            "relative size-14 shrink-0 overflow-hidden rounded-full border shadow-inner transition-[border-color,box-shadow] duration-basic ease-out",
            et,
          )),
          (L[11] = et),
          (L[12] = m))
        : (m = L[12]),
        L[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, d.jsx)("div", { className: "absolute inset-[1.15rem] rounded-full border border-border/70" })),
            (p = (0, d.jsx)("div", {
              className: "absolute top-1/2 right-2 left-2 h-px -translate-y-1/2 bg-border/45",
            })),
            (f = (0, d.jsx)("div", {
              className: "absolute top-2 bottom-2 left-1/2 w-px -translate-x-1/2 bg-border/45",
            })),
            (L[13] = l),
            (L[14] = p),
            (L[15] = f))
          : ((l = L[13]), (p = L[14]), (f = L[15])))
      let ec = Z && "bg-text-info shadow-[0_0_9px_rgba(91,141,235,0.72)]",
        en = $ && "bg-text-warning",
        ei = !Z && !$ && "bg-text"
      L[16] !== ec || L[17] !== en || L[18] !== ei
        ? ((T = (0, n.A)(
            "absolute inset-0 m-auto size-2.5 rounded-full shadow-sm transition-[background-color,box-shadow,transform] duration-75 ease-out motion-reduce:transition-none",
            ec,
            en,
            ei,
          )),
          (L[16] = ec),
          (L[17] = en),
          (L[18] = ei),
          (L[19] = T))
        : (T = L[19])
      let es = `translate(${Math.cos(_) * U}px, ${Math.sin(_) * U}px)`
      ;(L[20] !== es ? ((w = { transform: es }), (L[20] = es), (L[21] = w)) : (w = L[21]),
        L[22] !== T || L[23] !== w
          ? ((b = (0, d.jsx)("div", { className: T, style: w })), (L[22] = T), (L[23] = w), (L[24] = b))
          : (b = L[24]),
        L[25] !== m || L[26] !== b
          ? ((v = (0, d.jsxs)("div", { className: m, children: [l, p, f, b] })), (L[25] = m), (L[26] = b), (L[27] = v))
          : (v = L[27]),
        L[28] !== G.direction || L[29] !== K
          ? ((k = (0, d.jsx)("div", {
              className: "flex items-center gap-1.5 text-[11px] font-medium text-tertiary",
              children: K
                ? (0, d.jsx)(r.A, { ...D.gameGesture })
                : (0, d.jsxs)(d.Fragment, {
                    children: [
                      (0, d.jsx)(u.A, { className: (0, n.A)("size-3 shrink-0", h[G.direction]) }),
                      (0, d.jsx)("span", { children: (0, d.jsx)(r.A, { ...D[G.direction] }) }),
                    ],
                  }),
            })),
            (L[28] = G.direction),
            (L[29] = K),
            (L[30] = k))
          : (k = L[30]),
        L[31] !== z
          ? ((C = (0, d.jsx)("div", {
              className: "line-clamp-2 text-sm leading-4 font-medium text-default",
              children: z,
            })),
            (L[31] = z),
            (L[32] = C))
          : (C = L[32]))
      let er = M[G.status]
      ;(L[33] !== er
        ? ((y = (0, n.A)("flex min-h-4 items-center gap-1.5 text-xs", er)), (L[33] = er), (L[34] = y))
        : (y = L[34]),
        L[35] !== Q
          ? ((S = Q
              ? (0, d.jsx)(g.I, { className: "shrink-0", "aria-hidden": !1, asset: c.G })
              : (0, d.jsx)("span", { className: "size-1.5 shrink-0 rounded-full bg-current opacity-70" })),
            (L[35] = Q),
            (L[36] = S))
          : (S = L[36]),
        L[37] !== q || L[38] !== K || L[39] !== H
          ? ((P = K ? { progress: q.formatNumber(H, { style: "percent" }) } : void 0),
            (L[37] = q),
            (L[38] = K),
            (L[39] = H),
            (L[40] = P))
          : (P = L[40]),
        L[41] !== Y || L[42] !== P
          ? ((A = (0, d.jsx)(r.A, { ...Y, values: P })), (L[41] = Y), (L[42] = P), (L[43] = A))
          : (A = L[43]),
        L[44] !== y || L[45] !== S || L[46] !== A
          ? ((R = (0, d.jsxs)("div", { "aria-atomic": "true", "aria-live": "polite", className: y, children: [S, A] })),
            (L[44] = y),
            (L[45] = S),
            (L[46] = A),
            (L[47] = R))
          : (R = L[47]))
      let em = Z && "bg-text-info",
        el = $ && "bg-text-warning",
        eg = !Z && !$ && "bg-text-tertiary/55"
      L[48] !== em || L[49] !== el || L[50] !== eg
        ? ((F = (0, n.A)(
            "h-full origin-left rounded-full transition-[background-color,transform] duration-75 ease-out motion-reduce:transition-none",
            em,
            el,
            eg,
          )),
          (L[48] = em),
          (L[49] = el),
          (L[50] = eg),
          (L[51] = F))
        : (F = L[51])
      let eu = `scaleX(${H})`
      return (
        L[52] !== eu ? ((B = { transform: eu }), (L[52] = eu), (L[53] = B)) : (B = L[53]),
        L[54] !== F || L[55] !== B
          ? ((O = (0, d.jsx)("div", {
              className: "h-0.5 overflow-hidden rounded-full",
              children: (0, d.jsx)("div", { className: F, style: B }),
            })),
            (L[54] = F),
            (L[55] = B),
            (L[56] = O))
          : (O = L[56]),
        L[57] !== k || L[58] !== C || L[59] !== R || L[60] !== O
          ? ((j = (0, d.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-1.5", children: [k, C, R, O] })),
            (L[57] = k),
            (L[58] = C),
            (L[59] = R),
            (L[60] = O),
            (L[61] = j))
          : (j = L[61]),
        L[62] !== v || L[63] !== j || L[64] !== i
          ? ((N = (0, d.jsxs)("div", { className: i, children: [v, j] })),
            (L[62] = v),
            (L[63] = j),
            (L[64] = i),
            (L[65] = N))
          : (N = L[65]),
        L[66] !== G.status || L[67] !== J || L[68] !== N || L[69] !== a || L[70] !== E
          ? ((W = (0, d.jsx)("div", {
              "aria-hidden": J,
              className: a,
              "data-status": ee,
              "data-visible": E,
              children: N,
            })),
            (L[66] = G.status),
            (L[67] = J),
            (L[68] = N),
            (L[69] = a),
            (L[70] = E),
            (L[71] = W))
          : (W = L[71]),
        W
      )
    }
    let D = (0, m.YK)({
      miniGameTitle: { id: "codexMicro.joystickFeedback.miniGameTitle", defaultMessage: "Mini-game" },
      gameGesture: { id: "codexMicro.joystickFeedback.gameGesture", defaultMessage: "Secret game" },
      "game-gesture": {
        id: "codexMicro.joystickFeedback.gameGestureProgress",
        defaultMessage: "Keep circling \xb7 {progress}",
      },
      up: { id: "codexMicro.joystickFeedback.up", defaultMessage: "Up" },
      right: { id: "codexMicro.joystickFeedback.right", defaultMessage: "Right" },
      down: { id: "codexMicro.joystickFeedback.down", defaultMessage: "Down" },
      left: { id: "codexMicro.joystickFeedback.left", defaultMessage: "Left" },
      tracking: { id: "codexMicro.joystickFeedback.tracking", defaultMessage: "Move farther to trigger" },
      triggered: { id: "codexMicro.joystickFeedback.triggered", defaultMessage: "Triggered" },
      unassigned: { id: "codexMicro.joystickFeedback.unassigned", defaultMessage: "Direction reached" },
      unavailable: { id: "codexMicro.joystickFeedback.unavailable", defaultMessage: "Shortcut unavailable" },
      unassignedTracking: {
        id: "codexMicro.joystickFeedback.unassignedTracking",
        defaultMessage: "No shortcut configured",
      },
    })
    a.d(
      o,
      {},
      {
        CodexMicroJoystickHud: function () {
          let e,
            o = (0, t.c)(4),
            a = (0, i.Ul)(f.FV),
            c = (0, i.Ul)(l.d5),
            { skills: n } = (0, p.a)()
          return (
            o[0] !== a || o[1] !== c || o[2] !== n
              ? ((e = (0, d.jsx)(T, { feedback: a, isMappingEditorOpen: c, skills: n })),
                (o[0] = a),
                (o[1] = c),
                (o[2] = n),
                (o[3] = e))
              : (e = o[3]),
            e
          )
        },
      },
    )
  },
  WVWQ(e, o, a) {
    a.d(o, { j: () => w, I: () => D })
    var d = a("AGyq"),
      t = a("Qgfj"),
      c = a("CTWI")
    function n(e) {
      return { title: e.formatMessage(i.title), description: e.formatMessage(i.description) }
    }
    let i = (0, t.YK)({
      title: { id: "codex.command.composer.captureAppshot", defaultMessage: "Capture appshot" },
      description: {
        id: "codex.commandDescription.composer.captureAppshot",
        defaultMessage: "Capture an appshot for the active composer",
      },
    })
    function s(e) {
      return {
        title: e.formatMessage({ id: "codex.command.openOrbit.dot", defaultMessage: "Open your dot" }),
        description: e.formatMessage({
          id: "codex.commandDescription.openOrbit.dot",
          defaultMessage: "Open your dot conversation",
        }),
      }
    }
    function r(e) {
      return {
        title: e.formatMessage({
          id: "codex.command.focusPageBlockControls",
          defaultMessage: "Focus content controls",
        }),
        description: e.formatMessage({
          id: "codex.commandDescription.focusPageBlockControls",
          defaultMessage: "Move keyboard focus from the Page editor to the current content's controls",
        }),
      }
    }
    let m = (0, t.YK)({
        endCallDescription: {
          id: "codex.commandDescription.realtimeVoice.endCall",
          defaultMessage: "End the active Voice Chat",
        },
        endCallTitle: { id: "codex.command.realtimeVoice.endCall", defaultMessage: "End Voice Chat" },
        realtimeVoiceDescription: {
          id: "codex.commandDescription.realtimeVoice",
          defaultMessage: "Start a Voice Chat from anywhere on desktop",
        },
        realtimeVoiceTitle: { id: "codex.command.realtimeVoice", defaultMessage: "Voice Chat hotkey" },
        toggleMicrophoneMuteDescription: {
          id: "codex.commandDescription.realtimeVoice.toggleMicrophoneMute",
          defaultMessage: "Mute or unmute your microphone during a Voice Chat",
        },
        toggleMicrophoneMuteTitle: {
          id: "codex.command.realtimeVoice.toggleMicrophoneMute",
          defaultMessage: "Toggle Voice Chat microphone",
        },
        toggleOutputMuteDescription: {
          id: "codex.commandDescription.realtimeVoice.toggleOutputMute",
          defaultMessage: "Mute or unmute Voice Chat audio",
        },
        toggleOutputMuteTitle: {
          id: "codex.command.realtimeVoice.toggleOutputMute",
          defaultMessage: "Toggle Voice Chat audio",
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
    function g(e) {
      return Object.hasOwn(l, e)
    }
    let u = (0, t.YK)({
        title: { id: "codex.command.importExternalAgent", defaultMessage: "Import from other AI apps" },
        description: {
          id: "codex.commandDescription.importExternalAgent",
          defaultMessage: "Import from other AI apps",
        },
      }),
      p = (0, t.YK)({
        title: { id: "codex.command.personalitySettings", defaultMessage: "Personality" },
        description: {
          id: "codex.commandDescription.personalitySettings",
          defaultMessage: "Adjust tone and response style",
        },
      }),
      x = (0, t.zR)({ id: "codex.command.showMiniOverlay", defaultMessage: "Show Mini" }),
      f = (0, t.YK)({
        "codex.command.importPrismToLocal": {
          id: "codex.command.importPrismToLocal",
          defaultMessage: "Import from Prism\u2026",
        },
        "codex.commandMenuTitle.toggleFileTreePanel": {
          id: "codex.commandMenuTitle.toggleFileTreePanel",
          defaultMessage: "Toggle navigation panel",
        },
        "codex.command.meetings.takeNotes": {
          id: "codex.command.meetings.takeNotes",
          defaultMessage: "Meetings: Take notes",
        },
        "codex.command.screenshotToCurrentChat": {
          id: "codex.command.screenshotToCurrentChat",
          defaultMessage: "Screenshot selection to current chat",
        },
        "codex.command.screenshotToNewChat": {
          id: "codex.command.screenshotToNewChat",
          defaultMessage: "Screenshot selection to new chat",
        },
        "codex.command.artifacts.selectTool": {
          id: "codex.command.artifacts.selectTool",
          defaultMessage: "Artifacts: Select",
        },
        "codex.command.artifacts.handTool": {
          id: "codex.command.artifacts.handTool",
          defaultMessage: "Artifacts: Pan",
        },
        "codex.command.canvas.prompt": { id: "codex.command.canvas.prompt", defaultMessage: "Canvas: Ask ChatGPT" },
        "codex.command.artifacts.rectangleTool": {
          id: "codex.command.artifacts.rectangleTool",
          defaultMessage: "Artifacts: Rectangle",
        },
        "codex.command.artifacts.circleTool": {
          id: "codex.command.artifacts.circleTool",
          defaultMessage: "Artifacts: Circle",
        },
        "codex.command.artifacts.arrowTool": {
          id: "codex.command.artifacts.arrowTool",
          defaultMessage: "Artifacts: Arrow",
        },
        "codex.command.artifacts.lineTool": {
          id: "codex.command.artifacts.lineTool",
          defaultMessage: "Artifacts: Line",
        },
        "codex.command.artifacts.textTool": {
          id: "codex.command.artifacts.textTool",
          defaultMessage: "Artifacts: Text",
        },
        "codex.command.artifacts.noteTool": {
          id: "codex.command.artifacts.noteTool",
          defaultMessage: "Artifacts: Note",
        },
        "codex.command.page.addComment": { id: "codex.command.page.addComment", defaultMessage: "Add Page comment" },
        "codex.command.page.formatNumberedList": {
          id: "codex.command.page.formatNumberedList",
          defaultMessage: "Numbered list",
        },
        "codex.command.page.formatBulletedList": {
          id: "codex.command.page.formatBulletedList",
          defaultMessage: "Bulleted list",
        },
        "codex.command.page.formatChecklist": { id: "codex.command.page.formatChecklist", defaultMessage: "Checklist" },
        "codex.command.newThread": { id: "codex.command.newThread", defaultMessage: "New chat" },
        "codex.command.newProjectlessTask": {
          id: "codex.command.newProjectlessTask",
          defaultMessage: "New standalone chat",
        },
        "codex.command.temporaryChat": { id: "codex.command.temporaryChat", defaultMessage: "New Temporary Chat" },
        "codex.command.openThreadInNewWindow": {
          id: "codex.command.openThreadInNewWindow",
          defaultMessage: "Open in new window",
        },
        "codex.command.archiveThread": { id: "codex.command.archiveThread", defaultMessage: "Archive chat" },
        "codex.command.deleteOrbit": { id: "codex.command.deleteOrbit", defaultMessage: "Delete {dot}" },
        "codex.command.deleteChat": { id: "codex.command.deleteChat", defaultMessage: "Delete chat" },
        "codex.command.markThreadUnread": { id: "codex.command.markThreadUnread", defaultMessage: "Mark as unread" },
        "codex.command.toggleThreadPin": { id: "codex.command.toggleThreadPin", defaultMessage: "Toggle pin" },
        "codex.command.copyPageLink": { id: "codex.command.copyPageLink", defaultMessage: "Copy document link" },
        "codex.command.copyConversationMarkdown": {
          id: "codex.command.copyConversationMarkdown",
          defaultMessage: "Copy as Markdown",
        },
        "codex.command.copyLastCodeBlock": {
          id: "codex.command.copyLastCodeBlock",
          defaultMessage: "Copy last code block",
        },
        "codex.command.openSideChat": { id: "codex.command.openSideChat", defaultMessage: "Open side chat" },
        "codex.command.focusMainChat": { id: "codex.command.focusMainChat", defaultMessage: "Focus main chat" },
        "codex.command.focusSideChat": { id: "codex.command.focusSideChat", defaultMessage: "Focus side chat" },
        "codex.command.openControlWindow": {
          id: "codex.command.openControlWindow",
          defaultMessage: "Open control window",
        },
        "codex.command.toggleDebugModal": {
          id: "codex.command.toggleDebugModal",
          defaultMessage: "Toggle debug panel",
        },
        "codex.command.undoAppAction": { id: "codex.command.undoAppAction", defaultMessage: "Undo last action" },
        "codex.command.redoAppAction": { id: "codex.command.redoAppAction", defaultMessage: "Redo last action" },
        "codex.command.reopenClosedTab": {
          id: "codex.command.reopenClosedTab",
          defaultMessage: "Reopen closed panel tab",
        },
        "codex.command.composer.openModelPicker": {
          id: "codex.command.composer.openModelPicker",
          defaultMessage: "Select effort",
        },
        "codex.command.composer.openRecentModels": {
          id: "codex.command.composer.openRecentModels",
          defaultMessage: "Open recent models",
        },
        "codex.command.composer.openProjectPicker": {
          id: "codex.command.composer.openProjectPicker",
          defaultMessage: "Open project picker",
        },
        "codex.command.composer.toggleDictation": {
          id: "codex.command.composer.toggleDictation",
          defaultMessage: "Toggle dictation",
        },
        "codex.command.composer.startVoiceMode": {
          id: "codex.command.composer.startVoiceMode",
          defaultMessage: "Toggle voice chat",
        },
        "codex.command.composer.submit": { id: "codex.command.composer.submit", defaultMessage: "Send message" },
        "codex.command.browser.toggleAnnotationMode": {
          id: "codex.command.browser.toggleAnnotationMode",
          defaultMessage: "Toggle annotation mode",
        },
        "codex.command.browser.bookmarkPage": {
          id: "codex.command.browser.bookmarkPage",
          defaultMessage: "Bookmark page",
        },
        "codex.command.presentation.editLink": {
          id: "codex.command.presentation.editLink",
          defaultMessage: "Add or edit slide link",
        },
        "codex.command.presentation.duplicateSelection": {
          id: "codex.command.presentation.duplicateSelection",
          defaultMessage: "Duplicate presentation selection",
        },
        "codex.command.artifact.sendAnnotations": {
          id: "codex.command.artifact.sendAnnotations",
          defaultMessage: "Send annotations",
        },
        "codex.command.composer.submitInBackground": {
          id: "codex.command.composer.submitInBackground",
          defaultMessage: "Send message in background",
        },
        "codex.command.composer.steer": { id: "codex.command.composer.steer", defaultMessage: "Steer prompt" },
        "codex.command.composer.queue": { id: "codex.command.composer.queue", defaultMessage: "Queue prompt" },
        "codex.command.composer.clear": { id: "codex.command.composer.clear", defaultMessage: "Clear prompt" },
        "codex.command.composer.addPhotos": { id: "codex.command.composer.addPhotos", defaultMessage: "Add photos" },
        "codex.command.composer.addFiles": {
          id: "codex.command.composer.addFiles",
          defaultMessage: "Attach files and folders",
        },
        "codex.command.composer.toggleFastMode": {
          id: "codex.command.composer.toggleFastMode",
          defaultMessage: "Cycle speed",
        },
        "codex.command.composer.increaseReasoningEffort": {
          id: "codex.command.composer.increaseReasoningEffort",
          defaultMessage: "Increase reasoning effort",
        },
        "codex.command.composer.decreaseReasoningEffort": {
          id: "codex.command.composer.decreaseReasoningEffort",
          defaultMessage: "Decrease reasoning effort",
        },
        "codex.command.composer.cycleReasoningEffort": {
          id: "codex.command.composer.cycleReasoningEffort",
          defaultMessage: "Cycle reasoning effort",
        },
        "codex.command.composer.togglePlanMode": {
          id: "codex.command.composer.togglePlanMode",
          defaultMessage: "Toggle plan mode",
        },
        "codex.command.composer.toggleWorktreeMode": {
          id: "codex.command.composer.toggleWorktreeMode",
          defaultMessage: "Toggle Local/Worktree",
        },
        "codex.command.composer.cycleHost": { id: "codex.command.composer.cycleHost", defaultMessage: "Cycle host" },
        "codex.command.composer.toggleWorkRunLocation": {
          id: "codex.command.composer.toggleWorkRunLocation",
          defaultMessage: "Toggle Cloud/Local",
        },
        "codex.command.approval.approve": { id: "codex.command.approval.approve", defaultMessage: "Approve request" },
        "codex.command.approval.decline": { id: "codex.command.approval.decline", defaultMessage: "Decline request" },
        "codex.command.git.commit": { id: "codex.command.git.commit", defaultMessage: "Commit or push" },
        "codex.command.git.createPullRequest": {
          id: "codex.command.git.createPullRequest",
          defaultMessage: "Create PR",
        },
        "codex.command.git.createDraftPullRequest": {
          id: "codex.command.git.createDraftPullRequest",
          defaultMessage: "Create draft PR",
        },
        "codex.command.git.createBranch": { id: "codex.command.git.createBranch", defaultMessage: "Create branch" },
        "codex.command.git.mergePullRequest": { id: "codex.command.git.mergePullRequest", defaultMessage: "Merge PR" },
        "codex.command.git.openPullRequest": {
          id: "codex.command.git.openPullRequest",
          defaultMessage: "Open PR on GitHub",
        },
        "codex.command.git.toggleBlame": { id: "codex.command.git.toggleBlame", defaultMessage: "Toggle Git blame" },
        "codex.command.forkThread": { id: "codex.command.forkThread", defaultMessage: "Branch chat" },
        "codex.command.showMiniOverlay": { id: "codex.command.showMiniOverlay", defaultMessage: "Show Mini" },
        "codex.command.searchChats": { id: "codex.command.searchChats", defaultMessage: "Switch chat\u2026" },
        "codex.command.searchChatsPrevious": {
          id: "codex.command.searchChatsPrevious",
          defaultMessage: "Switch chat (previous)\u2026",
        },
        "codex.command.togglePriorityFilter": {
          id: "codex.command.togglePriorityFilter",
          defaultMessage: "Toggle activity view",
        },
        "codex.command.nextThreadNeedingAttention": {
          id: "codex.command.nextThreadNeedingAttention",
          defaultMessage: "Next chat needing attention",
        },
        "codex.command.previousThread": { id: "codex.command.previousThread", defaultMessage: "Previous sidebar item" },
        "codex.command.previousTab": { id: "codex.command.previousTab", defaultMessage: "Previous tab" },
        "codex.command.previousRecentThread": {
          id: "codex.command.previousRecentThread",
          defaultMessage: "Previous recently viewed chat",
        },
        "codex.command.nextThread": { id: "codex.command.nextThread", defaultMessage: "Next sidebar item" },
        "codex.command.nextTab": { id: "codex.command.nextTab", defaultMessage: "Next tab" },
        "codex.command.nextRecentThread": {
          id: "codex.command.nextRecentThread",
          defaultMessage: "Next recently viewed chat",
        },
        "codex.command.recentThread1": { id: "codex.command.recentThread1", defaultMessage: "Go to recent chat 1" },
        "codex.command.recentThread2": { id: "codex.command.recentThread2", defaultMessage: "Go to recent chat 2" },
        "codex.command.recentThread3": { id: "codex.command.recentThread3", defaultMessage: "Go to recent chat 3" },
        "codex.command.recentThread4": { id: "codex.command.recentThread4", defaultMessage: "Go to recent chat 4" },
        "codex.command.recentThread5": { id: "codex.command.recentThread5", defaultMessage: "Go to recent chat 5" },
        "codex.command.recentThread6": { id: "codex.command.recentThread6", defaultMessage: "Go to recent chat 6" },
        "codex.command.switchToChat": { id: "codex.command.switchToChat", defaultMessage: "Switch to Chat" },
        "codex.command.switchToWork": { id: "codex.command.switchToWork", defaultMessage: "Switch to Work" },
        "codex.command.switchToCodex": { id: "codex.command.switchToCodex", defaultMessage: "Switch to Codex" },
        "codex.command.settings": { id: "codex.command.settings", defaultMessage: "Settings" },
        "codex.command.codexMicroSettings": {
          id: "codex.command.codexMicroSettings",
          defaultMessage: "Codex Micro setup",
        },
        "codex.command.mcpSettings": { id: "codex.command.mcpSettings", defaultMessage: "MCP" },
        "codex.command.keyboardShortcuts": {
          id: "codex.command.keyboardShortcuts",
          defaultMessage: "Keyboard shortcuts",
        },
        "codex.command.showKeyboardShortcuts": {
          id: "codex.command.showKeyboardShortcuts",
          defaultMessage: "Show keyboard shortcuts",
        },
        "codex.command.clearAllUnreads": { id: "codex.command.clearAllUnreads", defaultMessage: "Clear all unreads" },
        "codex.command.manageTasks": { id: "codex.command.manageTasks", defaultMessage: "Manage scheduled tasks" },
        "codex.command.forceReloadSkills": {
          id: "codex.command.forceReloadSkills",
          defaultMessage: "Force reload skills",
        },
        "codex.command.openSkills": { id: "codex.command.openSkills", defaultMessage: "Go to skills" },
        "codex.command.newProject": { id: "codex.command.newProject", defaultMessage: "New project" },
        "codex.command.openFolder": { id: "codex.command.openFolder", defaultMessage: "Open folder" },
        "codex.command.toggleSidebar": { id: "codex.command.toggleSidebar", defaultMessage: "Toggle sidebar" },
        "codex.command.toggleBottomPanel": {
          id: "codex.command.toggleBottomPanel",
          defaultMessage: "Toggle bottom panel",
        },
        "codex.command.togglePinnedSummary": {
          id: "codex.command.togglePinnedSummary",
          defaultMessage: "Toggle pinned summary",
        },
        "codex.command.toggleTerminal": { id: "codex.command.toggleTerminal", defaultMessage: "Open terminal" },
        "codex.command.newTab": { id: "codex.command.newTab", defaultMessage: "New tab" },
        "codex.command.closeOtherTabs": { id: "codex.command.closeOtherTabs", defaultMessage: "Close other tabs" },
        "codex.command.showWorkspaceTabView": { id: "codex.command.showWorkspaceTabView", defaultMessage: "Full view" },
        "codex.command.stepWorkspaceLayout": {
          id: "codex.command.stepWorkspaceLayout",
          defaultMessage: "Cycle workspace layout",
        },
        "codex.command.openReviewTab": { id: "codex.command.openReviewTab", defaultMessage: "Open Changes tab" },
        "codex.command.toggleReviewTab": { id: "codex.command.toggleReviewTab", defaultMessage: "Toggle Changes" },
        "codex.command.toggleReviewPanel": {
          id: "codex.command.toggleReviewPanel",
          defaultMessage: "Toggle Changes panel",
        },
        "codex.command.file.goToDefinition": {
          id: "codex.command.file.goToDefinition",
          defaultMessage: "Go to definition",
        },
        "codex.command.file.findReferences": {
          id: "codex.command.file.findReferences",
          defaultMessage: "Find references",
        },
        "codex.command.file.navigateBack": {
          id: "codex.command.file.navigateBack",
          defaultMessage: "Go back in file navigation",
        },
        "codex.command.file.navigateForward": {
          id: "codex.command.file.navigateForward",
          defaultMessage: "Go forward in file navigation",
        },
        "codex.command.findInThread": { id: "codex.command.findInThread", defaultMessage: "Find" },
        "codex.command.goToLine": { id: "codex.command.goToLine", defaultMessage: "Go to line" },
        "codex.command.focusBrowserAddressBar": {
          id: "codex.command.focusBrowserAddressBar",
          defaultMessage: "Focus browser address bar",
        },
        "codex.command.navigateBrowserBack": {
          id: "codex.command.navigateBrowserBack",
          defaultMessage: "Browser back",
        },
        "codex.command.navigateBrowserForward": {
          id: "codex.command.navigateBrowserForward",
          defaultMessage: "Browser forward",
        },
        "codex.command.navigateBack": { id: "codex.command.navigateBack", defaultMessage: "Back" },
        "codex.command.navigateForward": { id: "codex.command.navigateForward", defaultMessage: "Forward" },
        "codex.command.logOut": { id: "codex.command.logOut", defaultMessage: "Log out" },
        "codex.command.feedback": { id: "codex.command.feedback", defaultMessage: "Feedback" },
        "codex.command.environmentAction1": {
          id: "codex.command.environmentAction1",
          defaultMessage: "Environment action 1",
        },
        "codex.command.environmentAction2": {
          id: "codex.command.environmentAction2",
          defaultMessage: "Environment action 2",
        },
        "codex.command.environmentAction3": {
          id: "codex.command.environmentAction3",
          defaultMessage: "Environment action 3",
        },
        "codex.command.environmentAction4": {
          id: "codex.command.environmentAction4",
          defaultMessage: "Environment action 4",
        },
        "codex.command.environmentAction5": {
          id: "codex.command.environmentAction5",
          defaultMessage: "Environment action 5",
        },
        "codex.command.environmentAction6": {
          id: "codex.command.environmentAction6",
          defaultMessage: "Environment action 6",
        },
        "codex.command.environmentAction7": {
          id: "codex.command.environmentAction7",
          defaultMessage: "Environment action 7",
        },
        "codex.command.environmentAction8": {
          id: "codex.command.environmentAction8",
          defaultMessage: "Environment action 8",
        },
        "codex.command.environmentAction9": {
          id: "codex.command.environmentAction9",
          defaultMessage: "Environment action 9",
        },
        "codex.command.globalDictationHold": {
          id: "codex.command.globalDictationHold",
          defaultMessage: "Dictation shortcut",
        },
        "codex.command.globalDictationSingleTap": {
          id: "codex.command.globalDictationSingleTap",
          defaultMessage: "Single-tap dictation",
        },
        "codex.command.spotlightSearch": { id: "codex.command.spotlightSearch", defaultMessage: "Spotlight search" },
        "codex.command.notchVoice": { id: "codex.command.notchVoice", defaultMessage: "Voice in Mini" },
        "codex.command.toggleNotch": { id: "codex.command.toggleNotch", defaultMessage: "Toggle Notch" },
        "codex.command.focusTab1": { id: "codex.command.focusTab1", defaultMessage: "Focus tab 1" },
        "codex.command.focusTab2": { id: "codex.command.focusTab2", defaultMessage: "Focus tab 2" },
        "codex.command.focusTab3": { id: "codex.command.focusTab3", defaultMessage: "Focus tab 3" },
        "codex.command.focusTab4": { id: "codex.command.focusTab4", defaultMessage: "Focus tab 4" },
        "codex.command.focusTab5": { id: "codex.command.focusTab5", defaultMessage: "Focus tab 5" },
        "codex.command.focusTab6": { id: "codex.command.focusTab6", defaultMessage: "Focus tab 6" },
        "codex.command.focusTab7": { id: "codex.command.focusTab7", defaultMessage: "Focus tab 7" },
        "codex.command.focusTab8": { id: "codex.command.focusTab8", defaultMessage: "Focus tab 8" },
        "codex.command.focusTab9": { id: "codex.command.focusTab9", defaultMessage: "Focus tab 9" },
        "codex.command.thread1": { id: "codex.command.thread1", defaultMessage: "Go to chat 1" },
        "codex.command.thread2": { id: "codex.command.thread2", defaultMessage: "Go to chat 2" },
        "codex.command.thread3": { id: "codex.command.thread3", defaultMessage: "Go to chat 3" },
        "codex.command.thread4": { id: "codex.command.thread4", defaultMessage: "Go to chat 4" },
        "codex.command.thread5": { id: "codex.command.thread5", defaultMessage: "Go to chat 5" },
        "codex.command.thread6": { id: "codex.command.thread6", defaultMessage: "Go to chat 6" },
        "codex.command.thread7": { id: "codex.command.thread7", defaultMessage: "Go to chat 7" },
        "codex.command.thread8": { id: "codex.command.thread8", defaultMessage: "Go to chat 8" },
        "codex.command.thread9": { id: "codex.command.thread9", defaultMessage: "Go to chat 9" },
      }),
      h = { ...f, "codex.command.importExternalAgent": u.title, "codex.command.personalitySettings": p.title },
      M = (0, t.YK)({
        "codex.commandMenuTitle.newThread": { id: "codex.commandMenuTitle.newThread", defaultMessage: "New Chat" },
        "codex.commandMenuTitle.newProjectlessTask": {
          id: "codex.commandMenuTitle.newProjectlessTask",
          defaultMessage: "New standalone chat",
        },
        "codex.commandMenuTitle.openThreadInNewWindow": {
          id: "codex.commandMenuTitle.openThreadInNewWindow",
          defaultMessage: "Open in New Window",
        },
        "codex.commandMenuTitle.archiveThread": {
          id: "codex.commandMenuTitle.archiveThread",
          defaultMessage: "Archive chat",
        },
        "codex.commandMenuTitle.toggleThreadPin": {
          id: "codex.commandMenuTitle.toggleThreadPin",
          defaultMessage: "Pin/unpin chat",
        },
        "codex.commandMenuTitle.previousThread": {
          id: "codex.commandMenuTitle.previousThread",
          defaultMessage: "Previous Sidebar Item",
        },
        "codex.commandMenuTitle.nextThread": {
          id: "codex.commandMenuTitle.nextThread",
          defaultMessage: "Next Sidebar Item",
        },
        "codex.commandMenuTitle.settings": { id: "codex.commandMenuTitle.settings", defaultMessage: "Settings\u2026" },
        "codex.commandMenuTitle.showKeyboardShortcuts": {
          id: "codex.commandMenuTitle.showKeyboardShortcuts",
          defaultMessage: "Keyboard Shortcuts",
        },
        "codex.commandMenuTitle.newProject": {
          id: "codex.commandMenuTitle.newProject",
          defaultMessage: "New Project\u2026",
        },
        "codex.commandMenuTitle.openFolder": {
          id: "codex.commandMenuTitle.openFolder",
          defaultMessage: "Open Folder\u2026",
        },
        "codex.commandMenuTitle.toggleSidebar": {
          id: "codex.commandMenuTitle.toggleSidebar",
          defaultMessage: "Toggle Sidebar",
        },
        "codex.commandMenuTitle.toggleBottomPanel": {
          id: "codex.commandMenuTitle.toggleBottomPanel",
          defaultMessage: "Toggle Bottom Panel",
        },
        "codex.commandMenuTitle.togglePinnedSummary": {
          id: "codex.commandMenuTitle.togglePinnedSummary",
          defaultMessage: "Toggle Pinned Summary",
        },
        "codex.commandMenuTitle.toggleTerminal": {
          id: "codex.commandMenuTitle.toggleTerminal",
          defaultMessage: "Open Terminal",
        },
        "codex.commandMenuTitle.newTab": { id: "codex.commandMenuTitle.newTab", defaultMessage: "New tab" },
        "codex.commandMenuTitle.toggleReviewPanel": {
          id: "codex.commandMenuTitle.toggleReviewPanel",
          defaultMessage: "Toggle Changes Panel",
        },
        "codex.commandMenuTitle.findInThread": { id: "codex.commandMenuTitle.findInThread", defaultMessage: "Find" },
        "codex.commandMenuTitle.focusBrowserAddressBar": {
          id: "codex.commandMenuTitle.focusBrowserAddressBar",
          defaultMessage: "Focus Browser Address Bar",
        },
        "codex.commandMenuTitle.navigateBack": { id: "codex.commandMenuTitle.navigateBack", defaultMessage: "Back" },
        "codex.commandMenuTitle.navigateForward": {
          id: "codex.commandMenuTitle.navigateForward",
          defaultMessage: "Forward",
        },
        "codex.commandMenuTitle.logOut": { id: "codex.commandMenuTitle.logOut", defaultMessage: "Log Out" },
        "codex.commandMenuTitle.thread1": { id: "codex.commandMenuTitle.thread1", defaultMessage: "Go to Chat 1" },
        "codex.commandMenuTitle.thread2": { id: "codex.commandMenuTitle.thread2", defaultMessage: "Go to Chat 2" },
        "codex.commandMenuTitle.thread3": { id: "codex.commandMenuTitle.thread3", defaultMessage: "Go to Chat 3" },
        "codex.commandMenuTitle.thread4": { id: "codex.commandMenuTitle.thread4", defaultMessage: "Go to Chat 4" },
        "codex.commandMenuTitle.thread5": { id: "codex.commandMenuTitle.thread5", defaultMessage: "Go to Chat 5" },
        "codex.commandMenuTitle.thread6": { id: "codex.commandMenuTitle.thread6", defaultMessage: "Go to Chat 6" },
        "codex.commandMenuTitle.thread7": { id: "codex.commandMenuTitle.thread7", defaultMessage: "Go to Chat 7" },
        "codex.commandMenuTitle.thread8": { id: "codex.commandMenuTitle.thread8", defaultMessage: "Go to Chat 8" },
        "codex.commandMenuTitle.thread9": { id: "codex.commandMenuTitle.thread9", defaultMessage: "Go to Chat 9" },
        "codex.commandMenuTitle.copyConversationPath": {
          id: "codex.commandMenuTitle.copyConversationPath",
          defaultMessage: "Copy conversation path",
        },
        "codex.commandMenuTitle.copyDeeplink": {
          id: "codex.commandMenuTitle.copyDeeplink",
          defaultMessage: "Copy deeplink",
        },
        "codex.commandMenuTitle.copyWorkingDirectory": {
          id: "codex.commandMenuTitle.copyWorkingDirectory",
          defaultMessage: "Copy working directory",
        },
        "codex.commandMenuTitle.closeTab": { id: "codex.commandMenuTitle.closeTab", defaultMessage: "Close Tab" },
        "codex.commandMenuTitle.closeWindow": { id: "codex.commandMenuTitle.closeWindow", defaultMessage: "Close" },
        "codex.commandMenuTitle.reloadBrowserPage": {
          id: "codex.commandMenuTitle.reloadBrowserPage",
          defaultMessage: "Reload Browser Page",
        },
        "codex.commandMenuTitle.hardReloadBrowserPage": {
          id: "codex.commandMenuTitle.hardReloadBrowserPage",
          defaultMessage: "Force Reload Browser Page",
        },
        "codex.commandMenuTitle.newWindow": { id: "codex.commandMenuTitle.newWindow", defaultMessage: "New Window" },
        "codex.commandMenuTitle.openCommandMenu": {
          id: "codex.commandMenuTitle.openCommandMenu",
          defaultMessage: "Open command menu",
        },
        "codex.commandMenuTitle.searchChats": {
          id: "codex.commandMenuTitle.searchChats",
          defaultMessage: "Search Chats\u2026",
        },
        "codex.commandMenuTitle.searchFiles": {
          id: "codex.commandMenuTitle.searchFiles",
          defaultMessage: "Search Files\u2026",
        },
        "codex.commandMenuTitle.renameThread": {
          id: "codex.commandMenuTitle.renameThread",
          defaultMessage: "Rename chat",
        },
        "codex.commandMenuTitle.toggleFileTreePanel": f["codex.commandMenuTitle.toggleFileTreePanel"],
        "codex.commandMenuTitle.toggleTraceRecording": {
          id: "codex.commandMenuTitle.toggleTraceRecording",
          defaultMessage: "Start Trace Recording",
        },
      }),
      T = {
        ...(0, t.YK)({
          "codex.commandDescription.importPrismToLocal": {
            id: "codex.commandDescription.importPrismToLocal",
            defaultMessage: "Edit and compile a local copy of your Prism project",
          },
          "codex.commandDescription.meetings.takeNotes": {
            id: "codex.commandDescription.meetings.takeNotes",
            defaultMessage: "Start taking notes with Meetings on this device",
          },
          "codex.commandDescription.screenshotToCurrentChat": {
            id: "codex.commandDescription.screenshotToCurrentChat",
            defaultMessage: "Select a screen area and attach its image to the current chat without sending",
          },
          "codex.commandDescription.screenshotToNewChat": {
            id: "codex.commandDescription.screenshotToNewChat",
            defaultMessage: "Select a screen area and attach its image to a new chat without sending",
          },
          "codex.commandDescription.artifacts.selectTool": {
            id: "codex.commandDescription.artifacts.selectTool",
            defaultMessage: "Select and move artifact elements",
          },
          "codex.commandDescription.artifacts.handTool": {
            id: "codex.commandDescription.artifacts.handTool",
            defaultMessage: "Pan the artifact viewport",
          },
          "codex.commandDescription.canvas.prompt": {
            id: "codex.commandDescription.canvas.prompt",
            defaultMessage: "Open a Canvas prompt at the pointer",
          },
          "codex.commandDescription.artifacts.rectangleTool": {
            id: "codex.commandDescription.artifacts.rectangleTool",
            defaultMessage: "Add rectangles to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.circleTool": {
            id: "codex.commandDescription.artifacts.circleTool",
            defaultMessage: "Add circles and ovals to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.arrowTool": {
            id: "codex.commandDescription.artifacts.arrowTool",
            defaultMessage: "Add arrows to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.lineTool": {
            id: "codex.commandDescription.artifacts.lineTool",
            defaultMessage: "Add lines to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.textTool": {
            id: "codex.commandDescription.artifacts.textTool",
            defaultMessage: "Add text to Canvas, Slides, or Sheets",
          },
          "codex.commandDescription.artifacts.noteTool": {
            id: "codex.commandDescription.artifacts.noteTool",
            defaultMessage: "Place sticky notes on the Canvas",
          },
          "codex.commandDescription.page.addComment": {
            id: "codex.commandDescription.page.addComment",
            defaultMessage: "Comment on selected Page content or the word at the cursor",
          },
          "codex.commandDescription.page.formatNumberedList": {
            id: "codex.commandDescription.page.formatNumberedList",
            defaultMessage: "Format the selected Page text as a numbered list",
          },
          "codex.commandDescription.page.formatBulletedList": {
            id: "codex.commandDescription.page.formatBulletedList",
            defaultMessage: "Format the selected Page text as a bulleted list",
          },
          "codex.commandDescription.page.formatChecklist": {
            id: "codex.commandDescription.page.formatChecklist",
            defaultMessage: "Toggle checklist formatting for the selected Page text",
          },
          "codex.commandDescription.newThread": {
            id: "codex.commandDescription.newThread",
            defaultMessage: "Start a new chat",
          },
          "codex.commandDescription.newProjectlessTask": {
            id: "codex.commandDescription.newProjectlessTask",
            defaultMessage: "Start a new chat outside of any project",
          },
          "codex.commandDescription.temporaryChat": {
            id: "codex.commandDescription.temporaryChat",
            defaultMessage: "Start a chat that won't appear in history",
          },
          "codex.commandDescription.openThreadInNewWindow": {
            id: "codex.commandDescription.openThreadInNewWindow",
            defaultMessage: "Open the current chat in a new window",
          },
          "codex.commandDescription.archiveThread": {
            id: "codex.commandDescription.archiveThread",
            defaultMessage: "Archive the current chat",
          },
          "codex.commandDescription.deleteOrbit": {
            id: "codex.commandDescription.deleteOrbit",
            defaultMessage: "Confirm deletion of your {dot}",
          },
          "codex.commandDescription.deleteChat": {
            id: "codex.commandDescription.deleteChat",
            defaultMessage: "Confirm deletion of the current chat",
          },
          "codex.commandDescription.markThreadUnread": {
            id: "codex.commandDescription.markThreadUnread",
            defaultMessage: "Mark the current chat as unread",
          },
          "codex.commandDescription.toggleThreadPin": {
            id: "codex.commandDescription.toggleThreadPin",
            defaultMessage: "Pin or unpin the current chat",
          },
          "codex.commandDescription.copyPageLink": {
            id: "codex.commandDescription.copyPageLink",
            defaultMessage: "Copy the current document\u2019s link to the clipboard",
          },
          "codex.commandDescription.copyConversationMarkdown": {
            id: "codex.commandDescription.copyConversationMarkdown",
            defaultMessage: "Copy the current chat as Markdown",
          },
          "codex.commandDescription.copyLastCodeBlock": {
            id: "codex.commandDescription.copyLastCodeBlock",
            defaultMessage: "Copy the last assistant code block in the current chat",
          },
          "codex.commandDescription.openSideChat": {
            id: "codex.commandDescription.openSideChat",
            defaultMessage: "Open the current chat in a side chat",
          },
          "codex.commandDescription.focusMainChat": {
            id: "codex.commandDescription.focusMainChat",
            defaultMessage: "Move keyboard focus to the main chat composer",
          },
          "codex.commandDescription.focusSideChat": {
            id: "codex.commandDescription.focusSideChat",
            defaultMessage: "Move keyboard focus to an open side chat composer",
          },
          "codex.commandDescription.openControlWindow": {
            id: "codex.commandDescription.openControlWindow",
            defaultMessage: "Open the voice chat control window",
          },
          "codex.commandDescription.toggleDebugModal": {
            id: "codex.commandDescription.toggleDebugModal",
            defaultMessage: "Show or hide the internal debug panel",
          },
          "codex.commandDescription.undoAppAction": {
            id: "codex.commandDescription.undoAppAction",
            defaultMessage: "Undo the most recent app action",
          },
          "codex.commandDescription.redoAppAction": {
            id: "codex.commandDescription.redoAppAction",
            defaultMessage: "Redo the most recently undone app action",
          },
          "codex.commandDescription.reopenClosedTab": {
            id: "codex.commandDescription.reopenClosedTab",
            defaultMessage: "Reopen the most recently closed panel tab",
          },
          "codex.commandDescription.composer.openModelPicker": {
            id: "codex.commandDescription.composer.openModelPicker",
            defaultMessage: "Open the composer controls for model effort",
          },
          "codex.commandDescription.composer.openRecentModels": {
            id: "codex.commandDescription.composer.openRecentModels",
            defaultMessage: "Open recently used model, effort, and speed combinations",
          },
          "codex.commandDescription.composer.openProjectPicker": {
            id: "codex.commandDescription.composer.openProjectPicker",
            defaultMessage: "Open the composer project picker",
          },
          "codex.commandDescription.composer.toggleDictation": {
            id: "codex.commandDescription.composer.toggleDictation",
            defaultMessage: "Start or stop dictation in the chat composer",
          },
          "codex.commandDescription.composer.startVoiceMode": {
            id: "codex.commandDescription.composer.startVoiceMode",
            defaultMessage: "Start or stop voice chat",
          },
          "codex.commandDescription.composer.submit": {
            id: "codex.commandDescription.composer.submit",
            defaultMessage: "Send the current composer message",
          },
          "codex.commandDescription.browser.toggleAnnotationMode": {
            id: "codex.commandDescription.browser.toggleAnnotationMode",
            defaultMessage: "Enter or leave annotation mode in the browser",
          },
          "codex.commandDescription.browser.bookmarkPage": {
            id: "codex.commandDescription.browser.bookmarkPage",
            defaultMessage: "Save or edit the current browser page in bookmarks",
          },
          "codex.commandDescription.presentation.editLink": {
            id: "codex.commandDescription.presentation.editLink",
            defaultMessage: "Add or edit a link in the current slide selection",
          },
          "codex.commandDescription.presentation.duplicateSelection": {
            id: "codex.commandDescription.presentation.duplicateSelection",
            defaultMessage: "Make a copy of the selected objects on the current slide",
          },
          "codex.commandDescription.artifact.sendAnnotations": {
            id: "codex.commandDescription.artifact.sendAnnotations",
            defaultMessage: "Send pending annotations in the focused artifact",
          },
          "codex.commandDescription.composer.submitInBackground": {
            id: "codex.commandDescription.composer.submitInBackground",
            defaultMessage: "Send the current composer message without opening its chat",
          },
          "codex.commandDescription.composer.steer": {
            id: "codex.commandDescription.composer.steer",
            defaultMessage: "Submit the current composer prompt as a steering message",
          },
          "codex.commandDescription.composer.queue": {
            id: "codex.commandDescription.composer.queue",
            defaultMessage: "Submit the current composer prompt as a queued message",
          },
          "codex.commandDescription.composer.clear": {
            id: "codex.commandDescription.composer.clear",
            defaultMessage: "Clear the current composer prompt",
          },
          "codex.commandDescription.composer.addPhotos": {
            id: "codex.commandDescription.composer.addPhotos",
            defaultMessage: "Add photos to the active composer",
          },
          "codex.commandDescription.composer.addFiles": {
            id: "codex.commandDescription.composer.addFiles",
            defaultMessage: "Attach files and folders to the active composer",
          },
          "codex.commandDescription.composer.toggleFastMode": {
            id: "codex.commandDescription.composer.toggleFastMode",
            defaultMessage: "Cycle through available speeds: Standard, Fast, and Ultrafast",
          },
          "codex.commandDescription.composer.increaseReasoningEffort": {
            id: "codex.commandDescription.composer.increaseReasoningEffort",
            defaultMessage: "Increase the current composer reasoning effort",
          },
          "codex.commandDescription.composer.decreaseReasoningEffort": {
            id: "codex.commandDescription.composer.decreaseReasoningEffort",
            defaultMessage: "Decrease the current composer reasoning effort",
          },
          "codex.commandDescription.composer.cycleReasoningEffort": {
            id: "codex.commandDescription.composer.cycleReasoningEffort",
            defaultMessage: "Cycle through composer reasoning effort options",
          },
          "codex.commandDescription.composer.togglePlanMode": {
            id: "codex.commandDescription.composer.togglePlanMode",
            defaultMessage: "Turn plan mode on or off in the current composer",
          },
          "codex.commandDescription.composer.toggleWorktreeMode": {
            id: "codex.commandDescription.composer.toggleWorktreeMode",
            defaultMessage: "Switch the current composer between local and a new worktree",
          },
          "codex.commandDescription.composer.cycleHost": {
            id: "codex.commandDescription.composer.cycleHost",
            defaultMessage: "Cycle the new chat between this computer and available remote machines",
          },
          "codex.commandDescription.composer.toggleWorkRunLocation": {
            id: "codex.commandDescription.composer.toggleWorkRunLocation",
            defaultMessage: "Switch ChatGPT Work between cloud and local execution",
          },
          "codex.commandDescription.approval.approve": {
            id: "codex.commandDescription.approval.approve",
            defaultMessage: "Approve the active request",
          },
          "codex.commandDescription.approval.decline": {
            id: "codex.commandDescription.approval.decline",
            defaultMessage: "Decline the active request",
          },
          "codex.commandDescription.git.commit": {
            id: "codex.commandDescription.git.commit",
            defaultMessage: "Open commit or push options",
          },
          "codex.commandDescription.git.createPullRequest": {
            id: "codex.commandDescription.git.createPullRequest",
            defaultMessage: "Open pull request creation options",
          },
          "codex.commandDescription.git.createDraftPullRequest": {
            id: "codex.commandDescription.git.createDraftPullRequest",
            defaultMessage: "Open draft pull request creation options",
          },
          "codex.commandDescription.git.createBranch": {
            id: "codex.commandDescription.git.createBranch",
            defaultMessage: "Open branch creation options",
          },
          "codex.commandDescription.git.mergePullRequest": {
            id: "codex.commandDescription.git.mergePullRequest",
            defaultMessage: "Open pull request merge options",
          },
          "codex.commandDescription.git.openPullRequest": {
            id: "codex.commandDescription.git.openPullRequest",
            defaultMessage: "Open the pull request linked to the current chat",
          },
          "codex.commandDescription.git.toggleBlame": {
            id: "codex.commandDescription.git.toggleBlame",
            defaultMessage: "Show or hide author and commit details for the active editor line",
          },
          "codex.commandDescription.forkThread": {
            id: "codex.commandDescription.forkThread",
            defaultMessage: "Branch the current chat",
          },
          "codex.commandDescription.showMiniOverlay": {
            id: "codex.commandDescription.showMiniOverlay",
            defaultMessage: "Show Mini from anywhere",
          },
          "codex.commandDescription.nextThreadNeedingAttention": {
            id: "codex.commandDescription.nextThreadNeedingAttention",
            defaultMessage: "Switch to the next chat awaiting input or with unread activity",
          },
          "codex.commandDescription.previousThread": {
            id: "codex.commandDescription.previousThread",
            defaultMessage: "Switch to the previous sidebar item",
          },
          "codex.commandDescription.previousTab": {
            id: "codex.commandDescription.previousTab",
            defaultMessage: "Switch to the previous tab",
          },
          "codex.commandDescription.previousRecentThread": {
            id: "codex.commandDescription.previousRecentThread",
            defaultMessage: "Cycle to the previous recently viewed chat",
          },
          "codex.commandDescription.nextThread": {
            id: "codex.commandDescription.nextThread",
            defaultMessage: "Switch to the next sidebar item",
          },
          "codex.commandDescription.nextTab": {
            id: "codex.commandDescription.nextTab",
            defaultMessage: "Switch to the next tab",
          },
          "codex.commandDescription.nextRecentThread": {
            id: "codex.commandDescription.nextRecentThread",
            defaultMessage: "Cycle to the next recently viewed chat",
          },
          "codex.commandDescription.recentThreadSlot": {
            id: "codex.commandDescription.recentThreadSlot",
            defaultMessage: "Open the recently updated chat in this shortcut slot",
          },
          "codex.commandDescription.switchToChat": {
            id: "codex.commandDescription.switchToChat",
            defaultMessage: "Switch to Chat",
          },
          "codex.commandDescription.switchToWork": {
            id: "codex.commandDescription.switchToWork",
            defaultMessage: "Switch to Work",
          },
          "codex.commandDescription.switchToCodex": {
            id: "codex.commandDescription.switchToCodex",
            defaultMessage: "Switch to Codex",
          },
          "codex.commandDescription.settings": {
            id: "codex.commandDescription.settings",
            defaultMessage: "Open {appName} settings",
          },
          "codex.commandDescription.codexMicroSettings": {
            id: "codex.commandDescription.codexMicroSettings",
            defaultMessage: "Open Codex Micro setup",
          },
          "codex.commandDescription.mcpSettings": {
            id: "codex.commandDescription.mcpSettings",
            defaultMessage: "Configure MCP servers",
          },
          "codex.commandDescription.keyboardShortcuts": {
            id: "codex.commandDescription.keyboardShortcuts",
            defaultMessage: "Customize keyboard shortcuts",
          },
          "codex.commandDescription.showKeyboardShortcuts": {
            id: "codex.commandDescription.showKeyboardShortcuts",
            defaultMessage: "Show the shortcuts available right now",
          },
          "codex.commandDescription.clearAllUnreads": {
            id: "codex.commandDescription.clearAllUnreads",
            defaultMessage: "Mark all chats and scheduled task updates as read",
          },
          "codex.commandDescription.manageTasks": {
            id: "codex.commandDescription.manageTasks",
            defaultMessage: "Open the list of scheduled tasks",
          },
          "codex.commandDescription.forceReloadSkills": {
            id: "codex.commandDescription.forceReloadSkills",
            defaultMessage: "Refresh the skill catalog for the current context",
          },
          "codex.commandDescription.openSkills": {
            id: "codex.commandDescription.openSkills",
            defaultMessage: "Browse installed and recommended skills",
          },
          "codex.commandDescription.newProject": {
            id: "codex.commandDescription.newProject",
            defaultMessage: "Create a project",
          },
          "codex.commandDescription.openFolder": {
            id: "codex.commandDescription.openFolder",
            defaultMessage: "Add a local project to {appName}",
          },
          "codex.commandDescription.toggleSidebar": {
            id: "codex.commandDescription.toggleSidebar",
            defaultMessage: "Show or hide the sidebar",
          },
          "codex.commandDescription.toggleBottomPanel": {
            id: "codex.commandDescription.toggleBottomPanel",
            defaultMessage: "Show or hide the bottom panel",
          },
          "codex.commandDescription.togglePinnedSummary": {
            id: "codex.commandDescription.togglePinnedSummary",
            defaultMessage: "Show or hide the pinned summary",
          },
          "codex.commandDescription.toggleTerminal": {
            id: "codex.commandDescription.toggleTerminal",
            defaultMessage: "Open the terminal panel",
          },
          "codex.commandDescription.newTab": {
            id: "codex.commandDescription.newTab",
            defaultMessage: "Open a new tab",
          },
          "codex.commandDescription.closeOtherTabs": {
            id: "codex.commandDescription.closeOtherTabs",
            defaultMessage: "Close all tabs except the active tab",
          },
          "codex.commandDescription.showWorkspaceTabView": {
            id: "codex.commandDescription.showWorkspaceTabView",
            defaultMessage: "Enter or exit full view",
          },
          "codex.commandDescription.stepWorkspaceLayout": {
            id: "codex.commandDescription.stepWorkspaceLayout",
            defaultMessage: "Step from full view to split view, hide tabs, or show tabs beside Chat",
          },
          "codex.commandDescription.openReviewTab": {
            id: "codex.commandDescription.openReviewTab",
            defaultMessage: "Open the Changes tab",
          },
          "codex.commandDescription.toggleReviewTab": {
            id: "codex.commandDescription.toggleReviewTab",
            defaultMessage: "Show or hide Changes for the current Git-backed chat",
          },
          "codex.commandDescription.toggleReviewPanel": {
            id: "codex.commandDescription.toggleReviewPanel",
            defaultMessage: "Show or hide Changes for the current chat",
          },
          "codex.commandDescription.file.goToDefinition": {
            id: "codex.commandDescription.file.goToDefinition",
            defaultMessage: "Open the definition of the selected file symbol",
          },
          "codex.commandDescription.file.findReferences": {
            id: "codex.commandDescription.file.findReferences",
            defaultMessage: "Find references to the selected file symbol",
          },
          "codex.commandDescription.file.navigateBack": {
            id: "codex.commandDescription.file.navigateBack",
            defaultMessage: "Return to the previous file location",
          },
          "codex.commandDescription.file.navigateForward": {
            id: "codex.commandDescription.file.navigateForward",
            defaultMessage: "Return to the next file location",
          },
          "codex.commandDescription.findInThread": {
            id: "codex.commandDescription.findInThread",
            defaultMessage: "Search the current chat",
          },
          "codex.commandDescription.goToLine": {
            id: "codex.commandDescription.goToLine",
            defaultMessage: "Go to a line in the current file",
          },
          "codex.commandDescription.focusBrowserAddressBar": {
            id: "codex.commandDescription.focusBrowserAddressBar",
            defaultMessage: "Focus the in-app browser address bar",
          },
          "codex.commandDescription.navigateBrowserBack": {
            id: "codex.commandDescription.navigateBrowserBack",
            defaultMessage: "Go back in browser history",
          },
          "codex.commandDescription.navigateBrowserForward": {
            id: "codex.commandDescription.navigateBrowserForward",
            defaultMessage: "Go forward in browser history",
          },
          "codex.commandDescription.navigateBack": {
            id: "codex.commandDescription.navigateBack",
            defaultMessage: "Go back in navigation history",
          },
          "codex.commandDescription.navigateForward": {
            id: "codex.commandDescription.navigateForward",
            defaultMessage: "Go forward in navigation history",
          },
          "codex.commandDescription.logOut": {
            id: "codex.commandDescription.logOut",
            defaultMessage: "Sign out of {appName}",
          },
          "codex.commandDescription.feedback": {
            id: "codex.commandDescription.feedback",
            defaultMessage: "Send product feedback to the ChatGPT team",
          },
          "codex.commandDescription.environmentActionSlot": {
            id: "codex.commandDescription.environmentActionSlot",
            defaultMessage: "Run the environment action in this shortcut slot",
          },
          "codex.commandDescription.spotlightSearch": {
            id: "codex.commandDescription.spotlightSearch",
            defaultMessage: "Open Spotlight search from anywhere on desktop",
          },
          "codex.commandDescription.notchVoice": {
            id: "codex.commandDescription.notchVoice",
            defaultMessage: "Start voice in Mini or show the ongoing call",
          },
          "codex.commandDescription.toggleNotch": {
            id: "codex.commandDescription.toggleNotch",
            defaultMessage: "Expand or collapse the notch from anywhere",
          },
          "codex.commandDescription.globalDictationHold": {
            id: "codex.commandDescription.globalDictationHold",
            defaultMessage: "Hold to dictate, release to finish. Double-tap for hands-free, tap to finish.",
          },
          "codex.commandDescription.globalDictationSingleTap": {
            id: "codex.commandDescription.globalDictationSingleTap",
            defaultMessage: "Press once to start, again to finish",
          },
          "codex.commandDescription.copyConversationPath": {
            id: "codex.commandDescription.copyConversationPath",
            defaultMessage: "Copy the current chat path",
          },
          "codex.commandDescription.copyDeeplink": {
            id: "codex.commandDescription.copyDeeplink",
            defaultMessage: "Copy a deeplink to the current chat",
          },
          "codex.commandDescription.copyWorkingDirectory": {
            id: "codex.commandDescription.copyWorkingDirectory",
            defaultMessage: "Copy the current chat working directory",
          },
          "codex.commandDescription.closeTab": {
            id: "codex.commandDescription.closeTab",
            defaultMessage: "Close the active tab",
          },
          "codex.commandDescription.closeWindow": {
            id: "codex.commandDescription.closeWindow",
            defaultMessage: "Close the active window",
          },
          "codex.commandDescription.reloadBrowserPage": {
            id: "codex.commandDescription.reloadBrowserPage",
            defaultMessage: "Reload the active browser page",
          },
          "codex.commandDescription.hardReloadBrowserPage": {
            id: "codex.commandDescription.hardReloadBrowserPage",
            defaultMessage: "Force reload the active browser page",
          },
          "codex.commandDescription.newWindow": {
            id: "codex.commandDescription.newWindow",
            defaultMessage: "Open a new window",
          },
          "codex.commandDescription.openCommandMenu": {
            id: "codex.commandDescription.openCommandMenu",
            defaultMessage: "Open the command menu",
          },
          "codex.commandDescription.searchChats": {
            id: "codex.commandDescription.searchChats",
            defaultMessage: "Search and switch to a chat",
          },
          "codex.commandDescription.searchChatsPrevious": {
            id: "codex.commandDescription.searchChatsPrevious",
            defaultMessage: "Open the chat picker and cycle backward through chats",
          },
          "codex.commandDescription.togglePriorityFilter": {
            id: "codex.commandDescription.togglePriorityFilter",
            defaultMessage: "Turn the sidebar activity view on or off",
          },
          "codex.commandDescription.searchFiles": {
            id: "codex.commandDescription.searchFiles",
            defaultMessage: "Search files",
          },
          "codex.commandDescription.renameThread": {
            id: "codex.commandDescription.renameThread",
            defaultMessage: "Rename the current chat",
          },
          "codex.commandDescription.toggleFileTreePanel": {
            id: "codex.commandDescription.toggleFileTreePanel",
            defaultMessage: "Show or hide a page's navigation, or the code viewer's file tree",
          },
          "codex.commandDescription.toggleTraceRecording": {
            id: "codex.commandDescription.toggleTraceRecording",
            defaultMessage: "Start or stop trace recording",
          },
          "codex.commandDescription.focusTab": {
            id: "codex.commandDescription.focusTab",
            defaultMessage: "Focus the tab at this position in the chat tab strip",
          },
          "codex.commandDescription.threadSlot": {
            id: "codex.commandDescription.threadSlot",
            defaultMessage: "Open the visible chat in this shortcut slot",
          },
        }),
        "codex.commandDescription.importExternalAgent": u.description,
        "codex.commandDescription.personalitySettings": p.description,
      }
    function D(e, o, a = !1) {
      if ("openOrbit" === e.id) return s(o).title
      if ("focusPageBlockControls" === e.id) return r(o).title
      if ("openAvatarOverlay" === e.id && a) return o.formatMessage(x)
      if ("composer.captureAppshot" === e.id) return n(o).title
      if ("titleIntlId" in e) {
        var d
        let a
        return b(h, e.titleIntlId)
          ? o.formatMessage(h[e.titleIntlId], { dot: "dot" })
          : null == (a = g((d = e.id)) ? l[d] : null)
            ? ""
            : o.formatMessage(a.title)
      }
      return o.formatMessage(M[e.electron.menuTitleIntlId])
    }
    function w(e, o, a, t = !1) {
      var i
      let m
      if ("openOrbit" === e.id) return s(o)
      if ("focusPageBlockControls" === e.id) return r(o)
      if ("composer.captureAppshot" === e.id) return n(o)
      if ("toggleSidePanel" === e.id)
        return {
          title:
            a?.title ??
            o.formatMessage({
              id: "codex.command.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs",
            }),
          description:
            a?.description ??
            o.formatMessage({
              id: "codex.commandDescription.toggleWorkspaceTabs",
              defaultMessage: "Switch between Chat and tabs in full view, or show or hide tabs in split view",
            }),
        }
      let u = (0, d.yF)(e)
          ? b(T, e.descriptionIntlId)
            ? o.formatMessage(T[e.descriptionIntlId], { appName: c.C, dot: "dot" })
            : null == (m = g((i = e.id)) ? l[i] : null)
              ? ""
              : o.formatMessage(m.description)
          : "",
        p = a?.title ?? D(e, o)
      return ("openAvatarOverlay" === e.id && t && (p = D(e, o, !0)), { title: p, description: a?.description ?? u })
    }
    function b(e, o) {
      return Object.hasOwn(e, o)
    }
  },
}
//# sourceMappingURL=437750.ceb57a5518.js.map
