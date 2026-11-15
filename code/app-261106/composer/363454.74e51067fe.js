export const __rspack_esm_ids = [363454]
export const __webpack_modules__ = {
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
  xf0T(e, t, a) {
    a.d(t, { AvatarOverlayNativePage: () => oF })
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
      I = a("binO"),
      M = a("tl5a"),
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
      U = a("AAVC"),
      H = a("TSib"),
      B = a("sXdr"),
      V = a("uIyc"),
      z = a("exuz"),
      Y = a("bVeK"),
      X = a("SGsN"),
      W = a("YXXI"),
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
      eo = a("Sm6l"),
      er = a("RNul"),
      el = a("OWtl"),
      es = a("ByX5"),
      ec = a("XW6B"),
      eu = a("TYK1"),
      ed = a("MZvE"),
      ep = a("mRSS"),
      em = a("L77v"),
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
        g = (0, ew.G)(a, eI),
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
    function eI(e) {
      return `${e}px`
    }
    var eM = a("rK5x"),
      eS = a("VAbi"),
      eE = a("TnSu"),
      eR = a("xNuN")
    let e_ = new WeakMap()
    var eT = a("iJY0")
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
    var eq = a("BXKQ")
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
        I = (0, g.useRef)(null),
        [M, S] = (0, g.useState)(null),
        E = r?.find((e) => e.reacted)?.emoji ?? null,
        R = new Set(r?.map((e) => e.emoji)),
        { open: _, handleOpenChange: T } = (0, eb.Cu)(A && M?.messageKey === n && M.open, (e) => {
          ;(e || document.hasFocus() || (I.current = null), e || S((e) => (null == e ? null : { ...e, open: !1 })))
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
          (0, i.jsx)(eC.dT, { virtualRef: { current: M?.anchor ?? null } }),
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
            "data-mini-emoji-picker-open": (_ && M?.all) || void 0,
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
            collisionBoundary: M?.boundaries,
            collisionPadding: { top: 0, bottom: 6, left: 0, right: 0 },
            sticky: "always",
            style: M?.boundaries.length ? { maxHeight: "var(--mini-reaction-menu-max-height)" } : void 0,
            unstyled: !0,
            onOpenAutoFocus: () => {
              ;(s?.(!0), (I.current = document.activeElement instanceof HTMLElement ? document.activeElement : null))
            },
            onInteractOutside: () => {
              I.current = null
            },
            onCloseAutoFocus: (e) => {
              ;(e.preventDefault(), S((e) => (e?.open ? e : null)))
              let t = x.current
              ;((x.current = null), null == t && I.current?.focus({ preventScroll: !0 }), s?.(!1), t?.())
            },
            children: M?.all
              ? (0, i.jsx)(eH, {
                  children: (0, i.jsx)(eS.T, {
                    embedded: !0,
                    availableHeight: M.boundaries.length
                      ? "calc(var(--mini-reaction-menu-max-height) - var(--spacing) * 2)"
                      : void 0,
                    onBack: () => S({ ...M, all: !1 }),
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
                  onMore: () => S(null == M ? null : { ...M, all: !0 }),
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
              children: (0, i.jsx)(eM.g, { reaction: o, onSelect: r, onMore: l, onReply: s, reactionsEnabled: u }),
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
        I = (null != x && !1 !== x) || null != c.replyTo || A,
        M = "user" === c.role && I,
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
        s[16] !== I ||
        s[17] !== M ||
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
                  I
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
                          M &&
                            (0, i.jsx)("div", {
                              className: "contents",
                              "data-avatar-overlay-foreground": !0,
                              children: t,
                            }),
                        ],
                      })
                    : null,
                  !M &&
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
            (s[16] = I),
            (s[17] = M),
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
      eX = a("v0Gf"),
      eW = a("jDom")
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
        I,
        M,
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
        X = (0, g.useRef)(!1),
        W = (0, g.useRef)(!1),
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
              X.current ||
              null == N ||
              ((X.current = !0),
              await (async () => {
                for (;;) {
                  let a = t.scrollHeight,
                    i = await N()
                  if (
                    (await (0, eY.JA)(),
                    (W.current = "stop" === i || t.scrollHeight <= a),
                    W.current || j.current !== e || e.clientHeight <= 0 || e.scrollHeight - e.clientHeight > 64)
                  )
                    break
                }
              })()
                .catch(() => {
                  W.current = !0
                })
                .finally(() => {
                  X.current = !1
                }))
          }),
          (E[2] = N),
          (E[3] = a))
        : (a = E[3])
      let K = (0, eW.K)(a)
      E[4] !== K
        ? ((o = () => {
            let e = j.current
            null != e && !W.current && e.scrollHeight - e.clientHeight <= 64 && K()
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
              W.current = !1
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
          ? ((I = (0, ev.A)("relative flex flex-col", "Content-CoNTNa", Z)), (E[43] = Z), (E[44] = I))
          : (I = E[44]),
        E[45] !== _ || E[46] !== I
          ? ((M = (0, i.jsx)("div", { ref: D, className: I, children: _ })), (E[45] = _), (E[46] = I), (E[47] = M))
          : (M = E[47]),
        E[48] !== A || E[49] !== M
          ? ((S = (0, i.jsx)(eX.Q, { className: d, fade: "mask", scrollClassName: p, scrollProps: A, children: M })),
            (E[48] = A),
            (E[49] = M),
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
        I,
        M,
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
        [Y, X] = (0, g.useState)(null)
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
        R || null == Y || X(null))
      let W = (0, g.useSyncExternalStore)(T.state.subscribe, T.state.getSnapshot, T.state.getSnapshot)
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
              let t = G.getSnapshot().messages.findLast(e7)
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
        eu = new Map($.messages.map(e8)),
        ed = B.formatMessage({
          id: "avatarOverlay.transcript.attachmentReply",
          defaultMessage: "Attachment",
          description: "Quote for a dot message containing only attachments",
        }),
        ep = W.error || $.error
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
      let em = (0, eW.K)(v)
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
        null == W.room ||
        "share_only" === W.room.lifecycleState ||
        ("pending_request" === W.room.lifecycleState && "outgoing" === W.room.requestDirection)
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
                              onOpenImage: X,
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
                              renderInlineVisualizations: null != e.senderAeonId && e.senderAeonId === W.room?.aeon_id,
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
                        orbitMemberId: W.room?.members.find((e) => e.aeon_id === W.room?.aeon_id)?.id,
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
          ? ((I =
              null != Y && R
                ? (0, i.jsx)(eK.C, {
                    src: Y.src,
                    alt: Y.alt,
                    open: !0,
                    onOpenChange: (e) => {
                      e || X(null)
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
            (E[62] = I))
          : (I = E[62]),
        E[63] !== ee
          ? ((M =
              null != ee
                ? (0, i.jsx)(en.yl, {
                    variant: "transcript-message",
                    role: "status",
                    children: (0, i.jsx)("div", { "data-avatar-overlay-foreground": !0, children: ee.text }),
                  })
                : null),
            (E[63] = ee),
            (E[64] = M))
          : (M = E[64]),
        E[65] !== ec || E[66] !== A || E[67] !== eg || E[68] !== ev || E[69] !== I || E[70] !== M
          ? ((S = (0, i.jsxs)("div", {
              ref: V,
              onPointerDownCapture: ec,
              onKeyDownCapture: ec,
              children: [A, eg, ev, I, M],
            })),
            (E[65] = ec),
            (E[66] = A),
            (E[67] = eg),
            (E[68] = ev),
            (E[69] = I),
            (E[70] = M),
            (E[71] = S))
          : (S = E[71]),
        S
      )
    }
    function e6(e) {
      return !e.deletedAt
    }
    function e8(e) {
      return [e.id, e]
    }
    function e7(e) {
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
          onMenuOpenChange: I,
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
              let e = (0, M.bJ)(T.get, w.conversationId)
              return (
                (0, M.Nu)(T, w.conversationId, w.hostId),
                () => {
                  ;(0, M.bJ)(T.get, w.conversationId) === w.hostId && (0, M.Nu)(T, w.conversationId, e)
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
        y[33] !== I ||
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
                      onMenuOpenChange: I,
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
            (y[33] = I),
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
        { data: A, isLoading: I, isError: M, refetch: S } = C ? b : x,
        E = A?.scope === "shared" ? A.id : null
      c[1] !== p ? ((a = { enabled: p }), (c[1] = p), (c[2] = a)) : (a = c[2])
      let { data: R, isPending: _, isError: T, refetch: k } = (0, u._U)(ed.K, E, a),
        O = null == E ? A?.messaging_room_id : R,
        P = I || (null != E && _)
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
      if ((M || T) && null == O) {
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
    var ti = a("P56J"),
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
          active: I,
          headerOpacity: M,
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
      let q = O ? 1 : M
      x[4] !== q ? ((o = { opacity: q }), (x[4] = q), (x[5] = o)) : (o = x[5])
      let j = O ? M : 1
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
        H = I && L
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
      ;(x[34] !== E || x[35] !== M || x[36] !== O || x[37] !== R || x[38] !== B
        ? ((g = (0, i.jsx)(tl, { barOrigin: E, nameOrigin: R, headerOpacity: M, morphFromBar: O, name: B })),
          (x[34] = E),
          (x[35] = M),
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
      let V = O ? M : 1
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
    var tp = a("XHBM")
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
        I = (0, u.Ul)(J.aH)
      p[0] !== I || p[1] !== m ? ((t = { accountId: I, agent: m }), (p[0] = I), (p[1] = m), (p[2] = t)) : (t = p[2])
      let [M, S] = (0, g.useState)(t),
        E = m ?? (M.accountId === I ? M.agent : null)
      ;(M.accountId !== I || M.agent !== E) && S({ accountId: I, agent: E })
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
      tx = a("SRbQ"),
      tA = a("lSdY"),
      tI = a("EOo5"),
      tM = a("V7vi"),
      tS = a("iS3i"),
      tE = a("uizX"),
      tR = a("an0a"),
      t_ = a("fj7z"),
      tT = a("jiwy"),
      tk = a("ho8L"),
      tO = a("LBED"),
      tP = a("BqvN"),
      tN = a("V3Gm"),
      tL = a("gf0K"),
      tF = a("Io7L"),
      tq = a("aQYh"),
      tj = a("vhyw"),
      tD = a("uIjo"),
      tU = a("jEf6"),
      tH = a("QVc9"),
      tB = a("XLpU"),
      tV = a("kXFg"),
      tz = a("XL6s"),
      tY = a("x7by"),
      tX = a("Nc5R"),
      tW = a("CpJm"),
      tG = a("GaA7"),
      t$ = a("KoM4"),
      tK = a("lx63"),
      tQ = a("jMec"),
      tZ = a("OMIV"),
      tJ = a("WFY2")
    let t0 = {
      chat: tA.b.CHATGPT_PRODUCT_EXPERIENCE_CHAT,
      work: tA.b.CHATGPT_PRODUCT_EXPERIENCE_WORK,
      codex: tA.b.CHATGPT_PRODUCT_EXPERIENCE_CODEX,
    }
    var t1 = a("pcVU"),
      t2 = a("zRTd"),
      t3 = a("NolR"),
      t4 = a("Sd8U"),
      t5 = a("V3rO"),
      t6 = a("RxZZ"),
      t8 = a("qixt"),
      t7 = a("ugrI"),
      t9 = a("Odya"),
      ae = a("hZax"),
      at = a("kpIY"),
      aa = a("Nwp9")
    class ai {
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
    let an = (0, w.YK)({
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
      ao = {
        badgeBackgroundColor: "var(--color-background-info-soft)",
        badgeForegroundColor: "var(--color-text)",
        fallbackBodyMessage: an.info,
        iconClassName: "icon-xs shrink-0 text-secondary",
        iconType: "clock",
        labelMessage: an.info,
        mascotState: "idle",
      },
      ar = { ...ao, mascotState: "waving" }
    function al(e) {
      if (null == e) return ao
      if ("first-awake" === e.kind) return ar
      if (e.isLoading)
        return {
          badgeBackgroundColor: "var(--color-background-info-soft)",
          badgeForegroundColor: "var(--color-text)",
          fallbackBodyMessage: an.runningFallbackBody,
          iconClassName: "icon-xs shrink-0 text-secondary",
          iconType: "spinner",
          labelMessage: an.running,
          mascotState: "running",
        }
      switch (e.level) {
        case "warning":
          return {
            badgeBackgroundColor: "var(--color-text-warning)",
            badgeForegroundColor: "var(--color-surface-secondary)",
            fallbackBodyMessage: an.waiting,
            iconClassName: "icon-xs shrink-0 text-warning",
            iconType: "warning",
            labelMessage: an.waiting,
            mascotState: "waiting",
          }
        case "danger":
          return {
            badgeBackgroundColor: "var(--color-text-danger)",
            badgeForegroundColor: "var(--color-surface-secondary)",
            fallbackBodyMessage: an.failed,
            iconClassName: "icon-xs shrink-0 text-danger",
            iconType: "warning",
            labelMessage: an.failed,
            mascotState: "failed",
          }
        case "success":
          return {
            badgeBackgroundColor: "var(--color-chart-green)",
            badgeForegroundColor: "var(--color-surface-secondary)",
            fallbackBodyMessage: an.review,
            iconClassName: "icon-xs shrink-0 text-chart-green",
            iconType: "check-circle",
            labelMessage: an.review,
            mascotState: "review",
          }
        case "info":
          return ao
      }
    }
    var as = a("NFVO"),
      ac = a("JxD3"),
      au = a("D6V5"),
      ad = a("veRW"),
      ap = a("G0uN"),
      am = a("bZSE"),
      af = a("m88r"),
      ah = a("L2Eu"),
      ag = a("rwp7"),
      av = a("C4Sc"),
      ay = a("G3U9"),
      aw = a("Faus"),
      ab = a("v1hC"),
      aC = a("vc9M"),
      ax = a("sl5j"),
      aA = a("IJee"),
      aI = a("g6Vb"),
      aM = a("Mrfa"),
      aS = a("l4nv"),
      aE = a("aAb3")
    let aR = (0, w.YK)({
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
    function a_(e, t) {
      switch (e.kind) {
        case "question":
          return [e.prompt, ...e.options.map((e) => e.label)].filter(Boolean).join(" ")
        case "plan":
        case "exec":
          return e.summary
        case "patch":
          return [
            t.formatMessage(aR.fileCount, { count: e.fileCount }),
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
    function aT(e) {
      if (null == e) return null
      let t = Object.entries(e)[0]
      if (null == t) return null
      let [a, i] = t,
        n = aP(i)
      return null == n ? aF(a) : aF(`${a}: ${n}`)
    }
    function ak(e) {
      let t = e[0]
      if (null == t) return null
      let a = aP(t.value)
      return null == a ? aF(t.displayName) : aF(`${t.displayName}: ${a}`)
    }
    function aO(e) {
      try {
        let t = new URL(e),
          a = "/" === t.pathname ? "" : t.pathname
        return aq(`${t.hostname}${a}`)
      } catch {
        return aq(e)
      }
    }
    function aP(e) {
      return "string" == typeof e
        ? aq(e)
        : "number" == typeof e || "boolean" == typeof e
          ? String(e)
          : null == e
            ? null
            : aq(JSON.stringify(e) ?? "")
    }
    function aN(e) {
      let t = e
        ?.trim()
        .replace(/^connector[_-]/, "")
        .split(/[_-]+/)
        .filter(Boolean)
      return null == t || 0 === t.length ? null : t.map((e) => e.charAt(0).toUpperCase() + e.slice(1)).join(" ")
    }
    function aL(e) {
      if (0 === e.length) return 0
      let t = e.split(/\r?\n/)
      return "" === t.at(-1) ? t.length - 1 : t.length
    }
    function aF(e) {
      let t = e?.replace(/\s+/g, " ").trim() ?? ""
      return 0 === t.length ? null : t
    }
    function aq(e) {
      let t = aF(e)
      return null == t ? null : t.length <= 48 ? t : `${t.slice(0, 47)}…`
    }
    let aj = (0, w.YK)({
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
    function aD(e, t, a = !1, i = t8._e) {
      let n = null
      for (let t = e.length - 1; t >= 0; t -= 1) {
        let i = e[t]
        if (i?.type === "reasoning") {
          let e = (0, ab.W)(i.summary),
            t = (0, aw.S3)(e),
            a = null == t ? null : aU(t)
          if (null != a && a.length <= 60) return a
          let n = (0, aw.S3)(e.split(/\r?\n/, 1)[0] ?? ""),
            o = null == n ? null : aU(n)
          if (null != o && o.length <= 60) return o
          break
        }
        if (i?.type === "agentMessage") {
          let e = (0, ad.l)(i.text),
            t = a ? (0, ac.mM)(e) : (0, ac.Fp)(e),
            o = t?.decision === "DONT_NOTIFY" ? null : aU(t?.notificationMessage ?? t?.visibleText ?? e)
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
              return n ? t.formatMessage(aj.runningCommand) : t.formatMessage(aj.ranCommand)
            let o = (0, af.i)({
              items: [
                {
                  type: "exec",
                  callId: e.id,
                  cwd: e.cwd ? (0, d.DIv)(e.cwd) : null,
                  cmd: [i.command],
                  executionStatus: e.status,
                  approvalRequestId: null,
                  proposedExecpolicyAmendment: null,
                  parsedCmd: (0, ay.Q)((0, av.uw)(i, []), !n),
                  output: null,
                },
              ],
              threadDetailLevel: a,
              formatSearchQueryTermList: (e) => t.formatList(e, { type: "conjunction" }),
            })
            if (null != o) {
              let e = t.formatMessage(o.message, { ...o.values, action: (e) => e.join(""), detail: (e) => e.join("") })
              return e.length <= 60 ? e : n ? t.formatMessage(aj.runningCommand) : t.formatMessage(aj.ranCommand)
            }
          }
          if ("fileChange" === e.type) {
            let a = e.changes.length
            return "inProgress" === e.status
              ? t.formatMessage(aj.editingFiles, { fileCount: a })
              : t.formatMessage(aj.editedFiles, { fileCount: a })
          }
          if ("mcpToolCall" === e.type) {
            let a = "inProgress" === e.status,
              i = aU(e.tool.replace(/[_-]+/g, " "))
            return null == i
              ? a
                ? t.formatMessage(aj.callingTool)
                : t.formatMessage(aj.calledTool)
              : a
                ? t.formatMessage(aj.callingToolName, { toolName: i })
                : t.formatMessage(aj.calledToolName, { toolName: i })
          }
          if ("webSearch" === e.type) {
            let a = aU(e.query)
            return null != a ? t.formatMessage(aj.searchedQuery, { query: a }) : t.formatMessage(aj.searchedWeb)
          }
          return null
        })(e[a], t, i)
        if (null != n) return n
      }
      return n
    }
    function aU(e) {
      let t = (0, ah.SX)((0, am.v)(e))
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
    function aH({
      completedTurnSummary: e,
      intl: t,
      latestTurnItems: a,
      notification: i,
      notificationCount: n = 1,
      threadDetailLevel: o = t8._e,
    }) {
      let r = al(i),
        l = t.formatMessage(r.labelMessage),
        s = null == a ? null : aD(a, t, !1, o),
        c =
          (i.isLoading || e?.compactSummaryTurnKey !== i.turnKey ? null : e.compactSummary) ??
          s ??
          i.body ??
          t.formatMessage(r.fallbackBodyMessage)
      null != i.waitingRequest && (c = a_(i.waitingRequest, t))
      let u = c.replace(/[.?!]+$/, ""),
        d = i.waitingRequest?.kind === "patch" ? i.waitingRequest : null
      return {
        actionAriaLabel: `${i.title}. ${c === l ? l : `${l}. ${u}`}. ${t.formatMessage(aB.openNotification)}`,
        collapseNotificationAriaLabel: t.formatMessage(aB.collapseNotification, { title: i.title }),
        dismissNotificationAriaLabel: t.formatMessage(aB.dismissNotification, { title: i.title }),
        expandNotificationAriaLabel: t.formatMessage(aB.expandNotification, { title: i.title }),
        expandNotificationStackAriaLabel: t.formatMessage(aB.expandNotificationStack, { count: n }),
        notificationListAriaLabel: t.formatMessage(aB.notificationList),
        patchSummary:
          null == d
            ? null
            : {
                additions:
                  d.additions > 0
                    ? t.formatMessage(aB.compactPatchAdditions, { count: t.formatNumber(d.additions) })
                    : null,
                deletions:
                  d.deletions > 0
                    ? t.formatMessage(aB.compactPatchDeletions, { count: t.formatNumber(d.deletions) })
                    : null,
                fileCount: t.formatMessage(aB.compactPatchFileCount, { count: d.fileCount }),
              },
        statusIconAriaLabel: i.waitingRequest?.kind === "question" ? t.formatMessage(aB.questionStatusIcon) : l,
        subtitle: c,
      }
    }
    let aB = (0, w.YK)({
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
      aV = (0, aa.m3)("avatar-overlay-debug-window-border-visible", !1)
    function az(e) {
      return { screenX: e.screenX, screenY: e.screenY, timeMs: e.timeStamp }
    }
    function aY(e, t) {
      if (e.hasMoved) return !0
      let a = e.samples[0]
      return null != a && (Math.abs(t.screenX - a.screenX) >= 4 || Math.abs(t.screenY - a.screenY) >= 4)
    }
    function aX(e) {
      let t = e.at(-1)
      return null == t ? e : e.filter((e) => t.timeMs - e.timeMs <= 160)
    }
    function aW({ activityStackPresentation: e, isExpanded: t, notificationCount: a }) {
      let i = e.items[0]?.presentationRect.height ?? 0,
        n = (0, d.pmn)(a, t && a > 1 ? Math.min(i, e.items[1]?.presentationRect.height ?? i) : i)
      return {
        backingLayoutHeight: a > 1 ? e.viewportRect.height : i,
        visibleLayoutHeight: Math.ceil(n + (a > 1 ? d.Xlf : 0)),
      }
    }
    var aG = a("HrOd")
    let a$ = {
        mascot: { left: 244, top: 207, width: aG.dR, height: 121 },
        placement: "top-end",
        tray: { left: 19.5, top: 70, width: d.pFD, height: 120 },
        visibleBounds: { left: 0, top: 0, width: 384, height: 400 },
        viewport: { width: 384, height: 400 },
      },
      aK = (0, u.T1)(
        el.u,
        (e, { signal: t, derived: a }) => {
          let i = t(a$)
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
    var aQ = a("FPUb"),
      aZ = a("B7sF"),
      aJ = a("l2oX"),
      a0 = a("Dh3m"),
      a1 = a("xJjI"),
      a2 = a("SqlE"),
      a3 = a("rmk3"),
      a4 = a("Yakm"),
      a5 = a("bqtn")
    function a6(e) {
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
    var a8 = a("u4BA"),
      a7 = a("i7oB")
    let a9 = (0, u.un)(el.u, ({ get: e }) => (e(J.Fe) ? e(J.Ae)?.[0] : void 0))
    function ie(e) {
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
        w = (0, u.Ul)(a9),
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
      let I = t
      ;(c[5] !== I || c[6] !== p
        ? ((a = (e) => {
            ;(p.props.onContextMenu?.(e), e.stopPropagation(), e.defaultPrevented || (e.preventDefault(), I(!0)))
          }),
          (o = (e) => {
            ;(p.props.onKeyDown?.(e),
              e.defaultPrevented ||
                e.target !== e.currentTarget ||
                ("ContextMenu" !== e.key && ("F10" !== e.key || !e.shiftKey)) ||
                e.altKey ||
                e.ctrlKey ||
                e.metaKey ||
                (e.preventDefault(), e.stopPropagation(), I(!0)))
          }),
          (c[5] = I),
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
      let M = r,
        S = (e) =>
          (0, i.jsx)(
            a5.ms.Item,
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
              (0, i.jsxs)(a5.Ab, {
                contentRef: a6,
                open: b,
                onOpenChange: I,
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
                  d.filter(ia).map(S),
                  A
                    ? (0, i.jsx)(a5.ms.Item, {
                        leftIcon:
                          y || null == w
                            ? (0, i.jsx)("span", { "aria-hidden": !0, className: a7.A.miniIcon })
                            : (0, i.jsx)(tc.g, { artwork: w.artwork, size: 16 }),
                        onSelect: () => {
                          x.current = () => {
                            ;(0, a8.h)(h, y ? "pet" : "orbit")
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
                  d.filter(it).map(S),
                ],
              }),
              m.container,
            )
          : null
      return (
        c[15] !== l || c[16] !== E || c[17] !== M
          ? ((s = (0, i.jsxs)(i.Fragment, { children: [M, l, E] })), (c[15] = l), (c[16] = E), (c[17] = M), (c[18] = s))
          : (s = c[18]),
        s
      )
    }
    function it(e) {
      return "close-avatar" === e.id
    }
    function ia(e) {
      return "close-avatar" !== e.id
    }
    var ii = a("Xvyy"),
      io = a("slpy"),
      ir = a("mnJS"),
      il = a("YxCZ")
    let is = (0, eT.a)({
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
      body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M2.00001 1.4751C2.13436 1.4751 2.26875 1.52632 2.37132 1.62864L14.3713 13.6286C14.4738 13.7312 14.5251 13.8654 14.5251 13.9997C14.5251 14.2895 14.29 14.5246 14.0002 14.5246C13.8659 14.5246 13.7316 14.4733 13.6291 14.3708L12.6369 13.3786C12.3609 13.8299 11.8602 14.1118 11.3306 14.1118C11.0733 14.1118 10.8092 14.0452 10.5608 13.8991L6.55687 11.5447C6.53523 11.532 6.51065 11.5252 6.48558 11.5251H4.33323C3.30716 11.525 2.47501 10.6928 2.47483 9.66673V6.33274C2.47518 5.48903 3.03821 4.77704 3.80882 4.55052L1.62913 2.37083C1.5268 2.26826 1.47559 2.13387 1.47559 1.99952C1.47559 1.7097 1.71019 1.4751 2.00001 1.4751ZM11.3331 13.0601C11.581 13.0601 11.8088 12.8622 11.8088 12.5847H11.843L4.78343 5.52513H4.33323C3.88721 5.5253 3.52603 5.88678 3.52561 6.33274V9.66673C3.52579 10.1129 3.88706 10.4742 4.33323 10.4743H6.48558C6.69778 10.4744 6.90614 10.5319 7.08909 10.6394L11.093 12.9939C11.1704 13.0394 11.2528 13.0601 11.3331 13.0601Z" fill="currentColor"/> <path d="M11.3295 1.88843C12.1258 1.88843 12.8576 2.52468 12.8576 3.41575V8.56712C12.8576 8.85699 12.6221 9.09153 12.3323 9.09153C12.0426 9.09127 11.807 8.85682 11.8069 8.56712V3.41575C11.8069 3.13806 11.5788 2.9394 11.3307 2.9394C11.2506 2.9394 11.1683 2.96012 11.091 3.0056L8.25608 4.67356C8.17241 4.7227 8.08064 4.7461 7.99005 4.7461C7.70039 4.7461 7.46481 4.51248 7.46481 4.22219C7.46481 4.04237 7.55706 3.86717 7.72288 3.76927L10.5588 2.1013C10.8074 1.95508 11.0718 1.88843 11.3295 1.88843Z" fill="currentColor"/>',
    })
    var ic = a("lwR5"),
      iu = a("ROI2"),
      id = a("R4Te")
    function ip(e) {
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
    let im = { damping: 22, mass: 0.72, stiffness: 360, type: "spring" }
    function ih(e) {
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
        g = (0, n.c)(71),
        {
          arePetControlsExpanded: v,
          areControlsVisible: w,
          areVoiceActionsHidden: b,
          canRevealControls: C,
          canStart: x,
          children: A,
          errorMessage: I,
          isRealtimeVoiceSurfaceVisible: M,
          isMicrophoneMuted: S,
          isMuted: E,
          mascot: R,
          onAnimationFrame: _,
          onStart: T,
          onStop: k,
          onOpenThread: O,
          onToggleMicrophoneMute: P,
          onToggleMute: N,
          petControlsAppearance: L,
          phase: F,
          placement: q,
          showsNotificationBadge: j,
        } = e,
        D = void 0 === v || v,
        U = void 0 !== w && w,
        H = void 0 !== b && b,
        B = void 0 === C || C,
        V = void 0 !== M && M,
        z = void 0 !== S && S,
        X = void 0 !== E && E,
        W = void 0 === L ? d.JCZ : L,
        G = void 0 !== j && j,
        $ = (0, y.A)(),
        K = "inactive" !== F,
        Q = "starting" === F,
        Z = "stopping" === F,
        J = !H && (K || x || null != I),
        ee = "active" === F
      g[0] !== D || g[1] !== W
        ? ((t = D ? W.hoverControlSize : (0, id.PO)(W)), (g[0] = D), (g[1] = W), (g[2] = t))
        : (t = g[2])
      let et = t,
        ea = D ? W.hoverControlSize : W.compactControlHeight,
        en = D ? W.hoverControlSize / 2 : W.compactControlCornerRadius,
        eo = D ? W.hoverControlGap : -et,
        el = D ? "arc" : "row",
        es = D ? W.hoverOffsetX : W.compactOffsetX,
        ec = D ? W.hoverOffsetY : W.compactOffsetY
      if (
        g[3] !== U ||
        g[4] !== D ||
        g[5] !== H ||
        g[6] !== B ||
        g[7] !== A ||
        g[8] !== en ||
        g[9] !== ea ||
        g[10] !== et ||
        g[11] !== I ||
        g[12] !== $ ||
        g[13] !== ee ||
        g[14] !== z ||
        g[15] !== X ||
        g[16] !== K ||
        g[17] !== V ||
        g[18] !== Q ||
        g[19] !== Z ||
        g[20] !== R ||
        g[21] !== _ ||
        g[22] !== O ||
        g[23] !== T ||
        g[24] !== k ||
        g[25] !== P ||
        g[26] !== N ||
        g[27] !== W ||
        g[28] !== q ||
        g[29] !== G ||
        g[30] !== J ||
        g[31] !== eo ||
        g[32] !== el ||
        g[33] !== es ||
        g[34] !== ec
      ) {
        let e,
          t = { controlGap: eo, controlSize: et, layout: el, offsetX: es, offsetY: ec },
          n = !H && ee && V && null != P && null != N,
          d = B
            ? "group-hover:pointer-events-auto group-hover:opacity-100 group-has-[:focus-visible]:pointer-events-auto group-has-[:focus-visible]:opacity-100"
            : null,
          m = iw.start
        Q ? (m = iw.starting) : ee && null != O ? (m = iw.openThread) : K && (m = iw.stop)
        let f = n ? iw.stop : m
        g[43] !== U || g[44] !== I || g[45] !== K || g[46] !== V || g[47] !== d
          ? ((e =
              null != I || (K && !V) || U
                ? "pointer-events-auto opacity-100"
                : ["pointer-events-none opacity-0 focus-within:pointer-events-auto focus-within:opacity-100", d]),
            (g[43] = U),
            (g[44] = I),
            (g[45] = K),
            (g[46] = V),
            (g[47] = d),
            (g[48] = e))
          : (e = g[48])
        let h = e
        ;(g[49] !== q || g[50] !== n
          ? ((p = n
              ? (0, i.jsx)("div", {
                  className: "absolute z-30",
                  "data-avatar-overlay-hit-region": "realtime-voice",
                  role: "presentation",
                  style: { height: 42, left: "calc(50% - 56px)", top: q.startsWith("bottom") ? 0 : -10, width: 112 },
                  onClick: iv,
                  onPointerDown: ig,
                })
              : null),
            (g[49] = q),
            (g[50] = n),
            (g[51] = p))
          : (p = g[51]),
          (o = aJ.x),
          (s = "never"))
        let v = n
          ? (0, i.jsx)(
              iy,
              {
                ariaLabel: $.formatMessage(z ? iw.unmuteMicrophone : iw.muteMicrophone),
                disabled: !ee,
                arePetControlsExpanded: D,
                controlCornerRadius: en,
                controlHeight: ea,
                controlWidth: et,
                isAnimated: !0,
                isPressed: z,
                mascot: R,
                nativeSurfaceId: "voice-microphone",
                onAnimationFrame: _,
                petControlsAppearance: W,
                position: (0, id.oO)({ ...t, mascot: R, showsNotificationBadge: G, surfaceId: "voice-microphone" }),
                tooltipContent: (0, i.jsx)(ei.A, { ...(z ? iw.unmuteMicrophone : iw.muteMicrophone) }),
                visibilityClassName: h,
                onClick: P,
                children: (0, i.jsx)(eO.I, { "aria-hidden": !1, asset: il.X }),
              },
              "voice-microphone",
            )
          : null
        g[52] !== v ? ((c = (0, i.jsx)(eg.N, { initial: !1, children: v })), (g[52] = v), (g[53] = c)) : (c = g[53])
        let y = V ? void 0 : "pet-controls",
          w = J
            ? (0, i.jsx)(iy, {
                ariaLabel: $.formatMessage(f),
                arePetControlsExpanded: D,
                controlCornerRadius: en,
                controlHeight: ea,
                controlWidth: et,
                disabled: Q || Z,
                mascot: R,
                nativeSurfaceId: "voice-controls",
                onAnimationFrame: _,
                petControlsAppearance: W,
                position: (0, id.oO)({ ...t, mascot: R, showsNotificationBadge: G, surfaceId: "voice-controls" }),
                tooltipContent: (0, i.jsx)(ei.A, { ...f }),
                visibilityClassName: h,
                onClick: () => {
                  n ? k?.() : ee && null != O ? O() : K ? k?.() : T?.()
                },
                children:
                  null != I
                    ? (0, i.jsx)(eO.I, { className: "text-danger", "aria-hidden": !1, asset: ir.m })
                    : n || ((V || null == O) && (ee || Z))
                      ? (0, i.jsx)(eO.I, { "aria-hidden": !1, asset: iu.Q })
                      : Q
                        ? (0, i.jsx)(er.y, { className: "icon-xs" })
                        : (0, i.jsx)(Y.ERJ, {}),
              })
            : null
        ;(g[54] !== A || g[55] !== y || g[56] !== w
          ? ((u = (0, i.jsxs)("div", {
              className: "persistentControls-VYJg29",
              "data-avatar-overlay-native-glass-group": y,
              children: [A, w],
            })),
            (g[54] = A),
            (g[55] = y),
            (g[56] = w),
            (g[57] = u))
          : (u = g[57]),
          (a = eg.N),
          (r = !1),
          (l = n
            ? (0, i.jsx)(
                iy,
                {
                  ariaLabel: $.formatMessage(X ? iw.unmuteOutput : iw.muteOutput),
                  arePetControlsExpanded: D,
                  controlCornerRadius: en,
                  controlHeight: ea,
                  controlWidth: et,
                  disabled: !ee,
                  isAnimated: !0,
                  isPressed: X,
                  mascot: R,
                  nativeSurfaceId: "voice-output",
                  onAnimationFrame: _,
                  petControlsAppearance: W,
                  position: (0, id.oO)({ ...t, mascot: R, showsNotificationBadge: G, surfaceId: "voice-output" }),
                  tooltipContent: (0, i.jsx)(ei.A, { ...(X ? iw.unmuteOutput : iw.muteOutput) }),
                  visibilityClassName: h,
                  onClick: N,
                  children: X
                    ? (0, i.jsx)(eO.I, { "aria-hidden": !1, asset: is })
                    : (0, i.jsx)(eO.I, { "aria-hidden": !1, asset: ic.L }),
                },
                "voice-output",
              )
            : null),
          (g[3] = U),
          (g[4] = D),
          (g[5] = H),
          (g[6] = B),
          (g[7] = A),
          (g[8] = en),
          (g[9] = ea),
          (g[10] = et),
          (g[11] = I),
          (g[12] = $),
          (g[13] = ee),
          (g[14] = z),
          (g[15] = X),
          (g[16] = K),
          (g[17] = V),
          (g[18] = Q),
          (g[19] = Z),
          (g[20] = R),
          (g[21] = _),
          (g[22] = O),
          (g[23] = T),
          (g[24] = k),
          (g[25] = P),
          (g[26] = N),
          (g[27] = W),
          (g[28] = q),
          (g[29] = G),
          (g[30] = J),
          (g[31] = eo),
          (g[32] = el),
          (g[33] = es),
          (g[34] = ec),
          (g[35] = a),
          (g[36] = o),
          (g[37] = r),
          (g[38] = l),
          (g[39] = s),
          (g[40] = c),
          (g[41] = u),
          (g[42] = p))
      } else ((a = g[35]), (o = g[36]), (r = g[37]), (l = g[38]), (s = g[39]), (c = g[40]), (u = g[41]), (p = g[42]))
      return (
        g[58] !== a || g[59] !== r || g[60] !== l
          ? ((m = (0, i.jsx)(a, { initial: r, children: l })), (g[58] = a), (g[59] = r), (g[60] = l), (g[61] = m))
          : (m = g[61]),
        g[62] !== o || g[63] !== s || g[64] !== c || g[65] !== u || g[66] !== m
          ? ((f = (0, i.jsxs)(o, { reducedMotion: s, children: [c, u, m] })),
            (g[62] = o),
            (g[63] = s),
            (g[64] = c),
            (g[65] = u),
            (g[66] = m),
            (g[67] = f))
          : (f = g[67]),
        g[68] !== p || g[69] !== f
          ? ((h = (0, i.jsxs)(i.Fragment, { children: [p, f] })), (g[68] = p), (g[69] = f), (g[70] = h))
          : (h = g[70]),
        h
      )
    }
    function ig(e) {
      e.stopPropagation()
    }
    function iv(e) {
      e.stopPropagation()
    }
    function iy(e) {
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
          children: I,
          controlCornerRadius: M,
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
        H = A ? a0.z1 : a0.Wm,
        B = A ? a0.P7 : a0.y1,
        V = `calc(50% + ${F.x}px)`,
        z = `calc(100% + ${F.y - k.height}px)`
      C[0] !== M || C[1] !== S || C[2] !== E || C[3] !== V || C[4] !== z
        ? ((t = { borderRadius: M, height: S, left: V, top: z, width: E }),
          (C[0] = M),
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
      let X = !U
      ;(C[15] !== B
        ? ((l = { default: im, borderRadius: B, height: B, left: B, top: B, width: B }), (C[15] = B), (C[16] = l))
        : (l = C[16]),
        C[17] !== U || C[18] !== O
          ? ((s = () => {
              U ||
                tJ.v.debug("Avatar overlay voice control dismissal completed", {
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
                tJ.v.debug("Avatar overlay voice control dismissal started", {
                  safe: { durationMs: L.transitionDurationMs, surfaceId: O, timeMs: performance.now() },
                })
            }),
            (C[20] = U),
            (C[21] = O),
            (C[22] = L),
            (C[23] = c))
          : (c = C[23]))
      let W = !A && "!border-transparent"
      ;(C[24] !== W || C[25] !== j
        ? ((u = (0, ev.A)("group/voice-action no-drag", W, j)), (C[24] = W), (C[25] = j), (C[26] = u))
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
      C[33] !== Q ? ((f = (0, a0.BP)(Q)), (C[33] = Q), (C[34] = f)) : (f = C[34])
      let Z = +!!A,
        J = A ? 1 : L.contentHiddenScale
      return (
        C[35] !== f || C[36] !== Z || C[37] !== J
          ? ((h = { filter: f, opacity: Z, scale: J }), (C[35] = f), (C[36] = Z), (C[37] = J), (C[38] = h))
          : (h = C[38]),
        C[39] !== I || C[40] !== H || C[41] !== h
          ? ((g = (0, i.jsx)(eh.P.span, {
              animate: h,
              className: "flex items-center justify-center",
              initial: !1,
              transition: H,
              children: I,
            })),
            (C[39] = I),
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
          ? ((y = (0, i.jsx)(io.m, { contentClassName: "pointer-events-none", content: q, children: v })),
            (C[50] = v),
            (C[51] = q),
            (C[52] = y))
          : (y = C[52]),
        C[53] !== M || C[54] !== O || C[55] !== u || C[56] !== y
          ? ((w = (0, i.jsx)(ip, { className: u, nativeCornerRadius: M, nativeSurfaceId: O, style: d, children: y })),
            (C[53] = M),
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
        C[65] !== X ||
        C[66] !== l
          ? ((b = (0, i.jsx)(eh.P.div, {
              animate: a,
              className: "absolute z-30 -translate-x-1/2",
              exit: o,
              initial: r,
              inert: X,
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
            (C[65] = X),
            (C[66] = l),
            (C[67] = b))
          : (b = C[67]),
        b
      )
    }
    let iw = (0, w.YK)({
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
    var ib = a("m5G2"),
      iC = "thinkingShimmer-xcf4BW"
    function ix(e) {
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
              e.style.top = `${(0, id.$b)({ belowAnchorTop: y, mascotTop: w, occupiedBounds: b?.get(), pillHeight: e.offsetHeight, visibleViewportBottom: Math.min(x, a), visibleViewportTop: C })}px`
            }
            t()
            let a = b?.on("change", t),
              i = (0, ib.J)({ axis: "height", target: e, onChange: t })
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
      let I = "danger" === h ? "alert" : "status",
        M = "danger" === h ? "small" : "micro",
        S = "danger" === h ? "block text-center break-words whitespace-normal" : "truncate"
      return (
        c[9] !== S || c[10] !== h
          ? ((r = (0, ev.A)("max-w-full align-bottom", S, "neutral" === h && ["loading-shimmer-pure-text", iC])),
            (c[9] = S),
            (c[10] = h),
            (c[11] = r))
          : (r = c[11]),
        c[12] !== r || c[13] !== m
          ? ((l = (0, i.jsx)("span", { className: r, children: m })), (c[12] = r), (c[13] = m), (c[14] = l))
          : (l = c[14]),
        c[15] !== p || c[16] !== l || c[17] !== A || c[18] !== o || c[19] !== I || c[20] !== M || c[21] !== h
          ? ((s = (0, i.jsx)(en.sR, {
              "aria-live": A,
              className: o,
              nativeSurfaceId: "voice-status",
              ref: v,
              role: I,
              size: M,
              style: p,
              tone: h,
              children: l,
            })),
            (c[15] = p),
            (c[16] = l),
            (c[17] = A),
            (c[18] = o),
            (c[19] = I),
            (c[20] = M),
            (c[21] = h),
            (c[22] = s))
          : (s = c[22]),
        s
      )
    }
    var iA = a("KUNU"),
      iI = a("qGR1"),
      iM = a("Swsr"),
      iS = a("FPgw")
    let iE = (0, eT.a)({
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
        body: '<path d="M14 7.33691C14.4582 7.33712 14.8301 7.70873 14.8301 8.16699V13.793C14.83 14.1455 14.6896 14.4841 14.4404 14.7334L11.6699 17.5039C11.5079 17.6659 11.2955 17.7469 11.083 17.7469C10.6245 17.7469 10.2531 17.3756 10.2531 16.9171C10.2531 16.7046 10.3341 16.4922 10.4961 16.3301L13.1699 13.6562V8.16699C13.1699 7.7086 13.5416 7.33691 14 7.33691Z" fill="currentColor"/> <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2.66992C20.2574 2.66992 25.3301 7.74261 25.3301 14C25.3301 20.2574 20.2574 25.3301 14 25.3301C7.74261 25.3301 2.66992 20.2574 2.66992 14C2.66992 7.74261 7.74261 2.66992 14 2.66992ZM14 4.33008C8.65941 4.33008 4.33008 8.65941 4.33008 14C4.33008 19.3406 8.65941 23.6699 14 23.6699C19.3406 23.6699 23.6699 19.3406 23.6699 14C23.6699 8.65941 19.3406 4.33008 14 4.33008Z" fill="currentColor"/>',
      }),
      iR = (0, eT.a)({
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
      i_ = (0, eT.a)({
        name: "exclamationmark-circle-fill-light-16",
        canvas: { width: 16, height: 16, viewBox: "0 0 16 16" },
        paint: { kind: "monochrome" },
        optical: { shape: "circular" },
        capabilities: ["icon"],
        body: '<path fill-rule="evenodd" clip-rule="evenodd" d="M8 1.47461C11.6037 1.47461 14.5254 4.39634 14.5254 8C14.5254 11.6037 11.6037 14.5254 8 14.5254C4.39634 14.5254 1.47461 11.6037 1.47461 8C1.47461 4.39634 4.39634 1.47461 8 1.47461ZM8 9.30371C7.57689 9.30383 7.22923 9.62595 7.1875 10.0381L7.18262 10.1211L7.1875 10.2051C7.22945 10.617 7.57705 10.9384 8 10.9385C8.45123 10.9383 8.81738 10.5724 8.81738 10.1211C8.81726 9.69822 8.49579 9.35064 8.08398 9.30859L8 9.30371ZM8 5.06152C7.71005 5.06152 7.47461 5.29696 7.47461 5.58691V7.75391C7.47478 8.04371 7.71016 8.27832 8 8.27832C8.28984 8.27832 8.52522 8.04371 8.52539 7.75391V5.58691C8.52539 5.29696 8.28995 5.06152 8 5.06152Z" fill="currentColor"/>',
      }),
      iT = (0, eT.a)({
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
    function ik(e) {
      switch (e.iconType) {
        case "check-circle":
          return (0, i.jsx)(eO.I, { className: "text-green", asset: iM.m })
        case "clock":
          return (0, i.jsx)(Y.QC9, { className: "text-secondary" })
        case "spinner":
          return null
        case "warning":
          return (0, i.jsx)(eO.I, { className: "text-danger", asset: i_ })
      }
    }
    function iO(e) {
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
    function iP(e) {
      return JSON.stringify([
        e.id,
        e.turnKey,
        e.level,
        e.isLoading,
        e.waitingRequest?.kind,
        e.waitingRequest?.kind === "plan" ? e.waitingRequest.turnId : e.waitingRequest?.requestId,
      ])
    }
    function iN(e) {
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
    var iL = a("fkjt"),
      iF = "notificationPresentation-S5hOn6",
      iq = "inlineSubtitleSolidText-MYmDPb"
    let ij = { damping: a0.Wm.default.damping, mass: a0.Wm.default.mass, stiffness: a0.Wm.default.stiffness }
    function iD(e) {
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
        I = (0, ef.I)(),
        M = (0, ey.d)(0),
        S = (0, ey.d)(0),
        E = (0, ey.d)(y.origin.width),
        R = (0, ey.d)(y.origin.height),
        _ = (0, ey.d)(0),
        T = (0, ey.d)(0),
        k = (0, ey.d)(0),
        O = (0, ey.d)((y.origin.textOffsetX ?? 0) / (y.origin.zoom ?? 1)),
        P = (0, ey.d)((y.origin.textOffsetY ?? 0) / (y.origin.zoom ?? 1)),
        N = (0, ey.d)(y.origin.zoom ?? 1),
        L = (0, iL.z)(0, ij),
        F = (0, ey.d)(y.origin.textFontWeight ?? 0),
        q = (0, ey.d)((y.origin.textOffsetX ?? 0) - y.origin.width / 2),
        j = (0, iL.z)(q, ij),
        D = (0, ey.d)(y.origin.textOffsetY ?? 0),
        U = (0, iL.z)(D, ij),
        H = (0, iL.z)(0, a0.z1.filter),
        B = (0, ey.d)(y.origin.left + y.origin.width / 2),
        V = (0, ey.d)(y.origin.top),
        z = (0, ey.d)(y.origin.width),
        Y = (0, ey.d)(y.origin.height)
      h[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = { damping: a0.z1.filter.damping, mass: a0.z1.filter.mass, stiffness: a0.z1.filter.stiffness }),
          (h[0] = t))
        : (t = h[0])
      let X = (0, iL.z)(B, t),
        W = (0, iL.z)(V, ij),
        G = (0, iL.z)(z, ij),
        $ = (0, iL.z)(Y, ij)
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
      h[23] !== M ||
      h[24] !== _ ||
      h[25] !== I ||
      h[26] !== X ||
      h[27] !== $ ||
      h[28] !== j ||
      h[29] !== U ||
      h[30] !== W ||
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
            if (null == a || I) return void K()
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
                ;(0 !== W.getVelocity() || 0 !== X.getVelocity() || 0 !== G.getVelocity() || 0 !== $.getVelocity()) &&
                  H.set(1)
                let b = X.get() - window.screenX - g / 2,
                  C = W.get() - window.screenY
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
                      tJ.v.debug("Quick Chat pill reached the previous task", {
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
                  M.set((b - d.left) / p),
                  S.set((C - d.top) / p),
                  E.set(g / p),
                  R.set(w / p),
                  _.set(null == n ? 1 : Number(getComputedStyle(n).opacity)),
                  J(),
                  0.01 > Math.abs(L.get() - 1) &&
                    [
                      [X, B],
                      [W, V],
                      [G, z],
                      [$, Y],
                      [j, q],
                      [U, D],
                    ].every(iU))
                ) {
                  ;(tJ.v.info("Quick Chat pill throw settled", {
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
          (h[23] = M),
          (h[24] = _),
          (h[25] = I),
          (h[26] = X),
          (h[27] = $),
          (h[28] = j),
          (h[29] = U),
          (h[30] = W),
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
        h[55] !== M ||
        h[56] !== _ ||
        h[57] !== I ||
        h[58] !== X ||
        h[59] !== $ ||
        h[60] !== j ||
        h[61] !== U ||
        h[62] !== W ||
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
              I,
              M,
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
              X,
              W,
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
            (h[55] = M),
            (h[56] = _),
            (h[57] = I),
            (h[58] = X),
            (h[59] = $),
            (h[60] = j),
            (h[61] = U),
            (h[62] = W),
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
          ? ((u = (0, ev.A)("absolute text-sm text-default", e3, iF)), (h[78] = u))
          : (u = h[78]))
      let ee = y.notificationId
      return (
        h[79] !== M || h[80] !== _ || h[81] !== S || h[82] !== E
          ? ((d = { left: M, top: S, width: E, opacity: _ }),
            (h[79] = M),
            (h[80] = _),
            (h[81] = S),
            (h[82] = E),
            (h[83] = d))
          : (d = h[83]),
        h[84] !== L || h[85] !== y.origin || h[86] !== O || h[87] !== P || h[88] !== N
          ? ((p = (0, i.jsx)(iH, { origin: y.origin, textLeft: O, textTop: P, zoom: N, progress: L })),
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
    function iU(e) {
      let [t, a] = e
      return 0.1 > Math.abs(t.get() - a.get()) && 1 > Math.abs(t.getVelocity())
    }
    function iH(e) {
      let t,
        a,
        o,
        r,
        l = (0, n.c)(17),
        { origin: s, textLeft: c, textTop: u, zoom: d, progress: p } = e,
        m = s.zoom ?? 1,
        f = (0, ew.G)(p, iB)
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
    function iB(e) {
      return 1 - Math.min(1, Math.max(0, e))
    }
    var iV = a("QAs2")
    function iz(e) {
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
        I = (0, ef.I)(),
        [M, S] = (0, g.useState)(!1),
        [E, R] = (0, g.useState)(54),
        _ = M || A,
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
        c[25] !== I ||
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
                    transition: I
                      ? { duration: 0 }
                      : {
                          scaleX: { bounce: 0.18, duration: 0.45, type: "spring" },
                          scaleY: { bounce: 0.18, duration: 0.45, type: "spring" },
                          width: { bounce: 0.18, duration: 0.45, type: "spring" },
                          x: { bounce: 0.18, duration: 0.45, type: "spring" },
                        },
                  },
                  initial: !I && {
                    scaleX: C.startScaleX,
                    scaleY: C.startScaleY,
                    width: 44,
                    x: ("left" === w ? -1 : 1) * C.travelPx,
                  },
                  transition: I
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
                      transition: I || A ? { duration: 0 } : { bounce: 0.18, duration: 0.45, type: "spring" },
                      children: (0, i.jsxs)(en.yl, {
                        className: "size-full overflow-hidden",
                        nativeSurfaceId: v,
                        variant: "activity",
                        children: [
                          (0, i.jsx)(eh.P.div, {
                            ref: (e) =>
                              (0, ib.J)({
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
                            transition: { duration: I || !_ ? 0 : 0.12 },
                            children: b,
                          }),
                          (0, i.jsx)(eh.P.div, {
                            animate: { opacity: +!_ },
                            className: "pointer-events-none absolute inset-y-0 flex items-center justify-center",
                            initial: !1,
                            style: { left: "left" === w ? 0 : void 0, right: "right" === w ? 0 : void 0, width: 44 },
                            transition: { duration: I || _ ? 0 : 0.12 },
                            children: p,
                          }),
                        ],
                      }),
                    }),
                    null != y && _
                      ? (0, i.jsx)("div", {
                          className: (0, ev.A)("absolute -top-1 -left-1 z-20", iV.A.barMaterial, iV.A.controls),
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
            (c[25] = I),
            (c[26] = w),
            (c[27] = l))
          : (l = c[27]),
        c[28] !== l ? ((s = (0, i.jsx)(eg.N, { children: l })), (c[28] = l), (c[29] = s)) : (s = c[29]),
        s
      )
    }
    var iY = a("zn72")
    function iX(e) {
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
      ;((0, aZ.L)(f, "change", b),
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
        I = -h.mascot.top
      return (
        p[6] !== h.viewport.height || p[7] !== h.viewport.width || p[8] !== A || p[9] !== I
          ? ((r = (0, i.jsx)("rect", {
              x: A,
              y: I,
              width: h.viewport.width,
              height: h.viewport.height,
              fill: "white",
            })),
            (p[6] = h.viewport.height),
            (p[7] = h.viewport.width),
            (p[8] = A),
            (p[9] = I),
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
    function iW(e) {
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
        I,
        M,
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
        [X, W] = (0, g.useState)("auto"),
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
              tJ.v.debug("Avatar overlay caption native composition readiness changed", {
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
                  ;(tJ.v.debug("Quick Chat voice bubble content size changed", { safe: { height: i } }), W(i))
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
      P[41] !== X ||
      P[42] !== ei ||
      P[43] !== j ||
      P[44] !== B ||
      P[45] !== U ||
      P[46] !== eC ||
      P[47] !== H
        ? ((w = (0, i.jsx)(
            iG,
            {
              bubbleTransition: J,
              contentHeight: X,
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
          (P[41] = X),
          (P[42] = ei),
          (P[43] = j),
          (P[44] = B),
          (P[45] = U),
          (P[46] = eC),
          (P[47] = H),
          (P[48] = w))
        : (w = P[48])
      let ex = w,
        eA = "quick-chat" === B ? X : "auto"
      P[49] !== eA ? ((b = { height: eA, opacity: 1 }), (P[49] = eA), (P[50] = b)) : (b = P[50])
      let eI = !Q && "-translate-y-full"
      ;(P[51] !== eI
        ? ((C = (0, ev.A)(
            "no-drag pointer-events-none absolute flex shrink-0 justify-center text-start",
            eI,
            "glassGroup-rVqAMq",
          )),
          (P[51] = eI),
          (P[52] = C))
        : (C = P[52]),
        P[53] !== j ? ((x = !j && { height: 0, opacity: 0 }), (P[53] = j), (P[54] = x)) : (x = P[54]),
        P[55] !== J || P[56] !== j
          ? ((A = j ? { duration: 0 } : J), (P[55] = J), (P[56] = j), (P[57] = A))
          : (A = P[57]),
        P[58] !== X || P[59] !== B || P[60] !== ef
          ? ((I = () => {
              ;((ee.current = "quick-chat" === B ? X : "auto"), (et.current = 1), to.Gt.preRender(ef, !1, !0))
            }),
            (P[58] = X),
            (P[59] = B),
            (P[60] = ef),
            (P[61] = I))
          : (I = P[61]),
        P[62] !== ef
          ? ((M = (e) => {
              ;(("number" == typeof e.height || "auto" === e.height) && (ee.current = e.height),
                "number" == typeof e.opacity && (et.current = e.opacity),
                to.Gt.preRender(ef, !1, !0))
            }),
            (P[62] = ef),
            (P[63] = M))
          : (M = P[63]),
        P[64] !== el ? ((S = { maxWidth: el }), (P[64] = el), (P[65] = S)) : (S = P[65]))
      let eM = "quick-chat" === B ? "quick-chat-caption" : void 0,
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
        P[75] !== ew || P[76] !== S || P[77] !== eM || P[78] !== _
          ? ((T = (0, i.jsx)(en.yl, {
              ref: ew,
              nativeSurfaceId: "realtime-caption",
              style: S,
              variant: eM,
              children: _,
            })),
            (P[75] = ew),
            (P[76] = S),
            (P[77] = eM),
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
        P[89] !== I ||
        P[90] !== M ||
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
              onAnimationComplete: I,
              onUpdate: M,
              children: [T, k],
            })),
            (P[84] = em),
            (P[85] = b),
            (P[86] = C),
            (P[87] = x),
            (P[88] = A),
            (P[89] = I),
            (P[90] = M),
            (P[91] = T),
            (P[92] = k),
            (P[93] = O))
          : (O = P[93]),
        O
      )
    }
    function iG(e) {
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
        I = (0, ea.tF)(),
        M = null != C
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
        _ = I ? v : void 0,
        T = !I || void 0
      m[5] === Symbol.for("react.memo_cache_sentinel") ? ((o = { opacity: 1 }), (m[5] = o)) : (o = m[5])
      let k =
          "quick-chat" === b
            ? "flex min-w-0 flex-col gap-1.5 text-size-chat-sm leading-4"
            : "text-size-chat leading-4 text-default",
        O = !I && "absolute inset-x-0 top-0"
      return (
        m[6] !== k || m[7] !== O ? ((r = (0, ev.A)(k, O)), (m[6] = k), (m[7] = O), (m[8] = r)) : (r = m[8]),
        m[9] !== f || m[10] !== M
          ? ((l = {
              opacity: 0,
              transition: M ? { delay: Math.max(0, (f.duration ?? 0) - 0.21), duration: 0.21 } : { duration: 0 },
            }),
            (m[9] = f),
            (m[10] = M),
            (m[11] = l))
          : (l = m[11]),
        m[12] !== R ? ((s = !!R && { opacity: 0 }), (m[12] = R), (m[13] = s)) : (s = m[13]),
        m[14] !== R || m[15] !== f || m[16] !== M || m[17] !== E
          ? ((c = R ? { duration: 0.21, delay: M && E ? 0 : f.duration } : { duration: 0 }),
            (m[14] = R),
            (m[15] = f),
            (m[16] = M),
            (m[17] = E),
            (m[18] = c))
          : (c = m[18]),
        m[19] !== M || m[20] !== b || m[21] !== C
          ? ((u = M
              ? (0, i.jsx)("div", {
                  className: (0, ev.A)(
                    "loading-shimmer-pure-text select-none truncate",
                    "quick-chat" === b && "text-xs text-secondary",
                    "statusText-YZnc6c",
                    iC,
                  ),
                  children: C,
                })
              : null),
            (m[19] = M),
            (m[20] = b),
            (m[21] = C),
            (m[22] = u))
          : (u = m[22]),
        m[23] !== S || m[24] !== I || m[25] !== M || m[26] !== w || m[27] !== b || m[28] !== x || m[29] !== A
          ? ((d =
              S && ("quick-chat" === b || !M)
                ? (0, i.jsx)("div", {
                    ref: I ? A : void 0,
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
            (m[24] = I),
            (m[25] = M),
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
    let i$ = (0, eT.a)({
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
    var iK = a("z1il")
    let iQ = (0, eT.a)({
      name: "stop-sm-fill-regular-28",
      canvas: {
        width: 28,
        height: 28,
        viewBox: "0 0 28 28",
        frame: { x: 0, y: 0, width: 28, height: 28 },
        inkBounds: { x: 7.583313, y: 7.583496, width: 12.833313, height: 12.833496 },
        visualBounds: { x: 7.583313, y: 7.583496, width: 12.833313, height: 12.833496 },
      },
      paint: { kind: "monochrome" },
      optical: {
        shape: "non-circular",
        bounds: { x: 7.583313, y: 7.583496, width: 12.833313, height: 12.833496 },
        center: { x: 13.99997, y: 14.000244 },
        insets: { top: 7.583496, right: 7.583374, bottom: 7.583008, left: 7.583313 },
        anchors: {
          frame: { x: 14, y: 14 },
          ink: { x: 13.99997, y: 14.000244 },
          foreground: { x: 13.99997, y: 14.000244 },
        },
      },
      capabilities: ["icon"],
      body: '<path d="M7.58331 9.04183C7.58331 8.23641 8.23623 7.5835 9.04165 7.5835H18.9583C19.7637 7.5835 20.4166 8.23641 20.4166 9.04183V18.9585C20.4166 19.7639 19.7637 20.4168 18.9583 20.4168H9.04165C8.23623 20.4168 7.58331 19.7639 7.58331 18.9585V9.04183Z" fill="currentColor"/>',
    })
    class iZ {
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
    function iJ(e) {
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
        I,
        M,
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
        X = (0, ef.I)(),
        W = (0, ey.d)(0),
        G = (0, ey.d)(0),
        $ = (0, ey.d)(0)
      F[0] !== W || F[1] !== G
        ? ((t = () => {
            let e = -W.get(),
              t = G.get()
            return e <= 0 ? e : 0 === t ? 0 : t * Math.tanh(e / t)
          }),
          (F[0] = W),
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
      F[3] !== eg || F[4] !== W
        ? ((a = () => Math.max(0, Math.min(1, W.get() / (eg ?? 1)))), (F[3] = eg), (F[4] = W), (F[5] = a))
        : (a = F[5])
      let eC = (0, ew.G)(a)
      F[6] !== eC || F[7] !== Q ? ((o = () => eC.get() * Q.get()), (F[6] = eC), (F[7] = Q), (F[8] = o)) : (o = F[8])
      let ex = (0, ew.G)(o)
      F[9] !== eg || F[10] !== W || F[11] !== $
        ? ((r = () => `calc(100% + ${Math.max(0, Math.min(W.get(), $.get()) - (eg ?? 0))}px)`),
          (F[9] = eg),
          (F[10] = W),
          (F[11] = $),
          (F[12] = r))
        : (r = F[12])
      let eA = (0, ew.G)(r)
      ;(F[13] === Symbol.for("react.memo_cache_sentinel")
        ? ((l = () =>
            (0, ib.J)({
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
        F[15] !== eg || F[16] !== Q || F[17] !== W || F[18] !== V || F[19] !== X
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
              let r = W.get()
              if (r === o && "closed" === e) {
                ;(ed(!1), em(!1))
                return
              }
              let l = eP(r, o, a, ec.current)
              ;(tJ.v.debug("Avatar overlay swipe released", {
                safe: { destination: e, from: r, to: o, velocity: a, duration: l.duration },
              }),
                (ei.current = (0, eR.i)(W, o, {
                  ...l,
                  duration: X ? 0 : l.duration,
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
            (F[17] = W),
            (F[18] = V),
            (F[19] = X),
            (F[20] = c))
          : (c = F[20]))
      let eI = c
      F[21] !== eg || F[22] !== W || F[23] !== G || F[24] !== $ || F[25] !== B
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
              (ea.current = new iZ(
                {
                  rowWidth: i.offsetWidth * a,
                  actionWidth: Math.min((eg ?? n.offsetWidth) * a, i.offsetWidth * a - 15),
                  source: e,
                },
                W.get() * a,
                t,
              )),
              ed(!0))
          }),
          (F[21] = eg),
          (F[22] = W),
          (F[23] = G),
          (F[24] = $),
          (F[25] = B),
          (F[26] = u))
        : (u = F[26])
      let eM = (0, g.useEffectEvent)(u)
      F[27] !== W
        ? ((p = (e, t) => {
            null == ea.current || ec.current || W.set(ea.current.update(e, t) / et.current)
          }),
          (F[27] = W),
          (F[28] = p))
        : (p = F[28])
      let eS = (0, g.useEffectEvent)(p)
      F[29] !== eI
        ? ((m = (e) => {
            let t = ea.current
            ;((ea.current = null),
              null != t && eI(t.release(e), e || 50 >= Math.abs(t.velocity) ? 0 : t.velocity / et.current))
          }),
          (F[29] = eI),
          (F[30] = m))
        : (m = F[30])
      let eE = (0, g.useEffectEvent)(m)
      F[31] !== eI
        ? ((f = () => {
            ;((ea.current = null), (el.current = null), eI("closed"))
          }),
          (F[31] = eI),
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
        (0, aZ.L)(W, "change", h),
        F[34] !== eM || F[35] !== e_ || F[36] !== z || F[37] !== eE || F[38] !== H || F[39] !== eS
          ? ((v = () => {
              let e = Z.current
              if (null == e || !z) return void e_()
              let t = {
                element: e,
                begin: (e, t, a) => eM(e, t, a),
                update: (e, t) => eS(e, t),
                end: (e) => eE(e),
                close: () => e_(),
              }
              return (
                (er.current = t),
                H.targets.set(e, t),
                e.addEventListener("wheel", i0, { passive: !1 }),
                () => {
                  ;(e.removeEventListener("wheel", i0), H.forget(t), (er.current = null), ei.current?.stop())
                }
              )
            }),
            (F[34] = eM),
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
        F[49] !== eI || F[50] !== eu
          ? ((x = (e) => {
              es.current
                ? ((es.current = !1), e.preventDefault(), e.stopPropagation())
                : eu &&
                  e.target instanceof Node &&
                  !J.current?.contains(e.target) &&
                  ((ea.current = null), eI("closed"), e.preventDefault(), e.stopPropagation())
            }),
            (F[49] = eI),
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
          ? ((I = (e) => {
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
            (F[55] = I))
          : (I = F[55]),
        F[56] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (e) => eT(e, !1)),
            (S = (e) => eT(e, !0)),
            (E = (e) => eT(e, !0)),
            (F[56] = M),
            (F[57] = S),
            (F[58] = E))
          : ((M = F[56]), (S = F[57]), (E = F[58])),
        F[59] !== q || F[60] !== K ? ((R = q(K)), (F[59] = q), (F[60] = K), (F[61] = R)) : (R = F[61]))
      let eN = !eu,
        eL = !eu
      F[62] !== ex || F[63] !== eC || F[64] !== eA
        ? ((_ = { width: eA, scale: eC, opacity: ex }), (F[62] = ex), (F[63] = eC), (F[64] = eA), (F[65] = _))
        : (_ = F[65])
      let eF = eu ? 0 : -1
      return (
        F[66] !== eI ? ((T = () => eI("dismissed")), (F[66] = eI), (F[67] = T)) : (T = F[67]),
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
        F[80] !== b || F[81] !== eO || F[82] !== x || F[83] !== A || F[84] !== I || F[85] !== R || F[86] !== N
          ? ((L = (0, i.jsxs)("div", {
              ref: Z,
              className: b,
              "data-activity-pill-swipe": "true",
              "data-activity-pill-swipe-armed": eO,
              style: C,
              onClickCapture: x,
              onPointerDownCapture: A,
              onPointerMove: I,
              onPointerUp: M,
              onPointerCancel: S,
              onLostPointerCapture: E,
              children: [R, N],
            })),
            (F[80] = b),
            (F[81] = eO),
            (F[82] = x),
            (F[83] = A),
            (F[84] = I),
            (F[85] = R),
            (F[86] = N),
            (F[87] = L))
          : (L = F[87]),
        L
      )
    }
    function i0(e) {
      Math.abs(e.deltaX) > Math.abs(e.deltaY) && (e.preventDefault(), e.stopPropagation())
    }
    var i1 = a("vdpW"),
      i2 = a("NIKO")
    let i3 = (0, u.i1)(el.u, (e, { get: t }) => (0, i2.h)(t(i1.mz, e))),
      i4 = (0, u.i1)(el.u, (e, { get: t }) => {
        let a = null == e ? null : (t(i1.M, e)?.at(-1) ?? null)
        if (null == a || "inProgress" !== t(i1.OM, a)) return null
        let i = t(i1.hm, a)
        if (null == i) return null
        for (let e = i.length - 1; e >= 0; e--) {
          let n = t(i3, { ...a, itemId: i[e] })
          if (null != n) return n
        }
        return null
      })
    var i5 = a("i6Gy"),
      i6 = a("zjpG")
    function i8(e) {
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
            a[7] !== c.options ? ((n = c.options.map(i7)), (a[7] = c.options), (a[8] = n)) : (n = a[8]),
            a[9] !== r || a[10] !== l
              ? ((s = (e) => {
                  "questionOption" in e ? l?.(e.questionOption) : r(e)
                }),
                (a[9] = r),
                (a[10] = l),
                (a[11] = s))
              : (s = a[11]),
            a[12] !== n || a[13] !== s
              ? ((u = (0, i.jsx)(ni, { actions: n, onRunNotificationAction: s })),
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
              ? ((e = (0, i.jsx)(nt, { copy: s, files: c.files, isExpanded: o, summary: c.summary })),
                (a[18] = o),
                (a[19] = s),
                (a[20] = c.files),
                (a[21] = c.summary),
                (a[22] = e))
              : (e = a[22]),
            a[23] !== c.actions || a[24] !== u
              ? ((t = (0, i.jsx)(ni, { actions: c.actions, onRunNotificationAction: u })),
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
              ? ((e = (0, i.jsx)(i9, { isExpanded: o, onRunNotificationAction: u, request: c })),
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
              ? ((e = (0, i.jsx)(ne, { isExpanded: o, text: c.summary })),
                (a[33] = o),
                (a[34] = c.summary),
                (a[35] = e))
              : (e = a[35]),
            a[36] !== c.actions || a[37] !== u
              ? ((t = (0, i.jsx)(ni, { actions: c.actions, onRunNotificationAction: u })),
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
              ? ((e = (0, i.jsx)(ne, { isExpanded: o, text: c.target })), (a[42] = o), (a[43] = c.target), (a[44] = e))
              : (e = a[44]),
            a[45] !== c.actions || a[46] !== u
              ? ((t = (0, i.jsx)(ni, { actions: c.actions, onRunNotificationAction: u })),
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
              ? ((e = (0, i.jsx)(ne, { isExpanded: o, text: c.target })), (a[51] = o), (a[52] = c.target), (a[53] = e))
              : (e = a[53]),
            a[54] !== c.actions || a[55] !== u
              ? ((t = (0, i.jsx)(ni, { actions: c.actions, onRunNotificationAction: u })),
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
              ? ((e = (0, i.jsx)(ne, { isExpanded: o, text: r })), (a[60] = o), (a[61] = r), (a[62] = e))
              : (e = a[62]),
            a[63] !== c.actions || a[64] !== u
              ? ((t = (0, i.jsx)(ni, { actions: c.actions, onRunNotificationAction: u })),
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
    function i7(e, t) {
      return { label: e.label, tone: 0 === t ? "primary" : "secondary", questionOption: e }
    }
    function i9(e) {
      let t,
        a,
        o,
        r = (0, n.c)(10),
        { isExpanded: l, onRunNotificationAction: s, request: c } = e
      return (
        r[0] !== l || r[1] !== c.summary
          ? ((t = (0, i.jsx)(ne, { isExpanded: l, text: c.summary })), (r[0] = l), (r[1] = c.summary), (r[2] = t))
          : (t = r[2]),
        r[3] !== s || r[4] !== c.actions
          ? ((a = (0, i.jsx)(ni, { actions: c.actions, onRunNotificationAction: s })),
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
    function ne(e) {
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
    function nt(e) {
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
            ? ((n = (0, i.jsx)(i6.a, { className: "mx-1.5 text-tertiary" })), (u[6] = n))
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
        u[24] !== p ? ((l = p.map(na)), (u[24] = p), (u[25] = l)) : (l = u[25]),
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
    function na(e) {
      return (0, i.jsx)("div", { className: "leading-4 break-words", children: e }, e)
    }
    function ni(e) {
      let t,
        a = (0, n.c)(3),
        { actions: o, onRunNotificationAction: r } = e
      return (
        a[0] !== o || a[1] !== r
          ? ((t = (0, i.jsx)("div", {
              className: "mt-3 flex min-w-0 flex-wrap items-center justify-end gap-2 overflow-visible no-drag",
              children: [...o.filter(nr), ...o.filter(no)].map((e) =>
                (0, i.jsx)(
                  eo.$,
                  {
                    className: "max-w-full min-w-0 enabled:active:hover:opacity-80",
                    color: (function (e) {
                      switch (e) {
                        case "primary":
                          return "accent"
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
                    onPointerDown: nn,
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
    function nn(e) {
      e.stopPropagation()
    }
    function no(e) {
      return "primary" === e.tone
    }
    function nr(e) {
      return "primary" !== e.tone
    }
    var nl = a("Fpzh"),
      ns = a("BkQe")
    function nc(e) {
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
          inputRef: I,
          isSubmitting: M,
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
            let t = (0, ns.JG)(e.currentTarget)
            N.current !== t && ((N.current = t), T(e.currentTarget.value, (0, ns.$x)(e.currentTarget)))
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
          ? ((s = E ? { duration: 0 } : { ...nl.K, opacity: { duration: 0.18, ease: "easeOut" } }),
            (v[14] = E),
            (v[15] = s))
          : (s = v[15]),
        v[16] !== x || v[17] !== M || v[18] !== k
          ? ((c = (e) => {
              e.preventDefault()
              let t = x.trim()
              0 === t.length || M || k(t)
            }),
            (v[16] = x),
            (v[17] = M),
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
        v[30] !== I ||
        v[31] !== u ||
        v[32] !== z ||
        v[33] !== d ||
        v[34] !== p
          ? ((m = (0, i.jsx)("textarea", {
              ref: I,
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
            (v[30] = I),
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
    let nu = (0, w.YK)({
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
    })
    function nd(e) {
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
        I,
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
          nativeSurfaceId: X,
          notification: W,
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
        eI = void 0 === Z || Z,
        eM = (0, u.gh)(el.u),
        eS = (0, y.A)(),
        eE = (0, ef.I)()
      S[0] !== eS || S[1] !== W || S[2] !== k
        ? ((t = k ?? aH({ intl: eS, notification: W })), (S[0] = eS), (S[1] = W), (S[2] = k), (S[3] = t))
        : (t = S[3])
      let eR = t,
        e_ = (0, u._U)(tZ.JW, "3312776353") && W.isLoading && null == W.waitingRequest && "danger" !== W.level
      S[4] !== B || S[5] !== W.localConversationId || S[6] !== eM || S[7] !== e_
        ? ((a =
            e_ && !B && null != W.localConversationId
              ? { hostId: eM.get(M.qX, W.localConversationId), threadId: W.localConversationId }
              : null),
          (S[4] = B),
          (S[5] = W.localConversationId),
          (S[6] = eM),
          (S[7] = e_),
          (S[8] = a))
        : (a = S[8])
      let eT = (0, u._U)(i4, a)
      S[9] !== eT || S[10] !== eS || S[11] !== W || S[12] !== e_
        ? ((o = e_ && null != eT ? aH({ intl: eS, notification: { ...W, body: eT } }) : null),
          (S[9] = eT),
          (S[10] = eS),
          (S[11] = W),
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
      S[17] !== W ? ((l = al(W)), (S[17] = W), (S[18] = l)) : (l = S[18])
      let eN = l,
        eL = W.waitingRequest,
        [eF, eq] = (0, g.useState)(!1),
        ej = U ?? eF,
        [eD, eU] = (0, g.useState)(!1),
        eH = (0, g.useRef)(ej),
        [eB, eV] = (0, g.useState)(void 0),
        [ez, eY] = (0, g.useState)(G?.draft ?? ""),
        [eX, eW] = (0, g.useState)(!1),
        eG = (0, g.useRef)(null),
        e$ = (0, g.useRef)(void 0),
        eK = "activity" === W.kind && T && null != er,
        eQ = eK || ("activity" !== W.kind && (null != er || null != W.action)),
        eZ = null != W.controlTarget && null != ep,
        eJ = W.isLoading && eZ,
        e0 = "activity" !== W.kind && null != ec,
        e1 = !H && null != W.notificationPreferenceId && null != eu,
        e2 = eD || ej,
        e3 = null != eL && e2,
        e4 = !eJ && !e3,
        e5 = eZ && void 0 !== eB && eB === W.turnKey,
        e6 = G?.notificationId === W.id && G.turnKey === W.turnKey ? G : null,
        e8 = void 0 !== G,
        e7 = eZ && (e8 ? null != e6 : e5),
        e9 = eI && e0 && !e7 && !B,
        te = eZ && (!H || e7),
        tt = eJ && (e7 || (!H && eX)),
        ta = te && (e7 || (!H && eX)),
        ti = e6?.submissionStatus === "error",
        tn = e6?.submissionStatus === "submitting",
        to = Q && e7,
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
        S[23] !== eP.subtitle || S[24] !== W)
      ) {
        var tc
        ;((tc = eP.subtitle),
          (c = "activity" !== W.kind && null == W.waitingRequest && W.title.length <= 20 && tc.length > 40),
          (S[23] = eP.subtitle),
          (S[24] = W),
          (S[25] = c))
      } else c = S[25]
      let tu = c
      S[26] !== eL
        ? ((d = (e) => {
            if ((e$.current?.(), (e$.current = void 0), null == e || null == eL)) return
            let t = () => {
              let t = Array.from(e.querySelectorAll('[data-avatar-overlay-overflow-content="true"]')).some(nm),
                a = e.querySelector('[data-avatar-overlay-waiting-request-body="true"]'),
                i = null != a && a.clientHeight > 0 && a.scrollHeight > a.clientHeight + 1
              eU((e) => (eH.current && e ? e : t || i))
            }
            ;(t(), (e$.current = (0, ib.J)({ axis: "both", target: e, onChange: t })))
          }),
          (S[26] = eL),
          (S[27] = d))
        : (d = S[27])
      let td = d
      S[28] !== W || S[29] !== ep
        ? ((p = (e) => {
            ep?.(W, e)
          }),
          (S[28] = W),
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
        S[34] !== e8 || S[35] !== tp || S[36] !== to
          ? ((h = () => {
              if (to)
                return e8
                  ? (tp({ type: "follow-up-active-changed", isActive: !0 }),
                    () => {
                      tp({ type: "follow-up-active-changed", isActive: !1 })
                    })
                  : (tp({ type: "open-follow-up" }),
                    () => {
                      tp({ type: "close-follow-up" })
                    })
            }),
            (S[34] = e8),
            (S[35] = tp),
            (S[36] = to),
            (S[37] = h))
          : (h = S[37]),
        S[38] !== e8 || S[39] !== to ? ((v = [e8, to]), (S[38] = e8), (S[39] = to), (S[40] = v)) : (v = S[40]),
        (0, g.useEffect)(h, v),
        S[41] !== e7
          ? ((w = () => {
              e7 && document.activeElement?.closest('[role="menu"]') == null && eG.current?.focus()
            }),
            (b = [e7]),
            (S[41] = e7),
            (S[42] = w),
            (S[43] = b))
          : ((w = S[42]), (b = S[43])),
        (0, K.JX)("avatar-overlay-keyboard-interaction-ready", w, b),
        S[44] !== e8 || S[45] !== W || S[46] !== ep
          ? ((C = () => {
              ;(eY(""), eV(void 0), e8 && ep?.(W, { type: "close-follow-up" }))
            }),
            (S[44] = e8),
            (S[45] = W),
            (S[46] = ep),
            (S[47] = C))
          : (C = S[47]))
      let tm = C,
        tf = `${W.id}:${W.turnKey}`
      return (
        S[48] !== W || S[49] !== ec ? ((x = () => ec?.(W)), (S[48] = W), (S[49] = ec), (S[50] = x)) : (x = S[50]),
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
        S[77] !== e8 ||
        S[78] !== e7 ||
        S[79] !== eC ||
        S[80] !== eQ ||
        S[81] !== e5 ||
        S[82] !== eX ||
        S[83] !== ta ||
        S[84] !== tt ||
        S[85] !== B ||
        S[86] !== tn ||
        S[87] !== ez ||
        S[88] !== td ||
        S[89] !== X ||
        S[90] !== W ||
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
        S[106] !== eI ||
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
                nativeSurfaceId: X,
                publishesLayoutMeasurement: eA,
                rendersMaterial: eI,
                prefersReducedMotion: !!eE,
                prominence: et,
                overflowContent: e0
                  ? (0, i.jsx)("div", {
                      className: (0, ev.A)(
                        "absolute -top-1 left-0 z-20",
                        eX || e7 ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
                      ),
                      "data-avatar-overlay-chromium-overflow": "true",
                      "data-avatar-overlay-swipe-dismiss-accessory": "true",
                      children: (0, i.jsx)(iN, { ariaLabel: eP.dismissNotificationAriaLabel, onClick: () => ec(W) }),
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
                    (e.preventDefault(), e.stopPropagation(), eu(W))
                },
                onBlurCapture: (e) => {
                  e.currentTarget.contains(e.relatedTarget) || eW(e.currentTarget.matches(":hover"))
                },
                onFocusCapture: () => {
                  eW(!0)
                },
                onPointerEnter: () => {
                  ;(es?.(W), eW(!0))
                },
                onPointerLeave: () => {
                  eW(!1)
                },
                children: [
                  (0, i.jsxs)("div", {
                    className: "relative",
                    children: [
                      (0, i.jsxs)(np, {
                        ref: td,
                        interactive: eQ || e1,
                        "aria-label": eK
                          ? eP.expandNotificationStackAriaLabel
                          : eQ
                            ? eP.actionAriaLabel
                            : e1
                              ? eS.formatMessage(i5.OD.notificationActions, { title: W.title })
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
                            if (null != er) return void er(W.id)
                            null != W.action && em?.(W)
                          }
                        },
                        onKeyDown: (e) => {
                          if ((eQ || e1) && ("Enter" === e.key || " " === e.key)) {
                            if ((e.preventDefault(), null != er)) return void er(W.id)
                            if (eQ) return void em?.(W)
                            eu?.(W)
                          }
                        },
                        children: [
                          (0, i.jsxs)(en.oS, {
                            as: "div",
                            hasInlineSubtitle: tu,
                            hasWaitingRequest: null != eL,
                            isExpanded: ej,
                            isLoading: tu && W.isLoading,
                            isOverflowContent: !0,
                            notificationKind: W.kind,
                            variant: "title",
                            children: [
                              (0, i.jsx)("span", {
                                role: "img",
                                "aria-label": eP.statusIconAriaLabel,
                                className: tr || "spinner" === eN.iconType ? "sr-only" : "me-1 inline-flex align-top",
                                "data-avatar-overlay-status": eN.iconType,
                                children: ik(eN),
                              }),
                              (0, i.jsx)(eh.P.span, {
                                className: tu ? (0, ev.A)("font-bold text-default", W.isLoading && iq) : void 0,
                                style: { fontWeight: j },
                                children: W.title,
                              }),
                              tu &&
                                (0, i.jsxs)(eh.P.span, {
                                  style: { opacity: L },
                                  children: [
                                    (0, i.jsx)("span", {
                                      "aria-hidden": !0,
                                      className: (0, ev.A)("mx-1.5 font-normal text-secondary", W.isLoading && iq),
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
                              ("activity" === W.kind || tu) && "hidden",
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
                                (0, i.jsx)(en.oS, { isLoading: W.isLoading, truncate: !0, children: eP.subtitle }),
                              null != eL &&
                                (0, i.jsx)(i8, {
                                  isExpanded: ej,
                                  patchSummaryCopy: eP.patchSummary,
                                  request: eL,
                                  onRunNotificationAction: (e) => {
                                    em?.(W, e)
                                  },
                                  onSubmitQuestionOption: (e) => {
                                    ey?.(W, e)
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
                                "aria-label": eS.formatMessage(nu.replyNotification, { title: W.title }),
                                "aria-pressed": e7,
                                "data-avatar-overlay-material": "css",
                                color: "activity",
                                size: "iconCircle",
                                title: eS.formatMessage(nu.replyNotification, { title: W.title }),
                                onClick: () => {
                                  e7 ? tm() : (eY(""), eV(W.turnKey), e8 && ep?.(W, { type: "open-follow-up" }))
                                },
                                children: (0, i.jsx)(eO.I, { "aria-hidden": !1, asset: i$ }),
                              }),
                              e4
                                ? null
                                : (0, i.jsx)(eo.$, {
                                    "aria-label": eS.formatMessage(nu.stopNotification, { title: W.title }),
                                    "aria-hidden": !tt || void 0,
                                    "data-avatar-overlay-material": "css",
                                    className: "aria-hidden:pointer-events-none aria-hidden:opacity-0",
                                    color: "activityStop",
                                    size: "iconCircle",
                                    tabIndex: tt ? void 0 : -1,
                                    title: eS.formatMessage(nu.stopNotification, { title: W.title }),
                                    onClick: () => {
                                      ;(eY(""), eV(void 0), ep?.(W, { type: "stop" }))
                                    },
                                    children: (0, i.jsx)(eO.I, { "aria-hidden": !1, asset: iQ }),
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
                                ;((eH.current = e), null != ed ? ed(W.id, e) : eq(e))
                              },
                              children: (0, i.jsx)(eh.P.span, {
                                animate: { rotate: ej ? 0 : -90 },
                                transition: eE ? { duration: 0 } : { duration: 0.16, ease: [0.23, 1, 0.32, 1] },
                                children: (0, i.jsx)(eO.I, { "aria-hidden": !1, asset: iK.h }),
                              }),
                            }),
                          })
                        : null,
                    ],
                  }),
                  (0, i.jsx)(eg.N, {
                    mode: null == O ? "sync" : "popLayout",
                    onExitComplete: J,
                    children: e7
                      ? (0, i.jsx)(nc, {
                          animatesOwnHeight: null == O,
                          autoFocus: e5,
                          draft: ez,
                          hasSubmissionError: ti,
                          inputRef: eG,
                          isSubmitting: tn,
                          notificationTitle: W.title,
                          prefersReducedMotion: !!eE,
                          onAnimationFrame: J,
                          onClose: tm,
                          onDraftChange: (e, t) => {
                            ;(eY(e), e8 && ep?.(W, { type: "follow-up-editor-changed", caretPoint: t, draft: e }))
                          },
                          onSubmitFollowUp: (e) => {
                            ;(e8 || (eY(""), eV(void 0)), ep?.(W, { type: "submit-follow-up", prompt: e }))
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
            (S[77] = e8),
            (S[78] = e7),
            (S[79] = eC),
            (S[80] = eQ),
            (S[81] = e5),
            (S[82] = eX),
            (S[83] = ta),
            (S[84] = tt),
            (S[85] = B),
            (S[86] = tn),
            (S[87] = ez),
            (S[88] = td),
            (S[89] = X),
            (S[90] = W),
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
            (S[106] = eI),
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
          ? ((I = (0, i.jsx)(
              iJ,
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
            (S[124] = I))
          : (I = S[124]),
        I
      )
    }
    function np(e) {
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
    function nm(e) {
      return e.clientWidth > 0 && e.scrollWidth > e.clientWidth + 1
    }
    var nf = a("wtvr"),
      nh = a("YEpt"),
      ng = a("gQcz"),
      nv = a("OFUt"),
      ny = a("Xz5X")
    let nw = (0, w.YK)({
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
    })
    function nb(e) {
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
        I,
        M,
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
          onDraftChange: W,
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
      j[6] !== W || j[7] !== ew || j[8] !== Z
        ? ((r = (e) => {
            ;(null == Z && ec(e), W?.(e), ew(), ep(null))
          }),
          (j[6] = W),
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
                  ep(ee.formatMessage(nw.quickChatError))
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
            let t = (0, nh.hJ)(eu, e)
            t !== eu && (eb(t), et.current?.focus())
          }),
          (j[15] = eu),
          (j[16] = eb),
          (j[17] = s))
        : (s = j[17]),
        j[18] !== eu || j[19] !== eb || j[20] !== eC
          ? ((c = (e) => {
              let t = (0, nh.hJ)(eu, e)
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
              ;(J.get(X.Id).danger((0, ny.A)(ee, "start", e).message, {
                errorAnalytics: { toastId: "avatarOverlayNativeFrame.onStartError.start" },
              }),
                tJ.v.error("[AvatarOverlay] unable to start dictation", { safe: {}, sensitive: { error: e } }))
            }),
            (m = (e) => {
              ;(J.get(X.Id).danger((0, ny.A)(ee, "transcription", e).message, {
                errorAnalytics: { toastId: "avatarOverlayNativeFrame.onTranscribeError.transcription" },
              }),
                tJ.v.error("[AvatarOverlay] dictation failed", { safe: {}, sensitive: { error: e } }))
            }),
            (f = () => {
              J.get(X.Id).danger(
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
          canRetryDictation: eI,
          isDictationStarting: eM,
          isDictating: eS,
          isTranscribing: eE,
          retryDictation: eR,
          startDictation: e_,
          stopDictation: eT,
        } = (0, ng.bS)(h),
        ek = !1 !== ex && (0 === em.length || eM || eS || eE || eI)
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
          ? ((I = async (e) => {
              ;(e.preventDefault(), e.stopPropagation(), eS || eE || (await eC(em)))
            }),
            (j[49] = eS),
            (j[50] = eE),
            (j[51] = eC),
            (j[52] = em),
            (j[53] = I))
          : (I = j[53]))
      let eO = I
      return (
        j[54] !== V
          ? ((M = () => {
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
            (j[55] = M),
            (j[56] = S),
            (j[57] = E))
          : ((M = j[55]), (S = j[56]), (E = j[57])),
        j[58] !== eO
          ? ((R = (e) => {
              eO(e)
            }),
            (j[58] = eO),
            (j[59] = R))
          : (R = j[59]),
        j[60] !== ee ? ((_ = ee.formatMessage(nw.quickChat)), (j[60] = ee), (j[61] = _)) : (_ = j[61]),
        j[62] === Symbol.for("react.memo_cache_sentinel")
          ? ((T = (0, ev.A)(
              "min-w-0 flex-1 bg-transparent text-[14px] leading-[18px] font-medium outline-none",
              "text-default placeholder:text-secondary",
            )),
            (j[62] = T))
          : (T = j[62]),
        j[63] !== D || j[64] !== ee
          ? ((k = D ? ee.formatMessage(nw.startNewTaskPlaceholder) : ee.formatMessage(nw.askPlaceholder)),
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
        j[74] !== eI ||
        j[75] !== ex ||
        j[76] !== ee ||
        j[77] !== eS ||
        j[78] !== ek ||
        j[79] !== eM ||
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
                ? (0, i.jsx)(nf.Y, {
                    className:
                      "size-7 shrink-0 !bg-[#636363] !text-white enabled:hover:!bg-[#636363] disabled:opacity-100 electron:!rounded-full",
                    color: "secondary",
                    idleIcon: (0, i.jsx)(Y.ERJ, {}),
                    isStarting: eM,
                    isDictating: eS,
                    isVisible: !0,
                    isTranscribing: eE,
                    canRetryDictation: eI,
                    disabled: !0 !== ex || ei || eE,
                    retryDictation: eR,
                    size: "icon",
                    startDictation: e_,
                    stopDictation: eT,
                  })
                : (0, i.jsx)(eo.$, {
                    "aria-label": ee.formatMessage(nw.sendQuickChat),
                    className:
                      "size-7 shrink-0 !bg-[#636363] !text-white enabled:hover:!bg-[#636363] disabled:opacity-100 electron:!rounded-full",
                    color: "secondary",
                    disabled: 0 === em.length || ei,
                    loading: ei,
                    size: "icon",
                    type: "submit",
                    children: ei ? null : (0, i.jsx)(nv.A, { className: "icon-sm" }),
                  }),
            })),
            (j[74] = eI),
            (j[75] = ex),
            (j[76] = ee),
            (j[77] = eS),
            (j[78] = ek),
            (j[79] = eM),
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
        j[93] !== M ||
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
              onFocusCapture: M,
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
            (j[93] = M),
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
    var nC = a("acLe"),
      nx = a("rB1t")
    let nA = (0, w.YK)({
      notificationList: {
        id: "avatarOverlay.notificationList",
        defaultMessage: "Activity notifications",
        description: "Accessible label for the list of floating avatar activity notifications",
      },
    })
    function nI(e) {
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
        I,
        M,
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
        X,
        W,
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
        en = (0, n.c)(263),
        {
          activityCopies: eo,
          activityStackPresentation: er,
          enteringNotificationIds: el,
          retainedForegroundNotificationIds: es,
          coveredForegroundNotificationIds: ec,
          isExpanded: eu,
          isVisiblyExpanded: ed,
          isTrayAboveMascot: ep,
          notifications: em,
          presentedGeometry: ef,
          renderNotificationRow: eg,
          stackTransition: eb,
          onActivityStackScroll: eC,
          onAnimationFrame: ex,
        } = e
      en[0] !== el ? ((t = void 0 === el ? [] : el), (en[0] = el), (en[1] = t)) : (t = en[1])
      let eA = t
      en[2] !== es ? ((a = void 0 === es ? [] : es), (en[2] = es), (en[3] = a)) : (a = en[3])
      let eI = a
      en[4] !== ec ? ((o = void 0 === ec ? [] : ec), (en[4] = ec), (en[5] = o)) : (o = en[5])
      let eM = o,
        eS = (0, y.A)()
      en[6] === Symbol.for("react.memo_cache_sentinel") ? ((r = new Map()), (en[6] = r)) : (r = en[6])
      let eE = (0, g.useRef)(r),
        [eR, e_] = (0, g.useState)(nO)
      ;(eR.size !== er.items.length ||
        er.items.some((e) => {
          let { itemId: t } = e
          return !eR.has(t)
        })) &&
        e_(
          new Map(
            er.items.map((e) => {
              let { itemId: t, itemHeight: a, presentationRect: i } = e
              return [
                t,
                eR.get(t) ?? { height: (0, nC.OQ)(a), top: (0, nC.OQ)(0), scaleY: (0, nC.OQ)(eu ? 1 : i.height / a) },
              ]
            }),
          ),
        )
      let eT = (0, ey.d)(+!!eu),
        ek = (0, ey.d)(er.contentHeight),
        eO = (0, ey.d)(er.viewportRect.height),
        eP = (0, ey.d)("hidden"),
        eN = (0, ey.d)("var(--activity-stack-edge-mask)")
      en[7] === Symbol.for("react.memo_cache_sentinel") ? ((l = new Set()), (en[7] = l)) : (l = en[7])
      let eL = (0, g.useRef)(l),
        eF = eu ? Math.max(0, er.viewportRect.top - (er.items[0]?.presentationRect.top ?? er.viewportRect.top)) : 0
      en[8] !== eu || en[9] !== eF
        ? ((s = { isExpanded: eu, scrollOffset: eF, translation: eF }), (en[8] = eu), (en[9] = eF), (en[10] = s))
        : (s = en[10])
      let [eq, ej] = (0, g.useState)(s)
      ;((eu !== eq.isExpanded || eF !== eq.scrollOffset) &&
        ej({
          isExpanded: eu,
          scrollOffset: eF,
          translation: eq.translation + (eu && eq.isExpanded ? eF - eq.scrollOffset : 0),
        }),
        en[11] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = new Map()), (u = new Map()), (en[11] = c), (en[12] = u))
          : ((c = en[11]), (u = en[12])),
        en[13] !== er.items
          ? ((p = { items: er.items, offsets: c, heightOrigins: u }), (en[13] = er.items), (en[14] = p))
          : (p = en[14]))
      let [eD, eU] = (0, g.useState)(p)
      if (
        !(
          er.items.length === eD.items.length &&
          er.items.every((e, t) => {
            let { itemId: a } = e
            return a === eD.items[t].itemId
          })
        ) ||
        er.items.some((e, t) => {
          let { itemHeight: a } = e
          return a !== eD.items[t]?.itemHeight
        })
      ) {
        let e = new Map(eD.items.map(nk)),
          t = new Map(),
          a = 0
        for (let { itemHeight: e, itemId: i } of eD.items)
          (t.set(i, (eD.offsets.get(i) ?? 0) + a), (a += (eR.get(i)?.height.get() ?? e) - e))
        a = 0
        let i = new Map(),
          n = new Map()
        for (let { itemHeight: o, itemId: r } of er.items)
          (i.set(r, (t.get(r) ?? 0) - a),
            (a += (eR.get(r)?.height.get() ?? o) - o),
            n.set(r, (eD.heightOrigins.get(r) ?? 0) + o - (e.get(r) ?? o)))
        eU({ items: er.items, offsets: i, heightOrigins: n })
      }
      let eH = em.length > 1 && eu && er.contentHeight > er.viewportRect.height,
        [eB, eV] = (0, g.useState)(eH)
      ;(eH && !eB && eV(!0),
        en[15] !== er.items || en[16] !== eH
          ? ((m = eH && er.items.some(nT)), (en[15] = er.items), (en[16] = eH), (en[17] = m))
          : (m = en[17]))
      let ez = m
      en[18] !== er.items || en[19] !== eH
        ? ((f = eH && er.items.some(n_)), (en[18] = er.items), (en[19] = eH), (en[20] = f))
        : (f = en[20])
      let eY = f,
        eX = (0, ey.d)(eq.translation - eF)
      en[21] !== eq.translation
        ? ((h = (e) => e - eq.translation), (en[21] = eq.translation), (en[22] = h))
        : (h = en[22])
      let eG = (0, ew.G)(eX, h),
        e$ = (0, ew.G)(eG, nR)
      en[23] !== eO || en[24] !== ek || en[25] !== eG
        ? ((v = () => Math.max(0, Math.min(1, 1 - (ek.get() + eG.get() - eO.get()) / 8))),
          (en[23] = eO),
          (en[24] = ek),
          (en[25] = eG),
          (en[26] = v))
        : (v = en[26])
      let eK = (0, ew.G)(v)
      en[27] !== er.items ||
      en[28] !== er.viewportRect.height ||
      en[29] !== eY ||
      en[30] !== ed ||
      en[31] !== ep ||
      en[32] !== em
        ? ((w =
            ed && ep && eY
              ? Math.max(
                  0,
                  Math.ceil(
                    em.slice(0, 4).reduce((e, t) => {
                      let a = er.items.find((e) => {
                        let { itemId: a } = e
                        return a === t.id
                      })
                      return Math.max(e, null == a ? 0 : a.presentationRect.top + a.presentationRect.height + d.Xlf)
                    }, 0) - er.viewportRect.height,
                  ),
                )
              : 0),
          (en[27] = er.items),
          (en[28] = er.viewportRect.height),
          (en[29] = eY),
          (en[30] = ed),
          (en[31] = ep),
          (en[32] = em),
          (en[33] = w))
        : (w = en[33])
      let eQ = w,
        eZ = ed && eY,
        eJ = ed && ez
      en[34] !== eQ || en[35] !== ed || en[36] !== eZ || en[37] !== eJ
        ? ((b = {
            collapseBottomClipHeadroom: eQ,
            hasBottomOverflow: eZ,
            hasTopOverflow: eJ,
            isExpanded: ed,
            retainsExpandedHeight: ed,
          }),
          (en[34] = eQ),
          (en[35] = ed),
          (en[36] = eZ),
          (en[37] = eJ),
          (en[38] = b))
        : (b = en[38])
      let [e0, e1] = (0, g.useState)(b)
      ;((ed !== e0.isExpanded ||
        (ed && (eY !== e0.hasBottomOverflow || eQ !== e0.collapseBottomClipHeadroom || ez !== e0.hasTopOverflow))) &&
        e1({
          collapseBottomClipHeadroom: ed ? eQ : e0.collapseBottomClipHeadroom,
          hasBottomOverflow: ed ? eY : e0.hasBottomOverflow,
          hasTopOverflow: ed ? ez : e0.hasTopOverflow,
          isExpanded: ed,
          retainsExpandedHeight: ed || e0.retainsExpandedHeight,
        }),
        en[39] !== em ? ((C = new Map(em.map(nE))), (en[39] = em), (en[40] = C)) : (C = en[40]))
      let e2 = C,
        e3 = er.items[0]?.presentationRect.height ?? 0
      en[41] !== er || en[42] !== eu || en[43] !== em.length
        ? ((x = aW({ activityStackPresentation: er, isExpanded: eu, notificationCount: em.length })),
          (en[41] = er),
          (en[42] = eu),
          (en[43] = em.length),
          (en[44] = x))
        : (x = en[44])
      let { backingLayoutHeight: e4, visibleLayoutHeight: e5 } = x,
        e6 = ep ? e5 - e4 : 0,
        e8 = (0, ey.d)(e4),
        e7 = !ep
      en[45] !== er.viewportRect || en[46] !== em.length || en[47] !== e3 || en[48] !== e7
        ? ((A = (0, d.vM5)({
            expandsTowardBottom: e7,
            frontRect: { ...er.viewportRect, height: e3 },
            nearEdgeRect: er.viewportRect,
            notificationCount: em.length,
          })),
          (en[45] = er.viewportRect),
          (en[46] = em.length),
          (en[47] = e3),
          (en[48] = e7),
          (en[49] = A))
        : (A = en[49])
      let e9 = A,
        te = !eu && e0.retainsExpandedHeight && (e0.hasTopOverflow || e0.hasBottomOverflow),
        tt = eH || eB,
        ta = te && ep ? e0.collapseBottomClipHeadroom : 0,
        ti = ep ? d.Xlf : 0,
        tn = tt ? d.VuE : 0,
        tr = Math.max(ti, tn),
        tl = Math.max(ta, tn)
      en[50] !== er.contentHeight ||
      en[51] !== er.items ||
      en[52] !== er.viewportRect.height ||
      en[53] !== er.viewportRect.top ||
      en[54] !== tl ||
      en[55] !== eH ||
      en[56] !== e9 ||
      en[57] !== eD ||
      en[58] !== eu ||
      en[59] !== e2 ||
      en[60] !== em.length ||
      en[61] !== eO ||
      en[62] !== ek ||
      en[63] !== eB ||
      en[64] !== eq.translation ||
      en[65] !== tr
        ? ((I = () => {
            if (!(
              !eB ||
              eH ||
              (eu && ek.get() > eO.get() + 0.001) ||
              [...eL.current].some((e) => {
                let t = e2.get(e)
                return null != t && (eu || t < 4)
              })
            )) {
              for (let { itemId: e, presentationRect: t } of er.items) {
                let a = e2.get(e),
                  i = eE.current.get(e)
                if (null == a || (!eu && a >= 4)) continue
                let n = eu ? t : (0, d.dw8)(e9, d.TeN[Math.min(a, d.TeN.length - 1)])
                if (
                  null == i ||
                  Math.abs(i.y - (n.top - er.viewportRect.top + eq.translation - (eu ? (eD.offsets.get(e) ?? 0) : 0))) >
                    0.001 ||
                  Math.abs(i.height - (n.height - (eu ? (eD.heightOrigins.get(e) ?? 0) : 0))) > 0.001
                )
                  return
              }
              ;(tJ.v.debug("Avatar overlay activity stack released overflow clip", {
                safe: {
                  isExpanded: eu,
                  notificationCount: em.length,
                  contentHeight: er.contentHeight,
                  topClipHeadroomPx: tr,
                  bottomClipHeadroomPx: tl,
                  maximumHeightReflowOffsetPx: Math.max(0, ...Array.from(eD.offsets.values(), Math.abs)),
                  viewportHeight: er.viewportRect.height,
                },
              }),
                eV(!1))
            }
          }),
          (en[50] = er.contentHeight),
          (en[51] = er.items),
          (en[52] = er.viewportRect.height),
          (en[53] = er.viewportRect.top),
          (en[54] = tl),
          (en[55] = eH),
          (en[56] = e9),
          (en[57] = eD),
          (en[58] = eu),
          (en[59] = e2),
          (en[60] = em.length),
          (en[61] = eO),
          (en[62] = ek),
          (en[63] = eB),
          (en[64] = eq.translation),
          (en[65] = tr),
          (en[66] = I))
        : (I = en[66])
      let ts = (0, eW.K)(I)
      en[67] !== er.items ||
      en[68] !== er.maxViewportHeight ||
      en[69] !== er.viewportRect ||
      en[70] !== e4 ||
      en[71] !== tl ||
      en[72] !== eH ||
      en[73] !== eA ||
      en[74] !== eT ||
      en[75] !== eD ||
      en[76] !== eu ||
      en[77] !== ep ||
      en[78] !== e2 ||
      en[79] !== em[0]?.id ||
      en[80] !== em.length ||
      en[81] !== eO ||
      en[82] !== ek ||
      en[83] !== eX ||
      en[84] !== ef ||
      en[85] !== eN ||
      en[86] !== eP ||
      en[87] !== e8 ||
      en[88] !== ts ||
      en[89] !== eB ||
      en[90] !== eR ||
      en[91] !== eF ||
      en[92] !== eq.translation ||
      en[93] !== tr ||
      en[94] !== e6 ||
      en[95] !== e5
        ? ((M = () => {
            let e = [],
              t = 0
            for (let { itemHeight: a, itemId: i, zIndex: n } of er.items) {
              let o = e2.get(i),
                r = eE.current.get(i),
                l = eT.get() * ((eD.offsets.get(i) ?? 0) + t),
                s = eR.get(i),
                c = s?.height.get() ?? a
              if (
                ((t += c - a),
                null != r &&
                  ((r.reflowOffsetY = l),
                  (r.scaleY = (r.height + eT.get() * ((eD.heightOrigins.get(i) ?? 0) + c - a)) / c),
                  s?.top.set(l),
                  s?.scaleY.set(r.scaleY)),
                null == o || null == r || eA.includes(i) || r.opacity <= 0.01 || (!eu && o >= 4))
              )
                continue
              let u = r.materialWidth ?? er.viewportRect.width,
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
                  top: r.y + r.reflowOffsetY - eq.translation,
                  width: u * r.scaleX,
                  height: c * r.scaleY,
                },
                scaleX: r.scaleX,
                scaleY: r.scaleY,
                zIndex: n,
              })
            }
            let a = eE.current.get(em[0]?.id ?? "")
            null != a && eX.set(a.y + a.reflowOffsetY)
            let i = (0, d.jNq)({
                expanded: eu,
                items: er.items.map((e) => {
                  let { itemId: t, itemHeight: a } = e
                  return { id: t, height: eR.get(t)?.height.get() ?? a }
                }),
                scrollOffset: eF,
                viewportRect: { ...er.viewportRect, height: er.maxViewportHeight },
              }),
              n = aW({ activityStackPresentation: i, isExpanded: eu, notificationCount: em.length })
            ;(ek.set(i.contentHeight), eO.set(n.backingLayoutHeight))
            let o = (eu && i.contentHeight > n.backingLayoutHeight + 0.001) || (eB && (!eu || !eH))
            ;(eP.set(o ? "hidden" : "visible"),
              eN.set(o ? "var(--activity-stack-edge-mask)" : "none"),
              e8.set(n.backingLayoutHeight + tr + tl))
            let r = 0
            for (let { rect: t } of e) {
              let e = Math.max(0, t.top),
                a = Math.min(e4, t.top + t.height)
              a <= e || (r = Math.max(r, ep ? -e6 - e : e6 + a - e5))
            }
            ;(ef.set({ ...n, overhang: r, rects: e }), to.Gt.postRender(ts))
          }),
          (en[67] = er.items),
          (en[68] = er.maxViewportHeight),
          (en[69] = er.viewportRect),
          (en[70] = e4),
          (en[71] = tl),
          (en[72] = eH),
          (en[73] = eA),
          (en[74] = eT),
          (en[75] = eD),
          (en[76] = eu),
          (en[77] = ep),
          (en[78] = e2),
          (en[79] = em[0]?.id),
          (en[80] = em.length),
          (en[81] = eO),
          (en[82] = ek),
          (en[83] = eX),
          (en[84] = ef),
          (en[85] = eN),
          (en[86] = eP),
          (en[87] = e8),
          (en[88] = ts),
          (en[89] = eB),
          (en[90] = eR),
          (en[91] = eF),
          (en[92] = eq.translation),
          (en[93] = tr),
          (en[94] = e6),
          (en[95] = e5),
          (en[96] = M))
        : (M = en[96])
      let tc = (0, eW.K)(M)
      if (
        en[97] !== eo ||
        en[98] !== er.items ||
        en[99] !== er.viewportRect.height ||
        en[100] !== er.viewportRect.left ||
        en[101] !== er.viewportRect.top ||
        en[102] !== er.viewportRect.width ||
        en[103] !== e4 ||
        en[104] !== tl ||
        en[105] !== eK ||
        en[106] !== e9 ||
        en[107] !== eM ||
        en[108] !== e0.retainsExpandedHeight ||
        en[109] !== ti ||
        en[110] !== eA ||
        en[111] !== eT ||
        en[112] !== eY ||
        en[113] !== ez ||
        en[114] !== eD ||
        en[115] !== eS ||
        en[116] !== eu ||
        en[117] !== ed ||
        en[118] !== e2 ||
        en[119] !== em ||
        en[120] !== eC ||
        en[121] !== ex ||
        en[122] !== eO ||
        en[123] !== eX ||
        en[124] !== eN ||
        en[125] !== eP ||
        en[126] !== e8 ||
        en[127] !== tc ||
        en[128] !== ts ||
        en[129] !== eg ||
        en[130] !== eI ||
        en[131] !== te ||
        en[132] !== eR ||
        en[133] !== eq.translation ||
        en[134] !== tt ||
        en[135] !== eb ||
        en[136] !== tr ||
        en[137] !== e$ ||
        en[138] !== e6 ||
        en[139] !== e5
      ) {
        let e,
          t,
          a,
          n,
          o = (e, t, a) => ({
            ...a,
            onUpdate: (a) => {
              let i = eE.current.get(e)
              null != i && ((i[t] = a), (to.uv.isProcessing ? to.Gt : nx.k).preRender(tc, !1, !0))
            },
          })
        en[168] !== er.items ||
        en[169] !== er.viewportRect.left ||
        en[170] !== er.viewportRect.top ||
        en[171] !== er.viewportRect.width ||
        en[172] !== e9 ||
        en[173] !== eD ||
        en[174] !== eu ||
        en[175] !== ed ||
        en[176] !== e2 ||
        en[177] !== em[0] ||
        en[178] !== eX ||
        en[179] !== tc ||
        en[180] !== ts ||
        en[181] !== eR ||
        en[182] !== eq.translation
          ? ((e = (e) => {
              if (null == e) return
              let t = new Set(er.items.map(nS))
              for (let e of eE.current.keys()) t.has(e) || (eE.current.delete(e), eL.current.delete(e))
              for (let { itemHeight: e, itemId: t, presentationRect: a } of er.items) {
                let i = e2.get(t)
                if (null == i) continue
                let n = e > 0 ? e : d.YMX,
                  o = eu ? (eD.offsets.get(t) ?? 0) : 0
                if (null != eE.current.get(t)) continue
                let r = eu ? a : (0, d.dw8)(e9, d.TeN[Math.min(i, d.TeN.length - 1)])
                eE.current.set(t, {
                  height: r.height - (eu ? (eD.heightOrigins.get(t) ?? 0) : 0),
                  opacity: 3 !== i || ed ? 1 : 0,
                  reflowOffsetY: o,
                  scaleX: eu ? 1 : r.width / er.viewportRect.width,
                  scaleY: eu ? 1 : r.height / n,
                  x: r.left - er.viewportRect.left,
                  y: r.top - er.viewportRect.top + eq.translation - o,
                })
              }
              let a = null == em[0] ? void 0 : eE.current.get(em[0].id)
              for (let t of (null != a && eX.set(a.y + a.reflowOffsetY),
              e.querySelectorAll('[data-avatar-overlay-material-variant="activity"]'))) {
                let e = t.dataset.avatarOverlayNativeSurfaceId,
                  a = null == e ? void 0 : eE.current.get(e.slice(9))
                if (null == a) continue
                let i = getComputedStyle(t),
                  n = Number.parseFloat(i.width),
                  o = Number.parseFloat(getComputedStyle(t.parentElement ?? t).opacity)
                ;((a.materialElement = t),
                  (a.materialCornerRadius = Number.parseFloat(i.borderTopLeftRadius) || 0),
                  n > 0 && (a.materialWidth = n),
                  Number.isFinite(o) && (a.materialOpacity = o))
              }
              tc()
              let i = Array.from(eR.values(), (e) => {
                  let { height: t } = e
                  return t.on("change", () => to.Gt.preRender(tc, !1, !0))
                }),
                n = new MutationObserver((e) => {
                  for (let { target: t } of e)
                    if (t instanceof HTMLElement) {
                      for (let e of eE.current.values())
                        if (e.materialElement === t) {
                          e.materialCornerRadius = Number.parseFloat(getComputedStyle(t).borderTopLeftRadius) || 0
                          break
                        }
                    }
                  to.Gt.preRender(tc, !1, !0)
                })
              return (
                n.observe(e, { attributes: !0, attributeFilter: ["data-owl-native-source-underlay"], subtree: !0 }),
                () => {
                  for (let e of i) e()
                  ;(n.disconnect(), (0, to.WG)(tc), (0, nx.c)(tc), (0, to.WG)(ts))
                }
              )
            }),
            (en[168] = er.items),
            (en[169] = er.viewportRect.left),
            (en[170] = er.viewportRect.top),
            (en[171] = er.viewportRect.width),
            (en[172] = e9),
            (en[173] = eD),
            (en[174] = eu),
            (en[175] = ed),
            (en[176] = e2),
            (en[177] = em[0]),
            (en[178] = eX),
            (en[179] = tc),
            (en[180] = ts),
            (en[181] = eR),
            (en[182] = eq.translation),
            (en[183] = e))
          : (e = en[183])
        let r = e
        if (tl > 0) {
          let e,
            a = `${tl}px`,
            i = -tl
          ;(en[184] !== a || en[185] !== i
            ? ((e = { "--activity-stack-bottom-clip-headroom": a, bottom: i }),
              (en[184] = a),
              (en[185] = i),
              (en[186] = e))
            : (e = en[186]),
            (t = e))
        } else if (!tt) {
          let e
          ;(en[187] !== e4 ? ((e = { height: e4 }), (en[187] = e4), (en[188] = e)) : (e = en[188]), (t = e))
        }
        let l = `${tr - ti}px`,
          s = e6 - tr
        ;(en[189] !== t ||
        en[190] !== eK ||
        en[191] !== eT ||
        en[192] !== eN ||
        en[193] !== eP ||
        en[194] !== e8 ||
        en[195] !== l ||
        en[196] !== s ||
        en[197] !== e$
          ? ((a = {
              ...t,
              "--activity-stack-top-clip-headroom": l,
              "--activity-stack-top-edge-alpha": e$,
              "--activity-stack-bottom-edge-alpha": eK,
              "--activity-stack-expansion-progress": eT,
              "--activity-stack-presented-overflow": eP,
              "--activity-stack-presented-mask": eN,
              height: e8,
              top: s,
            }),
            (en[189] = t),
            (en[190] = eK),
            (en[191] = eT),
            (en[192] = eN),
            (en[193] = eP),
            (en[194] = e8),
            (en[195] = l),
            (en[196] = s),
            (en[197] = e$),
            (en[198] = a))
          : (a = en[198]),
          (t = a),
          (X = r),
          en[199] !== eo?.[0]?.notificationListAriaLabel || en[200] !== eS
            ? ((W = eo?.[0]?.notificationListAriaLabel ?? eS.formatMessage(nA.notificationList)),
              (en[199] = eo?.[0]?.notificationListAriaLabel),
              (en[200] = eS),
              (en[201] = W))
            : (W = en[201]),
          (G = "relative max-w-full shrink-0"),
          ($ = e0.retainsExpandedHeight ? "true" : void 0),
          (K = "notification-stack-visible-layout"),
          (Q = "list"),
          en[202] !== er.viewportRect.width || en[203] !== e5
            ? ((Z = { height: e5, width: er.viewportRect.width }),
              (en[202] = er.viewportRect.width),
              (en[203] = e5),
              (en[204] = Z))
            : (Z = en[204]),
          en[205] !== er.viewportRect.height || en[206] !== eC
            ? ((J =
                null != eC
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
                      ;(1 === e.deltaMode ? (a *= 16) : 2 === e.deltaMode && (a *= er.viewportRect.height), eC(a))
                    }
                  : void 0),
              (en[205] = er.viewportRect.height),
              (en[206] = eC),
              (en[207] = J))
            : (J = en[207]),
          (E = eh.P.div))
        let c = +!!eu,
          u = +!eu
        ;(en[208] !== c || en[209] !== u
          ? ((F = { "--activity-stack-expansion-progress": c, "--activity-stack-edge-mask-alpha": u }),
            (en[208] = c),
            (en[209] = u),
            (en[210] = F))
          : (F = en[210]),
          (q = "ActivityStackViewport-g4FOvE"),
          (j = eY || void 0),
          (D = tt || void 0),
          (U = ez || void 0),
          (H = !1),
          (B = t),
          en[211] !== te
            ? ((n = te ? { duration: 0.18, ease: "easeOut" } : { duration: 0 }), (en[211] = te), (en[212] = n))
            : (n = en[212]),
          en[213] !== eb || en[214] !== n
            ? ((V = { "--activity-stack-edge-mask-alpha": n, "--activity-stack-expansion-progress": eb }),
              (en[213] = eb),
              (en[214] = n),
              (en[215] = V))
            : (V = en[215]),
          en[216] !== eu
            ? ((z = () => {
                eu || e1(nM)
              }),
              (en[216] = eu),
              (en[217] = z))
            : (z = en[217]),
          en[218] !== ex || en[219] !== tc
            ? ((Y = () => {
                ;(to.Gt.preRender(tc, !1, !0), ex?.())
              }),
              (en[218] = ex),
              (en[219] = tc),
              (en[220] = Y))
            : (Y = en[220]),
          (S = eh.P.div))
        let p = tt ? "inset-x-6" : "inset-x-0"
        ;(en[221] !== p ? ((k = (0, ev.A)("absolute", p, "top-0")), (en[221] = p), (en[222] = k)) : (k = en[222]),
          (O = "true"),
          (P = eu ? "notification-stack-viewport" : void 0),
          (N = "notification-stack-backing-layout"),
          en[223] !== eO || en[224] !== tr
            ? ((L = { height: eO, top: tr }), (en[223] = eO), (en[224] = tr), (en[225] = L))
            : (L = en[225]),
          (R = "relative"))
        let m = `translateY(${-eq.translation}px)`
        ;(en[226] !== m ? ((_ = { transform: m }), (en[226] = m), (en[227] = _)) : (_ = en[227]),
          (T = er.items.map((e) => {
            let { itemHeight: t, itemId: a, presentationRect: n, zIndex: r } = e,
              l = e2.get(a),
              s = eR.get(a)
            if (null == l || null == s) return null
            let c = em[l],
              u = eA.includes(a),
              p = l < 4,
              m = 3 === l,
              f = (0, d.dw8)(e9, d.TeN[Math.min(l, d.TeN.length - 1)]),
              h = c === em[0],
              g = !eu && !h,
              v = eu ? n : f,
              y = m && !ed ? { duration: 0.18, ease: "easeOut" } : { duration: 0 }
            return (0, i.jsx)(
              eh.P.div,
              {
                animate: {
                  opacity: m && !ed ? 0 : 1,
                  "--activity-stack-structural-height": v.height - (eu ? (eD.heightOrigins.get(a) ?? 0) : 0),
                  scaleX: eu ? 1 : v.width / er.viewportRect.width,
                  x: v.left - er.viewportRect.left,
                  y: v.top - er.viewportRect.top + eq.translation - (eu ? (eD.offsets.get(a) ?? 0) : 0),
                },
                "aria-hidden": g ? "true" : void 0,
                className: (0, ev.A)(
                  "absolute origin-top-left",
                  (g || u) && "pointer-events-none",
                  !eu && !e0.retainsExpandedHeight && l >= 3 && "opacity-0",
                  !eu && l >= 4 && "hidden",
                ),
                "data-avatar-overlay-measure": p ? "notification-tray-row" : void 0,
                "data-avatar-overlay-activity-stack-item": a,
                "data-avatar-overlay-hit-region": eu ? "notification-tray-row" : void 0,
                inert: g || void 0,
                initial: !1,
                style: { left: 0, top: s.top, scaleY: s.scaleY, width: er.viewportRect.width, zIndex: r },
                transition: {
                  ...eb,
                  opacity: o(a, "opacity", y),
                  scaleX: o(a, "scaleX", eb),
                  "--activity-stack-structural-height": o(a, "height", eb),
                  x: o(a, "x", eb),
                  y: o(a, "y", eb),
                },
                onAnimationStart: () => {
                  eL.current.add(a)
                },
                onAnimationComplete: () => {
                  ;(eL.current.delete(a), ts())
                },
                onUpdate: () => ex?.(),
                children: (0, i.jsx)("div", {
                  className: u ? "opacity-0" : void 0,
                  children: (0, i.jsx)(nP, {
                    renderNotificationRow: eg,
                    presentation: {
                      animatesCssEntry: p && !u,
                      canExpandActivityStack: !eu && h && em.length > 1,
                      copy: eo?.[l],
                      cssHeight: t,
                      presentedHeight: s.height,
                      cssWidth: p ? er.viewportRect.width : void 0,
                      isPrimarySurface: h,
                      isStackedBehindPrimary: g,
                      retainsForeground: eI.includes(a),
                      isForegroundCoveredByFlight: eM.includes(a),
                      nativeSurfaceId: "activity-" + a,
                      notification: c,
                      onMaterialUpdate: (e) => {
                        let t
                        null != (t = eE.current.get(a)) &&
                          ("number" == typeof e.width && (t.materialWidth = e.width),
                          "number" == typeof e.opacity && (t.materialOpacity = e.opacity),
                          "number" == typeof e.borderRadius && (t.materialCornerRadius = e.borderRadius),
                          to.Gt.preRender(tc, !1, !0))
                      },
                      publishesLayoutMeasurement: !p,
                    },
                  }),
                }),
              },
              a,
            )
          })),
          (en[97] = eo),
          (en[98] = er.items),
          (en[99] = er.viewportRect.height),
          (en[100] = er.viewportRect.left),
          (en[101] = er.viewportRect.top),
          (en[102] = er.viewportRect.width),
          (en[103] = e4),
          (en[104] = tl),
          (en[105] = eK),
          (en[106] = e9),
          (en[107] = eM),
          (en[108] = e0.retainsExpandedHeight),
          (en[109] = ti),
          (en[110] = eA),
          (en[111] = eT),
          (en[112] = eY),
          (en[113] = ez),
          (en[114] = eD),
          (en[115] = eS),
          (en[116] = eu),
          (en[117] = ed),
          (en[118] = e2),
          (en[119] = em),
          (en[120] = eC),
          (en[121] = ex),
          (en[122] = eO),
          (en[123] = eX),
          (en[124] = eN),
          (en[125] = eP),
          (en[126] = e8),
          (en[127] = tc),
          (en[128] = ts),
          (en[129] = eg),
          (en[130] = eI),
          (en[131] = te),
          (en[132] = eR),
          (en[133] = eq.translation),
          (en[134] = tt),
          (en[135] = eb),
          (en[136] = tr),
          (en[137] = e$),
          (en[138] = e6),
          (en[139] = e5),
          (en[140] = S),
          (en[141] = E),
          (en[142] = R),
          (en[143] = _),
          (en[144] = T),
          (en[145] = k),
          (en[146] = O),
          (en[147] = P),
          (en[148] = N),
          (en[149] = L),
          (en[150] = F),
          (en[151] = q),
          (en[152] = j),
          (en[153] = D),
          (en[154] = U),
          (en[155] = H),
          (en[156] = B),
          (en[157] = V),
          (en[158] = z),
          (en[159] = Y),
          (en[160] = X),
          (en[161] = W),
          (en[162] = G),
          (en[163] = $),
          (en[164] = K),
          (en[165] = Q),
          (en[166] = Z),
          (en[167] = J))
      } else
        ((S = en[140]),
          (E = en[141]),
          (R = en[142]),
          (_ = en[143]),
          (T = en[144]),
          (k = en[145]),
          (O = en[146]),
          (P = en[147]),
          (N = en[148]),
          (L = en[149]),
          (F = en[150]),
          (q = en[151]),
          (j = en[152]),
          (D = en[153]),
          (U = en[154]),
          (H = en[155]),
          (B = en[156]),
          (V = en[157]),
          (z = en[158]),
          (Y = en[159]),
          (X = en[160]),
          (W = en[161]),
          (G = en[162]),
          ($ = en[163]),
          (K = en[164]),
          (Q = en[165]),
          (Z = en[166]),
          (J = en[167]))
      return (
        en[228] !== R || en[229] !== _ || en[230] !== T
          ? ((ee = (0, i.jsx)("div", { className: R, style: _, children: T })),
            (en[228] = R),
            (en[229] = _),
            (en[230] = T),
            (en[231] = ee))
          : (ee = en[231]),
        en[232] !== S ||
        en[233] !== k ||
        en[234] !== O ||
        en[235] !== P ||
        en[236] !== N ||
        en[237] !== L ||
        en[238] !== ee
          ? ((et = (0, i.jsx)(S, {
              className: k,
              "data-avatar-overlay-backing-canvas": O,
              "data-avatar-overlay-hit-region": P,
              "data-avatar-overlay-size": N,
              style: L,
              children: ee,
            })),
            (en[232] = S),
            (en[233] = k),
            (en[234] = O),
            (en[235] = P),
            (en[236] = N),
            (en[237] = L),
            (en[238] = ee),
            (en[239] = et))
          : (et = en[239]),
        en[240] !== E ||
        en[241] !== F ||
        en[242] !== q ||
        en[243] !== j ||
        en[244] !== D ||
        en[245] !== U ||
        en[246] !== H ||
        en[247] !== B ||
        en[248] !== V ||
        en[249] !== z ||
        en[250] !== Y ||
        en[251] !== et
          ? ((ea = (0, i.jsx)(E, {
              animate: F,
              className: q,
              "data-avatar-overlay-stack-bottom-overflow": j,
              "data-avatar-overlay-stack-overflow-mask": D,
              "data-avatar-overlay-stack-top-overflow": U,
              initial: H,
              style: B,
              transition: V,
              onAnimationComplete: z,
              onUpdate: Y,
              children: et,
            })),
            (en[240] = E),
            (en[241] = F),
            (en[242] = q),
            (en[243] = j),
            (en[244] = D),
            (en[245] = U),
            (en[246] = H),
            (en[247] = B),
            (en[248] = V),
            (en[249] = z),
            (en[250] = Y),
            (en[251] = et),
            (en[252] = ea))
          : (ea = en[252]),
        en[253] !== X ||
        en[254] !== W ||
        en[255] !== G ||
        en[256] !== $ ||
        en[257] !== K ||
        en[258] !== Q ||
        en[259] !== Z ||
        en[260] !== J ||
        en[261] !== ea
          ? ((ei = (0, i.jsx)("div", {
              ref: X,
              "aria-label": W,
              className: G,
              "data-avatar-overlay-retains-stack-layout-height": $,
              "data-avatar-overlay-size": K,
              role: Q,
              style: Z,
              onWheel: J,
              children: ea,
            })),
            (en[253] = X),
            (en[254] = W),
            (en[255] = G),
            (en[256] = $),
            (en[257] = K),
            (en[258] = Q),
            (en[259] = Z),
            (en[260] = J),
            (en[261] = ea),
            (en[262] = ei))
          : (ei = en[262]),
        ei
      )
    }
    function nM(e) {
      return e.retainsExpandedHeight ? { ...e, retainsExpandedHeight: !1 } : e
    }
    function nS(e) {
      let { itemId: t } = e
      return t
    }
    function nE(e, t) {
      return [e.id, t]
    }
    function nR(e) {
      return Math.max(0, Math.min(1, 1 + e / 8))
    }
    function n_(e) {
      let { edgeZone: t } = e
      return "bottom" === t
    }
    function nT(e) {
      let { edgeZone: t } = e
      return "top" === t
    }
    function nk(e) {
      let { itemId: t, itemHeight: a } = e
      return [t, a]
    }
    function nO() {
      return new Map()
    }
    function nP({ presentation: e, renderNotificationRow: t }) {
      return t(e)
    }
    var nN = a("hNFe")
    let nL = (0, w.YK)({
      notificationList: {
        id: "avatarOverlay.notificationList",
        defaultMessage: "Activity notifications",
        description: "Accessible label for the list of floating avatar activity notifications",
      },
    })
    function nF(e) {
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
          isTrayAboveMascot: I,
          notifications: M,
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
      if (0 === M.length) return null
      c[0] !== u ? ((t = u ? nl.K : { duration: 0 }), (c[0] = u), (c[1] = t)) : (t = c[1])
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
                return (0, i.jsx)(nd, {
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
          c[24] !== I ||
          c[25] !== A ||
          c[26] !== M ||
          c[27] !== R ||
          c[28] !== k ||
          c[29] !== E ||
          c[30] !== g ||
          c[31] !== D ||
          c[32] !== e
            ? ((t = (0, i.jsx)(nI, {
                activityCopies: m,
                activityStackPresentation: f,
                enteringNotificationIds: h,
                retainedForegroundNotificationIds: g,
                coveredForegroundNotificationIds: v,
                isExpanded: x,
                isVisiblyExpanded: A,
                isTrayAboveMascot: I,
                notifications: M,
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
              (c[24] = I),
              (c[25] = A),
              (c[26] = M),
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
        ? ((a = m?.[0]?.notificationListAriaLabel ?? j.formatMessage(nL.notificationList)),
          (c[34] = m?.[0]?.notificationListAriaLabel),
          (c[35] = j),
          (c[36] = a))
        : (a = c[36])
      let U = x ? "flex flex-col gap-2" : "pb-2"
      if (
        (c[37] !== U
          ? ((o = (0, ev.A)("relative w-full max-w-full shrink-0", U)), (c[37] = U), (c[38] = o))
          : (o = c[38]),
        c[39] !== x || c[40] !== M.length
          ? ((r = !x && M.length > 1 ? (0, i.jsx)(en.D0, { notificationCount: M.length }) : null),
            (c[39] = x),
            (c[40] = M.length),
            (c[41] = r))
          : (r = c[41]),
        c[42] !== m ||
          c[43] !== d ||
          c[44] !== b ||
          c[45] !== x ||
          c[46] !== C ||
          c[47] !== S ||
          c[48] !== M ||
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
        c[67] !== M.length ||
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
              let a = nN.W[t],
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
                    children: (0, i.jsx)(nd, {
                      activitySwipeInput: d,
                      swipeVisibleRight: p,
                      canExpandActivityStack: !x && "primary" === n && M.length > 1,
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
            (c[67] = M.length),
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
          (l = M.slice(0, nN.W.length).map(e)),
          (c[42] = m),
          (c[43] = d),
          (c[44] = b),
          (c[45] = x),
          (c[46] = C),
          (c[47] = S),
          (c[48] = M),
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
    function nq(e) {
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
          areActivityPillsVisible: I,
          expandedNotificationIds: M,
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
          onQuickChatPointerEnter: X,
          onQuickChatPointerLeave: W,
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
      p[11] !== X ||
      p[12] !== W ||
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
                      ? (0, i.jsx)(nb, {
                          hasNotifications: k.length > 0,
                          quickChatDictation: P,
                          dictationAudio: N,
                          dictationHistory: L,
                          onActiveChange: z,
                          onAnimationFrame: V,
                          onDraftChange: Y,
                          onPointerEnter: X,
                          onPointerLeave: W,
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
          (p[11] = X),
          (p[12] = W),
          (p[13] = Q),
          (p[14] = P),
          (p[15] = J),
          (p[16] = ee),
          (p[17] = et),
          (p[18] = a))
        : (a = p[18])
      let ea = a
      p[19] !== Z ? ((o = { maxHeight: Z }), (p[19] = Z), (p[20] = o)) : (o = p[20])
      let ei = I && A ? 1 : 0
      p[21] !== ei ? ((r = { opacity: ei }), (p[21] = ei), (p[22] = r)) : (r = p[22])
      let en = !I || void 0,
        eo = !I || void 0
      return (
        p[23] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = { duration: 0.18, ease: "easeOut" }), (p[23] = l))
          : (l = p[23]),
        p[24] !== I || p[25] !== q
          ? ((s = () => {
              I || q?.()
            }),
            (p[24] = I),
            (p[25] = q),
            (p[26] = s))
          : (s = p[26]),
        p[27] !== g ||
        p[28] !== v ||
        p[29] !== f ||
        p[30] !== m ||
        p[31] !== C ||
        p[32] !== w ||
        p[33] !== M ||
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
          ? ((c = (0, i.jsx)(nF, {
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
              expandedNotificationIds: M,
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
            (p[33] = M),
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
    var nj = a("O3F3"),
      nD = a("fk6n")
    class nU {
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
    function nH(e) {
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
                ;(e || c(null != t), tJ.v.debug("Avatar overlay swipe input", { safe: { available: null != t } }))
              }).catch(nz)
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
                    t?.then(nV).catch(nB))
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
    function nB() {}
    async function nV(e) {
      null != e && (await Promise.resolve(e.unsubscribe()).finally(() => e[Symbol.dispose]()))
    }
    function nz() {}
    var nY = a("be9B")
    function nX(e) {
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
        I,
        M = (0, n.c)(48)
      M[0] !== e
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
          (M[0] = e),
          (M[1] = t),
          (M[2] = a),
          (M[3] = o),
          (M[4] = r),
          (M[5] = l),
          (M[6] = s),
          (M[7] = c),
          (M[8] = u),
          (M[9] = p),
          (M[10] = m),
          (M[11] = f),
          (M[12] = h))
        : ((t = M[1]),
          (a = M[2]),
          (o = M[3]),
          (r = M[4]),
          (l = M[5]),
          (s = M[6]),
          (c = M[7]),
          (u = M[8]),
          (p = M[9]),
          (m = M[10]),
          (f = M[11]),
          (h = M[12]))
      let S = !0 === p.isOrbitTranscript,
        E = p.orbitTranscriptPlacement,
        R = (0, ef.I)()
      M[13] !== t || M[14] !== r || M[15] !== E || M[16] !== c || M[17] !== f || M[18] !== h
        ? ((g = () =>
            r
              ? null != E
                ? (c?.get() ?? E).composerTop - t.get()
                : f.get() > 0
                  ? Math.max(0, h + d.Zkw + f.get() + 20 - t.get())
                  : 0
              : 0),
          (M[13] = t),
          (M[14] = r),
          (M[15] = E),
          (M[16] = c),
          (M[17] = f),
          (M[18] = h),
          (M[19] = g))
        : (g = M[19])
      let _ = (0, ew.G)(g)
      M[20] !== S ? ((v = (0, tr.P)(!0, S)), (M[20] = S), (M[21] = v)) : (v = M[21])
      let T = (0, iL.z)(_, v)
      M[22] !== T || M[23] !== a || M[24] !== S || M[25] !== R || M[26] !== _
        ? ((y = () => (S || R || !a ? _.get() : T.get())),
          (M[22] = T),
          (M[23] = a),
          (M[24] = S),
          (M[25] = R),
          (M[26] = _),
          (M[27] = y))
        : (y = M[27])
      let k = (0, ew.G)(y),
        O = null == E && r ? l : 0,
        P = null == E ? k : 0
      ;(M[28] !== O || M[29] !== P ? ((w = { x: O, y: P }), (M[28] = O), (M[29] = P), (M[30] = w)) : (w = M[30]),
        M[31] !== s || M[32] !== w || M[33] !== m
          ? ((b = (0, i.jsx)(eh.P.div, {
              className: "pointer-events-none absolute inset-0",
              style: w,
              onUpdate: s,
              children: m,
            })),
            (M[31] = s),
            (M[32] = w),
            (M[33] = m),
            (M[34] = b))
          : (b = M[34]))
      let N = r ? l : 0
      return (
        M[35] !== N || M[36] !== k ? ((C = { x: N, y: k }), (M[35] = N), (M[36] = k), (M[37] = C)) : (C = M[37]),
        M[38] !== o
          ? ((x = (0, i.jsx)("div", { className: "pointer-events-auto contents", children: o })),
            (M[38] = o),
            (M[39] = x))
          : (x = M[39]),
        M[40] !== s || M[41] !== x || M[42] !== C
          ? ((A = (0, i.jsx)(eh.P.div, {
              className: "pointer-events-none relative h-full w-full",
              "data-avatar-overlay-content-frame": "true",
              style: C,
              onUpdate: s,
              children: x,
            })),
            (M[40] = s),
            (M[41] = x),
            (M[42] = C),
            (M[43] = A))
          : (A = M[43]),
        M[44] !== u || M[45] !== A || M[46] !== b
          ? ((I = (0, i.jsxs)("section", { ref: u, className: "relative h-full w-full", children: [b, A] })),
            (M[44] = u),
            (M[45] = A),
            (M[46] = b),
            (M[47] = I))
          : (I = M[47]),
        I
      )
    }
    var nW = a("mkai"),
      nG = a("L0k3"),
      n$ = a("P2D5")
    function nK(e) {
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
                l.has(e) !== t && (t ? l.add(e) : l.delete(e), (0, n$.Dn)(e, t ? () => !1 : null))
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
                                a && ("function" != typeof i.animate || (0, nG.n)())
                                  ? { type: "spring", visualDuration: 0.32, bounce: 0.3, at: o }
                                  : { duration: a ? 0.3 : 0.16, ease: "easeOut", at: o },
                              ],
                            ])
                          ;((0, n$.Dn)(i, () => r.time > o),
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
    function nQ(e) {
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
        I,
        M,
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
        X,
        W = (0, n.c)(153),
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
      W[0] !== em || W[1] !== et
        ? ((t = { tray: et, expandsFromTop: em }), (W[0] = em), (W[1] = et), (W[2] = t))
        : (t = W[2])
      let [eI, eM] = (0, g.useState)(t)
      ex && (!l()(et, eI.tray) || em !== eI.expandsFromTop) && eM({ tray: et, expandsFromTop: em })
      let eS = ex ? et : eI.tray,
        eE = ex ? em : eI.expandsFromTop,
        [eR, e_] = (0, g.useState)(!ex)
      ex && eR && e_(!1)
      let eT = null != eS
      W[3] === Symbol.for("react.memo_cache_sentinel") ? ((a = (0, tr.P)(!0)), (W[3] = a)) : (a = W[3])
      let ek = (0, iL.z)(0, a),
        eO = (0, g.useRef)(null),
        eP = (0, g.useRef)(null),
        [eN, eL] = (0, g.useState)(0)
      ;(W[4] !== ex || W[5] !== ek || W[6] !== eT || W[7] !== ei || W[8] !== ey
        ? ((o = () =>
            ex && eT
              ? (0, ib.J)({
                  target: eO.current,
                  axis: "height",
                  onChange: (e) => {
                    let { height: t } = e
                    ;(ei.set(t), ey ? ek.jump(t) : ek.set(t))
                  },
                })
              : void 0),
          (r = [ex, ek, eT, ei, ey]),
          (W[4] = ex),
          (W[5] = ek),
          (W[6] = eT),
          (W[7] = ei),
          (W[8] = ey),
          (W[9] = o),
          (W[10] = r))
        : ((o = W[9]), (r = W[10])),
        (0, g.useLayoutEffect)(o, r),
        W[11] !== ex || W[12] !== eT
          ? ((s = () =>
              ex && eT
                ? (0, ib.J)({
                    target: eP.current,
                    axis: "height",
                    onChange: (e) => {
                      let { height: t } = e
                      return eL(t)
                    },
                  })
                : void 0),
            (c = [ex, eT]),
            (W[11] = ex),
            (W[12] = eT),
            (W[13] = s),
            (W[14] = c))
          : ((s = W[13]), (c = W[14])),
        (0, g.useLayoutEffect)(s, c),
        W[15] !== ex || W[16] !== $ || W[17] !== Q || W[18] !== en || W[19] !== eS?.height || W[20] !== eS?.top
          ? ((u = () =>
              null == Q ? $.get() - 20 - (eS?.height ?? 0) : ((ex ? en?.get()?.top : void 0) ?? eS?.top ?? 0)),
            (W[15] = ex),
            (W[16] = $),
            (W[17] = Q),
            (W[18] = en),
            (W[19] = eS?.height),
            (W[20] = eS?.top),
            (W[21] = u))
          : (u = W[21]))
      let eF = (0, ew.G)(u)
      W[22] !== ex || W[23] !== Q || W[24] !== en || W[25] !== eS?.height
        ? ((d = () => (ex && null != Q ? en?.get()?.height : void 0) ?? eS?.height),
          (W[22] = ex),
          (W[23] = Q),
          (W[24] = en),
          (W[25] = eS?.height),
          (W[26] = d))
        : (d = W[26])
      let eq = (0, ew.G)(d)
      W[27] !== Q || W[28] !== en
        ? ((p = () => {
            let e = en?.get()
            return null == Q || null == e ? "0px" : `${Math.max(0, e.top + e.height + 20 - e.composerTop)}px`
          }),
          (W[27] = Q),
          (W[28] = en),
          (W[29] = p))
        : (p = W[29])
      let ej = (0, ew.G)(p),
        eD = (0, ew.G)(ek, nZ)
      W[30] !== ey ? ((m = ey ? { duration: 0 } : (0, tr.P)(!0)), (W[30] = ey), (W[31] = m)) : (m = W[31])
      let eU = m
      if (
        W[32] !== ex ||
        W[33] !== eD ||
        W[34] !== K ||
        W[35] !== ej ||
        W[36] !== Z ||
        W[37] !== eE ||
        W[38] !== eT ||
        W[39] !== Q ||
        W[40] !== eN ||
        W[41] !== eq ||
        W[42] !== eR ||
        W[43] !== eA ||
        W[44] !== ee ||
        W[45] !== ep ||
        W[46] !== eo ||
        W[47] !== er ||
        W[48] !== el ||
        W[49] !== es ||
        W[50] !== ec ||
        W[51] !== eu ||
        W[52] !== ed ||
        W[53] !== eU ||
        W[54] !== ey ||
        W[55] !== eS?.height ||
        W[56] !== eS?.left ||
        W[57] !== eS?.width ||
        W[58] !== eb ||
        W[59] !== eF
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
        W[88] !== ej || W[89] !== eq || W[90] !== l || W[91] !== s || W[92] !== eF
          ? ((e = { left: l, top: 0, width: s, height: eq, y: eF, "--mini-transcript-bottom-inset": ej }),
            (W[88] = ej),
            (W[89] = eq),
            (W[90] = l),
            (W[91] = s),
            (W[92] = eF),
            (W[93] = e))
          : (e = W[93])
        let c = e
        ;((B = eR || !eT), (h = eh.P.div), (A = eC), (I = !ee || !eA || void 0))
        let u = !ee && "invisible"
        ;(W[94] !== u
          ? ((M = (0, ev.A)(
              "pointer-events-auto absolute flex cursor-interaction flex-col justify-end text-sm text-default",
              u,
            )),
            (W[94] = u),
            (W[95] = M))
          : (M = W[95]),
          (S = !ee || !eA),
          (E = null != Q || void 0),
          (R = ex && eT ? "notification-tray" : void 0),
          W[96] !== Q || W[97] !== ey
            ? ((_ = null == Q && !ey && { opacity: 0 }), (W[96] = Q), (W[97] = ey), (W[98] = _))
            : (_ = W[98]),
          W[99] === Symbol.for("react.memo_cache_sentinel") ? ((T = { opacity: 1 }), (W[99] = T)) : (T = W[99]))
        let d = ey || null == Q || eE ? 0 : 0.096
        ;(W[100] !== d
          ? ((k = { opacity: 0, transition: { duration: d, ease: "easeOut" } }), (W[100] = d), (W[101] = k))
          : (k = W[101]),
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
        ;(W[102] !== p ? ((b = (0, ev.A)("relative isolate", p)), (W[102] = p), (W[103] = b)) : (b = W[103]),
          (C = ex && eT && ee ? "notification-tray" : void 0))
        let m = !ey && (eE ? "AnimatedBackdropFromTop-OBGjyb" : "AnimatedBackdrop-WgsOUB")
        ;(W[104] !== m
          ? ((t = (0, ev.A)("pointer-events-none absolute -z-10", "Backdrop-c_MHKt", m)), (W[104] = m), (W[105] = t))
          : (t = W[105]),
          W[106] !== ey ? ((a = !ey && { opacity: 0 }), (W[106] = ey), (W[107] = a)) : (a = W[107]))
        let g = ex && ee ? 1 : 0
        W[108] !== g ? ((n = { opacity: g }), (W[108] = g), (W[109] = n)) : (n = W[109])
        let V = ey ? void 0 : eD
        ;(W[110] !== V ? ((o = { height: V }), (W[110] = V), (W[111] = o)) : (o = W[111]),
          W[112] !== eU || W[113] !== t || W[114] !== a || W[115] !== n || W[116] !== o
            ? ((x = (0, i.jsx)(eh.P.div, {
                className: t,
                "aria-hidden": !0,
                initial: a,
                animate: n,
                transition: eU,
                style: o,
              })),
              (W[112] = eU),
              (W[113] = t),
              (W[114] = a),
              (W[115] = n),
              (W[116] = o),
              (W[117] = x))
            : (x = W[117]),
          (f = nW.C),
          (v = eb),
          (y =
            null != Q && null != Z
              ? (0, i.jsx)(nK, { active: ex, composerProgress: Z, expandsFromTop: eE, children: r })
              : r()),
          (W[32] = ex),
          (W[33] = eD),
          (W[34] = K),
          (W[35] = ej),
          (W[36] = Z),
          (W[37] = eE),
          (W[38] = eT),
          (W[39] = Q),
          (W[40] = eN),
          (W[41] = eq),
          (W[42] = eR),
          (W[43] = eA),
          (W[44] = ee),
          (W[45] = ep),
          (W[46] = eo),
          (W[47] = er),
          (W[48] = el),
          (W[49] = es),
          (W[50] = ec),
          (W[51] = eu),
          (W[52] = ed),
          (W[53] = eU),
          (W[54] = ey),
          (W[55] = eS?.height),
          (W[56] = eS?.left),
          (W[57] = eS?.width),
          (W[58] = eb),
          (W[59] = eF),
          (W[60] = f),
          (W[61] = h),
          (W[62] = v),
          (W[63] = y),
          (W[64] = w),
          (W[65] = b),
          (W[66] = C),
          (W[67] = x),
          (W[68] = A),
          (W[69] = I),
          (W[70] = M),
          (W[71] = S),
          (W[72] = E),
          (W[73] = R),
          (W[74] = _),
          (W[75] = T),
          (W[76] = k),
          (W[77] = O),
          (W[78] = P),
          (W[79] = N),
          (W[80] = L),
          (W[81] = F),
          (W[82] = q),
          (W[83] = j),
          (W[84] = D),
          (W[85] = U),
          (W[86] = H),
          (W[87] = B))
      } else
        ((f = W[60]),
          (h = W[61]),
          (v = W[62]),
          (y = W[63]),
          (w = W[64]),
          (b = W[65]),
          (C = W[66]),
          (x = W[67]),
          (A = W[68]),
          (I = W[69]),
          (M = W[70]),
          (S = W[71]),
          (E = W[72]),
          (R = W[73]),
          (_ = W[74]),
          (T = W[75]),
          (k = W[76]),
          (O = W[77]),
          (P = W[78]),
          (N = W[79]),
          (L = W[80]),
          (F = W[81]),
          (q = W[82]),
          (j = W[83]),
          (D = W[84]),
          (U = W[85]),
          (H = W[86]),
          (B = W[87]))
      return (
        W[118] !== f || W[119] !== v || W[120] !== y
          ? ((V = (0, i.jsx)(f, { value: v, children: y })), (W[118] = f), (W[119] = v), (W[120] = y), (W[121] = V))
          : (V = W[121]),
        W[122] !== w || W[123] !== b || W[124] !== C || W[125] !== x || W[126] !== V
          ? ((z = (0, i.jsxs)("div", { ref: w, className: b, "data-avatar-overlay-hit-region": C, children: [x, V] })),
            (W[122] = w),
            (W[123] = b),
            (W[124] = C),
            (W[125] = x),
            (W[126] = V),
            (W[127] = z))
          : (z = W[127]),
        W[128] !== h ||
        W[129] !== A ||
        W[130] !== I ||
        W[131] !== M ||
        W[132] !== S ||
        W[133] !== E ||
        W[134] !== R ||
        W[135] !== _ ||
        W[136] !== T ||
        W[137] !== k ||
        W[138] !== O ||
        W[139] !== P ||
        W[140] !== N ||
        W[141] !== L ||
        W[142] !== F ||
        W[143] !== q ||
        W[144] !== j ||
        W[145] !== D ||
        W[146] !== U ||
        W[147] !== H ||
        W[148] !== z
          ? ((Y = (0, i.jsx)(h, {
              ref: A,
              "aria-hidden": I,
              className: M,
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
            (W[128] = h),
            (W[129] = A),
            (W[130] = I),
            (W[131] = M),
            (W[132] = S),
            (W[133] = E),
            (W[134] = R),
            (W[135] = _),
            (W[136] = T),
            (W[137] = k),
            (W[138] = O),
            (W[139] = P),
            (W[140] = N),
            (W[141] = L),
            (W[142] = F),
            (W[143] = q),
            (W[144] = j),
            (W[145] = D),
            (W[146] = U),
            (W[147] = H),
            (W[148] = z),
            (W[149] = Y))
          : (Y = W[149]),
        W[150] !== B || W[151] !== Y
          ? ((X = (0, i.jsx)("div", { hidden: B, children: Y })), (W[150] = B), (W[151] = Y), (W[152] = X))
          : (X = W[152]),
        X
      )
    }
    function nZ(e) {
      return e + 80
    }
    let nJ = { opacity: a0.iN, scale: { damping: 22, mass: 0.82, stiffness: 300, type: "spring" } },
      n0 = (0, w.YK)({
        mascotLabel: {
          id: "petOverlay.mascotLabel",
          defaultMessage: "{petName} pet",
          description: "Accessible label for the floating Codex pet",
        },
      })
    function n1(e) {
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
        I,
        M,
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
        X,
        W,
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
        eI,
        eM,
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
        eX,
        eW,
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
        e8,
        e7,
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
        tI,
        tM,
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
        tq,
        tj = (0, n.c)(508)
      tj[0] !== e
        ? (({
            activitySwipeHost: o,
            animatesQuickChatPresentation: eI,
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
            notificationStackControlsVisible: eX,
            notifications: C,
            notificationStackItemCount: ei,
            notificationFollowUp: w,
            orbitPreviewLayout: ex,
            arePresentationAccessoriesVisible: eM,
            quickChatDictation: el,
            dictationAudio: s,
            dictationHistory: c,
            onActivityStackScroll: I,
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
            onRunNotificationControl: W,
            onRunNotificationAction: X,
            onSubmitQuestionOption: $,
            onQuickChatFocusChange: U,
            onContextMenuOpenChange: M,
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
          (tj[0] = e),
          (tj[1] = t),
          (tj[2] = a),
          (tj[3] = o),
          (tj[4] = r),
          (tj[5] = l),
          (tj[6] = s),
          (tj[7] = c),
          (tj[8] = p),
          (tj[9] = m),
          (tj[10] = f),
          (tj[11] = h),
          (tj[12] = v),
          (tj[13] = w),
          (tj[14] = b),
          (tj[15] = C),
          (tj[16] = x),
          (tj[17] = A),
          (tj[18] = I),
          (tj[19] = M),
          (tj[20] = S),
          (tj[21] = E),
          (tj[22] = R),
          (tj[23] = _),
          (tj[24] = T),
          (tj[25] = k),
          (tj[26] = O),
          (tj[27] = P),
          (tj[28] = N),
          (tj[29] = L),
          (tj[30] = F),
          (tj[31] = q),
          (tj[32] = j),
          (tj[33] = D),
          (tj[34] = U),
          (tj[35] = H),
          (tj[36] = B),
          (tj[37] = V),
          (tj[38] = z),
          (tj[39] = Y),
          (tj[40] = X),
          (tj[41] = W),
          (tj[42] = G),
          (tj[43] = $),
          (tj[44] = Q),
          (tj[45] = ee),
          (tj[46] = et),
          (tj[47] = ea),
          (tj[48] = ei),
          (tj[49] = en),
          (tj[50] = eo),
          (tj[51] = er),
          (tj[52] = el),
          (tj[53] = es),
          (tj[54] = ec),
          (tj[55] = eu),
          (tj[56] = ed),
          (tj[57] = ep),
          (tj[58] = em),
          (tj[59] = eb),
          (tj[60] = eC),
          (tj[61] = ex),
          (tj[62] = eA),
          (tj[63] = eI),
          (tj[64] = eM),
          (tj[65] = eS),
          (tj[66] = eE),
          (tj[67] = eR),
          (tj[68] = e_),
          (tj[69] = eT),
          (tj[70] = ek),
          (tj[71] = eP),
          (tj[72] = eN),
          (tj[73] = eL),
          (tj[74] = eF),
          (tj[75] = eq),
          (tj[76] = ej),
          (tj[77] = eD),
          (tj[78] = eU),
          (tj[79] = eH),
          (tj[80] = eB),
          (tj[81] = eV),
          (tj[82] = ez),
          (tj[83] = eY),
          (tj[84] = eX))
        : ((t = tj[1]),
          (a = tj[2]),
          (o = tj[3]),
          (r = tj[4]),
          (l = tj[5]),
          (s = tj[6]),
          (c = tj[7]),
          (p = tj[8]),
          (m = tj[9]),
          (f = tj[10]),
          (h = tj[11]),
          (v = tj[12]),
          (w = tj[13]),
          (b = tj[14]),
          (C = tj[15]),
          (x = tj[16]),
          (A = tj[17]),
          (I = tj[18]),
          (M = tj[19]),
          (S = tj[20]),
          (E = tj[21]),
          (R = tj[22]),
          (_ = tj[23]),
          (T = tj[24]),
          (k = tj[25]),
          (O = tj[26]),
          (P = tj[27]),
          (N = tj[28]),
          (L = tj[29]),
          (F = tj[30]),
          (q = tj[31]),
          (j = tj[32]),
          (D = tj[33]),
          (U = tj[34]),
          (H = tj[35]),
          (B = tj[36]),
          (V = tj[37]),
          (z = tj[38]),
          (Y = tj[39]),
          (X = tj[40]),
          (W = tj[41]),
          (G = tj[42]),
          ($ = tj[43]),
          (Q = tj[44]),
          (ee = tj[45]),
          (et = tj[46]),
          (ea = tj[47]),
          (ei = tj[48]),
          (en = tj[49]),
          (eo = tj[50]),
          (er = tj[51]),
          (el = tj[52]),
          (es = tj[53]),
          (ec = tj[54]),
          (eu = tj[55]),
          (ed = tj[56]),
          (ep = tj[57]),
          (em = tj[58]),
          (eb = tj[59]),
          (eC = tj[60]),
          (ex = tj[61]),
          (eA = tj[62]),
          (eI = tj[63]),
          (eM = tj[64]),
          (eS = tj[65]),
          (eE = tj[66]),
          (eR = tj[67]),
          (e_ = tj[68]),
          (eT = tj[69]),
          (ek = tj[70]),
          (eP = tj[71]),
          (eN = tj[72]),
          (eL = tj[73]),
          (eF = tj[74]),
          (eq = tj[75]),
          (ej = tj[76]),
          (eD = tj[77]),
          (eU = tj[78]),
          (eH = tj[79]),
          (eB = tj[80]),
          (eV = tj[81]),
          (ez = tj[82]),
          (eY = tj[83]),
          (eX = tj[84]))
      let tD = void 0 === eI || eI,
        tU = void 0 === eF || eF,
        tH = void 0 === eU ? tU : eU,
        tB = void 0 !== eH && eH
      tj[85] !== eB ? ((eW = void 0 === eB ? [] : eB), (tj[85] = eB), (tj[86] = eW)) : (eW = tj[86])
      let tV = eW,
        tz = void 0 === eV || eV,
        tY = void 0 !== ez && ez,
        tX = void 0 === eY || eY,
        tW = void 0 === eX || eX,
        tG = void 0 === eM || eM,
        t$ = void 0 !== eS && eS,
        tK = void 0 !== eE && eE
      tj[87] !== eR ? ((eG = void 0 === eR ? [] : eR), (tj[87] = eR), (tj[88] = eG)) : (eG = tj[88])
      let tQ = eG,
        tZ = void 0 === e_ || e_,
        tJ = void 0 !== eT && eT,
        t0 = void 0 === ek || ek,
        t1 = void 0 !== eP && eP,
        t2 = void 0 === eN || eN,
        t3 = void 0 !== eL && eL,
        t4 = void 0 !== eq && eq,
        t5 = void 0 === ej ? null : ej,
        t6 = void 0 !== eD && eD,
        t8 = eC.orbitTranscript,
        t7 = eC.orbitTranscriptHeader,
        t9 = f.visibleBounds.left + f.visibleBounds.width,
        [ae] = (0, g.useState)(n6),
        [at, aa] = (0, g.useState)(!1),
        ai = ei ?? C.length,
        an = (0, y.A)(),
        [ao, ar] = (0, g.useState)(null),
        [as, ac] = (0, g.useState)(null),
        [au, ad] = (0, g.useState)(n5),
        { sourceReleasedFlightIds: ap, stackCoveredFlightIds: am } = au
      ;(tj[89] !== tQ || tj[90] !== ap || tj[91] !== am
        ? ((e$ = tQ.map(n4)),
          [...ap, ...am].some((e) => !e$.includes(e)) &&
            ad({
              sourceReleasedFlightIds: new Set([...ap].filter((e) => e$.includes(e))),
              stackCoveredFlightIds: new Set([...am].filter((e) => e$.includes(e))),
            }),
          (tj[89] = tQ),
          (tj[90] = ap),
          (tj[91] = am),
          (tj[92] = e$))
        : (e$ = tj[92]),
        tj[93] !== am
          ? ((eK = (e) => {
              let { coveredNotificationId: t, coveredNotificationWasVisible: a, notificationId: i } = e
              return null != t && a && !am.has(i) ? [t] : []
            }),
            (tj[93] = am),
            (tj[94] = eK))
          : (eK = tj[94]))
      let af = tQ.flatMap(eK),
        ah = tQ.flatMap(n3),
        ag = tQ.flatMap(n2),
        av = (0, ef.I)(),
        ay = !av && tD,
        aw = tG && f.quickChat?.stashedEdge == null,
        ab = (0, g.useRef)(!1),
        aC = (0, g.useRef)(!1),
        ax = (0, g.useRef)(null),
        [aA, aI] = (0, g.useState)(!1),
        aM = em ?? aA
      tj[95] !== C[0] ? ((eQ = al(C[0])), (tj[95] = C[0]), (tj[96] = eQ)) : (eQ = tj[96])
      let aS = eQ,
        aE = f.quickChat?.stashedEdge != null
      tj[97] !== C ? ((eZ = new Set(C.map(iP))), (tj[97] = C), (tj[98] = eZ)) : (eZ = tj[98])
      let aR = eZ
      tj[99] !== aR || tj[100] !== aE
        ? ((eJ = () => ({ isStashed: aE, notificationKeys: aR })), (tj[99] = aR), (tj[100] = aE), (tj[101] = eJ))
        : (eJ = tj[101])
      let [a_, aT] = (0, g.useState)(eJ)
      if (tj[102] !== aR || tj[103] !== aE || tj[104] !== C || tj[105] !== a_) {
        let e = a_
        ;(e.isStashed !== aE
          ? aT((e = { isStashed: aE, notificationKeys: aR }))
          : aE &&
            [...e.notificationKeys].some((e) => !aR.has(e)) &&
            aT((e = { ...e, notificationKeys: new Set([...e.notificationKeys].filter((e) => aR.has(e))) })),
          (e0 = C.findIndex(
            (t) =>
              !e.notificationKeys.has(iP(t)) &&
              !t.isLoading &&
              ("warning" === t.level || "danger" === t.level || "success" === t.level),
          )),
          (tj[102] = aR),
          (tj[103] = aE),
          (tj[104] = C),
          (tj[105] = a_),
          (tj[106] = e0))
      } else e0 = tj[106]
      let ak = e0,
        aO = C[ak]
      tj[107] !== t || tj[108] !== an || tj[109] !== aO || tj[110] !== ak
        ? ((e1 = null == aO ? void 0 : (t?.[ak] ?? aH({ intl: an, notification: aO }))),
          (tj[107] = t),
          (tj[108] = an),
          (tj[109] = aO),
          (tj[110] = ak),
          (tj[111] = e1))
        : (e1 = tj[111])
      let aP = e1,
        aN = al(aO),
        [aL, aF] = (0, g.useState)(null),
        [aq, aj] = (0, g.useState)(null),
        [aD, aU] = (0, g.useState)(0),
        [aB, aV] = (0, g.useState)(0)
      ;(tj[112] === Symbol.for("react.memo_cache_sentinel")
        ? ((e2 = (e) => {
            aF(e.point)
          }),
          (tj[112] = e2))
        : (e2 = tj[112]),
        (0, K.JX)("avatar-overlay-computer-use-cursor-changed", e2))
      let az = C.length > 0,
        aY = az && !t8?.visible,
        aX = eb?.phase ?? "inactive",
        a$ = eb?.errorMessage ?? null,
        aK = eb?.usesNativeStackPresentationTransition === !0,
        a5 = eb?.isAudioReady === !0 || eb?.isTransferring === !0,
        a6 = "inactive" !== aX,
        a8 = eb?.isSessionActive ?? !1,
        a7 = eb?.petOpenIntent
      tj[113] !== a5 || tj[114] !== a6 || tj[115] !== a8 || tj[116] !== a7
        ? ((e3 = (function ({ isAudioReady: e, isPresentationActive: t, isSessionActive: a, petOpenIntent: i = !1 }) {
            return t ? (e ? "voice-orb" : "pet") : a && !i ? "hidden" : "pet"
          })({ isAudioReady: a5, isPresentationActive: a6, isSessionActive: a8, petOpenIntent: a7 })),
          (tj[113] = a5),
          (tj[114] = a6),
          (tj[115] = a8),
          (tj[116] = a7),
          (tj[117] = e3))
        : (e3 = tj[117])
      let a9 = e3,
        it = tZ && "quick-chat" === ea,
        ia = tZ && (t1 || it),
        io = ia && !it && t0,
        ir = "quick-chat" === ea && !tZ && "inactive" === aX && null == a$,
        il = ia && "hidden" !== a9,
        is = (0, u.Ul)(J.Fe),
        ic = is ? ie : a3.t,
        iu = "pet" === a9 || (io && "hidden" !== a9)
      tj[118] !== D || tj[119] !== tQ
        ? ((e4 = () => {
            for (let e of tQ) D?.(e.notificationId)
          }),
          (tj[118] = D),
          (tj[119] = tQ),
          (tj[120] = e4))
        : (e4 = tj[120])
      let ip = (0, g.useEffectEvent)(e4)
      ;(tj[121] !== ip || tj[122] !== il
        ? ((e5 = () => {
            il || ip()
          }),
          (tj[121] = ip),
          (tj[122] = il),
          (tj[123] = e5))
        : (e5 = tj[123]),
        tj[124] !== il ? ((e6 = [il]), (tj[124] = il), (tj[125] = e6)) : (e6 = tj[125]),
        (0, g.useLayoutEffect)(e5, e6))
      let im = et ?? eb?.arePetControlsExpanded ?? (null != a$ || "pet" !== a9),
        ig = eb?.petControlsAppearance ?? d.JCZ,
        iv = io && !im && !t2,
        iy = (0, ey.d)(+!iv)
      tj[126] !== f.mascot || tj[127] !== ig || tj[128] !== aK
        ? ((e8 = (0, d.LHY)({
            mascot: f.mascot,
            petControlsAppearance: ig,
            usesNativeStackPresentationTransition: aK,
          })),
          (tj[126] = f.mascot),
          (tj[127] = ig),
          (tj[128] = aK),
          (tj[129] = e8))
        : (e8 = tj[129])
      let iw = e8,
        ib = iw.scale
      tj[130] !== im || tj[131] !== ig
        ? ((e7 = im ? ig.hoverControlSize : (0, id.PO)(ig)), (tj[130] = im), (tj[131] = ig), (tj[132] = e7))
        : (e7 = tj[132])
      let iC = e7,
        iM = im ? ig.hoverControlSize : ig.compactControlHeight,
        i_ = im ? ig.hoverControlSize / 2 : ig.compactControlCornerRadius
      tj[133] !== im ||
      tj[134] !== tY ||
      tj[135] !== f.mascot ||
      tj[136] !== iC ||
      tj[137] !== ig.compactOffsetX ||
      tj[138] !== ig.compactOffsetY ||
      tj[139] !== ig.hoverControlGap ||
      tj[140] !== ig.hoverOffsetX ||
      tj[141] !== ig.hoverOffsetY
        ? ((e9 = tY
            ? (0, id.oO)({
                controlGap: im ? ig.hoverControlGap : -iC,
                controlSize: iC,
                layout: im ? "arc" : "row",
                mascot: f.mascot,
                offsetX: im ? ig.hoverOffsetX : ig.compactOffsetX,
                offsetY: im ? ig.hoverOffsetY : ig.compactOffsetY,
                showsNotificationBadge: !0,
                surfaceId: "mascot-badge",
              })
            : null),
          (tj[133] = im),
          (tj[134] = tY),
          (tj[135] = f.mascot),
          (tj[136] = iC),
          (tj[137] = ig.compactOffsetX),
          (tj[138] = ig.compactOffsetY),
          (tj[139] = ig.hoverControlGap),
          (tj[140] = ig.hoverOffsetX),
          (tj[141] = ig.hoverOffsetY),
          (tj[142] = e9))
        : (e9 = tj[142])
      let iO = e9,
        iL = f.mascot,
        iq = { ...iL, left: iL.left + iw.offsetX, top: iL.top + iw.offsetY },
        ij = (io && t3 && aw ? aq : null) ?? w?.caretPoint ?? aL,
        iU = eb?.caption ?? null,
        iH = f.mascot.left + iw.offsetX
      tj[143] !== f.mascot || tj[144] !== iH || tj[145] !== iw.mascotRect.top
        ? ((te = { ...f.mascot, left: iH, top: iw.mascotRect.top }),
          (tj[143] = f.mascot),
          (tj[144] = iH),
          (tj[145] = iw.mascotRect.top),
          (tj[146] = te))
        : (te = tj[146])
      let iB = te,
        iV = !!eo?.length || null != ec || (t$ && void 0 !== en),
        iG = tK && t$ && void 0 === en,
        i$ = (0, u.Ul)(J.X4),
        iK = (0, u.Ul)(tf.nc),
        iQ = i$ && !iK,
        iZ = !!f.quickChat?.hasOrbPicker && i$,
        iJ = (0, u.Ul)(ii.X5),
        i0 = iZ ? "inactive" !== iJ : "inactive" !== aX && "starting" !== aX,
        i1 = (0, u.Ul)(Z.Wf) && tG && !iv,
        i2 = (0, ey.d)(null),
        i3 = ex ?? i2,
        i4 = {
          isOrbitMode: iZ,
          isOrbitAvatarInHeader: t8?.visible === !0 && null != t7,
          hasUnreadOrbit: i1 && !iZ,
          isOrbitCallStarting: "starting" === iJ,
          draft: es ?? "",
          editorExtraHeight: aD,
          hasReply: null != eu,
          replyHeight: aB,
          hasAppshots: iV,
          hasSelectedOrb: iQ,
          hasMessageNotification: i1,
          hasNotifications: aY,
          hasPetAccessory: io,
          isEditorActive: t3,
          compositionDeferral: t5,
          isExpanded: t2 && !iG,
          isVoiceActive: i0,
          layout: f,
          stashAppearance: ed,
        },
        i5 = ia ? (0, nj.dh)(i4) : null,
        i6 = (0, ey.d)(i5?.target.composerHeight ?? d.Zam),
        i8 = null == i5 ? void 0 : (0, nY.r)(i4)
      tj[147] !== f.quickChat?.workArea || tj[148] !== f.visibleBounds || tj[149] !== i5 || tj[150] !== i6
        ? ((ta = () =>
            null == i5
              ? void 0
              : (0, nY.m)({
                  barTop: i5.bar.top,
                  composerHeight: i6.get(),
                  workArea: f.quickChat?.workArea ?? f.visibleBounds,
                })),
          (tj[147] = f.quickChat?.workArea),
          (tj[148] = f.visibleBounds),
          (tj[149] = i5),
          (tj[150] = i6),
          (tj[151] = ta))
        : (ta = tj[151])
      let i7 = (0, ew.G)(ta),
        i9 =
          t8?.visible && null != t7 && null != i5 && null != i8
            ? i8.composerLeft - (i5.bar.left + i5.target.composerLeft)
            : 0,
        ne = (0, ey.d)(0),
        nt = (0, ey.d)(1)
      tj[152] === Symbol.for("react.memo_cache_sentinel")
        ? ((ti = { bar: null, header: null }), (tj[152] = ti))
        : (ti = tj[152])
      let na = (0, g.useRef)(ti),
        ni = (0, g.useRef)(null),
        nn = (0, g.useRef)(null),
        no = (0, ey.d)(i5?.target.composerTop ?? 0)
      tj[153] !== io || tj[154] !== no
        ? ((tn = () => (io ? Math.min(0, no.get()) : 0)), (tj[153] = io), (tj[154] = no), (tj[155] = tn))
        : (tn = tj[155])
      let nr = (0, ew.G)(tn),
        nl = i5?.bar ?? null
      if (null != as && (iu || !il)) {
        let e,
          t,
          a = f.placement.startsWith("top") ? "top" : "bottom"
        ;(tj[156] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("span", {
              "aria-hidden": !0,
              tabIndex: -1,
              className: "pointer-events-none absolute inset-0",
            })),
            (tj[156] = e))
          : (e = tj[156]),
          tj[157] !== as || tj[158] !== a
            ? ((t = { container: as, side: a, sideOffset: d.rqb, element: e }),
              (tj[157] = as),
              (tj[158] = a),
              (tj[159] = t))
            : (t = tj[159]),
          (to = t))
      } else if (null != ao && null != i5) {
        let e,
          t,
          a = i5.growsUp ? "top" : "bottom"
        ;(tj[160] === Symbol.for("react.memo_cache_sentinel")
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
            (tj[160] = e))
          : (e = tj[160]),
          tj[161] !== ao || tj[162] !== a
            ? ((t = { container: ao, side: a, sideOffset: d.rqb, element: e }),
              (tj[161] = ao),
              (tj[162] = a),
              (tj[163] = t))
            : (t = tj[163]),
          (to = t))
      }
      if (null != nl && null != i5) {
        let e, t, a
        ;(tj[164] !== io || tj[165] !== f || tj[166] !== aY
          ? ((e = (0, iY.L)(f, aY, io)), (tj[164] = io), (tj[165] = f), (tj[166] = aY), (tj[167] = e))
          : (e = tj[167]),
          (tt = e))
        let i = nl.left + i5.target.voiceLeft + i5.target.voiceWidth / 2,
          n = io ? f.mascot.top : nl.top,
          o = i - f.mascot.width / 2
        ;(tj[168] !== n || tj[169] !== f.placement || tj[170] !== nl.height || tj[171] !== nl.top
          ? ((t = f.placement.startsWith("bottom") ? nl.top + nl.height : n),
            (tj[168] = n),
            (tj[169] = f.placement),
            (tj[170] = nl.height),
            (tj[171] = nl.top),
            (tj[172] = t))
          : (t = tj[172]),
          tj[173] !== f.mascot || tj[174] !== o || tj[175] !== t
            ? ((a = { ...f.mascot, left: o, top: t }),
              (tj[173] = f.mascot),
              (tj[174] = o),
              (tj[175] = t),
              (tj[176] = a))
            : (a = tj[176]),
          (iB = a))
      }
      let ns = (0, ey.d)(null),
        nc = eb?.statusText ?? null,
        nu = (0, id.PE)({
          mascot: f.mascot,
          petControlsAppearance: ig,
          quickChatBar: il ? (0, d.MkO)(f, io) : null,
          showsNotificationBadge: az,
        }),
        np = null != eb
      tj[177] !== r || tj[178] !== ij || tj[179] !== iL
        ? ((tr = null == ij || null == r ? null : (0, aQ.P3)(iL, ij, r.spriteVersionNumber)),
          (tj[177] = r),
          (tj[178] = ij),
          (tj[179] = iL),
          (tj[180] = tr))
        : (tr = tj[180])
      let nm = tr,
        nf = tU && az,
        nh = tH && az,
        ng = nf || (!ia && aM),
        nv = ai > 1 && tz,
        ny = ai > 1 && !tz,
        nw = ai <= 1 || (b ?? nv),
        nb = tZ && az && f.placement.startsWith("top") ? d.Zam + d.rqb : 0,
        nC = 0
      tj[181] !== a || tj[182] !== nw || tj[183] !== C.length
        ? ((tl =
            null == a
              ? { backingLayoutHeight: 0, visibleLayoutHeight: 0 }
              : aW({ activityStackPresentation: a, isExpanded: nw, notificationCount: C.length })),
          (tj[181] = a),
          (tj[182] = nw),
          (tj[183] = C.length),
          (tj[184] = tl))
        : (tl = tj[184])
      let nx = tl,
        nA = Math.max(0, nx.backingLayoutHeight - nx.visibleLayoutHeight)
      ;(tj[185] === Symbol.for("react.memo_cache_sentinel") ? ((ts = []), (tj[185] = ts)) : (ts = tj[185]),
        tj[186] !== nx || tj[187] !== nA
          ? ((tc = { ...nx, overhang: nA, rects: ts }), (tj[186] = nx), (tj[187] = nA), (tj[188] = tc))
          : (tc = tj[188]))
      let nI = (0, ey.d)(tc)
      tj[189] !== f.placement
        ? ((tu = f.placement.startsWith("top")), (tj[189] = f.placement), (tj[190] = tu))
        : (tu = tj[190])
      let nM = tu,
        nS = a?.items
      tj[191] !== nM || tj[192] !== nx.backingLayoutHeight || tj[193] !== nS
        ? ((td = { backingHeight: nx.backingLayoutHeight, isAboveMascot: nM, items: nS, offset: 0 }),
          (tj[191] = nM),
          (tj[192] = nx.backingLayoutHeight),
          (tj[193] = nS),
          (tj[194] = td))
        : (td = tj[194])
      let [nE, nR] = (0, g.useState)(td),
        n_ = a?.items
      if (
        !(
          n_?.length === nE.items?.length &&
          (n_?.every((e, t) => {
            let { itemId: a, itemHeight: i } = e
            return a === nE.items?.[t].itemId && i === nE.items?.[t].itemHeight
          }) ??
            !0)
        ) ||
        nE.isAboveMascot !== nM
      ) {
        let e,
          t =
            null != n_ &&
            n_.length === nE.items?.length &&
            n_.every((e, t) => {
              let { itemId: a } = e
              return a === nE.items?.[t].itemId
            }),
          a = nx.backingLayoutHeight
        tj[195] !== nI ? ((e = nI.get()), (tj[195] = nI), (tj[196] = e)) : (e = tj[196])
        let i = e.backingLayoutHeight
        nR({
          backingHeight: a,
          isAboveMascot: nM,
          items: n_,
          offset:
            nE.offset -
            (t && nE.isAboveMascot ? a - nE.backingHeight : 0) +
            (nE.isAboveMascot !== nM ? (nE.isAboveMascot ? 1 : -1) * (a - i) : 0),
        })
      }
      let nT = (0, ey.d)(0)
      ;(tj[197] !== nT || tj[198] !== nM || tj[199] !== nx.backingLayoutHeight
        ? ((tp = (e) => {
            nT.set(nM ? nx.backingLayoutHeight - e.backingLayoutHeight : 0)
          }),
          (tj[197] = nT),
          (tj[198] = nM),
          (tj[199] = nx.backingLayoutHeight),
          (tj[200] = tp))
        : (tp = tj[200]),
        (0, aZ.L)(nI, "change", tp),
        tj[201] !== nM ||
        tj[202] !== io ||
        tj[203] !== f.mascot.top ||
        tj[204] !== t8?.visible ||
        tj[205] !== ig.compactControlHeight ||
        tj[206] !== nr ||
        tj[207] !== nl?.top ||
        tj[208] !== i6 ||
        tj[209] !== no ||
        tj[210] !== iy ||
        tj[211] !== ns
          ? ((tm = function () {
              let e = ns.get(),
                t = no.get(),
                a = (t + i6.get()) * (0, nj.WD)(iy.get(), ig.compactControlHeight, window.devicePixelRatio)
              return t8?.visible || nM
                ? (e?.viewportRect.top ?? (io ? f.mascot.top + nr.get() : (nl?.top ?? f.mascot.top) + t))
                : null == e
                  ? (nl?.top ?? f.mascot.top) + a
                  : e.viewportRect.top + e.viewportRect.height
            }),
            (tj[201] = nM),
            (tj[202] = io),
            (tj[203] = f.mascot.top),
            (tj[204] = t8?.visible),
            (tj[205] = ig.compactControlHeight),
            (tj[206] = nr),
            (tj[207] = nl?.top),
            (tj[208] = i6),
            (tj[209] = no),
            (tj[210] = iy),
            (tj[211] = ns),
            (tj[212] = tm))
          : (tm = tj[212]))
      let nk = tm,
        nO = (0, ew.G)(nk),
        nP = (nM && io ? f.mascot.top : (nl?.top ?? f.mascot.top)) + (nM ? 0 : d.Zam),
        nN = 0
      ;(ia &&
        az &&
        null != f.tray &&
        null != nl &&
        (nN = nM ? nP - d.rqb - (f.tray.top + f.tray.height - nb) : nP + d.rqb - f.tray.top),
        tj[213] !== nP ||
        tj[214] !== nT ||
        tj[215] !== nM ||
        tj[216] !== nk ||
        tj[217] !== az ||
        tj[218] !== f.tray ||
        tj[219] !== i3 ||
        tj[220] !== nl ||
        tj[221] !== i6 ||
        tj[222] !== no ||
        tj[223] !== ia
          ? ((th = () => {
              if (!ia || !az || null == f.tray || null == nl) return nT.get()
              let e = nk(),
                t = i3.get()
              if (null != t) {
                let a = nl.top + no.get() + ("bottom" === t.edge ? i6.get() : 0)
                e = nM ? Math.min(e, a + t.top) : Math.max(e, a + t.bottom)
              }
              return e - nP + (nM ? nT.get() : 0)
            }),
            (tj[213] = nP),
            (tj[214] = nT),
            (tj[215] = nM),
            (tj[216] = nk),
            (tj[217] = az),
            (tj[218] = f.tray),
            (tj[219] = i3),
            (tj[220] = nl),
            (tj[221] = i6),
            (tj[222] = no),
            (tj[223] = ia),
            (tj[224] = th))
          : (th = tj[224]))
      let nL = (0, ew.G)(th)
      if (f.placement.startsWith("top") && null != a && az) {
        let { backingLayoutHeight: e, visibleLayoutHeight: t } = nx
        nC = t - e
      }
      tj[225] !== nb || tj[226] !== az
        ? ((tg = { hasNotifications: az, offset: nb, translation: 0 }), (tj[225] = nb), (tj[226] = az), (tj[227] = tg))
        : (tg = tj[227])
      let [nF, nU] = (0, g.useState)(tg)
      ;(az !== nF.hasNotifications || nb !== nF.offset) &&
        nU({
          hasNotifications: az,
          offset: nb,
          translation: nF.translation + (az !== nF.hasNotifications ? nb - nF.offset : 0),
        })
      let nB = (f.tray?.left ?? f.mascot.left) - f.mascot.left,
        nV =
          null == f.tray
            ? -nF.translation
            : f.tray.top +
              (nM && null != a && az ? f.tray.height - nx.backingLayoutHeight : nb + nC) -
              f.mascot.top -
              nF.translation -
              nE.offset +
              nN
      tj[228] !== nB || tj[229] !== nV
        ? ((tv = { x: nB, y: nV }), (tj[228] = nB), (tj[229] = nV), (tj[230] = tv))
        : (tv = tj[230])
      let nz = tv,
        nW = (0, ey.d)(nz.x),
        nG = (0, ey.d)(nz.y)
      tj[231] !== nz.x || tj[232] !== nz.y || tj[233] !== nW || tj[234] !== nG
        ? ((ty = () => {
            ;(nW.jump(nz.x), nG.jump(nz.y))
          }),
          (tj[231] = nz.x),
          (tj[232] = nz.y),
          (tj[233] = nW),
          (tj[234] = nG),
          (tj[235] = ty))
        : (ty = tj[235])
      let n$ = (0, g.useEffectEvent)(ty)
      ;(tj[236] !== tD || tj[237] !== n$
        ? ((tw = () => {
            tD || n$()
          }),
          (tj[236] = tD),
          (tj[237] = n$),
          (tj[238] = tw))
        : (tw = tj[238]),
        tj[239] !== nz.x || tj[240] !== nz.y || tj[241] !== tD
          ? ((tb = [tD, nz.x, nz.y]), (tj[239] = nz.x), (tj[240] = nz.y), (tj[241] = tD), (tj[242] = tb))
          : (tb = tj[242]),
        (0, g.useLayoutEffect)(tw, tb),
        tj[243] !== nC ||
        tj[244] !== nE.offset ||
        tj[245] !== nM ||
        tj[246] !== nb ||
        tj[247] !== nL ||
        tj[248] !== nI ||
        tj[249] !== nG ||
        tj[250] !== nF.translation ||
        tj[251] !== nh ||
        tj[252] !== io ||
        tj[253] !== f ||
        tj[254] !== nr ||
        tj[255] !== nl ||
        tj[256] !== i6 ||
        tj[257] !== no ||
        tj[258] !== il
          ? ((tC = () => {
              if (!il || null == nl) return null
              let e = (0, d.MkO)(f, io),
                t = nl.top + no.get(),
                a = io ? Math.min(f.mascot.top + nr.get(), t) : t,
                i = Math.max(e.top + e.height, t + i6.get())
              if (nh && null != f.tray) {
                let e = f.mascot.top + nF.translation + nG.get() - nb - nC + nE.offset + nL.get(),
                  { visibleLayoutHeight: t, overhang: n } = nI.get()
                ;((a = Math.min(a, e - (nM ? n : 0))), (i = Math.max(i, e + t + (nM ? 0 : n))))
              }
              return { ...e, top: a, height: i - a }
            }),
            (tj[243] = nC),
            (tj[244] = nE.offset),
            (tj[245] = nM),
            (tj[246] = nb),
            (tj[247] = nL),
            (tj[248] = nI),
            (tj[249] = nG),
            (tj[250] = nF.translation),
            (tj[251] = nh),
            (tj[252] = io),
            (tj[253] = f),
            (tj[254] = nr),
            (tj[255] = nl),
            (tj[256] = i6),
            (tj[257] = no),
            (tj[258] = il),
            (tj[259] = tC))
          : (tC = tj[259]))
      let nK = (0, ew.G)(tC),
        nZ = null == f.tray ? void 0 : Math.max(0, f.tray.height)
      tj[260] !== B || tj[261] !== em
        ? ((tx = () => {
            ;(null != ax.current && (window.clearTimeout(ax.current), (ax.current = null)),
              null == em && aI(!0),
              B?.(!0))
          }),
          (tj[260] = B),
          (tj[261] = em),
          (tj[262] = tx))
        : (tx = tj[262])
      let n1 = tx
      tj[263] !== m || tj[264] !== B || tj[265] !== em
        ? ((tA = () => {
            ab.current ||
              (null != ax.current && window.clearTimeout(ax.current),
              (ax.current = window.setTimeout(() => {
                ;((ax.current = null),
                  aC.current ||
                    m?.current?.querySelector("[data-avatar-overlay-hit-region]:hover") != null ||
                    (null == em && aI(!1), B?.(!1)))
              }, 300)))
          }),
          (tj[263] = m),
          (tj[264] = B),
          (tj[265] = em),
          (tj[266] = tA))
        : (tA = tj[266])
      let n8 = tA
      if (
        (tj[267] === Symbol.for("react.memo_cache_sentinel")
          ? ((tI = () => (
              (ab.current = !1),
              () => {
                ;((ab.current = !0), null != ax.current && window.clearTimeout(ax.current))
              }
            )),
            (tM = []),
            (tj[267] = tI),
            (tj[268] = tM))
          : ((tI = tj[267]), (tM = tj[268])),
        (0, g.useEffect)(tI, tM),
        tW && nf && null != R)
      ) {
        let e, t, a, n
        tj[269] !== an || tj[270] !== nv
          ? ((e = nv
              ? an.formatMessage({
                  id: "avatarOverlay.collapseNotificationStack",
                  defaultMessage: "Collapse activity stack",
                  description: "Accessible label for collapsing grouped floating avatar notifications",
                })
              : an.formatMessage({
                  id: "avatarOverlay.hideActivity",
                  defaultMessage: "Hide activity",
                  description: "Accessible label for stashing floating avatar activity",
                })),
            (tj[269] = an),
            (tj[270] = nv),
            (tj[271] = e))
          : (e = tj[271])
        let o = iZ ? aS.badgeBackgroundColor : "transparent"
        tj[272] !== iZ || tj[273] !== f.placement || tj[274] !== C.length
          ? ((t = iZ
              ? C.length
              : (0, i.jsx)(a4.A, {
                  className: (0, ev.A)("icon-sm", f.placement.startsWith("bottom") && "rotate-180"),
                })),
            (tj[272] = iZ),
            (tj[273] = f.placement),
            (tj[274] = C.length),
            (tj[275] = t))
          : (t = tj[275])
        let r = iZ ? aS.badgeForegroundColor : "currentColor",
          l = !iZ
        ;(tj[276] !== iZ || tj[277] !== C
          ? ((a = iZ ? (0, d.F0r)(!0, C) : void 0), (tj[276] = iZ), (tj[277] = C), (tj[278] = a))
          : (a = tj[278]),
          tj[279] !== R ||
          tj[280] !== e ||
          tj[281] !== o ||
          tj[282] !== t ||
          tj[283] !== r ||
          tj[284] !== l ||
          tj[285] !== a
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
              (tj[279] = R),
              (tj[280] = e),
              (tj[281] = o),
              (tj[282] = t),
              (tj[283] = r),
              (tj[284] = l),
              (tj[285] = a),
              (tj[286] = n))
            : (n = tj[286]),
          (tS = n))
      } else if (tW && null != G && az && !tU) {
        let e, t, a
        tj[287] !== an || tj[288] !== C.length
          ? ((e = an.formatMessage(
              {
                id: "avatarOverlay.showActivity",
                defaultMessage: "Show activity, {count, plural, one {# item} other {# items}}",
                description: "Accessible label for showing stashed floating avatar activity",
              },
              { count: C.length },
            )),
            (tj[287] = an),
            (tj[288] = C.length),
            (tj[289] = e))
          : (e = tj[289])
        let i = aS.badgeBackgroundColor,
          n = C.length,
          o = aS.badgeForegroundColor
        ;(tj[290] !== C ? ((t = (0, d.F0r)(!0, C)), (tj[290] = C), (tj[291] = t)) : (t = tj[291]),
          tj[292] !== C.length ||
          tj[293] !== G ||
          tj[294] !== aS.badgeBackgroundColor ||
          tj[295] !== aS.badgeForegroundColor ||
          tj[296] !== e ||
          tj[297] !== t
            ? ((a = {
                ariaLabel: e,
                backgroundColor: i,
                content: n,
                foregroundColor: o,
                isGlassy: !0,
                nativeTint: t,
                onClick: G,
              }),
              (tj[292] = C.length),
              (tj[293] = G),
              (tj[294] = aS.badgeBackgroundColor),
              (tj[295] = aS.badgeForegroundColor),
              (tj[296] = e),
              (tj[297] = t),
              (tj[298] = a))
            : (a = tj[298]),
          (tS = a))
      }
      tj[299] !== r ||
      tj[300] !== an ||
      tj[301] !== it ||
      tj[302] !== nm ||
      tj[303] !== h ||
      tj[304] !== tS ||
      tj[305] !== ee ||
      tj[306] !== aS ||
      tj[307] !== iL.height ||
      tj[308] !== iL.width ||
      tj[309] !== np ||
      tj[310] !== ia
        ? ((tE =
            null == r || it
              ? null
              : (0, i.jsx)(a1.r, {
                  ariaLabel: an.formatMessage(n0.mascotLabel, { petName: r.displayName }),
                  animationPaused: ee,
                  lookFrame: nm,
                  notificationBadge: ia || np ? void 0 : tS,
                  source: (0, a2.aN)(r),
                  state: aS.mascotState,
                  style: { ...(0, aG.cv)(iL.width), height: iL.height },
                  transientState: h,
                })),
          (tj[299] = r),
          (tj[300] = an),
          (tj[301] = it),
          (tj[302] = nm),
          (tj[303] = h),
          (tj[304] = tS),
          (tj[305] = ee),
          (tj[306] = aS),
          (tj[307] = iL.height),
          (tj[308] = iL.width),
          (tj[309] = np),
          (tj[310] = ia),
          (tj[311] = tE))
        : (tE = tj[311])
      let n7 = tE,
        n9 = null
      if (null != a$ && null != eb)
        n9 = (0, i.jsx)(ix, {
          className: "absolute z-30 -translate-x-1/2",
          screenEdgeFallback: {
            belowAnchorTop: nu.top,
            mascotTop: f.mascot.top,
            occupiedBounds: nK,
            visibleBounds: f.visibleBounds,
          },
          style: {
            left: nu.left,
            maxWidth: (0, id.Q3)({ anchor: nu, visibleBounds: f.quickChat?.workArea ?? f.visibleBounds }),
            top: nu.top,
          },
          text: a$,
          tone: "danger",
        })
      else if (!ia && "voice-orb" === a9 && null != eb) {
        let e,
          t = null == nc && "invisible"
        ;(tj[312] !== t
          ? ((e = (0, ev.A)("pointer-events-none absolute z-30 -translate-x-1/2 -translate-y-1/2", t)),
            (tj[312] = t),
            (tj[313] = e))
          : (e = tj[313]),
          (n9 = (0, i.jsx)("div", {
            "aria-hidden": null == nc,
            className: e,
            style: (0, id.J1)({ mascot: iq, orbScale: ib }),
            children: (0, i.jsx)(ix, {
              style: { maxWidth: (0, id.kn)({ mascot: iq, visibleBounds: f.quickChat?.workArea ?? f.visibleBounds }) },
              text: nc ?? " ",
            }),
          })))
      }
      tj[314] !== ic ||
      tj[315] !== im ||
      tj[316] !== aw ||
      tj[317] !== r ||
      tj[318] !== n7 ||
      tj[319] !== l ||
      tj[320] !== tX ||
      tj[321] !== is ||
      tj[322] !== it ||
      tj[323] !== f ||
      tj[324] !== v ||
      tj[325] !== to ||
      tj[326] !== tS ||
      tj[327] !== M ||
      tj[328] !== E ||
      tj[329] !== _ ||
      tj[330] !== T ||
      tj[331] !== k ||
      tj[332] !== O ||
      tj[333] !== P ||
      tj[334] !== q ||
      tj[335] !== i_ ||
      tj[336] !== iM ||
      tj[337] !== iC ||
      tj[338] !== ig ||
      tj[339] !== nr ||
      tj[340] !== ns ||
      tj[341] !== a9 ||
      tj[342] !== iO ||
      tj[343] !== aX ||
      tj[344] !== a$ ||
      tj[345] !== eb?.activity ||
      tj[346] !== eb?.canStart ||
      tj[347] !== eb?.handoff ||
      tj[348] !== eb?.microphoneMuted ||
      tj[349] !== eb?.muted ||
      tj[350] !== eb?.onStart ||
      tj[351] !== eb?.onStop ||
      tj[352] !== eb?.onToggleMicrophoneMute ||
      tj[353] !== eb?.onToggleMute ||
      tj[354] !== eb?.presentationAnchorRef ||
      tj[355] !== eb?.usesPresentationFadeTransition ||
      tj[356] !== iL.height ||
      tj[357] !== iL.left ||
      tj[358] !== iL.top ||
      tj[359] !== iL.width ||
      tj[360] !== n8 ||
      tj[361] !== n1 ||
      tj[362] !== np ||
      tj[363] !== iu ||
      tj[364] !== az ||
      tj[365] !== aK ||
      tj[366] !== ia ||
      tj[367] !== iw.offsetX ||
      tj[368] !== iw.offsetY ||
      tj[369] !== ib
        ? ((tR =
            it || null == r
              ? null
              : (0, i.jsxs)(eh.P.div, {
                  ref: ac,
                  className: (0, ev.A)(
                    "group absolute cursor-grab active:cursor-grabbing",
                    "hidden" === a9 && "pointer-events-none",
                  ),
                  style: { height: iL.height, left: iL.left, top: iL.top, width: iL.width, y: nr },
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
                    (0, i.jsx)(ic, {
                      items: l,
                      anchor: is ? to : void 0,
                      onOpenChange: is ? M : void 0,
                      children: (0, i.jsx)("div", {
                        "data-avatar-overlay-hit-region": "hidden" === a9 ? void 0 : "mascot",
                        className: "h-full w-full",
                        onPointerEnter: () => {
                          ;(q?.(!0), n1())
                        },
                        onPointerLeave: () => {
                          ;(q?.(!1), n8())
                        },
                        children: (0, i.jsxs)(iI.P, {
                          className: "relative size-full",
                          handoff: eb?.handoff ?? null,
                          surface: "global-overlay",
                          usesFadeTransition: eb?.usesPresentationFadeTransition ?? !1,
                          children: [
                            (0, i.jsx)(aJ.x, {
                              reducedMotion: "never",
                              children: (0, i.jsxs)(i.Fragment, {
                                children: [
                                  ia || ("voice-orb" !== a9 && eb?.canStart !== !0)
                                    ? null
                                    : (0, i.jsx)(
                                        iX,
                                        {
                                          geometry: ns,
                                          layout: f,
                                          children: (0, i.jsx)(eh.P.div, {
                                            animate:
                                              "voice-orb" === a9
                                                ? { opacity: 1, scale: ib, x: iw.offsetX, y: iw.offsetY }
                                                : { opacity: 0, scale: 0.45 * ib, x: iw.offsetX, y: iw.offsetY },
                                            className: "absolute inset-0",
                                            initial: !1,
                                            transition: nJ,
                                            children: (0, i.jsx)(iA.P, {
                                              glowEnabled: tX,
                                              placement: "center",
                                              presentationAnchorRef: eb?.presentationAnchorRef,
                                              phase: aX,
                                              voiceActivity: eb?.activity ?? "idle",
                                            }),
                                          }),
                                        },
                                        "voice-orb",
                                      ),
                                  null != n7 && (iu || (aK && "voice-orb" === a9))
                                    ? (0, i.jsx)(
                                        eh.P.div,
                                        {
                                          "aria-hidden": !iu || void 0,
                                          animate: iu ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.62 },
                                          className: (0, ev.A)("absolute inset-0", !iu && "pointer-events-none"),
                                          inert: !iu,
                                          initial: !1,
                                          transition: a0.iN,
                                          children: n7,
                                        },
                                        "pet",
                                      )
                                    : null,
                                ],
                              }),
                            }),
                            ia
                              ? null
                              : (0, i.jsx)(eh.P.div, {
                                  animate: {
                                    "--pet-glass-spacing": im
                                      ? [`${ig.expandingGlassSpacing}px`, `${ig.hoverGlassSpacing}px`]
                                      : `${ig.compactGlassSpacing}px`,
                                  },
                                  "aria-hidden": !aw || void 0,
                                  className: (0, ev.A)("petControls-iAgTUj", !aw && "invisible"),
                                  initial: !1,
                                  inert: !aw,
                                  transition: { duration: ig.glassMergeDurationMs / 1e3, ease: [0.6, 0, 1, 1] },
                                  children: (0, i.jsx)(aJ.x, {
                                    reducedMotion: "never",
                                    children: (0, i.jsx)(ih, {
                                      arePetControlsExpanded: im,
                                      areControlsVisible: "pet" === a9 || "voice-orb" === a9,
                                      areVoiceActionsHidden: "hidden" === a9,
                                      canStart: eb?.canStart ?? !1,
                                      errorMessage: a$,
                                      isRealtimeVoiceSurfaceVisible: "voice-orb" === a9,
                                      isMicrophoneMuted: eb?.microphoneMuted ?? !1,
                                      isMuted: eb?.muted ?? !1,
                                      onAnimationFrame: E,
                                      phase: aX,
                                      placement: f.placement,
                                      mascot: f.mascot,
                                      petControlsAppearance: ig,
                                      showsNotificationBadge: az,
                                      onStart: eb?.onStart,
                                      onStop: eb?.onStop,
                                      onToggleMicrophoneMute: eb?.onToggleMicrophoneMute,
                                      onToggleMute: eb?.onToggleMute,
                                      children: (0, i.jsx)(eg.N, {
                                        initial: !1,
                                        children:
                                          np && null != tS
                                            ? (0, i.jsx)(
                                                a1.h,
                                                {
                                                  animatesExit: !0,
                                                  ignoresReducedMotion: !0,
                                                  isContentVisible: im,
                                                  notificationBadge: tS,
                                                  nativeCornerRadius: i_,
                                                  onAnimationFrame: E,
                                                  contentVisibilityAnimation: {
                                                    hiddenBlurRadiusPx: ig.contentHiddenBlurRadiusPx,
                                                    hiddenScale: ig.contentHiddenScale,
                                                    revealTransition: a0.z1,
                                                  },
                                                  presentationPosition:
                                                    null == iO
                                                      ? void 0
                                                      : {
                                                          height: iM,
                                                          left: `calc(50% + ${iO.x - iC / 2}px)`,
                                                          top: `calc(100% + ${iO.y - iL.height}px)`,
                                                          width: iC,
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
          (tj[314] = ic),
          (tj[315] = im),
          (tj[316] = aw),
          (tj[317] = r),
          (tj[318] = n7),
          (tj[319] = l),
          (tj[320] = tX),
          (tj[321] = is),
          (tj[322] = it),
          (tj[323] = f),
          (tj[324] = v),
          (tj[325] = to),
          (tj[326] = tS),
          (tj[327] = M),
          (tj[328] = E),
          (tj[329] = _),
          (tj[330] = T),
          (tj[331] = k),
          (tj[332] = O),
          (tj[333] = P),
          (tj[334] = q),
          (tj[335] = i_),
          (tj[336] = iM),
          (tj[337] = iC),
          (tj[338] = ig),
          (tj[339] = nr),
          (tj[340] = ns),
          (tj[341] = a9),
          (tj[342] = iO),
          (tj[343] = aX),
          (tj[344] = a$),
          (tj[345] = eb?.activity),
          (tj[346] = eb?.canStart),
          (tj[347] = eb?.handoff),
          (tj[348] = eb?.microphoneMuted),
          (tj[349] = eb?.muted),
          (tj[350] = eb?.onStart),
          (tj[351] = eb?.onStop),
          (tj[352] = eb?.onToggleMicrophoneMute),
          (tj[353] = eb?.onToggleMute),
          (tj[354] = eb?.presentationAnchorRef),
          (tj[355] = eb?.usesPresentationFadeTransition),
          (tj[356] = iL.height),
          (tj[357] = iL.left),
          (tj[358] = iL.top),
          (tj[359] = iL.width),
          (tj[360] = n8),
          (tj[361] = n1),
          (tj[362] = np),
          (tj[363] = iu),
          (tj[364] = az),
          (tj[365] = aK),
          (tj[366] = ia),
          (tj[367] = iw.offsetX),
          (tj[368] = iw.offsetY),
          (tj[369] = ib),
          (tj[370] = tR))
        : (tR = tj[370])
      let oe = tR,
        ot = ir || void 0,
        oa = ir && "invisible",
        oi = tB && "-outline-offset-2 outline-2 outline-[#ff0000]"
      tj[371] !== oa || tj[372] !== oi
        ? ((t_ = (0, ev.A)("relative h-screen w-screen bg-transparent", "overflow-hidden", oa, oi)),
          (tj[371] = oa),
          (tj[372] = oi),
          (tj[373] = t_))
        : (t_ = tj[373])
      let on = tB || void 0
      tj[374] !== o || tj[375] !== ae
        ? ((tT = (0, i.jsx)(nH, { host: o, input: ae, onAvailabilityChange: aa })),
          (tj[374] = o),
          (tj[375] = ae),
          (tj[376] = tT))
        : (tT = tj[376])
      let oo = iZ && iQ,
        or = null == t7 ? void 0 : i8
      tj[377] !== oo || tj[378] !== or
        ? ((tk = { isOrbitTranscript: oo, orbitTranscriptPlacement: or }),
          (tj[377] = oo),
          (tj[378] = or),
          (tj[379] = tk))
        : (tk = tj[379])
      let ol = t8?.visible === !0 && aw
      tj[380] !== ae ||
      tj[381] !== aw ||
      tj[382] !== f.tray ||
      tj[383] !== at ||
      tj[384] !== E ||
      tj[385] !== _ ||
      tj[386] !== T ||
      tj[387] !== k ||
      tj[388] !== O ||
      tj[389] !== P ||
      tj[390] !== t8 ||
      tj[391] !== t7 ||
      tj[392] !== i8?.expandsFromTop ||
      tj[393] !== i8?.height ||
      tj[394] !== i8?.top ||
      tj[395] !== i7 ||
      tj[396] !== nO ||
      tj[397] !== i5 ||
      tj[398] !== n8 ||
      tj[399] !== n1 ||
      tj[400] !== t9 ||
      tj[401] !== nt ||
      tj[402] !== ne ||
      tj[403] !== i9
        ? ((tO =
            null != t8
              ? (0, i.jsx)(eg.N, {
                  children: (0, i.jsx)(
                    nQ,
                    {
                      active: t8.visible,
                      presentedPlacement: i7,
                      composerProgress: nt,
                      expandsFromTop: i8?.expandsFromTop ?? !1,
                      header:
                        null == t7
                          ? void 0
                          : (e) =>
                              (0, i.jsx)("div", {
                                className: "w-full",
                                "data-avatar-overlay-hit-region": "selected-orb",
                                children: t7(e, i8?.expandsFromTop ?? !1, na, ni, nn),
                              }),
                      anchorY: nO,
                      isVisible: aw,
                      measuredHeight: ne,
                      tray:
                        null != f.tray && null != i5
                          ? {
                              ...f.tray,
                              height: null == t7 ? f.tray.height : (i8?.height ?? f.tray.height),
                              top: i8?.top ?? f.tray.top,
                              left: i9 + i5.bar.left + i5.target.composerLeft,
                              width: i5.target.composerWidth,
                            }
                          : null,
                      onLostPointerCapture: _,
                      onPointerCancel: T,
                      onPointerDown: null == t7 ? void 0 : k,
                      onPointerEnter: n1,
                      onPointerLeave: n8,
                      onPointerMove: O,
                      onPointerUp: P,
                      onGeometryAnimationFrame: E,
                      children: (e, t) =>
                        t8.render(
                          e,
                          t8.visible && aw && null != f.tray && null != i5,
                          t,
                          at ? { input: ae, visibleRight: t9 } : void 0,
                        ),
                    },
                    null == t7 ? "temporary-transcript" : "orbit-transcript",
                  ),
                })
              : null),
          (tj[380] = ae),
          (tj[381] = aw),
          (tj[382] = f.tray),
          (tj[383] = at),
          (tj[384] = E),
          (tj[385] = _),
          (tj[386] = T),
          (tj[387] = k),
          (tj[388] = O),
          (tj[389] = P),
          (tj[390] = t8),
          (tj[391] = t7),
          (tj[392] = i8?.expandsFromTop),
          (tj[393] = i8?.height),
          (tj[394] = i8?.top),
          (tj[395] = i7),
          (tj[396] = nO),
          (tj[397] = i5),
          (tj[398] = n8),
          (tj[399] = n1),
          (tj[400] = t9),
          (tj[401] = nt),
          (tj[402] = ne),
          (tj[403] = i9),
          (tj[404] = tO))
        : (tO = tj[404])
      let os = f.quickChat?.workArea ?? f.visibleBounds,
        oc = il
          ? (0, i.jsx)(ic, {
              items: l,
              anchor: is ? to : void 0,
              onOpenChange: is ? M : void 0,
              children: (0, i.jsxs)("div", {
                className: "contents",
                children: [
                  io
                    ? null
                    : (0, i.jsx)("div", {
                        "aria-hidden": "true",
                        className: "codex-avatar-button pointer-events-none invisible absolute h-10",
                        "data-avatar-overlay-size": "mascot",
                        inert: !0,
                        style: { ...v, left: f.mascot.left, top: f.mascot.top },
                      }),
                  (0, i.jsx)(nD.l, {
                    transcriptAvatarOrigin: na,
                    transcriptBarOrigin: ni,
                    transcriptNameOrigin: nn,
                    isOrbitAvatarInHeader: t8?.visible === !0 && null != t7,
                    morphsOrbitTranscriptDown: iZ && iQ && !!i8?.expandsFromTop,
                    isOrbitMode: iZ,
                    transcriptComposerProgress: null == t7 ? void 0 : nt,
                    animatesPresentation: tD,
                    appshots: eo,
                    getAttachmentActions: p,
                    composerReplacement: er,
                    fileAttachments: ec,
                    areActivityPillsVisible: tU,
                    areControlsVisible: tG,
                    canStash: tJ,
                    canStartVoice: eb?.canStart ?? !1,
                    draft: es ?? "",
                    threadTarget: ep,
                    hasNotifications: aY,
                    isExpanded: t2,
                    onMenuAnchorChange: ar,
                    isAppshotCapturePending: t$,
                    appshotCaptureResponse: en,
                    appshotCaptureStartsCollapsed: tK,
                    isSending: tQ.some((e) => !ap.has(e.notificationId)),
                    isEditorActive: t3,
                    focusRequested: t4,
                    compositionDeferral: t5,
                    isMinimized: iv,
                    isVoiceSelected: t6,
                    layout: f,
                    stashAppearance: ed,
                    notificationBadge: tS,
                    petAccessory: io ? oe : void 0,
                    realtimeVoiceSurface: eb,
                    stashedAttentionPill:
                      null == aO || null == aP || f.quickChat?.stashedEdge == null
                        ? null
                        : (0, i.jsx)(
                            iz,
                            {
                              animation: eA,
                              compactContent: (0, i.jsx)("span", {
                                "aria-label": aP.statusIconAriaLabel ?? an.formatMessage(aN.labelMessage),
                                className: "flex size-full items-center justify-center",
                                role: "img",
                                children: (function (e, t) {
                                  if (t) return (0, i.jsx)(eO.I, { asset: iT, className: "relative text-warning" })
                                  switch (e.iconType) {
                                    case "clock":
                                      return (0, i.jsx)(eO.I, { asset: iE, className: "relative text-warning" })
                                    case "warning":
                                      return (0, i.jsx)(eO.I, { asset: iR, className: "relative text-danger" })
                                    case "check-circle":
                                      return (0, i.jsx)("span", {
                                        className:
                                          "flex size-8 items-center justify-center rounded-full bg-[light-dark(var(--green-50),var(--green-900))] text-[color:light-dark(var(--green-400),var(--green-300))]",
                                        children: (0, i.jsx)(eO.I, { asset: iS.n }),
                                      })
                                    case "spinner":
                                      return ik(e)
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
                                  : (0, i.jsx)(iN, {
                                      ariaLabel: aP.dismissNotificationAriaLabel,
                                      onClick: () => {
                                        S(aO)
                                      },
                                    }),
                              tabEdge: f.quickChat.stashedEdge,
                              children: (0, i.jsx)(nd, {
                                activitySwipeInput: ae,
                                swipeVisibleRight: t9,
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
                                onRunNotificationAction: X,
                                onRunNotificationControl: W,
                                onSubmitQuestionOption: $,
                              }),
                            },
                            iP(aO),
                          ),
                    onCaretPointChange: io ? aj : void 0,
                    onDragPointerCancel: T,
                    onDragPointerDown: k,
                    onDragPointerMove: O,
                    onDragPointerUp: P,
                    onDraftChange: j,
                    onEditorExtraHeightChange: aU,
                    onReplyHeightChange: aV,
                    onFocusChange: U,
                    onGeometryAnimationFrame: E,
                    onLostDragPointerCapture: _,
                    onOpen: H,
                    onRemoveAppshots: z,
                    onStartVoice: eb?.onStart,
                    onSubmit: Q,
                    replyTo: eu,
                    onRemoveReply: Y,
                    onToggleActivity: tU ? R : G,
                    onVoiceSelectionChange: V,
                    presentedComposerHeight: i6,
                    orbitPreviewLayout: i3,
                    presentedComposerTop: no,
                    presentedExpansion: iy,
                    children:
                      null != D && tU
                        ? tQ.map((e) => {
                            let n = C.findIndex((t) => {
                                let { id: a } = t
                                return a === e.notificationId
                              }),
                              o = C[n]
                            return null == o
                              ? null
                              : (0, i.jsx)(
                                  iD,
                                  {
                                    flight: e,
                                    onStackCovered: (e) => {
                                      ad((t) => ({
                                        ...t,
                                        stackCoveredFlightIds: new Set(t.stackCoveredFlightIds).add(e),
                                      }))
                                    },
                                    onComplete: D,
                                    onSourceReleased: (e) => {
                                      ad((t) => ({
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
                                      return (0, i.jsx)(nd, {
                                        activitySwipeInput: ae,
                                        swipeVisibleRight: t9,
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
                                        isStackedBehindPrimary: n > 0 && !nv,
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
      ;(tj[405] !== aM || tj[406] !== f || tj[407] !== n8 || tj[408] !== n1 || tj[409] !== ia
        ? ((tP =
            !ia && aM && null != f.tray
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
                  onPointerEnter: n1,
                  onPointerLeave: n8,
                })
              : null),
          (tj[405] = aM),
          (tj[406] = f),
          (tj[407] = n8),
          (tj[408] = n1),
          (tj[409] = ia),
          (tj[410] = tP))
        : (tP = tj[410]),
        tj[411] !== aw ||
        tj[412] !== nh ||
        tj[413] !== f ||
        tj[414] !== av ||
        tj[415] !== tt ||
        tj[416] !== ns ||
        tj[417] !== iB ||
        tj[418] !== iU ||
        tj[419] !== nc ||
        tj[420] !== ia
          ? ((tN =
              null != iU || (ia && null != nc)
                ? (0, i.jsx)("div", {
                    "aria-hidden": !aw || void 0,
                    className: aw ? void 0 : "invisible",
                    inert: !aw,
                    children: (0, i.jsx)(iW, {
                      anchorRect: ia && nh ? (f.tray ?? tt) : tt,
                      hasActivityPills: nh,
                      layout: { ...f, mascot: iB },
                      presentedGeometry: ns,
                      prefersReducedMotion: !!av,
                      presentation: ia ? "quick-chat" : "voice-orb",
                      statusText: ia ? nc : null,
                      text: iU ?? "",
                    }),
                  })
                : null),
            (tj[411] = aw),
            (tj[412] = nh),
            (tj[413] = f),
            (tj[414] = av),
            (tj[415] = tt),
            (tj[416] = ns),
            (tj[417] = iB),
            (tj[418] = iU),
            (tj[419] = nc),
            (tj[420] = ia),
            (tj[421] = tN))
          : (tN = tj[421]),
        tj[422] !== nC ||
        tj[423] !== t ||
        tj[424] !== nE.offset ||
        tj[425] !== nb ||
        tj[426] !== nz ||
        tj[427] !== nL ||
        tj[428] !== nI ||
        tj[429] !== nW ||
        tj[430] !== nG ||
        tj[431] !== nF.translation ||
        tj[432] !== a ||
        tj[433] !== ae ||
        tj[434] !== ay ||
        tj[435] !== tU ||
        tj[436] !== aw ||
        tj[437] !== ah ||
        tj[438] !== s ||
        tj[439] !== c ||
        tj[440] !== tV ||
        tj[441] !== ng ||
        tj[442] !== ag ||
        tj[443] !== ny ||
        tj[444] !== nw ||
        tj[445] !== nv ||
        tj[446] !== tz ||
        tj[447] !== aM ||
        tj[448] !== f.mascot.left ||
        tj[449] !== f.mascot.top ||
        tj[450] !== f.placement ||
        tj[451] !== f.tray ||
        tj[452] !== w ||
        tj[453] !== ai ||
        tj[454] !== C ||
        tj[455] !== x ||
        tj[456] !== A ||
        tj[457] !== I ||
        tj[458] !== S ||
        tj[459] !== E ||
        tj[460] !== N ||
        tj[461] !== L ||
        tj[462] !== F ||
        tj[463] !== j ||
        tj[464] !== U ||
        tj[465] !== X ||
        tj[466] !== W ||
        tj[467] !== $ ||
        tj[468] !== Q ||
        tj[469] !== t8?.visible ||
        tj[470] !== el ||
        tj[471] !== es ||
        tj[472] !== tZ ||
        tj[473] !== e$ ||
        tj[474] !== i5 ||
        tj[475] !== af ||
        tj[476] !== n8 ||
        tj[477] !== n1 ||
        tj[478] !== t9 ||
        tj[479] !== nZ ||
        tj[480] !== ia
          ? ((tL =
              t8?.visible && null != f.tray && null != i5
                ? null
                : (0, i.jsx)(eh.P.div, {
                    animate: nz,
                    "aria-hidden": !aw || void 0,
                    className: (0, ev.A)(
                      "absolute text-sm text-default",
                      !aw && "invisible",
                      ng ? "cursor-interaction" : "pointer-events-none",
                    ),
                    initial: !1,
                    inert: !aw,
                    style: {
                      height: f.tray?.height,
                      left: f.mascot.left,
                      top: f.mascot.top + nF.translation,
                      visibility: null == f.tray ? "hidden" : void 0,
                      width: f.tray?.width,
                      x: nW,
                      y: nG,
                    },
                    transition: ay
                      ? { damping: d.IYj.damping, mass: d.IYj.mass, stiffness: d.IYj.stiffness, type: "spring" }
                      : { duration: 0 },
                    onPointerEnter: n1,
                    onPointerLeave: n8,
                    onUpdate: E,
                    children: (0, i.jsxs)(eh.P.div, {
                      className: (0, ev.A)("relative w-max", iF, nv && null == a && "overflow-y-clip"),
                      "data-avatar-overlay-hit-region": ng && aw ? "notification-tray" : void 0,
                      "data-avatar-overlay-size": "notification-tray",
                      style: { maxHeight: nZ, top: -nb - nC + nE.offset, y: nL },
                      children: [
                        (0, i.jsx)("div", {
                          className: "h-0 overflow-hidden",
                          "data-avatar-overlay-size": "notification-tray-header",
                        }),
                        (0, i.jsx)(nq, {
                          animatesActivityLayout: ay,
                          activitySwipeInput: ae,
                          swipeVisibleRight: t9,
                          activityCopies: t,
                          activityStackPresentation: a,
                          presentedGeometry: nI,
                          retainedForegroundNotificationIds: af,
                          coveredForegroundNotificationIds: ah,
                          hiddenStartCoveredNotificationIds: ag,
                          enteringNotificationIds: e$,
                          areActivityPillsLaidOut: null != f.tray,
                          areActivityPillsVisible: tU,
                          isQuickChatVisible: !ia && aM,
                          isNotificationStackCollapsed: ny,
                          isNotificationTrayExpanded: nw,
                          isNotificationTrayVisiblyExpanded: nv,
                          isTrayAboveMascot: f.placement.startsWith("top"),
                          notifications: C,
                          notificationFollowUp: w,
                          expandedNotificationIds: tV,
                          quickChatDictation: el,
                          dictationAudio: s,
                          dictationHistory: c,
                          onActivityStackScroll: I,
                          onActivityPillsHidden: A,
                          onActivateNotification: x,
                          onNotificationPointerEnter: L,
                          trayMaxHeight: nZ,
                          onDismissNotification: 1 === ai || tz ? S : void 0,
                          onOpenNotificationActions: F,
                          onNotificationExpansionChange: N,
                          onRunNotificationControl: W,
                          onRunNotificationAction: X,
                          onSubmitQuestionOption: $,
                          onQuickChatEditorActiveChange: (e) => {
                            ;((aC.current = e), U?.(e ? "editor" : null), e ? n1() : n8())
                          },
                          onQuickChatDraftChange: j,
                          onGeometryAnimationFrame: E,
                          onQuickChatPointerEnter: n1,
                          onQuickChatPointerLeave: n8,
                          onSubmitQuickChat: Q,
                          quickChatDraft: es,
                          quickChatEnabled: !ia && tZ,
                        }),
                      ],
                    }),
                  })),
            (tj[422] = nC),
            (tj[423] = t),
            (tj[424] = nE.offset),
            (tj[425] = nb),
            (tj[426] = nz),
            (tj[427] = nL),
            (tj[428] = nI),
            (tj[429] = nW),
            (tj[430] = nG),
            (tj[431] = nF.translation),
            (tj[432] = a),
            (tj[433] = ae),
            (tj[434] = ay),
            (tj[435] = tU),
            (tj[436] = aw),
            (tj[437] = ah),
            (tj[438] = s),
            (tj[439] = c),
            (tj[440] = tV),
            (tj[441] = ng),
            (tj[442] = ag),
            (tj[443] = ny),
            (tj[444] = nw),
            (tj[445] = nv),
            (tj[446] = tz),
            (tj[447] = aM),
            (tj[448] = f.mascot.left),
            (tj[449] = f.mascot.top),
            (tj[450] = f.placement),
            (tj[451] = f.tray),
            (tj[452] = w),
            (tj[453] = ai),
            (tj[454] = C),
            (tj[455] = x),
            (tj[456] = A),
            (tj[457] = I),
            (tj[458] = S),
            (tj[459] = E),
            (tj[460] = N),
            (tj[461] = L),
            (tj[462] = F),
            (tj[463] = j),
            (tj[464] = U),
            (tj[465] = X),
            (tj[466] = W),
            (tj[467] = $),
            (tj[468] = Q),
            (tj[469] = t8?.visible),
            (tj[470] = el),
            (tj[471] = es),
            (tj[472] = tZ),
            (tj[473] = e$),
            (tj[474] = i5),
            (tj[475] = af),
            (tj[476] = n8),
            (tj[477] = n1),
            (tj[478] = t9),
            (tj[479] = nZ),
            (tj[480] = ia),
            (tj[481] = tL))
          : (tL = tj[481]))
      let ou = il ? null : oe
      return (
        tj[482] !== nX ||
        tj[483] !== tD ||
        tj[484] !== m ||
        tj[485] !== E ||
        tj[486] !== i7 ||
        tj[487] !== nO ||
        tj[488] !== n9 ||
        tj[489] !== tk ||
        tj[490] !== ol ||
        tj[491] !== tO ||
        tj[492] !== os.top ||
        tj[493] !== oc ||
        tj[494] !== tP ||
        tj[495] !== tN ||
        tj[496] !== tL ||
        tj[497] !== ou ||
        tj[498] !== ne ||
        tj[499] !== i9
          ? ((tF = (0, i.jsxs)(nX, {
              offsetX: i9,
              presentedPlacement: i7,
              ...tk,
              ref: m,
              anchorY: nO,
              animatesPresentation: tD,
              isTranscriptVisible: ol,
              transcript: tO,
              transcriptHeight: ne,
              workAreaTop: os.top,
              onGeometryAnimationFrame: E,
              children: [oc, tP, tN, tL, n9, ou],
            })),
            (tj[482] = nX),
            (tj[483] = tD),
            (tj[484] = m),
            (tj[485] = E),
            (tj[486] = i7),
            (tj[487] = nO),
            (tj[488] = n9),
            (tj[489] = tk),
            (tj[490] = ol),
            (tj[491] = tO),
            (tj[492] = os.top),
            (tj[493] = oc),
            (tj[494] = tP),
            (tj[495] = tN),
            (tj[496] = tL),
            (tj[497] = ou),
            (tj[498] = ne),
            (tj[499] = i9),
            (tj[500] = tF))
          : (tF = tj[500]),
        tj[501] !== ir || tj[502] !== ot || tj[503] !== t_ || tj[504] !== on || tj[505] !== tT || tj[506] !== tF
          ? ((tq = (0, i.jsxs)("main", {
              "aria-hidden": ot,
              className: t_,
              "data-avatar-overlay-debug-window-border": on,
              inert: ir,
              children: [tT, tF],
            })),
            (tj[501] = ir),
            (tj[502] = ot),
            (tj[503] = t_),
            (tj[504] = on),
            (tj[505] = tT),
            (tj[506] = tF),
            (tj[507] = tq))
          : (tq = tj[507]),
        tq
      )
    }
    function n2(e) {
      let { coveredNotificationId: t, coveredNotificationWasVisible: a } = e
      return null == t || a ? [] : [t]
    }
    function n3(e) {
      let { coveredNotificationId: t } = e
      return null == t ? [] : [t]
    }
    function n4(e) {
      let { notificationId: t } = e
      return t
    }
    function n5() {
      return { sourceReleasedFlightIds: new Set(), stackCoveredFlightIds: new Set() }
    }
    function n6() {
      return new nU()
    }
    function n8(e) {
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
        { layout$: v } = (0, u.uO)(aK, h),
        y = (0, u.Ul)(v),
        w = tG.appServices.avatarOverlay,
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
                      .catch(n7)
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
          ? ((l = null == d ? (0, i.jsx)(n1, { ...c, layout: y }) : d.renderFrame({ ...c, layout: y })),
            (s[10] = c),
            (s[11] = y),
            (s[12] = d),
            (s[13] = l))
          : (l = s[13]),
        l
      )
    }
    function n7(e) {
      tJ.v.warning("Failed to finish Quick Chat focus", { safe: {}, sensitive: { error: e } })
    }
    var n9 = a("l00C"),
      oe = a("rljs"),
      ot = a("rk7m"),
      oa = a("RU3e"),
      oi = a("kx7U"),
      on = a("QLtS")
    let oo = (0, u.vU)(el.u, (e, { get: t, scope: a }) => {
        let i = t(oe.y2, e),
          n = t(oe.LH, e)
        return {
          queryKey: ["avatar-overlay-recent-threads", e],
          enabled:
            null != t(n9.u$, e) &&
            "live" === t(ot.l) &&
            (t(on.k) || !0 === t(oa.$O)) &&
            (e === tw.fI || "connected" === i || n?.code === "login-required"),
          staleTime: 0,
          queryFn: async () => (await (0, x.V)(a, e).refreshRecentConversations(), null),
        }
      }),
      or = (0, u.un)(el.u, ({ get: e }) => {
        let t = e(on.k) || !0 === e(oa.$O),
          a = e(oi.u8)
        return e(M.Dj).flatMap((i) =>
          (i === tw.fI || a?.some((t) => t.hostId === i && (t.autoConnect || "connected" === e(oe.y2, i)))) &&
          (e(oo, i), t)
            ? e(M.dl, i).flatMap((t) => {
                let a = e(ol, { hostId: i, threadId: t })
                return null == a ? [] : [a]
              })
            : [],
        )
      }),
      ol = (0, u.i1)(el.u, (e, { get: t }) => {
        let a = t(M.ok, e)
        if (null == a || (0, au.I3)(a.summary)) return null
        let i = t(i1.M, e),
          n = i?.at(-1),
          o = null == n ? null : t(i1.Ko, n),
          r =
            null == n
              ? []
              : (t(i1.hm, n) ?? []).flatMap((e) => {
                  let a = t(i1.mz, { ...n, itemId: e })
                  return null == a ? [] : [a]
                })
        return {
          state: a,
          latestTurn: null == o ? null : { ...o, items: r },
          turnCount: i?.length ?? 0,
          title: (0, ah.Lm)({ id: e.threadId, title: t(M.HX, e), fallbackSearchTitle: t(M.js, e), turns: null }),
          collaborationMode: t(M.PZ, e),
          pendingTurns: a.requests.length > 0 || null != a.pendingRequest ? t(i1.J7, e) : null,
        }
      })
    var os = a("FIph")
    function oc(e) {
      let t = e.getBoundingClientRect(),
        a = Math.max(0, t.left),
        i = Math.max(0, t.top),
        n = Math.min(window.innerWidth, t.right),
        o = Math.min(window.innerHeight, t.bottom)
      for (let t of (0, os.v9)(e)) {
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
    let ou = "[data-avatar-overlay-size='mascot']",
      od = "[data-avatar-overlay-size='notification-tray']",
      op = "[data-avatar-overlay-size='notification-tray-header']",
      om = "[data-avatar-overlay-size='notification-tray-list']",
      of = "[data-avatar-overlay-size='notification-stack-backing-layout']",
      oh = "[data-avatar-overlay-size='notification-stack-visible-layout']",
      og = "[data-avatar-overlay-native-surface-id]",
      ov =
        '[data-avatar-overlay-hit-region], [data-composer-overlay-floating-ui], [data-above-composer-portal] > *, [data-radix-popper-content-wrapper] > *, [data-menu-overlay], [role="dialog"], [role="alertdialog"], .codex-dialog-overlay',
      oy = ["focusin", "focusout", "pointerover", "pointerout"],
      ow = [
        ou,
        od,
        op,
        om,
        "[data-avatar-overlay-measure='notification-tray-row']",
        of,
        oh,
        og,
        "[data-avatar-overlay-activity-content]",
      ]
    function ob(e) {
      return Array.from(e.ownerDocument.querySelectorAll(ov))
    }
    function oC(e) {
      if (null != e.closest("[inert]")) return !1
      let t = window.getComputedStyle(e)
      return (
        "none" !== t.display && "hidden" !== t.visibility && "collapse" !== t.visibility && "none" !== t.pointerEvents
      )
    }
    function ox(e) {
      return "none" === window.getComputedStyle(e).display
    }
    var oA = a("PxlB"),
      oI = a("Y7mR"),
      oM = a("likb"),
      oS = a("hL9c")
    function oE(e) {
      let t,
        a,
        o,
        r = (0, n.c)(15),
        { onAttachmentRemoved: l } = e,
        s = (0, u.gh)(t4.PR),
        c = (0, u.Ul)(H.gy),
        d = (0, u.Ul)(H.a$),
        p = (0, u.Ul)(H.PA)
      if (r[0] !== c || r[1] !== l || r[2] !== s) {
        let e
        ;(r[4] !== l || r[5] !== s
          ? ((e = (e) =>
              (0, i.jsx)(
                oS.x,
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
                  oM.m,
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
    var oR = a("KPGh"),
      o_ = a("l2C7")
    let oT = (0, D.NN)(),
      ok = "first-awake-pet-notification-avatar-ids",
      oO = "avatar-overlay-activity-pills-visible",
      oP = (0, aa.m3)(oO, !0),
      oN = (0, u.i1)(el.u, (e, { get: t }) => {
        let a = new Map()
        for (let i of e) {
          let e = t(t7.o, i)
          null != e && a.set((0, ty.z)(i.threadId, i.hostId), e)
        }
        return a
      }),
      oL = [ov]
    function oF(e) {
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
            { data: r, isFetching: l } = (0, u._U)(o_.Zn, o ?? i.id),
            { isFetching: s, pet: c } = (0, u._U)(oR.lc, o ?? i.id),
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
              ? ((e = (0, q.so)(o, (0, a2.i0)(null == r ? void 0 : [r], null == c ? void 0 : [c]))),
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
            ? ((s = (0, i.jsx)(oq, { selectedAvatar: p, selectedAvatarId: m, presentation: d }, l)),
              (c[6] = d),
              (c[7] = p),
              (c[8] = m),
              (c[9] = l),
              (c[10] = s))
            : (s = c[10]),
          s)
    }
    function oq(e) {
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
        k,
        O,
        P = (0, n.c)(59),
        { presentation: N, selectedAvatar: F, selectedAvatarId: q } = e,
        D = (0, u.gh)(el.u),
        U = (0, u.Ul)(S.w),
        H = (0, y.A)(),
        B = (0, t8.r9)(),
        V = (0, ae.Zj)("665486075"),
        Y = (0, ae.Zj)("1532097315"),
        W = (0, ae.Zj)("1532120159"),
        G = (0, u.Ul)(oI.J),
        $ = W || G,
        Z = (0, t6.iK)(d.kWF.petVisible),
        ee = (0, u.Ul)(J.X4),
        et = !$ || (Z && !ee)
      P[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = { name: "chatgpt.quick-chat" }), (P[0] = t)) : (t = P[0])
      let ea = (0, u._U)(C.G, t),
        ei = (0, u.Ul)(L.k5),
        en = (V || $) && ea.isCapable && !ei,
        eo = (0, ae.Zj)(t9.x4),
        er = (0, z.x)(),
        es = (0, u.Ul)(tv.YV),
        ec = (0, u.Ul)(tF.uD),
        eu = (0, u.Ul)(on.k),
        { mascotWidthPx: ed } = (0, aG.cf)(),
        ep = (0, u.Ul)(or)
      P[1] !== D
        ? ((a = () =>
            (async function (e) {
              await Promise.all(
                e.get(M.Dj).map(async (t) => {
                  let { state: a, error: i } = (0, M.EW)(e, t)
                  ;(t === tw.fI || "connected" === a || i?.code === "login-required") &&
                    (await (0, x.V)(e, t)
                      .refreshRecentConversations()
                      .catch((e) => {
                        tJ.v.warning("recent_conversations_refresh_failed", {
                          safe: {},
                          sensitive: { error: e, hostId: t },
                        })
                      }))
                }),
              )
            })(D)),
          (P[1] = D),
          (P[2] = a))
        : (a = P[2])
      let em = a
      P[3] !== eu ? ((o = { enabled: eu, taskFilter: "current", limit: 20 }), (P[3] = eu), (P[4] = o)) : (o = P[4])
      let { data: ef, refetch: eh } = (0, j.si)(o)
      P[5] !== ef ? ((r = void 0 === ef ? [] : ef), (P[5] = ef), (P[6] = r)) : (r = P[6])
      let eg = r,
        ev = (0, j.DX)(),
        ey = (0, j.qK)()
      P[7] !== H || P[8] !== ep || P[9] !== U || P[10] !== ec || P[11] !== eg || P[12] !== B
        ? ((l = (function ({
            includeMcpElicitationCancelAction: e = !1,
            openAIFormElicitationsEnabled: t = !1,
            intl: a,
            localThreads: i,
            excludedConversationId: n,
            remoteTasks: o,
            threadDetailLevel: r = t8._e,
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
                if ((0, au.I3)(s)) return null
                let c = s.hostId ?? tw.fI,
                  u = c === tw.fI ? "local" : "remote-host",
                  d =
                    r.pendingRequest?.kind === "implementPlan" ||
                    ("needs_resume" === r.resumeState &&
                      s.threadRuntimeStatus?.type === "idle" &&
                      r.requests.every(as.zd))
                      ? r.requests.findLast(as.zd)
                      : void 0,
                  p =
                    (0, aC.HD)(r.requests, e.pendingTurns ?? [], a) ??
                    (null == d
                      ? null
                      : {
                          type: "implementPlan",
                          id: (0, as.a0)(d.params.turnId),
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
                          ? n?.type === "active" &&
                            n.activeFlags.includes("waitingOnApproval") &&
                            (0, aC.PZ)(e.requests)
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
                  f = (0, ap.i)(l),
                  h = f || "automation" === s.threadSource || !1,
                  g = h
                    ? (function (e) {
                        if (null == e) return null
                        let t = e.items,
                          a = (0, ap.i)(e)
                        for (let e = t.length - 1; e >= 0; e -= 1) {
                          let i = t[e]
                          if (
                            i?.type === "dynamicToolCall" &&
                            (null == i.namespace || "codex_app" === i.namespace) &&
                            i.tool === ax.n &&
                            "completed" === i.status &&
                            !0 === i.success
                          ) {
                            let e = (0, ax.a)(i.arguments)
                            if (null != e) return aU((0, ag.Dk)(e, !1).content)
                          }
                          if (i?.type !== "agentMessage") continue
                          let n = (0, ad.l)(i.text),
                            o = a ? (0, ac.mM)(n) : (0, ac.Fp)(n)
                          if (null != o) {
                            if ("DONT_NOTIFY" === o.decision) return null
                            return aU(o.notificationMessage ?? o.visibleText)
                          }
                          if ("commentary" !== i.phase) {
                            let e = aU(n)
                            if (null != e) return e
                          }
                        }
                        return null
                      })(l)
                    : aD(l?.items ?? [], i, f, o)
                if ((s.threadSource === aA.S || s.conversationId === n) && "waiting" !== m && "failed" !== m)
                  return null
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
                    showInNotificationTray:
                      !h || "waiting" === m || "failed" === m || (f && "review" === m) || null != g,
                    sortAtMs: l?.turnStartedAtMs ?? s.updatedAt,
                    status: m,
                    subtitle: g,
                    title: e.title ?? i.formatMessage(aj.newThread),
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
                                let i = aF(a.question) ?? aF(a.header)
                                return null == i || 0 === a.options.length
                                  ? null
                                  : {
                                      kind: "question",
                                      requestId: e.item.requestId,
                                      title: t.formatMessage(aR.askQuestion),
                                      prompt: i,
                                      options: a.options.map((e) => ({
                                        label: aF(e.label) ?? t.formatMessage(aR.option),
                                        description: aF(e.description),
                                        questionId: a.id,
                                      })),
                                    }
                              })(e, t)
                        case "approval":
                          return "exec" === e.item.type
                            ? (function (e, t) {
                                if ("exec" !== e.type) throw Error("Expected exec approval item")
                                if (null == e.approvalRequestId) return null
                                let a = aF(e.networkApprovalContext?.host ?? "")
                                return null != a
                                  ? {
                                      kind: "network",
                                      requestId: e.approvalRequestId,
                                      operation: t.formatMessage(aR.allowNetwork),
                                      target: a,
                                      title: t.formatMessage(aR.allowNetwork),
                                      actions: [
                                        {
                                          ariaLabel: t.formatMessage(aR.allowOnce),
                                          commandDecision: "accept",
                                          intent: "command-approval",
                                          label: t.formatMessage(aR.allow),
                                          tone: "primary",
                                        },
                                        {
                                          commandDecision: "decline",
                                          intent: "command-approval",
                                          label: t.formatMessage(aR.deny),
                                          tone: "danger",
                                        },
                                      ],
                                    }
                                  : {
                                      kind: "exec",
                                      requestId: e.approvalRequestId,
                                      operation: t.formatMessage(aR.runCommand),
                                      summary: aF(e.cmd.join(" && ")) ?? t.formatMessage(aR.command),
                                      title: t.formatMessage(aR.reviewCommand),
                                      actions: [
                                        {
                                          commandDecision: "accept",
                                          intent: "command-approval",
                                          label: t.formatMessage(aR.runOnce),
                                          tone: "primary",
                                        },
                                        {
                                          commandDecision: "decline",
                                          intent: "command-approval",
                                          label: t.formatMessage(aR.deny),
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
                                        t += aL(i.content)
                                        break
                                      case "delete":
                                        a += aL(i.content)
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
                                  operation: t.formatMessage(aR.applyChanges),
                                  summary: a[0]?.[0] ?? t.formatMessage(aR.oneFileChanged),
                                  title: t.formatMessage(aR.applyChanges),
                                  files: a.map(([e]) => e),
                                  fileCount: a.length,
                                  additions: i.additions,
                                  deletions: i.deletions,
                                  actions: [
                                    {
                                      fileDecision: "accept",
                                      intent: "file-approval",
                                      label: t.formatMessage(aR.apply),
                                      tone: "primary",
                                    },
                                    { intent: "open", label: t.formatMessage(aR.review), tone: "secondary" },
                                  ],
                                }
                              })(e.item, t)
                        case "permissionRequest":
                          return (function (e, t) {
                            var a
                            let i,
                              n,
                              { permissions: o } = e,
                              r = (0, aS.w)(o)[0]
                            if (null == r) return null
                            if ("network" === r.kind) i = n = t.formatMessage(aR.networkAccess)
                            else {
                              n = t.formatMessage(aR.fileAccess)
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
                                  ariaLabel: t.formatMessage(aR.allowOnce),
                                  label: t.formatMessage(aR.allow),
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
                                  label: t.formatMessage(aR.deny),
                                  permissionResponse: { permissions: {}, scope: "turn" },
                                  tone: "danger",
                                },
                              ],
                            }
                          })(e.item, t)
                        case "implementPlan":
                          return (function (e, t, a) {
                            let { planContent: i } = e,
                              n = aF(
                                i
                                  .split(/\r?\n/)
                                  .map((e) => e.replace(/^[-*]\s+\[[ x]\]\s+/i, "").trim())
                                  .find((e) => e.length > 0) ?? "",
                              )
                            return null == n
                              ? null
                              : {
                                  kind: "plan",
                                  operation: t.formatMessage(aR.plan),
                                  planContent: i,
                                  summary: n,
                                  title: t.formatMessage(aR.plan),
                                  turnId: e.turnId,
                                  actions: [
                                    {
                                      intent: "plan-start",
                                      label: t.formatMessage(aR.implementPlan),
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
                              l = aF(e.request.params.serverName),
                              s = aN(l) ?? l ?? t.formatMessage(aR.toolServer),
                              c = s,
                              u = null,
                              d = null
                            switch (r.kind) {
                              case "userVerification":
                                ;((i = r.title),
                                  (u = r.description),
                                  (d = [{ intent: "open", label: t.formatMessage(aR.review), tone: "primary" }]))
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
                                ;((i = t.formatMessage(aR.answerTarget, { target: s })), (u = aF(r.message)), (d = []))
                                break
                              case "mcpToolCall": {
                                let e = (0, aM.m)(r)
                                if (null != e) {
                                  ;((i = e.connectorName),
                                    (c = e.appDisplayName),
                                    (u =
                                      aF(e.subtitle) ??
                                      t.formatMessage(
                                        {
                                          id: "composer.computerUseAppApproval.title.chatgpt",
                                          defaultMessage: "Allow ChatGPT to use {appDisplayName}?",
                                          description:
                                            "Title asking whether ChatGPT may use an app through Computer Use",
                                        },
                                        { appDisplayName: e.appDisplayName },
                                      )),
                                    (n = t.formatMessage(aR.allow)),
                                    (o = "•"))
                                  break
                                }
                                let a = null == r.approvalPresentation ? null : (0, aI.hN)(r.approvalPresentation, t),
                                  l = aF(r.approval.connector_name) ?? aN(r.approval.connector_id) ?? s
                                c = l
                                let d = (0, aE.Dd)(r.approval)
                                if (null != d) {
                                  ;((i = t.formatMessage(d.descriptor, d.values)),
                                    (u = null == d.description ? null : t.formatMessage(d.description, d.values)))
                                  break
                                }
                                let p = (function (e) {
                                  let t = /\brun\s+tool\s+"([^"]+)"/i.exec(e)
                                  if (t?.[1] != null) return aF(t[1])
                                  let a = /\baccess\s+(.+?)\?*$/i.exec(e)
                                  return a?.[1] != null ? aF(a[1]) : null
                                })(r.message)
                                ;((i =
                                  null == p
                                    ? t.formatMessage(aR.allowTarget, { target: l })
                                    : t.formatMessage(aR.allowTarget, { target: p })),
                                  (u =
                                    aF(r.subtitle) ??
                                    (null == a
                                      ? null == r.toolParamsDisplay
                                        ? aT(r.approval.tool_params)
                                        : ak(r.toolParamsDisplay)
                                      : ak(a.toolParamsDisplay)) ??
                                    aF(a?.message) ??
                                    aF(r.message)))
                                break
                              }
                              case "toolSuggestion": {
                                let e =
                                  aF(r.suggestion.tool_name) ?? aN(r.suggestion.tool_id) ?? t.formatMessage(aR.tool)
                                ;((i =
                                  "enable" === r.suggestion.suggest_type
                                    ? t.formatMessage(aR.enableTool, { toolName: e })
                                    : t.formatMessage(aR.installTool, { toolName: e })),
                                  (c =
                                    "connector" === r.suggestion.tool_type
                                      ? t.formatMessage(aR.connector)
                                      : t.formatMessage(aR.plugin)),
                                  (u = aF(r.suggestion.suggest_reason)))
                                break
                              }
                              case "connectorAuth": {
                                let e = aF(r.connector.connector_name) ?? aN(r.connector.connector_id) ?? s,
                                  a = r.connector.auth_reason
                                ;((i =
                                  "missing_link" === a
                                    ? t.formatMessage(aR.connectTarget, { target: e })
                                    : "oauth_upgrade_required" === a
                                      ? t.formatMessage(aR.additionalAccessTarget, { target: e })
                                      : t.formatMessage(aR.reconnectTarget, { target: e })),
                                  (c = e),
                                  (u = aF(r.subtitle) ?? aF(r.message) ?? aO(r.url)),
                                  (d = [
                                    {
                                      intent: "open",
                                      label:
                                        "missing_link" === a
                                          ? t.formatMessage(aR.connect)
                                          : "oauth_upgrade_required" === a
                                            ? t.formatMessage(aR.updateAccess)
                                            : t.formatMessage(aR.reconnect),
                                      tone: "primary",
                                    },
                                  ]))
                                break
                              }
                              case "urlAction":
                                ;((c = aN(r.serverName) ?? aF(r.serverName) ?? s),
                                  (i = t.formatMessage(aR.openLink)),
                                  (u = aF(r.subtitle) ?? aO(r.url) ?? aF(r.message)),
                                  (d = [{ intent: "open", label: t.formatMessage(aR.openLink), tone: "primary" }]))
                                break
                              case "generic":
                                ;((i =
                                  (function ({ message: e, metadata: t }) {
                                    let a = (function (e) {
                                        if (null == e || Array.isArray(e) || "object" != typeof e) return null
                                        let t = e.reason
                                        return "string" != typeof t ? null : aF(t)
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
                                          "tool call needs your approval." === t ||
                                          "tool call needs your approval" === t
                                        )
                                      })(i)
                                      ? a
                                      : aF(i)
                                  })({ message: r.message, metadata: r.metadata }) ??
                                  t.formatMessage(aR.allowTarget, { target: s })),
                                  (u = aF(r.subtitle) ?? aT(r.toolParams) ?? aF(r.message)))
                            }
                            "high" === r.riskLevel &&
                              (d = [{ intent: "open", label: t.formatMessage(aR.review), tone: "primary" }])
                            let p = t.formatMessage(aR.allowTarget, { target: c }),
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
                                        label: t.formatMessage(aR.cancel),
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
                  title: e.title?.trim() || t.formatMessage(aj.newThread),
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
            openAIFormElicitationsEnabled: U,
            intl: H,
            localThreads: ep,
            excludedConversationId: ec,
            remoteTasks: eg,
            threadDetailLevel: B,
          })),
          (P[7] = H),
          (P[8] = ep),
          (P[9] = U),
          (P[10] = ec),
          (P[11] = eg),
          (P[12] = B),
          (P[13] = l))
        : (l = P[13])
      let ew = l
      P[14] !== H || P[15] !== D
        ? ((s = () => {
            D.get(X.Id).danger(
              H.formatMessage({
                id: "avatarOverlay.approvalReplyError",
                defaultMessage: "Couldn’t send your decision. Check the connection and try again.",
                description: "Shown when an approval decision from the floating avatar overlay could not be delivered",
              }),
              { errorAnalytics: { toastId: "avatarOverlay.approvalReplyError" } },
            )
          }),
          (P[14] = H),
          (P[15] = D),
          (P[16] = s))
        : (s = P[16])
      let eb = s
      P[17] !== em || P[18] !== D || P[19] !== ew || P[20] !== eb
        ? ((g = (e, t) => {
            let a = e.waitingRequest
            if (null != e.localConversationId && null != t) {
              let i = e.localConversationId,
                n =
                  ew.find((t) => {
                    let { key: a } = t
                    return a === e.notificationPreferenceId
                  })?.hostId ?? null
              switch (t.intent) {
                case "command-approval":
                  if (null != t.commandDecision && null != n && (a?.kind === "exec" || a?.kind === "network"))
                    return void (0, x.V)(D, n)
                      .replyWithCommandExecutionApprovalDecision(i, a.requestId, t.commandDecision)
                      .then(em, eb)
                  break
                case "file-approval":
                  if (null != t.fileDecision && null != n && a?.kind === "patch")
                    return void (0, x.V)(D, n)
                      .replyWithFileChangeApprovalDecision(i, a.requestId, t.fileDecision)
                      .then(em, eb)
                  break
                case "permission-response":
                  if (null != t.permissionResponse && null != n && a?.kind === "permission")
                    return void (0, x.V)(D, n)
                      .replyWithPermissionsRequestApprovalResponse(i, a.requestId, t.permissionResponse)
                      .then(() => {
                        em()
                      })
                  break
                case "mcp-elicitation":
                  if (null != t.mcpElicitationAction && null != n && a?.kind === "tool")
                    return void (0, x.V)(D, n)
                      .replyWithMcpServerElicitationResponse(i, a.requestId, (0, p.Se)(t.mcpElicitationAction))
                      .then(() => {
                        em()
                      })
                      .catch(oz)
                  break
                case "plan-start":
                  if (a?.kind === "plan" && null != n && null != n && null != t.planStartCollaborationMode)
                    return void (0, x.V)(D, n)
                      .updateThreadSettingsForNextTurn(i, { collaborationMode: t.planStartCollaborationMode })
                      .then(() => (0, x.V)(D, n).removePlanImplementationRequest(i, a.turnId))
                      .then(async () =>
                        (0, E.m)(D, n, i, {
                          turnTrigger: "avatar_implement_plan",
                          prompt: `${_.B}
${a.planContent}`,
                          serviceTier: await (0, T.e)(D, n, t.planStartCollaborationMode?.settings.model ?? null),
                        }),
                      )
                      .then(() => {
                        em()
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
          (P[17] = em),
          (P[18] = D),
          (P[19] = ew),
          (P[20] = eb),
          (P[21] = g))
        : (g = P[21])
      let eC = g
      P[22] !== em || P[23] !== D || P[24] !== ew
        ? ((v = (e, t) => {
            let a = e.waitingRequest
            if (null == e.localConversationId || a?.kind !== "question") return
            let i =
              ew.find((t) => {
                let { key: a } = t
                return a === e.notificationPreferenceId
              })?.hostId ?? null
            null != i &&
              (0, x.V)(D, i)
                .replyWithUserInputResponse(e.localConversationId, a.requestId, {
                  answers: { [t.questionId]: { answers: [t.label] } },
                })
                .then(() => {
                  em()
                })
          }),
          (P[22] = em),
          (P[23] = D),
          (P[24] = ew),
          (P[25] = v))
        : (v = P[25])
      let ex = v
      P[26] !== ev || P[27] !== ey || P[28] !== em || P[29] !== eh || P[30] !== D
        ? ((w = async (e, t) => {
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
                    ;(await (0, I.F)(D, { conversationId: a.conversationId, initiatedBy: "user" }),
                      Promise.resolve(em()).catch(oV))
                    return
                  case "cloud-task":
                    ;(await ev.mutateAsync(a.taskId), Promise.resolve(eh()).catch(oB))
                    return
                }
              case "submit-follow-up": {
                let e = t.prompt.trim()
                if (null == a || 0 === e.length) return
                switch (a.type) {
                  case "app-server-conversation": {
                    let t = D.get(M.qX, a.conversationId)
                    return (
                      await (0, E.m)(D, t, a.conversationId, {
                        turnTrigger: "avatar_follow_up",
                        prompt: e,
                        serviceTier: await (0, T.e)(D, t, null),
                      }),
                      Promise.resolve(em()).catch(oH),
                      "submitted"
                    )
                  }
                  case "cloud-task":
                    return (
                      await ey.mutateAsync({
                        taskId: a.taskId,
                        turnId: a.turnId,
                        prompt: e,
                        ideContext: "",
                        runEnvironmentInQaMode: !1,
                        images: null,
                      }),
                      Promise.resolve(eh()).catch(oU),
                      "submitted"
                    )
                }
              }
            }
          }),
          (P[26] = ev),
          (P[27] = ey),
          (P[28] = em),
          (P[29] = eh),
          (P[30] = D),
          (P[31] = w))
        : (w = P[31])
      let eA = w
      P[32] !== ep
        ? ((A = (e) =>
            ep.find((t) => {
              let { state: a } = t
              return a.summary.conversationId === e && (a.summary.hostId ?? tw.fI) === tw.fI
            })?.latestTurn?.items),
          (P[32] = ep),
          (P[33] = A))
        : (A = P[33])
      let eI = (V || $) && ea.isLoading && !ei
      return (
        P[34] !== em || P[35] !== D
          ? ((k = async (e, t, a, i, n, o, r, l, s) => {
              if (!D.get(C.G, { name: "chatgpt.quick-chat" }).isCapable) return "cancelled"
              if (null != i) {
                if (r) {
                  let t = D.get(e4.wz),
                    r = {
                      scope: D,
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
                  await (0, E.m)(D, i.hostId, i.conversationId, {
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
                    serviceTier: await (0, T.e)(D, i.hostId, null),
                    usePermissionSelection: (0, tZ.ie)(D, "4226282475") || void 0,
                  }),
                  n?.(),
                  await em(),
                  "sent"
                )
              }
              let u = c()(() => n?.()),
                d = (e) => {
                  "created" === e.status && "accepted" === e.firstTurn.status && u()
                },
                p = await (0, b.Nw)({
                  scope: D,
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
              if (("creation" === p.kind && d(p.result), await em(), "creation" === p.kind)) {
                let e = (0, R.c)(D, p.result)
                if (null != e) throw e
              }
              return "created"
            }),
            (P[34] = em),
            (P[35] = D),
            (P[36] = k))
          : (k = P[36]),
        P[37] !== eo ||
        P[38] !== er ||
        P[39] !== eC ||
        P[40] !== eA ||
        P[41] !== ex ||
        P[42] !== et ||
        P[43] !== ed ||
        P[44] !== N ||
        P[45] !== es ||
        P[46] !== en ||
        P[47] !== Y ||
        P[48] !== $ ||
        P[49] !== em ||
        P[50] !== eh ||
        P[51] !== F ||
        P[52] !== q ||
        P[53] !== ew ||
        P[54] !== A ||
        P[55] !== eI ||
        P[56] !== k ||
        P[57] !== B
          ? ((O = (0, i.jsx)(oY, {
              presentation: N,
              dictationCleanupEnabled: !1,
              dictationStreamingEnabled: eo,
              dictationSupportState: er,
              latestTurnItems: A,
              mascotWidthPx: ed,
              productLogger: es,
              quickChatEnabled: en,
              quickChatStashEnabled: Y,
              quickChatStyleEnabled: $,
              isPetVisible: et,
              isQuickChatLoading: eI,
              selectedAvatar: F,
              selectedAvatarId: q,
              sessions: ew,
              threadDetailLevel: B,
              onClosePet: oD,
              onMascotClick: oj,
              onRefreshLocalSessions: em,
              onRefreshRemoteSessions: eh,
              onRunNotificationControl: eA,
              onRunNotificationAction: eC,
              onSubmitQuestionOption: ex,
              onSubmitQuickChat: k,
            })),
            (P[37] = eo),
            (P[38] = er),
            (P[39] = eC),
            (P[40] = eA),
            (P[41] = ex),
            (P[42] = et),
            (P[43] = ed),
            (P[44] = N),
            (P[45] = es),
            (P[46] = en),
            (P[47] = Y),
            (P[48] = $),
            (P[49] = em),
            (P[50] = eh),
            (P[51] = F),
            (P[52] = q),
            (P[53] = ew),
            (P[54] = A),
            (P[55] = eI),
            (P[56] = k),
            (P[57] = B),
            (P[58] = O))
          : (O = P[58]),
        O
      )
    }
    function oj() {
      K.O1.dispatchMessage("open-current-main-window", {
        focusComposer: !0,
        stealFocus: !0,
        appEntryAttribution: { channel: "shortcut", source: "shortcut" },
      })
    }
    function oD() {
      K.O1.dispatchMessage("avatar-overlay-close", {})
    }
    function oU() {}
    function oH() {}
    function oB() {}
    function oV() {}
    function oz() {}
    function oY(e) {
      let t,
        a,
        o,
        r = (0, n.c)(7),
        [l] = (0, g.useState)(d.xa2)
      return (
        r[0] !== l ? ((t = (0, t4.p)(null, "main", null, l)), (r[0] = l), (r[1] = t)) : (t = r[1]),
        r[2] !== e ? ((a = (0, i.jsx)(oX, { ...e })), (r[2] = e), (r[3] = a)) : (a = r[3]),
        r[4] !== t || r[5] !== a
          ? ((o = (0, i.jsx)(u.Ui, { scope: t4.PR, value: t, children: a })), (r[4] = t), (r[5] = a), (r[6] = o))
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
        I,
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
        eI,
        eM,
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
        eX,
        eW,
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
        e8,
        e7,
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
        tA,
        t6,
        t7,
        t9,
        aa,
        ai = (0, n.c)(369),
        {
          presentation: an,
          dictationCleanupEnabled: ao,
          dictationStreamingEnabled: ar,
          dictationSupportState: al,
          firstAwakeNotificationEnabled: as,
          latestTurnItems: ac,
          isPetVisible: au,
          isQuickChatLoading: ad,
          mascotWidthPx: ap,
          productLogger: am,
          quickChatEnabled: af,
          quickChatStashEnabled: ah,
          quickChatStyleEnabled: ag,
          quickChatResetRevision: av,
          quickChatStashAppearance: ay,
          stashAttentionAnimation: aw,
          voiceOverride: ab,
          selectedAvatar: aC,
          selectedAvatarId: ax,
          sessions: aA,
          threadDetailLevel: aI,
          onClosePet: aM,
          onMascotClick: aS,
          onRefreshLocalSessions: aE,
          onRefreshRemoteSessions: aR,
          onRunNotificationControl: aT,
          onRunNotificationAction: ak,
          onSubmitQuestionOption: aO,
          onSubmitQuickChat: aP,
        } = e,
        aN = void 0 === as || as,
        aL = void 0 === au || au,
        aF = void 0 !== ad && ad,
        aq = void 0 !== ah && ah,
        aj = void 0 !== ag && ag,
        aD = void 0 === av ? 0 : av,
        aU = void 0 === aI ? t8._e : aI,
        aB = (0, u.gh)(t4.PR),
        aW = (0, g.useId)(),
        { layout$: a$, quickChatStashedEdge$: aQ, activityStackMaxViewportHeight$: aZ } = (0, u.uO)(aK, aW),
        aJ = an?.isStationary ?? !1,
        a0 = (0, u.Ul)(J.VI),
        a1 = (0, u.Ul)(tf.MR),
        a2 = a1 ?? a0,
        a3 = aL && (!af || null == a2),
        a4 = !a3,
        a5 = af && a4,
        a6 = af && (aj || a5),
        a8 = (0, u.Ul)(on.k)
      ai[0] !== aA ? ((t = aA.flatMap(rn)), (ai[0] = aA), (ai[1] = t)) : (t = ai[1])
      let a7 = (0, u._U)(oN, t),
        a9 = (0, u.Ul)(aV),
        ie = (0, u.Ul)(i5.P2),
        it = (0, u.Ul)(J.Fe),
        ia = (0, u._U)(tg.Fw, a2?.conversationId ?? null),
        ii = (0, u._U)(tg.R1, a2?.conversationId ?? null),
        io = null == ii ? null : `${ii.conversationId}:${ii.profile.updated_at}`,
        [ir, il] = (0, g.useState)(null),
        is = null != a2 && ia,
        ic = a6 && it && null != a0,
        iu = (0, ae.Zj)("620613358"),
        ip = (0, t3.w)(),
        [im, ih] = (0, g.useState)(!1),
        ig = aJ || iu || im
      ai[2] !== a3 || ai[3] !== aC
        ? ((a = { selectedAvatar: aC, isPetVisible: a3 }), (ai[2] = a3), (ai[3] = aC), (ai[4] = a))
        : (a = ai[4])
      let iv = (function (e) {
          let t = (0, u.gh)(el.u),
            a = (0, y.A)(),
            { accountId: i, authMethod: n, userId: r } = (0, tI.As)(),
            l = (0, tR.K5)(),
            { activeMode: s } = (0, tM.c)(),
            {
              agentMode: c,
              isAgentModePending: p,
              permissionProfileId: m,
              shouldSendPermissionOverrides: f,
            } = (0, tS.Ap)({ conversationId: null, cwdOverride: l.cwd ?? void 0, hostId: l.hostId }),
            { serviceTierSettings: h } = (0, tE.k)(),
            { isCapable: v, isLoading: w } = (0, u._U)(C.G, { name: "voice.realtime" }),
            b = (0, u.Ul)(tY.g_),
            A = (0, u.Ul)(tO.e),
            I = v && (b?.session.greetingEnabled === !0 || A?.session.greetingEnabled === !0) && "chatgpt" === n,
            { data: S } = (0, t$.uA)({ accountId: i, enabled: I, userId: r }),
            E = (0, u.Ul)(tF.uD),
            R = (0, u.Ul)(tH.gL),
            _ = (0, u.Ul)(tF.Fe),
            T = (0, u.Ul)(tF.Xz),
            k = (0, u.Ul)(tF.RQ),
            O = (0, u.Ul)(tF.Bw),
            P = (0, u.Ul)(tB._A),
            N = (0, u.Ul)(tQ.B),
            [L, q] = (0, g.useState)(!1),
            [j, D] = (0, g.useState)(null),
            U = (0, g.useRef)(!1),
            H = (0, g.useRef)(!1),
            B = (0, g.useRef)(0),
            V = (0, g.useRef)(null),
            z = (0, g.useRef)(null),
            Y = (0, g.useRef)(!1),
            X = (0, g.useRef)(!1),
            [W, G] = (0, g.useState)(!1),
            [$, Q] = (0, g.useState)(null),
            Z = (0, g.useRef)(null),
            J = null != j && "starting" === O,
            ee = null != b,
            et =
              v &&
              ee &&
              !W &&
              null == E &&
              "inactive" === O &&
              navigator.mediaDevices?.getUserMedia != null &&
              "u" > typeof RTCPeerConnection,
            ea = !l.isActiveWorkspaceRootLoading && !p,
            ei = et && ea,
            en = () => {
              null == t.get(tF.uD) &&
                "inactive" === t.get(tF.Bw) &&
                (q(!1), tG.appServices.realtimeVoiceRuntime?.cancelRealtimeSessionStart())
            },
            eo = () => {
              ;(null != Z.current && (window.clearTimeout(Z.current), (Z.current = null)), Q(null))
            },
            er = (e) => {
              ;(eo(),
                Q(
                  e instanceof DOMException && "NotAllowedError" === e.name
                    ? a.formatMessage({
                        id: "composer.realtime.microphonePermissionError",
                        defaultMessage: "Microphone access is required to start voice chat",
                        description: "Error shown when microphone permission blocks realtime voice startup",
                      })
                    : (0, d.Rt_)(e) ||
                        a.formatMessage({
                          id: "avatarOverlay.realtime.connectionError",
                          defaultMessage: "Connection failed",
                          description: "Error shown under the floating avatar voice button when voice startup fails",
                        }),
                ),
                (Z.current = window.setTimeout(() => {
                  ;((Z.current = null), Q(null))
                }, d.zeK)))
            },
            es = async (i) => {
              let n = null == i.productExperience ? void 0 : t0[i.productExperience],
                r = B.current + 1
              ;((B.current = r), V.current?.(), (V.current = null))
              let u =
                  "avatar_overlay_button_new_thread" === i.source && null != e
                    ? (0, F.K)(e.selectedAvatar.id, e.isPetVisible)
                    : void 0,
                p = u === o.CodexMiniAppearance.CODEX_MINI_APPEARANCE_DEFAULT_PET ? e?.selectedAvatar.id : void 0,
                g = (0, tX.m5)(i),
                y,
                w = "exact" === g.type,
                b = "composer_button_existing_thread" === i.source && !0 === i.isTransfer,
                C = "composer_button_new_thread" === i.source,
                A = w ? g.locator.hostId : g.hostId,
                I = (0, tX.aC)(t, A, i.productExperience),
                R = w && (await (0, tV.VR)(t, g.locator))
              if (B.current !== r) return
              let _ = w && ((!b && "in-window" === i.preferredPresentationSurface) || R) ? t.get(tO.e) : t.get(tY.g_),
                T = null != _,
                k = "global-overlay" !== i.preferredPresentationSurface
              if (C && null != E) {
                Y.current = !0
                try {
                  await tL.E.stop(t, E)
                } catch (e) {
                  throw ((Y.current = !1), e)
                }
              } else if (k && null != E && !b) {
                let e = t.get(tB._A),
                  a =
                    "inactive" !== e.phase && e.locator.conversationId === E
                      ? e.locator
                      : { conversationId: E, hostId: A }
                ;((0, tz._x)({
                  locator: a,
                  surface: "in-window" === e.preferredPresentationSurface ? "in-window" : "main-thread",
                }),
                  K.O1.dispatchMessage("open-in-main-window", { path: (0, d._RT)(a.conversationId) }))
                return
              }
              if (B.current !== r) return
              if (
                !(C || b
                  ? v &&
                    T &&
                    !W &&
                    null == t.get(tF.uD) &&
                    "inactive" === t.get(tF.Bw) &&
                    navigator.mediaDevices?.getUserMedia != null &&
                    "u" > typeof RTCPeerConnection
                  : et && T) ||
                null == _
              ) {
                let e = "session_already_starting"
                v
                  ? null != _ && T
                    ? navigator.mediaDevices?.getUserMedia == null
                      ? (e = "microphone_unavailable")
                      : "u" < typeof RTCPeerConnection && (e = "webrtc_unavailable")
                    : (e = "configuration_not_ready")
                  : (e = "voice_disabled")
                let r = Error(
                  a.formatMessage(
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
                    ;((0, tj.o)(
                      r,
                      o.CodexRealtimeVoiceStartupMediaFailureReason
                        .CODEX_REALTIME_VOICE_STARTUP_MEDIA_FAILURE_REASON_MEDIA_APIS_UNAVAILABLE,
                    ),
                      new tD.F6(t, crypto.randomUUID(), i.source, n).fail(
                        o.CodexRealtimeVoiceStartupFailureReason
                          .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_MICROPHONE_OR_MEDIA_FAILURE,
                        r,
                      ))
                  } catch {}
                throw (k || er(r), r)
              }
              if (!w && !ea) {
                let e = Error(
                  a.formatMessage({
                    id: "avatarOverlay.realtime.workspaceNotReady",
                    defaultMessage: "Voice chat cannot start until the workspace is ready",
                    description:
                      "Error shown when realtime voice startup cannot create a thread because the workspace or permissions are still loading",
                  }),
                )
                throw (k || er(e), e)
              }
              R && (0, tT.qo)(t)
              let O = (0, tZ.ie)(t, "765410072"),
                P =
                  ("composer_button_existing_thread" === i.source && i.voiceModeSupported) || (0, tW.d)(t.get(M.B0, A)),
                L = _.existingThreadVoiceEnabled && P,
                j = L ? _ : { ..._, existingThreadVoiceEnabled: !1 },
                X = O
                  ? `${j.session.basePrompt}

${tq.X7}`
                  : j.session.basePrompt,
                $ = crypto.randomUUID()
              z.current?.cancel(
                o.CodexRealtimeVoiceStartupFailureReason.CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_SUPERSEDED,
                o.CodexRealtimeVoiceStartupCancellationOrigin
                  .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_SUPERSEDED,
              )
              let Q = new tD.F6(t, $, i.source, n)
              ;((z.current = Q), q(k), G(!0), D(null), (U.current = t.get(tF.Fe)), (H.current = t.get(tF.Xz)))
              let Z = !0,
                J = null,
                ee = () => {
                  Z &&
                    ((Z = !1),
                    J?.then((e) => {
                      e.stop()
                    }).catch(() => {}))
                },
                ei = () => (
                  null != J ||
                    (J = tD.F6.trackOperation(
                      Q,
                      o.CodexRealtimeVoiceStartupOperation.CODEX_REALTIME_VOICE_STARTUP_OPERATION_MICROPHONE_SETUP,
                      () =>
                        tN.N.start(Q.createMediaSetupAnalytics(), () => {
                          if (B.current !== r) throw new DOMException("Voice startup was cancelled", "AbortError")
                          if (R)
                            try {
                              ;(0, tT.qo)(t)
                            } catch {
                              throw (
                                ed("user_cancelled"),
                                new DOMException("Voice startup was cancelled", "AbortError")
                              )
                            }
                        }),
                    ))
                      .then((e) => {
                        B.current !== r
                          ? ee()
                          : (Q.mark(
                              o.CodexRealtimeVoiceStartupPhase.CODEX_REALTIME_VOICE_STARTUP_PHASE_MICROPHONE_READY,
                            ),
                            e.setMuted(U.current),
                            D(e))
                      })
                      .catch(() => {}),
                  J
                ),
                eo = () => {
                  if (((0, tT.qo)(t), null != V.current)) return
                  let e = t.watch(({ get: e }) => {
                    B.current !== r || "active" === e(tF.Bw) || e(tT.VK) || ed("user_cancelled")
                  })
                  V.current = () => {
                    ;(e(), ee())
                  }
                }
              ;(R && eo(), (w && !R) || ei())
              let el = !1,
                ec = !1,
                ep =
                  o.CodexRealtimeVoiceStartupFailureReason
                    .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_THREAD_OPEN_OR_CREATE_FAILURE
              await (async () => {
                try {
                  let e = "composer_button_new_thread" === i.source ? i.memoryPreferences : (t.get(t_.bz) ?? void 0),
                    n =
                      "composer_button_new_thread" === i.source && void 0 !== i.activeCollaborationMode
                        ? i.activeCollaborationMode
                        : s
                  ;(await (0, tP.x)({
                    scope: t,
                    startupAnalytics: Q,
                    activeCollaborationMode:
                      null == n || O || null != y
                        ? n
                        : {
                            mode: "default",
                            settings: {
                              model: n.settings.model,
                              reasoning_effort: n.settings.reasoning_effort,
                              developer_instructions: null,
                            },
                          },
                    activateRealtimeConversation: async (e, n) => {
                      if (w && !R) {
                        if (((R = await (0, tV.VR)(t, { hostId: A, conversationId: e })), B.current !== r))
                          return "app_cancelled"
                        R && eo()
                      }
                      let l =
                        b && "in-window" === i.preferredPresentationSurface && !t.get(tk.Rr, { hostId: A, threadId: e })
                          ? "main-thread"
                          : i.preferredPresentationSurface
                      ;(Q.mark(o.CodexRealtimeVoiceStartupPhase.CODEX_REALTIME_VOICE_STARTUP_PHASE_THREAD_READY),
                        (ep =
                          o.CodexRealtimeVoiceStartupFailureReason
                            .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_MICROPHONE_OR_MEDIA_FAILURE))
                      let s = await ei().catch((e) => {
                        if (B.current !== r && e instanceof DOMException && "AbortError" === e.name) return null
                        if (k && e instanceof DOMException && "NotAllowedError" === e.name) {
                          let e = Error(tV.zW)
                          throw (
                            Q.recordErrorOperation(
                              e,
                              o.CodexRealtimeVoiceStartupOperation
                                .CODEX_REALTIME_VOICE_STARTUP_OPERATION_MICROPHONE_SETUP,
                            ),
                            (0, tj.o)(
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
                        B.current !== r ||
                        ((ep =
                          o.CodexRealtimeVoiceStartupFailureReason
                            .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_VOICE_OR_CONFIG_PREPARATION_FAILURE),
                        null != n && (0, t_.To)(t, e, n, void 0),
                        (L && w) ||
                          N?.[tK.hW] !== !0 ||
                          (await tD.F6.trackOperation(
                            Q,
                            o.CodexRealtimeVoiceStartupOperation
                              .CODEX_REALTIME_VOICE_STARTUP_OPERATION_THREAD_SETTINGS_UPDATE,
                            () => (0, x.V)(t, A).updateThreadSettingsForNextTurn(e, { summary: "detailed" }),
                          )),
                        B.current !== r)
                      )
                        return (
                          Q.cancel(
                            o.CodexRealtimeVoiceStartupFailureReason
                              .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_SUPERSEDED,
                            o.CodexRealtimeVoiceStartupCancellationOrigin
                              .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_SUPERSEDED,
                          ),
                          "app_cancelled"
                        )
                      if (R)
                        try {
                          ;(0, tT.qo)(t)
                        } catch {
                          return (await ed("user_cancelled"), "app_cancelled")
                        }
                      ;((Z = !1),
                        (ep =
                          o.CodexRealtimeVoiceStartupFailureReason.CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_UNKNOWN))
                      let c = await tL.E.start(t, {
                        analyticsSessionId: $,
                        codexResponseItemPrefix: j.session.codexResponseItemPrefix,
                        codexResponsesAsItems: j.session.codexResponsesAsItems,
                        conversationId: e,
                        hostId: A,
                        handoffContext: "composer_button_existing_thread" === i.source ? i.handoffContext : void 0,
                        isWorkCall: I,
                        initiallyMicrophoneMuted: U.current,
                        initiallyMuted: H.current,
                        isTransfer: b,
                        microphone: s,
                        outputModality: "audio",
                        onTransfer: async (a, n) => {
                          let o = t.get(tz.qE)?.surface ?? i.preferredPresentationSurface
                          try {
                            if (
                              a.hostId === d.iwv &&
                              (await Promise.all([
                                (0, x.V)(t, a.hostId).loadRecentConversationIds([a.conversationId]),
                                t.query.getOrFetch(eu.cloudAeonByThreadId$, a.conversationId),
                              ]),
                              t.get(tF.uD) !== e)
                            )
                              return
                            ;((Y.current = !0),
                              "global-overlay" !== o &&
                                K.O1.dispatchMessage("open-in-main-window", { path: (0, d._RT)(a.conversationId) }),
                              await tL.E.stop(t, e, void 0, { playEndSound: !1, preserveGoal: !0 }),
                              (0, tU.ao)(),
                              await es({
                                handoffContext: n,
                                isTransfer: !0,
                                locator: a,
                                preferredPresentationSurface: o,
                                source: "composer_button_existing_thread",
                                productExperience: i.productExperience,
                                voiceModeSupported:
                                  a.hostId === A ? P : a.hostId === d.iwv || (0, tW.d)(t.get(M.B0, a.hostId)),
                              }))
                          } catch (t) {
                            let e = { stack: [], error: void 0, hasError: !1 }
                            try {
                              throw (
                                (Y.current = !1),
                                (0, tx.mS)(e, tG.appServices.realtimeVoice?.cancelTransfer(), !1),
                                er(t),
                                t
                              )
                            } catch (t) {
                              ;((e.error = t), (e.hasError = !0))
                            } finally {
                              ;(0, tx.hk)(e)
                            }
                          }
                        },
                        preferredPresentationSurface: l,
                        prompt: X,
                        realtimeContinuity: j.session.continuity,
                        realtimeContinuityPrompt: j.session.continuityPrompt,
                        realtimeEndInstructions: L ? j.session.realtimeEndInstructions : void 0,
                        realtimeMemorySummaryEnabled: j.session.memorySummaryEnabled && !0 === t.get(t_.Wk, e),
                        realtimeMemorySummaryPrompt: j.session.memorySummaryPrompt,
                        realtimeSessionOverrides: j.session.overrides,
                        realtimeStartInstructions: L ? j.session.realtimeStartInstructions : void 0,
                        source: i.source,
                        miniAppearance: u,
                        miniBuiltInPetId: p,
                        startupAnalytics: Q,
                        greetingEnabled: j.session.greetingEnabled,
                        userName: S?.displayName ?? null,
                      })
                      if (((Y.current = !1), (ec = "active" === c), "active" !== c)) {
                        if ("user_cancelled" === c || B.current !== r) return c
                        if ("busy" === c)
                          throw (
                            (ep =
                              o.CodexRealtimeVoiceStartupFailureReason
                                .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_BUSY_OR_HOST_CLAIM_FAILURE),
                            Error(
                              a.formatMessage({
                                id: "avatarOverlay.realtime.sessionAlreadyStarting",
                                defaultMessage: "Voice chat is already active or starting in another window",
                                description:
                                  "Error shown when a requested realtime voice session cannot start because another session owns the host",
                              }),
                            )
                          )
                        throw Error(
                          a.formatMessage({
                            id: "avatarOverlay.realtime.startInterrupted",
                            defaultMessage: "Voice chat was interrupted before the session could start",
                            description:
                              "Error shown when realtime voice startup is unexpectedly cancelled without the user cancelling it",
                          }),
                        )
                      }
                      return (Q.mark(o.CodexRealtimeVoiceStartupPhase.CODEX_REALTIME_VOICE_STARTUP_PHASE_ACTIVE),
                      B.current !== r)
                        ? (tL.E.cancelStart(t), "app_cancelled")
                        : (k && (0, tz._x)({ locator: { conversationId: e, hostId: A }, surface: "main-thread" }),
                          "active")
                    },
                    agentMode: c,
                    currentLocalExecutionCwd: l.cwd ?? "",
                    intent: g,
                    memoryPreferences: e,
                    onStartError: (e) => {
                      k || er(e)
                    },
                    serviceTier: h.serviceTierForRequest,
                    permissionProfileId: m,
                    projectId: "composer_button_new_thread" === i.source ? i.projectId : void 0,
                    pageCompanion: y,
                    shouldSendPermissionOverrides: f,
                    treatment: j,
                    threadToolsEnabled: !0,
                    workspaceRootsForLocalExecution: [],
                  }),
                    ec ||
                      Q.cancel(
                        B.current === r
                          ? o.CodexRealtimeVoiceStartupFailureReason
                              .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_USER_CANCELLED
                          : o.CodexRealtimeVoiceStartupFailureReason
                              .CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_SUPERSEDED,
                        B.current === r
                          ? o.CodexRealtimeVoiceStartupCancellationOrigin
                              .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_UNKNOWN
                          : o.CodexRealtimeVoiceStartupCancellationOrigin
                              .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_SUPERSEDED,
                      ))
                } catch (e) {
                  throw ((el = !0), q(!1), ec || Q.fail(ep, e), e)
                }
              })().finally(() => {
                ;(B.current === r && (V.current?.(), (V.current = null)),
                  Z && B.current === r && ee(),
                  B.current === r && (G(!1), el || en()),
                  z.current === Q && (z.current = null))
              })
            },
            ec = (0, g.useEffectEvent)(es),
            ed = async (e) => {
              let a = V.current
              ;((V.current = null),
                null == a ? j?.stop() : a(),
                z.current?.cancel(
                  o.CodexRealtimeVoiceStartupFailureReason.CODEX_REALTIME_VOICE_STARTUP_FAILURE_REASON_USER_CANCELLED,
                  "startup_timeout" === e
                    ? o.CodexRealtimeVoiceStartupCancellationOrigin
                        .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_HOST_TIMEOUT
                    : o.CodexRealtimeVoiceStartupCancellationOrigin
                        .CODEX_REALTIME_VOICE_STARTUP_CANCELLATION_ORIGIN_USER_ACTION,
                ),
                (B.current += 1),
                D(null),
                G(!1),
                q(!1))
              let i = t.get(tF.uD)
              ;(tL.E.cancelStart(t, e), null == i && (t.set(tF.Fe, !1), t.set(tF.Xz, !1)))
            },
            ep = (0, g.useEffectEvent)(ed)
          ;((0, g.useEffect)(
            () => () => {
              let e = z.current
              e?.finishSession("app_unmounted")
              let a = t.get(tF.Bw)
              ;("active" === a || "stopping" === a
                ? ("stopping" === a && (B.current += 1), V.current?.(), (V.current = null))
                : ep("user_cancelled"),
                null != Z.current && window.clearTimeout(Z.current))
            },
            [t],
          ),
            (0, g.useEffect)(() => {
              let e = { stack: [], error: void 0, hasError: !1 }
              try {
                let t = tG.appServices.realtimeVoiceRuntime
                if (null == t || !ee || w) return
                return (
                  (0, tx.mS)(
                    e,
                    t.registerRealtimeStarter(
                      async (e) => {
                        await ec(e)
                      },
                      async (e) => {
                        await ep(e)
                      },
                      ea,
                    ),
                    !1,
                  ),
                  () => {
                    let e = { stack: [], error: void 0, hasError: !1 }
                    try {
                      ;(0, tx.mS)(e, t.unregisterRealtimeStarter(), !1)
                    } catch (t) {
                      ;((e.error = t), (e.hasError = !0))
                    } finally {
                      ;(0, tx.hk)(e)
                    }
                  }
                )
              } catch (t) {
                ;((e.error = t), (e.hasError = !0))
              } finally {
                ;(0, tx.hk)(e)
              }
            }, [ea, ee, w]))
          let em = () => {
            q(!1)
          }
          ;((0, K.JX)("avatar-overlay-explicit-pet-opened", em),
            (0, K.JX)("notch-overlay-expand", em),
            (0, g.useLayoutEffect)(() => {
              if ("inactive" !== O) {
                X.current = !0
                return
              }
              if (Y.current) {
                ;((Y.current = !1), (X.current = !1))
                return
              }
              if (X.current) {
                if (W) {
                  X.current = !1
                  return
                }
                ;((X.current = !1), tG.appServices.realtimeVoiceRuntime?.completeRealtimeSession())
              }
            }, [W, O]))
          let ef = O
          return (
            ("active" !== O && "inactive" !== P.phase && null != P.transferDestination) || (W && "inactive" === O)
              ? (ef = "starting")
              : "inactive" === O && L && (ef = "stopping"),
            {
              canStart: ei,
              caption: R,
              conversationId: E,
              isMicrophoneMuted: _,
              isMuted: T,
              phase: ef,
              startError: $,
              start: async () => {
                if (ei) {
                  eo()
                  try {
                    await tG.appServices.realtimeVoiceRuntime?.requestRealtimeStart(
                      { source: "avatar_overlay_button_new_thread" },
                      void 0,
                    )
                  } catch (e) {
                    ;(tJ.v.error("Failed to request realtime voice from the avatar overlay", {
                      safe: {},
                      sensitive: { error: e },
                    }),
                      er(e))
                  }
                }
              },
              stop: async () => {
                let e = t.get(tF.uD),
                  a = t.get(tF.Bw)
                if (W && (null == e || "active" !== a)) {
                  ;(await ed("user_cancelled"), en())
                  return
                }
                null != e && "inactive" !== a && (await tL.E.stop(t, e))
              },
              voiceActivity: k,
              toggleMicrophoneMute: () => {
                if (J) {
                  let e = !t.get(tF.Fe)
                  ;((U.current = e), null == E ? (j.setMuted(e), t.set(tF.Fe, e)) : tL.E.toggleMicrophoneMute(t, E))
                  return
                }
                null != E && "active" === O && ((U.current = !t.get(tF.Fe)), tL.E.toggleMicrophoneMute(t, E))
              },
              toggleMute: () => {
                if (J) {
                  ;((H.current = !t.get(tF.Xz)), null == E ? t.set(tF.Xz, H.current) : tL.E.toggleMute(t, E))
                  return
                }
                null != E && "active" === O && ((H.current = !t.get(tF.Xz)), tL.E.toggleMute(t, E))
              },
            }
          )
        })(a),
        iy = ab ?? iv,
        iw = (0, u.Ul)(tH.Rq),
        ib = im && "active" !== iy.phase,
        iC = "inactive" === iy.phase && ib ? "starting" : iy.phase,
        ix = (0, u.Ul)(tB._A),
        iA = "inactive" !== ix.phase && null != ix.transferDestination,
        iI = (0, u.Ul)(tz.qE),
        iM = iI?.surface ?? null,
        iS = ip && "global-overlay" === iM && iI?.handoff != null,
        iE = null == ix || "inactive" === ix.phase ? null : ix.locator,
        iR = ab?.isSessionActive ?? (null != ix && "inactive" !== ix.phase)
      ai[5] !== iy.conversationId || ai[6] !== ix || ai[7] !== ab
        ? ((r =
            null == ab
              ? (0, tB.FM)(ix, iy.conversationId)
              : "active" === ab.phase || ("stopping" === ab.phase && "idle" !== ab.voiceActivity)),
          (ai[5] = iy.conversationId),
          (ai[6] = ix),
          (ai[7] = ab),
          (ai[8] = r))
        : (r = ai[8])
      let i_ = r,
        iT = "inactive" !== iC && (iR || "starting" === iy.phase) && (null == iM || "global-overlay" === iM),
        [ik, iN] = (0, g.useState)(!1),
        [iL, iF] = (0, g.useState)(null),
        iq = ab?.petOpenIntent ?? ik,
        ij = iT ? iC : "inactive",
        iD = !a5 && (ip ? iR && !iT && !iq : (iR || iT) && !(iu && (iT || iq))),
        iU = iu && iT && iy.isMuted,
        iH = iU ? (iw ?? iy.caption) : null
      ai[9] !== iE ? ((s = { locator: iE, hideWhileResponding: !0 }), (ai[9] = iE), (ai[10] = s)) : (s = ai[10])
      let iB = (0, u._U)(t1.l, s)
      ai[11] !== iR || ai[12] !== iE || ai[13] !== ip
        ? ((c = {
            enabled: iR,
            isEligible: !0,
            locator: iE,
            surface: "global-overlay",
            usesNativeOverlayTransition: ip,
          }),
          (ai[11] = iR),
          (ai[12] = iE),
          (ai[13] = ip),
          (ai[14] = c))
        : (c = ai[14])
      let iV = (0, tz.cr)(c),
        iz = (0, tz.UB)(iE),
        iY = iE?.hostId
      ai[15] !== iT || ai[16] !== iY
        ? ((p = { enabled: iT, hostId: iY }), (ai[15] = iT), (ai[16] = iY), (ai[17] = p))
        : (p = ai[17])
      let { data: iX } = (0, k.Ad)(p),
        iW = (0, y.A)(),
        iG = (0, u.Ul)(t2.b_),
        i$ = (0, u.Ul)(aQ),
        iK = (0, u.Ul)(aZ),
        [iQ, iZ] = (0, g.useState)(!0),
        iJ = (0, u.Ul)(oP) ?? (0, at.TB)(oO, !0),
        i0 = ic || iJ,
        [i1, i2] = (0, g.useState)(null),
        i3 = i0 || null != i1,
        [i4, i6] = (0, g.useState)(!1),
        [i8] = (0, g.useState)(ri),
        [i7, i9] = (0, g.useState)(!1),
        [ne, nt] = (0, g.useState)(!1),
        [na, ni] = (0, g.useState)(!1),
        nn = ab?.petControlsAppearance ?? d.JCZ,
        [no, nr] = (0, g.useState)(""),
        [nl, ns] = (0, g.useState)(null),
        nc = (0, g.useRef)(0)
      ;(null != nl && (nl.agentId !== a2?.id || nl.resetRevision !== aD) && ns(null),
        ai[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = { appshots: [], threadTarget: null }), (ai[18] = m))
          : (m = ai[18]))
      let [nu, nd] = (0, g.useState)(m),
        { appshots: np, threadTarget: nm } = nu,
        nf = (0, u.Ul)(H.gy),
        nh = (0, u.Ul)(H.PA),
        ng = (0, u.Ul)(H.a$),
        nv = nf.length > 0 || nh.length > 0 || ng.length > 0,
        ny = (0, g.useRef)(0),
        nw = (0, g.useRef)(0)
      ai[19] === Symbol.for("react.memo_cache_sentinel") ? ((f = new Set()), (ai[19] = f)) : (f = ai[19])
      let nb = (0, g.useRef)(f),
        [nC] = (0, g.useState)(ra)
      ai[20] === Symbol.for("react.memo_cache_sentinel") ? ((b = new Map()), (ai[20] = b)) : (b = ai[20])
      let nx = (0, g.useRef)(b),
        nA = (0, tw.Qz)(tw.fI)
      ai[21] === Symbol.for("react.memo_cache_sentinel")
        ? ((I = { origin: void 0, selectedOrbit: null, reply: void 0 }), (ai[21] = I))
        : (I = ai[21])
      let [nI, nM] = (0, g.useState)(I),
        nS = (0, u.Ul)(V.$X),
        nE = nI.selectedOrbit,
        nR = (nS ? nE : a2) ?? nm,
        n_ = nR?.conversationId ?? null
      ai[22] !== iW || ai[23] !== aB || ai[24] !== n_
        ? ((S = { scope: aB, conversationId: n_, intl: iW }), (ai[22] = iW), (ai[23] = aB), (ai[24] = n_), (ai[25] = S))
        : (S = ai[25])
      let { supportsImageInputs: nT, notifyImageInputUnsupported: nk } = (0, W.I)(S),
        nO = () => (
          (0, V.td)(aB, nC),
          nG(!1),
          (0, U.F)({
            scope: aB,
            attachmentGeneration: nw,
            canceledPendingFileAttachmentIds: nb.current,
            canCopyBrowserFileAttachments: !1,
            composerMode: "local",
            executionHostConfig: nA,
            executionHostId: tw.fI,
            getRestrictedRemoteHostImageSizeContext: () => ({
              appshotContexts: np,
              imageAttachments: aB.get(H.gy),
              commentAttachments: [],
              mcpAppModelContextAttachments: [],
            }),
            intl: iW,
            notifyImageInputUnsupported: nk,
            supportsImageInputs: nT,
            setAddedFiles: (e) => (0, H.Rh)(aB, "addedFiles", e),
            setFileAttachments: (e) => (0, H.Rh)(aB, "fileAttachments", e),
            setImageAttachments: (e) => (0, H.Rh)(aB, "imageAttachments", e),
            setPendingFileAttachments: (e) => aB.set(V.UF, e),
          })
        )
      ;(ai[26] !== aB
        ? ((E = () => () => {
            ;((nw.current = nw.current + 1), (ny.current = ny.current + 1), nx.current.clear(), (0, V.Se)(aB))
          }),
          (R = [aB, nw]),
          (ai[26] = aB),
          (ai[27] = E),
          (ai[28] = R))
        : ((E = ai[27]), (R = ai[28])),
        (0, g.useEffect)(E, R),
        ai[29] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = { pendingCaptureCount: 0, response: void 0, startsCollapsed: !1 }), (ai[29] = _))
          : (_ = ai[29]))
      let [nP, nN] = (0, g.useState)(_)
      ai[30] === Symbol.for("react.memo_cache_sentinel") ? ((T = new Map()), (ai[30] = T)) : (T = ai[30])
      let nL = (0, g.useRef)(T),
        nF = (0, g.useRef)(0),
        nq = no.length > 0 || np.length > 0 || nv || nP.pendingCaptureCount > 0
      ;(ai[31] === Symbol.for("react.memo_cache_sentinel") ? ((N = []), (ai[31] = N)) : (N = ai[31]),
        ai[32] !== aD ? ((L = { resetRevision: aD, starts: N }), (ai[32] = aD), (ai[33] = L)) : (L = ai[33]))
      let [nj, nD] = (0, g.useState)(L)
      ai[34] !== aD || ai[35] !== nj.resetRevision || ai[36] !== nj.starts
        ? ((j = nj.resetRevision === aD ? nj.starts : []),
          (ai[34] = aD),
          (ai[35] = nj.resetRevision),
          (ai[36] = nj.starts),
          (ai[37] = j))
        : (j = ai[37])
      let nU = j
      ;(ai[38] === Symbol.for("react.memo_cache_sentinel") ? ((D = []), (ai[38] = D)) : (D = ai[38]),
        ai[39] !== aD ? ((z = { resetRevision: aD, flights: D }), (ai[39] = aD), (ai[40] = z)) : (z = ai[40]))
      let [nH, nB] = (0, g.useState)(z)
      ai[41] !== aA ? ((Q = aA.flatMap(rt)), (ai[41] = aA), (ai[42] = Q)) : (Q = ai[42])
      let nV = (0, u._U)(t5.iS, Q),
        [nz, nY] = (0, g.useState)(null),
        [nX, nW] = (0, g.useState)(!1),
        nG = nW,
        [n$, nK] = (0, g.useState)(!1)
      ;(ai[43] === Symbol.for("react.memo_cache_sentinel")
        ? ((ee = () => {
            let e = () => nK(!1)
            return (window.addEventListener("blur", e), () => window.removeEventListener("blur", e))
          }),
          (et = []),
          (ai[43] = ee),
          (ai[44] = et))
        : ((ee = ai[43]), (et = ai[44])),
        (0, g.useEffect)(ee, et))
      let nQ = (0, g.useRef)(0),
        nZ = (0, g.useRef)(null),
        nJ = "editor" === nz,
        [n0, n1] = (0, g.useState)(null),
        [n2, n3] = (0, g.useState)(null),
        [n4, n5] = (0, g.useState)(!1),
        [n6, n7] = (0, g.useState)(null),
        [n9, oe] = (0, g.useState)(null)
      ai[45] === Symbol.for("react.memo_cache_sentinel") ? ((ea = []), (ai[45] = ea)) : (ea = ai[45])
      let [ot, oa] = (0, g.useState)(ea)
      ai[46] === Symbol.for("react.memo_cache_sentinel") ? ((ei = {}), (ai[46] = ei)) : (ei = ai[46])
      let [oi, oo] = (0, g.useState)(ei),
        [or, ol] = (0, g.useState)(0),
        [os, ov] = (0, g.useState)(null),
        [oI, oM] = (0, g.useState)(re),
        [oS, oR] = (0, g.useState)(o9)
      ai[47] !== aN || ai[48] !== a5 || ai[49] !== aC || ai[50] !== ax
        ? ((en = () => {
            var e, t
            return aN && !a5
              ? ((e = aC),
                (t = ax),
                (0, q._I)(e, t) || (0, at.TB)(ok, []).includes(e.id)
                  ? null
                  : { avatarId: e.id, petName: e.displayName, startedAtMs: Date.now() })
              : null
          }),
          (ai[47] = aN),
          (ai[48] = a5),
          (ai[49] = aC),
          (ai[50] = ax),
          (ai[51] = en))
        : (en = ai[51])
      let [o_] = (0, g.useState)(en),
        oF =
          null == o_
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
              })({ intl: iW, petName: o_.petName, startedAtMs: o_.startedAtMs }),
        oq = (function ({ activities: e, intl: t, nowMs: a = Date.now(), realtimeThreadId: i }) {
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
        })({ activities: iG.activities, intl: iW, nowMs: oS, realtimeThreadId: iy.conversationId })
      ai[52] !== iW ||
      ai[53] !== iu ||
      ai[54] !== iT ||
      ai[55] !== iB ||
      ai[56] !== iE ||
      ai[57] !== iX ||
      ai[58] !== ab?.statusText
        ? ((eo =
            ab?.statusText ??
            (iu && iT && null != iE
              ? (function ({ intl: e, resolvedApps: t, status: a }) {
                  if (null == a) return null
                  let i = (0, tC.i)({ intl: e, resolvedApps: t, status: a })
                  if (null == i) return null
                  let { additionalToolsLabel: n, label: o } = i
                  return null == n ? o : `${o} \xb7 ${n}`
                })({ intl: iW, resolvedApps: iX, status: iB })
              : null)),
          (ai[52] = iW),
          (ai[53] = iu),
          (ai[54] = iT),
          (ai[55] = iB),
          (ai[56] = iE),
          (ai[57] = iX),
          (ai[58] = ab?.statusText),
          (ai[59] = eo))
        : (eo = ai[59])
      let oj = eo
      ai[60] !== nV || ai[61] !== oI || ai[62] !== aA
        ? ((er = (function (e, t, a) {
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
          })(oI, aA, nV)),
          (ai[60] = nV),
          (ai[61] = oI),
          (ai[62] = aA),
          (ai[63] = er))
        : (er = ai[63])
      let oD = er
      ;(oD !== oI && oM(oD),
        ai[64] !== iH || ai[65] !== oj || ai[66] !== a6
          ? ((es = (null != iH && "" !== iH.trim()) || (a6 && null != oj && "" !== oj.trim())),
            (ai[64] = iH),
            (ai[65] = oj),
            (ai[66] = a6),
            (ai[67] = es))
          : (es = ai[67]))
      let oU = es
      ai[68] !== iD || ai[69] !== aA
        ? ((ec = iD ? [] : aA), (ai[68] = iD), (ai[69] = aA), (ai[70] = ec))
        : (ec = ai[70])
      let oH = (function ({
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
                            ? iO("running")
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
                    notificationPriority: iO(e.status),
                    sortAtMs: e.sortAtMs,
                    updatedAtMs: e.updatedAtMs,
                  }
            })(a, o)
            null != s &&
              (i && (s.notificationPriority = iO("running")),
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
          clientThreadIdsByConversationId: nV,
          dismissedNotificationTurnKeys: oD,
          extraNotifications: iT
            ? oq
            : iD
              ? []
              : [
                  ...(null == oF ? [] : [oF]),
                  ...nU.map((e) => ({
                    action: null,
                    body: iW.formatMessage(oA.k.creating),
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
          mutedNotificationPreferenceIds: ie,
          nowMs: oS,
          sessions: ec,
        }),
        oB = ic ? oH.notifications.filter(o7).map(iP) : [],
        [oV, oz] = (0, g.useState)(!1),
        [oY, oX] = (0, g.useState)(o8),
        ro = oY
      if (ic !== oV || oB.length !== ro.size || oB.some((e) => !ro.has(e))) {
        let e
        ;(ai[71] !== oY || ai[72] !== oV
          ? ((e = (e) => [e, oY.has(e) || !oV ? (oY.get(e) ?? null) : 0]), (ai[71] = oY), (ai[72] = oV), (ai[73] = e))
          : (e = ai[73]),
          (ro = new Map(oB.map(e))),
          oz(ic),
          oX(ro))
      }
      let rr = (0, g.useRef)(new Map())
      ;((0, g.useEffect)(() => {
        let e = rr.current
        for (let [t, a] of e) (ro.get(t) === a.revision && a8) || (window.clearTimeout(a.timeoutId), e.delete(t))
        if (a8)
          for (let [t, a] of ro) {
            if (null == a || e.has(t)) continue
            let i = window.setTimeout(() => {
              oX((e) => (e.get(t) === a ? new Map(e).set(t, null) : e))
            }, 5e3)
            e.set(t, { revision: a, timeoutId: i })
          }
      }, [a8, ro]),
        ai[74] === Symbol.for("react.memo_cache_sentinel") ? ((ed = []), (ai[74] = ed)) : (ed = ai[74]),
        (0, g.useEffect)(() => {
          let e = rr.current
          return () => {
            for (let { timeoutId: t } of e.values()) window.clearTimeout(t)
            e.clear()
          }
        }, ed))
      let rl = oH.nextNotificationExpiresAtMs,
        rs = ic ? oH.notifications.filter((e) => null != ro.get(iP(e))) : oH.notifications,
        rc = a6 || (ig && (iy.canStart || null != iy.startError || iT || rs.length > 0)),
        ru =
          nH.resetRevision === aD && i0
            ? nH.flights.filter((e) =>
                rs.some((t) => {
                  let { id: a } = t
                  return a === e.notificationId
                }),
              )
            : []
      ;(nH.resetRevision !== aD || ru.length !== nH.flights.length) && nB({ resetRevision: aD, flights: ru })
      let rd = nU.filter(
        (e) =>
          !aA.some(
            (t) =>
              null != t.localConversationId &&
              nV.get(t.localConversationId) === e.clientThreadId &&
              ("idle" !== t.status || null != t.turnKey || ie.includes(t.key)),
          ),
      )
      ;(nj.resetRevision !== aD || rd.length !== nU.length) &&
        (tJ.v.debug("Quick Chat pending tasks reconciled", {
          safe: { retiredCount: nU.length - rd.length, remainingCount: rd.length },
        }),
        nD({ resetRevision: aD, starts: rd }))
      let rp = rs.map((e) => ({
        copy: aH({
          completedTurnSummary: a7.get(e.notificationPreferenceId ?? e.id),
          intl: iW,
          latestTurnItems:
            "local" === e.source && !1 !== e.usesLiveConversationState ? ac(e.localConversationId) : void 0,
          notification: e,
          notificationCount: rs.length,
          threadDetailLevel: aU,
        }),
        notification: e,
      }))
      ai[75] !== iW || ai[76] !== n9
        ? ((ep = (e) => {
            let { copy: t, notification: a } = e
            return {
              copy:
                n9?.notificationId === a.id && n9.replacedSubtitle === t.subtitle
                  ? {
                      ...t,
                      subtitle: iW.formatMessage({
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
          (ai[75] = iW),
          (ai[76] = n9),
          (ai[77] = ep))
        : (ep = ai[77])
      let rm = rp.map(ep),
        rf = rs
          .map((e) =>
            [
              e.id,
              e.title,
              e.body ?? "",
              e.level,
              e.isLoading ? "loading" : "done",
              e.action?.path ?? "",
              null == e.waitingRequest ? "" : a_(e.waitingRequest, iW),
            ].join("\x01"),
          )
          .join("\0")
      ai[78] !== oi
        ? ((em = (e) => {
            let { id: t } = e
            return { height: oi[t] ?? d.YMX, id: t }
          }),
          (ai[78] = oi),
          (ai[79] = em))
        : (em = ai[79])
      let rh = rs.map(em),
        rg = (0, d.jNq)({
          expanded: i4,
          items: rh,
          scrollOffset: or,
          sideSpacingPx: 16,
          viewportRect: { height: iK, left: 0, top: 0, width: d.pFD },
        }),
        rv = aA.some(o6),
        ry = aA.some(o5),
        rw = af && (a6 || i7)
      ;(!1 !== ai[80] || ai[81] !== aB
        ? ((ef = () => {}), (eh = [!1, aB]), (ai[80] = !1), (ai[81] = aB), (ai[82] = ef), (ai[83] = eh))
        : ((ef = ai[82]), (eh = ai[83])),
        (0, g.useEffect)(ef, eh))
      let rb = a6 && iT && "starting" === iC,
        rC =
          (is && null != io && ir !== io) ||
          null != a1 ||
          i1?.quickChatExpanded === !0 ||
          null != iy.startError ||
          null != nz ||
          n4 ||
          ((!ic || !nX) && (np.length > 0 || nv || no.length > 0 || null != nl)),
        rx = is && rC,
        rA = null != a2 && rC && !n4 && !iT,
        rI = (0, u.Ul)(Z.Wf),
        rM =
          (iT && !a5) ||
          null != iy.startError ||
          (!a5 && (ne || na || null != os)) ||
          rC ||
          (!a5 && (rI || (i3 && rh.length > 0) || (!a6 && rw))),
        [rS, rE] = (0, g.useState)(rM)
      ;(rM && !rS && rE(!0),
        ai[84] !== rM || ai[85] !== rb || ai[86] !== nn.compactDismissDelayMs
          ? ((eg = () => {
              if (rM || rb) return
              let e = window.setTimeout(() => {
                rE(!1)
              }, nn.compactDismissDelayMs)
              return () => window.clearTimeout(e)
            }),
            (ev = [rM, rb, nn.compactDismissDelayMs]),
            (ai[84] = rM),
            (ai[85] = rb),
            (ai[86] = nn.compactDismissDelayMs),
            (ai[87] = eg),
            (ai[88] = ev))
          : ((eg = ai[87]), (ev = ai[88])),
        (0, g.useEffect)(eg, ev))
      let rR = rM || rS,
        r_ = (e, t) => {
          let a
          ;(e !== o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_CLICK || null == nZ.current) &&
            ((void 0 !== t && t) || !1 === iL
              ? (a = o.CodexMiniVisibility.CODEX_MINI_VISIBILITY_HIDDEN)
              : null != iL &&
                (a = rR
                  ? i0 && rs.length > 0
                    ? o.CodexMiniVisibility.CODEX_MINI_VISIBILITY_EXPANDED_WITH_ACTIVITY_PILLS
                    : o.CodexMiniVisibility.CODEX_MINI_VISIBILITY_EXPANDED
                  : o.CodexMiniVisibility.CODEX_MINI_VISIBILITY_COLLAPSED),
            (nZ.current = { openMethod: e, initialVisibility: a }))
        },
        rT = (0, g.useRef)(null),
        rk = (0, g.useRef)(null),
        rO = tG.appServices.avatarOverlay,
        rP = oT && null == an && null != rO,
        rN = (0, g.useRef)(null),
        rL = (0, g.useRef)(null),
        rF = (0, g.useRef)(null),
        rq = (0, g.useRef)(null),
        rj = (0, g.useRef)(!1),
        rD = (0, g.useRef)(!1),
        rU = (e, t, a, i) => {
          let n = void 0 === i ? i4 : i
          am.logProductEvent(
            o.CodexAvatarOverlayEvent,
            (0, F.y)({
              action: e,
              hasRunningCloudSession: ry,
              hasRunningLocalSession: rv,
              isNotificationTrayOpen: n,
              isPetVisible: a3,
              isVisible: iL ?? void 0,
              notification: a,
              notificationCount: rs.length,
              selectedAvatar: aC,
              source: t,
            }),
          )
        },
        rH = (0, g.useEffectEvent)((e) => {
          rU(e, o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED)
        })
      ;(ai[89] !== o_
        ? ((ey = () => {
            if (null == o_) return
            let e = (0, at.TB)(ok, [])
            e.includes(o_.avatarId) || (0, at.jx)(ok, [...e, o_.avatarId])
          }),
          (ew = [o_]),
          (ai[89] = o_),
          (ai[90] = ey),
          (ai[91] = ew))
        : ((ey = ai[90]), (ew = ai[91])),
        (0, g.useEffect)(ey, ew),
        ai[92] !== iL || ai[93] !== am || ai[94] !== rH
          ? ((eb = () => {
              am === tv.Cg ||
                null == iL ||
                (rj.current || ((rj.current = !0), rH(o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_OPENED)),
                iL &&
                  !rD.current &&
                  ((rD.current = !0), rH(o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_PRESENTED)))
            }),
            (ai[92] = iL),
            (ai[93] = am),
            (ai[94] = rH),
            (ai[95] = eb))
          : (eb = ai[95]),
        ai[96] !== iL || ai[97] !== am ? ((eC = [iL, am]), (ai[96] = iL), (ai[97] = am), (ai[98] = eC)) : (eC = ai[98]),
        (0, g.useEffect)(eb, eC),
        ai[99] === Symbol.for("react.memo_cache_sentinel")
          ? ((ex = {
              interactiveRegionRef: rk,
              isPaused: () => null != rT.current,
              onInteractiveChange: o4,
              floatingElementSelectors: oL,
            }),
            (ai[99] = ex))
          : (ex = ai[99]),
        (0, G.Q)(ex),
        ai[100] !== rO || ai[101] !== nn
          ? ((eA = () => {
              var e
              if (null == rO) return
              let t =
                  null == (e = rk.current)
                    ? []
                    : ob(e).flatMap((e) => {
                        if (!oC(e)) return []
                        let t = oc(e)
                        return null == t ? [] : [t]
                      }),
                a = (function (e, t) {
                  let a = e?.querySelector('[data-avatar-overlay-hit-region="mascot"]')
                  if (null == e || null == a) return []
                  let i = a.getBoundingClientRect(),
                    n = a.offsetWidth ? i.width / a.offsetWidth : 1,
                    o = a.offsetHeight ? i.height / a.offsetHeight : 1,
                    r = Array.from(e.querySelectorAll(og)).filter((e) => {
                      if (!oC(e)) return !1
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
                          let t = oc(e)
                          return null == t ? [] : [t]
                        },
                      )
                    : r.flatMap((e) => {
                        let a = e.dataset.avatarOverlayNativeSurfaceId
                        if (a?.startsWith("activity-")) {
                          let t = oc(e)
                          return null == t ? [] : [t]
                        }
                        if (
                          "mascot-badge" !== a &&
                          "voice-controls" !== a &&
                          "voice-microphone" !== a &&
                          "voice-output" !== a
                        )
                          return []
                        let r = (0, id.PO)(t),
                          s = Math.round(t.compactOffsetX) - r / 2,
                          c = Math.round(i.height / o + t.compactOffsetY),
                          u = (0, id.oO)({
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
                })(rk.current, nn)
              ;(l()(rL.current, t) && l()(rF.current, a)) ||
                ((rL.current = t), (rF.current = a), rO.setPointerRegions(t, a))
            }),
            (ai[100] = rO),
            (ai[101] = nn),
            (ai[102] = eA))
          : (eA = ai[102]))
      let rB = eA
      ai[103] !== rB
        ? ((eI = () => {
            null == rq.current &&
              (rq.current = window.requestAnimationFrame(() => {
                ;((rq.current = null), rB())
              }))
          }),
          (ai[103] = rB),
          (ai[104] = eI))
        : (eI = ai[104])
      let rV = eI
      ai[105] !== oi
        ? ((eM = () => {
            let e = {}
            for (let t of rk.current?.querySelectorAll('[data-avatar-overlay-native-surface-id^="activity-"]') ?? []) {
              let a = t.dataset.avatarOverlayNativeSurfaceId?.slice(9),
                i = t.querySelector("[data-avatar-overlay-activity-content]"),
                n = null == i ? t.offsetHeight : i.offsetHeight + t.offsetHeight - t.clientHeight
              null == a || n <= 0 || oi[a] === n || (e[a] = n)
            }
            0 !== Object.keys(e).length &&
              (tJ.v.debug("Avatar overlay activity target heights changed", {
                safe: { changedCount: Object.keys(e).length, maximumHeightPx: Math.max(...Object.values(e)) },
              }),
              oo((t) => ({ ...t, ...e })))
          }),
          (ai[105] = oi),
          (ai[106] = eM))
        : (eM = ai[106])
      let rz = (0, g.useEffectEvent)(eM),
        rY = () => {
          var e, t, a, i
          let n = (function (e, { includeInertSurfaces: t = !1 } = {}) {
            if (null == e) return null
            let a = (function (e) {
                if (null == e || ox(e)) return null
                let t = e.getBoundingClientRect()
                return t.width <= 0 || t.height <= 0 ? null : { width: Math.ceil(t.width), height: Math.ceil(t.height) }
              })(e.querySelector(ou)),
              i = (function (e, t) {
                if (null == e || ox(e)) return null
                let a = e.getBoundingClientRect()
                if (a.width <= 0 || a.height <= 0) return null
                let i = e.querySelector(oh),
                  n = i?.getBoundingClientRect(),
                  o = null != i && i.querySelectorAll(og).length > 1,
                  r = Array.from(e.querySelectorAll(og))
                    .filter((e) => (t || null == e.closest("[inert]")) && !ox(e))
                    .map((e) =>
                      o && null != n && n.width > 0 && null != e.closest(of) ? n : e.getBoundingClientRect(),
                    ),
                  l = Math.ceil(
                    Math.max(
                      e.offsetWidth > 0 ? e.offsetWidth : a.width,
                      Math.max(a.right, ...r.map((e) => e.right)) - Math.min(a.left, ...r.map((e) => e.left)),
                    ),
                  ),
                  s = e.querySelector(op),
                  c = e.querySelector(om)
                if (null == s || null == c) return { height: Math.ceil(a.height), width: l }
                let u = c.getBoundingClientRect(),
                  d = c.scrollHeight
                if (null != i) {
                  let e = Array.from(c.children).filter((e) => e instanceof HTMLElement && !ox(e)),
                    t = Number.parseFloat(window.getComputedStyle(c).rowGap) || 0
                  d = e.reduce((e, t) => e + t.offsetHeight, 0) + Math.max(0, e.length - 1) * t
                }
                return (
                  (d = Math.max(d, null == n ? 0 : n.bottom - u.top)),
                  { height: Math.ceil(s.getBoundingClientRect().height + d), width: l }
                )
              })(e.querySelector(od), t)
            return null == a ? null : { mascot: a, tray: i }
          })(rk.current)
          if (null == n) return
          let o = oU ? (rk.current?.querySelector('[data-avatar-overlay-size="realtime-caption"]') ?? null) : null,
            r = o?.querySelector('[data-avatar-overlay-native-surface-id="realtime-caption"]'),
            s = null == o || null == r ? null : o.getBoundingClientRect().bottom - r.offsetHeight,
            c = rk.current?.querySelector("[data-avatar-overlay-size='mascot']")?.getBoundingClientRect().top,
            u = {
              ...n,
              tray: rA ? { width: d.pFD, height: Math.ceil(iK) } : n.tray,
              isGlobalRealtimeVoiceTransitioning: ib,
              isQuickChatLoading: aF,
              petControlsAppearance: nn,
              presentation: a5 ? "quick-chat" : void 0,
              quickChat: a6
                ? {
                    hasNotifications: rs.length > 0 || rA,
                    hasOrbPicker: it,
                    isActivityVisible: rA || (i3 && rs.length > 0),
                  }
                : void 0,
              quickChatFocusRequestId: n2?.requestId,
              realtimeCaptionAboveMascotPx: null == s || null == c ? 0 : Math.max(0, Math.ceil(c - s)),
              showsPetControls: rc && !a5,
            }
          ;((e = rN.current),
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
              ((rN.current = u),
              tJ.v.debug("Avatar overlay control layout changed", {
                safe: {
                  usesQuickChatBar: a6,
                  requestedPetVisible: aL,
                  isPetVisible: a3,
                  hasSelectedOrbit: null != a0,
                  hasPetAccessory: a6 && !a5,
                  mascotWidth: n.mascot.width,
                  mascotHeight: n.mascot.height,
                },
              }),
              K.O1.dispatchMessage("avatar-overlay-element-size-changed", {
                isGlobalRealtimeVoiceTransitioning: ib,
                isQuickChatLoading: aF,
                mascot: n.mascot,
                petControlsAppearance: nn,
                presentation: u.presentation,
                quickChat: u.quickChat,
                quickChatFocusRequestId: u.quickChatFocusRequestId,
                realtimeCaptionAboveMascotPx: u.realtimeCaptionAboveMascotPx,
                showsPetControls: u.showsPetControls,
                tray: u.tray,
              })))
        },
        rX = (0, g.useEffectEvent)(rY),
        rW = (e, t) => {
          var a, i, n, r
          let l,
            s = rT.current
          if (null == s || s.pointerId !== e.pointerId) return
          ;((rT.current = null), ov(null))
          let c = null
          ;(e.currentTarget instanceof HTMLElement
            ? (c = e.currentTarget)
            : e.target instanceof HTMLElement && (c = e.target),
            c?.hasPointerCapture?.(e.pointerId) && c.releasePointerCapture?.(e.pointerId))
          let {
            hasMoved: u,
            releaseSample: d,
            velocity: p,
          } = ((a = t ? az(e) : void 0),
          (i = !t && s.usesOrbPhysics),
          {
            hasMoved: null == (l = a ?? (i ? s.samples.at(-1) : void 0)) ? s.hasMoved : aY(s, l),
            releaseSample: l,
            velocity:
              null != l && aY((n = s), (r = l))
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
                  })(aX([...n.samples, r]))
                : null,
          })
          ;(s.beganOnQuickChatBar &&
            tJ.v.debug("Quick Chat pointer gesture finished", {
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
              (rU(
                o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED,
                o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
              ),
              iT && null != iE ? iz?.() : aS()),
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
                  (r_(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_CLICK),
                  r7("editor"),
                  s.quickChatEditorFocusTarget.focus())),
            s.usesOrbPhysics &&
              null != p &&
              K.O1.dispatchMessage("avatar-overlay-drag-release", {
                shouldBounce: !0,
                velocityX: 3 * p.x,
                velocityY: 3 * p.y,
              }))
        }
      ai[107] !== iu || ai[108] !== iT || ai[109] !== a6
        ? ((eS = (e) => {
            if (
              0 !== e.button ||
              e.ctrlKey ||
              !(e.target instanceof Element) ||
              null != e.target.closest(".no-drag, [data-orb-message]")
            )
              return
            ;(e.preventDefault(), e.currentTarget.setPointerCapture?.(e.pointerId))
            let t = iT && !iu
            ;((rT.current = {
              beganOnQuickChatBar:
                a6 &&
                null !=
                  e.target.closest(
                    '[data-quick-chat-glass-group], [data-avatar-overlay-hit-region="selected-orb"], [data-avatar-overlay-orbit-transcript]',
                  ),
              quickChatClickTarget: a6 ? e.target.closest("button") : null,
              quickChatEditorFocusTarget: a6
                ? e.target.closest('[data-avatar-overlay-composition-autofocus="true"][tabindex="0"]')
                : null,
              hasMoved: !1,
              pointerId: e.pointerId,
              samples: [az(e)],
              screenX: e.screenX,
              screenY: e.screenY,
              usesOrbPhysics: t,
            }),
              ov(null),
              K.O1.dispatchMessage("avatar-overlay-drag-start", {
                pointerScreenX: e.screenX,
                pointerScreenY: e.screenY,
                pointerWindowX: e.clientX,
                pointerWindowY: e.clientY,
                usesOrbPhysics: t,
              }))
          }),
          (ai[107] = iu),
          (ai[108] = iT),
          (ai[109] = a6),
          (ai[110] = eS))
        : (eS = ai[110])
      let rG = eS
      ai[111] === Symbol.for("react.memo_cache_sentinel")
        ? ((eE = (e) => {
            let t = rT.current
            if (null == t || t.pointerId !== e.pointerId) return
            let a = az(e)
            t.samples = aX([...t.samples, a])
            let i = a.screenX - t.screenX,
              n = a.screenY - t.screenY
            ;((Math.abs(i) >= 4 || Math.abs(n) >= 4) &&
              ((t.hasMoved = !0),
              (t.screenX = a.screenX),
              (t.screenY = a.screenY),
              !t.usesOrbPhysics && (i >= 4 ? ov("running-right") : i <= -4 && ov("running-left"))),
              t.hasMoved &&
                K.O1.dispatchMessage("avatar-overlay-drag-move", {
                  pointerScreenX: a.screenX,
                  pointerScreenY: a.screenY,
                }))
          }),
          (ai[111] = eE))
        : (eE = ai[111])
      let r$ = eE,
        rK = (e, t) => {
          ;(null != e.action &&
            (null == t || "open" === t.intent) &&
            rU(
              o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
              o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
              e,
            ),
            ak(e, t))
        }
      ai[112] !== aO
        ? ((eR = (e, t) => {
            aO(e, t)
          }),
          (ai[112] = aO),
          (ai[113] = eR))
        : (eR = ai[113])
      let rQ = eR,
        rZ = (e) => {
          ;(rU(
            o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
            o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            e,
          ),
            oM((t) => {
              if (t.get(e.id) === e.turnKey) return t
              let a = new Map(t)
              return (a.set(e.id, e.turnKey), a)
            }))
        }
      ai[114] !== aB
        ? ((e_ = (e) => {
            ;(0, i5.RZ)(aB, e, !1)
          }),
          (ai[114] = aB),
          (ai[115] = e_))
        : (e_ = ai[115])
      let rJ = e_
      ai[116] !== rJ || ai[117] !== iW
        ? ((eT = (e) => {
            let t = e.notificationPreferenceId
            null != t &&
              (async function ({ intl: e, onMuteThreadNotifications: t }) {
                document.dispatchEvent(new PointerEvent("pointercancel"))
                let a = await window.electronBridge?.showContextMenu?.([
                  { id: "mute-notification-thread", label: e.formatMessage(i5.OD.muteThreadNotifications) },
                ])
                a?.id === "mute-notification-thread" && t()
              })({
                intl: iW,
                onMuteThreadNotifications: () => {
                  rJ(t)
                },
              })
          }),
          (ai[116] = rJ),
          (ai[117] = iW),
          (ai[118] = eT))
        : (eT = ai[118])
      let r0 = eT,
        r1 = () => {
          ;(rU(
            o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
            o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            void 0,
            !0,
          ),
            i6(!0))
        }
      ai[119] === Symbol.for("react.memo_cache_sentinel")
        ? ((ek = () => {
            ;(i6(!1), ol(0))
          }),
          (ai[119] = ek))
        : (ek = ai[119])
      let r2 = ek
      ai[120] !== r2 || ai[121] !== ic || ai[122] !== aB
        ? ((eO = () => {
            ;(i2(null), r2(), ic || ((0, at.jx)(oO, !0), aB.set(oP, !0)))
          }),
          (ai[120] = r2),
          (ai[121] = ic),
          (ai[122] = aB),
          (ai[123] = eO))
        : (eO = ai[123])
      let r3 = eO
      ai[124] === Symbol.for("react.memo_cache_sentinel")
        ? ((eP = (e, t) => {
            oa((a) => (t ? (a.includes(e) ? a : [...a, e]) : a.filter((t) => t !== e)))
          }),
          (ai[124] = eP))
        : (eP = ai[124])
      let r4 = eP
      ai[125] === Symbol.for("react.memo_cache_sentinel")
        ? ((eN = (e) => {
            let t = iP(e)
            oX((e) => {
              let a = e.get(t)
              return null == a ? e : new Map(e).set(t, a + 1)
            })
          }),
          (ai[125] = eN))
        : (eN = ai[125])
      let r5 = eN,
        r6 = (e) => {
          let t = rs.find((t) => {
            let { id: a } = t
            return a === e
          })
          if (null != t) {
            if (!i4 && rs.length > 1) return void r1()
            rK(t)
          }
        },
        r8 = o3,
        r7 = (e, t) => {
          ;(nK(!1),
            null != e && n7(null),
            (null != e || t) && nG(null == e),
            null == e && t && (null != io && il(io), aB.set(tf.lG, null)),
            null != e || nq || (nZ.current = null),
            a6 && !aJ && (nY(e), null != e && null == nz && n1(null)),
            (null != e && a6 && null != nz && document.hasFocus()) || r8(null != e || nQ.current > 0, t))
        },
        r9 = (e) => {
          null != a2 &&
            ((nc.current = nc.current + 1),
            (0, V.TG)(aB),
            (0, v.flushSync)(() => {
              ;(ns({ agentId: a2.id, resetRevision: aD, message: e }), n1(null), r7("editor"))
            }),
            rk.current?.querySelector('[data-avatar-overlay-composition-autofocus="true"]')?.focus())
        }
      ai[126] !== nz
        ? ((eL = (e) => {
            ;(e && nK(!1),
              (nQ.current = nQ.current + (e ? 1 : -1)),
              r8(e || (document.hasFocus() && (nQ.current > 0 || null != nz))))
          }),
          (ai[126] = nz),
          (ai[127] = eL))
        : (eL = ai[127])
      let le = eL,
        lt = async (e, t, a, i) => {
          let n,
            r = i
          void 0 === r && (r = aB.get(tf.MR) ?? aB.get(J.VI))
          let l = e.trim()
          if (!af || 0 === l.length || (0, V.ov)(aB, nC)) return
          let s = aB.get(V.$X)
          if ((0, V.lR)(aB, { promptRawOverride: l })) {
            s || nM({ origin: t, selectedOrbit: r, reply: a })
            return
          }
          let c = r ?? nm
          if (!nT && aB.get(H.gy).length > 0) return void nk()
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
              addedFiles: aB.get(H.a$),
              fileAttachments: aB.get(H.PA),
              imageAttachments: aB.get(H.gy),
              appshotContexts: np,
              ideContext: null,
            },
            g = f.addedFiles.length > 0 || f.fileAttachments.length > 0 || f.imageAttachments.length > 0,
            v = f,
            y = (0, h.Y)([...f.addedFiles, ...f.fileAttachments])
          if (null != c && (null != r || c.hostId !== tw.fI) && y.some(d.skP))
            return void aB
              .get(X.Id)
              .danger(
                iW.formatMessage({
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
            ((v = { ...f, imageAttachments: f.imageAttachments.map(o2) }), y.length > 0)
          ) {
            let e = JSON.stringify([c.hostId, c.conversationId]),
              t = null == r ? void 0 : nx.current.get(e)
            if (null != t && y.length === t.localFiles.length && y.every((e, a) => e === t.localFiles[a]))
              ((n = t),
                (v = { ...v, addedFiles: [], fileAttachments: t.uploadedFiles }),
                tJ.v.info("Quick Chat file transfer reused", { safe: { attachmentCount: y.length } }))
            else {
              let t = (0, V.Mz)(aB, { hostId: c.hostId, id: nC })
              try {
                let a = await (0, x.V)(aB, c.hostId).uploadLocalFileAttachments({
                  attachments: y,
                  allowSftpUpload: (0, d.Tim)(aB.get($.f, c.hostId)),
                })
                if (!t.isPending()) return void (0, B.xm)(aB, c.hostId, a)
                ;((v = { ...v, addedFiles: [], fileAttachments: a }),
                  null != r && ((n = { key: e, localFiles: y, uploadedFiles: a }), nx.current.set(e, n)),
                  t.succeed())
              } catch (e) {
                ;(t.isPending() &&
                  aB
                    .get(X.Id)
                    .danger((0, A.c)(e, iW), {
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
              selectedAvatar: aC,
              isPetVisible: a3,
            }),
            quickChatOpenMethod: nZ.current?.openMethod,
            quickChatInitialVisibility: nZ.current?.initialVisibility,
            quickChatAppshotCount: np.length,
          }
          for (let [e, a] of (tJ.v.info("Quick Chat task start submitted", {
            safe: {
              promptLength: l.length,
              attachmentCount: np.length + f.addedFiles.length + f.fileAttachments.length + f.imageAttachments.length,
            },
            sensitive: { clientThreadId: u },
          }),
          null != m &&
            (ic || i0 || r3(),
            (0, t5.gI)(aB, u, m.thread),
            nD((e) => ({ resetRevision: aD, starts: [...(e.resetRevision === aD ? e.starts : []), m] }))),
          null != m &&
            null != t &&
            a6 &&
            nB((e) => ({
              resetRevision: aD,
              flights: [
                ...(e.resetRevision === aD ? e.flights : []),
                {
                  notificationId: u,
                  origin: t,
                  coveredNotificationId: rs[0]?.id ?? null,
                  coveredNotificationWasVisible: i0,
                },
              ],
            })),
          nx.current))
            a.localFiles.some((e) => !y.includes(e)) && nx.current.delete(e)
          ;(nr(""), ns((e) => (e?.message === a ? null : e)))
          let b = nc.current
          nw.current = nw.current + 1
          let C = nw.current
          ;((0, H.Rh)(aB, "addedFiles", []),
            (0, H.Rh)(aB, "fileAttachments", []),
            (0, H.Rh)(aB, "imageAttachments", []),
            n1("submission"),
            nd({ appshots: [], threadTarget: null }))
          let I = (ny.current = ny.current + 1),
            M = () => {
              if (ny.current !== I) return
              let e = aB.get(tf.MR) ?? aB.get(J.VI)
              e?.conversationId === r?.conversationId &&
                e?.hostId === r?.hostId &&
                (nc.current === b &&
                  (nr((e) => (0 === e.length ? l : e)),
                  null != a && null != r && ns({ agentId: r.id, resetRevision: aD, message: a })),
                nd((e) => (0 === e.appshots.length ? { appshots: np, threadTarget: nm } : e)),
                nw.current === C &&
                  ((0, H.Rh)(aB, "addedFiles", (e) => (0, h.Y)([...f.addedFiles, ...e])),
                  (0, H.Rh)(aB, "fileAttachments", (e) => (0, h.Y)([...f.fileAttachments, ...e])),
                  (0, H.Rh)(aB, "imageAttachments", (e) => [...f.imageAttachments, ...e])))
            }
          try {
            let e = await aP(
              l,
              u,
              np.length > 0 ? np : void 0,
              c,
              () => am.logProductEvent(o.CodexAvatarOverlayEvent, w),
              g ? v : void 0,
              null != r,
              null != r ? a?.id : void 0,
              t,
            )
            ;("sent" === e && null != n && nx.current.get(n.key) === n && nx.current.delete(n.key),
              tJ.v.info("Quick Chat task start settled", {
                safe: { result: e, elapsedMs: Date.now() - p },
                sensitive: { clientThreadId: u },
              }),
              null != m && (0, t5.gI)(aB, u, null),
              "cancelled" === e && M(),
              "cancelled" === e &&
                null != m &&
                nD((e) => ({ ...e, starts: e.starts.filter((e) => e.clientThreadId !== u) })))
          } catch (t) {
            if (null != m && null == aB.get(t5.Pt, u)) return
            let e = null != m && null != aB.get(t5.Tl, u)
            if (
              (tJ.v.warning("Quick Chat task start failed", {
                safe: { hasCreatedConversation: e, elapsedMs: Date.now() - p },
                sensitive: { clientThreadId: u, error: t },
              }),
              null != m &&
                ((0, t5.gI)(aB, u, null),
                nD((e) => ({ ...e, starts: e.starts.filter((e) => e.clientThreadId !== u) }))),
              e || M(),
              !a6)
            )
              throw t
            aB.get(X.Id).danger(
              iW.formatMessage({
                id: "avatarOverlay.quickChatBarError",
                defaultMessage: "Unable to start chat",
                description: "Error shown when starting a chat from the floating Quick Chat bar fails",
              }),
              { errorAnalytics: { toastId: "avatarOverlay.quickChatBarError" } },
            )
          }
        }
      ai[128] !== lt || ai[129] !== nE || ai[130] !== nI.origin || ai[131] !== nI.reply
        ? ((eF = (e) => lt(e, nI.origin, nI.reply, nE)),
          (ai[128] = lt),
          (ai[129] = nE),
          (ai[130] = nI.origin),
          (ai[131] = nI.reply),
          (ai[132] = eF))
        : (eF = ai[132])
      let la = (0, g.useEffectEvent)(eF)
      ;(ai[133] !== aB || ai[134] !== la
        ? ((eq = () =>
            (0, V.U_)(aB, (e) => {
              if (null != e.promptRawOverride) return la(e.promptRawOverride)
            })),
          (ai[133] = aB),
          (ai[134] = la),
          (ai[135] = eq))
        : (eq = ai[135]),
        ai[136] !== aB ? ((ej = [aB]), (ai[136] = aB), (ai[137] = ej)) : (ej = ai[137]),
        (0, g.useEffect)(eq, ej))
      let li = (e) => {
          if (i0) {
            if (ic) return void oX(new Map([...ro.keys()].map(o1)))
            if (("controls" !== nz && r7(null), !0 !== e && i4 && rs.length > 1)) {
              ;(rU(
                o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
                o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
                void 0,
                !1,
              ),
                r2())
              return
            }
            ;(rs.length > 0 && null != aB.get(a$).tray ? i2({ quickChatExpanded: rC }) : r2(),
              (0, at.jx)(oO, !1),
              aB.set(oP, !1))
          }
        },
        ln = (e, t, a) => {
          let i = void 0 === a || a,
            n = e.controlTarget
          switch (t.type) {
            case "close-follow-up":
              ;(n7(null), i && r8(!1))
              return
            case "follow-up-active-changed":
              i && r8(t.isActive || null != nz)
              return
            case "open-follow-up":
              if (null == n) return
              ;(n7({ caretPoint: null, draft: "", notificationId: e.id, submissionStatus: "idle", turnKey: e.turnKey }),
                i && r8(!0))
              return
            case "follow-up-editor-changed":
              return void n7((a) =>
                a?.notificationId === e.id && a.turnKey === e.turnKey
                  ? { ...a, caretPoint: t.caretPoint, draft: t.draft }
                  : a,
              )
            case "stop":
              if (null == n) return
              ;(n7(null),
                i && null != n6 && r8(!1),
                Promise.resolve(aT(e, t)).catch(() => {
                  aB.get(X.Id).danger(
                    iW.formatMessage({
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
              ;(n7((t) =>
                t?.notificationId === e.id && t.turnKey === e.turnKey ? { ...t, submissionStatus: "submitting" } : t,
              ),
                Promise.resolve(aT(e, { type: "submit-follow-up", prompt: a }))
                  .then((t) => {
                    "submitted" === t &&
                      rU(
                        o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_SUBMITTED,
                        o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
                        e,
                      )
                    let a = rp.find((t) => {
                      let { notification: a } = t
                      return a.id === e.id
                    })
                    if ("app-server-conversation" === n.type && null != a) {
                      let t = { notificationId: e.id, replacedSubtitle: a.copy.subtitle }
                      ;(oe(t),
                        window.setTimeout(() => {
                          oe((e) => (e === t ? null : e))
                        }, 3e3))
                    }
                    ;(n7((t) => (t?.notificationId === e.id && t.turnKey === e.turnKey ? null : t)), i && r8(!1))
                  })
                  .catch(() => {
                    n7((t) =>
                      t?.notificationId === e.id && t.turnKey === e.turnKey ? { ...t, submissionStatus: "error" } : t,
                    )
                  }))
              return
            }
          }
        }
      ;(ai[138] === Symbol.for("react.memo_cache_sentinel") ? ((eD = []), (ai[138] = eD)) : (eD = ai[138]),
        (0, K.JX)(
          "avatar-overlay-action",
          (e) => {
            let { action: t } = e
            switch (t.type) {
              case "cancel-quick-chat-focus":
                n2?.requestId === t.requestId &&
                  (nq || (nZ.current = null),
                  (0, v.flushSync)(() => {
                    ;(n3(null), nK(!1), nY(null), aB.set(tf.lG, null))
                  }))
                return
              case "focus-quick-chat":
              case "toggle-quick-chat":
                if (a6 && !aJ)
                  if ("toggle-quick-chat" === t.type && nJ)
                    (r7(null, !0), document.activeElement instanceof HTMLElement && document.activeElement.blur())
                  else {
                    if ("focus-quick-chat" === t.type && null != t.requestId) {
                      let e = t.requestId
                      if (n2?.requestId === e) {
                        ;((rN.current = null), rY())
                        return
                      }
                      ;(r_(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_SHORTCUT, t.wasHidden),
                        (0, v.flushSync)(() => {
                          ;(nK(!1),
                            n7(null),
                            n3({ requestId: e, layoutRevision: null }),
                            n1("shortcut"),
                            nG(!1),
                            nY("editor"))
                        }))
                      return
                    }
                    ;(r_(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_SHORTCUT),
                      (0, v.flushSync)(() => {
                        ;(n1(null), r7("editor"))
                      }),
                      rk.current?.querySelector('[data-avatar-overlay-composition-autofocus="true"]')?.focus())
                  }
                return
              case "close-notification-stack":
                ;(i6(!1), ol(0))
                return
              case "open-notification-stack":
                return void i6(!0)
              case "pet-pointer-proximity-changed":
                return void ni(t.isNear)
              case "hide-activity-pills":
                return void li(t.automatic)
              case "show-activity-pills":
                return void r3()
            }
          },
          eD,
        ),
        ai[139] !== nJ || ai[140] !== a6
          ? ((eU = () => {
              a6 &&
                nJ &&
                0 === nQ.current &&
                (nK(!0), rk.current?.querySelector('[data-avatar-overlay-composition-autofocus="true"]')?.focus())
            }),
            (ai[139] = nJ),
            (ai[140] = a6),
            (ai[141] = eU))
          : (eU = ai[141]),
        ai[142] === Symbol.for("react.memo_cache_sentinel") ? ((eH = []), (ai[142] = eH)) : (eH = ai[142]),
        (0, K.JX)("avatar-overlay-keyboard-interaction-ready", eU, eH),
        ai[143] !== rC || ai[144] !== a5 || ai[145] !== aB
          ? ((eB = [rC, a5, aB]), (ai[143] = rC), (ai[144] = a5), (ai[145] = aB), (ai[146] = eB))
          : (eB = ai[146]),
        (0, K.JX)(
          "appshot-shortcut",
          (e) => {
            let { target: t, threadTarget: a } = e
            if (!a6 || null == t || !aB.get(P.L)) return
            ;((0, V.td)(aB, nC), nG(!1))
            let i = Symbol(),
              n = (0, V.Mz)(aB, { hostId: a?.hostId ?? tw.fI, id: crypto.randomUUID() }),
              r = nF.current
            null == nz && r_(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_SHORTCUT)
            let l = { operation: n, allowSubmitWithoutCapture: !1 }
            ;(nL.current.set(i, l),
              (0, v.flushSync)(() => {
                nN((e) => ({
                  pendingCaptureCount: nL.current.size,
                  response: 1 === nL.current.size ? void 0 : e.response,
                  startsCollapsed: 1 === nL.current.size ? !rC : e.startsCollapsed,
                }))
              }),
              (0, O.g)(aB, {
                animationPresentationStyle: "quick_chat",
                getAnimationDestinationFrame: o0,
                getAttachmentGen: () => ny.current,
                onCaptureAnimationDuration: (e, t) => {
                  r === nF.current &&
                    ((0, v.flushSync)(() => {
                      ;(null != t && r7("editor"),
                        nN((e) => (0 === e.pendingCaptureCount || void 0 !== e.response ? e : { ...e, response: t })))
                    }),
                    null != t &&
                      rk.current?.querySelector('[data-avatar-overlay-composition-autofocus="true"]')?.focus())
                },
                onAddAppshotContext: (e) => {
                  nd((t) => ({
                    appshots: [...t.appshots, e],
                    threadTarget: 0 === t.appshots.length && null == t.threadTarget ? (a ?? null) : t.threadTarget,
                  }))
                },
                onCaptureSettled: (e, t) => {
                  if (!nL.current.delete(i)) return
                  let a = nL.current.size
                  ;((0, v.flushSync)(() => {
                    nN((e) => ({
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
          eB,
        ),
        ai[147] !== nq || ai[148] !== a$ || ai[149] !== aB || ai[150] !== nY
          ? ((eV = (e) => {
              let {
                isGlobalRealtimeVoicePresentation: t,
                isVisible: a,
                layout: i,
                layoutRevision: n,
                petOpenIntent: o,
                quickChatFocusRequestId: r,
                arePresentationAccessoriesVisible: l,
              } = e
              ;(ih(t),
                iF(a),
                aB.set(a$, i),
                a || (nK(!1), nq || (nZ.current = null), nY(null), aB.set(tf.lG, null)),
                n3((e) =>
                  a
                    ? null == e || e.requestId !== r || null == n || e.layoutRevision === n
                      ? e
                      : { ...e, layoutRevision: n }
                    : null,
                ),
                iN(o),
                iZ(l))
            }),
            (ai[147] = nq),
            (ai[148] = a$),
            (ai[149] = aB),
            (ai[150] = nY),
            (ai[151] = eV))
          : (eV = ai[151]),
        ai[152] === Symbol.for("react.memo_cache_sentinel") ? ((ez = []), (ai[152] = ez)) : (ez = ai[152]),
        (0, K.JX)("avatar-overlay-layout-changed", eV, ez),
        ai[153] !== rO || ai[154] !== rP
          ? ((eY = () => {
              rP && rO.requestCurrentLayout().catch(oJ)
            }),
            (eX = [rO, rP]),
            (ai[153] = rO),
            (ai[154] = rP),
            (ai[155] = eY),
            (ai[156] = eX))
          : ((eY = ai[155]), (eX = ai[156])),
        (0, g.useEffect)(eY, eX),
        ai[157] !== aq || ai[158] !== i$
          ? ((eW = () => {
              aq || null == i$ || tG.appServices.avatarOverlay?.setQuickChatStashed(null)
            }),
            (eG = [i$, aq]),
            (ai[157] = aq),
            (ai[158] = i$),
            (ai[159] = eW),
            (ai[160] = eG))
          : ((eW = ai[159]), (eG = ai[160])),
        (0, g.useEffect)(eW, eG))
      let lo = (0, g.useEffectEvent)((e, t) => {
        rW(e, t)
      })
      ;(ai[161] !== lo
        ? ((e$ = () => {
            let e = (e) => {
                lo(e, !0)
              },
              t = (e) => {
                lo(e, !1)
              }
            return (
              window.addEventListener("pointerup", e),
              window.addEventListener("pointercancel", t),
              () => {
                ;(window.removeEventListener("pointerup", e), window.removeEventListener("pointercancel", t))
              }
            )
          }),
          (ai[161] = lo),
          (ai[162] = e$))
        : (e$ = ai[162]),
        ai[163] === Symbol.for("react.memo_cache_sentinel") ? ((eK = []), (ai[163] = eK)) : (eK = ai[163]),
        (0, g.useEffect)(e$, eK),
        ai[164] !== rO || ai[165] !== rz || ai[166] !== rX || ai[167] !== rB || ai[168] !== rV
          ? ((eQ = () => {
              let e = null,
                t = () => {
                  null == e &&
                    (e = window.requestAnimationFrame(() => {
                      ;((e = null), rz(), rX(), rB())
                    }))
                },
                a = new ResizeObserver(t),
                i = rk.current,
                n = null
              if (null != i) {
                for (let e of (a.observe(i), Array.from(i.querySelectorAll(ow.join(", "))))) a.observe(e)
                null != rO &&
                  (n = (function (e, t) {
                    let a = e.ownerDocument,
                      i = new ResizeObserver(t),
                      n = () => {
                        i.disconnect()
                        let t = new Set()
                        for (let a of ob(e))
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
                    oy))
                      a.addEventListener(e, r)
                    return (
                      a.addEventListener("scroll", r, !0),
                      () => {
                        for (let e of (i.disconnect(), o.disconnect(), a.removeEventListener("scroll", r, !0), oy))
                          a.removeEventListener(e, r)
                      }
                    )
                  })(i, rV))
              }
              return (
                window.addEventListener("resize", t),
                t(),
                () => {
                  ;(null != e && window.cancelAnimationFrame(e),
                    null != rq.current && (window.cancelAnimationFrame(rq.current), (rq.current = null)),
                    a.disconnect(),
                    n?.(),
                    window.removeEventListener("resize", t))
                }
              )
            }),
            (ai[164] = rO),
            (ai[165] = rz),
            (ai[166] = rX),
            (ai[167] = rB),
            (ai[168] = rV),
            (ai[169] = eQ))
          : (eQ = ai[169]),
        (0, g.useLayoutEffect)(eQ, [rO, oU, rA, rf, rB, rV, aC.id]),
        ai[170] !== rX || ai[171] !== rB
          ? ((eZ = () => {
              ;(rX(), rB())
            }),
            (ai[170] = rX),
            (ai[171] = rB),
            (ai[172] = eZ))
          : (eZ = ai[172]),
        (0, g.useLayoutEffect)(eZ, [
          iK,
          i3,
          i0,
          it,
          rA,
          ib,
          i4,
          a5,
          aF,
          nn,
          rB,
          n2?.requestId,
          iH,
          oj,
          aC.id,
          rf,
          ap,
          iU,
          rc,
        ]),
        ai[173] !== a8 || ai[174] !== rl
          ? ((eJ = () => {
              if (!a8 || null == rl) return
              let e = Math.max(0, rl - Date.now()),
                t = window.setTimeout(() => {
                  oR(oZ)
                }, e)
              return () => {
                window.clearTimeout(t)
              }
            }),
            (e0 = [a8, rl]),
            (ai[173] = a8),
            (ai[174] = rl),
            (ai[175] = eJ),
            (ai[176] = e0))
          : ((eJ = ai[175]), (e0 = ai[176])),
        (0, g.useEffect)(eJ, e0),
        ai[177] !== rv || ai[178] !== ry || ai[179] !== a8 || ai[180] !== aE || ai[181] !== aR
          ? ((e1 = [rv, ry, a8, aE, aR]),
            (ai[177] = rv),
            (ai[178] = ry),
            (ai[179] = a8),
            (ai[180] = aE),
            (ai[181] = aR),
            (ai[182] = e1))
          : (e1 = ai[182]),
        (0, g.useEffect)(() => {
          if (!a8 || (!rv && !ry)) return
          let e = window.setTimeout(() => {
            ;(oR(oQ), rv && aE(), ry && aR())
          }, 15e3)
          return () => {
            window.clearTimeout(e)
          }
        }, e1),
        ai[183] !== it
          ? ((e2 = it
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
            (ai[183] = it),
            (ai[184] = e2))
          : (e2 = ai[184]))
      let lr = e2,
        ll = !rx && n$,
        ls = null == n2,
        lc = rm.map(oK),
        lu = rA ? void 0 : rg
      ;(ai[185] !== r7 || ai[186] !== a8 || ai[187] !== a2 || ai[188] !== rA || ai[189] !== a1
        ? ((e3 =
            null != a2 && null == a1
              ? (e, t, a, n, o) =>
                  (0, i.jsx)(td, {
                    avatarOrigin: a,
                    barOrigin: n,
                    nameOrigin: o,
                    headerOpacity: e?.headerOpacity,
                    morphFromBar: t,
                    agent: a2,
                    active: a8 && rA,
                    callControl: (0, i.jsx)(tp.k, {
                      ref: null,
                      compact: !0,
                      iconStyle: {},
                      isSelected: !1,
                      onActivate: () => {
                        ;(document.activeElement instanceof HTMLElement && document.activeElement.blur(), r7(null, !0))
                      },
                    }),
                    onBack: () => {
                      ;(document.activeElement instanceof HTMLElement && document.activeElement.blur(), r7(null, !0))
                    },
                  })
              : void 0),
          (ai[185] = r7),
          (ai[186] = a8),
          (ai[187] = a2),
          (ai[188] = rA),
          (ai[189] = a1),
          (ai[190] = e3))
        : (e3 = ai[190]),
        ai[191] !== le ||
        ai[192] !== r7 ||
        ai[193] !== r9 ||
        ai[194] !== it ||
        ai[195] !== a8 ||
        ai[196] !== a2 ||
        ai[197] !== rA ||
        ai[198] !== a1
          ? ((e4 =
              it && null != a2
                ? {
                    visible: rA,
                    render: (e, t, a, n) =>
                      null != a1
                        ? (0, i.jsx)(tm, {
                            active: a8 && t,
                            agent: a1,
                            maxHeight: e,
                            onBack: () => r7(null, !0),
                            onMenuOpenChange: le,
                            onReply: r9,
                            swipe: n,
                          })
                        : (0, i.jsx)(
                            tt,
                            {
                              active: t,
                              agent: a2,
                              entrance: a,
                              limitToRecentMessages: !1,
                              maxHeight: e,
                              onMenuOpenChange: le,
                              onTaskOpen: () => {
                                ;(document.activeElement instanceof HTMLElement && document.activeElement.blur(),
                                  r7(null, !0))
                              },
                              onReply: r9,
                              swipe: n,
                            },
                            a2.id,
                          ),
                  }
                : void 0),
            (ai[191] = le),
            (ai[192] = r7),
            (ai[193] = r9),
            (ai[194] = it),
            (ai[195] = a8),
            (ai[196] = a2),
            (ai[197] = rA),
            (ai[198] = a1),
            (ai[199] = e4))
          : (e4 = ai[199]))
      let ld = rP && !0 !== iL
      ai[200] !== lr || ai[201] !== iT || ai[202] !== aM || ai[203] !== aj || ai[204] !== iy || ai[205] !== rU
        ? ((e5 = iT
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
                  onSelect: o$,
                },
                {
                  id: "close-avatar",
                  icon: Y.GsY,
                  message: aj
                    ? lr
                    : (0, w.zR)({
                        id: "petOverlay.closeMini",
                        defaultMessage: "Close Mini",
                        description: "Context menu item that closes Mini, the floating compact Codex panel",
                      }),
                  onSelect: () => {
                    ;(rU(
                      o.CodexAvatarOverlayAction.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
                      o.CodexAvatarOverlaySource.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
                    ),
                      iy.stop().catch(oG),
                      aM())
                  },
                },
              ]),
          (ai[200] = lr),
          (ai[201] = iT),
          (ai[202] = aM),
          (ai[203] = aj),
          (ai[204] = iy),
          (ai[205] = rU),
          (ai[206] = e5))
        : (e5 = ai[206])
      let lp = ip ? iQ : void 0
      ai[207] !== ap ? ((e6 = (0, aG.cv)(ap)), (ai[207] = ap), (ai[208] = e6)) : (e6 = ai[208])
      let lm = !ip || iQ
      ;(ai[209] !== ao || ai[210] !== ar || ai[211] !== al
        ? ((e8 = { cleanupEnabled: ao, streamingEnabled: ar, supportState: al }),
          (ai[209] = ao),
          (ai[210] = ar),
          (ai[211] = al),
          (ai[212] = e8))
        : (e8 = ai[212]),
        ai[213] !== rg ||
        ai[214] !== i8 ||
        ai[215] !== r2 ||
        ai[216] !== r1 ||
        ai[217] !== i4 ||
        ai[218] !== a$ ||
        ai[219] !== rs ||
        ai[220] !== aB
          ? ((e7 = (e) => {
              let t = i8.update({
                deltaY: e,
                timestamp: performance.now(),
                isExpanded: i4,
                notificationCount: rs.length,
                expandsUpward: aB.get(a$).placement.startsWith("top"),
                maxScrollOffset: Math.max(0, rg.contentHeight - rg.viewportRect.height),
              })
              "expand" === t
                ? r1()
                : "collapse" === t
                  ? r2()
                  : "scroll" === t &&
                    ol((t) =>
                      (0, d.Tyz)({
                        contentHeight: rg.contentHeight,
                        deltaY: e,
                        scrollOffset: t,
                        viewportHeight: rg.viewportRect.height,
                      }),
                    )
            }),
            (ai[213] = rg),
            (ai[214] = i8),
            (ai[215] = r2),
            (ai[216] = r1),
            (ai[217] = i4),
            (ai[218] = a$),
            (ai[219] = rs),
            (ai[220] = aB),
            (ai[221] = e7))
          : (e7 = ai[221]),
        ai[222] !== i1 || ai[223] !== i0 || ai[224] !== r2
          ? ((e9 = () => {
              i0 || null == i1 || (i2(null), r2())
            }),
            (ai[222] = i1),
            (ai[223] = i0),
            (ai[224] = r2),
            (ai[225] = e9))
          : (e9 = ai[225]),
        ai[226] !== rW || ai[227] !== a6
          ? ((te = (e) => {
              rW(e, a6 && 0 === e.buttons)
            }),
            (ai[226] = rW),
            (ai[227] = a6),
            (ai[228] = te))
          : (te = ai[228]),
        ai[229] !== rW
          ? ((ta = (e) => {
              rW(e, !1)
            }),
            (ai[229] = rW),
            (ai[230] = ta))
          : (ta = ai[230]),
        ai[231] !== rW
          ? ((ti = (e) => {
              rW(e, !0)
            }),
            (ai[231] = rW),
            (ai[232] = ti))
          : (ti = ai[232]))
      let lf = ic ? r5 : void 0,
        lh = null != rO ? rV : void 0,
        lg = window.electronBridge?.showContextMenu == null ? void 0 : r0
      ;(ai[233] !== r_
        ? ((tn = () => {
            ;(n1(null), r_(o.CodexMiniQuickChatOpenMethod.CODEX_MINI_QUICK_CHAT_OPEN_METHOD_CLICK))
          }),
          (ai[233] = r_),
          (ai[234] = tn))
        : (tn = ai[234]),
        ai[235] !== nC || ai[236] !== af || ai[237] !== aB
          ? ((to = af
              ? (e) => {
                  ;((0, V.td)(aB, nC), (0, V.TG)(aB), (nc.current = nc.current + 1), nr(e), e.length > 0 && n1(null))
                }
              : void 0),
            (ai[235] = nC),
            (ai[236] = af),
            (ai[237] = aB),
            (ai[238] = to))
          : (to = ai[238]),
        ai[239] !== nC ||
        ai[240] !== nv ||
        ai[241] !== nP.pendingCaptureCount ||
        ai[242] !== np ||
        ai[243] !== nm ||
        ai[244] !== aB ||
        ai[245] !== nN
          ? ((tr = (e, t) => {
              ;((0, V.td)(aB, nC), "voice-return" === t && (0, V.TG)(aB))
              let a = np.filter((t) => !e.includes(t))
              if (
                (nd({ appshots: a, threadTarget: 0 !== a.length || nv ? nm : null }),
                0 === a.length && ((ny.current = ny.current + 1), "voice-return" !== t))
              )
                for (let e of nL.current.values()) e.allowSubmitWithoutCapture = !0
              if ("voice-return" === t) {
                for (let e of (tJ.v.info("Quick Chat returned to active voice", {
                  safe: { pendingCaptures: nP.pendingCaptureCount },
                  sensitive: {},
                }),
                (nF.current = nF.current + 1),
                nL.current.values()))
                  e.operation.fail()
                ;(nL.current.clear(), nN({ pendingCaptureCount: 0, response: void 0, startsCollapsed: !1 }))
              }
            }),
            (ai[239] = nC),
            (ai[240] = nv),
            (ai[241] = nP.pendingCaptureCount),
            (ai[242] = np),
            (ai[243] = nm),
            (ai[244] = aB),
            (ai[245] = nN),
            (ai[246] = tr))
          : (tr = ai[246]))
      let lv = af ? i9 : void 0,
        ly = nl?.message
      ;(ai[247] !== aB
        ? ((tl = () => {
            ;((nc.current = nc.current + 1), (0, V.TG)(aB), ns(null))
          }),
          (ai[247] = aB),
          (ai[248] = tl))
        : (tl = ai[248]),
        ai[249] !== nB
          ? ((ts = (e) => {
              nB((t) => ({ ...t, flights: t.flights.filter((t) => t.notificationId !== e) }))
            }),
            (ai[249] = nB),
            (ai[250] = ts))
          : (ts = ai[250]),
        ai[251] !== a2 || ai[252] !== rx
          ? ((tc =
              rx && null != a2
                ? (0, i.jsx)(th.H, { conversationId: a2.conversationId, embedded: !0 }, a2.conversationId)
                : void 0),
            (ai[251] = a2),
            (ai[252] = rx),
            (ai[253] = tc))
          : (tc = ai[253]),
        ai[254] !== nC || ai[255] !== nv || ai[256] !== np || ai[257] !== aB
          ? ((tu = nv
              ? (0, i.jsx)(oE, {
                  onAttachmentRemoved: () => {
                    ;((0, V.td)(aB, nC),
                      0 !== np.length ||
                        0 !== aB.get(H.a$).length ||
                        0 !== aB.get(H.PA).length ||
                        0 !== aB.get(H.gy).length ||
                        (0, V.ov)(aB) ||
                        nd(oW))
                  },
                })
              : void 0),
            (ai[254] = nC),
            (ai[255] = nv),
            (ai[256] = np),
            (ai[257] = aB),
            (ai[258] = tu))
          : (tu = ai[258]))
      let lw = a2 ?? nm,
        lb = nP.pendingCaptureCount > 0,
        lC = null != ax || !iT,
        lx = !rx && (nJ || null != a1),
        lA = null == a1 ? n0 : null,
        lI = a4 ? "quick-chat" : void 0
      ;(ai[259] !== iI?.handoff ||
      ai[260] !== iM ||
      ai[261] !== rR ||
      ai[262] !== i_ ||
      ai[263] !== ig ||
      ai[264] !== iR ||
      ai[265] !== iA ||
      ai[266] !== nn ||
      ai[267] !== iH ||
      ai[268] !== oj ||
      ai[269] !== iy.canStart ||
      ai[270] !== iy.isMicrophoneMuted ||
      ai[271] !== iy.isMuted ||
      ai[272] !== iy.start ||
      ai[273] !== iy.startError ||
      ai[274] !== iy.stop ||
      ai[275] !== iy.toggleMicrophoneMute ||
      ai[276] !== iy.toggleMute ||
      ai[277] !== iy.voiceActivity ||
      ai[278] !== ij ||
      ai[279] !== iV ||
      ai[280] !== iq ||
      ai[281] !== ip ||
      ai[282] !== iS
        ? ((tA = ig
            ? {
                activity: iy.voiceActivity,
                arePetControlsExpanded: rR,
                canStart: iy.canStart,
                caption: iH,
                errorMessage: iy.startError,
                handoff: "global-overlay" === iM ? (iI?.handoff ?? null) : null,
                isAudioReady: i_,
                isSessionActive: iR,
                isTransferring: iA,
                microphoneMuted: iy.isMicrophoneMuted,
                muted: iy.isMuted,
                petOpenIntent: iq,
                petControlsAppearance: nn,
                phase: ij,
                presentationAnchorRef: iV,
                statusText: oj,
                usesPresentationFadeTransition: iS,
                usesNativeStackPresentationTransition: ip,
                onStart: iy.start,
                onStop: iy.stop,
                onToggleMicrophoneMute: iy.toggleMicrophoneMute,
                onToggleMute: iy.toggleMute,
              }
            : void 0),
          (ai[259] = iI?.handoff),
          (ai[260] = iM),
          (ai[261] = rR),
          (ai[262] = i_),
          (ai[263] = ig),
          (ai[264] = iR),
          (ai[265] = iA),
          (ai[266] = nn),
          (ai[267] = iH),
          (ai[268] = oj),
          (ai[269] = iy.canStart),
          (ai[270] = iy.isMicrophoneMuted),
          (ai[271] = iy.isMuted),
          (ai[272] = iy.start),
          (ai[273] = iy.startError),
          (ai[274] = iy.stop),
          (ai[275] = iy.toggleMicrophoneMute),
          (ai[276] = iy.toggleMute),
          (ai[277] = iy.voiceActivity),
          (ai[278] = ij),
          (ai[279] = iV),
          (ai[280] = iq),
          (ai[281] = ip),
          (ai[282] = iS),
          (ai[283] = tA))
        : (tA = ai[283]),
        ai[284] !== i3 ||
        ai[285] !== i0 ||
        ai[286] !== rR ||
        ai[287] !== ot ||
        ai[288] !== nO ||
        ai[289] !== r6 ||
        ai[290] !== le ||
        ai[291] !== rZ ||
        ai[292] !== li ||
        ai[293] !== rG ||
        ai[294] !== r$ ||
        ai[295] !== ln ||
        ai[296] !== r4 ||
        ai[297] !== r7 ||
        ai[298] !== rK ||
        ai[299] !== r3 ||
        ai[300] !== rQ ||
        ai[301] !== lt ||
        ai[302] !== a9 ||
        ai[303] !== i4 ||
        ai[304] !== rC ||
        ai[305] !== rw ||
        ai[306] !== n4 ||
        ai[307] !== iu ||
        ai[308] !== os ||
        ai[309] !== n6 ||
        ai[310] !== rs ||
        ai[311] !== nP.response ||
        ai[312] !== nP.startsCollapsed ||
        ai[313] !== np ||
        ai[314] !== no ||
        ai[315] !== af ||
        ai[316] !== ru ||
        ai[317] !== ay ||
        ai[318] !== aq ||
        ai[319] !== aj ||
        ai[320] !== aC ||
        ai[321] !== aw ||
        ai[322] !== lc ||
        ai[323] !== lu ||
        ai[324] !== e3 ||
        ai[325] !== e4 ||
        ai[326] !== ld ||
        ai[327] !== e5 ||
        ai[328] !== lp ||
        ai[329] !== e6 ||
        ai[330] !== lm ||
        ai[331] !== e8 ||
        ai[332] !== e7 ||
        ai[333] !== e9 ||
        ai[334] !== te ||
        ai[335] !== ta ||
        ai[336] !== ti ||
        ai[337] !== lf ||
        ai[338] !== lh ||
        ai[339] !== lg ||
        ai[340] !== tn ||
        ai[341] !== to ||
        ai[342] !== tr ||
        ai[343] !== lv ||
        ai[344] !== ly ||
        ai[345] !== tl ||
        ai[346] !== ts ||
        ai[347] !== tc ||
        ai[348] !== tu ||
        ai[349] !== lw ||
        ai[350] !== lb ||
        ai[351] !== lC ||
        ai[352] !== lx ||
        ai[353] !== lA ||
        ai[354] !== lI ||
        ai[355] !== tA ||
        ai[356] !== ll ||
        ai[357] !== ls
          ? ((t6 = {
              quickChatFocusRequested: ll,
              animatesQuickChatPresentation: ls,
              activityCopies: lc,
              activitySwipeHost: tG.appServices.avatarOverlayScroll,
              activityStackPresentation: lu,
              orbitTranscriptHeader: e3,
              orbitTranscript: e4,
              areActivityPillsPresent: i3,
              areActivityPillsVisible: i0,
              avatar: aC,
              petAnimationPaused: ld,
              avatarMenuItems: e5,
              debugWindowBorderVisible: a9,
              interactiveRegionRef: rk,
              isNotificationTrayOpen: i4,
              mascotDragState: os,
              isRealtimeNativeOverlayEnabled: iu,
              cssOrbGlowEnabled: lp,
              expandedNotificationIds: ot,
              mascotStyle: e6,
              notifications: rs,
              arePresentationAccessoriesVisible: lm,
              quickChatDictation: e8,
              onActivityStackScroll: e7,
              onActivateNotification: r6,
              onHideActivityPills: li,
              onActivityPillsHidden: e9,
              onMascotLostPointerCapture: te,
              onMascotPointerCancel: ta,
              onMascotPointerDown: rG,
              onMascotPointerMove: r$,
              onMascotPointerUp: ti,
              onPetAreaHoverChange: nt,
              onNotificationExpansionChange: r4,
              onNotificationPointerEnter: lf,
              onGeometryAnimationFrame: lh,
              onDismissNotification: rZ,
              onOpenNotificationActions: lg,
              notificationFollowUp: n6,
              onQuickChatFocusChange: r7,
              onContextMenuOpenChange: le,
              onQuickChatOpen: tn,
              onQuickChatDraftChange: to,
              onRemoveQuickChatAppshots: tr,
              onQuickChatVoiceSelectionChange: n5,
              onQuickChatVisibilityChange: lv,
              onRunNotificationControl: ln,
              onRunNotificationAction: rK,
              onSubmitQuestionOption: rQ,
              onSubmitQuickChat: lt,
              quickChatReply: ly,
              onRemoveQuickChatReply: tl,
              quickChatFlights: ru,
              onQuickChatFlightComplete: ts,
              onShowActivityPills: r3,
              getQuickChatAttachmentActions: nO,
              quickChatComposerReplacement: tc,
              quickChatFileAttachments: tu,
              quickChatAppshots: np,
              quickChatThreadTarget: lw,
              quickChatAppshotCapturePending: lb,
              quickChatAppshotCaptureResponse: nP.response,
              quickChatAppshotCaptureStartsCollapsed: nP.startsCollapsed,
              quickChatDraft: no,
              quickChatEnabled: af,
              quickChatStashEnabled: aq,
              isQuickChatPetVisible: lC,
              quickChatStyleEnabled: aj,
              quickChatExpanded: rC,
              petControlsExpanded: rR,
              quickChatStashAppearance: ay,
              stashAttentionAnimation: aw,
              quickChatEditorActive: lx,
              quickChatCompositionDeferral: lA,
              quickChatVisible: rw,
              quickChatVoiceSelected: n4,
              presentation: lI,
              realtimeVoiceSurface: tA,
            }),
            (ai[284] = i3),
            (ai[285] = i0),
            (ai[286] = rR),
            (ai[287] = ot),
            (ai[288] = nO),
            (ai[289] = r6),
            (ai[290] = le),
            (ai[291] = rZ),
            (ai[292] = li),
            (ai[293] = rG),
            (ai[294] = r$),
            (ai[295] = ln),
            (ai[296] = r4),
            (ai[297] = r7),
            (ai[298] = rK),
            (ai[299] = r3),
            (ai[300] = rQ),
            (ai[301] = lt),
            (ai[302] = a9),
            (ai[303] = i4),
            (ai[304] = rC),
            (ai[305] = rw),
            (ai[306] = n4),
            (ai[307] = iu),
            (ai[308] = os),
            (ai[309] = n6),
            (ai[310] = rs),
            (ai[311] = nP.response),
            (ai[312] = nP.startsCollapsed),
            (ai[313] = np),
            (ai[314] = no),
            (ai[315] = af),
            (ai[316] = ru),
            (ai[317] = ay),
            (ai[318] = aq),
            (ai[319] = aj),
            (ai[320] = aC),
            (ai[321] = aw),
            (ai[322] = lc),
            (ai[323] = lu),
            (ai[324] = e3),
            (ai[325] = e4),
            (ai[326] = ld),
            (ai[327] = e5),
            (ai[328] = lp),
            (ai[329] = e6),
            (ai[330] = lm),
            (ai[331] = e8),
            (ai[332] = e7),
            (ai[333] = e9),
            (ai[334] = te),
            (ai[335] = ta),
            (ai[336] = ti),
            (ai[337] = lf),
            (ai[338] = lh),
            (ai[339] = lg),
            (ai[340] = tn),
            (ai[341] = to),
            (ai[342] = tr),
            (ai[343] = lv),
            (ai[344] = ly),
            (ai[345] = tl),
            (ai[346] = ts),
            (ai[347] = tc),
            (ai[348] = tu),
            (ai[349] = lw),
            (ai[350] = lb),
            (ai[351] = lC),
            (ai[352] = lx),
            (ai[353] = lA),
            (ai[354] = lI),
            (ai[355] = tA),
            (ai[356] = ll),
            (ai[357] = ls),
            (ai[358] = t6))
          : (t6 = ai[358]))
      let lM = t6
      return (
        ai[359] !== rY || ai[360] !== rB
          ? ((t7 = () => {
              ;(rY(), rB())
            }),
            (ai[359] = rY),
            (ai[360] = rB),
            (ai[361] = t7))
          : (t7 = ai[361]),
        ai[362] === Symbol.for("react.memo_cache_sentinel")
          ? ((t9 = (e) => {
              n3((t) => (t?.requestId === e ? null : t))
            }),
            (ai[362] = t9))
          : (t9 = ai[362]),
        ai[363] !== lM || ai[364] !== an || ai[365] !== n2 || ai[366] !== aW || ai[367] !== t7
          ? ((aa = (0, i.jsx)(n8, {
              presentation: an,
              frameProps: lM,
              onLayoutApplied: t7,
              onQuickChatFocusCompleted: t9,
              quickChatFocusPreparation: n2,
              runtimeId: aW,
            })),
            (ai[363] = lM),
            (ai[364] = an),
            (ai[365] = n2),
            (ai[366] = aW),
            (ai[367] = t7),
            (ai[368] = aa))
          : (aa = ai[368]),
        aa
      )
    }
    function oW(e) {
      return { ...e, threadTarget: null }
    }
    function oG() {}
    function o$() {
      K.O1.dispatchMessage("show-settings", { section: "pets" })
    }
    function oK(e) {
      let { copy: t } = e
      return t
    }
    function oQ(e) {
      return Math.max(Date.now(), e + 1)
    }
    function oZ(e) {
      return Math.max(Date.now(), e + 1)
    }
    function oJ(e) {
      tJ.v.debug("Failed to request the current avatar overlay layout", { safe: {}, sensitive: { error: e } })
    }
    function o0() {
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
    function o1(e) {
      return [e, null]
    }
    function o2(e) {
      return { ...e, localPath: void 0 }
    }
    function o3(e, t) {
      K.O1.dispatchMessage("avatar-overlay-keyboard-interaction-changed", { isInteractive: e, restorePreviousFocus: t })
    }
    function o4(e) {
      K.O1.dispatchMessage("avatar-overlay-pointer-interaction-changed", { isInteractive: e })
    }
    function o5(e) {
      return "cloud" === e.source && "running" === e.status
    }
    function o6(e) {
      return "cloud" !== e.source && "running" === e.status
    }
    function o8() {
      return new Map()
    }
    function o7(e) {
      return !e.isLoading
    }
    function o9() {
      return Date.now()
    }
    function re() {
      return new Map()
    }
    function rt(e) {
      let { localConversationId: t } = e
      return null == t ? [] : [t]
    }
    function ra() {
      return crypto.randomUUID()
    }
    function ri() {
      return new ai()
    }
    function rn(e) {
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
  AAVC(e, t, a) {
    a.d(t, { F: () => R, X: () => _ })
    var i = a("DBCl")
    a("XW6f")
    var n = a("wTVm"),
      o = a("Dgwo"),
      r = a("RWvA"),
      l = a("FbPV"),
      s = a("TSib"),
      c = a("SGsN"),
      u = a("NMCC"),
      d = a("uGmM"),
      p = a("YYwy"),
      m = a("GaA7"),
      f = a("Sd8U"),
      h = a("kfGJ"),
      g = a("Yscs"),
      v = a("kFKz"),
      y = a("bnxy"),
      w = a("mt4D"),
      b = a("A8Az"),
      C = a("NySd"),
      x = a("Hvvy"),
      A = a("uIyc"),
      I = a("sXdr"),
      M = a("UBpz"),
      S = a("qEnx"),
      E = a("xa8Q")
    function R({
      scope: e,
      attachmentGeneration: t,
      canceledPendingFileAttachmentIds: a,
      canCopyBrowserFileAttachments: M,
      onLocalImageQueued: _,
      composerMode: T,
      getUploadToCloud: k,
      executionHostConfig: O,
      executionHostId: P,
      getRestrictedRemoteHostImageSizeContext: N,
      intl: L,
      notifyImageInputUnsupported: F,
      setAddedFiles: q,
      setFileAttachments: j,
      setImageAttachments: D,
      setPendingFileAttachments: U,
      shouldRestrictRemoteHostImageSize: H = !1,
      supportsImageInputs: B,
    }) {
      let V = (a, i, o, r, c, d) => {
          var p, f
          let v, y, x, I, S, E, R
          if (!B) return (F(), !1)
          if (0 === a.length) return !0
          if (
            !(({
              additionalImageDataUrls: e = [],
              additionalImageSizeBytes: t = 0,
              notifyOnFailure: a = !0,
              replacingImageId: i,
            }) => !0)({ additionalImageSizeBytes: a.reduce((e, t) => e + t.size, 0) })
          )
            return !1
          let k = t.current,
            N = [],
            L = (e, a) => {
              a.then((a) => {
                t.current === k && null != a && D((t) => t.map((t) => (t.id === e ? { ...t, localPath: a } : t)))
              }).catch(() => {})
            },
            q = !1
          for (let t of a) {
            let a,
              l,
              s = window.electronBridge?.getPathForFile,
              u = (0, w.xE)(t),
              p = "cloud" !== T,
              f = p && M ? (e) => (0, w.Br)(e, W) : void 0,
              v = (0, C.ho)(
                t,
                s,
                p && 1 ? m.appServices.fileAttachments.persistImageFileToTemp : void 0,
                p && P !== h.fI ? (t) => (0, w.HJ)(t, { scope: e, hostConfig: O, hostId: P }) : void 0,
                f,
                i,
              ).catch(() => null),
              y = null == r ? void 0 : (0, n.A)(),
              b = (e) => {
                z(async (e) => ((a = a ?? (0, g.G)(t)), { id: e, src: await a, filename: u }), {
                  newImageId: y,
                  onPending: (e) => {
                    null != l && (l.isPending = e)
                  },
                  onComplete: (e) => {
                    null != l && ((l.isPending = void 0), "canceled" !== e && (l.restart = void 0))
                  },
                  orderKey: c?.get(t),
                  isAvailable: null == d ? void 0 : () => q || !d.signal.aborted,
                  onQueued: (t) => {
                    ;(_?.(t), d?.onQueued(t), q || ((q = !0), o?.()), L(t, v), e?.())
                  },
                })
              }
            ;(null != y && ((l = { id: y, size: t.size, restart: b, restoreLocalPath: L.bind(null, y, v) }), N.push(l)),
              b())
          }
          return (
            null != r &&
              N.length > 0 &&
              r(
                ((p = () => t.current === k),
                (f = (e, t, a) =>
                  (({
                    additionalImageDataUrls: e = [],
                    additionalImageSizeBytes: t = 0,
                    notifyOnFailure: a = !0,
                    replacingImageId: i,
                  }) => !0)({ additionalImageDataUrls: e, additionalImageSizeBytes: t, notifyOnFailure: a })),
                (v = (0, l.hj)(e)),
                (y = N),
                (x = []),
                (I = []),
                (S = []),
                (E = []),
                (R = (t) => (0, A.ov)(e, t) || e.get(s.gy).some((e) => e.id === t)),
                {
                  hasNewerAppAction: (e) => v(e),
                  canApply: (t) =>
                    p() &&
                    ("undo" === t
                      ? y.some((t) => t.isPending?.() || (!(0, A.ov)(e, t.id) && R(t.id)))
                      : x.some(({ member: e }) => !R(e.id))),
                  canRestore: (e) => {
                    let t = x.filter(({ member: e }) => !R(e.id))
                    return f(
                      t.flatMap(({ saved: e }) => (null == e ? [] : [e.uploadSrc ?? e.src])),
                      t.reduce((e, { member: t, saved: a }) => e + (null == a ? t.size : 0), 0),
                      e,
                    )
                  },
                  undo: () => {
                    v = (0, l.hj)(e)
                    let t = e.get(s.JX)
                    E = t.map(({ attachmentId: e }) => e)
                    let a = e.get(s.gy)
                    for (let i of ((S = a.map(({ id: e }) => e)), (I = e.get(s.CH)), (x = []), y)) {
                      let n = i.isPending?.()
                      if (!n && (0, A.ov)(e, i.id)) continue
                      let o = a.find((e) => e.id === i.id)
                      if (!n && null == o) continue
                      let r = t.find(({ attachmentId: e }) => e === i.id)
                      ;(x.push({ member: i, saved: n ? void 0 : o, comment: r }),
                        n && (0, A.td)(e, i.id),
                        null != r && (0, u.II)(e, i.id))
                    }
                    let i = new Set(x.map(({ member: e }) => e.id))
                    ;(D((e) => e.filter((e) => !i.has(e.id))),
                      (0, s.KZ)(
                        e,
                        Array.from(i, (e) => (0, b.Xq)("image", e)),
                      ))
                  },
                  redo: () => {
                    v = (0, l.hj)(e)
                    let t = x.filter(({ member: e }) => !R(e.id))
                    ;((y = t.map(({ member: e }) => e)), (x = []))
                    let a = t.flatMap(({ saved: e }) => e ?? [])
                    a.length > 0 &&
                      D((e) => {
                        let t = new Map([...e, ...a].map((e) => [e.id, e]))
                        return (0, b.a6)(
                          e.map(({ id: e }) => e),
                          S,
                          a.map(({ id: e }) => e),
                        ).flatMap((e) => t.get(e) ?? [])
                      })
                    let i = E
                    for (let { member: a, saved: n, comment: o } of t) {
                      let t = () => {
                        null == o ||
                          e.get(s.JX).some((e) => e.attachmentId === a.id) ||
                          ((0, u.E$)(e, a.id, o.attachmentSrc),
                          (0, s.Rh)(e, "imageCommentDrafts", (e) => {
                            let t = e.filter((e) => e.attachmentId !== a.id),
                              n = (0, b.a6)(
                                t.map((e) => e.attachmentId),
                                i,
                                [a.id],
                              ).indexOf(a.id)
                            return t.toSpliced(n, 0, o)
                          }))
                      }
                      null == n ? a.restart?.(t) : (a.restoreLocalPath(), t())
                    }
                    ;(0, s.mt)(
                      e,
                      I,
                      t.map(({ member: e }) => (0, b.Xq)("image", e.id)),
                    )
                  },
                }),
              ),
            !0
          )
        },
        z = async (a, o = {}) => {
          let r = (0, f.ah)(e)
          if (o.isAvailable?.() === !1) return void o.onComplete?.("blocked")
          let d = t.current,
            m = e.get(s.gy).find((e) => e.id === o.replaceImageId)
          if (null != o.replaceImageId && null == m) return void o.onComplete?.("blocked")
          let h = m?.id ?? o.newImageId ?? (0, n.A)(),
            g = (0, b.Xq)("image", h)
          null != o.orderKey ? (0, s.vi)(e, o.orderKey, g) : (0, s.A5)(e, [g])
          let v = !1,
            y = !1,
            w = (a, i) => {
              y ||
                ((y = !0),
                "success" !== a && null == m && (0, s.KZ)(e, [g]),
                o.signal?.removeEventListener("abort", C),
                "success" !== a &&
                  v &&
                  t.current === d &&
                  (null == m && e.get(s.JX).some((e) => e.attachmentId === h) && (0, u.II)(e, h),
                  D((e) => (null == m ? e.filter((e) => e.id !== h) : e.map((e) => (e.id === h ? m : e))))),
                "success" === a ? x.succeed() : x.fail(),
                o.onComplete?.(a, i))
            },
            C = () => w("canceled"),
            x = (0, A.Mz)(e, { hostId: P, id: h, onCancel: C })
          o.onPending?.(x.isPending)
          let I = () =>
            !y &&
            (o.signal?.aborted || t.current !== d || ((v || null != m) && !e.get(s.gy).some((e) => e.id === h))
              ? (w("canceled"), !1)
              : o.isAvailable?.() !== !1 || (w("blocked"), !1))
          o.signal?.addEventListener("abort", C, { once: !0 })
          try {
            if (!I()) return
            let t = a(h),
              i = { ...(t instanceof Promise ? await t : t), uploadStatus: "cloud" === T ? "uploading" : "idle" }
            if (!I()) return
            if (
              !(({
                additionalImageDataUrls: e = [],
                additionalImageSizeBytes: t = 0,
                notifyOnFailure: a = !0,
                replacingImageId: i,
              }) => !0)({ additionalImageDataUrls: [i.uploadSrc ?? i.src], replacingImageId: m?.id })
            )
              return void w("blocked")
            if (
              ((v = !0),
              D((e) =>
                null == m ? [...e, i] : e.map((e) => (e.id === h ? { ...m, uploadStatus: i.uploadStatus } : e)),
              ),
              o.onQueued?.(h),
              !I())
            )
              return
            let n =
              "cloud" === T
                ? {
                    ...i,
                    ...(await (0, S.s)({
                      dataUrl: i.uploadSrc ?? i.src,
                      filename: i.filename ?? `image-${h}.png`,
                      onStep: o.onUploadStep,
                    })),
                  }
                : i
            if (!I()) return
            ;(D((e) => e.map((e) => (e.id !== h ? e : { ...e, ...n }))),
              null != m &&
                (i.src !== m.src || i.markupPrompt !== m.markupPrompt) &&
                (0, l.mq)(e, `composer-image-attachments:${(0, f.eL)(e.value)}`),
              w("success"))
          } catch (t) {
            I() &&
              (e
                .get(c.Id)
                .danger(
                  L.formatMessage({
                    id: "composer.imageUploadFailed",
                    defaultMessage: "Failed to upload image",
                    description: "Toast shown when an image fails to upload",
                  }),
                  {
                    errorAnalytics: { toastId: "composer.imageUploadFailed" },
                    primaryAction: (0, p.t)(e, {
                      conversationId: r,
                      surface: "codex",
                      operation: "attachment",
                      errorMessage: (0, i.Rt_)(t),
                      occurredAtMs: Date.now(),
                    }),
                  },
                ),
              w("error", t))
          }
        },
        Y = (t) => {
          let a = ({ fsPath: e, startLine: t, endLine: a }) => JSON.stringify([(0, y.XH)(e), t, a]),
            i = new Set([...e.get(s.a$), ...e.get(s.PA)].map(a))
          return t.filter((e) => {
            let t = a(e)
            return !i.has(t) && (i.add(t), !0)
          })
        },
        X = (t, a) => {
          let i = Y(t)
          for (let t of i) {
            let i = a?.get(t)
            null != i && (0, s.vi)(e, i, (0, b.Jz)(t, "added-file"))
          }
          return (
            null != a &&
              (0, s.KZ)(
                e,
                t.flatMap((e) => a.get(e) ?? []),
              ),
            0 !== i.length && (q((e) => [...e, ...i]), !0)
          )
        },
        W = (t) => (0, w.x1)(e, t, { copyFromLocalFile: M }),
        G = async (l, u, m) => {
          let g = (0, f.ah)(e)
          if (k?.()) {
            let a = t.current
            ;(u?.(), await (0, E.gv)(e, l, { orderKeys: m, hostId: P, shouldDiscard: () => t.current !== a || !k() }))
            return
          }
          if (P === h.fI) {
            let t = Y(l)
            for (let a of t) {
              let t = (0, b.Jz)(a),
                i = m?.get(a)
              null != i ? (0, s.vi)(e, i, t) : (0, s.A5)(e, [t])
            }
            ;(null != m &&
              (0, s.KZ)(
                e,
                l.flatMap((e) => m.get(e) ?? []),
              ),
              t.length > 0 && (j((e) => [...e, ...t]), u?.()))
            return
          }
          let v = l.filter((e) => !(0, i.skP)(e))
          for (let t of l)
            if ((0, i.skP)(t)) {
              let a = m?.get(t)
              null != a && (0, s.KZ)(e, [a])
            }
          if (
            (v.length !== l.length &&
              e
                .get(c.Id)
                .danger(
                  L.formatMessage({
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
            let i = (0, b.Xq)("pending", a.id),
              n = v[t],
              o = null == n ? void 0 : m?.get(n)
            null != o ? (0, s.vi)(e, o, i) : (0, s.A5)(e, [i])
          }
          let w = t.current
          ;(U((e) => [...e, ...y]), u?.())
          let C = y.map(({ id: t }) => (0, A.Mz)(e, { hostId: P, id: t }))
          try {
            let n = await (0, o.V)(e, P).uploadLocalFileAttachments({ attachments: v, allowSftpUpload: (0, i.Tim)(O) })
            if (t.current === w) {
              let t = n.filter((t, i) => {
                let n = y[i],
                  o = null != n && !a.has(n.id)
                return (
                  o &&
                    (null != n.localPreviewPath && x.Y.set(t, { id: n.id, path: n.localPreviewPath }),
                    (0, s.vi)(e, (0, b.Xq)("pending", n.id), (0, b.Jz)(t))),
                  o
                )
              })
              for (let [e, i] of (t.length > 0 && j((e) => [...e, ...t]), y.entries()))
                null == n[e] || a.has(i.id) || C[e]?.succeed()
            }
          } catch (n) {
            if ((0, d.e)(e) && (t.current !== w || y.every(({ id: e }) => a.has(e)))) return
            e.get(c.Id).danger((0, r.c)(n, L), {
              primaryAction: (0, p.t)(e, {
                conversationId: g,
                surface: "codex",
                operation: "attachment",
                errorMessage: (0, i.Rt_)(n),
                occurredAtMs: Date.now(),
              }),
              errorAnalytics: { toastId: "composerAttachmentActions.uploadLocalFileAttachments" },
            })
          } finally {
            for (let e of C) e.fail()
            ;(0, I.xm)(e, h.fI, v)
            let t = new Set(y.map((e) => e.id))
            for (let i of ((0, s.KZ)(
              e,
              [...t].map((e) => (0, b.Xq)("pending", e)),
            ),
            U((e) => e.filter((e) => !t.has(e.id))),
            t))
              a.delete(i)
          }
        },
        $ = (a, o, r, l, u) => {
          if (0 === a.length) return
          let m = u ?? K(a)
          if (k?.()) {
            let i = t.current
            ;(r?.(),
              (0, E.gv)(e, a, {
                orderKeys: m,
                directoryFiles:
                  l ??
                  (0, v.p)(o ?? null)
                    .filter(({ isDirectory: e }) => e)
                    .map(({ file: e }) => e),
                hostId: P,
                shouldDiscard: () => t.current !== i || !k(),
              }))
            return
          }
          let g = window.electronBridge?.getPathForFile,
            w = (0, C.FA)(a, g, o, l),
            x = M ? a.filter((e) => e.size > 0 && null == (0, C.gY)(e, g)) : [],
            I = new Map()
          for (let t of a) {
            let a = (0, C.gY)(t, g),
              i = null == a ? void 0 : w.find((e) => (0, y.XH)(e.fsPath) === (0, y.XH)(a)),
              n = m.get(t)
            null != n && (null == i || I.has(i) ? x.includes(t) || (0, s.KZ)(e, [n]) : I.set(i, n))
          }
          if (x.length > 0) {
            let a = (0, A.Mz)(e, { hostId: P, id: (0, n.A)() }),
              o = (0, f.ah)(e)
            ;(async () => {
              let n = t.current
              try {
                let i = await W(x)
                if (t.current !== n) return
                for (let [t, a] of i.entries()) {
                  let i = x[t],
                    n = null == i ? void 0 : m.get(i)
                  null != n && (0, s.vi)(e, n, (0, b.Jz)(a))
                }
                let o = X(w, I)
                ;(j((e) => [...e, ...i]), a.succeed(), (o || i.length > 0) && r?.())
              } catch (r) {
                if ((0, d.e)(e) && t.current !== n) return
                let a = L.formatMessage({
                  id: "composer.fileAttachment.browserFileCopyError",
                  defaultMessage: "Unable to attach file",
                  description: "Toast shown when copying a browser-selected file to a local attachment path fails",
                })
                e.get(c.Id).danger(a, {
                  primaryAction: (0, p.t)(e, {
                    conversationId: o,
                    surface: "codex",
                    operation: "attachment",
                    errorMessage: (0, i.Rt_)(r),
                    occurredAtMs: Date.now(),
                  }),
                  errorAnalytics: { toastId: "composer.fileAttachment.browserFileCopyError" },
                })
              } finally {
                ;(a.fail(), (0, s.KZ)(e, [...m.values()]))
              }
            })()
            return
          }
          P !== h.fI ? G(w, r, I) : X(w, I) && r?.()
        },
        K = (t) => {
          let a = new Map(t.map((e) => [e, (0, b.Xq)("pending", (0, n.A)())]))
          return ((0, s.A5)(e, [...a.values()]), a)
        },
        Q = (t, a, n, o, r) => {
          let l =
              r ??
              (0, v.p)(n ?? null)
                .filter((e) => e.isDirectory)
                .map((e) => e.file),
            c = K(t),
            u = t.filter((e) => !l.includes(e) && (0, i.cb0)(e)),
            d = t.filter((e) => !u.includes(e)),
            p = 0 === u.length || V(u, a, o, void 0, c)
          ;(p ||
            (0, s.KZ)(
              e,
              u.flatMap((e) => c.get(e) ?? []),
            ),
            p
              ? $(d, n, o, l, c)
              : (0, s.KZ)(
                  e,
                  d.flatMap((e) => c.get(e) ?? []),
                ))
        }
      return {
        addDraggedImage: async (a, i) => {
          let o = t.current,
            r = (0, b.Xq)("pending", (0, n.A)())
          ;(0, s.A5)(e, [r])
          let l = (0, A.Mz)(e, { hostId: P, id: (0, n.A)() })
          try {
            let e = await (0, C.Rb)(a)
            null != e && t.current === o && (V([e], "drop", i, void 0, new Map([[e, r]])), l.succeed())
          } finally {
            ;(l.fail(), (0, s.KZ)(e, [r]))
          }
        },
        addFiles: Q,
        addPickedFiles: async (a, { imagesOnly: o, loadImageDataUrls: r, orderKeys: l }) => {
          let c = t.current,
            u = a.filter((e) => !(0, i.skP)(e) && (0, i.DEu)(e.fsPath || e.path || e.label)),
            d = o ? u : a,
            p = l ?? K(d),
            m = (0, A.Mz)(e, { hostId: P, id: (0, n.A)() })
          try {
            let e = 0 === u.length ? [] : await r(u)
            if (t.current !== c) return
            let i = 0
            if (e.some((e) => null != e) && !B) F()
            else if (
              (({
                additionalImageDataUrls: e = [],
                additionalImageSizeBytes: t = 0,
                notifyOnFailure: a = !0,
                replacingImageId: i,
              }) => !0)({ additionalImageDataUrls: e.flatMap((e) => e?.dataUrl ?? []) })
            )
              for (let [t, a] of e.entries()) {
                let e = u[t]
                null != a &&
                  null != e &&
                  (i++,
                  z((e) => ({ id: e, src: a.dataUrl, localPath: a.localPath, filename: a.filename }), {
                    orderKey: p.get(e),
                    onQueued: _,
                  }))
              }
            ;(o ||
              (await G(
                a.filter((e) => !u.includes(e)),
                void 0,
                p,
              )),
              i === u.length && m.succeed())
          } finally {
            ;(m.fail(), (0, s.KZ)(e, [...p.values()]))
          }
        },
        addFileDescriptorsAsMentions: X,
        addFileMentionsFromFiles: $,
        addImageDataUrls: (e, t) => {
          if (
            0 === e.length ||
            !(({
              additionalImageDataUrls: e = [],
              additionalImageSizeBytes: t = 0,
              notifyOnFailure: a = !0,
              replacingImageId: i,
            }) => !0)({ additionalImageDataUrls: e.map((e) => e.dataUrl) })
          )
            return !1
          for (let a of e)
            z((e) => ({ id: e, src: a.dataUrl, localPath: a.localPath, filename: a.filename }), {
              onQueued: "screenshot" === t ? _ : void 0,
            })
          return !0
        },
        addHomeImage: (e, t, a) => {
          V([e], "paste", void 0, void 0, void 0, { signal: t, onQueued: a })
        },
        addImages: V,
        addSidebarDroppedFiles: (e, t) => {
          let { directoryFiles: a, files: i } = e
          Q(i, "drop", null, t, a)
        },
        addImageAttachment: z,
        pickBrowserAttachments: async ({ imagesOnly: a }) => {
          let o = t.current,
            r = k?.(),
            l = await (0, w.lB)({ imagesOnly: a })
          if (t.current !== o || r !== k?.()) return null
          if (r && !M) return (Q(a ? l.filter(i.cb0) : l, "picker", null), null)
          let c = K(l),
            u = (0, A.Mz)(e, { hostId: P, id: (0, n.A)() })
          try {
            let a = await W(l)
            if (t.current !== o) return ((0, s.KZ)(e, [...c.values()]), { files: [] })
            let i = new Map()
            for (let [e, t] of a.entries()) {
              let a = l[e],
                n = null == a ? void 0 : c.get(a)
              null != n && i.set(t, n)
            }
            return (u.succeed(), { files: a, orderKeys: i })
          } catch (t) {
            throw ((0, s.KZ)(e, [...c.values()]), t)
          } finally {
            u.fail()
          }
        },
        uploadImageAttachment: (a, i) => {
          t.current === i &&
            z(() => a, {
              replaceImageId: a.id,
              onComplete: (t) => {
                "error" === t &&
                  (e.get(s.JX).some((e) => e.attachmentId === a.id) && (0, u.II)(e, a.id),
                  D((e) => e.filter((e) => e.id !== a.id)))
              },
            })
        },
        uploadLocalFileAttachments: G,
      }
    }
    function _(e, t, a) {
      let i = (t) => a(t, "paste", void 0, (t) => (0, M.Od)(e.view, t)),
        n = (e, a) => {
          t(e, "paste", a ?? void 0)
        }
      return (
        e.addPastedImagesHandler(i),
        e.addPastedFilesHandler(n),
        () => {
          ;(e.removePastedImagesHandler(i), e.removePastedFilesHandler(n))
        }
      )
    }
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
    a.d(t, { F: () => ey })
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
    function I(e) {
      let t,
        a = (0, n.c)(2)
      return null == e.browserConversationId || y.appServices?.browserAutocomplete == null
        ? null
        : (a[0] !== e
            ? ((t = (0, i.jsx)(M, { ...e, browserConversationId: e.browserConversationId })), (a[0] = e), (a[1] = t))
            : (t = a[1]),
          t)
    }
    function M(e) {
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
      T = a("bVeK"),
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
      X = a("EkcR"),
      W = a("oC9a"),
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
        v,
        y = (0, n.c)(53),
        {
          backgroundAgents: w,
          className: C,
          chromeVariant: x,
          fixedSectionHeaders: A,
          enableFloatingWorkMenu: I,
          excludedAgentConversationIds: M,
          excludedThreadReferences: S,
          excludedPluginId: E,
          hostId: R,
          isHomeMenu: _,
          keyboardEventTarget: k,
          leadingItems: P,
          pluginHostId: N,
          onAddContext: L,
          onRequestClose: F,
          onUpdateSelectedMention: B,
          placement: V,
          query: $,
          rankingContext: J,
          fileSearchRootPaths: ee,
          skillRoots: ea,
          threadSearchHostId: ei,
          threadSearchRoots: es,
          typedSitesMentionRef: ec,
          source: eu,
        } = e
      y[0] !== w ? ((t = void 0 === w ? [] : w), (y[0] = w), (y[1] = t)) : (t = y[1])
      let ed = t,
        ep = void 0 === x ? "default" : x,
        em = void 0 !== A && A
      y[2] !== M ? ((a = void 0 === M ? [] : M), (y[2] = M), (y[3] = a)) : (a = y[3])
      let ef = a
      y[4] !== S ? ((o = void 0 === S ? [] : S), (y[4] = S), (y[5] = o)) : (o = y[5])
      let eh = o,
        eg = void 0 !== _ && _
      y[6] !== P ? ((r = void 0 === P ? [] : P), (y[6] = P), (y[7] = r)) : (r = y[7])
      let ev = r,
        ey = void 0 === V ? "top" : V,
        ew = void 0 === ei ? R : ei,
        eb = (0, s.gh)(O.PR),
        eC = (0, b.Zj)("2163293173"),
        ex = (0, d.A)(),
        eA = (0, f.Zp)(),
        eI = (0, s.Ul)(U.$7),
        eM = (0, D.Tq)()
      y[8] !== R ? ((l = { hostId: R }), (y[8] = R), (y[9] = l)) : (l = y[9])
      let eS = (0, j.J)(l),
        eE = (0, K.a$)(),
        eR = (0, K.lD)(eE, el),
        e_ = [...ev]
      if (eC && void 0 !== I && I && eR) {
        if (eI) {
          let e
          ;(y[10] !== eb
            ? ((e = () =>
                eb.set(
                  X.x,
                  (0, H.i)(eb, {
                    libraryOrigin: "CHATGPT_FILE_LIBRARY_ORIGIN_COMPOSER_MENU",
                    entryPoint: "CHATGPT_FILE_LIBRARY_ENTRY_POINT_COMPOSER",
                  }),
                )),
              (y[10] = eb),
              (y[11] = e))
            : (e = y[11]),
            e_.push({
              type: "action",
              key: "context-action:add-library-files",
              label: eM
                ? ex.formatMessage({
                    id: "chatgptConversations.composer.browseLibraryFiles.space",
                    defaultMessage: "Add Space files",
                    description:
                      "Action in the ChatGPT composer resource menu that opens the Space file picker. Translate Space/Spaces as a common noun for an area or collection of Pages and files, not a proper name or outer space. Keep the term consistent with navigation.",
                  })
                : ex.formatMessage({
                    id: "chatgptConversations.composer.addFromLibrary",
                    defaultMessage: "Add from library",
                    description: "Action in the browser Chat composer resource menu that opens the file library picker",
                  }),
              detail: null,
              icon: eM ? { 16: T.HPc, 20: T.Mpc } : { 16: T.W5w, 20: T.baR },
              action: e,
            }))
        }
        eS && e_.push((0, Y.E)(eb, eA, ex, R))
      }
      let eT = (0, K.lD)(eE, er),
        ek = (0, c.useRef)(null)
      y[12] !== eh || y[13] !== $ || y[14] !== ew || y[15] !== es
        ? ((u = { excludedThreadReferences: eh, hostId: ew, query: $, roots: es }),
          (y[12] = eh),
          (y[13] = $),
          (y[14] = ew),
          (y[15] = es),
          (y[16] = u))
        : (u = y[16])
      let eO = (0, Z.q)(u),
        eP = eu?.kind === "at-mention-category" ? eu.category : void 0,
        eN = null != eT
      y[17] !== ed ||
      y[18] !== ef ||
      y[19] !== E ||
      y[20] !== ee ||
      y[21] !== R ||
      y[22] !== N ||
      y[23] !== $ ||
      y[24] !== J ||
      y[25] !== ea ||
      y[26] !== eP ||
      y[27] !== eN ||
      y[28] !== eO
        ? ((p = {
            expandedCategory: eP,
            backgroundAgents: ed,
            excludedAgentConversationIds: ef,
            excludedPluginId: E,
            hostId: R,
            isTypedAtMention: eN,
            pluginHostId: N,
            query: $,
            rankingContext: J,
            roots: ee,
            skillRoots: ea,
            threadSource: eO,
          }),
          (y[17] = ed),
          (y[18] = ef),
          (y[19] = E),
          (y[20] = ee),
          (y[21] = R),
          (y[22] = N),
          (y[23] = $),
          (y[24] = J),
          (y[25] = ea),
          (y[26] = eP),
          (y[27] = eN),
          (y[28] = eO),
          (y[29] = p))
        : (p = y[29])
      let { sections: eL, mentionablePlugins: eF } = (0, Q.aw)(p),
        eq =
          "work" === J && eu?.kind !== "at-mention-category"
            ? (0, W.P)({
                contextSections: eL.filter(eo),
                customGptSection: null,
                items: e_,
                locale: ex.locale,
                mentionablePlugins: eF,
                pluginItems: [],
                pluginSections: eL.filter(en),
                query: $,
                source: eu,
                systemHintSurface: "tpp",
              })
            : (0, G.Zg)(
                (0, G._d)(eL, eu),
                $,
                eu?.kind === "at-mention-category" && "spaces" === eu.category ? [] : e_,
                !1,
                J,
                eu?.kind === "at-mention-category" ? 20 : void 0,
              ),
        ej = eq.some(et)
      y[30] !== eb
        ? ((m = () => {
            ;(0, q.Q_)(eb, {
              action: q.lX.CODEX_APPGEN_INTERACTION_ACTION_MENTION_SUGGESTIONS_LOADED,
              source: q.Mz.CODEX_APPGEN_INTERACTION_SOURCE_AT_MENTION,
            })
          }),
          (y[30] = eb),
          (y[31] = m))
        : (m = y[31])
      let eD = (0, c.useEffectEvent)(m)
      return (
        y[32] !== ej || y[33] !== eD || y[34] !== eT || y[35] !== ec
          ? ((h = () => {
              if (null == eT || ec?.current !== eT) {
                ek.current = null
                return
              }
              ej && ek.current !== eT && ((ek.current = eT), eD())
            }),
            (y[32] = ej),
            (y[33] = eD),
            (y[34] = eT),
            (y[35] = ec),
            (y[36] = h))
          : (h = y[36]),
        y[37] !== ej || y[38] !== eT || y[39] !== ec
          ? ((g = [ej, eT, ec]), (y[37] = ej), (y[38] = eT), (y[39] = ec), (y[40] = g))
          : (g = y[40]),
        (0, c.useEffect)(h, g),
        y[41] !== ep ||
        y[42] !== C ||
        y[43] !== em ||
        y[44] !== eg ||
        y[45] !== k ||
        y[46] !== L ||
        y[47] !== F ||
        y[48] !== B ||
        y[49] !== ey ||
        y[50] !== $ ||
        y[51] !== eq
          ? ((v = (0, i.jsx)(z.yl, {
              className: C,
              chromeVariant: ep,
              fixedSectionHeaders: em,
              isHomeMenu: eg,
              keyboardEventTarget: k,
              onAddContext: L,
              onRequestClose: F,
              onUpdateSelectedMention: B,
              placement: ey,
              query: $,
              sections: eq,
            })),
            (y[41] = ep),
            (y[42] = C),
            (y[43] = em),
            (y[44] = eg),
            (y[45] = k),
            (y[46] = L),
            (y[47] = F),
            (y[48] = B),
            (y[49] = ey),
            (y[50] = $),
            (y[51] = eq),
            (y[52] = v))
          : (v = y[52]),
        v
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
      eu = a("kZDS"),
      ed = a("Itrj")
    function ep(e) {
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
                ed.y,
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
                        heading: (0, i.jsx)(eu.z, { children: a }),
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
    var em = a("QT6E"),
      ef = a("SmSR"),
      eh = a("Cmxc"),
      eg = a("h0jD")
    a("A3F0")
    let ev = (0, s.un)(O.PR, ({ get: e }) => e(ec.vJ).filter((e) => "side" !== e.id))
    function ey(e) {
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
        M,
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
        X,
        W,
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
        el,
        eu = (0, n.c)(116),
        {
          ContextualSuggestionOverlay: ed,
          additionalAutocompleteContent: ey,
          browserTabMentionConversationId: eb,
          contextualSuggestions: eC,
          contextualSuggestionUi: ex,
          hideSideSlashCommand: eA,
          isHomeMenu: eI,
          keyboardVariant: eM,
          onRecordAudio: eS,
          overlayAnchorRef: eE,
          placement: eR,
          showCompletionPreview: e_,
          skillSuggestions: eT,
          triggerAnchor: ek,
        } = e,
        eO = void 0 === ed ? E.$ : ed,
        eP = void 0 === eb ? null : eb,
        eN = void 0 !== eI && eI,
        eL = void 0 === eR ? "top" : eR,
        eF = void 0 !== e_ && e_,
        eq = (0, s.gh)(O.PR),
        ej = (0, b.Zj)("2163293173"),
        eD = (0, s.Ul)(h.d_),
        eU = "/hotkey-window" === (0, f.zy)().pathname,
        eH = (0, K.a$)()
      eu[0] !== eH ? ((t = () => ({ controller: eH, active$: (0, L.XN)(eH) })), (eu[0] = eH), (eu[1] = t)) : (t = eu[1])
      let [eB, eV] = (0, c.useState)(t)
      eB.controller !== eH && eV({ controller: eH, active$: (0, L.XN)(eH) })
      let ez = (0, s.Ul)(eB.active$)
      ;(eu[2] !== eB.active$ || eu[3] !== eq
        ? ((a = () => (0, L.qb)(eq, eB.active$)),
          (m = [eq, eB.active$]),
          (eu[2] = eB.active$),
          (eu[3] = eq),
          (eu[4] = a),
          (eu[5] = m))
        : ((a = eu[4]), (m = eu[5])),
        (0, c.useLayoutEffect)(a, m))
      let eY = ex?.source?.kind === "mcp-extension" ? "top" : eL
      eu[6] !== eP || eu[7] !== eq.value
        ? ((g = (0, O.oU)(eq.value, eP)), (eu[6] = eP), (eu[7] = eq.value), (eu[8] = g))
        : (g = eu[8])
      let eX = g,
        eW = (0, c.useRef)(null),
        eG = (0, s.Ul)(L.H4)
      eu[9] !== ex?.active || eu[10] !== eG
        ? ((v = (e) => (eG || ex?.active === !0) && (0, ec.KJ)(e.getText())),
          (eu[9] = ex?.active),
          (eu[10] = eG),
          (eu[11] = v))
        : (v = eu[11])
      let e$ = (0, K.lD)(eH, v, "document"),
        eK = (0, d.A)(),
        [eQ, eZ] = (0, c.useState)(null),
        eJ = (0, s.Ul)(L.UE),
        [e0, e1] = (0, c.useState)(""),
        [e2, e3] = (0, c.useState)(""),
        e4 = (0, eh.O)(),
        e5 = eU ? "z-40" : (0, r.A)("left-0 right-0", eN ? "z-50" : "z-30"),
        e6 = eN && "composer-home-top-menu"
      eu[12] !== e6 ? ((y = (0, r.A)("mb-1.5 origin-bottom", e6)), (eu[12] = e6), (eu[13] = y)) : (y = eu[13])
      let e8 = y
      eu[14] !== eH
        ? ((w = () => {
            requestAnimationFrame(() => {
              eH.focus()
            })
          }),
          (eu[14] = eH),
          (eu[15] = w))
        : (w = eu[15])
      let e7 = w
      eu[16] !== e7 || eu[17] !== eq
        ? ((C = () => {
            ;(eq.set(L.UE, null), e7())
          }),
          (eu[16] = e7),
          (eu[17] = eq),
          (eu[18] = C))
        : (C = eu[18])
      let e9 = C
      eu[19] === Symbol.for("react.memo_cache_sentinel")
        ? ((x = () => {
            ;(e1(""), e3(""), eZ(null))
          }),
          (eu[19] = x))
        : (x = eu[19])
      let te = x
      eu[20] !== eG || eu[21] !== eq
        ? ((A = () => {
            ;(eG || (0, k.yy)(eq, o.CodexSlashCommandsMenuOpened, {}), eq.set(L.H4, !0))
          }),
          (eu[20] = eG),
          (eu[21] = eq),
          (eu[22] = A))
        : (A = eu[22])
      let tt = A
      eu[23] !== e7 || eu[24] !== eq
        ? ((M = () => {
            ;(te(), eq.set(L.H4, !1), e7())
          }),
          (eu[23] = e7),
          (eu[24] = eq),
          (eu[25] = M))
        : (M = eu[25])
      let ta = M
      eu[26] !== e7 || eu[27] !== tt || eu[28] !== eq
        ? ((S = (e) => {
            if ((te(), "bare" === e.presentation)) {
              ;(eq.set(L.UE, e.id), eq.set(L.H4, !1), e7())
              return
            }
            ;(eq.set(L.UE, null), eZ(e), tt())
          }),
          (eu[26] = e7),
          (eu[27] = tt),
          (eu[28] = eq),
          (eu[29] = S))
        : (S = eu[29])
      let ti = S
      eu[30] !== eH.view || eu[31] !== eq
        ? ((q = (e) => {
            ;(te(), eq.set(L.UE, null), eq.set(L.H4, !1), (0, $.xb)(eH.view, e.id))
          }),
          (eu[30] = eH.view),
          (eu[31] = eq),
          (eu[32] = q))
        : (q = eu[32])
      let tn = q,
        to = void 0 !== eA && eA ? ev : ec.vJ,
        tr = !ej || eG || null != eJ || ez || ex?.active === !0
      ;(eu[33] !== eq
        ? ((j = (e) => {
            ;(0, ec.sW)(eq, e, "autocomplete")
          }),
          (eu[33] = eq),
          (eu[34] = j))
        : (j = eu[34]),
        eu[35] !== eH || eu[36] !== ti || eu[37] !== to || eu[38] !== tr || eu[39] !== j
          ? ((D = {
              composerController: eH,
              slashCommands: to,
              observeCommands: tr,
              onCommandSelect: j,
              onOpenCommandContent: ti,
            }),
            (eu[35] = eH),
            (eu[36] = ti),
            (eu[37] = to),
            (eu[38] = tr),
            (eu[39] = j),
            (eu[40] = D))
          : (D = eu[40]))
      let tl = (0, ef.H)(D),
        ts = eG || null != eJ || tl.ui?.active === !0,
        tc = (0, ec.lQ)(tl.allCommands, e$),
        tu = (0, ec.uy)(tc, "/")
      eu[41] !== eJ || eu[42] !== tl.allCommands
        ? ((U = eJ ? (tl.allCommands.find((e) => e.id === eJ) ?? null) : null),
          (eu[41] = eJ),
          (eu[42] = tl.allCommands),
          (eu[43] = U))
        : (U = eu[43])
      let td = U,
        tp = eN && ts
      ;(eu[44] !== e4 || eu[45] !== eL || eu[46] !== tp
        ? ((H = { element: e4, isEnabled: tp, placement: eL }),
          (eu[44] = e4),
          (eu[45] = eL),
          (eu[46] = tp),
          (eu[47] = H))
        : (H = eu[47]),
        (0, eg.T)(H),
        eu[48] !== eH || eu[49] !== tl
          ? ((B = (e) => {
              if ((0, $.rK)(e)) {
                if ("browser-autocomplete" === e.kind)
                  return void ("submit" === e.type &&
                  "insert-mention" === e.action &&
                  $.Gq.getState(eH.view.state)?.active === !0
                    ? eH.queueBrowserAutocompleteSubmission(e)
                    : "close" === e.type && eH.clearBrowserAutocompleteSubmission())
                "slash-command" === e.kind && tl.handleSlashCommandEvent(e.type)
              }
            }),
            (eu[48] = eH),
            (eu[49] = tl),
            (eu[50] = B))
          : (B = eu[50]))
      let tm = (0, c.useEffectEvent)(B)
      ;(eu[51] !== eH.view.dom || eu[52] !== eH.view.state
        ? ((V = () => {
            let e = (e) => {
              "insertText" === e.inputType && "@" === e.data && (eW.current = eH.view.state.selection.from)
            }
            return (
              eH.view.dom.addEventListener("beforeinput", e, !0),
              () => {
                eH.view.dom.removeEventListener("beforeinput", e, !0)
              }
            )
          }),
          (eu[51] = eH.view.dom),
          (eu[52] = eH.view.state),
          (eu[53] = V))
        : (V = eu[53]),
        eu[54] !== eH ? ((z = [eH]), (eu[54] = eH), (eu[55] = z)) : (z = eu[55]),
        (0, c.useEffect)(V, z),
        eu[56] !== ex?.active
          ? ((Y = () => {
              ex?.active !== !0 && (eW.current = null)
            }),
            (eu[56] = ex?.active),
            (eu[57] = Y))
          : (Y = eu[57]))
      let tf = ex?.active
      ;(eu[58] !== tf ? ((X = [tf]), (eu[58] = tf), (eu[59] = X)) : (X = eu[59]),
        (0, c.useEffect)(Y, X),
        eu[60] !== eH.eventEmitter || eu[61] !== tm || eu[62] !== eq
          ? ((W = () => {
              let e = (e) => {
                tm(e)
              }
              return (
                eH.eventEmitter.addListener("composer-suggestion-ui-event", e),
                () => {
                  ;(eH.eventEmitter.removeListener("composer-suggestion-ui-event", e),
                    eq.set(L.H4, !1),
                    eq.set(L.UE, null),
                    eq.set(L.IH, null))
                }
              )
            }),
            (eu[60] = eH.eventEmitter),
            (eu[61] = tm),
            (eu[62] = eq),
            (eu[63] = W))
          : (W = eu[63]),
        eu[64] !== eH || eu[65] !== eq ? ((G = [eH, eq]), (eu[64] = eH), (eu[65] = eq), (eu[66] = G)) : (G = eu[66]),
        (0, c.useEffect)(W, G),
        eu[67] !== eC?.leadingItems
          ? ((Q = eC?.leadingItems ?? []), (eu[67] = eC?.leadingItems), (eu[68] = Q))
          : (Q = eu[68]))
      let th = [...Q]
      if (ex?.active && "+" === ex.trigger && null != eS) {
        let e
        ;(eu[69] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)(T.QM7, {})), (eu[69] = e))
          : (e = eu[69]),
          th.push({
            type: "action",
            key: "context-action:record-audio",
            label: eK.formatMessage({
              id: "composer.contextAction.recordAudio",
              defaultMessage: "Audio",
              description: "Composer add-menu action that starts recording an audio note with a transcript",
            }),
            detail: eK.formatMessage({
              id: "composer.contextAction.recordAudioDescription",
              defaultMessage: "Record and send audio",
              description: "Hint beside the Audio action in the composer add menu",
            }),
            iconElement: e,
            searchTerms: ["audio", "record", "dictate"],
            action: eS,
          }))
      }
      let tg = s.Ui,
        tv = P.K
      ;(eu[70] !== eX ? ((Z = { conversationId: eX }), (eu[70] = eX), (eu[71] = Z)) : (Z = eu[71]),
        eu[72] !== ey || eu[73] !== ts || eu[74] !== ez
          ? ((ee = "function" == typeof ey ? ey(ez || ts) : ey),
            (eu[72] = ey),
            (eu[73] = ts),
            (eu[74] = ez),
            (eu[75] = ee))
          : (ee = eu[75]),
        eu[76] !== ex?.active || eu[77] !== ts || eu[78] !== eD || eu[79] !== eL || eu[80] !== eF
          ? ((et = null),
            (eu[76] = ex?.active),
            (eu[77] = ts),
            (eu[78] = eD),
            (eu[79] = eL),
            (eu[80] = eF),
            (eu[81] = et))
          : (et = eu[81]),
        eu[82] !== eq.value ? ((ea = (0, O.eL)(eq.value)), (eu[82] = eq.value), (eu[83] = ea)) : (ea = eu[83]),
        eu[84] !== eX || eu[85] !== eH || eu[86] !== eL || eu[87] !== ea
          ? ((ei = (0, i.jsx)(i.Fragment, {
              children: (0, i.jsx)(I, {
                browserConversationId: eX,
                composerController: eH,
                composerId: ea,
                placement: eL,
              }),
            })),
            (eu[84] = eX),
            (eu[85] = eH),
            (eu[86] = eL),
            (eu[87] = ea),
            (eu[88] = ei))
          : (ei = eu[88]))
      let ty = eC
        ? (0, i.jsx)(eO, {
            anchorRef: eE,
            isActive: ex?.active === !0,
            placement: eY,
            spacing: "compact",
            triggerAnchor: ek,
            children: (0, i.jsx)(N.s, {
              suggestion: ex,
              triggerAnchor: ek,
              children:
                ex?.active === !0
                  ? (0, i.jsx)(J, {
                      ...eC,
                      typedSitesMentionRef: eW,
                      leadingItems: (0, F.l)(tc, th, tn),
                      placement: eY,
                      query: ex.query,
                      source: ex.source,
                    })
                  : null,
            }),
          })
        : null
      eu[89] !== eN || eu[90] !== eE || eu[91] !== eL || eu[92] !== eT
        ? ((en = eT
            ? (0, i.jsx)(es.q, {
                ...eT,
                anchorRef: eE,
                isHomeMenu: eN,
                placement: eL,
                portalRoot: null == eE ? "dialog" : "body",
                trackAnchorPosition: null != eE,
                zIndexClassName: null == eE ? void 0 : "z-30",
              })
            : null),
          (eu[89] = eN),
          (eu[90] = eE),
          (eu[91] = eL),
          (eu[92] = eT),
          (eu[93] = en))
        : (en = eu[93])
      let tw = tl.ui?.active === !0
      ;(eu[94] !== eN || eu[95] !== eM || eu[96] !== eL || eu[97] !== tl
        ? ((eo = (0, i.jsx)(em.D, { autocomplete: tl, isHomeMenu: eN, keyboardVariant: eM, placement: eL })),
          (eu[94] = eN),
          (eu[95] = eM),
          (eu[96] = eL),
          (eu[97] = tl),
          (eu[98] = eo))
        : (eo = eu[98]),
        eu[99] !== eE || eu[100] !== eL || eu[101] !== tw || eu[102] !== eo
          ? ((er = (0, i.jsx)(E.$, { anchorRef: eE, isActive: tw, placement: eL, children: eo })),
            (eu[99] = eE),
            (eu[100] = eL),
            (eu[101] = tw),
            (eu[102] = eo),
            (eu[103] = er))
          : (er = eu[103]))
      let tb =
          eG && null != e4
            ? (0, i.jsxs)(R.rZ, {
                title: eK.formatMessage(ew.dialogTitle),
                container: e4,
                open: !0,
                shouldFilter: eQ?.Content != null,
                label: eK.formatMessage({
                  id: "composer.slashCommands.dialogLabel",
                  defaultMessage: "Slash command menu",
                  description: "Accessibility label for the slash command dialog",
                }),
                overlayClassName: "hidden",
                expandedTopTray: eU,
                className: eU ? "origin-bottom" : e8,
                contentClassName: (0, r.A)(
                  "absolute bottom-0 bg-transparent p-0 shadow-none outline-none focus-visible:outline-none",
                  e5,
                ),
                value: e2,
                onValueChange: e3,
                onOpenChange: (e) => {
                  e || ta()
                },
                children: [
                  (0, i.jsx)(_.L3, { className: "sr-only", children: (0, i.jsx)(p.A, { ...ew.dialogTitle }) }),
                  (0, i.jsx)(_.rr, {
                    className: "sr-only",
                    children: (0, i.jsx)(p.A, {
                      id: "composer.slashCommands.dialogDescription",
                      defaultMessage: "Search and run slash commands",
                      description: "Description for the slash command dialog",
                    }),
                  }),
                  (0, i.jsx)(l.uB.Input, {
                    placeholder: eK.formatMessage({
                      id: "composer.slashCommands.inputPlaceholder",
                      defaultMessage: "Search",
                      description: "Placeholder for the slash command input",
                    }),
                    value: e0,
                    onValueChange: e1,
                  }),
                  (0, i.jsxs)(l.uB.List, {
                    children: [
                      eQ?.Content
                        ? (0, i.jsx)(eQ.Content, { onItemsChanged: () => e3(""), onClose: ta })
                        : (0, i.jsx)(ep, {
                            commands: (0, ec.RE)(tu, e0),
                            onCommandSelect: (e) => {
                              ;(async () => {
                                ;((0, ec.sW)(eq, e, "dialog"), e.Content)
                                  ? ti(e)
                                  : e.submenu
                                    ? tn(e)
                                    : (await e.onSelect?.(), ta())
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
        tC =
          td?.Content && null != e4
            ? (0, u.createPortal)(
                (0, i.jsx)(R.Vs, {
                  expandedTopTray: eU,
                  className: (0, r.A)(
                    "absolute bottom-0 bg-transparent p-0 shadow-none outline-none focus-visible:outline-none",
                    e5,
                  ),
                  children: (0, i.jsx)(R.T$, {
                    className: eU ? "origin-bottom" : e8,
                    expandedTopTray: eU,
                    paddedBody: eU,
                    children: (0, i.jsx)(td.Content, { onItemsChanged: () => e3(""), onClose: e9 }),
                  }),
                }),
                e4,
              )
            : null
      return (
        eu[104] !== tg ||
        eu[105] !== tv ||
        eu[106] !== Z ||
        eu[107] !== ee ||
        eu[108] !== et ||
        eu[109] !== ei ||
        eu[110] !== ty ||
        eu[111] !== en ||
        eu[112] !== er ||
        eu[113] !== tb ||
        eu[114] !== tC
          ? ((el = (0, i.jsxs)(tg, { scope: tv, value: Z, children: [ee, et, ei, ty, en, er, tb, tC] })),
            (eu[104] = tg),
            (eu[105] = tv),
            (eu[106] = Z),
            (eu[107] = ee),
            (eu[108] = et),
            (eu[109] = ei),
            (eu[110] = ty),
            (eu[111] = en),
            (eu[112] = er),
            (eu[113] = tb),
            (eu[114] = tC),
            (eu[115] = el))
          : (el = eu[115]),
        el
      )
    }
    let ew = (0, m.YK)({
      dialogTitle: {
        id: "composer.slashCommands.dialogTitle",
        defaultMessage: "Slash commands",
        description: "Title for the slash command dialog",
      },
    })
  },
  rNLN(e, t, a) {
    var i = a("iRMi"),
      n = a("bVeK"),
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
    a.d(t, { P: () => f })
    var i = a("pkoC"),
      n = a.n(i),
      o = a("KUdL"),
      r = a.n(o),
      l = a("i5ac"),
      s = a.n(l),
      c = a("Qgfj"),
      u = a("LQlv"),
      d = a("YWcr"),
      p = a("XNvh"),
      m = a("UN1G")
    function f({
      contextSections: e,
      customGptSection: t,
      items: a,
      locale: i,
      mentionablePlugins: o,
      pluginItems: l,
      pluginSections: h,
      query: g,
      source: v,
      systemHintSurface: y,
    }) {
      let w,
        [b, C] = n()(a, (e) => e.key.startsWith("command:browser-skill-")),
        [x, A] = n()(C, (e) => e.key.startsWith("command:chatgpt-system-hint:") || "command:sketch" === e.key),
        I = {
          id: "plugins",
          title: (0, c.zR)({
            id: "composer.atMentionList.plugins",
            defaultMessage: "Plugins",
            description: "Section header for plugin results in the @ mention list.",
          }),
          items: s()([...l, ...x, ...h.flatMap((e) => e.items)], (e) => e.key),
          emptyState: h.find((e) => null != e.emptyState)?.emptyState ?? null,
          isError: h.some((e) => e.isError),
          isLoading: h.some((e) => e.isLoading),
        },
        M = {
          id: "chatgpt-context",
          title: (0, c.zR)({
            id: "chatgptConversations.composer.contextMenu.add",
            defaultMessage: "Add",
            description: "Section heading for actions in the ChatGPT composer add menu",
          }),
          items: A,
          emptyState: null,
          isLoading: !1,
        },
        S = {
          id: "skills",
          title: (0, c.zR)({
            id: "composer.atMentionList.skills",
            defaultMessage: "Skills",
            description: "Section header for skill results in the @ mention list.",
          }),
          items: b,
          emptyState: null,
          isLoading: !1,
        },
        E = g.trim().toLowerCase(),
        R = E.length > 0,
        _ = !R && (null == v || "context-menu-search" === v.kind)
      if (_) {
        let e = (function ({ items: e, mentionablePlugins: t, systemHintSurface: a }) {
            let i = "chat" === a ? "connector_openai_deep_research" : "connector_openai_deep_research_workflow",
              n = e.find((e) => e.key === `app:${(0, p.nw)(i)}`)
            if (null != n) return n
            let o = t.find((e) => e.canonicalAppId === i || e.appIds?.includes(i))
            return null == o ? null : (e.find((e) => e.key === `plugin:${(0, d.GL)(o).path}`) ?? null)
          })({ items: [...M.items, ...I.items], mentionablePlugins: o, systemHintSurface: y }),
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
          [s, c] = n()(I.items, (e) => a.includes(e.key))
        w = [
          { ...M, id: "chatgpt-primary", items: r()([...i, ...s], (e) => a.indexOf(e.key)) },
          { ...I, items: c.slice(0, 7) },
          { ...M, items: l },
          ...(null == t ? [] : [t]),
          S,
        ]
      } else if (R) {
        let e = (0, m.WE)(g)
        w = [M, I, ...(null == t ? [] : [t]), S].map((t) => ({
          ...t,
          items:
            "plugins" === t.id
              ? (0, u.O)(t.items, g, i)
              : r()(
                  t.items.map((t) => ({
                    item: t,
                    score: Math.max(
                      ...[t.label, t.detail ?? "", ...(t.searchTerms ?? []), ...(t.searchKeywords ?? [])].map(e),
                    ),
                  })),
                  ({ score: e }) => -e,
                )
                  .filter(({ score: e }) => e > 0)
                  .map(({ item: e }) => e),
        }))
      } else w = [M, { ...I, items: I.items.slice(0, 7) }, ...(null == t ? [] : [t]), S]
      let T = w.filter((e) => e.items.length > 0).length,
        k = [],
        O = (e) => {
          if (!R) return e
          let [t, a] = n()(e.items, (e) =>
            [e.label, ...(e.searchTerms ?? [])].some((e) => e.trim().toLowerCase() === E),
          )
          return (k.push(...t), { ...e, items: a })
        },
        P = [
          ...w.map(O).map((e) => {
            let t = "plugins" === e.id ? 3 : 2
            return (
              1 === T && (t = 7),
              { ...e, showTitle: !_ && e.showTitle, items: 1 === g.trim().length ? e.items.slice(0, t) : e.items }
            )
          }),
          ...e.map(O).map((e) => (_ ? { ...e, showTitle: !1 } : e)),
        ],
        [N, L] = n()(P, (e) => "skills" === e.id)
      return 0 === k.length
        ? [...L, ...N]
        : [{ id: "exact-matches", title: "", showTitle: !1, items: k, emptyState: null, isLoading: !1 }, ...L, ...N]
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
            I = !e && null != x && g.includes(x) && !A ? g.filter((e) => "custom" !== e) : g,
            M = "custom" === (u = (0, i.ic_)(y)) ? "read-only" : u
          return (
            (r && v) || C ? (M = "guardian-approvals") : null != b && y.includes(b) && (M = b),
            {
              availableAgentModes: I,
              canShowCustom: I.includes("custom"),
              canUnlock: I.includes("full-access"),
              customEquivalentMode: x,
              isGuardianModeAvailable: v,
              isConfigDataPending: e,
              configNonFullAccessMode: M,
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
            I = b.map((t) => {
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
            ...I.map(({ file: e, id: t }) => ({ id: t, label: e instanceof File ? e.name : e.label })),
          ]),
            await (0, n.Ay)(
              I,
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
              a.e(434505),
              a.e(788421),
              a.e(343623),
              a.e(943163),
              a.e(910482),
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
            I,
            M,
            S,
            E,
            R = (0, i.c)(55),
            _ = void 0 === e ? null : e,
            T = void 0 === t ? null : t,
            k = (0, n.gh)(m.u),
            O = (0, n._U)(l.aG, _),
            P = (0, n._U)(l.qX, _),
            { modelSettings: N } = (0, d.aU)(_),
            L = (0, n.Ul)(c._),
            F = (0, n._U)(h, _),
            { data: q, isFetching: j } = (0, n._U)(p.aQ, P)
          R[0] !== N.model || R[1] !== N.reasoningEffort
            ? ((a = {
                mode: s.C,
                settings: { model: N.model, reasoning_effort: N.reasoningEffort, developer_instructions: null },
              }),
              (R[0] = N.model),
              (R[1] = N.reasoningEffort),
              (R[2] = a))
            : (a = R[2])
          let D = a,
            U = !j && !N.isLoading,
            H = F?.mode ?? O,
            B = H?.mode ?? L ?? s.C
          if (
            (R[3] !== q ? ((g = q ?? []), (R[3] = q), (R[4] = g)) : (g = R[4]),
            R[5] !== D ||
              R[6] !== T ||
              R[7] !== N.model ||
              R[8] !== N.reasoningEffort ||
              R[9] !== B ||
              R[10] !== g ||
              R[11] !== H)
          ) {
            let e
            ;(R[14] !== N.model || R[15] !== N.reasoningEffort
              ? ((e = (e) => {
                  if (null == e.mode) return []
                  let t = {
                    mode: e.mode,
                    settings: { model: e.model, reasoning_effort: e.reasoning_effort, developer_instructions: null },
                  }
                  return [{ ...t, settings: { ...t.settings, model: N.model, reasoning_effort: N.reasoningEffort } }]
                }),
                (R[14] = N.model),
                (R[15] = N.reasoningEffort),
                (R[16] = e))
              : (e = R[16]),
              (v = g.flatMap(e)),
              (y = T ?? H ?? v.find((e) => e.mode === B) ?? D),
              (R[5] = D),
              (R[6] = T),
              (R[7] = N.model),
              (R[8] = N.reasoningEffort),
              (R[9] = B),
              (R[10] = g),
              (R[11] = H),
              (R[12] = v),
              (R[13] = y))
          } else ((v = R[12]), (y = R[13]))
          let V = y
          R[17] !== D || R[18] !== v
            ? ((w = (e) => (e ? v.find((t) => t.mode === e) : null) ?? D), (R[17] = D), (R[18] = v), (R[19] = w))
            : (w = R[19])
          let z = w
          R[20] !== _ || R[21] !== z || R[22] !== P || R[23] !== k
            ? ((b = async (e) => {
                if (_) {
                  try {
                    await (0, r.V)(k, P).updateThreadSettingsForNextTurn(_, { collaborationMode: z(e) })
                  } catch (e) {
                    f.v.error("Failed to set collaboration mode", {
                      safe: { conversationId: _ },
                      sensitive: { error: e },
                    })
                  }
                  return
                }
                k.set(c._, e)
              }),
              (R[20] = _),
              (R[21] = z),
              (R[22] = P),
              (R[23] = k),
              (R[24] = b))
            : (b = R[24])
          let Y = b
          R[25] !== _ || R[26] !== z || R[27] !== Y || R[28] !== k
            ? ((C = (e) => {
                if (((0, u.e)(), _)) {
                  let t = { mode: z(e) }
                  k.set(h, _, t)
                  let a = k.watch((e) => {
                    let { get: t } = e
                    t(h, _)
                  })
                  Y(e).finally(() => {
                    ;(k.set(h, _, (e) => (e === t ? null : e)), a())
                  })
                  return
                }
                Y(e)
              }),
              (R[25] = _),
              (R[26] = z),
              (R[27] = Y),
              (R[28] = k),
              (R[29] = C))
            : (C = R[29])
          let X = C
          R[30] !== v || R[31] !== Y || R[32] !== B
            ? ((x = () => {
                let e = v.find((e) => e.mode === B)?.mode ?? s.C
                e !== B && Y(e)
              }),
              (R[30] = v),
              (R[31] = Y),
              (R[32] = B),
              (R[33] = x))
            : (x = R[33])
          let W = (0, o.useEffectEvent)(x)
          ;(R[34] !== U || R[35] !== v.length || R[36] !== W
            ? ((A = () => {
                !U || (v.length > 0 && W())
              }),
              (R[34] = U),
              (R[35] = v.length),
              (R[36] = W),
              (R[37] = A))
            : (A = R[37]),
            R[38] !== U || R[39] !== v ? ((I = [v, U]), (R[38] = U), (R[39] = v), (R[40] = I)) : (I = R[40]),
            (0, o.useEffect)(A, I),
            R[41] !== V.settings || R[42] !== N.model || R[43] !== N.reasoningEffort
              ? ((M = { ...V.settings, model: N.model, reasoning_effort: N.reasoningEffort }),
                (R[41] = V.settings),
                (R[42] = N.model),
                (R[43] = N.reasoningEffort),
                (R[44] = M))
              : (M = R[44]),
            R[45] !== V || R[46] !== M
              ? ((S = { ...V, settings: M }), (R[45] = V), (R[46] = M), (R[47] = S))
              : (S = R[47]))
          let G = !U
          return (
            R[48] !== z || R[49] !== v || R[50] !== B || R[51] !== X || R[52] !== S || R[53] !== G
              ? ((E = {
                  modes: v,
                  activeMode: S,
                  selectedMode: B,
                  getModeForSelection: z,
                  setSelectedMode: X,
                  isLoading: G,
                }),
                (R[48] = z),
                (R[49] = v),
                (R[50] = B),
                (R[51] = X),
                (R[52] = S),
                (R[53] = G),
                (R[54] = E))
              : (E = R[54]),
            E
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
      I = a("OMIV"),
      M = a("WFY2"),
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
        M = (0, n.Ul)(C ? b.pY : null),
        E = (0, n.Ul)(!!C && b.Qd),
        R = (0, n.Ul)(y || null != m ? null : b.Gt),
        _ = (0, n._U)(null, R),
        T = (0, n._U)(y || null == m ? null : c.EL, m),
        k = y ? (g ?? null) : (w ?? M),
        O = y && null == k,
        P = C && E,
        N = !y && (null == m ? E : null == T),
        L = g === o.m20 || (!y && !N && (null == m ? null == R && !_?.length : "projectless" === T)),
        F = (0, n.Ul)(x.B),
        q = (0, A.XR)(),
        j = (0, n._U)(I.JW, "1597774583"),
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
      let { data: X, isPending: W } = (0, n._U)(v.b9, a),
        G = X?.requirements ?? null
      if (p[6] !== F || p[7] !== H || p[8] !== W || p[9] !== q || p[10] !== G) {
        let e
        ;((s = null == H ? null : (0, r.Y$)(H.config)),
          p[13] !== W || p[14] !== G
            ? ((e = W || (0, o.Jhm)("auto", G) || (0, o.Jhm)("guardian-approvals", G)),
              (p[13] = W),
              (p[14] = G),
              (p[15] = e))
            : (e = p[15]),
          (u = e && !1 !== (0, o.bAH)(s ?? void 0) && (void 0 === F || q)),
          (p[6] = F),
          (p[7] = H),
          (p[8] = W),
          (p[9] = q),
          (p[10] = G),
          (p[11] = s),
          (p[12] = u))
      } else ((s = p[11]), (u = p[12]))
      let $ = u,
        K = O || P || N || W || B || null == H || $,
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
            I,
            S,
            L,
            F,
            q,
            j,
            D,
            U,
            H,
            B = (0, i.c)(68),
            { conversationId: V, cwdOverride: z, hostId: Y, inheritDefaultPermissions: X } = e,
            W = (0, n.gh)(w.u),
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
            { modelSettings: en } = (0, m.aU)(V)
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
            eI = (0, n.Ul)(E.a)
          B[11] !== ee || B[12] !== Y
            ? ((f = JSON.stringify([Y, ee])), (B[11] = ee), (B[12] = Y), (B[13] = f))
            : (f = B[13])
          let eM = f,
            eS = eI[eM] ?? k,
            eE = eS.isSet ? eS.value : eg
          B[14] !== eM || B[15] !== W
            ? ((v = (e) => {
                W.set(E.a, (t) => ({ ...t, [eM]: { isSet: !0, value: e } }))
              }),
              (B[14] = eM),
              (B[15] = W),
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
                  preferredNonFullAccessMode: (0, R.Ru)(Y, W.get(R.ol) ?? (0, R.P4)(R.rh)),
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
          let eX = eb && void 0 !== X && X && !ey && !eS.isSet
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
          let eW = null == eh || (eb && eS.isSet) || (null != ez && ev.includes(ez)) ? eY : eh,
            { isRequired: eG } = (0, n._U)(h.E, Y),
            e$ = eG && !er && ev.includes("read-only"),
            eK = eW
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
            ? ((I = (e, t, a) => (a ? (null == t ? e3(e) : { permissions: t }) : null)), (B[25] = e3), (B[26] = I))
            : (I = B[26])
          let e4 = I,
            e5 = e3("guardian-approvals")
          B[27] !== e3 || B[28] !== V || B[29] !== Y || B[30] !== W
            ? ((S = (e) => (null == V ? null : (0, s.V)(W, Y).updateThreadPermissions(V, e3(e)))),
              (B[27] = e3),
              (B[28] = V),
              (B[29] = Y),
              (B[30] = W),
              (B[31] = S))
            : (S = B[31])
          let e6 = S
          B[32] !== V
            ? ((L = (e) => {
                M.v.error("Failed to set thread permissions mode", {
                  safe: { conversationId: V },
                  sensitive: { error: e },
                })
              }),
              (B[32] = V),
              (B[33] = L))
            : (L = B[33])
          let e8 = L,
            e7 = (e) => {
              ;(null != eA && W.set(R.R9, { ...ex, [Y]: null }),
                eb && eR(null),
                eC[Y] !== e && W.set(R.mW, { ...eC, [Y]: e }))
            }
          B[34] !== e8 || B[35] !== e7 || B[36] !== e6
            ? ((F = (e) => {
                ;(e7(e), e6(e)?.catch(e8))
              }),
              (B[34] = e8),
              (B[35] = e7),
              (B[36] = e6),
              (B[37] = F))
            : (F = B[37])
          let e9 = F
          B[38] !== V || B[39] !== Y || B[40] !== eb || B[41] !== e8 || B[42] !== W || B[43] !== eR
            ? ((q = (e) => {
                eb
                  ? eR(e)
                  : null != V && (0, s.V)(W, Y).updateThreadSettingsForNextTurn(V, { permissions: e }).catch(e8)
              }),
              (B[38] = V),
              (B[39] = Y),
              (B[40] = eb),
              (B[41] = e8),
              (B[42] = W),
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
              setAgentModePreference: e7,
              setPermissionProfileId: te,
            }
          D = er || e$ || e2 ? null : eb ? eE : eT
          let ta =
              er ||
              e$ ||
              e2 ||
              tt ||
              (!ew && !eX && (eb || (null == eT && ("custom" !== ek || eO?.type === "dangerFullAccess")))),
            ti = !er && !e$ && (ew || eX),
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
            B[60] !== e7 ||
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
                  setAgentModePreference: e7,
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
                (B[60] = e7),
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
              n = (0, i.c)(6),
              s = (0, o.K5)(e),
              { activeMode: c } = (0, l.c)(e)
            n[0] !== s.hostId ? ((t = { hostId: s.hostId }), (n[0] = s.hostId), (n[1] = t)) : (t = n[1])
            let { data: u } = (0, r.Ym)(t),
              d = c.settings.model
            if (!d) return null
            n[2] !== u?.models || n[3] !== u?.models.find || n[4] !== d
              ? ((a = u?.models.find((e) => e.model === d)),
                (n[2] = u?.models),
                (n[3] = u?.models.find),
                (n[4] = d),
                (n[5] = a))
              : (a = n[5])
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
          let I = a,
            [M, S] = (0, n.useState)(!1)
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
            p[16] !== I ||
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
                              for (let a of I) for (let i of t.querySelectorAll(a)) if (o(e, i) && r(i)) return !0
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
                        regionElementSelectors: I,
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
                (p[16] = I),
                (p[17] = _),
                (p[18] = u))
              : (u = p[18]),
            p[19] !== m || p[20] !== C || p[21] !== x || p[22] !== g || p[23] !== A || p[24] !== I
              ? ((d = [m, C, x, g, A, I]),
                (p[19] = m),
                (p[20] = C),
                (p[21] = x),
                (p[22] = g),
                (p[23] = A),
                (p[24] = I),
                (p[25] = d))
              : (d = p[25]),
            (0, n.useEffect)(u, d),
            M
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
    a.d(t, { k: () => O })
    var i = a("QosV"),
      n = a("iRMi"),
      o = a("zTeN"),
      r = a("eWgO"),
      l = a("zd8w"),
      s = a("Dgwo"),
      c = a("tl5a"),
      u = a("ke3i"),
      d = a("EOo5"),
      p = a("kYSX")
    a("njX7")
    var m = a("Lb53"),
      f = a("Bb2k"),
      h = a("Eklu"),
      g = a("e85W"),
      v = a("ipV4"),
      y = a("yGJW"),
      w = a("B81s"),
      b = a("j44z"),
      C = a("OWtl"),
      x = a("YWOa"),
      A = a("sLlu"),
      I = a("l2g8"),
      M = a("WFY2"),
      S = a("ER5p"),
      E = a("SGof"),
      R = a("fNL0"),
      _ = a("tzYO"),
      T = a("o8WW"),
      k = a("an0a")
    function O(e, t) {
      let a,
        O,
        P,
        N,
        L = (0, i.c)(15),
        F = void 0 === e ? null : e,
        q = void 0 === t ? null : t,
        j = (0, o.gh)(C.u),
        { draftSettings: D, isNewThreadDraft: U, updateDraftSettings: H } = (0, g.iW)(),
        B = (0, T.aU)(F),
        V = (function (e, t, a, g, T) {
          var O, P
          let N,
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
            X,
            W,
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
            ec,
            eu,
            ed,
            ep,
            em = (0, i.c)(60),
            { modelSettings: ef, setModelAndReasoningEffort: eh } = t,
            eg = (0, o.gh)(C.u),
            ev = (0, l.use)(p.ku),
            ey = null == e ? ev?.conversationId : null,
            ew = (0, o._U)(null != ey ? m.Dd : null, ey ?? null),
            eb = (0, o._U)(null != ey ? m.Q5 : null, ey ?? ""),
            eC = (0, o.Ul)(null != ey ? m.w3 : null),
            ex = (0, k.K5)(e)
          ;(0, l.use)(R.r)
          let eA = ex.hostId
          em[0] !== e || em[1] !== eA
            ? ((N = { hostId: eA, conversationId: e }), (em[0] = e), (em[1] = eA), (em[2] = N))
            : (N = em[2])
          let eI = N,
            eM = (0, o._U)(h.pu, eI)
          em[3] !== eA ? ((L = { hostId: eA }), (em[3] = eA), (em[4] = L)) : (L = em[4])
          let { data: eS, isLoading: eE } = (0, b.Ym)(L),
            eR = (0, o._U)(c.h2, e),
            e_ = (0, o._U)(u.G2, e),
            eT = (0, o._U)(u.Bs, e),
            ek = (0, d.tn)(eA),
            eO = null == e && g && null != T ? eA : ex.hostId,
            eP = ek?.authMethod ?? null
          em[5] !== eO || em[6] !== eP
            ? ((F = { authMethod: eP, hostId: eO }), (em[5] = eO), (em[6] = eP), (em[7] = F))
            : (F = em[7])
          let { data: eN, isPending: eL } = (0, o._U)(w.b9, F),
            eF =
              ((O = null == T),
              (J = (0, i.c)(12)),
              (ee = void 0 === O || O),
              (et = (0, o.Ul)(c.Dj)),
              J[0] !== eA || J[1] !== et ? (($ = et.includes(eA)), (J[0] = eA), (J[1] = et), (J[2] = $)) : ($ = J[2]),
              (ea = $),
              J[3] !== eA ? ((K = { hostId: eA }), (J[3] = eA), (J[4] = K)) : (K = J[4]),
              (ei = (0, o._U)(ee ? x.J8 : null, K)),
              (en = ei?.data),
              (eo = (0, o._U)(ee ? c.QN : null, eA)),
              J[5] !== en?.service_tier || J[6] !== eo
                ? ((Q = null == eo ? null : (0, I.qh)(eo, en?.service_tier ?? null)),
                  (J[5] = en?.service_tier),
                  (J[6] = eo),
                  (J[7] = Q))
                : (Q = J[7]),
              (er = Q),
              (el = "string" == typeof en?.profile ? en.profile : null),
              (es = ee && (!ea || ei?.isLoading === !0)),
              J[8] !== er || J[9] !== el || J[10] !== es
                ? ((Z = { activeProfileForWrite: el, isLoading: es, serviceTier: er }),
                  (J[8] = er),
                  (J[9] = el),
                  (J[10] = es),
                  (J[11] = Z))
                : (Z = J[11]),
              Z),
            eq =
              ((P = eF.activeProfileForWrite),
              (eu = (0, i.c)(5)),
              (ed = (0, o.gh)(C.u)),
              (ep = (0, A.B)()),
              eu[0] !== eA || eu[1] !== ep || eu[2] !== P || eu[3] !== ed
                ? ((ec = async (e) => {
                    ;(await (0, s.V)(ed, eA).setDefaultServiceTierConfig(e, P),
                      ed.set(c.QN, eA, (0, I.oD)(e)),
                      await Promise.all([ep(["config"]), ep([...x.Od, eA, null])]),
                      await ed.query.fetch(x.J8, { hostId: eA }))
                  }),
                  (eu[0] = eA),
                  (eu[1] = ep),
                  (eu[2] = P),
                  (eu[3] = ed),
                  (eu[4] = ec))
                : (ec = eu[4]),
              ec)
          em[8] !== eO ? ((q = { hostId: eO }), (em[8] = eO), (em[9] = q)) : (q = em[9])
          let { serviceTierAccess: ej } = (0, v.U)(q)
          if (
            em[10] !== eN?.requirements?.models?.newThread ||
            em[11] !== e ||
            em[12] !== T ||
            em[13] !== a ||
            em[14] !== ey ||
            em[15] !== ew ||
            em[16] !== eb ||
            em[17] !== eA ||
            em[18] !== eL ||
            em[19] !== eT ||
            em[20] !== eE ||
            em[21] !== g ||
            em[22] !== eR?.serviceTier ||
            em[23] !== e_ ||
            em[24] !== eS ||
            em[25] !== ef.isLoading ||
            em[26] !== ef.model ||
            em[27] !== ef.serviceTier ||
            em[28] !== eM ||
            em[29] !== eC ||
            em[30] !== eg ||
            em[31] !== ej ||
            em[32] !== eI ||
            em[33] !== eh ||
            em[34] !== eq ||
            em[35] !== eF.isLoading ||
            em[36] !== eF.serviceTier
          ) {
            let t,
              i = (0, S.bs)(eS?.models, ef.model),
              o = eN?.requirements?.models?.newThread,
              l = null == e && g && null != o,
              c = l ? o.serviceTier : null,
              u = null != c,
              d = null == T ? eF.serviceTier : (T.serviceTier ?? (0, I.Q7)(null)),
              p = null != ey && (void 0 !== eb || null != ew || void 0 !== eC),
              v = d
            p && (v = (0, I.Qw)(ew ?? null) ? I.aF : null == ew || "standard" === ew ? (0, I.Q7)(null) : ew)
            let w = null != T || p ? (0, I.Q7)((0, I.DS)(i, v)) : d,
              b = u ? (0, I.Q7)(c) : w
            null != ey
              ? void 0 !== eb && (b = (0, I.Qw)(v) ? ((0, I.L9)(i)?.id ?? I.Yf) : v)
              : null == e && null != a && (b = a.value)
            let C = void 0 !== ef.serviceTier ? ef.serviceTier : eR?.serviceTier,
              x = null != e && void 0 !== C ? C : null != e && void 0 !== e_ ? e_ : b
            null == ey && null != eM && (x = eM.serviceTier)
            let A =
              (null == ey && null != eM) ||
              (null != ey && void 0 !== eb) ||
              (null != e && (void 0 !== C || void 0 !== e_))
            ;((H = (0, I.E_)(A ? null : i, x, ej)),
              (U = (e) => {
                let { model: t } = (0, E.D)({ model: e }, eS),
                  a = (0, S.bs)(eS?.models, t ?? e),
                  i = A ? H : (0, I.E_)(a, x, ej)
                return (0, I.DS)(a, null != ey && (0, I.Qw)(i) ? I.aF : i)
              }),
              (D = null == H ? null : (0, I.DS)(i, H)))
            let R = (0, I.XK)(H ?? null)
            ;((j = eT || ef.isLoading || eE || eF.isLoading || T?.isLoading === !0 || (null == e && eL)),
              (B = async (t, i) => {
                let o = null != T ? eg.get(_.Wo) : null,
                  l = null == e ? null : eg.get(h.EX, ["conversation", e]),
                  c = eg.get(h.pu, eI),
                  p = null != c || u || (0, I.Q7)(t) !== d,
                  g = null != e && (null != c || t !== eR?.serviceTier),
                  v = { serviceTier: t }
                l?.serviceTier === void 0 && eg.set(h.pu, eI, v)
                let w = !1,
                  b = !1
                try {
                  if (null != ey)
                    if (null != T) b = !(await (0, m.lE)(eg, ey, t))
                    else {
                      let e = null == t || "default" === t ? "standard" : t
                      ;(eg.set(m.Q5, ey, e), eg.set(f.$, e), p && (await eq(t)))
                    }
                  if (
                    (l?.serviceTier !== void 0
                      ? (b = !(w = await eh(l.model, l.reasoningEffort, { persistAsDefault: !1, serviceTier: t })))
                      : g && (await (0, s.V)(eg, eA).updateThreadSettingsForNextTurn(e, { serviceTier: t }), (w = !0)),
                    null == ey && p && !b)
                  )
                    if (null != T) {
                      let e = eg.get(_.Wo)
                      null == o || e?.accountId !== o.accountId || e.userId !== o.userId
                        ? (b = !0)
                        : await eg.get(_.$C).mutateAsync({ serviceTier: (0, r.Pg)(t) ?? "standard" })
                    } else await eq(t)
                } catch (e) {
                  ;((b = !0), M.v.error("Failed to set service tier", { safe: {}, sensitive: { error: e } }))
                }
                if ((eg.get(h.pu, eI) === v && eg.set(h.pu, eI, null), b)) return !1
                if (p || w || null != ey || (null == e && null != a)) {
                  let e = (0, I.XK)(t)
                  if (R === e) return !0
                  ;(0, y.yy)(eg, n.CodexServiceTierChanged, { previousServiceTier: R, serviceTier: e, source: i })
                }
                return !0
              }),
              (z = l),
              (Y = eA),
              (X = ej),
              em[46] !== ej ? ((t = (e) => (0, r.uw)(e.value, ej)), (em[46] = ej), (em[47] = t)) : (t = em[47]),
              (V = (0, I.HN)(i).filter(t)),
              (em[10] = eN?.requirements?.models?.newThread),
              (em[11] = e),
              (em[12] = T),
              (em[13] = a),
              (em[14] = ey),
              (em[15] = ew),
              (em[16] = eb),
              (em[17] = eA),
              (em[18] = eL),
              (em[19] = eT),
              (em[20] = eE),
              (em[21] = g),
              (em[22] = eR?.serviceTier),
              (em[23] = e_),
              (em[24] = eS),
              (em[25] = ef.isLoading),
              (em[26] = ef.model),
              (em[27] = ef.serviceTier),
              (em[28] = eM),
              (em[29] = eC),
              (em[30] = eg),
              (em[31] = ej),
              (em[32] = eI),
              (em[33] = eh),
              (em[34] = eq),
              (em[35] = eF.isLoading),
              (em[36] = eF.serviceTier),
              (em[37] = j),
              (em[38] = D),
              (em[39] = U),
              (em[40] = H),
              (em[41] = B),
              (em[42] = V),
              (em[43] = z),
              (em[44] = Y),
              (em[45] = X))
          } else
            ((j = em[37]),
              (D = em[38]),
              (U = em[39]),
              (H = em[40]),
              (B = em[41]),
              (V = em[42]),
              (z = em[43]),
              (Y = em[44]),
              (X = em[45]))
          return (
            em[48] !== j || em[49] !== D || em[50] !== U || em[51] !== H || em[52] !== V
              ? ((W = {
                  availableOptions: V,
                  isLoading: j,
                  selectedServiceTier: D,
                  selectedServiceTierForModel: U,
                  serviceTierForRequest: H,
                }),
                (em[48] = j),
                (em[49] = D),
                (em[50] = U),
                (em[51] = H),
                (em[52] = V),
                (em[53] = W))
              : (W = em[53]),
            em[54] !== B || em[55] !== W || em[56] !== z || em[57] !== Y || em[58] !== X
              ? ((G = {
                  hasManagedNewThreadSettings: z,
                  hostId: Y,
                  serviceTierAccess: X,
                  serviceTierSettings: W,
                  setServiceTier: B,
                }),
                (em[54] = B),
                (em[55] = W),
                (em[56] = z),
                (em[57] = Y),
                (em[58] = X),
                (em[59] = G))
              : (G = em[59]),
            G
          )
        })(F, B, D.serviceTier, U, q)
      ;(L[0] !== V
        ? (({ serviceTierAccess: O, ...a } = V), (L[0] = V), (L[1] = a), (L[2] = O))
        : ((a = L[1]), (O = L[2])),
        L[3] !== a ||
        L[4] !== F ||
        L[5] !== q ||
        L[6] !== D.serviceTier ||
        L[7] !== U ||
        L[8] !== j ||
        L[9] !== O ||
        L[10] !== H
          ? ((P = async (e, t) => {
              if (!(0, r.uw)(e, O)) return !1
              let i = null == F && U && (a.hasManagedNewThreadSettings || null != q || null != D.serviceTier)
              i && H((t) => ({ ...t, isManuallyChanged: !0, serviceTier: { value: (0, I.Q7)(e) } }))
              let [n] = await Promise.all([
                a.setServiceTier(e, t),
                i ? (0, s.V)(j, a.hostId).clearPrewarmedThreads() : void 0,
              ])
              return n
            }),
            (L[3] = a),
            (L[4] = F),
            (L[5] = q),
            (L[6] = D.serviceTier),
            (L[7] = U),
            (L[8] = j),
            (L[9] = O),
            (L[10] = H),
            (L[11] = P))
          : (P = L[11]))
      let z = P
      return (
        L[12] !== a || L[13] !== z
          ? ((N = { ...a, setServiceTier: z }), (L[12] = a), (L[13] = z), (L[14] = N))
          : (N = L[14]),
        N
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
  NIKO(e, t, a) {
    var i = a("UOvO"),
      n = a("ASxG")
    let o = n.object({ type: n.literal("text"), text: n.literal(i.Vr) })
    a.d(
      t,
      {},
      {
        h: function (e) {
          if (
            (e?.type !== "dynamicToolCall" && e?.type !== "mcpToolCall") ||
            e.tool !== i.GY ||
            "completed" !== e.status
          )
            return null
          if (
            "dynamicToolCall" === e.type
              ? (null == e.namespace || "codex_app" === e.namespace) && !0 === e.success
              : "codex_app" === e.server && e.result?.content.some((e) => o.safeParse(e).success)
          ) {
            let t = i.T2.safeParse(e.arguments)
            if (t.success) return t.data.summary
          }
          return null
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
      I = a("OMIV"),
      M = a("LulU"),
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
      F = a("qreq"),
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
            X = e.get(g.chatGptAuthenticatedAccountId$),
            W = e.get(g.chatGptAuthenticatedUserId$),
            G = e.get(g.kf),
            $ = "loaded" === G.status && "personal" === G.structure ? W : e.get(g.Kw)
          if ("loaded" !== G.status || null == X || null == W || null == $) throw (0, F.t)(e)
          let K = () => {
              if (e.get(g.chatGptAuthenticatedAccountId$) !== X || e.get(g.chatGptAuthenticatedUserId$) !== W)
                throw new DOMException("Messaging account changed", "AbortError")
            },
            Q = new AbortController(),
            Z = (0, F.createNativeMessagingApi)({
              scope: e,
              accountId: X,
              userId: W,
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
                  accountId: X,
                  userId: W,
                  intl: e.get(x.g),
                })),
              z
            )
          try {
            let g = JSON.stringify([X, W, t]),
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
                    additionalHeaders: { [s.zBc]: X },
                    parameters: { path: { tbo_id: g.id } },
                  })
                  ;((C = e.messaging_room_id), await m.cancel(), m.setData(e))
                }
                if (null == C) throw (0, F.t)(e)
                let x = e.get(I.JW, "451195040"),
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
                          ? [{ appshot: i, read: async () => (0, M.bX)(t.url, n).file }]
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
                  })(_, a, X, C, Z.media),
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
      o = a("rS3J"),
      r = a("EULo")
    let l = /(?:^|[\\/])visualizations(?:[\\/"'\s;]|$)/i,
      s = /(?:^|\s)(?:apply_patch|mkdir|tee|touch|cp|mv|install)(?:\s|$)|(?:^|[^<])>>?/,
      c = /\*\*\* Add File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
      u = /\*\*\* Update File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
      d = /\*\*\* Delete File:[^\r\n]*[\\/]visualizations(?:[\\/"'\s;]|$)/i,
      p = `${i._NM}@${i.MY3}`,
      m = `${i._NM}@${i.IY7}`,
      f = `${i._NM}@${i.xiH}`,
      h = /^plugin:\/\/([^?]+)(?:\?|$)/i,
      g =
        /\b(?:visuals?|visuali[sz](?:e|ed|es|er|ers|ing|ations?)|(?:flow)?charts?|plot(?:s|ted|ting)?|graphs?|diagrams?|maps?|simulat(?:e|ed|es|ing|ions?|ors?)|labs?|compar(?:e|ed|es|ing|isons?)|scenarios?|explor(?:e|ed|es|ing|ations?)|interactive|adjustable[-\s]+inputs?)\b|\bshow\s+(?:(?:me|us)\s+)?how\b/i,
      v = (0, n.YK)({
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
              g.test(t.text) && (i = !0)
              let e = 0
              for (; e < t.text.length;) {
                let a = (0, o.ex)(t.text, e)
                if (null == a) break
                let i = h
                  .exec((0, r.gh)(a.path))?.[1]
                  ?.trim()
                  .toLowerCase()
                if (i === p || i === m || i === f) return "explicit"
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
              if (a) return i ? e.formatMessage(v.summaryCreatedLeading) : e.formatMessage(v.summaryCreated)
              return i ? e.formatMessage(v.summaryCreatingLeading) : e.formatMessage(v.summaryCreating)
            case "update":
              if (a) return i ? e.formatMessage(v.summaryUpdatedLeading) : e.formatMessage(v.summaryUpdated)
              return i ? e.formatMessage(v.summaryUpdatingLeading) : e.formatMessage(v.summaryUpdating)
          }
        },
        mw: function (e) {
          return l.test(e) && s.test(e)
            ? c.test(e)
              ? "create"
              : u.test(e)
                ? "update"
                : d.test(e)
                  ? null
                  : "create"
            : null
        },
        yz: v,
      },
    )
  },
  Swsr(e, t, a) {
    let i = (0, a("iJY0").a)({
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
//# sourceMappingURL=363454.74e51067fe.js.map
