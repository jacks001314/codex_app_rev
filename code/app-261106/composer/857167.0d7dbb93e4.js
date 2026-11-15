export const __rspack_esm_ids = [857167]
export const __webpack_modules__ = {
  iEfg(e, t) {
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
      s = i("on57"),
      n = i("zd8w"),
      r = i("Wf1j"),
      c = i("oyxz"),
      l = i("Sm6l"),
      d = i("bVeK"),
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
        b,
        x,
        C,
        w,
        j,
        v,
        S,
        M,
        k,
        _,
        A,
        N,
        E,
        T,
        P,
        V,
        K,
        B,
        D,
        R,
        z,
        I,
        F,
        L,
        Z,
        O,
        q,
        G,
        W,
        H,
        J,
        $,
        Q,
        U = (0, a.c)(121),
        { shortcut: Y, microphoneGranted: X, disabled: ee, onRequestMicrophone: et, session: ei, loadFailed: eo } = e,
        ea = void 0 !== eo && eo,
        es = (0, r.A)(),
        en = (0, n.useRef)(!1),
        er = ei?.transcript
      U[0] !== ea || U[1] !== ei?.error
        ? ((t = ea
            ? (0, o.jsx)(c.A, {
                id: "dictation.setup.demo.loadFailed",
                defaultMessage: "Couldn’t load the dictation trial",
                description: "Error when the recording trial cannot initialize; permission setup is still usable",
              })
            : ei?.error),
          (U[0] = ea),
          (U[1] = ei?.error),
          (U[2] = t))
        : (t = U[2])
      let ec = t,
        el = ei?.isDictationStarting ?? !1,
        ed = ei?.isDictating ?? !1,
        eu = ei?.isTranscribing ?? !1,
        eh = ei?.isMicrophoneBusy ?? !1,
        ep = ea || (ei?.canRetryDictation ?? !1),
        em = ei?.waveformCanvasRef,
        ef = el || ed,
        eg = ee || eu || eh || (X && null == ei)
      U[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, o.jsx)(c.A, {
            id: "dictation.setup.demo.try",
            defaultMessage: "Try it",
            description: "Invitation to try dictation in the Notes demo",
          })),
          (U[3] = i))
        : (i = U[3])
      let ey = i
      U[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (0, o.jsx)(c.A, {
            id: "dictation.setup.demo.hold",
            defaultMessage: "Press and hold to speak",
            description: "Instruction to press and hold the shortcut key or on-screen key while speaking",
          })),
          (U[4] = p))
        : (p = U[4])
      let eb = p
      if (null == ei && X && !ea) {
        let e, t
        ;(U[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(c.A, {
              id: "dictation.setup.demo.loading",
              defaultMessage: "Getting ready",
              description: "Status while the recording trial loads independently of permission setup",
            })),
            (U[5] = e))
          : (e = U[5]),
          (ey = e),
          U[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, o.jsx)(c.A, {
                id: "dictation.setup.demo.loadingGuidance",
                defaultMessage: "Just a moment",
                description: "Caption while the recording trial initializes",
              })),
              (U[6] = t))
            : (t = U[6]),
          (eb = t))
      } else if (eu) {
        let e, t
        ;(U[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(c.A, {
              id: "dictation.setup.demo.finishing",
              defaultMessage: "Finishing up",
              description: "Status while transcribing the recorded trial",
            })),
            (U[7] = e))
          : (e = U[7]),
          (ey = e),
          U[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, o.jsx)(c.A, {
                id: "dictation.setup.demo.wait",
                defaultMessage: "Just a moment",
                description: "Caption while the dictation trial is transcribing",
              })),
              (U[8] = t))
            : (t = U[8]),
          (eb = t))
      } else if (ef) {
        let e, t
        ;(U[9] !== el
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
            (U[9] = el),
            (U[10] = e))
          : (e = U[10]),
          (ey = e),
          U[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, o.jsx)(c.A, {
                id: "dictation.setup.demo.inserted",
                defaultMessage: "Release to insert",
                description: "Caption when releasing the shortcut inserts the transcript",
              })),
              (U[11] = t))
            : (t = U[11]),
          (eb = t))
      } else if (X) {
        if (eh) {
          let e
          ;(U[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(c.A, {
                id: "dictation.setup.demo.busy",
                defaultMessage: "Microphone in use",
                description: "Another dictation session currently owns the microphone",
              })),
              (U[13] = e))
            : (e = U[13]),
            (eb = e))
        } else if (er) {
          let e, t
          ;(U[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(c.A, {
                id: "dictation.setup.demo.done",
                defaultMessage: "Just like that",
                description: "Success caption after the user's words appear in Notes",
              })),
              (U[14] = e))
            : (e = U[14]),
            (ey = e),
            U[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, o.jsx)(c.A, {
                  id: "dictation.setup.demo.again",
                  defaultMessage: "Press and hold to try again",
                  description: "Instruction to repeat the dictation trial",
                })),
                (U[15] = t))
              : (t = U[15]),
            (eb = t))
        }
      } else {
        let e
        ;(U[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(c.A, {
              id: "dictation.setup.demo.allowMicrophone",
              defaultMessage: "Allow your microphone",
              description: "Instruction to grant microphone access before the dictation trial",
            })),
            (U[12] = e))
          : (e = U[12]),
          (eb = e))
      }
      let ex = "Fn" === Y ? "fn" : Y,
        eC = (ef || eu) && "cursorStill-OXg5U6"
      ;(U[16] !== eC ? ((m = (0, s.A)("cursor-y7MClr", eC)), (U[16] = eC), (U[17] = m)) : (m = U[17]),
        U[18] !== m
          ? ((f = (0, o.jsx)("span", { className: m, "aria-hidden": "true" })), (U[18] = m), (U[19] = f))
          : (f = U[19]))
      let ew = f
      U[20] !== X || U[21] !== et || U[22] !== ef || U[23] !== ei || U[24] !== eg
        ? ((g = function () {
            return !eg && !ef && (X ? (ei?.start(), !0) : (et(), !1))
          }),
          (U[20] = X),
          (U[21] = et),
          (U[22] = ef),
          (U[23] = ei),
          (U[24] = eg),
          (U[25] = g))
        : (g = U[25])
      let ej = g
      U[26] !== ei
        ? ((y = function () {
            en.current && ((en.current = !1), ei?.stop())
          }),
          (U[26] = ei),
          (U[27] = y))
        : (y = U[27])
      let ev = y
      U[28] !== ef || U[29] !== ei
        ? ((b = () => {
            ;((en.current = !1), ef && ei?.stop())
          }),
          (U[28] = ef),
          (U[29] = ei),
          (U[30] = b))
        : (b = U[30])
      let eS = (0, n.useEffectEvent)(b)
      U[31] !== ei ? ((x = () => ei?.abort()), (U[31] = ei), (U[32] = x)) : (x = U[32])
      let eM = (0, n.useEffectEvent)(x)
      ;(U[33] !== eM || U[34] !== eS
        ? ((C = () => (
            window.addEventListener("blur", eS),
            () => {
              ;(window.removeEventListener("blur", eS), eM())
            }
          )),
          (U[33] = eM),
          (U[34] = eS),
          (U[35] = C))
        : (C = U[35]),
        U[36] === Symbol.for("react.memo_cache_sentinel") ? ((w = []), (U[36] = w)) : (w = U[36]),
        (0, n.useEffect)(C, w),
        U[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, o.jsxs)("div", {
              className: "lights-bJARJ4",
              "aria-hidden": "true",
              children: [
                (0, o.jsx)("span", { className: "bg-red" }),
                (0, o.jsx)("span", { className: "bg-yellow" }),
                (0, o.jsx)("span", { className: "bg-green" }),
              ],
            })),
            (U[37] = j))
          : (j = U[37]),
        U[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, o.jsxs)("div", {
              className: "toolbar-qsuBrI",
              children: [
                j,
                (0, o.jsx)("span", {
                  className: "compose-Ifj_p2",
                  "aria-hidden": "true",
                  children: (0, o.jsx)(d.JSV, {}),
                }),
              ],
            })),
            (U[38] = v))
          : (v = U[38]))
      let ek = !er && ew
      ;(U[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = (0, o.jsx)(c.A, {
            id: "dictation.setup.demo.noteTitle",
            defaultMessage: "Weekend plans",
            description: "Example note title in a dictation onboarding illustration",
          })),
          (U[39] = S))
        : (S = U[39]),
        U[40] !== ek
          ? ((M = (0, o.jsxs)("h2", { className: "noteTitle-eqxrmR", children: [ek, S] })), (U[40] = ek), (U[41] = M))
          : (M = U[41]))
      let e_ = er && ew
      ;(U[42] !== e_ || U[43] !== er
        ? ((k = (0, o.jsxs)("p", { className: "transcript-lN12GX", "aria-live": "polite", children: [er, e_] })),
          (U[42] = e_),
          (U[43] = er),
          (U[44] = k))
        : (k = U[44]),
        U[45] !== M || U[46] !== k
          ? ((_ = (0, o.jsxs)("div", {
              className: "notes-zB7oh3",
              children: [v, (0, o.jsxs)("div", { className: "paper-KEP2FZ", children: [M, k] })],
            })),
            (U[45] = M),
            (U[46] = k),
            (U[47] = _))
          : (_ = U[47]))
      let eA = (ef || eu) && "barVisible-nC5HlD"
      U[48] !== eA ? ((A = (0, s.A)("bar-sjG5Tr", eA)), (U[48] = eA), (U[49] = A)) : (A = U[49])
      let eN = eu ? "transcribing" : "listening",
        eE = eu && "hidden"
      return (
        U[50] !== eE ? ((N = (0, s.A)("h-4 min-w-0 flex-1 text-default", eE)), (U[50] = eE), (U[51] = N)) : (N = U[51]),
        U[52] !== N || U[53] !== em
          ? ((E = (0, o.jsx)("canvas", { ref: em, className: N })), (U[52] = N), (U[53] = em), (U[54] = E))
          : (E = U[54]),
        U[55] !== eu
          ? ((T = eu && (0, o.jsx)(u.y, { className: "icon-xs text-secondary" })), (U[55] = eu), (U[56] = T))
          : (T = U[56]),
        U[57] !== eN || U[58] !== E || U[59] !== T
          ? ((P = (0, o.jsxs)(h.C, { status: eN, children: [E, T] })),
            (U[57] = eN),
            (U[58] = E),
            (U[59] = T),
            (U[60] = P))
          : (P = U[60]),
        U[61] !== A || U[62] !== P
          ? ((V = (0, o.jsx)("div", { className: A, "aria-hidden": "true", children: P })),
            (U[61] = A),
            (U[62] = P),
            (U[63] = V))
          : (V = U[63]),
        U[64] !== _ || U[65] !== V
          ? ((K = (0, o.jsxs)("div", { className: "scene-UleMFB", children: [_, V] })),
            (U[64] = _),
            (U[65] = V),
            (U[66] = K))
          : (K = U[66]),
        U[67] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, s.A)("key-h2Wi5K", "cursor-interaction")), (U[67] = B))
          : (B = U[67]),
        U[68] !== es || U[69] !== Y
          ? ((D = es.formatMessage(
              {
                id: "dictation.setup.demo.tryKey",
                defaultMessage: "Hold the {shortcut} button to try dictation",
                description: "Accessible label for the on-screen button that records real speech while held",
              },
              { shortcut: Y },
            )),
            (U[68] = es),
            (U[69] = Y),
            (U[70] = D))
          : (D = U[70]),
        U[71] !== ej
          ? ((R = (e) => {
              0 === e.button && ej() && ((en.current = !0), e.currentTarget.setPointerCapture(e.pointerId))
            }),
            (U[71] = ej),
            (U[72] = R))
          : (R = U[72]),
        U[73] !== ei
          ? ((z = () => {
              ;((en.current = !1), ei?.abort())
            }),
            (U[73] = ei),
            (U[74] = z))
          : (z = U[74]),
        U[75] !== ej || U[76] !== ef || U[77] !== ei
          ? ((I = (e) => {
              ;("Escape" === e.key && ef && (e.stopPropagation(), (en.current = !1), ei?.abort()),
                ("Space" === e.code || "Enter" === e.code) &&
                  (e.preventDefault(), !e.repeat && ej() && (en.current = !0)))
            }),
            (U[75] = ej),
            (U[76] = ef),
            (U[77] = ei),
            (U[78] = I))
          : (I = U[78]),
        U[79] !== ev
          ? ((F = (e) => {
              ;("Space" === e.code || "Enter" === e.code) && (e.preventDefault(), ev())
            }),
            (U[79] = ev),
            (U[80] = F))
          : (F = U[80]),
        U[81] !== ej || U[82] !== ef || U[83] !== ei
          ? ((L = (e) => {
              0 === e.detail && (ef ? ei?.stop() : ej())
            }),
            (U[81] = ej),
            (U[82] = ef),
            (U[83] = ei),
            (U[84] = L))
          : (L = U[84]),
        U[85] !== Y
          ? ((Z = "Fn" === Y && (0, o.jsx)("span", { className: "globe-t1Rubu", children: (0, o.jsx)(d.ZEl, {}) })),
            (U[85] = Y),
            (U[86] = Z))
          : (Z = U[86]),
        U[87] !== ex
          ? ((O = (0, o.jsx)("span", { className: "keyLabel-TD6yxz", children: ex })), (U[87] = ex), (U[88] = O))
          : (O = U[88]),
        U[89] !== ef ||
        U[90] !== ev ||
        U[91] !== D ||
        U[92] !== R ||
        U[93] !== z ||
        U[94] !== I ||
        U[95] !== F ||
        U[96] !== L ||
        U[97] !== Z ||
        U[98] !== O ||
        U[99] !== eg
          ? ((q = (0, o.jsxs)("button", {
              className: B,
              type: "button",
              "aria-label": D,
              "aria-describedby": "dictation-demo-guidance",
              "aria-pressed": ef,
              "aria-disabled": eg,
              onPointerDown: R,
              onPointerUp: ev,
              onPointerCancel: z,
              onLostPointerCapture: ev,
              onBlur: ev,
              onKeyDown: I,
              onKeyUp: F,
              onClick: L,
              children: [Z, O],
            })),
            (U[89] = ef),
            (U[90] = ev),
            (U[91] = D),
            (U[92] = R),
            (U[93] = z),
            (U[94] = I),
            (U[95] = F),
            (U[96] = L),
            (U[97] = Z),
            (U[98] = O),
            (U[99] = eg),
            (U[100] = q))
          : (q = U[100]),
        U[101] !== ey ? ((G = (0, o.jsx)("strong", { children: ey })), (U[101] = ey), (U[102] = G)) : (G = U[102]),
        U[103] !== eb ? ((W = (0, o.jsx)("span", { children: eb })), (U[103] = eb), (U[104] = W)) : (W = U[104]),
        U[105] !== G || U[106] !== W
          ? ((H = (0, o.jsxs)("div", {
              id: "dictation-demo-guidance",
              className: "guidance-mKLCxe",
              role: "status",
              children: [G, W],
            })),
            (U[105] = G),
            (U[106] = W),
            (U[107] = H))
          : (H = U[107]),
        U[108] !== q || U[109] !== H
          ? ((J = (0, o.jsxs)("div", { className: "controls-C1XZQX", children: [q, H] })),
            (U[108] = q),
            (U[109] = H),
            (U[110] = J))
          : (J = U[110]),
        U[111] !== ep || U[112] !== ec || U[113] !== eu || U[114] !== ea || U[115] !== ei
          ? (($ =
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
            (U[111] = ep),
            (U[112] = ec),
            (U[113] = eu),
            (U[114] = ea),
            (U[115] = ei),
            (U[116] = $))
          : ($ = U[116]),
        U[117] !== K || U[118] !== J || U[119] !== $
          ? ((Q = (0, o.jsxs)("div", { className: "w-full", children: [K, J, $] })),
            (U[117] = K),
            (U[118] = J),
            (U[119] = $),
            (U[120] = Q))
          : (Q = U[120]),
        Q
      )
    }
  },
  SJoB(e, t, i) {
    i.d(t, { initializeDictationSetup: () => S })
    var o = i("SRbQ"),
      a = i("ABep"),
      s = i("suje"),
      n = i("irkb"),
      r = i("zd8w"),
      c = i("gbzJ"),
      l = i("ay3C"),
      d = i("WFY2"),
      u = i("DBCl"),
      h = i("W0tK"),
      p = i("k1Wx")
    async function m(e) {
      let [t, i, o, a, s, n] = await Promise.all([
          e?.read(u.Szl.localeOverride.key),
          e?.read(u.oKj.theme.key),
          e?.read(u.oKj.lightChromeTheme.key),
          e?.read(u.oKj.darkChromeTheme.key),
          e?.read(u.oKj.lightCodeThemeId.key),
          e?.read(u.oKj.darkCodeThemeId.key),
        ]).catch(
          (e) => (d.v.warning("Could not read dictation setup appearance", { safe: {}, sensitive: { error: e } }), []),
        ),
        r = u.Szl.localeOverride.schema.safeParse(t?.effective).data ?? navigator.language,
        c = (0, h.UK)(r)
      return {
        locale: c?.locale ?? r,
        messages:
          null == c
            ? void 0
            : await (0, h.d5)(c).catch((e) => {
                d.v.warning("Could not load dictation setup translations", { safe: {}, sensitive: { error: e } })
              }),
        appearanceMode: u.oKj.theme.schema.safeParse(i?.effective).data ?? u.oKj.theme.default,
        themes: {
          light: (0, p.e8)(
            u.oKj.lightChromeTheme.schema.safeParse(o?.effective).data,
            "light",
            u.oKj.lightCodeThemeId.schema.safeParse(s?.effective).data,
          ),
          dark: (0, p.e8)(
            u.oKj.darkChromeTheme.schema.safeParse(a?.effective).data,
            "dark",
            u.oKj.darkCodeThemeId.schema.safeParse(n?.effective).data,
          ),
        },
      }
    }
    var f = i("QosV"),
      g = i("T0Rc"),
      y = i("yC2B"),
      b = i("GrLh"),
      x = i("a9La")
    function C(e) {
      let t,
        i = (0, f.c)(3),
        o = (0, r.useSyncExternalStore)(j, v, v)
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
        s,
        n,
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
      let { data: j } = (0, g.I)(o)
      return (
        d[6] !== j.appearanceMode || d[7] !== j.locale || d[8] !== j.themes
          ? ((s = () => {
              ;((document.documentElement.lang = j.locale), (document.documentElement.dir = (0, y.b)(j.locale)))
              let e = () => {
                let e =
                  "system" === j.appearanceMode
                    ? (window.electronBridge?.getSystemThemeVariant?.() ??
                      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"))
                    : j.appearanceMode
                ;(0, p.e0)(document, j.themes, e)
              }
              return (e(), window.electronBridge?.subscribeToSystemThemeVariant?.(e))
            }),
            (d[6] = j.appearanceMode),
            (d[7] = j.locale),
            (d[8] = j.themes),
            (d[9] = s))
          : (s = d[9]),
        d[10] !== j ? ((n = [j]), (d[10] = j), (d[11] = n)) : (n = d[11]),
        (0, r.useLayoutEffect)(s, n),
        d[12] !== C || d[13] !== u
          ? ((c = (0, a.jsx)(x.GlobalDictationSetupWindow, { service: u, coordination: C })),
            (d[12] = C),
            (d[13] = u),
            (d[14] = c))
          : (c = d[14]),
        d[15] !== j.locale || d[16] !== j.messages || d[17] !== c
          ? ((l = (0, a.jsx)(b.t, { locale: j.locale, messages: j.messages, children: c })),
            (d[15] = j.locale),
            (d[16] = j.messages),
            (d[17] = c),
            (d[18] = l))
          : (l = d[18]),
        l
      )
    }
    function j(e) {
      return (
        document.addEventListener("visibilitychange", e),
        () => document.removeEventListener("visibilitychange", e)
      )
    }
    function v() {
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
          g = new s.E()
        t.defer(() => g.clear())
        let y = (0, c.$M)()
        ;((document.documentElement.dataset.codexWindowType = "electron"),
          (document.documentElement.dataset.windowType = "electron"),
          (document.documentElement.dataset.codexOs = y),
          (document.documentElement.dataset.codexWindowChrome = (0, c.jy)("electron", y)),
          document.documentElement.classList.add("compact-window"))
        let b = t.move()
        return (
          window.addEventListener("pagehide", () => b.dispose(), { once: !0 }),
          d.v.info("Dictation setup renderer initialized", { safe: { elapsedMs: Math.round(performance.now()) } }),
          (0, a.jsx)(r.StrictMode, {
            children: (0, a.jsx)(n.Ht, {
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
  a9La(e, t, i) {
    i.d(t, { GlobalDictationSetupWindow: () => k })
    var o = i("ABep"),
      a = i("QosV"),
      s = i("T0Rc"),
      n = i("zd8w"),
      r = i("oyxz"),
      c = i("Kfzx"),
      l = i("GaA7"),
      d = i("WFY2"),
      u = i("iJY0")
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
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 1.75C13.16 1.75 13.7953 1.99279 14.2676 2.46484C14.4006 2.59778 14.5144 2.74588 14.6123 2.9043C14.8952 2.80246 15.1955 2.75 15.5 2.75C16.1503 2.75 16.7847 2.98116 17.2607 3.44824C17.7421 3.92075 18 4.57413 18 5.29883V7.02637C19.1305 7.18826 19.9998 8.1578 20 9.33301V14C20 18.4183 16.4183 22 12 22C7.58172 22 4 18.4183 4 14V6.3252C4 4.81169 5.11403 3.75 6.5 3.75C6.68744 3.75 6.86951 3.77127 7.04492 3.80859C7.13714 3.28975 7.37129 2.82587 7.73242 2.46484C8.20467 1.99279 8.84003 1.75 9.5 1.75C10.0431 1.75 10.5674 1.91707 11 2.23828C11.4326 1.91707 11.9569 1.75 12.5 1.75ZM12.5 3.75C12.3317 3.75 12.2171 3.80838 12.1465 3.87891C12.0796 3.94572 12 4.07556 12 4.31836V9C12 9.55228 11.5523 10 11 10C10.4477 10 10 9.55228 10 9V4.31836C9.99995 4.07556 9.92035 3.94572 9.85352 3.87891C9.78286 3.80838 9.6683 3.75 9.5 3.75C9.3317 3.75 9.21714 3.80838 9.14648 3.87891C9.07965 3.94572 9.00005 4.07556 9 4.31836V10C9 10.5523 8.55228 11 8 11C7.44772 11 7 10.5523 7 10V6.3252C7 6.08185 6.92019 5.94889 6.85156 5.87988C6.77962 5.80764 6.66513 5.75 6.5 5.75C6.33487 5.75 6.22038 5.80764 6.14844 5.87988C6.07981 5.94889 6 6.08185 6 6.3252V14C6 17.3137 8.68629 20 12 20C15.3137 20 18 17.3137 18 14V9.33301C17.9998 9.14917 17.8508 9.00018 17.667 9C16.7465 9 16 9.74652 16 10.667V12.5C16 12.9303 15.7246 13.312 15.3164 13.4482L14.6875 13.6582C13.6797 13.9943 13 14.9376 13 16C13 16.5523 12.5523 17 12 17C11.4477 17 11 16.5523 11 16C11 14.0963 12.2061 12.4055 14 11.7812V10.667C14 10.4344 14.0221 10.2069 14.0635 9.98633C14.0424 9.98765 14.0214 9.99023 14 9.99023C13.4478 9.99023 13.0002 9.54237 13 8.99023V4.31836C13 4.07556 12.9204 3.94572 12.8535 3.87891C12.7829 3.80838 12.6683 3.75 12.5 3.75ZM15.5 4.75C15.322 4.75 15.2065 4.81037 15.1396 4.87598C15.0782 4.93636 15 5.05749 15 5.29883V8.15137C15.2867 7.8475 15.6245 7.59244 16 7.40039V5.29883C16 5.05749 15.9218 4.93636 15.8604 4.87598C15.7935 4.81037 15.678 4.75 15.5 4.75Z" fill="currentColor"/>',
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
        body: '<path d="M17 15C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H7C6.44772 17 6 16.5523 6 16C6 15.4477 6.44772 15 7 15H17Z" fill="currentColor"/> <path d="M7.9834 10.7129C8.69408 10.7131 9.27051 11.2893 9.27051 12C9.27051 12.7107 8.69408 13.2869 7.9834 13.2871C7.27255 13.2871 6.69629 12.7109 6.69629 12C6.69629 11.2891 7.27255 10.7129 7.9834 10.7129Z" fill="currentColor"/> <path d="M12.0166 10.7129C12.7275 10.7129 13.3037 11.2891 13.3037 12C13.3037 12.7109 12.7275 13.2871 12.0166 13.2871C11.3059 13.2869 10.7295 12.7107 10.7295 12C10.7295 11.2893 11.3059 10.7131 12.0166 10.7129Z" fill="currentColor"/> <path d="M16.0166 10.7129C16.7275 10.7129 17.3037 11.2891 17.3037 12C17.3037 12.7109 16.7275 13.2871 16.0166 13.2871C15.3059 13.2869 14.7295 12.7107 14.7295 12C14.7295 11.2893 15.3059 10.7131 16.0166 10.7129Z" fill="currentColor"/> <path d="M6.28711 6.69531C6.99796 6.69531 7.57422 7.27157 7.57422 7.98242C7.57422 8.69327 6.99796 9.26953 6.28711 9.26953C5.57626 9.26953 5 8.69327 5 7.98242C5 7.27157 5.57626 6.69531 6.28711 6.69531Z" fill="currentColor"/> <path d="M10.3213 6.69531C11.032 6.69544 11.6084 7.27165 11.6084 7.98242C11.6084 8.69319 11.032 9.2694 10.3213 9.26953C9.61044 9.26953 9.03418 8.69327 9.03418 7.98242C9.03418 7.27157 9.61044 6.69531 10.3213 6.69531Z" fill="currentColor"/> <path d="M14.3213 6.69531C15.032 6.69544 15.6084 7.27165 15.6084 7.98242C15.6084 8.69319 15.032 9.2694 14.3213 9.26953C13.6104 9.26953 13.0342 8.69327 13.0342 7.98242C13.0342 7.27157 13.6104 6.69531 14.3213 6.69531Z" fill="currentColor"/> <path d="M18.3213 6.69531C19.032 6.69544 19.6084 7.27165 19.6084 7.98242C19.6084 8.69319 19.032 9.2694 18.3213 9.26953C17.6104 9.26953 17.0342 8.69327 17.0342 7.98242C17.0342 7.27157 17.6104 6.69531 18.3213 6.69531Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2002 3.5C21.2987 3.50011 22.9999 5.20128 23 7.2998V16.7002C22.9999 18.7987 21.2987 20.4999 19.2002 20.5H4.7998C2.70128 20.4999 1.00011 18.7987 1 16.7002V7.2998C1.00011 5.20128 2.70128 3.50011 4.7998 3.5H19.2002ZM4.7998 5.5C3.80585 5.50011 3.00011 6.30585 3 7.2998V16.7002C3.00011 17.6942 3.80585 18.4999 4.7998 18.5H19.2002C20.1942 18.4999 20.9999 17.6942 21 16.7002V7.2998C20.9999 6.30585 20.1942 5.50011 19.2002 5.5H4.7998Z" fill="currentColor"/>',
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
        body: '<path d="M18.4917 13.375C18.6989 12.8631 19.2816 12.6162 19.7935 12.8232C20.3054 13.0305 20.5524 13.6131 20.3452 14.125C19.1303 17.1264 16.342 19.3237 13.0005 19.6934V22C13.0005 22.5521 12.5526 22.9997 12.0005 23C11.4482 23 11.0005 22.5523 11.0005 22V19.6934C7.6588 19.3239 4.86978 17.1265 3.6548 14.125C3.4477 13.6131 3.6947 13.0305 4.20656 12.8232C4.71845 12.6161 5.30109 12.8631 5.50832 13.375C6.54752 15.9421 9.06444 17.75 12.0005 17.75C14.9364 17.7498 17.4526 15.942 18.4917 13.375Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0005 1.25C14.7617 1.25026 17.0005 3.48874 17.0005 6.25V10.7334C17.0005 13.4947 14.7617 15.7331 12.0005 15.7334C9.23908 15.7334 7.00051 13.4948 7.00051 10.7334V6.25C7.00051 3.48858 9.23908 1.25 12.0005 1.25ZM12.0005 3.25C10.3437 3.25 9.00051 4.59315 9.00051 6.25V10.7334C9.00051 12.3903 10.3437 13.7334 12.0005 13.7334C13.6571 13.7331 15.0005 12.3901 15.0005 10.7334V6.25C15.0005 4.59331 13.6571 3.25026 12.0005 3.25Z" fill="currentColor"/>',
      })
    var f = i("Sm6l"),
      g = i("HOLv"),
      y = i("bVeK"),
      b = i("Bbed"),
      x = i("jDEJ"),
      C = i("h5BB"),
      w = i("hYPy")
    let j = (0, b._)(
      async () =>
        (
          await Promise.all([
            i.e(534886),
            i.e(631346),
            i.e(433979),
            i.e(985132),
            i.e(852802),
            i.e(726441),
            i.e(202026),
            i.e(514766),
            i.e(564826),
            i.e(739301),
            i.e(360119),
            i.e(23568),
            i.e(658267),
            i.e(659619),
          ]).then(i.bind(i, "bKwR"))
        ).loadSetupDictationDemo(),
      { fallback: (e) => e.fallback, errorFallback: (e) => (0, o.jsx)(w.S, { ...e, loadFailed: !0 }) },
    )
    function v(e) {
      let t,
        i,
        s,
        n,
        c,
        l,
        d,
        u,
        y,
        b,
        C,
        w,
        j,
        v,
        k,
        _,
        A,
        N,
        E,
        T,
        P,
        V,
        K,
        B,
        D,
        R,
        z,
        I = (0, a.c)(69),
        {
          onClose: F,
          state: L,
          pending: Z,
          error: O,
          onRequestPermission: q,
          onFinish: G,
          onRetry: W,
          demoEnabled: H,
        } = e,
        J = void 0 !== H && H,
        $ = L?.microphone === "granted",
        Q = L?.inputMonitoring === "granted",
        U = L?.accessibility === !0,
        Y = $ && Q && U,
        X = Z || null == L || !L.supported
      ;(I[0] !== F
        ? ((t = (e) => {
            "Escape" === e.key && F()
          }),
          (I[0] = F),
          (I[1] = t))
        : (t = I[1]),
        I[2] !== Y || I[3] !== X || I[4] !== G
          ? ((i = (e) => {
              ;(e.preventDefault(), Y && !X && G())
            }),
            (I[2] = Y),
            (I[3] = X),
            (I[4] = G),
            (I[5] = i))
          : (i = I[5]),
        I[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, o.jsx)("div", { className: "titlebar-LGwwMg", "aria-hidden": !0 })), (I[6] = s))
          : (s = I[6]),
        I[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, o.jsx)("header", {
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
            (I[7] = n))
          : (n = I[7]),
        I[8] === Symbol.for("react.memo_cache_sentinel") ? ((c = (0, x.X)("Fn", !0)), (I[8] = c)) : (c = I[8]),
        I[9] !== q ? ((l = () => q("microphone")), (I[9] = q), (I[10] = l)) : (l = I[10]),
        I[11] !== J || I[12] !== X || I[13] !== $ || I[14] !== l
          ? ((d = (0, o.jsx)(M, {
              shortcut: c,
              microphoneGranted: $,
              disabled: X,
              onRequestMicrophone: l,
              enabled: J,
            })),
            (I[11] = J),
            (I[12] = X),
            (I[13] = $),
            (I[14] = l),
            (I[15] = d))
          : (d = I[15]),
        I[16] !== L
          ? ((u =
              L?.holdHotkey != null &&
              "Fn" !== L.holdHotkey &&
              (0, o.jsx)("p", {
                className: "text-center text-sm text-secondary",
                children: (0, o.jsx)(r.A, {
                  id: "dictation.setup.trialShortcut",
                  defaultMessage: "Use Fn for this demo. Your shortcut in other apps is {shortcut}.",
                  description:
                    "Explains that the setup trial uses Fn while preserving the user's existing global dictation shortcut",
                  values: { shortcut: (0, x.X)(L.holdHotkey, !0) },
                }),
              })),
            (I[16] = L),
            (I[17] = u))
          : (u = I[17]),
        I[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, o.jsx)("div", { className: "microphoneIcon-KWKKWi", children: (0, o.jsx)(g.I, { asset: m }) })),
            (I[18] = y))
          : (y = I[18]))
      let ee = !$,
        et = L?.microphone === "denied" || L?.microphone === "restricted"
      ;(I[19] !== q ? ((b = () => q("microphone")), (I[19] = q), (I[20] = b)) : (b = I[20]),
        I[21] === Symbol.for("react.memo_cache_sentinel")
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
            (I[21] = C),
            (I[22] = w))
          : ((C = I[21]), (w = I[22])),
        I[23] !== X || I[24] !== $ || I[25] !== ee || I[26] !== et || I[27] !== b
          ? ((j = (0, o.jsx)(S, {
              icon: y,
              granted: $,
              next: ee,
              disabled: X,
              openSettings: et,
              onAllow: b,
              label: C,
              description: w,
            })),
            (I[23] = X),
            (I[24] = $),
            (I[25] = ee),
            (I[26] = et),
            (I[27] = b),
            (I[28] = j))
          : (j = I[28]),
        I[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, o.jsx)("div", { className: "keyboardIcon-NCzyIo", children: (0, o.jsx)(g.I, { asset: p }) })),
            (I[29] = v))
          : (v = I[29]))
      let ei = $ && !Q,
        eo = X || L?.inputMonitoring === "unavailable"
      ;(I[30] !== q ? ((k = () => q("inputMonitoring")), (I[30] = q), (I[31] = k)) : (k = I[31]),
        I[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = (0, o.jsx)(r.A, {
              id: "dictation.setupPrototype.inputMonitoring",
              defaultMessage: "Input Monitoring",
              description: "Name of the macOS permission used to detect a global dictation shortcut",
            })),
            (A = (0, o.jsx)(r.A, {
              id: "dictation.setupPrototype.inputMonitoringReason",
              defaultMessage: "Allows ChatGPT to recognize your shortcut across apps",
              description: "Explains why global dictation requests Input Monitoring permission",
            })),
            (I[32] = _),
            (I[33] = A))
          : ((_ = I[32]), (A = I[33])),
        I[34] !== Q || I[35] !== ei || I[36] !== eo || I[37] !== k
          ? ((N = (0, o.jsx)(S, { icon: v, granted: Q, next: ei, disabled: eo, onAllow: k, label: _, description: A })),
            (I[34] = Q),
            (I[35] = ei),
            (I[36] = eo),
            (I[37] = k),
            (I[38] = N))
          : (N = I[38]),
        I[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, o.jsx)("div", {
              className: "accessibilityIcon-Wd3va1",
              children: (0, o.jsx)(g.I, { asset: h }),
            })),
            (I[39] = E))
          : (E = I[39]))
      let ea = $ && Q && !U
      return (
        I[40] !== q ? ((T = () => q("accessibility")), (I[40] = q), (I[41] = T)) : (T = I[41]),
        I[42] === Symbol.for("react.memo_cache_sentinel")
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
            (I[42] = P),
            (I[43] = V))
          : ((P = I[42]), (V = I[43])),
        I[44] !== U || I[45] !== Y || I[46] !== X || I[47] !== Z || I[48] !== ea || I[49] !== T
          ? ((K = (0, o.jsx)(S, {
              icon: E,
              granted: U,
              next: ea,
              disabled: X,
              onAllow: T,
              finish: Y,
              checkingShortcut: Z,
              label: P,
              description: V,
            })),
            (I[44] = U),
            (I[45] = Y),
            (I[46] = X),
            (I[47] = Z),
            (I[48] = ea),
            (I[49] = T),
            (I[50] = K))
          : (K = I[50]),
        I[51] !== j || I[52] !== N || I[53] !== K
          ? ((B = (0, o.jsxs)("div", { className: "permissions-K2sJae", children: [j, N, K] })),
            (I[51] = j),
            (I[52] = N),
            (I[53] = K),
            (I[54] = B))
          : (B = I[54]),
        I[55] !== O || I[56] !== W || I[57] !== Z || I[58] !== L
          ? ((D =
              (null != O || null == L) &&
              (0, o.jsxs)("div", {
                className: "feedback-mppBdJ",
                "aria-live": "polite",
                children: [
                  null != O &&
                    (0, o.jsxs)("div", {
                      className: "flex flex-col items-center gap-3",
                      role: "alert",
                      children: [
                        O,
                        null != W &&
                          (0, o.jsx)(f.$, {
                            size: "compact",
                            onClick: W,
                            disabled: Z,
                            children: (0, o.jsx)(r.A, {
                              id: "dictation.setup.retry",
                              defaultMessage: "Try again",
                              description: "Retries reading macOS dictation permission status",
                            }),
                          }),
                      ],
                    }),
                  null == O &&
                    null == L &&
                    (0, o.jsx)("p", {
                      children: (0, o.jsx)(r.A, {
                        id: "dictation.setup.checking",
                        defaultMessage: "Checking macOS permissions…",
                        description: "Loading status while checking dictation permission grants",
                      }),
                    }),
                ],
              })),
            (I[55] = O),
            (I[56] = W),
            (I[57] = Z),
            (I[58] = L),
            (I[59] = D))
          : (D = I[59]),
        I[60] !== B || I[61] !== D || I[62] !== d || I[63] !== u
          ? ((R = (0, o.jsxs)("div", { className: "content-thxZ0M", children: [n, d, u, B, D] })),
            (I[60] = B),
            (I[61] = D),
            (I[62] = d),
            (I[63] = u),
            (I[64] = R))
          : (R = I[64]),
        I[65] !== t || I[66] !== i || I[67] !== R
          ? ((z = (0, o.jsxs)("form", {
              className: "window-StprZk",
              "aria-labelledby": "dictation-setup-title",
              onKeyDown: t,
              onSubmit: i,
              children: [s, R],
            })),
            (I[65] = t),
            (I[66] = i),
            (I[67] = R),
            (I[68] = z))
          : (z = I[68]),
        z
      )
    }
    function S(e) {
      let t,
        i,
        s,
        c,
        l = (0, a.c)(31),
        {
          icon: d,
          granted: u,
          next: h,
          label: p,
          description: m,
          onAllow: g,
          finish: b,
          checkingShortcut: x,
          disabled: w,
          openSettings: j,
        } = e,
        v = void 0 !== x && x,
        S = void 0 !== j && j,
        M = (0, n.useId)()
      if (void 0 !== b && b) {
        let e, i
        ;(l[0] !== v
          ? ((e = v
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
            (l[0] = v),
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
          s = h && !w ? "next" : "pending",
          n = `${M}-action ${M}-label`,
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
          l[15] !== s ||
          l[16] !== n ||
          l[17] !== c ||
          l[18] !== d
            ? ((a = (0, o.jsx)(
                f.$,
                {
                  "aria-labelledby": n,
                  "aria-describedby": c,
                  autoFocus: h,
                  color: d,
                  radius: "full",
                  size: "compact",
                  disabled: w,
                  onClick: g,
                  children: i,
                },
                s,
              )),
              (l[11] = w),
              (l[12] = h),
              (l[13] = g),
              (l[14] = i),
              (l[15] = s),
              (l[16] = n),
              (l[17] = c),
              (l[18] = d),
              (l[19] = a))
            : (a = l[19]),
          (t = a))
      }
      let k = `${M}-label`
      l[20] !== p || l[21] !== k
        ? ((i = (0, o.jsx)("span", { id: k, className: "font-semibold whitespace-normal", children: p })),
          (l[20] = p),
          (l[21] = k),
          (l[22] = i))
        : (i = l[22])
      let _ = `${M}-description`
      return (
        l[23] !== m || l[24] !== _
          ? ((s = (0, o.jsx)("span", { id: _, className: "whitespace-normal", children: m })),
            (l[23] = m),
            (l[24] = _),
            (l[25] = s))
          : (s = l[25]),
        l[26] !== t || l[27] !== d || l[28] !== i || l[29] !== s
          ? ((c = (0, o.jsx)(C.B, { variant: "system", icon: d, title: i, subtitle: s, actions: t })),
            (l[26] = t),
            (l[27] = d),
            (l[28] = i),
            (l[29] = s),
            (l[30] = c))
          : (c = l[30]),
        c
      )
    }
    function M(e) {
      let t,
        i,
        s,
        n,
        r = (0, a.c)(9)
      ;(r[0] !== e ? (({ enabled: t, ...i } = e), (r[0] = e), (r[1] = t), (r[2] = i)) : ((t = r[1]), (i = r[2])),
        r[3] !== i ? ((s = (0, o.jsx)(w.S, { ...i })), (r[3] = i), (r[4] = s)) : (s = r[4]))
      let c = s
      return (
        r[5] !== t || r[6] !== c || r[7] !== i
          ? ((n = t ? (0, o.jsx)(j, { ...i, fallback: c }) : c), (r[5] = t), (r[6] = c), (r[7] = i), (r[8] = n))
          : (n = r[8]),
        n
      )
    }
    function k(e) {
      let t,
        i,
        u,
        h,
        p,
        m,
        f,
        g,
        y,
        b,
        x,
        C,
        w,
        j = (0, a.c)(40),
        { service: S, coordination: M } = e,
        k = S ?? l.appServices?.globalDictationSetup,
        A = M ?? l.appServices?.clientCoordination
      ;(j[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = ["global-dictation-setup"]), (j[0] = t)) : (t = j[0]),
        j[1] !== k ? ((i = async () => (await k?.getState()) ?? null), (j[1] = k), (j[2] = i)) : (i = j[2]))
      let N = null != k
      j[3] !== i || j[4] !== N
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
          (j[3] = i),
          (j[4] = N),
          (j[5] = u))
        : (u = j[5])
      let { data: E, isError: T, refetch: P } = (0, s.I)(u)
      ;(j[6] !== P
        ? ((h = () => {
            let e = () => {
              P()
            }
            return (window.addEventListener("focus", e), () => window.removeEventListener("focus", e))
          }),
          (p = [P]),
          (j[6] = P),
          (j[7] = h),
          (j[8] = p))
        : ((h = j[7]), (p = j[8])),
        (0, n.useEffect)(h, p))
      let V = null != E
      ;(j[9] !== T || j[10] !== V
        ? ((m = () => {
            d.v.info("Dictation setup content rendered", {
              safe: { elapsedMs: Math.round(performance.now()), permissionStateReady: V, isError: T },
            })
          }),
          (f = [T, V]),
          (j[9] = T),
          (j[10] = V),
          (j[11] = m),
          (j[12] = f))
        : ((m = j[11]), (f = j[12])),
        (0, n.useEffect)(m, f))
      let [K, B] = (0, n.useState)(!1),
        [D, R] = (0, n.useState)(!1),
        [z, I] = (0, n.useState)(null)
      j[13] !== A || j[14] !== K || j[15] !== P || j[16] !== k
        ? ((g = async function (e) {
            if (null != k && !K) {
              ;(B(!0), R(!1), I(null))
              try {
                if (null != e) await k.requestPermission(e)
                else {
                  let e = await k.enable()
                  e.success
                    ? (await Promise.all([
                        A?.invalidateQueryCache({ queryKey: ["vscode", "global-dictation-hotkey-state"] }),
                        A?.invalidateQueryCache({ queryKey: c.p }),
                      ]),
                      window.close())
                    : I(e)
                }
              } catch {
                R(!0)
              }
              ;(await P(), B(!1))
            }
          }),
          (j[13] = A),
          (j[14] = K),
          (j[15] = P),
          (j[16] = k),
          (j[17] = g))
        : (g = j[17])
      let F = g
      j[18] !== D
        ? ((y = D
            ? (0, o.jsx)(r.A, {
                id: "dictation.setup.error",
                defaultMessage: "Couldn’t complete dictation setup. Try again.",
                description: "Error when requesting dictation permissions or enabling the shortcut fails",
              })
            : null),
          (j[18] = D),
          (j[19] = y))
        : (y = j[19])
      let L = y
      if (z?.success === !1)
        switch (z.reason) {
          case "permissions-required": {
            let e
            ;(j[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, o.jsx)(r.A, {
                  id: "dictation.setup.permissionsRequired",
                  defaultMessage: "Allow all three permissions below, then try again",
                  description: "Setup cannot finish until microphone, Input Monitoring, and Accessibility are granted",
                })),
                (j[20] = e))
              : (e = j[20]),
              (L = e))
            break
          }
          case "shortcut-conflict": {
            let e
            ;(j[21] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, o.jsx)(r.A, {
                  id: "dictation.setup.shortcutConflict",
                  defaultMessage:
                    "This shortcut is already in use. Choose another shortcut in Settings → Voice, then return to setup.",
                  description: "Recovery when the selected global dictation shortcut conflicts with another shortcut",
                })),
                (j[21] = e))
              : (e = j[21]),
              (L = e))
            break
          }
          case "shortcut-not-ready": {
            let e
            ;(j[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, o.jsx)(r.A, {
                  id: "dictation.setup.shortcutNotReady",
                  defaultMessage:
                    "Your shortcut hasn’t connected yet. Try again, or reopen the app if macOS asks you to.",
                  description:
                    "Permission grants have been observed but the native shortcut listener has not become ready",
                })),
                (j[22] = e))
              : (e = j[22]),
              (L = e))
            break
          }
          case "shortcut-unavailable": {
            let e
            ;(j[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, o.jsx)(r.A, {
                  id: "dictation.setup.shortcutUnavailable",
                  defaultMessage:
                    "Couldn’t enable this shortcut. Close other app instances using dictation, or choose another shortcut in Settings → Voice.",
                  description:
                    "Recovery when global dictation cannot acquire shortcut ownership or register the selected shortcut",
                })),
                (j[23] = e))
              : (e = j[23]),
              (L = e))
          }
        }
      if (null == k || E?.supported === !1) {
        let e
        ;(j[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(r.A, {
              id: "dictation.setup.unavailable",
              defaultMessage: "Global dictation isn’t available in this app right now",
              description:
                "Setup is unavailable when the host does not support global dictation or the feature is disabled",
            })),
            (j[24] = e))
          : (e = j[24]),
          (L = e))
      } else if (T || E?.inputMonitoring === "unavailable") {
        let e
        ;(j[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(r.A, {
              id: "dictation.setup.readFailed",
              defaultMessage: "Couldn’t check macOS permissions. Try again.",
              description: "A native permission check failed; setup does not assume permission is granted",
            })),
            (j[25] = e))
          : (e = j[25]),
          (L = e))
      }
      let Z = E ?? void 0
      return (
        j[26] !== F
          ? ((b = (e) => {
              F(e)
            }),
            (x = () => {
              F(null)
            }),
            (j[26] = F),
            (j[27] = b),
            (j[28] = x))
          : ((b = j[27]), (x = j[28])),
        j[29] !== T || j[30] !== P || j[31] !== E?.inputMonitoring
          ? ((C =
              T || E?.inputMonitoring === "unavailable"
                ? () => {
                    P()
                  }
                : void 0),
            (j[29] = T),
            (j[30] = P),
            (j[31] = E?.inputMonitoring),
            (j[32] = C))
          : (C = j[32]),
        j[33] !== L || j[34] !== K || j[35] !== Z || j[36] !== b || j[37] !== x || j[38] !== C
          ? ((w = (0, o.jsx)(v, {
              demoEnabled: !0,
              onClose: _,
              state: Z,
              pending: K,
              error: L,
              onRequestPermission: b,
              onFinish: x,
              onRetry: C,
            })),
            (j[33] = L),
            (j[34] = K),
            (j[35] = Z),
            (j[36] = b),
            (j[37] = x),
            (j[38] = C),
            (j[39] = w))
          : (w = j[39]),
        w
      )
    }
    function _() {
      return window.close()
    }
  },
  xBek(e, t, i) {
    var o = i("ABep"),
      a = i("QosV"),
      s = i("on57"),
      n = i("iEfg")
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
              ? ((r = (0, s.A)(
                  n.A.darkTheme,
                  "flex items-center overflow-hidden border shadow-lg shadow-black/20 transition-[width,height,border-radius,background-color] duration-basic [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none motion-reduce:transition-none",
                  "error" === i ? "draggable" : "no-drag",
                  ("initializing" === i || "idle" === i) && [
                    n.A.miniSurface,
                    "h-2 w-10 justify-center rounded-[4px] border-text-secondary/70 px-0",
                  ],
                  "idle" === i &&
                    "group-hover:h-[30px] group-hover:w-[72px] group-hover:rounded-full group-hover:border-border/80 group-data-[state=delayed-open]:h-[30px] group-data-[state=delayed-open]:w-[72px] group-data-[state=delayed-open]:rounded-full group-data-[state=delayed-open]:border-border/80",
                  "initializing" !== i && "idle" !== i && [n.A.expandedSurface, "border-border/80"],
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
//# sourceMappingURL=857167.0d7dbb93e4.js.map
