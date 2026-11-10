export const __rspack_esm_ids = [681877]
export const __webpack_modules__ = {
  nBD9(e) {
    e.exports = {}
  },
  Qhgx(e, t, n) {
    var r = n("ABep")
    ;(n("zd8w"),
      (t.A = (e) =>
        (0, r.jsx)("svg", {
          width: 716,
          height: 716,
          viewBox: "149 149 418 418",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, r.jsx)("path", {
            d: "M508.749 317.399C516.777 287.314 508.991 253.884 485.389 230.282C461.788 206.681 428.36 198.895 398.273 206.923C376.231 184.928 343.39 174.956 311.148 183.596C278.906 192.234 255.45 217.292 247.36 247.361C217.291 255.451 192.233 278.91 183.595 311.149C174.957 343.391 184.927 376.232 206.924 398.274C198.896 428.359 206.683 461.789 230.284 485.391C253.885 508.992 287.313 516.779 317.401 508.75C339.442 530.745 372.286 540.717 404.525 532.079C436.767 523.441 460.223 498.384 468.313 468.315C498.383 460.224 523.44 436.766 532.078 404.526C540.716 372.285 530.747 339.443 508.749 317.402V317.399ZM470.899 244.776C486.892 260.77 493.488 282.601 490.687 303.412L415.577 260.046C412.411 258.218 408.509 258.218 405.345 260.046L317.401 310.82V277.526C317.401 275.191 318.652 273.005 320.676 271.837L387.644 233.174C414.178 218.353 448.346 222.223 470.901 244.776H470.899ZM357.837 311.144L398.275 334.491V381.185L357.837 404.532L317.398 381.185V334.491L357.837 311.144ZM264.776 269.693C265.207 239.305 285.644 211.649 316.453 203.393C338.3 197.54 360.505 202.744 377.127 215.573L302.014 258.937C298.848 260.764 296.898 264.144 296.898 267.798V369.346L268.065 352.699C266.043 351.531 264.776 349.353 264.776 347.017V269.691V269.693ZM203.391 316.454C209.244 294.608 224.854 277.978 244.276 269.999V356.73C244.276 360.384 246.226 363.763 249.392 365.591L337.337 416.365L308.503 433.013C306.481 434.181 303.961 434.188 301.939 433.02L234.971 394.357C208.868 378.789 195.138 347.261 203.391 316.454ZM244.775 470.9C228.781 454.906 222.186 433.075 224.986 412.264L300.096 455.63C303.263 457.457 307.164 457.457 310.328 455.63L398.273 404.856V438.149C398.273 440.485 397.022 442.671 394.997 443.839L328.029 482.502C301.495 497.322 267.327 493.452 244.772 470.9H244.775ZM450.897 445.982C450.466 476.371 430.029 504.027 399.22 512.283C377.373 518.136 355.168 512.932 338.547 500.102L413.659 456.738C416.826 454.911 418.775 451.532 418.775 447.877V346.329L447.609 362.977C449.631 364.145 450.897 366.323 450.897 368.659V445.985V445.982ZM512.282 399.221C506.429 421.068 490.819 437.697 471.397 445.676V358.946C471.397 355.292 469.448 351.912 466.281 350.085L378.336 299.311L407.17 282.663C409.192 281.495 411.712 281.487 413.734 282.655L480.702 321.318C506.805 336.887 520.536 368.415 512.282 399.221Z",
            fill: "currentColor",
          }),
        })))
  },
  dxKw(e, t, n) {
    var r = n("QosV"),
      i = n("Wf1j"),
      o = n("GaA7"),
      l = n("q77y"),
      a = n("YgCO")
    n.d(
      t,
      {},
      {
        _: function () {
          let e,
            t = (0, r.c)(2),
            n = (0, i.A)()
          return (
            t[0] !== n
              ? ((e = async (e) => {
                  let { accept: t, allowMultiple: r, imagesOnly: i, kind: s, pickerTitle: c } = void 0 === e ? {} : e,
                    d = o.appServices.fileAttachments
                  if (d?.pickFiles == null) throw Error("File picking is not available in this host.")
                  return (0, l.P)(
                    d.pickFiles({
                      kind: s,
                      acceptedFileExtensions: (0, a.U)(t),
                      allowMultiple: r,
                      imagesOnly: i,
                      pickerTitle:
                        c ??
                        ("directory" === s
                          ? n.formatMessage({
                              id: "composer.filePicker.selectFolder",
                              defaultMessage: "Select folder",
                              description: "Title for the directory picker dialog",
                            })
                          : n.formatMessage({
                              id: "composer.filePicker.selectFiles",
                              defaultMessage: "Select files",
                              description: "Title for the multi-file picker dialog",
                            })),
                    }),
                  )
                }),
                (t[0] = n),
                (t[1] = e))
              : (e = t[1]),
            e
          )
        },
      },
    )
  },
  nyOD(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      o = n("fX79"),
      l = n("Wf1j")
    let a = (0, n("Qgfj").YK)({
      confirming_payment: {
        id: "businessWorkspaceLoading.confirmingPayment",
        defaultMessage: "Confirming your payment",
        description:
          "Short, reassuring single-line headline shown to a new Business workspace owner on the full-screen onboarding loading screen while their checkout payment is being confirmed. Plain text with no markup.",
      },
      preparing_workspace: {
        id: "businessWorkspaceLoading.preparingWorkspace",
        defaultMessage: "Preparing your workspace",
        description:
          "Short, reassuring single-line headline shown to a new Business workspace owner on the full-screen onboarding loading screen while their purchased workspace is being created. Plain text with no markup.",
      },
      setting_up_access: {
        id: "businessWorkspaceLoading.settingUpAccess",
        defaultMessage: "Setting up your workspace access",
        description:
          "Short, reassuring single-line headline shown to a new Business workspace owner on the full-screen onboarding loading screen while their membership and workspace access are being prepared. Plain text with no markup.",
      },
      opening_workspace: {
        id: "businessWorkspaceLoading.openingWorkspace",
        defaultMessage: "Opening your workspace",
        description:
          "Short, reassuring single-line headline shown to a new Business workspace owner on the full-screen onboarding loading screen while ChatGPT switches into their newly prepared workspace. Plain text with no markup.",
      },
      description: {
        id: "businessWorkspaceLoading.waitDescription",
        defaultMessage: "This may take some time.",
        description:
          "Short, reassuring supporting sentence shown to a new Business workspace owner beneath a progress headline on the full-screen onboarding loading screen. It sets the expectation that preparing their paid workspace can take a little time. Plain text with no markup.",
      },
    })
    n.d(
      t,
      {},
      {
        u: function (e) {
          let t,
            n,
            s,
            c = (0, i.c)(8),
            { stage: d } = e,
            u = void 0 === d ? "preparing_workspace" : d,
            g = (0, l.A)()
          c[0] !== g || c[1] !== u ? ((t = g.formatMessage(a[u])), (c[0] = g), (c[1] = u), (c[2] = t)) : (t = c[2])
          let p = t
          return (
            c[3] !== g ? ((n = g.formatMessage(a.description)), (c[3] = g), (c[4] = n)) : (n = c[4]),
            c[5] !== p || c[6] !== n
              ? ((s = (0, r.jsx)(o.ZR, { primaryText: p, secondaryText: n })), (c[5] = p), (c[6] = n), (c[7] = s))
              : (s = c[7]),
            s
          )
        },
      },
    )
  },
  V2xP(e, t, n) {
    ;(n("ABep"), n("QosV"), n("fX79"), n("zd8w"), n("X1mr"), n("nyOD"), n("cX6x"), n("a6Zv"))
    var r = n("ASxG")
    ;(r.object({
      isMatchingLoggedInUser: r.literal(!0),
      referral: r.object({ redemption_action: r.string() }).nullable().optional(),
    }),
      n("zOE4"),
      n("XhHf"),
      n("Qhgx"),
      n("ygO2"),
      n("RNul"),
      n("gLgE"))
  },
  toKG(e, t, n) {
    n.d(
      t,
      {},
      {
        N: function (e) {
          return new URL("/codex/desktop-session", e?.trim() || "https://chatgpt.com").toString()
        },
      },
    )
  },
  J3WM(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      o = n("zTeN"),
      l = n("oyxz"),
      a = n("ygO2"),
      s = n("zOE4"),
      c = n("B81s"),
      d = n("OWtl"),
      u = n("X5YM")
    n.d(
      t,
      {},
      {
        G: function (e) {
          let t,
            n = (0, i.c)(4),
            { hostId: g } = e,
            p = (0, o.gh)(d.u),
            f = (0, o._U)(u.Q, g)
          return (
            n[0] !== g || n[1] !== f.status || n[2] !== p
              ? ((t = (0, r.jsx)("div", {
                  className:
                    "flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description select-none",
                  children:
                    "loading" === f.status
                      ? (0, r.jsx)(s.LoadingPage, { variant: "blossom" })
                      : (0, r.jsxs)(r.Fragment, {
                          children: [
                            (0, r.jsxs)("div", {
                              role: "alert",
                              children: [
                                "unsupported" === f.status
                                  ? (0, r.jsx)(l.A, {
                                      id: "electron.loginMethods.unsupported",
                                      defaultMessage:
                                        "Update Codex on this machine to read its managed sign-in requirements",
                                      description:
                                        "An older app-server cannot expose configured managed login restrictions, so sign-in options are hidden",
                                    })
                                  : null,
                                "ready" === f.status
                                  ? (0, r.jsx)(l.A, {
                                      id: "electron.loginMethods.noneAllowed",
                                      defaultMessage: "Your administrator has disabled all available sign-in methods",
                                      description: "No Desktop login method is permitted by managed requirements",
                                    })
                                  : null,
                                "error" === f.status
                                  ? (0, r.jsx)(l.A, {
                                      id: "electron.loginMethods.error",
                                      defaultMessage: "Unable to load sign-in requirements",
                                      description:
                                        "Managed sign-in requirements could not be read; sign-in options remain hidden until retry succeeds",
                                    })
                                  : null,
                              ],
                            }),
                            (0, r.jsx)(a.$, {
                              color: "secondary",
                              onClick: () => {
                                ;(p.get(c.b9, { hostId: g }).refetch(), p.get(c.I2, g).refetch())
                              },
                              children: (0, r.jsx)(l.A, {
                                id: "electron.loginMethods.retry",
                                defaultMessage: "Retry",
                                description: "Retry reading managed sign-in requirements",
                              }),
                            }),
                          ],
                        }),
                })),
                (n[0] = g),
                (n[1] = f.status),
                (n[2] = p),
                (n[3] = t))
              : (t = n[3]),
            t
          )
        },
      },
    )
  },
  EwXL(e, t, n) {
    n.d(t, { LoginRoute: () => e0 })
    var r = n("ABep"),
      i = n("QosV"),
      o = n("HZfM")
    n("uT0j")
    var l = n("zTeN"),
      a = n("DBCl"),
      s = n("zd8w"),
      c = n("GLfw"),
      d = n("ZHMx")
    ;(n("xwbo"), n("VrP7"))
    var u = n("Wd6S"),
      g = n("EOo5")
    n("fO4g")
    var p = n("ygO2"),
      f = n("Ot7V")
    n("aQvR")
    var h = n("zLIa"),
      m = n("SGsN")
    ;(n("vET2"), n("QiSH"))
    var x = n("OWtl"),
      b = n("kfGJ"),
      y = n("D1V6"),
      w = n("aepO")
    ;(n("kr0v"), n("iKF7"))
    var k = n("iRMi"),
      v = n("irkb"),
      j = n("Wf1j"),
      A = n("oyxz"),
      S = n("ChYf"),
      _ = n("CfsC"),
      C = n("ld84"),
      M = n("RNul"),
      N = n("nlNF"),
      E = n("DIsA"),
      L = n("bdDz"),
      I = n("e3vf"),
      P = n("yGJW"),
      R = n("GaA7"),
      B = n("hZax"),
      z = n("SzCH"),
      T = n("vvrk"),
      G = n("nsuH"),
      O = n("HgLj")
    let K = { up: { x: 0, y: -1 }, down: { x: 0, y: 1 }, left: { x: -1, y: 0 }, right: { x: 1, y: 0 } },
      W = { up: "down", down: "up", left: "right", right: "left" }
    function D(e) {
      let t,
        n,
        o,
        l,
        a,
        c,
        d,
        u,
        g,
        p,
        f,
        h,
        m,
        x,
        b,
        y = (0, i.c)(22),
        { onExit: w, audioContextRef: k } = e,
        v = (0, s.useRef)(null),
        j = (0, s.useRef)(null),
        A = (0, s.useRef)(null)
      y[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (y[0] = t)) : (t = y[0])
      let S = (0, s.useRef)(t)
      y[1] === Symbol.for("react.memo_cache_sentinel") ? ((n = { x: 0, y: 0 }), (y[1] = n)) : (n = y[1])
      let _ = (0, s.useRef)(n),
        C = (0, s.useRef)("right"),
        M = (0, s.useRef)("right")
      y[2] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = { columns: 12, rows: 12, cellSize: 18, width: 216, height: 216 }), (y[2] = o))
        : (o = y[2])
      let N = (0, s.useRef)(o),
        E = (0, s.useRef)(null),
        L = (0, s.useEffectEvent)(w)
      y[3] !== k
        ? ((l = (e, t, n) => {
            if (null == k.current) return
            let r = k.current
            "suspended" === r.state && r.resume()
            let i = t / 1e3,
              o = r.createOscillator(),
              l = r.createGain()
            ;((o.type = n),
              (o.frequency.value = e),
              l.gain.setValueAtTime(1e-4, r.currentTime),
              l.gain.exponentialRampToValueAtTime(0.18, r.currentTime + 0.01),
              l.gain.exponentialRampToValueAtTime(1e-4, r.currentTime + i),
              o.connect(l),
              l.connect(r.destination),
              o.start(),
              o.stop(r.currentTime + i),
              (o.onended = () => {
                ;(o.disconnect(), l.disconnect())
              }))
          }),
          (y[3] = k),
          (y[4] = l))
        : (l = y[4])
      let I = (0, s.useEffectEvent)(l)
      y[5] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = () => {
            null != A.current && (window.clearInterval(A.current), (A.current = null))
          }),
          (y[5] = a))
        : (a = y[5])
      let P = a
      y[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((c = () => {
            if (E.current) return E.current
            let e = v.current
            if (null == e) return { snake: "#ffffff", food: "#f97316" }
            let t = getComputedStyle(e).color || "#ffffff",
              n = getComputedStyle(document.documentElement),
              r = {
                snake: t,
                food:
                  n.getPropertyValue("--color-chart-red").trim() ||
                  n.getPropertyValue("--color-chart-orange").trim() ||
                  "#f97316",
              }
            return ((E.current = r), r)
          }),
          (y[6] = c))
        : (c = y[6])
      let R = c
      y[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = () => {
            if (null == v.current) return null
            let e = Math.max(1, Math.floor(window.devicePixelRatio || 1))
            ;((v.current.width = Math.max(1, Math.floor(N.current.width * e))),
              (v.current.height = Math.max(1, Math.floor(N.current.height * e))),
              (v.current.style.width = `${N.current.width}px`),
              (v.current.style.height = `${N.current.height}px`))
            let t = v.current.getContext("2d")
            return null == t ? null : (t.setTransform(e, 0, 0, e, 0, 0), (t.imageSmoothingEnabled = !1), t)
          }),
          (y[7] = d))
        : (d = y[7])
      let B = d
      y[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((u = (e) => {
            let t = { x: Math.floor(Math.random() * N.current.columns), y: Math.floor(Math.random() * N.current.rows) }
            for (; e.some((e) => e.x === t.x && e.y === t.y);)
              t = { x: Math.floor(Math.random() * N.current.columns), y: Math.floor(Math.random() * N.current.rows) }
            return t
          }),
          (y[8] = u))
        : (u = y[8])
      let z = u
      y[9] === Symbol.for("react.memo_cache_sentinel")
        ? ((g = () => {
            let e = B()
            if (null == e) return
            let t = R()
            for (let n of (e.clearRect(0, 0, N.current.width, N.current.height), (e.fillStyle = t.snake), S.current))
              e.fillRect(n.x * N.current.cellSize, n.y * N.current.cellSize, N.current.cellSize, N.current.cellSize)
            ;((e.fillStyle = t.food),
              e.fillRect(
                _.current.x * N.current.cellSize,
                _.current.y * N.current.cellSize,
                N.current.cellSize,
                N.current.cellSize,
              ))
          }),
          (y[9] = g))
        : (g = y[9])
      let T = g,
        D = (0, s.useEffectEvent)(T)
      y[10] === Symbol.for("react.memo_cache_sentinel")
        ? ((p = () => {
            let e, t
            if (null == j.current) return
            let n = Math.max(1, j.current.clientWidth),
              r = Math.max(1, j.current.clientHeight)
            if (n === N.current.width && r === N.current.height && S.current.length > 0) return
            let i = Math.min(n, r),
              o = i / Math.max(12, Math.floor(i / 18))
            ;((N.current = {
              columns: Math.max(12, Math.floor(n / o)),
              rows: Math.max(12, Math.floor(r / o)),
              cellSize: o,
              width: n,
              height: r,
            }),
              (e = Math.floor(N.current.columns / 2)),
              (S.current = [
                { x: e, y: (t = Math.floor(N.current.rows / 2)) },
                { x: e - 1, y: t },
                { x: e - 2, y: t },
              ]),
              (C.current = "right"),
              (M.current = "right"),
              (_.current = z(S.current)),
              T())
          }),
          (y[10] = p))
        : (p = y[10])
      let U = p,
        F = (0, s.useEffectEvent)(U),
        V = (0, G.wY)(U)
      return (
        y[11] !== D || y[12] !== L || y[13] !== I || y[14] !== F
          ? ((f = () => {
              F()
              let e = (e) => {
                let t = null
                ;("ArrowUp" === e.key || "w" === e.key || "W" === e.key
                  ? (t = "up")
                  : "ArrowDown" === e.key || "s" === e.key || "S" === e.key
                    ? (t = "down")
                    : "ArrowLeft" === e.key || "a" === e.key || "A" === e.key
                      ? (t = "left")
                      : ("ArrowRight" === e.key || "d" === e.key || "D" === e.key) && (t = "right"),
                  null == t || (e.preventDefault(), W[C.current] !== t && (M.current = t)))
              }
              return (
                window.addEventListener("keydown", e),
                (A.current = window.setInterval(() => {
                  let e = S.current,
                    t = e[0],
                    n = M.current,
                    r = K[n],
                    i = { x: t.x + r.x, y: t.y + r.y }
                  if (i.x < 0 || i.y < 0 || i.x >= N.current.columns || i.y >= N.current.rows) {
                    ;(P(), I(140, 220, "sawtooth"), L())
                    return
                  }
                  let o = i.x === _.current.x && i.y === _.current.y
                  if ((o ? e : e.slice(0, -1)).some((e) => e.x === i.x && e.y === i.y)) {
                    ;(P(), I(160, 220, "sawtooth"), L())
                    return
                  }
                  let l = o ? [i, ...e] : [i, ...e.slice(0, -1)]
                  ;((S.current = l), (C.current = n), o && ((_.current = z(l)), I(660, 120, "square")), D())
                }, 120)),
                () => {
                  ;(P(), window.removeEventListener("keydown", e))
                }
              )
            }),
            (y[11] = D),
            (y[12] = L),
            (y[13] = I),
            (y[14] = F),
            (y[15] = f))
          : (f = y[15]),
        y[16] === Symbol.for("react.memo_cache_sentinel") ? ((h = []), (y[16] = h)) : (h = y[16]),
        (0, s.useEffect)(f, h),
        y[17] !== V ? ((m = (0, O.P)(j, V)), (y[17] = V), (y[18] = m)) : (m = y[18]),
        y[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, r.jsx)("canvas", { className: "h-full w-full text-default", ref: v })), (y[19] = x))
          : (x = y[19]),
        y[20] !== m
          ? ((b = (0, r.jsx)("div", { ref: m, className: "h-full w-full", children: x })), (y[20] = m), (y[21] = b))
          : (b = y[21]),
        b
      )
    }
    var U = n("ztxw"),
      F = n("AEu9"),
      V = n("Qgfj"),
      q = n("GO7r"),
      $ = n.p + "assets/c41ab3a754ce.svg"
    function H(e) {
      let t,
        n,
        o,
        l,
        a,
        c,
        d,
        u = (0, i.c)(24),
        {
          children: g,
          value: p,
          onChange: f,
          type: m,
          autoFocus: x,
          required: b,
          placeholder: y,
          help: w,
          action: k,
        } = e,
        v = void 0 === m ? "text" : m,
        j = void 0 !== x && x,
        A = void 0 === b || b,
        S = (0, s.useId)()
      u[0] !== g
        ? ((t = (0, r.jsx)("span", { className: "select-none", children: g })), (u[0] = g), (u[1] = t))
        : (t = u[1])
      let _ = null != w ? S : void 0
      return (
        u[2] !== f ? ((n = (e) => f(e.target.value)), (u[2] = f), (u[3] = n)) : (n = u[3]),
        u[4] !== j || u[5] !== y || u[6] !== A || u[7] !== _ || u[8] !== n || u[9] !== v || u[10] !== p
          ? ((o = (0, r.jsx)(h.pd, {
              "aria-describedby": _,
              autoFocus: j,
              type: v,
              required: A,
              placeholder: y,
              value: p,
              onChange: n,
            })),
            (u[4] = j),
            (u[5] = y),
            (u[6] = A),
            (u[7] = _),
            (u[8] = n),
            (u[9] = v),
            (u[10] = p),
            (u[11] = o))
          : (o = u[11]),
        u[12] !== t || u[13] !== o
          ? ((l = (0, r.jsxs)("label", {
              className: "flex min-w-0 flex-1 flex-col gap-2 text-sm font-normal text-default",
              children: [t, o],
            })),
            (u[12] = t),
            (u[13] = o),
            (u[14] = l))
          : (l = u[14]),
        u[15] !== k || u[16] !== l
          ? ((a = (0, r.jsxs)("div", { className: "flex items-end gap-2", children: [l, k] })),
            (u[15] = k),
            (u[16] = l),
            (u[17] = a))
          : (a = u[17]),
        u[18] !== w || u[19] !== S
          ? ((c =
              null != w
                ? (0, r.jsx)("p", { id: S, className: "text-sm text-secondary select-none", children: w })
                : null),
            (u[18] = w),
            (u[19] = S),
            (u[20] = c))
          : (c = u[20]),
        u[21] !== c || u[22] !== a
          ? ((d = (0, r.jsxs)("div", { className: "flex flex-col gap-2", children: [a, c] })),
            (u[21] = c),
            (u[22] = a),
            (u[23] = d))
          : (d = u[23]),
        d
      )
    }
    var Q = n("aqd9"),
      Z = n("T1PX"),
      X = n.p + "assets/ac32a15625d4.svg",
      Y = n("LIss")
    function J(e) {
      let t,
        n,
        o,
        l,
        a,
        c,
        d,
        u,
        g,
        p,
        f,
        h,
        m,
        x = (0, i.c)(31),
        { source: b, target: y, connector: w } = e,
        k = (0, Z.I)(),
        [v, j] = (0, s.useState)(k),
        [A, S] = (0, s.useState)(k)
      ;(x[0] !== k || x[1] !== v
        ? ((t = () => {
            if (!v || k) return
            let e = setTimeout(() => S(!0), 150)
            return () => clearTimeout(e)
          }),
          (n = [v, k]),
          (x[0] = k),
          (x[1] = v),
          (x[2] = t),
          (x[3] = n))
        : ((t = x[2]), (n = x[3])),
        (0, s.useEffect)(t, n),
        x[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = { position: "relative", width: 170.5, height: 48, flexShrink: 0 }), (x[4] = o))
          : (o = x[4]),
        x[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = {
              position: "absolute",
              left: "50%",
              top: "50%",
              marginLeft: -24,
              marginTop: -24,
              width: 48,
              height: 48,
              display: "grid",
              placeItems: "center",
              zIndex: 2,
            }),
            (x[5] = l))
          : (l = x[5]),
        x[6] !== k ? ((a = !k && { x: 0 }), (x[6] = k), (x[7] = a)) : (a = x[7]),
        x[8] === Symbol.for("react.memo_cache_sentinel") ? ((c = { x: -61.25 }), (x[8] = c)) : (c = x[8]))
      let _ = 0.5 * !k
      return (
        x[9] === Symbol.for("react.memo_cache_sentinel") ? ((d = [0.4, 0, 0.2, 1]), (x[9] = d)) : (d = x[9]),
        x[10] !== _ ? ((u = { duration: _, ease: d }), (x[10] = _), (x[11] = u)) : (u = x[11]),
        x[12] !== v
          ? ((g = (e) => {
              let { x: t } = e
              !v && "number" == typeof t && t <= -60.75 && j(!0)
            }),
            (x[12] = v),
            (x[13] = g))
          : (g = x[13]),
        x[14] !== b || x[15] !== g || x[16] !== a || x[17] !== u
          ? ((p = (0, r.jsx)(Y.P.div, { style: l, initial: a, animate: c, transition: u, onUpdate: g, children: b })),
            (x[14] = b),
            (x[15] = g),
            (x[16] = a),
            (x[17] = u),
            (x[18] = p))
          : (p = x[18]),
        x[19] !== k || x[20] !== y || x[21] !== v
          ? ((f =
              (v || k) &&
              (0, r.jsx)(Y.P.div, {
                style: {
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  marginLeft: -24,
                  marginTop: -24,
                  width: 48,
                  height: 48,
                  display: "grid",
                  placeItems: "center",
                  zIndex: 1,
                },
                initial: !k && { scale: 0, opacity: 0, x: 61.25 },
                animate: { scale: k ? 1 : [0, 1.1, 1], opacity: 1, x: 61.25 },
                transition: { duration: 0.3 * !k, ease: "easeOut" },
                children: y,
              })),
            (x[19] = k),
            (x[20] = y),
            (x[21] = v),
            (x[22] = f))
          : (f = x[22]),
        x[23] !== w || x[24] !== A || x[25] !== k
          ? ((h =
              (A || k) &&
              (0, r.jsx)("div", {
                style: { position: "absolute", inset: 0, display: "grid", placeItems: "center" },
                children: (0, r.jsx)(Y.P.div, {
                  initial: !k && { opacity: 0, y: 12, scale: 0.9 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: k ? { duration: 0 } : { type: "spring", stiffness: 360, damping: 26 },
                  children: w,
                }),
              })),
            (x[23] = w),
            (x[24] = A),
            (x[25] = k),
            (x[26] = h))
          : (h = x[26]),
        x[27] !== p || x[28] !== f || x[29] !== h
          ? ((m = (0, r.jsxs)("div", { "aria-hidden": "true", style: o, children: [p, f, h] })),
            (x[27] = p),
            (x[28] = f),
            (x[29] = h),
            (x[30] = m))
          : (m = x[30]),
        m
      )
    }
    var ee = n.p + "assets/e51e44bbaeb5.svg"
    function et(e) {
      let t,
        n,
        o,
        l,
        a,
        s = (0, i.c)(11),
        { target: c } = e,
        d = (0, Z.I)()
      s[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = (0, r.jsx)("img", { alt: "", className: "size-12 invert-5 dark:invert-95", src: X })), (s[0] = t))
        : (t = s[0])
      let u = d ? void 0 : "opacity-24"
      return (
        s[1] !== u ? ((n = (0, r.jsx)("img", { alt: "", className: u, src: ee })), (s[1] = u), (s[2] = n)) : (n = s[2]),
        s[3] !== d
          ? ((o = d ? null : (0, r.jsx)("span", { ref: Q.d, className: "dots-Qf_9QK" })), (s[3] = d), (s[4] = o))
          : (o = s[4]),
        s[5] !== n || s[6] !== o
          ? ((l = (0, r.jsxs)("span", { className: "relative block", children: [n, o] })),
            (s[5] = n),
            (s[6] = o),
            (s[7] = l))
          : (l = s[7]),
        s[8] !== l || s[9] !== c
          ? ((a = (0, r.jsx)(J, { source: t, target: c, connector: l })), (s[8] = l), (s[9] = c), (s[10] = a))
          : (a = s[10]),
        a
      )
    }
    function en(e) {
      let t,
        n,
        o,
        l,
        a,
        s,
        c,
        d = (0, i.c)(20),
        { providerLogo: u, title: g, errorMessage: f, children: h, backLabel: m, backDisabled: x, onBack: b } = e
      return (
        d[0] !== u ? ((t = (0, r.jsx)(et, { target: u })), (d[0] = u), (d[1] = t)) : (t = d[1]),
        d[2] !== g
          ? ((n = (0, r.jsx)("h1", {
              className: "w-full text-center text-xl leading-9 font-normal text-default",
              children: g,
            })),
            (d[2] = g),
            (d[3] = n))
          : (n = d[3]),
        d[4] !== t || d[5] !== n
          ? ((o = (0, r.jsxs)("div", {
              className: "flex w-full flex-col items-center gap-4 select-none",
              children: [t, n],
            })),
            (d[4] = t),
            (d[5] = n),
            (d[6] = o))
          : (o = d[6]),
        d[7] !== f
          ? ((l =
              null != f
                ? (0, r.jsx)("p", {
                    role: "alert",
                    className: "text-center text-[14px] leading-5 font-normal text-codex-description",
                    children: f,
                  })
                : null),
            (d[7] = f),
            (d[8] = l))
          : (l = d[8]),
        d[9] !== x || d[10] !== m || d[11] !== b
          ? ((a = (0, r.jsx)(p.$, {
              className: "w-full justify-center",
              color: "ghostTertiary",
              size: "large",
              type: "button",
              disabled: x,
              onClick: b,
              children: m,
            })),
            (d[9] = x),
            (d[10] = m),
            (d[11] = b),
            (d[12] = a))
          : (a = d[12]),
        d[13] !== h || d[14] !== l || d[15] !== a
          ? ((s = (0, r.jsxs)("div", { className: "flex w-full flex-col gap-3", children: [l, h, a] })),
            (d[13] = h),
            (d[14] = l),
            (d[15] = a),
            (d[16] = s))
          : (s = d[16]),
        d[17] !== o || d[18] !== s
          ? ((c = (0, r.jsx)("div", {
              className: "flex h-full w-full justify-center overflow-y-auto bg-surface px-6 py-4 text-default",
              children: (0, r.jsxs)("div", {
                className: "my-auto flex w-full max-w-lg shrink-0 flex-col items-center gap-8",
                children: [o, s],
              }),
            })),
            (d[17] = o),
            (d[18] = s),
            (d[19] = c))
          : (c = d[19]),
        c
      )
    }
    let er = ["profile", "accessKeys", "apiKey"]
    function ei(e) {
      let t,
        n = (0, i.c)(60),
        {
          detectedCredentials: o,
          supportsAwsCredentials: l,
          supportsAccessKeys: a,
          isDetecting: c,
          isSubmitting: d,
          errorMessage: u,
          onBack: g,
          onClearError: f,
          onDetectCredentials: h,
          onSubmit: m,
        } = e,
        x = (0, j.A)(),
        b = (0, s.useId)(),
        y = (0, s.useId)(),
        [w, k] = (0, s.useState)(null),
        [v, S] = (0, s.useState)(null),
        [_, C] = (0, s.useState)(""),
        [M, N] = (0, s.useState)(""),
        [E, L] = (0, s.useState)(""),
        [I, P] = (0, s.useState)(""),
        [R, B] = (0, s.useState)(""),
        [z, T] = (0, s.useState)(""),
        G = l && c,
        O = o?.activeProfile ?? "default"
      if (
        n[0] !== E ||
        n[1] !== z ||
        n[2] !== o ||
        n[3] !== y ||
        n[4] !== v ||
        n[5] !== u ||
        n[6] !== x ||
        n[7] !== G ||
        n[8] !== d ||
        n[9] !== b ||
        n[10] !== g ||
        n[11] !== f ||
        n[12] !== h ||
        n[13] !== m ||
        n[14] !== O ||
        n[15] !== _ ||
        n[16] !== M ||
        n[17] !== I ||
        n[18] !== w ||
        n[19] !== R ||
        n[20] !== a ||
        n[21] !== l
      ) {
        let e,
          i,
          s,
          c,
          j,
          K,
          W,
          D,
          U = o?.profiles.slice().sort((e, t) => Number(t.name === O) - Number(e.name === O)),
          V =
            U?.find((e) => {
              let { name: t } = e
              return t === v
            }) ?? U?.[0],
          Q = (null != U && U.length > 0) || o?.environmentCredentialsAvailable === !0,
          Z = l ? (w ?? (Q ? null : "profile")) : "apiKey"
        n[23] !== f
          ? ((e = (e) => {
              ;(f(), k(e))
            }),
            (n[23] = f),
            (n[24] = e))
          : (e = n[24])
        let X = e
        ;(n[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = (0, r.jsx)("img", { alt: "", className: "w-12 dark:hue-rotate-180 dark:invert", src: $ })),
            (s = (0, r.jsx)(A.A, {
              id: "electron.onboarding.login.bedrock.title",
              defaultMessage: "Set up Amazon Bedrock",
              description: "Title for Amazon Bedrock setup on desktop onboarding",
            })),
            (n[25] = i),
            (n[26] = s))
          : ((i = n[25]), (s = n[26])),
          n[27] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = (0, r.jsx)(A.A, {
                id: "electron.onboarding.login.bedrock.back",
                defaultMessage: "Back",
                description: "Button label to go back from Amazon Bedrock setup",
              })),
              (n[27] = c))
            : (c = n[27]),
          n[28] !== Q || n[29] !== Z || n[30] !== g || n[31] !== X || n[32] !== l
            ? ((j = () => {
                ;(X(null), (null != Z && l && Q) || g())
              }),
              (n[28] = Q),
              (n[29] = Z),
              (n[30] = g),
              (n[31] = X),
              (n[32] = l),
              (n[33] = j))
            : (j = n[33]),
          n[34] !== G
            ? ((K = G
                ? (0, r.jsx)("p", {
                    className: "text-center text-[14px] leading-5 font-normal text-codex-description select-none",
                    children: (0, r.jsx)(A.A, {
                      id: "electron.onboarding.login.bedrock.detecting",
                      defaultMessage: "Checking for AWS credentials…",
                      description: "Loading message while desktop onboarding checks for AWS credentials",
                    }),
                  })
                : null),
              (n[34] = G),
              (n[35] = K))
            : (K = n[35]),
          n[36] !== o || n[37] !== u || n[38] !== Q || n[39] !== G || n[40] !== l
            ? ((W =
                G || !l || null == o || null != u || Q
                  ? null
                  : (0, r.jsx)("p", {
                      className: "text-center text-[14px] leading-5 font-normal text-codex-description select-none",
                      children: (0, r.jsx)(A.A, {
                        id: "electron.onboarding.login.bedrock.noCredentials",
                        defaultMessage: "No AWS credentials found",
                        description: "Message shown when desktop onboarding finds no AWS credentials",
                      }),
                    })),
              (n[36] = o),
              (n[37] = u),
              (n[38] = Q),
              (n[39] = G),
              (n[40] = l),
              (n[41] = W))
            : (W = n[41]),
          n[42] !== E ||
          n[43] !== z ||
          n[44] !== x ||
          n[45] !== G ||
          n[46] !== d ||
          n[47] !== Z ||
          n[48] !== b ||
          n[49] !== f ||
          n[50] !== h ||
          n[51] !== m ||
          n[52] !== _ ||
          n[53] !== M ||
          n[54] !== I ||
          n[55] !== R ||
          n[56] !== X ||
          n[57] !== a ||
          n[58] !== l
            ? ((D =
                G || null == Z
                  ? null
                  : (0, r.jsxs)("form", {
                      className: "flex w-full flex-col gap-4",
                      onChange: f,
                      onSubmit: (e) => {
                        switch ((e.preventDefault(), Z)) {
                          case "profile":
                            m({ method: Z, profile: _.trim(), region: M.trim() })
                            break
                          case "accessKeys":
                            m({
                              method: Z,
                              accessKeyId: E,
                              secretAccessKey: I,
                              sessionToken: 0 === R.trim().length ? null : R,
                              region: M.trim(),
                            })
                            break
                          case "environment":
                            m({ method: Z, region: M.trim() })
                            break
                          case "apiKey":
                            m({ method: Z, apiKey: z, region: M.trim() })
                        }
                      },
                      children: [
                        l && "environment" !== Z
                          ? (0, r.jsxs)("div", {
                              className: "flex flex-col gap-2 border-b border-default pb-4",
                              children: [
                                (0, r.jsx)("span", {
                                  id: b,
                                  className: "text-sm text-default select-none",
                                  children: (0, r.jsx)(A.A, {
                                    id: "electron.onboarding.login.bedrock.method.label",
                                    defaultMessage: "Choose sign-in method",
                                    description: "Label for choosing how to provide AWS credentials for Bedrock",
                                  }),
                                }),
                                (0, r.jsx)(F.l, {
                                  "aria-labelledby": b,
                                  disabled: d,
                                  size: "3xl",
                                  value: Z,
                                  options: er
                                    .filter((e) => "accessKeys" !== e || a)
                                    .map((e) => ({ value: e, label: x.formatMessage(el[e]) })),
                                  onChange: (e) => {
                                    let { value: t } = e
                                    return X(t)
                                  },
                                }),
                              ],
                            })
                          : null,
                        "profile" === Z
                          ? (0, r.jsx)(H, {
                              value: _,
                              onChange: C,
                              children: (0, r.jsx)(A.A, {
                                id: "electron.onboarding.login.bedrock.profile.label",
                                defaultMessage: "AWS profile",
                                description: "Label for the AWS profile field in Bedrock onboarding",
                              }),
                            })
                          : null,
                        "accessKeys" === Z
                          ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                (0, r.jsx)(H, {
                                  placeholder: x.formatMessage({
                                    id: "electron.onboarding.login.bedrock.accessKeyId.placeholder",
                                    defaultMessage: "e.g. AKIAIOSFODNN7EXAMPLE",
                                    description:
                                      "Example AWS access key ID shown in the empty access key ID field. Keep the example identifier unchanged.",
                                  }),
                                  value: E,
                                  onChange: L,
                                  children: (0, r.jsx)(A.A, {
                                    id: "electron.onboarding.login.bedrock.accessKeyId.label",
                                    defaultMessage: "AWS access key ID",
                                    description: "Label for the AWS access key ID field in Bedrock onboarding",
                                  }),
                                }),
                                (0, r.jsx)(H, {
                                  type: "password",
                                  placeholder: x.formatMessage({
                                    id: "electron.onboarding.login.bedrock.secretAccessKey.placeholder",
                                    defaultMessage: "40-character secret access key",
                                    description: "Placeholder describing the secret part of an AWS access key",
                                  }),
                                  value: I,
                                  onChange: P,
                                  children: (0, r.jsx)(A.A, {
                                    id: "electron.onboarding.login.bedrock.secretAccessKey.label",
                                    defaultMessage: "AWS secret access key",
                                    description:
                                      "Label for the masked AWS secret access key field in Bedrock onboarding",
                                  }),
                                }),
                                (0, r.jsx)(H, {
                                  type: "password",
                                  required: !1,
                                  placeholder: x.formatMessage({
                                    id: "electron.onboarding.login.bedrock.sessionToken.placeholder",
                                    defaultMessage: "Add session token, if required",
                                    description:
                                      "Placeholder for an optional AWS session token used with temporary access keys",
                                  }),
                                  value: R,
                                  onChange: B,
                                  children: (0, r.jsx)(A.A, {
                                    id: "electron.onboarding.login.bedrock.sessionToken.label",
                                    defaultMessage: "AWS session token (optional)",
                                    description: "Label for the optional AWS session token field in Bedrock onboarding",
                                  }),
                                }),
                              ],
                            })
                          : null,
                        "environment" === Z
                          ? (0, r.jsx)("p", {
                              className:
                                "text-center text-[14px] leading-5 font-normal text-codex-description select-none",
                              children: (0, r.jsx)(A.A, {
                                id: "electron.onboarding.login.bedrock.environment.instructions",
                                defaultMessage: "AWS credentials detected. Enter your AWS Region to continue.",
                                description: "Instructions for using environment credentials in Bedrock onboarding",
                              }),
                            })
                          : null,
                        "apiKey" === Z
                          ? (0, r.jsx)(H, {
                              autoFocus: !l,
                              type: "password",
                              placeholder: x.formatMessage({
                                id: "electron.onboarding.login.bedrock.apiKey.placeholder",
                                defaultMessage: "Paste your Amazon Bedrock API key",
                                description: "Placeholder in the masked Amazon Bedrock API key field",
                              }),
                              value: z,
                              onChange: T,
                              children: (0, r.jsx)(A.A, {
                                id: "electron.onboarding.login.bedrock.apiKey.label",
                                defaultMessage: "Bedrock API key",
                                description: "Label for the masked Bedrock API key field in desktop onboarding",
                              }),
                            })
                          : null,
                        (0, r.jsx)(H, {
                          autoFocus: "environment" === Z,
                          value: M,
                          onChange: N,
                          help: (0, r.jsx)(A.A, {
                            id: "electron.onboarding.login.bedrock.region.example",
                            defaultMessage: "For example, us-east-2",
                            description:
                              "Example below the AWS region field in Bedrock onboarding. Keep the region identifier us-east-2 untranslated.",
                          }),
                          children: (0, r.jsx)(A.A, {
                            id: "electron.onboarding.login.bedrock.region.label",
                            defaultMessage: "AWS region",
                            description: "Label for the AWS region input in Amazon Bedrock onboarding",
                          }),
                        }),
                        (0, r.jsxs)("div", {
                          className: "flex w-full flex-col gap-3",
                          children: [
                            (0, r.jsx)(p.$, {
                              className: "w-full justify-center",
                              radius: "full",
                              size: "onboardingAction",
                              type: "submit",
                              disabled:
                                d ||
                                0 === M.trim().length ||
                                ("profile" === Z && 0 === _.trim().length) ||
                                ("accessKeys" === Z && (0 === E.trim().length || 0 === I.trim().length)) ||
                                ("apiKey" === Z && 0 === z.trim().length),
                              loading: d,
                              children: (0, r.jsx)(A.A, {
                                id: "electron.onboarding.login.bedrock.continue",
                                defaultMessage: "Continue",
                                description: "Continue button label for Amazon Bedrock sign-in",
                              }),
                            }),
                            "environment" === Z
                              ? (0, r.jsx)(p.$, {
                                  className: "w-full justify-center",
                                  color: "secondary",
                                  size: "large",
                                  type: "button",
                                  disabled: d,
                                  onClick: () => {
                                    ;(X(null), h())
                                  },
                                  children: (0, r.jsx)(A.A, {
                                    id: "electron.onboarding.login.bedrock.environment.retry",
                                    defaultMessage: "Check for credentials again",
                                    description: "Button label to check for AWS environment credentials again",
                                  }),
                                })
                              : null,
                          ],
                        }),
                      ],
                    })),
              (n[42] = E),
              (n[43] = z),
              (n[44] = x),
              (n[45] = G),
              (n[46] = d),
              (n[47] = Z),
              (n[48] = b),
              (n[49] = f),
              (n[50] = h),
              (n[51] = m),
              (n[52] = _),
              (n[53] = M),
              (n[54] = I),
              (n[55] = R),
              (n[56] = X),
              (n[57] = a),
              (n[58] = l),
              (n[59] = D))
            : (D = n[59]),
          (t = (0, r.jsxs)(en, {
            providerLogo: i,
            title: s,
            errorMessage: u,
            backLabel: c,
            backDisabled: d,
            onBack: j,
            children: [
              K,
              W,
              D,
              G || null != Z
                ? null
                : (0, r.jsxs)(r.Fragment, {
                    children: [
                      null != U && null != V
                        ? (0, r.jsxs)("div", {
                            className: "flex w-full flex-col gap-2",
                            children: [
                              (0, r.jsx)("p", {
                                id: y,
                                className: "text-sm font-normal text-default select-none",
                                children: (0, r.jsx)(A.A, {
                                  id: "electron.onboarding.login.bedrock.profiles.detected",
                                  defaultMessage: "AWS profile",
                                  description: "Label for the AWS profile selector in Amazon Bedrock onboarding",
                                }),
                              }),
                              (0, r.jsx)(F.l, {
                                "aria-labelledby": y,
                                searchEmptyMessage: (0, r.jsx)(A.A, {
                                  id: "electron.onboarding.login.bedrock.profile.noMatches",
                                  defaultMessage: "No matching profiles",
                                  description: "Shown when no detected AWS profile matches the search",
                                }),
                                disabled: d,
                                size: "3xl",
                                value: V.name,
                                options: U.map(eo),
                                onChange: (e) => {
                                  let { value: t } = e
                                  ;(f(), S(t))
                                },
                                actions: [
                                  {
                                    id: "other-profile",
                                    Icon: q.D_h,
                                    label: x.formatMessage({
                                      id: "electron.onboarding.login.bedrock.profile.other",
                                      defaultMessage: "Enter another profile",
                                      description: "Menu action to enter the name of another AWS profile manually",
                                    }),
                                    onSelect: () => {
                                      ;(C(""), N(""), X("profile"))
                                    },
                                  },
                                ],
                              }),
                              (0, r.jsx)(p.$, {
                                className: "mt-4 w-full justify-center",
                                radius: "full",
                                size: "onboardingAction",
                                disabled: d,
                                loading: d,
                                onClick: () => {
                                  let e = V.region
                                  if (null == e) {
                                    ;(C(V.name), N(""), X("profile"))
                                    return
                                  }
                                  m({ method: "profile", profile: V.name, region: e })
                                },
                                children: (0, r.jsx)(A.A, {
                                  id: "electron.onboarding.login.bedrock.continue",
                                  defaultMessage: "Continue",
                                  description: "Continue button label for Amazon Bedrock sign-in",
                                }),
                              }),
                            ],
                          })
                        : null,
                      o?.environmentCredentialsAvailable === !0
                        ? (0, r.jsx)(p.$, {
                            className: "w-full justify-center",
                            color: null == V ? "primary" : "ghostTertiary",
                            size: null == V ? "large" : "default",
                            disabled: d,
                            onClick: () => {
                              ;(N(o.environmentRegion ?? ""), X("environment"))
                            },
                            children: (0, r.jsx)(A.A, {
                              id: "electron.onboarding.login.bedrock.environment.continue",
                              defaultMessage: "Continue with detected credentials",
                              description: "Button label to sign in with detected AWS environment credentials",
                            }),
                          })
                        : null,
                      (0, r.jsx)(p.$, {
                        className: "w-full justify-center",
                        color: "outlineSurface",
                        radius: "full",
                        size: "onboardingAction",
                        disabled: d,
                        onClick: () => {
                          ;(C(V?.name ?? ""), N(null != V ? (V.region ?? "") : (o?.region ?? "")), X("profile"))
                        },
                        children: (0, r.jsx)(A.A, {
                          id: "electron.onboarding.login.bedrock.otherMethods",
                          defaultMessage: "Other AWS sign-in methods",
                          description: "Button label to show other AWS sign-in methods",
                        }),
                      }),
                    ],
                  }),
            ],
          })),
          (n[0] = E),
          (n[1] = z),
          (n[2] = o),
          (n[3] = y),
          (n[4] = v),
          (n[5] = u),
          (n[6] = x),
          (n[7] = G),
          (n[8] = d),
          (n[9] = b),
          (n[10] = g),
          (n[11] = f),
          (n[12] = h),
          (n[13] = m),
          (n[14] = O),
          (n[15] = _),
          (n[16] = M),
          (n[17] = I),
          (n[18] = w),
          (n[19] = R),
          (n[20] = a),
          (n[21] = l),
          (n[22] = t))
      } else t = n[22]
      return t
    }
    function eo(e) {
      let { name: t, region: n } = e
      return {
        value: t,
        label: t,
        description:
          null == n
            ? void 0
            : (0, r.jsx)(A.A, {
                id: "electron.onboarding.login.bedrock.profile.region",
                defaultMessage: "Region: {region}",
                description: "AWS Region shown for a detected AWS profile",
                values: { region: n },
              }),
      }
    }
    let el = (0, V.YK)({
      profile: {
        id: "electron.onboarding.login.bedrock.profile.method",
        defaultMessage: "AWS profile",
        description: "Sign-in method that uses a named AWS profile",
      },
      accessKeys: {
        id: "electron.onboarding.login.bedrock.accessKeys.method",
        defaultMessage: "AWS access keys",
        description: "Sign-in method that uses an AWS access key ID and secret access key",
      },
      apiKey: {
        id: "electron.onboarding.login.bedrock.apiKey.method",
        defaultMessage: "Bedrock API key",
        description: "Sign-in method that uses a Bedrock API key",
      },
    })
    var ea = n("ZjI6"),
      es = n("iiY7"),
      ec = n("Przp"),
      ed = n("eO2m"),
      eu = n("dxKw"),
      eg = n("Vku9")
    function ep(e) {
      let t,
        n,
        o,
        l,
        c,
        d,
        u,
        g,
        f,
        h,
        m,
        x,
        b,
        y,
        w,
        k,
        v,
        S,
        _,
        C,
        M,
        N,
        E = (0, i.c)(50),
        { onBack: L, onSubmit: I } = e,
        P = (0, j.A)(),
        R = (0, eu._)(),
        [B, z] = (0, s.useState)(""),
        [T, G] = (0, s.useState)(""),
        [O, K] = (0, s.useState)(""),
        [W, D] = (0, s.useState)(!1),
        [U, F] = (0, s.useState)(null)
      E[0] !== P || E[1] !== R
        ? ((t = async () => {
            try {
              let [e] = await R({
                accept: [".json"],
                allowMultiple: !1,
                kind: "file",
                pickerTitle: P.formatMessage({
                  id: "electron.onboarding.login.gcp.chooseCredentialFile",
                  defaultMessage: "Choose a Google Cloud credential file",
                  description: "Title of the native dialog for choosing one Google Cloud credential JSON file",
                }),
              })
              null != e && (K(e.appServerPath ?? e.fsPath), F(null))
            } catch (e) {
              F((0, a.Rt_)(e))
            }
          }),
          (E[0] = P),
          (E[1] = R),
          (E[2] = t))
        : (t = E[2])
      let V = t
      return (
        E[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsx)(eg.A, { "aria-hidden": "true", className: "size-full" })),
            (o = (0, r.jsx)(A.A, {
              id: "electron.onboarding.login.gcp.title",
              defaultMessage: "Set up Google Cloud",
              description: "Heading for setup of Google Cloud Vertex AI as the Codex model provider",
            })),
            (E[3] = n),
            (E[4] = o))
          : ((n = E[3]), (o = E[4])),
        E[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)(A.A, {
              id: "electron.onboarding.login.gcp.back",
              defaultMessage: "Back",
              description: "Return from Google Cloud setup to the list of sign-in methods",
            })),
            (E[5] = l))
          : (l = E[5]),
        E[6] === Symbol.for("react.memo_cache_sentinel") ? ((c = () => F(null)), (E[6] = c)) : (c = E[6]),
        E[7] !== O || E[8] !== W || E[9] !== T || E[10] !== I || E[11] !== B
          ? ((d = (e) => {
              e.preventDefault()
              let t = B.trim()
              t &&
                !W &&
                (F(null),
                D(!0),
                I({ projectId: t, location: T.trim() || null, credentialFile: O.trim() || null })
                  .catch((e) => F((0, a.Rt_)(e)))
                  .finally(() => D(!1)))
            }),
            (E[7] = O),
            (E[8] = W),
            (E[9] = T),
            (E[10] = I),
            (E[11] = B),
            (E[12] = d))
          : (d = E[12]),
        E[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, r.jsx)(A.A, {
              id: "electron.onboarding.login.gcp.projectId",
              defaultMessage: "Project ID",
              description: "Required Google Cloud project identifier for Vertex AI",
            })),
            (E[13] = u))
          : (u = E[13]),
        E[14] !== B
          ? ((g = (0, r.jsx)(H, { value: B, onChange: z, autoFocus: !0, children: u })), (E[14] = B), (E[15] = g))
          : (g = E[15]),
        E[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, r.jsx)(A.A, {
              id: "electron.onboarding.login.gcp.location",
              defaultMessage: "Location (optional)",
              description: "Label for the optional Vertex AI location, which defaults to global",
            })),
            (E[16] = f))
          : (f = E[16]),
        E[17] !== T
          ? ((h = (0, r.jsx)(H, { value: T, onChange: G, required: !1, placeholder: "global", children: f })),
            (E[17] = T),
            (E[18] = h))
          : (h = E[18]),
        E[19] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, r.jsx)(A.A, {
              id: "electron.onboarding.login.gcp.credentialFile.help",
              defaultMessage:
                "Enter the absolute path to a credential JSON file, or leave blank to use Application Default Credentials (ADC)",
              description: "Help below the optional Google Cloud credential file field",
            })),
            (E[19] = m))
          : (m = E[19]),
        E[20] !== V ? ((x = () => void V()), (E[20] = V), (E[21] = x)) : (x = E[21]),
        E[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, r.jsx)(A.A, {
              id: "electron.onboarding.login.gcp.browse",
              defaultMessage: "Browse…",
              description: "Opens a file picker to select a Google Cloud credential file",
            })),
            (E[22] = b))
          : (b = E[22]),
        E[23] !== x
          ? ((y = (0, r.jsx)(p.$, { size: "large", color: "outlineSurface", type: "button", onClick: x, children: b })),
            (E[23] = x),
            (E[24] = y))
          : (y = E[24]),
        E[25] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, r.jsx)(A.A, {
              id: "electron.onboarding.login.gcp.credentialFile",
              defaultMessage: "Credential file (optional)",
              description: "Label for the absolute path to a Google Cloud credential file on this computer",
            })),
            (E[25] = w))
          : (w = E[25]),
        E[26] !== O || E[27] !== y
          ? ((k = (0, r.jsx)(H, { value: O, onChange: K, required: !1, help: m, action: y, children: w })),
            (E[26] = O),
            (E[27] = y),
            (E[28] = k))
          : (k = E[28]),
        E[29] !== W || E[30] !== B ? ((v = W || !B.trim()), (E[29] = W), (E[30] = B), (E[31] = v)) : (v = E[31]),
        E[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((S = (0, r.jsx)(A.A, {
              id: "electron.onboarding.login.gcp.continue",
              defaultMessage: "Continue",
              description: "Submit Google Cloud setup and continue onboarding",
            })),
            (E[32] = S))
          : (S = E[32]),
        E[33] !== W || E[34] !== v
          ? ((_ = (0, r.jsx)(p.$, {
              className: "w-full justify-center",
              radius: "full",
              size: "onboardingAction",
              type: "submit",
              disabled: v,
              loading: W,
              children: S,
            })),
            (E[33] = W),
            (E[34] = v),
            (E[35] = _))
          : (_ = E[35]),
        E[36] !== W || E[37] !== h || E[38] !== k || E[39] !== _ || E[40] !== g
          ? ((C = (0, r.jsxs)("fieldset", {
              className: "flex w-full flex-col gap-4",
              disabled: W,
              children: [g, h, k, _],
            })),
            (E[36] = W),
            (E[37] = h),
            (E[38] = k),
            (E[39] = _),
            (E[40] = g),
            (E[41] = C))
          : (C = E[41]),
        E[42] !== C || E[43] !== d
          ? ((M = (0, r.jsx)("form", { onChange: c, onSubmit: d, children: C })), (E[42] = C), (E[43] = d), (E[44] = M))
          : (M = E[44]),
        E[45] !== U || E[46] !== W || E[47] !== L || E[48] !== M
          ? ((N = (0, r.jsx)(en, {
              providerLogo: n,
              title: o,
              errorMessage: U,
              backLabel: l,
              backDisabled: W,
              onBack: L,
              children: M,
            })),
            (E[45] = U),
            (E[46] = W),
            (E[47] = L),
            (E[48] = M),
            (E[49] = N))
          : (N = E[49]),
        N
      )
    }
    function ef(e) {
      let t,
        n,
        o,
        l = (0, i.c)(4),
        { onClick: a } = e
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(eg.A, { "aria-hidden": "true", className: "size-4" })),
            (n = (0, r.jsx)(A.A, {
              id: "electron.onboarding.login.gcp.open",
              defaultMessage: "Use Google Cloud",
              description: "Button that opens the Google Cloud Vertex AI setup form",
            })),
            (l[0] = t),
            (l[1] = n))
          : ((t = l[0]), (n = l[1])),
        l[2] !== a
          ? ((o = (0, r.jsxs)(p.$, {
              className: "w-full",
              color: "outlineSurface",
              radius: "full",
              size: "onboardingAction",
              type: "button",
              onClick: a,
              children: [t, n],
            })),
            (l[2] = a),
            (l[3] = o))
          : (o = l[3]),
        o
      )
    }
    var eh = n("X5YM"),
      em = n("J3WM"),
      ex = n("LH8k"),
      eb = n("GDNt")
    let ey = new Set([
        "EAI_AGAIN",
        "ECONNREFUSED",
        "ECONNRESET",
        "ENOTFOUND",
        "ETIMEDOUT",
        "ERR_CONNECTION_RESET",
        "ERR_NETWORK_CHANGED",
        "ERR_TIMED_OUT",
      ]),
      ew = new Set(["authentication_error", "forbidden", "invalid_api_key", "token_invalidated", "unauthorized"]),
      ek = new Set([
        "failed to fetch",
        "fetch failed",
        "load failed",
        "network request failed",
        "networkerror when attempting to fetch resource.",
        "request timed out",
      ])
    function ev(e) {
      if (e instanceof Error && "AbortError" === e.name) return "abort"
      if (e instanceof Error && "TimeoutError" === e.name) return "network"
      if (e instanceof eb.fk) {
        if (401 === e.status || 403 === e.status) return "auth"
        if (0 === e.status || 408 === e.status || 504 === e.status || (null != e.errorCode && ey.has(e.errorCode)))
          return "network"
        let t = (0, ex.d)(e)
        return (t?.type != null && ew.has(t.type)) || (null != e.errorCode && ew.has(e.errorCode)) ? "auth" : "unknown"
      }
      if (e instanceof Error && "code" in e && "string" == typeof e.code && ey.has(e.code)) return "network"
      let t = ("string" == typeof e ? e : e instanceof Error ? e.message : "").trim().toLowerCase()
      return ek.has(t) ? "network" : ew.has(t) || "auth failed" === t || "invalid api key" === t ? "auth" : "unknown"
    }
    var ej = n("on57"),
      eA = n("JIuM"),
      eS = n("LhhH"),
      e_ = n("DlCK"),
      eC = n("OQ5p"),
      eM = n("afqi"),
      eN = n("XYHU")
    let eE = (0, l.un)(x.u, ({ get: e }) => null != R.appServices.chatGptBrowserSession && "windows" === e(eN.IU)),
      eL = (0, l.un)(x.u, ({ get: e }) => (e(eE) ? "504848717" : "1504988142"))
    var eI = n("ClGD"),
      eP = n("RHhA")
    let eR = a.x1u.allowDebugMenu((0, eP.t)()),
      eB = [],
      ez = new Set()
    function eT(e, t = {}) {
      eR && eG({ source: "renderer", stage: e, details: t })
    }
    function eG(e) {
      if (eR)
        for (let t of (console.log(`[browser-session] ${JSON.stringify(e)}`), (eB = [...eB.slice(-49), e]), ez)) t()
    }
    var eO = n("toKG")
    let eK = (0, l.RD)(x.u, ({ scope: e }) => ({
        gcTime: 1 / 0,
        queryFn: async ({ signal: t }) => {
          if (eR) for (let e of ((eB = []), ez)) e()
          eT("eligibility_query_started", { serviceAvailable: null != R.appServices.chatGptBrowserSession })
          let n = (await R.appServices.chatGptBrowserSession?.getLookupEligibility()) ?? null
          return t.aborted
            ? null
            : (eT("eligibility_query_completed", { eligible: n?.eligible ?? !1, resultAvailable: null != n }),
              null != n &&
                (0, P.yy)(e, eI.CodexDesktopLoginBrowserSessionLookupEligibilityEvaluated, {
                  arm64CheckPassed: n.arm64,
                  browserHasVisibleWindow: n.browserHasVisibleWindow,
                  browserIsRunning: n.browserIsRunning,
                  eligible: n.eligible,
                  macosCheckPassed: n.macOS,
                }),
              n)
        },
        queryKey: ["chatgpt-browser-session-lookup-eligibility"],
        retry: !1,
        staleTime: 1 / 0,
      })),
      eW = (0, l.vU)(x.u, (e, { scope: t }) => ({
        gcTime: 1 / 0,
        queryFn: async ({ signal: n }) => {
          let r = R.appServices.chatGptBrowserSession
          if ((eT("profile_query_started", { serviceAvailable: null != r }), null == r))
            return (eT("profile_query_skipped", { reason: "service_unavailable" }), null)
          let i = crypto.randomUUID(),
            o = () => {
              r.cancelProbe(i)
            }
          if ((n.addEventListener("abort", o, { once: !0 }), n.aborted))
            return (eT("profile_query_aborted_before_probe"), o(), null)
          try {
            let { chatGptDesktopAuthOrigin: o } = await R.appServices.appInfo.get()
            if (n.aborted) return (eT("profile_query_aborted_before_probe"), null)
            let l = performance.now(),
              a = await r.probe(i, (0, eO.N)(o), e, eR ? eG : void 0),
              s = (a?.length ?? 0) > 0
            return (
              n.aborted ||
                (0, P.yy)(t, eI.CodexDesktopLoginBrowserSessionLookupCompleted, {
                  latencyMs: Math.round(performance.now() - l),
                  profileFound: s,
                }),
              eT("profile_query_completed", { profileFound: s, signedOut: a?.length === 0 }),
              a
            )
          } catch (e) {
            throw (eT("profile_query_failed"), e)
          } finally {
            n.removeEventListener("abort", o)
          }
        },
        queryKey: ["chatgpt-browser-session-profiles", e],
        retry: !1,
        staleTime: 1 / 0,
      }))
    var eD = n("ZtSy")
    function eU() {
      let e,
        t = (0, i.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, r.jsx)("p", {
              className: "pb-3 text-start text-sm text-secondary select-none",
              children: (0, r.jsx)(A.A, {
                id: "electron.onboarding.login.apikey.createKey",
                defaultMessage: "Don’t have an API key? <createKey>Create one here.</createKey>",
                description:
                  "Help below the desktop API key field; createKey links to the OpenAI API key management page in the user's browser",
                values: { createKey: eF },
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function eF(e) {
      return (0, r.jsx)(eD.G, {
        href: "https://platform.openai.com/api-keys",
        initiator: "open_in_browser_bridge",
        isBrowserEnabled: !1,
        openTarget: "external-browser",
        underline: "always",
        children: e,
      })
    }
    var eV = n("K1N8")
    function eq(e) {
      let t,
        n,
        o,
        l,
        a,
        s,
        c,
        d,
        u,
        g,
        f,
        m,
        x,
        b,
        y,
        w,
        k,
        v,
        S,
        _,
        C,
        M,
        N,
        E,
        L,
        I,
        P,
        R = (0, i.c)(46),
        { allowOtherSignInMethods: B, onChatGptSignIn: z, onShowOtherSignInMethods: T } = e,
        G = (0, j.A)()
      return (
        R[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(eM.A, { className: "shrink-0" })), (R[0] = t))
          : (t = R[0]),
        R[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, r.jsxs)("div", {
              className: "flex flex-col items-center gap-4 text-center",
              children: [
                t,
                (0, r.jsx)("h1", {
                  className: "text-3xl font-normal",
                  children: (0, r.jsx)(A.A, {
                    id: "electron.onboarding.login.fallback.title",
                    defaultMessage: "Log in or sign up",
                    description:
                      "Heading on desktop sign-in when browser lookup confirms no signed-in ChatGPT session; users can choose a provider or enter their email",
                  }),
                }),
              ],
            })),
            (R[1] = n))
          : (n = R[1]),
        R[2] !== z ? ((o = () => void z("signin")), (R[2] = z), (R[3] = o)) : (o = R[3]),
        R[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, r.jsx)(eC.A, { "aria-hidden": "true", className: "size-5 shrink-0" })),
            (a = (0, r.jsx)(A.A, {
              id: "electron.onboarding.login.fallback.chatgpt",
              defaultMessage: "Continue with ChatGPT",
              description:
                "First desktop sign-in button opening the existing general ChatGPT browser authentication flow",
            })),
            (R[4] = l),
            (R[5] = a))
          : ((l = R[4]), (a = R[5])),
        R[6] !== o
          ? ((s = (0, r.jsxs)(p.$, {
              color: "outlineSurface",
              radius: "full",
              size: "auth",
              type: "button",
              onClick: o,
              children: [l, a],
            })),
            (R[6] = o),
            (R[7] = s))
          : (s = R[7]),
        R[8] !== z ? ((c = () => void z("google")), (R[8] = z), (R[9] = c)) : (c = R[9]),
        R[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, r.jsx)(eg.A, { "aria-hidden": "true", className: "size-5 shrink-0" })),
            (u = (0, r.jsx)(A.A, {
              id: "electron.onboarding.login.google.signIn",
              defaultMessage: "Continue with Google",
              description: "Button label for Google sign-in on desktop onboarding",
            })),
            (R[10] = d),
            (R[11] = u))
          : ((d = R[10]), (u = R[11])),
        R[12] !== c
          ? ((g = (0, r.jsxs)(p.$, {
              color: "outlineSurface",
              radius: "full",
              size: "auth",
              type: "button",
              onClick: c,
              children: [d, u],
            })),
            (R[12] = c),
            (R[13] = g))
          : (g = R[13]),
        R[14] !== z ? ((f = () => void z("apple")), (R[14] = z), (R[15] = f)) : (f = R[15]),
        R[16] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = (0, r.jsx)(q.PPn, {})),
            (x = (0, r.jsx)(A.A, {
              id: "electron.onboarding.login.apple.signIn",
              defaultMessage: "Continue with Apple",
              description: "Button on the desktop sign-in screen opening Apple authentication in the system browser",
            })),
            (R[16] = m),
            (R[17] = x))
          : ((m = R[16]), (x = R[17])),
        R[18] !== f
          ? ((b = (0, r.jsxs)(p.$, {
              color: "outlineSurface",
              radius: "full",
              size: "auth",
              type: "button",
              onClick: f,
              children: [m, x],
            })),
            (R[18] = f),
            (R[19] = b))
          : (b = R[19]),
        R[20] !== g || R[21] !== b || R[22] !== s
          ? ((y = (0, r.jsxs)("div", { className: "flex w-full flex-col gap-3", children: [s, g, b] })),
            (R[20] = g),
            (R[21] = b),
            (R[22] = s),
            (R[23] = y))
          : (y = R[23]),
        R[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (0, r.jsxs)("div", {
              className: "flex items-center gap-6 py-1 text-xs text-secondary",
              "aria-hidden": "true",
              children: [
                (0, r.jsx)("div", { className: "h-px flex-1 bg-border" }),
                (0, r.jsx)(A.A, {
                  id: "electron.onboarding.login.fallback.or",
                  defaultMessage: "OR",
                  description: "Separator between browser sign-in buttons and the email form on desktop sign-in",
                }),
                (0, r.jsx)("div", { className: "h-px flex-1 bg-border" }),
              ],
            })),
            (R[24] = w))
          : (w = R[24]),
        R[25] !== z
          ? ((k = (e) => {
              e.preventDefault()
              let t = new FormData(e.currentTarget).get("username")
              "string" == typeof t && z("email", t.trim())
            }),
            (R[25] = z),
            (R[26] = k))
          : (k = R[26]),
        R[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((v = (0, r.jsx)("span", {
              className: "sr-only",
              children: (0, r.jsx)(A.A, {
                id: "electron.onboarding.login.fallback.emailLabel",
                defaultMessage: "Email address",
                description: "Accessible label for the desktop sign-in email input",
              }),
            })),
            (R[27] = v))
          : (v = R[27]),
        R[28] !== G
          ? ((S = G.formatMessage({
              id: "electron.onboarding.login.fallback.emailPlaceholder",
              defaultMessage: "Email",
              description: "Placeholder in the desktop sign-in email input",
            })),
            (R[28] = G),
            (R[29] = S))
          : (S = R[29]),
        R[30] !== S
          ? ((_ = (0, r.jsxs)("label", {
              children: [
                v,
                (0, r.jsx)(h.pd, {
                  variant: "auth",
                  name: "username",
                  type: "email",
                  autoComplete: "email",
                  maxLength: 320,
                  required: !0,
                  placeholder: S,
                }),
              ],
            })),
            (R[30] = S),
            (R[31] = _))
          : (_ = R[31]),
        R[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = (0, r.jsx)(p.$, {
              color: "primary",
              radius: "full",
              size: "auth",
              type: "submit",
              children: (0, r.jsx)(A.A, {
                id: "electron.onboarding.login.fallback.continue",
                defaultMessage: "Continue",
                description:
                  "Button submitting the entered email address and continuing authentication in the system browser",
              }),
            })),
            (R[32] = C))
          : (C = R[32]),
        R[33] !== k || R[34] !== _
          ? ((M = (0, r.jsxs)("form", { className: "flex w-full flex-col gap-5", onSubmit: k, children: [_, C] })),
            (R[33] = k),
            (R[34] = _),
            (R[35] = M))
          : (M = R[35]),
        R[36] !== B || R[37] !== T
          ? ((N = B
              ? (0, r.jsx)(p.$, {
                  className: "self-center",
                  color: "ghostMuted",
                  size: "inline",
                  type: "button",
                  onClick: T,
                  children: (0, r.jsx)(A.A, {
                    id: "electron.onboarding.login.apikey.open.welcomeV2",
                    defaultMessage: "Sign in another way",
                    description: "Button label to open another sign-in method on v2 desktop onboarding",
                  }),
                })
              : null),
            (R[36] = B),
            (R[37] = T),
            (R[38] = N))
          : (N = R[38]),
        R[39] === Symbol.for("react.memo_cache_sentinel")
          ? ((E = (0, r.jsx)(eD.G, {
              appearance: "secondary",
              href: "https://openai.com/policies/terms-of-use/",
              initiator: "open_in_browser_bridge",
              openTarget: "external-browser",
              children: (0, r.jsx)(A.A, {
                id: "electron.onboarding.login.fallback.terms",
                defaultMessage: "Terms of use",
                description:
                  "Link below the desktop sign-in options opening OpenAI's terms of use in the system browser",
              }),
            })),
            (L = (0, r.jsx)("div", { "aria-hidden": "true", className: "h-3 w-px bg-border" })),
            (R[39] = E),
            (R[40] = L))
          : ((E = R[39]), (L = R[40])),
        R[41] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, r.jsxs)("div", {
              className: "flex flex-wrap items-center justify-center gap-3 text-xs text-secondary",
              children: [
                E,
                L,
                (0, r.jsx)(eD.G, {
                  appearance: "secondary",
                  href: "https://openai.com/policies/privacy-policy/",
                  initiator: "open_in_browser_bridge",
                  openTarget: "external-browser",
                  children: (0, r.jsx)(A.A, {
                    id: "electron.onboarding.login.fallback.privacy",
                    defaultMessage: "Privacy policy",
                    description:
                      "Link below the desktop sign-in options opening OpenAI's privacy policy in the system browser",
                  }),
                }),
              ],
            })),
            (R[41] = I))
          : (I = R[41]),
        R[42] !== y || R[43] !== M || R[44] !== N
          ? ((P = (0, r.jsx)("div", {
              className: "flex h-full w-full flex-col overflow-y-auto bg-surface text-default select-none",
              children: (0, r.jsx)("main", {
                className: "flex w-full shrink-0 grow flex-col items-center justify-center px-6 py-4",
                children: (0, r.jsxs)("div", {
                  className: "flex w-full max-w-sm flex-col gap-5",
                  children: [n, y, w, M, N, I],
                }),
              }),
            })),
            (R[42] = y),
            (R[43] = M),
            (R[44] = N),
            (R[45] = P))
          : (P = R[45]),
        P
      )
    }
    function e$(e) {
      let t,
        n,
        o,
        l = (0, i.c)(6),
        { children: a, description: s } = e
      return (
        l[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, r.jsx)(eM.A, { className: "size-10 shrink-0" })), (l[0] = t))
          : (t = l[0]),
        l[1] !== s
          ? ((n = (0, r.jsx)("p", {
              className: "text-center text-base leading-5 font-normal text-codex-description select-none",
              children: s,
            })),
            (l[1] = s),
            (l[2] = n))
          : (n = l[2]),
        l[3] !== a || l[4] !== n
          ? ((o = (0, r.jsx)("div", {
              className: "flex h-full w-full items-center justify-center overflow-hidden bg-surface pb-12 text-default",
              children: (0, r.jsxs)("div", {
                className: "flex w-[340px] flex-col items-center gap-8",
                children: [t, n, a],
              }),
            })),
            (l[3] = a),
            (l[4] = n),
            (l[5] = o))
          : (o = l[5]),
        o
      )
    }
    function eH(e) {
      let t,
        n,
        o,
        a,
        s,
        c,
        d,
        u,
        g,
        f,
        h,
        m,
        x,
        b,
        y,
        w,
        k = (0, i.c)(144),
        {
          allowApiKey: v,
          allowChatGpt: S,
          apiKeyHelpVariant: _,
          apiKeyValue: C,
          browserSessionProfiles: N,
          canCopySignInLink: E,
          isApiKeyEntryVisible: L,
          isOtherSignInMethodsVisible: I,
          isApiKeySignInPending: P,
          isChatGptSignInPending: z,
          showAmazonBedrockSignIn: T,
          showChatGptProviderSignIn: G,
          onApiKeySubmit: O,
          onApiKeyValueChange: K,
          onChatGptSignIn: W,
          onChatGptSignUp: D,
          onCopySignInLink: U,
          onPlaySnake: F,
          onResetApiKeyEntry: V,
          onShowApiKeyEntry: H,
          onShowOtherSignInMethods: Q,
          onHideOtherSignInMethods: Z,
          onShowBedrockSetup: Y,
          onShowGcpSetup: J,
        } = e,
        ee = (0, j.A)(),
        et = v && L,
        en = T || null != J,
        er = v && en && I && !et,
        ei = (0, B.Zj)(!!z && !et && "2502927686"),
        eo = R.appServices.chatGptBrowserSession,
        el = S && void 0 === N && null != eo
      k[0] !== el ? ((t = { enabled: el }), (k[0] = el), (k[1] = t)) : (t = k[1])
      let { data: ea, isPending: es } = (0, l.Ul)(eK, t),
        ec = ea?.eligible ?? !1,
        ed = el && es,
        eu = (0, l.Ul)(eE),
        ep = (0, B.Ou)((0, l.Ul)(eL)),
        eh = el && ec
      k[2] !== ep || k[3] !== eu || k[4] !== eh
        ? ((n = (function ({ eligible: e, isWindows: t, lookupLayer: n }) {
            if (!e) return { experience: "existing", enabled: !1, listAllAccounts: !1 }
            let r = n.get("experience", "existing")
            switch (r) {
              case "browser_lookup":
              case "browser_lookup_with_fallback":
                return { experience: r, enabled: !0, listAllAccounts: !0 }
              case "control":
                return { experience: r, enabled: !1, listAllAccounts: !1 }
              case "existing": {
                let e = n.get("enabled", !1)
                return { experience: r, enabled: e, listAllAccounts: e && (t || n.get("list_all_accounts", !1)) }
              }
              default:
                return { experience: "control", enabled: !1, listAllAccounts: !1 }
            }
          })({ eligible: eh, isWindows: eu, lookupLayer: ep })),
          (k[2] = ep),
          (k[3] = eu),
          (k[4] = eh),
          (k[5] = n))
        : (n = k[5])
      let { experience: em, enabled: ex, listAllAccounts: eb } = n,
        ey = (0, B.Ou)("1561420571")
      k[6] !== em || k[7] !== ed || k[8] !== ey || k[9] !== G
        ? ((o = !ed && "existing" === em && (G ?? ey.get("enabled", !1))),
          (k[6] = em),
          (k[7] = ed),
          (k[8] = ey),
          (k[9] = G),
          (k[10] = o))
        : (o = k[10])
      let ew = o,
        ek = (0, B.Ou)("1072464827")
      k[11] !== ek || k[12] !== _ || k[13] !== et
        ? ((a = _ ?? (et ? ek.get("api_key_help_variant", "control") : "control")),
          (k[11] = ek),
          (k[12] = _),
          (k[13] = et),
          (k[14] = a))
        : (a = k[14])
      let ev = a,
        eA = "link" === ev || "explanation" === ev || "explanation-with-chatgpt" === ev ? ev : "control",
        eS = et && ("explanation" === eA || "explanation-with-chatgpt" === eA)
      k[15] !== ep || k[16] !== eu
        ? ((s = !eu && ep.get("update_cta_for_sign_in_with_api_key", !1)), (k[15] = ep), (k[16] = eu), (k[17] = s))
        : (s = k[17])
      let eN = s,
        eI = el && ec
      k[18] !== ep || k[19] !== eI || k[20] !== eu
        ? ((c = !eu && eI && ep.get("update_cta_for_sign_in_with_api_key_with_browser_lookup", !1)),
          (k[18] = ep),
          (k[19] = eI),
          (k[20] = eu),
          (k[21] = c))
        : (c = k[21])
      let eP = c,
        eR = eN || eP
      k[22] !== ex ? ((d = { enabled: ex }), (k[22] = ex), (k[23] = d)) : (d = k[23])
      let { data: eB, isPending: ez, isFetching: eT, isSuccess: eG } = (0, l._U)(eW, eb, d),
        eO = void 0 === eB ? null : eB,
        eD = ex && ez,
        eF = S ? (N ?? null) : null
      if (
        (S && ex && void 0 === N && !eD && (eF = eO),
        k[24] !== v ||
          k[25] !== S ||
          k[26] !== eA ||
          k[27] !== C ||
          k[28] !== ex ||
          k[29] !== eF ||
          k[30] !== E ||
          k[31] !== em ||
          k[32] !== en ||
          k[33] !== ee ||
          k[34] !== L ||
          k[35] !== P ||
          k[36] !== ed ||
          k[37] !== eT ||
          k[38] !== eD ||
          k[39] !== eG ||
          k[40] !== z ||
          k[41] !== O ||
          k[42] !== K ||
          k[43] !== W ||
          k[44] !== D ||
          k[45] !== U ||
          k[46] !== Z ||
          k[47] !== F ||
          k[48] !== V ||
          k[49] !== H ||
          k[50] !== Y ||
          k[51] !== J ||
          k[52] !== Q ||
          k[53] !== eO?.length ||
          k[54] !== T ||
          k[55] !== eS ||
          k[56] !== et ||
          k[57] !== ei ||
          k[58] !== ew ||
          k[59] !== er ||
          k[60] !== eR)
      ) {
        b = Symbol.for("react.early_return_sentinel")
        e: {
          let e,
            t,
            n,
            i,
            o,
            l,
            a,
            s,
            c = eF?.slice(0, 3),
            d = (c?.length ?? 0) > 0 && !et && !er
          if (er) {
            let t
            ;(k[68] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, r.jsx)(A.A, {
                  id: "electron.onboarding.login.otherMethods.title",
                  defaultMessage: "Sign in another way",
                  description: "Title for choosing an alternative sign-in method",
                })),
                (k[68] = t))
              : (t = k[68]),
              (e = t))
          } else if (!S || eS) {
            let t
            ;(k[69] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, r.jsx)(A.A, {
                  id: "electron.onboarding.login.welcomeV2.title.apiKey",
                  defaultMessage: "Sign in with an API key",
                  description:
                    "Title on desktop onboarding when explaining API key sign-in or when only API key sign-in is allowed",
                })),
                (k[69] = t))
              : (t = k[69]),
              (e = t))
          } else {
            let t
            ;(k[70] !== d
              ? ((t = d
                  ? (0, r.jsx)(A.A, {
                      id: "electron.onboarding.login.browserSession.welcomeBack",
                      defaultMessage: "Welcome back",
                      description: "Title on desktop onboarding when a signed-in ChatGPT browser session was found",
                    })
                  : (0, r.jsx)(A.A, {
                      id: "electron.onboarding.login.welcomeV2.title.chatgptSignIn",
                      defaultMessage: "Sign in to ChatGPT",
                      description: "Title on the v2 desktop onboarding login page for streamlined ChatGPT sign-in",
                    })),
                (k[70] = d),
                (k[71] = t))
              : (t = k[71]),
              (e = t))
          }
          if (S && z && !et) {
            let e, t, n, i, o, l
            ;(k[72] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(A.A, {
                  id: "electron.onboarding.login.browserPending.welcomeV2",
                  defaultMessage: "Continue signing in with your browser",
                  description: "Message shown while ChatGPT sign-in continues in the browser",
                })),
                (k[72] = e))
              : (e = k[72]),
              k[73] !== W ? ((t = () => void W()), (k[73] = W), (k[74] = t)) : (t = k[74]),
              k[75] === Symbol.for("react.memo_cache_sentinel")
                ? ((n = (0, r.jsx)(A.A, {
                    id: "electron.onboarding.login.chatgpt.cancel.welcomeV2",
                    defaultMessage: "Cancel sign-in",
                    description: "Cancel button label while ChatGPT sign-in is in progress on desktop onboarding",
                  })),
                  (k[75] = n))
                : (n = k[75]),
              k[76] !== t
                ? ((i = (0, r.jsx)("button", {
                    className:
                      "flex h-[42px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-codex-description hover:bg-primary-ghost-hover",
                    type: "button",
                    onClick: t,
                    children: n,
                  })),
                  (k[76] = t),
                  (k[77] = i))
                : (i = k[77]),
              k[78] !== E || k[79] !== U || k[80] !== ei
                ? ((o = ei
                    ? (0, r.jsxs)("div", {
                        className: "flex flex-wrap items-center justify-center gap-2",
                        children: [
                          (0, r.jsx)("span", {
                            className: "py-2 text-sm leading-5 font-normal text-codex-description select-none",
                            children: (0, r.jsx)(A.A, {
                              id: "electron.onboarding.login.browserDidNotOpen",
                              defaultMessage: "Browser didn't open?",
                              description:
                                "Helper text before the Copy sign-in link action while desktop browser sign-in is pending",
                            }),
                          }),
                          (0, r.jsxs)(p.$, {
                            color: "ghost",
                            disabled: !E,
                            size: "dialog",
                            onClick: () => void U(),
                            children: [
                              (0, r.jsx)(q.yDG, {}),
                              (0, r.jsx)(A.A, {
                                id: "electron.onboarding.login.copyLink",
                                defaultMessage: "Copy sign-in link",
                                description:
                                  "Button that copies the active sign-in URL so the user can continue signing in in another browser without restarting",
                              }),
                            ],
                          }),
                        ],
                      })
                    : null),
                  (k[78] = E),
                  (k[79] = U),
                  (k[80] = ei),
                  (k[81] = o))
                : (o = k[81]),
              k[82] !== i || k[83] !== o
                ? ((l = (0, r.jsx)(e$, {
                    description: e,
                    children: (0, r.jsxs)("div", {
                      className: "flex w-full flex-col items-center gap-6",
                      children: [i, o],
                    }),
                  })),
                  (k[82] = i),
                  (k[83] = o),
                  (k[84] = l))
                : (l = k[84]),
              (b = l))
            break e
          }
          if (!et && (ed || eD)) {
            let e
            ;(k[85] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsxs)("div", {
                  className:
                    "flex h-full w-full flex-col items-center justify-center gap-3 bg-surface text-codex-description",
                  children: [
                    (0, r.jsx)(M.y, { className: "h-4 w-4 text-default" }),
                    (0, r.jsx)(A.A, {
                      id: "electron.onboarding.login.loading",
                      defaultMessage: "Loading…",
                      description: "Loading state while the desktop login page prepares the sign-in experience",
                    }),
                  ],
                })),
                (k[85] = e))
              : (e = k[85]),
              (b = e))
            break e
          }
          if ("browser_lookup_with_fallback" === em && ex && eG && !eT && eO?.length === 0 && !et && !er) {
            let e,
              t = en ? Q : H
            ;(k[86] !== v || k[87] !== W || k[88] !== t
              ? ((e = (0, r.jsx)(eq, { allowOtherSignInMethods: v, onChatGptSignIn: W, onShowOtherSignInMethods: t })),
                (k[86] = v),
                (k[87] = W),
                (k[88] = t),
                (k[89] = e))
              : (e = k[89]),
              (b = e))
            break e
          }
          let y = er && "px-6"
          ;(k[90] !== y
            ? ((x = (0, ej.A)(
                "flex h-full w-full scroll-pt-(--height-toolbar-sm) flex-col overflow-y-auto bg-surface pb-6 text-default",
                y,
              )),
              (k[90] = y),
              (k[91] = x))
            : (x = k[91]),
            (u =
              "flex w-[340px] max-w-full shrink-0 grow flex-col items-center justify-center gap-8 self-center py-(--height-toolbar-sm)"))
          let w = eS ? "gap-5" : "gap-4"
          ;(k[92] !== w
            ? ((t = (0, ej.A)("flex w-full flex-col items-center", w)), (k[92] = w), (k[93] = t))
            : (t = k[93]),
            k[94] !== ee
              ? ((n = ee.formatMessage({
                  id: "electron.onboarding.login.snake.start",
                  defaultMessage: "Play Snake",
                  description: "Aria label for the ChatGPT logo button to start Snake",
                })),
                (k[94] = ee),
                (k[95] = n))
              : (n = k[95]),
            k[96] !== er
              ? ((i = er
                  ? (0, r.jsx)("img", { alt: "", className: "size-12 invert-5 dark:invert-95", src: X })
                  : (0, r.jsx)(eM.A, { className: "shrink-0" })),
                (k[96] = er),
                (k[97] = i))
              : (i = k[97]),
            k[98] !== F || k[99] !== n || k[100] !== i
              ? ((o = (0, r.jsx)(p.$, {
                  className: "group justify-center",
                  color: "ghostMuted",
                  radius: "full",
                  size: "inline",
                  type: "button",
                  "aria-label": n,
                  onClick: F,
                  children: i,
                })),
                (k[98] = F),
                (k[99] = n),
                (k[100] = i),
                (k[101] = o))
              : (o = k[101]),
            k[102] !== e
              ? ((l = (0, r.jsx)("h1", {
                  className: "w-[316px] max-w-full text-center text-[28px] leading-9 font-normal text-default",
                  children: e,
                })),
                (k[102] = e),
                (k[103] = l))
              : (l = k[103]),
            k[104] !== eS
              ? ((a = eS
                  ? (0, r.jsx)("p", {
                      className: "text-center text-base leading-6 text-secondary select-none",
                      children: (0, r.jsx)(A.A, {
                        id: "electron.onboarding.login.apikey.explanation",
                        defaultMessage: "Use OpenAI’s developer platform with separate, usage-based billing",
                        description:
                          "Description below the API key sign-in heading explaining that OpenAI API usage has its own usage-based billing, separate from ChatGPT",
                      }),
                    })
                  : null),
                (k[104] = eS),
                (k[105] = a))
              : (a = k[105]),
            k[106] !== d
              ? ((s = d
                  ? (0, r.jsx)("p", {
                      className: "text-center text-[14px] leading-5 text-codex-description",
                      children: (0, r.jsx)(A.A, {
                        id: "electron.onboarding.login.browserSession.chooseAccount",
                        defaultMessage: "Choose an account to continue to ChatGPT",
                        description:
                          "Instruction on desktop onboarding when a signed-in ChatGPT browser session was found",
                      }),
                    })
                  : null),
                (k[106] = d),
                (k[107] = s))
              : (s = k[107]),
            k[108] !== t || k[109] !== o || k[110] !== l || k[111] !== a || k[112] !== s
              ? ((g = (0, r.jsxs)("div", { className: t, children: [o, l, a, s] })),
                (k[108] = t),
                (k[109] = o),
                (k[110] = l),
                (k[111] = a),
                (k[112] = s),
                (k[113] = g))
              : (g = k[113]),
            k[114] !== v ||
            k[115] !== S ||
            k[116] !== eA ||
            k[117] !== C ||
            k[118] !== L ||
            k[119] !== P ||
            k[120] !== z ||
            k[121] !== O ||
            k[122] !== K ||
            k[123] !== W ||
            k[124] !== V ||
            k[125] !== H ||
            k[126] !== et
              ? ((f = et
                  ? (0, r.jsxs)("div", {
                      className: "flex w-full flex-col gap-8",
                      children: [
                        (0, r.jsx)(eV.c, {
                          allowApiKey: v,
                          allowChatGpt: S,
                          apiKeyHelp: "control" !== eA ? (0, r.jsx)(eU, {}) : null,
                          apiKeyValue: C,
                          isApiKeyEntryVisible: L,
                          isApiKeySignInPending: P,
                          isChatGptSignInPending: z,
                          onApiKeySecondaryAction: V,
                          onApiKeySubmit: O,
                          onApiKeyValueChange: K,
                          onChatGptSignIn: W,
                          onShowApiKeyEntry: H,
                          apiKeySecondaryActionLabel: (0, r.jsx)(A.A, {
                            id: "electron.onboarding.login.apikey.cancel",
                            defaultMessage: "Cancel",
                            description: "Cancel button label for API key entry on desktop onboarding",
                          }),
                        }),
                        "explanation-with-chatgpt" === eA && S
                          ? (0, r.jsxs)("div", {
                              className:
                                "flex flex-col items-center gap-2 text-center text-sm text-secondary select-none",
                              children: [
                                (0, r.jsx)("p", {
                                  children: (0, r.jsx)(A.A, {
                                    id: "electron.onboarding.login.apikey.chatGptAlternative",
                                    defaultMessage: "Want to use your ChatGPT account?",
                                    description:
                                      "Prompt below the API key form offering ChatGPT account sign-in as an alternative",
                                  }),
                                }),
                                (0, r.jsx)(p.$, {
                                  className: "underline",
                                  color: "ghostMuted",
                                  size: "inline",
                                  type: "button",
                                  disabled: P || z,
                                  onClick: () => {
                                    ;(V(), W())
                                  },
                                  children: (0, r.jsx)(A.A, {
                                    id: "electron.onboarding.login.apikey.signInWithChatGpt",
                                    defaultMessage: "Sign in with ChatGPT",
                                    description:
                                      "Button below the API key form that switches to ChatGPT account sign-in and opens the browser",
                                  }),
                                }),
                              ],
                            })
                          : null,
                      ],
                    })
                  : null),
                (k[114] = v),
                (k[115] = S),
                (k[116] = eA),
                (k[117] = C),
                (k[118] = L),
                (k[119] = P),
                (k[120] = z),
                (k[121] = O),
                (k[122] = K),
                (k[123] = W),
                (k[124] = V),
                (k[125] = H),
                (k[126] = et),
                (k[127] = f))
              : (f = k[127]),
            k[128] !== Z || k[129] !== H || k[130] !== Y || k[131] !== J || k[132] !== T || k[133] !== er
              ? ((h = er
                  ? (0, r.jsxs)("div", {
                      className: "flex w-full flex-col items-center gap-3",
                      children: [
                        (0, r.jsxs)(p.$, {
                          className: "w-full",
                          radius: "full",
                          size: "onboardingAction",
                          type: "button",
                          onClick: H,
                          children: [
                            (0, r.jsx)(eC.A, { "aria-hidden": "true", className: "size-4" }),
                            (0, r.jsx)(A.A, {
                              id: "electron.onboarding.login.otherMethods.openaiApiKey",
                              defaultMessage: "OpenAI API Key",
                              description: "Button label to open the existing OpenAI API key sign-in form",
                            }),
                          ],
                        }),
                        T
                          ? (0, r.jsxs)(p.$, {
                              className: "w-full",
                              color: "outlineSurface",
                              radius: "full",
                              size: "onboardingAction",
                              type: "button",
                              onClick: Y,
                              children: [
                                (0, r.jsx)("img", {
                                  alt: "",
                                  className: "h-2.5 dark:hue-rotate-180 dark:invert",
                                  src: $,
                                }),
                                (0, r.jsx)(A.A, {
                                  id: "electron.onboarding.login.bedrock.open.welcomeV2",
                                  defaultMessage: "Use Amazon Bedrock",
                                  description: "Button label to set up Amazon Bedrock on desktop onboarding",
                                }),
                              ],
                            })
                          : null,
                        null != J ? (0, r.jsx)(ef, { onClick: J }) : null,
                        (0, r.jsx)(p.$, {
                          color: "ghostTertiary",
                          onClick: Z,
                          children: (0, r.jsx)(A.A, {
                            id: "electron.onboarding.login.otherMethods.back",
                            defaultMessage: "Back",
                            description:
                              "Button label to return from alternative sign-in methods to the main sign-in screen",
                          }),
                        }),
                      ],
                    })
                  : null),
                (k[128] = Z),
                (k[129] = H),
                (k[130] = Y),
                (k[131] = J),
                (k[132] = T),
                (k[133] = er),
                (k[134] = h))
              : (h = k[134]),
            (m =
              et || er
                ? null
                : (0, r.jsxs)("div", {
                    className: "flex w-full flex-col items-center gap-3",
                    children: [
                      S &&
                        (null != c && c.length > 0
                          ? (0, r.jsxs)(r.Fragment, {
                              children: [
                                c.map((e) => (0, r.jsx)(eQ, { profile: e, onChatGptSignIn: W }, e.email)),
                                (0, r.jsxs)("div", {
                                  className: "flex w-full items-center gap-4 py-2",
                                  "aria-hidden": "true",
                                  children: [
                                    (0, r.jsx)("span", { className: "h-px flex-1 bg-border" }),
                                    (0, r.jsx)("span", {
                                      className: "text-[12px] font-medium text-codex-description",
                                      children: (0, r.jsx)(A.A, {
                                        id: "electron.onboarding.login.browserSession.or",
                                        defaultMessage: "OR",
                                        description:
                                          "Divider label between the recognized ChatGPT browser account and other sign-in options",
                                      }),
                                    }),
                                    (0, r.jsx)("span", { className: "h-px flex-1 bg-border" }),
                                  ],
                                }),
                                (0, r.jsx)("button", {
                                  className:
                                    "flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover",
                                  type: "button",
                                  onClick: () => W("other-account"),
                                  children: (0, r.jsx)(A.A, {
                                    id: "electron.onboarding.login.browserSession.otherAccount",
                                    defaultMessage: "Use another account",
                                    description:
                                      "Button label to sign in with a different ChatGPT account after a browser account was recognized",
                                  }),
                                }),
                              ],
                            })
                          : (0, r.jsxs)("button", {
                              className:
                                "flex h-[48px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-transparent bg-primary-solid text-[14px] leading-5 font-medium text-primary-solid hover:bg-text/80",
                              type: "button",
                              onClick: () => W(),
                              children: [
                                (0, r.jsx)(eC.A, { className: "size-6 shrink-0 text-primary-solid" }),
                                (0, r.jsx)(A.A, {
                                  id: "electron.onboarding.login.chatgpt.continueToSignIn",
                                  defaultMessage: "Continue to sign in",
                                  description: "Button label for streamlined ChatGPT sign-in on desktop onboarding",
                                }),
                              ],
                            })),
                      S && ew
                        ? (0, r.jsxs)(r.Fragment, {
                            children: [
                              (0, r.jsxs)("button", {
                                className:
                                  "flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover",
                                type: "button",
                                onClick: () => W("google"),
                                children: [
                                  (0, r.jsx)(eg.A, { className: "size-5 shrink-0", "aria-hidden": "true" }),
                                  (0, r.jsx)(A.A, {
                                    id: "electron.onboarding.login.google.signIn",
                                    defaultMessage: "Continue with Google",
                                    description: "Button label for Google sign-in on desktop onboarding",
                                  }),
                                ],
                              }),
                              (0, r.jsxs)("button", {
                                className:
                                  "flex h-[46px] w-full cursor-interaction items-center justify-center gap-2 rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover",
                                type: "button",
                                onClick: () => W("microsoft"),
                                children: [
                                  (0, r.jsx)(e_.A, { className: "size-5 shrink-0", "aria-hidden": "true" }),
                                  (0, r.jsx)(A.A, {
                                    id: "electron.onboarding.login.microsoft.signIn",
                                    defaultMessage: "Continue with Microsoft",
                                    description: "Button label for Microsoft sign-in on desktop onboarding",
                                  }),
                                ],
                              }),
                            ],
                          })
                        : null,
                      v
                        ? (0, r.jsx)("button", {
                            className:
                              "flex h-[46px] w-full cursor-interaction items-center justify-center rounded-full border border-default bg-surface text-[14px] leading-5 font-medium text-default hover:bg-primary-ghost-hover",
                            type: "button",
                            onClick: en ? Q : H,
                            children:
                              en || (S && !eR)
                                ? (0, r.jsx)(A.A, {
                                    id: "electron.onboarding.login.apikey.open.welcomeV2",
                                    defaultMessage: "Sign in another way",
                                    description: "Button label to open another sign-in method on v2 desktop onboarding",
                                  })
                                : (0, r.jsx)(A.A, {
                                    id: "electron.onboarding.login.apikey.open.explicit.welcomeV2",
                                    defaultMessage: "Sign in with an API key",
                                    description: "Button label to open API key sign-in on v2 desktop onboarding",
                                  }),
                          })
                        : null,
                      S
                        ? (0, r.jsx)("button", {
                            className:
                              "flex h-9 cursor-interaction items-center justify-center px-2 text-[14px] leading-5 font-medium text-codex-description underline hover:text-default",
                            type: "button",
                            onClick: D,
                            children: (0, r.jsx)(A.A, {
                              id: "electron.onboarding.login.signup.welcomeV2",
                              defaultMessage: "Sign up",
                              description: "Sign-up link on v2 desktop onboarding",
                            }),
                          })
                        : null,
                    ],
                  })))
        }
        ;((k[24] = v),
          (k[25] = S),
          (k[26] = eA),
          (k[27] = C),
          (k[28] = ex),
          (k[29] = eF),
          (k[30] = E),
          (k[31] = em),
          (k[32] = en),
          (k[33] = ee),
          (k[34] = L),
          (k[35] = P),
          (k[36] = ed),
          (k[37] = eT),
          (k[38] = eD),
          (k[39] = eG),
          (k[40] = z),
          (k[41] = O),
          (k[42] = K),
          (k[43] = W),
          (k[44] = D),
          (k[45] = U),
          (k[46] = Z),
          (k[47] = F),
          (k[48] = V),
          (k[49] = H),
          (k[50] = Y),
          (k[51] = J),
          (k[52] = Q),
          (k[53] = eO?.length),
          (k[54] = T),
          (k[55] = eS),
          (k[56] = et),
          (k[57] = ei),
          (k[58] = ew),
          (k[59] = er),
          (k[60] = eR),
          (k[61] = u),
          (k[62] = g),
          (k[63] = f),
          (k[64] = h),
          (k[65] = m),
          (k[66] = x),
          (k[67] = b))
      } else ((u = k[61]), (g = k[62]), (f = k[63]), (h = k[64]), (m = k[65]), (x = k[66]), (b = k[67]))
      return b !== Symbol.for("react.early_return_sentinel")
        ? b
        : (k[135] !== u || k[136] !== g || k[137] !== f || k[138] !== h || k[139] !== m
            ? ((y = (0, r.jsxs)("div", { className: u, children: [g, f, h, m] })),
              (k[135] = u),
              (k[136] = g),
              (k[137] = f),
              (k[138] = h),
              (k[139] = m),
              (k[140] = y))
            : (y = k[140]),
          k[141] !== x || k[142] !== y
            ? ((w = (0, r.jsx)("div", { className: x, children: y })), (k[141] = x), (k[142] = y), (k[143] = w))
            : (w = k[143]),
          w)
    }
    function eQ(e) {
      let t,
        n,
        o,
        l,
        a,
        c,
        d,
        u,
        g,
        f,
        h,
        m,
        x,
        b,
        y,
        w = (0, i.c)(39),
        { profile: k, onChatGptSignIn: v } = e,
        A = (0, j.A)(),
        S = (0, eA.Dv)(k.avatarUrl),
        [_, C] = (0, s.useState)(null)
      return (
        w[0] !== A || w[1] !== k.email || w[2] !== k.name
          ? ((n = (o = k.name?.trim() || null) ?? k.email),
            (t = p.$),
            (l = "w-full justify-start text-start"),
            (a = "outlineSurface"),
            (c = "large"),
            (d = "auth"),
            (u = "button"),
            (g =
              null == o
                ? A.formatMessage(
                    {
                      id: "electron.onboarding.login.browserSession.continueAs",
                      defaultMessage: "Continue as {accountName}",
                      description:
                        "Accessible label for a recognized ChatGPT browser account button on desktop onboarding. The accountName placeholder is the account email address.",
                    },
                    { accountName: n },
                  )
                : A.formatMessage(
                    {
                      id: "electron.onboarding.login.browserSession.continueAsWithEmail",
                      defaultMessage: "Continue as {accountName}, {email}",
                      description:
                        "Accessible label for a recognized ChatGPT browser account button on desktop onboarding when the account has a display name. The accountName placeholder is the display name and the email placeholder distinguishes accounts that share that name.",
                    },
                    { accountName: n, email: k.email },
                  )),
            (w[0] = A),
            (w[1] = k.email),
            (w[2] = k.name),
            (w[3] = t),
            (w[4] = n),
            (w[5] = o),
            (w[6] = l),
            (w[7] = a),
            (w[8] = c),
            (w[9] = d),
            (w[10] = u),
            (w[11] = g))
          : ((t = w[3]),
            (n = w[4]),
            (o = w[5]),
            (l = w[6]),
            (a = w[7]),
            (c = w[8]),
            (d = w[9]),
            (u = w[10]),
            (g = w[11])),
        w[12] !== v || w[13] !== k.email
          ? ((f = () => v("signin", k.email)), (w[12] = v), (w[13] = k.email), (w[14] = f))
          : (f = w[14]),
        w[15] !== n || w[16] !== _ || w[17] !== k.email || w[18] !== S
          ? ((h =
              null != S && S !== _
                ? (0, r.jsx)("img", {
                    src: S,
                    alt: "",
                    className: "size-10 shrink-0 rounded-full",
                    onError: () => {
                      C(S)
                    },
                  })
                : (0, r.jsx)(eS.e, { alt: "", colorKey: k.email, name: n, size: "row", src: null })),
            (w[15] = n),
            (w[16] = _),
            (w[17] = k.email),
            (w[18] = S),
            (w[19] = h))
          : (h = w[19]),
        w[20] !== n
          ? ((m = (0, r.jsx)("span", {
              className: "block truncate text-[14px] leading-5 font-medium text-default",
              children: n,
            })),
            (w[20] = n),
            (w[21] = m))
          : (m = w[21]),
        w[22] !== k.email || w[23] !== o
          ? ((x =
              null == o
                ? null
                : (0, r.jsx)("span", {
                    className: "block truncate text-[13px] leading-5 text-codex-description",
                    children: k.email,
                  })),
            (w[22] = k.email),
            (w[23] = o),
            (w[24] = x))
          : (x = w[24]),
        w[25] !== x || w[26] !== m
          ? ((b = (0, r.jsxs)("span", { className: "min-w-0 flex-1", children: [m, x] })),
            (w[25] = x),
            (w[26] = m),
            (w[27] = b))
          : (b = w[27]),
        w[28] !== t ||
        w[29] !== l ||
        w[30] !== b ||
        w[31] !== a ||
        w[32] !== c ||
        w[33] !== d ||
        w[34] !== u ||
        w[35] !== g ||
        w[36] !== f ||
        w[37] !== h
          ? ((y = (0, r.jsxs)(t, {
              className: l,
              color: a,
              radius: c,
              size: d,
              type: u,
              "aria-label": g,
              onClick: f,
              children: [h, b],
            })),
            (w[28] = t),
            (w[29] = l),
            (w[30] = b),
            (w[31] = a),
            (w[32] = c),
            (w[33] = d),
            (w[34] = u),
            (w[35] = g),
            (w[36] = f),
            (w[37] = h),
            (w[38] = y))
          : (y = w[38]),
        y
      )
    }
    function eZ(e) {
      let t,
        n,
        p,
        h,
        G,
        O,
        K,
        W,
        F,
        V,
        q,
        $,
        H,
        Q,
        Z,
        X,
        Y,
        J,
        ee,
        et,
        en,
        er,
        eo,
        el,
        eu,
        eg,
        ef,
        ex,
        eb,
        ey,
        ew,
        ek = (0, i.c)(134),
        { workspaceRecovery: ej } = e,
        eA = void 0 !== ej && ej,
        eS = (0, l.gh)(x.u),
        e_ = (0, g.KD)(),
        eC = (0, o.Zp)(),
        eM = (0, j.A)()
      ek[0] !== eS
        ? ((n = (e) => {
            let t = eS.get(N.x2)
            return null != t ? (0, I.E)(e, t.pathname, t.search) : e
          }),
          (ek[0] = eS),
          (ek[1] = n))
        : (n = ek[1])
      let eN = n,
        eE = (0, v.jE)(),
        eL = (0, l._U)(eh.Q, b.fI),
        eI = "ready" === eL.status && eL.chatgpt,
        eP = "ready" === eL.status && eL.api,
        eR = (0, l.Ul)(L.$f)
      ek[2] !== eR
        ? ((p = null == eR ? null : { hasPreviouslyCompletedOnboarding: eR }), (ek[2] = eR), (ek[3] = p))
        : (p = ek[3])
      let eB = p,
        ez = (0, B.AS)()
      ek[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = { name: "onboarding.gcp-sign-in" }), (ek[4] = h))
        : (h = ek[4])
      let { isCapable: eT } = (0, l._U)(S.G, h)
      ek[5] !== eM || ek[6] !== eS
        ? ((G = (e) => {
            eS.get(m.Id).warning(
              eM.formatMessage(
                {
                  id: "electron.onboarding.login.error",
                  defaultMessage: "Sign-in failed: {rawMessage}",
                  description: "Toast shown when sign-in fails on the desktop onboarding page",
                },
                { rawMessage: e },
              ),
            )
          }),
          (ek[5] = eM),
          (ek[6] = eS),
          (ek[7] = G))
        : (G = ek[7])
      let eG = G,
        [eO, eK] = (0, s.useState)(null),
        eW = (0, l._U)(C.b, b.fI),
        eD = (0, l.Ul)(u.f2),
        eU = null != eD ? eD.authUrl : eW?.authUrl,
        eF = null != eO || null != eD,
        eV = (0, s.useRef)(null)
      ;(ek[8] !== eS.node
        ? ((O = () => () => {
            u.UL.has(eS.node) || eV.current?.abort()
          }),
          (ek[8] = eS.node),
          (ek[9] = O))
        : (O = ek[9]),
        ek[10] !== eS ? ((K = [eS]), (ek[10] = eS), (ek[11] = K)) : (K = ek[11]),
        (0, s.useEffect)(O, K),
        ek[12] !== eI
          ? ((W = () => {
              eI || eV.current?.abort()
            }),
            (F = [eI]),
            (ek[12] = eI),
            (ek[13] = W),
            (ek[14] = F))
          : ((W = ek[13]), (F = ek[14])),
        (0, s.useEffect)(W, F))
      let [eq, e$] = (0, s.useState)(!1),
        [eQ, eZ] = (0, s.useState)(!1),
        [e0, e1] = (0, s.useState)(!1),
        [e2, e3] = (0, s.useState)(""),
        [e4, e5] = (0, s.useState)(null),
        e6 = null != e4
      ;(ek[15] !== e4
        ? ((V = () => () => e4?.abort()), (q = [e4]), (ek[15] = e4), (ek[16] = V), (ek[17] = q))
        : ((V = ek[16]), (q = ek[17])),
        (0, s.useEffect)(V, q),
        ek[18] !== eP || ek[19] !== e4
          ? (($ = () => {
              eP || e4?.abort()
            }),
            (H = [eP, e4]),
            (ek[18] = eP),
            (ek[19] = e4),
            (ek[20] = $),
            (ek[21] = H))
          : (($ = ek[20]), (H = ek[21])),
        (0, s.useEffect)($, H))
      let [e7, e8] = (0, s.useState)(!1),
        [e9, te] = (0, s.useState)(null),
        tt = (0, l.Ul)(ea.sW),
        tn = (0, s.useRef)(0),
        tr = (0, s.useRef)(null)
      ek[22] !== eS
        ? ((Q = () => {
            ;(eS.set(L.gR, !1), eS.set(L.rz, !0))
          }),
          (ek[22] = eS),
          (ek[23] = Q))
        : (Q = ek[23])
      let ti = Q
      ek[24] === Symbol.for("react.memo_cache_sentinel")
        ? ((Z = () => {
            ;(e$(!1), e5(null), e3(""))
          }),
          (ek[24] = Z))
        : (Z = ek[24])
      let to = Z
      ek[25] !== eL.api || ek[26] !== eL.status || ek[27] !== eB || ek[28] !== eS
        ? ((X = () => {
            null != eB &&
              "ready" === eL.status &&
              eL.api &&
              ((0, P.yy)(eS, k.CodexLoginMethodSelected, { method: "apikey", ...eB }), e$(!0))
          }),
          (ek[25] = eL.api),
          (ek[26] = eL.status),
          (ek[27] = eB),
          (ek[28] = eS),
          (ek[29] = X))
        : (X = ek[29])
      let tl = X
      ek[30] !== eM || ek[31] !== eS
        ? ((Y = async () => {
            let e = (tn.current = tn.current + 1)
            if (null == R.appServices.appServerLifecycle)
              return void te((e) =>
                null == e
                  ? null
                  : {
                      ...e,
                      isDetecting: !1,
                      errorMessage: eM.formatMessage({
                        id: "electron.onboarding.login.bedrock.unavailable",
                        defaultMessage: "Amazon Bedrock sign-in is unavailable on this host",
                        description: "Error when the desktop host does not support Amazon Bedrock sign-in",
                      }),
                    },
              )
            te(eJ)
            try {
              let t = await (0, U.Y_)(eS)
              te((n) => (null == n || e !== tn.current ? n : { ...n, detectedCredentials: t, isDetecting: !1 }))
            } catch (t) {
              te((n) =>
                null == n || e !== tn.current
                  ? n
                  : (0, a.Rg6)(t, "account/bedrock/discover")
                    ? { ...n, errorMessage: null, isDetecting: !1, supportsAwsCredentials: !1 }
                    : { ...n, errorMessage: (0, a.Rt_)(t), isDetecting: !1 },
              )
            }
          }),
          (ek[30] = eM),
          (ek[31] = eS),
          (ek[32] = Y))
        : (Y = ek[32])
      let ta = Y
      ek[33] !== ta || ek[34] !== eS
        ? ((J = () => {
            ;(te({
              detectedCredentials: null,
              errorMessage: null,
              isDetecting: !0,
              isSubmitting: !1,
              supportsAwsCredentials: !0,
              supportsAccessKeys: (0, a.JFB)(eS.get(_.B, b.fI), "bedrockAccessKeysLogin"),
            }),
              ta())
          }),
          (ek[33] = ta),
          (ek[34] = eS),
          (ek[35] = J))
        : (J = ek[35])
      let ts = J
      ek[36] !== eN || ek[37] !== eC || ek[38] !== eS || ek[39] !== ti || ek[40] !== e_ || ek[41] !== eA
        ? ((ee = async () => {
            if (eA) {
              ;(e_(), await eC(eN("/"), { replace: !0 }))
              return
            }
            ;(ti(), eS.set(L.pi, !0), eS.set(E.Z, void 0), e_(), await eC(eN("/welcome"), { replace: !0 }))
          }),
          (ek[36] = eN),
          (ek[37] = eC),
          (ek[38] = eS),
          (ek[39] = ti),
          (ek[40] = e_),
          (ek[41] = eA),
          (ek[42] = ee))
        : (ee = ek[42])
      let tc = ee
      ek[43] !== tc
        ? ((et = async () => {
            ;(0, ea.iM)()?.status === "pending" && ((0, ea.EN)({ status: "complete" }), await tc())
          }),
          (ek[43] = tc),
          (ek[44] = et))
        : (et = ek[44])
      let td = et,
        tu = (0, s.useEffectEvent)(td)
      ;(ek[45] !== tu || ek[46] !== eS
        ? ((en = () =>
            eS.watch((e) => {
              let { get: t } = e,
                n = t(ea.sW)
              n?.status === "pending" && null != n.warning && t(ea.sL) && tu()
            })),
          (ek[45] = tu),
          (ek[46] = eS),
          (ek[47] = en))
        : (en = ek[47]),
        ek[48] !== eS ? ((er = [eS]), (ek[48] = eS), (ek[49] = er)) : (er = ek[49]),
        (0, s.useEffect)(en, er),
        ek[50] !== td || ek[51] !== eS
          ? ((eo = async () => {
              let e = R.appServices.appServerLifecycle,
                t = eS.get(ea.sW)
              if (t?.status !== "pending" || t.isChecking || null == e) return
              let n = { ...t, isChecking: !0 }
              ;(0, ea.EN)(n)
              let r = await (0, U.Wj)(e, t.region)
              if ((0, ea.iM)() === n) {
                if (null == r) return void (await td())
                ;(0, ea.EN)({ ...t, warning: r, isChecking: !1 })
              }
            }),
            (ek[50] = td),
            (ek[51] = eS),
            (ek[52] = eo))
          : (eo = ek[52]))
      let tg = eo
      ek[53] !== eP || ek[54] !== td || ek[55] !== eM || ek[56] !== eS
        ? ((el = async (e) => {
            if (!eP) return
            let t = R.appServices.appServerLifecycle
            if (null == t)
              return void te((e) =>
                null == e
                  ? null
                  : {
                      ...e,
                      errorMessage: eM.formatMessage({
                        id: "electron.onboarding.login.bedrock.unavailable",
                        defaultMessage: "Amazon Bedrock sign-in is unavailable on this host",
                        description: "Error when the desktop host does not support Amazon Bedrock sign-in",
                      }),
                    },
              )
            te(eY)
            let n = { status: "pending", warning: null, region: e.region, isChecking: !0 }
            ;(0, ea.EN)(n)
            try {
              let r = await (0, U.$_)(eS, t, e)
              if ((0, ea.iM)() !== n) return
              if (null != r && !eS.get(ea.sL))
                return void (0, ea.EN)({ status: "pending", warning: r, region: e.region, isChecking: !1 })
              await td()
            } catch (t) {
              if ((0, ea.iM)() !== n) return
              ;((0, ea.EN)(null),
                te((n) => {
                  if (null == n) return null
                  let r = (0, a.Rt_)(t),
                    i =
                      "profile" === e.method &&
                      r.startsWith(`failed to load credentials for AWS profile \`${e.profile.trim()}\`:`)
                        ? eM.formatMessage(
                            {
                              id: "electron.onboarding.login.bedrock.profileCredentialsError",
                              defaultMessage:
                                "Couldn’t load credentials for AWS profile “{profile}”. Check your AWS sign-in and try again.",
                              description:
                                "Error when credentials cannot be loaded from the selected AWS profile during Amazon Bedrock sign-in. The profile placeholder is the user-provided AWS profile name.",
                            },
                            { profile: e.profile.trim() },
                          )
                        : r
                  return { ...n, errorMessage: i, isSubmitting: !1 }
                }))
            }
          }),
          (ek[53] = eP),
          (ek[54] = td),
          (ek[55] = eM),
          (ek[56] = eS),
          (ek[57] = el))
        : (el = ek[57])
      let tp = el
      ek[58] === Symbol.for("react.memo_cache_sentinel")
        ? ((eu = () => {
            e1(!1)
          }),
          (ek[58] = eu))
        : (eu = ek[58])
      let tf = eu
      ek[59] === Symbol.for("react.memo_cache_sentinel")
        ? ((eg = () => {
            ;(null != tr.current ||
              "u" < typeof window ||
              ("AudioContext" in window &&
                ((tr.current = new window.AudioContext()), "suspended" === tr.current.state && tr.current.resume())),
              e1(!0))
          }),
          (ek[59] = eg))
        : (eg = ek[59])
      let th = eg
      ek[60] !== eU || ek[61] !== eM || ek[62] !== eS
        ? ((ef = async () => {
            null != eU &&
              (await (0, w.E)(eU)) &&
              eS
                .get(m.Id)
                .success(
                  eM.formatMessage({
                    id: "electron.onboarding.login.linkCopied",
                    defaultMessage: "Sign-in link copied",
                    description:
                      "Toast confirming that the active browser sign-in link was copied so the user can paste it into another browser",
                  }),
                )
          }),
          (ek[60] = eU),
          (ek[61] = eM),
          (ek[62] = eS),
          (ek[63] = ef))
        : (ef = ek[63])
      let tm = ef
      ek[64] !== eN ||
      ek[65] !== eL.chatgpt ||
      ek[66] !== eL.status ||
      ek[67] !== eB ||
      ek[68] !== eC ||
      ek[69] !== eE ||
      ek[70] !== eS ||
      ek[71] !== eG ||
      ek[72] !== ti ||
      ek[73] !== ez ||
      ek[74] !== e_ ||
      ek[75] !== eA
        ? ((ex = async (e, t) => {
            let n = void 0 === e ? "signin" : e
            if (u.UL.has(eS.node)) return void u.UL.get(eS.node)?.cancel()
            if (null != eV.current) {
              ;(eV.current.abort(), (eV.current = null), eK(null))
              return
            }
            if (null == eB || "ready" !== eL.status || !eL.chatgpt) return
            let r = "signin" === n || "signup" === n || "other-account" === n ? "chatgpt" : n
            ;(0, P.yy)(eS, k.CodexLoginMethodSelected, { method: r, ...eB })
            let i = (0, a.JFB)(eS.get(_.B, b.fI), "gatewayOAuth") ? (0, ec.W)() : null,
              o = new AbortController()
            ;((eV.current = o), eK(o))
            let l = !1,
              s = !1
            await (async () => {
              try {
                var e
                let s,
                  { useDesktopAuth: c, useStreamlinedLoginUx: u } =
                    ((s = (e = (0, B.XM)(ez, "3446609779")).get("enabled", !1)),
                    {
                      useDesktopAuth: e.get("use_desktop_auth", s),
                      useStreamlinedLoginUx: e.get("use_streamlined_login_ux", s),
                    }),
                  {
                    authUrl: g,
                    completion: p,
                    setBrowserUrl: h,
                  } = await (0, d.NR)({
                    scope: eS,
                    signal: o.signal,
                    useHostedLoginSuccessPage: !0,
                    useStreamlinedLogin: u,
                  })
                if (g && !o.signal.aborted) {
                  let e = !c || eA ? void 0 : (await R.appServices.appInfo.get()).chatGptDesktopAuthOrigin
                  if (o.signal.aborted) return
                  let r = (function (e, t) {
                      if ("signin" === t) return e
                      try {
                        let n = new URL(e),
                          r = "/codex/desktop-auth" === n.pathname ? n.searchParams.get("authorize_url") : null,
                          i = null == r ? n : new URL(r)
                        switch (t) {
                          case "signup":
                            i.searchParams.set("screen_hint", "signup")
                            break
                          case "google":
                            ;(i.searchParams.set("screen_hint", "login_or_signup"),
                              i.searchParams.set("connection", "google-oauth2"))
                            break
                          case "microsoft":
                            ;(i.searchParams.set("screen_hint", "login_or_signup"),
                              i.searchParams.set("connection", "windowslive"))
                            break
                          case "apple":
                            ;(i.searchParams.set("screen_hint", "login_or_signup"),
                              i.searchParams.set("connection", "apple"))
                            break
                          case "email":
                            i.searchParams.set("screen_hint", "login_or_signup")
                            break
                          case "other-account":
                            i.searchParams.set("prompt", "select_account")
                        }
                        return (null != r && n.searchParams.set("authorize_url", i.toString()), n.toString())
                      } catch {
                        return e
                      }
                    })(g, n),
                    i = (0, y.Z)({
                      authUrl: r,
                      codexAppVersion: (0, y.y)(eS),
                      desktopAuthOrigin: e,
                      includeCodexOriginStableId: !0,
                      loginHint: t,
                      useDesktopAuth: c && !eA,
                      useStreamlinedLoginUx: u,
                    })
                  h(i) && (0, f.E0)({ href: i, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
                }
                let m = await p
                if (o.signal.aborted) return
                if (m.success) {
                  l = !0
                  let e = { method: r, ...eB, ...(0, z.tY)(m.onboardingEntrypoint) }
                  if (
                    (null != i ? i(e) : (0, P.yy)(eS, k.CodexLoginSuccess, e),
                    eE.removeQueries({ queryKey: ["vscode", "account-info"], exact: !0 }),
                    eA)
                  ) {
                    ;(e_(), await eC(eN("/"), { replace: !0 }))
                    return
                  }
                  ;(ti(),
                    eS.set(L.pi, !0),
                    null != m.onboardingEntrypoint && (0, z.mU)(eS, m.onboardingEntrypoint),
                    eS.set(E.Z, m.onboardingEntrypoint),
                    e_(),
                    eC(eN("/welcome"), { replace: !0 }))
                } else
                  ((0, P.yy)(eS, k.CodexLoginFailure, { method: r, errorKind: ev(m.error), ...eB }),
                    eG((0, a.Rt_)(m.error ?? "Unknown error")))
              } catch (e) {
                if (e instanceof Error && "AbortError" === e.name) {
                  ;((s = !0), (0, P.yy)(eS, k.CodexLoginFailure, { method: r, errorKind: "abort", ...eB }))
                  return
                }
                ;((0, P.yy)(eS, k.CodexLoginFailure, { method: r, errorKind: ev(e), ...eB }), eG((0, a.Rt_)(e)))
              }
            })().finally(() => {
              let e = ["chatgpt-browser-session-profiles", !0]
              ;(l ||
                s ||
                o.signal.aborted ||
                (null != eV.current && eV.current !== o) ||
                eE.getQueryData(e)?.length !== 0 ||
                eE.resetQueries({ queryKey: e, exact: !0 }),
                eV.current === o && (eV.current = null),
                eK((e) => (e === o ? null : e)))
            })
          }),
          (ek[64] = eN),
          (ek[65] = eL.chatgpt),
          (ek[66] = eL.status),
          (ek[67] = eB),
          (ek[68] = eC),
          (ek[69] = eE),
          (ek[70] = eS),
          (ek[71] = eG),
          (ek[72] = ti),
          (ek[73] = ez),
          (ek[74] = e_),
          (ek[75] = eA),
          (ek[76] = ex))
        : (ex = ek[76])
      let tx = ex
      ek[77] !== e2 ||
      ek[78] !== eN ||
      ek[79] !== e6 ||
      ek[80] !== eL.api ||
      ek[81] !== eL.status ||
      ek[82] !== eB ||
      ek[83] !== eC ||
      ek[84] !== eS ||
      ek[85] !== eG ||
      ek[86] !== ti ||
      ek[87] !== e_ ||
      ek[88] !== eA
        ? ((eb = async () => {
            let e = e2.trim()
            if (!e || e6 || null == eB || "ready" !== eL.status || !eL.api) return
            let t = new AbortController()
            ;(e5(t),
              await (async () => {
                try {
                  if ((await (0, c.ls)(eS, b.fI).loginWithApiKey(e), t.signal.aborted)) return
                  if (((0, P.yy)(eS, k.CodexLoginSuccess, { method: "apikey", ...eB }), eA)) {
                    ;(e_(), await eC(eN("/"), { replace: !0 }))
                    return
                  }
                  ;(ti(), eS.set(L.pi, !0), eS.set(E.Z, void 0), e_(), eC(eN("/welcome"), { replace: !0 }))
                } catch (e) {
                  if (t.signal.aborted) return
                  ;((0, P.yy)(eS, k.CodexLoginFailure, { method: "apikey", errorKind: ev(e), ...eB }),
                    eG((0, a.Rt_)(e)))
                }
              })().finally(() => {
                e5((e) => (e === t ? null : e))
              }))
          }),
          (ek[77] = e2),
          (ek[78] = eN),
          (ek[79] = e6),
          (ek[80] = eL.api),
          (ek[81] = eL.status),
          (ek[82] = eB),
          (ek[83] = eC),
          (ek[84] = eS),
          (ek[85] = eG),
          (ek[86] = ti),
          (ek[87] = e_),
          (ek[88] = eA),
          (ek[89] = eb))
        : (eb = ek[89])
      let tb = eb
      if (tt?.status === "pending") {
        let e
        return (
          ek[90] !== tt.isChecking || ek[91] !== tt.warning || ek[92] !== td || ek[93] !== tg || ek[94] !== eS
            ? ((e = (0, r.jsx)(T.cI, {
                children:
                  null == tt.warning
                    ? (0, r.jsxs)("div", {
                        className:
                          "flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description",
                        children: [
                          (0, r.jsx)(M.y, { className: "h-4 w-4 text-default" }),
                          (0, r.jsx)(A.A, {
                            id: "electron.onboarding.login.bedrock.finishing",
                            defaultMessage: "Finishing Amazon Bedrock sign-in…",
                            description:
                              "Loading message while Bedrock sign-in saves credentials, restarts the app server, and checks GovCloud configuration",
                          }),
                        ],
                      })
                    : (0, r.jsx)(es.o, {
                        unverified: "unverified" === tt.warning,
                        isChecking: tt.isChecking,
                        onRetry: tg,
                        onContinue: async () => {
                          ;(eS.set(ea.sL, !0), await td())
                        },
                      }),
              })),
              (ek[90] = tt.isChecking),
              (ek[91] = tt.warning),
              (ek[92] = td),
              (ek[93] = tg),
              (ek[94] = eS),
              (ek[95] = e))
            : (e = ek[95]),
          e
        )
      }
      if (null != eD && "chatgpt" !== eD.stage) {
        let e
        return (
          ek[96] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(ed.m, {})), (ek[96] = e))
            : (e = ek[96]),
          e
        )
      }
      if ("ready" !== eL.status || (!eL.api && !eL.chatgpt)) {
        let e
        return (
          ek[97] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(T.cI, { children: (0, r.jsx)(em.G, { hostId: b.fI }) })), (ek[97] = e))
            : (e = ek[97]),
          e
        )
      }
      if (null == eB) {
        let e
        return (
          ek[98] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, r.jsx)(T.cI, {
                children: (0, r.jsxs)("div", {
                  className: "flex h-full w-full flex-col items-center justify-center gap-3 text-codex-description",
                  children: [
                    (0, r.jsx)(M.y, { className: "h-4 w-4 text-default" }),
                    (0, r.jsx)(A.A, {
                      id: "electron.onboarding.login.loading",
                      defaultMessage: "Loading…",
                      description: "Loading state while the desktop login page prepares the sign-in experience",
                    }),
                  ],
                }),
              })),
              (ek[98] = e))
            : (e = ek[98]),
          e
        )
      }
      let ty = R.appServices?.appServerLifecycle
      if (eT && e7 && null != ty) {
        let e, t
        return (
          ek[99] === Symbol.for("react.memo_cache_sentinel") ? ((e = () => e8(!1)), (ek[99] = e)) : (e = ek[99]),
          ek[100] !== tc || ek[101] !== eM || ek[102] !== eS
            ? ((t = (0, r.jsx)(T.cI, {
                fullBleed: !0,
                children: (0, r.jsx)(ep, {
                  onBack: e,
                  onSubmit: async (e) => {
                    try {
                      await (0, c.ls)(eS, b.fI).sendRequest("account/gcp/setup", e)
                    } catch (e) {
                      if (!(0, a.Rg6)(e, "account/gcp/setup")) throw e
                      throw Error(
                        eM.formatMessage({
                          id: "electron.onboarding.login.gcp.unsupported",
                          defaultMessage: "This app server does not support Google Cloud setup",
                          description: "Error when a source build predates Google Cloud setup",
                        }),
                      )
                    }
                    ;(await ty.restart(b.fI), await tc())
                  },
                }),
              })),
              (ek[100] = tc),
              (ek[101] = eM),
              (ek[102] = eS),
              (ek[103] = t))
            : (t = ek[103]),
          t
        )
      }
      if (eP && null != e9) {
        let e, t, n
        return (
          ek[104] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = () => {
                ;((tn.current = tn.current + 1), te(null))
              }),
              (t = () => {
                te(eX)
              }),
              (ek[104] = e),
              (ek[105] = t))
            : ((e = ek[104]), (t = ek[105])),
          ek[106] !== e9.detectedCredentials ||
          ek[107] !== e9.errorMessage ||
          ek[108] !== e9.isDetecting ||
          ek[109] !== e9.isSubmitting ||
          ek[110] !== e9.supportsAccessKeys ||
          ek[111] !== e9.supportsAwsCredentials ||
          ek[112] !== ta ||
          ek[113] !== tp
            ? ((n = (0, r.jsx)(T.cI, {
                fullBleed: !0,
                children: (0, r.jsx)(ei, {
                  detectedCredentials: e9.detectedCredentials,
                  errorMessage: e9.errorMessage,
                  isDetecting: e9.isDetecting,
                  isSubmitting: e9.isSubmitting,
                  supportsAwsCredentials: e9.supportsAwsCredentials,
                  supportsAccessKeys: e9.supportsAccessKeys,
                  onBack: e,
                  onClearError: t,
                  onDetectCredentials: ta,
                  onSubmit: tp,
                }),
              })),
              (ek[106] = e9.detectedCredentials),
              (ek[107] = e9.errorMessage),
              (ek[108] = e9.isDetecting),
              (ek[109] = e9.isSubmitting),
              (ek[110] = e9.supportsAccessKeys),
              (ek[111] = e9.supportsAwsCredentials),
              (ek[112] = ta),
              (ek[113] = tp),
              (ek[114] = n))
            : (n = ek[114]),
          n
        )
      }
      return (
        ek[115] !== e2 ||
        ek[116] !== eU ||
        ek[117] !== tb ||
        ek[118] !== tx ||
        ek[119] !== tm ||
        ek[120] !== eq ||
        ek[121] !== e6 ||
        ek[122] !== eF ||
        ek[123] !== eQ ||
        ek[124] !== e0 ||
        ek[125] !== eL.api ||
        ek[126] !== eL.chatgpt ||
        ek[127] !== tl ||
        ek[128] !== ts ||
        ek[129] !== eT
          ? ((ey = e0
              ? (0, r.jsx)("div", {
                  className: "flex h-full w-full",
                  children: (0, r.jsx)(D, { onExit: tf, audioContextRef: tr }),
                })
              : (0, r.jsx)(eH, {
                  allowApiKey: eL.api,
                  allowChatGpt: eL.chatgpt,
                  apiKeyHelpVariant:
                    "link" === t || "explanation" === t || "explanation-with-chatgpt" === t ? t : void 0,
                  apiKeyValue: e2,
                  canCopySignInLink: null != eU,
                  isApiKeyEntryVisible: eq,
                  isOtherSignInMethodsVisible: eQ,
                  isApiKeySignInPending: e6,
                  isChatGptSignInPending: eF,
                  showAmazonBedrockSignIn: !0,
                  onApiKeySubmit: tb,
                  onApiKeyValueChange: e3,
                  onChatGptSignIn: tx,
                  onChatGptSignUp: () => tx("signup"),
                  onCopySignInLink: tm,
                  onPlaySnake: th,
                  onResetApiKeyEntry: to,
                  onShowApiKeyEntry: tl,
                  onShowOtherSignInMethods: () => eZ(!0),
                  onHideOtherSignInMethods: () => eZ(!1),
                  onShowBedrockSetup: ts,
                  onShowGcpSetup: eT ? () => e8(!0) : void 0,
                })),
            (ek[115] = e2),
            (ek[116] = eU),
            (ek[117] = tb),
            (ek[118] = tx),
            (ek[119] = tm),
            (ek[120] = eq),
            (ek[121] = e6),
            (ek[122] = eF),
            (ek[123] = eQ),
            (ek[124] = e0),
            (ek[125] = eL.api),
            (ek[126] = eL.chatgpt),
            (ek[127] = tl),
            (ek[128] = ts),
            (ek[129] = eT),
            (ek[130] = ey))
          : (ey = ek[130]),
        ek[131] !== e0 || ek[132] !== ey
          ? ((ew = (0, r.jsx)(T.cI, { fullBleed: !0, hideHeader: e0, children: ey })),
            (ek[131] = e0),
            (ek[132] = ey),
            (ek[133] = ew))
          : (ew = ek[133]),
        ew
      )
    }
    function eX(e) {
      return e?.errorMessage == null ? e : { ...e, errorMessage: null }
    }
    function eY(e) {
      return null == e ? null : { ...e, errorMessage: null, isSubmitting: !0 }
    }
    function eJ(e) {
      return null == e ? null : { ...e, errorMessage: null, isDetecting: !0 }
    }
    function e0() {
      let e = (0, i.c)(6),
        [t] = (0, o.ok)()
      {
        let n, i
        e[1] !== t ? ((n = t.get("workspaceRecovery")), (e[1] = t), (e[2] = n)) : (n = e[2])
        let o = "true" === n
        return (e[3] !== o ? ((i = (0, r.jsx)(eZ, { workspaceRecovery: o })), (e[3] = o), (e[4] = i)) : (i = e[4]), i)
      }
    }
  },
  K1N8(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      o = n("zd8w"),
      l = n("Wf1j"),
      a = n("oyxz"),
      s = n("ygO2"),
      c = n("zLIa")
    n.d(
      t,
      {},
      {
        c: function (e) {
          let t,
            n,
            d,
            u = (0, i.c)(42),
            {
              allowApiKey: g,
              allowChatGpt: p,
              apiKeyHelp: f,
              apiKeyValue: h,
              isApiKeyEntryVisible: m,
              isApiKeySignInPending: x,
              isChatGptSignInPending: b,
              onApiKeySecondaryAction: y,
              onApiKeySubmit: w,
              onApiKeyValueChange: k,
              onChatGptSignIn: v,
              onShowApiKeyEntry: j,
              apiKeySecondaryActionLabel: A,
            } = e,
            S = (0, l.A)(),
            _ = (0, o.useId)()
          if (g && m) {
            let e, t, n, i, o, l, d, g, p, m, b
            u[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((e = (0, r.jsx)(a.A, {
                  id: "electron.onboarding.login.apikey.label",
                  defaultMessage: "OpenAI API key",
                  description: "Label for API key input on desktop onboarding",
                })),
                (u[0] = e))
              : (e = u[0])
            let v = null != f ? _ : void 0
            return (
              u[1] !== S
                ? ((t = S.formatMessage({
                    id: "electron.onboarding.login.apikey.placeholder",
                    defaultMessage: "sk-…",
                    description: "Placeholder for API key input on desktop onboarding",
                  })),
                  (u[1] = S),
                  (u[2] = t))
                : (t = u[2]),
              u[3] !== k ? ((n = (e) => k(e.target.value)), (u[3] = k), (u[4] = n)) : (n = u[4]),
              u[5] !== h || u[6] !== v || u[7] !== t || u[8] !== n
                ? ((i = (0, r.jsxs)("label", {
                    className: "flex flex-col gap-2 text-base font-medium text-default",
                    children: [
                      e,
                      (0, r.jsx)(c.pd, { "aria-describedby": v, autoFocus: !0, placeholder: t, value: h, onChange: n }),
                    ],
                  })),
                  (u[5] = h),
                  (u[6] = v),
                  (u[7] = t),
                  (u[8] = n),
                  (u[9] = i))
                : (i = u[9]),
              u[10] !== f || u[11] !== _
                ? ((o = null != f ? (0, r.jsx)("div", { id: _, children: f }) : null),
                  (u[10] = f),
                  (u[11] = _),
                  (u[12] = o))
                : (o = u[12]),
              u[13] !== A || u[14] !== y
                ? ((l = (0, r.jsx)(s.$, {
                    className: "flex-1 justify-center",
                    color: "secondary",
                    size: "large",
                    onClick: y,
                    children: A,
                  })),
                  (u[13] = A),
                  (u[14] = y),
                  (u[15] = l))
                : (l = u[15]),
              u[16] !== h || u[17] !== x
                ? ((d = 0 === h.trim().length || x), (u[16] = h), (u[17] = x), (u[18] = d))
                : (d = u[18]),
              u[19] === Symbol.for("react.memo_cache_sentinel")
                ? ((g = (0, r.jsx)(a.A, {
                    id: "electron.onboarding.login.apikey.continue",
                    defaultMessage: "Continue",
                    description: "Continue button label for API key sign-in on desktop onboarding",
                  })),
                  (u[19] = g))
                : (g = u[19]),
              u[20] !== x || u[21] !== w || u[22] !== d
                ? ((p = (0, r.jsx)(s.$, {
                    className: "flex-1 justify-center",
                    onClick: w,
                    disabled: d,
                    loading: x,
                    size: "large",
                    children: g,
                  })),
                  (u[20] = x),
                  (u[21] = w),
                  (u[22] = d),
                  (u[23] = p))
                : (p = u[23]),
              u[24] !== p || u[25] !== l
                ? ((m = (0, r.jsxs)("div", { className: "flex items-center gap-2", children: [l, p] })),
                  (u[24] = p),
                  (u[25] = l),
                  (u[26] = m))
                : (m = u[26]),
              u[27] !== m || u[28] !== i || u[29] !== o
                ? ((b = (0, r.jsxs)("div", { className: "flex w-full flex-col gap-3", children: [i, o, m] })),
                  (u[27] = m),
                  (u[28] = i),
                  (u[29] = o),
                  (u[30] = b))
                : (b = u[30]),
              b
            )
          }
          return (
            u[31] !== p || u[32] !== b || u[33] !== v
              ? ((t = p
                  ? (0, r.jsx)(s.$, {
                      color: "primary",
                      className: "w-full justify-center py-2.5",
                      onClick: v,
                      children: b
                        ? (0, r.jsx)(a.A, {
                            id: "electron.onboarding.login.chatgpt.cancel",
                            defaultMessage: "Cancel sign-in",
                            description:
                              "Cancel button label while ChatGPT sign-in is in progress on desktop onboarding",
                          })
                        : (0, r.jsx)(a.A, {
                            id: "electron.onboarding.login.chatgpt.continue",
                            defaultMessage: "Continue with ChatGPT",
                            description: "Button label to sign in with ChatGPT on desktop onboarding",
                          }),
                    })
                  : null),
                (u[31] = p),
                (u[32] = b),
                (u[33] = v),
                (u[34] = t))
              : (t = u[34]),
            u[35] !== g || u[36] !== b || u[37] !== j
              ? ((n =
                  g && !b
                    ? (0, r.jsx)(s.$, {
                        color: "outline",
                        className: "w-full justify-center py-2.5",
                        onClick: j,
                        children: (0, r.jsx)(a.A, {
                          id: "electron.onboarding.login.apikey.open",
                          defaultMessage: "Enter API key",
                          description: "Button label to open API key entry on desktop onboarding",
                        }),
                      })
                    : null),
                (u[35] = g),
                (u[36] = b),
                (u[37] = j),
                (u[38] = n))
              : (n = u[38]),
            u[39] !== t || u[40] !== n
              ? ((d = (0, r.jsxs)("div", { className: "flex w-full max-w-[200px] flex-col gap-3", children: [t, n] })),
                (u[39] = t),
                (u[40] = n),
                (u[41] = d))
              : (d = u[41]),
            d
          )
        },
      },
    )
  },
  SzCH(e, t, n) {
    n.d(t, { tY: () => c, n6: () => u, zO: () => m, mU: () => d, cX: () => p, og: () => f, _T: () => g, $P: () => h })
    var r = n("iRMi")
    let i = { $type: "protobuf_analytics_events.v1.CodexOnboardingEntrypointLoginSucceeded" },
      o = { $type: "protobuf_analytics_events.v1.CodexOnboardingEntrypointStarted" },
      l = { $type: "protobuf_analytics_events.v1.CodexOnboardingEntrypointCompleted" }
    var a = n("yGJW")
    let s = { life_sciences: r.CodexOnboardingEntrypoint.CODEX_ONBOARDING_ENTRYPOINT_LIFE_SCIENCES }
    function c(e) {
      return null == e ? {} : { onboardingEntrypoint: s[e] }
    }
    function d(e, t) {
      ;(0, a.yy)(e, i, { onboardingEntrypoint: s[t] })
    }
    function u(e, t) {
      ;((0, a.yy)(e, r.CodexOnboardingEntered, { ...c(t) }),
        null != t && (0, a.yy)(e, o, { onboardingEntrypoint: s[t] }))
    }
    function g(e, t, n) {
      ;(0, a.yy)(e, r.CodexOnboardingStepViewed, { step: t, ...c(n) })
    }
    function p(e, t, n) {
      ;(0, a.yy)(e, r.CodexOnboardingStepContinueClicked, { step: t, ...c(n) })
    }
    function f(e, t, n) {
      ;(0, a.yy)(e, r.CodexOnboardingStepSkipped, { step: t, ...c(n) })
    }
    function h(e, t, n) {
      ;(0, a.yy)(e, r.CodexOnboardingWizardStep, { phase: t, action: n })
    }
    function m(e, t) {
      ;(0, a.yy)(e, l, { onboardingEntrypoint: s[t] })
    }
  },
  DIsA(e, t, n) {
    let r = (0, n("Nwp9").m3)("electron:onboarding-login-entrypoint", void 0)
    n.d(t, {}, { Z: r })
  },
  kr0v(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      o = n("zd8w")
    function l() {}
    n.d(
      t,
      {},
      {
        f: function (e) {
          let t,
            n,
            a,
            s,
            c,
            d,
            u,
            g,
            p,
            f,
            h,
            m,
            x,
            b,
            y,
            w,
            k,
            v = (0, i.c)(39),
            { lines: j, columns: A, rows: S, scale: _, foregroundColor: C, backgroundColor: M, autoCover: N } = e,
            E = void 0 === _ ? 0.75 : _,
            L = void 0 === C ? "var(--color-border)" : C,
            I = void 0 === M ? "var(--color-surface-secondary)" : M,
            P = void 0 !== N && N,
            R = (0, o.useRef)(null),
            B = (0, o.useRef)(null),
            z = (0, o.useRef)(null),
            T = (0, o.useRef)(null),
            G = (0, o.useRef)(""),
            O = (0, o.useRef)(8),
            K = (0, o.useRef)(16),
            W = (0, o.useRef)(12),
            D = (0, o.useRef)("monospace"),
            U = (0, o.useRef)(j),
            F = (0, o.useRef)(l)
          v[0] !== P
            ? ((t = () => {
                if (!R.current) return null
                if (!z.current) {
                  let e = document.createElement("canvas")
                  ;((e.style.display = "block"),
                    (e.style.borderRadius = P ? "0px" : "10px"),
                    (e.style.imageRendering = "crisp-edges"))
                  let t = document.createElement("div")
                  ;((t.style.display = "none"), R.current.append(e, t), (z.current = e), (T.current = t))
                }
                return z.current.getContext("2d")
              }),
              (v[0] = P),
              (v[1] = t))
            : (t = v[1])
          let V = t
          v[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (e) => {
                let t = W.current,
                  n = D.current
                e.font = `${t}px ${n}`
                let r = e.measureText("M"),
                  i = Math.max(1, Math.round(r.width)),
                  o = Math.max(
                    1,
                    Math.round((r.actualBoundingBoxAscent || t) + (r.actualBoundingBoxDescent || Math.ceil(0.3 * t))),
                  )
                ;((O.current = i), (K.current = o))
              }),
              (v[2] = n))
            : (n = v[2])
          let q = n
          v[3] !== A || v[4] !== S
            ? ((a = (e, t) => {
                let n = z.current,
                  r = R.current
                if (!n) return 1
                let i = Number.isFinite(t) && t > 0 ? t : 1,
                  o = Math.max(1, Math.floor(window.devicePixelRatio || 1)),
                  l = Math.max(1, A * O.current),
                  a = Math.max(1, S * K.current),
                  s = l * i,
                  c = a * i,
                  d = Math.max(1, Math.round(s * o)),
                  u = Math.max(1, Math.round(c * o))
                return (
                  (n.width !== d || n.height !== u) && ((n.width = d), (n.height = u)),
                  (n.style.width = `${s}px`),
                  (n.style.height = `${c}px`),
                  r && ((r.style.width = `${s}px`), (r.style.height = `${c}px`)),
                  e.setTransform(o * i, 0, 0, o * i, 0, 0),
                  (e.imageSmoothingEnabled = !1),
                  i
                )
              }),
              (v[3] = A),
              (v[4] = S),
              (v[5] = a))
            : (a = v[5])
          let $ = a
          v[6] !== P || v[7] !== I || v[8] !== A || v[9] !== V || v[10] !== L || v[11] !== $ || v[12] !== S
            ? ((s = () => {
                let e = V()
                if (!e || !z.current) return
                z.current.style.borderRadius = P ? "0px" : "10px"
                try {
                  e.setTransform(1, 0, 0, 1, 0, 0)
                } catch {}
                q(e)
                let t = 1
                if (P && B.current)
                  try {
                    let e = B.current.parentElement,
                      n = e?.getBoundingClientRect(),
                      r = Math.max(1, A * O.current),
                      i = Math.max(1, S * K.current)
                    if (n && r > 0 && i > 0) {
                      let e = n.width / r,
                        o = n.height / i
                      ;((t = Math.max(e, o)), !Number.isFinite(t) || t <= 0 ? (t = 1) : (t *= 1.02))
                    }
                  } catch {
                    t = 1
                  }
                let n = Math.max($(e, t) || 1, 0.001),
                  r = Math.max(1, Math.floor(window.devicePixelRatio || 1)),
                  i = z.current.width / (r * n),
                  o = z.current.height / (r * n)
                e.save()
                let l = R.current,
                  a = (e, t) => {
                    if (e && "" !== e) {
                      if (e.trim().startsWith("var(")) {
                        let n = ((e) => {
                          try {
                            let n = T.current
                            if (null == n) return ""
                            return ((n.style[t] = e), getComputedStyle(n)[t] || "")
                          } catch {
                            return ""
                          }
                        })(e)
                        if (n) return n
                      }
                      return e
                    }
                    if (!l) return ""
                    let n = getComputedStyle(l),
                      r = "color" === t ? n.color : n.backgroundColor
                    if (("rgba(0, 0, 0, 0)" === r || "transparent" === r) && l.parentElement) {
                      let e = getComputedStyle(l.parentElement)
                      r = "color" === t ? e.color : e.backgroundColor
                    }
                    return r
                  },
                  s = a(I, "backgroundColor"),
                  c = a(L, "color")
                ;(s && ((e.fillStyle = s), e.fillRect(0, 0, i, o)),
                  c && (e.fillStyle = c),
                  (e.textBaseline = "top"),
                  (e.font = `${W.current}px ${D.current}`))
                let d = K.current,
                  u = Math.min(S, U.current.length)
                for (let t = 0; t < u; t++) {
                  let n = U.current[t] ?? ""
                  n && e.fillText(n, 0, t * d)
                }
                if ((e.restore(), P && B.current && R.current))
                  try {
                    if (!B.current.parentElement) return
                    let e = B.current
                    ;((e.style.position = "absolute"),
                      (e.style.left = "50%"),
                      (e.style.top = "50%"),
                      (e.style.transform = "translate(-50%, -50%)"),
                      (e.style.transformOrigin = "center"),
                      (e.style.display = "block"),
                      (e.style.width = R.current.style.width),
                      (e.style.height = R.current.style.height))
                  } catch {}
              }),
              (v[6] = P),
              (v[7] = I),
              (v[8] = A),
              (v[9] = V),
              (v[10] = L),
              (v[11] = $),
              (v[12] = S),
              (v[13] = s))
            : (s = v[13])
          let H = s
          ;(v[14] !== H
            ? ((d = () => {
                F.current = H
              }),
              (c = [H]),
              (v[14] = H),
              (v[15] = c),
              (v[16] = d))
            : ((c = v[15]), (d = v[16])),
            (0, o.useEffect)(d, c),
            v[17] === Symbol.for("react.memo_cache_sentinel")
              ? ((u = () => {
                  let e = !1,
                    t = R.current
                  return (
                    (async () => {
                      if (t) {
                        try {
                          if (document?.fonts?.ready?.then)
                            try {
                              await document.fonts.ready
                            } catch {}
                        } catch {}
                        e || F.current()
                      }
                    })(),
                    () => {
                      if (((e = !0), z.current))
                        try {
                          z.current.remove()
                        } catch {}
                      if (((z.current = null), (T.current = null), t))
                        try {
                          for (; t.firstChild;) t.removeChild(t.firstChild)
                        } catch {}
                    }
                  )
                }),
                (g = []),
                (v[17] = u),
                (v[18] = g))
              : ((u = v[17]), (g = v[18])),
            (0, o.useEffect)(u, g),
            v[19] !== j
              ? ((p = () => {
                  U.current = j
                  let e = j.join("\n")
                  e !== G.current &&
                    ((G.current = e),
                    requestAnimationFrame(() => {
                      requestAnimationFrame(() => F.current())
                    }))
                }),
                (f = [j]),
                (v[19] = j),
                (v[20] = p),
                (v[21] = f))
              : ((p = v[20]), (f = v[21])),
            (0, o.useEffect)(p, f),
            v[22] === Symbol.for("react.memo_cache_sentinel")
              ? ((h = () => {
                  requestAnimationFrame(() => {
                    requestAnimationFrame(() => F.current())
                  })
                }),
                (v[22] = h))
              : (h = v[22]),
            v[23] !== I || v[24] !== A || v[25] !== L || v[26] !== S
              ? ((m = [A, S, L, I]), (v[23] = I), (v[24] = A), (v[25] = L), (v[26] = S), (v[27] = m))
              : (m = v[27]),
            (0, o.useEffect)(h, m),
            v[28] !== P
              ? ((x = () => {
                  if (!P) return
                  let e = () => {
                    requestAnimationFrame(() => F.current())
                  }
                  return (
                    window.addEventListener("resize", e),
                    () => {
                      window.removeEventListener("resize", e)
                    }
                  )
                }),
                (b = [P]),
                (v[28] = P),
                (v[29] = x),
                (v[30] = b))
              : ((x = v[29]), (b = v[30])),
            (0, o.useEffect)(x, b),
            v[31] !== P || v[32] !== E
              ? ((y = P
                  ? {
                      position: "absolute",
                      left: "50%",
                      top: "50%",
                      transform: "translate(-50%, -50%)",
                      display: "block",
                    }
                  : { transform: `scale(${E})`, transformOrigin: "center", display: "inline-block" }),
                (v[31] = P),
                (v[32] = E),
                (v[33] = y))
              : (y = v[33]))
          let Q = 10 * !P
          return (
            v[34] !== Q
              ? ((w = (0, r.jsx)("div", {
                  ref: R,
                  style: { display: "inline-block", lineHeight: 1, borderRadius: Q },
                })),
                (v[34] = Q),
                (v[35] = w))
              : (w = v[35]),
            v[36] !== y || v[37] !== w
              ? ((k = (0, r.jsx)("div", { ref: B, style: y, children: w })), (v[36] = y), (v[37] = w), (v[38] = k))
              : (k = v[38]),
            k
          )
        },
      },
    )
  },
  gLgE(e, t, n) {
    var r = n("ABep"),
      i = n("QosV"),
      o = n("on57"),
      l = n("oyxz"),
      a = n("HZfM"),
      s = n("ZtSy"),
      c = n("OQ5p")
    n.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            n,
            d,
            u,
            g,
            p,
            f,
            h,
            m,
            x,
            b,
            y,
            w = (0, i.c)(36),
            {
              title: k,
              description: v,
              children: j,
              presentation: A,
              contentAlignment: S,
              showFooter: _,
              showHomeLink: C,
              onHomeClick: M,
            } = e,
            N = void 0 === A ? "page" : A,
            E = void 0 === _ || _,
            L = void 0 !== C && C
          w[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, r.jsx)("span", {
                className: "text-heading-lg font-semibold tracking-tight",
                children: (0, r.jsx)(l.A, {
                  id: "browser.auth.brand",
                  defaultMessage: "ChatGPT",
                  description:
                    "ChatGPT brand name in the top-left header of the browser login and logout pages; do not translate the product name",
                }),
              })),
              (w[0] = t))
            : (t = w[0])
          let I = t
          w[1] !== M || w[2] !== N || w[3] !== L
            ? ((n =
                "page" !== N
                  ? null
                  : (0, r.jsx)("header", {
                      className: "shrink-0 px-6 py-4 sm:px-8",
                      children: L ? (0, r.jsx)(a.N_, { to: "/", reloadDocument: !0, onClick: M, children: I }) : I,
                    })),
              (w[1] = M),
              (w[2] = N),
              (w[3] = L),
              (w[4] = n))
            : (n = w[4])
          let P = "start" === (void 0 === S ? "center" : S) ? "justify-start pt-12 sm:pt-16" : "justify-center pt-4"
          w[5] !== P
            ? ((d = (0, o.A)("flex w-full shrink-0 grow flex-col items-center px-6 pb-4", P)), (w[5] = P), (w[6] = d))
            : (d = w[6])
          let R = "focused" === N ? "max-w-80 gap-8" : "max-w-sm gap-5"
          w[7] !== R ? ((u = (0, o.A)("flex w-full flex-col", R)), (w[7] = R), (w[8] = u)) : (u = w[8])
          let B = "dialog" === N ? "sr-only" : "flex flex-col gap-4 text-center",
            z = "dialog" === N && "sr-only",
            T = "focused" === N && "text-2xl font-semibold",
            G = "page" === N && "text-3xl font-normal"
          return (
            w[9] !== z || w[10] !== T || w[11] !== G
              ? ((g = (0, o.A)(z, T, G)), (w[9] = z), (w[10] = T), (w[11] = G), (w[12] = g))
              : (g = w[12]),
            w[13] !== g || w[14] !== k
              ? ((p = (0, r.jsx)("h1", { className: g, children: k })), (w[13] = g), (w[14] = k), (w[15] = p))
              : (p = w[15]),
            w[16] !== v
              ? ((f = null != v ? (0, r.jsx)("p", { className: "text-sm text-secondary", children: v }) : null),
                (w[16] = v),
                (w[17] = f))
              : (f = w[17]),
            w[18] !== B || w[19] !== p || w[20] !== f
              ? ((h = (0, r.jsxs)("div", { className: B, children: [p, f] })),
                (w[18] = B),
                (w[19] = p),
                (w[20] = f),
                (w[21] = h))
              : (h = w[21]),
            w[22] !== j || w[23] !== u || w[24] !== h
              ? ((m = (0, r.jsxs)("div", { className: u, children: [h, j] })),
                (w[22] = j),
                (w[23] = u),
                (w[24] = h),
                (w[25] = m))
              : (m = w[25]),
            w[26] !== m || w[27] !== d
              ? ((x = (0, r.jsx)("main", { className: d, children: m })), (w[26] = m), (w[27] = d), (w[28] = x))
              : (x = w[28]),
            w[29] !== N || w[30] !== E
              ? ((b =
                  E && "focused" !== N
                    ? (0, r.jsxs)("footer", {
                        className: "flex shrink-0 flex-col items-center gap-3 px-6 pt-10 pb-8",
                        children: [
                          (0, r.jsx)(c.A, { "aria-hidden": "true", className: "size-6 shrink-0" }),
                          (0, r.jsxs)("div", {
                            className: "flex flex-wrap items-center justify-center gap-3 text-xs text-secondary",
                            children: [
                              (0, r.jsx)(s.G, {
                                appearance: "secondary",
                                href: "https://openai.com/policies/terms-of-use/",
                                initiator: "open_in_browser_bridge",
                                openTarget: "dialog" === N ? "external-browser" : void 0,
                                children: (0, r.jsx)(l.A, {
                                  id: "browser.auth.termsOfUse",
                                  defaultMessage: "Terms of use",
                                  description:
                                    "Footer link to OpenAI's terms of use on the browser login and logout pages",
                                }),
                              }),
                              (0, r.jsx)("div", { "aria-hidden": "true", className: "h-3 w-px bg-border" }),
                              (0, r.jsx)(s.G, {
                                appearance: "secondary",
                                href: "https://openai.com/policies/privacy-policy/",
                                initiator: "open_in_browser_bridge",
                                openTarget: "dialog" === N ? "external-browser" : void 0,
                                children: (0, r.jsx)(l.A, {
                                  id: "browser.auth.privacyPolicy",
                                  defaultMessage: "Privacy policy",
                                  description:
                                    "Footer link to OpenAI's privacy policy on the browser login and logout pages",
                                }),
                              }),
                            ],
                          }),
                        ],
                      })
                    : null),
                (w[29] = N),
                (w[30] = E),
                (w[31] = b))
              : (b = w[31]),
            w[32] !== x || w[33] !== b || w[34] !== n
              ? ((y = (0, r.jsxs)("div", {
                  className: "flex h-full w-full flex-col overflow-y-auto bg-surface text-default select-none",
                  children: [n, x, b],
                })),
                (w[32] = x),
                (w[33] = b),
                (w[34] = n),
                (w[35] = y))
              : (y = w[35]),
            y
          )
        },
      },
    )
  },
  D1V6(e, t, n) {
    var r = n("gXxh"),
      i = n("ReGc"),
      o = n("AAtN")
    let l = "/codex/desktop-auth",
      a = "codex_streamlined_login"
    function s(e, t, n, r, i, o, l) {
      ;(t && e.searchParams.set("allowed_workspace_id", t),
        n && e.searchParams.set("codex_app_version", n),
        r && e.searchParams.set("current_workspace_id", r),
        i && e.searchParams.set("login_hint", i),
        o && (e.searchParams.set("source_surface_stable_id", o), l && e.searchParams.set("codex_origin_stable_id", o)))
    }
    n.d(
      t,
      {},
      {
        Z: function ({
          allowedWorkspaceId: e,
          authUrl: t,
          codexAppVersion: n,
          currentWorkspaceId: i,
          desktopAuthOrigin: c,
          loginHint: d,
          sourceSurfaceStableId: u = r.StableID.get(o.E),
          includeCodexOriginStableId: g = !1,
          useDesktopAuth: p,
          useStreamlinedLoginUx: f,
        }) {
          let h = !!(e || n || i || d || u)
          if (!h && !p && !f) return t
          try {
            let r = new URL(t)
            if (r.pathname === l) {
              let t = r.searchParams.get("authorize_url")
              if (h && t) {
                let o = new URL(t)
                ;(s(o, e, n, i, d, u, g), r.searchParams.set("authorize_url", o.toString()))
              }
              return (f && r.searchParams.set(a, "true"), r.toString())
            }
            if ((h && s(r, e, n, i, d, u, g), f && r.searchParams.set(a, "true"), !p)) return r.toString()
            let o = new URL(l, c?.trim() || "https://chatgpt.com")
            return (o.searchParams.set("authorize_url", r.toString()), f && o.searchParams.set(a, "true"), o.toString())
          } catch {
            return t
          }
        },
        y: function (e) {
          return e.get(i.a).data?.version
        },
      },
    )
  },
  iKF7(e, t, n) {
    var r = n("QosV"),
      i = n("CWQi"),
      o = n("zd8w")
    function l(e) {
      return !e.trim()
    }
    function a(e) {
      return e.slice()
    }
    function s() {
      return (0, i.UT)(Date.now())
    }
    n.d(
      t,
      {},
      {
        R: function (e) {
          let t,
            i,
            c,
            d,
            u,
            g,
            p,
            f,
            h,
            m,
            x,
            b,
            y,
            w,
            k,
            v,
            j,
            A,
            S,
            _,
            C,
            M,
            N,
            E,
            L,
            I,
            P = (0, r.c)(65),
            [R, B] = (0, o.useState)(e?.initialMode ?? "noise"),
            [z, T] = (0, o.useState)("@%#*+=-:. "),
            [G, O] = (0, o.useState)(0),
            [K, W] = (0, o.useState)(e?.initialColumns ?? 50),
            [D, U] = (0, o.useState)(e?.initialRows ?? 30),
            [F] = (0, o.useState)(20)
          P[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = []), (P[0] = t)) : (t = P[0])
          let [V, q] = (0, o.useState)(t),
            [$, H] = (0, o.useState)(!1)
          P[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = [
                "█▓▒░ ",
                "■□▲△●○◆◇",
                "⎺⎻⎼⎽⎾⎿",
                "o p e n a i ",
                "█▉▊▋▌▍▎▏",
                "█▓▒░-=:. ",
                "█▇▆▅▄▃▂▁",
                "C O D E X",
                "█■▲●◉○. ",
                "WMBRXVIl. ",
                "█#A*-. ",
                "●◉○· ",
              ]),
              (P[1] = i))
            : (i = P[1])
          let Q = i,
            Z = (0, o.useRef)(null),
            X = (0, o.useRef)(null),
            Y = (0, o.useRef)(null)
          P[2] === Symbol.for("react.memo_cache_sentinel") ? ((c = []), (P[2] = c)) : (c = P[2])
          let [J, ee] = (0, o.useState)(c),
            et = (0, o.useRef)(0),
            en = (0, o.useRef)(e?.preferredVideoKeyword),
            [er] = (0, o.useState)(s),
            ei = (0, o.useRef)(0),
            eo = (0, o.useRef)(null),
            el = (0, o.useRef)(0),
            ea = (0, o.useRef)(""),
            es = (0, o.useRef)(null)
          P[3] !== er
            ? ((d = (e, t, n) => {
                let r = []
                for (let i = 0; i < t; i++) {
                  let t = []
                  for (let r = 0; r < e; r++) {
                    let e = ((er(0.15 * r, 0.15 * i, n) + 1) / 2) * 255
                    t.push(Math.round(e))
                  }
                  r.push(t)
                }
                return r
              }),
              (P[3] = er),
              (P[4] = d))
            : (d = P[4])
          let ec = d
          P[5] !== K || P[6] !== D
            ? ((u = () => {
                let e,
                  t,
                  n,
                  r,
                  i = Z.current,
                  o = X.current,
                  l = Y.current
                if (!i || !o || !l) return
                let a = i.videoWidth,
                  s = i.videoHeight
                if (!Number.isFinite(a) || !Number.isFinite(s) || a < 2 || s < 2) return
                let c = K / Math.max(1, 2 * D)
                a / s > c
                  ? ((r = s), (e = Math.max(0, (a - (n = Math.max(1, s * c))) / 2)), (t = 0))
                  : ((n = a), (e = 0), (t = Math.max(0, (s - (r = Math.max(1, a / c))) / 2)))
                try {
                  l.drawImage(i, e, t, n, r, 0, 0, K, D)
                } catch {}
              }),
              (P[5] = K),
              (P[6] = D),
              (P[7] = u))
            : (u = P[7])
          let ed = u
          P[8] !== K || P[9] !== D
            ? ((g = () => {
                let e = X.current,
                  t = Y.current
                if (!e || !t) return []
                let n = t.getImageData(0, 0, K, D).data,
                  r = []
                for (let e = 0; e < D; e++) {
                  let t = []
                  for (let r = 0; r < K; r++) {
                    let i = (e * K + r) * 4,
                      o = 0.299 * n[i] + 0.587 * n[i + 1] + 0.114 * n[i + 2]
                    t.push(Math.round(o))
                  }
                  r.push(t)
                }
                return r
              }),
              (P[8] = K),
              (P[9] = D),
              (P[10] = g))
            : (g = P[10])
          let eu = g
          P[11] !== z || P[12] !== K || P[13] !== D
            ? ((p = (e, t) => {
                if (!e.length) return []
                let n = (function (e, t) {
                    let n = e.length,
                      r = n > 0 ? e[0].length : 0,
                      i = e.map(a)
                    for (let e = 0; e < n; e++)
                      for (let o = 0; o < r; o++) {
                        let l = i[e][o],
                          a = Math.round((l / 255) * (t - 1)),
                          s = (255 / (t - 1)) * a
                        i[e][o] = s
                        let c = l - s
                        ;(o + 1 < r && (i[e][o + 1] = i[e][o + 1] + (7 * c) / 16),
                          e + 1 < n && o > 0 && (i[e + 1][o - 1] = i[e + 1][o - 1] + (3 * c) / 16),
                          e + 1 < n && (i[e + 1][o] = i[e + 1][o] + (5 * c) / 16),
                          e + 1 < n && o + 1 < r && (i[e + 1][o + 1] = i[e + 1][o + 1] + c / 16))
                      }
                    for (let e = 0; e < n; e++)
                      for (let t = 0; t < r; t++) i[e][t] = Math.max(0, Math.min(255, i[e][t]))
                    return i
                  })(e, z.length),
                  r = []
                for (let e = 0; e < D; e++) {
                  let i = ""
                  for (let r = 0; r < K; r++) {
                    let o = t
                      ? Math.round((n[e][r] / 255) * (z.length - 1))
                      : Math.round((1 - n[e][r] / 255) * (z.length - 1))
                    ;(Number.isNaN(o) && (o = 0), (o = Math.max(0, Math.min(z.length - 1, o))), (i += z[o]))
                  }
                  r.push(i)
                }
                return r
              }),
              (P[11] = z),
              (P[12] = K),
              (P[13] = D),
              (P[14] = p))
            : (p = P[14])
          let eg = p
          P[15] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = () => {
                let e = Z.current
                if (!e) return !1
                let t =
                    Number.isFinite(e.videoWidth) &&
                    Number.isFinite(e.videoHeight) &&
                    e.videoWidth > 1 &&
                    e.videoHeight > 1,
                  n = (e.readyState ?? 0) >= 2
                return t && n && !e.paused
              }),
              (P[15] = f))
            : (f = P[15])
          let ep = f
          P[16] !== K || P[17] !== ed || P[18] !== ec || P[19] !== eu || P[20] !== R || P[21] !== eg || P[22] !== D
            ? ((h = () => {
                let e
                if (
                  (X.current ||
                    ((X.current = document.createElement("canvas")),
                    (X.current.style.display = "none"),
                    document.body.appendChild(X.current)),
                  null == Y.current && (Y.current = X.current.getContext("2d", { willReadFrequently: !0 })),
                  X.current && ((X.current.width = K), (X.current.height = D)),
                  "video" === R && ep())
                )
                  (ed(), (e = eg(eu(), !0)))
                else if (((e = eg(ec(K, D, ei.current), !1)), "composite" === R && ep())) {
                  ed()
                  let t = eu(),
                    n = eg(t, !0),
                    r = []
                  for (let i = 0; i < D; i++) {
                    let o = ""
                    for (let r = 0; r < K; r++) o += (t[i]?.[r] ?? 0) > 110 ? n[i][r] : e[i][r]
                    r.push(o)
                  }
                  e = r
                }
                return (
                  (!e.length || e.every(l)) && (e = Array.from({ length: D }, () => "@".repeat(K))),
                  (ei.current = ei.current + 0.03),
                  e
                )
              }),
              (P[16] = K),
              (P[17] = ed),
              (P[18] = ec),
              (P[19] = eu),
              (P[20] = R),
              (P[21] = eg),
              (P[22] = D),
              (P[23] = h))
            : (h = P[23])
          let ef = h
          P[24] !== J
            ? ((m = () => {
                if (!J.length) return ""
                let e = et.current % J.length
                return ((et.current = (et.current + 1) % Math.max(1, J.length)), J[e])
              }),
              (P[24] = J),
              (P[25] = m))
            : (m = P[25])
          let eh = m
          P[26] !== eh || P[27] !== J
            ? ((x = async (e) => {
                let t = Z.current
                if (
                  (null == t &&
                    (((t = document.createElement("video")).style.display = "none"),
                    (t.loop = !0),
                    (t.muted = !0),
                    t.setAttribute("playsinline", ""),
                    document.body.appendChild(t),
                    (Z.current = t)),
                  (t.muted = !0),
                  t.setAttribute("playsinline", ""),
                  (void 0 !== e && e) || !t.src)
                ) {
                  let e =
                    (() => {
                      if (!en.current) return ""
                      let e = en.current.toLowerCase()
                      return J.find((t) => t.toLowerCase().includes(e)) ?? ""
                    })() || eh()
                  if (e) {
                    try {
                      let n = await fetch(e),
                        r = await n.blob(),
                        i = URL.createObjectURL(r)
                      if (es.current)
                        try {
                          URL.revokeObjectURL(es.current)
                        } catch {}
                      ;((es.current = i), (t.src = i))
                    } catch {}
                    t.loop = !0
                  }
                }
                try {
                  ;((t.readyState ?? 0) < 2 &&
                    (await new Promise((e) => {
                      let n = () => {
                        ;(t.removeEventListener("loadeddata", n), e())
                      }
                      t.addEventListener("loadeddata", n, { once: !0 })
                    })),
                    t.paused && (await t.play()))
                } catch {}
                ;(X.current ||
                  ((X.current = document.createElement("canvas")),
                  (X.current.style.display = "none"),
                  document.body.appendChild(X.current)),
                  !Y.current && X.current && (Y.current = X.current.getContext("2d", { willReadFrequently: !0 })))
              }),
              (P[26] = eh),
              (P[27] = J),
              (P[28] = x))
            : (x = P[28])
          let em = x
          P[29] === Symbol.for("react.memo_cache_sentinel")
            ? ((b = () => {
                if (!Z.current) {
                  let e = document.createElement("video")
                  ;((e.style.display = "none"),
                    (e.loop = !0),
                    (e.muted = !0),
                    e.setAttribute("playsinline", ""),
                    document.body.appendChild(e),
                    (Z.current = e))
                }
                ;(X.current ||
                  ((X.current = document.createElement("canvas")),
                  (X.current.style.display = "none"),
                  document.body.appendChild(X.current)),
                  !Y.current && X.current && (Y.current = X.current.getContext("2d", { willReadFrequently: !0 })))
              }),
              (P[29] = b))
            : (b = P[29])
          let ex = b
          P[30] !== J
            ? ((y = async () => {
                ex()
                let e = Z.current
                if (!e || !J.length) return
                let t = e.src || "",
                  n = J.findIndex((e) => t.endsWith(e) || t === e || t.includes(e))
                n < 0 && (n = et.current % Math.max(1, J.length))
                let r = (n + 1) % J.length
                et.current = r
                let i = J[r]
                if (i)
                  try {
                    let t = await fetch(i),
                      n = await t.blob(),
                      r = URL.createObjectURL(n)
                    if (es.current)
                      try {
                        URL.revokeObjectURL(es.current)
                      } catch {}
                    ;((es.current = r), (e.src = r))
                  } catch {}
                ;((e.loop = !0), (e.muted = !0))
                try {
                  await e.play()
                } catch {}
              }),
              (P[30] = J),
              (P[31] = y))
            : (y = P[31])
          let eb = y
          ;(P[32] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = () => {
                ;(async () => {
                  try {
                    let e = n("nBD9"),
                      t = Object.values(e)
                    ee(t)
                  } catch {}
                })()
              }),
              (k = []),
              (P[32] = w),
              (P[33] = k))
            : ((w = P[32]), (k = P[33])),
            (0, o.useEffect)(w, k),
            P[34] !== G || P[35] !== eb || P[36] !== em || P[37] !== R
              ? ((v = () => {
                  let e = (e) => {
                    if (e.metaKey && ("/" === e.key || "?" === e.key || "Slash" === e.code)) {
                      if ((e.preventDefault(), e.repeat)) return
                      let t = "video" === R ? "noise" : "video"
                      ;(B(t), "video" === t && (em(!0), (el.current = 0)))
                      return
                    }
                    if (e.metaKey && "." === e.key) {
                      if ((e.preventDefault(), e.repeat)) return
                      let t = (G + 1) % Q.length
                      ;(O(t), T(Q[t]))
                      return
                    }
                    if (
                      (e.metaKey && "m" === e.key.toLowerCase()) ||
                      (e.metaKey && e.shiftKey && "m" === e.key.toLowerCase()) ||
                      (e.altKey && "m" === e.key.toLowerCase())
                    ) {
                      if ((e.preventDefault(), e.repeat)) return
                      "video" !== R ? (B("video"), em(!0)) : eb()
                      return
                    }
                  }
                  return (
                    window.addEventListener("keydown", e),
                    () => {
                      window.removeEventListener("keydown", e)
                    }
                  )
                }),
                (j = [G, Q, eb, em, R, B]),
                (P[34] = G),
                (P[35] = eb),
                (P[36] = em),
                (P[37] = R),
                (P[38] = v),
                (P[39] = j))
              : ((v = P[38]), (j = P[39])),
            (0, o.useEffect)(v, j),
            P[40] !== F || P[41] !== ef
              ? ((A = () => {
                  let e = 1e3 / F,
                    t = (n) => {
                      try {
                        if (!document.hidden && n - el.current >= e - 1) {
                          let e = ef(),
                            t = e.join("\n")
                          ;(t !== ea.current && ((ea.current = t), q(e)), (el.current = n))
                        }
                      } catch {}
                      eo.current = window.requestAnimationFrame(t)
                    }
                  eo.current = window.requestAnimationFrame(t)
                  let n = () => {
                    document.hidden || (el.current = 0)
                  }
                  return (
                    document.addEventListener("visibilitychange", n),
                    () => {
                      ;(null != eo.current && (window.cancelAnimationFrame(eo.current), (eo.current = null)),
                        document.removeEventListener("visibilitychange", n))
                    }
                  )
                }),
                (S = [ef, F]),
                (P[40] = F),
                (P[41] = ef),
                (P[42] = A),
                (P[43] = S))
              : ((A = P[42]), (S = P[43])),
            (0, o.useEffect)(A, S),
            P[44] === Symbol.for("react.memo_cache_sentinel")
              ? ((_ = () => () => {
                  try {
                    let e = Z.current
                    if (e) {
                      try {
                        e.paused || e.pause()
                      } catch {}
                      e.srcObject = null
                      try {
                        e.remove()
                      } catch {}
                    }
                  } catch {}
                  if (X.current)
                    try {
                      X.current.remove()
                    } catch {}
                  if (es.current) {
                    try {
                      URL.revokeObjectURL(es.current)
                    } catch {}
                    es.current = null
                  }
                  ;((Z.current = null), (X.current = null), (Y.current = null))
                }),
                (C = []),
                (P[44] = _),
                (P[45] = C))
              : ((_ = P[44]), (C = P[45])),
            (0, o.useEffect)(_, C))
          let ey = (0, o.useRef)("noise")
          return (
            P[46] !== em || P[47] !== R
              ? ((M = () => {
                  let e = ey.current
                  ;(("video" === R || "composite" === R) && em(e !== R), (ey.current = R))
                }),
                (N = [R, em]),
                (P[46] = em),
                (P[47] = R),
                (P[48] = M),
                (P[49] = N))
              : ((M = P[48]), (N = P[49])),
            (0, o.useEffect)(M, N),
            P[50] !== em || P[51] !== R || P[52] !== J.length
              ? ((E = () => {
                  ;("video" === R || "composite" === R) && J.length && em(!0)
                }),
                (P[50] = em),
                (P[51] = R),
                (P[52] = J.length),
                (P[53] = E))
              : (E = P[53]),
            P[54] !== em || P[55] !== R || P[56] !== J
              ? ((L = [J, R, em]), (P[54] = em), (P[55] = R), (P[56] = J), (P[57] = L))
              : (L = P[57]),
            (0, o.useEffect)(E, L),
            P[58] !== z || P[59] !== K || P[60] !== V || P[61] !== R || P[62] !== D || P[63] !== $
              ? ((I = {
                  mode: R,
                  setMode: B,
                  asciiChars: z,
                  setAsciiChars: T,
                  columns: K,
                  setColumns: W,
                  rows: D,
                  setRows: U,
                  lines: V,
                  showControls: $,
                  setShowControls: H,
                }),
                (P[58] = z),
                (P[59] = K),
                (P[60] = V),
                (P[61] = R),
                (P[62] = D),
                (P[63] = $),
                (P[64] = I))
              : (I = P[64]),
            I
          )
        },
      },
    )
  },
  YgCO(e, t, n) {
    var r = n("zkY4")
    n.d(
      t,
      {},
      {
        B: function (e, t) {
          return !t?.length || t.some((t) => e.toLowerCase().endsWith(`.${t}`))
        },
        U: function (e) {
          if (e?.includes("*/*")) return
          let t = e?.flatMap((e) => {
            let t = e.toLowerCase()
            return t.startsWith(".")
              ? [t.slice(1)]
              : t.endsWith("/*")
                ? Object.entries(r.extensions).flatMap(([e, n]) => (e.startsWith(t.slice(0, -1)) ? n : []))
                : (r.extensions[t] ?? [])
          })
          return t?.length ? t : void 0
        },
      },
    )
  },
}
//# sourceMappingURL=681877.35f424d529.js.map
