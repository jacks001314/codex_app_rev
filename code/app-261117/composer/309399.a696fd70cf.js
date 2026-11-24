export const __rspack_esm_ids = [309399]
export const __webpack_modules__ = {
  vSRq(e, t) {
    t.A = {
      darkTheme: "darkTheme-gibVsx",
      miniSurface: "miniSurface-co74kh",
      expandedSurface: "expandedSurface-No5JUb",
    }
  },
  hYPy(e, t, a) {
    a.d(t, { S: () => m })
    var i = a("ABep"),
      o = a("QosV"),
      s = a("on57"),
      n = a("zd8w"),
      r = a("Wf1j"),
      l = a("oyxz"),
      c = a("Sm6l"),
      d = a("bVeK"),
      u = a("RNul"),
      h = a("xBek")
    function m(e) {
      let t,
        a,
        m,
        p,
        f,
        y,
        g,
        x,
        b,
        C,
        j,
        v,
        w,
        S,
        M,
        _,
        k,
        A,
        N,
        E,
        T,
        V,
        P,
        K,
        B,
        D,
        R,
        z,
        F,
        Z,
        q,
        I,
        L,
        G,
        W,
        H,
        O,
        J,
        $,
        Q,
        U = (0, o.c)(121),
        { shortcut: X, microphoneGranted: Y, disabled: ee, onRequestMicrophone: et, session: ea, loadFailed: ei } = e,
        eo = void 0 !== ei && ei,
        es = (0, r.A)(),
        en = (0, n.useRef)(!1),
        er = ea?.transcript
      U[0] !== eo || U[1] !== ea?.error
        ? ((t = eo
            ? (0, i.jsx)(l.A, {
                id: "dictation.setup.demo.loadFailed",
                defaultMessage: "Couldn\u2019t load the dictation trial",
              })
            : ea?.error),
          (U[0] = eo),
          (U[1] = ea?.error),
          (U[2] = t))
        : (t = U[2])
      let el = t,
        ec = ea?.isDictationStarting ?? !1,
        ed = ea?.isDictating ?? !1,
        eu = ea?.isTranscribing ?? !1,
        eh = ea?.isMicrophoneBusy ?? !1,
        em = eo || (ea?.canRetryDictation ?? !1),
        ep = ea?.waveformCanvasRef,
        ef = ec || ed,
        ey = ee || eu || eh || (Y && null == ea)
      U[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, i.jsx)(l.A, { id: "dictation.setup.demo.try", defaultMessage: "Try it" })), (U[3] = a))
        : (a = U[3])
      let eg = a
      U[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((m = (0, i.jsx)(l.A, { id: "dictation.setup.demo.hold", defaultMessage: "Press and hold to speak" })),
          (U[4] = m))
        : (m = U[4])
      let ex = m
      if (null == ea && Y && !eo) {
        let e, t
        ;(U[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, { id: "dictation.setup.demo.loading", defaultMessage: "Getting ready" })), (U[5] = e))
          : (e = U[5]),
          (eg = e),
          U[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(l.A, { id: "dictation.setup.demo.loadingGuidance", defaultMessage: "Just a moment" })),
              (U[6] = t))
            : (t = U[6]),
          (ex = t))
      } else if (eu) {
        let e, t
        ;(U[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, { id: "dictation.setup.demo.finishing", defaultMessage: "Finishing up" })),
            (U[7] = e))
          : (e = U[7]),
          (eg = e),
          U[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(l.A, { id: "dictation.setup.demo.wait", defaultMessage: "Just a moment" })), (U[8] = t))
            : (t = U[8]),
          (ex = t))
      } else if (ef) {
        let e, t
        ;(U[9] !== ec
          ? ((e = ec
              ? (0, i.jsx)(l.A, { id: "dictation.setup.demo.starting", defaultMessage: "Getting ready" })
              : (0, i.jsx)(l.A, { id: "dictation.setup.demo.listening", defaultMessage: "Listening" })),
            (U[9] = ec),
            (U[10] = e))
          : (e = U[10]),
          (eg = e),
          U[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(l.A, { id: "dictation.setup.demo.inserted", defaultMessage: "Release to insert" })),
              (U[11] = t))
            : (t = U[11]),
          (ex = t))
      } else if (Y) {
        if (eh) {
          let e
          ;(U[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, { id: "dictation.setup.demo.busy", defaultMessage: "Microphone in use" })),
              (U[13] = e))
            : (e = U[13]),
            (ex = e))
        } else if (er) {
          let e, t
          ;(U[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(l.A, { id: "dictation.setup.demo.done", defaultMessage: "Just like that" })),
              (U[14] = e))
            : (e = U[14]),
            (eg = e),
            U[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, i.jsx)(l.A, {
                  id: "dictation.setup.demo.again",
                  defaultMessage: "Press and hold to try again",
                })),
                (U[15] = t))
              : (t = U[15]),
            (ex = t))
        }
      } else {
        let e
        ;(U[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(l.A, {
              id: "dictation.setup.demo.allowMicrophone",
              defaultMessage: "Allow your microphone",
            })),
            (U[12] = e))
          : (e = U[12]),
          (ex = e))
      }
      let eb = "Fn" === X ? "fn" : X,
        eC = (ef || eu) && "cursorStill-OXg5U6"
      ;(U[16] !== eC ? ((p = (0, s.A)("cursor-y7MClr", eC)), (U[16] = eC), (U[17] = p)) : (p = U[17]),
        U[18] !== p
          ? ((f = (0, i.jsx)("span", { className: p, "aria-hidden": "true" })), (U[18] = p), (U[19] = f))
          : (f = U[19]))
      let ej = f
      U[20] !== Y || U[21] !== et || U[22] !== ef || U[23] !== ea || U[24] !== ey
        ? ((y = function () {
            return !ey && !ef && (Y ? (ea?.start(), !0) : (et(), !1))
          }),
          (U[20] = Y),
          (U[21] = et),
          (U[22] = ef),
          (U[23] = ea),
          (U[24] = ey),
          (U[25] = y))
        : (y = U[25])
      let ev = y
      U[26] !== ea
        ? ((g = function () {
            en.current && ((en.current = !1), ea?.stop())
          }),
          (U[26] = ea),
          (U[27] = g))
        : (g = U[27])
      let ew = g
      U[28] !== ef || U[29] !== ea
        ? ((x = () => {
            ;((en.current = !1), ef && ea?.stop())
          }),
          (U[28] = ef),
          (U[29] = ea),
          (U[30] = x))
        : (x = U[30])
      let eS = (0, n.useEffectEvent)(x)
      U[31] !== ea ? ((b = () => ea?.abort()), (U[31] = ea), (U[32] = b)) : (b = U[32])
      let eM = (0, n.useEffectEvent)(b)
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
        U[36] === Symbol.for("react.memo_cache_sentinel") ? ((j = []), (U[36] = j)) : (j = U[36]),
        (0, n.useEffect)(C, j),
        U[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, i.jsxs)("div", {
              className: "lights-bJARJ4",
              "aria-hidden": "true",
              children: [
                (0, i.jsx)("span", { className: "bg-red" }),
                (0, i.jsx)("span", { className: "bg-yellow" }),
                (0, i.jsx)("span", { className: "bg-green" }),
              ],
            })),
            (U[37] = v))
          : (v = U[37]),
        U[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, i.jsxs)("div", {
              className: "toolbar-qsuBrI",
              children: [
                v,
                (0, i.jsx)("span", {
                  className: "compose-Ifj_p2",
                  "aria-hidden": "true",
                  children: (0, i.jsx)(d.JSV, {}),
                }),
              ],
            })),
            (U[38] = w))
          : (w = U[38]))
      let e_ = !er && ej
      ;(U[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = (0, i.jsx)(l.A, { id: "dictation.setup.demo.noteTitle", defaultMessage: "Weekend plans" })),
          (U[39] = S))
        : (S = U[39]),
        U[40] !== e_
          ? ((M = (0, i.jsxs)("h2", { className: "noteTitle-eqxrmR", children: [e_, S] })), (U[40] = e_), (U[41] = M))
          : (M = U[41]))
      let ek = er && ej
      ;(U[42] !== ek || U[43] !== er
        ? ((_ = (0, i.jsxs)("p", { className: "transcript-lN12GX", "aria-live": "polite", children: [er, ek] })),
          (U[42] = ek),
          (U[43] = er),
          (U[44] = _))
        : (_ = U[44]),
        U[45] !== M || U[46] !== _
          ? ((k = (0, i.jsxs)("div", {
              className: "notes-zB7oh3",
              children: [w, (0, i.jsxs)("div", { className: "paper-KEP2FZ", children: [M, _] })],
            })),
            (U[45] = M),
            (U[46] = _),
            (U[47] = k))
          : (k = U[47]))
      let eA = (ef || eu) && "barVisible-nC5HlD"
      U[48] !== eA ? ((A = (0, s.A)("bar-sjG5Tr", eA)), (U[48] = eA), (U[49] = A)) : (A = U[49])
      let eN = eu ? "transcribing" : "listening",
        eE = eu && "hidden"
      return (
        U[50] !== eE ? ((N = (0, s.A)("h-4 min-w-0 flex-1 text-default", eE)), (U[50] = eE), (U[51] = N)) : (N = U[51]),
        U[52] !== N || U[53] !== ep
          ? ((E = (0, i.jsx)("canvas", { ref: ep, className: N })), (U[52] = N), (U[53] = ep), (U[54] = E))
          : (E = U[54]),
        U[55] !== eu
          ? ((T = eu && (0, i.jsx)(u.y, { className: "icon-xs text-secondary" })), (U[55] = eu), (U[56] = T))
          : (T = U[56]),
        U[57] !== eN || U[58] !== E || U[59] !== T
          ? ((V = (0, i.jsxs)(h.C, { status: eN, children: [E, T] })),
            (U[57] = eN),
            (U[58] = E),
            (U[59] = T),
            (U[60] = V))
          : (V = U[60]),
        U[61] !== A || U[62] !== V
          ? ((P = (0, i.jsx)("div", { className: A, "aria-hidden": "true", children: V })),
            (U[61] = A),
            (U[62] = V),
            (U[63] = P))
          : (P = U[63]),
        U[64] !== k || U[65] !== P
          ? ((K = (0, i.jsxs)("div", { className: "scene-UleMFB", children: [k, P] })),
            (U[64] = k),
            (U[65] = P),
            (U[66] = K))
          : (K = U[66]),
        U[67] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, s.A)("key-h2Wi5K", "cursor-interaction")), (U[67] = B))
          : (B = U[67]),
        U[68] !== es || U[69] !== X
          ? ((D = es.formatMessage(
              { id: "dictation.setup.demo.tryKey", defaultMessage: "Hold the {shortcut} button to try dictation" },
              { shortcut: X },
            )),
            (U[68] = es),
            (U[69] = X),
            (U[70] = D))
          : (D = U[70]),
        U[71] !== ev
          ? ((R = (e) => {
              0 === e.button && ev() && ((en.current = !0), e.currentTarget.setPointerCapture(e.pointerId))
            }),
            (U[71] = ev),
            (U[72] = R))
          : (R = U[72]),
        U[73] !== ea
          ? ((z = () => {
              ;((en.current = !1), ea?.abort())
            }),
            (U[73] = ea),
            (U[74] = z))
          : (z = U[74]),
        U[75] !== ev || U[76] !== ef || U[77] !== ea
          ? ((F = (e) => {
              ;("Escape" === e.key && ef && (e.stopPropagation(), (en.current = !1), ea?.abort()),
                ("Space" === e.code || "Enter" === e.code) &&
                  (e.preventDefault(), !e.repeat && ev() && (en.current = !0)))
            }),
            (U[75] = ev),
            (U[76] = ef),
            (U[77] = ea),
            (U[78] = F))
          : (F = U[78]),
        U[79] !== ew
          ? ((Z = (e) => {
              ;("Space" === e.code || "Enter" === e.code) && (e.preventDefault(), ew())
            }),
            (U[79] = ew),
            (U[80] = Z))
          : (Z = U[80]),
        U[81] !== ev || U[82] !== ef || U[83] !== ea
          ? ((q = (e) => {
              0 === e.detail && (ef ? ea?.stop() : ev())
            }),
            (U[81] = ev),
            (U[82] = ef),
            (U[83] = ea),
            (U[84] = q))
          : (q = U[84]),
        U[85] !== X
          ? ((I = "Fn" === X && (0, i.jsx)("span", { className: "globe-t1Rubu", children: (0, i.jsx)(d.ZEl, {}) })),
            (U[85] = X),
            (U[86] = I))
          : (I = U[86]),
        U[87] !== eb
          ? ((L = (0, i.jsx)("span", { className: "keyLabel-TD6yxz", children: eb })), (U[87] = eb), (U[88] = L))
          : (L = U[88]),
        U[89] !== ef ||
        U[90] !== ew ||
        U[91] !== D ||
        U[92] !== R ||
        U[93] !== z ||
        U[94] !== F ||
        U[95] !== Z ||
        U[96] !== q ||
        U[97] !== I ||
        U[98] !== L ||
        U[99] !== ey
          ? ((G = (0, i.jsxs)("button", {
              className: B,
              type: "button",
              "aria-label": D,
              "aria-describedby": "dictation-demo-guidance",
              "aria-pressed": ef,
              "aria-disabled": ey,
              onPointerDown: R,
              onPointerUp: ew,
              onPointerCancel: z,
              onLostPointerCapture: ew,
              onBlur: ew,
              onKeyDown: F,
              onKeyUp: Z,
              onClick: q,
              children: [I, L],
            })),
            (U[89] = ef),
            (U[90] = ew),
            (U[91] = D),
            (U[92] = R),
            (U[93] = z),
            (U[94] = F),
            (U[95] = Z),
            (U[96] = q),
            (U[97] = I),
            (U[98] = L),
            (U[99] = ey),
            (U[100] = G))
          : (G = U[100]),
        U[101] !== eg ? ((W = (0, i.jsx)("strong", { children: eg })), (U[101] = eg), (U[102] = W)) : (W = U[102]),
        U[103] !== ex ? ((H = (0, i.jsx)("span", { children: ex })), (U[103] = ex), (U[104] = H)) : (H = U[104]),
        U[105] !== W || U[106] !== H
          ? ((O = (0, i.jsxs)("div", {
              id: "dictation-demo-guidance",
              className: "guidance-mKLCxe",
              role: "status",
              children: [W, H],
            })),
            (U[105] = W),
            (U[106] = H),
            (U[107] = O))
          : (O = U[107]),
        U[108] !== G || U[109] !== O
          ? ((J = (0, i.jsxs)("div", { className: "controls-C1XZQX", children: [G, O] })),
            (U[108] = G),
            (U[109] = O),
            (U[110] = J))
          : (J = U[110]),
        U[111] !== em || U[112] !== el || U[113] !== eu || U[114] !== eo || U[115] !== ea
          ? (($ =
              null != el &&
              (0, i.jsxs)("div", {
                className: "mt-4 flex flex-col items-center gap-2 text-center text-sm text-secondary",
                role: "alert",
                children: [
                  (0, i.jsx)("p", { children: el }),
                  em &&
                    (0, i.jsx)(c.$, {
                      size: "compact",
                      disabled: eu,
                      onClick: () => {
                        eo ? window.location.reload() : ea?.retry()
                      },
                      children: (0, i.jsx)(l.A, { id: "dictation.setup.demo.retry", defaultMessage: "Try again" }),
                    }),
                ],
              })),
            (U[111] = em),
            (U[112] = el),
            (U[113] = eu),
            (U[114] = eo),
            (U[115] = ea),
            (U[116] = $))
          : ($ = U[116]),
        U[117] !== K || U[118] !== J || U[119] !== $
          ? ((Q = (0, i.jsxs)("div", { className: "w-full", children: [K, J, $] })),
            (U[117] = K),
            (U[118] = J),
            (U[119] = $),
            (U[120] = Q))
          : (Q = U[120]),
        Q
      )
    }
  },
  SJoB(e, t, a) {
    a.d(t, { initializeDictationSetup: () => S })
    var i = a("SRbQ"),
      o = a("ABep"),
      s = a("suje"),
      n = a("irkb"),
      r = a("zd8w"),
      l = a("gbzJ"),
      c = a("ay3C"),
      d = a("WFY2"),
      u = a("DBCl"),
      h = a("W0tK"),
      m = a("ncZO")
    async function p(e) {
      let [t, a, i, o, s, n] = await Promise.all([
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
        l = (0, h.UK)(r)
      return {
        locale: l?.locale ?? r,
        messages:
          null == l
            ? void 0
            : await (0, h.d5)(l).catch((e) => {
                d.v.warning("Could not load dictation setup translations", { safe: {}, sensitive: { error: e } })
              }),
        appearanceMode: u.oKj.theme.schema.safeParse(a?.effective).data ?? u.oKj.theme.default,
        themes: {
          light: (0, m.e8)(
            u.oKj.lightChromeTheme.schema.safeParse(i?.effective).data,
            "light",
            u.oKj.lightCodeThemeId.schema.safeParse(s?.effective).data,
          ),
          dark: (0, m.e8)(
            u.oKj.darkChromeTheme.schema.safeParse(o?.effective).data,
            "dark",
            u.oKj.darkCodeThemeId.schema.safeParse(n?.effective).data,
          ),
        },
      }
    }
    var f = a("QosV"),
      y = a("T0Rc"),
      g = a("yC2B"),
      x = a("GrLh"),
      b = a("sEbS")
    function C(e) {
      let t,
        a = (0, f.c)(3),
        i = (0, r.useSyncExternalStore)(v, w, w)
      return (
        a[0] !== e || a[1] !== i
          ? ((t = i ? (0, o.jsx)(j, { ...e }) : null), (a[0] = e), (a[1] = i), (a[2] = t))
          : (t = a[2]),
        t
      )
    }
    function j(e) {
      let t,
        a,
        i,
        s,
        n,
        l,
        c,
        d = (0, f.c)(19),
        { service: u, settings: h, queryCache: C, presentation: j } = e
      ;(d[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = ["dictation-setup-presentation"]), (d[0] = t))
        : (t = d[0]),
        d[1] !== h ? ((a = () => p(h)), (d[1] = h), (d[2] = a)) : (a = d[2]),
        d[3] !== j || d[4] !== a
          ? ((i = {
              queryKey: t,
              queryFn: a,
              initialData: j,
              staleTime: 0,
              retry: !1,
              networkMode: "always",
              refetchOnMount: "always",
            }),
            (d[3] = j),
            (d[4] = a),
            (d[5] = i))
          : (i = d[5]))
      let { data: v } = (0, y.I)(i)
      return (
        d[6] !== v.appearanceMode || d[7] !== v.locale || d[8] !== v.themes
          ? ((s = () => {
              ;((document.documentElement.lang = v.locale), (document.documentElement.dir = (0, g.b)(v.locale)))
              let e = () => {
                let e =
                  "system" === v.appearanceMode
                    ? (window.electronBridge?.getSystemThemeVariant?.() ??
                      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"))
                    : v.appearanceMode
                ;(0, m.e0)(document, v.themes, e)
              }
              return (e(), window.electronBridge?.subscribeToSystemThemeVariant?.(e))
            }),
            (d[6] = v.appearanceMode),
            (d[7] = v.locale),
            (d[8] = v.themes),
            (d[9] = s))
          : (s = d[9]),
        d[10] !== v ? ((n = [v]), (d[10] = v), (d[11] = n)) : (n = d[11]),
        (0, r.useLayoutEffect)(s, n),
        d[12] !== C || d[13] !== u
          ? ((l = (0, o.jsx)(b.GlobalDictationSetupWindow, { service: u, queryCache: C })),
            (d[12] = C),
            (d[13] = u),
            (d[14] = l))
          : (l = d[14]),
        d[15] !== v.locale || d[16] !== v.messages || d[17] !== l
          ? ((c = (0, o.jsx)(x.t, { locale: v.locale, messages: v.messages, children: l })),
            (d[15] = v.locale),
            (d[16] = v.messages),
            (d[17] = l),
            (d[18] = c))
          : (c = d[18]),
        c
      )
    }
    function v(e) {
      return (
        document.addEventListener("visibilitychange", e),
        () => document.removeEventListener("visibilitychange", e)
      )
    }
    function w() {
      return "hidden" !== document.visibilityState
    }
    async function S() {
      let e = { stack: [], error: void 0, hasError: !1 }
      try {
        let t = (0, i.mS)(e, new DisposableStack(), !1),
          a = t.use((0, c.o)()),
          [u, h, m] = await Promise.all([a.services.globalDictationSetup, a.services.settings, a.services.queryCache])
        ;(t.use(u), t.use(h), t.use(m))
        let f = await p(h),
          y = new s.E()
        t.defer(() => y.clear())
        let g = (0, l.$M)()
        ;((document.documentElement.dataset.codexWindowType = "electron"),
          (document.documentElement.dataset.windowType = "electron"),
          (document.documentElement.dataset.codexOs = g),
          (document.documentElement.dataset.codexWindowChrome = (0, l.jy)("electron", g)),
          document.documentElement.classList.add("compact-window"))
        let x = t.move()
        return (
          window.addEventListener("pagehide", () => x.dispose(), { once: !0 }),
          d.v.info("Dictation setup renderer initialized", { safe: { elapsedMs: Math.round(performance.now()) } }),
          (0, o.jsx)(r.StrictMode, {
            children: (0, o.jsx)(n.Ht, {
              client: y,
              children: (0, o.jsx)(C, { service: u, settings: h, queryCache: m, presentation: f }),
            }),
          })
        )
      } catch (t) {
        ;((e.error = t), (e.hasError = !0))
      } finally {
        ;(0, i.hk)(e)
      }
    }
  },
  sEbS(e, t, a) {
    a.d(t, { GlobalDictationSetupWindow: () => _ })
    var i = a("ABep"),
      o = a("QosV"),
      s = a("T0Rc"),
      n = a("zd8w"),
      r = a("oyxz"),
      l = a("Kfzx"),
      c = a("GaA7"),
      d = a("WFY2"),
      u = a("ESTr")
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
      m = (0, u.a)({
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
      p = (0, u.a)({
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
    var f = a("Sm6l"),
      y = a("HOLv"),
      g = a("bVeK"),
      x = a("Bbed"),
      b = a("jDEJ"),
      C = a("h5BB"),
      j = a("hYPy")
    let v = (0, x._)(
      async () =>
        (
          await Promise.all([
            a.e(364086),
            a.e(534886),
            a.e(124660),
            a.e(393233),
            a.e(985132),
            a.e(177121),
            a.e(206676),
            a.e(322496),
            a.e(53010),
            a.e(364313),
            a.e(911644),
            a.e(31844),
            a.e(23568),
            a.e(924269),
            a.e(955269),
          ]).then(a.bind(a, "bKwR"))
        ).loadSetupDictationDemo(),
      { fallback: (e) => e.fallback, errorFallback: (e) => (0, i.jsx)(j.S, { ...e, loadFailed: !0 }) },
    )
    function w(e) {
      let t,
        a,
        s,
        n,
        l,
        c,
        d,
        u,
        g,
        x,
        C,
        j,
        v,
        w,
        _,
        k,
        A,
        N,
        E,
        T,
        V,
        P,
        K,
        B,
        D,
        R,
        z,
        F = (0, o.c)(69),
        {
          onClose: Z,
          state: q,
          pending: I,
          error: L,
          onRequestPermission: G,
          onFinish: W,
          onRetry: H,
          demoEnabled: O,
        } = e,
        J = void 0 !== O && O,
        $ = q?.microphone === "granted",
        Q = q?.inputMonitoring === "granted",
        U = q?.accessibility === !0,
        X = $ && Q && U,
        Y = I || null == q || !q.supported
      ;(F[0] !== Z
        ? ((t = (e) => {
            "Escape" === e.key && Z()
          }),
          (F[0] = Z),
          (F[1] = t))
        : (t = F[1]),
        F[2] !== X || F[3] !== Y || F[4] !== W
          ? ((a = (e) => {
              ;(e.preventDefault(), X && !Y && W())
            }),
            (F[2] = X),
            (F[3] = Y),
            (F[4] = W),
            (F[5] = a))
          : (a = F[5]),
        F[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)("div", { className: "titlebar-LGwwMg", "aria-hidden": !0 })), (F[6] = s))
          : (s = F[6]),
        F[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, i.jsx)("header", {
              className: "text-center",
              children: (0, i.jsx)("h1", {
                id: "dictation-setup-title",
                className: "title-Sb5LS_",
                children: (0, i.jsx)(r.A, { id: "dictation.setupPrototype.title", defaultMessage: "Dictate anywhere" }),
              }),
            })),
            (F[7] = n))
          : (n = F[7]),
        F[8] === Symbol.for("react.memo_cache_sentinel") ? ((l = (0, b.X)("Fn", !0)), (F[8] = l)) : (l = F[8]),
        F[9] !== G ? ((c = () => G("microphone")), (F[9] = G), (F[10] = c)) : (c = F[10]),
        F[11] !== J || F[12] !== Y || F[13] !== $ || F[14] !== c
          ? ((d = (0, i.jsx)(M, {
              shortcut: l,
              microphoneGranted: $,
              disabled: Y,
              onRequestMicrophone: c,
              enabled: J,
            })),
            (F[11] = J),
            (F[12] = Y),
            (F[13] = $),
            (F[14] = c),
            (F[15] = d))
          : (d = F[15]),
        F[16] !== q
          ? ((u =
              q?.holdHotkey != null &&
              "Fn" !== q.holdHotkey &&
              (0, i.jsx)("p", {
                className: "text-center text-sm text-secondary",
                children: (0, i.jsx)(r.A, {
                  id: "dictation.setup.trialShortcut",
                  defaultMessage: "Use Fn for this demo. Your shortcut in other apps is {shortcut}.",
                  values: { shortcut: (0, b.X)(q.holdHotkey, !0) },
                }),
              })),
            (F[16] = q),
            (F[17] = u))
          : (u = F[17]),
        F[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)("div", { className: "microphoneIcon-KWKKWi", children: (0, i.jsx)(y.I, { asset: p }) })),
            (F[18] = g))
          : (g = F[18]))
      let ee = !$,
        et = q?.microphone === "denied" || q?.microphone === "restricted"
      ;(F[19] !== G ? ((x = () => G("microphone")), (F[19] = G), (F[20] = x)) : (x = F[20]),
        F[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, i.jsx)(r.A, { id: "dictation.setupPrototype.microphone", defaultMessage: "Microphone" })),
            (j = (0, i.jsx)(r.A, {
              id: "dictation.setupPrototype.microphoneReason",
              defaultMessage: "Allows ChatGPT to record your voice for dictation",
            })),
            (F[21] = C),
            (F[22] = j))
          : ((C = F[21]), (j = F[22])),
        F[23] !== Y || F[24] !== $ || F[25] !== ee || F[26] !== et || F[27] !== x
          ? ((v = (0, i.jsx)(S, {
              icon: g,
              granted: $,
              next: ee,
              disabled: Y,
              openSettings: et,
              onAllow: x,
              label: C,
              description: j,
            })),
            (F[23] = Y),
            (F[24] = $),
            (F[25] = ee),
            (F[26] = et),
            (F[27] = x),
            (F[28] = v))
          : (v = F[28]),
        F[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, i.jsx)("div", { className: "keyboardIcon-NCzyIo", children: (0, i.jsx)(y.I, { asset: m }) })),
            (F[29] = w))
          : (w = F[29]))
      let ea = $ && !Q,
        ei = Y || q?.inputMonitoring === "unavailable"
      ;(F[30] !== G ? ((_ = () => G("inputMonitoring")), (F[30] = G), (F[31] = _)) : (_ = F[31]),
        F[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, i.jsx)(r.A, {
              id: "dictation.setupPrototype.inputMonitoring",
              defaultMessage: "Input Monitoring",
            })),
            (A = (0, i.jsx)(r.A, {
              id: "dictation.setupPrototype.inputMonitoringReason",
              defaultMessage: "Allows ChatGPT to recognize your shortcut across apps",
            })),
            (F[32] = k),
            (F[33] = A))
          : ((k = F[32]), (A = F[33])),
        F[34] !== Q || F[35] !== ea || F[36] !== ei || F[37] !== _
          ? ((N = (0, i.jsx)(S, { icon: w, granted: Q, next: ea, disabled: ei, onAllow: _, label: k, description: A })),
            (F[34] = Q),
            (F[35] = ea),
            (F[36] = ei),
            (F[37] = _),
            (F[38] = N))
          : (N = F[38]),
        F[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, i.jsx)("div", {
              className: "accessibilityIcon-Wd3va1",
              children: (0, i.jsx)(y.I, { asset: h }),
            })),
            (F[39] = E))
          : (E = F[39]))
      let eo = $ && Q && !U
      return (
        F[40] !== G ? ((T = () => G("accessibility")), (F[40] = G), (F[41] = T)) : (T = F[41]),
        F[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = (0, i.jsx)(r.A, { id: "dictation.setupPrototype.accessibility", defaultMessage: "Accessibility" })),
            (P = (0, i.jsx)(r.A, {
              id: "dictation.setupPrototype.accessibilityReason",
              defaultMessage: "Allows ChatGPT to insert dictated text into the app you\u2019re using",
            })),
            (F[42] = V),
            (F[43] = P))
          : ((V = F[42]), (P = F[43])),
        F[44] !== U || F[45] !== X || F[46] !== Y || F[47] !== I || F[48] !== eo || F[49] !== T
          ? ((K = (0, i.jsx)(S, {
              icon: E,
              granted: U,
              next: eo,
              disabled: Y,
              onAllow: T,
              finish: X,
              checkingShortcut: I,
              label: V,
              description: P,
            })),
            (F[44] = U),
            (F[45] = X),
            (F[46] = Y),
            (F[47] = I),
            (F[48] = eo),
            (F[49] = T),
            (F[50] = K))
          : (K = F[50]),
        F[51] !== v || F[52] !== N || F[53] !== K
          ? ((B = (0, i.jsxs)("div", { className: "permissions-K2sJae", children: [v, N, K] })),
            (F[51] = v),
            (F[52] = N),
            (F[53] = K),
            (F[54] = B))
          : (B = F[54]),
        F[55] !== L || F[56] !== H || F[57] !== I || F[58] !== q
          ? ((D =
              (null != L || null == q) &&
              (0, i.jsxs)("div", {
                className: "feedback-mppBdJ",
                "aria-live": "polite",
                children: [
                  null != L &&
                    (0, i.jsxs)("div", {
                      className: "flex flex-col items-center gap-3",
                      role: "alert",
                      children: [
                        L,
                        null != H &&
                          (0, i.jsx)(f.$, {
                            size: "compact",
                            onClick: H,
                            disabled: I,
                            children: (0, i.jsx)(r.A, { id: "dictation.setup.retry", defaultMessage: "Try again" }),
                          }),
                      ],
                    }),
                  null == L &&
                    null == q &&
                    (0, i.jsx)("p", {
                      children: (0, i.jsx)(r.A, {
                        id: "dictation.setup.checking",
                        defaultMessage: "Checking macOS permissions\u2026",
                      }),
                    }),
                ],
              })),
            (F[55] = L),
            (F[56] = H),
            (F[57] = I),
            (F[58] = q),
            (F[59] = D))
          : (D = F[59]),
        F[60] !== B || F[61] !== D || F[62] !== d || F[63] !== u
          ? ((R = (0, i.jsxs)("div", { className: "content-thxZ0M", children: [n, d, u, B, D] })),
            (F[60] = B),
            (F[61] = D),
            (F[62] = d),
            (F[63] = u),
            (F[64] = R))
          : (R = F[64]),
        F[65] !== t || F[66] !== a || F[67] !== R
          ? ((z = (0, i.jsxs)("form", {
              className: "window-StprZk",
              "aria-labelledby": "dictation-setup-title",
              onKeyDown: t,
              onSubmit: a,
              children: [s, R],
            })),
            (F[65] = t),
            (F[66] = a),
            (F[67] = R),
            (F[68] = z))
          : (z = F[68]),
        z
      )
    }
    function S(e) {
      let t,
        a,
        s,
        l,
        c = (0, o.c)(31),
        {
          icon: d,
          granted: u,
          next: h,
          label: m,
          description: p,
          onAllow: y,
          finish: x,
          checkingShortcut: b,
          disabled: j,
          openSettings: v,
        } = e,
        w = void 0 !== b && b,
        S = void 0 !== v && v,
        M = (0, n.useId)()
      if (void 0 !== x && x) {
        let e, a
        ;(c[0] !== w
          ? ((e = w
              ? (0, i.jsx)(r.A, { id: "dictation.setup.checkingShortcut", defaultMessage: "Checking shortcut\u2026" })
              : (0, i.jsx)(r.A, { id: "dictation.setupPrototype.done", defaultMessage: "Done" })),
            (c[0] = w),
            (c[1] = e))
          : (e = c[1]),
          c[2] !== j || c[3] !== e
            ? ((a = (0, i.jsx)(f.$, {
                autoFocus: !0,
                color: "primary",
                radius: "full",
                size: "compact",
                type: "submit",
                disabled: j,
                children: e,
              })),
              (c[2] = j),
              (c[3] = e),
              (c[4] = a))
            : (a = c[4]),
          (t = a))
      } else if (u) {
        let e
        ;(c[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsxs)("span", {
              className: "text-green",
              role: "status",
              children: [
                (0, i.jsx)("span", {
                  className: "sr-only",
                  children: (0, i.jsx)(r.A, {
                    id: "dictation.setupPrototype.permissionAllowed",
                    defaultMessage: "Done",
                  }),
                }),
                (0, i.jsx)(g.jFD, {}),
              ],
            })),
            (c[5] = e))
          : (e = c[5]),
          (t = e))
      } else {
        let e,
          a,
          o,
          s = h && !j ? "next" : "pending",
          n = `${M}-action ${M}-label`,
          l = `${M}-description`,
          d = h ? "primary" : "secondary",
          u = `${M}-action`
        ;(c[6] !== S
          ? ((e = S
              ? (0, i.jsx)(r.A, { id: "dictation.setup.openSettings", defaultMessage: "Open Settings" })
              : (0, i.jsx)(r.A, { id: "dictation.setupPrototype.allow", defaultMessage: "Allow" })),
            (c[6] = S),
            (c[7] = e))
          : (e = c[7]),
          c[8] !== u || c[9] !== e
            ? ((a = (0, i.jsx)("span", { id: u, children: e })), (c[8] = u), (c[9] = e), (c[10] = a))
            : (a = c[10]),
          c[11] !== j ||
          c[12] !== h ||
          c[13] !== y ||
          c[14] !== a ||
          c[15] !== s ||
          c[16] !== n ||
          c[17] !== l ||
          c[18] !== d
            ? ((o = (0, i.jsx)(
                f.$,
                {
                  "aria-labelledby": n,
                  "aria-describedby": l,
                  autoFocus: h,
                  color: d,
                  radius: "full",
                  size: "compact",
                  disabled: j,
                  onClick: y,
                  children: a,
                },
                s,
              )),
              (c[11] = j),
              (c[12] = h),
              (c[13] = y),
              (c[14] = a),
              (c[15] = s),
              (c[16] = n),
              (c[17] = l),
              (c[18] = d),
              (c[19] = o))
            : (o = c[19]),
          (t = o))
      }
      let _ = `${M}-label`
      c[20] !== m || c[21] !== _
        ? ((a = (0, i.jsx)("span", { id: _, className: "font-semibold whitespace-normal", children: m })),
          (c[20] = m),
          (c[21] = _),
          (c[22] = a))
        : (a = c[22])
      let k = `${M}-description`
      return (
        c[23] !== p || c[24] !== k
          ? ((s = (0, i.jsx)("span", { id: k, className: "whitespace-normal", children: p })),
            (c[23] = p),
            (c[24] = k),
            (c[25] = s))
          : (s = c[25]),
        c[26] !== t || c[27] !== d || c[28] !== a || c[29] !== s
          ? ((l = (0, i.jsx)(C.B, { variant: "system", icon: d, title: a, subtitle: s, actions: t })),
            (c[26] = t),
            (c[27] = d),
            (c[28] = a),
            (c[29] = s),
            (c[30] = l))
          : (l = c[30]),
        l
      )
    }
    function M(e) {
      let t,
        a,
        s,
        n,
        r = (0, o.c)(9)
      ;(r[0] !== e ? (({ enabled: t, ...a } = e), (r[0] = e), (r[1] = t), (r[2] = a)) : ((t = r[1]), (a = r[2])),
        r[3] !== a ? ((s = (0, i.jsx)(j.S, { ...a })), (r[3] = a), (r[4] = s)) : (s = r[4]))
      let l = s
      return (
        r[5] !== t || r[6] !== l || r[7] !== a
          ? ((n = t ? (0, i.jsx)(v, { ...a, fallback: l }) : l), (r[5] = t), (r[6] = l), (r[7] = a), (r[8] = n))
          : (n = r[8]),
        n
      )
    }
    function _(e) {
      let t,
        a,
        u,
        h,
        m,
        p,
        f,
        y,
        g,
        x,
        b,
        C,
        j,
        v = (0, o.c)(40),
        { service: S, queryCache: M } = e,
        _ = S ?? c.appServices?.globalDictationSetup,
        A = M ?? c.appServices?.queryCache
      ;(v[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = ["global-dictation-setup"]), (v[0] = t)) : (t = v[0]),
        v[1] !== _ ? ((a = async () => (await _?.getState()) ?? null), (v[1] = _), (v[2] = a)) : (a = v[2]))
      let N = null != _
      v[3] !== a || v[4] !== N
        ? ((u = {
            queryKey: t,
            queryFn: a,
            enabled: N,
            staleTime: 0,
            gcTime: 0,
            retry: !1,
            refetchOnWindowFocus: !1,
            refetchOnReconnect: !1,
            networkMode: "always",
          }),
          (v[3] = a),
          (v[4] = N),
          (v[5] = u))
        : (u = v[5])
      let { data: E, isError: T, refetch: V } = (0, s.I)(u)
      ;(v[6] !== V
        ? ((h = () => {
            let e = () => {
              V()
            }
            return (window.addEventListener("focus", e), () => window.removeEventListener("focus", e))
          }),
          (m = [V]),
          (v[6] = V),
          (v[7] = h),
          (v[8] = m))
        : ((h = v[7]), (m = v[8])),
        (0, n.useEffect)(h, m))
      let P = null != E
      ;(v[9] !== T || v[10] !== P
        ? ((p = () => {
            d.v.info("Dictation setup content rendered", {
              safe: { elapsedMs: Math.round(performance.now()), permissionStateReady: P, isError: T },
            })
          }),
          (f = [T, P]),
          (v[9] = T),
          (v[10] = P),
          (v[11] = p),
          (v[12] = f))
        : ((p = v[11]), (f = v[12])),
        (0, n.useEffect)(p, f))
      let [K, B] = (0, n.useState)(!1),
        [D, R] = (0, n.useState)(!1),
        [z, F] = (0, n.useState)(null)
      v[13] !== K || v[14] !== A || v[15] !== V || v[16] !== _
        ? ((y = async function (e) {
            if (null != _ && !K) {
              ;(B(!0), R(!1), F(null))
              try {
                if (null != e) await _.requestPermission(e)
                else {
                  let e = await _.enable()
                  e.success
                    ? (await Promise.all([
                        A?.invalidateQueryCache({ queryKey: ["vscode", "global-dictation-hotkey-state"] }),
                        A?.invalidateQueryCache({ queryKey: l.p }),
                      ]),
                      window.close())
                    : F(e)
                }
              } catch {
                R(!0)
              }
              ;(await V(), B(!1))
            }
          }),
          (v[13] = K),
          (v[14] = A),
          (v[15] = V),
          (v[16] = _),
          (v[17] = y))
        : (y = v[17])
      let Z = y
      v[18] !== D
        ? ((g = D
            ? (0, i.jsx)(r.A, {
                id: "dictation.setup.error",
                defaultMessage: "Couldn\u2019t complete dictation setup. Try again.",
              })
            : null),
          (v[18] = D),
          (v[19] = g))
        : (g = v[19])
      let q = g
      if (z?.success === !1)
        switch (z.reason) {
          case "permissions-required": {
            let e
            ;(v[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(r.A, {
                  id: "dictation.setup.permissionsRequired",
                  defaultMessage: "Allow all three permissions below, then try again",
                })),
                (v[20] = e))
              : (e = v[20]),
              (q = e))
            break
          }
          case "shortcut-conflict": {
            let e
            ;(v[21] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(r.A, {
                  id: "dictation.setup.shortcutConflict",
                  defaultMessage:
                    "This shortcut is already in use. Choose another shortcut in Settings \u2192 Voice, then return to setup.",
                })),
                (v[21] = e))
              : (e = v[21]),
              (q = e))
            break
          }
          case "shortcut-not-ready": {
            let e
            ;(v[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(r.A, {
                  id: "dictation.setup.shortcutNotReady",
                  defaultMessage:
                    "Your shortcut hasn\u2019t connected yet. Try again, or reopen the app if macOS asks you to.",
                })),
                (v[22] = e))
              : (e = v[22]),
              (q = e))
            break
          }
          case "shortcut-unavailable": {
            let e
            ;(v[23] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, i.jsx)(r.A, {
                  id: "dictation.setup.shortcutUnavailable",
                  defaultMessage:
                    "Couldn\u2019t enable this shortcut. Close other app instances using dictation, or choose another shortcut in Settings \u2192 Voice.",
                })),
                (v[23] = e))
              : (e = v[23]),
              (q = e))
          }
        }
      if (null == _ || E?.supported === !1) {
        let e
        ;(v[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(r.A, {
              id: "dictation.setup.unavailable",
              defaultMessage: "Global dictation isn\u2019t available in this app right now",
            })),
            (v[24] = e))
          : (e = v[24]),
          (q = e))
      } else if (T || E?.inputMonitoring === "unavailable") {
        let e
        ;(v[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(r.A, {
              id: "dictation.setup.readFailed",
              defaultMessage: "Couldn\u2019t check macOS permissions. Try again.",
            })),
            (v[25] = e))
          : (e = v[25]),
          (q = e))
      }
      let I = E ?? void 0
      return (
        v[26] !== Z
          ? ((x = (e) => {
              Z(e)
            }),
            (b = () => {
              Z(null)
            }),
            (v[26] = Z),
            (v[27] = x),
            (v[28] = b))
          : ((x = v[27]), (b = v[28])),
        v[29] !== T || v[30] !== V || v[31] !== E?.inputMonitoring
          ? ((C =
              T || E?.inputMonitoring === "unavailable"
                ? () => {
                    V()
                  }
                : void 0),
            (v[29] = T),
            (v[30] = V),
            (v[31] = E?.inputMonitoring),
            (v[32] = C))
          : (C = v[32]),
        v[33] !== q || v[34] !== K || v[35] !== I || v[36] !== x || v[37] !== b || v[38] !== C
          ? ((j = (0, i.jsx)(w, {
              demoEnabled: !0,
              onClose: k,
              state: I,
              pending: K,
              error: q,
              onRequestPermission: x,
              onFinish: b,
              onRetry: C,
            })),
            (v[33] = q),
            (v[34] = K),
            (v[35] = I),
            (v[36] = x),
            (v[37] = b),
            (v[38] = C),
            (v[39] = j))
          : (j = v[39]),
        j
      )
    }
    function k() {
      return window.close()
    }
  },
  xBek(e, t, a) {
    var i = a("ABep"),
      o = a("QosV"),
      s = a("on57"),
      n = a("vSRq")
    a.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            a,
            r,
            l,
            c = (0, o.c)(8)
          return (
            c[0] !== e ? (({ status: a, ...t } = e), (c[0] = e), (c[1] = t), (c[2] = a)) : ((t = c[1]), (a = c[2])),
            c[3] !== a
              ? ((r = (0, s.A)(
                  n.A.darkTheme,
                  "flex items-center overflow-hidden border shadow-lg shadow-black/20 transition-[width,height,border-radius,background-color] duration-basic [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none motion-reduce:transition-none",
                  "error" === a ? "draggable" : "no-drag",
                  ("initializing" === a || "idle" === a) && [
                    n.A.miniSurface,
                    "h-2 w-10 justify-center rounded-[4px] border-text-secondary/70 px-0",
                  ],
                  "idle" === a &&
                    "group-hover:h-[30px] group-hover:w-[72px] group-hover:rounded-full group-hover:border-border/80 group-data-[state=delayed-open]:h-[30px] group-data-[state=delayed-open]:w-[72px] group-data-[state=delayed-open]:rounded-full group-data-[state=delayed-open]:border-border/80",
                  "initializing" !== a && "idle" !== a && [n.A.expandedSurface, "border-border/80"],
                  ("listening" === a || "transcribing" === a) && "h-[30px] w-[72px] justify-center rounded-full px-2",
                  "error" === a && "h-8 w-fit max-w-[304px] gap-2 rounded-2xl px-2",
                )),
                (c[3] = a),
                (c[4] = r))
              : (r = c[4]),
            c[5] !== t || c[6] !== r
              ? ((l = (0, i.jsx)("section", { ...t, className: r })), (c[5] = t), (c[6] = r), (c[7] = l))
              : (l = c[7]),
            l
          )
        },
      },
    )
  },
}
//# sourceMappingURL=309399.a696fd70cf.js.map
