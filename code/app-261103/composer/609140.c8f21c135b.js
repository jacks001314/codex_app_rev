export const __rspack_esm_ids = [609140]
export const __webpack_modules__ = {
  U44o(e, t) {
    t.A = {
      darkTheme: "darkTheme-gibVsx",
      miniSurface: "miniSurface-co74kh",
      expandedSurface: "expandedSurface-No5JUb",
    }
  },
  hYPy(e, t, i) {
    i.d(t, { S: () => p })
    var o = i("ABep"),
      a = i("QosV"),
      n = i("on57"),
      s = i("zd8w"),
      r = i("Wf1j"),
      c = i("oyxz"),
      l = i("ygO2"),
      d = i("GO7r"),
      u = i("RNul"),
      h = i("xBek")
    function p(e) {
      let t,
        i,
        p,
        m,
        f,
        g,
        y,
        x,
        b,
        C,
        w,
        v,
        j,
        S,
        M,
        _,
        k,
        A,
        N,
        E,
        T,
        P,
        V,
        B,
        D,
        K,
        R,
        z,
        O,
        F,
        Z,
        I,
        q,
        L,
        G,
        W,
        H,
        J,
        U,
        $,
        Q = (0, a.c)(121),
        { shortcut: X, microphoneGranted: Y, disabled: ee, onRequestMicrophone: et, session: ei, loadFailed: eo } = e,
        ea = void 0 !== eo && eo,
        en = (0, r.A)(),
        es = (0, s.useRef)(!1),
        er = ei?.transcript
      Q[0] !== ea || Q[1] !== ei?.error
        ? ((t = ea
            ? (0, o.jsx)(c.A, {
                id: "dictation.setup.demo.loadFailed",
                defaultMessage: "Couldn’t load the dictation trial",
                description: "Error when the recording trial cannot initialize; permission setup is still usable",
              })
            : ei?.error),
          (Q[0] = ea),
          (Q[1] = ei?.error),
          (Q[2] = t))
        : (t = Q[2])
      let ec = t,
        el = ei?.isDictationStarting ?? !1,
        ed = ei?.isDictating ?? !1,
        eu = ei?.isTranscribing ?? !1,
        eh = ei?.isMicrophoneBusy ?? !1,
        ep = ea || (ei?.canRetryDictation ?? !1),
        em = ei?.waveformCanvasRef,
        ef = el || ed,
        eg = ee || eu || eh || (Y && null == ei)
      Q[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, o.jsx)(c.A, {
            id: "dictation.setup.demo.try",
            defaultMessage: "Try it",
            description: "Invitation to try dictation in the Notes demo",
          })),
          (Q[3] = i))
        : (i = Q[3])
      let ey = i
      Q[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (0, o.jsx)(c.A, {
            id: "dictation.setup.demo.hold",
            defaultMessage: "Press and hold to speak",
            description: "Instruction to press and hold the shortcut key or on-screen key while speaking",
          })),
          (Q[4] = p))
        : (p = Q[4])
      let ex = p
      if (null == ei && Y && !ea) {
        let e, t
        ;(Q[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(c.A, {
              id: "dictation.setup.demo.loading",
              defaultMessage: "Getting ready",
              description: "Status while the recording trial loads independently of permission setup",
            })),
            (Q[5] = e))
          : (e = Q[5]),
          (ey = e),
          Q[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, o.jsx)(c.A, {
                id: "dictation.setup.demo.loadingGuidance",
                defaultMessage: "Just a moment",
                description: "Caption while the recording trial initializes",
              })),
              (Q[6] = t))
            : (t = Q[6]),
          (ex = t))
      } else if (eu) {
        let e, t
        ;(Q[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(c.A, {
              id: "dictation.setup.demo.finishing",
              defaultMessage: "Finishing up",
              description: "Status while transcribing the recorded trial",
            })),
            (Q[7] = e))
          : (e = Q[7]),
          (ey = e),
          Q[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, o.jsx)(c.A, {
                id: "dictation.setup.demo.wait",
                defaultMessage: "Just a moment",
                description: "Caption while the dictation trial is transcribing",
              })),
              (Q[8] = t))
            : (t = Q[8]),
          (ex = t))
      } else if (ef) {
        let e, t
        ;(Q[9] !== el
          ? ((e = el
              ? (0, o.jsx)(c.A, {
                  id: "dictation.setup.demo.starting",
                  defaultMessage: "Getting ready",
                  description: "Status while the microphone starts",
                })
              : (0, o.jsx)(c.A, {
                  id: "dictation.setup.demo.listening",
                  defaultMessage: "Listening",
                  description: "Status while recording real speech in the onboarding trial",
                })),
            (Q[9] = el),
            (Q[10] = e))
          : (e = Q[10]),
          (ey = e),
          Q[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, o.jsx)(c.A, {
                id: "dictation.setup.demo.inserted",
                defaultMessage: "Release to insert",
                description: "Caption when releasing the shortcut inserts the transcript",
              })),
              (Q[11] = t))
            : (t = Q[11]),
          (ex = t))
      } else if (Y) {
        if (eh) {
          let e
          ;(Q[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(c.A, {
                id: "dictation.setup.demo.busy",
                defaultMessage: "Microphone in use",
                description: "Another dictation session currently owns the microphone",
              })),
              (Q[13] = e))
            : (e = Q[13]),
            (ex = e))
        } else if (er) {
          let e, t
          ;(Q[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(c.A, {
                id: "dictation.setup.demo.done",
                defaultMessage: "Just like that",
                description: "Success caption after the user's words appear in Notes",
              })),
              (Q[14] = e))
            : (e = Q[14]),
            (ey = e),
            Q[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, o.jsx)(c.A, {
                  id: "dictation.setup.demo.again",
                  defaultMessage: "Press and hold to try again",
                  description: "Instruction to repeat the dictation trial",
                })),
                (Q[15] = t))
              : (t = Q[15]),
            (ex = t))
        }
      } else {
        let e
        ;(Q[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(c.A, {
              id: "dictation.setup.demo.allowMicrophone",
              defaultMessage: "Allow your microphone",
              description: "Instruction to grant microphone access before the dictation trial",
            })),
            (Q[12] = e))
          : (e = Q[12]),
          (ex = e))
      }
      let eb = "Fn" === X ? "fn" : X,
        eC = (ef || eu) && "cursorStill-OXg5U6"
      ;(Q[16] !== eC ? ((m = (0, n.A)("cursor-y7MClr", eC)), (Q[16] = eC), (Q[17] = m)) : (m = Q[17]),
        Q[18] !== m
          ? ((f = (0, o.jsx)("span", { className: m, "aria-hidden": "true" })), (Q[18] = m), (Q[19] = f))
          : (f = Q[19]))
      let ew = f
      Q[20] !== Y || Q[21] !== et || Q[22] !== ef || Q[23] !== ei || Q[24] !== eg
        ? ((g = function () {
            return !eg && !ef && (Y ? (ei?.start(), !0) : (et(), !1))
          }),
          (Q[20] = Y),
          (Q[21] = et),
          (Q[22] = ef),
          (Q[23] = ei),
          (Q[24] = eg),
          (Q[25] = g))
        : (g = Q[25])
      let ev = g
      Q[26] !== ei
        ? ((y = function () {
            es.current && ((es.current = !1), ei?.stop())
          }),
          (Q[26] = ei),
          (Q[27] = y))
        : (y = Q[27])
      let ej = y
      Q[28] !== ef || Q[29] !== ei
        ? ((x = () => {
            ;((es.current = !1), ef && ei?.stop())
          }),
          (Q[28] = ef),
          (Q[29] = ei),
          (Q[30] = x))
        : (x = Q[30])
      let eS = (0, s.useEffectEvent)(x)
      Q[31] !== ei ? ((b = () => ei?.abort()), (Q[31] = ei), (Q[32] = b)) : (b = Q[32])
      let eM = (0, s.useEffectEvent)(b)
      ;(Q[33] !== eM || Q[34] !== eS
        ? ((C = () => (
            window.addEventListener("blur", eS),
            () => {
              ;(window.removeEventListener("blur", eS), eM())
            }
          )),
          (Q[33] = eM),
          (Q[34] = eS),
          (Q[35] = C))
        : (C = Q[35]),
        Q[36] === Symbol.for("react.memo_cache_sentinel") ? ((w = []), (Q[36] = w)) : (w = Q[36]),
        (0, s.useEffect)(C, w),
        Q[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, o.jsxs)("div", {
              className: "lights-bJARJ4",
              "aria-hidden": "true",
              children: [
                (0, o.jsx)("span", { className: "bg-red" }),
                (0, o.jsx)("span", { className: "bg-yellow" }),
                (0, o.jsx)("span", { className: "bg-green" }),
              ],
            })),
            (Q[37] = v))
          : (v = Q[37]),
        Q[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, o.jsxs)("div", {
              className: "toolbar-qsuBrI",
              children: [
                v,
                (0, o.jsx)("span", {
                  className: "compose-Ifj_p2",
                  "aria-hidden": "true",
                  children: (0, o.jsx)(d.JSV, {}),
                }),
              ],
            })),
            (Q[38] = j))
          : (j = Q[38]))
      let e_ = !er && ew
      ;(Q[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = (0, o.jsx)(c.A, {
            id: "dictation.setup.demo.noteTitle",
            defaultMessage: "Weekend plans",
            description: "Example note title in a dictation onboarding illustration",
          })),
          (Q[39] = S))
        : (S = Q[39]),
        Q[40] !== e_
          ? ((M = (0, o.jsxs)("h2", { className: "noteTitle-eqxrmR", children: [e_, S] })), (Q[40] = e_), (Q[41] = M))
          : (M = Q[41]))
      let ek = er && ew
      ;(Q[42] !== ek || Q[43] !== er
        ? ((_ = (0, o.jsxs)("p", { className: "transcript-lN12GX", "aria-live": "polite", children: [er, ek] })),
          (Q[42] = ek),
          (Q[43] = er),
          (Q[44] = _))
        : (_ = Q[44]),
        Q[45] !== M || Q[46] !== _
          ? ((k = (0, o.jsxs)("div", {
              className: "notes-zB7oh3",
              children: [j, (0, o.jsxs)("div", { className: "paper-KEP2FZ", children: [M, _] })],
            })),
            (Q[45] = M),
            (Q[46] = _),
            (Q[47] = k))
          : (k = Q[47]))
      let eA = (ef || eu) && "barVisible-nC5HlD"
      Q[48] !== eA ? ((A = (0, n.A)("bar-sjG5Tr", eA)), (Q[48] = eA), (Q[49] = A)) : (A = Q[49])
      let eN = eu ? "transcribing" : "listening",
        eE = eu && "hidden"
      return (
        Q[50] !== eE ? ((N = (0, n.A)("h-4 min-w-0 flex-1 text-default", eE)), (Q[50] = eE), (Q[51] = N)) : (N = Q[51]),
        Q[52] !== N || Q[53] !== em
          ? ((E = (0, o.jsx)("canvas", { ref: em, className: N })), (Q[52] = N), (Q[53] = em), (Q[54] = E))
          : (E = Q[54]),
        Q[55] !== eu
          ? ((T = eu && (0, o.jsx)(u.y, { className: "icon-xs text-secondary" })), (Q[55] = eu), (Q[56] = T))
          : (T = Q[56]),
        Q[57] !== eN || Q[58] !== E || Q[59] !== T
          ? ((P = (0, o.jsxs)(h.C, { status: eN, children: [E, T] })),
            (Q[57] = eN),
            (Q[58] = E),
            (Q[59] = T),
            (Q[60] = P))
          : (P = Q[60]),
        Q[61] !== A || Q[62] !== P
          ? ((V = (0, o.jsx)("div", { className: A, "aria-hidden": "true", children: P })),
            (Q[61] = A),
            (Q[62] = P),
            (Q[63] = V))
          : (V = Q[63]),
        Q[64] !== k || Q[65] !== V
          ? ((B = (0, o.jsxs)("div", { className: "scene-UleMFB", children: [k, V] })),
            (Q[64] = k),
            (Q[65] = V),
            (Q[66] = B))
          : (B = Q[66]),
        Q[67] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, n.A)("key-h2Wi5K", "cursor-interaction")), (Q[67] = D))
          : (D = Q[67]),
        Q[68] !== en || Q[69] !== X
          ? ((K = en.formatMessage(
              {
                id: "dictation.setup.demo.tryKey",
                defaultMessage: "Hold the {shortcut} button to try dictation",
                description: "Accessible label for the on-screen button that records real speech while held",
              },
              { shortcut: X },
            )),
            (Q[68] = en),
            (Q[69] = X),
            (Q[70] = K))
          : (K = Q[70]),
        Q[71] !== ev
          ? ((R = (e) => {
              0 === e.button && ev() && ((es.current = !0), e.currentTarget.setPointerCapture(e.pointerId))
            }),
            (Q[71] = ev),
            (Q[72] = R))
          : (R = Q[72]),
        Q[73] !== ei
          ? ((z = () => {
              ;((es.current = !1), ei?.abort())
            }),
            (Q[73] = ei),
            (Q[74] = z))
          : (z = Q[74]),
        Q[75] !== ev || Q[76] !== ef || Q[77] !== ei
          ? ((O = (e) => {
              ;("Escape" === e.key && ef && (e.stopPropagation(), (es.current = !1), ei?.abort()),
                ("Space" === e.code || "Enter" === e.code) &&
                  (e.preventDefault(), !e.repeat && ev() && (es.current = !0)))
            }),
            (Q[75] = ev),
            (Q[76] = ef),
            (Q[77] = ei),
            (Q[78] = O))
          : (O = Q[78]),
        Q[79] !== ej
          ? ((F = (e) => {
              ;("Space" === e.code || "Enter" === e.code) && (e.preventDefault(), ej())
            }),
            (Q[79] = ej),
            (Q[80] = F))
          : (F = Q[80]),
        Q[81] !== ev || Q[82] !== ef || Q[83] !== ei
          ? ((Z = (e) => {
              0 === e.detail && (ef ? ei?.stop() : ev())
            }),
            (Q[81] = ev),
            (Q[82] = ef),
            (Q[83] = ei),
            (Q[84] = Z))
          : (Z = Q[84]),
        Q[85] !== X
          ? ((I = "Fn" === X && (0, o.jsx)("span", { className: "globe-t1Rubu", children: (0, o.jsx)(d.ZEl, {}) })),
            (Q[85] = X),
            (Q[86] = I))
          : (I = Q[86]),
        Q[87] !== eb
          ? ((q = (0, o.jsx)("span", { className: "keyLabel-TD6yxz", children: eb })), (Q[87] = eb), (Q[88] = q))
          : (q = Q[88]),
        Q[89] !== ef ||
        Q[90] !== ej ||
        Q[91] !== K ||
        Q[92] !== R ||
        Q[93] !== z ||
        Q[94] !== O ||
        Q[95] !== F ||
        Q[96] !== Z ||
        Q[97] !== I ||
        Q[98] !== q ||
        Q[99] !== eg
          ? ((L = (0, o.jsxs)("button", {
              className: D,
              type: "button",
              "aria-label": K,
              "aria-describedby": "dictation-demo-guidance",
              "aria-pressed": ef,
              "aria-disabled": eg,
              onPointerDown: R,
              onPointerUp: ej,
              onPointerCancel: z,
              onLostPointerCapture: ej,
              onBlur: ej,
              onKeyDown: O,
              onKeyUp: F,
              onClick: Z,
              children: [I, q],
            })),
            (Q[89] = ef),
            (Q[90] = ej),
            (Q[91] = K),
            (Q[92] = R),
            (Q[93] = z),
            (Q[94] = O),
            (Q[95] = F),
            (Q[96] = Z),
            (Q[97] = I),
            (Q[98] = q),
            (Q[99] = eg),
            (Q[100] = L))
          : (L = Q[100]),
        Q[101] !== ey ? ((G = (0, o.jsx)("strong", { children: ey })), (Q[101] = ey), (Q[102] = G)) : (G = Q[102]),
        Q[103] !== ex ? ((W = (0, o.jsx)("span", { children: ex })), (Q[103] = ex), (Q[104] = W)) : (W = Q[104]),
        Q[105] !== G || Q[106] !== W
          ? ((H = (0, o.jsxs)("div", {
              id: "dictation-demo-guidance",
              className: "guidance-mKLCxe",
              role: "status",
              children: [G, W],
            })),
            (Q[105] = G),
            (Q[106] = W),
            (Q[107] = H))
          : (H = Q[107]),
        Q[108] !== L || Q[109] !== H
          ? ((J = (0, o.jsxs)("div", { className: "controls-C1XZQX", children: [L, H] })),
            (Q[108] = L),
            (Q[109] = H),
            (Q[110] = J))
          : (J = Q[110]),
        Q[111] !== ep || Q[112] !== ec || Q[113] !== eu || Q[114] !== ea || Q[115] !== ei
          ? ((U =
              null != ec &&
              (0, o.jsxs)("div", {
                className: "mt-4 flex flex-col items-center gap-2 text-center text-sm text-secondary",
                role: "alert",
                children: [
                  (0, o.jsx)("p", { children: ec }),
                  ep &&
                    (0, o.jsx)(l.$, {
                      size: "compact",
                      disabled: eu,
                      onClick: () => {
                        ea ? window.location.reload() : ei?.retry()
                      },
                      children: (0, o.jsx)(c.A, {
                        id: "dictation.setup.demo.retry",
                        defaultMessage: "Try again",
                        description: "Retries transcription of the same recorded audio",
                      }),
                    }),
                ],
              })),
            (Q[111] = ep),
            (Q[112] = ec),
            (Q[113] = eu),
            (Q[114] = ea),
            (Q[115] = ei),
            (Q[116] = U))
          : (U = Q[116]),
        Q[117] !== B || Q[118] !== J || Q[119] !== U
          ? (($ = (0, o.jsxs)("div", { className: "w-full", children: [B, J, U] })),
            (Q[117] = B),
            (Q[118] = J),
            (Q[119] = U),
            (Q[120] = $))
          : ($ = Q[120]),
        $
      )
    }
  },
  SJoB(e, t, i) {
    i.d(t, { initializeDictationSetup: () => S })
    var o = i("SRbQ"),
      a = i("ABep"),
      n = i("suje"),
      s = i("irkb"),
      r = i("zd8w"),
      c = i("gbzJ"),
      l = i("ay3C"),
      d = i("WFY2"),
      u = i("DBCl"),
      h = i("W0tK"),
      p = i("BQgU")
    async function m(e) {
      let [t, i, o, a] = await Promise.all([
          e?.read(u.Szl.localeOverride.key),
          e?.read(u.oKj.theme.key),
          e?.read(u.oKj.lightChromeTheme.key),
          e?.read(u.oKj.darkChromeTheme.key),
        ]).catch(
          (e) => (
            d.v.warning("Could not read dictation setup appearance", { safe: {}, sensitive: { error: e } }),
            [void 0, void 0, void 0, void 0]
          ),
        ),
        n = u.Szl.localeOverride.schema.safeParse(t?.effective).data ?? navigator.language,
        s = (0, h.UK)(n)
      return {
        locale: s?.locale ?? n,
        messages:
          null == s
            ? void 0
            : await (0, h.d5)(s).catch((e) => {
                d.v.warning("Could not load dictation setup translations", { safe: {}, sensitive: { error: e } })
              }),
        appearanceMode: u.oKj.theme.schema.safeParse(i?.effective).data ?? u.oKj.theme.default,
        themes: {
          light: (0, p.xB)(u.oKj.lightChromeTheme.schema.safeParse(o?.effective).data, "light"),
          dark: (0, p.xB)(u.oKj.darkChromeTheme.schema.safeParse(a?.effective).data, "dark"),
        },
      }
    }
    var f = i("QosV"),
      g = i("T0Rc"),
      y = i("yC2B"),
      x = i("GrLh"),
      b = i("rwdX")
    function C(e) {
      let t,
        i = (0, f.c)(3),
        o = (0, r.useSyncExternalStore)(v, j, j)
      return (
        i[0] !== e || i[1] !== o
          ? ((t = o ? (0, a.jsx)(w, { ...e }) : null), (i[0] = e), (i[1] = o), (i[2] = t))
          : (t = i[2]),
        t
      )
    }
    function w(e) {
      let t,
        i,
        o,
        n,
        s,
        c,
        l,
        d = (0, f.c)(19),
        { service: u, settings: h, coordination: C, presentation: w } = e
      ;(d[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = ["dictation-setup-presentation"]), (d[0] = t))
        : (t = d[0]),
        d[1] !== h ? ((i = () => m(h)), (d[1] = h), (d[2] = i)) : (i = d[2]),
        d[3] !== w || d[4] !== i
          ? ((o = {
              queryKey: t,
              queryFn: i,
              initialData: w,
              staleTime: 0,
              retry: !1,
              networkMode: "always",
              refetchOnMount: "always",
            }),
            (d[3] = w),
            (d[4] = i),
            (d[5] = o))
          : (o = d[5]))
      let { data: v } = (0, g.I)(o)
      return (
        d[6] !== v.appearanceMode || d[7] !== v.locale || d[8] !== v.themes
          ? ((n = () => {
              ;((document.documentElement.lang = v.locale), (document.documentElement.dir = (0, y.b)(v.locale)))
              let e = () => {
                let e =
                  "system" === v.appearanceMode
                    ? (window.electronBridge?.getSystemThemeVariant?.() ??
                      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"))
                    : v.appearanceMode
                ;(0, p.e0)(document, v.themes, e)
              }
              return (e(), window.electronBridge?.subscribeToSystemThemeVariant?.(e))
            }),
            (d[6] = v.appearanceMode),
            (d[7] = v.locale),
            (d[8] = v.themes),
            (d[9] = n))
          : (n = d[9]),
        d[10] !== v ? ((s = [v]), (d[10] = v), (d[11] = s)) : (s = d[11]),
        (0, r.useLayoutEffect)(n, s),
        d[12] !== C || d[13] !== u
          ? ((c = (0, a.jsx)(b.GlobalDictationSetupWindow, { service: u, coordination: C })),
            (d[12] = C),
            (d[13] = u),
            (d[14] = c))
          : (c = d[14]),
        d[15] !== v.locale || d[16] !== v.messages || d[17] !== c
          ? ((l = (0, a.jsx)(x.t, { locale: v.locale, messages: v.messages, children: c })),
            (d[15] = v.locale),
            (d[16] = v.messages),
            (d[17] = c),
            (d[18] = l))
          : (l = d[18]),
        l
      )
    }
    function v(e) {
      return (
        document.addEventListener("visibilitychange", e),
        () => document.removeEventListener("visibilitychange", e)
      )
    }
    function j() {
      return "hidden" !== document.visibilityState
    }
    async function S() {
      let e = { stack: [], error: void 0, hasError: !1 }
      try {
        let t = (0, o.mS)(e, new DisposableStack(), !1),
          i = t.use((0, l.o)()),
          [u, h, p] = await Promise.all([
            i.services.globalDictationSetup,
            i.services.settings,
            i.services.clientCoordination,
          ])
        ;(t.use(u), t.use(h), t.use(p))
        let f = await m(h),
          g = new n.E()
        t.defer(() => g.clear())
        let y = (0, c.$M)()
        ;((document.documentElement.dataset.codexWindowType = "electron"),
          (document.documentElement.dataset.windowType = "electron"),
          (document.documentElement.dataset.codexOs = y),
          (document.documentElement.dataset.codexWindowChrome = (0, c.jy)("electron", y)),
          document.documentElement.classList.add("compact-window"))
        let x = t.move()
        return (
          window.addEventListener("pagehide", () => x.dispose(), { once: !0 }),
          d.v.info("Dictation setup renderer initialized", { safe: { elapsedMs: Math.round(performance.now()) } }),
          (0, a.jsx)(r.StrictMode, {
            children: (0, a.jsx)(s.Ht, {
              client: g,
              children: (0, a.jsx)(C, { service: u, settings: h, coordination: p, presentation: f }),
            }),
          })
        )
      } catch (t) {
        ;((e.error = t), (e.hasError = !0))
      } finally {
        ;(0, o.hk)(e)
      }
    }
  },
  rwdX(e, t, i) {
    i.d(t, { GlobalDictationSetupWindow: () => _ })
    var o = i("ABep"),
      a = i("QosV"),
      n = i("T0Rc"),
      s = i("zd8w"),
      r = i("oyxz"),
      c = i("Kfzx"),
      l = i("GaA7"),
      d = i("WFY2"),
      u = i("nkTT")
    let h = (0, u.a)({
        name: "hand-palm-regular-24",
        canvas: {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          frame: { x: 0, y: 0, width: 24, height: 24 },
          inkBounds: { x: 4, y: 1.75, width: 16, height: 20.25 },
          visualBounds: { x: 4, y: 1.75, width: 16, height: 20.25 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 4, y: 1.75, width: 16, height: 20.25 },
          center: { x: 12, y: 11.875 },
          insets: { top: 1.75, right: 4, bottom: 2, left: 4 },
          anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 11.875 }, foreground: { x: 12, y: 11.875 } },
        },
        capabilities: ["icon"],
        body: '<path d="M12.5 1.75C13.16 1.75 13.7953 1.99279 14.2676 2.46484C14.4006 2.59778 14.5144 2.74588 14.6123 2.9043C14.8952 2.80246 15.1955 2.75 15.5 2.75C16.1503 2.75 16.7847 2.98116 17.2607 3.44824C17.7421 3.92075 18 4.57413 18 5.29883V7.02637C19.1305 7.18826 19.9998 8.1578 20 9.33301V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V6.3252C4 4.81169 5.11403 3.75 6.5 3.75C6.68744 3.75 6.86951 3.77127 7.04492 3.80859C7.13714 3.28975 7.37129 2.82587 7.73242 2.46484C8.20467 1.99279 8.84003 1.75 9.5 1.75C10.0431 1.75 10.5674 1.91707 11 2.23828C11.4326 1.91707 11.9569 1.75 12.5 1.75ZM12.5 3.75C12.3317 3.75 12.2171 3.80838 12.1465 3.87891C12.0796 3.94572 12 4.07556 12 4.31836V9C12 9.55228 11.5523 10 11 10C10.4477 10 10 9.55228 10 9V4.31836C9.99995 4.07556 9.92035 3.94572 9.85352 3.87891C9.78286 3.80838 9.6683 3.75 9.5 3.75C9.3317 3.75 9.21714 3.80838 9.14648 3.87891C9.07965 3.94572 9.00005 4.07556 9 4.31836V10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10V6.3252C7 6.08185 6.92019 5.94889 6.85156 5.87988C6.77962 5.80764 6.66513 5.75 6.5 5.75C6.33487 5.75 6.22038 5.80764 6.14844 5.87988C6.07981 5.94889 6 6.08185 6 6.3252V14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14V9.33301C17.9998 9.14917 17.8508 9.00018 17.667 9C16.7465 9 16 9.74652 16 10.667V12.5C16 12.9303 15.7246 13.312 15.3164 13.4482L14.6875 13.6582C13.6797 13.9943 13 14.9376 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 14.0963 12.2061 12.4055 14 11.7812V10.667C14 10.4344 14.0221 10.2069 14.0635 9.98633C14.0424 9.98765 14.0214 9.99023 14 9.99023C13.4478 9.99023 13.0002 9.54237 13 8.99023V4.31836C13 4.07556 12.9204 3.94572 12.8535 3.87891C12.7829 3.80838 12.6683 3.75 12.5 3.75ZM15.5 4.75C15.322 4.75 15.2065 4.81037 15.1396 4.87598C15.0782 4.93636 15 5.05749 15 5.29883V8.15137C15.2867 7.8475 15.6245 7.59244 16 7.40039V5.29883C16 5.05749 15.9218 4.93636 15.8604 4.87598C15.7935 4.81037 15.678 4.75 15.5 4.75Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      p = (0, u.a)({
        name: "keyboard-regular-24",
        canvas: {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          frame: { x: 0, y: 0, width: 24, height: 24 },
          inkBounds: { x: 1, y: 3.5, width: 22, height: 17 },
          visualBounds: { x: 1, y: 3.5, width: 22, height: 17 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 1, y: 3.5, width: 22, height: 17 },
          center: { x: 12, y: 12 },
          insets: { top: 3.5, right: 1, bottom: 3.5, left: 1 },
          anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12 }, foreground: { x: 12, y: 12 } },
        },
        capabilities: ["icon"],
        body: '<path d="M17 15C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H7C6.44772 17 6 16.5523 6 16C6 15.4477 6.44772 15 7 15H17Z" fill="currentColor"/> <path d="M7.9834 10.7129C8.69408 10.7131 9.27051 11.2893 9.27051 12C9.27051 12.7107 8.69408 13.2869 7.9834 13.2871C7.27255 13.2871 6.69629 12.7109 6.69629 12C6.69629 11.2891 7.27255 10.7129 7.9834 10.7129Z" fill="currentColor"/> <path d="M12.0166 10.7129C12.7275 10.7129 13.3037 11.2891 13.3037 12C13.3037 12.7109 12.7275 13.2871 12.0166 13.2871C11.3059 13.2869 10.7295 12.7107 10.7295 12C10.7295 11.2893 11.3059 10.7131 12.0166 10.7129Z" fill="currentColor"/> <path d="M16.0166 10.7129C16.7275 10.7129 17.3037 11.2891 17.3037 12C17.3037 12.7109 16.7275 13.2871 16.0166 13.2871C15.3059 13.2869 14.7295 12.7107 14.7295 12C14.7295 11.2893 15.3059 10.7131 16.0166 10.7129Z" fill="currentColor"/> <path d="M6.28711 6.69531C6.99796 6.69531 7.57422 7.27157 7.57422 7.98242C7.57422 8.69327 6.99796 9.26953 6.28711 9.26953C5.57626 9.26953 5 8.69327 5 7.98242C5 7.27157 5.57626 6.69531 6.28711 6.69531Z" fill="currentColor"/> <path d="M10.3213 6.69531C11.032 6.69544 11.6084 7.27165 11.6084 7.98242C11.6084 8.69319 11.032 9.2694 10.3213 9.26953C9.61044 9.26953 9.03418 8.69327 9.03418 7.98242C9.03418 7.27157 9.61044 6.69531 10.3213 6.69531Z" fill="currentColor"/> <path d="M14.3213 6.69531C15.032 6.69544 15.6084 7.27165 15.6084 7.98242C15.6084 8.69319 15.032 9.2694 14.3213 9.26953C13.6104 9.26953 13.0342 8.69327 13.0342 7.98242C13.0342 7.27157 13.6104 6.69531 14.3213 6.69531Z" fill="currentColor"/> <path d="M18.3213 6.69531C19.032 6.69544 19.6084 7.27165 19.6084 7.98242C19.6084 8.69319 19.032 9.2694 18.3213 9.26953C17.6104 9.26953 17.0342 8.69327 17.0342 7.98242C17.0342 7.27157 17.6104 6.69531 18.3213 6.69531Z" fill="currentColor"/> <path d="M19.2002 3.5C21.2987 3.50011 22.9999 5.20128 23 7.2998V16.7002C22.9999 18.7987 21.2987 20.4999 19.2002 20.5H4.7998C2.70128 20.4999 1.00011 18.7987 1 16.7002V7.2998C1.00011 5.20128 2.70128 3.50011 4.7998 3.5H19.2002ZM4.7998 5.5C3.80585 5.50011 3.00011 6.30585 3 7.2998V16.7002C3.00011 17.6942 3.80585 18.4999 4.7998 18.5H19.2002C20.1942 18.4999 20.9999 17.6942 21 16.7002V7.2998C20.9999 6.30585 20.1942 5.50011 19.2002 5.5H4.7998Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      m = (0, u.a)({
        name: "microphone-regular-24",
        canvas: {
          width: 24,
          height: 24,
          viewBox: "0 0 24 24",
          frame: { x: 0, y: 0, width: 24, height: 24 },
          inkBounds: { x: 3.581543, y: 1.25, width: 16.836914, height: 21.75 },
          visualBounds: { x: 3.581543, y: 1.25, width: 16.836914, height: 21.75 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "non-circular",
          bounds: { x: 3.581543, y: 1.25, width: 16.836914, height: 21.75 },
          center: { x: 12, y: 12.125 },
          insets: { top: 1.25, right: 3.581543, bottom: 1, left: 3.581543 },
          anchors: { frame: { x: 12, y: 12 }, ink: { x: 12, y: 12.125 }, foreground: { x: 12, y: 12.125 } },
        },
        capabilities: ["icon"],
        body: '<path d="M18.4917 13.375C18.6989 12.8631 19.2816 12.6162 19.7935 12.8232C20.3054 13.0305 20.5524 13.6131 20.3452 14.125C19.1303 17.1264 16.342 19.3237 13.0005 19.6934V22C13.0005 22.5521 12.5526 22.9997 12.0005 23C11.4482 23 11.0005 22.5523 11.0005 22V19.6934C7.6588 19.3239 4.86978 17.1265 3.6548 14.125C3.4477 13.6131 3.6947 13.0305 4.20656 12.8232C4.71845 12.6161 5.30109 12.8631 5.50832 13.375C6.54752 15.9421 9.06444 17.75 12.0005 17.75C14.9364 17.7498 17.4526 15.942 18.4917 13.375Z" fill="currentColor"/> <path d="M12.0005 1.25C14.7617 1.25026 17.0005 3.48874 17.0005 6.25V10.7334C17.0005 13.4947 14.7617 15.7331 12.0005 15.7334C9.23908 15.7334 7.00051 13.4948 7.00051 10.7334V6.25C7.00051 3.48858 9.23908 1.25 12.0005 1.25ZM12.0005 3.25C10.3437 3.25 9.00051 4.59315 9.00051 6.25V10.7334C9.00051 12.3903 10.3437 13.7334 12.0005 13.7334C13.6571 13.7331 15.0005 12.3901 15.0005 10.7334V6.25C15.0005 4.59331 13.6571 3.25026 12.0005 3.25Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      })
    var f = i("ygO2"),
      g = i("HOLv"),
      y = i("GO7r"),
      x = i("Bbed"),
      b = i("jDEJ"),
      C = i("h5BB"),
      w = i("hYPy")
    let v = (0, x._)(
      async () =>
        (
          await Promise.all([
            i.e(534886),
            i.e(631346),
            i.e(84355),
            i.e(770265),
            i.e(285675),
            i.e(886697),
            i.e(202026),
            i.e(189497),
            i.e(182735),
            i.e(360119),
            i.e(23568),
            i.e(580460),
            i.e(808165),
          ]).then(i.bind(i, "bKwR"))
        ).loadSetupDictationDemo(),
      { fallback: (e) => e.fallback, errorFallback: (e) => (0, o.jsx)(w.S, { ...e, loadFailed: !0 }) },
    )
    function j(e) {
      let t,
        i,
        n,
        s,
        c,
        l,
        d,
        u,
        y,
        x,
        C,
        w,
        v,
        j,
        _,
        k,
        A,
        N,
        E,
        T,
        P,
        V,
        B,
        D,
        K,
        R,
        z,
        O = (0, a.c)(69),
        {
          onClose: F,
          state: Z,
          pending: I,
          error: q,
          onRequestPermission: L,
          onFinish: G,
          onRetry: W,
          demoEnabled: H,
        } = e,
        J = void 0 !== H && H,
        U = Z?.microphone === "granted",
        $ = Z?.inputMonitoring === "granted",
        Q = Z?.accessibility === !0,
        X = U && $ && Q,
        Y = I || null == Z || !Z.supported
      ;(O[0] !== F
        ? ((t = (e) => {
            "Escape" === e.key && F()
          }),
          (O[0] = F),
          (O[1] = t))
        : (t = O[1]),
        O[2] !== X || O[3] !== Y || O[4] !== G
          ? ((i = (e) => {
              ;(e.preventDefault(), X && !Y && G())
            }),
            (O[2] = X),
            (O[3] = Y),
            (O[4] = G),
            (O[5] = i))
          : (i = O[5]),
        O[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, o.jsx)("div", { className: "titlebar-LGwwMg", "aria-hidden": !0 })), (O[6] = n))
          : (n = O[6]),
        O[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, o.jsx)("header", {
              className: "text-center",
              children: (0, o.jsx)("h1", {
                id: "dictation-setup-title",
                className: "title-Sb5LS_",
                children: (0, o.jsx)(r.A, {
                  id: "dictation.setupPrototype.title",
                  defaultMessage: "Dictate anywhere",
                  description: "Title of a setup modal for dictating into other Mac apps",
                }),
              }),
            })),
            (O[7] = s))
          : (s = O[7]),
        O[8] === Symbol.for("react.memo_cache_sentinel") ? ((c = (0, b.X)("Fn", !0)), (O[8] = c)) : (c = O[8]),
        O[9] !== L ? ((l = () => L("microphone")), (O[9] = L), (O[10] = l)) : (l = O[10]),
        O[11] !== J || O[12] !== Y || O[13] !== U || O[14] !== l
          ? ((d = (0, o.jsx)(M, {
              shortcut: c,
              microphoneGranted: U,
              disabled: Y,
              onRequestMicrophone: l,
              enabled: J,
            })),
            (O[11] = J),
            (O[12] = Y),
            (O[13] = U),
            (O[14] = l),
            (O[15] = d))
          : (d = O[15]),
        O[16] !== Z
          ? ((u =
              Z?.holdHotkey != null &&
              "Fn" !== Z.holdHotkey &&
              (0, o.jsx)("p", {
                className: "text-center text-sm text-secondary",
                children: (0, o.jsx)(r.A, {
                  id: "dictation.setup.trialShortcut",
                  defaultMessage: "Use Fn for this demo. Your shortcut in other apps is {shortcut}.",
                  description:
                    "Explains that the setup trial uses Fn while preserving the user's existing global dictation shortcut",
                  values: { shortcut: (0, b.X)(Z.holdHotkey, !0) },
                }),
              })),
            (O[16] = Z),
            (O[17] = u))
          : (u = O[17]),
        O[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, o.jsx)("div", { className: "microphoneIcon-KWKKWi", children: (0, o.jsx)(g.I, { asset: m }) })),
            (O[18] = y))
          : (y = O[18]))
      let ee = !U,
        et = Z?.microphone === "denied" || Z?.microphone === "restricted"
      ;(O[19] !== L ? ((x = () => L("microphone")), (O[19] = L), (O[20] = x)) : (x = O[20]),
        O[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, o.jsx)(r.A, {
              id: "dictation.setupPrototype.microphone",
              defaultMessage: "Microphone",
              description: "Name of the macOS permission to capture microphone audio",
            })),
            (w = (0, o.jsx)(r.A, {
              id: "dictation.setupPrototype.microphoneReason",
              defaultMessage: "Allows ChatGPT to record your voice for dictation",
              description: "Explains why dictation requests microphone access",
            })),
            (O[21] = C),
            (O[22] = w))
          : ((C = O[21]), (w = O[22])),
        O[23] !== Y || O[24] !== U || O[25] !== ee || O[26] !== et || O[27] !== x
          ? ((v = (0, o.jsx)(S, {
              icon: y,
              granted: U,
              next: ee,
              disabled: Y,
              openSettings: et,
              onAllow: x,
              label: C,
              description: w,
            })),
            (O[23] = Y),
            (O[24] = U),
            (O[25] = ee),
            (O[26] = et),
            (O[27] = x),
            (O[28] = v))
          : (v = O[28]),
        O[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, o.jsx)("div", { className: "keyboardIcon-NCzyIo", children: (0, o.jsx)(g.I, { asset: p }) })),
            (O[29] = j))
          : (j = O[29]))
      let ei = U && !$,
        eo = Y || Z?.inputMonitoring === "unavailable"
      ;(O[30] !== L ? ((_ = () => L("inputMonitoring")), (O[30] = L), (O[31] = _)) : (_ = O[31]),
        O[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, o.jsx)(r.A, {
              id: "dictation.setupPrototype.inputMonitoring",
              defaultMessage: "Input Monitoring",
              description: "Name of the macOS permission used to detect a global dictation shortcut",
            })),
            (A = (0, o.jsx)(r.A, {
              id: "dictation.setupPrototype.inputMonitoringReason",
              defaultMessage: "Allows ChatGPT to recognize your shortcut across apps",
              description: "Explains why global dictation requests Input Monitoring permission",
            })),
            (O[32] = k),
            (O[33] = A))
          : ((k = O[32]), (A = O[33])),
        O[34] !== $ || O[35] !== ei || O[36] !== eo || O[37] !== _
          ? ((N = (0, o.jsx)(S, { icon: j, granted: $, next: ei, disabled: eo, onAllow: _, label: k, description: A })),
            (O[34] = $),
            (O[35] = ei),
            (O[36] = eo),
            (O[37] = _),
            (O[38] = N))
          : (N = O[38]),
        O[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, o.jsx)("div", {
              className: "accessibilityIcon-Wd3va1",
              children: (0, o.jsx)(g.I, { asset: h }),
            })),
            (O[39] = E))
          : (E = O[39]))
      let ea = U && $ && !Q
      return (
        O[40] !== L ? ((T = () => L("accessibility")), (O[40] = L), (O[41] = T)) : (T = O[41]),
        O[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((P = (0, o.jsx)(r.A, {
              id: "dictation.setupPrototype.accessibility",
              defaultMessage: "Accessibility",
              description: "Name of the macOS permission used to insert dictated text into another app",
            })),
            (V = (0, o.jsx)(r.A, {
              id: "dictation.setupPrototype.accessibilityReason",
              defaultMessage: "Allows ChatGPT to insert dictated text into the app you’re using",
              description: "Explains why global dictation requests Accessibility permission",
            })),
            (O[42] = P),
            (O[43] = V))
          : ((P = O[42]), (V = O[43])),
        O[44] !== Q || O[45] !== X || O[46] !== Y || O[47] !== I || O[48] !== ea || O[49] !== T
          ? ((B = (0, o.jsx)(S, {
              icon: E,
              granted: Q,
              next: ea,
              disabled: Y,
              onAllow: T,
              finish: X,
              checkingShortcut: I,
              label: P,
              description: V,
            })),
            (O[44] = Q),
            (O[45] = X),
            (O[46] = Y),
            (O[47] = I),
            (O[48] = ea),
            (O[49] = T),
            (O[50] = B))
          : (B = O[50]),
        O[51] !== v || O[52] !== N || O[53] !== B
          ? ((D = (0, o.jsxs)("div", { className: "permissions-K2sJae", children: [v, N, B] })),
            (O[51] = v),
            (O[52] = N),
            (O[53] = B),
            (O[54] = D))
          : (D = O[54]),
        O[55] !== q || O[56] !== W || O[57] !== I || O[58] !== Z
          ? ((K =
              (null != q || null == Z) &&
              (0, o.jsxs)("div", {
                className: "feedback-mppBdJ",
                "aria-live": "polite",
                children: [
                  null != q &&
                    (0, o.jsxs)("div", {
                      className: "flex flex-col items-center gap-3",
                      role: "alert",
                      children: [
                        q,
                        null != W &&
                          (0, o.jsx)(f.$, {
                            size: "compact",
                            onClick: W,
                            disabled: I,
                            children: (0, o.jsx)(r.A, {
                              id: "dictation.setup.retry",
                              defaultMessage: "Try again",
                              description: "Retries reading macOS dictation permission status",
                            }),
                          }),
                      ],
                    }),
                  null == q &&
                    null == Z &&
                    (0, o.jsx)("p", {
                      children: (0, o.jsx)(r.A, {
                        id: "dictation.setup.checking",
                        defaultMessage: "Checking macOS permissions…",
                        description: "Loading status while checking dictation permission grants",
                      }),
                    }),
                ],
              })),
            (O[55] = q),
            (O[56] = W),
            (O[57] = I),
            (O[58] = Z),
            (O[59] = K))
          : (K = O[59]),
        O[60] !== D || O[61] !== K || O[62] !== d || O[63] !== u
          ? ((R = (0, o.jsxs)("div", { className: "content-thxZ0M", children: [s, d, u, D, K] })),
            (O[60] = D),
            (O[61] = K),
            (O[62] = d),
            (O[63] = u),
            (O[64] = R))
          : (R = O[64]),
        O[65] !== t || O[66] !== i || O[67] !== R
          ? ((z = (0, o.jsxs)("form", {
              className: "window-StprZk",
              "aria-labelledby": "dictation-setup-title",
              onKeyDown: t,
              onSubmit: i,
              children: [n, R],
            })),
            (O[65] = t),
            (O[66] = i),
            (O[67] = R),
            (O[68] = z))
          : (z = O[68]),
        z
      )
    }
    function S(e) {
      let t,
        i,
        n,
        c,
        l = (0, a.c)(31),
        {
          icon: d,
          granted: u,
          next: h,
          label: p,
          description: m,
          onAllow: g,
          finish: x,
          checkingShortcut: b,
          disabled: w,
          openSettings: v,
        } = e,
        j = void 0 !== b && b,
        S = void 0 !== v && v,
        M = (0, s.useId)()
      if (void 0 !== x && x) {
        let e, i
        ;(l[0] !== j
          ? ((e = j
              ? (0, o.jsx)(r.A, {
                  id: "dictation.setup.checkingShortcut",
                  defaultMessage: "Checking shortcut…",
                  description: "Status while setup waits for the native dictation shortcut to become ready",
                })
              : (0, o.jsx)(r.A, {
                  id: "dictation.setupPrototype.done",
                  defaultMessage: "Done",
                  description: "Activates the dictation shortcut and closes setup",
                })),
            (l[0] = j),
            (l[1] = e))
          : (e = l[1]),
          l[2] !== w || l[3] !== e
            ? ((i = (0, o.jsx)(f.$, {
                autoFocus: !0,
                color: "primary",
                radius: "full",
                size: "compact",
                type: "submit",
                disabled: w,
                children: e,
              })),
              (l[2] = w),
              (l[3] = e),
              (l[4] = i))
            : (i = l[4]),
          (t = i))
      } else if (u) {
        let e
        ;(l[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsxs)("span", {
              className: "text-green",
              role: "status",
              children: [
                (0, o.jsx)("span", {
                  className: "sr-only",
                  children: (0, o.jsx)(r.A, {
                    id: "dictation.setupPrototype.permissionAllowed",
                    defaultMessage: "Done",
                    description: "Status of a dictation permission granted by macOS",
                  }),
                }),
                (0, o.jsx)(y.jFD, {}),
              ],
            })),
            (l[5] = e))
          : (e = l[5]),
          (t = e))
      } else {
        let e,
          i,
          a,
          n = h && !w ? "next" : "pending",
          s = `${M}-action ${M}-label`,
          c = `${M}-description`,
          d = h ? "primary" : "secondary",
          u = `${M}-action`
        ;(l[6] !== S
          ? ((e = S
              ? (0, o.jsx)(r.A, {
                  id: "dictation.setup.openSettings",
                  defaultMessage: "Open Settings",
                  description: "Opens macOS settings for a previously denied permission",
                })
              : (0, o.jsx)(r.A, {
                  id: "dictation.setupPrototype.allow",
                  defaultMessage: "Allow",
                  description: "Requests one macOS permission needed for global dictation",
                })),
            (l[6] = S),
            (l[7] = e))
          : (e = l[7]),
          l[8] !== u || l[9] !== e
            ? ((i = (0, o.jsx)("span", { id: u, children: e })), (l[8] = u), (l[9] = e), (l[10] = i))
            : (i = l[10]),
          l[11] !== w ||
          l[12] !== h ||
          l[13] !== g ||
          l[14] !== i ||
          l[15] !== n ||
          l[16] !== s ||
          l[17] !== c ||
          l[18] !== d
            ? ((a = (0, o.jsx)(
                f.$,
                {
                  "aria-labelledby": s,
                  "aria-describedby": c,
                  autoFocus: h,
                  color: d,
                  radius: "full",
                  size: "compact",
                  disabled: w,
                  onClick: g,
                  children: i,
                },
                n,
              )),
              (l[11] = w),
              (l[12] = h),
              (l[13] = g),
              (l[14] = i),
              (l[15] = n),
              (l[16] = s),
              (l[17] = c),
              (l[18] = d),
              (l[19] = a))
            : (a = l[19]),
          (t = a))
      }
      let _ = `${M}-label`
      l[20] !== p || l[21] !== _
        ? ((i = (0, o.jsx)("span", { id: _, className: "font-semibold whitespace-normal", children: p })),
          (l[20] = p),
          (l[21] = _),
          (l[22] = i))
        : (i = l[22])
      let k = `${M}-description`
      return (
        l[23] !== m || l[24] !== k
          ? ((n = (0, o.jsx)("span", { id: k, className: "whitespace-normal", children: m })),
            (l[23] = m),
            (l[24] = k),
            (l[25] = n))
          : (n = l[25]),
        l[26] !== t || l[27] !== d || l[28] !== i || l[29] !== n
          ? ((c = (0, o.jsx)(C.B, { variant: "system", icon: d, title: i, subtitle: n, actions: t })),
            (l[26] = t),
            (l[27] = d),
            (l[28] = i),
            (l[29] = n),
            (l[30] = c))
          : (c = l[30]),
        c
      )
    }
    function M(e) {
      let t,
        i,
        n,
        s,
        r = (0, a.c)(9)
      ;(r[0] !== e ? (({ enabled: t, ...i } = e), (r[0] = e), (r[1] = t), (r[2] = i)) : ((t = r[1]), (i = r[2])),
        r[3] !== i ? ((n = (0, o.jsx)(w.S, { ...i })), (r[3] = i), (r[4] = n)) : (n = r[4]))
      let c = n
      return (
        r[5] !== t || r[6] !== c || r[7] !== i
          ? ((s = t ? (0, o.jsx)(v, { ...i, fallback: c }) : c), (r[5] = t), (r[6] = c), (r[7] = i), (r[8] = s))
          : (s = r[8]),
        s
      )
    }
    function _(e) {
      let t,
        i,
        u,
        h,
        p,
        m,
        f,
        g,
        y,
        x,
        b,
        C,
        w,
        v = (0, a.c)(40),
        { service: S, coordination: M } = e,
        _ = S ?? l.appServices?.globalDictationSetup,
        A = M ?? l.appServices?.clientCoordination
      ;(v[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = ["global-dictation-setup"]), (v[0] = t)) : (t = v[0]),
        v[1] !== _ ? ((i = async () => (await _?.getState()) ?? null), (v[1] = _), (v[2] = i)) : (i = v[2]))
      let N = null != _
      v[3] !== i || v[4] !== N
        ? ((u = {
            queryKey: t,
            queryFn: i,
            enabled: N,
            staleTime: 0,
            gcTime: 0,
            retry: !1,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
            networkMode: "always",
          }),
          (v[3] = i),
          (v[4] = N),
          (v[5] = u))
        : (u = v[5])
      let { data: E, isError: T, refetch: P } = (0, n.I)(u)
      ;(v[6] !== P
        ? ((h = () => {
            let e = () => {
              P()
            }
            return (window.addEventListener("focus", e), () => window.removeEventListener("focus", e))
          }),
          (p = [P]),
          (v[6] = P),
          (v[7] = h),
          (v[8] = p))
        : ((h = v[7]), (p = v[8])),
        (0, s.useEffect)(h, p))
      let V = null != E
      ;(v[9] !== T || v[10] !== V
        ? ((m = () => {
            d.v.info("Dictation setup content rendered", {
              safe: { elapsedMs: Math.round(performance.now()), permissionStateReady: V, isError: T },
            })
          }),
          (f = [T, V]),
          (v[9] = T),
          (v[10] = V),
          (v[11] = m),
          (v[12] = f))
        : ((m = v[11]), (f = v[12])),
        (0, s.useEffect)(m, f))
      let [B, D] = (0, s.useState)(!1),
        [K, R] = (0, s.useState)(!1),
        [z, O] = (0, s.useState)(null)
      v[13] !== A || v[14] !== B || v[15] !== P || v[16] !== _
        ? ((g = async function (e) {
            if (null != _ && !B) {
              ;(D(!0), R(!1), O(null))
              try {
                if (null != e) await _.requestPermission(e)
                else {
                  let e = await _.enable()
                  e.success
                    ? (await Promise.all([
                        A?.invalidateQueryCache({ queryKey: ["vscode", "global-dictation-hotkey-state"] }),
                        A?.invalidateQueryCache({ queryKey: c.p }),
                      ]),
                      window.close())
                    : O(e)
                }
              } catch {
                R(!0)
              }
              ;(await P(), D(!1))
            }
          }),
          (v[13] = A),
          (v[14] = B),
          (v[15] = P),
          (v[16] = _),
          (v[17] = g))
        : (g = v[17])
      let F = g
      v[18] !== K
        ? ((y = K
            ? (0, o.jsx)(r.A, {
                id: "dictation.setup.error",
                defaultMessage: "Couldn’t complete dictation setup. Try again.",
                description: "Error when requesting dictation permissions or enabling the shortcut fails",
              })
            : null),
          (v[18] = K),
          (v[19] = y))
        : (y = v[19])
      let Z = y
      if (z?.success === !1)
        switch (z.reason) {
          case "permissions-required": {
            let e
            ;(v[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, o.jsx)(r.A, {
                  id: "dictation.setup.permissionsRequired",
                  defaultMessage: "Allow all three permissions below, then try again",
                  description: "Setup cannot finish until microphone, Input Monitoring, and Accessibility are granted",
                })),
                (v[20] = e))
              : (e = v[20]),
              (Z = e))
            break
          }
          case "shortcut-conflict": {
            let e
            ;(v[21] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, o.jsx)(r.A, {
                  id: "dictation.setup.shortcutConflict",
                  defaultMessage:
                    "This shortcut is already in use. Choose another shortcut in Settings → Voice, then return to setup.",
                  description: "Recovery when the selected global dictation shortcut conflicts with another shortcut",
                })),
                (v[21] = e))
              : (e = v[21]),
              (Z = e))
            break
          }
          case "shortcut-not-ready": {
            let e
            ;(v[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, o.jsx)(r.A, {
                  id: "dictation.setup.shortcutNotReady",
                  defaultMessage:
                    "Your shortcut hasn’t connected yet. Try again, or reopen the app if macOS asks you to.",
                  description:
                    "Permission grants have been observed but the native shortcut listener has not become ready",
                })),
                (v[22] = e))
              : (e = v[22]),
              (Z = e))
            break
          }
          case "shortcut-unavailable": {
            let e
            ;(v[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, o.jsx)(r.A, {
                  id: "dictation.setup.shortcutUnavailable",
                  defaultMessage:
                    "Couldn’t enable this shortcut. Close other app instances using dictation, or choose another shortcut in Settings → Voice.",
                  description:
                    "Recovery when global dictation cannot acquire shortcut ownership or register the selected shortcut",
                })),
                (v[23] = e))
              : (e = v[23]),
              (Z = e))
          }
        }
      if (null == _ || E?.supported === !1) {
        let e
        ;(v[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(r.A, {
              id: "dictation.setup.unavailable",
              defaultMessage: "Global dictation isn’t available in this app right now",
              description:
                "Setup is unavailable when the host does not support global dictation or the feature is disabled",
            })),
            (v[24] = e))
          : (e = v[24]),
          (Z = e))
      } else if (T || E?.inputMonitoring === "unavailable") {
        let e
        ;(v[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(r.A, {
              id: "dictation.setup.readFailed",
              defaultMessage: "Couldn’t check macOS permissions. Try again.",
              description: "A native permission check failed; setup does not assume permission is granted",
            })),
            (v[25] = e))
          : (e = v[25]),
          (Z = e))
      }
      let I = E ?? void 0
      return (
        v[26] !== F
          ? ((x = (e) => {
              F(e)
            }),
            (b = () => {
              F(null)
            }),
            (v[26] = F),
            (v[27] = x),
            (v[28] = b))
          : ((x = v[27]), (b = v[28])),
        v[29] !== T || v[30] !== P || v[31] !== E?.inputMonitoring
          ? ((C =
              T || E?.inputMonitoring === "unavailable"
                ? () => {
                    P()
                  }
                : void 0),
            (v[29] = T),
            (v[30] = P),
            (v[31] = E?.inputMonitoring),
            (v[32] = C))
          : (C = v[32]),
        v[33] !== Z || v[34] !== B || v[35] !== I || v[36] !== x || v[37] !== b || v[38] !== C
          ? ((w = (0, o.jsx)(j, {
              demoEnabled: !0,
              onClose: k,
              state: I,
              pending: B,
              error: Z,
              onRequestPermission: x,
              onFinish: b,
              onRetry: C,
            })),
            (v[33] = Z),
            (v[34] = B),
            (v[35] = I),
            (v[36] = x),
            (v[37] = b),
            (v[38] = C),
            (v[39] = w))
          : (w = v[39]),
        w
      )
    }
    function k() {
      return window.close()
    }
  },
  xBek(e, t, i) {
    var o = i("ABep"),
      a = i("QosV"),
      n = i("on57"),
      s = i("U44o")
    i.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            i,
            r,
            c,
            l = (0, a.c)(8)
          return (
            l[0] !== e ? (({ status: i, ...t } = e), (l[0] = e), (l[1] = t), (l[2] = i)) : ((t = l[1]), (i = l[2])),
            l[3] !== i
              ? ((r = (0, n.A)(
                  s.A.darkTheme,
                  "flex items-center overflow-hidden border shadow-lg shadow-black/20 transition-[width,height,border-radius,background-color] duration-basic [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none motion-reduce:transition-none",
                  "error" === i ? "draggable" : "no-drag",
                  ("initializing" === i || "idle" === i) && [
                    s.A.miniSurface,
                    "h-2 w-10 justify-center rounded-[4px] border-text-secondary/70 px-0",
                  ],
                  "idle" === i &&
                    "group-hover:h-[30px] group-hover:w-[72px] group-hover:rounded-full group-hover:border-border/80 group-data-[state=delayed-open]:h-[30px] group-data-[state=delayed-open]:w-[72px] group-data-[state=delayed-open]:rounded-full group-data-[state=delayed-open]:border-border/80",
                  "initializing" !== i && "idle" !== i && [s.A.expandedSurface, "border-border/80"],
                  ("listening" === i || "transcribing" === i) && "h-[30px] w-[72px] justify-center rounded-full px-2",
                  "error" === i && "h-8 w-fit max-w-[304px] gap-2 rounded-2xl px-2",
                )),
                (l[3] = i),
                (l[4] = r))
              : (r = l[4]),
            l[5] !== t || l[6] !== r
              ? ((c = (0, o.jsx)("section", { ...t, className: r })), (l[5] = t), (l[6] = r), (l[7] = c))
              : (c = l[7]),
            c
          )
        },
      },
    )
  },
}
//# sourceMappingURL=609140.c8f21c135b.js.map
