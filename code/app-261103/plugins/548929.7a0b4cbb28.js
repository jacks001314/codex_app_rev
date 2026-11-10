export const __rspack_esm_ids = [548929]
export const __webpack_modules__ = {
  LdDb(e, t, l) {
    var a = l("ABep")
    ;(l("zd8w"),
      (t.A = (e) =>
        (0, a.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, a.jsx)("path", {
            d: "M10.6299 1.33496C12.0335 1.33496 13.2695 2.25996 13.666 3.60645L13.8809 4.33496H17L17.1338 4.34863C17.4369 4.41057 17.665 4.67858 17.665 5C17.665 5.32142 17.4369 5.58943 17.1338 5.65137L17 5.66504H16.6543L15.8574 14.9912C15.7177 16.629 14.3478 17.8877 12.7041 17.8877H7.2959C5.75502 17.8877 4.45439 16.7815 4.18262 15.2939L4.14258 14.9912L3.34668 5.66504H3C2.63273 5.66504 2.33496 5.36727 2.33496 5C2.33496 4.63273 2.63273 4.33496 3 4.33496H6.11914L6.33398 3.60645L6.41797 3.3584C6.88565 2.14747 8.05427 1.33496 9.37012 1.33496H10.6299ZM5.46777 14.8779L5.49121 15.0537C5.64881 15.9161 6.40256 16.5576 7.2959 16.5576H12.7041C13.6571 16.5576 14.4512 15.8275 14.5322 14.8779L15.3193 5.66504H4.68164L5.46777 14.8779ZM7.66797 12.8271V8.66016C7.66797 8.29299 7.96588 7.99528 8.33301 7.99512C8.70028 7.99512 8.99805 8.29289 8.99805 8.66016V12.8271C8.99779 13.1942 8.70012 13.4912 8.33301 13.4912C7.96604 13.491 7.66823 13.1941 7.66797 12.8271ZM11.002 12.8271V8.66016C11.002 8.29289 11.2997 7.99512 11.667 7.99512C12.0341 7.9953 12.332 8.293 12.332 8.66016V12.8271C12.3318 13.1941 12.0339 13.491 11.667 13.4912C11.2999 13.4912 11.0022 13.1942 11.002 12.8271ZM9.37012 2.66504C8.60726 2.66504 7.92938 3.13589 7.6582 3.83789L7.60938 3.98145L7.50586 4.33496H12.4941L12.3906 3.98145C12.1607 3.20084 11.4437 2.66504 10.6299 2.66504H9.37012Z",
          }),
        })))
  },
  xcgE(e, t, l) {
    var a = l("DBCl"),
      s = l("Qgfj"),
      n = l("H7Ld")
    let i = (0, s.zR)({
      id: "settings.chronicle.history.pluginDisplayName",
      defaultMessage: "Computer History",
      description: "Display name of the Computer History plugin in a prefilled conversation mention",
    })
    l.d(
      t,
      {},
      {
        b: i,
        c: function ({ intl: e, memoryFilePath: t, suggestion: l }) {
          return (0, n.KH)({
            defaultPrompt:
              "skill" === l.type
                ? e.formatMessage(
                    {
                      id: "settings.chronicle.history.createNamedSuggestedSkillPrompt",
                      defaultMessage:
                        'Create a new "{name}" skill based on the description below. Consult the memory at {memoryFilePath} and the events.jsonl files cited there to understand the recorded workflow and my actions.{paragraphBreak}"{request}"',
                      description:
                        "Prefilled conversation request for creating a named reusable skill from a Computer history suggestion",
                    },
                    { name: l.name, request: l.description, memoryFilePath: t, paragraphBreak: "\n\n" },
                  )
                : e.formatMessage(
                    {
                      id: "settings.chronicle.history.createNamedSuggestedAutomationPrompt",
                      defaultMessage:
                        'Create a new "{name}" automation based on the description below. Consult the memory at {memoryFilePath} and the events.jsonl files cited there to understand the recorded workflow and my actions.{paragraphBreak}"{request}"{paragraphBreak}Use my local timezone and a new chat for scheduled runs.',
                      description:
                        "Prefilled conversation request for creating a named automation from a Computer history suggestion",
                    },
                    { name: l.name, request: l.description, memoryFilePath: t, paragraphBreak: "\n\n" },
                  ),
            pluginDisplayName: e.formatMessage(i),
            pluginId: `${a.IW7}@${a.MY3}`,
          })
        },
      },
    )
  },
  GK7D(e, t, l) {
    var a = l("ABep"),
      s = l("QosV"),
      n = l("on57")
    l.d(
      t,
      {},
      {
        z: function (e) {
          let t,
            l,
            i,
            r,
            o,
            d,
            c,
            u,
            p,
            g,
            m = (0, s.c)(30),
            { actions: h, asset: f, subtitle: x, subtitleClassName: b, title: v, variant: y } = e,
            k = void 0 === y ? "default" : y
          m[0] !== f
            ? ((t = null == f ? null : (0, a.jsx)("div", { className: "flex", children: f })), (m[0] = f), (m[1] = t))
            : (t = m[1])
          let j = "page" === k ? "flex-nowrap" : "flex-wrap"
          m[2] !== j
            ? ((l = (0, n.A)("flex min-w-0 items-start justify-between gap-4", j)), (m[2] = j), (m[3] = l))
            : (l = m[3])
          let C = "settingsCompact" === k ? "gap-1.25" : "gap-1.5"
          m[4] !== C ? ((i = (0, n.A)("flex min-w-0 flex-1 basis-64 flex-col", C)), (m[4] = C), (m[5] = i)) : (i = m[5])
          let M = "settings" === k && "heading-lg font-normal",
            w = "settingsCompact" === k && "heading-lg font-semibold leading-7",
            A = "page" === k && "heading-lg electron:heading-xl",
            S = "default" === k && "heading-base electron:heading-lg"
          return (
            m[6] !== S || m[7] !== M || m[8] !== w || m[9] !== A
              ? ((r = (0, n.A)("min-w-0 break-words text-default", M, w, A, S)),
                (m[6] = S),
                (m[7] = M),
                (m[8] = w),
                (m[9] = A),
                (m[10] = r))
              : (r = m[10]),
            m[11] !== r || m[12] !== v
              ? ((o = (0, a.jsx)("h1", { className: r, children: v })), (m[11] = r), (m[12] = v), (m[13] = o))
              : (o = m[13]),
            m[14] !== x || m[15] !== b
              ? ((d =
                  null == x
                    ? null
                    : (0, a.jsx)("div", { className: (0, n.A)("text-base text-secondary", b), children: x })),
                (m[14] = x),
                (m[15] = b),
                (m[16] = d))
              : (d = m[16]),
            m[17] !== o || m[18] !== d || m[19] !== i
              ? ((c = (0, a.jsxs)("div", { className: i, children: [o, d] })),
                (m[17] = o),
                (m[18] = d),
                (m[19] = i),
                (m[20] = c))
              : (c = m[20]),
            m[21] !== h
              ? ((u =
                  null == h
                    ? null
                    : (0, a.jsx)("div", { className: "flex max-w-full shrink-0 items-center gap-2", children: h })),
                (m[21] = h),
                (m[22] = u))
              : (u = m[22]),
            m[23] !== c || m[24] !== u || m[25] !== l
              ? ((p = (0, a.jsxs)("div", { className: l, children: [c, u] })),
                (m[23] = c),
                (m[24] = u),
                (m[25] = l),
                (m[26] = p))
              : (p = m[26]),
            m[27] !== p || m[28] !== t
              ? ((g = (0, a.jsxs)("header", {
                  className: "flex flex-col gap-4 px-[var(--detail-page-inline-inset,0px)]",
                  children: [t, p],
                })),
                (m[27] = p),
                (m[28] = t),
                (m[29] = g))
              : (g = m[29]),
            g
          )
        },
      },
    )
  },
  EShr(e, t, l) {
    var a = l("ABep"),
      s = l("QosV"),
      n = l("slpy"),
      i = l("on57"),
      r = l("zd8w"),
      o = l("ygO2")
    function d(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    l.d(
      t,
      {},
      {
        T: function (e) {
          let t,
            l,
            c,
            u,
            p = (0, s.c)(13),
            {
              options: g,
              selectedId: m,
              onHover: h,
              onSelect: f,
              size: x,
              className: b,
              buttonClassName: v,
              fullWidth: y,
              wrapLabels: k,
              uniform: j,
              selectedColor: C,
              unselectedColor: M,
              focusRing: w,
              variant: A,
              ariaLabel: S,
              ariaLabelledBy: P,
            } = e,
            I = void 0 === g ? [] : g,
            L = void 0 !== y && y,
            E = void 0 !== k && k,
            N = void 0 === A ? "default" : A,
            _ = (0, r.useRef)(null)
          p[0] !== m ? ((t = (e) => e.id === m), (p[0] = m), (p[1] = t)) : (t = p[1])
          let T = I.findIndex(t),
            R =
              -1 === T
                ? void 0
                : {
                    "--segmented-form-indicator-width": `${100 / I.length}%`,
                    "--segmented-form-indicator-offset": `${100 * T}%`,
                  },
            H = x ?? "default",
            D = "default",
            O = void 0 === C ? "segmentedSelected" : C,
            U = void 0 === M ? "ghost" : M
          "inset" === N
            ? ((H = x ?? "compact"), (D = "large"), (O = "segmentedInsetSelected"))
            : "field" === N
              ? ((H = "fieldSegment"), (O = "segmentedInsetSelected"))
              : "form" === N
                ? ((H = x ?? "recoveryAction"),
                  (D = "full"),
                  (O = "segmentedFormSelected"),
                  (U = "segmentedFormUnselected"))
                : "pricing" === N
                  ? ((H = "dialog"), (D = "extraLarge"))
                  : "filter" === N
                    ? ((H = "compact"), (D = "full"), (O = "secondary"), (U = "ghostTertiary"))
                    : "viewer" === N && ((H = "inline"), (D = "full"), (U = "ghostActive"))
          let V = j ?? ("icon" === H && I.length > 2)
          ;(p[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = () => {
                let e = _.current
                if (null == e) return
                let t = () => {
                  let t = e.querySelector('button[aria-pressed="true"], a[aria-current="page"]')
                  if (null == t) return
                  let l = t.offsetLeft,
                    a = l + t.offsetWidth,
                    s = e.scrollLeft,
                    n = s + e.clientWidth
                  l < s ? (e.scrollLeft = l) : a > n && (e.scrollLeft = a - e.clientWidth)
                }
                if ("u" < typeof ResizeObserver) return void t()
                let l = new ResizeObserver(t)
                for (let t of (l.observe(e), e.querySelectorAll("button, a"))) l.observe(t)
                return () => {
                  l.disconnect()
                }
              }),
              (p[2] = l))
            : (l = p[2]),
            (0, r.useLayoutEffect)(l, [I, m]))
          let z = (0, i.A)(
              "relative min-w-0 max-w-full items-center",
              "mode" === N
                ? [
                    L ? "grid w-full" : "inline-grid",
                    "isolate h-9 auto-cols-fr grid-flow-col gap-0 rounded-full select-none",
                  ]
                : [
                    L ? "flex w-full" : "inline-flex",
                    "hide-scrollbar overflow-x-auto overflow-y-hidden",
                    "field" === N || "form" === N ? "gap-0" : "gap-0.5",
                  ],
              "inset" === N && "rounded-[10px] bg-(--segmented-control-background) p-0.5",
              "field" === N && "h-8 rounded-lg bg-secondary-soft dark:bg-text/5",
              "form" === N && [
                "isolate rounded-full bg-background-segmented-form-track dark:inset-shadow-sm dark:inset-ring-1 dark:inset-ring-border-subtle",
                "compact" === H ? "p-0.5" : "p-1",
              ],
              "pricing" === N && "rounded-[20px] bg-surface-secondary p-1",
              "viewer" === N && "h-full p-0.5",
              b,
            ),
            B =
              "form" === N && -1 !== T
                ? (0, a.jsx)("span", {
                    "aria-hidden": !0,
                    className: (0, i.A)(
                      "pointer-events-none absolute z-10 flex forced-colors:hidden",
                      "compact" === H ? "inset-0.5" : "inset-1",
                    ),
                    style: R,
                    children: (0, a.jsx)("span", {
                      className:
                        "h-full w-(--segmented-form-indicator-width) rounded-full bg-background-segmented-form-selected shadow-md motion-safe:transition-transform motion-safe:duration-basic motion-safe:ease-in-out ltr:translate-x-(--segmented-form-indicator-offset) rtl:-translate-x-(--segmented-form-indicator-offset) dark:shadow-lg-stronger dark:inset-shadow-2xs dark:inset-shadow-border",
                    }),
                  })
                : null
          p[3] !== N
            ? ((c =
                "mode" === N
                  ? (0, a.jsx)("span", {
                      "aria-hidden": !0,
                      className:
                        "pointer-events-none absolute inset-x-px top-1/2 z-0 h-8.5 -translate-y-1/2 rounded-full bg-background-mode-toggle-track",
                    })
                  : null),
              (p[3] = N),
              (p[4] = c))
            : (c = p[4])
          let F = I.map((e) => {
            let t = e.id === m,
              l = e.disabled ?? !1,
              { id: s, label: r, ariaLabel: d, tooltipContent: c, disabled: u, ...p } = e,
              g = {
                unstyled: "mode" === N,
                color: t ? O : U,
                focusRing: w ?? ("inset" === N || "field" === N ? "default" : "inset"),
                size: H,
                radius: D,
                onPointerEnter: null == h || l ? void 0 : () => h(s),
                uniform: V,
                "aria-label": d,
                disabled: l,
                className: (0, i.A)(
                  L ? "flex-1 justify-center" : "shrink-0",
                  E && "self-stretch py-2",
                  "form" === N &&
                    "relative min-w-0 flex-1 basis-0 focus-visible:z-20 motion-safe:transition-colors motion-safe:duration-basic",
                  "mode" === N && [
                    "relative z-10 h-full min-w-0 justify-center rounded-full border px-10 text-sm font-medium @max-lg/home-mode-toggle:px-2.5",
                    t
                      ? "border-mode-toggle-selected bg-background-mode-toggle-selected text-mode-toggle-primary shadow-mode-toggle-selected"
                      : "border-transparent text-mode-toggle-inactive hover:text-mode-toggle-primary focus-visible:text-mode-toggle-primary",
                  ],
                  "viewer" === N && "h-full px-2.5",
                  v,
                ),
                children:
                  "form" === N || E
                    ? (0, a.jsx)("span", {
                        className: (0, i.A)(
                          "form" === N && "relative z-20",
                          E && "min-w-0 wrap-anywhere whitespace-normal",
                        ),
                        children: r,
                      })
                    : r,
              },
              x =
                null != p.to
                  ? (0, a.jsx)(o.z, { ...p, ...g, "aria-current": t ? "page" : void 0 }, s)
                  : (0, a.jsx)(o.$, { ...g, onClick: () => f?.(s), "aria-pressed": t }, s)
            return c ? (0, a.jsx)(n.m, { content: c, children: x }, s) : x
          })
          return (
            p[5] !== S || p[6] !== P || p[7] !== d || p[8] !== B || p[9] !== c || p[10] !== F || p[11] !== z
              ? ((u = (0, a.jsxs)("div", {
                  ref: _,
                  className: z,
                  role: "group",
                  "aria-label": S,
                  "aria-labelledby": P,
                  onWheel: d,
                  children: [B, c, F],
                })),
                (p[5] = S),
                (p[6] = P),
                (p[7] = d),
                (p[8] = B),
                (p[9] = c),
                (p[10] = F),
                (p[11] = z),
                (p[12] = u))
              : (u = p[12]),
            u
          )
        },
      },
    )
  },
  q2la(e, t, l) {
    var a = l("ABep"),
      s = l("QosV"),
      n = l("on57")
    l.d(
      t,
      {},
      {
        t: function (e) {
          let t,
            l,
            i = (0, s.c)(5),
            { children: r, className: o } = e
          return (
            i[0] !== o ? ((t = (0, n.A)("flex items-center gap-2", o)), (i[0] = o), (i[1] = t)) : (t = i[1]),
            i[2] !== r || i[3] !== t
              ? ((l = (0, a.jsx)("div", { className: t, children: r })), (i[2] = r), (i[3] = t), (i[4] = l))
              : (l = i[4]),
            l
          )
        },
      },
    )
  },
  jxU8(e, t, l) {
    l.d(t, { P: () => h, Y: () => f })
    var a = l("ABep"),
      s = l("QosV"),
      n = l("on57"),
      i = l("zd8w"),
      r = l("bJfu"),
      o = l("qbQ6"),
      d = l("GK7D"),
      c = l("PkPj"),
      u = l("DiyT"),
      p = l("ibLK"),
      g = l("V8uZ"),
      m = l("oFmV")
    function h(e) {
      let t,
        l,
        h,
        f,
        x,
        b,
        v,
        y,
        k,
        j,
        C,
        M,
        w,
        A,
        S,
        P,
        I,
        L,
        E,
        N,
        _,
        T,
        R,
        H,
        D,
        O,
        U,
        V,
        z,
        B,
        F,
        $,
        q,
        Q,
        Y,
        K,
        W,
        G,
        Z,
        X,
        J,
        ee,
        et,
        el,
        ea = (0, s.c)(120)
      ea[0] !== e
        ? (({
            title: L,
            asset: l,
            backSlot: h,
            subtitle: w,
            children: f,
            fullWidth: S,
            contentClassName: b,
            subtitleClassName: A,
            action: t,
            toolbarActions: E,
            stickyControls: M,
            footer: y,
            embedded: P,
            density: v,
            scrollResetKey: C,
            containTouchOverscroll: I,
            ref: k,
            className: x,
            ...j
          } = e),
          (ea[0] = e),
          (ea[1] = t),
          (ea[2] = l),
          (ea[3] = h),
          (ea[4] = f),
          (ea[5] = x),
          (ea[6] = b),
          (ea[7] = v),
          (ea[8] = y),
          (ea[9] = k),
          (ea[10] = j),
          (ea[11] = C),
          (ea[12] = M),
          (ea[13] = w),
          (ea[14] = A),
          (ea[15] = S),
          (ea[16] = P),
          (ea[17] = I),
          (ea[18] = L),
          (ea[19] = E))
        : ((t = ea[1]),
          (l = ea[2]),
          (h = ea[3]),
          (f = ea[4]),
          (x = ea[5]),
          (b = ea[6]),
          (v = ea[7]),
          (y = ea[8]),
          (k = ea[9]),
          (j = ea[10]),
          (C = ea[11]),
          (M = ea[12]),
          (w = ea[13]),
          (A = ea[14]),
          (S = ea[15]),
          (P = ea[16]),
          (I = ea[17]),
          (L = ea[18]),
          (E = ea[19]))
      let es = void 0 !== S && S,
        en = void 0 !== P && P,
        ei = void 0 !== I && I,
        er = v ?? "default",
        eo = (0, i.useRef)(null),
        ed = (0, i.useRef)(null),
        ec = ei && !en && !1
      ;((et = (0, s.c)(4)),
        (el = (0, p.U)(ec ? "(pointer: coarse)" : null)),
        et[0] !== el || et[1] !== ed
          ? ((J = () => {
              let e = ed.current
              if (!el || null == e) return
              let t = e.ownerDocument.documentElement
              t.dataset.containTouchOverscroll = String(Number(t.dataset.containTouchOverscroll ?? 0) + 1)
              let l = e.closest("[data-app-shell-frame]") ?? e,
                a = e.closest("[data-app-shell-main-surface]"),
                s = null,
                n = 0,
                i = () => {
                  s = null
                },
                r = (t) => {
                  let l = t.touches[0]
                  if (1 !== t.touches.length || null == l) return void i()
                  let r = t.composedPath().includes(e),
                    o = t.target,
                    d =
                      o instanceof Element &&
                      ((o.contains(e) && a?.contains(o)) || null != o.closest("[data-app-shell-main-titlebar]"))
                  r || d ? ((s = { x: l.clientX, y: l.clientY, inPanel: r }), (n = l.clientY)) : i()
                },
                o = (t) => {
                  let a = t.touches[0]
                  if (1 !== t.touches.length || null == a || null == s) return void i()
                  let r = a.clientY > n
                  if (
                    ((n = a.clientY),
                    !(!t.cancelable || !r || a.clientY - s.y <= Math.abs(a.clientX - s.x)) &&
                      (!s.inPanel || (!(e.scrollTop > 0) && !(e.scrollHeight <= e.clientHeight))))
                  ) {
                    for (let a of t.composedPath()) {
                      if (a === e || a === l) break
                      if (
                        a instanceof HTMLElement &&
                        a.scrollTop > 0 &&
                        /^(auto|scroll)$/.test(getComputedStyle(a).overflowY)
                      )
                        return
                    }
                    t.preventDefault()
                  }
                },
                d = { capture: !0, passive: !0 }
              return (
                l.addEventListener("touchstart", r, d),
                l.addEventListener("touchmove", o, { capture: !0, passive: !1 }),
                l.addEventListener("touchend", i, d),
                l.addEventListener("touchcancel", i, d),
                () => {
                  let e = Number(t.dataset.containTouchOverscroll) - 1
                  ;(e > 0 ? (t.dataset.containTouchOverscroll = String(e)) : delete t.dataset.containTouchOverscroll,
                    l.removeEventListener("touchstart", r, !0),
                    l.removeEventListener("touchmove", o, !0),
                    l.removeEventListener("touchend", i, !0),
                    l.removeEventListener("touchcancel", i, !0))
                }
              )
            }),
            (ee = [el, ed]),
            (et[0] = el),
            (et[1] = ed),
            (et[2] = J),
            (et[3] = ee))
          : ((J = et[2]), (ee = et[3])),
        (0, i.useEffect)(J, ee))
      let [eu, ep] = (0, i.useState)(!1),
        eg = (0, i.useContext)(m.S),
        em = !!eg?.slateLayout && !en
      ;(0, p.U)(o.mk)
      let eh = em && !1,
        ef = eg?.targetId ?? null,
        ex = eg?.targetText ?? null,
        eb = eg?.navigationKey ?? null
      ;(ea[20] !== C
        ? ((N = () => {
            null != C && null != ed.current && (ed.current.scrollTop = 0)
          }),
          (_ = [C]),
          (ea[20] = C),
          (ea[21] = N),
          (ea[22] = _))
        : ((N = ea[21]), (_ = ea[22])),
        (0, i.useLayoutEffect)(N, _),
        ea[23] !== ef || ea[24] !== ex
          ? ((T = () => {
              let e, t
              if (null == ef && null == ex) return
              let l = eo.current
              if (null == l) return
              let a = () => {
                  if (null == ex) return null == ef ? null : document.getElementById(ef)
                  let e = ex.trim().toLocaleLowerCase(),
                    t = e.split(/\s+/u),
                    a = null
                  for (let s of l.querySelectorAll("*")) {
                    let l = (s.getAttribute("placeholder") ?? s.textContent)?.trim().toLocaleLowerCase()
                    if (
                      null == l ||
                      !t.every((e) => l.includes(e)) ||
                      null != s.closest('[hidden], [aria-hidden="true"]')
                    )
                      continue
                    let n = l.includes(e)
                    ;(null == a || (n && !a.isContiguous) || (n === a.isContiguous && l.length <= a.text.length)) &&
                      (a = { element: s, isContiguous: n, text: l })
                  }
                  return a?.element ?? null
                },
                s = (t) => {
                  if ((t.scrollIntoView?.({ block: "center" }), null == ex)) return
                  let a = "true" === document.documentElement.dataset.reducedMotion,
                    s = t.closest("button"),
                    n = s?.parentElement ?? t
                  if (null == s) {
                    let e = t.closest("section")
                    for (let a = t.parentElement; null != a && a !== e && a !== l; a = a.parentElement)
                      if (
                        Array.from(a.children).some(
                          (e) =>
                            !e.contains(t) &&
                            (e.matches(
                              'button, input, select, textarea, [role="switch"], [role="checkbox"], [role="combobox"]',
                            ) ||
                              null !=
                                e.querySelector(
                                  'button, input, select, textarea, [role="switch"], [role="checkbox"], [role="combobox"]',
                                )),
                        )
                      ) {
                        n = a
                        break
                      }
                  }
                  e = n.animate?.(
                    a
                      ? [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                        ]
                      : [
                          { backgroundColor: "var(--color-background-primary-ghost-hover)" },
                          { backgroundColor: "var(--color-background-primary-ghost-hover)", offset: 0.35 },
                          { backgroundColor: "transparent" },
                        ],
                    { duration: 450, easing: `cubic-bezier(${g.Wu.join(", ")})` },
                  )
                },
                n =
                  null == ex
                    ? new ResizeObserver(() => {
                        let e = a()
                        null != e && s(e)
                      })
                    : null,
                i = () => {
                  for (let e of (t?.disconnect(), n?.disconnect(), ["wheel", "pointerdown", "keydown"]))
                    l.ownerDocument.removeEventListener(e, i)
                }
              if (null != n)
                for (let e of (n.observe(l), ["wheel", "pointerdown", "keydown"]))
                  l.ownerDocument.addEventListener(e, i, { passive: !0 })
              let r = a()
              return (
                null != r
                  ? s(r)
                  : (t = new MutationObserver(() => {
                      let e = a()
                      null != e && (s(e), t?.disconnect())
                    })).observe(null == ex ? document.body : l, { childList: !0, subtree: !0 }),
                () => {
                  ;(i(), e?.cancel())
                }
              )
            }),
            (ea[23] = ef),
            (ea[24] = ex),
            (ea[25] = T))
          : (T = ea[25]),
        ea[26] !== eb || ea[27] !== ef || ea[28] !== ex
          ? ((R = [eb, ef, ex]), (ea[26] = eb), (ea[27] = ef), (ea[28] = ex), (ea[29] = R))
          : (R = ea[29]),
        (0, i.useLayoutEffect)(T, R),
        ea[30] !== E
          ? ((H =
              null == E
                ? null
                : (0, a.jsx)("div", {
                    className: "ms-auto flex min-w-0 items-center justify-end gap-2 no-drag",
                    children: E,
                  })),
            (ea[30] = E),
            (ea[31] = H))
          : (H = ea[31]),
        ea[32] !== h || ea[33] !== H
          ? ((D = (0, a.jsxs)(a.Fragment, { children: [h, H] })), (ea[32] = h), (ea[33] = H), (ea[34] = D))
          : (D = ea[34]))
      let ev = D,
        ey = en ? "default" : "settings"
      "compact" === er && (ey = "settingsCompact")
      let ek = "compact" === v && "[--settings-section-gap:--spacing(5.5)]",
        ej =
          "default" === v &&
          (en && !es ? "[--settings-section-gap:var(--padding-panel)]" : "[--settings-section-gap:--spacing(10)]"),
        eC = es ? null : en ? "max-w-2xl" : "max-w-3xl electron:min-w-[min(100%,calc(320px*var(--codex-window-zoom)))]"
      ;(ea[35] !== b || ea[36] !== M || ea[37] !== ek || ea[38] !== ej || ea[39] !== eC || ea[40] !== em
        ? ((O = (0, n.A)(
            "group/settings mx-auto flex w-full flex-col",
            ek,
            ej,
            eC,
            em && ["px-panel pb-panel", null == M && "pt-panel"],
            b,
          )),
          (ea[35] = b),
          (ea[36] = M),
          (ea[37] = ek),
          (ea[38] = ej),
          (ea[39] = eC),
          (ea[40] = em),
          (ea[41] = O))
        : (O = ea[41]),
        ea[42] !== t ||
        ea[43] !== l ||
        ea[44] !== er ||
        ea[45] !== en ||
        ea[46] !== ey ||
        ea[47] !== w ||
        ea[48] !== A ||
        ea[49] !== L ||
        ea[50] !== em
          ? ((U =
              null == L || em
                ? null
                : (0, a.jsx)("div", {
                    className: (0, n.A)("compact" === er && "pb-5.5", "default" === er && (en ? "pb-panel" : "pb-8")),
                    children: (0, a.jsx)(d.z, {
                      actions: t,
                      asset: l,
                      subtitle: w,
                      subtitleClassName: (0, n.A)("text-balance", A),
                      title: L,
                      variant: ey,
                    }),
                  })),
            (ea[42] = t),
            (ea[43] = l),
            (ea[44] = er),
            (ea[45] = en),
            (ea[46] = ey),
            (ea[47] = w),
            (ea[48] = A),
            (ea[49] = L),
            (ea[50] = em),
            (ea[51] = U))
          : (U = ea[51]),
        ea[52] !== M
          ? ((V = null == M ? null : (0, a.jsx)(c.J1, { className: "top-0 pt-panel pb-2", children: M })),
            (ea[52] = M),
            (ea[53] = V))
          : (V = ea[53]))
      let eM =
          en && !es
            ? "gap-[var(--settings-section-gap,var(--padding-panel))]"
            : "gap-[var(--settings-section-gap,--spacing(10))]",
        ew = null != M && "pt-5"
      ;(ea[54] !== eM || ea[55] !== ew
        ? ((z = (0, n.A)("flex flex-col", eM, ew)), (ea[54] = eM), (ea[55] = ew), (ea[56] = z))
        : (z = ea[56]),
        ea[57] !== f || ea[58] !== z
          ? ((B = (0, a.jsx)("div", { className: z, children: f })), (ea[57] = f), (ea[58] = z), (ea[59] = B))
          : (B = ea[59]),
        ea[60] !== er || ea[61] !== O || ea[62] !== U || ea[63] !== V || ea[64] !== B
          ? ((F = (0, a.jsxs)("div", { ref: eo, className: O, "data-density": er, children: [U, V, B] })),
            (ea[60] = er),
            (ea[61] = O),
            (ea[62] = U),
            (ea[63] = V),
            (ea[64] = B),
            (ea[65] = F))
          : (F = ea[65]))
      let eA = F
      if (en) {
        let e, t, l
        return (
          ea[66] !== x ? ((e = (0, n.A)("flex min-h-0 flex-col", x)), (ea[66] = x), (ea[67] = e)) : (e = ea[67]),
          ea[68] !== h || ea[69] !== ev || ea[70] !== E
            ? ((t =
                null != h || null != E
                  ? (0, a.jsx)("div", { className: "flex items-center pb-panel", children: ev })
                  : null),
              (ea[68] = h),
              (ea[69] = ev),
              (ea[70] = E),
              (ea[71] = t))
            : (t = ea[71]),
          ea[72] !== eA || ea[73] !== k || ea[74] !== j || ea[75] !== e || ea[76] !== t
            ? ((l = (0, a.jsxs)("div", { ref: k, className: e, ...j, children: [t, eA] })),
              (ea[72] = eA),
              (ea[73] = k),
              (ea[74] = j),
              (ea[75] = e),
              (ea[76] = t),
              (ea[77] = l))
            : (l = ea[77]),
          l
        )
      }
      ;(ea[78] !== x
        ? (($ = (0, n.A)(
            "flex h-full min-h-0 flex-col electron:overflow-hidden electron:bg-surface windows:rounded-tl-lg",
            x,
          )),
          (ea[78] = x),
          (ea[79] = $))
        : ($ = ea[79]),
        ea[80] !== L || ea[81] !== eh
          ? ((q = eh
              ? (0, a.jsx)(r.G.Header, {
                  divider: !1,
                  children: (0, a.jsx)(r.G.HeaderToolbar, {
                    children: (0, a.jsx)("h1", {
                      className: "min-w-0 truncate text-lg font-medium text-default select-none",
                      children: L,
                    }),
                  }),
                })
              : null),
            (ea[80] = L),
            (ea[81] = eh),
            (ea[82] = q))
          : (q = ea[82]),
        ea[83] !== h || ea[84] !== ev || ea[85] !== E || ea[86] !== em
          ? ((Q =
              em && null == h && null == E
                ? null
                : (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)("div", {
                      className: "flex items-center px-panel draggable electron:h-toolbar extension:h-toolbar-sm",
                      children: ev,
                    }),
                  })),
            (ea[83] = h),
            (ea[84] = ev),
            (ea[85] = E),
            (ea[86] = em),
            (ea[87] = Q))
          : (Q = ea[87]))
      let eS = ec || void 0,
        eP = eh ? eu : void 0,
        eI = eh || void 0
      ea[88] !== eh
        ? ((Y = eh ? (e) => ep(e.currentTarget.scrollTop > 0) : void 0), (ea[88] = eh), (ea[89] = Y))
        : (Y = ea[89])
      let eL = !em && "p-panel"
      return (
        ea[90] !== eL
          ? ((K = (0, n.A)("flex-1 scrollbar-stable overflow-y-auto", eL)), (ea[90] = eL), (ea[91] = K))
          : (K = ea[91]),
        ea[92] !== t ||
        ea[93] !== l ||
        ea[94] !== er ||
        ea[95] !== es ||
        ea[96] !== w ||
        ea[97] !== A ||
        ea[98] !== L ||
        ea[99] !== eh ||
        ea[100] !== em
          ? ((W =
              null == L || !em || eh
                ? null
                : (0, a.jsx)(u.g, {
                    className: es ? void 0 : "max-w-3xl",
                    showDivider: !1,
                    sticky: !1,
                    title: (0, a.jsxs)(a.Fragment, {
                      children: [
                        null == l ? null : (0, a.jsx)("div", { className: "flex", children: l }),
                        (0, a.jsx)("h1", {
                          className: (0, n.A)("text-default", "compact" === er ? "heading-lg" : "heading-xl"),
                          children: L,
                        }),
                        null == w
                          ? null
                          : (0, a.jsx)("div", {
                              className: (0, n.A)("text-base leading-6 text-balance text-secondary", A),
                              children: w,
                            }),
                      ],
                    }),
                    actions: null == t ? null : (0, a.jsx)(u.T, { search: null, actions: t }),
                  })),
            (ea[92] = t),
            (ea[93] = l),
            (ea[94] = er),
            (ea[95] = es),
            (ea[96] = w),
            (ea[97] = A),
            (ea[98] = L),
            (ea[99] = eh),
            (ea[100] = em),
            (ea[101] = W))
          : (W = ea[101]),
        ea[102] !== eA ||
        ea[103] !== eS ||
        ea[104] !== eP ||
        ea[105] !== eI ||
        ea[106] !== Y ||
        ea[107] !== K ||
        ea[108] !== W
          ? ((G = (0, a.jsxs)("div", {
              ref: ed,
              "data-contain-touch-overscroll": eS,
              "data-app-shell-page-scrolled": eP,
              "data-settings-mobile-header": eI,
              onScroll: Y,
              className: K,
              children: [W, eA],
            })),
            (ea[102] = eA),
            (ea[103] = eS),
            (ea[104] = eP),
            (ea[105] = eI),
            (ea[106] = Y),
            (ea[107] = K),
            (ea[108] = W),
            (ea[109] = G))
          : (G = ea[109]),
        ea[110] !== y
          ? ((Z =
              null != y &&
              (0, a.jsx)("div", {
                className:
                  "flex flex-wrap items-center justify-end gap-2 border-t border-primary-outline bg-surface px-panel py-3",
                children: y,
              })),
            (ea[110] = y),
            (ea[111] = Z))
          : (Z = ea[111]),
        ea[112] !== k ||
        ea[113] !== j ||
        ea[114] !== $ ||
        ea[115] !== q ||
        ea[116] !== Q ||
        ea[117] !== G ||
        ea[118] !== Z
          ? ((X = (0, a.jsxs)("div", { ref: k, className: $, ...j, children: [q, Q, G, Z] })),
            (ea[112] = k),
            (ea[113] = j),
            (ea[114] = $),
            (ea[115] = q),
            (ea[116] = Q),
            (ea[117] = G),
            (ea[118] = Z),
            (ea[119] = X))
          : (X = ea[119]),
        X
      )
    }
    function f(e) {
      let t,
        l,
        n = (0, s.c)(8),
        { children: i, navigationKey: r, slateLayout: o, targetId: d, targetText: c } = e,
        u = void 0 !== o && o,
        p = void 0 === c ? null : c
      return (
        n[0] !== r || n[1] !== u || n[2] !== d || n[3] !== p
          ? ((t =
              null != d || null != p || u ? { navigationKey: r, slateLayout: u, targetId: d, targetText: p } : null),
            (n[0] = r),
            (n[1] = u),
            (n[2] = d),
            (n[3] = p),
            (n[4] = t))
          : (t = n[4]),
        n[5] !== i || n[6] !== t
          ? ((l = (0, a.jsx)(m.S.Provider, { value: t, children: i })), (n[5] = i), (n[6] = t), (n[7] = l))
          : (l = n[7]),
        l
      )
    }
  },
  oFmV(e, t, l) {
    let a = (0, l("zd8w").createContext)(null)
    l.d(t, {}, { S: a })
  },
  pjIx(e, t, l) {
    let a = (0, l("Qgfj").YK)({
      localCustomInstructions: {
        id: "settings.personalization.agents.title",
        defaultMessage: "Codex instructions",
        description: "Heading for host-level Codex instructions in Personalization settings",
      },
      customInstructions: {
        id: "settings.personalization.instructions.accountTitle",
        defaultMessage: "Custom instructions",
        description: "Heading for account-level Codex instructions synced across desktop and web",
      },
      agentsMd: {
        id: "settings.personalization.agents.fileTitle",
        defaultMessage: "AGENTS.md",
        description:
          "Heading for the selected machine’s AGENTS.md instruction file editor; keep AGENTS.md untranslated",
      },
      loading: {
        id: "settings.personalization.loading",
        defaultMessage: "Loading personalization settings…",
        description: "Loading state shown while all Personalization settings are being fetched",
      },
      memory: {
        id: "settings.personalization.memory.title",
        defaultMessage: "Codex memory",
        description: "Heading for local Codex memory settings in Personalization",
      },
      enableMemories: {
        id: "settings.memory.enableMemoriesLabel.host",
        defaultMessage: "Enable Codex memories",
        description: "Label for enabling Codex memories for the selected host",
      },
      allowMemoryGenerationFromToolAssistedTasks: {
        id: "settings.memory.allowMemoryGenerationFromToolAssistedTasksLabel.host",
        defaultMessage: "Allow memories from tool-assisted chats",
        description: "Label for allowing Codex memory generation when MCP tools or web search are used",
      },
      resetMemories: {
        id: "settings.memory.resetMemoriesLabel.host",
        defaultMessage: "Delete Codex memories",
        description: "Label for deleting all Codex memories for the selected host",
      },
    })
    l.d(t, {}, { i: a })
  },
  o2qp(e, t, l) {
    l.d(t, { PluginsSettings: () => tX })
    var a = l("ABep"),
      s = l("QosV"),
      n = l("iRMi"),
      i = l("zTeN"),
      r = l("zd8w"),
      o = l("oyxz"),
      d = l("HZfM"),
      c = l("fzBE"),
      u = l("ygO2"),
      p = l("Bbed"),
      g = l("QSWi"),
      m = l("JZ8t"),
      h = l("kfGJ"),
      f = l("irkb"),
      x = l("DBCl"),
      b = l("Haiv"),
      v = l("Wf1j"),
      y = l("Xjxo"),
      k = l("IBgA"),
      j = l("oxjR"),
      C = l("HUHI"),
      M = l("yxN2"),
      w = l("usf5"),
      A = l("YWcr"),
      S = l("MX6A"),
      P = l("FrrB"),
      I = l("X6Vn"),
      L = l("okCa"),
      E = l("EShr"),
      N = l("SGsN"),
      _ = l("GKsW"),
      T = l("IIEq"),
      R = l("jWaO"),
      H = l("eP0O"),
      D = l("yrds"),
      O = l("rO8L"),
      U = l("ibLK"),
      V = l("Vyeu"),
      z = l("T1PX"),
      B = l("Q8aV"),
      F = l("YZuZ"),
      $ = l("oszP"),
      q = l("jEyg"),
      Q = l("tlx5"),
      Y = l("IVVU"),
      K = l("H7Ld"),
      W = l("dgqS"),
      G = l("YuLS"),
      Z = l("Ee6v"),
      X = l("dqiw"),
      J = l("YjEp"),
      ee = l("cLdu"),
      et = l("Buqh"),
      el = l("ueue"),
      ea = l("gBBC"),
      es = l("B81s"),
      en = l("OWtl"),
      ei = l("ndjw"),
      er = l("jxU8"),
      eo = l("ecE5"),
      ed = l("slpy"),
      ec = l("mjZ0"),
      eu = l("GxtJ"),
      ep = l("ECyk"),
      eg = l("KUdL"),
      em = l.n(eg),
      eh = l("nuXe"),
      ef = l.n(eh),
      ex = l("Dgwo"),
      eb = l("tl5a"),
      ev = l("V5rl"),
      ey = l("bqtn"),
      ek = l("Ot7V"),
      ej = l("HOLv"),
      eC = l("F0xz"),
      eM = l("TL6G"),
      ew = l("q2la"),
      eA = l("GaA7"),
      eS = l("BSnr"),
      eP = l("AWNZ"),
      eI = l("ZEx5")
    function eL() {
      let e,
        t,
        l,
        n,
        d,
        c,
        p,
        g = (0, s.c)(12),
        m = (0, i.gh)(en.u),
        [h, f] = (0, r.useState)(!1),
        x = eA.appServices?.mcpAppSandbox
      if (null == x) return null
      g[0] !== h || g[1] !== m
        ? ((e = async () => {
            h ||
              (f(!0),
              await x
                .clearData()
                .then(() => {
                  m.get(N.Id).success(
                    (0, a.jsx)(o.A, {
                      id: "settings.mcp.apps.clearData.success",
                      defaultMessage: "MCP app data cleared",
                      description: "Confirmation after clearing saved browser data for all MCP apps",
                    }),
                  )
                })
                .catch(() => {
                  m.get(N.Id).danger(
                    (0, a.jsx)(o.A, {
                      id: "settings.mcp.apps.clearData.error",
                      defaultMessage: "Unable to clear MCP app data",
                      description: "Error shown when clearing saved browser data for one or more MCP apps fails",
                    }),
                    { errorAnalytics: { toastId: "settings.mcp.apps.clearData.error" } },
                  )
                })
                .finally(() => {
                  f(!1)
                }))
          }),
          (g[0] = h),
          (g[1] = m),
          (g[2] = e))
        : (e = g[2])
      let b = e
      return (
        g[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(eS.X.Header, {
              title: (0, a.jsx)(o.A, {
                id: "settings.mcp.apps.title",
                defaultMessage: "MCP Apps",
                description: "Heading for settings for interactive apps provided by MCP servers",
              }),
            })),
            (g[3] = t))
          : (t = g[3]),
        g[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(o.A, {
              id: "settings.mcp.apps.data.label",
              defaultMessage: "App data",
              description: "Label for saved browser data belonging to MCP apps",
            })),
            (n = (0, a.jsx)(o.A, {
              id: "settings.mcp.apps.data.description",
              defaultMessage: "Clear site data and cache from all MCP apps",
              description: "Description of the action that deletes local browser data for every MCP app",
            })),
            (g[4] = l),
            (g[5] = n))
          : ((l = g[4]), (n = g[5])),
        g[6] !== b ? ((d = () => void b()), (g[6] = b), (g[7] = d)) : (d = g[7]),
        g[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = (0, a.jsx)(o.A, {
              id: "settings.mcp.apps.clearData",
              defaultMessage: "Clear all app data",
              description: "Button that clears saved browser data for all MCP apps",
            })),
            (g[8] = c))
          : (c = g[8]),
        g[9] !== h || g[10] !== d
          ? ((p = (0, a.jsxs)(eS.X, {
              children: [
                t,
                (0, a.jsx)(eS.X.Content, {
                  children: (0, a.jsx)(eI.t, {
                    children: (0, a.jsx)(eP.ic, {
                      label: l,
                      description: n,
                      control: (0, a.jsx)(u.$, {
                        color: "secondary",
                        loading: h,
                        onClick: d,
                        size: "toolbar",
                        children: c,
                      }),
                    }),
                  }),
                }),
              ],
            })),
            (g[9] = h),
            (g[10] = d),
            (g[11] = p))
          : (p = g[11]),
        p
      )
    }
    var eE = l("GGze"),
      eN = l("w1tT"),
      e_ = l("SZCv"),
      eT = l.n(e_),
      eR = l("aTcy"),
      eH = l("P5dP"),
      eD = l("aQvR"),
      eO = l("zOE4"),
      eU = l("UxN3"),
      eV = l("zLIa"),
      ez = l("ccCq"),
      eB = l("LdDb")
    function eF(e) {
      let t,
        l,
        n,
        i,
        o,
        d,
        c,
        p,
        g,
        m,
        h,
        f,
        x,
        b,
        y = (0, s.c)(56),
        k = e.inputType === eH.uY.String,
        j = e.inputType === eH.uY.Array,
        C = e.inputType === eH.uY.Record,
        M = C ? e.keyError : void 0,
        w = (0, r.useId)(),
        A = (0, v.A)()
      y[0] !== A
        ? ((t = A.formatMessage({
            id: "settings.editRow.headerPlaceholder",
            defaultMessage: "Key",
            description: "Placeholder for record key input",
          })),
          (y[0] = A),
          (y[1] = t))
        : (t = y[1])
      let S = t
      y[2] !== A
        ? ((l = A.formatMessage({
            id: "settings.editRow.valuePlaceholder",
            defaultMessage: "Value",
            description: "Placeholder for record value input",
          })),
          (y[2] = A),
          (y[3] = l))
        : (l = y[3])
      let P = l
      y[4] !== A
        ? ((n = A.formatMessage({
            id: "settings.editRow.removeEntry",
            defaultMessage: "Remove entry",
            description: "Label for removing an entry from a list",
          })),
          (y[4] = A),
          (y[5] = n))
        : (n = y[5])
      let I = n
      if (y[6] !== S || y[7] !== e.inputType || y[8] !== e.placeHolderValue || y[9] !== P) {
        if (((i = S), (o = P), e.inputType === eH.uY.Record)) {
          let [t] = e.placeHolderValue
          ;((i = t?.key ?? S), (o = t?.value ?? P))
        }
        ;((y[6] = S), (y[7] = e.inputType), (y[8] = e.placeHolderValue), (y[9] = P), (y[10] = i), (y[11] = o))
      } else ((i = y[10]), (o = y[11]))
      e: {
        let t
        if (!j) {
          let e
          ;(y[12] === Symbol.for("react.memo_cache_sentinel") ? ((e = []), (y[12] = e)) : (e = y[12]), (d = e))
          break e
        }
        if (e.value.length > 0) {
          d = e.value
          break e
        }
        ;(y[13] === Symbol.for("react.memo_cache_sentinel") ? ((t = [""]), (y[13] = t)) : (t = y[13]), (d = t))
      }
      let L = d
      t: {
        let t
        if (!C) {
          let e
          ;(y[14] === Symbol.for("react.memo_cache_sentinel") ? ((e = []), (y[14] = e)) : (e = y[14]), (c = e))
          break t
        }
        if (e.value.length > 0) {
          c = e.value
          break t
        }
        ;(y[15] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = [{ key: "", value: "" }]), (y[15] = t))
          : (t = y[15]),
          (c = t))
      }
      let E = c
      if (k) {
        let t, l, s, n
        y[16] !== e.title
          ? ((t = (0, a.jsx)("p", { className: "text-base font-medium text-default", children: e.title })),
            (y[16] = e.title),
            (y[17] = t))
          : (t = y[17])
        let i = k && "string" == typeof e.placeHolderValue ? e.placeHolderValue : void 0
        return (
          y[18] !== e
            ? ((l = (t) => {
                e.onEdit(t.target.value)
              }),
              (y[18] = e),
              (y[19] = l))
            : (l = y[19]),
          y[20] !== e.disabled || y[21] !== e.inputAriaLabel || y[22] !== e.value || y[23] !== i || y[24] !== l
            ? ((s = (0, a.jsx)(eV.pd, {
                "aria-label": e.inputAriaLabel,
                disabled: e.disabled,
                value: e.value,
                placeholder: i,
                onChange: l,
              })),
              (y[20] = e.disabled),
              (y[21] = e.inputAriaLabel),
              (y[22] = e.value),
              (y[23] = i),
              (y[24] = l),
              (y[25] = s))
            : (s = y[25]),
          y[26] !== t || y[27] !== s
            ? ((n = (0, a.jsxs)("div", {
                className: "flex flex-col gap-2 rounded-lg bg-primary-soft px-3 py-2",
                children: [t, s],
              })),
              (y[26] = t),
              (y[27] = s),
              (y[28] = n))
            : (n = y[28]),
          n
        )
      }
      ;(y[29] !== e.title
        ? ((p = (0, a.jsx)("p", { className: "text-base font-medium text-default", children: e.title })),
          (y[29] = e.title),
          (y[30] = p))
        : (p = y[30]),
        y[31] !== j ||
        y[32] !== M ||
        y[33] !== w ||
        y[34] !== L ||
        y[35] !== e ||
        y[36] !== E ||
        y[37] !== i ||
        y[38] !== o ||
        y[39] !== I
          ? ((g = j
              ? L.map((t, l) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className: "flex items-center gap-2",
                      children: [
                        (0, a.jsx)(eV.pd, {
                          "aria-label": e.inputAriaLabel,
                          disabled: e.disabled,
                          value: t,
                          placeholder:
                            j && e.placeHolderValue.length > 0
                              ? (e.placeHolderValue[l] ?? e.placeHolderValue[0] ?? "")
                              : "",
                          onChange: (t) => {
                            let a = [...L]
                            ;((a[l] = t.target.value), e.onEdit(a))
                          },
                        }),
                        (0, a.jsx)(u.$, {
                          color: "ghost",
                          size: "icon",
                          disabled: e.disabled || 0 === e.value.length,
                          "aria-label": I,
                          onClick: () => {
                            let t = e.value.filter((e, t) => t !== l)
                            e.onEdit(t)
                          },
                          children: (0, a.jsx)(eU.bF, {
                            "aria-hidden": !1,
                            asset16: eN.c,
                            legacyIcon: eB.A,
                            legacyClassName: "icon-2xs",
                          }),
                        }),
                      ],
                    },
                    `list-${l}`,
                  ),
                )
              : E.map((t, l) =>
                  (0, a.jsxs)(
                    "div",
                    {
                      className: "grid grid-cols-[1fr_1fr_auto] items-center gap-2",
                      children: [
                        (0, a.jsx)(eV.pd, {
                          "aria-label": e.inputAriaLabel,
                          "aria-invalid": M?.index === l || void 0,
                          "aria-describedby": M?.index === l ? w : void 0,
                          disabled: e.disabled,
                          placeholder: i,
                          value: t.key,
                          onChange: (t) => {
                            let a = [...E],
                              s = a[l]
                            ;((a[l] = { ...s, key: t.target.value }), e.onEdit(a))
                          },
                        }),
                        (0, a.jsx)(eV.pd, {
                          "aria-label": e.inputAriaLabel,
                          disabled: e.disabled,
                          placeholder: o,
                          value: t.value,
                          onChange: (t) => {
                            let a = [...E],
                              s = a[l]
                            ;((a[l] = { ...s, value: t.target.value }), e.onEdit(a))
                          },
                        }),
                        (0, a.jsx)(u.$, {
                          color: "ghost",
                          size: "icon",
                          disabled: e.disabled || 0 === e.value.length,
                          "aria-label": I,
                          onClick: () => {
                            let t = e.value.filter((e, t) => t !== l)
                            e.onEdit(t)
                          },
                          children: (0, a.jsx)(eU.bF, {
                            "aria-hidden": !1,
                            asset16: eN.c,
                            legacyIcon: eB.A,
                            legacyClassName: "icon-2xs",
                          }),
                        }),
                        M?.index === l
                          ? (0, a.jsx)("p", {
                              id: w,
                              role: "alert",
                              className: "col-span-full text-sm text-danger",
                              children: M.message,
                            })
                          : null,
                      ],
                    },
                    `record-${l}`,
                  ),
                )),
            (y[31] = j),
            (y[32] = M),
            (y[33] = w),
            (y[34] = L),
            (y[35] = e),
            (y[36] = E),
            (y[37] = i),
            (y[38] = o),
            (y[39] = I),
            (y[40] = g))
          : (g = y[40]),
        y[41] !== g
          ? ((m = (0, a.jsx)("div", { className: "flex flex-col gap-2", children: g })), (y[41] = g), (y[42] = m))
          : (m = y[42]),
        y[43] !== j || y[44] !== e || y[45] !== E
          ? ((h = () => {
              if (j) {
                let t = e.value,
                  l = t.length > 0 ? [...t, ""] : [""]
                e.onEdit(l)
                return
              }
              let t = [...E, { key: "", value: "" }]
              e.onEdit(t)
            }),
            (y[43] = j),
            (y[44] = e),
            (y[45] = E),
            (y[46] = h))
          : (h = y[46]),
        y[47] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)(eU.bF, {
              "aria-hidden": !1,
              legacyIcon: ez.A,
              asset16: ep.f,
              legacyClassName: "icon-2xs",
            })),
            (y[47] = f))
          : (f = y[47]))
      let N = e.addLabel ? e.addLabel : null
      return (
        y[48] !== e.disabled || y[49] !== N || y[50] !== h
          ? ((x = (0, a.jsxs)(u.$, {
              color: "secondary",
              radius: "small",
              size: "toolbar",
              className: "justify-center border border-dashed text-text-secondary/90",
              disabled: e.disabled,
              onClick: h,
              children: [f, N],
            })),
            (y[48] = e.disabled),
            (y[49] = N),
            (y[50] = h),
            (y[51] = x))
          : (x = y[51]),
        y[52] !== x || y[53] !== p || y[54] !== m
          ? ((b = (0, a.jsxs)("div", {
              className: "flex flex-col gap-3 rounded-lg bg-primary-soft px-3 py-2",
              children: [p, m, x],
            })),
            (y[52] = x),
            (y[53] = p),
            (y[54] = m),
            (y[55] = b))
          : (b = y[55]),
        b
      )
    }
    var e$ = l("SOLA")
    function eq(e) {
      var t, l, n
      let i,
        d,
        p,
        g,
        m,
        h,
        f,
        x,
        b,
        y,
        k,
        j,
        C,
        M,
        w,
        A,
        S,
        P,
        I,
        L,
        N,
        _,
        T,
        R,
        H = (0, s.c)(72),
        { config: D, initialKey: O, onSave: U, onCancel: V, onUninstall: z, embedded: B } = e,
        F = void 0 !== B && B
      H[0] !== D || H[1] !== O
        ? ((t = D),
          (l = O),
          (i = "command" in t ? "stdio" : "streamable_http"),
          (d = {
            base: {
              enabled: t.enabled ?? void 0,
              required: t.required,
              startup_timeout_sec: t.startup_timeout_sec ?? void 0,
              startup_timeout_ms: t.startup_timeout_ms ?? void 0,
              tool_timeout_sec: t.tool_timeout_sec ?? void 0,
              enabled_tools: t.enabled_tools ?? void 0,
              disabled_tools: t.disabled_tools ?? void 0,
            },
            label: l ?? t.name ?? "",
            transportType: i,
            stdio: {
              command: "command" in t ? t.command : "",
              args: "command" in t && t.args && t.args.length > 0 ? t.args : [],
              env: "command" in t && t.env ? eZ(t.env) : [],
              envVars: "command" in t && t.env_vars && t.env_vars.length > 0 ? t.env_vars : [],
              cwd: "command" in t && t.cwd ? t.cwd : "",
            },
            http: {
              url: "url" in t ? t.url : "",
              auth: "url" in t ? t.auth : void 0,
              oauth: "url" in t ? t.oauth : void 0,
              scopes: "url" in t ? t.scopes : void 0,
              oauthResource: "url" in t ? t.oauth_resource : void 0,
              bearerTokenEnvVar: "url" in t && t.bearer_token_env_var ? t.bearer_token_env_var : "",
              httpHeaders: "url" in t && t.http_headers ? eZ(t.http_headers) : [],
              envHttpHeaders: "url" in t && t.env_http_headers ? eZ(t.env_http_headers) : [],
            },
          }),
          (H[0] = D),
          (H[1] = O),
          (H[2] = d))
        : (d = H[2])
      let $ = d,
        [q, Q] = (0, r.useState)($),
        [Y, K] = (0, r.useState)(!1),
        [W, G] = (0, r.useState)(null),
        Z = (0, v.A)()
      H[3] !== q.label ? ((p = q.label.trim()), (H[3] = q.label), (H[4] = p)) : (p = H[4])
      let X = p,
        { config: J, duplicateKey: ee } = eG(q, null == O ? void 0 : $.http)
      H[5] !== q || H[6] !== $ ? ((g = eT()(eK(q), eK($))), (H[5] = q), (H[6] = $), (H[7] = g)) : (g = H[7])
      let et = !g,
        el = (0, r.useId)(),
        ea = (0, r.useContext)(c.X)
      ;((0, e$.iv)(el, et),
        H[8] !== q.http || H[9] !== q.stdio || H[10] !== q.transportType
          ? ((m =
              "streamable_http" === q.transportType
                ? 0 === q.http.url.trim().length
                : 0 === q.stdio.command.trim().length),
            (H[8] = q.http),
            (H[9] = q.stdio),
            (H[10] = q.transportType),
            (H[11] = m))
          : (m = H[11]))
      let es = m,
        en = X.length > 0 && !es && et && !Y && null == ee,
        ei = async () => {
          en &&
            (G(null),
            K(!0),
            await (async () => {
              try {
                let e = new Map(Object.entries(eG($).config)),
                  t = new Map(Object.entries(J)),
                  l = new Set(
                    [...new Set([...e.keys(), ...t.keys()])].filter((l) => !t.has(l) || !eT()(e.get(l), t.get(l))),
                  )
                ;(eT()($.stdio.env, q.stdio.env) || l.add("env"),
                  eT()($.http.httpHeaders, q.http.httpHeaders) || l.add("http_headers"),
                  eT()($.http.envHttpHeaders, q.http.envHttpHeaders) || l.add("env_http_headers"),
                  await U(J, q.label, [...l]))
              } catch (e) {
                G(
                  eY(
                    e,
                    Z.formatMessage({
                      id: "settings.mcp.detail.saveError",
                      defaultMessage: "Could not save MCP server",
                      description: "Error shown when saving an MCP server fails",
                    }),
                  ),
                )
              }
            })().finally(() => {
              K(!1)
            }))
        }
      H[12] !== D.name ? ((h = D.name && D.name.trim().length > 0), (H[12] = D.name), (H[13] = h)) : (h = H[13])
      let eo = h
      H[14] !== q.label || H[15] !== Z || H[16] !== z
        ? ((f = async () => {
            z &&
              (G(null),
              K(!0),
              await (async () => {
                try {
                  await z(q.label)
                } catch (e) {
                  G(
                    eY(
                      e,
                      Z.formatMessage({
                        id: "settings.mcp.detail.uninstallError",
                        defaultMessage: "Could not uninstall MCP server",
                        description: "Error shown when uninstalling an MCP server fails",
                      }),
                    ),
                  )
                }
              })().finally(() => {
                K(!1)
              }))
          }),
          (H[14] = q.label),
          (H[15] = Z),
          (H[16] = z),
          (H[17] = f))
        : (f = H[17])
      let ed = f
      if (H[18] !== D.name || H[19] !== eo) {
        ;((x = eo
          ? (0, a.jsx)(o.A, {
              id: "settings.mcp.detail.titleExisting",
              defaultMessage: "Update {name} MCP",
              description: "Title for the MCP server detail view when editing an existing server",
              values: {
                name: (n = D.name)
                  ? 0 === n.trim().length
                    ? n
                    : n === n.toLowerCase()
                      ? `${n[0]?.toUpperCase() ?? ""}${n.slice(1)}`
                      : n
                  : "",
              },
            })
          : (0, a.jsx)(o.A, {
              id: "settings.mcp.detail.titleNew",
              defaultMessage: "Connect to a custom MCP",
              description: "Title for the MCP server detail view when adding a new server",
            })),
          (H[18] = D.name),
          (H[19] = eo),
          (H[20] = x))
      } else x = H[20]
      let ec = x,
        eu =
          null == ee
            ? void 0
            : {
                index: ee.index,
                message: Z.formatMessage(
                  {
                    id: "settings.mcp.detail.duplicateKey",
                    defaultMessage: "Rename or remove the duplicate key “{key}”",
                    description:
                      "Error when two environment variable or HTTP header rows in MCP server settings have the same key. {key} is the conflicting name.",
                  },
                  { key: ee.key },
                ),
              },
        ep = (e) => (ee?.field === e ? eu : void 0),
        eg = er.P
      ;(H[21] !== V || H[22] !== ea ? ((b = () => ea(V)), (H[21] = V), (H[22] = ea), (H[23] = b)) : (b = H[23]),
        H[24] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, a.jsx)(ej.I, { "aria-hidden": !1, asset: eE.z })),
            (k = (0, a.jsx)(o.A, {
              id: "settings.mcp.detail.back",
              defaultMessage: "Back",
              description: "Button label to go back to MCP settings",
            })),
            (H[24] = y),
            (H[25] = k))
          : ((y = H[24]), (k = H[25])),
        H[26] !== b
          ? ((j = (0, a.jsxs)(u.$, { color: "ghost", size: "toolbar", onClick: b, children: [y, k] })),
            (H[26] = b),
            (H[27] = j))
          : (j = H[27]),
        H[28] !== Z || H[29] !== eo
          ? ((C = eo
              ? null
              : (0, a.jsxs)("a", {
                  className: "inline-flex items-center gap-1 text-sm text-secondary hover:text-default",
                  href: eR.bt,
                  target: "_blank",
                  rel: "noreferrer",
                  onClick: eQ,
                  "aria-label": Z.formatMessage({
                    id: "settings.mcp.detail.docs",
                    defaultMessage: "Open MCP documentation",
                    description: "Aria label for MCP docs link in detail header",
                  }),
                  children: [
                    (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.docs.link",
                      defaultMessage: "Docs",
                      description: "Tooltip link label for MCP docs on add page",
                    }),
                    (0, a.jsx)(eD.g, { href: eR.bt, className: "icon-xxs" }),
                  ],
                })),
            (H[28] = Z),
            (H[29] = eo),
            (H[30] = C))
          : (C = H[30]),
        H[31] !== q.label || H[32] !== ed || H[33] !== Y || H[34] !== z
          ? ((M =
              z && q.label.trim().length > 0
                ? (0, a.jsxs)(u.$, {
                    color: "danger",
                    size: "toolbar",
                    disabled: Y,
                    onClick: () => {
                      ed()
                    },
                    children: [
                      (0, a.jsx)(ej.I, { "aria-hidden": !1, asset: eN.c }),
                      (0, a.jsx)(o.A, {
                        id: "settings.mcp.detail.uninstall",
                        defaultMessage: "Uninstall",
                        description: "Button label to uninstall an MCP server",
                      }),
                    ],
                  })
                : null),
            (H[31] = q.label),
            (H[32] = ed),
            (H[33] = Y),
            (H[34] = z),
            (H[35] = M))
          : (M = H[35]),
        H[36] !== Y
          ? ((w = Y ? (0, a.jsx)(eO.LoadingPage, { overlay: !0 }) : null), (H[36] = Y), (H[37] = w))
          : (w = H[37]))
      let em = eS.X,
        eh = eS.X
      H[38] !== q.label || H[39] !== q.transportType || H[40] !== Z || H[41] !== eo
        ? ((A = eo
            ? (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, a.jsx)(o.A, {
                  id: "settings.mcp.detail.switchTransportNotice",
                  defaultMessage: "If you would like to switch MCP server type, please uninstall first.",
                  description: "Notice explaining how to change MCP transport type",
                }),
              })
            : (0, a.jsxs)(eI.t, {
                children: [
                  (0, a.jsx)(eF, {
                    title: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.name",
                      defaultMessage: "Name",
                      description: "Name for MCP server display name",
                    }),
                    value: q.label,
                    placeHolderValue: "MCP server name",
                    inputType: eH.uY.String,
                    onEdit: (e) => {
                      Q((t) => ({ ...t, label: e }))
                    },
                  }),
                  (0, a.jsx)(eP.ic, {
                    label: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.transport.label",
                      defaultMessage: "Type",
                      description: "Label for the MCP server transport type selector",
                    }),
                    control: (0, a.jsx)(E.T, {
                      ariaLabel: Z.formatMessage({
                        id: "settings.mcp.detail.transport.ariaLabel",
                        defaultMessage: "MCP server type",
                        description: "Accessible label for choosing the MCP server transport type",
                      }),
                      options: [
                        {
                          id: "stdio",
                          label: (0, a.jsx)(o.A, {
                            id: "settings.mcp.detail.transport.stdio",
                            defaultMessage: "STDIO",
                            description: "Label for stdio transport toggle",
                          }),
                        },
                        {
                          id: "streamable_http",
                          label: (0, a.jsx)(o.A, {
                            id: "settings.mcp.detail.transport.http",
                            defaultMessage: "Streamable HTTP",
                            description: "Label for HTTP transport toggle",
                          }),
                        },
                      ],
                      selectedId: q.transportType,
                      size: "toolbar",
                      onSelect: (e) => {
                        Q((t) => ({ ...t, transportType: e }))
                      },
                    }),
                  }),
                ],
              })),
          (H[38] = q.label),
          (H[39] = q.transportType),
          (H[40] = Z),
          (H[41] = eo),
          (H[42] = A))
        : (A = H[42])
      let ef = eI.t,
        ex =
          "stdio" === q.transportType
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(eF, {
                    title: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.command",
                      defaultMessage: "Command to launch",
                      description: "Label for MCP stdio command",
                    }),
                    value: q.stdio.command,
                    placeHolderValue: "openai-dev-mcp serve-sqlite",
                    inputType: eH.uY.String,
                    onEdit: (e) => {
                      Q((t) => ({ ...t, stdio: { ...t.stdio, command: e } }))
                    },
                  }),
                  (0, a.jsx)(eF, {
                    title: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.args",
                      defaultMessage: "Arguments",
                      description: "Label for MCP stdio arguments",
                    }),
                    value: q.stdio.args,
                    placeHolderValue: [],
                    inputType: eH.uY.Array,
                    addLabel: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.addArgument",
                      defaultMessage: "Add argument",
                      description: "Add button label for MCP stdio arguments",
                    }),
                    onEdit: (e) => {
                      Q((t) => ({ ...t, stdio: { ...t.stdio, args: e } }))
                    },
                  }),
                  (0, a.jsx)(eF, {
                    title: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.envVars",
                      defaultMessage: "Environment variables",
                      description: "Label for MCP stdio environment variables",
                    }),
                    value: q.stdio.env,
                    keyError: ep("env"),
                    placeHolderValue: [],
                    inputType: eH.uY.Record,
                    addLabel: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.addEnvVar",
                      defaultMessage: "Add environment variable",
                      description: "Add button label for MCP stdio environment variables",
                    }),
                    onEdit: (e) => {
                      Q((t) => ({ ...t, stdio: { ...t.stdio, env: e } }))
                    },
                  }),
                  (0, a.jsx)(eF, {
                    title: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.envVarPassthrough",
                      defaultMessage: "Environment variable passthrough",
                      description: "Label for MCP stdio env var passthrough",
                    }),
                    value: q.stdio.envVars,
                    placeHolderValue: [],
                    inputType: eH.uY.Array,
                    addLabel: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.addEnvVarPassthrough",
                      defaultMessage: "Add variable",
                      description: "Add button label for MCP stdio env var passthrough",
                    }),
                    onEdit: (e) => {
                      Q((t) => ({ ...t, stdio: { ...t.stdio, envVars: e } }))
                    },
                  }),
                  (0, a.jsx)(eF, {
                    title: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.cwd",
                      defaultMessage: "Working directory",
                      description: "Label for MCP stdio working directory",
                    }),
                    value: q.stdio.cwd,
                    placeHolderValue: "~/code",
                    inputType: eH.uY.String,
                    onEdit: (e) => {
                      Q((t) => ({ ...t, stdio: { ...t.stdio, cwd: e } }))
                    },
                  }),
                ],
              })
            : (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(eF, {
                    title: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.http.url",
                      defaultMessage: "URL",
                      description: "Label for MCP HTTP URL",
                    }),
                    value: q.http.url,
                    placeHolderValue: "https://mcp.example.com/mcp",
                    inputType: eH.uY.String,
                    onEdit: (e) => {
                      Q((t) => ({ ...t, http: { ...t.http, url: e } }))
                    },
                  }),
                  (0, a.jsx)(eF, {
                    title: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.http.bearerToken",
                      defaultMessage: "Bearer token env var",
                      description: "Label for MCP HTTP bearer token env var",
                    }),
                    value: q.http.bearerTokenEnvVar,
                    placeHolderValue: "MCP_BEARER_TOKEN",
                    inputType: eH.uY.String,
                    onEdit: (e) => {
                      Q((t) => ({ ...t, http: { ...t.http, bearerTokenEnvVar: e } }))
                    },
                  }),
                  (0, a.jsx)(eF, {
                    title: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.http.headers",
                      defaultMessage: "Headers",
                      description: "Label for MCP HTTP headers",
                    }),
                    value: q.http.httpHeaders,
                    keyError: ep("http_headers"),
                    placeHolderValue: [],
                    inputType: eH.uY.Record,
                    addLabel: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.http.addHeader",
                      defaultMessage: "Add header",
                      description: "Add button label for MCP HTTP headers",
                    }),
                    onEdit: (e) => {
                      Q((t) => ({ ...t, http: { ...t.http, httpHeaders: e } }))
                    },
                  }),
                  (0, a.jsx)(eF, {
                    title: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.http.envHeaders",
                      defaultMessage: "Headers from environment variables",
                      description: "Label for MCP HTTP env headers",
                    }),
                    value: q.http.envHttpHeaders,
                    keyError: ep("env_http_headers"),
                    placeHolderValue: [],
                    inputType: eH.uY.Record,
                    addLabel: (0, a.jsx)(o.A, {
                      id: "settings.mcp.detail.http.addEnvHeader",
                      defaultMessage: "Add variable",
                      description: "Add button label for MCP HTTP env headers",
                    }),
                    onEdit: (e) => {
                      Q((t) => ({ ...t, http: { ...t.http, envHttpHeaders: e } }))
                    },
                  }),
                ],
              })
      ;(H[43] !== ef || H[44] !== ex
        ? ((S = (0, a.jsx)(ef, { children: ex })), (H[43] = ef), (H[44] = ex), (H[45] = S))
        : (S = H[45]),
        H[46] !== W
          ? ((P =
              null != W
                ? (0, a.jsx)("p", {
                    role: "alert",
                    className: "rounded-md bg-background-danger-surface/20 px-3 py-2 text-sm text-danger",
                    children: W,
                  })
                : null),
            (H[46] = W),
            (H[47] = P))
          : (P = H[47]))
      let eb = !en
      return (
        H[48] === Symbol.for("react.memo_cache_sentinel")
          ? ((I = (0, a.jsx)(o.A, {
              id: "settings.mcp.detail.save",
              defaultMessage: "Save",
              description: "Save button label on MCP server detail view",
            })),
            (H[48] = I))
          : (I = H[48]),
        H[49] !== ei || H[50] !== eb
          ? ((L = (0, a.jsx)("div", {
              className: "flex justify-end",
              children: (0, a.jsx)(u.$, { color: "primary", size: "toolbar", disabled: eb, onClick: ei, children: I }),
            })),
            (H[49] = ei),
            (H[50] = eb),
            (H[51] = L))
          : (L = H[51]),
        H[52] !== eh.Content || H[53] !== A || H[54] !== S || H[55] !== P || H[56] !== L
          ? ((N = (0, a.jsxs)(eh.Content, { children: [A, S, P, L] })),
            (H[52] = eh.Content),
            (H[53] = A),
            (H[54] = S),
            (H[55] = P),
            (H[56] = L),
            (H[57] = N))
          : (N = H[57]),
        H[58] !== em || H[59] !== N
          ? ((_ = (0, a.jsx)(em, { children: N })), (H[58] = em), (H[59] = N), (H[60] = _))
          : (_ = H[60]),
        H[61] !== w || H[62] !== _
          ? ((T = (0, a.jsxs)("div", { className: "relative", children: [w, _] })),
            (H[61] = w),
            (H[62] = _),
            (H[63] = T))
          : (T = H[63]),
        H[64] !== eg || H[65] !== F || H[66] !== j || H[67] !== C || H[68] !== M || H[69] !== T || H[70] !== ec
          ? ((R = (0, a.jsx)(eg, {
              embedded: F,
              fullWidth: F,
              backSlot: j,
              title: ec,
              subtitle: C,
              action: M,
              children: T,
            })),
            (H[64] = eg),
            (H[65] = F),
            (H[66] = j),
            (H[67] = C),
            (H[68] = M),
            (H[69] = T),
            (H[70] = ec),
            (H[71] = R))
          : (R = H[71]),
        R
      )
    }
    function eQ(e) {
      ;(0, ek.PQ)({ event: e, href: eR.bt, initiator: "open_in_browser_bridge" })
    }
    function eY(e, t) {
      return e instanceof Error && e.message.trim().length > 0 ? e.message : t
    }
    function eK(e) {
      return { ...e, stdio: { ...e.stdio, envVars: eW(e.stdio.envVars) } }
    }
    function eW(e) {
      return e.map((e) => e.trim()).filter((e) => e.length > 0)
    }
    function eG(e, t) {
      let l = e.base
      if ("streamable_http" === e.transportType) {
        let a = eX(e.http.httpHeaders, "http_headers", t?.httpHeaders),
          s = eX(e.http.envHttpHeaders, "env_http_headers", t?.envHttpHeaders)
        return {
          config: {
            ...l,
            url: e.http.url,
            auth: e.http.auth,
            oauth: e.http.oauth,
            scopes: e.http.scopes,
            oauth_resource: e.http.oauthResource,
            bearer_token_env_var: e.http.bearerTokenEnvVar.trim().length > 0 ? e.http.bearerTokenEnvVar.trim() : void 0,
            http_headers: a.record,
            env_http_headers: s.record,
          },
          duplicateKey: a.duplicateKey ?? s.duplicateKey,
        }
      }
      let a = eX(e.stdio.env, "env"),
        s = eW(e.stdio.envVars),
        n = e.stdio.args
      return {
        config: {
          ...l,
          command: e.stdio.command,
          args: n.length > 0 ? n : void 0,
          env: a.record,
          env_vars: s.length > 0 ? s : void 0,
          cwd: e.stdio.cwd.length > 0 ? e.stdio.cwd : void 0,
        },
        duplicateKey: a.duplicateKey,
      }
    }
    function eZ(e) {
      let t = Object.entries(e)
      return 0 === t.length ? [{ key: "", value: "" }] : t.map(([e, t]) => ({ key: e, value: t }))
    }
    function eX(e, t, l) {
      let a,
        s = new Map(),
        n = new Set()
      return (
        e.forEach(({ key: e, value: l }, i) => {
          let r = "env" === t ? e : e.trim(),
            o = "env_http_headers" === t ? l.trim() : l
          if (0 === r.length || ("env_http_headers" === t && 0 === o.length)) return
          let d = "env" === t ? r : r.toLowerCase()
          ;(null == a && n.has(d) && (a = { field: t, index: i, key: r }), n.add(d), s.set(r, o))
        }),
        { record: s.size > 0 ? Object.fromEntries(s) : void 0, duplicateKey: eT()(e, l) ? void 0 : a }
      )
    }
    let eJ = (0, l("Qgfj").YK)({
      servers: {
        id: "settings.mcp.myServers",
        defaultMessage: "Servers",
        description: "Heading for the user's MCP servers list",
      },
    })
    var e0 = l("odCE"),
      e1 = l("QyE3"),
      e2 = l("WFY2")
    let e3 = { command: "", args: [], env_vars: [], enabled: !0 }
    function e6(e) {
      let t,
        l,
        n,
        d,
        c,
        p,
        g,
        m,
        h,
        b,
        y,
        k,
        j,
        C,
        M,
        w,
        A,
        S,
        P,
        I,
        L,
        E,
        _,
        T,
        R,
        H,
        D,
        O = (0, s.c)(60),
        { creation: U, cwd: V, hostId: z, searchQuery: B, useActiveWorkspaceRoot: F } = e,
        $ = (0, i.gh)(en.u),
        q = U?.isAdding ?? !1
      O[0] !== z || O[1] !== F
        ? ((t = { hostId: z, useActiveWorkspaceRoot: F }), (O[0] = z), (O[1] = F), (O[2] = t))
        : (t = O[2])
      let { data: Q, isPending: Y } = (0, es.oJ)(V, t),
        { data: K, isFetching: W, isPending: G } = (0, i._U)(es.lt, z)
      O[3] !== z ? ((l = { hostId: z }), (O[3] = z), (O[4] = l)) : (l = O[4])
      let Z = (0, es.E7)(l)
      O[5] !== z ? ((n = { hostId: z }), (O[5] = z), (O[6] = n)) : (n = O[6])
      let X = (0, es.DH)(n),
        J = (0, f.jE)(),
        ee = (0, v.A)(),
        et = (0, i.Ul)(eb.YT),
        el = (0, i._U)(eb.B0, z)
      O[7] === Symbol.for("react.memo_cache_sentinel") ? ((d = {}), (O[7] = d)) : (d = O[7])
      let [ea, ei] = (0, r.useState)(d)
      O[8] === Symbol.for("react.memo_cache_sentinel") ? ((c = []), (O[8] = c)) : (c = O[8])
      let [er, eo] = (0, r.useState)(c)
      O[9] === Symbol.for("react.memo_cache_sentinel") ? ((p = {}), (O[9] = p)) : (p = O[9])
      let [eu, ep] = (0, r.useState)(p),
        [eg, eh] = (0, r.useState)(null),
        ey = q ? null : (eg?.key ?? null),
        eC = (0, r.useRef)(null)
      ;(O[10] !== eg || O[11] !== q
        ? ((g = () => (
            (eC.current = null != eg || q ? Symbol() : null),
            () => {
              eC.current = null
            }
          )),
          (m = [eg, q]),
          (O[10] = eg),
          (O[11] = q),
          (O[12] = g),
          (O[13] = m))
        : ((g = O[12]), (m = O[13])),
        (0, r.useLayoutEffect)(g, m),
        O[14] !== el
          ? ((h = "0.0.0" === el || (null != el && (0, x.DE9)(el) && (0, x.rT6)(el, "0.148.0-alpha.9") >= 0)),
            (O[14] = el),
            (O[15] = h))
          : (h = O[15]))
      let ew = h,
        eA = Q?.servers ?? {}
      O[16] !== Q?.serverOrigins ? ((b = Q?.serverOrigins ?? {}), (O[16] = Q?.serverOrigins), (O[17] = b)) : (b = O[17])
      let eE = b,
        eN = Q?.configWriteTarget ?? null,
        e_ = Object.entries(eA),
        eT = e_.map(te),
        eR = e_.filter(e8),
        eH = (void 0 === B ? "" : B).trim().toLowerCase(),
        eD = em()(eR, e9, e7).filter((e) => {
          let [t, l] = e
          return 0 === eH.length || [t, l.name ?? t].some((e) => e.toLowerCase().includes(eH))
        }),
        eO = new Set(e_.flatMap(e5))
      O[18] !== z || O[19] !== er ? ((y = er.includes(z)), (O[18] = z), (O[19] = er), (O[20] = y)) : (y = O[20])
      let eU = y,
        eV = eU ? (eu[z] ?? []) : [],
        ez = null == Q ? [] : (K?.data ?? []),
        eB = em()(
          ez.filter(
            (e) =>
              !(0, x.I1T)(e.name) &&
              !eO.has(e.name) &&
              !eV.includes(e.name) &&
              (0 === eH.length || e.name.toLowerCase().includes(eH)),
          ),
          e4,
        ),
        eF = eR.length > 0,
        e$ = eB.length > 0,
        eQ = eH.length > 0 && 0 === eD.length && 0 === eB.length,
        eY = null == U && !eQ && (eF || e$)
      O[21] !== ee
        ? ((k = ee.formatMessage({
            id: "settings.mcp.restartApp",
            defaultMessage: "Restart",
            description: "Button label to restart the codex electron app after MCP settings change",
          })),
          (O[21] = ee),
          (O[22] = k))
        : (k = O[22])
      let eK = k,
        eW = {}
      ;(null != K &&
        (K.data.forEach((e) => {
          eW[e.name] = e.authStatus
        }),
        e_.forEach((e) => {
          let [t, l] = e,
            a = eW[t] ?? (null == l.name ? void 0 : eW[l.name])
          null != a && (eW[t] = a)
        })),
        O[23] !== z
          ? ((j = () => {
              eo((e) => (e.includes(z) ? e : [...e, z]))
            }),
            (O[23] = z),
            (O[24] = j))
          : (j = O[24]))
      let eG = j,
        eZ = () => {
          ;((eC.current = null), eh(null), U?.onClose())
        }
      O[25] !== eN || O[26] !== ee
        ? ((C = () => {
            if (null != eN) return eN.filePath
            throw Error(
              ee.formatMessage({
                id: "settings.mcp.noWritableConfig",
                defaultMessage: "MCP server settings are unavailable",
                description: "Error shown when MCP settings cannot find a writable config.toml",
              }),
            )
          }),
          (O[25] = eN),
          (O[26] = ee),
          (O[27] = C))
        : (C = O[27])
      let eX = C
      O[28] !== eG || O[29] !== X
        ? ((M = async (e, t) => {
            try {
              ;(await X.mutateAsync({ key: e, enabled: t }), eG())
            } catch (e) {}
          }),
          (O[28] = eG),
          (O[29] = X),
          (O[30] = M))
        : (M = O[30])
      let e1 = M,
        e6 = async (e, t) => {
          if (!W) {
            let t = eW[e]
            if (void 0 !== t && "notLoggedIn" !== t) return
          }
          let l = ea[e]
          if (l)
            return void (0, ek.E0)({ href: l, initiator: "open_in_browser_bridge", openTarget: "external-browser" })
          ei((t) => ({ ...t, [e]: null }))
          let s = (t) => {
            ;(e2.v.error("Failed to start login for MCP server", { safe: { serverName: e }, sensitive: { error: t } }),
              ei((t) => {
                let l = { ...t }
                return (delete l[e], l)
              }),
              $.get(N.Id).danger((0, a.jsx)(ev.f, { serverName: e }), {
                errorAnalytics: { toastId: "mcpServerManager.reportAuthenticationError" },
                id: `mcp-authentication-start-error:${JSON.stringify([z, e])}`,
              }))
          }
          try {
            let { authorizationUrl: l } = await (0, ex.V)($, z).sendRequest("mcpServer/oauth/login", {
              name: e,
              ...(ew && "auto" !== t ? { clientRegistration: t } : {}),
            })
            if (0 === l.trim().length) return void s(Error("MCP OAuth login returned an empty authorization URL"))
            if (
              (ei((t) => ({ ...t, [e]: l })),
              !(0, ek.E0)({ href: l, initiator: "open_in_browser_bridge", openTarget: "external-browser" }))
            )
              return void s(Error("MCP OAuth login returned an invalid authorization URL"))
          } catch (e) {
            s(e)
          }
        }
      O[31] !== eG || O[32] !== J
        ? ((w = (e, t) => {
            ;(ei((t) => {
              let l = { ...t }
              return (delete l[e], l)
            }),
              t && (eG(), J.invalidateQueries({ queryKey: es.ey })))
          }),
          (O[31] = eG),
          (O[32] = J),
          (O[33] = w))
        : (w = O[33])
      let ts = (0, r.useEffectEvent)(w),
        tn = (0, r.useRef)(!0)
      ;(O[34] !== ts || O[35] !== z || O[36] !== et
        ? ((A = () => {
            if (tn.current) {
              tn.current = !1
              return
            }
            et?.hostId === z && ts(et.name, et.success)
          }),
          (O[34] = ts),
          (O[35] = z),
          (O[36] = et),
          (O[37] = A))
        : (A = O[37]),
        O[38] !== z || O[39] !== et ? ((S = [et, z]), (O[38] = z), (O[39] = et), (O[40] = S)) : (S = O[40]),
        (0, r.useEffect)(A, S),
        O[41] !== J
          ? ((P = (e) => {
              ;(eo((t) => t.filter((t) => t !== e.hostId)),
                ep((t) => {
                  let l = { ...t }
                  return (delete l[e.hostId], l)
                }),
                J.invalidateQueries({ queryKey: [...es.ey, e.hostId] }))
            }),
            (I = [J]),
            (O[41] = J),
            (O[42] = P),
            (O[43] = I))
          : ((P = O[42]), (I = O[43])),
        (0, eM.JX)("codex-app-server-initialized", P, I))
      let ti = q ? e3 : eg?.config
      if (ti)
        return (0, a.jsx)(
          eq,
          {
            embedded: !0,
            config: ti,
            initialKey: ey,
            onCancel: eZ,
            onSave: async (e, t, l) => {
              let a = eC.current,
                s = ey ?? tt(t, eT)
              try {
                let t = await Z.mutateAsync({
                  filePath: eX(),
                  key: s,
                  value: e,
                  previousValue: null == ey ? void 0 : eg?.config,
                  changedFields: l,
                })
                ;(null != t && eG(), null != a && eC.current === a && eZ())
              } catch (e) {
                throw (e2.v.error("Failed to save MCP server", { safe: { targetKey: s }, sensitive: { error: e } }), e)
              }
            },
            onUninstall: ey
              ? async (e) => {
                  let t = eC.current,
                    l = ey ?? tt(e, eT)
                  try {
                    ;(await Z.mutateAsync({ filePath: eX(), key: l, value: null }),
                      ep((t) => ({ ...t, [z]: ef()([...(t[z] ?? []), l, e, eA[l]?.name ?? l]) })),
                      eG(),
                      null != t && eC.current === t && eZ())
                  } catch (e) {
                    throw (
                      e2.v.error("Failed to uninstall MCP server", { safe: { targetKey: l }, sensitive: { error: e } }),
                      e
                    )
                  }
                }
              : void 0,
          },
          ey ?? void 0,
        )
      O[44] === Symbol.for("react.memo_cache_sentinel")
        ? ((L = () => {
            eh({ key: null, config: e3 })
          }),
          (O[44] = L))
        : (L = O[44])
      let tr = L
      ;(O[45] === Symbol.for("react.memo_cache_sentinel")
        ? ((E = (0, a.jsx)(o.A, { ...eJ.servers })), (O[45] = E))
        : (E = O[45]),
        O[46] !== eU || O[47] !== z || O[48] !== eK || O[49] !== eY
          ? ((_ =
              (eU || eY) &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  eU
                    ? (0, a.jsx)(ed.m, {
                        content: eK,
                        children: (0, a.jsx)(u.$, {
                          "aria-label": eK,
                          color: "ghost",
                          size: "icon",
                          onClick: () => {
                            eM.O1.dispatchMessage("codex-app-server-restart", { hostId: z, intent: "restart" })
                          },
                          children: (0, a.jsx)(ej.I, { "aria-hidden": !1, asset: ec.S }),
                        }),
                      })
                    : null,
                  eY ? (0, a.jsx)(ta, { onClick: tr }) : null,
                ],
              })),
            (O[46] = eU),
            (O[47] = z),
            (O[48] = eK),
            (O[49] = eY),
            (O[50] = _))
          : (_ = O[50]),
        O[51] !== _ ? ((T = (0, a.jsx)(eS.X.Header, { title: E, actions: _ })), (O[51] = _), (O[52] = T)) : (T = O[52]))
      let to =
        Y || (G && 0 === eD.length)
          ? (0, a.jsx)(eS.X.Content, { children: (0, a.jsx)(e0.j, {}) })
          : eQ
            ? (0, a.jsx)(eS.X.Content, {
                children: (0, a.jsx)(eI.t, {
                  children: (0, a.jsx)(eP.ic, {
                    label: (0, a.jsx)(o.A, {
                      id: "skills.appsPage.empty.mcps",
                      defaultMessage: "No MCP servers found",
                      description: "Empty state title when there are no MCP servers on the manage MCPs tab",
                    }),
                    control: null,
                  }),
                }),
              })
            : !(eD.length > 0) && (eF || e$)
              ? null
              : (0, a.jsx)(eS.X.Content, {
                  children: (0, a.jsx)(eI.t, {
                    children:
                      eD.length > 0
                        ? eD.map((e) => {
                            let [t, l] = e
                            return (0, a.jsx)(
                              tl,
                              {
                                name: l.name ?? t,
                                statusLoading: W,
                                enabled: !1 !== l.enabled,
                                authStatus: eW[t],
                                authenticationInProgress: Object.hasOwn(ea, t),
                                authenticationPending: Object.hasOwn(ea, t) && null == ea[t],
                                onAuthenticateClicked: (e) => e6(t, e),
                                supportsOauthClientRegistration: ew,
                                onEnableClicked: (e) => e1(t, e),
                                onSettingsClicked: () => {
                                  eh({ key: t, config: l })
                                },
                                isReadOnly: eE[t]?.name.type === "project",
                              },
                              t,
                            )
                          })
                        : (0, a.jsx)(eP.ic, {
                            label: (0, a.jsx)(o.A, {
                              id: "settings.mcp.empty",
                              defaultMessage: "No MCP servers connected",
                              description: "Empty state for MCP servers list",
                            }),
                            control: null == U ? (0, a.jsx)(ta, { onClick: tr }) : null,
                          }),
                  }),
                })
      O[53] !== T || O[54] !== to
        ? ((R = (0, a.jsxs)(eS.X, { children: [T, to] })), (O[53] = T), (O[54] = to), (O[55] = R))
        : (R = O[55])
      let td =
        !eQ && e$
          ? (0, a.jsxs)(eS.X, {
              children: [
                (0, a.jsx)(eS.X.Header, {
                  title: (0, a.jsx)(o.A, {
                    id: "settings.mcp.fromPlugins",
                    defaultMessage: "From plugins",
                    description: "Heading for MCP servers provided by installed plugins",
                  }),
                }),
                (0, a.jsx)(eS.X.Content, {
                  children: (0, a.jsx)(eI.t, {
                    children: eB.map((e) =>
                      (0, a.jsx)(
                        tl,
                        {
                          name: e.name,
                          statusLoading: W,
                          authStatus: e.authStatus,
                          authenticationInProgress: Object.hasOwn(ea, e.name),
                          authenticationPending: Object.hasOwn(ea, e.name) && null == ea[e.name],
                          onAuthenticateClicked: (t) => e6(e.name, t),
                          supportsOauthClientRegistration: ew,
                        },
                        e.name,
                      ),
                    ),
                  }),
                }),
              ],
            })
          : null
      return (
        O[56] === Symbol.for("react.memo_cache_sentinel") ? ((H = (0, a.jsx)(eL, {})), (O[56] = H)) : (H = O[56]),
        O[57] !== R || O[58] !== td
          ? ((D = (0, a.jsxs)("div", { className: "flex flex-col gap-[var(--padding-panel)]", children: [R, td, H] })),
            (O[57] = R),
            (O[58] = td),
            (O[59] = D))
          : (D = O[59]),
        D
      )
    }
    function e4(e) {
      return e.name
    }
    function e5(e) {
      let [t, l] = e
      return [t, l.name ?? t]
    }
    function e7(e) {
      let [t] = e
      return t
    }
    function e9(e) {
      let [t, l] = e
      return l.name?.trim() || t
    }
    function e8(e) {
      let [t] = e
      return !(0, x.I1T)(t)
    }
    function te(e) {
      let [t] = e
      return t
    }
    function tt(e, t) {
      let l = e
          .trim()
          .replace(/\s+/gu, "_")
          .replace(/[^a-zA-Z0-9-_]+/gu, "-")
          .replace(/-+/gu, "-"),
        a = l.length > 0 ? l.toLowerCase() : "custom-server"
      if (!t.includes(a)) return a
      let s = 2,
        n = `${a}-${s}`
      for (; t.includes(n);) ((s += 1), (n = `${a}-${s}`))
      return n
    }
    function tl(e) {
      let t,
        l,
        n,
        i,
        d = (0, s.c)(21),
        {
          name: c,
          statusLoading: p,
          onAuthenticateClicked: g,
          authStatus: m,
          authenticationInProgress: h,
          authenticationPending: f,
          onEnableClicked: x,
          enabled: b,
          onSettingsClicked: y,
          isReadOnly: k,
          supportsOauthClientRegistration: j,
        } = e,
        C = (0, v.A)(),
        [M, w] = (0, r.useState)("auto"),
        A = !p && void 0 !== g && "notLoggedIn" === m,
        S = void 0 !== x || void 0 !== y || A
      d[0] !== C
        ? ((t = C.formatMessage({
            id: "settings.mcp.server.settings",
            defaultMessage: "Settings",
            description: "Button label to view MCP server settings",
          })),
          (d[0] = C),
          (d[1] = t))
        : (t = d[1])
      let P = t
      return (
        d[2] !== c
          ? ((l = (0, a.jsx)("span", {
              className: "flex min-w-0 flex-col gap-0.5 text-sm",
              children: (0, a.jsx)("span", {
                className: "flex flex-wrap items-end gap-1",
                children: (0, a.jsx)("span", { className: "font-medium text-default", children: c }),
              }),
            })),
            (d[2] = c),
            (d[3] = l))
          : (l = d[3]),
        d[4] !== h ||
        d[5] !== f ||
        d[6] !== M ||
        d[7] !== b ||
        d[8] !== C ||
        d[9] !== k ||
        d[10] !== g ||
        d[11] !== x ||
        d[12] !== y ||
        d[13] !== P ||
        d[14] !== S ||
        d[15] !== A ||
        d[16] !== j
          ? ((n = S
              ? (0, a.jsxs)(ew.t, {
                  className: "max-sm:w-full max-sm:flex-wrap max-sm:justify-end",
                  children: [
                    A && j
                      ? (0, a.jsx)(ey.Ab, {
                          align: "end",
                          disabled: h,
                          triggerButton: (0, a.jsxs)(e1.vg, {
                            disabled: h,
                            "aria-label": C.formatMessage(
                              {
                                id: "settings.mcp.server.clientRegistration.label",
                                defaultMessage:
                                  "OAuth client registration: {strategy, select, auto {Automatic} cimd {CIMD} dcr {DCR} other {Automatic}}",
                                description:
                                  "Accessible label for the registration-strategy dropdown next to Authenticate in MCP settings, including the currently selected strategy. Placeholder {strategy} is auto for Automatic, cimd for Client ID metadata document, or dcr for Dynamic client registration. The choice applies only to the current MCP server login.",
                              },
                              { strategy: M },
                            ),
                            children: [
                              "auto" === M
                                ? (0, a.jsx)(o.A, {
                                    id: "settings.mcp.server.clientRegistration.autoShort",
                                    defaultMessage: "Auto",
                                    description:
                                      "Short selected-value label in the MCP settings registration-strategy dropdown. This automatically chooses how to register an OAuth client for the current login. Other selected values are CIMD and DCR.",
                                  })
                                : null,
                              "cimd" === M
                                ? (0, a.jsx)(o.A, {
                                    id: "settings.mcp.server.clientRegistration.cimdShort",
                                    defaultMessage: "CIMD",
                                    description:
                                      "Short selected-value label in the MCP settings registration-strategy dropdown. CIMD means client ID metadata document and applies only to the current OAuth login. Other selected values are Auto and DCR.",
                                  })
                                : null,
                              "dcr" === M
                                ? (0, a.jsx)(o.A, {
                                    id: "settings.mcp.server.clientRegistration.dcrShort",
                                    defaultMessage: "DCR",
                                    description:
                                      "Short selected-value label in the MCP settings registration-strategy dropdown. DCR means dynamic client registration and applies only to the current OAuth login. Other selected values are Auto and CIMD.",
                                  })
                                : null,
                            ],
                          }),
                          children: (0, a.jsxs)(ey.ms.RadioGroup, {
                            value: M,
                            children: [
                              (0, a.jsx)(ey.ms.RadioItem, {
                                value: "auto",
                                onSelect: () => w("auto"),
                                children: (0, a.jsx)(o.A, {
                                  id: "settings.mcp.server.clientRegistration.auto",
                                  defaultMessage: "Automatic",
                                  description:
                                    "Option in the MCP settings registration-strategy dropdown. Selecting it automatically chooses how to register an OAuth client for the current login. Other options are Client ID metadata document (CIMD) and Dynamic client registration (DCR).",
                                }),
                              }),
                              (0, a.jsx)(ey.ms.RadioItem, {
                                value: "cimd",
                                onSelect: () => w("cimd"),
                                children: (0, a.jsx)(o.A, {
                                  id: "settings.mcp.server.clientRegistration.cimd",
                                  defaultMessage: "Client ID metadata document (CIMD)",
                                  description:
                                    "Option in the MCP settings registration-strategy dropdown. Selecting it uses a client ID metadata document for the current OAuth login. Other options are Automatic and Dynamic client registration (DCR).",
                                }),
                              }),
                              (0, a.jsx)(ey.ms.RadioItem, {
                                value: "dcr",
                                onSelect: () => w("dcr"),
                                children: (0, a.jsx)(o.A, {
                                  id: "settings.mcp.server.clientRegistration.dcr",
                                  defaultMessage: "Dynamic client registration (DCR)",
                                  description:
                                    "Option in the MCP settings registration-strategy dropdown. Selecting it uses dynamic client registration for the current OAuth login. Other options are Automatic and Client ID metadata document (CIMD).",
                                }),
                              }),
                            ],
                          }),
                        })
                      : null,
                    A
                      ? (0, a.jsx)(u.$, {
                          color: "outline",
                          disabled: f,
                          size: "toolbar",
                          onClick: () => {
                            g(M)
                          },
                          children: f
                            ? (0, a.jsx)(o.A, {
                                id: "settings.mcp.server.authenticationStarting",
                                defaultMessage: "Starting…",
                                description: "Button label while MCP server authentication is starting",
                              })
                            : (0, a.jsx)(o.A, {
                                id: "settings.mcp.server.login",
                                defaultMessage: "Authenticate",
                                description: "Button label to authenticate with an MCP server",
                              }),
                        })
                      : null,
                    y
                      ? (0, a.jsx)(ed.m, {
                          content: P,
                          children: (0, a.jsx)(u.$, {
                            color: "ghost",
                            size: "toolbar",
                            uniform: !0,
                            disabled: !0 === k,
                            onClick: y,
                            "aria-label": P,
                            children: (0, a.jsx)(ej.I, { "aria-hidden": !1, asset: eu.T }),
                          }),
                        })
                      : null,
                    x
                      ? (0, a.jsx)(eC.l, {
                          disabled: !0 === k,
                          checked: !0 === b,
                          onChange: (e) => {
                            x(e)
                          },
                          ariaLabel: C.formatMessage({
                            id: "settings.mcp.server.enable",
                            defaultMessage: "Enable",
                            description: "Toggle to enable an MCP server",
                          }),
                        })
                      : null,
                  ],
                })
              : null),
            (d[4] = h),
            (d[5] = f),
            (d[6] = M),
            (d[7] = b),
            (d[8] = C),
            (d[9] = k),
            (d[10] = g),
            (d[11] = x),
            (d[12] = y),
            (d[13] = P),
            (d[14] = S),
            (d[15] = A),
            (d[16] = j),
            (d[17] = n))
          : (n = d[17]),
        d[18] !== l || d[19] !== n
          ? ((i = (0, a.jsx)(eP.ic, { className: "max-sm:flex-col max-sm:items-stretch", label: l, control: n })),
            (d[18] = l),
            (d[19] = n),
            (d[20] = i))
          : (i = d[20]),
        i
      )
    }
    function ta(e) {
      let t,
        l,
        n,
        i = (0, s.c)(4),
        { onClick: r } = e
      return (
        i[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(ej.I, { "aria-hidden": !1, asset: ep.f })),
            (l = (0, a.jsx)(o.A, {
              id: "settings.mcp.addServer",
              defaultMessage: "Add server",
              description: "Button to add a new MCP server",
            })),
            (i[0] = t),
            (i[1] = l))
          : ((t = i[0]), (l = i[1])),
        i[2] !== r
          ? ((n = (0, a.jsxs)(u.$, { color: "secondary", size: "toolbar", onClick: r, children: [t, l] })),
            (i[2] = r),
            (i[3] = n))
          : (n = i[3]),
        n
      )
    }
    var ts = l("hZax"),
      tn = l("aepO"),
      ti = l("a0aG"),
      tr = l("Yewb"),
      to = l("ugfi"),
      td = l("SlNh"),
      tc = l("UBJK"),
      tu = l("zKCW"),
      tp = l("bb3f")
    function tg(e) {
      let t,
        l,
        n,
        i,
        r = (0, s.c)(8),
        { errorMessage: d, isRetrying: c, onRetry: u } = e
      return (
        r[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(o.A, {
              id: "skills.appsPage.loadError.title",
              defaultMessage: "Unable to load apps",
              description: "Title shown when the apps list cannot be loaded",
            })),
            (r[0] = t))
          : (t = r[0]),
        r[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, a.jsx)(o.A, {
              id: "skills.appsPage.loadError.retry",
              defaultMessage: "Retry",
              description: "Retry button label for the apps list error state",
            })),
            (r[1] = l))
          : (l = r[1]),
        r[2] !== u
          ? ((n = () => {
              u()
            }),
            (r[2] = u),
            (r[3] = n))
          : (n = r[3]),
        r[4] !== d || r[5] !== c || r[6] !== n
          ? ((i = (0, a.jsx)(tu.l, {
              title: t,
              content: d,
              type: "error",
              layout: "vertical",
              primaryCtaText: l,
              isPrimaryCtaDisabled: c,
              onPrimaryCtaClick: n,
            })),
            (r[4] = d),
            (r[5] = c),
            (r[6] = n),
            (r[7] = i))
          : (i = r[7]),
        i
      )
    }
    function tm(e) {
      let t,
        l,
        n,
        i,
        r,
        d = (0, s.c)(11),
        { errorMessage: c, isLoading: p, isRetrying: g, onRetry: m } = e
      if (p) {
        let e
        return (
          d[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, a.jsx)(e0.j, {
                  children: (0, a.jsx)(o.A, {
                    id: "skills.appsPage.loading",
                    defaultMessage: "Loading apps…",
                    description: "Loading label on the Apps tab of the Skills & Apps page",
                  }),
                }),
              })),
              (d[0] = e))
            : (e = d[0]),
          e
        )
      }
      return (
        d[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((t = (0, a.jsx)(o.A, {
              id: "skills.appsPage.loadError.title",
              defaultMessage: "Unable to load apps",
              description: "Title shown when the apps list cannot be loaded",
            })),
            (d[1] = t))
          : (t = d[1]),
        d[2] !== m
          ? ((l = () => {
              m()
            }),
            (d[2] = m),
            (d[3] = l))
          : (l = d[3]),
        d[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((n = (0, a.jsx)(o.A, {
              id: "skills.appsPage.loadError.retry",
              defaultMessage: "Retry",
              description: "Retry button label for the apps list error state",
            })),
            (d[4] = n))
          : (n = d[4]),
        d[5] !== g || d[6] !== l
          ? ((i = (0, a.jsx)(u.$, { color: "outline", disabled: g, onClick: l, children: n })),
            (d[5] = g),
            (d[6] = l),
            (d[7] = i))
          : (i = d[7]),
        d[8] !== c || d[9] !== i
          ? ((r = (0, a.jsx)("div", {
              className: "flex min-h-0 flex-1 items-center justify-center py-8",
              children: (0, a.jsx)(P.A, { title: t, description: c, actions: i }),
            })),
            (d[8] = c),
            (d[9] = i),
            (d[10] = r))
          : (r = d[10]),
        r
      )
    }
    function th(e) {
      let t,
        l,
        n = (0, s.c)(26),
        {
          apps: i,
          effectiveConfig: r,
          emptyStateTitle: o,
          installedStateAction: d,
          installActionLabel: c,
          isConfigPending: u,
          useCompactEmptyState: p,
          isAppConnectPending: g,
          updatingAppId: m,
          onInstallApp: h,
          onOpenAppTools: f,
          onSetAppEnabled: x,
        } = e,
        b = void 0 === d ? "check" : d,
        v = void 0 !== u && u,
        k = void 0 !== p && p
      if (0 === i.length) {
        let e
        return (
          n[0] !== o || n[1] !== k
            ? ((e = (0, a.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: k
                  ? (0, a.jsx)("div", { className: "text-sm text-secondary", children: o })
                  : (0, a.jsx)(P.A, { title: o }),
              })),
              (n[0] = o),
              (n[1] = k),
              (n[2] = e))
            : (e = n[2]),
          e
        )
      }
      if (
        n[3] !== i ||
        n[4] !== r ||
        n[5] !== c ||
        n[6] !== b ||
        n[7] !== g ||
        n[8] !== v ||
        n[9] !== h ||
        n[10] !== f ||
        n[11] !== x ||
        n[12] !== m
      ) {
        let e
        ;(n[14] !== r ||
        n[15] !== c ||
        n[16] !== b ||
        n[17] !== g ||
        n[18] !== v ||
        n[19] !== h ||
        n[20] !== f ||
        n[21] !== x ||
        n[22] !== m
          ? ((e = (e) =>
              (0, a.jsx)(
                tp.S,
                {
                  app: e,
                  presentation: "settings",
                  appRestriction: (0, y.e)(e.id, r),
                  installedStateAction: b,
                  installActionLabel: c,
                  isConfigPending: v,
                  isConnectingApp: g(e.id),
                  updatingAppId: m,
                  onInstallApp: h,
                  onOpenAppTools: f,
                  onSetAppEnabled: x,
                },
                e.id,
              )),
            (n[14] = r),
            (n[15] = c),
            (n[16] = b),
            (n[17] = g),
            (n[18] = v),
            (n[19] = h),
            (n[20] = f),
            (n[21] = x),
            (n[22] = m),
            (n[23] = e))
          : (e = n[23]),
          (t = i.map(e)),
          (n[3] = i),
          (n[4] = r),
          (n[5] = c),
          (n[6] = b),
          (n[7] = g),
          (n[8] = v),
          (n[9] = h),
          (n[10] = f),
          (n[11] = x),
          (n[12] = m),
          (n[13] = t))
      } else t = n[13]
      return (n[24] !== t ? ((l = (0, a.jsx)(eI.t, { children: t })), (n[24] = t), (n[25] = l)) : (l = n[25]), l)
    }
    var tf = l("GO7r"),
      tx = (e) =>
        (0, a.jsxs)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, a.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M10.8828 9.61914L11.043 9.66309L17.5928 11.9746C18.5062 12.297 18.5682 13.565 17.6904 13.9746L15.1562 15.1562L13.9746 17.6904C13.5907 18.5132 12.4525 18.5107 12.0459 17.7549L11.9746 17.5928L9.66309 11.043C9.37948 10.2394 10.087 9.46369 10.8828 9.61914ZM13.0264 16.5771L13.9902 14.5127L14.0342 14.4287C14.1447 14.2377 14.3114 14.0842 14.5127 13.9902L16.5771 13.0264L11.0889 11.0889L13.0264 16.5771Z",
              fill: "currentColor",
            }),
            (0, a.jsx)("path", {
              d: "M3.33301 12.668C3.70017 12.668 3.99787 12.9659 3.99805 13.333V14.166C3.99805 15.1794 4.81968 16.0008 5.83301 16.001H6.66602L6.80078 16.0146C7.10342 16.0768 7.33074 16.3451 7.33105 16.666C7.33105 16.9872 7.10357 17.2552 6.80078 17.3174L6.66602 17.3311H5.83301C4.08514 17.3309 2.66797 15.9139 2.66797 14.166V13.333C2.66815 12.966 2.96596 12.6681 3.33301 12.668Z",
              fill: "currentColor",
            }),
            (0, a.jsx)("path", {
              d: "M6.80078 2.68164C7.10349 2.74379 7.3309 3.01195 7.33105 3.33301C7.33105 3.65422 7.1036 3.9222 6.80078 3.98438L6.66602 3.99805H5.83301C4.81979 3.99818 3.99823 4.8198 3.99805 5.83301V6.66602C3.99805 7.03329 3.70028 7.33105 3.33301 7.33105C2.96585 7.33092 2.66797 7.0332 2.66797 6.66602V5.83301C2.66815 4.08526 4.08525 2.6681 5.83301 2.66797H6.66602L6.80078 2.68164Z",
              fill: "currentColor",
            }),
            (0, a.jsx)("path", {
              d: "M14.166 2.66797C15.9139 2.66797 17.3309 4.08518 17.3311 5.83301V6.66602C17.3311 7.03329 17.0333 7.33105 16.666 7.33105C16.299 7.33075 16.001 7.03309 16.001 6.66602V5.83301C16.0008 4.81972 15.1793 3.99805 14.166 3.99805H13.333C12.9659 3.99791 12.668 3.7002 12.668 3.33301C12.6681 2.96597 12.966 2.6681 13.333 2.66797H14.166Z",
              fill: "currentColor",
            }),
          ],
        }),
      tb = l("Jqpj"),
      tv = l("ZGaK"),
      ty = l("f22a")
    function tk(e) {
      let t,
        l,
        n,
        i = (0, s.c)(27),
        {
          errorMessage: r,
          isLoading: d,
          isRetrying: c,
          isUpgradingMarketplaces: p,
          marketplaceLoadErrors: g,
          marketplaces: m,
          configuredMarketplaceNames: h,
          configuredGitMarketplaceNames: f,
          onUpgradeMarketplace: x,
          onRemoveMarketplace: b,
          onRetry: y,
          pendingUpgradeMarketplaceName: k,
        } = e,
        j = (0, v.A)()
      if (d) {
        let e
        return (
          i[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, a.jsx)(e0.j, {
                  children: (0, a.jsx)(o.A, {
                    id: "skills.appsPage.marketplace.loading",
                    defaultMessage: "Loading marketplaces…",
                    description: "Loading label on the manage Marketplace tab",
                  }),
                }),
              })),
              (i[0] = e))
            : (e = i[0]),
          e
        )
      }
      if (r) {
        let e, t, l, s, n
        return (
          i[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(o.A, {
                id: "skills.appsPage.marketplace.loadError.title",
                defaultMessage: "Unable to load marketplaces",
                description: "Title shown when plugin marketplaces cannot be loaded",
              })),
              (i[1] = e))
            : (e = i[1]),
          i[2] !== y
            ? ((t = () => {
                y()
              }),
              (i[2] = y),
              (i[3] = t))
            : (t = i[3]),
          i[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = (0, a.jsx)(o.A, {
                id: "skills.appsPage.marketplace.loadError.retry",
                defaultMessage: "Retry",
                description: "Retry button label for the marketplace list error state",
              })),
              (i[4] = l))
            : (l = i[4]),
          i[5] !== c || i[6] !== t
            ? ((s = (0, a.jsx)(u.$, { color: "outline", disabled: c, onClick: t, children: l })),
              (i[5] = c),
              (i[6] = t),
              (i[7] = s))
            : (s = i[7]),
          i[8] !== r || i[9] !== s
            ? ((n = (0, a.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, a.jsx)(P.A, { title: e, description: r, actions: s }),
              })),
              (i[8] = r),
              (i[9] = s),
              (i[10] = n))
            : (n = i[10]),
          n
        )
      }
      return (
        i[11] !== c || i[12] !== g || i[13] !== y
          ? ((t = (0, a.jsx)(tj, { errors: g, isRetrying: c, onRetry: y })),
            (i[11] = c),
            (i[12] = g),
            (i[13] = y),
            (i[14] = t))
          : (t = i[14]),
        i[15] !== f ||
        i[16] !== h ||
        i[17] !== j ||
        i[18] !== p ||
        i[19] !== m ||
        i[20] !== b ||
        i[21] !== x ||
        i[22] !== k
          ? ((l =
              0 === m.length
                ? (0, a.jsx)("div", {
                    className: "flex min-h-0 flex-1 items-center justify-center py-8",
                    children: (0, a.jsx)("div", {
                      className: "text-sm text-secondary",
                      children: (0, a.jsx)(o.A, {
                        id: "skills.appsPage.empty.marketplace",
                        defaultMessage: "No marketplaces found",
                        description: "Empty state title when there are no marketplaces on the manage Marketplace tab",
                      }),
                    }),
                  })
                : (0, a.jsx)(tv.q, {
                    gap: "compact",
                    isSingleColumn: !0,
                    children: m.map((e) => {
                      var t, l
                      let s = (0, ty.rX)(e, h),
                        n = (0, ty.ov)(e, f),
                        i = k === e.name && n,
                        r = p || null != k,
                        d = !n || r,
                        c = !s || r
                      return (0, a.jsx)(
                        tb.D,
                        {
                          className: "group justify-center border-none",
                          actionsPlacement: "center",
                          description: (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)("span", {
                                children: (0, a.jsx)(o.A, {
                                  id: "skills.appsPage.marketplace.pluginCount",
                                  defaultMessage: "{count, plural, one {# plugin} other {# plugins}}",
                                  description: "Plugin count shown for a marketplace on the manage Marketplace tab",
                                  values: { count: e.pluginCount },
                                }),
                              }),
                              null != e.path ? (0, a.jsx)("span", { className: "truncate", children: e.path }) : null,
                            ],
                          }),
                          descriptionClassName: "flex min-w-0 flex-col gap-0.5 leading-snug",
                          icon: (0, a.jsx)(tx, { className: "icon-sm text-secondary" }),
                          title: (0, ty.Zr)(e),
                          actions: (0, a.jsxs)(ew.t, {
                            children: [
                              (0, a.jsx)(ed.m, {
                                content:
                                  ((t = e),
                                  n
                                    ? (0, a.jsx)(o.A, {
                                        id: "skills.appsPage.marketplace.upgrade",
                                        defaultMessage: "Upgrade marketplace",
                                        description:
                                          "Tooltip label for upgrading a marketplace on the manage Marketplace tab",
                                      })
                                    : t.isBuiltIn
                                      ? (0, a.jsx)(o.A, {
                                          id: "skills.appsPage.marketplace.upgrade.builtInDisabled",
                                          defaultMessage: "Built-in marketplaces update automatically",
                                          description: "Tooltip label for disabled built-in marketplace upgrade",
                                        })
                                      : (0, a.jsx)(o.A, {
                                          id: "skills.appsPage.marketplace.upgrade.localDisabled",
                                          defaultMessage: "Only Git marketplaces can be upgraded",
                                          description: "Tooltip label for disabled non-Git marketplace upgrade",
                                        })),
                                children: (0, a.jsx)(u.$, {
                                  className: "shrink-0",
                                  color: "outline",
                                  size: "default",
                                  disabled: d,
                                  loading: i,
                                  "aria-label": j.formatMessage({
                                    id: "skills.appsPage.marketplace.upgrade.ariaLabel",
                                    defaultMessage: "Upgrade marketplace",
                                    description:
                                      "Accessible label for upgrading a marketplace on the manage Marketplace tab",
                                  }),
                                  onClick: (t) => {
                                    ;(t.stopPropagation(), n && x(e))
                                  },
                                  children: (0, a.jsx)(o.A, {
                                    id: "skills.appsPage.marketplace.upgrade.button",
                                    defaultMessage: "Upgrade",
                                    description:
                                      "Button label for upgrading a marketplace on the manage Marketplace tab",
                                  }),
                                }),
                              }),
                              (0, a.jsx)(ed.m, {
                                content:
                                  ((l = e),
                                  s
                                    ? (0, a.jsx)(o.A, {
                                        id: "skills.appsPage.marketplace.remove",
                                        defaultMessage: "Remove marketplace",
                                        description:
                                          "Tooltip label for removing a marketplace on the manage Marketplace tab",
                                      })
                                    : l.isBuiltIn
                                      ? (0, a.jsx)(o.A, {
                                          id: "skills.appsPage.marketplace.remove.builtInDisabled",
                                          defaultMessage: "Built-in marketplaces cannot be removed",
                                          description: "Tooltip label for disabled built-in marketplace removal",
                                        })
                                      : (0, a.jsx)(o.A, {
                                          id: "skills.appsPage.marketplace.remove.configuredDisabled",
                                          defaultMessage: "Only configured marketplaces can be removed",
                                          description: "Tooltip label for disabled unconfigured marketplace removal",
                                        })),
                                children: (0, a.jsx)(u.$, {
                                  color: "ghost",
                                  size: "icon",
                                  disabled: c,
                                  "aria-label": j.formatMessage({
                                    id: "skills.appsPage.marketplace.remove.ariaLabel",
                                    defaultMessage: "Remove marketplace",
                                    description:
                                      "Accessible label for removing a marketplace on the manage Marketplace tab",
                                  }),
                                  onClick: (t) => {
                                    ;(t.stopPropagation(), s && b(e))
                                  },
                                  children: (0, a.jsx)(tf.cSG, {}),
                                }),
                              }),
                            ],
                          }),
                        },
                        `${e.name}:${e.path ?? "remote"}`,
                      )
                    }),
                  })),
            (i[15] = f),
            (i[16] = h),
            (i[17] = j),
            (i[18] = p),
            (i[19] = m),
            (i[20] = b),
            (i[21] = x),
            (i[22] = k),
            (i[23] = l))
          : (l = i[23]),
        i[24] !== t || i[25] !== l
          ? ((n = (0, a.jsxs)("div", { className: "flex min-h-0 flex-1 flex-col gap-3", children: [t, l] })),
            (i[24] = t),
            (i[25] = l),
            (i[26] = n))
          : (n = i[26]),
        n
      )
    }
    function tj(e) {
      let t,
        l,
        n,
        i,
        r,
        d,
        c,
        p,
        g,
        m,
        h,
        f,
        x,
        b,
        v,
        y = (0, s.c)(32),
        { errors: k, isRetrying: j, onRetry: C } = e
      if (0 === k.length) return null
      if (y[0] !== k) {
        let e = k.slice(0, 3)
        ;((t = k.length - e.length),
          (c = "rounded-md border p-3"),
          (d = "flex flex-wrap items-start justify-between gap-3"),
          (i = "min-w-0 flex-1"),
          y[8] === Symbol.for("react.memo_cache_sentinel")
            ? ((r = (0, a.jsx)("div", {
                className: "text-sm font-medium",
                children: (0, a.jsx)(o.A, {
                  id: "skills.appsPage.marketplace.partialLoadError.title",
                  defaultMessage: "Some marketplaces could not be loaded",
                  description: "Banner title shown when some plugin marketplaces fail to load",
                }),
              })),
              (y[8] = r))
            : (r = y[8]),
          (l = "mt-2 flex flex-col gap-2 text-xs text-secondary"),
          (n = e.map(tC)),
          (y[0] = k),
          (y[1] = t),
          (y[2] = l),
          (y[3] = n),
          (y[4] = i),
          (y[5] = r),
          (y[6] = d),
          (y[7] = c))
      } else ((t = y[1]), (l = y[2]), (n = y[3]), (i = y[4]), (r = y[5]), (d = y[6]), (c = y[7]))
      return (
        y[9] !== t
          ? ((p =
              t > 0
                ? (0, a.jsx)("div", {
                    children: (0, a.jsx)(o.A, {
                      id: "skills.appsPage.marketplace.partialLoadError.more",
                      defaultMessage:
                        "{count, plural, one {# more marketplace could not be loaded} other {# more marketplaces could not be loaded}}",
                      description: "Summary shown when not all marketplace load errors fit in the banner",
                      values: { count: t },
                    }),
                  })
                : null),
            (y[9] = t),
            (y[10] = p))
          : (p = y[10]),
        y[11] !== l || y[12] !== n || y[13] !== p
          ? ((g = (0, a.jsxs)("div", { className: l, children: [n, p] })),
            (y[11] = l),
            (y[12] = n),
            (y[13] = p),
            (y[14] = g))
          : (g = y[14]),
        y[15] !== i || y[16] !== r || y[17] !== g
          ? ((m = (0, a.jsxs)("div", { className: i, children: [r, g] })),
            (y[15] = i),
            (y[16] = r),
            (y[17] = g),
            (y[18] = m))
          : (m = y[18]),
        y[19] !== C
          ? ((h = () => {
              C()
            }),
            (y[19] = C),
            (y[20] = h))
          : (h = y[20]),
        y[21] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, a.jsx)(o.A, {
              id: "skills.appsPage.marketplace.partialLoadError.retry",
              defaultMessage: "Retry",
              description: "Retry button label for partial marketplace load errors",
            })),
            (y[21] = f))
          : (f = y[21]),
        y[22] !== j || y[23] !== h
          ? ((x = (0, a.jsx)(u.$, { color: "outline", disabled: j, onClick: h, children: f })),
            (y[22] = j),
            (y[23] = h),
            (y[24] = x))
          : (x = y[24]),
        y[25] !== x || y[26] !== d || y[27] !== m
          ? ((b = (0, a.jsxs)("div", { className: d, children: [m, x] })),
            (y[25] = x),
            (y[26] = d),
            (y[27] = m),
            (y[28] = b))
          : (b = y[28]),
        y[29] !== b || y[30] !== c
          ? ((v = (0, a.jsx)("div", { className: c, children: b })), (y[29] = b), (y[30] = c), (y[31] = v))
          : (v = y[31]),
        v
      )
    }
    function tC(e, t) {
      return (0, a.jsxs)(
        "div",
        {
          className: "min-w-0",
          children: [
            (0, a.jsx)("div", { className: "truncate font-mono", children: e.marketplacePath }),
            (0, a.jsx)("div", { className: "break-words", children: e.message }),
          ],
        },
        `${e.marketplacePath}:${t}`,
      )
    }
    var tM = l("oom3"),
      tw = l("SqAt"),
      tA = l("FvYa"),
      tS = l("JNtf"),
      tP = l("mUDD"),
      tI = l("v0Gf"),
      tL = l("RNul")
    let tE = (0, i.vU)(en.u, ({ hostId: e, marketplace: t, roots: l }, { scope: a, queryClient: s }) => ({
      queryKey: [...el.qw, "marketplace-removal", e, t.name, t.path, l],
      queryFn: async ({ signal: n }) => {
        let { marketplaces: i, marketplaceLoadErrors: r } = await a.query.fetch(ee.Fu, { hostId: e, roots: l }),
          o = r.find((e) => e.marketplacePath === t.path)
        if (null != o) throw Error(o.message)
        return (0, el.RR)({
          hostId: e,
          plugins: (0, el.z0)(i.filter((e) => e.name === t.name)),
          queryClient: s,
          signal: n,
        })
      },
      retry: !1,
      staleTime: 0,
    }))
    function tN(e) {
      let t,
        l,
        n,
        o,
        d,
        c,
        u,
        p,
        g,
        m = (0, s.c)(32),
        { hostId: h, marketplace: f, onOpenChange: x, roots: v } = e
      m[0] !== h || m[1] !== f || m[2] !== v
        ? ((t = { hostId: h, marketplace: f, roots: v }), (m[0] = h), (m[1] = f), (m[2] = v), (m[3] = t))
        : (t = m[3])
      let { data: y, error: k, isFetching: j, refetch: C } = (0, i._U)(tE, t)
      m[4] !== h ? ((l = { hostId: h }), (m[4] = h), (m[5] = l)) : (l = m[5])
      let { uninstallPlugin: M } = (0, to.XV)(l)
      m[6] !== h ? ((n = { hostId: h }), (m[6] = h), (m[7] = n)) : (n = m[7])
      let { removeMarketplace: w } = (0, to.p9)(n),
        [A, S] = (0, r.useState)(null),
        P = (0, r.useRef)(null)
      ;(m[8] === Symbol.for("react.memo_cache_sentinel")
        ? ((o = () => () => P.current?.abort()), (d = []), (m[8] = o), (m[9] = d))
        : ((o = m[8]), (d = m[9])),
        (0, r.useEffect)(o, d))
      let I = A?.plugins ?? (j ? void 0 : y),
        L = null == A && null != k
      m[10] !== L ||
      m[11] !== f ||
      m[12] !== x ||
      m[13] !== I ||
      m[14] !== A?.completedCount ||
      m[15] !== w ||
      m[16] !== M
        ? ((c = async () => {
            if (null != P.current || null == I || L) return
            let e = new AbortController()
            P.current = e
            let t = A?.completedCount ?? 0
            S({ plugins: I, completedCount: t, isPending: !0, hasError: !1 })
            try {
              for (let l of I.slice(t))
                (await M({
                  marketplaceName: l.marketplaceName,
                  pluginDisplayName: (0, b.V)(l),
                  pluginId: l.plugin.id,
                  pluginName: l.plugin.name,
                  requestPluginId: (0, tw.RQ)(l),
                }),
                  e.signal.throwIfAborted(),
                  (t += 1),
                  S({ plugins: I, completedCount: t, isPending: !0, hasError: !1 }))
              ;(await w({ marketplaceDisplayName: (0, ty.Zr)(f), marketplaceName: f.name }),
                e.signal.throwIfAborted(),
                x(!1))
            } catch {
              e.signal.aborted || S({ plugins: I, completedCount: t, isPending: !1, hasError: !0 })
            }
            P.current = null
          }),
          (m[10] = L),
          (m[11] = f),
          (m[12] = x),
          (m[13] = I),
          (m[14] = A?.completedCount),
          (m[15] = w),
          (m[16] = M),
          (m[17] = c))
        : (c = m[17])
      let E = c,
        N = A?.completedCount ?? 0,
        _ = A?.hasError ?? !1,
        T = A?.isPending ?? !1
      return (
        m[18] !== E
          ? ((u = () => {
              E()
            }),
            (m[18] = E),
            (m[19] = u))
          : (u = m[19]),
        m[20] !== C
          ? ((p = () => {
              C()
            }),
            (m[20] = C),
            (m[21] = p))
          : (p = m[21]),
        m[22] !== L ||
        m[23] !== f ||
        m[24] !== x ||
        m[25] !== I ||
        m[26] !== u ||
        m[27] !== p ||
        m[28] !== N ||
        m[29] !== _ ||
        m[30] !== T
          ? ((g = (0, a.jsx)(t_, {
              plugins: I,
              hasPluginsError: L,
              completedCount: N,
              hasRemovalError: _,
              isRemoving: T,
              marketplace: f,
              onOpenChange: x,
              onRemove: u,
              onRetryPlugins: p,
            })),
            (m[22] = L),
            (m[23] = f),
            (m[24] = x),
            (m[25] = I),
            (m[26] = u),
            (m[27] = p),
            (m[28] = N),
            (m[29] = _),
            (m[30] = T),
            (m[31] = g))
          : (g = m[31]),
        g
      )
    }
    function t_(e) {
      let t,
        l,
        n,
        i,
        r,
        d,
        c,
        p,
        g,
        m,
        h,
        f,
        x,
        v,
        y,
        k,
        j,
        C,
        M = (0, s.c)(58),
        {
          plugins: w,
          completedCount: A,
          hasRemovalError: S,
          hasPluginsError: P,
          isRemoving: I,
          marketplace: L,
          onOpenChange: E,
          onRemove: N,
          onRetryPlugins: _,
        } = e,
        T = null != w && !P && !I,
        R = S ? w?.[A] : null
      if (S) {
        let e
        ;(M[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(o.A, {
              id: "skills.appsPage.marketplace.removeDialog.retryRemoval",
              defaultMessage: "Retry",
              description: "Button to resume uninstalling plugins or removing their marketplace after an error",
            })),
            (M[0] = e))
          : (e = M[0]),
          (t = e))
      } else if (null != w && w.length > 0) {
        let e
        ;(M[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(o.A, {
              id: "skills.appsPage.marketplace.removeDialog.uninstallAndRemove",
              defaultMessage: "Uninstall & remove",
              description:
                "Confirm button to uninstall the installed plugins from a marketplace and remove that marketplace",
            })),
            (M[1] = e))
          : (e = M[1]),
          (t = e))
      } else {
        let e
        ;(M[2] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)(o.A, {
              id: "skills.appsPage.marketplace.removeDialog.confirm",
              defaultMessage: "Remove",
              description: "Confirm button label in the remove marketplace dialog",
            })),
            (M[2] = e))
          : (e = M[2]),
          (t = e))
      }
      M[3] !== I || M[4] !== E
        ? ((l = (e) => {
            I || E(e)
          }),
          (M[3] = I),
          (M[4] = E),
          (M[5] = l))
        : (l = M[5])
      let H = !I
      ;(M[6] !== T || M[7] !== N
        ? ((n = (e) => {
            ;(e.preventDefault(), T && N())
          }),
          (M[6] = T),
          (M[7] = N),
          (M[8] = n))
        : (n = M[8]),
        M[9] !== L ? ((i = (0, ty.Zr)(L)), (M[9] = L), (M[10] = i)) : (i = M[10]),
        M[11] !== i
          ? ((r = (0, a.jsx)(tP.OO, {
              className: "shrink-0",
              children: (0, a.jsx)(tP.c7, {
                title: (0, a.jsx)(tS.L3, {
                  children: (0, a.jsx)(o.A, {
                    id: "skills.appsPage.marketplace.removeDialog.title",
                    defaultMessage: 'Remove "{marketplaceName}"?',
                    description: "Title for the dialog confirming marketplace removal",
                    values: { marketplaceName: i },
                  }),
                }),
              }),
            })),
            (M[11] = i),
            (M[12] = r))
          : (r = M[12]),
        M[13] !== P || M[14] !== _
          ? ((d =
              P &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("p", {
                    role: "alert",
                    className: "text-sm text-danger",
                    children: (0, a.jsx)(o.A, {
                      id: "skills.appsPage.marketplace.removeDialog.pluginsError",
                      defaultMessage: "Unable to load installed plugins",
                      description:
                        "Error shown when the marketplace removal dialog cannot load the installed plugins that belong to the marketplace",
                    }),
                  }),
                  (0, a.jsx)(u.$, {
                    className: "self-start",
                    color: "secondary",
                    onClick: _,
                    children: (0, a.jsx)(o.A, {
                      id: "skills.appsPage.marketplace.removeDialog.retryPlugins",
                      defaultMessage: "Retry",
                      description: "Button to retry loading installed plugins in the marketplace removal dialog",
                    }),
                  }),
                ],
              })),
            (M[13] = P),
            (M[14] = _),
            (M[15] = d))
          : (d = M[15]),
        M[16] !== P || M[17] !== w
          ? ((c =
              !P &&
              null == w &&
              (0, a.jsx)(e0.j, {
                children: (0, a.jsx)(o.A, {
                  id: "skills.appsPage.marketplace.removeDialog.loadingPlugins",
                  defaultMessage: "Loading installed plugins…",
                  description:
                    "Loading label while the marketplace removal dialog loads the installed plugins that belong to the marketplace",
                }),
              })),
            (M[16] = P),
            (M[17] = w),
            (M[18] = c))
          : (c = M[18]),
        M[19] !== P || M[20] !== w?.length
          ? ((p =
              !P &&
              w?.length === 0 &&
              (0, a.jsx)("p", {
                className: "text-sm text-secondary",
                children: (0, a.jsx)(o.A, {
                  id: "skills.appsPage.marketplace.removeDialog.noInstalledPlugins",
                  defaultMessage:
                    "Its plugins will not appear or be available for installation unless you add it again",
                  description:
                    "Explanation in the marketplace removal dialog when no plugins are installed: its plugins will no longer be available until the marketplace is added again",
                }),
              })),
            (M[19] = P),
            (M[20] = w?.length),
            (M[21] = p))
          : (p = M[21]),
        M[22] !== A || M[23] !== P || M[24] !== I || M[25] !== w
          ? ((g =
              !P &&
              null != w &&
              w.length > 0 &&
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)("p", {
                    className: "shrink-0 text-sm text-secondary",
                    children: (0, a.jsx)(o.A, {
                      id: "skills.appsPage.marketplace.removeDialog.installedPlugins",
                      defaultMessage:
                        "The following plugins will be uninstalled, and can't be re-installed unless you add this marketplace again.",
                      description:
                        "Explanation above the list of installed plugins that will be uninstalled when their marketplace is removed and cannot be installed again until the marketplace is added again",
                    }),
                  }),
                  (0, a.jsx)(tI.Q, {
                    className: "relative grid min-h-0 flex-1 overflow-hidden",
                    fade: "mask",
                    scrollClassName: "min-h-0 overflow-y-auto",
                    children: (0, a.jsx)("ul", {
                      className: "flex flex-col gap-2 text-sm select-text",
                      "aria-live": "polite",
                      children: w.map((e, t) =>
                        (0, a.jsxs)(
                          "li",
                          {
                            className: "flex items-center gap-2",
                            children: [
                              (0, a.jsx)(tA.R, {
                                className: "size-5 shrink-0",
                                alt: "",
                                logoUrl: e.logoPath,
                                logoDarkUrl: e.logoDarkPath,
                                fallback: (0, a.jsx)(tf.wdY, { className: "text-secondary" }),
                              }),
                              (0, a.jsx)("span", { className: "min-w-0 flex-1 break-words", children: (0, b.V)(e) }),
                              t < A &&
                                (0, a.jsxs)("span", {
                                  className: "flex shrink-0 items-center gap-1 text-xs text-secondary",
                                  children: [
                                    (0, a.jsx)(tf.yIE, {}),
                                    (0, a.jsx)(o.A, {
                                      id: "skills.appsPage.marketplace.removeDialog.uninstalled",
                                      defaultMessage: "Uninstalled",
                                      description:
                                        "Status beside a plugin successfully uninstalled during marketplace removal",
                                    }),
                                  ],
                                }),
                              I &&
                                t === A &&
                                (0, a.jsxs)("span", {
                                  className: "flex shrink-0 items-center gap-1 text-xs text-secondary",
                                  children: [
                                    (0, a.jsx)(tL.y, { className: "icon-xs" }),
                                    (0, a.jsx)(o.A, {
                                      id: "skills.appsPage.marketplace.removeDialog.uninstalling",
                                      defaultMessage: "Uninstalling",
                                      description:
                                        "Status beside the plugin currently being uninstalled during marketplace removal",
                                    }),
                                  ],
                                }),
                            ],
                          },
                          (0, el.vc)(e),
                        ),
                      ),
                    }),
                  }),
                ],
              })),
            (M[22] = A),
            (M[23] = P),
            (M[24] = I),
            (M[25] = w),
            (M[26] = g))
          : (g = M[26]),
        M[27] !== d || M[28] !== c || M[29] !== p || M[30] !== g
          ? ((m = (0, a.jsxs)(tP.OO, { className: "min-h-0 gap-4", children: [d, c, p, g] })),
            (M[27] = d),
            (M[28] = c),
            (M[29] = p),
            (M[30] = g),
            (M[31] = m))
          : (m = M[31]),
        M[32] !== R || M[33] !== S
          ? ((h =
              S &&
              (0, a.jsx)(tP.OO, {
                className: "shrink-0",
                children: (0, a.jsx)("p", {
                  role: "alert",
                  className: "text-sm text-danger",
                  children:
                    null != R
                      ? (0, a.jsx)(o.A, {
                          id: "skills.appsPage.marketplace.removeDialog.uninstallError",
                          defaultMessage: "Unable to uninstall {pluginName}. Retry to continue",
                          description:
                            "Error when a plugin uninstall fails during marketplace removal; retry resumes from this plugin",
                          values: { pluginName: (0, b.V)(R) },
                        })
                      : (0, a.jsx)(o.A, {
                          id: "skills.appsPage.marketplace.removeDialog.removeError",
                          defaultMessage: "Unable to remove the marketplace. Retry to continue",
                          description: "Error when marketplace removal fails after its plugins have been uninstalled",
                        }),
                }),
              })),
            (M[32] = R),
            (M[33] = S),
            (M[34] = h))
          : (h = M[34]),
        M[35] !== E
          ? ((f = () => {
              E(!1)
            }),
            (M[35] = E),
            (M[36] = f))
          : (f = M[36]),
        M[37] === Symbol.for("react.memo_cache_sentinel")
          ? ((x = (0, a.jsx)(o.A, {
              id: "skills.appsPage.marketplace.removeDialog.cancel",
              defaultMessage: "Cancel",
              description: "Cancel button label in the remove marketplace dialog",
            })),
            (M[37] = x))
          : (x = M[37]),
        M[38] !== I || M[39] !== f
          ? ((v = (0, a.jsx)(u.$, { color: "secondary", disabled: I, onClick: f, children: x })),
            (M[38] = I),
            (M[39] = f),
            (M[40] = v))
          : (v = M[40]))
      let D = !T
      return (
        M[41] !== t || M[42] !== I || M[43] !== D
          ? ((y = (0, a.jsx)(u.$, { color: "danger", disabled: D, loading: I, type: "submit", children: t })),
            (M[41] = t),
            (M[42] = I),
            (M[43] = D),
            (M[44] = y))
          : (y = M[44]),
        M[45] !== v || M[46] !== y
          ? ((k = (0, a.jsx)(tP.OO, { className: "shrink-0", children: (0, a.jsxs)(tP.Es, { children: [v, y] }) })),
            (M[45] = v),
            (M[46] = y),
            (M[47] = k))
          : (k = M[47]),
        M[48] !== m || M[49] !== h || M[50] !== k || M[51] !== n || M[52] !== r
          ? ((j = (0, a.jsxs)(tP.R4, {
              className: "max-h-[calc(100dvh/var(--codex-window-zoom)-2rem)] overflow-hidden select-none",
              as: "form",
              onSubmit: n,
              children: [r, m, h, k],
            })),
            (M[48] = m),
            (M[49] = h),
            (M[50] = k),
            (M[51] = n),
            (M[52] = r),
            (M[53] = j))
          : (j = M[53]),
        M[54] !== l || M[55] !== j || M[56] !== H
          ? ((C = (0, a.jsx)(tS.lG, { open: !0, onOpenChange: l, showDialogClose: H, size: "compact", children: j })),
            (M[54] = l),
            (M[55] = j),
            (M[56] = H),
            (M[57] = C))
          : (C = M[57]),
        C
      )
    }
    var tT = l("funJ"),
      tR = l("XvU9")
    function tH(e) {
      let t,
        l,
        n,
        u,
        p,
        g,
        P,
        E,
        F,
        et,
        ed,
        ec,
        eu,
        ep,
        eg,
        em,
        eh,
        ef,
        ex,
        eb,
        ev,
        ey,
        ek,
        ej,
        eC,
        eM,
        ew,
        eA,
        eS,
        eP,
        eI,
        eL,
        eE,
        eN,
        e_,
        eT,
        eR,
        eH,
        eD,
        eO,
        eU,
        eV,
        ez,
        eB,
        eF,
        e$ = (0, s.c)(129),
        { hostId: eq, initialManageTab: eQ, mcpServerCreation: eY, onManageTabSelect: eK, requestedTab: eW } = e,
        eG = (0, i.gh)(en.u),
        eZ = (0, v.A)(),
        eX = (0, w.l)(),
        eJ = (0, U.U)("(max-width: 1023px)"),
        e0 = (0, d.zy)(),
        e1 = (0, d.Zp)(),
        e2 = (0, r.useContext)(c.X)
      e$[0] !== e0.state ? ((t = (0, tM.qC)(e0.state)), (e$[0] = e0.state), (e$[1] = t)) : (t = e$[1])
      let e3 = t
      e$[2] !== e0.search || e$[3] !== e3.initialSearchQuery
        ? ((l = (0, tM.a5)(e0.search) ?? e3.initialSearchQuery),
          (e$[2] = e0.search),
          (e$[3] = e3.initialSearchQuery),
          (e$[4] = l))
        : (l = e$[4])
      let e4 = l,
        e5 = (0, i.Ul)(ei.lo),
        e7 = (0, z.I)(),
        e9 = (0, B.p8)(),
        e8 = (0, f.jE)(),
        te = (0, r.useRef)(null)
      e$[5] !== eq ? ((n = { hostId: eq }), (e$[5] = eq), (e$[6] = n)) : (n = e$[6])
      let tt = (0, O.J)(n),
        tl = (0, i._U)(m.V, eq),
        [ta, tu] = (0, r.useState)(eQ ?? e3.initialTab),
        tp = eW ?? ta
      e$[7] !== e3.connectAppId
        ? ((u = () => e3.connectAppId ?? null), (e$[7] = e3.connectAppId), (e$[8] = u))
        : (u = e$[8])
      let [tf, tx] = (0, r.useState)(u),
        [tb, tk] = (0, r.useState)(e4 ?? ""),
        [tj, tC] = (0, r.useState)(!1),
        [tw, tA] = (0, r.useState)(null),
        [tS, tP] = (0, r.useState)(null),
        { data: tI, isLoading: tL } = (0, H.A)(eq),
        tE = tI?.homeDirectory,
        { installedSkillMetadata: t_, isLoading: tH, markSkillsUpdated: tY, workspaceRoots: tK } = (0, tR.Cy)(eq)
      e$[9] !== eq ? ((p = { hostId: eq }), (e$[9] = eq), (e$[10] = p)) : (p = e$[10])
      let { isPending: tW, isPlaceholderData: tG } = (0, i._U)(ei.FM, p),
        { canInstallRecommendedSkills: tZ, defaultRecommendedRepoRoot: tX } = (0, tR.p1)(eq),
        { errorMessage: tJ, isLoading: t0, refresh: t1, skills: t2 } = (0, tR.Jc)(tX, eq, tZ),
        t3 = (0, ty.Pe)({ recommendedSkills: t0 || null != tJ ? null : t2, skills: t_ })
      e$[11] !== tt || e$[12] !== eq || e$[13] !== tK
        ? ((g = { enabled: tt, hostId: eq, roots: tK }), (e$[11] = tt), (e$[12] = eq), (e$[13] = tK), (e$[14] = g))
        : (g = e$[14])
      let { data: t6, error: t4, isLoading: t5, refetch: t7 } = (0, ee.Kj)(g)
      e$[15] !== tt || e$[16] !== eq
        ? ((P = { enabled: tt, hostId: eq }), (e$[15] = tt), (e$[16] = eq), (e$[17] = P))
        : (P = e$[17])
      let t9 = (0, T.H)(P)
      e$[18] !== tt || e$[19] !== eq
        ? ((E = { enabled: tt, hostId: eq }), (e$[18] = tt), (e$[19] = eq), (e$[20] = E))
        : (E = e$[20])
      let t8 = (0, R.J)(E)
      e$[21] !== tt || e$[22] !== eq
        ? ((F = { enabled: tt, hostId: eq }), (e$[21] = tt), (e$[22] = eq), (e$[23] = F))
        : (F = e$[23])
      let le = (0, D.I)(F)
      e$[24] !== t9 || e$[25] !== eq
        ? ((et = { computerUseAvailability: t9, hostId: eq }), (e$[24] = t9), (e$[25] = eq), (e$[26] = et))
        : (et = e$[26])
      let lt = (0, V.l)(et),
        ll =
          null == t6
            ? void 0
            : (0, el.PM)({
                plugins: t6,
                isComputerUseAvailable: t9.available,
                isExternalBrowserUseAvailable: t8.available,
                isInAppBrowserUseAvailable: le.available,
                isMessagesAvailable: lt.available,
              }),
        la = t4?.message ?? null,
        ls = t5 || t9.isLoading || t8.isLoading || le.isLoading || lt.isLoading
      e$[27] !== t7
        ? ((ed = async () => {
            await t7()
          }),
          (e$[27] = t7),
          (e$[28] = ed))
        : (ed = e$[28])
      let ln = ed,
        { value: li } = (0, ts.Fj)("1349514884"),
        { hiddenPluginIds: lr } = (0, Y.I4)(li),
        lo = (0, ts.Zj)("1269116100")
      e$[29] !== eq ? ((ec = { hostId: eq }), (e$[29] = eq), (e$[30] = ec)) : (ec = e$[30])
      let { mutateAsync: ld } = (0, J.pC)(ec)
      e$[31] !== eq ? ((eu = { hostId: eq }), (e$[31] = eq), (e$[32] = eu)) : (eu = e$[32])
      let { mutateAsync: lc } = (0, J.oq)(eu),
        lu = (0, td.nH)(ll ?? [], lr, eX),
        lp = (0, td.nH)(t6 ?? [], lr, eX),
        lg = eq === h.fI
      e$[33] !== lg || e$[34] !== eq
        ? ((ep = { hostId: eq, useActiveWorkspaceRoot: lg }), (e$[33] = lg), (e$[34] = eq), (e$[35] = ep))
        : (ep = e$[35])
      let { data: lm } = (0, es.oJ)(null, ep),
        lh = eq === h.fI
      e$[36] !== tW || e$[37] !== tG || e$[38] !== eq || e$[39] !== e5 || e$[40] !== lh || e$[41] !== tK
        ? ((eg = (0, y.K)({
            hostId: eq,
            isLocalHost: lh,
            selectedRemoteProject: e5,
            workspaceRoots: tK,
            areWorkspaceRootsPending: tW,
            isPlaceholderData: tG,
          })),
          (e$[36] = tW),
          (e$[37] = tG),
          (e$[38] = eq),
          (e$[39] = e5),
          (e$[40] = lh),
          (e$[41] = tK),
          (e$[42] = eg))
        : (eg = e$[42])
      let { cwd: lf, isPending: lx } = eg,
        lb = eq === h.fI ? "fallback-to-workspace" : "preserve-null",
        lv = !lx
      e$[43] !== eq || e$[44] !== lb || e$[45] !== lv
        ? ((em = { hostId: eq, cwdMode: lb, enabled: lv }), (e$[43] = eq), (e$[44] = lb), (e$[45] = lv), (e$[46] = em))
        : (em = e$[46])
      let { data: ly, isError: lk, isPending: lj } = (0, es.PG)(lf, em),
        lC = lx || lj,
        lM = lC || lk ? void 0 : ly
      e$[47] !== eq ? ((eh = { hostId: eq }), (e$[47] = eq), (e$[48] = eh)) : (eh = e$[48])
      let {
          data: lw,
          hardRefetchAppsList: lA,
          isHardRefetchingAppsList: lS,
          isLoading: lP,
          loadError: lI,
        } = (0, C.Ad)(eh),
        lL = lI?.message ?? null,
        { installPlugin: lE, status: lN, uninstalling: l_ } = (0, tr.XY)()
      e$[49] !== eq ? ((ef = { hostId: eq }), (e$[49] = eq), (e$[50] = ef)) : (ef = e$[50])
      let { pendingPluginId: lT, setPluginEnabled: lR } = (0, to.zQ)(ef)
      e$[51] !== eq ? ((ex = { hostId: eq }), (e$[51] = eq), (e$[52] = ex)) : (ex = e$[52])
      let { uninstallPlugin: lH } = (0, to.XV)(ex)
      e$[53] !== eq ? ((eb = { hostId: eq }), (e$[53] = eq), (e$[54] = eb)) : (eb = e$[54])
      let { isUpgradingMarketplaces: lD, pendingUpgradeMarketplaceName: lO, upgradeMarketplaces: lU } = (0, to.qW)(eb),
        { data: lV } = (0, i._U)(es.I2, eq)
      e$[55] !== eq
        ? ((ev = { hostId: eq, oauthReferrer: "connector_settings" }), (e$[55] = eq), (e$[56] = ev))
        : (ev = e$[56])
      let {
        clearConnectingApp: lz,
        connectingApp: lB,
        connectingOptions: lF,
        handleAppConnectOAuthStarted: l$,
        handleConnectApp: lq,
        isAppConnectPending: lQ,
      } = (0, M.t)(ev)
      e$[57] !== eq ? ((ey = { hostId: eq }), (e$[57] = eq), (e$[58] = ey)) : (ey = e$[58])
      let { setAppEnabled: lY, updatingAppId: lK } = (0, k.J)(ey)
      e$[59] !== lw || e$[60] !== lM || e$[61] !== tw
        ? ((ej =
            null == (ek = null == tw ? null : (lw?.find((e) => e.id === tw) ?? null)) ? null : (0, y.e)(ek.id, lM)),
          (e$[59] = lw),
          (e$[60] = lM),
          (e$[61] = tw),
          (e$[62] = ek),
          (e$[63] = ej))
        : ((ek = e$[62]), (ej = e$[63]))
      let lW = ej,
        lG = (0, C.Ys)(tw, lM),
        lZ = lV?.config
      e$[64] !== lZ ? ((eC = (0, ty.Qv)(lZ)), (e$[64] = lZ), (e$[65] = eC)) : (eC = e$[65])
      let lX = eC,
        lJ = (0, ty.K1)(lV?.config)
      e$[66] !== lw || e$[67] !== tf
        ? ((eM = null == tf ? null : (lw?.find((e) => e.id === tf) ?? null)),
          (e$[66] = lw),
          (e$[67] = tf),
          (e$[68] = eM))
        : (eM = e$[68])
      let l0 = eM
      e$[69] !== lQ || e$[70] !== tf
        ? ((ew = null != tf && lQ(tf)), (e$[69] = lQ), (e$[70] = tf), (e$[71] = ew))
        : (ew = e$[71])
      let l1 = ew,
        l2 = tb.trim().toLowerCase()
      e$[72] !== lo || e$[73] !== eq
        ? ((eA = { enabled: lo, hostId: eq }), (e$[72] = lo), (e$[73] = eq), (e$[74] = eA))
        : (eA = e$[74])
      let { data: l3, isLoading: l6 } = (0, J.vW)(eA),
        { plugins: l4 } = (0, td.gL)({
          availablePlugins: lu,
          createdByMeRemotePlugins: null,
          homeDirectory: tE,
          pluginShares: lo && null != l3 ? (0, td.nH)(l3, lr, eX) : null,
          storefrontPlugins: (0, td.wu)(lu),
        }),
        l5 = (0, td.iU)({
          createdByMePlugins: l4,
          installedPlugins: lp,
          sharedWithYouPlugins: [],
          workspacePlugins: [],
        }),
        l7 = (0, td.cu)({ locale: eZ.locale, plugins: l5, query: l2 }),
        l9 = new Set([...lu, ...l4].map(tF)),
        l8 = new Set(l5.filter((e) => !l9.has(e.plugin.id)).map(tB)),
        ae = (0, ty.sq)({ skills: t3, query: l2 }),
        { installedApps: at } = (0, ty.EB)(lw ?? []),
        al = (0, ty.LJ)({ locale: eZ.locale, apps: at, query: l2 }),
        aa = at.length,
        as = Array.from(lJ).filter(tz).length
      e$[75] !== lm?.servers
        ? ((eS = Object.keys(lm?.servers ?? {})), (e$[75] = lm?.servers), (e$[76] = eS))
        : (eS = e$[76])
      let an = { apps: aa, marketplace: as, mcps: eS.length, plugins: l5.length, skills: t3.length },
        ai = lo && l6,
        ar = eY?.isAdding
          ? "mcps"
          : (0, ty.Lq)({
              currentTab: tp,
              isCurrentTabLoading: "plugins" === tp && (ls || (lo && tL) || ai),
              isManagePage: !0,
              isPluginsEnabled: tt,
              tabCounts: an,
            }),
        ao = (0, tM.NP)(eZ, ar)
      e$[77] !== lA
        ? ((eP = async () => {
            try {
              await lA()
            } catch {}
          }),
          (e$[77] = lA),
          (e$[78] = eP))
        : (eP = e$[78])
      let ad = eP,
        ac = tV
      e$[79] !== eZ || e$[80] !== eG
        ? ((eI = (e) => {
            eG.get(N.Id).danger(
              eZ.formatMessage({
                id: "plugins.manage.copyShareLinkError",
                defaultMessage: "Couldn't copy share link",
                description: "Error shown when copying a plugin share link fails",
              }),
              {
                ...(null == e ? void 0 : { description: (0, x.Rt_)(e) }),
                errorAnalytics: { toastId: "plugins.manage.copyShareLinkError" },
              },
            )
          }),
          (e$[79] = eZ),
          (e$[80] = eG),
          (e$[81] = eI))
        : (eI = e$[81])
      let au = eI
      e$[82] !== tE ||
      e$[83] !== lo ||
      e$[84] !== ln ||
      e$[85] !== ld ||
      e$[86] !== eG ||
      e$[87] !== eq ||
      e$[88] !== au
        ? ((eL = async (e) => {
            let t = (0, $.t6)(tE, e.marketplacePath, e.plugin.source)
            try {
              let l = await (0, J.RD)({ scope: eG, hostId: eq, params: (0, el.R9)(e) }).catch(tU),
                a = l?.shareContext ?? e.plugin.shareContext,
                s = (0, G.Ab)({
                  pluginShareUrl: l?.pluginShareUrl ?? null,
                  shareContext: a,
                  savedShareUrl: null,
                  configuredShareUrl: ac(e),
                })
              if (
                (null == s &&
                  lo &&
                  null != t &&
                  ((s = (
                    await (0, G.JI)({ pluginPath: t, remotePluginId: a?.remotePluginId ?? null, savePluginShare: ld })
                  ).shareUrl),
                  ln()),
                null != s && s.length > 0)
              )
                return void (await (0, tn.E)(s))
            } catch (e) {
              au(e)
              return
            }
            au()
          }),
          (e$[82] = tE),
          (e$[83] = lo),
          (e$[84] = ln),
          (e$[85] = ld),
          (e$[86] = eG),
          (e$[87] = eq),
          (e$[88] = au),
          (e$[89] = eL))
        : (eL = e$[89])
      let ap = eL
      e$[90] !== tE ||
      e$[91] !== eZ ||
      e$[92] !== ln ||
      e$[93] !== ld ||
      e$[94] !== eG ||
      e$[95] !== eq ||
      e$[96] !== au ||
      e$[97] !== lc
        ? ((eE = async (e) => {
            let t = (0, $.t6)(tE, e.marketplacePath, e.plugin.source)
            if (null == t) return
            let l = await (0, J.RD)({ scope: eG, hostId: eq, params: (0, el.R9)(e) }).catch(tO),
              a = e.plugin.shareContext,
              s = a?.sharePrincipals != null && null != a.remoteVersion ? a : (l?.shareContext ?? a)
            if (s?.remotePluginId != null && null == s.sharePrincipals)
              return void eG
                .get(N.Id)
                .danger(
                  eZ.formatMessage({
                    id: "plugins.manage.loadSharingError",
                    defaultMessage: "Couldn't load plugin sharing",
                    description: "Error shown when plugin sharing settings cannot load",
                  }),
                  { errorAnalytics: { toastId: "plugins.manage.loadSharingError" } },
                )
            let n = (0, G.VZ)({
              initialShare:
                null == s
                  ? null
                  : {
                      remotePluginId: s.remotePluginId,
                      sharePrincipals: (0, J.eA)(s),
                      shareUrl: (0, G.Ab)({
                        pluginShareUrl: l?.pluginShareUrl ?? null,
                        shareContext: l?.shareContext ?? s,
                        savedShareUrl: null,
                        configuredShareUrl: ac(e),
                      }),
                    },
              saveShare: (e) => (0, G.JI)({ pluginPath: t, remotePluginId: e, savePluginShare: ld }),
            })
            ;(0, I.qf)(eG, W.PluginShareDialog, {
              initialDiscoverability: l?.shareContext?.discoverability ?? s?.discoverability,
              initialSharePrincipals: n.getCurrentShare()?.sharePrincipals ?? [],
              pluginDisplayName: (0, b.V)(e),
              shouldShowCopyLinkCreationProgress: () => n.getCurrentShare()?.shareUrl == null,
              onCopyLink: async () => {
                try {
                  let e = n.getCurrentShare()?.shareUrl != null,
                    t = await n.getOrCreateShare()
                  if ((e || ln(), 0 === t.shareUrl.length))
                    return (au(), { canPublishToWorkspace: t.canPublishToWorkspace, didCopy: !1 })
                  return { canPublishToWorkspace: t.canPublishToWorkspace, didCopy: await (0, tn.E)(t.shareUrl) }
                } catch (e) {
                  return (au(e), { didCopy: !1 })
                }
              },
              onSaveShareTargets: async (e, t) => {
                try {
                  let l = await n.saveShareTargets(e, (e, l) =>
                    lc({ discoverability: t, remotePluginId: e, targets: l }),
                  )
                  return (ln(), { canPublishToWorkspace: n.getCurrentShare()?.canPublishToWorkspace, principals: l })
                } catch (e) {
                  throw (
                    eG
                      .get(N.Id)
                      .danger(
                        eZ.formatMessage({
                          id: "plugins.manage.updateSharingError",
                          defaultMessage: "Couldn't update plugin sharing",
                          description: "Error shown when updating plugin sharing fails",
                        }),
                        {
                          errorAnalytics: { toastId: "plugins.manage.updateSharingError" },
                          description: (0, x.Rt_)(e),
                        },
                      ),
                    e
                  )
                }
              },
              onUpdateSharedVersion: async () => {
                if (s?.remotePluginId != null)
                  try {
                    ;(await ld({ pluginPath: t, remotePluginId: s.remotePluginId }),
                      ln(),
                      eG
                        .get(N.Id)
                        .success(
                          eZ.formatMessage({
                            id: "plugins.manage.updateSharedVersionSuccess",
                            defaultMessage: "Shared version updated",
                            description:
                              "Success message shown after uploading a newer local plugin version to an existing plugin share",
                          }),
                        ))
                  } catch (e) {
                    throw (
                      eG
                        .get(N.Id)
                        .danger(
                          eZ.formatMessage({
                            id: "plugins.manage.updateSharedVersionError",
                            defaultMessage: "Couldn't update shared version",
                            description:
                              "Error shown when uploading a newer local plugin version to an existing plugin share fails",
                          }),
                          {
                            errorAnalytics: { toastId: "plugins.manage.updateSharedVersionError" },
                            description: (0, x.Rt_)(e),
                          },
                        ),
                      e
                    )
                  }
              },
              shouldShowUpdateSharedVersion: (0, Z.z)({ localVersion: e.plugin.localVersion, shareContext: s }),
            })
          }),
          (e$[90] = tE),
          (e$[91] = eZ),
          (e$[92] = ln),
          (e$[93] = ld),
          (e$[94] = eG),
          (e$[95] = eq),
          (e$[96] = au),
          (e$[97] = lc),
          (e$[98] = eE))
        : (eE = e$[98])
      let ag = eE
      e$[99] !== ag || e$[100] !== lo
        ? ((eN = lo
            ? (e) => {
                ag(e)
              }
            : void 0),
          (e$[99] = ag),
          (e$[100] = lo),
          (e$[101] = eN))
        : (eN = e$[101])
      let am = eN,
        ah = ls || (lo && tL) || ai,
        af = (0, i.Ul)(ei.Gt)
      e$[102] !== af ? ((e_ = (0, ea.QO)(af)), (e$[102] = af), (e$[103] = e_)) : (e_ = e$[103])
      let ax = e_
      e$[104] !== ax || e$[105] !== e9
        ? ((eT = (e) => {
            e9({
              activeProject: ax,
              prefillPrompt: (0, K.KH)({
                defaultPrompt: (0, K.Dy)(e.plugin.interface?.defaultPrompt),
                pluginDisplayName: (0, b.V)(e),
                pluginId: e.plugin.id,
              }),
              startInSidebar: !0,
            })
          }),
          (e$[104] = ax),
          (e$[105] = e9),
          (e$[106] = eT))
        : (eT = e$[106])
      let ab = eT
      e$[107] !== lA || e$[108] !== eZ || e$[109] !== tY || e$[110] !== t1 || e$[111] !== ln || e$[112] !== eG
        ? ((eR = async () => {
            ;(tC(!0),
              await (async () => {
                try {
                  ;(tY(), await Promise.all([ln(), t1(), lA()]))
                } catch {
                  eG.get(N.Id).danger(
                    eZ.formatMessage({
                      id: "skills.page.refreshFailed",
                      defaultMessage: "Failed to refresh skills and apps",
                      description: "Toast message shown when refreshing the Skills & Apps page data fails",
                    }),
                    { errorAnalytics: { toastId: "skills.page.refreshFailed" } },
                  )
                }
              })().finally(() => {
                tC(!1)
              }))
          }),
          (e$[107] = lA),
          (e$[108] = eZ),
          (e$[109] = tY),
          (e$[110] = t1),
          (e$[111] = ln),
          (e$[112] = eG),
          (e$[113] = eR))
        : (eR = e$[113])
      let av = eR
      e$[114] !== eK
        ? ((eH = (e) => {
            ;(tu(e), eK?.(e))
          }),
          (e$[114] = eK),
          (e$[115] = eH))
        : (eH = e$[115])
      let ay = eH
      e$[116] !== tl || e$[117] !== eq
        ? ((eD = (e) => (tl ? (0, q.$W)(e, eq) : (0, q.tK)(e, { hostId: eq }))),
          (e$[116] = tl),
          (e$[117] = eq),
          (e$[118] = eD))
        : (eD = e$[118])
      let ak = eD
      e$[119] === Symbol.for("react.memo_cache_sentinel")
        ? ((eO = () => {
            te.current?.focus()
          }),
          (e$[119] = eO))
        : (eO = e$[119])
      let aj = (0, r.useEffectEvent)(eO)
      e$[120] !== lU
        ? ((eU = async (e) => {
            try {
              await lU({ marketplaceDisplayName: (0, ty.Zr)(e), marketplaceName: e.name })
            } catch {}
          }),
          (e$[120] = lU),
          (e$[121] = eU))
        : (eU = e$[121])
      let aC = eU
      ;(e$[122] !== aj
        ? ((eV = () => {
            let e = (e) => {
              ;(e.metaKey || e.ctrlKey) &&
                "f" === e.key.toLowerCase() &&
                !(function (e) {
                  if (!(e instanceof HTMLElement)) return !1
                  if (e.isContentEditable) return !0
                  let t = e.tagName.toLowerCase()
                  return (
                    "input" === t || "textarea" === t || "select" === t || null != e.closest("[contenteditable='true']")
                  )
                })(e.target) &&
                (e.preventDefault(), aj())
            }
            return (
              window.addEventListener("keydown", e),
              () => {
                window.removeEventListener("keydown", e)
              }
            )
          }),
          (e$[122] = aj),
          (e$[123] = eV))
        : (eV = e$[123]),
        e$[124] === Symbol.for("react.memo_cache_sentinel") ? ((ez = []), (e$[124] = ez)) : (ez = e$[124]),
        (0, r.useEffect)(eV, ez),
        e$[125] !== eZ
          ? ((eB = eZ.formatMessage({
              id: "skills.appsPage.manageTabs.ariaLabel",
              defaultMessage: "Manage extensions",
              description: "Accessible label for switching between managed extension types",
            })),
            (e$[125] = eZ),
            (e$[126] = eB))
          : (eB = e$[126]))
      let aM = eB
      return (
        e$[127] !== aM ? ((eF = (0, a.jsx)(_.Q, { title: aM })), (e$[127] = aM), (e$[128] = eF)) : (eF = e$[128]),
        (0, a.jsxs)("div", {
          className: "flex h-full min-h-0 flex-col",
          children: [
            eF,
            (0, a.jsx)("div", {
              className: "flex min-h-0 flex-1 flex-col text-base select-none",
              children:
                tt || "mcps" === ar
                  ? (0, a.jsx)(a.Fragment, {
                      children: (0, a.jsxs)("div", {
                        className: "flex-1 overflow-hidden",
                        children: [
                          (0, a.jsx)(tv.d, {
                            className: "flex h-full w-full flex-1 flex-col gap-0",
                            children: (0, a.jsxs)(er.P, {
                              embedded: !0,
                              fullWidth: !0,
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex flex-wrap items-center justify-between gap-3",
                                  children: [
                                    (0, a.jsx)(tQ, {
                                      currentTab: ar,
                                      showNonMcpTabs: tt,
                                      tabCounts: an,
                                      onSelectTab: ay,
                                    }),
                                    eJ
                                      ? null
                                      : (0, a.jsx)("div", {
                                          className: "w-56 min-w-0",
                                          children: (0, a.jsx)(L.s, {
                                            id: "plugins-page-manage-search",
                                            inputRef: te,
                                            label: ao.searchLabel,
                                            onSearchQueryChange: tk,
                                            placeholder: ao.searchPlaceholder,
                                            searchQuery: tb,
                                            variant: "settings",
                                          }),
                                        }),
                                  ],
                                }),
                                (0, a.jsxs)("div", {
                                  className: "flex min-h-0 flex-1 flex-col",
                                  children: [
                                    "plugins" === ar
                                      ? (0, a.jsx)(X.S, {
                                          presentation: "settings",
                                          errorMessage: la,
                                          hostId: eq,
                                          getCopyLinkUrl: ac,
                                          homeDirectory: tE,
                                          pluginInstallationStatus: lN,
                                          isLoading: ah,
                                          installedStateAction: "toggle",
                                          useCompactEmptyState: !0,
                                          onCopyShareLink: (e) => {
                                            ap(e)
                                          },
                                          getPluginDetailTo: ak,
                                          onOpenPluginDetails: (e, t) =>
                                            (0, Q.y)(t, () =>
                                              e2(() => {
                                                e1(ak(e))
                                              }),
                                            ),
                                          onShareInstalledPlugin: am,
                                          onTryInChat: lo
                                            ? (e) => {
                                                ab(e)
                                              }
                                            : void 0,
                                          plugins: l7,
                                          unavailablePluginIds: l8,
                                          onInstallPlugin: async (e) => {
                                            lE(e, {
                                              activeProject: ax,
                                              hostId: eq,
                                              marketplaceAnalytics: ti.F.settings,
                                              onSuccess: ln,
                                            })
                                          },
                                          onUninstallInstalledPlugin: lH,
                                          onToggleInstalledPluginEnabled: lR,
                                          pendingPluginId: lT,
                                          uninstalling: l_,
                                          reducedMotion: e7,
                                          emptyStateTitle: (0, a.jsx)(o.A, {
                                            id: "skills.appsPage.empty.plugins",
                                            defaultMessage: "No plugins found",
                                            description:
                                              "Empty state title when there are no plugins on the Plugins tab",
                                          }),
                                        })
                                      : "skills" === ar
                                        ? (0, a.jsx)(tT.j, {
                                            gap: "compact",
                                            hostId: eq,
                                            installedStateAction: "toggle",
                                            isLoading: tH || t0,
                                            isSingleColumn: !0,
                                            roots: tK,
                                            skillEntries: ae,
                                            useCompactEmptyState: !0,
                                            onSkillsUpdated: tY,
                                          })
                                        : "mcps" === ar
                                          ? null
                                          : "marketplace" === ar
                                            ? (0, a.jsx)(tq, {
                                                configuredMarketplaceNames: lJ,
                                                configuredGitMarketplaceNames: lX,
                                                hostId: eq,
                                                isRefreshingPage: tj,
                                                isUpgradingMarketplaces: lD,
                                                onUpgradeMarketplace: (e) => {
                                                  aC(e)
                                                },
                                                onRemoveMarketplace: (e) => {
                                                  tP({ hostId: eq, marketplace: e, roots: tK })
                                                },
                                                onRetry: av,
                                                pendingUpgradeMarketplaceName: lO,
                                                searchQuery: l2,
                                              })
                                            : null == lw
                                              ? (0, a.jsx)(tm, {
                                                  errorMessage: lL,
                                                  isLoading: lP,
                                                  isRetrying: lS,
                                                  onRetry: ad,
                                                })
                                              : (0, a.jsxs)("div", {
                                                  className: "flex flex-col gap-6",
                                                  children: [
                                                    null != lL
                                                      ? (0, a.jsx)(tg, {
                                                          errorMessage: lL,
                                                          isRetrying: lS,
                                                          onRetry: ad,
                                                        })
                                                      : null,
                                                    (0, a.jsx)(th, {
                                                      apps: al,
                                                      effectiveConfig: lM,
                                                      emptyStateTitle:
                                                        0 === at.length
                                                          ? (0, a.jsx)(o.A, {
                                                              id: "skills.appsPage.empty.installedApps",
                                                              defaultMessage: "No installed apps",
                                                              description:
                                                                "Empty state title when there are no installed apps on the Skills & Apps page",
                                                            })
                                                          : (0, a.jsx)(o.A, {
                                                              id: "search.empty.title",
                                                              defaultMessage: "No results found",
                                                              description:
                                                                "Heading when a search in a content collection has no matching items",
                                                            }),
                                                      installedStateAction: "toggle",
                                                      isConfigPending: lC,
                                                      useCompactEmptyState: !0,
                                                      isAppConnectPending: lQ,
                                                      updatingAppId: lK,
                                                      onInstallApp: async (e) => {
                                                        ;(tx(null), await lq(e))
                                                      },
                                                      onOpenAppTools: (e) => {
                                                        tA(e.id)
                                                      },
                                                      onSetAppEnabled: lY,
                                                    }),
                                                  ],
                                                }),
                                    (0, a.jsx)(
                                      "div",
                                      {
                                        hidden: "mcps" !== ar,
                                        className: "flex min-h-0 flex-1 flex-col",
                                        children: (0, a.jsx)(e6, {
                                          creation: eY,
                                          cwd: null,
                                          hostId: eq,
                                          searchQuery: tb,
                                          useActiveWorkspaceRoot: lg,
                                        }),
                                      },
                                      eq,
                                    ),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          null != tS &&
                            (0, a.jsx)(
                              tN,
                              {
                                hostId: tS.hostId,
                                marketplace: tS.marketplace,
                                roots: tS.roots,
                                onOpenChange: (e) => {
                                  e || tP(null)
                                },
                              },
                              `${tS.hostId}:${tS.marketplace.name}`,
                            ),
                          (0, a.jsx)(eo.Z, {
                            app: lB ?? l0,
                            appConnectOptions: lF,
                            hostId: eq,
                            isCompletingConnection: l1,
                            onOpenChange: (e) => {
                              e || (lz(), tx(null))
                            },
                            onOAuthStarted: (e) => l$({ ...e, appConnectOptions: lF }),
                            onConnected: async () => {
                              ;(tx(null), (0, j.U)({ hostId: eq, queryClient: e8, refreshAppsList: lA }).catch(tD))
                            },
                          }),
                          (0, a.jsx)(tc.B, {
                            app: ek,
                            appRestriction: lW,
                            errorMessage: lG.error?.message ?? null,
                            isConfigPending: lC,
                            isLoading: lG.isLoading,
                            onOpenChange: (e) => {
                              e || tA(null)
                            },
                            onSetAppEnabled: lY,
                            onTryInChat: (e) => {
                              e9({
                                activeProject: ax,
                                prefillPrompt: `[@${e.name}](${(0, S.b4)((0, A.nw)(e.id))})`,
                                startInSidebar: !0,
                              })
                            },
                            tools: lG.data?.tools ?? [],
                            events: lG.data?.events ?? [],
                            updatingAppId: lK,
                          }),
                        ],
                      }),
                    })
                  : (0, a.jsx)(t$, {}),
            }),
          ],
        })
      )
    }
    function tD(e) {
      e2.v.error("Failed to refresh apps after directory app connect", { safe: {}, sensitive: { error: e } })
    }
    function tO() {
      return null
    }
    function tU() {
      return null
    }
    function tV(e) {
      return (0, F.I)(e.plugin.id)
    }
    function tz(e) {
      return !(0, el._s)(e)
    }
    function tB(e) {
      return e.plugin.id
    }
    function tF(e) {
      return e.plugin.id
    }
    function t$() {
      let e,
        t = (0, s.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("div", {
              className: "flex min-h-0 flex-1 items-center justify-center",
              children: (0, a.jsx)(P.A, {
                title: (0, a.jsx)(o.A, {
                  id: "skills.appsPage.pluginsUnsupportedHost.title",
                  defaultMessage: "Plugins are not available for this host",
                  description: "Title shown when the selected host does not support plugins",
                }),
                description: (0, a.jsx)(o.A, {
                  id: "skills.appsPage.pluginsUnsupportedHost.description",
                  defaultMessage: "Choose another host to browse and manage plugins",
                  description: "Description shown when the selected host does not support plugins",
                }),
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function tq(e) {
      let t,
        l,
        n,
        r,
        o = (0, s.c)(22),
        {
          configuredGitMarketplaceNames: d,
          configuredMarketplaceNames: c,
          hostId: u,
          isRefreshingPage: p,
          isUpgradingMarketplaces: g,
          onRemoveMarketplace: m,
          onRetry: h,
          onUpgradeMarketplace: f,
          pendingUpgradeMarketplaceName: x,
          searchQuery: b,
        } = e,
        { data: v, error: y, isLoading: k, isFetching: j, refetch: C } = (0, i._U)(et.M, u)
      o[0] !== c || o[1] !== v?.marketplaces || o[2] !== b
        ? ((t = (0, ty.HZ)({ configuredMarketplaceNames: c, marketplaces: v?.marketplaces ?? [], query: b })),
          (o[0] = c),
          (o[1] = v?.marketplaces),
          (o[2] = b),
          (o[3] = t))
        : (t = o[3])
      let M = t,
        w = y?.message ?? null,
        A = p || j
      return (
        o[4] !== v?.marketplaceLoadErrors
          ? ((l = v?.marketplaceLoadErrors ?? []), (o[4] = v?.marketplaceLoadErrors), (o[5] = l))
          : (l = o[5]),
        o[6] !== h || o[7] !== C
          ? ((n = async () => {
              await Promise.all([h(), C()])
            }),
            (o[6] = h),
            (o[7] = C),
            (o[8] = n))
          : (n = o[8]),
        o[9] !== d ||
        o[10] !== c ||
        o[11] !== k ||
        o[12] !== g ||
        o[13] !== M ||
        o[14] !== m ||
        o[15] !== f ||
        o[16] !== x ||
        o[17] !== w ||
        o[18] !== A ||
        o[19] !== l ||
        o[20] !== n
          ? ((r = (0, a.jsx)(tk, {
              configuredGitMarketplaceNames: d,
              configuredMarketplaceNames: c,
              errorMessage: w,
              isLoading: k,
              isRetrying: A,
              isUpgradingMarketplaces: g,
              marketplaceLoadErrors: l,
              marketplaces: M,
              onRemoveMarketplace: m,
              onRetry: n,
              onUpgradeMarketplace: f,
              pendingUpgradeMarketplaceName: x,
            })),
            (o[9] = d),
            (o[10] = c),
            (o[11] = k),
            (o[12] = g),
            (o[13] = M),
            (o[14] = m),
            (o[15] = f),
            (o[16] = x),
            (o[17] = w),
            (o[18] = A),
            (o[19] = l),
            (o[20] = n),
            (o[21] = r))
          : (r = o[21]),
        r
      )
    }
    function tQ(e) {
      let t,
        l,
        n,
        i,
        r,
        o,
        d,
        c,
        u,
        p,
        g,
        m,
        h,
        f,
        x = (0, s.c)(41),
        { currentTab: b, onSelectTab: y, showNonMcpTabs: k, tabCounts: j } = e,
        C = (0, v.A)(),
        M = j.plugins
      ;(x[0] !== C
        ? ((t = C.formatMessage({
            id: "skills.appsPage.manageTab.plugins",
            defaultMessage: "Plugins",
            description: "Manage-mode tab label for installed plugins",
          })),
          (x[0] = C),
          (x[1] = t))
        : (t = x[1]),
        x[2] !== t || x[3] !== j.plugins
          ? ((l = { count: M, id: "plugins", label: t }), (x[2] = t), (x[3] = j.plugins), (x[4] = l))
          : (l = x[4]))
      let w = j.apps
      ;(x[5] !== C
        ? ((n = C.formatMessage({
            id: "skills.appsPage.manageTab.apps",
            defaultMessage: "Apps",
            description: "Manage-mode tab label for installed apps",
          })),
          (x[5] = C),
          (x[6] = n))
        : (n = x[6]),
        x[7] !== n || x[8] !== j.apps
          ? ((i = { count: w, id: "apps", label: n }), (x[7] = n), (x[8] = j.apps), (x[9] = i))
          : (i = x[9]))
      let A = j.mcps
      ;(x[10] !== C
        ? ((r = C.formatMessage({
            id: "skills.appsPage.manageTab.mcps",
            defaultMessage: "MCPs",
            description: "Manage-mode tab label for installed MCP servers",
          })),
          (x[10] = C),
          (x[11] = r))
        : (r = x[11]),
        x[12] !== r || x[13] !== j.mcps
          ? ((o = { count: A, id: "mcps", label: r }), (x[12] = r), (x[13] = j.mcps), (x[14] = o))
          : (o = x[14]))
      let S = j.skills
      ;(x[15] !== C
        ? ((d = C.formatMessage({
            id: "skills.appsPage.manageTab.skills",
            defaultMessage: "Skills",
            description: "Manage-mode tab label for installed skills",
          })),
          (x[15] = C),
          (x[16] = d))
        : (d = x[16]),
        x[17] !== d || x[18] !== j.skills
          ? ((c = { count: S, id: "skills", label: d }), (x[17] = d), (x[18] = j.skills), (x[19] = c))
          : (c = x[19]))
      let P = j.marketplace
      ;(x[20] !== C
        ? ((u = C.formatMessage({
            id: "skills.appsPage.manageTab.marketplace",
            defaultMessage: "Marketplace",
            description: "Manage-mode tab label for plugin marketplaces",
          })),
          (x[20] = C),
          (x[21] = u))
        : (u = x[21]),
        x[22] !== u || x[23] !== j.marketplace
          ? ((p = { count: P, id: "marketplace", label: u }), (x[22] = u), (x[23] = j.marketplace), (x[24] = p))
          : (p = x[24]),
        x[25] !== c || x[26] !== p || x[27] !== l || x[28] !== i || x[29] !== o
          ? ((g = [l, i, o, c, p]), (x[25] = c), (x[26] = p), (x[27] = l), (x[28] = i), (x[29] = o), (x[30] = g))
          : (g = x[30]))
      let I = g
      return (
        x[31] !== C
          ? ((m = C.formatMessage({
              id: "skills.appsPage.manageTabs.ariaLabel",
              defaultMessage: "Manage extensions",
              description: "Accessible label for switching between managed extension types",
            })),
            (x[31] = C),
            (x[32] = m))
          : (m = x[32]),
        x[33] !== k || x[34] !== I
          ? ((h = I.filter((e) => "mcps" === e.id || (k && e.count > 0)).map(tY)),
            (x[33] = k),
            (x[34] = I),
            (x[35] = h))
          : (h = x[35]),
        x[36] !== b || x[37] !== y || x[38] !== m || x[39] !== h
          ? ((f = (0, a.jsx)(E.T, { ariaLabel: m, options: h, selectedId: b, size: "toolbar", onSelect: y })),
            (x[36] = b),
            (x[37] = y),
            (x[38] = m),
            (x[39] = h),
            (x[40] = f))
          : (f = x[40]),
        f
      )
    }
    function tY(e) {
      return {
        id: e.id,
        label: (0, a.jsxs)(a.Fragment, {
          children: [e.label, (0, a.jsx)("span", { className: "ms-0.5 text-tertiary", children: e.count })],
        }),
      }
    }
    var tK = l("CV1W"),
      tW = l("fnPc"),
      tG = l("ueRx")
    let tZ = (0, p._)(
      async () =>
        (
          await Promise.all([
            l.e(74692),
            l.e(1975),
            l.e(63396),
            l.e(584510),
            l.e(247109),
            l.e(474358),
            l.e(654065),
            l.e(500423),
          ]).then(l.bind(l, "sVPp"))
        ).PluginDetailSettingsRoutes,
      { fallback: (0, a.jsx)(tG.M, { section: "plugins-settings" }), propagateLoadError: !0 },
    )
    function tX(e) {
      let t,
        l,
        p,
        f,
        x,
        b,
        v,
        y,
        k,
        j,
        C,
        M,
        w,
        A = (0, s.c)(40)
      A[0] !== e ? ((t = void 0 === e ? {} : e), (A[0] = e), (A[1] = t)) : (t = A[1])
      let { manageOnly: S } = t,
        P = void 0 !== S && S,
        { selectedHostId: I } = (0, tW.D)(),
        L = (0, d.zy)(),
        E = (0, d.Zp)(),
        N = (0, r.useContext)(c.X),
        _ = (0, d.RQ)("/settings/plugins-settings/*"),
        T = (0, i._U)(m.V, h.fI),
        [R, H] = (0, r.useState)("plugins"),
        D = "mcps" === new URLSearchParams(L.search).get("tab") ? "mcps" : void 0,
        [O, U] = (0, r.useState)(!1)
      if (_?.params["*"]) {
        let e
        return (
          A[2] !== T
            ? ((e = T ? (0, a.jsx)(tZ, {}) : (0, a.jsx)(d.C5, { replace: !0, to: (0, tK.i4)() })),
              (A[2] = T),
              (A[3] = e))
            : (e = A[3]),
          e
        )
      }
      let V = P ? "mcps" : "plugins"
      ;(A[4] !== O || A[5] !== P
        ? ((l = P ? void 0 : { isAdding: O, onClose: () => U(!1) }), (A[4] = O), (A[5] = P), (A[6] = l))
        : (l = A[6]),
        A[7] !== L || A[8] !== E || A[9] !== D
          ? ((p = (e) => {
              if ((H(e), null != D && e !== D)) {
                let e = new URLSearchParams(L.search)
                ;(e.delete("tab"), E({ ...L, search: e.toString() }, { replace: !0, state: L.state }))
              }
            }),
            (A[7] = L),
            (A[8] = E),
            (A[9] = D),
            (A[10] = p))
          : (p = A[10]),
        A[11] !== D || A[12] !== I || A[13] !== V || A[14] !== l || A[15] !== p
          ? ((f = (0, a.jsx)(tH, {
              hostId: I,
              initialManageTab: V,
              mcpServerCreation: l,
              requestedTab: D,
              onManageTabSelect: p,
            })),
            (A[11] = D),
            (A[12] = I),
            (A[13] = V),
            (A[14] = l),
            (A[15] = p),
            (A[16] = f))
          : (f = A[16]))
      let z = f
      return P
        ? z
        : (A[17] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = (0, a.jsx)(e1.s, { slug: "plugins-settings" })),
              (b = (0, a.jsx)(o.A, {
                id: "settings.section.plugins-settings.subtitle",
                defaultMessage: "Manage plugins, skills, and MCPs",
                description: "Subtitle for the combined plugins settings section",
              })),
              (A[17] = x),
              (A[18] = b))
            : ((x = A[17]), (b = A[18])),
          A[19] !== E || A[20] !== N || A[21] !== D || A[22] !== I || A[23] !== R
            ? ((v = () =>
                N(() => {
                  E("/plugins", {
                    state: {
                      initialHostId: I,
                      initialTab: (D ?? R) === "skills" ? "skills" : "plugins",
                      pluginDirectoryEntrypoint:
                        n.CodexPluginDirectoryEntrypoint.CODEX_PLUGIN_DIRECTORY_ENTRYPOINT_SETTINGS,
                    },
                  })
                })),
              (A[19] = E),
              (A[20] = N),
              (A[21] = D),
              (A[22] = I),
              (A[23] = R),
              (A[24] = v))
            : (v = A[24]),
          A[25] === Symbol.for("react.memo_cache_sentinel")
            ? ((y = (0, a.jsx)(o.A, {
                id: "settings.section.plugins-settings.browseDirectory",
                defaultMessage: "Browse directory",
                description: "Button for browsing the plugin or skill directory from Plugins settings",
              })),
              (A[25] = y))
            : (y = A[25]),
          A[26] !== v
            ? ((k = (0, a.jsx)(u.$, { color: "outline", size: "toolbar", onClick: v, children: y })),
              (A[26] = v),
              (A[27] = k))
            : (k = A[27]),
          A[28] !== O || A[29] !== N
            ? ((j = () => {
                O || N(() => U(!0))
              }),
              (A[28] = O),
              (A[29] = N),
              (A[30] = j))
            : (j = A[30]),
          A[31] !== I || A[32] !== j
            ? ((C = (0, a.jsx)(g.o, {
                mode: "manage",
                hostId: I,
                onAddMcpServer: j,
                source: n.CodexPluginSource.CODEX_PLUGIN_SOURCE_OTHER,
              })),
              (A[31] = I),
              (A[32] = j),
              (A[33] = C))
            : (C = A[33]),
          A[34] !== k || A[35] !== C
            ? ((M = (0, a.jsxs)("div", { className: "flex items-center gap-2", children: [k, C] })),
              (A[34] = k),
              (A[35] = C),
              (A[36] = M))
            : (M = A[36]),
          A[37] !== z || A[38] !== M
            ? ((w = (0, a.jsx)(er.P, { title: x, subtitle: b, action: M, children: z })),
              (A[37] = z),
              (A[38] = M),
              (A[39] = w))
            : (w = A[39]),
          w)
    }
  },
  BSnr(e, t, l) {
    l.d(t, { X: () => i })
    var a = l("ABep"),
      s = l("QosV"),
      n = l("on57")
    let i = Object.assign(
      function (e) {
        let t,
          l,
          i = (0, s.c)(6),
          { children: r, id: o, className: d } = e
        return (
          i[0] !== d ? ((t = (0, n.A)("flex flex-col", d)), (i[0] = d), (i[1] = t)) : (t = i[1]),
          i[2] !== r || i[3] !== o || i[4] !== t
            ? ((l = (0, a.jsx)("section", { id: o, className: t, children: r })),
              (i[2] = r),
              (i[3] = o),
              (i[4] = t),
              (i[5] = l))
            : (l = i[5]),
          l
        )
      },
      {
        Header: function (e) {
          let t,
            l,
            i,
            r,
            o,
            d,
            c,
            u = (0, s.c)(32),
            {
              title: p,
              subtitle: g,
              actions: m,
              actionsAlignment: h,
              className: f,
              size: x,
              titleGap: b,
              spacing: v,
              subtitlePlacement: y,
              subtitleWrap: k,
            } = e,
            j = void 0 === x ? "default" : x,
            C = void 0 === v ? "default" : v,
            M = void 0 === y ? "below-title" : y,
            w = void 0 === k ? "balance" : k,
            A = null != p,
            S = null != g,
            P = null != m,
            I = "compact" === j
          u[0] !== I || u[1] !== g || u[2] !== M || u[3] !== w
            ? ((t = g
                ? (0, a.jsx)("div", {
                    className: (0, n.A)(
                      "font-normal text-secondary group-data-[density=compact]/settings:text-wrap",
                      "balance" === w ? "text-balance" : "text-wrap",
                      I ? "text-xs leading-4" : "text-sm leading-[18px]",
                      "below-header" === M && "w-full",
                    ),
                    children: g,
                  })
                : null),
              (u[0] = I),
              (u[1] = g),
              (u[2] = M),
              (u[3] = w),
              (u[4] = t))
            : (t = u[4])
          let L = t
          if (!A && !S && !P) {
            let e
            return (
              u[5] === Symbol.for("react.memo_cache_sentinel")
                ? ((e = (0, a.jsx)(a.Fragment, {})), (u[5] = e))
                : (e = u[5]),
              e
            )
          }
          let E = "below-header" === M ? "flex-wrap gap-x-4 gap-y-0.5" : "gap-4",
            N = S && "compact" === C && "pb-2",
            _ = S && "compact" !== C && "pb-3"
          u[6] !== f || u[7] !== S || u[8] !== I || u[9] !== C || u[10] !== E || u[11] !== N || u[12] !== _
            ? ((l = (0, n.A)(
                "flex justify-between group-data-[density=compact]/settings:min-h-0 group-data-[density=compact]/settings:pb-3",
                E,
                N,
                _,
                !S && (0, n.A)("items-center pb-1.5", "compact" === C ? "min-h-8" : "min-h-toolbar"),
                S && I && "items-center",
                S && !I && "items-start",
                f,
              )),
              (u[6] = f),
              (u[7] = S),
              (u[8] = I),
              (u[9] = C),
              (u[10] = E),
              (u[11] = N),
              (u[12] = _),
              (u[13] = l))
            : (l = u[13])
          let T =
            "none" === (void 0 === b ? "default" : b)
              ? "gap-0"
              : "gap-0.5 group-data-[density=compact]/settings:gap-0.75"
          ;(u[14] !== T ? ((i = (0, n.A)("flex min-w-0 flex-1 flex-col", T)), (u[14] = T), (u[15] = i)) : (i = u[15]),
            u[16] !== S || u[17] !== j || u[18] !== p
              ? ((r = p
                  ? (0, a.jsx)("div", {
                      className: (0, n.A)(
                        "font-medium text-default group-data-[density=compact]/settings:text-lg group-data-[density=compact]/settings:leading-5",
                        "compact" === j && "text-sm leading-[18px]",
                        ("large" === j || ("default" === j && S)) && "text-lg",
                        ("base" === j || ("default" === j && !S)) && "text-base",
                      ),
                      children: p,
                    })
                  : null),
                (u[16] = S),
                (u[17] = j),
                (u[18] = p),
                (u[19] = r))
              : (r = u[19]))
          let R = "below-title" === M ? L : null
          ;(u[20] !== i || u[21] !== r || u[22] !== R
            ? ((o = (0, a.jsxs)("div", { className: i, children: [r, R] })),
              (u[20] = i),
              (u[21] = r),
              (u[22] = R),
              (u[23] = o))
            : (o = u[23]),
            u[24] !== m || u[25] !== h
              ? ((d = m
                  ? (0, a.jsx)("div", {
                      className: (0, n.A)("flex items-center gap-2", "end" === h && "self-end"),
                      children: m,
                    })
                  : null),
                (u[24] = m),
                (u[25] = h),
                (u[26] = d))
              : (d = u[26]))
          let H = "below-header" === M ? L : null
          return (
            u[27] !== l || u[28] !== o || u[29] !== d || u[30] !== H
              ? ((c = (0, a.jsxs)("div", { className: l, children: [o, d, H] })),
                (u[27] = l),
                (u[28] = o),
                (u[29] = d),
                (u[30] = H),
                (u[31] = c))
              : (c = u[31]),
            c
          )
        },
        Content: function (e) {
          let t,
            l,
            i = (0, s.c)(5),
            { children: r, className: o } = e
          return (
            i[0] !== o ? ((t = (0, n.A)("flex flex-col gap-1.5", o)), (i[0] = o), (i[1] = t)) : (t = i[1]),
            i[2] !== r || i[3] !== t
              ? ((l = (0, a.jsx)("div", { className: t, children: r })), (i[2] = r), (i[3] = t), (i[4] = l))
              : (l = i[4]),
            l
          )
        },
        Footer: function (e) {
          let t,
            l,
            i = (0, s.c)(6),
            { children: r, className: o, variant: d } = e,
            c =
              "action" === (void 0 === d ? "description" : d)
                ? "pt-4 text-sm leading-5"
                : "px-4 pt-1.5 text-xs leading-4"
          return (
            i[0] !== o || i[1] !== c
              ? ((t = (0, n.A)("text-balance text-secondary", c, o)), (i[0] = o), (i[1] = c), (i[2] = t))
              : (t = i[2]),
            i[3] !== r || i[4] !== t
              ? ((l = (0, a.jsx)("div", { className: t, children: r })), (i[3] = r), (i[4] = t), (i[5] = l))
              : (l = i[5]),
            l
          )
        },
      },
    )
  },
  ueRx(e, t, l) {
    var a = l("ABep"),
      s = l("QosV"),
      n = l("oyxz"),
      i = l("pjIx"),
      r = l("jxU8"),
      o = l("odCE")
    l.d(
      t,
      {},
      {
        M: function (e) {
          let t,
            l,
            d = (0, s.c)(4),
            { section: c } = e
          return (
            d[0] !== c
              ? ((t = "personalization" === c ? (0, a.jsx)(n.A, { ...i.i.loading }) : void 0), (d[0] = c), (d[1] = t))
              : (t = d[1]),
            d[2] !== t
              ? ((l = (0, a.jsx)(r.P, {
                  contentClassName: "min-h-full items-center justify-center",
                  children: (0, a.jsx)(o.j, { children: t }),
                })),
                (d[2] = t),
                (d[3] = l))
              : (l = d[3]),
            l
          )
        },
      },
    )
  },
  kEV3(e, t, l) {
    var a = l("Qgfj")
    let s = (0, a.YK)({
        system: { id: "skills.scope.system", defaultMessage: "System", description: "Indicates a system scoped skill" },
        repo: {
          id: "skills.scope.repo",
          defaultMessage: "Repo",
          description: "Indicates a skill scoped to the current repository",
        },
        user: { id: "skills.scope.user", defaultMessage: "User", description: "Indicates a skill scoped to the user" },
        admin: {
          id: "skills.scope.admin",
          defaultMessage: "Admin",
          description: "Indicates a skill scoped to the admin",
        },
      }),
      n = (0, a.YK)({
        system: { id: "skills.scope.builtIn", defaultMessage: "System", description: "Label for system skills" },
        repo: { id: "skills.scope.team", defaultMessage: "Team", description: "Label for team skills" },
        user: { id: "skills.scope.personal", defaultMessage: "Personal", description: "Label for personal skills" },
        admin: {
          id: "skills.scope.adminInstalled",
          defaultMessage: "Admin installed",
          description: "Label for admin installed skills",
        },
      })
    function i({ scope: e, intl: t, repoLabel: l, adminLabel: a }) {
      if ("repo" === e) return l ?? t.formatMessage(n.repo)
      if ("admin" === e) return a ?? t.formatMessage(n.admin)
      let r = n[e]
      return r ? t.formatMessage(r) : t.formatMessage(s[e])
    }
    function r({ skillPath: e, roots: t, fallbackLabel: l }) {
      let a,
        s,
        n = t.reduce((t, l) => (e.startsWith(l) && (!t || l.length > t.length) ? l : t), null)
      if (!n) return l
      let i =
        -1 === (s = Math.max((a = n.replace(/[\\/]+$/, "")).lastIndexOf("/"), a.lastIndexOf("\\"))) ? a : a.slice(s + 1)
      return i.length > 0 ? i : l
    }
    l.d(
      t,
      {},
      {
        IG: function ({ skill: e, roots: t, intl: l, fallbackRepoLabel: a, adminLabel: s }) {
          return i({
            scope: e.scope,
            intl: l,
            repoLabel: r({ skillPath: e.path, roots: t, fallbackLabel: a ?? i({ scope: "repo", intl: l }) }),
            adminLabel: s,
          })
        },
        V_: i,
        _i: r,
      },
    )
  },
  Ekos(e, t, l) {
    var a = l("ABep"),
      s = l("QosV"),
      n = l("slpy"),
      i = l("ECyk"),
      r = l("zKw6"),
      o = l.n(r),
      d = l("HJEB"),
      c = l("Qgfj"),
      u = l("Wf1j"),
      p = l("oyxz"),
      g = l("ygO2"),
      m = l("HOLv"),
      h = l("poBj"),
      f = l("axh8"),
      x = l("n4fT"),
      b = l("hobO"),
      v = l("vOoA")
    let y = (0, c.YK)({
      installSkill: {
        id: "skills.recommended.connectSkill",
        defaultMessage: "Install skill",
        description: "Button label for installing a recommended skill",
      },
      installed: {
        id: "skills.recommended.installed",
        defaultMessage: "Installed",
        description: "Label for installed recommended skills",
      },
    })
    function k(e) {
      let t,
        l,
        n,
        r,
        o = (0, s.c)(13),
        { canInstall: d, installing: c, isInstalled: u, onInstall: h, skill: f } = e,
        x = u || !d || c
      return (
        o[0] !== h || o[1] !== f
          ? ((t = (e) => {
              ;(e.stopPropagation(), h(f, null))
            }),
            (o[0] = h),
            (o[1] = f),
            (o[2] = t))
          : (t = o[2]),
        o[3] !== x
          ? ((l = x ? null : (0, a.jsx)(m.I, { "aria-hidden": !1, asset: i.f })), (o[3] = x), (o[4] = l))
          : (l = o[4]),
        o[5] !== u
          ? ((n = u
              ? (0, a.jsx)(p.A, { ...y.installed })
              : (0, a.jsx)(p.A, {
                  id: "skills.recommended.install",
                  defaultMessage: "Install skill",
                  description: "Button label to install a recommended skill",
                })),
            (o[5] = u),
            (o[6] = n))
          : (n = o[6]),
        o[7] !== c || o[8] !== x || o[9] !== t || o[10] !== l || o[11] !== n
          ? ((r = (0, a.jsx)("div", {
              className: "flex w-full justify-end",
              children: (0, a.jsxs)(g.$, {
                color: "primary",
                size: "toolbar",
                disabled: x,
                loading: c,
                onClick: t,
                children: [l, n],
              }),
            })),
            (o[7] = c),
            (o[8] = x),
            (o[9] = t),
            (o[10] = l),
            (o[11] = n),
            (o[12] = r))
          : (r = o[12]),
        r
      )
    }
    function j(e) {
      let t,
        l,
        n,
        i,
        r = (0, s.c)(16),
        { skill: o, size: d, basePath: c } = e,
        u = void 0 === d ? "small" : d,
        p = !!o.iconLarge
      if (
        ("small" === u ? (t = 24) : p || (t = 20),
        r[0] !== c ||
          r[1] !== t ||
          r[2] !== p ||
          r[3] !== u ||
          r[4] !== o.description ||
          r[5] !== o.iconLarge ||
          r[6] !== o.iconSmall ||
          r[7] !== o.name)
      ) {
        let e,
          a = (0, f.h)(null, {
            size: u,
            fallbackSize: t,
            fallbackClassName: "text-secondary",
            iconSmall: o.iconSmall,
            iconLarge: o.iconLarge,
            basePath: c,
            alt: o.name,
            fallbackName: o.name,
            fallbackDescription: o.description,
          })
        r[10] !== p || r[11] !== u
          ? ((e = (0, v.a)({ size: u, hasLargeIcon: p, largeFallbackClassName: "h-5 w-5" })),
            (r[10] = p),
            (r[11] = u),
            (r[12] = e))
          : (e = r[12])
        let s = `${e} text-secondary`
        ;((l = a),
          (n = (0, f.d8)(a, s, "text-secondary")),
          (r[0] = c),
          (r[1] = t),
          (r[2] = p),
          (r[3] = u),
          (r[4] = o.description),
          (r[5] = o.iconLarge),
          (r[6] = o.iconSmall),
          (r[7] = o.name),
          (r[8] = l),
          (r[9] = n))
      } else ((l = r[8]), (n = r[9]))
      return (
        r[13] !== l || r[14] !== n
          ? ((i = (0, a.jsx)(l, { ...n })), (r[13] = l), (r[14] = n), (r[15] = i))
          : (i = r[15]),
        i
      )
    }
    l.d(
      t,
      {},
      {
        D: function (e) {
          let t,
            l,
            i,
            r,
            c,
            m,
            f,
            v,
            C = (0, s.c)(37),
            {
              skill: M,
              canInstall: w,
              hostId: A,
              isHighlighted: S,
              isInstalled: P,
              isInstalling: I,
              repoRoot: L,
              onInstall: E,
            } = e,
            N = void 0 !== S && S,
            _ = (0, u.A)(),
            T = M.shortDescription && M.shortDescription.length > 0 ? M.shortDescription : M.description
          C[0] !== L || C[1] !== M.repoPath
            ? ((t = (function ({ repoRoot: e, repoPath: t }) {
                if (!e) return null
                let l = t.split("/").join(o().sep),
                  a = o().join(e, l)
                return a.toLowerCase().endsWith(".md") ? a : o().join(a, "SKILL.md")
              })({ repoRoot: L, repoPath: M.repoPath })),
              (C[0] = L),
              (C[1] = M.repoPath),
              (C[2] = t))
            : (t = C[2])
          let R = t
          C[3] !== M.name ? ((l = (0, d.l)(M.name)), (C[3] = M.name), (C[4] = l)) : (l = C[4])
          let H = l,
            D = M.iconLarge ? "large" : "small"
          C[5] !== M || C[6] !== R || C[7] !== D
            ? ((i = (0, a.jsx)(j, { skill: M, size: D, basePath: R })), (C[5] = M), (C[6] = R), (C[7] = D), (C[8] = i))
            : (i = C[8])
          let O = i,
            U = P || !w || I
          C[9] !== _ || C[10] !== U || C[11] !== P || C[12] !== I || C[13] !== E || C[14] !== M
            ? ((r = P
                ? (0, a.jsx)(h.I, {
                    enabledStatusAriaLabel: _.formatMessage(y.installed),
                    isEnabled: !0,
                    isUninstalling: !1,
                    isUpdating: !1,
                  })
                : (0, a.jsx)(n.m, {
                    content: (0, a.jsx)(p.A, { ...y.installSkill }),
                    children: (0, a.jsx)(g.$, {
                      "aria-label": _.formatMessage(y.installSkill),
                      color: "secondary",
                      size: "composer",
                      disabled: U,
                      loading: I,
                      onClick: (e) => {
                        ;(e.stopPropagation(), U || E(M, null))
                      },
                      children: (0, a.jsx)(p.A, { ...y.installSkill }),
                    }),
                  })),
              (C[9] = _),
              (C[10] = U),
              (C[11] = P),
              (C[12] = I),
              (C[13] = E),
              (C[14] = M),
              (C[15] = r))
            : (r = C[15])
          let V = r
          return (
            C[16] !== H ? ((c = (0, a.jsx)(b.Rv, { kind: "Skill", title: H })), (C[16] = H), (C[17] = c)) : (c = C[17]),
            C[18] !== H || C[19] !== A || C[20] !== R
              ? ((m = (e) => {
                  let { isOpen: t } = e
                  return (0, a.jsx)(b.FG, { hostId: A, isOpen: t, skillPath: R, titleText: H })
                }),
                (C[18] = H),
                (C[19] = A),
                (C[20] = R),
                (C[21] = m))
              : (m = C[21]),
            C[22] !== w || C[23] !== P || C[24] !== I || C[25] !== E || C[26] !== M
              ? ((f = (0, a.jsx)(k, { canInstall: w, installing: I, isInstalled: P, onInstall: E, skill: M })),
                (C[22] = w),
                (C[23] = P),
                (C[24] = I),
                (C[25] = E),
                (C[26] = M),
                (C[27] = f))
              : (f = C[27]),
            C[28] !== V ||
            C[29] !== T ||
            C[30] !== H ||
            C[31] !== N ||
            C[32] !== O ||
            C[33] !== c ||
            C[34] !== m ||
            C[35] !== f
              ? ((v = (0, a.jsx)(x.C, {
                  cardIcon: O,
                  cardTitle: H,
                  cardDescription: T,
                  cardActions: V,
                  isHighlighted: N,
                  modalTitle: c,
                  modalTitleText: H,
                  modalDescription: T,
                  modalBody: m,
                  modalFooter: f,
                })),
                (C[28] = V),
                (C[29] = T),
                (C[30] = H),
                (C[31] = N),
                (C[32] = O),
                (C[33] = c),
                (C[34] = m),
                (C[35] = f),
                (C[36] = v))
              : (v = C[36]),
            v
          )
        },
      },
    )
  },
  funJ(e, t, l) {
    l.d(t, { j: () => _, Z: () => I })
    var a = l("ABep"),
      s = l("QosV"),
      n = l("zTeN"),
      i = l("zd8w"),
      r = l("Wf1j"),
      o = l("oyxz"),
      d = l("bq7F"),
      c = l("FrrB"),
      u = l("JZv7"),
      p = l("BrP7"),
      g = l("F40t"),
      m = l("odCE"),
      h = l("kEV3"),
      f = l("Ekos"),
      x = l("xBcA"),
      b = l("hbRe"),
      v = l("ZGaK"),
      y = l("xcgE"),
      k = l("ygO2"),
      j = l("Q8aV"),
      C = l("axh8"),
      M = l("n4fT"),
      w = l("hobO")
    function A(e) {
      let t,
        l,
        n,
        d,
        c,
        u,
        p,
        g,
        m,
        h = (0, s.c)(25),
        { isHighlighted: f, suggestion: x } = e,
        b = void 0 !== f && f,
        v = (0, r.A)(),
        A = (0, j.p8)()
      h[0] !== v || h[1] !== A || h[2] !== x
        ? ((t = () => {
            A({ prefillPrompt: (0, y.c)({ intl: v, memoryFilePath: x.memoryFilePath, suggestion: x }) })
          }),
          (h[0] = v),
          (h[1] = A),
          (h[2] = x),
          (h[3] = t))
        : (t = h[3])
      let S = t
      h[4] !== x.description || h[5] !== x.name
        ? ((l = (0, i.createElement)((0, C.h)(null, { fallbackDescription: x.description, fallbackName: x.name }), {
            className: "icon-sm",
          })),
          (h[4] = x.description),
          (h[5] = x.name),
          (h[6] = l))
        : (l = h[6])
      let P = l
      return (
        h[7] !== S
          ? ((n = (e) => {
              ;(e.stopPropagation(), S())
            }),
            (h[7] = S),
            (h[8] = n))
          : (n = h[8]),
        h[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = (0, a.jsx)(o.A, {
              id: "skills.computerHistorySuggestions.createSkill",
              defaultMessage: "Create skill",
              description: "Button for creating a skill suggested from Computer History",
            })),
            (h[9] = d))
          : (d = h[9]),
        h[10] !== n
          ? ((c = (0, a.jsx)(k.$, { color: "secondary", size: "composer", onClick: n, children: d })),
            (h[10] = n),
            (h[11] = c))
          : (c = h[11]),
        h[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = (0, a.jsx)(o.A, {
              id: "skills.computerHistorySuggestions.createSkill",
              defaultMessage: "Create skill",
              description: "Button for creating a skill suggested from Computer History",
            })),
            (h[12] = u))
          : (u = h[12]),
        h[13] !== S
          ? ((p = (0, a.jsx)("div", {
              className: "flex w-full justify-end",
              children: (0, a.jsx)(k.$, { color: "primary", size: "toolbar", onClick: S, children: u }),
            })),
            (h[13] = S),
            (h[14] = p))
          : (p = h[14]),
        h[15] !== x.name
          ? ((g = (0, a.jsx)(w.Rv, { kind: "Skill", title: x.name })), (h[15] = x.name), (h[16] = g))
          : (g = h[16]),
        h[17] !== b ||
        h[18] !== P ||
        h[19] !== x.description ||
        h[20] !== x.name ||
        h[21] !== c ||
        h[22] !== p ||
        h[23] !== g
          ? ((m = (0, a.jsx)(M.C, {
              cardActions: c,
              cardDescription: x.description,
              cardIcon: P,
              cardTitle: x.name,
              isHighlighted: b,
              modalBody: null,
              modalDescription: x.description,
              modalFooter: p,
              modalTitle: g,
              modalTitleText: x.name,
            })),
            (h[17] = b),
            (h[18] = P),
            (h[19] = x.description),
            (h[20] = x.name),
            (h[21] = c),
            (h[22] = p),
            (h[23] = g),
            (h[24] = m))
          : (m = h[24]),
        m
      )
    }
    var S = l("mIfQ"),
      P = l("f22a")
    function I(e) {
      let t,
        l,
        n,
        d,
        g,
        m,
        h,
        f,
        x,
        b,
        v,
        y,
        k = (0, s.c)(100),
        {
          canInstallRecommendedSkills: j,
          errorMessage: C,
          installedStateAction: M,
          installedSkillGroups: w,
          installedSkills: A,
          installedSkillsForRecommendedActions: S,
          installedRecommendedSkillIds: I,
          highlightedInstalledSkillPath: N,
          highlightedRecommendedSkillId: T,
          highlightedSuggestedSkillId: R,
          hostId: H,
          installingSkillId: D,
          isLoadingInstalledSkills: O,
          isLoadingRecommendedSkills: V,
          onInstallRecommendedSkill: z,
          onInstalledRecommendedSkillUpdated: B,
          onSelectSection: F,
          onSkillsUpdated: $,
          recommendedRepoRoot: q,
          recommendedSkills: Q,
          roots: Y,
          selectedSectionId: K,
          suggestedSkills: W,
          searchResultsTitle: G,
          installedSection: Z,
          recommendedSection: X,
        } = e,
        J = void 0 === M ? "check" : M,
        ee = (0, r.A)(),
        et = (0, i.useRef)(null)
      ;(k[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((t = () => {
            et.current = null
          }),
          (k[0] = t))
        : (t = k[0]),
        (0, i.useLayoutEffect)(t),
        k[1] !== B
          ? ((l = (e) => {
              ;((et.current = e ?? null), B())
            }),
            (k[1] = B),
            (k[2] = l))
          : (l = k[2]))
      let el = l
      k[3] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = (e, t) => {
            et.current === e &&
              ((et.current = null), t.ownerDocument.activeElement === t.ownerDocument.body && t.focus())
          }),
          (k[3] = n))
        : (n = k[3])
      let ea = n
      if (k[4] !== I || k[5] !== S || k[6] !== Q) {
        let e
        ;(k[8] !== I || k[9] !== S
          ? ((e = (e) => {
              let t = I.has(e.id)
              return {
                installedSkill: t ? (0, P.gQ)({ installedSkills: S, skill: e }) : null,
                isInstalled: t,
                skill: e,
              }
            }),
            (k[8] = I),
            (k[9] = S),
            (k[10] = e))
          : (e = k[10]),
          (d = Q.map(e)),
          (k[4] = I),
          (k[5] = S),
          (k[6] = Q),
          (k[7] = d))
      } else d = k[7]
      let es = d,
        en = null != Z && (w.length > 0 || A.length > 0),
        ei = null != X && es.length > 0
      if (!O && !V && null == C && !en && !ei && 0 === W.length) {
        let e
        return (
          k[11] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, a.jsx)(c.A, {
                  title: (0, a.jsx)(o.A, {
                    id: "skills.appsPage.empty.skills",
                    defaultMessage: "No skills found",
                    description: "Empty state title when no skills match filters on the Skills & Apps page",
                  }),
                }),
              })),
              (k[11] = e))
            : (e = k[11]),
          e
        )
      }
      if (null != G) {
        let e, t, l
        return (
          k[12] !== R || k[13] !== W
            ? ((e = (0, a.jsx)(E, { highlightedSuggestionId: R, suggestions: W })),
              (k[12] = R),
              (k[13] = W),
              (k[14] = e))
            : (e = k[14]),
          k[15] !== j ||
          k[16] !== C ||
          k[17] !== el ||
          k[18] !== N ||
          k[19] !== T ||
          k[20] !== H ||
          k[21] !== A ||
          k[22] !== J ||
          k[23] !== D ||
          k[24] !== O ||
          k[25] !== V ||
          k[26] !== z ||
          k[27] !== $ ||
          k[28] !== q ||
          k[29] !== es ||
          k[30] !== Y ||
          k[31] !== G
            ? ((t =
                A.length > 0 || es.length > 0
                  ? (0, a.jsx)(u.L, {
                      count: A.length + es.length,
                      id: "skills-search-results",
                      title: G,
                      children: (0, a.jsxs)("div", {
                        className: "flex flex-col gap-3",
                        children: [
                          A.length > 0
                            ? (0, a.jsx)(_, {
                                onCardMount: ea,
                                hostId: H,
                                installedStateAction: J,
                                highlightedSkillPath: N,
                                isLoading: O,
                                roots: Y,
                                skillEntries: A,
                                onSkillsUpdated: $,
                              })
                            : null,
                          es.length > 0
                            ? (0, a.jsx)(U, {
                                canInstall: j,
                                errorMessage: C,
                                highlightInstalledSkills: !1,
                                hostId: H,
                                highlightedSkillId: T,
                                entries: es,
                                installingSkillId: D,
                                isLoading: V,
                                onInstall: z,
                                onSkillsUpdated: el,
                                repoRoot: q,
                                roots: Y,
                                showAll: !0,
                              })
                            : null,
                        ],
                      }),
                    })
                  : null),
              (k[15] = j),
              (k[16] = C),
              (k[17] = el),
              (k[18] = N),
              (k[19] = T),
              (k[20] = H),
              (k[21] = A),
              (k[22] = J),
              (k[23] = D),
              (k[24] = O),
              (k[25] = V),
              (k[26] = z),
              (k[27] = $),
              (k[28] = q),
              (k[29] = es),
              (k[30] = Y),
              (k[31] = G),
              (k[32] = t))
            : (t = k[32]),
          k[33] !== e || k[34] !== t
            ? ((l = (0, a.jsxs)("div", { className: "flex flex-1 flex-col gap-8 pb-panel", children: [e, t] })),
              (k[33] = e),
              (k[34] = t),
              (k[35] = l))
            : (l = k[35]),
          l
        )
      }
      if (
        k[36] !== R ||
        k[37] !== H ||
        k[38] !== Z ||
        k[39] !== w ||
        k[40] !== A ||
        k[41] !== J ||
        k[42] !== ee ||
        k[43] !== O ||
        k[44] !== F ||
        k[45] !== $ ||
        k[46] !== X ||
        k[47] !== Y ||
        k[48] !== K ||
        k[49] !== W
      ) {
        let e,
          t = (function (e, t) {
            let l = []
            for (let t of e) l.push({ id: t.id, label: t.title })
            return (null != t && l.push({ id: t.id, label: t.title }), l)
          })(w, X)
        if (k[55] !== w || k[56] !== K) {
          let t
          ;(k[58] !== K ? ((t = (e) => e.id === K), (k[58] = K), (k[59] = t)) : (t = k[59]),
            (e = w.find(t)),
            (k[55] = w),
            (k[56] = K),
            (k[57] = e))
        } else e = k[57]
        ;((g = e),
          (m = "flex flex-1 flex-col gap-8 pb-panel"),
          k[60] !== R || k[61] !== W
            ? ((h = (0, a.jsx)(E, { highlightedSuggestionId: R, suggestions: W })),
              (k[60] = R),
              (k[61] = W),
              (k[62] = h))
            : (h = k[62]),
          k[63] !== H || k[64] !== Z || k[65] !== A || k[66] !== J || k[67] !== O || k[68] !== $ || k[69] !== Y
            ? ((f =
                null != Z
                  ? (0, a.jsx)(u.L, {
                      id: Z.id,
                      title: (0, a.jsx)(o.A, {
                        id: "skills.appsPage.section.installedSkillsOverview",
                        defaultMessage: "Installed",
                        description: "Heading for skills installed in Codex",
                      }),
                      children: (0, a.jsx)(_, {
                        onCardMount: ea,
                        hostId: H,
                        installedStateAction: J,
                        isLoading: O,
                        maxVisibleSkills: 6,
                        roots: Y,
                        skillEntries: A,
                        onSkillsUpdated: $,
                      }),
                    })
                  : null),
              (k[63] = H),
              (k[64] = Z),
              (k[65] = A),
              (k[66] = J),
              (k[67] = O),
              (k[68] = $),
              (k[69] = Y),
              (k[70] = f))
            : (f = k[70]),
          (x =
            t.length > 0 && null != K
              ? (0, a.jsx)(p.t, {
                  className: "mb-2",
                  variant: "browse",
                  scrollable: !0,
                  ariaLabel: ee.formatMessage({
                    id: "skills.appsPage.skillDirectoryTabs.ariaLabel",
                    defaultMessage: "Skill directory",
                    description: "Accessible label for skill sections on the Skills page",
                  }),
                  tabs: t.map(L),
                  selectedKey: K,
                  onSelect: F,
                })
              : null),
          (k[36] = R),
          (k[37] = H),
          (k[38] = Z),
          (k[39] = w),
          (k[40] = A),
          (k[41] = J),
          (k[42] = ee),
          (k[43] = O),
          (k[44] = F),
          (k[45] = $),
          (k[46] = X),
          (k[47] = Y),
          (k[48] = K),
          (k[49] = W),
          (k[50] = g),
          (k[51] = m),
          (k[52] = h),
          (k[53] = f),
          (k[54] = x))
      } else ((g = k[50]), (m = k[51]), (h = k[52]), (f = k[53]), (x = k[54]))
      return (
        k[71] !== N || k[72] !== H || k[73] !== J || k[74] !== O || k[75] !== $ || k[76] !== Y || k[77] !== g
          ? ((b =
              null != g
                ? (0, a.jsx)(_, {
                    onCardMount: ea,
                    hostId: H,
                    installedStateAction: J,
                    highlightedSkillPath: N,
                    isLoading: O,
                    maxVisibleSkills: 6,
                    onSkillsUpdated: $,
                    roots: Y,
                    skillEntries: g.skillEntries,
                  })
                : null),
            (k[71] = N),
            (k[72] = H),
            (k[73] = J),
            (k[74] = O),
            (k[75] = $),
            (k[76] = Y),
            (k[77] = g),
            (k[78] = b))
          : (b = k[78]),
        k[79] !== j ||
        k[80] !== C ||
        k[81] !== el ||
        k[82] !== T ||
        k[83] !== H ||
        k[84] !== D ||
        k[85] !== V ||
        k[86] !== z ||
        k[87] !== q ||
        k[88] !== X?.id ||
        k[89] !== es ||
        k[90] !== Y ||
        k[91] !== K
          ? ((v =
              X?.id === K
                ? (0, a.jsx)(U, {
                    canInstall: j,
                    errorMessage: C,
                    highlightInstalledSkills: !0,
                    hostId: H,
                    highlightedSkillId: T,
                    entries: es,
                    installingSkillId: D,
                    isLoading: V,
                    onInstall: z,
                    onSkillsUpdated: el,
                    repoRoot: q,
                    roots: Y,
                  })
                : null),
            (k[79] = j),
            (k[80] = C),
            (k[81] = el),
            (k[82] = T),
            (k[83] = H),
            (k[84] = D),
            (k[85] = V),
            (k[86] = z),
            (k[87] = q),
            (k[88] = X?.id),
            (k[89] = es),
            (k[90] = Y),
            (k[91] = K),
            (k[92] = v))
          : (v = k[92]),
        k[93] !== b || k[94] !== v || k[95] !== m || k[96] !== h || k[97] !== f || k[98] !== x
          ? ((y = (0, a.jsxs)("div", { className: m, children: [h, f, x, b, v] })),
            (k[93] = b),
            (k[94] = v),
            (k[95] = m),
            (k[96] = h),
            (k[97] = f),
            (k[98] = x),
            (k[99] = y))
          : (y = k[99]),
        y
      )
    }
    function L(e) {
      let { id: t, label: l } = e
      return { key: t, name: l }
    }
    function E(e) {
      let t,
        l,
        r,
        c,
        p,
        g,
        m,
        h,
        f = (0, s.c)(24),
        { highlightedSuggestionId: x, suggestions: b } = e,
        { unreadSkillsSuggestions: y } = (0, n.Ul)(d.cx)
      f[0] !== y ? ((t = () => new Set(y.map(N))), (f[0] = y), (f[1] = t)) : (t = f[1])
      let [k] = (0, i.useState)(t)
      if (0 === b.length) return null
      if (f[2] !== k || f[3] !== b || f[4] !== y) {
        let e
        ;(f[6] !== k || f[7] !== y
          ? ((e = (e) => {
              let { id: t } = e
              return k.has(t) || y.some((e) => e.id === t)
            }),
            (f[6] = k),
            (f[7] = y),
            (f[8] = e))
          : (e = f[8]),
          (l = b.some(e)),
          (f[2] = k),
          (f[3] = b),
          (f[4] = y),
          (f[5] = l))
      } else l = f[5]
      let j = l
      if (
        (f[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((r = (0, a.jsx)(o.A, {
              id: "skills.computerHistorySuggestions.sectionTitle",
              defaultMessage: "Based on your Computer History",
              description: "Heading for personalized skills suggested from the user's Computer History",
            })),
            (f[9] = r))
          : (r = f[9]),
        f[10] !== j
          ? ((c = j
              ? (0, a.jsx)("span", {
                  "aria-hidden": !0,
                  className: "ms-0.5 size-1.5 shrink-0 rounded-full bg-text-info",
                })
              : null),
            (f[10] = j),
            (f[11] = c))
          : (c = f[11]),
        f[12] !== c ? ((p = (0, a.jsxs)(a.Fragment, { children: [r, c] })), (f[12] = c), (f[13] = p)) : (p = f[13]),
        f[14] !== x || f[15] !== b)
      ) {
        let e
        ;(f[17] !== x
          ? ((e = (e) => (0, a.jsx)(A, { isHighlighted: e.id === x, suggestion: e }, e.id)), (f[17] = x), (f[18] = e))
          : (e = f[18]),
          (g = b.map(e)),
          (f[14] = x),
          (f[15] = b),
          (f[16] = g))
      } else g = f[16]
      return (
        f[19] !== g ? ((m = (0, a.jsx)(v.q, { children: g })), (f[19] = g), (f[20] = m)) : (m = f[20]),
        f[21] !== p || f[22] !== m
          ? ((h = (0, a.jsx)(u.L, { id: "computer-history-suggested-skills", title: p, children: m })),
            (f[21] = p),
            (f[22] = m),
            (f[23] = h))
          : (h = f[23]),
        h
      )
    }
    function N(e) {
      let { id: t } = e
      return t
    }
    function _(e) {
      let t,
        l,
        n,
        i = (0, s.c)(39),
        {
          gap: r,
          hostId: d,
          highlightedSkillPath: u,
          installedStateAction: p,
          isLoading: g,
          isSingleColumn: h,
          maxVisibleSkills: f,
          roots: x,
          skillEntries: b,
          useCompactEmptyState: v,
          onCardMount: y,
          onSkillsUpdated: k,
        } = e,
        j = void 0 === p ? "check" : p,
        C = void 0 !== h && h,
        M = void 0 !== v && v
      if (g) {
        let e
        return (
          i[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, a.jsx)(m.j, {
                  children: (0, a.jsx)(o.A, {
                    id: "skills.page.loading",
                    defaultMessage: "Loading skills…",
                    description: "Loading label on the skills page",
                  }),
                }),
              })),
              (i[0] = e))
            : (e = i[0]),
          e
        )
      }
      if (0 === b.length) {
        let e
        return (
          i[1] !== M
            ? ((e = (0, a.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: M
                  ? (0, a.jsx)("div", {
                      className: "text-sm text-secondary",
                      children: (0, a.jsx)(o.A, {
                        id: "skills.appsPage.empty.skills",
                        defaultMessage: "No skills found",
                        description: "Empty state title when no skills match filters on the Skills & Apps page",
                      }),
                    })
                  : (0, a.jsx)(c.A, {
                      title: (0, a.jsx)(o.A, {
                        id: "skills.appsPage.empty.skills",
                        defaultMessage: "No skills found",
                        description: "Empty state title when no skills match filters on the Skills & Apps page",
                      }),
                    }),
              })),
              (i[1] = M),
              (i[2] = e))
            : (e = i[2]),
          e
        )
      }
      if (null == f) {
        let e,
          t = r ?? "default"
        return (
          i[3] !== u ||
          i[4] !== d ||
          i[5] !== j ||
          i[6] !== C ||
          i[7] !== y ||
          i[8] !== k ||
          i[9] !== x ||
          i[10] !== b ||
          i[11] !== t
            ? ((e = (0, a.jsx)(H, {
                onCardMount: y,
                gap: t,
                hostId: d,
                highlightedSkillPath: u,
                installedStateAction: j,
                isSingleColumn: C,
                roots: x,
                skillEntries: b,
                onSkillsUpdated: k,
              })),
              (i[3] = u),
              (i[4] = d),
              (i[5] = j),
              (i[6] = C),
              (i[7] = y),
              (i[8] = k),
              (i[9] = x),
              (i[10] = b),
              (i[11] = t),
              (i[12] = e))
            : (e = i[12]),
          e
        )
      }
      i[13] !== f || i[14] !== b.length
        ? ((t = $({ itemCount: b.length, visibleItemLimit: f })), (i[13] = f), (i[14] = b.length), (i[15] = t))
        : (t = i[15])
      let w = t
      if (null == w) {
        let e,
          t = r ?? "default"
        return (
          i[16] !== u ||
          i[17] !== d ||
          i[18] !== j ||
          i[19] !== C ||
          i[20] !== y ||
          i[21] !== k ||
          i[22] !== x ||
          i[23] !== b ||
          i[24] !== t
            ? ((e = (0, a.jsx)(H, {
                onCardMount: y,
                gap: t,
                hostId: d,
                highlightedSkillPath: u,
                installedStateAction: j,
                isSingleColumn: C,
                roots: x,
                skillEntries: b,
                onSkillsUpdated: k,
              })),
              (i[16] = u),
              (i[17] = d),
              (i[18] = j),
              (i[19] = C),
              (i[20] = y),
              (i[21] = k),
              (i[22] = x),
              (i[23] = b),
              (i[24] = t),
              (i[25] = e))
            : (e = i[25]),
          e
        )
      }
      return (
        i[26] !== r ||
        i[27] !== u ||
        i[28] !== d ||
        i[29] !== j ||
        i[30] !== C ||
        i[31] !== y ||
        i[32] !== k ||
        i[33] !== x
          ? ((l = (e) =>
              (0, a.jsx)(H, {
                onCardMount: y,
                gap: r ?? "compact",
                hostId: d,
                highlightedSkillPath: u,
                installedStateAction: j,
                isSingleColumn: C,
                roots: x,
                skillEntries: e,
                onSkillsUpdated: k,
              })),
            (i[26] = r),
            (i[27] = u),
            (i[28] = d),
            (i[29] = j),
            (i[30] = C),
            (i[31] = y),
            (i[32] = k),
            (i[33] = x),
            (i[34] = l))
          : (l = i[34]),
        i[35] !== b || i[36] !== l || i[37] !== w
          ? ((n = (0, a.jsx)(S.Q, { items: b, visibleItemLimit: w, renderExpandRow: T, children: l })),
            (i[35] = b),
            (i[36] = l),
            (i[37] = w),
            (i[38] = n))
          : (n = i[38]),
        n
      )
    }
    function T(e) {
      let { hiddenItems: t, isExpanded: l, onToggle: s } = e
      return (0, a.jsx)(F, { isExpanded: l, skillNames: t.map(R), onClick: s })
    }
    function R(e) {
      let { skill: t } = e
      return (0, b.nf)(t)
    }
    function H(e) {
      let t,
        l,
        n = (0, s.c)(19),
        {
          gap: i,
          hostId: r,
          highlightedSkillPath: o,
          installedStateAction: d,
          isSingleColumn: c,
          roots: u,
          skillEntries: p,
          onCardMount: g,
          onSkillsUpdated: m,
        } = e,
        h = void 0 === i ? "default" : i
      if (n[0] !== o || n[1] !== r || n[2] !== d || n[3] !== g || n[4] !== m || n[5] !== u || n[6] !== p) {
        let e
        ;(n[8] !== o || n[9] !== r || n[10] !== d || n[11] !== g || n[12] !== m || n[13] !== u
          ? ((e = (e) => {
              let { skill: t } = e
              return (0, a.jsx)(
                D,
                {
                  installedStateAction: d,
                  hostId: r,
                  isHighlighted: o === t.path,
                  onCardMount: g,
                  onSkillsUpdated: m,
                  roots: u,
                  skill: t,
                },
                t.path,
              )
            }),
            (n[8] = o),
            (n[9] = r),
            (n[10] = d),
            (n[11] = g),
            (n[12] = m),
            (n[13] = u),
            (n[14] = e))
          : (e = n[14]),
          (t = p.map(e)),
          (n[0] = o),
          (n[1] = r),
          (n[2] = d),
          (n[3] = g),
          (n[4] = m),
          (n[5] = u),
          (n[6] = p),
          (n[7] = t))
      } else t = n[7]
      return (
        n[15] !== h || n[16] !== c || n[17] !== t
          ? ((l = (0, a.jsx)(v.q, { gap: h, isSingleColumn: c, children: t })),
            (n[15] = h),
            (n[16] = c),
            (n[17] = t),
            (n[18] = l))
          : (l = n[18]),
        l
      )
    }
    function D(e) {
      let t,
        l,
        n,
        o,
        d,
        c,
        u,
        p = (0, s.c)(28),
        {
          hostId: g,
          installedStateAction: m,
          isHighlighted: f,
          onCardMount: v,
          onSkillsUpdated: y,
          roots: k,
          skill: j,
        } = e,
        C = (0, r.A)(),
        M = (0, i.useRef)(null)
      p[0] !== m || p[1] !== C || p[2] !== k || p[3] !== j
        ? ((t = "toggle" === m ? (0, h.IG)({ skill: j, roots: k, intl: C }) : void 0),
          (p[0] = m),
          (p[1] = C),
          (p[2] = k),
          (p[3] = j),
          (p[4] = t))
        : (t = p[4])
      let w = t
      ;(p[5] !== m || p[6] !== v || p[7] !== j
        ? ((l = (e) => {
            ;((M.current = e), null != e && "menu" !== m && v?.(j.path, e))
          }),
          (p[5] = m),
          (p[6] = v),
          (p[7] = j),
          (p[8] = l))
        : (l = p[8]),
        p[9] !== m ? ((n = "toggle" === m ? (0, a.jsx)(O, {}) : void 0), (p[9] = m), (p[10] = n)) : (n = p[10]))
      let A = "toggle" !== m
      return (
        p[11] !== j ? ((o = (0, b.nf)(j)), (p[11] = j), (p[12] = o)) : (o = p[12]),
        p[13] !== y || p[14] !== j
          ? ((d = (e, t) => {
              let l = M.current
              if (t && null != l) {
                let t = l.ownerDocument.activeElement
                if (t === l.ownerDocument.body || l.contains(t)) return void y(e, j.path)
              }
              y(e)
            }),
            (p[13] = y),
            (p[14] = j),
            (p[15] = d))
          : (d = p[15]),
        p[16] === Symbol.for("react.memo_cache_sentinel") ? ((c = []), (p[16] = c)) : (c = p[16]),
        p[17] !== w ||
        p[18] !== g ||
        p[19] !== m ||
        p[20] !== f ||
        p[21] !== j ||
        p[22] !== l ||
        p[23] !== n ||
        p[24] !== A ||
        p[25] !== o ||
        p[26] !== d
          ? ((u = (0, a.jsx)(x.A, {
              cardRef: l,
              cardIcon: n,
              cardIconContainer: A,
              actionLabel: w,
              displayName: o,
              hostId: g,
              installedStateAction: m,
              isHighlighted: f,
              onSkillsUpdated: d,
              scopeBadges: c,
              skill: j,
            })),
            (p[17] = w),
            (p[18] = g),
            (p[19] = m),
            (p[20] = f),
            (p[21] = j),
            (p[22] = l),
            (p[23] = n),
            (p[24] = A),
            (p[25] = o),
            (p[26] = d),
            (p[27] = u))
          : (u = p[27]),
        u
      )
    }
    function O() {
      let e,
        t = (0, s.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, a.jsx)("span", {
              className:
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-default text-secondary",
              children: (0, a.jsx)(g.A, { className: "icon-sm" }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    function U(e) {
      let t,
        l = (0, s.c)(17),
        {
          canInstall: n,
          entries: i,
          errorMessage: r,
          highlightInstalledSkills: d,
          hostId: u,
          highlightedSkillId: p,
          installingSkillId: g,
          isLoading: h,
          onInstall: f,
          onSkillsUpdated: x,
          repoRoot: b,
          roots: v,
          showAll: y,
        } = e,
        k = void 0 !== y && y
      if (h) {
        let e
        return (
          l[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, a.jsx)(m.j, {
                  children: (0, a.jsx)(o.A, {
                    id: "skills.page.loading",
                    defaultMessage: "Loading skills…",
                    description: "Loading label on the skills page",
                  }),
                }),
              })),
              (l[0] = e))
            : (e = l[0]),
          e
        )
      }
      if (r) {
        let e, t
        return (
          l[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)(o.A, {
                id: "skills.recommended.error",
                defaultMessage: "Unable to load recommended skills",
                description: "Error title when recommended skills fail to load",
              })),
              (l[1] = e))
            : (e = l[1]),
          l[2] !== r
            ? ((t = (0, a.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, a.jsx)(c.A, { title: e, description: r }),
              })),
              (l[2] = r),
              (l[3] = t))
            : (t = l[3]),
          t
        )
      }
      if (0 === i.length) {
        let e
        return (
          l[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((e = (0, a.jsx)("div", {
                className: "flex min-h-0 flex-1 items-center justify-center py-8",
                children: (0, a.jsx)(c.A, {
                  title: (0, a.jsx)(o.A, {
                    id: "skills.appsPage.empty.skills",
                    defaultMessage: "No skills found",
                    description: "Empty state title when no skills match filters on the Skills & Apps page",
                  }),
                }),
              })),
              (l[4] = e))
            : (e = l[4]),
          e
        )
      }
      return (
        l[5] !== n ||
        l[6] !== i ||
        l[7] !== d ||
        l[8] !== p ||
        l[9] !== u ||
        l[10] !== g ||
        l[11] !== f ||
        l[12] !== x ||
        l[13] !== b ||
        l[14] !== v ||
        l[15] !== k
          ? ((t = (0, a.jsx)(a.Fragment, {
              children: k
                ? (0, a.jsx)(B, {
                    canInstall: n,
                    entries: i,
                    highlightInstalledSkills: d,
                    hostId: u,
                    highlightedSkillId: p,
                    installingSkillId: g,
                    onInstall: f,
                    onSkillsUpdated: x,
                    repoRoot: b,
                    roots: v,
                  })
                : (0, a.jsx)(S.Q, {
                    items: i,
                    visibleItemLimit: $({ itemCount: i.length, visibleItemLimit: 6 }) ?? i.length,
                    renderExpandRow: V,
                    children: (e) =>
                      (0, a.jsx)(B, {
                        canInstall: n,
                        entries: e,
                        highlightInstalledSkills: d,
                        hostId: u,
                        highlightedSkillId: p,
                        installingSkillId: g,
                        onInstall: f,
                        onSkillsUpdated: x,
                        repoRoot: b,
                        roots: v,
                      }),
                  }),
            })),
            (l[5] = n),
            (l[6] = i),
            (l[7] = d),
            (l[8] = p),
            (l[9] = u),
            (l[10] = g),
            (l[11] = f),
            (l[12] = x),
            (l[13] = b),
            (l[14] = v),
            (l[15] = k),
            (l[16] = t))
          : (t = l[16]),
        t
      )
    }
    function V(e) {
      let { hiddenItems: t, isExpanded: l, onToggle: s } = e
      return (0, a.jsx)(F, { isExpanded: l, skillNames: t.map(z), onClick: s })
    }
    function z(e) {
      let { skill: t } = e
      return t.name
    }
    function B(e) {
      let t,
        l,
        n = (0, s.c)(23),
        {
          canInstall: i,
          entries: r,
          highlightInstalledSkills: o,
          hostId: d,
          highlightedSkillId: c,
          installingSkillId: u,
          onInstall: p,
          onSkillsUpdated: g,
          repoRoot: m,
          roots: h,
        } = e
      if (
        n[0] !== i ||
        n[1] !== r ||
        n[2] !== o ||
        n[3] !== c ||
        n[4] !== d ||
        n[5] !== u ||
        n[6] !== p ||
        n[7] !== g ||
        n[8] !== m ||
        n[9] !== h
      ) {
        let e
        ;(n[11] !== i ||
        n[12] !== o ||
        n[13] !== c ||
        n[14] !== d ||
        n[15] !== u ||
        n[16] !== p ||
        n[17] !== g ||
        n[18] !== m ||
        n[19] !== h
          ? ((e = (e) => {
              let { installedSkill: t, isInstalled: l, skill: s } = e
              return null != t
                ? (0, a.jsx)(
                    D,
                    {
                      hostId: d,
                      installedStateAction: "menu",
                      isHighlighted: o || c === s.id,
                      onSkillsUpdated: (e, t) => {
                        e && g(t)
                      },
                      roots: h,
                      skill: t,
                    },
                    s.id,
                  )
                : (0, a.jsx)(
                    f.D,
                    {
                      canInstall: i,
                      hostId: d,
                      isHighlighted: l || c === s.id,
                      isInstalled: l,
                      isInstalling: u === s.id,
                      onInstall: p,
                      repoRoot: m,
                      skill: s,
                    },
                    s.id,
                  )
            }),
            (n[11] = i),
            (n[12] = o),
            (n[13] = c),
            (n[14] = d),
            (n[15] = u),
            (n[16] = p),
            (n[17] = g),
            (n[18] = m),
            (n[19] = h),
            (n[20] = e))
          : (e = n[20]),
          (t = r.map(e)),
          (n[0] = i),
          (n[1] = r),
          (n[2] = o),
          (n[3] = c),
          (n[4] = d),
          (n[5] = u),
          (n[6] = p),
          (n[7] = g),
          (n[8] = m),
          (n[9] = h),
          (n[10] = t))
      } else t = n[10]
      return (
        n[21] !== t ? ((l = (0, a.jsx)(v.q, { gap: "compact", children: t })), (n[21] = t), (n[22] = l)) : (l = n[22]),
        l
      )
    }
    function F(e) {
      let t,
        l,
        n,
        i = (0, s.c)(9),
        { isExpanded: r, skillNames: d, onClick: c } = e
      i[0] !== d ? ((t = d.slice(0, 2).join(", ")), (i[0] = d), (i[1] = t)) : (t = i[1])
      let u = Math.max(d.length - 2, 0)
      return (
        i[2] !== t || i[3] !== u
          ? ((l = (0, a.jsx)(o.A, {
              id: "skills.appsPage.section.seeAllSkillsDescription",
              defaultMessage: "See {skillNames}{remainingCount, plural, =0 {} one {, and # more} other {, and # more}}",
              description:
                "Label for the row that expands a skill section, previewing the next skills and the number of additional skills",
              values: { skillNames: t, remainingCount: u },
            })),
            (i[2] = t),
            (i[3] = u),
            (i[4] = l))
          : (l = i[4]),
        i[5] !== r || i[6] !== c || i[7] !== l
          ? ((n = (0, a.jsx)(S.s, { isExpanded: r, onClick: c, children: l })),
            (i[5] = r),
            (i[6] = c),
            (i[7] = l),
            (i[8] = n))
          : (n = i[8]),
        n
      )
    }
    function $({ itemCount: e, visibleItemLimit: t }) {
      return e - t >= 3 ? t : void 0
    }
  },
}
//# sourceMappingURL=548929.7a0b4cbb28.js.map
