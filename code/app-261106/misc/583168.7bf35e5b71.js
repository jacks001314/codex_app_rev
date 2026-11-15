export const __rspack_esm_ids = [583168]
export const __webpack_modules__ = {
  VcaB(e, t, a) {
    a.d(
      t,
      {},
      {
        F: { $type: "protobuf_analytics_events.v1.ChatgptCmeHomeEntryClicked" },
        k: { $type: "protobuf_analytics_events.v1.ChatgptCmeClaimSubmitted" },
      },
    )
  },
  oUPQ(e, t, a) {
    a.d(t, { z: () => o })
    var i = a("ABep"),
      l = a("on57"),
      n = a("Hg3i"),
      s = a("zd8w")
    let r = (0, s.createContext)(null),
      o = ({
        onChange: e,
        children: t,
        className: a,
        direction: o = "row",
        variant: c = "default",
        disabled: d = !1,
        __isWidget: u,
        ...m
      }) => {
        let p = (0, s.useMemo)(() => ({ disabled: d, direction: o, variant: c }), [d, o, c])
        return (0, i.jsx)(r, {
          value: p,
          children: (0, i.jsx)(n.Root, {
            className: (0, l.A)("RadioGroup-qedmT_", a),
            "data-direction": o,
            "data-variant": c,
            orientation: "list" === c ? "vertical" : void 0,
            "data-w-component": u ? "radio-group" : void 0,
            onValueChange: e,
            disabled: d,
            ...m,
            children: t,
          }),
        })
      }
    o.Item = ({ value: e, disabled: t = !1, id: a, required: o, children: c, className: d, block: u = !1, ...m }) => {
      let { disabled: p, variant: x } = (() => {
          let e = (0, s.use)(r)
          if (!e) throw Error("RadioGroup components must be wrapped in <RadioGroup />")
          return e
        })(),
        f = p || t,
        g = (0, s.useId)(),
        h = a ?? `${e}-${g}`
      return (0, i.jsx)("div", {
        className: "RadioOptionWrapper-lfJup3",
        "data-variant": x,
        ...m,
        children: (0, i.jsxs)("label", {
          htmlFor: h,
          className: (0, l.A)("RadioLabel-I_wija", d),
          "data-disabled": f ? "" : void 0,
          "data-block": u ? "" : void 0,
          "data-variant": x,
          onMouseDown: (e) => {
            !e.defaultPrevented && e.detail > 1 && e.preventDefault()
          },
          children: [
            (0, i.jsx)("div", {
              className: "RadioIndicatorWrapper-SWef98",
              children: (0, i.jsx)(n.Item, {
                id: h,
                value: e,
                disabled: f,
                required: o,
                className: "RadioItem-a9cavK",
                children: (0, i.jsx)(n.Indicator, { className: "RadioIndicator-m2hnXY" }),
              }),
            }),
            c,
          ],
        }),
      })
    }
  },
  Y9i8(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      n = a("on57"),
      s = a("LIss"),
      r = a("zd8w")
    a.d(
      t,
      {},
      {
        q: function (e) {
          let t,
            a,
            o,
            c,
            d = (0, l.c)(23),
            { ariaLabel: u, className: m, options: p, selectedId: x, animateSelection: f, size: g, onSelect: h } = e,
            v = void 0 === f || f,
            y = void 0 === g ? "default" : g,
            b = (0, r.useId)(),
            j =
              "compact" === y
                ? "inline-grid gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5"
                : "bg-text/10 inline-grid gap-1 rounded-2xl p-1"
          d[0] !== m || d[1] !== j ? ((t = (0, n.A)(j, m)), (d[0] = m), (d[1] = j), (d[2] = t)) : (t = d[2])
          let C = `repeat(${p.length}, minmax(0, 1fr))`
          if (
            (d[3] !== C ? ((a = { gridTemplateColumns: C }), (d[3] = C), (d[4] = a)) : (a = d[4]),
            d[5] !== v || d[6] !== b || d[7] !== h || d[8] !== p || d[9] !== x || d[10] !== y)
          ) {
            let e
            ;(d[12] !== v || d[13] !== b || d[14] !== h || d[15] !== x || d[16] !== y
              ? ((e = (e) => {
                  let t = e.id === x
                  return (0, i.jsxs)(
                    "button",
                    {
                      className: (0, n.A)(
                        "cursor-interaction relative isolate min-w-0 transition-transform duration-basic active:scale-[0.98]",
                        "compact" === y
                          ? "flex h-6 items-center justify-center rounded-lg px-2 py-0 text-xs leading-4 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0"
                          : "rounded-xl px-3 py-1.5 text-sm font-medium",
                        t ? ("compact" === y && "text-default") || "text-black" : "text-secondary",
                      ),
                      type: "button",
                      "aria-label": e.ariaLabel,
                      "aria-pressed": t,
                      onClick: () => {
                        h(e.id)
                      },
                      children: [
                        t
                          ? (0, i.jsx)(s.P.span, {
                              layoutId: v ? b : void 0,
                              className:
                                "compact" === y
                                  ? "absolute inset-0 -z-10 rounded-lg bg-surface shadow-sm"
                                  : "absolute inset-0 -z-10 rounded-xl bg-white shadow-sm",
                              transition: { type: "spring", duration: 0.28, bounce: 0 },
                            })
                          : null,
                        e.label,
                      ],
                    },
                    e.id,
                  )
                }),
                (d[12] = v),
                (d[13] = b),
                (d[14] = h),
                (d[15] = x),
                (d[16] = y),
                (d[17] = e))
              : (e = d[17]),
              (o = p.map(e)),
              (d[5] = v),
              (d[6] = b),
              (d[7] = h),
              (d[8] = p),
              (d[9] = x),
              (d[10] = y),
              (d[11] = o))
          } else o = d[11]
          return (
            d[18] !== u || d[19] !== t || d[20] !== a || d[21] !== o
              ? ((c = (0, i.jsx)("div", { className: t, role: "group", "aria-label": u, style: a, children: o })),
                (d[18] = u),
                (d[19] = t),
                (d[20] = a),
                (d[21] = o),
                (d[22] = c))
              : (c = d[22]),
            c
          )
        },
      },
    )
  },
  PkPj(e, t, a) {
    var i = a("ABep"),
      l = a("QosV"),
      n = a("on57"),
      s = a("IjbW"),
      r = a("xNuN"),
      o = a("suct"),
      c = a("LIss"),
      d = a("zTeN"),
      u = a("zd8w"),
      m = a("wD9O"),
      p = a("khOd"),
      x = a("HgLj"),
      f = a("MCtJ"),
      g = a("I7bK"),
      h = a("MeAu"),
      v = a("okCa"),
      y = a("DiyT")
    let b = {
      directory: { inset: "pt-24", title: "text-[28px] leading-9 font-semibold" },
      default: { inset: "pt-panel", title: "heading-xl" },
      inset: { inset: "pt-panel", title: "heading-xl" },
      hero: { inset: "pt-4", title: "text-3xl font-bold md:text-5xl" },
      catalog: { inset: "pt-4", title: "heading-xl font-semibold" },
      compact: { inset: "pt-6", title: "heading-lg" },
      profile: { inset: "pt-13", title: "text-heading-app leading-8.5 font-normal tracking-[0.39px]" },
      profileManager: {
        inset: "pt-[var(--business-manager-heading-inset,68px)]",
        title:
          "text-[22px] leading-7 font-semibold @lg/manager:text-heading-app @lg/manager:leading-8.5 @lg/manager:font-normal",
      },
    }
    function j() {
      return document.activeElement
    }
    function C(e, t, a) {
      let i = (0, m.Ud)(Math.max(0, e.getBoundingClientRect().top - t.getBoundingClientRect().top), a)
      t.style.setProperty("--header-background-top-inset", `${i}px`)
    }
    function M(e) {
      let t,
        a,
        s = (0, l.c)(8),
        { children: r, className: o, fadeSize: c, showScrollFade: d, sticky: u } = e,
        m = void 0 === u || u,
        p =
          m &&
          "sticky z-30 after:pointer-events-none after:absolute after:top-full after:right-0 after:left-0 after:bg-linear-to-b after:from-surface after:to-transparent after:content-['']",
        x = m && ("compact" === (void 0 === c ? "default" : c) ? "after:h-2" : "after:h-8"),
        f = m && !(void 0 === d || d) && "after:hidden"
      return (
        s[0] !== o || s[1] !== p || s[2] !== x || s[3] !== f
          ? ((t = (0, n.A)("bg-surface", p, x, f, o)), (s[0] = o), (s[1] = p), (s[2] = x), (s[3] = f), (s[4] = t))
          : (t = s[4]),
        s[5] !== r || s[6] !== t
          ? ((a = (0, i.jsx)("div", { className: t, children: r })), (s[5] = r), (s[6] = t), (s[7] = a))
          : (a = s[7]),
        a
      )
    }
    function w(e) {
      let t,
        a,
        s = (0, l.c)(7),
        { children: r, inset: o, wrap: c, variant: d } = e,
        u = "directory" === (void 0 === d ? "default" : d) ? "pb-4" : "pb-2",
        m = void 0 !== c && c && "flex-wrap",
        p = (void 0 === o || o) && "px-3"
      return (
        s[0] !== u || s[1] !== m || s[2] !== p
          ? ((t = (0, n.A)("flex items-center justify-between gap-4", u, m, p)),
            (s[0] = u),
            (s[1] = m),
            (s[2] = p),
            (s[3] = t))
          : (t = s[3]),
        s[4] !== r || s[5] !== t
          ? ((a = (0, i.jsx)("div", { className: t, children: r })), (s[4] = r), (s[5] = t), (s[6] = a))
          : (a = s[6]),
        a
      )
    }
    a.d(
      t,
      {},
      {
        J1: M,
        Ql: function (e) {
          let t,
            a,
            _,
            A,
            N,
            E,
            S,
            I,
            k,
            T,
            P,
            O,
            R,
            L,
            q,
            z,
            F,
            D,
            $,
            B,
            G,
            Y,
            U,
            H,
            W,
            V,
            K,
            Q,
            Z,
            X,
            J,
            ee,
            et,
            ea = (0, l.c)(211),
            {
              animateContentLayout: ei,
              collapseHeaderOnScroll: el,
              expandSearchWhenWrapped: en,
              banner: es,
              bannerAfterHeader: er,
              bannerPlacement: eo,
              children: ec,
              contentClassName: ed,
              contentInset: eu,
              contentWidth: em,
              controls: ep,
              headerAction: ex,
              headerFade: ef,
              headerPlacement: eg,
              headerVariant: eh,
              horizontalPaddingClassName: ev,
              reserveSelectionGutter: ey,
              balanceScrollbarGutter: eb,
              navigation: ej,
              pageActions: eC,
              scrollContainerRef: eM,
              search: ew,
              searchContent: e_,
              searchPlacement: eA,
              searchToolbar: eN,
              stickyControls: eE,
              subtitle: eS,
              title: eI,
              titleRef: ek,
              toolbarActions: eT,
              toolbarInset: eP,
              wrapActionsAtNarrowWidth: eO,
            } = e,
            eR = void 0 !== el && el,
            eL = void 0 !== en && en,
            eq = void 0 !== er && er,
            ez = void 0 === eu || eu,
            eF = void 0 === em ? "default" : em,
            eD = void 0 === ef ? "always" : ef,
            e$ = void 0 === eg ? "page" : eg,
            eB = void 0 === eh ? "default" : eh,
            eG = void 0 !== ey && ey,
            eY = void 0 !== eb && eb,
            eU = void 0 === eA ? "sticky" : eA,
            eH = void 0 === eP || eP,
            eW = (0, d.Ul)(p.GB),
            eV = (0, m.dz)(),
            eK = "profileManager" === eB,
            eQ = "px-panel"
          ;("profile" === eF
            ? (eQ = eK ? "px-4 @lg/manager:px-16" : "px-5 sm:px-16")
            : "directory" === eF && (eQ = "px-4 md:px-panel"),
            ea[0] !== eF || ea[1] !== eQ || ea[2] !== eB || ea[3] !== ev || ea[4] !== eG
              ? ((t = eG
                  ? "px-18"
                  : (ev ??
                    (0, n.A)(
                      eQ,
                      ("medium" === eF || "extraWide" === eF) && "compact" === eB ? "px-6 lg:px-12" : void 0,
                    ))),
                (ea[0] = eF),
                (ea[1] = eQ),
                (ea[2] = eB),
                (ea[3] = ev),
                (ea[4] = eG),
                (ea[5] = t))
              : (t = ea[5]))
          let eZ = (0, n.A)(
              t,
              eW &&
                (eG
                  ? "[[data-app-shell-compact-page-gutter=true]_&]:px-14"
                  : null == ev && "profile" !== eF && "[[data-app-shell-compact-page-gutter=true]_&]:px-7.5"),
            ),
            [eX] = (0, u.useState)(j),
            [eJ, e0] = (0, u.useState)(!1),
            [e1, e2] = (0, u.useState)(!1),
            e3 = (0, u.useRef)(null),
            e4 = (0, u.useRef)(null),
            e5 = (0, u.useRef)(null),
            [e6, e7] = (0, u.useState)(!1),
            [e8, e9] = (0, u.useState)(),
            te = (0, u.useRef)(null),
            tt = (0, u.useRef)(null)
          ea[6] !== eM ? ((a = (0, x.P)(e3, eM)), (ea[6] = eM), (ea[7] = a)) : (a = ea[7])
          let ta = a,
            ti = (0, u.useRef)(null),
            tl = (0, u.useRef)(null),
            [tn, ts] = (0, u.useState)(),
            tr = document.activeElement,
            to = "none" !== e$,
            tc = "toolbar" === e$,
            td = "scroll" === e$ && e1,
            tu = tc || td,
            tm = b[eB],
            tp = "directory" === eB,
            tx = "compact" === eB,
            tf = "profile" === eB || eK,
            tg = null != ew || null != e_,
            th = "sticky" === e$,
            tv = th && eR,
            ty = th || "inline" === e$,
            tb = "bottom-on-scroll" === eU && tg && !ty,
            tj = eW && !tf && !tp && "browser:max-md:text-lg browser:max-md:font-medium",
            tC = {
              directory: "max-w-[calc(768px+var(--padding-panel)*2)]",
              extraWide: "max-w-[1440px]",
              wide: "max-w-5xl",
              medium: "max-w-[960px]",
              default: "max-w-[var(--thread-content-max-width)]",
              profile: eK ? "max-w-[1144px]" : "max-w-4xl",
            }[eF],
            tM = (!tc && null != ej) || null != eC,
            tw = (0, s.I)()
          ea[8] !== tw ? ((_ = tw ? { duration: 0 } : g.m9), (ea[8] = tw), (ea[9] = _)) : (_ = ea[9])
          let t_ = _,
            tA = ew?.autoFocus ?? (null == tr || tr === document.body || tr === document.documentElement || tr === eX)
          ;(ea[10] !== tb
            ? ((A = () => {
                let e = e3.current,
                  t = e4.current,
                  a = e5.current
                if (!tb || null == e || null == t || null == a) return
                let i = new IntersectionObserver(
                    (e) => {
                      let [t] = e
                      e7(!t.isIntersecting && t.boundingClientRect.bottom <= (t.rootBounds?.top ?? 0))
                    },
                    { root: e },
                  ),
                  l = new ResizeObserver((e) => {
                    let [t] = e,
                      i = t.borderBoxSize?.[0]?.blockSize ?? a.offsetHeight
                    i && e9(i)
                  })
                return (
                  i.observe(t),
                  l.observe(a, { box: "border-box" }),
                  () => {
                    ;(i.disconnect(), l.disconnect())
                  }
                )
              }),
              (N = [tb]),
              (ea[10] = tb),
              (ea[11] = A),
              (ea[12] = N))
            : ((A = ea[11]), (N = ea[12])),
            (0, u.useLayoutEffect)(A, N),
            ea[13] !== tb || ea[14] !== tw
              ? ((E = () => {
                  let e = e5.current
                  if (!tb || null == e) return
                  let t = (0, r.i)(
                    e,
                    { opacity: [0, 1], y: [24, 0] },
                    { type: "tween", ease: "easeInOut", duration: 0.25 * !tw },
                  )
                  return () => t.stop()
                }),
                (ea[13] = tb),
                (ea[14] = tw),
                (ea[15] = E))
              : (E = ea[15]),
            ea[16] !== tb || ea[17] !== e6 || ea[18] !== tw
              ? ((S = [tb, e6, tw]), (ea[16] = tb), (ea[17] = e6), (ea[18] = tw), (ea[19] = S))
              : (S = ea[19]),
            (0, u.useLayoutEffect)(E, S),
            ea[20] !== th || ea[21] !== eW || ea[22] !== eV
              ? ((I = () => {
                  let e = e3.current,
                    t = te.current
                  if (!eW || !th || null == e || null == t) return
                  let a = new ResizeObserver(() => {
                    C(e, t, eV)
                  })
                  return (
                    a.observe(e),
                    a.observe(t),
                    () => {
                      ;(a.disconnect(), t.style.removeProperty("--header-background-top-inset"))
                    }
                  )
                }),
                (k = [eW, th, eV]),
                (ea[20] = th),
                (ea[21] = eW),
                (ea[22] = eV),
                (ea[23] = I),
                (ea[24] = k))
              : ((I = ea[23]), (k = ea[24])),
            (0, u.useLayoutEffect)(I, k),
            ea[25] !== e$
              ? ((T = () => {
                  let e = ti.current,
                    t = e3.current
                  if ("scroll" !== e$ || null == e || null == t) return
                  let a = new IntersectionObserver(
                    (e) => {
                      let [t] = e
                      e2(!t.isIntersecting && t.boundingClientRect.bottom <= (t.rootBounds?.top ?? 0))
                    },
                    { root: t, threshold: 0 },
                  )
                  return (a.observe(e), () => a.disconnect())
                }),
                (P = [e$]),
                (ea[25] = e$),
                (ea[26] = T),
                (ea[27] = P))
              : ((T = ea[26]), (P = ea[27])),
            (0, u.useLayoutEffect)(T, P),
            ea[28] !== e$ || ea[29] !== td
              ? ((O = () => {
                  let e = tl.current
                  if ("scroll" !== e$ || td || null == e) return
                  let t = new ResizeObserver(() => {
                    ts({ width: e.offsetWidth, height: e.offsetHeight })
                  })
                  return (t.observe(e), () => t.disconnect())
                }),
                (R = [e$, td]),
                (ea[28] = e$),
                (ea[29] = td),
                (ea[30] = O),
                (ea[31] = R))
              : ((O = ea[30]), (R = ea[31])),
            (0, u.useLayoutEffect)(O, R))
          let tN =
            null == es
              ? null
              : (0, i.jsx)("div", {
                  className: (0, n.A)(
                    "w-full empty:hidden",
                    "inset" === (void 0 === eo ? "inset" : eo) && ["mx-auto pt-panel", tC, eZ],
                  ),
                  children: es,
                })
          ea[32] !== to ||
          ea[33] !== ex ||
          ea[34] !== eB ||
          ea[35] !== tf ||
          ea[36] !== tc ||
          ea[37] !== ej ||
          ea[38] !== td ||
          ea[39] !== tu ||
          ea[40] !== tj ||
          ea[41] !== eI ||
          ea[42] !== ek ||
          ea[43] !== eT ||
          ea[44] !== eH ||
          ea[45] !== t_
            ? ((L =
                to && (tu || null != eT)
                  ? (0, i.jsx)(f.F, {
                      divider: !tf,
                      children: (0, i.jsxs)(h.oE, {
                        inset: eH,
                        children: [
                          (0, i.jsx)(o.N, {
                            initial: !1,
                            children: tu
                              ? (0, i.jsx)(
                                  c.P.div,
                                  {
                                    animate: { opacity: 1, transform: "translateY(0)" },
                                    className: "min-w-0 flex-1 overflow-hidden",
                                    "data-app-shell-overlay-page-header": (td && null == eT) || void 0,
                                    exit: { opacity: 0, transform: "translateY(4px)" },
                                    initial: { opacity: 0, transform: "translateY(4px)" },
                                    transition: t_,
                                    children:
                                      tc && null != ej
                                        ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                              (0, i.jsx)("h1", { ref: ek, className: "sr-only", children: eI }),
                                              ej,
                                            ],
                                          })
                                        : (0, i.jsx)("h1", {
                                            ref: ek,
                                            className: (0, n.A)(
                                              "min-w-0 truncate text-base text-default electron:font-medium",
                                              tj,
                                              "inset" === eB ? "px-2" : null,
                                            ),
                                            children: eI,
                                          }),
                                  },
                                  "toolbar-heading",
                                )
                              : null,
                          }),
                          null != eT || td
                            ? (0, i.jsxs)("div", {
                                className: "ms-auto flex min-w-0 items-center justify-end gap-2",
                                children: [td ? ex : null, eT],
                              })
                            : null,
                        ],
                      }),
                    })
                  : null),
              (ea[32] = to),
              (ea[33] = ex),
              (ea[34] = eB),
              (ea[35] = tf),
              (ea[36] = tc),
              (ea[37] = ej),
              (ea[38] = td),
              (ea[39] = tu),
              (ea[40] = tj),
              (ea[41] = eI),
              (ea[42] = ek),
              (ea[43] = eT),
              (ea[44] = eH),
              (ea[45] = t_),
              (ea[46] = L))
            : (L = ea[46])
          let tE = tb || !to ? "relative flex h-full min-h-0 flex-1 flex-col" : "contents",
            tS = !to && !eW && "max-md:pt-[var(--height-toolbar)]",
            tI = !to && eW && "browser:max-md:pt-[var(--height-toolbar)]",
            tk = !to && "profile" === eF && "bg-surface-card"
          ea[47] !== tE || ea[48] !== tS || ea[49] !== tI || ea[50] !== tk
            ? ((q = (0, n.A)(tE, tS, tI, tk)), (ea[47] = tE), (ea[48] = tS), (ea[49] = tI), (ea[50] = tk), (ea[51] = q))
            : (q = ea[51])
          let tT = eW || void 0,
            tP = eK && "@container/manager",
            tO = "profile" === eF && "bg-surface-card",
            tR =
              tp &&
              "bg-surface [--color-text:var(--gray-1000)] [--color-surface:light-dark(var(--gray-25),var(--black))]",
            tL = !eY && "[scrollbar-gutter:stable]",
            tq = eY && (tf ? "sm:[scrollbar-gutter:stable_both-edges]" : "md:[scrollbar-gutter:stable_both-edges]"),
            tz = !tb && "relative",
            tF = td && "vertical-scroll-fade-mask-top"
          ea[52] !== tP ||
          ea[53] !== tO ||
          ea[54] !== tR ||
          ea[55] !== tL ||
          ea[56] !== tq ||
          ea[57] !== tz ||
          ea[58] !== tF
            ? ((z = (0, n.A)("h-full min-h-0 flex-1 overflow-x-hidden overflow-y-auto", tP, tO, tR, tL, tq, tz, tF)),
              (ea[52] = tP),
              (ea[53] = tO),
              (ea[54] = tR),
              (ea[55] = tL),
              (ea[56] = tq),
              (ea[57] = tz),
              (ea[58] = tF),
              (ea[59] = z))
            : (z = ea[59])
          let tD = (!tc && null == eT && (!!to || !tf)) || void 0,
            t$ = "inline" === e$ ? eJ : void 0
          ea[60] !== eR ||
          ea[61] !== ty ||
          ea[62] !== tg ||
          ea[63] !== th ||
          ea[64] !== eD ||
          ea[65] !== eU ||
          ea[66] !== e0 ||
          ea[67] !== eW ||
          ea[68] !== eE ||
          ea[69] !== eV
            ? ((F =
                ty || ("when-scrolled" === eD && "sticky" === eU && (tg || null != eE))
                  ? (e) => {
                      let t = te.current,
                        a = tt.current
                      if (eR && !eW && null != t && null != a) {
                        t.style.setProperty("--header-scroll-position", `${e.currentTarget.scrollTop}px`)
                        let i = t.getBoundingClientRect()
                        t.style.setProperty(
                          "--header-scroll-overlap",
                          `${Math.max(0, ((i.bottom - a.getBoundingClientRect().top) * t.offsetHeight) / i.height + parseFloat(getComputedStyle(t).marginBottom))}px`,
                        )
                      }
                      ;(e0(
                        eW && th && null != t
                          ? e.currentTarget.scrollTop > 0 &&
                              t.getBoundingClientRect().top <=
                                e.currentTarget.getBoundingClientRect().top + parseFloat(getComputedStyle(t).top)
                          : e.currentTarget.scrollTop > 0,
                      ),
                        eW && th && null != t && C(e.currentTarget, t, eV))
                    }
                  : void 0),
              (ea[60] = eR),
              (ea[61] = ty),
              (ea[62] = tg),
              (ea[63] = th),
              (ea[64] = eD),
              (ea[65] = eU),
              (ea[66] = e0),
              (ea[67] = eW),
              (ea[68] = eE),
              (ea[69] = eV),
              (ea[70] = F))
            : (F = ea[70])
          let tB = !to && "h-full"
          ;(ea[71] !== tB
            ? ((D = (0, n.A)("flex min-h-full w-full flex-col", tB)), (ea[71] = tB), (ea[72] = D))
            : (D = ea[72]),
            ea[73] !== tb || ea[74] !== e8
              ? (($ = tb ? { paddingBottom: e8 } : void 0), (ea[73] = tb), (ea[74] = e8), (ea[75] = $))
              : ($ = ea[75]))
          let tG = eq && ty ? null : tN
          ;(ea[76] !== eZ ||
          ea[77] !== eL ||
          ea[78] !== ty ||
          ea[79] !== tg ||
          ea[80] !== th ||
          ea[81] !== ex ||
          ea[82] !== tm ||
          ea[83] !== tp ||
          ea[84] !== eJ ||
          ea[85] !== ew ||
          ea[86] !== e_ ||
          ea[87] !== eN ||
          ea[88] !== tA ||
          ea[89] !== tv ||
          ea[90] !== eW ||
          ea[91] !== tj ||
          ea[92] !== eE ||
          ea[93] !== eS ||
          ea[94] !== eI ||
          ea[95] !== ek ||
          ea[96] !== tC ||
          ea[97] !== eO
            ? ((B = ty
                ? (0, i.jsx)(y.g, {
                    ref: te,
                    className: tC,
                    horizontalPaddingClassName: eZ,
                    presentation: tp ? "directory" : "default",
                    collapseOnScroll: tv,
                    expandSearchWhenWrapped: eL,
                    wrapActionsAtNarrowWidth: eO,
                    showDivider: th && eJ,
                    sticky: th,
                    title:
                      null == eI
                        ? null
                        : (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)("h1", {
                                ref: ek,
                                className: (0, n.A)(
                                  "flex min-h-9 items-center text-default",
                                  eW && "browser:max-md:min-h-0",
                                  tj,
                                  tm.title,
                                ),
                                children: eI,
                              }),
                              null == eS || (eW && !tp)
                                ? null
                                : (0, i.jsx)("div", {
                                    className: (0, n.A)(
                                      "text-base leading-6 text-secondary",
                                      tv && "max-w-lg",
                                      eW && !tp && "browser:max-md:hidden",
                                    ),
                                    children: eS,
                                  }),
                            ],
                          }),
                    actions: tg
                      ? (0, i.jsx)(y.T, {
                          search:
                            e_ ??
                            (null == ew
                              ? null
                              : (0, i.jsx)(v.s, {
                                  ...ew,
                                  autoFocus: tA,
                                  className: (0, n.A)("min-w-0 flex-1", ew.className),
                                })),
                          controls: eN,
                          actions: ex,
                        })
                      : ex,
                    navigation: eW ? void 0 : eE,
                  })
                : null),
              (ea[76] = eZ),
              (ea[77] = eL),
              (ea[78] = ty),
              (ea[79] = tg),
              (ea[80] = th),
              (ea[81] = ex),
              (ea[82] = tm),
              (ea[83] = tp),
              (ea[84] = eJ),
              (ea[85] = ew),
              (ea[86] = e_),
              (ea[87] = eN),
              (ea[88] = tA),
              (ea[89] = tv),
              (ea[90] = eW),
              (ea[91] = tj),
              (ea[92] = eE),
              (ea[93] = eS),
              (ea[94] = eI),
              (ea[95] = ek),
              (ea[96] = tC),
              (ea[97] = eO),
              (ea[98] = B))
            : (B = ea[98]),
            ea[99] !== eZ ||
            ea[100] !== ty ||
            ea[101] !== tp ||
            ea[102] !== eW ||
            ea[103] !== eS ||
            ea[104] !== tC ||
            ea[105] !== eO
              ? ((G =
                  ty && eW && !tp && null != eS
                    ? (0, i.jsx)("div", {
                        className: eO ? "@container/searchable-header" : "contents",
                        children: (0, i.jsx)("div", {
                          "data-page-subtitle": eO || void 0,
                          className: (0, n.A)(
                            "mx-auto w-full text-base leading-6 text-secondary browser:max-md:hidden",
                            tC,
                            eZ,
                          ),
                          children: (0, i.jsx)("div", { className: "max-w-lg -translate-y-1.5", children: eS }),
                        }),
                      })
                    : null),
                (ea[99] = eZ),
                (ea[100] = ty),
                (ea[101] = tp),
                (ea[102] = eW),
                (ea[103] = eS),
                (ea[104] = tC),
                (ea[105] = eO),
                (ea[106] = G))
              : (G = ea[106]),
            ea[107] !== eZ || ea[108] !== ty || ea[109] !== eW || ea[110] !== eE || ea[111] !== tC
              ? ((Y =
                  ty && eW && null != eE
                    ? (0, i.jsx)("div", {
                        className: (0, n.A)("mx-auto flex min-h-15 w-full min-w-0 items-center", tC, eZ),
                        children: eE,
                      })
                    : null),
                (ea[107] = eZ),
                (ea[108] = ty),
                (ea[109] = eW),
                (ea[110] = eE),
                (ea[111] = tC),
                (ea[112] = Y))
              : (Y = ea[112]))
          let tY = eq && ty ? tN : null
          ;(ea[113] !== eZ ||
          ea[114] !== ty ||
          ea[115] !== to ||
          ea[116] !== tg ||
          ea[117] !== ex ||
          ea[118] !== tn ||
          ea[119] !== tm ||
          ea[120] !== eB ||
          ea[121] !== tx ||
          ea[122] !== tf ||
          ea[123] !== eK ||
          ea[124] !== tc ||
          ea[125] !== td ||
          ea[126] !== eW ||
          ea[127] !== tj ||
          ea[128] !== eS ||
          ea[129] !== eI ||
          ea[130] !== ek ||
          ea[131] !== t_ ||
          ea[132] !== tC
            ? ((U =
                !to || tc || ty
                  ? null
                  : (0, i.jsx)(
                      c.P.div,
                      {
                        ref: ti,
                        "aria-hidden": td || void 0,
                        inert: td,
                        animate: { opacity: 1, transform: "translateY(0)" },
                        exit: { opacity: 0, transform: "translateY(-4px)" },
                        initial: { opacity: 0, transform: "translateY(-4px)" },
                        transition: t_,
                        children: (0, i.jsx)("div", {
                          className: (0, n.A)(
                            "mx-auto w-full",
                            tC,
                            tm.inset,
                            !tg && eK && "pb-8",
                            !tg && !eK && (tx || tf ? "pb-6" : "pb-4"),
                            eZ,
                          ),
                          children: (0, i.jsxs)("div", {
                            className: (0, n.A)(
                              "flex justify-between",
                              "profile" === eB ? "gap-2 px-1" : "gap-4",
                              tx && "flex-wrap items-center",
                              tf && "items-center",
                              !tx && !tf && "items-start",
                              "hero" === eB && "justify-center text-center",
                              "inset" === eB ? "px-2" : null,
                            ),
                            children: [
                              (0, i.jsxs)("div", {
                                className: (0, n.A)(
                                  "flex min-w-0 flex-col",
                                  "inset" === eB || "hero" === eB ? "gap-2" : !eK && "gap-1",
                                ),
                                children: [
                                  (0, i.jsx)("h1", {
                                    ref: td ? void 0 : ek,
                                    className: (0, n.A)("text-default", tj, tm.title),
                                    children: eI,
                                  }),
                                  null == eS
                                    ? null
                                    : (0, i.jsx)("div", {
                                        className: (0, n.A)(
                                          "text-secondary",
                                          eK
                                            ? "text-[17px] leading-[22px] @lg/manager:text-[16px] @lg/manager:leading-6.5"
                                            : ["text-base", tf ? "leading-6.5" : "leading-6"],
                                          "profile" === eB && "tracking-[-0.32px] sm:truncate",
                                          eK && "tracking-[-0.4px]",
                                          eW && !tf && "browser:max-md:hidden",
                                        ),
                                        children: eS,
                                      }),
                                ],
                              }),
                              null == ex
                                ? null
                                : (0, i.jsx)("div", {
                                    ref: tl,
                                    className: (0, n.A)("min-w-0", tx ? "max-w-full" : "shrink-0"),
                                    style: td ? tn : void 0,
                                    children: td ? null : ex,
                                  }),
                            ],
                          }),
                        }),
                      },
                      "page-heading",
                    )),
              (ea[113] = eZ),
              (ea[114] = ty),
              (ea[115] = to),
              (ea[116] = tg),
              (ea[117] = ex),
              (ea[118] = tn),
              (ea[119] = tm),
              (ea[120] = eB),
              (ea[121] = tx),
              (ea[122] = tf),
              (ea[123] = eK),
              (ea[124] = tc),
              (ea[125] = td),
              (ea[126] = eW),
              (ea[127] = tj),
              (ea[128] = eS),
              (ea[129] = eI),
              (ea[130] = ek),
              (ea[131] = t_),
              (ea[132] = tC),
              (ea[133] = U))
            : (U = ea[133]),
            ea[134] !== U
              ? ((H = (0, i.jsx)(o.N, { initial: !1, mode: "popLayout", children: U })), (ea[134] = U), (ea[135] = H))
              : (H = ea[135]),
            ea[136] !== eZ ||
            ea[137] !== tb ||
            ea[138] !== ty ||
            ea[139] !== tg ||
            ea[140] !== eD ||
            ea[141] !== eB ||
            ea[142] !== eJ ||
            ea[143] !== ew ||
            ea[144] !== e_ ||
            ea[145] !== e6 ||
            ea[146] !== e8 ||
            ea[147] !== eU ||
            ea[148] !== eN ||
            ea[149] !== tA ||
            ea[150] !== eE ||
            ea[151] !== tC
              ? ((W =
                  !tg || ty
                    ? null
                    : (0, i.jsx)("div", {
                        ref: e4,
                        className: tb ? void 0 : "contents",
                        style: tb ? { height: e8 } : void 0,
                        children: (0, i.jsx)("div", {
                          ref: e5,
                          className: (0, n.A)(!tb && "contents", tb && e6 && "absolute inset-x-0 bottom-0 z-30"),
                          children: (0, i.jsxs)(M, {
                            className: "top-0",
                            showScrollFade: "always" === eD || eJ,
                            sticky: "sticky" === eU,
                            children: [
                              (0, i.jsxs)("div", {
                                className: (0, n.A)(
                                  "mx-auto flex w-full items-center gap-2 pb-2",
                                  tC,
                                  "hero" === eB && "pt-6",
                                  "catalog" === eB && "pt-4",
                                  "hero" !== eB && "catalog" !== eB && "pt-panel",
                                  eZ,
                                ),
                                children: [
                                  e_ ??
                                    (null == ew
                                      ? null
                                      : (0, i.jsx)(v.s, {
                                          ...ew,
                                          autoFocus: tA,
                                          className: (0, n.A)("min-w-0 flex-1", ew.className),
                                        })),
                                  eN,
                                ],
                              }),
                              null == eE
                                ? null
                                : (0, i.jsx)("div", {
                                    className: (0, n.A)("mx-auto w-full", tC, "hero" === eB && "pt-12", eZ),
                                    children: eE,
                                  }),
                            ],
                          }),
                        }),
                      })),
                (ea[136] = eZ),
                (ea[137] = tb),
                (ea[138] = ty),
                (ea[139] = tg),
                (ea[140] = eD),
                (ea[141] = eB),
                (ea[142] = eJ),
                (ea[143] = ew),
                (ea[144] = e_),
                (ea[145] = e6),
                (ea[146] = e8),
                (ea[147] = eU),
                (ea[148] = eN),
                (ea[149] = tA),
                (ea[150] = eE),
                (ea[151] = tC),
                (ea[152] = W))
              : (W = ea[152]),
            ea[153] !== eZ ||
            ea[154] !== ty ||
            ea[155] !== tg ||
            ea[156] !== eD ||
            ea[157] !== tx ||
            ea[158] !== eJ ||
            ea[159] !== eU ||
            ea[160] !== eE ||
            ea[161] !== tC
              ? ((V =
                  tg || null == eE || ty
                    ? null
                    : (0, i.jsx)(M, {
                        className: "top-0",
                        showScrollFade: "always" === eD || eJ,
                        sticky: "sticky" === eU,
                        children: (0, i.jsx)("div", {
                          className: (0, n.A)("mx-auto w-full", !tx && "py-2", tC, eZ),
                          children: eE,
                        }),
                      })),
                (ea[153] = eZ),
                (ea[154] = ty),
                (ea[155] = tg),
                (ea[156] = eD),
                (ea[157] = tx),
                (ea[158] = eJ),
                (ea[159] = eU),
                (ea[160] = eE),
                (ea[161] = tC),
                (ea[162] = V))
              : (V = ea[162]))
          let tU = !!(void 0 === ei || ei) && "position",
            tH = eK && "pb-16",
            tW = "profile" === eB && "pb-23",
            tV = !tf && (eW && tx ? "pb-4" : "pb-panel"),
            tK = ez && tx && !ty && "pt-3.5",
            tQ = ez && !tx && !tg && null == eE && "pt-panel",
            tZ = ez && !tx && (tg || null != eE) && (tp ? "pt-3 md:pt-5" : "pt-5")
          return (
            ea[163] !== ed ||
            ea[164] !== eZ ||
            ea[165] !== tH ||
            ea[166] !== tW ||
            ea[167] !== tV ||
            ea[168] !== tK ||
            ea[169] !== tQ ||
            ea[170] !== tZ ||
            ea[171] !== tC
              ? ((K = (0, n.A)("mx-auto flex min-h-0 w-full flex-1 flex-col", tH, tW, tV, tC, tK, tQ, tZ, ed, eZ)),
                (ea[163] = ed),
                (ea[164] = eZ),
                (ea[165] = tH),
                (ea[166] = tW),
                (ea[167] = tV),
                (ea[168] = tK),
                (ea[169] = tQ),
                (ea[170] = tZ),
                (ea[171] = tC),
                (ea[172] = K))
              : (K = ea[172]),
            ea[173] !== tM || ea[174] !== tc || ea[175] !== ej || ea[176] !== eC
              ? ((Q = tM
                  ? (0, i.jsxs)(w, {
                      children: [
                        tc ? null : ej,
                        null == eC ? null : (0, i.jsx)("div", { className: "ms-auto", children: eC }),
                      ],
                    })
                  : null),
                (ea[173] = tM),
                (ea[174] = tc),
                (ea[175] = ej),
                (ea[176] = eC),
                (ea[177] = Q))
              : (Q = ea[177]),
            ea[178] !== ec || ea[179] !== ep || ea[180] !== tU || ea[181] !== K || ea[182] !== Q || ea[183] !== t_
              ? ((Z = (0, i.jsxs)(c.P.div, {
                  ref: tt,
                  layout: tU,
                  className: K,
                  transition: t_,
                  children: [Q, ep, ec],
                })),
                (ea[178] = ec),
                (ea[179] = ep),
                (ea[180] = tU),
                (ea[181] = K),
                (ea[182] = Q),
                (ea[183] = t_),
                (ea[184] = Z))
              : (Z = ea[184]),
            ea[185] !== D ||
            ea[186] !== $ ||
            ea[187] !== tG ||
            ea[188] !== B ||
            ea[189] !== G ||
            ea[190] !== Y ||
            ea[191] !== tY ||
            ea[192] !== H ||
            ea[193] !== W ||
            ea[194] !== V ||
            ea[195] !== Z
              ? ((X = (0, i.jsxs)("div", { className: D, style: $, children: [tG, B, G, Y, tY, H, W, V, Z] })),
                (ea[185] = D),
                (ea[186] = $),
                (ea[187] = tG),
                (ea[188] = B),
                (ea[189] = G),
                (ea[190] = Y),
                (ea[191] = tY),
                (ea[192] = H),
                (ea[193] = W),
                (ea[194] = V),
                (ea[195] = Z),
                (ea[196] = X))
              : (X = ea[196]),
            ea[197] !== ta ||
            ea[198] !== tT ||
            ea[199] !== z ||
            ea[200] !== tD ||
            ea[201] !== t$ ||
            ea[202] !== F ||
            ea[203] !== X
              ? ((J = (0, i.jsx)("div", {
                  ref: ta,
                  "data-new-slate-layout": tT,
                  className: z,
                  "data-app-shell-inline-page-header": tD,
                  "data-app-shell-page-scrolled": t$,
                  onScroll: F,
                  children: X,
                })),
                (ea[197] = ta),
                (ea[198] = tT),
                (ea[199] = z),
                (ea[200] = tD),
                (ea[201] = t$),
                (ea[202] = F),
                (ea[203] = X),
                (ea[204] = J))
              : (J = ea[204]),
            ea[205] !== q || ea[206] !== J
              ? ((ee = (0, i.jsx)("div", { className: q, children: J })), (ea[205] = q), (ea[206] = J), (ea[207] = ee))
              : (ee = ea[207]),
            ea[208] !== L || ea[209] !== ee
              ? ((et = (0, i.jsxs)(i.Fragment, { children: [L, ee] })), (ea[208] = L), (ea[209] = ee), (ea[210] = et))
              : (et = ea[210]),
            et
          )
        },
        uC: w,
      },
    )
  },
  DiyT(e, t, a) {
    a.d(t, { g: () => x, T: () => g })
    var i = a("ABep"),
      l = a("QosV"),
      n = a("on57"),
      s = a("W5pg"),
      r = a("LIss"),
      o = a("zd8w"),
      c = a("I7bK"),
      d = a("HgLj"),
      u = "title-x3JvHx",
      m = "titleContent-nEpGod",
      p = "toolbar-wpnXAF"
    function x(e) {
      let t,
        a,
        s,
        r,
        c,
        x,
        g,
        h,
        v,
        y,
        b,
        j,
        C = (0, l.c)(35),
        {
          ref: M,
          className: w,
          horizontalPaddingClassName: _,
          collapseOnScroll: A,
          presentation: N,
          expandSearchWhenWrapped: E,
          showDivider: S,
          sticky: I,
          wrapActionsAtNarrowWidth: k,
          title: T,
          actions: P,
          navigation: O,
        } = e,
        R = void 0 === _ ? "px-panel" : _,
        L = void 0 !== A && A,
        q = (0, o.useRef)(null)
      C[0] !== M ? ((t = (0, d.P)(q, M)), (C[0] = M), (C[1] = t)) : (t = C[1])
      let z = t,
        F = (0, o.useRef)(null)
      ;(C[2] !== L
        ? ((a = () => {
            let e = q.current,
              t = F.current
            if (!e || !t) return
            let a = new ResizeObserver(() => {
                let a = t.offsetLeft + parseFloat(getComputedStyle(t).paddingInlineStart)
                e.style.setProperty("--header-content-start", `${a}px`)
                let i = t.querySelector(`.${p}`)
                if (!L || null == i) return void e.removeAttribute("data-collapsible")
                let l = t.querySelector(`.${m}`)
                if (null == l) return
                let n = l.parentElement
                ;(e.style.setProperty(
                  "--header-collapse-offset",
                  `${(n?.offsetHeight ?? 0) + parseFloat(getComputedStyle(e).paddingTop)}px`,
                ),
                  e.toggleAttribute("data-collapsible", !0))
              }),
              i = () => {
                for (let e of (a.disconnect(), [t, ...t.querySelectorAll(`.${u}`)])) a.observe(e)
              },
              l = new MutationObserver(i)
            return (
              l.observe(t, { childList: !0, characterData: !0, subtree: !0 }),
              i(),
              () => {
                ;(a.disconnect(), l.disconnect())
              }
            )
          }),
          (s = [L]),
          (C[2] = L),
          (C[3] = a),
          (C[4] = s))
        : ((a = C[3]), (s = C[4])),
        (0, o.useLayoutEffect)(a, s))
      let D = L || void 0,
        $ = (void 0 !== E && E) || void 0,
        B = S || void 0,
        G = void 0 === I || I || void 0,
        Y = k || void 0,
        U = "directory" === (void 0 === N ? "default" : N) && "directoryShell-WYPHEM",
        H = S ? "border-subtle" : "border-transparent"
      ;(C[5] !== U || C[6] !== H
        ? ((r = (0, n.A)("shell-yWQKe6", U, H)), (C[5] = U), (C[6] = H), (C[7] = r))
        : (r = C[7]),
        C[8] !== $ || C[9] !== B || C[10] !== G || C[11] !== Y || C[12] !== r || C[13] !== D
          ? ((c = {
              "data-scroll-collapse": D,
              "data-expand-search": $,
              "data-scrolled": B,
              "data-sticky": G,
              "data-wrap-actions": Y,
              className: r,
            }),
            (C[8] = $),
            (C[9] = B),
            (C[10] = G),
            (C[11] = Y),
            (C[12] = r),
            (C[13] = D),
            (C[14] = c))
          : (c = C[14]))
      let W = c
      ;(C[15] !== w || C[16] !== R
        ? ((x = (0, n.A)("content-ymUHGU", "mx-auto w-full", R, w)), (C[15] = w), (C[16] = R), (C[17] = x))
        : (x = C[17]),
        C[18] !== T
          ? ((g =
              null == T
                ? null
                : (0, i.jsx)("div", { className: u, children: (0, i.jsx)("div", { className: m, children: T }) })),
            (C[18] = T),
            (C[19] = g))
          : (g = C[19]),
        C[20] !== P
          ? ((h = (0, i.jsx)("div", { className: "actions-hHaS5d", children: P })), (C[20] = P), (C[21] = h))
          : (h = C[21]),
        C[22] !== g || C[23] !== h
          ? ((v = (0, i.jsxs)("div", { className: "headerRow-4OaZM9", children: [g, h] })),
            (C[22] = g),
            (C[23] = h),
            (C[24] = v))
          : (v = C[24]),
        C[25] !== O
          ? ((y = (0, i.jsx)("div", { className: "navigation-AqGYXP", children: O })), (C[25] = O), (C[26] = y))
          : (y = C[26]),
        C[27] !== x || C[28] !== v || C[29] !== y
          ? ((b = (0, i.jsxs)("div", { ref: F, className: x, children: [v, y] })),
            (C[27] = x),
            (C[28] = v),
            (C[29] = y),
            (C[30] = b))
          : (b = C[30]))
      let V = b
      return (
        C[31] !== V || C[32] !== W || C[33] !== z
          ? ((j = (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(i.Fragment, { children: (0, i.jsx)(f, { ref: z, ...W, children: V }) }), null],
            })),
            (C[31] = V),
            (C[32] = W),
            (C[33] = z),
            (C[34] = j))
          : (j = C[34]),
        j
      )
    }
    function f(e) {
      let t,
        a,
        n,
        d = (0, l.c)(8),
        u = (0, o.useContext)(c.f$)
      d[0] !== u?.titleBarLeftInset || d[1] !== u?.titleBarLeftInset.get
        ? ((t = () => `${u?.titleBarLeftInset.get() ?? 0}px`),
          (d[0] = u?.titleBarLeftInset),
          (d[1] = u?.titleBarLeftInset.get),
          (d[2] = t))
        : (t = d[2])
      let m = (0, s.G)(t)
      d[3] !== m ? ((a = { "--app-shell-titlebar-left-inset": m }), (d[3] = m), (d[4] = a)) : (a = d[4])
      let p = a
      return (
        d[5] !== e || d[6] !== p
          ? ((n = (0, i.jsx)(r.P.div, { ...e, style: p })), (d[5] = e), (d[6] = p), (d[7] = n))
          : (n = d[7]),
        n
      )
    }
    function g(e) {
      let t,
        a,
        n,
        s,
        r,
        o = (0, l.c)(14),
        { filterTags: c, controls: d, search: u, actions: m, fixedSearchWidth: x } = e
      return (
        o[0] !== c
          ? ((t = (0, i.jsx)("div", {
              className: "filterTags-NLxoNh",
              children: (0, i.jsx)("div", { className: "filterTagsContent-VSk9tY", children: c }),
            })),
            (o[0] = c),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== d
          ? ((a = (0, i.jsx)("div", { className: "viewControls-ty6WO3", children: d })), (o[2] = d), (o[3] = a))
          : (a = o[3]),
        o[4] !== x || o[5] !== u
          ? ((n =
              null != u &&
              (0, i.jsx)("div", { className: "search-gLCdCn", "data-fixed-width": x || void 0, children: u })),
            (o[4] = x),
            (o[5] = u),
            (o[6] = n))
          : (n = o[6]),
        o[7] !== m
          ? ((s = (0, i.jsx)("div", { className: "pageActions-Q2Fd0B", children: m })), (o[7] = m), (o[8] = s))
          : (s = o[8]),
        o[9] !== t || o[10] !== a || o[11] !== n || o[12] !== s
          ? ((r = (0, i.jsxs)("div", { className: p, children: [t, a, n, s] })),
            (o[9] = t),
            (o[10] = a),
            (o[11] = n),
            (o[12] = s),
            (o[13] = r))
          : (r = o[13]),
        r
      )
    }
  },
  w0km(e, t, a) {
    a.d(t, { CmePage: () => U })
    var i = a("ABep"),
      l = a("QosV"),
      n = a("zTeN"),
      s = a("zd8w"),
      r = a("Wf1j"),
      o = a("oyxz"),
      c = a("Qgfj"),
      d = a("HZfM"),
      u = a("zKCW"),
      m = a("Sm6l"),
      p = a("djbx"),
      x = a("bVeK"),
      f = a("PkPj"),
      g = a("RNul"),
      h = a("BrP7"),
      v = a("mUDD"),
      y = a("SGsN"),
      b = a("OWtl"),
      j = a("v3GR")
    function C(e) {
      let t,
        a,
        c,
        d,
        u,
        p,
        x,
        f,
        h,
        C,
        _,
        A = (0, l.c)(42),
        { identity: N, approvedYear: E } = e,
        S = (0, n.gh)(b.u),
        I = (0, r.A)(),
        [k, T] = (0, s.useState)(null),
        {
          data: P,
          isLoading: O,
          isFetching: R,
          isError: L,
          refetch: q,
          hasNextPage: z,
          isFetchingNextPage: F,
          fetchNextPage: D,
        } = (0, n._U)(j.CP, N),
        $ = O || (R && !F)
      if (
        A[0] !== E ||
        A[1] !== P ||
        A[2] !== k ||
        A[3] !== N ||
        A[4] !== I ||
        A[5] !== $ ||
        A[6] !== L ||
        A[7] !== S
      ) {
        let e,
          l,
          n = new Set([...(P?.pages.flatMap(w) ?? []), ...(null == E ? [] : [E])])
        A[14] !== k || A[15] !== N || A[16] !== S
          ? ((e = async function (e) {
              if (null == k)
                return (
                  T(e),
                  (0, j.mL)(S, N, e)
                    .catch(() => {
                      let e = S.get(j.OX)
                      e?.accountId === N.accountId &&
                        e.userId === N.userId &&
                        S.get(y.Id).danger(
                          (0, i.jsx)(o.A, {
                            id: "codex.cme.approved.credits.downloadFailedPleaseTryAgain",
                            defaultMessage: "Download failed. Please try again.",
                            description: "Failure downloading a CME annual PDF transcript",
                          }),
                          { errorAnalytics: { toastId: "codex.cme.approved.credits.downloadFailedPleaseTryAgain" } },
                        )
                    })
                    .finally(() => T(null))
                )
            }),
            (A[14] = k),
            (A[15] = N),
            (A[16] = S),
            (A[17] = e))
          : (e = A[17])
        let s = e
        ;(A[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = (0, i.jsx)("h3", {
              className: "font-semibold",
              children: (0, i.jsx)(o.A, {
                id: "codex.cme.approved.credits.approvedCredits",
                defaultMessage: "Approved credits",
                description: "Heading for the approved annual CME transcripts",
              }),
            })),
            (A[18] = l))
          : (l = A[18]),
          A[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((p = (0, i.jsxs)(v.OO, {
                children: [
                  l,
                  (0, i.jsx)("p", {
                    className: "text-sm text-codex-description",
                    children: (0, i.jsx)(o.A, {
                      id: "codex.cme.approved.credits.downloadYourCmeTranscriptByCalendarYear",
                      defaultMessage: "Download your CME transcript by calendar year",
                      description: "Instructions for annual CME transcript downloads",
                    }),
                  }),
                ],
              })),
              (A[19] = p))
            : (p = A[19]),
          (t = v.OO),
          (a = "divide-default divide-y overflow-hidden rounded-lg border border-default"),
          A[20] !== $
            ? ((c = $
                ? (0, i.jsxs)("div", {
                    className: "flex items-center justify-center py-10 text-sm text-codex-description",
                    role: "status",
                    children: [
                      (0, i.jsx)(g.y, { className: "size-5" }),
                      (0, i.jsx)("span", {
                        className: "sr-only",
                        children: (0, i.jsx)(o.A, {
                          id: "codex.cme.approved.credits.loadingApprovedCredits",
                          defaultMessage: "Loading approved credits…",
                          description: "CME transcript list loading status",
                        }),
                      }),
                    ],
                  })
                : null),
              (A[20] = $),
              (A[21] = c))
            : (c = A[21]),
          (d =
            $ || null == P || 0 !== n.size || L
              ? null
              : (0, i.jsx)("p", {
                  className: "py-10 text-center text-sm text-codex-description",
                  children: (0, i.jsx)(o.A, {
                    id: "codex.cme.approved.credits.noApprovedCreditsYet",
                    defaultMessage: "No approved credits yet",
                    description: "Empty list of approved CME credits",
                  }),
                })),
          (u =
            !$ &&
            [...n]
              .sort(M)
              .map((e) =>
                (0, i.jsxs)(
                  "div",
                  {
                    className: "flex items-center justify-between gap-3 px-4 py-3",
                    children: [
                      (0, i.jsx)("span", { className: "font-medium", children: e }),
                      (0, i.jsx)(m.$, {
                        color: "secondary",
                        loading: k === e,
                        disabled: null != k,
                        onClick: () => void s(e),
                        "aria-label": I.formatMessage(
                          {
                            id: "codex.cme.approved.credits.downloadYearTranscript",
                            defaultMessage: "Download {year} transcript",
                            description: "Download the PDF transcript for a particular CME calendar year",
                          },
                          { year: e },
                        ),
                        children: (0, i.jsx)(o.A, {
                          id: "codex.cme.approved.credits.download",
                          defaultMessage: "Download",
                          description: "Download a CME annual transcript",
                        }),
                      }),
                    ],
                  },
                  e,
                ),
              )),
          (A[0] = E),
          (A[1] = P),
          (A[2] = k),
          (A[3] = N),
          (A[4] = I),
          (A[5] = $),
          (A[6] = L),
          (A[7] = S),
          (A[8] = t),
          (A[9] = a),
          (A[10] = c),
          (A[11] = d),
          (A[12] = u),
          (A[13] = p))
      } else ((t = A[8]), (a = A[9]), (c = A[10]), (d = A[11]), (u = A[12]), (p = A[13]))
      return (
        A[22] !== a || A[23] !== c || A[24] !== d || A[25] !== u
          ? ((x = (0, i.jsxs)("div", { className: a, children: [c, d, u] })),
            (A[22] = a),
            (A[23] = c),
            (A[24] = d),
            (A[25] = u),
            (A[26] = x))
          : (x = A[26]),
        A[27] !== t || A[28] !== x
          ? ((f = (0, i.jsx)(t, { children: x })), (A[27] = t), (A[28] = x), (A[29] = f))
          : (f = A[29]),
        A[30] !== L || A[31] !== q
          ? ((h = L
              ? (0, i.jsxs)(v.OO, {
                  children: [
                    (0, i.jsx)("p", {
                      role: "alert",
                      children: (0, i.jsx)(o.A, {
                        id: "codex.cme.approved.credits.unableToLoadApprovedCredits",
                        defaultMessage: "Unable to load approved credits",
                        description: "CME annual transcript list fetch failure",
                      }),
                    }),
                    (0, i.jsx)(m.$, {
                      color: "secondary",
                      onClick: () => void q(),
                      children: (0, i.jsx)(o.A, {
                        id: "codex.cme.approved.credits.tryAgain",
                        defaultMessage: "Try again",
                        description: "Retry fetching CME annual transcripts",
                      }),
                    }),
                  ],
                })
              : null),
            (A[30] = L),
            (A[31] = q),
            (A[32] = h))
          : (h = A[32]),
        A[33] !== D || A[34] !== z || A[35] !== F
          ? ((C = z
              ? (0, i.jsx)(v.OO, {
                  children: (0, i.jsx)(m.$, {
                    color: "secondary",
                    loading: F,
                    onClick: () => void D(),
                    children: (0, i.jsx)(o.A, {
                      id: "codex.cme.approved.credits.loadMore",
                      defaultMessage: "Load more",
                      description: "Load the next page of approved CME annual transcripts",
                    }),
                  }),
                })
              : null),
            (A[33] = D),
            (A[34] = z),
            (A[35] = F),
            (A[36] = C))
          : (C = A[36]),
        A[37] !== p || A[38] !== f || A[39] !== h || A[40] !== C
          ? ((_ = (0, i.jsxs)(i.Fragment, { children: [p, f, h, C] })),
            (A[37] = p),
            (A[38] = f),
            (A[39] = h),
            (A[40] = C),
            (A[41] = _))
          : (_ = A[41]),
        _
      )
    }
    function M(e, t) {
      return t - e
    }
    function w(e) {
      return e.claims.map(_)
    }
    function _(e) {
      return e.calendar_year
    }
    var A = a("VcaB"),
      N = a("D015"),
      E = a("slpy"),
      S = a("Y9i8"),
      I = a("JNtf"),
      k = a("yGJW"),
      T = a("on57"),
      P = a("ZtSy"),
      O = a("aQvR")
    function R(e) {
      let t,
        a,
        n,
        c,
        d,
        u,
        f,
        g,
        h,
        v,
        y,
        b,
        j,
        C,
        M,
        w,
        _,
        A = (0, l.c)(47),
        { conversation: N, selected: E, onToggle: S, onRemove: I, disabled: k } = e,
        R = (0, r.A)(),
        [L, q] = (0, s.useState)(!1)
      A[0] !== N.conversation_id || A[1] !== N.prompt_text
        ? ((t = N.prompt_text?.trim() || N.conversation_id),
          (A[0] = N.conversation_id),
          (A[1] = N.prompt_text),
          (A[2] = t))
        : (t = A[2])
      let z = t
      ;(A[3] !== R || A[4] !== z
        ? ((a = R.formatMessage(
            {
              id: "codex.cme.conversation.row.selectTitle",
              defaultMessage: "Select {title}",
              description: "Select one conversation for a CME credit claim",
            },
            { title: z },
          )),
          (A[3] = R),
          (A[4] = z),
          (A[5] = a))
        : (a = A[5]),
        A[6] !== k || A[7] !== S || A[8] !== E || A[9] !== a
          ? ((n = (0, i.jsx)("div", {
              className: "relative",
              children: (0, i.jsx)(p.S, { checked: E, disabled: k, onCheckedChange: S, "aria-label": a }),
            })),
            (A[6] = k),
            (A[7] = S),
            (A[8] = E),
            (A[9] = a),
            (A[10] = n))
          : (n = A[10]),
        A[11] !== L ? ((c = () => q(!L)), (A[11] = L), (A[12] = c)) : (c = A[12]))
      let F = L ? "whitespace-pre-wrap break-words" : "line-clamp-2"
      ;(A[13] !== F ? ((d = (0, T.A)(F)), (A[13] = F), (A[14] = d)) : (d = A[14]),
        A[15] !== d || A[16] !== z
          ? ((u = (0, i.jsx)("span", { className: d, children: z })), (A[15] = d), (A[16] = z), (A[17] = u))
          : (u = A[17]),
        A[18] !== L || A[19] !== c || A[20] !== u
          ? ((f = (0, i.jsx)("button", {
              type: "button",
              className: "text-start text-sm font-medium",
              "aria-expanded": L,
              onClick: c,
              children: u,
            })),
            (A[18] = L),
            (A[19] = c),
            (A[20] = u),
            (A[21] = f))
          : (f = A[21]),
        A[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)("span", {
              className: "text-xs text-secondary select-none",
              children: (0, i.jsx)(o.A, {
                id: "codex.cme.conversation.row.cmeConversation",
                defaultMessage: "CME conversation",
                description: "Label below a conversation available for a CME credit claim",
              }),
            })),
            (A[22] = g))
          : (g = A[22]),
        A[23] !== f
          ? ((h = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-2", children: [f, g] })),
            (A[23] = f),
            (A[24] = h))
          : (h = A[24]))
      let D = `https://chatgpt.com/c/${encodeURIComponent(N.conversation_id)}`
      A[25] !== R
        ? ((v = R.formatMessage({
            id: "codex.cme.conversation.row.openConversation",
            defaultMessage: "Open conversation",
            description: "Open a conversation from the CME claim list",
          })),
          (A[25] = R),
          (A[26] = v))
        : (v = A[26])
      let $ = `https://chatgpt.com/c/${encodeURIComponent(N.conversation_id)}`
      return (
        A[27] !== $
          ? ((y = (0, i.jsx)(O.g, { size: 16, href: $, openTarget: "external-browser" })), (A[27] = $), (A[28] = y))
          : (y = A[28]),
        A[29] !== D || A[30] !== v || A[31] !== y
          ? ((b = (0, i.jsx)(P.G, {
              href: D,
              initiator: "open_in_browser_bridge",
              openTarget: "external-browser",
              "aria-label": v,
              children: y,
            })),
            (A[29] = D),
            (A[30] = v),
            (A[31] = y),
            (A[32] = b))
          : (b = A[32]),
        A[33] !== R
          ? ((j = R.formatMessage({
              id: "codex.cme.conversation.row.removeConversation",
              defaultMessage: "Remove conversation",
              description: "Permanently remove a conversation from the CME claim list",
            })),
            (A[33] = R),
            (A[34] = j))
          : (j = A[34]),
        A[35] === Symbol.for("react.memo_cache_sentinel") ? ((C = (0, i.jsx)(x.cSG, {})), (A[35] = C)) : (C = A[35]),
        A[36] !== k || A[37] !== I || A[38] !== j
          ? ((M = (0, i.jsx)(m.$, {
              color: "ghost",
              size: "icon",
              onClick: I,
              disabled: k,
              "aria-label": j,
              children: C,
            })),
            (A[36] = k),
            (A[37] = I),
            (A[38] = j),
            (A[39] = M))
          : (M = A[39]),
        A[40] !== b || A[41] !== M
          ? ((w = (0, i.jsxs)("div", { className: "flex items-center gap-2", children: [b, M] })),
            (A[40] = b),
            (A[41] = M),
            (A[42] = w))
          : (w = A[42]),
        A[43] !== h || A[44] !== w || A[45] !== n
          ? ((_ = (0, i.jsxs)("div", { className: "flex items-start gap-3 px-4 py-3", children: [n, h, w] })),
            (A[43] = h),
            (A[44] = w),
            (A[45] = n),
            (A[46] = _))
          : (_ = A[46]),
        _
      )
    }
    var L = a("oUPQ")
    function q(e) {
      let t,
        a,
        n,
        s,
        c,
        d,
        u,
        f,
        g,
        h,
        v,
        y,
        b,
        j,
        C,
        M,
        w,
        _,
        A,
        N,
        E,
        S,
        I,
        k,
        T,
        P,
        O,
        R,
        q,
        $,
        B,
        G,
        Y = (0, l.c)(78),
        { conversation: U, response: H, onChange: W, onRemove: V, disabled: K } = e,
        Q = (0, r.A)()
      Y[0] !== Q
        ? ((t = Q.formatMessage({
            id: "codex.cme.survey.howDidThisResponseAndTheReferencesUsed",
            defaultMessage: "How did this response and the references used affect your clinical practice?",
            description: "CME survey question about impact on clinical practice",
          })),
          (Y[0] = Q),
          (Y[1] = t))
        : (t = Y[1])
      let Z = t
      Y[2] !== Q
        ? ((a = Q.formatMessage({
            id: "codex.cme.survey.didYourMedicalKnowledgeImproveBecauseOfThe",
            defaultMessage: "Did your medical knowledge improve because of the answer and the references used?",
            description: "CME survey question about medical knowledge improvement",
          })),
          (Y[2] = Q),
          (Y[3] = a))
        : (a = Y[3])
      let X = a
      ;(Y[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = {
            value: "modified_clinical_practice",
            label: (0, i.jsx)(o.A, {
              id: "codex.cme.survey.thisModifiedMyClinicalPracticeOrHealthcarePlan",
              defaultMessage: "This modified my clinical practice or healthcare plan",
              description: "CME survey option indicating the answer modified clinical practice",
            }),
          }),
          (Y[4] = n))
        : (n = Y[4]),
        Y[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = {
              value: "reinforced_current_clinical_practice",
              label: (0, i.jsx)(o.A, {
                id: "codex.cme.survey.thisReinforcedMyCurrentClinicalPracticeOrHealthcare",
                defaultMessage: "This reinforced my current clinical practice or healthcare plan",
                description: "CME survey option indicating the answer reinforced clinical practice",
              }),
            }),
            (Y[5] = s))
          : (s = Y[5]),
        Y[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = [
              n,
              s,
              {
                value: "did_not_affect_current_clinical_practice",
                label: (0, i.jsx)(o.A, {
                  id: "codex.cme.survey.thisDidNotAffectMyCurrentClinicalPractice",
                  defaultMessage: "This did not affect my current clinical practice or healthcare plan",
                  description: "CME survey option indicating the answer did not affect clinical practice",
                }),
              },
            ]),
            (Y[6] = c))
          : (c = Y[6]))
      let J = c
      ;(Y[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = {
            value: "increased_significantly",
            label: (0, i.jsx)(o.A, {
              id: "codex.cme.survey.increasedSignificantly",
              defaultMessage: "Increased significantly",
              description: "CME survey option for significant increase in medical knowledge",
            }),
          }),
          (Y[7] = d))
        : (d = Y[7]),
        Y[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((u = {
              value: "increased_slightly",
              label: (0, i.jsx)(o.A, {
                id: "codex.cme.survey.increasedSlightly",
                defaultMessage: "Increased slightly",
                description: "CME survey option for slight increase in medical knowledge",
              }),
            }),
            (Y[8] = u))
          : (u = Y[8]),
        Y[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = [
              d,
              u,
              {
                value: "no_change",
                label: (0, i.jsx)(o.A, {
                  id: "codex.cme.survey.didNotChange",
                  defaultMessage: "Did not change",
                  description: "CME survey option for unchanged medical knowledge",
                }),
              },
            ]),
            (Y[9] = f))
          : (f = Y[9]))
      let ee = f,
        et = U.prompt_text || U.conversation_id
      ;(Y[10] !== et
        ? ((g = (0, i.jsx)("legend", { className: "sr-only", children: et })), (Y[10] = et), (Y[11] = g))
        : (g = Y[11]),
        Y[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, i.jsx)("span", {
              className: "text-xs font-semibold text-codex-description uppercase select-none",
              children: (0, i.jsx)(o.A, {
                id: "codex.cme.survey.conversation",
                defaultMessage: "Conversation",
                description: "Label above the conversation prompt in the CME credit questionnaire",
              }),
            })),
            (Y[12] = h))
          : (h = Y[12]))
      let ea = U.prompt_text || U.conversation_id
      ;(Y[13] !== ea
        ? ((v = (0, i.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [h, (0, i.jsx)("p", { className: "font-medium", children: ea })],
          })),
          (Y[13] = ea),
          (Y[14] = v))
        : (v = Y[14]),
        Y[15] !== Q
          ? ((y = Q.formatMessage({
              id: "codex.cme.survey.removeConversationFromSurvey",
              defaultMessage: "Remove conversation from survey",
              description: "Deselect a conversation without permanently removing CME eligibility",
            })),
            (Y[15] = Q),
            (Y[16] = y))
          : (y = Y[16]),
        Y[17] === Symbol.for("react.memo_cache_sentinel") ? ((b = (0, i.jsx)(x.cSG, {})), (Y[17] = b)) : (b = Y[17]),
        Y[18] !== K || Y[19] !== V || Y[20] !== y
          ? ((j = (0, i.jsx)(m.$, {
              color: "ghost",
              size: "icon",
              onClick: V,
              disabled: K,
              "aria-label": y,
              children: b,
            })),
            (Y[18] = K),
            (Y[19] = V),
            (Y[20] = y),
            (Y[21] = j))
          : (j = Y[21]),
        Y[22] !== v || Y[23] !== j
          ? ((C = (0, i.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [v, j] })),
            (Y[22] = v),
            (Y[23] = j),
            (Y[24] = C))
          : (C = Y[24]),
        Y[25] !== Z
          ? ((M = (0, i.jsx)("legend", { className: "mb-3 font-medium", children: Z })), (Y[25] = Z), (Y[26] = M))
          : (M = Y[26]))
      let ei = `practice-${U.conversation_id}`,
        el = H.practice_changed ?? ""
      ;(Y[27] !== W || Y[28] !== H
        ? ((w = (e) => W({ ...H, practice_changed: e || null })), (Y[27] = W), (Y[28] = H), (Y[29] = w))
        : (w = Y[29]),
        Y[30] === Symbol.for("react.memo_cache_sentinel") ? ((_ = J.map(F)), (Y[30] = _)) : (_ = Y[30]),
        Y[31] !== K || Y[32] !== Z || Y[33] !== ei || Y[34] !== el || Y[35] !== w
          ? ((A = (0, i.jsx)(L.z, {
              name: ei,
              value: el,
              onChange: w,
              direction: "col",
              disabled: K,
              "aria-label": Z,
              children: _,
            })),
            (Y[31] = K),
            (Y[32] = Z),
            (Y[33] = ei),
            (Y[34] = el),
            (Y[35] = w),
            (Y[36] = A))
          : (A = Y[36]),
        Y[37] !== H.practice_changed
          ? ((N = "did_not_affect_current_clinical_practice" === H.practice_changed ? (0, i.jsx)(D, {}) : null),
            (Y[37] = H.practice_changed),
            (Y[38] = N))
          : (N = Y[38]),
        Y[39] !== M || Y[40] !== A || Y[41] !== N
          ? ((E = (0, i.jsxs)("fieldset", { className: "flex flex-col gap-3", children: [M, A, N] })),
            (Y[39] = M),
            (Y[40] = A),
            (Y[41] = N),
            (Y[42] = E))
          : (E = Y[42]),
        Y[43] !== X
          ? ((S = (0, i.jsx)("legend", { className: "mb-3 font-medium", children: X })), (Y[43] = X), (Y[44] = S))
          : (S = Y[44]))
      let en = `knowledge-${U.conversation_id}`,
        es = H.knowledge_improvement ?? ""
      return (
        Y[45] !== W || Y[46] !== H
          ? ((I = (e) => W({ ...H, knowledge_improvement: e || null })), (Y[45] = W), (Y[46] = H), (Y[47] = I))
          : (I = Y[47]),
        Y[48] === Symbol.for("react.memo_cache_sentinel") ? ((k = ee.map(z)), (Y[48] = k)) : (k = Y[48]),
        Y[49] !== K || Y[50] !== X || Y[51] !== en || Y[52] !== es || Y[53] !== I
          ? ((T = (0, i.jsx)(L.z, {
              name: en,
              value: es,
              onChange: I,
              direction: "col",
              disabled: K,
              "aria-label": X,
              children: k,
            })),
            (Y[49] = K),
            (Y[50] = X),
            (Y[51] = en),
            (Y[52] = es),
            (Y[53] = I),
            (Y[54] = T))
          : (T = Y[54]),
        Y[55] !== H.knowledge_improvement
          ? ((P = "no_change" === H.knowledge_improvement ? (0, i.jsx)(D, {}) : null),
            (Y[55] = H.knowledge_improvement),
            (Y[56] = P))
          : (P = Y[56]),
        Y[57] !== S || Y[58] !== T || Y[59] !== P
          ? ((O = (0, i.jsxs)("fieldset", { className: "flex flex-col gap-3", children: [S, T, P] })),
            (Y[57] = S),
            (Y[58] = T),
            (Y[59] = P),
            (Y[60] = O))
          : (O = Y[60]),
        Y[61] !== W || Y[62] !== H
          ? ((R = (e) => W({ ...H, no_commercial_bias: e })), (Y[61] = W), (Y[62] = H), (Y[63] = R))
          : (R = Y[63]),
        Y[64] !== K || Y[65] !== H.no_commercial_bias || Y[66] !== R
          ? ((q = (0, i.jsx)(p.S, {
              variant: "secondary",
              checked: H.no_commercial_bias,
              disabled: K,
              onCheckedChange: R,
            })),
            (Y[64] = K),
            (Y[65] = H.no_commercial_bias),
            (Y[66] = R),
            (Y[67] = q))
          : (q = Y[67]),
        Y[68] === Symbol.for("react.memo_cache_sentinel")
          ? (($ = (0, i.jsx)(o.A, {
              id: "codex.cme.survey.thereWasNoCommercialBias",
              defaultMessage: "There was no commercial bias",
              description: "Required CME survey confirmation that the conversation contained no commercial bias",
            })),
            (Y[68] = $))
          : ($ = Y[68]),
        Y[69] !== q
          ? ((B = (0, i.jsxs)("label", {
              className: "relative flex items-center gap-2 select-none",
              children: [q, $],
            })),
            (Y[69] = q),
            (Y[70] = B))
          : (B = Y[70]),
        Y[71] !== K || Y[72] !== g || Y[73] !== C || Y[74] !== E || Y[75] !== O || Y[76] !== B
          ? ((G = (0, i.jsxs)("fieldset", {
              disabled: K,
              className: "flex flex-col gap-4 rounded-lg border border-default p-4 text-sm",
              children: [g, C, E, O, B],
            })),
            (Y[71] = K),
            (Y[72] = g),
            (Y[73] = C),
            (Y[74] = E),
            (Y[75] = O),
            (Y[76] = B),
            (Y[77] = G))
          : (G = Y[77]),
        G
      )
    }
    function z(e) {
      return (0, i.jsx)(L.z.Item, { className: "select-none", value: e.value, children: e.label }, e.value)
    }
    function F(e) {
      return (0, i.jsx)(L.z.Item, { className: "select-none", value: e.value, children: e.label }, e.value)
    }
    function D() {
      let e,
        t = (0, l.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, i.jsx)("p", {
              className: "text-xs font-bold text-danger",
              role: "alert",
              children: (0, i.jsx)(o.A, {
                id: "codex.cme.survey.aPositiveResponseIsRequiredToGrantCredit",
                defaultMessage: "A positive response is required to grant credit for this conversation",
                description: "CME warning when a survey answer indicates no educational benefit",
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    let $ = { practice_changed: null, knowledge_improvement: null, no_commercial_bias: !1 }
    function B(e) {
      let t,
        a,
        c,
        u,
        f,
        h,
        M,
        w,
        _,
        T,
        P,
        O,
        L,
        z,
        F,
        D,
        B,
        U,
        H,
        W,
        V,
        K,
        Q,
        Z = (0, l.c)(102),
        { identity: X, onClose: J, onCloseAutoFocus: ee, initialSelectedIds: et, onClaimApproved: ea } = e,
        ei = (0, n.gh)(b.u),
        el = (0, r.A)(),
        en = (0, d.Zp)(),
        es = (0, s.useRef)(null),
        [er, eo] = (0, s.useState)("claim"),
        [ec, ed] = (0, s.useState)(et ? "survey" : "select")
      Z[0] !== et ? ((t = new Set(et)), (Z[0] = et), (Z[1] = t)) : (t = Z[1])
      let [eu, em] = (0, s.useState)(t)
      Z[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = new Set()), (Z[2] = a)) : (a = Z[2])
      let [ep, ex] = (0, s.useState)(a),
        [ef, eg] = (0, s.useState)(null)
      Z[3] === Symbol.for("react.memo_cache_sentinel") ? ((c = {}), (Z[3] = c)) : (c = Z[3])
      let [eh, ev] = (0, s.useState)(c),
        [ey, eb] = (0, s.useState)(!1),
        [ej, eC] = (0, s.useState)(!1),
        [eM, ew] = (0, s.useState)(null),
        [e_, eA] = (0, s.useState)(!1),
        [eN, eE] = (0, s.useState)(null),
        { data: eS, isLoading: eI, isError: ek, refetch: eT } = (0, n._U)(j.Zf, X),
        eP = "claim" === er
      Z[4] !== eP ? ((u = { enabled: eP }), (Z[4] = eP), (Z[5] = u)) : (u = Z[5])
      let {
          data: eO,
          isLoading: eR,
          isFetching: eL,
          isError: eq,
          refetch: ez,
          hasNextPage: eF,
          isFetchingNextPage: eD,
          fetchNextPage: e$,
        } = (0, n._U)(j.CC, X, u),
        eB = eR || (eL && !eD)
      if (
        Z[6] !== eS ||
        Z[7] !== ek ||
        Z[8] !== eI ||
        Z[9] !== ef ||
        Z[10] !== e_ ||
        Z[11] !== ey ||
        Z[12] !== eO?.pages ||
        Z[13] !== eO?.pages.flatMap ||
        Z[14] !== eN ||
        Z[15] !== e$ ||
        Z[16] !== eF ||
        Z[17] !== X ||
        Z[18] !== el ||
        Z[19] !== eB ||
        Z[20] !== eq ||
        Z[21] !== eD ||
        Z[22] !== en ||
        Z[23] !== ea ||
        Z[24] !== J ||
        Z[25] !== ee ||
        Z[26] !== eM ||
        Z[27] !== ez ||
        Z[28] !== eT ||
        Z[29] !== ep ||
        Z[30] !== eh ||
        Z[31] !== ei ||
        Z[32] !== eu ||
        Z[33] !== ej ||
        Z[34] !== ec ||
        Z[35] !== er
      ) {
        let e,
          t,
          a,
          l,
          n,
          s,
          r = eO?.pages.flatMap(Y).filter((e) => !ep.has(e.conversation_id)),
          c = r?.filter((e) => eu.has(e.conversation_id)) ?? [],
          d = null != r && r.length > 0 && r.every((e) => eu.has(e.conversation_id)),
          u =
            eS?.is_complete === !0 &&
            c.length > 0 &&
            c.every((e) => {
              var t
              return (
                ("modified_clinical_practice" === (t = eh[e.conversation_id] ?? $).practice_changed ||
                  "reinforced_current_clinical_practice" === t.practice_changed) &&
                ("increased_significantly" === t.knowledge_improvement ||
                  "increased_slightly" === t.knowledge_improvement) &&
                t.no_commercial_bias
              )
            }),
          b = function (e) {
            ;(em((t) => {
              let a = new Set(t)
              return (a.delete(e), a)
            }),
              ev((t) => {
                let a = { ...t }
                return (delete a[e], a)
              }),
              1 === c.length && ed("select"))
          },
          V = async function () {
            if (!e_ && u)
              return ey
                ? (eA(!0),
                  eE(null),
                  (0, j.qk)(ei, X, {
                    credit_administration_consent: ey,
                    conversations: c.map((e) => {
                      let t = eh[e.conversation_id] ?? $
                      return {
                        conversation_id: e.conversation_id,
                        practice_changed: t.practice_changed ?? "did_not_affect_current_clinical_practice",
                        knowledge_improvement: t.knowledge_improvement ?? "no_change",
                        no_commercial_bias: t.no_commercial_bias,
                      }
                    }),
                  })
                    .then((e) => {
                      if (
                        ((0, k.yy)(ei, A.k, {
                          approved: e.approved,
                          conversationCount: (0, N.At)(e.conversation_count),
                          claimId: e.claim_id ?? void 0,
                        }),
                        e.approved)
                      ) {
                        if (e.claim_id) {
                          let t = new Date(e.created_at ?? Date.now()),
                            a = Number.isNaN(t.getTime()) ? new Date().getUTCFullYear() : t.getUTCFullYear()
                          a >= 2026 && eg(a)
                        }
                        ;(eo("credits"),
                          ed("select"),
                          em(new Set()),
                          ev({}),
                          eb(!1),
                          eC(!1),
                          ei
                            .get(y.Id)
                            .success(
                              (0, i.jsx)(o.A, {
                                id: "codex.cme.dialog.creditsApproved",
                                defaultMessage: "Credits approved",
                                description: "Confirmation after a CME credit claim is approved",
                              }),
                            ),
                          ea?.())
                      } else
                        eE(
                          (0, i.jsx)(o.A, {
                            id: "codex.cme.dialog.creditsCouldNotBeApproved",
                            defaultMessage: "Credits could not be approved",
                            description: "CME claim response did not approve the requested credits",
                          }),
                        )
                    })
                    .catch(() => {
                      eE(
                        (0, i.jsx)(o.A, {
                          id: "codex.cme.dialog.unableToSubmitYourClaimPleaseTryAgain",
                          defaultMessage: "Unable to submit your claim. Please try again.",
                          description: "Recoverable failure submitting a CME credit claim",
                        }),
                      )
                    })
                    .finally(() => eA(!1)))
                : void eC(!0)
          }
        ;(Z[52] !== e_ || Z[53] !== b || Z[54] !== X || Z[55] !== eM || Z[56] !== ei
          ? ((e = async function () {
              if (!e_ && null != eM)
                return (
                  eA(!0),
                  eE(null),
                  (0, j.ZB)(ei, X, eM)
                    .then(() => {
                      ;(ex((e) => new Set([...e, eM])), b(eM), ew(null))
                    })
                    .catch(() => {
                      eE(
                        (0, i.jsx)(o.A, {
                          id: "codex.cme.dialog.unableToRemoveThisConversationPleaseTryAgain",
                          defaultMessage: "Unable to remove this conversation. Please try again.",
                          description: "Recoverable failure removing a conversation from CME eligibility",
                        }),
                      )
                    })
                    .finally(() => eA(!1))
                )
            }),
            (Z[52] = e_),
            (Z[53] = b),
            (Z[54] = X),
            (Z[55] = eM),
            (Z[56] = ei),
            (Z[57] = e))
          : (e = Z[57]),
          (M = e),
          (h = I.lG),
          (O = !0),
          Z[58] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => {
                es.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
              }),
              (Z[58] = t))
            : (t = Z[58]),
          Z[59] !== ee
            ? ((L = {
                onOpenAutoFocus: t,
                onCloseAutoFocus: (e) => {
                  null != ee
                    ? (e.preventDefault(), ee())
                    : es.current?.isConnected && (e.preventDefault(), es.current.focus({ preventScroll: !0 }))
                },
              }),
              (Z[59] = ee),
              (Z[60] = L))
            : (L = Z[60]),
          Z[61] !== e_ || Z[62] !== J
            ? ((z = (e) => {
                e || e_ || J()
              }),
              (Z[61] = e_),
              (Z[62] = J),
              (Z[63] = z))
            : (z = Z[63]),
          (F = "large"),
          (D = e_),
          (f = v.R4),
          (B = "form"),
          (U = "viewport"),
          (H = (e) => {
            ;(e.preventDefault(), "survey" === ec && "claim" === er && V())
          }),
          Z[64] === Symbol.for("react.memo_cache_sentinel")
            ? ((W = (0, i.jsx)(v.c7, {
                title: (0, i.jsx)(I.L3, {
                  className: "font-normal",
                  children: (0, i.jsx)(o.A, {
                    id: "codex.cme.dialog.cme",
                    defaultMessage: "CME",
                    description: "Title of the continuing medical education credit dashboard",
                  }),
                }),
              })),
              (Z[64] = W))
            : (W = Z[64]),
          Z[65] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = (0, i.jsx)(I.rr, {
                className: "sr-only",
                children: (0, i.jsx)(o.A, {
                  id: "codex.cme.dialog.manageYourContinuingMedicalEducationCredits",
                  defaultMessage: "Manage your continuing medical education credits",
                  description: "Accessible description of the CME dashboard",
                }),
              })),
              (Z[65] = w))
            : (w = Z[65]),
          Z[66] !== el
            ? ((a = el.formatMessage({
                id: "codex.cme.dialog.cmeTabs",
                defaultMessage: "CME tabs",
                description: "Accessible name for the CME dashboard tab selector",
              })),
              (Z[66] = el),
              (Z[67] = a))
            : (a = Z[67]),
          Z[68] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = {
                id: "claim",
                label: (0, i.jsx)(o.A, {
                  id: "codex.cme.dialog.claim",
                  defaultMessage: "Claim",
                  description: "CME dashboard tab for claiming credits",
                }),
              }),
              (Z[68] = l))
            : (l = Z[68]),
          Z[69] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = [
                l,
                {
                  id: "credits",
                  label: (0, i.jsx)(o.A, {
                    id: "codex.cme.dialog.approvedCredits",
                    defaultMessage: "Approved credits",
                    description: "CME dashboard tab listing approved annual transcripts",
                  }),
                },
              ]),
              (Z[69] = n))
            : (n = Z[69]),
          Z[70] !== a || Z[71] !== er
            ? ((s = (0, i.jsx)(S.q, {
                className: "w-full",
                animateSelection: !1,
                selectedId: er,
                onSelect: eo,
                ariaLabel: a,
                options: n,
              })),
              (Z[70] = a),
              (Z[71] = er),
              (Z[72] = s))
            : (s = Z[72]),
          Z[73] !== e_ || Z[74] !== s
            ? ((_ = (0, i.jsx)(v.OO, { children: (0, i.jsx)("fieldset", { disabled: e_, children: s }) })),
              (Z[73] = e_),
              (Z[74] = s),
              (Z[75] = _))
            : (_ = Z[75]),
          Z[76] !== eN
            ? ((T = eN
                ? (0, i.jsx)(v.OO, {
                    children: (0, i.jsx)("p", { role: "alert", className: "text-sm text-danger", children: eN }),
                  })
                : null),
              (Z[76] = eN),
              (Z[77] = T))
            : (T = Z[77]),
          (P =
            "credits" === er
              ? (0, i.jsx)(C, { identity: X, approvedYear: ef })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsxs)(v.OO, {
                      children: [
                        (0, i.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, i.jsx)("h3", {
                              className: "font-semibold",
                              children: (0, i.jsx)(o.A, {
                                id: "codex.cme.dialog.claimYourCredits",
                                defaultMessage: "Claim your credits",
                                description: "Heading for the CME credit claim workflow",
                              }),
                            }),
                            (0, i.jsx)(E.m, {
                              content: (0, i.jsx)(o.A, {
                                id: "codex.cme.dialog.thisActivityHasBeenPlannedAndImplementedIn",
                                defaultMessage:
                                  "This activity has been planned and implemented in accordance with the accreditation requirements and policies of the Accreditation Council for Continuing Medical Education (ACCME) through the joint providership of MEDICUSCME and OpenAI. MEDICUSCME is accredited by the ACCME to provide continuing medical education for physicians.",
                                description: "Accreditation disclosure for the continuing medical education activity",
                              }),
                              children: (0, i.jsx)(m.$, {
                                color: "ghost",
                                size: "iconCircleSm",
                                "aria-label": el.formatMessage({
                                  id: "codex.cme.dialog.cmeAccreditationInformation",
                                  defaultMessage: "CME accreditation information",
                                  description: "Accessible name for the CME accreditation disclosure",
                                }),
                                children: (0, i.jsx)(x.ehD, { className: "text-codex-description" }),
                              }),
                            }),
                          ],
                        }),
                        "select" === ec
                          ? (0, i.jsx)("p", {
                              className: "text-sm text-codex-description",
                              children: (0, i.jsx)(o.A, {
                                id: "codex.cme.dialog.selectCmeConversationsToIncludeInYourCredit",
                                defaultMessage: "Select CME conversations to include in your credit claim",
                                description: "Instructions for CME conversation selection",
                              }),
                            })
                          : (0, i.jsx)("p", {
                              className: "text-sm text-codex-description",
                              children: (0, i.jsx)(o.A, {
                                id: "codex.cme.dialog.completeThisShortQuestionnaireToSubmitYourClaim",
                                defaultMessage: "Complete this short questionnaire to submit your claim",
                                description: "Instructions for the CME credit survey",
                              }),
                            }),
                      ],
                    }),
                    eI
                      ? (0, i.jsx)(v.OO, {
                          children: (0, i.jsx)("p", {
                            role: "status",
                            children: (0, i.jsx)(o.A, {
                              id: "codex.cme.dialog.loadingCmeProfile",
                              defaultMessage: "Loading CME profile…",
                              description: "CME medical profile loading status",
                            }),
                          }),
                        })
                      : null,
                    ek
                      ? (0, i.jsxs)(v.OO, {
                          children: [
                            (0, i.jsx)("p", {
                              role: "alert",
                              children: (0, i.jsx)(o.A, {
                                id: "codex.cme.dialog.unableToLoadYourCmeProfile",
                                defaultMessage: "Unable to load your CME profile",
                                description: "CME medical profile loading failure",
                              }),
                            }),
                            (0, i.jsx)(m.$, {
                              color: "secondary",
                              onClick: () => void eT(),
                              children: (0, i.jsx)(o.A, {
                                id: "codex.cme.dialog.tryAgain",
                                defaultMessage: "Try again",
                                description: "Retry fetching the CME medical profile",
                              }),
                            }),
                          ],
                        })
                      : null,
                    null == eS || eS.is_complete
                      ? null
                      : (0, i.jsx)(v.OO, {
                          children: (0, i.jsxs)("div", {
                            className: "flex flex-col items-start gap-3 rounded-lg border border-default p-4 text-sm",
                            children: [
                              (0, i.jsx)("p", {
                                children: (0, i.jsx)(o.A, {
                                  id: "codex.cme.dialog.completeYourCmeProfileInAccountSettingsAnd",
                                  defaultMessage:
                                    "Complete your CME profile in Account settings and confirm physician eligibility to claim CME credits",
                                  description: "Explains why the user cannot proceed with CME credit claiming",
                                }),
                              }),
                              (0, i.jsx)(m.$, {
                                color: "secondary",
                                disabled: e_,
                                onClick: () => {
                                  ;(J(), en("/settings/account"))
                                },
                                children: (0, i.jsx)(o.A, {
                                  id: "codex.cme.dialog.openAccountSettings",
                                  defaultMessage: "Open Account settings",
                                  description: "Open medical profile settings from the CME claim dashboard",
                                }),
                              }),
                            ],
                          }),
                        }),
                    "select" === ec
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(v.OO, {
                              children: (0, i.jsxs)("div", {
                                className: "flex items-center justify-between gap-3 text-sm select-none",
                                children: [
                                  (0, i.jsxs)("label", {
                                    className: "relative flex items-center gap-2",
                                    children: [
                                      (0, i.jsx)(p.S, {
                                        checked: d || (c.length > 0 && "indeterminate"),
                                        disabled: e_ || null == r || 0 === r.length,
                                        onCheckedChange: () => em(new Set(d ? [] : r?.map(G))),
                                      }),
                                      (0, i.jsx)(o.A, {
                                        id: "codex.cme.dialog.selectAll",
                                        defaultMessage: "Select all",
                                        description: "Select all currently loaded CME conversations",
                                      }),
                                    ],
                                  }),
                                  c.length > 0
                                    ? (0, i.jsx)("span", {
                                        className: "text-codex-description",
                                        children: (0, i.jsx)(o.A, {
                                          id: "codex.cme.dialog.countSelected",
                                          defaultMessage: "{count} selected",
                                          description: "Number of conversations selected for a CME claim",
                                          values: { count: c.length },
                                        }),
                                      })
                                    : null,
                                ],
                              }),
                            }),
                            (0, i.jsx)(v.OO, {
                              children: (0, i.jsxs)("div", {
                                className: "overflow-hidden rounded-lg border border-default",
                                children: [
                                  eB
                                    ? (0, i.jsxs)("div", {
                                        className:
                                          "flex items-center justify-center py-10 text-sm text-codex-description",
                                        role: "status",
                                        children: [
                                          (0, i.jsx)(g.y, { className: "size-5" }),
                                          (0, i.jsx)("span", {
                                            className: "sr-only",
                                            children: (0, i.jsx)(o.A, {
                                              id: "codex.cme.dialog.loadingConversations",
                                              defaultMessage: "Loading conversations…",
                                              description: "CME eligible conversation loading status",
                                            }),
                                          }),
                                        ],
                                      })
                                    : null,
                                  eB || r?.length !== 0 || eq
                                    ? null
                                    : (0, i.jsx)("p", {
                                        className: "py-10 text-center text-sm text-codex-description",
                                        children: (0, i.jsx)(o.A, {
                                          id: "codex.cme.dialog.noCmeConversationsYet",
                                          defaultMessage: "No CME conversations yet",
                                          description: "Empty list of conversations eligible for CME",
                                        }),
                                      }),
                                  !eB && null != r && r.length > 0
                                    ? (0, i.jsx)("div", {
                                        className: "divide-default divide-y",
                                        children: r?.map((e) =>
                                          (0, i.jsx)(
                                            R,
                                            {
                                              conversation: e,
                                              selected: eu.has(e.conversation_id),
                                              disabled: e_,
                                              onToggle: () =>
                                                em((t) => {
                                                  let a = new Set(t)
                                                  return (
                                                    a.has(e.conversation_id)
                                                      ? a.delete(e.conversation_id)
                                                      : a.add(e.conversation_id),
                                                    a
                                                  )
                                                }),
                                              onRemove: () => {
                                                ;(eE(null), ew(e.conversation_id))
                                              },
                                            },
                                            e.conversation_id,
                                          ),
                                        ),
                                      })
                                    : null,
                                ],
                              }),
                            }),
                            eq
                              ? (0, i.jsxs)(v.OO, {
                                  children: [
                                    (0, i.jsx)("p", {
                                      role: "alert",
                                      children: (0, i.jsx)(o.A, {
                                        id: "codex.cme.dialog.unableToLoadCmeConversations",
                                        defaultMessage: "Unable to load CME conversations",
                                        description: "CME conversation list fetch failure",
                                      }),
                                    }),
                                    (0, i.jsx)(m.$, {
                                      color: "secondary",
                                      onClick: () => void ez(),
                                      children: (0, i.jsx)(o.A, {
                                        id: "codex.cme.dialog.tryAgain",
                                        defaultMessage: "Try again",
                                        description: "Retry fetching CME conversations",
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                            eF
                              ? (0, i.jsx)(v.OO, {
                                  children: (0, i.jsx)(m.$, {
                                    color: "secondary",
                                    loading: eD,
                                    onClick: () => void e$(),
                                    children: (0, i.jsx)(o.A, {
                                      id: "codex.cme.dialog.loadMore",
                                      defaultMessage: "Load more",
                                      description: "Load the next page of CME conversations",
                                    }),
                                  }),
                                })
                              : null,
                            c.length > 0
                              ? (0, i.jsx)(v.OO, {
                                  children: (0, i.jsx)(v.Es, {
                                    expandSingleButton: !1,
                                    children: (0, i.jsx)(m.$, {
                                      disabled: e_ || eS?.is_complete !== !0 || ek,
                                      onClick: () => {
                                        ;(eE(null), ed("survey"))
                                      },
                                      children: (0, i.jsx)(o.A, {
                                        id: "codex.cme.dialog.next",
                                        defaultMessage: "Next",
                                        description: "Advance to the CME claim survey",
                                      }),
                                    }),
                                  }),
                                })
                              : null,
                          ],
                        })
                      : (0, i.jsxs)("div", {
                          className: "flex flex-col gap-6 pt-6",
                          children: [
                            (0, i.jsx)("div", {
                              className: "flex flex-col gap-4",
                              children: c.map((e) =>
                                (0, i.jsx)(
                                  q,
                                  {
                                    conversation: e,
                                    response: eh[e.conversation_id] ?? $,
                                    disabled: e_,
                                    onChange: (t) => ev((a) => ({ ...a, [e.conversation_id]: t })),
                                    onRemove: () => b(e.conversation_id),
                                  },
                                  e.conversation_id,
                                ),
                              ),
                            }),
                            (0, i.jsxs)("div", {
                              className: "flex flex-col gap-2",
                              children: [
                                (0, i.jsxs)("label", {
                                  className: "relative flex items-start gap-2 text-sm select-none",
                                  children: [
                                    (0, i.jsx)(p.S, {
                                      variant: "secondary",
                                      checked: ey,
                                      disabled: e_,
                                      onCheckedChange: (e) => {
                                        ;(eb(e), eC(!1))
                                      },
                                      "aria-invalid": ej,
                                    }),
                                    (0, i.jsx)(o.A, {
                                      id: "codex.cme.dialog.iAgreeThatOpenaiMayShareMyName",
                                      defaultMessage:
                                        "I agree that OpenAI may share my name, date of birth, NPI and medical license information with our CME vendor and ACCME for credit administration.",
                                      description:
                                        "Required consent explaining which personal information OpenAI shares to administer CME claims",
                                    }),
                                  ],
                                }),
                                ej
                                  ? (0, i.jsx)("p", {
                                      role: "alert",
                                      className: "text-sm text-danger",
                                      children: (0, i.jsx)(o.A, {
                                        id: "codex.cme.dialog.pleaseAgreeToTheCreditAdministrationDisclosureTo",
                                        defaultMessage:
                                          "Please agree to the credit administration disclosure to submit your claim",
                                        description:
                                          "CME consent validation error after trying to submit without consent",
                                      }),
                                    })
                                  : null,
                              ],
                            }),
                            (0, i.jsxs)("div", {
                              className: "flex items-center justify-between gap-3",
                              children: [
                                (0, i.jsx)(m.$, {
                                  color: "secondary",
                                  radius: "full",
                                  size: "medium",
                                  disabled: e_,
                                  onClick: () => ed("select"),
                                  children: (0, i.jsx)(o.A, {
                                    id: "codex.cme.dialog.back",
                                    defaultMessage: "Back",
                                    description: "Return to CME conversation selection without losing survey responses",
                                  }),
                                }),
                                (0, i.jsx)(m.$, {
                                  radius: "full",
                                  size: "medium",
                                  type: "submit",
                                  disabled: !u || ek,
                                  loading: e_,
                                  children: (0, i.jsx)(o.A, {
                                    id: "codex.cme.dialog.submit",
                                    defaultMessage: "Submit",
                                    description: "Submit the selected CME credit claim",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                  ],
                })),
          (Z[6] = eS),
          (Z[7] = ek),
          (Z[8] = eI),
          (Z[9] = ef),
          (Z[10] = e_),
          (Z[11] = ey),
          (Z[12] = eO?.pages),
          (Z[13] = eO?.pages.flatMap),
          (Z[14] = eN),
          (Z[15] = e$),
          (Z[16] = eF),
          (Z[17] = X),
          (Z[18] = el),
          (Z[19] = eB),
          (Z[20] = eq),
          (Z[21] = eD),
          (Z[22] = en),
          (Z[23] = ea),
          (Z[24] = J),
          (Z[25] = ee),
          (Z[26] = eM),
          (Z[27] = ez),
          (Z[28] = eT),
          (Z[29] = ep),
          (Z[30] = eh),
          (Z[31] = ei),
          (Z[32] = eu),
          (Z[33] = ej),
          (Z[34] = ec),
          (Z[35] = er),
          (Z[36] = f),
          (Z[37] = h),
          (Z[38] = M),
          (Z[39] = w),
          (Z[40] = _),
          (Z[41] = T),
          (Z[42] = P),
          (Z[43] = O),
          (Z[44] = L),
          (Z[45] = z),
          (Z[46] = F),
          (Z[47] = D),
          (Z[48] = B),
          (Z[49] = U),
          (Z[50] = H),
          (Z[51] = W))
      } else
        ((f = Z[36]),
          (h = Z[37]),
          (M = Z[38]),
          (w = Z[39]),
          (_ = Z[40]),
          (T = Z[41]),
          (P = Z[42]),
          (O = Z[43]),
          (L = Z[44]),
          (z = Z[45]),
          (F = Z[46]),
          (D = Z[47]),
          (B = Z[48]),
          (U = Z[49]),
          (H = Z[50]),
          (W = Z[51]))
      return (
        Z[78] !== f ||
        Z[79] !== w ||
        Z[80] !== _ ||
        Z[81] !== T ||
        Z[82] !== P ||
        Z[83] !== B ||
        Z[84] !== U ||
        Z[85] !== H ||
        Z[86] !== W
          ? ((V = (0, i.jsxs)(f, { as: B, size: U, onSubmit: H, children: [W, w, _, T, P] })),
            (Z[78] = f),
            (Z[79] = w),
            (Z[80] = _),
            (Z[81] = T),
            (Z[82] = P),
            (Z[83] = B),
            (Z[84] = U),
            (Z[85] = H),
            (Z[86] = W),
            (Z[87] = V))
          : (V = Z[87]),
        Z[88] !== e_ || Z[89] !== eN || Z[90] !== eM || Z[91] !== M
          ? ((K =
              null != eM
                ? (0, i.jsx)(I.lG, {
                    open: !0,
                    onOpenChange: (e) => {
                      e || e_ || ew(null)
                    },
                    shouldIgnoreClickOutside: e_,
                    children: (0, i.jsxs)(v.R4, {
                      as: "form",
                      onSubmit: (e) => {
                        ;(e.preventDefault(), M())
                      },
                      children: [
                        (0, i.jsx)(v.c7, {
                          title: (0, i.jsx)(I.L3, {
                            children: (0, i.jsx)(o.A, {
                              id: "codex.cme.dialog.removeConversationFromClaim",
                              defaultMessage: "Remove conversation from Claim?",
                              description: "Confirmation title before permanently removing CME eligibility",
                            }),
                          }),
                        }),
                        (0, i.jsxs)(v.OO, {
                          children: [
                            (0, i.jsx)(I.rr, {
                              children: (0, i.jsx)(o.A, {
                                id: "codex.cme.dialog.thisConversationWillNoLongerAppearInYour",
                                defaultMessage: "This conversation will no longer appear in your Claim list",
                                description:
                                  "Explains that removing a CME entry permanently removes it from the claim list, not the conversation",
                              }),
                            }),
                            eN
                              ? (0, i.jsx)("p", { role: "alert", className: "text-sm text-danger", children: eN })
                              : null,
                          ],
                        }),
                        (0, i.jsx)(v.OO, {
                          children: (0, i.jsxs)(v.Es, {
                            children: [
                              (0, i.jsx)(m.$, {
                                color: "secondary",
                                disabled: e_,
                                onClick: () => ew(null),
                                children: (0, i.jsx)(o.A, {
                                  id: "codex.cme.dialog.cancel",
                                  defaultMessage: "Cancel",
                                  description: "Cancel removal of a CME conversation",
                                }),
                              }),
                              (0, i.jsx)(m.$, {
                                type: "submit",
                                color: "danger",
                                loading: e_,
                                children: (0, i.jsx)(o.A, {
                                  id: "codex.cme.dialog.remove",
                                  defaultMessage: "Remove",
                                  description: "Confirm permanent removal from the CME claim list",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  })
                : null),
            (Z[88] = e_),
            (Z[89] = eN),
            (Z[90] = eM),
            (Z[91] = M),
            (Z[92] = K))
          : (K = Z[92]),
        Z[93] !== h ||
        Z[94] !== O ||
        Z[95] !== L ||
        Z[96] !== z ||
        Z[97] !== F ||
        Z[98] !== D ||
        Z[99] !== V ||
        Z[100] !== K
          ? ((Q = (0, i.jsxs)(h, {
              open: O,
              contentProps: L,
              onOpenChange: z,
              size: F,
              shouldIgnoreClickOutside: D,
              children: [V, K],
            })),
            (Z[93] = h),
            (Z[94] = O),
            (Z[95] = L),
            (Z[96] = z),
            (Z[97] = F),
            (Z[98] = D),
            (Z[99] = V),
            (Z[100] = K),
            (Z[101] = Q))
          : (Q = Z[101]),
        Q
      )
    }
    function G(e) {
      return e.conversation_id
    }
    function Y(e) {
      return e.conversations
    }
    function U() {
      let e,
        t = (0, l.c)(2),
        a = (0, n.Ul)(j.OX)
      return (
        t[0] !== a
          ? ((e = null == a ? null : (0, i.jsx)(H, { identity: a }, `${a.accountId}:${a.userId}`)),
            (t[0] = a),
            (t[1] = e))
          : (e = t[1]),
        e
      )
    }
    function H(e) {
      let t,
        a,
        v,
        y,
        b,
        M,
        w,
        _,
        A,
        N,
        E,
        S,
        I,
        k,
        T,
        P,
        O,
        R,
        L,
        q,
        z,
        F,
        D,
        $,
        G = (0, l.c)(79),
        { identity: Y } = e,
        U = (0, r.A)(),
        H = (0, d.Zp)(),
        [K, Q] = (0, s.useState)("available")
      G[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Set()), (G[0] = t)) : (t = G[0])
      let [Z, X] = (0, s.useState)(t),
        [J, ee] = (0, s.useState)(!1),
        { data: et, isLoading: ea, isError: ei, refetch: el } = (0, n._U)(j.Zf, Y)
      G[1] !== Y || G[2] !== K
        ? ((a = "claimed" === K ? { ...Y, status: "claimed" } : Y), (G[1] = Y), (G[2] = K), (G[3] = a))
        : (a = G[3])
      let {
        data: en,
        isLoading: es,
        isError: er,
        refetch: eo,
        hasNextPage: ec,
        fetchNextPage: ed,
        isFetchingNextPage: eu,
      } = (0, n._U)(j.CC, a)
      G[4] !== en?.pages || G[5] !== en?.pages.flatMap || G[6] !== Z
        ? ((v = en?.pages.flatMap(V)),
          (y = v?.filter((e) => Z.has(e.conversation_id))),
          (G[4] = en?.pages),
          (G[5] = en?.pages.flatMap),
          (G[6] = Z),
          (G[7] = v),
          (G[8] = y))
        : ((v = G[7]), (y = G[8]))
      let em = y,
        ep = "available" === K ? (em?.length ?? 0) : 0,
        ex = null != v && v.length > 0 && ep === v.length
      return (
        G[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((b = (0, i.jsxs)("span", {
              className: "flex flex-col items-start gap-4",
              children: [
                (0, i.jsx)(x.uZ4, {}),
                (0, i.jsx)(o.A, {
                  id: "codex.cme.page.title",
                  defaultMessage: "Continuing Medical Education (CME)",
                  description: "Heading for the CME credits page",
                }),
              ],
            })),
            (M = (0, i.jsx)(o.A, {
              id: "codex.cme.page.subtitle",
              defaultMessage: "Claim your CME",
              description: "Subtitle for the continuing medical education page",
            })),
            (G[9] = b),
            (G[10] = M))
          : ((b = G[9]), (M = G[10])),
        G[11] !== U
          ? ((w = U.formatMessage({
              id: "codex.cme.page.tabs",
              defaultMessage: "CME activities",
              description: "Accessible label for available and claimed CME activity tabs",
            })),
            (G[11] = U),
            (G[12] = w))
          : (w = G[12]),
        G[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = {
              key: "available",
              name: (0, i.jsx)(o.A, {
                id: "codex.cme.page.available",
                defaultMessage: "Available",
                description: "Tab listing unclaimed CME activities",
              }),
            }),
            (G[13] = _))
          : (_ = G[13]),
        G[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = [
              _,
              {
                key: "claimed",
                name: (0, i.jsx)(o.A, {
                  id: "codex.cme.page.claimed",
                  defaultMessage: "Claimed",
                  description: "Tab listing previously claimed CME activities",
                }),
              },
            ]),
            (G[14] = A))
          : (A = G[14]),
        G[15] !== w || G[16] !== K
          ? ((N = (0, i.jsx)(f.uC, {
              inset: !1,
              children: (0, i.jsx)(h.t, { ariaLabel: w, selectedKey: K, variant: "browse", onSelect: Q, tabs: A }),
            })),
            (G[15] = w),
            (G[16] = K),
            (G[17] = N))
          : (N = G[17]),
        G[18] !== et || G[19] !== H || G[20] !== K
          ? ((E =
              "available" !== K || null == et || et.is_complete
                ? null
                : (0, i.jsx)(u.l, {
                    variant: "settings",
                    icon: (0, i.jsx)(x.pq1, {}),
                    stackOnNarrow: !0,
                    content: (0, i.jsx)(o.A, {
                      id: "codex.cme.dialog.completeYourCmeProfileInAccountSettingsAnd",
                      defaultMessage:
                        "Complete your CME profile in Account settings and confirm physician eligibility to claim CME credits",
                      description: "Explains why the user cannot proceed with CME credit claiming",
                    }),
                    primaryCtaText: (0, i.jsx)(o.A, {
                      id: "codex.cme.page.accountSettings",
                      defaultMessage: "Account settings",
                      description: "Button to complete the medical profile needed to claim CME credits",
                    }),
                    onPrimaryCtaClick: () => void H("/settings/account"),
                  })),
            (G[18] = et),
            (G[19] = H),
            (G[20] = K),
            (G[21] = E))
          : (E = G[21]),
        G[22] !== ea || G[23] !== K
          ? ((S =
              ea && "available" === K
                ? (0, i.jsx)("p", {
                    role: "status",
                    children: (0, i.jsx)(o.A, {
                      id: "codex.cme.dialog.loadingCmeProfile",
                      defaultMessage: "Loading CME profile…",
                      description: "CME medical profile loading status",
                    }),
                  })
                : null),
            (G[22] = ea),
            (G[23] = K),
            (G[24] = S))
          : (S = G[24]),
        G[25] !== ei || G[26] !== el || G[27] !== K
          ? ((I =
              ei && "available" === K
                ? (0, i.jsx)(u.l, {
                    type: "error",
                    content: (0, i.jsx)(o.A, {
                      id: "codex.cme.dialog.unableToLoadYourCmeProfile",
                      defaultMessage: "Unable to load your CME profile",
                      description: "CME medical profile loading failure",
                    }),
                    primaryCtaText: (0, i.jsx)(o.A, {
                      id: "codex.cme.page.retryProfile",
                      defaultMessage: "Try again",
                      description: "Retry loading the CME medical profile",
                    }),
                    onPrimaryCtaClick: () => void el(),
                  })
                : null),
            (G[25] = ei),
            (G[26] = el),
            (G[27] = K),
            (G[28] = I))
          : (I = G[28]),
        G[29] !== es
          ? ((k = es
              ? (0, i.jsxs)("div", {
                  role: "status",
                  className: "flex justify-center gap-2 py-10",
                  children: [
                    (0, i.jsx)(g.y, {}),
                    (0, i.jsx)(o.A, {
                      id: "codex.cme.page.loading",
                      defaultMessage: "Loading CME activities…",
                      description: "Status while fetching available or claimed CME activities",
                    }),
                  ],
                })
              : null),
            (G[29] = es),
            (G[30] = k))
          : (k = G[30]),
        G[31] !== ex || G[32] !== v || G[33] !== U || G[34] !== H || G[35] !== ep || G[36] !== Z || G[37] !== K
          ? ((T =
              null != v && v.length > 0
                ? (0, i.jsx)("div", {
                    className: "overflow-x-auto",
                    children: (0, i.jsxs)("table", {
                      className: "w-full text-start text-sm",
                      children: [
                        (0, i.jsx)("thead", {
                          className: "text-secondary",
                          children: (0, i.jsxs)("tr", {
                            className: "border-b border-default",
                            children: [
                              "available" === K
                                ? (0, i.jsx)("th", {
                                    scope: "col",
                                    className: "w-12 py-3 pe-4",
                                    children: (0, i.jsx)("div", {
                                      className: "relative flex justify-center",
                                      children: (0, i.jsx)(p.S, {
                                        checked: ep > 0 && (ex || "indeterminate"),
                                        onCheckedChange: () => X(ex ? new Set() : new Set(v.map(W))),
                                        "aria-label": U.formatMessage({
                                          id: "codex.cme.page.selectAll",
                                          defaultMessage: "Select all loaded activities",
                                          description: "Select only the CME activities loaded in the current list",
                                        }),
                                      }),
                                    }),
                                  })
                                : null,
                              (0, i.jsx)("th", {
                                scope: "col",
                                className: "w-24 py-3 pe-4 text-start font-normal",
                                children: (0, i.jsx)(o.A, {
                                  id: "codex.cme.page.credits",
                                  defaultMessage: "Credits",
                                  description: "Table column showing credits awarded for a CME activity",
                                }),
                              }),
                              (0, i.jsx)("th", {
                                scope: "col",
                                className: "py-3 pe-4 text-start font-normal",
                                children: (0, i.jsx)(o.A, {
                                  id: "codex.cme.page.conversation",
                                  defaultMessage: "Conversation",
                                  description: "Table column showing the CME conversation title",
                                }),
                              }),
                              (0, i.jsx)("th", {
                                scope: "col",
                                className: "py-3 text-start font-normal whitespace-nowrap",
                                children:
                                  "claimed" === K
                                    ? (0, i.jsx)(o.A, {
                                        id: "codex.cme.page.dateClaimed",
                                        defaultMessage: "Date claimed",
                                        description: "Date the CME credit claim was approved",
                                      })
                                    : (0, i.jsx)(o.A, {
                                        id: "codex.cme.page.date",
                                        defaultMessage: "Date",
                                        description: "Date the CME conversation was created",
                                      }),
                              }),
                            ],
                          }),
                        }),
                        (0, i.jsx)("tbody", {
                          children: v.map((e) => {
                            let t =
                                e.title ||
                                e.prompt_text ||
                                U.formatMessage({
                                  id: "codex.cme.page.untitled",
                                  defaultMessage: "Untitled conversation",
                                  description: "Fallback title for a CME conversation with no title",
                                }),
                              a = "claimed" === K ? e.claimed_at : e.created_at
                            return (0, i.jsxs)(
                              "tr",
                              {
                                className: "border-b border-default",
                                children: [
                                  "available" === K
                                    ? (0, i.jsx)("td", {
                                        className: "py-4 pe-4",
                                        children: (0, i.jsx)("div", {
                                          className: "relative flex justify-center",
                                          children: (0, i.jsx)(p.S, {
                                            checked: Z.has(e.conversation_id),
                                            onCheckedChange: (t) =>
                                              X((a) => {
                                                let i = new Set(a)
                                                return (t ? i.add(e.conversation_id) : i.delete(e.conversation_id), i)
                                              }),
                                            "aria-label": U.formatMessage(
                                              {
                                                id: "codex.cme.page.selectActivity",
                                                defaultMessage: "Select {title}",
                                                description: "Select a named CME activity for a credit claim",
                                              },
                                              { title: t },
                                            ),
                                          }),
                                        }),
                                      })
                                    : null,
                                  (0, i.jsx)("td", {
                                    className: "py-4 pe-4",
                                    children:
                                      null != e.credits
                                        ? (0, i.jsx)(c.Gr, { value: e.credits, maximumFractionDigits: 2 })
                                        : (0, i.jsx)(o.A, {
                                            id: "codex.cme.page.unavailableValue",
                                            defaultMessage: "—",
                                            description: "Placeholder for a missing CME date or credit amount",
                                          }),
                                  }),
                                  (0, i.jsx)("td", {
                                    className: "max-w-0 py-4 pe-4",
                                    children: (0, i.jsx)("button", {
                                      type: "button",
                                      className: "block w-full cursor-interaction truncate text-start hover:underline",
                                      title: t,
                                      onClick: () => void H(`/c/${e.conversation_id}`),
                                      children: t,
                                    }),
                                  }),
                                  (0, i.jsx)("td", {
                                    className: "py-4 whitespace-nowrap text-secondary",
                                    children: a
                                      ? (0, i.jsx)(c.XU, { value: a, year: "numeric", month: "short", day: "numeric" })
                                      : (0, i.jsx)(o.A, {
                                          id: "codex.cme.page.unavailableValue",
                                          defaultMessage: "—",
                                          description: "Placeholder for a missing CME date or credit amount",
                                        }),
                                  }),
                                ],
                              },
                              e.conversation_id,
                            )
                          }),
                        }),
                      ],
                    }),
                  })
                : null),
            (G[31] = ex),
            (G[32] = v),
            (G[33] = U),
            (G[34] = H),
            (G[35] = ep),
            (G[36] = Z),
            (G[37] = K),
            (G[38] = T))
          : (T = G[38]),
        G[39] !== v?.length || G[40] !== er || G[41] !== es || G[42] !== K
          ? ((P =
              es || er || v?.length !== 0
                ? null
                : (0, i.jsx)("p", {
                    className: "py-10 text-center text-secondary",
                    children:
                      "claimed" === K
                        ? (0, i.jsx)(o.A, {
                            id: "codex.cme.page.emptyClaimed",
                            defaultMessage: "No claimed CME activities yet",
                            description: "Empty state for previously claimed CME activities",
                          })
                        : (0, i.jsx)(o.A, {
                            id: "codex.cme.page.emptyAvailable",
                            defaultMessage: "No CME activities available to claim",
                            description: "Empty state when no conversations are eligible for CME credit",
                          }),
                  })),
            (G[39] = v?.length),
            (G[40] = er),
            (G[41] = es),
            (G[42] = K),
            (G[43] = P))
          : (P = G[43]),
        G[44] !== er || G[45] !== eo
          ? ((O = er
              ? (0, i.jsx)(u.l, {
                  type: "error",
                  content: (0, i.jsx)(o.A, {
                    id: "codex.cme.page.loadError",
                    defaultMessage: "Unable to load CME activities",
                    description: "Failure fetching CME activity history",
                  }),
                  primaryCtaText: (0, i.jsx)(o.A, {
                    id: "codex.cme.page.retryActivities",
                    defaultMessage: "Try again",
                    description: "Retry fetching CME activities",
                  }),
                  onPrimaryCtaClick: () => void eo(),
                })
              : null),
            (G[44] = er),
            (G[45] = eo),
            (G[46] = O))
          : (O = G[46]),
        G[47] !== ed || G[48] !== ec || G[49] !== eu
          ? ((R = ec
              ? (0, i.jsx)("div", {
                  children: (0, i.jsx)(m.$, {
                    color: "secondary",
                    loading: eu,
                    onClick: () => void ed(),
                    children: (0, i.jsx)(o.A, {
                      id: "codex.cme.page.loadMore",
                      defaultMessage: "Load more",
                      description: "Load more CME activities in the selected tab",
                    }),
                  }),
                })
              : null),
            (G[47] = ed),
            (G[48] = ec),
            (G[49] = eu),
            (G[50] = R))
          : (R = G[50]),
        G[51] !== Y || G[52] !== K
          ? ((L =
              "claimed" === K
                ? (0, i.jsx)("section", {
                    className: "flex flex-col gap-4",
                    children: (0, i.jsx)(C, { identity: Y, approvedYear: null }),
                  })
                : null),
            (G[51] = Y),
            (G[52] = K),
            (G[53] = L))
          : (L = G[53]),
        G[54] !== E ||
        G[55] !== S ||
        G[56] !== I ||
        G[57] !== k ||
        G[58] !== T ||
        G[59] !== P ||
        G[60] !== O ||
        G[61] !== R ||
        G[62] !== L
          ? ((q = (0, i.jsxs)("div", { className: "flex flex-col gap-6 pb-6", children: [E, S, I, k, T, P, O, R, L] })),
            (G[54] = E),
            (G[55] = S),
            (G[56] = I),
            (G[57] = k),
            (G[58] = T),
            (G[59] = P),
            (G[60] = O),
            (G[61] = R),
            (G[62] = L),
            (G[63] = q))
          : (q = G[63]),
        G[64] !== q || G[65] !== N
          ? ((z = (0, i.jsx)(f.Ql, { headerVariant: "compact", title: b, subtitle: M, controls: N, children: q })),
            (G[64] = q),
            (G[65] = N),
            (G[66] = z))
          : (z = G[66]),
        G[67] !== et?.is_complete || G[68] !== ei || G[69] !== ep
          ? ((F =
              ep > 0
                ? (0, i.jsxs)("div", {
                    className: "flex shrink-0 items-center justify-between gap-4 border-t border-default px-6 py-4",
                    children: [
                      (0, i.jsx)("span", {
                        "aria-live": "polite",
                        children: (0, i.jsx)(o.A, {
                          id: "codex.cme.page.selected",
                          defaultMessage: "{count, plural, one {# activity selected} other {# activities selected}}",
                          description: "Number of CME activities selected for a claim",
                          values: { count: ep },
                        }),
                      }),
                      (0, i.jsx)(m.$, {
                        color: "primary",
                        disabled: et?.is_complete !== !0 || ei,
                        onClick: () => ee(!0),
                        children: (0, i.jsx)(o.A, {
                          id: "codex.cme.page.claim",
                          defaultMessage: "Claim CME",
                          description: "Start the questionnaire and consent step for selected CME activities",
                        }),
                      }),
                    ],
                  })
                : null),
            (G[67] = et?.is_complete),
            (G[68] = ei),
            (G[69] = ep),
            (G[70] = F))
          : (F = G[70]),
        G[71] !== J || G[72] !== Y || G[73] !== Z
          ? ((D = J
              ? (0, i.jsx)(B, {
                  identity: Y,
                  initialSelectedIds: Z,
                  onClose: () => ee(!1),
                  onClaimApproved: () => {
                    ;(ee(!1), X(new Set()), Q("claimed"))
                  },
                })
              : null),
            (G[71] = J),
            (G[72] = Y),
            (G[73] = Z),
            (G[74] = D))
          : (D = G[74]),
        G[75] !== z || G[76] !== F || G[77] !== D
          ? (($ = (0, i.jsxs)("div", { className: "flex h-full min-h-0 flex-col", children: [z, F, D] })),
            (G[75] = z),
            (G[76] = F),
            (G[77] = D),
            (G[78] = $))
          : ($ = G[78]),
        $
      )
    }
    function W(e) {
      return e.conversation_id
    }
    function V(e) {
      return e.conversations
    }
  },
  v3GR(e, t, a) {
    var i = a("zTeN"),
      l = a("ChYf"),
      n = a("SPnB"),
      s = a("Ghh3"),
      r = a("OWtl"),
      o = a("CwT5"),
      c = a("ripK"),
      d = a("rvFo")
    let u = (0, i.un)(r.u, ({ get: e }) => {
        if (!e(l.G, { name: "chatgpt.cme" }).isCapable) return null
        let t = e(n.m0),
          { userId: a } = e(n.PO)
        return "allowed" === t.status && "accountId" in t && null != t.accountId && null != a
          ? { accountId: t.accountId, userId: a }
          : null
      }),
      m = (0, i.vU)(r.u, (e, { get: t, scope: a }) => ({
        queryKey: ["cme-account", e.accountId, e.userId],
        enabled: f(e, t(u)),
        staleTime: d.D.FIVE_MINUTES,
        queryFn: async ({ signal: t }) => {
          g(a, e)
          let i = await s.Request.safeGet("/cme/account", {
            additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
            signal: t,
          })
          return (g(a, e), i)
        },
      })),
      p = (0, i.N3)(r.u, (e, { get: t, scope: a }) => ({
        queryKey: ["claimed" === e.status ? "cme-claimed-conversations" : "cme-conversations", e.accountId, e.userId],
        enabled: f(e, t(u)),
        staleTime: 0,
        gcTime: 0,
        initialPageParam: 1,
        getNextPageParam: (e) => e.next_page ?? void 0,
        queryFn: async ({ pageParam: t, signal: i }) => {
          g(a, e)
          let l = await s.Request.safeGet("/cme/conversations", {
            parameters: { query: { page: t, page_size: 25, status: e.status } },
            additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
            signal: i,
          })
          return (g(a, e), l)
        },
      })),
      x = (0, i.N3)(r.u, (e, { get: t, scope: a }) => ({
        queryKey: ["cme-credits", e.accountId, e.userId],
        enabled: f(e, t(u)),
        staleTime: 0,
        gcTime: 0,
        initialPageParam: 1,
        getNextPageParam: (e) => e.next_page ?? void 0,
        queryFn: async ({ pageParam: t, signal: i }) => {
          g(a, e)
          let l = await s.Request.safeGet("/cme/credits", {
            parameters: { query: { page: t, page_size: 25 } },
            additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
            signal: i,
          })
          return (g(a, e), l)
        },
      }))
    function f(e, t) {
      return e.accountId === t?.accountId && e.userId === t.userId
    }
    function g(e, t) {
      if (!f(t, e.get(u))) throw Error("CME workspace or user changed during the request.")
    }
    a.d(
      t,
      {},
      {
        CC: p,
        CP: x,
        Kt: async function (e, t, a) {
          g(e, t)
          let i = await s.Request.safePatch("/cme/account", {
            requestBody: a,
            additionalHeaders: { "ChatGPT-Account-Id": t.accountId },
          })
          return (g(e, t), e.query.setData(m, t, i), await e.query.invalidate(m, t), g(e, t), i)
        },
        OX: u,
        ZB: async function (e, t, a) {
          ;(g(e, t),
            await s.Request.safePost("/cme/conversations/{conversation_id}/remove", {
              parameters: { path: { conversation_id: a } },
              additionalHeaders: { "ChatGPT-Account-Id": t.accountId },
            }),
            g(e, t),
            await e.query.invalidate(p, t),
            g(e, t))
        },
        Zf: m,
        mL: async function (e, t, a) {
          g(e, t)
          let i = await s.Request.getResponse("/cme/credits/{calendar_year}/artifact", {
              parameters: { path: { calendar_year: a } },
              additionalHeaders: { "ChatGPT-Account-Id": t.accountId },
            }),
            l = await i.blob()
          ;(g(e, t), (0, c.W)(l, (0, o.u)(i.headers.get("Content-Disposition")) ?? `cme-transcript-${a}.pdf`))
        },
        qk: async function (e, t, a) {
          g(e, t)
          let i = await s.Request.safePost("/cme/claims", {
            requestBody: a,
            additionalHeaders: { "ChatGPT-Account-Id": t.accountId },
          })
          return (
            g(e, t),
            await Promise.all([
              e.query.invalidate(p, t),
              e.query.invalidate(p, { ...t, status: "claimed" }),
              e.query.invalidate(x, t),
            ]),
            g(e, t),
            i
          )
        },
      },
    )
  },
  CwT5(e, t, a) {
    function i(e) {
      if (0 === e.trim().length || "." === e || ".." === e || e.includes("/") || e.includes("\\")) return !1
      for (let t of e) {
        let e = t.charCodeAt(0)
        if (e <= 31 || 127 === e) return !1
      }
      return !0
    }
    a.d(
      t,
      {},
      {
        u: function (e) {
          if (!e) return null
          let t = new Map()
          for (let a of e.matchAll(/(?:^|;)\s*([^=\s;]+)\s*=\s*(?:"((?:\\.|[^"\\])*)"|([^;]*))/g)) {
            let e = a[1]?.toLowerCase()
            if ("filename" !== e && "filename*" !== e) continue
            let i = a[2],
              l = void 0 === i ? (a[3]?.trim() ?? "") : i.replace(/\\"/g, '"')
            t.has(e) || t.set(e, l)
          }
          let a = t.get("filename*"),
            l = a?.match(/^utf-8'[^']*'(.*)$/i)?.[1]
          if (l)
            try {
              let e = decodeURIComponent(l)
              if (i(e)) return e
            } catch {}
          let n = t.get("filename")
          return n && i(n) ? n : null
        },
      },
    )
  },
}
//# sourceMappingURL=583168.7bf35e5b71.js.map
