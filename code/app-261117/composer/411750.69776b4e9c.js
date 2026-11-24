export const __rspack_esm_ids = [411750]
export const __webpack_modules__ = {
  vSRq(e, t) {
    t.A = {
      darkTheme: "darkTheme-gibVsx",
      miniSurface: "miniSurface-co74kh",
      expandedSurface: "expandedSurface-No5JUb",
    }
  },
  hYPy(e, t, i) {
    i.d(t, { S: () => p })
    var a = i("ABep"),
      o = i("QosV"),
      s = i("on57"),
      n = i("zd8w"),
      r = i("Wf1j"),
      l = i("oyxz"),
      c = i("Sm6l"),
      d = i("bVeK"),
      u = i("RNul"),
      h = i("xBek")
    function p(e) {
      let t,
        i,
        p,
        m,
        f,
        x,
        y,
        g,
        b,
        C,
        j,
        v,
        w,
        S,
        M,
        _,
        A,
        k,
        N,
        V,
        P,
        B,
        T,
        E,
        D,
        R,
        Z,
        F,
        K,
        z,
        q,
        G,
        I,
        H,
        L,
        J,
        $,
        W,
        O,
        U,
        Q = (0, o.c)(121),
        { shortcut: X, microphoneGranted: Y, disabled: ee, onRequestMicrophone: et, session: ei, loadFailed: ea } = e,
        eo = void 0 !== ea && ea,
        es = (0, r.A)(),
        en = (0, n.useRef)(!1),
        er = ei?.transcript
      Q[0] !== eo || Q[1] !== ei?.error
        ? ((t = eo
            ? (0, a.jsx)(l.A, {
                id: "dictation.setup.demo.loadFailed",
                defaultMessage: "Couldn\u2019t load the dictation trial",
              })
            : ei?.error),
          (Q[0] = eo),
          (Q[1] = ei?.error),
          (Q[2] = t))
        : (t = Q[2])
      let el = t,
        ec = ei?.isDictationStarting ?? !1,
        ed = ei?.isDictating ?? !1,
        eu = ei?.isTranscribing ?? !1,
        eh = ei?.isMicrophoneBusy ?? !1,
        ep = eo || (ei?.canRetryDictation ?? !1),
        em = ei?.waveformCanvasRef,
        ef = ec || ed,
        ex = ee || eu || eh || (Y && null == ei)
      Q[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, a.jsx)(l.A, { id: "dictation.setup.demo.try", defaultMessage: "Try it" })), (Q[3] = i))
        : (i = Q[3])
      let ey = i
      Q[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (0, a.jsx)(l.A, { id: "dictation.setup.demo.hold", defaultMessage: "Press and hold to speak" })),
          (Q[4] = p))
        : (p = Q[4])
      let eg = p
      if (null == ei && Y && !eo) {
        let e, t
        ;(Q[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(l.A, { id: "dictation.setup.demo.loading", defaultMessage: "Getting ready" })), (Q[5] = e))
          : (e = Q[5]),
          (ey = e),
          Q[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(l.A, { id: "dictation.setup.demo.loadingGuidance", defaultMessage: "Just a moment" })),
              (Q[6] = t))
            : (t = Q[6]),
          (eg = t))
      } else if (eu) {
        let e, t
        ;(Q[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(l.A, { id: "dictation.setup.demo.finishing", defaultMessage: "Finishing up" })),
            (Q[7] = e))
          : (e = Q[7]),
          (ey = e),
          Q[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(l.A, { id: "dictation.setup.demo.wait", defaultMessage: "Just a moment" })), (Q[8] = t))
            : (t = Q[8]),
          (eg = t))
      } else if (ef) {
        let e, t
        ;(Q[9] !== ec
          ? ((e = ec
              ? (0, a.jsx)(l.A, { id: "dictation.setup.demo.starting", defaultMessage: "Getting ready" })
              : (0, a.jsx)(l.A, { id: "dictation.setup.demo.listening", defaultMessage: "Listening" })),
            (Q[9] = ec),
            (Q[10] = e))
          : (e = Q[10]),
          (ey = e),
          Q[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, a.jsx)(l.A, { id: "dictation.setup.demo.inserted", defaultMessage: "Release to insert" })),
              (Q[11] = t))
            : (t = Q[11]),
          (eg = t))
      } else if (Y) {
        if (eh) {
          let e
          ;(Q[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(l.A, { id: "dictation.setup.demo.busy", defaultMessage: "Microphone in use" })),
              (Q[13] = e))
            : (e = Q[13]),
            (eg = e))
        } else if (er) {
          let e, t
          ;(Q[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(l.A, { id: "dictation.setup.demo.done", defaultMessage: "Just like that" })),
              (Q[14] = e))
            : (e = Q[14]),
            (ey = e),
            Q[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, a.jsx)(l.A, {
                  id: "dictation.setup.demo.again",
                  defaultMessage: "Press and hold to try again",
                })),
                (Q[15] = t))
              : (t = Q[15]),
            (eg = t))
        }
      } else {
        let e
        ;(Q[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(l.A, {
              id: "dictation.setup.demo.allowMicrophone",
              defaultMessage: "Allow your microphone",
            })),
            (Q[12] = e))
          : (e = Q[12]),
          (eg = e))
      }
      let eb = "Fn" === X ? "fn" : X,
        eC = (ef || eu) && "cursorStill-OXg5U6"
      ;(Q[16] !== eC ? ((m = (0, s.A)("cursor-y7MClr", eC)), (Q[16] = eC), (Q[17] = m)) : (m = Q[17]),
        Q[18] !== m
          ? ((f = (0, a.jsx)("span", { className: m, "aria-hidden": "true" })), (Q[18] = m), (Q[19] = f))
          : (f = Q[19]))
      let ej = f
      Q[20] !== Y || Q[21] !== et || Q[22] !== ef || Q[23] !== ei || Q[24] !== ex
        ? ((x = function () {
            return !ex && !ef && (Y ? (ei?.start(), !0) : (et(), !1))
          }),
          (Q[20] = Y),
          (Q[21] = et),
          (Q[22] = ef),
          (Q[23] = ei),
          (Q[24] = ex),
          (Q[25] = x))
        : (x = Q[25])
      let ev = x
      Q[26] !== ei
        ? ((y = function () {
            en.current && ((en.current = !1), ei?.stop())
          }),
          (Q[26] = ei),
          (Q[27] = y))
        : (y = Q[27])
      let ew = y
      Q[28] !== ef || Q[29] !== ei
        ? ((g = () => {
            ;((en.current = !1), ef && ei?.stop())
          }),
          (Q[28] = ef),
          (Q[29] = ei),
          (Q[30] = g))
        : (g = Q[30])
      let eS = (0, n.useEffectEvent)(g)
      Q[31] !== ei ? ((b = () => ei?.abort()), (Q[31] = ei), (Q[32] = b)) : (b = Q[32])
      let eM = (0, n.useEffectEvent)(b)
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
        Q[36] === Symbol.for("react.memo_cache_sentinel") ? ((j = []), (Q[36] = j)) : (j = Q[36]),
        (0, n.useEffect)(C, j),
        Q[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, a.jsxs)("div", {
              className: "lights-bJARJ4",
              "aria-hidden": "true",
              children: [
                (0, a.jsx)("span", { className: "bg-red" }),
                (0, a.jsx)("span", { className: "bg-yellow" }),
                (0, a.jsx)("span", { className: "bg-green" }),
              ],
            })),
            (Q[37] = v))
          : (v = Q[37]),
        Q[38] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, a.jsxs)("div", {
              className: "toolbar-qsuBrI",
              children: [
                v,
                (0, a.jsx)("span", {
                  className: "compose-Ifj_p2",
                  "aria-hidden": "true",
                  children: (0, a.jsx)(d.JSV, {}),
                }),
              ],
            })),
            (Q[38] = w))
          : (w = Q[38]))
      let e_ = !er && ej
      ;(Q[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = (0, a.jsx)(l.A, { id: "dictation.setup.demo.noteTitle", defaultMessage: "Weekend plans" })),
          (Q[39] = S))
        : (S = Q[39]),
        Q[40] !== e_
          ? ((M = (0, a.jsxs)("h2", { className: "noteTitle-eqxrmR", children: [e_, S] })), (Q[40] = e_), (Q[41] = M))
          : (M = Q[41]))
      let eA = er && ej
      ;(Q[42] !== eA || Q[43] !== er
        ? ((_ = (0, a.jsxs)("p", { className: "transcript-lN12GX", "aria-live": "polite", children: [er, eA] })),
          (Q[42] = eA),
          (Q[43] = er),
          (Q[44] = _))
        : (_ = Q[44]),
        Q[45] !== M || Q[46] !== _
          ? ((A = (0, a.jsxs)("div", {
              className: "notes-zB7oh3",
              children: [w, (0, a.jsxs)("div", { className: "paper-KEP2FZ", children: [M, _] })],
            })),
            (Q[45] = M),
            (Q[46] = _),
            (Q[47] = A))
          : (A = Q[47]))
      let ek = (ef || eu) && "barVisible-nC5HlD"
      Q[48] !== ek ? ((k = (0, s.A)("bar-sjG5Tr", ek)), (Q[48] = ek), (Q[49] = k)) : (k = Q[49])
      let eN = eu ? "transcribing" : "listening",
        eV = eu && "hidden"
      return (
        Q[50] !== eV ? ((N = (0, s.A)("h-4 min-w-0 flex-1 text-default", eV)), (Q[50] = eV), (Q[51] = N)) : (N = Q[51]),
        Q[52] !== N || Q[53] !== em
          ? ((V = (0, a.jsx)("canvas", { ref: em, className: N })), (Q[52] = N), (Q[53] = em), (Q[54] = V))
          : (V = Q[54]),
        Q[55] !== eu
          ? ((P = eu && (0, a.jsx)(u.y, { className: "icon-xs text-secondary" })), (Q[55] = eu), (Q[56] = P))
          : (P = Q[56]),
        Q[57] !== eN || Q[58] !== V || Q[59] !== P
          ? ((B = (0, a.jsxs)(h.C, { status: eN, children: [V, P] })),
            (Q[57] = eN),
            (Q[58] = V),
            (Q[59] = P),
            (Q[60] = B))
          : (B = Q[60]),
        Q[61] !== k || Q[62] !== B
          ? ((T = (0, a.jsx)("div", { className: k, "aria-hidden": "true", children: B })),
            (Q[61] = k),
            (Q[62] = B),
            (Q[63] = T))
          : (T = Q[63]),
        Q[64] !== A || Q[65] !== T
          ? ((E = (0, a.jsxs)("div", { className: "scene-UleMFB", children: [A, T] })),
            (Q[64] = A),
            (Q[65] = T),
            (Q[66] = E))
          : (E = Q[66]),
        Q[67] === Symbol.for("react.memo_cache_sentinel")
          ? ((D = (0, s.A)("key-h2Wi5K", "cursor-interaction")), (Q[67] = D))
          : (D = Q[67]),
        Q[68] !== es || Q[69] !== X
          ? ((R = es.formatMessage(
              { id: "dictation.setup.demo.tryKey", defaultMessage: "Hold the {shortcut} button to try dictation" },
              { shortcut: X },
            )),
            (Q[68] = es),
            (Q[69] = X),
            (Q[70] = R))
          : (R = Q[70]),
        Q[71] !== ev
          ? ((Z = (e) => {
              0 === e.button && ev() && ((en.current = !0), e.currentTarget.setPointerCapture(e.pointerId))
            }),
            (Q[71] = ev),
            (Q[72] = Z))
          : (Z = Q[72]),
        Q[73] !== ei
          ? ((F = () => {
              ;((en.current = !1), ei?.abort())
            }),
            (Q[73] = ei),
            (Q[74] = F))
          : (F = Q[74]),
        Q[75] !== ev || Q[76] !== ef || Q[77] !== ei
          ? ((K = (e) => {
              ;("Escape" === e.key && ef && (e.stopPropagation(), (en.current = !1), ei?.abort()),
                ("Space" === e.code || "Enter" === e.code) &&
                  (e.preventDefault(), !e.repeat && ev() && (en.current = !0)))
            }),
            (Q[75] = ev),
            (Q[76] = ef),
            (Q[77] = ei),
            (Q[78] = K))
          : (K = Q[78]),
        Q[79] !== ew
          ? ((z = (e) => {
              ;("Space" === e.code || "Enter" === e.code) && (e.preventDefault(), ew())
            }),
            (Q[79] = ew),
            (Q[80] = z))
          : (z = Q[80]),
        Q[81] !== ev || Q[82] !== ef || Q[83] !== ei
          ? ((q = (e) => {
              0 === e.detail && (ef ? ei?.stop() : ev())
            }),
            (Q[81] = ev),
            (Q[82] = ef),
            (Q[83] = ei),
            (Q[84] = q))
          : (q = Q[84]),
        Q[85] !== X
          ? ((G = "Fn" === X && (0, a.jsx)("span", { className: "globe-t1Rubu", children: (0, a.jsx)(d.ZEl, {}) })),
            (Q[85] = X),
            (Q[86] = G))
          : (G = Q[86]),
        Q[87] !== eb
          ? ((I = (0, a.jsx)("span", { className: "keyLabel-TD6yxz", children: eb })), (Q[87] = eb), (Q[88] = I))
          : (I = Q[88]),
        Q[89] !== ef ||
        Q[90] !== ew ||
        Q[91] !== R ||
        Q[92] !== Z ||
        Q[93] !== F ||
        Q[94] !== K ||
        Q[95] !== z ||
        Q[96] !== q ||
        Q[97] !== G ||
        Q[98] !== I ||
        Q[99] !== ex
          ? ((H = (0, a.jsxs)("button", {
              className: D,
              type: "button",
              "aria-label": R,
              "aria-describedby": "dictation-demo-guidance",
              "aria-pressed": ef,
              "aria-disabled": ex,
              onPointerDown: Z,
              onPointerUp: ew,
              onPointerCancel: F,
              onLostPointerCapture: ew,
              onBlur: ew,
              onKeyDown: K,
              onKeyUp: z,
              onClick: q,
              children: [G, I],
            })),
            (Q[89] = ef),
            (Q[90] = ew),
            (Q[91] = R),
            (Q[92] = Z),
            (Q[93] = F),
            (Q[94] = K),
            (Q[95] = z),
            (Q[96] = q),
            (Q[97] = G),
            (Q[98] = I),
            (Q[99] = ex),
            (Q[100] = H))
          : (H = Q[100]),
        Q[101] !== ey ? ((L = (0, a.jsx)("strong", { children: ey })), (Q[101] = ey), (Q[102] = L)) : (L = Q[102]),
        Q[103] !== eg ? ((J = (0, a.jsx)("span", { children: eg })), (Q[103] = eg), (Q[104] = J)) : (J = Q[104]),
        Q[105] !== L || Q[106] !== J
          ? (($ = (0, a.jsxs)("div", {
              id: "dictation-demo-guidance",
              className: "guidance-mKLCxe",
              role: "status",
              children: [L, J],
            })),
            (Q[105] = L),
            (Q[106] = J),
            (Q[107] = $))
          : ($ = Q[107]),
        Q[108] !== H || Q[109] !== $
          ? ((W = (0, a.jsxs)("div", { className: "controls-C1XZQX", children: [H, $] })),
            (Q[108] = H),
            (Q[109] = $),
            (Q[110] = W))
          : (W = Q[110]),
        Q[111] !== ep || Q[112] !== el || Q[113] !== eu || Q[114] !== eo || Q[115] !== ei
          ? ((O =
              null != el &&
              (0, a.jsxs)("div", {
                className: "mt-4 flex flex-col items-center gap-2 text-center text-sm text-secondary",
                role: "alert",
                children: [
                  (0, a.jsx)("p", { children: el }),
                  ep &&
                    (0, a.jsx)(c.$, {
                      size: "compact",
                      disabled: eu,
                      onClick: () => {
                        eo ? window.location.reload() : ei?.retry()
                      },
                      children: (0, a.jsx)(l.A, { id: "dictation.setup.demo.retry", defaultMessage: "Try again" }),
                    }),
                ],
              })),
            (Q[111] = ep),
            (Q[112] = el),
            (Q[113] = eu),
            (Q[114] = eo),
            (Q[115] = ei),
            (Q[116] = O))
          : (O = Q[116]),
        Q[117] !== E || Q[118] !== W || Q[119] !== O
          ? ((U = (0, a.jsxs)("div", { className: "w-full", children: [E, W, O] })),
            (Q[117] = E),
            (Q[118] = W),
            (Q[119] = O),
            (Q[120] = U))
          : (U = Q[120]),
        U
      )
    }
  },
  sEbS(e, t, i) {
    i.d(t, { GlobalDictationSetupWindow: () => _ })
    var a = i("ABep"),
      o = i("QosV"),
      s = i("T0Rc"),
      n = i("zd8w"),
      r = i("oyxz"),
      l = i("Kfzx"),
      c = i("GaA7"),
      d = i("WFY2"),
      u = i("ESTr")
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
    var f = i("Sm6l"),
      x = i("HOLv"),
      y = i("bVeK"),
      g = i("Bbed"),
      b = i("jDEJ"),
      C = i("h5BB"),
      j = i("hYPy")
    let v = (0, g._)(
      async () =>
        (
          await Promise.all([
            i.e(364086),
            i.e(534886),
            i.e(124660),
            i.e(393233),
            i.e(985132),
            i.e(177121),
            i.e(206676),
            i.e(322496),
            i.e(53010),
            i.e(364313),
            i.e(911644),
            i.e(31844),
            i.e(23568),
            i.e(924269),
            i.e(955269),
          ]).then(i.bind(i, "bKwR"))
        ).loadSetupDictationDemo(),
      { fallback: (e) => e.fallback, errorFallback: (e) => (0, a.jsx)(j.S, { ...e, loadFailed: !0 }) },
    )
    function w(e) {
      let t,
        i,
        s,
        n,
        l,
        c,
        d,
        u,
        y,
        g,
        C,
        j,
        v,
        w,
        _,
        A,
        k,
        N,
        V,
        P,
        B,
        T,
        E,
        D,
        R,
        Z,
        F,
        K = (0, o.c)(69),
        {
          onClose: z,
          state: q,
          pending: G,
          error: I,
          onRequestPermission: H,
          onFinish: L,
          onRetry: J,
          demoEnabled: $,
        } = e,
        W = void 0 !== $ && $,
        O = q?.microphone === "granted",
        U = q?.inputMonitoring === "granted",
        Q = q?.accessibility === !0,
        X = O && U && Q,
        Y = G || null == q || !q.supported
      ;(K[0] !== z
        ? ((t = (e) => {
            "Escape" === e.key && z()
          }),
          (K[0] = z),
          (K[1] = t))
        : (t = K[1]),
        K[2] !== X || K[3] !== Y || K[4] !== L
          ? ((i = (e) => {
              ;(e.preventDefault(), X && !Y && L())
            }),
            (K[2] = X),
            (K[3] = Y),
            (K[4] = L),
            (K[5] = i))
          : (i = K[5]),
        K[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, a.jsx)("div", { className: "titlebar-LGwwMg", "aria-hidden": !0 })), (K[6] = s))
          : (s = K[6]),
        K[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)("header", {
              className: "text-center",
              children: (0, a.jsx)("h1", {
                id: "dictation-setup-title",
                className: "title-Sb5LS_",
                children: (0, a.jsx)(r.A, { id: "dictation.setupPrototype.title", defaultMessage: "Dictate anywhere" }),
              }),
            })),
            (K[7] = n))
          : (n = K[7]),
        K[8] === Symbol.for("react.memo_cache_sentinel") ? ((l = (0, b.X)("Fn", !0)), (K[8] = l)) : (l = K[8]),
        K[9] !== H ? ((c = () => H("microphone")), (K[9] = H), (K[10] = c)) : (c = K[10]),
        K[11] !== W || K[12] !== Y || K[13] !== O || K[14] !== c
          ? ((d = (0, a.jsx)(M, {
              shortcut: l,
              microphoneGranted: O,
              disabled: Y,
              onRequestMicrophone: c,
              enabled: W,
            })),
            (K[11] = W),
            (K[12] = Y),
            (K[13] = O),
            (K[14] = c),
            (K[15] = d))
          : (d = K[15]),
        K[16] !== q
          ? ((u =
              q?.holdHotkey != null &&
              "Fn" !== q.holdHotkey &&
              (0, a.jsx)("p", {
                className: "text-center text-sm text-secondary",
                children: (0, a.jsx)(r.A, {
                  id: "dictation.setup.trialShortcut",
                  defaultMessage: "Use Fn for this demo. Your shortcut in other apps is {shortcut}.",
                  values: { shortcut: (0, b.X)(q.holdHotkey, !0) },
                }),
              })),
            (K[16] = q),
            (K[17] = u))
          : (u = K[17]),
        K[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)("div", { className: "microphoneIcon-KWKKWi", children: (0, a.jsx)(x.I, { asset: m }) })),
            (K[18] = y))
          : (y = K[18]))
      let ee = !O,
        et = q?.microphone === "denied" || q?.microphone === "restricted"
      ;(K[19] !== H ? ((g = () => H("microphone")), (K[19] = H), (K[20] = g)) : (g = K[20]),
        K[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, a.jsx)(r.A, { id: "dictation.setupPrototype.microphone", defaultMessage: "Microphone" })),
            (j = (0, a.jsx)(r.A, {
              id: "dictation.setupPrototype.microphoneReason",
              defaultMessage: "Allows ChatGPT to record your voice for dictation",
            })),
            (K[21] = C),
            (K[22] = j))
          : ((C = K[21]), (j = K[22])),
        K[23] !== Y || K[24] !== O || K[25] !== ee || K[26] !== et || K[27] !== g
          ? ((v = (0, a.jsx)(S, {
              icon: y,
              granted: O,
              next: ee,
              disabled: Y,
              openSettings: et,
              onAllow: g,
              label: C,
              description: j,
            })),
            (K[23] = Y),
            (K[24] = O),
            (K[25] = ee),
            (K[26] = et),
            (K[27] = g),
            (K[28] = v))
          : (v = K[28]),
        K[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, a.jsx)("div", { className: "keyboardIcon-NCzyIo", children: (0, a.jsx)(x.I, { asset: p }) })),
            (K[29] = w))
          : (w = K[29]))
      let ei = O && !U,
        ea = Y || q?.inputMonitoring === "unavailable"
      ;(K[30] !== H ? ((_ = () => H("inputMonitoring")), (K[30] = H), (K[31] = _)) : (_ = K[31]),
        K[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, a.jsx)(r.A, {
              id: "dictation.setupPrototype.inputMonitoring",
              defaultMessage: "Input Monitoring",
            })),
            (k = (0, a.jsx)(r.A, {
              id: "dictation.setupPrototype.inputMonitoringReason",
              defaultMessage: "Allows ChatGPT to recognize your shortcut across apps",
            })),
            (K[32] = A),
            (K[33] = k))
          : ((A = K[32]), (k = K[33])),
        K[34] !== U || K[35] !== ei || K[36] !== ea || K[37] !== _
          ? ((N = (0, a.jsx)(S, { icon: w, granted: U, next: ei, disabled: ea, onAllow: _, label: A, description: k })),
            (K[34] = U),
            (K[35] = ei),
            (K[36] = ea),
            (K[37] = _),
            (K[38] = N))
          : (N = K[38]),
        K[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = (0, a.jsx)("div", {
              className: "accessibilityIcon-Wd3va1",
              children: (0, a.jsx)(x.I, { asset: h }),
            })),
            (K[39] = V))
          : (V = K[39]))
      let eo = O && U && !Q
      return (
        K[40] !== H ? ((P = () => H("accessibility")), (K[40] = H), (K[41] = P)) : (P = K[41]),
        K[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((B = (0, a.jsx)(r.A, { id: "dictation.setupPrototype.accessibility", defaultMessage: "Accessibility" })),
            (T = (0, a.jsx)(r.A, {
              id: "dictation.setupPrototype.accessibilityReason",
              defaultMessage: "Allows ChatGPT to insert dictated text into the app you\u2019re using",
            })),
            (K[42] = B),
            (K[43] = T))
          : ((B = K[42]), (T = K[43])),
        K[44] !== Q || K[45] !== X || K[46] !== Y || K[47] !== G || K[48] !== eo || K[49] !== P
          ? ((E = (0, a.jsx)(S, {
              icon: V,
              granted: Q,
              next: eo,
              disabled: Y,
              onAllow: P,
              finish: X,
              checkingShortcut: G,
              label: B,
              description: T,
            })),
            (K[44] = Q),
            (K[45] = X),
            (K[46] = Y),
            (K[47] = G),
            (K[48] = eo),
            (K[49] = P),
            (K[50] = E))
          : (E = K[50]),
        K[51] !== v || K[52] !== N || K[53] !== E
          ? ((D = (0, a.jsxs)("div", { className: "permissions-K2sJae", children: [v, N, E] })),
            (K[51] = v),
            (K[52] = N),
            (K[53] = E),
            (K[54] = D))
          : (D = K[54]),
        K[55] !== I || K[56] !== J || K[57] !== G || K[58] !== q
          ? ((R =
              (null != I || null == q) &&
              (0, a.jsxs)("div", {
                className: "feedback-mppBdJ",
                "aria-live": "polite",
                children: [
                  null != I &&
                    (0, a.jsxs)("div", {
                      className: "flex flex-col items-center gap-3",
                      role: "alert",
                      children: [
                        I,
                        null != J &&
                          (0, a.jsx)(f.$, {
                            size: "compact",
                            onClick: J,
                            disabled: G,
                            children: (0, a.jsx)(r.A, { id: "dictation.setup.retry", defaultMessage: "Try again" }),
                          }),
                      ],
                    }),
                  null == I &&
                    null == q &&
                    (0, a.jsx)("p", {
                      children: (0, a.jsx)(r.A, {
                        id: "dictation.setup.checking",
                        defaultMessage: "Checking macOS permissions\u2026",
                      }),
                    }),
                ],
              })),
            (K[55] = I),
            (K[56] = J),
            (K[57] = G),
            (K[58] = q),
            (K[59] = R))
          : (R = K[59]),
        K[60] !== D || K[61] !== R || K[62] !== d || K[63] !== u
          ? ((Z = (0, a.jsxs)("div", { className: "content-thxZ0M", children: [n, d, u, D, R] })),
            (K[60] = D),
            (K[61] = R),
            (K[62] = d),
            (K[63] = u),
            (K[64] = Z))
          : (Z = K[64]),
        K[65] !== t || K[66] !== i || K[67] !== Z
          ? ((F = (0, a.jsxs)("form", {
              className: "window-StprZk",
              "aria-labelledby": "dictation-setup-title",
              onKeyDown: t,
              onSubmit: i,
              children: [s, Z],
            })),
            (K[65] = t),
            (K[66] = i),
            (K[67] = Z),
            (K[68] = F))
          : (F = K[68]),
        F
      )
    }
    function S(e) {
      let t,
        i,
        s,
        l,
        c = (0, o.c)(31),
        {
          icon: d,
          granted: u,
          next: h,
          label: p,
          description: m,
          onAllow: x,
          finish: g,
          checkingShortcut: b,
          disabled: j,
          openSettings: v,
        } = e,
        w = void 0 !== b && b,
        S = void 0 !== v && v,
        M = (0, n.useId)()
      if (void 0 !== g && g) {
        let e, i
        ;(c[0] !== w
          ? ((e = w
              ? (0, a.jsx)(r.A, { id: "dictation.setup.checkingShortcut", defaultMessage: "Checking shortcut\u2026" })
              : (0, a.jsx)(r.A, { id: "dictation.setupPrototype.done", defaultMessage: "Done" })),
            (c[0] = w),
            (c[1] = e))
          : (e = c[1]),
          c[2] !== j || c[3] !== e
            ? ((i = (0, a.jsx)(f.$, {
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
              (c[4] = i))
            : (i = c[4]),
          (t = i))
      } else if (u) {
        let e
        ;(c[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsxs)("span", {
              className: "text-green",
              role: "status",
              children: [
                (0, a.jsx)("span", {
                  className: "sr-only",
                  children: (0, a.jsx)(r.A, {
                    id: "dictation.setupPrototype.permissionAllowed",
                    defaultMessage: "Done",
                  }),
                }),
                (0, a.jsx)(y.jFD, {}),
              ],
            })),
            (c[5] = e))
          : (e = c[5]),
          (t = e))
      } else {
        let e,
          i,
          o,
          s = h && !j ? "next" : "pending",
          n = `${M}-action ${M}-label`,
          l = `${M}-description`,
          d = h ? "primary" : "secondary",
          u = `${M}-action`
        ;(c[6] !== S
          ? ((e = S
              ? (0, a.jsx)(r.A, { id: "dictation.setup.openSettings", defaultMessage: "Open Settings" })
              : (0, a.jsx)(r.A, { id: "dictation.setupPrototype.allow", defaultMessage: "Allow" })),
            (c[6] = S),
            (c[7] = e))
          : (e = c[7]),
          c[8] !== u || c[9] !== e
            ? ((i = (0, a.jsx)("span", { id: u, children: e })), (c[8] = u), (c[9] = e), (c[10] = i))
            : (i = c[10]),
          c[11] !== j ||
          c[12] !== h ||
          c[13] !== x ||
          c[14] !== i ||
          c[15] !== s ||
          c[16] !== n ||
          c[17] !== l ||
          c[18] !== d
            ? ((o = (0, a.jsx)(
                f.$,
                {
                  "aria-labelledby": n,
                  "aria-describedby": l,
                  autoFocus: h,
                  color: d,
                  radius: "full",
                  size: "compact",
                  disabled: j,
                  onClick: x,
                  children: i,
                },
                s,
              )),
              (c[11] = j),
              (c[12] = h),
              (c[13] = x),
              (c[14] = i),
              (c[15] = s),
              (c[16] = n),
              (c[17] = l),
              (c[18] = d),
              (c[19] = o))
            : (o = c[19]),
          (t = o))
      }
      let _ = `${M}-label`
      c[20] !== p || c[21] !== _
        ? ((i = (0, a.jsx)("span", { id: _, className: "font-semibold whitespace-normal", children: p })),
          (c[20] = p),
          (c[21] = _),
          (c[22] = i))
        : (i = c[22])
      let A = `${M}-description`
      return (
        c[23] !== m || c[24] !== A
          ? ((s = (0, a.jsx)("span", { id: A, className: "whitespace-normal", children: m })),
            (c[23] = m),
            (c[24] = A),
            (c[25] = s))
          : (s = c[25]),
        c[26] !== t || c[27] !== d || c[28] !== i || c[29] !== s
          ? ((l = (0, a.jsx)(C.B, { variant: "system", icon: d, title: i, subtitle: s, actions: t })),
            (c[26] = t),
            (c[27] = d),
            (c[28] = i),
            (c[29] = s),
            (c[30] = l))
          : (l = c[30]),
        l
      )
    }
    function M(e) {
      let t,
        i,
        s,
        n,
        r = (0, o.c)(9)
      ;(r[0] !== e ? (({ enabled: t, ...i } = e), (r[0] = e), (r[1] = t), (r[2] = i)) : ((t = r[1]), (i = r[2])),
        r[3] !== i ? ((s = (0, a.jsx)(j.S, { ...i })), (r[3] = i), (r[4] = s)) : (s = r[4]))
      let l = s
      return (
        r[5] !== t || r[6] !== l || r[7] !== i
          ? ((n = t ? (0, a.jsx)(v, { ...i, fallback: l }) : l), (r[5] = t), (r[6] = l), (r[7] = i), (r[8] = n))
          : (n = r[8]),
        n
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
        x,
        y,
        g,
        b,
        C,
        j,
        v = (0, o.c)(40),
        { service: S, queryCache: M } = e,
        _ = S ?? c.appServices?.globalDictationSetup,
        k = M ?? c.appServices?.queryCache
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
      let { data: V, isError: P, refetch: B } = (0, s.I)(u)
      ;(v[6] !== B
        ? ((h = () => {
            let e = () => {
              B()
            }
            return (window.addEventListener("focus", e), () => window.removeEventListener("focus", e))
          }),
          (p = [B]),
          (v[6] = B),
          (v[7] = h),
          (v[8] = p))
        : ((h = v[7]), (p = v[8])),
        (0, n.useEffect)(h, p))
      let T = null != V
      ;(v[9] !== P || v[10] !== T
        ? ((m = () => {
            d.v.info("Dictation setup content rendered", {
              safe: { elapsedMs: Math.round(performance.now()), permissionStateReady: T, isError: P },
            })
          }),
          (f = [P, T]),
          (v[9] = P),
          (v[10] = T),
          (v[11] = m),
          (v[12] = f))
        : ((m = v[11]), (f = v[12])),
        (0, n.useEffect)(m, f))
      let [E, D] = (0, n.useState)(!1),
        [R, Z] = (0, n.useState)(!1),
        [F, K] = (0, n.useState)(null)
      v[13] !== E || v[14] !== k || v[15] !== B || v[16] !== _
        ? ((x = async function (e) {
            if (null != _ && !E) {
              ;(D(!0), Z(!1), K(null))
              try {
                if (null != e) await _.requestPermission(e)
                else {
                  let e = await _.enable()
                  e.success
                    ? (await Promise.all([
                        k?.invalidateQueryCache({ queryKey: ["vscode", "global-dictation-hotkey-state"] }),
                        k?.invalidateQueryCache({ queryKey: l.p }),
                      ]),
                      window.close())
                    : K(e)
                }
              } catch {
                Z(!0)
              }
              ;(await B(), D(!1))
            }
          }),
          (v[13] = E),
          (v[14] = k),
          (v[15] = B),
          (v[16] = _),
          (v[17] = x))
        : (x = v[17])
      let z = x
      v[18] !== R
        ? ((y = R
            ? (0, a.jsx)(r.A, {
                id: "dictation.setup.error",
                defaultMessage: "Couldn\u2019t complete dictation setup. Try again.",
              })
            : null),
          (v[18] = R),
          (v[19] = y))
        : (y = v[19])
      let q = y
      if (F?.success === !1)
        switch (F.reason) {
          case "permissions-required": {
            let e
            ;(v[20] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, a.jsx)(r.A, {
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
              ? ((e = (0, a.jsx)(r.A, {
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
              ? ((e = (0, a.jsx)(r.A, {
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
              ? ((e = (0, a.jsx)(r.A, {
                  id: "dictation.setup.shortcutUnavailable",
                  defaultMessage:
                    "Couldn\u2019t enable this shortcut. Close other app instances using dictation, or choose another shortcut in Settings \u2192 Voice.",
                })),
                (v[23] = e))
              : (e = v[23]),
              (q = e))
          }
        }
      if (null == _ || V?.supported === !1) {
        let e
        ;(v[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(r.A, {
              id: "dictation.setup.unavailable",
              defaultMessage: "Global dictation isn\u2019t available in this app right now",
            })),
            (v[24] = e))
          : (e = v[24]),
          (q = e))
      } else if (P || V?.inputMonitoring === "unavailable") {
        let e
        ;(v[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(r.A, {
              id: "dictation.setup.readFailed",
              defaultMessage: "Couldn\u2019t check macOS permissions. Try again.",
            })),
            (v[25] = e))
          : (e = v[25]),
          (q = e))
      }
      let G = V ?? void 0
      return (
        v[26] !== z
          ? ((g = (e) => {
              z(e)
            }),
            (b = () => {
              z(null)
            }),
            (v[26] = z),
            (v[27] = g),
            (v[28] = b))
          : ((g = v[27]), (b = v[28])),
        v[29] !== P || v[30] !== B || v[31] !== V?.inputMonitoring
          ? ((C =
              P || V?.inputMonitoring === "unavailable"
                ? () => {
                    B()
                  }
                : void 0),
            (v[29] = P),
            (v[30] = B),
            (v[31] = V?.inputMonitoring),
            (v[32] = C))
          : (C = v[32]),
        v[33] !== q || v[34] !== E || v[35] !== G || v[36] !== g || v[37] !== b || v[38] !== C
          ? ((j = (0, a.jsx)(w, {
              demoEnabled: !0,
              onClose: A,
              state: G,
              pending: E,
              error: q,
              onRequestPermission: g,
              onFinish: b,
              onRetry: C,
            })),
            (v[33] = q),
            (v[34] = E),
            (v[35] = G),
            (v[36] = g),
            (v[37] = b),
            (v[38] = C),
            (v[39] = j))
          : (j = v[39]),
        j
      )
    }
    function A() {
      return window.close()
    }
  },
  xBek(e, t, i) {
    var a = i("ABep"),
      o = i("QosV"),
      s = i("on57"),
      n = i("vSRq")
    i.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            i,
            r,
            l,
            c = (0, o.c)(8)
          return (
            c[0] !== e ? (({ status: i, ...t } = e), (c[0] = e), (c[1] = t), (c[2] = i)) : ((t = c[1]), (i = c[2])),
            c[3] !== i
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
                (c[3] = i),
                (c[4] = r))
              : (r = c[4]),
            c[5] !== t || c[6] !== r
              ? ((l = (0, a.jsx)("section", { ...t, className: r })), (c[5] = t), (c[6] = r), (c[7] = l))
              : (l = c[7]),
            l
          )
        },
      },
    )
  },
}
//# sourceMappingURL=411750.69776b4e9c.js.map
