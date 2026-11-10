export const __rspack_esm_ids = [690759]
export const __webpack_modules__ = {
  ccCq(e, a, t) {
    var i = t("ABep")
    ;(t("zd8w"),
      (a.A = (e) =>
        (0, i.jsx)("svg", {
          width: 20,
          height: 20,
          viewBox: "0 0 20 20",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, i.jsx)("path", {
            d: "M9.33496 16.5V10.665H3.5C3.13273 10.665 2.83496 10.3673 2.83496 10C2.83496 9.63273 3.13273 9.33496 3.5 9.33496H9.33496V3.5C9.33496 3.13273 9.63273 2.83496 10 2.83496C10.3673 2.83496 10.665 3.13273 10.665 3.5V9.33496H16.5L16.6338 9.34863C16.9369 9.41057 17.165 9.67857 17.165 10C17.165 10.3214 16.9369 10.5894 16.6338 10.6514L16.5 10.665H10.665V16.5C10.665 16.8673 10.3673 17.165 10 17.165C9.63273 17.165 9.33496 16.8673 9.33496 16.5Z",
            fill: "currentColor",
          }),
        })))
  },
  AZW7(e, a, t) {
    var i = t("ABep"),
      n = t("QosV"),
      s = t("zd8w"),
      o = t("fddy"),
      c = t("dJBt")
    t.d(
      a,
      {},
      {
        z: function (e) {
          let a,
            t,
            r,
            l,
            d,
            m,
            p = (0, n.c)(11),
            { name: g, ready: u, failed: h } = e,
            f = void 0 !== h && h,
            b = (0, s.useRef)(!1),
            y = (0, s.useRef)(null)
          p[0] !== g
            ? ((a = () => ({
                name: g,
                key: crypto.randomUUID(),
                startedAtMs: performance.timeOrigin + performance.now(),
              })),
              (p[0] = g),
              (p[1] = a))
            : (a = p[1])
          let [_] = (0, s.useState)(a)
          return (
            p[2] !== _
              ? ((t = () => (
                  (b.current = !0),
                  (y.current = y.current ?? o.y.start(_.name, {}, _)),
                  y.current.mark("route_entered"),
                  () => {
                    ;((b.current = !1),
                      queueMicrotask(() => {
                        b.current || y.current?.abort("navigation_away")
                      }))
                  }
                )),
                (r = [_]),
                (p[2] = _),
                (p[3] = t),
                (p[4] = r))
              : ((t = p[3]), (r = p[4])),
            (0, s.useEffect)(t, r),
            p[5] !== f || p[6] !== u
              ? ((l = () => {
                  !u && f && y.current?.fail("load_failed")
                }),
                (d = [u, f]),
                (p[5] = f),
                (p[6] = u),
                (p[7] = l),
                (p[8] = d))
              : ((l = p[7]), (d = p[8])),
            (0, s.useEffect)(l, d),
            p[9] !== u
              ? ((m = u
                  ? (0, i.jsx)(c.X, {
                      requireVisibleAtPaint: !0,
                      onPaint: () => {
                        ;(y.current?.mark("content_visible"), y.current?.end())
                      },
                    })
                  : null),
                (p[9] = u),
                (p[10] = m))
              : (m = p[10]),
            m
          )
        },
      },
    )
  },
  PkPj(e, a, t) {
    var i = t("ABep"),
      n = t("QosV"),
      s = t("on57"),
      o = t("IjbW"),
      c = t("xNuN"),
      r = t("suct"),
      l = t("LIss"),
      d = t("zTeN"),
      m = t("zd8w"),
      p = t("wD9O"),
      g = t("khOd"),
      u = t("HgLj"),
      h = t("MCtJ"),
      f = t("I7bK"),
      b = t("MeAu"),
      y = t("okCa"),
      _ = t("DiyT")
    let k = {
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
    function w() {
      return document.activeElement
    }
    function v(e, a, t) {
      let i = (0, p.Ud)(Math.max(0, e.getBoundingClientRect().top - a.getBoundingClientRect().top), t)
      a.style.setProperty("--header-background-top-inset", `${i}px`)
    }
    function x(e) {
      let a,
        t,
        o = (0, n.c)(8),
        { children: c, className: r, fadeSize: l, showScrollFade: d, sticky: m } = e,
        p = void 0 === m || m,
        g =
          p &&
          "sticky z-30 after:pointer-events-none after:absolute after:top-full after:right-0 after:left-0 after:bg-linear-to-b after:from-surface after:to-transparent after:content-['']",
        u = p && ("compact" === (void 0 === l ? "default" : l) ? "after:h-2" : "after:h-8"),
        h = p && !(void 0 === d || d) && "after:hidden"
      return (
        o[0] !== r || o[1] !== g || o[2] !== u || o[3] !== h
          ? ((a = (0, s.A)("bg-surface", g, u, h, r)), (o[0] = r), (o[1] = g), (o[2] = u), (o[3] = h), (o[4] = a))
          : (a = o[4]),
        o[5] !== c || o[6] !== a
          ? ((t = (0, i.jsx)("div", { className: a, children: c })), (o[5] = c), (o[6] = a), (o[7] = t))
          : (t = o[7]),
        t
      )
    }
    function I(e) {
      let a,
        t,
        o = (0, n.c)(7),
        { children: c, inset: r, wrap: l, variant: d } = e,
        m = "directory" === (void 0 === d ? "default" : d) ? "pb-4" : "pb-2",
        p = void 0 !== l && l && "flex-wrap",
        g = (void 0 === r || r) && "px-3"
      return (
        o[0] !== m || o[1] !== p || o[2] !== g
          ? ((a = (0, s.A)("flex items-center justify-between gap-4", m, p, g)),
            (o[0] = m),
            (o[1] = p),
            (o[2] = g),
            (o[3] = a))
          : (a = o[3]),
        o[4] !== c || o[5] !== a
          ? ((t = (0, i.jsx)("div", { className: a, children: c })), (o[4] = c), (o[5] = a), (o[6] = t))
          : (t = o[6]),
        t
      )
    }
    t.d(
      a,
      {},
      {
        J1: x,
        Ql: function (e) {
          let a,
            t,
            A,
            z,
            j,
            T,
            M,
            R,
            N,
            C,
            S,
            O,
            P,
            L,
            B,
            E,
            F,
            W,
            D,
            H,
            G,
            V,
            $,
            Q,
            Y,
            q,
            U,
            J,
            Z,
            K,
            X,
            ee,
            ea = (0, n.c)(205),
            {
              animateContentLayout: et,
              collapseHeaderOnScroll: ei,
              expandSearchWhenWrapped: en,
              banner: es,
              bannerAfterHeader: eo,
              bannerPlacement: ec,
              children: er,
              contentClassName: el,
              contentInset: ed,
              contentWidth: em,
              controls: ep,
              headerAction: eg,
              headerFade: eu,
              headerPlacement: eh,
              headerVariant: ef,
              horizontalPaddingClassName: eb,
              reserveSelectionGutter: ey,
              balanceScrollbarGutter: e_,
              navigation: ek,
              pageActions: ew,
              scrollContainerRef: ev,
              search: ex,
              searchContent: eI,
              searchPlacement: eA,
              searchToolbar: ez,
              stickyControls: ej,
              subtitle: eT,
              title: eM,
              titleRef: eR,
              toolbarActions: eN,
              toolbarInset: eC,
              wrapActionsAtNarrowWidth: eS,
            } = e,
            eO = void 0 !== ei && ei,
            eP = void 0 !== en && en,
            eL = void 0 !== eo && eo,
            eB = void 0 === ed || ed,
            eE = void 0 === em ? "default" : em,
            eF = void 0 === eu ? "always" : eu,
            eW = void 0 === eh ? "page" : eh,
            eD = void 0 === ef ? "default" : ef,
            eH = void 0 !== ey && ey,
            eG = void 0 !== e_ && e_,
            eV = void 0 === eA ? "sticky" : eA,
            e$ = void 0 === eC || eC,
            eQ = (0, d.Ul)(g.GB),
            eY = (0, p.dz)(),
            eq = "profileManager" === eD,
            eU = "px-panel"
          "profile" === eE
            ? (eU = eq ? "px-4 @lg/manager:px-16" : "px-5 sm:px-16")
            : "directory" === eE && (eU = "px-4 md:px-panel")
          let eJ = (0, s.A)(
              eH
                ? "px-18"
                : (eb ??
                    (0, s.A)(
                      eU,
                      ("medium" === eE || "extraWide" === eE) && "compact" === eD ? "px-6 lg:px-12" : void 0,
                    )),
              eQ &&
                (eH
                  ? "[[data-app-shell-compact-page-gutter=true]_&]:px-14"
                  : null == eb && "profile" !== eE && "[[data-app-shell-compact-page-gutter=true]_&]:px-7.5"),
            ),
            [eZ] = (0, m.useState)(w),
            [eK, eX] = (0, m.useState)(!1),
            [e0, e1] = (0, m.useState)(!1),
            e2 = (0, m.useRef)(null),
            e3 = (0, m.useRef)(null),
            e4 = (0, m.useRef)(null),
            [e6, e5] = (0, m.useState)(!1),
            [e9, e7] = (0, m.useState)(),
            e8 = (0, m.useRef)(null),
            ae = (0, m.useRef)(null)
          ea[0] !== ev ? ((a = (0, u.P)(e2, ev)), (ea[0] = ev), (ea[1] = a)) : (a = ea[1])
          let aa = a,
            at = (0, m.useRef)(null),
            ai = (0, m.useRef)(null),
            [an, as] = (0, m.useState)(),
            ao = document.activeElement,
            ac = "none" !== eW,
            ar = "toolbar" === eW,
            al = "scroll" === eW && e0,
            ad = ar || al,
            am = k[eD],
            ap = "directory" === eD,
            ag = "compact" === eD,
            au = "profile" === eD || eq,
            ah = null != ex || null != eI,
            af = "sticky" === eW,
            ab = af && eO,
            ay = af || "inline" === eW,
            a_ = "bottom-on-scroll" === eV && ah && !ay,
            ak = eQ && !au && !ap && "browser:max-md:text-lg browser:max-md:font-medium",
            aw = {
              directory: "max-w-[calc(768px+var(--padding-panel)*2)]",
              extraWide: "max-w-[1440px]",
              wide: "max-w-5xl",
              medium: "max-w-[960px]",
              default: "max-w-[var(--thread-content-max-width)]",
              profile: eq ? "max-w-[1144px]" : "max-w-4xl",
            }[eE],
            av = (!ar && null != ek) || null != ew,
            ax = (0, o.I)()
          ea[2] !== ax ? ((t = ax ? { duration: 0 } : f.m9), (ea[2] = ax), (ea[3] = t)) : (t = ea[3])
          let aI = t,
            aA = ex?.autoFocus ?? (null == ao || ao === document.body || ao === document.documentElement || ao === eZ)
          ;(ea[4] !== a_
            ? ((A = () => {
                let e = e2.current,
                  a = e3.current,
                  t = e4.current
                if (!a_ || null == e || null == a || null == t) return
                let i = new IntersectionObserver(
                    (e) => {
                      let [a] = e
                      e5(!a.isIntersecting && a.boundingClientRect.bottom <= (a.rootBounds?.top ?? 0))
                    },
                    { root: e },
                  ),
                  n = new ResizeObserver((e) => {
                    let [a] = e,
                      i = a.borderBoxSize?.[0]?.blockSize ?? t.offsetHeight
                    i && e7(i)
                  })
                return (
                  i.observe(a),
                  n.observe(t, { box: "border-box" }),
                  () => {
                    ;(i.disconnect(), n.disconnect())
                  }
                )
              }),
              (z = [a_]),
              (ea[4] = a_),
              (ea[5] = A),
              (ea[6] = z))
            : ((A = ea[5]), (z = ea[6])),
            (0, m.useLayoutEffect)(A, z),
            ea[7] !== a_ || ea[8] !== ax
              ? ((j = () => {
                  let e = e4.current
                  if (!a_ || null == e) return
                  let a = (0, c.i)(
                    e,
                    { opacity: [0, 1], y: [24, 0] },
                    { type: "tween", ease: "easeInOut", duration: 0.25 * !ax },
                  )
                  return () => a.stop()
                }),
                (ea[7] = a_),
                (ea[8] = ax),
                (ea[9] = j))
              : (j = ea[9]),
            ea[10] !== a_ || ea[11] !== e6 || ea[12] !== ax
              ? ((T = [a_, e6, ax]), (ea[10] = a_), (ea[11] = e6), (ea[12] = ax), (ea[13] = T))
              : (T = ea[13]),
            (0, m.useLayoutEffect)(j, T),
            ea[14] !== af || ea[15] !== eQ || ea[16] !== eY
              ? ((M = () => {
                  let e = e2.current,
                    a = e8.current
                  if (!eQ || !af || null == e || null == a) return
                  let t = new ResizeObserver(() => {
                    v(e, a, eY)
                  })
                  return (
                    t.observe(e),
                    t.observe(a),
                    () => {
                      ;(t.disconnect(), a.style.removeProperty("--header-background-top-inset"))
                    }
                  )
                }),
                (R = [eQ, af, eY]),
                (ea[14] = af),
                (ea[15] = eQ),
                (ea[16] = eY),
                (ea[17] = M),
                (ea[18] = R))
              : ((M = ea[17]), (R = ea[18])),
            (0, m.useLayoutEffect)(M, R),
            ea[19] !== eW
              ? ((N = () => {
                  let e = at.current,
                    a = e2.current
                  if ("scroll" !== eW || null == e || null == a) return
                  let t = new IntersectionObserver(
                    (e) => {
                      let [a] = e
                      e1(!a.isIntersecting && a.boundingClientRect.bottom <= (a.rootBounds?.top ?? 0))
                    },
                    { root: a, threshold: 0 },
                  )
                  return (t.observe(e), () => t.disconnect())
                }),
                (C = [eW]),
                (ea[19] = eW),
                (ea[20] = N),
                (ea[21] = C))
              : ((N = ea[20]), (C = ea[21])),
            (0, m.useLayoutEffect)(N, C),
            ea[22] !== eW || ea[23] !== al
              ? ((S = () => {
                  let e = ai.current
                  if ("scroll" !== eW || al || null == e) return
                  let a = new ResizeObserver(() => {
                    as({ width: e.offsetWidth, height: e.offsetHeight })
                  })
                  return (a.observe(e), () => a.disconnect())
                }),
                (O = [eW, al]),
                (ea[22] = eW),
                (ea[23] = al),
                (ea[24] = S),
                (ea[25] = O))
              : ((S = ea[24]), (O = ea[25])),
            (0, m.useLayoutEffect)(S, O))
          let az =
            null == es
              ? null
              : (0, i.jsx)("div", {
                  className: (0, s.A)(
                    "w-full empty:hidden",
                    "inset" === (void 0 === ec ? "inset" : ec) && ["mx-auto pt-panel", aw, eJ],
                  ),
                  children: es,
                })
          ea[26] !== ac ||
          ea[27] !== eg ||
          ea[28] !== eD ||
          ea[29] !== au ||
          ea[30] !== ar ||
          ea[31] !== ek ||
          ea[32] !== al ||
          ea[33] !== ad ||
          ea[34] !== ak ||
          ea[35] !== eM ||
          ea[36] !== eR ||
          ea[37] !== eN ||
          ea[38] !== e$ ||
          ea[39] !== aI
            ? ((P =
                ac && (ad || null != eN)
                  ? (0, i.jsx)(h.F, {
                      divider: !au,
                      children: (0, i.jsxs)(b.oE, {
                        inset: e$,
                        children: [
                          (0, i.jsx)(r.N, {
                            initial: !1,
                            children: ad
                              ? (0, i.jsx)(
                                  l.P.div,
                                  {
                                    animate: { opacity: 1, transform: "translateY(0)" },
                                    className: "min-w-0 flex-1 overflow-hidden",
                                    "data-app-shell-overlay-page-header": (al && null == eN) || void 0,
                                    exit: { opacity: 0, transform: "translateY(4px)" },
                                    initial: { opacity: 0, transform: "translateY(4px)" },
                                    transition: aI,
                                    children:
                                      ar && null != ek
                                        ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                              (0, i.jsx)("h1", { ref: eR, className: "sr-only", children: eM }),
                                              ek,
                                            ],
                                          })
                                        : (0, i.jsx)("h1", {
                                            ref: eR,
                                            className: (0, s.A)(
                                              "min-w-0 truncate text-base text-default electron:font-medium",
                                              ak,
                                              "inset" === eD ? "px-2" : null,
                                            ),
                                            children: eM,
                                          }),
                                  },
                                  "toolbar-heading",
                                )
                              : null,
                          }),
                          null != eN || al
                            ? (0, i.jsxs)("div", {
                                className: "ms-auto flex min-w-0 items-center justify-end gap-2",
                                children: [al ? eg : null, eN],
                              })
                            : null,
                        ],
                      }),
                    })
                  : null),
              (ea[26] = ac),
              (ea[27] = eg),
              (ea[28] = eD),
              (ea[29] = au),
              (ea[30] = ar),
              (ea[31] = ek),
              (ea[32] = al),
              (ea[33] = ad),
              (ea[34] = ak),
              (ea[35] = eM),
              (ea[36] = eR),
              (ea[37] = eN),
              (ea[38] = e$),
              (ea[39] = aI),
              (ea[40] = P))
            : (P = ea[40])
          let aj = a_ || !ac ? "relative flex h-full min-h-0 flex-1 flex-col" : "contents",
            aT = !ac && !eQ && "max-md:pt-[var(--height-toolbar)]",
            aM = !ac && eQ && "browser:max-md:pt-[var(--height-toolbar)]",
            aR = !ac && "profile" === eE && "bg-surface-card"
          ea[41] !== aj || ea[42] !== aT || ea[43] !== aM || ea[44] !== aR
            ? ((L = (0, s.A)(aj, aT, aM, aR)), (ea[41] = aj), (ea[42] = aT), (ea[43] = aM), (ea[44] = aR), (ea[45] = L))
            : (L = ea[45])
          let aN = eQ || void 0,
            aC = eq && "@container/manager",
            aS = "profile" === eE && "bg-surface-card",
            aO =
              ap &&
              "bg-surface [--color-text:var(--gray-1000)] [--color-surface:light-dark(var(--gray-25),var(--black))]",
            aP = !eG && "[scrollbar-gutter:stable]",
            aL = eG && (au ? "sm:[scrollbar-gutter:stable_both-edges]" : "md:[scrollbar-gutter:stable_both-edges]"),
            aB = !a_ && "relative",
            aE = al && "vertical-scroll-fade-mask-top"
          ea[46] !== aC ||
          ea[47] !== aS ||
          ea[48] !== aO ||
          ea[49] !== aP ||
          ea[50] !== aL ||
          ea[51] !== aB ||
          ea[52] !== aE
            ? ((B = (0, s.A)("h-full min-h-0 flex-1 overflow-x-hidden overflow-y-auto", aC, aS, aO, aP, aL, aB, aE)),
              (ea[46] = aC),
              (ea[47] = aS),
              (ea[48] = aO),
              (ea[49] = aP),
              (ea[50] = aL),
              (ea[51] = aB),
              (ea[52] = aE),
              (ea[53] = B))
            : (B = ea[53])
          let aF = (!ar && null == eN && (!!ac || !au)) || void 0,
            aW = "inline" === eW ? eK : void 0
          ea[54] !== eO ||
          ea[55] !== ay ||
          ea[56] !== ah ||
          ea[57] !== af ||
          ea[58] !== eF ||
          ea[59] !== eV ||
          ea[60] !== eX ||
          ea[61] !== eQ ||
          ea[62] !== ej ||
          ea[63] !== eY
            ? ((E =
                ay || ("when-scrolled" === eF && "sticky" === eV && (ah || null != ej))
                  ? (e) => {
                      let a = e8.current,
                        t = ae.current
                      if (eO && !eQ && null != a && null != t) {
                        a.style.setProperty("--header-scroll-position", `${e.currentTarget.scrollTop}px`)
                        let i = a.getBoundingClientRect()
                        a.style.setProperty(
                          "--header-scroll-overlap",
                          `${Math.max(0, ((i.bottom - t.getBoundingClientRect().top) * a.offsetHeight) / i.height + parseFloat(getComputedStyle(a).marginBottom))}px`,
                        )
                      }
                      ;(eX(
                        eQ && af && null != a
                          ? e.currentTarget.scrollTop > 0 &&
                              a.getBoundingClientRect().top <=
                                e.currentTarget.getBoundingClientRect().top + parseFloat(getComputedStyle(a).top)
                          : e.currentTarget.scrollTop > 0,
                      ),
                        eQ && af && null != a && v(e.currentTarget, a, eY))
                    }
                  : void 0),
              (ea[54] = eO),
              (ea[55] = ay),
              (ea[56] = ah),
              (ea[57] = af),
              (ea[58] = eF),
              (ea[59] = eV),
              (ea[60] = eX),
              (ea[61] = eQ),
              (ea[62] = ej),
              (ea[63] = eY),
              (ea[64] = E))
            : (E = ea[64])
          let aD = !ac && "h-full"
          ;(ea[65] !== aD
            ? ((F = (0, s.A)("flex min-h-full w-full flex-col", aD)), (ea[65] = aD), (ea[66] = F))
            : (F = ea[66]),
            ea[67] !== a_ || ea[68] !== e9
              ? ((W = a_ ? { paddingBottom: e9 } : void 0), (ea[67] = a_), (ea[68] = e9), (ea[69] = W))
              : (W = ea[69]))
          let aH = eL && ay ? null : az
          ;(ea[70] !== eJ ||
          ea[71] !== eP ||
          ea[72] !== ay ||
          ea[73] !== ah ||
          ea[74] !== af ||
          ea[75] !== eg ||
          ea[76] !== am ||
          ea[77] !== ap ||
          ea[78] !== eK ||
          ea[79] !== ex ||
          ea[80] !== eI ||
          ea[81] !== ez ||
          ea[82] !== aA ||
          ea[83] !== ab ||
          ea[84] !== eQ ||
          ea[85] !== ak ||
          ea[86] !== ej ||
          ea[87] !== eT ||
          ea[88] !== eM ||
          ea[89] !== eR ||
          ea[90] !== aw ||
          ea[91] !== eS
            ? ((D = ay
                ? (0, i.jsx)(_.g, {
                    ref: e8,
                    className: aw,
                    horizontalPaddingClassName: eJ,
                    presentation: ap ? "directory" : "default",
                    collapseOnScroll: ab,
                    expandSearchWhenWrapped: eP,
                    wrapActionsAtNarrowWidth: eS,
                    showDivider: af && eK,
                    sticky: af,
                    title:
                      null == eM
                        ? null
                        : (0, i.jsxs)(i.Fragment, {
                            children: [
                              (0, i.jsx)("h1", {
                                ref: eR,
                                className: (0, s.A)(
                                  "flex min-h-9 items-center text-default",
                                  eQ && "browser:max-md:min-h-0",
                                  ak,
                                  am.title,
                                ),
                                children: eM,
                              }),
                              null == eT || (eQ && !ap)
                                ? null
                                : (0, i.jsx)("div", {
                                    className: (0, s.A)(
                                      "text-base leading-6 text-secondary",
                                      ab && "max-w-lg",
                                      eQ && !ap && "browser:max-md:hidden",
                                    ),
                                    children: eT,
                                  }),
                            ],
                          }),
                    actions: ah
                      ? (0, i.jsx)(_.T, {
                          search:
                            eI ??
                            (null == ex
                              ? null
                              : (0, i.jsx)(y.s, {
                                  ...ex,
                                  autoFocus: aA,
                                  className: (0, s.A)("min-w-0 flex-1", ex.className),
                                })),
                          controls: ez,
                          actions: eg,
                        })
                      : eg,
                    navigation: eQ ? void 0 : ej,
                  })
                : null),
              (ea[70] = eJ),
              (ea[71] = eP),
              (ea[72] = ay),
              (ea[73] = ah),
              (ea[74] = af),
              (ea[75] = eg),
              (ea[76] = am),
              (ea[77] = ap),
              (ea[78] = eK),
              (ea[79] = ex),
              (ea[80] = eI),
              (ea[81] = ez),
              (ea[82] = aA),
              (ea[83] = ab),
              (ea[84] = eQ),
              (ea[85] = ak),
              (ea[86] = ej),
              (ea[87] = eT),
              (ea[88] = eM),
              (ea[89] = eR),
              (ea[90] = aw),
              (ea[91] = eS),
              (ea[92] = D))
            : (D = ea[92]),
            ea[93] !== eJ ||
            ea[94] !== ay ||
            ea[95] !== ap ||
            ea[96] !== eQ ||
            ea[97] !== eT ||
            ea[98] !== aw ||
            ea[99] !== eS
              ? ((H =
                  ay && eQ && !ap && null != eT
                    ? (0, i.jsx)("div", {
                        className: eS ? "@container/searchable-header" : "contents",
                        children: (0, i.jsx)("div", {
                          "data-page-subtitle": eS || void 0,
                          className: (0, s.A)(
                            "mx-auto w-full text-base leading-6 text-secondary browser:max-md:hidden",
                            aw,
                            eJ,
                          ),
                          children: (0, i.jsx)("div", { className: "max-w-lg -translate-y-1.5", children: eT }),
                        }),
                      })
                    : null),
                (ea[93] = eJ),
                (ea[94] = ay),
                (ea[95] = ap),
                (ea[96] = eQ),
                (ea[97] = eT),
                (ea[98] = aw),
                (ea[99] = eS),
                (ea[100] = H))
              : (H = ea[100]),
            ea[101] !== eJ || ea[102] !== ay || ea[103] !== eQ || ea[104] !== ej || ea[105] !== aw
              ? ((G =
                  ay && eQ && null != ej
                    ? (0, i.jsx)("div", {
                        className: (0, s.A)("mx-auto flex min-h-15 w-full min-w-0 items-center", aw, eJ),
                        children: ej,
                      })
                    : null),
                (ea[101] = eJ),
                (ea[102] = ay),
                (ea[103] = eQ),
                (ea[104] = ej),
                (ea[105] = aw),
                (ea[106] = G))
              : (G = ea[106]))
          let aG = eL && ay ? az : null
          ;(ea[107] !== eJ ||
          ea[108] !== ay ||
          ea[109] !== ac ||
          ea[110] !== ah ||
          ea[111] !== eg ||
          ea[112] !== an ||
          ea[113] !== am ||
          ea[114] !== eD ||
          ea[115] !== ag ||
          ea[116] !== au ||
          ea[117] !== eq ||
          ea[118] !== ar ||
          ea[119] !== al ||
          ea[120] !== eQ ||
          ea[121] !== ak ||
          ea[122] !== eT ||
          ea[123] !== eM ||
          ea[124] !== eR ||
          ea[125] !== aI ||
          ea[126] !== aw
            ? ((V =
                !ac || ar || ay
                  ? null
                  : (0, i.jsx)(
                      l.P.div,
                      {
                        ref: at,
                        "aria-hidden": al || void 0,
                        inert: al,
                        animate: { opacity: 1, transform: "translateY(0)" },
                        exit: { opacity: 0, transform: "translateY(-4px)" },
                        initial: { opacity: 0, transform: "translateY(-4px)" },
                        transition: aI,
                        children: (0, i.jsx)("div", {
                          className: (0, s.A)(
                            "mx-auto w-full",
                            aw,
                            am.inset,
                            !ah && eq && "pb-8",
                            !ah && !eq && (ag || au ? "pb-6" : "pb-4"),
                            eJ,
                          ),
                          children: (0, i.jsxs)("div", {
                            className: (0, s.A)(
                              "flex justify-between",
                              "profile" === eD ? "gap-2 px-1" : "gap-4",
                              ag && "flex-wrap items-center",
                              au && "items-center",
                              !ag && !au && "items-start",
                              "hero" === eD && "justify-center text-center",
                              "inset" === eD ? "px-2" : null,
                            ),
                            children: [
                              (0, i.jsxs)("div", {
                                className: (0, s.A)(
                                  "flex min-w-0 flex-col",
                                  "inset" === eD || "hero" === eD ? "gap-2" : !eq && "gap-1",
                                ),
                                children: [
                                  (0, i.jsx)("h1", {
                                    ref: al ? void 0 : eR,
                                    className: (0, s.A)("text-default", ak, am.title),
                                    children: eM,
                                  }),
                                  null == eT
                                    ? null
                                    : (0, i.jsx)("div", {
                                        className: (0, s.A)(
                                          "text-secondary",
                                          eq
                                            ? "text-[17px] leading-[22px] @lg/manager:text-[16px] @lg/manager:leading-6.5"
                                            : ["text-base", au ? "leading-6.5" : "leading-6"],
                                          "profile" === eD && "tracking-[-0.32px] sm:truncate",
                                          eq && "tracking-[-0.4px]",
                                          eQ && !au && "browser:max-md:hidden",
                                        ),
                                        children: eT,
                                      }),
                                ],
                              }),
                              null == eg
                                ? null
                                : (0, i.jsx)("div", {
                                    ref: ai,
                                    className: (0, s.A)("min-w-0", ag ? "max-w-full" : "shrink-0"),
                                    style: al ? an : void 0,
                                    children: al ? null : eg,
                                  }),
                            ],
                          }),
                        }),
                      },
                      "page-heading",
                    )),
              (ea[107] = eJ),
              (ea[108] = ay),
              (ea[109] = ac),
              (ea[110] = ah),
              (ea[111] = eg),
              (ea[112] = an),
              (ea[113] = am),
              (ea[114] = eD),
              (ea[115] = ag),
              (ea[116] = au),
              (ea[117] = eq),
              (ea[118] = ar),
              (ea[119] = al),
              (ea[120] = eQ),
              (ea[121] = ak),
              (ea[122] = eT),
              (ea[123] = eM),
              (ea[124] = eR),
              (ea[125] = aI),
              (ea[126] = aw),
              (ea[127] = V))
            : (V = ea[127]),
            ea[128] !== V
              ? (($ = (0, i.jsx)(r.N, { initial: !1, mode: "popLayout", children: V })), (ea[128] = V), (ea[129] = $))
              : ($ = ea[129]),
            ea[130] !== eJ ||
            ea[131] !== a_ ||
            ea[132] !== ay ||
            ea[133] !== ah ||
            ea[134] !== eF ||
            ea[135] !== eD ||
            ea[136] !== eK ||
            ea[137] !== ex ||
            ea[138] !== eI ||
            ea[139] !== e6 ||
            ea[140] !== e9 ||
            ea[141] !== eV ||
            ea[142] !== ez ||
            ea[143] !== aA ||
            ea[144] !== ej ||
            ea[145] !== aw
              ? ((Q =
                  !ah || ay
                    ? null
                    : (0, i.jsx)("div", {
                        ref: e3,
                        className: a_ ? void 0 : "contents",
                        style: a_ ? { height: e9 } : void 0,
                        children: (0, i.jsx)("div", {
                          ref: e4,
                          className: (0, s.A)(!a_ && "contents", a_ && e6 && "absolute inset-x-0 bottom-0 z-30"),
                          children: (0, i.jsxs)(x, {
                            className: "top-0",
                            showScrollFade: "always" === eF || eK,
                            sticky: "sticky" === eV,
                            children: [
                              (0, i.jsxs)("div", {
                                className: (0, s.A)(
                                  "mx-auto flex w-full items-center gap-2 pb-2",
                                  aw,
                                  "hero" === eD && "pt-6",
                                  "catalog" === eD && "pt-4",
                                  "hero" !== eD && "catalog" !== eD && "pt-panel",
                                  eJ,
                                ),
                                children: [
                                  eI ??
                                    (null == ex
                                      ? null
                                      : (0, i.jsx)(y.s, {
                                          ...ex,
                                          autoFocus: aA,
                                          className: (0, s.A)("min-w-0 flex-1", ex.className),
                                        })),
                                  ez,
                                ],
                              }),
                              null == ej
                                ? null
                                : (0, i.jsx)("div", {
                                    className: (0, s.A)("mx-auto w-full", aw, "hero" === eD && "pt-12", eJ),
                                    children: ej,
                                  }),
                            ],
                          }),
                        }),
                      })),
                (ea[130] = eJ),
                (ea[131] = a_),
                (ea[132] = ay),
                (ea[133] = ah),
                (ea[134] = eF),
                (ea[135] = eD),
                (ea[136] = eK),
                (ea[137] = ex),
                (ea[138] = eI),
                (ea[139] = e6),
                (ea[140] = e9),
                (ea[141] = eV),
                (ea[142] = ez),
                (ea[143] = aA),
                (ea[144] = ej),
                (ea[145] = aw),
                (ea[146] = Q))
              : (Q = ea[146]),
            ea[147] !== eJ ||
            ea[148] !== ay ||
            ea[149] !== ah ||
            ea[150] !== eF ||
            ea[151] !== ag ||
            ea[152] !== eK ||
            ea[153] !== eV ||
            ea[154] !== ej ||
            ea[155] !== aw
              ? ((Y =
                  ah || null == ej || ay
                    ? null
                    : (0, i.jsx)(x, {
                        className: "top-0",
                        showScrollFade: "always" === eF || eK,
                        sticky: "sticky" === eV,
                        children: (0, i.jsx)("div", {
                          className: (0, s.A)("mx-auto w-full", !ag && "py-2", aw, eJ),
                          children: ej,
                        }),
                      })),
                (ea[147] = eJ),
                (ea[148] = ay),
                (ea[149] = ah),
                (ea[150] = eF),
                (ea[151] = ag),
                (ea[152] = eK),
                (ea[153] = eV),
                (ea[154] = ej),
                (ea[155] = aw),
                (ea[156] = Y))
              : (Y = ea[156]))
          let aV = !!(void 0 === et || et) && "position",
            a$ = eq && "pb-16",
            aQ = "profile" === eD && "pb-23",
            aY = !au && (eQ && ag ? "pb-4" : "pb-panel"),
            aq = eB && ag && !ay && "pt-3.5",
            aU = eB && !ag && !ah && null == ej && "pt-panel",
            aJ = eB && !ag && (ah || null != ej) && (ap ? "pt-3 md:pt-5" : "pt-5")
          return (
            ea[157] !== el ||
            ea[158] !== eJ ||
            ea[159] !== a$ ||
            ea[160] !== aQ ||
            ea[161] !== aY ||
            ea[162] !== aq ||
            ea[163] !== aU ||
            ea[164] !== aJ ||
            ea[165] !== aw
              ? ((q = (0, s.A)("mx-auto flex min-h-0 w-full flex-1 flex-col", a$, aQ, aY, aw, aq, aU, aJ, el, eJ)),
                (ea[157] = el),
                (ea[158] = eJ),
                (ea[159] = a$),
                (ea[160] = aQ),
                (ea[161] = aY),
                (ea[162] = aq),
                (ea[163] = aU),
                (ea[164] = aJ),
                (ea[165] = aw),
                (ea[166] = q))
              : (q = ea[166]),
            ea[167] !== av || ea[168] !== ar || ea[169] !== ek || ea[170] !== ew
              ? ((U = av
                  ? (0, i.jsxs)(I, {
                      children: [
                        ar ? null : ek,
                        null == ew ? null : (0, i.jsx)("div", { className: "ms-auto", children: ew }),
                      ],
                    })
                  : null),
                (ea[167] = av),
                (ea[168] = ar),
                (ea[169] = ek),
                (ea[170] = ew),
                (ea[171] = U))
              : (U = ea[171]),
            ea[172] !== er || ea[173] !== ep || ea[174] !== aV || ea[175] !== q || ea[176] !== U || ea[177] !== aI
              ? ((J = (0, i.jsxs)(l.P.div, {
                  ref: ae,
                  layout: aV,
                  className: q,
                  transition: aI,
                  children: [U, ep, er],
                })),
                (ea[172] = er),
                (ea[173] = ep),
                (ea[174] = aV),
                (ea[175] = q),
                (ea[176] = U),
                (ea[177] = aI),
                (ea[178] = J))
              : (J = ea[178]),
            ea[179] !== F ||
            ea[180] !== W ||
            ea[181] !== aH ||
            ea[182] !== D ||
            ea[183] !== H ||
            ea[184] !== G ||
            ea[185] !== aG ||
            ea[186] !== $ ||
            ea[187] !== Q ||
            ea[188] !== Y ||
            ea[189] !== J
              ? ((Z = (0, i.jsxs)("div", { className: F, style: W, children: [aH, D, H, G, aG, $, Q, Y, J] })),
                (ea[179] = F),
                (ea[180] = W),
                (ea[181] = aH),
                (ea[182] = D),
                (ea[183] = H),
                (ea[184] = G),
                (ea[185] = aG),
                (ea[186] = $),
                (ea[187] = Q),
                (ea[188] = Y),
                (ea[189] = J),
                (ea[190] = Z))
              : (Z = ea[190]),
            ea[191] !== aa ||
            ea[192] !== aN ||
            ea[193] !== B ||
            ea[194] !== aF ||
            ea[195] !== aW ||
            ea[196] !== E ||
            ea[197] !== Z
              ? ((K = (0, i.jsx)("div", {
                  ref: aa,
                  "data-new-slate-layout": aN,
                  className: B,
                  "data-app-shell-inline-page-header": aF,
                  "data-app-shell-page-scrolled": aW,
                  onScroll: E,
                  children: Z,
                })),
                (ea[191] = aa),
                (ea[192] = aN),
                (ea[193] = B),
                (ea[194] = aF),
                (ea[195] = aW),
                (ea[196] = E),
                (ea[197] = Z),
                (ea[198] = K))
              : (K = ea[198]),
            ea[199] !== L || ea[200] !== K
              ? ((X = (0, i.jsx)("div", { className: L, children: K })), (ea[199] = L), (ea[200] = K), (ea[201] = X))
              : (X = ea[201]),
            ea[202] !== P || ea[203] !== X
              ? ((ee = (0, i.jsxs)(i.Fragment, { children: [P, X] })), (ea[202] = P), (ea[203] = X), (ea[204] = ee))
              : (ee = ea[204]),
            ee
          )
        },
        uC: I,
      },
    )
  },
  DiyT(e, a, t) {
    t.d(a, { g: () => u, T: () => f })
    var i = t("ABep"),
      n = t("QosV"),
      s = t("on57"),
      o = t("W5pg"),
      c = t("LIss"),
      r = t("zd8w"),
      l = t("I7bK"),
      d = t("HgLj"),
      m = "title-x3JvHx",
      p = "titleContent-nEpGod",
      g = "toolbar-wpnXAF"
    function u(e) {
      let a,
        t,
        o,
        c,
        l,
        u,
        f,
        b,
        y,
        _,
        k,
        w,
        v = (0, n.c)(35),
        {
          ref: x,
          className: I,
          horizontalPaddingClassName: A,
          collapseOnScroll: z,
          presentation: j,
          expandSearchWhenWrapped: T,
          showDivider: M,
          sticky: R,
          wrapActionsAtNarrowWidth: N,
          title: C,
          actions: S,
          navigation: O,
        } = e,
        P = void 0 === A ? "px-panel" : A,
        L = void 0 !== z && z,
        B = (0, r.useRef)(null)
      v[0] !== x ? ((a = (0, d.P)(B, x)), (v[0] = x), (v[1] = a)) : (a = v[1])
      let E = a,
        F = (0, r.useRef)(null)
      ;(v[2] !== L
        ? ((t = () => {
            let e = B.current,
              a = F.current
            if (!e || !a) return
            let t = new ResizeObserver(() => {
                let t = a.offsetLeft + parseFloat(getComputedStyle(a).paddingInlineStart)
                e.style.setProperty("--header-content-start", `${t}px`)
                let i = a.querySelector(`.${g}`)
                if (!L || null == i) return void e.removeAttribute("data-collapsible")
                let n = a.querySelector(`.${p}`)
                if (null == n) return
                let s = n.parentElement
                ;(e.style.setProperty(
                  "--header-collapse-offset",
                  `${(s?.offsetHeight ?? 0) + parseFloat(getComputedStyle(e).paddingTop)}px`,
                ),
                  e.toggleAttribute("data-collapsible", !0))
              }),
              i = () => {
                for (let e of (t.disconnect(), [a, ...a.querySelectorAll(`.${m}`)])) t.observe(e)
              },
              n = new MutationObserver(i)
            return (
              n.observe(a, { childList: !0, characterData: !0, subtree: !0 }),
              i(),
              () => {
                ;(t.disconnect(), n.disconnect())
              }
            )
          }),
          (o = [L]),
          (v[2] = L),
          (v[3] = t),
          (v[4] = o))
        : ((t = v[3]), (o = v[4])),
        (0, r.useLayoutEffect)(t, o))
      let W = L || void 0,
        D = (void 0 !== T && T) || void 0,
        H = M || void 0,
        G = void 0 === R || R || void 0,
        V = N || void 0,
        $ = "directory" === (void 0 === j ? "default" : j) && "directoryShell-WYPHEM",
        Q = M ? "border-subtle" : "border-transparent"
      ;(v[5] !== $ || v[6] !== Q
        ? ((c = (0, s.A)("shell-yWQKe6", $, Q)), (v[5] = $), (v[6] = Q), (v[7] = c))
        : (c = v[7]),
        v[8] !== D || v[9] !== H || v[10] !== G || v[11] !== V || v[12] !== c || v[13] !== W
          ? ((l = {
              "data-scroll-collapse": W,
              "data-expand-search": D,
              "data-scrolled": H,
              "data-sticky": G,
              "data-wrap-actions": V,
              className: c,
            }),
            (v[8] = D),
            (v[9] = H),
            (v[10] = G),
            (v[11] = V),
            (v[12] = c),
            (v[13] = W),
            (v[14] = l))
          : (l = v[14]))
      let Y = l
      ;(v[15] !== I || v[16] !== P
        ? ((u = (0, s.A)("content-ymUHGU", "mx-auto w-full", P, I)), (v[15] = I), (v[16] = P), (v[17] = u))
        : (u = v[17]),
        v[18] !== C
          ? ((f =
              null == C
                ? null
                : (0, i.jsx)("div", { className: m, children: (0, i.jsx)("div", { className: p, children: C }) })),
            (v[18] = C),
            (v[19] = f))
          : (f = v[19]),
        v[20] !== S
          ? ((b = (0, i.jsx)("div", { className: "actions-hHaS5d", children: S })), (v[20] = S), (v[21] = b))
          : (b = v[21]),
        v[22] !== f || v[23] !== b
          ? ((y = (0, i.jsxs)("div", { className: "headerRow-4OaZM9", children: [f, b] })),
            (v[22] = f),
            (v[23] = b),
            (v[24] = y))
          : (y = v[24]),
        v[25] !== O
          ? ((_ = (0, i.jsx)("div", { className: "navigation-AqGYXP", children: O })), (v[25] = O), (v[26] = _))
          : (_ = v[26]),
        v[27] !== u || v[28] !== y || v[29] !== _
          ? ((k = (0, i.jsxs)("div", { ref: F, className: u, children: [y, _] })),
            (v[27] = u),
            (v[28] = y),
            (v[29] = _),
            (v[30] = k))
          : (k = v[30]))
      let q = k
      return (
        v[31] !== q || v[32] !== Y || v[33] !== E
          ? ((w = (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(i.Fragment, { children: (0, i.jsx)(h, { ref: E, ...Y, children: q }) }), null],
            })),
            (v[31] = q),
            (v[32] = Y),
            (v[33] = E),
            (v[34] = w))
          : (w = v[34]),
        w
      )
    }
    function h(e) {
      let a,
        t,
        s,
        d = (0, n.c)(7),
        m = (0, r.useContext)(l.f$)
      d[0] !== m?.titleBarLeftInset
        ? ((a = () => `${m?.titleBarLeftInset.get() ?? 0}px`), (d[0] = m?.titleBarLeftInset), (d[1] = a))
        : (a = d[1])
      let p = (0, o.G)(a)
      d[2] !== p ? ((t = { "--app-shell-titlebar-left-inset": p }), (d[2] = p), (d[3] = t)) : (t = d[3])
      let g = t
      return (
        d[4] !== e || d[5] !== g
          ? ((s = (0, i.jsx)(c.P.div, { ...e, style: g })), (d[4] = e), (d[5] = g), (d[6] = s))
          : (s = d[6]),
        s
      )
    }
    function f(e) {
      let a,
        t,
        s,
        o,
        c,
        r = (0, n.c)(14),
        { filterTags: l, controls: d, search: m, actions: p, fixedSearchWidth: u } = e
      return (
        r[0] !== l
          ? ((a = (0, i.jsx)("div", {
              className: "filterTags-NLxoNh",
              children: (0, i.jsx)("div", { className: "filterTagsContent-VSk9tY", children: l }),
            })),
            (r[0] = l),
            (r[1] = a))
          : (a = r[1]),
        r[2] !== d
          ? ((t = (0, i.jsx)("div", { className: "viewControls-ty6WO3", children: d })), (r[2] = d), (r[3] = t))
          : (t = r[3]),
        r[4] !== u || r[5] !== m
          ? ((s =
              null != m &&
              (0, i.jsx)("div", { className: "search-gLCdCn", "data-fixed-width": u || void 0, children: m })),
            (r[4] = u),
            (r[5] = m),
            (r[6] = s))
          : (s = r[6]),
        r[7] !== p
          ? ((o = (0, i.jsx)("div", { className: "pageActions-Q2Fd0B", children: p })), (r[7] = p), (r[8] = o))
          : (o = r[8]),
        r[9] !== a || r[10] !== t || r[11] !== s || r[12] !== o
          ? ((c = (0, i.jsxs)("div", { className: g, children: [a, t, s, o] })),
            (r[9] = a),
            (r[10] = t),
            (r[11] = s),
            (r[12] = o),
            (r[13] = c))
          : (c = r[13]),
        c
      )
    }
  },
  I7Ou(e, a, t) {
    var i = t("ABep"),
      n = t("QosV"),
      s = t("RNul"),
      o = t("AWNZ")
    t.d(
      a,
      {},
      {
        u: function (e) {
          let a,
            t,
            c = (0, n.c)(3),
            { children: r } = e
          return (
            c[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = (0, i.jsx)(s.y, { className: "icon-xs shrink-0 text-secondary" })), (c[0] = a))
              : (a = c[0]),
            c[1] !== r
              ? ((t = (0, i.jsx)("div", {
                  role: "status",
                  children: (0, i.jsx)(o.ic, {
                    label: (0, i.jsxs)("span", {
                      className: "flex items-center gap-2 font-normal text-secondary",
                      children: [a, (0, i.jsx)("span", { className: "text-balance", children: r })],
                    }),
                    control: null,
                  }),
                })),
                (c[1] = r),
                (c[2] = t))
              : (t = c[2]),
            t
          )
        },
      },
    )
  },
  YufQ(e, a, t) {
    t.d(a, { $: () => k })
    var i = t("ABep"),
      n = t("QosV"),
      s = t("zTeN"),
      o = t("zd8w"),
      c = t("Wf1j"),
      r = t("oyxz"),
      l = t("ygO2"),
      d = t("GO7r"),
      m = t("nzx4"),
      p = t("RNul"),
      g = t("VAbi"),
      u = t("v0Bz"),
      h = t("qaaZ"),
      f = t("oyQi"),
      b = t("Qgfj")
    let y = {
      teams_human_robot_high_five: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.teams_human_robot_high_five",
          defaultMessage: "Human and robot high five",
          description:
            "Accessible name and search label for a team icon depicting a human hand and a robot hand giving a high five in the Team Icons picker",
        }),
        keywords: ["teamwork", "collaboration", "robot", "ai", "high five"],
      },
      teams_round_meeting_table: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.teams_round_meeting_table",
          defaultMessage: "Meeting table",
          description:
            "Accessible name and search label for a team icon depicting a round meeting table in the Team Icons picker",
        }),
        keywords: ["teamwork", "meeting", "table", "discussion", "collaboration"],
      },
      teams_relay_baton_handoff: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.teams_relay_baton_handoff",
          defaultMessage: "Relay baton",
          description:
            "Accessible name and search label for a team icon depicting a relay baton being handed from one person to another in the Team Icons picker",
        }),
        keywords: ["teamwork", "relay", "baton", "handoff", "coordination"],
      },
      teams_penguin_huddle: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.teams_penguin_huddle",
          defaultMessage: "Penguin huddle",
          description:
            "Accessible name and search label for a team icon depicting penguins huddled together in the Team Icons picker",
        }),
        keywords: ["teamwork", "penguin", "huddle", "community", "animal"],
      },
      teams_geese_formation: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.teams_geese_formation",
          defaultMessage: "Flying geese",
          description:
            "Accessible name and search label for a team icon depicting geese flying in formation in the Team Icons picker",
        }),
        keywords: ["teamwork", "geese", "birds", "flight", "formation"],
      },
      teams_honeycomb_cluster: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.teams_honeycomb_cluster",
          defaultMessage: "Honeycomb",
          description:
            "Accessible name and search label for a team icon depicting a cluster of honeycomb cells in the Team Icons picker",
        }),
        keywords: ["teamwork", "honeycomb", "bees", "community", "network"],
      },
      teams_shared_knowledge_bookends: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.teams_shared_knowledge_bookends",
          defaultMessage: "Bookends",
          description:
            "Accessible name and search label for a team icon depicting bookends holding shared books in the Team Icons picker",
        }),
        keywords: ["teamwork", "knowledge", "books", "library", "learning"],
      },
      teams_sticky_notes: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.teams_sticky_notes",
          defaultMessage: "Sticky notes",
          description:
            "Accessible name and search label for a team icon depicting a group of sticky notes in the Team Icons picker",
        }),
        keywords: ["teamwork", "notes", "brainstorm", "ideas", "planning"],
      },
      productivity_calendar_page: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.productivity_calendar_page",
          defaultMessage: "Calendar",
          description:
            "Accessible name and search label for a team icon depicting a calendar page in the Team Icons picker",
        }),
        keywords: ["calendar", "schedule", "planning", "date"],
      },
      productivity_chat_message: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.productivity_chat_message",
          defaultMessage: "Chat message",
          description:
            "Accessible name and search label for a team icon depicting a chat message bubble in the Team Icons picker",
        }),
        keywords: ["chat", "message", "communication", "conversation"],
      },
      productivity_completed_task: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.productivity_completed_task",
          defaultMessage: "Completed task",
          description:
            "Accessible name and search label for a team icon depicting a completed task with a check mark in the Team Icons picker",
        }),
        keywords: ["task", "check", "done", "complete", "checklist"],
      },
      productivity_email_message: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.productivity_email_message",
          defaultMessage: "Email",
          description:
            "Accessible name and search label for a team icon depicting an email message in the Team Icons picker",
        }),
        keywords: ["email", "mail", "inbox", "message"],
      },
      productivity_focus_timer: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.productivity_focus_timer",
          defaultMessage: "Focus timer",
          description:
            "Accessible name and search label for a team icon depicting a timer for focused work in the Team Icons picker",
        }),
        keywords: ["focus", "timer", "time", "productivity"],
      },
      productivity_meeting_clock: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.productivity_meeting_clock",
          defaultMessage: "Meeting clock",
          description:
            "Accessible name and search label for a team icon depicting a clock representing a meeting in the Team Icons picker",
        }),
        keywords: ["meeting", "clock", "time", "schedule"],
      },
      productivity_notification_bell: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.productivity_notification_bell",
          defaultMessage: "Notification bell",
          description:
            "Accessible name and search label for a team icon depicting a notification bell in the Team Icons picker",
        }),
        keywords: ["notification", "bell", "alert", "reminder"],
      },
      productivity_presentation_board: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.productivity_presentation_board",
          defaultMessage: "Presentation board",
          description:
            "Accessible name and search label for a team icon depicting a presentation board in the Team Icons picker",
        }),
        keywords: ["presentation", "slides", "board", "teaching"],
      },
      productivity_project_kanban: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.productivity_project_kanban",
          defaultMessage: "Project board",
          description:
            "Accessible name and search label for a team icon depicting a project board with task columns in the Team Icons picker",
        }),
        keywords: ["project", "kanban", "board", "tasks", "planning"],
      },
      productivity_video_call_camera: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.productivity_video_call_camera",
          defaultMessage: "Video call",
          description:
            "Accessible name and search label for a team icon depicting a video camera representing a video call in the Team Icons picker",
        }),
        keywords: ["video", "call", "camera", "meeting"],
      },
      software_api_connector: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.software_api_connector",
          defaultMessage: "API connector",
          description:
            "Accessible name and search label for a team icon depicting a connector representing a software application programming interface in the Team Icons picker",
        }),
        keywords: ["api", "connector", "integration", "software", "developer"],
      },
      software_bug: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.software_bug",
          defaultMessage: "Software bug",
          description:
            "Accessible name and search label for a team icon depicting an insect representing a software bug in the Team Icons picker",
        }),
        keywords: ["bug", "software", "debug", "testing", "quality"],
      },
      software_code_brackets: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.software_code_brackets",
          defaultMessage: "Code brackets",
          description:
            "Accessible name and search label for a team icon depicting a pair of programming code brackets in the Team Icons picker",
        }),
        keywords: ["code", "brackets", "software", "developer", "engineering"],
      },
      software_release_package: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.software_release_package",
          defaultMessage: "Release package",
          description:
            "Accessible name and search label for a team icon depicting a package representing a software release in the Team Icons picker",
        }),
        keywords: ["release", "package", "shipping", "software", "delivery"],
      },
      software_server_rack: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.software_server_rack",
          defaultMessage: "Server rack",
          description:
            "Accessible name and search label for a team icon depicting a rack of computer servers in the Team Icons picker",
        }),
        keywords: ["server", "infrastructure", "hosting", "backend", "software"],
      },
      software_system_gear: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.software_system_gear",
          defaultMessage: "System gear",
          description:
            "Accessible name and search label for a team icon depicting a gear representing system settings in the Team Icons picker",
        }),
        keywords: ["system", "gear", "settings", "operations", "software"],
      },
      software_terminal_window: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.software_terminal_window",
          defaultMessage: "Terminal",
          description:
            "Accessible name and search label for a team icon depicting a computer command-line terminal window in the Team Icons picker",
        }),
        keywords: ["terminal", "command", "shell", "developer", "software"],
      },
      software_version_branch: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.software_version_branch",
          defaultMessage: "Version branch",
          description:
            "Accessible name and search label for a team icon depicting a branching path representing software version control in the Team Icons picker",
        }),
        keywords: ["version", "branch", "git", "code", "software"],
      },
      ai_audio_transcriber: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.ai_audio_transcriber",
          defaultMessage: "Audio transcription",
          description:
            "Accessible name and search label for a team icon depicting an audio transcription symbol in the Team Icons picker",
        }),
        keywords: ["ai", "audio", "transcription", "speech", "recording"],
      },
      ai_automation_gear: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.ai_automation_gear",
          defaultMessage: "Automation gear",
          description:
            "Accessible name and search label for a team icon depicting a gear representing automated work in the Team Icons picker",
        }),
        keywords: ["ai", "automation", "gear", "workflow", "operations"],
      },
      ai_chatbot_orb: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.ai_chatbot_orb",
          defaultMessage: "Chatbot",
          description:
            "Accessible name and search label for a team icon depicting an orb representing a chatbot assistant in the Team Icons picker",
        }),
        keywords: ["ai", "chatbot", "assistant", "conversation"],
      },
      ai_generated_image: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.ai_generated_image",
          defaultMessage: "Generated image",
          description:
            "Accessible name and search label for a team icon depicting a picture representing an AI-generated image in the Team Icons picker",
        }),
        keywords: ["ai", "image", "generation", "picture", "art"],
      },
      ai_model_cube: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.ai_model_cube",
          defaultMessage: "Model cube",
          description:
            "Accessible name and search label for a team icon depicting a cube representing an artificial intelligence model in the Team Icons picker",
        }),
        keywords: ["ai", "model", "cube", "machine learning"],
      },
      ai_neural_network: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.ai_neural_network",
          defaultMessage: "Neural network",
          description:
            "Accessible name and search label for a team icon depicting connected nodes representing an artificial neural network in the Team Icons picker",
        }),
        keywords: ["ai", "neural", "network", "machine learning", "research"],
      },
      data_analytics_dashboard: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.data_analytics_dashboard",
          defaultMessage: "Analytics dashboard",
          description:
            "Accessible name and search label for a team icon depicting a data analytics dashboard in the Team Icons picker",
        }),
        keywords: ["analytics", "dashboard", "data", "metrics", "reporting"],
      },
      data_analytics_database: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.data_analytics_database",
          defaultMessage: "Database",
          description:
            "Accessible name and search label for a team icon depicting a database storage symbol in the Team Icons picker",
        }),
        keywords: ["database", "data", "storage", "analytics"],
      },
      data_analytics_spreadsheet: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.data_analytics_spreadsheet",
          defaultMessage: "Spreadsheet",
          description:
            "Accessible name and search label for a team icon depicting a spreadsheet in the Team Icons picker",
        }),
        keywords: ["spreadsheet", "data", "table", "analysis"],
      },
      data_analytics_pie_chart: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.data_analytics_pie_chart",
          defaultMessage: "Pie chart",
          description:
            "Accessible name and search label for a team icon depicting a pie chart in the Team Icons picker",
        }),
        keywords: ["pie", "chart", "data", "analytics", "proportion"],
      },
      data_analytics_scatter_plot: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.data_analytics_scatter_plot",
          defaultMessage: "Scatter plot",
          description:
            "Accessible name and search label for a team icon depicting a scatter plot in the Team Icons picker",
        }),
        keywords: ["scatter", "plot", "data", "analytics", "research"],
      },
      data_analytics_forecast_trend: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.data_analytics_forecast_trend",
          defaultMessage: "Forecast trend",
          description:
            "Accessible name and search label for a team icon depicting a chart showing a forecast trend in the Team Icons picker",
        }),
        keywords: ["forecast", "trend", "data", "analytics", "prediction"],
      },
      data_analytics_data_magnifier: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.data_analytics_data_magnifier",
          defaultMessage: "Data magnifier",
          description:
            "Accessible name and search label for a team icon depicting a magnifying glass over data in the Team Icons picker",
        }),
        keywords: ["data", "magnifier", "search", "analysis", "research"],
      },
      data_analytics_business_report: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.data_analytics_business_report",
          defaultMessage: "Business report",
          description:
            "Accessible name and search label for a team icon depicting a business report in the Team Icons picker",
        }),
        keywords: ["business", "report", "data", "analytics", "results"],
      },
      design_color_wheel: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.design_color_wheel",
          defaultMessage: "Color wheel",
          description:
            "Accessible name and search label for a team icon depicting a color wheel in the Team Icons picker",
        }),
        keywords: ["design", "color", "wheel", "palette", "art"],
      },
      design_color_swatches: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.design_color_swatches",
          defaultMessage: "Color swatches",
          description:
            "Accessible name and search label for a team icon depicting a set of color swatches in the Team Icons picker",
        }),
        keywords: ["design", "color", "swatches", "palette", "branding"],
      },
      design_typography_block: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.design_typography_block",
          defaultMessage: "Typography",
          description:
            "Accessible name and search label for a team icon depicting a block representing typography and letterforms in the Team Icons picker",
        }),
        keywords: ["design", "typography", "font", "letter", "text"],
      },
      design_vector_pen_tool: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.design_vector_pen_tool",
          defaultMessage: "Vector pen",
          description:
            "Accessible name and search label for a team icon depicting a vector drawing pen tool in the Team Icons picker",
        }),
        keywords: ["design", "vector", "pen", "drawing", "illustration"],
      },
      design_layer_stack: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.design_layer_stack",
          defaultMessage: "Design layers",
          description:
            "Accessible name and search label for a team icon depicting a stack of design layers in the Team Icons picker",
        }),
        keywords: ["design", "layers", "stack", "composition"],
      },
      design_image_editing_photo_pencil: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.design_image_editing_photo_pencil",
          defaultMessage: "Photo editing",
          description:
            "Accessible name and search label for a team icon depicting a photograph and pencil representing photo editing in the Team Icons picker",
        }),
        keywords: ["design", "image", "photo", "editing", "pencil"],
      },
      art_craft_artist_palette: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.art_craft_artist_palette",
          defaultMessage: "Artist palette",
          description:
            "Accessible name and search label for a team icon depicting an artist's paint palette in the Team Icons picker",
        }),
        keywords: ["art", "craft", "palette", "painting", "creative"],
      },
      art_craft_colored_pencils: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.art_craft_colored_pencils",
          defaultMessage: "Colored pencils",
          description:
            "Accessible name and search label for a team icon depicting colored drawing pencils in the Team Icons picker",
        }),
        keywords: ["art", "craft", "pencils", "drawing", "creative"],
      },
      career_handshake: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.career_handshake",
          defaultMessage: "Handshake",
          description:
            "Accessible name and search label for a team icon depicting two hands shaking in the Team Icons picker",
        }),
        keywords: ["career", "handshake", "partnership", "agreement", "teamwork"],
      },
      career_target: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.career_target",
          defaultMessage: "Target",
          description:
            "Accessible name and search label for a team icon depicting a target representing a goal in the Team Icons picker",
        }),
        keywords: ["career", "target", "goal", "objective", "focus"],
      },
      career_project_roadmap: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.career_project_roadmap",
          defaultMessage: "Project roadmap",
          description:
            "Accessible name and search label for a team icon depicting a project roadmap in the Team Icons picker",
        }),
        keywords: ["career", "project", "roadmap", "strategy", "planning"],
      },
      career_team_avatars: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.career_team_avatars",
          defaultMessage: "Team members",
          description:
            "Accessible name and search label for a team icon depicting a group of people represented by avatars in the Team Icons picker",
        }),
        keywords: ["career", "team", "members", "people", "community"],
      },
      work_office_laptop: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.work_office_laptop",
          defaultMessage: "Laptop",
          description:
            "Accessible name and search label for a team icon depicting a laptop computer in the Team Icons picker",
        }),
        keywords: ["work", "office", "laptop", "computer", "technology"],
      },
      work_office_employee_badge: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.work_office_employee_badge",
          defaultMessage: "Employee badge",
          description:
            "Accessible name and search label for a team icon depicting an employee identification badge in the Team Icons picker",
        }),
        keywords: ["work", "office", "employee", "badge", "identity"],
      },
      work_office_desk_notebook: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.work_office_desk_notebook",
          defaultMessage: "Desk notebook",
          description:
            "Accessible name and search label for a team icon depicting a desk notebook in the Team Icons picker",
        }),
        keywords: ["work", "office", "notebook", "notes", "writing"],
      },
      work_office_work_briefcase: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.work_office_work_briefcase",
          defaultMessage: "Briefcase",
          description:
            "Accessible name and search label for a team icon depicting a work briefcase in the Team Icons picker",
        }),
        keywords: ["work", "office", "briefcase", "business", "career"],
      },
      finance_growth_chart: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.finance_growth_chart",
          defaultMessage: "Growth chart",
          description:
            "Accessible name and search label for a team icon depicting a chart showing financial growth in the Team Icons picker",
        }),
        keywords: ["finance", "growth", "chart", "business", "revenue"],
      },
      security_shield: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.security_shield",
          defaultMessage: "Security shield",
          description:
            "Accessible name and search label for a team icon depicting a shield representing security in the Team Icons picker",
        }),
        keywords: ["security", "shield", "protection", "trust", "safety"],
      },
      security_passkey: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.security_passkey",
          defaultMessage: "Passkey",
          description:
            "Accessible name and search label for a team icon depicting a passkey representing secure sign-in in the Team Icons picker",
        }),
        keywords: ["security", "passkey", "key", "login", "authentication"],
      },
      security_fingerprint: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.security_fingerprint",
          defaultMessage: "Fingerprint",
          description:
            "Accessible name and search label for a team icon depicting a fingerprint in the Team Icons picker",
        }),
        keywords: ["security", "fingerprint", "identity", "authentication"],
      },
      finance_piggy_bank: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.finance_piggy_bank",
          defaultMessage: "Piggy bank",
          description:
            "Accessible name and search label for a team icon depicting a pig-shaped savings bank in the Team Icons picker",
        }),
        keywords: ["finance", "piggy bank", "savings", "budget", "money"],
      },
      finance_stack_of_coins: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.finance_stack_of_coins",
          defaultMessage: "Coins",
          description:
            "Accessible name and search label for a team icon depicting a stack of coins in the Team Icons picker",
        }),
        keywords: ["finance", "coins", "money", "budget", "savings"],
      },
      finance_invoice: {
        categoryId: "people",
        label: (0, b.zR)({
          id: "teams.icons.finance_invoice",
          defaultMessage: "Invoice",
          description:
            "Accessible name and search label for a team icon depicting a billing invoice in the Team Icons picker",
        }),
        keywords: ["finance", "invoice", "billing", "payment", "business"],
      },
      science_astronomy_telescope: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.science_astronomy_telescope",
          defaultMessage: "Telescope",
          description:
            "Accessible name and search label for a team icon depicting an astronomy telescope in the Team Icons picker",
        }),
        keywords: ["science", "astronomy", "telescope", "space", "exploration"],
      },
      science_atom_model: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.science_atom_model",
          defaultMessage: "Atom",
          description:
            "Accessible name and search label for a team icon depicting a model of an atom in the Team Icons picker",
        }),
        keywords: ["science", "atom", "physics", "research"],
      },
      science_dna_helix: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.science_dna_helix",
          defaultMessage: "DNA helix",
          description:
            "Accessible name and search label for a team icon depicting a DNA double helix in the Team Icons picker",
        }),
        keywords: ["science", "dna", "biology", "genetics", "research"],
      },
      science_lab_flask: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.science_lab_flask",
          defaultMessage: "Lab flask",
          description:
            "Accessible name and search label for a team icon depicting a laboratory flask in the Team Icons picker",
        }),
        keywords: ["science", "lab", "flask", "chemistry", "experiment"],
      },
      science_rocket_ship: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.science_rocket_ship",
          defaultMessage: "Rocket",
          description:
            "Accessible name and search label for a team icon depicting a rocket ship in the Team Icons picker",
        }),
        keywords: ["science", "rocket", "space", "launch", "exploration"],
      },
      science_ringed_planet: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.science_ringed_planet",
          defaultMessage: "Ringed planet",
          description:
            "Accessible name and search label for a team icon depicting a planet with rings in the Team Icons picker",
        }),
        keywords: ["science", "planet", "space", "saturn", "astronomy"],
      },
      science_space_satellite: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.science_space_satellite",
          defaultMessage: "Satellite",
          description:
            "Accessible name and search label for a team icon depicting a satellite in space in the Team Icons picker",
        }),
        keywords: ["science", "satellite", "space", "orbit", "communication"],
      },
      education_microscope: {
        categoryId: "technology",
        label: (0, b.zR)({
          id: "teams.icons.education_microscope",
          defaultMessage: "Microscope",
          description:
            "Accessible name and search label for a team icon depicting a microscope in the Team Icons picker",
        }),
        keywords: ["education", "science", "microscope", "research", "biology"],
      },
      animal_butterfly: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.animal_butterfly",
          defaultMessage: "Butterfly",
          description:
            "Accessible name and search label for a team icon depicting a butterfly in the Team Icons picker",
        }),
        keywords: ["animal", "butterfly", "nature", "wings", "transformation"],
      },
      animal_dolphin: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.animal_dolphin",
          defaultMessage: "Dolphin",
          description: "Accessible name and search label for a team icon depicting a dolphin in the Team Icons picker",
        }),
        keywords: ["animal", "dolphin", "ocean", "sea", "nature"],
      },
      animal_elephant: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.animal_elephant",
          defaultMessage: "Elephant",
          description:
            "Accessible name and search label for a team icon depicting an elephant in the Team Icons picker",
        }),
        keywords: ["animal", "elephant", "wildlife", "nature"],
      },
      animal_honey_bee: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.animal_honey_bee",
          defaultMessage: "Honeybee",
          description: "Accessible name and search label for a team icon depicting a honeybee in the Team Icons picker",
        }),
        keywords: ["animal", "bee", "honey", "nature", "teamwork"],
      },
      animal_ladybug: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.animal_ladybug",
          defaultMessage: "Ladybug",
          description:
            "Accessible name and search label for a team icon depicting a ladybug beetle in the Team Icons picker",
        }),
        keywords: ["animal", "ladybug", "insect", "nature", "garden"],
      },
      animal_owl: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.animal_owl",
          defaultMessage: "Owl",
          description: "Accessible name and search label for a team icon depicting an owl in the Team Icons picker",
        }),
        keywords: ["animal", "owl", "bird", "nature", "wisdom"],
      },
      animal_sea_turtle: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.animal_sea_turtle",
          defaultMessage: "Sea turtle",
          description:
            "Accessible name and search label for a team icon depicting a sea turtle in the Team Icons picker",
        }),
        keywords: ["animal", "turtle", "ocean", "sea", "nature"],
      },
      animal_tiger: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.animal_tiger",
          defaultMessage: "Tiger",
          description: "Accessible name and search label for a team icon depicting a tiger in the Team Icons picker",
        }),
        keywords: ["animal", "tiger", "cat", "wildlife", "nature"],
      },
      pet_cat_face: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.pet_cat_face",
          defaultMessage: "Cat",
          description:
            "Accessible name and search label for a team icon depicting a cat's face in the Team Icons picker",
        }),
        keywords: ["pet", "cat", "animal", "kitten"],
      },
      pet_dog_face: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.pet_dog_face",
          defaultMessage: "Dog",
          description:
            "Accessible name and search label for a team icon depicting a dog's face in the Team Icons picker",
        }),
        keywords: ["pet", "dog", "animal", "puppy"],
      },
      environment_science_recycling_loop: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.environment_science_recycling_loop",
          defaultMessage: "Recycling",
          description:
            "Accessible name and search label for a team icon depicting a loop of recycling arrows in the Team Icons picker",
        }),
        keywords: ["environment", "recycling", "sustainability", "reuse", "nature"],
      },
      weather_rainbow: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.weather_rainbow",
          defaultMessage: "Rainbow",
          description: "Accessible name and search label for a team icon depicting a rainbow in the Team Icons picker",
        }),
        keywords: ["weather", "rainbow", "color", "nature"],
      },
      weather_sunny_forecast: {
        categoryId: "nature",
        label: (0, b.zR)({
          id: "teams.icons.weather_sunny_forecast",
          defaultMessage: "Sunshine",
          description:
            "Accessible name and search label for a team icon depicting a sunny weather forecast in the Team Icons picker",
        }),
        keywords: ["weather", "sun", "sunny", "forecast", "nature"],
      },
      drink_coffee_cup: {
        categoryId: "food",
        label: (0, b.zR)({
          id: "teams.icons.drink_coffee_cup",
          defaultMessage: "Coffee cup",
          description:
            "Accessible name and search label for a team icon depicting a cup of coffee in the Team Icons picker",
        }),
        keywords: ["drink", "coffee", "cup", "cafe", "break"],
      },
      entertainment_game_controller: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.entertainment_game_controller",
          defaultMessage: "Game controller",
          description:
            "Accessible name and search label for a team icon depicting a video game controller in the Team Icons picker",
        }),
        keywords: ["entertainment", "game", "controller", "gaming", "play"],
      },
      entertainment_puzzle_piece: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.entertainment_puzzle_piece",
          defaultMessage: "Puzzle piece",
          description:
            "Accessible name and search label for a team icon depicting a jigsaw puzzle piece in the Team Icons picker",
        }),
        keywords: ["entertainment", "puzzle", "piece", "problem solving", "play"],
      },
      music_headphones: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.music_headphones",
          defaultMessage: "Headphones",
          description:
            "Accessible name and search label for a team icon depicting a pair of headphones in the Team Icons picker",
        }),
        keywords: ["music", "headphones", "audio", "listening", "sound"],
      },
      music_note: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.music_note",
          defaultMessage: "Music note",
          description:
            "Accessible name and search label for a team icon depicting a musical note in the Team Icons picker",
        }),
        keywords: ["music", "note", "sound", "song"],
      },
      celebration_winner_trophy: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.celebration_winner_trophy",
          defaultMessage: "Trophy",
          description:
            "Accessible name and search label for a team icon depicting a winner's trophy in the Team Icons picker",
        }),
        keywords: ["celebration", "trophy", "winner", "award", "success"],
      },
      celebration_confetti_popper: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.celebration_confetti_popper",
          defaultMessage: "Confetti popper",
          description:
            "Accessible name and search label for a team icon depicting a party confetti popper in the Team Icons picker",
        }),
        keywords: ["celebration", "confetti", "party", "success", "launch"],
      },
      sport_soccer_ball: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.sport_soccer_ball",
          defaultMessage: "Soccer ball",
          description:
            "Accessible name and search label for a team icon depicting a soccer ball, also called a football in the Team Icons picker",
        }),
        keywords: ["sport", "soccer", "football", "ball", "team"],
      },
      sport_basketball: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.sport_basketball",
          defaultMessage: "Basketball",
          description:
            "Accessible name and search label for a team icon depicting a basketball in the Team Icons picker",
        }),
        keywords: ["sport", "basketball", "ball", "team", "game"],
      },
      fitness_dumbbell: {
        categoryId: "activities",
        label: (0, b.zR)({
          id: "teams.icons.fitness_dumbbell",
          defaultMessage: "Dumbbell",
          description:
            "Accessible name and search label for a team icon depicting a dumbbell exercise weight in the Team Icons picker",
        }),
        keywords: ["fitness", "dumbbell", "exercise", "strength", "health"],
      },
      place_mountain: {
        categoryId: "travel",
        label: (0, b.zR)({
          id: "teams.icons.place_mountain",
          defaultMessage: "Mountain",
          description: "Accessible name and search label for a team icon depicting a mountain in the Team Icons picker",
        }),
        keywords: ["place", "mountain", "nature", "adventure", "summit"],
      },
      travel_navigation_compass: {
        categoryId: "travel",
        label: (0, b.zR)({
          id: "teams.icons.travel_navigation_compass",
          defaultMessage: "Compass",
          description:
            "Accessible name and search label for a team icon depicting a navigation compass in the Team Icons picker",
        }),
        keywords: ["travel", "navigation", "compass", "direction", "exploration"],
      },
      travel_airplane: {
        categoryId: "travel",
        label: (0, b.zR)({
          id: "teams.icons.travel_airplane",
          defaultMessage: "Airplane",
          description:
            "Accessible name and search label for a team icon depicting an airplane in the Team Icons picker",
        }),
        keywords: ["travel", "airplane", "plane", "flight", "journey"],
      },
      travel_camera: {
        categoryId: "travel",
        label: (0, b.zR)({
          id: "teams.icons.travel_camera",
          defaultMessage: "Camera",
          description:
            "Accessible name and search label for a team icon depicting a camera for travel photography in the Team Icons picker",
        }),
        keywords: ["travel", "camera", "photography", "photo", "creative"],
      },
      education_classroom_globe: {
        categoryId: "travel",
        label: (0, b.zR)({
          id: "teams.icons.education_classroom_globe",
          defaultMessage: "Globe",
          description:
            "Accessible name and search label for a team icon depicting a classroom globe of the Earth in the Team Icons picker",
        }),
        keywords: ["education", "globe", "world", "earth", "global"],
      },
      food_meal_pizza_slice: {
        categoryId: "food",
        label: (0, b.zR)({
          id: "teams.icons.food_meal_pizza_slice",
          defaultMessage: "Pizza slice",
          description:
            "Accessible name and search label for a team icon depicting a slice of pizza in the Team Icons picker",
        }),
        keywords: ["food", "meal", "pizza", "lunch", "party"],
      },
    }
    var _ = t("nvO1")
    function k(e) {
      let a,
        t,
        s,
        r,
        p,
        g,
        u,
        h,
        b = (0, n.c)(30),
        {
          accountId: y,
          avatar: _,
          defaultOpen: k,
          disabled: v,
          modal: x,
          onSelect: I,
          placeholder: A,
          showEditIcon: z,
          size: j,
        } = e,
        T = void 0 !== v && v,
        M = void 0 !== x && x,
        R = void 0 !== z && z,
        N = void 0 === j ? "inline" : j,
        C = (0, c.A)(),
        [S, O] = (0, o.useState)(void 0 !== k && k)
      b[0] !== C
        ? ((a = C.formatMessage({
            id: "settings.teams.avatar.choose",
            defaultMessage: "Choose team avatar",
            description: "Accessible label for the button and popover for choosing a preset image for a workspace team",
          })),
          (b[0] = C),
          (b[1] = a))
        : (a = b[1])
      let P = a,
        L = S && !T,
        B = null == A ? "ghost" : "secondary",
        E = null == A ? "large" : "extraLarge"
      ;(b[2] !== _ || b[3] !== A
        ? ((t = null == _ && null != A ? A : (0, i.jsx)(f.n, { avatar: _, size: "large" })),
          (b[2] = _),
          (b[3] = A),
          (b[4] = t))
        : (t = b[4]),
        b[5] !== R ? ((s = R ? (0, i.jsx)(d.Npl, {}) : null), (b[5] = R), (b[6] = s)) : (s = b[6]),
        b[7] !== T || b[8] !== P || b[9] !== N || b[10] !== t || b[11] !== s || b[12] !== B || b[13] !== E
          ? ((r = (0, i.jsx)(m.Wv, {
              asChild: !0,
              children: (0, i.jsxs)(l.$, {
                className: "self-start",
                "aria-label": P,
                color: B,
                disabled: T,
                radius: E,
                size: N,
                children: [t, s],
              }),
            })),
            (b[7] = T),
            (b[8] = P),
            (b[9] = N),
            (b[10] = t),
            (b[11] = s),
            (b[12] = B),
            (b[13] = E),
            (b[14] = r))
          : (r = b[14]))
      let F = _?.avatar_id
      return (
        b[15] !== _?.avatar_id || b[16] !== I
          ? ((p = (e) => {
              ;(e.avatar_id !== _?.avatar_id && I(e), O(!1))
            }),
            (b[15] = _?.avatar_id),
            (b[16] = I),
            (b[17] = p))
          : (p = b[17]),
        b[18] !== y || b[19] !== F || b[20] !== p
          ? ((g = (0, i.jsx)(w, { accountId: y, selectedId: F, onSelect: p })),
            (b[18] = y),
            (b[19] = F),
            (b[20] = p),
            (b[21] = g))
          : (g = b[21]),
        b[22] !== P || b[23] !== g
          ? ((u = (0, i.jsx)(m.hl, { className: "z-50 outline-hidden", "aria-label": P, unstyled: !0, children: g })),
            (b[22] = P),
            (b[23] = g),
            (b[24] = u))
          : (u = b[24]),
        b[25] !== M || b[26] !== r || b[27] !== u || b[28] !== L
          ? ((h = (0, i.jsxs)(m.AM, { modal: M, open: L, onOpenChange: O, children: [r, u] })),
            (b[25] = M),
            (b[26] = r),
            (b[27] = u),
            (b[28] = L),
            (b[29] = h))
          : (h = b[29]),
        h
      )
    }
    function w(e) {
      let a,
        t,
        o,
        d,
        m = (0, n.c)(15),
        { accountId: f, selectedId: b, onSelect: k } = e,
        w = (0, c.A)(),
        { data: v, error: x, refetch: I } = (0, s._U)(_.Vx, f)
      if (null == v) {
        let e
        return (
          m[0] !== x || m[1] !== I
            ? ((e = (0, i.jsx)(u.Q, {
                children: (0, i.jsx)("div", {
                  className: "flex items-center gap-2 p-2 text-sm text-secondary select-none",
                  role: "status",
                  children:
                    null == x
                      ? (0, i.jsxs)(i.Fragment, {
                          children: [
                            (0, i.jsx)(p.y, {}),
                            (0, i.jsx)(r.A, {
                              id: "settings.teams.avatar.loading",
                              defaultMessage: "Loading avatars…",
                              description: "Loading message in the team avatar picker while fetching preset images",
                            }),
                          ],
                        })
                      : (0, i.jsxs)("div", {
                          className: "flex flex-col gap-2",
                          children: [
                            (0, i.jsx)(r.A, {
                              id: "settings.teams.avatar.loadError",
                              defaultMessage: "Couldn't load avatars",
                              description: "Error in the team avatar picker when fetching preset images fails",
                            }),
                            (0, i.jsx)(l.$, {
                              color: "secondary",
                              onClick: () => void I(),
                              children: (0, i.jsx)(r.A, { ...h.T.retry }),
                            }),
                          ],
                        }),
                }),
              })),
              (m[0] = x),
              (m[1] = I),
              (m[2] = e))
            : (e = m[2]),
          e
        )
      }
      if (m[3] !== v.items || m[4] !== w) {
        var A
        ;((A = v.items),
          (a = A.flatMap((e) => {
            let a = y[e.avatar_id]
            return null == a || null == e.url
              ? []
              : [
                  {
                    kind: "teamIcon",
                    value: e.avatar_id,
                    metadata: {
                      categoryId: a.categoryId,
                      label: w.formatMessage(a.label),
                      keywords: a.keywords,
                      url: e.url,
                    },
                  },
                ]
          })),
          (m[3] = v.items),
          (m[4] = w),
          (m[5] = a))
      } else a = m[5]
      return (
        m[6] !== b || m[7] !== a
          ? ((t = { teamIcons: { selectedIcon: b, choices: a } }), (m[6] = b), (m[7] = a), (m[8] = t))
          : (t = m[8]),
        m[9] !== v.items || m[10] !== k
          ? ((o = (e) => {
              if ("teamIcon" !== e.kind) return
              let a = v.items.find((a) => a.avatar_id === e.value)
              null != a && k(a)
            }),
            (m[9] = v.items),
            (m[10] = k),
            (m[11] = o))
          : (o = m[11]),
        m[12] !== t || m[13] !== o
          ? ((d = (0, i.jsx)(g.T, { capabilities: t, onSelect: o })), (m[12] = t), (m[13] = o), (m[14] = d))
          : (d = m[14]),
        d
      )
    }
  },
  rYAI(e, a, t) {
    var i = t("zTeN"),
      n = t("SPnB"),
      s = t("eFn4"),
      o = t("OWtl"),
      c = t("OMIV")
    let r = (0, i.i1)(o.u, (e, { get: a }) => {
      if (!a(c.JW, "105093358")) return null
      if (a(n.chatGptAuthenticatedAccountId$) !== e) return "unavailable"
      let { data: t, isPending: i, isError: o } = a(s.Jk, e)
      return i
        ? "loading"
        : o || t?.permissions == null
          ? "unavailable"
          : t.permissions.includes("chatgpt.workspace.team.create")
            ? null
            : "denied"
    })
    t.d(a, {}, { j: r })
  },
  hTIG(e, a, t) {
    var i = t("ABep"),
      n = t("QosV"),
      s = t("zTeN"),
      o = t("zd8w"),
      c = t("oyxz"),
      r = t("Wf1j"),
      l = t("Qgfj"),
      d = t("SPnB"),
      m = t("ygO2"),
      p = t("JNtf"),
      g = t("mUDD"),
      u = t("GO7r"),
      h = t("zLIa"),
      f = t("fddy"),
      b = t("OWtl"),
      y = t("qaaZ"),
      _ = t("YufQ"),
      k = t("nvO1"),
      w = t("soaw"),
      v = t("GDNt")
    function x(e) {
      let a,
        t,
        s,
        r,
        l,
        d,
        u,
        h,
        f,
        b,
        y,
        _,
        k,
        v = (0, n.c)(55),
        {
          title: x,
          description: I,
          submitLabel: A,
          secondaryLabel: z,
          showCancel: j,
          footerLeading: T,
          danger: M,
          onSubmit: R,
          onSuccess: N,
          onClose: C,
          onSkip: S,
          secondaryAction: O,
          getErrorMessage: P,
          validationError: L,
          children: B,
          contentProps: E,
          contentOverflow: F,
          size: W,
        } = e,
        D = void 0 === j || j,
        H = void 0 === W ? "compact" : W,
        G = (0, w.a)(),
        [V, $] = (0, o.useState)(null),
        Q = "pending" === V,
        Y = Q ? null : (L ?? V),
        q = !Q
      ;(v[0] !== Q || v[1] !== C
        ? ((a = (e) => {
            e || Q || C()
          }),
          (v[0] = Q),
          (v[1] = C),
          (v[2] = a))
        : (a = v[2]),
        v[3] !== P || v[4] !== G || v[5] !== Q || v[6] !== R || v[7] !== N
          ? ((t = (e) => {
              ;(e.preventDefault(),
                e.stopPropagation(),
                Q ||
                  null == R ||
                  ($("pending"),
                  R()
                    .then((e) => {
                      G() && ($(null), N(e))
                    })
                    .catch((e) => {
                      G() && $(P(e))
                    })))
            }),
            (v[3] = P),
            (v[4] = G),
            (v[5] = Q),
            (v[6] = R),
            (v[7] = N),
            (v[8] = t))
          : (t = v[8]),
        v[9] !== x ? ((s = (0, i.jsx)(p.L3, { children: x })), (v[9] = x), (v[10] = s)) : (s = v[10]),
        v[11] !== I
          ? ((r = null == I ? void 0 : (0, i.jsx)(p.rr, { children: I })), (v[11] = I), (v[12] = r))
          : (r = v[12]),
        v[13] !== s || v[14] !== r
          ? ((l = (0, i.jsx)(g.OO, { children: (0, i.jsx)(g.c7, { title: s, subtitle: r }) })),
            (v[13] = s),
            (v[14] = r),
            (v[15] = l))
          : (l = v[15]),
        v[16] !== B || v[17] !== Q ? ((d = B?.(Q)), (v[16] = B), (v[17] = Q), (v[18] = d)) : (d = v[18]),
        v[19] !== Y
          ? ((u =
              null != Y
                ? (0, i.jsx)(g.OO, {
                    children: (0, i.jsx)("div", {
                      className: "text-sm text-danger",
                      role: "alert",
                      children: (0, i.jsx)(c.A, { ...Y }),
                    }),
                  })
                : null),
            (v[19] = Y),
            (v[20] = u))
          : (u = v[20]),
        v[21] !== Q || v[22] !== O ? ((h = O?.(Q)), (v[21] = Q), (v[22] = O), (v[23] = h)) : (h = v[23]),
        v[24] !== Q || v[25] !== C || v[26] !== S || v[27] !== O || v[28] !== z || v[29] !== D
          ? ((f =
              (D && null == O) || null != S
                ? (0, i.jsx)(m.$, {
                    color: "secondary",
                    disabled: Q,
                    onClick: S ?? C,
                    type: "button",
                    children:
                      z ??
                      (null != S
                        ? (0, i.jsx)(c.A, {
                            id: "settings.teams.setup.members.button.skip",
                            defaultMessage: "Skip",
                            description: "Button that continues team creation without adding members",
                          })
                        : (0, i.jsx)(c.A, {
                            id: "settings.teams.dialog.cancel",
                            defaultMessage: "Cancel",
                            description: "Button that closes a team or membership dialog without saving",
                          })),
                  })
                : null),
            (v[24] = Q),
            (v[25] = C),
            (v[26] = S),
            (v[27] = O),
            (v[28] = z),
            (v[29] = D),
            (v[30] = f))
          : (f = v[30]))
      let U = void 0 !== M && M ? "danger" : "primary",
        J = null == R
      return (
        v[31] !== Q || v[32] !== A || v[33] !== U || v[34] !== J
          ? ((b = (0, i.jsx)(m.$, { color: U, disabled: J, loading: Q, type: "submit", children: A })),
            (v[31] = Q),
            (v[32] = A),
            (v[33] = U),
            (v[34] = J),
            (v[35] = b))
          : (b = v[35]),
        v[36] !== T || v[37] !== h || v[38] !== f || v[39] !== b
          ? ((y = (0, i.jsx)(g.OO, { children: (0, i.jsxs)(g.Es, { children: [T, h, f, b] }) })),
            (v[36] = T),
            (v[37] = h),
            (v[38] = f),
            (v[39] = b),
            (v[40] = y))
          : (y = v[40]),
        v[41] !== d || v[42] !== u || v[43] !== y || v[44] !== t || v[45] !== l
          ? ((_ = (0, i.jsxs)(g.R4, { as: "form", onSubmit: t, children: [l, d, u, y] })),
            (v[41] = d),
            (v[42] = u),
            (v[43] = y),
            (v[44] = t),
            (v[45] = l),
            (v[46] = _))
          : (_ = v[46]),
        v[47] !== F || v[48] !== E || v[49] !== Q || v[50] !== H || v[51] !== _ || v[52] !== q || v[53] !== a
          ? ((k = (0, i.jsx)(p.lG, {
              open: !0,
              contentOverflow: F,
              contentProps: E,
              shouldIgnoreClickOutside: Q,
              showDialogClose: q,
              size: H,
              onOpenChange: a,
              children: _,
            })),
            (v[47] = F),
            (v[48] = E),
            (v[49] = Q),
            (v[50] = H),
            (v[51] = _),
            (v[52] = q),
            (v[53] = a),
            (v[54] = k))
          : (k = v[54]),
        k
      )
    }
    function I(e) {
      return e instanceof v.fk && 403 === e.status ? y.T.deleteForbidden : y.T.deleteError
    }
    t.d(
      a,
      {},
      {
        HU: function (e) {
          let a,
            t,
            o,
            r,
            l,
            d = (0, n.c)(15),
            { accountId: m, canDelete: p, team: g, onClose: u, onDeleted: h } = e,
            f = (0, s.gh)(b.u)
          ;(d[0] !== g.name
            ? ((a = (0, i.jsx)(c.A, {
                id: "settings.teams.delete.title",
                defaultMessage: "Delete {teamName}?",
                description: "Title of the confirmation dialog for permanently deleting the named workspace team",
                values: { teamName: g.name },
              })),
              (d[0] = g.name),
              (d[1] = a))
            : (a = d[1]),
            d[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((t = (0, i.jsx)(c.A, {
                  id: "settings.teams.delete.description",
                  defaultMessage: "This team will be permanently deleted",
                  description: "Warning that confirms deleting a workspace team is permanent",
                })),
                (o = (0, i.jsx)(c.A, { ...y.T.delete })),
                (d[2] = t),
                (d[3] = o))
              : ((t = d[2]), (o = d[3])),
            d[4] !== m || d[5] !== p || d[6] !== h || d[7] !== f || d[8] !== g.id
              ? ((r = p
                  ? async () => {
                      ;(await f.get(k.jo).mutateAsync({ accountId: m, teamId: g.id }), h())
                    }
                  : void 0),
                (d[4] = m),
                (d[5] = p),
                (d[6] = h),
                (d[7] = f),
                (d[8] = g.id),
                (d[9] = r))
              : (r = d[9]))
          let _ = p ? void 0 : y.T.deleteForbidden
          return (
            d[10] !== u || d[11] !== a || d[12] !== r || d[13] !== _
              ? ((l = (0, i.jsx)(x, {
                  danger: !0,
                  title: a,
                  description: t,
                  submitLabel: o,
                  getErrorMessage: I,
                  onClose: u,
                  onSuccess: u,
                  onSubmit: r,
                  validationError: _,
                })),
                (d[10] = u),
                (d[11] = a),
                (d[12] = r),
                (d[13] = _),
                (d[14] = l))
              : (l = d[14]),
            l
          )
        },
        Ik: x,
        c6: function (e) {
          let a,
            t,
            m,
            p,
            w,
            I,
            A,
            z = (0, n.c)(32),
            { accountId: j, team: T, onClose: M, onSaved: R } = e,
            N = (0, s.gh)(b.u),
            C = (0, r.A)(),
            [S, O] = (0, o.useState)(T?.name ?? ""),
            [P, L] = (0, o.useState)(T?.description ?? ""),
            [B, E] = (0, o.useState)(),
            F = null != T
          return (
            z[0] !== T
              ? ((a =
                  null == T
                    ? (0, i.jsx)(c.A, {
                        id: "settings.teams.create.title",
                        defaultMessage: "Create a team",
                        description: "Title of the dialog for creating a workspace team",
                      })
                    : (0, i.jsx)(c.A, { ...y.T.edit })),
                (t =
                  null == T
                    ? (0, i.jsx)(c.A, {
                        id: "settings.teams.create.submit",
                        defaultMessage: "Create",
                        description: "Button that creates the workspace team entered in the dialog",
                      })
                    : (0, i.jsx)(c.A, {
                        id: "settings.teams.edit.submit",
                        defaultMessage: "Save changes",
                        description: "Button that saves changes to a workspace team's details",
                      })),
                (m = (e) =>
                  null == T && e instanceof v.fk && 403 === e.status
                    ? (0, l.zR)({
                        id: "settings.teams.create.forbidden",
                        defaultMessage: "You don't have permission to create teams in this workspace",
                        description:
                          "Inline permission error in the create-team dialog when the server denies creating a shared work group in the current workspace. Team does not refer to a subscription plan. Short plain-text message with no placeholders.",
                      })
                    : e instanceof v.fk && 409 === e.status
                      ? y.T.nameConflict
                      : e instanceof v.fk && 403 === e.status
                        ? y.T.saveForbidden
                        : y.T.saveError),
                (z[0] = T),
                (z[1] = a),
                (z[2] = t),
                (z[3] = m))
              : ((a = z[1]), (t = z[2]), (m = z[3])),
            z[4] !== j || z[5] !== M || z[6] !== R || z[7] !== N
              ? ((p = (e) => {
                  N.get(d.chatGptAuthenticatedAccountId$) !== j ? M() : (M(), R?.(e))
                }),
                (z[4] = j),
                (z[5] = M),
                (z[6] = R),
                (z[7] = N),
                (z[8] = p))
              : (p = z[8]),
            z[9] !== j || z[10] !== B || z[11] !== P || z[12] !== S || z[13] !== N || z[14] !== T
              ? ((w =
                  "" === S.trim()
                    ? void 0
                    : async () => {
                        let e =
                          null == T
                            ? f.y.start(
                                "team_create",
                                {},
                                { shouldEmitAnalytics: () => N.get(d.chatGptAuthenticatedAccountId$) === j },
                              )
                            : null
                        try {
                          let a = await N.get(k.jr).mutateAsync({
                            accountId: j,
                            teamId: T?.id ?? null,
                            fields: {
                              name: S.trim(),
                              description: P.trim(),
                              avatar: null == B ? void 0 : { type: B.type, avatar_id: B.avatar_id },
                            },
                          })
                          return (e?.end(), a)
                        } catch (a) {
                          throw (e?.fail("create_failed"), a)
                        }
                      }),
                (z[9] = j),
                (z[10] = B),
                (z[11] = P),
                (z[12] = S),
                (z[13] = N),
                (z[14] = T),
                (z[15] = w))
              : (w = z[15]),
            z[16] !== j || z[17] !== B || z[18] !== P || z[19] !== C || z[20] !== S || z[21] !== T
              ? ((I = (e) =>
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(g.OO, {
                        spacing: "large",
                        children: (0, i.jsx)(_.$, {
                          accountId: j,
                          avatar: B ?? T?.avatar,
                          disabled: e,
                          modal: !0,
                          onSelect: E,
                          placeholder: null == T ? (0, i.jsx)(u.pYT, {}) : void 0,
                          showEditIcon: null != T,
                          size: null == T ? "iconLarge" : "medium",
                        }),
                      }),
                      (0, i.jsx)(g.OO, {
                        spacing: "large",
                        children: (0, i.jsxs)("label", {
                          className: "flex flex-col gap-2 text-sm font-medium text-default",
                          children: [
                            (0, i.jsx)("span", {
                              className: null == T ? "sr-only" : void 0,
                              children: (0, i.jsx)(c.A, {
                                id: "settings.teams.create.nameLabel",
                                defaultMessage: "Name",
                                description: "Label for the name of the new workspace team",
                              }),
                            }),
                            (0, i.jsx)(h.pd, {
                              autoFocus: !0,
                              disabled: e,
                              maxLength: 200,
                              placeholder:
                                null == T
                                  ? C.formatMessage({
                                      id: "settings.teams.create.namePlaceholder",
                                      defaultMessage: "Team name",
                                      description: "Placeholder for the name of a new workspace team",
                                    })
                                  : void 0,
                              onChange: (e) => O(e.target.value),
                              required: !0,
                              value: S,
                            }),
                          ],
                        }),
                      }),
                      (0, i.jsx)(g.OO, {
                        spacing: "large",
                        children: (0, i.jsxs)("label", {
                          className: "flex flex-col gap-2 text-sm font-medium text-default",
                          children: [
                            (0, i.jsx)("span", {
                              className: null == T ? "sr-only" : void 0,
                              children: (0, i.jsx)(c.A, {
                                id: "settings.teams.create.descriptionLabel",
                                defaultMessage: "Description",
                                description: "Label for the optional description of the new workspace team",
                              }),
                            }),
                            (0, i.jsx)(h.TM, {
                              disabled: e,
                              focusIndicator: "border",
                              maxLength: 2e3,
                              placeholder:
                                null == T
                                  ? C.formatMessage({
                                      id: "settings.teams.create.descriptionPlaceholder",
                                      defaultMessage: "Description—what does your team work on?",
                                      description:
                                        "Placeholder prompting for an optional description of what a new workspace team works on",
                                    })
                                  : void 0,
                              onChange: (e) => L(e.target.value),
                              rows: null == T ? 3 : void 0,
                              value: P,
                              variant: null == T ? "compact" : "default",
                            }),
                          ],
                        }),
                      }),
                    ],
                  })),
                (z[16] = j),
                (z[17] = B),
                (z[18] = P),
                (z[19] = C),
                (z[20] = S),
                (z[21] = T),
                (z[22] = I))
              : (I = z[22]),
            z[23] !== M ||
            z[24] !== F ||
            z[25] !== a ||
            z[26] !== t ||
            z[27] !== m ||
            z[28] !== p ||
            z[29] !== w ||
            z[30] !== I
              ? ((A = (0, i.jsx)(x, {
                  size: "feature",
                  showCancel: F,
                  title: a,
                  submitLabel: t,
                  getErrorMessage: m,
                  onClose: M,
                  onSuccess: p,
                  onSubmit: w,
                  children: I,
                })),
                (z[23] = M),
                (z[24] = F),
                (z[25] = a),
                (z[26] = t),
                (z[27] = m),
                (z[28] = p),
                (z[29] = w),
                (z[30] = I),
                (z[31] = A))
              : (A = z[31]),
            A
          )
        },
      },
    )
  },
}
//# sourceMappingURL=690759.779649148e.js.map
