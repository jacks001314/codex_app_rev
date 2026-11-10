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
        h = (0, s.useId)(),
        g = a ?? `${e}-${h}`
      return (0, i.jsx)("div", {
        className: "RadioOptionWrapper-lfJup3",
        "data-variant": x,
        ...m,
        children: (0, i.jsxs)("label", {
          htmlFor: g,
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
                id: g,
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
            { ariaLabel: u, className: m, options: p, selectedId: x, animateSelection: f, size: h, onSelect: g } = e,
            v = void 0 === f || f,
            y = void 0 === h ? "default" : h,
            b = (0, r.useId)(),
            j =
              "compact" === y
                ? "inline-grid gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5"
                : "bg-text/10 inline-grid gap-1 rounded-2xl p-1"
          d[0] !== m || d[1] !== j ? ((t = (0, n.A)(j, m)), (d[0] = m), (d[1] = j), (d[2] = t)) : (t = d[2])
          let C = `repeat(${p.length}, minmax(0, 1fr))`
          if (
            (d[3] !== C ? ((a = { gridTemplateColumns: C }), (d[3] = C), (d[4] = a)) : (a = d[4]),
            d[5] !== v || d[6] !== b || d[7] !== g || d[8] !== p || d[9] !== x || d[10] !== y)
          ) {
            let e
            ;(d[12] !== v || d[13] !== b || d[14] !== g || d[15] !== x || d[16] !== y
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
                        g(e.id)
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
                (d[14] = g),
                (d[15] = x),
                (d[16] = y),
                (d[17] = e))
              : (e = d[17]),
              (o = p.map(e)),
              (d[5] = v),
              (d[6] = b),
              (d[7] = g),
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
      h = a("I7bK"),
      g = a("MeAu"),
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
            F,
            z,
            D,
            $,
            B,
            G,
            Y,
            U,
            H,
            W,
            Q,
            V,
            K,
            Z,
            X,
            J,
            ee,
            et = (0, l.c)(205),
            {
              animateContentLayout: ea,
              collapseHeaderOnScroll: ei,
              expandSearchWhenWrapped: el,
              banner: en,
              bannerAfterHeader: es,
              bannerPlacement: er,
              children: eo,
              contentClassName: ec,
              contentInset: ed,
              contentWidth: eu,
              controls: em,
              headerAction: ep,
              headerFade: ex,
              headerPlacement: ef,
              headerVariant: eh,
              horizontalPaddingClassName: eg,
              reserveSelectionGutter: ev,
              balanceScrollbarGutter: ey,
              navigation: eb,
              pageActions: ej,
              scrollContainerRef: eC,
              search: eM,
              searchContent: ew,
              searchPlacement: e_,
              searchToolbar: eA,
              stickyControls: eN,
              subtitle: eE,
              title: eS,
              titleRef: eI,
              toolbarActions: ek,
              toolbarInset: eT,
              wrapActionsAtNarrowWidth: eP,
            } = e,
            eO = void 0 !== ei && ei,
            eR = void 0 !== el && el,
            eL = void 0 !== es && es,
            eq = void 0 === ed || ed,
            eF = void 0 === eu ? "default" : eu,
            ez = void 0 === ex ? "always" : ex,
            eD = void 0 === ef ? "page" : ef,
            e$ = void 0 === eh ? "default" : eh,
            eB = void 0 !== ev && ev,
            eG = void 0 !== ey && ey,
            eY = void 0 === e_ ? "sticky" : e_,
            eU = void 0 === eT || eT,
            eH = (0, d.Ul)(p.GB),
            eW = (0, m.dz)(),
            eQ = "profileManager" === e$,
            eV = "px-panel"
          "profile" === eF
            ? (eV = eQ ? "px-4 @lg/manager:px-16" : "px-5 sm:px-16")
            : "directory" === eF && (eV = "px-4 md:px-panel")
          let eK = (0, n.A)(
              eB
                ? "px-18"
                : (eg ??
                    (0, n.A)(
                      eV,
                      ("medium" === eF || "extraWide" === eF) && "compact" === e$ ? "px-6 lg:px-12" : void 0,
                    )),
              eH &&
                (eB
                  ? "[[data-app-shell-compact-page-gutter=true]_&]:px-14"
                  : null == eg && "profile" !== eF && "[[data-app-shell-compact-page-gutter=true]_&]:px-7.5"),
            ),
            [eZ] = (0, u.useState)(j),
            [eX, eJ] = (0, u.useState)(!1),
            [e0, e1] = (0, u.useState)(!1),
            e2 = (0, u.useRef)(null),
            e3 = (0, u.useRef)(null),
            e4 = (0, u.useRef)(null),
            [e5, e6] = (0, u.useState)(!1),
            [e7, e8] = (0, u.useState)(),
            e9 = (0, u.useRef)(null),
            te = (0, u.useRef)(null)
          et[0] !== eC ? ((t = (0, x.P)(e2, eC)), (et[0] = eC), (et[1] = t)) : (t = et[1])
          let tt = t,
            ta = (0, u.useRef)(null),
            ti = (0, u.useRef)(null),
            [tl, tn] = (0, u.useState)(),
            ts = document.activeElement,
            tr = "none" !== eD,
            to = "toolbar" === eD,
            tc = "scroll" === eD && e0,
            td = to || tc,
            tu = b[e$],
            tm = "directory" === e$,
            tp = "compact" === e$,
            tx = "profile" === e$ || eQ,
            tf = null != eM || null != ew,
            th = "sticky" === eD,
            tg = th && eO,
            tv = th || "inline" === eD,
            ty = "bottom-on-scroll" === eY && tf && !tv,
            tb = eH && !tx && !tm && "browser:max-md:text-lg browser:max-md:font-medium",
            tj = {
              directory: "max-w-[calc(768px+var(--padding-panel)*2)]",
              extraWide: "max-w-[1440px]",
              wide: "max-w-5xl",
              medium: "max-w-[960px]",
              default: "max-w-[var(--thread-content-max-width)]",
              profile: eQ ? "max-w-[1144px]" : "max-w-4xl",
            }[eF],
            tC = (!to && null != eb) || null != ej,
            tM = (0, s.I)()
          et[2] !== tM ? ((a = tM ? { duration: 0 } : h.m9), (et[2] = tM), (et[3] = a)) : (a = et[3])
          let tw = a,
            t_ = eM?.autoFocus ?? (null == ts || ts === document.body || ts === document.documentElement || ts === eZ)
          ;(et[4] !== ty
            ? ((_ = () => {
                let e = e2.current,
                  t = e3.current,
                  a = e4.current
                if (!ty || null == e || null == t || null == a) return
                let i = new IntersectionObserver(
                    (e) => {
                      let [t] = e
                      e6(!t.isIntersecting && t.boundingClientRect.bottom <= (t.rootBounds?.top ?? 0))
                    },
                    { root: e },
                  ),
                  l = new ResizeObserver((e) => {
                    let [t] = e,
                      i = t.borderBoxSize?.[0]?.blockSize ?? a.offsetHeight
                    i && e8(i)
                  })
                return (
                  i.observe(t),
                  l.observe(a, { box: "border-box" }),
                  () => {
                    ;(i.disconnect(), l.disconnect())
                  }
                )
              }),
              (A = [ty]),
              (et[4] = ty),
              (et[5] = _),
              (et[6] = A))
            : ((_ = et[5]), (A = et[6])),
            (0, u.useLayoutEffect)(_, A),
            et[7] !== ty || et[8] !== tM
              ? ((N = () => {
                  let e = e4.current
                  if (!ty || null == e) return
                  let t = (0, r.i)(
                    e,
                    { opacity: [0, 1], y: [24, 0] },
                    { type: "tween", ease: "easeInOut", duration: 0.25 * !tM },
                  )
                  return () => t.stop()
                }),
                (et[7] = ty),
                (et[8] = tM),
                (et[9] = N))
              : (N = et[9]),
            et[10] !== ty || et[11] !== e5 || et[12] !== tM
              ? ((E = [ty, e5, tM]), (et[10] = ty), (et[11] = e5), (et[12] = tM), (et[13] = E))
              : (E = et[13]),
            (0, u.useLayoutEffect)(N, E),
            et[14] !== th || et[15] !== eH || et[16] !== eW
              ? ((S = () => {
                  let e = e2.current,
                    t = e9.current
                  if (!eH || !th || null == e || null == t) return
                  let a = new ResizeObserver(() => {
                    C(e, t, eW)
                  })
                  return (
                    a.observe(e),
                    a.observe(t),
                    () => {
                      ;(a.disconnect(), t.style.removeProperty("--header-background-top-inset"))
                    }
                  )
                }),
                (I = [eH, th, eW]),
                (et[14] = th),
                (et[15] = eH),
                (et[16] = eW),
                (et[17] = S),
                (et[18] = I))
              : ((S = et[17]), (I = et[18])),
            (0, u.useLayoutEffect)(S, I),
            et[19] !== eD
              ? ((k = () => {
                  let e = ta.current,
                    t = e2.current
                  if ("scroll" !== eD || null == e || null == t) return
                  let a = new IntersectionObserver(
                    (e) => {
                      let [t] = e
                      e1(!t.isIntersecting && t.boundingClientRect.bottom <= (t.rootBounds?.top ?? 0))
                    },
                    { root: t, threshold: 0 },
                  )
                  return (a.observe(e), () => a.disconnect())
                }),
                (T = [eD]),
                (et[19] = eD),
                (et[20] = k),
                (et[21] = T))
              : ((k = et[20]), (T = et[21])),
            (0, u.useLayoutEffect)(k, T),
            et[22] !== eD || et[23] !== tc
              ? ((P = () => {
                  let e = ti.current
                  if ("scroll" !== eD || tc || null == e) return
                  let t = new ResizeObserver(() => {
                    tn({ width: e.offsetWidth, height: e.offsetHeight })
                  })
                  return (t.observe(e), () => t.disconnect())
                }),
                (O = [eD, tc]),
                (et[22] = eD),
                (et[23] = tc),
                (et[24] = P),
                (et[25] = O))
              : ((P = et[24]), (O = et[25])),
            (0, u.useLayoutEffect)(P, O))
          let tA =
            null == en
              ? null
              : (0, i.jsx)("div", {
                  className: (0, n.A)(
                    "w-full empty:hidden",
                    "inset" === (void 0 === er ? "inset" : er) && ["mx-auto pt-panel", tj, eK],
                  ),
                  children: en,
                })
          et[26] !== tr ||
          et[27] !== ep ||
          et[28] !== e$ ||
          et[29] !== tx ||
          et[30] !== to ||
          et[31] !== eb ||
          et[32] !== tc ||
          et[33] !== td ||
          et[34] !== tb ||
          et[35] !== eS ||
          et[36] !== eI ||
          et[37] !== ek ||
          et[38] !== eU ||
          et[39] !== tw
            ? ((R =
                tr && (td || null != ek)
                  ? (0, i.jsx)(f.F, {
                      divider: !tx,
                      children: (0, i.jsxs)(g.oE, {
                        inset: eU,
                        children: [
                          (0, i.jsx)(o.N, {
                            initial: !1,
                            children: td
                              ? (0, i.jsx)(
                                  c.P.div,
                                  {
                                    animate: { opacity: 1, transform: "translateY(0)" },
                                    className: "min-w-0 flex-1 overflow-hidden",
                                    "data-app-shell-overlay-page-header": (tc && null == ek) || void 0,
                                    exit: { opacity: 0, transform: "translateY(4px)" },
                                    initial: { opacity: 0, transform: "translateY(4px)" },
                                    transition: tw,
                                    children:
                                      to && null != eb
                                        ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                              (0, i.jsx)("h1", { ref: eI, className: "sr-only", children: eS }),
                                              eb,
                                            ],
                                          })
                                        : (0, i.jsx)("h1", {
                                            ref: eI,
                                            className: (0, n.A)(
                                              "min-w-0 truncate text-base text-default electron:font-medium",
                                              tb,
                                              "inset" === e$ ? "px-2" : null,
                                            ),
                                            children: eS,
                                          }),
                                  },
                                  "toolbar-heading",
                                )
                              : null,
                          }),
                          null != ek || tc
                            ? (0, i.jsxs)("div", {
                                className: "ms-auto flex min-w-0 items-center justify-end gap-2",
                                children: [tc ? ep : null, ek],
                              })
                            : null,
                        ],
                      }),
                    })
                  : null),
              (et[26] = tr),
              (et[27] = ep),
              (et[28] = e$),
              (et[29] = tx),
              (et[30] = to),
              (et[31] = eb),
              (et[32] = tc),
              (et[33] = td),
              (et[34] = tb),
              (et[35] = eS),
              (et[36] = eI),
              (et[37] = ek),
              (et[38] = eU),
              (et[39] = tw),
              (et[40] = R))
            : (R = et[40])
          let tN = ty || !tr ? "relative flex h-full min-h-0 flex-1 flex-col" : "contents",
            tE = !tr && !eH && "max-md:pt-[var(--height-toolbar)]",
            tS = !tr && eH && "browser:max-md:pt-[var(--height-toolbar)]",
            tI = !tr && "profile" === eF && "bg-surface-card"
          et[41] !== tN || et[42] !== tE || et[43] !== tS || et[44] !== tI
            ? ((L = (0, n.A)(tN, tE, tS, tI)), (et[41] = tN), (et[42] = tE), (et[43] = tS), (et[44] = tI), (et[45] = L))
            : (L = et[45])
          let tk = eH || void 0,
            tT = eQ && "@container/manager",
            tP = "profile" === eF && "bg-surface-card",
            tO =
              tm &&
              "bg-surface [--color-text:var(--gray-1000)] [--color-surface:light-dark(var(--gray-25),var(--black))]",
            tR = !eG && "[scrollbar-gutter:stable]",
            tL = eG && (tx ? "sm:[scrollbar-gutter:stable_both-edges]" : "md:[scrollbar-gutter:stable_both-edges]"),
            tq = !ty && "relative",
            tF = tc && "vertical-scroll-fade-mask-top"
          et[46] !== tT ||
          et[47] !== tP ||
          et[48] !== tO ||
          et[49] !== tR ||
          et[50] !== tL ||
          et[51] !== tq ||
          et[52] !== tF
            ? ((q = (0, n.A)("h-full min-h-0 flex-1 overflow-x-hidden overflow-y-auto", tT, tP, tO, tR, tL, tq, tF)),
              (et[46] = tT),
              (et[47] = tP),
              (et[48] = tO),
              (et[49] = tR),
              (et[50] = tL),
              (et[51] = tq),
              (et[52] = tF),
              (et[53] = q))
            : (q = et[53])
          let tz = (!to && null == ek && (!!tr || !tx)) || void 0,
            tD = "inline" === eD ? eX : void 0
          et[54] !== eO ||
          et[55] !== tv ||
          et[56] !== tf ||
          et[57] !== th ||
          et[58] !== ez ||
          et[59] !== eY ||
          et[60] !== eJ ||
          et[61] !== eH ||
          et[62] !== eN ||
          et[63] !== eW
            ? ((F =
                tv || ("when-scrolled" === ez && "sticky" === eY && (tf || null != eN))
                  ? (e) => {
                      let t = e9.current,
                        a = te.current
                      if (eO && !eH && null != t && null != a) {
                        t.style.setProperty("--header-scroll-position", `${e.currentTarget.scrollTop}px`)
                        let i = t.getBoundingClientRect()
                        t.style.setProperty(
                          "--header-scroll-overlap",
                          `${Math.max(0, ((i.bottom - a.getBoundingClientRect().top) * t.offsetHeight) / i.height + parseFloat(getComputedStyle(t).marginBottom))}px`,
                        )
                      }
                      ;(eJ(
                        eH && th && null != t
                          ? e.currentTarget.scrollTop > 0 &&
                              t.getBoundingClientRect().top <=
                                e.currentTarget.getBoundingClientRect().top + parseFloat(getComputedStyle(t).top)
                          : e.currentTarget.scrollTop > 0,
                      ),
                        eH && th && null != t && C(e.currentTarget, t, eW))
                    }
                  : void 0),
              (et[54] = eO),
              (et[55] = tv),
              (et[56] = tf),
              (et[57] = th),
              (et[58] = ez),
              (et[59] = eY),
              (et[60] = eJ),
              (et[61] = eH),
              (et[62] = eN),
              (et[63] = eW),
              (et[64] = F))
            : (F = et[64])
          let t$ = !tr && "h-full"
          ;(et[65] !== t$
            ? ((z = (0, n.A)("flex min-h-full w-full flex-col", t$)), (et[65] = t$), (et[66] = z))
            : (z = et[66]),
            et[67] !== ty || et[68] !== e7
              ? ((D = ty ? { paddingBottom: e7 } : void 0), (et[67] = ty), (et[68] = e7), (et[69] = D))
              : (D = et[69]))
          let tB = eL && tv ? null : tA
          ;(et[70] !== eK ||
          et[71] !== eR ||
          et[72] !== tv ||
          et[73] !== tf ||
          et[74] !== th ||
          et[75] !== ep ||
          et[76] !== tu ||
          et[77] !== tm ||
          et[78] !== eX ||
          et[79] !== eM ||
          et[80] !== ew ||
          et[81] !== eA ||
          et[82] !== t_ ||
          et[83] !== tg ||
          et[84] !== eH ||
          et[85] !== tb ||
          et[86] !== eN ||
          et[87] !== eE ||
          et[88] !== eS ||
          et[89] !== eI ||
          et[90] !== tj ||
          et[91] !== eP
            ? (($ = tv
                ? (0, i.jsx)(y.g, {
                    ref: e9,
                    className: tj,
                    horizontalPaddingClassName: eK,
                    presentation: tm ? "directory" : "default",
                    collapseOnScroll: tg,
                    expandSearchWhenWrapped: eR,
                    wrapActionsAtNarrowWidth: eP,
                    showDivider: th && eX,
                    sticky: th,
                    title:
                      null == eS
                        ? null
                        : (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)("h1", {
                                ref: eI,
                                className: (0, n.A)(
                                  "flex min-h-9 items-center text-default",
                                  eH && "browser:max-md:min-h-0",
                                  tb,
                                  tu.title,
                                ),
                                children: eS,
                              }),
                              null == eE || (eH && !tm)
                                ? null
                                : (0, i.jsx)("div", {
                                    className: (0, n.A)(
                                      "text-base leading-6 text-secondary",
                                      tg && "max-w-lg",
                                      eH && !tm && "browser:max-md:hidden",
                                    ),
                                    children: eE,
                                  }),
                            ],
                          }),
                    actions: tf
                      ? (0, i.jsx)(y.T, {
                          search:
                            ew ??
                            (null == eM
                              ? null
                              : (0, i.jsx)(v.s, {
                                  ...eM,
                                  autoFocus: t_,
                                  className: (0, n.A)("min-w-0 flex-1", eM.className),
                                })),
                          controls: eA,
                          actions: ep,
                        })
                      : ep,
                    navigation: eH ? void 0 : eN,
                  })
                : null),
              (et[70] = eK),
              (et[71] = eR),
              (et[72] = tv),
              (et[73] = tf),
              (et[74] = th),
              (et[75] = ep),
              (et[76] = tu),
              (et[77] = tm),
              (et[78] = eX),
              (et[79] = eM),
              (et[80] = ew),
              (et[81] = eA),
              (et[82] = t_),
              (et[83] = tg),
              (et[84] = eH),
              (et[85] = tb),
              (et[86] = eN),
              (et[87] = eE),
              (et[88] = eS),
              (et[89] = eI),
              (et[90] = tj),
              (et[91] = eP),
              (et[92] = $))
            : ($ = et[92]),
            et[93] !== eK ||
            et[94] !== tv ||
            et[95] !== tm ||
            et[96] !== eH ||
            et[97] !== eE ||
            et[98] !== tj ||
            et[99] !== eP
              ? ((B =
                  tv && eH && !tm && null != eE
                    ? (0, i.jsx)("div", {
                        className: eP ? "@container/searchable-header" : "contents",
                        children: (0, i.jsx)("div", {
                          "data-page-subtitle": eP || void 0,
                          className: (0, n.A)(
                            "mx-auto w-full text-base leading-6 text-secondary browser:max-md:hidden",
                            tj,
                            eK,
                          ),
                          children: (0, i.jsx)("div", { className: "max-w-lg -translate-y-1.5", children: eE }),
                        }),
                      })
                    : null),
                (et[93] = eK),
                (et[94] = tv),
                (et[95] = tm),
                (et[96] = eH),
                (et[97] = eE),
                (et[98] = tj),
                (et[99] = eP),
                (et[100] = B))
              : (B = et[100]),
            et[101] !== eK || et[102] !== tv || et[103] !== eH || et[104] !== eN || et[105] !== tj
              ? ((G =
                  tv && eH && null != eN
                    ? (0, i.jsx)("div", {
                        className: (0, n.A)("mx-auto flex min-h-15 w-full min-w-0 items-center", tj, eK),
                        children: eN,
                      })
                    : null),
                (et[101] = eK),
                (et[102] = tv),
                (et[103] = eH),
                (et[104] = eN),
                (et[105] = tj),
                (et[106] = G))
              : (G = et[106]))
          let tG = eL && tv ? tA : null
          ;(et[107] !== eK ||
          et[108] !== tv ||
          et[109] !== tr ||
          et[110] !== tf ||
          et[111] !== ep ||
          et[112] !== tl ||
          et[113] !== tu ||
          et[114] !== e$ ||
          et[115] !== tp ||
          et[116] !== tx ||
          et[117] !== eQ ||
          et[118] !== to ||
          et[119] !== tc ||
          et[120] !== eH ||
          et[121] !== tb ||
          et[122] !== eE ||
          et[123] !== eS ||
          et[124] !== eI ||
          et[125] !== tw ||
          et[126] !== tj
            ? ((Y =
                !tr || to || tv
                  ? null
                  : (0, i.jsx)(
                      c.P.div,
                      {
                        ref: ta,
                        "aria-hidden": tc || void 0,
                        inert: tc,
                        animate: { opacity: 1, transform: "translateY(0)" },
                        exit: { opacity: 0, transform: "translateY(-4px)" },
                        initial: { opacity: 0, transform: "translateY(-4px)" },
                        transition: tw,
                        children: (0, i.jsx)("div", {
                          className: (0, n.A)(
                            "mx-auto w-full",
                            tj,
                            tu.inset,
                            !tf && eQ && "pb-8",
                            !tf && !eQ && (tp || tx ? "pb-6" : "pb-4"),
                            eK,
                          ),
                          children: (0, i.jsxs)("div", {
                            className: (0, n.A)(
                              "flex justify-between",
                              "profile" === e$ ? "gap-2 px-1" : "gap-4",
                              tp && "flex-wrap items-center",
                              tx && "items-center",
                              !tp && !tx && "items-start",
                              "hero" === e$ && "justify-center text-center",
                              "inset" === e$ ? "px-2" : null,
                            ),
                            children: [
                              (0, i.jsxs)("div", {
                                className: (0, n.A)(
                                  "flex min-w-0 flex-col",
                                  "inset" === e$ || "hero" === e$ ? "gap-2" : !eQ && "gap-1",
                                ),
                                children: [
                                  (0, i.jsx)("h1", {
                                    ref: tc ? void 0 : eI,
                                    className: (0, n.A)("text-default", tb, tu.title),
                                    children: eS,
                                  }),
                                  null == eE
                                    ? null
                                    : (0, i.jsx)("div", {
                                        className: (0, n.A)(
                                          "text-secondary",
                                          eQ
                                            ? "text-[17px] leading-[22px] @lg/manager:text-[16px] @lg/manager:leading-6.5"
                                            : ["text-base", tx ? "leading-6.5" : "leading-6"],
                                          "profile" === e$ && "tracking-[-0.32px] sm:truncate",
                                          eQ && "tracking-[-0.4px]",
                                          eH && !tx && "browser:max-md:hidden",
                                        ),
                                        children: eE,
                                      }),
                                ],
                              }),
                              null == ep
                                ? null
                                : (0, i.jsx)("div", {
                                    ref: ti,
                                    className: (0, n.A)("min-w-0", tp ? "max-w-full" : "shrink-0"),
                                    style: tc ? tl : void 0,
                                    children: tc ? null : ep,
                                  }),
                            ],
                          }),
                        }),
                      },
                      "page-heading",
                    )),
              (et[107] = eK),
              (et[108] = tv),
              (et[109] = tr),
              (et[110] = tf),
              (et[111] = ep),
              (et[112] = tl),
              (et[113] = tu),
              (et[114] = e$),
              (et[115] = tp),
              (et[116] = tx),
              (et[117] = eQ),
              (et[118] = to),
              (et[119] = tc),
              (et[120] = eH),
              (et[121] = tb),
              (et[122] = eE),
              (et[123] = eS),
              (et[124] = eI),
              (et[125] = tw),
              (et[126] = tj),
              (et[127] = Y))
            : (Y = et[127]),
            et[128] !== Y
              ? ((U = (0, i.jsx)(o.N, { initial: !1, mode: "popLayout", children: Y })), (et[128] = Y), (et[129] = U))
              : (U = et[129]),
            et[130] !== eK ||
            et[131] !== ty ||
            et[132] !== tv ||
            et[133] !== tf ||
            et[134] !== ez ||
            et[135] !== e$ ||
            et[136] !== eX ||
            et[137] !== eM ||
            et[138] !== ew ||
            et[139] !== e5 ||
            et[140] !== e7 ||
            et[141] !== eY ||
            et[142] !== eA ||
            et[143] !== t_ ||
            et[144] !== eN ||
            et[145] !== tj
              ? ((H =
                  !tf || tv
                    ? null
                    : (0, i.jsx)("div", {
                        ref: e3,
                        className: ty ? void 0 : "contents",
                        style: ty ? { height: e7 } : void 0,
                        children: (0, i.jsx)("div", {
                          ref: e4,
                          className: (0, n.A)(!ty && "contents", ty && e5 && "absolute inset-x-0 bottom-0 z-30"),
                          children: (0, i.jsxs)(M, {
                            className: "top-0",
                            showScrollFade: "always" === ez || eX,
                            sticky: "sticky" === eY,
                            children: [
                              (0, i.jsxs)("div", {
                                className: (0, n.A)(
                                  "mx-auto flex w-full items-center gap-2 pb-2",
                                  tj,
                                  "hero" === e$ && "pt-6",
                                  "catalog" === e$ && "pt-4",
                                  "hero" !== e$ && "catalog" !== e$ && "pt-panel",
                                  eK,
                                ),
                                children: [
                                  ew ??
                                    (null == eM
                                      ? null
                                      : (0, i.jsx)(v.s, {
                                          ...eM,
                                          autoFocus: t_,
                                          className: (0, n.A)("min-w-0 flex-1", eM.className),
                                        })),
                                  eA,
                                ],
                              }),
                              null == eN
                                ? null
                                : (0, i.jsx)("div", {
                                    className: (0, n.A)("mx-auto w-full", tj, "hero" === e$ && "pt-12", eK),
                                    children: eN,
                                  }),
                            ],
                          }),
                        }),
                      })),
                (et[130] = eK),
                (et[131] = ty),
                (et[132] = tv),
                (et[133] = tf),
                (et[134] = ez),
                (et[135] = e$),
                (et[136] = eX),
                (et[137] = eM),
                (et[138] = ew),
                (et[139] = e5),
                (et[140] = e7),
                (et[141] = eY),
                (et[142] = eA),
                (et[143] = t_),
                (et[144] = eN),
                (et[145] = tj),
                (et[146] = H))
              : (H = et[146]),
            et[147] !== eK ||
            et[148] !== tv ||
            et[149] !== tf ||
            et[150] !== ez ||
            et[151] !== tp ||
            et[152] !== eX ||
            et[153] !== eY ||
            et[154] !== eN ||
            et[155] !== tj
              ? ((W =
                  tf || null == eN || tv
                    ? null
                    : (0, i.jsx)(M, {
                        className: "top-0",
                        showScrollFade: "always" === ez || eX,
                        sticky: "sticky" === eY,
                        children: (0, i.jsx)("div", {
                          className: (0, n.A)("mx-auto w-full", !tp && "py-2", tj, eK),
                          children: eN,
                        }),
                      })),
                (et[147] = eK),
                (et[148] = tv),
                (et[149] = tf),
                (et[150] = ez),
                (et[151] = tp),
                (et[152] = eX),
                (et[153] = eY),
                (et[154] = eN),
                (et[155] = tj),
                (et[156] = W))
              : (W = et[156]))
          let tY = !!(void 0 === ea || ea) && "position",
            tU = eQ && "pb-16",
            tH = "profile" === e$ && "pb-23",
            tW = !tx && (eH && tp ? "pb-4" : "pb-panel"),
            tQ = eq && tp && !tv && "pt-3.5",
            tV = eq && !tp && !tf && null == eN && "pt-panel",
            tK = eq && !tp && (tf || null != eN) && (tm ? "pt-3 md:pt-5" : "pt-5")
          return (
            et[157] !== ec ||
            et[158] !== eK ||
            et[159] !== tU ||
            et[160] !== tH ||
            et[161] !== tW ||
            et[162] !== tQ ||
            et[163] !== tV ||
            et[164] !== tK ||
            et[165] !== tj
              ? ((Q = (0, n.A)("mx-auto flex min-h-0 w-full flex-1 flex-col", tU, tH, tW, tj, tQ, tV, tK, ec, eK)),
                (et[157] = ec),
                (et[158] = eK),
                (et[159] = tU),
                (et[160] = tH),
                (et[161] = tW),
                (et[162] = tQ),
                (et[163] = tV),
                (et[164] = tK),
                (et[165] = tj),
                (et[166] = Q))
              : (Q = et[166]),
            et[167] !== tC || et[168] !== to || et[169] !== eb || et[170] !== ej
              ? ((V = tC
                  ? (0, i.jsxs)(w, {
                      children: [
                        to ? null : eb,
                        null == ej ? null : (0, i.jsx)("div", { className: "ms-auto", children: ej }),
                      ],
                    })
                  : null),
                (et[167] = tC),
                (et[168] = to),
                (et[169] = eb),
                (et[170] = ej),
                (et[171] = V))
              : (V = et[171]),
            et[172] !== eo || et[173] !== em || et[174] !== tY || et[175] !== Q || et[176] !== V || et[177] !== tw
              ? ((K = (0, i.jsxs)(c.P.div, {
                  ref: te,
                  layout: tY,
                  className: Q,
                  transition: tw,
                  children: [V, em, eo],
                })),
                (et[172] = eo),
                (et[173] = em),
                (et[174] = tY),
                (et[175] = Q),
                (et[176] = V),
                (et[177] = tw),
                (et[178] = K))
              : (K = et[178]),
            et[179] !== z ||
            et[180] !== D ||
            et[181] !== tB ||
            et[182] !== $ ||
            et[183] !== B ||
            et[184] !== G ||
            et[185] !== tG ||
            et[186] !== U ||
            et[187] !== H ||
            et[188] !== W ||
            et[189] !== K
              ? ((Z = (0, i.jsxs)("div", { className: z, style: D, children: [tB, $, B, G, tG, U, H, W, K] })),
                (et[179] = z),
                (et[180] = D),
                (et[181] = tB),
                (et[182] = $),
                (et[183] = B),
                (et[184] = G),
                (et[185] = tG),
                (et[186] = U),
                (et[187] = H),
                (et[188] = W),
                (et[189] = K),
                (et[190] = Z))
              : (Z = et[190]),
            et[191] !== tt ||
            et[192] !== tk ||
            et[193] !== q ||
            et[194] !== tz ||
            et[195] !== tD ||
            et[196] !== F ||
            et[197] !== Z
              ? ((X = (0, i.jsx)("div", {
                  ref: tt,
                  "data-new-slate-layout": tk,
                  className: q,
                  "data-app-shell-inline-page-header": tz,
                  "data-app-shell-page-scrolled": tD,
                  onScroll: F,
                  children: Z,
                })),
                (et[191] = tt),
                (et[192] = tk),
                (et[193] = q),
                (et[194] = tz),
                (et[195] = tD),
                (et[196] = F),
                (et[197] = Z),
                (et[198] = X))
              : (X = et[198]),
            et[199] !== L || et[200] !== X
              ? ((J = (0, i.jsx)("div", { className: L, children: X })), (et[199] = L), (et[200] = X), (et[201] = J))
              : (J = et[201]),
            et[202] !== R || et[203] !== J
              ? ((ee = (0, i.jsxs)(i.Fragment, { children: [R, J] })), (et[202] = R), (et[203] = J), (et[204] = ee))
              : (ee = et[204]),
            ee
          )
        },
        uC: w,
      },
    )
  },
  DiyT(e, t, a) {
    a.d(t, { g: () => x, T: () => h })
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
        h,
        g,
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
      let F = t,
        z = (0, o.useRef)(null)
      ;(C[2] !== L
        ? ((a = () => {
            let e = q.current,
              t = z.current
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
          ? ((h =
              null == T
                ? null
                : (0, i.jsx)("div", { className: u, children: (0, i.jsx)("div", { className: m, children: T }) })),
            (C[18] = T),
            (C[19] = h))
          : (h = C[19]),
        C[20] !== P
          ? ((g = (0, i.jsx)("div", { className: "actions-hHaS5d", children: P })), (C[20] = P), (C[21] = g))
          : (g = C[21]),
        C[22] !== h || C[23] !== g
          ? ((v = (0, i.jsxs)("div", { className: "headerRow-4OaZM9", children: [h, g] })),
            (C[22] = h),
            (C[23] = g),
            (C[24] = v))
          : (v = C[24]),
        C[25] !== O
          ? ((y = (0, i.jsx)("div", { className: "navigation-AqGYXP", children: O })), (C[25] = O), (C[26] = y))
          : (y = C[26]),
        C[27] !== x || C[28] !== v || C[29] !== y
          ? ((b = (0, i.jsxs)("div", { ref: z, className: x, children: [v, y] })),
            (C[27] = x),
            (C[28] = v),
            (C[29] = y),
            (C[30] = b))
          : (b = C[30]))
      let Q = b
      return (
        C[31] !== Q || C[32] !== W || C[33] !== F
          ? ((j = (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(i.Fragment, { children: (0, i.jsx)(f, { ref: F, ...W, children: Q }) }), null],
            })),
            (C[31] = Q),
            (C[32] = W),
            (C[33] = F),
            (C[34] = j))
          : (j = C[34]),
        j
      )
    }
    function f(e) {
      let t,
        a,
        n,
        d = (0, l.c)(7),
        u = (0, o.useContext)(c.f$)
      d[0] !== u?.titleBarLeftInset
        ? ((t = () => `${u?.titleBarLeftInset.get() ?? 0}px`), (d[0] = u?.titleBarLeftInset), (d[1] = t))
        : (t = d[1])
      let m = (0, s.G)(t)
      d[2] !== m ? ((a = { "--app-shell-titlebar-left-inset": m }), (d[2] = m), (d[3] = a)) : (a = d[3])
      let p = a
      return (
        d[4] !== e || d[5] !== p
          ? ((n = (0, i.jsx)(r.P.div, { ...e, style: p })), (d[4] = e), (d[5] = p), (d[6] = n))
          : (n = d[6]),
        n
      )
    }
    function h(e) {
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
      m = a("ygO2"),
      p = a("Xpvt"),
      x = a("GO7r"),
      f = a("PkPj"),
      h = a("RNul"),
      g = a("BrP7"),
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
        g,
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
          hasNextPage: F,
          isFetchingNextPage: z,
          fetchNextPage: D,
        } = (0, n._U)(j.CP, N),
        $ = O || (R && !z)
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
                      (0, i.jsx)(h.y, { className: "size-5" }),
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
          ? ((g = L
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
            (A[32] = g))
          : (g = A[32]),
        A[33] !== D || A[34] !== F || A[35] !== z
          ? ((C = F
              ? (0, i.jsx)(v.OO, {
                  children: (0, i.jsx)(m.$, {
                    color: "secondary",
                    loading: z,
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
            (A[34] = F),
            (A[35] = z),
            (A[36] = C))
          : (C = A[36]),
        A[37] !== p || A[38] !== f || A[39] !== g || A[40] !== C
          ? ((_ = (0, i.jsxs)(i.Fragment, { children: [p, f, g, C] })),
            (A[37] = p),
            (A[38] = f),
            (A[39] = g),
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
        h,
        g,
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
        R,
        L = (0, l.c)(60),
        { conversation: q, selected: F, onToggle: z, onRemove: D, disabled: $ } = e,
        B = (0, r.A)(),
        [G, Y] = (0, s.useState)(!1)
      ;(L[0] !== q.conversation_id || L[1] !== q.prompt_text || L[2] !== $ || L[3] !== B || L[4] !== z || L[5] !== F
        ? ((h = q.prompt_text?.trim() || q.conversation_id),
          (f = "flex items-start gap-3 px-4 py-3"),
          (u = "relative"),
          (t = p.S),
          (a = F),
          (n = $),
          (c = z),
          (d = B.formatMessage(
            {
              id: "codex.cme.conversation.row.selectTitle",
              defaultMessage: "Select {title}",
              description: "Select one conversation for a CME credit claim",
            },
            { title: h },
          )),
          (L[0] = q.conversation_id),
          (L[1] = q.prompt_text),
          (L[2] = $),
          (L[3] = B),
          (L[4] = z),
          (L[5] = F),
          (L[6] = t),
          (L[7] = a),
          (L[8] = n),
          (L[9] = c),
          (L[10] = d),
          (L[11] = u),
          (L[12] = f),
          (L[13] = h))
        : ((t = L[6]), (a = L[7]), (n = L[8]), (c = L[9]), (d = L[10]), (u = L[11]), (f = L[12]), (h = L[13])),
        L[14] !== t || L[15] !== a || L[16] !== n || L[17] !== c || L[18] !== d
          ? ((g = (0, i.jsx)(t, { checked: a, disabled: n, onCheckedChange: c, "aria-label": d })),
            (L[14] = t),
            (L[15] = a),
            (L[16] = n),
            (L[17] = c),
            (L[18] = d),
            (L[19] = g))
          : (g = L[19]),
        L[20] !== u || L[21] !== g
          ? ((v = (0, i.jsx)("div", { className: u, children: g })), (L[20] = u), (L[21] = g), (L[22] = v))
          : (v = L[22]),
        L[23] !== G ? ((y = () => Y(!G)), (L[23] = G), (L[24] = y)) : (y = L[24]))
      let U = G ? "whitespace-pre-wrap break-words" : "line-clamp-2"
      ;(L[25] !== U ? ((b = (0, T.A)(U)), (L[25] = U), (L[26] = b)) : (b = L[26]),
        L[27] !== b || L[28] !== h
          ? ((j = (0, i.jsx)("span", { className: b, children: h })), (L[27] = b), (L[28] = h), (L[29] = j))
          : (j = L[29]),
        L[30] !== G || L[31] !== j || L[32] !== y
          ? ((C = (0, i.jsx)("button", {
              type: "button",
              className: "text-start text-sm font-medium",
              "aria-expanded": G,
              onClick: y,
              children: j,
            })),
            (L[30] = G),
            (L[31] = j),
            (L[32] = y),
            (L[33] = C))
          : (C = L[33]),
        L[34] === Symbol.for("react.memo_cache_sentinel")
          ? ((M = (0, i.jsx)("span", {
              className: "text-xs text-secondary select-none",
              children: (0, i.jsx)(o.A, {
                id: "codex.cme.conversation.row.cmeConversation",
                defaultMessage: "CME conversation",
                description: "Label below a conversation available for a CME credit claim",
              }),
            })),
            (L[34] = M))
          : (M = L[34]),
        L[35] !== C
          ? ((w = (0, i.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-2", children: [C, M] })),
            (L[35] = C),
            (L[36] = w))
          : (w = L[36]))
      let H = `https://chatgpt.com/c/${encodeURIComponent(q.conversation_id)}`
      L[37] !== B
        ? ((_ = B.formatMessage({
            id: "codex.cme.conversation.row.openConversation",
            defaultMessage: "Open conversation",
            description: "Open a conversation from the CME claim list",
          })),
          (L[37] = B),
          (L[38] = _))
        : (_ = L[38])
      let W = `https://chatgpt.com/c/${encodeURIComponent(q.conversation_id)}`
      return (
        L[39] !== W
          ? ((A = (0, i.jsx)(O.g, { href: W, openTarget: "external-browser", ExternalIcon: x.$XR })),
            (L[39] = W),
            (L[40] = A))
          : (A = L[40]),
        L[41] !== H || L[42] !== _ || L[43] !== A
          ? ((N = (0, i.jsx)(P.G, {
              href: H,
              initiator: "open_in_browser_bridge",
              openTarget: "external-browser",
              "aria-label": _,
              children: A,
            })),
            (L[41] = H),
            (L[42] = _),
            (L[43] = A),
            (L[44] = N))
          : (N = L[44]),
        L[45] !== B
          ? ((E = B.formatMessage({
              id: "codex.cme.conversation.row.removeConversation",
              defaultMessage: "Remove conversation",
              description: "Permanently remove a conversation from the CME claim list",
            })),
            (L[45] = B),
            (L[46] = E))
          : (E = L[46]),
        L[47] === Symbol.for("react.memo_cache_sentinel") ? ((S = (0, i.jsx)(x.cSG, {})), (L[47] = S)) : (S = L[47]),
        L[48] !== $ || L[49] !== D || L[50] !== E
          ? ((I = (0, i.jsx)(m.$, {
              color: "ghost",
              size: "icon",
              onClick: D,
              disabled: $,
              "aria-label": E,
              children: S,
            })),
            (L[48] = $),
            (L[49] = D),
            (L[50] = E),
            (L[51] = I))
          : (I = L[51]),
        L[52] !== N || L[53] !== I
          ? ((k = (0, i.jsxs)("div", { className: "flex items-center gap-2", children: [N, I] })),
            (L[52] = N),
            (L[53] = I),
            (L[54] = k))
          : (k = L[54]),
        L[55] !== w || L[56] !== k || L[57] !== f || L[58] !== v
          ? ((R = (0, i.jsxs)("div", { className: f, children: [v, w, k] })),
            (L[55] = w),
            (L[56] = k),
            (L[57] = f),
            (L[58] = v),
            (L[59] = R))
          : (R = L[59]),
        R
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
        h,
        g,
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
        { conversation: U, response: H, onChange: W, onRemove: Q, disabled: V } = e,
        K = (0, r.A)()
      Y[0] !== K
        ? ((t = K.formatMessage({
            id: "codex.cme.survey.howDidThisResponseAndTheReferencesUsed",
            defaultMessage: "How did this response and the references used affect your clinical practice?",
            description: "CME survey question about impact on clinical practice",
          })),
          (Y[0] = K),
          (Y[1] = t))
        : (t = Y[1])
      let Z = t
      Y[2] !== K
        ? ((a = K.formatMessage({
            id: "codex.cme.survey.didYourMedicalKnowledgeImproveBecauseOfThe",
            defaultMessage: "Did your medical knowledge improve because of the answer and the references used?",
            description: "CME survey question about medical knowledge improvement",
          })),
          (Y[2] = K),
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
        ? ((h = (0, i.jsx)("legend", { className: "sr-only", children: et })), (Y[10] = et), (Y[11] = h))
        : (h = Y[11]),
        Y[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = (0, i.jsx)("span", {
              className: "text-xs font-semibold text-codex-description uppercase select-none",
              children: (0, i.jsx)(o.A, {
                id: "codex.cme.survey.conversation",
                defaultMessage: "Conversation",
                description: "Label above the conversation prompt in the CME credit questionnaire",
              }),
            })),
            (Y[12] = g))
          : (g = Y[12]))
      let ea = U.prompt_text || U.conversation_id
      ;(Y[13] !== ea
        ? ((v = (0, i.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [g, (0, i.jsx)("p", { className: "font-medium", children: ea })],
          })),
          (Y[13] = ea),
          (Y[14] = v))
        : (v = Y[14]),
        Y[15] !== K
          ? ((y = K.formatMessage({
              id: "codex.cme.survey.removeConversationFromSurvey",
              defaultMessage: "Remove conversation from survey",
              description: "Deselect a conversation without permanently removing CME eligibility",
            })),
            (Y[15] = K),
            (Y[16] = y))
          : (y = Y[16]),
        Y[17] === Symbol.for("react.memo_cache_sentinel") ? ((b = (0, i.jsx)(x.cSG, {})), (Y[17] = b)) : (b = Y[17]),
        Y[18] !== V || Y[19] !== Q || Y[20] !== y
          ? ((j = (0, i.jsx)(m.$, {
              color: "ghost",
              size: "icon",
              onClick: Q,
              disabled: V,
              "aria-label": y,
              children: b,
            })),
            (Y[18] = V),
            (Y[19] = Q),
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
        Y[30] === Symbol.for("react.memo_cache_sentinel") ? ((_ = J.map(z)), (Y[30] = _)) : (_ = Y[30]),
        Y[31] !== V || Y[32] !== Z || Y[33] !== ei || Y[34] !== el || Y[35] !== w
          ? ((A = (0, i.jsx)(L.z, {
              name: ei,
              value: el,
              onChange: w,
              direction: "col",
              disabled: V,
              "aria-label": Z,
              children: _,
            })),
            (Y[31] = V),
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
        Y[48] === Symbol.for("react.memo_cache_sentinel") ? ((k = ee.map(F)), (Y[48] = k)) : (k = Y[48]),
        Y[49] !== V || Y[50] !== X || Y[51] !== en || Y[52] !== es || Y[53] !== I
          ? ((T = (0, i.jsx)(L.z, {
              name: en,
              value: es,
              onChange: I,
              direction: "col",
              disabled: V,
              "aria-label": X,
              children: k,
            })),
            (Y[49] = V),
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
        Y[64] !== V || Y[65] !== H.no_commercial_bias || Y[66] !== R
          ? ((q = (0, i.jsx)(p.S, {
              variant: "secondary",
              checked: H.no_commercial_bias,
              disabled: V,
              onCheckedChange: R,
            })),
            (Y[64] = V),
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
        Y[71] !== V || Y[72] !== h || Y[73] !== C || Y[74] !== E || Y[75] !== O || Y[76] !== B
          ? ((G = (0, i.jsxs)("fieldset", {
              disabled: V,
              className: "flex flex-col gap-4 rounded-lg border border-default p-4 text-sm",
              children: [h, C, E, O, B],
            })),
            (Y[71] = V),
            (Y[72] = h),
            (Y[73] = C),
            (Y[74] = E),
            (Y[75] = O),
            (Y[76] = B),
            (Y[77] = G))
          : (G = Y[77]),
        G
      )
    }
    function F(e) {
      return (0, i.jsx)(L.z.Item, { className: "select-none", value: e.value, children: e.label }, e.value)
    }
    function z(e) {
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
        g,
        M,
        w,
        _,
        T,
        P,
        O,
        L,
        F,
        z,
        D,
        B,
        U,
        H,
        W,
        Q,
        V,
        K,
        Z = (0, l.c)(101),
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
        [ef, eh] = (0, s.useState)(null)
      Z[3] === Symbol.for("react.memo_cache_sentinel") ? ((c = {}), (Z[3] = c)) : (c = Z[3])
      let [eg, ev] = (0, s.useState)(c),
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
          refetch: eF,
          hasNextPage: ez,
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
        Z[13] !== eN ||
        Z[14] !== e$ ||
        Z[15] !== ez ||
        Z[16] !== X ||
        Z[17] !== el ||
        Z[18] !== eB ||
        Z[19] !== eq ||
        Z[20] !== eD ||
        Z[21] !== en ||
        Z[22] !== ea ||
        Z[23] !== J ||
        Z[24] !== ee ||
        Z[25] !== eM ||
        Z[26] !== eF ||
        Z[27] !== eT ||
        Z[28] !== ep ||
        Z[29] !== eg ||
        Z[30] !== ei ||
        Z[31] !== eu ||
        Z[32] !== ej ||
        Z[33] !== ec ||
        Z[34] !== er
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
                ("modified_clinical_practice" === (t = eg[e.conversation_id] ?? $).practice_changed ||
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
          Q = async function () {
            if (!e_ && u)
              return ey
                ? (eA(!0),
                  eE(null),
                  (0, j.qk)(ei, X, {
                    credit_administration_consent: ey,
                    conversations: c.map((e) => {
                      let t = eg[e.conversation_id] ?? $
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
                          a >= 2026 && eh(a)
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
        ;(Z[51] !== e_ || Z[52] !== b || Z[53] !== X || Z[54] !== eM || Z[55] !== ei
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
            (Z[51] = e_),
            (Z[52] = b),
            (Z[53] = X),
            (Z[54] = eM),
            (Z[55] = ei),
            (Z[56] = e))
          : (e = Z[56]),
          (M = e),
          (g = I.lG),
          (O = !0),
          Z[57] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => {
                es.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
              }),
              (Z[57] = t))
            : (t = Z[57]),
          Z[58] !== ee
            ? ((L = {
                onOpenAutoFocus: t,
                onCloseAutoFocus: (e) => {
                  null != ee
                    ? (e.preventDefault(), ee())
                    : es.current?.isConnected && (e.preventDefault(), es.current.focus({ preventScroll: !0 }))
                },
              }),
              (Z[58] = ee),
              (Z[59] = L))
            : (L = Z[59]),
          Z[60] !== e_ || Z[61] !== J
            ? ((F = (e) => {
                e || e_ || J()
              }),
              (Z[60] = e_),
              (Z[61] = J),
              (Z[62] = F))
            : (F = Z[62]),
          (z = "large"),
          (D = e_),
          (f = v.R4),
          (B = "form"),
          (U = "viewport"),
          (H = (e) => {
            ;(e.preventDefault(), "survey" === ec && "claim" === er && Q())
          }),
          Z[63] === Symbol.for("react.memo_cache_sentinel")
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
              (Z[63] = W))
            : (W = Z[63]),
          Z[64] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = (0, i.jsx)(I.rr, {
                className: "sr-only",
                children: (0, i.jsx)(o.A, {
                  id: "codex.cme.dialog.manageYourContinuingMedicalEducationCredits",
                  defaultMessage: "Manage your continuing medical education credits",
                  description: "Accessible description of the CME dashboard",
                }),
              })),
              (Z[64] = w))
            : (w = Z[64]),
          Z[65] !== el
            ? ((a = el.formatMessage({
                id: "codex.cme.dialog.cmeTabs",
                defaultMessage: "CME tabs",
                description: "Accessible name for the CME dashboard tab selector",
              })),
              (Z[65] = el),
              (Z[66] = a))
            : (a = Z[66]),
          Z[67] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = {
                id: "claim",
                label: (0, i.jsx)(o.A, {
                  id: "codex.cme.dialog.claim",
                  defaultMessage: "Claim",
                  description: "CME dashboard tab for claiming credits",
                }),
              }),
              (Z[67] = l))
            : (l = Z[67]),
          Z[68] === Symbol.for("react.memo_cache_sentinel")
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
              (Z[68] = n))
            : (n = Z[68]),
          Z[69] !== a || Z[70] !== er
            ? ((s = (0, i.jsx)(S.q, {
                className: "w-full",
                animateSelection: !1,
                selectedId: er,
                onSelect: eo,
                ariaLabel: a,
                options: n,
              })),
              (Z[69] = a),
              (Z[70] = er),
              (Z[71] = s))
            : (s = Z[71]),
          Z[72] !== e_ || Z[73] !== s
            ? ((_ = (0, i.jsx)(v.OO, { children: (0, i.jsx)("fieldset", { disabled: e_, children: s }) })),
              (Z[72] = e_),
              (Z[73] = s),
              (Z[74] = _))
            : (_ = Z[74]),
          Z[75] !== eN
            ? ((T = eN
                ? (0, i.jsx)(v.OO, {
                    children: (0, i.jsx)("p", { role: "alert", className: "text-sm text-danger", children: eN }),
                  })
                : null),
              (Z[75] = eN),
              (Z[76] = T))
            : (T = Z[76]),
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
                                          (0, i.jsx)(h.y, { className: "size-5" }),
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
                                      onClick: () => void eF(),
                                      children: (0, i.jsx)(o.A, {
                                        id: "codex.cme.dialog.tryAgain",
                                        defaultMessage: "Try again",
                                        description: "Retry fetching CME conversations",
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                            ez
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
                                    response: eg[e.conversation_id] ?? $,
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
          (Z[13] = eN),
          (Z[14] = e$),
          (Z[15] = ez),
          (Z[16] = X),
          (Z[17] = el),
          (Z[18] = eB),
          (Z[19] = eq),
          (Z[20] = eD),
          (Z[21] = en),
          (Z[22] = ea),
          (Z[23] = J),
          (Z[24] = ee),
          (Z[25] = eM),
          (Z[26] = eF),
          (Z[27] = eT),
          (Z[28] = ep),
          (Z[29] = eg),
          (Z[30] = ei),
          (Z[31] = eu),
          (Z[32] = ej),
          (Z[33] = ec),
          (Z[34] = er),
          (Z[35] = f),
          (Z[36] = g),
          (Z[37] = M),
          (Z[38] = w),
          (Z[39] = _),
          (Z[40] = T),
          (Z[41] = P),
          (Z[42] = O),
          (Z[43] = L),
          (Z[44] = F),
          (Z[45] = z),
          (Z[46] = D),
          (Z[47] = B),
          (Z[48] = U),
          (Z[49] = H),
          (Z[50] = W))
      } else
        ((f = Z[35]),
          (g = Z[36]),
          (M = Z[37]),
          (w = Z[38]),
          (_ = Z[39]),
          (T = Z[40]),
          (P = Z[41]),
          (O = Z[42]),
          (L = Z[43]),
          (F = Z[44]),
          (z = Z[45]),
          (D = Z[46]),
          (B = Z[47]),
          (U = Z[48]),
          (H = Z[49]),
          (W = Z[50]))
      return (
        Z[77] !== f ||
        Z[78] !== w ||
        Z[79] !== _ ||
        Z[80] !== T ||
        Z[81] !== P ||
        Z[82] !== B ||
        Z[83] !== U ||
        Z[84] !== H ||
        Z[85] !== W
          ? ((Q = (0, i.jsxs)(f, { as: B, size: U, onSubmit: H, children: [W, w, _, T, P] })),
            (Z[77] = f),
            (Z[78] = w),
            (Z[79] = _),
            (Z[80] = T),
            (Z[81] = P),
            (Z[82] = B),
            (Z[83] = U),
            (Z[84] = H),
            (Z[85] = W),
            (Z[86] = Q))
          : (Q = Z[86]),
        Z[87] !== e_ || Z[88] !== eN || Z[89] !== eM || Z[90] !== M
          ? ((V =
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
            (Z[87] = e_),
            (Z[88] = eN),
            (Z[89] = eM),
            (Z[90] = M),
            (Z[91] = V))
          : (V = Z[91]),
        Z[92] !== g ||
        Z[93] !== O ||
        Z[94] !== L ||
        Z[95] !== F ||
        Z[96] !== z ||
        Z[97] !== D ||
        Z[98] !== Q ||
        Z[99] !== V
          ? ((K = (0, i.jsxs)(g, {
              open: O,
              contentProps: L,
              onOpenChange: F,
              size: z,
              shouldIgnoreClickOutside: D,
              children: [Q, V],
            })),
            (Z[92] = g),
            (Z[93] = O),
            (Z[94] = L),
            (Z[95] = F),
            (Z[96] = z),
            (Z[97] = D),
            (Z[98] = Q),
            (Z[99] = V),
            (Z[100] = K))
          : (K = Z[100]),
        K
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
        F,
        z,
        D,
        $,
        G = (0, l.c)(78),
        { identity: Y } = e,
        U = (0, r.A)(),
        H = (0, d.Zp)(),
        [V, K] = (0, s.useState)("available")
      G[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Set()), (G[0] = t)) : (t = G[0])
      let [Z, X] = (0, s.useState)(t),
        [J, ee] = (0, s.useState)(!1),
        { data: et, isLoading: ea, isError: ei, refetch: el } = (0, n._U)(j.Zf, Y)
      G[1] !== Y || G[2] !== V
        ? ((a = "claimed" === V ? { ...Y, status: "claimed" } : Y), (G[1] = Y), (G[2] = V), (G[3] = a))
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
      G[4] !== en?.pages || G[5] !== Z
        ? ((v = en?.pages.flatMap(Q)),
          (y = v?.filter((e) => Z.has(e.conversation_id))),
          (G[4] = en?.pages),
          (G[5] = Z),
          (G[6] = v),
          (G[7] = y))
        : ((v = G[6]), (y = G[7]))
      let em = y,
        ep = "available" === V ? (em?.length ?? 0) : 0,
        ex = null != v && v.length > 0 && ep === v.length
      return (
        G[8] === Symbol.for("react.memo_cache_sentinel")
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
            (G[8] = b),
            (G[9] = M))
          : ((b = G[8]), (M = G[9])),
        G[10] !== U
          ? ((w = U.formatMessage({
              id: "codex.cme.page.tabs",
              defaultMessage: "CME activities",
              description: "Accessible label for available and claimed CME activity tabs",
            })),
            (G[10] = U),
            (G[11] = w))
          : (w = G[11]),
        G[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = {
              key: "available",
              name: (0, i.jsx)(o.A, {
                id: "codex.cme.page.available",
                defaultMessage: "Available",
                description: "Tab listing unclaimed CME activities",
              }),
            }),
            (G[12] = _))
          : (_ = G[12]),
        G[13] === Symbol.for("react.memo_cache_sentinel")
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
            (G[13] = A))
          : (A = G[13]),
        G[14] !== w || G[15] !== V
          ? ((N = (0, i.jsx)(f.uC, {
              inset: !1,
              children: (0, i.jsx)(g.t, { ariaLabel: w, selectedKey: V, variant: "browse", onSelect: K, tabs: A }),
            })),
            (G[14] = w),
            (G[15] = V),
            (G[16] = N))
          : (N = G[16]),
        G[17] !== et || G[18] !== H || G[19] !== V
          ? ((E =
              "available" !== V || null == et || et.is_complete
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
            (G[17] = et),
            (G[18] = H),
            (G[19] = V),
            (G[20] = E))
          : (E = G[20]),
        G[21] !== ea || G[22] !== V
          ? ((S =
              ea && "available" === V
                ? (0, i.jsx)("p", {
                    role: "status",
                    children: (0, i.jsx)(o.A, {
                      id: "codex.cme.dialog.loadingCmeProfile",
                      defaultMessage: "Loading CME profile…",
                      description: "CME medical profile loading status",
                    }),
                  })
                : null),
            (G[21] = ea),
            (G[22] = V),
            (G[23] = S))
          : (S = G[23]),
        G[24] !== ei || G[25] !== el || G[26] !== V
          ? ((I =
              ei && "available" === V
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
            (G[24] = ei),
            (G[25] = el),
            (G[26] = V),
            (G[27] = I))
          : (I = G[27]),
        G[28] !== es
          ? ((k = es
              ? (0, i.jsxs)("div", {
                  role: "status",
                  className: "flex justify-center gap-2 py-10",
                  children: [
                    (0, i.jsx)(h.y, {}),
                    (0, i.jsx)(o.A, {
                      id: "codex.cme.page.loading",
                      defaultMessage: "Loading CME activities…",
                      description: "Status while fetching available or claimed CME activities",
                    }),
                  ],
                })
              : null),
            (G[28] = es),
            (G[29] = k))
          : (k = G[29]),
        G[30] !== ex || G[31] !== v || G[32] !== U || G[33] !== H || G[34] !== ep || G[35] !== Z || G[36] !== V
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
                              "available" === V
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
                                  "claimed" === V
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
                              a = "claimed" === V ? e.claimed_at : e.created_at
                            return (0, i.jsxs)(
                              "tr",
                              {
                                className: "border-b border-default",
                                children: [
                                  "available" === V
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
            (G[30] = ex),
            (G[31] = v),
            (G[32] = U),
            (G[33] = H),
            (G[34] = ep),
            (G[35] = Z),
            (G[36] = V),
            (G[37] = T))
          : (T = G[37]),
        G[38] !== v?.length || G[39] !== er || G[40] !== es || G[41] !== V
          ? ((P =
              es || er || v?.length !== 0
                ? null
                : (0, i.jsx)("p", {
                    className: "py-10 text-center text-secondary",
                    children:
                      "claimed" === V
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
            (G[38] = v?.length),
            (G[39] = er),
            (G[40] = es),
            (G[41] = V),
            (G[42] = P))
          : (P = G[42]),
        G[43] !== er || G[44] !== eo
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
            (G[43] = er),
            (G[44] = eo),
            (G[45] = O))
          : (O = G[45]),
        G[46] !== ed || G[47] !== ec || G[48] !== eu
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
            (G[46] = ed),
            (G[47] = ec),
            (G[48] = eu),
            (G[49] = R))
          : (R = G[49]),
        G[50] !== Y || G[51] !== V
          ? ((L =
              "claimed" === V
                ? (0, i.jsx)("section", {
                    className: "flex flex-col gap-4",
                    children: (0, i.jsx)(C, { identity: Y, approvedYear: null }),
                  })
                : null),
            (G[50] = Y),
            (G[51] = V),
            (G[52] = L))
          : (L = G[52]),
        G[53] !== E ||
        G[54] !== S ||
        G[55] !== I ||
        G[56] !== k ||
        G[57] !== T ||
        G[58] !== P ||
        G[59] !== O ||
        G[60] !== R ||
        G[61] !== L
          ? ((q = (0, i.jsxs)("div", { className: "flex flex-col gap-6 pb-6", children: [E, S, I, k, T, P, O, R, L] })),
            (G[53] = E),
            (G[54] = S),
            (G[55] = I),
            (G[56] = k),
            (G[57] = T),
            (G[58] = P),
            (G[59] = O),
            (G[60] = R),
            (G[61] = L),
            (G[62] = q))
          : (q = G[62]),
        G[63] !== q || G[64] !== N
          ? ((F = (0, i.jsx)(f.Ql, { headerVariant: "compact", title: b, subtitle: M, controls: N, children: q })),
            (G[63] = q),
            (G[64] = N),
            (G[65] = F))
          : (F = G[65]),
        G[66] !== et?.is_complete || G[67] !== ei || G[68] !== ep
          ? ((z =
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
            (G[66] = et?.is_complete),
            (G[67] = ei),
            (G[68] = ep),
            (G[69] = z))
          : (z = G[69]),
        G[70] !== J || G[71] !== Y || G[72] !== Z
          ? ((D = J
              ? (0, i.jsx)(B, {
                  identity: Y,
                  initialSelectedIds: Z,
                  onClose: () => ee(!1),
                  onClaimApproved: () => {
                    ;(ee(!1), X(new Set()), K("claimed"))
                  },
                })
              : null),
            (G[70] = J),
            (G[71] = Y),
            (G[72] = Z),
            (G[73] = D))
          : (D = G[73]),
        G[74] !== F || G[75] !== z || G[76] !== D
          ? (($ = (0, i.jsxs)("div", { className: "flex h-full min-h-0 flex-col", children: [F, z, D] })),
            (G[74] = F),
            (G[75] = z),
            (G[76] = D),
            (G[77] = $))
          : ($ = G[77]),
        $
      )
    }
    function W(e) {
      return e.conversation_id
    }
    function Q(e) {
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
          h(a, e)
          let i = await s.Request.safeGet("/cme/account", {
            additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
            signal: t,
          })
          return (h(a, e), i)
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
          h(a, e)
          let l = await s.Request.safeGet("/cme/conversations", {
            parameters: { query: { page: t, page_size: 25, status: e.status } },
            additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
            signal: i,
          })
          return (h(a, e), l)
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
          h(a, e)
          let l = await s.Request.safeGet("/cme/credits", {
            parameters: { query: { page: t, page_size: 25 } },
            additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
            signal: i,
          })
          return (h(a, e), l)
        },
      }))
    function f(e, t) {
      return e.accountId === t?.accountId && e.userId === t.userId
    }
    function h(e, t) {
      if (!f(t, e.get(u))) throw Error("CME workspace or user changed during the request.")
    }
    a.d(
      t,
      {},
      {
        CC: p,
        CP: x,
        Kt: async function (e, t, a) {
          h(e, t)
          let i = await s.Request.safePatch("/cme/account", {
            requestBody: a,
            additionalHeaders: { "ChatGPT-Account-Id": t.accountId },
          })
          return (h(e, t), e.query.setData(m, t, i), await e.query.invalidate(m, t), h(e, t), i)
        },
        OX: u,
        ZB: async function (e, t, a) {
          ;(h(e, t),
            await s.Request.safePost("/cme/conversations/{conversation_id}/remove", {
              parameters: { path: { conversation_id: a } },
              additionalHeaders: { "ChatGPT-Account-Id": t.accountId },
            }),
            h(e, t),
            await e.query.invalidate(p, t),
            h(e, t))
        },
        Zf: m,
        mL: async function (e, t, a) {
          h(e, t)
          let i = await s.Request.getResponse("/cme/credits/{calendar_year}/artifact", {
              parameters: { path: { calendar_year: a } },
              additionalHeaders: { "ChatGPT-Account-Id": t.accountId },
            }),
            l = await i.blob()
          ;(h(e, t), (0, c.W)(l, (0, o.u)(i.headers.get("Content-Disposition")) ?? `cme-transcript-${a}.pdf`))
        },
        qk: async function (e, t, a) {
          h(e, t)
          let i = await s.Request.safePost("/cme/claims", {
            requestBody: a,
            additionalHeaders: { "ChatGPT-Account-Id": t.accountId },
          })
          return (
            h(e, t),
            await Promise.all([
              e.query.invalidate(p, t),
              e.query.invalidate(p, { ...t, status: "claimed" }),
              e.query.invalidate(x, t),
            ]),
            h(e, t),
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
//# sourceMappingURL=583168.eddaaaa7c5.js.map
