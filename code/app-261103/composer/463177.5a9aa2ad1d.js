export const __rspack_esm_ids = [463177]
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
      s = i("QosV"),
      n = i("on57"),
      a = i("zd8w"),
      r = i("Wf1j"),
      l = i("oyxz"),
      c = i("ygO2"),
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
        x,
        b,
        y,
        C,
        w,
        j,
        v,
        S,
        M,
        _,
        A,
        k,
        N,
        V,
        P,
        E,
        T,
        B,
        R,
        D,
        F,
        Z,
        O,
        I,
        z,
        q,
        K,
        G,
        L,
        H,
        J,
        $,
        U,
        W,
        X = (0, s.c)(121),
        { shortcut: Q, microphoneGranted: Y, disabled: ee, onRequestMicrophone: et, session: ei, loadFailed: eo } = e,
        es = void 0 !== eo && eo,
        en = (0, r.A)(),
        ea = (0, a.useRef)(!1),
        er = ei?.transcript
      X[0] !== es || X[1] !== ei?.error
        ? ((t = es
            ? (0, o.jsx)(l.A, {
                id: "dictation.setup.demo.loadFailed",
                defaultMessage: "Couldn’t load the dictation trial",
                description: "Error when the recording trial cannot initialize; permission setup is still usable",
              })
            : ei?.error),
          (X[0] = es),
          (X[1] = ei?.error),
          (X[2] = t))
        : (t = X[2])
      let el = t,
        ec = ei?.isDictationStarting ?? !1,
        ed = ei?.isDictating ?? !1,
        eu = ei?.isTranscribing ?? !1,
        eh = ei?.isMicrophoneBusy ?? !1,
        ep = es || (ei?.canRetryDictation ?? !1),
        em = ei?.waveformCanvasRef,
        ef = ec || ed,
        eg = ee || eu || eh || (Y && null == ei)
      X[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = (0, o.jsx)(l.A, {
            id: "dictation.setup.demo.try",
            defaultMessage: "Try it",
            description: "Invitation to try dictation in the Notes demo",
          })),
          (X[3] = i))
        : (i = X[3])
      let ex = i
      X[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = (0, o.jsx)(l.A, {
            id: "dictation.setup.demo.hold",
            defaultMessage: "Press and hold to speak",
            description: "Instruction to press and hold the shortcut key or on-screen key while speaking",
          })),
          (X[4] = p))
        : (p = X[4])
      let eb = p
      if (null == ei && Y && !es) {
        let e, t
        ;(X[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(l.A, {
              id: "dictation.setup.demo.loading",
              defaultMessage: "Getting ready",
              description: "Status while the recording trial loads independently of permission setup",
            })),
            (X[5] = e))
          : (e = X[5]),
          (ex = e),
          X[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, o.jsx)(l.A, {
                id: "dictation.setup.demo.loadingGuidance",
                defaultMessage: "Just a moment",
                description: "Caption while the recording trial initializes",
              })),
              (X[6] = t))
            : (t = X[6]),
          (eb = t))
      } else if (eu) {
        let e, t
        ;(X[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(l.A, {
              id: "dictation.setup.demo.finishing",
              defaultMessage: "Finishing up",
              description: "Status while transcribing the recorded trial",
            })),
            (X[7] = e))
          : (e = X[7]),
          (ex = e),
          X[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, o.jsx)(l.A, {
                id: "dictation.setup.demo.wait",
                defaultMessage: "Just a moment",
                description: "Caption while the dictation trial is transcribing",
              })),
              (X[8] = t))
            : (t = X[8]),
          (eb = t))
      } else if (ef) {
        let e, t
        ;(X[9] !== ec
          ? ((e = ec
              ? (0, o.jsx)(l.A, {
                  id: "dictation.setup.demo.starting",
                  defaultMessage: "Getting ready",
                  description: "Status while the microphone starts",
                })
              : (0, o.jsx)(l.A, {
                  id: "dictation.setup.demo.listening",
                  defaultMessage: "Listening",
                  description: "Status while recording real speech in the onboarding trial",
                })),
            (X[9] = ec),
            (X[10] = e))
          : (e = X[10]),
          (ex = e),
          X[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, o.jsx)(l.A, {
                id: "dictation.setup.demo.inserted",
                defaultMessage: "Release to insert",
                description: "Caption when releasing the shortcut inserts the transcript",
              })),
              (X[11] = t))
            : (t = X[11]),
          (eb = t))
      } else if (Y) {
        if (eh) {
          let e
          ;(X[13] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(l.A, {
                id: "dictation.setup.demo.busy",
                defaultMessage: "Microphone in use",
                description: "Another dictation session currently owns the microphone",
              })),
              (X[13] = e))
            : (e = X[13]),
            (eb = e))
        } else if (er) {
          let e, t
          ;(X[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, o.jsx)(l.A, {
                id: "dictation.setup.demo.done",
                defaultMessage: "Just like that",
                description: "Success caption after the user's words appear in Notes",
              })),
              (X[14] = e))
            : (e = X[14]),
            (ex = e),
            X[15] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, o.jsx)(l.A, {
                  id: "dictation.setup.demo.again",
                  defaultMessage: "Press and hold to try again",
                  description: "Instruction to repeat the dictation trial",
                })),
                (X[15] = t))
              : (t = X[15]),
            (eb = t))
        }
      } else {
        let e
        ;(X[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(l.A, {
              id: "dictation.setup.demo.allowMicrophone",
              defaultMessage: "Allow your microphone",
              description: "Instruction to grant microphone access before the dictation trial",
            })),
            (X[12] = e))
          : (e = X[12]),
          (eb = e))
      }
      let ey = "Fn" === Q ? "fn" : Q,
        eC = (ef || eu) && "cursorStill-OXg5U6"
      ;(X[16] !== eC ? ((m = (0, n.A)("cursor-y7MClr", eC)), (X[16] = eC), (X[17] = m)) : (m = X[17]),
        X[18] !== m
          ? ((f = (0, o.jsx)("span", { className: m, "aria-hidden": "true" })), (X[18] = m), (X[19] = f))
          : (f = X[19]))
      let ew = f
      X[20] !== Y || X[21] !== et || X[22] !== ef || X[23] !== ei || X[24] !== eg
        ? ((g = function () {
            return !eg && !ef && (Y ? (ei?.start(), !0) : (et(), !1))
          }),
          (X[20] = Y),
          (X[21] = et),
          (X[22] = ef),
          (X[23] = ei),
          (X[24] = eg),
          (X[25] = g))
        : (g = X[25])
      let ej = g
      X[26] !== ei
        ? ((x = function () {
            ea.current && ((ea.current = !1), ei?.stop())
          }),
          (X[26] = ei),
          (X[27] = x))
        : (x = X[27])
      let ev = x
      X[28] !== ef || X[29] !== ei
        ? ((b = () => {
            ;((ea.current = !1), ef && ei?.stop())
          }),
          (X[28] = ef),
          (X[29] = ei),
          (X[30] = b))
        : (b = X[30])
      let eS = (0, a.useEffectEvent)(b)
      X[31] !== ei ? ((y = () => ei?.abort()), (X[31] = ei), (X[32] = y)) : (y = X[32])
      let eM = (0, a.useEffectEvent)(y)
      ;(X[33] !== eM || X[34] !== eS
        ? ((C = () => (
            window.addEventListener("blur", eS),
            () => {
              ;(window.removeEventListener("blur", eS), eM())
            }
          )),
          (X[33] = eM),
          (X[34] = eS),
          (X[35] = C))
        : (C = X[35]),
        X[36] === Symbol.for("react.memo_cache_sentinel") ? ((w = []), (X[36] = w)) : (w = X[36]),
        (0, a.useEffect)(C, w),
        X[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((j = (0, o.jsxs)("div", {
              className: "lights-bJARJ4",
              "aria-hidden": "true",
              children: [
                (0, o.jsx)("span", { className: "bg-red" }),
                (0, o.jsx)("span", { className: "bg-yellow" }),
                (0, o.jsx)("span", { className: "bg-green" }),
              ],
            })),
            (X[37] = j))
          : (j = X[37]),
        X[38] === Symbol.for("react.memo_cache_sentinel")
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
            (X[38] = v))
          : (v = X[38]))
      let e_ = !er && ew
      ;(X[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((S = (0, o.jsx)(l.A, {
            id: "dictation.setup.demo.noteTitle",
            defaultMessage: "Weekend plans",
            description: "Example note title in a dictation onboarding illustration",
          })),
          (X[39] = S))
        : (S = X[39]),
        X[40] !== e_
          ? ((M = (0, o.jsxs)("h2", { className: "noteTitle-eqxrmR", children: [e_, S] })), (X[40] = e_), (X[41] = M))
          : (M = X[41]))
      let eA = er && ew
      ;(X[42] !== eA || X[43] !== er
        ? ((_ = (0, o.jsxs)("p", { className: "transcript-lN12GX", "aria-live": "polite", children: [er, eA] })),
          (X[42] = eA),
          (X[43] = er),
          (X[44] = _))
        : (_ = X[44]),
        X[45] !== M || X[46] !== _
          ? ((A = (0, o.jsxs)("div", {
              className: "notes-zB7oh3",
              children: [v, (0, o.jsxs)("div", { className: "paper-KEP2FZ", children: [M, _] })],
            })),
            (X[45] = M),
            (X[46] = _),
            (X[47] = A))
          : (A = X[47]))
      let ek = (ef || eu) && "barVisible-nC5HlD"
      X[48] !== ek ? ((k = (0, n.A)("bar-sjG5Tr", ek)), (X[48] = ek), (X[49] = k)) : (k = X[49])
      let eN = eu ? "transcribing" : "listening",
        eV = eu && "hidden"
      return (
        X[50] !== eV ? ((N = (0, n.A)("h-4 min-w-0 flex-1 text-default", eV)), (X[50] = eV), (X[51] = N)) : (N = X[51]),
        X[52] !== N || X[53] !== em
          ? ((V = (0, o.jsx)("canvas", { ref: em, className: N })), (X[52] = N), (X[53] = em), (X[54] = V))
          : (V = X[54]),
        X[55] !== eu
          ? ((P = eu && (0, o.jsx)(u.y, { className: "icon-xs text-secondary" })), (X[55] = eu), (X[56] = P))
          : (P = X[56]),
        X[57] !== eN || X[58] !== V || X[59] !== P
          ? ((E = (0, o.jsxs)(h.C, { status: eN, children: [V, P] })),
            (X[57] = eN),
            (X[58] = V),
            (X[59] = P),
            (X[60] = E))
          : (E = X[60]),
        X[61] !== k || X[62] !== E
          ? ((T = (0, o.jsx)("div", { className: k, "aria-hidden": "true", children: E })),
            (X[61] = k),
            (X[62] = E),
            (X[63] = T))
          : (T = X[63]),
        X[64] !== A || X[65] !== T
          ? ((B = (0, o.jsxs)("div", { className: "scene-UleMFB", children: [A, T] })),
            (X[64] = A),
            (X[65] = T),
            (X[66] = B))
          : (B = X[66]),
        X[67] === Symbol.for("react.memo_cache_sentinel")
          ? ((R = (0, n.A)("key-h2Wi5K", "cursor-interaction")), (X[67] = R))
          : (R = X[67]),
        X[68] !== en || X[69] !== Q
          ? ((D = en.formatMessage(
              {
                id: "dictation.setup.demo.tryKey",
                defaultMessage: "Hold the {shortcut} button to try dictation",
                description: "Accessible label for the on-screen button that records real speech while held",
              },
              { shortcut: Q },
            )),
            (X[68] = en),
            (X[69] = Q),
            (X[70] = D))
          : (D = X[70]),
        X[71] !== ej
          ? ((F = (e) => {
              0 === e.button && ej() && ((ea.current = !0), e.currentTarget.setPointerCapture(e.pointerId))
            }),
            (X[71] = ej),
            (X[72] = F))
          : (F = X[72]),
        X[73] !== ei
          ? ((Z = () => {
              ;((ea.current = !1), ei?.abort())
            }),
            (X[73] = ei),
            (X[74] = Z))
          : (Z = X[74]),
        X[75] !== ej || X[76] !== ef || X[77] !== ei
          ? ((O = (e) => {
              ;("Escape" === e.key && ef && (e.stopPropagation(), (ea.current = !1), ei?.abort()),
                ("Space" === e.code || "Enter" === e.code) &&
                  (e.preventDefault(), !e.repeat && ej() && (ea.current = !0)))
            }),
            (X[75] = ej),
            (X[76] = ef),
            (X[77] = ei),
            (X[78] = O))
          : (O = X[78]),
        X[79] !== ev
          ? ((I = (e) => {
              ;("Space" === e.code || "Enter" === e.code) && (e.preventDefault(), ev())
            }),
            (X[79] = ev),
            (X[80] = I))
          : (I = X[80]),
        X[81] !== ej || X[82] !== ef || X[83] !== ei
          ? ((z = (e) => {
              0 === e.detail && (ef ? ei?.stop() : ej())
            }),
            (X[81] = ej),
            (X[82] = ef),
            (X[83] = ei),
            (X[84] = z))
          : (z = X[84]),
        X[85] !== Q
          ? ((q = "Fn" === Q && (0, o.jsx)("span", { className: "globe-t1Rubu", children: (0, o.jsx)(d.ZEl, {}) })),
            (X[85] = Q),
            (X[86] = q))
          : (q = X[86]),
        X[87] !== ey
          ? ((K = (0, o.jsx)("span", { className: "keyLabel-TD6yxz", children: ey })), (X[87] = ey), (X[88] = K))
          : (K = X[88]),
        X[89] !== ef ||
        X[90] !== ev ||
        X[91] !== D ||
        X[92] !== F ||
        X[93] !== Z ||
        X[94] !== O ||
        X[95] !== I ||
        X[96] !== z ||
        X[97] !== q ||
        X[98] !== K ||
        X[99] !== eg
          ? ((G = (0, o.jsxs)("button", {
              className: R,
              type: "button",
              "aria-label": D,
              "aria-describedby": "dictation-demo-guidance",
              "aria-pressed": ef,
              "aria-disabled": eg,
              onPointerDown: F,
              onPointerUp: ev,
              onPointerCancel: Z,
              onLostPointerCapture: ev,
              onBlur: ev,
              onKeyDown: O,
              onKeyUp: I,
              onClick: z,
              children: [q, K],
            })),
            (X[89] = ef),
            (X[90] = ev),
            (X[91] = D),
            (X[92] = F),
            (X[93] = Z),
            (X[94] = O),
            (X[95] = I),
            (X[96] = z),
            (X[97] = q),
            (X[98] = K),
            (X[99] = eg),
            (X[100] = G))
          : (G = X[100]),
        X[101] !== ex ? ((L = (0, o.jsx)("strong", { children: ex })), (X[101] = ex), (X[102] = L)) : (L = X[102]),
        X[103] !== eb ? ((H = (0, o.jsx)("span", { children: eb })), (X[103] = eb), (X[104] = H)) : (H = X[104]),
        X[105] !== L || X[106] !== H
          ? ((J = (0, o.jsxs)("div", {
              id: "dictation-demo-guidance",
              className: "guidance-mKLCxe",
              role: "status",
              children: [L, H],
            })),
            (X[105] = L),
            (X[106] = H),
            (X[107] = J))
          : (J = X[107]),
        X[108] !== G || X[109] !== J
          ? (($ = (0, o.jsxs)("div", { className: "controls-C1XZQX", children: [G, J] })),
            (X[108] = G),
            (X[109] = J),
            (X[110] = $))
          : ($ = X[110]),
        X[111] !== ep || X[112] !== el || X[113] !== eu || X[114] !== es || X[115] !== ei
          ? ((U =
              null != el &&
              (0, o.jsxs)("div", {
                className: "mt-4 flex flex-col items-center gap-2 text-center text-sm text-secondary",
                role: "alert",
                children: [
                  (0, o.jsx)("p", { children: el }),
                  ep &&
                    (0, o.jsx)(c.$, {
                      size: "compact",
                      disabled: eu,
                      onClick: () => {
                        es ? window.location.reload() : ei?.retry()
                      },
                      children: (0, o.jsx)(l.A, {
                        id: "dictation.setup.demo.retry",
                        defaultMessage: "Try again",
                        description: "Retries transcription of the same recorded audio",
                      }),
                    }),
                ],
              })),
            (X[111] = ep),
            (X[112] = el),
            (X[113] = eu),
            (X[114] = es),
            (X[115] = ei),
            (X[116] = U))
          : (U = X[116]),
        X[117] !== B || X[118] !== $ || X[119] !== U
          ? ((W = (0, o.jsxs)("div", { className: "w-full", children: [B, $, U] })),
            (X[117] = B),
            (X[118] = $),
            (X[119] = U),
            (X[120] = W))
          : (W = X[120]),
        W
      )
    }
  },
  rwdX(e, t, i) {
    i.d(t, { GlobalDictationSetupWindow: () => _ })
    var o = i("ABep"),
      s = i("QosV"),
      n = i("T0Rc"),
      a = i("zd8w"),
      r = i("oyxz"),
      l = i("Kfzx"),
      c = i("GaA7"),
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
      x = i("GO7r"),
      b = i("Bbed"),
      y = i("jDEJ"),
      C = i("h5BB"),
      w = i("hYPy")
    let j = (0, b._)(
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
    function v(e) {
      let t,
        i,
        n,
        a,
        l,
        c,
        d,
        u,
        x,
        b,
        C,
        w,
        j,
        v,
        _,
        A,
        k,
        N,
        V,
        P,
        E,
        T,
        B,
        R,
        D,
        F,
        Z,
        O = (0, s.c)(69),
        {
          onClose: I,
          state: z,
          pending: q,
          error: K,
          onRequestPermission: G,
          onFinish: L,
          onRetry: H,
          demoEnabled: J,
        } = e,
        $ = void 0 !== J && J,
        U = z?.microphone === "granted",
        W = z?.inputMonitoring === "granted",
        X = z?.accessibility === !0,
        Q = U && W && X,
        Y = q || null == z || !z.supported
      ;(O[0] !== I
        ? ((t = (e) => {
            "Escape" === e.key && I()
          }),
          (O[0] = I),
          (O[1] = t))
        : (t = O[1]),
        O[2] !== Q || O[3] !== Y || O[4] !== L
          ? ((i = (e) => {
              ;(e.preventDefault(), Q && !Y && L())
            }),
            (O[2] = Q),
            (O[3] = Y),
            (O[4] = L),
            (O[5] = i))
          : (i = O[5]),
        O[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, o.jsx)("div", { className: "titlebar-LGwwMg", "aria-hidden": !0 })), (O[6] = n))
          : (n = O[6]),
        O[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, o.jsx)("header", {
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
            (O[7] = a))
          : (a = O[7]),
        O[8] === Symbol.for("react.memo_cache_sentinel") ? ((l = (0, y.X)("Fn", !0)), (O[8] = l)) : (l = O[8]),
        O[9] !== G ? ((c = () => G("microphone")), (O[9] = G), (O[10] = c)) : (c = O[10]),
        O[11] !== $ || O[12] !== Y || O[13] !== U || O[14] !== c
          ? ((d = (0, o.jsx)(M, {
              shortcut: l,
              microphoneGranted: U,
              disabled: Y,
              onRequestMicrophone: c,
              enabled: $,
            })),
            (O[11] = $),
            (O[12] = Y),
            (O[13] = U),
            (O[14] = c),
            (O[15] = d))
          : (d = O[15]),
        O[16] !== z
          ? ((u =
              z?.holdHotkey != null &&
              "Fn" !== z.holdHotkey &&
              (0, o.jsx)("p", {
                className: "text-center text-sm text-secondary",
                children: (0, o.jsx)(r.A, {
                  id: "dictation.setup.trialShortcut",
                  defaultMessage: "Use Fn for this demo. Your shortcut in other apps is {shortcut}.",
                  description:
                    "Explains that the setup trial uses Fn while preserving the user's existing global dictation shortcut",
                  values: { shortcut: (0, y.X)(z.holdHotkey, !0) },
                }),
              })),
            (O[16] = z),
            (O[17] = u))
          : (u = O[17]),
        O[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, o.jsx)("div", { className: "microphoneIcon-KWKKWi", children: (0, o.jsx)(g.I, { asset: m }) })),
            (O[18] = x))
          : (x = O[18]))
      let ee = !U,
        et = z?.microphone === "denied" || z?.microphone === "restricted"
      ;(O[19] !== G ? ((b = () => G("microphone")), (O[19] = G), (O[20] = b)) : (b = O[20]),
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
        O[23] !== Y || O[24] !== U || O[25] !== ee || O[26] !== et || O[27] !== b
          ? ((j = (0, o.jsx)(S, {
              icon: x,
              granted: U,
              next: ee,
              disabled: Y,
              openSettings: et,
              onAllow: b,
              label: C,
              description: w,
            })),
            (O[23] = Y),
            (O[24] = U),
            (O[25] = ee),
            (O[26] = et),
            (O[27] = b),
            (O[28] = j))
          : (j = O[28]),
        O[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, o.jsx)("div", { className: "keyboardIcon-NCzyIo", children: (0, o.jsx)(g.I, { asset: p }) })),
            (O[29] = v))
          : (v = O[29]))
      let ei = U && !W,
        eo = Y || z?.inputMonitoring === "unavailable"
      ;(O[30] !== G ? ((_ = () => G("inputMonitoring")), (O[30] = G), (O[31] = _)) : (_ = O[31]),
        O[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = (0, o.jsx)(r.A, {
              id: "dictation.setupPrototype.inputMonitoring",
              defaultMessage: "Input Monitoring",
              description: "Name of the macOS permission used to detect a global dictation shortcut",
            })),
            (k = (0, o.jsx)(r.A, {
              id: "dictation.setupPrototype.inputMonitoringReason",
              defaultMessage: "Allows ChatGPT to recognize your shortcut across apps",
              description: "Explains why global dictation requests Input Monitoring permission",
            })),
            (O[32] = A),
            (O[33] = k))
          : ((A = O[32]), (k = O[33])),
        O[34] !== W || O[35] !== ei || O[36] !== eo || O[37] !== _
          ? ((N = (0, o.jsx)(S, { icon: v, granted: W, next: ei, disabled: eo, onAllow: _, label: A, description: k })),
            (O[34] = W),
            (O[35] = ei),
            (O[36] = eo),
            (O[37] = _),
            (O[38] = N))
          : (N = O[38]),
        O[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((V = (0, o.jsx)("div", {
              className: "accessibilityIcon-Wd3va1",
              children: (0, o.jsx)(g.I, { asset: h }),
            })),
            (O[39] = V))
          : (V = O[39]))
      let es = U && W && !X
      return (
        O[40] !== G ? ((P = () => G("accessibility")), (O[40] = G), (O[41] = P)) : (P = O[41]),
        O[42] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, o.jsx)(r.A, {
              id: "dictation.setupPrototype.accessibility",
              defaultMessage: "Accessibility",
              description: "Name of the macOS permission used to insert dictated text into another app",
            })),
            (T = (0, o.jsx)(r.A, {
              id: "dictation.setupPrototype.accessibilityReason",
              defaultMessage: "Allows ChatGPT to insert dictated text into the app you’re using",
              description: "Explains why global dictation requests Accessibility permission",
            })),
            (O[42] = E),
            (O[43] = T))
          : ((E = O[42]), (T = O[43])),
        O[44] !== X || O[45] !== Q || O[46] !== Y || O[47] !== q || O[48] !== es || O[49] !== P
          ? ((B = (0, o.jsx)(S, {
              icon: V,
              granted: X,
              next: es,
              disabled: Y,
              onAllow: P,
              finish: Q,
              checkingShortcut: q,
              label: E,
              description: T,
            })),
            (O[44] = X),
            (O[45] = Q),
            (O[46] = Y),
            (O[47] = q),
            (O[48] = es),
            (O[49] = P),
            (O[50] = B))
          : (B = O[50]),
        O[51] !== j || O[52] !== N || O[53] !== B
          ? ((R = (0, o.jsxs)("div", { className: "permissions-K2sJae", children: [j, N, B] })),
            (O[51] = j),
            (O[52] = N),
            (O[53] = B),
            (O[54] = R))
          : (R = O[54]),
        O[55] !== K || O[56] !== H || O[57] !== q || O[58] !== z
          ? ((D =
              (null != K || null == z) &&
              (0, o.jsxs)("div", {
                className: "feedback-mppBdJ",
                "aria-live": "polite",
                children: [
                  null != K &&
                    (0, o.jsxs)("div", {
                      className: "flex flex-col items-center gap-3",
                      role: "alert",
                      children: [
                        K,
                        null != H &&
                          (0, o.jsx)(f.$, {
                            size: "compact",
                            onClick: H,
                            disabled: q,
                            children: (0, o.jsx)(r.A, {
                              id: "dictation.setup.retry",
                              defaultMessage: "Try again",
                              description: "Retries reading macOS dictation permission status",
                            }),
                          }),
                      ],
                    }),
                  null == K &&
                    null == z &&
                    (0, o.jsx)("p", {
                      children: (0, o.jsx)(r.A, {
                        id: "dictation.setup.checking",
                        defaultMessage: "Checking macOS permissions…",
                        description: "Loading status while checking dictation permission grants",
                      }),
                    }),
                ],
              })),
            (O[55] = K),
            (O[56] = H),
            (O[57] = q),
            (O[58] = z),
            (O[59] = D))
          : (D = O[59]),
        O[60] !== R || O[61] !== D || O[62] !== d || O[63] !== u
          ? ((F = (0, o.jsxs)("div", { className: "content-thxZ0M", children: [a, d, u, R, D] })),
            (O[60] = R),
            (O[61] = D),
            (O[62] = d),
            (O[63] = u),
            (O[64] = F))
          : (F = O[64]),
        O[65] !== t || O[66] !== i || O[67] !== F
          ? ((Z = (0, o.jsxs)("form", {
              className: "window-StprZk",
              "aria-labelledby": "dictation-setup-title",
              onKeyDown: t,
              onSubmit: i,
              children: [n, F],
            })),
            (O[65] = t),
            (O[66] = i),
            (O[67] = F),
            (O[68] = Z))
          : (Z = O[68]),
        Z
      )
    }
    function S(e) {
      let t,
        i,
        n,
        l,
        c = (0, s.c)(31),
        {
          icon: d,
          granted: u,
          next: h,
          label: p,
          description: m,
          onAllow: g,
          finish: b,
          checkingShortcut: y,
          disabled: w,
          openSettings: j,
        } = e,
        v = void 0 !== y && y,
        S = void 0 !== j && j,
        M = (0, a.useId)()
      if (void 0 !== b && b) {
        let e, i
        ;(c[0] !== v
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
            (c[0] = v),
            (c[1] = e))
          : (e = c[1]),
          c[2] !== w || c[3] !== e
            ? ((i = (0, o.jsx)(f.$, {
                autoFocus: !0,
                color: "primary",
                radius: "full",
                size: "compact",
                type: "submit",
                disabled: w,
                children: e,
              })),
              (c[2] = w),
              (c[3] = e),
              (c[4] = i))
            : (i = c[4]),
          (t = i))
      } else if (u) {
        let e
        ;(c[5] === Symbol.for("react.memo_cache_sentinel")
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
                (0, o.jsx)(x.jFD, {}),
              ],
            })),
            (c[5] = e))
          : (e = c[5]),
          (t = e))
      } else {
        let e,
          i,
          s,
          n = h && !w ? "next" : "pending",
          a = `${M}-action ${M}-label`,
          l = `${M}-description`,
          d = h ? "primary" : "secondary",
          u = `${M}-action`
        ;(c[6] !== S
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
            (c[6] = S),
            (c[7] = e))
          : (e = c[7]),
          c[8] !== u || c[9] !== e
            ? ((i = (0, o.jsx)("span", { id: u, children: e })), (c[8] = u), (c[9] = e), (c[10] = i))
            : (i = c[10]),
          c[11] !== w ||
          c[12] !== h ||
          c[13] !== g ||
          c[14] !== i ||
          c[15] !== n ||
          c[16] !== a ||
          c[17] !== l ||
          c[18] !== d
            ? ((s = (0, o.jsx)(
                f.$,
                {
                  "aria-labelledby": a,
                  "aria-describedby": l,
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
              (c[11] = w),
              (c[12] = h),
              (c[13] = g),
              (c[14] = i),
              (c[15] = n),
              (c[16] = a),
              (c[17] = l),
              (c[18] = d),
              (c[19] = s))
            : (s = c[19]),
          (t = s))
      }
      let _ = `${M}-label`
      c[20] !== p || c[21] !== _
        ? ((i = (0, o.jsx)("span", { id: _, className: "font-semibold whitespace-normal", children: p })),
          (c[20] = p),
          (c[21] = _),
          (c[22] = i))
        : (i = c[22])
      let A = `${M}-description`
      return (
        c[23] !== m || c[24] !== A
          ? ((n = (0, o.jsx)("span", { id: A, className: "whitespace-normal", children: m })),
            (c[23] = m),
            (c[24] = A),
            (c[25] = n))
          : (n = c[25]),
        c[26] !== t || c[27] !== d || c[28] !== i || c[29] !== n
          ? ((l = (0, o.jsx)(C.B, { variant: "system", icon: d, title: i, subtitle: n, actions: t })),
            (c[26] = t),
            (c[27] = d),
            (c[28] = i),
            (c[29] = n),
            (c[30] = l))
          : (l = c[30]),
        l
      )
    }
    function M(e) {
      let t,
        i,
        n,
        a,
        r = (0, s.c)(9)
      ;(r[0] !== e ? (({ enabled: t, ...i } = e), (r[0] = e), (r[1] = t), (r[2] = i)) : ((t = r[1]), (i = r[2])),
        r[3] !== i ? ((n = (0, o.jsx)(w.S, { ...i })), (r[3] = i), (r[4] = n)) : (n = r[4]))
      let l = n
      return (
        r[5] !== t || r[6] !== l || r[7] !== i
          ? ((a = t ? (0, o.jsx)(j, { ...i, fallback: l }) : l), (r[5] = t), (r[6] = l), (r[7] = i), (r[8] = a))
          : (a = r[8]),
        a
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
        x,
        b,
        y,
        C,
        w,
        j = (0, s.c)(40),
        { service: S, coordination: M } = e,
        _ = S ?? c.appServices?.globalDictationSetup,
        k = M ?? c.appServices?.clientCoordination
      ;(j[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = ["global-dictation-setup"]), (j[0] = t)) : (t = j[0]),
        j[1] !== _ ? ((i = async () => (await _?.getState()) ?? null), (j[1] = _), (j[2] = i)) : (i = j[2]))
      let N = null != _
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
      let { data: V, isError: P, refetch: E } = (0, n.I)(u)
      ;(j[6] !== E
        ? ((h = () => {
            let e = () => {
              E()
            }
            return (window.addEventListener("focus", e), () => window.removeEventListener("focus", e))
          }),
          (p = [E]),
          (j[6] = E),
          (j[7] = h),
          (j[8] = p))
        : ((h = j[7]), (p = j[8])),
        (0, a.useEffect)(h, p))
      let T = null != V
      ;(j[9] !== P || j[10] !== T
        ? ((m = () => {
            d.v.info("Dictation setup content rendered", {
              safe: { elapsedMs: Math.round(performance.now()), permissionStateReady: T, isError: P },
            })
          }),
          (f = [P, T]),
          (j[9] = P),
          (j[10] = T),
          (j[11] = m),
          (j[12] = f))
        : ((m = j[11]), (f = j[12])),
        (0, a.useEffect)(m, f))
      let [B, R] = (0, a.useState)(!1),
        [D, F] = (0, a.useState)(!1),
        [Z, O] = (0, a.useState)(null)
      j[13] !== k || j[14] !== B || j[15] !== E || j[16] !== _
        ? ((g = async function (e) {
            if (null != _ && !B) {
              ;(R(!0), F(!1), O(null))
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
                    : O(e)
                }
              } catch {
                F(!0)
              }
              ;(await E(), R(!1))
            }
          }),
          (j[13] = k),
          (j[14] = B),
          (j[15] = E),
          (j[16] = _),
          (j[17] = g))
        : (g = j[17])
      let I = g
      j[18] !== D
        ? ((x = D
            ? (0, o.jsx)(r.A, {
                id: "dictation.setup.error",
                defaultMessage: "Couldn’t complete dictation setup. Try again.",
                description: "Error when requesting dictation permissions or enabling the shortcut fails",
              })
            : null),
          (j[18] = D),
          (j[19] = x))
        : (x = j[19])
      let z = x
      if (Z?.success === !1)
        switch (Z.reason) {
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
              (z = e))
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
              (z = e))
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
              (z = e))
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
              (z = e))
          }
        }
      if (null == _ || V?.supported === !1) {
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
          (z = e))
      } else if (P || V?.inputMonitoring === "unavailable") {
        let e
        ;(j[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, o.jsx)(r.A, {
              id: "dictation.setup.readFailed",
              defaultMessage: "Couldn’t check macOS permissions. Try again.",
              description: "A native permission check failed; setup does not assume permission is granted",
            })),
            (j[25] = e))
          : (e = j[25]),
          (z = e))
      }
      let q = V ?? void 0
      return (
        j[26] !== I
          ? ((b = (e) => {
              I(e)
            }),
            (y = () => {
              I(null)
            }),
            (j[26] = I),
            (j[27] = b),
            (j[28] = y))
          : ((b = j[27]), (y = j[28])),
        j[29] !== P || j[30] !== E || j[31] !== V?.inputMonitoring
          ? ((C =
              P || V?.inputMonitoring === "unavailable"
                ? () => {
                    E()
                  }
                : void 0),
            (j[29] = P),
            (j[30] = E),
            (j[31] = V?.inputMonitoring),
            (j[32] = C))
          : (C = j[32]),
        j[33] !== z || j[34] !== B || j[35] !== q || j[36] !== b || j[37] !== y || j[38] !== C
          ? ((w = (0, o.jsx)(v, {
              demoEnabled: !0,
              onClose: A,
              state: q,
              pending: B,
              error: z,
              onRequestPermission: b,
              onFinish: y,
              onRetry: C,
            })),
            (j[33] = z),
            (j[34] = B),
            (j[35] = q),
            (j[36] = b),
            (j[37] = y),
            (j[38] = C),
            (j[39] = w))
          : (w = j[39]),
        w
      )
    }
    function A() {
      return window.close()
    }
  },
  xBek(e, t, i) {
    var o = i("ABep"),
      s = i("QosV"),
      n = i("on57"),
      a = i("U44o")
    i.d(
      t,
      {},
      {
        C: function (e) {
          let t,
            i,
            r,
            l,
            c = (0, s.c)(8)
          return (
            c[0] !== e ? (({ status: i, ...t } = e), (c[0] = e), (c[1] = t), (c[2] = i)) : ((t = c[1]), (i = c[2])),
            c[3] !== i
              ? ((r = (0, n.A)(
                  a.A.darkTheme,
                  "flex items-center overflow-hidden border shadow-lg shadow-black/20 transition-[width,height,border-radius,background-color] duration-basic [transition-timing-function:cubic-bezier(0.77,0,0.175,1)] forced-colors:bg-[Canvas] forced-colors:backdrop-blur-none motion-reduce:transition-none",
                  "error" === i ? "draggable" : "no-drag",
                  ("initializing" === i || "idle" === i) && [
                    a.A.miniSurface,
                    "h-2 w-10 justify-center rounded-[4px] border-text-secondary/70 px-0",
                  ],
                  "idle" === i &&
                    "group-hover:h-[30px] group-hover:w-[72px] group-hover:rounded-full group-hover:border-border/80 group-data-[state=delayed-open]:h-[30px] group-data-[state=delayed-open]:w-[72px] group-data-[state=delayed-open]:rounded-full group-data-[state=delayed-open]:border-border/80",
                  "initializing" !== i && "idle" !== i && [a.A.expandedSurface, "border-border/80"],
                  ("listening" === i || "transcribing" === i) && "h-[30px] w-[72px] justify-center rounded-full px-2",
                  "error" === i && "h-8 w-fit max-w-[304px] gap-2 rounded-2xl px-2",
                )),
                (c[3] = i),
                (c[4] = r))
              : (r = c[4]),
            c[5] !== t || c[6] !== r
              ? ((l = (0, o.jsx)("section", { ...t, className: r })), (c[5] = t), (c[6] = r), (c[7] = l))
              : (l = c[7]),
            l
          )
        },
      },
    )
  },
}
//# sourceMappingURL=463177.5a9aa2ad1d.js.map
