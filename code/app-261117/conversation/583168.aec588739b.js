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
    var l = a("ABep"),
      s = a("on57"),
      n = a("Hg3i"),
      i = a("zd8w")
    let r = (0, i.createContext)(null),
      o = ({
        onChange: e,
        children: t,
        className: a,
        direction: o = "row",
        variant: c = "default",
        disabled: d = !1,
        __isWidget: m,
        ...u
      }) => {
        let x = (0, i.useMemo)(() => ({ disabled: d, direction: o, variant: c }), [d, o, c])
        return (0, l.jsx)(r, {
          value: x,
          children: (0, l.jsx)(n.Root, {
            className: (0, s.A)("RadioGroup-qedmT_", a),
            "data-direction": o,
            "data-variant": c,
            orientation: "list" === c ? "vertical" : void 0,
            "data-w-component": m ? "radio-group" : void 0,
            onValueChange: e,
            disabled: d,
            ...u,
            children: t,
          }),
        })
      }
    o.Item = ({ value: e, disabled: t = !1, id: a, required: o, children: c, className: d, block: m = !1, ...u }) => {
      let { disabled: x, variant: p } = (() => {
          let e = (0, i.use)(r)
          if (!e) throw Error("RadioGroup components must be wrapped in <RadioGroup />")
          return e
        })(),
        g = x || t,
        f = (0, i.useId)(),
        h = a ?? `${e}-${f}`
      return (0, l.jsx)("div", {
        className: "RadioOptionWrapper-lfJup3",
        "data-variant": p,
        ...u,
        children: (0, l.jsxs)("label", {
          htmlFor: h,
          className: (0, s.A)("RadioLabel-I_wija", d),
          "data-disabled": g ? "" : void 0,
          "data-block": m ? "" : void 0,
          "data-variant": p,
          onMouseDown: (e) => {
            !e.defaultPrevented && e.detail > 1 && e.preventDefault()
          },
          children: [
            (0, l.jsx)("div", {
              className: "RadioIndicatorWrapper-SWef98",
              children: (0, l.jsx)(n.Item, {
                id: h,
                value: e,
                disabled: g,
                required: o,
                className: "RadioItem-a9cavK",
                children: (0, l.jsx)(n.Indicator, { className: "RadioIndicator-m2hnXY" }),
              }),
            }),
            c,
          ],
        }),
      })
    }
  },
  Y9i8(e, t, a) {
    var l = a("ABep"),
      s = a("QosV"),
      n = a("on57"),
      i = a("K4Cx"),
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
            d = (0, s.c)(23),
            { ariaLabel: m, className: u, options: x, selectedId: p, animateSelection: g, size: f, onSelect: h } = e,
            v = void 0 === g || g,
            b = void 0 === f ? "default" : f,
            y = (0, r.useId)(),
            j =
              "compact" === b
                ? "inline-grid gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5"
                : "bg-text/10 inline-grid gap-1 rounded-2xl p-1"
          d[0] !== u || d[1] !== j ? ((t = (0, n.A)(j, u)), (d[0] = u), (d[1] = j), (d[2] = t)) : (t = d[2])
          let C = `repeat(${x.length}, minmax(0, 1fr))`
          if (
            (d[3] !== C ? ((a = { gridTemplateColumns: C }), (d[3] = C), (d[4] = a)) : (a = d[4]),
            d[5] !== v || d[6] !== y || d[7] !== h || d[8] !== x || d[9] !== p || d[10] !== b)
          ) {
            let e
            ;(d[12] !== v || d[13] !== y || d[14] !== h || d[15] !== p || d[16] !== b
              ? ((e = (e) => {
                  let t = e.id === p
                  return (0, l.jsxs)(
                    "button",
                    {
                      className: (0, n.A)(
                        "cursor-interaction relative isolate min-w-0 transition-transform duration-basic active:scale-[0.98]",
                        "compact" === b
                          ? "flex h-6 items-center justify-center rounded-lg px-2 py-0 text-xs leading-4 font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0"
                          : "rounded-xl px-3 py-1.5 text-sm font-medium",
                        t ? ("compact" === b && "text-default") || "text-black" : "text-secondary",
                      ),
                      type: "button",
                      "aria-label": e.ariaLabel,
                      "aria-pressed": t,
                      onClick: () => {
                        h(e.id)
                      },
                      children: [
                        t
                          ? (0, l.jsx)(i.P.span, {
                              layoutId: v ? y : void 0,
                              className:
                                "compact" === b
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
                (d[13] = y),
                (d[14] = h),
                (d[15] = p),
                (d[16] = b),
                (d[17] = e))
              : (e = d[17]),
              (o = x.map(e)),
              (d[5] = v),
              (d[6] = y),
              (d[7] = h),
              (d[8] = x),
              (d[9] = p),
              (d[10] = b),
              (d[11] = o))
          } else o = d[11]
          return (
            d[18] !== m || d[19] !== t || d[20] !== a || d[21] !== o
              ? ((c = (0, l.jsx)("div", { className: t, role: "group", "aria-label": m, style: a, children: o })),
                (d[18] = m),
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
  okCa(e, t, a) {
    var l = a("ABep"),
      s = a("QosV"),
      n = a("on57"),
      i = a("zd8w"),
      r = a("Wf1j"),
      o = a("YwPh"),
      c = a("BrXf"),
      d = a("bVeK"),
      m = a("UxN3")
    a.d(
      t,
      {},
      {
        s: function (e) {
          let t,
            a,
            u,
            x,
            p,
            g,
            f,
            h,
            v,
            b = (0, s.c)(70),
            {
              id: y,
              inputRef: j,
              className: C,
              "aria-activedescendant": N,
              "aria-autocomplete": w,
              "aria-controls": _,
              "aria-expanded": A,
              autoFocus: M,
              clearLabel: S,
              disabled: k,
              inputKey: I,
              inputRole: T,
              isClearable: P,
              label: E,
              maxLength: O,
              onFocus: B,
              onKeyDown: R,
              onSearchQueryChange: z,
              placeholder: L,
              readOnly: $,
              searchQuery: q,
              toolbarIconTone: F,
              trailingControl: D,
              variant: Y,
            } = e,
            U = void 0 === P || P,
            G = void 0 === F ? "secondary" : F,
            W = void 0 === Y ? "default" : Y,
            H = (0, r.A)(),
            K = (0, i.useRef)(null),
            V = j ?? K,
            Q =
              "settings-dialog" === W ||
              "catalog-compact" === W ||
              "toolbar" === W ||
              "toolbar-action" === W ||
              "toolbar-compact" === W ||
              "directory" === W,
            X =
              ("default" === W || "settings" === W) &&
              "h-page-search gap-2 border border-primary-outline bg-page-search px-2.5",
            Z = "default" === W && "rounded-full",
            J = "settings" === W && "rounded-button-toolbar",
            ee = Q && "gap-2 border border-primary-outline text-sm leading-5",
            et = Q && "catalog-compact" !== W && "rounded-full px-3",
            ea = "catalog-compact" === W && "h-9 rounded-xl px-2",
            el = Q && "directory" !== W && "bg-transparent",
            es = "directory" === W && "h-9 bg-white dark:bg-(--gray-200)",
            en = "toolbar" === W && "h-9",
            ei = "settings-dialog" === W && "h-10",
            er = "toolbar-action" === W && "h-token-button-composer",
            eo = "toolbar-compact" === W && "h-8 browser:h-9",
            ec =
              "sidebar" === W &&
              "sidebar-item h-[var(--height-token-row)] bg-background-secondary-soft-alpha pe-[var(--padding-row-cell-x,var(--padding-row-x))]",
            ed = "sidebar-header" === W && "h-9 shrink-0 gap-2 rounded-full bg-background-secondary-soft-alpha px-3",
            em = "catalog" === W && "h-14 gap-3 rounded-xl border border-primary-outline bg-surface px-5",
            eu =
              "catalog-filter" === W && "h-12 gap-3 rounded-xl border border-primary-outline bg-surface-secondary px-4",
            ex =
              "discovery" === W &&
              "h-12.5 gap-2 rounded-full border border-primary-outline bg-surface-card px-3 text-sm leading-5"
          b[0] !== C ||
          b[1] !== el ||
          b[2] !== es ||
          b[3] !== en ||
          b[4] !== ei ||
          b[5] !== er ||
          b[6] !== eo ||
          b[7] !== ec ||
          b[8] !== ed ||
          b[9] !== em ||
          b[10] !== eu ||
          b[11] !== ex ||
          b[12] !== X ||
          b[13] !== Z ||
          b[14] !== J ||
          b[15] !== ee ||
          b[16] !== et ||
          b[17] !== ea
            ? ((t = (0, n.A)(
                "no-drag flex items-center py-0 text-base leading-[18px]",
                X,
                Z,
                J,
                ee,
                et,
                ea,
                el,
                es,
                en,
                ei,
                er,
                eo,
                ec,
                ed,
                em,
                eu,
                ex,
                C,
              )),
              (b[0] = C),
              (b[1] = el),
              (b[2] = es),
              (b[3] = en),
              (b[4] = ei),
              (b[5] = er),
              (b[6] = eo),
              (b[7] = ec),
              (b[8] = ed),
              (b[9] = em),
              (b[10] = eu),
              (b[11] = ex),
              (b[12] = X),
              (b[13] = Z),
              (b[14] = J),
              (b[15] = ee),
              (b[16] = et),
              (b[17] = ea),
              (b[18] = t))
            : (t = b[18])
          let ep = "sidebar-header" === W || void 0
          ;(b[19] !== Q || b[20] !== G || b[21] !== W
            ? ((a =
                "sidebar" === W
                  ? (0, l.jsx)(c.B, { icon: (0, l.jsx)(o.A, { className: "icon-sm text-secondary" }) })
                  : (0, l.jsxs)("span", {
                      className: "flex shrink-0 items-center justify-center",
                      children: [
                        Q &&
                          (0, l.jsx)(m.b5, {
                            icon: { 16: d.QmT, 20: d.zcw },
                            className: "tertiary" === G ? "text-tertiary" : "text-secondary",
                          }),
                        "discovery" === W && (0, l.jsx)(d.zcw, {}),
                        !Q &&
                          "discovery" !== W &&
                          ("sidebar-header" === W
                            ? (0, l.jsx)(d.QmT, { className: "text-secondary" })
                            : (0, l.jsx)(o.A, { className: "icon-sm text-secondary" })),
                      ],
                    })),
              (b[19] = Q),
              (b[20] = G),
              (b[21] = W),
              (b[22] = a))
            : (a = b[22]),
            b[23] !== y || b[24] !== E
              ? ((u = (0, l.jsx)("label", { className: "sr-only", htmlFor: y, children: E })),
                (b[23] = y),
                (b[24] = E),
                (b[25] = u))
              : (u = b[25]))
          let eg = "discovery" === W ? "placeholder:text-default" : "placeholder:text-tertiary",
            ef = Q || "discovery" === W ? "text-sm leading-5" : "text-base leading-[18px]",
            eh = "discovery" === W && "tracking-[-0.15px] max-md:text-base"
          return (
            b[26] !== eg || b[27] !== ef || b[28] !== eh
              ? ((x = (0, n.A)(
                  "min-w-0 flex-1 bg-transparent text-default outline-none select-text [&::placeholder]:select-none",
                  eg,
                  ef,
                  eh,
                )),
                (b[26] = eg),
                (b[27] = ef),
                (b[28] = eh),
                (b[29] = x))
              : (x = b[29]),
            b[30] !== z
              ? ((p = (e) => {
                  z(e.target.value)
                }),
                (b[30] = z),
                (b[31] = p))
              : (p = b[31]),
            b[32] !== N ||
            b[33] !== w ||
            b[34] !== _ ||
            b[35] !== A ||
            b[36] !== M ||
            b[37] !== k ||
            b[38] !== y ||
            b[39] !== I ||
            b[40] !== T ||
            b[41] !== O ||
            b[42] !== B ||
            b[43] !== R ||
            b[44] !== L ||
            b[45] !== $ ||
            b[46] !== V ||
            b[47] !== q ||
            b[48] !== x ||
            b[49] !== p
              ? ((g = (0, l.jsx)(
                  "input",
                  {
                    "aria-activedescendant": N,
                    "aria-autocomplete": w,
                    "aria-controls": _,
                    "aria-expanded": A,
                    autoFocus: M,
                    id: y,
                    ref: V,
                    className: x,
                    autoComplete: "off",
                    disabled: k,
                    maxLength: O,
                    readOnly: $,
                    role: T,
                    type: "text",
                    value: q,
                    onChange: p,
                    onFocus: B,
                    onKeyDown: R,
                    placeholder: L,
                  },
                  I,
                )),
                (b[32] = N),
                (b[33] = w),
                (b[34] = _),
                (b[35] = A),
                (b[36] = M),
                (b[37] = k),
                (b[38] = y),
                (b[39] = I),
                (b[40] = T),
                (b[41] = O),
                (b[42] = B),
                (b[43] = R),
                (b[44] = L),
                (b[45] = $),
                (b[46] = V),
                (b[47] = q),
                (b[48] = x),
                (b[49] = p),
                (b[50] = g))
              : (g = b[50]),
            b[51] !== S ||
            b[52] !== k ||
            b[53] !== H ||
            b[54] !== U ||
            b[55] !== z ||
            b[56] !== V ||
            b[57] !== q ||
            b[58] !== W
              ? ((f =
                  U && q.length > 0
                    ? (0, l.jsx)("button", {
                        disabled: k,
                        "aria-label":
                          S ?? H.formatMessage({ id: "skills.pageSearchInput.clear", defaultMessage: "Clear search" }),
                        className: (0, n.A)(
                          "flex shrink-0 cursor-interaction items-center justify-center text-secondary hover:text-default",
                          "sidebar" === W && "size-6",
                        ),
                        type: "button",
                        onClick: () => {
                          ;(V.current?.focus(), z(""))
                        },
                        children: (0, l.jsx)(d.YwO, {}),
                      })
                    : null),
                (b[51] = S),
                (b[52] = k),
                (b[53] = H),
                (b[54] = U),
                (b[55] = z),
                (b[56] = V),
                (b[57] = q),
                (b[58] = W),
                (b[59] = f))
              : (f = b[59]),
            b[60] !== D
              ? ((h = null == D ? null : (0, l.jsx)("div", { className: "flex shrink-0 items-center", children: D })),
                (b[60] = D),
                (b[61] = h))
              : (h = b[61]),
            b[62] !== t || b[63] !== ep || b[64] !== a || b[65] !== u || b[66] !== g || b[67] !== f || b[68] !== h
              ? ((v = (0, l.jsxs)("div", {
                  className: t,
                  "data-sidebar-header-search": ep,
                  children: [a, u, g, f, h],
                })),
                (b[62] = t),
                (b[63] = ep),
                (b[64] = a),
                (b[65] = u),
                (b[66] = g),
                (b[67] = f),
                (b[68] = h),
                (b[69] = v))
              : (v = b[69]),
            v
          )
        },
      },
    )
  },
  PkPj(e, t, a) {
    var l = a("ABep"),
      s = a("QosV"),
      n = a("on57"),
      i = a("IjbW"),
      r = a("SOml"),
      o = a("suct"),
      c = a("K4Cx"),
      d = a("qmMi"),
      m = a("zd8w"),
      u = a("wD9O"),
      x = a("khOd"),
      p = a("HgLj"),
      g = a("va0r"),
      f = a("I7bK"),
      h = a("MeAu"),
      v = a("okCa"),
      b = a("DiyT")
    let y = {
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
      let l = t.getBoundingClientRect().top - e.getBoundingClientRect().top,
        s = (0, u.Ud)(Math.max(0, -l), a)
      return (t.style.setProperty("--header-background-top-inset", `${s}px`), l)
    }
    function N(e) {
      let t,
        a,
        i = (0, s.c)(7),
        { children: r, inset: o, wrap: c, variant: d } = e,
        m = "directory" === (void 0 === d ? "default" : d) ? "pb-4" : "pb-2",
        u = void 0 !== c && c && "flex-wrap",
        x = (void 0 === o || o) && "px-3"
      return (
        i[0] !== m || i[1] !== u || i[2] !== x
          ? ((t = (0, n.A)("flex items-center justify-between gap-4", m, u, x)),
            (i[0] = m),
            (i[1] = u),
            (i[2] = x),
            (i[3] = t))
          : (t = i[3]),
        i[4] !== r || i[5] !== t
          ? ((a = (0, l.jsx)("div", { className: t, children: r })), (i[4] = r), (i[5] = t), (i[6] = a))
          : (a = i[6]),
        a
      )
    }
    a.d(
      t,
      { J1: () => b.J1 },
      {
        Ql: function (e) {
          let t,
            a,
            w,
            _,
            A,
            M,
            S,
            k,
            I,
            T,
            P,
            E,
            O,
            B,
            R,
            z,
            L,
            $,
            q,
            F,
            D,
            Y,
            U,
            G,
            W,
            H,
            K,
            V,
            Q,
            X,
            Z,
            J,
            ee,
            et,
            ea,
            el = (0, s.c)(226),
            {
              animateContentLayout: es,
              collapseHeaderOnScroll: en,
              expandSearchWhenWrapped: ei,
              banner: er,
              bannerAfterHeader: eo,
              bannerPlacement: ec,
              children: ed,
              contentClassName: em,
              contentInset: eu,
              contentWidth: ex,
              controls: ep,
              headerAction: eg,
              headerFade: ef,
              headerPlacement: eh,
              headerVariant: ev,
              horizontalPaddingClassName: eb,
              reserveSelectionGutter: ey,
              balanceScrollbarGutter: ej,
              navigation: eC,
              pageActions: eN,
              scrollContainerRef: ew,
              search: e_,
              searchContent: eA,
              searchPlacement: eM,
              searchToolbar: eS,
              stickyControls: ek,
              subtitle: eI,
              title: eT,
              titleRef: eP,
              toolbarActions: eE,
              toolbarInset: eO,
              wrapActionsAtNarrowWidth: eB,
            } = e,
            eR = void 0 !== ei && ei,
            ez = void 0 !== eo && eo,
            eL = void 0 === eu || eu,
            e$ = void 0 === ex ? "default" : ex,
            eq = void 0 === ef ? "always" : ef,
            eF = void 0 === eh ? "page" : eh,
            eD = void 0 === ev ? "default" : ev,
            eY = void 0 !== ey && ey,
            eU = void 0 !== ej && ej,
            eG = void 0 === eM ? "sticky" : eM,
            eW = void 0 === eO || eO,
            eH = (0, d.Ul)(x.GB),
            eK = (0, u.dz)(),
            eV = "profileManager" === eD,
            eQ = "px-panel"
          ;("profile" === e$
            ? (eQ = eV ? "px-4 @lg/manager:px-16" : "px-5 sm:px-16")
            : "directory" === e$ && (eQ = "px-4 md:px-panel"),
            el[0] !== e$ || el[1] !== eQ || el[2] !== eD || el[3] !== eb || el[4] !== eY
              ? ((t = eY
                  ? "px-18"
                  : (eb ??
                    (0, n.A)(
                      eQ,
                      ("medium" === e$ || "extraWide" === e$) && "compact" === eD ? "px-6 lg:px-12" : void 0,
                    ))),
                (el[0] = e$),
                (el[1] = eQ),
                (el[2] = eD),
                (el[3] = eb),
                (el[4] = eY),
                (el[5] = t))
              : (t = el[5]))
          let eX = (0, n.A)(
              t,
              eH &&
                (eY
                  ? "[[data-app-shell-compact-page-gutter=true]_&]:px-14"
                  : null == eb && "profile" !== e$ && "[[data-app-shell-compact-page-gutter=true]_&]:px-7.5"),
            ),
            [eZ] = (0, m.useState)(j),
            [eJ, e0] = (0, m.useState)(!1),
            [e1, e2] = (0, m.useState)(!1),
            e3 = (0, m.useRef)(null),
            e4 = (0, m.useRef)(null),
            e5 = (0, m.useRef)(null),
            [e6, e7] = (0, m.useState)(!1),
            [e8, e9] = (0, m.useState)(),
            te = (0, m.useRef)(null),
            tt = (0, m.useRef)(null)
          el[6] !== ew ? ((a = (0, p.P)(e3, ew)), (el[6] = ew), (el[7] = a)) : (a = el[7])
          let ta = a,
            tl = (0, m.useRef)(null),
            ts = (0, m.useRef)(null),
            [tn, ti] = (0, m.useState)(),
            tr = document.activeElement,
            to = "none" !== eF,
            tc = "toolbar" === eF,
            td = "scroll" === eF && e1,
            tm = tc || td,
            tu = y[eD],
            tx = "directory" === eD,
            tp = "compact" === eD,
            tg = "profile" === eD || eV,
            tf = !tc && null == eE && (to || !tg),
            th = tf ? "when-present" : "default"
          el[8] !== tf || el[9] !== eF || el[10] !== eJ || el[11] !== td || el[12] !== th
            ? ((w = { contentInset: th }),
              tf && td && ((w.contentInset = "none"), (w.background = "content")),
              "inline" === eF &&
                ((w.background = "header"), (w.divider = eJ ? "header" : void 0), (w.hideContentFade = !0)),
              (el[8] = tf),
              (el[9] = eF),
              (el[10] = eJ),
              (el[11] = td),
              (el[12] = th),
              (el[13] = w))
            : (w = el[13])
          let tv = null != e_ || null != eA,
            tb = "sticky" === eF,
            ty = tb && void 0 !== en && en,
            tj = null != eC || null != eN,
            tC = null != ek || (tb && (tj || null != ep)),
            tN = tb || "inline" === eF,
            tw = "bottom-on-scroll" === eG && tv && !tN,
            t_ = eH && !tg && !tx && "browser:max-md:text-lg browser:max-md:font-medium",
            tA = {
              directory: "max-w-[calc(768px+var(--padding-panel)*2)]",
              extraWide: "max-w-[1440px]",
              wide: "max-w-5xl",
              medium: "max-w-[960px]",
              default: "max-w-[var(--thread-content-max-width)]",
              profile: eV ? "max-w-[1144px]" : "max-w-4xl",
            }[e$],
            tM = !tb && ((!tc && null != eC) || null != eN),
            tS = (0, i.I)()
          el[14] !== tS ? ((_ = tS ? { duration: 0 } : f.m9), (el[14] = tS), (el[15] = _)) : (_ = el[15])
          let tk = _,
            tI = e_?.autoFocus ?? (null == tr || tr === document.body || tr === document.documentElement || tr === eZ)
          el[16] !== e_ || el[17] !== eA || el[18] !== tI
            ? ((A =
                eA ??
                (null == e_
                  ? null
                  : (0, l.jsx)(v.s, { ...e_, autoFocus: tI, className: (0, n.A)("min-w-0 flex-1", e_.className) }))),
              (el[16] = e_),
              (el[17] = eA),
              (el[18] = tI),
              (el[19] = A))
            : (A = el[19])
          let tT = A
          ;(el[20] !== tw
            ? ((M = () => {
                let e = e3.current,
                  t = e4.current,
                  a = e5.current
                if (!tw || null == e || null == t || null == a) return
                let l = new IntersectionObserver(
                    (e) => {
                      let [t] = e
                      e7(!t.isIntersecting && t.boundingClientRect.bottom <= (t.rootBounds?.top ?? 0))
                    },
                    { root: e },
                  ),
                  s = new ResizeObserver((e) => {
                    let [t] = e,
                      l = t.borderBoxSize?.[0]?.blockSize ?? a.offsetHeight
                    l && e9(l)
                  })
                return (
                  l.observe(t),
                  s.observe(a, { box: "border-box" }),
                  () => {
                    ;(l.disconnect(), s.disconnect())
                  }
                )
              }),
              (S = [tw]),
              (el[20] = tw),
              (el[21] = M),
              (el[22] = S))
            : ((M = el[21]), (S = el[22])),
            (0, m.useLayoutEffect)(M, S),
            el[23] !== tw || el[24] !== tS
              ? ((k = () => {
                  let e = e5.current
                  if (!tw || null == e) return
                  let t = (0, r.i)(
                    e,
                    { opacity: [0, 1], y: [24, 0] },
                    { type: "tween", ease: "easeInOut", duration: 0.25 * !tS },
                  )
                  return () => t.stop()
                }),
                (el[23] = tw),
                (el[24] = tS),
                (el[25] = k))
              : (k = el[25]),
            el[26] !== tw || el[27] !== e6 || el[28] !== tS
              ? ((I = [tw, e6, tS]), (el[26] = tw), (el[27] = e6), (el[28] = tS), (el[29] = I))
              : (I = el[29]),
            (0, m.useLayoutEffect)(k, I),
            el[30] !== tb || el[31] !== eH || el[32] !== eK
              ? ((T = () => {
                  let e = e3.current,
                    t = te.current
                  if (!eH || !tb || null == e || null == t) return
                  let a = new ResizeObserver(() => {
                    C(e, t, eK)
                  })
                  return (
                    a.observe(e),
                    a.observe(t),
                    () => {
                      ;(a.disconnect(), t.style.removeProperty("--header-background-top-inset"))
                    }
                  )
                }),
                (P = [eH, tb, eK]),
                (el[30] = tb),
                (el[31] = eH),
                (el[32] = eK),
                (el[33] = T),
                (el[34] = P))
              : ((T = el[33]), (P = el[34])),
            (0, m.useLayoutEffect)(T, P),
            el[35] !== eF
              ? ((E = () => {
                  let e = tl.current,
                    t = e3.current
                  if ("scroll" !== eF || null == e || null == t) return
                  let a = new IntersectionObserver(
                    (e) => {
                      let [t] = e
                      e2(!t.isIntersecting && t.boundingClientRect.bottom <= (t.rootBounds?.top ?? 0))
                    },
                    { root: t, threshold: 0 },
                  )
                  return (a.observe(e), () => a.disconnect())
                }),
                (O = [eF]),
                (el[35] = eF),
                (el[36] = E),
                (el[37] = O))
              : ((E = el[36]), (O = el[37])),
            (0, m.useLayoutEffect)(E, O),
            el[38] !== eF || el[39] !== td
              ? ((B = () => {
                  let e = ts.current
                  if ("scroll" !== eF || td || null == e) return
                  let t = new ResizeObserver(() => {
                    ti({ width: e.offsetWidth, height: e.offsetHeight })
                  })
                  return (t.observe(e), () => t.disconnect())
                }),
                (R = [eF, td]),
                (el[38] = eF),
                (el[39] = td),
                (el[40] = B),
                (el[41] = R))
              : ((B = el[40]), (R = el[41])),
            (0, m.useLayoutEffect)(B, R))
          let tP =
              null == er
                ? null
                : (0, l.jsx)("div", {
                    className: (0, n.A)(
                      "w-full empty:hidden",
                      "inset" === (void 0 === ec ? "inset" : ec) && ["mx-auto pt-panel", tA, eX],
                    ),
                    children: er,
                  }),
            tE = eH ? void 0 : ek
          if (tb) {
            let e
            ;(el[42] !== ep || el[43] !== tC || el[44] !== tj || el[45] !== eC || el[46] !== eN || el[47] !== ek
              ? ((e = tC
                  ? (0, l.jsxs)("div", {
                      className: "flex w-full min-w-0 flex-col",
                      children: [
                        tj
                          ? (0, l.jsxs)(N, {
                              inset: !1,
                              wrap: !0,
                              children: [
                                eC,
                                null == eN ? null : (0, l.jsx)("div", { className: "ms-auto", children: eN }),
                              ],
                            })
                          : null,
                        ek,
                        ep,
                      ],
                    })
                  : null),
                (el[42] = ep),
                (el[43] = tC),
                (el[44] = tj),
                (el[45] = eC),
                (el[46] = eN),
                (el[47] = ek),
                (el[48] = e))
              : (e = el[48]),
              (tE = e))
          }
          el[49] !== to ||
          el[50] !== eg ||
          el[51] !== eD ||
          el[52] !== tg ||
          el[53] !== tc ||
          el[54] !== eC ||
          el[55] !== td ||
          el[56] !== tm ||
          el[57] !== t_ ||
          el[58] !== eT ||
          el[59] !== eP ||
          el[60] !== eE ||
          el[61] !== eW ||
          el[62] !== tk
            ? ((z =
                to && (tm || null != eE)
                  ? (0, l.jsx)(g.FL, {
                      divider: !tg,
                      children: (0, l.jsxs)(h.oE, {
                        inset: eW,
                        children: [
                          (0, l.jsx)(o.N, {
                            initial: !1,
                            children: tm
                              ? (0, l.jsx)(
                                  c.P.div,
                                  {
                                    animate: { opacity: 1, transform: "translateY(0)" },
                                    className: "min-w-0 flex-1 overflow-hidden",
                                    exit: { opacity: 0, transform: "translateY(4px)" },
                                    initial: { opacity: 0, transform: "translateY(4px)" },
                                    transition: tk,
                                    children:
                                      tc && null != eC
                                        ? (0, l.jsxs)(l.Fragment, {
                                            children: [
                                              (0, l.jsx)("h1", { ref: eP, className: "sr-only", children: eT }),
                                              eC,
                                            ],
                                          })
                                        : (0, l.jsx)("h1", {
                                            ref: eP,
                                            className: (0, n.A)(
                                              "min-w-0 truncate text-base text-default electron:font-medium",
                                              t_,
                                              "inset" === eD ? "px-2" : null,
                                            ),
                                            children: eT,
                                          }),
                                  },
                                  "toolbar-heading",
                                )
                              : null,
                          }),
                          null != eE || td
                            ? (0, l.jsxs)("div", {
                                className: "ms-auto flex min-w-0 items-center justify-end gap-2",
                                children: [td ? eg : null, eE],
                              })
                            : null,
                        ],
                      }),
                    })
                  : null),
              (el[49] = to),
              (el[50] = eg),
              (el[51] = eD),
              (el[52] = tg),
              (el[53] = tc),
              (el[54] = eC),
              (el[55] = td),
              (el[56] = tm),
              (el[57] = t_),
              (el[58] = eT),
              (el[59] = eP),
              (el[60] = eE),
              (el[61] = eW),
              (el[62] = tk),
              (el[63] = z))
            : (z = el[63])
          let tO = tw || !to ? "relative flex h-full min-h-0 flex-1 flex-col" : "contents",
            tB = !to && !eH && "max-md:pt-[var(--height-toolbar)]",
            tR = !to && eH && "browser:max-md:pt-[var(--height-toolbar)]",
            tz = !to && "profile" === e$ && "bg-surface-card"
          el[64] !== tO || el[65] !== tB || el[66] !== tR || el[67] !== tz
            ? ((L = (0, n.A)(tO, tB, tR, tz)), (el[64] = tO), (el[65] = tB), (el[66] = tR), (el[67] = tz), (el[68] = L))
            : (L = el[68])
          let tL = eH || void 0,
            t$ = eV && "@container/manager",
            tq = "profile" === e$ && "bg-surface-card",
            tF =
              tx &&
              "bg-surface [--color-text:var(--gray-1000)] [--color-surface:light-dark(var(--gray-25),var(--black))]",
            tD = !eU && "[scrollbar-gutter:stable]",
            tY = eU && (tg ? "sm:[scrollbar-gutter:stable_both-edges]" : "md:[scrollbar-gutter:stable_both-edges]"),
            tU = !tw && "relative",
            tG = td && "vertical-scroll-fade-mask-top"
          el[69] !== t$ ||
          el[70] !== tq ||
          el[71] !== tF ||
          el[72] !== tD ||
          el[73] !== tY ||
          el[74] !== tU ||
          el[75] !== tG
            ? (($ = (0, n.A)("h-full min-h-0 flex-1 overflow-x-hidden overflow-y-auto", t$, tq, tF, tD, tY, tU, tG)),
              (el[69] = t$),
              (el[70] = tq),
              (el[71] = tF),
              (el[72] = tD),
              (el[73] = tY),
              (el[74] = tU),
              (el[75] = tG),
              (el[76] = $))
            : ($ = el[76])
          let tW = (!tc && null == eE && (!!to || !tg)) || void 0
          el[77] !== tN ||
          el[78] !== tv ||
          el[79] !== tb ||
          el[80] !== eq ||
          el[81] !== eG ||
          el[82] !== e0 ||
          el[83] !== ty ||
          el[84] !== eH ||
          el[85] !== ek ||
          el[86] !== eK
            ? ((q =
                tN || ("when-scrolled" === eq && "sticky" === eG && (tv || null != ek))
                  ? (e) => {
                      let t = te.current,
                        a = tt.current
                      if (ty && !eH && null != t && null != a) {
                        let e = t.getBoundingClientRect()
                        t.style.setProperty(
                          "--header-scroll-overlap",
                          `${Math.max(0, ((e.bottom - a.getBoundingClientRect().top) * t.offsetHeight) / e.height + parseFloat(getComputedStyle(t).marginBottom))}px`,
                        )
                      }
                      if (eH && tb && null != t) {
                        let a = C(e.currentTarget, t, eK)
                        e0(e.currentTarget.scrollTop > 0 && a <= parseFloat(getComputedStyle(t).top))
                      } else e0(e.currentTarget.scrollTop > 0)
                    }
                  : void 0),
              (el[77] = tN),
              (el[78] = tv),
              (el[79] = tb),
              (el[80] = eq),
              (el[81] = eG),
              (el[82] = e0),
              (el[83] = ty),
              (el[84] = eH),
              (el[85] = ek),
              (el[86] = eK),
              (el[87] = q))
            : (q = el[87])
          let tH = !to && "h-full"
          ;(el[88] !== tH
            ? ((F = (0, n.A)("flex min-h-full w-full flex-col", tH)), (el[88] = tH), (el[89] = F))
            : (F = el[89]),
            el[90] !== tw || el[91] !== e8
              ? ((D = tw ? { paddingBottom: e8 } : void 0), (el[90] = tw), (el[91] = e8), (el[92] = D))
              : (D = el[92]))
          let tK = ez && tN ? null : tP
          ;(el[93] !== tE ||
          el[94] !== eX ||
          el[95] !== eR ||
          el[96] !== tN ||
          el[97] !== tv ||
          el[98] !== tb ||
          el[99] !== eg ||
          el[100] !== tu ||
          el[101] !== tx ||
          el[102] !== eJ ||
          el[103] !== tT ||
          el[104] !== eS ||
          el[105] !== ty ||
          el[106] !== eH ||
          el[107] !== t_ ||
          el[108] !== eI ||
          el[109] !== eT ||
          el[110] !== eP ||
          el[111] !== tA ||
          el[112] !== eB
            ? ((Y = tN
                ? (0, l.jsx)(b.gX, {
                    ref: te,
                    className: tA,
                    horizontalPaddingClassName: eX,
                    presentation: tx ? "directory" : "default",
                    collapseOnScroll: ty,
                    expandSearchWhenWrapped: eR,
                    wrapActionsAtNarrowWidth: eB,
                    showDivider: tb && eJ,
                    sticky: tb,
                    title:
                      null == eT
                        ? null
                        : (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)("h1", {
                                ref: eP,
                                className: (0, n.A)(
                                  "flex min-h-9 items-center text-default",
                                  eH && "browser:max-md:min-h-0",
                                  t_,
                                  tu.title,
                                ),
                                children: eT,
                              }),
                              null != eI && (!eH || tx || tb)
                                ? (0, l.jsx)("div", {
                                    className: (0, n.A)(
                                      "text-base leading-6 text-secondary",
                                      ty && "max-w-lg",
                                      eH && !tx && "browser:max-md:hidden",
                                    ),
                                    children: eI,
                                  })
                                : null,
                            ],
                          }),
                    actions: tv ? (0, l.jsx)(b.Tz, { search: tT, controls: eS, actions: eg }) : eg,
                    navigation: tE,
                  })
                : null),
              (el[93] = tE),
              (el[94] = eX),
              (el[95] = eR),
              (el[96] = tN),
              (el[97] = tv),
              (el[98] = tb),
              (el[99] = eg),
              (el[100] = tu),
              (el[101] = tx),
              (el[102] = eJ),
              (el[103] = tT),
              (el[104] = eS),
              (el[105] = ty),
              (el[106] = eH),
              (el[107] = t_),
              (el[108] = eI),
              (el[109] = eT),
              (el[110] = eP),
              (el[111] = tA),
              (el[112] = eB),
              (el[113] = Y))
            : (Y = el[113]),
            el[114] !== eX ||
            el[115] !== tN ||
            el[116] !== tb ||
            el[117] !== tx ||
            el[118] !== eH ||
            el[119] !== eI ||
            el[120] !== tA ||
            el[121] !== eB
              ? ((U =
                  tN && eH && !tx && !tb && null != eI
                    ? (0, l.jsx)("div", {
                        className: eB ? "@container/searchable-header" : "contents",
                        children: (0, l.jsx)("div", {
                          className: (0, n.A)(
                            "mx-auto w-full text-base leading-6 text-secondary browser:max-md:hidden",
                            eB && "in-data-[codex-window-type=electron]:@max-3xl/searchable-header:hidden",
                            tA,
                            eX,
                          ),
                          children: (0, l.jsx)("div", { className: "max-w-lg -translate-y-1.5", children: eI }),
                        }),
                      })
                    : null),
                (el[114] = eX),
                (el[115] = tN),
                (el[116] = tb),
                (el[117] = tx),
                (el[118] = eH),
                (el[119] = eI),
                (el[120] = tA),
                (el[121] = eB),
                (el[122] = U))
              : (U = el[122]),
            el[123] !== eX || el[124] !== tN || el[125] !== tb || el[126] !== eH || el[127] !== ek || el[128] !== tA
              ? ((G =
                  tN && !tb && eH && null != ek
                    ? (0, l.jsx)("div", {
                        className: (0, n.A)("mx-auto flex min-h-15 w-full min-w-0 items-center", tA, eX),
                        children: ek,
                      })
                    : null),
                (el[123] = eX),
                (el[124] = tN),
                (el[125] = tb),
                (el[126] = eH),
                (el[127] = ek),
                (el[128] = tA),
                (el[129] = G))
              : (G = el[129]))
          let tV = ez && tN ? tP : null
          ;(el[130] !== eX ||
          el[131] !== tN ||
          el[132] !== to ||
          el[133] !== tv ||
          el[134] !== eg ||
          el[135] !== tn ||
          el[136] !== tu ||
          el[137] !== eD ||
          el[138] !== tp ||
          el[139] !== tg ||
          el[140] !== eV ||
          el[141] !== tc ||
          el[142] !== td ||
          el[143] !== eH ||
          el[144] !== t_ ||
          el[145] !== eI ||
          el[146] !== eT ||
          el[147] !== eP ||
          el[148] !== tk ||
          el[149] !== tA
            ? ((W =
                !to || tc || tN
                  ? null
                  : (0, l.jsx)(
                      c.P.div,
                      {
                        ref: tl,
                        "aria-hidden": td || void 0,
                        inert: td,
                        animate: { opacity: 1, transform: "translateY(0)" },
                        exit: { opacity: 0, transform: "translateY(-4px)" },
                        initial: { opacity: 0, transform: "translateY(-4px)" },
                        transition: tk,
                        children: (0, l.jsx)("div", {
                          className: (0, n.A)(
                            "mx-auto w-full",
                            tA,
                            tu.inset,
                            !tv && eV && "pb-8",
                            !tv && !eV && (tp || tg ? "pb-6" : "pb-4"),
                            eX,
                          ),
                          children: (0, l.jsxs)("div", {
                            className: (0, n.A)(
                              "flex justify-between",
                              "profile" === eD ? "gap-2 px-1" : "gap-4",
                              tp && "flex-wrap items-center",
                              tg && "items-center",
                              !tp && !tg && "items-start",
                              "hero" === eD && "justify-center text-center",
                              "inset" === eD ? "px-2" : null,
                            ),
                            children: [
                              (0, l.jsxs)("div", {
                                className: (0, n.A)(
                                  "flex min-w-0 flex-col",
                                  "inset" === eD || "hero" === eD ? "gap-2" : !eV && "gap-1",
                                ),
                                children: [
                                  (0, l.jsx)("h1", {
                                    ref: td ? void 0 : eP,
                                    className: (0, n.A)("text-default", t_, tu.title),
                                    children: eT,
                                  }),
                                  null == eI
                                    ? null
                                    : (0, l.jsx)("div", {
                                        className: (0, n.A)(
                                          "text-secondary",
                                          eV
                                            ? "text-[17px] leading-[22px] @lg/manager:text-[16px] @lg/manager:leading-6.5"
                                            : ["text-base", tg ? "leading-6.5" : "leading-6"],
                                          "profile" === eD && "tracking-[-0.32px] sm:truncate",
                                          eV && "tracking-[-0.4px]",
                                          eH && !tg && "browser:max-md:hidden",
                                        ),
                                        children: eI,
                                      }),
                                ],
                              }),
                              null == eg
                                ? null
                                : (0, l.jsx)("div", {
                                    ref: ts,
                                    className: (0, n.A)("min-w-0", tp ? "max-w-full" : "shrink-0"),
                                    style: td ? tn : void 0,
                                    children: td ? null : eg,
                                  }),
                            ],
                          }),
                        }),
                      },
                      "page-heading",
                    )),
              (el[130] = eX),
              (el[131] = tN),
              (el[132] = to),
              (el[133] = tv),
              (el[134] = eg),
              (el[135] = tn),
              (el[136] = tu),
              (el[137] = eD),
              (el[138] = tp),
              (el[139] = tg),
              (el[140] = eV),
              (el[141] = tc),
              (el[142] = td),
              (el[143] = eH),
              (el[144] = t_),
              (el[145] = eI),
              (el[146] = eT),
              (el[147] = eP),
              (el[148] = tk),
              (el[149] = tA),
              (el[150] = W))
            : (W = el[150]),
            el[151] !== W
              ? ((H = (0, l.jsx)(o.N, { initial: !1, mode: "popLayout", children: W })), (el[151] = W), (el[152] = H))
              : (H = el[152]),
            el[153] !== eX ||
            el[154] !== tw ||
            el[155] !== tN ||
            el[156] !== tv ||
            el[157] !== eq ||
            el[158] !== eD ||
            el[159] !== eJ ||
            el[160] !== e6 ||
            el[161] !== e8 ||
            el[162] !== tT ||
            el[163] !== eG ||
            el[164] !== eS ||
            el[165] !== ek ||
            el[166] !== tA
              ? ((K =
                  !tv || tN
                    ? null
                    : (0, l.jsx)("div", {
                        ref: e4,
                        className: tw ? void 0 : "contents",
                        style: tw ? { height: e8 } : void 0,
                        children: (0, l.jsx)("div", {
                          ref: e5,
                          className: (0, n.A)(!tw && "contents", tw && e6 && "absolute inset-x-0 bottom-0 z-30"),
                          children: (0, l.jsxs)(b.J1, {
                            className: "top-0",
                            showScrollFade: "always" === eq || eJ,
                            sticky: "sticky" === eG,
                            children: [
                              (0, l.jsxs)("div", {
                                className: (0, n.A)(
                                  "mx-auto flex w-full items-center gap-2 pb-2",
                                  tA,
                                  "hero" === eD && "pt-6",
                                  "catalog" === eD && "pt-4",
                                  "hero" !== eD && "catalog" !== eD && "pt-panel",
                                  eX,
                                ),
                                children: [tT, eS],
                              }),
                              null == ek
                                ? null
                                : (0, l.jsx)("div", {
                                    className: (0, n.A)("mx-auto w-full", tA, "hero" === eD && "pt-12", eX),
                                    children: ek,
                                  }),
                            ],
                          }),
                        }),
                      })),
                (el[153] = eX),
                (el[154] = tw),
                (el[155] = tN),
                (el[156] = tv),
                (el[157] = eq),
                (el[158] = eD),
                (el[159] = eJ),
                (el[160] = e6),
                (el[161] = e8),
                (el[162] = tT),
                (el[163] = eG),
                (el[164] = eS),
                (el[165] = ek),
                (el[166] = tA),
                (el[167] = K))
              : (K = el[167]),
            el[168] !== eX ||
            el[169] !== tN ||
            el[170] !== tv ||
            el[171] !== eq ||
            el[172] !== tp ||
            el[173] !== eJ ||
            el[174] !== eG ||
            el[175] !== ek ||
            el[176] !== tA
              ? ((V =
                  tv || null == ek || tN
                    ? null
                    : (0, l.jsx)(b.J1, {
                        className: "top-0",
                        showScrollFade: "always" === eq || eJ,
                        sticky: "sticky" === eG,
                        children: (0, l.jsx)("div", {
                          className: (0, n.A)("mx-auto w-full", !tp && "py-2", tA, eX),
                          children: ek,
                        }),
                      })),
                (el[168] = eX),
                (el[169] = tN),
                (el[170] = tv),
                (el[171] = eq),
                (el[172] = tp),
                (el[173] = eJ),
                (el[174] = eG),
                (el[175] = ek),
                (el[176] = tA),
                (el[177] = V))
              : (V = el[177]))
          let tQ = !!(void 0 === es || es) && "position",
            tX = eV && "pb-16",
            tZ = "profile" === eD && "pb-23",
            tJ = !tg && (eH && tp ? "pb-4" : "pb-panel"),
            t0 = eL && tp && !tN && "pt-3.5",
            t1 = eL && !tp && !tv && !tC && "pt-panel",
            t2 = eL && !tp && (tv || tC) && (tx ? "pt-3 md:pt-5" : "pt-5")
          ;(el[178] !== em ||
          el[179] !== eX ||
          el[180] !== tX ||
          el[181] !== tZ ||
          el[182] !== tJ ||
          el[183] !== t0 ||
          el[184] !== t1 ||
          el[185] !== t2 ||
          el[186] !== tA
            ? ((Q = (0, n.A)("mx-auto flex min-h-0 w-full flex-1 flex-col", tX, tZ, tJ, tA, t0, t1, t2, em, eX)),
              (el[178] = em),
              (el[179] = eX),
              (el[180] = tX),
              (el[181] = tZ),
              (el[182] = tJ),
              (el[183] = t0),
              (el[184] = t1),
              (el[185] = t2),
              (el[186] = tA),
              (el[187] = Q))
            : (Q = el[187]),
            el[188] !== tM || el[189] !== tc || el[190] !== eC || el[191] !== eN
              ? ((X = tM
                  ? (0, l.jsxs)(N, {
                      children: [
                        tc ? null : eC,
                        null == eN ? null : (0, l.jsx)("div", { className: "ms-auto", children: eN }),
                      ],
                    })
                  : null),
                (el[188] = tM),
                (el[189] = tc),
                (el[190] = eC),
                (el[191] = eN),
                (el[192] = X))
              : (X = el[192]))
          let t3 = tb ? null : ep
          return (
            el[193] !== ed || el[194] !== tQ || el[195] !== Q || el[196] !== X || el[197] !== t3 || el[198] !== tk
              ? ((Z = (0, l.jsxs)(c.P.div, {
                  ref: tt,
                  layout: tQ,
                  className: Q,
                  transition: tk,
                  children: [X, t3, ed],
                })),
                (el[193] = ed),
                (el[194] = tQ),
                (el[195] = Q),
                (el[196] = X),
                (el[197] = t3),
                (el[198] = tk),
                (el[199] = Z))
              : (Z = el[199]),
            el[200] !== F ||
            el[201] !== D ||
            el[202] !== tK ||
            el[203] !== Y ||
            el[204] !== U ||
            el[205] !== G ||
            el[206] !== tV ||
            el[207] !== H ||
            el[208] !== K ||
            el[209] !== V ||
            el[210] !== Z
              ? ((J = (0, l.jsxs)("div", { className: F, style: D, children: [tK, Y, U, G, tV, H, K, V, Z] })),
                (el[200] = F),
                (el[201] = D),
                (el[202] = tK),
                (el[203] = Y),
                (el[204] = U),
                (el[205] = G),
                (el[206] = tV),
                (el[207] = H),
                (el[208] = K),
                (el[209] = V),
                (el[210] = Z),
                (el[211] = J))
              : (J = el[211]),
            el[212] !== ta || el[213] !== tL || el[214] !== $ || el[215] !== tW || el[216] !== q || el[217] !== J
              ? ((ee = (0, l.jsx)("div", {
                  ref: ta,
                  "data-new-slate-layout": tL,
                  className: $,
                  "data-app-shell-inline-page-header": tW,
                  onScroll: q,
                  children: J,
                })),
                (el[212] = ta),
                (el[213] = tL),
                (el[214] = $),
                (el[215] = tW),
                (el[216] = q),
                (el[217] = J),
                (el[218] = ee))
              : (ee = el[218]),
            el[219] !== L || el[220] !== ee
              ? ((et = (0, l.jsx)("div", { className: L, children: ee })),
                (el[219] = L),
                (el[220] = ee),
                (el[221] = et))
              : (et = el[221]),
            el[222] !== w || el[223] !== z || el[224] !== et
              ? ((ea = (0, l.jsxs)(g.bn, { ...w, children: [z, et] })),
                (el[222] = w),
                (el[223] = z),
                (el[224] = et),
                (el[225] = ea))
              : (ea = el[225]),
            ea
          )
        },
        uC: N,
      },
    )
  },
  DiyT(e, t, a) {
    a.d(t, { J1: () => h, gX: () => p, Tz: () => f })
    var l = a("ABep"),
      s = a("QosV"),
      n = a("on57"),
      i = a("W5pg"),
      r = a("K4Cx"),
      o = a("zd8w"),
      c = a("I7bK"),
      d = a("HgLj"),
      m = "title-x3JvHx",
      u = "titleContent-nEpGod",
      x = "toolbar-wpnXAF"
    function p(e) {
      let t,
        a,
        i,
        r,
        c,
        p,
        f,
        h,
        v,
        b,
        y,
        j,
        C = (0, s.c)(35),
        {
          ref: N,
          className: w,
          horizontalPaddingClassName: _,
          collapseOnScroll: A,
          presentation: M,
          expandSearchWhenWrapped: S,
          showDivider: k,
          sticky: I,
          wrapActionsAtNarrowWidth: T,
          title: P,
          actions: E,
          navigation: O,
        } = e,
        B = void 0 === _ ? "px-panel" : _,
        R = void 0 !== A && A,
        z = (0, o.useRef)(null)
      C[0] !== N ? ((t = (0, d.P)(z, N)), (C[0] = N), (C[1] = t)) : (t = C[1])
      let L = t,
        $ = (0, o.useRef)(null)
      ;(C[2] !== R
        ? ((a = () => {
            let e = z.current,
              t = $.current
            if (!e || !t) return
            let a = new ResizeObserver(() => {
                let a = t.offsetLeft + parseFloat(getComputedStyle(t).paddingInlineStart)
                e.style.setProperty("--header-content-start", `${a}px`)
                let l = t.querySelector(`.${x}`)
                if (!R || null == l) return void e.removeAttribute("data-collapsible")
                let s = t.querySelector(`.${u}`)
                if (null == s) return
                let n = s.parentElement
                ;(e.style.setProperty(
                  "--header-collapse-offset",
                  `${(n?.offsetHeight ?? 0) + parseFloat(getComputedStyle(e).paddingTop)}px`,
                ),
                  e.toggleAttribute("data-collapsible", !0))
              }),
              l = () => {
                for (let l of (a.disconnect(), [e, t, ...t.querySelectorAll(`.${m}`)])) a.observe(l)
              },
              s = new MutationObserver(l)
            return (
              s.observe(t, { childList: !0, characterData: !0, subtree: !0 }),
              l(),
              () => {
                ;(a.disconnect(), s.disconnect())
              }
            )
          }),
          (i = [R]),
          (C[2] = R),
          (C[3] = a),
          (C[4] = i))
        : ((a = C[3]), (i = C[4])),
        (0, o.useLayoutEffect)(a, i))
      let q = R || void 0,
        F = (void 0 !== S && S) || void 0,
        D = k || void 0,
        Y = void 0 === I || I || void 0,
        U = T || void 0,
        G = "directory" === (void 0 === M ? "default" : M) && "directoryShell-WYPHEM",
        W = k ? "border-subtle" : "border-transparent"
      ;(C[5] !== G || C[6] !== W
        ? ((r = (0, n.A)(
            "shell-yWQKe6",
            "not-in-data-settings-panel:[--spacing-token-button-composer:--spacing(8)] browser:not-in-data-settings-panel:[--spacing-token-button-composer:--spacing(9)]",
            G,
            W,
          )),
          (C[5] = G),
          (C[6] = W),
          (C[7] = r))
        : (r = C[7]),
        C[8] !== F || C[9] !== D || C[10] !== Y || C[11] !== U || C[12] !== r || C[13] !== q
          ? ((c = {
              "data-scroll-collapse": q,
              "data-expand-search": F,
              "data-scrolled": D,
              "data-sticky": Y,
              "data-wrap-actions": U,
              className: r,
            }),
            (C[8] = F),
            (C[9] = D),
            (C[10] = Y),
            (C[11] = U),
            (C[12] = r),
            (C[13] = q),
            (C[14] = c))
          : (c = C[14]))
      let H = c
      ;(C[15] !== w || C[16] !== B
        ? ((p = (0, n.A)("content-ymUHGU", "mx-auto w-full", B, w)), (C[15] = w), (C[16] = B), (C[17] = p))
        : (p = C[17]),
        C[18] !== P
          ? ((f =
              null == P
                ? null
                : (0, l.jsx)("div", { className: m, children: (0, l.jsx)("div", { className: u, children: P }) })),
            (C[18] = P),
            (C[19] = f))
          : (f = C[19]),
        C[20] !== E
          ? ((h = (0, l.jsx)("div", { className: "actions-hHaS5d", children: E })), (C[20] = E), (C[21] = h))
          : (h = C[21]),
        C[22] !== f || C[23] !== h
          ? ((v = (0, l.jsxs)("div", { className: "headerRow-4OaZM9", children: [f, h] })),
            (C[22] = f),
            (C[23] = h),
            (C[24] = v))
          : (v = C[24]),
        C[25] !== O
          ? ((b = (0, l.jsx)("div", { className: "navigation-AqGYXP", children: O })), (C[25] = O), (C[26] = b))
          : (b = C[26]),
        C[27] !== p || C[28] !== v || C[29] !== b
          ? ((y = (0, l.jsxs)("div", { ref: $, className: p, children: [v, b] })),
            (C[27] = p),
            (C[28] = v),
            (C[29] = b),
            (C[30] = y))
          : (y = C[30]))
      let K = y
      return (
        C[31] !== K || C[32] !== H || C[33] !== L
          ? ((j = (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(l.Fragment, { children: (0, l.jsx)(g, { ref: L, ...H, children: K }) }), null],
            })),
            (C[31] = K),
            (C[32] = H),
            (C[33] = L),
            (C[34] = j))
          : (j = C[34]),
        j
      )
    }
    function g(e) {
      let t,
        a,
        n,
        d = (0, s.c)(8),
        m = (0, o.useContext)(c.f$)
      d[0] !== m?.titleBarLeftInset || d[1] !== m?.titleBarLeftInset.get
        ? ((t = () => `${m?.titleBarLeftInset.get() ?? 0}px`),
          (d[0] = m?.titleBarLeftInset),
          (d[1] = m?.titleBarLeftInset.get),
          (d[2] = t))
        : (t = d[2])
      let u = (0, i.G)(t)
      d[3] !== u ? ((a = { "--app-shell-titlebar-left-inset": u }), (d[3] = u), (d[4] = a)) : (a = d[4])
      let x = a
      return (
        d[5] !== e || d[6] !== x
          ? ((n = (0, l.jsx)(r.P.div, { ...e, style: x })), (d[5] = e), (d[6] = x), (d[7] = n))
          : (n = d[7]),
        n
      )
    }
    function f(e) {
      let t,
        a,
        n,
        i,
        r,
        o = (0, s.c)(14),
        { filterTags: c, controls: d, search: m, actions: u, fixedSearchWidth: p } = e
      return (
        o[0] !== c
          ? ((t = (0, l.jsx)("div", {
              className: "filterTags-NLxoNh",
              children: (0, l.jsx)("div", { className: "filterTagsContent-VSk9tY", children: c }),
            })),
            (o[0] = c),
            (o[1] = t))
          : (t = o[1]),
        o[2] !== d
          ? ((a = (0, l.jsx)("div", { className: "viewControls-ty6WO3", children: d })), (o[2] = d), (o[3] = a))
          : (a = o[3]),
        o[4] !== p || o[5] !== m
          ? ((n =
              null != m &&
              (0, l.jsx)("div", { className: "search-gLCdCn", "data-fixed-width": p || void 0, children: m })),
            (o[4] = p),
            (o[5] = m),
            (o[6] = n))
          : (n = o[6]),
        o[7] !== u
          ? ((i = (0, l.jsx)("div", { className: "pageActions-Q2Fd0B", children: u })), (o[7] = u), (o[8] = i))
          : (i = o[8]),
        o[9] !== t || o[10] !== a || o[11] !== n || o[12] !== i
          ? ((r = (0, l.jsxs)("div", { className: x, children: [t, a, n, i] })),
            (o[9] = t),
            (o[10] = a),
            (o[11] = n),
            (o[12] = i),
            (o[13] = r))
          : (r = o[13]),
        r
      )
    }
    function h(e) {
      let t,
        a,
        i = (0, s.c)(8),
        { children: r, className: o, fadeSize: c, showScrollFade: d, sticky: m } = e,
        u = void 0 === m || m,
        x =
          u &&
          "sticky z-30 after:pointer-events-none after:absolute after:top-full after:right-0 after:left-0 after:bg-linear-to-b after:from-surface after:to-transparent after:content-['']",
        p = u && ("compact" === (void 0 === c ? "default" : c) ? "after:h-2" : "after:h-8"),
        g = u && !(void 0 === d || d) && "after:hidden"
      return (
        i[0] !== o || i[1] !== x || i[2] !== p || i[3] !== g
          ? ((t = (0, n.A)("bg-surface", x, p, g, o)), (i[0] = o), (i[1] = x), (i[2] = p), (i[3] = g), (i[4] = t))
          : (t = i[4]),
        i[5] !== r || i[6] !== t
          ? ((a = (0, l.jsx)("div", { className: t, children: r })), (i[5] = r), (i[6] = t), (i[7] = a))
          : (a = i[7]),
        a
      )
    }
  },
  BrP7(e, t, a) {
    a.d(t, { t: () => C })
    var l = a("ABep"),
      s = a("QosV"),
      n = a("i1uX"),
      i = a("on57"),
      r = a("IjbW"),
      o = a("K4Cx"),
      c = a("zd8w"),
      d = a("UxN3"),
      m = a("SziE"),
      u = a("hZax"),
      x = a("Sm6l")
    let p = {
      medium: { icon: "size-9", caption: "w-9" },
      large: { icon: "size-10", caption: "w-10" },
      xl: { icon: "size-12", caption: "w-12" },
    }
    function g(e) {
      let t,
        a,
        n,
        r,
        o,
        c,
        d,
        m,
        u,
        g,
        f,
        h,
        v = (0, s.c)(26)
      v[0] !== e
        ? (({ children: t, icon: a, size: r, surface: o, labelVisibility: c, ...n } = e),
          (v[0] = e),
          (v[1] = t),
          (v[2] = a),
          (v[3] = n),
          (v[4] = r),
          (v[5] = o),
          (v[6] = c))
        : ((t = v[1]), (a = v[2]), (n = v[3]), (r = v[4]), (o = v[5]), (c = v[6]))
      let b = void 0 === o ? "elevated" : o,
        y = void 0 === c ? "visible" : c,
        j = "large" === r && "visible" === y && "pb-1.5"
      v[7] !== j ? ((d = (0, i.A)("group/labeled-icon flex-col gap-1.5", j)), (v[7] = j), (v[8] = d)) : (d = v[8])
      let C = "elevated" === b ? "border shadow-xs" : "border-hairline",
        N = p[r]
      ;(v[9] !== C || v[10] !== N.icon
        ? ((m = (0, i.A)(
            "flex items-center justify-center rounded-full border-default bg-surface text-default group-not-aria-selected/labeled-icon:group-not-disabled/labeled-icon:group-not-aria-disabled/labeled-icon:group-hover/labeled-icon:bg-secondary-ghost-hover group-focus-visible/labeled-icon:ring-2 group-focus-visible/labeled-icon:ring-ring group-aria-selected/labeled-icon:border-transparent group-aria-selected/labeled-icon:bg-accent-solid group-aria-selected/labeled-icon:text-accent-solid",
            C,
            N.icon,
          )),
          (v[9] = C),
          (v[10] = N.icon),
          (v[11] = m))
        : (m = v[11]),
        v[12] !== a || v[13] !== m
          ? ((u = (0, l.jsx)("span", { className: m, children: a })), (v[12] = a), (v[13] = m), (v[14] = u))
          : (u = v[14]))
      let w = "hidden" === y ? "sr-only" : "text-center text-sm leading-4 whitespace-normal",
        _ = "visible" === y && p[r].caption
      return (
        v[15] !== _ || v[16] !== w ? ((g = (0, i.A)(w, _)), (v[15] = _), (v[16] = w), (v[17] = g)) : (g = v[17]),
        v[18] !== t || v[19] !== g
          ? ((f = (0, l.jsx)("span", { className: g, children: t })), (v[18] = t), (v[19] = g), (v[20] = f))
          : (f = v[20]),
        v[21] !== n || v[22] !== f || v[23] !== d || v[24] !== u
          ? ((h = (0, l.jsxs)(x.$, {
              ...n,
              className: d,
              color: "ghostTertiary",
              size: "inline",
              focusRing: "none",
              children: [u, f],
            })),
            (v[21] = n),
            (v[22] = f),
            (v[23] = d),
            (v[24] = u),
            (v[25] = h))
          : (h = v[25]),
        h
      )
    }
    let f = "flex min-w-0 gap-1.5 rounded-md py-1 font-medium",
      h = {
        closeButtonClassName: "flex h-7 w-5 items-center justify-center",
        itemClassName: "shrink-0",
        listClassName: "flex min-w-0 items-center gap-0.5",
        segmentedEdges: !1,
        selectedClassName: "bg-surface-secondary text-default",
        selectionIndicator: null,
        tabButtonClassName: `${f} px-2`,
        unselectedTextClassName: "text-secondary",
        unselectedClassName: "hover:bg-surface-secondary",
      },
      v = "flex min-w-0 gap-1.5 rounded-full ring-inset",
      b = {
        ...h,
        listClassName: "-ms-3 flex min-w-0 items-center gap-1",
        selectedClassName: "bg-text/5 text-default",
        tabButtonClassName: `${v} min-h-9 px-3 leading-5 font-normal`,
        unselectedClassName: "hover:bg-secondary-ghost-hover",
      },
      y = {
        ...h,
        listClassName: "flex min-w-0 items-center",
        selectedClassName: "bg-secondary-ghost-hover text-default font-medium",
        tabButtonClassName: "flex min-w-0 rounded-full px-4 py-2.25 leading-5 ring-inset",
        unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default",
      },
      j = {
        text: {
          ...h,
          listClassName: "flex min-w-0 items-center justify-center gap-5",
          tabButtonClassName: "flex min-h-9 min-w-0 items-center font-medium",
          selectedClassName: "text-default font-semibold",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:text-default",
        },
        segmented: {
          closeButtonClassName: "px-1",
          itemClassName: "flex-1",
          listClassName: "border-default flex items-center rounded-lg border",
          segmentedEdges: !0,
          selectedClassName: "bg-text-emphasis/25 text-default",
          selectionIndicator: null,
          tabButtonClassName: "relative flex-1 rounded-none px-4 py-1.5 font-medium",
          unselectedTextClassName: "text-secondary",
          unselectedClassName: "hover:bg-text-emphasis/5",
        },
        toolbar: h,
        settings: { ...h, tabButtonClassName: `${f} button-toolbar` },
        search: {
          ...h,
          textSizeClassName: "text-base",
          listClassName: "flex min-w-0 items-center gap-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
          tabButtonClassName:
            "flex h-8 min-w-0 gap-1.5 rounded-[calc(var(--radius-2xl)-var(--spacing)-1px)] px-3 font-medium",
        },
        inset: {
          ...h,
          listClassName:
            "inline-flex min-w-0 max-w-full items-center gap-0.5 rounded-[10px] bg-surface-secondary/92 p-0.5",
        },
        page: {
          ...h,
          listClassName: "-ms-2 flex min-w-0 items-center gap-2",
          tabButtonClassName: `${h.tabButtonClassName} ring-inset`,
        },
        pill: {
          ...h,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-text/5 text-default ring-1 ring-border-strong",
          tabButtonClassName:
            "flex min-w-0 gap-1.5 rounded-full border border-transparent px-4 py-2 font-medium ring-inset",
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        choice: { ...h, listClassName: "flex min-w-0 flex-wrap items-center gap-2" },
        filter: b,
        sectionFilter: {
          ...b,
          listClassName: "flex max-w-full min-w-0 flex-wrap items-center gap-2",
          tabButtonClassName: `${v} min-h-9 px-4 py-2 font-medium @lg:min-h-9.5 @lg:py-2.25`,
          textSizeClassName: "text-[0.9375rem]/5 @lg:text-[0.875rem]/5",
        },
        compactFilter: {
          ...b,
          listClassName: "flex min-w-0 items-center gap-1",
          tabButtonClassName: `${v} min-h-8 px-3 py-1.5 font-medium`,
          textSizeClassName: "text-[0.875rem]/5",
        },
        editor: {
          ...h,
          listClassName: "-ms-3 flex min-w-0 items-center gap-1 md:ms-0 md:gap-0",
          selectedClassName: "bg-text/5 text-default",
          tabButtonClassName:
            "flex min-h-9 min-w-0 gap-1.5 rounded-full px-3 leading-5 font-normal ring-inset md:min-h-9.5 md:px-4",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        browse: {
          ...h,
          listClassName: "flex min-w-0 items-center gap-1",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 font-medium ring-inset",
          unselectedClassName: "hover:bg-background-secondary-ghost-hover/50 hover:text-default",
        },
        directory: {
          ...h,
          listClassName: "flex min-w-0 max-w-full items-center gap-0 p-px",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 min-w-0 rounded-full border border-transparent px-4 py-0 text-sm leading-5 font-medium ring-inset",
          unselectedClassName: "hover:bg-secondary-ghost-hover",
        },
        segmentedPill: y,
        segmentedPillMuted: {
          ...y,
          unselectedTextClassName: "text-tertiary",
          unselectedClassName: "font-normal hover:bg-secondary-ghost-hover hover:text-default dark:text-text/50",
        },
        profile: {
          ...h,
          itemClassName: "flex-1",
          listClassName: "flex min-w-0 items-center",
          selectedClassName: "bg-secondary-ghost-hover text-default",
          tabButtonClassName:
            "flex h-9 w-full min-w-0 justify-center rounded-full border border-transparent px-3 py-0 font-medium",
          unselectedClassName: "hover:text-default",
        },
        icon: { ...h, listClassName: "flex max-w-full min-w-0 flex-wrap items-start justify-center gap-x-8 gap-y-2" },
        underline: {
          closeButtonClassName: "px-1",
          itemClassName: "shrink-0 pb-2",
          listClassName: "border-default flex min-w-0 items-start gap-8 border-b",
          segmentedEdges: !1,
          selectedClassName: "text-default",
          selectionIndicator: "underline",
          tabButtonClassName: "flex min-w-0 gap-1.5 font-medium",
          unselectedTextClassName: "text-secondary",
          unselectedClassName: "hover:text-default",
        },
      }
    function C(e) {
      let t,
        a = (0, s.c)(39),
        {
          tabs: r,
          selectedKey: o,
          onSelect: p,
          onTabClick: f,
          onTabHover: h,
          className: v,
          fill: b,
          scrollable: y,
          tabListRef: C,
          variant: _,
          ariaLabel: A,
          ariaLabelledBy: M,
          activationMode: S,
          animateSelection: k,
          dividerBefore: I,
        } = e,
        T = void 0 !== b && b,
        P = void 0 !== y && y,
        E = void 0 === _ ? "segmented" : _,
        O = void 0 === S ? "automatic" : S,
        B = (0, c.useId)(),
        R = j[E],
        z = "inset" === E || "choice" === E,
        L = (0, u.Zj)(!z && "icon" !== E && "text-secondary" === R.unselectedTextClassName && "1244723012"),
        $ = void 0 !== k && k && ("segmentedPill" === E || "segmentedPillMuted" === E),
        q = $ ? "text-default font-medium" : R.selectedClassName
      if (
        a[0] !== O ||
        a[1] !== $ ||
        a[2] !== A ||
        a[3] !== M ||
        a[4] !== v ||
        a[5] !== I ||
        a[6] !== T ||
        a[7] !== p ||
        a[8] !== f ||
        a[9] !== h ||
        a[10] !== R.closeButtonClassName ||
        a[11] !== R.itemClassName ||
        a[12] !== R.listClassName ||
        a[13] !== R.segmentedEdges ||
        a[14] !== R.selectionIndicator ||
        a[15] !== R.tabButtonClassName ||
        a[16] !== R.textSizeClassName ||
        a[17] !== R.unselectedClassName ||
        a[18] !== R.unselectedTextClassName ||
        a[19] !== P ||
        a[20] !== q ||
        a[21] !== o ||
        a[22] !== B ||
        a[23] !== C ||
        a[24] !== r ||
        a[25] !== L ||
        a[26] !== z ||
        a[27] !== E
      ) {
        let e,
          s,
          c = (0, i.A)(L ? "text-tertiary" : R.unselectedTextClassName, R.unselectedClassName),
          u = z ? x.$ : "button",
          b = T && "w-full",
          y = P && "hide-scrollbar overflow-x-auto overflow-y-hidden"
        ;(a[29] !== v || a[30] !== R.listClassName || a[31] !== b || a[32] !== y
          ? ((e = (0, i.A)(R.listClassName, b, y, v)),
            (a[29] = v),
            (a[30] = R.listClassName),
            (a[31] = b),
            (a[32] = y),
            (a[33] = e))
          : (e = a[33]),
          a[34] !== O || a[35] !== p || a[36] !== P || a[37] !== r
            ? ((s = (e) => {
                let t
                if (
                  e.altKey ||
                  e.ctrlKey ||
                  e.metaKey ||
                  e.shiftKey ||
                  !["ArrowLeft", "ArrowRight", "Home", "End"].includes(e.key)
                )
                  return
                let a = Array.from(e.currentTarget.querySelectorAll('[role="tab"]')),
                  l = a.findIndex((t) => t === e.target)
                if (l < 0 || 0 === a.length) return
                ;(e.preventDefault(), e.stopPropagation())
                let s = "rtl" === getComputedStyle(e.currentTarget).direction
                ;((t =
                  "Home" === e.key
                    ? 0
                    : "End" === e.key
                      ? a.length - 1
                      : (l + (e.key === (s ? "ArrowLeft" : "ArrowRight") ? 1 : -1) + a.length) % a.length),
                  a[t]?.focus(),
                  P && a[t]?.scrollIntoView({ block: "nearest", inline: "nearest" }))
                let n = r[t]
                null != n && "automatic" === O && p(n.key, e.timeStamp)
              }),
              (a[34] = O),
              (a[35] = p),
              (a[36] = P),
              (a[37] = r),
              (a[38] = s))
            : (s = a[38]),
          (t = (0, l.jsx)("div", {
            ref: C,
            role: "tablist",
            tabIndex: -1,
            "aria-label": A,
            "aria-labelledby": M,
            className: e,
            onWheel: P ? N : void 0,
            onKeyDown: s,
            children: r.map((e, t) => {
              let a,
                s,
                x = e.key === o,
                v = x ? q : c,
                b = 0 === t,
                y = t === r.length - 1,
                j = {
                  id: null == e.panelId ? void 0 : `${e.panelId}-tab`,
                  type: "button",
                  role: "tab",
                  "aria-controls": e.panelId,
                  "aria-label": e.ariaLabel,
                  "aria-selected": x,
                  tabIndex: x ? 0 : -1,
                  onPointerEnter: null == h ? void 0 : () => h(e.key),
                  onClick: (t) => {
                    ;((x && "manual" !== O) || p(e.key, t.timeStamp), f?.(e.key))
                  },
                }
              return (
                "inset" === E
                  ? ((a = x ? "segmentedInsetSelected" : "ghost"), (s = "compact"))
                  : "choice" === E && ((a = x ? "choiceSelected" : "outlineGhost"), (s = "dialogAction")),
                (0, l.jsxs)(
                  "div",
                  {
                    className: (0, i.A)(
                      "relative flex min-w-0 items-center",
                      R.itemClassName,
                      T && "flex-1",
                      null != e.onClose && "group/tab",
                    ),
                    children: [
                      b || e.key !== I
                        ? null
                        : (0, l.jsx)("span", { "aria-hidden": !0, className: "mx-2 h-4 w-px shrink-0 bg-border" }),
                      "icon" === E
                        ? (0, l.jsx)(g, { ...j, icon: e.icon, size: "large", children: e.name })
                        : (0, l.jsxs)(u, {
                            ...j,
                            className: (0, i.A)(
                              T && "min-w-0 flex-1 justify-center",
                              $ && "relative isolate",
                              !z && [
                                "cursor-interaction items-center select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-0",
                                R.textSizeClassName ?? "text-sm",
                                R.tabButtonClassName,
                                P && "ring-inset",
                                R.segmentedEdges && b && "rounded-l-md",
                                R.segmentedEdges && y && "rounded-r-md",
                                "browse" === E && e.highlighted
                                  ? ["bg-yellow/15 text-yellow light:text-default", x && "ring-1 ring-border-strong"]
                                  : v,
                              ],
                            ),
                            color: a,
                            radius: "choice" === E ? "full" : void 0,
                            size: s,
                            children: [
                              $ && x ? (0, l.jsx)(w, { layoutId: B }) : null,
                              null != e.icon
                                ? (0, l.jsx)("span", {
                                    "aria-hidden": "true",
                                    className: "icon-xs flex shrink-0 items-center justify-center",
                                    children: e.icon,
                                  })
                                : null,
                              T ? (0, l.jsx)("span", { className: "truncate", children: e.name }) : e.name,
                            ],
                          }),
                      "underline" === R.selectionIndicator && x
                        ? (0, l.jsx)("div", { className: "absolute inset-x-0 bottom-[-1px] h-px bg-neutral-solid" })
                        : null,
                      null != e.onClose
                        ? (0, l.jsx)("button", {
                            type: "button",
                            "aria-label": e.closeLabel,
                            className: (0, i.A)(
                              "cursor-interaction text-tertiary hover:text-default",
                              R.closeButtonClassName,
                            ),
                            onClick: e.onClose,
                            children: (0, l.jsx)(d.bF, {
                              "aria-hidden": !1,
                              asset16: n.Q,
                              legacyIcon: m.A,
                              legacyClassName: "icon-2xs",
                            }),
                          })
                        : null,
                      R.segmentedEdges && !y
                        ? (0, l.jsx)("div", { className: "h-full w-px self-stretch bg-border" })
                        : null,
                    ],
                  },
                  e.key,
                )
              )
            }),
          })),
          (a[0] = O),
          (a[1] = $),
          (a[2] = A),
          (a[3] = M),
          (a[4] = v),
          (a[5] = I),
          (a[6] = T),
          (a[7] = p),
          (a[8] = f),
          (a[9] = h),
          (a[10] = R.closeButtonClassName),
          (a[11] = R.itemClassName),
          (a[12] = R.listClassName),
          (a[13] = R.segmentedEdges),
          (a[14] = R.selectionIndicator),
          (a[15] = R.tabButtonClassName),
          (a[16] = R.textSizeClassName),
          (a[17] = R.unselectedClassName),
          (a[18] = R.unselectedTextClassName),
          (a[19] = P),
          (a[20] = q),
          (a[21] = o),
          (a[22] = B),
          (a[23] = C),
          (a[24] = r),
          (a[25] = L),
          (a[26] = z),
          (a[27] = E),
          (a[28] = t))
      } else t = a[28]
      return t
    }
    function N(e) {
      let t = e.deltaX || e.deltaY
      0 !== t && (e.currentTarget.scrollLeft = e.currentTarget.scrollLeft + t)
    }
    function w(e) {
      let t,
        a,
        n = (0, s.c)(5),
        { layoutId: i } = e,
        c = 0.25 * !(0, r.I)()
      return (
        n[0] !== c ? ((t = { type: "spring", duration: c, bounce: 0 }), (n[0] = c), (n[1] = t)) : (t = n[1]),
        n[2] !== i || n[3] !== t
          ? ((a = (0, l.jsx)(o.P.span, {
              "aria-hidden": !0,
              layoutId: i,
              initial: !1,
              className: "absolute inset-0 -z-10 rounded-full bg-secondary-ghost-hover",
              transition: t,
            })),
            (n[2] = i),
            (n[3] = t),
            (n[4] = a))
          : (a = n[4]),
        a
      )
    }
  },
  w0km(e, t, a) {
    a.d(t, { CmePage: () => G })
    var l = a("ABep"),
      s = a("QosV"),
      n = a("qmMi"),
      i = a("zd8w"),
      r = a("Wf1j"),
      o = a("oyxz"),
      c = a("Qgfj"),
      d = a("Ywss"),
      m = a("MM0V"),
      u = a("Sm6l"),
      x = a("Sezd"),
      p = a("bVeK"),
      g = a("PkPj"),
      f = a("RNul"),
      h = a("BrP7"),
      v = a("mUDD"),
      b = a("SGsN"),
      y = a("OWtl"),
      j = a("v3GR")
    function C(e) {
      let t,
        a,
        c,
        d,
        m,
        x,
        p,
        g,
        h,
        C,
        _,
        A = (0, s.c)(42),
        { identity: M, approvedYear: S } = e,
        k = (0, n.gh)(y.u),
        I = (0, r.A)(),
        [T, P] = (0, i.useState)(null),
        {
          data: E,
          isLoading: O,
          isFetching: B,
          isError: R,
          refetch: z,
          hasNextPage: L,
          isFetchingNextPage: $,
          fetchNextPage: q,
        } = (0, n._U)(j.CP, M),
        F = O || (B && !$)
      if (
        A[0] !== S ||
        A[1] !== E ||
        A[2] !== T ||
        A[3] !== M ||
        A[4] !== I ||
        A[5] !== F ||
        A[6] !== R ||
        A[7] !== k
      ) {
        let e,
          s,
          n = new Set([...(E?.pages.flatMap(w) ?? []), ...(null == S ? [] : [S])])
        A[14] !== T || A[15] !== M || A[16] !== k
          ? ((e = async function (e) {
              if (null == T)
                return (
                  P(e),
                  (0, j.mL)(k, M, e)
                    .catch(() => {
                      let e = k.get(j.OX)
                      e?.accountId === M.accountId &&
                        e.userId === M.userId &&
                        k
                          .get(b.Id)
                          .danger(
                            (0, l.jsx)(o.A, {
                              id: "codex.cme.approved.credits.downloadFailedPleaseTryAgain",
                              defaultMessage: "Download failed. Please try again.",
                            }),
                            { errorAnalytics: { toastId: "codex.cme.approved.credits.downloadFailedPleaseTryAgain" } },
                          )
                    })
                    .finally(() => P(null))
                )
            }),
            (A[14] = T),
            (A[15] = M),
            (A[16] = k),
            (A[17] = e))
          : (e = A[17])
        let i = e
        ;(A[18] === Symbol.for("react.memo_cache_sentinel")
          ? ((s = (0, l.jsx)("h3", {
              className: "font-semibold",
              children: (0, l.jsx)(o.A, {
                id: "codex.cme.approved.credits.approvedCredits",
                defaultMessage: "Approved credits",
              }),
            })),
            (A[18] = s))
          : (s = A[18]),
          A[19] === Symbol.for("react.memo_cache_sentinel")
            ? ((x = (0, l.jsxs)(v.OO, {
                children: [
                  s,
                  (0, l.jsx)("p", {
                    className: "text-sm text-codex-description",
                    children: (0, l.jsx)(o.A, {
                      id: "codex.cme.approved.credits.downloadYourCmeTranscriptByCalendarYear",
                      defaultMessage: "Download your CME transcript by calendar year",
                    }),
                  }),
                ],
              })),
              (A[19] = x))
            : (x = A[19]),
          (t = v.OO),
          (a = "divide-default divide-y overflow-hidden rounded-lg border border-default"),
          A[20] !== F
            ? ((c = F
                ? (0, l.jsxs)("div", {
                    className: "flex items-center justify-center py-10 text-sm text-codex-description",
                    role: "status",
                    children: [
                      (0, l.jsx)(f.y, { className: "size-5" }),
                      (0, l.jsx)("span", {
                        className: "sr-only",
                        children: (0, l.jsx)(o.A, {
                          id: "codex.cme.approved.credits.loadingApprovedCredits",
                          defaultMessage: "Loading approved credits\u2026",
                        }),
                      }),
                    ],
                  })
                : null),
              (A[20] = F),
              (A[21] = c))
            : (c = A[21]),
          (d =
            F || null == E || 0 !== n.size || R
              ? null
              : (0, l.jsx)("p", {
                  className: "py-10 text-center text-sm text-codex-description",
                  children: (0, l.jsx)(o.A, {
                    id: "codex.cme.approved.credits.noApprovedCreditsYet",
                    defaultMessage: "No approved credits yet",
                  }),
                })),
          (m =
            !F &&
            [...n]
              .sort(N)
              .map((e) =>
                (0, l.jsxs)(
                  "div",
                  {
                    className: "flex items-center justify-between gap-3 px-4 py-3",
                    children: [
                      (0, l.jsx)("span", { className: "font-medium", children: e }),
                      (0, l.jsx)(u.$, {
                        color: "secondary",
                        loading: T === e,
                        disabled: null != T,
                        onClick: () => void i(e),
                        "aria-label": I.formatMessage(
                          {
                            id: "codex.cme.approved.credits.downloadYearTranscript",
                            defaultMessage: "Download {year} transcript",
                          },
                          { year: e },
                        ),
                        children: (0, l.jsx)(o.A, {
                          id: "codex.cme.approved.credits.download",
                          defaultMessage: "Download",
                        }),
                      }),
                    ],
                  },
                  e,
                ),
              )),
          (A[0] = S),
          (A[1] = E),
          (A[2] = T),
          (A[3] = M),
          (A[4] = I),
          (A[5] = F),
          (A[6] = R),
          (A[7] = k),
          (A[8] = t),
          (A[9] = a),
          (A[10] = c),
          (A[11] = d),
          (A[12] = m),
          (A[13] = x))
      } else ((t = A[8]), (a = A[9]), (c = A[10]), (d = A[11]), (m = A[12]), (x = A[13]))
      return (
        A[22] !== a || A[23] !== c || A[24] !== d || A[25] !== m
          ? ((p = (0, l.jsxs)("div", { className: a, children: [c, d, m] })),
            (A[22] = a),
            (A[23] = c),
            (A[24] = d),
            (A[25] = m),
            (A[26] = p))
          : (p = A[26]),
        A[27] !== t || A[28] !== p
          ? ((g = (0, l.jsx)(t, { children: p })), (A[27] = t), (A[28] = p), (A[29] = g))
          : (g = A[29]),
        A[30] !== R || A[31] !== z
          ? ((h = R
              ? (0, l.jsxs)(v.OO, {
                  children: [
                    (0, l.jsx)("p", {
                      role: "alert",
                      children: (0, l.jsx)(o.A, {
                        id: "codex.cme.approved.credits.unableToLoadApprovedCredits",
                        defaultMessage: "Unable to load approved credits",
                      }),
                    }),
                    (0, l.jsx)(u.$, {
                      color: "secondary",
                      onClick: () => void z(),
                      children: (0, l.jsx)(o.A, {
                        id: "codex.cme.approved.credits.tryAgain",
                        defaultMessage: "Try again",
                      }),
                    }),
                  ],
                })
              : null),
            (A[30] = R),
            (A[31] = z),
            (A[32] = h))
          : (h = A[32]),
        A[33] !== q || A[34] !== L || A[35] !== $
          ? ((C = L
              ? (0, l.jsx)(v.OO, {
                  children: (0, l.jsx)(u.$, {
                    color: "secondary",
                    loading: $,
                    onClick: () => void q(),
                    children: (0, l.jsx)(o.A, {
                      id: "codex.cme.approved.credits.loadMore",
                      defaultMessage: "Load more",
                    }),
                  }),
                })
              : null),
            (A[33] = q),
            (A[34] = L),
            (A[35] = $),
            (A[36] = C))
          : (C = A[36]),
        A[37] !== x || A[38] !== g || A[39] !== h || A[40] !== C
          ? ((_ = (0, l.jsxs)(l.Fragment, { children: [x, g, h, C] })),
            (A[37] = x),
            (A[38] = g),
            (A[39] = h),
            (A[40] = C),
            (A[41] = _))
          : (_ = A[41]),
        _
      )
    }
    function N(e, t) {
      return t - e
    }
    function w(e) {
      return e.claims.map(_)
    }
    function _(e) {
      return e.calendar_year
    }
    var A = a("VcaB"),
      M = a("D015"),
      S = a("slpy"),
      k = a("Y9i8"),
      I = a("JNtf"),
      T = a("yGJW"),
      P = a("on57"),
      E = a("ZtSy"),
      O = a("aQvR")
    function B(e) {
      let t,
        a,
        n,
        c,
        d,
        m,
        g,
        f,
        h,
        v,
        b,
        y,
        j,
        C,
        N,
        w,
        _,
        A = (0, s.c)(47),
        { conversation: M, selected: S, onToggle: k, onRemove: I, disabled: T } = e,
        B = (0, r.A)(),
        [R, z] = (0, i.useState)(!1)
      A[0] !== M.conversation_id || A[1] !== M.prompt_text
        ? ((t = M.prompt_text?.trim() || M.conversation_id),
          (A[0] = M.conversation_id),
          (A[1] = M.prompt_text),
          (A[2] = t))
        : (t = A[2])
      let L = t
      ;(A[3] !== B || A[4] !== L
        ? ((a = B.formatMessage(
            { id: "codex.cme.conversation.row.selectTitle", defaultMessage: "Select {title}" },
            { title: L },
          )),
          (A[3] = B),
          (A[4] = L),
          (A[5] = a))
        : (a = A[5]),
        A[6] !== T || A[7] !== k || A[8] !== S || A[9] !== a
          ? ((n = (0, l.jsx)("div", {
              className: "relative",
              children: (0, l.jsx)(x.S, { checked: S, disabled: T, onCheckedChange: k, "aria-label": a }),
            })),
            (A[6] = T),
            (A[7] = k),
            (A[8] = S),
            (A[9] = a),
            (A[10] = n))
          : (n = A[10]),
        A[11] !== R ? ((c = () => z(!R)), (A[11] = R), (A[12] = c)) : (c = A[12]))
      let $ = R ? "whitespace-pre-wrap break-words" : "line-clamp-2"
      ;(A[13] !== $ ? ((d = (0, P.A)($)), (A[13] = $), (A[14] = d)) : (d = A[14]),
        A[15] !== d || A[16] !== L
          ? ((m = (0, l.jsx)("span", { className: d, children: L })), (A[15] = d), (A[16] = L), (A[17] = m))
          : (m = A[17]),
        A[18] !== R || A[19] !== c || A[20] !== m
          ? ((g = (0, l.jsx)("button", {
              type: "button",
              className: "text-start text-sm font-medium",
              "aria-expanded": R,
              onClick: c,
              children: m,
            })),
            (A[18] = R),
            (A[19] = c),
            (A[20] = m),
            (A[21] = g))
          : (g = A[21]),
        A[22] === Symbol.for("react.memo_cache_sentinel")
          ? ((f = (0, l.jsx)("span", {
              className: "text-xs text-secondary select-none",
              children: (0, l.jsx)(o.A, {
                id: "codex.cme.conversation.row.cmeConversation",
                defaultMessage: "CME conversation",
              }),
            })),
            (A[22] = f))
          : (f = A[22]),
        A[23] !== g
          ? ((h = (0, l.jsxs)("div", { className: "flex min-w-0 flex-1 flex-col gap-2", children: [g, f] })),
            (A[23] = g),
            (A[24] = h))
          : (h = A[24]))
      let q = `https://chatgpt.com/c/${encodeURIComponent(M.conversation_id)}`
      A[25] !== B
        ? ((v = B.formatMessage({
            id: "codex.cme.conversation.row.openConversation",
            defaultMessage: "Open conversation",
          })),
          (A[25] = B),
          (A[26] = v))
        : (v = A[26])
      let F = `https://chatgpt.com/c/${encodeURIComponent(M.conversation_id)}`
      return (
        A[27] !== F
          ? ((b = (0, l.jsx)(O.g, { size: 16, href: F, openTarget: "external-browser" })), (A[27] = F), (A[28] = b))
          : (b = A[28]),
        A[29] !== q || A[30] !== v || A[31] !== b
          ? ((y = (0, l.jsx)(E.G, {
              href: q,
              initiator: "open_in_browser_bridge",
              openTarget: "external-browser",
              "aria-label": v,
              children: b,
            })),
            (A[29] = q),
            (A[30] = v),
            (A[31] = b),
            (A[32] = y))
          : (y = A[32]),
        A[33] !== B
          ? ((j = B.formatMessage({
              id: "codex.cme.conversation.row.removeConversation",
              defaultMessage: "Remove conversation",
            })),
            (A[33] = B),
            (A[34] = j))
          : (j = A[34]),
        A[35] === Symbol.for("react.memo_cache_sentinel") ? ((C = (0, l.jsx)(p.cSG, {})), (A[35] = C)) : (C = A[35]),
        A[36] !== T || A[37] !== I || A[38] !== j
          ? ((N = (0, l.jsx)(u.$, {
              color: "ghost",
              size: "icon",
              onClick: I,
              disabled: T,
              "aria-label": j,
              children: C,
            })),
            (A[36] = T),
            (A[37] = I),
            (A[38] = j),
            (A[39] = N))
          : (N = A[39]),
        A[40] !== y || A[41] !== N
          ? ((w = (0, l.jsxs)("div", { className: "flex items-center gap-2", children: [y, N] })),
            (A[40] = y),
            (A[41] = N),
            (A[42] = w))
          : (w = A[42]),
        A[43] !== h || A[44] !== w || A[45] !== n
          ? ((_ = (0, l.jsxs)("div", { className: "flex items-start gap-3 px-4 py-3", children: [n, h, w] })),
            (A[43] = h),
            (A[44] = w),
            (A[45] = n),
            (A[46] = _))
          : (_ = A[46]),
        _
      )
    }
    var R = a("oUPQ")
    function z(e) {
      let t,
        a,
        n,
        i,
        c,
        d,
        m,
        g,
        f,
        h,
        v,
        b,
        y,
        j,
        C,
        N,
        w,
        _,
        A,
        M,
        S,
        k,
        I,
        T,
        P,
        E,
        O,
        B,
        z,
        F,
        D,
        Y,
        U = (0, s.c)(78),
        { conversation: G, response: W, onChange: H, onRemove: K, disabled: V } = e,
        Q = (0, r.A)()
      U[0] !== Q
        ? ((t = Q.formatMessage({
            id: "codex.cme.survey.howDidThisResponseAndTheReferencesUsed",
            defaultMessage: "How did this response and the references used affect your clinical practice?",
          })),
          (U[0] = Q),
          (U[1] = t))
        : (t = U[1])
      let X = t
      U[2] !== Q
        ? ((a = Q.formatMessage({
            id: "codex.cme.survey.didYourMedicalKnowledgeImproveBecauseOfThe",
            defaultMessage: "Did your medical knowledge improve because of the answer and the references used?",
          })),
          (U[2] = Q),
          (U[3] = a))
        : (a = U[3])
      let Z = a
      ;(U[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((n = {
            value: "modified_clinical_practice",
            label: (0, l.jsx)(o.A, {
              id: "codex.cme.survey.thisModifiedMyClinicalPracticeOrHealthcarePlan",
              defaultMessage: "This modified my clinical practice or healthcare plan",
            }),
          }),
          (U[4] = n))
        : (n = U[4]),
        U[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((i = {
              value: "reinforced_current_clinical_practice",
              label: (0, l.jsx)(o.A, {
                id: "codex.cme.survey.thisReinforcedMyCurrentClinicalPracticeOrHealthcare",
                defaultMessage: "This reinforced my current clinical practice or healthcare plan",
              }),
            }),
            (U[5] = i))
          : (i = U[5]),
        U[6] === Symbol.for("react.memo_cache_sentinel")
          ? ((c = [
              n,
              i,
              {
                value: "did_not_affect_current_clinical_practice",
                label: (0, l.jsx)(o.A, {
                  id: "codex.cme.survey.thisDidNotAffectMyCurrentClinicalPractice",
                  defaultMessage: "This did not affect my current clinical practice or healthcare plan",
                }),
              },
            ]),
            (U[6] = c))
          : (c = U[6]))
      let J = c
      ;(U[7] === Symbol.for("react.memo_cache_sentinel")
        ? ((d = {
            value: "increased_significantly",
            label: (0, l.jsx)(o.A, {
              id: "codex.cme.survey.increasedSignificantly",
              defaultMessage: "Increased significantly",
            }),
          }),
          (U[7] = d))
        : (d = U[7]),
        U[8] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = {
              value: "increased_slightly",
              label: (0, l.jsx)(o.A, {
                id: "codex.cme.survey.increasedSlightly",
                defaultMessage: "Increased slightly",
              }),
            }),
            (U[8] = m))
          : (m = U[8]),
        U[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((g = [
              d,
              m,
              {
                value: "no_change",
                label: (0, l.jsx)(o.A, { id: "codex.cme.survey.didNotChange", defaultMessage: "Did not change" }),
              },
            ]),
            (U[9] = g))
          : (g = U[9]))
      let ee = g,
        et = G.prompt_text || G.conversation_id
      ;(U[10] !== et
        ? ((f = (0, l.jsx)("legend", { className: "sr-only", children: et })), (U[10] = et), (U[11] = f))
        : (f = U[11]),
        U[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((h = (0, l.jsx)("span", {
              className: "text-xs font-semibold text-codex-description uppercase select-none",
              children: (0, l.jsx)(o.A, { id: "codex.cme.survey.conversation", defaultMessage: "Conversation" }),
            })),
            (U[12] = h))
          : (h = U[12]))
      let ea = G.prompt_text || G.conversation_id
      ;(U[13] !== ea
        ? ((v = (0, l.jsxs)("div", {
            className: "flex flex-col gap-1",
            children: [h, (0, l.jsx)("p", { className: "font-medium", children: ea })],
          })),
          (U[13] = ea),
          (U[14] = v))
        : (v = U[14]),
        U[15] !== Q
          ? ((b = Q.formatMessage({
              id: "codex.cme.survey.removeConversationFromSurvey",
              defaultMessage: "Remove conversation from survey",
            })),
            (U[15] = Q),
            (U[16] = b))
          : (b = U[16]),
        U[17] === Symbol.for("react.memo_cache_sentinel") ? ((y = (0, l.jsx)(p.cSG, {})), (U[17] = y)) : (y = U[17]),
        U[18] !== V || U[19] !== K || U[20] !== b
          ? ((j = (0, l.jsx)(u.$, {
              color: "ghost",
              size: "icon",
              onClick: K,
              disabled: V,
              "aria-label": b,
              children: y,
            })),
            (U[18] = V),
            (U[19] = K),
            (U[20] = b),
            (U[21] = j))
          : (j = U[21]),
        U[22] !== v || U[23] !== j
          ? ((C = (0, l.jsxs)("div", { className: "flex items-start justify-between gap-3", children: [v, j] })),
            (U[22] = v),
            (U[23] = j),
            (U[24] = C))
          : (C = U[24]),
        U[25] !== X
          ? ((N = (0, l.jsx)("legend", { className: "mb-3 font-medium", children: X })), (U[25] = X), (U[26] = N))
          : (N = U[26]))
      let el = `practice-${G.conversation_id}`,
        es = W.practice_changed ?? ""
      ;(U[27] !== H || U[28] !== W
        ? ((w = (e) => H({ ...W, practice_changed: e || null })), (U[27] = H), (U[28] = W), (U[29] = w))
        : (w = U[29]),
        U[30] === Symbol.for("react.memo_cache_sentinel") ? ((_ = J.map($)), (U[30] = _)) : (_ = U[30]),
        U[31] !== V || U[32] !== X || U[33] !== el || U[34] !== es || U[35] !== w
          ? ((A = (0, l.jsx)(R.z, {
              name: el,
              value: es,
              onChange: w,
              direction: "col",
              disabled: V,
              "aria-label": X,
              children: _,
            })),
            (U[31] = V),
            (U[32] = X),
            (U[33] = el),
            (U[34] = es),
            (U[35] = w),
            (U[36] = A))
          : (A = U[36]),
        U[37] !== W.practice_changed
          ? ((M = "did_not_affect_current_clinical_practice" === W.practice_changed ? (0, l.jsx)(q, {}) : null),
            (U[37] = W.practice_changed),
            (U[38] = M))
          : (M = U[38]),
        U[39] !== N || U[40] !== A || U[41] !== M
          ? ((S = (0, l.jsxs)("fieldset", { className: "flex flex-col gap-3", children: [N, A, M] })),
            (U[39] = N),
            (U[40] = A),
            (U[41] = M),
            (U[42] = S))
          : (S = U[42]),
        U[43] !== Z
          ? ((k = (0, l.jsx)("legend", { className: "mb-3 font-medium", children: Z })), (U[43] = Z), (U[44] = k))
          : (k = U[44]))
      let en = `knowledge-${G.conversation_id}`,
        ei = W.knowledge_improvement ?? ""
      return (
        U[45] !== H || U[46] !== W
          ? ((I = (e) => H({ ...W, knowledge_improvement: e || null })), (U[45] = H), (U[46] = W), (U[47] = I))
          : (I = U[47]),
        U[48] === Symbol.for("react.memo_cache_sentinel") ? ((T = ee.map(L)), (U[48] = T)) : (T = U[48]),
        U[49] !== V || U[50] !== Z || U[51] !== en || U[52] !== ei || U[53] !== I
          ? ((P = (0, l.jsx)(R.z, {
              name: en,
              value: ei,
              onChange: I,
              direction: "col",
              disabled: V,
              "aria-label": Z,
              children: T,
            })),
            (U[49] = V),
            (U[50] = Z),
            (U[51] = en),
            (U[52] = ei),
            (U[53] = I),
            (U[54] = P))
          : (P = U[54]),
        U[55] !== W.knowledge_improvement
          ? ((E = "no_change" === W.knowledge_improvement ? (0, l.jsx)(q, {}) : null),
            (U[55] = W.knowledge_improvement),
            (U[56] = E))
          : (E = U[56]),
        U[57] !== k || U[58] !== P || U[59] !== E
          ? ((O = (0, l.jsxs)("fieldset", { className: "flex flex-col gap-3", children: [k, P, E] })),
            (U[57] = k),
            (U[58] = P),
            (U[59] = E),
            (U[60] = O))
          : (O = U[60]),
        U[61] !== H || U[62] !== W
          ? ((B = (e) => H({ ...W, no_commercial_bias: e })), (U[61] = H), (U[62] = W), (U[63] = B))
          : (B = U[63]),
        U[64] !== V || U[65] !== W.no_commercial_bias || U[66] !== B
          ? ((z = (0, l.jsx)(x.S, {
              variant: "secondary",
              checked: W.no_commercial_bias,
              disabled: V,
              onCheckedChange: B,
            })),
            (U[64] = V),
            (U[65] = W.no_commercial_bias),
            (U[66] = B),
            (U[67] = z))
          : (z = U[67]),
        U[68] === Symbol.for("react.memo_cache_sentinel")
          ? ((F = (0, l.jsx)(o.A, {
              id: "codex.cme.survey.thereWasNoCommercialBias",
              defaultMessage: "There was no commercial bias",
            })),
            (U[68] = F))
          : (F = U[68]),
        U[69] !== z
          ? ((D = (0, l.jsxs)("label", {
              className: "relative flex items-center gap-2 select-none",
              children: [z, F],
            })),
            (U[69] = z),
            (U[70] = D))
          : (D = U[70]),
        U[71] !== V || U[72] !== f || U[73] !== C || U[74] !== S || U[75] !== O || U[76] !== D
          ? ((Y = (0, l.jsxs)("fieldset", {
              disabled: V,
              className: "flex flex-col gap-4 rounded-lg border border-default p-4 text-sm",
              children: [f, C, S, O, D],
            })),
            (U[71] = V),
            (U[72] = f),
            (U[73] = C),
            (U[74] = S),
            (U[75] = O),
            (U[76] = D),
            (U[77] = Y))
          : (Y = U[77]),
        Y
      )
    }
    function L(e) {
      return (0, l.jsx)(R.z.Item, { className: "select-none", value: e.value, children: e.label }, e.value)
    }
    function $(e) {
      return (0, l.jsx)(R.z.Item, { className: "select-none", value: e.value, children: e.label }, e.value)
    }
    function q() {
      let e,
        t = (0, s.c)(1)
      return (
        t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((e = (0, l.jsx)("p", {
              className: "text-xs font-bold text-danger",
              role: "alert",
              children: (0, l.jsx)(o.A, {
                id: "codex.cme.survey.aPositiveResponseIsRequiredToGrantCredit",
                defaultMessage: "A positive response is required to grant credit for this conversation",
              }),
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      )
    }
    let F = { practice_changed: null, knowledge_improvement: null, no_commercial_bias: !1 }
    function D(e) {
      let t,
        a,
        c,
        m,
        g,
        h,
        N,
        w,
        _,
        P,
        E,
        O,
        R,
        L,
        $,
        q,
        D,
        G,
        W,
        H,
        K,
        V,
        Q,
        X = (0, s.c)(102),
        { identity: Z, onClose: J, onCloseAutoFocus: ee, initialSelectedIds: et, onClaimApproved: ea } = e,
        el = (0, n.gh)(y.u),
        es = (0, r.A)(),
        en = (0, d.Zp)(),
        ei = (0, i.useRef)(null),
        [er, eo] = (0, i.useState)("claim"),
        [ec, ed] = (0, i.useState)(et ? "survey" : "select")
      X[0] !== et ? ((t = new Set(et)), (X[0] = et), (X[1] = t)) : (t = X[1])
      let [em, eu] = (0, i.useState)(t)
      X[2] === Symbol.for("react.memo_cache_sentinel") ? ((a = new Set()), (X[2] = a)) : (a = X[2])
      let [ex, ep] = (0, i.useState)(a),
        [eg, ef] = (0, i.useState)(null)
      X[3] === Symbol.for("react.memo_cache_sentinel") ? ((c = {}), (X[3] = c)) : (c = X[3])
      let [eh, ev] = (0, i.useState)(c),
        [eb, ey] = (0, i.useState)(!1),
        [ej, eC] = (0, i.useState)(!1),
        [eN, ew] = (0, i.useState)(null),
        [e_, eA] = (0, i.useState)(!1),
        [eM, eS] = (0, i.useState)(null),
        { data: ek, isLoading: eI, isError: eT, refetch: eP } = (0, n._U)(j.Zf, Z),
        eE = "claim" === er
      X[4] !== eE ? ((m = { enabled: eE }), (X[4] = eE), (X[5] = m)) : (m = X[5])
      let {
          data: eO,
          isLoading: eB,
          isFetching: eR,
          isError: ez,
          refetch: eL,
          hasNextPage: e$,
          isFetchingNextPage: eq,
          fetchNextPage: eF,
        } = (0, n._U)(j.CC, Z, m),
        eD = eB || (eR && !eq)
      if (
        X[6] !== ek ||
        X[7] !== eT ||
        X[8] !== eI ||
        X[9] !== eg ||
        X[10] !== e_ ||
        X[11] !== eb ||
        X[12] !== eO?.pages ||
        X[13] !== eO?.pages.flatMap ||
        X[14] !== eM ||
        X[15] !== eF ||
        X[16] !== e$ ||
        X[17] !== Z ||
        X[18] !== es ||
        X[19] !== eD ||
        X[20] !== ez ||
        X[21] !== eq ||
        X[22] !== en ||
        X[23] !== ea ||
        X[24] !== J ||
        X[25] !== ee ||
        X[26] !== eN ||
        X[27] !== eL ||
        X[28] !== eP ||
        X[29] !== ex ||
        X[30] !== eh ||
        X[31] !== el ||
        X[32] !== em ||
        X[33] !== ej ||
        X[34] !== ec ||
        X[35] !== er
      ) {
        let e,
          t,
          a,
          s,
          n,
          i,
          r = eO?.pages.flatMap(U).filter((e) => !ex.has(e.conversation_id)),
          c = r?.filter((e) => em.has(e.conversation_id)) ?? [],
          d = null != r && r.length > 0 && r.every((e) => em.has(e.conversation_id)),
          m =
            ek?.is_complete === !0 &&
            c.length > 0 &&
            c.every((e) => {
              var t
              return (
                ("modified_clinical_practice" === (t = eh[e.conversation_id] ?? F).practice_changed ||
                  "reinforced_current_clinical_practice" === t.practice_changed) &&
                ("increased_significantly" === t.knowledge_improvement ||
                  "increased_slightly" === t.knowledge_improvement) &&
                t.no_commercial_bias
              )
            }),
          y = function (e) {
            ;(eu((t) => {
              let a = new Set(t)
              return (a.delete(e), a)
            }),
              ev((t) => {
                let a = { ...t }
                return (delete a[e], a)
              }),
              1 === c.length && ed("select"))
          },
          K = async function () {
            if (!e_ && m)
              return eb
                ? (eA(!0),
                  eS(null),
                  (0, j.qk)(el, Z, {
                    credit_administration_consent: eb,
                    conversations: c.map((e) => {
                      let t = eh[e.conversation_id] ?? F
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
                        ((0, T.yy)(el, A.k, {
                          approved: e.approved,
                          conversationCount: (0, M.At)(e.conversation_count),
                          claimId: e.claim_id ?? void 0,
                        }),
                        e.approved)
                      ) {
                        if (e.claim_id) {
                          let t = new Date(e.created_at ?? Date.now()),
                            a = Number.isNaN(t.getTime()) ? new Date().getUTCFullYear() : t.getUTCFullYear()
                          a >= 2026 && ef(a)
                        }
                        ;(eo("credits"),
                          ed("select"),
                          eu(new Set()),
                          ev({}),
                          ey(!1),
                          eC(!1),
                          el
                            .get(b.Id)
                            .success(
                              (0, l.jsx)(o.A, {
                                id: "codex.cme.dialog.creditsApproved",
                                defaultMessage: "Credits approved",
                              }),
                            ),
                          ea?.())
                      } else
                        eS(
                          (0, l.jsx)(o.A, {
                            id: "codex.cme.dialog.creditsCouldNotBeApproved",
                            defaultMessage: "Credits could not be approved",
                          }),
                        )
                    })
                    .catch(() => {
                      eS(
                        (0, l.jsx)(o.A, {
                          id: "codex.cme.dialog.unableToSubmitYourClaimPleaseTryAgain",
                          defaultMessage: "Unable to submit your claim. Please try again.",
                        }),
                      )
                    })
                    .finally(() => eA(!1)))
                : void eC(!0)
          }
        ;(X[52] !== e_ || X[53] !== y || X[54] !== Z || X[55] !== eN || X[56] !== el
          ? ((e = async function () {
              if (!e_ && null != eN)
                return (
                  eA(!0),
                  eS(null),
                  (0, j.ZB)(el, Z, eN)
                    .then(() => {
                      ;(ep((e) => new Set([...e, eN])), y(eN), ew(null))
                    })
                    .catch(() => {
                      eS(
                        (0, l.jsx)(o.A, {
                          id: "codex.cme.dialog.unableToRemoveThisConversationPleaseTryAgain",
                          defaultMessage: "Unable to remove this conversation. Please try again.",
                        }),
                      )
                    })
                    .finally(() => eA(!1))
                )
            }),
            (X[52] = e_),
            (X[53] = y),
            (X[54] = Z),
            (X[55] = eN),
            (X[56] = el),
            (X[57] = e))
          : (e = X[57]),
          (N = e),
          (h = I.lG),
          (O = !0),
          X[58] === Symbol.for("react.memo_cache_sentinel")
            ? ((t = () => {
                ei.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
              }),
              (X[58] = t))
            : (t = X[58]),
          X[59] !== ee
            ? ((R = {
                onOpenAutoFocus: t,
                onCloseAutoFocus: (e) => {
                  null != ee
                    ? (e.preventDefault(), ee())
                    : ei.current?.isConnected && (e.preventDefault(), ei.current.focus({ preventScroll: !0 }))
                },
              }),
              (X[59] = ee),
              (X[60] = R))
            : (R = X[60]),
          X[61] !== e_ || X[62] !== J
            ? ((L = (e) => {
                e || e_ || J()
              }),
              (X[61] = e_),
              (X[62] = J),
              (X[63] = L))
            : (L = X[63]),
          ($ = "large"),
          (q = e_),
          (g = v.R4),
          (D = "form"),
          (G = "viewport"),
          (W = (e) => {
            ;(e.preventDefault(), "survey" === ec && "claim" === er && K())
          }),
          X[64] === Symbol.for("react.memo_cache_sentinel")
            ? ((H = (0, l.jsx)(v.c7, {
                title: (0, l.jsx)(I.L3, {
                  className: "font-normal",
                  children: (0, l.jsx)(o.A, { id: "codex.cme.dialog.cme", defaultMessage: "CME" }),
                }),
              })),
              (X[64] = H))
            : (H = X[64]),
          X[65] === Symbol.for("react.memo_cache_sentinel")
            ? ((w = (0, l.jsx)(I.rr, {
                className: "sr-only",
                children: (0, l.jsx)(o.A, {
                  id: "codex.cme.dialog.manageYourContinuingMedicalEducationCredits",
                  defaultMessage: "Manage your continuing medical education credits",
                }),
              })),
              (X[65] = w))
            : (w = X[65]),
          X[66] !== es
            ? ((a = es.formatMessage({ id: "codex.cme.dialog.cmeTabs", defaultMessage: "CME tabs" })),
              (X[66] = es),
              (X[67] = a))
            : (a = X[67]),
          X[68] === Symbol.for("react.memo_cache_sentinel")
            ? ((s = { id: "claim", label: (0, l.jsx)(o.A, { id: "codex.cme.dialog.claim", defaultMessage: "Claim" }) }),
              (X[68] = s))
            : (s = X[68]),
          X[69] === Symbol.for("react.memo_cache_sentinel")
            ? ((n = [
                s,
                {
                  id: "credits",
                  label: (0, l.jsx)(o.A, {
                    id: "codex.cme.dialog.approvedCredits",
                    defaultMessage: "Approved credits",
                  }),
                },
              ]),
              (X[69] = n))
            : (n = X[69]),
          X[70] !== a || X[71] !== er
            ? ((i = (0, l.jsx)(k.q, {
                className: "w-full",
                animateSelection: !1,
                selectedId: er,
                onSelect: eo,
                ariaLabel: a,
                options: n,
              })),
              (X[70] = a),
              (X[71] = er),
              (X[72] = i))
            : (i = X[72]),
          X[73] !== e_ || X[74] !== i
            ? ((_ = (0, l.jsx)(v.OO, { children: (0, l.jsx)("fieldset", { disabled: e_, children: i }) })),
              (X[73] = e_),
              (X[74] = i),
              (X[75] = _))
            : (_ = X[75]),
          X[76] !== eM
            ? ((P = eM
                ? (0, l.jsx)(v.OO, {
                    children: (0, l.jsx)("p", { role: "alert", className: "text-sm text-danger", children: eM }),
                  })
                : null),
              (X[76] = eM),
              (X[77] = P))
            : (P = X[77]),
          (E =
            "credits" === er
              ? (0, l.jsx)(C, { identity: Z, approvedYear: eg })
              : (0, l.jsxs)(l.Fragment, {
                  children: [
                    (0, l.jsxs)(v.OO, {
                      children: [
                        (0, l.jsxs)("div", {
                          className: "flex items-center gap-2",
                          children: [
                            (0, l.jsx)("h3", {
                              className: "font-semibold",
                              children: (0, l.jsx)(o.A, {
                                id: "codex.cme.dialog.claimYourCredits",
                                defaultMessage: "Claim your credits",
                              }),
                            }),
                            (0, l.jsx)(S.m, {
                              content: (0, l.jsx)(o.A, {
                                id: "codex.cme.dialog.thisActivityHasBeenPlannedAndImplementedIn",
                                defaultMessage:
                                  "This activity has been planned and implemented in accordance with the accreditation requirements and policies of the Accreditation Council for Continuing Medical Education (ACCME) through the joint providership of MEDICUSCME and OpenAI. MEDICUSCME is accredited by the ACCME to provide continuing medical education for physicians.",
                              }),
                              children: (0, l.jsx)(u.$, {
                                color: "ghost",
                                size: "iconCircleSm",
                                "aria-label": es.formatMessage({
                                  id: "codex.cme.dialog.cmeAccreditationInformation",
                                  defaultMessage: "CME accreditation information",
                                }),
                                children: (0, l.jsx)(p.ehD, { className: "text-codex-description" }),
                              }),
                            }),
                          ],
                        }),
                        "select" === ec
                          ? (0, l.jsx)("p", {
                              className: "text-sm text-codex-description",
                              children: (0, l.jsx)(o.A, {
                                id: "codex.cme.dialog.selectCmeConversationsToIncludeInYourCredit",
                                defaultMessage: "Select CME conversations to include in your credit claim",
                              }),
                            })
                          : (0, l.jsx)("p", {
                              className: "text-sm text-codex-description",
                              children: (0, l.jsx)(o.A, {
                                id: "codex.cme.dialog.completeThisShortQuestionnaireToSubmitYourClaim",
                                defaultMessage: "Complete this short questionnaire to submit your claim",
                              }),
                            }),
                      ],
                    }),
                    eI
                      ? (0, l.jsx)(v.OO, {
                          children: (0, l.jsx)("p", {
                            role: "status",
                            children: (0, l.jsx)(o.A, {
                              id: "codex.cme.dialog.loadingCmeProfile",
                              defaultMessage: "Loading CME profile\u2026",
                            }),
                          }),
                        })
                      : null,
                    eT
                      ? (0, l.jsxs)(v.OO, {
                          children: [
                            (0, l.jsx)("p", {
                              role: "alert",
                              children: (0, l.jsx)(o.A, {
                                id: "codex.cme.dialog.unableToLoadYourCmeProfile",
                                defaultMessage: "Unable to load your CME profile",
                              }),
                            }),
                            (0, l.jsx)(u.$, {
                              color: "secondary",
                              onClick: () => void eP(),
                              children: (0, l.jsx)(o.A, {
                                id: "codex.cme.dialog.tryAgain",
                                defaultMessage: "Try again",
                              }),
                            }),
                          ],
                        })
                      : null,
                    null == ek || ek.is_complete
                      ? null
                      : (0, l.jsx)(v.OO, {
                          children: (0, l.jsxs)("div", {
                            className: "flex flex-col items-start gap-3 rounded-lg border border-default p-4 text-sm",
                            children: [
                              (0, l.jsx)("p", {
                                children: (0, l.jsx)(o.A, {
                                  id: "codex.cme.dialog.completeYourCmeProfileInAccountSettingsAnd",
                                  defaultMessage:
                                    "Complete your CME profile in Account settings and confirm physician eligibility to claim CME credits",
                                }),
                              }),
                              (0, l.jsx)(u.$, {
                                color: "secondary",
                                disabled: e_,
                                onClick: () => {
                                  ;(J(), en("/settings/account"))
                                },
                                children: (0, l.jsx)(o.A, {
                                  id: "codex.cme.dialog.openAccountSettings",
                                  defaultMessage: "Open Account settings",
                                }),
                              }),
                            ],
                          }),
                        }),
                    "select" === ec
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            (0, l.jsx)(v.OO, {
                              children: (0, l.jsxs)("div", {
                                className: "flex items-center justify-between gap-3 text-sm select-none",
                                children: [
                                  (0, l.jsxs)("label", {
                                    className: "relative flex items-center gap-2",
                                    children: [
                                      (0, l.jsx)(x.S, {
                                        checked: d || (c.length > 0 && "indeterminate"),
                                        disabled: e_ || null == r || 0 === r.length,
                                        onCheckedChange: () => eu(new Set(d ? [] : r?.map(Y))),
                                      }),
                                      (0, l.jsx)(o.A, {
                                        id: "codex.cme.dialog.selectAll",
                                        defaultMessage: "Select all",
                                      }),
                                    ],
                                  }),
                                  c.length > 0
                                    ? (0, l.jsx)("span", {
                                        className: "text-codex-description",
                                        children: (0, l.jsx)(o.A, {
                                          id: "codex.cme.dialog.countSelected",
                                          defaultMessage: "{count} selected",
                                          values: { count: c.length },
                                        }),
                                      })
                                    : null,
                                ],
                              }),
                            }),
                            (0, l.jsx)(v.OO, {
                              children: (0, l.jsxs)("div", {
                                className: "overflow-hidden rounded-lg border border-default",
                                children: [
                                  eD
                                    ? (0, l.jsxs)("div", {
                                        className:
                                          "flex items-center justify-center py-10 text-sm text-codex-description",
                                        role: "status",
                                        children: [
                                          (0, l.jsx)(f.y, { className: "size-5" }),
                                          (0, l.jsx)("span", {
                                            className: "sr-only",
                                            children: (0, l.jsx)(o.A, {
                                              id: "codex.cme.dialog.loadingConversations",
                                              defaultMessage: "Loading conversations\u2026",
                                            }),
                                          }),
                                        ],
                                      })
                                    : null,
                                  eD || r?.length !== 0 || ez
                                    ? null
                                    : (0, l.jsx)("p", {
                                        className: "py-10 text-center text-sm text-codex-description",
                                        children: (0, l.jsx)(o.A, {
                                          id: "codex.cme.dialog.noCmeConversationsYet",
                                          defaultMessage: "No CME conversations yet",
                                        }),
                                      }),
                                  !eD && null != r && r.length > 0
                                    ? (0, l.jsx)("div", {
                                        className: "divide-default divide-y",
                                        children: r?.map((e) =>
                                          (0, l.jsx)(
                                            B,
                                            {
                                              conversation: e,
                                              selected: em.has(e.conversation_id),
                                              disabled: e_,
                                              onToggle: () =>
                                                eu((t) => {
                                                  let a = new Set(t)
                                                  return (
                                                    a.has(e.conversation_id)
                                                      ? a.delete(e.conversation_id)
                                                      : a.add(e.conversation_id),
                                                    a
                                                  )
                                                }),
                                              onRemove: () => {
                                                ;(eS(null), ew(e.conversation_id))
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
                            ez
                              ? (0, l.jsxs)(v.OO, {
                                  children: [
                                    (0, l.jsx)("p", {
                                      role: "alert",
                                      children: (0, l.jsx)(o.A, {
                                        id: "codex.cme.dialog.unableToLoadCmeConversations",
                                        defaultMessage: "Unable to load CME conversations",
                                      }),
                                    }),
                                    (0, l.jsx)(u.$, {
                                      color: "secondary",
                                      onClick: () => void eL(),
                                      children: (0, l.jsx)(o.A, {
                                        id: "codex.cme.dialog.tryAgain",
                                        defaultMessage: "Try again",
                                      }),
                                    }),
                                  ],
                                })
                              : null,
                            e$
                              ? (0, l.jsx)(v.OO, {
                                  children: (0, l.jsx)(u.$, {
                                    color: "secondary",
                                    loading: eq,
                                    onClick: () => void eF(),
                                    children: (0, l.jsx)(o.A, {
                                      id: "codex.cme.dialog.loadMore",
                                      defaultMessage: "Load more",
                                    }),
                                  }),
                                })
                              : null,
                            c.length > 0
                              ? (0, l.jsx)(v.OO, {
                                  children: (0, l.jsx)(v.Es, {
                                    expandSingleButton: !1,
                                    children: (0, l.jsx)(u.$, {
                                      disabled: e_ || ek?.is_complete !== !0 || eT,
                                      onClick: () => {
                                        ;(eS(null), ed("survey"))
                                      },
                                      children: (0, l.jsx)(o.A, {
                                        id: "codex.cme.dialog.next",
                                        defaultMessage: "Next",
                                      }),
                                    }),
                                  }),
                                })
                              : null,
                          ],
                        })
                      : (0, l.jsxs)("div", {
                          className: "flex flex-col gap-6 pt-6",
                          children: [
                            (0, l.jsx)("div", {
                              className: "flex flex-col gap-4",
                              children: c.map((e) =>
                                (0, l.jsx)(
                                  z,
                                  {
                                    conversation: e,
                                    response: eh[e.conversation_id] ?? F,
                                    disabled: e_,
                                    onChange: (t) => ev((a) => ({ ...a, [e.conversation_id]: t })),
                                    onRemove: () => y(e.conversation_id),
                                  },
                                  e.conversation_id,
                                ),
                              ),
                            }),
                            (0, l.jsxs)("div", {
                              className: "flex flex-col gap-2",
                              children: [
                                (0, l.jsxs)("label", {
                                  className: "relative flex items-start gap-2 text-sm select-none",
                                  children: [
                                    (0, l.jsx)(x.S, {
                                      variant: "secondary",
                                      checked: eb,
                                      disabled: e_,
                                      onCheckedChange: (e) => {
                                        ;(ey(e), eC(!1))
                                      },
                                      "aria-invalid": ej,
                                    }),
                                    (0, l.jsx)(o.A, {
                                      id: "codex.cme.dialog.iAgreeThatOpenaiMayShareMyName",
                                      defaultMessage:
                                        "I agree that OpenAI may share my name, date of birth, NPI and medical license information with our CME vendor and ACCME for credit administration.",
                                    }),
                                  ],
                                }),
                                ej
                                  ? (0, l.jsx)("p", {
                                      role: "alert",
                                      className: "text-sm text-danger",
                                      children: (0, l.jsx)(o.A, {
                                        id: "codex.cme.dialog.pleaseAgreeToTheCreditAdministrationDisclosureTo",
                                        defaultMessage:
                                          "Please agree to the credit administration disclosure to submit your claim",
                                      }),
                                    })
                                  : null,
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "flex items-center justify-between gap-3",
                              children: [
                                (0, l.jsx)(u.$, {
                                  color: "secondary",
                                  radius: "full",
                                  size: "medium",
                                  disabled: e_,
                                  onClick: () => ed("select"),
                                  children: (0, l.jsx)(o.A, { id: "codex.cme.dialog.back", defaultMessage: "Back" }),
                                }),
                                (0, l.jsx)(u.$, {
                                  radius: "full",
                                  size: "medium",
                                  type: "submit",
                                  disabled: !m || eT,
                                  loading: e_,
                                  children: (0, l.jsx)(o.A, {
                                    id: "codex.cme.dialog.submit",
                                    defaultMessage: "Submit",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                  ],
                })),
          (X[6] = ek),
          (X[7] = eT),
          (X[8] = eI),
          (X[9] = eg),
          (X[10] = e_),
          (X[11] = eb),
          (X[12] = eO?.pages),
          (X[13] = eO?.pages.flatMap),
          (X[14] = eM),
          (X[15] = eF),
          (X[16] = e$),
          (X[17] = Z),
          (X[18] = es),
          (X[19] = eD),
          (X[20] = ez),
          (X[21] = eq),
          (X[22] = en),
          (X[23] = ea),
          (X[24] = J),
          (X[25] = ee),
          (X[26] = eN),
          (X[27] = eL),
          (X[28] = eP),
          (X[29] = ex),
          (X[30] = eh),
          (X[31] = el),
          (X[32] = em),
          (X[33] = ej),
          (X[34] = ec),
          (X[35] = er),
          (X[36] = g),
          (X[37] = h),
          (X[38] = N),
          (X[39] = w),
          (X[40] = _),
          (X[41] = P),
          (X[42] = E),
          (X[43] = O),
          (X[44] = R),
          (X[45] = L),
          (X[46] = $),
          (X[47] = q),
          (X[48] = D),
          (X[49] = G),
          (X[50] = W),
          (X[51] = H))
      } else
        ((g = X[36]),
          (h = X[37]),
          (N = X[38]),
          (w = X[39]),
          (_ = X[40]),
          (P = X[41]),
          (E = X[42]),
          (O = X[43]),
          (R = X[44]),
          (L = X[45]),
          ($ = X[46]),
          (q = X[47]),
          (D = X[48]),
          (G = X[49]),
          (W = X[50]),
          (H = X[51]))
      return (
        X[78] !== g ||
        X[79] !== w ||
        X[80] !== _ ||
        X[81] !== P ||
        X[82] !== E ||
        X[83] !== D ||
        X[84] !== G ||
        X[85] !== W ||
        X[86] !== H
          ? ((K = (0, l.jsxs)(g, { as: D, size: G, onSubmit: W, children: [H, w, _, P, E] })),
            (X[78] = g),
            (X[79] = w),
            (X[80] = _),
            (X[81] = P),
            (X[82] = E),
            (X[83] = D),
            (X[84] = G),
            (X[85] = W),
            (X[86] = H),
            (X[87] = K))
          : (K = X[87]),
        X[88] !== e_ || X[89] !== eM || X[90] !== eN || X[91] !== N
          ? ((V =
              null != eN
                ? (0, l.jsx)(I.lG, {
                    open: !0,
                    onOpenChange: (e) => {
                      e || e_ || ew(null)
                    },
                    shouldIgnoreClickOutside: e_,
                    children: (0, l.jsxs)(v.R4, {
                      as: "form",
                      onSubmit: (e) => {
                        ;(e.preventDefault(), N())
                      },
                      children: [
                        (0, l.jsx)(v.c7, {
                          title: (0, l.jsx)(I.L3, {
                            children: (0, l.jsx)(o.A, {
                              id: "codex.cme.dialog.removeConversationFromClaim",
                              defaultMessage: "Remove conversation from Claim?",
                            }),
                          }),
                        }),
                        (0, l.jsxs)(v.OO, {
                          children: [
                            (0, l.jsx)(I.rr, {
                              children: (0, l.jsx)(o.A, {
                                id: "codex.cme.dialog.thisConversationWillNoLongerAppearInYour",
                                defaultMessage: "This conversation will no longer appear in your Claim list",
                              }),
                            }),
                            eM
                              ? (0, l.jsx)("p", { role: "alert", className: "text-sm text-danger", children: eM })
                              : null,
                          ],
                        }),
                        (0, l.jsx)(v.OO, {
                          children: (0, l.jsxs)(v.Es, {
                            children: [
                              (0, l.jsx)(u.$, {
                                color: "secondary",
                                disabled: e_,
                                onClick: () => ew(null),
                                children: (0, l.jsx)(o.A, { id: "codex.cme.dialog.cancel", defaultMessage: "Cancel" }),
                              }),
                              (0, l.jsx)(u.$, {
                                type: "submit",
                                color: "danger",
                                loading: e_,
                                children: (0, l.jsx)(o.A, { id: "codex.cme.dialog.remove", defaultMessage: "Remove" }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  })
                : null),
            (X[88] = e_),
            (X[89] = eM),
            (X[90] = eN),
            (X[91] = N),
            (X[92] = V))
          : (V = X[92]),
        X[93] !== h ||
        X[94] !== O ||
        X[95] !== R ||
        X[96] !== L ||
        X[97] !== $ ||
        X[98] !== q ||
        X[99] !== K ||
        X[100] !== V
          ? ((Q = (0, l.jsxs)(h, {
              open: O,
              contentProps: R,
              onOpenChange: L,
              size: $,
              shouldIgnoreClickOutside: q,
              children: [K, V],
            })),
            (X[93] = h),
            (X[94] = O),
            (X[95] = R),
            (X[96] = L),
            (X[97] = $),
            (X[98] = q),
            (X[99] = K),
            (X[100] = V),
            (X[101] = Q))
          : (Q = X[101]),
        Q
      )
    }
    function Y(e) {
      return e.conversation_id
    }
    function U(e) {
      return e.conversations
    }
    function G() {
      let e,
        t = (0, s.c)(2),
        a = (0, n.Ul)(j.OX)
      return (
        t[0] !== a
          ? ((e = null == a ? null : (0, l.jsx)(W, { identity: a }, `${a.accountId}:${a.userId}`)),
            (t[0] = a),
            (t[1] = e))
          : (e = t[1]),
        e
      )
    }
    function W(e) {
      let t,
        a,
        v,
        b,
        y,
        N,
        w,
        _,
        A,
        M,
        S,
        k,
        I,
        T,
        P,
        E,
        O,
        B,
        R,
        z,
        L,
        $,
        q,
        F,
        Y = (0, s.c)(79),
        { identity: U } = e,
        G = (0, r.A)(),
        W = (0, d.Zp)(),
        [V, Q] = (0, i.useState)("available")
      Y[0] === Symbol.for("react.memo_cache_sentinel") ? ((t = new Set()), (Y[0] = t)) : (t = Y[0])
      let [X, Z] = (0, i.useState)(t),
        [J, ee] = (0, i.useState)(!1),
        { data: et, isLoading: ea, isError: el, refetch: es } = (0, n._U)(j.Zf, U)
      Y[1] !== U || Y[2] !== V
        ? ((a = "claimed" === V ? { ...U, status: "claimed" } : U), (Y[1] = U), (Y[2] = V), (Y[3] = a))
        : (a = Y[3])
      let {
        data: en,
        isLoading: ei,
        isError: er,
        refetch: eo,
        hasNextPage: ec,
        fetchNextPage: ed,
        isFetchingNextPage: em,
      } = (0, n._U)(j.CC, a)
      Y[4] !== en?.pages || Y[5] !== en?.pages.flatMap || Y[6] !== X
        ? ((v = en?.pages.flatMap(K)),
          (b = v?.filter((e) => X.has(e.conversation_id))),
          (Y[4] = en?.pages),
          (Y[5] = en?.pages.flatMap),
          (Y[6] = X),
          (Y[7] = v),
          (Y[8] = b))
        : ((v = Y[7]), (b = Y[8]))
      let eu = b,
        ex = "available" === V ? (eu?.length ?? 0) : 0,
        ep = null != v && v.length > 0 && ex === v.length
      return (
        Y[9] === Symbol.for("react.memo_cache_sentinel")
          ? ((y = (0, l.jsxs)("span", {
              className: "flex flex-col items-start gap-4",
              children: [
                (0, l.jsx)(p.uZ4, {}),
                (0, l.jsx)(o.A, { id: "codex.cme.page.title", defaultMessage: "Continuing Medical Education (CME)" }),
              ],
            })),
            (N = (0, l.jsx)(o.A, { id: "codex.cme.page.subtitle", defaultMessage: "Claim your CME" })),
            (Y[9] = y),
            (Y[10] = N))
          : ((y = Y[9]), (N = Y[10])),
        Y[11] !== G
          ? ((w = G.formatMessage({ id: "codex.cme.page.tabs", defaultMessage: "CME activities" })),
            (Y[11] = G),
            (Y[12] = w))
          : (w = Y[12]),
        Y[13] === Symbol.for("react.memo_cache_sentinel")
          ? ((_ = {
              key: "available",
              name: (0, l.jsx)(o.A, { id: "codex.cme.page.available", defaultMessage: "Available" }),
            }),
            (Y[13] = _))
          : (_ = Y[13]),
        Y[14] === Symbol.for("react.memo_cache_sentinel")
          ? ((A = [
              _,
              { key: "claimed", name: (0, l.jsx)(o.A, { id: "codex.cme.page.claimed", defaultMessage: "Claimed" }) },
            ]),
            (Y[14] = A))
          : (A = Y[14]),
        Y[15] !== w || Y[16] !== V
          ? ((M = (0, l.jsx)(g.uC, {
              inset: !1,
              children: (0, l.jsx)(h.t, { ariaLabel: w, selectedKey: V, variant: "browse", onSelect: Q, tabs: A }),
            })),
            (Y[15] = w),
            (Y[16] = V),
            (Y[17] = M))
          : (M = Y[17]),
        Y[18] !== et || Y[19] !== W || Y[20] !== V
          ? ((S =
              "available" !== V || null == et || et.is_complete
                ? null
                : (0, l.jsx)(m.l, {
                    variant: "settings",
                    icon: (0, l.jsx)(p.pq1, {}),
                    stackOnNarrow: !0,
                    content: (0, l.jsx)(o.A, {
                      id: "codex.cme.dialog.completeYourCmeProfileInAccountSettingsAnd",
                      defaultMessage:
                        "Complete your CME profile in Account settings and confirm physician eligibility to claim CME credits",
                    }),
                    primaryCtaText: (0, l.jsx)(o.A, {
                      id: "codex.cme.page.accountSettings",
                      defaultMessage: "Account settings",
                    }),
                    onPrimaryCtaClick: () => void W("/settings/account"),
                  })),
            (Y[18] = et),
            (Y[19] = W),
            (Y[20] = V),
            (Y[21] = S))
          : (S = Y[21]),
        Y[22] !== ea || Y[23] !== V
          ? ((k =
              ea && "available" === V
                ? (0, l.jsx)("p", {
                    role: "status",
                    children: (0, l.jsx)(o.A, {
                      id: "codex.cme.dialog.loadingCmeProfile",
                      defaultMessage: "Loading CME profile\u2026",
                    }),
                  })
                : null),
            (Y[22] = ea),
            (Y[23] = V),
            (Y[24] = k))
          : (k = Y[24]),
        Y[25] !== el || Y[26] !== es || Y[27] !== V
          ? ((I =
              el && "available" === V
                ? (0, l.jsx)(m.l, {
                    type: "error",
                    content: (0, l.jsx)(o.A, {
                      id: "codex.cme.dialog.unableToLoadYourCmeProfile",
                      defaultMessage: "Unable to load your CME profile",
                    }),
                    primaryCtaText: (0, l.jsx)(o.A, { id: "codex.cme.page.retryProfile", defaultMessage: "Try again" }),
                    onPrimaryCtaClick: () => void es(),
                  })
                : null),
            (Y[25] = el),
            (Y[26] = es),
            (Y[27] = V),
            (Y[28] = I))
          : (I = Y[28]),
        Y[29] !== ei
          ? ((T = ei
              ? (0, l.jsxs)("div", {
                  role: "status",
                  className: "flex justify-center gap-2 py-10",
                  children: [
                    (0, l.jsx)(f.y, {}),
                    (0, l.jsx)(o.A, { id: "codex.cme.page.loading", defaultMessage: "Loading CME activities\u2026" }),
                  ],
                })
              : null),
            (Y[29] = ei),
            (Y[30] = T))
          : (T = Y[30]),
        Y[31] !== ep || Y[32] !== v || Y[33] !== G || Y[34] !== W || Y[35] !== ex || Y[36] !== X || Y[37] !== V
          ? ((P =
              null != v && v.length > 0
                ? (0, l.jsx)("div", {
                    className: "overflow-x-auto",
                    children: (0, l.jsxs)("table", {
                      className: "w-full text-start text-sm",
                      children: [
                        (0, l.jsx)("thead", {
                          className: "text-secondary",
                          children: (0, l.jsxs)("tr", {
                            className: "border-b border-default",
                            children: [
                              "available" === V
                                ? (0, l.jsx)("th", {
                                    scope: "col",
                                    className: "w-12 py-3 pe-4",
                                    children: (0, l.jsx)("div", {
                                      className: "relative flex justify-center",
                                      children: (0, l.jsx)(x.S, {
                                        checked: ex > 0 && (ep || "indeterminate"),
                                        onCheckedChange: () => Z(ep ? new Set() : new Set(v.map(H))),
                                        "aria-label": G.formatMessage({
                                          id: "codex.cme.page.selectAll",
                                          defaultMessage: "Select all loaded activities",
                                        }),
                                      }),
                                    }),
                                  })
                                : null,
                              (0, l.jsx)("th", {
                                scope: "col",
                                className: "w-24 py-3 pe-4 text-start font-normal",
                                children: (0, l.jsx)(o.A, { id: "codex.cme.page.credits", defaultMessage: "Credits" }),
                              }),
                              (0, l.jsx)("th", {
                                scope: "col",
                                className: "py-3 pe-4 text-start font-normal",
                                children: (0, l.jsx)(o.A, {
                                  id: "codex.cme.page.conversation",
                                  defaultMessage: "Conversation",
                                }),
                              }),
                              (0, l.jsx)("th", {
                                scope: "col",
                                className: "py-3 text-start font-normal whitespace-nowrap",
                                children:
                                  "claimed" === V
                                    ? (0, l.jsx)(o.A, {
                                        id: "codex.cme.page.dateClaimed",
                                        defaultMessage: "Date claimed",
                                      })
                                    : (0, l.jsx)(o.A, { id: "codex.cme.page.date", defaultMessage: "Date" }),
                              }),
                            ],
                          }),
                        }),
                        (0, l.jsx)("tbody", {
                          children: v.map((e) => {
                            let t =
                                e.title ||
                                e.prompt_text ||
                                G.formatMessage({
                                  id: "codex.cme.page.untitled",
                                  defaultMessage: "Untitled conversation",
                                }),
                              a = "claimed" === V ? e.claimed_at : e.created_at
                            return (0, l.jsxs)(
                              "tr",
                              {
                                className: "border-b border-default",
                                children: [
                                  "available" === V
                                    ? (0, l.jsx)("td", {
                                        className: "py-4 pe-4",
                                        children: (0, l.jsx)("div", {
                                          className: "relative flex justify-center",
                                          children: (0, l.jsx)(x.S, {
                                            checked: X.has(e.conversation_id),
                                            onCheckedChange: (t) =>
                                              Z((a) => {
                                                let l = new Set(a)
                                                return (t ? l.add(e.conversation_id) : l.delete(e.conversation_id), l)
                                              }),
                                            "aria-label": G.formatMessage(
                                              { id: "codex.cme.page.selectActivity", defaultMessage: "Select {title}" },
                                              { title: t },
                                            ),
                                          }),
                                        }),
                                      })
                                    : null,
                                  (0, l.jsx)("td", {
                                    className: "py-4 pe-4",
                                    children:
                                      null != e.credits
                                        ? (0, l.jsx)(c.Gr, { value: e.credits, maximumFractionDigits: 2 })
                                        : (0, l.jsx)(o.A, {
                                            id: "codex.cme.page.unavailableValue",
                                            defaultMessage: "\u2014",
                                          }),
                                  }),
                                  (0, l.jsx)("td", {
                                    className: "max-w-0 py-4 pe-4",
                                    children: (0, l.jsx)("button", {
                                      type: "button",
                                      className: "block w-full cursor-interaction truncate text-start hover:underline",
                                      title: t,
                                      onClick: () => void W(`/c/${e.conversation_id}`),
                                      children: t,
                                    }),
                                  }),
                                  (0, l.jsx)("td", {
                                    className: "py-4 whitespace-nowrap text-secondary",
                                    children: a
                                      ? (0, l.jsx)(c.XU, { value: a, year: "numeric", month: "short", day: "numeric" })
                                      : (0, l.jsx)(o.A, {
                                          id: "codex.cme.page.unavailableValue",
                                          defaultMessage: "\u2014",
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
            (Y[31] = ep),
            (Y[32] = v),
            (Y[33] = G),
            (Y[34] = W),
            (Y[35] = ex),
            (Y[36] = X),
            (Y[37] = V),
            (Y[38] = P))
          : (P = Y[38]),
        Y[39] !== v?.length || Y[40] !== er || Y[41] !== ei || Y[42] !== V
          ? ((E =
              ei || er || v?.length !== 0
                ? null
                : (0, l.jsx)("p", {
                    className: "py-10 text-center text-secondary",
                    children:
                      "claimed" === V
                        ? (0, l.jsx)(o.A, {
                            id: "codex.cme.page.emptyClaimed",
                            defaultMessage: "No claimed CME activities yet",
                          })
                        : (0, l.jsx)(o.A, {
                            id: "codex.cme.page.emptyAvailable",
                            defaultMessage: "No CME activities available to claim",
                          }),
                  })),
            (Y[39] = v?.length),
            (Y[40] = er),
            (Y[41] = ei),
            (Y[42] = V),
            (Y[43] = E))
          : (E = Y[43]),
        Y[44] !== er || Y[45] !== eo
          ? ((O = er
              ? (0, l.jsx)(m.l, {
                  type: "error",
                  content: (0, l.jsx)(o.A, {
                    id: "codex.cme.page.loadError",
                    defaultMessage: "Unable to load CME activities",
                  }),
                  primaryCtaText: (0, l.jsx)(o.A, {
                    id: "codex.cme.page.retryActivities",
                    defaultMessage: "Try again",
                  }),
                  onPrimaryCtaClick: () => void eo(),
                })
              : null),
            (Y[44] = er),
            (Y[45] = eo),
            (Y[46] = O))
          : (O = Y[46]),
        Y[47] !== ed || Y[48] !== ec || Y[49] !== em
          ? ((B = ec
              ? (0, l.jsx)("div", {
                  children: (0, l.jsx)(u.$, {
                    color: "secondary",
                    loading: em,
                    onClick: () => void ed(),
                    children: (0, l.jsx)(o.A, { id: "codex.cme.page.loadMore", defaultMessage: "Load more" }),
                  }),
                })
              : null),
            (Y[47] = ed),
            (Y[48] = ec),
            (Y[49] = em),
            (Y[50] = B))
          : (B = Y[50]),
        Y[51] !== U || Y[52] !== V
          ? ((R =
              "claimed" === V
                ? (0, l.jsx)("section", {
                    className: "flex flex-col gap-4",
                    children: (0, l.jsx)(C, { identity: U, approvedYear: null }),
                  })
                : null),
            (Y[51] = U),
            (Y[52] = V),
            (Y[53] = R))
          : (R = Y[53]),
        Y[54] !== S ||
        Y[55] !== k ||
        Y[56] !== I ||
        Y[57] !== T ||
        Y[58] !== P ||
        Y[59] !== E ||
        Y[60] !== O ||
        Y[61] !== B ||
        Y[62] !== R
          ? ((z = (0, l.jsxs)("div", { className: "flex flex-col gap-6 pb-6", children: [S, k, I, T, P, E, O, B, R] })),
            (Y[54] = S),
            (Y[55] = k),
            (Y[56] = I),
            (Y[57] = T),
            (Y[58] = P),
            (Y[59] = E),
            (Y[60] = O),
            (Y[61] = B),
            (Y[62] = R),
            (Y[63] = z))
          : (z = Y[63]),
        Y[64] !== z || Y[65] !== M
          ? ((L = (0, l.jsx)(g.Ql, { headerVariant: "compact", title: y, subtitle: N, controls: M, children: z })),
            (Y[64] = z),
            (Y[65] = M),
            (Y[66] = L))
          : (L = Y[66]),
        Y[67] !== et?.is_complete || Y[68] !== el || Y[69] !== ex
          ? (($ =
              ex > 0
                ? (0, l.jsxs)("div", {
                    className: "flex shrink-0 items-center justify-between gap-4 border-t border-default px-6 py-4",
                    children: [
                      (0, l.jsx)("span", {
                        "aria-live": "polite",
                        children: (0, l.jsx)(o.A, {
                          id: "codex.cme.page.selected",
                          defaultMessage: "{count, plural, one {# activity selected} other {# activities selected}}",
                          values: { count: ex },
                        }),
                      }),
                      (0, l.jsx)(u.$, {
                        color: "primary",
                        disabled: et?.is_complete !== !0 || el,
                        onClick: () => ee(!0),
                        children: (0, l.jsx)(o.A, { id: "codex.cme.page.claim", defaultMessage: "Claim CME" }),
                      }),
                    ],
                  })
                : null),
            (Y[67] = et?.is_complete),
            (Y[68] = el),
            (Y[69] = ex),
            (Y[70] = $))
          : ($ = Y[70]),
        Y[71] !== J || Y[72] !== U || Y[73] !== X
          ? ((q = J
              ? (0, l.jsx)(D, {
                  identity: U,
                  initialSelectedIds: X,
                  onClose: () => ee(!1),
                  onClaimApproved: () => {
                    ;(ee(!1), Z(new Set()), Q("claimed"))
                  },
                })
              : null),
            (Y[71] = J),
            (Y[72] = U),
            (Y[73] = X),
            (Y[74] = q))
          : (q = Y[74]),
        Y[75] !== L || Y[76] !== $ || Y[77] !== q
          ? ((F = (0, l.jsxs)("div", { className: "flex h-full min-h-0 flex-col", children: [L, $, q] })),
            (Y[75] = L),
            (Y[76] = $),
            (Y[77] = q),
            (Y[78] = F))
          : (F = Y[78]),
        F
      )
    }
    function H(e) {
      return e.conversation_id
    }
    function K(e) {
      return e.conversations
    }
  },
  v3GR(e, t, a) {
    var l = a("qmMi"),
      s = a("ChYf"),
      n = a("SPnB"),
      i = a("Kwur"),
      r = a("OWtl"),
      o = a("CwT5"),
      c = a("ripK"),
      d = a("rvFo")
    let m = (0, l.un)(r.u, ({ get: e }) => {
        if (!e(s.G, { name: "chatgpt.cme" }).isCapable) return null
        let t = e(n.m0),
          { userId: a } = e(n.PO)
        return "allowed" === t.status && "accountId" in t && null != t.accountId && null != a
          ? { accountId: t.accountId, userId: a }
          : null
      }),
      u = (0, l.vU)(r.u, (e, { get: t, scope: a }) => ({
        queryKey: ["cme-account", e.accountId, e.userId],
        enabled: g(e, t(m)),
        staleTime: d.D.FIVE_MINUTES,
        queryFn: async ({ signal: t }) => {
          f(a, e)
          let l = await i.Request.safeGet("/cme/account", {
            additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
            signal: t,
          })
          return (f(a, e), l)
        },
      })),
      x = (0, l.N3)(r.u, (e, { get: t, scope: a }) => ({
        queryKey: ["claimed" === e.status ? "cme-claimed-conversations" : "cme-conversations", e.accountId, e.userId],
        enabled: g(e, t(m)),
        staleTime: 0,
        gcTime: 0,
        initialPageParam: 1,
        getNextPageParam: (e) => e.next_page ?? void 0,
        queryFn: async ({ pageParam: t, signal: l }) => {
          f(a, e)
          let s = await i.Request.safeGet("/cme/conversations", {
            parameters: { query: { page: t, page_size: 25, status: e.status } },
            additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
            signal: l,
          })
          return (f(a, e), s)
        },
      })),
      p = (0, l.N3)(r.u, (e, { get: t, scope: a }) => ({
        queryKey: ["cme-credits", e.accountId, e.userId],
        enabled: g(e, t(m)),
        staleTime: 0,
        gcTime: 0,
        initialPageParam: 1,
        getNextPageParam: (e) => e.next_page ?? void 0,
        queryFn: async ({ pageParam: t, signal: l }) => {
          f(a, e)
          let s = await i.Request.safeGet("/cme/credits", {
            parameters: { query: { page: t, page_size: 25 } },
            additionalHeaders: { "ChatGPT-Account-Id": e.accountId },
            signal: l,
          })
          return (f(a, e), s)
        },
      }))
    function g(e, t) {
      return e.accountId === t?.accountId && e.userId === t.userId
    }
    function f(e, t) {
      if (!g(t, e.get(m))) throw Error("CME workspace or user changed during the request.")
    }
    a.d(
      t,
      {},
      {
        CC: x,
        CP: p,
        Kt: async function (e, t, a) {
          f(e, t)
          let l = await i.Request.safePatch("/cme/account", {
            requestBody: a,
            additionalHeaders: { "ChatGPT-Account-Id": t.accountId },
          })
          return (f(e, t), e.query.setData(u, t, l), await e.query.invalidate(u, t), f(e, t), l)
        },
        OX: m,
        ZB: async function (e, t, a) {
          ;(f(e, t),
            await i.Request.safePost("/cme/conversations/{conversation_id}/remove", {
              parameters: { path: { conversation_id: a } },
              additionalHeaders: { "ChatGPT-Account-Id": t.accountId },
            }),
            f(e, t),
            await e.query.invalidate(x, t),
            f(e, t))
        },
        Zf: u,
        mL: async function (e, t, a) {
          f(e, t)
          let l = await i.Request.getResponse("/cme/credits/{calendar_year}/artifact", {
              parameters: { path: { calendar_year: a } },
              additionalHeaders: { "ChatGPT-Account-Id": t.accountId },
            }),
            s = await l.blob()
          ;(f(e, t), (0, c.W)(s, (0, o.u)(l.headers.get("Content-Disposition")) ?? `cme-transcript-${a}.pdf`))
        },
        qk: async function (e, t, a) {
          f(e, t)
          let l = await i.Request.safePost("/cme/claims", {
            requestBody: a,
            additionalHeaders: { "ChatGPT-Account-Id": t.accountId },
          })
          return (
            f(e, t),
            await Promise.all([
              e.query.invalidate(x, t),
              e.query.invalidate(x, { ...t, status: "claimed" }),
              e.query.invalidate(p, t),
            ]),
            f(e, t),
            l
          )
        },
      },
    )
  },
  CwT5(e, t, a) {
    function l(e) {
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
            let l = a[2],
              s = void 0 === l ? (a[3]?.trim() ?? "") : l.replace(/\\"/g, '"')
            t.has(e) || t.set(e, s)
          }
          let a = t.get("filename*"),
            s = a?.match(/^utf-8'[^']*'(.*)$/i)?.[1]
          if (s)
            try {
              let e = decodeURIComponent(s)
              if (l(e)) return e
            } catch {}
          let n = t.get("filename")
          return n && l(n) ? n : null
        },
      },
    )
  },
}
//# sourceMappingURL=583168.aec588739b.js.map
