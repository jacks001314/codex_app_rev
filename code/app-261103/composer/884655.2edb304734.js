export const __rspack_esm_ids = [884655]
export const __webpack_modules__ = {
  Obi3() {},
  RWvA(e, t, a) {
    a.d(
      t,
      {},
      {
        c: function (e, t) {
          return e instanceof Error &&
            "code" in e &&
            "file_attachment_too_large" === e.code &&
            "maximumSizeBytes" in e &&
            "number" == typeof e.maximumSizeBytes
            ? t.formatMessage(
                {
                  id: "composer.fileAttachment.uploadError.fileTooLarge",
                  defaultMessage: "File is too large to upload (maximum {maximumFileSize, number} MB)",
                  description:
                    "Toast shown when copying a local file to a non-SSH remote host fails because the file exceeds the direct-transfer size limit. Placeholder maximumFileSize is that limit in megabytes.",
                },
                { maximumFileSize: e.maximumSizeBytes / 1048576 },
              )
            : t.formatMessage({
                id: "composer.fileAttachment.uploadError",
                defaultMessage: "Unable to upload file",
                description: "Toast shown when copying a local file to a remote host fails",
              })
        },
      },
    )
  },
  ke3i(e, t, a) {
    var i = a("zTeN"),
      n = a("OWtl"),
      o = a("tl5a"),
      r = a("vdpW")
    let l = (0, i.i1)(n.u, (e, { get: t }) => (null == e ? null : t(r._2, { hostId: t(o.qX, e), threadId: e }))),
      s = (0, i.i1)(n.u, (e, { get: t }) => null != e && t(r.as, { hostId: t(o.qX, e), threadId: e })),
      c = (0, i.i1)(n.u, (e, { get: t }) => t(r.Ko, t(l, e))?.params.serviceTier),
      u = (0, i.i1)(n.u, (e, { get: t }) => {
        let a = t(r.Ko, t(l, e))
        return a?.permissionParamsSource === "inferred" ? null : (a?.params ?? null)
      })
    a.d(t, {}, { Bs: s, G2: c, MH: u })
  },
  ycOY(e, t, a) {
    let i = "PLEASE IMPLEMENT THIS PLAN:"
    a.d(
      t,
      {},
      {
        B: i,
        y: function (e) {
          return e.startsWith(i)
        },
      },
    )
  },
  XpSi(e, t, a) {
    a.d(t, { AvatarOverlayNativePage: () => oq })
    var i = a("ABep"),
      n = a("QosV"),
      o = a("iRMi"),
      r = a("SZCv"),
      l = a.n(r),
      s = a("HVBu"),
      c = a.n(s),
      u = a("zTeN"),
      d = a("DBCl"),
      p = a("I3F6")
    a("XW6f")
    var m = a("evsE"),
      f = a("OoLr"),
      h = a("RAsy"),
      g = a("zd8w"),
      v = a("v7qY"),
      y = a("Wf1j"),
      w = a("Qgfj"),
      b = a("eYlV"),
      C = a("ChYf"),
      x = a("Dgwo"),
      A = a("RWvA"),
      M = a("binO"),
      I = a("tl5a"),
      S = a("xeus"),
      E = a("whfw"),
      R = a("lqHG"),
      _ = a("ycOY"),
      T = a("PAzX"),
      k = a("HUHI"),
      O = a("ZwwR"),
      P = a("uNjk"),
      N = a("ADtt"),
      L = a("eFn4"),
      F = a("cFUD"),
      q = a("dYlv"),
      j = a("OAko"),
      D = a("CSxw"),
      U = a("FOlV"),
      H = a("TSib"),
      B = a("sXdr"),
      V = a("uIyc"),
      z = a("exuz"),
      Y = a("GO7r"),
      W = a("SGsN"),
      X = a("YXXI"),
      G = a("rxzY"),
      $ = a("rP0s"),
      K = a("TL6G"),
      Q = a("BApD")
    a("SqUc")
    var Z = a("qQ1v"),
      J = a("SIc2"),
      ee = a("amW0"),
      et = a("q3j5"),
      ea = a("iodE"),
      ei = a("oyxz"),
      en = a("hV6B"),
      eo = a("ygO2"),
      er = a("RNul"),
      el = a("OWtl"),
      es = a("ByX5"),
      ec = a("XW6B"),
      eu = a("TYK1"),
      ed = a("MZvE"),
      ep = a("mRSS"),
      em = a("FwtX"),
      ef = a("IjbW"),
      eh = a("LIss"),
      eg = a("suct"),
      ev = a("on57"),
      ey = a("K45w"),
      ew = a("W5pg"),
      eb = a("Lhpx"),
      eC = a("nzx4")
    function ex(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        d,
        p,
        m = (0, n.c)(22)
      ;(m[0] !== e
        ? (({ offset: a, restingEndGap: r, className: t, style: l, ...o } = e),
          (m[0] = e),
          (m[1] = t),
          (m[2] = a),
          (m[3] = o),
          (m[4] = r),
          (m[5] = l))
        : ((t = m[1]), (a = m[2]), (o = m[3]), (r = m[4]), (l = m[5])),
        m[6] !== a
          ? ((s = () => (a.get() > 0 ? "var(--swipe-edge-mask)" : "none")), (m[6] = a), (m[7] = s))
          : (s = m[7]))
      let f = (0, ew.G)(s)
      m[8] !== a ? ((c = () => (a.get() > 0 ? "var(--swipe-edge-clip)" : "none")), (m[8] = a), (m[9] = c)) : (c = m[9])
      let h = (0, ew.G)(c),
        g = (0, ew.G)(a, eM),
        v = (0, ew.G)(r, eA)
      m[10] !== h || m[11] !== v || m[12] !== f || m[13] !== g || m[14] !== l
        ? ((u = { ...l, maskImage: f, clipPath: h, "--swipe-edge-offset": g, "--swipe-edge-gap": v }),
          (m[10] = h),
          (m[11] = v),
          (m[12] = f),
          (m[13] = g),
          (m[14] = l),
          (m[15] = u))
        : (u = m[15])
      let y = u
      return (
        m[16] !== t ? ((d = (0, ev.A)("Root-YvkMT4", t)), (m[16] = t), (m[17] = d)) : (d = m[17]),
        m[18] !== y || m[19] !== o || m[20] !== d
          ? ((p = (0, i.jsx)(eh.P.div, { ...o, className: d, style: y })),
            (m[18] = y),
            (m[19] = o),
            (m[20] = d),
            (m[21] = p))
          : (p = m[21]),
        p
      )
    }
    function eA(e) {
      return `${e}px`
    }
    function eM(e) {
      return `${e}px`
    }
    var eI = a("rK5x"),
      eS = a("VAbi"),
      eE = a("TnSu"),
      eR = a("xNuN")
    let e_ = new WeakMap()
    var eT = a("nkTT")
    let ek = (0, eT.a)({
      name: "arrow-curvedpath-left-lg-light-24",
      canvas: {
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        frame: { x: 0, y: 0, width: 24, height: 24 },
        inkBounds: { x: 4.457275, y: 6.25, width: 15.240967, height: 11.5 },
        visualBounds: { x: 4.457275, y: 6.25, width: 15.240967, height: 11.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 4.457275, y: 6.25, width: 15.240967, height: 11.5 },
        center: { x: 12.077759, y: 12 },
        insets: { top: 6.25, right: 4.301758, bottom: 6.25, left: 4.457275 },
        anchors: { frame: { x: 12, y: 12 }, ink: { x: 12.077759, y: 12 }, foreground: { x: 12.077759, y: 12 } },
      },
      capabilities: ["icon"],
      body: '<path d="M18.9484 6.25C19.3626 6.25 19.6984 6.58579 19.6984 7V11.042C19.6984 11.814 19.4461 12.5168 18.9347 13.0283C18.4232 13.5398 17.7204 13.792 16.9484 13.792H6.85265L9.53039 16.4697C9.82319 16.7626 9.82319 17.2374 9.53039 17.5303C9.23751 17.8231 8.76274 17.8231 8.46984 17.5303L4.82335 13.8838C4.33525 13.3956 4.33525 12.6044 4.82335 12.1162L8.46984 8.46973C8.76274 8.1769 9.23751 8.17686 9.53039 8.46973C9.82319 8.7626 9.82319 9.2374 9.53039 9.53027L6.76867 12.292H16.9484C17.3924 12.292 17.6897 12.1521 17.8741 11.9678C18.0585 11.7833 18.1984 11.486 18.1984 11.042V7C18.1984 6.58585 18.5342 6.2501 18.9484 6.25Z" fill="currentColor"/>',
    })
    var eO = a("HOLv")
    function eP(e, t, a, i) {
      let n = i ? 4 : 10,
        o = i || e === t ? 0 : Math.max(-200, Math.min(200, (a / (t - e)) * 0.9)),
        r = (e) => 1 - (1 + (n - o) * e) * Math.exp(-n * e)
      if (i) return { duration: 0.25, ease: (e) => r(e) / r(1) }
      let l = 0,
        s = 1 / 0
      for (let e = 0; ; e += 0.1) {
        let t = Math.abs(1 - r(e))
        if (s >= 0.001) t < s && ((l = e), (s = t))
        else if (t >= 0.001) s = 1 / 0
        else if (e - l > 1) break
      }
      return { duration: l, ease: (e) => Math.fround(r(Math.fround(e))) }
    }
    function eN(e) {
      let t,
        a,
        o,
        r,
        l,
        s = (0, n.c)(28),
        { elementRef: c, swipe: u, x: d, restingRightGap: p, onReply: m } = e,
        f = u?.input,
        h = (0, ef.I)(),
        v = (0, g.useRef)(null),
        y = (0, g.useRef)(null),
        w = (0, ey.d)(0),
        b = (0, ew.G)(w, eL),
        C = null != f && null != m
      s[0] !== w || s[1] !== m || s[2] !== h || s[3] !== d
        ? ((t = (e) => {
            var t, a
            let i,
              n = v.current
            ;((v.current = null),
              y.current?.stop(),
              w.set(0),
              (y.current = (0, eR.i)(
                d,
                0,
                ((t = d.get()),
                (a = !0 === h),
                { ...(i = eP(t, 0, 0, !1)), duration: a ? 0 : 0.75 * i.duration, type: "tween" }),
              )),
              !e && null != n && n.distance >= 64 && m?.())
          }),
          (s[0] = w),
          (s[1] = m),
          (s[2] = h),
          (s[3] = d),
          (s[4] = t))
        : (t = s[4])
      let x = (0, g.useEffectEvent)(t)
      s[5] !== w || s[6] !== c || s[7] !== p || s[8] !== u || s[9] !== d
        ? ((a = (e) => {
            let t = c.current
            if (null == t || null == u || 0 === t.offsetWidth) return
            let a = t.getBoundingClientRect(),
              i = a.width / t.offsetWidth,
              n = t.closest('[role="log"]')
            if (null != n) {
              let e = n.getBoundingClientRect(),
                t = e.width / n.offsetWidth,
                o =
                  e.right -
                  (n.offsetWidth - n.clientWidth - n.clientLeft + Number.parseFloat(getComputedStyle(n).paddingRight)) *
                    t
              p.set((o - a.right) / i + d.get())
            }
            ;(y.current?.stop(),
              (v.current = {
                distance: 0,
                zoom: e,
                limit: Math.max(0, (u.visibleRight - a.right + d.get() * i - 1 / devicePixelRatio) / i),
              }),
              w.set(0),
              d.set(0))
          }),
          (s[5] = w),
          (s[6] = c),
          (s[7] = p),
          (s[8] = u),
          (s[9] = d),
          (s[10] = a))
        : (a = s[10])
      let A = (0, g.useEffectEvent)(a)
      return (
        s[11] !== A || s[12] !== w || s[13] !== c || s[14] !== C || s[15] !== x || s[16] !== f || s[17] !== d
          ? ((o = () => {
              let e = c.current
              if (!C || null == f || null == e) return
              let t = {
                element: e,
                canStart: (t) => eF(t, e),
                begin: (e, t, a) => A(a),
                update: (e) => {
                  let t = v.current
                  if (null == t) return
                  t.distance = Math.max(0, t.distance - e / t.zoom)
                  let a = Math.max(0, t.distance - 64)
                  w.set(t.distance)
                  let i = Math.min(t.distance, 64) + (64 * Math.tanh(a / 64)) / 4
                  d.set(0 === t.limit ? 0 : t.limit * Math.tanh(i / t.limit))
                },
                end: (e) => x(e),
                close: () => x(!0),
              }
              ;(f.targets.set(e, t), (e.dataset.messageSwipeReply = "true"))
              let a = e.closest('[role="log"]') ?? e,
                i = (t) => {
                  !t.ctrlKey &&
                    (null != v.current ||
                      (Math.abs(t.deltaX) > Math.abs(t.deltaY) &&
                        t.target instanceof Element &&
                        e.contains(t.target) &&
                        eF(t.target, e))) &&
                    (t.preventDefault(), t.stopPropagation())
                }
              return (
                a.addEventListener("wheel", i, { passive: !1 }),
                () => {
                  ;(f.forget(t),
                    a.removeEventListener("wheel", i),
                    delete e.dataset.messageSwipeReply,
                    (v.current = null),
                    y.current?.stop(),
                    w.set(0),
                    d.set(0))
                }
              )
            }),
            (s[11] = A),
            (s[12] = w),
            (s[13] = c),
            (s[14] = C),
            (s[15] = x),
            (s[16] = f),
            (s[17] = d),
            (s[18] = o))
          : (o = s[18]),
        s[19] !== w || s[20] !== c || s[21] !== C || s[22] !== f || s[23] !== d
          ? ((r = [w, c, C, f, d]), (s[19] = w), (s[20] = c), (s[21] = C), (s[22] = f), (s[23] = d), (s[24] = r))
          : (r = s[24]),
        (0, g.useEffect)(o, r),
        s[25] !== C || s[26] !== b
          ? ((l = C
              ? (0, i.jsx)(eh.P.div, {
                  "aria-hidden": !0,
                  className:
                    "pointer-events-none absolute inset-y-0 right-full flex items-center pe-3 text-secondary select-none",
                  style: { opacity: b, scale: b },
                  children: (0, i.jsx)(eO.I, { asset: ek }),
                })
              : null),
            (s[25] = C),
            (s[26] = b),
            (s[27] = l))
          : (l = s[27]),
        l
      )
    }
    function eL(e) {
      return Math.min(1, Math.max(0, e / 64))
    }
    function eF(e, t) {
      if (null != e.closest("input, textarea, select, [contenteditable='true']")) return !1
      for (let a = e; null != a && a !== t; a = a.parentElement)
        if (a.scrollWidth > a.clientWidth && /^(auto|scroll)$/.test(getComputedStyle(a).overflowX)) return !1
      return !0
    }
    var eq = a("eFEt")
    let ej = "input, textarea, select, [contenteditable='true']"
    function eD({
      children: e,
      className: t,
      enabled: a,
      messageKey: n,
      messageRole: o,
      reactions: r,
      reactionsAlign: l = "end",
      onMenuOpenChange: s,
      onReact: c,
      onReply: u,
      swipe: d,
    }) {
      let p = (0, y.A)(),
        m = (0, g.useRef)(null),
        f = (0, g.useRef)(null),
        [h, v] = (0, g.useState)(null),
        w = (0, ey.d)(0),
        b = (0, ey.d)(0),
        C = (0, ew.G)(w, (e) => `${e}px var(--mini-message-lift)`),
        x = (0, g.useRef)(null),
        A = a || null != u,
        M = (0, g.useRef)(null),
        [I, S] = (0, g.useState)(null),
        E = r?.find((e) => e.reacted)?.emoji ?? null,
        R = new Set(r?.map((e) => e.emoji)),
        { open: _, handleOpenChange: T } = (0, eb.Cu)(A && I?.messageKey === n && I.open, (e) => {
          ;(e || document.hasFocus() || (M.current = null), e || S((e) => (null == e ? null : { ...e, open: !1 })))
        }),
        k = (e) => {
          let t = e.closest('[role="log"]'),
            a = t?.parentElement ?? null
          S({
            messageKey: n,
            open: !0,
            all: !1,
            boundaries: [a, t?.firstElementChild].filter((e) => null != e),
            anchor: {
              contextElement: e,
              getBoundingClientRect: () => {
                let t = e.getBoundingClientRect(),
                  i =
                    null == a
                      ? t.top
                      : Math.max(
                          t.top,
                          a.getBoundingClientRect().top +
                            ((f.current?.offsetHeight ?? 0) + 8 + 6) * (t.width / e.offsetWidth),
                        )
                return new DOMRect(t.x, i, t.width, 0)
              },
            },
          })
        }
      ;(0, g.useLayoutEffect)(() => {
        let e = m.current
        if (_ && null != e && null != h)
          return (function (e, t) {
            let a,
              i,
              n = e.closest('[role="log"]'),
              o = n?.firstElementChild,
              r = n?.parentElement
            if (null == n || null == r || !(o instanceof HTMLElement)) return
            e_.get(n)?.()
            let l = n.scrollTop,
              s = t.offsetHeight,
              c = o.style.paddingTop,
              u = Number.parseFloat(getComputedStyle(o).paddingTop),
              d = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
              p = Number.parseFloat(getComputedStyle(n).getPropertyValue("--transition-duration-relaxed")) / 1e3,
              m = (e, t) => {
                if ((a?.stop(), d || 1 > Math.abs(n.scrollTop - e))) {
                  ;(n.scrollTo({ top: e, behavior: "instant" }), t?.())
                  return
                }
                a = (0, eR.i)(n.scrollTop, e, {
                  duration: p,
                  ease: "easeInOut",
                  onUpdate: (e) => n.scrollTo({ top: e, behavior: "instant" }),
                  onComplete: t,
                })
              },
              f = 0,
              h = () => {
                let a = r.getBoundingClientRect(),
                  l = e.getBoundingClientRect(),
                  c = n.getBoundingClientRect().width / n.offsetWidth,
                  d = Number.parseFloat(getComputedStyle(e).getPropertyValue("--mini-message-lift"))
                t.style.setProperty("--mini-reaction-menu-max-height", `${Math.max(0, a.height / c - 12)}px`)
                let p = a.top + (s + 8 + 6 + 4) * c
                if (l.top >= p && l.bottom <= a.bottom) return
                let h = n.scrollTop + (l.top - p) / c - d - f,
                  g = Math.max(0, h)
                if (null != i && 1 > Math.abs(g - i)) return
                i = g
                let v = f
                f = Math.max(0, -h)
                let y = n.scrollTop
                ;((o.style.paddingTop = `${u + f}px`),
                  f !== v && n.scrollTo({ top: y + f - v, behavior: "instant" }),
                  m(g))
              },
              g = new ResizeObserver(h)
            return (
              g.observe(n),
              g.observe(e),
              h(),
              () => {
                ;(g.disconnect(), a?.stop(), (e.dataset.miniReactionsRestoring = "true"))
                let t = () => {
                    ;(a?.stop(), e_.delete(n))
                    let t = n.scrollTop
                    ;((o.style.paddingTop = c),
                      n.scrollTo({ top: Math.max(0, t - f), behavior: "instant" }),
                      delete e.dataset.miniReactionsRestoring)
                  },
                  i = l + f
                ;(e_.set(n, t), m(i, t))
              }
            )
          })(e, h)
      }, [h, _])
      let O = (e) => {
          ;(c?.(e), T(!1))
        },
        P = (e) => p.formatMessage(E === e ? eB.remove : eB.react, { emoji: e }),
        N = "function" == typeof e ? e(m) : e
      return (0, i.jsxs)(eC.AM, {
        open: _,
        onOpenChange: T,
        children: [
          (0, i.jsx)(eC.dT, { virtualRef: { current: I?.anchor ?? null } }),
          (0, i.jsxs)(ex, {
            ref: m,
            className: (0, ev.A)("message-IsDTL7", t),
            style: { translate: C },
            offset: w,
            restingEndGap: b,
            "data-orb-message": !0,
            role: "group",
            tabIndex: A ? 0 : void 0,
            "data-mini-reactions-open": _ || void 0,
            "data-mini-emoji-picker-open": (_ && I?.all) || void 0,
            onContextMenuCapture: (e) => {
              !A ||
                (e.target instanceof Element && null != e.target.closest(ej)) ||
                (e.preventDefault(), e.stopPropagation(), k(e.currentTarget))
            },
            onKeyDownCapture: (e) => {
              A &&
                !(e.target instanceof Element && null != e.target.closest(ej)) &&
                ("ContextMenu" === e.key || (e.shiftKey && "F10" === e.key)) &&
                (e.preventDefault(), e.stopPropagation(), k(e.currentTarget))
            },
            children: [
              (0, i.jsx)(eN, { elementRef: m, x: w, restingRightGap: b, swipe: d, onReply: _ ? void 0 : u }, n),
              N,
              R.size > 0
                ? (0, i.jsx)("div", {
                    className: (0, ev.A)("absolute -top-3 z-20 flex gap-1", "start" === l ? "-start-1" : "-end-1"),
                    "data-avatar-overlay-foreground": !0,
                    children: Array.from(R, (e) =>
                      (0, i.jsx)(
                        en.yl,
                        {
                          "data-avatar-overlay-chromium-overflow": "true",
                          "data-avatar-overlay-hit-region": "message-reaction",
                          "data-transcript-role": o,
                          variant: "reaction-badge",
                          children: a
                            ? (0, i.jsx)(eo.$, {
                                className: "size-full justify-center",
                                "aria-label": P(e),
                                color: "ghostActive",
                                radius: "full",
                                size: "inline",
                                onClick: (t) => {
                                  ;(t.stopPropagation(), O(e))
                                },
                                children: (0, i.jsx)(eE.f, { emoji: e }),
                              })
                            : (0, i.jsx)(eE.f, { emoji: e }),
                        },
                        e,
                      ),
                    ),
                  })
                : null,
            ],
          }),
          (0, i.jsx)(eC.hl, {
            ref: (e) => {
              ;((f.current = e), v(e))
            },
            className: (0, ev.A)("menu-YJNVKo", eq.A.MessageCorners, "z-50 overflow-auto outline-hidden"),
            "aria-label": p.formatMessage({
              id: "mini.messageReactions.title",
              defaultMessage: "Message actions",
              description: "Accessible title of the Mini message menu containing reactions and Reply",
            }),
            align: "user" === o ? "end" : "start",
            side: "top",
            sideOffset: 8,
            collisionBoundary: I?.boundaries,
            collisionPadding: { top: 0, bottom: 6, left: 0, right: 0 },
            sticky: "always",
            style: I?.boundaries.length ? { maxHeight: "var(--mini-reaction-menu-max-height)" } : void 0,
            unstyled: !0,
            onOpenAutoFocus: () => {
              ;(s?.(!0), (M.current = document.activeElement instanceof HTMLElement ? document.activeElement : null))
            },
            onInteractOutside: () => {
              M.current = null
            },
            onCloseAutoFocus: (e) => {
              ;(e.preventDefault(), S((e) => (e?.open ? e : null)))
              let t = x.current
              ;((x.current = null), null == t && M.current?.focus({ preventScroll: !0 }), s?.(!1), t?.())
            },
            children: I?.all
              ? (0, i.jsx)(eH, {
                  children: (0, i.jsx)(eS.T, {
                    embedded: !0,
                    availableHeight: I.boundaries.length
                      ? "calc(var(--mini-reaction-menu-max-height) - var(--spacing) * 2)"
                      : void 0,
                    onBack: () => S({ ...I, all: !1 }),
                    capabilities: { emoji: { selectedEmojis: null == E ? [] : [E], getEmojiLabel: P } },
                    onSelect: (e) => {
                      "emoji" === e.kind && O(e.value)
                    },
                  }),
                })
              : (0, i.jsx)(eU, {
                  reaction: E,
                  reactionsEnabled: a,
                  onReply:
                    null == u
                      ? void 0
                      : () => {
                          ;((x.current = u), T(!1))
                        },
                  onSelect: O,
                  onMore: () => S(null == I ? null : { ...I, all: !0 }),
                }),
          }),
        ],
      })
    }
    function eU(e) {
      let t,
        a = (0, n.c)(6),
        { reaction: o, onSelect: r, onMore: l, onReply: s, reactionsEnabled: c } = e,
        u = void 0 === c || c
      return (
        a[0] !== l || a[1] !== s || a[2] !== r || a[3] !== o || a[4] !== u
          ? ((t = (0, i.jsx)(eH, {
              children: (0, i.jsx)(eI.g, { reaction: o, onSelect: r, onMore: l, onReply: s, reactionsEnabled: u }),
            })),
            (a[0] = l),
            (a[1] = s),
            (a[2] = r),
            (a[3] = o),
            (a[4] = u),
            (a[5] = t))
          : (t = a[5]),
        t
      )
    }
    function eH(e) {
      let t,
        a,
        o,
        r,
        l,
        s = (0, n.c)(10),
        { children: c } = e,
        u = (0, g.useId)(),
        d = `url(#${u})`
      return (
        s[0] !== d ? ((t = { backdropFilter: d }), (s[0] = d), (s[1] = t)) : (t = s[1]),
        s[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((a = (0, i.jsx)("feFlood", { floodColor: "var(--color-surface)", floodOpacity: 0.6, result: "surface" })),
            (o = (0, i.jsxs)("feMerge", {
              children: [
                (0, i.jsx)("feMergeNode", { in: "surface" }),
                (0, i.jsx)("feMergeNode", { in: "SourceGraphic" }),
              ],
            })),
            (s[2] = a),
            (s[3] = o))
          : ((a = s[2]), (o = s[3])),
        s[4] !== u
          ? ((r = (0, i.jsx)("svg", {
              className: "pointer-events-none absolute size-0",
              "aria-hidden": "true",
              children: (0, i.jsx)("defs", {
                children: (0, i.jsxs)("filter", { id: u, colorInterpolationFilters: "sRGB", children: [a, o] }),
              }),
            })),
            (s[4] = u),
            (s[5] = r))
          : (r = s[5]),
        s[6] !== c || s[7] !== t || s[8] !== r
          ? ((l = (0, i.jsxs)(en.yl, { variant: "reaction-picker", style: t, children: [r, c] })),
            (s[6] = c),
            (s[7] = t),
            (s[8] = r),
            (s[9] = l))
          : (l = s[9]),
        l
      )
    }
    let eB = (0, w.YK)({
      react: {
        id: "mini.messageReactions.react",
        defaultMessage: "React with {emoji}",
        description: "Label for adding the given emoji reaction to a Mini agent message",
      },
      remove: {
        id: "mini.messageReactions.remove",
        defaultMessage: "Remove {emoji} reaction",
        description: "Label for removing the selected emoji reaction from a Mini message",
      },
    })
    var eV = a("le5I")
    function ez(e) {
      let t,
        a,
        o,
        r,
        l,
        s = (0, n.c)(35),
        {
          message: c,
          sendingRequestId: u,
          title: d,
          children: p,
          attachments: m,
          footer: f,
          onReply: h,
          swipe: g,
          onMenuOpenChange: v,
          onReact: w,
        } = e,
        b = (0, y.A)()
      s[0] !== b || s[1] !== c.role
        ? ((t =
            "user" === c.role
              ? b.formatMessage({
                  id: "avatarOverlay.transcript.user",
                  defaultMessage: "You",
                  description: "Accessible author label for the user's floating avatar message",
                })
              : b.formatMessage({
                  id: "avatarOverlay.transcript.agent",
                  defaultMessage: "Agent",
                  description: "Accessible author label for the agent's floating avatar message",
                })),
          (s[0] = b),
          (s[1] = c.role),
          (s[2] = t))
        : (t = s[2])
      let C = t,
        x = p ?? (c.text || null),
        A = "user" === c.role && null != m,
        M = (null != x && !1 !== x) || null != c.replyTo || A,
        I = "user" === c.role && M,
        S = (c.reactions?.length ?? 0) > 0 && "not-first:mt-1",
        E = "user" === c.role ? "items-end self-end" : "items-start self-start"
      s[3] !== S || s[4] !== E
        ? ((a = (0, ev.A)("flex min-w-0 flex-col gap-2", S, E)), (s[3] = S), (s[4] = E), (s[5] = a))
        : (a = s[5])
      let R = null != w,
        _ = "user" === c.role ? "start" : "end"
      return (
        s[6] !== c.id || s[7] !== c.text || s[8] !== h
          ? ((o = null != h ? () => h({ id: c.id, text: c.text }) : void 0),
            (s[6] = c.id),
            (s[7] = c.text),
            (s[8] = h),
            (s[9] = o))
          : (o = s[9]),
        s[10] !== m ||
        s[11] !== C ||
        s[12] !== p ||
        s[13] !== A ||
        s[14] !== x ||
        s[15] !== f ||
        s[16] !== M ||
        s[17] !== I ||
        s[18] !== c.replyTo ||
        s[19] !== c.role ||
        s[20] !== u ||
        s[21] !== d
          ? ((r = (e) => {
              let t = "function" == typeof f ? f(e) : f
              return (0, i.jsxs)(i.Fragment, {
                children: [
                  null != m &&
                    !A &&
                    (0, i.jsx)("div", {
                      className: "max-w-full",
                      "data-avatar-overlay-foreground": !0,
                      title: d,
                      children: m,
                    }),
                  M
                    ? (0, i.jsxs)(en.yl, {
                        "data-transcript-role": c.role,
                        "data-mini-send-pending": u,
                        variant: "transcript-message",
                        children: [
                          (0, i.jsxs)("div", {
                            className: "flex min-h-0 min-w-0 flex-col gap-2",
                            "data-avatar-overlay-foreground": !0,
                            title: d,
                            children: [
                              A && (0, i.jsx)("div", { className: "max-w-full overflow-x-auto", children: m }),
                              null != c.replyTo &&
                                (0, i.jsx)("div", {
                                  className: "shrink-0",
                                  children: (0, i.jsx)(eV.J, { reply: c.replyTo }),
                                }),
                              null != x &&
                                (0, i.jsx)("div", {
                                  className: (0, ev.A)(
                                    "min-w-0 text-size-chat leading-4 break-words whitespace-pre-wrap text-default select-text",
                                    null != p && "MessageContent-LzFTOG",
                                  ),
                                  role: "group",
                                  "aria-label": C,
                                  dir: "auto",
                                  children: x,
                                }),
                            ],
                          }),
                          I &&
                            (0, i.jsx)("div", {
                              className: "contents",
                              "data-avatar-overlay-foreground": !0,
                              children: t,
                            }),
                        ],
                      })
                    : null,
                  !I &&
                    null != t &&
                    (0, i.jsx)("div", { className: "contents", "data-avatar-overlay-foreground": !0, children: t }),
                ],
              })
            }),
            (s[10] = m),
            (s[11] = C),
            (s[12] = p),
            (s[13] = A),
            (s[14] = x),
            (s[15] = f),
            (s[16] = M),
            (s[17] = I),
            (s[18] = c.replyTo),
            (s[19] = c.role),
            (s[20] = u),
            (s[21] = d),
            (s[22] = r))
          : (r = s[22]),
        s[23] !== c.id ||
        s[24] !== c.reactions ||
        s[25] !== c.role ||
        s[26] !== v ||
        s[27] !== w ||
        s[28] !== g ||
        s[29] !== a ||
        s[30] !== R ||
        s[31] !== _ ||
        s[32] !== o ||
        s[33] !== r
          ? ((l = (0, i.jsx)(eD, {
              className: a,
              enabled: R,
              swipe: g,
              messageKey: c.id,
              messageRole: c.role,
              reactions: c.reactions,
              reactionsAlign: _,
              onMenuOpenChange: v,
              onReact: w,
              onReply: o,
              children: r,
            })),
            (s[23] = c.id),
            (s[24] = c.reactions),
            (s[25] = c.role),
            (s[26] = v),
            (s[27] = w),
            (s[28] = g),
            (s[29] = a),
            (s[30] = R),
            (s[31] = _),
            (s[32] = o),
            (s[33] = r),
            (s[34] = l))
          : (l = s[34]),
        l
      )
    }
    var eY = a("QxH2"),
      eW = a("v0Gf"),
      eX = a("bIvi")
    function eG(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        d,
        p,
        m,
        f,
        h,
        v,
        w,
        b,
        C,
        x,
        A,
        M,
        I,
        S,
        E = (0, n.c)(51),
        {
          ref: R,
          children: _,
          active: T,
          maxHeight: k,
          limitToRecentMessages: O,
          onLatestVisible: P,
          onLoadOlder: N,
        } = e,
        L = void 0 === T || T,
        F = void 0 === O || O,
        q = (0, y.A)(),
        j = (0, g.useRef)(null),
        D = (0, g.useRef)(null),
        U = (0, g.useRef)(!0),
        H = (0, g.useRef)(!1),
        B = (0, g.useRef)(0),
        V = (0, g.useRef)(null),
        z = (0, g.useRef)(null),
        Y = (0, g.useRef)(null),
        W = (0, g.useRef)(!1),
        X = (0, g.useRef)(!1),
        G = null != N
      E[0] !== P ? ((t = () => P?.()), (E[0] = P), (E[1] = t)) : (t = E[1])
      let $ = (0, g.useEffectEvent)(t)
      E[2] !== N
        ? ((a = async () => {
            let e = j.current,
              t = D.current
            null == e ||
              null == t ||
              e.clientHeight <= 0 ||
              e.scrollTop > 64 ||
              W.current ||
              null == N ||
              ((W.current = !0),
              await (async () => {
                for (;;) {
                  let a = t.scrollHeight,
                    i = await N()
                  if (
                    (await (0, eY.JA)(),
                    (X.current = "stop" === i || t.scrollHeight <= a),
                    X.current || j.current !== e || e.clientHeight <= 0 || e.scrollHeight - e.clientHeight > 64)
                  )
                    break
                }
              })()
                .catch(() => {
                  X.current = !0
                })
                .finally(() => {
                  W.current = !1
                }))
          }),
          (E[2] = N),
          (E[3] = a))
        : (a = E[3])
      let K = (0, eX.K)(a)
      E[4] !== K
        ? ((o = () => {
            let e = j.current
            null != e && !X.current && e.scrollHeight - e.clientHeight <= 64 && K()
          }),
          (E[4] = K),
          (E[5] = o))
        : (o = E[5])
      let Q = (0, g.useEffectEvent)(o)
      ;(E[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((r = () => ({
            scrollToBottom() {
              let e = j.current
              return (
                null != e &&
                (((U.current = !0), e.scrollHeight - e.clientHeight - e.scrollTop <= 1)
                  ? ((H.current = !1), !1)
                  : ((H.current = !matchMedia("(prefers-reduced-motion: reduce)").matches),
                    e.scrollTo({ top: e.scrollHeight, behavior: H.current ? "smooth" : "instant" }),
                    !0))
              )
            },
          })),
          (E[6] = r))
        : (r = E[6]),
        (0, g.useImperativeHandle)(R, r),
        E[7] !== L
          ? ((l = () => {
              L && ((U.current = !0), (H.current = !1))
            }),
            (s = [L]),
            (E[7] = L),
            (E[8] = l),
            (E[9] = s))
          : ((l = E[8]), (s = E[9])),
        (0, g.useLayoutEffect)(l, s),
        E[10] !== L || E[11] !== Q || E[12] !== $ || E[13] !== F || E[14] !== k
          ? ((c = () => {
              if (!L) return
              X.current = !1
              let e = j.current,
                t = D.current
              if (null == e || null == t) return
              null == k
                ? e.style.removeProperty("--mini-transcript-max-height")
                : e.style.setProperty("--mini-transcript-max-height", `${k}px`)
              let a = () => {
                  null != V.current && 1 >= Math.abs(e.scrollTop - V.current) && (U.current = !0)
                  let a = Array.from(t.querySelectorAll("[data-orb-message]")),
                    i = a.slice(-3),
                    n = Number.parseFloat(getComputedStyle(t).rowGap),
                    o = i.reduce(e$, n * Math.max(0, i.length - 1)),
                    r = a.at(-4),
                    l = null == r ? 0 : r.clientHeight / 2 + n,
                    s = getComputedStyle(e),
                    c = Number.parseFloat(s.paddingTop) + Number.parseFloat(s.paddingBottom)
                  if (
                    ((e.style.maxHeight = `${Math.min(F ? o + l : 1 / 0, k ?? 1 / 0) + c}px`),
                    (V.current = Math.max(0, e.scrollHeight - e.clientHeight)),
                    null !=
                      t.querySelector('[data-mini-reactions-open="true"], [data-mini-reactions-restoring="true"]'))
                  ) {
                    ;((U.current = !1), e.removeAttribute("data-transcript-pinned"), (Y.current = null))
                    return
                  }
                  ;(U.current
                    ? H.current
                      ? e.scrollTo({ top: e.scrollHeight, behavior: "smooth" })
                      : ((e.scrollTop = e.scrollHeight), (B.current = e.scrollTop), $())
                    : Y.current?.element.isConnected &&
                      ((e.scrollTop = e.scrollTop + (Y.current.element.offsetTop - Y.current.top)),
                      (B.current = e.scrollTop)),
                    e.toggleAttribute("data-transcript-pinned", U.current && !H.current))
                  let u = a[0]
                  ;((Y.current = null == u ? null : { element: u, top: u.offsetTop }), Q())
                },
                i = new ResizeObserver(a)
              return (i.observe(t, { box: "border-box" }), i.observe(e), a(), () => i.disconnect())
            }),
            (E[10] = L),
            (E[11] = Q),
            (E[12] = $),
            (E[13] = F),
            (E[14] = k),
            (E[15] = c))
          : (c = E[15]),
        E[16] !== L || E[17] !== G || E[18] !== F || E[19] !== k
          ? ((u = [L, G, F, k]), (E[16] = L), (E[17] = G), (E[18] = F), (E[19] = k), (E[20] = u))
          : (u = E[20]),
        (0, g.useLayoutEffect)(c, u),
        E[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, ev.A)("pointer-events-auto -mx-12 flow-root min-w-0", "Root-ikH4oJ")), (E[21] = d))
          : (d = E[21]),
        E[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = (0, ev.A)(
              "scrollbar-none -my-6 overflow-x-hidden overflow-y-auto overscroll-contain px-12 py-6 has-[[data-mini-reactions-open=true]]:overflow-y-hidden",
              "Viewport-cN8nB3",
            )),
            (E[22] = p))
          : (p = E[22]),
        E[23] !== q
          ? ((m = q.formatMessage({
              id: "avatarOverlay.transcript.label",
              defaultMessage: "Conversation transcript",
              description: "Accessible label for the message history beside a floating avatar",
            })),
            (E[23] = q),
            (E[24] = m))
          : (m = E[24]),
        E[25] !== L || E[26] !== K || E[27] !== P
          ? ((f = (e) => {
              let t = e.currentTarget
              if (!L || e.target !== t) return
              let a = t.scrollHeight - t.clientHeight - t.scrollTop <= 1,
                i = t.scrollTop < B.current
              ;((a || i) && ((U.current = a), (H.current = !1), t.toggleAttribute("data-transcript-pinned", a)),
                a && P?.(),
                (B.current = t.scrollTop),
                i &&
                  null ==
                    t.querySelector('[data-mini-reactions-open="true"], [data-mini-reactions-restoring="true"]') &&
                  K())
            }),
            (E[25] = L),
            (E[26] = K),
            (E[27] = P),
            (E[28] = f))
          : (f = E[28]),
        E[29] !== K
          ? ((h = (e) => {
              e.deltaY < 0 && e.currentTarget.scrollTop <= 0 && K()
            }),
            (v = (e) => {
              if (e.defaultPrevented || e.repeat) return
              let t = e.target,
                a = " " === e.key || "Spacebar" === e.key
              ;(t instanceof HTMLElement &&
                (t.isContentEditable ||
                  null != t.closest("input, select, textarea") ||
                  (a && null != t.closest('button, [role="button"]')))) ||
                (("ArrowUp" === e.key || "PageUp" === e.key || "Home" === e.key || (a && e.shiftKey)) &&
                  e.currentTarget.scrollTop <= 0 &&
                  K())
            }),
            (E[29] = K),
            (E[30] = h),
            (E[31] = v))
          : ((h = E[30]), (v = E[31])),
        E[32] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (e) => {
              z.current = 1 === e.touches.length ? e.touches[0] : null
            }),
            (E[32] = w))
          : (w = E[32]),
        E[33] !== K
          ? ((b = (e) => {
              let t = z.current,
                a = 1 === e.touches.length ? e.touches[0] : null
              if (null == t || null == a || t.identifier !== a.identifier) {
                z.current = null
                return
              }
              let i = a.clientX - t.clientX,
                n = a.clientY - t.clientY
              !(8 > Math.max(Math.abs(i), Math.abs(n))) &&
                ((z.current = null), n > Math.abs(i) && e.currentTarget.scrollTop <= 0 && K())
            }),
            (E[33] = K),
            (E[34] = b))
          : (b = E[34]),
        E[35] === Symbol.for("react.memo_cache_sentinel")
          ? ((C = () => {
              z.current = null
            }),
            (x = () => {
              z.current = null
            }),
            (E[35] = C),
            (E[36] = x))
          : ((C = E[35]), (x = E[36])),
        E[37] !== m || E[38] !== f || E[39] !== h || E[40] !== v || E[41] !== b
          ? ((A = {
              ref: j,
              role: "log",
              "aria-label": m,
              "aria-relevant": "additions text",
              tabIndex: 0,
              onScroll: f,
              onWheel: h,
              onKeyDown: v,
              onTouchStart: w,
              onTouchMove: b,
              onTouchEnd: C,
              onTouchCancel: x,
            }),
            (E[37] = m),
            (E[38] = f),
            (E[39] = h),
            (E[40] = v),
            (E[41] = b),
            (E[42] = A))
          : (A = E[42]))
      let Z = F ? "gap-3" : "gap-1.5"
      return (
        E[43] !== Z
          ? ((M = (0, ev.A)("relative flex flex-col", "Content-CoNTNa", Z)), (E[43] = Z), (E[44] = M))
          : (M = E[44]),
        E[45] !== _ || E[46] !== M
          ? ((I = (0, i.jsx)("div", { ref: D, className: M, children: _ })), (E[45] = _), (E[46] = M), (E[47] = I))
          : (I = E[47]),
        E[48] !== A || E[49] !== I
          ? ((S = (0, i.jsx)(eW.Q, { className: d, fade: "mask", scrollClassName: p, scrollProps: A, children: I })),
            (E[48] = A),
            (E[49] = I),
            (E[50] = S))
          : (S = E[50]),
        S
      )
    }
    function e$(e, t) {
      return e + t.clientHeight
    }
    var eK = a("JwGC"),
      eQ = a("BfCG"),
      eZ = a("WMXa"),
      eJ = a("rauh"),
      e0 = a("dABh"),
      e1 = a("mdX3"),
      e2 = a("DVHD"),
      e3 = "Layer-vdla4T",
      e4 = a("tPd1")
    function e5(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        d,
        p,
        m,
        f,
        h,
        v,
        w,
        b,
        C,
        x,
        A,
        M,
        I,
        S,
        E = (0, n.c)(72),
        {
          active: R,
          typingAgent: _,
          controller: T,
          conversationId: k,
          maxHeight: O,
          media: P,
          renderMessageContent: N,
          limitToRecentMessages: L,
          entrance: F,
          onMenuOpenChange: q,
          onReply: j,
          swipe: D,
        } = e,
        U = void 0 === L || L,
        H = (0, u.gh)(el.u),
        B = (0, y.A)(),
        V = (0, g.useRef)(null),
        z = (0, g.useRef)(null),
        [Y, W] = (0, g.useState)(null)
      ;(E[0] !== R || E[1] !== T.services.conversations || E[2] !== k || E[3] !== H
        ? ((t = () => {
            var e
            let t, a, i, n, o
            if (!R || null == V.current) return
            let r =
                ((e = V.current),
                (t = new Map()),
                (a = !1),
                (i = window.matchMedia("(prefers-reduced-motion: reduce)")),
                (n = () => {
                  for (let e of t.values()) e()
                }),
                (o = () => {
                  document.hidden && n()
                }),
                document.addEventListener("visibilitychange", o),
                i.addEventListener("change", n),
                {
                  capture(n, o) {
                    let r, l
                    if ((t.get(o)?.(), a || i.matches || document.hidden)) return () => {}
                    let s = 0,
                      c = 0,
                      u = null,
                      d = null,
                      p = null,
                      m = !1,
                      f = new Map(),
                      h = new Set(),
                      g = e.querySelector('[role="log"]')?.getBoundingClientRect(),
                      v = e.querySelectorAll("[data-orb-message]")
                    for (let e = v.length - 1; e >= 0; e--) {
                      let t = v[e],
                        a = t.getBoundingClientRect()
                      if (null != g && a.bottom <= g.top) break
                      null != g && a.top < g.bottom && f.set(t, a.top)
                    }
                    let y = () => {
                        if (!m) {
                          for (let t of ((m = !0),
                          window.removeEventListener("resize", y),
                          e.removeEventListener("scroll", y, !0),
                          w.disconnect(),
                          r?.disconnect(),
                          cancelAnimationFrame(s),
                          window.clearTimeout(c),
                          l?.(),
                          h))
                            t.cancel()
                          ;(p?.remove(),
                            u?.style.removeProperty("visibility"),
                            d?.removeAttribute("data-message-send-animating"),
                            t.delete(o))
                        }
                      },
                      w = new MutationObserver((t) => {
                        for (let a of t)
                          for (let t of a.addedNodes) {
                            if (!(t instanceof HTMLElement)) continue
                            let a = [t, ...t.querySelectorAll("[data-mini-send-pending]")].find(
                              (e) => e.dataset.miniSendPending === o,
                            )
                            if (null != a) {
                              ;((d = (u = a).closest("[data-orb-message]")),
                                d?.setAttribute("data-message-send-animating", ""),
                                (u.style.visibility = "hidden"),
                                w.disconnect(),
                                (r = new ResizeObserver(() => {
                                  if (null == u || !u.isConnected || e.closest("[inert]")) return void y()
                                  let t = u.getBoundingClientRect()
                                  if (0 === t.width || 0 === t.height) return
                                  r?.disconnect()
                                  let a = Array.from(f, ([e, t]) => ({
                                      element: e,
                                      offset: (t - e.getBoundingClientRect().top) / e.currentCSSZoom,
                                    })),
                                    i = getComputedStyle(u),
                                    o = Array.from(u.children, (e) => e.getBoundingClientRect().width),
                                    c = u.cloneNode(!0)
                                  if (!(c instanceof HTMLElement)) return void y()
                                  for (let e of (((p = document.createElement("div")).className = `fixed ${e3}`),
                                  p.setAttribute("aria-hidden", "true"),
                                  p.setAttribute("data-message-send-animating", ""),
                                  (p.inert = !0),
                                  (p.style.zoom = String(u.currentCSSZoom / document.body.currentCSSZoom)),
                                  [
                                    "--avatar-overlay-message-glass-color",
                                    "--avatar-overlay-message-inset-background",
                                  ]))
                                    p.style.setProperty(e, i.getPropertyValue(e))
                                  document.body.append(p)
                                  let d = p.currentCSSZoom
                                  ;(Object.assign(p.style, {
                                    left: `${t.left / d}px`,
                                    top: `${t.top / d}px`,
                                    width: `${t.width / d}px`,
                                    font: i.font,
                                    color: i.color,
                                  }),
                                    c.removeAttribute("data-mini-send-pending"),
                                    (c.style.visibility = "visible"),
                                    (c.style.position = "relative"),
                                    (c.style.maxWidth = "none"),
                                    (c.style.width = `${t.width / d}px`),
                                    Array.from(c.children).forEach((e, t) => {
                                      e instanceof HTMLElement && o[t] > 0 && (e.style.width = `${o[t] / d}px`)
                                    }),
                                    p.append(c))
                                  let m = new DOMRect(
                                    n.left - window.screenX,
                                    n.top - window.screenY,
                                    n.width,
                                    n.height,
                                  )
                                  l = (0, eZ.x4)(p, m, eZ.ZK, y)
                                  let g = Math.max(0, (n.width - t.width) / d)
                                  if (g > 0) {
                                    let e = c.animate(
                                      [
                                        { width: `${n.width / d}px`, translate: `${-g}px 0px` },
                                        { width: `${t.width / d}px`, translate: "0px 0px" },
                                      ],
                                      (0, eZ.P5)(eZ.ZK),
                                    )
                                    ;((e.startTime = document.timeline.currentTime), h.add(e))
                                  }
                                  for (let { element: e, offset: t } of a)
                                    e.isConnected &&
                                      0 !== t &&
                                      h.add(
                                        e.animate(
                                          [{ translate: `0px ${t}px` }, { translate: "0px 0px" }],
                                          (0, eZ.P5)(eZ.ZK),
                                        ),
                                      )
                                  ;(window.addEventListener("resize", y, { once: !0 }),
                                    (s = requestAnimationFrame(() => {
                                      e.addEventListener("scroll", y, { once: !0, capture: !0 })
                                    })))
                                })).observe(u))
                              return
                            }
                          }
                      })
                    return (
                      w.observe(e, { childList: !0, subtree: !0 }),
                      t.set(o, y),
                      (c = window.setTimeout(y, 1e4)),
                      y
                    )
                  },
                  dispose() {
                    ;((a = !0),
                      n(),
                      document.removeEventListener("visibilitychange", o),
                      i.removeEventListener("change", n))
                  },
                }),
              l = {
                conversationId: k,
                send: async (e, t) => {
                  let a
                  try {
                    await (0, Q.d)({
                      ...e,
                      conversations: T.services.conversations,
                      onOptimisticMessage: (e) => {
                        let i = z.current?.scrollToBottom()
                        null == t || i || (a = r.capture(t, e))
                      },
                    })
                  } catch (e) {
                    throw (a?.(), e)
                  }
                },
              }
            return (
              H.set(e4.wz, l),
              () => {
                ;(r.dispose(), H.get(e4.wz) === l && H.set(e4.wz, null))
              }
            )
          }),
          (E[0] = R),
          (E[1] = T.services.conversations),
          (E[2] = k),
          (E[3] = H),
          (E[4] = t))
        : (t = E[4]),
        E[5] !== R || E[6] !== T || E[7] !== k || E[8] !== H
          ? ((a = [R, k, T, H]), (E[5] = R), (E[6] = T), (E[7] = k), (E[8] = H), (E[9] = a))
          : (a = E[9]),
        (0, g.useLayoutEffect)(t, a),
        R || null == Y || W(null))
      let X = (0, g.useSyncExternalStore)(T.state.subscribe, T.state.getSnapshot, T.state.getSnapshot)
      E[10] !== T.roomId || E[11] !== T.services.conversations
        ? ((o = T.services.conversations.timeline(T.roomId)),
          (E[10] = T.roomId),
          (E[11] = T.services.conversations),
          (E[12] = o))
        : (o = E[12])
      let G = o,
        $ = (0, g.useSyncExternalStore)(G.subscribe, G.getSnapshot, G.getSnapshot)
      E[13] !== $.messages ? ((r = $.messages.findLast(e9)), (E[13] = $.messages), (E[14] = r)) : (r = E[14])
      let K = r,
        Z = K?.id,
        J = (0, g.useRef)(null)
      ;(E[15] !== R || E[16] !== T.services.typing || E[17] !== $.loaded || E[18] !== $.messages
        ? ((l = () => {
            if (!R || !$.loaded) return
            let e = J.current
            if (((J.current = $.messages.at(-1)?.id ?? null), null == e)) return
            let t = $.messages.findIndex((t) => t.id === e)
            if (-1 !== t)
              for (let e of $.messages.slice(t + 1)) e.self || e.deletedAt || T.services.typing.complete(e.senderId)
          }),
          (E[15] = R),
          (E[16] = T.services.typing),
          (E[17] = $.loaded),
          (E[18] = $.messages),
          (E[19] = l))
        : (l = E[19]),
        E[20] !== R || E[21] !== T || E[22] !== $.loaded || E[23] !== $.messages
          ? ((s = [R, T, $.loaded, $.messages]),
            (E[20] = R),
            (E[21] = T),
            (E[22] = $.loaded),
            (E[23] = $.messages),
            (E[24] = s))
          : (s = E[24]),
        (0, g.useLayoutEffect)(l, s))
      let ee = (0, g.useSyncExternalStore)(T.notices.subscribe, T.notices.getSnapshot, T.notices.getSnapshot),
        et = (0, g.useRef)(null)
      ;(E[25] !== T
        ? ((c = () => (
            (et.current = T),
            T.start(),
            () => {
              ;((et.current = null),
                queueMicrotask(() => {
                  et.current !== T && T.dispose()
                }))
            }
          )),
          (d = [T]),
          (E[25] = T),
          (E[26] = c),
          (E[27] = d))
        : ((c = E[26]), (d = E[27])),
        (0, g.useEffect)(c, d),
        E[28] !== R || E[29] !== T.roomId || E[30] !== T.services.conversations || E[31] !== G
          ? ((p = () => {
              let e = V.current?.querySelector('[role="log"]')
              if (
                !R ||
                !document.hasFocus() ||
                document.hidden ||
                null == e ||
                e.scrollHeight - e.clientHeight - e.scrollTop > 1
              )
                return
              let t = G.getSnapshot().messages.findLast(e8)
              null != t && T.services.conversations.markRead(T.roomId, t.id)
            }),
            (E[28] = R),
            (E[29] = T.roomId),
            (E[30] = T.services.conversations),
            (E[31] = G),
            (E[32] = p))
          : (p = E[32]))
      let ea = p,
        es = (0, g.useEffectEvent)(ea)
      ;(E[33] !== es
        ? ((m = () => (window.addEventListener("focus", es), () => window.removeEventListener("focus", es))),
          (E[33] = es),
          (E[34] = m))
        : (m = E[34]),
        E[35] === Symbol.for("react.memo_cache_sentinel") ? ((f = []), (E[35] = f)) : (f = E[35]),
        (0, g.useEffect)(m, f),
        E[36] !== ea || E[37] !== H
          ? ((h = (e) => {
              ;(0, eQ.X)(H, e) && ea()
            }),
            (E[36] = ea),
            (E[37] = H),
            (E[38] = h))
          : (h = E[38]))
      let ec = h,
        eu = new Map($.messages.map(e7)),
        ed = B.formatMessage({
          id: "avatarOverlay.transcript.attachmentReply",
          defaultMessage: "Attachment",
          description: "Quote for a dot message containing only attachments",
        }),
        ep = X.error || $.error
      E[39] !== R || E[40] !== T || E[41] !== G
        ? ((v = async () => {
            if (!R) return "stop"
            await T.start()
            let e = G.getSnapshot().cursors.before
            if (null == e || G.getSnapshot().olderLoading) return "stop"
            await T.services.conversations.older(T.roomId, !0)
            let t = G.getSnapshot().cursors.before
            return null != t && t !== e ? "continue" : "stop"
          }),
          (E[39] = R),
          (E[40] = T),
          (E[41] = G),
          (E[42] = v))
        : (v = E[42])
      let em = (0, eX.K)(v)
      ;(E[43] !== R || E[44] !== F || E[45] !== ep || E[46] !== $.loaded
        ? ((w = () => {
            R && ($.loaded || ep) && F?.reveal(V.current)
          }),
          (E[43] = R),
          (E[44] = F),
          (E[45] = ep),
          (E[46] = $.loaded),
          (E[47] = w))
        : (w = E[47]),
        E[48] !== R || E[49] !== F || E[50] !== ep || E[51] !== $.loaded || E[52] !== $.messages
          ? ((b = [R, F, ep, $.loaded, $.messages]),
            (E[48] = R),
            (E[49] = F),
            (E[50] = ep),
            (E[51] = $.loaded),
            (E[52] = $.messages),
            (E[53] = b))
          : (b = E[53]),
        (0, g.useLayoutEffect)(w, b))
      let ef =
        null == X.room ||
        "share_only" === X.room.lifecycleState ||
        ("pending_request" === X.room.lifecycleState && "outgoing" === X.room.requestDirection)
      ;(E[54] === Symbol.for("react.memo_cache_sentinel") ? ((C = (0, i.jsx)(er.y, {})), (E[54] = C)) : (C = E[54]),
        E[55] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, i.jsxs)("div", {
              className: "flex justify-center",
              "data-avatar-overlay-foreground": !0,
              role: "status",
              children: [
                C,
                (0, i.jsx)("span", {
                  className: "sr-only",
                  children: (0, i.jsx)(ei.A, {
                    id: "avatarOverlay.transcript.loading",
                    defaultMessage: "Loading messages",
                    description: "Accessible status while Mini loads the selected dot's conversation transcript",
                  }),
                }),
              ],
            })),
            (E[55] = x))
          : (x = E[55]))
      let eh = x
      E[56] !== T || E[57] !== ep
        ? ((A = ep
            ? (0, i.jsxs)(en.yl, {
                variant: "transcript-message",
                children: [
                  (0, i.jsx)("div", { "data-avatar-overlay-foreground": !0, role: "alert", children: ep }),
                  (0, i.jsx)(eo.$, {
                    "data-avatar-overlay-foreground": !0,
                    onClick: () => void T.refresh(),
                    children: (0, i.jsx)(ei.A, {
                      id: "avatarOverlay.transcript.retry",
                      defaultMessage: "Retry loading messages",
                      description: "Retry button when Mini cannot load the selected dot's conversation",
                    }),
                  }),
                ],
              })
            : null),
          (E[56] = T),
          (E[57] = ep),
          (E[58] = A))
        : (A = E[58])
      let eg = $.loaded || ep ? null : eh,
        ev = $.loaded
          ? (0, i.jsxs)(eG, {
              ref: z,
              active: R,
              maxHeight: O,
              limitToRecentMessages: U,
              onLatestVisible: ea,
              onLoadOlder: R && null != $.cursors.before ? em : void 0,
              children: [
                $.olderLoading ? eh : null,
                $.messages.filter(e6).map((e, t, a) => {
                  let n,
                    o = null == e.replyTo ? void 0 : eu.get(e.replyTo.messageId)
                  null != o
                    ? (n = (0, e0.yv)(o, B) || (o.attachments.length ? ed : void 0))
                    : null == e.replyTo || $.historyIds.has(e.replyTo.messageId) || (n = e.replyTo.text)
                  let r =
                      n ||
                      B.formatMessage({
                        id: "avatarOverlay.transcript.unavailableReply",
                        defaultMessage: "Original message unavailable",
                        description: "Quote when the original dot message was removed or has no available preview",
                      }),
                    l = (0, e0.Sk)(e)
                  return (0, i.jsx)(
                    ez,
                    {
                      sendingRequestId: e.self && "pending" === e.deliveryState ? e.requestId || e.id : void 0,
                      swipe: R ? D : void 0,
                      attachments:
                        e.attachments.length > 0
                          ? (0, i.jsx)(eZ.od, {
                              controller: T,
                              message: e,
                              active: R,
                              onOpenImage: W,
                              renderAttachment: (e, t) => {
                                let a = (0, e0.gq)(e, t)
                                return null == a
                                  ? void 0
                                  : (0, i.jsx)(eJ.d, { message: e, attachment: t, context: a, media: P })
                              },
                            })
                          : void 0,
                      footer: (i) =>
                        T.services.renderMessageFooter?.(
                          e,
                          { subscribe: G.subscribe, getSnapshot: () => G.getSnapshot().messages },
                          a[t + 1],
                          i,
                        ),
                      title: e.createdAt
                        ? B.formatDate(e.createdAt, { dateStyle: "medium", timeStyle: "short" })
                        : void 0,
                      onMenuOpenChange: q,
                      onReply:
                        ef || e.deliveryState || null == j
                          ? void 0
                          : () => j({ id: e.id, text: (0, e0.yv)(e, B) || ed }),
                      onReact:
                        e.deliveryState || $.reactionsPending.has(e.id)
                          ? void 0
                          : (t) => {
                              T.services.conversations.react(T.roomId, e.id, t)
                            },
                      message: {
                        id: e.id,
                        role: e.self ? "user" : "agent",
                        text: l,
                        reactions: e.reactions,
                        replyTo: null == e.replyTo ? void 0 : { id: e.replyTo.messageId, text: r },
                      },
                      children:
                        N(e) ??
                        ((e.self && l === e.text) || "" === l
                          ? l || null
                          : (0, i.jsx)(e1.E, {
                              splitRichBlocks: !0,
                              conversationId: k,
                              renderInlineVisualizations: null != e.senderAeonId && e.senderAeonId === X.room?.aeon_id,
                              text: l,
                            })),
                    },
                    e.requestId || e.id,
                  )
                }),
                R && null != _
                  ? (0, i.jsx)(
                      te,
                      {
                        agent: _,
                        controller: T,
                        orbitMemberId: X.room?.members.find((e) => e.aeon_id === X.room?.aeon_id)?.id,
                        limitToRecentMessages: U,
                      },
                      Z,
                    )
                  : null,
              ],
            })
          : null
      return (
        E[59] !== R || E[60] !== Y || E[61] !== q
          ? ((M =
              null != Y && R
                ? (0, i.jsx)(eK.C, {
                    src: Y.src,
                    alt: Y.alt,
                    open: !0,
                    onOpenChange: (e) => {
                      e || W(null)
                    },
                    onOpenAutoFocus: () => q?.(!0),
                    onCloseAutoFocus: (e) => {
                      ;(q?.(!1), e.preventDefault(), Y.trigger.focus({ preventScroll: !0 }))
                    },
                  })
                : null),
            (E[59] = R),
            (E[60] = Y),
            (E[61] = q),
            (E[62] = M))
          : (M = E[62]),
        E[63] !== ee
          ? ((I =
              null != ee
                ? (0, i.jsx)(en.yl, {
                    variant: "transcript-message",
                    role: "status",
                    children: (0, i.jsx)("div", { "data-avatar-overlay-foreground": !0, children: ee.text }),
                  })
                : null),
            (E[63] = ee),
            (E[64] = I))
          : (I = E[64]),
        E[65] !== ec || E[66] !== A || E[67] !== eg || E[68] !== ev || E[69] !== M || E[70] !== I
          ? ((S = (0, i.jsxs)("div", {
              ref: V,
              onPointerDownCapture: ec,
              onKeyDownCapture: ec,
              children: [A, eg, ev, M, I],
            })),
            (E[65] = ec),
            (E[66] = A),
            (E[67] = eg),
            (E[68] = ev),
            (E[69] = M),
            (E[70] = I),
            (E[71] = S))
          : (S = E[71]),
        S
      )
    }
    function e6(e) {
      return !e.deletedAt
    }
    function e7(e) {
      return [e.id, e]
    }
    function e8(e) {
      return !e.deliveryState
    }
    function e9(e) {
      return !e.self && !e.deletedAt
    }
    function te(e) {
      let t,
        a,
        o,
        r = (0, n.c)(10),
        { agent: l, controller: s, orbitMemberId: c, limitToRecentMessages: u } = e,
        d = (0, ef.I)(),
        p = (0, g.useSyncExternalStore)(
          s.services.typing.state.subscribe,
          s.services.typing.state.getSnapshot,
          s.services.typing.state.getSnapshot,
        ),
        m = (0, g.useSyncExternalStore)(
          s.services.typing.handoff.subscribe,
          s.services.typing.handoff.getSnapshot,
          s.services.typing.handoff.getSnapshot,
        )
      r[0] !== c || r[1] !== p ? ((t = null != c && p.has(c)), (r[0] = c), (r[1] = p), (r[2] = t)) : (t = r[2])
      let f = t,
        [h, v] = (0, g.useState)(f)
      f && !h && v(!0)
      let y = f || (m === c && h)
      return (
        r[3] !== l || r[4] !== u || r[5] !== d || r[6] !== y
          ? ((a = y
              ? (0, i.jsx)(eh.P.div, {
                  className: `-mx-3 self-start px-3 ${u ? "-mt-3" : "-mt-1.5"}`,
                  "data-orb-message": !0,
                  initial: { height: 0 },
                  animate: { height: "auto" },
                  exit: {
                    height: 0,
                    transition: d ? { duration: 0 } : { duration: 0.22, delay: 0.1, ease: "easeInOut" },
                  },
                  transition: d ? { duration: 0 } : { duration: 0.22, ease: "easeInOut" },
                  children: (0, i.jsx)(eh.P.div, {
                    className: "pt-1.5",
                    initial: { opacity: 0 },
                    animate: { opacity: 1, transition: d ? { duration: 0 } : { duration: 0.1, delay: 0.22 } },
                    exit: { opacity: 0, transition: { duration: 0.1 * !d } },
                    children: (0, i.jsx)(en.yl, {
                      style: { width: 33, maxWidth: "none", height: 24, minHeight: 24, padding: 0, borderRadius: 14 },
                      variant: "transcript-message",
                      children: (0, i.jsx)("div", {
                        className: "flex h-full items-center justify-center",
                        "data-avatar-overlay-foreground": !0,
                        children: (0, i.jsx)(e2.j, { agent: l }),
                      }),
                    }),
                  }),
                })
              : null),
            (r[3] = l),
            (r[4] = u),
            (r[5] = d),
            (r[6] = y),
            (r[7] = a))
          : (a = r[7]),
        r[8] !== a ? ((o = (0, i.jsx)(eg.N, { initial: !1, children: a })), (r[8] = a), (r[9] = o)) : (o = r[9]),
        o
      )
    }
    function tt(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        d,
        p,
        m,
        f,
        h,
        v,
        y = (0, n.c)(43),
        {
          agent: w,
          maxHeight: b,
          limitToRecentMessages: C,
          entrance: x,
          active: A,
          onMenuOpenChange: M,
          onTaskOpen: S,
          onReply: E,
          swipe: R,
        } = e,
        _ = void 0 === C || C,
        T = (0, u.gh)(el.u),
        k = (0, ea.tF)() && (void 0 === A || A),
        O = (0, u.Ul)(ep.T),
        P = (0, u.Ul)(ep.U),
        [N, L] = (0, g.useState)(!1)
      return (
        k && !N && L(!0),
        y[0] !== O || y[1] !== x || y[2] !== P
          ? ((t = () => {
              O || P || x?.reveal(null)
            }),
            (a = [O, x, P]),
            (y[0] = O),
            (y[1] = x),
            (y[2] = P),
            (y[3] = t),
            (y[4] = a))
          : ((t = y[3]), (a = y[4])),
        (0, g.useLayoutEffect)(t, a),
        y[5] !== k || y[6] !== w.conversationId || y[7] !== w.hostId || y[8] !== T
          ? ((o = () => {
              if (!k) return
              let e = (0, I.bJ)(T.get, w.conversationId)
              return (
                (0, I.Nu)(T, w.conversationId, w.hostId),
                () => {
                  ;(0, I.bJ)(T.get, w.conversationId) === w.hostId && (0, I.Nu)(T, w.conversationId, e)
                }
              )
            }),
            (r = [k, T, w.conversationId, w.hostId]),
            (y[5] = k),
            (y[6] = w.conversationId),
            (y[7] = w.hostId),
            (y[8] = T),
            (y[9] = o),
            (y[10] = r))
          : ((o = y[9]), (r = y[10])),
        (0, g.useLayoutEffect)(o, r),
        y[11] !== k || y[12] !== T
          ? ((l = () => {
              if (k) return (T.set(e4.sw, !0), () => T.set(e4.sw, !1))
            }),
            (s = [k, T]),
            (y[11] = k),
            (y[12] = T),
            (y[13] = l),
            (y[14] = s))
          : ((l = y[13]), (s = y[14])),
        (0, g.useLayoutEffect)(l, s),
        y[15] !== k || y[16] !== w.conversationId || y[17] !== O || y[18] !== T
          ? ((d = () => {
              if (k && O) return ((0, es.ne)(T, "mini", w.conversationId), () => (0, es.ne)(T, "mini", null))
            }),
            (c = [k, O, T, w.conversationId]),
            (y[15] = k),
            (y[16] = w.conversationId),
            (y[17] = O),
            (y[18] = T),
            (y[19] = c),
            (y[20] = d))
          : ((c = y[19]), (d = y[20])),
        (0, g.useLayoutEffect)(d, c),
        y[21] !== k || y[22] !== S || y[23] !== T
          ? ((p = () => {
              if (!k || null == S) return
              let e = { run: S }
              return (
                T.set(e4.xP, e),
                () => {
                  T.get(e4.xP) === e && T.set(e4.xP, null)
                }
              )
            }),
            (m = [k, S, T]),
            (y[21] = k),
            (y[22] = S),
            (y[23] = T),
            (y[24] = p),
            (y[25] = m))
          : ((p = y[24]), (m = y[25])),
        (0, g.useLayoutEffect)(p, m),
        y[26] !== k ||
        y[27] !== w ||
        y[28] !== O ||
        y[29] !== x ||
        y[30] !== N ||
        y[31] !== _ ||
        y[32] !== b ||
        y[33] !== M ||
        y[34] !== E ||
        y[35] !== R
          ? ((f =
              O && N
                ? (0, i.jsx)(ec.l, {
                    value: "mini",
                    children: (0, i.jsx)(ta, {
                      agent: w,
                      entrance: x,
                      active: k,
                      maxHeight: b,
                      limitToRecentMessages: _,
                      onMenuOpenChange: M,
                      onReply: E,
                      swipe: R,
                    }),
                  })
                : null),
            (y[26] = k),
            (y[27] = w),
            (y[28] = O),
            (y[29] = x),
            (y[30] = N),
            (y[31] = _),
            (y[32] = b),
            (y[33] = M),
            (y[34] = E),
            (y[35] = R),
            (y[36] = f))
          : (f = y[36]),
        y[37] !== O || y[38] !== P
          ? ((h =
              O || P
                ? null
                : (0, i.jsx)(en.yl, {
                    variant: "transcript-message",
                    children: (0, i.jsx)("div", {
                      "data-avatar-overlay-foreground": !0,
                      children: (0, i.jsx)(ei.A, {
                        id: "orbit.messages.unavailable",
                        defaultMessage: "Messages aren’t available for this account",
                        description: "Shown when access to the dot messaging view is unavailable",
                      }),
                    }),
                  })),
            (y[37] = O),
            (y[38] = P),
            (y[39] = h))
          : (h = y[39]),
        y[40] !== f || y[41] !== h
          ? ((v = (0, i.jsxs)("div", {
              className: "flow-root",
              "data-avatar-overlay-orbit-transcript": !0,
              tabIndex: -1,
              children: [f, h],
            })),
            (y[40] = f),
            (y[41] = h),
            (y[42] = v))
          : (v = y[42]),
        v
      )
    }
    function ta(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c = (0, n.c)(34),
        {
          agent: d,
          active: p,
          maxHeight: m,
          limitToRecentMessages: f,
          entrance: h,
          onMenuOpenChange: v,
          onReply: y,
          swipe: w,
        } = e
      c[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { enabled: !1 }), (c[0] = t)) : (t = c[0])
      let b = (0, u._U)(eu.jC, d.orbitId ?? null, t),
        C = b.data?.scope === "shared",
        x = (0, u._U)(eu.cloudAeonByThreadId$, C ? null : d.conversationId),
        { data: A, isLoading: M, isError: I, refetch: S } = C ? b : x,
        E = A?.scope === "shared" ? A.id : null
      c[1] !== p ? ((a = { enabled: p }), (c[1] = p), (c[2] = a)) : (a = c[2])
      let { data: R, isPending: _, isError: T, refetch: k } = (0, u._U)(ed.K, E, a),
        O = null == E ? A?.messaging_room_id : R,
        P = M || (null != E && _)
      if (
        (c[3] !== h || c[4] !== P || c[5] !== O
          ? ((o = () => {
              P || null != O || h?.reveal(null)
            }),
            (r = [h, P, O]),
            (c[3] = h),
            (c[4] = P),
            (c[5] = O),
            (c[6] = o),
            (c[7] = r))
          : ((o = c[6]), (r = c[7])),
        (0, g.useLayoutEffect)(o, r),
        P)
      ) {
        let e, t
        return (
          c[8] === Symbol.for("react.memo_cache_sentinel") ? ((e = (0, i.jsx)(er.y, {})), (c[8] = e)) : (e = c[8]),
          c[9] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsxs)("div", {
                className: "flex justify-center",
                "data-avatar-overlay-foreground": !0,
                role: "status",
                children: [
                  e,
                  (0, i.jsx)("span", {
                    className: "sr-only",
                    children: (0, i.jsx)(ei.A, {
                      id: "avatarOverlay.transcript.loading",
                      defaultMessage: "Loading messages",
                      description: "Accessible status while Mini loads the selected dot's conversation transcript",
                    }),
                  }),
                ],
              })),
              (c[9] = t))
            : (t = c[9]),
          t
        )
      }
      if ((I || T) && null == O) {
        let e, t, a
        return (
          c[10] !== S || c[11] !== k || c[12] !== E
            ? ((e = () => void (null == E ? S() : k())), (c[10] = S), (c[11] = k), (c[12] = E), (c[13] = e))
            : (e = c[13]),
          c[14] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = (0, i.jsx)(ei.A, {
                id: "avatarOverlay.transcript.retry",
                defaultMessage: "Retry loading messages",
                description: "Retry button when Mini cannot load the selected dot's conversation",
              })),
              (c[14] = t))
            : (t = c[14]),
          c[15] !== e
            ? ((a = (0, i.jsx)(en.yl, {
                variant: "transcript-message",
                children: (0, i.jsx)(eo.$, { "data-avatar-overlay-foreground": !0, onClick: e, children: t }),
              })),
              (c[15] = e),
              (c[16] = a))
            : (a = c[16]),
          a
        )
      }
      if (null == A || null == O) {
        let e
        return (
          c[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, i.jsx)(en.yl, {
                variant: "transcript-message",
                children: (0, i.jsx)("div", {
                  "data-avatar-overlay-foreground": !0,
                  children: (0, i.jsx)(ei.A, {
                    id: "orbit.messages.noRoom.productName",
                    defaultMessage: "No message room is associated with your {dot}",
                    description:
                      "Shown when the user’s agent has no direct message room. dot is a common noun for the agent; keep dot untranslated and translate the possessive naturally.",
                    values: { dot: "dot" },
                  }),
                }),
              })),
              (c[17] = e))
            : (e = c[17]),
          e
        )
      }
      return (
        c[18] !== p ||
        c[19] !== d ||
        c[20] !== h ||
        c[21] !== f ||
        c[22] !== m ||
        c[23] !== v ||
        c[24] !== y ||
        c[25] !== w
          ? ((l = (e, t, a) =>
              (0, i.jsx)(e5, {
                active: p,
                typingAgent: d,
                controller: e,
                media: t,
                renderMessageContent: a,
                conversationId: d.conversationId,
                entrance: h,
                maxHeight: m,
                limitToRecentMessages: f,
                onMenuOpenChange: v,
                onReply: y,
                swipe: w,
              })),
            (c[18] = p),
            (c[19] = d),
            (c[20] = h),
            (c[21] = f),
            (c[22] = m),
            (c[23] = v),
            (c[24] = y),
            (c[25] = w),
            (c[26] = l))
          : (l = c[26]),
        c[27] !== p || c[28] !== d.conversationId || c[29] !== d.hostId || c[30] !== A.id || c[31] !== O || c[32] !== l
          ? ((s = (0, i.jsx)(em.n, {
              isOrbit: !0,
              hostId: d.hostId,
              roomId: O,
              conversationId: d.conversationId,
              orbitId: A.id,
              active: p,
              renderMessages: l,
            })),
            (c[27] = p),
            (c[28] = d.conversationId),
            (c[29] = d.hostId),
            (c[30] = A.id),
            (c[31] = O),
            (c[32] = l),
            (c[33] = s))
          : (s = c[33]),
        s
      )
    }
    var ti = a("a7dB"),
      tn = a("BTDW"),
      to = a("p5Yg"),
      tr = a("eCUa")
    function tl(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c = (0, n.c)(22),
        { barOrigin: u, nameOrigin: d, headerOpacity: p, morphFromBar: m, name: f } = e,
        h = (0, g.useRef)(null),
        v = (0, g.useRef)(null),
        y = (0, ef.I)(),
        w = (0, ea.tF)()
      ;(c[0] !== u?.current || c[1] !== w || c[2] !== m || c[3] !== d || c[4] !== y
        ? ((t = () => {
            let e,
              t = h.current
            if (null == t || !m || y || !w) return
            t.style.visibility = "hidden"
            let a = v.current,
              i = () => {
                ;(t.style.removeProperty("visibility"),
                  t.style.removeProperty("width"),
                  t.style.removeProperty("height"),
                  t.style.removeProperty("transform"),
                  a?.style.removeProperty("width"),
                  a?.style.removeProperty("flex-shrink"))
              },
              n = () => {
                let n = u?.current,
                  o = t.getBoundingClientRect()
                if (null != n && o.width > 0 && o.height > 0) {
                  let r = t.currentCSSZoom || 1
                  null != a &&
                    ((a.style.width = `${a.getBoundingClientRect().width / r}px`), (a.style.flexShrink = "0"))
                  let l = `translate(${(n.left - window.screenX - o.left) / r}px, ${(n.top - window.screenY - o.top) / r}px)`
                  ;((t.style.width = `${n.width / r}px`),
                    (t.style.height = `${n.height / r}px`),
                    (t.style.transform = l),
                    (e = (0, eR.i)(
                      t,
                      {
                        width: [n.width / r, o.width / r],
                        height: [n.height / r, o.height / r],
                        transform: [l, "translate(0px, 0px)"],
                      },
                      { ...(0, tr.P)(!0, !0), onComplete: i },
                    )))
                }
                t.style.removeProperty("visibility")
              }
            return (
              to.Gt.postRender(n),
              () => {
                if (null != d) {
                  let e = t.getBoundingClientRect()
                  d.current = {
                    left: e.left + window.screenX,
                    top: e.top + window.screenY,
                    width: e.width,
                    height: e.height,
                  }
                }
                ;((0, to.WG)(n), e?.stop(), i())
              }
            )
          }),
          (c[0] = u?.current),
          (c[1] = w),
          (c[2] = m),
          (c[3] = d),
          (c[4] = y),
          (c[5] = t))
        : (t = c[5]),
        c[6] !== u || c[7] !== w || c[8] !== m || c[9] !== d || c[10] !== y
          ? ((a = [u, w, m, d, y]), (c[6] = u), (c[7] = w), (c[8] = m), (c[9] = d), (c[10] = y), (c[11] = a))
          : (a = c[11]),
        (0, g.useLayoutEffect)(t, a),
        c[12] !== f
          ? ((o = (0, i.jsx)("span", {
              "aria-hidden": !0,
              className: "invisible block truncate px-3 py-1 text-sm font-medium",
              children: f,
            })),
            (c[12] = f),
            (c[13] = o))
          : (o = c[13]))
      let b = m ? p : 1
      return (
        c[14] !== b ? ((r = { opacity: b }), (c[14] = b), (c[15] = r)) : (r = c[15]),
        c[16] !== f || c[17] !== r
          ? ((l = (0, i.jsx)(en.yl, {
              ref: h,
              className: "absolute inset-0 flex items-center justify-center overflow-clip rounded-full px-3 py-1",
              variant: "activity-dismiss",
              children: (0, i.jsx)(eh.P.span, {
                ref: v,
                className: "block truncate text-sm font-medium",
                style: r,
                title: f,
                children: f,
              }),
            })),
            (c[16] = f),
            (c[17] = r),
            (c[18] = l))
          : (l = c[18]),
        c[19] !== o || c[20] !== l
          ? ((s = (0, i.jsxs)("div", { className: "relative -mt-2 max-w-full", children: [o, l] })),
            (c[19] = o),
            (c[20] = l),
            (c[21] = s))
          : (s = c[21]),
        s
      )
    }
    var ts = a("SOPL"),
      tc = a("qbms")
    let tu = eh.P.create(en.yl)
    function td(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        d,
        p,
        m,
        f,
        h,
        g,
        v,
        w,
        b,
        C,
        x = (0, n.c)(56),
        {
          agent: A,
          active: M,
          headerOpacity: I,
          avatarOrigin: S,
          barOrigin: E,
          nameOrigin: R,
          morphFromBar: _,
          callControl: T,
          onBack: k,
        } = e,
        O = void 0 !== _ && _,
        P = (0, u.gh)(el.u),
        N = (0, y.A)(),
        L = (0, ea.tF)()
      x[0] !== A.artwork || x[1] !== A.id
        ? ((t = (0, i.jsx)(tc.g, { artwork: A.artwork, size: 32 }, A.id)),
          (x[0] = A.artwork),
          (x[1] = A.id),
          (x[2] = t))
        : (t = x[2])
      let F = t
      x[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = (0, ev.A)(
            "flex w-full items-center justify-between gap-3 select-none",
            "controls-HXXEOB controls-rzOzQx",
          )),
          (x[3] = a))
        : (a = x[3])
      let q = O ? 1 : I
      x[4] !== q ? ((o = { opacity: q }), (x[4] = q), (x[5] = o)) : (o = x[5])
      let j = O ? I : 1
      ;(x[6] !== j ? ((r = { opacity: j }), (x[6] = j), (x[7] = r)) : (r = x[7]),
        x[8] !== N
          ? ((l = N.formatMessage({
              id: "avatarOverlay.transcript.backToCompactBar",
              defaultMessage: "Back to compact bar",
              description:
                "Back button above the selected dot's conversation in Mini. Collapses the transcript while keeping that dot selected.",
            })),
            (x[8] = N),
            (x[9] = l))
          : (l = x[9]),
        x[10] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, i.jsx)(eO.I, { asset: ti.Y })), (x[10] = s))
          : (s = x[10]),
        x[11] !== k || x[12] !== l
          ? ((c = (0, i.jsx)("button", {
              className: "flex size-full cursor-interaction items-center justify-center rounded-full",
              "data-quick-chat-control": !0,
              type: "button",
              "data-avatar-overlay-foreground": !0,
              "aria-label": l,
              onClick: k,
              children: s,
            })),
            (x[11] = k),
            (x[12] = l),
            (x[13] = c))
          : (c = x[13]),
        x[14] !== c || x[15] !== r
          ? ((d = (0, i.jsx)(tu, {
              className: "size-10 shrink-0 rounded-full",
              style: r,
              variant: "activity-dismiss",
              children: c,
            })),
            (x[14] = c),
            (x[15] = r),
            (x[16] = d))
          : (d = x[16]))
      let D = null == A.orbitId
      if (x[17] !== A.name || x[18] !== N) {
        let e,
          t = A.name
        ;(x[20] !== A.name ? ((e = (0, et.x)(A.name)), (x[20] = A.name), (x[21] = e)) : (e = x[21]),
          (p = N.formatMessage(
            {
              id: "avatarOverlay.transcript.openOrbitThread.dot",
              defaultMessage: "Open {hasName, select, true {{name}} other {your dot}} in thread view",
              description:
                "Accessible label for opening the dot's conversation from Mini. Use the custom name when present; dot is the untranslated term for the user's agent.",
            },
            { name: t, hasName: !e },
          )),
          (x[17] = A.name),
          (x[18] = N),
          (x[19] = p))
      } else p = x[19]
      x[22] !== A.orbitId || x[23] !== P
        ? ((m = () => {
            null != A.orbitId && (0, e4.wC)(P, A.orbitId, { source: "header" })
          }),
          (x[22] = A.orbitId),
          (x[23] = P),
          (x[24] = m))
        : (m = x[24])
      let U = "pet" === A.artwork.kind ? "pet" : null,
        H = M && L
      ;(x[25] !== A.conversationId || x[26] !== F || x[27] !== U || x[28] !== H
        ? ((f = (0, i.jsx)(ts.R, {
            className: "size-8",
            conversationId: A.conversationId,
            avatar: U,
            active: H,
            fallback: F,
          })),
          (x[25] = A.conversationId),
          (x[26] = F),
          (x[27] = U),
          (x[28] = H),
          (x[29] = f))
        : (f = x[29]),
        x[30] !== S || x[31] !== O || x[32] !== f
          ? ((h = (0, i.jsx)(tn.e, {
              className: "relative z-10",
              origin: S,
              placement: "header",
              animatesFromBar: O,
              children: f,
            })),
            (x[30] = S),
            (x[31] = O),
            (x[32] = f),
            (x[33] = h))
          : (h = x[33]))
      let B = (0, et.x)(A.name) ? "dot" : A.name
      ;(x[34] !== E || x[35] !== I || x[36] !== O || x[37] !== R || x[38] !== B
        ? ((g = (0, i.jsx)(tl, { barOrigin: E, nameOrigin: R, headerOpacity: I, morphFromBar: O, name: B })),
          (x[34] = E),
          (x[35] = I),
          (x[36] = O),
          (x[37] = R),
          (x[38] = B),
          (x[39] = g))
        : (g = x[39]),
        x[40] !== D || x[41] !== p || x[42] !== m || x[43] !== h || x[44] !== g
          ? ((v = (0, i.jsxs)("button", {
              className:
                "flex min-w-0 cursor-interaction flex-col items-center rounded-full focus-visible:outline focus-visible:outline-offset-2",
              type: "button",
              disabled: D,
              "aria-label": p,
              onClick: m,
              children: [h, g],
            })),
            (x[40] = D),
            (x[41] = p),
            (x[42] = m),
            (x[43] = h),
            (x[44] = g),
            (x[45] = v))
          : (v = x[45]))
      let V = O ? I : 1
      return (
        x[46] !== V ? ((w = { opacity: V }), (x[46] = V), (x[47] = w)) : (w = x[47]),
        x[48] !== T || x[49] !== w
          ? ((b = (0, i.jsx)(tu, {
              className: "size-10 shrink-0 rounded-full no-drag",
              style: w,
              variant: "activity-dismiss",
              children: T,
            })),
            (x[48] = T),
            (x[49] = w),
            (x[50] = b))
          : (b = x[50]),
        x[51] !== d || x[52] !== v || x[53] !== b || x[54] !== o
          ? ((C = (0, i.jsxs)(eh.P.div, { className: a, style: o, children: [d, v, b] })),
            (x[51] = d),
            (x[52] = v),
            (x[53] = b),
            (x[54] = o),
            (x[55] = C))
          : (C = x[55]),
        C
      )
    }
    var tp = a("FnQq")
    function tm(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        d,
        p = (0, n.c)(27),
        { agent: m, maxHeight: f, active: h, onBack: v, onMenuOpenChange: w, onReply: b, swipe: C } = e,
        x = void 0 === h || h,
        A = (0, y.A)(),
        M = (0, u.Ul)(J.aH)
      p[0] !== M || p[1] !== m ? ((t = { accountId: M, agent: m }), (p[0] = M), (p[1] = m), (p[2] = t)) : (t = p[2])
      let [I, S] = (0, g.useState)(t),
        E = m ?? (I.accountId === M ? I.agent : null)
      ;(I.accountId !== M || I.agent !== E) && S({ accountId: M, agent: E })
      let [R, _] = (0, g.useState)(0)
      if (null == E) return null
      ;(p[3] !== E.name || p[4] !== A
        ? ((a = (0, et.x)(E.name) ? A.formatMessage(ee.z) : E.name), (p[3] = E.name), (p[4] = A), (p[5] = a))
        : (a = p[5]),
        p[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((o = (e) => {
              if (null == e) return
              let t = new ResizeObserver(() => _(e.offsetHeight))
              return (t.observe(e), _(e.offsetHeight), () => t.disconnect())
            }),
            (p[6] = o))
          : (o = p[6]))
      let T = x && null != m
      ;(p[7] === Symbol.for("react.memo_cache_sentinel") ? ((r = {}), (p[7] = r)) : (r = p[7]),
        p[8] !== v
          ? ((l = (0, i.jsx)(tp.k, { ref: null, compact: !0, iconStyle: r, isSelected: !1, onActivate: v })),
            (p[8] = v),
            (p[9] = l))
          : (l = p[9]),
        p[10] !== E || p[11] !== v || p[12] !== T || p[13] !== l
          ? ((s = (0, i.jsx)("div", {
              ref: o,
              className: "relative z-10 pb-2",
              children: (0, i.jsx)(td, { agent: E, active: T, onBack: v, callControl: l }),
            })),
            (p[10] = E),
            (p[11] = v),
            (p[12] = T),
            (p[13] = l),
            (p[14] = s))
          : (s = p[14]))
      let k = E.id,
        O = x && null != m,
        P = Math.max(0, f - R)
      return (
        p[15] !== E || p[16] !== v || p[17] !== w || p[18] !== b || p[19] !== C || p[20] !== O || p[21] !== P
          ? ((c = (0, i.jsx)(
              tt,
              { active: O, agent: E, maxHeight: P, onTaskOpen: v, onMenuOpenChange: w, onReply: b, swipe: C },
              k,
            )),
            (p[15] = E),
            (p[16] = v),
            (p[17] = w),
            (p[18] = b),
            (p[19] = C),
            (p[20] = O),
            (p[21] = P),
            (p[22] = c))
          : (c = p[22]),
        p[23] !== c || p[24] !== a || p[25] !== s
          ? ((d = (0, i.jsxs)("div", {
              "data-avatar-overlay-orbit-transcript": !0,
              role: "dialog",
              "aria-label": a,
              children: [s, c],
            })),
            (p[23] = c),
            (p[24] = a),
            (p[25] = s),
            (p[26] = d))
          : (d = p[26]),
        d
      )
    }
    var tf = a("WNoR"),
      th = a("ROqs"),
      tg = a("UjoQ"),
      tv = a("yGJW"),
      ty = a("oRak"),
      tw = a("kfGJ")
    function tb(e) {
      return e.occurredAtMs + 5e3
    }
    var tC = a("mHH7"),
      tx = a("lSdY"),
      tA = a("EOo5"),
      tM = a("V7vi"),
      tI = a("iS3i"),
      tS = a("uizX"),
      tE = a("an0a"),
      tR = a("fj7z"),
      t_ = a("jiwy"),
      tT = a("ho8L"),
      tk = a("LBED"),
      tO = a("BqvN"),
      tP = a("V3Gm"),
      tN = a("gf0K"),
      tL = a("Io7L"),
      tF = a("aQYh"),
      tq = a("vhyw"),
      tj = a("uIjo"),
      tD = a("jEf6"),
      tU = a("QVc9"),
      tH = a("XLpU"),
      tB = a("kXFg"),
      tV = a("XL6s"),
      tz = a("x7by"),
      tY = a("Nc5R"),
      tW = a("CpJm"),
      tX = a("GaA7"),
      tG = a("KoM4"),
      t$ = a("lx63"),
      tK = a("jMec"),
      tQ = a("OMIV"),
      tZ = a("WFY2")
    let tJ = {
      chat: tx.b.CHATGPT_PRODUCT_EXPERIENCE_CHAT,
      work: tx.b.CHATGPT_PRODUCT_EXPERIENCE_WORK,
      codex: tx.b.CHATGPT_PRODUCT_EXPERIENCE_CODEX,
    }
    function t0() {}
    function t1() {}
    function t2(e) {
      e.stop()
    }
    var t3 = a("pcVU"),
      t4 = a("zRTd"),
      t5 = a("NolR"),
      t6 = a("Sd8U"),
      t7 = a("V3rO"),
      t8 = a("RxZZ"),
      t9 = a("qixt"),
      ae = a("ugrI"),
      at = a("Odya"),
      aa = a("hZax"),
      ai = a("kpIY"),
      an = a("Nwp9")
    class ao {
      timestamp = -1 / 0
      action = null
      travel = 0
      consumed = !1
      update({ deltaY: e, timestamp: t, isExpanded: a, notificationCount: i, expandsUpward: n, maxScrollOffset: o }) {
        if (i < 2) return a ? "scroll" : null
        let r = n ? -e : e
        return (t - this.timestamp > 180 &&
          ((this.travel = 0),
          (this.consumed = !1),
          a ? (this.action = r < 0 && 0 === o ? "collapse" : "scroll") : (this.action = r > 0 ? "expand" : null)),
        (this.timestamp = t),
        this.consumed)
          ? null
          : (a && o > 0 && (this.action = "scroll"), "expand" !== this.action && "collapse" !== this.action)
            ? a
              ? "scroll"
              : null
            : ((this.travel = Math.max(0, this.travel + ("expand" === this.action ? r : -r))), this.travel < 32)
              ? null
              : ((this.consumed = !0), this.action)
      }
    }
    let ar = (0, w.YK)({
        running: {
          id: "avatarOverlay.statusRunning",
          defaultMessage: "Running",
          description: "Status label shown for a loading notification",
        },
        runningFallbackBody: {
          id: "avatarOverlay.statusRunningSubtitle",
          defaultMessage: "Thinking",
          description: "Fallback body shown for a loading notification when no richer activity text is available",
        },
        waiting: {
          id: "avatarOverlay.statusWaiting",
          defaultMessage: "Needs input",
          description: "Status label shown for a notification waiting on user input",
        },
        review: {
          id: "avatarOverlay.statusReview",
          defaultMessage: "Ready",
          description: "Status label shown for a notification with unread completed output",
        },
        failed: {
          id: "avatarOverlay.statusFailed",
          defaultMessage: "Blocked",
          description: "Status label shown for a notification that failed",
        },
        info: {
          id: "avatarOverlay.statusInfo",
          defaultMessage: "Info",
          description: "Status label shown for an informational notification",
        },
      }),
      al = {
        badgeBackgroundColor: "var(--color-background-info-soft)",
        badgeForegroundColor: "var(--color-text)",
        fallbackBodyMessage: ar.info,
        iconClassName: "icon-xs shrink-0 text-secondary",
        iconType: "clock",
        labelMessage: ar.info,
        mascotState: "idle",
      },
      as = { ...al, mascotState: "waving" }
    function ac(e) {
      if (null == e) return al
      if ("first-awake" === e.kind) return as
      if (e.isLoading)
        return {
          badgeBackgroundColor: "var(--color-background-info-soft)",
          badgeForegroundColor: "var(--color-text)",
          fallbackBodyMessage: ar.runningFallbackBody,
          iconClassName: "icon-xs shrink-0 text-secondary",
          iconType: "spinner",
          labelMessage: ar.running,
          mascotState: "running",
        }
      switch (e.level) {
        case "warning":
          return {
            badgeBackgroundColor: "var(--color-text-warning)",
            badgeForegroundColor: "var(--color-surface-secondary)",
            fallbackBodyMessage: ar.waiting,
            iconClassName: "icon-xs shrink-0 text-warning",
            iconType: "warning",
            labelMessage: ar.waiting,
            mascotState: "waiting",
          }
        case "danger":
          return {
            badgeBackgroundColor: "var(--color-text-danger)",
            badgeForegroundColor: "var(--color-surface-secondary)",
            fallbackBodyMessage: ar.failed,
            iconClassName: "icon-xs shrink-0 text-danger",
            iconType: "warning",
            labelMessage: ar.failed,
            mascotState: "failed",
          }
        case "success":
          return {
            badgeBackgroundColor: "var(--color-chart-green)",
            badgeForegroundColor: "var(--color-surface-secondary)",
            fallbackBodyMessage: ar.review,
            iconClassName: "icon-xs shrink-0 text-chart-green",
            iconType: "check-circle",
            labelMessage: ar.review,
            mascotState: "review",
          }
        case "info":
          return al
      }
    }
    var au = a("NFVO"),
      ad = a("JxD3"),
      ap = a("D6V5"),
      am = a("veRW"),
      af = a("G0uN"),
      ah = a("bZSE"),
      ag = a("m88r"),
      av = a("L2Eu"),
      ay = a("rwp7"),
      aw = a("C4Sc"),
      ab = a("G3U9"),
      aC = a("Faus"),
      ax = a("v1hC"),
      aA = a("vc9M"),
      aM = a("sl5j"),
      aI = a("IJee"),
      aS = a("g6Vb"),
      aE = a("Mrfa"),
      aR = a("l4nv"),
      a_ = a("aAb3")
    let aT = (0, w.YK)({
      allow: {
        id: "avatarOverlay.waitingRequest.allow",
        defaultMessage: "Allow",
        description: "Compact action button label for allowing a waiting request",
      },
      allowNetwork: {
        id: "avatarOverlay.waitingRequest.allowNetwork",
        defaultMessage: "Allow network",
        description: "Compact title for a waiting network access request",
      },
      allowOnce: {
        id: "avatarOverlay.waitingRequest.allowOnce",
        defaultMessage: "Allow once",
        description: "Accessible label for allowing a waiting request for the current turn",
      },
      allowTarget: {
        id: "avatarOverlay.waitingRequest.allowTarget",
        defaultMessage: "Allow {target}",
        description:
          "Compact action button label or title for allowing access to a named connector, plugin, tool, or server",
      },
      apply: {
        id: "avatarOverlay.waitingRequest.apply",
        defaultMessage: "Apply",
        description: "Compact action button label for applying a file change request",
      },
      applyChanges: {
        id: "avatarOverlay.waitingRequest.applyChanges",
        defaultMessage: "Apply changes",
        description: "Compact title for a waiting file change approval request",
      },
      askQuestion: {
        id: "avatarOverlay.waitingRequest.askQuestion",
        defaultMessage: "Ask a question",
        description: "Compact title for a waiting user-input question request",
      },
      answerTarget: {
        id: "avatarOverlay.waitingRequest.answerTarget",
        defaultMessage: "Answer {target}",
        description: "Compact title for answering a named tool server request",
      },
      command: {
        id: "avatarOverlay.waitingRequest.command",
        defaultMessage: "Command",
        description: "Fallback compact summary for a waiting command approval request",
      },
      cancel: {
        id: "avatarOverlay.waitingRequest.cancel",
        defaultMessage: "Cancel",
        description: "Compact action button label for cancelling a waiting request",
      },
      connector: {
        id: "avatarOverlay.waitingRequest.connector",
        defaultMessage: "Connector",
        description: "Compact label for a suggested connector waiting request",
      },
      connectTarget: {
        id: "avatarOverlay.waitingRequest.connectTarget",
        defaultMessage: "Connect {target}",
        description: "Compact title for connecting a named connector",
      },
      connect: {
        id: "avatarOverlay.waitingRequest.connect",
        defaultMessage: "Connect",
        description: "Compact action button label for connecting a connector",
      },
      continue: {
        id: "avatarOverlay.waitingRequest.continue",
        defaultMessage: "Continue",
        description: "Compact action button label for continuing a connector flow",
      },
      deny: {
        id: "avatarOverlay.waitingRequest.deny",
        defaultMessage: "Deny",
        description: "Compact action button label for denying a waiting request",
      },
      enableTool: {
        id: "avatarOverlay.waitingRequest.enableTool",
        defaultMessage: "Enable {toolName}",
        description: "Compact title for enabling a named connector or plugin",
      },
      fileAccess: {
        id: "avatarOverlay.waitingRequest.fileAccess",
        defaultMessage: "File access",
        description: "Compact title for a waiting file permission request",
      },
      fileCount: {
        id: "avatarOverlay.waitingRequest.fileCount",
        defaultMessage: "{count, plural, one {# file} other {# files}}",
        description: "Compact file count used in a waiting patch request accessibility summary",
      },
      installTool: {
        id: "avatarOverlay.waitingRequest.installTool",
        defaultMessage: "Install {toolName}",
        description: "Compact title for installing a named connector or plugin",
      },
      implementPlan: {
        id: "avatarOverlay.waitingRequest.implementPlan",
        defaultMessage: "Implement plan",
        description: "Compact action button label for starting a proposed plan",
      },
      networkAccess: {
        id: "avatarOverlay.waitingRequest.networkAccess",
        defaultMessage: "Network access",
        description: "Compact title for a waiting network permission request",
      },
      openLink: {
        id: "avatarOverlay.waitingRequest.openLink",
        defaultMessage: "Open link",
        description: "Compact title or action label for a waiting URL action request",
      },
      oneFileChanged: {
        id: "avatarOverlay.waitingRequest.oneFileChanged",
        defaultMessage: "1 file changed",
        description: "Fallback compact summary for a waiting file change approval request",
      },
      option: {
        id: "avatarOverlay.waitingRequest.option",
        defaultMessage: "Option",
        description: "Fallback compact label for a waiting question option",
      },
      plan: {
        id: "avatarOverlay.waitingRequest.plan",
        defaultMessage: "Plan",
        description: "Compact title for a waiting plan implementation request",
      },
      plugin: {
        id: "avatarOverlay.waitingRequest.plugin",
        defaultMessage: "Plugin",
        description: "Compact label for a suggested plugin waiting request",
      },
      review: {
        id: "avatarOverlay.waitingRequest.review",
        defaultMessage: "Review",
        description: "Compact action button label for reviewing a waiting request",
      },
      reviewCommand: {
        id: "avatarOverlay.waitingRequest.reviewCommand",
        defaultMessage: "Review command",
        description: "Compact title for a waiting command approval request",
      },
      additionalAccessTarget: {
        id: "avatarOverlay.waitingRequest.moreAccessTarget",
        defaultMessage: "ChatGPT needs more {target} access",
        description: "Compact title for granting additional access to a named connector",
      },
      reconnectTarget: {
        id: "avatarOverlay.waitingRequest.reconnectTarget",
        defaultMessage: "Reconnect {target}",
        description: "Compact title or action label for reconnecting a named connector",
      },
      reconnect: {
        id: "avatarOverlay.waitingRequest.reconnect",
        defaultMessage: "Reconnect",
        description: "Compact action button label for reconnecting expired connector credentials",
      },
      runCommand: {
        id: "avatarOverlay.waitingRequest.runCommand",
        defaultMessage: "Run command",
        description: "Compact operation label for a waiting command approval request",
      },
      runOnce: {
        id: "avatarOverlay.waitingRequest.runOnce",
        defaultMessage: "Run once",
        description: "Compact action button label for running a command once",
      },
      updateAccess: {
        id: "avatarOverlay.waitingRequest.updateAccess",
        defaultMessage: "Update access",
        description: "Compact action button label for updating connector permissions",
      },
      tool: {
        id: "avatarOverlay.waitingRequest.tool",
        defaultMessage: "tool",
        description: "Fallback compact label for a suggested tool",
      },
      toolServer: {
        id: "avatarOverlay.waitingRequest.toolServer",
        defaultMessage: "Tool server",
        description: "Fallback compact label for an unnamed tool server",
      },
    })
    function ak(e, t) {
      switch (e.kind) {
        case "question":
          return [e.prompt, ...e.options.map((e) => e.label)].filter(Boolean).join(" ")
        case "plan":
        case "exec":
          return e.summary
        case "patch":
          return [
            t.formatMessage(aT.fileCount, { count: e.fileCount }),
            e.additions > 0 ? `+${e.additions}` : null,
            e.deletions > 0 ? `-${e.deletions}` : null,
            e.summary,
          ]
            .filter(Boolean)
            .join(". ")
        case "network":
        case "permission":
          return e.target
        case "tool":
          return [e.target, e.summary].filter(Boolean).join(". ")
      }
    }
    function aO(e) {
      if (null == e) return null
      let t = Object.entries(e)[0]
      if (null == t) return null
      let [a, i] = t,
        n = aL(i)
      return null == n ? aj(a) : aj(`${a}: ${n}`)
    }
    function aP(e) {
      let t = e[0]
      if (null == t) return null
      let a = aL(t.value)
      return null == a ? aj(t.displayName) : aj(`${t.displayName}: ${a}`)
    }
    function aN(e) {
      try {
        let t = new URL(e),
          a = "/" === t.pathname ? "" : t.pathname
        return aD(`${t.hostname}${a}`)
      } catch {
        return aD(e)
      }
    }
    function aL(e) {
      return "string" == typeof e
        ? aD(e)
        : "number" == typeof e || "boolean" == typeof e
          ? String(e)
          : null == e
            ? null
            : aD(JSON.stringify(e) ?? "")
    }
    function aF(e) {
      let t = e
        ?.trim()
        .replace(/^connector[_-]/, "")
        .split(/[_-]+/)
        .filter(Boolean)
      return null == t || 0 === t.length ? null : t.map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
    }
    function aq(e) {
      if (0 === e.length) return 0
      let t = e.split(/\r?\n/)
      return "" === t.at(-1) ? t.length - 1 : t.length
    }
    function aj(e) {
      let t = e?.replace(/\s+/g, " ").trim() ?? ""
      return 0 === t.length ? null : t
    }
    function aD(e) {
      let t = aj(e)
      return null == t ? null : t.length <= 48 ? t : `${t.slice(0, 47)}…`
    }
    let aU = (0, w.YK)({
      calledTool: {
        id: "avatarOverlay.session.calledTool",
        defaultMessage: "Called tool",
        description: "Avatar overlay activity subtitle for a completed generic tool call",
      },
      calledToolName: {
        id: "avatarOverlay.session.calledToolName",
        defaultMessage: "Called {toolName}",
        description: "Avatar overlay activity subtitle for a completed named tool call",
      },
      callingTool: {
        id: "avatarOverlay.session.callingTool",
        defaultMessage: "Calling tool",
        description: "Avatar overlay activity subtitle for a running generic tool call",
      },
      callingToolName: {
        id: "avatarOverlay.session.callingToolName",
        defaultMessage: "Calling {toolName}",
        description: "Avatar overlay activity subtitle for a running named tool call",
      },
      editedFiles: {
        id: "avatarOverlay.session.editedFiles",
        defaultMessage: "Edited {fileCount, plural, one {# file} other {# files}}",
        description: "Avatar overlay activity subtitle for completed file edits",
      },
      editingFiles: {
        id: "avatarOverlay.session.editingFiles",
        defaultMessage: "Editing {fileCount, plural, one {# file} other {# files}}",
        description: "Avatar overlay activity subtitle for running file edits",
      },
      newThread: {
        id: "avatarOverlay.session.newThread",
        defaultMessage: "New chat",
        description: "Avatar overlay fallback title for a thread without a generated title",
      },
      ranCommand: {
        id: "avatarOverlay.session.ranCommand",
        defaultMessage: "Ran command",
        description: "Avatar overlay activity subtitle for a completed shell command",
      },
      runningCommand: {
        id: "avatarOverlay.session.runningCommand",
        defaultMessage: "Running command",
        description: "Avatar overlay activity subtitle for a running shell command",
      },
      searchedQuery: {
        id: "avatarOverlay.session.searchedQuery",
        defaultMessage: 'Searched "{query}"',
        description: "Avatar overlay activity subtitle for a completed search with a query",
      },
      searchedWeb: {
        id: "avatarOverlay.session.searchedWeb",
        defaultMessage: "Searched web",
        description: "Avatar overlay activity subtitle for a completed web search",
      },
    })
    function aH(e, t, a = !1, i = t9._e) {
      let n = null
      for (let t = e.length - 1; t >= 0; t -= 1) {
        let i = e[t]
        if (i?.type === "reasoning") {
          let e = (0, ax.W)(i.summary),
            t = (0, aC.S3)(e),
            a = null == t ? null : aB(t)
          if (null != a && a.length <= 60) return a
          let n = (0, aC.S3)(e.split(/\r?\n/, 1)[0] ?? ""),
            o = null == n ? null : aB(n)
          if (null != o && o.length <= 60) return o
          break
        }
        if (i?.type === "agentMessage") {
          let e = (0, am.l)(i.text),
            t = a ? (0, ad.mM)(e) : (0, ad.Fp)(e),
            o = t?.decision === "DONT_NOTIFY" ? null : aB(t?.notificationMessage ?? t?.visibleText ?? e)
          if (null != o) {
            if ("commentary" !== i.phase) return o
            null == n && o.length <= 60 && (n = o)
          }
        }
      }
      for (let a = e.length - 1; a >= 0; a -= 1) {
        let n = (function (e, t, a) {
          if (null == e) return null
          if ("commandExecution" === e.type) {
            let i = e.commandActions.at(-1),
              n = "inProgress" === e.status
            if (null == i || "unknown" === i.type)
              return n ? t.formatMessage(aU.runningCommand) : t.formatMessage(aU.ranCommand)
            let o = (0, ag.i)({
              items: [
                {
                  type: "exec",
                  callId: e.id,
                  cwd: e.cwd ? (0, d.DIv)(e.cwd) : null,
                  cmd: [i.command],
                  executionStatus: e.status,
                  approvalRequestId: null,
                  proposedExecpolicyAmendment: null,
                  parsedCmd: (0, ab.Q)((0, aw.uw)(i, []), !n),
                  output: null,
                },
              ],
              threadDetailLevel: a,
              formatSearchQueryTermList: (e) => t.formatList(e, { type: "conjunction" }),
            })
            if (null != o) {
              let e = t.formatMessage(o.message, { ...o.values, action: (e) => e.join(""), detail: (e) => e.join("") })
              return e.length <= 60 ? e : n ? t.formatMessage(aU.runningCommand) : t.formatMessage(aU.ranCommand)
            }
          }
          if ("fileChange" === e.type) {
            let a = e.changes.length
            return "inProgress" === e.status
              ? t.formatMessage(aU.editingFiles, { fileCount: a })
              : t.formatMessage(aU.editedFiles, { fileCount: a })
          }
          if ("mcpToolCall" === e.type) {
            let a = "inProgress" === e.status,
              i = aB(e.tool.replace(/[_-]+/g, " "))
            return null == i
              ? a
                ? t.formatMessage(aU.callingTool)
                : t.formatMessage(aU.calledTool)
              : a
                ? t.formatMessage(aU.callingToolName, { toolName: i })
                : t.formatMessage(aU.calledToolName, { toolName: i })
          }
          if ("webSearch" === e.type) {
            let a = aB(e.query)
            return null != a ? t.formatMessage(aU.searchedQuery, { query: a }) : t.formatMessage(aU.searchedWeb)
          }
          return null
        })(e[a], t, i)
        if (null != n) return n
      }
      return n
    }
    function aB(e) {
      let t = (0, av.SX)((0, ah.v)(e))
        .replace(/^\s{0,3}#{1,6}\s+/g, "")
        .replace(/\*\*([^*]+)\*\*/g, "$1")
        .replace(/__([^_]+)__/g, "$1")
        .replace(/`([^`]+)`/g, "$1")
        .replace(/\*([^*]+)\*/g, "$1")
        .replace(/_([^_]+)_/g, "$1")
        .replace(/\s+/g, " ")
        .trim()
      return t.length > 0 ? t : null
    }
    function aV({
      completedTurnSummary: e,
      intl: t,
      latestTurnItems: a,
      notification: i,
      notificationCount: n = 1,
      threadDetailLevel: o = t9._e,
    }) {
      let r = ac(i),
        l = t.formatMessage(r.labelMessage),
        s = null == a ? null : aH(a, t, !1, o),
        c =
          (i.isLoading || e?.compactSummaryTurnKey !== i.turnKey ? null : e.compactSummary) ??
          s ??
          i.body ??
          t.formatMessage(r.fallbackBodyMessage)
      null != i.waitingRequest && (c = ak(i.waitingRequest, t))
      let u = c.replace(/[.?!]+$/, ""),
        d = i.waitingRequest?.kind === "patch" ? i.waitingRequest : null
      return {
        actionAriaLabel: `${i.title}. ${c === l ? l : `${l}. ${u}`}. ${t.formatMessage(az.openNotification)}`,
        collapseNotificationAriaLabel: t.formatMessage(az.collapseNotification, { title: i.title }),
        dismissNotificationAriaLabel: t.formatMessage(az.dismissNotification, { title: i.title }),
        expandNotificationAriaLabel: t.formatMessage(az.expandNotification, { title: i.title }),
        expandNotificationStackAriaLabel: t.formatMessage(az.expandNotificationStack, { count: n }),
        notificationListAriaLabel: t.formatMessage(az.notificationList),
        patchSummary:
          null == d
            ? null
            : {
                additions:
                  d.additions > 0
                    ? t.formatMessage(az.compactPatchAdditions, { count: t.formatNumber(d.additions) })
                    : null,
                deletions:
                  d.deletions > 0
                    ? t.formatMessage(az.compactPatchDeletions, { count: t.formatNumber(d.deletions) })
                    : null,
                fileCount: t.formatMessage(az.compactPatchFileCount, { count: d.fileCount }),
              },
        statusIconAriaLabel: i.waitingRequest?.kind === "question" ? t.formatMessage(az.questionStatusIcon) : l,
        subtitle: c,
      }
    }
    let az = (0, w.YK)({
        collapseNotification: {
          id: "avatarOverlay.collapseNotification",
          defaultMessage: "Collapse {title}",
          description: "Accessible label for collapsing a floating avatar notification row",
        },
        compactPatchAdditions: {
          id: "avatarOverlay.compactPatchAdditions",
          defaultMessage: "+{count}",
          description: "Compact additions count for a patch request in the floating avatar notification tray",
        },
        compactPatchDeletions: {
          id: "avatarOverlay.compactPatchDeletions",
          defaultMessage: "-{count}",
          description: "Compact deletions count for a patch request in the floating avatar notification tray",
        },
        compactPatchFileCount: {
          id: "avatarOverlay.compactPatchFileCount",
          defaultMessage: "{count, plural, one {# file} other {# files}}",
          description: "Compact file count for a patch request in the floating avatar notification tray",
        },
        dismissNotification: {
          id: "avatarOverlay.dismissNotification",
          defaultMessage: "Dismiss {title}",
          description: "Accessible label for dismissing a notification in the floating avatar notification tray",
        },
        expandNotification: {
          id: "avatarOverlay.expandNotification",
          defaultMessage: "Expand {title}",
          description: "Accessible label for expanding a floating avatar notification row",
        },
        expandNotificationStack: {
          id: "avatarOverlay.expandNotificationStack",
          defaultMessage: "Expand activity stack, {count, plural, one {# item} other {# items}}",
          description: "Accessible label for expanding grouped floating avatar notifications",
        },
        notificationList: {
          id: "avatarOverlay.notificationList",
          defaultMessage: "Activity notifications",
          description: "Accessible label for the list of floating avatar activity notifications",
        },
        openNotification: {
          id: "avatarOverlay.openNotification",
          defaultMessage: "Open notification",
          description: "Accessible label for an actionable row in the floating avatar notification tray",
        },
        questionStatusIcon: {
          id: "avatarOverlay.questionStatusIcon",
          defaultMessage: "Question",
          description: "Accessible label for a floating avatar notification waiting on a question answer",
        },
      }),
      aY = (0, an.m3)("avatar-overlay-debug-window-border-visible", !1)
    function aW(e) {
      return { screenX: e.screenX, screenY: e.screenY, timeMs: e.timeStamp }
    }
    function aX(e, t) {
      if (e.hasMoved) return !0
      let a = e.samples[0]
      return null != a && (Math.abs(t.screenX - a.screenX) >= 4 || Math.abs(t.screenY - a.screenY) >= 4)
    }
    function aG(e) {
      let t = e.at(-1)
      return null == t ? e : e.filter((e) => t.timeMs - e.timeMs <= 160)
    }
    function a$({ activityStackPresentation: e, isExpanded: t, notificationCount: a }) {
      let i = e.items[0]?.presentationRect.height ?? 0,
        n = (0, d.pmn)(a, t && a > 1 ? Math.min(i, e.items[1]?.presentationRect.height ?? i) : i)
      return {
        backingLayoutHeight: a > 1 ? e.viewportRect.height : i,
        visibleLayoutHeight: Math.ceil(n + (a > 1 ? d.Xlf : 0)),
      }
    }
    var aK = a("HrOd")
    let aQ = {
        mascot: { left: 244, top: 207, width: aK.dR, height: 121 },
        placement: "top-end",
        tray: { left: 19.5, top: 70, width: d.pFD, height: 120 },
        visibleBounds: { left: 0, top: 0, width: 384, height: 400 },
        viewport: { width: 384, height: 400 },
      },
      aZ = (0, u.T1)(
        el.u,
        (e, { signal: t, derived: a }) => {
          let i = t(aQ)
          return {
            layout$: i,
            activityStackMaxViewportHeight$: a((e) => {
              let t = e(i).quickChat
              return null == t ? d.e3 : Math.max(d.YMX, t.workArea.height / 2 - d.Zam - d.rqb)
            }),
            quickChatStashedEdge$: a((e) => e(i).quickChat?.stashedEdge),
          }
        },
        { autoDispose: !0 },
      )
    var aJ = a("FPUb")
    let a0 = (0, eT.a)({
      name: "arrow-curvedpath-left-lg-light-20",
      canvas: {
        width: 20,
        height: 20,
        viewBox: "0 0 20 20",
        frame: { x: 0, y: 0, width: 20, height: 20 },
        inkBounds: { x: 3.709229, y: 5.168457, width: 12.746338, height: 9.663574 },
        visualBounds: { x: 3.709229, y: 5.168457, width: 12.746338, height: 9.663574 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 3.709229, y: 5.168457, width: 12.746338, height: 9.663574 },
        center: { x: 10.082398, y: 10.000244 },
        insets: { top: 5.168457, right: 3.544433, bottom: 5.167969, left: 3.709229 },
        anchors: {
          frame: { x: 10, y: 10 },
          ink: { x: 10.082398, y: 10.000244 },
          foreground: { x: 10.082398, y: 10.000244 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M15.7905 5.16846C16.1578 5.16846 16.4555 5.46623 16.4555 5.8335V9.20166C16.4555 9.85382 16.2421 10.4503 15.8071 10.8853C15.3721 11.3202 14.7756 11.5337 14.1235 11.5337H5.80709L7.97017 13.6968C8.22982 13.9564 8.22971 14.3775 7.97017 14.6372C7.71044 14.8965 7.28932 14.8968 7.02974 14.6372L4.05025 11.6577C3.59545 11.2029 3.59566 10.4652 4.05025 10.0103L7.02974 7.02979C7.2894 6.77048 7.71056 6.7704 7.97017 7.02979C8.22987 7.28948 8.22987 7.71149 7.97017 7.97119L5.73677 10.2036H14.1235C14.4848 10.2036 14.7217 10.0897 14.8667 9.94482C15.0116 9.79986 15.1254 9.56299 15.1254 9.20166V5.8335C15.1254 5.46629 15.4233 5.16856 15.7905 5.16846Z" fill="currentColor"/>',
    })
    var a1 = a("YrOK")
    let a2 = (0, eT.a)({
      name: "stop-sm-fill-regular-28",
      canvas: {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        frame: { x: 0, y: 0, width: 28, height: 28 },
        inkBounds: { x: 7.583344, y: 7.583496, width: 12.833344, height: 12.833496 },
        visualBounds: { x: 7.583344, y: 7.583496, width: 12.833344, height: 12.833496 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 7.583344, y: 7.583496, width: 12.833344, height: 12.833496 },
        center: { x: 14.000016, y: 14.000244 },
        insets: { top: 7.583496, right: 7.583312, bottom: 7.583008, left: 7.583344 },
        anchors: {
          frame: { x: 14, y: 14 },
          ink: { x: 14.000016, y: 14.000244 },
          foreground: { x: 14.000016, y: 14.000244 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M7.58333 9.04183C7.58333 8.23641 8.23625 7.5835 9.04167 7.5835H18.9583C19.7637 7.5835 20.4167 8.23641 20.4167 9.04183V18.9585C20.4167 19.7639 19.7637 20.4168 18.9583 20.4168H9.04167C8.23625 20.4168 7.58333 19.7639 7.58333 18.9585V9.04183Z" fill="currentColor"/>',
    })
    var a3 = a("B7sF"),
      a4 = a("l2oX"),
      a5 = a("Dh3m"),
      a6 = a("xJjI"),
      a7 = a("SqlE"),
      a8 = a("wtvr"),
      a9 = a("YEpt"),
      ie = a("gQcz"),
      it = a("rmk3"),
      ia = a("iB9g"),
      ii = a("cdAR"),
      io = a("bqtn")
    function ir(e) {
      let t,
        a = e?.ownerDocument.defaultView
      if (null == e || null == a) return
      let i = e.ownerDocument,
        n = new Map(),
        o = new WeakMap(),
        r = new Set(),
        l = new Set(),
        s = !0,
        c = () => {
          null == t && (t = a.requestAnimationFrame(m))
        },
        u = new ResizeObserver(c),
        d = new MutationObserver((e) => {
          for (let t of e)
            "childList" === t.type || "data-avatar-overlay-foreground" === t.attributeName
              ? ((s = !0), c())
              : t.target instanceof Element &&
                r.has(t.target) &&
                ("style" !== t.attributeName || t.target.getAttribute("style") !== o.get(t.target)) &&
                c()
        }),
        p = (e, t) => {
          ;((e.style.clipPath = t), o.set(e, e.getAttribute("style")), n.delete(e))
        },
        m = () => {
          if (((t = void 0), s)) {
            for (let t of ((s = !1),
            (l = new Set(i.querySelectorAll("[data-avatar-overlay-foreground]"))),
            u.disconnect(),
            r.clear(),
            [e, ...l]))
              for (let e = t; null != e && !r.has(e); e = e.parentElement) (r.add(e), u.observe(e))
            for (let [e, t] of n) l.has(e) || p(e, t.original)
          }
          if ("active" !== i.documentElement.dataset.owlNativeGlass) {
            for (let [e, t] of n) p(e, t.original)
            return
          }
          let d = e.getBoundingClientRect(),
            m = Number.parseFloat(a.getComputedStyle(e).borderTopLeftRadius)
          for (let t of l) {
            let i = t.getBoundingClientRect(),
              r = n.get(t)
            if (
              0 === t.offsetWidth ||
              0 === t.offsetHeight ||
              0 === i.width ||
              0 === i.height ||
              0 === d.width ||
              0 === d.height
            ) {
              null != r && p(t, r.original)
              continue
            }
            let l = i.width / t.offsetWidth,
              s = i.height / t.offsetHeight,
              c = (d.left - i.left) / l,
              u = (d.top - i.top) / s,
              f = (d.right - i.left) / l,
              h = (d.bottom - i.top) / s,
              g = (m * d.width) / e.offsetWidth / l,
              v = (m * d.height) / e.offsetHeight / s,
              y = -i.left / l,
              w = -i.top / s,
              b = (a.innerWidth - i.left) / l,
              C = (a.innerHeight - i.top) / s,
              x = `path(evenodd, "M ${y} ${w} H ${b} V ${C} H ${y} Z M ${c + g} ${u} H ${f - g} A ${g} ${v} 0 0 1 ${f} ${u + v} V ${h - v} A ${g} ${v} 0 0 1 ${f - g} ${h} H ${c + g} A ${g} ${v} 0 0 1 ${c} ${h - v} V ${u + v} A ${g} ${v} 0 0 1 ${c + g} ${u} Z")`
            r?.applied !== x &&
              (n.set(t, { original: r?.original ?? t.style.clipPath, applied: x }),
              (t.style.clipPath = x),
              o.set(t, t.getAttribute("style")))
          }
          i
            .getAnimations()
            .some(
              (e) =>
                "running" === e.playState &&
                e.effect instanceof KeyframeEffect &&
                null != e.effect.target &&
                r.has(e.effect.target),
            ) && c()
        },
        f = (e) => {
          e.target instanceof Element && r.has(e.target) && c()
        }
      return (
        d.observe(i.documentElement, {
          attributes: !0,
          attributeFilter: ["class", "style", "hidden", "data-owl-native-glass", "data-avatar-overlay-foreground"],
          childList: !0,
          subtree: !0,
        }),
        i.addEventListener("scroll", c, !0),
        i.addEventListener("animationstart", f, !0),
        i.addEventListener("transitionrun", f, !0),
        a.addEventListener("resize", c),
        m(),
        () => {
          for (let [e, o] of (d.disconnect(),
          u.disconnect(),
          i.removeEventListener("scroll", c, !0),
          i.removeEventListener("animationstart", f, !0),
          i.removeEventListener("transitionrun", f, !0),
          a.removeEventListener("resize", c),
          null != t && a.cancelAnimationFrame(t),
          n))
            e.style.clipPath = o.original
        }
      )
    }
    var il = a("u4BA"),
      is = a("HRxJ")
    let ic = (0, u.un)(el.u, ({ get: e }) => (e(J.Fe) ? e(J.Ae)?.[0] : void 0))
    function iu(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c = (0, n.c)(19),
        { items: d, children: p, anchor: m, onOpenChange: f } = e,
        h = (0, u.gh)(el.u),
        y = (0, u.Ul)(J.X4),
        w = (0, u.Ul)(ic),
        [b, C] = (0, g.useState)(!1),
        x = (0, g.useRef)(void 0),
        A = y || null != w
      c[0] !== m || c[1] !== d || c[2] !== f || c[3] !== b
        ? ((t = (e) => {
            e === b || (e && (0 === d.length || null == m)) || (C(e), f?.(e))
          }),
          (c[0] = m),
          (c[1] = d),
          (c[2] = f),
          (c[3] = b),
          (c[4] = t))
        : (t = c[4])
      let M = t
      ;(c[5] !== M || c[6] !== p
        ? ((a = (e) => {
            ;(p.props.onContextMenu?.(e), e.stopPropagation(), e.defaultPrevented || (e.preventDefault(), M(!0)))
          }),
          (o = (e) => {
            ;(p.props.onKeyDown?.(e),
              e.defaultPrevented ||
                e.target !== e.currentTarget ||
                ("ContextMenu" !== e.key && ("F10" !== e.key || !e.shiftKey)) ||
                e.altKey ||
                e.ctrlKey ||
                e.metaKey ||
                (e.preventDefault(), e.stopPropagation(), M(!0)))
          }),
          (c[5] = M),
          (c[6] = p),
          (c[7] = a),
          (c[8] = o))
        : ((a = c[7]), (o = c[8])),
        c[9] !== p || c[10] !== a || c[11] !== o
          ? ((r = (0, g.cloneElement)(p, { onContextMenu: a, onKeyDown: o })),
            (c[9] = p),
            (c[10] = a),
            (c[11] = o),
            (c[12] = r))
          : (r = c[12]))
      let I = r,
        S = (e) =>
          (0, i.jsx)(
            io.ms.Item,
            {
              disabled: !1 === e.enabled,
              leftIcon:
                "function" == typeof e.icon
                  ? (0, g.createElement)(e.icon)
                  : A && (0, i.jsx)("span", { "aria-hidden": !0, className: "size-4" }),
              onSelect: () => {
                x.current = e.onSelect
              },
              children: null != e.message ? (0, i.jsx)(ei.A, { ...e.message, values: e.messageValues }) : e.id,
            },
            e.id,
          )
      c[13] !== b
        ? ((l = b
            ? (0, v.createPortal)(
                (0, i.jsx)("div", {
                  "aria-hidden": !0,
                  className: "pointer-events-auto fixed inset-0 no-drag",
                  "data-menu-overlay": !0,
                }),
                document.body,
              )
            : null),
          (c[13] = b),
          (c[14] = l))
        : (l = c[14])
      let E =
        null != m
          ? (0, v.createPortal)(
              (0, i.jsxs)(io.Ab, {
                contentRef: ir,
                open: b,
                onOpenChange: M,
                onCloseAutoFocus: (e) => {
                  e.preventDefault()
                  let t = x.current
                  ;((x.current = void 0), t?.())
                },
                triggerButton: m.element,
                portalContainer: m.container,
                side: m.side,
                sideOffset: m.sideOffset,
                align: "center",
                surface: "glass",
                children: [
                  d.filter(ip).map(S),
                  A
                    ? (0, i.jsx)(io.ms.Item, {
                        leftIcon:
                          y || null == w
                            ? (0, i.jsx)("span", { "aria-hidden": !0, className: is.A.miniIcon })
                            : (0, i.jsx)(tc.g, { artwork: w.artwork, size: 16 }),
                        onSelect: () => {
                          x.current = () => {
                            ;(0, il.h)(h, y ? "pet" : "orbit")
                          }
                        },
                        children:
                          y || null == w
                            ? (0, i.jsx)(ei.A, {
                                id: "restricted.miniContextMenu.switchToPet",
                                defaultMessage: "Switch to Mini",
                                description:
                                  "Mini context menu action that replaces dot mode with the user's selected pet",
                              })
                            : (0, i.jsx)(ei.A, {
                                id: "restricted.miniContextMenu.switchToOrbit.dot",
                                defaultMessage: "Switch to {hasName, select, true {{orbitName}} other {your dot}}",
                                description:
                                  "Switches from Quick Chat or the pet to the primary dot. Use its custom name when present; dot is the untranslated term for the user's agent.",
                                values: { orbitName: w.name, hasName: !(0, et.x)(w.name) },
                              }),
                      })
                    : null,
                  d.filter(id).map(S),
                ],
              }),
              m.container,
            )
          : null
      return (
        c[15] !== l || c[16] !== E || c[17] !== I
          ? ((s = (0, i.jsxs)(i.Fragment, { children: [I, l, E] })), (c[15] = l), (c[16] = E), (c[17] = I), (c[18] = s))
          : (s = c[18]),
        s
      )
    }
    function id(e) {
      return "close-avatar" === e.id
    }
    function ip(e) {
      return "close-avatar" !== e.id
    }
    var im = a("Xvyy"),
      ih = a("u34V"),
      ig = a("a3mp")
    let iv = (0, eT.a)({
      name: "speaker-slash-light-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.475586, y: 1.475098, width: 13.049561, height: 13.049316 },
        visualBounds: { x: 1.475586, y: 1.475098, width: 13.049561, height: 13.049316 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 1.475586, y: 1.475098, width: 13.049561, height: 13.049316 },
        center: { x: 8.000367, y: 7.999756 },
        insets: { top: 1.475098, right: 1.474853, bottom: 1.475586, left: 1.475586 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8.000367, y: 7.999756 }, foreground: { x: 8.000367, y: 7.999756 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M1.62913 1.62864C1.83401 1.42377 2.16626 1.42407 2.37132 1.62864L14.3713 13.6286C14.5763 13.8337 14.5763 14.1658 14.3713 14.3708C14.1663 14.5759 13.8342 14.5759 13.6291 14.3708L12.6672 13.4089C12.124 13.9662 11.2475 14.1755 10.4651 13.7615L6.90159 11.8747C6.88118 11.8639 6.85827 11.8581 6.83519 11.8581H4.66722C3.64104 11.858 2.80882 11.026 2.80882 9.99974V5.99974C2.80893 5.33537 3.15834 4.75311 3.68284 4.42454L1.62913 2.37083C1.42455 2.16577 1.42425 1.83352 1.62913 1.62864ZM4.47386 5.21556C4.12117 5.30224 3.85975 5.62023 3.8596 5.99974V9.99974C3.8596 10.4461 4.22094 10.8082 4.66722 10.8083H6.83519C7.02956 10.8083 7.22103 10.8561 7.3928 10.947L10.9563 12.8337C11.2991 13.015 11.6902 12.9217 11.927 12.6687L4.47386 5.21556Z" fill="currentColor"/> <path d="M10.4651 2.23899C11.7025 1.58442 13.1925 2.48153 13.1926 3.88157V9.35423C13.1922 9.64374 12.9568 9.87847 12.6672 9.87864C12.3776 9.87849 12.1432 9.64375 12.1428 9.35423V3.88157C12.1427 3.27264 11.4945 2.88299 10.9563 3.1677L7.83714 4.81907C7.581 4.95467 7.26294 4.85632 7.12718 4.60032C6.99156 4.34413 7.08884 4.02608 7.34495 3.89036L10.4651 2.23899Z" fill="currentColor"/>',
    })
    var iy = a("lWo3"),
      iw = a("xv9C"),
      ib = a("R4Te"),
      iC = a("CqQF")
    function ix(e) {
      let t,
        a,
        o = (0, n.c)(9),
        { children: r, className: l, inert: s, nativeCornerRadius: c, nativeSurfaceId: u, style: d } = e,
        p = void 0 === c ? 12 : c
      return (
        o[0] !== l
          ? ((t = (0, ev.A)(
              eq.A.Material,
              "rounded-full text-default forced-colors:border forced-colors:border-[ButtonBorder] forced-colors:bg-[ButtonFace] forced-colors:text-[ButtonText] forced-colors:backdrop-blur-none",
              l,
            )),
            (o[0] = l),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== r || o[3] !== s || o[4] !== p || o[5] !== u || o[6] !== d || o[7] !== t
          ? ((a = (0, i.jsx)("div", {
              className: t,
              "data-avatar-overlay-hit-region": "realtime-voice",
              "data-avatar-overlay-native-corner-radius": p,
              "data-avatar-overlay-native-surface-id": u,
              inert: s,
              style: d,
              children: r,
            })),
            (o[2] = r),
            (o[3] = s),
            (o[4] = p),
            (o[5] = u),
            (o[6] = d),
            (o[7] = t),
            (o[8] = a))
          : (a = o[8]),
        a
      )
    }
    let iA = { damping: 22, mass: 0.72, stiffness: 360, type: "spring" }
    function iM(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        p,
        m,
        f,
        h = (0, n.c)(61),
        {
          arePetControlsExpanded: g,
          areControlsVisible: v,
          areVoiceActionsHidden: w,
          canRevealControls: b,
          canStart: C,
          children: x,
          errorMessage: A,
          isRealtimeVoiceSurfaceVisible: M,
          isMicrophoneMuted: I,
          isMuted: S,
          mascot: E,
          onAnimationFrame: R,
          onStart: _,
          onStop: T,
          onOpenThread: k,
          onToggleMicrophoneMute: O,
          onToggleMute: P,
          petControlsAppearance: N,
          phase: L,
          placement: F,
          showsNotificationBadge: q,
        } = e,
        j = void 0 === g || g,
        D = void 0 !== v && v,
        U = void 0 !== w && w,
        H = void 0 === b || b,
        B = void 0 !== M && M,
        V = void 0 !== I && I,
        z = void 0 !== S && S,
        W = void 0 === N ? d.JCZ : N,
        X = void 0 !== q && q,
        G = (0, y.A)(),
        $ = "inactive" !== L,
        K = "starting" === L,
        Q = "stopping" === L,
        Z = !U && ($ || C || null != A),
        J = "active" === L
      if (
        h[0] !== D ||
        h[1] !== j ||
        h[2] !== U ||
        h[3] !== H ||
        h[4] !== x ||
        h[5] !== A ||
        h[6] !== G ||
        h[7] !== J ||
        h[8] !== V ||
        h[9] !== z ||
        h[10] !== $ ||
        h[11] !== B ||
        h[12] !== K ||
        h[13] !== Q ||
        h[14] !== E ||
        h[15] !== R ||
        h[16] !== k ||
        h[17] !== _ ||
        h[18] !== T ||
        h[19] !== O ||
        h[20] !== P ||
        h[21] !== W ||
        h[22] !== F ||
        h[23] !== X ||
        h[24] !== Z
      ) {
        let e,
          n = j ? W.hoverControlSize : (0, ib.PO)(W),
          d = j ? W.hoverControlSize : W.compactControlHeight,
          p = j ? W.hoverControlSize / 2 : W.compactControlCornerRadius,
          m = {
            controlGap: j ? W.hoverControlGap : -n,
            controlSize: n,
            layout: j ? "arc" : "row",
            offsetX: j ? W.hoverOffsetX : W.compactOffsetX,
            offsetY: j ? W.hoverOffsetY : W.compactOffsetY,
          },
          f = !U && J && B && null != O && null != P,
          g = H
            ? "group-hover:pointer-events-auto group-hover:opacity-100 group-has-[:focus-visible]:pointer-events-auto group-has-[:focus-visible]:opacity-100"
            : null,
          v = iR.start
        K ? (v = iR.starting) : J && null != k ? (v = iR.openThread) : $ && (v = iR.stop)
        let y = f ? iR.stop : v
        h[33] !== D || h[34] !== A || h[35] !== $ || h[36] !== B || h[37] !== g
          ? ((e =
              null != A || ($ && !B) || D
                ? "pointer-events-auto opacity-100"
                : ["pointer-events-none opacity-0 focus-within:pointer-events-auto focus-within:opacity-100", g]),
            (h[33] = D),
            (h[34] = A),
            (h[35] = $),
            (h[36] = B),
            (h[37] = g),
            (h[38] = e))
          : (e = h[38])
        let w = e
        ;(h[39] !== F || h[40] !== f
          ? ((u = f
              ? (0, i.jsx)("div", {
                  className: "absolute z-30",
                  "data-avatar-overlay-hit-region": "realtime-voice",
                  role: "presentation",
                  style: { height: 42, left: "calc(50% - 56px)", top: F.startsWith("bottom") ? 0 : -10, width: 112 },
                  onClick: iS,
                  onPointerDown: iI,
                })
              : null),
            (h[39] = F),
            (h[40] = f),
            (h[41] = u))
          : (u = h[41]),
          (a = a4.x),
          (l = "never"))
        let b = f
          ? (0, i.jsx)(
              iE,
              {
                ariaLabel: G.formatMessage(V ? iR.unmuteMicrophone : iR.muteMicrophone),
                disabled: !J,
                arePetControlsExpanded: j,
                controlCornerRadius: p,
                controlHeight: d,
                controlWidth: n,
                isAnimated: !0,
                isPressed: V,
                mascot: E,
                nativeSurfaceId: "voice-microphone",
                onAnimationFrame: R,
                petControlsAppearance: W,
                position: (0, ib.oO)({ ...m, mascot: E, showsNotificationBadge: X, surfaceId: "voice-microphone" }),
                tooltipContent: (0, i.jsx)(ei.A, { ...(V ? iR.unmuteMicrophone : iR.muteMicrophone) }),
                visibilityClassName: w,
                onClick: O,
                children: (0, i.jsx)(eO.I, { "aria-hidden": !1, asset: ig.X }),
              },
              "voice-microphone",
            )
          : null
        h[42] !== b ? ((s = (0, i.jsx)(eg.N, { initial: !1, children: b })), (h[42] = b), (h[43] = s)) : (s = h[43])
        let C = B ? void 0 : "pet-controls",
          M = Z
            ? (0, i.jsx)(iE, {
                ariaLabel: G.formatMessage(y),
                arePetControlsExpanded: j,
                controlCornerRadius: p,
                controlHeight: d,
                controlWidth: n,
                disabled: K || Q,
                mascot: E,
                nativeSurfaceId: "voice-controls",
                onAnimationFrame: R,
                petControlsAppearance: W,
                position: (0, ib.oO)({ ...m, mascot: E, showsNotificationBadge: X, surfaceId: "voice-controls" }),
                tooltipContent: (0, i.jsx)(ei.A, { ...y }),
                visibilityClassName: w,
                onClick: () => {
                  f ? T?.() : J && null != k ? k() : $ ? T?.() : _?.()
                },
                children:
                  null != A
                    ? (0, i.jsx)(eO.I, { className: "text-danger", "aria-hidden": !1, asset: ih.m })
                    : f || ((B || null == k) && (J || Q))
                      ? (0, i.jsx)(eO.I, { "aria-hidden": !1, asset: iw.Q })
                      : K
                        ? (0, i.jsx)(er.y, { className: "icon-xs" })
                        : (0, i.jsx)(Y.ERJ, {}),
              })
            : null
        ;(h[44] !== x || h[45] !== C || h[46] !== M
          ? ((c = (0, i.jsxs)("div", {
              className: "persistentControls-VYJg29",
              "data-avatar-overlay-native-glass-group": C,
              children: [x, M],
            })),
            (h[44] = x),
            (h[45] = C),
            (h[46] = M),
            (h[47] = c))
          : (c = h[47]),
          (t = eg.N),
          (o = !1),
          (r = f
            ? (0, i.jsx)(
                iE,
                {
                  ariaLabel: G.formatMessage(z ? iR.unmuteOutput : iR.muteOutput),
                  arePetControlsExpanded: j,
                  controlCornerRadius: p,
                  controlHeight: d,
                  controlWidth: n,
                  disabled: !J,
                  isAnimated: !0,
                  isPressed: z,
                  mascot: E,
                  nativeSurfaceId: "voice-output",
                  onAnimationFrame: R,
                  petControlsAppearance: W,
                  position: (0, ib.oO)({ ...m, mascot: E, showsNotificationBadge: X, surfaceId: "voice-output" }),
                  tooltipContent: (0, i.jsx)(ei.A, { ...(z ? iR.unmuteOutput : iR.muteOutput) }),
                  visibilityClassName: w,
                  onClick: P,
                  children: z
                    ? (0, i.jsx)(eO.I, { "aria-hidden": !1, asset: iv })
                    : (0, i.jsx)(eO.I, { "aria-hidden": !1, asset: iy.L }),
                },
                "voice-output",
              )
            : null),
          (h[0] = D),
          (h[1] = j),
          (h[2] = U),
          (h[3] = H),
          (h[4] = x),
          (h[5] = A),
          (h[6] = G),
          (h[7] = J),
          (h[8] = V),
          (h[9] = z),
          (h[10] = $),
          (h[11] = B),
          (h[12] = K),
          (h[13] = Q),
          (h[14] = E),
          (h[15] = R),
          (h[16] = k),
          (h[17] = _),
          (h[18] = T),
          (h[19] = O),
          (h[20] = P),
          (h[21] = W),
          (h[22] = F),
          (h[23] = X),
          (h[24] = Z),
          (h[25] = t),
          (h[26] = a),
          (h[27] = o),
          (h[28] = r),
          (h[29] = l),
          (h[30] = s),
          (h[31] = c),
          (h[32] = u))
      } else ((t = h[25]), (a = h[26]), (o = h[27]), (r = h[28]), (l = h[29]), (s = h[30]), (c = h[31]), (u = h[32]))
      return (
        h[48] !== t || h[49] !== o || h[50] !== r
          ? ((p = (0, i.jsx)(t, { initial: o, children: r })), (h[48] = t), (h[49] = o), (h[50] = r), (h[51] = p))
          : (p = h[51]),
        h[52] !== a || h[53] !== l || h[54] !== s || h[55] !== c || h[56] !== p
          ? ((m = (0, i.jsxs)(a, { reducedMotion: l, children: [s, c, p] })),
            (h[52] = a),
            (h[53] = l),
            (h[54] = s),
            (h[55] = c),
            (h[56] = p),
            (h[57] = m))
          : (m = h[57]),
        h[58] !== u || h[59] !== m
          ? ((f = (0, i.jsxs)(i.Fragment, { children: [u, m] })), (h[58] = u), (h[59] = m), (h[60] = f))
          : (f = h[60]),
        f
      )
    }
    function iI(e) {
      e.stopPropagation()
    }
    function iS(e) {
      e.stopPropagation()
    }
    function iE(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        d,
        p,
        m,
        f,
        h,
        g,
        v,
        y,
        w,
        b,
        C = (0, n.c)(68),
        {
          ariaLabel: x,
          arePetControlsExpanded: A,
          children: M,
          controlCornerRadius: I,
          controlHeight: S,
          controlWidth: E,
          disabled: R,
          isAnimated: _,
          isPressed: T,
          mascot: k,
          nativeSurfaceId: O,
          onAnimationFrame: P,
          onClick: N,
          petControlsAppearance: L,
          position: F,
          tooltipContent: q,
          visibilityClassName: j,
        } = e,
        D = void 0 !== _ && _,
        U = (0, ea.tF)(),
        H = A ? a5.z1 : a5.Wm,
        B = A ? a5.P7 : a5.y1,
        V = `calc(50% + ${F.x}px)`,
        z = `calc(100% + ${F.y - k.height}px)`
      C[0] !== I || C[1] !== S || C[2] !== E || C[3] !== V || C[4] !== z
        ? ((t = { borderRadius: I, height: S, left: V, top: z, width: E }),
          (C[0] = I),
          (C[1] = S),
          (C[2] = E),
          (C[3] = V),
          (C[4] = z),
          (C[5] = t))
        : (t = C[5])
      let Y = t
      ;(C[6] !== Y ? ((a = { ...Y, x: 0, y: 0, opacity: 1, scale: 1 }), (C[6] = Y), (C[7] = a)) : (a = C[7]),
        C[8] !== D || C[9] !== L
          ? ((o = D
              ? { opacity: 0, transition: { duration: L.transitionDurationMs / 1e3, ease: [0.4, 0, 0.6, 1] } }
              : void 0),
            (C[8] = D),
            (C[9] = L),
            (C[10] = o))
          : (o = C[10]),
        C[11] !== Y || C[12] !== D || C[13] !== L
          ? ((r = !!D && { ...Y, borderRadius: L.compactControlCornerRadius, opacity: 0, scale: 0.45, x: 0, y: -8 }),
            (C[11] = Y),
            (C[12] = D),
            (C[13] = L),
            (C[14] = r))
          : (r = C[14]))
      let W = !U
      ;(C[15] !== B
        ? ((l = { default: iA, borderRadius: B, height: B, left: B, top: B, width: B }), (C[15] = B), (C[16] = l))
        : (l = C[16]),
        C[17] !== U || C[18] !== O
          ? ((s = () => {
              U ||
                tZ.v.debug("Avatar overlay voice control dismissal completed", {
                  safe: { surfaceId: O, timeMs: performance.now() },
                })
            }),
            (C[17] = U),
            (C[18] = O),
            (C[19] = s))
          : (s = C[19]),
        C[20] !== U || C[21] !== O || C[22] !== L
          ? ((c = () => {
              U ||
                tZ.v.debug("Avatar overlay voice control dismissal started", {
                  safe: { durationMs: L.transitionDurationMs, surfaceId: O, timeMs: performance.now() },
                })
            }),
            (C[20] = U),
            (C[21] = O),
            (C[22] = L),
            (C[23] = c))
          : (c = C[23]))
      let X = !A && "!border-transparent"
      ;(C[24] !== X || C[25] !== j
        ? ((u = (0, ev.A)("group/voice-action no-drag", X, j)), (C[24] = X), (C[25] = j), (C[26] = u))
        : (u = C[26]),
        C[27] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = { borderRadius: "inherit", height: "100%", width: "100%" }), (C[27] = d))
          : (d = C[27]))
      let G = R || !U,
        $ = R ? "cursor-default" : "cursor-interaction",
        K =
          T && "voice-microphone" === O
            ? "bg-danger-solid not-disabled:not-aria-disabled:hover:bg-danger-solid/90 text-danger-solid"
            : "enabled:active:bg-text/12 dark:enabled:active:bg-text/15"
      ;(C[28] !== $ || C[29] !== K
        ? ((p = (0, ev.A)(
            "flex size-full items-center justify-center rounded-full focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
            $,
            K,
          )),
          (C[28] = $),
          (C[29] = K),
          (C[30] = p))
        : (p = C[30]),
        C[31] !== N
          ? ((m = (e) => {
              ;(e.stopPropagation(), N?.())
            }),
            (C[31] = N),
            (C[32] = m))
          : (m = C[32]))
      let Q = A ? 0 : L.contentHiddenBlurRadiusPx
      C[33] !== Q ? ((f = (0, a5.BP)(Q)), (C[33] = Q), (C[34] = f)) : (f = C[34])
      let Z = +!!A,
        J = A ? 1 : L.contentHiddenScale
      return (
        C[35] !== f || C[36] !== Z || C[37] !== J
          ? ((h = { filter: f, opacity: Z, scale: J }), (C[35] = f), (C[36] = Z), (C[37] = J), (C[38] = h))
          : (h = C[38]),
        C[39] !== M || C[40] !== H || C[41] !== h
          ? ((g = (0, i.jsx)(eh.P.span, {
              animate: h,
              className: "flex items-center justify-center",
              initial: !1,
              transition: H,
              children: M,
            })),
            (C[39] = M),
            (C[40] = H),
            (C[41] = h),
            (C[42] = g))
          : (g = C[42]),
        C[43] !== x || C[44] !== T || C[45] !== G || C[46] !== p || C[47] !== m || C[48] !== g
          ? ((v = (0, i.jsx)("button", {
              type: "button",
              "aria-label": x,
              "aria-pressed": T,
              disabled: G,
              className: p,
              onClick: m,
              children: g,
            })),
            (C[43] = x),
            (C[44] = T),
            (C[45] = G),
            (C[46] = p),
            (C[47] = m),
            (C[48] = g),
            (C[49] = v))
          : (v = C[49]),
        C[50] !== v || C[51] !== q
          ? ((y = (0, i.jsx)(iC.m, { tooltipClassName: "pointer-events-none", tooltipContent: q, children: v })),
            (C[50] = v),
            (C[51] = q),
            (C[52] = y))
          : (y = C[52]),
        C[53] !== I || C[54] !== O || C[55] !== u || C[56] !== y
          ? ((w = (0, i.jsx)(ix, { className: u, nativeCornerRadius: I, nativeSurfaceId: O, style: d, children: y })),
            (C[53] = I),
            (C[54] = O),
            (C[55] = u),
            (C[56] = y),
            (C[57] = w))
          : (w = C[57]),
        C[58] !== P ||
        C[59] !== s ||
        C[60] !== c ||
        C[61] !== w ||
        C[62] !== a ||
        C[63] !== o ||
        C[64] !== r ||
        C[65] !== W ||
        C[66] !== l
          ? ((b = (0, i.jsx)(eh.P.div, {
              animate: a,
              className: "absolute z-30 -translate-x-1/2",
              exit: o,
              initial: r,
              inert: W,
              transition: l,
              onAnimationComplete: s,
              onAnimationStart: c,
              onUpdate: P,
              children: w,
            })),
            (C[58] = P),
            (C[59] = s),
            (C[60] = c),
            (C[61] = w),
            (C[62] = a),
            (C[63] = o),
            (C[64] = r),
            (C[65] = W),
            (C[66] = l),
            (C[67] = b))
          : (b = C[67]),
        b
      )
    }
    let iR = (0, w.YK)({
      start: {
        id: "avatarOverlay.startRealtimeVoice",
        defaultMessage: "Start new voice chat",
        description: "Accessible label and tooltip for starting a new voice chat from the floating avatar",
      },
      stop: {
        id: "avatarOverlay.stopRealtimeVoice",
        defaultMessage: "Stop voice chat",
        description: "Accessible label and tooltip for stopping realtime voice from the floating avatar",
      },
      starting: {
        id: "avatarOverlay.startingRealtimeVoice",
        defaultMessage: "Starting voice chat",
        description: "Accessible label and tooltip while realtime voice starts from the floating avatar",
      },
      openThread: {
        id: "avatarOverlay.openRealtimeVoiceThread",
        defaultMessage: "Open voice chat",
        description: "Accessible label and tooltip for opening the detailed Codex task from realtime voice",
      },
      muteMicrophone: {
        id: "avatarOverlay.muteMicrophone",
        defaultMessage: "Mute microphone",
        description: "Accessible label and tooltip for muting microphone input from the floating avatar",
      },
      unmuteMicrophone: {
        id: "avatarOverlay.unmuteMicrophone",
        defaultMessage: "Unmute microphone",
        description: "Accessible label and tooltip for unmuting microphone input from the floating avatar",
      },
      muteOutput: {
        id: "avatarOverlay.muteOutput",
        defaultMessage: "Mute voice chat",
        description:
          "Accessible label and tooltip for showing realtime voice output as captions from the floating avatar",
      },
      unmuteOutput: {
        id: "avatarOverlay.unmuteOutput",
        defaultMessage: "Unmute voice chat",
        description: "Accessible label and tooltip for resuming realtime voice audio output from the floating avatar",
      },
    })
    var i_ = a("m5G2"),
      iT = "thinkingShimmer-xcf4BW"
    function ik(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c = (0, n.c)(23),
        { className: u, screenEdgeFallback: d, style: p, text: m, tone: f } = e,
        h = void 0 === f ? "neutral" : f,
        v = (0, g.useRef)(null),
        y = d?.belowAnchorTop,
        w = d?.mascotTop,
        b = d?.occupiedBounds,
        C = d?.visibleBounds.top,
        x = null == d ? void 0 : d.visibleBounds.top + d.visibleBounds.height
      ;(c[0] !== y || c[1] !== w || c[2] !== b || c[3] !== x || c[4] !== C
        ? ((t = () => {
            let e = v.current
            if (null == e || null == y || null == w || null == C || null == x) return
            let t = () => {
              let t =
                  "availTop" in window.screen && "number" == typeof window.screen.availTop ? window.screen.availTop : 0,
                a = window.screen.availHeight > 0 ? t + window.screen.availHeight - window.screenY : x
              e.style.top = `${(0, ib.$b)({ belowAnchorTop: y, mascotTop: w, occupiedBounds: b?.get(), pillHeight: e.offsetHeight, visibleViewportBottom: Math.min(x, a), visibleViewportTop: C })}px`
            }
            t()
            let a = b?.on("change", t),
              i = (0, i_.J)({ axis: "height", target: e, onChange: t })
            return (
              window.addEventListener("resize", t),
              () => {
                ;(a?.(), i?.(), window.removeEventListener("resize", t))
              }
            )
          }),
          (a = [y, w, b, x, C]),
          (c[0] = y),
          (c[1] = w),
          (c[2] = b),
          (c[3] = x),
          (c[4] = C),
          (c[5] = t),
          (c[6] = a))
        : ((t = c[5]), (a = c[6])),
        (0, g.useLayoutEffect)(t, a))
      let A = "danger" === h ? "assertive" : "polite"
      c[7] !== u ? ((o = (0, ev.A)("no-drag pointer-events-none", u)), (c[7] = u), (c[8] = o)) : (o = c[8])
      let M = "danger" === h ? "alert" : "status",
        I = "danger" === h ? "small" : "micro",
        S = "danger" === h ? "block text-center break-words whitespace-normal" : "truncate"
      return (
        c[9] !== S || c[10] !== h
          ? ((r = (0, ev.A)("max-w-full align-bottom", S, "neutral" === h && ["loading-shimmer-pure-text", iT])),
            (c[9] = S),
            (c[10] = h),
            (c[11] = r))
          : (r = c[11]),
        c[12] !== r || c[13] !== m
          ? ((l = (0, i.jsx)("span", { className: r, children: m })), (c[12] = r), (c[13] = m), (c[14] = l))
          : (l = c[14]),
        c[15] !== p || c[16] !== l || c[17] !== A || c[18] !== o || c[19] !== M || c[20] !== I || c[21] !== h
          ? ((s = (0, i.jsx)(en.sR, {
              "aria-live": A,
              className: o,
              nativeSurfaceId: "voice-status",
              ref: v,
              role: M,
              size: I,
              style: p,
              tone: h,
              children: l,
            })),
            (c[15] = p),
            (c[16] = l),
            (c[17] = A),
            (c[18] = o),
            (c[19] = M),
            (c[20] = I),
            (c[21] = h),
            (c[22] = s))
          : (s = c[22]),
        s
      )
    }
    var iO = a("KUNU"),
      iP = a("qGR1"),
      iN = a("Xz5X")
    class iL {
      consumeOffset
      #e
      #t
      #a
      #i
      #n
      #o
      #r = 0
      #l = []
      constructor(e, t, a) {
        ;((this.#e = e),
          (this.#t = "pointer" === e.source ? 1 : 0.4),
          (this.consumeOffset = Math.min(e.rowWidth, Math.max(0.55 * e.rowWidth, e.actionWidth + 15))),
          (this.#a = Math.max(20, 150 - e.actionWidth)),
          (this.#i = Math.max(20, ("trackpad" === e.source ? 350 : 210) - e.actionWidth)))
        let i = t < 0 ? -t / 0.25 : t,
          n = i
        ;(i > e.actionWidth &&
          (n =
            e.actionWidth + ((i - e.actionWidth) * (t < 0 ? this.#i : this.#a)) / (this.consumeOffset - e.actionWidth)),
          (this.#n = t < 0 ? -n : n),
          (this.#o = a))
      }
      get offset() {
        let { actionWidth: e, rowWidth: t } = this.#e,
          a = Math.abs(this.#n),
          i = a <= e ? a : Math.min(t, e + ((a - e) * (this.consumeOffset - e)) / (this.#n < 0 ? this.#i : this.#a))
        return this.#n < 0 ? -(0.25 * i) : i
      }
      get velocity() {
        let e = this.#l.reduce((e, t) => e + t.seconds, 0)
        return 0 === e ? 0 : (this.#l.reduce((e, t) => e + t.delta, 0) / e) * this.#t
      }
      update(e, t) {
        let a = (t - this.#o) / 1e3
        return (
          a > 0.2 && ((this.#l = []), (this.#r = 0)),
          a > 0 &&
            a <= 0.2 &&
            (e * this.#r < 0 && (this.#l = []),
            this.#l.push({ delta: e, seconds: a }),
            this.#l.length > 3 && this.#l.shift(),
            (this.#r = e)),
          (this.#o = t),
          (this.#n += e * this.#t),
          this.offset
        )
      }
      release(e = !1) {
        return e
          ? "closed"
          : this.offset >= this.consumeOffset || (this.offset >= 24 && this.velocity >= 600 && this.#r >= 0)
            ? "dismissed"
            : Math.abs(this.velocity) > 50
              ? this.offset > 0 && this.velocity > 0
                ? "revealed"
                : "closed"
              : this.offset > this.#e.actionWidth / 2
                ? "revealed"
                : "closed"
      }
    }
    function iF(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        p,
        m,
        f,
        h,
        v,
        y,
        w,
        b,
        C,
        x,
        A,
        M,
        I,
        S,
        E,
        R,
        _,
        T,
        k,
        O,
        P,
        N,
        L,
        F = (0, n.c)(88),
        { children: q, className: j, ariaLabel: D, enabled: U, input: H, visibleRight: B, onDismiss: V } = e,
        z = void 0 === U || U,
        W = (0, ef.I)(),
        X = (0, ey.d)(0),
        G = (0, ey.d)(0),
        $ = (0, ey.d)(0)
      F[0] !== X || F[1] !== G
        ? ((t = () => {
            let e = -X.get(),
              t = G.get()
            return e <= 0 ? e : 0 === t ? 0 : t * Math.tanh(e / t)
          }),
          (F[0] = X),
          (F[1] = G),
          (F[2] = t))
        : (t = F[2])
      let K = (0, ew.G)(t),
        Q = (0, ey.d)(1),
        Z = (0, g.useRef)(null),
        J = (0, g.useRef)(null),
        ee = (0, g.useRef)(null),
        et = (0, g.useRef)(1),
        ea = (0, g.useRef)(null),
        ei = (0, g.useRef)(null),
        er = (0, g.useRef)(null),
        el = (0, g.useRef)(null),
        es = (0, g.useRef)(!1),
        ec = (0, g.useRef)(!1),
        [eu, ed] = (0, g.useState)(!1),
        [ep, em] = (0, g.useState)(!1),
        [eg, eb] = (0, g.useState)(void 0)
      F[3] !== eg || F[4] !== X
        ? ((a = () => Math.max(0, Math.min(1, X.get() / (eg ?? 1)))), (F[3] = eg), (F[4] = X), (F[5] = a))
        : (a = F[5])
      let eC = (0, ew.G)(a)
      F[6] !== eC || F[7] !== Q ? ((o = () => eC.get() * Q.get()), (F[6] = eC), (F[7] = Q), (F[8] = o)) : (o = F[8])
      let ex = (0, ew.G)(o)
      F[9] !== eg || F[10] !== X || F[11] !== $
        ? ((r = () => `calc(100% + ${Math.max(0, Math.min(X.get(), $.get()) - (eg ?? 0))}px)`),
          (F[9] = eg),
          (F[10] = X),
          (F[11] = $),
          (F[12] = r))
        : (r = F[12])
      let eA = (0, ew.G)(r)
      ;(F[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () =>
            (0, i_.J)({
              axis: "width",
              target: ee.current,
              onChange: (e) => {
                let { width: t } = e
                return eb(t)
              },
            })),
          (s = []),
          (F[13] = l),
          (F[14] = s))
        : ((l = F[13]), (s = F[14])),
        (0, g.useLayoutEffect)(l, s),
        F[15] !== eg || F[16] !== Q || F[17] !== X || F[18] !== V || F[19] !== W
          ? ((c = (e, t) => {
              let a = void 0 === t ? 0 : t,
                i = Z.current,
                n = J.current
              if (null == i || null == n || ec.current) return
              ;(ei.current?.stop(), (ec.current = "dismissed" === e))
              let o = 0
              if ("revealed" === e) o = eg ?? n.offsetWidth
              else if ("dismissed" === e) {
                let e = i.getBoundingClientRect(),
                  t = e.width / i.offsetWidth
                o = e.right / t + d.VuE
              }
              let r = X.get()
              if (r === o && "closed" === e) {
                ;(ed(!1), em(!1))
                return
              }
              let l = eP(r, o, a, ec.current)
              ;(tZ.v.debug("Avatar overlay swipe released", {
                safe: { destination: e, from: r, to: o, velocity: a, duration: l.duration },
              }),
                (ei.current = (0, eR.i)(X, o, {
                  ...l,
                  duration: W ? 0 : l.duration,
                  type: "tween",
                  onUpdate: (t) => {
                    "dismissed" === e && Q.set(Math.max(0, Math.min(1, (o - t) / (o - r))))
                  },
                  onComplete: () => {
                    "closed" === e ? (ed(!1), em(!1)) : "dismissed" === e && V()
                  },
                })))
            }),
            (F[15] = eg),
            (F[16] = Q),
            (F[17] = X),
            (F[18] = V),
            (F[19] = W),
            (F[20] = c))
          : (c = F[20]))
      let eM = c
      F[21] !== eg || F[22] !== X || F[23] !== G || F[24] !== $ || F[25] !== B
        ? ((u = (e, t, a) => {
            let i = Z.current,
              n = J.current
            if (null == i || null == n || ec.current) return
            ei.current?.stop()
            let o = i.getBoundingClientRect(),
              r = o.width / i.offsetWidth
            ;(G.set(Math.max(0, (B - o.right - 1 / devicePixelRatio) / r)),
              "pointer" !== e && (el.current = null),
              (et.current = a),
              $.set(i.offsetWidth),
              (ea.current = new iL(
                {
                  rowWidth: i.offsetWidth * a,
                  actionWidth: Math.min((eg ?? n.offsetWidth) * a, i.offsetWidth * a - 15),
                  source: e,
                },
                X.get() * a,
                t,
              )),
              ed(!0))
          }),
          (F[21] = eg),
          (F[22] = X),
          (F[23] = G),
          (F[24] = $),
          (F[25] = B),
          (F[26] = u))
        : (u = F[26])
      let eI = (0, g.useEffectEvent)(u)
      F[27] !== X
        ? ((p = (e, t) => {
            null == ea.current || ec.current || X.set(ea.current.update(e, t) / et.current)
          }),
          (F[27] = X),
          (F[28] = p))
        : (p = F[28])
      let eS = (0, g.useEffectEvent)(p)
      F[29] !== eM
        ? ((m = (e) => {
            let t = ea.current
            ;((ea.current = null),
              null != t && eM(t.release(e), e || 50 >= Math.abs(t.velocity) ? 0 : t.velocity / et.current))
          }),
          (F[29] = eM),
          (F[30] = m))
        : (m = F[30])
      let eE = (0, g.useEffectEvent)(m)
      F[31] !== eM
        ? ((f = () => {
            ;((ea.current = null), (el.current = null), eM("closed"))
          }),
          (F[31] = eM),
          (F[32] = f))
        : (f = F[32])
      let e_ = (0, g.useEffectEvent)(f)
      ;(F[33] === Symbol.for("react.memo_cache_sentinel")
        ? ((h = (e) => {
            let t = ea.current?.consumeOffset
            null != t && em(e * et.current >= t)
          }),
          (F[33] = h))
        : (h = F[33]),
        (0, a3.L)(X, "change", h),
        F[34] !== eI || F[35] !== e_ || F[36] !== z || F[37] !== eE || F[38] !== H || F[39] !== eS
          ? ((v = () => {
              let e = Z.current
              if (null == e || !z) return void e_()
              let t = {
                element: e,
                begin: (e, t, a) => eI(e, t, a),
                update: (e, t) => eS(e, t),
                end: (e) => eE(e),
                close: () => e_(),
              }
              return (
                (er.current = t),
                H.targets.set(e, t),
                e.addEventListener("wheel", iq, { passive: !1 }),
                () => {
                  ;(e.removeEventListener("wheel", iq), H.forget(t), (er.current = null), ei.current?.stop())
                }
              )
            }),
            (F[34] = eI),
            (F[35] = e_),
            (F[36] = z),
            (F[37] = eE),
            (F[38] = H),
            (F[39] = eS),
            (F[40] = v))
          : (v = F[40]),
        F[41] !== z || F[42] !== H ? ((y = [z, H]), (F[41] = z), (F[42] = H), (F[43] = y)) : (y = F[43]),
        (0, g.useEffect)(v, y),
        F[44] === Symbol.for("react.memo_cache_sentinel")
          ? ((w = (e, t) => {
              let a = el.current
              a?.id === e.pointerId && ((el.current = null), a.dragging && (er.current?.end(t), e.stopPropagation()))
            }),
            (F[44] = w))
          : (w = F[44]))
      let eT = w,
        ek = eu && "[&_[data-avatar-overlay-swipe-dismiss-accessory]]:invisible"
      F[45] !== j || F[46] !== ek
        ? ((b = (0, ev.A)("relative", j, ek)), (F[45] = j), (F[46] = ek), (F[47] = b))
        : (b = F[47])
      let eO = ep || void 0
      ;(F[48] === Symbol.for("react.memo_cache_sentinel") ? ((C = { touchAction: "pan-y" }), (F[48] = C)) : (C = F[48]),
        F[49] !== eM || F[50] !== eu
          ? ((x = (e) => {
              es.current
                ? ((es.current = !1), e.preventDefault(), e.stopPropagation())
                : eu &&
                  e.target instanceof Node &&
                  !J.current?.contains(e.target) &&
                  ((ea.current = null), eM("closed"), e.preventDefault(), e.stopPropagation())
            }),
            (F[49] = eM),
            (F[50] = eu),
            (F[51] = x))
          : (x = F[51]),
        F[52] !== z
          ? ((A = (e) => {
              ;((es.current = !1),
                !z ||
                  0 !== e.button ||
                  ec.current ||
                  (e.target instanceof Element &&
                    null != e.target.closest("button, a, input, textarea, select, [contenteditable='true']")) ||
                  (el.current = {
                    id: e.pointerId,
                    startX: e.clientX,
                    startY: e.clientY,
                    lastX: e.clientX,
                    timestamp: e.timeStamp,
                    dragging: !1,
                  }))
            }),
            (F[52] = z),
            (F[53] = A))
          : (A = F[53]),
        F[54] !== H
          ? ((M = (e) => {
              let t = el.current,
                a = er.current
              if (t?.id !== e.pointerId || null == a) return
              let i = t.startX - e.clientX,
                n = t.startY - e.clientY
              if (!t.dragging) {
                if (4 > Math.max(Math.abs(i), Math.abs(n))) return
                if (Math.abs(n) >= Math.abs(i)) {
                  el.current = null
                  return
                }
                ;((t.dragging = !0),
                  (es.current = !0),
                  H.finish(!0),
                  H.claim(a),
                  a.begin("pointer", t.timestamp, 1),
                  e.currentTarget.setPointerCapture(e.pointerId))
              }
              ;(a.update(t.lastX - e.clientX, e.timeStamp),
                (t.lastX = e.clientX),
                e.preventDefault(),
                e.stopPropagation())
            }),
            (F[54] = H),
            (F[55] = M))
          : (M = F[55]),
        F[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (e) => eT(e, !1)),
            (S = (e) => eT(e, !0)),
            (E = (e) => eT(e, !0)),
            (F[56] = I),
            (F[57] = S),
            (F[58] = E))
          : ((I = F[56]), (S = F[57]), (E = F[58])),
        F[59] !== q || F[60] !== K ? ((R = q(K)), (F[59] = q), (F[60] = K), (F[61] = R)) : (R = F[61]))
      let eN = !eu,
        eL = !eu
      F[62] !== ex || F[63] !== eC || F[64] !== eA
        ? ((_ = { width: eA, scale: eC, opacity: ex }), (F[62] = ex), (F[63] = eC), (F[64] = eA), (F[65] = _))
        : (_ = F[65])
      let eF = eu ? 0 : -1
      return (
        F[66] !== eM ? ((T = () => eM("dismissed")), (F[66] = eM), (F[67] = T)) : (T = F[67]),
        F[68] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = (0, i.jsx)("span", {
              className: "flex size-14 shrink-0 items-center justify-center",
              children: (0, i.jsx)(Y.P9U, {}),
            })),
            (F[68] = k))
          : (k = F[68]),
        F[69] !== D || F[70] !== eF || F[71] !== T
          ? ((O = (0, i.jsx)(en.yl, {
              className: "h-full rounded-full",
              variant: "activity-dismiss",
              children: (0, i.jsx)(eo.$, {
                ref: J,
                className: "h-full w-full justify-start",
                "aria-label": D,
                "data-avatar-overlay-hit-region": "activity-dismiss",
                color: "ghostActive",
                radius: "full",
                size: "inline",
                tabIndex: eF,
                onClick: T,
                children: k,
              }),
            })),
            (F[69] = D),
            (F[70] = eF),
            (F[71] = T),
            (F[72] = O))
          : (O = F[72]),
        F[73] !== _ || F[74] !== O
          ? ((P = (0, i.jsx)("div", {
              className: "relative size-14 shrink-0",
              children: (0, i.jsx)(eh.P.div, {
                className: "absolute inset-y-0 right-0 origin-right",
                style: _,
                children: O,
              }),
            })),
            (F[73] = _),
            (F[74] = O),
            (F[75] = P))
          : (P = F[75]),
        F[76] !== eN || F[77] !== eL || F[78] !== P
          ? ((N = (0, i.jsx)("div", {
              ref: ee,
              "aria-hidden": eN,
              className: "absolute inset-y-0 right-0 z-20 flex items-center ps-3",
              inert: eL,
              children: P,
            })),
            (F[76] = eN),
            (F[77] = eL),
            (F[78] = P),
            (F[79] = N))
          : (N = F[79]),
        F[80] !== b || F[81] !== eO || F[82] !== x || F[83] !== A || F[84] !== M || F[85] !== R || F[86] !== N
          ? ((L = (0, i.jsxs)("div", {
              ref: Z,
              className: b,
              "data-activity-pill-swipe": "true",
              "data-activity-pill-swipe-armed": eO,
              style: C,
              onClickCapture: x,
              onPointerDownCapture: A,
              onPointerMove: M,
              onPointerUp: I,
              onPointerCancel: S,
              onLostPointerCapture: E,
              children: [R, N],
            })),
            (F[80] = b),
            (F[81] = eO),
            (F[82] = x),
            (F[83] = A),
            (F[84] = M),
            (F[85] = R),
            (F[86] = N),
            (F[87] = L))
          : (L = F[87]),
        L
      )
    }
    function iq(e) {
      Math.abs(e.deltaX) > Math.abs(e.deltaY) && (e.preventDefault(), e.stopPropagation())
    }
    var ij = a("acLe"),
      iD = a("rB1t"),
      iU = "ActivityStackViewport-g4FOvE"
    let iH = (0, w.YK)({
      notificationList: {
        id: "avatarOverlay.notificationList",
        defaultMessage: "Activity notifications",
        description: "Accessible label for the list of floating avatar activity notifications",
      },
    })
    function iB(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        p,
        m,
        f,
        h,
        v,
        w,
        b,
        C,
        x,
        A,
        M,
        I,
        S,
        E,
        R,
        _,
        T,
        k,
        O,
        P,
        N,
        L,
        F,
        q,
        j,
        D,
        U,
        H,
        B = (0, n.c)(181),
        {
          activityCopies: V,
          activityStackPresentation: z,
          enteringNotificationIds: Y,
          retainedForegroundNotificationIds: W,
          coveredForegroundNotificationIds: X,
          isExpanded: G,
          isVisiblyExpanded: $,
          isTrayAboveMascot: K,
          notifications: Q,
          presentedGeometry: Z,
          renderNotificationRow: J,
          stackTransition: ee,
          onActivityStackScroll: et,
          onAnimationFrame: ea,
        } = e
      B[0] !== Y ? ((t = void 0 === Y ? [] : Y), (B[0] = Y), (B[1] = t)) : (t = B[1])
      let ei = t,
        en = void 0 === W ? [] : W,
        eo = void 0 === X ? [] : X,
        er = (0, y.A)()
      B[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = new Map()), (B[2] = a)) : (a = B[2])
      let el = (0, g.useRef)(a),
        [es, ec] = (0, g.useState)(iK)
      ;(es.size !== z.items.length ||
        z.items.some((e) => {
          let { itemId: t } = e
          return !es.has(t)
        })) &&
        ec(
          new Map(
            z.items.map((e) => {
              let { itemId: t, itemHeight: a, presentationRect: i } = e
              return [
                t,
                es.get(t) ?? { height: (0, ij.OQ)(a), top: (0, ij.OQ)(0), scaleY: (0, ij.OQ)(G ? 1 : i.height / a) },
              ]
            }),
          ),
        )
      let eu = (0, ey.d)(+!!G),
        ed = (0, ey.d)(z.contentHeight),
        ep = (0, ey.d)(z.viewportRect.height),
        em = (0, ey.d)("hidden"),
        ef = (0, ey.d)("var(--activity-stack-edge-mask)")
      B[3] === Symbol.for("react.memo_cache_sentinel") ? ((o = new Set()), (B[3] = o)) : (o = B[3])
      let eg = (0, g.useRef)(o),
        eb = G ? Math.max(0, z.viewportRect.top - (z.items[0]?.presentationRect.top ?? z.viewportRect.top)) : 0
      B[4] !== G || B[5] !== eb
        ? ((r = { isExpanded: G, scrollOffset: eb, translation: eb }), (B[4] = G), (B[5] = eb), (B[6] = r))
        : (r = B[6])
      let [eC, ex] = (0, g.useState)(r)
      ;((G !== eC.isExpanded || eb !== eC.scrollOffset) &&
        ex({
          isExpanded: G,
          scrollOffset: eb,
          translation: eC.translation + (G && eC.isExpanded ? eb - eC.scrollOffset : 0),
        }),
        B[7] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = new Map()), (l = new Map()), (B[7] = l), (B[8] = s))
          : ((l = B[7]), (s = B[8])),
        B[9] !== z.items
          ? ((c = { items: z.items, offsets: s, heightOrigins: l }), (B[9] = z.items), (B[10] = c))
          : (c = B[10]))
      let [eA, eM] = (0, g.useState)(c)
      if (
        !(
          z.items.length === eA.items.length &&
          z.items.every((e, t) => {
            let { itemId: a } = e
            return a === eA.items[t].itemId
          })
        ) ||
        z.items.some((e, t) => {
          let { itemHeight: a } = e
          return a !== eA.items[t]?.itemHeight
        })
      ) {
        let e = new Map(eA.items.map(i$)),
          t = new Map(),
          a = 0
        for (let { itemHeight: e, itemId: i } of eA.items)
          (t.set(i, (eA.offsets.get(i) ?? 0) + a), (a += (es.get(i)?.height.get() ?? e) - e))
        a = 0
        let i = new Map(),
          n = new Map()
        for (let { itemHeight: o, itemId: r } of z.items)
          (i.set(r, (t.get(r) ?? 0) - a),
            (a += (es.get(r)?.height.get() ?? o) - o),
            n.set(r, (eA.heightOrigins.get(r) ?? 0) + o - (e.get(r) ?? o)))
        eM({ items: z.items, offsets: i, heightOrigins: n })
      }
      let eI = Q.length > 1 && G && z.contentHeight > z.viewportRect.height,
        [eS, eE] = (0, g.useState)(eI)
      ;(eI && !eS && eE(!0),
        B[11] !== z.items || B[12] !== eI
          ? ((u = eI && z.items.some(iG)), (B[11] = z.items), (B[12] = eI), (B[13] = u))
          : (u = B[13]))
      let eR = u
      B[14] !== z.items || B[15] !== eI
        ? ((p = eI && z.items.some(iX)), (B[14] = z.items), (B[15] = eI), (B[16] = p))
        : (p = B[16])
      let e_ = p,
        eT = (0, ey.d)(eC.translation - eb)
      B[17] !== eC.translation ? ((m = (e) => e - eC.translation), (B[17] = eC.translation), (B[18] = m)) : (m = B[18])
      let ek = (0, ew.G)(eT, m),
        eO = (0, ew.G)(ek, iW)
      B[19] !== ep || B[20] !== ed || B[21] !== ek
        ? ((f = () => Math.max(0, Math.min(1, 1 - (ed.get() + ek.get() - ep.get()) / 8))),
          (B[19] = ep),
          (B[20] = ed),
          (B[21] = ek),
          (B[22] = f))
        : (f = B[22])
      let eP = (0, ew.G)(f)
      B[23] !== z.items || B[24] !== z.viewportRect.height || B[25] !== e_ || B[26] !== $ || B[27] !== K || B[28] !== Q
        ? ((h =
            $ && K && e_
              ? Math.max(
                  0,
                  Math.ceil(
                    Q.slice(0, 4).reduce((e, t) => {
                      let a = z.items.find((e) => {
                        let { itemId: a } = e
                        return a === t.id
                      })
                      return Math.max(e, null == a ? 0 : a.presentationRect.top + a.presentationRect.height + d.Xlf)
                    }, 0) - z.viewportRect.height,
                  ),
                )
              : 0),
          (B[23] = z.items),
          (B[24] = z.viewportRect.height),
          (B[25] = e_),
          (B[26] = $),
          (B[27] = K),
          (B[28] = Q),
          (B[29] = h))
        : (h = B[29])
      let eN = h,
        eL = $ && e_,
        eF = $ && eR
      B[30] !== eN || B[31] !== $ || B[32] !== eL || B[33] !== eF
        ? ((v = {
            collapseBottomClipHeadroom: eN,
            hasBottomOverflow: eL,
            hasTopOverflow: eF,
            isExpanded: $,
            retainsExpandedHeight: $,
          }),
          (B[30] = eN),
          (B[31] = $),
          (B[32] = eL),
          (B[33] = eF),
          (B[34] = v))
        : (v = B[34])
      let [eq, ej] = (0, g.useState)(v)
      ;(($ !== eq.isExpanded ||
        ($ && (e_ !== eq.hasBottomOverflow || eN !== eq.collapseBottomClipHeadroom || eR !== eq.hasTopOverflow))) &&
        ej({
          collapseBottomClipHeadroom: $ ? eN : eq.collapseBottomClipHeadroom,
          hasBottomOverflow: $ ? e_ : eq.hasBottomOverflow,
          hasTopOverflow: $ ? eR : eq.hasTopOverflow,
          isExpanded: $,
          retainsExpandedHeight: $ || eq.retainsExpandedHeight,
        }),
        B[35] !== Q ? ((w = new Map(Q.map(iY))), (B[35] = Q), (B[36] = w)) : (w = B[36]))
      let eD = w,
        eU = z.items[0]?.presentationRect.height ?? 0
      B[37] !== z || B[38] !== G || B[39] !== Q.length
        ? ((b = a$({ activityStackPresentation: z, isExpanded: G, notificationCount: Q.length })),
          (B[37] = z),
          (B[38] = G),
          (B[39] = Q.length),
          (B[40] = b))
        : (b = B[40])
      let { backingLayoutHeight: eH, visibleLayoutHeight: eB } = b,
        eV = K ? eB - eH : 0,
        ez = (0, ey.d)(eH),
        eY = !K
      B[41] !== z.viewportRect || B[42] !== Q.length || B[43] !== eU || B[44] !== eY
        ? ((C = (0, d.vM5)({
            expandsTowardBottom: eY,
            frontRect: { ...z.viewportRect, height: eU },
            nearEdgeRect: z.viewportRect,
            notificationCount: Q.length,
          })),
          (B[41] = z.viewportRect),
          (B[42] = Q.length),
          (B[43] = eU),
          (B[44] = eY),
          (B[45] = C))
        : (C = B[45])
      let eW = C,
        eG = !G && eq.retainsExpandedHeight && (eq.hasTopOverflow || eq.hasBottomOverflow),
        e$ = eI || eS,
        eK = eG && K ? eq.collapseBottomClipHeadroom : 0,
        eQ = K ? d.Xlf : 0,
        eZ = e$ ? d.VuE : 0,
        eJ = Math.max(eQ, eZ),
        e0 = Math.max(eK, eZ)
      B[46] !== z.contentHeight ||
      B[47] !== z.items ||
      B[48] !== z.viewportRect.height ||
      B[49] !== z.viewportRect.top ||
      B[50] !== e0 ||
      B[51] !== eI ||
      B[52] !== eW ||
      B[53] !== eA ||
      B[54] !== G ||
      B[55] !== eD ||
      B[56] !== Q.length ||
      B[57] !== ep ||
      B[58] !== ed ||
      B[59] !== eS ||
      B[60] !== eC.translation ||
      B[61] !== eJ
        ? ((x = () => {
            if (!(
              !eS ||
              eI ||
              (G && ed.get() > ep.get() + 0.001) ||
              [...eg.current].some((e) => {
                let t = eD.get(e)
                return null != t && (G || t < 4)
              })
            )) {
              for (let { itemId: e, presentationRect: t } of z.items) {
                let a = eD.get(e),
                  i = el.current.get(e)
                if (null == a || (!G && a >= 4)) continue
                let n = G ? t : (0, d.dw8)(eW, d.TeN[Math.min(a, d.TeN.length - 1)])
                if (
                  null == i ||
                  Math.abs(i.y - (n.top - z.viewportRect.top + eC.translation - (G ? (eA.offsets.get(e) ?? 0) : 0))) >
                    0.001 ||
                  Math.abs(i.height - (n.height - (G ? (eA.heightOrigins.get(e) ?? 0) : 0))) > 0.001
                )
                  return
              }
              ;(tZ.v.debug("Avatar overlay activity stack released overflow clip", {
                safe: {
                  isExpanded: G,
                  notificationCount: Q.length,
                  contentHeight: z.contentHeight,
                  topClipHeadroomPx: eJ,
                  bottomClipHeadroomPx: e0,
                  maximumHeightReflowOffsetPx: Math.max(0, ...Array.from(eA.offsets.values(), Math.abs)),
                  viewportHeight: z.viewportRect.height,
                },
              }),
                eE(!1))
            }
          }),
          (B[46] = z.contentHeight),
          (B[47] = z.items),
          (B[48] = z.viewportRect.height),
          (B[49] = z.viewportRect.top),
          (B[50] = e0),
          (B[51] = eI),
          (B[52] = eW),
          (B[53] = eA),
          (B[54] = G),
          (B[55] = eD),
          (B[56] = Q.length),
          (B[57] = ep),
          (B[58] = ed),
          (B[59] = eS),
          (B[60] = eC.translation),
          (B[61] = eJ),
          (B[62] = x))
        : (x = B[62])
      let e1 = (0, eX.K)(x)
      B[63] !== z.items ||
      B[64] !== z.maxViewportHeight ||
      B[65] !== z.viewportRect ||
      B[66] !== eH ||
      B[67] !== e0 ||
      B[68] !== eI ||
      B[69] !== ei ||
      B[70] !== eu ||
      B[71] !== eA ||
      B[72] !== G ||
      B[73] !== K ||
      B[74] !== eD ||
      B[75] !== Q[0]?.id ||
      B[76] !== Q.length ||
      B[77] !== ep ||
      B[78] !== ed ||
      B[79] !== eT ||
      B[80] !== Z ||
      B[81] !== ef ||
      B[82] !== em ||
      B[83] !== ez ||
      B[84] !== e1 ||
      B[85] !== eS ||
      B[86] !== es ||
      B[87] !== eb ||
      B[88] !== eC.translation ||
      B[89] !== eJ ||
      B[90] !== eV ||
      B[91] !== eB
        ? ((A = () => {
            let e = [],
              t = 0
            for (let { itemHeight: a, itemId: i, zIndex: n } of z.items) {
              let o = eD.get(i),
                r = el.current.get(i),
                l = eu.get() * ((eA.offsets.get(i) ?? 0) + t),
                s = es.get(i),
                c = s?.height.get() ?? a
              if (
                ((t += c - a),
                null != r &&
                  ((r.reflowOffsetY = l),
                  (r.scaleY = (r.height + eu.get() * ((eA.heightOrigins.get(i) ?? 0) + c - a)) / c),
                  s?.top.set(l),
                  s?.scaleY.set(r.scaleY)),
                null == o || null == r || ei.includes(i) || r.opacity <= 0.01 || (!G && o >= 4))
              )
                continue
              let u = r.materialWidth ?? z.viewportRect.width,
                p = r.materialCornerRadius ?? 0,
                m = Math.min(Math.abs(r.scaleX), Math.abs(r.scaleY)),
                f = r.materialElement?.hasAttribute("data-owl-native-source-underlay") ?? !1,
                h = Math.min(d.YMX / 2, (c * Math.abs(r.scaleY)) / 2)
              if (f && m > 0) {
                let e = `${h / m}px`
                r.materialElement?.style.getPropertyValue("--avatar-overlay-native-corner-radius") !== e &&
                  r.materialElement?.style.setProperty("--avatar-overlay-native-corner-radius", e)
              } else f || r.materialElement?.style.removeProperty("--avatar-overlay-native-corner-radius")
              e.push({
                cornerRadius: f ? h : Math.min(p, u / 2, c / 2) * m,
                hasNativeMaterial: f,
                itemId: i,
                opacity: r.opacity * (r.materialOpacity ?? 1),
                rect: {
                  left: r.x,
                  top: r.y + r.reflowOffsetY - eC.translation,
                  width: u * r.scaleX,
                  height: c * r.scaleY,
                },
                scaleX: r.scaleX,
                scaleY: r.scaleY,
                zIndex: n,
              })
            }
            let a = el.current.get(Q[0]?.id ?? "")
            null != a && eT.set(a.y + a.reflowOffsetY)
            let i = (0, d.jNq)({
                expanded: G,
                items: z.items.map((e) => {
                  let { itemId: t, itemHeight: a } = e
                  return { id: t, height: es.get(t)?.height.get() ?? a }
                }),
                scrollOffset: eb,
                viewportRect: { ...z.viewportRect, height: z.maxViewportHeight },
              }),
              n = a$({ activityStackPresentation: i, isExpanded: G, notificationCount: Q.length })
            ;(ed.set(i.contentHeight), ep.set(n.backingLayoutHeight))
            let o = (G && i.contentHeight > n.backingLayoutHeight + 0.001) || (eS && (!G || !eI))
            ;(em.set(o ? "hidden" : "visible"),
              ef.set(o ? "var(--activity-stack-edge-mask)" : "none"),
              ez.set(n.backingLayoutHeight + eJ + e0))
            let r = 0
            for (let { rect: t } of e) {
              let e = Math.max(0, t.top),
                a = Math.min(eH, t.top + t.height)
              a <= e || (r = Math.max(r, K ? -eV - e : eV + a - eB))
            }
            ;(Z.set({ ...n, overhang: r, rects: e }), to.Gt.postRender(e1))
          }),
          (B[63] = z.items),
          (B[64] = z.maxViewportHeight),
          (B[65] = z.viewportRect),
          (B[66] = eH),
          (B[67] = e0),
          (B[68] = eI),
          (B[69] = ei),
          (B[70] = eu),
          (B[71] = eA),
          (B[72] = G),
          (B[73] = K),
          (B[74] = eD),
          (B[75] = Q[0]?.id),
          (B[76] = Q.length),
          (B[77] = ep),
          (B[78] = ed),
          (B[79] = eT),
          (B[80] = Z),
          (B[81] = ef),
          (B[82] = em),
          (B[83] = ez),
          (B[84] = e1),
          (B[85] = eS),
          (B[86] = es),
          (B[87] = eb),
          (B[88] = eC.translation),
          (B[89] = eJ),
          (B[90] = eV),
          (B[91] = eB),
          (B[92] = A))
        : (A = B[92])
      let e2 = (0, eX.K)(A),
        e3 = (e, t, a) => ({
          ...a,
          onUpdate: (a) => {
            let i = el.current.get(e)
            null != i && ((i[t] = a), (to.uv.isProcessing ? to.Gt : iD.k).preRender(e2, !1, !0))
          },
        })
      B[93] !== z.items ||
      B[94] !== z.viewportRect.left ||
      B[95] !== z.viewportRect.top ||
      B[96] !== z.viewportRect.width ||
      B[97] !== eW ||
      B[98] !== eA ||
      B[99] !== G ||
      B[100] !== $ ||
      B[101] !== eD ||
      B[102] !== Q[0] ||
      B[103] !== eT ||
      B[104] !== e2 ||
      B[105] !== e1 ||
      B[106] !== es ||
      B[107] !== eC.translation
        ? ((M = (e) => {
            if (null == e) return
            let t = new Set(z.items.map(iz))
            for (let e of el.current.keys()) t.has(e) || (el.current.delete(e), eg.current.delete(e))
            for (let { itemHeight: e, itemId: t, presentationRect: a } of z.items) {
              let i = eD.get(t)
              if (null == i) continue
              let n = e > 0 ? e : d.YMX,
                o = G ? (eA.offsets.get(t) ?? 0) : 0
              if (null != el.current.get(t)) continue
              let r = G ? a : (0, d.dw8)(eW, d.TeN[Math.min(i, d.TeN.length - 1)])
              el.current.set(t, {
                height: r.height - (G ? (eA.heightOrigins.get(t) ?? 0) : 0),
                opacity: 3 !== i || $ ? 1 : 0,
                reflowOffsetY: o,
                scaleX: G ? 1 : r.width / z.viewportRect.width,
                scaleY: G ? 1 : r.height / n,
                x: r.left - z.viewportRect.left,
                y: r.top - z.viewportRect.top + eC.translation - o,
              })
            }
            let a = null == Q[0] ? void 0 : el.current.get(Q[0].id)
            for (let t of (null != a && eT.set(a.y + a.reflowOffsetY),
            e.querySelectorAll('[data-avatar-overlay-material-variant="activity"]'))) {
              let e = t.dataset.avatarOverlayNativeSurfaceId,
                a = null == e ? void 0 : el.current.get(e.slice(9))
              if (null == a) continue
              let i = getComputedStyle(t),
                n = Number.parseFloat(i.width),
                o = Number.parseFloat(getComputedStyle(t.parentElement ?? t).opacity)
              ;((a.materialElement = t),
                (a.materialCornerRadius = Number.parseFloat(i.borderTopLeftRadius) || 0),
                n > 0 && (a.materialWidth = n),
                Number.isFinite(o) && (a.materialOpacity = o))
            }
            e2()
            let i = Array.from(es.values(), (e) => {
                let { height: t } = e
                return t.on("change", () => to.Gt.preRender(e2, !1, !0))
              }),
              n = new MutationObserver((e) => {
                for (let { target: t } of e)
                  if (t instanceof HTMLElement) {
                    for (let e of el.current.values())
                      if (e.materialElement === t) {
                        e.materialCornerRadius = Number.parseFloat(getComputedStyle(t).borderTopLeftRadius) || 0
                        break
                      }
                  }
                to.Gt.preRender(e2, !1, !0)
              })
            return (
              n.observe(e, { attributes: !0, attributeFilter: ["data-owl-native-source-underlay"], subtree: !0 }),
              () => {
                for (let e of i) e()
                ;(n.disconnect(), (0, to.WG)(e2), (0, iD.c)(e2), (0, to.WG)(e1))
              }
            )
          }),
          (B[93] = z.items),
          (B[94] = z.viewportRect.left),
          (B[95] = z.viewportRect.top),
          (B[96] = z.viewportRect.width),
          (B[97] = eW),
          (B[98] = eA),
          (B[99] = G),
          (B[100] = $),
          (B[101] = eD),
          (B[102] = Q[0]),
          (B[103] = eT),
          (B[104] = e2),
          (B[105] = e1),
          (B[106] = es),
          (B[107] = eC.translation),
          (B[108] = M))
        : (M = B[108])
      let e4 = M
      if (e0 > 0) {
        let e,
          t = `${e0}px`,
          a = -e0
        ;(B[109] !== t || B[110] !== a
          ? ((e = { "--activity-stack-bottom-clip-headroom": t, bottom: a }), (B[109] = t), (B[110] = a), (B[111] = e))
          : (e = B[111]),
          (I = e))
      } else if (!e$) {
        let e
        ;(B[112] !== eH ? ((e = { height: eH }), (B[112] = eH), (B[113] = e)) : (e = B[113]), (I = e))
      }
      let e5 = `${eJ - eQ}px`,
        e6 = eV - eJ
      ;(B[114] !== I ||
      B[115] !== eP ||
      B[116] !== eu ||
      B[117] !== ef ||
      B[118] !== em ||
      B[119] !== ez ||
      B[120] !== e5 ||
      B[121] !== e6 ||
      B[122] !== eO
        ? ((S = {
            ...I,
            "--activity-stack-top-clip-headroom": e5,
            "--activity-stack-top-edge-alpha": eO,
            "--activity-stack-bottom-edge-alpha": eP,
            "--activity-stack-expansion-progress": eu,
            "--activity-stack-presented-overflow": em,
            "--activity-stack-presented-mask": ef,
            height: ez,
            top: e6,
          }),
          (B[114] = I),
          (B[115] = eP),
          (B[116] = eu),
          (B[117] = ef),
          (B[118] = em),
          (B[119] = ez),
          (B[120] = e5),
          (B[121] = e6),
          (B[122] = eO),
          (B[123] = S))
        : (S = B[123]),
        (I = S),
        B[124] !== V?.[0]?.notificationListAriaLabel || B[125] !== er
          ? ((E = V?.[0]?.notificationListAriaLabel ?? er.formatMessage(iH.notificationList)),
            (B[124] = V?.[0]?.notificationListAriaLabel),
            (B[125] = er),
            (B[126] = E))
          : (E = B[126]))
      let e7 = eq.retainsExpandedHeight ? "true" : void 0
      ;(B[127] !== z.viewportRect.width || B[128] !== eB
        ? ((R = { height: eB, width: z.viewportRect.width }),
          (B[127] = z.viewportRect.width),
          (B[128] = eB),
          (B[129] = R))
        : (R = B[129]),
        B[130] !== z.viewportRect.height || B[131] !== et
          ? ((_ =
              null != et
                ? (e) => {
                    if (e.ctrlKey || Math.abs(e.deltaX) >= Math.abs(e.deltaY)) return
                    let t = e.target instanceof HTMLElement ? e.target : null
                    for (; null != t && t !== e.currentTarget;) {
                      if (
                        t.isContentEditable ||
                        t.matches("input, textarea, select") ||
                        (t.scrollHeight > t.clientHeight && /^(auto|scroll)$/.test(getComputedStyle(t).overflowY))
                      )
                        return
                      t = t.parentElement
                    }
                    e.preventDefault()
                    let a = e.deltaY
                    ;(1 === e.deltaMode ? (a *= 16) : 2 === e.deltaMode && (a *= z.viewportRect.height), et(a))
                  }
                : void 0),
            (B[130] = z.viewportRect.height),
            (B[131] = et),
            (B[132] = _))
          : (_ = B[132]))
      let e8 = eh.P,
        e9 = +!!G,
        te = +!G
      B[133] !== e9 || B[134] !== te
        ? ((T = { "--activity-stack-expansion-progress": e9, "--activity-stack-edge-mask-alpha": te }),
          (B[133] = e9),
          (B[134] = te),
          (B[135] = T))
        : (T = B[135])
      let tt = e_ || void 0,
        ta = e$ || void 0,
        ti = eR || void 0,
        tn = I
      ;(B[136] !== eG
        ? ((k = eG ? { duration: 0.18, ease: "easeOut" } : { duration: 0 }), (B[136] = eG), (B[137] = k))
        : (k = B[137]),
        B[138] !== ee || B[139] !== k
          ? ((O = { "--activity-stack-edge-mask-alpha": k, "--activity-stack-expansion-progress": ee }),
            (B[138] = ee),
            (B[139] = k),
            (B[140] = O))
          : (O = B[140]),
        B[141] !== G
          ? ((P = () => {
              G || ej(iV)
            }),
            (B[141] = G),
            (B[142] = P))
          : (P = B[142]),
        B[143] !== ea || B[144] !== e2
          ? ((N = () => {
              ;(to.Gt.preRender(e2, !1, !0), ea?.())
            }),
            (B[143] = ea),
            (B[144] = e2),
            (B[145] = N))
          : (N = B[145]))
      let tr = eh.P,
        tl = e$ ? "inset-x-6" : "inset-x-0"
      B[146] !== tl ? ((L = (0, ev.A)("absolute", tl, "top-0")), (B[146] = tl), (B[147] = L)) : (L = B[147])
      let ts = G ? "notification-stack-viewport" : void 0
      B[148] !== ep || B[149] !== eJ
        ? ((F = { height: ep, top: eJ }), (B[148] = ep), (B[149] = eJ), (B[150] = F))
        : (F = B[150])
      let tc = `translateY(${-eC.translation}px)`
      B[151] !== tc ? ((q = { transform: tc }), (B[151] = tc), (B[152] = q)) : (q = B[152])
      let tu = z.items.map((e) => {
        let { itemHeight: t, itemId: a, presentationRect: n, zIndex: o } = e,
          r = eD.get(a),
          l = es.get(a)
        if (null == r || null == l) return null
        let s = Q[r],
          c = ei.includes(a),
          u = r < 4,
          p = 3 === r,
          m = (0, d.dw8)(eW, d.TeN[Math.min(r, d.TeN.length - 1)]),
          f = s === Q[0],
          h = !G && !f,
          g = G ? n : m,
          v = p && !$ ? { duration: 0.18, ease: "easeOut" } : { duration: 0 }
        return (0, i.jsx)(
          eh.P.div,
          {
            animate: {
              opacity: p && !$ ? 0 : 1,
              "--activity-stack-structural-height": g.height - (G ? (eA.heightOrigins.get(a) ?? 0) : 0),
              scaleX: G ? 1 : g.width / z.viewportRect.width,
              x: g.left - z.viewportRect.left,
              y: g.top - z.viewportRect.top + eC.translation - (G ? (eA.offsets.get(a) ?? 0) : 0),
            },
            "aria-hidden": h ? "true" : void 0,
            className: (0, ev.A)(
              "absolute origin-top-left",
              (h || c) && "pointer-events-none",
              !G && !eq.retainsExpandedHeight && r >= 3 && "opacity-0",
              !G && r >= 4 && "hidden",
            ),
            "data-avatar-overlay-measure": u ? "notification-tray-row" : void 0,
            "data-avatar-overlay-activity-stack-item": a,
            "data-avatar-overlay-hit-region": G ? "notification-tray-row" : void 0,
            inert: h || void 0,
            initial: !1,
            style: { left: 0, top: l.top, scaleY: l.scaleY, width: z.viewportRect.width, zIndex: o },
            transition: {
              ...ee,
              opacity: e3(a, "opacity", v),
              scaleX: e3(a, "scaleX", ee),
              "--activity-stack-structural-height": e3(a, "height", ee),
              x: e3(a, "x", ee),
              y: e3(a, "y", ee),
            },
            onAnimationStart: () => {
              eg.current.add(a)
            },
            onAnimationComplete: () => {
              ;(eg.current.delete(a), e1())
            },
            onUpdate: () => ea?.(),
            children: (0, i.jsx)("div", {
              className: c ? "opacity-0" : void 0,
              children: (0, i.jsx)(iQ, {
                renderNotificationRow: J,
                presentation: {
                  animatesCssEntry: u && !c,
                  canExpandActivityStack: !G && f && Q.length > 1,
                  copy: V?.[r],
                  cssHeight: t,
                  presentedHeight: l.height,
                  cssWidth: u ? z.viewportRect.width : void 0,
                  isPrimarySurface: f,
                  isStackedBehindPrimary: h,
                  retainsForeground: en.includes(a),
                  isForegroundCoveredByFlight: eo.includes(a),
                  nativeSurfaceId: "activity-" + a,
                  notification: s,
                  onMaterialUpdate: (e) => {
                    let t
                    null != (t = el.current.get(a)) &&
                      ("number" == typeof e.width && (t.materialWidth = e.width),
                      "number" == typeof e.opacity && (t.materialOpacity = e.opacity),
                      "number" == typeof e.borderRadius && (t.materialCornerRadius = e.borderRadius),
                      to.Gt.preRender(e2, !1, !0))
                  },
                  publishesLayoutMeasurement: !u,
                },
              }),
            }),
          },
          a,
        )
      })
      return (
        B[153] !== q || B[154] !== tu
          ? ((j = (0, i.jsx)("div", { className: "relative", style: q, children: tu })),
            (B[153] = q),
            (B[154] = tu),
            (B[155] = j))
          : (j = B[155]),
        B[156] !== tr.div || B[157] !== L || B[158] !== ts || B[159] !== F || B[160] !== j
          ? ((D = (0, i.jsx)(tr.div, {
              className: L,
              "data-avatar-overlay-backing-canvas": "true",
              "data-avatar-overlay-hit-region": ts,
              "data-avatar-overlay-size": "notification-stack-backing-layout",
              style: F,
              children: j,
            })),
            (B[156] = tr.div),
            (B[157] = L),
            (B[158] = ts),
            (B[159] = F),
            (B[160] = j),
            (B[161] = D))
          : (D = B[161]),
        B[162] !== I ||
        B[163] !== e8.div ||
        B[164] !== T ||
        B[165] !== iU ||
        B[166] !== tt ||
        B[167] !== ta ||
        B[168] !== ti ||
        B[169] !== O ||
        B[170] !== P ||
        B[171] !== N ||
        B[172] !== D
          ? ((U = (0, i.jsx)(e8.div, {
              animate: T,
              className: iU,
              "data-avatar-overlay-stack-bottom-overflow": tt,
              "data-avatar-overlay-stack-overflow-mask": ta,
              "data-avatar-overlay-stack-top-overflow": ti,
              initial: !1,
              style: tn,
              transition: O,
              onAnimationComplete: P,
              onUpdate: N,
              children: D,
            })),
            (B[162] = I),
            (B[163] = e8.div),
            (B[164] = T),
            (B[165] = iU),
            (B[166] = tt),
            (B[167] = ta),
            (B[168] = ti),
            (B[169] = O),
            (B[170] = P),
            (B[171] = N),
            (B[172] = D),
            (B[173] = U))
          : (U = B[173]),
        B[174] !== e4 || B[175] !== E || B[176] !== e7 || B[177] !== R || B[178] !== _ || B[179] !== U
          ? ((H = (0, i.jsx)("div", {
              ref: e4,
              "aria-label": E,
              className: "relative max-w-full shrink-0",
              "data-avatar-overlay-retains-stack-layout-height": e7,
              "data-avatar-overlay-size": "notification-stack-visible-layout",
              role: "list",
              style: R,
              onWheel: _,
              children: U,
            })),
            (B[174] = e4),
            (B[175] = E),
            (B[176] = e7),
            (B[177] = R),
            (B[178] = _),
            (B[179] = U),
            (B[180] = H))
          : (H = B[180]),
        H
      )
    }
    function iV(e) {
      return e.retainsExpandedHeight ? { ...e, retainsExpandedHeight: !1 } : e
    }
    function iz(e) {
      let { itemId: t } = e
      return t
    }
    function iY(e, t) {
      return [e.id, t]
    }
    function iW(e) {
      return Math.max(0, Math.min(1, 1 + e / 8))
    }
    function iX(e) {
      let { edgeZone: t } = e
      return "bottom" === t
    }
    function iG(e) {
      let { edgeZone: t } = e
      return "top" === t
    }
    function i$(e) {
      let { itemId: t, itemHeight: a } = e
      return [t, a]
    }
    function iK() {
      return new Map()
    }
    function iQ({ presentation: e, renderNotificationRow: t }) {
      return t(e)
    }
    var iZ = a("Fpzh"),
      iJ = a("BkQe"),
      i0 = a("UOvO"),
      i1 = a("ASxG"),
      i2 = a("vdpW")
    let i3 = i1.object({ type: i1.literal("text"), text: i1.literal(i0.Vr) }),
      i4 = (0, u.i1)(el.u, (e, { get: t }) => {
        let a = t(i2.mz, e)
        if (
          (a?.type !== "dynamicToolCall" && a?.type !== "mcpToolCall") ||
          a.tool !== i0.GY ||
          "completed" !== a.status
        )
          return null
        if (
          "dynamicToolCall" === a.type
            ? (null == a.namespace || "codex_app" === a.namespace) && !0 === a.success
            : "codex_app" === a.server && a.result?.content.some((e) => i3.safeParse(e).success)
        ) {
          let e = i0.T2.safeParse(a.arguments)
          if (e.success) return e.data.summary
        }
        return null
      }),
      i5 = (0, u.i1)(el.u, (e, { get: t }) => {
        let a = null == e ? null : (t(i2.M, e)?.at(-1) ?? null)
        if (null == a || "inProgress" !== t(i2.OM, a)) return null
        let i = t(i2.hm, a)
        if (null == i) return null
        for (let e = i.length - 1; e >= 0; e--) {
          let n = t(i4, { ...a, itemId: i[e] })
          if (null != n) return n
        }
        return null
      })
    var i6 = a("i6Gy"),
      i7 = a("zExH"),
      i8 = a("yFHQ")
    let i9 = (0, eT.a)({
        name: "clock-light-28",
        canvas: {
          width: 28,
          height: 28,
          viewBox: "0 0 28 28",
          frame: { x: 0, y: 0, width: 28, height: 28 },
          inkBounds: { x: 2.669922, y: 2.669922, width: 22.660156, height: 22.660156 },
          visualBounds: { x: 2.669922, y: 2.669922, width: 22.660156, height: 22.660156 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "circular",
          bounds: { x: 2.669922, y: 2.669922, width: 22.660156, height: 22.660156 },
          center: { x: 14, y: 14 },
          insets: { top: 2.669922, right: 2.669922, bottom: 2.669922, left: 2.669922 },
          anchors: { frame: { x: 14, y: 14 }, ink: { x: 14, y: 14 }, foreground: { x: 14, y: 14 } },
        },
        capabilities: ["icon"],
        body: '<path d="M14 7.33691C14.4582 7.33709 14.8301 7.7087 14.8301 8.16699V13.793C14.8299 14.1454 14.6896 14.4841 14.4404 14.7334L11.6699 17.5039C11.3458 17.8276 10.8201 17.8279 10.4961 17.5039C10.1721 17.1799 10.1724 16.6543 10.4961 16.3301L13.1699 13.6562V8.16699C13.1699 7.70874 13.5418 7.33714 14 7.33691Z" fill="currentColor"/> <path d="M14 2.66992C20.2574 2.66992 25.3301 7.74261 25.3301 14C25.3301 20.2574 20.2574 25.3301 14 25.3301C7.74261 25.3301 2.66992 20.2574 2.66992 14C2.66992 7.74261 7.74261 2.66992 14 2.66992ZM14 4.33008C8.65941 4.33008 4.33008 8.65941 4.33008 14C4.33008 19.3406 8.65941 23.6699 14 23.6699C19.3406 23.6699 23.6699 19.3406 23.6699 14C23.6699 8.65941 19.3406 4.33008 14 4.33008Z" fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"/>',
      }),
      ne = (0, eT.a)({
        name: "exclamation-mark-circle-light-28",
        canvas: {
          width: 28,
          height: 28,
          viewBox: "0 0 28 28",
          frame: { x: 0, y: 0, width: 28, height: 28 },
          inkBounds: { x: 2.169922, y: 2.169922, width: 23.660156, height: 23.660156 },
          visualBounds: { x: 2.169922, y: 2.169922, width: 23.660156, height: 23.660156 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "circular",
          bounds: { x: 2.169922, y: 2.169922, width: 23.660156, height: 23.660156 },
          center: { x: 14, y: 14 },
          insets: { top: 2.169922, right: 2.169922, bottom: 2.169922, left: 2.169922 },
          anchors: { frame: { x: 14, y: 14 }, ink: { x: 14, y: 14 }, foreground: { x: 14, y: 14 } },
        },
        capabilities: ["icon"],
        body: '<path d="M14.1377 16.377C14.8139 16.4458 15.3418 17.0175 15.3418 17.7119C15.3416 18.4524 14.7414 19.0523 14.001 19.0527C13.3064 19.0527 12.7347 18.5251 12.666 17.8486L12.6592 17.7119L12.666 17.5742C12.7348 16.8979 13.3065 16.3701 14.001 16.3701L14.1377 16.377Z" fill="currentColor"/> <path d="M14 8.94727C14.4583 8.9474 14.8301 9.31903 14.8301 9.77734V13.5693C14.8299 14.0275 14.4582 14.3993 14 14.3994C13.5417 14.3994 13.1701 14.0276 13.1699 13.5693V9.77734C13.1699 9.31895 13.5416 8.94727 14 8.94727Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2.16992C20.5335 2.16992 25.8301 7.46647 25.8301 14C25.8301 20.5335 20.5335 25.8301 14 25.8301C7.46647 25.8301 2.16992 20.5335 2.16992 14C2.16992 7.46647 7.46647 2.16992 14 2.16992ZM14 3.83008C8.38326 3.83008 3.83008 8.38326 3.83008 14C3.83008 19.6167 8.38326 24.1699 14 24.1699C19.6167 24.1699 24.1699 19.6167 24.1699 14C24.1699 8.38326 19.6167 3.83008 14 3.83008Z" fill="currentColor"/>',
      }),
      nt = (0, eT.a)({
        name: "exclamationmark-circle-fill-light-16",
        canvas: { width: 16, height: 16, viewBox: "0 0 16 16" },
        paint: { kind: "monochrome" },
        optical: { shape: "circular" },
        capabilities: ["icon"],
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.47461C11.6037 1.47461 14.5254 4.39634 14.5254 8C14.5254 11.6037 11.6037 14.5254 8 14.5254C4.39634 14.5254 1.47461 11.6037 1.47461 8C1.47461 4.39634 4.39634 1.47461 8 1.47461ZM8 9.30371C7.57689 9.30383 7.22923 9.62595 7.1875 10.0381L7.18262 10.1211L7.1875 10.2051C7.22945 10.617 7.57705 10.9384 8 10.9385C8.45123 10.9383 8.81738 10.5724 8.81738 10.1211C8.81726 9.69822 8.49579 9.35064 8.08398 9.30859L8 9.30371ZM8 5.06152C7.71005 5.06152 7.47461 5.29696 7.47461 5.58691V7.75391C7.47478 8.04371 7.71016 8.27832 8 8.27832C8.28984 8.27832 8.52522 8.04371 8.52539 7.75391V5.58691C8.52539 5.29696 8.28995 5.06152 8 5.06152Z" fill="currentColor"/>',
      }),
      na = (0, eT.a)({
        name: "questionmark-circle-light-28",
        canvas: {
          width: 28,
          height: 28,
          viewBox: "0 0 28 28",
          frame: { x: 0, y: 0, width: 28, height: 28 },
          inkBounds: { x: 2.669922, y: 2.669922, width: 22.660156, height: 22.660156 },
          visualBounds: { x: 2.669922, y: 2.669922, width: 22.660156, height: 22.660156 },
        },
        paint: { kind: "monochrome" },
        optical: {
          shape: "circular",
          bounds: { x: 2.669922, y: 2.669922, width: 22.660156, height: 22.660156 },
          center: { x: 14, y: 14 },
          insets: { top: 2.669922, right: 2.669922, bottom: 2.669922, left: 2.669922 },
          anchors: { frame: { x: 14, y: 14 }, ink: { x: 14, y: 14 }, foreground: { x: 14, y: 14 } },
        },
        capabilities: ["icon"],
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0137 17.9922C14.6079 18.0525 15.0713 18.5549 15.0713 19.165C15.0711 19.8155 14.544 20.3426 13.8936 20.3428C13.2835 20.3428 12.781 19.8793 12.7207 19.2852L12.7148 19.165L12.7207 19.0439C12.7812 18.4499 13.2836 17.9863 13.8936 17.9863L14.0137 17.9922Z" fill="currentColor"/> <path d="M14.0078 7.65918C14.8602 7.66207 15.7732 7.91501 16.4932 8.48047C17.241 9.06799 17.7412 9.96494 17.7412 11.124C17.7412 12.1438 17.3668 12.8939 16.8174 13.5068C16.316 14.066 15.6241 14.5485 15.0449 14.9961C14.8921 15.1142 14.7989 15.1952 14.7393 15.2705C14.7135 15.3031 14.7035 15.3237 14.7002 15.332C14.698 15.3377 14.6973 15.3402 14.6973 15.3447V15.7578C14.6973 16.2162 14.3256 16.5879 13.8672 16.5879C13.4091 16.5876 13.0371 16.216 13.0371 15.7578V15.3447C13.0371 14.4189 13.7712 13.8821 14.0293 13.6826C14.7178 13.1505 15.2135 12.8095 15.582 12.3984C15.9024 12.0409 16.081 11.6731 16.0811 11.124C16.0811 10.489 15.8266 10.0681 15.4678 9.78613C15.0854 9.48579 14.5459 9.31838 13.9932 9.31836H13.9854L13.9775 9.31738C13.0428 9.29987 12.1792 9.74958 11.8564 10.5439C11.6838 10.9683 11.1999 11.1725 10.7754 11C10.3511 10.8273 10.147 10.3434 10.3193 9.91895C10.9704 8.31641 12.5894 7.63802 13.9932 7.65918H13.9961C14.0002 7.65924 14.0047 7.6582 14.0088 7.6582L14.0078 7.65918Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2.66992C20.2574 2.66992 25.3301 7.74261 25.3301 14C25.3301 20.2574 20.2574 25.3301 14 25.3301C7.74261 25.3301 2.66992 20.2574 2.66992 14C2.66992 7.74261 7.74261 2.66992 14 2.66992ZM14 4.33008C8.65941 4.33008 4.33008 8.65941 4.33008 14C4.33008 19.3406 8.65941 23.6699 14 23.6699C19.3406 23.6699 23.6699 19.3406 23.6699 14C23.6699 8.65941 19.3406 4.33008 14 4.33008Z" fill="currentColor"/>',
      })
    function ni(e) {
      switch (e.iconType) {
        case "check-circle":
          return (0, i.jsx)(eO.I, { className: "text-green", asset: i7.m })
        case "clock":
          return (0, i.jsx)(Y.QC9, { className: "text-secondary" })
        case "spinner":
          return null
        case "warning":
          return (0, i.jsx)(eO.I, { className: "text-danger", asset: nt })
      }
    }
    function nn(e) {
      switch (e) {
        case "waiting":
          return 0
        case "failed":
          return 1
        case "review":
          return 2
        case "running":
          return 3
        case "idle":
          return 4
      }
    }
    function no(e) {
      return JSON.stringify([
        e.id,
        e.turnKey,
        e.level,
        e.isLoading,
        e.waitingRequest?.kind,
        e.waitingRequest?.kind === "plan" ? e.waitingRequest.turnId : e.waitingRequest?.requestId,
      ])
    }
    function nr(e) {
      let t,
        a,
        o = (0, n.c)(4),
        { ariaLabel: r, onClick: l } = e
      return (
        o[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, i.jsx)("svg", {
              "aria-hidden": !0,
              className: "size-3",
              viewBox: "0 0 12 12",
              fill: "none",
              children: (0, i.jsx)("path", {
                d: "M3 3 9 9M9 3 3 9",
                stroke: "currentColor",
                strokeLinecap: "round",
                strokeWidth: "1.8",
              }),
            })),
            (o[0] = t))
          : (t = o[0]),
        o[1] !== r || o[2] !== l
          ? ((a = (0, i.jsx)(en.yl, {
              className:
                "w-fit rounded-full transition-transform duration-basic ease-out active:scale-95 motion-reduce:transition-none motion-reduce:active:scale-100",
              variant: "activity-dismiss",
              children: (0, i.jsx)(eo.$, {
                "aria-label": r,
                color: "ghostActive",
                radius: "full",
                size: "iconCircleSm",
                onClick: l,
                children: t,
              }),
            })),
            (o[1] = r),
            (o[2] = l),
            (o[3] = a))
          : (a = o[3]),
        a
      )
    }
    var nl = a("hNFe"),
      ns = a("fkjt"),
      nc = "notificationPresentation-S5hOn6",
      nu = "inlineSubtitleSolidText-MYmDPb"
    let nd = { damping: a5.Wm.default.damping, mass: a5.Wm.default.mass, stiffness: a5.Wm.default.stiffness }
    function np(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        d,
        p,
        m,
        f,
        h = (0, n.c)(102),
        {
          children: v,
          flight: y,
          onComplete: w,
          onStackCovered: b,
          onSourceReleased: C,
          onGeometryAnimationFrame: x,
        } = e,
        A = (0, g.useRef)(null),
        M = (0, ef.I)(),
        I = (0, ey.d)(0),
        S = (0, ey.d)(0),
        E = (0, ey.d)(y.origin.width),
        R = (0, ey.d)(y.origin.height),
        _ = (0, ey.d)(0),
        T = (0, ey.d)(0),
        k = (0, ey.d)(0),
        O = (0, ey.d)((y.origin.textOffsetX ?? 0) / (y.origin.zoom ?? 1)),
        P = (0, ey.d)((y.origin.textOffsetY ?? 0) / (y.origin.zoom ?? 1)),
        N = (0, ey.d)(y.origin.zoom ?? 1),
        L = (0, ns.z)(0, nd),
        F = (0, ey.d)(y.origin.textFontWeight ?? 0),
        q = (0, ey.d)((y.origin.textOffsetX ?? 0) - y.origin.width / 2),
        j = (0, ns.z)(q, nd),
        D = (0, ey.d)(y.origin.textOffsetY ?? 0),
        U = (0, ns.z)(D, nd),
        H = (0, ns.z)(0, a5.z1.filter),
        B = (0, ey.d)(y.origin.left + y.origin.width / 2),
        V = (0, ey.d)(y.origin.top),
        z = (0, ey.d)(y.origin.width),
        Y = (0, ey.d)(y.origin.height)
      h[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { damping: a5.z1.filter.damping, mass: a5.z1.filter.mass, stiffness: a5.z1.filter.stiffness }),
          (h[0] = t))
        : (t = h[0])
      let W = (0, ns.z)(B, t),
        X = (0, ns.z)(V, nd),
        G = (0, ns.z)(z, nd),
        $ = (0, ns.z)(Y, nd)
      h[1] !== y.notificationId || h[2] !== w
        ? ((a = () => w(y.notificationId)), (h[1] = y.notificationId), (h[2] = w), (h[3] = a))
        : (a = h[3])
      let K = (0, g.useEffectEvent)(a)
      h[4] !== y.notificationId || h[5] !== C
        ? ((o = () => C(y.notificationId)), (h[4] = y.notificationId), (h[5] = C), (h[6] = o))
        : (o = h[6])
      let Q = (0, g.useEffectEvent)(o)
      h[7] !== y.notificationId || h[8] !== b
        ? ((r = () => b?.(y.notificationId)), (h[7] = y.notificationId), (h[8] = b), (h[9] = r))
        : (r = h[9])
      let Z = (0, g.useEffectEvent)(r)
      h[10] !== x ? ((l = () => x?.()), (h[10] = x), (h[11] = l)) : (l = h[11])
      let J = (0, g.useEffectEvent)(l)
      ;(h[12] !== K ||
      h[13] !== L ||
      h[14] !== T ||
      h[15] !== k ||
      h[16] !== Z ||
      h[17] !== y.coveredNotificationId ||
      h[18] !== y.notificationId ||
      h[19] !== y.origin.textFontWeight ||
      h[20] !== y.origin.textOffsetX ||
      h[21] !== y.origin.textOffsetY ||
      h[22] !== R ||
      h[23] !== I ||
      h[24] !== _ ||
      h[25] !== M ||
      h[26] !== W ||
      h[27] !== $ ||
      h[28] !== j ||
      h[29] !== U ||
      h[30] !== X ||
      h[31] !== G ||
      h[32] !== J ||
      h[33] !== Q ||
      h[34] !== H ||
      h[35] !== B ||
      h[36] !== Y ||
      h[37] !== q ||
      h[38] !== D ||
      h[39] !== V ||
      h[40] !== z ||
      h[41] !== O ||
      h[42] !== P ||
      h[43] !== F ||
      h[44] !== S ||
      h[45] !== E ||
      h[46] !== N
        ? ((s = () => {
            let e = A.current
            if (null == e) return
            let t = performance.now(),
              a = document.querySelector(
                `[data-avatar-overlay-native-surface-id="${CSS.escape(`activity-${y.notificationId}`)}"]`,
              )
            if (null == a || M) return void K()
            let i = e.parentElement
            if (null == i) return void K()
            let n = a.closest("[data-avatar-overlay-activity-stack-item]"),
              o = a.querySelector('[data-avatar-overlay-activity-text="title"]'),
              r = null == o ? F.get() : Number(getComputedStyle(o.firstElementChild ?? o).fontWeight)
            if (null == y.origin.textOffsetX && null != o) {
              let e = a.getBoundingClientRect(),
                t = o.getBoundingClientRect().left - (e.left + e.width / 2)
              ;(q.jump(t), j.jump(t))
            }
            if (null == y.origin.textOffsetY && null != o) {
              let e = o.getBoundingClientRect().top - a.getBoundingClientRect().top
              ;(D.jump(e), U.jump(e))
            }
            let l = 0,
              s = !1,
              c = !1,
              u = () => {
                let e = a.getBoundingClientRect()
                if (e.width <= 0 || e.height <= 0) return void K()
                let d = i.getBoundingClientRect(),
                  p = d.width / i.offsetWidth || 1
                ;(N.set(p),
                  B.set(window.screenX + e.left + e.width / 2),
                  V.set(window.screenY + e.top),
                  z.set(e.width),
                  Y.set(e.height))
                let m = o?.getBoundingClientRect(),
                  f = (m?.left ?? e.left) - (e.left + e.width / 2),
                  h = null == m ? 0 : m.top - e.top
                ;(q.set(f), D.set(h))
                let g = G.get()
                ;(T.set((j.get() - f + (g - e.width) / 2) / p),
                  k.set((U.get() - h) / p),
                  O.set((j.get() + g / 2) / p),
                  P.set(U.get() / p))
                let v = Math.min(1, Math.max(0, L.get()))
                F.set((y.origin.textFontWeight ?? r) * (1 - v) + r * v)
                let w = $.get()
                ;(0 !== X.getVelocity() || 0 !== W.getVelocity() || 0 !== G.getVelocity() || 0 !== $.getVelocity()) &&
                  H.set(1)
                let b = W.get() - window.screenX - g / 2,
                  C = X.get() - window.screenY
                if (!c && null != y.coveredNotificationId) {
                  let e = CSS.escape(y.coveredNotificationId),
                    a = (
                      document.querySelector(`[data-avatar-overlay-quick-chat-flight="${e}"]`) ??
                      document.querySelector(`[data-avatar-overlay-native-surface-id="activity-${e}"]`)
                    )?.getBoundingClientRect()
                  if (null != a) {
                    let e = Math.max(0, Math.min(b + g, a.right) - Math.max(b, a.left)),
                      i = Math.max(0, Math.min(C + w, a.bottom) - Math.max(C, a.top))
                    e > 0 &&
                      i > 0 &&
                      ((c = !0),
                      tZ.v.debug("Quick Chat pill reached the previous task", {
                        safe: { elapsedMs: Math.round(performance.now() - t) },
                        sensitive: { notificationId: y.notificationId },
                      }),
                      Z())
                  }
                }
                let x = document
                  .querySelector('[data-avatar-overlay-native-surface-id="composer"]')
                  ?.getBoundingClientRect()
                if (
                  (!s &&
                    (null == x || b >= x.right || b + g <= x.left || C >= x.bottom || C + w <= x.top) &&
                    ((s = !0), Q()),
                  I.set((b - d.left) / p),
                  S.set((C - d.top) / p),
                  E.set(g / p),
                  R.set(w / p),
                  _.set(null == n ? 1 : Number(getComputedStyle(n).opacity)),
                  J(),
                  0.01 > Math.abs(L.get() - 1) &&
                    [
                      [W, B],
                      [X, V],
                      [G, z],
                      [$, Y],
                      [j, q],
                      [U, D],
                    ].every(nm))
                ) {
                  ;(tZ.v.info("Quick Chat pill throw settled", {
                    safe: { elapsedMs: Math.round(performance.now() - t) },
                    sensitive: { notificationId: y.notificationId },
                  }),
                    K())
                  return
                }
                l = requestAnimationFrame(u)
              }
            return (
              u(),
              L.set(1),
              () => {
                cancelAnimationFrame(l)
              }
            )
          }),
          (h[12] = K),
          (h[13] = L),
          (h[14] = T),
          (h[15] = k),
          (h[16] = Z),
          (h[17] = y.coveredNotificationId),
          (h[18] = y.notificationId),
          (h[19] = y.origin.textFontWeight),
          (h[20] = y.origin.textOffsetX),
          (h[21] = y.origin.textOffsetY),
          (h[22] = R),
          (h[23] = I),
          (h[24] = _),
          (h[25] = M),
          (h[26] = W),
          (h[27] = $),
          (h[28] = j),
          (h[29] = U),
          (h[30] = X),
          (h[31] = G),
          (h[32] = J),
          (h[33] = Q),
          (h[34] = H),
          (h[35] = B),
          (h[36] = Y),
          (h[37] = q),
          (h[38] = D),
          (h[39] = V),
          (h[40] = z),
          (h[41] = O),
          (h[42] = P),
          (h[43] = F),
          (h[44] = S),
          (h[45] = E),
          (h[46] = N),
          (h[47] = s))
        : (s = h[47]),
        h[48] !== L ||
        h[49] !== T ||
        h[50] !== k ||
        h[51] !== y.coveredNotificationId ||
        h[52] !== y.notificationId ||
        h[53] !== y.origin ||
        h[54] !== R ||
        h[55] !== I ||
        h[56] !== _ ||
        h[57] !== M ||
        h[58] !== W ||
        h[59] !== $ ||
        h[60] !== j ||
        h[61] !== U ||
        h[62] !== X ||
        h[63] !== G ||
        h[64] !== H ||
        h[65] !== B ||
        h[66] !== Y ||
        h[67] !== q ||
        h[68] !== D ||
        h[69] !== V ||
        h[70] !== z ||
        h[71] !== O ||
        h[72] !== P ||
        h[73] !== F ||
        h[74] !== S ||
        h[75] !== E ||
        h[76] !== N
          ? ((c = [
              y.notificationId,
              y.origin,
              y.coveredNotificationId,
              M,
              I,
              S,
              E,
              R,
              _,
              T,
              k,
              O,
              P,
              N,
              L,
              F,
              q,
              j,
              D,
              U,
              H,
              B,
              V,
              z,
              Y,
              W,
              X,
              G,
              $,
            ]),
            (h[48] = L),
            (h[49] = T),
            (h[50] = k),
            (h[51] = y.coveredNotificationId),
            (h[52] = y.notificationId),
            (h[53] = y.origin),
            (h[54] = R),
            (h[55] = I),
            (h[56] = _),
            (h[57] = M),
            (h[58] = W),
            (h[59] = $),
            (h[60] = j),
            (h[61] = U),
            (h[62] = X),
            (h[63] = G),
            (h[64] = H),
            (h[65] = B),
            (h[66] = Y),
            (h[67] = q),
            (h[68] = D),
            (h[69] = V),
            (h[70] = z),
            (h[71] = O),
            (h[72] = P),
            (h[73] = F),
            (h[74] = S),
            (h[75] = E),
            (h[76] = N),
            (h[77] = c))
          : (c = h[77]),
        (0, g.useLayoutEffect)(s, c),
        h[78] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, ev.A)("absolute text-sm text-default", e3, nc)), (h[78] = u))
          : (u = h[78]))
      let ee = y.notificationId
      return (
        h[79] !== I || h[80] !== _ || h[81] !== S || h[82] !== E
          ? ((d = { left: I, top: S, width: E, opacity: _ }),
            (h[79] = I),
            (h[80] = _),
            (h[81] = S),
            (h[82] = E),
            (h[83] = d))
          : (d = h[83]),
        h[84] !== L || h[85] !== y.origin || h[86] !== O || h[87] !== P || h[88] !== N
          ? ((p = (0, i.jsx)(nf, { origin: y.origin, textLeft: O, textTop: P, zoom: N, progress: L })),
            (h[84] = L),
            (h[85] = y.origin),
            (h[86] = O),
            (h[87] = P),
            (h[88] = N),
            (h[89] = p))
          : (p = h[89]),
        h[90] !== v || h[91] !== T || h[92] !== k || h[93] !== R || h[94] !== H || h[95] !== p || h[96] !== F
          ? ((m = v({ height: R, contentX: T, contentY: k, subtitleOpacity: H, titleFontWeight: F, appshots: p })),
            (h[90] = v),
            (h[91] = T),
            (h[92] = k),
            (h[93] = R),
            (h[94] = H),
            (h[95] = p),
            (h[96] = F),
            (h[97] = m))
          : (m = h[97]),
        h[98] !== y.notificationId || h[99] !== d || h[100] !== m
          ? ((f = (0, i.jsx)(eh.P.div, {
              ref: A,
              "aria-hidden": !0,
              className: u,
              "data-avatar-overlay-quick-chat-flight": ee,
              inert: !0,
              style: d,
              children: m,
            })),
            (h[98] = y.notificationId),
            (h[99] = d),
            (h[100] = m),
            (h[101] = f))
          : (f = h[101]),
        f
      )
    }
    function nm(e) {
      let [t, a] = e
      return 0.1 > Math.abs(t.get() - a.get()) && 1 > Math.abs(t.getVelocity())
    }
    function nf(e) {
      let t,
        a,
        o,
        r,
        l = (0, n.c)(17),
        { origin: s, textLeft: c, textTop: u, zoom: d, progress: p } = e,
        m = s.zoom ?? 1,
        f = (0, ew.G)(p, nh)
      l[0] !== f || l[1] !== m || l[2] !== d
        ? ((t = () => (f.get() * m) / d.get()), (l[0] = f), (l[1] = m), (l[2] = d), (l[3] = t))
        : (t = l[3])
      let h = (0, ew.G)(t)
      return (
        l[4] !== f || l[5] !== h || l[6] !== c || l[7] !== u
          ? ((a = { x: c, y: u, opacity: f, scale: h, originX: 0, originY: 0 }),
            (l[4] = f),
            (l[5] = h),
            (l[6] = c),
            (l[7] = u),
            (l[8] = a))
          : (a = l[8]),
        l[9] !== s.appshots || l[10] !== s.textOffsetX || l[11] !== s.textOffsetY || l[12] !== m
          ? ((o = s.appshots?.map((e, t) =>
              (0, i.jsx)(
                "img",
                {
                  className: `absolute max-w-none ${e.className}`,
                  alt: "",
                  draggable: !1,
                  src: e.src,
                  style: {
                    left: (e.left - (s.textOffsetX ?? 0)) / m,
                    top: (e.top - (s.textOffsetY ?? 0)) / m,
                    width: e.width / m,
                    height: e.height / m,
                  },
                },
                t,
              ),
            )),
            (l[9] = s.appshots),
            (l[10] = s.textOffsetX),
            (l[11] = s.textOffsetY),
            (l[12] = m),
            (l[13] = o))
          : (o = l[13]),
        l[14] !== a || l[15] !== o
          ? ((r = (0, i.jsx)(eh.P.div, { className: "absolute top-0 left-0 size-0", style: a, children: o })),
            (l[14] = a),
            (l[15] = o),
            (l[16] = r))
          : (r = l[16]),
        r
      )
    }
    function nh(e) {
      return 1 - Math.min(1, Math.max(0, e))
    }
    var ng = a("xyeV")
    function nv(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c = (0, n.c)(30),
        {
          animation: u,
          compactContent: p,
          expandedWidth: m,
          expandsUpward: f,
          isReplyOpen: h,
          nativeSurfaceId: v,
          overflowContent: y,
          tabEdge: w,
          children: b,
        } = e,
        C = void 0 === u ? d.ltN : u,
        x = void 0 !== f && f,
        A = void 0 !== h && h,
        M = (0, ef.I)(),
        [I, S] = (0, g.useState)(!1),
        [E, R] = (0, g.useState)(54),
        _ = I || A,
        T = Math.max(54, E),
        k = _ ? T : 54,
        [O, P] = (0, g.useState)(!0),
        N = (0, g.useRef)(5e3),
        L = "left" === w ? -110 : 110
      c[0] !== L ? ((t = { scaleX: 0.75, scaleY: 0.75, width: 44, x: L }), (c[0] = L), (c[1] = t)) : (t = c[1])
      let F = t,
        q = C.durationMs / 1e3
      c[2] !== C.bounce || c[3] !== q
        ? ((a = { type: "spring", duration: q, bounce: C.bounce }), (c[2] = C.bounce), (c[3] = q), (c[4] = a))
        : (a = c[4])
      let j = a
      return (
        c[5] !== _ || c[6] !== O
          ? ((o = () => {
              if (!O || _) return
              let e = Date.now(),
                t = window.setTimeout(() => {
                  ;((N.current = 0), P(!1))
                }, N.current)
              return () => {
                ;(window.clearTimeout(t), (N.current = Math.max(0, N.current - (Date.now() - e))))
              }
            }),
            (r = [_, O]),
            (c[5] = _),
            (c[6] = O),
            (c[7] = o),
            (c[8] = r))
          : ((o = c[7]), (r = c[8])),
        (0, g.useEffect)(o, r),
        c[9] !== C.startScaleX ||
        c[10] !== C.startScaleY ||
        c[11] !== C.travelPx ||
        c[12] !== b ||
        c[13] !== p ||
        c[14] !== j ||
        c[15] !== T ||
        c[16] !== m ||
        c[17] !== x ||
        c[18] !== k ||
        c[19] !== F ||
        c[20] !== _ ||
        c[21] !== A ||
        c[22] !== O ||
        c[23] !== v ||
        c[24] !== y ||
        c[25] !== M ||
        c[26] !== w
          ? ((l = O
              ? (0, i.jsxs)(eh.P.div, {
                  animate: { scaleX: 1, scaleY: 1, width: _ ? m : 44, x: 0 },
                  className: "relative",
                  "data-avatar-overlay-hit-region": "quick-chat-stash-attention",
                  style: { height: k, marginTop: x ? 54 - k : 0 },
                  "data-avatar-overlay-quick-chat-stash-attention": "true",
                  exit: {
                    ...F,
                    transition: M
                      ? { duration: 0 }
                      : {
                          scaleX: { bounce: 0.18, duration: 0.45, type: "spring" },
                          scaleY: { bounce: 0.18, duration: 0.45, type: "spring" },
                          width: { bounce: 0.18, duration: 0.45, type: "spring" },
                          x: { bounce: 0.18, duration: 0.45, type: "spring" },
                        },
                  },
                  initial: !M && {
                    scaleX: C.startScaleX,
                    scaleY: C.startScaleY,
                    width: 44,
                    x: ("left" === w ? -1 : 1) * C.travelPx,
                  },
                  transition: M
                    ? { duration: 0 }
                    : { scaleX: j, scaleY: j, width: { bounce: 0.18, duration: 0.45, type: "spring" }, x: j },
                  onPointerEnter: () => {
                    S(!0)
                  },
                  onPointerLeave: () => {
                    S(!1)
                  },
                  children: [
                    (0, i.jsx)(eh.P.div, {
                      animate: { height: _ ? T : 44 },
                      className: "absolute inset-x-0 top-1/2 -translate-y-1/2 overflow-hidden",
                      initial: !1,
                      transition: M || A ? { duration: 0 } : { bounce: 0.18, duration: 0.45, type: "spring" },
                      children: (0, i.jsxs)(en.yl, {
                        className: "size-full overflow-hidden",
                        nativeSurfaceId: v,
                        variant: "activity",
                        children: [
                          (0, i.jsx)(eh.P.div, {
                            ref: (e) =>
                              (0, i_.J)({
                                axis: "height",
                                target: e,
                                onChange: (e) => {
                                  let { height: t } = e
                                  return R(t)
                                },
                              }),
                            animate: { opacity: +!!_ },
                            className: "absolute top-0",
                            initial: !1,
                            style: { left: "left" === w ? 0 : void 0, right: "right" === w ? 0 : void 0, width: m },
                            transition: { duration: M || !_ ? 0 : 0.12 },
                            children: b,
                          }),
                          (0, i.jsx)(eh.P.div, {
                            animate: { opacity: +!_ },
                            className: "pointer-events-none absolute inset-y-0 flex items-center justify-center",
                            initial: !1,
                            style: { left: "left" === w ? 0 : void 0, right: "right" === w ? 0 : void 0, width: 44 },
                            transition: { duration: M || _ ? 0 : 0.12 },
                            children: p,
                          }),
                        ],
                      }),
                    }),
                    null != y && _
                      ? (0, i.jsx)("div", {
                          className: (0, ev.A)("absolute -top-1 -left-1 z-20", ng.A.barMaterial, ng.A.controls),
                          children: y,
                        })
                      : null,
                  ],
                })
              : null),
            (c[9] = C.startScaleX),
            (c[10] = C.startScaleY),
            (c[11] = C.travelPx),
            (c[12] = b),
            (c[13] = p),
            (c[14] = j),
            (c[15] = T),
            (c[16] = m),
            (c[17] = x),
            (c[18] = k),
            (c[19] = F),
            (c[20] = _),
            (c[21] = A),
            (c[22] = O),
            (c[23] = v),
            (c[24] = y),
            (c[25] = M),
            (c[26] = w),
            (c[27] = l))
          : (l = c[27]),
        c[28] !== l ? ((s = (0, i.jsx)(eg.N, { children: l })), (c[28] = l), (c[29] = s)) : (s = c[29]),
        s
      )
    }
    var ny = a("zn72")
    function nw(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        d,
        p = (0, n.c)(29),
        { children: m, geometry: f, layout: h } = e,
        v = (0, g.useId)(),
        y = (0, g.useRef)(null),
        w = (0, g.useRef)(null)
      p[0] !== v
        ? ((t = (e) => {
            let t = y.current,
              a = w.current
            if (null == a) return
            if (!e?.nativeMaterialsReady || null == t || t.offsetWidth <= 0 || t.offsetHeight <= 0) {
              ;(a.removeAttribute("d"), a.setAttribute("opacity", "0"), t?.style.removeProperty("mask-image"))
              return
            }
            let i = t.getBoundingClientRect()
            if (i.width <= 0 || i.height <= 0) {
              ;(a.removeAttribute("d"), a.setAttribute("opacity", "0"), t.style.removeProperty("mask-image"))
              return
            }
            let n = i.width / t.offsetWidth,
              o = i.height / t.offsetHeight
            ;(a.setAttribute(
              "d",
              (function (e) {
                if (null == e) return ""
                let { width: t, height: a } = e,
                  i = Math.min(24, t / 2, a / 2)
                return `M${i},0H${t - i}A${i},${i} 0 0 1 ${t},${i}V${a - i}A${i},${i} 0 0 1 ${t - i},${a}H${i}A${i},${i} 0 0 1 0,${a - i}V${i}A${i},${i} 0 0 1 ${i},0Z`
              })(e),
            ),
              a.setAttribute("opacity", String(e.opacity)),
              (a.style.transform = `translate(${(e.viewportRect.left - i.left) / n}px, ${(e.viewportRect.top - i.top) / o}px) scale(${e.viewportRect.width / e.width / n}, ${e.viewportRect.height / e.height / o})`),
              (t.style.maskImage = `url(#${v})`))
          }),
          (p[0] = v),
          (p[1] = t))
        : (t = p[1])
      let b = t
      ;((0, a3.L)(f, "change", b),
        p[2] !== f || p[3] !== b
          ? ((a = (e) => {
              ;((y.current = e), b(f.get()))
            }),
            (p[2] = f),
            (p[3] = b),
            (p[4] = a))
          : (a = p[4]),
        p[5] === Symbol.for("react.memo_cache_sentinel") ? ((o = { maskClip: "no-clip" }), (p[5] = o)) : (o = p[5]))
      let C = -h.mascot.left,
        x = -h.mascot.top,
        A = -h.mascot.left,
        M = -h.mascot.top
      return (
        p[6] !== h.viewport.height || p[7] !== h.viewport.width || p[8] !== A || p[9] !== M
          ? ((r = (0, i.jsx)("rect", {
              x: A,
              y: M,
              width: h.viewport.width,
              height: h.viewport.height,
              fill: "white",
            })),
            (p[6] = h.viewport.height),
            (p[7] = h.viewport.width),
            (p[8] = A),
            (p[9] = M),
            (p[10] = r))
          : (r = p[10]),
        p[11] !== f || p[12] !== b
          ? ((l = (e) => {
              ;((w.current = e), b(f.get()))
            }),
            (p[11] = f),
            (p[12] = b),
            (p[13] = l))
          : (l = p[13]),
        p[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = { transformBox: "view-box", transformOrigin: "0 0" }), (p[14] = s))
          : (s = p[14]),
        p[15] !== l
          ? ((c = (0, i.jsx)("path", { ref: l, fill: "black", opacity: "0", style: s })), (p[15] = l), (p[16] = c))
          : (c = p[16]),
        p[17] !== v ||
        p[18] !== h.viewport.height ||
        p[19] !== h.viewport.width ||
        p[20] !== c ||
        p[21] !== C ||
        p[22] !== x ||
        p[23] !== r
          ? ((u = (0, i.jsx)("svg", {
              "aria-hidden": "true",
              className: "pointer-events-none absolute",
              width: "0",
              height: "0",
              children: (0, i.jsx)("defs", {
                children: (0, i.jsxs)("mask", {
                  id: v,
                  maskUnits: "userSpaceOnUse",
                  maskContentUnits: "userSpaceOnUse",
                  x: C,
                  y: x,
                  width: h.viewport.width,
                  height: h.viewport.height,
                  children: [r, c],
                }),
              }),
            })),
            (p[17] = v),
            (p[18] = h.viewport.height),
            (p[19] = h.viewport.width),
            (p[20] = c),
            (p[21] = C),
            (p[22] = x),
            (p[23] = r),
            (p[24] = u))
          : (u = p[24]),
        p[25] !== m || p[26] !== u || p[27] !== a
          ? ((d = (0, i.jsxs)("div", {
              ref: a,
              className: "absolute inset-0",
              "data-avatar-overlay-caption-orb-mask": !0,
              style: o,
              children: [u, m],
            })),
            (p[25] = m),
            (p[26] = u),
            (p[27] = a),
            (p[28] = d))
          : (d = p[28]),
        d
      )
    }
    function nb(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        p,
        m,
        f,
        h,
        v,
        y,
        w,
        b,
        C,
        x,
        A,
        M,
        I,
        S,
        E,
        R,
        _,
        T,
        k,
        O,
        P = (0, n.c)(94),
        {
          anchorRect: N,
          hasActivityPills: L,
          layout: F,
          presentedGeometry: q,
          prefersReducedMotion: j,
          presentation: D,
          statusText: U,
          text: H,
        } = e,
        B = void 0 === D ? "voice-orb" : D,
        V = (0, g.useRef)(null),
        z = (0, g.useRef)(null),
        Y = (0, g.useRef)(null),
        [W, X] = (0, g.useState)("auto"),
        G = null != U
      P[0] !== H ? ((t = H.trim()), (P[0] = H), (P[1] = t)) : (t = P[1])
      let $ = "" !== t
      P[2] !== $ || P[3] !== B || P[4] !== U || P[5] !== H
        ? ((a = "quick-chat" === B ? (U?.trim() ?? "") !== "" || $ : "" !== (U ?? H).trim()),
          (P[2] = $),
          (P[3] = B),
          (P[4] = U),
          (P[5] = H),
          (P[6] = a))
        : (a = P[6])
      let K = a
      P[7] !== F.placement || P[8] !== B
        ? ((o = "quick-chat" === B && F.placement.startsWith("bottom")), (P[7] = F.placement), (P[8] = B), (P[9] = o))
        : (o = P[9])
      let Q = o,
        Z = Q ? "up" : "down"
      P[10] !== B
        ? ((r =
            "quick-chat" === B
              ? { duration: 0.38, ease: [0.32, 0.72, 0, 1] }
              : { duration: 0.18, ease: [0.16, 1, 0.3, 1] }),
          (P[10] = B),
          (P[11] = r))
        : (r = P[11])
      let J = r,
        ee = (0, g.useRef)(void 0),
        et = (0, g.useRef)(+!!j),
        ea = (0, ey.d)(null),
        ei = q ?? ea,
        eo = N?.width ?? Math.max(d.bZi, 2 * F.mascot.width)
      "quick-chat" === B && (eo = void 0 !== L && L ? d.pFD : d.uHE)
      let er = F.quickChat?.workArea ?? F.visibleBounds,
        el = Math.min(eo, Math.max(0, er.width - 2 * d.Zkw)),
        es = Math.min(
          Math.max(null == N ? F.mascot.left + F.mascot.width / 2 : N.left + N.width / 2, er.left + d.Zkw + el / 2),
          er.left + er.width - d.Zkw - el / 2,
        ),
        ec = es - el / 2,
        eu = F.mascot.left + F.mascot.width / 2 - es,
        ed = 16
      "quick-chat" === B && (ed = Q ? 8 : -8)
      let ep = F.mascot.top + ed
      P[12] !== ec || P[13] !== el || P[14] !== ep
        ? ((l = { left: ec, top: ep, width: el, "--quick-chat-glass-spacing": d.JCZ.compactGlassSpacing }),
          (P[12] = ec),
          (P[13] = el),
          (P[14] = ep),
          (P[15] = l))
        : (l = P[15])
      let em = l
      P[16] !== ei || P[17] !== B
        ? ((s = () => {
            let e = Y.current
            if (null == e) return
            if (e.offsetWidth <= 0 || e.offsetHeight <= 0) return void ei.set(null)
            let t =
                "auto" === ee.current
                  ? e.offsetHeight
                  : (ee.current ?? e.parentElement?.offsetHeight ?? e.offsetHeight),
              a = e.getBoundingClientRect(),
              i = e.closest("[data-avatar-overlay-content-frame='true']")?.getBoundingClientRect(),
              n = e.parentElement?.getBoundingClientRect().height ?? a.height,
              o = a.height / e.offsetHeight,
              r =
                "active" === document.documentElement.dataset.owlNativeGlass &&
                e.hasAttribute("data-owl-native-source-underlay") &&
                ("quick-chat" !== B ||
                  !!e.parentElement
                    ?.querySelector('[data-avatar-overlay-native-surface-id="realtime-caption-connector"]')
                    ?.hasAttribute("data-owl-native-source-underlay"))
            ;(ei.get()?.nativeMaterialsReady !== r &&
              tZ.v.debug("Avatar overlay caption native composition readiness changed", {
                safe: { nativeMaterialsReady: r, width: e.offsetWidth, height: e.offsetHeight },
              }),
              ei.set({
                nativeMaterialsReady: r,
                opacity: et.current,
                height: "quick-chat" === B ? t : e.offsetHeight,
                viewportRect: {
                  left: a.left - (i?.left ?? 0),
                  top: a.top + n - t * o - (i?.top ?? 0),
                  width: a.width,
                  height: a.height,
                },
                width: e.offsetWidth,
              }))
          }),
          (P[16] = ei),
          (P[17] = B),
          (P[18] = s))
        : (s = P[18])
      let ef = s
      P[19] !== ei || P[20] !== ef
        ? ((c = (e) => {
            if (null == e) return
            ;((Y.current = e),
              (ee.current = e.parentElement?.offsetHeight),
              (et.current = Number.parseFloat(getComputedStyle(e.parentElement ?? e).opacity)),
              ef())
            let t = new ResizeObserver(() => ef())
            t.observe(e)
            let a = new MutationObserver(() => ef())
            return (
              a.observe(e.parentElement ?? e, {
                attributes: !0,
                attributeFilter: ["data-owl-native-source-underlay"],
                subtree: !0,
              }),
              a.observe(document.documentElement, { attributes: !0, attributeFilter: ["data-owl-native-glass"] }),
              () => {
                ;(t.disconnect(), a.disconnect(), (0, to.WG)(ef), Y.current === e && ((Y.current = null), ei.set(null)))
              }
            )
          }),
          (P[19] = ei),
          (P[20] = ef),
          (P[21] = c))
        : (c = P[21])
      let ew = c
      P[22] !== ef
        ? ((u = () => {
            to.Gt.preRender(ef, !1, !0)
          }),
          (P[22] = ef),
          (P[23] = u))
        : (u = P[23])
      let eb = (0, g.useEffectEvent)(u)
      if (
        (P[24] !== eb
          ? ((p = () => {
              eb()
            }),
            (P[24] = eb),
            (P[25] = p))
          : (p = P[25]),
        P[26] !== ec || P[27] !== eu || P[28] !== el || P[29] !== F.mascot.top
          ? ((m = [ec, eu, el, F.mascot.top]),
            (P[26] = ec),
            (P[27] = eu),
            (P[28] = el),
            (P[29] = F.mascot.top),
            (P[30] = m))
          : (m = P[30]),
        (0, g.useLayoutEffect)(p, m),
        P[31] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = () => {
              let e = z.current
              null != e && (e.scrollTop = e.scrollHeight)
            }),
            (P[31] = f))
          : (f = P[31]),
        P[32] !== H ? ((h = [H]), (P[32] = H), (P[33] = h)) : (h = P[33]),
        (0, g.useLayoutEffect)(f, h),
        P[34] !== B
          ? ((v = () => {
              let e = V.current,
                t = Y.current
              if ("quick-chat" !== B || null == e || null == t) return
              let a = () => {
                  let a = getComputedStyle(t),
                    i =
                      e.offsetHeight +
                      (Number.parseFloat(a.paddingTop) || 0) +
                      (Number.parseFloat(a.paddingBottom) || 0) +
                      (Number.parseFloat(a.borderTopWidth) || 0) +
                      (Number.parseFloat(a.borderBottomWidth) || 0)
                  ;(tZ.v.debug("Quick Chat voice bubble content size changed", { safe: { height: i } }), X(i))
                },
                i = new ResizeObserver(a)
              return (i.observe(e), a(), () => i.disconnect())
            }),
            (P[34] = B),
            (P[35] = v))
          : (v = P[35]),
        P[36] !== K || P[37] !== G || P[38] !== B
          ? ((y = [K, G, B]), (P[36] = K), (P[37] = G), (P[38] = B), (P[39] = y))
          : (y = P[39]),
        (0, g.useLayoutEffect)(v, y),
        !K)
      )
        return null
      let eC = G && ("quick-chat" !== B || !$) ? "status" : "transcript"
      P[40] !== J ||
      P[41] !== W ||
      P[42] !== ei ||
      P[43] !== j ||
      P[44] !== B ||
      P[45] !== U ||
      P[46] !== eC ||
      P[47] !== H
        ? ((w = (0, i.jsx)(
            nC,
            {
              bubbleTransition: J,
              contentHeight: W,
              contentRef: V,
              geometry: ei,
              prefersReducedMotion: j,
              presentation: B,
              statusText: U,
              text: H,
              transcriptRef: z,
            },
            eC,
          )),
          (P[40] = J),
          (P[41] = W),
          (P[42] = ei),
          (P[43] = j),
          (P[44] = B),
          (P[45] = U),
          (P[46] = eC),
          (P[47] = H),
          (P[48] = w))
        : (w = P[48])
      let ex = w,
        eA = "quick-chat" === B ? W : "auto"
      P[49] !== eA ? ((b = { height: eA, opacity: 1 }), (P[49] = eA), (P[50] = b)) : (b = P[50])
      let eM = !Q && "-translate-y-full"
      ;(P[51] !== eM
        ? ((C = (0, ev.A)(
            "no-drag pointer-events-none absolute flex shrink-0 justify-center text-start",
            eM,
            "glassGroup-rVqAMq",
          )),
          (P[51] = eM),
          (P[52] = C))
        : (C = P[52]),
        P[53] !== j ? ((x = !j && { height: 0, opacity: 0 }), (P[53] = j), (P[54] = x)) : (x = P[54]),
        P[55] !== J || P[56] !== j
          ? ((A = j ? { duration: 0 } : J), (P[55] = J), (P[56] = j), (P[57] = A))
          : (A = P[57]),
        P[58] !== W || P[59] !== B || P[60] !== ef
          ? ((M = () => {
              ;((ee.current = "quick-chat" === B ? W : "auto"), (et.current = 1), to.Gt.preRender(ef, !1, !0))
            }),
            (P[58] = W),
            (P[59] = B),
            (P[60] = ef),
            (P[61] = M))
          : (M = P[61]),
        P[62] !== ef
          ? ((I = (e) => {
              ;(("number" == typeof e.height || "auto" === e.height) && (ee.current = e.height),
                "number" == typeof e.opacity && (et.current = e.opacity),
                to.Gt.preRender(ef, !1, !0))
            }),
            (P[62] = ef),
            (P[63] = I))
          : (I = P[63]),
        P[64] !== el ? ((S = { maxWidth: el }), (P[64] = el), (P[65] = S)) : (S = P[65]))
      let eI = "quick-chat" === B ? "quick-chat-caption" : void 0,
        eS = "quick-chat" === B && "h-full overflow-hidden"
      return (
        P[66] !== eS ? ((E = (0, ev.A)("relative min-w-0 w-full", eS)), (P[66] = eS), (P[67] = E)) : (E = P[67]),
        P[68] !== ex || P[69] !== j || P[70] !== B
          ? ((R = j || "quick-chat" !== B ? ex : (0, i.jsx)(eg.N, { children: ex })),
            (P[68] = ex),
            (P[69] = j),
            (P[70] = B),
            (P[71] = R))
          : (R = P[71]),
        P[72] !== E || P[73] !== R
          ? ((_ = (0, i.jsx)("div", { className: E, children: R })), (P[72] = E), (P[73] = R), (P[74] = _))
          : (_ = P[74]),
        P[75] !== ew || P[76] !== S || P[77] !== eI || P[78] !== _
          ? ((T = (0, i.jsx)(en.yl, {
              ref: ew,
              nativeSurfaceId: "realtime-caption",
              style: S,
              variant: eI,
              children: _,
            })),
            (P[75] = ew),
            (P[76] = S),
            (P[77] = eI),
            (P[78] = _),
            (P[79] = T))
          : (T = P[79]),
        P[80] !== eu || P[81] !== B || P[82] !== Z
          ? ((k =
              "quick-chat" === B
                ? (0, i.jsx)(en.yl, {
                    "aria-hidden": "true",
                    "data-avatar-overlay-caption-connector-direction": Z,
                    "data-avatar-overlay-chromium-overflow": "true",
                    nativeSurfaceId: "realtime-caption-connector",
                    style: { left: `calc(50% + ${eu}px)` },
                    variant: "quick-chat-caption-connector",
                  })
                : null),
            (P[80] = eu),
            (P[81] = B),
            (P[82] = Z),
            (P[83] = k))
          : (k = P[83]),
        P[84] !== em ||
        P[85] !== b ||
        P[86] !== C ||
        P[87] !== x ||
        P[88] !== A ||
        P[89] !== M ||
        P[90] !== I ||
        P[91] !== T ||
        P[92] !== k
          ? ((O = (0, i.jsxs)(eh.P.div, {
              "aria-live": "polite",
              animate: b,
              className: C,
              "data-avatar-overlay-size": "realtime-caption",
              initial: x,
              role: "status",
              style: em,
              transition: A,
              onAnimationComplete: M,
              onUpdate: I,
              children: [T, k],
            })),
            (P[84] = em),
            (P[85] = b),
            (P[86] = C),
            (P[87] = x),
            (P[88] = A),
            (P[89] = M),
            (P[90] = I),
            (P[91] = T),
            (P[92] = k),
            (P[93] = O))
          : (O = P[93]),
        O
      )
    }
    function nC(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        d,
        p,
        m = (0, n.c)(40),
        {
          bubbleTransition: f,
          contentHeight: h,
          contentRef: v,
          geometry: y,
          prefersReducedMotion: w,
          presentation: b,
          statusText: C,
          text: x,
          transcriptRef: A,
        } = e,
        M = (0, ea.tF)(),
        I = null != C
      m[0] !== x ? ((t = x.trim()), (m[0] = x), (m[1] = t)) : (t = m[1])
      let S = "" !== t
      m[2] !== h || m[3] !== y
        ? ((a = () => "number" == typeof h && Math.round(y.get()?.height ?? 0) >= h),
          (m[2] = h),
          (m[3] = y),
          (m[4] = a))
        : (a = m[4])
      let [E] = (0, g.useState)(a),
        R = !w && "quick-chat" === b,
        _ = M ? v : void 0,
        T = !M || void 0
      m[5] === Symbol.for("react.memo_cache_sentinel") ? ((o = { opacity: 1 }), (m[5] = o)) : (o = m[5])
      let k =
          "quick-chat" === b
            ? "flex min-w-0 flex-col gap-1.5 text-size-chat-sm leading-4"
            : "text-size-chat leading-4 text-default",
        O = !M && "absolute inset-x-0 top-0"
      return (
        m[6] !== k || m[7] !== O ? ((r = (0, ev.A)(k, O)), (m[6] = k), (m[7] = O), (m[8] = r)) : (r = m[8]),
        m[9] !== f || m[10] !== I
          ? ((l = {
              opacity: 0,
              transition: I ? { delay: Math.max(0, (f.duration ?? 0) - 0.21), duration: 0.21 } : { duration: 0 },
            }),
            (m[9] = f),
            (m[10] = I),
            (m[11] = l))
          : (l = m[11]),
        m[12] !== R ? ((s = !!R && { opacity: 0 }), (m[12] = R), (m[13] = s)) : (s = m[13]),
        m[14] !== R || m[15] !== f || m[16] !== I || m[17] !== E
          ? ((c = R ? { duration: 0.21, delay: I && E ? 0 : f.duration } : { duration: 0 }),
            (m[14] = R),
            (m[15] = f),
            (m[16] = I),
            (m[17] = E),
            (m[18] = c))
          : (c = m[18]),
        m[19] !== I || m[20] !== b || m[21] !== C
          ? ((u = I
              ? (0, i.jsx)("div", {
                  className: (0, ev.A)(
                    "loading-shimmer-pure-text select-none truncate",
                    "quick-chat" === b && "text-xs text-secondary",
                    "statusText-YZnc6c",
                    iT,
                  ),
                  children: C,
                })
              : null),
            (m[19] = I),
            (m[20] = b),
            (m[21] = C),
            (m[22] = u))
          : (u = m[22]),
        m[23] !== S || m[24] !== M || m[25] !== I || m[26] !== w || m[27] !== b || m[28] !== x || m[29] !== A
          ? ((d =
              S && ("quick-chat" === b || !I)
                ? (0, i.jsx)("div", {
                    ref: M ? A : void 0,
                    className: "max-h-12 overflow-hidden break-words whitespace-pre-wrap text-default italic",
                    children:
                      "quick-chat" === b
                        ? Array.from(x.matchAll(/\S+|\s+/g), (e) =>
                            "" === e[0].trim()
                              ? e[0]
                              : (0, i.jsx)(
                                  eh.P.span,
                                  {
                                    animate: { opacity: 1 },
                                    initial: !w && { opacity: 0 },
                                    transition: { duration: 0.18 * !w },
                                    children: e[0],
                                  },
                                  e.index,
                                ),
                          )
                        : x,
                  })
                : null),
            (m[23] = S),
            (m[24] = M),
            (m[25] = I),
            (m[26] = w),
            (m[27] = b),
            (m[28] = x),
            (m[29] = A),
            (m[30] = d))
          : (d = m[30]),
        m[31] !== s ||
        m[32] !== c ||
        m[33] !== u ||
        m[34] !== d ||
        m[35] !== _ ||
        m[36] !== T ||
        m[37] !== r ||
        m[38] !== l
          ? ((p = (0, i.jsxs)(eh.P.div, {
              ref: _,
              "aria-hidden": T,
              animate: o,
              className: r,
              exit: l,
              initial: s,
              transition: c,
              children: [u, d],
            })),
            (m[31] = s),
            (m[32] = c),
            (m[33] = u),
            (m[34] = d),
            (m[35] = _),
            (m[36] = T),
            (m[37] = r),
            (m[38] = l),
            (m[39] = p))
          : (p = m[39]),
        p
      )
    }
    var nx = a("zjpG")
    function nA(e) {
      let t,
        a = (0, n.c)(69),
        { isExpanded: o, onRunNotificationAction: r, onSubmitQuestionOption: l, patchSummaryCopy: s, request: c } = e
      a[0] !== r
        ? ((t = (e) => {
            "questionOption" in e || r(e)
          }),
          (a[0] = r),
          (a[1] = t))
        : (t = a[1])
      let u = t
      switch (c.kind) {
        case "question": {
          let e,
            t,
            n,
            s,
            u,
            d,
            p = o ? "break-words whitespace-pre-wrap" : "truncate"
          return (
            a[2] !== p ? ((e = (0, ev.A)("min-w-0 pe-[38px]", p)), (a[2] = p), (a[3] = e)) : (e = a[3]),
            a[4] !== c.prompt || a[5] !== e
              ? ((t = (0, i.jsx)("div", {
                  className: e,
                  "data-avatar-overlay-overflow-content": "true",
                  children: c.prompt,
                })),
                (a[4] = c.prompt),
                (a[5] = e),
                (a[6] = t))
              : (t = a[6]),
            a[7] !== c.options ? ((n = c.options.map(nM)), (a[7] = c.options), (a[8] = n)) : (n = a[8]),
            a[9] !== r || a[10] !== l
              ? ((s = (e) => {
                  "questionOption" in e ? l?.(e.questionOption) : r(e)
                }),
                (a[9] = r),
                (a[10] = l),
                (a[11] = s))
              : (s = a[11]),
            a[12] !== n || a[13] !== s
              ? ((u = (0, i.jsx)(n_, { actions: n, onRunNotificationAction: s })),
                (a[12] = n),
                (a[13] = s),
                (a[14] = u))
              : (u = a[14]),
            a[15] !== t || a[16] !== u
              ? ((d = (0, i.jsxs)("div", {
                  "data-avatar-overlay-compact-waiting-request": "question",
                  children: [t, u],
                })),
                (a[15] = t),
                (a[16] = u),
                (a[17] = d))
              : (d = a[17]),
            d
          )
        }
        case "patch": {
          let e, t, n
          return (
            a[18] !== o || a[19] !== s || a[20] !== c.files || a[21] !== c.summary
              ? ((e = (0, i.jsx)(nE, { copy: s, files: c.files, isExpanded: o, summary: c.summary })),
                (a[18] = o),
                (a[19] = s),
                (a[20] = c.files),
                (a[21] = c.summary),
                (a[22] = e))
              : (e = a[22]),
            a[23] !== c.actions || a[24] !== u
              ? ((t = (0, i.jsx)(n_, { actions: c.actions, onRunNotificationAction: u })),
                (a[23] = c.actions),
                (a[24] = u),
                (a[25] = t))
              : (t = a[25]),
            a[26] !== e || a[27] !== t
              ? ((n = (0, i.jsxs)("div", { "data-avatar-overlay-compact-waiting-request": "patch", children: [e, t] })),
                (a[26] = e),
                (a[27] = t),
                (a[28] = n))
              : (n = a[28]),
            n
          )
        }
        case "plan": {
          let e
          return (
            a[29] !== o || a[30] !== c || a[31] !== u
              ? ((e = (0, i.jsx)(nI, { isExpanded: o, onRunNotificationAction: u, request: c })),
                (a[29] = o),
                (a[30] = c),
                (a[31] = u),
                (a[32] = e))
              : (e = a[32]),
            e
          )
        }
        case "exec": {
          let e, t, n
          return (
            a[33] !== o || a[34] !== c.summary
              ? ((e = (0, i.jsx)(nS, { isExpanded: o, text: c.summary })),
                (a[33] = o),
                (a[34] = c.summary),
                (a[35] = e))
              : (e = a[35]),
            a[36] !== c.actions || a[37] !== u
              ? ((t = (0, i.jsx)(n_, { actions: c.actions, onRunNotificationAction: u })),
                (a[36] = c.actions),
                (a[37] = u),
                (a[38] = t))
              : (t = a[38]),
            a[39] !== e || a[40] !== t
              ? ((n = (0, i.jsxs)("div", { "data-avatar-overlay-compact-waiting-request": "exec", children: [e, t] })),
                (a[39] = e),
                (a[40] = t),
                (a[41] = n))
              : (n = a[41]),
            n
          )
        }
        case "network": {
          let e, t, n
          return (
            a[42] !== o || a[43] !== c.target
              ? ((e = (0, i.jsx)(nS, { isExpanded: o, text: c.target })), (a[42] = o), (a[43] = c.target), (a[44] = e))
              : (e = a[44]),
            a[45] !== c.actions || a[46] !== u
              ? ((t = (0, i.jsx)(n_, { actions: c.actions, onRunNotificationAction: u })),
                (a[45] = c.actions),
                (a[46] = u),
                (a[47] = t))
              : (t = a[47]),
            a[48] !== e || a[49] !== t
              ? ((n = (0, i.jsxs)("div", {
                  "data-avatar-overlay-compact-waiting-request": "network",
                  children: [e, t],
                })),
                (a[48] = e),
                (a[49] = t),
                (a[50] = n))
              : (n = a[50]),
            n
          )
        }
        case "permission": {
          let e, t, n
          return (
            a[51] !== o || a[52] !== c.target
              ? ((e = (0, i.jsx)(nS, { isExpanded: o, text: c.target })), (a[51] = o), (a[52] = c.target), (a[53] = e))
              : (e = a[53]),
            a[54] !== c.actions || a[55] !== u
              ? ((t = (0, i.jsx)(n_, { actions: c.actions, onRunNotificationAction: u })),
                (a[54] = c.actions),
                (a[55] = u),
                (a[56] = t))
              : (t = a[56]),
            a[57] !== e || a[58] !== t
              ? ((n = (0, i.jsxs)("div", {
                  "data-avatar-overlay-compact-waiting-request": "permission",
                  children: [e, t],
                })),
                (a[57] = e),
                (a[58] = t),
                (a[59] = n))
              : (n = a[59]),
            n
          )
        }
        case "tool": {
          let e,
            t,
            n,
            r = c.summary ?? c.target
          return (
            a[60] !== o || a[61] !== r
              ? ((e = (0, i.jsx)(nS, { isExpanded: o, text: r })), (a[60] = o), (a[61] = r), (a[62] = e))
              : (e = a[62]),
            a[63] !== c.actions || a[64] !== u
              ? ((t = (0, i.jsx)(n_, { actions: c.actions, onRunNotificationAction: u })),
                (a[63] = c.actions),
                (a[64] = u),
                (a[65] = t))
              : (t = a[65]),
            a[66] !== e || a[67] !== t
              ? ((n = (0, i.jsxs)("div", { "data-avatar-overlay-compact-waiting-request": "tool", children: [e, t] })),
                (a[66] = e),
                (a[67] = t),
                (a[68] = n))
              : (n = a[68]),
            n
          )
        }
      }
    }
    function nM(e, t) {
      return { label: e.label, tone: 0 === t ? "primary" : "secondary", questionOption: e }
    }
    function nI(e) {
      let t,
        a,
        o,
        r = (0, n.c)(10),
        { isExpanded: l, onRunNotificationAction: s, request: c } = e
      return (
        r[0] !== l || r[1] !== c.summary
          ? ((t = (0, i.jsx)(nS, { isExpanded: l, text: c.summary })), (r[0] = l), (r[1] = c.summary), (r[2] = t))
          : (t = r[2]),
        r[3] !== s || r[4] !== c.actions
          ? ((a = (0, i.jsx)(n_, { actions: c.actions, onRunNotificationAction: s })),
            (r[3] = s),
            (r[4] = c.actions),
            (r[5] = a))
          : (a = r[5]),
        r[6] !== c.kind || r[7] !== t || r[8] !== a
          ? ((o = (0, i.jsxs)("div", { "data-avatar-overlay-compact-waiting-request": c.kind, children: [t, a] })),
            (r[6] = c.kind),
            (r[7] = t),
            (r[8] = a),
            (r[9] = o))
          : (o = r[9]),
        o
      )
    }
    function nS(e) {
      let t,
        a,
        o = (0, n.c)(5),
        { isExpanded: r, text: l } = e,
        s = r ? "break-words whitespace-pre-wrap" : "truncate whitespace-nowrap"
      return (
        o[0] !== s ? ((t = (0, ev.A)("min-w-0 pe-[38px]", s)), (o[0] = s), (o[1] = t)) : (t = o[1]),
        o[2] !== t || o[3] !== l
          ? ((a = (0, i.jsx)("div", {
              className: t,
              "data-avatar-overlay-compact-waiting-summary-text": "true",
              "data-avatar-overlay-overflow-content": "true",
              children: l,
            })),
            (o[2] = t),
            (o[3] = l),
            (o[4] = a))
          : (a = o[4]),
        a
      )
    }
    function nE(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u = (0, n.c)(31),
        { copy: d, files: p, isExpanded: m, summary: f } = e
      if (null == d) return null
      if (!m) {
        let e, t, a, n, o, r
        return (
          u[0] !== d.fileCount
            ? ((e = (0, i.jsx)("span", { children: d.fileCount })), (u[0] = d.fileCount), (u[1] = e))
            : (e = u[1]),
          u[2] !== d.additions
            ? ((t =
                null != d.additions
                  ? (0, i.jsx)("span", { className: "ms-1.5 text-chart-green", children: d.additions })
                  : null),
              (u[2] = d.additions),
              (u[3] = t))
            : (t = u[3]),
          u[4] !== d.deletions
            ? ((a =
                null != d.deletions
                  ? (0, i.jsx)("span", { className: "ms-1.5 text-danger", children: d.deletions })
                  : null),
              (u[4] = d.deletions),
              (u[5] = a))
            : (a = u[5]),
          u[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = (0, i.jsx)(nx.a, { className: "mx-1.5 text-tertiary" })), (u[6] = n))
            : (n = u[6]),
          u[7] !== f ? ((o = (0, i.jsx)("span", { children: f })), (u[7] = f), (u[8] = o)) : (o = u[8]),
          u[9] !== e || u[10] !== t || u[11] !== a || u[12] !== o
            ? ((r = (0, i.jsxs)("div", {
                className: "min-w-0 truncate pe-[38px] whitespace-nowrap",
                "data-avatar-overlay-compact-waiting-summary-text": "true",
                "data-avatar-overlay-overflow-content": "true",
                children: [e, t, a, n, o],
              })),
              (u[9] = e),
              (u[10] = t),
              (u[11] = a),
              (u[12] = o),
              (u[13] = r))
            : (r = u[13]),
          r
        )
      }
      return (
        u[14] !== d.fileCount
          ? ((t = (0, i.jsx)("span", { className: "text-[11px] leading-4", children: d.fileCount })),
            (u[14] = d.fileCount),
            (u[15] = t))
          : (t = u[15]),
        u[16] !== d.additions
          ? ((a =
              null != d.additions
                ? (0, i.jsx)("span", { className: "text-[11px] leading-4 text-chart-green", children: d.additions })
                : null),
            (u[16] = d.additions),
            (u[17] = a))
          : (a = u[17]),
        u[18] !== d.deletions
          ? ((o =
              null != d.deletions
                ? (0, i.jsx)("span", { className: "text-[11px] leading-4 text-danger", children: d.deletions })
                : null),
            (u[18] = d.deletions),
            (u[19] = o))
          : (o = u[19]),
        u[20] !== t || u[21] !== a || u[22] !== o
          ? ((r = (0, i.jsxs)("div", {
              className: "mt-0.5 flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5",
              children: [t, a, o],
            })),
            (u[20] = t),
            (u[21] = a),
            (u[22] = o),
            (u[23] = r))
          : (r = u[23]),
        u[24] !== p ? ((l = p.map(nR)), (u[24] = p), (u[25] = l)) : (l = u[25]),
        u[26] !== l
          ? ((s = (0, i.jsx)("div", { className: "mt-0.5 min-w-0 space-y-0.5", children: l })),
            (u[26] = l),
            (u[27] = s))
          : (s = u[27]),
        u[28] !== r || u[29] !== s
          ? ((c = (0, i.jsxs)("div", {
              "data-avatar-overlay-compact-waiting-summary-text": "true",
              "data-avatar-overlay-overflow-content": "true",
              children: [r, s],
            })),
            (u[28] = r),
            (u[29] = s),
            (u[30] = c))
          : (c = u[30]),
        c
      )
    }
    function nR(e) {
      return (0, i.jsx)("div", { className: "leading-4 break-words", children: e }, e)
    }
    function n_(e) {
      let t,
        a = (0, n.c)(3),
        { actions: o, onRunNotificationAction: r } = e
      return (
        a[0] !== o || a[1] !== r
          ? ((t = (0, i.jsx)("div", {
              className: "mt-3 flex min-w-0 flex-wrap items-center justify-end gap-2 overflow-visible no-drag",
              children: [...o.filter(nO), ...o.filter(nk)].map((e) =>
                (0, i.jsx)(
                  eo.$,
                  {
                    className: (0, ev.A)(
                      "max-w-full min-w-0 enabled:active:hover:opacity-80",
                      "primary" === e.tone && "!bg-chart-blue !text-white enabled:hover:!bg-chart-blue/90",
                    ),
                    color: (function (e) {
                      switch (e) {
                        case "primary":
                          return "primary"
                        case "danger":
                          return "danger"
                        case "secondary":
                          return "secondary"
                      }
                    })(e.tone),
                    size: "activityOption",
                    "aria-label": e.ariaLabel ?? e.label,
                    title: e.ariaLabel ?? e.label,
                    onClick: (t) => {
                      ;(t.stopPropagation(), r(e))
                    },
                    onPointerDown: nT,
                    children: (0, i.jsx)("span", { className: "truncate", children: e.label }),
                  },
                  e.ariaLabel ?? e.label,
                ),
              ),
            })),
            (a[0] = o),
            (a[1] = r),
            (a[2] = t))
          : (t = a[2]),
        t
      )
    }
    function nT(e) {
      e.stopPropagation()
    }
    function nk(e) {
      return "primary" === e.tone
    }
    function nO(e) {
      return "primary" !== e.tone
    }
    var nP = a("O3F3"),
      nN = a("fk6n")
    class nL {
      targets = new Map()
      open = null
      pending = null
      mouseEndTimer
      claim(e) {
        ;(this.open !== e && this.open?.close(), (this.open = e))
      }
      forget(e) {
        ;(this.targets.delete(e.element),
          this.open === e && (this.open = null),
          this.pending?.target === e && this.finish(!0))
      }
      closeOutside(e) {
        ;(e instanceof Node && this.open?.element.contains(e)) || (this.open?.close(), (this.open = null))
      }
      handle(e) {
        if (0 !== e.pressedMouseButtons) return
        if (0 !== e.momentumPhase) {
          ;(8 === e.phase || 16 === e.phase) && this.finish(16 === e.phase)
          return
        }
        if (((1 === e.phase || 32 === e.phase) && this.finish(!0), null == this.pending)) {
          let t = document.elementFromPoint(e.x, e.y),
            a = t?.closest("[data-activity-pill-swipe], [data-message-swipe-reply]"),
            i = null == a ? void 0 : this.targets.get(a)
          this.pending = {
            target: null != t && i?.canStart?.(t) !== !1 ? i : void 0,
            events: [],
            direction: "pending",
            directionMultiplier: e.directionInvertedFromDevice ? -1 : 1,
            source: 0 === e.phase ? "mouse" : "trackpad",
          }
        }
        let t = this.pending
        if ("pending" === t.direction) {
          t.events.push(e)
          let a = t.events.reduce((e, t) => e + Math.abs(t.deltaX), 0),
            i = t.events.reduce((e, t) => e + Math.abs(t.deltaY), 0)
          if (Math.max(a, i) >= 3) {
            if (((t.direction = a > i ? "horizontal" : "vertical"), "horizontal" === t.direction && null != t.target))
              for (let e of (this.claim(t.target),
              t.target.begin(t.source, t.events[0].timestampMs, t.events[0].zoomFactor),
              t.events))
                t.target.update(e.deltaX * t.directionMultiplier, e.timestampMs)
            else "vertical" === t.direction && (this.open?.close(), (this.open = null))
            t.events = []
          }
        } else "horizontal" === t.direction && t.target?.update(e.deltaX * t.directionMultiplier, e.timestampMs)
        8 === e.phase || 16 === e.phase
          ? this.finish(16 === e.phase)
          : "mouse" === t.source &&
            (clearTimeout(this.mouseEndTimer), (this.mouseEndTimer = setTimeout(() => this.finish(!1), 120)))
      }
      finish(e) {
        ;(clearTimeout(this.mouseEndTimer),
          this.pending?.direction === "horizontal" && this.pending.target?.end(e),
          (this.pending = null))
      }
    }
    function nF(e) {
      let t,
        a,
        i,
        o = (0, n.c)(9),
        { input: r, host: l, onAvailabilityChange: s } = e
      o[0] !== s ? ((t = (e) => s?.(e)), (o[0] = s), (o[1] = t)) : (t = o[1])
      let c = (0, g.useEffectEvent)(t)
      return (
        o[2] !== l || o[3] !== r || o[4] !== c
          ? ((a = () => {
              let e = !1,
                t = l?.subscribeScrollEvents((t) => {
                  e || r.handle(t)
                })
              t?.then((t) => {
                ;(e || c(null != t), tZ.v.debug("Avatar overlay swipe input", { safe: { available: null != t } }))
              }).catch(nD)
              let a = (e) => r.closeOutside(e.target),
                i = () => {
                  ;(r.finish(!0), r.closeOutside(null))
                },
                n = (e) => {
                  "Escape" === e.key && i()
                }
              return (
                document.addEventListener("pointerdown", a, !0),
                document.addEventListener("keydown", n),
                window.addEventListener("blur", i),
                () => {
                  ;((e = !0),
                    c(!1),
                    r.finish(!0),
                    document.removeEventListener("pointerdown", a, !0),
                    document.removeEventListener("keydown", n),
                    window.removeEventListener("blur", i),
                    t?.then(nj).catch(nq))
                }
              )
            }),
            (o[2] = l),
            (o[3] = r),
            (o[4] = c),
            (o[5] = a))
          : (a = o[5]),
        o[6] !== l || o[7] !== r ? ((i = [l, r]), (o[6] = l), (o[7] = r), (o[8] = i)) : (i = o[8]),
        (0, g.useEffect)(a, i),
        null
      )
    }
    function nq() {}
    async function nj(e) {
      null != e && (await Promise.resolve(e.unsubscribe()).finally(() => e[Symbol.dispose]()))
    }
    function nD() {}
    var nU = a("be9B")
    function nH(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        p,
        m,
        f,
        h,
        g,
        v,
        y,
        w,
        b,
        C,
        x,
        A,
        M,
        I = (0, n.c)(48)
      I[0] !== e
        ? (({
            ref: u,
            anchorY: t,
            offsetX: l,
            presentedPlacement: c,
            animatesPresentation: a,
            children: o,
            isTranscriptVisible: r,
            transcript: m,
            transcriptHeight: f,
            workAreaTop: h,
            onGeometryAnimationFrame: s,
            ...p
          } = e),
          (I[0] = e),
          (I[1] = t),
          (I[2] = a),
          (I[3] = o),
          (I[4] = r),
          (I[5] = l),
          (I[6] = s),
          (I[7] = c),
          (I[8] = u),
          (I[9] = p),
          (I[10] = m),
          (I[11] = f),
          (I[12] = h))
        : ((t = I[1]),
          (a = I[2]),
          (o = I[3]),
          (r = I[4]),
          (l = I[5]),
          (s = I[6]),
          (c = I[7]),
          (u = I[8]),
          (p = I[9]),
          (m = I[10]),
          (f = I[11]),
          (h = I[12]))
      let S = !0 === p.isOrbitTranscript,
        E = p.orbitTranscriptPlacement,
        R = (0, ef.I)()
      I[13] !== t || I[14] !== r || I[15] !== E || I[16] !== c || I[17] !== f || I[18] !== h
        ? ((g = () =>
            r
              ? null != E
                ? (c?.get() ?? E).composerTop - t.get()
                : f.get() > 0
                  ? Math.max(0, h + d.Zkw + f.get() + 20 - t.get())
                  : 0
              : 0),
          (I[13] = t),
          (I[14] = r),
          (I[15] = E),
          (I[16] = c),
          (I[17] = f),
          (I[18] = h),
          (I[19] = g))
        : (g = I[19])
      let _ = (0, ew.G)(g)
      I[20] !== S ? ((v = (0, tr.P)(!0, S)), (I[20] = S), (I[21] = v)) : (v = I[21])
      let T = (0, ns.z)(_, v)
      I[22] !== T || I[23] !== a || I[24] !== S || I[25] !== R || I[26] !== _
        ? ((y = () => (S || R || !a ? _.get() : T.get())),
          (I[22] = T),
          (I[23] = a),
          (I[24] = S),
          (I[25] = R),
          (I[26] = _),
          (I[27] = y))
        : (y = I[27])
      let k = (0, ew.G)(y),
        O = null == E && r ? l : 0,
        P = null == E ? k : 0
      ;(I[28] !== O || I[29] !== P ? ((w = { x: O, y: P }), (I[28] = O), (I[29] = P), (I[30] = w)) : (w = I[30]),
        I[31] !== s || I[32] !== w || I[33] !== m
          ? ((b = (0, i.jsx)(eh.P.div, {
              className: "pointer-events-none absolute inset-0",
              style: w,
              onUpdate: s,
              children: m,
            })),
            (I[31] = s),
            (I[32] = w),
            (I[33] = m),
            (I[34] = b))
          : (b = I[34]))
      let N = r ? l : 0
      return (
        I[35] !== N || I[36] !== k ? ((C = { x: N, y: k }), (I[35] = N), (I[36] = k), (I[37] = C)) : (C = I[37]),
        I[38] !== o
          ? ((x = (0, i.jsx)("div", { className: "pointer-events-auto contents", children: o })),
            (I[38] = o),
            (I[39] = x))
          : (x = I[39]),
        I[40] !== s || I[41] !== x || I[42] !== C
          ? ((A = (0, i.jsx)(eh.P.div, {
              className: "pointer-events-none relative h-full w-full",
              "data-avatar-overlay-content-frame": "true",
              style: C,
              onUpdate: s,
              children: x,
            })),
            (I[40] = s),
            (I[41] = x),
            (I[42] = C),
            (I[43] = A))
          : (A = I[43]),
        I[44] !== u || I[45] !== A || I[46] !== b
          ? ((M = (0, i.jsxs)("section", { ref: u, className: "relative h-full w-full", children: [b, A] })),
            (I[44] = u),
            (I[45] = A),
            (I[46] = b),
            (I[47] = M))
          : (M = I[47]),
        M
      )
    }
    var nB = a("mkai"),
      nV = a("L0k3"),
      nz = a("P2D5")
    function nY(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u = (0, n.c)(17),
        { active: d, children: p, composerProgress: m, expandsFromTop: f } = e,
        h = (0, ef.I)(),
        v = (0, ea.tF)() && (void 0 === d || d),
        y = (0, ey.d)(+!!h)
      u[0] !== m || u[1] !== y
        ? ((t = () => {
            let e, t, a, i, n, o, r, l, s, c, u, d
            return (
              (e = !1),
              (t = !1),
              (a = !0),
              (i = !1),
              (n = !1),
              (o = null),
              (r = new Set()),
              (l = new Set()),
              (s = new Set()),
              (c = new Set()),
              (u = (e, t) => {
                l.has(e) !== t && (t ? l.add(e) : l.delete(e), (0, nz.Dn)(e, t ? () => !1 : null))
              }),
              (d = (l) => {
                if (((o = l), (n = !0), !a)) return
                if (!t)
                  for (let e of o?.querySelectorAll("[data-orb-message]") ?? [])
                    r.has(e) || ((e.style.opacity = "0"), u(e, !0))
                if (c.size > 0) return
                let d = requestAnimationFrame(() => {
                  ;(c.delete(d),
                    (() => {
                      let a = !i,
                        n = Array.from(o?.querySelectorAll("[data-orb-message]") ?? []).filter((e) => !r.has(e))
                      for (let e of n) r.add(e)
                      let l = o?.querySelector('[role="log"]')?.getBoundingClientRect(),
                        c = n.filter((e) => {
                          let t = e.getBoundingClientRect()
                          return null == l || (t.bottom > l.top && t.top < l.bottom)
                        })
                      for (let e of n) c.includes(e) || (e.style.removeProperty("opacity"), u(e, !1))
                      let d = e ? c : c.toReversed()
                      if (
                        (c.length > 0 && (i = !0),
                        d.forEach((i, n) => {
                          if (i.hasAttribute("data-message-send-animating") || t) {
                            ;(i.style.removeProperty("opacity"), u(i, !1))
                            return
                          }
                          i.style.transformOrigin = e ? "top" : "bottom"
                          let o = a ? 0.032 + 0.048 * n : 0,
                            r = (0, eR.i)([
                              [
                                i,
                                {
                                  opacity: [0, 1],
                                  transform: [`translateY(${e ? -12 : 12}px) scale(0.98)`, "translateY(0px) scale(1)"],
                                },
                                a && ("function" != typeof i.animate || (0, nV.n)())
                                  ? { type: "spring", visualDuration: 0.32, bounce: 0.3, at: o }
                                  : { duration: a ? 0.3 : 0.16, ease: "easeOut", at: o },
                              ],
                            ])
                          ;((0, nz.Dn)(i, () => r.time > o),
                            s.add(r),
                            r.then(() => {
                              s.delete(r) && u(i, !1)
                            }))
                        }),
                        !a)
                      )
                        return
                      if (t) {
                        ;(y.set(1), m.set(1))
                        return
                      }
                      let p = 0 === c.length ? 0 : 0.032 + (c.length - 1) * 0.048
                      ;(s.add(
                        (0, eR.i)(
                          y,
                          1,
                          e
                            ? { type: "spring", visualDuration: 0.32, bounce: 0.3, delay: 0.032 * (0 !== c.length) }
                            : { duration: 0.08, ease: "easeOut", delay: p },
                        ),
                      ),
                        s.add(
                          (0, eR.i)(m, 1, {
                            type: "spring",
                            visualDuration: 0.32,
                            bounce: 0.25,
                            delay: 0 === c.length ? 0 : p + 0.048,
                          }),
                        ))
                    })())
                })
                c.add(d)
              }),
              {
                headerOpacity: y,
                reveal: d,
                setDirection(t) {
                  e = t
                },
                start(l, s) {
                  if (((t = l), (a = s), (i = !1), s)) {
                    for (let e of r)
                      (e.style.removeProperty("opacity"),
                        e.style.removeProperty("transform"),
                        e.style.removeProperty("transform-origin"),
                        u(e, !1))
                    r.clear()
                  }
                  ;(m.set(s && e && !l ? 0 : 1), s && y.set(+!!l), n && s && d(o))
                },
                stop() {
                  for (let e of s) e.stop()
                  for (let e of c) cancelAnimationFrame(e)
                  for (let e of (c.clear(), s.clear(), l)) u(e, !1)
                  m.set(1)
                },
              }
            )
          }),
          (u[0] = m),
          (u[1] = y),
          (u[2] = t))
        : (t = u[2])
      let [w] = (0, g.useState)(t)
      return (
        u[3] !== w || u[4] !== f
          ? ((a = () => {
              w.setDirection(f)
            }),
            (o = [w, f]),
            (u[3] = w),
            (u[4] = f),
            (u[5] = a),
            (u[6] = o))
          : ((a = u[5]), (o = u[6])),
        (0, g.useLayoutEffect)(a, o),
        u[7] !== w || u[8] !== v || u[9] !== h
          ? ((r = () => (w.start(!!h, v), () => w.stop())),
            (l = [w, h, v]),
            (u[7] = w),
            (u[8] = v),
            (u[9] = h),
            (u[10] = r),
            (u[11] = l))
          : ((r = u[10]), (l = u[11])),
        (0, g.useLayoutEffect)(r, l),
        u[12] !== p || u[13] !== w ? ((s = p(w)), (u[12] = p), (u[13] = w), (u[14] = s)) : (s = u[14]),
        u[15] !== s ? ((c = (0, i.jsx)(i.Fragment, { children: s })), (u[15] = s), (u[16] = c)) : (c = u[16]),
        c
      )
    }
    function nW(e) {
      let t,
        a,
        o,
        r,
        s,
        c,
        u,
        d,
        p,
        m,
        f,
        h,
        v,
        y,
        w,
        b,
        C,
        x,
        A,
        M,
        I,
        S,
        E,
        R,
        _,
        T,
        k,
        O,
        P,
        N,
        L,
        F,
        q,
        j,
        D,
        U,
        H,
        B,
        V,
        z,
        Y,
        W,
        X = (0, n.c)(153),
        {
          active: G,
          anchorY: $,
          children: K,
          header: Q,
          composerProgress: Z,
          expandsFromTop: J,
          isVisible: ee,
          tray: et,
          measuredHeight: ei,
          presentedPlacement: en,
          onLostPointerCapture: eo,
          onPointerCancel: er,
          onPointerDown: el,
          onPointerEnter: es,
          onPointerLeave: ec,
          onPointerMove: eu,
          onPointerUp: ed,
          onGeometryAnimationFrame: ep,
        } = e,
        em = void 0 !== J && J,
        ey = (0, ef.I)(),
        [eb, eC] = (0, g.useState)(null),
        ex = G && null != et,
        eA = (0, ea.tF)() && ex
      X[0] !== em || X[1] !== et
        ? ((t = { tray: et, expandsFromTop: em }), (X[0] = em), (X[1] = et), (X[2] = t))
        : (t = X[2])
      let [eM, eI] = (0, g.useState)(t)
      ex && (!l()(et, eM.tray) || em !== eM.expandsFromTop) && eI({ tray: et, expandsFromTop: em })
      let eS = ex ? et : eM.tray,
        eE = ex ? em : eM.expandsFromTop,
        [eR, e_] = (0, g.useState)(!ex)
      ex && eR && e_(!1)
      let eT = null != eS
      X[3] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, tr.P)(!0)), (X[3] = a)) : (a = X[3])
      let ek = (0, ns.z)(0, a),
        eO = (0, g.useRef)(null),
        eP = (0, g.useRef)(null),
        [eN, eL] = (0, g.useState)(0)
      ;(X[4] !== ex || X[5] !== ek || X[6] !== eT || X[7] !== ei || X[8] !== ey
        ? ((o = () =>
            ex && eT
              ? (0, i_.J)({
                  target: eO.current,
                  axis: "height",
                  onChange: (e) => {
                    let { height: t } = e
                    ;(ei.set(t), ey ? ek.jump(t) : ek.set(t))
                  },
                })
              : void 0),
          (r = [ex, ek, eT, ei, ey]),
          (X[4] = ex),
          (X[5] = ek),
          (X[6] = eT),
          (X[7] = ei),
          (X[8] = ey),
          (X[9] = o),
          (X[10] = r))
        : ((o = X[9]), (r = X[10])),
        (0, g.useLayoutEffect)(o, r),
        X[11] !== ex || X[12] !== eT
          ? ((s = () =>
              ex && eT
                ? (0, i_.J)({
                    target: eP.current,
                    axis: "height",
                    onChange: (e) => {
                      let { height: t } = e
                      return eL(t)
                    },
                  })
                : void 0),
            (c = [ex, eT]),
            (X[11] = ex),
            (X[12] = eT),
            (X[13] = s),
            (X[14] = c))
          : ((s = X[13]), (c = X[14])),
        (0, g.useLayoutEffect)(s, c),
        X[15] !== ex || X[16] !== $ || X[17] !== Q || X[18] !== en || X[19] !== eS?.height || X[20] !== eS?.top
          ? ((u = () =>
              null == Q ? $.get() - 20 - (eS?.height ?? 0) : ((ex ? en?.get()?.top : void 0) ?? eS?.top ?? 0)),
            (X[15] = ex),
            (X[16] = $),
            (X[17] = Q),
            (X[18] = en),
            (X[19] = eS?.height),
            (X[20] = eS?.top),
            (X[21] = u))
          : (u = X[21]))
      let eF = (0, ew.G)(u)
      X[22] !== ex || X[23] !== Q || X[24] !== en || X[25] !== eS?.height
        ? ((d = () => (ex && null != Q ? en?.get()?.height : void 0) ?? eS?.height),
          (X[22] = ex),
          (X[23] = Q),
          (X[24] = en),
          (X[25] = eS?.height),
          (X[26] = d))
        : (d = X[26])
      let eq = (0, ew.G)(d)
      X[27] !== Q || X[28] !== en
        ? ((p = () => {
            let e = en?.get()
            return null == Q || null == e ? "0px" : `${Math.max(0, e.top + e.height + 20 - e.composerTop)}px`
          }),
          (X[27] = Q),
          (X[28] = en),
          (X[29] = p))
        : (p = X[29])
      let ej = (0, ew.G)(p),
        eD = (0, ew.G)(ek, nX)
      X[30] !== ey ? ((m = ey ? { duration: 0 } : (0, tr.P)(!0)), (X[30] = ey), (X[31] = m)) : (m = X[31])
      let eU = m
      if (
        X[32] !== ex ||
        X[33] !== eD ||
        X[34] !== K ||
        X[35] !== ej ||
        X[36] !== Z ||
        X[37] !== eE ||
        X[38] !== eT ||
        X[39] !== Q ||
        X[40] !== eN ||
        X[41] !== eq ||
        X[42] !== eR ||
        X[43] !== eA ||
        X[44] !== ee ||
        X[45] !== ep ||
        X[46] !== eo ||
        X[47] !== er ||
        X[48] !== el ||
        X[49] !== es ||
        X[50] !== ec ||
        X[51] !== eu ||
        X[52] !== ed ||
        X[53] !== eU ||
        X[54] !== ey ||
        X[55] !== eS?.height ||
        X[56] !== eS?.left ||
        X[57] !== eS?.width ||
        X[58] !== eb ||
        X[59] !== eF
      ) {
        let e,
          t,
          a,
          n,
          o,
          r = (e) =>
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsx)(eg.N, {
                  children: ex
                    ? (0, i.jsx)(
                        eh.P.div,
                        {
                          ref: eP,
                          className: null == Q ? "h-0 overflow-hidden" : "relative z-10 shrink-0 pb-3",
                          "data-avatar-overlay-size": ex && eT ? "notification-tray-header" : void 0,
                          initial: !1,
                          exit: { opacity: 0 },
                          transition: { duration: 0.128 * !ey, ease: "easeOut" },
                          children: Q?.(e),
                        },
                        "header",
                      )
                    : null,
                }),
                (0, i.jsx)(eh.P.div, {
                  className: null == Q ? void 0 : "mt-auto min-h-0",
                  initial: null != Q && !ey && { opacity: 0, transform: `translateY(${eE ? -40 : 40}px) scale(0.94)` },
                  animate: ex ? "open" : "closed",
                  variants: {
                    open: { opacity: 1, transform: "translateY(0px) scale(1)" },
                    closed: {
                      opacity: 0,
                      transform: ey || null == Q ? "translateY(0px) scale(1)" : "translateY(0px) scale(0.94)",
                    },
                  },
                  onAnimationComplete: (e) => {
                    ex || "closed" !== e || e_(!0)
                  },
                  exit:
                    null == Q
                      ? void 0
                      : { opacity: 0, transform: ey ? "translateY(0px) scale(1)" : "translateY(0px) scale(0.94)" },
                  transition: ey ? { duration: 0 } : { type: "spring", visualDuration: 0.44, bounce: 0.22 },
                  style: { transformOrigin: eE ? "top" : "bottom" },
                  children: K(Math.max(0, (eS?.height ?? 0) - (null == Q ? 0 : eN)), e),
                }),
              ],
            }),
          l = eS?.left,
          s = eS?.width
        X[88] !== ej || X[89] !== eq || X[90] !== l || X[91] !== s || X[92] !== eF
          ? ((e = { left: l, top: 0, width: s, height: eq, y: eF, "--mini-transcript-bottom-inset": ej }),
            (X[88] = ej),
            (X[89] = eq),
            (X[90] = l),
            (X[91] = s),
            (X[92] = eF),
            (X[93] = e))
          : (e = X[93])
        let c = e
        ;((B = eR || !eT), (h = eh.P.div), (A = eC), (M = !ee || !eA || void 0))
        let u = !ee && "invisible"
        ;(X[94] !== u
          ? ((I = (0, ev.A)(
              "pointer-events-auto absolute flex cursor-interaction flex-col justify-end text-sm text-default",
              u,
            )),
            (X[94] = u),
            (X[95] = I))
          : (I = X[95]),
          (S = !ee || !eA),
          (E = null != Q || void 0),
          (R = ex && eT ? "notification-tray" : void 0),
          X[96] !== Q || X[97] !== ey
            ? ((_ = null == Q && !ey && { opacity: 0 }), (X[96] = Q), (X[97] = ey), (X[98] = _))
            : (_ = X[98]),
          X[99] === Symbol.for("react.memo_cache_sentinel") ? ((T = { opacity: 1 }), (X[99] = T)) : (T = X[99]))
        let d = ey || null == Q || eE ? 0 : 0.096
        ;(X[100] !== d
          ? ((k = { opacity: 0, transition: { duration: d, ease: "easeOut" } }), (X[100] = d), (X[101] = k))
          : (k = X[101]),
          (O = eU),
          (P = c),
          (N = eo),
          (L = er),
          (F = el),
          (q = es),
          (j = ec),
          (D = eu),
          (U = ed),
          (H = ep),
          (w = eO))
        let p = null != Q && "flex h-full flex-col"
        ;(X[102] !== p ? ((b = (0, ev.A)("relative isolate", p)), (X[102] = p), (X[103] = b)) : (b = X[103]),
          (C = ex && eT && ee ? "notification-tray" : void 0))
        let m = !ey && (eE ? "AnimatedBackdropFromTop-OBGjyb" : "AnimatedBackdrop-WgsOUB")
        ;(X[104] !== m
          ? ((t = (0, ev.A)("pointer-events-none absolute -z-10", "Backdrop-c_MHKt", m)), (X[104] = m), (X[105] = t))
          : (t = X[105]),
          X[106] !== ey ? ((a = !ey && { opacity: 0 }), (X[106] = ey), (X[107] = a)) : (a = X[107]))
        let g = ex && ee ? 1 : 0
        X[108] !== g ? ((n = { opacity: g }), (X[108] = g), (X[109] = n)) : (n = X[109])
        let V = ey ? void 0 : eD
        ;(X[110] !== V ? ((o = { height: V }), (X[110] = V), (X[111] = o)) : (o = X[111]),
          X[112] !== eU || X[113] !== t || X[114] !== a || X[115] !== n || X[116] !== o
            ? ((x = (0, i.jsx)(eh.P.div, {
                className: t,
                "aria-hidden": !0,
                initial: a,
                animate: n,
                transition: eU,
                style: o,
              })),
              (X[112] = eU),
              (X[113] = t),
              (X[114] = a),
              (X[115] = n),
              (X[116] = o),
              (X[117] = x))
            : (x = X[117]),
          (f = nB.C),
          (v = eb),
          (y =
            null != Q && null != Z
              ? (0, i.jsx)(nY, { active: ex, composerProgress: Z, expandsFromTop: eE, children: r })
              : r()),
          (X[32] = ex),
          (X[33] = eD),
          (X[34] = K),
          (X[35] = ej),
          (X[36] = Z),
          (X[37] = eE),
          (X[38] = eT),
          (X[39] = Q),
          (X[40] = eN),
          (X[41] = eq),
          (X[42] = eR),
          (X[43] = eA),
          (X[44] = ee),
          (X[45] = ep),
          (X[46] = eo),
          (X[47] = er),
          (X[48] = el),
          (X[49] = es),
          (X[50] = ec),
          (X[51] = eu),
          (X[52] = ed),
          (X[53] = eU),
          (X[54] = ey),
          (X[55] = eS?.height),
          (X[56] = eS?.left),
          (X[57] = eS?.width),
          (X[58] = eb),
          (X[59] = eF),
          (X[60] = f),
          (X[61] = h),
          (X[62] = v),
          (X[63] = y),
          (X[64] = w),
          (X[65] = b),
          (X[66] = C),
          (X[67] = x),
          (X[68] = A),
          (X[69] = M),
          (X[70] = I),
          (X[71] = S),
          (X[72] = E),
          (X[73] = R),
          (X[74] = _),
          (X[75] = T),
          (X[76] = k),
          (X[77] = O),
          (X[78] = P),
          (X[79] = N),
          (X[80] = L),
          (X[81] = F),
          (X[82] = q),
          (X[83] = j),
          (X[84] = D),
          (X[85] = U),
          (X[86] = H),
          (X[87] = B))
      } else
        ((f = X[60]),
          (h = X[61]),
          (v = X[62]),
          (y = X[63]),
          (w = X[64]),
          (b = X[65]),
          (C = X[66]),
          (x = X[67]),
          (A = X[68]),
          (M = X[69]),
          (I = X[70]),
          (S = X[71]),
          (E = X[72]),
          (R = X[73]),
          (_ = X[74]),
          (T = X[75]),
          (k = X[76]),
          (O = X[77]),
          (P = X[78]),
          (N = X[79]),
          (L = X[80]),
          (F = X[81]),
          (q = X[82]),
          (j = X[83]),
          (D = X[84]),
          (U = X[85]),
          (H = X[86]),
          (B = X[87]))
      return (
        X[118] !== f || X[119] !== v || X[120] !== y
          ? ((V = (0, i.jsx)(f, { value: v, children: y })), (X[118] = f), (X[119] = v), (X[120] = y), (X[121] = V))
          : (V = X[121]),
        X[122] !== w || X[123] !== b || X[124] !== C || X[125] !== x || X[126] !== V
          ? ((z = (0, i.jsxs)("div", { ref: w, className: b, "data-avatar-overlay-hit-region": C, children: [x, V] })),
            (X[122] = w),
            (X[123] = b),
            (X[124] = C),
            (X[125] = x),
            (X[126] = V),
            (X[127] = z))
          : (z = X[127]),
        X[128] !== h ||
        X[129] !== A ||
        X[130] !== M ||
        X[131] !== I ||
        X[132] !== S ||
        X[133] !== E ||
        X[134] !== R ||
        X[135] !== _ ||
        X[136] !== T ||
        X[137] !== k ||
        X[138] !== O ||
        X[139] !== P ||
        X[140] !== N ||
        X[141] !== L ||
        X[142] !== F ||
        X[143] !== q ||
        X[144] !== j ||
        X[145] !== D ||
        X[146] !== U ||
        X[147] !== H ||
        X[148] !== z
          ? ((Y = (0, i.jsx)(h, {
              ref: A,
              "aria-hidden": M,
              className: I,
              inert: S,
              "data-avatar-overlay-orbit-transcript": E,
              "data-avatar-overlay-size": R,
              initial: _,
              animate: T,
              exit: k,
              transition: O,
              style: P,
              onLostPointerCapture: N,
              onPointerCancel: L,
              onPointerDown: F,
              onPointerEnter: q,
              onPointerLeave: j,
              onPointerMove: D,
              onPointerUp: U,
              onUpdate: H,
              children: z,
            })),
            (X[128] = h),
            (X[129] = A),
            (X[130] = M),
            (X[131] = I),
            (X[132] = S),
            (X[133] = E),
            (X[134] = R),
            (X[135] = _),
            (X[136] = T),
            (X[137] = k),
            (X[138] = O),
            (X[139] = P),
            (X[140] = N),
            (X[141] = L),
            (X[142] = F),
            (X[143] = q),
            (X[144] = j),
            (X[145] = D),
            (X[146] = U),
            (X[147] = H),
            (X[148] = z),
            (X[149] = Y))
          : (Y = X[149]),
        X[150] !== B || X[151] !== Y
          ? ((W = (0, i.jsx)("div", { hidden: B, children: Y })), (X[150] = B), (X[151] = Y), (X[152] = W))
          : (W = X[152]),
        W
      )
    }
    function nX(e) {
      return e + 80
    }
    let nG = (0, w.YK)({
        mascotLabel: {
          id: "petOverlay.mascotLabel",
          defaultMessage: "{petName} pet",
          description: "Accessible label for the floating Codex pet",
        },
        replyNotification: {
          id: "avatarOverlay.replyNotification",
          defaultMessage: "Reply to {title}",
          description: "Accessible label for replying to a floating avatar notification",
        },
        stopNotification: {
          id: "avatarOverlay.stopNotification",
          defaultMessage: "Stop {title}",
          description: "Accessible label for stopping a running task from the floating avatar notification tray",
        },
        quickChat: {
          id: "avatarOverlay.quickChat",
          defaultMessage: "Chat",
          description: "Accessible label for the floating pet chat input",
        },
        sendQuickChat: {
          id: "avatarOverlay.sendQuickChat",
          defaultMessage: "Send chat",
          description: "Accessible label for submitting a floating pet chat",
        },
        askPlaceholder: {
          id: "avatarOverlay.askPlaceholder",
          defaultMessage: "Ask",
          description: "Placeholder for Quick Chat when the floating pet is idle",
        },
        startNewTaskPlaceholder: {
          id: "avatarOverlay.startNewTaskPlaceholder",
          defaultMessage: "Start new chat",
          description: "Placeholder for Quick Chat when the floating pet has activity",
        },
        quickChatError: {
          id: "avatarOverlay.quickChatError",
          defaultMessage: "Unable to start chat",
          description: "Compact error shown when floating pet Quick Chat fails",
        },
        notificationList: {
          id: "avatarOverlay.notificationList",
          defaultMessage: "Activity notifications",
          description: "Accessible label for the list of floating avatar activity notifications",
        },
      }),
      n$ = { opacity: a5.iN, scale: { damping: 22, mass: 0.82, stiffness: 300, type: "spring" } }
    function nK(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        p,
        m,
        f,
        h,
        v,
        w,
        b,
        C,
        x,
        A,
        M,
        I,
        S,
        E,
        R,
        _,
        T,
        k,
        O,
        P,
        N,
        L,
        F,
        q,
        j,
        D,
        U,
        H,
        B,
        V,
        z,
        Y,
        W,
        X,
        G,
        $,
        Q,
        ee,
        et,
        ea,
        ei,
        en,
        eo,
        er,
        el,
        es,
        ec,
        eu,
        ed,
        ep,
        em,
        eb,
        eC,
        ex,
        eA,
        eM,
        eI,
        eS,
        eE,
        eR,
        e_,
        eT,
        ek,
        eP,
        eN,
        eL,
        eF,
        eq,
        ej,
        eD,
        eU,
        eH,
        eB,
        eV,
        ez,
        eY,
        eW,
        eX,
        eG,
        e$,
        eK,
        eQ,
        eZ,
        eJ,
        e0,
        e1,
        e2,
        e3,
        e4,
        e5,
        e6,
        e7,
        e8,
        e9,
        te,
        tt,
        ta,
        ti,
        tn,
        to,
        tr,
        tl,
        ts,
        tc,
        tu,
        td,
        tp,
        tm,
        th,
        tg,
        tv,
        ty,
        tw,
        tb,
        tC,
        tx,
        tA,
        tM,
        tI,
        tS,
        tE,
        tR,
        t_,
        tT,
        tk,
        tO,
        tP,
        tN,
        tL,
        tF,
        tq = (0, n.c)(494)
      tq[0] !== e
        ? (({
            activitySwipeHost: o,
            animatesQuickChatPresentation: eM,
            activityCopies: t,
            activityStackPresentation: a,
            areActivityPillsVisible: eF,
            areActivityPillsPresent: eU,
            avatar: r,
            avatarMenuItems: l,
            petAnimationPaused: ee,
            debugWindowBorderVisible: eH,
            expandedNotificationIds: eB,
            interactiveRegionRef: m,
            isNotificationTrayOpen: eV,
            layout: f,
            mascotDragState: h,
            mascotStyle: v,
            isRealtimeNativeOverlayEnabled: ez,
            cssOrbGlowEnabled: eY,
            notificationStackContentExpanded: b,
            notificationStackControlsVisible: eW,
            notifications: C,
            notificationStackItemCount: ei,
            notificationFollowUp: w,
            orbitPreviewLayout: ex,
            arePresentationAccessoriesVisible: eI,
            quickChatDictation: el,
            dictationAudio: s,
            dictationHistory: c,
            onActivityStackScroll: M,
            onActivityPillsHidden: A,
            onActivateNotification: x,
            onNotificationPointerEnter: L,
            onHideActivityPills: R,
            onMascotLostPointerCapture: _,
            onMascotPointerCancel: T,
            onMascotPointerDown: k,
            onMascotPointerMove: O,
            onMascotPointerUp: P,
            onPetAreaHoverChange: q,
            onNotificationExpansionChange: N,
            onDismissNotification: S,
            onOpenNotificationActions: F,
            onRunNotificationControl: X,
            onRunNotificationAction: W,
            onSubmitQuestionOption: $,
            onQuickChatFocusChange: U,
            onContextMenuOpenChange: I,
            onQuickChatOpen: H,
            onQuickChatDraftChange: j,
            onRemoveQuickChatAppshots: z,
            onQuickChatVisibilityChange: B,
            onQuickChatVoiceSelectionChange: V,
            onQuickChatFlightComplete: D,
            onSubmitQuickChat: Q,
            quickChatReply: eu,
            onRemoveQuickChatReply: Y,
            onGeometryAnimationFrame: E,
            onShowActivityPills: G,
            quickChatAppshots: eo,
            getQuickChatAttachmentActions: p,
            quickChatComposerReplacement: er,
            quickChatFileAttachments: ec,
            quickChatThreadTarget: ep,
            quickChatAppshotCapturePending: eS,
            quickChatAppshotCaptureResponse: en,
            quickChatAppshotCaptureStartsCollapsed: eE,
            quickChatDraft: es,
            quickChatFlights: eR,
            quickChatEnabled: e_,
            quickChatStashEnabled: eT,
            isQuickChatPetVisible: ek,
            quickChatStyleEnabled: eP,
            petControlsExpanded: et,
            quickChatExpanded: eN,
            quickChatStashAppearance: ed,
            stashAttentionAnimation: eA,
            quickChatEditorActive: eL,
            quickChatFocusRequested: eq,
            quickChatCompositionDeferral: ej,
            quickChatVisible: em,
            quickChatVoiceSelected: eD,
            presentation: ea,
            realtimeVoiceSurface: eb,
            ...eC
          } = e),
          (tq[0] = e),
          (tq[1] = t),
          (tq[2] = a),
          (tq[3] = o),
          (tq[4] = r),
          (tq[5] = l),
          (tq[6] = s),
          (tq[7] = c),
          (tq[8] = p),
          (tq[9] = m),
          (tq[10] = f),
          (tq[11] = h),
          (tq[12] = v),
          (tq[13] = w),
          (tq[14] = b),
          (tq[15] = C),
          (tq[16] = x),
          (tq[17] = A),
          (tq[18] = M),
          (tq[19] = I),
          (tq[20] = S),
          (tq[21] = E),
          (tq[22] = R),
          (tq[23] = _),
          (tq[24] = T),
          (tq[25] = k),
          (tq[26] = O),
          (tq[27] = P),
          (tq[28] = N),
          (tq[29] = L),
          (tq[30] = F),
          (tq[31] = q),
          (tq[32] = j),
          (tq[33] = D),
          (tq[34] = U),
          (tq[35] = H),
          (tq[36] = B),
          (tq[37] = V),
          (tq[38] = z),
          (tq[39] = Y),
          (tq[40] = W),
          (tq[41] = X),
          (tq[42] = G),
          (tq[43] = $),
          (tq[44] = Q),
          (tq[45] = ee),
          (tq[46] = et),
          (tq[47] = ea),
          (tq[48] = ei),
          (tq[49] = en),
          (tq[50] = eo),
          (tq[51] = er),
          (tq[52] = el),
          (tq[53] = es),
          (tq[54] = ec),
          (tq[55] = eu),
          (tq[56] = ed),
          (tq[57] = ep),
          (tq[58] = em),
          (tq[59] = eb),
          (tq[60] = eC),
          (tq[61] = ex),
          (tq[62] = eA),
          (tq[63] = eM),
          (tq[64] = eI),
          (tq[65] = eS),
          (tq[66] = eE),
          (tq[67] = eR),
          (tq[68] = e_),
          (tq[69] = eT),
          (tq[70] = ek),
          (tq[71] = eP),
          (tq[72] = eN),
          (tq[73] = eL),
          (tq[74] = eF),
          (tq[75] = eq),
          (tq[76] = ej),
          (tq[77] = eD),
          (tq[78] = eU),
          (tq[79] = eH),
          (tq[80] = eB),
          (tq[81] = eV),
          (tq[82] = ez),
          (tq[83] = eY),
          (tq[84] = eW))
        : ((t = tq[1]),
          (a = tq[2]),
          (o = tq[3]),
          (r = tq[4]),
          (l = tq[5]),
          (s = tq[6]),
          (c = tq[7]),
          (p = tq[8]),
          (m = tq[9]),
          (f = tq[10]),
          (h = tq[11]),
          (v = tq[12]),
          (w = tq[13]),
          (b = tq[14]),
          (C = tq[15]),
          (x = tq[16]),
          (A = tq[17]),
          (M = tq[18]),
          (I = tq[19]),
          (S = tq[20]),
          (E = tq[21]),
          (R = tq[22]),
          (_ = tq[23]),
          (T = tq[24]),
          (k = tq[25]),
          (O = tq[26]),
          (P = tq[27]),
          (N = tq[28]),
          (L = tq[29]),
          (F = tq[30]),
          (q = tq[31]),
          (j = tq[32]),
          (D = tq[33]),
          (U = tq[34]),
          (H = tq[35]),
          (B = tq[36]),
          (V = tq[37]),
          (z = tq[38]),
          (Y = tq[39]),
          (W = tq[40]),
          (X = tq[41]),
          (G = tq[42]),
          ($ = tq[43]),
          (Q = tq[44]),
          (ee = tq[45]),
          (et = tq[46]),
          (ea = tq[47]),
          (ei = tq[48]),
          (en = tq[49]),
          (eo = tq[50]),
          (er = tq[51]),
          (el = tq[52]),
          (es = tq[53]),
          (ec = tq[54]),
          (eu = tq[55]),
          (ed = tq[56]),
          (ep = tq[57]),
          (em = tq[58]),
          (eb = tq[59]),
          (eC = tq[60]),
          (ex = tq[61]),
          (eA = tq[62]),
          (eM = tq[63]),
          (eI = tq[64]),
          (eS = tq[65]),
          (eE = tq[66]),
          (eR = tq[67]),
          (e_ = tq[68]),
          (eT = tq[69]),
          (ek = tq[70]),
          (eP = tq[71]),
          (eN = tq[72]),
          (eL = tq[73]),
          (eF = tq[74]),
          (eq = tq[75]),
          (ej = tq[76]),
          (eD = tq[77]),
          (eU = tq[78]),
          (eH = tq[79]),
          (eB = tq[80]),
          (eV = tq[81]),
          (ez = tq[82]),
          (eY = tq[83]),
          (eW = tq[84]))
      let tj = void 0 === eM || eM,
        tD = void 0 === eF || eF,
        tU = void 0 === eU ? tD : eU,
        tH = void 0 !== eH && eH
      tq[85] !== eB ? ((eX = void 0 === eB ? [] : eB), (tq[85] = eB), (tq[86] = eX)) : (eX = tq[86])
      let tB = eX,
        tV = void 0 === eV || eV,
        tz = void 0 !== ez && ez,
        tY = void 0 === eY || eY,
        tW = void 0 === eW || eW,
        tX = void 0 === eI || eI,
        tG = void 0 !== eS && eS,
        t$ = void 0 !== eE && eE,
        tK = void 0 === eR ? [] : eR,
        tQ = void 0 === e_ || e_,
        tZ = void 0 !== eT && eT,
        tJ = void 0 === ek || ek,
        t0 = void 0 !== eP && eP,
        t1 = void 0 === eN || eN,
        t2 = void 0 !== eL && eL,
        t3 = void 0 !== eq && eq,
        t4 = void 0 === ej ? null : ej,
        t5 = void 0 !== eD && eD,
        t6 = eC.orbitTranscript,
        t7 = eC.orbitTranscriptHeader,
        t8 = f.visibleBounds.left + f.visibleBounds.width,
        [t9] = (0, g.useState)(n1),
        [ae, at] = (0, g.useState)(!1),
        aa = ei ?? C.length,
        ai = (0, y.A)(),
        [an, ao] = (0, g.useState)(null),
        [ar, al] = (0, g.useState)(null),
        [as, au] = (0, g.useState)(n0),
        { sourceReleasedFlightIds: ad, stackCoveredFlightIds: ap } = as,
        am = tK.map(nJ)
      ;([...ad, ...ap].some((e) => !am.includes(e)) &&
        au({
          sourceReleasedFlightIds: new Set([...ad].filter((e) => am.includes(e))),
          stackCoveredFlightIds: new Set([...ap].filter((e) => am.includes(e))),
        }),
        tq[87] !== ap
          ? ((eG = (e) => {
              let { coveredNotificationId: t, coveredNotificationWasVisible: a, notificationId: i } = e
              return null != t && a && !ap.has(i) ? [t] : []
            }),
            (tq[87] = ap),
            (tq[88] = eG))
          : (eG = tq[88]))
      let af = tK.flatMap(eG),
        ah = tK.flatMap(nZ),
        ag = tK.flatMap(nQ),
        av = (0, ef.I)(),
        ay = !av && tj,
        aw = tX && f.quickChat?.stashedEdge == null,
        ab = (0, g.useRef)(!1),
        aC = (0, g.useRef)(!1),
        ax = (0, g.useRef)(null),
        [aA, aM] = (0, g.useState)(!1),
        aI = em ?? aA
      tq[89] !== C[0] ? ((e$ = ac(C[0])), (tq[89] = C[0]), (tq[90] = e$)) : (e$ = tq[90])
      let aS = e$,
        aE = f.quickChat?.stashedEdge != null
      tq[91] !== C ? ((eK = new Set(C.map(no))), (tq[91] = C), (tq[92] = eK)) : (eK = tq[92])
      let aR = eK
      tq[93] !== aR || tq[94] !== aE
        ? ((eQ = () => ({ isStashed: aE, notificationKeys: aR })), (tq[93] = aR), (tq[94] = aE), (tq[95] = eQ))
        : (eQ = tq[95])
      let [a_, aT] = (0, g.useState)(eQ)
      if (tq[96] !== aR || tq[97] !== aE || tq[98] !== C || tq[99] !== a_) {
        let e = a_
        ;(e.isStashed !== aE
          ? aT((e = { isStashed: aE, notificationKeys: aR }))
          : aE &&
            [...e.notificationKeys].some((e) => !aR.has(e)) &&
            aT((e = { ...e, notificationKeys: new Set([...e.notificationKeys].filter((e) => aR.has(e))) })),
          (eZ = C.findIndex(
            (t) =>
              !e.notificationKeys.has(no(t)) &&
              !t.isLoading &&
              ("warning" === t.level || "danger" === t.level || "success" === t.level),
          )),
          (tq[96] = aR),
          (tq[97] = aE),
          (tq[98] = C),
          (tq[99] = a_),
          (tq[100] = eZ))
      } else eZ = tq[100]
      let ak = eZ,
        aO = C[ak]
      tq[101] !== t || tq[102] !== ai || tq[103] !== aO || tq[104] !== ak
        ? ((eJ = null == aO ? void 0 : (t?.[ak] ?? aV({ intl: ai, notification: aO }))),
          (tq[101] = t),
          (tq[102] = ai),
          (tq[103] = aO),
          (tq[104] = ak),
          (tq[105] = eJ))
        : (eJ = tq[105])
      let aP = eJ,
        aN = ac(aO),
        [aL, aF] = (0, g.useState)(null),
        [aq, aj] = (0, g.useState)(null),
        [aD, aU] = (0, g.useState)(0),
        [aH, aB] = (0, g.useState)(0)
      ;(tq[106] === Symbol.for("react.memo_cache_sentinel")
        ? ((e0 = (e) => {
            aF(e.point)
          }),
          (tq[106] = e0))
        : (e0 = tq[106]),
        (0, K.JX)("avatar-overlay-computer-use-cursor-changed", e0))
      let az = C.length > 0,
        aY = az && !t6?.visible,
        aW = eb?.phase ?? "inactive",
        aX = eb?.errorMessage ?? null,
        aG = eb?.usesNativeStackPresentationTransition === !0,
        aQ = eb?.isAudioReady === !0 || eb?.isTransferring === !0,
        aZ = "inactive" !== aW,
        a0 = eb?.isSessionActive ?? !1,
        a1 = eb?.petOpenIntent
      tq[107] !== aQ || tq[108] !== aZ || tq[109] !== a0 || tq[110] !== a1
        ? ((e1 = (function ({ isAudioReady: e, isPresentationActive: t, isSessionActive: a, petOpenIntent: i = !1 }) {
            return t ? (e ? "voice-orb" : "pet") : a && !i ? "hidden" : "pet"
          })({ isAudioReady: aQ, isPresentationActive: aZ, isSessionActive: a0, petOpenIntent: a1 })),
          (tq[107] = aQ),
          (tq[108] = aZ),
          (tq[109] = a0),
          (tq[110] = a1),
          (tq[111] = e1))
        : (e1 = tq[111])
      let a2 = e1,
        a8 = tQ && "quick-chat" === ea,
        a9 = tQ && (t0 || a8),
        ie = a9 && !a8 && tJ,
        ia = "quick-chat" === ea && !tQ && "inactive" === aW && null == aX,
        io = a9 && "hidden" !== a2,
        ir = (0, u.Ul)(J.Fe),
        il = ir ? iu : it.t,
        is = "pet" === a2 || (ie && "hidden" !== a2),
        ic = (0, g.useEffectEvent)(() => {
          for (let e of tK) D?.(e.notificationId)
        })
      ;(tq[112] !== ic || tq[113] !== io
        ? ((e2 = () => {
            io || ic()
          }),
          (tq[112] = ic),
          (tq[113] = io),
          (tq[114] = e2))
        : (e2 = tq[114]),
        tq[115] !== io ? ((e3 = [io]), (tq[115] = io), (tq[116] = e3)) : (e3 = tq[116]),
        (0, g.useLayoutEffect)(e2, e3))
      let id = et ?? eb?.arePetControlsExpanded ?? (null != aX || "pet" !== a2),
        ip = eb?.petControlsAppearance ?? d.JCZ,
        ih = ie && !id && !t1,
        ig = (0, ey.d)(+!ih)
      tq[117] !== f.mascot || tq[118] !== ip || tq[119] !== aG
        ? ((e4 = (0, d.LHY)({
            mascot: f.mascot,
            petControlsAppearance: ip,
            usesNativeStackPresentationTransition: aG,
          })),
          (tq[117] = f.mascot),
          (tq[118] = ip),
          (tq[119] = aG),
          (tq[120] = e4))
        : (e4 = tq[120])
      let iv = e4,
        iy = iv.scale
      tq[121] !== id || tq[122] !== tz || tq[123] !== f.mascot || tq[124] !== ip
        ? ((e7 = id ? ip.hoverControlSize : (0, ib.PO)(ip)),
          (e6 = id ? ip.hoverControlSize : ip.compactControlHeight),
          (e5 = id ? ip.hoverControlSize / 2 : ip.compactControlCornerRadius),
          (e8 = tz
            ? (0, ib.oO)({
                controlGap: id ? ip.hoverControlGap : -e7,
                controlSize: e7,
                layout: id ? "arc" : "row",
                mascot: f.mascot,
                offsetX: id ? ip.hoverOffsetX : ip.compactOffsetX,
                offsetY: id ? ip.hoverOffsetY : ip.compactOffsetY,
                showsNotificationBadge: !0,
                surfaceId: "mascot-badge",
              })
            : null),
          (tq[121] = id),
          (tq[122] = tz),
          (tq[123] = f.mascot),
          (tq[124] = ip),
          (tq[125] = e5),
          (tq[126] = e6),
          (tq[127] = e7),
          (tq[128] = e8))
        : ((e5 = tq[125]), (e6 = tq[126]), (e7 = tq[127]), (e8 = tq[128]))
      let iw = e8,
        iC = f.mascot,
        ix = { ...iC, left: iC.left + iv.offsetX, top: iC.top + iv.offsetY },
        iA = (ie && t2 && aw ? aq : null) ?? w?.caretPoint ?? aL,
        iI = eb?.caption ?? null,
        iS = f.mascot.left + iv.offsetX
      tq[129] !== f.mascot || tq[130] !== iS || tq[131] !== iv.mascotRect.top
        ? ((e9 = { ...f.mascot, left: iS, top: iv.mascotRect.top }),
          (tq[129] = f.mascot),
          (tq[130] = iS),
          (tq[131] = iv.mascotRect.top),
          (tq[132] = e9))
        : (e9 = tq[132])
      let iE = e9,
        iR = !!eo?.length || null != ec || (tG && void 0 !== en),
        i_ = t$ && tG && void 0 === en,
        iT = (0, u.Ul)(J.X4),
        iN = (0, u.Ul)(tf.nc),
        iL = iT && !iN,
        iF = !!f.quickChat?.hasOrbPicker && iT,
        iq = (0, u.Ul)(im.X5),
        ij = iF ? "inactive" !== iq : "inactive" !== aW && "starting" !== aW,
        iD = (0, u.Ul)(Z.Wf) && tX && !ih,
        iU = (0, ey.d)(null),
        iH = ex ?? iU,
        iB = {
          isOrbitMode: iF,
          isOrbitAvatarInHeader: t6?.visible === !0 && null != t7,
          hasUnreadOrbit: iD && !iF,
          isOrbitCallStarting: "starting" === iq,
          draft: es ?? "",
          editorExtraHeight: aD,
          hasReply: null != eu,
          replyHeight: aH,
          hasAppshots: iR,
          hasSelectedOrb: iL,
          hasMessageNotification: iD,
          hasNotifications: aY,
          hasPetAccessory: ie,
          isEditorActive: t2,
          compositionDeferral: t4,
          isExpanded: t1 && !i_,
          isVoiceActive: ij,
          layout: f,
          stashAppearance: ed,
        },
        iV = a9 ? (0, nP.dh)(iB) : null,
        iz = (0, ey.d)(iV?.target.composerHeight ?? d.Zam),
        iY = null == iV ? void 0 : (0, nU.r)(iB)
      tq[133] !== f.quickChat?.workArea || tq[134] !== f.visibleBounds || tq[135] !== iV || tq[136] !== iz
        ? ((tt = () =>
            null == iV
              ? void 0
              : (0, nU.m)({
                  barTop: iV.bar.top,
                  composerHeight: iz.get(),
                  workArea: f.quickChat?.workArea ?? f.visibleBounds,
                })),
          (tq[133] = f.quickChat?.workArea),
          (tq[134] = f.visibleBounds),
          (tq[135] = iV),
          (tq[136] = iz),
          (tq[137] = tt))
        : (tt = tq[137])
      let iW = (0, ew.G)(tt),
        iX =
          t6?.visible && null != t7 && null != iV && null != iY
            ? iY.composerLeft - (iV.bar.left + iV.target.composerLeft)
            : 0,
        iG = (0, ey.d)(0),
        i$ = (0, ey.d)(1)
      tq[138] === Symbol.for("react.memo_cache_sentinel")
        ? ((ta = { bar: null, header: null }), (tq[138] = ta))
        : (ta = tq[138])
      let iK = (0, g.useRef)(ta),
        iQ = (0, g.useRef)(null),
        iZ = (0, g.useRef)(null),
        iJ = (0, ey.d)(iV?.target.composerTop ?? 0)
      tq[139] !== ie || tq[140] !== iJ
        ? ((ti = () => (ie ? Math.min(0, iJ.get()) : 0)), (tq[139] = ie), (tq[140] = iJ), (tq[141] = ti))
        : (ti = tq[141])
      let i0 = (0, ew.G)(ti),
        i1 = iV?.bar ?? null
      if (null != ar && (is || !io)) {
        let e,
          t,
          a = f.placement.startsWith("top") ? "top" : "bottom"
        ;(tq[142] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("span", {
              "aria-hidden": !0,
              tabIndex: -1,
              className: "pointer-events-none absolute inset-0",
            })),
            (tq[142] = e))
          : (e = tq[142]),
          tq[143] !== ar || tq[144] !== a
            ? ((t = { container: ar, side: a, sideOffset: d.rqb, element: e }),
              (tq[143] = ar),
              (tq[144] = a),
              (tq[145] = t))
            : (t = tq[145]),
          (tn = t))
      } else if (null != an && null != iV) {
        let e,
          t,
          a = iV.growsUp ? "top" : "bottom"
        ;(tq[146] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("span", {
              "aria-hidden": !0,
              tabIndex: -1,
              className: "pointer-events-none absolute",
              style: {
                left: "calc(var(--quick-chat-composer-left) * 1px)",
                top: "calc(var(--quick-chat-composer-top) * 1px)",
                width:
                  "calc((max(var(--quick-chat-composer-left) + var(--quick-chat-composer-width), var(--quick-chat-voice-left) + var(--quick-chat-voice-width), var(--quick-chat-badge-left) + var(--quick-chat-compact-control-size)) - var(--quick-chat-composer-left)) * 1px)",
                height: "calc(var(--quick-chat-composer-height) * 1px)",
              },
            })),
            (tq[146] = e))
          : (e = tq[146]),
          tq[147] !== an || tq[148] !== a
            ? ((t = { container: an, side: a, sideOffset: d.rqb, element: e }),
              (tq[147] = an),
              (tq[148] = a),
              (tq[149] = t))
            : (t = tq[149]),
          (tn = t))
      }
      if (null != i1 && null != iV) {
        let e, t, a
        ;(tq[150] !== ie || tq[151] !== f || tq[152] !== aY
          ? ((e = (0, ny.L)(f, aY, ie)), (tq[150] = ie), (tq[151] = f), (tq[152] = aY), (tq[153] = e))
          : (e = tq[153]),
          (te = e))
        let i = i1.left + iV.target.voiceLeft + iV.target.voiceWidth / 2,
          n = ie ? f.mascot.top : i1.top,
          o = i - f.mascot.width / 2
        ;(tq[154] !== n || tq[155] !== f.placement || tq[156] !== i1.height || tq[157] !== i1.top
          ? ((t = f.placement.startsWith("bottom") ? i1.top + i1.height : n),
            (tq[154] = n),
            (tq[155] = f.placement),
            (tq[156] = i1.height),
            (tq[157] = i1.top),
            (tq[158] = t))
          : (t = tq[158]),
          tq[159] !== f.mascot || tq[160] !== o || tq[161] !== t
            ? ((a = { ...f.mascot, left: o, top: t }),
              (tq[159] = f.mascot),
              (tq[160] = o),
              (tq[161] = t),
              (tq[162] = a))
            : (a = tq[162]),
          (iE = a))
      }
      let i2 = (0, ey.d)(null),
        i3 = eb?.statusText ?? null,
        i4 = (0, ib.PE)({
          mascot: f.mascot,
          petControlsAppearance: ip,
          quickChatBar: io ? (0, d.MkO)(f, ie) : null,
          showsNotificationBadge: az,
        }),
        i5 = null != eb
      tq[163] !== r || tq[164] !== iA || tq[165] !== iC
        ? ((to = null == iA || null == r ? null : (0, aJ.P3)(iC, iA, r.spriteVersionNumber)),
          (tq[163] = r),
          (tq[164] = iA),
          (tq[165] = iC),
          (tq[166] = to))
        : (to = tq[166])
      let i6 = to,
        i7 = tD && az,
        nt = tU && az,
        nn = i7 || (!a9 && aI),
        nl = aa > 1 && tV,
        ns = aa > 1 && !tV,
        nu = aa <= 1 || (b ?? nl),
        nd = tQ && az && f.placement.startsWith("top") ? d.Zam + d.rqb : 0,
        nm = 0
      tq[167] !== a || tq[168] !== nu || tq[169] !== C.length
        ? ((tr =
            null == a
              ? { backingLayoutHeight: 0, visibleLayoutHeight: 0 }
              : a$({ activityStackPresentation: a, isExpanded: nu, notificationCount: C.length })),
          (tq[167] = a),
          (tq[168] = nu),
          (tq[169] = C.length),
          (tq[170] = tr))
        : (tr = tq[170])
      let nf = tr,
        nh = Math.max(0, nf.backingLayoutHeight - nf.visibleLayoutHeight)
      ;(tq[171] === Symbol.for("react.memo_cache_sentinel") ? ((tl = []), (tq[171] = tl)) : (tl = tq[171]),
        tq[172] !== nf || tq[173] !== nh
          ? ((ts = { ...nf, overhang: nh, rects: tl }), (tq[172] = nf), (tq[173] = nh), (tq[174] = ts))
          : (ts = tq[174]))
      let ng = (0, ey.d)(ts)
      tq[175] !== f.placement
        ? ((tc = f.placement.startsWith("top")), (tq[175] = f.placement), (tq[176] = tc))
        : (tc = tq[176])
      let nC = tc,
        nx = a?.items
      tq[177] !== nC || tq[178] !== nf.backingLayoutHeight || tq[179] !== nx
        ? ((tu = { backingHeight: nf.backingLayoutHeight, isAboveMascot: nC, items: nx, offset: 0 }),
          (tq[177] = nC),
          (tq[178] = nf.backingLayoutHeight),
          (tq[179] = nx),
          (tq[180] = tu))
        : (tu = tq[180])
      let [nA, nM] = (0, g.useState)(tu),
        nI = a?.items
      if (
        !(
          nI?.length === nA.items?.length &&
          (nI?.every((e, t) => {
            let { itemId: a, itemHeight: i } = e
            return a === nA.items?.[t].itemId && i === nA.items?.[t].itemHeight
          }) ??
            !0)
        ) ||
        nA.isAboveMascot !== nC
      ) {
        let e,
          t =
            null != nI &&
            nI.length === nA.items?.length &&
            nI.every((e, t) => {
              let { itemId: a } = e
              return a === nA.items?.[t].itemId
            }),
          a = nf.backingLayoutHeight
        tq[181] !== ng ? ((e = ng.get()), (tq[181] = ng), (tq[182] = e)) : (e = tq[182])
        let i = e.backingLayoutHeight
        nM({
          backingHeight: a,
          isAboveMascot: nC,
          items: nI,
          offset:
            nA.offset -
            (t && nA.isAboveMascot ? a - nA.backingHeight : 0) +
            (nA.isAboveMascot !== nC ? (nA.isAboveMascot ? 1 : -1) * (a - i) : 0),
        })
      }
      let nS = (0, ey.d)(0)
      ;(tq[183] !== nS || tq[184] !== nC || tq[185] !== nf.backingLayoutHeight
        ? ((td = (e) => {
            nS.set(nC ? nf.backingLayoutHeight - e.backingLayoutHeight : 0)
          }),
          (tq[183] = nS),
          (tq[184] = nC),
          (tq[185] = nf.backingLayoutHeight),
          (tq[186] = td))
        : (td = tq[186]),
        (0, a3.L)(ng, "change", td),
        tq[187] !== nC ||
        tq[188] !== ie ||
        tq[189] !== f.mascot.top ||
        tq[190] !== t6?.visible ||
        tq[191] !== ip.compactControlHeight ||
        tq[192] !== i0 ||
        tq[193] !== i1?.top ||
        tq[194] !== iz ||
        tq[195] !== iJ ||
        tq[196] !== ig ||
        tq[197] !== i2
          ? ((tp = function () {
              let e = i2.get(),
                t = iJ.get(),
                a = (t + iz.get()) * (0, nP.WD)(ig.get(), ip.compactControlHeight, window.devicePixelRatio)
              return t6?.visible || nC
                ? (e?.viewportRect.top ?? (ie ? f.mascot.top + i0.get() : (i1?.top ?? f.mascot.top) + t))
                : null == e
                  ? (i1?.top ?? f.mascot.top) + a
                  : e.viewportRect.top + e.viewportRect.height
            }),
            (tq[187] = nC),
            (tq[188] = ie),
            (tq[189] = f.mascot.top),
            (tq[190] = t6?.visible),
            (tq[191] = ip.compactControlHeight),
            (tq[192] = i0),
            (tq[193] = i1?.top),
            (tq[194] = iz),
            (tq[195] = iJ),
            (tq[196] = ig),
            (tq[197] = i2),
            (tq[198] = tp))
          : (tp = tq[198]))
      let nE = tp,
        nR = (0, ew.G)(nE),
        n_ = (nC && ie ? f.mascot.top : (i1?.top ?? f.mascot.top)) + (nC ? 0 : d.Zam),
        nT = 0
      ;(a9 &&
        az &&
        null != f.tray &&
        null != i1 &&
        (nT = nC ? n_ - d.rqb - (f.tray.top + f.tray.height - nd) : n_ + d.rqb - f.tray.top),
        tq[199] !== n_ ||
        tq[200] !== nS ||
        tq[201] !== nC ||
        tq[202] !== nE ||
        tq[203] !== az ||
        tq[204] !== f.tray ||
        tq[205] !== iH ||
        tq[206] !== i1 ||
        tq[207] !== iz ||
        tq[208] !== iJ ||
        tq[209] !== a9
          ? ((tm = () => {
              if (!a9 || !az || null == f.tray || null == i1) return nS.get()
              let e = nE(),
                t = iH.get()
              if (null != t) {
                let a = i1.top + iJ.get() + ("bottom" === t.edge ? iz.get() : 0)
                e = nC ? Math.min(e, a + t.top) : Math.max(e, a + t.bottom)
              }
              return e - n_ + (nC ? nS.get() : 0)
            }),
            (tq[199] = n_),
            (tq[200] = nS),
            (tq[201] = nC),
            (tq[202] = nE),
            (tq[203] = az),
            (tq[204] = f.tray),
            (tq[205] = iH),
            (tq[206] = i1),
            (tq[207] = iz),
            (tq[208] = iJ),
            (tq[209] = a9),
            (tq[210] = tm))
          : (tm = tq[210]))
      let nk = (0, ew.G)(tm)
      if (f.placement.startsWith("top") && null != a && az) {
        let { backingLayoutHeight: e, visibleLayoutHeight: t } = nf
        nm = t - e
      }
      tq[211] !== nd || tq[212] !== az
        ? ((th = { hasNotifications: az, offset: nd, translation: 0 }), (tq[211] = nd), (tq[212] = az), (tq[213] = th))
        : (th = tq[213])
      let [nO, nL] = (0, g.useState)(th)
      ;(az !== nO.hasNotifications || nd !== nO.offset) &&
        nL({
          hasNotifications: az,
          offset: nd,
          translation: nO.translation + (az !== nO.hasNotifications ? nd - nO.offset : 0),
        })
      let nq = (f.tray?.left ?? f.mascot.left) - f.mascot.left,
        nj =
          null == f.tray
            ? -nO.translation
            : f.tray.top +
              (nC && null != a && az ? f.tray.height - nf.backingLayoutHeight : nd + nm) -
              f.mascot.top -
              nO.translation -
              nA.offset +
              nT
      tq[214] !== nq || tq[215] !== nj
        ? ((tg = { x: nq, y: nj }), (tq[214] = nq), (tq[215] = nj), (tq[216] = tg))
        : (tg = tq[216])
      let nD = tg,
        nB = (0, ey.d)(nD.x),
        nV = (0, ey.d)(nD.y)
      tq[217] !== nD.x || tq[218] !== nD.y || tq[219] !== nB || tq[220] !== nV
        ? ((tv = () => {
            ;(nB.jump(nD.x), nV.jump(nD.y))
          }),
          (tq[217] = nD.x),
          (tq[218] = nD.y),
          (tq[219] = nB),
          (tq[220] = nV),
          (tq[221] = tv))
        : (tv = tq[221])
      let nz = (0, g.useEffectEvent)(tv)
      ;(tq[222] !== tj || tq[223] !== nz
        ? ((ty = () => {
            tj || nz()
          }),
          (tq[222] = tj),
          (tq[223] = nz),
          (tq[224] = ty))
        : (ty = tq[224]),
        tq[225] !== nD.x || tq[226] !== nD.y || tq[227] !== tj
          ? ((tw = [tj, nD.x, nD.y]), (tq[225] = nD.x), (tq[226] = nD.y), (tq[227] = tj), (tq[228] = tw))
          : (tw = tq[228]),
        (0, g.useLayoutEffect)(ty, tw),
        tq[229] !== nm ||
        tq[230] !== nA.offset ||
        tq[231] !== nC ||
        tq[232] !== nd ||
        tq[233] !== nk ||
        tq[234] !== ng ||
        tq[235] !== nV ||
        tq[236] !== nO.translation ||
        tq[237] !== nt ||
        tq[238] !== ie ||
        tq[239] !== f ||
        tq[240] !== i0 ||
        tq[241] !== i1 ||
        tq[242] !== iz ||
        tq[243] !== iJ ||
        tq[244] !== io
          ? ((tb = () => {
              if (!io || null == i1) return null
              let e = (0, d.MkO)(f, ie),
                t = i1.top + iJ.get(),
                a = ie ? Math.min(f.mascot.top + i0.get(), t) : t,
                i = Math.max(e.top + e.height, t + iz.get())
              if (nt && null != f.tray) {
                let e = f.mascot.top + nO.translation + nV.get() - nd - nm + nA.offset + nk.get(),
                  { visibleLayoutHeight: t, overhang: n } = ng.get()
                ;((a = Math.min(a, e - (nC ? n : 0))), (i = Math.max(i, e + t + (nC ? 0 : n))))
              }
              return { ...e, top: a, height: i - a }
            }),
            (tq[229] = nm),
            (tq[230] = nA.offset),
            (tq[231] = nC),
            (tq[232] = nd),
            (tq[233] = nk),
            (tq[234] = ng),
            (tq[235] = nV),
            (tq[236] = nO.translation),
            (tq[237] = nt),
            (tq[238] = ie),
            (tq[239] = f),
            (tq[240] = i0),
            (tq[241] = i1),
            (tq[242] = iz),
            (tq[243] = iJ),
            (tq[244] = io),
            (tq[245] = tb))
          : (tb = tq[245]))
      let nY = (0, ew.G)(tb),
        nX = null == f.tray ? void 0 : Math.max(0, f.tray.height)
      tq[246] !== B || tq[247] !== em
        ? ((tC = () => {
            ;(null != ax.current && (window.clearTimeout(ax.current), (ax.current = null)),
              null == em && aM(!0),
              B?.(!0))
          }),
          (tq[246] = B),
          (tq[247] = em),
          (tq[248] = tC))
        : (tC = tq[248])
      let nK = tC
      tq[249] !== m || tq[250] !== B || tq[251] !== em
        ? ((tx = () => {
            ab.current ||
              (null != ax.current && window.clearTimeout(ax.current),
              (ax.current = window.setTimeout(() => {
                ;((ax.current = null),
                  aC.current ||
                    m?.current?.querySelector("[data-avatar-overlay-hit-region]:hover") != null ||
                    (null == em && aM(!1), B?.(!1)))
              }, 300)))
          }),
          (tq[249] = m),
          (tq[250] = B),
          (tq[251] = em),
          (tq[252] = tx))
        : (tx = tq[252])
      let n3 = tx
      if (
        (tq[253] === Symbol.for("react.memo_cache_sentinel")
          ? ((tA = () => (
              (ab.current = !1),
              () => {
                ;((ab.current = !0), null != ax.current && window.clearTimeout(ax.current))
              }
            )),
            (tM = []),
            (tq[253] = tA),
            (tq[254] = tM))
          : ((tA = tq[253]), (tM = tq[254])),
        (0, g.useEffect)(tA, tM),
        tW && i7 && null != R)
      ) {
        let e, t, a, n
        tq[255] !== ai || tq[256] !== nl
          ? ((e = nl
              ? ai.formatMessage({
                  id: "avatarOverlay.collapseNotificationStack",
                  defaultMessage: "Collapse activity stack",
                  description: "Accessible label for collapsing grouped floating avatar notifications",
                })
              : ai.formatMessage({
                  id: "avatarOverlay.hideActivity",
                  defaultMessage: "Hide activity",
                  description: "Accessible label for stashing floating avatar activity",
                })),
            (tq[255] = ai),
            (tq[256] = nl),
            (tq[257] = e))
          : (e = tq[257])
        let o = iF ? aS.badgeBackgroundColor : "transparent"
        tq[258] !== iF || tq[259] !== f.placement || tq[260] !== C.length
          ? ((t = iF
              ? C.length
              : (0, i.jsx)(ii.A, {
                  className: (0, ev.A)("icon-sm", f.placement.startsWith("bottom") && "rotate-180"),
                })),
            (tq[258] = iF),
            (tq[259] = f.placement),
            (tq[260] = C.length),
            (tq[261] = t))
          : (t = tq[261])
        let r = iF ? aS.badgeForegroundColor : "currentColor",
          l = !iF
        ;(tq[262] !== iF || tq[263] !== C
          ? ((a = iF ? (0, d.F0r)(!0, C) : void 0), (tq[262] = iF), (tq[263] = C), (tq[264] = a))
          : (a = tq[264]),
          tq[265] !== R ||
          tq[266] !== e ||
          tq[267] !== o ||
          tq[268] !== t ||
          tq[269] !== r ||
          tq[270] !== l ||
          tq[271] !== a
            ? ((n = {
                ariaLabel: e,
                backgroundColor: o,
                content: t,
                foregroundColor: r,
                isGlassy: !0,
                isIconOnly: l,
                nativeTint: a,
                onClick: R,
              }),
              (tq[265] = R),
              (tq[266] = e),
              (tq[267] = o),
              (tq[268] = t),
              (tq[269] = r),
              (tq[270] = l),
              (tq[271] = a),
              (tq[272] = n))
            : (n = tq[272]),
          (tI = n))
      } else if (tW && null != G && az && !tD) {
        let e, t, a
        tq[273] !== ai || tq[274] !== C.length
          ? ((e = ai.formatMessage(
              {
                id: "avatarOverlay.showActivity",
                defaultMessage: "Show activity, {count, plural, one {# item} other {# items}}",
                description: "Accessible label for showing stashed floating avatar activity",
              },
              { count: C.length },
            )),
            (tq[273] = ai),
            (tq[274] = C.length),
            (tq[275] = e))
          : (e = tq[275])
        let i = aS.badgeBackgroundColor,
          n = C.length,
          o = aS.badgeForegroundColor
        ;(tq[276] !== C ? ((t = (0, d.F0r)(!0, C)), (tq[276] = C), (tq[277] = t)) : (t = tq[277]),
          tq[278] !== C.length ||
          tq[279] !== G ||
          tq[280] !== aS.badgeBackgroundColor ||
          tq[281] !== aS.badgeForegroundColor ||
          tq[282] !== e ||
          tq[283] !== t
            ? ((a = {
                ariaLabel: e,
                backgroundColor: i,
                content: n,
                foregroundColor: o,
                isGlassy: !0,
                nativeTint: t,
                onClick: G,
              }),
              (tq[278] = C.length),
              (tq[279] = G),
              (tq[280] = aS.badgeBackgroundColor),
              (tq[281] = aS.badgeForegroundColor),
              (tq[282] = e),
              (tq[283] = t),
              (tq[284] = a))
            : (a = tq[284]),
          (tI = a))
      }
      tq[285] !== r ||
      tq[286] !== ai ||
      tq[287] !== a8 ||
      tq[288] !== i6 ||
      tq[289] !== h ||
      tq[290] !== tI ||
      tq[291] !== ee ||
      tq[292] !== aS ||
      tq[293] !== iC.height ||
      tq[294] !== iC.width ||
      tq[295] !== i5 ||
      tq[296] !== a9
        ? ((tS =
            null == r || a8
              ? null
              : (0, i.jsx)(a6.r, {
                  ariaLabel: ai.formatMessage(nG.mascotLabel, { petName: r.displayName }),
                  animationPaused: ee,
                  lookFrame: i6,
                  notificationBadge: a9 || i5 ? void 0 : tI,
                  source: (0, a7.aN)(r),
                  state: aS.mascotState,
                  style: { ...(0, aK.cv)(iC.width), height: iC.height },
                  transientState: h,
                })),
          (tq[285] = r),
          (tq[286] = ai),
          (tq[287] = a8),
          (tq[288] = i6),
          (tq[289] = h),
          (tq[290] = tI),
          (tq[291] = ee),
          (tq[292] = aS),
          (tq[293] = iC.height),
          (tq[294] = iC.width),
          (tq[295] = i5),
          (tq[296] = a9),
          (tq[297] = tS))
        : (tS = tq[297])
      let n4 = tS,
        n5 = null
      if (null != aX && null != eb)
        n5 = (0, i.jsx)(ik, {
          className: "absolute z-30 -translate-x-1/2",
          screenEdgeFallback: {
            belowAnchorTop: i4.top,
            mascotTop: f.mascot.top,
            occupiedBounds: nY,
            visibleBounds: f.visibleBounds,
          },
          style: {
            left: i4.left,
            maxWidth: (0, ib.Q3)({ anchor: i4, visibleBounds: f.quickChat?.workArea ?? f.visibleBounds }),
            top: i4.top,
          },
          text: aX,
          tone: "danger",
        })
      else if (!a9 && "voice-orb" === a2 && null != eb) {
        let e,
          t = null == i3 && "invisible"
        ;(tq[298] !== t
          ? ((e = (0, ev.A)("pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2", t)),
            (tq[298] = t),
            (tq[299] = e))
          : (e = tq[299]),
          (n5 = (0, i.jsx)("div", {
            "aria-hidden": null == i3,
            className: e,
            style: (0, ib.J1)({ mascot: ix, orbScale: iy }),
            children: (0, i.jsx)(ik, {
              style: { maxWidth: (0, ib.kn)({ mascot: ix, visibleBounds: f.quickChat?.workArea ?? f.visibleBounds }) },
              text: i3 ?? " ",
            }),
          })))
      }
      tq[300] !== il ||
      tq[301] !== id ||
      tq[302] !== aw ||
      tq[303] !== r ||
      tq[304] !== n4 ||
      tq[305] !== l ||
      tq[306] !== tY ||
      tq[307] !== ir ||
      tq[308] !== a8 ||
      tq[309] !== f ||
      tq[310] !== v ||
      tq[311] !== tn ||
      tq[312] !== tI ||
      tq[313] !== I ||
      tq[314] !== E ||
      tq[315] !== _ ||
      tq[316] !== T ||
      tq[317] !== k ||
      tq[318] !== O ||
      tq[319] !== P ||
      tq[320] !== q ||
      tq[321] !== e5 ||
      tq[322] !== e6 ||
      tq[323] !== e7 ||
      tq[324] !== ip ||
      tq[325] !== i0 ||
      tq[326] !== i2 ||
      tq[327] !== a2 ||
      tq[328] !== iw ||
      tq[329] !== aW ||
      tq[330] !== aX ||
      tq[331] !== eb?.activity ||
      tq[332] !== eb?.canStart ||
      tq[333] !== eb?.handoff ||
      tq[334] !== eb?.microphoneMuted ||
      tq[335] !== eb?.muted ||
      tq[336] !== eb?.onStart ||
      tq[337] !== eb?.onStop ||
      tq[338] !== eb?.onToggleMicrophoneMute ||
      tq[339] !== eb?.onToggleMute ||
      tq[340] !== eb?.presentationAnchorRef ||
      tq[341] !== eb?.usesPresentationFadeTransition ||
      tq[342] !== iC.height ||
      tq[343] !== iC.left ||
      tq[344] !== iC.top ||
      tq[345] !== iC.width ||
      tq[346] !== n3 ||
      tq[347] !== nK ||
      tq[348] !== i5 ||
      tq[349] !== is ||
      tq[350] !== az ||
      tq[351] !== aG ||
      tq[352] !== a9 ||
      tq[353] !== iv.offsetX ||
      tq[354] !== iv.offsetY ||
      tq[355] !== iy
        ? ((tE =
            a8 || null == r
              ? null
              : (0, i.jsxs)(eh.P.div, {
                  ref: al,
                  className: (0, ev.A)(
                    "group absolute cursor-grab active:cursor-grabbing",
                    "hidden" === a2 && "pointer-events-none",
                  ),
                  style: { height: iC.height, left: iC.left, top: iC.top, width: iC.width, y: i0 },
                  onLostPointerCapture: _,
                  onPointerCancel: T,
                  onPointerDown: k,
                  onPointerMove: O,
                  onPointerUp: P,
                  children: [
                    (0, i.jsx)("div", {
                      "aria-hidden": "true",
                      className: "codex-avatar-button pointer-events-none invisible absolute top-0 left-0",
                      "data-avatar-overlay-size": "mascot",
                      inert: !0,
                      style: v,
                    }),
                    (0, i.jsx)(il, {
                      items: l,
                      anchor: ir ? tn : void 0,
                      onOpenChange: ir ? I : void 0,
                      children: (0, i.jsx)("div", {
                        "data-avatar-overlay-hit-region": "hidden" === a2 ? void 0 : "mascot",
                        className: "h-full w-full",
                        onPointerEnter: () => {
                          ;(q?.(!0), nK())
                        },
                        onPointerLeave: () => {
                          ;(q?.(!1), n3())
                        },
                        children: (0, i.jsxs)(iP.P, {
                          className: "relative size-full",
                          handoff: eb?.handoff ?? null,
                          surface: "global-overlay",
                          usesFadeTransition: eb?.usesPresentationFadeTransition ?? !1,
                          children: [
                            (0, i.jsx)(a4.x, {
                              reducedMotion: "never",
                              children: (0, i.jsxs)(i.Fragment, {
                                children: [
                                  a9 || ("voice-orb" !== a2 && eb?.canStart !== !0)
                                    ? null
                                    : (0, i.jsx)(
                                        nw,
                                        {
                                          geometry: i2,
                                          layout: f,
                                          children: (0, i.jsx)(eh.P.div, {
                                            animate:
                                              "voice-orb" === a2
                                                ? { opacity: 1, scale: iy, x: iv.offsetX, y: iv.offsetY }
                                                : { opacity: 0, scale: 0.45 * iy, x: iv.offsetX, y: iv.offsetY },
                                            className: "absolute inset-0",
                                            initial: !1,
                                            transition: n$,
                                            children: (0, i.jsx)(iO.P, {
                                              glowEnabled: tY,
                                              placement: "center",
                                              presentationAnchorRef: eb?.presentationAnchorRef,
                                              phase: aW,
                                              voiceActivity: eb?.activity ?? "idle",
                                            }),
                                          }),
                                        },
                                        "voice-orb",
                                      ),
                                  null != n4 && (is || (aG && "voice-orb" === a2))
                                    ? (0, i.jsx)(
                                        eh.P.div,
                                        {
                                          "aria-hidden": !is || void 0,
                                          animate: is ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.62 },
                                          className: (0, ev.A)("absolute inset-0", !is && "pointer-events-none"),
                                          inert: !is,
                                          initial: !1,
                                          transition: a5.iN,
                                          children: n4,
                                        },
                                        "pet",
                                      )
                                    : null,
                                ],
                              }),
                            }),
                            a9
                              ? null
                              : (0, i.jsx)(eh.P.div, {
                                  animate: {
                                    "--pet-glass-spacing": id
                                      ? [`${ip.expandingGlassSpacing}px`, `${ip.hoverGlassSpacing}px`]
                                      : `${ip.compactGlassSpacing}px`,
                                  },
                                  "aria-hidden": !aw || void 0,
                                  className: (0, ev.A)("petControls-iAgTUj", !aw && "invisible"),
                                  initial: !1,
                                  inert: !aw,
                                  transition: { duration: ip.glassMergeDurationMs / 1e3, ease: [0.6, 0, 1, 1] },
                                  children: (0, i.jsx)(a4.x, {
                                    reducedMotion: "never",
                                    children: (0, i.jsx)(iM, {
                                      arePetControlsExpanded: id,
                                      areControlsVisible: "pet" === a2 || "voice-orb" === a2,
                                      areVoiceActionsHidden: "hidden" === a2,
                                      canStart: eb?.canStart ?? !1,
                                      errorMessage: aX,
                                      isRealtimeVoiceSurfaceVisible: "voice-orb" === a2,
                                      isMicrophoneMuted: eb?.microphoneMuted ?? !1,
                                      isMuted: eb?.muted ?? !1,
                                      onAnimationFrame: E,
                                      phase: aW,
                                      placement: f.placement,
                                      mascot: f.mascot,
                                      petControlsAppearance: ip,
                                      showsNotificationBadge: az,
                                      onStart: eb?.onStart,
                                      onStop: eb?.onStop,
                                      onToggleMicrophoneMute: eb?.onToggleMicrophoneMute,
                                      onToggleMute: eb?.onToggleMute,
                                      children: (0, i.jsx)(eg.N, {
                                        initial: !1,
                                        children:
                                          i5 && null != tI
                                            ? (0, i.jsx)(
                                                a6.h,
                                                {
                                                  animatesExit: !0,
                                                  ignoresReducedMotion: !0,
                                                  isContentVisible: id,
                                                  notificationBadge: tI,
                                                  nativeCornerRadius: e5,
                                                  onAnimationFrame: E,
                                                  contentVisibilityAnimation: {
                                                    hiddenBlurRadiusPx: ip.contentHiddenBlurRadiusPx,
                                                    hiddenScale: ip.contentHiddenScale,
                                                    revealTransition: a5.z1,
                                                  },
                                                  presentationPosition:
                                                    null == iw
                                                      ? void 0
                                                      : {
                                                          height: e6,
                                                          left: `calc(50% + ${iw.x - e7 / 2}px)`,
                                                          top: `calc(100% + ${iw.y - iC.height}px)`,
                                                          width: e7,
                                                        },
                                                },
                                                "mascot-badge",
                                              )
                                            : null,
                                      }),
                                    }),
                                  }),
                                }),
                          ],
                        }),
                      }),
                    }),
                  ],
                })),
          (tq[300] = il),
          (tq[301] = id),
          (tq[302] = aw),
          (tq[303] = r),
          (tq[304] = n4),
          (tq[305] = l),
          (tq[306] = tY),
          (tq[307] = ir),
          (tq[308] = a8),
          (tq[309] = f),
          (tq[310] = v),
          (tq[311] = tn),
          (tq[312] = tI),
          (tq[313] = I),
          (tq[314] = E),
          (tq[315] = _),
          (tq[316] = T),
          (tq[317] = k),
          (tq[318] = O),
          (tq[319] = P),
          (tq[320] = q),
          (tq[321] = e5),
          (tq[322] = e6),
          (tq[323] = e7),
          (tq[324] = ip),
          (tq[325] = i0),
          (tq[326] = i2),
          (tq[327] = a2),
          (tq[328] = iw),
          (tq[329] = aW),
          (tq[330] = aX),
          (tq[331] = eb?.activity),
          (tq[332] = eb?.canStart),
          (tq[333] = eb?.handoff),
          (tq[334] = eb?.microphoneMuted),
          (tq[335] = eb?.muted),
          (tq[336] = eb?.onStart),
          (tq[337] = eb?.onStop),
          (tq[338] = eb?.onToggleMicrophoneMute),
          (tq[339] = eb?.onToggleMute),
          (tq[340] = eb?.presentationAnchorRef),
          (tq[341] = eb?.usesPresentationFadeTransition),
          (tq[342] = iC.height),
          (tq[343] = iC.left),
          (tq[344] = iC.top),
          (tq[345] = iC.width),
          (tq[346] = n3),
          (tq[347] = nK),
          (tq[348] = i5),
          (tq[349] = is),
          (tq[350] = az),
          (tq[351] = aG),
          (tq[352] = a9),
          (tq[353] = iv.offsetX),
          (tq[354] = iv.offsetY),
          (tq[355] = iy),
          (tq[356] = tE))
        : (tE = tq[356])
      let n6 = tE,
        n8 = ia || void 0,
        n9 = ia && "invisible",
        oe = tH && "-outline-offset-2 outline-2 outline-[#ff0000]"
      tq[357] !== n9 || tq[358] !== oe
        ? ((tR = (0, ev.A)("relative h-screen w-screen bg-transparent", "overflow-hidden", n9, oe)),
          (tq[357] = n9),
          (tq[358] = oe),
          (tq[359] = tR))
        : (tR = tq[359])
      let ot = tH || void 0
      tq[360] !== o || tq[361] !== t9
        ? ((t_ = (0, i.jsx)(nF, { host: o, input: t9, onAvailabilityChange: at })),
          (tq[360] = o),
          (tq[361] = t9),
          (tq[362] = t_))
        : (t_ = tq[362])
      let oa = iF && iL,
        oi = null == t7 ? void 0 : iY
      tq[363] !== oa || tq[364] !== oi
        ? ((tT = { isOrbitTranscript: oa, orbitTranscriptPlacement: oi }),
          (tq[363] = oa),
          (tq[364] = oi),
          (tq[365] = tT))
        : (tT = tq[365])
      let on = t6?.visible === !0 && aw
      tq[366] !== t9 ||
      tq[367] !== aw ||
      tq[368] !== f.tray ||
      tq[369] !== ae ||
      tq[370] !== E ||
      tq[371] !== _ ||
      tq[372] !== T ||
      tq[373] !== k ||
      tq[374] !== O ||
      tq[375] !== P ||
      tq[376] !== t6 ||
      tq[377] !== t7 ||
      tq[378] !== iY?.expandsFromTop ||
      tq[379] !== iY?.height ||
      tq[380] !== iY?.top ||
      tq[381] !== iW ||
      tq[382] !== nR ||
      tq[383] !== iV ||
      tq[384] !== n3 ||
      tq[385] !== nK ||
      tq[386] !== t8 ||
      tq[387] !== i$ ||
      tq[388] !== iG ||
      tq[389] !== iX
        ? ((tk =
            null != t6
              ? (0, i.jsx)(eg.N, {
                  children: (0, i.jsx)(
                    nW,
                    {
                      active: t6.visible,
                      presentedPlacement: iW,
                      composerProgress: i$,
                      expandsFromTop: iY?.expandsFromTop ?? !1,
                      header:
                        null == t7
                          ? void 0
                          : (e) =>
                              (0, i.jsx)("div", {
                                className: "w-full",
                                "data-avatar-overlay-hit-region": "selected-orb",
                                children: t7(e, iY?.expandsFromTop ?? !1, iK, iQ, iZ),
                              }),
                      anchorY: nR,
                      isVisible: aw,
                      measuredHeight: iG,
                      tray:
                        null != f.tray && null != iV
                          ? {
                              ...f.tray,
                              height: null == t7 ? f.tray.height : (iY?.height ?? f.tray.height),
                              top: iY?.top ?? f.tray.top,
                              left: iX + iV.bar.left + iV.target.composerLeft,
                              width: iV.target.composerWidth,
                            }
                          : null,
                      onLostPointerCapture: _,
                      onPointerCancel: T,
                      onPointerDown: null == t7 ? void 0 : k,
                      onPointerEnter: nK,
                      onPointerLeave: n3,
                      onPointerMove: O,
                      onPointerUp: P,
                      onGeometryAnimationFrame: E,
                      children: (e, t) =>
                        t6.render(
                          e,
                          t6.visible && aw && null != f.tray && null != iV,
                          t,
                          ae ? { input: t9, visibleRight: t8 } : void 0,
                        ),
                    },
                    null == t7 ? "temporary-transcript" : "orbit-transcript",
                  ),
                })
              : null),
          (tq[366] = t9),
          (tq[367] = aw),
          (tq[368] = f.tray),
          (tq[369] = ae),
          (tq[370] = E),
          (tq[371] = _),
          (tq[372] = T),
          (tq[373] = k),
          (tq[374] = O),
          (tq[375] = P),
          (tq[376] = t6),
          (tq[377] = t7),
          (tq[378] = iY?.expandsFromTop),
          (tq[379] = iY?.height),
          (tq[380] = iY?.top),
          (tq[381] = iW),
          (tq[382] = nR),
          (tq[383] = iV),
          (tq[384] = n3),
          (tq[385] = nK),
          (tq[386] = t8),
          (tq[387] = i$),
          (tq[388] = iG),
          (tq[389] = iX),
          (tq[390] = tk))
        : (tk = tq[390])
      let oo = f.quickChat?.workArea ?? f.visibleBounds,
        or = io
          ? (0, i.jsx)(il, {
              items: l,
              anchor: ir ? tn : void 0,
              onOpenChange: ir ? I : void 0,
              children: (0, i.jsxs)("div", {
                className: "contents",
                children: [
                  ie
                    ? null
                    : (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        className: "codex-avatar-button pointer-events-none invisible absolute h-10",
                        "data-avatar-overlay-size": "mascot",
                        inert: !0,
                        style: { ...v, left: f.mascot.left, top: f.mascot.top },
                      }),
                  (0, i.jsx)(nN.l, {
                    transcriptAvatarOrigin: iK,
                    transcriptBarOrigin: iQ,
                    transcriptNameOrigin: iZ,
                    isOrbitAvatarInHeader: t6?.visible === !0 && null != t7,
                    morphsOrbitTranscriptDown: iF && iL && !!iY?.expandsFromTop,
                    isOrbitMode: iF,
                    transcriptComposerProgress: null == t7 ? void 0 : i$,
                    animatesPresentation: tj,
                    appshots: eo,
                    getAttachmentActions: p,
                    composerReplacement: er,
                    fileAttachments: ec,
                    areActivityPillsVisible: tD,
                    areControlsVisible: tX,
                    canStash: tZ,
                    canStartVoice: eb?.canStart ?? !1,
                    draft: es ?? "",
                    threadTarget: ep,
                    hasNotifications: aY,
                    isExpanded: t1,
                    onMenuAnchorChange: ao,
                    isAppshotCapturePending: tG,
                    appshotCaptureResponse: en,
                    appshotCaptureStartsCollapsed: t$,
                    isSending: tK.some((e) => !ad.has(e.notificationId)),
                    isEditorActive: t2,
                    focusRequested: t3,
                    compositionDeferral: t4,
                    isMinimized: ih,
                    isVoiceSelected: t5,
                    layout: f,
                    stashAppearance: ed,
                    notificationBadge: tI,
                    petAccessory: ie ? n6 : void 0,
                    realtimeVoiceSurface: eb,
                    stashedAttentionPill:
                      null == aO || null == aP || f.quickChat?.stashedEdge == null
                        ? null
                        : (0, i.jsx)(
                            nv,
                            {
                              animation: eA,
                              compactContent: (0, i.jsx)("span", {
                                "aria-label": aP.statusIconAriaLabel ?? ai.formatMessage(aN.labelMessage),
                                className: "flex size-full items-center justify-center",
                                role: "img",
                                children: (function (e, t) {
                                  if (t) return (0, i.jsx)(eO.I, { asset: na, className: "relative text-warning" })
                                  switch (e.iconType) {
                                    case "clock":
                                      return (0, i.jsx)(eO.I, { asset: i9, className: "relative text-warning" })
                                    case "warning":
                                      return (0, i.jsx)(eO.I, { asset: ne, className: "relative text-danger" })
                                    case "check-circle":
                                      return (0, i.jsx)("span", {
                                        className:
                                          "flex size-8 items-center justify-center rounded-full bg-[light-dark(var(--green-50),var(--green-900))] text-[color:light-dark(var(--green-400),var(--green-300))]",
                                        children: (0, i.jsx)(eO.I, { asset: i8.n }),
                                      })
                                    case "spinner":
                                      return ni(e)
                                  }
                                })(aN, aO.waitingRequest?.kind === "question"),
                              }),
                              expandsUpward: f.placement.startsWith("top"),
                              isReplyOpen: w?.notificationId === aO.id && w.turnKey === aO.turnKey,
                              expandedWidth: a?.viewportRect.width ?? d.pFD,
                              nativeSurfaceId: `activity-stashed-attention-${aO.id}`,
                              overflowContent:
                                null == S
                                  ? null
                                  : (0, i.jsx)(nr, {
                                      ariaLabel: aP.dismissNotificationAriaLabel,
                                      onClick: () => {
                                        S(aO)
                                      },
                                    }),
                              tabEdge: f.quickChat.stashedEdge,
                              children: (0, i.jsx)(n7, {
                                activitySwipeInput: t9,
                                swipeVisibleRight: t8,
                                animatesCssEntry: !1,
                                canExpandActivityStack: !1,
                                copy: aP,
                                isExpanded: !1,
                                isNotificationStackCollapsed: !1,
                                isStackedBehindPrimary: !1,
                                nativeSurfaceId: `activity-stashed-attention-expanded-${aO.id}`,
                                notification: aO,
                                notificationFollowUp: w,
                                publishesLayoutMeasurement: !1,
                                publishesFollowUpVisibility: !1,
                                prominence: "primary",
                                rendersMaterial: !1,
                                sideSpacingPx: a?.sideSpacingPx,
                                onActivateNotification: x,
                                onNotificationPointerEnter: L,
                                onOpenNotificationActions: F,
                                onRunNotificationAction: W,
                                onRunNotificationControl: X,
                                onSubmitQuestionOption: $,
                              }),
                            },
                            no(aO),
                          ),
                    onCaretPointChange: ie ? aj : void 0,
                    onDragPointerCancel: T,
                    onDragPointerDown: k,
                    onDragPointerMove: O,
                    onDragPointerUp: P,
                    onDraftChange: j,
                    onEditorExtraHeightChange: aU,
                    onReplyHeightChange: aB,
                    onFocusChange: U,
                    onGeometryAnimationFrame: E,
                    onLostDragPointerCapture: _,
                    onOpen: H,
                    onRemoveAppshots: z,
                    onStartVoice: eb?.onStart,
                    onSubmit: Q,
                    replyTo: eu,
                    onRemoveReply: Y,
                    onToggleActivity: tD ? R : G,
                    onVoiceSelectionChange: V,
                    presentedComposerHeight: iz,
                    orbitPreviewLayout: iH,
                    presentedComposerTop: iJ,
                    presentedExpansion: ig,
                    children:
                      null != D && tD
                        ? tK.map((e) => {
                            let n = C.findIndex((t) => {
                                let { id: a } = t
                                return a === e.notificationId
                              }),
                              o = C[n]
                            return null == o
                              ? null
                              : (0, i.jsx)(
                                  np,
                                  {
                                    flight: e,
                                    onStackCovered: (e) => {
                                      au((t) => ({
                                        ...t,
                                        stackCoveredFlightIds: new Set(t.stackCoveredFlightIds).add(e),
                                      }))
                                    },
                                    onComplete: D,
                                    onSourceReleased: (e) => {
                                      au((t) => ({
                                        ...t,
                                        sourceReleasedFlightIds: new Set(t.sourceReleasedFlightIds).add(e),
                                      }))
                                    },
                                    onGeometryAnimationFrame: E,
                                    children: (r) => {
                                      let {
                                        height: l,
                                        contentX: s,
                                        contentY: c,
                                        subtitleOpacity: u,
                                        titleFontWeight: d,
                                        appshots: p,
                                      } = r
                                      return (0, i.jsx)(n7, {
                                        activitySwipeInput: t9,
                                        swipeVisibleRight: t8,
                                        animatesCssEntry: !1,
                                        canExpandActivityStack: !1,
                                        presentedHeight: l,
                                        contentX: s,
                                        contentY: c,
                                        subtitleOpacity: u,
                                        titleFontWeight: d,
                                        attachmentContent: p,
                                        copy: t?.[n],
                                        retainsForeground: af.includes(e.notificationId),
                                        isForegroundCoveredByFlight: ah.includes(e.notificationId),
                                        hidesMaterialForHiddenStart: ag.includes(e.notificationId),
                                        isExpanded: !1,
                                        isNotificationStackCollapsed: !1,
                                        isStackedBehindPrimary: n > 0 && !nl,
                                        nativeSurfaceId: `activity-quick-chat-flight-${e.notificationId}`,
                                        notification: o,
                                        publishesLayoutMeasurement: !1,
                                        publishesFollowUpVisibility: !1,
                                        prominence: "primary",
                                        sideSpacingPx: a?.sideSpacingPx,
                                      })
                                    },
                                  },
                                  e.notificationId,
                                )
                          })
                        : null,
                  }),
                ],
              }),
            })
          : null
      ;(tq[391] !== aI || tq[392] !== f || tq[393] !== n3 || tq[394] !== nK || tq[395] !== a9
        ? ((tO =
            !a9 && aI && null != f.tray
              ? (0, i.jsx)("div", {
                  "aria-hidden": "true",
                  className: "absolute",
                  "data-avatar-overlay-hit-region": "tray-mascot-bridge",
                  style: (function (e) {
                    let t = e.tray
                    if (null == t) return {}
                    let a = e.mascot,
                      i = Math.min(t.left, a.left) - 8,
                      n = e.placement.startsWith("top"),
                      o = n ? t.top + t.height - 8 : a.top + a.height - 8
                    return {
                      height: Math.max(0, (n ? a.top + 8 : t.top + 8) - o),
                      left: i,
                      top: o,
                      width: Math.max(t.left + t.width, a.left + a.width) - i + 8,
                    }
                  })(f),
                  onPointerEnter: nK,
                  onPointerLeave: n3,
                })
              : null),
          (tq[391] = aI),
          (tq[392] = f),
          (tq[393] = n3),
          (tq[394] = nK),
          (tq[395] = a9),
          (tq[396] = tO))
        : (tO = tq[396]),
        tq[397] !== aw ||
        tq[398] !== nt ||
        tq[399] !== f ||
        tq[400] !== av ||
        tq[401] !== te ||
        tq[402] !== i2 ||
        tq[403] !== iE ||
        tq[404] !== iI ||
        tq[405] !== i3 ||
        tq[406] !== a9
          ? ((tP =
              null != iI || (a9 && null != i3)
                ? (0, i.jsx)("div", {
                    "aria-hidden": !aw || void 0,
                    className: aw ? void 0 : "invisible",
                    inert: !aw,
                    children: (0, i.jsx)(nb, {
                      anchorRect: a9 && nt ? (f.tray ?? te) : te,
                      hasActivityPills: nt,
                      layout: { ...f, mascot: iE },
                      presentedGeometry: i2,
                      prefersReducedMotion: !!av,
                      presentation: a9 ? "quick-chat" : "voice-orb",
                      statusText: a9 ? i3 : null,
                      text: iI ?? "",
                    }),
                  })
                : null),
            (tq[397] = aw),
            (tq[398] = nt),
            (tq[399] = f),
            (tq[400] = av),
            (tq[401] = te),
            (tq[402] = i2),
            (tq[403] = iE),
            (tq[404] = iI),
            (tq[405] = i3),
            (tq[406] = a9),
            (tq[407] = tP))
          : (tP = tq[407]),
        tq[408] !== nm ||
        tq[409] !== t ||
        tq[410] !== nA.offset ||
        tq[411] !== nd ||
        tq[412] !== nD ||
        tq[413] !== nk ||
        tq[414] !== ng ||
        tq[415] !== nB ||
        tq[416] !== nV ||
        tq[417] !== nO.translation ||
        tq[418] !== a ||
        tq[419] !== t9 ||
        tq[420] !== ay ||
        tq[421] !== tD ||
        tq[422] !== aw ||
        tq[423] !== ah ||
        tq[424] !== s ||
        tq[425] !== c ||
        tq[426] !== tB ||
        tq[427] !== nn ||
        tq[428] !== ag ||
        tq[429] !== ns ||
        tq[430] !== nu ||
        tq[431] !== nl ||
        tq[432] !== tV ||
        tq[433] !== aI ||
        tq[434] !== f.mascot.left ||
        tq[435] !== f.mascot.top ||
        tq[436] !== f.placement ||
        tq[437] !== f.tray ||
        tq[438] !== w ||
        tq[439] !== aa ||
        tq[440] !== C ||
        tq[441] !== x ||
        tq[442] !== A ||
        tq[443] !== M ||
        tq[444] !== S ||
        tq[445] !== E ||
        tq[446] !== N ||
        tq[447] !== L ||
        tq[448] !== F ||
        tq[449] !== j ||
        tq[450] !== U ||
        tq[451] !== W ||
        tq[452] !== X ||
        tq[453] !== $ ||
        tq[454] !== Q ||
        tq[455] !== t6?.visible ||
        tq[456] !== el ||
        tq[457] !== es ||
        tq[458] !== tQ ||
        tq[459] !== am ||
        tq[460] !== iV ||
        tq[461] !== af ||
        tq[462] !== n3 ||
        tq[463] !== nK ||
        tq[464] !== t8 ||
        tq[465] !== nX ||
        tq[466] !== a9
          ? ((tN =
              t6?.visible && null != f.tray && null != iV
                ? null
                : (0, i.jsx)(eh.P.div, {
                    animate: nD,
                    "aria-hidden": !aw || void 0,
                    className: (0, ev.A)(
                      "absolute text-sm text-default",
                      !aw && "invisible",
                      nn ? "cursor-interaction" : "pointer-events-none",
                    ),
                    initial: !1,
                    inert: !aw,
                    style: {
                      height: f.tray?.height,
                      left: f.mascot.left,
                      top: f.mascot.top + nO.translation,
                      visibility: null == f.tray ? "hidden" : void 0,
                      width: f.tray?.width,
                      x: nB,
                      y: nV,
                    },
                    transition: ay
                      ? { damping: d.IYj.damping, mass: d.IYj.mass, stiffness: d.IYj.stiffness, type: "spring" }
                      : { duration: 0 },
                    onPointerEnter: nK,
                    onPointerLeave: n3,
                    onUpdate: E,
                    children: (0, i.jsxs)(eh.P.div, {
                      className: (0, ev.A)("relative w-max", nc, nl && null == a && "overflow-y-clip"),
                      "data-avatar-overlay-hit-region": nn && aw ? "notification-tray" : void 0,
                      "data-avatar-overlay-size": "notification-tray",
                      style: { maxHeight: nX, top: -nd - nm + nA.offset, y: nk },
                      children: [
                        (0, i.jsx)("div", {
                          className: "h-0 overflow-hidden",
                          "data-avatar-overlay-size": "notification-tray-header",
                        }),
                        (0, i.jsx)(n2, {
                          animatesActivityLayout: ay,
                          activitySwipeInput: t9,
                          swipeVisibleRight: t8,
                          activityCopies: t,
                          activityStackPresentation: a,
                          presentedGeometry: ng,
                          retainedForegroundNotificationIds: af,
                          coveredForegroundNotificationIds: ah,
                          hiddenStartCoveredNotificationIds: ag,
                          enteringNotificationIds: am,
                          areActivityPillsLaidOut: null != f.tray,
                          areActivityPillsVisible: tD,
                          isQuickChatVisible: !a9 && aI,
                          isNotificationStackCollapsed: ns,
                          isNotificationTrayExpanded: nu,
                          isNotificationTrayVisiblyExpanded: nl,
                          isTrayAboveMascot: f.placement.startsWith("top"),
                          notifications: C,
                          notificationFollowUp: w,
                          expandedNotificationIds: tB,
                          quickChatDictation: el,
                          dictationAudio: s,
                          dictationHistory: c,
                          onActivityStackScroll: M,
                          onActivityPillsHidden: A,
                          onActivateNotification: x,
                          onNotificationPointerEnter: L,
                          trayMaxHeight: nX,
                          onDismissNotification: 1 === aa || tV ? S : void 0,
                          onOpenNotificationActions: F,
                          onNotificationExpansionChange: N,
                          onRunNotificationControl: X,
                          onRunNotificationAction: W,
                          onSubmitQuestionOption: $,
                          onQuickChatEditorActiveChange: (e) => {
                            ;((aC.current = e), U?.(e ? "editor" : null), e ? nK() : n3())
                          },
                          onQuickChatDraftChange: j,
                          onGeometryAnimationFrame: E,
                          onQuickChatPointerEnter: nK,
                          onQuickChatPointerLeave: n3,
                          onSubmitQuickChat: Q,
                          quickChatDraft: es,
                          quickChatEnabled: !a9 && tQ,
                        }),
                      ],
                    }),
                  })),
            (tq[408] = nm),
            (tq[409] = t),
            (tq[410] = nA.offset),
            (tq[411] = nd),
            (tq[412] = nD),
            (tq[413] = nk),
            (tq[414] = ng),
            (tq[415] = nB),
            (tq[416] = nV),
            (tq[417] = nO.translation),
            (tq[418] = a),
            (tq[419] = t9),
            (tq[420] = ay),
            (tq[421] = tD),
            (tq[422] = aw),
            (tq[423] = ah),
            (tq[424] = s),
            (tq[425] = c),
            (tq[426] = tB),
            (tq[427] = nn),
            (tq[428] = ag),
            (tq[429] = ns),
            (tq[430] = nu),
            (tq[431] = nl),
            (tq[432] = tV),
            (tq[433] = aI),
            (tq[434] = f.mascot.left),
            (tq[435] = f.mascot.top),
            (tq[436] = f.placement),
            (tq[437] = f.tray),
            (tq[438] = w),
            (tq[439] = aa),
            (tq[440] = C),
            (tq[441] = x),
            (tq[442] = A),
            (tq[443] = M),
            (tq[444] = S),
            (tq[445] = E),
            (tq[446] = N),
            (tq[447] = L),
            (tq[448] = F),
            (tq[449] = j),
            (tq[450] = U),
            (tq[451] = W),
            (tq[452] = X),
            (tq[453] = $),
            (tq[454] = Q),
            (tq[455] = t6?.visible),
            (tq[456] = el),
            (tq[457] = es),
            (tq[458] = tQ),
            (tq[459] = am),
            (tq[460] = iV),
            (tq[461] = af),
            (tq[462] = n3),
            (tq[463] = nK),
            (tq[464] = t8),
            (tq[465] = nX),
            (tq[466] = a9),
            (tq[467] = tN))
          : (tN = tq[467]))
      let ol = io ? null : n6
      return (
        tq[468] !== nH ||
        tq[469] !== tj ||
        tq[470] !== m ||
        tq[471] !== E ||
        tq[472] !== iW ||
        tq[473] !== nR ||
        tq[474] !== n5 ||
        tq[475] !== tT ||
        tq[476] !== on ||
        tq[477] !== tk ||
        tq[478] !== oo.top ||
        tq[479] !== or ||
        tq[480] !== tO ||
        tq[481] !== tP ||
        tq[482] !== tN ||
        tq[483] !== ol ||
        tq[484] !== iG ||
        tq[485] !== iX
          ? ((tL = (0, i.jsxs)(nH, {
              offsetX: iX,
              presentedPlacement: iW,
              ...tT,
              ref: m,
              anchorY: nR,
              animatesPresentation: tj,
              isTranscriptVisible: on,
              transcript: tk,
              transcriptHeight: iG,
              workAreaTop: oo.top,
              onGeometryAnimationFrame: E,
              children: [or, tO, tP, tN, n5, ol],
            })),
            (tq[468] = nH),
            (tq[469] = tj),
            (tq[470] = m),
            (tq[471] = E),
            (tq[472] = iW),
            (tq[473] = nR),
            (tq[474] = n5),
            (tq[475] = tT),
            (tq[476] = on),
            (tq[477] = tk),
            (tq[478] = oo.top),
            (tq[479] = or),
            (tq[480] = tO),
            (tq[481] = tP),
            (tq[482] = tN),
            (tq[483] = ol),
            (tq[484] = iG),
            (tq[485] = iX),
            (tq[486] = tL))
          : (tL = tq[486]),
        tq[487] !== ia || tq[488] !== n8 || tq[489] !== tR || tq[490] !== ot || tq[491] !== t_ || tq[492] !== tL
          ? ((tF = (0, i.jsxs)("main", {
              "aria-hidden": n8,
              className: tR,
              "data-avatar-overlay-debug-window-border": ot,
              inert: ia,
              children: [t_, tL],
            })),
            (tq[487] = ia),
            (tq[488] = n8),
            (tq[489] = tR),
            (tq[490] = ot),
            (tq[491] = t_),
            (tq[492] = tL),
            (tq[493] = tF))
          : (tF = tq[493]),
        tF
      )
    }
    function nQ(e) {
      let { coveredNotificationId: t, coveredNotificationWasVisible: a } = e
      return null == t || a ? [] : [t]
    }
    function nZ(e) {
      let { coveredNotificationId: t } = e
      return null == t ? [] : [t]
    }
    function nJ(e) {
      let { notificationId: t } = e
      return t
    }
    function n0() {
      return { sourceReleasedFlightIds: new Set(), stackCoveredFlightIds: new Set() }
    }
    function n1() {
      return new nL()
    }
    function n2(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        d,
        p = (0, n.c)(66),
        {
          animatesActivityLayout: m,
          activitySwipeInput: f,
          swipeVisibleRight: h,
          activityCopies: g,
          activityStackPresentation: v,
          presentedGeometry: y,
          enteringNotificationIds: w,
          retainedForegroundNotificationIds: b,
          coveredForegroundNotificationIds: C,
          hiddenStartCoveredNotificationIds: x,
          areActivityPillsLaidOut: A,
          areActivityPillsVisible: M,
          expandedNotificationIds: I,
          isQuickChatVisible: S,
          isNotificationStackCollapsed: E,
          isNotificationTrayExpanded: R,
          isNotificationTrayVisiblyExpanded: _,
          isTrayAboveMascot: T,
          notifications: k,
          notificationFollowUp: O,
          quickChatDictation: P,
          dictationAudio: N,
          dictationHistory: L,
          onActivityStackScroll: F,
          onActivityPillsHidden: q,
          onActivateNotification: j,
          onNotificationPointerEnter: D,
          onDismissNotification: U,
          onOpenNotificationActions: H,
          onNotificationExpansionChange: B,
          onGeometryAnimationFrame: V,
          onQuickChatEditorActiveChange: z,
          onQuickChatDraftChange: Y,
          onQuickChatPointerEnter: W,
          onQuickChatPointerLeave: X,
          onRunNotificationControl: G,
          onRunNotificationAction: $,
          onSubmitQuestionOption: K,
          onSubmitQuickChat: Q,
          trayMaxHeight: Z,
          quickChatDraft: J,
          quickChatEnabled: ee,
        } = e
      p[0] !== T
        ? ((t = (e) => {
            let { overhang: t } = e
            return T ? -t : t
          }),
          (p[0] = T),
          (p[1] = t))
        : (t = p[1])
      let et = (0, ew.G)(y, t)
      p[2] !== v ||
      p[3] !== N ||
      p[4] !== L ||
      p[5] !== S ||
      p[6] !== T ||
      p[7] !== k ||
      p[8] !== V ||
      p[9] !== Y ||
      p[10] !== z ||
      p[11] !== W ||
      p[12] !== X ||
      p[13] !== Q ||
      p[14] !== P ||
      p[15] !== J ||
      p[16] !== ee ||
      p[17] !== et
        ? ((a = ee
            ? (0, i.jsx)(eh.P.div, {
                className: (0, ev.A)("relative h-10 w-[344px] shrink-0", T ? "order-first" : "order-last"),
                style: { y: k.length > 0 && null != v ? et : 0 },
                children: (0, i.jsx)("div", {
                  className: "absolute top-0 left-1/2 -translate-x-1/2",
                  children: (0, i.jsx)(eg.N, {
                    children: S
                      ? (0, i.jsx)(n4, {
                          hasNotifications: k.length > 0,
                          quickChatDictation: P,
                          dictationAudio: N,
                          dictationHistory: L,
                          onActiveChange: z,
                          onAnimationFrame: V,
                          onDraftChange: Y,
                          onPointerEnter: W,
                          onPointerLeave: X,
                          onSubmitQuickChat: Q,
                          quickChatDraft: J,
                        })
                      : null,
                  }),
                }),
              })
            : null),
          (p[2] = v),
          (p[3] = N),
          (p[4] = L),
          (p[5] = S),
          (p[6] = T),
          (p[7] = k),
          (p[8] = V),
          (p[9] = Y),
          (p[10] = z),
          (p[11] = W),
          (p[12] = X),
          (p[13] = Q),
          (p[14] = P),
          (p[15] = J),
          (p[16] = ee),
          (p[17] = et),
          (p[18] = a))
        : (a = p[18])
      let ea = a
      p[19] !== Z ? ((o = { maxHeight: Z }), (p[19] = Z), (p[20] = o)) : (o = p[20])
      let ei = M && A ? 1 : 0
      p[21] !== ei ? ((r = { opacity: ei }), (p[21] = ei), (p[22] = r)) : (r = p[22])
      let en = !M || void 0,
        eo = !M || void 0
      return (
        p[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = { duration: 0.18, ease: "easeOut" }), (p[23] = l))
          : (l = p[23]),
        p[24] !== M || p[25] !== q
          ? ((s = () => {
              M || q?.()
            }),
            (p[24] = M),
            (p[25] = q),
            (p[26] = s))
          : (s = p[26]),
        p[27] !== g ||
        p[28] !== v ||
        p[29] !== f ||
        p[30] !== m ||
        p[31] !== C ||
        p[32] !== w ||
        p[33] !== I ||
        p[34] !== x ||
        p[35] !== E ||
        p[36] !== R ||
        p[37] !== _ ||
        p[38] !== T ||
        p[39] !== O ||
        p[40] !== k ||
        p[41] !== j ||
        p[42] !== F ||
        p[43] !== U ||
        p[44] !== V ||
        p[45] !== B ||
        p[46] !== D ||
        p[47] !== H ||
        p[48] !== $ ||
        p[49] !== G ||
        p[50] !== K ||
        p[51] !== y ||
        p[52] !== b ||
        p[53] !== h
          ? ((c = (0, i.jsx)(n3, {
              animatesActivityLayout: m,
              activitySwipeInput: f,
              swipeVisibleRight: h,
              activityCopies: g,
              activityStackPresentation: v,
              enteringNotificationIds: w,
              retainedForegroundNotificationIds: b,
              coveredForegroundNotificationIds: C,
              hiddenStartCoveredNotificationIds: x,
              isNotificationStackCollapsed: E,
              isExpanded: R,
              isVisiblyExpanded: _,
              isTrayAboveMascot: T,
              notifications: k,
              presentedGeometry: y,
              notificationFollowUp: O,
              expandedNotificationIds: I,
              onActivityStackScroll: F,
              onActivateNotification: j,
              onNotificationPointerEnter: D,
              onAnimationFrame: V,
              onDismissNotification: U,
              onOpenNotificationActions: H,
              onNotificationExpansionChange: B,
              onRunNotificationControl: G,
              onRunNotificationAction: $,
              onSubmitQuestionOption: K,
            })),
            (p[27] = g),
            (p[28] = v),
            (p[29] = f),
            (p[30] = m),
            (p[31] = C),
            (p[32] = w),
            (p[33] = I),
            (p[34] = x),
            (p[35] = E),
            (p[36] = R),
            (p[37] = _),
            (p[38] = T),
            (p[39] = O),
            (p[40] = k),
            (p[41] = j),
            (p[42] = F),
            (p[43] = U),
            (p[44] = V),
            (p[45] = B),
            (p[46] = D),
            (p[47] = H),
            (p[48] = $),
            (p[49] = G),
            (p[50] = K),
            (p[51] = y),
            (p[52] = b),
            (p[53] = h),
            (p[54] = c))
          : (c = p[54]),
        p[55] !== V || p[56] !== c || p[57] !== r || p[58] !== en || p[59] !== eo || p[60] !== s
          ? ((u = (0, i.jsx)(eg.N, {
              initial: !1,
              children: (0, i.jsx)(
                eh.P.div,
                {
                  animate: r,
                  "aria-hidden": en,
                  initial: !1,
                  inert: eo,
                  transition: l,
                  onAnimationComplete: s,
                  onUpdate: V,
                  children: c,
                },
                "activity-pills",
              ),
            })),
            (p[55] = V),
            (p[56] = c),
            (p[57] = r),
            (p[58] = en),
            (p[59] = eo),
            (p[60] = s),
            (p[61] = u))
          : (u = p[61]),
        p[62] !== u || p[63] !== o || p[64] !== ea
          ? ((d = (0, i.jsxs)("div", {
              className: "flex flex-col items-center gap-3",
              "data-avatar-overlay-size": "notification-tray-list",
              style: o,
              children: [ea, u],
            })),
            (p[62] = u),
            (p[63] = o),
            (p[64] = ea),
            (p[65] = d))
          : (d = p[65]),
        d
      )
    }
    function n3(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c = (0, n.c)(85),
        {
          animatesActivityLayout: u,
          activitySwipeInput: d,
          swipeVisibleRight: p,
          activityCopies: m,
          activityStackPresentation: f,
          enteringNotificationIds: h,
          retainedForegroundNotificationIds: g,
          coveredForegroundNotificationIds: v,
          hiddenStartCoveredNotificationIds: w,
          expandedNotificationIds: b,
          isNotificationStackCollapsed: C,
          isExpanded: x,
          isVisiblyExpanded: A,
          isTrayAboveMascot: M,
          notifications: I,
          notificationFollowUp: S,
          presentedGeometry: E,
          onActivityStackScroll: R,
          onActivateNotification: _,
          onNotificationPointerEnter: T,
          onAnimationFrame: k,
          onDismissNotification: O,
          onOpenNotificationActions: P,
          onNotificationExpansionChange: N,
          onRunNotificationControl: L,
          onRunNotificationAction: F,
          onSubmitQuestionOption: q,
        } = e,
        j = (0, y.A)()
      if (0 === I.length) return null
      c[0] !== u ? ((t = u ? iZ.K : { duration: 0 }), (c[0] = u), (c[1] = t)) : (t = c[1])
      let D = t
      if (null != f) {
        let e, t
        return (
          c[2] !== f.sideSpacingPx ||
          c[3] !== d ||
          c[4] !== b ||
          c[5] !== w ||
          c[6] !== C ||
          c[7] !== S ||
          c[8] !== _ ||
          c[9] !== k ||
          c[10] !== O ||
          c[11] !== N ||
          c[12] !== T ||
          c[13] !== P ||
          c[14] !== F ||
          c[15] !== L ||
          c[16] !== q ||
          c[17] !== p
            ? ((e = (e) => {
                let {
                  animatesCssEntry: t,
                  canExpandActivityStack: a,
                  copy: n,
                  cssHeight: o,
                  presentedHeight: r,
                  cssWidth: l,
                  isPrimarySurface: s,
                  isStackedBehindPrimary: c,
                  retainsForeground: u,
                  isForegroundCoveredByFlight: m,
                  nativeSurfaceId: h,
                  notification: g,
                  onMaterialUpdate: v,
                  publishesLayoutMeasurement: y,
                } = e
                return (0, i.jsx)(n7, {
                  activitySwipeInput: d,
                  swipeVisibleRight: p,
                  animatesCssEntry: t,
                  canExpandActivityStack: a,
                  copy: n,
                  cssHeight: o,
                  presentedHeight: r,
                  cssWidth: l,
                  isStackedBehindPrimary: c,
                  retainsForeground: u,
                  isForegroundCoveredByFlight: m,
                  hidesMaterialForHiddenStart: w.includes(g.id),
                  isNotificationStackCollapsed: C,
                  nativeSurfaceId: h,
                  notification: g,
                  notificationFollowUp: S,
                  publishesFollowUpVisibility: !0,
                  publishesLayoutMeasurement: y,
                  isExpanded: null == N ? void 0 : b.includes(g.id),
                  onAnimationFrame: k,
                  onMaterialUpdate: v,
                  prominence: s ? "primary" : "secondary",
                  sideSpacingPx: f.sideSpacingPx,
                  onActivateNotification: _,
                  onNotificationPointerEnter: T,
                  onDismissNotification: O,
                  onOpenNotificationActions: P,
                  onExpansionChange: N,
                  onRunNotificationControl: L,
                  onRunNotificationAction: F,
                  onSubmitQuestionOption: q,
                })
              }),
              (c[2] = f.sideSpacingPx),
              (c[3] = d),
              (c[4] = b),
              (c[5] = w),
              (c[6] = C),
              (c[7] = S),
              (c[8] = _),
              (c[9] = k),
              (c[10] = O),
              (c[11] = N),
              (c[12] = T),
              (c[13] = P),
              (c[14] = F),
              (c[15] = L),
              (c[16] = q),
              (c[17] = p),
              (c[18] = e))
            : (e = c[18]),
          c[19] !== m ||
          c[20] !== f ||
          c[21] !== v ||
          c[22] !== h ||
          c[23] !== x ||
          c[24] !== M ||
          c[25] !== A ||
          c[26] !== I ||
          c[27] !== R ||
          c[28] !== k ||
          c[29] !== E ||
          c[30] !== g ||
          c[31] !== D ||
          c[32] !== e
            ? ((t = (0, i.jsx)(iB, {
                activityCopies: m,
                activityStackPresentation: f,
                enteringNotificationIds: h,
                retainedForegroundNotificationIds: g,
                coveredForegroundNotificationIds: v,
                isExpanded: x,
                isVisiblyExpanded: A,
                isTrayAboveMascot: M,
                notifications: I,
                presentedGeometry: E,
                onActivityStackScroll: R,
                onAnimationFrame: k,
                renderNotificationRow: e,
                stackTransition: D,
              })),
              (c[19] = m),
              (c[20] = f),
              (c[21] = v),
              (c[22] = h),
              (c[23] = x),
              (c[24] = M),
              (c[25] = A),
              (c[26] = I),
              (c[27] = R),
              (c[28] = k),
              (c[29] = E),
              (c[30] = g),
              (c[31] = D),
              (c[32] = e),
              (c[33] = t))
            : (t = c[33]),
          t
        )
      }
      c[34] !== m?.[0]?.notificationListAriaLabel || c[35] !== j
        ? ((a = m?.[0]?.notificationListAriaLabel ?? j.formatMessage(nG.notificationList)),
          (c[34] = m?.[0]?.notificationListAriaLabel),
          (c[35] = j),
          (c[36] = a))
        : (a = c[36])
      let U = x ? "flex flex-col gap-2" : "pb-2"
      if (
        (c[37] !== U
          ? ((o = (0, ev.A)("relative w-full max-w-full shrink-0", U)), (c[37] = U), (c[38] = o))
          : (o = c[38]),
        c[39] !== x || c[40] !== I.length
          ? ((r = !x && I.length > 1 ? (0, i.jsx)(en.D0, { notificationCount: I.length }) : null),
            (c[39] = x),
            (c[40] = I.length),
            (c[41] = r))
          : (r = c[41]),
        c[42] !== m ||
          c[43] !== d ||
          c[44] !== b ||
          c[45] !== x ||
          c[46] !== C ||
          c[47] !== S ||
          c[48] !== I ||
          c[49] !== _ ||
          c[50] !== k ||
          c[51] !== O ||
          c[52] !== N ||
          c[53] !== T ||
          c[54] !== P ||
          c[55] !== F ||
          c[56] !== L ||
          c[57] !== q ||
          c[58] !== D ||
          c[59] !== p)
      ) {
        let e
        ;(c[61] !== m ||
        c[62] !== d ||
        c[63] !== b ||
        c[64] !== x ||
        c[65] !== C ||
        c[66] !== S ||
        c[67] !== I.length ||
        c[68] !== _ ||
        c[69] !== k ||
        c[70] !== O ||
        c[71] !== N ||
        c[72] !== T ||
        c[73] !== P ||
        c[74] !== F ||
        c[75] !== L ||
        c[76] !== q ||
        c[77] !== D ||
        c[78] !== p
          ? ((e = (e, t) => {
              let a = nl.W[t],
                n = 0 === t ? "primary" : "secondary",
                o = !x && "secondary" === n
              if (o) return null
              let r = "relative z-10"
              return (
                "primary" === n
                  ? (r = "relative z-20")
                  : o && (r = "pointer-events-none absolute top-0 right-0 left-0 z-10"),
                (0, i.jsx)(
                  eh.P.div,
                  {
                    layout: !0,
                    layoutDependency: x,
                    "aria-hidden": o ? "true" : void 0,
                    "data-avatar-overlay-backing-canvas": o ? "true" : void 0,
                    className: r,
                    transition: D,
                    onUpdate: k,
                    children: (0, i.jsx)(n7, {
                      activitySwipeInput: d,
                      swipeVisibleRight: p,
                      canExpandActivityStack: !x && "primary" === n && I.length > 1,
                      copy: m?.[t],
                      isStackedBehindPrimary: o,
                      isNotificationStackCollapsed: C,
                      nativeSurfaceId: a,
                      notification: e,
                      notificationFollowUp: S,
                      publishesFollowUpVisibility: !0,
                      isExpanded: null == N ? void 0 : b.includes(e.id),
                      onAnimationFrame: k,
                      prominence: n,
                      onActivateNotification: _,
                      onNotificationPointerEnter: T,
                      onDismissNotification: O,
                      onOpenNotificationActions: P,
                      onExpansionChange: N,
                      onRunNotificationControl: L,
                      onRunNotificationAction: F,
                      onSubmitQuestionOption: q,
                    }),
                  },
                  e.id,
                )
              )
            }),
            (c[61] = m),
            (c[62] = d),
            (c[63] = b),
            (c[64] = x),
            (c[65] = C),
            (c[66] = S),
            (c[67] = I.length),
            (c[68] = _),
            (c[69] = k),
            (c[70] = O),
            (c[71] = N),
            (c[72] = T),
            (c[73] = P),
            (c[74] = F),
            (c[75] = L),
            (c[76] = q),
            (c[77] = D),
            (c[78] = p),
            (c[79] = e))
          : (e = c[79]),
          (l = I.slice(0, nl.W.length).map(e)),
          (c[42] = m),
          (c[43] = d),
          (c[44] = b),
          (c[45] = x),
          (c[46] = C),
          (c[47] = S),
          (c[48] = I),
          (c[49] = _),
          (c[50] = k),
          (c[51] = O),
          (c[52] = N),
          (c[53] = T),
          (c[54] = P),
          (c[55] = F),
          (c[56] = L),
          (c[57] = q),
          (c[58] = D),
          (c[59] = p),
          (c[60] = l))
      } else l = c[60]
      return (
        c[80] !== a || c[81] !== o || c[82] !== r || c[83] !== l
          ? ((s = (0, i.jsxs)("div", { "aria-label": a, className: o, role: "list", children: [r, l] })),
            (c[80] = a),
            (c[81] = o),
            (c[82] = r),
            (c[83] = l),
            (c[84] = s))
          : (s = c[84]),
        s
      )
    }
    function n4(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        d,
        p,
        m,
        f,
        h,
        v,
        w,
        b,
        C,
        x,
        A,
        M,
        I,
        S,
        E,
        R,
        _,
        T,
        k,
        O,
        P,
        N,
        L,
        F,
        q,
        j = (0, n.c)(102),
        {
          hasNotifications: D,
          quickChatDictation: U,
          dictationAudio: H,
          dictationHistory: B,
          onActiveChange: V,
          onAnimationFrame: z,
          onDraftChange: X,
          onPointerEnter: G,
          onPointerLeave: $,
          onSubmitQuickChat: Q,
          quickChatDraft: Z,
        } = e,
        J = (0, u.gh)(el.u),
        ee = (0, y.A)(),
        et = (0, g.useRef)(null),
        ea = (0, g.useRef)(!1),
        [ei, er] = (0, g.useState)(!1),
        [es, ec] = (0, g.useState)(""),
        eu = Z ?? es,
        [ed, ep] = (0, g.useState)(null)
      j[0] !== eu ? ((t = eu.trim()), (j[0] = eu), (j[1] = t)) : (t = j[1])
      let em = t,
        ef = D ? 160 : 85,
        eg = 0 === eu.length ? ef : 344
      j[2] !== V
        ? ((a = () => {
            ea.current && ((ea.current = !1), V?.(!1))
          }),
          (j[2] = V),
          (j[3] = a))
        : (a = j[3])
      let ey = (0, g.useEffectEvent)(a)
      j[4] !== z
        ? ((o = () => {
            null != z && window.requestAnimationFrame(z)
          }),
          (j[4] = z),
          (j[5] = o))
        : (o = j[5])
      let ew = o
      j[6] !== X || j[7] !== ew || j[8] !== Z
        ? ((r = (e) => {
            ;(null == Z && ec(e), X?.(e), ew(), ep(null))
          }),
          (j[6] = X),
          (j[7] = ew),
          (j[8] = Z),
          (j[9] = r))
        : (r = j[9])
      let eb = r
      j[10] !== ee || j[11] !== ei || j[12] !== Q || j[13] !== eb
        ? ((l = async (e) => {
            0 === e.length ||
              ei ||
              null == Q ||
              (er(!0),
              ep(null),
              await (async () => {
                try {
                  ;(await Q(e), eb(""))
                } catch {
                  ep(ee.formatMessage(nG.quickChatError))
                }
              })().finally(() => {
                er(!1)
              }))
          }),
          (j[10] = ee),
          (j[11] = ei),
          (j[12] = Q),
          (j[13] = eb),
          (j[14] = l))
        : (l = j[14])
      let eC = l,
        ex = U.supportState,
        eA = !0 === ex
      ;(j[15] !== eu || j[16] !== eb
        ? ((s = (e) => {
            let t = (0, a9.hJ)(eu, e)
            t !== eu && (eb(t), et.current?.focus())
          }),
          (j[15] = eu),
          (j[16] = eb),
          (j[17] = s))
        : (s = j[17]),
        j[18] !== eu || j[19] !== eb || j[20] !== eC
          ? ((c = (e) => {
              let t = (0, a9.hJ)(eu, e)
              ;(eb(t), eC(t.trim()))
            }),
            (j[18] = eu),
            (j[19] = eb),
            (j[20] = eC),
            (j[21] = c))
          : (c = j[21]),
        j[22] !== eu ? ((d = () => eu), (j[22] = eu), (j[23] = d)) : (d = j[23]),
        j[24] !== ee || j[25] !== J
          ? ((p = (e) => {
              ;(J.get(W.Id).danger((0, iN.A)(ee, "start", e).message, {
                errorAnalytics: { toastId: "avatarOverlayNativeFrame.onStartError.start" },
              }),
                tZ.v.error("[AvatarOverlay] unable to start dictation", { safe: {}, sensitive: { error: e } }))
            }),
            (m = (e) => {
              ;(J.get(W.Id).danger((0, iN.A)(ee, "transcription", e).message, {
                errorAnalytics: { toastId: "avatarOverlayNativeFrame.onTranscribeError.transcription" },
              }),
                tZ.v.error("[AvatarOverlay] dictation failed", { safe: {}, sensitive: { error: e } }))
            }),
            (f = () => {
              J.get(W.Id).danger(
                ee.formatMessage({
                  id: "composer.dictation.unsupported",
                  defaultMessage: "Dictation is not available on this device",
                  description: "Toast text shown when dictation is not supported on the current device",
                }),
                { errorAnalytics: { toastId: "composer.dictation.unsupported" } },
              )
            }),
            (j[24] = ee),
            (j[25] = J),
            (j[26] = p),
            (j[27] = m),
            (j[28] = f))
          : ((p = j[26]), (m = j[27]), (f = j[28])),
        j[29] !== H ||
        j[30] !== B ||
        j[31] !== U.cleanupEnabled ||
        j[32] !== U.streamingEnabled ||
        j[33] !== p ||
        j[34] !== m ||
        j[35] !== f ||
        j[36] !== eA ||
        j[37] !== s ||
        j[38] !== c ||
        j[39] !== d
          ? ((h = {
              productSurface: "work",
              cleanupEnabled: U.cleanupEnabled,
              dictationAudio: H,
              dictationHistory: B,
              enabled: eA,
              onTranscriptInsert: s,
              onTranscriptSend: c,
              getSurroundingText: d,
              onStartError: p,
              onTranscribeError: m,
              onUnsupported: f,
              streamingEnabled: U.streamingEnabled,
            }),
            (j[29] = H),
            (j[30] = B),
            (j[31] = U.cleanupEnabled),
            (j[32] = U.streamingEnabled),
            (j[33] = p),
            (j[34] = m),
            (j[35] = f),
            (j[36] = eA),
            (j[37] = s),
            (j[38] = c),
            (j[39] = d),
            (j[40] = h))
          : (h = j[40]))
      let {
          canRetryDictation: eM,
          isDictationStarting: eI,
          isDictating: eS,
          isTranscribing: eE,
          retryDictation: eR,
          startDictation: e_,
          stopDictation: eT,
        } = (0, ie.bS)(h),
        ek = !1 !== ex && (0 === em.length || eI || eS || eE || eM)
      ;(j[41] !== z
        ? ((v = () => (
            z?.(),
            () => {
              null != z && window.requestAnimationFrame(z)
            }
          )),
          (w = [z]),
          (j[41] = z),
          (j[42] = v),
          (j[43] = w))
        : ((v = j[42]), (w = j[43])),
        (0, g.useLayoutEffect)(v, w),
        j[44] !== ey
          ? ((b = () => () => {
              ey()
            }),
            (j[44] = ey),
            (j[45] = b))
          : (b = j[45]),
        j[46] === Symbol.for("react.memo_cache_sentinel") ? ((C = []), (j[46] = C)) : (C = j[46]),
        (0, g.useEffect)(b, C),
        j[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = () => {
              ea.current && et.current?.focus()
            }),
            (A = []),
            (j[47] = x),
            (j[48] = A))
          : ((x = j[47]), (A = j[48])),
        (0, K.JX)("avatar-overlay-keyboard-interaction-ready", x, A),
        j[49] !== eS || j[50] !== eE || j[51] !== eC || j[52] !== em
          ? ((M = async (e) => {
              ;(e.preventDefault(), e.stopPropagation(), eS || eE || (await eC(em)))
            }),
            (j[49] = eS),
            (j[50] = eE),
            (j[51] = eC),
            (j[52] = em),
            (j[53] = M))
          : (M = j[53]))
      let eO = M
      return (
        j[54] !== V
          ? ((I = () => {
              ;((ea.current = !0), V?.(!0))
            }),
            (S = (e) => {
              let t = e.relatedTarget
              ;(t instanceof Node && e.currentTarget.contains(t)) || ((ea.current = !1), V?.(!1))
            }),
            (E = () => {
              ;((ea.current = !0), V?.(!0))
            }),
            (j[54] = V),
            (j[55] = I),
            (j[56] = S),
            (j[57] = E))
          : ((I = j[55]), (S = j[56]), (E = j[57])),
        j[58] !== eO
          ? ((R = (e) => {
              eO(e)
            }),
            (j[58] = eO),
            (j[59] = R))
          : (R = j[59]),
        j[60] !== ee ? ((_ = ee.formatMessage(nG.quickChat)), (j[60] = ee), (j[61] = _)) : (_ = j[61]),
        j[62] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, ev.A)(
              "min-w-0 flex-1 bg-transparent text-[14px] leading-[18px] font-medium outline-none",
              "text-default placeholder:text-secondary",
            )),
            (j[62] = T))
          : (T = j[62]),
        j[63] !== D || j[64] !== ee
          ? ((k = D ? ee.formatMessage(nG.startNewTaskPlaceholder) : ee.formatMessage(nG.askPlaceholder)),
            (j[63] = D),
            (j[64] = ee),
            (j[65] = k))
          : (k = j[65]),
        j[66] !== eb
          ? ((O = (e) => {
              eb(e.currentTarget.value)
            }),
            (j[66] = eb),
            (j[67] = O))
          : (O = j[67]),
        j[68] !== eu || j[69] !== _ || j[70] !== k || j[71] !== O
          ? ((P = (0, i.jsx)("input", {
              ref: et,
              "aria-label": _,
              className: T,
              "data-avatar-overlay-composition-autofocus": "true",
              placeholder: k,
              value: eu,
              onChange: O,
            })),
            (j[68] = eu),
            (j[69] = _),
            (j[70] = k),
            (j[71] = O),
            (j[72] = P))
          : (P = j[72]),
        j[73] === Symbol.for("react.memo_cache_sentinel")
          ? ((N = { duration: 0.18, ease: [0.16, 1, 0.3, 1] }), (j[73] = N))
          : (N = j[73]),
        j[74] !== eM ||
        j[75] !== ex ||
        j[76] !== ee ||
        j[77] !== eS ||
        j[78] !== ek ||
        j[79] !== eI ||
        j[80] !== ei ||
        j[81] !== eE ||
        j[82] !== eR ||
        j[83] !== e_ ||
        j[84] !== eT ||
        j[85] !== em
          ? ((L = (0, i.jsx)(eh.P.div, {
              className: "shrink-0",
              layout: "position",
              transition: N,
              children: ek
                ? (0, i.jsx)(a8.Y, {
                    className:
                      "size-7 shrink-0 !bg-[#636363] !text-white enabled:hover:!bg-[#636363] disabled:opacity-100 electron:!rounded-full",
                    color: "secondary",
                    idleIcon: (0, i.jsx)(Y.ERJ, {}),
                    isStarting: eI,
                    isDictating: eS,
                    isVisible: !0,
                    isTranscribing: eE,
                    canRetryDictation: eM,
                    disabled: !0 !== ex || ei || eE,
                    retryDictation: eR,
                    size: "icon",
                    startDictation: e_,
                    stopDictation: eT,
                  })
                : (0, i.jsx)(eo.$, {
                    "aria-label": ee.formatMessage(nG.sendQuickChat),
                    className:
                      "size-7 shrink-0 !bg-[#636363] !text-white enabled:hover:!bg-[#636363] disabled:opacity-100 electron:!rounded-full",
                    color: "secondary",
                    disabled: 0 === em.length || ei,
                    loading: ei,
                    size: "icon",
                    type: "submit",
                    children: ei ? null : (0, i.jsx)(ia.A, { className: "icon-sm" }),
                  }),
            })),
            (j[74] = eM),
            (j[75] = ex),
            (j[76] = ee),
            (j[77] = eS),
            (j[78] = ek),
            (j[79] = eI),
            (j[80] = ei),
            (j[81] = eE),
            (j[82] = eR),
            (j[83] = e_),
            (j[84] = eT),
            (j[85] = em),
            (j[86] = L))
          : (L = j[86]),
        j[87] !== ed
          ? ((F = null != ed ? (0, i.jsx)("span", { className: "sr-only", role: "alert", children: ed }) : null),
            (j[87] = ed),
            (j[88] = F))
          : (F = j[88]),
        j[89] !== ef ||
        j[90] !== z ||
        j[91] !== G ||
        j[92] !== $ ||
        j[93] !== I ||
        j[94] !== S ||
        j[95] !== E ||
        j[96] !== R ||
        j[97] !== P ||
        j[98] !== L ||
        j[99] !== F ||
        j[100] !== eg
          ? ((q = (0, i.jsxs)(en.kP, {
              emptyWidth: ef,
              width: eg,
              onFocusCapture: I,
              onBlurCapture: S,
              onPointerDown: E,
              onPointerEnter: G,
              onPointerLeave: $,
              onSubmit: R,
              onUpdate: z,
              children: [P, L, F],
            })),
            (j[89] = ef),
            (j[90] = z),
            (j[91] = G),
            (j[92] = $),
            (j[93] = I),
            (j[94] = S),
            (j[95] = E),
            (j[96] = R),
            (j[97] = P),
            (j[98] = L),
            (j[99] = F),
            (j[100] = eg),
            (j[101] = q))
          : (q = j[101]),
        q
      )
    }
    function n5(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        u,
        d,
        p,
        m,
        f,
        h,
        v = (0, n.c)(49),
        {
          ref: w,
          animatesOwnHeight: b,
          autoFocus: C,
          draft: x,
          hasSubmissionError: A,
          inputRef: M,
          isSubmitting: I,
          notificationTitle: S,
          prefersReducedMotion: E,
          onAnimationFrame: R,
          onClose: _,
          onDraftChange: T,
          onSubmitFollowUp: k,
        } = e,
        O = (0, y.A)(),
        P = (0, ea.tF)(),
        N = (0, g.useRef)(null)
      v[0] !== T
        ? ((t = (e) => {
            let t = (0, iJ.JG)(e.currentTarget)
            N.current !== t && ((N.current = t), T(e.currentTarget.value, (0, iJ.$x)(e.currentTarget)))
          }),
          (v[0] = T),
          (v[1] = t))
        : (t = v[1])
      let L = t,
        F = b ? "auto" : void 0,
        q = b ? 14 : void 0
      v[2] !== F || v[3] !== q
        ? ((a = { height: F, marginBottom: q, opacity: 1 }), (v[2] = F), (v[3] = q), (v[4] = a))
        : (a = v[4])
      let j = (b || P) && "mx-3.5",
        D = !b && "mb-3.5"
      v[5] !== j || v[6] !== D
        ? ((o = (0, ev.A)(
            "grid grid-cols-1 items-center overflow-hidden rounded-[24px] bg-activity-input px-2.5 py-2 no-drag",
            j,
            D,
          )),
          (v[5] = j),
          (v[6] = D),
          (v[7] = o))
        : (o = v[7])
      let U = b ? 0 : void 0,
        H = b ? 0 : void 0
      v[8] !== U || v[9] !== H
        ? ((r = { height: U, marginBottom: H, opacity: 0 }), (v[8] = U), (v[9] = H), (v[10] = r))
        : (r = v[10])
      let B = b ? 0 : void 0,
        V = b ? 0 : void 0
      ;(v[11] !== B || v[12] !== V
        ? ((l = { height: B, marginBottom: V, opacity: 0 }), (v[11] = B), (v[12] = V), (v[13] = l))
        : (l = v[13]),
        v[14] !== E
          ? ((s = E ? { duration: 0 } : { ...iZ.K, opacity: { duration: 0.18, ease: "easeOut" } }),
            (v[14] = E),
            (v[15] = s))
          : (s = v[15]),
        v[16] !== x || v[17] !== I || v[18] !== k
          ? ((c = (e) => {
              e.preventDefault()
              let t = x.trim()
              0 === t.length || I || k(t)
            }),
            (v[16] = x),
            (v[17] = I),
            (v[18] = k),
            (v[19] = c))
          : (c = v[19]),
        v[20] !== O || v[21] !== S
          ? ((u = O.formatMessage(
              {
                id: "avatarOverlay.notificationFollowUpInput",
                defaultMessage: "Follow up on {title}",
                description: "Accessible label for the floating avatar notification follow-up input",
              },
              { title: S },
            )),
            (v[20] = O),
            (v[21] = S),
            (v[22] = u))
          : (u = v[22]))
      let z = C ? "true" : void 0
      return (
        v[23] !== O
          ? ((d = O.formatMessage({
              id: "avatarOverlay.notificationFollowUpPlaceholder",
              defaultMessage: "Follow up",
              description: "Placeholder for the floating avatar notification follow-up input",
            })),
            (v[23] = O),
            (v[24] = d))
          : (d = v[24]),
        v[25] !== _
          ? ((p = (e) => {
              if ("Enter" === e.key && !e.shiftKey && !e.nativeEvent.isComposing) {
                ;(e.preventDefault(), e.currentTarget.form?.requestSubmit())
                return
              }
              "Escape" === e.key && (e.stopPropagation(), _())
            }),
            (v[25] = _),
            (v[26] = p))
          : (p = v[26]),
        v[27] !== C ||
        v[28] !== x ||
        v[29] !== L ||
        v[30] !== M ||
        v[31] !== u ||
        v[32] !== z ||
        v[33] !== d ||
        v[34] !== p
          ? ((m = (0, i.jsx)("textarea", {
              ref: M,
              "aria-label": u,
              autoFocus: C,
              className:
                "[field-sizing:content] max-h-20 min-w-0 resize-none overflow-y-auto bg-transparent text-[13px] leading-4 text-default outline-none placeholder:text-tertiary",
              "data-avatar-overlay-composition-autofocus": z,
              placeholder: d,
              rows: 1,
              value: x,
              onChange: L,
              onSelect: L,
              onKeyDown: p,
            })),
            (v[27] = C),
            (v[28] = x),
            (v[29] = L),
            (v[30] = M),
            (v[31] = u),
            (v[32] = z),
            (v[33] = d),
            (v[34] = p),
            (v[35] = m))
          : (m = v[35]),
        v[36] !== A
          ? ((f = A
              ? (0, i.jsx)("div", {
                  className: "truncate pb-1 text-[11px] leading-3 text-danger",
                  role: "alert",
                  children: (0, i.jsx)(ei.A, {
                    id: "avatarOverlay.notificationFollowUpError",
                    defaultMessage: "Unable to send reply",
                    description: "Compact error shown when a floating avatar notification follow-up fails",
                  }),
                })
              : null),
            (v[36] = A),
            (v[37] = f))
          : (f = v[37]),
        v[38] !== R ||
        v[39] !== w ||
        v[40] !== r ||
        v[41] !== l ||
        v[42] !== s ||
        v[43] !== c ||
        v[44] !== m ||
        v[45] !== f ||
        v[46] !== a ||
        v[47] !== o
          ? ((h = (0, i.jsxs)(eh.P.form, {
              ref: w,
              animate: a,
              className: o,
              exit: r,
              initial: l,
              transition: s,
              onSubmit: c,
              onUpdate: R,
              children: [m, f],
            })),
            (v[38] = R),
            (v[39] = w),
            (v[40] = r),
            (v[41] = l),
            (v[42] = s),
            (v[43] = c),
            (v[44] = m),
            (v[45] = f),
            (v[46] = a),
            (v[47] = o),
            (v[48] = h))
          : (h = v[48]),
        h
      )
    }
    function n6(e) {
      let t,
        a,
        o,
        r,
        l,
        s = (0, n.c)(11)
      if (
        (s[0] !== e
          ? (({ interactive: t, onClick: a, onKeyDown: o, ...r } = e),
            (s[0] = e),
            (s[1] = t),
            (s[2] = a),
            (s[3] = o),
            (s[4] = r))
          : ((t = s[1]), (a = s[2]), (o = s[3]), (r = s[4])),
        !t)
      ) {
        let e
        return (s[5] !== r ? ((e = (0, i.jsx)(eh.P.div, { ...r })), (s[5] = r), (s[6] = e)) : (e = s[6]), e)
      }
      return (
        s[7] !== a || s[8] !== o || s[9] !== r
          ? ((l = (0, i.jsx)(eh.P.div, { ...r, role: "button", tabIndex: 0, onClick: a, onKeyDown: o })),
            (s[7] = a),
            (s[8] = o),
            (s[9] = r),
            (s[10] = l))
          : (l = s[10]),
        l
      )
    }
    function n7(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        c,
        d,
        p,
        m,
        f,
        h,
        v,
        w,
        b,
        C,
        x,
        A,
        M,
        S = (0, n.c)(125),
        {
          activitySwipeInput: E,
          swipeVisibleRight: R,
          animatesCssEntry: _,
          canExpandActivityStack: T,
          copy: k,
          cssHeight: O,
          presentedHeight: P,
          cssWidth: N,
          subtitleOpacity: L,
          contentX: F,
          contentY: q,
          titleFontWeight: j,
          attachmentContent: D,
          isExpanded: U,
          isNotificationStackCollapsed: H,
          isStackedBehindPrimary: B,
          retainsForeground: V,
          isForegroundCoveredByFlight: z,
          hidesMaterialForHiddenStart: Y,
          nativeSurfaceId: W,
          notification: X,
          notificationFollowUp: G,
          publishesLayoutMeasurement: $,
          publishesFollowUpVisibility: Q,
          rendersMaterial: Z,
          onAnimationFrame: J,
          onMaterialUpdate: ee,
          prominence: et,
          sideSpacingPx: ea,
          onActivateNotification: er,
          onNotificationPointerEnter: es,
          onDismissNotification: ec,
          onOpenNotificationActions: eu,
          onExpansionChange: ed,
          onRunNotificationControl: ep,
          onRunNotificationAction: em,
          onSubmitQuestionOption: ey,
        } = e,
        ew = void 0 === _ || _,
        eb = void 0 !== V && V,
        eC = void 0 !== z && z,
        ex = void 0 !== Y && Y,
        eA = void 0 === $ || $,
        eM = void 0 === Z || Z,
        eI = (0, u.gh)(el.u),
        eS = (0, y.A)(),
        eE = (0, ef.I)()
      S[0] !== eS || S[1] !== X || S[2] !== k
        ? ((t = k ?? aV({ intl: eS, notification: X })), (S[0] = eS), (S[1] = X), (S[2] = k), (S[3] = t))
        : (t = S[3])
      let eR = t,
        e_ = (0, u._U)(tQ.JW, "3312776353") && X.isLoading && null == X.waitingRequest && "danger" !== X.level
      S[4] !== B || S[5] !== X.localConversationId || S[6] !== eI || S[7] !== e_
        ? ((a =
            e_ && !B && null != X.localConversationId
              ? { hostId: eI.get(I.qX, X.localConversationId), threadId: X.localConversationId }
              : null),
          (S[4] = B),
          (S[5] = X.localConversationId),
          (S[6] = eI),
          (S[7] = e_),
          (S[8] = a))
        : (a = S[8])
      let eT = (0, u._U)(i5, a)
      S[9] !== eT || S[10] !== eS || S[11] !== X || S[12] !== e_
        ? ((o = e_ && null != eT ? aV({ intl: eS, notification: { ...X, body: eT } }) : null),
          (S[9] = eT),
          (S[10] = eS),
          (S[11] = X),
          (S[12] = e_),
          (S[13] = o))
        : (o = S[13])
      let ek = o
      S[14] !== eR || S[15] !== ek
        ? ((r = null == ek ? eR : { ...eR, subtitle: ek.subtitle, actionAriaLabel: ek.actionAriaLabel }),
          (S[14] = eR),
          (S[15] = ek),
          (S[16] = r))
        : (r = S[16])
      let eP = r
      S[17] !== X ? ((l = ac(X)), (S[17] = X), (S[18] = l)) : (l = S[18])
      let eN = l,
        eL = X.waitingRequest,
        [eF, eq] = (0, g.useState)(!1),
        ej = U ?? eF,
        [eD, eU] = (0, g.useState)(!1),
        eH = (0, g.useRef)(ej),
        [eB, eV] = (0, g.useState)(void 0),
        [ez, eY] = (0, g.useState)(G?.draft ?? ""),
        [eW, eX] = (0, g.useState)(!1),
        eG = (0, g.useRef)(null),
        e$ = (0, g.useRef)(void 0),
        eK = "activity" === X.kind && T && null != er,
        eQ = eK || ("activity" !== X.kind && (null != er || null != X.action)),
        eZ = null != X.controlTarget && null != ep,
        eJ = X.isLoading && eZ,
        e0 = "activity" !== X.kind && null != ec,
        e1 = !H && null != X.notificationPreferenceId && null != eu,
        e2 = eD || ej,
        e3 = null != eL && e2,
        e4 = !eJ && !e3,
        e5 = eZ && void 0 !== eB && eB === X.turnKey,
        e6 = G?.notificationId === X.id && G.turnKey === X.turnKey ? G : null,
        e7 = void 0 !== G,
        e8 = eZ && (e7 ? null != e6 : e5),
        e9 = eM && e0 && !e8 && !B,
        te = eZ && (!H || e8),
        tt = eJ && (e8 || (!H && eW)),
        ta = te && (e8 || (!H && eW)),
        ti = e6?.submissionStatus === "error",
        tn = e6?.submissionStatus === "submitting",
        to = Q && e8,
        tr = null != eL || tt || (B && !eb),
        tl = "secondary" === et && !B && ew,
        ts = ew || B ? 0.18 : 0
      if (
        (S[19] !== tl || S[20] !== H || S[21] !== ts
          ? ((s = { duration: ts, ease: "easeOut" }),
            H ? (s = { duration: 0 }) : tl && (s = { delay: 0.117, duration: 0.081, ease: "easeOut" }),
            (S[19] = tl),
            (S[20] = H),
            (S[21] = ts),
            (S[22] = s))
          : (s = S[22]),
        S[23] !== eP.subtitle || S[24] !== X)
      ) {
        var tc
        ;((tc = eP.subtitle),
          (c = "activity" !== X.kind && null == X.waitingRequest && X.title.length <= 20 && tc.length > 40),
          (S[23] = eP.subtitle),
          (S[24] = X),
          (S[25] = c))
      } else c = S[25]
      let tu = c
      S[26] !== eL
        ? ((d = (e) => {
            if ((e$.current?.(), (e$.current = void 0), null == e || null == eL)) return
            let t = () => {
              let t = Array.from(e.querySelectorAll('[data-avatar-overlay-overflow-content="true"]')).some(n8),
                a = e.querySelector('[data-avatar-overlay-waiting-request-body="true"]'),
                i = null != a && a.clientHeight > 0 && a.scrollHeight > a.clientHeight + 1
              eU((e) => (eH.current && e ? e : t || i))
            }
            ;(t(), (e$.current = (0, i_.J)({ axis: "both", target: e, onChange: t })))
          }),
          (S[26] = eL),
          (S[27] = d))
        : (d = S[27])
      let td = d
      S[28] !== X || S[29] !== ep
        ? ((p = (e) => {
            ep?.(X, e)
          }),
          (S[28] = X),
          (S[29] = ep),
          (S[30] = p))
        : (p = S[30])
      let tp = (0, g.useEffectEvent)(p)
      ;(S[31] !== ej
        ? ((m = () => {
            eH.current = ej
          }),
          (f = [ej]),
          (S[31] = ej),
          (S[32] = m),
          (S[33] = f))
        : ((m = S[32]), (f = S[33])),
        (0, g.useLayoutEffect)(m, f),
        S[34] !== e7 || S[35] !== tp || S[36] !== to
          ? ((h = () => {
              if (to)
                return e7
                  ? (tp({ type: "follow-up-active-changed", isActive: !0 }),
                    () => {
                      tp({ type: "follow-up-active-changed", isActive: !1 })
                    })
                  : (tp({ type: "open-follow-up" }),
                    () => {
                      tp({ type: "close-follow-up" })
                    })
            }),
            (S[34] = e7),
            (S[35] = tp),
            (S[36] = to),
            (S[37] = h))
          : (h = S[37]),
        S[38] !== e7 || S[39] !== to ? ((v = [e7, to]), (S[38] = e7), (S[39] = to), (S[40] = v)) : (v = S[40]),
        (0, g.useEffect)(h, v),
        S[41] !== e8
          ? ((w = () => {
              e8 && document.activeElement?.closest('[role="menu"]') == null && eG.current?.focus()
            }),
            (b = [e8]),
            (S[41] = e8),
            (S[42] = w),
            (S[43] = b))
          : ((w = S[42]), (b = S[43])),
        (0, K.JX)("avatar-overlay-keyboard-interaction-ready", w, b),
        S[44] !== e7 || S[45] !== X || S[46] !== ep
          ? ((C = () => {
              ;(eY(""), eV(void 0), e7 && ep?.(X, { type: "close-follow-up" }))
            }),
            (S[44] = e7),
            (S[45] = X),
            (S[46] = ep),
            (S[47] = C))
          : (C = S[47]))
      let tm = C,
        tf = `${X.id}:${X.turnKey}`
      return (
        S[48] !== X || S[49] !== ec ? ((x = () => ec?.(X)), (S[48] = X), (S[49] = ec), (S[50] = x)) : (x = S[50]),
        S[51] !== ew ||
        S[52] !== D ||
        S[53] !== e0 ||
        S[54] !== e2 ||
        S[55] !== e1 ||
        S[56] !== te ||
        S[57] !== e9 ||
        S[58] !== tm ||
        S[59] !== F ||
        S[60] !== q ||
        S[61] !== eP.actionAriaLabel ||
        S[62] !== eP.collapseNotificationAriaLabel ||
        S[63] !== eP.dismissNotificationAriaLabel ||
        S[64] !== eP.expandNotificationAriaLabel ||
        S[65] !== eP.expandNotificationStackAriaLabel ||
        S[66] !== eP.patchSummary ||
        S[67] !== eP.statusIconAriaLabel ||
        S[68] !== eP.subtitle ||
        S[69] !== O ||
        S[70] !== N ||
        S[71] !== eK ||
        S[72] !== ti ||
        S[73] !== e3 ||
        S[74] !== ex ||
        S[75] !== eS ||
        S[76] !== ej ||
        S[77] !== e7 ||
        S[78] !== e8 ||
        S[79] !== eC ||
        S[80] !== eQ ||
        S[81] !== e5 ||
        S[82] !== eW ||
        S[83] !== ta ||
        S[84] !== tt ||
        S[85] !== B ||
        S[86] !== tn ||
        S[87] !== ez ||
        S[88] !== td ||
        S[89] !== W ||
        S[90] !== X ||
        S[91] !== eN ||
        S[92] !== er ||
        S[93] !== J ||
        S[94] !== ec ||
        S[95] !== ed ||
        S[96] !== ee ||
        S[97] !== es ||
        S[98] !== eu ||
        S[99] !== em ||
        S[100] !== ep ||
        S[101] !== ey ||
        S[102] !== eE ||
        S[103] !== P ||
        S[104] !== et ||
        S[105] !== eA ||
        S[106] !== eM ||
        S[107] !== eb ||
        S[108] !== tr ||
        S[109] !== tu ||
        S[110] !== ea ||
        S[111] !== s ||
        S[112] !== L ||
        S[113] !== j ||
        S[114] !== e4 ||
        S[115] !== eL
          ? ((A = (e) =>
              (0, i.jsxs)(en.mD, {
                swipeX: e9 ? e : void 0,
                className: (0, ev.A)(
                  "relative flow-root",
                  null == P && "min-h-14",
                  "activityPill-s8lFCN",
                  e4 && "activityPillSingleControl-bXJPCJ",
                ),
                animatesCssEntry: ew,
                cssHeight: O,
                presentedHeight: P,
                contentX: F,
                contentY: q,
                attachmentContent: D,
                cssWidth: N,
                foregroundTransition: s,
                hidesForegroundImmediately: eC && !eb,
                hidesMaterialForHiddenStart: ex,
                retainsForeground: eb,
                isStackedBehindPrimary: B,
                nativeSurfaceId: W,
                publishesLayoutMeasurement: eA,
                rendersMaterial: eM,
                prefersReducedMotion: !!eE,
                prominence: et,
                overflowContent: e0
                  ? (0, i.jsx)("div", {
                      className: (0, ev.A)(
                        "absolute -top-1 left-0 z-20",
                        eW || e8 ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
                      ),
                      "data-avatar-overlay-chromium-overflow": "true",
                      "data-avatar-overlay-swipe-dismiss-accessory": "true",
                      children: (0, i.jsx)(nr, { ariaLabel: eP.dismissNotificationAriaLabel, onClick: () => ec(X) }),
                    })
                  : null,
                onUpdate: J,
                onMaterialUpdate: ee,
                onContextMenu: (e) => {
                  let t = e.target
                  !e1 ||
                    (t instanceof HTMLElement &&
                      (t.isContentEditable ||
                        null != t.closest("input, textarea, select, [contenteditable='true']"))) ||
                    (e.preventDefault(), e.stopPropagation(), eu(X))
                },
                onBlurCapture: (e) => {
                  e.currentTarget.contains(e.relatedTarget) || eX(e.currentTarget.matches(":hover"))
                },
                onFocusCapture: () => {
                  eX(!0)
                },
                onPointerEnter: () => {
                  ;(es?.(X), eX(!0))
                },
                onPointerLeave: () => {
                  eX(!1)
                },
                children: [
                  (0, i.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, i.jsxs)(n6, {
                        ref: td,
                        interactive: eQ || e1,
                        "aria-label": eK
                          ? eP.expandNotificationStackAriaLabel
                          : eQ
                            ? eP.actionAriaLabel
                            : e1
                              ? eS.formatMessage(i6.OD.notificationActions, { title: X.title })
                              : void 0,
                        className: (0, ev.A)(
                          "block min-h-14 w-full min-w-0 rounded-[var(--avatar-overlay-native-corner-radius)] px-4 py-3 text-start select-none focus-visible:outline focus-visible:outline-offset-[-2px]",
                          "pe-[var(--activity-pill-content-padding-right)]",
                          ta && "activityPillContentFade-fdzGMd",
                          eQ ? "cursor-interaction" : "cursor-default",
                        ),
                        initial: !1,
                        style: null == ea ? void 0 : { paddingInlineStart: ea, paddingInlineEnd: ea },
                        onClick: () => {
                          if (eQ) {
                            if (null != er) return void er(X.id)
                            null != X.action && em?.(X)
                          }
                        },
                        onKeyDown: (e) => {
                          if ((eQ || e1) && ("Enter" === e.key || " " === e.key)) {
                            if ((e.preventDefault(), null != er)) return void er(X.id)
                            if (eQ) return void em?.(X)
                            eu?.(X)
                          }
                        },
                        children: [
                          (0, i.jsxs)(en.oS, {
                            as: "div",
                            hasInlineSubtitle: tu,
                            hasWaitingRequest: null != eL,
                            isExpanded: ej,
                            isLoading: tu && X.isLoading,
                            isOverflowContent: !0,
                            notificationKind: X.kind,
                            variant: "title",
                            children: [
                              (0, i.jsx)("span", {
                                role: "img",
                                "aria-label": eP.statusIconAriaLabel,
                                className: tr || "spinner" === eN.iconType ? "sr-only" : "me-1 inline-flex align-top",
                                "data-avatar-overlay-status": eN.iconType,
                                children: ni(eN),
                              }),
                              (0, i.jsx)(eh.P.span, {
                                className: tu ? (0, ev.A)("font-bold text-default", X.isLoading && nu) : void 0,
                                style: { fontWeight: j },
                                children: X.title,
                              }),
                              tu &&
                                (0, i.jsxs)(eh.P.span, {
                                  style: { opacity: L },
                                  children: [
                                    (0, i.jsx)("span", {
                                      "aria-hidden": !0,
                                      className: (0, ev.A)("mx-1.5 font-normal text-secondary", X.isLoading && nu),
                                      children: (0, i.jsx)(ei.A, {
                                        id: "avatarOverlay.inlineSubtitleSeparator",
                                        defaultMessage: "•",
                                        description: "Separator between an activity pill title and its inline subtitle",
                                      }),
                                    }),
                                    (0, i.jsx)("span", {
                                      className: "font-normal text-secondary",
                                      children: eP.subtitle,
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (0, i.jsxs)(eh.P.div, {
                            animate: null == eL ? void 0 : { maxHeight: ej ? 180 : 62 },
                            className: (0, ev.A)(
                              "text-[13px] leading-4",
                              ("activity" === X.kind || tu) && "hidden",
                              "text-secondary",
                              null == eL && "truncate",
                              null != eL && (ej ? "overflow-y-auto overscroll-contain" : "overflow-clip"),
                            ),
                            initial: !1,
                            "data-avatar-overlay-overflow-content": null == eL ? "true" : void 0,
                            "data-avatar-overlay-waiting-request-body": "true",
                            style: { opacity: L },
                            transition:
                              eE || null != O ? { duration: 0 } : { duration: 0.18, ease: [0.23, 1, 0.32, 1] },
                            children: [
                              null == eL &&
                                !tu &&
                                (0, i.jsx)(en.oS, { isLoading: X.isLoading, truncate: !0, children: eP.subtitle }),
                              null != eL &&
                                (0, i.jsx)(nA, {
                                  isExpanded: ej,
                                  patchSummaryCopy: eP.patchSummary,
                                  request: eL,
                                  onRunNotificationAction: (e) => {
                                    em?.(X, e)
                                  },
                                  onSubmitQuestionOption: (e) => {
                                    ey?.(X, e)
                                  },
                                }),
                            ],
                          }),
                        ],
                      }),
                      te
                        ? (0, i.jsxs)("div", {
                            className: (0, ev.A)(
                              "absolute top-3 right-[var(--activity-pill-edge-inset)] z-20 flex h-8 items-center gap-[var(--activity-pill-control-gap)]",
                              ta ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
                            ),
                            children: [
                              (0, i.jsx)(eo.$, {
                                "aria-label": eS.formatMessage(nG.replyNotification, { title: X.title }),
                                "aria-pressed": e8,
                                "data-avatar-overlay-material": "css",
                                color: "activity",
                                size: "iconCircle",
                                title: eS.formatMessage(nG.replyNotification, { title: X.title }),
                                onClick: () => {
                                  e8 ? tm() : (eY(""), eV(X.turnKey), e7 && ep?.(X, { type: "open-follow-up" }))
                                },
                                children: (0, i.jsx)(eO.I, { "aria-hidden": !1, asset: a0 }),
                              }),
                              e4
                                ? null
                                : (0, i.jsx)(eo.$, {
                                    "aria-label": eS.formatMessage(nG.stopNotification, { title: X.title }),
                                    "aria-hidden": !tt || void 0,
                                    "data-avatar-overlay-material": "css",
                                    className: "aria-hidden:pointer-events-none aria-hidden:opacity-0",
                                    color: "activityStop",
                                    size: "iconCircle",
                                    tabIndex: tt ? void 0 : -1,
                                    title: eS.formatMessage(nG.stopNotification, { title: X.title }),
                                    onClick: () => {
                                      ;(eY(""), eV(void 0), ep?.(X, { type: "stop" }))
                                    },
                                    children: (0, i.jsx)(eO.I, { "aria-hidden": !1, asset: a2 }),
                                  }),
                            ],
                          })
                        : null,
                      e3
                        ? (0, i.jsx)("div", {
                            className:
                              "absolute top-3 right-[var(--activity-pill-edge-inset)] z-20 flex h-8 items-center",
                            children: (0, i.jsx)(en.NS, {
                              "aria-expanded": ej,
                              "aria-label": ej ? eP.collapseNotificationAriaLabel : eP.expandNotificationAriaLabel,
                              color: "ghost",
                              disabled: !e2,
                              size: "icon",
                              onClick: () => {
                                ej && eU(!0)
                                let e = !ej
                                ;((eH.current = e), null != ed ? ed(X.id, e) : eq(e))
                              },
                              children: (0, i.jsx)(eh.P.span, {
                                animate: { rotate: ej ? 0 : -90 },
                                transition: eE ? { duration: 0 } : { duration: 0.16, ease: [0.23, 1, 0.32, 1] },
                                children: (0, i.jsx)(eO.I, { "aria-hidden": !1, asset: a1.h }),
                              }),
                            }),
                          })
                        : null,
                    ],
                  }),
                  (0, i.jsx)(eg.N, {
                    mode: null == O ? "sync" : "popLayout",
                    onExitComplete: J,
                    children: e8
                      ? (0, i.jsx)(n5, {
                          animatesOwnHeight: null == O,
                          autoFocus: e5,
                          draft: ez,
                          hasSubmissionError: ti,
                          inputRef: eG,
                          isSubmitting: tn,
                          notificationTitle: X.title,
                          prefersReducedMotion: !!eE,
                          onAnimationFrame: J,
                          onClose: tm,
                          onDraftChange: (e, t) => {
                            ;(eY(e), e7 && ep?.(X, { type: "follow-up-editor-changed", caretPoint: t, draft: e }))
                          },
                          onSubmitFollowUp: (e) => {
                            ;(e7 || (eY(""), eV(void 0)), ep?.(X, { type: "submit-follow-up", prompt: e }))
                          },
                        })
                      : null,
                  }),
                ],
              })),
            (S[51] = ew),
            (S[52] = D),
            (S[53] = e0),
            (S[54] = e2),
            (S[55] = e1),
            (S[56] = te),
            (S[57] = e9),
            (S[58] = tm),
            (S[59] = F),
            (S[60] = q),
            (S[61] = eP.actionAriaLabel),
            (S[62] = eP.collapseNotificationAriaLabel),
            (S[63] = eP.dismissNotificationAriaLabel),
            (S[64] = eP.expandNotificationAriaLabel),
            (S[65] = eP.expandNotificationStackAriaLabel),
            (S[66] = eP.patchSummary),
            (S[67] = eP.statusIconAriaLabel),
            (S[68] = eP.subtitle),
            (S[69] = O),
            (S[70] = N),
            (S[71] = eK),
            (S[72] = ti),
            (S[73] = e3),
            (S[74] = ex),
            (S[75] = eS),
            (S[76] = ej),
            (S[77] = e7),
            (S[78] = e8),
            (S[79] = eC),
            (S[80] = eQ),
            (S[81] = e5),
            (S[82] = eW),
            (S[83] = ta),
            (S[84] = tt),
            (S[85] = B),
            (S[86] = tn),
            (S[87] = ez),
            (S[88] = td),
            (S[89] = W),
            (S[90] = X),
            (S[91] = eN),
            (S[92] = er),
            (S[93] = J),
            (S[94] = ec),
            (S[95] = ed),
            (S[96] = ee),
            (S[97] = es),
            (S[98] = eu),
            (S[99] = em),
            (S[100] = ep),
            (S[101] = ey),
            (S[102] = eE),
            (S[103] = P),
            (S[104] = et),
            (S[105] = eA),
            (S[106] = eM),
            (S[107] = eb),
            (S[108] = tr),
            (S[109] = tu),
            (S[110] = ea),
            (S[111] = s),
            (S[112] = L),
            (S[113] = j),
            (S[114] = e4),
            (S[115] = eL),
            (S[116] = A))
          : (A = S[116]),
        S[117] !== E ||
        S[118] !== e9 ||
        S[119] !== eP.dismissNotificationAriaLabel ||
        S[120] !== R ||
        S[121] !== tf ||
        S[122] !== x ||
        S[123] !== A
          ? ((M = (0, i.jsx)(
              iF,
              {
                ariaLabel: eP.dismissNotificationAriaLabel,
                enabled: e9,
                input: E,
                visibleRight: R,
                onDismiss: x,
                children: A,
              },
              tf,
            )),
            (S[117] = E),
            (S[118] = e9),
            (S[119] = eP.dismissNotificationAriaLabel),
            (S[120] = R),
            (S[121] = tf),
            (S[122] = x),
            (S[123] = A),
            (S[124] = M))
          : (M = S[124]),
        M
      )
    }
    function n8(e) {
      return e.clientWidth > 0 && e.scrollWidth > e.clientWidth + 1
    }
    function n9(e) {
      let t,
        a,
        o,
        r,
        l,
        s = (0, n.c)(14),
        {
          frameProps: c,
          presentation: d,
          onLayoutApplied: p,
          onQuickChatFocusCompleted: m,
          quickChatFocusPreparation: f,
          runtimeId: h,
        } = e,
        { layout$: v } = (0, u.uO)(aZ, h),
        y = (0, u.Ul)(v),
        w = tX.appServices.avatarOverlay,
        b = (0, g.useEffectEvent)(p),
        C = (0, g.useEffectEvent)(m)
      return (
        s[0] !== b
          ? ((t = () => {
              b()
            }),
            (s[0] = b),
            (s[1] = t))
          : (t = s[1]),
        s[2] !== y ? ((a = [y]), (s[2] = y), (s[3] = a)) : (a = s[3]),
        (0, g.useLayoutEffect)(t, a),
        s[4] !== C || s[5] !== f
          ? ((o = () => {
              if (null == w || f?.layoutRevision == null) return
              let { requestId: e, layoutRevision: t } = f,
                a = window.requestAnimationFrame(() => {
                  a = window.requestAnimationFrame(() => {
                    w.completeQuickChatFocus(e, t)
                      .then((t) => {
                        t && C(e)
                      })
                      .catch(oe)
                  })
                })
              return () => {
                window.cancelAnimationFrame(a)
              }
            }),
            (s[4] = C),
            (s[5] = f),
            (s[6] = o))
          : (o = s[6]),
        s[7] !== y || s[8] !== f ? ((r = [w, y, f]), (s[7] = y), (s[8] = f), (s[9] = r)) : (r = s[9]),
        (0, g.useLayoutEffect)(o, r),
        s[10] !== c || s[11] !== y || s[12] !== d
          ? ((l = null == d ? (0, i.jsx)(nK, { ...c, layout: y }) : d.renderFrame({ ...c, layout: y })),
            (s[10] = c),
            (s[11] = y),
            (s[12] = d),
            (s[13] = l))
          : (l = s[13]),
        l
      )
    }
    function oe(e) {
      tZ.v.warning("Failed to finish Quick Chat focus", { safe: {}, sensitive: { error: e } })
    }
    var ot = a("l00C"),
      oa = a("rljs"),
      oi = a("rk7m"),
      on = a("RU3e"),
      oo = a("kx7U"),
      or = a("QLtS")
    let ol = (0, u.vU)(el.u, (e, { get: t, scope: a }) => {
        let i = t(oa.y2, e),
          n = t(oa.LH, e)
        return {
          queryKey: ["avatar-overlay-recent-threads", e],
          enabled:
            null != t(ot.u$, e) &&
            "live" === t(oi.l) &&
            (t(or.k) || !0 === t(on.$)) &&
            (e === tw.fI || "connected" === i || n?.code === "login-required"),
          staleTime: 0,
          queryFn: async () => (await (0, x.V)(a, e).refreshRecentConversations(), null),
        }
      }),
      os = (0, u.un)(el.u, ({ get: e }) => {
        let t = e(or.k) || !0 === e(on.$),
          a = e(oo.u8)
        return e(I.Dj).flatMap((i) =>
          (i === tw.fI || a?.some((t) => t.hostId === i && (t.autoConnect || "connected" === e(oa.y2, i)))) &&
          (e(ol, i), t)
            ? e(I.dl, i).flatMap((t) => {
                let a = e(oc, { hostId: i, threadId: t })
                return null == a ? [] : [a]
              })
            : [],
        )
      }),
      oc = (0, u.i1)(el.u, (e, { get: t }) => {
        let a = t(I.ok, e)
        if (null == a || (0, ap.I3)(a.summary)) return null
        let i = t(i2.M, e),
          n = i?.at(-1),
          o = null == n ? null : t(i2.Ko, n),
          r =
            null == n
              ? []
              : (t(i2.hm, n) ?? []).flatMap((e) => {
                  let a = t(i2.mz, { ...n, itemId: e })
                  return null == a ? [] : [a]
                })
        return {
          state: a,
          latestTurn: null == o ? null : { ...o, items: r },
          turnCount: i?.length ?? 0,
          title: (0, av.Lm)({ id: e.threadId, title: t(I.HX, e), fallbackSearchTitle: t(I.js, e), turns: null }),
          collaborationMode: t(I.PZ, e),
          pendingTurns: a.requests.length > 0 || null != a.pendingRequest ? t(i2.J7, e) : null,
        }
      })
    var ou = a("FIph")
    function od(e) {
      let t = e.getBoundingClientRect(),
        a = Math.max(0, t.left),
        i = Math.max(0, t.top),
        n = Math.min(window.innerWidth, t.right),
        o = Math.min(window.innerHeight, t.bottom)
      for (let t of (0, ou.v9)(e)) {
        if (!(t instanceof HTMLElement)) continue
        let e = window.getComputedStyle(t),
          r = t.getBoundingClientRect(),
          l = t.offsetWidth ? r.width / t.offsetWidth : 1,
          s = t.offsetHeight ? r.height / t.offsetHeight : 1,
          c = r.left + t.clientLeft * l,
          u = r.top + t.clientTop * s
        ;(/auto|scroll|hidden|clip/.test(e.overflowX || e.overflow) &&
          ((a = Math.max(a, c)), (n = Math.min(n, c + t.clientWidth * l))),
          /auto|scroll|hidden|clip/.test(e.overflowY || e.overflow) &&
            ((i = Math.max(i, u)), (o = Math.min(o, u + t.clientHeight * s))))
      }
      return n <= a || o <= i
        ? null
        : ((a = Math.floor(a)),
          { height: Math.ceil(o) - (i = Math.floor(i)), left: a, top: i, width: Math.ceil(n) - a })
    }
    let op = "[data-avatar-overlay-size='mascot']",
      om = "[data-avatar-overlay-size='notification-tray']",
      of = "[data-avatar-overlay-size='notification-tray-header']",
      oh = "[data-avatar-overlay-size='notification-tray-list']",
      og = "[data-avatar-overlay-size='notification-stack-backing-layout']",
      ov = "[data-avatar-overlay-size='notification-stack-visible-layout']",
      oy = "[data-avatar-overlay-native-surface-id]",
      ow =
        '[data-avatar-overlay-hit-region], [data-composer-overlay-floating-ui], [data-above-composer-portal] > *, [data-radix-popper-content-wrapper] > *, [data-menu-overlay], [role="dialog"], [role="alertdialog"], .codex-dialog-overlay',
      ob = ["focusin", "focusout", "pointerover", "pointerout"],
      oC = [
        op,
        om,
        of,
        oh,
        "[data-avatar-overlay-measure='notification-tray-row']",
        og,
        ov,
        oy,
        "[data-avatar-overlay-activity-content]",
      ]
    function ox(e) {
      return Array.from(e.ownerDocument.querySelectorAll(ow))
    }
    function oA(e) {
      if (null != e.closest("[inert]")) return !1
      let t = window.getComputedStyle(e)
      return (
        "none" !== t.display && "hidden" !== t.visibility && "collapse" !== t.visibility && "none" !== t.pointerEvents
      )
    }
    function oM(e) {
      return "none" === window.getComputedStyle(e).display
    }
    var oI = a("Y7mR"),
      oS = a("a5wp"),
      oE = a("hL9c")
    function oR(e) {
      let t,
        a,
        o,
        r = (0, n.c)(15),
        { onAttachmentRemoved: l } = e,
        s = (0, u.gh)(t6.PR),
        c = (0, u.Ul)(H.gy),
        d = (0, u.Ul)(H.a$),
        p = (0, u.Ul)(H.PA)
      if (r[0] !== c || r[1] !== l || r[2] !== s) {
        let e
        ;(r[4] !== l || r[5] !== s
          ? ((e = (e) =>
              (0, i.jsx)(
                oE.x,
                {
                  compact: !0,
                  previewEnabled: !1,
                  filename: e.filename,
                  loading: "uploading" === e.uploadStatus,
                  src: e.src,
                  onRemove: () => {
                    ;((0, V.TG)(s),
                      (0, V.td)(s, e.id),
                      (0, H.Rh)(s, "imageAttachments", (t) =>
                        t.filter((t) => {
                          let { id: a } = t
                          return a !== e.id
                        }),
                      ),
                      l())
                  },
                },
                e.id,
              )),
            (r[4] = l),
            (r[5] = s),
            (r[6] = e))
          : (e = r[6]),
          (t = c.map(e)),
          (r[0] = c),
          (r[1] = l),
          (r[2] = s),
          (r[3] = t))
      } else t = r[3]
      return (
        r[7] !== d || r[8] !== p || r[9] !== l || r[10] !== s
          ? ((a = ["addedFiles", "fileAttachments"].flatMap((e) =>
              ("addedFiles" === e ? d : p).map((t) =>
                (0, i.jsx)(
                  oS.m,
                  {
                    filename: t.label,
                    layout: "card",
                    resourcePath: t.path,
                    onRemove: () => {
                      ;((0, V.TG)(s), (0, H.Rh)(s, e, (e) => e.filter((e) => (0, h.T)(e) !== (0, h.T)(t))), l())
                    },
                  },
                  `${e}:${(0, h.T)(t)}`,
                ),
              ),
            )),
            (r[7] = d),
            (r[8] = p),
            (r[9] = l),
            (r[10] = s),
            (r[11] = a))
          : (a = r[11]),
        r[12] !== t || r[13] !== a
          ? ((o = (0, i.jsxs)(i.Fragment, { children: [t, a] })), (r[12] = t), (r[13] = a), (r[14] = o))
          : (o = r[14]),
        o
      )
    }
    var o_ = a("KPGh"),
      oT = a("l2C7")
    let ok = (0, D.NN)(),
      oO = "first-awake-pet-notification-avatar-ids",
      oP = "avatar-overlay-activity-pills-visible",
      oN = (0, an.m3)(oP, !0),
      oL = (0, u.i1)(el.u, (e, { get: t }) => {
        let a = new Map()
        for (let i of e) {
          let e = t(ae.o, i)
          null != e && a.set((0, ty.z)(i.threadId, i.hostId), e)
        }
        return a
      }),
      oF = [ow]
    function oq(e) {
      var t, a
      let o,
        r,
        l,
        s,
        c = (0, n.c)(11),
        { presentation: d } = e,
        { selectedAvatar: p, selectedAvatarId: m } = (function () {
          let e,
            t,
            a = (0, n.c)(12),
            { selectedAvatar: i, selectedAvatarId: o } = (0, q.WU)(),
            { data: r, isFetching: l } = (0, u._U)(oT.Zn, o ?? i.id),
            { isFetching: s, pet: c } = (0, u._U)(o_.lc, o ?? i.id),
            d = o?.startsWith("custom:") === !0,
            p = o?.startsWith("pet_") === !0
          if (!d && !p) {
            let e
            return (
              a[0] !== i || a[1] !== o
                ? ((e = { selectedAvatar: i, selectedAvatarId: o }), (a[0] = i), (a[1] = o), (a[2] = e))
                : (e = a[2]),
              e
            )
          }
          if ((l && null == r) || (s && null == c)) {
            let e
            return (
              a[3] !== o ? ((e = { selectedAvatar: null, selectedAvatarId: o }), (a[3] = o), (a[4] = e)) : (e = a[4]),
              e
            )
          }
          return (
            a[5] !== c || a[6] !== r || a[7] !== o
              ? ((e = (0, q.so)(o, (0, a7.i0)(null == r ? void 0 : [r], null == c ? void 0 : [c]))),
                (a[5] = c),
                (a[6] = r),
                (a[7] = o),
                (a[8] = e))
              : (e = a[8]),
            a[9] !== o || a[10] !== e
              ? ((t = { selectedAvatar: e, selectedAvatarId: o }), (a[9] = o), (a[10] = e), (a[11] = t))
              : (t = a[11]),
            t
          )
        })(),
        f = null == p
      return (c[0] !== f
        ? ((o = () => {
            f && K.O1.dispatchMessage("avatar-overlay-pointer-interaction-changed", { isInteractive: !1 })
          }),
          (r = [f]),
          (c[0] = f),
          (c[1] = o),
          (c[2] = r))
        : ((o = c[1]), (r = c[2])),
      (0, g.useEffect)(o, r),
      null == p)
        ? null
        : (c[3] !== p || c[4] !== m
            ? ((t = p),
              (a = m),
              (l = (0, q._I)(t, a) ? "pending-custom-avatar" : "ready"),
              (c[3] = p),
              (c[4] = m),
              (c[5] = l))
            : (l = c[5]),
          c[6] !== d || c[7] !== p || c[8] !== m || c[9] !== l
            ? ((s = (0, i.jsx)(oj, { selectedAvatar: p, selectedAvatarId: m, presentation: d }, l)),
              (c[6] = d),
              (c[7] = p),
              (c[8] = m),
              (c[9] = l),
              (c[10] = s))
            : (s = c[10]),
          s)
    }
    function oj(e) {
      let t,
        a,
        o,
        r,
        l,
        s,
        g,
        v,
        w,
        A,
        k = (0, n.c)(50),
        { presentation: O, selectedAvatar: P, selectedAvatarId: N } = e,
        F = (0, u.gh)(el.u),
        q = (0, u.Ul)(S.w),
        D = (0, y.A)(),
        U = (0, t9.r9)(),
        H = (0, aa.Zj)("665486075"),
        B = (0, aa.Zj)("1532097315"),
        V = (0, aa.Zj)("1532120159"),
        Y = (0, u.Ul)(oI.J),
        X = V || Y,
        G = (0, t8.iK)(d.kWF.petVisible),
        $ = (0, u.Ul)(J.X4),
        Z = !X || (G && !$)
      k[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { name: "chatgpt.quick-chat" }), (k[0] = t)) : (t = k[0])
      let ee = (0, u._U)(C.G, t),
        et = (0, u.Ul)(L.k5),
        ea = (H || X) && ee.isCapable && !et,
        ei = (0, aa.Zj)(at.x4),
        en = (0, z.x)(),
        eo = (0, u.Ul)(tv.YV),
        er = (0, u.Ul)(tL.uD),
        es = (0, u.Ul)(or.k),
        { mascotWidthPx: ec } = (0, aK.cf)(),
        eu = (0, u.Ul)(os)
      k[1] !== F
        ? ((a = () =>
            (async function (e) {
              await Promise.all(
                e.get(I.Dj).map(async (t) => {
                  let { state: a, error: i } = (0, I.EW)(e, t)
                  ;(t === tw.fI || "connected" === a || i?.code === "login-required") &&
                    (await (0, x.V)(e, t)
                      .refreshRecentConversations()
                      .catch((e) => {
                        tZ.v.warning("recent_conversations_refresh_failed", {
                          safe: {},
                          sensitive: { error: e, hostId: t },
                        })
                      }))
                }),
              )
            })(F)),
          (k[1] = F),
          (k[2] = a))
        : (a = k[2])
      let ed = a
      k[3] !== es ? ((o = { enabled: es, taskFilter: "current", limit: 20 }), (k[3] = es), (k[4] = o)) : (o = k[4])
      let { data: ep, refetch: em } = (0, j.si)(o),
        ef = (0, j.DX)(),
        eh = (0, j.qK)(),
        eg = (function ({
          includeMcpElicitationCancelAction: e = !1,
          openAIFormElicitationsEnabled: t = !1,
          intl: a,
          localThreads: i,
          excludedConversationId: n,
          remoteTasks: o,
          threadDetailLevel: r = t9._e,
        }) {
          let l = [],
            s = new Set()
          for (let o of i) {
            let i = (function ({
              thread: e,
              includeMcpElicitationCancelAction: t,
              openAIFormElicitationsEnabled: a,
              intl: i,
              excludedConversationId: n,
              threadDetailLevel: o,
            }) {
              let { state: r, latestTurn: l } = e,
                s = r.summary
              if ((0, ap.I3)(s)) return null
              let c = s.hostId ?? tw.fI,
                u = c === tw.fI ? "local" : "remote-host",
                d =
                  r.pendingRequest?.kind === "implementPlan" ||
                  ("needs_resume" === r.resumeState &&
                    s.threadRuntimeStatus?.type === "idle" &&
                    r.requests.every(au.zd))
                    ? r.requests.findLast(au.zd)
                    : void 0,
                p =
                  (0, aA.HD)(r.requests, e.pendingTurns ?? [], a) ??
                  (null == d
                    ? null
                    : {
                        type: "implementPlan",
                        id: (0, au.a0)(d.params.turnId),
                        turnId: d.params.turnId,
                        planContent: d.params.planContent,
                      }),
                m = (function ({ state: e, latestTurn: t }, a) {
                  let i = e.summary,
                    n = "needs_resume" === e.resumeState ? i.threadRuntimeStatus : null,
                    o =
                      "needs_resume" === e.resumeState
                        ? n?.type === "active"
                        : "resuming" === e.resumeState ||
                          (null == t
                            ? e.isConversationInProgress || null != e.latestTurnId
                            : "inProgress" === t.status && t.items.at(-1)?.type !== "sleep"),
                    r =
                      "needs_resume" === e.resumeState
                        ? n?.type === "active" && n.activeFlags.includes("waitingOnUserInput")
                        : e.requests.some((e) => "item/tool/requestUserInput" === e.method),
                    l =
                      "needs_resume" === e.resumeState
                        ? n?.type === "active" && n.activeFlags.includes("waitingOnApproval") && (0, aA.PZ)(e.requests)
                        : null != a,
                    s =
                      "needs_resume" === e.resumeState
                        ? n?.type === "systemError"
                        : (t?.status ?? e.latestTurnStatus) === "failed"
                  return l || r || a?.type === "implementPlan"
                    ? "waiting"
                    : s
                      ? "failed"
                      : o
                        ? "running"
                        : i.hasUnreadTurn
                          ? "review"
                          : "idle"
                })(e, p),
                f = (0, af.i)(l),
                h = f || "automation" === s.threadSource || !1,
                g = h
                  ? (function (e) {
                      if (null == e) return null
                      let t = e.items,
                        a = (0, af.i)(e)
                      for (let e = t.length - 1; e >= 0; e -= 1) {
                        let i = t[e]
                        if (
                          i?.type === "dynamicToolCall" &&
                          (null == i.namespace || "codex_app" === i.namespace) &&
                          i.tool === aM.n &&
                          "completed" === i.status &&
                          !0 === i.success
                        ) {
                          let e = (0, aM.a)(i.arguments)
                          if (null != e) return aB((0, ay.Dk)(e, !1).content)
                        }
                        if (i?.type !== "agentMessage") continue
                        let n = (0, am.l)(i.text),
                          o = a ? (0, ad.mM)(n) : (0, ad.Fp)(n)
                        if (null != o) {
                          if ("DONT_NOTIFY" === o.decision) return null
                          return aB(o.notificationMessage ?? o.visibleText)
                        }
                        if ("commentary" !== i.phase) {
                          let e = aB(n)
                          if (null != e) return e
                        }
                      }
                      return null
                    })(l)
                  : aH(l?.items ?? [], i, f, o)
              if ((s.threadSource === aI.S || s.conversationId === n) && "waiting" !== m && "failed" !== m) return null
              let v = null == l ? null : String(e.turnCount)
              return (
                p?.type === "implementPlan" && (v = p.turnId),
                {
                  actionPath: "/local/" + s.conversationId,
                  controlTarget: { type: "app-server-conversation", conversationId: s.conversationId },
                  hostId: c,
                  key: (0, ty.z)(s.conversationId, c),
                  localConversationId: s.conversationId,
                  source: u,
                  showInNotificationTray: !h || "waiting" === m || "failed" === m || (f && "review" === m) || null != g,
                  sortAtMs: l?.turnStartedAtMs ?? s.updatedAt,
                  status: m,
                  subtitle: g,
                  title: e.title ?? i.formatMessage(aU.newThread),
                  turnKey: v,
                  updatedAtMs: s.updatedAt,
                  waitingRequest: (function (
                    e,
                    t,
                    { includeMcpElicitationCancelAction: a = !1, planStartCollaborationMode: i } = {},
                  ) {
                    switch (e?.type) {
                      case "userInput":
                        return !0 === e.isOnboardingDynamicInput
                          ? null
                          : (function (e, t) {
                              let a = e.item.questions[0]
                              if (null == a) return null
                              let i = aj(a.question) ?? aj(a.header)
                              return null == i || 0 === a.options.length
                                ? null
                                : {
                                    kind: "question",
                                    requestId: e.item.requestId,
                                    title: t.formatMessage(aT.askQuestion),
                                    prompt: i,
                                    options: a.options.map((e) => ({
                                      label: aj(e.label) ?? t.formatMessage(aT.option),
                                      description: aj(e.description),
                                      questionId: a.id,
                                    })),
                                  }
                            })(e, t)
                      case "approval":
                        return "exec" === e.item.type
                          ? (function (e, t) {
                              if ("exec" !== e.type) throw Error("Expected exec approval item")
                              if (null == e.approvalRequestId) return null
                              let a = aj(e.networkApprovalContext?.host ?? "")
                              return null != a
                                ? {
                                    kind: "network",
                                    requestId: e.approvalRequestId,
                                    operation: t.formatMessage(aT.allowNetwork),
                                    target: a,
                                    title: t.formatMessage(aT.allowNetwork),
                                    actions: [
                                      {
                                        ariaLabel: t.formatMessage(aT.allowOnce),
                                        commandDecision: "accept",
                                        intent: "command-approval",
                                        label: t.formatMessage(aT.allow),
                                        tone: "primary",
                                      },
                                      {
                                        commandDecision: "decline",
                                        intent: "command-approval",
                                        label: t.formatMessage(aT.deny),
                                        tone: "danger",
                                      },
                                    ],
                                  }
                                : {
                                    kind: "exec",
                                    requestId: e.approvalRequestId,
                                    operation: t.formatMessage(aT.runCommand),
                                    summary: aj(e.cmd.join(" && ")) ?? t.formatMessage(aT.command),
                                    title: t.formatMessage(aT.reviewCommand),
                                    actions: [
                                      {
                                        commandDecision: "accept",
                                        intent: "command-approval",
                                        label: t.formatMessage(aT.runOnce),
                                        tone: "primary",
                                      },
                                      {
                                        commandDecision: "decline",
                                        intent: "command-approval",
                                        label: t.formatMessage(aT.deny),
                                        tone: "danger",
                                      },
                                    ],
                                  }
                            })(e.item, t)
                          : (function (e, t) {
                              if ("patch" !== e.type || null == e.approvalRequestId) return null
                              let a = Object.entries(e.changes)
                              if (0 === a.length) return null
                              let i = (function (e) {
                                let t = 0,
                                  a = 0
                                for (let i of Object.values(e))
                                  switch (i?.type) {
                                    case "add":
                                      t += aq(i.content)
                                      break
                                    case "delete":
                                      a += aq(i.content)
                                      break
                                    case "update":
                                      for (let e of i.unified_diff.split(/\r?\n/))
                                        !(e.startsWith("+++") || e.startsWith("---")) &&
                                          (e.startsWith("+") ? (t += 1) : e.startsWith("-") && (a += 1))
                                  }
                                return { additions: t, deletions: a }
                              })(e.changes)
                              return {
                                kind: "patch",
                                requestId: e.approvalRequestId,
                                operation: t.formatMessage(aT.applyChanges),
                                summary: a[0]?.[0] ?? t.formatMessage(aT.oneFileChanged),
                                title: t.formatMessage(aT.applyChanges),
                                files: a.map(([e]) => e),
                                fileCount: a.length,
                                additions: i.additions,
                                deletions: i.deletions,
                                actions: [
                                  {
                                    fileDecision: "accept",
                                    intent: "file-approval",
                                    label: t.formatMessage(aT.apply),
                                    tone: "primary",
                                  },
                                  { intent: "open", label: t.formatMessage(aT.review), tone: "secondary" },
                                ],
                              }
                            })(e.item, t)
                      case "permissionRequest":
                        return (function (e, t) {
                          var a
                          let i,
                            n,
                            { permissions: o } = e,
                            r = (0, aR.w)(o)[0]
                          if (null == r) return null
                          if ("network" === r.kind) i = n = t.formatMessage(aT.networkAccess)
                          else {
                            n = t.formatMessage(aT.fileAccess)
                            let e = r.paths[0] ?? n,
                              a = Math.max(0, r.paths.length - 1)
                            i = 0 === a ? e : `${e} +${a}`
                          }
                          return {
                            kind: "permission",
                            requestId: e.requestId,
                            operation: n,
                            target: i,
                            title: n,
                            actions: [
                              {
                                intent: "permission-response",
                                ariaLabel: t.formatMessage(aT.allowOnce),
                                label: t.formatMessage(aT.allow),
                                permissionResponse: {
                                  permissions: {
                                    network: (a = o).network ?? void 0,
                                    fileSystem: a.fileSystem ?? void 0,
                                  },
                                  scope: "turn",
                                },
                                tone: "primary",
                              },
                              {
                                intent: "permission-response",
                                label: t.formatMessage(aT.deny),
                                permissionResponse: { permissions: {}, scope: "turn" },
                                tone: "danger",
                              },
                            ],
                          }
                        })(e.item, t)
                      case "implementPlan":
                        return (function (e, t, a) {
                          let { planContent: i } = e,
                            n = aj(
                              i
                                .split(/\r?\n/)
                                .map((e) => e.replace(/^[-*]\s+\[[ x]\]\s+/i, "").trim())
                                .find((e) => e.length > 0) ?? "",
                            )
                          return null == n
                            ? null
                            : {
                                kind: "plan",
                                operation: t.formatMessage(aT.plan),
                                planContent: i,
                                summary: n,
                                title: t.formatMessage(aT.plan),
                                turnId: e.turnId,
                                actions: [
                                  {
                                    intent: "plan-start",
                                    label: t.formatMessage(aT.implementPlan),
                                    planStartCollaborationMode: a,
                                    tone: "primary",
                                  },
                                ],
                              }
                        })(e, t, i)
                      case "mcpServerElicitation":
                        return (function (e, t, a) {
                          let i,
                            n,
                            o,
                            { elicitation: r } = e,
                            l = aj(e.request.params.serverName),
                            s = aF(l) ?? l ?? t.formatMessage(aT.toolServer),
                            c = s,
                            u = null,
                            d = null
                          switch (r.kind) {
                            case "userVerification":
                              ;((i = r.title),
                                (u = r.description),
                                (d = [{ intent: "open", label: t.formatMessage(aT.review), tone: "primary" }]))
                              break
                            case "unsupportedOpenAIForm":
                              ;((c = i =
                                t.formatMessage({
                                  id: "avatarOverlay.waitingRequest.answerRequest",
                                  defaultMessage: "Answer request",
                                  description: "Compact title for an unsupported waiting form request",
                                })),
                                (u = t.formatMessage({
                                  id: "avatarOverlay.waitingRequest.unsupportedRequest",
                                  defaultMessage: "This request can’t be shown yet",
                                  description: "Compact summary for an unsupported waiting form request",
                                })),
                                (d = []))
                              break
                            case "formElicitation":
                            case "browserAuth":
                            case "openaiForm":
                            case "legacyOpenAIForm":
                              ;((i = t.formatMessage(aT.answerTarget, { target: s })), (u = aj(r.message)), (d = []))
                              break
                            case "mcpToolCall": {
                              let e = (0, aE.m)(r)
                              if (null != e) {
                                ;((i = e.connectorName),
                                  (c = e.appDisplayName),
                                  (u =
                                    aj(e.subtitle) ??
                                    t.formatMessage(
                                      {
                                        id: "composer.computerUseAppApproval.title.chatgpt",
                                        defaultMessage: "Allow ChatGPT to use {appDisplayName}?",
                                        description: "Title asking whether ChatGPT may use an app through Computer Use",
                                      },
                                      { appDisplayName: e.appDisplayName },
                                    )),
                                  (n = t.formatMessage(aT.allow)),
                                  (o = "•"))
                                break
                              }
                              let a = null == r.approvalPresentation ? null : (0, aS.hN)(r.approvalPresentation, t),
                                l = aj(r.approval.connector_name) ?? aF(r.approval.connector_id) ?? s
                              c = l
                              let d = (0, a_.Dd)(r.approval)
                              if (null != d) {
                                ;((i = t.formatMessage(d.descriptor, d.values)),
                                  (u = null == d.description ? null : t.formatMessage(d.description, d.values)))
                                break
                              }
                              let p = (function (e) {
                                let t = /\brun\s+tool\s+"([^"]+)"/i.exec(e)
                                if (t?.[1] != null) return aj(t[1])
                                let a = /\baccess\s+(.+?)\?*$/i.exec(e)
                                return a?.[1] != null ? aj(a[1]) : null
                              })(r.message)
                              ;((i =
                                null == p
                                  ? t.formatMessage(aT.allowTarget, { target: l })
                                  : t.formatMessage(aT.allowTarget, { target: p })),
                                (u =
                                  aj(r.subtitle) ??
                                  (null == a
                                    ? null == r.toolParamsDisplay
                                      ? aO(r.approval.tool_params)
                                      : aP(r.toolParamsDisplay)
                                    : aP(a.toolParamsDisplay)) ??
                                  aj(a?.message) ??
                                  aj(r.message)))
                              break
                            }
                            case "toolSuggestion": {
                              let e = aj(r.suggestion.tool_name) ?? aF(r.suggestion.tool_id) ?? t.formatMessage(aT.tool)
                              ;((i =
                                "enable" === r.suggestion.suggest_type
                                  ? t.formatMessage(aT.enableTool, { toolName: e })
                                  : t.formatMessage(aT.installTool, { toolName: e })),
                                (c =
                                  "connector" === r.suggestion.tool_type
                                    ? t.formatMessage(aT.connector)
                                    : t.formatMessage(aT.plugin)),
                                (u = aj(r.suggestion.suggest_reason)))
                              break
                            }
                            case "connectorAuth": {
                              let e = aj(r.connector.connector_name) ?? aF(r.connector.connector_id) ?? s,
                                a = r.connector.auth_reason
                              ;((i =
                                "missing_link" === a
                                  ? t.formatMessage(aT.connectTarget, { target: e })
                                  : "oauth_upgrade_required" === a
                                    ? t.formatMessage(aT.additionalAccessTarget, { target: e })
                                    : t.formatMessage(aT.reconnectTarget, { target: e })),
                                (c = e),
                                (u = aj(r.subtitle) ?? aj(r.message) ?? aN(r.url)),
                                (d = [
                                  {
                                    intent: "open",
                                    label:
                                      "missing_link" === a
                                        ? t.formatMessage(aT.connect)
                                        : "oauth_upgrade_required" === a
                                          ? t.formatMessage(aT.updateAccess)
                                          : t.formatMessage(aT.reconnect),
                                    tone: "primary",
                                  },
                                ]))
                              break
                            }
                            case "urlAction":
                              ;((c = aF(r.serverName) ?? aj(r.serverName) ?? s),
                                (i = t.formatMessage(aT.openLink)),
                                (u = aj(r.subtitle) ?? aN(r.url) ?? aj(r.message)),
                                (d = [{ intent: "open", label: t.formatMessage(aT.openLink), tone: "primary" }]))
                              break
                            case "generic":
                              ;((i =
                                (function ({ message: e, metadata: t }) {
                                  let a = (function (e) {
                                      if (null == e || Array.isArray(e) || "object" != typeof e) return null
                                      let t = e.reason
                                      return "string" != typeof t ? null : aj(t)
                                    })(t),
                                    i = (function (e, t) {
                                      let a = e.trim()
                                      if (null == t) return a
                                      let i = `Reason: ${t}`
                                      if (!a.endsWith(i)) return a
                                      let n = a.slice(0, -i.length).trim()
                                      return n.length > 0 ? n : a
                                    })(e, a)
                                  return null != a &&
                                    (function (e) {
                                      let t = e.trim().toLowerCase()
                                      return (
                                        "tool call needs your approval." === t || "tool call needs your approval" === t
                                      )
                                    })(i)
                                    ? a
                                    : aj(i)
                                })({ message: r.message, metadata: r.metadata }) ??
                                t.formatMessage(aT.allowTarget, { target: s })),
                                (u = aj(r.subtitle) ?? aO(r.toolParams) ?? aj(r.message)))
                          }
                          "high" === r.riskLevel &&
                            (d = [{ intent: "open", label: t.formatMessage(aT.review), tone: "primary" }])
                          let p = t.formatMessage(aT.allowTarget, { target: c }),
                            m = {
                              ariaLabel: p,
                              intent: "mcp-elicitation",
                              label: n ?? p,
                              mcpElicitationAction: "accept",
                              tone: "primary",
                            }
                          return {
                            kind: "tool",
                            requestId: e.requestId,
                            operation: i,
                            target: c,
                            summary: u,
                            notificationTitleSeparator: o,
                            title: i,
                            actions:
                              d ??
                              (a
                                ? [
                                    {
                                      intent: "mcp-elicitation",
                                      label: t.formatMessage(aT.cancel),
                                      mcpElicitationAction: "decline",
                                      tone: "secondary",
                                    },
                                    m,
                                  ]
                                : [m]),
                          }
                        })(e, t, a)
                      case "optionPicker":
                      case "setupCodexStep":
                      case void 0:
                        return null
                    }
                  })(p, i, {
                    includeMcpElicitationCancelAction: t,
                    planStartCollaborationMode:
                      null == e.collaborationMode
                        ? void 0
                        : {
                            mode: "default",
                            settings: { ...e.collaborationMode.settings, developer_instructions: null },
                          },
                  }),
                }
              )
            })({
              thread: o,
              includeMcpElicitationCancelAction: e,
              openAIFormElicitationsEnabled: t,
              intl: a,
              excludedConversationId: n,
              threadDetailLevel: r,
            })
            null == i || s.has(i.key) || (s.add(i.key), l.push(i))
          }
          for (let e of o) {
            let t = (function (e, t) {
              let a = (e.updated_at ?? e.created_at ?? 0) * 1e3,
                i = e.task_status_display?.latest_turn_status_display?.turn_id ?? null
              return {
                actionPath: "/remote/" + e.id,
                controlTarget: null == i ? null : { type: "cloud-task", taskId: e.id, turnId: i },
                hostId: null,
                key: (0, ty.p)(e.id),
                localConversationId: null,
                source: "cloud",
                showInNotificationTray: !0,
                sortAtMs: a,
                status: (function (e) {
                  if (e.archived) return "idle"
                  let t = e.task_status_display?.latest_turn_status_display?.turn_status
                  return "failed" === t || "cancelled" === t
                    ? "failed"
                    : "in_progress" === t || "pending" === t
                      ? "running"
                      : e.has_unread_turn
                        ? "review"
                        : "idle"
                })(e),
                subtitle: null,
                title: e.title?.trim() || t.formatMessage(aU.newThread),
                turnKey: i,
                updatedAtMs: a,
                waitingRequest: null,
              }
            })(e, a)
            s.has(t.key) || (s.add(t.key), l.push(t))
          }
          return l
        })({
          includeMcpElicitationCancelAction: !0,
          openAIFormElicitationsEnabled: q,
          intl: D,
          localThreads: eu,
          excludedConversationId: er,
          remoteTasks: void 0 === ep ? [] : ep,
          threadDetailLevel: U,
        })
      k[5] !== D || k[6] !== F
        ? ((r = () => {
            F.get(W.Id).danger(
              D.formatMessage({
                id: "avatarOverlay.approvalReplyError",
                defaultMessage: "Couldn’t send your decision. Check the connection and try again.",
                description: "Shown when an approval decision from the floating avatar overlay could not be delivered",
              }),
              { errorAnalytics: { toastId: "avatarOverlay.approvalReplyError" } },
            )
          }),
          (k[5] = D),
          (k[6] = F),
          (k[7] = r))
        : (r = k[7])
      let ev = r
      k[8] !== ed || k[9] !== F || k[10] !== eg || k[11] !== ev
        ? ((l = (e, t) => {
            let a = e.waitingRequest
            if (null != e.localConversationId && null != t) {
              let i = e.localConversationId,
                n =
                  eg.find((t) => {
                    let { key: a } = t
                    return a === e.notificationPreferenceId
                  })?.hostId ?? null
              switch (t.intent) {
                case "command-approval":
                  if (null != t.commandDecision && null != n && (a?.kind === "exec" || a?.kind === "network"))
                    return void (0, x.V)(F, n)
                      .replyWithCommandExecutionApprovalDecision(i, a.requestId, t.commandDecision)
                      .then(ed, ev)
                  break
                case "file-approval":
                  if (null != t.fileDecision && null != n && a?.kind === "patch")
                    return void (0, x.V)(F, n)
                      .replyWithFileChangeApprovalDecision(i, a.requestId, t.fileDecision)
                      .then(ed, ev)
                  break
                case "permission-response":
                  if (null != t.permissionResponse && null != n && a?.kind === "permission")
                    return void (0, x.V)(F, n)
                      .replyWithPermissionsRequestApprovalResponse(i, a.requestId, t.permissionResponse)
                      .then(() => {
                        ed()
                      })
                  break
                case "mcp-elicitation":
                  if (null != t.mcpElicitationAction && null != n && a?.kind === "tool")
                    return void (0, x.V)(F, n)
                      .replyWithMcpServerElicitationResponse(i, a.requestId, (0, p.Se)(t.mcpElicitationAction))
                      .then(() => {
                        ed()
                      })
                      .catch(oY)
                  break
                case "plan-start":
                  if (a?.kind === "plan" && null != n && null != n && null != t.planStartCollaborationMode)
                    return void (0, x.V)(F, n)
                      .updateThreadSettingsForNextTurn(i, { collaborationMode: t.planStartCollaborationMode })
                      .then(() => (0, x.V)(F, n).removePlanImplementationRequest(i, a.turnId))
                      .then(async () =>
                        (0, E.m)(F, n, i, {
                          turnTrigger: "avatar_implement_plan",
                          prompt: `${_.B}
${a.planContent}`,
                          serviceTier: await (0, T.e)(F, n, t.planStartCollaborationMode?.settings.model ?? null),
                        }),
                      )
                      .then(() => {
                        ed()
                      })
              }
            }
            ;(null == t || "open" === t.intent) &&
              null != e.action &&
              K.O1.dispatchMessage("open-in-main-window", {
                path: e.action.path,
                appEntryAttribution: { channel: "push_notification", source: "pet_notification" },
              })
          }),
          (k[8] = ed),
          (k[9] = F),
          (k[10] = eg),
          (k[11] = ev),
          (k[12] = l))
        : (l = k[12])
      let ey = l
      k[13] !== ed || k[14] !== F || k[15] !== eg
        ? ((s = (e, t) => {
            let a = e.waitingRequest
            if (null == e.localConversationId || a?.kind !== "question") return
            let i =
              eg.find((t) => {
                let { key: a } = t
                return a === e.notificationPreferenceId
              })?.hostId ?? null
            null != i &&
              (0, x.V)(F, i)
                .replyWithUserInputResponse(e.localConversationId, a.requestId, {
                  answers: { [t.questionId]: { answers: [t.label] } },
                })
                .then(() => {
                  ed()
                })
          }),
          (k[13] = ed),
          (k[14] = F),
          (k[15] = eg),
          (k[16] = s))
        : (s = k[16])
      let ew = s
      k[17] !== ef || k[18] !== eh || k[19] !== ed || k[20] !== em || k[21] !== F
        ? ((g = async (e, t) => {
            let a = e.controlTarget
            switch (t.type) {
              case "close-follow-up":
              case "follow-up-active-changed":
              case "follow-up-editor-changed":
              case "open-follow-up":
                return
              case "stop":
                if (null == a) return
                switch (a.type) {
                  case "app-server-conversation":
                    ;(await (0, M.F)(F, { conversationId: a.conversationId, initiatedBy: "user" }),
                      Promise.resolve(ed()).catch(oz))
                    return
                  case "cloud-task":
                    ;(await ef.mutateAsync(a.taskId), Promise.resolve(em()).catch(oV))
                    return
                }
              case "submit-follow-up": {
                let e = t.prompt.trim()
                if (null == a || 0 === e.length) return
                switch (a.type) {
                  case "app-server-conversation": {
                    let t = F.get(I.qX, a.conversationId)
                    return (
                      await (0, E.m)(F, t, a.conversationId, {
                        turnTrigger: "avatar_follow_up",
                        prompt: e,
                        serviceTier: await (0, T.e)(F, t, null),
                      }),
                      Promise.resolve(ed()).catch(oB),
                      "submitted"
                    )
                  }
                  case "cloud-task":
                    return (
                      await eh.mutateAsync({
                        taskId: a.taskId,
                        turnId: a.turnId,
                        prompt: e,
                        ideContext: "",
                        runEnvironmentInQaMode: !1,
                        images: null,
                      }),
                      Promise.resolve(em()).catch(oH),
                      "submitted"
                    )
                }
              }
            }
          }),
          (k[17] = ef),
          (k[18] = eh),
          (k[19] = ed),
          (k[20] = em),
          (k[21] = F),
          (k[22] = g))
        : (g = k[22])
      let eb = g
      k[23] !== eu
        ? ((v = (e) =>
            eu.find((t) => {
              let { state: a } = t
              return a.summary.conversationId === e && (a.summary.hostId ?? tw.fI) === tw.fI
            })?.latestTurn?.items),
          (k[23] = eu),
          (k[24] = v))
        : (v = k[24])
      let eC = (H || X) && ee.isLoading && !et
      return (
        k[25] !== ed || k[26] !== F
          ? ((w = async (e, t, a, i, n, o, r, l, s) => {
              if (!F.get(C.G, { name: "chatgpt.quick-chat" }).isCapable) return "cancelled"
              if (null != i) {
                if (r) {
                  let t = F.get(e4.wz),
                    r = {
                      scope: F,
                      conversationId: i.conversationId,
                      hostId: i.hostId,
                      replyToMessageId: l,
                      entryPoint: "mini",
                      context: (function ({ prompt: e, appshotContexts: t, attachmentContext: a }) {
                        let i = a ?? {
                          prompt: e,
                          appshotContexts: t,
                          addedFiles: [],
                          fileAttachments: [],
                          imageAttachments: [],
                          ideContext: null,
                        }
                        return {
                          ...i,
                          addedFiles: [],
                          fileAttachments: (0, h.Y)([...i.addedFiles, ...i.fileAttachments]),
                        }
                      })({ prompt: e, appshotContexts: a, attachmentContext: o }),
                    }
                  return (
                    t?.conversationId === i.conversationId ? await t.send(r, s) : await (0, Q.d)(r),
                    n?.(),
                    "sent"
                  )
                }
                let t = a ?? []
                return (
                  await (0, E.m)(F, i.hostId, i.conversationId, {
                    turnTrigger: "avatar_quick_chat",
                    attachmentContext: o,
                    inputItems:
                      null == o
                        ? t.flatMap((e) => {
                            let t = e.imageDataUrl ?? e.imagePath
                            return null == t
                              ? []
                              : [(0, f.K)(t, { localPath: e.imagePath ?? void 0, isRemoteHost: i.hostId !== tw.fI })]
                          })
                        : void 0,
                    prompt: null == o ? [e, ...t.map(m.my)].join("\n\n") : e,
                    serviceTier: await (0, T.e)(F, i.hostId, null),
                    usePermissionSelection: (0, tQ.ie)(F, "4226282475") || void 0,
                  }),
                  n?.(),
                  await ed(),
                  "sent"
                )
              }
              let u = c()(() => n?.()),
                d = (e) => {
                  "created" === e.status && "accepted" === e.firstTurn.status && u()
                },
                p = await (0, b.Nw)({
                  scope: F,
                  turnTrigger: "avatar_quick_chat",
                  threadSource: "avatar_quick_chat",
                  appshotContexts: null == o ? a : void 0,
                  attachmentContext: o,
                  model: void 0,
                  prompt: e,
                  target: { type: "projectless", clientThreadId: t },
                  thinking: void 0,
                  onSettled: d,
                })
              if (("creation" === p.kind && d(p.result), await ed(), "creation" === p.kind)) {
                let e = (0, R.c)(F, p.result)
                if (null != e) throw e
              }
              return "created"
            }),
            (k[25] = ed),
            (k[26] = F),
            (k[27] = w))
          : (w = k[27]),
        k[28] !== ei ||
        k[29] !== en ||
        k[30] !== ey ||
        k[31] !== eb ||
        k[32] !== ew ||
        k[33] !== Z ||
        k[34] !== ec ||
        k[35] !== O ||
        k[36] !== eo ||
        k[37] !== ea ||
        k[38] !== B ||
        k[39] !== X ||
        k[40] !== ed ||
        k[41] !== em ||
        k[42] !== P ||
        k[43] !== N ||
        k[44] !== eg ||
        k[45] !== eC ||
        k[46] !== w ||
        k[47] !== v ||
        k[48] !== U
          ? ((A = (0, i.jsx)(oW, {
              presentation: O,
              dictationCleanupEnabled: !1,
              dictationStreamingEnabled: ei,
              dictationSupportState: en,
              latestTurnItems: v,
              mascotWidthPx: ec,
              productLogger: eo,
              quickChatEnabled: ea,
              quickChatStashEnabled: B,
              quickChatStyleEnabled: X,
              isPetVisible: Z,
              isQuickChatLoading: eC,
              selectedAvatar: P,
              selectedAvatarId: N,
              sessions: eg,
              threadDetailLevel: U,
              onClosePet: oU,
              onMascotClick: oD,
              onRefreshLocalSessions: ed,
              onRefreshRemoteSessions: em,
              onRunNotificationControl: eb,
              onRunNotificationAction: ey,
              onSubmitQuestionOption: ew,
              onSubmitQuickChat: w,
            })),
            (k[28] = ei),
            (k[29] = en),
            (k[30] = ey),
            (k[31] = eb),
            (k[32] = ew),
            (k[33] = Z),
            (k[34] = ec),
            (k[35] = O),
            (k[36] = eo),
            (k[37] = ea),
            (k[38] = B),
            (k[39] = X),
            (k[40] = ed),
            (k[41] = em),
            (k[42] = P),
            (k[43] = N),
            (k[44] = eg),
            (k[45] = eC),
            (k[46] = w),
            (k[47] = v),
            (k[48] = U),
            (k[49] = A))
          : (A = k[49]),
        A
      )
    }
    function oD() {
      K.O1.dispatchMessage("open-current-main-window", {
        focusComposer: !0,
        stealFocus: !0,
        appEntryAttribution: { channel: "shortcut", source: "shortcut" },
      })
    }
    function oU() {
      K.O1.dispatchMessage("avatar-overlay-close", {})
    }
    function oH() {}
    function oB() {}
    function oV() {}
    function oz() {}
    function oY() {}
    function oW(e) {
      let t,
        a,
        o,
        r = (0, n.c)(7),
        [l] = (0, g.useState)(d.xa2)
      return (
        r[0] !== l ? ((t = (0, t6.p)(null, "main", null, l)), (r[0] = l), (r[1] = t)) : (t = r[1]),
        r[2] !== e ? ((a = (0, i.jsx)(oX, { ...e })), (r[2] = e), (r[3] = a)) : (a = r[3]),
        r[4] !== t || r[5] !== a
          ? ((o = (0, i.jsx)(u.Ui, { scope: t6.PR, value: t, children: a })), (r[4] = t), (r[5] = a), (r[6] = o))
          : (o = r[6]),
        o
      )
    }
    function oX(e) {
      let t,
        a,
        r,
        s,
        c,
        p,
        m,
        f,
        b,
        M,
        S,
        E,
        R,
        _,
        T,
        N,
        L,
        j,
        D,
        z,
        Q,
        ee,
        et,
        ea,
        ei,
        en,
        eo,
        er,
        es,
        ec,
        ed,
        ep,
        em,
        ef,
        eh,
        eg,
        ev,
        ey,
        ew,
        eb,
        eC,
        ex,
        eA,
        eM,
        eI,
        eS,
        eE,
        eR,
        e_,
        eT,
        ek,
        eO,
        eP,
        eN,
        eL,
        eF,
        eq,
        ej,
        eD,
        eU,
        eH,
        eB,
        eV,
        ez,
        eY,
        eW,
        eX,
        eG,
        e$,
        eK,
        eQ,
        eZ,
        eJ,
        e0,
        e1,
        e2,
        e3,
        e4,
        e5,
        e6,
        e7,
        e8,
        e9,
        te,
        ta,
        ti,
        tn,
        to,
        tr,
        tl,
        ts,
        tc,
        tu,
        tx,
        t8 = (0, n.c)(357),
        {
          presentation: ae,
          dictationCleanupEnabled: at,
          dictationStreamingEnabled: an,
          dictationSupportState: ao,
          firstAwakeNotificationEnabled: ar,
          latestTurnItems: al,
          isPetVisible: as,
          isQuickChatLoading: ac,
          mascotWidthPx: au,
          productLogger: ad,
          quickChatEnabled: ap,
          quickChatStashEnabled: am,
          quickChatStyleEnabled: af,
          quickChatResetRevision: ah,
          quickChatStashAppearance: ag,
          stashAttentionAnimation: av,
          voiceOverride: ay,
          selectedAvatar: aw,
          selectedAvatarId: ab,
          sessions: aC,
          threadDetailLevel: ax,
          onClosePet: aA,
          onMascotClick: aM,
          onRefreshLocalSessions: aI,
          onRefreshRemoteSessions: aS,
          onRunNotificationControl: aE,
          onRunNotificationAction: aR,
          onSubmitQuestionOption: a_,
          onSubmitQuickChat: aT,
        } = e,
        aO = void 0 === ar || ar,
        aP = void 0 === as || as,
        aN = void 0 !== ac && ac,
        aL = void 0 !== am && am,
        aF = void 0 !== af && af,
        aq = void 0 === ah ? 0 : ah,
        aj = void 0 === ax ? t9._e : ax,
        aD = (0, u.gh)(t6.PR),
        aU = (0, g.useId)(),
        { layout$: aH, quickChatStashedEdge$: aB, activityStackMaxViewportHeight$: az } = (0, u.uO)(aZ, aU),
        a$ = ae?.isStationary ?? !1,
        aQ = (0, u.Ul)(J.VI),
        aJ = (0, u.Ul)(tf.MR),
        a0 = aJ ?? aQ,
        a1 = aP && (!ap || null == a0),
        a2 = !a1,
        a3 = ap && a2,
        a4 = ap && (aF || a3),
        a5 = (0, u.Ul)(or.k)
      t8[0] !== aC ? ((t = aC.flatMap(ro)), (t8[0] = aC), (t8[1] = t)) : (t = t8[1])
      let a6 = (0, u._U)(oL, t),
        a7 = (0, u.Ul)(aY),
        a8 = (0, u.Ul)(i6.P2),
        a9 = (0, u.Ul)(J.Fe),
        ie = (0, u._U)(tg.Fw, a0?.conversationId ?? null),
        it = (0, u._U)(tg.R1, a0?.conversationId ?? null),
        ia = null == it ? null : `${it.conversationId}:${it.profile.updated_at}`,
        [ii, io] = (0, g.useState)(null),
        ir = null != a0 && ie,
        il = a4 && a9 && null != aQ,
        is = (0, aa.Zj)("620613358"),
        ic = (0, t5.w)(),
        [iu, id] = (0, g.useState)(!1),
        ip = a$ || is || iu
      t8[2] !== a1 || t8[3] !== aw
        ? ((a = { selectedAvatar: aw, isPetVisible: a1 }), (t8[2] = a1), (t8[3] = aw), (t8[4] = a))
        : (a = t8[4])
      let im = (function (e) {
          let t,
            a,
            i,
            r,
            l,
            s,
            c,
            p,
            m,
            f,
            h,
            v,
            w,
            b,
            A,
            M,
            S,
            E,
            R = (0, n.c)(65),
            _ = (0, u.gh)(el.u),
            T = (0, y.A)(),
            { accountId: k, authMethod: O, userId: P } = (0, tA.As)(),
            N = (0, tE.K5)(),
            { activeMode: L } = (0, tM.c)(),
            q = N.cwd ?? void 0
          R[0] !== N.hostId || R[1] !== q
            ? ((t = { conversationId: null, cwdOverride: q, hostId: N.hostId }),
              (R[0] = N.hostId),
              (R[1] = q),
              (R[2] = t))
            : (t = R[2])
          let {
              agentMode: j,
              isAgentModePending: D,
              permissionProfileId: U,
              shouldSendPermissionOverrides: H,
            } = (0, tI.Ap)(t),
            { serviceTierSettings: B } = (0, tS.k)()
          R[3] === Symbol.for("react.memo_cache_sentinel") ? ((a = { name: "voice.realtime" }), (R[3] = a)) : (a = R[3])
          let { isCapable: V, isLoading: z } = (0, u._U)(C.G, a),
            Y = (0, u.Ul)(tz.g_),
            W = (0, u.Ul)(tk.e),
            X = V && (Y?.session.greetingEnabled === !0 || W?.session.greetingEnabled === !0) && "chatgpt" === O
          R[4] !== k || R[5] !== X || R[6] !== P
            ? ((i = { accountId: k, enabled: X, userId: P }), (R[4] = k), (R[5] = X), (R[6] = P), (R[7] = i))
            : (i = R[7])
          let { data: G } = (0, tG.uA)(i),
            $ = (0, u.Ul)(tL.uD),
            Q = (0, u.Ul)(tU.gL),
            Z = (0, u.Ul)(tL.Fe),
            J = (0, u.Ul)(tL.Xz),
            ee = (0, u.Ul)(tL.RQ),
            et = (0, u.Ul)(tL.Bw),
            ea = (0, u.Ul)(tH._A),
            ei = (0, u.Ul)(tK.B),
            [en, eo] = (0, g.useState)(!1),
            [er, es] = (0, g.useState)(null),
            ec = (0, g.useRef)(!1),
            ed = (0, g.useRef)(!1),
            ep = (0, g.useRef)(0),
            em = (0, g.useRef)(null),
            ef = (0, g.useRef)(null),
            eh = (0, g.useRef)(!1),
            eg = (0, g.useRef)(!1),
            [ev, ey] = (0, g.useState)(!1),
            [ew, eb] = (0, g.useState)(null),
            eC = (0, g.useRef)(null),
            ex = null != er && "starting" === et,
            eA = null != Y,
            eM =
              V &&
              eA &&
              !ev &&
              null == $ &&
              "inactive" === et &&
              navigator.mediaDevices?.getUserMedia != null &&
              "u" > typeof RTCPeerConnection,
            eI = !N.isActiveWorkspaceRootLoading && !D,
            eS = eM && eI
          R[8] !== _
            ? ((r = () => {
                null == _.get(tL.uD) &&
                  "inactive" === _.get(tL.Bw) &&
                  (eo(!1), tX.appServices.realtimeVoiceRuntime?.cancelRealtimeSessionStart())
              }),
              (R[8] = _),
              (R[9] = r))
            : (r = R[9])
          let eE = r
          R[10] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = () => {
                ;(null != eC.current && (window.clearTimeout(eC.current), (eC.current = null)), eb(null))
              }),
              (R[10] = l))
            : (l = R[10])
          let eR = l
          R[11] !== T
            ? ((s = (e) => {
                ;(eR(),
                  eb(
                    e instanceof DOMException && "NotAllowedError" === e.name
                      ? T.formatMessage({
                          id: "composer.realtime.microphonePermissionError",
                          defaultMessage: "Microphone access is required to start voice chat",
                          description: "Error shown when microphone permission blocks realtime voice startup",
                        })
                      : (0, d.Rt_)(e) ||
                          T.formatMessage({
                            id: "avatarOverlay.realtime.connectionError",
                            defaultMessage: "Connection failed",
                            description: "Error shown under the floating avatar voice button when voice startup fails",
                          }),
                  ),
                  (eC.current = window.setTimeout(() => {
                    ;((eC.current = null), eb(null))
                  }, d.zeK)))
              }),
              (R[11] = T),
              (R[12] = s))
            : (s = R[12])
          let e_ = s,
            eT = async (t) => {
              let a = null == t.productExperience ? void 0 : tJ[t.productExperience],
                i = ep.current + 1
              ;((ep.current = i), em.current?.(), (em.current = null))
              let n =
                  "avatar_overlay_button_new_thread" === t.source && null != e
                    ? (0, F.K)(e.selectedAvatar.id, e.isPetVisible)
                    : void 0,
                r = n === o.CodexMiniAppearance.CODEX_MINI_APPEARANCE_DEFAULT_PET ? e?.selectedAvatar.id : void 0,
                l = (0, tY.m)(t),
                s,
                c = "exact" === l.type,
                u = "composer_button_existing_thread" === t.source && !0 === t.isTransfer,
                p = "composer_button_new_thread" === t.source,
                m = c ? l.locator.hostId : l.hostId,
                f = c && (await (0, tB.VR)(_, l.locator))
              if (ep.current !== i) return
              let h = c && ((!u && "in-window" === t.preferredPresentationSurface) || f) ? _.get(tk.e) : _.get(tz.g_),
                g = null != h,
                v = "global-overlay" !== t.preferredPresentationSurface
              if (p && null != $) {
                eh.current = !0
                try {
                  await tN.E.stop(_, $)
                } catch (e) {
                  throw ((eh.current = !1), e)
                }
              } else if (v && null != $ && !u) {
                let e = _.get(tH._A),
                  t =
                    "inactive" !== e.phase && e.locator.conversationId === $
                      ? e.locator
                      : { conversationId: $, hostId: m }
                ;((0, tV._x)({
                  locator: t,
                  surface: "in-window" === e.preferredPresentationSurface ? "in-window" : "main-thread",
                }),
                  K.O1.dispatchMessage("open-in-main-window", { path: (0, d._RT)(t.conversationId) }))
                return
              }
              if (ep.current !== i) return
              if (
                !(p || u
                  ? V &&
                    g &&
                    !ev &&
                    null == _.get(tL.uD) &&
                    "inactive" === _.get(tL.Bw) &&
                    navigator.mediaDevices?.getUserMedia != null &&
                    "u" > typeof RTCPeerConnection
                  : eM && g) ||
                null == h
              ) {
                let e = "session_already_starting"
                V
                  ? null != h && g
                    ? navigator.mediaDevices?.getUserMedia == null
                      ? (e = "microphone_unavailable")
                      : "u" < typeof RTCPeerConnection && (e = "webrtc_unavailable")
                    : (e = "configuration_not_ready")
                  : (e = "voice_disabled")
                let i = Error(
                  T.formatMessage(
                    {
                      id: "avatarOverlay.realtime.startUnavailable",
                      defaultMessage: "Voice chat is not ready ({reason})",
                      description:
                        "Error shown when realtime voice startup is unavailable, including a technical reason code for troubleshooting",
                    },
                    { reason: e },
                  ),
                )
                if ("microphone_unavailable" === e || "webrtc_unavailable" === e)
                  try {
                    ;((0, tq.o)(
                      i,
                      o.CodexRealtimeVoiceStartupMediaFailureReason
                        .CODEX_REALTIME_VOICE_STARTUP_MEDIA_FAILURE_REASON_MEDIA_APIS_UNAVAILABLE,
                    ),
                      new tj.F6(_, crypto.randomUUID(), t.source, a).fail(
                        o.CodexRealtimeVoiceStartupFailureReason
                          .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_MICROPHONE_OR_MEDIA_FAILURE,
                        i,
                      ))
                  } catch {}
                throw (v || e_(i), i)
              }
              if (!c && !eI) {
                let e = Error(
                  T.formatMessage({
                    id: "avatarOverlay.realtime.workspaceNotReady",
                    defaultMessage: "Voice chat cannot start until the workspace is ready",
                    description:
                      "Error shown when realtime voice startup cannot create a thread because the workspace or permissions are still loading",
                  }),
                )
                throw (v || e_(e), e)
              }
              f && (0, t_.qo)(_)
              let y = (0, tQ.ie)(_, "765410072"),
                w =
                  ("composer_button_existing_thread" === t.source && t.voiceModeSupported) || (0, tW.d)(_.get(I.B0, m)),
                b = h.existingThreadVoiceEnabled && w,
                C = b ? h : { ...h, existingThreadVoiceEnabled: !1 },
                A = y
                  ? `${C.session.basePrompt}

${tF.X7}`
                  : C.session.basePrompt,
                M = crypto.randomUUID()
              ef.current?.cancel(
                o.CodexRealtimeVoiceStartupFailureReason.CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_SUPERSEDED,
                o.CodexRealtimeVoiceStartupCancellationOrigin
                  .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_SUPERSEDED,
              )
              let S = new tj.F6(_, M, t.source, a)
              ;((ef.current = S), eo(v), ey(!0), es(null), (ec.current = _.get(tL.Fe)), (ed.current = _.get(tL.Xz)))
              let E = !0,
                R = null,
                k = () => {
                  E && ((E = !1), R?.then(t2).catch(t1))
                },
                O = () => (
                  null != R ||
                    (R = tj.F6.trackOperation(
                      S,
                      o.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_MICROPHONE_SETUP,
                      () =>
                        tP.N.start(S.createMediaSetupAnalytics(), () => {
                          if (ep.current !== i) throw new DOMException("Voice startup was cancelled", "AbortError")
                          if (f)
                            try {
                              ;(0, t_.qo)(_)
                            } catch {
                              throw (
                                eO("user_cancelled"),
                                new DOMException("Voice startup was cancelled", "AbortError")
                              )
                            }
                        }),
                    ))
                      .then((e) => {
                        ep.current !== i
                          ? k()
                          : (S.mark(
                              o.CodexRealtimeVoiceStartupPhase.CODEX_REALTIME_VOICE_STARTUP_PHASE_MICROPHONE_READY,
                            ),
                            e.setMuted(ec.current),
                            es(e))
                      })
                      .catch(t0),
                  R
                ),
                P = () => {
                  if (((0, t_.qo)(_), null != em.current)) return
                  let e = _.watch((e) => {
                    let { get: t } = e
                    ep.current !== i || "active" === t(tL.Bw) || t(t_.VK) || eO("user_cancelled")
                  })
                  em.current = () => {
                    ;(e(), k())
                  }
                }
              ;(f && P(), (c && !f) || O())
              let q = !1,
                D = !1,
                z =
                  o.CodexRealtimeVoiceStartupFailureReason
                    .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_THREAD_OPEN_OR_CREATE_FAILURE
              await (async () => {
                try {
                  let e = "composer_button_new_thread" === t.source ? t.memoryPreferences : (_.get(tR.bz) ?? void 0),
                    a =
                      "composer_button_new_thread" === t.source && void 0 !== t.activeCollaborationMode
                        ? t.activeCollaborationMode
                        : L
                  ;(await (0, tO.x)({
                    scope: _,
                    startupAnalytics: S,
                    activeCollaborationMode:
                      null == a || y || null != s
                        ? a
                        : {
                            mode: "default",
                            settings: {
                              model: a.settings.model,
                              reasoning_effort: a.settings.reasoning_effort,
                              developer_instructions: null,
                            },
                          },
                    activateRealtimeConversation: async (e, a) => {
                      if (c && !f) {
                        if (((f = await (0, tB.VR)(_, { hostId: m, conversationId: e })), ep.current !== i))
                          return "app_cancelled"
                        f && P()
                      }
                      let l =
                        u && "in-window" === t.preferredPresentationSurface && !_.get(tT.Rr, { hostId: m, threadId: e })
                          ? "main-thread"
                          : t.preferredPresentationSurface
                      ;(S.mark(o.CodexRealtimeVoiceStartupPhase.CODEX_REALTIME_VOICE_STARTUP_PHASE_THREAD_READY),
                        (z =
                          o.CodexRealtimeVoiceStartupFailureReason
                            .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_MICROPHONE_OR_MEDIA_FAILURE))
                      let s = await O().catch((e) => {
                        if (ep.current !== i && e instanceof DOMException && "AbortError" === e.name) return null
                        if (v && e instanceof DOMException && "NotAllowedError" === e.name) {
                          let e = Error(tB.zW)
                          throw (
                            S.recordErrorOperation(
                              e,
                              o.CodexRealtimeVoiceStartupOperation
                                .CODEX_REALTIME_VOICE_STARTUP_OPERATION_MICROPHONE_SETUP,
                            ),
                            (0, tq.o)(
                              e,
                              o.CodexRealtimeVoiceStartupMediaFailureReason
                                .CODEX_REALTIME_VOICE_STARTUP_MEDIA_FAILURE_REASON_MICROPHONE_PERMISSION_DENIED,
                            ),
                            e
                          )
                        }
                        throw e
                      })
                      if (
                        null == s ||
                        ep.current !== i ||
                        ((z =
                          o.CodexRealtimeVoiceStartupFailureReason
                            .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_VOICE_OR_CONFIG_PREPARATION_FAILURE),
                        null != a && (0, tR.To)(_, e, a, void 0),
                        (b && c) ||
                          ei?.[t$.hW] !== !0 ||
                          (await tj.F6.trackOperation(
                            S,
                            o.CodexRealtimeVoiceStartupOperation
                              .CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_SETTINGS_UPDATE,
                            () => (0, x.V)(_, m).updateThreadSettingsForNextTurn(e, { summary: "detailed" }),
                          )),
                        ep.current !== i)
                      )
                        return (
                          S.cancel(
                            o.CodexRealtimeVoiceStartupFailureReason
                              .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_SUPERSEDED,
                            o.CodexRealtimeVoiceStartupCancellationOrigin
                              .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_SUPERSEDED,
                          ),
                          "app_cancelled"
                        )
                      if (f)
                        try {
                          ;(0, t_.qo)(_)
                        } catch {
                          return (await eO("user_cancelled"), "app_cancelled")
                        }
                      ;((E = !1),
                        (z =
                          o.CodexRealtimeVoiceStartupFailureReason.CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_UNKNOWN))
                      let p = await tN.E.start(_, {
                        analyticsSessionId: M,
                        codexResponseItemPrefix: C.session.codexResponseItemPrefix,
                        codexResponsesAsItems: C.session.codexResponsesAsItems,
                        conversationId: e,
                        hostId: m,
                        handoffContext: "composer_button_existing_thread" === t.source ? t.handoffContext : void 0,
                        initiallyMicrophoneMuted: ec.current,
                        initiallyMuted: ed.current,
                        isTransfer: u,
                        microphone: s,
                        outputModality: "audio",
                        onTransfer: async (a, i) => {
                          let n = _.get(tV.qE)?.surface ?? t.preferredPresentationSurface
                          try {
                            if (
                              a.hostId === d.iwv &&
                              (await Promise.all([
                                (0, x.V)(_, a.hostId).loadRecentConversationIds([a.conversationId]),
                                _.query.getOrFetch(eu.cloudAeonByThreadId$, a.conversationId),
                              ]),
                              _.get(tL.uD) !== e)
                            )
                              return
                            ;((eh.current = !0),
                              "global-overlay" !== n &&
                                K.O1.dispatchMessage("open-in-main-window", { path: (0, d._RT)(a.conversationId) }),
                              await tN.E.stop(_, e, void 0, { playEndSound: !1, preserveGoal: !0 }),
                              (0, tD.ao)(),
                              await eT({
                                handoffContext: i,
                                isTransfer: !0,
                                locator: a,
                                preferredPresentationSurface: n,
                                source: "composer_button_existing_thread",
                                productExperience: t.productExperience,
                                voiceModeSupported:
                                  a.hostId === m ? w : a.hostId === d.iwv || (0, tW.d)(_.get(I.B0, a.hostId)),
                              }))
                          } catch (e) {
                            throw ((eh.current = !1), tX.appServices.realtimeVoice?.cancelTransfer(), e_(e), e)
                          }
                        },
                        preferredPresentationSurface: l,
                        prompt: A,
                        realtimeContinuity: C.session.continuity,
                        realtimeContinuityPrompt: C.session.continuityPrompt,
                        realtimeEndInstructions: b ? C.session.realtimeEndInstructions : void 0,
                        realtimeMemorySummaryEnabled: C.session.memorySummaryEnabled && !0 === _.get(tR.Wk, e),
                        realtimeMemorySummaryPrompt: C.session.memorySummaryPrompt,
                        realtimeSessionOverrides: C.session.overrides,
                        realtimeStartInstructions: b ? C.session.realtimeStartInstructions : void 0,
                        source: t.source,
                        miniAppearance: n,
                        miniBuiltInPetId: r,
                        startupAnalytics: S,
                        greetingEnabled: C.session.greetingEnabled,
                        userName: G?.displayName ?? null,
                      })
                      if (((eh.current = !1), (D = "active" === p), "active" !== p)) {
                        if ("user_cancelled" === p || ep.current !== i) return p
                        if ("busy" === p)
                          throw (
                            (z =
                              o.CodexRealtimeVoiceStartupFailureReason
                                .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_BUSY_OR_HOST_CLAIM_FAILURE),
                            Error(
                              T.formatMessage({
                                id: "avatarOverlay.realtime.sessionAlreadyStarting",
                                defaultMessage: "Voice chat is already active or starting in another window",
                                description:
                                  "Error shown when a requested realtime voice session cannot start because another session owns the host",
                              }),
                            )
                          )
                        throw Error(
                          T.formatMessage({
                            id: "avatarOverlay.realtime.startInterrupted",
                            defaultMessage: "Voice chat was interrupted before the session could start",
                            description:
                              "Error shown when realtime voice startup is unexpectedly cancelled without the user cancelling it",
                          }),
                        )
                      }
                      return (S.mark(o.CodexRealtimeVoiceStartupPhase.CODEX_REALTIME_VOICE_STARTUP_PHASE_ACTIVE),
                      ep.current !== i)
                        ? (tN.E.cancelStart(_), "app_cancelled")
                        : (v && (0, tV._x)({ locator: { conversationId: e, hostId: m }, surface: "main-thread" }),
                          "active")
                    },
                    agentMode: j,
                    currentLocalExecutionCwd: N.cwd ?? "",
                    intent: l,
                    memoryPreferences: e,
                    onStartError: (e) => {
                      v || e_(e)
                    },
                    serviceTier: B.serviceTierForRequest,
                    permissionProfileId: U,
                    projectId: "composer_button_new_thread" === t.source ? t.projectId : void 0,
                    pageCompanion: s,
                    shouldSendPermissionOverrides: H,
                    treatment: C,
                    threadToolsEnabled: !0,
                    workspaceRootsForLocalExecution: [],
                  }),
                    D ||
                      S.cancel(
                        ep.current === i
                          ? o.CodexRealtimeVoiceStartupFailureReason
                              .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_USER_CANCELLED
                          : o.CodexRealtimeVoiceStartupFailureReason
                              .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_SUPERSEDED,
                        ep.current === i
                          ? o.CodexRealtimeVoiceStartupCancellationOrigin
                              .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_UNKNOWN
                          : o.CodexRealtimeVoiceStartupCancellationOrigin
                              .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_SUPERSEDED,
                      ))
                } catch (e) {
                  throw ((q = !0), eo(!1), D || S.fail(z, e), e)
                }
              })().finally(() => {
                ;(ep.current === i && (em.current?.(), (em.current = null)),
                  E && ep.current === i && k(),
                  ep.current === i && (ey(!1), q || eE()),
                  ef.current === S && (ef.current = null))
              })
            },
            ek = (0, g.useEffectEvent)(eT),
            eO = async (e) => {
              let t = em.current
              ;((em.current = null),
                null == t ? er?.stop() : t(),
                ef.current?.cancel(
                  o.CodexRealtimeVoiceStartupFailureReason.CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_USER_CANCELLED,
                  "startup_timeout" === e
                    ? o.CodexRealtimeVoiceStartupCancellationOrigin
                        .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_HOST_TIMEOUT
                    : o.CodexRealtimeVoiceStartupCancellationOrigin
                        .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_USER_ACTION,
                ),
                (ep.current = ep.current + 1),
                es(null),
                ey(!1),
                eo(!1))
              let a = _.get(tL.uD)
              ;(tN.E.cancelStart(_, e), null == a && (_.set(tL.Fe, !1), _.set(tL.Xz, !1)))
            },
            eP = (0, g.useEffectEvent)(eO)
          R[13] !== eS || R[14] !== e_
            ? ((c = async () => {
                if (eS) {
                  eR()
                  try {
                    await tX.appServices.realtimeVoiceRuntime?.requestRealtimeStart(
                      { source: "avatar_overlay_button_new_thread" },
                      void 0,
                    )
                  } catch (e) {
                    ;(tZ.v.error("Failed to request realtime voice from the avatar overlay", {
                      safe: {},
                      sensitive: { error: e },
                    }),
                      e_(e))
                  }
                }
              }),
              (R[13] = eS),
              (R[14] = e_),
              (R[15] = c))
            : (c = R[15])
          let eN = c
          ;(R[16] !== eP || R[17] !== _
            ? ((p = () => () => {
                let e = ef.current
                e?.finishSession("app_unmounted")
                let t = _.get(tL.Bw)
                ;("active" === t || "stopping" === t
                  ? ("stopping" === t && (ep.current = ep.current + 1), em.current?.(), (em.current = null))
                  : eP("user_cancelled"),
                  null != eC.current && window.clearTimeout(eC.current))
              }),
              (R[16] = eP),
              (R[17] = _),
              (R[18] = p))
            : (p = R[18]),
            R[19] !== _ ? ((m = [_]), (R[19] = _), (R[20] = m)) : (m = R[20]),
            (0, g.useEffect)(p, m),
            R[21] !== eI || R[22] !== eP || R[23] !== eA || R[24] !== z || R[25] !== ek
              ? ((f = () => {
                  let e = tX.appServices.realtimeVoiceRuntime
                  if (null != e && eA && !z)
                    return (
                      e.registerRealtimeStarter(
                        async (e) => {
                          await ek(e)
                        },
                        async (e) => {
                          await eP(e)
                        },
                        eI,
                      ),
                      () => {
                        e.unregisterRealtimeStarter()
                      }
                    )
                }),
                (R[21] = eI),
                (R[22] = eP),
                (R[23] = eA),
                (R[24] = z),
                (R[25] = ek),
                (R[26] = f))
              : (f = R[26]),
            R[27] !== eI || R[28] !== eA || R[29] !== z
              ? ((h = [eI, eA, z]), (R[27] = eI), (R[28] = eA), (R[29] = z), (R[30] = h))
              : (h = R[30]),
            (0, g.useEffect)(f, h),
            R[31] === Symbol.for("react.memo_cache_sentinel")
              ? ((v = () => {
                  eo(!1)
                }),
                (R[31] = v))
              : (v = R[31]))
          let eL = v
          ;((0, K.JX)("avatar-overlay-explicit-pet-opened", eL),
            (0, K.JX)("notch-overlay-expand", eL),
            R[32] !== ev || R[33] !== et
              ? ((w = () => {
                  if ("inactive" !== et) {
                    eg.current = !0
                    return
                  }
                  if (eh.current) {
                    ;((eh.current = !1), (eg.current = !1))
                    return
                  }
                  if (eg.current) {
                    if (ev) {
                      eg.current = !1
                      return
                    }
                    ;((eg.current = !1), tX.appServices.realtimeVoiceRuntime?.completeRealtimeSession())
                  }
                }),
                (b = [ev, et]),
                (R[32] = ev),
                (R[33] = et),
                (R[34] = w),
                (R[35] = b))
              : ((w = R[34]), (b = R[35])),
            (0, g.useLayoutEffect)(w, b),
            R[36] !== eE || R[37] !== eO || R[38] !== ev || R[39] !== _
              ? ((A = async () => {
                  let e = _.get(tL.uD),
                    t = _.get(tL.Bw)
                  if (ev && (null == e || "active" !== t)) {
                    ;(await eO("user_cancelled"), eE())
                    return
                  }
                  null != e && "inactive" !== t && (await tN.E.stop(_, e))
                }),
                (R[36] = eE),
                (R[37] = eO),
                (R[38] = ev),
                (R[39] = _),
                (R[40] = A))
              : (A = R[40]))
          let eF = A
          R[41] !== ex || R[42] !== $ || R[43] !== et || R[44] !== _
            ? ((M = () => {
                if (ex) {
                  ;((ed.current = !_.get(tL.Xz)), null == $ ? _.set(tL.Xz, ed.current) : tN.E.toggleMute(_, $))
                  return
                }
                null != $ && "active" === et && ((ed.current = !_.get(tL.Xz)), tN.E.toggleMute(_, $))
              }),
              (R[41] = ex),
              (R[42] = $),
              (R[43] = et),
              (R[44] = _),
              (R[45] = M))
            : (M = R[45])
          let eq = M
          R[46] !== ex || R[47] !== er || R[48] !== $ || R[49] !== et || R[50] !== _
            ? ((S = () => {
                if (ex) {
                  let e = !_.get(tL.Fe)
                  ;((ec.current = e), null == $ ? (er.setMuted(e), _.set(tL.Fe, e)) : tN.E.toggleMicrophoneMute(_, $))
                  return
                }
                null != $ && "active" === et && ((ec.current = !_.get(tL.Fe)), tN.E.toggleMicrophoneMute(_, $))
              }),
              (R[46] = ex),
              (R[47] = er),
              (R[48] = $),
              (R[49] = et),
              (R[50] = _),
              (R[51] = S))
            : (S = R[51])
          let ej = S,
            eD = et
          return (
            ("active" !== et && "inactive" !== ea.phase && null != ea.transferDestination) || (ev && "inactive" === et)
              ? (eD = "starting")
              : "inactive" === et && en && (eD = "stopping"),
            R[52] !== eS ||
            R[53] !== Q ||
            R[54] !== eD ||
            R[55] !== $ ||
            R[56] !== Z ||
            R[57] !== J ||
            R[58] !== ee ||
            R[59] !== eN ||
            R[60] !== ew ||
            R[61] !== eF ||
            R[62] !== ej ||
            R[63] !== eq
              ? ((E = {
                  canStart: eS,
                  caption: Q,
                  conversationId: $,
                  isMicrophoneMuted: Z,
                  isMuted: J,
                  phase: eD,
                  startError: ew,
                  start: eN,
                  stop: eF,
                  voiceActivity: ee,
                  toggleMicrophoneMute: ej,
                  toggleMute: eq,
                }),
                (R[52] = eS),
                (R[53] = Q),
                (R[54] = eD),
                (R[55] = $),
                (R[56] = Z),
                (R[57] = J),
                (R[58] = ee),
                (R[59] = eN),
                (R[60] = ew),
                (R[61] = eF),
                (R[62] = ej),
                (R[63] = eq),
                (R[64] = E))
              : (E = R[64]),
            E
          )
        })(a),
        ih = ay ?? im,
        ig = (0, u.Ul)(tU.Rq),
        iv = iu && "active" !== ih.phase,
        iy = "inactive" === ih.phase && iv ? "starting" : ih.phase,
        iw = (0, u.Ul)(tH._A),
        iC = "inactive" !== iw.phase && null != iw.transferDestination,
        ix = (0, u.Ul)(tV.qE),
        iA = ix?.surface ?? null,
        iM = ic && "global-overlay" === iA && ix?.handoff != null,
        iI = null == iw || "inactive" === iw.phase ? null : iw.locator,
        iS = ay?.isSessionActive ?? (null != iw && "inactive" !== iw.phase)
      t8[5] !== ih.conversationId || t8[6] !== iw || t8[7] !== ay
        ? ((r =
            null == ay
              ? (0, tH.FM)(iw, ih.conversationId)
              : "active" === ay.phase || ("stopping" === ay.phase && "idle" !== ay.voiceActivity)),
          (t8[5] = ih.conversationId),
          (t8[6] = iw),
          (t8[7] = ay),
          (t8[8] = r))
        : (r = t8[8])
      let iE = r,
        iR = "inactive" !== iy && (iS || "starting" === ih.phase) && (null == iA || "global-overlay" === iA),
        [i_, iT] = (0, g.useState)(!1),
        [ik, iO] = (0, g.useState)(null),
        iP = ay?.petOpenIntent ?? i_,
        iN = iR ? iy : "inactive",
        iL = !a3 && (ic ? iS && !iR && !iP : (iS || iR) && !(is && (iR || iP))),
        iF = is && iR && ih.isMuted,
        iq = iF ? (ig ?? ih.caption) : null
      t8[9] !== iI ? ((s = { locator: iI, hideWhileResponding: !0 }), (t8[9] = iI), (t8[10] = s)) : (s = t8[10])
      let ij = (0, u._U)(t3.l, s)
      t8[11] !== iS || t8[12] !== iI || t8[13] !== ic
        ? ((c = {
            enabled: iS,
            isEligible: !0,
            locator: iI,
            surface: "global-overlay",
            usesNativeOverlayTransition: ic,
          }),
          (t8[11] = iS),
          (t8[12] = iI),
          (t8[13] = ic),
          (t8[14] = c))
        : (c = t8[14])
      let iD = (0, tV.cr)(c),
        iU = (0, tV.UB)(iI),
        iH = iI?.hostId
      t8[15] !== iR || t8[16] !== iH
        ? ((p = { enabled: iR, hostId: iH }), (t8[15] = iR), (t8[16] = iH), (t8[17] = p))
        : (p = t8[17])
      let { data: iB } = (0, k.Ad)(p),
        iV = (0, y.A)(),
        iz = (0, u.Ul)(t4.b_),
        iY = (0, u.Ul)(aB),
        iW = (0, u.Ul)(az),
        [iX, iG] = (0, g.useState)(!0),
        i$ = (0, u.Ul)(oN) ?? (0, ai.TB)(oP, !0),
        iK = il || i$,
        [iQ, iZ] = (0, g.useState)(null),
        iJ = iK || null != iQ,
        [i0, i1] = (0, g.useState)(!1),
        [i2] = (0, g.useState)(rn),
        [i3, i4] = (0, g.useState)(!1),
        [i5, i7] = (0, g.useState)(!1),
        [i8, i9] = (0, g.useState)(!1),
        ne = ay?.petControlsAppearance ?? d.JCZ,
        [nt, na] = (0, g.useState)(""),
        [ni, nr] = (0, g.useState)(null),
        nl = (0, g.useRef)(0)
      ;(null != ni && (ni.agentId !== a0?.id || ni.resetRevision !== aq) && nr(null),
        t8[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = { appshots: [], threadTarget: null }), (t8[18] = m))
          : (m = t8[18]))
      let [ns, nc] = (0, g.useState)(m),
        { appshots: nu, threadTarget: nd } = ns,
        np = (0, u.Ul)(H.gy),
        nm = (0, u.Ul)(H.PA),
        nf = (0, u.Ul)(H.a$),
        nh = np.length > 0 || nm.length > 0 || nf.length > 0,
        ng = (0, g.useRef)(0),
        nv = (0, g.useRef)(0)
      t8[19] === Symbol.for("react.memo_cache_sentinel") ? ((f = new Set()), (t8[19] = f)) : (f = t8[19])
      let ny = (0, g.useRef)(f),
        [nw] = (0, g.useState)(ri)
      t8[20] === Symbol.for("react.memo_cache_sentinel") ? ((b = new Map()), (t8[20] = b)) : (b = t8[20])
      let nb = (0, g.useRef)(b),
        nC = (0, tw.Qz)(tw.fI)
      t8[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((M = { origin: void 0, selectedOrbit: null, reply: void 0 }), (t8[21] = M))
        : (M = t8[21])
      let [nx, nA] = (0, g.useState)(M),
        nM = (0, u.Ul)(V.$X),
        nI = nx.selectedOrbit,
        nS = (nM ? nI : a0) ?? nd,
        nE = nS?.conversationId ?? null
      t8[22] !== iV || t8[23] !== aD || t8[24] !== nE
        ? ((S = { scope: aD, conversationId: nE, intl: iV }), (t8[22] = iV), (t8[23] = aD), (t8[24] = nE), (t8[25] = S))
        : (S = t8[25])
      let { supportsImageInputs: nR, notifyImageInputUnsupported: n_ } = (0, X.I)(S),
        nT = () => (
          (0, V.td)(aD, nw),
          nW(!1),
          (0, U.F)({
            scope: aD,
            attachmentGeneration: nv,
            canceledPendingFileAttachmentIds: ny.current,
            canCopyBrowserFileAttachments: !1,
            composerMode: "local",
            executionHostConfig: nC,
            executionHostId: tw.fI,
            getRestrictedRemoteHostImageSizeContext: () => ({
              appshotContexts: nu,
              imageAttachments: aD.get(H.gy),
              commentAttachments: [],
              mcpAppModelContextAttachments: [],
            }),
            intl: iV,
            notifyImageInputUnsupported: n_,
            supportsImageInputs: nR,
            setAddedFiles: (e) => (0, H.Rh)(aD, "addedFiles", e),
            setFileAttachments: (e) => (0, H.Rh)(aD, "fileAttachments", e),
            setImageAttachments: (e) => (0, H.Rh)(aD, "imageAttachments", e),
            setPendingFileAttachments: (e) => aD.set(V.UF, e),
          })
        )
      ;(t8[26] !== aD
        ? ((E = () => () => {
            ;((nv.current = nv.current + 1), (ng.current = ng.current + 1), nb.current.clear(), (0, V.Se)(aD))
          }),
          (R = [aD, nv]),
          (t8[26] = aD),
          (t8[27] = E),
          (t8[28] = R))
        : ((E = t8[27]), (R = t8[28])),
        (0, g.useEffect)(E, R),
        t8[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = { pendingCaptureCount: 0, response: void 0, startsCollapsed: !1 }), (t8[29] = _))
          : (_ = t8[29]))
      let [nk, nO] = (0, g.useState)(_)
      t8[30] === Symbol.for("react.memo_cache_sentinel") ? ((T = new Map()), (t8[30] = T)) : (T = t8[30])
      let nP = (0, g.useRef)(T),
        nN = (0, g.useRef)(0),
        nL = nt.length > 0 || nu.length > 0 || nh || nk.pendingCaptureCount > 0
      ;(t8[31] === Symbol.for("react.memo_cache_sentinel") ? ((N = []), (t8[31] = N)) : (N = t8[31]),
        t8[32] !== aq ? ((L = { resetRevision: aq, starts: N }), (t8[32] = aq), (t8[33] = L)) : (L = t8[33]))
      let [nF, nq] = (0, g.useState)(L),
        nj = nF.resetRevision === aq ? nF.starts : []
      ;(t8[34] === Symbol.for("react.memo_cache_sentinel") ? ((j = []), (t8[34] = j)) : (j = t8[34]),
        t8[35] !== aq ? ((D = { resetRevision: aq, flights: j }), (t8[35] = aq), (t8[36] = D)) : (D = t8[36]))
      let [nD, nU] = (0, g.useState)(D)
      t8[37] !== aC ? ((z = aC.flatMap(ra)), (t8[37] = aC), (t8[38] = z)) : (z = t8[38])
      let nH = (0, u._U)(t7.iS, z),
        [nB, nV] = (0, g.useState)(null),
        [nz, nY] = (0, g.useState)(!1),
        nW = nY,
        [nX, nG] = (0, g.useState)(!1)
      ;(t8[39] === Symbol.for("react.memo_cache_sentinel")
        ? ((Q = () => {
            let e = () => nG(!1)
            return (window.addEventListener("blur", e), () => window.removeEventListener("blur", e))
          }),
          (ee = []),
          (t8[39] = Q),
          (t8[40] = ee))
        : ((Q = t8[39]), (ee = t8[40])),
        (0, g.useEffect)(Q, ee))
      let n$ = (0, g.useRef)(0),
        nK = (0, g.useRef)(null),
        nQ = "editor" === nB,
        [nZ, nJ] = (0, g.useState)(null),
        [n0, n1] = (0, g.useState)(null),
        [n2, n3] = (0, g.useState)(!1),
        [n4, n5] = (0, g.useState)(null),
        [n6, n7] = (0, g.useState)(null)
      t8[41] === Symbol.for("react.memo_cache_sentinel") ? ((et = []), (t8[41] = et)) : (et = t8[41])
      let [n8, oe] = (0, g.useState)(et)
      t8[42] === Symbol.for("react.memo_cache_sentinel") ? ((ea = {}), (t8[42] = ea)) : (ea = t8[42])
      let [ot, oa] = (0, g.useState)(ea),
        [oi, on] = (0, g.useState)(0),
        [oo, ol] = (0, g.useState)(null),
        [os, oc] = (0, g.useState)(rt),
        [ou, ow] = (0, g.useState)(re)
      t8[43] !== aO || t8[44] !== a3 || t8[45] !== aw || t8[46] !== ab
        ? ((ei = () => {
            var e, t
            return aO && !a3
              ? ((e = aw),
                (t = ab),
                (0, q._I)(e, t) || (0, ai.TB)(oO, []).includes(e.id)
                  ? null
                  : { avatarId: e.id, petName: e.displayName, startedAtMs: Date.now() })
              : null
          }),
          (t8[43] = aO),
          (t8[44] = a3),
          (t8[45] = aw),
          (t8[46] = ab),
          (t8[47] = ei))
        : (ei = t8[47])
      let [oI] = (0, g.useState)(ei),
        oS =
          null == oI
            ? null
            : (function ({ intl: e, petName: t, startedAtMs: a }) {
                return {
                  action: null,
                  body: e.formatMessage({
                    id: "avatarOverlay.firstAwake.body",
                    defaultMessage: "I'm here to help keep your ChatGPT sessions moving",
                    description: "Body of the temporary greeting shown when the floating Codex pet is first opened",
                  }),
                  controlTarget: null,
                  expiresAtMs: a + 8e3,
                  id: "first-awake",
                  isLoading: !1,
                  kind: "first-awake",
                  level: "info",
                  localConversationId: null,
                  notificationPreferenceId: null,
                  source: "local",
                  title: e.formatMessage(
                    {
                      id: "avatarOverlay.firstAwake.title",
                      defaultMessage: "Hi, I'm {petName}",
                      description: "Title of the temporary greeting shown when the floating Codex pet is first opened",
                    },
                    { petName: t },
                  ),
                  turnKey: null,
                  updatedAtMs: a,
                  waitingRequest: null,
                }
              })({ intl: iV, petName: oI.petName, startedAtMs: oI.startedAtMs }),
        oE = (function ({ activities: e, intl: t, nowMs: a = Date.now(), realtimeThreadId: i }) {
          return e.flatMap((e) => {
            var n
            if (null == i || e.realtimeThread.conversationId !== i || a >= tb(e)) return []
            let o = (function (e, t) {
              switch (e.kind) {
                case "thread-created":
                  return {
                    body:
                      e.prompt ??
                      t.formatMessage({
                        id: "realtimeVoice.taskCreated.body",
                        defaultMessage: "Working on delegated request",
                        description: "Body shown when realtime voice delegates work to another Codex task",
                      }),
                    title:
                      null == e.taskTitle
                        ? t.formatMessage({
                            id: "realtimeVoice.taskCreated.title",
                            defaultMessage: "Created chat",
                            description: "Title shown when realtime voice creates another Codex chat",
                          })
                        : t.formatMessage(
                            {
                              id: "realtimeVoice.taskCreatedWithTitle.title",
                              defaultMessage: "Created chat: {title}",
                              description: "Title shown when realtime voice creates a named Codex chat",
                            },
                            { title: e.taskTitle },
                          ),
                  }
                case "thread-message": {
                  let a
                  return (
                    (a =
                      "from-task" === e.direction
                        ? "completed" === e.taskStatus
                          ? null == e.taskTitle
                            ? t.formatMessage({
                                id: "realtimeVoice.taskReturned.title",
                                defaultMessage: "Task returned",
                                description: "Title shown when another Codex task finishes work for realtime voice",
                              })
                            : t.formatMessage(
                                {
                                  id: "realtimeVoice.taskReturnedWithTitle.title",
                                  defaultMessage: "Returned from {title}",
                                  description: "Title shown when a named Codex task finishes work for realtime voice",
                                },
                                { title: e.taskTitle },
                              )
                          : null == e.taskTitle
                            ? t.formatMessage({
                                id: "realtimeVoice.taskUpdate.title",
                                defaultMessage: "Task update",
                                description:
                                  "Title shown when another Codex task sends a progress update to realtime voice",
                              })
                            : t.formatMessage(
                                {
                                  id: "realtimeVoice.taskUpdateWithTitle.title",
                                  defaultMessage: "Update from {title}",
                                  description:
                                    "Title shown when a named Codex task sends a progress update to realtime voice",
                                },
                                { title: e.taskTitle },
                              )
                        : null == e.taskTitle
                          ? t.formatMessage({
                              id: "realtimeVoice.taskMessageSent.title",
                              defaultMessage: "Message sent",
                              description: "Title shown when realtime voice sends another Codex task a message",
                            })
                          : t.formatMessage(
                              {
                                id: "realtimeVoice.taskMessageSentWithTitle.title",
                                defaultMessage: "Sent to {title}",
                                description: "Title shown when realtime voice sends a named Codex task a message",
                              },
                              { title: e.taskTitle },
                            )),
                    {
                      body:
                        e.message ??
                        (function (e, t) {
                          switch (e.taskStatus) {
                            case "pending":
                            case "running":
                              return t.formatMessage({
                                id: "realtimeVoice.taskUpdate.running",
                                defaultMessage: "Task is still working",
                                description: "Fallback body for a running delegated task update",
                              })
                            case "completed":
                              return t.formatMessage({
                                id: "realtimeVoice.taskUpdate.completed",
                                defaultMessage: "Task finished",
                                description: "Fallback body for a completed delegated task update",
                              })
                            case "interrupted":
                              return t.formatMessage({
                                id: "realtimeVoice.taskUpdate.interrupted",
                                defaultMessage: "Task was interrupted",
                                description: "Fallback body for an interrupted delegated task update",
                              })
                            case "failed":
                              return t.formatMessage({
                                id: "realtimeVoice.taskUpdate.failed",
                                defaultMessage: "Task failed",
                                description: "Fallback body for a failed delegated task update",
                              })
                            case "stopped":
                              return t.formatMessage({
                                id: "realtimeVoice.taskUpdate.stopped",
                                defaultMessage: "Task stopped",
                                description: "Fallback body for a stopped delegated task update",
                              })
                            case "not-found":
                              return t.formatMessage({
                                id: "realtimeVoice.taskUpdate.notFound",
                                defaultMessage: "Chat is no longer available",
                                description: "Fallback body for a missing delegated chat update",
                              })
                            case null:
                              return t.formatMessage({
                                id: "realtimeVoice.taskUpdate.generic",
                                defaultMessage: "Task sent an update",
                                description: "Fallback body for a delegated task update",
                              })
                          }
                        })(e, t),
                      title: a,
                    }
                  )
                }
              }
            })(e, t)
            return [
              {
                action: { path: (0, d._RT)(e.task.threadId) },
                body: o.body,
                controlTarget:
                  null == e.task.pendingWorktreeId
                    ? { type: "app-server-conversation", conversationId: e.task.threadId }
                    : null,
                expiresAtMs: tb(e),
                id: e.id,
                isLoading: !1,
                kind: "multi-agent",
                level:
                  "thread-created" === (n = e).kind || "to-task" === n.direction
                    ? "info"
                    : "failed" === n.taskStatus || "not-found" === n.taskStatus
                      ? "danger"
                      : "completed" === n.taskStatus
                        ? "success"
                        : "info",
                localConversationId: null == e.task.pendingWorktreeId ? e.task.threadId : null,
                notificationPreferenceId:
                  null == e.task.pendingWorktreeId ? (0, ty.z)(e.task.threadId, e.task.hostId) : null,
                source: e.task.hostId === tw.fI ? "local" : "remote-host",
                title: o.title,
                turnKey: e.id,
                updatedAtMs: e.occurredAtMs,
                usesLiveConversationState: !1,
                waitingRequest: null,
              },
            ]
          })
        })({ activities: iz.activities, intl: iV, nowMs: ou, realtimeThreadId: ih.conversationId }),
        o_ =
          ay?.statusText ??
          (is && iR && null != iI
            ? (function ({ intl: e, resolvedApps: t, status: a }) {
                if (null == a) return null
                let i = (0, tC.i)({ intl: e, resolvedApps: t, status: a })
                if (null == i) return null
                let { additionalToolsLabel: n, label: o } = i
                return null == n ? o : `${o} \xb7 ${n}`
              })({ intl: iV, resolvedApps: iB, status: ij })
            : null),
        oT = (function (e, t, a) {
          let i = null
          for (let n of t) {
            let t = null == n.localConversationId ? void 0 : a.get(n.localConversationId)
            null != t &&
              null != n.turnKey &&
              (i ?? e).has(t) &&
              null == (i ?? e).get(t) &&
              (null == i && (i = new Map(e)), i.set(t, n.turnKey))
          }
          return i ?? e
        })(os, aC, nH)
      oT !== os && oc(oT)
      let oq = (null != iq && "" !== iq.trim()) || (a4 && null != o_ && "" !== o_.trim()),
        oj = (function ({
          clientThreadIdsByConversationId: e,
          dismissedNotificationTurnKeys: t,
          extraNotifications: a = [],
          latestActivityFirst: i = !1,
          mutedNotificationPreferenceIds: n,
          nowMs: o = Date.now(),
          sessions: r,
        }) {
          let l = new Map(
            a
              .flatMap((e) =>
                (null != e.expiresAtMs && o >= e.expiresAtMs) ||
                (null != e.notificationPreferenceId && n.includes(e.notificationPreferenceId)) ||
                t?.get(e.id) === e.turnKey
                  ? []
                  : [
                      {
                        expiresAtMs: e.expiresAtMs,
                        key: e.id,
                        notification: e,
                        notificationPriority:
                          i && "session" === e.kind
                            ? nn("running")
                            : (function (e) {
                                switch (e) {
                                  case "activity":
                                    return -2
                                  case "attention":
                                    return -1
                                  case "first-awake":
                                  case "multi-agent":
                                  case "session":
                                    return 4
                                }
                              })(e.kind),
                        sortAtMs: e.updatedAtMs,
                        updatedAtMs: e.updatedAtMs,
                      },
                    ],
              )
              .map((e) => [e.notification.id, e]),
          )
          for (let a of r) {
            let r = null == a.localConversationId ? void 0 : e?.get(a.localConversationId)
            if (
              (null != r && ("idle" !== a.status || null != a.turnKey || n.includes(a.key)) && l.delete(r),
              n.includes(a.key))
            )
              continue
            let s = (function (e, t) {
              if ("idle" === e.status || !e.showInNotificationTray) return null
              let a = (function (e, t) {
                switch (e) {
                  case "running":
                  case "idle":
                    return null
                  case "failed":
                    return t + 36e5
                  case "waiting":
                    return t + 864e5
                  case "review":
                    return t + 6048e5
                }
              })(e.status, e.updatedAtMs)
              return null != a && t >= a
                ? null
                : {
                    expiresAtMs: a,
                    key: e.key,
                    notification: {
                      action: { path: e.actionPath },
                      body: e.subtitle,
                      controlTarget: e.controlTarget,
                      expiresAtMs: a,
                      id: e.key,
                      isLoading: "running" === e.status,
                      kind: "session",
                      level: (function (e) {
                        switch (e) {
                          case "waiting":
                            return "warning"
                          case "failed":
                            return "danger"
                          case "running":
                          case "idle":
                            return "info"
                          case "review":
                            return "success"
                        }
                      })(e.status),
                      localConversationId: e.localConversationId,
                      notificationPreferenceId: e.key,
                      source: e.source,
                      title: (function (e) {
                        var t, a
                        return "waiting" !== e.status || null == e.waitingRequest
                          ? e.title
                          : ((t = e.title),
                            (a = e.waitingRequest),
                            `${a.title} ${a.notificationTitleSeparator ?? "·"} ${t}`)
                      })(e),
                      turnKey: e.turnKey,
                      updatedAtMs: e.updatedAtMs,
                      waitingRequest: "waiting" === e.status ? e.waitingRequest : null,
                    },
                    notificationPriority: nn(e.status),
                    sortAtMs: e.sortAtMs,
                    updatedAtMs: e.updatedAtMs,
                  }
            })(a, o)
            null != s &&
              (i && (s.notificationPriority = nn("running")),
              (s.notification.id = r ?? s.notification.id),
              t?.get(s.notification.id) !== s.notification.turnKey && l.set(s.notification.id, s))
          }
          let s = [...l.values()]
          return {
            nextNotificationExpiresAtMs: s.reduce(
              (e, t) => (null == t.expiresAtMs || (null != e && e <= t.expiresAtMs) ? e : t.expiresAtMs),
              null,
            ),
            notifications: s
              .sort((e, t) =>
                (function (e, t, a) {
                  let i = e.notificationPriority - t.notificationPriority
                  if (0 !== i) return i
                  if (a) {
                    let a = t.sortAtMs - e.sortAtMs
                    if (0 !== a) return a
                  }
                  if (!a) {
                    let a = t.updatedAtMs - e.updatedAtMs
                    if (0 !== a) return a
                  }
                  return e.key.localeCompare(t.key)
                })(e, t, i),
              )
              .map((e) => e.notification),
          }
        })({
          clientThreadIdsByConversationId: nH,
          dismissedNotificationTurnKeys: oT,
          extraNotifications: iR
            ? oE
            : iL
              ? []
              : [
                  ...(null == oS ? [] : [oS]),
                  ...nj.map((e) => ({
                    action: null,
                    body: iV.formatMessage({
                      id: "avatarOverlay.quickChat.startingTask",
                      defaultMessage: "Starting your chat",
                      description: "Activity pill subtitle while a chat submitted from Quick Chat is being created",
                    }),
                    controlTarget: null,
                    expiresAtMs: null,
                    id: e.clientThreadId,
                    isLoading: !0,
                    kind: "session",
                    level: "info",
                    localConversationId: null,
                    notificationPreferenceId: null,
                    source: "local",
                    title: e.thread.title,
                    turnKey: null,
                    updatedAtMs: e.startedAtMs,
                    usesLiveConversationState: !1,
                    waitingRequest: null,
                  })),
                ],
          latestActivityFirst: !0,
          mutedNotificationPreferenceIds: a8,
          nowMs: ou,
          sessions: iL ? [] : aC,
        }),
        oD = il ? oj.notifications.filter(o9).map(no) : [],
        [oU, oH] = (0, g.useState)(!1),
        [oB, oV] = (0, g.useState)(o8),
        oz = oB
      if (il !== oU || oD.length !== oz.size || oD.some((e) => !oz.has(e))) {
        let e
        ;(t8[48] !== oB || t8[49] !== oU
          ? ((e = (e) => [e, oB.has(e) || !oU ? (oB.get(e) ?? null) : 0]), (t8[48] = oB), (t8[49] = oU), (t8[50] = e))
          : (e = t8[50]),
          (oz = new Map(oD.map(e))),
          oH(il),
          oV(oz))
      }
      let oY = (0, g.useRef)(new Map())
      ;((0, g.useEffect)(() => {
        let e = oY.current
        for (let [t, a] of e) (oz.get(t) === a.revision && a5) || (window.clearTimeout(a.timeoutId), e.delete(t))
        if (a5)
          for (let [t, a] of oz) {
            if (null == a || e.has(t)) continue
            let i = window.setTimeout(() => {
              oV((e) => (e.get(t) === a ? new Map(e).set(t, null) : e))
            }, 5e3)
            e.set(t, { revision: a, timeoutId: i })
          }
      }, [a5, oz]),
        t8[51] === Symbol.for("react.memo_cache_sentinel") ? ((en = []), (t8[51] = en)) : (en = t8[51]),
        (0, g.useEffect)(() => {
          let e = oY.current
          return () => {
            for (let { timeoutId: t } of e.values()) window.clearTimeout(t)
            e.clear()
          }
        }, en))
      let oW = oj.nextNotificationExpiresAtMs,
        oX = il ? oj.notifications.filter((e) => null != oz.get(no(e))) : oj.notifications,
        rr = a4 || (ip && (ih.canStart || null != ih.startError || iR || oX.length > 0)),
        rl =
          nD.resetRevision === aq && iK
            ? nD.flights.filter((e) =>
                oX.some((t) => {
                  let { id: a } = t
                  return a === e.notificationId
                }),
              )
            : []
      ;((nD.resetRevision !== aq || rl.length !== nD.flights.length) && nU({ resetRevision: aq, flights: rl }),
        t8[52] !== nH || t8[53] !== a8 || t8[54] !== aC
          ? ((eo = (e) =>
              !aC.some(
                (t) =>
                  null != t.localConversationId &&
                  nH.get(t.localConversationId) === e.clientThreadId &&
                  ("idle" !== t.status || null != t.turnKey || a8.includes(t.key)),
              )),
            (t8[52] = nH),
            (t8[53] = a8),
            (t8[54] = aC),
            (t8[55] = eo))
          : (eo = t8[55]))
      let rs = nj.filter(eo)
      ;(nF.resetRevision !== aq || rs.length !== nj.length) &&
        (tZ.v.debug("Quick Chat pending tasks reconciled", {
          safe: { retiredCount: nj.length - rs.length, remainingCount: rs.length },
        }),
        nq({ resetRevision: aq, starts: rs }))
      let rc = oX.map((e) => ({
        copy: aV({
          completedTurnSummary: a6.get(e.notificationPreferenceId ?? e.id),
          intl: iV,
          latestTurnItems:
            "local" === e.source && !1 !== e.usesLiveConversationState ? al(e.localConversationId) : void 0,
          notification: e,
          notificationCount: oX.length,
          threadDetailLevel: aj,
        }),
        notification: e,
      }))
      t8[56] !== iV || t8[57] !== n6
        ? ((er = (e) => {
            let { copy: t, notification: a } = e
            return {
              copy:
                n6?.notificationId === a.id && n6.replacedSubtitle === t.subtitle
                  ? {
                      ...t,
                      subtitle: iV.formatMessage({
                        id: "avatarOverlay.steering",
                        defaultMessage: "Steering",
                        description:
                          "Temporary activity subtitle shown after a reply steers a running task from the floating avatar overlay",
                      }),
                    }
                  : t,
              notification: a,
            }
          }),
          (t8[56] = iV),
          (t8[57] = n6),
          (t8[58] = er))
        : (er = t8[58])
      let ru = rc.map(er),
        rd = oX
          .map((e) =>
            [
              e.id,
              e.title,
              e.body ?? "",
              e.level,
              e.isLoading ? "loading" : "done",
              e.action?.path ?? "",
              null == e.waitingRequest ? "" : ak(e.waitingRequest, iV),
            ].join("\x01"),
          )
          .join("\0")
      t8[59] !== ot
        ? ((es = (e) => {
            let { id: t } = e
            return { height: ot[t] ?? d.YMX, id: t }
          }),
          (t8[59] = ot),
          (t8[60] = es))
        : (es = t8[60])
      let rp = oX.map(es),
        rm = (0, d.jNq)({
          expanded: i0,
          items: rp,
          scrollOffset: oi,
          sideSpacingPx: 16,
          viewportRect: { height: iW, left: 0, top: 0, width: d.pFD },
        }),
        rf = aC.some(o7),
        rh = aC.some(o6),
        rg = ap && (a4 || i3)
      ;(!1 !== t8[61] || t8[62] !== aD
        ? ((ec = () => {}), (ed = [!1, aD]), (t8[61] = !1), (t8[62] = aD), (t8[63] = ec), (t8[64] = ed))
        : ((ec = t8[63]), (ed = t8[64])),
        (0, g.useEffect)(ec, ed))
      let rv = a4 && iR && "starting" === iy,
        ry =
          (ir && null != ia && ii !== ia) ||
          null != aJ ||
          iQ?.quickChatExpanded === !0 ||
          null != ih.startError ||
          null != nB ||
          n2 ||
          ((!il || !nz) && (nu.length > 0 || nh || nt.length > 0 || null != ni)),
        rw = ir && ry,
        rb = null != a0 && ry && !n2 && !iR,
        rC = (0, u.Ul)(Z.Wf),
        rx =
          (iR && !a3) ||
          null != ih.startError ||
          (!a3 && (i5 || i8 || null != oo)) ||
          ry ||
          (!a3 && (rC || (iJ && rp.length > 0) || (!a4 && rg))),
        [rA, rM] = (0, g.useState)(rx)
      ;(rx && !rA && rM(!0),
        t8[65] !== rx || t8[66] !== rv || t8[67] !== ne.compactDismissDelayMs
          ? ((ep = () => {
              if (rx || rv) return
              let e = window.setTimeout(() => {
                rM(!1)
              }, ne.compactDismissDelayMs)
              return () => window.clearTimeout(e)
            }),
            (em = [rx, rv, ne.compactDismissDelayMs]),
            (t8[65] = rx),
            (t8[66] = rv),
            (t8[67] = ne.compactDismissDelayMs),
            (t8[68] = ep),
            (t8[69] = em))
          : ((ep = t8[68]), (em = t8[69])),
        (0, g.useEffect)(ep, em))
      let rI = rx || rA,
        rS = (e, t) => {
          let a
          ;(e !== o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_CLICK || null == nK.current) &&
            ((void 0 !== t && t) || !1 === ik
              ? (a = o.CodexMiniVisibility.CODEX_MINI_VISIBILITY_HIDDEN)
              : null != ik &&
                (a = rI
                  ? iK && oX.length > 0
                    ? o.CodexMiniVisibility.CODEX_MINI_VISIBILITY_EXPANDED_WITH_ACTIVITY_PILLS
                    : o.CodexMiniVisibility.CODEX_MINI_VISIBILITY_EXPANDED
                  : o.CodexMiniVisibility.CODEX_MINI_VISIBILITY_COLLAPSED),
            (nK.current = { openMethod: e, initialVisibility: a }))
        },
        rE = (0, g.useRef)(null),
        rR = (0, g.useRef)(null),
        r_ = tX.appServices.avatarOverlay,
        rT = ok && null == ae && null != r_,
        rk = (0, g.useRef)(null),
        rO = (0, g.useRef)(null),
        rP = (0, g.useRef)(null),
        rN = (0, g.useRef)(null),
        rL = (0, g.useRef)(!1),
        rF = (0, g.useRef)(!1),
        rq = (e, t, a, i) => {
          let n = void 0 === i ? i0 : i
          ad.logProductEvent(
            o.CodexAvatarOverlayEvent,
            (0, F.y)({
              action: e,
              hasRunningCloudSession: rh,
              hasRunningLocalSession: rf,
              isNotificationTrayOpen: n,
              isPetVisible: a1,
              isVisible: ik ?? void 0,
              notification: a,
              notificationCount: oX.length,
              selectedAvatar: aw,
              source: t,
            }),
          )
        },
        rj = (0, g.useEffectEvent)((e) => {
          rq(e, o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED)
        })
      ;(t8[70] !== oI
        ? ((ef = () => {
            if (null == oI) return
            let e = (0, ai.TB)(oO, [])
            e.includes(oI.avatarId) || (0, ai.jx)(oO, [...e, oI.avatarId])
          }),
          (eh = [oI]),
          (t8[70] = oI),
          (t8[71] = ef),
          (t8[72] = eh))
        : ((ef = t8[71]), (eh = t8[72])),
        (0, g.useEffect)(ef, eh),
        t8[73] !== ik || t8[74] !== ad || t8[75] !== rj
          ? ((eg = () => {
              ad === tv.Cg ||
                null == ik ||
                (rL.current || ((rL.current = !0), rj(o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_OPENED)),
                ik &&
                  !rF.current &&
                  ((rF.current = !0), rj(o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_PRESENTED)))
            }),
            (t8[73] = ik),
            (t8[74] = ad),
            (t8[75] = rj),
            (t8[76] = eg))
          : (eg = t8[76]),
        t8[77] !== ik || t8[78] !== ad ? ((ev = [ik, ad]), (t8[77] = ik), (t8[78] = ad), (t8[79] = ev)) : (ev = t8[79]),
        (0, g.useEffect)(eg, ev),
        t8[80] === Symbol.for("react.memo_cache_sentinel")
          ? ((ey = {
              interactiveRegionRef: rR,
              isPaused: () => null != rE.current,
              onInteractiveChange: o5,
              floatingElementSelectors: oF,
            }),
            (t8[80] = ey))
          : (ey = t8[80]),
        (0, G.Q)(ey),
        t8[81] !== r_ || t8[82] !== ne
          ? ((ew = () => {
              var e
              if (null == r_) return
              let t =
                  null == (e = rR.current)
                    ? []
                    : ox(e).flatMap((e) => {
                        if (!oA(e)) return []
                        let t = od(e)
                        return null == t ? [] : [t]
                      }),
                a = (function (e, t) {
                  let a = e?.querySelector('[data-avatar-overlay-hit-region="mascot"]')
                  if (null == e || null == a) return []
                  let i = a.getBoundingClientRect(),
                    n = a.offsetWidth ? i.width / a.offsetWidth : 1,
                    o = a.offsetHeight ? i.height / a.offsetHeight : 1,
                    r = Array.from(e.querySelectorAll(oy)).filter((e) => {
                      if (!oA(e)) return !1
                      let t = 1
                      for (let a = e; null != a; a = a.parentElement)
                        t *= Number(window.getComputedStyle(a).opacity || 1)
                      return t > 0.01
                    }),
                    l = r.some((e) => "mascot-badge" === e.dataset.avatarOverlayNativeSurfaceId),
                    s = e.querySelector('[data-avatar-overlay-proximity-region="quick-chat"]')
                  return null != s
                    ? [s, ...r.filter((e) => e.dataset.avatarOverlayNativeSurfaceId?.startsWith("activity-"))].flatMap(
                        (e) => {
                          let t = od(e)
                          return null == t ? [] : [t]
                        },
                      )
                    : r.flatMap((e) => {
                        let a = e.dataset.avatarOverlayNativeSurfaceId
                        if (a?.startsWith("activity-")) {
                          let t = od(e)
                          return null == t ? [] : [t]
                        }
                        if (
                          "mascot-badge" !== a &&
                          "voice-controls" !== a &&
                          "voice-microphone" !== a &&
                          "voice-output" !== a
                        )
                          return []
                        let r = (0, ib.PO)(t),
                          s = Math.round(t.compactOffsetX) - r / 2,
                          c = Math.round(i.height / o + t.compactOffsetY),
                          u = (0, ib.oO)({
                            controlGap: t.hoverControlGap,
                            controlSize: t.hoverControlSize,
                            mascot: { left: 0, top: 0, width: i.width / n, height: i.height / o },
                            offsetX: t.hoverOffsetX,
                            offsetY: t.hoverOffsetY,
                            showsNotificationBadge: l,
                            surfaceId: a,
                          }),
                          d = Math.min(s, u.x - t.hoverControlSize / 2),
                          p = Math.min(c, u.y)
                        return [
                          {
                            left: i.left + i.width / 2 + d * n,
                            top: i.top + p * o,
                            width: (Math.max(s + r, u.x + t.hoverControlSize / 2) - d) * n,
                            height: (Math.max(c + t.compactControlHeight, u.y + t.hoverControlSize) - p) * o,
                          },
                        ]
                      })
                })(rR.current, ne)
              ;(l()(rO.current, t) && l()(rP.current, a)) ||
                ((rO.current = t), (rP.current = a), r_.setPointerRegions(t, a))
            }),
            (t8[81] = r_),
            (t8[82] = ne),
            (t8[83] = ew))
          : (ew = t8[83]))
      let rD = ew
      t8[84] !== rD
        ? ((eb = () => {
            null == rN.current &&
              (rN.current = window.requestAnimationFrame(() => {
                ;((rN.current = null), rD())
              }))
          }),
          (t8[84] = rD),
          (t8[85] = eb))
        : (eb = t8[85])
      let rU = eb
      t8[86] !== ot
        ? ((eC = () => {
            let e = {}
            for (let t of rR.current?.querySelectorAll('[data-avatar-overlay-native-surface-id^="activity-"]') ?? []) {
              let a = t.dataset.avatarOverlayNativeSurfaceId?.slice(9),
                i = t.querySelector("[data-avatar-overlay-activity-content]"),
                n = null == i ? t.offsetHeight : i.offsetHeight + t.offsetHeight - t.clientHeight
              null == a || n <= 0 || ot[a] === n || (e[a] = n)
            }
            0 !== Object.keys(e).length &&
              (tZ.v.debug("Avatar overlay activity target heights changed", {
                safe: { changedCount: Object.keys(e).length, maximumHeightPx: Math.max(...Object.values(e)) },
              }),
              oa((t) => ({ ...t, ...e })))
          }),
          (t8[86] = ot),
          (t8[87] = eC))
        : (eC = t8[87])
      let rH = (0, g.useEffectEvent)(eC),
        rB = () => {
          var e, t, a, i
          let n = (function (e, { includeInertSurfaces: t = !1 } = {}) {
            if (null == e) return null
            let a = (function (e) {
                if (null == e || oM(e)) return null
                let t = e.getBoundingClientRect()
                return t.width <= 0 || t.height <= 0 ? null : { width: Math.ceil(t.width), height: Math.ceil(t.height) }
              })(e.querySelector(op)),
              i = (function (e, t) {
                if (null == e || oM(e)) return null
                let a = e.getBoundingClientRect()
                if (a.width <= 0 || a.height <= 0) return null
                let i = e.querySelector(ov),
                  n = i?.getBoundingClientRect(),
                  o = null != i && i.querySelectorAll(oy).length > 1,
                  r = Array.from(e.querySelectorAll(oy))
                    .filter((e) => (t || null == e.closest("[inert]")) && !oM(e))
                    .map((e) =>
                      o && null != n && n.width > 0 && null != e.closest(og) ? n : e.getBoundingClientRect(),
                    ),
                  l = Math.ceil(
                    Math.max(
                      e.offsetWidth > 0 ? e.offsetWidth : a.width,
                      Math.max(a.right, ...r.map((e) => e.right)) - Math.min(a.left, ...r.map((e) => e.left)),
                    ),
                  ),
                  s = e.querySelector(of),
                  c = e.querySelector(oh)
                if (null == s || null == c) return { height: Math.ceil(a.height), width: l }
                let u = c.getBoundingClientRect(),
                  d = c.scrollHeight
                if (null != i) {
                  let e = Array.from(c.children).filter((e) => e instanceof HTMLElement && !oM(e)),
                    t = Number.parseFloat(window.getComputedStyle(c).rowGap) || 0
                  d = e.reduce((e, t) => e + t.offsetHeight, 0) + Math.max(0, e.length - 1) * t
                }
                return (
                  (d = Math.max(d, null == n ? 0 : n.bottom - u.top)),
                  { height: Math.ceil(s.getBoundingClientRect().height + d), width: l }
                )
              })(e.querySelector(om), t)
            return null == a ? null : { mascot: a, tray: i }
          })(rR.current)
          if (null == n) return
          let o = oq ? (rR.current?.querySelector('[data-avatar-overlay-size="realtime-caption"]') ?? null) : null,
            r = o?.querySelector('[data-avatar-overlay-native-surface-id="realtime-caption"]'),
            s = null == o || null == r ? null : o.getBoundingClientRect().bottom - r.offsetHeight,
            c = rR.current?.querySelector("[data-avatar-overlay-size='mascot']")?.getBoundingClientRect().top,
            u = {
              ...n,
              tray: rb ? { width: d.pFD, height: Math.ceil(iW) } : n.tray,
              isGlobalRealtimeVoiceTransitioning: iv,
              isQuickChatLoading: aN,
              petControlsAppearance: ne,
              presentation: a3 ? "quick-chat" : void 0,
              quickChat: a4
                ? {
                    hasNotifications: oX.length > 0 || rb,
                    hasOrbPicker: a9,
                    isActivityVisible: rb || (iJ && oX.length > 0),
                  }
                : void 0,
              quickChatFocusRequestId: n0?.requestId,
              realtimeCaptionAboveMascotPx: null == s || null == c ? 0 : Math.max(0, Math.ceil(c - s)),
              showsPetControls: rr && !a3,
            }
          ;((e = rk.current),
            (t = u),
            (null != e &&
              e.isGlobalRealtimeVoiceTransitioning === t.isGlobalRealtimeVoiceTransitioning &&
              e.isQuickChatLoading === t.isQuickChatLoading &&
              l()(e.petControlsAppearance, t.petControlsAppearance) &&
              e.presentation === t.presentation &&
              l()(e.quickChat, t.quickChat) &&
              e.quickChatFocusRequestId === t.quickChatFocusRequestId &&
              e.realtimeCaptionAboveMascotPx === t.realtimeCaptionAboveMascotPx &&
              e.showsPetControls === t.showsPetControls &&
              e.mascot.width === t.mascot.width &&
              e.mascot.height === t.mascot.height &&
              ((a = e.tray),
              a === (i = t.tray) || (null != a && null != i && a.width === i.width && a.height === i.height))) ||
              ((rk.current = u),
              tZ.v.debug("Avatar overlay control layout changed", {
                safe: {
                  usesQuickChatBar: a4,
                  requestedPetVisible: aP,
                  isPetVisible: a1,
                  hasSelectedOrbit: null != aQ,
                  hasPetAccessory: a4 && !a3,
                  mascotWidth: n.mascot.width,
                  mascotHeight: n.mascot.height,
                },
              }),
              K.O1.dispatchMessage("avatar-overlay-element-size-changed", {
                isGlobalRealtimeVoiceTransitioning: iv,
                isQuickChatLoading: aN,
                mascot: n.mascot,
                petControlsAppearance: ne,
                presentation: u.presentation,
                quickChat: u.quickChat,
                quickChatFocusRequestId: u.quickChatFocusRequestId,
                realtimeCaptionAboveMascotPx: u.realtimeCaptionAboveMascotPx,
                showsPetControls: u.showsPetControls,
                tray: u.tray,
              })))
        },
        rV = (0, g.useEffectEvent)(rB),
        rz = (e, t) => {
          var a, i, n, r
          let l,
            s = rE.current
          if (null == s || s.pointerId !== e.pointerId) return
          ;((rE.current = null), ol(null))
          let c = null
          ;(e.currentTarget instanceof HTMLElement
            ? (c = e.currentTarget)
            : e.target instanceof HTMLElement && (c = e.target),
            c?.hasPointerCapture?.(e.pointerId) && c.releasePointerCapture?.(e.pointerId))
          let {
            hasMoved: u,
            releaseSample: d,
            velocity: p,
          } = ((a = t ? aW(e) : void 0),
          (i = !t && s.usesOrbPhysics),
          {
            hasMoved: null == (l = a ?? (i ? s.samples.at(-1) : void 0)) ? s.hasMoved : aX(s, l),
            releaseSample: l,
            velocity:
              null != l && aX((n = s), (r = l))
                ? (function (e) {
                    let t = (function (e) {
                      let t = e.at(-1)
                      if (null == t) return
                      let a = e.length - 1
                      for (; a > 0;) {
                        let i = e[a - 1]
                        if (null == i || Math.abs(t.screenX - i.screenX) >= 4 || Math.abs(t.screenY - i.screenY) >= 4)
                          break
                        a -= 1
                      }
                      return e[a]
                    })(e)
                    if (null == t) return null
                    let a = e.find((e) => t.timeMs - e.timeMs > 0)
                    if (null == a) return null
                    let i = Math.max(t.timeMs - a.timeMs, 8) / 1e3,
                      n = { x: (t.screenX - a.screenX) / i, y: (t.screenY - a.screenY) / i },
                      o = Math.hypot(n.x, n.y)
                    if (o < 320) return null
                    if (o <= 1600) return n
                    let r = 1600 / o
                    return { x: n.x * r, y: n.y * r }
                  })(aG([...n.samples, r]))
                : null,
          })
          ;(s.beganOnQuickChatBar &&
            tZ.v.debug("Quick Chat pointer gesture finished", {
              safe: {
                hasMoved: u,
                isPointerRelease: t,
                startedOnButton: null != s.quickChatClickTarget,
                startedOnExpandedEditor: null != s.quickChatEditorFocusTarget,
              },
            }),
            !t ||
              s.beganOnQuickChatBar ||
              u ||
              (rq(
                o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED,
                o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
              ),
              iR && null != iI ? iU?.() : aM()),
            u &&
              !s.hasMoved &&
              null != d &&
              K.O1.dispatchMessage("avatar-overlay-drag-move", {
                pointerScreenX: d.screenX,
                pointerScreenY: d.screenY,
              }))
          let m = d ?? s.samples.at(-1) ?? s
          ;(K.O1.dispatchMessage("avatar-overlay-drag-end", {
            altKey: t && !s.usesOrbPhysics && e.altKey,
            pointerScreenX: m.screenX,
            pointerScreenY: m.screenY,
          }),
            t &&
              s.beganOnQuickChatBar &&
              !u &&
              (null != s.quickChatClickTarget
                ? s.quickChatClickTarget.click()
                : null != s.quickChatEditorFocusTarget &&
                  (rS(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_CLICK),
                  r5("editor"),
                  s.quickChatEditorFocusTarget.focus())),
            s.usesOrbPhysics &&
              null != p &&
              K.O1.dispatchMessage("avatar-overlay-drag-release", {
                shouldBounce: !0,
                velocityX: 3 * p.x,
                velocityY: 3 * p.y,
              }))
        }
      t8[88] !== is || t8[89] !== iR || t8[90] !== a4
        ? ((ex = (e) => {
            if (
              0 !== e.button ||
              e.ctrlKey ||
              !(e.target instanceof Element) ||
              null != e.target.closest(".no-drag, [data-orb-message]")
            )
              return
            ;(e.preventDefault(), e.currentTarget.setPointerCapture?.(e.pointerId))
            let t = iR && !is
            ;((rE.current = {
              beganOnQuickChatBar:
                a4 &&
                null !=
                  e.target.closest(
                    '[data-quick-chat-glass-group], [data-avatar-overlay-hit-region="selected-orb"], [data-avatar-overlay-orbit-transcript]',
                  ),
              quickChatClickTarget: a4 ? e.target.closest("button") : null,
              quickChatEditorFocusTarget: a4
                ? e.target.closest('[data-avatar-overlay-composition-autofocus="true"][tabindex="0"]')
                : null,
              hasMoved: !1,
              pointerId: e.pointerId,
              samples: [aW(e)],
              screenX: e.screenX,
              screenY: e.screenY,
              usesOrbPhysics: t,
            }),
              ol(null),
              K.O1.dispatchMessage("avatar-overlay-drag-start", {
                pointerScreenX: e.screenX,
                pointerScreenY: e.screenY,
                pointerWindowX: e.clientX,
                pointerWindowY: e.clientY,
                usesOrbPhysics: t,
              }))
          }),
          (t8[88] = is),
          (t8[89] = iR),
          (t8[90] = a4),
          (t8[91] = ex))
        : (ex = t8[91])
      let rY = ex
      t8[92] === Symbol.for("react.memo_cache_sentinel")
        ? ((eA = (e) => {
            let t = rE.current
            if (null == t || t.pointerId !== e.pointerId) return
            let a = aW(e)
            t.samples = aG([...t.samples, a])
            let i = a.screenX - t.screenX,
              n = a.screenY - t.screenY
            ;((Math.abs(i) >= 4 || Math.abs(n) >= 4) &&
              ((t.hasMoved = !0),
              (t.screenX = a.screenX),
              (t.screenY = a.screenY),
              !t.usesOrbPhysics && (i >= 4 ? ol("running-right") : i <= -4 && ol("running-left"))),
              t.hasMoved &&
                K.O1.dispatchMessage("avatar-overlay-drag-move", {
                  pointerScreenX: a.screenX,
                  pointerScreenY: a.screenY,
                }))
          }),
          (t8[92] = eA))
        : (eA = t8[92])
      let rW = eA,
        rX = (e, t) => {
          ;(null != e.action &&
            (null == t || "open" === t.intent) &&
            rq(
              o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
              o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
              e,
            ),
            aR(e, t))
        }
      t8[93] !== a_
        ? ((eM = (e, t) => {
            a_(e, t)
          }),
          (t8[93] = a_),
          (t8[94] = eM))
        : (eM = t8[94])
      let rG = eM,
        r$ = (e) => {
          ;(rq(
            o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
            o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            e,
          ),
            oc((t) => {
              if (t.get(e.id) === e.turnKey) return t
              let a = new Map(t)
              return (a.set(e.id, e.turnKey), a)
            }))
        }
      t8[95] !== aD
        ? ((eI = (e) => {
            ;(0, i6.RZ)(aD, e, !1)
          }),
          (t8[95] = aD),
          (t8[96] = eI))
        : (eI = t8[96])
      let rK = eI
      t8[97] !== rK || t8[98] !== iV
        ? ((eS = (e) => {
            let t = e.notificationPreferenceId
            null != t &&
              (async function ({ intl: e, onMuteThreadNotifications: t }) {
                document.dispatchEvent(new PointerEvent("pointercancel"))
                let a = await window.electronBridge?.showContextMenu?.([
                  { id: "mute-notification-thread", label: e.formatMessage(i6.OD.muteThreadNotifications) },
                ])
                a?.id === "mute-notification-thread" && t()
              })({
                intl: iV,
                onMuteThreadNotifications: () => {
                  rK(t)
                },
              })
          }),
          (t8[97] = rK),
          (t8[98] = iV),
          (t8[99] = eS))
        : (eS = t8[99])
      let rQ = eS,
        rZ = () => {
          ;(rq(
            o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
            o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            void 0,
            !0,
          ),
            i1(!0))
        }
      t8[100] !== on
        ? ((eE = () => {
            ;(i1(!1), on(0))
          }),
          (t8[100] = on),
          (t8[101] = eE))
        : (eE = t8[101])
      let rJ = eE
      t8[102] !== rJ || t8[103] !== il || t8[104] !== aD
        ? ((eR = () => {
            ;(iZ(null), rJ(), il || ((0, ai.jx)(oP, !0), aD.set(oN, !0)))
          }),
          (t8[102] = rJ),
          (t8[103] = il),
          (t8[104] = aD),
          (t8[105] = eR))
        : (eR = t8[105])
      let r0 = eR
      t8[106] === Symbol.for("react.memo_cache_sentinel")
        ? ((e_ = (e, t) => {
            oe((a) => (t ? (a.includes(e) ? a : [...a, e]) : a.filter((t) => t !== e)))
          }),
          (t8[106] = e_))
        : (e_ = t8[106])
      let r1 = e_
      t8[107] === Symbol.for("react.memo_cache_sentinel")
        ? ((eT = (e) => {
            let t = no(e)
            oV((e) => {
              let a = e.get(t)
              return null == a ? e : new Map(e).set(t, a + 1)
            })
          }),
          (t8[107] = eT))
        : (eT = t8[107])
      let r2 = eT,
        r3 = (e) => {
          let t = oX.find((t) => {
            let { id: a } = t
            return a === e
          })
          if (null != t) {
            if (!i0 && oX.length > 1) return void rZ()
            rX(t)
          }
        },
        r4 = o4,
        r5 = (e, t) => {
          ;(nG(!1),
            null != e && n5(null),
            (null != e || t) && nW(null == e),
            null == e && t && (null != ia && io(ia), aD.set(tf.lG, null)),
            null != e || nL || (nK.current = null),
            a4 && !a$ && (nV(e), null != e && null == nB && nJ(null)),
            (null != e && a4 && null != nB && document.hasFocus()) || r4(null != e || n$.current > 0, t))
        },
        r6 = (e) => {
          null != a0 &&
            ((nl.current = nl.current + 1),
            (0, V.TG)(aD),
            (0, v.flushSync)(() => {
              ;(nr({ agentId: a0.id, resetRevision: aq, message: e }), nJ(null), r5("editor"))
            }),
            rR.current?.querySelector('[data-avatar-overlay-composition-autofocus="true"]')?.focus())
        }
      t8[108] !== nB
        ? ((ek = (e) => {
            ;(e && nG(!1),
              (n$.current = n$.current + (e ? 1 : -1)),
              r4(e || (document.hasFocus() && (n$.current > 0 || null != nB))))
          }),
          (t8[108] = nB),
          (t8[109] = ek))
        : (ek = t8[109])
      let r7 = ek,
        r8 = async (e, t, a, i) => {
          let n,
            r = i
          void 0 === r && (r = aD.get(tf.MR) ?? aD.get(J.VI))
          let l = e.trim()
          if (!ap || 0 === l.length || (0, V.ov)(aD, nw)) return
          let s = aD.get(V.$X)
          if ((0, V.lR)(aD, { promptRawOverride: l })) {
            s || nA({ origin: t, selectedOrbit: r, reply: a })
            return
          }
          let c = r ?? nd
          if (!nR && aD.get(H.gy).length > 0) return void n_()
          let u = (0, d.xa2)(),
            p = Date.now(),
            m =
              null == c
                ? {
                    clientThreadId: u,
                    startedAtMs: p,
                    thread: { hostId: tw.fI, prompt: l, status: "creating", title: l },
                  }
                : null,
            f = {
              prompt: l,
              turnTrigger: "avatar_quick_chat",
              addedFiles: aD.get(H.a$),
              fileAttachments: aD.get(H.PA),
              imageAttachments: aD.get(H.gy),
              appshotContexts: nu,
              ideContext: null,
            },
            g = f.addedFiles.length > 0 || f.fileAttachments.length > 0 || f.imageAttachments.length > 0,
            v = f,
            y = (0, h.Y)([...f.addedFiles, ...f.fileAttachments])
          if (null != c && (null != r || c.hostId !== tw.fI) && y.some(d.skP))
            return void aD
              .get(W.Id)
              .danger(
                iV.formatMessage({
                  id: "composer.fileAttachment.remoteFolderUnsupported",
                  defaultMessage: "Folders can only be attached to local conversations",
                  description:
                    "Toast shown when a local folder cannot be attached to a conversation running on a remote host",
                }),
                { errorAnalytics: { toastId: "composer.fileAttachment.remoteFolderUnsupported" } },
              )
          if (
            null != c &&
            c.hostId !== tw.fI &&
            ((v = { ...f, imageAttachments: f.imageAttachments.map(o3) }), y.length > 0)
          ) {
            let e = JSON.stringify([c.hostId, c.conversationId]),
              t = null == r ? void 0 : nb.current.get(e)
            if (null != t && y.length === t.localFiles.length && y.every((e, a) => e === t.localFiles[a]))
              ((n = t),
                (v = { ...v, addedFiles: [], fileAttachments: t.uploadedFiles }),
                tZ.v.info("Quick Chat file transfer reused", { safe: { attachmentCount: y.length } }))
            else {
              let t = (0, V.Mz)(aD, { hostId: c.hostId, id: nw })
              try {
                let a = await (0, x.V)(aD, c.hostId).uploadLocalFileAttachments({
                  attachments: y,
                  allowSftpUpload: (0, d.Tim)(aD.get($.f, c.hostId)),
                })
                if (!t.isPending()) return void (0, B.xm)(aD, c.hostId, a)
                ;((v = { ...v, addedFiles: [], fileAttachments: a }),
                  null != r && ((n = { key: e, localFiles: y, uploadedFiles: a }), nb.current.set(e, n)),
                  t.succeed())
              } catch (e) {
                ;(t.isPending() &&
                  aD
                    .get(W.Id)
                    .danger((0, A.c)(e, iV), {
                      errorAnalytics: { toastId: "avatarOverlay.quickChatFileAttachmentUpload" },
                    }),
                  t.fail())
                return
              }
            }
          }
          let w = {
            ...(0, F.y)({
              action: o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_QUICK_CHAT_SENT,
              source: o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_QUICK_CHAT,
              selectedAvatar: aw,
              isPetVisible: a1,
            }),
            quickChatOpenMethod: nK.current?.openMethod,
            quickChatInitialVisibility: nK.current?.initialVisibility,
            quickChatAppshotCount: nu.length,
          }
          for (let [e, a] of (tZ.v.info("Quick Chat task start submitted", {
            safe: {
              promptLength: l.length,
              attachmentCount: nu.length + f.addedFiles.length + f.fileAttachments.length + f.imageAttachments.length,
            },
            sensitive: { clientThreadId: u },
          }),
          null != m &&
            (il || iK || r0(),
            (0, t7.gI)(aD, u, m.thread),
            nq((e) => ({ resetRevision: aq, starts: [...(e.resetRevision === aq ? e.starts : []), m] }))),
          null != m &&
            null != t &&
            a4 &&
            nU((e) => ({
              resetRevision: aq,
              flights: [
                ...(e.resetRevision === aq ? e.flights : []),
                {
                  notificationId: u,
                  origin: t,
                  coveredNotificationId: oX[0]?.id ?? null,
                  coveredNotificationWasVisible: iK,
                },
              ],
            })),
          nb.current))
            a.localFiles.some((e) => !y.includes(e)) && nb.current.delete(e)
          ;(na(""), nr((e) => (e?.message === a ? null : e)))
          let b = nl.current
          nv.current = nv.current + 1
          let C = nv.current
          ;((0, H.Rh)(aD, "addedFiles", []),
            (0, H.Rh)(aD, "fileAttachments", []),
            (0, H.Rh)(aD, "imageAttachments", []),
            nJ("submission"),
            nc({ appshots: [], threadTarget: null }))
          let M = (ng.current = ng.current + 1),
            I = () => {
              if (ng.current !== M) return
              let e = aD.get(tf.MR) ?? aD.get(J.VI)
              e?.conversationId === r?.conversationId &&
                e?.hostId === r?.hostId &&
                (nl.current === b &&
                  (na((e) => (0 === e.length ? l : e)),
                  null != a && null != r && nr({ agentId: r.id, resetRevision: aq, message: a })),
                nc((e) => (0 === e.appshots.length ? { appshots: nu, threadTarget: nd } : e)),
                nv.current === C &&
                  ((0, H.Rh)(aD, "addedFiles", (e) => (0, h.Y)([...f.addedFiles, ...e])),
                  (0, H.Rh)(aD, "fileAttachments", (e) => (0, h.Y)([...f.fileAttachments, ...e])),
                  (0, H.Rh)(aD, "imageAttachments", (e) => [...f.imageAttachments, ...e])))
            }
          try {
            let e = await aT(
              l,
              u,
              nu.length > 0 ? nu : void 0,
              c,
              () => ad.logProductEvent(o.CodexAvatarOverlayEvent, w),
              g ? v : void 0,
              null != r,
              null != r ? a?.id : void 0,
              t,
            )
            ;("sent" === e && null != n && nb.current.get(n.key) === n && nb.current.delete(n.key),
              tZ.v.info("Quick Chat task start settled", {
                safe: { result: e, elapsedMs: Date.now() - p },
                sensitive: { clientThreadId: u },
              }),
              null != m && (0, t7.gI)(aD, u, null),
              "cancelled" === e && I(),
              "cancelled" === e &&
                null != m &&
                nq((e) => ({ ...e, starts: e.starts.filter((e) => e.clientThreadId !== u) })))
          } catch (t) {
            if (null != m && null == aD.get(t7.Pt, u)) return
            let e = null != m && null != aD.get(t7.Tl, u)
            if (
              (tZ.v.warning("Quick Chat task start failed", {
                safe: { hasCreatedConversation: e, elapsedMs: Date.now() - p },
                sensitive: { clientThreadId: u, error: t },
              }),
              null != m &&
                ((0, t7.gI)(aD, u, null),
                nq((e) => ({ ...e, starts: e.starts.filter((e) => e.clientThreadId !== u) }))),
              e || I(),
              !a4)
            )
              throw t
            aD.get(W.Id).danger(
              iV.formatMessage({
                id: "avatarOverlay.quickChatBarError",
                defaultMessage: "Unable to start chat",
                description: "Error shown when starting a chat from the floating Quick Chat bar fails",
              }),
              { errorAnalytics: { toastId: "avatarOverlay.quickChatBarError" } },
            )
          }
        }
      t8[110] !== r8 || t8[111] !== nI || t8[112] !== nx.origin || t8[113] !== nx.reply
        ? ((eO = (e) => r8(e, nx.origin, nx.reply, nI)),
          (t8[110] = r8),
          (t8[111] = nI),
          (t8[112] = nx.origin),
          (t8[113] = nx.reply),
          (t8[114] = eO))
        : (eO = t8[114])
      let r9 = (0, g.useEffectEvent)(eO)
      ;(t8[115] !== aD || t8[116] !== r9
        ? ((eP = () =>
            (0, V.U_)(aD, (e) => {
              if (null != e.promptRawOverride) return r9(e.promptRawOverride)
            })),
          (t8[115] = aD),
          (t8[116] = r9),
          (t8[117] = eP))
        : (eP = t8[117]),
        t8[118] !== aD ? ((eN = [aD]), (t8[118] = aD), (t8[119] = eN)) : (eN = t8[119]),
        (0, g.useEffect)(eP, eN))
      let le = (e) => {
          if (iK) {
            if (il) return void oV(new Map([...oz.keys()].map(o2)))
            if (("controls" !== nB && r5(null), !0 !== e && i0 && oX.length > 1)) {
              ;(rq(
                o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
                o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
                void 0,
                !1,
              ),
                rJ())
              return
            }
            ;(oX.length > 0 && null != aD.get(aH).tray ? iZ({ quickChatExpanded: ry }) : rJ(),
              (0, ai.jx)(oP, !1),
              aD.set(oN, !1))
          }
        },
        lt = (e, t, a) => {
          let i = void 0 === a || a,
            n = e.controlTarget
          switch (t.type) {
            case "close-follow-up":
              ;(n5(null), i && r4(!1))
              return
            case "follow-up-active-changed":
              i && r4(t.isActive || null != nB)
              return
            case "open-follow-up":
              if (null == n) return
              ;(n5({ caretPoint: null, draft: "", notificationId: e.id, submissionStatus: "idle", turnKey: e.turnKey }),
                i && r4(!0))
              return
            case "follow-up-editor-changed":
              return void n5((a) =>
                a?.notificationId === e.id && a.turnKey === e.turnKey
                  ? { ...a, caretPoint: t.caretPoint, draft: t.draft }
                  : a,
              )
            case "stop":
              if (null == n) return
              ;(n5(null),
                i && null != n4 && r4(!1),
                Promise.resolve(aE(e, t)).catch(() => {
                  aD.get(W.Id).danger(
                    iV.formatMessage({
                      id: "avatarOverlay.stopNotificationError",
                      defaultMessage: "Unable to stop activity",
                      description:
                        "Error shown when stopping a running activity from the floating avatar overlay fails",
                    }),
                    { errorAnalytics: { toastId: "avatarOverlay.stopNotificationError" } },
                  )
                }))
              return
            case "submit-follow-up": {
              let a = t.prompt.trim()
              if (null == n || 0 === a.length) return
              ;(n5((t) =>
                t?.notificationId === e.id && t.turnKey === e.turnKey ? { ...t, submissionStatus: "submitting" } : t,
              ),
                Promise.resolve(aE(e, { type: "submit-follow-up", prompt: a }))
                  .then((t) => {
                    "submitted" === t &&
                      rq(
                        o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_SUBMITTED,
                        o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
                        e,
                      )
                    let a = rc.find((t) => {
                      let { notification: a } = t
                      return a.id === e.id
                    })
                    if ("app-server-conversation" === n.type && null != a) {
                      let t = { notificationId: e.id, replacedSubtitle: a.copy.subtitle }
                      ;(n7(t),
                        window.setTimeout(() => {
                          n7((e) => (e === t ? null : e))
                        }, 3e3))
                    }
                    ;(n5((t) => (t?.notificationId === e.id && t.turnKey === e.turnKey ? null : t)), i && r4(!1))
                  })
                  .catch(() => {
                    n5((t) =>
                      t?.notificationId === e.id && t.turnKey === e.turnKey ? { ...t, submissionStatus: "error" } : t,
                    )
                  }))
              return
            }
          }
        }
      ;(t8[120] === Symbol.for("react.memo_cache_sentinel") ? ((eL = []), (t8[120] = eL)) : (eL = t8[120]),
        (0, K.JX)(
          "avatar-overlay-action",
          (e) => {
            let { action: t } = e
            switch (t.type) {
              case "cancel-quick-chat-focus":
                n0?.requestId === t.requestId &&
                  (nL || (nK.current = null),
                  (0, v.flushSync)(() => {
                    ;(n1(null), nG(!1), nV(null), aD.set(tf.lG, null))
                  }))
                return
              case "focus-quick-chat":
              case "toggle-quick-chat":
                if (a4 && !a$)
                  if ("toggle-quick-chat" === t.type && nQ)
                    (r5(null, !0), document.activeElement instanceof HTMLElement && document.activeElement.blur())
                  else {
                    if ("focus-quick-chat" === t.type && null != t.requestId) {
                      let e = t.requestId
                      if (n0?.requestId === e) {
                        ;((rk.current = null), rB())
                        return
                      }
                      ;(rS(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_SHORTCUT, t.wasHidden),
                        (0, v.flushSync)(() => {
                          ;(nG(!1),
                            n5(null),
                            n1({ requestId: e, layoutRevision: null }),
                            nJ("shortcut"),
                            nW(!1),
                            nV("editor"))
                        }))
                      return
                    }
                    ;(rS(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_SHORTCUT),
                      (0, v.flushSync)(() => {
                        ;(nJ(null), r5("editor"))
                      }),
                      rR.current?.querySelector('[data-avatar-overlay-composition-autofocus="true"]')?.focus())
                  }
                return
              case "close-notification-stack":
                ;(i1(!1), on(0))
                return
              case "open-notification-stack":
                return void i1(!0)
              case "pet-pointer-proximity-changed":
                return void i9(t.isNear)
              case "hide-activity-pills":
                return void le(t.automatic)
              case "show-activity-pills":
                return void r0()
            }
          },
          eL,
        ),
        t8[121] !== nQ || t8[122] !== a4
          ? ((eF = () => {
              a4 &&
                nQ &&
                0 === n$.current &&
                (nG(!0), rR.current?.querySelector('[data-avatar-overlay-composition-autofocus="true"]')?.focus())
            }),
            (t8[121] = nQ),
            (t8[122] = a4),
            (t8[123] = eF))
          : (eF = t8[123]),
        t8[124] === Symbol.for("react.memo_cache_sentinel") ? ((eq = []), (t8[124] = eq)) : (eq = t8[124]),
        (0, K.JX)("avatar-overlay-keyboard-interaction-ready", eF, eq),
        t8[125] !== ry || t8[126] !== a3 || t8[127] !== aD
          ? ((ej = [ry, a3, aD]), (t8[125] = ry), (t8[126] = a3), (t8[127] = aD), (t8[128] = ej))
          : (ej = t8[128]),
        (0, K.JX)(
          "appshot-shortcut",
          (e) => {
            let { target: t, threadTarget: a } = e
            if (!a4 || null == t || !aD.get(P.L)) return
            ;((0, V.td)(aD, nw), nW(!1))
            let i = Symbol(),
              n = (0, V.Mz)(aD, { hostId: a?.hostId ?? tw.fI, id: crypto.randomUUID() }),
              r = nN.current
            null == nB && rS(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_SHORTCUT)
            let l = { operation: n, allowSubmitWithoutCapture: !1 }
            ;(nP.current.set(i, l),
              (0, v.flushSync)(() => {
                nO((e) => ({
                  pendingCaptureCount: nP.current.size,
                  response: 1 === nP.current.size ? void 0 : e.response,
                  startsCollapsed: 1 === nP.current.size ? !ry : e.startsCollapsed,
                }))
              }),
              (0, O.g)(aD, {
                animationPresentationStyle: "quick_chat",
                getAnimationDestinationFrame: o1,
                getAttachmentGen: () => ng.current,
                onCaptureAnimationDuration: (e, t) => {
                  r === nN.current &&
                    ((0, v.flushSync)(() => {
                      ;(null != t && r5("editor"),
                        nO((e) => (0 === e.pendingCaptureCount || void 0 !== e.response ? e : { ...e, response: t })))
                    }),
                    null != t &&
                      rR.current?.querySelector('[data-avatar-overlay-composition-autofocus="true"]')?.focus())
                },
                onAddAppshotContext: (e) => {
                  nc((t) => ({
                    appshots: [...t.appshots, e],
                    threadTarget: 0 === t.appshots.length && null == t.threadTarget ? (a ?? null) : t.threadTarget,
                  }))
                },
                onCaptureSettled: (e, t) => {
                  if (!nP.current.delete(i)) return
                  let a = nP.current.size
                  ;((0, v.flushSync)(() => {
                    nO((e) => ({
                      pendingCaptureCount: a,
                      response: 0 === a ? void 0 : e.response,
                      startsCollapsed: 0 !== a && e.startsCollapsed,
                    }))
                  }),
                    t || l.allowSubmitWithoutCapture ? n.succeed() : n.fail())
                },
                opensMainWindowOnScreenshot: !1,
                source: "hotkey",
                target: t,
              }))
          },
          ej,
        ),
        t8[129] !== nL || t8[130] !== aH || t8[131] !== aD || t8[132] !== n1
          ? ((eD = (e) => {
              let {
                isGlobalRealtimeVoicePresentation: t,
                isVisible: a,
                layout: i,
                layoutRevision: n,
                petOpenIntent: o,
                quickChatFocusRequestId: r,
                arePresentationAccessoriesVisible: l,
              } = e
              ;(id(t),
                iO(a),
                aD.set(aH, i),
                a || (nG(!1), nL || (nK.current = null), nV(null), aD.set(tf.lG, null)),
                n1((e) =>
                  a
                    ? null == e || e.requestId !== r || null == n || e.layoutRevision === n
                      ? e
                      : { ...e, layoutRevision: n }
                    : null,
                ),
                iT(o),
                iG(l))
            }),
            (t8[129] = nL),
            (t8[130] = aH),
            (t8[131] = aD),
            (t8[132] = n1),
            (t8[133] = eD))
          : (eD = t8[133]),
        t8[134] === Symbol.for("react.memo_cache_sentinel") ? ((eU = []), (t8[134] = eU)) : (eU = t8[134]),
        (0, K.JX)("avatar-overlay-layout-changed", eD, eU),
        t8[135] !== r_ || t8[136] !== rT
          ? ((eH = () => {
              rT && r_.requestCurrentLayout().catch(o0)
            }),
            (eB = [r_, rT]),
            (t8[135] = r_),
            (t8[136] = rT),
            (t8[137] = eH),
            (t8[138] = eB))
          : ((eH = t8[137]), (eB = t8[138])),
        (0, g.useEffect)(eH, eB),
        t8[139] !== aL || t8[140] !== iY
          ? ((eV = () => {
              aL || null == iY || tX.appServices.avatarOverlay?.setQuickChatStashed(null)
            }),
            (ez = [iY, aL]),
            (t8[139] = aL),
            (t8[140] = iY),
            (t8[141] = eV),
            (t8[142] = ez))
          : ((eV = t8[141]), (ez = t8[142])),
        (0, g.useEffect)(eV, ez))
      let la = (0, g.useEffectEvent)((e, t) => {
        rz(e, t)
      })
      ;(t8[143] !== la
        ? ((eY = () => {
            let e = (e) => {
                la(e, !0)
              },
              t = (e) => {
                la(e, !1)
              }
            return (
              window.addEventListener("pointerup", e),
              window.addEventListener("pointercancel", t),
              () => {
                ;(window.removeEventListener("pointerup", e), window.removeEventListener("pointercancel", t))
              }
            )
          }),
          (t8[143] = la),
          (t8[144] = eY))
        : (eY = t8[144]),
        t8[145] === Symbol.for("react.memo_cache_sentinel") ? ((eW = []), (t8[145] = eW)) : (eW = t8[145]),
        (0, g.useEffect)(eY, eW),
        t8[146] !== r_ || t8[147] !== rH || t8[148] !== rV || t8[149] !== rD || t8[150] !== rU
          ? ((eX = () => {
              let e = null,
                t = () => {
                  null == e &&
                    (e = window.requestAnimationFrame(() => {
                      ;((e = null), rH(), rV(), rD())
                    }))
                },
                a = new ResizeObserver(t),
                i = rR.current,
                n = null
              if (null != i) {
                for (let e of (a.observe(i), Array.from(i.querySelectorAll(oC.join(", "))))) a.observe(e)
                null != r_ &&
                  (n = (function (e, t) {
                    let a = e.ownerDocument,
                      i = new ResizeObserver(t),
                      n = () => {
                        i.disconnect()
                        let t = new Set()
                        for (let a of ox(e))
                          for (let e = a; null != e && !t.has(e); e = e.parentElement) (t.add(e), i.observe(e))
                      },
                      o = new MutationObserver((e) => {
                        ;(e.some(
                          (e) =>
                            "childList" === e.type ||
                            "class" === e.attributeName ||
                            "role" === e.attributeName ||
                            e.attributeName?.startsWith("data-") === !0,
                        ) && n(),
                          t())
                      }),
                      r = () => {
                        t()
                      }
                    for (let e of (n(),
                    o.observe(a.documentElement, { attributes: !0, childList: !0, subtree: !0 }),
                    ob))
                      a.addEventListener(e, r)
                    return (
                      a.addEventListener("scroll", r, !0),
                      () => {
                        for (let e of (i.disconnect(), o.disconnect(), a.removeEventListener("scroll", r, !0), ob))
                          a.removeEventListener(e, r)
                      }
                    )
                  })(i, rU))
              }
              return (
                window.addEventListener("resize", t),
                t(),
                () => {
                  ;(null != e && window.cancelAnimationFrame(e),
                    null != rN.current && (window.cancelAnimationFrame(rN.current), (rN.current = null)),
                    a.disconnect(),
                    n?.(),
                    window.removeEventListener("resize", t))
                }
              )
            }),
            (t8[146] = r_),
            (t8[147] = rH),
            (t8[148] = rV),
            (t8[149] = rD),
            (t8[150] = rU),
            (t8[151] = eX))
          : (eX = t8[151]),
        (0, g.useLayoutEffect)(eX, [r_, oq, rb, rd, rD, rU, aw.id]),
        t8[152] !== rV || t8[153] !== rD
          ? ((eG = () => {
              ;(rV(), rD())
            }),
            (t8[152] = rV),
            (t8[153] = rD),
            (t8[154] = eG))
          : (eG = t8[154]),
        (0, g.useLayoutEffect)(eG, [
          iW,
          iJ,
          iK,
          a9,
          rb,
          iv,
          i0,
          a3,
          aN,
          ne,
          rD,
          n0?.requestId,
          iq,
          o_,
          aw.id,
          rd,
          au,
          iF,
          rr,
        ]),
        t8[155] !== a5 || t8[156] !== oW
          ? ((e$ = () => {
              if (!a5 || null == oW) return
              let e = Math.max(0, oW - Date.now()),
                t = window.setTimeout(() => {
                  ow(oJ)
                }, e)
              return () => {
                window.clearTimeout(t)
              }
            }),
            (eK = [a5, oW]),
            (t8[155] = a5),
            (t8[156] = oW),
            (t8[157] = e$),
            (t8[158] = eK))
          : ((e$ = t8[157]), (eK = t8[158])),
        (0, g.useEffect)(e$, eK),
        t8[159] !== rf || t8[160] !== rh || t8[161] !== a5 || t8[162] !== aI || t8[163] !== aS
          ? ((eQ = [rf, rh, a5, aI, aS]),
            (t8[159] = rf),
            (t8[160] = rh),
            (t8[161] = a5),
            (t8[162] = aI),
            (t8[163] = aS),
            (t8[164] = eQ))
          : (eQ = t8[164]),
        (0, g.useEffect)(() => {
          if (!a5 || (!rf && !rh)) return
          let e = window.setTimeout(() => {
            ;(ow(oZ), rf && aI(), rh && aS())
          }, 15e3)
          return () => {
            window.clearTimeout(e)
          }
        }, eQ),
        t8[165] !== a9
          ? ((eZ = a9
              ? (0, w.zR)({
                  id: "petOverlay.hideMiniWithOrbit",
                  defaultMessage: "Hide",
                  description: "Context menu item that hides Mini, whether it is showing a pet or a dot",
                })
              : (0, w.zR)({
                  id: "petOverlay.hideMini",
                  defaultMessage: "Hide Mini",
                  description: "Context menu item that hides Mini, the floating compact panel",
                })),
            (t8[165] = a9),
            (t8[166] = eZ))
          : (eZ = t8[166]))
      let li = eZ,
        ln = !rw && nX,
        lo = null == n0,
        lr = ru.map(oQ),
        ll = rb ? void 0 : rm
      ;(t8[167] !== r5 || t8[168] !== a5 || t8[169] !== a0 || t8[170] !== rb || t8[171] !== aJ
        ? ((eJ =
            null != a0 && null == aJ
              ? (e, t, a, n, o) =>
                  (0, i.jsx)(td, {
                    avatarOrigin: a,
                    barOrigin: n,
                    nameOrigin: o,
                    headerOpacity: e?.headerOpacity,
                    morphFromBar: t,
                    agent: a0,
                    active: a5 && rb,
                    callControl: (0, i.jsx)(tp.k, {
                      ref: null,
                      compact: !0,
                      iconStyle: {},
                      isSelected: !1,
                      onActivate: () => {
                        ;(document.activeElement instanceof HTMLElement && document.activeElement.blur(), r5(null, !0))
                      },
                    }),
                    onBack: () => {
                      ;(document.activeElement instanceof HTMLElement && document.activeElement.blur(), r5(null, !0))
                    },
                  })
              : void 0),
          (t8[167] = r5),
          (t8[168] = a5),
          (t8[169] = a0),
          (t8[170] = rb),
          (t8[171] = aJ),
          (t8[172] = eJ))
        : (eJ = t8[172]),
        t8[173] !== r7 ||
        t8[174] !== r5 ||
        t8[175] !== r6 ||
        t8[176] !== a9 ||
        t8[177] !== a5 ||
        t8[178] !== a0 ||
        t8[179] !== rb ||
        t8[180] !== aJ
          ? ((e0 =
              a9 && null != a0
                ? {
                    visible: rb,
                    render: (e, t, a, n) =>
                      null != aJ
                        ? (0, i.jsx)(tm, {
                            active: a5 && t,
                            agent: aJ,
                            maxHeight: e,
                            onBack: () => r5(null, !0),
                            onMenuOpenChange: r7,
                            onReply: r6,
                            swipe: n,
                          })
                        : (0, i.jsx)(
                            tt,
                            {
                              active: t,
                              agent: a0,
                              entrance: a,
                              limitToRecentMessages: !1,
                              maxHeight: e,
                              onMenuOpenChange: r7,
                              onTaskOpen: () => {
                                ;(document.activeElement instanceof HTMLElement && document.activeElement.blur(),
                                  r5(null, !0))
                              },
                              onReply: r6,
                              swipe: n,
                            },
                            a0.id,
                          ),
                  }
                : void 0),
            (t8[173] = r7),
            (t8[174] = r5),
            (t8[175] = r6),
            (t8[176] = a9),
            (t8[177] = a5),
            (t8[178] = a0),
            (t8[179] = rb),
            (t8[180] = aJ),
            (t8[181] = e0))
          : (e0 = t8[181]))
      let ls = rT && !0 !== ik
      t8[182] !== li || t8[183] !== iR || t8[184] !== aA || t8[185] !== aF || t8[186] !== ih || t8[187] !== rq
        ? ((e1 = iR
            ? []
            : [
                {
                  id: "pet-settings",
                  icon: Y.dqq,
                  message: (0, w.zR)({
                    id: "petOverlay.settings",
                    defaultMessage: "Settings",
                    description:
                      "Context menu item on the floating pet or Mini that opens Pets settings in the main window",
                  }),
                  selectAfterClose: !0,
                  onSelect: oK,
                },
                {
                  id: "close-avatar",
                  icon: Y.GsY,
                  message: aF
                    ? li
                    : (0, w.zR)({
                        id: "petOverlay.closeMini",
                        defaultMessage: "Close Mini",
                        description: "Context menu item that closes Mini, the floating compact Codex panel",
                      }),
                  onSelect: () => {
                    ;(rq(
                      o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
                      o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
                    ),
                      ih.stop().catch(o$),
                      aA())
                  },
                },
              ]),
          (t8[182] = li),
          (t8[183] = iR),
          (t8[184] = aA),
          (t8[185] = aF),
          (t8[186] = ih),
          (t8[187] = rq),
          (t8[188] = e1))
        : (e1 = t8[188])
      let lc = ic ? iX : void 0
      t8[189] !== au ? ((e2 = (0, aK.cv)(au)), (t8[189] = au), (t8[190] = e2)) : (e2 = t8[190])
      let lu = !ic || iX
      ;(t8[191] !== at || t8[192] !== an || t8[193] !== ao
        ? ((e3 = { cleanupEnabled: at, streamingEnabled: an, supportState: ao }),
          (t8[191] = at),
          (t8[192] = an),
          (t8[193] = ao),
          (t8[194] = e3))
        : (e3 = t8[194]),
        t8[195] !== rm ||
        t8[196] !== i2 ||
        t8[197] !== rJ ||
        t8[198] !== rZ ||
        t8[199] !== i0 ||
        t8[200] !== aH ||
        t8[201] !== oX ||
        t8[202] !== aD ||
        t8[203] !== on
          ? ((e4 = (e) => {
              let t = i2.update({
                deltaY: e,
                timestamp: performance.now(),
                isExpanded: i0,
                notificationCount: oX.length,
                expandsUpward: aD.get(aH).placement.startsWith("top"),
                maxScrollOffset: Math.max(0, rm.contentHeight - rm.viewportRect.height),
              })
              "expand" === t
                ? rZ()
                : "collapse" === t
                  ? rJ()
                  : "scroll" === t &&
                    on((t) =>
                      (0, d.Tyz)({
                        contentHeight: rm.contentHeight,
                        deltaY: e,
                        scrollOffset: t,
                        viewportHeight: rm.viewportRect.height,
                      }),
                    )
            }),
            (t8[195] = rm),
            (t8[196] = i2),
            (t8[197] = rJ),
            (t8[198] = rZ),
            (t8[199] = i0),
            (t8[200] = aH),
            (t8[201] = oX),
            (t8[202] = aD),
            (t8[203] = on),
            (t8[204] = e4))
          : (e4 = t8[204]),
        t8[205] !== iQ || t8[206] !== iK || t8[207] !== rJ
          ? ((e5 = () => {
              iK || null == iQ || (iZ(null), rJ())
            }),
            (t8[205] = iQ),
            (t8[206] = iK),
            (t8[207] = rJ),
            (t8[208] = e5))
          : (e5 = t8[208]),
        t8[209] !== rz || t8[210] !== a4
          ? ((e6 = (e) => {
              rz(e, a4 && 0 === e.buttons)
            }),
            (t8[209] = rz),
            (t8[210] = a4),
            (t8[211] = e6))
          : (e6 = t8[211]),
        t8[212] !== rz
          ? ((e7 = (e) => {
              rz(e, !1)
            }),
            (t8[212] = rz),
            (t8[213] = e7))
          : (e7 = t8[213]),
        t8[214] !== rz
          ? ((e8 = (e) => {
              rz(e, !0)
            }),
            (t8[214] = rz),
            (t8[215] = e8))
          : (e8 = t8[215]))
      let ld = il ? r2 : void 0,
        lp = null != r_ ? rU : void 0,
        lm = window.electronBridge?.showContextMenu == null ? void 0 : rQ
      ;(t8[216] !== rS || t8[217] !== nJ
        ? ((e9 = () => {
            ;(nJ(null), rS(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_CLICK))
          }),
          (t8[216] = rS),
          (t8[217] = nJ),
          (t8[218] = e9))
        : (e9 = t8[218]),
        t8[219] !== nw || t8[220] !== ap || t8[221] !== aD || t8[222] !== nJ
          ? ((te = ap
              ? (e) => {
                  ;((0, V.td)(aD, nw), (0, V.TG)(aD), (nl.current = nl.current + 1), na(e), e.length > 0 && nJ(null))
                }
              : void 0),
            (t8[219] = nw),
            (t8[220] = ap),
            (t8[221] = aD),
            (t8[222] = nJ),
            (t8[223] = te))
          : (te = t8[223]),
        t8[224] !== nw ||
        t8[225] !== nh ||
        t8[226] !== nk.pendingCaptureCount ||
        t8[227] !== nu ||
        t8[228] !== nd ||
        t8[229] !== aD ||
        t8[230] !== nO
          ? ((ta = (e, t) => {
              ;((0, V.td)(aD, nw), "voice-return" === t && (0, V.TG)(aD))
              let a = nu.filter((t) => !e.includes(t))
              if (
                (nc({ appshots: a, threadTarget: 0 !== a.length || nh ? nd : null }),
                0 === a.length && ((ng.current = ng.current + 1), "voice-return" !== t))
              )
                for (let e of nP.current.values()) e.allowSubmitWithoutCapture = !0
              if ("voice-return" === t) {
                for (let e of (tZ.v.info("Quick Chat returned to active voice", {
                  safe: { pendingCaptures: nk.pendingCaptureCount },
                  sensitive: {},
                }),
                (nN.current = nN.current + 1),
                nP.current.values()))
                  e.operation.fail()
                ;(nP.current.clear(), nO({ pendingCaptureCount: 0, response: void 0, startsCollapsed: !1 }))
              }
            }),
            (t8[224] = nw),
            (t8[225] = nh),
            (t8[226] = nk.pendingCaptureCount),
            (t8[227] = nu),
            (t8[228] = nd),
            (t8[229] = aD),
            (t8[230] = nO),
            (t8[231] = ta))
          : (ta = t8[231]))
      let lf = ap ? i4 : void 0,
        lh = ni?.message
      ;(t8[232] !== aD
        ? ((ti = () => {
            ;((nl.current = nl.current + 1), (0, V.TG)(aD), nr(null))
          }),
          (t8[232] = aD),
          (t8[233] = ti))
        : (ti = t8[233]),
        t8[234] !== nU
          ? ((tn = (e) => {
              nU((t) => ({ ...t, flights: t.flights.filter((t) => t.notificationId !== e) }))
            }),
            (t8[234] = nU),
            (t8[235] = tn))
          : (tn = t8[235]),
        t8[236] !== a0 || t8[237] !== rw
          ? ((to =
              rw && null != a0
                ? (0, i.jsx)(th.H, { conversationId: a0.conversationId, embedded: !0 }, a0.conversationId)
                : void 0),
            (t8[236] = a0),
            (t8[237] = rw),
            (t8[238] = to))
          : (to = t8[238]),
        t8[239] !== nw || t8[240] !== nh || t8[241] !== nu || t8[242] !== aD
          ? ((tr = nh
              ? (0, i.jsx)(oR, {
                  onAttachmentRemoved: () => {
                    ;((0, V.td)(aD, nw),
                      0 !== nu.length ||
                        0 !== aD.get(H.a$).length ||
                        0 !== aD.get(H.PA).length ||
                        0 !== aD.get(H.gy).length ||
                        (0, V.ov)(aD) ||
                        nc(oG))
                  },
                })
              : void 0),
            (t8[239] = nw),
            (t8[240] = nh),
            (t8[241] = nu),
            (t8[242] = aD),
            (t8[243] = tr))
          : (tr = t8[243]))
      let lg = a0 ?? nd,
        lv = nk.pendingCaptureCount > 0,
        ly = null != ab || !iR,
        lw = !rw && (nQ || null != aJ),
        lb = null == aJ ? nZ : null,
        lC = a2 ? "quick-chat" : void 0
      ;(t8[244] !== ix?.handoff ||
      t8[245] !== iA ||
      t8[246] !== rI ||
      t8[247] !== iE ||
      t8[248] !== ip ||
      t8[249] !== iS ||
      t8[250] !== iC ||
      t8[251] !== ne ||
      t8[252] !== iq ||
      t8[253] !== o_ ||
      t8[254] !== ih.canStart ||
      t8[255] !== ih.isMicrophoneMuted ||
      t8[256] !== ih.isMuted ||
      t8[257] !== ih.start ||
      t8[258] !== ih.startError ||
      t8[259] !== ih.stop ||
      t8[260] !== ih.toggleMicrophoneMute ||
      t8[261] !== ih.toggleMute ||
      t8[262] !== ih.voiceActivity ||
      t8[263] !== iN ||
      t8[264] !== iD ||
      t8[265] !== iP ||
      t8[266] !== ic ||
      t8[267] !== iM
        ? ((tl = ip
            ? {
                activity: ih.voiceActivity,
                arePetControlsExpanded: rI,
                canStart: ih.canStart,
                caption: iq,
                errorMessage: ih.startError,
                handoff: "global-overlay" === iA ? (ix?.handoff ?? null) : null,
                isAudioReady: iE,
                isSessionActive: iS,
                isTransferring: iC,
                microphoneMuted: ih.isMicrophoneMuted,
                muted: ih.isMuted,
                petOpenIntent: iP,
                petControlsAppearance: ne,
                phase: iN,
                presentationAnchorRef: iD,
                statusText: o_,
                usesPresentationFadeTransition: iM,
                usesNativeStackPresentationTransition: ic,
                onStart: ih.start,
                onStop: ih.stop,
                onToggleMicrophoneMute: ih.toggleMicrophoneMute,
                onToggleMute: ih.toggleMute,
              }
            : void 0),
          (t8[244] = ix?.handoff),
          (t8[245] = iA),
          (t8[246] = rI),
          (t8[247] = iE),
          (t8[248] = ip),
          (t8[249] = iS),
          (t8[250] = iC),
          (t8[251] = ne),
          (t8[252] = iq),
          (t8[253] = o_),
          (t8[254] = ih.canStart),
          (t8[255] = ih.isMicrophoneMuted),
          (t8[256] = ih.isMuted),
          (t8[257] = ih.start),
          (t8[258] = ih.startError),
          (t8[259] = ih.stop),
          (t8[260] = ih.toggleMicrophoneMute),
          (t8[261] = ih.toggleMute),
          (t8[262] = ih.voiceActivity),
          (t8[263] = iN),
          (t8[264] = iD),
          (t8[265] = iP),
          (t8[266] = ic),
          (t8[267] = iM),
          (t8[268] = tl))
        : (tl = t8[268]),
        t8[269] !== iJ ||
        t8[270] !== iK ||
        t8[271] !== rI ||
        t8[272] !== n8 ||
        t8[273] !== nT ||
        t8[274] !== r3 ||
        t8[275] !== r7 ||
        t8[276] !== r$ ||
        t8[277] !== le ||
        t8[278] !== rY ||
        t8[279] !== rW ||
        t8[280] !== lt ||
        t8[281] !== r1 ||
        t8[282] !== r5 ||
        t8[283] !== rX ||
        t8[284] !== r0 ||
        t8[285] !== rG ||
        t8[286] !== r8 ||
        t8[287] !== a7 ||
        t8[288] !== i0 ||
        t8[289] !== ry ||
        t8[290] !== rg ||
        t8[291] !== n2 ||
        t8[292] !== is ||
        t8[293] !== oo ||
        t8[294] !== n4 ||
        t8[295] !== oX ||
        t8[296] !== nk.response ||
        t8[297] !== nk.startsCollapsed ||
        t8[298] !== nu ||
        t8[299] !== nt ||
        t8[300] !== ap ||
        t8[301] !== rl ||
        t8[302] !== ag ||
        t8[303] !== aL ||
        t8[304] !== aF ||
        t8[305] !== aw ||
        t8[306] !== n3 ||
        t8[307] !== av ||
        t8[308] !== ls ||
        t8[309] !== e1 ||
        t8[310] !== lc ||
        t8[311] !== e2 ||
        t8[312] !== lu ||
        t8[313] !== e3 ||
        t8[314] !== e4 ||
        t8[315] !== e5 ||
        t8[316] !== e6 ||
        t8[317] !== e7 ||
        t8[318] !== e8 ||
        t8[319] !== ld ||
        t8[320] !== lp ||
        t8[321] !== lm ||
        t8[322] !== e9 ||
        t8[323] !== te ||
        t8[324] !== ta ||
        t8[325] !== lf ||
        t8[326] !== lh ||
        t8[327] !== ti ||
        t8[328] !== tn ||
        t8[329] !== to ||
        t8[330] !== tr ||
        t8[331] !== lg ||
        t8[332] !== lv ||
        t8[333] !== ly ||
        t8[334] !== lw ||
        t8[335] !== lb ||
        t8[336] !== lC ||
        t8[337] !== tl ||
        t8[338] !== ln ||
        t8[339] !== lo ||
        t8[340] !== lr ||
        t8[341] !== ll ||
        t8[342] !== eJ ||
        t8[343] !== e0
          ? ((ts = {
              quickChatFocusRequested: ln,
              animatesQuickChatPresentation: lo,
              activityCopies: lr,
              activitySwipeHost: tX.appServices.avatarOverlayScroll,
              activityStackPresentation: ll,
              orbitTranscriptHeader: eJ,
              orbitTranscript: e0,
              areActivityPillsPresent: iJ,
              areActivityPillsVisible: iK,
              avatar: aw,
              petAnimationPaused: ls,
              avatarMenuItems: e1,
              debugWindowBorderVisible: a7,
              interactiveRegionRef: rR,
              isNotificationTrayOpen: i0,
              mascotDragState: oo,
              isRealtimeNativeOverlayEnabled: is,
              cssOrbGlowEnabled: lc,
              expandedNotificationIds: n8,
              mascotStyle: e2,
              notifications: oX,
              arePresentationAccessoriesVisible: lu,
              quickChatDictation: e3,
              onActivityStackScroll: e4,
              onActivateNotification: r3,
              onHideActivityPills: le,
              onActivityPillsHidden: e5,
              onMascotLostPointerCapture: e6,
              onMascotPointerCancel: e7,
              onMascotPointerDown: rY,
              onMascotPointerMove: rW,
              onMascotPointerUp: e8,
              onPetAreaHoverChange: i7,
              onNotificationExpansionChange: r1,
              onNotificationPointerEnter: ld,
              onGeometryAnimationFrame: lp,
              onDismissNotification: r$,
              onOpenNotificationActions: lm,
              notificationFollowUp: n4,
              onQuickChatFocusChange: r5,
              onContextMenuOpenChange: r7,
              onQuickChatOpen: e9,
              onQuickChatDraftChange: te,
              onRemoveQuickChatAppshots: ta,
              onQuickChatVoiceSelectionChange: n3,
              onQuickChatVisibilityChange: lf,
              onRunNotificationControl: lt,
              onRunNotificationAction: rX,
              onSubmitQuestionOption: rG,
              onSubmitQuickChat: r8,
              quickChatReply: lh,
              onRemoveQuickChatReply: ti,
              quickChatFlights: rl,
              onQuickChatFlightComplete: tn,
              onShowActivityPills: r0,
              getQuickChatAttachmentActions: nT,
              quickChatComposerReplacement: to,
              quickChatFileAttachments: tr,
              quickChatAppshots: nu,
              quickChatThreadTarget: lg,
              quickChatAppshotCapturePending: lv,
              quickChatAppshotCaptureResponse: nk.response,
              quickChatAppshotCaptureStartsCollapsed: nk.startsCollapsed,
              quickChatDraft: nt,
              quickChatEnabled: ap,
              quickChatStashEnabled: aL,
              isQuickChatPetVisible: ly,
              quickChatStyleEnabled: aF,
              quickChatExpanded: ry,
              petControlsExpanded: rI,
              quickChatStashAppearance: ag,
              stashAttentionAnimation: av,
              quickChatEditorActive: lw,
              quickChatCompositionDeferral: lb,
              quickChatVisible: rg,
              quickChatVoiceSelected: n2,
              presentation: lC,
              realtimeVoiceSurface: tl,
            }),
            (t8[269] = iJ),
            (t8[270] = iK),
            (t8[271] = rI),
            (t8[272] = n8),
            (t8[273] = nT),
            (t8[274] = r3),
            (t8[275] = r7),
            (t8[276] = r$),
            (t8[277] = le),
            (t8[278] = rY),
            (t8[279] = rW),
            (t8[280] = lt),
            (t8[281] = r1),
            (t8[282] = r5),
            (t8[283] = rX),
            (t8[284] = r0),
            (t8[285] = rG),
            (t8[286] = r8),
            (t8[287] = a7),
            (t8[288] = i0),
            (t8[289] = ry),
            (t8[290] = rg),
            (t8[291] = n2),
            (t8[292] = is),
            (t8[293] = oo),
            (t8[294] = n4),
            (t8[295] = oX),
            (t8[296] = nk.response),
            (t8[297] = nk.startsCollapsed),
            (t8[298] = nu),
            (t8[299] = nt),
            (t8[300] = ap),
            (t8[301] = rl),
            (t8[302] = ag),
            (t8[303] = aL),
            (t8[304] = aF),
            (t8[305] = aw),
            (t8[306] = n3),
            (t8[307] = av),
            (t8[308] = ls),
            (t8[309] = e1),
            (t8[310] = lc),
            (t8[311] = e2),
            (t8[312] = lu),
            (t8[313] = e3),
            (t8[314] = e4),
            (t8[315] = e5),
            (t8[316] = e6),
            (t8[317] = e7),
            (t8[318] = e8),
            (t8[319] = ld),
            (t8[320] = lp),
            (t8[321] = lm),
            (t8[322] = e9),
            (t8[323] = te),
            (t8[324] = ta),
            (t8[325] = lf),
            (t8[326] = lh),
            (t8[327] = ti),
            (t8[328] = tn),
            (t8[329] = to),
            (t8[330] = tr),
            (t8[331] = lg),
            (t8[332] = lv),
            (t8[333] = ly),
            (t8[334] = lw),
            (t8[335] = lb),
            (t8[336] = lC),
            (t8[337] = tl),
            (t8[338] = ln),
            (t8[339] = lo),
            (t8[340] = lr),
            (t8[341] = ll),
            (t8[342] = eJ),
            (t8[343] = e0),
            (t8[344] = ts))
          : (ts = t8[344]))
      let lx = ts
      return (
        t8[345] !== rB || t8[346] !== rD
          ? ((tc = () => {
              ;(rB(), rD())
            }),
            (t8[345] = rB),
            (t8[346] = rD),
            (t8[347] = tc))
          : (tc = t8[347]),
        t8[348] !== n1
          ? ((tu = (e) => {
              n1((t) => (t?.requestId === e ? null : t))
            }),
            (t8[348] = n1),
            (t8[349] = tu))
          : (tu = t8[349]),
        t8[350] !== lx || t8[351] !== ae || t8[352] !== n0 || t8[353] !== aU || t8[354] !== tc || t8[355] !== tu
          ? ((tx = (0, i.jsx)(n9, {
              presentation: ae,
              frameProps: lx,
              onLayoutApplied: tc,
              onQuickChatFocusCompleted: tu,
              quickChatFocusPreparation: n0,
              runtimeId: aU,
            })),
            (t8[350] = lx),
            (t8[351] = ae),
            (t8[352] = n0),
            (t8[353] = aU),
            (t8[354] = tc),
            (t8[355] = tu),
            (t8[356] = tx))
          : (tx = t8[356]),
        tx
      )
    }
    function oG(e) {
      return { ...e, threadTarget: null }
    }
    function o$() {}
    function oK() {
      K.O1.dispatchMessage("show-settings", { section: "pets" })
    }
    function oQ(e) {
      let { copy: t } = e
      return t
    }
    function oZ(e) {
      return Math.max(Date.now(), e + 1)
    }
    function oJ(e) {
      return Math.max(Date.now(), e + 1)
    }
    function o0(e) {
      tZ.v.debug("Failed to request the current avatar overlay layout", { safe: {}, sensitive: { error: e } })
    }
    function o1() {
      let e = document.querySelector('[data-avatar-overlay-native-surface-id="composer"]'),
        t = e?.querySelector("[data-avatar-overlay-quick-chat-appshot-destination]")
      if (null == e || null == t) return null
      let a = e.getBoundingClientRect(),
        i = t.getBoundingClientRect(),
        n = Number.parseFloat(e.dataset.avatarOverlayQuickChatTargetLeft ?? ""),
        o = Number.parseFloat(e.dataset.avatarOverlayQuickChatTargetTop ?? ""),
        r = e.offsetWidth > 0 ? a.width / e.offsetWidth : 1,
        l = e.offsetHeight > 0 ? a.height / e.offsetHeight : 1
      return !Number.isFinite(n) || !Number.isFinite(o) || r <= 0 || l <= 0
        ? null
        : {
            ...(0, N.b)(e),
            cornerRadius: Number.parseFloat(window.getComputedStyle(t).borderTopLeftRadius),
            height: i.height / l,
            width: i.width / r,
            x: n + (i.left - a.left) / r,
            y: o + (i.top - a.top) / l,
          }
    }
    function o2(e) {
      return [e, null]
    }
    function o3(e) {
      return { ...e, localPath: void 0 }
    }
    function o4(e, t) {
      K.O1.dispatchMessage("avatar-overlay-keyboard-interaction-changed", { isInteractive: e, restorePreviousFocus: t })
    }
    function o5(e) {
      K.O1.dispatchMessage("avatar-overlay-pointer-interaction-changed", { isInteractive: e })
    }
    function o6(e) {
      return "cloud" === e.source && "running" === e.status
    }
    function o7(e) {
      return "cloud" !== e.source && "running" === e.status
    }
    function o8() {
      return new Map()
    }
    function o9(e) {
      return !e.isLoading
    }
    function re() {
      return Date.now()
    }
    function rt() {
      return new Map()
    }
    function ra(e) {
      let { localConversationId: t } = e
      return null == t ? [] : [t]
    }
    function ri() {
      return crypto.randomUUID()
    }
    function rn() {
      return new ao()
    }
    function ro(e) {
      let { hostId: t, localConversationId: a, status: i } = e
      return "review" === i && null != t && null != a ? [{ hostId: t, threadId: a }] : []
    }
  },
  LQlv(e, t, a) {
    function i(e, t, a) {
      if (t.length > e.length || !e.includes(t[0]) || !e.includes(t[t.length - 1])) return 0
      let i = []
      for (let a = 0, n = 0; a < e.length && n < t.length; a++) e[a] === t[n] && (i.push(a), n++)
      if (i.length !== t.length) return 0
      for (let a = i.length - 2; a >= 0; a--) {
        let n = i[a + 1] - 1
        i[a] < n && e[n] === t[a] && (i[a] = n)
      }
      let n = a?.segment(e),
        o = (e) => {
          let t = n?.containing(e)
          return t?.isWordLike === !0 && (t.index === e || "_" === t.segment[e - t.index - 1])
        },
        r = i[0],
        l = 0,
        s = 0,
        c = +!!o(r)
      for (let e = 1; e < i.length; e++) {
        let t = i[e] - i[e - 1]
        1 === t ? l++ : ((s += t - 1), (c += +!!o(i[e])))
      }
      return 5 * i.length + 10 * l + 5 * (0 === r) + 15 * c - 5 * s - 0.2 * r
    }
    a.d(
      t,
      {},
      {
        O: function (e, t, a) {
          let n = t.trim().toLocaleLowerCase()
          if (0 === n.length) return e
          let o = "function" == typeof Intl.Segmenter ? new Intl.Segmenter(a, { granularity: "word" }) : null
          return e
            .map((e) => ({
              item: e,
              isConnect: e.key.startsWith("plugin-connect:"),
              score: Math.max(
                0,
                ...[e.detail ? `${e.label} ${e.detail}` : e.label, ...(e.searchTerms ?? [])].map((e) =>
                  i(e.toLowerCase(), n, o),
                ),
              ),
              keywordScore: Math.max(0, ...(e.searchKeywords ?? []).map((e) => i(e.toLowerCase(), n, o))),
            }))
            .filter(({ score: e, keywordScore: t }) => e > 0 || t > 0)
            .sort(
              (e, t) =>
                Number(e.isConnect) - Number(t.isConnect) || t.score - e.score || t.keywordScore - e.keywordScore,
            )
            .slice(0, 50)
            .map(({ item: e }) => e)
        },
      },
    )
  },
  wzi3(e, t, a) {
    a.d(t, {}, { k: function (e) {} })
  },
  FOlV(e, t, a) {
    var i = a("DBCl")
    a("XW6f")
    var n = a("wTVm"),
      o = a("Dgwo"),
      r = a("RWvA"),
      l = a("TSib"),
      s = a("SGsN"),
      c = a("NMCC"),
      u = a("uGmM"),
      d = a("YYwy"),
      p = a("GaA7"),
      m = a("Sd8U"),
      f = a("kfGJ"),
      h = a("Yscs"),
      g = a("kFKz"),
      v = a("bnxy"),
      y = a("mt4D"),
      w = a("A8Az"),
      b = a("NySd"),
      C = a("Hvvy"),
      x = a("sXdr"),
      A = a("uIyc"),
      M = a("qEnx"),
      I = a("xa8Q")
    a.d(
      t,
      {},
      {
        F: function ({
          scope: e,
          attachmentGeneration: t,
          canceledPendingFileAttachmentIds: a,
          canCopyBrowserFileAttachments: S,
          composerMode: E,
          getUploadToCloud: R,
          executionHostConfig: _,
          executionHostId: T,
          getRestrictedRemoteHostImageSizeContext: k,
          intl: O,
          notifyImageInputUnsupported: P,
          setAddedFiles: N,
          setFileAttachments: L,
          setImageAttachments: F,
          setPendingFileAttachments: q,
          shouldRestrictRemoteHostImageSize: j = !1,
          supportsImageInputs: D,
        }) {
          let U = (a, i, n, o) => {
              if (!D) return (P(), !1)
              if (0 === a.length) return !0
              if (
                !(({ additionalImageDataUrls: e = [], additionalImageSizeBytes: t = 0, replacingImageId: a }) => !0)({
                  additionalImageSizeBytes: a.reduce((e, t) => e + t.size, 0),
                })
              )
                return !1
              let r = !1
              for (let l of a) {
                let a = window.electronBridge?.getPathForFile,
                  s = (0, y.xE)(l),
                  c = "cloud" !== E,
                  u = c && S ? (e) => (0, y.Br)(e, z) : void 0,
                  d = (0, b.ho)(
                    l,
                    a,
                    c && 1 ? p.appServices.fileAttachments.persistImageFileToTemp : void 0,
                    c && T !== f.fI ? (t) => (0, y.HJ)(t, { scope: e, hostConfig: _, hostId: T }) : void 0,
                    u,
                    i,
                  ),
                  m = t.current
                H(async (e) => ({ id: e, src: await (0, h.G)(l), filename: s }), {
                  orderKey: o?.get(l),
                  onQueued: (e) => {
                    ;(r || ((r = !0), n?.()),
                      d
                        .then((a) => {
                          t.current === m &&
                            null != a &&
                            F((t) => t.map((t) => (t.id === e ? { ...t, localPath: a } : t)))
                        })
                        .catch(() => {}))
                  },
                })
              }
              return !0
            },
            H = async (a, o = {}) => {
              let r = (0, m.ah)(e)
              if (o.isAvailable?.() === !1) return void o.onComplete?.("blocked")
              let u = t.current,
                p = e.get(l.gy).find((e) => e.id === o.replaceImageId)
              if (null != o.replaceImageId && null == p) return void o.onComplete?.("blocked")
              let f = p?.id ?? (0, n.A)(),
                h = (0, w.Xq)("image", f)
              null != o.orderKey ? (0, l.vi)(e, o.orderKey, h) : (0, l.A5)(e, [h])
              let g = !1,
                v = !1,
                y = (a, i) => {
                  v ||
                    ((v = !0),
                    "success" !== a && null == p && (0, l.KZ)(e, [h]),
                    o.signal?.removeEventListener("abort", b),
                    "success" !== a &&
                      g &&
                      t.current === u &&
                      (null == p && e.get(l.JX).some((e) => e.attachmentId === f) && (0, c.II)(e, f),
                      F((e) => (null == p ? e.filter((e) => e.id !== f) : e.map((e) => (e.id === f ? p : e))))),
                    "success" === a ? C.succeed() : C.fail(),
                    o.onComplete?.(a, i))
                },
                b = () => y("canceled"),
                C = (0, A.Mz)(e, { hostId: T, id: f, onCancel: b }),
                x = () =>
                  !v &&
                  (o.signal?.aborted || t.current !== u || ((g || null != p) && !e.get(l.gy).some((e) => e.id === f))
                    ? (y("canceled"), !1)
                    : o.isAvailable?.() !== !1 || (y("blocked"), !1))
              o.signal?.addEventListener("abort", b, { once: !0 })
              try {
                if (!x()) return
                let e = a(f),
                  t = { ...(e instanceof Promise ? await e : e), uploadStatus: "cloud" === E ? "uploading" : "idle" }
                if (!x()) return
                if (
                  !(({ additionalImageDataUrls: e = [], additionalImageSizeBytes: t = 0, replacingImageId: a }) => !0)({
                    additionalImageDataUrls: [t.uploadSrc ?? t.src],
                    replacingImageId: p?.id,
                  })
                )
                  return void y("blocked")
                if (
                  ((g = !0),
                  F((e) =>
                    null == p ? [...e, t] : e.map((e) => (e.id === f ? { ...p, uploadStatus: t.uploadStatus } : e)),
                  ),
                  o.onQueued?.(f),
                  !x())
                )
                  return
                let i =
                  "cloud" === E
                    ? {
                        ...t,
                        ...(await (0, M.s)({
                          dataUrl: t.uploadSrc ?? t.src,
                          filename: t.filename ?? `image-${f}.png`,
                          onStep: o.onUploadStep,
                        })),
                      }
                    : t
                if (!x()) return
                ;(F((e) => e.map((e) => (e.id !== f ? e : { ...e, ...i }))), y("success"))
              } catch (t) {
                x() &&
                  (e
                    .get(s.Id)
                    .danger(
                      O.formatMessage({
                        id: "composer.imageUploadFailed",
                        defaultMessage: "Failed to upload image",
                        description: "Toast shown when an image fails to upload",
                      }),
                      {
                        errorAnalytics: { toastId: "composer.imageUploadFailed" },
                        primaryAction: (0, d.t)(e, {
                          conversationId: r,
                          surface: "codex",
                          operation: "attachment",
                          errorMessage: (0, i.Rt_)(t),
                          occurredAtMs: Date.now(),
                        }),
                      },
                    ),
                  y("error", t))
              }
            },
            B = (t) => {
              let a = ({ fsPath: e, startLine: t, endLine: a }) => JSON.stringify([(0, v.XH)(e), t, a]),
                i = new Set([...e.get(l.a$), ...e.get(l.PA)].map(a))
              return t.filter((e) => {
                let t = a(e)
                return !i.has(t) && (i.add(t), !0)
              })
            },
            V = (t, a) => {
              let i = B(t)
              for (let t of i) {
                let i = a?.get(t)
                null != i && (0, l.vi)(e, i, (0, w.Jz)(t, "added-file"))
              }
              return (
                null != a &&
                  (0, l.KZ)(
                    e,
                    t.flatMap((e) => a.get(e) ?? []),
                  ),
                0 !== i.length && (N((e) => [...e, ...i]), !0)
              )
            },
            z = (t) => (0, y.x1)(e, t, { copyFromLocalFile: S }),
            Y = async (c, p, h) => {
              let g = (0, m.ah)(e)
              if (R?.()) {
                let a = t.current
                ;(p?.(),
                  await (0, I.gv)(e, c, { orderKeys: h, hostId: T, shouldDiscard: () => t.current !== a || !R() }))
                return
              }
              if (T === f.fI) {
                let t = B(c)
                for (let a of t) {
                  let t = (0, w.Jz)(a),
                    i = h?.get(a)
                  null != i ? (0, l.vi)(e, i, t) : (0, l.A5)(e, [t])
                }
                ;(null != h &&
                  (0, l.KZ)(
                    e,
                    c.flatMap((e) => h.get(e) ?? []),
                  ),
                  t.length > 0 && (L((e) => [...e, ...t]), p?.()))
                return
              }
              let v = c.filter((e) => !(0, i.skP)(e))
              for (let t of c)
                if ((0, i.skP)(t)) {
                  let a = h?.get(t)
                  null != a && (0, l.KZ)(e, [a])
                }
              if (
                (v.length !== c.length &&
                  e
                    .get(s.Id)
                    .danger(
                      O.formatMessage({
                        id: "composer.fileAttachment.remoteFolderUnsupported",
                        defaultMessage: "Folders can only be attached to local conversations",
                        description:
                          "Toast shown when a local folder cannot be attached to a conversation running on a remote host",
                      }),
                      { errorAnalytics: { toastId: "composer.fileAttachment.remoteFolderUnsupported" } },
                    ),
                0 === v.length)
              )
                return
              let y = v.map((e) => ({
                id: (0, n.A)(),
                label: e.label,
                localPreviewPath: null == e.startLine ? e.fsPath : void 0,
              }))
              for (let [t, a] of y.entries()) {
                let i = (0, w.Xq)("pending", a.id),
                  n = v[t],
                  o = null == n ? void 0 : h?.get(n)
                null != o ? (0, l.vi)(e, o, i) : (0, l.A5)(e, [i])
              }
              let b = t.current
              ;(q((e) => [...e, ...y]), p?.())
              let M = y.map(({ id: t }) => (0, A.Mz)(e, { hostId: T, id: t }))
              try {
                let n = await (0, o.V)(e, T).uploadLocalFileAttachments({
                  attachments: v,
                  allowSftpUpload: (0, i.Tim)(_),
                })
                if (t.current === b) {
                  let t = n.filter((t, i) => {
                    let n = y[i],
                      o = null != n && !a.has(n.id)
                    return (
                      o &&
                        (null != n.localPreviewPath && C.Y.set(t, { id: n.id, path: n.localPreviewPath }),
                        (0, l.vi)(e, (0, w.Xq)("pending", n.id), (0, w.Jz)(t))),
                      o
                    )
                  })
                  for (let [e, i] of (t.length > 0 && L((e) => [...e, ...t]), y.entries()))
                    null == n[e] || a.has(i.id) || M[e]?.succeed()
                }
              } catch (n) {
                if ((0, u.e)(e) && (t.current !== b || y.every(({ id: e }) => a.has(e)))) return
                e.get(s.Id).danger((0, r.c)(n, O), {
                  primaryAction: (0, d.t)(e, {
                    conversationId: g,
                    surface: "codex",
                    operation: "attachment",
                    errorMessage: (0, i.Rt_)(n),
                    occurredAtMs: Date.now(),
                  }),
                  errorAnalytics: { toastId: "composerAttachmentActions.uploadLocalFileAttachments" },
                })
              } finally {
                for (let e of M) e.fail()
                ;(0, x.xm)(e, f.fI, v)
                let t = new Set(y.map((e) => e.id))
                for (let i of ((0, l.KZ)(
                  e,
                  [...t].map((e) => (0, w.Xq)("pending", e)),
                ),
                q((e) => e.filter((e) => !t.has(e.id))),
                t))
                  a.delete(i)
              }
            },
            W = (a, o, r, c, p) => {
              if (0 === a.length) return
              let h = p ?? X(a)
              if (R?.()) {
                let i = t.current
                ;(r?.(),
                  (0, I.gv)(e, a, {
                    orderKeys: h,
                    directoryFiles:
                      c ??
                      (0, g.p)(o ?? null)
                        .filter(({ isDirectory: e }) => e)
                        .map(({ file: e }) => e),
                    hostId: T,
                    shouldDiscard: () => t.current !== i || !R(),
                  }))
                return
              }
              let y = window.electronBridge?.getPathForFile,
                C = (0, b.FA)(a, y, o, c),
                x = S ? a.filter((e) => e.size > 0 && null == (0, b.gY)(e, y)) : [],
                M = new Map()
              for (let t of a) {
                let a = (0, b.gY)(t, y),
                  i = null == a ? void 0 : C.find((e) => (0, v.XH)(e.fsPath) === (0, v.XH)(a)),
                  n = h.get(t)
                null != n && (null == i || M.has(i) ? x.includes(t) || (0, l.KZ)(e, [n]) : M.set(i, n))
              }
              if (x.length > 0) {
                let a = (0, A.Mz)(e, { hostId: T, id: (0, n.A)() }),
                  o = (0, m.ah)(e)
                ;(async () => {
                  let n = t.current
                  try {
                    let i = await z(x)
                    if (t.current !== n) return
                    for (let [t, a] of i.entries()) {
                      let i = x[t],
                        n = null == i ? void 0 : h.get(i)
                      null != n && (0, l.vi)(e, n, (0, w.Jz)(a))
                    }
                    let o = V(C, M)
                    ;(L((e) => [...e, ...i]), a.succeed(), (o || i.length > 0) && r?.())
                  } catch (r) {
                    if ((0, u.e)(e) && t.current !== n) return
                    let a = O.formatMessage({
                      id: "composer.fileAttachment.browserFileCopyError",
                      defaultMessage: "Unable to attach file",
                      description: "Toast shown when copying a browser-selected file to a local attachment path fails",
                    })
                    e.get(s.Id).danger(a, {
                      primaryAction: (0, d.t)(e, {
                        conversationId: o,
                        surface: "codex",
                        operation: "attachment",
                        errorMessage: (0, i.Rt_)(r),
                        occurredAtMs: Date.now(),
                      }),
                      errorAnalytics: { toastId: "composer.fileAttachment.browserFileCopyError" },
                    })
                  } finally {
                    ;(a.fail(), (0, l.KZ)(e, [...h.values()]))
                  }
                })()
                return
              }
              T !== f.fI ? Y(C, r, M) : V(C, M) && r?.()
            },
            X = (t) => {
              let a = new Map(t.map((e) => [e, (0, w.Xq)("pending", (0, n.A)())]))
              return ((0, l.A5)(e, [...a.values()]), a)
            },
            G = (t, a, n, o, r) => {
              let s =
                  r ??
                  (0, g.p)(n ?? null)
                    .filter((e) => e.isDirectory)
                    .map((e) => e.file),
                c = X(t),
                u = t.filter((e) => !s.includes(e) && (0, i.cb0)(e)),
                d = t.filter((e) => !u.includes(e)),
                p = 0 === u.length || U(u, a, o, c)
              ;(p ||
                (0, l.KZ)(
                  e,
                  u.flatMap((e) => c.get(e) ?? []),
                ),
                p
                  ? W(d, n, o, s, c)
                  : (0, l.KZ)(
                      e,
                      d.flatMap((e) => c.get(e) ?? []),
                    ))
            }
          return {
            addDraggedImage: async (a, i) => {
              let o = t.current,
                r = (0, w.Xq)("pending", (0, n.A)())
              ;(0, l.A5)(e, [r])
              let s = (0, A.Mz)(e, { hostId: T, id: (0, n.A)() })
              try {
                let e = await (0, b.Rb)(a)
                null != e && t.current === o && (U([e], "drop", i, new Map([[e, r]])), s.succeed())
              } finally {
                ;(s.fail(), (0, l.KZ)(e, [r]))
              }
            },
            addFiles: G,
            addPickedFiles: async (a, { imagesOnly: o, loadImageDataUrls: r, orderKeys: s }) => {
              let c = t.current,
                u = a.filter((e) => !(0, i.skP)(e) && (0, i.DEu)(e.fsPath || e.path || e.label)),
                d = o ? u : a,
                p = s ?? X(d),
                m = (0, A.Mz)(e, { hostId: T, id: (0, n.A)() })
              try {
                let e = 0 === u.length ? [] : await r(u)
                if (t.current !== c) return
                let i = 0
                if (e.some((e) => null != e) && !D) P()
                else if (
                  (({ additionalImageDataUrls: e = [], additionalImageSizeBytes: t = 0, replacingImageId: a }) => !0)({
                    additionalImageDataUrls: e.flatMap((e) => e?.dataUrl ?? []),
                  })
                )
                  for (let [t, a] of e.entries()) {
                    let e = u[t]
                    null != a &&
                      null != e &&
                      (i++,
                      H((e) => ({ id: e, src: a.dataUrl, localPath: a.localPath, filename: a.filename }), {
                        orderKey: p.get(e),
                      }))
                  }
                ;(o ||
                  (await Y(
                    a.filter((e) => !u.includes(e)),
                    void 0,
                    p,
                  )),
                  i === u.length && m.succeed())
              } finally {
                ;(m.fail(), (0, l.KZ)(e, [...p.values()]))
              }
            },
            addFileDescriptorsAsMentions: V,
            addFileMentionsFromFiles: W,
            addImageDataUrls: (e) => {
              if (
                0 === e.length ||
                !(({ additionalImageDataUrls: e = [], additionalImageSizeBytes: t = 0, replacingImageId: a }) => !0)({
                  additionalImageDataUrls: e.map((e) => e.dataUrl),
                })
              )
                return !1
              for (let t of e) H((e) => ({ id: e, src: t.dataUrl, localPath: t.localPath, filename: t.filename }))
              return !0
            },
            addImages: U,
            addSidebarDroppedFiles: (e, t) => {
              let { directoryFiles: a, files: i } = e
              G(i, "drop", null, t, a)
            },
            addImageAttachment: H,
            pickBrowserAttachments: async ({ imagesOnly: a }) => {
              let o = t.current,
                r = R?.(),
                s = await (0, y.lB)({ imagesOnly: a })
              if (t.current !== o || r !== R?.()) return null
              if (r && !S) return (G(a ? s.filter(i.cb0) : s, "picker", null), null)
              let c = X(s),
                u = (0, A.Mz)(e, { hostId: T, id: (0, n.A)() })
              try {
                let a = await z(s)
                if (t.current !== o) return ((0, l.KZ)(e, [...c.values()]), { files: [] })
                let i = new Map()
                for (let [e, t] of a.entries()) {
                  let a = s[e],
                    n = null == a ? void 0 : c.get(a)
                  null != n && i.set(t, n)
                }
                return (u.succeed(), { files: a, orderKeys: i })
              } catch (t) {
                throw ((0, l.KZ)(e, [...c.values()]), t)
              } finally {
                u.fail()
              }
            },
            uploadImageAttachment: (a, i) => {
              t.current === i &&
                H(() => a, {
                  replaceImageId: a.id,
                  onComplete: (t) => {
                    "error" === t &&
                      (e.get(l.JX).some((e) => e.attachmentId === a.id) && (0, c.II)(e, a.id),
                      F((e) => e.filter((e) => e.id !== a.id)))
                  },
                })
            },
            uploadLocalFileAttachments: Y,
          }
        },
      },
    )
  },
  bDfs(e, t, a) {
    let i = (0, a("Qgfj").zR)({
      id: "appUndo.attachmentRemoved",
      defaultMessage: "Attachment restored",
      description: "Toast shown after undo restores a removed composer attachment",
    })
    a.d(t, {}, { z: i })
  },
  E9M9(e, t, a) {
    a.d(t, { F: () => ev })
    var i = a("ABep"),
      n = a("QosV"),
      o = a("iRMi"),
      r = a("on57"),
      l = a("qhiJ"),
      s = a("zTeN"),
      c = a("zd8w"),
      u = a("v7qY"),
      d = a("Wf1j"),
      p = a("oyxz"),
      m = a("Qgfj"),
      f = a("HZfM"),
      h = a("BI7S"),
      g = a("zQm0"),
      v = a("Bbed"),
      y = a("GaA7"),
      w = a("eGPX"),
      b = a("hZax"),
      C = a("OMIV")
    let x = (0, v._)(async () => (await a.e(20198).then(a.bind(a, "mMjQ"))).BrowserAddressShortcut, {
        propagateLoadError: !0,
      }),
      A = new WeakMap()
    function M(e) {
      let t,
        a = (0, n.c)(2)
      return null == e.browserConversationId || y.appServices?.browserAutocomplete == null
        ? null
        : (a[0] !== e
            ? ((t = (0, i.jsx)(I, { ...e, browserConversationId: e.browserConversationId })), (a[0] = e), (a[1] = t))
            : (t = a[1]),
          t)
    }
    function I(e) {
      let t,
        a = (0, n.c)(2),
        { client: o } = (0, b.cn)()
      return o.checkGate("1711474471", { disableExposureLog: !0 })
        ? (a[0] !== e
            ? ((t = (0, i.jsx)(g.m, { name: "browser.in-app", children: (0, i.jsx)(S, { ...e }) })),
              (a[0] = e),
              (a[1] = t))
            : (t = a[1]),
          t)
        : null
    }
    function S(e) {
      let t,
        a,
        o,
        r,
        l,
        u = (0, n.c)(14),
        { browserConversationId: d, composerController: p, composerId: m, placement: f } = e,
        h = (0, s._U)(C.JW, "1711474471"),
        g = (0, s.Ul)(w.x)
      return (u[0] !== p || u[1] !== h || u[2] !== g
        ? ((t = () => {
            h && p.setBrowserAutocompleteEnabled(!0, g)
          }),
          (a = [p, h, g]),
          (u[0] = p),
          (u[1] = h),
          (u[2] = g),
          (u[3] = t),
          (u[4] = a))
        : ((t = u[3]), (a = u[4])),
      (0, c.useLayoutEffect)(t, a),
      u[5] !== p || u[6] !== h
        ? ((o = () => {
            if (h)
              return (
                A.set(p, (A.get(p) ?? 0) + 1),
                () => {
                  let e = (A.get(p) ?? 1) - 1
                  ;(0 === e ? A.delete(p) : A.set(p, e),
                    queueMicrotask(() => {
                      A.has(p) ||
                        p.view.isDestroyed ||
                        "true" !== p.view.dom.dataset.browserAutocompleteEnabled ||
                        p.setBrowserAutocompleteEnabled(!1)
                    }))
                }
              )
          }),
          (r = [p, h]),
          (u[5] = p),
          (u[6] = h),
          (u[7] = o),
          (u[8] = r))
        : ((o = u[7]), (r = u[8])),
      (0, c.useLayoutEffect)(o, r),
      h)
        ? (u[9] !== d || u[10] !== p || u[11] !== m || u[12] !== f
            ? ((l = (0, i.jsx)(x, { browserConversationId: d, composerController: p, composerId: m, placement: f })),
              (u[9] = d),
              (u[10] = p),
              (u[11] = m),
              (u[12] = f),
              (u[13] = l))
            : (l = u[13]),
          l)
        : null
    }
    var E = a("QWm3")
    a("zVqR")
    var R = a("DLlD"),
      _ = a("JNtf"),
      T = a("GO7r"),
      k = a("yGJW"),
      O = a("Sd8U"),
      P = a("oEH2"),
      N = a("abq4"),
      L = a("OtM4"),
      F = a("FhiO"),
      q = a("cyb2"),
      j = a("rO8L"),
      D = a("O8Pw"),
      U = a("tl2n"),
      H = a("ArQy"),
      B = a("qfej"),
      V = a("ABl9"),
      z = a("R2HH"),
      Y = a("rNLN"),
      W = a("EkcR"),
      X = a("oC9a"),
      G = a("VaJ5"),
      $ = a("TYyY"),
      K = a("v5fl"),
      Q = a("xAmH"),
      Z = a("KMx9")
    function J(e) {
      let t,
        a,
        o,
        r,
        l,
        s = (0, n.c)(13)
      if (
        (s[0] !== e
          ? (({ enableFloatingWorkMenu: t, source: a, typedSitesMentionRef: r, ...o } = e),
            (s[0] = e),
            (s[1] = t),
            (s[2] = a),
            (s[3] = o),
            (s[4] = r))
          : ((t = s[1]), (a = s[2]), (o = s[3]), (r = s[4])),
        (0, B.Lo)(a))
      ) {
        let e
        return (
          s[5] !== a || s[6] !== o
            ? ((e = (0, i.jsx)(z.Ox, { ...o, source: a })), (s[5] = a), (s[6] = o), (s[7] = e))
            : (e = s[7]),
          e
        )
      }
      return (
        s[8] !== t || s[9] !== a || s[10] !== o || s[11] !== r
          ? ((l = (0, i.jsx)(ee, { ...o, enableFloatingWorkMenu: t, source: a, typedSitesMentionRef: r })),
            (s[8] = t),
            (s[9] = a),
            (s[10] = o),
            (s[11] = r),
            (s[12] = l))
          : (l = s[12]),
        l
      )
    }
    function ee(e) {
      let t,
        a,
        o,
        r,
        l,
        u,
        p,
        m,
        h,
        g,
        v = (0, n.c)(50),
        {
          backgroundAgents: y,
          className: w,
          chromeVariant: C,
          fixedSectionHeaders: x,
          enableFloatingWorkMenu: A,
          excludedAgentConversationIds: M,
          excludedThreadReferences: I,
          excludedPluginId: S,
          hostId: E,
          isHomeMenu: R,
          keyboardEventTarget: _,
          leadingItems: k,
          pluginHostId: P,
          onAddContext: N,
          onRequestClose: L,
          onUpdateSelectedMention: F,
          placement: B,
          query: V,
          rankingContext: $,
          fileSearchRootPaths: J,
          skillRoots: ee,
          threadSearchHostId: ea,
          threadSearchRoots: ei,
          typedSitesMentionRef: es,
          source: ec,
        } = e
      v[0] !== y ? ((t = void 0 === y ? [] : y), (v[0] = y), (v[1] = t)) : (t = v[1])
      let eu = t,
        ed = void 0 === C ? "default" : C,
        ep = void 0 !== x && x
      v[2] !== M ? ((a = void 0 === M ? [] : M), (v[2] = M), (v[3] = a)) : (a = v[3])
      let em = a
      v[4] !== I ? ((o = void 0 === I ? [] : I), (v[4] = I), (v[5] = o)) : (o = v[5])
      let ef = o,
        eh = void 0 !== R && R,
        eg = void 0 === B ? "top" : B,
        ev = void 0 === ea ? E : ea,
        ey = (0, s.gh)(O.PR),
        ew = (0, b.Zj)("2163293173"),
        eb = (0, d.A)(),
        eC = (0, f.Zp)(),
        ex = (0, s.Ul)(U.$7),
        eA = (0, D.Tq)()
      v[6] !== E ? ((r = { hostId: E }), (v[6] = E), (v[7] = r)) : (r = v[7])
      let eM = (0, j.J)(r),
        eI = (0, K.a)(),
        eS = (0, K.l)(eI, el),
        eE = [...(void 0 === k ? [] : k)]
      if (ew && void 0 !== A && A && eS) {
        if (ex) {
          let e
          ;(v[8] !== ey
            ? ((e = () =>
                ey.set(
                  W.x,
                  (0, H.i)(ey, {
                    libraryOrigin: "CHATGPT_FILE_LIBRARY_ORIGIN_COMPOSER_MENU",
                    entryPoint: "CHATGPT_FILE_LIBRARY_ENTRY_POINT_COMPOSER",
                  }),
                )),
              (v[8] = ey),
              (v[9] = e))
            : (e = v[9]),
            eE.push({
              type: "action",
              key: "context-action:add-library-files",
              label: eA
                ? eb.formatMessage({
                    id: "chatgptConversations.composer.browseLibraryFiles.space",
                    defaultMessage: "Add Space files",
                    description:
                      "Action in the ChatGPT composer resource menu that opens the Space file picker. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                  })
                : eb.formatMessage({
                    id: "chatgptConversations.composer.addFromLibrary",
                    defaultMessage: "Add from library",
                    description: "Action in the browser Chat composer resource menu that opens the file library picker",
                  }),
              detail: null,
              icon: eA ? { 16: T.HPc, 20: T.Mpc } : { 16: T.W5w, 20: T.baR },
              action: e,
            }))
        }
        eM && eE.push((0, Y.E)(ey, eC, eb, E))
      }
      let eR = (0, K.l)(eI, er),
        e_ = (0, c.useRef)(null)
      v[10] !== ef || v[11] !== V || v[12] !== ev || v[13] !== ei
        ? ((l = { excludedThreadReferences: ef, hostId: ev, query: V, roots: ei }),
          (v[10] = ef),
          (v[11] = V),
          (v[12] = ev),
          (v[13] = ei),
          (v[14] = l))
        : (l = v[14])
      let eT = (0, Z.q)(l),
        ek = ec?.kind === "at-mention-category" ? ec.category : void 0
      v[15] !== eu ||
      v[16] !== em ||
      v[17] !== S ||
      v[18] !== J ||
      v[19] !== E ||
      v[20] !== P ||
      v[21] !== V ||
      v[22] !== $ ||
      v[23] !== ee ||
      v[24] !== ek ||
      v[25] !== eT
        ? ((u = {
            expandedCategory: ek,
            backgroundAgents: eu,
            excludedAgentConversationIds: em,
            excludedPluginId: S,
            hostId: E,
            pluginHostId: P,
            query: V,
            rankingContext: $,
            roots: J,
            skillRoots: ee,
            threadSource: eT,
          }),
          (v[15] = eu),
          (v[16] = em),
          (v[17] = S),
          (v[18] = J),
          (v[19] = E),
          (v[20] = P),
          (v[21] = V),
          (v[22] = $),
          (v[23] = ee),
          (v[24] = ek),
          (v[25] = eT),
          (v[26] = u))
        : (u = v[26])
      let { sections: eO, mentionablePlugins: eP } = (0, Q.aw)(u),
        eN =
          "work" === $ && ec?.kind !== "at-mention-category"
            ? (0, X.P)({
                contextSections: eO.filter(eo),
                customGptSection: null,
                items: eE,
                locale: eb.locale,
                mentionablePlugins: eP,
                pluginItems: [],
                pluginSections: eO.filter(en),
                query: V,
                source: ec,
                systemHintSurface: "tpp",
              })
            : (0, G.Zg)(
                (0, G._d)(eO, ec),
                V,
                ec?.kind === "at-mention-category" && "spaces" === ec.category ? [] : eE,
                !1,
                $,
                ec?.kind === "at-mention-category" ? 20 : void 0,
              ),
        eL = eN.some(et)
      v[27] !== ey
        ? ((p = () => {
            ;(0, q.Q_)(ey, {
              action: q.lX.CODEX_APPGEN_INTERACTION_ACTION_MENTION_SUGGESTIONS_LOADED,
              source: q.Mz.CODEX_APPGEN_INTERACTION_SOURCE_AT_MENTION,
            })
          }),
          (v[27] = ey),
          (v[28] = p))
        : (p = v[28])
      let eF = (0, c.useEffectEvent)(p)
      return (
        v[29] !== eL || v[30] !== eF || v[31] !== eR || v[32] !== es
          ? ((m = () => {
              if (null == eR || es?.current !== eR) {
                e_.current = null
                return
              }
              eL && e_.current !== eR && ((e_.current = eR), eF())
            }),
            (v[29] = eL),
            (v[30] = eF),
            (v[31] = eR),
            (v[32] = es),
            (v[33] = m))
          : (m = v[33]),
        v[34] !== eL || v[35] !== eR || v[36] !== es
          ? ((h = [eL, eR, es]), (v[34] = eL), (v[35] = eR), (v[36] = es), (v[37] = h))
          : (h = v[37]),
        (0, c.useEffect)(m, h),
        v[38] !== ed ||
        v[39] !== w ||
        v[40] !== ep ||
        v[41] !== eh ||
        v[42] !== _ ||
        v[43] !== N ||
        v[44] !== L ||
        v[45] !== F ||
        v[46] !== eg ||
        v[47] !== V ||
        v[48] !== eN
          ? ((g = (0, i.jsx)(z.yl, {
              className: w,
              chromeVariant: ed,
              fixedSectionHeaders: ep,
              isHomeMenu: eh,
              keyboardEventTarget: _,
              onAddContext: N,
              onRequestClose: L,
              onUpdateSelectedMention: F,
              placement: eg,
              query: V,
              sections: eN,
            })),
            (v[38] = ed),
            (v[39] = w),
            (v[40] = ep),
            (v[41] = eh),
            (v[42] = _),
            (v[43] = N),
            (v[44] = L),
            (v[45] = F),
            (v[46] = eg),
            (v[47] = V),
            (v[48] = eN),
            (v[49] = g))
          : (g = v[49]),
        g
      )
    }
    function et(e) {
      return e.items.some(ea)
    }
    function ea(e) {
      let { key: t, searchTerms: a } = e
      return t.startsWith("site:") || t === `plugin:plugin://${V.$n}` || (t.startsWith("app:") && a?.some(ei))
    }
    function ei(e) {
      return "sites" === e.trim().toLowerCase()
    }
    function en(e) {
      return "plugins" === e.id || "native-apps" === e.id
    }
    function eo(e) {
      return "plugins" !== e.id && "native-apps" !== e.id
    }
    function er(e) {
      let t = $.Gq.getState(e.view.state)
      return t?.active === !0 && "typed" === t.activation && "at-mention" === t.kind && "@" === t.trigger
        ? (t.range?.from ?? null)
        : null
    }
    function el(e) {
      let t = $.Gq.getState(e.view.state)
      return t?.active === !0 && "synthetic" === t.activation && "+" === t.trigger
    }
    var es = a("m339"),
      ec = a("By8V"),
      eu = a("Itrj")
    function ed(e) {
      let t,
        a,
        o = (0, n.c)(7),
        { commands: r, onCommandSelect: s } = e
      if (o[0] !== r || o[1] !== s) {
        let e
        t = []
        let a = null,
          n = []
        o[3] !== s
          ? ((e = (e) =>
              (0, i.jsx)(
                eu.y,
                {
                  value: e.title,
                  title: e.title,
                  description: e.description,
                  onSelect: () => {
                    s(e)
                  },
                  LeftIcon: e.Icon,
                  leftAccessory: e.leftAccessory,
                  RightIcon: e.RightIcon,
                },
                e.id,
              )),
            (o[3] = s),
            (o[4] = e))
          : (e = o[4])
        let c = e,
          u = () => {
            0 !== n.length &&
              (a
                ? t.push(
                    (0, i.jsx)(
                      l.uB.Group,
                      {
                        heading: (0, i.jsx)("span", {
                          className: "block px-2 pt-2 text-sm text-codex-description",
                          children: a,
                        }),
                        className: "flex flex-col",
                        style: { gap: "var(--spacing)" },
                        children: n.map(c),
                      },
                      `group-${a}`,
                    ),
                  )
                : t.push(...n.map(c)),
              (n = []))
          }
        ;(r.forEach((e) => {
          let t = e.group ?? null
          ;(t !== a && (u(), (a = t)), n.push(e))
        }),
          u(),
          (o[0] = r),
          (o[1] = s),
          (o[2] = t))
      } else t = o[2]
      return 0 === t.length
        ? null
        : (o[5] !== t ? ((a = (0, i.jsx)(i.Fragment, { children: t })), (o[5] = t), (o[6] = a)) : (a = o[6]), a)
    }
    var ep = a("QT6E"),
      em = a("SmSR"),
      ef = a("Cmxc"),
      eh = a("h0jD")
    a("Obi3")
    let eg = (0, s.un)(O.PR, ({ get: e }) => e(ec.vJ).filter((e) => "side" !== e.id))
    function ev(e) {
      let t,
        a,
        m,
        g,
        v,
        y,
        w,
        C,
        x,
        A,
        I,
        S,
        q,
        j,
        D,
        U,
        H,
        B,
        V,
        z,
        Y,
        W,
        X,
        G,
        Q,
        Z,
        ee,
        et,
        ea,
        ei,
        en,
        eo,
        er,
        el = (0, n.c)(113),
        {
          ContextualSuggestionOverlay: eu,
          additionalAutocompleteContent: ev,
          browserTabMentionConversationId: ew,
          contextualSuggestions: eb,
          contextualSuggestionUi: eC,
          hideSideSlashCommand: ex,
          isHomeMenu: eA,
          keyboardVariant: eM,
          onRecordAudio: eI,
          overlayAnchorRef: eS,
          placement: eE,
          showCompletionPreview: eR,
          skillSuggestions: e_,
          triggerAnchor: eT,
        } = e,
        ek = void 0 === eu ? E.$ : eu,
        eO = void 0 === ew ? null : ew,
        eP = void 0 !== eA && eA,
        eN = void 0 === eE ? "top" : eE,
        eL = void 0 !== eR && eR,
        eF = (0, s.gh)(O.PR),
        eq = (0, b.Zj)("2163293173"),
        ej = (0, s.Ul)(h.d_),
        eD = "/hotkey-window" === (0, f.zy)().pathname,
        eU = (0, K.a)()
      el[0] !== eU ? ((t = () => ({ controller: eU, active$: (0, L.XN)(eU) })), (el[0] = eU), (el[1] = t)) : (t = el[1])
      let [eH, eB] = (0, c.useState)(t)
      eH.controller !== eU && eB({ controller: eU, active$: (0, L.XN)(eU) })
      let eV = (0, s.Ul)(eH.active$)
      ;(el[2] !== eH.active$ || el[3] !== eF
        ? ((a = () => (0, L.qb)(eF, eH.active$)),
          (m = [eF, eH.active$]),
          (el[2] = eH.active$),
          (el[3] = eF),
          (el[4] = a),
          (el[5] = m))
        : ((a = el[4]), (m = el[5])),
        (0, c.useLayoutEffect)(a, m))
      let ez = eC?.source?.kind === "mcp-extension" ? "top" : eN
      el[6] !== eO || el[7] !== eF.value
        ? ((g = (0, O.oU)(eF.value, eO)), (el[6] = eO), (el[7] = eF.value), (el[8] = g))
        : (g = el[8])
      let eY = g,
        eW = (0, c.useRef)(null),
        eX = (0, s.Ul)(L.H4)
      el[9] !== eC?.active || el[10] !== eX
        ? ((v = (e) => (eX || eC?.active === !0) && (0, ec.KJ)(e.getText())),
          (el[9] = eC?.active),
          (el[10] = eX),
          (el[11] = v))
        : (v = el[11])
      let eG = (0, K.l)(eU, v, "document"),
        e$ = (0, d.A)(),
        [eK, eQ] = (0, c.useState)(null),
        eZ = (0, s.Ul)(L.UE),
        [eJ, e0] = (0, c.useState)(""),
        [e1, e2] = (0, c.useState)(""),
        e3 = (0, ef.O)(),
        e4 = eD ? "z-40" : (0, r.A)("left-0 right-0", eP ? "z-50" : "z-30"),
        e5 = eP && "composer-home-top-menu"
      el[12] !== e5 ? ((y = (0, r.A)("mb-1.5 origin-bottom", e5)), (el[12] = e5), (el[13] = y)) : (y = el[13])
      let e6 = y
      el[14] !== eU
        ? ((w = () => {
            requestAnimationFrame(() => {
              eU.focus()
            })
          }),
          (el[14] = eU),
          (el[15] = w))
        : (w = el[15])
      let e7 = w
      el[16] !== e7 || el[17] !== eF
        ? ((C = () => {
            ;(eF.set(L.UE, null), e7())
          }),
          (el[16] = e7),
          (el[17] = eF),
          (el[18] = C))
        : (C = el[18])
      let e8 = C
      el[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = () => {
            ;(e0(""), e2(""), eQ(null))
          }),
          (el[19] = x))
        : (x = el[19])
      let e9 = x
      el[20] !== eX || el[21] !== eF
        ? ((A = () => {
            ;(eX || (0, k.yy)(eF, o.CodexSlashCommandsMenuOpened, {}), eF.set(L.H4, !0))
          }),
          (el[20] = eX),
          (el[21] = eF),
          (el[22] = A))
        : (A = el[22])
      let te = A
      el[23] !== e7 || el[24] !== eF
        ? ((I = () => {
            ;(e9(), eF.set(L.H4, !1), e7())
          }),
          (el[23] = e7),
          (el[24] = eF),
          (el[25] = I))
        : (I = el[25])
      let tt = I
      el[26] !== e7 || el[27] !== te || el[28] !== eF
        ? ((S = (e) => {
            if ((e9(), "bare" === e.presentation)) {
              ;(eF.set(L.UE, e.id), eF.set(L.H4, !1), e7())
              return
            }
            ;(eF.set(L.UE, null), eQ(e), te())
          }),
          (el[26] = e7),
          (el[27] = te),
          (el[28] = eF),
          (el[29] = S))
        : (S = el[29])
      let ta = S
      el[30] !== eU.view || el[31] !== eF
        ? ((q = (e) => {
            ;(e9(), eF.set(L.UE, null), eF.set(L.H4, !1), (0, $.xb)(eU.view, e.id))
          }),
          (el[30] = eU.view),
          (el[31] = eF),
          (el[32] = q))
        : (q = el[32])
      let ti = q,
        tn = void 0 !== ex && ex ? eg : ec.vJ,
        to = !eq || eX || null != eZ || eV || eC?.active === !0
      ;(el[33] !== eF
        ? ((j = (e) => {
            ;(0, ec.sW)(eF, e, "autocomplete")
          }),
          (el[33] = eF),
          (el[34] = j))
        : (j = el[34]),
        el[35] !== eU || el[36] !== ta || el[37] !== tn || el[38] !== to || el[39] !== j
          ? ((D = {
              composerController: eU,
              slashCommands: tn,
              observeCommands: to,
              onCommandSelect: j,
              onOpenCommandContent: ta,
            }),
            (el[35] = eU),
            (el[36] = ta),
            (el[37] = tn),
            (el[38] = to),
            (el[39] = j),
            (el[40] = D))
          : (D = el[40]))
      let tr = (0, em.H)(D),
        tl = eX || null != eZ || tr.ui?.active === !0,
        ts = (0, ec.lQ)(tr.allCommands, eG),
        tc = (0, ec.uy)(ts, "/")
      el[41] !== eZ || el[42] !== tr.allCommands
        ? ((U = eZ ? (tr.allCommands.find((e) => e.id === eZ) ?? null) : null),
          (el[41] = eZ),
          (el[42] = tr.allCommands),
          (el[43] = U))
        : (U = el[43])
      let tu = U,
        td = eP && tl
      ;(el[44] !== e3 || el[45] !== eN || el[46] !== td
        ? ((H = { element: e3, isEnabled: td, placement: eN }),
          (el[44] = e3),
          (el[45] = eN),
          (el[46] = td),
          (el[47] = H))
        : (H = el[47]),
        (0, eh.T)(H),
        el[48] !== eU || el[49] !== tr
          ? ((B = (e) => {
              if ((0, $.rK)(e)) {
                if ("browser-autocomplete" === e.kind)
                  return void ("submit" === e.type &&
                  "insert-mention" === e.action &&
                  $.Gq.getState(eU.view.state)?.active === !0
                    ? eU.queueBrowserAutocompleteSubmission(e)
                    : "close" === e.type && eU.clearBrowserAutocompleteSubmission())
                "slash-command" === e.kind && tr.handleSlashCommandEvent(e.type)
              }
            }),
            (el[48] = eU),
            (el[49] = tr),
            (el[50] = B))
          : (B = el[50]))
      let tp = (0, c.useEffectEvent)(B)
      ;(el[51] !== eU.view.dom || el[52] !== eU.view.state
        ? ((V = () => {
            let e = (e) => {
              "insertText" === e.inputType && "@" === e.data && (eW.current = eU.view.state.selection.from)
            }
            return (
              eU.view.dom.addEventListener("beforeinput", e, !0),
              () => {
                eU.view.dom.removeEventListener("beforeinput", e, !0)
              }
            )
          }),
          (el[51] = eU.view.dom),
          (el[52] = eU.view.state),
          (el[53] = V))
        : (V = el[53]),
        el[54] !== eU ? ((z = [eU]), (el[54] = eU), (el[55] = z)) : (z = el[55]),
        (0, c.useEffect)(V, z),
        el[56] !== eC?.active
          ? ((Y = () => {
              eC?.active !== !0 && (eW.current = null)
            }),
            (el[56] = eC?.active),
            (el[57] = Y))
          : (Y = el[57]))
      let tm = eC?.active
      ;(el[58] !== tm ? ((W = [tm]), (el[58] = tm), (el[59] = W)) : (W = el[59]),
        (0, c.useEffect)(Y, W),
        el[60] !== eU.eventEmitter || el[61] !== tp || el[62] !== eF
          ? ((X = () => {
              let e = (e) => {
                tp(e)
              }
              return (
                eU.eventEmitter.addListener("composer-suggestion-ui-event", e),
                () => {
                  ;(eU.eventEmitter.removeListener("composer-suggestion-ui-event", e),
                    eF.set(L.H4, !1),
                    eF.set(L.UE, null),
                    eF.set(L.IH, null))
                }
              )
            }),
            (el[60] = eU.eventEmitter),
            (el[61] = tp),
            (el[62] = eF),
            (el[63] = X))
          : (X = el[63]),
        el[64] !== eU || el[65] !== eF ? ((G = [eU, eF]), (el[64] = eU), (el[65] = eF), (el[66] = G)) : (G = el[66]),
        (0, c.useEffect)(X, G))
      let tf = [...(eb?.leadingItems ?? [])]
      eC?.active &&
        "+" === eC.trigger &&
        null != eI &&
        tf.push({
          type: "action",
          key: "context-action:record-audio",
          label: e$.formatMessage({
            id: "composer.contextAction.recordAudio",
            defaultMessage: "Audio",
            description: "Composer add-menu action that starts recording an audio note with a transcript",
          }),
          detail: e$.formatMessage({
            id: "composer.contextAction.recordAudioDescription",
            defaultMessage: "Record and send audio",
            description: "Hint beside the Audio action in the composer add menu",
          }),
          icon: { 16: T.ERJ, 20: T.n1L },
          searchTerms: ["audio", "record", "dictate"],
          action: eI,
        })
      let th = s.Ui,
        tg = P.K
      ;(el[67] !== eY ? ((Q = { conversationId: eY }), (el[67] = eY), (el[68] = Q)) : (Q = el[68]),
        el[69] !== ev || el[70] !== tl || el[71] !== eV
          ? ((Z = "function" == typeof ev ? ev(eV || tl) : ev),
            (el[69] = ev),
            (el[70] = tl),
            (el[71] = eV),
            (el[72] = Z))
          : (Z = el[72]),
        el[73] !== eC?.active || el[74] !== tl || el[75] !== ej || el[76] !== eN || el[77] !== eL
          ? ((ee = null),
            (el[73] = eC?.active),
            (el[74] = tl),
            (el[75] = ej),
            (el[76] = eN),
            (el[77] = eL),
            (el[78] = ee))
          : (ee = el[78]),
        el[79] !== eF.value ? ((et = (0, O.eL)(eF.value)), (el[79] = eF.value), (el[80] = et)) : (et = el[80]),
        el[81] !== eY || el[82] !== eU || el[83] !== eN || el[84] !== et
          ? ((ea = (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(M, {
                browserConversationId: eY,
                composerController: eU,
                composerId: et,
                placement: eN,
              }),
            })),
            (el[81] = eY),
            (el[82] = eU),
            (el[83] = eN),
            (el[84] = et),
            (el[85] = ea))
          : (ea = el[85]))
      let tv = eb
        ? (0, i.jsx)(ek, {
            anchorRef: eS,
            isActive: eC?.active === !0,
            placement: ez,
            spacing: "compact",
            triggerAnchor: eT,
            children: (0, i.jsx)(N.s, {
              suggestion: eC,
              triggerAnchor: eT,
              children:
                eC?.active === !0
                  ? (0, i.jsx)(J, {
                      ...eb,
                      typedSitesMentionRef: eW,
                      leadingItems: (0, F.l)(ts, tf, ti),
                      placement: ez,
                      query: eC.query,
                      source: eC.source,
                    })
                  : null,
            }),
          })
        : null
      el[86] !== eP || el[87] !== eS || el[88] !== eN || el[89] !== e_
        ? ((ei = e_
            ? (0, i.jsx)(es.q, {
                ...e_,
                anchorRef: eS,
                isHomeMenu: eP,
                placement: eN,
                portalRoot: null == eS ? "dialog" : "body",
                trackAnchorPosition: null != eS,
                zIndexClassName: null == eS ? void 0 : "z-30",
              })
            : null),
          (el[86] = eP),
          (el[87] = eS),
          (el[88] = eN),
          (el[89] = e_),
          (el[90] = ei))
        : (ei = el[90])
      let ty = tr.ui?.active === !0
      ;(el[91] !== eP || el[92] !== eM || el[93] !== eN || el[94] !== tr
        ? ((en = (0, i.jsx)(ep.D, { autocomplete: tr, isHomeMenu: eP, keyboardVariant: eM, placement: eN })),
          (el[91] = eP),
          (el[92] = eM),
          (el[93] = eN),
          (el[94] = tr),
          (el[95] = en))
        : (en = el[95]),
        el[96] !== eS || el[97] !== eN || el[98] !== ty || el[99] !== en
          ? ((eo = (0, i.jsx)(E.$, { anchorRef: eS, isActive: ty, placement: eN, children: en })),
            (el[96] = eS),
            (el[97] = eN),
            (el[98] = ty),
            (el[99] = en),
            (el[100] = eo))
          : (eo = el[100]))
      let tw =
          eX && null != e3
            ? (0, i.jsxs)(R.rZ, {
                title: e$.formatMessage(ey.dialogTitle),
                container: e3,
                open: !0,
                shouldFilter: eK?.Content != null,
                label: e$.formatMessage({
                  id: "composer.slashCommands.dialogLabel",
                  defaultMessage: "Slash command menu",
                  description: "Accessibility label for the slash command dialog",
                }),
                overlayClassName: "hidden",
                expandedTopTray: eD,
                className: eD ? "origin-bottom" : e6,
                contentClassName: (0, r.A)(
                  "absolute bottom-0 bg-transparent p-0 shadow-none outline-none focus-visible:outline-none",
                  e4,
                ),
                value: e1,
                onValueChange: e2,
                onOpenChange: (e) => {
                  e || tt()
                },
                children: [
                  (0, i.jsx)(_.L3, { className: "sr-only", children: (0, i.jsx)(p.A, { ...ey.dialogTitle }) }),
                  (0, i.jsx)(_.rr, {
                    className: "sr-only",
                    children: (0, i.jsx)(p.A, {
                      id: "composer.slashCommands.dialogDescription",
                      defaultMessage: "Search and run slash commands",
                      description: "Description for the slash command dialog",
                    }),
                  }),
                  (0, i.jsx)(l.uB.Input, {
                    placeholder: e$.formatMessage({
                      id: "composer.slashCommands.inputPlaceholder",
                      defaultMessage: "Search",
                      description: "Placeholder for the slash command input",
                    }),
                    value: eJ,
                    onValueChange: e0,
                  }),
                  (0, i.jsxs)(l.uB.List, {
                    children: [
                      eK?.Content
                        ? (0, i.jsx)(eK.Content, { onItemsChanged: () => e2(""), onClose: tt })
                        : (0, i.jsx)(ed, {
                            commands: (0, ec.RE)(tc, eJ),
                            onCommandSelect: (e) => {
                              ;(async () => {
                                ;((0, ec.sW)(eF, e, "dialog"), e.Content)
                                  ? ta(e)
                                  : e.submenu
                                    ? ti(e)
                                    : (await e.onSelect?.(), tt())
                              })()
                            },
                          }),
                      (0, i.jsx)(l.uB.Empty, {
                        children: (0, i.jsx)(p.A, {
                          id: "composer.slashCommands.noResults",
                          defaultMessage: "No commands",
                          description: "Shown when no slash commands match",
                        }),
                      }),
                    ],
                  }),
                ],
              })
            : null,
        tb =
          tu?.Content && null != e3
            ? (0, u.createPortal)(
                (0, i.jsx)(R.Vs, {
                  expandedTopTray: eD,
                  className: (0, r.A)(
                    "absolute bottom-0 bg-transparent p-0 shadow-none outline-none focus-visible:outline-none",
                    e4,
                  ),
                  children: (0, i.jsx)(R.T$, {
                    className: eD ? "origin-bottom" : e6,
                    expandedTopTray: eD,
                    paddedBody: eD,
                    children: (0, i.jsx)(tu.Content, { onItemsChanged: () => e2(""), onClose: e8 }),
                  }),
                }),
                e3,
              )
            : null
      return (
        el[101] !== th ||
        el[102] !== tg ||
        el[103] !== Q ||
        el[104] !== Z ||
        el[105] !== ee ||
        el[106] !== ea ||
        el[107] !== tv ||
        el[108] !== ei ||
        el[109] !== eo ||
        el[110] !== tw ||
        el[111] !== tb
          ? ((er = (0, i.jsxs)(th, { scope: tg, value: Q, children: [Z, ee, ea, tv, ei, eo, tw, tb] })),
            (el[101] = th),
            (el[102] = tg),
            (el[103] = Q),
            (el[104] = Z),
            (el[105] = ee),
            (el[106] = ea),
            (el[107] = tv),
            (el[108] = ei),
            (el[109] = eo),
            (el[110] = tw),
            (el[111] = tb),
            (el[112] = er))
          : (er = el[112]),
        er
      )
    }
    let ey = (0, m.YK)({
      dialogTitle: {
        id: "composer.slashCommands.dialogTitle",
        defaultMessage: "Slash commands",
        description: "Title for the slash command dialog",
      },
    })
  },
  rNLN(e, t, a) {
    var i = a("iRMi"),
      n = a("GO7r"),
      o = a("EzAb")
    a.d(
      t,
      {},
      {
        E: function (e, t, a, r) {
          return {
            type: "action",
            key: "context-action:browse-plugins",
            label: a.formatMessage({
              id: "composer.floatingWork.browsePlugins",
              defaultMessage: "Browse plugins",
              description:
                "Action in the floating Page Work composer add menu that opens the plugin directory to browse and install plugins",
            }),
            detail: null,
            icon: { 16: n.Dli, 20: n.wdY },
            action: () =>
              (0, o.z)(e, t, !0, i.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_OTHER, r),
          }
        },
      },
    )
  },
  EkcR(e, t, a) {
    var i = a("zTeN"),
      n = a("Sd8U")
    let o = (0, i.vP)(n.PR, void 0)
    a.d(t, {}, { x: o })
  },
  FhiO(e, t, a) {
    var i = a("KUdL"),
      n = a.n(i),
      o = a("By8V")
    let r = [
      "context-action:pick-local-files",
      "context-action:record-audio",
      "context-action:capture-appshot",
      "command:project",
      "command:goal",
      "command:plan-mode",
      "context-action:record-skill",
    ]
    function l(e, t) {
      return (0, o.uy)(e, "@").flatMap((e) => {
        let a = null == e.submenu ? e.onSelect : () => t(e)
        return null == a
          ? []
          : [
              {
                action: a,
                detail: e.description ?? null,
                group: e.group,
                icon: e.Icon,
                iconElement: e.leftAccessory,
                key: `command:${e.id}`,
                label: e.title,
                searchTerms: e.searchAliases,
                type: "action",
              },
            ]
      })
    }
    a.d(
      t,
      {},
      {
        l: function (e, t, a) {
          return n()([...t, ...l(e, a)], (e) => {
            let t = r.indexOf(e.key)
            return -1 === t ? 1 / 0 : t
          })
        },
        p: l,
      },
    )
  },
  oC9a(e, t, a) {
    a.d(t, { P: () => m })
    var i = a("pkoC"),
      n = a.n(i),
      o = a("KUdL"),
      r = a.n(o),
      l = a("i5ac"),
      s = a.n(l),
      c = a("Qgfj"),
      u = a("LQlv"),
      d = a("XNvh"),
      p = a("UN1G")
    function m({
      contextSections: e,
      customGptSection: t,
      items: a,
      locale: i,
      mentionablePlugins: o,
      pluginItems: l,
      pluginSections: f,
      query: h,
      source: g,
      systemHintSurface: v,
    }) {
      let y,
        [w, b] = n()(a, (e) => e.key.startsWith("command:browser-skill-")),
        [C, x] = n()(b, (e) => e.key.startsWith("command:chatgpt-system-hint:") || "command:sketch" === e.key),
        A = {
          id: "plugins",
          title: (0, c.zR)({
            id: "composer.atMentionList.plugins",
            defaultMessage: "Plugins",
            description: "Section header for plugin results in the @ mention list.",
          }),
          items: s()([...l, ...C, ...f.flatMap((e) => e.items)], (e) => e.key),
          emptyState: f.find((e) => null != e.emptyState)?.emptyState ?? null,
          isError: f.some((e) => e.isError),
          isLoading: f.some((e) => e.isLoading),
        },
        M = {
          id: "chatgpt-context",
          title: (0, c.zR)({
            id: "chatgptConversations.composer.contextMenu.add",
            defaultMessage: "Add",
            description: "Section heading for actions in the ChatGPT composer add menu",
          }),
          items: x,
          emptyState: null,
          isLoading: !1,
        },
        I = {
          id: "skills",
          title: (0, c.zR)({
            id: "composer.atMentionList.skills",
            defaultMessage: "Skills",
            description: "Section header for skill results in the @ mention list.",
          }),
          items: w,
          emptyState: null,
          isLoading: !1,
        },
        S = h.trim().toLowerCase(),
        E = S.length > 0,
        R = !E && (null == g || "context-menu-search" === g.kind)
      if (R) {
        let e = (function ({ items: e, mentionablePlugins: t, systemHintSurface: a }) {
            let i = "chat" === a ? "connector_openai_deep_research" : "connector_openai_deep_research_work",
              n = e.find((e) => e.key === `app:${(0, d.nw)(i)}`)
            if (null != n) return n
            let o = t.find((e) => e.canonicalAppId === i || e.appIds?.includes(i))
            return null == o ? null : (e.find((e) => e.key === `plugin:${(0, d.vt)(o.plugin.id)}`) ?? null)
          })({ items: [...M.items, ...A.items], mentionablePlugins: o, systemHintSurface: v }),
          a = [
            "chatgpt-context:add-photos",
            "chatgpt-context:add-files",
            "context-action:pick-local-files",
            "chatgpt-context:add-library-files",
            "chatgpt-context:create-image",
            "context-action:record-audio",
            "chatgpt-context:upgrade-to-plus",
            "chatgpt-context:add-browser-tabs",
            "chatgpt-context:web-search",
            "command:project",
            e?.key,
            "chatgpt-context:camera",
          ],
          [i, l] = n()(M.items, (e) => a.includes(e.key)),
          [s, c] = n()(A.items, (e) => a.includes(e.key))
        y = [
          { ...M, id: "chatgpt-primary", items: r()([...i, ...s], (e) => a.indexOf(e.key)) },
          { ...A, items: c.slice(0, 7) },
          { ...M, items: l },
          ...(null == t ? [] : [t]),
          I,
        ]
      } else
        y = E
          ? [M, A, ...(null == t ? [] : [t]), I].map((e) => ({
              ...e,
              items:
                "plugins" === e.id
                  ? (0, u.O)(e.items, h, i)
                  : r()(
                      e.items.map((e) => ({
                        item: e,
                        score: Math.max(
                          ...[e.label, e.detail ?? "", ...(e.searchTerms ?? []), ...(e.searchKeywords ?? [])].map((e) =>
                            (0, p.gr)(e, h),
                          ),
                        ),
                      })),
                      ({ score: e }) => -e,
                    )
                      .filter(({ score: e }) => e > 0)
                      .map(({ item: e }) => e),
            }))
          : [M, { ...A, items: A.items.slice(0, 7) }, ...(null == t ? [] : [t]), I]
      let _ = y.filter((e) => e.items.length > 0).length,
        T = [],
        k = (e) => {
          if (!E) return e
          let [t, a] = n()(e.items, (e) =>
            [e.label, ...(e.searchTerms ?? [])].some((e) => e.trim().toLowerCase() === S),
          )
          return (T.push(...t), { ...e, items: a })
        },
        O = [
          ...y.map(k).map((e) => {
            let t = "plugins" === e.id ? 3 : 2
            return (
              1 === _ && (t = 7),
              { ...e, showTitle: !R && e.showTitle, items: 1 === h.trim().length ? e.items.slice(0, t) : e.items }
            )
          }),
          ...e.map(k).map((e) => (R ? { ...e, showTitle: !1 } : e)),
        ],
        [P, N] = n()(O, (e) => "skills" === e.id)
      return 0 === T.length
        ? [...N, ...P]
        : [{ id: "exact-matches", title: "", showTitle: !1, items: T, emptyState: null, isLoading: !1 }, ...N, ...P]
    }
  },
  Hvvy(e, t, a) {
    let i = new WeakMap()
    a.d(t, {}, { Y: i })
  },
  sXdr(e, t, a) {
    var i = a("DBCl"),
      n = a("ZjPZ"),
      o = a("Dgwo"),
      r = a("uNQ5")
    function l(e, t, a) {
      for (let i of a) c(e, t, i.path)
    }
    function s(e, t, a) {
      for (let i of a) null == i.upload && c(e, (0, n.FZ)(i, t), i.file.path)
    }
    function c(e, t, a) {
      try {
        ;(0, o.V)(e, t)
          .removePastedTextAttachment(a)
          .catch(() => void 0)
      } catch {}
    }
    a.d(
      t,
      {},
      {
        OS: async function (e, t) {
          let o
          if (!(0, i.av0)(e.characterCount)) throw Error("Pasted text attachment cannot be restored")
          if (null != e.upload) {
            let { fetchChatGptFileBlob: t } = await Promise.resolve().then(a.bind(a, "vldH")),
              i = await t({ conversationId: null, target: { type: "file-id", fileId: e.upload.fileId } })
            o = await i.text()
          } else ({ contents: o } = await (0, r.tA)({ hostId: (0, n.FZ)(e, t), path: e.file.path }))
          if (o.length > i.yIr) throw Error("Pasted text attachment is too large to restore")
          return o
        },
        Yr: function (e, t, a, i) {
          ;(l(e, t, a), s(e, t, i))
        },
        dT: s,
        k7: c,
        k8: function (e, t) {
          let a = t?.filter((t) => e.some((e) => e.path === t))
          return a?.length ? a : void 0
        },
        kf: async function ({ scope: e, executionHostId: t, filename: a, label: i, shouldDiscard: n, text: r }) {
          let l = await (0, o.V)(e, t).createPastedTextAttachment(r, i, a)
          return n() ? (c(e, t, l.path), null) : l
        },
        xm: l,
      },
    )
  },
  BFUY(e, t, a) {
    var i = a("DBCl")
    a.d(
      t,
      {},
      {
        F2: function (e, t) {
          switch (e) {
            case ":read-only":
              return "read-only"
            case ":workspace":
              return t
            case ":danger-full-access":
              return "full-access"
            default:
              return null
          }
        },
        bN: function ({
          availableAgentModes: e,
          preferredNonFullAccessMode: t,
          isGuardianModeAvailable: a,
          isConfigDataPending: i,
          configNonFullAccessMode: n,
        }) {
          let o =
              null != t &&
              ("granular" !== n || "auto" !== t) &&
              ("auto" !== n || "granular" !== t) &&
              e.includes(t) &&
              ("guardian-approvals" !== t || a)
                ? t
                : null,
            r = null != t && null == o
          return {
            canSelectGuardianMode: a,
            resolvedNonFullAccessMode: o ?? n,
            validPreferredNonFullAccessMode: o,
            shouldClearPreferredNonFullAccessMode: !i && (r || (!e.includes("custom") && null != o && o === n)),
          }
        },
        d_: function (e, t, a, i = null, n = null) {
          return null != n && e.includes(n)
            ? n
            : null != i && e.includes(i)
              ? i
              : null != t && e.includes(t)
                ? t
                : e.includes("custom")
                  ? "custom"
                  : !e.some((e) => "full-access" !== e && "custom" !== e) && e.includes("full-access")
                    ? "full-access"
                    : a
        },
        lS: function ({
          isConfigDataPending: e,
          requirements: t,
          resolvedConfig: a,
          isGuardianApprovalEnabledByStatsig: n,
          isGuardianDefaultEnabledByStatsig: o = !1,
          isAutoReviewRequiredForSelectedModel: r = !1,
          hasAuthoritativeGuardianApprovalDefault: l = !1,
          defaultWorkspaceWriteMode: s = "auto",
          showFullAccessInComposer: c,
        }) {
          let u,
            d = e ? ["read-only", "auto", "granular", "full-access", "custom"] : (0, i.L9S)(t, a),
            p = (0, i.bAH)(a ?? void 0) ?? !0,
            m = r || n || l,
            f = d.filter((e) => "guardian-approvals" !== e),
            h = d.includes("guardian-approvals") && 0 === f.length,
            g = (m && p) || h ? d : f,
            v = g.includes("guardian-approvals"),
            y = g.filter((e) => "custom" !== e),
            w = (0, i.NsC)(a ?? void 0, s),
            b = "full-access" === w ? null : w,
            C =
              v &&
              ("auto" === w || ("granular" === w && a?.approval_policy == null)) &&
              ((o &&
                a?.approval_policy == null &&
                a?.sandbox_mode == null &&
                a?.approvals_reviewer == null &&
                (a?.model_provider ?? "openai") === "openai") ||
                (0, i.bzb)((0, i.Bnq)(a ?? void 0))),
            x = C ? "guardian-approvals" : w
          if (g.includes("custom") && null != x) {
            let e = (0, i.$5i)("custom", [], a),
              t = (0, i.$5i)(x, [], a)
            ;((0, i.weu)(e) === x &&
              (e.approvalsReviewer === t.approvalsReviewer ||
                ((0, i.bzb)(e.approvalsReviewer) && (0, i.bzb)(t.approvalsReviewer)))) ||
              (x = null)
          }
          let A = "full-access" === x && !1 === c,
            M = !e && null != x && g.includes(x) && !A ? g.filter((e) => "custom" !== e) : g,
            I = "custom" === (u = (0, i.ic_)(y)) ? "read-only" : u
          return (
            (r && v) || C ? (I = "guardian-approvals") : null != b && y.includes(b) && (I = b),
            {
              availableAgentModes: M,
              canShowCustom: M.includes("custom"),
              canUnlock: M.includes("full-access"),
              customEquivalentMode: x,
              isGuardianModeAvailable: v,
              isConfigDataPending: e,
              configNonFullAccessMode: I,
              showGuardianOption: m,
            }
          )
        },
        pl: function ({ defaultWorkspaceWriteMode: e, isWindowsSandboxRequired: t }) {
          return t ? "read-only" : e
        },
      },
    )
  },
  Y72c(e, t, a) {
    let i = (0, a("Nwp9").m3)("composer-permission-mode-visibility", !0)
    a.d(
      t,
      {},
      {
        I0: i,
        KZ: function ({ availableAgentModes: e, visibleAgentModes: t }) {
          return e.includes("custom") ? [...t, "custom"] : t
        },
        Mv: function ({
          canShowDefaultPermissions: e,
          canSelectGuardianMode: t,
          canShowConfigCustom: a,
          canShowConfigFullAccess: i,
          canShowGuardianOption: n,
          selectionAgentModes: o,
          visibleAgentModes: r,
        }) {
          let l = i && r.includes("full-access"),
            s = a && o.includes("custom")
          return {
            canShowCustom: s,
            canShowFullAccess: l,
            optionCount: +!!e + (n && t ? 1 : 0) + +!!l + +!!s,
            showGuardianOption: n,
          }
        },
        cT: function (e) {
          return "boolean" == typeof e ? e : (e?.["full-access"] ?? !0)
        },
        o4: function ({ availableAgentModes: e, showFullAccessInComposer: t }) {
          return e.filter((e) => {
            switch (e) {
              case "full-access":
                return t
              case "custom":
                return !1
              case "auto":
              case "granular":
              case "guardian-approvals":
              case "read-only":
                return !0
            }
          })
        },
      },
    )
  },
  xa8Q(e, t, a) {
    var i = a("SRbQ"),
      n = a("Bl5Q"),
      o = a("DBCl"),
      r = a("wTVm"),
      l = a("JpbF"),
      s = a("SPnB"),
      c = a("SGsN"),
      u = a("svjy"),
      d = a("GaA7"),
      p = a("Sd8U"),
      m = a("yI91"),
      f = a("WFY2"),
      h = a("A8Az"),
      g = a("bDfs"),
      v = a("TSib"),
      y = a("uIyc")
    async function w({ scope: e, file: t, onIdentityChanged: i, shouldDiscard: n, signal: o }) {
      let r = e.get(s.chatGptAuthenticatedAccountId$),
        l = e.get(s.o8)
      if (null == r) throw Error("File upload requires a ChatGPT account")
      let c = new AbortController(),
        u = e.watch((e) => {
          ;(e.get(s.chatGptAuthenticatedAccountId$) !== r || e.get(s.o8) !== l) && (c.abort(), i())
        }),
        d = () => {
          if ((o.throwIfAborted(), c.signal.throwIfAborted(), n()))
            throw new DOMException("File attachment canceled", "AbortError")
          if (e.get(s.chatGptAuthenticatedAccountId$) !== r || e.get(s.o8) !== l)
            throw new DOMException("File upload identity changed", "AbortError")
        }
      try {
        let { uploadCodexFileAttachment: i } = await a.e(117753).then(a.bind(a, "RyQl")),
          n = await i({ scope: e, file: t, beforeRequest: d, signal: AbortSignal.any([o, c.signal]) })
        return (d(), e.set(v.DL, { accountId: r, userId: l }), n)
      } finally {
        u()
      }
    }
    a.d(
      t,
      {},
      {
        G3: function (e, t) {
          let a = e.get(v.TM),
            i = e.get(v.CH),
            n = a[t]
          if (null == n) return
          let o = a.filter((e, a) => a !== t)
          ;((0, v.Rh)(e, "uploadedFileAttachments", o),
            (0, l.pA)(e, { label: g.z, transitionQueueKey: `composer-attachments:${(0, p.eL)(e.value)}` }, (t) => {
              t.add({
                undo: () => {
                  ;((0, v.Rh)(e, "uploadedFileAttachments", a),
                    (0, v.mt)(e, i, [(0, h.Xq)("uploaded-file", n.upload.fileId)]))
                },
                redo: () => (0, v.Rh)(e, "uploadedFileAttachments", o),
              })
            }))
        },
        gv: async function (e, t, { hostId: a, shouldDiscard: l, directoryFiles: p = [], orderKeys: f }) {
          let g = e.get(u.g),
            b = t.filter((e) => (e instanceof File ? !p.includes(e) : !(0, o.skP)(e)))
          b.length !== t.length &&
            ((0, v.KZ)(
              e,
              t.filter((e) => !b.includes(e)).flatMap((e) => f?.get(e) ?? []),
            ),
            e
              .get(c.Id)
              .danger(
                g.formatMessage({
                  id: "composer.fileAttachment.remoteFolderUnsupported",
                  defaultMessage: "Folders can only be attached to local conversations",
                  description:
                    "Toast shown when a local folder cannot be attached to a conversation running on a remote host",
                }),
                { errorAnalytics: { toastId: "composer.fileAttachment.remoteFolderUnsupported" } },
              ))
          let C = e.get(v.kV),
            x = e.get(s.chatGptAuthenticatedAccountId$),
            A = e.get(s.o8),
            M = b.map((t) => {
              let i = (0, r.A)(),
                n = (0, h.Xq)("pending", i),
                o = f?.get(t)
              null != o ? (0, v.vi)(e, o, n) : (0, v.A5)(e, [n])
              let l = new AbortController(),
                s = (0, y.Mz)(e, { hostId: a, id: i, onCancel: () => l.abort() })
              return { file: t, id: i, controller: l, operation: s }
            })
          ;(e.set(y.UF, (e) => [
            ...e,
            ...M.map(({ file: e, id: t }) => ({ id: t, label: e instanceof File ? e.name : e.label })),
          ]),
            await (0, n.Ay)(
              M,
              async ({ file: t, id: a, controller: n, operation: o }) => {
                let r = () =>
                  l() ||
                  e.get(s.chatGptAuthenticatedAccountId$) !== x ||
                  e.get(s.o8) !== A ||
                  e.get(v.kV) !== C ||
                  !o.isPending()
                try {
                  let l
                  if (r()) return
                  if (t instanceof File) l = t
                  else {
                    let e = { stack: [], error: void 0, hasError: !1 }
                    try {
                      let a = (0, i.mS)(
                        e,
                        await d.appServices.workspaceFiles.read({
                          hostId: "local",
                          path: t.fsPath,
                          representation: "blob",
                        }),
                        !1,
                      )
                      if (!("blob" in a)) throw Error("Attachment contents were not returned as a blob")
                      l = new File([(0, m.K)(a.blob)], t.label)
                    } catch (t) {
                      ;((e.error = t), (e.hasError = !0))
                    } finally {
                      ;(0, i.hk)(e)
                    }
                  }
                  let s = await w({ scope: e, file: l, onIdentityChanged: o.fail, shouldDiscard: r, signal: n.signal })
                  if (r()) return
                  ;((0, v.vi)(e, (0, h.Xq)("pending", a), (0, h.Xq)("uploaded-file", s.fileId)),
                    (0, v.Rh)(e, "uploadedFileAttachments", (e) => [...e, { upload: s }]),
                    o.succeed())
                } catch {
                  r() ||
                    e
                      .get(c.Id)
                      .danger(
                        g.formatMessage({
                          id: "composer.fileAttachment.uploadError",
                          defaultMessage: "Unable to upload file",
                          description: "Toast shown when copying a local file to a remote host fails",
                        }),
                        { errorAnalytics: { toastId: "composer.fileAttachment.uploadError" } },
                      )
                } finally {
                  ;(o.fail(), (0, v.KZ)(e, [(0, h.Xq)("pending", a)]), e.set(y.UF, (e) => e.filter((e) => e.id !== a)))
                }
              },
              { concurrency: 3 },
            ))
        },
        uploadFileAttachment: w,
        wq: async function (e, t) {
          try {
            let { openChatGptFile: i } = await Promise.all([
              a.e(82267),
              a.e(104742),
              a.e(788421),
              a.e(991910),
              a.e(261229),
              a.e(695261),
            ]).then(a.bind(a, "HGuJ"))
            await i(e, {
              allowTaskPreview: !0,
              browserPreview: !0,
              conversationId: null,
              fileName: t.fileName,
              tabKey: t.fileId,
              target: { type: "file-id", fileId: t.fileId },
            })
          } catch (e) {
            f.v.warning("Uploaded file failed to open", { safe: {}, sensitive: { error: e } })
          }
        },
      },
    )
  },
  V7vi(e, t, a) {
    var i = a("QosV"),
      n = a("zTeN"),
      o = a("zd8w"),
      r = a("Dgwo"),
      l = a("tl5a"),
      s = a("m8L3"),
      c = a("YdY0"),
      u = a("aAWW"),
      d = a("o8WW"),
      p = a("TKsx"),
      m = a("OWtl"),
      f = a("WFY2")
    let h = (0, n.bD)(m.u, (e) => null, void 0, { autoDispose: 6e4 })
    a.d(
      t,
      {},
      {
        c: function (e, t) {
          let a,
            g,
            v,
            y,
            w,
            b,
            C,
            x,
            A,
            M,
            I,
            S,
            E = (0, i.c)(53),
            R = void 0 === e ? null : e,
            _ = void 0 === t ? null : t,
            T = (0, n.gh)(m.u),
            k = (0, n._U)(l.aG, R),
            O = (0, n._U)(l.qX, R),
            { modelSettings: P } = (0, d.a)(R),
            N = (0, n.Ul)(c._),
            L = (0, n._U)(h, R),
            { data: F, isFetching: q } = (0, n._U)(p.aQ, O)
          E[0] !== P.model || E[1] !== P.reasoningEffort
            ? ((a = {
                mode: s.C,
                settings: { model: P.model, reasoning_effort: P.reasoningEffort, developer_instructions: null },
              }),
              (E[0] = P.model),
              (E[1] = P.reasoningEffort),
              (E[2] = a))
            : (a = E[2])
          let j = a,
            D = !q && !P.isLoading,
            U = L?.mode ?? k,
            H = U?.mode ?? N ?? s.C
          if (
            E[3] !== F ||
            E[4] !== j ||
            E[5] !== _ ||
            E[6] !== P.model ||
            E[7] !== P.reasoningEffort ||
            E[8] !== H ||
            E[9] !== U
          ) {
            let e
            ;(E[12] !== P.model || E[13] !== P.reasoningEffort
              ? ((e = (e) => {
                  if (null == e.mode) return []
                  let t = {
                    mode: e.mode,
                    settings: { model: e.model, reasoning_effort: e.reasoning_effort, developer_instructions: null },
                  }
                  return [{ ...t, settings: { ...t.settings, model: P.model, reasoning_effort: P.reasoningEffort } }]
                }),
                (E[12] = P.model),
                (E[13] = P.reasoningEffort),
                (E[14] = e))
              : (e = E[14]),
              (g = (F ?? []).flatMap(e)),
              (v = _ ?? U ?? g.find((e) => e.mode === H) ?? j),
              (E[3] = F),
              (E[4] = j),
              (E[5] = _),
              (E[6] = P.model),
              (E[7] = P.reasoningEffort),
              (E[8] = H),
              (E[9] = U),
              (E[10] = g),
              (E[11] = v))
          } else ((g = E[10]), (v = E[11]))
          let B = v
          E[15] !== j || E[16] !== g
            ? ((y = (e) => (e ? g.find((t) => t.mode === e) : null) ?? j), (E[15] = j), (E[16] = g), (E[17] = y))
            : (y = E[17])
          let V = y
          E[18] !== R || E[19] !== V || E[20] !== O || E[21] !== T
            ? ((w = async (e) => {
                if (R) {
                  try {
                    await (0, r.V)(T, O).updateThreadSettingsForNextTurn(R, { collaborationMode: V(e) })
                  } catch (e) {
                    f.v.error("Failed to set collaboration mode", {
                      safe: { conversationId: R },
                      sensitive: { error: e },
                    })
                  }
                  return
                }
                T.set(c._, e)
              }),
              (E[18] = R),
              (E[19] = V),
              (E[20] = O),
              (E[21] = T),
              (E[22] = w))
            : (w = E[22])
          let z = w
          E[23] !== R || E[24] !== V || E[25] !== z || E[26] !== T
            ? ((b = (e) => {
                if (((0, u.e)(), R)) {
                  let t = { mode: V(e) }
                  T.set(h, R, t)
                  let a = T.watch((e) => {
                    let { get: t } = e
                    t(h, R)
                  })
                  z(e).finally(() => {
                    ;(T.set(h, R, (e) => (e === t ? null : e)), a())
                  })
                  return
                }
                z(e)
              }),
              (E[23] = R),
              (E[24] = V),
              (E[25] = z),
              (E[26] = T),
              (E[27] = b))
            : (b = E[27])
          let Y = b
          E[28] !== g || E[29] !== z || E[30] !== H
            ? ((C = () => {
                let e = g.find((e) => e.mode === H)?.mode ?? s.C
                e !== H && z(e)
              }),
              (E[28] = g),
              (E[29] = z),
              (E[30] = H),
              (E[31] = C))
            : (C = E[31])
          let W = (0, o.useEffectEvent)(C)
          ;(E[32] !== D || E[33] !== g.length || E[34] !== W
            ? ((x = () => {
                !D || (g.length > 0 && W())
              }),
              (E[32] = D),
              (E[33] = g.length),
              (E[34] = W),
              (E[35] = x))
            : (x = E[35]),
            E[36] !== D || E[37] !== g ? ((A = [g, D]), (E[36] = D), (E[37] = g), (E[38] = A)) : (A = E[38]),
            (0, o.useEffect)(x, A),
            E[39] !== B.settings || E[40] !== P.model || E[41] !== P.reasoningEffort
              ? ((M = { ...B.settings, model: P.model, reasoning_effort: P.reasoningEffort }),
                (E[39] = B.settings),
                (E[40] = P.model),
                (E[41] = P.reasoningEffort),
                (E[42] = M))
              : (M = E[42]),
            E[43] !== B || E[44] !== M
              ? ((I = { ...B, settings: M }), (E[43] = B), (E[44] = M), (E[45] = I))
              : (I = E[45]))
          let X = !D
          return (
            E[46] !== V || E[47] !== g || E[48] !== H || E[49] !== Y || E[50] !== I || E[51] !== X
              ? ((S = {
                  modes: g,
                  activeMode: I,
                  selectedMode: H,
                  getModeForSelection: V,
                  setSelectedMode: Y,
                  isLoading: X,
                }),
                (E[46] = V),
                (E[47] = g),
                (E[48] = H),
                (E[49] = Y),
                (E[50] = I),
                (E[51] = X),
                (E[52] = S))
              : (S = E[52]),
            S
          )
        },
      },
    )
  },
  iS3i(e, t, a) {
    var i = a("QosV"),
      n = a("zTeN"),
      o = a("DBCl"),
      r = a("OeLR"),
      l = a("zd8w"),
      s = a("Dgwo"),
      c = a("tl5a"),
      u = a("ke3i"),
      d = a("dbK8"),
      p = a("wzi3"),
      m = a("o8WW"),
      f = a("an0a"),
      h = a("p4am"),
      g = a("qMca"),
      v = a("B81s"),
      y = a("Hhl4"),
      w = a("OWtl"),
      b = a("ndjw"),
      C = a("kfGJ"),
      x = a("jMec"),
      A = a("hZax"),
      M = a("OMIV"),
      I = a("WFY2"),
      S = a("fNL0"),
      E = a("aOdE"),
      R = a("NvK2"),
      _ = a("BFUY"),
      T = a("Y72c")
    let k = { isSet: !1, value: null }
    function O({ isProjectless: e, requirements: t }) {
      return e && (0, o.Jhm)("granular", t) ? "granular" : "auto"
    }
    function P(e) {
      let t,
        a,
        s,
        u,
        d,
        p = (0, i.c)(24),
        { conversationId: m, hostId: h, cwdOverride: g } = e,
        y = void 0 !== g,
        w = (0, n._U)(y ? null : c.JN, m),
        C = !y && null == w,
        I = (0, n.Ul)(C ? b.pY : null),
        E = (0, n.Ul)(!!C && b.Qd),
        R = (0, n.Ul)(y || null != m ? null : b.Gt),
        _ = (0, n._U)(null, R),
        T = (0, n._U)(y || null == m ? null : c.EL, m),
        k = y ? (g ?? null) : (w ?? I),
        O = y && null == k,
        P = C && E,
        N = !y && (null == m ? E : null == T),
        L = g === o.m20 || (!y && !N && (null == m ? null == R && !_?.length : "projectless" === T)),
        F = (0, n.Ul)(x.B),
        q = (0, A.XR)(),
        j = (0, n._U)(M.JW, "1597774583"),
        D = y || k === o.m20 ? "preserve-null" : "fallback-to-workspace",
        U = !O && !P
      p[0] !== h || p[1] !== D || p[2] !== U
        ? ((t = { hostId: h, failClosed: !0, cwdMode: D, enabled: U }), (p[0] = h), (p[1] = D), (p[2] = U), (p[3] = t))
        : (t = p[3])
      let { data: H, isPending: B } = (0, v.PG)(k === o.m20 ? null : k, t),
        V = null != (0, l.use)(S.r),
        z = (0, n._U)(V ? f.XH : null, m),
        Y = z?.hostId ?? h
      p[4] !== Y ? ((a = { hostId: Y }), (p[4] = Y), (p[5] = a)) : (a = p[5])
      let { data: W, isPending: X } = (0, n._U)(v.b9, a),
        G = W?.requirements ?? null
      if (p[6] !== F || p[7] !== H || p[8] !== X || p[9] !== q || p[10] !== G) {
        let e
        ;((s = null == H ? null : (0, r.Y$)(H.config)),
          p[13] !== X || p[14] !== G
            ? ((e = X || (0, o.Jhm)("auto", G) || (0, o.Jhm)("guardian-approvals", G)),
              (p[13] = X),
              (p[14] = G),
              (p[15] = e))
            : (e = p[15]),
          (u = e && !1 !== (0, o.bAH)(s ?? void 0) && (void 0 === F || q)),
          (p[6] = F),
          (p[7] = H),
          (p[8] = X),
          (p[9] = q),
          (p[10] = G),
          (p[11] = s),
          (p[12] = u))
      } else ((s = p[11]), (u = p[12]))
      let $ = u,
        K = O || P || N || X || B || null == H || $,
        Q = F?.guardian_approval === !0
      return (
        p[16] !== j || p[17] !== L || p[18] !== G || p[19] !== Y || p[20] !== s || p[21] !== K || p[22] !== Q
          ? ((d = {
              isConfigDataPending: K,
              isGuardianApprovalEnabledByStatsig: Q,
              isGuardianDefaultEnabledByStatsig: j,
              isProjectless: L,
              requirements: G,
              requirementsHostId: Y,
              resolvedConfig: s,
            }),
            (p[16] = j),
            (p[17] = L),
            (p[18] = G),
            (p[19] = Y),
            (p[20] = s),
            (p[21] = K),
            (p[22] = Q),
            (p[23] = d))
          : (d = p[23]),
        d
      )
    }
    function N(e) {
      let t,
        a,
        o,
        r = (0, i.c)(10),
        { hostId: l } = e,
        s = (0, n.gh)(w.u),
        c = (0, n.Ul)(R.ol) ?? (0, R.P4)(R.rh)
      r[0] !== l || r[1] !== c ? ((t = (0, R.Ru)(l, c)), (r[0] = l), (r[1] = c), (r[2] = t)) : (t = r[2])
      let u = t
      return (
        r[3] !== l || r[4] !== c || r[5] !== s
          ? ((a = (e) => {
              s.set(R.ol, { ...c, [l]: e })
            }),
            (r[3] = l),
            (r[4] = c),
            (r[5] = s),
            (r[6] = a))
          : (a = r[6]),
        r[7] !== u || r[8] !== a
          ? ((o = { preferredNonFullAccessMode: u, setPreferredNonFullAccessMode: a }),
            (r[7] = u),
            (r[8] = a),
            (r[9] = o))
          : (o = r[9]),
        o
      )
    }
    a.d(
      t,
      {},
      {
        Ap: function (e) {
          let t,
            a,
            r,
            l,
            f,
            v,
            x,
            A,
            M,
            S,
            L,
            F,
            q,
            j,
            D,
            U,
            H,
            B = (0, i.c)(68),
            { conversationId: V, cwdOverride: z, hostId: Y, inheritDefaultPermissions: W } = e,
            X = (0, n.gh)(w.u),
            G = (0, n._U)(g.D0, V) && Y === o.iwv ? C.fI : null,
            $ = void 0 !== z,
            K = (0, n._U)($ ? null : c.JN, V),
            Q = !$ && null == K,
            Z = (0, n.Ul)(Q ? b.pY : null),
            J = (0, n.Ul)(!!Q && b.Qd),
            ee = $ ? (z ?? null) : (K ?? Z),
            et = $ && null == ee,
            ea = Q && J
          B[0] !== V || B[1] !== z || B[2] !== Y
            ? ((t = { conversationId: V, cwdOverride: z, hostId: Y }), (B[0] = V), (B[1] = z), (B[2] = Y), (B[3] = t))
            : (t = B[3])
          let ei = P(t),
            { modelSettings: en } = (0, m.a)(V)
          B[4] !== ei.requirements
            ? ((a = (e) => (0, o.Z3c)(ei.requirements, e)), (B[4] = ei.requirements), (B[5] = a))
            : (a = B[5])
          let eo = a,
            er = eo(en.model),
            el = (ei.requirements?.autoReview?.requiredOnModels?.length ?? 0) > 0 && en.isLoading,
            es = ee === o.m20 ? null : ee
          B[6] !== Y || B[7] !== es ? ((r = { hostId: Y, cwd: es }), (B[6] = Y), (B[7] = es), (B[8] = r)) : (r = B[8])
          let ec = !et && !ea
          B[9] !== ec ? ((l = { enabled: ec }), (B[9] = ec), (B[10] = l)) : (l = B[10])
          let eu = (0, n._U)(y.yL, r, l),
            ed = et || ea || eu.isPending,
            ep = ed || eu.isError,
            em =
              et || ea || null == eu.data
                ? null
                : (0, y.EJ)(
                    eu.data,
                    ei.requirements,
                    "string" == typeof ei.resolvedConfig?.default_permissions
                      ? ei.resolvedConfig.default_permissions
                      : null,
                  ),
            ef = O(ei),
            eh = (0, _.F2)(em?.defaultProfileId, ef),
            eg = null == eh ? (em?.defaultProfileId ?? null) : null,
            ev = (0, o.L9S)(ei.requirements, ei.resolvedConfig),
            ey =
              null != em &&
              (em.profiles.length > 1 || ei.requirementsHostId !== Y) &&
              ei.requirements?.allowedPermissionProfiles != null &&
              0 === (0, o.Ibn)(ei.requirements).length &&
              null == eg,
            ew = !ei.isConfigDataPending && !ey && null == eg && 0 === ev.length,
            eb = null == V,
            eC = (0, n.Ul)(R.mW) ?? (0, R.P4)(R.Oi),
            ex = (0, n.Ul)(R.R9) ?? (0, R.P4)(R.$3),
            eA = ex[Y] ?? null,
            eM = (0, n.Ul)(E.a)
          B[11] !== ee || B[12] !== Y
            ? ((f = JSON.stringify([Y, ee])), (B[11] = ee), (B[12] = Y), (B[13] = f))
            : (f = B[13])
          let eI = f,
            eS = eM[eI] ?? k,
            eE = eS.isSet ? eS.value : eg
          B[14] !== eI || B[15] !== X
            ? ((v = (e) => {
                X.set(E.a, (t) => ({ ...t, [eI]: { isSet: !0, value: e } }))
              }),
              (B[14] = eI),
              (B[15] = X),
              (B[16] = v))
            : (v = B[16])
          let eR = v,
            {
              threadApprovalsReviewer: e_,
              threadPermissionProfileId: eT,
              threadMode: ek,
              threadSandboxPolicy: eO,
            } = (function (e) {
              let t,
                a,
                r = (0, i.c)(14),
                l = (0, n._U)(c.h2, e),
                s = (0, n._U)(c.we, e),
                d = (0, n._U)(u.MH, e),
                p = l?.sandboxPolicy ?? s?.sandboxPolicy ?? d?.sandboxPolicy ?? null
              if (
                r[0] !== s?.approvalPolicy ||
                r[1] !== s?.approvalsReviewer ||
                r[2] !== l?.approvalPolicy ||
                r[3] !== l?.approvalsReviewer ||
                r[4] !== l?.permissions ||
                r[5] !== d?.approvalPolicy ||
                r[6] !== d?.approvalsReviewer ||
                r[7] !== p
              ) {
                let e = (0, _.F2)(l?.permissions, "auto")
                ;((t = (0, o.weu)({
                  approvalPolicy: l?.approvalPolicy ?? s?.approvalPolicy ?? d?.approvalPolicy ?? void 0,
                  approvalsReviewer: l?.approvalsReviewer ?? s?.approvalsReviewer ?? d?.approvalsReviewer ?? void 0,
                  sandboxPolicy: null == e ? (p ?? void 0) : (0, o.$5i)(e, [], null).sandboxPolicy,
                })),
                  (r[0] = s?.approvalPolicy),
                  (r[1] = s?.approvalsReviewer),
                  (r[2] = l?.approvalPolicy),
                  (r[3] = l?.approvalsReviewer),
                  (r[4] = l?.permissions),
                  (r[5] = d?.approvalPolicy),
                  (r[6] = d?.approvalsReviewer),
                  (r[7] = p),
                  (r[8] = t))
              } else t = r[8]
              let m = t,
                f = l?.activePermissionProfile !== void 0 ? l.activePermissionProfile : s?.activePermissionProfile,
                h = l?.approvalsReviewer ?? s?.approvalsReviewer ?? d?.approvalsReviewer ?? null,
                g = void 0 === f ? (d?.permissions ?? null) : (f?.id ?? null)
              return (
                r[9] !== h || r[10] !== g || r[11] !== m || r[12] !== p
                  ? ((a = {
                      threadApprovalsReviewer: h,
                      threadPermissionProfileId: g,
                      threadSandboxPolicy: p,
                      threadMode: m,
                    }),
                    (r[9] = h),
                    (r[10] = g),
                    (r[11] = m),
                    (r[12] = p),
                    (r[13] = a))
                  : (a = r[13]),
                a
              )
            })(V),
            eP = (0, n._U)(u.Bs, V),
            eN = (0, T.cT)((0, n.Ul)(T.I0)),
            {
              availableAgentModes: eL,
              customEquivalentMode: eF,
              configNonFullAccessMode: eq,
              isGuardianModeAvailable: ej,
            } = (0, _.lS)({
              ...ei,
              defaultWorkspaceWriteMode: ef,
              showFullAccessInComposer: eN,
              isAutoReviewRequiredForSelectedModel: er,
              hasAuthoritativeGuardianApprovalDefault:
                "guardian-approvals" === ek && ((0, d.C)(Y) || "guardian-approvals" === (0, p.k)(Y)),
            }),
            eD = () => {
              if (ei.isConfigDataPending) return null
              let { validPreferredNonFullAccessMode: e } = (0, _.bN)({
                  availableAgentModes: eL,
                  preferredNonFullAccessMode: (0, R.Ru)(Y, X.get(R.ol) ?? (0, R.P4)(R.rh)),
                  isGuardianModeAvailable: ej,
                  isConfigDataPending: ei.isConfigDataPending,
                  configNonFullAccessMode: eq,
                }),
                t = e ?? (ej ? "guardian-approvals" : eq)
              return eL.includes(t) ? t : null
            }
          B[17] !== V || B[18] !== z || B[19] !== Y
            ? ((x = { conversationId: V, hostId: Y, cwdOverride: z }),
              (B[17] = V),
              (B[18] = z),
              (B[19] = Y),
              (B[20] = x))
            : (x = B[20])
          let { preferredNonFullAccessMode: eU } = N(x),
            { resolvedNonFullAccessMode: eH, validPreferredNonFullAccessMode: eB } = (0, _.bN)({
              availableAgentModes: eL,
              preferredNonFullAccessMode: eU,
              isGuardianModeAvailable: ej,
              isConfigDataPending: ei.isConfigDataPending,
              configNonFullAccessMode: eq,
            }),
            eV = (0, _.d_)(
              (0, T.KZ)({
                availableAgentModes: eL,
                visibleAgentModes: (0, T.o4)({ availableAgentModes: eL, showFullAccessInComposer: eN }),
              }),
              eF,
              eH,
              eB,
            ),
            ez =
              null != (H = eC[Y]) && H !== ex[Y]
                ? H
                : ej && null != G && "guardian-approvals" === eC[G] && "guardian-approvals" !== ex[G]
                  ? "guardian-approvals"
                  : void 0,
            eY = ez ?? eV
          ;("auto" === ez || "granular" === ez) && (eY = ef)
          let eW = eb && void 0 !== W && W && !ey && !eS.isSet
          eb && null != eE
            ? (eY =
                "guardian-approvals" === ez &&
                ei.resolvedConfig?.approvals_reviewer == null &&
                ei.isGuardianApprovalEnabledByStatsig &&
                !1 !== (0, o.bAH)(ei.resolvedConfig ?? void 0) &&
                (0, o.WqY)(ei.requirements, null, null, "guardian_subagent")
                  ? "guardian-approvals"
                  : "custom")
            : ei.isConfigDataPending || eL.includes(eY) || (eY = eV)
          let eX = null == eh || (eb && eS.isSet) || (null != ez && ev.includes(ez)) ? eY : eh,
            { isRequired: eG } = (0, n._U)(h.E, Y),
            e$ = eG && !er && ev.includes("read-only"),
            eK = eX
          er ? (eK = "guardian-approvals") : e$ && (eK = "read-only")
          let eQ = e_ ?? (ei.resolvedConfig?.approvals_reviewer === "auto_review" ? "auto_review" : null),
            eZ = ei.isConfigDataPending || ev.includes(eK),
            eJ =
              null == eT &&
              eO?.type === "workspaceWrite" &&
              "full-access" === ez &&
              "full-access" === eK &&
              "full-access" !== ek,
            e0 = eJ && (ei.isConfigDataPending || el),
            e1 = (et || ei.isConfigDataPending) && (null == ez || "auto" === ez || "granular" === ez),
            e2 =
              null != V &&
              null != ek &&
              (null == eT || eT.startsWith(":")) &&
              null != ez &&
              ev.includes(ez) &&
              ek !== eK
          B[21] !== ee || B[22] !== ei.resolvedConfig || B[23] !== eO
            ? ((A = (e) => {
                let t = (0, o.$5i)(
                  e,
                  eO?.type === "workspaceWrite" ? eO.writableRoots : null == ee ? [] : [ee],
                  ei.resolvedConfig,
                )
                return { approvalPolicy: t.approvalPolicy, approvalsReviewer: t.approvalsReviewer, ...(0, o.ZGB)(t) }
              }),
              (B[21] = ee),
              (B[22] = ei.resolvedConfig),
              (B[23] = eO),
              (B[24] = A))
            : (A = B[24])
          let e3 = A
          B[25] !== e3
            ? ((M = (e, t, a) => (a ? (null == t ? e3(e) : { permissions: t }) : null)), (B[25] = e3), (B[26] = M))
            : (M = B[26])
          let e4 = M,
            e5 = e3("guardian-approvals")
          B[27] !== e3 || B[28] !== V || B[29] !== Y || B[30] !== X
            ? ((S = (e) => (null == V ? null : (0, s.V)(X, Y).updateThreadPermissions(V, e3(e)))),
              (B[27] = e3),
              (B[28] = V),
              (B[29] = Y),
              (B[30] = X),
              (B[31] = S))
            : (S = B[31])
          let e6 = S
          B[32] !== V
            ? ((L = (e) => {
                I.v.error("Failed to set thread permissions mode", {
                  safe: { conversationId: V },
                  sensitive: { error: e },
                })
              }),
              (B[32] = V),
              (B[33] = L))
            : (L = B[33])
          let e7 = L,
            e8 = (e) => {
              ;(null != eA && X.set(R.R9, { ...ex, [Y]: null }),
                eb && eR(null),
                eC[Y] !== e && X.set(R.mW, { ...eC, [Y]: e }))
            }
          B[34] !== e7 || B[35] !== e8 || B[36] !== e6
            ? ((F = (e) => {
                ;(e8(e), e6(e)?.catch(e7))
              }),
              (B[34] = e7),
              (B[35] = e8),
              (B[36] = e6),
              (B[37] = F))
            : (F = B[37])
          let e9 = F
          B[38] !== V || B[39] !== Y || B[40] !== eb || B[41] !== e7 || B[42] !== X || B[43] !== eR
            ? ((q = (e) => {
                eb
                  ? eR(e)
                  : null != V && (0, s.V)(X, Y).updateThreadSettingsForNextTurn(V, { permissions: e }).catch(e7)
              }),
              (B[38] = V),
              (B[39] = Y),
              (B[40] = eb),
              (B[41] = e7),
              (B[42] = X),
              (B[43] = eR),
              (B[44] = q))
            : (q = B[44])
          let te = q
          B[45] !== V || B[46] !== Y || B[47] !== ei.isProjectless || B[48] !== ek || B[49] !== eT
            ? ((j = !(0, d.C)(Y) && null != V && ei.isProjectless && "granular" === ek && ":workspace" === eT),
              (B[45] = V),
              (B[46] = Y),
              (B[47] = ei.isProjectless),
              (B[48] = ek),
              (B[49] = eT),
              (B[50] = j))
            : (j = B[50])
          let tt = j
          if (null != V && null != ek && !er && !e$ && ((0, d.C)(Y) || null == ez || !eZ || eJ))
            return {
              agentMode: ek,
              approvalsReviewerOverride: eQ,
              isAgentModeLoading: eP || e0,
              isAgentModePending: eP || e0,
              isAutoReviewRequiredForModel: eo,
              isAutoReviewRequiredForSelectedModel: er,
              isGuardianModeAvailable: ej,
              getNonFullAccessFallbackMode: eD,
              guardianApprovalThreadSettings: e5,
              permissionOverrideThreadSettings: tt ? e3(ek) : null,
              permissionProfileId: eT,
              shouldSendPermissionOverrides: tt,
              shouldUseAppServerPermissionDefault: ew,
              setAgentMode: e9,
              setAgentModePreference: e8,
              setPermissionProfileId: te,
            }
          D = er || e$ || e2 ? null : eb ? eE : eT
          let ta =
              er ||
              e$ ||
              e2 ||
              tt ||
              (!ew && !eW && (eb || (null == eT && ("custom" !== ek || eO?.type === "dangerFullAccess")))),
            ti = !er && !e$ && (ew || eW),
            tn = eK,
            to = eP || e1 || el || (eb && !eS.isSet && ed),
            tr = eP || e1 || (eb && !eS.isSet && ep) || (eb && !ti && null == eE && ey),
            tl = e4(eK, D, ta)
          return (
            B[51] !== eQ ||
            B[52] !== eo ||
            B[53] !== eK ||
            B[54] !== ti ||
            B[55] !== eD ||
            B[56] !== e5 ||
            B[57] !== er ||
            B[58] !== ej ||
            B[59] !== D ||
            B[60] !== e8 ||
            B[61] !== e9 ||
            B[62] !== te ||
            B[63] !== ta ||
            B[64] !== to ||
            B[65] !== tr ||
            B[66] !== tl
              ? ((U = {
                  agentMode: tn,
                  approvalsReviewerOverride: eQ,
                  isAgentModeLoading: to,
                  isAgentModePending: tr,
                  isAutoReviewRequiredForModel: eo,
                  isAutoReviewRequiredForSelectedModel: er,
                  isGuardianModeAvailable: ej,
                  getNonFullAccessFallbackMode: eD,
                  guardianApprovalThreadSettings: e5,
                  permissionOverrideThreadSettings: tl,
                  permissionProfileId: D,
                  shouldSendPermissionOverrides: ta,
                  shouldUseAppServerPermissionDefault: ti,
                  setAgentMode: e9,
                  setAgentModePreference: e8,
                  setPermissionProfileId: te,
                }),
                (B[51] = eQ),
                (B[52] = eo),
                (B[53] = eK),
                (B[54] = ti),
                (B[55] = eD),
                (B[56] = e5),
                (B[57] = er),
                (B[58] = ej),
                (B[59] = D),
                (B[60] = e8),
                (B[61] = e9),
                (B[62] = te),
                (B[63] = ta),
                (B[64] = to),
                (B[65] = tr),
                (B[66] = tl),
                (B[67] = U))
              : (U = B[67]),
            U
          )
        },
        Fc: P,
        PQ: N,
        TK: O,
        bI: function (e) {
          if (null == e) return !0
          let t =
              (null == e.allowedPermissionProfiles || !0 === e.allowedPermissionProfiles[":workspace"]) &&
              (null == e.allowedSandboxModes || e.allowedSandboxModes.includes("workspace-write")),
            a = null == e.allowedApprovalPolicies || e.allowedApprovalPolicies.includes("on-request"),
            i =
              null == e.allowedApprovalsReviewers ||
              e.allowedApprovalsReviewers.includes("user") ||
              e.allowedApprovalsReviewers.includes("auto_review")
          return t && a && i
        },
      },
    )
  },
  L6Md(e, t, a) {
    a.d(
      t,
      {},
      {
        $: function (e, t) {
          let { start: a, end: i } = t,
            n = [],
            o = [],
            r = [...e.matchAll(/\\(?:[a-zA-Z]+|[^])|[{}]/g)]
          for (let e of r) {
            let t = e.index + e[0].length
            if (e[0].startsWith("\\") && e.index < i && t > a) ((a = Math.min(a, e.index)), (i = Math.max(i, t)))
            else if ("{" === e[0]) o.push(e.index)
            else if ("}" === e[0]) {
              let e = o.pop()
              null != e && n.push({ start: e, end: t })
            }
          }
          for (let t of r) {
            if (!t[0].startsWith("\\") || t.index >= i || t.index + t[0].length <= a) continue
            let o = t.index + t[0].length,
              r = 0
            if (
              (/^\\(?:[dt]?frac|binom|overset|underset)$/.test(t[0])
                ? (r = 2)
                : /^\\(?:sqrt|mathbf|boldsymbol|bm|mathrm|mathit|mathsf|mathtt|mathcal|mathbb|mathfrak|mathnormal|mathscr|operatorname|text|textrm|textbf|textit|vec|hat|widehat|bar|overline|underline|tilde|widetilde|dot|ddot)$/.test(
                    t[0],
                  ) && (r = 1),
              "\\sqrt" === t[0] && "[" === e[o])
            ) {
              let t = e.indexOf("]", o)
              t >= 0 && (o = t + 1)
            }
            for (let t = r; t > 0; t -= 1) {
              for (; /\s/.test(e[o] ?? "");) o += 1
              o =
                n.find((e) => e.start === o)?.end ??
                o + (e.slice(o).match(/^(?:\\[a-zA-Z]+|\\[^]|[^])/u)?.[0].length ?? 0)
            }
            i = Math.max(i, o)
          }
          for (let e of n)
            ((a <= e.start && i > e.start && i < e.end) || (a > e.start && a < e.end && i >= e.end)) &&
              ((a = Math.min(a, e.start)), (i = Math.max(i, e.end)))
          return { start: a, end: i }
        },
      },
    )
  },
  zjpG(e, t, a) {
    var i = a("ABep"),
      n = a("QosV"),
      o = a("on57"),
      r = a("oyxz")
    a.d(
      t,
      {},
      {
        a: function (e) {
          let t,
            a,
            l,
            s = (0, n.c)(5),
            { className: c } = e
          return (
            s[0] !== c ? ((t = (0, o.A)("last:hidden", c)), (s[0] = c), (s[1] = t)) : (t = s[1]),
            s[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, i.jsx)(r.A, {
                  id: "codex.ui.bulletSeparator",
                  defaultMessage: "·",
                  description: "Middle dot separator used between inline items",
                })),
                (s[2] = a))
              : (a = s[2]),
            s[3] !== t
              ? ((l = (0, i.jsx)("span", { "aria-hidden": !0, className: t, children: a })), (s[3] = t), (s[4] = l))
              : (l = s[4]),
            l
          )
        },
      },
    )
  },
  IxWh(e, t, a) {
    var i = a("Vzyk"),
      n = a.n(i)
    function o(e, t = "ltr") {
      let a = Math.max(0, e.scrollWidth - e.clientWidth)
      if ("rtl" === t) return { maximum: 0, minimum: -a }
      let i = e.firstElementChild,
        n = Math.min(a, i instanceof HTMLElement ? Math.max(0, r(e, i, t)) : 0)
      return { maximum: a, minimum: n }
    }
    function r(e, t, a) {
      return "rtl" === a
        ? t.offsetLeft - e.offsetLeft + t.offsetWidth - e.clientWidth + l(e, a)
        : t.offsetLeft - e.offsetLeft - l(e, a)
    }
    function l(e, t) {
      let a = Number.parseFloat(
        "rtl" === t ? getComputedStyle(e).scrollPaddingRight : getComputedStyle(e).scrollPaddingLeft,
      )
      return Number.isNaN(a) ? 0 : a
    }
    a.d(
      t,
      {},
      {
        b: o,
        z: function (e, t, a = "ltr") {
          let { maximum: i, minimum: s } = o(e, a),
            c = "rtl" === a ? -t : t,
            u = n()(e.scrollLeft + c * (e.clientWidth - l(e, a)), s, i),
            d = e.children
          for (let o = 1 === t ? 0 : d.length - 1; o >= 0 && o < d.length; o += t) {
            let t = d.item(o)
            if (!(t instanceof HTMLElement)) continue
            let l = n()(r(e, t, a), s, i)
            if ((1 === c && l >= u - 1) || (-1 === c && l <= u + 1)) return l
          }
          return 1 === c ? i : s
        },
      },
    )
  },
  YXXI(e, t, a) {
    a.d(t, { I: () => c })
    var i = a("QosV"),
      n = a("zd8w"),
      o = a("an0a"),
      r = a("j44z"),
      l = a("V7vi"),
      s = a("SGsN")
    function c(e) {
      var t
      let a,
        c,
        u,
        d,
        p,
        m,
        f,
        h = (0, i.c)(11),
        { scope: g, conversationId: v, intl: y } = e,
        w =
          ((t = "image"),
          (m = (0, i.c)(3)),
          (f = (function (e) {
            let t,
              a,
              n = (0, i.c)(5),
              s = (0, o.K5)(e),
              { activeMode: c } = (0, l.c)(e)
            n[0] !== s.hostId ? ((t = { hostId: s.hostId }), (n[0] = s.hostId), (n[1] = t)) : (t = n[1])
            let { data: u } = (0, r.Ym)(t),
              d = c.settings.model
            if (!d) return null
            n[2] !== u?.models || n[3] !== d
              ? ((a = u?.models.find((e) => e.model === d)), (n[2] = u?.models), (n[3] = d), (n[4] = a))
              : (a = n[4])
            let p = a
            return p?.inputModalities ?? null
          })(v)),
          m[0] !== f || m[1] !== t ? ((p = f?.includes(t) ?? !0), (m[0] = f), (m[1] = t), (m[2] = p)) : (p = m[2]),
          p)
      h[0] !== y
        ? ((a = y.formatMessage({
            id: "composer.imageInputsUnsupported",
            defaultMessage: "This model does not support image inputs. Try a different model",
            description: "Toast shown when a user tries to add images for a text-only model",
          })),
          (h[0] = y),
          (h[1] = a))
        : (a = h[1])
      let b = a
      h[2] !== y
        ? ((c = y.formatMessage({
            id: "composer.submit.imageInputsUnsupported",
            defaultMessage: "Remove images or switch models to send this message",
            description: "Message shown when submit is blocked due to unsupported image inputs",
          })),
          (h[2] = y),
          (h[3] = c))
        : (c = h[3])
      let C = c,
        x = (0, n.useRef)(0)
      h[4] !== b || h[5] !== g
        ? ((u = () => {
            let e = Date.now()
            e - x.current < 1e3 ||
              ((x.current = e),
              g
                .get(s.Id)
                .danger(b, { errorAnalytics: { toastId: "useComposerImageInputSupport.notifyImageInputUnsupported" } }))
          }),
          (h[4] = b),
          (h[5] = g),
          (h[6] = u))
        : (u = h[6])
      let A = u
      return (
        h[7] !== C || h[8] !== A || h[9] !== w
          ? ((d = { imageInputUnsupportedReason: C, notifyImageInputUnsupported: A, supportsImageInputs: w }),
            (h[7] = C),
            (h[8] = A),
            (h[9] = w),
            (h[10] = d))
          : (d = h[10]),
        d
      )
    }
  },
  rxzY(e, t, a) {
    var i = a("QosV"),
      n = a("zd8w")
    function o(e, t) {
      var a, i
      return (
        (a = e),
        (i = t.getBoundingClientRect()),
        !!(a.x >= i.left) &&
          !!(a.x <= i.right) &&
          !!(a.y >= i.top) &&
          !!(a.y <= i.bottom) &&
          document.elementsFromPoint(e.x, e.y).some((e) => e === t || t.contains(e))
      )
    }
    function r(e) {
      let t = window.getComputedStyle(e)
      if ("none" === t.display || "hidden" === t.visibility || "none" === t.pointerEvents) return !1
      let a = e.getBoundingClientRect()
      return a.width > 0 && a.height > 0
    }
    a.d(
      t,
      {},
      {
        Q: function (e) {
          let t,
            a,
            l,
            s,
            c,
            u,
            d,
            p = (0, i.c)(26),
            {
              activationNonce: m,
              floatingElementSelectors: f,
              includeInteractiveRegion: h,
              interactiveRegionRef: g,
              isPaused: v,
              onInteractiveChange: y,
              publishInitialNonInteractive: w,
              regionElementSelectors: b,
            } = e
          p[0] !== f ? ((t = void 0 === f ? [] : f), (p[0] = f), (p[1] = t)) : (t = p[1])
          let C = t,
            x = void 0 !== h && h,
            A = void 0 === w || w
          p[2] !== b ? ((a = void 0 === b ? [] : b), (p[2] = b), (p[3] = a)) : (a = p[3])
          let M = a,
            [I, S] = (0, n.useState)(!1)
          p[4] !== v ? ((l = () => v?.() ?? !1), (p[4] = v), (p[5] = l)) : (l = p[5])
          let E = (0, n.useEffectEvent)(l)
          p[6] !== y
            ? ((s = (e) => {
                ;(S(!e), y(e))
              }),
              (p[6] = y),
              (p[7] = s))
            : (s = p[7])
          let R = (0, n.useEffectEvent)(s)
          p[8] !== y
            ? ((c = () => {
                y(!0)
              }),
              (p[8] = y),
              (p[9] = c))
            : (c = p[9])
          let _ = (0, n.useEffectEvent)(c)
          return (
            p[10] !== C ||
            p[11] !== x ||
            p[12] !== g ||
            p[13] !== E ||
            p[14] !== A ||
            p[15] !== R ||
            p[16] !== M ||
            p[17] !== _
              ? ((u = () => {
                  let e = null,
                    t = null,
                    a = null,
                    i = null,
                    n = (t) => {
                      e !== t && ((e = t), R(t))
                    },
                    l = () => {
                      ;((i = null),
                        null == a ||
                          E() ||
                          ((t = a),
                          n(
                            ((e) => {
                              let t = g.current
                              if (null == t || (x && o(e, t))) return !0
                              for (let a of M) for (let i of t.querySelectorAll(a)) if (o(e, i) && r(i)) return !0
                              for (let t of C)
                                for (let a of document.querySelectorAll(t)) if (o(e, a) && r(a)) return !0
                              return !1
                            })(a),
                          )))
                    },
                    s = () => {
                      null == i && (i = requestAnimationFrame(l))
                    },
                    c = (e) => {
                      ;((t = a = { x: e.clientX, y: e.clientY }), s())
                    },
                    u = () => {
                      null != t && ((a = t), s())
                    },
                    d = () => {
                      E() || n(!1)
                    },
                    p = () => {
                      if (E()) return
                      let e = (function ({
                        floatingElementSelectors: e,
                        includeInteractiveRegion: t,
                        interactiveRegion: a,
                        regionElementSelectors: i,
                      }) {
                        if (null != a) {
                          if (t && a.matches(":hover")) return !0
                          for (let e of i)
                            for (let t of a.querySelectorAll(e)) if (r(t) && t.matches(":hover")) return !0
                        }
                        for (let t of e)
                          for (let e of document.querySelectorAll(t)) if (r(e) && e.matches(":hover")) return !0
                        return !document.documentElement.matches(":hover") && null
                      })({
                        floatingElementSelectors: C,
                        includeInteractiveRegion: x,
                        interactiveRegion: g.current,
                        regionElementSelectors: M,
                      })
                      null != e && (e || A) && n(e)
                    },
                    m = new MutationObserver(u)
                  ;(window.addEventListener("mousemove", c),
                    window.addEventListener("resize", u),
                    window.addEventListener("scroll", u, !0),
                    window.addEventListener("mouseleave", d),
                    m.observe(document.body, {
                      attributeFilter: ["aria-hidden", "class", "hidden", "style"],
                      attributes: !0,
                      childList: !0,
                      subtree: !0,
                    }),
                    p())
                  let f = requestAnimationFrame(p)
                  return () => {
                    ;(window.removeEventListener("mousemove", c),
                      window.removeEventListener("resize", u),
                      window.removeEventListener("scroll", u, !0),
                      window.removeEventListener("mouseleave", d),
                      m.disconnect(),
                      cancelAnimationFrame(f),
                      null != i && cancelAnimationFrame(i),
                      (e = null),
                      _())
                  }
                }),
                (p[10] = C),
                (p[11] = x),
                (p[12] = g),
                (p[13] = E),
                (p[14] = A),
                (p[15] = R),
                (p[16] = M),
                (p[17] = _),
                (p[18] = u))
              : (u = p[18]),
            p[19] !== m || p[20] !== C || p[21] !== x || p[22] !== g || p[23] !== A || p[24] !== M
              ? ((d = [m, C, x, g, A, M]),
                (p[19] = m),
                (p[20] = C),
                (p[21] = x),
                (p[22] = g),
                (p[23] = A),
                (p[24] = M),
                (p[25] = d))
              : (d = p[25]),
            (0, n.useEffect)(u, d),
            I
          )
        },
      },
    )
  },
  ipV4(e, t, a) {
    var i = a("QosV"),
      n = a("zTeN"),
      o = a("eWgO"),
      r = a("tl5a"),
      l = a("EOo5"),
      s = a("B81s")
    a.d(
      t,
      {},
      {
        U: function (e) {
          let t,
            a,
            c,
            u = (0, i.c)(10),
            d = (0, n.Ul)(r.Dc),
            p = e?.hostId ?? d,
            m = (0, l.tn)(p),
            f =
              m?.authMethod === "chatgpt" ||
              m?.authMethod === "personalAccessToken" ||
              m?.authMethod === "amazonBedrock",
            h = m?.authMethod ?? null
          u[0] !== p || u[1] !== h
            ? ((t = { authMethod: h, hostId: p }), (u[0] = p), (u[1] = h), (u[2] = t))
            : (t = u[2])
          let { data: g, isPending: v } = (0, n._U)(s.b9, t),
            y = !!m?.isLoading || (f && v)
          u[3] !== g || u[4] !== y || u[5] !== f
            ? ((a = f && !y && null != g ? (0, o.W6)(g) : null), (u[3] = g), (u[4] = y), (u[5] = f), (u[6] = a))
            : (a = u[6])
          let w = a
          return (
            u[7] !== y || u[8] !== w
              ? ((c = { serviceTierAccess: w, isLoading: y }), (u[7] = y), (u[8] = w), (u[9] = c))
              : (c = u[9]),
            c
          )
        },
      },
    )
  },
  uizX(e, t, a) {
    a.d(t, { k: () => R })
    var i = a("QosV"),
      n = a("iRMi"),
      o = a("zTeN"),
      r = a("eWgO"),
      l = a("zd8w"),
      s = a("Dgwo"),
      c = a("tl5a"),
      u = a("ke3i"),
      d = a("EOo5")
    a("njX7")
    var p = a("Eklu"),
      m = a("e85W"),
      f = a("ipV4"),
      h = a("yGJW"),
      g = a("B81s"),
      v = a("j44z"),
      y = a("OWtl"),
      w = a("YWOa"),
      b = a("sLlu"),
      C = a("l2g8"),
      x = a("WFY2"),
      A = a("ER5p"),
      M = a("fNL0"),
      I = a("tzYO"),
      S = a("o8WW"),
      E = a("an0a")
    function R(e, t) {
      let a,
        R,
        _,
        T,
        k = (0, i.c)(15),
        O = void 0 === e ? null : e,
        P = void 0 === t ? null : t,
        N = (0, o.gh)(y.u),
        { draftSettings: L, isNewThreadDraft: F, updateDraftSettings: q } = (0, m.iW)(),
        j = (0, S.a)(O),
        D = (function (e, t, a, m, S) {
          var R, _
          let T,
            k,
            O,
            P,
            N,
            L,
            F,
            q,
            j,
            D,
            U,
            H,
            B,
            V,
            z,
            Y,
            W,
            X,
            G,
            $,
            K,
            Q,
            Z,
            J,
            ee,
            et,
            ea,
            ei,
            en,
            eo,
            er,
            el,
            es,
            ec = (0, i.c)(56),
            { modelSettings: eu, setModelAndReasoningEffort: ed } = t,
            ep = (0, o.gh)(y.u),
            em = (0, E.K5)(e)
          ;(0, l.use)(M.r)
          let ef = em.hostId
          ec[0] !== e || ec[1] !== ef
            ? ((T = { hostId: ef, conversationId: e }), (ec[0] = e), (ec[1] = ef), (ec[2] = T))
            : (T = ec[2])
          let eh = T,
            eg = (0, o._U)(p.pu, eh)
          ec[3] !== ef ? ((k = { hostId: ef }), (ec[3] = ef), (ec[4] = k)) : (k = ec[4])
          let { data: ev, isLoading: ey } = (0, v.Ym)(k),
            ew = (0, o._U)(c.h2, e),
            eb = (0, o._U)(u.G2, e),
            eC = (0, o._U)(u.Bs, e),
            ex = (0, d.tn)(ef),
            eA = null == e && m && null != S ? ef : em.hostId,
            eM = ex?.authMethod ?? null
          ec[5] !== eA || ec[6] !== eM
            ? ((O = { authMethod: eM, hostId: eA }), (ec[5] = eA), (ec[6] = eM), (ec[7] = O))
            : (O = ec[7])
          let { data: eI, isPending: eS } = (0, o._U)(g.b9, O),
            eE =
              ((R = null == S),
              ($ = (0, i.c)(12)),
              (K = void 0 === R || R),
              (Q = (0, o.Ul)(c.Dj)),
              $[0] !== ef || $[1] !== Q ? ((Y = Q.includes(ef)), ($[0] = ef), ($[1] = Q), ($[2] = Y)) : (Y = $[2]),
              (Z = Y),
              $[3] !== ef ? ((W = { hostId: ef }), ($[3] = ef), ($[4] = W)) : (W = $[4]),
              (J = (0, o._U)(K ? w.J8 : null, W)),
              (ee = J?.data),
              (et = (0, o._U)(K ? c.QN : null, ef)),
              $[5] !== ee?.service_tier || $[6] !== et
                ? ((X = null == et ? null : (0, C.qh)(et, ee?.service_tier ?? null)),
                  ($[5] = ee?.service_tier),
                  ($[6] = et),
                  ($[7] = X))
                : (X = $[7]),
              (ea = X),
              (ei = "string" == typeof ee?.profile ? ee.profile : null),
              (en = K && (!Z || J?.isLoading === !0)),
              $[8] !== ea || $[9] !== ei || $[10] !== en
                ? ((G = { activeProfileForWrite: ei, isLoading: en, serviceTier: ea }),
                  ($[8] = ea),
                  ($[9] = ei),
                  ($[10] = en),
                  ($[11] = G))
                : (G = $[11]),
              G),
            eR =
              ((_ = eE.activeProfileForWrite),
              (er = (0, i.c)(5)),
              (el = (0, o.gh)(y.u)),
              (es = (0, b.B)()),
              er[0] !== ef || er[1] !== es || er[2] !== _ || er[3] !== el
                ? ((eo = async (e) => {
                    ;(await (0, s.V)(el, ef).setDefaultServiceTierConfig(e, _),
                      el.set(c.QN, ef, (0, C.oD)(e)),
                      await Promise.all([es(["config"]), es([...w.Od, ef, null])]),
                      await el.query.fetch(w.J8, { hostId: ef }))
                  }),
                  (er[0] = ef),
                  (er[1] = es),
                  (er[2] = _),
                  (er[3] = el),
                  (er[4] = eo))
                : (eo = er[4]),
              eo)
          ec[8] !== eA ? ((P = { hostId: eA }), (ec[8] = eA), (ec[9] = P)) : (P = ec[9])
          let { serviceTierAccess: e_ } = (0, f.U)(P)
          if (
            ec[10] !== eI?.requirements?.models?.newThread ||
            ec[11] !== e ||
            ec[12] !== S ||
            ec[13] !== a ||
            ec[14] !== ef ||
            ec[15] !== eS ||
            ec[16] !== eC ||
            ec[17] !== ey ||
            ec[18] !== m ||
            ec[19] !== ew?.serviceTier ||
            ec[20] !== eb ||
            ec[21] !== ev?.models ||
            ec[22] !== eu.isLoading ||
            ec[23] !== eu.model ||
            ec[24] !== eu.serviceTier ||
            ec[25] !== eg ||
            ec[26] !== ep ||
            ec[27] !== e_ ||
            ec[28] !== eh ||
            ec[29] !== ed ||
            ec[30] !== eR ||
            ec[31] !== eE.isLoading ||
            ec[32] !== eE.serviceTier
          ) {
            let t,
              i = (0, A.bs)(ev?.models, eu.model),
              o = eI?.requirements?.models?.newThread,
              l = null == e && m && null != o,
              c = l ? o.serviceTier : null,
              u = null != c,
              d = null == S ? eE.serviceTier : (S.serviceTier ?? (0, C.Q7)(null)),
              f = null == S ? d : (0, C.Q7)((0, C.DS)(i, d)),
              g = null == e && null != a ? a.value : u ? (0, C.Q7)(c) : f,
              v = void 0 !== eu.serviceTier ? eu.serviceTier : ew?.serviceTier,
              y = null != e && void 0 !== v ? v : null != e && void 0 !== eb ? eb : g
            null != eg && (y = eg.serviceTier)
            let w = null != eg || (null != e && (void 0 !== v || void 0 !== eb))
            ;((q = (0, C.E_)(w ? null : i, y, e_)),
              (F = (e) => {
                let t = (0, A.bs)(ev?.models, e),
                  a = w ? q : (0, C.E_)(t, y, e_)
                return (0, C.DS)(t, a)
              }),
              (L = null == q ? null : (0, C.DS)(i, q)))
            let b = (0, C.XK)(q ?? null)
            ;((N = eC || eu.isLoading || ey || eE.isLoading || S?.isLoading === !0 || (null == e && eS)),
              (j = async (t, i) => {
                let o = null != S ? ep.get(I.Wo) : null,
                  l = null == e ? null : ep.get(p.EX, ["conversation", e]),
                  c = ep.get(p.pu, eh),
                  m = null != c || u || (0, C.Q7)(t) !== d,
                  f = null != e && (null != c || t !== ew?.serviceTier),
                  g = { serviceTier: t }
                l?.serviceTier === void 0 && ep.set(p.pu, eh, g)
                let v = !1,
                  y = !1
                try {
                  if (
                    (l?.serviceTier !== void 0
                      ? (y = !(v = await ed(l.model, l.reasoningEffort, { persistAsDefault: !1, serviceTier: t })))
                      : f && (await (0, s.V)(ep, ef).updateThreadSettingsForNextTurn(e, { serviceTier: t }), (v = !0)),
                    m && !y)
                  )
                    if (null != S) {
                      let e = ep.get(I.Wo)
                      null == o || e?.accountId !== o.accountId || e.userId !== o.userId
                        ? (y = !0)
                        : await ep.get(I.$C).mutateAsync({ serviceTier: (0, r.Pg)(t) ?? "standard" })
                    } else await eR(t)
                } catch (e) {
                  ;((y = !0), x.v.error("Failed to set service tier", { safe: {}, sensitive: { error: e } }))
                }
                if ((ep.get(p.pu, eh) === g && ep.set(p.pu, eh, null), y)) return !1
                if (m || v || (null == e && null != a)) {
                  let e = (0, C.XK)(t)
                  if (b === e) return !0
                  ;(0, h.yy)(ep, n.CodexServiceTierChanged, { previousServiceTier: b, serviceTier: e, source: i })
                }
                return !0
              }),
              (U = l),
              (H = ef),
              (B = e_),
              ec[42] !== e_ ? ((t = (e) => (0, r.uw)(e.value, e_)), (ec[42] = e_), (ec[43] = t)) : (t = ec[43]),
              (D = (0, C.HN)(i).filter(t)),
              (ec[10] = eI?.requirements?.models?.newThread),
              (ec[11] = e),
              (ec[12] = S),
              (ec[13] = a),
              (ec[14] = ef),
              (ec[15] = eS),
              (ec[16] = eC),
              (ec[17] = ey),
              (ec[18] = m),
              (ec[19] = ew?.serviceTier),
              (ec[20] = eb),
              (ec[21] = ev?.models),
              (ec[22] = eu.isLoading),
              (ec[23] = eu.model),
              (ec[24] = eu.serviceTier),
              (ec[25] = eg),
              (ec[26] = ep),
              (ec[27] = e_),
              (ec[28] = eh),
              (ec[29] = ed),
              (ec[30] = eR),
              (ec[31] = eE.isLoading),
              (ec[32] = eE.serviceTier),
              (ec[33] = N),
              (ec[34] = L),
              (ec[35] = F),
              (ec[36] = q),
              (ec[37] = j),
              (ec[38] = D),
              (ec[39] = U),
              (ec[40] = H),
              (ec[41] = B))
          } else
            ((N = ec[33]),
              (L = ec[34]),
              (F = ec[35]),
              (q = ec[36]),
              (j = ec[37]),
              (D = ec[38]),
              (U = ec[39]),
              (H = ec[40]),
              (B = ec[41]))
          return (
            ec[44] !== N || ec[45] !== L || ec[46] !== F || ec[47] !== q || ec[48] !== D
              ? ((V = {
                  availableOptions: D,
                  isLoading: N,
                  selectedServiceTier: L,
                  selectedServiceTierForModel: F,
                  serviceTierForRequest: q,
                }),
                (ec[44] = N),
                (ec[45] = L),
                (ec[46] = F),
                (ec[47] = q),
                (ec[48] = D),
                (ec[49] = V))
              : (V = ec[49]),
            ec[50] !== j || ec[51] !== V || ec[52] !== U || ec[53] !== H || ec[54] !== B
              ? ((z = {
                  hasManagedNewThreadSettings: U,
                  hostId: H,
                  serviceTierAccess: B,
                  serviceTierSettings: V,
                  setServiceTier: j,
                }),
                (ec[50] = j),
                (ec[51] = V),
                (ec[52] = U),
                (ec[53] = H),
                (ec[54] = B),
                (ec[55] = z))
              : (z = ec[55]),
            z
          )
        })(O, j, L.serviceTier, F, P)
      ;(k[0] !== D
        ? (({ serviceTierAccess: R, ...a } = D), (k[0] = D), (k[1] = a), (k[2] = R))
        : ((a = k[1]), (R = k[2])),
        k[3] !== a ||
        k[4] !== O ||
        k[5] !== P ||
        k[6] !== L.serviceTier ||
        k[7] !== F ||
        k[8] !== N ||
        k[9] !== R ||
        k[10] !== q
          ? ((_ = async (e, t) => {
              if (!(0, r.uw)(e, R)) return !1
              let i = null == O && F && (a.hasManagedNewThreadSettings || null != P || null != L.serviceTier)
              i && q((t) => ({ ...t, isManuallyChanged: !0, serviceTier: { value: (0, C.Q7)(e) } }))
              let [n] = await Promise.all([
                a.setServiceTier(e, t),
                i ? (0, s.V)(N, a.hostId).clearPrewarmedThreads() : void 0,
              ])
              return n
            }),
            (k[3] = a),
            (k[4] = O),
            (k[5] = P),
            (k[6] = L.serviceTier),
            (k[7] = F),
            (k[8] = N),
            (k[9] = R),
            (k[10] = q),
            (k[11] = _))
          : (_ = k[11]))
      let U = _
      return (
        k[12] !== a || k[13] !== U
          ? ((T = { ...a, setServiceTier: U }), (k[12] = a), (k[13] = U), (k[14] = T))
          : (T = k[14]),
        T
      )
    }
  },
  NMCC(e, t, a) {
    var i = a("TSib"),
      n = a("uIyc"),
      o = a("qEnx"),
      r = a("urzV"),
      l = a("CBsD"),
      s = a("Yscs")
    let c = new WeakMap()
    function u(e, t, a) {
      if (!e.get(i.JX).some((e) => e.attachmentId === a && e.attachmentSrc === t)) return
      let o = c.get(e.node),
        r = o?.delete(a) ?? !1
      ;(o?.size === 0 && c.delete(e.node),
        r || (0, n.td)(e, a),
        (0, i.Kk)(e, (e) => {
          ;((e.imageCommentDrafts = e.imageCommentDrafts.filter((e) => e.attachmentId !== a)),
            r || (e.imageAttachments = e.imageAttachments.filter((e) => e.id !== a)))
        }))
    }
    async function d(e, t) {
      try {
        let a = await f(e, t)
        if ((t.throwIfAborted(), null == a)) return (p(e), !1)
        let n = await (0, o.s)({ dataUrl: a, filename: e.downloadFileName })
        return (
          t.throwIfAborted(),
          (0, i.Kk)(e.composerScope, (t) => {
            let i = t.imageAttachments.find((t) => t.id === e.attachmentId)
            null != i && ((i.uploadSrc = a), Object.assign(i, n))
          }),
          !0
        )
      } catch {
        return (t.aborted || p(e), !1)
      }
    }
    function p(e) {
      let t = e.composerScope
          .get(i.JX)
          .find((t) => t.attachmentId === e.attachmentId && t.attachmentSrc === e.attachmentSrc),
        a = e.composerScope.get(i.gy).some((t) => t.id === e.attachmentId)
      null != t && a && e.onUploadFailure?.()
    }
    function m(e) {
      return e.src.startsWith("data:image/") ? e.src : e.downloadSrc.startsWith("data:image/") ? e.downloadSrc : null
    }
    async function f(e, t) {
      let a = m(e)
      if (null != a) return a
      if (null != e.absoluteImageFilePath)
        return (0, l.fB)(e.absoluteImageFilePath, e.hostId, e.queryClient, t, e.conversationId)
      try {
        let a = await (0, r.M2)(e.downloadSrc, { signal: t })
        if (null == a || !a.blob.type.startsWith("image/")) return null
        return await (0, s.G)(a.blob)
      } catch {
        return null
      }
    }
    a.d(
      t,
      {},
      {
        CB: function (e, t) {
          if (0 === t.length) return void u(e.composerScope, e.attachmentSrc, e.attachmentId)
          let a = m(e),
            o = !1
          if (
            ((0, i.Kk)(e.composerScope, (i) => {
              let n = i.imageCommentDrafts.findIndex((t) => t.attachmentId === e.attachmentId),
                r = i.imageAttachments.some((t) => t.id === e.attachmentId),
                l = { attachmentId: e.attachmentId, attachmentSrc: e.attachmentSrc, comments: t }
              ;(-1 === n ? i.imageCommentDrafts.push(l) : (i.imageCommentDrafts[n] = l),
                r ||
                  (i.imageAttachments.push({
                    excludeFromImageAnalytics: !!e.excludeFromImageAnalytics || void 0,
                    filename: e.downloadFileName,
                    id: e.attachmentId,
                    previewSrc: e.src,
                    src:
                      !e.isCloudComposer && /^(https?:|blob:)/i.test(e.attachmentSrc) && null != a
                        ? a
                        : e.attachmentSrc,
                    uploadSrc: a ?? void 0,
                    ...(e.isCloudComposer || null == a ? { uploadStatus: "uploading" } : {}),
                  }),
                  (o = !0)))
            }),
            !o || (!e.isCloudComposer && null != a))
          )
            return
          let r = new AbortController(),
            l = (0, n.Mz)(e.composerScope, { hostId: e.hostId, id: e.attachmentId, onCancel: () => r.abort() })
          ;(e.isCloudComposer
            ? d(e, r.signal)
            : (async function (e, t) {
                let a = await f(e, t)
                if ((t.throwIfAborted(), null == a))
                  return (
                    (0, i.Kk)(e.composerScope, (t) => {
                      let a = t.imageAttachments.find((t) => t.id === e.attachmentId)
                      null != a && (a.uploadStatus = "error")
                    }),
                    !1
                  )
                let n = "cloud" === e.composerScope.get(i.YH)
                return (
                  (0, i.Kk)(e.composerScope, (t) => {
                    let i = t.imageAttachments.find((t) => t.id === e.attachmentId)
                    null != i &&
                      ((i.uploadSrc = a),
                      /^(https?:|blob:)/i.test(e.attachmentSrc) && (i.src = a),
                      (i.uploadStatus = n ? "uploading" : "idle"))
                  }),
                  !n || d(e, t)
                )
              })(e, r.signal)
          ).then(
            (e) => {
              e ? l.succeed() : l.fail()
            },
            () => {
              l.fail()
            },
          )
        },
        E$: function (e, t, a) {
          ;(0, i.Kk)(e, (i) => {
            if (!i.imageCommentDrafts.some((e) => e.attachmentId === t)) {
              if (i.imageAttachments.some((e) => e.id === t)) {
                let a = c.get(e.node) ?? new Set()
                ;(a.add(t), c.set(e.node, a))
              }
              i.imageCommentDrafts.push({ attachmentId: t, attachmentSrc: a, comments: [] })
            }
          })
        },
        II: function (e, t) {
          let a = new Set(
            e
              .get(i.JX)
              .filter((e) => null == t || e.attachmentId === t)
              .map((e) => e.attachmentId),
          )
          if (0 === a.size) return
          let o = c.get(e.node),
            r = new Set()
          for (let t of a) o?.delete(t) || (r.add(t), (0, n.td)(e, t))
          ;(o?.size === 0 && c.delete(e.node),
            (0, i.Kk)(e, (e) => {
              ;((e.imageCommentDrafts = e.imageCommentDrafts.filter((e) => !a.has(e.attachmentId))),
                (e.imageAttachments = e.imageAttachments.filter((e) => !r.has(e.id))))
            }))
        },
        ec: function (e, t, a) {
          u(e, a, t)
        },
      },
    )
  },
  JwwD(e, t, a) {
    var i = a("dSuP"),
      n = a("SPnB"),
      o = a("vq5I"),
      r = a("yGJW")
    a.d(
      t,
      {},
      {
        Q: function (e, t, { isBulkSelection: a }) {
          let l = e.get(n.chatGptAuthenticatedAccountId$),
            s = e.get(n.chatGptAuthenticatedUserId$),
            c = new Set(t.libraryFileIds),
            u = new Map()
          for (let e of c) {
            if (0 === e.length) continue
            let t = (0, o.Pw)(e),
              a = u.get(t)
            ;(null == a &&
              ((a = { libraryFileIds: new Set(), pending: new Set(), canceled: !1, finished: !1 }), u.set(t, a)),
              a.libraryFileIds.add(e),
              a.pending.add(e))
          }
          let d = { ...t, isFavorited: a || 1 !== c.size ? void 0 : t.isFavorited },
            p = (t, a, c) => {
              if (
                a.length > 0 &&
                e.get(n.chatGptAuthenticatedAccountId$) === l &&
                e.get(n.chatGptAuthenticatedUserId$) === s
              ) {
                let n = new Set(a.map(o.Pw))
                ;(0, r.yy)(e, i.Y9, {
                  ...d,
                  action: t,
                  libraryFileIds: JSON.stringify({ libraryFileIds: a }).length <= 2e3 ? a : void 0,
                  provider: 1 === n.size ? n.values().next().value : void 0,
                  error: null == c ? void 0 : { type: c.type, code: c.code },
                })
              }
            },
            m = (e, t, a) => {
              for (let i of e) {
                let e = u.get((0, o.Pw)(i))
                if (null == e || e.finished || !e.pending.delete(i)) continue
                if (("excluded" === t && e.libraryFileIds.delete(i), "canceled" === t)) {
                  e.canceled = !0
                  continue
                }
                if ("failed" !== t && (e.pending.size > 0 || e.canceled || 0 === e.libraryFileIds.size)) continue
                e.finished = !0
                let n = [...e.libraryFileIds]
                ;(p("CHATGPT_FILE_LIBRARY_ATTACH_ACTION_CONFIRMED", n),
                  p(
                    "failed" !== t
                      ? "CHATGPT_FILE_LIBRARY_ATTACH_ACTION_ATTACHED"
                      : "CHATGPT_FILE_LIBRARY_ATTACH_ACTION_FAILED",
                    n,
                    "failed" === t
                      ? { type: a?.type ?? "CHATGPT_FILE_LIBRARY_ERROR_TYPE_INVALID_RESPONSE", code: a?.code }
                      : void 0,
                  ))
              }
            }
          return {
            attached: (e) => m(e, "attached"),
            failed: (e, t) => m(e, "failed", t),
            canceled: (e) => m(e, "canceled"),
            excluded: (e) => m(e, "excluded"),
          }
        },
      },
    )
  },
  F1Es(e, t, a) {
    var i = a("NxBK")
    let n = new WeakSet(),
      o = new WeakSet()
    a.d(
      t,
      {},
      {
        S: function (e, t, a, r) {
          let l,
            s = e.getQueryCache(),
            c = s.find({ queryKey: t, exact: !0 })
          if (null == c) return a()
          n.add(c)
          let u = !1,
            d = s.subscribe((e) => {
              if (e.query === c) {
                if ("removed" === e.type) return void d()
                if ("updated" === e.type)
                  if ("fetch" === e.action.type) {
                    if (u) return void d()
                    ;((u = !0), (l = r?.(c)))
                  } else {
                    if (!u) return
                    ;("success" !== e.action.type || e.action.manual) && "error" !== e.action.type
                      ? "setState" === e.action.type && "idle" === c.state.fetchStatus && d()
                      : (("error" === e.action.type && e.action.error instanceof i.cc) ||
                          l?.("success" === e.action.type),
                        (l = void 0),
                        d())
                  }
              }
            })
          try {
            return a()
          } finally {
            ;(u && null != c.promise && o.add(c.promise), n.delete(c), (u && null != r) || d())
          }
        },
        e: function (e, t = "active") {
          return null != e && (n.has(e) || ("active" === t && null != e.promise && o.has(e.promise)))
            ? "CHATGPT_FILE_LIBRARY_LOAD_TRIGGER_USER_RETRY"
            : void 0
        },
      },
    )
  },
  ArQy(e, t, a) {
    a.d(t, { i: () => m, U: () => p })
    var i = a("ozm1"),
      n = a("dSuP"),
      o = a("SPnB"),
      r = a("T8X0"),
      l = a("vq5I"),
      s = a("JwwD"),
      c = a("F1Es"),
      u = a("yGJW")
    let d = {
      imanage: void 0,
      native: "CHATGPT_FILE_LIBRARY_MENU_ACTION_LIBRARY_VISIBILITY",
      google_drive: "CHATGPT_FILE_LIBRARY_MENU_ACTION_GOOGLE_DRIVE_VISIBILITY",
      box: "CHATGPT_FILE_LIBRARY_MENU_ACTION_BOX_VISIBILITY",
      dropbox: "CHATGPT_FILE_LIBRARY_MENU_ACTION_DROPBOX_VISIBILITY",
      sharepoint: "CHATGPT_FILE_LIBRARY_MENU_ACTION_SHAREPOINT_VISIBILITY",
      onedrive: "CHATGPT_FILE_LIBRARY_MENU_ACTION_ONEDRIVE_VISIBILITY",
    }
    function p(e, t, a, i, n) {
      return (0, c.S)(e, t, n, (n) => {
        let o = a?.startLoad(
          n.state.fetchMeta?.fetchMore?.direction === "forward" ? "append" : "refresh",
          i,
          "CHATGPT_FILE_LIBRARY_LOAD_TRIGGER_USER_RETRY",
        )
        return (a) =>
          o?.({
            success: a,
            files: e.getQueryData(t)?.pages.flatMap((e) => e.items.flatMap((e) => ("file" === e.kind ? [e.file] : []))),
          })
      })
    }
    function m(e, { conversationId: t, entryPoint: a, libraryOrigin: c }) {
      let p,
        f = e.get(o.chatGptAuthenticatedAccountId$),
        h = e.get(o.chatGptAuthenticatedUserId$),
        g = () => e.get(o.chatGptAuthenticatedAccountId$) === f && e.get(o.chatGptAuthenticatedUserId$) === h,
        v = {
          sessionId: crypto.randomUUID(),
          libraryVariant: "CHATGPT_FILE_LIBRARY_VARIANT_ATTACHMENT_PICKER",
          get productExperience() {
            return "work" === e.get(r.uI) ? "work" : "chat"
          },
        },
        y = !1,
        w = !1,
        b = !1,
        C = 0,
        x = new Set()
      return {
        startAttachment(i) {
          if (g() && "CHATGPT_FILE_LIBRARY_ENTRY_POINT_COMPOSER" === a)
            return (0, s.Q)(
              e,
              { ...v, conversationId: t, entrypoint: "composer_library_picker", libraryFileIds: i },
              { isBulkSelection: !0 },
            )
        },
        shown(i, o, r) {
          ;((b = !1),
            !y &&
              !w &&
              g() &&
              ((y = !0),
              (0, u.yy)(e, n.N6, {
                ...v,
                action: "CHATGPT_FILE_LIBRARY_ACTION_SHOWN",
                libraryOrigin: c,
                conversationId: t,
                entryPoint: a,
                layout: "grid" === i ? "CHATGPT_FILE_LIBRARY_LAYOUT_GRID" : "CHATGPT_FILE_LIBRARY_LAYOUT_LIST",
                visibleProviders: o?.map((e) => l.TP[e]).filter((e) => null != e),
                googleDriveVisible: r ? o?.includes("google_drive") : void 0,
              })))
        },
        dismissed() {
          !y ||
            w ||
            b ||
            ((b = !0),
            queueMicrotask(() => {
              !b ||
                w ||
                ((w = !0),
                y &&
                  g() &&
                  (0, u.yy)(e, n.N6, {
                    ...v,
                    action: "CHATGPT_FILE_LIBRARY_ACTION_DISMISSED",
                    libraryOrigin: c,
                    conversationId: t,
                  }))
            }))
        },
        layoutChanged(a) {
          g() &&
            (0, u.yy)(e, n.N6, {
              ...v,
              action: "CHATGPT_FILE_LIBRARY_ACTION_VIEW_CHANGED",
              changedProperty: "CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_LAYOUT",
              layout: "grid" === a ? "CHATGPT_FILE_LIBRARY_LAYOUT_GRID" : "CHATGPT_FILE_LIBRARY_LAYOUT_LIST",
              libraryOrigin: c,
              conversationId: t,
            })
        },
        providerMenuShown(t) {
          y &&
            !w &&
            !b &&
            g() &&
            (0, u.yy)(e, n.fS, {
              sessionId: v.sessionId,
              libraryVariant: v.libraryVariant,
              menuKind: "CHATGPT_FILE_LIBRARY_MENU_KIND_PICKER_MORE",
              availableActionSet: t.map((e) => d[e]).filter((e) => null != e),
            })
        },
        providersChanged(a, i) {
          g() &&
            (0, u.yy)(e, n.N6, {
              ...v,
              action: "CHATGPT_FILE_LIBRARY_ACTION_VIEW_CHANGED",
              changedProperty: "CHATGPT_FILE_LIBRARY_CHANGED_PROPERTY_PROVIDER_VISIBILITY",
              changedProvider: l.TP[a],
              visibleProviders: i.map((e) => l.TP[e]).filter((e) => null != e),
              provider: 1 === i.length ? l.TP[i[0]] : void 0,
              googleDriveVisible: i.includes("google_drive"),
              libraryOrigin: c,
              conversationId: t,
            })
        },
        startUpload() {
          if (y && !w && !b && g())
            return (function (e, { sessionId: t, libraryVariant: a }, i) {
              let o = "pending",
                r = !1,
                s = (o, r) => {
                  i() && (0, u.yy)(e, n.QD, { sessionId: t, libraryVariant: a, action: o, error: r })
                }
              return {
                shown() {
                  "pending" === o && ((o = "shown"), s("CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_SHOWN"))
                },
                canceled() {
                  "settled" !== o && ((o = "settled"), s("CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_CANCELED"))
                },
                fileSelected: () =>
                  "shown" === o &&
                  !!i() &&
                  ((o = "selected"), s("CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_FILE_SELECTED"), !0),
                filesRejected() {
                  r = !0
                },
                completed(e, t) {
                  let a
                  if ("selected" !== o) return
                  o = "settled"
                  let i = "partial" === e || ("success" === e && r)
                  ;(("success" !== e || i) &&
                    null == (a = (0, l.QJ)(t)) &&
                    r &&
                    (a = { type: "CHATGPT_FILE_LIBRARY_ERROR_TYPE_BAD_REQUEST" }),
                    a?.type === "CHATGPT_FILE_LIBRARY_ERROR_TYPE_MISSING_LIBRARY_FILE" &&
                      (a.type = "CHATGPT_FILE_LIBRARY_ERROR_TYPE_BAD_REQUEST"),
                    a?.httpStatus != null && a.httpStatus < 400 && (a.httpStatus = void 0))
                  let n = "CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_UPLOAD_SUCCEEDED"
                  ;("failed" === e
                    ? (n = "CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_UPLOAD_FAILED")
                    : i && (n = "CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_UPLOAD_PARTIAL"),
                    s(n, a))
                },
              }
            })(e, v, g)
        },
        upload() {
          g() &&
            (0, u.yy)(e, n.QD, {
              sessionId: v.sessionId,
              libraryVariant: v.libraryVariant,
              action: "CHATGPT_FILE_LIBRARY_UPLOAD_ACTION_TAPPED",
            })
        },
        startLoad(a, o, r) {
          "refresh" === a && (C += 1)
          let s = C,
            c = crypto.randomUUID(),
            d = performance.now(),
            p = !1,
            m = {
              ...v,
              loadType:
                "append" === a ? "CHATGPT_FILE_LIBRARY_LOAD_TYPE_APPEND" : "CHATGPT_FILE_LIBRARY_LOAD_TYPE_REFRESH",
              operationId: c,
              provider: 1 === o.length ? l.TP[o[0]] : void 0,
              conversationId: t,
              libraryOrigin: "CHATGPT_FILE_LIBRARY_ORIGIN_COMPOSER_MENU",
            }
          return (
            null != r && !w && !b && g() && (0, u.yy)(e, n.Xz, { ...m, trigger: r }),
            ({ success: t, files: o }) => {
              if (!p && !w && !b && s === C && g()) {
                if (((p = !0), t && null != o)) for (let e of ("refresh" === a && x.clear(), o)) x.add(e.file_id)
                ;(0, u.yy)(e, n.Xz, {
                  ...m,
                  success: t,
                  errorType: t ? void 0 : "request_failed",
                  itemCount: t ? (0, i.PZ)(x.size) : void 0,
                  latencyMs: (0, i.N3)(Math.max(0, performance.now() - d), "round"),
                })
              }
            }
          )
        },
        resultsShown({
          query: t,
          files: a,
          loadedFiles: o,
          sharedItems: r,
          hasProviderFilter: l,
          hasNextPage: s,
          isSearchResult: c,
          partialResults: d,
          searchQueryId: m,
        }) {
          let f
          if (w || b || !g()) return
          for (let e of (x.clear(), o)) x.add(e.file_id)
          let h = a.length + r.length
          if (0 === h)
            if (t.trim().length > 0 && c) {
              if (null == m || s || d) return
              f = "CHATGPT_FILE_LIBRARY_EMPTY_REASON_QUERY_NO_MATCH"
            } else
              l
                ? (f = "CHATGPT_FILE_LIBRARY_EMPTY_REASON_FILTER")
                : 0 === t.trim().length && 0 === o.length && (f = "CHATGPT_FILE_LIBRARY_EMPTY_REASON_NO_LIBRARY_FILES")
          let y = JSON.stringify([t, m, a.map((e) => e.id), r.map((e) => e.id), l, f])
          y !== p &&
            ((p = y), (0, u.yy)(e, n.oq, { ...v, visibleItemCount: (0, i.PZ)(h), emptyReason: f, searchQueryId: m }))
        },
        selectionChanged({ item: a, changedItems: o, libraryFileIds: r, folderIds: s, selectedCount: d }) {
          if (0 === o.length || !g()) return
          let p = new Set((null == a ? o : [a]).map((e) => (0, l.Pw)(e.id)))
          ;(0, u.yy)(e, n.pG, {
            ...v,
            interactionType:
              null != a && (r.includes(a.id) || s.includes(a.id))
                ? "CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_SELECTED"
                : "CHATGPT_FILE_LIBRARY_FILE_INTERACTION_TYPE_DESELECTED",
            artifactId: null == a || ("kind" in a && "directory" === a.kind) ? void 0 : (a.file_id ?? a.id),
            fileCategory: null != a && "library_file_category" in a ? (a.library_file_category ?? void 0) : void 0,
            selectedCount: (0, i.PZ)(d),
            libraryFileIds: r,
            changedLibraryFileIds: o.filter((e) => !("kind" in e) || "file" === e.kind).map((e) => e.id),
            changedFolderIds: o.filter((e) => "kind" in e && "directory" === e.kind).map((e) => e.id),
            folderIds: s,
            libraryOrigin: c,
            conversationId: t,
            provider: 1 === p.size ? p.values().next().value : void 0,
          })
        },
      }
    }
  },
  m88r(e, t, a) {
    a.d(t, { i: () => f })
    var i = a("Qgfj"),
      n = a("qixt"),
      o = a("bnxy"),
      r = a("XSLO"),
      l = a("ivPw")
    let s = new Set([".", "*", "+", "?", "^", "$", "{", "}", "(", ")", "|", "[", "]"])
    function c(e) {
      let t = "",
        a = !1
      for (let n of e) {
        if (a) {
          var i
          if (((i = n), /^[A-Za-z0-9]$/.test(i))) return null
          ;((t += n), (a = !1))
          continue
        }
        if ("\\" === n) {
          a = !0
          continue
        }
        if (s.has(n)) return null
        t += n
      }
      return a ? null : t
    }
    function u([e, ...t], a) {
      return a([d(e), ...t.map(d)])
    }
    function d(e) {
      return `“${e.replace(/^["']+/, "").replace(/["']+$/, "")}”`
    }
    var p = a("Z2lA"),
      m = a("pNUK")
    function f({ items: e, threadDetailLevel: t, formatSearchQueryTermList: a }) {
      return (
        h({ items: e, threadDetailLevel: t, formatSearchQueryTermList: a, inProgressOnly: !0 }) ??
        h({ items: e, threadDetailLevel: t, formatSearchQueryTermList: a, inProgressOnly: !1 })
      )
    }
    function h({ items: e, threadDetailLevel: t, formatSearchQueryTermList: a, inProgressOnly: i }) {
      for (let d = e.length - 1; d >= 0; d -= 1) {
        var s
        let f = e[d]
        if (f?.type !== "exec" || (i && !("interrupted" !== (s = f).executionStatus && !s.parsedCmd.isFinished)))
          continue
        let h = (function ({ item: e, threadDetailLevel: t, formatSearchQueryTermList: a }) {
          let i = e.parsedCmd,
            s = (0, r.X)(e.executionStatus) ? (0, r.mw)(i.cmd) : null,
            d =
              null == s
                ? null
                : (function (e) {
                    switch (e) {
                      case "create":
                        return r.yz.activeCreating
                      case "update":
                        return r.yz.activeUpdating
                    }
                  })(s)
          if (null != d) return { activityKey: e.callId, icon: "edit-files", message: d }
          switch (i.type) {
            case "read": {
              let t = i.displayLabel ?? (0, o.Q0)((0, l.i)(i.path ?? i.name)),
                a = (0, p.$)({ summary: i, cwd: e.cwd }),
                n = a?.isSkillDefinitionFile === !0
              if (null != a && n && (0, m.n)(a))
                return { activityKey: e.callId, icon: "internal-knowledge", message: g.readInternalKnowledge }
              return {
                activityKey: e.callId,
                icon: "run-command",
                message: n ? g.readSkill : g.read,
                values: n ? { skillName: a.skillName } : { target: t },
              }
            }
            case "search":
              return (function ({
                activityKey: e,
                path: t,
                query: a,
                threadDetailLevel: i,
                formatSearchQueryTermList: o,
              }) {
                if (t)
                  return {
                    activityKey: e,
                    icon: "code-searching",
                    message: g.searchFolder,
                    values: { folder: (0, l.i)(t) },
                  }
                if (a) {
                  let t =
                    i === n.O$
                      ? (function (
                          e,
                          t = function ([e, ...t]) {
                            let a = e
                            for (let [e, i] of t.entries()) {
                              let n = e === t.length - 1 ? (1 === t.length ? " and " : ", and ") : ", "
                              a += `${n}${i}`
                            }
                            return a
                          },
                        ) {
                          let a = (function (e) {
                            let t = (function (e) {
                              let t = [],
                                a = 0,
                                i = !1
                              for (let n = 0; n < e.length; n += 1) {
                                let o = e[n]
                                if (i) {
                                  i = !1
                                  continue
                                }
                                if ("\\" === o) {
                                  i = !0
                                  continue
                                }
                                "|" === o && (t.push(e.slice(a, n)), (a = n + 1))
                              }
                              return 0 === t.length ? [] : (t.push(e.slice(a)), t)
                            })(e)
                            if (t.length < 2) return null
                            let a = []
                            for (let e of t) {
                              let t = c(e)
                              if (null == t || 0 === t.length) return null
                              a.push(t)
                            }
                            return (function (e) {
                              let [t, ...a] = e
                              return null == t ? null : [t, ...a]
                            })(a)
                          })(e)
                          return null != a ? u(a, t) : u([c(e) ?? e], t)
                        })(a, o)
                      : a
                  return { activityKey: e, icon: "code-searching", message: g.searchQuery, values: { query: t } }
                }
                return { activityKey: e, icon: "code-searching", message: g.searchFiles }
              })({
                activityKey: e.callId,
                path: i.path,
                query: i.query,
                threadDetailLevel: t,
                formatSearchQueryTermList: a,
              })
            case "list_files":
              if (null == i.path) return { activityKey: e.callId, icon: "list-files", message: g.listFiles }
              return {
                activityKey: e.callId,
                icon: "list-files",
                message: g.listFolder,
                values: { folder: (0, l.i)(i.path) },
              }
            case "format":
            case "lint":
            case "noop":
            case "test":
            case "unknown":
              return (function (e) {
                let t
                t =
                  "interrupted" === e.executionStatus
                    ? g.commandStopped
                    : e.parsedCmd.isFinished
                      ? g.commandRan
                      : g.commandRunning
                let a = e.parsedCmd.cmd.trim()
                return 0 === a.length
                  ? {
                      activityKey: e.callId,
                      icon: "interrupted" === e.executionStatus ? "stop" : "run-command",
                      message: t,
                    }
                  : {
                      activityKey: e.callId,
                      icon: "interrupted" === e.executionStatus ? "stop" : "run-command",
                      message:
                        "interrupted" === e.executionStatus
                          ? g.commandStoppedWithDetail
                          : e.parsedCmd.isFinished
                            ? g.commandRanWithDetail
                            : g.commandRunningWithDetail,
                      values: { command: a },
                    }
              })(e)
          }
        })({ item: f, threadDetailLevel: t, formatSearchQueryTermList: a })
        if (null != h) return h
      }
      return null
    }
    let g = (0, i.YK)({
      read: {
        id: "localConversation.toolActivity.active.read",
        defaultMessage: "<action>Reading</action> <detail>{target}</detail>",
        description: "Active tool activity summary while Codex is reading a file",
      },
      readSkill: {
        id: "localConversation.toolActivity.active.readSkill",
        defaultMessage: "<action>Reading</action> <detail>{skillName} skill</detail>",
        description: "Active tool activity summary while Codex is reading a skill definition",
      },
      readInternalKnowledge: {
        id: "localConversation.toolActivity.active.readInternalKnowledge",
        defaultMessage: "<action>Reading</action> <detail>Internal Knowledge</detail>",
        description:
          "Active tool activity summary while Codex is reading the canonical Internal Knowledge skill definition",
      },
      searchFolder: {
        id: "localConversation.toolActivity.active.search.folder",
        defaultMessage: "<action>Searching</action> <detail>files in {folder} folder</detail>",
        description: "Active tool activity summary while Codex is searching files in a folder",
      },
      searchQuery: {
        id: "localConversation.toolActivity.active.search.query",
        defaultMessage: "<action>Searching</action> <detail>for {query}</detail>",
        description: "Active tool activity summary while Codex is searching for a query",
      },
      searchFiles: {
        id: "localConversation.toolActivity.active.search.files",
        defaultMessage: "<action>Searching</action> <detail>files</detail>",
        description: "Active tool activity summary while Codex is searching files",
      },
      listFiles: {
        id: "localConversation.toolActivity.active.list.files",
        defaultMessage: "<action>Listing</action> <detail>files</detail>",
        description: "Active tool activity summary while Codex is listing files",
      },
      listFolder: {
        id: "localConversation.toolActivity.active.list.folder",
        defaultMessage: "<action>Listing</action> <detail>files in {folder} folder</detail>",
        description: "Active tool activity summary while Codex is listing files in a folder",
      },
      commandStopped: {
        id: "localConversation.toolActivity.active.command.stopped",
        defaultMessage: "<action>Stopped command</action>",
        description: "Active tool activity summary after Codex stops a command",
      },
      commandStoppedWithDetail: {
        id: "localConversation.toolActivity.active.command.stopped.detail",
        defaultMessage: "<action>Stopped</action> <detail>{command}</detail>",
        description: "Active tool activity summary after Codex stops a command",
      },
      commandRan: {
        id: "localConversation.toolActivity.active.command.ran",
        defaultMessage: "<action>Ran command</action>",
        description: "Active tool activity summary after Codex runs a command",
      },
      commandRanWithDetail: {
        id: "localConversation.toolActivity.active.command.ran.detail",
        defaultMessage: "<action>Ran</action> <detail>{command}</detail>",
        description: "Active tool activity summary after Codex runs a command",
      },
      commandRunning: {
        id: "localConversation.toolActivity.active.command.running",
        defaultMessage: "<action>Running command</action>",
        description: "Active tool activity summary while Codex runs a command",
      },
      commandRunningWithDetail: {
        id: "localConversation.toolActivity.active.command.running.detail",
        defaultMessage: "<action>Running</action> <detail>{command}</detail>",
        description: "Active tool activity summary while Codex runs a command",
      },
    })
  },
  l4nv(e, t, a) {
    a.d(
      t,
      {},
      {
        w: function (e) {
          let t = []
          if ((null != e.network && t.push({ kind: "network" }), null == e.fileSystem)) return t
          let a = new Set(),
            i = new Set()
          for (let t of e.fileSystem.entries ?? []) {
            let e = (function (e) {
              switch (e.type) {
                case "path":
                  return e.path
                case "glob_pattern":
                  return e.pattern
                case "special":
                  var t = e.value
                  switch (t.kind) {
                    case "root":
                      return "/"
                    case "minimal":
                      return ":minimal"
                    case "project_roots":
                      return null == t.subpath ? ":project_roots" : `:project_roots/${t.subpath}`
                    case "tmpdir":
                      return ":tmpdir"
                    case "slash_tmp":
                      return "/tmp"
                    case "unknown":
                      return null == t.subpath ? t.path : `${t.path}/${t.subpath}`
                  }
                  return
              }
            })(t.path)
            switch (t.access) {
              case "read":
                a.add(e)
                break
              case "write":
                i.add(e)
            }
          }
          let n = Array.from(a),
            o = Array.from(i),
            r = n.filter((e) => i.has(e)),
            l = n.filter((e) => !i.has(e)),
            s = o.filter((e) => !a.has(e))
          return (
            r.length > 0 && t.push({ kind: "fileSystem", access: "readWrite", paths: r }),
            l.length > 0 && t.push({ kind: "fileSystem", access: "read", paths: l }),
            s.length > 0 && t.push({ kind: "fileSystem", access: "write", paths: s }),
            t
          )
        },
      },
    )
  },
  BfCG(e, t, a) {
    var i = a("n5iL"),
      n = a("hGgS")
    let o = new Set(["Meta", "Control", "Alt", "AltGraph", "Shift"])
    a.d(
      t,
      {},
      {
        X: function (e, { defaultPrevented: t, nativeEvent: a }) {
          return (
            !t &&
            (!(a instanceof KeyboardEvent) ||
              (!o.has(a.key) && !e.get(i.xP, "openCommandMenu").some((e) => (0, n.eg)(a, e))))
          )
        },
      },
    )
  },
  Z2lA(e, t, a) {
    var i = a("bnxy"),
      n = a("ivPw"),
      o = a("pNUK")
    function r({ summary: e, cwd: t }) {
      let a = (function ({ summary: e, cwd: t }) {
        switch (e.type) {
          case "read":
            return l({ path: e.path ?? e.name, cwd: t })
          case "list_files":
          case "search":
            if (!e.path) return null
            return l({ path: e.path, cwd: t })
        }
      })({ summary: e, cwd: t })
      return a ? (0, o.F)(a) : null
    }
    function l({ path: e, cwd: t }) {
      if (!e) return null
      let a = (0, n.i)(e)
      return 0 === a.length ? null : null != t ? (0, n.i)((0, i.b0)(t, a)) : a
    }
    a.d(
      t,
      {},
      {
        $: r,
        c: function ({ summary: e, cwd: t }) {
          return r({ summary: e, cwd: t })?.isSkillDefinitionFile === !0
        },
      },
    )
  },
  BApD(e, t, a) {
    var i = a("SRbQ"),
      n = a("pkoC"),
      o = a.n(n),
      r = a("zkY4"),
      l = a("Bl5Q"),
      s = a("DBCl"),
      c = a("PkQL"),
      u = a("uOFa"),
      d = a("RAsy"),
      p = a("LnAF"),
      m = a("Isak"),
      f = a("wTVm"),
      h = a("fAj4"),
      g = a("SPnB"),
      v = a("vldH"),
      y = a("Ghh3"),
      w = a("mt4D"),
      b = a("xKli"),
      C = a("Ld2s"),
      x = a("svjy"),
      A = a("GaA7"),
      M = a("OMIV"),
      I = a("LulU"),
      S = a("yI91"),
      E = a("Nwp9"),
      R = a("KSXx"),
      _ = a("MtDh"),
      T = a("TYK1"),
      k = a("jiwy"),
      O = a("opxc"),
      P = a("uQmz"),
      N = a("uzqr"),
      L = a("MZvE"),
      F = a("XE7W"),
      q = a("aqtt"),
      j = a("v9CB")
    let D = (0, E.m3)("cloud-orbit-composer-sends-v1", {})
    async function U(e, t, a) {
      let n = { stack: [], error: void 0, hasError: !1 }
      try {
        let o = (0, i.mS)(
          n,
          await A.appServices.workspaceFiles.read({ hostId: e, path: t, representation: "blob" }),
          !1,
        )
        if (!("blob" in o)) throw Error("Attachment contents were not returned as a blob")
        return new File([(0, S.K)(o.blob)], a, { type: (0, r.lookup)(a) || "application/octet-stream" })
      } catch (e) {
        ;((n.error = e), (n.hasError = !0))
      } finally {
        ;(0, i.hk)(n)
      }
    }
    a.d(
      t,
      {},
      {
        d: async function ({
          scope: e,
          conversationId: t,
          hostId: a,
          context: i,
          replyToMessageId: n,
          requestId: r,
          pageComment: A,
          entryPoint: E = "conversation",
          beforeSend: H,
          conversations: B,
          onOptimisticMessage: V,
        }) {
          let z,
            Y,
            W = e.get(g.chatGptAuthenticatedAccountId$),
            X = e.get(g.chatGptAuthenticatedUserId$),
            G = e.get(g.kf),
            $ = "loaded" === G.status && "personal" === G.structure ? X : e.get(g.Kw)
          if ("loaded" !== G.status || null == W || null == X || null == $) throw (0, F.t)(e)
          let K = () => {
              if (e.get(g.chatGptAuthenticatedAccountId$) !== W || e.get(g.chatGptAuthenticatedUserId$) !== X)
                throw new DOMException("Messaging account changed", "AbortError")
            },
            Q = new AbortController(),
            Z = (0, F.createNativeMessagingApi)({
              scope: e,
              accountId: W,
              userId: X,
              accountUserId: $,
              conversationId: t,
              entryPoint: E,
              beforeSend: H,
              signal: Q.signal,
              waitForUploads: async (e) => {
                await z?.waitForRequest(e)
              },
              markSubmitted: async (e) => {
                await z?.markSubmitted(e)
              },
              rejectRequest: async (e) => {
                await z?.rejectRequest(e)
              },
              completeRequest: (e) => (Y = z?.completeRequest(e)) ?? Promise.resolve(),
            }),
            J = (t) => (
              null == z &&
                (z = (0, O.C)({
                  scope: e,
                  media: Z.media,
                  signal: Q.signal,
                  roomId: t,
                  accountId: W,
                  userId: X,
                  intl: e.get(x.g),
                })),
              z
            )
          try {
            let g = JSON.stringify([W, X, t]),
              E = (0, m.A)(
                JSON.stringify({
                  ...i,
                  replyToMessageId: n,
                  requestId: r,
                  pageComment: A,
                  ideContext: void 0,
                  inAppBrowserContext: void 0,
                }),
                m.A.URL,
              ),
              O = e.get(D)[g]
            if (O?.draftId !== E) {
              let m = await (0, C.t)(e, i, async (i) => {
                if (((0, k.qo)(e), (0, b.Fc)(i).responseItems.length > 0)) throw new j.oy(s.mHE)
                let m = e.query.snapshot(T.cloudAeonByThreadId$, t),
                  g = await m.getOrFetch()
                if (null == g) throw (0, F.t)(e)
                let C = g.messaging_room_id
                if ("shared" === g.scope) (K(), (C = await e.query.getOrFetch(L.K, g.id)), K())
                else if (null == C) {
                  let e = await y.Request.safePost("/tbo/{tbo_id}/messaging-room", {
                    additionalHeaders: { [s.zBc]: W },
                    parameters: { path: { tbo_id: g.id } },
                  })
                  ;((C = e.messaging_room_id), await m.cancel(), m.setData(e))
                }
                if (null == C) throw (0, F.t)(e)
                let x = e.get(M.JW, "451195040"),
                  [E, R] = o()(i.commentAttachments, (e) => (0, u.X8)(e) || (x && (0, P.j0)(e))),
                  _ = 0 === E.length ? i : { ...i, commentAttachments: R },
                  { attachments: O, appshotContexts: D } = await (async function (e, t, a, i, n) {
                    let o = new AbortController().signal,
                      r = [...(e.uploadedFileAttachments ?? []), ...(e.pastedTextAttachments ?? [])].flatMap(
                        ({ upload: e }) => e ?? [],
                      )
                    if (r.some((e) => null != e.accountId && e.accountId !== a))
                      throw new DOMException("Attachment account changed", "AbortError")
                    let u = (e.pastedTextAttachments ?? []).flatMap((e) =>
                        null == e.file ? [] : [{ file: e.file, hostId: e.hostId ?? t }],
                      ),
                      m = [
                        ...(0, d.Y)(e.fileAttachments)
                          .filter((e) => !(0, s.skP)(e) && !u.some((t) => t.file.fsPath === e.fsPath))
                          .map((e) => async () => {
                            let a = (0, w._Z)(e)
                            return null == a
                              ? U(t, e.fsPath, e.label)
                              : new File([(0, S.K)(a.contentsBase64)], e.label, {
                                  type: a.mimeType ?? "application/octet-stream",
                                })
                          }),
                        ...u.map((e) => () => U(e.hostId, e.file.fsPath, e.file.label)),
                        ...r.map((e) => async () => {
                          let t = await (0, v.fetchChatGptFileBlob)({
                            conversationId: null,
                            target: { type: "file-id", fileId: e.fileId },
                            signal: o,
                          })
                          return new File([t], e.fileName, { type: t.type })
                        }),
                      ],
                      f = (e.appshotContexts ?? []).filter((e) => null != e.imageDataUrl || null != e.imagePath),
                      h =
                        e.imageAttachments.length +
                        (e.mcpAppModelContextAttachments ?? []).reduce((e, t) => e + (0, c.U1)(t).length, 0),
                      g = (0, p.v)(e, !0).flatMap((t, a) => {
                        let i = f[a - h],
                          n = i?.imageName ?? e.imageAttachments[a]?.filename ?? "image.png"
                        return "image" === t.type && "url" in t
                          ? [{ appshot: i, read: async () => (0, I.bX)(t.url, n).file }]
                          : "localImage" === t.type
                            ? [{ appshot: i, read: () => U("local", t.path, n) }]
                            : []
                      }),
                      y = await (0, l.Ay)(
                        [...m.map((e) => ({ read: e, appshot: void 0 })), ...g],
                        async ({ read: e, appshot: t }) => {
                          let a = await e(),
                            r = await n.upload(i, a, { signal: o, onProgress: () => {} })
                          return {
                            attachment: (0, q.UZ)({
                              id: r.fileId,
                              roomId: i,
                              name: a.name,
                              mimeType: a.type,
                              sizeBytes: a.size,
                              previewUrl: "",
                              status: "complete",
                              fileId: r.fileId,
                            }),
                            appshot: t,
                          }
                        },
                        { concurrency: 3 },
                      )
                    return {
                      attachments: y.map(({ attachment: e }) => e),
                      appshotContexts: (e.appshotContexts ?? []).map((e) => {
                        let t = y.find((t) => t.appshot === e)
                        return null == t ? e : { ...e, imageName: t.attachment.fileId, imagePath: null }
                      }),
                    }
                  })(_, a, W, C, Z.media),
                  H =
                    E.length > 0
                      ? await J(C).prepare(
                          E,
                          O.map((e) => e.fileId),
                        )
                      : void 0
                for (let t of D) (0, h.D)(e, t.bundleIdentifier, t.imageName, t.appIconDataUrl)
                let B = {
                  roomId: C,
                  text: (0, b.kv)({ ..._, appshotContexts: D }),
                  requestId: r ?? (0, f.A)(),
                  pageComment: A,
                  replyToMessageId: n,
                  attachmentIds: [...O.map((e) => e.fileId), ...(H?.attachments.map((e) => e.fileId) ?? [])],
                  messageMetadata: H?.messageMetadata,
                }
                if (null != H) {
                  let e = {
                    createdAt: new Date().toISOString(),
                    comments: await Promise.all(
                      E.map(async (e, t) => ({ id: (0, P.qh)(e, t), digest: await (0, N.h)([e]) })),
                    ),
                  }
                  await J(C).retainRequest(B, e)
                }
                return { request: B, attachments: [...O, ...(H?.attachments ?? [])] }
              })
              ;((O = { draftId: E, ...m }), e.set(D, (e) => ({ ...e, [g]: O })))
            }
            if (
              ((0, P.Yi)(O.request.messageMetadata).length > 0 && J(O.request.roomId),
              K(),
              (0, _.VJ)(t) || "stopped" === e.get(_.NU, t))
            ) {
              let a = await (0, R.jP)(e, t, "durable")
              if ("unconfirmed" === a)
                throw new j.oy(
                  e
                    .get(x.g)
                    .formatMessage(
                      {
                        id: "restricted.aeon.messaging.resumeUnconfirmed.productName",
                        defaultMessage: "Could not confirm that your {dot} resumed",
                        description:
                          "Error when sending a message is stopped because resuming the user's agent has an unknown outcome. dot is a common noun for the agent and must remain untranslated.",
                      },
                      { dot: "dot" },
                    ),
                )
            }
            let { request: H } = O,
              z = B?.get(H.roomId).messages.find((e) => e.id === H.replyToMessageId)
            ;(V?.(H.requestId),
              B?.addOptimistic(
                (0, q.$G)(
                  null == O.attachments ? { ...H, text: i.prompt } : H,
                  $,
                  O.attachments ?? [],
                  null == H.replyToMessageId
                    ? null
                    : { messageId: H.replyToMessageId, text: z?.text ?? "", author: z?.senderName ?? "" },
                ),
              ))
            try {
              let e = await Z.client.send(O.request, { retry: !!O.deliveryUnknown })
              B?.delivered(H.roomId, H.requestId, e)
            } catch (t) {
              throw (
                B?.removeOptimistic(H.roomId, H.requestId),
                t instanceof j.Kr &&
                  t.deliveryUnknown &&
                  e.set(D, (e) =>
                    e[g]?.request.requestId !== O.request.requestId ? e : { ...e, [g]: { ...O, deliveryUnknown: !0 } },
                  ),
                t
              )
            }
            e.set(D, (e) => {
              if (e[g]?.request.requestId !== O.request.requestId) return e
              let t = { ...e }
              return (delete t[g], t)
            })
          } finally {
            ;(await Y?.catch(() => {}), Q.abort())
          }
        },
      },
    )
  },
  TKsx(e, t, a) {
    var i = a("zTeN"),
      n = a("Dgwo"),
      o = a("tl5a"),
      r = a("OWtl"),
      l = a("rvFo")
    let s = ["plan", "default"]
    function c(e, t) {
      return {
        queryKey: ["collaboration-modes", "list", t],
        staleTime: l.D.INFINITE,
        queryFn: async () =>
          (function (e, t) {
            let a = {}
            for (let t of e) {
              let e = (function (e) {
                let t = e.mode
                return null == t || "plan" === t || "default" === t ? e : { ...e, mode: "default" }
              })(t)
              null == e.mode || a[e.mode] || (a[e.mode] = e)
            }
            let i = []
            for (let e of t) {
              let t = a[e]
              t && i.push(t)
            }
            return i
          })((await (0, n.V)(e, t).sendRequest("collaborationMode/list", {})).data, s),
      }
    }
    let u = (0, i.vU)(r.u, (e, { scope: t }) => c(t, e)),
      d = (0, i.RD)(r.u, ({ get: e, scope: t }) => c(t, e(o.Dc)))
    a.d(t, {}, { EW: d, aQ: u })
  },
  mHH7(e, t, a) {
    var i = a("OZum"),
      n = a("alO6"),
      o = a("Hkqr")
    a.d(
      t,
      {},
      {
        i: function ({ intl: e, resolvedApps: t, status: a }) {
          let r
          switch (a.type) {
            case "thinking":
              r =
                a.reasoningSummaryLine ??
                e.formatMessage({
                  id: "realtimeVoice.codexStatus.thinking",
                  defaultMessage: "Thinking",
                  description: "Status shown below the realtime voice transcript while Codex works",
                })
              break
            case "tool":
              switch (a.tool.type) {
                case "command":
                  r = e.formatMessage({
                    id: "realtimeVoice.codexStatus.runningCommand",
                    defaultMessage: "Running command",
                    description: "Live Codex activity shown while a command is running",
                  })
                  break
                case "file-change":
                  r = e.formatMessage(
                    {
                      id: "realtimeVoice.codexStatus.editingFiles",
                      defaultMessage: "Editing {count, plural, =0 {files} one {a file} other {# files}}",
                      description: "Live Codex activity shown while files are being edited",
                    },
                    { count: a.tool.fileCount },
                  )
                  break
                case "mcp":
                  if (null == t && null == a.tool.appContext) return null
                  r = (0, n.EP)({
                    pluginId: a.tool.pluginId,
                    appContext: a.tool.appContext,
                    completed: !1,
                    intl: e,
                    matchingApp:
                      null == t
                        ? null
                        : (0, o.M)({
                            appContext: a.tool.appContext,
                            apps: t,
                            functionName: a.tool.functionName,
                            serverName: a.tool.invocation.server,
                            toolName: a.tool.invocation.tool,
                          }),
                    serverName: a.tool.invocation.server,
                    source: a.tool.source,
                    toolArguments: a.tool.invocation.arguments,
                    toolName: a.tool.invocation.tool,
                  })
                  break
                case "dynamic":
                  r =
                    "wait_threads" === a.tool.tool
                      ? e.formatMessage({
                          id: "realtimeVoice.codexStatus.waitingForThread",
                          defaultMessage: "Waiting for chat",
                          description: "Live Codex activity shown while waiting for another chat to make progress",
                        })
                      : (0, i.g)(a.tool.tool, { style: "sentence" })
                  break
                case "web-search":
                  r = a.tool.query.trim()
                    ? e.formatMessage(
                        {
                          id: "realtimeVoice.codexStatus.searchingWebFor",
                          defaultMessage: "Searching the web for {query}",
                          description: "Live Codex activity shown while searching the web for a query",
                        },
                        { query: a.tool.query },
                      )
                    : e.formatMessage({
                        id: "realtimeVoice.codexStatus.searchingWeb",
                        defaultMessage: "Searching the web",
                        description: "Live Codex activity shown while searching the web",
                      })
              }
          }
          let l = "tool" === a.type ? a.activeToolCount - 1 : 0
          return {
            additionalToolsLabel:
              l > 0
                ? e.formatMessage(
                    {
                      id: "realtimeVoice.codexStatus.additionalTools",
                      defaultMessage: "+{count} more",
                      description: "Count of additional tools running alongside the visible live Codex activity",
                    },
                    { count: l },
                  )
                : null,
            label: r,
          }
        },
      },
    )
  },
  pcVU(e, t, a) {
    a.d(t, { l: () => p })
    var i = a("SZCv"),
      n = a.n(i),
      o = a("zTeN"),
      r = a("vdpW"),
      l = a("OWtl"),
      s = a("Faus"),
      c = a("v1hC"),
      u = a("bwpB")
    function d(e) {
      return (
        ("commandExecution" === e.type ||
          "fileChange" === e.type ||
          "mcpToolCall" === e.type ||
          "dynamicToolCall" === e.type) &&
        "inProgress" === e.status
      )
    }
    let p = (0, o.i1)(
      l.u,
      ({ locator: e, hideWhileResponding: t }, { get: a }) => {
        let i = a(r._2, null == e ? null : { hostId: e.hostId, threadId: e.conversationId }),
          n = a(r.OM, i)
        return null == i || "inProgress" !== n
          ? null
          : (function (e, { hideWhileResponding: t = !0 } = {}) {
              if (e?.status !== "inProgress") return null
              let a = e.items.at(-1),
                i = e.items.filter(d)
              a?.type === "webSearch" && i.push(a)
              let n = i.at(-1)
              if (null != n)
                return {
                  type: "tool",
                  activeToolCount: i.length,
                  tool: (function (e) {
                    switch (e.type) {
                      case "commandExecution":
                        return { type: "command" }
                      case "fileChange":
                        return { type: "file-change", fileCount: e.changes.length }
                      case "mcpToolCall":
                        if ("codex_app" === e.server) return { type: "dynamic", tool: e.tool }
                        return {
                          type: "mcp",
                          appContext: e.appContext,
                          pluginId: e.pluginId,
                          functionName: `${e.server}__${e.tool}`,
                          invocation: { arguments: e.arguments, server: e.server, tool: e.tool },
                          source: (0, u.MO)({ resultMeta: e.result?._meta ?? null, serverName: e.server }),
                        }
                      case "dynamicToolCall":
                        return { type: "dynamic", tool: e.tool }
                      case "webSearch":
                        return { type: "web-search", query: e.query }
                    }
                  })(n),
                }
              if (t && a?.type === "agentMessage" && a.text.trim().length > 0) return null
              for (let t = e.items.length - 1; t >= 0; t -= 1) {
                let a = e.items[t]
                if (a?.type !== "reasoning") continue
                let i = (0, s.S3)((0, c.W)(a.summary))
                if (null != i) return { type: "thinking", reasoningSummaryLine: i }
              }
              return { type: "thinking", reasoningSummaryLine: null }
            })(
              {
                items: (a(r.hm, i) ?? []).flatMap((e) => {
                  let t = a(r.mz, { ...i, itemId: e })
                  return null == t ? [] : [t]
                }),
                status: n,
              },
              { hideWhileResponding: t },
            )
      },
      { isEqual: n() },
    )
  },
  OTgW(e, t, a) {
    var i = a("zTeN"),
      n = a("OWtl"),
      o = a("Nwp9"),
      r = a("l0pH")
    let l = (0, o.m3)("has-seen-realtime-voice-nux-v1", !1),
      s = (0, i.un)(n.u, ({ get: e }) => {
        let t = e(r.x),
          a = e(l)
        return !!t && (null == a ? void 0 : !a)
      })
    a.d(
      t,
      {},
      {
        Yl: l,
        ZZ: function (e) {
          e.set(l, !0)
        },
        gH: s,
      },
    )
  },
  NolR(e, t, a) {
    var i = a("QosV"),
      n = a("XYHU"),
      o = a("hZax")
    a.d(
      t,
      {},
      {
        w: function () {
          let e,
            t = (0, i.c)(2),
            a = (0, o.Zj)("620613358")
          return (t[0] !== a ? ((e = "macOS" === (0, n.tR)() && a), (t[0] = a), (t[1] = e)) : (e = t[1]), e)
        },
      },
    )
  },
  XSLO(e, t, a) {
    var i = a("DBCl"),
      n = a("Qgfj"),
      o = a("EULo")
    let r = /(?:^|[\\/])visualizations(?:[\\/"'\s;]|$)/i,
      l = /(?:^|\s)(?:apply_patch|mkdir|tee|touch|cp|mv|install)(?:\s|$)|(?:^|[^<])>>?/,
      s = /\*\*\* Add File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
      c = /\*\*\* Update File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
      u = /\*\*\* Delete File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
      d = `${i._NM}@${i.MY3}`,
      p = `${i._NM}@${i.IY7}`,
      m = `${i._NM}@${i.xiH}`,
      f = /^plugin:\/\/([^?]+)(?:\?|$)/i,
      h =
        /\b(?:visuals?|visuali[sz](?:e|ed|es|er|ers|ing|ations?)|(?:flow)?charts?|plot(?:s|ted|ting)?|graphs?|diagrams?|maps?|simulat(?:e|ed|es|ing|ions?|ors?)|labs?|compar(?:e|ed|es|ing|isons?)|scenarios?|explor(?:e|ed|es|ing|ations?)|interactive|adjustable[-\s]+inputs?)\b|\bshow\s+(?:(?:me|us)\s+)?how\b/i,
      g = (0, n.YK)({
        activeCreating: {
          id: "codex.visualization.activity.active.creating",
          defaultMessage: "<action>Creating</action> <detail>visualization</detail>",
          description: "Active tool activity summary while Codex creates an inline visualization",
        },
        activeUpdating: {
          id: "codex.visualization.activity.active.updating",
          defaultMessage: "<action>Updating</action> <detail>visualization</detail>",
          description: "Active tool activity summary while Codex updates an inline visualization",
        },
        rowCreating: {
          id: "codex.visualization.activity.row.creating",
          defaultMessage: "<verb>Creating</verb> visualization",
          description: "Tool activity row while Codex creates an inline visualization",
        },
        rowCreated: {
          id: "codex.visualization.activity.row.created",
          defaultMessage: "<verb>Created</verb> visualization",
          description: "Tool activity row after Codex creates an inline visualization",
        },
        rowUpdating: {
          id: "codex.visualization.activity.row.updating",
          defaultMessage: "<verb>Updating</verb> visualization",
          description: "Tool activity row while Codex updates an inline visualization",
        },
        rowUpdated: {
          id: "codex.visualization.activity.row.updated",
          defaultMessage: "<verb>Updated</verb> visualization",
          description: "Tool activity row after Codex updates an inline visualization",
        },
        summaryCreatingLeading: {
          id: "codex.visualization.activity.summary.creating.leading",
          defaultMessage: "Creating visualization",
          description: "Leading collapsed tool activity summary while Codex creates an inline visualization",
        },
        summaryCreating: {
          id: "codex.visualization.activity.summary.creating",
          defaultMessage: "creating visualization",
          description: "Collapsed tool activity summary while Codex creates an inline visualization",
        },
        summaryCreatedLeading: {
          id: "codex.visualization.activity.summary.created.leading",
          defaultMessage: "Created visualization",
          description: "Leading collapsed tool activity summary after Codex creates an inline visualization",
        },
        summaryCreated: {
          id: "codex.visualization.activity.summary.created",
          defaultMessage: "created visualization",
          description: "Collapsed tool activity summary after Codex creates an inline visualization",
        },
        summaryUpdatingLeading: {
          id: "codex.visualization.activity.summary.updating.leading",
          defaultMessage: "Updating visualization",
          description: "Leading collapsed tool activity summary while Codex updates an inline visualization",
        },
        summaryUpdating: {
          id: "codex.visualization.activity.summary.updating",
          defaultMessage: "updating visualization",
          description: "Collapsed tool activity summary while Codex updates an inline visualization",
        },
        summaryUpdatedLeading: {
          id: "codex.visualization.activity.summary.updated.leading",
          defaultMessage: "Updated visualization",
          description: "Leading collapsed tool activity summary after Codex updates an inline visualization",
        },
        summaryUpdated: {
          id: "codex.visualization.activity.summary.updated",
          defaultMessage: "updated visualization",
          description: "Collapsed tool activity summary after Codex updates an inline visualization",
        },
      })
    a.d(
      t,
      {},
      {
        DJ: function (e, t) {
          let a = [e]
          for (let e of t)
            ("userMessage" === e.type && a.push(e.content),
              "steeringUserMessage" === e.type && "accepted" === e.status && a.push(e.input))
          let i = !1
          for (let e of a)
            for (let t of e) {
              if ("text" !== t.type) continue
              h.test(t.text) && (i = !0)
              let e = 0
              for (; e < t.text.length;) {
                let a = (0, o.ex)(t.text, e)
                if (null == a) break
                let i = f
                  .exec((0, o.gh)(a.path))?.[1]
                  ?.trim()
                  .toLowerCase()
                if (i === d || i === p || i === m) return "explicit"
                e = a.end
              }
            }
          return i ? "soft" : "none"
        },
        FR: function (e) {
          return (
            e?.isSkillDefinitionFile === !0 &&
            ("visualize" === e.skillId.toLowerCase() ||
              (e.pluginId?.toLowerCase() === "visualize" &&
                ("live" === e.skillId.toLowerCase() || "persisted" === e.skillId.toLowerCase())))
          )
        },
        X: function (e) {
          if (null == e) return !0
          switch (e) {
            case "inProgress":
            case "completed":
              return !0
            case "failed":
            case "declined":
            case "interrupted":
              return !1
          }
        },
        XQ: function ({ intl: e, kind: t, isFinished: a, isLeadingSegment: i }) {
          switch (t) {
            case "create":
              if (a) return i ? e.formatMessage(g.summaryCreatedLeading) : e.formatMessage(g.summaryCreated)
              return i ? e.formatMessage(g.summaryCreatingLeading) : e.formatMessage(g.summaryCreating)
            case "update":
              if (a) return i ? e.formatMessage(g.summaryUpdatedLeading) : e.formatMessage(g.summaryUpdated)
              return i ? e.formatMessage(g.summaryUpdatingLeading) : e.formatMessage(g.summaryUpdating)
          }
        },
        mw: function (e) {
          return r.test(e) && l.test(e)
            ? s.test(e)
              ? "create"
              : c.test(e)
                ? "update"
                : u.test(e)
                  ? null
                  : "create"
            : null
        },
        yz: g,
      },
    )
  },
  zExH(e, t, a) {
    let i = (0, a("nkTT").a)({
      name: "checkmark-circle-fill-regular-16",
      canvas: {
        width: 16,
        height: 16,
        viewBox: "0 0 16 16",
        frame: { x: 0, y: 0, width: 16, height: 16 },
        inkBounds: { x: 1.25, y: 1.25, width: 13.5, height: 13.5 },
        visualBounds: { x: 1.25, y: 1.25, width: 13.5, height: 13.5 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "circular",
        bounds: { x: 1.25, y: 1.25, width: 13.5, height: 13.5 },
        center: { x: 8, y: 8 },
        insets: { top: 1.25, right: 1.25, bottom: 1.25, left: 1.25 },
        anchors: { frame: { x: 8, y: 8 }, ink: { x: 8, y: 8 }, foreground: { x: 8, y: 8 } },
      },
      capabilities: ["icon"],
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.25C11.7279 1.25 14.75 4.27208 14.75 8C14.75 11.7279 11.7279 14.75 8 14.75C4.27208 14.75 1.25 11.7279 1.25 8C1.25 4.27208 4.27208 1.25 8 1.25ZM10.6807 5.47363C10.3367 5.24301 9.87036 5.33482 9.63965 5.67871L7.27832 9.20117L6.28613 8.13672C6.00361 7.83389 5.52846 7.81716 5.22559 8.09961C4.92276 8.38214 4.90603 8.85728 5.18848 9.16016L6.61133 10.6846C7.05077 11.1556 7.8151 11.0946 8.17383 10.5596L10.8857 6.51465C11.1164 6.17067 11.0246 5.70434 10.6807 5.47363Z" fill="currentColor"/>',
    })
    a.d(t, {}, { m: i })
  },
  fkjt(e, t, a) {
    a.d(t, { z: () => d })
    var i = a("A1Q8"),
      n = a("WKum"),
      o = a("p5Yg")
    function r(e) {
      return "number" == typeof e ? e : parseFloat(e)
    }
    var l = a("zd8w"),
      s = a("ReSt"),
      c = a("K45w"),
      u = a("W5pg")
    function d(e, t = {}) {
      return (function (e, t = {}) {
        let { isStatic: a } = (0, l.useContext)(s.Q),
          d = () => ((0, i.S)(e) ? e.get() : e)
        if (a) return (0, u.G)(d)
        let p = (0, c.d)(d())
        return (
          (0, l.useInsertionEffect)(
            () =>
              (function (e, t, a = {}) {
                let l,
                  s = e.get(),
                  c = null,
                  u = s,
                  d = "string" == typeof s ? s.replace(/[\d.-]/g, "") : void 0,
                  p = () => {
                    ;(c && (c.stop(), (c = null)), (e.animation = void 0))
                  },
                  m = () => {
                    ;((() => {
                      let t = r(e.get()),
                        i = r(u)
                      if (t === i) return p()
                      let o = c ? c.getGeneratorVelocity() : e.getVelocity()
                      ;(p(),
                        (c = new n.s({
                          keyframes: [t, i],
                          velocity: o,
                          type: "spring",
                          restDelta: 0.001,
                          restSpeed: 0.01,
                          ...a,
                          onUpdate: l,
                        })))
                    })(),
                      (e.animation = c ?? void 0),
                      e.events.animationStart?.notify(),
                      c?.then(() => {
                        ;((e.animation = void 0), e.events.animationComplete?.notify())
                      }))
                  }
                if (
                  (e.attach((e, t) => {
                    ;((u = e),
                      (l = (e) => {
                        var a, i
                        return t(((a = e), (i = d) ? a + i : a))
                      }),
                      o.Gt.postRender(m))
                  }, p),
                  (0, i.S)(t))
                ) {
                  let i = !0 === a.skipInitialAnimation,
                    n = t.on("change", (t) => {
                      var a, n, o, r
                      i ? ((i = !1), e.jump(((a = t), (n = d) ? a + n : a), !1)) : e.set(((o = t), (r = d) ? o + r : o))
                    }),
                    o = e.on("destroy", n)
                  return () => {
                    ;(n(), o())
                  }
                }
                return p
              })(p, e, t),
            [p, JSON.stringify(t)],
          ),
          p
        )
      })(e, { type: "spring", ...t })
    }
  },
}
//# sourceMappingURL=884655.2edb304734.js.map
